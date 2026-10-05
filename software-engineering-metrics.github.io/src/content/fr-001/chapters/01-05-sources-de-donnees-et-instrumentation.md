# 1.5 Sources de données et instrumentation

## Vue d'ensemble et motivation

Une métrique n'est fiable qu'autant que les données qui la sous-tendent, et la plupart des programmes de métriques dépensent bien plus d'effort à concevoir des tableaux de bord qu'à vérifier le pipeline qui les alimente. C'est à l'envers. Un graphique magnifiquement conçu construit sur une instrumentation incohérente, auto-déclarée, ou silencieusement cassée est pire qu'aucun graphique du tout, parce qu'il a l'air d'autorité tout en étant faux. Ce sujet concerne la fondation peu glamour que le reste de ce livre suppose : d'où viennent réellement les données d'ingénierie, quand faire confiance à l'instrumentation automatisée plutôt qu'à l'auto-déclaration, et les échecs de qualité des données qui invalident tranquillement une métrique avant que quiconque ne le remarque.

Les données d'ingénierie logicielle viennent d'une poignée de types de sources, chacune avec des caractéristiques de fiabilité différentes. Le contrôle de version et les pipelines [CI/CD](https://en.wikipedia.org/wiki/CI/CD) génèrent des enregistrements objectifs, horodatés, difficiles à falsifier de ce qui s'est réellement passé. Les suiveurs de problèmes et les outils de gestion de projet génèrent des enregistrements qui dépendent d'humains mettant à jour l'état correctement et promptement, ce qu'ils font souvent de manière incohérente. Les sondages génèrent des données auto-déclarées inestimables pour des choses qu'aucun système ne peut observer, comme la satisfaction, mais sujettes au biais de rappel et aux effets de désirabilité sociale. Les plateformes d'observabilité génèrent une télémétrie au niveau système qui est objective mais ne couvre que ce qui a été instrumenté. Savoir de quelle catégorie viennent les données d'une métrique donnée vous dit à quel point lui faire confiance et quels modes d'échec surveiller.

À l'échelle de l'entreprise et du gouvernement, les problèmes de qualité des données s'accumulent parce que la distance entre l'origine des données et leur usage final dans un tableau de bord croît à travers de multiples systèmes, intégrations et transformations. Un champ qui signifie une chose dans le système source peut signifier quelque chose de subtilement différent au moment où il atteint une couche de rapport, et personne en aval ne le remarque parce que le chiffre a toujours l'air plausible. Bien faire l'instrumentation est moins excitant que bien faire les cadres, mais c'est la fondation sur laquelle tout le reste de ce livre repose.

## Principes clés

- **Préférez l'instrumentation à l'auto-déclaration partout où le système peut observer l'événement directement.** Un horodatage de déploiement du pipeline est plus fiable qu'un compte de déploiement auto-déclaré par une équipe.
- **N'utilisez l'auto-déclaration que pour ce qui ne peut pas être observé directement.** La satisfaction, la friction perçue et le bien-être n'ont aucun substitut de système de référence ; demandez directement et concevez bien le sondage (sujet 3.7). Réservez l'auto-déclaration spécifiquement à cette catégorie.
- **Les données de chaque métrique ont un système source, une méthode de collecte, et un mode d'échec connu.** Documentez les trois, pas seulement la définition.
- **La qualité des données se dégrade silencieusement.** Un pipeline qui fonctionnait correctement il y a un an peut être tranquillement cassé aujourd'hui, et un tableau de bord continuera à afficher un mauvais chiffre sans se plaindre.
- **Instrumentez au point de vérité, pas en aval d'une traduction.** Chaque saut entre l'événement et le tableau de bord est une chance pour le sens de dériver.

## Recommandations

### Cartographiez chaque métrique vers son système source réel avant de lui faire confiance

Pour chaque métrique sur un tableau de bord, nommez le système spécifique qui génère l'événement sous-jacent : le pipeline CI/CD pour les événements de déploiement, l'hôte de contrôle de version pour les événements de commit et de fusion, le suiveur d'incidents pour les enregistrements de panne, la plateforme de sondage pour la satisfaction auto-déclarée. Si vous ne pouvez pas nommer le système exact, vous ne savez pas réellement d'où vient le chiffre, et vous ne pouvez pas évaluer sa fiabilité. Cette cartographie est un prérequis pour la charte de gouvernance du sujet 1.4, pas un exercice séparé.

### Instrumentez à l'événement, pas au rapport

Les données les plus fiables capturent un événement automatiquement au moment où il se produit : un pipeline enregistre un déploiement l'instant où il se termine, un système de contrôle de version enregistre une fusion l'instant où elle atterrit. Les données qui dépendent d'un humain se rappelant de mettre à jour un champ de statut après coup, marquant un ticket « terminé », enregistrant manuellement un déploiement dans une feuille de calcul, se dégradent en précision plus elles s'éloignent de l'événement réel et plus la personne responsable devient occupée. Partout où un événement automatisé existe, préférez-le à un représentant rapporté par un humain pour le même fait.

### Réservez les sondages à ce que seule une personne peut vous dire

Certaines choses ne peuvent authentiquement pas être observées depuis la télémétrie système : si un ingénieur sent que son travail a du sens, si un processus semble frustrant, si le risque d'épuisement professionnel augmente. Celles-ci exigent de demander directement, et un sondage bien conçu (le sujet 3.7 couvre la mécanique) est le bon outil. L'erreur est d'utiliser l'auto-déclaration pour des choses qu'un système pourrait observer directement à la place, demander aux ingénieurs d'estimer leur propre fréquence de déploiement plutôt que de l'extraire du pipeline, ce qui introduit un bruit et un biais inutiles dans des données qui auraient pu être objectives.

### Intégrez des vérifications de qualité des données dans le pipeline lui-même

Traitez les pipelines de métriques avec la même rigueur que le code de production : ajoutez des vérifications automatisées qui signalent quand une source arrête d'envoyer des données, quand la distribution d'un champ change inopinément, ou quand un comptage tombe à zéro inopinément. Un tableau de bord qui affiche silencieusement des données obsolètes ou cassées comme si elles étaient actuelles est pire qu'un tableau de bord qui montre visiblement « données indisponibles », parce que le premier érode la confiance invisiblement tandis que le second au moins dit la vérité sur ses propres limitations.

### Documentez la méthode de collecte aux côtés de la définition

La définition d'une métrique (« temps d'exécution pour les changements ») n'est pas complète sans sa méthode de collecte (mesurée depuis l'horodatage du premier commit dans le contrôle de version jusqu'à l'horodatage de déploiement en production dans le pipeline, excluant les branches de correctif urgent). Deux équipes avec la même définition mais des méthodes de collecte différentes produiront toujours des chiffres incomparables. Enregistrez les deux dans la charte des métriques du sujet 1.4, et traitez un changement de l'une ou l'autre comme un changement nécessitant la même revue documentée.

