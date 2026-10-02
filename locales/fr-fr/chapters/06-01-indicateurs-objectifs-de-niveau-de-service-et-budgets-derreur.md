# 6.1 Indicateurs, objectifs de niveau de service, et budgets d'erreur

## Vue d'ensemble et motivation

L'**[ingénierie de fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE)**, la discipline pionnière chez Google et documentée dans le livre *Site Reliability Engineering*, a contribué un vocabulaire sur lequel ce chapitre se construit directement : un **indicateur de niveau de service (SLI)** est un signal directement mesuré de la santé d'un service, latence de requête, taux d'erreur, disponibilité. Un **objectif de niveau de service (SLO)** est la plage cible pour cet indicateur, 99,9 % des requêtes réussissent en 200 millisecondes, par exemple. Et un **budget d'erreur** est le manque autorisé, les 0,1 % de requêtes permises d'échouer, traité non pas comme un défaut à éliminer mais comme une ressource dépensable qui peut être utilisée délibérément pour prendre un risque : livrer un changement risqué, exécuter une expérience, ou simplement accepter qu'une fiabilité parfaite n'est ni atteignable ni, passé un certain point, en vaut le coût.

Cette dernière idée, le budget d'erreur comme ressource dépensable plutôt qu'un chiffre à minimiser vers zéro, est le concept unique le plus important de ce chapitre et sans doute de toute cette partie. Elle résout une tension qui afflige de nombreuses organisations : l'ingénierie veut livrer des fonctionnalités et prendre des risques raisonnables ; l'exploitation veut une stabilité maximale. Sans un budget d'erreur partagé et quantifié, cela devient une négociation interminable et politiquement chargée. Avec un, cela devient une règle simple et objective : dépensez librement tant qu'il reste du budget, ralentissez et priorisez automatiquement le travail de stabilité une fois qu'il est épuisé. Cela transforme un désaccord philosophique en un arithmétique.

Pour les grandes équipes, les SLO et budgets d'erreur sont ce qui rend la fiabilité mesurable et négociable plutôt qu'un absolu inatteignable et non énoncé que chaque équipe manque discrètement tout en se sentant vaguement coupable à ce sujet. Les organisations de grande entreprise utilisent les SLO pour fixer des attentes claires et contractuelles entre équipes et avec les clients ; les organisations de gouvernement exploitant une infrastructure publique critique les utilisent pour fixer des cibles de fiabilité défendables et publiquement justifiables plutôt qu'un standard impossible de perfection qu'aucun système réel ne peut soutenir.

## Principes clés

- **Une fiabilité de 100 % est la mauvaise cible pour presque tout système.** Elle est habituellement inatteignable, et la poursuivre passé un certain point échange activement de la vélocité contre aucun bénéfice utilisateur significatif.
- **Un SLO devrait refléter ce que les utilisateurs remarquent et dont ils se soucient réellement,** pas un chiffre rond arbitraire choisi parce qu'il semble rassurant.
- **Le budget d'erreur transforme la fiabilité en une ressource dépensable,** donnant à la fois à l'ingénierie et à l'exploitation une règle partagée et objective pour quand livrer vite et quand ralentir.
- **Les SLI doivent être mesurés depuis l'expérience réelle de l'utilisateur** là où possible, pas seulement depuis la santé auto-rapportée d'un système interne.
- **Épuiser le budget d'erreur déclenche une réponse prédéterminée et convenue,** pas une dispute ad hoc à chaque fois que cela se produit.

## Recommandations

### Choisissez des SLI qui reflètent l'expérience utilisateur authentique

Sélectionnez des indicateurs mesurés aussi proches que possible de l'expérience utilisateur réelle : taux de succès de requête et latence mesurés à la périphérie ou à l'équilibreur de charge, pas seulement des contrôles de santé de service interne qui peuvent rapporter « sain » tandis que les utilisateurs vivent de véritables problèmes. Un SLI qui mesure quelque chose que l'utilisateur ne remarque jamais réellement, un composant interne techniquement actif tandis que la requête globale échoue encore, mesure la mauvaise chose quelle que soit la facilité à l'instrumenter.

