# Qu'est-ce que les métriques d'ingénierie logicielle ?

Les [métriques d'ingénierie logicielle](https://en.wikipedia.org/wiki/Software_metric)
sont des mesures quantitatives servant à évaluer, suivre et améliorer la qualité,
l'efficacité et l'impact des processus, des produits et des équipes de
développement logiciel. Bien utilisées, elles jouent le rôle d'outils de
diagnostic systémique : elles révèlent les goulets d'étranglement opérationnels,
justifient le remboursement de la dette technique et alignent l'activité
d'ingénierie sur des résultats métier concrets. Mal utilisées, elles faussent
les comportements, abîment la confiance et récompensent exactement ce qu'il ne
faut pas.

Ce livre existe parce que la plupart des équipes se tournent vers les métriques
avant d'avoir décidé *à quoi* sert une métrique. Un tableau de bord se remplit de
tout ce qui est facile à compter, une équipe de direction se met à demander « ce
chiffre monte-t-il ou baisse-t-il ? », et en un trimestre l'équipe optimise le
chiffre plutôt que le résultat qu'il était censé représenter. Cet échec porte un
nom, la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) :
lorsqu'une mesure devient un objectif, elle cesse d'être une bonne mesure. Chaque
sujet de ce livre est écrit avec cette loi en toile de fond.

## Les deux cadres fondamentaux

Le secteur a largement convergé vers deux cadres appuyés sur la recherche pour
mesurer la livraison d'ingénierie et la santé des équipes.

Les **[métriques DORA](https://dora.dev/guides/dora-metrics/)** (issues du
programme DevOps Research and Assessment) mesurent le débit et la stabilité d'un
système : fréquence de déploiement, délai de livraison des changements, taux
d'échec des changements et temps de rétablissement après un déploiement raté. La
partie 2 de ce livre couvre les quatre dans un sujet de référence dédié, aux
côtés du Flow Framework utilisé pour organiser plus largement les métriques de
livraison et de flux, car DORA mesure bien la mécanique du pipeline mais ne dit
rien du type de valeur qui y circule.

**Le [cadre SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, créé par des
chercheurs de Microsoft, de GitHub et de l'Université de Victoria, contrebalance
le débit brut par l'expérience des développeurs selon cinq dimensions :
satisfaction et bien-être, performance, activité, communication et
collaboration, efficacité et flux. La partie 3 le traite en profondeur.

Au-delà de ces deux cadres, les équipes suivent des métriques localisées
regroupées par domaine : métriques de code et de qualité (partie 4), métriques de
produit et d'activité (partie 5), et métriques de fiabilité, d'exploitation et de
sécurité (partie 6). La partie 7 aborde un changement déjà en cours : les outils
d'IA générative ont rendu la production brute de code presque gratuite, ce qui
signifie que plusieurs métriques sur lesquelles le secteur s'appuie depuis dix
ans ne veulent plus dire ce qu'elles voulaient dire.

## À qui s'adresse ce livre

Le public principal est composé des personnes qui choisissent ce qu'une équipe
mesure et pourquoi : responsables de l'ingénierie, ingénieurs staff et
principaux, équipes de plateforme et DevOps, responsables de programme et de
produit qui construisent un tableau de bord ou un tableau de pilotage pour la
première fois, ou qui en réparent un qui a commencé à fausser les
comportements. Le public secondaire est tout ingénieur qui veut comprendre
pourquoi son organisation suit ce qu'elle suit, et comment réagir lorsqu'une
métrique est détournée.

## Comment le lire

Commencez ici, puis lisez l'[introduction](introduction.md) pour voir comment le
livre est organisé, ou passez directement à la
[table des matières](table-of-contents.md). Chaque sujet se suffit à lui-même :
il énonce d'abord ses principes, donne des recommandations concrètes, nomme la
façon dont la métrique qu'il couvre est manipulée, et se termine par un modèle de
maturité, des questions de discussion et des références. Vous n'avez pas besoin
de lire le livre de la première à la dernière page pour l'utiliser.
