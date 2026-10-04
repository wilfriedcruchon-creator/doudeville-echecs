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

/* Actualités — la plus récente en premier. date : AAAA-MM-JJ. Une ligne du texte (séparée par \n) = un paragraphe.
   Facultatifs : lien + lienTexte ; photos = liste de `fichier` de la galerie (elles s'affichent sous le texte).
   Toute photo d'actualité doit aussi figurer dans GALERIE ci-dessous. */
const ACTUALITES = [
  {
    date: "2026-10-04",
    titre: "19e Rapide d'Orcher la Tour : une belle journée d'échecs",
    texte: "Une belle journée à Gonfreville l’Orcher pour le 19e Rapide d’Orcher la Tour réunissant 126 participants (dont un Grand Maître et trois Maîtres FIDE).\n" +
      "David Angot se hisse à la 46e place avec un score de 5/9.\n" +
      "David Pointel atteint la 66e place avec un joli 4,5/9.\n" +
      "Wilfried Cruchon fait 72e avec également un 4,5/9.\n" +
      "Une belle journée d’échecs et un repas super copieux partagé au buffet à volonté qui se trouvait à deux pas du tournoi ^^",
    photos: ["photo-03", "photo-04"],
  },
  {
    date: "2026-10-01",
    titre: "La liste des licenciés est disponible",
    texte: "Retrouvez la liste des licenciés du club, avec leur classement Elo, mis à jour automatiquement chaque semaine depuis le site de la FFE.",
    lien: "licencies.html",
    lienTexte: "Voir la liste des licenciés",
  },
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
  { fichier: "photo-03", alt: "Une partie en cours au 19e Rapide d'Orcher la Tour, dans une grande salle garnie d'échiquiers", legende: "19e Rapide d'Orcher la Tour, Gonfreville-l'Orcher (4 octobre 2026)." },
  { fichier: "photo-04", alt: "Trois joueurs posent devant une vitrine de trophées", legende: "19e Rapide d'Orcher la Tour, Gonfreville-l'Orcher (4 octobre 2026)." },
  { fichier: "photo-01", alt: "Partie d'échecs géants devant la mairie de Doudeville", legende: "" },
  { fichier: "photo-02", alt: "Premier logo du club : un cavalier blanc sur un damier rouge et jaune, avec les lettres D, A, E et une fleur bleue", legende: "Le tout premier logo du club, créé par Hubert Paillette il y a une trentaine d'années." },
];

/* Classement des joueurs du club au Challenge départemental (comité départemental d'échecs de Seine-Maritime).
   pl = place au classement général ; total = nombre de points total (points + bonus). Source : document transmis par le club. */
const CHALLENGE_DEPARTEMENTAL = [
  { pl: 5, nom: "Cruchon Wilfried", cat: "SenM", total: "48,00" },
  { pl: 26, nom: "Paillette Hubert", cat: "VetM", total: "28,00" },
  { pl: 56, nom: "Khettache Nassim", cat: "CadM", total: "20,50" },
  { pl: 61, nom: "Grignoux Yannick", cat: "SepM", total: "19,00" },
  { pl: 75, nom: "Hebert Jacky", cat: "VetM", total: "16,00" },
  { pl: 99, nom: "Douville Alexandre", cat: "JunM", total: "13,00" },
  { pl: 100, nom: "Bulard Laurent", cat: "VetM", total: "13,00" },
  { pl: 125, nom: "Gentet Elouan", cat: "MinM", total: "10,50" },
  { pl: 137, nom: "Vauclin Jacques", cat: "VetM", total: "9,00" },
  { pl: 213, nom: "Mendes Alexis", cat: "SenM", total: "7,00" },
  { pl: 245, nom: "Archimbaud Kenan", cat: "SenM", total: "6,00" },
  { pl: 246, nom: "Angot David", cat: "SenM", total: "6,00" },
  { pl: 284, nom: "Cinna Lionel", cat: "SenM", total: "5,50" },
  { pl: 285, nom: "Chemin Marc", cat: "VetM", total: "5,50" },
  { pl: 286, nom: "Guesdon Philippe", cat: "VetM", total: "5,50" },
  { pl: 316, nom: "Sery Elvin", cat: "MinM", total: "5,00" },
  { pl: 317, nom: "Pointel David", cat: "SenM", total: "5,00" },
  { pl: 319, nom: "Lecoutre Samuel", cat: "CadM", total: "5,00" },
  { pl: 322, nom: "Brault Vincenzo", cat: "PupM", total: "5,00" },
  { pl: 352, nom: "Wallerich Anatole", cat: "CadM", total: "4,50" },
  { pl: 365, nom: "Zayakh Rayane", cat: "MinM", total: "4,00" },
  { pl: 370, nom: "Auber Ryan", cat: "MinM", total: "4,00" },
  { pl: 380, nom: "Dutertre Nicolas", cat: "SepM", total: "3,50" },
  { pl: 383, nom: "Auber Rayan", cat: "MinM", total: "3,00" },
  { pl: 385, nom: "Lecomte Louis", cat: "VetM", total: "3,00" },
  { pl: 388, nom: "Le Marc Emeric", cat: "BenM", total: "3,00" },
];

