# 8.2 Paysage d'outillage : construire contre acheter

## Vue d'ensemble et motivation

Chaque organisation mettant en œuvre les conseils de ce livre fait finalement face à une décision d'infrastructure pratique : construire l'outillage de métriques en interne, acheter une plateforme d'analytique d'ingénierie commerciale, ou, plus communément en pratique, une combinaison des deux. Ce chapitre traite cette décision avec la même rigueur que le chapitre 5.5 applique à tout autre investissement d'ingénierie : une analyse coût-bénéfice honnête spécifique à l'échelle de votre organisation, les sources de données existantes, et les métriques spécifiques de ce livre que vous avez réellement l'intention de suivre, plutôt qu'une réponse par défaut qui s'applique uniformément indépendamment du contexte.

Le marché d'outillage d'analytique d'ingénierie commercial a considérablement mûri, et de nombreuses plateformes offrent maintenant une instrumentation solide et largement automatisée pour les métriques DORA (Partie 2), les données de demande de tirage et de revue (chapitre 2.9), et de plus en plus, une infrastructure d'enquête d'expérience développeur (chapitre 3.7). Cette maturité a déplacé le calcul pour de nombreuses organisations vers l'achat au moins de la couche fondamentale, mais cela n'a pas éliminé les véritables avantages de l'option de construction pour des besoins spécifiques et personnalisés, particulièrement autour de la télémétrie de résultat que le chapitre 7.4 argumente être maintenant le centre nécessaire d'un programme de métriques, qui est fréquemment la catégorie de mesure la moins standardisée et la plus spécifique à l'organisation que ce livre couvre.

Pour les grandes équipes, cette décision a de véritables conséquences budgétaires et de capacité d'ingénierie continues. Les organisations de grande entreprise ont souvent besoin d'intégrer l'outillage de métriques à travers un paysage authentiquement hétérogène de systèmes hérités et modernes, ce qui façonne significativement le calcul construire-contre-acheter ; les organisations de gouvernement font fréquemment face à des contraintes d'approvisionnement et des exigences de souveraineté des données ou de sécurité qui affectent matériellement quelles options commerciales sont même viables, inclinant parfois la décision vers la construction ou vers un ensemble spécifique de fournisseurs vérifiés indépendamment de ce qu'une pure analyse coût-bénéfice suggérerait seule.

## Principes clés

- **C'est rarement une décision tout-ou-rien.** La plupart des programmes de métriques matures combinent l'outillage acheté pour les métriques bien standardisées avec l'outillage construit pour la télémétrie de résultat spécifique à l'organisation.
- **Achetez pour les métriques bien standardisées et largement nécessaires ; construisez pour celles authentiquement spécifiques à l'organisation.** Les métriques DORA et l'analytique de demande de tirage sont un territoire de produit standard ; votre corrélation de résultat d'affaires spécifique (chapitre 5.3) ne l'est habituellement pas.
- **La propriété et la portabilité des données comptent autant que la comparaison de fonctionnalités.** Un outil qui verrouille vos données de métriques est un risque durable, pas seulement un inconvénient.
- **Le coût d'intégration est fréquemment sous-estimé** dans une analyse construire-contre-acheter, pour les deux options.
- **Les contraintes d'approvisionnement, de sécurité, et de souveraineté des données peuvent outrepasser un pur calcul coût-bénéfice,** particulièrement pour les organisations de gouvernement.

## Recommandations

### Achetez pour la couche de produit standard : infrastructure DORA, de revue, et d'enquête

Pour les familles de métriques avec un outillage commercial mature et largement disponible, instrumentation de métriques DORA (Partie 2), analytique de demande de tirage et de revue de code (chapitre 2.9), et plateformes d'enquête d'expérience développeur (chapitre 3.7), acheter est habituellement le meilleur choix économique pour la plupart des organisations en dessous d'une certaine échelle, puisque construire une infrastructure équivalente duplique un effort d'ingénierie que de nombreux fournisseurs ont déjà lourdement investi, avec une différenciation authentique limitée disponible en construisant votre propre version.

