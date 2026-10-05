# 1.4 Gouvernance et propriété des métriques

## Vue d'ensemble et motivation

Une métrique sans propriétaire est une dispute permanente qui attend de se produire. Deux équipes calculent « utilisateurs actifs » différemment et passent une réunion à réconcilier des chiffres au lieu de gérer la tendance ; une tuile de tableau de bord que personne ne maintient devient tranquillement obsolète pendant des mois avant que quiconque ne le remarque ; une métrique à l'origine construite pour le diagnostic d'une équipe est adoptée par une autre équipe pour un usage que sa définition originale n'a jamais été conçue pour supporter. Rien de tout cela n'est un problème de mesure au sens statistique. C'est un problème de gouvernance, et il est résoluble avec la même discipline que les organisations appliquent déjà au code : propriété explicite, [source de vérité](https://en.wikipedia.org/wiki/Single_source_of_truth) documentée, et processus de revue.

La gouvernance n'est pas de la bureaucratie pour elle-même. C'est ce qui fait qu'un programme de métriques survit au contact de l'échelle organisationnelle. Une seule équipe peut garder ses définitions de métriques dans la tête de quelqu'un et corriger la dérive par la conversation quotidienne. Une organisation avec des dizaines d'équipes, chacune produisant et consommant des métriques, ne le peut pas. Sans gouvernance, les définitions dérivent tranquillement, les métriques se multiplient sans que personne ne les élague, et au moment où la direction remarque que deux rapports se contredisent, le coût de les réconcilier a déjà été payé plusieurs fois en réunions gaspillées et en confiance érodée.

Pour les organisations d'entreprise et gouvernementales, la gouvernance porte un poids supplémentaire parce que les métriques alimentent de plus en plus des décisions à conséquences réelles, allocation budgétaire, rapport de performance public, contrats de fournisseurs, qui survivent à toute personne seule ayant construit le tableau de bord original. Une charte des métriques qui survit au turnover du personnel, que tout nouveau membre d'équipe peut lire et comprendre, est ce qui fait que les chiffres d'une organisation signifient toujours la même chose cinq ans plus tard qu'aujourd'hui.

## Principes clés

- **Chaque métrique a exactement un propriétaire.** La propriété partagée n'est aucune propriété ; quand tout le monde possède une définition, personne ne la maintient.
- **Une métrique a une source de vérité.** Deux systèmes calculant la même métrique différemment est un échec de gouvernance qui attend de surgir.
- **La gouvernance est écrite, pas un savoir tribal.** Une charte des métriques qui vit seulement dans la mémoire de quelqu'un ne survit pas à son départ.
- **Le retrait est aussi important que l'adoption.** Un programme de métriques sain élague aussi délibérément qu'il croît.
- **La gouvernance s'échelonne avec la conséquence, pas avec le nombre de métriques.** Une métrique alimentant un rapport public a besoin d'une gouvernance plus lourde qu'une qu'une seule équipe utilise pour déboguer son propre sprint.

## Recommandations

### Écrivez une charte des métriques pour chaque ensemble de métriques qui traverse une frontière d'équipe

Une **charte des métriques** est un document court et vivant qui énonce l'objectif d'un ensemble de métriques, ses non-objectifs explicites (la distinction diagnostique-contre-évaluative du sujet 1.1 a sa place ici), le propriétaire et la source de vérité de chaque métrique, et une cadence de revue. Gardez-la à une page. Le fichier docs/examples/metrics-charter-example.md dans le dépôt compagnon de ce livre montre la forme. Une charte aussi courte est lue ; une charte qui s'étend en document de politique ne l'est pas.

### Assignez un propriétaire nommé à chaque métrique, pas une équipe

« L'équipe plateforme possède cette métrique » diffuse la responsabilité jusqu'à ce que personne ne la maintienne réellement. Nommez une personne ou un rôle spécifique et responsable. Ce propriétaire est responsable de garder la définition de la métrique exacte, de garder son instrumentation saine, et de répondre à la question « pourquoi ce chiffre a-t-il l'air faux » quand elle survient inévitablement. La propriété peut et devrait tourner à mesure que les gens changent de rôle, mais la charte devrait toujours nommer un propriétaire actuel, jamais laisser le champ vide.

### Établissez une source de vérité par métrique et interdisez le calcul parallèle

