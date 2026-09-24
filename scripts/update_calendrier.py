#!/usr/bin/env python3
"""Met à jour calendrier.js (rondes + résultats) depuis la page officielle de la FFE.

Usage : python scripts/update_calendrier.py
Sans dépendance externe (bibliothèque standard uniquement).
Le fichier n'est réécrit que si la lecture de la page a réussi.
"""
import html
import json
import re
import sys
import urllib.request
from datetime import datetime
from pathlib import Path

# Une entrée par page FFE (groupe). Ajouter ici les futures équipes (jeunes, coupes...).
SOURCES = [
    "https://www.echecs.asso.fr/EquipesCalendrier.aspx?Ref=2635&Saison=3000",
]
SORTIE = Path(__file__).resolve().parent.parent / "calendrier.js"

LIEUX = {"SOTTEVILLE LES ROUEN": "Sotteville-lès-Rouen"}


def telecharger(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (site-club-echecs)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


def texte(cellule):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", cellule)).replace("\xa0", " ")).strip()


def nom(s):
    return s.replace("Echiquier", "Échiquier")


def lieu(s):
    return LIEUX.get(s.upper(), s.title())


def analyser(page):
    """Retourne (rondes, resultats) à partir du HTML FFE."""
    rondes, resultats, courante = [], {}, None
    for tr in re.findall(r"<tr\b[^>]*>(.*?)</tr>", page, flags=re.S | re.I):
        cellules = [texte(c) for c in re.findall(r"<td\b[^>]*>(.*?)</td>", tr, flags=re.S | re.I)]
        m = re.fullmatch(r"Ronde (\d+)", cellules[0]) if len(cellules) == 1 else None
        if m:
            courante = {"n": int(m.group(1)), "date": None, "heure": None, "matchs": []}
            rondes.append(courante)
            continue
        if courante is None or len(cellules) != 6 or cellules[0] == "Blancs":
            continue
        blancs, r1, r2, noirs, quand, ou = cellules
        d = re.search(r"(\d{2})/(\d{2})/(\d{2}) (\d{2}:\d{2})", quand)
        if not d:
            continue
        if courante["date"] is None:
            courante["date"] = f"20{d.group(3)}-{d.group(2)}-{d.group(1)}"
            courante["heure"] = d.group(4)
        courante["matchs"].append([nom(blancs), nom(noirs), lieu(ou)])
        if r1 and r2:
            resultats[f"{courante['n']}-{nom(blancs)}-{nom(noirs)}"] = f"{r1}-{r2}"
    return rondes, resultats


def main():
    rondes, resultats = [], {}
    for url in SOURCES:
        r, s = analyser(telecharger(url))
        rondes += r
        resultats.update(s)
    nb = sum(len(r["matchs"]) for r in rondes)
    if not rondes or nb == 0 or any(r["date"] is None for r in rondes):
        sys.exit("Lecture de la page FFE impossible : calendrier.js n'a pas été modifié.")
    contenu = (
        "/* Fichier généré automatiquement par scripts/update_calendrier.py — ne pas modifier à la main. */\n"
        f"/* Dernière mise à jour : {datetime.now():%d/%m/%Y %H:%M} */\n"
        f"const RONDES = {json.dumps(rondes, ensure_ascii=False, indent=1)};\n"
        f"const RESULTATS = {json.dumps(resultats, ensure_ascii=False, indent=1)};\n"
        f"const MAJ = {json.dumps(datetime.now().strftime('%Y-%m-%d'))};\n"
    )
    ancien = SORTIE.read_text(encoding="utf-8") if SORTIE.exists() else ""
    # On ignore la ligne de date pour ne pas créer de modification si rien n'a changé.
    strip = lambda t: "\n".join(l for l in t.splitlines() if "Dernière mise à jour" not in l and not l.startswith("const MAJ"))
    if strip(ancien) == strip(contenu):
        print(f"Aucun changement ({len(rondes)} rondes, {nb} matchs, {len(resultats)} résultats).")
        return
    SORTIE.write_text(contenu, encoding="utf-8")
    print(f"calendrier.js mis à jour : {len(rondes)} rondes, {nb} matchs, {len(resultats)} résultats.")


if __name__ == "__main__":
    main()
