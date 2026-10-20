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
- Page Résultats : la composition des équipes (champ `joueurs` de `EQUIPES`, numéros de licence) affiche prénom, nom et Elo, y compris pour les jeunes (accord de l'utilisateur, 09/10/2026). Ni date de naissance, ni catégorie, ni n° de licence.
- Ne jamais publier de photo de personnes reconnaissables, surtout des enfants, sans accord explicite.

## Photos
- Toute photo fournie par l'utilisateur va AUSSI dans la galerie, sans qu'il ait à le redemander : `images/galerie/photo-XX.jpg` (1600 px max) + `photo-XX-mini.jpg` (700 px max) et une entrée en tête de `GALERIE` dans `data.js` (`fichier`, `alt`, `legende`). Pour une actualité, la référencer avec `photos: ["photo-XX"]`.
- Avant de publier : flouter les visages d'arrière-plan, des enfants et des tiers extérieurs au club (flou gaussien + pixellisation sur masque elliptique ; repérer les visages avec une grille de coordonnées). Ne pas flouter les adultes qui posent volontairement ni le joueur du club au premier plan.
- Exception : photos-05, 06 et 07 (matchs du 11/10/2026 à Gonfreville l'Orcher) publiées SANS floutage, l'utilisateur ayant confirmé le 11/10/2026 avoir les autorisations des personnes visibles. Cela ne vaut que pour ces photos : pour les suivantes, appliquer la règle ci-dessus sauf nouvelle confirmation.
- Toujours dire à l'utilisateur ce qui a été flouté pour qu'il puisse corriger.
- Ne pas nommer de personnes dans les légendes ou textes alternatifs sans confirmation.

## Trophée départemental 76 (saison 2026-2027)
Données dans `TROPHEE` (`data.js`), affichées sur `calendriers.html` (onglet « Championnat départemental ») ; ajouter `lieu` à chaque ronde quand il est connu. Règlement V09/2026 du CDJE76 (PDF reçu le 17/10/2026, non versé au dépôt), résumé :
- Équipes de 4 joueurs licenciés A, matchs à 14 h 15, cadence 50 min + 10 s. Dates impératives (forfait sinon) ; avancer un match possible avec accord écrit du directeur de groupe, sauf dernière ronde.
- Plusieurs équipes d'un même club : un joueur ayant joué pour l'une ne peut plus jouer pour l'autre. Les joueurs du Trophée peuvent jouer dans les divisions supérieures (donc en Régionale).
- Mise à jour du 20/10/2026 (mail d'Etienne Grancher, nouveau PDF non lu) : limite Elo ABAISSÉE à 1700 (joueurs de moins de 1700 Elo à la date de la 1re ronde, 28/11/2026), au lieu de 1800 dans la V09/2026 ci-dessous. Inscription par simple retour de mail (nom, prénom, coordonnées du capitaine, lieu de jeu), date limite 07/11/2026, pas de limite d'équipes par club, aucun droit d'inscription. Le mail parle aussi d'« une seule partie par match » et de format « toutes rondes » : à clarifier.
- (V09/2026, périmé sur ce point) Elo standard ≤ 1800 à la première apparition en équipe ; 100 points d'écart max entre échiquiers (le mieux classé devant) ; composition remise 5 min avant, sans trou, identique au match retour.
- Forfait d'équipe : 25 € (50 € à la dernière ronde) ; 3 forfaits de joueurs = match perdu 3-0. Le club qui reçoit fournit salle et matériel. PV à transmettre avant 22 h le soir même.
- Points de match : victoire 3, nul 2, défaite 1, forfait 0.
- Dates : 28/11/26, 12/12/26, 16/01/27, 13/02/27, 13/03/27, 10/04/27, 15/05/27, 05/06/27 (tous des samedis).

## Informations de contact publiées
Président : Hubert Paillette. Webmaster : Wilfried Cruchon, wilfried.cruchon@gmail.com.

## En attente
- Calendriers des équipes jeunes (à ajouter quand l'utilisateur les aura).
- Barème du classement (à connaître après la ronde 1 du 11/10/2026) et vérification du format réel des scores FFE.
- Challenge des parties rapides : ronde 8 Bonsecours « avril 2026 » interprétée comme avril 2027, à confirmer. (Ronde 2 de Criquebeuf-en-Caux annulée : marquée `annule: true` dans CHALLENGE.)
- Trophée départemental : le club a engagé UNE équipe (mail du 17/10/2026, accusé de réception d'Etienne Grancher le 18/10, où le conflit du 13/03/27 a été signalé). Mais ce mail ne donnait pas le capitaine, ses coordonnées ni le lieu de jeu, demandés pour l'inscription (limite 07/11/2026) : à vérifier avec l'utilisateur. Lieux des rondes à ajouter au site. Nouveau règlement du 20/10/2026 (PDF joint au mail, non lisible via Gmail) à comparer avec le résumé. Veilles de ronde de Régionale : 28/11, 12/12 et 16/01. Licences de Gaetan et des deux Gonthier « en attente de paiement » (à vérifier avant le premier match). Archimbaud (1708 F) dépasse la nouvelle limite de 1700.
