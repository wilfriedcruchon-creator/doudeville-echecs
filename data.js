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

/* Archives reprises de l'ancien site (dae-doudeville.clubeo.com, 2013-2016).
   photos : { fichier (dans images/archives/), alt, legende } */
const ARCHIVES = {
  histoire: {
    note: "Texte publié sur l'ancien site du club en juin 2014 : les informations sont celles de cette date.",
    paragraphes: [
      "Le club de Doudeville a été créé le 1er avril 1997 par Hubert Paillette, avec l'aide de Louison Tartarin, ancien maire de Doudeville, et de l'association Doudeville Accueil, alors présidée par Bernard Vossier, Claire Leborgne étant secrétaire.",
      "Le club prend le nom définitif de Doudeville Accueil Échecs le 30 décembre 2003, suite à l'affiliation à la Jeunesse et aux Sports, selon la loi Buffet du 19 janvier 2000.",
      "Le lieu de jeu se situe au 1er étage de l'Hôtel de Ville de Doudeville, après avoir occupé plusieurs endroits dans la ville et accompagné ainsi les transformations et aménagements des loisirs de la commune.",
      "Le club compte, en moyenne, environ une cinquantaine d'adhérents venant de la région de Doudeville et d'établissements scolaires. Il compte parmi son effectif des champions de Seine-Maritime ainsi que de Haute-Normandie. Certains joueurs ont même participé aux championnats de France à Amiens et à Reims, notamment Alexis Defrance, Olivier Souillard et Léa Beintein.",
      "Le club a été champion par équipe dans le championnat régional en 2003, ainsi que champion en Nationale 4 chez les jeunes en 2006.",
      "Sur le plan scolaire, nos joueurs ont participé à plusieurs championnats d'académie avec leur école, collège ou lycée. Le collège A. Raimbourg de Doudeville a remporté deux fois le championnat de l'académie de Rouen et participé à la finale d'académie, notamment à Cergy-Pontoise et à Hyères dans le Var. Les lycéens du lycée Jean XXIII d'Yvetot ont été deux fois en finale à Cannes.",
      "Le club intervient dans le milieu scolaire, notamment à Jean Breton de Doudeville sur l'heure du midi le mardi, au collège Bobée d'Yvetot le vendredi midi, et à l'école de Grugny le mardi et le vendredi, dans le cadre du réaménagement scolaire.",
    ],
  },
  actus: [
    { date: "2015-04-04", titre: "Championnats jeunes individuels",
      texte: "Les championnats régionaux, qui se sont déroulés à Bonneville-sur-Iton dans l'Eure en février, ont vu la victoire de notre petit-poussin Lilian B., avec 7 victoires sur 7. Il était déjà champion de Seine-Maritime, également avec 7 victoires sur 7, à Gonfreville-l'Orcher en octobre dernier." },
    { date: "2013-05-20", titre: "Tournoi de blitz à Dieppe",
      texte: "Deux joueurs de Doudeville sont qualifiés. Le tournoi de blitz qui s'est déroulé à Dieppe tout au long de la saison 2012-2013 a vu la qualification pour la finale, en juin à Dieppe, de Yannick Grignoux et d'un autre joueur du club. Rendez-vous au « Tout va bien » à 10 h le samedi 8 juin." },
    { date: "2013-02-09", titre: "Le club crée son site Internet",
      texte: "Doudeville Accueil Échecs ouvre son premier site officiel, pour communiquer avec ses joueurs, ses dirigeants, ses partenaires et toute personne suivant la vie du club." },
  ],
  photos: [
    { fichier: "echiquier-2013.jpg", alt: "Un échiquier avec ses pièces disposées pour le début de partie", legende: "Album du 9 février 2013" },
  ],
};

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
