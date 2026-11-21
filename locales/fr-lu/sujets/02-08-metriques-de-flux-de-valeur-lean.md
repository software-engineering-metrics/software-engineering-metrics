# 2.8 Métriques de flux de valeur Lean

## Vue d'ensemble et motivation

Chaque métrique que cette partie a couverte jusqu'à présent, temps de flux, charge de flux, temps de cycle, utilisation, descend d'une boîte à outils bien plus ancienne : les cinq mesures de référence de la cartographie classique du flux de valeur **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**, développée chez Toyota et généralisée à travers la fabrication, les opérations et la livraison de services bien avant que le logiciel ne les adopte. Le **temps d'exécution (LT)** est le temps d'horloge total depuis la demande du travail jusqu'à sa livraison. Le **temps de processus (PT)** est le temps réel passé directement sur une seule unité. Le **temps de cycle (CT)** est le temps moyen requis pour compléter un seul nœud ou une seule phase au sein du flux. Le **pourcentage complet et correct (%C/A)** est le pourcentage d'unités qu'une équipe en aval peut traiter sans avoir besoin de reprise. Le **temps takt** est le temps maximal acceptable pour compléter une unité afin de correspondre proprement à la demande client.

Ce sujet existe parce que l'ingénierie logicielle n'a pas inventé ces idées, elle les a empruntées, et l'emprunt a parfois réutilisé les mêmes mots pour des choses légèrement différentes. Le propre temps de cycle de ce livre (sujet 2.6) mesure spécifiquement les étapes d'ingénierie d'un changement, codage, revue, test, déploiement, tandis que le CT classique du Lean est le « temps moyen par nœud » plus général appliqué à tout processus. Le temps de flux (sujet 2.4) est le nom de ce livre pour ce que le Lean appelle le temps d'exécution. Connaître cette correspondance importe parce qu'un lecteur venant d'un contexte Lean Six Sigma, commun dans la fabrication, la logistique, la santé et les opérations gouvernementales, utilisera ces termes exacts avec leurs significations originales, et une équipe logicielle qui ne parle pas la même langue renonce à un pont facile et étayé par des preuves vers des collègues hors de l'ingénierie.

Pour les grandes équipes, le %C/A est la métrique la plus sous-utilisée de ce sujet. Elle capture quelque chose que les métriques de flux des sujets 2.3 et 2.4 ne font pas : combien de ce qu'une étape produit est réellement utilisable par l'étape suivante sans être renvoyé. Cumulé à travers un flux de valeur multi-étapes, un concept que la fabrication appelle **rendement cumulé de débit (rolled throughput yield)**, le %C/A révèle comment la reprise s'accumule invisiblement à travers les transferts, un schéma auquel les organisations d'entreprise avec de longs pipelines multi-équipes et les programmes gouvernementaux avec de multiples portes d'approbation sont particulièrement sujets et mesurent rarement directement.

## Principes clés

- **Ces cinq métriques précèdent le logiciel et se généralisent au-delà.** Elles sont le vocabulaire commun qu'une partie prenante formée au Lean Six Sigma, commune dans les grandes entreprises et les opérations gouvernementales, parle déjà couramment.
- **La collision terminologique est réelle et vaut la peine d'être nommée explicitement.** Le temps de cycle de ce livre (sujet 2.6) et le CT classique du Lean sont liés mais pas identiques ; documentez la correspondance pour que les conversations transfonctionnelles ne se parlent pas tranquillement à travers l'une l'autre.
- **Le %C/A doit être cumulé à travers chaque étape, pas mesuré une fois à la fin.** La reprise introduite tôt dans un flux et attrapée tard est invisible à une métrique mesurée seulement à la livraison finale.
- **Le temps takt reformule la planification de capacité autour de la demande, pas de l'effort.** La question passe de « à quelle vitesse pouvons-nous aller » à « à quelle vitesse devons-nous aller », ce qui se connecte directement à l'utilisation (sujet 2.7) et à la charge de flux (sujet 2.4).
- **Ce sont des métriques diagnostiques, pas des métriques de vanité.** Chacune existe pour répondre à une question opérationnelle spécifique, pas pour produire un chiffre impressionnant pour un tableau de bord.

