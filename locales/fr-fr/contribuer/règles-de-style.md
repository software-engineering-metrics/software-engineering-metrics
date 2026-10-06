# Règles de style (partagées, applicables)

Le style maison en un seul endroit. Les éléments marqués « (test) » sont imposés
par `tests/validate.py` ; une violation fait échouer la construction. La version
narrative complète est `spec/conventions.md` à la racine du dépôt.

## Règles strictes

- **Pas de tirets cadratins.** N'utilisez jamais « — » (U+2014). Utilisez une
  virgule, deux-points, des parenthèses ou deux phrases. Les tirets demi-cadratins
  « – » ne sont autorisés que dans les plages numériques comme `1–9` ou
  `2.1–2.8`. (test)
- **Pas de formules toutes faites.** N'utilisez pas « not only ... but also »,
  « but also » ni « load-bearing ». Évitez « It's important to note », « In
  today's fast-paced world », « It's crucial to consider », « It appears that »,
  « One could argue » et la formule « it's not just X, it's Y ». (test, pour les
  trois premières)
- **Définissez les termes à leur première utilisation.** Développez les sigles et
  définissez le jargon la première fois que chaque sujet les emploie, par exemple
  « mean time to recovery (MTTR). »
- **Reliez les concepts clés à Wikipédia** à la première mention, une fois par
  sujet, en prose uniquement. Forme :
  `[term](https://en.wikipedia.org/wiki/Article_Title)`. Jamais dans les titres,
  tableaux, code ou la section des références. (la forme du lien est un test)
- **Uniquement de vraies références.** Auteur et titre d'œuvres authentiques.
  Aucun titre, auteur ni URL inventé.
- **Nommez le vecteur de manipulation.** Un sujet sur une famille de métriques
  expose comment la métrique est manipulée et quel garde-fou le détecte
  (sujet 1.2).

## Voix

- Chaleureuse, directe, encourageante. Adressez-vous au lecteur en « vous ».
  Phrases courtes, mots simples. Commencez par l'essentiel.
- Avec du caractère et pratique. Neutre vis-à-vis des fournisseurs. Ne nommez les
  produits que comme exemples factuels.

## Structure (test)

- Les sujets de contenu utilisent l'ordre exact des sections de
  [`chapter-template.md`](modèle-de-sujet.md).
- Le premier titre est `# N.M Title` (numéro de sujet pointé), et il correspond au
  préfixe `PP-CC` complété par des zéros du fichier.
- La numérotation au sein de chaque partie est contiguë et commence à N.0.

## Après une modification

- Si vous avez changé l'ensemble des sujets, mettez à jour `spec/structure.md` et
  exécutez `just nav`.
- Exécutez toujours `just test`.
