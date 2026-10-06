# Contribuer

Merci de contribuer à l'amélioration de ce livre. Les contributions de toute
taille sont les bienvenues, de la correction d'une coquille à la rédaction d'un
nouveau sujet.

## Règles de base

Le livre suit un style maison strict. L'essentiel :

- Pas de tirets cadratins (em-dash). Utilisez une virgule, deux-points, des
  parenthèses ou deux phrases.
- Pas de formules toutes faites (« not only ... but also », « load-bearing » et
  similaires).
- Une écriture chaleureuse, simple et directe. Adressez-vous au lecteur en
  « vous ». Phrases courtes.
- Définissez les termes à leur première utilisation. Reliez les concepts clés à
  Wikipédia à la première mention.
- Uniquement de vraies références.
- Chaque sujet sur une famille de métriques nomme son vecteur de manipulation et
  son garde-fou.

Les règles complètes se trouvent dans `spec/conventions.md` à la racine du dépôt,
et la version courte est constituée des [règles de style](règles-de-style.md). Les
tests font respecter les parties mécaniques.

## Mise en place

Vous avez besoin de Python 3 et de [just](https://github.com/casey/just). Ce
dépôt contient le contenu et la spécification du livre, ainsi que le site
SvelteKit (`software-engineering-metrics.github.io/`) qui le transforme en site
web publié.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Faire une modification

1. Lisez le guide pertinent : [rédaction](rédaction.md) pour les sujets,
   [navigation](navigation.md) pour les fichiers générés, [tests](tests.md)
   pour les tests.
2. Faites la plus petite modification qui remplit l'objectif.
3. Si vous avez ajouté, supprimé, renommé ou renuméroté un sujet, mettez à jour
   `spec/structure.md` à la racine du dépôt et exécutez `just nav`.
4. Exécutez `just test`. Il doit réussir.
5. Ajoutez une entrée d'une ligne au [journal des modifications](../projet/journal-des-modifications.md)
   sous **Unreleased**.

## Sur quoi travailler

- Corriger des erreurs, des passages peu clairs ou des références périmées.
- Améliorer les exemples, en particulier les exemples concrets d'entreprise et
  d'administration.
- Vérifier les citations par rapport à de vraies sources.
- Combler les lacunes de couverture d'un sujet sans casser le modèle.

## Ce qu'il faut éviter

- Ne modifiez pas à la main les fichiers générés (`README.md`, le `index.md` de
  chaque locale, `front-matter/table-of-contents.md` et `topics/09-07-index.md`).
  Modifiez plutôt les sujets et exécutez `just nav`.
- Ne modifiez pas directement `en-001`, `en-gb` ni `en-us` ; elles sont dérivées
  de `en-gb-oxendict` par `tools/localize.py`.
- N'ajoutez pas un sujet sans mettre aussi à jour `spec/structure.md`.
- N'introduisez pas de tirets cadratins ni les formules interdites ; les tests
  échoueront.

## Signaler des problèmes

Ouvrez un ticket décrivant le problème, le fichier et le sujet et, le cas
échéant, la source ou la référence correcte. Les signalements petits et précis
sont les plus faciles à traiter.