## Compromis : avantages et inconvénients

| Type de source | Avantages | Inconvénients |
| --- | --- | --- |
| Instrumentation de pipeline automatisée (CI/CD, contrôle de version) | Objective, horodatée, difficile à falsifier, faible effort continu | Nécessite un investissement d'ingénierie initial pour construire et maintenir |
| Données de suiveur de problèmes et de gestion de projet | Largement disponibles, familières aux équipes | Dépend de la diligence humaine ; souvent incohérente entre équipes |
| Sondages et auto-déclaration | Seule source pour l'expérience subjective (satisfaction, bien-être) | Biais de rappel, biais de désirabilité sociale, fatigue de réponse |
| Plateformes d'observabilité et de télémétrie | Signal riche, en temps réel, au niveau système | Ne couvre que ce qui a été explicitement instrumenté ; peut être coûteux à grande échelle |

La tension centrale est **objectivité contre couverture**. L'instrumentation automatisée est la source la plus fiable mais ne peut pas observer du tout l'expérience subjective, tandis que les sondages peuvent atteindre exactement ce que l'automatisation ne peut pas mais portent un risque de biais réel. Résolvez la tension en utilisant l'instrumentation automatisée partout où un événement peut être observé directement, et en réservant l'auto-déclaration spécifiquement et seulement pour ce qui exige authentiquement de demander à une personne, jamais comme un substitut paresseux pour des données qu'un système aurait pu fournir.

