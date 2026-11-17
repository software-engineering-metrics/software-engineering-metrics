# Journal des modifications

Modifications notables du livre et de son outillage. Les entrées les plus
récentes figurent en haut. Les dates suivent la norme ISO 8601 (AAAA-MM-JJ).

## [Unreleased]

### Changed

- Néerlandais (`nl-nl`) : traduction des titres et slugs anglais restants des sujets 9.0, 9.3 et 9.4
  (`bijlagen`, `controlelijsten`, `sjablonen`).
- Gallois (`cy-001`, `cy-gb`) : terminologie alignée sur TermCymru : `risg` (risque, remplaçant
  `perygl`, avec accord en genre), `cyfnewidiad` (compromis), `dangosydd rhagfynegi` et
  `dangosydd ôl-fynegi` (indicateur avancé et retardé, remplaçant `hwyrfrydig`), `cynhwysedd`
  (capacité), `dosraniad` (distribution), `cydberthynas` (corrélation), `allbwn` pour production dans
  le sujet 1.3, et `cyfradd gadael staff` (rotation du personnel). Quatre slugs de sujets ont été renommés pour correspondre.
- Site : mise à niveau de `@lilydesignsystem/svelte-picker-bar` vers 0.2.0, qui ajoute un sélecteur de
  recherche à la barre d'en-tête ; il soumet à la recherche existante du site `/?<query>`.
