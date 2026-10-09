# Site du club « Doudeville Accueil Échecs »

Site statique (HTML/CSS/JS, sans build) hébergé sur GitHub Pages : https://doudeville-echecs.fr
Dépôt : `wilfriedcruchon-creator/doudeville-echecs`, branche `main`. Répondre à l'utilisateur en français.
L'utilisateur est le webmaster bénévole du club ; il me confie les mises à jour du site.

## Où modifier quoi
- **`data.js`** : tout le contenu éditable (CLUB, ACTUALITES, TOURNOIS, GALERIE, CHALLENGE, CHALLENGE_DEPARTEMENTAL, LICENCIES, ARCHIVES, VIDEOS, EQUIPES). Le relire avant de le modifier.
- **`calendrier.js`** : GÉNÉRÉ par `scripts/update_calendrier.py`. Ne jamais l'éditer à la main.
- `site.js` (en-tête, menu, pied de page, fonctions communes), `style.css` (thème rouge/or), une page `.html` par rubrique.
- Actualités : dans `texte`, une ligne `\n` = un paragraphe ; champs facultatifs `lien` / `lienTexte` et `photos: ["photo-XX"]` (fichiers de GALERIE affichés sous le texte). Nouvelles entrées en tête de liste.
- Pages hors menu : `inscription.html`, `licencies.html`, `challenge-departemental.html` (toutes `noindex`), `videos.html` (vide, masquée tant que VIDEOS = []).
- Ajouter une équipe : URL FFE dans `SOURCES` de `scripts/update_calendrier.py` + entrée dans `EQUIPES`.

## Mises à jour automatiques (GitHub Actions)
- `maj-calendrier.yml` : calendrier et résultats depuis la FFE (toutes les 3 h du samedi au lundi, une fois par jour du mardi au vendredi).
- `maj-elo.yml` : le lundi, met à jour UNIQUEMENT `elo`, `eloRapide`, `eloBlitz` des licences déjà présentes dans LICENCIES. La liste des joueurs reste manuelle.
- Les scripts (`scripts/`) n'utilisent que la bibliothèque standard Python et réessaient 3 fois si le site de la FFE est lent. Un échec isolé est sans gravité : le prochain passage rattrape.

## Publication
Autorisation permanente de publier les modifications demandées par l'utilisateur :
`git add <fichiers précis>` (JAMAIS `git add -A` ni `git add .`), vérifier `git status`, commit, `git pull --rebase`, `git push`, puis vérifier le site en ligne (GitHub Pages met 1 à 2 minutes ; le navigateur met les fichiers en cache environ 10 minutes).
Demander quand même confirmation pour les actions risquées ou difficiles à annuler.

## Vie privée (important)
- **Ne jamais committer les exports de licences** (`*.xlsx`, `*.csv`) : ils contiennent adresses, e-mails et téléphones. Si le dépôt est cloné ailleurs, les exclure localement dans `.git/info/exclude` (`*.xlsx`, `*.csv`, `.~lock.*`, `*.tmp`).
- La page licenciés n'affiche que nom, prénom, n° de licence et Elo (F = FIDE, N = national, E = estimé). Elle contient des mineurs : garder `noindex`, ne rien ajouter d'autre.
- Ne jamais publier de photo de personnes reconnaissables, surtout des enfants, sans accord explicite.

## Photos
- Toute photo fournie par l'utilisateur va AUSSI dans la galerie, sans qu'il ait à le redemander : `images/galerie/photo-XX.jpg` (1600 px max) + `photo-XX-mini.jpg` (700 px max) et une entrée en tête de `GALERIE` dans `data.js` (`fichier`, `alt`, `legende`). Pour une actualité, la référencer avec `photos: ["photo-XX"]`.
- Avant de publier : flouter les visages d'arrière-plan, des enfants et des tiers extérieurs au club (flou gaussien + pixellisation sur masque elliptique ; repérer les visages avec une grille de coordonnées). Ne pas flouter les adultes qui posent volontairement ni le joueur du club au premier plan.
- Toujours dire à l'utilisateur ce qui a été flouté pour qu'il puisse corriger.
- Ne pas nommer de personnes dans les légendes ou textes alternatifs sans confirmation.

## Informations de contact publiées
Président : Hubert Paillette. Webmaster : Wilfried Cruchon, wilfried.cruchon@gmail.com.

## En attente
- Calendriers des équipes jeunes (à ajouter quand l'utilisateur les aura).
- Barème du classement (à connaître après la ronde 1 du 11/10/2026) et vérification du format réel des scores FFE.
- Challenge des parties rapides : ronde 8 Bonsecours « avril 2026 » interprétée comme avril 2027 ; ronde 2 un samedi, à confirmer.
