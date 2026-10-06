# Exemple : charte de métriques pour une équipe de plateforme de paiement

Un exemple détaillé de charte de métriques, ce document d'une page décrit dans le
[sujet 1.4, Gouvernance et responsabilité des métriques](../sujets/01-04-gouvernance-et-propriete-des-metriques.md).
L'essentiel est la forme : un objectif déclaré, un non-objectif explicite, des
responsables nommés et un rythme de revue. Une charte aussi courte est faite pour
être lue, pas classée.

- **Équipe :** Plateforme de paiement
- **Responsable :** Responsable de l'ingénierie de la plateforme
- **Revue :** Trimestrielle, lors de la revue de la plateforme

## Objectif

Cette charte encadre les métriques que l'équipe de la plateforme de paiement suit
sur sa propre livraison et sa fiabilité. Elle existe pour que chacun, dans
l'équipe comme à l'extérieur, puisse voir ce qui est mesuré, pourquoi, et à quoi
cela ne sert pas.

## Ce que nous suivons

| Métrique | Source de vérité | Responsable |
| --- | --- | --- |
| Fréquence de déploiement | Pipeline CI/CD | Responsable de la plateforme |
| Délai de livraison des changements | Git et pipeline de déploiement | Responsable de la plateforme |
| Taux d'échec des changements | Outil de suivi des incidents, étiqueté par déploiement | Responsable d'astreinte |
| Temps de rétablissement après un déploiement raté | Outil de suivi des incidents | Responsable d'astreinte |
| Latence P99 de l'API (SLI) | Plateforme d'observabilité | Responsable SRE |
| Consommation du budget d'erreur | Plateforme d'observabilité | Responsable SRE |

## Non-objectifs

Ces métriques ne sont jamais utilisées, individuellement ou combinées, pour
classer les ingénieurs, évaluer les entretiens de performance, ni comparer cette
équipe à la feuille de route d'une autre équipe sans comparer aussi le périmètre,
les effectifs et la maturité du système. Tout usage en dehors de l'objectif
énoncé ci-dessus requiert l'accord du directeur de l'ingénierie et de l'équipe
elle-même.

## Garde-fous

Chaque métrique ci-dessus qui porte une incitation est associée à un garde-fou.
Le délai de livraison des changements est suivi à côté du taux d'échec des
changements, de sorte qu'une équipe ne peut pas améliorer son chiffre de vitesse
en livrant des changements plus risqués. La fréquence de déploiement est suivie à
côté de la consommation du budget d'erreur, pour la même raison.

## Rythme de revue

L'équipe passe cette charte en revue chaque trimestre. Une métrique qui n'a
modifié aucune décision pendant deux trimestres consécutifs est candidate au
retrait.