## Recommandations

### Cartographiez votre flux de valeur avec les cinq métriques Lean avant d'adopter un cadre spécifique au logiciel

Calculez le temps d'exécution, le temps de processus, le temps de cycle, le %C/A et le temps takt pour un échantillon représentatif de travail se déplaçant à travers votre flux de valeur avant de superposer les propres métriques du Flow Framework (sujets 2.3 et 2.4). Cela vous donne une référence que toute partie prenante lettrée en Lean Six Sigma peut immédiatement comprendre, et cela fait fréquemment émerger la même dominance du temps d'attente que décrit le sujet 2.5, exprimée dans un vocabulaire qui précède et survit à tout cadre logiciel particulier.

### Cumulez le pourcentage complet et correct multiplicativement à travers chaque étape

Mesurez le %C/A à chaque étape individuellement, puis multipliez les pourcentages au niveau de l'étape ensemble pour obtenir le rendement cumulé de débit du flux de valeur. Trois étapes fonctionnant chacune individuellement à 90 % complet et correct s'accumulent à environ 73 % globalement, un chiffre qui ne ressemble en rien au propre rapport d'une seule étape et est généralement le plus honnête. Ce calcul unique est le moyen le plus rapide de révéler combien de reprise un pipeline multi-étapes absorbe authentiquement.

### Établissez le temps takt explicitement à partir de vraies données de demande client, pas de la capacité

Calculez le temps takt comme le temps de travail disponible divisé par la demande client sur cette période, délibérément indépendant de la vitesse à laquelle votre équipe se trouve capable de travailler aujourd'hui. Comparez votre temps de processus et temps de cycle mesurés contre ce chiffre : un temps de processus confortablement en dessous du temps takt indique une marge saine, tandis qu'un temps de cycle dépassant le temps takt est une preuve concrète et quantifiée d'un manque de capacité, pas seulement un sentiment que les choses sont en retard.

### Documentez la correspondance entre les termes Lean et le propre vocabulaire de ce livre

Là où votre organisation exécute déjà un programme Lean Six Sigma hors du logiciel, ou où l'ingénierie rapporte à une direction qui parle couramment ce vocabulaire, écrivez la correspondance explicitement dans votre charte de métriques (sujet 1.4) : le temps de flux de ce livre est le temps d'exécution du Lean, le temps de cycle de ce livre (sujet 2.6) est une application spécifique du CT plus général du Lean, et le temps actif de ce livre (sujet 2.5) est le temps de processus du Lean. Ce document unique prévient un argument récurrent et de faible valeur sur de qui les chiffres sont « réels ».

### Utilisez le %C/A comme garde-fou aux côtés de la vélocité de flux, pas comme son remplacement

Jumelez le rendement cumulé de débit avec la vélocité de flux (sujet 2.3) de la même manière que ce livre jumelle chaque métrique de vitesse avec un garde-fou de stabilité. Un compte d'éléments croissant avec un %C/A cumulé en baisse signifie que le flux de valeur livre de plus en plus d'unités ayant de plus en plus besoin de reprise plus tard, exactement le genre de schéma vitesse-sans-qualité contre lequel le sujet 1.2 avertit chaque famille de métriques de se protéger.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Métriques Lean classiques seulement (LT, PT, CT, %C/A, temps takt) | Vocabulaire universel ; fonctionne à travers les équipes logicielles et non logicielles également | Pas spécifique au logiciel ; a besoin de traduction pour les étapes spécifiques à l'ingénierie |
| Métriques du Flow Framework seulement (sujets 2.3, 2.4) | Conçues spécifiquement pour les flux de valeur logiciels et la visibilité du type d'élément | Peu familières aux parties prenantes formées au Lean Six Sigma hors de l'ingénierie |
| Les deux, avec une correspondance explicite documentée | Parle les deux vocabulaires ; le pont transfonctionnel le plus fort | Nécessite la discipline initiale d'écrire la correspondance et de la garder à jour |
| %C/A mesuré seulement à la livraison finale | Simple, un seul chiffre | Cache la reprise introduite et attrapée plus tôt dans le flux |

