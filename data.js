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
  webmaster: "Wilfried Cruchon",
  emailWebmaster: "wilfried.cruchon@gmail.com",
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
/* Champs facultatifs : cadence, info, details (liste), image, lien */
const TOURNOIS = [
  {
    date: "2026-10-04",
    titre: "19e Tournoi rapide d'Orcher la Tour",
    lieu: "Complexe Dojo Échecs, rue des Sports, Gonfreville-l'Orcher",
    cadence: "12 min + 3 s/coup",
    details: [
      "9 rondes",
      "Homologué FIDE et FFE",
      "Pointage de 8 h 30 à 9 h 00 · 1re ronde à 9 h 15",
      "Nombreux prix",
      "Compte pour le Challenge 76",
    ],
    image: "images/affiche-orcher-2026.jpg",
  },
];

/* Galerie photos. Pour ajouter une photo : déposer photo-XX.jpg et photo-XX-mini.jpg dans images/galerie/
   puis ajouter une ligne ci-dessous (la plus récente en premier). legende est facultative. */
const GALERIE = [
  { fichier: "photo-01", alt: "Partie d'échecs géants devant la mairie de Doudeville", legende: "" },
];

/* Challenge des parties rapides 2026-2027.
   date (AAAA-MM-JJ) si le jour est connu, sinon quand (texte libre). confirme:false => "À confirmer". */
const CHALLENGE = {
  titre: "Challenge des parties rapides 2026-2027",
  rondes: [
    { ronde: "1", date: "2026-10-04", lieu: "Gonfreville-l'Orcher", confirme: true },
    { ronde: "2", date: "2026-11-14", lieu: "Criquebeuf-en-Caux", confirme: false },
    { ronde: "3", date: "2026-12-13", lieu: "Dieppe", confirme: true },
    { ronde: "4", date: "2027-01-24", lieu: "Doudeville", confirme: true },
    { ronde: "5", date: "2027-02-14", lieu: "Petit-Caux", confirme: true },
    { ronde: "6", date: "2027-03-14", lieu: "Sotteville-lès-Rouen", confirme: false },
    { ronde: "7", date: "2027-04-11", lieu: "Saint-Étienne-du-Rouvray", confirme: true },
    { ronde: "8", quand: "Avril 2027", lieu: "Bonsecours", confirme: false },
    { ronde: "9", quand: "Mai 2027", lieu: "Rouen", confirme: false },
    { ronde: "10", quand: "Juin 2027", lieu: "Gournay-en-Bray", confirme: false },
  ],
};

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