## Questions à discuter avec votre équipe

1. **Pour nos cinq métriques les plus importantes, pouvons-nous nommer le système source exact et la méthode de collecte pour chacune, ou supposons-nous une définition sans savoir d'où viennent réellement les données ?** C'est un écart étonnamment commun : une métrique est adoptée depuis un cadre ou le tableau de bord par défaut d'un fournisseur, et personne dans l'équipe actuelle ne sait réellement quel système génère les données sous-jacentes ni comment. Tracez chacune jusqu'à son origine comme exercice de groupe.

2. **Lesquelles de nos métriques dépendent de l'auto-déclaration pour quelque chose qu'un système pourrait observer directement, et que faudrait-il pour remplacer cette auto-déclaration par une véritable instrumentation ?** Les comptes de déploiement auto-déclarés, les heures travaillées auto-déclarées, et le temps de cycle auto-estimé sont tous des exemples communs d'utiliser la mauvaise source de données pour quelque chose que l'automatisation pourrait capturer plus fiablement. Identifiez-les et priorisez le remplacement des plus critiques.

3. **Comment saurions-nous si un de nos pipelines de données s'était silencieusement cassé ?** La plupart des organisations découvrent un pipeline de métriques cassé seulement quand quelqu'un remarque qu'un chiffre a l'air implausible, ce qui peut prendre des mois. Discutez si l'un de vos pipelines a des contrôles de santé automatisés aujourd'hui, et si non, lesquels en ont le plus besoin en premier.

4. **Où une traduction entre systèmes a-t-elle changé le sens d'une métrique sans que personne ne le décide exprès ?** Un champ qui signifie une chose dans un système source peut signifier quelque chose de subtilement différent après une intégration ou une migration, et le chiffre résultant peut avoir l'air plausible tout en étant faux. Parcourez le chemin de données complet de votre métrique la plus conséquente et cherchez les points de traduction.

5. **Documentons-nous les méthodes de collecte, pas seulement les définitions, pour notre charte des métriques ?** Deux équipes peuvent partager le nom et la définition d'une métrique tout en la calculant à partir de méthodes de collecte différentes, produisant des chiffres qui ne sont en fait pas comparables. Auditez un échantillon de vos chartes contre cet écart spécifique.

6. **Comment distinguons-nous une véritable tendance d'un artefact de qualité des données quand un chiffre bouge de manière inattendue ?** Un changement soudain dans une métrique est souvent le premier signe soit d'un vrai changement soit d'un pipeline cassé, et distinguer les deux exige de connaître la source de données assez bien pour investiguer rapidement. Discutez du processus réel de votre équipe pour le dernier changement inexpliqué de métrique que vous avez rencontré.

## Regard sectoriel

**Startup.** Avec une petite pile technologique, la plupart de vos métriques peuvent venir directement de votre fournisseur CI/CD, de votre hôte de contrôle de version, et d'un outil de sondage léger, sans construire de pipelines sur mesure. Le risque est de sauter même les contrôles de santé basiques parce que l'équipe va vite ; un contrôle automatisé de cinq minutes qu'une source de données envoie toujours des événements est une assurance bon marché contre voler silencieusement à l'aveugle.

**Petite entreprise.** Appuyez-vous sur le rapport intégré de vos outils existants plutôt que de construire des pipelines de données sur mesure que vous n'avez pas la capacité de maintenir. Soyez explicites sur quels chiffres viennent de systèmes automatisés et lesquels sont des estimations que quelqu'un tape dans une feuille de calcul, parce que les deux portent une fiabilité très différente, même s'ils finissent sur la même page.

