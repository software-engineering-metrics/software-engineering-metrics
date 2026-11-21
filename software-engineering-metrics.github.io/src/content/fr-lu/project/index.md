# À propos de ce projet

Documentation du projet pour le livre : comment il est assemblé, comment le
construire et le vérifier, et où se trouve la source de vérité. Pour le livre
lui-même, voir la [table des matières](../index.md).

## Carte du projet

- **Le livre :** publié en quatre locales sous `locales/` ; voir
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Cette locale, `en-gb-oxendict/topics/` (63 fichiers), `en-gb-oxendict/front-matter/`
  et les annexes de la partie 9 constituent la source écrite à la main ; `en-001`,
  `en-gb` et `en-us` en sont dérivées.
- **Source de vérité :** `spec/` à la racine du dépôt (non publié sur le site).
  La structure est déclarée dans `spec/structure.md`, les règles d'écriture dans
  `spec/conventions.md` et l'orthographe dans `spec/oxford-spelling.md`. Tout le
  reste est construit pour y correspondre.
- **Outillage :** `tools/localize.py` dérive les trois autres locales ;
  `tools/gen_nav.py` génère la navigation ; `tests/validate.py` fait respecter la
  spécification ; le `justfile` relie le tout.
- **Conseils aux contributeurs :**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  à la racine du dépôt, et les guides de la
  [section Contribuer](../contributing/index.md).

## Construire et vérifier

La suite de validation s'exécute sur Python 3 sans autre dépendance et sans accès
réseau. Les tâches s'exécutent via [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Ce dépôt contient le contenu et la spécification du livre. Il est transformé en
site web par le dépôt distinct
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Comment fonctionne ici le développement piloté par la spécification

La spécification passe en premier. `spec/structure.md` dit quels sujets existent
et comment ils sont numérotés. `spec/conventions.md` dit comment ils doivent être
écrits. Les sujets sont rédigés pour satisfaire les deux. `tools/gen_nav.py`
dérive la navigation des sujets, et `tests/validate.py` revérifie le résultat par
rapport à la spécification. Si les sujets et la spécification divergent un jour,
les tests échouent, ce qui est le signal pour les remettre en phase.

Cela empêche la dérive : un changement n'est « terminé » que lorsque la
spécification, les sujets, la navigation générée et les tests concordent.

## Décisions de conception à connaître

- **Des sujets à plat, numérotés en décimal.** Les fichiers sont
  `locales/<locale>/topics/PP-CC-slug.md`, avec le même slug dans chaque locale.
  La partie est un nombre entier ; le sujet est un décimal ; N.0 est
  l'introduction de la partie. Cela conserve des identifiants stables et permet
  aux outils de trier et de regrouper sans arborescence de répertoires.
- **Une locale écrite à la main, trois dérivées.** `en-gb-oxendict` suit
  l'orthographe d'Oxford, le style maison de la plupart des organismes de
  normalisation internationaux (voir `spec/oxford-spelling.md`) ; `en-001`,
  `en-gb` et `en-us` en sont dérivées mécaniquement, de sorte que la traduction ne
  s'écarte jamais de la source.
- **Navigation générée.** La table des matières, la page de contenu et l'index
  thématique sont générés, donc ils ne dérivent jamais par rapport aux sujets.
- **Des tests hors ligne, sans dépendances.** La suite n'utilise que la
  bibliothèque standard, donc elle s'exécute partout, y compris en CI et dans les
  hooks de pre-commit.
- **Les renvois restent en texte brut.** La prose renvoie aux sujets par leur
  numéro décimal (« voir le sujet 2.1 »), comme l'exige la spécification ; le
  site qui effectue le rendu est chargé de transformer ces renvois en liens.
- **Pas de tirets cadratins, par règle et par test.** Un choix de style délibéré,
  imposé pour qu'il reste vrai à mesure que le livre grandit.
- **Chaque famille de métriques nomme son propre vecteur de manipulation.** C'est
  la seule règle du modèle qui n'a pas d'équivalent dans le projet frère
  `software-engineering-guide` : elle existe parce que tout le sujet de ce livre
  est la mesure, si bien que le risque de la mesure elle-même doit être de
  premier rang, pas implicite.

## Pour aller plus loin

- [Rédaction](../contributing/authoring.md) : écrire et modifier des sujets.
- [Navigation](../contributing/navigation.md) : comment fonctionnent les fichiers générés.
- [Tests](../contributing/testing.md) : ce que vérifient les tests et comment corriger les échecs.
- [Exemples](../examples/index.md) : de petits exemples concrets.
- [Journal des modifications](changelog.md) : historique des changements notables.
