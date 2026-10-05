# 3.1 Le cadre SPACE

## Vue d'ensemble et motivation

Le [cadre SPACE](https://queue.acm.org/detail.cfm?id=3454124), publié en 2021 par les chercheurs Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck et Jenna Butler, a été construit pour répondre à un problème spécifique : les métriques de [productivité du développeur](https://en.wikipedia.org/wiki/Productivity) à chiffre unique, lignes de code, nombre de commits, points d'histoire, sont trivialement manipulables et induisent en erreur routinement. SPACE propose à la place de mesurer à travers cinq dimensions : **satisfaction et bien-être**, **performance**, **activité**, **communication et collaboration**, et **efficacité et flux**. Aucune lettre unique n'est censée se tenir seule ; la contribution réelle du cadre est la discipline de garder les cinq en vue ensemble, pour qu'une équipe ne puisse pas avoir l'air productive sur un axe tout en endommageant tranquillement un autre.

Cela importe parce que la productivité du développeur n'est pas une seule chose. Une équipe peut être hautement active (beaucoup de commits, beaucoup de demandes de tirage) tout en performant mal (le travail ne fait pas bouger les résultats qui comptent). Une équipe peut bien performer à court terme pendant que la satisfaction s'effondre, un indicateur avancé de l'attrition et de l'effondrement de qualité qui apparaît des mois plus tard. La perspicacité de SPACE, s'appuyant directement sur les chapitres 1.2 et 1.3 de ce livre, est que n'importe laquelle de ces dimensions, poursuivie comme une cible autonome, sera manipulée au détriment des autres, et le cadre existe spécifiquement pour rendre ce compromis visible avant qu'il ne cause un vrai dommage.

Pour les grandes équipes, SPACE donne à la direction un vocabulaire partagé pour une conversation qui autrement passerait par défaut à quelle que soit la dimension la plus facile à mesurer, presque toujours l'activité. Les organisations d'entreprise comparant la productivité à travers de nombreuses équipes ont besoin d'un cadre qui résiste à l'attrait de compter les commits ; les organisations gouvernementales faisant face à une pression de recrutement et de rétention dans un marché du travail compétitif ont besoin de données de satisfaction et de bien-être aussi sérieusement qu'elles ont besoin de données de livraison, parce que perdre un ingénieur expérimenté à cause de l'épuisement professionnel coûte bien plus que toute production d'un seul sprint n'a jamais économisé.

## Principes clés

- **Aucune dimension SPACE unique n'est fiable isolément.** La valeur du cadre vient spécifiquement de mesurer plusieurs ensemble.
- **Au moins une métrique d'au moins trois dimensions, mélangeant des sources subjectives et objectives, est le minimum pour une image équilibrée.** Un ensemble de métriques tiré entièrement d'une dimension ou d'un type de données n'utilise pas vraiment SPACE.
- **L'activité est la dimension la plus sujette à mauvais usage comme représentant autonome.** C'est la plus facile à mesurer et la moins représentative de la valeur réelle seule.
- **La mesure au niveau de l'équipe et au niveau individuel nécessite un traitement différent.** SPACE a été conçu principalement pour la perspicacité au niveau de l'équipe et du système, pas pour des fiches d'évaluation individuelles.
- **Les cinq dimensions interagissent.** Un changement qui en améliore une peut en dégrader une autre, et le cadre existe pour attraper ce compromis.

## Recommandations

### Construisez votre ensemble de métriques à partir d'au moins trois dimensions avant de lui faire confiance

N'adoptez pas SPACE en choisissant une seule dimension favorite, généralement l'activité ou la performance, et en appelant cela terminé. Sélectionnez délibérément au moins une métrique d'au moins trois des cinq dimensions, mélangeant l'instrumentation objective (chapitre 1.5) avec des données de sondage subjectives (chapitre 3.7), avant de présenter toute conclusion sur la productivité d'équipe. Cette composition minimale est ce qui empêche SPACE de s'effondrer de nouveau dans le problème de représentant unique qu'il a été conçu pour résoudre.

### Traitez les métriques d'activité comme contexte, jamais comme le titre

Les comptes de commits, les lignes de code, et les comptes de demandes de tirage sont des données légitimes de la dimension activité de SPACE, mais elles ne devraient jamais être la métrique primaire ou unique présentée à propos de la productivité d'une équipe. Utilisez les données d'activité pour fournir un contexte aux autres dimensions, par exemple remarquer qu'une baisse d'activité a coïncidé avec une hausse de satisfaction parce que l'équipe a enfin eu de la place pour rembourser la dette technique, plutôt que comme un verdict indépendant. Le chapitre 3.4 couvre les risques spécifiques de cette dimension en profondeur.

### Appliquez SPACE au niveau de l'équipe et du système, pas au niveau individuel

La recherche originale de SPACE et son adoption industrielle subséquente traitent toutes deux le cadre comme un objectif pour comprendre la productivité d'équipe et organisationnelle, pas comme une fiche d'évaluation de performance individuelle. Appliquer les dimensions SPACE pour classer des individus, particulièrement la dimension activité, recrée exactement le risque de manipulation contre lequel met en garde le chapitre 1.2 et applique mal un cadre jamais validé pour cet usage.

### Surveillez les compromis entre dimensions, pas seulement le mouvement au sein d'une seule

Le vrai pouvoir diagnostique du cadre vient de l'observation de comment les dimensions bougent les unes par rapport aux autres. Une métrique de performance en hausse aux côtés d'une satisfaction en baisse est un signal d'alerte valant la peine d'être investigué immédiatement, indiquant potentiellement un rythme non durable. Une métrique d'activité en hausse aux côtés d'une performance plate ou en baisse suggère du travail d'occupation plutôt qu'un progrès authentique. Revoyez les cinq dimensions ensemble à cadence fixe spécifiquement pour attraper ces schémas inter-dimensionnels, pas seulement pour vérifier chaque chiffre isolément.

### Mélangez les cadences de manière appropriée à travers les dimensions

Certaines dimensions SPACE changent lentement et sont mieux mesurées périodiquement (satisfaction, typiquement des cycles de sondage trimestriels) ; d'autres changent rapidement et bénéficient d'un suivi plus fréquent et automatisé (activité, efficacité et flux, toutes deux largement instrumentables depuis les systèmes existants). Adaptez votre cadence de mesure au taux de changement naturel de chaque dimension plutôt que de forcer chaque métrique sur le même calendrier de rapport.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Ensemble de métriques à dimension unique (généralement activité) | Simple, peu coûteux, familier | Facilement manipulable, manque le coût humain des pratiques non durables |
| Adoption complète de SPACE à cinq dimensions | Équilibrée, résiste à la manipulation à axe unique, attrape les compromis | Nécessite plus d'instrumentation et d'investissement en sondage |
| Application de SPACE au niveau de l'équipe | Correspond à l'usage validé du cadre, protège les individus d'une mauvaise application | Ne peut pas répondre aux questions au niveau individuel que la direction veut parfois |
| Application de SPACE au niveau individuel | Semble plus directement actionnable pour certains managers | Applique mal le cadre ; fort risque de manipulation et de moral |

La tension centrale est **exhaustivité de mesure contre coût et complexité**. Une implémentation complète et équilibrée de SPACE nécessite plus d'instrumentation, plus d'effort de conception de sondage, et plus de discipline pour revoir les cinq dimensions ensemble qu'un simple tableau de bord d'activité. Résolvez la tension en commençant avec un ensemble authentiquement minimal mais équilibré, au moins une métrique d'au moins trois dimensions, plutôt que de soit sauter entièrement la discipline du cadre, soit tenter une version accablante et entièrement instrumentée des cinq dimensions dès le premier jour.

## Questions à discuter avec votre équipe

1. **Notre ensemble actuel de métriques de productivité tire-t-il d'au moins trois dimensions SPACE, ou est-il dominé par les seules données d'activité ?** Auditez votre tableau de bord contre les cinq dimensions explicitement ; la plupart des organisations, honnêtement évaluées, sont bien plus chargées en activité qu'elles ne le réalisent.

2. **Avons-nous déjà vu une dimension SPACE s'améliorer pendant qu'une autre se dégradait tranquillement, et l'avons-nous remarqué à l'époque ?** Ce compromis inter-dimensionnel est exactement ce que le cadre est conçu pour attraper. Regardez en arrière sur la dernière année pour une période où les métriques de livraison se sont améliorées et demandez ce que montraient les données de satisfaction ou de bien-être pendant la même fenêtre.

3. **Les données SPACE sont-elles jamais utilisées, même informellement, pour évaluer ou comparer des individus plutôt que des équipes ?** Cela applique mal le cadre et invite la manipulation. Soyez honnêtes sur comment ces métriques sont réellement discutées en pratique, pas seulement comment la politique énonce qu'elles devraient être utilisées.

4. **Comment remarquerions-nous si une équipe améliorait ses métriques de performance au coût d'un rythme non durable ?** Sans données de satisfaction et de bien-être revues aux côtés des données de performance, ce genre de compromis est invisible jusqu'à ce qu'il émerge comme attrition ou effondrement de qualité des mois plus tard.

5. **Quelle est notre cadence de mesure pour chacune des cinq dimensions, et correspond-elle à la vitesse à laquelle chaque dimension change réellement ?** Un sondage de satisfaction trimestriel jumelé avec des données d'activité en temps réel est une inadéquation de cadence raisonnable ; la même cadence appliquée aux cinq sans réflexion ne l'est pas.

6. **Si un nouveau manager d'ingénierie rejoignait demain et ne regardait que notre tableau de bord, obtiendrait-il une image équilibrée de la productivité d'équipe, ou une image biaisée ?** C'est un test pratique de si votre ensemble de métriques a réellement atteint l'équilibre de SPACE, ou s'il fait seulement un geste vers le cadre tout en restant dominé par l'activité en pratique.

## Regard sectoriel

**Startup.** Une implémentation complète à cinq dimensions est généralement excessive pour une poignée d'ingénieurs qui se parlent quotidiennement et peuvent sentir directement la santé de la satisfaction et de la collaboration. La seule habitude valant la peine d'être adoptée tôt est de résister à l'attrait des métriques uniquement d'activité à mesure que l'équipe commence à grandir au-delà de la taille où la conscience informelle couvre tout.

**Petite entreprise.** Sans fonction d'analytique des personnes dédiée, gardez cela simple : jumelez quelles que soient les données de livraison que vous avez déjà (chapitre 2.10) avec un contrôle court, informel et régulier sur la satisfaction, même un simple sondage pouls à une question. Ce jumelage minimal capture déjà la discipline centrale du cadre bien mieux qu'un tableau de bord uniquement d'activité.

**Grande entreprise.** C'est ici que le cadre complet se rentabilise de sa complexité. Standardisez un ensemble de métriques SPACE équilibré à travers les équipes pour que la direction puisse comparer la productivité équitablement plutôt que de passer par défaut à quelle que soit l'équipe ayant le graphique de commits le plus impressionnant, et investissez dans l'infrastructure de sondage que couvre le chapitre 3.7 pour rendre les données de satisfaction et de collaboration aussi fiables que l'instrumentation objective.

**Gouvernement.** La pression de recrutement et de rétention, surtout là où la rémunération du secteur public ne peut pas toujours concurrencer les offres du secteur privé, fait des données de satisfaction et de bien-être une préoccupation authentiquement stratégique, pas un ajout accessoire. Traitez SPACE aussi sérieusement que les métriques de livraison dans la planification des effectifs et la justification budgétaire, puisque le coût de perdre un ingénieur expérimenté à cause de l'épuisement professionnel se mesure en mois de savoir institutionnel qu'un remplaçant ne peut pas immédiatement fournir.

## Exemples

**Grande entreprise.** La direction d'ingénierie d'une entreprise de logiciels avait suivi les comptes de commits et les points d'histoire complétés comme son signal de productivité primaire pendant des années. Après avoir adopté un ensemble de métriques SPACE plus complet, incluant un sondage de satisfaction trimestriel et une analyse de réseau de collaboration (chapitre 3.5), la direction a découvert que l'équipe avec les chiffres d'activité les plus élevés avait aussi les scores de satisfaction les plus bas et le taux d'attrition volontaire le plus élevé l'année suivante. Les chiffres d'activité seuls avaient été activement trompeurs ; l'image plus complète a mené à une réduction délibérée de la charge de travail concurrente de cette équipe (le principe de WIP du chapitre 2.5 appliqué au niveau humain) et une récupération mesurable à la fois de la satisfaction et, éventuellement, d'une performance durable.

**Gouvernement.** Une agence nationale de services numériques, concurrençant pour des talents d'ingénierie contre des salaires du secteur privé qu'elle ne pouvait pas égaler, a adopté un ensemble de métriques SPACE équilibré spécifiquement pour plaider en faveur d'investissements de rétention non monétaires : meilleur outillage, temps de concentration protégé, et friction de processus réduite. Les données de sondage de satisfaction combinées avec les métriques d'efficacité et de flux (chapitre 3.6) ont montré que la fréquence d'interruption, pas la compensation, était le prédicteur le plus fort de l'intention de partir dans les données d'entretiens de départ. L'investissement subséquent de l'agence dans une politique de temps de concentration protégé, justifiée directement par ces données SPACE, a corrélé avec une amélioration mesurable de la rétention sur les dix-huit mois suivants.

## Argumentaire économique : motivations, ROI et TCO

Le retour de l'adoption complète de SPACE est l'attrition évitée et l'effondrement de qualité motivé par l'épuisement professionnel évité, tous deux bien plus coûteux que le coût d'instrumentation du cadre. Un ensemble de métriques uniquement d'activité peut avoir l'air excellent pendant un an ou deux jusqu'à ce que le coût humain rattrape d'un coup, moment auquel le coût de remplacer l'expertise perdue et de reconstruire la santé d'équipe éclipse tout gain de productivité que l'ensemble étroit de métriques semblait jamais montrer.

Le coût total de possession inclut l'infrastructure de sondage (chapitre 3.7) et la discipline de revoir les cinq dimensions ensemble plutôt que de passer par défaut à quelle que soit la plus facile. Ce coût vaut authentiquement la peine d'être payé : l'exemple d'entreprise ci-dessus montre un schéma réel et découvrable, une activité élevée masquant un risque d'attrition élevé, qu'un ensemble de métriques plus étroit n'aurait jamais fait émerger avant que le dommage ne soit déjà fait.

## Antipatrons et pièges

- **Adopter SPACE de nom seulement tout en restant dominé par l'activité en pratique :** le mode d'échec le plus commun, et il défait tout le but du cadre.
- **Appliquer les dimensions SPACE à des fiches d'évaluation individuelles :** applique mal un cadre validé pour la perspicacité au niveau de l'équipe et du système.
- **Revoir les dimensions isolément plutôt que surveiller les compromis inter-dimensionnels :** manque le schéma que SPACE est spécifiquement conçu pour attraper.
- **Forcer chaque dimension sur la même cadence de mesure :** gaspille l'effort sur des dimensions qui changent lentement et sous-mesure celles qui changent rapidement.
- **Traiter un seul score de sondage de satisfaction comme suffisant sans données objectives :** perd l'équilibre entre sources subjectives et objectives que demande le cadre.
- **Ignorer une tendance s'aggravant dans une dimension parce qu'une autre a l'air bien :** exactement l'échec que la discipline inter-dimensionnelle du cadre existe pour prévenir.

## Modèle de maturité

- **Niveau 1, Initiation :** La productivité est mesurée à travers les seules métriques d'activité, sans données de satisfaction, de collaboration, ou d'efficacité collectées.
- **Niveau 2, Développement :** Certaines dimensions supplémentaires sont mesurées informellement, mais il n'y a pas de revue inter-dimensionnelle cohérente ni de standard de composition minimale.
- **Niveau 3, Standardisation :** Un ensemble de métriques équilibré tirant d'au moins trois dimensions SPACE est appliqué de manière cohérente au niveau de l'équipe à l'échelle de l'organisation.
- **Niveau 4, Gestion :** Les cinq dimensions sont revues ensemble à cadence régulière, les compromis inter-dimensionnels sont activement investigués, et le cadre informe de vraies décisions de dotation et de processus.
- **Niveau 5, Orchestration :** Les données SPACE façonnent directement la planification des effectifs et l'investissement de rétention, et l'organisation peut pointer vers des interventions spécifiques, informées par des schémas inter-dimensionnels, qui ont amélioré de manière mesurable à la fois la livraison et le bien-être du développeur ensemble.

## Idées de discussion

1. Quelle dimension SPACE est la plus sous-mesurée dans notre ensemble actuel de métriques ?
2. Avons-nous déjà vu l'activité d'une équipe augmenter pendant que la satisfaction baissait tranquillement ?
3. Comment attraperions-nous aujourd'hui une équipe échangeant la durabilité à long terme contre la production à court terme ?
4. Des données adjacentes à SPACE sont-elles actuellement utilisées pour évaluer des individus plutôt que des équipes ?
5. À quoi ressemblerait concrètement pour nous un tableau de bord de productivité authentiquement équilibré ?

## Points clés à retenir

- SPACE couvre cinq dimensions, **satisfaction et bien-être, performance, activité, communication et collaboration, et efficacité et flux**, et aucune n'est fiable seule.
- Construisez un ensemble de métriques à partir d'**au moins trois dimensions**, mélangeant des sources de données objectives et subjectives.
- Traitez les **métriques d'activité comme contexte**, jamais comme le signal de productivité titre (chapitre 3.4).
- Appliquez SPACE au **niveau de l'équipe et du système**, pas comme fiche d'évaluation individuelle.
- Revoyez les dimensions ensemble, surveillant les **compromis inter-dimensionnels**, pas seulement le mouvement au sein d'une seule.

## Sources et lectures complémentaires

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021) : l'article original du cadre SPACE.
- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble et Gene Kim (le fondement de recherche partagé avec les métriques DORA).
- *Peopleware: Productive Projects and Teams*, par Tom DeMarco et Timothy Lister (l'argument classique pour traiter la productivité du développeur comme une question humaine, pas purement mécanique).
- *Drive: The Surprising Truth About What Motivates Us*, par Daniel H. Pink (recherche sur la motivation pertinente pour la mesure de la satisfaction et du bien-être).
