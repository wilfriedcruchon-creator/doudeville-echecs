#!/usr/bin/env python3
"""Met à jour le champ elo de chaque joueur de LICENCIES (dans data.js) depuis la page club FFE.

Usage : python scripts/update_elo.py
Ne touche qu'aux licences déjà présentes dans LICENCIES (le champ "elo" uniquement) :
n'ajoute ni ne retire aucun joueur, ne modifie ni nom ni prénom. La liste des licenciés
reste une décision manuelle du club ; seul leur classement Elo standard est automatique.
Sans dépendance externe (bibliothèque standard uniquement). Le fichier n'est réécrit que
si la lecture de la FFE a réussi ET que des valeurs ont réellement changé.
"""
import html
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

CLUB_REF = 1720
URL = f"https://www.echecs.asso.fr/ListeJoueurs.aspx?Action=JOUEURCLUBREF&ClubRef={CLUB_REF}"
DATA_JS = Path(__file__).resolve().parent.parent / "data.js"
UA = "Mozilla/5.0 (site-club-echecs)"

LIGNE = re.compile(
    r'<tr class=liste_(?:clair|fonce)>\s*'
    r'<td align=center>(?P<licence>\w+)</td>\s*'
    r'<td align=left>(?:<a[^>]*>)?(?P<nom>[^<]+)(?:</a>)?</td>.*?'
    r'<td align=right>(?P<elo>\d+&nbsp;[EFN])</td>',
    re.S,
)


def get(url, data=None, cookie=None):
    req = urllib.request.Request(
        url, data=data, method="POST" if data else "GET",
        headers={"User-Agent": UA, "Accept-Language": "fr-FR", **({"Cookie": cookie} if cookie else {})},
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace"), r.headers.get("Set-Cookie")


def champ_cache(page, nom):
    m = re.search(rf'id="{nom}" value="([^"]*)"', page)
    return m.group(1) if m else ""


def elos_du_club():
    """Lit toutes les pages de la liste des joueurs du club et retourne {licence: "1399 E"}."""
    page1, cookie = get(URL)
    elos = {}
    pages = [page1]
    vs, vsg, ev = champ_cache(page1, "__VIEWSTATE"), champ_cache(page1, "__VIEWSTATEGENERATOR"), champ_cache(page1, "__EVENTVALIDATION")
    # Pagination ASP.NET : on suit les liens "page suivante" tant qu'il y en a (evite une page infinie).
    page_n = 2
    while page_n < 20:
        data = urllib.parse.urlencode({
            "__EVENTTARGET": "ctl00$ContentPlaceHolderMain$PagerHeader",
            "__EVENTARGUMENT": str(page_n),
            "__VIEWSTATE": vs, "__VIEWSTATEGENERATOR": vsg, "__EVENTVALIDATION": ev,
        }).encode()
        suite, _ = get(URL, data=data, cookie=cookie)
        nouvelles_lignes = len(re.findall(r"<tr class=liste_(?:clair|fonce)>", suite))
        if nouvelles_lignes == 0:
            break
        pages.append(suite)
        vs2 = champ_cache(suite, "__VIEWSTATE")
        if vs2:
            vs = vs2
        page_n += 1
    for p in pages:
        for m in LIGNE.finditer(p):
            elos[m.group("licence")] = html.unescape(m.group("elo")).replace("\xa0", " ")
    return elos


def main():
    elos = elos_du_club()
    if not elos:
        sys.exit("Lecture de la page FFE impossible : data.js n'a pas été modifié.")

    texte = DATA_JS.read_text(encoding="utf-8")
    bloc = re.search(r"const LICENCIES = \[(.*?)\n\];", texte, re.S)
    if not bloc:
        sys.exit("Bloc LICENCIES introuvable dans data.js.")

    modifies = []

    def remplacer(m):
        licence = m.group("licence")
        if licence not in elos:
            return m.group(0)
        nouveau = elos[licence]
        if nouveau != m.group("elo"):
            modifies.append((licence, m.group("elo"), nouveau))
        return f'{m.group("avant")}elo: "{nouveau}" {m.group("apres")}'

    ligne_obj = re.compile(
        r'(?P<avant>\{\s*nom:\s*"[^"]*",\s*prenom:\s*"[^"]*",\s*licence:\s*"(?P<licence>[^"]*)",\s*)'
        r'elo:\s*"(?P<elo>[^"]*)"\s*(?P<apres>\})'
    )
    nouveau_bloc = ligne_obj.sub(remplacer, bloc.group(1))

    if not modifies:
        print(f"Aucun changement ({len(elos)} joueurs lus sur la FFE).")
        return

    texte = texte[:bloc.start(1)] + nouveau_bloc + texte[bloc.end(1):]
    DATA_JS.write_text(texte, encoding="utf-8")
    print(f"Elo mis à jour pour {len(modifies)} joueur(s) :")
    for licence, avant, apres in modifies:
        print(f"  {licence} : {avant} -> {apres}")


if __name__ == "__main__":
    main()
