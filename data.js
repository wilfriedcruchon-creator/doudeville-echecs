/* ============================================================
   DONNÉES DU SITE — c'est le seul fichier à modifier pour mettre
   à jour les infos (club, actualités, tournois, calendriers).
   ============================================================ */

/* Informations du club — les valeurs entre [crochets] sont à compléter */
const CLUB = {
  nom: "Doudeville Accueil Échecs",
  ville: "Doudeville (Seine-Maritime)",
  salle: "Salle des Commissions, 1er étage de l'Hôtel de Ville, place du Général de Gaulle, 76560 Doudeville (accessible aux personnes à mobilité réduite)",
  horaires: "Mardi de 17 h à 19 h · Samedi de 15 h à 17 h",
  email: "hubert.paillette@cario.fr",
  telephone: "06 89 16 97 58",
  president: "Hubert Paillette",
  cotisations: "Adultes : 50 € · Jeunes : 45 €",
  ffe: "https://www.echecs.asso.fr/",
};

/* Actualités — la plus récente en premier. date : AAAA-MM-JJ */
const ACTUALITES = [
  {
    date: "2026-09-24",
    titre: "Le calendrier des équipes seniors est en ligne",
    texte:
      "Les équipes 1 et 2 évoluent cette saison en Régionale Normandie, groupe D. La première ronde a lieu le dimanche 11 octobre 2026. Retrouvez toutes les dates dans la page Calendriers.",
  },
];

/* Tournois — date : AAAA-MM-JJ */
const TOURNOIS = [
  /* Exemple :
  { date: "2026-12-05", titre: "Tournoi rapide de Doudeville", lieu: "Doudeville",
    cadence: "Rapide 15 min + 5 s", info: "Inscriptions sur place dès 13 h 30." },
  */
];

/* Équipes et leurs calendriers */
const EQUIPES = [
  {
    id: "d1",
    nom: "Doudeville 1",
    categorie: "Seniors",
    competition: "Régionale Normandie — Groupe D",
    source: "https://www.echecs.asso.fr/EquipesCalendrier.aspx?Ref=2635&Saison=3000",
  },
  {
    id: "d2",
    nom: "Doudeville 2",
    categorie: "Seniors",
    competition: "Régionale Normandie — Groupe D",
    source: "https://www.echecs.asso.fr/EquipesCalendrier.aspx?Ref=2635&Saison=3000",
  },
];

/* Les rondes et les résultats sont dans calendrier.js, mis à jour automatiquement depuis le site de la FFE. */
