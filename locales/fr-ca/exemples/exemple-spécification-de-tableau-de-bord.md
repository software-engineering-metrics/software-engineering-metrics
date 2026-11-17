# Exemple : spécification d'un tableau de bord de métriques de livraison

Une spécification de tableau de bord détaillée, selon le
[sujet 8.1, Concevoir un tableau de bord de métriques d'ingénierie](../sujets/08-01-concevoir-un-tableau-de-bord-de-metriques-dingenierie.md).
L'essentiel est la forme : un public nommé, un petit nombre de tuiles, une norme
de visualisation honnête et un rythme d'actualisation déclaré.

## Public

La direction de l'ingénierie et l'équipe de la plateforme, lors de la revue de
livraison bimensuelle. Non destiné à l'évaluation de la performance individuelle.

## Tuiles (dans l'ordre d'affichage)

1. **Fréquence de déploiement**, 4 dernières semaines, par équipe. Graphique en
   courbes, regroupement hebdomadaire, l'axe commence à zéro.
2. **Délai de livraison des changements**, médiane et 90e centile, 4 dernières
   semaines. Graphique en barres affichant les deux séries, pas seulement la
   médiane.
3. **Taux d'échec des changements**, 4 dernières semaines, avec la définition
   convenue par l'équipe de « l'échec » liée depuis la tuile.
4. **Temps de rétablissement après un déploiement raté**, médiane, 4 dernières
   semaines.
5. **Budget d'erreur restant**, trimestre en cours, par service, en pourcentage.

## Règles de visualisation

- Chaque graphique de tendance montre au moins huit points de données, jamais un
  instantané unique.
- Les axes commencent à zéro sauf si une exception déclarée est documentée sur la
  tuile.
- Les déploiements, incidents et jours fériés sont annotés sur la ligne de temps
  pour que le lecteur distingue un vrai changement du bruit.
- Pas d'axes doubles, pas d'effets 3D, pas de plages de dates triées sur le
  volet.

## Rythme d'actualisation

Les tuiles issues du pipeline (fréquence de déploiement, délai de livraison) sont
actualisées toutes les heures. Les tuiles issues des incidents (taux d'échec des
changements, temps de rétablissement) sont actualisées à la clôture du
post-mortem. Le tableau de bord indique sa propre date de dernière actualisation.

## Ce que ce tableau de bord exclut délibérément

Les nombres de commits individuels, les nombres de demandes de fusion
individuelles et les lignes de code. Ce sont des métriques d'activité dont
l'histoire de manipulation et de mesure de l'effort plutôt que du résultat est
bien documentée (sujet 3.4).