Quand deux systèmes calculent la même métrique nominalement nommée différemment, par exemple une équipe comptant les connexions pour « utilisateurs actifs » et une autre comptant les appels API, le désaccord résultant coûte bien plus en réunions de réconciliation qu'il n'aurait coûté de s'accorder sur une source de vérité en amont. Nommez le système faisant autorité pour chaque métrique dans la charte, et traitez tout autre calcul de la même métrique soit comme un bug à corriger, soit comme une métrique différemment nommée à renommer.

### Intégrez une revue de retrait dans la cadence de gouvernance

Un programme de métriques qui ne fait qu'ajouter des métriques accumule une prolifération de tableau de bord sur laquelle personne ne peut agir (sujet 1.1). À chaque revue de gouvernance, en plus de proposer de nouvelles métriques, demandez lesquelles des existantes n'ont éclairé aucune décision dans les deux derniers cycles et sont candidates au retrait. Le retrait n'est pas un échec ; c'est la même discipline qu'une base de code saine applique au code mort.

### Échelonnez la rigueur de gouvernance à la conséquence, pas au volume

Chaque métrique n'a pas besoin du même processus. Une métrique qu'une seule équipe invente pour déboguer son propre sprint a besoin de presque aucune gouvernance au-delà de l'équipe sachant ce qu'elle signifie. Une métrique qui alimente un tableau de bord de direction, un rapport de performance public, ou la rémunération d'un individu a besoin d'une définition documentée, d'un propriétaire nommé, d'une piste d'audit, et d'une validation avant d'entrer en production. Adaptez le poids de votre processus à la conséquence que la métrique soit fausse, pas au nombre de métriques existantes.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Aucune gouvernance formelle | Rapide, faibles frais généraux pour les petites équipes | Les définitions dérivent ; la propriété se diffuse ; les tableaux de bord proliférent sans contrôle |
| Charte légère par ensemble de métriques | Peu coûteux, lisible, s'échelonne avec l'organisation | Nécessite de la discipline pour rester à jour ; peut être sauté sous pression de délai |
| Comité de gouvernance central lourd | Forte cohérence, forte piste d'audit | Lent à approuver de nouvelles métriques ; peut devenir un goulot d'étranglement que les équipes contournent |
| Gouvernance échelonnée à la conséquence | Adapte l'effort au risque réel | Nécessite du jugement pour classifier correctement la conséquence ; peut être manipulée en sous-estimant les enjeux |

La tension centrale est **cohérence contre vitesse**. Une gouvernance centrale lourde produit des métriques fiables et cohérentes mais ralentit une équipe exactement quand elle veut instrumenter quelque chose rapidement pour répondre à une question urgente. Résolvez la tension en échelonnant le poids de gouvernance à la conséquence : laissez les équipes instrumenter librement pour leur propre usage diagnostique, et exigez la charte complète, la propriété et la discipline de validation seulement une fois qu'une métrique traverse une frontière d'équipe ou alimente un usage évaluatif ou public.

## Questions à discuter avec votre équipe

1. **Chaque métrique qui traverse une frontière d'équipe a-t-elle un propriétaire nommé, et ce propriétaire se reconnaîtrait-il comme responsable si on le lui demandait aujourd'hui ?** « L'équipe plateforme la possède » n'est pas une réponse ; une personne ou un rôle spécifique l'est. Auditez vos métriques inter-équipes et vérifiez si le propriétaire nommé, s'il en existe un, sait réellement qu'il porte cette responsabilité.

2. **Où calculons-nous actuellement la même métrique nominalement nommée de deux façons différentes, et combien de temps avons-nous passé à réconcilier le désaccord ?** C'est l'un des échecs de gouvernance les plus coûteux et les plus communs dans les grandes organisations, et il est entièrement évitable avec une source de vérité unique documentée. Apportez un exemple réel si vous en avez un et tracez son coût.

3. **Quand avons-nous retiré une métrique pour la dernière fois, et qu'est-ce qui a déclenché cette décision ?** Une organisation qui ne peut décrire que comment elle ajoute des métriques, jamais comment elle les retire, accumule une dette de tableau de bord. Si vous ne pouvez pas vous rappeler un retrait, cette absence est elle-même la réponse à cette question.

4. **Notre processus de gouvernance est-il proportionnel à la conséquence, ou chaque métrique passe-t-elle par le même poids de revue indépendamment des enjeux ?** Une gouvernance excessivement lourde sur une métrique d'équipe à faibles enjeux ralentit le travail sans bénéfice de sécurité ; une gouvernance excessivement légère sur une métrique alimentant un rapport public ou une décision de rémunération est un risque réel. Cartographiez vos métriques actuelles par conséquence et vérifiez honnêtement le poids du processus contre cela.