**Grande entreprise.** Les problèmes de qualité des données s'accumulent à travers les intégrations, les migrations et les frontières d'unités commerciales. Investissez dans des pipelines de données centralisés et bien surveillés pour vos métriques les plus conséquentes, construisez des contrôles automatisés de qualité des données comme pratique standard, et auditez les méthodes de collecte, pas seulement les définitions, chaque fois que vous comparez des métriques entre unités commerciales.

**Gouvernement.** La provenance des données peut porter un poids légal et d'audit : un chiffre de performance publié peut devoir survivre à un audit externe non seulement de sa valeur mais de toute sa chaîne de collecte. Documentez explicitement la traçabilité des données, conservez les enregistrements historiques de méthode de collecte même après qu'une méthodologie change, et soyez prêts à démontrer exactement comment un chiffre a été produit, pas seulement ce qu'il indique actuellement.

## Exemples

**Grande entreprise.** La direction d'ingénierie d'une entreprise de services financiers avait suivi « le temps d'exécution pour les changements » pendant deux ans avant de découvrir qu'une migration de pipeline de données dix-huit mois plus tôt avait silencieusement changé la source d'horodatage du premier commit vers la création de la demande de tirage, raccourcissant le temps d'exécution apparent d'une moyenne de plusieurs heures à travers chaque équipe sans que personne ne le remarque ou ne l'approuve. La correction a instauré un contrôle de qualité des données comparant la distribution de chaque métrique semaine après semaine et signalant les changements statistiquement inhabituels pour revue humaine, attrapant deux autres problèmes de pipeline silencieux dans l'année suivante.

**Gouvernement.** Le tableau de bord public de fiabilité de service d'une agence de transport s'appuyait sur un mélange de télémétrie de capteur automatisée et de rapports d'incidents saisis manuellement par des bureaux régionaux. Un audit a trouvé que les régions avec moins de capacité de personnel sous-rapportaient systématiquement les incidents mineurs, non par malhonnêteté mais simplement parce que la saisie manuelle concurrençait pour le temps avec un travail plus urgent, ce qui signifiait que le chiffre de fiabilité publié était meilleur que la réalité précisément dans les régions qui pouvaient le moins se permettre qu'une maintenance sous-dotée passe inaperçue. La correction de l'agence a remplacé la saisie manuelle d'incidents par une journalisation automatisée déclenchée par capteur partout où c'était réalisable et a ajouté une estimation documentée de la couverture de rapport manuel aux côtés du chiffre publié.

## Argumentaire économique : motivations, ROI et TCO

Le retour d'une instrumentation solide est la confiance : une équipe de direction qui fait confiance à ses données peut agir sur elles de manière décisive, tandis qu'une équipe qui a été brûlée par un pipeline silencieusement cassé commence à remettre en question chaque chiffre, ce qui ralentit chaque décision dépendant des métriques. Cette perte de confiance est coûteuse et difficile à réparer, prenant souvent bien plus longtemps à reconstruire que n'aurait coûté l'investissement d'instrumentation original.

Le coût total de possession d'une bonne instrumentation inclut le travail d'ingénierie initial pour construire des pipelines fiables et le coût continu de la surveillance de qualité des données, tous deux faciles à sous-investir parce que ni l'un ni l'autre ne produit sa propre tuile de tableau de bord visible. Ce sous-investissement est une fausse économie : le coût de découvrir un pipeline silencieusement cassé après des mois de décisions prises sur de mauvaises données est bien plus élevé que le coût de construire les contrôles de santé qui l'auraient attrapé le premier jour.

## Antipatrons et pièges

