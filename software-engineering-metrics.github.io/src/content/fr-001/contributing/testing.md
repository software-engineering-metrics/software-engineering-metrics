# Tests : la suite de validation

## L'exécuter

```sh
just test
# or
python3 tests/validate.py
```

Elle s'exécute depuis n'importe où et ne requiert que Python 3 (aucun paquet tiers,
aucun réseau). Elle imprime une ligne par vérification et se termine avec un code
non nul si une vérification échoue, ce qui la rend utilisable en CI et comme hook
de pre-commit.

## Ce qu'elle vérifie

- **Le nombre attendu de sujets** (la constante en tête du script).
- **Une numérotation contiguë** dans chaque partie, à partir de N.0.
- **Le H1 correspond au décimal du nom de fichier** pour chaque sujet.
- **Les titres H1 correspondent à `spec/structure.md`** caractère par caractère,
  pas seulement le décimal initial.
- **Les sections requises** sont présentes dans chaque sujet de contenu (parties
  1 à 8, sujet N.1 et suivants), **dans l'ordre exact du modèle**.
- **Un nombre minimal de mots** pour chaque sujet de contenu (1 500 mots), avec
  une liste d'exceptions dans le script pour les cas intentionnels.
- **Aucun tiret cadratin** dans aucun fichier Markdown.
- **Les tirets demi-cadratins uniquement entre des chiffres**, donc « 2.1–2.8 »
  passe et tout le reste échoue.
- **Aucune formule interdite** (« not only », « but also », « load-bearing »).
- **Tous les liens `.md` internes sont résolus.**
- **Les renvois en prose pointent vers de vrais sujets** : une référence à un
  numéro de sujet sans fichier correspondant sur le disque échoue, avec le même
  motif de référence que celui utilisé par la création automatique de liens vers
  les sujets du site publié.
- **Les liens Wikipédia sont bien formés** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` correspond aux fichiers sur le disque**, dans les deux
  sens.
- **Le README, la page d'accueil et la page de contenu relient chaque sujet.**

## Quand une vérification échoue

La ligne en échec nomme le fichier et le problème. Corrections courantes :

- Tiret cadratin trouvé : reformulez la phrase pour supprimer le « — ». Ne le
  supprimez pas simplement.
- Section manquante : ajoutez la section `##` manquante depuis le modèle de sujet.
- Discordance de structure : vous avez ajouté ou renommé un sujet sans mettre à
  jour `spec/structure.md`, ou l'inverse. Remettez-les d'accord.
- Lien cassé : corrigez le chemin, ou mettez-le à jour après un renommage.
- Trou de numérotation : renumérotez pour que la partie soit contiguë à partir de
  N.0.

## Au-delà de la suite de validation

- `just spell` exécute [codespell](https://github.com/codespell-project/codespell)
  sur le dépôt. La configuration, y compris la liste d'ignorance des faux
  positifs, est la section `[tool.codespell]` de `pyproject.toml`.
- `just stats` imprime un rapport Markdown (nombre de mots par sujet, sujets
  minces, liens Wikipédia, entrées de références) à partir de `tools/stats.py`.

## Intégration continue

- `.github/workflows/test.yml` s'exécute sur chaque pull request et sur les push
  vers des branches autres que la principale : la suite de validation et
  codespell. Ce dépôt ne construit ni ne déploie de site ; le rendu a lieu dans
  le dépôt distinct `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` vérifie les liens externes chaque semaine avec
  [lychee](https://github.com/lycheeverse/lychee) (motifs ignorés dans
  `.lycheeignore`) et conserve les résultats dans un unique ticket « Link checker
  report ». Les liens externes restent volontairement hors du chemin des PR.

## Non couvert par les tests

La suite vérifie la structure et le style, pas la vérité. Elle ne peut pas dire
si une référence est réelle ou si la prose est exacte. Vérifiez les citations et
les faits à la main ou lors d'une passe de recherche. L'existence d'un lien
Wikipédia (par opposition à sa forme) nécessite aussi une vérification réseau,
que la suite laisse volontairement de côté pour pouvoir s'exécuter hors ligne.