5. **Qu'arrive-t-il à la propriété d'une métrique quand la personne qui l'a construite change de rôle ou part ?** Une charte des métriques qui n'existe que dans la tête d'une personne disparaît avec elle. Testez cela en choisissant une métrique et en demandant si une nouvelle embauche pourrait, à partir de la documentation écrite seule, comprendre sa définition, sa source de vérité et son objectif.

6. **Comment saurions-nous si la définition d'une métrique avait tranquillement changé ?** Un changement dans la manière dont un chiffre est calculé, sans changement de son nom ou de note dans son historique, est presque invisible jusqu'à ce que quelqu'un compare les anciennes et nouvelles données et trouve une discontinuité qu'il ne peut pas expliquer. Discutez si vos métriques portent une forme quelconque de journal des modifications aujourd'hui.

## Regard sectoriel

**Startup.** La gouvernance formelle est généralement excessive pour une équipe de cinq personnes où tout le monde sait déjà ce que signifie chaque chiffre. La seule discipline qui vaut la peine d'être adoptée tôt malgré tout est de nommer par écrit un propriétaire unique par métrique, parce que cela coûte presque rien et prévient la confusion à mesure que les premières embauches rejoignent et commencent à demander ce qu'un chiffre signifie.

**Petite entreprise.** La gouvernance ici signifie surtout choisir, et s'y tenir, un outil comme source de vérité pour chaque métrique plutôt que de laisser des feuilles de calcul et le tableau de bord intégré d'une plateforme tranquillement diverger. Écrivez la charte comme un document unique partagé, même informel, pour qu'un nouvel employé puisse découvrir ce qu'un chiffre signifie sans demander à droite et à gauche.

**Grande entreprise.** C'est ici que la gouvernance se rentabilise. Standardisez les définitions entre unités commerciales, exigez une charte pour tout ce qui alimente un tableau de bord de direction, et intégrez une revue de retrait dans une cadence de gouvernance récurrente, parce que la prolifération de tableau de bord à cette échelle devient rapidement coûteuse, à la fois en coût de maintenance et en perte de crédibilité quand deux divisions rapportent des chiffres contradictoires pour la même chose.

**Gouvernement.** La gouvernance ici a souvent une dimension légale ou d'audit : les mesures de performance publiées peuvent devoir satisfaire des exigences de rapport statutaires, et un changement de définition peut avoir de réelles conséquences politiques. Documentez la méthodologie publiquement, gelez les définitions entre les périodes de rapport sauf si un changement est lui-même justifié publiquement, et traitez un audit indépendant de la définition de la métrique, pas seulement de sa valeur actuelle, comme une pratique de gouvernance permanente.

## Exemples

**Grande entreprise.** Une entreprise de logiciels multinationale a découvert, lors d'une intégration post-acquisition, que ses deux plus grandes unités commerciales définissaient « fréquence de déploiement » différemment : l'une comptait chaque poussée vers un environnement de pré-production, l'autre ne comptait que les sorties en production. La direction avait comparé la performance de livraison des deux unités pendant plus d'un an en utilisant des chiffres qui n'étaient en fait pas comparables. La correction a été un comité de gouvernance des métriques à l'échelle de l'entreprise qui a publié un glossaire unique de définitions de métriques (reflété dans le sujet 9.2 de ce livre), a exigé que chaque équipe certifie sa conformité, et a retiré les définitions locales ambiguës en un trimestre.

**Gouvernement.** Un office national de statistiques responsable de publier un tableau de bord de performance de services numériques a trouvé qu'un changement dans la manière dont « résolu dans les délais du SLA » était calculé, fait tranquillement par une équipe d'ingénierie corrigeant ce qu'elle voyait comme un bug, avait décalé un chiffre de conformité phare de plusieurs points de pourcentage sans aucune documentation publique du changement. L'office a établi un processus formel de contrôle des changements pour toute définition de métrique alimentant un rapport public : les changements proposés exigent une justification documentée, une comparaison avant-après publiée aux côtés du changement, et une validation d'un responsable nommé, comblant l'écart qui avait laissé passer inaperçu le changement antérieur.

## Argumentaire économique : motivations, ROI et TCO

Le retour de la gouvernance est le coût de réconciliation évité. Chaque heure passée dans une réunion où deux équipes se disputent sur qui a le bon chiffre est une heure qu'une gouvernance disciplinée, une source de vérité unique, un propriétaire nommé, aurait entièrement prévenue. À l'échelle de l'entreprise, ce coût s'accumule à travers des dizaines d'équipes et peut consommer une part authentiquement significative de l'attention de la direction sur un problème qu'une charte d'une page par ensemble de métriques aurait évité.