La tension centrale est **universalité contre spécificité**. Les métriques Lean classiques sont instantanément lisibles pour quiconque a une expérience en fabrication, opérations ou Six Sigma, mais elles n'ont pas été conçues en pensant aux étapes spécifiques du logiciel, revue de code, test automatisé, approbation de déploiement. Résolvez la tension en utilisant les métriques Lean comme vocabulaire de référence partagé pour les conversations transfonctionnelles et de direction, et les propres métriques du Flow Framework (sujets 2.3 et 2.4) pour le travail diagnostique spécifique au logiciel que les équipes d'ingénierie font au quotidien.

## Questions à discuter avec votre équipe

1. **Pourrions-nous calculer les cinq métriques Lean classiques pour notre flux de valeur aujourd'hui, ou n'en avons-nous que certaines ?** La plupart des équipes logicielles ont des équivalents de temps de flux et de temps de cycle mais n'ont jamais calculé explicitement le temps de processus, le %C/A, ou le temps takt. Identifiez lesquelles des cinq manquent authentiquement avant de supposer que l'écart est petit.

2. **Avons-nous déjà cumulé le %C/A à travers chaque étape de notre flux de valeur, ou l'avons-nous seulement mesuré à la livraison finale ?** Une seule mesure en fin de flux cache exactement la reprise cumulative que le calcul de rendement cumulé de débit de ce sujet est conçu pour révéler. Tentez le calcul de cumul avec de vraies données.

3. **Connaissons-nous notre temps takt, calculé à partir de la demande client réelle, et comment notre temps de cycle mesuré se compare-t-il à cela ?** La plupart des équipes n'ont jamais rendu cette comparaison explicite, ce qui signifie que les conversations de capacité restent anecdotiques plutôt que quantifiées.

4. **Si une partie prenante formée au Lean Six Sigma hors de l'ingénierie demandait à propos de notre temps de cycle, serions-nous confiants que nous voulons dire la même chose qu'elle ?** Le temps de cycle de ce livre (sujet 2.6) et le CT classique du Lean sont liés mais pas identiques. Discutez si cette distinction a déjà causé un vrai malentendu dans votre organisation.

5. **Notre rendement cumulé de débit a-t-il déjà été significativement plus bas que le propre %C/A rapporté de n'importe quelle étape unique ?** Si vous n'avez jamais calculé le cumul, discutez de ce que vous vous attendriez à trouver puis vérifiez-le contre de vraies données.

6. **Notre organisation exécute-t-elle déjà un programme Lean ou Six Sigma hors du logiciel avec lequel nous pourrions nous aligner au lieu de maintenir un vocabulaire séparé et déconnecté ?** De nombreuses entreprises et agences gouvernementales ont déjà cette infrastructure ; vérifiez si l'ingénierie s'y est déjà réellement connectée.

## Regard sectoriel

**Startup.** La cartographie complète du flux de valeur Lean vaut rarement la cérémonie à cette échelle, mais le temps takt vaut la peine d'être compris informellement : savoir approximativement à quelle vitesse l'équipe doit authentiquement se déplacer pour correspondre à la vraie demande client, plutôt qu'un rythme interne arbitraire, prévient à la fois de surconstruire la capacité trop tôt et de la sous-construire une fois que la croissance arrive.

**Petite entreprise.** Le %C/A est la plus immédiatement utile des cinq métriques ici, puisqu'elle répond directement à « combien de ce que nous livrons doit être refait », une question que les propriétaires et les petites équipes ressentent vivement sans toujours avoir un chiffre attaché. Suivez-le informellement pour vos un ou deux processus critiques avant d'investir dans quelque chose de plus élaboré.

**Grande entreprise.** C'est ici que le vocabulaire Lean classique se rentabilise, parce que les grandes entreprises exécutent très souvent déjà un programme Lean Six Sigma dans les opérations, les divisions adjacentes à la fabrication, ou les services partagés, et une ingénierie qui parle la même langue gagne un pont immédiat et crédible vers ces fonctions plutôt que de devoir justifier un ensemble de métriques séparé et uniquement logiciel depuis le début.