/* Licenciés actifs du club (nom, prénom, n° FFE, Elo standard/rapide/blitz), par ordre alphabétique du nom.
   Source : export des licences FFE. Page non indexée, accessible uniquement depuis "Le club". */
const LICENCIES = [
  { nom: "Angot", prenom: "David", licence: "Z82469", elo: "1399 E", eloRapide: "1748 F", eloBlitz: "1199 E" },
  { nom: "Annet-Hue", prenom: "Evan", licence: "X52584", elo: "1299 E", eloRapide: "1535 F", eloBlitz: "920 E" },
  { nom: "Archimbaud", prenom: "Kenan", licence: "V08998", elo: "1708 F", eloRapide: "1644 F", eloBlitz: "1653 E" },
  { nom: "Baudet", prenom: "Axel", licence: "Z68428", elo: "1299 E", eloRapide: "799 E", eloBlitz: "799 E" },
  { nom: "Brault", prenom: "Vincenzo", licence: "X72710", elo: "1299 E", eloRapide: "1416 F", eloBlitz: "799 E" },
  { nom: "Chemin", prenom: "Marc", licence: "Y16884", elo: "1432 F", eloRapide: "1475 F", eloBlitz: "1476 E" },
  { nom: "Colignon", prenom: "Charles", licence: "T05922", elo: "1299 E", eloRapide: "799 E", eloBlitz: "799 E" },
  { nom: "Cruchon", prenom: "Wilfried", licence: "Z50926", elo: "1399 E", eloRapide: "1516 F", eloBlitz: "1199 E" },
  { nom: "Deslandre", prenom: "Anatole", licence: "V57495", elo: "1299 E", eloRapide: "1199 E", eloBlitz: "999 E" },
  { nom: "Dutertre", prenom: "Nicolas", licence: "Z69185", elo: "1399 E", eloRapide: "1199 E", eloBlitz: "1199 E" },
  { nom: "Garot", prenom: "Nicolas", licence: "N57705", elo: "1593 F", eloRapide: "1646 F", eloBlitz: "1633 E" },
  { nom: "Gentet", prenom: "Elouan", licence: "Z50927", elo: "1571 F", eloRapide: "1457 F", eloBlitz: "1199 E" },
  { nom: "Gombrowicz", prenom: "Cyrille", licence: "U50918", elo: "1585 F", eloRapide: "1539 F", eloBlitz: "1525 E" },
  { nom: "Hautot Delisle", prenom: "Erwan", licence: "X76478", elo: "1299 E", eloRapide: "940 N", eloBlitz: "999 E" },
  { nom: "Hebert", prenom: "Jacky", licence: "L08866", elo: "1399 E", eloRapide: "1170 N", eloBlitz: "1399 E" },
  { nom: "Lecomte", prenom: "Louis", licence: "T64839", elo: "1489 F", eloRapide: "1418 F", eloBlitz: "880 E" },
  { nom: "Lecoutre", prenom: "Samuel", licence: "Z63856", elo: "1299 E", eloRapide: "1512 F", eloBlitz: "1199 E" },
  { nom: "Lenoble", prenom: "Philippe", licence: "T05907", elo: "1399 E", eloRapide: "1199 E", eloBlitz: "1199 E" },
  { nom: "Martin", prenom: "Richard", licence: "V57496", elo: "1465 F", eloRapide: "1558 F", eloBlitz: "1199 E" },
  { nom: "Paillette", prenom: "Hubert", licence: "N07004", elo: "1516 F", eloRapide: "1460 N", eloBlitz: "1520 N" },
  { nom: "Palmero", prenom: "Ezio", licence: "T05929", elo: "1299 E", eloRapide: "799 E", eloBlitz: "799 E" },
  { nom: "Pointel", prenom: "David", licence: "W12660", elo: "1399 E", eloRapide: "1554 F", eloBlitz: "1399 E" },
  { nom: "Tronel", prenom: "Benoit", licence: "X82008", elo: "1299 E", eloRapide: "1199 E", eloBlitz: "999 E" },
  { nom: "Varin", prenom: "Herve", licence: "C51779", elo: "1639 F", eloRapide: "1870 N", eloBlitz: "1870 E" },
];

/* Vidéos (hébergées sur YouTube, lecteur sans cookies chargé au clic). La plus récente en premier.
   video : lien YouTube complet ou identifiant de 11 caractères ; date (AAAA-MM-JJ), legende, vignette et format (dimensions réelles de la vidéo : "4 / 5", "9 / 16", "4 / 3" ; "16 / 9" par défaut) sont facultatives.
   Exemple : { video: "https://youtu.be/XXXXXXXXXXX", titre: "Tournoi de Doudeville", date: "2027-01-24", legende: "Les meilleurs moments." } */
const VIDEOS = [
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