- **Faire confiance à un chiffre sans connaître son système source :** une métrique adoptée depuis un cadre ou le défaut d'un fournisseur sans que personne ne trace d'où viennent réellement les données.
- **Auto-déclarer ce qu'un système pourrait observer directement :** introduit un bruit et un biais inutiles dans des données qui auraient pu être objectives.
- **Aucun contrôle automatisé de qualité des données sur un pipeline de métriques :** un pipeline silencieusement cassé peut afficher de mauvais chiffres pendant des mois sans détection.
- **Documenter seulement la définition, pas la méthode de collecte :** deux équipes avec le même nom de métrique peuvent encore calculer des chiffres incomparables.
- **Un tableau de bord qui affiche « 0 » ou des données obsolètes comme si elles étaient actuelles, sans indication d'échec de source :** pire qu'un message visible « données indisponibles ».
- **Des régions ou équipes sous-dotées sous-rapportant systématiquement à cause du fardeau de la saisie manuelle :** un écart de qualité des données qui corrèle précisément avec les zones ayant le plus besoin d'attention.

## Modèle de maturité

- **Niveau 1, Initiation :** Personne ne peut tracer de manière fiable une métrique jusqu'à son système source ; les pipelines n'ont pas de contrôles de santé et les échecs passent inaperçus.
- **Niveau 2, Développement :** Certaines métriques ont des sources documentées, mais les méthodes de collecte sont incohérentes et les contrôles de qualité des données sont improvisés au mieux.
- **Niveau 3, Standardisation :** Chaque métrique gouvernée documente son système source et sa méthode de collecte ; les pipelines automatisés sont préférés à l'auto-déclaration partout où un événement peut être observé directement.
- **Niveau 4, Gestion :** Des contrôles automatisés de qualité des données surveillent chaque pipeline conséquent, signalent les anomalies pour revue, et la traçabilité des données est documentée et auditable.
- **Niveau 5, Orchestration :** L'organisation traite la qualité des données comme une discipline d'ingénierie de premier ordre avec sa propre surveillance et réponse aux incidents, et peut démontrer la provenance complète de toute métrique publiée sur demande.

## Idées de discussion

1. Pourrions-nous tracer nos trois principales métriques jusqu'à leur système source exact en direct, dans cette réunion ?
2. Lesquelles de nos métriques actuelles dépendent de l'auto-déclaration pour quelque chose qu'un système pourrait mesurer directement ?
3. Certains de nos pipelines de métriques ont-ils des contrôles de santé automatisés aujourd'hui ?
4. Quand avons-nous découvert pour la dernière fois un pipeline de données silencieusement cassé, et depuis combien de temps était-il faux ?
5. Où la saisie manuelle de données crée-t-elle un écart entre la réalité rapportée et la réalité réelle ?

## Points clés à retenir

- Préférez l'**instrumentation automatisée** à l'auto-déclaration partout où un système peut observer l'événement directement ; réservez l'auto-déclaration à l'expérience authentiquement subjective.
- Chaque métrique a besoin d'un **système source et d'une méthode de collecte** documentés, pas seulement une définition.
- La qualité des données **se dégrade silencieusement** ; construisez des contrôles automatisés dans le pipeline lui-même plutôt que de découvrir la casse par accident.
- Instrumentez **à l'événement**, pas en aval d'une traduction, pour minimiser la dérive entre ce qui s'est passé et ce que montre le tableau de bord.
- Le coût d'un pipeline silencieusement cassé, des mois de décisions prises sur de mauvaises données, dépasse de loin le coût des contrôles de santé qui l'auraient attrapé.

## Sources et lectures complémentaires

- *Observability Engineering*, par Charity Majors, Liz Fong-Jones et George Miranda (principes de conception d'instrumentation et de télémétrie).
- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble et Gene Kim (approche d'instrumentation derrière les métriques DORA).
- *Data Quality: The Accuracy Dimension*, par Jack E. Olson (concepts de qualité des données applicables aux pipelines de métriques).
- *How to Measure Anything*, par Douglas W. Hubbard (méthodes de mesure pour des quantités qui semblent difficiles à observer directement).
