# Introduction

Ce livre est un guide pratique pour bien mesurer l'[ingénierie logicielle](https://en.wikipedia.org/wiki/Software_engineering),
destiné à des équipes allant de la start-up de cinq personnes à l'entreprise de
plusieurs milliers d'ingénieurs ou à l'administration qui rend des comptes selon
un cadre de performance statutaire. Il existe parce que la plupart des conseils
sur les métriques sont soit un résumé de cadre sans détail opérationnel, soit la
liste de fonctionnalités d'un éditeur d'outils. Ce livre cherche à n'être ni
l'un ni l'autre : il prend position sur ce qu'il faut mesurer, il est explicite
sur la manière dont chaque métrique est manipulée, et il est pratique sur la
façon de mener un programme de métriques auquel une équipe fait confiance plutôt
que de le craindre.

## À qui s'adresse ce livre

Le public principal est composé des personnes qui choisissent ce qu'une
organisation mesure : responsables de l'ingénierie, ingénieurs staff et
principaux, équipes de plateforme et DevOps, responsables de programme et de
produit. Le public secondaire est tout ingénieur qui veut comprendre le
raisonnement derrière un tableau de bord dont on lui demande de faire bouger les
chiffres, et comment remettre en cause une métrique qui a cessé de servir son
but. Vous n'avez pas besoin de le lire de bout en bout. Chaque sujet se suffit à
lui-même, énonce d'abord ses principes et se termine par des enseignements
pratiques, un modèle de maturité et des références.

## Comment le livre est organisé

Le livre est divisé en **parties** (nombres entiers) et en **sujets**
(décimaux). Le sujet **N.0** présente chaque partie et explique comment ses
sujets s'articulent ; les sujets **N.1, N.2, …** couvrent les sujets en
profondeur.

- **Partie 1, Fondations de la mesure :** pourquoi mesurer, la loi de Goodhart
  et la psychologie de la manipulation, choisir les résultats plutôt que la
  production, la gouvernance et la responsabilité, les sources de données, et la
  culture statistique dont tout programme de métriques a besoin.
- **Partie 2, Métriques de flux :** le Flow Framework, ses éléments de flux et
  ses cinq métriques de flux, le temps de cycle, la théorie des files d'attente,
  les métriques classiques de chaîne de valeur Lean, les métriques de demandes de
  fusion et de revue de code, et le cadre DORA comme sujet de référence.
- **Partie 3, Expérience du développeur et cadre SPACE :** le cadre SPACE et ses
  cinq dimensions, et comment mener une enquête sur l'expérience des
  développeurs sans qu'elle ne devienne un concours de popularité.
- **Partie 4, Métriques de code et de qualité :** complexité, couverture et
  efficacité des tests, volatilité et points chauds, analyse statique, dette
  technique et documentation.
- **Partie 5, Métriques de produit et d'activité :** défauts échappés, adoption
  des fonctionnalités, résultats clients et métier, économie unitaire et retour
  sur investissement.
- **Partie 6, Métriques de fiabilité, d'exploitation et de sécurité :** SLI, SLO
  et budgets d'erreur, métriques d'incidents, astreinte et capacité, et
  métriques de sécurité et de vulnérabilités.
- **Partie 7, Les métriques à l'ère de l'IA :** le changement de paradigme de
  l'IA générative, comment mesurer le développement assisté par IA, le risque
  d'inflation des métriques, et pourquoi la télémétrie des résultats devient
  l'étoile polaire quand la production devient bon marché.
- **Partie 8, Construire un programme de métriques :** concevoir un tableau de
  bord, construire ou acheter, déployer des métriques sans semer la peur, un
  modèle de maturité et une feuille de route d'adoption progressive.
- **Partie 9, Annexes :** glossaire, référence des définitions et formules de
  métriques, listes de contrôle, modèles, auto-évaluation de la maturité,
  références et index.

## Principes directeurs

Huit principes forment l'ossature du livre :

1. **Une mesure qui devient un objectif cesse d'être une bonne mesure.**
   Concevez contre la loi de Goodhart dès le départ, pas après l'apparition de la
   distorsion.
2. **Les résultats avant la production avant l'activité.** Pondérez chaque
   ensemble de métriques vers ce qui a changé pour le client ou l'activité, pas
   vers ce que l'équipe a produit ni son niveau d'occupation.
3. **Toute métrique incitative a besoin d'un garde-fou.** Associez la vitesse à
   la qualité, le débit à la stabilité, et ne poursuivez jamais un chiffre
   isolément.
4. **Mesurez des systèmes, pas des personnes.** Une métrique qui individualise le
   blâme brise la confiance et invite à la manipulation ; une métrique qui révèle
   une contrainte du système invite à l'amélioration.
5. **Préférez l'instrumentation à l'auto-déclaration quand vous le pouvez, et
   l'auto-déclaration quand vous ne le pouvez pas.** Les comptes de déploiements
   viennent du pipeline ; la satisfaction vient de la question posée.
6. **Une métrique gagne sa place ou est retirée.** Chaque tuile d'un tableau de
   bord coûte de l'attention. Élaguez délibérément.
7. **Les définitions comptent plus que les tableaux de bord.** Deux équipes qui
   calculent le « délai de livraison » différemment passeront plus de temps à
   débattre du chiffre qu'à agir dessus.
8. **L'IA générative est une raison de réexaminer, pas seulement de refaire la
   référence.** Quand la production devient bon marché, les métriques bâties sur
   le volume de production ont besoin de nouveaux garde-fous, pas seulement de
   nouveaux objectifs.

## Thèmes transversaux

La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est le seul
thème qui traverse chaque partie de ce livre, pas seulement le sujet 1.2. Chaque
sujet sur une famille de métriques expose comment la métrique qu'il couvre est
manipulée et quel garde-fou le détecte. Les obligations de reporting des
administrations et des entreprises, où une métrique peut avoir un poids légal ou
contractuel, sont traitées comme des données d'entrée de la conception partout,
pas comme un après-coup cantonné à un seul sujet.

## Comment l'utiliser

Adoptez progressivement ; ne parachutez pas un tableau de bord sur une équipe qui
n'en a jamais eu. Commencez là où la douleur est la plus grande, utilisez le
modèle de maturité de chaque sujet pour vous situer honnêtement, et laissez la
feuille de route d'adoption (sujet 8.5) séquencer le travail. L'objectif n'est
pas un mur de graphiques. C'est une organisation qui peut dire, preuves à
l'appui, si ce qu'elle fait fonctionne, et qui fait assez confiance à ses propres
chiffres pour agir en conséquence.