### Fixez la cible du SLO basée sur ce dont les utilisateurs ont réellement besoin, pas un chiffre rond arbitraire

Résistez au réflexe de fixer une cible comme « 99,99 % de disponibilité » simplement parce que cela semble rigoureux de manière impressionnante. Au lieu de cela, recherchez quel niveau de fiabilité les utilisateurs remarquent et dont ils se soucient authentiquement, informé par les données d'incident historiques, la recherche utilisateur, et le coût démontré d'atteindre chaque incrément supplémentaire de fiabilité, puisque passer de 99,9 % à 99,99 % coûte souvent bien plus d'effort d'ingénierie que passer de 99 % à 99,9 % ne l'a fait, pour un bénéfice perceptible par l'utilisateur décroissant et finalement négligeable.

### Traitez le budget d'erreur comme une ressource dépensable avec une réponse prédéterminée à l'épuisement

Calculez le budget d'erreur directement depuis le SLO (une cible de disponibilité de 99,9 % sur 30 jours permet environ 43 minutes d'indisponibilité autorisée) et suivez la dépense contre lui en continu. Convenez, à l'avance et avant tout incident spécifique, de ce qui se passe quand le budget est épuisé : une politique courante et efficace est que le travail de fonctionnalités se met en pause et que la priorité de l'équipe se déplace automatiquement vers le travail de fiabilité jusqu'à ce que le budget se rétablisse. Cette règle prédéterminée élimine le besoin de relitiger le compromis sous pression pendant chaque incident individuel.

### Utilisez le budget d'erreur pour prendre des décisions de risque délibérées et informées