**Gouvernement.** Les agences gouvernementales, surtout celles avec des racines dans des fonctions réglementaires, adjacentes à la fabrication, ou logistiques, ont fréquemment des mandats existants de Lean ou d'amélioration de processus. Cadrer le flux de valeur d'un service numérique dans les mêmes termes classiques, temps d'exécution, temps de processus, %C/A, temps takt, qu'utilise déjà le bureau d'amélioration de processus d'une agence est souvent le moyen le plus rapide de sécuriser un soutien institutionnel authentique pour un effort de modernisation logicielle.

## Exemples

**Grande entreprise.** La division de logiciel interne d'une entreprise de fabrication avait eu du mal pendant des années à faire prendre au sérieux ses métriques d'ingénierie par une équipe de direction des opérations parlant couramment le Lean Six Sigma depuis le sol de l'usine. Reformuler le pipeline de livraison de la division en utilisant les mêmes cinq métriques classiques, calculant le temps d'exécution, le temps de processus, le temps de cycle, le %C/A, et le temps takt pour son flux de valeur logiciel, a immédiatement rendu les chiffres de la division lisibles pour la direction des opérations pour la première fois. Un calcul de rendement cumulé de débit à travers les quatre étapes du pipeline a révélé un %C/A réel de 61 %, bien en dessous du propre chiffre rapporté de n'importe quelle étape individuelle, qui est devenu la base de preuves pour une initiative de réduction de reprise que la direction des opérations a financée dans le même trimestre.

**Gouvernement.** L'équipe de permis numériques d'un département de transport d'État, rapportant à une agence avec un bureau d'amélioration de processus Lean de longue date, ne s'était jamais engagée avec ce bureau parce que ses propres métriques utilisaient un langage spécifique au logiciel que le bureau ne reconnaissait pas. Après avoir traduit le flux de valeur des permis en temps d'exécution, temps de processus et %C/A, le bureau d'amélioration de processus a identifié que la vraie contrainte de l'équipe n'était pas la vitesse d'ingénierie mais une étape de revue juridique en aval fonctionnant bien en dessous de son propre temps takt effectif relativement à la demande de permis, une découverte sur laquelle le bureau était équipé pour agir immédiatement parce qu'elle était cadrée en termes familiers.

## Argumentaire économique : motivations, ROI et TCO

Le retour de l'adoption du vocabulaire Lean classique aux côtés des métriques spécifiques au logiciel de ce livre est un pont crédible et immédiat vers l'expertise et le financement d'amélioration de processus qui existent souvent déjà ailleurs dans une grande organisation. L'exemple de l'entreprise de fabrication ci-dessus, sécurisant un financement de réduction de reprise le même trimestre où la reformulation a rendu le cas lisible, est le schéma que l'approche de ce sujet produit fiablement : la perspicacité n'était pas nouvelle, mais le vocabulaire qui l'a rendue actionnable pour la bonne audience l'était.

Le coût total de possession est faible : ces cinq métriques ne nécessitent aucune nouvelle instrumentation au-delà de ce que les sujets 2.4 à 2.6 collectent déjà, plus une classification de reprise %C/A qui est généralement un ajout simple au suivi existant des défauts et des éléments de flux (sujet 2.2). L'investissement principal est la traduction, écrire la correspondance entre les termes de ce livre et ceux classiques du Lean, qui se rentabilise la première fois qu'elle prévient un malentendu transfonctionnel.

## Antipatrons et pièges

