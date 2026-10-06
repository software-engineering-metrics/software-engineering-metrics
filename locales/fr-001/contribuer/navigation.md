# Navigation : comment fonctionnent les fichiers générés

Pour chaque locale, quatre artefacts de navigation sont générés à partir des
sujets de cette locale, et non écrits à la main (plus `README.md`, généré une
fois pour la locale de référence, `en-gb-oxendict`) :

- `README.md` (la table des matières de la page d'accueil du dépôt ; locale de référence uniquement)
- `locales/<locale>/index.md` (la page d'accueil du site publié)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (l'index thématique, avec des liens)

Ils sont produits par
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Ne les modifiez pas à la main, car la prochaine génération écrasera votre
modification.

## Quand régénérer

Exécutez `just nav` (ou `python3 tools/gen_nav.py`) chaque fois que vous :

- ajoutez, supprimez, renommez ou renumérotez un sujet, ou
- modifiez le titre `# N.M Title` d'un sujet (la table des matières l'utilise).

Exécutez d'abord `python3 tools/localize.py` si vous avez modifié quoi que ce
soit sous `locales/en-gb-oxendict/`, pour que les sujets des trois autres
locales (et leurs titres générés) soient à jour avant que `gen_nav.py` ne les
lise ; voir
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Comment cela fonctionne

Pour chaque locale, `gen_nav.py` lit chaque fichier `locales/<locale>/topics/*.md`,
trie par numéro décimal, regroupe par partie, puis :

- construit la table des matières partie par partie à partir du titre H1 de
  chaque sujet,
- l'écrit dans `locales/<locale>/index.md` et
  `locales/<locale>/front-matter/table-of-contents.md` (et, pour la locale de
  référence uniquement, `README.md`),
- analyse les sujets de fond (parties 1 à 8) à la recherche d'une liste fixe de
  termes clés et écrit l'index thématique dans
  `locales/<locale>/topics/09-07-index.md`.

Le texte standard partagé (le paragraphe d'introduction, « Comment lire ce
livre », « Thèmes transversaux » et les titres de parties) est localisé de la
même façon que la prose des sujets, via les fonctions de locale de
`tools/localize.py`, de sorte que les pages générées se lisent naturellement dans
chaque locale.

Les titres de parties se trouvent dans le dictionnaire `PART_TITLES` près du
début du script. Le générateur utilise des en-têtes de partie avec deux-points
(« Part 2: Delivery and Flow Metrics »), jamais de tirets cadratins.

Pour les locales traduites à la main, la page d'accueil et la page de table des
matières sont écrites à la main (les en-têtes traduits et la ligne
d'introduction N.0 de chaque partie), et `tools/gen_translated_nav.py` actualise
les listes de sujets à partir des titres H1 des sujets de cette locale.

## Ce qu'il ne touche pas

La spécification à la racine du dépôt (`spec/index.md`, `spec/structure.md` et
ses compagnons) est la source de vérité écrite à la main. Le générateur ne
l'écrit pas, et elle ne fait pas partie du site publié. Si vous changez la
structure, mettez à jour `spec/structure.md` vous-même, puis exécutez `just nav`
pour les fichiers dérivés et `just test` pour confirmer que tout concorde.
