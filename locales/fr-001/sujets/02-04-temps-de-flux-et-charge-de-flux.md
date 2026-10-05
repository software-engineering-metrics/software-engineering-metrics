# 2.4 Temps de flux et charge de flux

## Vue d'ensemble et motivation

Le **temps de flux** est le temps total écoulé depuis qu'un élément de flux (chapitre 2.2) entre dans le flux de valeur jusqu'à sa livraison, mesurant la réactivité à travers tout le chemin depuis l'identification d'un besoin commercial jusqu'à ce qu'un client reçoive de la valeur. La **charge de flux** est le nombre total d'éléments de flux actuellement actifs ou en attente dans le flux de valeur à tout moment, le nom du Flow Framework pour ce que le chapitre 2.5 appelle le travail en cours. Ensemble, ce sont les deux métriques du Flow Framework qui se connectent le plus directement aux mathématiques des files d'attente, parce que la charge de flux ne corrèle pas seulement avec le temps de flux, elle le dicte mathématiquement.

Cette relation est la **[loi de Little](https://en.wikipedia.org/wiki/Little%27s_law)**, une preuve de la théorie des files d'attente (le chapitre 2.7 la couvre en entier) qui énonce que le nombre moyen d'éléments dans un système stable est égal au taux d'arrivée moyen multiplié par le temps moyen que chaque élément passe dans le système. Appliqué ici : la charge de flux est égale au taux d'arrivée multiplié par le temps de flux. C'est le fait unique le plus utile de ce chapitre, parce qu'il transforme un argument qui était autrefois qualitatif, « nous sommes trop surchargés, les choses prennent trop de temps », en un argument démontrable et quantitatif qu'un dirigeant d'entreprise ne peut pas facilement rejeter : si la charge de flux continue d'augmenter pendant que le taux d'arrivée reste plat, le temps de flux est mathématiquement garanti d'augmenter aussi, pas seulement probablement.

Pour les grandes équipes, c'est souvent le chiffre le plus persuasif de tout le cadre. Un dirigeant d'entreprise qui résiste à l'idée de dire non à un nouveau travail, parce que chaque demande semble individuellement justifiée, acceptera souvent que surcharger un flux de valeur ralentit de manière démontrable chaque élément déjà présent, une fois que la charge de flux est suivie et que la relation au temps de flux est montrée directement plutôt qu'argumentée abstraitement. Les organisations d'entreprise jonglant avec de nombreuses initiatives stratégiques concurrentes et les programmes gouvernementaux gérant des dizaines de flux de travail parallèles dépendent tous deux de cette preuve, pas seulement de l'intuition derrière elle, pour justifier de dire non au démarrage de plus de travail à la fois.

## Principes clés

- **La charge de flux dicte mathématiquement le temps de flux, via la loi de Little.** Ce n'est pas une corrélation ; c'est une preuve qui tient pour tout flux de valeur stable.
- **Le temps de flux couvre tout le flux de valeur, pas seulement l'ingénierie.** Il commence quand un besoin commercial est identifié, pas quand l'ingénierie prend le travail en charge, que le temps de cycle du chapitre 2.6 décompose ensuite davantage.
- **Une charge de flux croissante est le signe d'alerte le plus précoce d'un temps de flux croissant.** Parce que la relation est démontrable, la charge de flux peut être surveillée comme un indicateur avancé, pas seulement découverte après que le temps de flux se soit déjà dégradé.
- **Le point d'entrée du flux de valeur doit être fixé et documenté.** Où commence l'horloge du temps de flux est un choix définitionnel exposé au même risque de manipulation que toute autre limite de métrique dans ce livre.
- **Un dirigeant d'entreprise peut agir directement sur la charge de flux.** Contrairement au temps de flux, qui est une mesure retardée, la charge de flux est un levier : dire non au démarrage d'un nouveau travail est une action disponible aujourd'hui.

## Recommandations

### Fixez et documentez le point d'entrée du flux de valeur avant de mesurer le temps de flux

Décidez explicitement si le temps de flux commence quand un besoin commercial est d'abord identifié, quand il est formellement approuvé, ou quand l'ingénierie commence le travail, et documentez ce choix de la même manière que le chapitre 1.4 le recommande pour toute charte de métriques. Cette décision unique détermine si le temps de flux mesure une réactivité authentique de bout en bout ou seulement la tranche plus étroite qu'en contrôle l'ingénierie, et changer la définition plus tard sans divulgation est le risque de manipulation central de ce chapitre.

### Suivez la charge de flux en continu, pas périodiquement

Parce que la charge de flux est un indicateur avancé, via la loi de Little, du temps de flux encore à venir, suivez-la comme un chiffre vivant, continuellement mis à jour plutôt qu'un instantané périodique. Une charge de flux ayant déjà grimpé pendant des semaines au moment où quelqu'un la vérifie a déjà tranquillement étendu le temps de flux pendant tout aussi longtemps, invisiblement, avant que la métrique ne rattrape.

### Utilisez explicitement la loi de Little en argumentant pour une limite de travail en cours ou une augmentation de capacité

En plaidant pour démarrer moins de travail concurrent, ou pour ajouter de la capacité, présentez l'équation réelle, pas seulement la recommandation : la charge de flux est égale au taux d'arrivée multiplié par le temps de flux, donc si le taux d'arrivée est à peu près fixe, réduire la charge de flux est mathématiquement garanti de réduire le temps de flux. C'est un argument substantiellement plus fort pour une partie prenante sceptique qu'une affirmation non quantifiée que « nous sommes trop occupés », parce qu'il est démontrable plutôt qu'affirmé.

### Séparez le temps de flux des causes sous-jacentes de la charge de flux avant de proposer une correction

Quand la charge de flux est élevée, investiguez quel type d'élément de flux (chapitre 2.2) la conduit réellement : trop de fonctionnalités concurrentes démarrées à la fois, un backlog de défauts non adressés, ou un travail de risque bloqué en attente d'une approbation partagée. Chaque cause implique une correction différente, et traiter « la charge de flux est élevée » comme un problème unique et indifférencié tend à produire une réponse générique et inefficace.

### Recoupez le temps de flux avec le temps de cycle pour isoler où le délai se produit réellement

Puisque le temps de flux couvre tout le flux de valeur et que le temps de cycle (chapitre 2.6) ne couvre que la portion d'ingénierie de celui-ci, comparez les deux directement. Un grand écart entre le temps de flux et le temps de cycle signifie que la plupart du délai se produit avant que l'ingénierie ne voie jamais le travail, dans des files d'approbation, des backlogs de priorisation, ou des transferts entre équipes, ce qui pointe vers une correction très différente qu'un écart concentré à l'intérieur de l'ingénierie elle-même.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Mesurer le temps de flux depuis la prise en charge par l'ingénierie seulement | Simple, correspond à l'instrumentation de temps de cycle existante | Manque le délai avant l'ingénierie, sous-estime la vraie réactivité |
| Mesurer le temps de flux depuis l'identification authentique du besoin commercial | Capture la vraie réactivité de bout en bout | Nécessite d'instrumenter des étapes hors du contrôle direct de l'ingénierie |
| Instantanés périodiques de charge de flux | Peu coûteux à calculer occasionnellement | Manque la valeur d'indicateur avancé ; une charge croissante passe inaperçue trop longtemps |
| Suivi continu de la charge de flux | Indicateur avancé vivant et actionnable | Nécessite une intégration d'outillage continue, pas seulement un rapport occasionnel |

La tension centrale est **portée contre portée d'instrumentation**. Mesurer le temps de flux seulement depuis la prise en charge par l'ingénierie est bien plus facile à instrumenter, puisqu'il réutilise les données de temps de cycle que le chapitre 2.6 collecte déjà, mais il sous-estime tranquillement la vraie réactivité en ignorant tout ce qui se passe avant que l'ingénierie ne voie le travail. Résolvez la tension en commençant avec la mesure plus étroite, limitée à l'ingénierie, si c'est tout ce que vous pouvez instrumenter aujourd'hui, mais traitez l'extension du point de départ du temps de flux en amont, dans l'identification du besoin commercial et la priorisation, comme une priorité à court terme plutôt qu'une limitation permanente.

## Questions à discuter avec votre équipe

1. **Où notre horloge de temps de flux commence-t-elle réellement aujourd'hui, et tout le monde dans l'organisation est-il d'accord que c'est le bon point de départ ?** Une inadéquation entre où les parties prenantes supposent que l'horloge commence et où elle commence réellement est une source commune et tranquille de méfiance envers la métrique. Confirmez que la définition documentée correspond à la compréhension partagée.

2. **Avons-nous déjà vérifié si notre charge de flux, taux d'arrivée et temps de flux mesurés satisfont réellement la loi de Little ?** S'ils ne s'équilibrent pas à peu près, l'un des trois chiffres est mesuré de manière incohérente. Parcourez les chiffres réels ensemble plutôt que de supposer que la vérification passerait.

3. **La charge de flux est-elle suivie en continu, ou une hausse régulière passerait-elle inaperçue pendant des semaines avant que quiconque ne vérifie ?** Un indicateur avancé ne vous protège que si quelqu'un le surveille réellement en quasi temps réel, pas seulement en le revoyant dans un rapport trimestriel.

4. **Quand la charge de flux augmente, pouvons-nous dire quel type d'élément de flux la conduit réellement, ou se lit-elle comme un chiffre unique et indifférencié ?** Un diagnostic générique « nous sommes surchargés » produit une réponse générique, souvent inefficace. Vérifiez si votre instrumentation actuelle peut réellement attribuer la charge croissante à une cause spécifique.

5. **Quelle est la taille de l'écart entre notre temps de flux et notre temps de cycle, et cet écart suggère-t-il que la plupart du délai se produit avant ou après que l'ingénierie voie le travail ?** Cette comparaison révèle souvent que la plus grande opportunité d'amélioration se trouve entièrement hors du contrôle propre de l'ingénierie.

6. **Quelqu'un a-t-il déjà tranquillement rétréci notre point de départ de temps de flux pour faire mieux paraître le chiffre, sans que ce changement soit documenté ou divulgué ?** C'est le risque de manipulation central du chapitre énoncé directement. Demandez honnêtement si votre définition a déjà dérivé de cette manière.

## Regard sectoriel

**Startup.** La charge de flux est généralement basse simplement parce qu'il n'y a pas assez de personnes pour démarrer beaucoup de travail simultanément, mais la même relation mathématique s'applique toujours au moment où un fondateur ou un ingénieur principal devient un goulot d'étranglement personnel pour de nombreuses initiatives concurrentes. Suivez la charge de flux informellement même sans outillage dédié, puisque la loi de Little tient indépendamment de l'échelle.

**Petite entreprise.** Une simple liste partagée de tout ce qui est actuellement actif est généralement suffisante pour calculer la charge de flux sans logiciel dédié de gestion de flux de valeur. L'habitude utile est de la vérifier assez régulièrement pour qu'un chiffre croissant soit attrapé tôt, pas découvert seulement une fois que le temps de flux s'est déjà visiblement dégradé.

**Grande entreprise.** C'est ici que la loi de Little se rentabilise comme argument, pas seulement comme métrique : une grande organisation jonglant avec des dizaines d'initiatives stratégiques concurrentes peut utiliser la relation démontrable entre la charge de flux et le temps de flux pour faire un argument basé sur des preuves pour le séquençage du travail, quelque chose qu'un argument purement qualitatif « nous sommes trop occupés » réalise rarement face à une pression déterminée des parties prenantes.

**Gouvernement.** Les programmes pluriannuels accumulent couramment une charge de flux large et implicite à travers de nombreux flux de travail, chacun individuellement justifié, sans visibilité à l'échelle de l'organisation sur le total. Présenter la loi de Little directement, montrant que la propre croissance du temps de flux du programme est mathématiquement expliquée par sa propre charge de flux croissante, est souvent la preuve la plus claire et la plus persuasive disponible pour séquencer les flux de travail plutôt que de les exécuter tous en parallèle indéfiniment.

## Exemples

**Grande entreprise.** L'organisation de plateforme d'une entreprise de technologie médiatique exécutait vingt-deux initiatives stratégiques concurrentes avec une capacité réaliste pour environ douze, une inadéquation que personne n'avait quantifiée jusqu'à ce qu'un nouveau vice-président de l'ingénierie demande la charge de flux directement. Le temps de flux pour l'initiative médiane avait augmenté de 40 % au cours de l'année précédente, une tendance que la direction avait attribuée au fait que « le travail devient plus difficile ». Présenter la loi de Little aux côtés des chiffres réels de charge de flux et de taux d'arrivée a montré que la croissance était entièrement expliquée par la seule charge de flux croissante, sans aucun changement de la difficulté sous-jacente du travail nécessaire pour en rendre compte. L'organisation a séquencé les initiatives jusqu'à une charge de flux durable, et le temps de flux médian a chuté de près d'un tiers en deux trimestres.

**Gouvernement.** Le programme de modernisation d'une agence fédérale de gestion des subventions avait accumulé une charge de flux à travers des dizaines de flux de travail parallèles sans aucun total unique suivi, chaque sponsor de flux de travail croyant que sa propre initiative était adéquatement dotée en ressources isolément. Une analyse du bureau de programme utilisant la loi de Little a montré que le temps de flux agrégé du programme, le temps depuis l'approbation d'un flux de travail jusqu'à sa livraison, pouvait être prédit presque exactement à partir de sa seule charge de flux agrégée, une découverte qui a convaincu des sponsors ayant résisté aux arguments de dépriorisation pendant plus d'un an. Le programme a adopté un plafond explicite de charge de flux, et les nouveaux flux de travail entrent maintenant dans une file plutôt que de démarrer immédiatement indépendamment de la charge actuelle.

## Argumentaire économique : motivations, ROI et TCO

Le retour du suivi conjoint de la charge de flux et du temps de flux est un argument démontrable, pas simplement persuasif, pour séquencer le travail plutôt que d'exécuter tout en parallèle. L'exemple de la technologie médiatique ci-dessus, expliquant toute une régression de temps de flux par la seule charge de flux, est le schéma que cette combinaison produit fiablement : un argument spécifique et quantitatif réussit là où un appel qualitatif à être « trop occupé » avait précédemment échoué face à une vraie pression organisationnelle pour démarrer plus de travail.

Le coût total de possession est faible relativement à son pouvoir persuasif : la charge de flux ne nécessite qu'un compte vivant des éléments actifs et en attente, et le temps de flux nécessite d'instrumenter le point d'entrée du flux de valeur, un travail qui se rentabilise la première fois qu'il empêche une organisation de s'engager dans plus d'initiatives concurrentes que sa capacité réelle ne peut supporter.

## Antipatrons et pièges

- **Rétrécir tranquillement le point de départ du temps de flux pour flatter le chiffre :** le vecteur de manipulation au cœur de ce chapitre. Déplacer le début de l'horloge de l'identification authentique du besoin commercial vers un point plus tardif, prise en charge par l'ingénierie, approbation formelle, réduit le temps de flux sans changer du tout la réactivité authentique, et peut se produire assez graduellement pour qu'aucun changement unique n'ait l'air d'une manipulation délibérée. Le garde-fou est de documenter explicitement le point d'entrée dans une charte de métriques (chapitre 1.4) et de l'auditer périodiquement contre la définition documentée, la même discipline que ce livre demande pour chaque limite de métrique.
- **Mesurer la charge de flux seulement périodiquement :** renonce à sa valeur comme indicateur avancé, puisqu'une hausse régulière peut passer inaperçue pendant des semaines.
- **Traiter la charge de flux comme un chiffre unique et indifférencié :** manque quel type d'élément de flux conduit réellement une surcharge, produisant une réponse générique plutôt que ciblée.
- **Ignorer l'écart entre le temps de flux et le temps de cycle :** manque si le délai est concentré avant ou après l'ingénierie, ce qui implique des corrections très différentes.
- **Argumenter pour réduire le travail concurrent sans présenter explicitement la loi de Little :** un appel qualitatif est bien plus facile à rejeter pour une partie prenante qu'une relation quantitative et démontrable.
- **Supposer que la loi de Little s'applique seulement à grande échelle :** elle tient pour tout système stable indépendamment de la taille, y compris un seul individu surchargé.

## Modèle de maturité

- **Niveau 1, Initiation :** Ni le temps de flux ni la charge de flux ne sont suivis ; le délai est discuté de manière anecdotique sans données à l'appui.
- **Niveau 2, Développement :** Le temps de flux est suivi seulement depuis la prise en charge par l'ingénierie, et la charge de flux est vérifiée périodiquement plutôt que continuellement.
- **Niveau 3, Standardisation :** Le temps de flux est mesuré depuis un point d'entrée de flux de valeur documenté et à l'échelle de l'organisation, et la charge de flux est suivie continuellement comme indicateur avancé.
- **Niveau 4, Gestion :** La loi de Little est utilisée explicitement pour justifier les décisions de capacité et de séquençage, et une charge de flux croissante est attribuée à un type d'élément de flux spécifique avant qu'une correction ne soit proposée.
- **Niveau 5, Orchestration :** L'organisation établit des plafonds explicites de charge de flux à travers ses flux de valeur, et peut pointer vers des décisions de séquençage spécifiques, soutenues par la loi de Little, qui ont amélioré de manière mesurable le temps de flux.

## Idées de discussion

1. Où notre horloge de temps de flux commence-t-elle réellement, et cette définition a-t-elle déjà dérivé sans documentation ?
2. Notre charge de flux, taux d'arrivée et temps de flux mesurés satisfont-ils à peu près la loi de Little ?
3. La charge de flux est-elle suivie assez continuellement pour qu'une hausse régulière soit attrapée en jours, pas en mois ?
4. Quel est l'écart entre notre temps de flux et notre temps de cycle, et que nous dit cet écart sur où le délai se produit réellement ?

## Points clés à retenir

- **La charge de flux dicte mathématiquement le temps de flux**, via la loi de Little : la charge de flux est égale au taux d'arrivée multiplié par le temps de flux, pour tout flux de valeur stable.
- **Le temps de flux couvre tout le flux de valeur**, depuis l'identification du besoin commercial jusqu'à la livraison, plus large que la portée limitée à l'ingénierie du temps de cycle (chapitre 2.6).
- Le vecteur de manipulation central du chapitre est **rétrécir tranquillement le point de départ du temps de flux** ; le garde-fou est une définition de point d'entrée documentée et auditée.
- **Suivez la charge de flux en continu**, pas périodiquement, pour qu'elle fonctionne comme un véritable indicateur avancé plutôt qu'une découverte retardée.
- Utilisez la loi de Little **explicitement**, pas seulement comme intuition, en argumentant pour une limite de travail en cours, une augmentation de capacité, ou le séquençage de travail concurrent.

## Sources et lectures complémentaires

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