- **Mesurer le %C/A seulement à la livraison finale :** le vecteur de manipulation au cœur de ce sujet. Une équipe peut rapporter un %C/A élevé à l'étape finale pendant que des étapes plus précoces produisent tranquillement de la reprise corrigée avant que quiconque ne la mesure, faisant paraître tout le flux de valeur plus sain qu'il ne l'est. Le garde-fou est de cumuler le %C/A multiplicativement à travers chaque étape, le calcul de rendement cumulé de débit, et d'auditer périodiquement la définition de « complet et correct » de chaque étape pour qu'elle ne puisse pas se rétrécir tranquillement dans le temps.
- **Supposer que le temps de cycle de ce livre et le CT classique du Lean signifient exactement la même chose :** produit une vraie confusion transfonctionnelle quand les deux vocabulaires se rencontrent sans correspondance documentée.
- **Établir le temps takt à partir de la capacité actuelle plutôt que de la vraie demande client :** défait le but de la métrique, qui est de révéler un écart entre la demande et la capacité, pas de confirmer quel que soit le rythme déjà existant.
- **Traiter les métriques Lean classiques comme obsolètes une fois qu'un cadre spécifique au logiciel est adopté :** abandonne un pont crédible et étayé par des preuves vers l'expertise d'amélioration de processus pouvant déjà exister dans l'organisation.
- **Ignorer un programme Lean Six Sigma existant ailleurs dans l'organisation :** renonce au financement, à l'expertise et à la crédibilité institutionnelle que reformuler les métriques de livraison dans un langage partagé pourrait débloquer.
- **Rapporter le %C/A sans le jumeler contre la vélocité de flux :** permet à un chiffre de débit croissant de cacher un taux de reprise en baisse, le même écart de garde-fou contre lequel ce livre met en garde tout au long.

## Modèle de maturité

- **Niveau 1, Initiation :** Aucune des cinq métriques Lean classiques n'est calculée ; la livraison est discutée sans référence au temps d'exécution, temps de processus, ou %C/A.
- **Niveau 2, Développement :** Le temps d'exécution et le temps de cycle sont suivis informellement, mais le temps de processus, le %C/A, et le temps takt ne sont pas calculés, et aucune correspondance avec le propre vocabulaire de ce livre n'existe.
- **Niveau 3, Standardisation :** Les cinq métriques classiques sont calculées de manière cohérente, et la correspondance avec le vocabulaire de flux et de temps de cycle de ce livre est documentée dans une charte de métriques partagée.
- **Niveau 4, Gestion :** Le rendement cumulé de débit est calculé à travers chaque étape du flux de valeur, et le temps takt est comparé au temps de cycle mesuré pour quantifier explicitement les écarts de capacité.
- **Niveau 5, Orchestration :** L'organisation a connecté ses métriques de livraison logicielle à un programme Lean ou Six Sigma existant ailleurs dans l'entreprise, et peut pointer vers des décisions d'investissement ou de processus spécifiques prises parce que le vocabulaire partagé a rendu une perspicacité actionnable pour une audience non-ingénierie.

## Idées de discussion

1. Pourrions-nous calculer le temps d'exécution, le temps de processus, le temps de cycle, le %C/A, et le temps takt pour notre flux de valeur aujourd'hui ?
2. Quel serait notre rendement cumulé de débit si nous multipliions le %C/A de chaque étape ensemble ?
3. Notre organisation exécute-t-elle déjà un programme Lean ou Six Sigma auquel nous n'avons jamais connecté les métriques d'ingénierie ?
4. Comment notre temps de cycle mesuré se compare-t-il à notre temps takt, calculé à partir de la vraie demande client ?

## Points clés à retenir

- Les cinq métriques Lean classiques, **temps d'exécution, temps de processus, temps de cycle, pourcentage complet et correct, et temps takt**, précèdent le logiciel et restent le vocabulaire commun des parties prenantes formées au Lean Six Sigma.
- Le propre **temps de flux et temps de cycle de ce livre correspondent à, mais ne sont pas identiques à**, le temps d'exécution et le CT classique du Lean ; documentez la correspondance explicitement pour éviter la confusion transfonctionnelle.
- Le vecteur de manipulation central du sujet est **mesurer le %C/A seulement à la livraison finale** ; le garde-fou est de le cumuler multiplicativement à travers chaque étape comme rendement cumulé de débit.
- Le **temps takt reformule la capacité autour de la vraie demande client**, pas le rythme existant, et se jumelle directement avec l'utilisation (sujet 2.7) et la charge de flux (sujet 2.4).
- Reformuler la livraison logicielle en termes Lean classiques est souvent le moyen le plus rapide de se connecter à **l'expertise et au financement d'amélioration de processus existants** déjà présents dans une grande organisation.

## Sources et lectures complémentaires

- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., and Daniel T. Jones. *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, and Daniel Roos. *The Machine That Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill, 2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press, 1988.
