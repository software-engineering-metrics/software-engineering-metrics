# Rédaction : écrire et modifier des sujets

## Avant d'écrire

- Lisez les [règles de style](règles-de-style.md) et `spec/conventions.md` à la
  racine du dépôt.
- Consultez `spec/structure.md` à la racine du dépôt pour voir où le sujet
  s'insère et quel numéro il doit porter.

## Écrire un nouveau sujet

1. Choisissez la partie et le prochain numéro décimal libre dans cette partie. La
   numérotation est contiguë, donc un nouveau sujet prend généralement le numéro
   qui suit le dernier de sa partie.
2. Créez `locales/en-gb-oxendict/topics/PP-CC-slug.md` (préfixe complété par des
   zéros et séparé par des tirets, par exemple `02-01-...`) à partir du
   [modèle de sujet](modèle-de-sujet.md). Rédigez-le avec l'orthographe d'Oxford
   (voir `spec/oxford-spelling.md`) ; ne modifiez jamais directement les trois
   autres locales.
3. Écrivez selon le modèle. Chaque sujet de contenu requiert toutes ses
   sections : vue d'ensemble, principes clés, recommandations, compromis (avec un
   tableau), questions de discussion, éclairage par secteur (start-up, petite
   entreprise, grande entreprise, administration), exemples (un d'entreprise et
   un d'administration), analyse de rentabilité, antimodèles, un modèle de
   maturité à cinq niveaux, pistes de discussion, enseignements clés et
   références.
4. Nommez le vecteur de manipulation. Chaque famille de métriques exige une
   réponse explicite à « comment une équipe fait-elle paraître ce chiffre bon sans
   améliorer ce qu'il mesure, et quel garde-fou le détecte » (voir le sujet 1.2).
5. Définissez les termes à leur première utilisation. Ajoutez des liens
   Wikipédia pour les concepts clés à la première mention, en prose uniquement.
6. Faites des renvois vers les sujets connexes par numéro décimal, par exemple
   « (sujet 2.1). »
7. Ajoutez le sujet à `spec/structure.md`.
8. Si l'introduction de la partie (N.0) énumère ses sujets, ajoutez-y une puce.
9. Exécutez `python3 tools/localize.py` pour dériver le sujet vers `en-001`,
   `en-gb` et `en-us`.
10. Exécutez `just nav`, puis `just test`.

## Modifier un sujet existant

- Conservez l'ordre des sections et les titres. Les tests vérifient que les
  sujets de contenu possèdent toujours chaque section requise.
- Préservez les définitions en ligne, les liens Wikipédia, les tableaux et la
  liste de références, sauf si la modification les concerne spécifiquement.
- N'introduisez pas de tirets cadratins ni les formules interdites. Si vous
  reformulez, réécrivez plutôt que de glisser un tiret.
- Exécutez ensuite `python3 tools/localize.py` pour redériver `en-001`, `en-gb` et
  `en-us` à partir de la source modifiée `en-gb-oxendict`.

## Renommer ou renuméroter

- Renommez le fichier dans `locales/en-gb-oxendict/`, mettez à jour son titre
  `# N.M Title`, mettez à jour `spec/structure.md` et mettez à jour tous les
  renvois qui pointent vers l'ancien numéro.
- Exécutez `python3 tools/localize.py` pour renommer aussi le fichier dans les
  trois autres locales (il dérive les quatre à partir des mêmes chemins
  relatifs).
- Exécutez `just nav` et `just test`. Les tests signaleront une discordance entre
  le H1 et le nom de fichier, un trou de numérotation, une locale qui a dérivé
  par rapport à la source ou un lien cassé.

## Rappel de ton

Écrivez comme un collègue expérimenté qui souhaite que le lecteur réussisse.
Chaleureux, simple, direct et utile. Phrases courtes. Pas de remplissage.