Un budget d'erreur sain et non dépensé n'est pas quelque chose à thésauriser ; c'est une permission de prendre des risques raisonnables, livrer un changement avec un risque élevé mais acceptable, exécuter une expérience d'ingénierie du chaos (le chapitre d'ingénierie du chaos du livre jumeau `software-engineering-guide` couvre cela directement), ou accepter un changement d'architecture plus risqué, parce que le budget existe spécifiquement pour être dépensé délibérément plutôt que préservé intact. Un budget d'erreur qui n'est jamais dépensé suggère soit une équipe excessivement conservatrice soit un SLO fixé trop lâchement par rapport à la fiabilité réellement atteinte, les deux valant la peine d'être investigués.

### Revoyez et révisez les SLO périodiquement, basé sur des preuves, pas l'inertie

Un SLO fixé il y a des années peut ne plus refléter les attentes actuelles des utilisateurs, l'architecture système, ou les priorités d'affaires. Revoyez les SLO à une cadence régulière, en vérifiant la fiabilité historique atteinte, les retours utilisateur, et si la cible représente encore un point de compromis significatif plutôt que soit une cible facilement atteinte qui pourrait être resserrée pour permettre plus de vélocité ailleurs, soit une irréaliste que l'équipe a effectivement renoncé à atteindre.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Aucun SLO formel (« aussi fiable que possible » implicite) | Aucune surcharge de configuration | Négociation interminable et non fondée entre vélocité et stabilité ; aucune règle partagée |
| SLO aspirationnel et très élevé (99,99 %+) | Signale le sérieux envers la fiabilité | Coût souvent inutile ; retours décroissants au-delà de ce que les utilisateurs remarquent réellement |
| SLO fondé sur des preuves et ancré dans l'expérience utilisateur | Reflète une valeur authentique ; défendable et atteignable | Nécessite de véritables données et analyses pour fixer correctement |
| Budget d'erreur avec réponse prédéterminée à l'épuisement | Élimine la négociation ad hoc ; prise de décision objective et rapide | Nécessite l'adhésion organisationnelle et la discipline pour réellement honorer la règle prédéterminée |

La tension centrale est **l'aspiration contre l'atteignabilité**. Un SLO élevé et aspirationnel semble signaler le sérieux envers la qualité, mais poursuivre la fiabilité au-delà de ce que les utilisateurs remarquent réellement échange de la vélocité réelle contre aucun bénéfice authentique, et une cible irréaliste que l'équipe n'atteint jamais réellement enseigne à tout le monde à cesser de prendre le SLO au sérieux du tout. Résolvez la tension en ancrant le SLO dans des preuves réelles, qu'est-ce que les utilisateurs remarquent, qu'est-ce que le système a historiquement atteint, combien coûte chaque incrément supplémentaire, plutôt que dans l'aspiration ou un désir d'avoir l'air rigoureux sur une fiche d'évaluation.

## Questions à discuter avec votre équipe

1. **Notre SLO actuel est-il ancré dans des preuves sur ce que les utilisateurs remarquent réellement, ou a-t-il été fixé aspirationnellement parce qu'un chiffre élevé semblait approprié et sérieux ?** Retracez l'origine de votre cible actuelle, si vous le pouvez, et évaluez honnêtement si elle reflète une véritable recherche utilisateur ou seulement l'intuition d'ingénierie.

2. **Avons-nous une réponse prédéterminée et convenue à l'épuisement du budget d'erreur, ou le compromis est-il relitigé à chaque fois que cela se produit ?** Si la réponse honnête est la seconde, cet écart vaut la peine d'être fermé avant que le prochain incident ne force la dispute sous pression.

3. **Notre budget d'erreur est-il réellement dépensé délibérément, sur un changement à risque calculé ou une expérience, ou n'est-il jamais consommé qu'accidentellement par des incidents ?** Un budget qui n'est jamais dépensé délibérément pourrait indiquer une équipe excessivement prudente manquant des opportunités légitimes que le budget existe pour permettre.

4. **Nos SLI sont-ils mesurés depuis l'expérience utilisateur authentique, ou depuis la santé système interne qui pourrait ne pas refléter ce que les utilisateurs rencontrent réellement ?** Vérifiez votre instrumentation actuelle contre cette distinction spécifique ; c'est un écart courant même dans des programmes de fiabilité autrement matures.

5. **Quand avons-nous revu notre SLO pour la dernière fois contre les preuves actuelles, et quelque chose a-t-il changé, attentes utilisateur, architecture système, priorités d'affaires, qui justifierait de le réviser ?** Si vous ne pouvez pas vous rappeler d'une revue récente, cette absence vaut elle-même la peine d'être discutée.

6. **Que nous coûterait-il, en effort d'ingénierie, de monter notre SLO actuel d'un « neuf » supplémentaire de fiabilité, et ce coût serait-il justifié par un véritable bénéfice utilisateur ?** Ce cadrage coût-bénéfice concret aide à ancrer la tension aspiration-contre-atteignabilité dans de vrais chiffres plutôt qu'une préférence abstraite.

## Regard sectoriel

**Startup.** Les SLO formels sont souvent inutiles très tôt, quand l'équipe peut répondre aux problèmes de fiabilité directement et informellement. Adoptez au moins un SLO approximatif et informel une fois que vous avez de vrais clients payants dépendant de la disponibilité, puisque la discipline d'une cible explicite, même suivie de manière lâche, aide à prioriser le travail de fiabilité contre la pression de fonctionnalités plus tôt que ce que la plupart des jeunes entreprises pensent à faire.

**Petite entreprise.** La plupart des plateformes d'hébergement et d'observabilité modernes rapportent les données de disponibilité et de latence de base avec une configuration minimale ; utilisez cela pour fixer un SLO simple et atteignable plutôt qu'un aspirationnel que vous ne pouvez pas réalistement suivre ou traiter avec une capacité opérationnelle limitée.

**Grande entreprise.** Les SLO à cette échelle sous-tendent souvent des accords de niveau de service contractuels avec de véritables conséquences financières, ce qui rend la fixation de cible fondée sur des preuves et la gestion disciplinée du budget d'erreur particulièrement importantes. Investissez dans des SLI authentiquement ancrés dans l'expérience utilisateur plutôt que des contrôles de santé interne pratiques, et établissez la politique de réponse à l'épuisement prédéterminée formellement, avec l'adhésion des dirigeants, avant qu'elle ne soit nécessaire sous pression.

**Gouvernement.** Les cibles de fiabilité du secteur public pour l'infrastructure critique portent parfois un poids légal ou réglementaire, et une cible irréaliste et non atteinte découverte pendant un audit ou un incident public endommage significativement la crédibilité institutionnelle. Fixez des cibles basées sur un véritable besoin utilisateur et de mission documenté, et soyez transparents publiquement sur le compromis délibéré qu'un budget d'erreur représente, plutôt que d'impliquer un standard inatteignable de perfection.

## Exemples

**Grande entreprise.** Une entreprise de stockage cloud avait, pendant des années, visé une « disponibilité maximale » sans SLO formel, conduisant à une tension chronique et non résolue entre l'équipe produit (voulant livrer des fonctionnalités vite) et l'équipe d'infrastructure (voulant une prudence maximale), replaidée fraîchement à chaque réunion de planification de publication. Adopter un SLO formel de disponibilité de 99,95 % avec un budget d'erreur explicite et une politique prédéterminée, le travail de fonctionnalités se met en pause automatiquement quand le budget est épuisé, a résolu entièrement la négociation récurrente : les deux équipes pouvaient voir le même chiffre et s'accorder sur la même règle, et l'entreprise a rapporté une augmentation mesurable de fonctionnalités livrées pendant les périodes de budget sain aux côtés d'un ralentissement mesurable et délibéré pendant les deux périodes de l'année suivante où le budget était authentiquement épuisé, exactement comme la politique l'avait prévu.

**Gouvernement.** Le système d'alerte publique d'un service météorologique national avait fonctionné pendant des années sous une attente informelle de « toujours disponible », sans cible documentée et un stress opérationnel significatif et non adressé sur l'équipe d'astreinte essayant d'atteindre un standard non énoncé et effectivement impossible. Un SLO formel nouvellement adopté, 99,9 % de disponibilité avec une explication publique du budget d'erreur clairement communiquée, a donné à l'équipe d'exploitation une permission explicite et défendable de programmer des fenêtres de maintenance planifiée dans le budget, quelque chose que l'attente précédente non énoncée de « toujours disponible » avait rendu politiquement difficile à faire même quand authentiquement nécessaire pour la santé système à long terme. La communication publique expliquant directement le concept de budget d'erreur, plutôt que de le cacher, a été reçue favorablement comme signe de pratique opérationnelle honnête et mature plutôt qu'un affaiblissement de l'engagement envers la qualité de service.

## Argumentaire économique : motivations, ROI et TCO

Le retour d'adopter formellement les SLO et budgets d'erreur est de résoudre une négociation autrement interminable et politiquement coûteuse entre vélocité et stabilité avec une règle unique, partagée, et objective. L'exemple de stockage cloud ci-dessus le montre concrètement : des années de tension récurrente et non résolue entre deux équipes ont été résolues par une cible formelle unique et une politique prédéterminée, libérant une énergie organisationnelle significative qui allait précédemment vers relitiger le même compromis de manière répétée.

Le coût total de possession inclut l'effort d'analyse pour fixer une cible fondée sur des preuves correctement et la discipline pour honorer la réponse à l'épuisement prédéterminée même sous pression de livrer une fonctionnalité particulièrement désirée quand même. Ce coût de discipline est réel, mais il est bien plus bas que le coût continu d'une négociation chronique et non résolue qui consomme l'énergie organisationnelle à chaque cycle de planification indéfiniment.

## Antipatrons et pièges

- **Fixer un SLO aspirationnel sans preuve derrière :** produit soit une cible irréaliste que l'équipe cesse de prendre au sérieux, soit une inutilement coûteuse poursuivant un bénéfice que les utilisateurs ne remarquent pas.
- **Aucune réponse prédéterminée à l'épuisement du budget d'erreur :** force le même argument de compromis difficile sous pression à chaque fois que cela se produit.
- **Mesurer les SLI depuis la santé système interne plutôt que l'expérience utilisateur authentique :** peut rapporter « sain » tandis que les utilisateurs vivent de véritables problèmes.
- **Ne jamais réellement dépenser délibérément un budget d'erreur sain :** peut indiquer une prudence excessive et une opportunité légitime manquée.
- **Fixer une cible une fois et ne jamais la revisiter :** un SLO peut devenir obsolète à mesure que les attentes utilisateur, l'architecture, et les priorités changent.
- **Traiter la politique de budget d'erreur comme facultative sous pression :** une règle prédéterminée qui est outrepassée chaque fois que c'est gênant ne fournit aucune véritable valeur de prise de décision.

## Modèle de maturité

- **Niveau 1, Initiation :** Les cibles de fiabilité sont implicites ou aspirationnelles, sans SLO, SLI, ou budget d'erreur formels définis.
- **Niveau 2, Développement :** Certains services ont un SLO informel, mais les SLI pourraient ne pas refléter l'expérience utilisateur authentique et il n'y a pas de politique d'épuisement prédéterminée.
- **Niveau 3, Standardisation :** Des SLO fondés sur des preuves avec des SLI d'expérience utilisateur authentiques et une politique d'épuisement de budget d'erreur prédéterminée sont établis de manière cohérente à travers les services critiques.
- **Niveau 4, Gestion :** Les budgets d'erreur sont activement et délibérément dépensés sur la prise de risque calculée, et les SLO sont revus et révisés à une cadence régulière et fondée sur des preuves.
- **Niveau 5, Orchestration :** Les SLO et budgets d'erreur sont intégrés à l'échelle de l'organisation comme le mécanisme partagé et objectif pour équilibrer vélocité et stabilité, et l'organisation peut pointer vers des décisions spécifiques que le cadre a permises qu'une négociation non fondée n'aurait pas résolues aussi efficacement.

## Idées pour la discussion

1. Notre SLO actuel est-il ancré dans des preuves, ou dans l'aspiration ?
2. Avons-nous une réponse prédéterminée à l'épuisement du budget d'erreur que nous honorerions réellement sous pression ?
3. Quand avons-nous dépensé délibérément pour la dernière fois un budget d'erreur sain sur un risque calculé ?
4. Nos SLI mesurent-ils l'expérience utilisateur authentique ou des contrôles de santé interne pratiques ?
5. Que nous coûterait-il de monter notre SLO d'un « neuf » supplémentaire, et ce coût serait-il justifié ?

## Points clés à retenir

- Un **indicateur de niveau de service (SLI)** mesure l'expérience utilisateur authentique ; un **objectif de niveau de service (SLO)** est sa cible fondée sur des preuves ; un **budget d'erreur** est le manque autorisé délibérément dépensable.
- **Une fiabilité de 100 % est habituellement la mauvaise cible** ; ancrez votre SLO dans ce que les utilisateurs remarquent réellement et ce que chaque incrément supplémentaire coûte authentiquement.
- Traitez le budget d'erreur comme une **ressource dépensable avec une réponse d'épuisement prédéterminée**, éliminant le besoin de relitiger vélocité-contre-stabilité sous pression à chaque fois.
- Mesurez les SLI depuis l'**expérience utilisateur authentique**, pas seulement des contrôles de santé interne pratiques.
- **Revoyez et révisez les SLO périodiquement**, basé sur des preuves, puisqu'une cible obsolète perd son utilité à mesure que le système et ses utilisateurs changent.

## Sources et lectures complémentaires

- *Site Reliability Engineering: How Google Runs Production Systems*, par Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds. (le texte fondateur définissant les SLI, SLO, et budgets d'erreur).
- *The Site Reliability Workbook*, par Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, and Stephen Thorne, eds. (conseils pratiques sur la mise en œuvre des SLO et budgets d'erreur).
- *Implementing Service Level Objectives*, par Alex Hidalgo (un guide complet et orienté praticien pour concevoir et opérationnaliser les SLO).
- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble, and Gene Kim (la relation entre la pratique de fiabilité et la performance de livraison).