Le coût total de possession d'une pratique de gouvernance légère, une charte, un propriétaire nommé, une revue périodique, est modeste et principalement initial. L'alternative, découvrir un an dans une initiative majeure que les chiffres auxquels la direction faisait confiance n'étaient en fait jamais comparables, coûte dramatiquement plus, tant en analyse gaspillée qu'en dommage de crédibilité en corrigeant le registre public ou interne après coup.

## Antipatrons et pièges

- **Propriété d'équipe au lieu de propriété de personne nommée :** diffuse la responsabilité jusqu'à ce que personne ne maintienne réellement la définition.
- **Calcul parallèle de la même métrique nominale :** garantit un désaccord éventuel et une réconciliation coûteuse.
- **Une charte qui n'existe que dans la tête de quelqu'un :** disparaît au moment où cette personne change de rôle.
- **Un programme de métriques qui ne fait qu'ajouter, jamais retirer :** produit une prolifération de tableau de bord sur laquelle personne ne peut agir.
- **Poids de gouvernance uniforme indépendamment de la conséquence :** ralentit le travail à faibles enjeux tout en sous-protégeant les métriques publiques ou liées à la rémunération à forts enjeux.
- **Changements de définition silencieux :** le sens d'une métrique change sans journal de modifications, et les comparaisons historiques deviennent tranquillement invalides.

## Modèle de maturité

- **Niveau 1, Initiation :** Les métriques n'ont pas de propriétaires formels ; les définitions vivent dans la mémoire individuelle et dérivent tranquillement entre équipes.
- **Niveau 2, Développement :** Certaines équipes écrivent une documentation informelle pour leurs propres métriques, mais il n'y a pas de format de charte partagé ni de cohérence inter-équipes.
- **Niveau 3, Standardisation :** Chaque métrique traversant une frontière d'équipe a une charte documentée, un propriétaire nommé, et une source de vérité unique convenue, appliquée à travers l'organisation.
- **Niveau 4, Gestion :** Une cadence de gouvernance récurrente revoit les métriques pour leur pertinence continue, retire celles qui ne se rentabilisent plus, et suit les changements de définition avec un historique visible.
- **Niveau 5, Orchestration :** La gouvernance est proportionnelle à la conséquence, automatisée où possible (un catalogue de métriques qui signale les métriques non documentées ou sans propriétaire), et l'organisation peut démontrer, sur demande, la provenance complète de tout chiffre publié.

## Idées de discussion

1. Un nouvel embauché pourrait-il découvrir, à partir de la documentation seule, ce que signifient réellement nos trois métriques les plus importantes ?
2. Lesquelles de nos métriques deux systèmes différents calculent-ils actuellement différemment ?
3. Quand avons-nous retiré une métrique pour la dernière fois, et comment avons-nous décidé de le faire ?
4. Notre processus de gouvernance est-il plus lourd là où la conséquence est la plus élevée, ou est-il uniforme ?
5. Qui possède, nommément, la métrique publique la plus conséquente de notre organisation ?

## Points clés à retenir

- Chaque métrique a besoin d'**un propriétaire nommé**, pas une équipe, et d'**une source de vérité**, pas un calcul parallèle.
- Écrivez une **charte des métriques** courte et vivante pour tout ensemble de métriques qui traverse une frontière d'équipe, énonçant l'objectif, les non-objectifs, la propriété et la cadence de revue.
- Le **retrait** est une discipline de gouvernance aussi importante que l'adoption ; élaguez délibérément.
- Échelonnez la rigueur de gouvernance à la **conséquence**, pas au nombre de métriques : processus plus lourd pour les métriques publiques, évaluatives ou liées à la rémunération.
- La définition d'une métrique peut dériver tranquillement ; suivez les changements avec un historique visible pour que la confiance dans un chiffre survive au turnover du personnel.

## Sources et lectures complémentaires

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program*, par John Ladley (structures de gouvernance applicables aux programmes de métriques).
- *Measuring and Managing Performance in Organizations*, par Robert D. Austin (dysfonctionnement organisationnel autour de la propriété et de l'usage des métriques).
- *Key Performance Indicators*, par David Parmenter (propriété des métriques, discipline de définition et cadence de revue).
- Guide du Government Accountability Office (GAO) des États-Unis sur la mesure de performance et le GPRA Modernization Act : gouvernance des métriques du secteur public et contrôle des changements.
