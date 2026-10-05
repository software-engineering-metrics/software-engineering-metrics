# 9.4 Modèles

Modèles à copier-coller pour les documents récurrents. Des exemples travaillés et remplis des deux premiers se trouvent dans `docs/examples/`.

## Modèle de charte de métriques

```markdown
# Charte de métriques : [nom de l'équipe ou de l'ensemble de métriques]

- **Équipe :** [équipe propriétaire]
- **Propriétaire :** [personne ou rôle nommé]
- **Revue :** [cadence, par exemple trimestrielle]

## But

[Une ou deux phrases : ce que cette charte gouverne et pourquoi.]

## Ce que nous suivons

| Métrique | Source de vérité | Propriétaire |
| --- | --- | --- |
| [métrique] | [système] | [propriétaire nommé] |

## Non-objectifs

[Déclaration explicite de ce pour quoi ces métriques ne sont pas utilisées, par exemple évaluation de performance individuelle, classement inter-équipes sans contexte.]

## Garde-fous

[Pour chaque métrique incitative, nommez son garde-fou apparié et quel schéma de manipulation il attrape.]

## Cadence de revue

[Quand et comment cette charte est revisitée ; ce qui déclenche la retraite d'une métrique.]
```

## Modèle de spécification de tableau de bord

```markdown
# Spécification de tableau de bord : [nom du tableau de bord]

## Public

[Pour qui ce tableau de bord est destiné, et quelle décision il informe. Énoncez explicitement si ce n'est pas pour l'évaluation individuelle.]

## Tuiles (dans l'ordre d'affichage)

1. **[Nom de la métrique]**, [fenêtre de temps], [type de graphique]. [Toute note de visualisation spécifique : règles d'axe, annotations.]
2. ...

## Règles de visualisation

- Les axes commencent à zéro sauf indication contraire, avec l'exception documentée sur la tuile.
- [Toute autre règle d'honnêteté spécifique au projet.]

## Cadence de rafraîchissement

[À quelle fréquence chaque tuile se met à jour, et depuis quelle source.]

## Ce que ce tableau de bord exclut délibérément

[Nommez tout ce qui est intentionnellement laissé de côté, et pourquoi, par exemple les comptes d'activité individuels.]
```

## Modèle d'ordre du jour de réunion de revue de métrique

```markdown
# Revue de métrique : [date]

## Participants

[Noms et rôles]

## Métriques revues

Pour chaque métrique :
- Lecture actuelle et tendance
- Tout mouvement hors de la variation normale (chapitre 1.6)
- Statut de garde-fou apparié, si applicable
- Décision que cette lecture informe, le cas échéant

## Nouvelles métriques proposées

[Faites passer chacune par la liste de contrôle de revue de nouvelle métrique, chapitre 9.3.]

## Métriques considérées pour la retraite

[Quelles métriques n'ont informé aucune décision dans les deux derniers cycles ?]

## Éléments d'action

| Élément | Propriétaire | Échéance |
| --- | --- | --- |
| | | |
```

## Modèle de post-mortem sans blâme

```markdown
# Post-mortem : [nom de l'incident], [date]

## Résumé

[Un paragraphe : ce qui s'est passé, impact utilisateur, durée.]

## Chronologie

- Détection : [heure, comment détecté]
- Accusé de réception : [heure, qui a répondu]
- Résolution : [heure, ce qui l'a corrigé]

## Sévérité

[Classification contre des critères documentés, chapitre 6.2.]

## Cause racine

[Ce qui a permis que cela se produise, formulé comme une question systémique, pas individuelle.]

## Ce qui a bien fonctionné

[Choses spécifiques qui ont fonctionné dans la réponse.]

## Éléments d'action

| Élément | Propriétaire | Échéance |
| --- | --- | --- |
| | | |

## Suivi

[Confirmation que les éléments d'action ont été suivis jusqu'à l'achèvement, selon le prochain cycle de revue.]
```

## Modèle de dossier de ROI

```markdown
# Dossier de ROI : [nom de l'initiative]

## Coût (coût total de possession, chapitre 5.5)

- Initial : [coût de développement]
- Continu : [maintenance, infrastructure, support, par an]
- Coût d'opportunité : [ce que cette capacité aurait pu faire d'autre]

## Bénéfice (preuve documentée, chapitres 5.1 à 5.3)

- [Bénéfice 1], étayé par [source de données]
- [Bénéfice 2], étayé par [source de données]

## Plage et hypothèses

- Cas conservateur : [chiffre]
- Cas optimiste : [chiffre]
- Hypothèse clé conduisant la plage : [nommez-la]

## Facteurs confondants considérés et écartés

[Qu'est-ce qui d'autre pourrait expliquer le bénéfice projeté, et pourquoi cela a été écarté ou pris en compte.]

## Vérification post-achèvement (à remplir après que l'initiative se termine)

- Résultat réel : [chiffre]
- Comparé à la plage projetée : [au-dessus / dans / en dessous]
- Ce que cela nous enseigne pour la prochaine estimation : [note]
```