### Construisez pour la télémétrie de résultat authentiquement spécifique à l'organisation

Pour les métriques de résultat dont le chapitre 7.4 argumente qu'elles devraient être le centre de gravité de votre programme de métriques, corrélation de résultat d'affaires (chapitre 5.3), adoption de fonctionnalités liée à votre produit spécifique (chapitre 5.2), unité économique liée à votre structure de coût spécifique (chapitre 5.4), l'outillage commercial est bien moins standardisé et souvent ne peut pas capturer la logique d'affaires et le modèle de données spécifiques de votre organisation sans une personnalisation extensive et coûteuse qui pourrait finir par coûter plus que de construire la capacité équivalente en interne avec un contrôle complet sur le résultat.

### Évaluez la propriété et la portabilité des données avant de vous engager avec un fournisseur

Avant de signer un contrat commercial, confirmez que vous pouvez exporter l'intégralité de vos données de métriques historiques dans un format utilisable et standard, et comprenez ce qui arrive à ces données et leur historique si vous changez de fournisseur ou arrêtez le service. Une relation fournisseur qui devient difficile à quitter en raison d'un [verrouillage](https://en.wikipedia.org/wiki/Vendor_lock-in) de données est un risque organisationnel durable, pas simplement un inconvénient, et cette évaluation mérite le même sérieux que tout autre engagement d'infrastructure significatif et pluriannuel.

### Budgétez réalistement pour le coût d'intégration des deux côtés de la décision

Que vous construisiez ou achetiez, le coût d'intégration, connecter l'outil à votre contrôle de version réel, votre IC/DC, suivi d'incident, et systèmes d'affaires, est fréquemment sous-estimé dans la planification initiale pour l'un ou l'autre chemin. Budgétez explicitement pour cet effort d'intégration comme une ligne distincte et significative dans votre analyse construire-contre-acheter, plutôt que de supposer qu'un outil commercial fonctionnera dès la sortie de la boîte avec une configuration minimale, ou qu'un coût d'intégration de solution maison est un ajout mineur à son coût de développement.

### Prenez en compte les contraintes d'approvisionnement, de sécurité, et de souveraineté explicitement et tôt

Pour les organisations de gouvernement et d'entreprise réglementées, les exigences de souveraineté des données, les besoins de certification de sécurité, et les processus d'approvisionnement peuvent matériellement restreindre ou éliminer certaines options commerciales indépendamment de leur qualité de fonctionnalités, inclinant parfois la décision vers la construction ou vers un ensemble plus petit de fournisseurs spécifiquement vérifiés. Identifiez ces contraintes explicitement et tôt dans le processus d'évaluation, plutôt que de les découvrir seulement après qu'un effort d'évaluation significatif soit déjà allé vers une option qui s'avère non viable pour des raisons non liées à sa capacité réelle.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Acheter l'outillage commercial | Rapide à déployer, ensemble de fonctionnalités mature, maintenu par le fournisseur | Moins personnalisable pour les métriques de résultat spécifiques à l'organisation ; verrouillage potentiel |
| Construire l'outillage interne | Entièrement personnalisé, propriété et contrôle complets des données | Investissement d'ingénierie significatif et continu ; duplique l'effort pour les métriques standard |
| Hybride : acheter la couche standard, construire la couche de résultat | Équilibre l'efficacité de coût avec une personnalisation authentique là où elle compte le plus | Nécessite un travail d'intégration pour connecter cohéremment les composants achetés et construits |
| Tout acheter, y compris la télémétrie de résultat, via une personnalisation de fournisseur extensive | Relation fournisseur unique, approvisionnement potentiellement plus simple | Peut devenir aussi coûteux que de construire, avec moins de contrôle ultime sur le résultat |

La tension centrale est **le besoin de personnalisation contre le coût de développement**. Les métriques qui bénéficient le plus de la personnalisation, la télémétrie de résultat liée spécifiquement à votre entreprise, sont aussi les plus coûteuses à bien construire ; les métriques les moins chères à acheter, les analytiques DORA et de revue, sont aussi celles où la personnalisation authentique compte le moins. Résolvez la tension en faisant correspondre la décision à ce schéma directement : achetez là où la standardisation vous sert bien, construisez là où votre contexte spécifique le nécessite authentiquement, et budgétez réalistement le coût d'intégration des deux côtés de cette division.

## Questions à discuter avec votre équipe

1. **Pour chaque famille de métriques que ce livre couvre, bénéficierions-nous authentiquement d'une personnalisation, ou un outil commercial standardisé nous servirait-il tout aussi bien ?** Parcourez les Parties 2 à 6 explicitement et triez chaque famille de métriques dans une colonne acheter ou construire basée sur ce test spécifique.

2. **Avons-nous évalué les options d'export et de portabilité de données de notre fournisseur actuel ou prospectif, ou supposons-nous que nous pourrions partir facilement si nous en avions besoin ?** Vérifiez cela directement plutôt que de supposer ; le verrouillage de données est souvent découvert seulement quand une organisation essaie réellement de changer.

3. **Notre analyse construire-contre-acheter originale a-t-elle pris en compte réalistement le coût d'intégration, ou s'est-elle concentrée principalement sur les frais de licence contre les heures de développement ?** Revisitez une décision d'outillage récente et vérifiez si le coût d'intégration a été authentiquement estimé ou significativement sous-estimé.

4. **Faisons-nous face à des contraintes d'approvisionnement, de sécurité, ou de souveraineté des données qui élimineraient certaines options commerciales indépendamment de leur qualité de fonctionnalités ?** Identifiez ces contraintes explicitement avant, pas après, d'investir un effort d'évaluation significatif dans des options qui pourraient s'avérer non viables.

5. **Notre paysage d'outillage actuel est-il un hybride délibéré, faisant correspondre construction et achat à où chacun a du sens, ou s'est-il accumulé par des décisions ad hoc et individuellement raisonnables dans le temps ?** Soyez honnêtes sur quel schéma décrit réellement votre situation actuelle.

6. **Que nous coûterait-il, en effort et en risque, de changer notre fournisseur d'outillage de métriques actuel aujourd'hui si nous en avions besoin ?** Cette question concrète teste votre exposition actuelle réelle au risque de verrouillage de données, au-delà de ce que les termes de contrat du fournisseur promettent nominalement.

## Regard sectoriel

**Startup.** Achetez l'outillage standard par défaut à cette échelle ; construire une infrastructure de métriques personnalisée est rarement un bon usage de la capacité d'ingénierie précoce rare quand des options commerciales matures et peu coûteuses existent pour les métriques DORA et de revue spécifiquement. Réservez tout effort de construction pour la métrique de résultat unique (chapitre 5.3) qui reflète le plus directement la valeur centrale de votre produit.

**Petite entreprise.** La plupart des options d'outillage commercial s'adaptent raisonnablement bien à petite échelle et sont tarifées de manière accessible pour les plus petites organisations ; acheter la couche standard est presque toujours le bon choix, et construire quoi que ce soit de personnalisé est rarement justifié avant que votre organisation n'ait considérablement grandi et développé des besoins authentiquement spécifiques.

**Grande entreprise.** L'approche hybride que ce chapitre recommande gagne sa complexité ici : achetez la couche standard à l'échelle (souvent avec un véritable pouvoir de négociation pour des termes favorables), et investissez délibérément dans la construction de la couche de télémétrie de résultat spécifique à l'organisation, puisque la complexité de votre logique d'affaires et de votre modèle de données à cette échelle dépasse habituellement ce qu'un outillage commercial générique peut accommoder sans une personnalisation extensive et coûteuse.

**Gouvernement.** Les processus d'approvisionnement, les exigences de certification de sécurité, et les contraintes de souveraineté des données dominent fréquemment cette décision plus qu'une pure comparaison de fonctionnalités ou de coût ne le suggérerait. Engagez les parties prenantes d'approvisionnement et de sécurité tôt dans le processus d'évaluation, et soyez préparés à ce que l'option de construction soit authentiquement plus attrayante ici que dans un contexte comparable du secteur privé, spécifiquement en raison de ces contraintes plutôt que parce que construire est intrinsèquement meilleur.

## Exemples

**Grande entreprise.** Une entreprise de logiciels a initialement tenté de construire une plateforme de métriques entièrement personnalisée couvrant chaque famille de métriques de la Partie 2 à la Partie 6, un effort pluriannuel qui a consommé une capacité d'ingénierie significative et traînait encore derrière les offres commerciales matures pour les métriques DORA et de revue standardisées spécifiquement. Une stratégie révisée a adopté une plateforme commerciale pour ces métriques standard, libérant l'équipe de plateforme interne pour se concentrer exclusivement sur la construction de la corrélation de résultat d'affaires et de la télémétrie d'unité économique (chapitres 5.3, 5.4) authentiquement spécifiques au modèle d'affaires de l'entreprise, qu'aucun outil commercial n'aurait pu fournir dès la sortie de la boîte. Cette approche hybride a livré un programme de métriques plus complet et plus authentiquement utile en une seule année que ce que la stratégie tout-construire avait atteint en deux.

**Gouvernement.** L'évaluation initiale d'une agence fédérale des plateformes d'analytique d'ingénierie commerciales a trouvé qu'aucun des fournisseurs disponibles ne pouvait satisfaire les exigences de souveraineté des données de l'agence, qui mandataient que toutes les données de métriques d'ingénierie restent dans des centres de données gouvernementaux certifiés spécifiques. Plutôt que d'abandonner entièrement l'option d'achat, l'agence a identifié un sous-ensemble plus petit de fournisseurs offrant des options de déploiement cloud souverain certifié par le gouvernement, à une prime de coût modeste par rapport à la tarification commerciale standard, et a déployé avec succès un programme hybride : outillage acheté pour la couche de métriques standard dans la limite de souveraineté requise, et outillage interne construit pour les besoins de télémétrie de résultat citoyen spécifiques de l'agence, qu'aucun fournisseur commercial disponible n'adressait indépendamment des considérations de souveraineté.

## Argumentaire économique : motivations, ROI et TCO

Le retour d'une stratégie construire-contre-acheter hybride et délibérée est d'éviter les deux modes de défaillance que les exemples de ce chapitre illustrent : l'investissement d'ingénierie gaspillé et pluriannuel de construire une capacité standard qui existe déjà à bon marché sur le marché, et la frustration et le coût de personnalisation éventuel de forcer un besoin authentiquement spécifique à l'organisation dans un outil commercial mal adapté. L'exemple de grande entreprise ci-dessus le montre concrètement : l'approche hybride a livré plus de valeur authentique en une année que ce que la stratégie tout-construire avait livré en deux.

Le coût total de possession pour l'un ou l'autre chemin inclut le coût d'intégration, souvent sous-estimé, et, pour l'outillage acheté spécifiquement, le coût de risque continu de verrouillage fournisseur potentiel sauf si la portabilité des données est confirmée et protégée contractuellement à l'avance. Budgéter réalistement pour ces deux éléments, plutôt que de se concentrer étroitement sur les frais de licence ou les heures de développement seules, produit une image de coût total bien plus précise pour l'une ou l'autre option.

## Antipatrons et pièges

- **Construire un outillage personnalisé pour des métriques bien standardisées et standard :** duplique un effort d'ingénierie que de nombreux fournisseurs ont déjà lourdement investi.
- **Acheter un outillage commercial pour une télémétrie de résultat authentiquement spécifique à l'organisation sans vérifier l'adéquation d'abord :** risque une personnalisation coûteuse et mal adaptée ou un besoin non satisfait.
- **Aucune évaluation de l'export et de la portabilité des données avant de s'engager avec un fournisseur :** risque un verrouillage durable et coûteux découvert seulement en essayant de partir.
- **Sous-estimer le coût d'intégration de l'un ou l'autre côté de la décision :** produit une comparaison de coût total inexacte et des calendriers irréalistes.
- **Ignorer les contraintes d'approvisionnement, de sécurité, ou de souveraineté jusqu'à tard dans le processus d'évaluation :** gaspille un effort d'évaluation sur des options qui s'avèrent non viables pour des raisons non liées à la capacité.
- **Traiter cela comme une décision unique et tout-ou-rien :** manque l'approche hybride qui correspond le mieux aux besoins réels et mixtes de la plupart des organisations.

## Modèle de maturité

- **Niveau 1, Initiation :** Les décisions d'outillage sont prises ad hoc, sans analyse construire-contre-acheter délibérée ni considération de la portabilité des données.
- **Niveau 2, Développement :** Une certaine analyse se produit, mais le coût d'intégration est routinièrement sous-estimé et l'approche hybride n'est pas délibérément considérée.
- **Niveau 3, Standardisation :** Une stratégie construire-contre-acheter hybride et délibérée fait correspondre les métriques standard à l'outillage acheté et la télémétrie de résultat spécifique à l'organisation à l'outillage construit, de manière cohérente.
- **Niveau 4, Gestion :** La portabilité des données est confirmée et protégée contractuellement pour tout outillage acheté, et les contraintes d'approvisionnement, de sécurité, et de souveraineté sont prises en compte explicitement et tôt.
- **Niveau 5, Orchestration :** Le paysage d'outillage de l'organisation reflète une stratégie hybride mature et délibérée, régulièrement revue à mesure que les offres commerciales et les besoins organisationnels évoluent, avec une valeur démontrée des composants achetés et construits.

## Idées pour la discussion

1. Lesquelles de nos métriques actuelles bénéficieraient le plus d'une personnalisation que nous n'obtenons pas actuellement ?
2. Avons-nous confirmé que nous pourrions exporter l'intégralité de nos données de métriques historiques si nous avions besoin de changer de fournisseur ?
3. Notre dernière décision d'outillage a-t-elle pris en compte réalistement le coût d'intégration ?
4. Quelle contrainte d'approvisionnement, de sécurité, ou de souveraineté pourrions-nous sous-estimer ?
5. À quoi ressemblerait une stratégie hybride délibérée pour notre ensemble de métriques spécifique ?

## Points clés à retenir

- Ce n'est rarement tout-ou-rien ; la plupart des programmes matures **combinent l'outillage acheté pour les métriques standard avec l'outillage construit pour la télémétrie de résultat spécifique à l'organisation**.
- **Achetez pour les métriques standardisées** (DORA, analytique de revue, infrastructure d'enquête) ; **construisez pour la mesure de résultat authentiquement spécifique à l'organisation**.
- Évaluez la **propriété et la portabilité des données** avant de vous engager avec un fournisseur ; le verrouillage est un risque durable, pas seulement un inconvénient.
- **Budgétez réalistement pour le coût d'intégration** des deux côtés de la décision ; il est fréquemment sous-estimé.
- Les **contraintes d'approvisionnement, de sécurité, et de souveraineté** peuvent outrepasser un pur calcul coût-bénéfice, particulièrement pour les organisations de gouvernement.

## Sources et lectures complémentaires

- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble, and Gene Kim (les familles de métriques auxquelles l'analyse construire-contre-acheter de ce chapitre est appliquée).
- *Cloud FinOps*, par J.R. Storment et Mike Fuller (principes d'analyse de coût applicables aux décisions d'investissement d'outillage).
- Le FinOps Framework de la FinOps Foundation, [finops.org](https://www.finops.org/) (conseils de praticien sur l'évaluation et la gestion des coûts d'outillage cloud et SaaS).
- La documentation du U.S. Federal Risk and Authorization Management Program (FedRAMP) : conseils faisant autorité sur les exigences de sécurité et de souveraineté de l'outillage cloud gouvernemental.