- Ajout de `scripts/generate-sitemap.mjs`, exécuté à la fin de `pnpm build`, qui
  écrit `sitemap.xml` à partir des pages pré-rendues (URL de locale canoniques uniquement,
  sans doublons d'alias à deux lettres) afin que la ligne `Sitemap:` de
  `robots.txt` soit résolue.
- `AGENTS.md` est désormais un court index ; les détails sont passés dans `AGENTS/layout.md`, `style.md`,
  `locales.md` et `workflow.md`.
- Passe de documentation : mise à jour de `AGENTS.md`, `index.md`, du texte de locales du
  README généré, de `spec/index.md`, `spec/locales.md`, ainsi que de `AGENTS.md` et `README.md` du site
  pour 27 locales, des noms de répertoires de section par locale et du nouvel outillage ;
  ajout de `CLAUDE.md` (un pointeur vers `AGENTS.md`) ; correction des anciens chemins `docs/` dans les deux
  compétences d'agent et de `skills/` comme copie canonique de `.claude/skills/`
  (vérifié par les tests).
- Ajout de `llms.txt` et `llms.json` (un index pour agents d'IA de chaque locale et sujet
  servis) dans `static/` du site, générés par `tools/gen_llms.py`
  (`just llms`) et vérifiés par les tests.
- Page d'accueil du site : la liste de tuiles des « neuf parties » est désormais une liste imbriquée « Contenu » de toutes les
  parties et de tous les sujets, et la section « La loi de Goodhart, partout » est supprimée.
- Remplacement de « chapter » par « topic » dans toute la prose du livre pour chaque
  locale (par exemple « sujet 2.1 », « Sujets de cette partie »), en utilisant le mot propre à
  chaque langue pour sujet (`tema`, `sujet`, `Thema`, `тема`, `主題`,
  et ainsi de suite), ainsi que dans la spécification, le texte généré par les outils et les
  chaînes d'interface du site. Les noms de fichiers, les URL et les clés de section sont inchangés.
- Traduction de chaque nom de répertoire de section sous `locales/` : `chapters/` est
  désormais `topics/` (et sa traduction dans chaque autre locale, p. ex. `temas/`,
  `sujets/`, `themen/`), et le `examples/` de `es-001` est `ejemplos/`. Les noms
  résident dans `spec/section-names.json` ; les outils, les tests et la synchronisation de contenu du site
  les lisent à cet endroit, et les URL du site sont inchangées.

### Changed

- Révision des locales galloises (`cy-001`, `cy-gb`, maintenues identiques) par rapport à la liste de
  terminologie TermCymru du gouvernement gallois : `llesiant` pour bien-être,
  `cynhyrchiant` pour productivité, `gwendid`/`gwendidau` pour vulnérabilité,
  `llywodraethiant` pour gouvernance, `cydberthynas` pour corrélation,
  `ôl-groniad` pour backlog (auparavant laissé en anglais), `cost a budd` pour
  coûts-avantages, et `deallusrwydd artiffisial (AI)` à la première mention de l'IA
  dans chaque sujet.

### Added

- Les sections liminaires, exemples, contribution et projet (14 fichiers, plus un journal des modifications, une page d'accueil et une table des matières) ont été traduites dans cette locale, avec des noms de répertoires traduits.
- Ajout de l'allemand (`de-001`) comme 26e locale entièrement traduite : les 63
  sujets avec les fichiers annexes `.locale-peer-id` correspondants, identique en contenu à
  `de-de`. Raccordée au site et servie sur `/de-001/` (alias `/de/`).
- Ajout du portugais (`pt-001`) comme 25e locale entièrement traduite : les 63
  sujets avec les fichiers annexes `.locale-peer-id` correspondants, identique en contenu à
  `pt-pt`. Raccordée au site et servie sur `/pt-001/` (alias `/pt/`).
- Réalisation d'une traduction manuelle complète, à partir de zéro, des 63 sujets en
  ourdou (`ur-001`, de droite à gauche), 24e locale entièrement traduite, avec les
  fichiers annexes `.locale-peer-id` correspondants. Chaque sujet a été traduit directement
  à partir de la source anglaise, l'index (sujet 9.7) remappe chaque lien interne
  vers son nom de fichier en ourdou, et le répertoire de section est `موضوعات`. Raccordée
  au site et servie sur `/ur-001/` (alias `/ur/`).
- Réalisation d'une traduction manuelle complète, à partir de zéro, des 63 sujets en
  indonésien (`id-001`), avec les fichiers annexes `.locale-peer-id` correspondants. Aucune locale
  indonésienne préexistante ne pouvait servir de base, donc chaque sujet a été traduit
  directement à partir de la source anglaise, et l'index (sujet 9.7) remappe chaque
  lien interne vers son nom de fichier en indonésien. Raccordée au site et servie sur
  `/id-001/` (alias `/id/`).
- Ajout du russe (`ru-001`) et du chinois (`zh-001`) comme 21e et 22e
  locales entièrement traduites : les 63 sujets chacune, avec les fichiers annexes
  `.locale-peer-id` correspondants, identiques en contenu à `ru-ru` et `zh-cn`.
  Raccordées au site et servies sur `/ru-001/` et `/zh-001/` (alias
  `/ru/` et `/zh/`).
- Ajout du français (`fr-001`) comme 20e locale entièrement traduite : les 63
  sujets avec les fichiers annexes `.locale-peer-id` correspondants, identique en contenu à
  `fr-fr`. Raccordée au site et servie sur `/fr-001/` (alias `/fr/`).
- Ajout du bengali (`bn-001`) comme 19e locale entièrement traduite : les 63
  sujets avec les fichiers annexes `.locale-peer-id` correspondants, identique en contenu à
  `bn-bd`. Raccordée au site et servie sur `/bn-001/` (alias `/bn/`).
- Ajout de l'arabe (`ar-001`) comme 18e locale entièrement traduite : les 63
  sujets avec les fichiers annexes `.locale-peer-id` correspondants, identique en contenu à
  `ar-eg`. Raccordée au site et servie sur `/ar-001/` (alias `/ar/`).
- Ajout du gallois, Grande-Bretagne (`cy-gb`) comme 17e locale
  entièrement traduite : les 63 sujets avec les fichiers annexes `.locale-peer-id` correspondants, identique
  en contenu à `cy-001` (la même relation que `hi-id` avec `hi-001`).
  Raccordée à `SERVED_LOCALE_CODES` du site et servie sur `/cy-gb/`.
- Réalisation d'une traduction manuelle complète, à partir de zéro, des 63 sujets en
  néerlandais, Pays-Bas (`nl-nl`), avec les fichiers annexes `.locale-peer-id` correspondants et
  `just test` au vert. Aucune locale néerlandaise préexistante ne pouvait servir de base, donc
  chaque sujet a été traduit directement à partir de la source anglaise. L'index
  (sujet 9.7) remappe chaque lien interne de sujet vers son nom de fichier néerlandais,
  selon l'approche utilisée pour `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr` et `sv-se`. Pas encore raccordée
  au site.
- Réalisation d'une traduction manuelle complète, à partir de zéro, des 63 sujets en
  suédois, Suède (`sv-se`), avec les fichiers annexes `.locale-peer-id` correspondants et
  `just test` au vert. Aucune locale suédoise préexistante ne pouvait servir de base, donc
  chaque sujet a été traduit directement à partir de la source anglaise. L'index
  (sujet 9.7) remappe chaque lien interne de sujet vers son nom de fichier suédois,
  selon l'approche utilisée pour `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru` et `fr-fr`. Pas encore raccordée au
  site.
- Réalisation d'une traduction manuelle complète, à partir de zéro, des 63 sujets en
  français, France (`fr-fr`), avec les fichiers annexes `.locale-peer-id` correspondants et
  `just test` au vert. Aucune locale française préexistante ne pouvait servir de base, donc
  chaque sujet a été traduit directement à partir de la source anglaise. L'index
  (sujet 9.7) remappe chaque lien interne de sujet vers son nom de fichier français,
  selon l'approche utilisée pour `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp` et `ru-ru`. Pas encore raccordée au site.
- Réalisation d'une traduction manuelle complète, à partir de zéro, des 63 sujets en
  russe, Russie (`ru-ru`), avec les fichiers annexes `.locale-peer-id` correspondants et
  `just test` au vert. Aucune locale russe préexistante ne pouvait servir de base, donc
  chaque sujet a été traduit directement à partir de la source anglaise. L'index
  (sujet 9.7) remappe chaque lien interne de sujet vers son nom de fichier russe,
  selon l'approche utilisée pour `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt` et `ja-jp`. Pas encore raccordée au site.
- Réalisation d'une traduction manuelle complète, à partir de zéro, des 63 sujets en
  japonais, Japon (`ja-jp`), avec les fichiers annexes `.locale-peer-id` correspondants et
  `just test` au vert. Aucune locale japonaise préexistante ne pouvait servir de base, donc
  chaque sujet a été traduit directement à partir de la source anglaise. L'index
  (sujet 9.7) remappe chaque lien interne de sujet vers son nom de fichier japonais,
  selon l'approche utilisée pour `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es` et `pt-pt`. Pas encore raccordée au site.
- Réalisation d'une traduction manuelle complète, à partir de zéro, des 63 sujets en
  portugais, Portugal (`pt-pt`), avec les fichiers annexes `.locale-peer-id` correspondants
  et `just test` au vert. Aucune locale portugaise préexistante ne pouvait servir de
  base, donc chaque sujet a été traduit directement à partir de la source anglaise.
  L'index (sujet 9.7) remappe chaque lien interne de sujet vers son nom de fichier
  portugais, selon l'approche utilisée pour `ar-eg`, `bn-bd`,
  `ko-kr` et `es-es`. Pas encore raccordée au site.
- Ajout de l'espagnol, Espagne (`es-es`) comme locale entièrement traduite, les 63
  sujets, en partant d'une copie de la traduction espagnole existante (`es-001`)
  (qui s'est avérée, à l'examen, déjà grammaticalement neutre,
  avec un vocabulaire déjà majoritairement tourné vers l'Espagne) puis en appliquant
  une passe terminologique ciblée aux usages minoritaires restants, notamment
  « incidente » vers « incidencia » pour le domaine des métriques d'incidents de ce livre,
  avec les corrections d'accord en genre correspondantes partout. Pas encore
  raccordée au site.
- Réalisation d'une traduction manuelle complète des 63 sujets en coréen, Corée
  (`ko-kr`), avec les fichiers annexes `.locale-peer-id` correspondants et
  `just test` au vert. L'index (sujet 9.7) remappe chaque lien interne de sujet
  vers son nom de fichier coréen, selon l'approche utilisée pour `ar-eg` et
  `bn-bd`. Pas encore raccordée au site.
- Ajout de l'hindi, Inde (`hi-id`) comme locale entièrement traduite, les 63
  sujets, en copiant à l'identique la traduction hindi existante (`hi-001`)
  sous le code de locale étiqueté par pays, puisque l'hindi standard n'a pas
  de variante propre à l'Inde à traduire à la main séparément. Pas encore
  raccordée au site.
- Réalisation d'une traduction manuelle complète des 63 sujets en bengali,
  Bangladesh (`bn-bd`), avec les fichiers annexes `.locale-peer-id` correspondants et
  `just test` au vert. Pas encore raccordée au site.
- Réalisation d'une traduction manuelle complète des 63 sujets en arabe, Égypte
  (`ar-eg`), avec les fichiers annexes `.locale-peer-id` correspondants et `just test`
  au vert. Pas encore raccordée au site.
- Réalisation d'une traduction manuelle complète des 63 sujets en allemand, Allemagne
  (`de-de`), avec les fichiers annexes `.locale-peer-id` correspondants et `just test`
  au vert. Pas encore raccordée au site.
- Réalisation de traductions manuelles complètes des 63 sujets dans trois locales :
  gallois (`cy-001`), chinois (`zh-cn`) et hindi (`hi-001`), chacune avec les
  fichiers annexes `.locale-peer-id` correspondants et `just test` au vert.
- Ajout de deux autres locales traduites prévues, gallois - Grande-Bretagne
  (`cy-gb`) et chinois (`zh-001`), à
  `spec/locales-for-global-sharing-with-svelte/locales.tsv` et
  `spec/locales.md` (treize locales prévues désormais, contre onze), et
  résolution de l'endonyme jusque-là indécis de `zh-cn` en 中文. Les `LOCALE_LABELS`
  du site ont gagné des entrées correspondantes (`cy-gb` : « Cymraeg (Prydain
  Fawr) », `zh-001` : « 中文 », `zh-cn` : « 中文 (中国) »). Toujours de l'infrastructure
  seulement : aucune de ces locales n'a de répertoire `locales/<code>/` ni de contenu
  traduit.
- Publication du livre en quatre locales sous `locales/` : `en-gb-oxendict`
  (anglais britannique, orthographe d'Oxford ; la source écrite à la main), `en-001`
  (anglais international), `en-gb` (anglais britannique courant) et `en-us`
  (anglais américain). `en-001`, `en-gb` et `en-us` sont dérivées mécaniquement
  de `en-gb-oxendict` par le nouveau `tools/localize.py` ; voir
  `spec/locales.md`. `docs/` n'existe plus ; toute référence à celui-ci dans
  `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py` et
  `tools/stats.py` pointe désormais vers `locales/<locale>/`.
- Ajout de deux compétences Claude Code, `software-engineering-metrics-skill` (pour les lecteurs
  qui appliquent les conseils du livre à leur propre équipe) et
  `software-engineering-metrics-maintainer-skill` (pour les contributeurs qui ajoutent
  ou modifient des sujets), sous `skills/` et reflétées dans `.claude/skills/`.
- Déplacement de la source du site web publié dans ce dépôt sous le nom
  `software-engineering-metrics.github.io/`, auparavant un dépôt distinct.
  Il lit désormais `locales/` directement depuis la racine du dépôt plutôt que depuis
  une copie voisine. Le `.github/workflows/deploy.yml` de la racine vérifie que le site
  se construit toujours à chaque push vers `main`, puis envoie un `repository_dispatch` au
  dépôt `software-engineering-metrics.github.io` (conservé comme une fine coque de
  déploiement, car GitHub Pages ne servira ce domaine nu qu'à partir d'un
  dépôt portant exactement ce nom), qui récupère ce monorepo, construit le
  site et le déploie.
- Ajout de l'infrastructure pour les locales traduites (et pas seulement dérivées par
  l'orthographe), selon la nouvelle sous-spécification `spec/locales-for-global-sharing-with-svelte/` :
  `tools/gen_locale_peer_ids.py` attribue à chaque fichier de contenu un fichier annexe
  `.locale-peer-id`, identique d'une locale à l'autre, qu'une future locale traduite
  (avec ses propres slugs en écriture native) peut utiliser pour résoudre
  « cette page, dans la locale X » au lieu de faire correspondre par slug ; `tests/validate.py`
  vérifie que chaque fichier annexe existe et correspond. `spec/locales.md` documente dix
  locales traduites prévues (arabe, bengali, gallois, espagnol, français, hindi,
  indonésien, portugais, russe, ourdou et chinois - Chine) ; aucune n'a encore de
  répertoire `locales/<code>/`, puisqu'aucune n'est encore traduite. Sur le site,
  `scripts/locales.mjs` a gagné `LOCALE_LABELS`/`localeLabel()` (un nom d'affichage pour
  chaque locale prévue, prêt avant le routage) et
  `sortedLocaleEntries()` (l'ordre de tri qu'une future liste de locales devrait utiliser),
  et `src/lib/i18n.js` a extrait les chaînes d'interface (navigation, barre latérale, pagination,
  sélecteur, pied de page, lien d'évitement) que chaque composant `.svelte` codait auparavant
  en dur en anglais, acheminées via `ui(locale)`, avec repli sur
  l'anglais pour toute locale sans ses propres traductions.
- Remplacement du contrôle d'en-tête du site, construit à la main et limité aux locales, par le
  `@lilydesignsystem/svelte-picker-bar` du [Lily Design System](https://lilydesignsystem.com/) :
  un vrai sélecteur de thème (clair/sombre, via les nouveaux
  `static/assets/themes/{light,dark}.css`), le vrai sélecteur de locale
  (relié au routage par URL de ce site plutôt qu'à son comportement par défaut
  limité à lang/dir), un sélecteur de taille de texte (l'échelle à sept niveaux de Lily) et
  un sélecteur de partage (courriel, Mastodon, copie du lien). Épinglage de
  `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` à
  `^0.1.2` et de `@lilydesignsystem/svelte-headless` à `^0.2.0` via les overrides de
  `pnpm-workspace.yaml`, en contournant un vrai bogue publié dans les plages de
  dépendances de `svelte-picker-bar` 0.1.0 (voir le `CHANGELOG.md` de chaque sélecteur,
  « 0.1.2 », et le `AGENTS.md` de ce site).
- Suppression de la rangée de statistiques de la page d'accueil (parties/sujets/« Free Always ») et de sa section
  « How to read it », et remplacement de la grille de cartes « Browse the nine parts » par
  une simple liste à puces.

### Changed

- Ajout de `scripts/generate-sitemap.mjs`, exécuté à la fin de `pnpm build`, qui
  écrit `sitemap.xml` à partir des pages pré-rendues (URL de locale canoniques uniquement,
  sans doublons d'alias à deux lettres) afin que la ligne `Sitemap:` de
  `robots.txt` soit résolue.
- Ajout du sujet 2.8, métriques de chaîne de valeur Lean (délai de livraison, temps de
  traitement, temps de cycle, pourcentage complet et exact, et temps takt issus de la
  cartographie classique de la chaîne de valeur Lean, plus le calcul du rendement de débit cumulé),
  placé après la théorie des files d'attente. Les métriques de demandes de fusion et de revue de code
  sont passées de 2.8 à 2.9, et le sujet des métriques DORA de 2.9 à 2.10.
  Mise à jour de chaque renvoi concerné dans tout le livre.
- Renommage de la partie 2 de « Delivery and Flow Metrics » en « Flow Metrics » et
  réorganisation autour du Flow Framework de Mik Kersten. Ajout de quatre nouveaux
  sujets : 2.1 Le Flow Framework, 2.2 Éléments de flux (fonctionnalités, défauts,
  risques, dette), 2.3 Vitesse de flux et distribution de flux, et 2.4 Temps de flux
  et charge de flux. Regroupement des quatre sujets individuels de métriques DORA
  (fréquence de déploiement, délai de livraison, taux d'échec des changements, temps de rétablissement)
  en un seul sujet de référence, 2.9 Le cadre des métriques DORA, déplacé
  à la fin de la partie. Renumérotation de l'efficacité de flux et du travail en cours
  en 2.5 et renommage et renumérotation du sujet de la théorie des files d'attente (anciennement
  2.9) en 2.7 Théorie des files d'attente. Le temps de cycle (2.6) et les métriques de demandes de fusion et de
  revue de code (2.8) conservent leurs numéros. Mise à jour de chaque renvoi
  dans le livre, le glossaire, la référence des formules, l'auto-évaluation de
  la maturité et les liminaires pour qu'ils correspondent.

### Added

- Version initiale : 45 sujets de fond répartis en 8 parties, plus les liminaires
  et une annexe de 7 sujets (partie 9), couvrant les cadres DORA et SPACE,
  les métriques de code et de qualité, les métriques de produit et d'activité, les métriques de fiabilité et de
  sécurité, et l'effet de l'IA générative sur les métriques d'ingénierie.
- Infrastructure du dépôt reprise du projet frère
  `software-engineering-guide` : un `spec/` piloté par la spécification
  (index, structure, conventions, orthographe d'Oxford, feuille de route), une suite de validation
  dans `tests/validate.py`, un générateur de navigation dans `tools/gen_nav.py`,
  un `justfile`, `AGENTS.md` avec des guides de contribution sous `docs/contributing/`,
  `CONTRIBUTING.md` et ce journal des modifications.
- `spec/structure.md`, le manifeste canonique des sujets auquel les tests comparent
  les fichiers.
- Deux exemples détaillés dans `docs/examples/` : une charte de métriques remplie et une
  spécification de tableau de bord.

## Historique

Le livre a été construit de la spécification vers l'extérieur : la structure en neuf parties
a d'abord été déclarée dans `spec/structure.md`, puis chaque sujet a été rédigé
selon le modèle partagé de `docs/contributing/chapter-template.md`, avec
`tests/validate.py` imposant la structure et le style maison tout du long.

## Conventions pour ce fichier

- Regroupez les changements sous **Added**, **Changed**, **Fixed**, **Removed** ou
  **Deprecated**.
- Gardez les entrées courtes et précises. Une ligne chacune quand c'est possible.
- N'utilisez pas non plus de tirets cadratins ici ; les tests vérifient aussi ce fichier.
