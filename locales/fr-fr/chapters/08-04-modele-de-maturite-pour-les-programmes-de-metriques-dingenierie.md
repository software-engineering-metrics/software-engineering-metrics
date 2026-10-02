# 8.4 Modèle de maturité pour les programmes de métriques d'ingénierie

## Vue d'ensemble et motivation

Chaque chapitre des Parties 1 à 7 de ce livre se termine avec son propre [modèle de maturité](https://en.wikipedia.org/wiki/Capability_Maturity_Model) à cinq niveaux, limité à la famille de métriques spécifique de ce chapitre. Ce chapitre fait quelque chose de différent : il prend du recul et demande à quoi ressemble la maturité pour le *programme* de métriques dans son ensemble, la capacité organisationnelle qui produit, gouverne, et agit sur toutes ces métriques individuelles ensemble. Une organisation peut être au Niveau 4 sur la maturité de métrique DORA individuelle tout en étant encore au Niveau 1 sur la maturité de programme globale, si, par exemple, elle a une excellente instrumentation mais aucune gouvernance (chapitre 1.4), ou d'excellentes métriques individuelles mais un déploiement conduit par la peur (chapitre 8.3) qui a corrompu les données sous-jacentes indépendamment de combien bien chaque métrique a été conçue.

Le modèle de ce chapitre est construit autour de cinq dimensions qui traversent chaque famille de métriques individuelle que ce livre couvre : gouvernance et propriété (chapitre 1.4), qualité d'instrumentation (chapitre 1.5), équilibre résultat-contre-production (chapitre 1.3, chapitre 7.4), confiance culturelle (chapitre 8.3), et amélioration continue (la discipline de retraite et de révision que le chapitre 1.1 a établie au tout début de ce livre). La maturité de programme globale d'une organisation est réalistement le minimum, pas la moyenne, à travers ces cinq dimensions, puisqu'une faiblesse sérieuse dans n'importe laquelle, particulièrement la confiance culturelle, peut saper la valeur de la force dans toutes les autres, exactement comme le chapitre 8.3 l'argumentait directement.

Pour les grandes équipes, ce modèle consolidé donne à la direction un instrument unique et honnête pour l'auto-évaluation organisationnelle, distinct des et complémentaire aux contrôles de maturité chapitre par chapitre que ce livre fournit tout du long. Les organisations de grande entreprise comparant la maturité de métriques à travers les unités d'affaires, et les organisations de gouvernement rapportant la maturité de programme aux organismes de surveillance, bénéficient toutes deux de cette évaluation unique et transversale plutôt que d'avoir besoin de synthétiser elles-mêmes quarante-cinq lectures de maturité séparées au niveau de chapitre en une image globale cohérente.

## Principes clés

- **La maturité de programme est le minimum à travers ses dimensions, pas la moyenne.** Une faiblesse sérieuse en confiance culturelle sape la force partout ailleurs.
- **Les cinq dimensions transversales sont la gouvernance, l'instrumentation, l'équilibre de résultat, la confiance culturelle, et l'amélioration continue.** Chaque dimension rassemble des fils de nombreux chapitres individuels.
- **Ce modèle complète, ne remplace pas, les modèles de maturité individuels au niveau de chapitre.** Utilisez les deux ensemble pour une image complète.
- **L'auto-évaluation devrait être honnête et spécifique, pas aspirationnelle.** Évaluez où vous êtes réellement, en utilisant des preuves concrètes, pas où vous avez l'intention d'être.
- **Le mouvement entre les niveaux nécessite un investissement délibéré,** pas simplement le temps qui passe ; la maturité ne s'accumule pas automatiquement.

## Recommandations

### Évaluez chacune des cinq dimensions indépendamment, en utilisant des preuves concrètes

Pour la gouvernance, vérifiez si chaque métrique conséquente a un propriétaire nommé et une charte documentée (chapitre 1.4). Pour l'instrumentation, vérifiez si les métriques proviennent de sources automatisées plutôt que d'auto-rapport là où possible (chapitre 1.5). Pour l'équilibre de résultat, calculez le ratio réel de métriques pondérées par résultat contre pondérées par production sur vos tableaux de bord primaires (chapitre 7.4). Pour la confiance culturelle, évaluez honnêtement si votre historique de déploiement a déjà inclus un usage mal géré et punitif d'une métrique et comment il a été adressé (chapitre 8.3). Pour l'amélioration continue, vérifiez si votre organisation a un historique documenté de retraite de métriques qui ont cessé de gagner leur place (chapitre 1.1). Évaluez chaque dimension indépendamment avant de les combiner.

### Prenez le minimum à travers les dimensions comme votre score global honnête

Résistez à la tentation de faire la moyenne de vos cinq scores de dimension en un composite unique et plus flatteur. Un programme avec une excellente instrumentation (Niveau 4) mais une faible confiance culturelle (Niveau 1) n'est pas, dans aucun sens significatif, un programme de Niveau 2 ou 3 ; la dimension faible sape activement la valeur des fortes, puisque des données peu dignes de confiance corrompues par une manipulation conduite par la peur ne sont pas sauvées par le fait d'avoir été collectées avec une excellente instrumentation. Rapportez le minimum honnêtement, même si cela produit une image globale moins flatteuse qu'une moyenne ne le ferait.

### Utilisez ce modèle aux côtés de, pas à la place de, les modèles au niveau de chapitre

Ce modèle consolidé répond « à quel point notre programme global est-il mature » ; les modèles individuels au niveau de chapitre à travers les Parties 2 à 8 répondent « à quel point notre pratique pour cette métrique spécifique est-elle mature ». Utilisez les deux ensemble : le modèle consolidé pour prioriser quelle dimension transversale a le plus besoin d'investissement, et les modèles au niveau de chapitre pour identifier quelles familles de métriques spécifiques ont le plus besoin d'attention au sein de cette dimension.

### Revisitez l'évaluation à une cadence fixe, pas seulement quand incitée par une crise

Suivant la discipline de gouvernance cohérente de ce livre (chapitre 1.4), réévaluez la maturité de programme à une cadence régulière, annuellement est courant, plutôt que seulement après qu'une crise (un incident de manipulation découvert, un rapport public endommageant la crédibilité) ne force la question. Un programme qui n'examine sa propre maturité que réactivement manque la chance d'attraper et d'adresser une dimension s'affaiblissant avant qu'elle ne produise un véritable incident coûteux.

### Traitez un faible score honnêtement comme un point de départ pour l'investissement, pas une note d'échec

Suivant le cadrage diagnostique, pas évaluatif, que le chapitre 1.1 a établi pour tout ce livre, utilisez un faible score de maturité, sur toute dimension, comme le point de départ pour un plan d'investissement délibéré (la feuille de route d'adoption du chapitre 8.5 est l'étape suivante directe), pas comme un verdict dont se sentir mal. La plupart des organisations, honnêtement évaluées, trouveront de véritables faiblesses quelque part dans ce modèle ; la réponse productive est un investissement ciblé, pas la défensive sur le score.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Faire la moyenne des cinq scores de dimension | Produit un chiffre unique, simple, et plus flatteur | Cache une faiblesse critique dans une dimension sapant le reste |
| Prendre le minimum à travers les dimensions | Honnête, actionnable, identifie correctement la vraie contrainte | Peut sembler décourageant si une dimension traîne significativement derrière les autres |
| Utiliser seulement les modèles au niveau de chapitre | Conseils détaillés et spécifiques à la métrique | Manque la vue transversale de la santé de programme globale |
| Utiliser seulement ce modèle consolidé | Simple, de haut niveau | Manque le détail spécifique et actionnable que fournissent les modèles au niveau de chapitre |

La tension centrale est **la simplicité contre l'honnêteté**, faisant écho à la prudence du chapitre 5.5 contre un chiffre unique faussement précis. Un score moyenné est plus simple et plus confortable à rapporter, mais il cache activement la vraie contrainte sur la fiabilité et la valeur globales de votre programme. Résolvez la tension en faveur de l'honnêteté : rapportez le minimum, et utilisez à la fois ce modèle consolidé et les modèles individuels au niveau de chapitre ensemble pour une image complète, précise, et actionnable.

## Questions à discuter avec votre équipe

1. **Évalué honnêtement et indépendamment, quel niveau chacune de nos cinq dimensions, gouvernance, instrumentation, équilibre de résultat, confiance culturelle, et amélioration continue, obtient-elle réellement ?** Parcourez chaque dimension explicitement, en utilisant des preuves concrètes plutôt que l'impression, avant de les combiner en une évaluation globale.

2. **Quelle est notre dimension la plus faible, et cela correspond-il à notre intuition sur la santé globale de notre programme, ou révèle-t-il quelque chose que nous n'avions pas précédemment nommé directement ?** Un faible score en confiance culturelle spécifiquement, par exemple, pourrait saper la confiance dans des données qui semblent autrement techniquement excellentes.

3. **Avons-nous fait la moyenne de nos forces et faiblesses en une image globale plus flatteuse, plutôt que de rapporter honnêtement notre dimension la plus faible comme la vraie contrainte ?** Soyez honnêtes sur comment votre organisation a précédemment parlé de sa propre maturité de métriques.

4. **Quand avons-nous formellement réévalué pour la dernière fois notre maturité de programme globale, et était-ce incité par une crise ou par une cadence régulière et délibérée ?** Si seulement incité par crise, discutez de à quoi ressemblerait une cadence d'évaluation régulière à l'avenir.

5. **À quoi ressemblerait réellement un investissement ciblé dans notre dimension la plus faible, concrètement, pour le prochain trimestre ?** Passez directement de l'évaluation à l'action, connectant le diagnostic de ce chapitre à la feuille de route d'adoption du chapitre 8.5.

6. **Comment notre auto-évaluation se comparerait-elle à une revue externe honnête par quelqu'un en dehors de notre organisation ?** Cette question teste si votre évaluation interne pourrait elle-même être sujette à certains des mêmes biais optimistes contre lesquels ce livre met en garde tout du long, vaut la peine d'être vérifiée périodiquement avec une perspective authentiquement externe.

## Regard sectoriel

**Startup.** Une évaluation formelle à cinq dimensions est probablement inutile à très petite échelle, où la conscience informelle couvre habituellement la plupart de ce que ce modèle révélerait. L'habitude qui vaut la peine d'être adoptée tôt est simplement d'être honnête sur la confiance culturelle spécifiquement, puisque la culture de métriques précoce d'une jeune entreprise établit une fondation qui devient bien plus difficile à changer une fois que l'organisation a significativement grandi.

**Petite entreprise.** Un parcours simple, honnête, et informel à travers les cinq dimensions une fois par an, même sans évaluation formelle, capture la plupart de la valeur de ce chapitre sans nécessiter de processus d'évaluation structuré à cette échelle.

**Grande entreprise.** Ce modèle consolidé est particulièrement précieux pour comparer équitablement la maturité de métriques à travers de nombreuses unités d'affaires, puisqu'une comparaison chapitre par chapitre à travers des dizaines d'équipes serait lourde. Utilisez-le pour prioriser l'investissement à l'échelle de l'organisation vers quelle que soit la dimension montrant la faiblesse la plus répandue à travers les unités.

**Gouvernement.** Une auto-évaluation de maturité documentée et honnête, utilisant ce modèle consolidé, est un artefact authentiquement utile pour démontrer la rigueur de programme à un organisme de surveillance, à condition que l'évaluation soit menée honnêtement plutôt qu'aspirationnellement. Considérez une revue externe périodique de l'auto-évaluation elle-même, particulièrement pour la dimension de confiance culturelle, qui est la plus difficile à évaluer précisément depuis une perspective purement interne.

## Exemples

**Grande entreprise.** L'auto-évaluation initiale d'une entreprise de technologie logistique a évalué sa dimension d'instrumentation au Niveau 4 (sourcing de données automatisé et complet depuis les pipelines et systèmes) mais sa dimension de confiance culturelle au Niveau 1, suivant un incident de mauvaise utilisation de métrique non adressé de deux ans plus tôt qui n'avait jamais été directement reconnu ou réparé (faisant écho directement à l'exemple de gouvernement du chapitre 8.3). L'instinct initial de la direction était de faire la moyenne de ceux-ci en une image globale respectable de Niveau 2 ou 3 ; une application plus honnête de l'évaluation basée sur le minimum de ce chapitre a correctement identifié la confiance culturelle comme la vraie contrainte sur la valeur de tout le programme, puisque même une excellente instrumentation produisait des données que les ingénieurs, conscients de l'incident passé, ne faisaient encore pas pleinement confiance ou ne rapportaient pas honnêtement dedans. Un investissement ciblé spécifiquement dans la réparation de confiance culturelle, suivant directement les conseils du chapitre 8.3, a été priorisé sur un investissement d'instrumentation supplémentaire comme résultat direct de cette évaluation honnête et basée sur le minimum.

**Gouvernement.** Une agence nationale de statistiques menant sa première auto-évaluation de maturité formelle, utilisant ce modèle consolidé dans le cadre d'une revue de gouvernance de technologie plus large, a trouvé que sa dimension de gouvernance obtenait un bon score (propriété claire, chartes documentées) mais sa dimension d'équilibre de résultat obtenait un mauvais score, avec l'écrasante majorité des métriques suivies étant basées sur la production et l'activité malgré que l'argument de la Partie 7 pour la pondération par résultat ait été bien compris intellectuellement au sein de la direction technique de l'agence. Ce constat honnête et spécifique, plutôt qu'un sens général vague que « nous devrions mesurer les résultats davantage », a donné au plan d'investissement subséquent de l'agence (chapitre 8.5) un point de départ concret et fondé sur des preuves, et le rapport de suivi au conseil de surveillance de l'agence a spécifiquement cité cette évaluation de maturité comme la base d'une stratégie d'investissement de métriques redirigée.

## Argumentaire économique : motivations, ROI et TCO

Le retour d'une auto-évaluation de maturité honnête et basée sur le minimum est d'identifier correctement la véritable contrainte sur la valeur d'un programme de métriques, plutôt que d'investir davantage dans une dimension déjà forte tandis qu'une faible continue de saper la fiabilité de tout le programme, exactement le schéma que les deux exemples ci-dessus illustrent. Cet effet de ciblage est la valeur primaire du modèle : il dirige un investissement d'amélioration limité vers où il fera réellement bouger la maturité du programme global, plutôt que vers où l'investissement se trouve être le plus facile ou le plus familier.

Le coût total de possession est l'effort d'évaluation lui-même, modeste et périodique, pesé contre le risque de continuer à investir dans une dimension déjà forte tandis qu'une faible non adressée, particulièrement la confiance culturelle, continue de discrètement corrompre la valeur de tout ce que le programme a construit.

## Antipatrons et pièges

- **Faire la moyenne des scores de dimension en un composite plus flatteur :** cache la vraie contrainte sur la valeur globale du programme.
- **Évaluer seulement aspirationnellement, basé sur la politique énoncée plutôt que la pratique réelle :** produit une image inexacte et trop optimiste.
- **Utiliser ce modèle consolidé comme remplacement de, plutôt que complément à, les modèles au niveau de chapitre :** perd le détail spécifique et actionnable que fournissent ces modèles individuels.
- **Réévaluer seulement après qu'une crise force la question :** manque la chance d'attraper et d'adresser proactivement une dimension s'affaiblissant.
- **Traiter un faible score comme une note d'échec plutôt qu'un point de départ d'investissement :** invite la défensive plutôt que la réponse diagnostique et productive que ce livre recommande tout du long.
- **Ne jamais chercher une perspective externe honnête sur l'auto-évaluation :** risque que le même biais optimiste contre lequel ce livre met en garde tout du long affecte l'évaluation elle-même.

## Modèle de maturité

- **Niveau 1, Initiation :** Aucune évaluation transversale formelle n'existe ; les familles de métriques individuelles peuvent être évaluées indépendamment, mais la santé de programme globale n'est pas examinée.
- **Niveau 2, Développement :** Une certaine conscience informelle des forces et faiblesses de programme globales existe, mais aucune évaluation structurée à cinq dimensions n'a été menée.
- **Niveau 3, Standardisation :** Une évaluation structurée, honnête, et basée sur le minimum à cinq dimensions est menée, en utilisant des preuves concrètes, à l'échelle de l'organisation.
- **Niveau 4, Gestion :** L'évaluation est répétée à une cadence régulière, et ses constats informent directement et de manière cohérente les priorités d'investissement ciblées.
- **Niveau 5, Orchestration :** L'organisation a une pratique démontrée et soutenue d'auto-évaluation honnête, incluant une revue externe périodique, et peut pointer vers des décisions d'investissement spécifiques que les constats de l'évaluation ont directement conduites.

## Idées pour la discussion

1. Quel est notre score honnête et fondé sur des preuves sur chacune des cinq dimensions en ce moment ?
2. Quelle dimension est notre vraie contrainte, et cela correspond-il à notre intuition ?
3. Avons-nous déjà fait la moyenne de nos scores en une image plus flatteuse que le minimum ne le montrerait ?
4. Quand avons-nous formellement réévalué pour la dernière fois, et était-ce proactif ou conduit par une crise ?
5. Que révélerait probablement une revue externe honnête de notre auto-évaluation ?

## Points clés à retenir

- La maturité de programme couvre cinq dimensions transversales : **gouvernance, instrumentation, équilibre de résultat, confiance culturelle, et amélioration continue**.
- La maturité globale est le **minimum à travers les dimensions, pas la moyenne** ; une faiblesse en confiance culturelle sape la force partout ailleurs.
- Utilisez ce modèle consolidé **aux côtés de, pas à la place de**, les modèles de maturité individuels au niveau de chapitre à travers ce livre.
- **Réévaluez à une cadence régulière**, plutôt que d'attendre qu'une crise ne force la question.
- Traitez un faible score comme un **point de départ d'investissement honnête**, pas une note d'échec, suivant le cadrage diagnostique de ce livre tout du long.

## Sources et lectures complémentaires

- *Capability Maturity Model Integration (CMMI)*, Software Engineering Institute (la méthodologie de modèle de maturité générale dont l'approche de ce chapitre tire une inspiration structurelle).
- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble, and Gene Kim (la base de recherche pour les modèles de maturité individuels au niveau de chapitre que ce modèle consolidé rassemble).
- *Measuring and Managing Performance in Organizations*, par Robert D. Austin (évaluation organisationnelle de la santé et du dysfonctionnement de programme de métriques).
- *The Fifth Discipline: The Art and Practice of the Learning Organization*, par Peter M. Senge (auto-évaluation organisationnelle au niveau système et amélioration continue).
