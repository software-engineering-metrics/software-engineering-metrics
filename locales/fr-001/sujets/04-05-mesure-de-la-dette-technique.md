# 4.5 Mesure de la dette technique

## Vue d'ensemble et motivation

La **[dette technique](https://en.wikipedia.org/wiki/Technical_debt)**, une métaphore inventée par Ward Cunningham, décrit le coût accumulé de raccourcis passés, des décisions expédientes qui ont livré quelque chose plus tôt mais ont laissé la base de code plus difficile à changer par la suite, de la même manière que la dette financière vous permet de dépenser maintenant au coût d'intérêts plus tard. Chaque base de code porte une certaine dette technique, et ce n'est pas automatiquement un échec ; la vraie valeur de la métaphore est qu'elle cadre la dette comme un compromis gérable plutôt que soit un secret honteux soit un fardeau inévitable et permanent. Ce chapitre consiste à rendre ce compromis visible et gérable par la mesure, plutôt que de le laisser comme une inquiétude vague et perpétuellement dépriorisée que chaque ingénieur sent mais que personne ne peut traiter avec des preuves.

Les chapitres précédant celui-ci, complexité (4.1), couverture (4.2), churn et points chauds (4.3), et analyse statique (4.4), font chacun émerger une facette de la dette technique. Le travail de ce chapitre est la synthèse : transformer ces signaux séparés, plus des éléments qui n'apparaissent jamais dans aucun scan automatisé (un raccourci architectural non documenté, une migration délibérément différée), en un seul arriéré visible et priorisé qui concourt équitablement pour l'investissement contre le travail de fonctionnalités, plutôt que de perdre cette compétition par défaut simplement parce qu'il n'a aucune métrique attachée et aucun défenseur dans les réunions de planification.

Pour les grandes équipes, la dette technique non gérée se compose d'une manière authentiquement dangereuse et facile à sous-estimer : chaque nouveau raccourci rend le changement suivant légèrement plus difficile, ce qui crée une pression pour plus de raccourcis, qui se compose davantage. Les organisations de grande entreprise et de gouvernement maintenant des systèmes sur de nombreuses années sont particulièrement exposées à cet effet de composition, et la recommandation centrale de ce chapitre, un arriéré de dette visible, quantifié et priorisé, est le mécanisme qui permet à une organisation de réellement gérer le compromis délibérément au lieu de dériver vers la crise.

## Principes clés

- **La dette technique est une métaphore délibérée pour un compromis gérable, pas un secret honteux.** Une certaine dette, contractée sciemment, est une décision d'affaires raisonnable.
- **La dette non mesurée perd la compétition de priorisation contre le travail de fonctionnalités par défaut,** pas parce qu'elle compte moins, mais parce qu'elle n'a pas de défenseur visible.
- **Quantifiez la dette en termes que les décideurs peuvent peser : coût de correction contre coût de la porter.** Une affirmation vague comme « le code est en désordre » concourt rarement bien contre une demande de fonctionnalité concrète.
- **La dette se compose.** Chaque nouveau raccourci rend les changements futurs marginalement plus difficiles, et cet effet s'accélère s'il n'est pas géré.
- **Toute dette ne devrait pas être remboursée.** Certaine vaut la peine d'être portée indéfiniment si le coût de la corriger dépasse le coût de vivre avec.

## Recommandations

### Construisez un arriéré de dette technique unique et visible

Consolidez les signaux des chapitres précédents de cette partie, valeurs aberrantes de complexité, zones à faible taux de mise à mort de mutation, points chauds, constats d'analyse statique non résolus, aux côtés d'éléments de dette qu'un seul humain peut identifier (un raccourci architectural, une mise à niveau de dépendance différée, une solution de contournement non documentée), en un arriéré visible unique, suivi avec la même rigueur et visibilité que votre arriéré de fonctionnalités. La dette qui ne vit que dans la mémoire d'ingénieurs individuels ou dans des commentaires de code dispersés n'existe effectivement pas à des fins de priorisation.

### Quantifiez le coût de chaque élément de dette et son coût de portage

Pour chaque élément, estimez deux chiffres : le coût de le corriger (temps d'ingénierie, risque de la correction elle-même) et le coût de le porter non corrigé (à quel point le travail lié va-t-il plus lentement, quel risque de défaut supplémentaire porte-t-il, à quel point bloque-t-il d'autre travail). Ce cadrage, emprunté directement à la logique propre de la métaphore de la dette financière, donne aux décideurs une véritable base de comparaison contre le coût et la valeur attendue du travail de fonctionnalités, plutôt qu'une plainte abstraite et non quantifiée.

### Priorisez en utilisant l'impact, pas l'ancienneté ou le défenseur le plus bruyant

Classez les éléments de dette par leur combinaison de coût de portage et à quelle fréquence le code affecté est touché (les données de churn du chapitre 4.3 sont directement utiles ici) : un élément dans un coin rarement modifié de la base de code, aussi désagréable soit-il, compte bien moins qu'un qui se trouve directement dans le chemin de votre développement le plus actif. Résistez à prioriser par quel élément est resté le plus longtemps sur l'arriéré ou quel ingénieur le défend le plus persistamment, aucun des deux ne corrèle de manière fiable avec l'impact d'affaires réel.

### Allouez une capacité dédiée et protégée pour la remédiation de la dette

Un arriéré de dette qui doit concourir élément par élément contre chaque demande de fonctionnalité entrante à chaque cycle de planification a tendance à perdre systématiquement, parce que le travail de fonctionnalités a habituellement un champion d'affaires plus clair et plus immédiat. Allouez un pourcentage protégé de capacité d'ingénierie, un schéma courant se situe entre 10 % et 20 %, spécifiquement pour la remédiation de dette, décidé à l'avance plutôt que négocié à neuf chaque sprint, afin que le remboursement de dette se produise comme une évidence plutôt que seulement dans les suites d'une crise.

### Acceptez une partie de la dette comme permanente, et dites-le explicitement

Tout élément n'appartient pas à un plan de remédiation actif. Là où le coût de corriger dépasse authentiquement le coût de porter un élément indéfiniment, particulièrement pour du code dans un système stable, rarement touché, et bientôt mis à la retraite, documentez cette décision explicitement et déplacez l'élément vers une catégorie délibérément dépriorisée plutôt que de le laisser reposer indéfiniment sur un arriéré actif où sa présence continue implique silencieusement un travail qui ne se produira jamais réellement.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Aucun suivi formel de dette | Aucune surcharge | La dette perd la compétition de priorisation par défaut ; se compose invisiblement |
| Conscience informelle et ad hoc de la dette | Faible surcharge, une certaine visibilité | Incohérente ; repose sur la mémoire et le plaidoyer individuels |
| Arriéré de dette formel et quantifié | Concourt équitablement pour l'investissement ; permet des compromis informés | Nécessite une maintenance continue et une discipline de quantification |
| Capacité de remédiation protégée et dédiée | Assure que le remboursement se produit de manière cohérente, pas seulement réactivement | Réduit la capacité disponible pour le travail de fonctionnalités à court terme |

La tension centrale est **la pression de livraison immédiate contre la maintenabilité à long terme**. Le travail de fonctionnalités a presque toujours un champion d'affaires plus clair et plus immédiat que la remédiation de dette, ce qui crée une pression structurelle pour que la dette perde chaque décision de priorisation individuelle même quand son coût cumulatif est élevé. Résolvez la tension en retirant entièrement la remédiation de dette de la compétition élément par élément par une capacité protégée et préallouée, afin que le compromis soit décidé délibérément et à l'avance plutôt que relitigé, et habituellement perdu, à chaque cycle de planification.

## Questions à discuter avec votre équipe

1. **Avons-nous un arriéré de dette technique unique et visible, ou la conscience de la dette vit-elle principalement dans la tête d'ingénieurs individuels ?** Si la réponse honnête est la seconde, c'est l'écart unique le plus important que ce chapitre recommande de fermer en premier.

2. **Pour notre élément de dette principal, pourrions-nous énoncer son coût de correction et son coût de portage en termes assez spécifiques pour le comparer équitablement contre une demande de fonctionnalité ?** Sinon, pratiquez cette quantification ensemble comme exercice de groupe en utilisant un élément réel et actuel.

3. **Quel pourcentage de notre capacité d'ingénierie va réellement à la remédiation de dette, et ce pourcentage a-t-il été décidé délibérément ou se trouve-t-il être simplement ce qui survit après que le travail de fonctionnalités est alloué ?** Regardez vos sprints récents réels et calculez le vrai chiffre plutôt que de vous fier à l'impression.

4. **Notre arriéré de dette est-il priorisé par impact d'affaires authentique, ou par quel élément a été soulevé le plus persistamment ou est resté le plus longtemps ?** Croisez votre priorisation actuelle avec les données de churn (chapitre 4.3) et voyez si les deux s'alignent.

5. **Quels éléments de dette devrions-nous accepter explicitement comme permanents, plutôt que de les laisser reposer indéfiniment sur un arriéré actif ?** Identifiez au moins un élément réel où le coût de correction dépasse authentiquement le coût de portage, et discutez de le déplacer vers un statut explicitement dépriorisé.

6. **Comment notre arriéré de dette a-t-il changé l'année dernière, grandissant, rétrécissant, ou restant stable, et cette tendance correspond-elle à notre intuition ?** Suivez cela dans le temps plutôt que de ne jamais regarder qu'un seul instantané ; la tendance est souvent plus informative que la taille absolue à un moment donné.

## Regard sectoriel

**Startup.** La dette délibérée et informée est souvent une stratégie raisonnable à ce stade : livrer vite pour valider une hypothèse, avec un plan clair pour revisiter des raccourcis spécifiques si le produit se confirme, est un échange légitime, pas un échec. Le risque est de perdre la trace de quels raccourcis étaient délibérés et réversibles contre lesquels sont devenus silencieusement des passifs permanents et non examinés à mesure que la base de code grandit.

**Petite entreprise.** Une liste simple et partagée, même informelle, nommant vos raccourcis connus et leur coût approximatif de correction est habituellement suffisante à cette échelle. La principale discipline qui vaut la peine d'être adoptée est de revisiter périodiquement cette liste plutôt que de la laisser s'accumuler silencieusement et devenir invisible par familiarité.

**Grande entreprise.** La capacité de remédiation protégée et préallouée compte le plus ici, puisque la compétition de priorisation individuelle entre dette et travail de fonctionnalités favorise de manière fiable les fonctionnalités à travers des dizaines d'équipes simultanément sans contrepoids structurel. Standardisez la pratique de quantification de dette à l'échelle de l'organisation afin que les éléments de dette puissent être comparés équitablement entre équipes pour des décisions d'investissement au niveau du portefeuille.

**Gouvernement.** Les systèmes à longue durée de vie accumulent de la dette sur des années ou des décennies de changements de besoins incrémentaux et individuellement raisonnables, souvent sans aucun suivi formel de dette du tout jusqu'à ce qu'une crise force la question. Un arriéré de dette quantifié et visible est un outil authentiquement persuasif pour justifier un budget de modernisation auprès des organismes de surveillance, puisqu'il transforme une affirmation vague comme « le système est vieux » en un dossier spécifique et chiffré pour l'investissement.

## Exemples

**Grande entreprise.** La plateforme de facturation d'une entreprise de télécommunications avait accumulé plus d'une décennie de dette technique informellement reconnue mais jamais formellement suivie, les ingénieurs citant couramment « le moteur de facturation est en désordre » dans les rétrospectives sans suivi. Un nouveau directeur d'ingénierie a exigé que chaque équipe construise un arriéré de dette quantifié, estimant le coût de correction et le coût de portage pour chaque élément, et a alloué un 15 % fixe de capacité d'ingénierie à la remédiation de dette à l'avenir. En un an, les cinq éléments au coût de portage le plus élevé, représentant une petite fraction de l'arriéré total par le compte, avaient été résolus, et le taux d'échecs de changement (chapitre 2.10) pour les déploiements liés à la facturation s'est mesurablement amélioré, démontrant l'impact disproportionné de cibler les éléments au coût de portage le plus élevé en premier plutôt que de parcourir l'arriéré dans un ordre arbitraire.

**Gouvernement.** Le système central de traitement de données d'une agence nationale de statistiques, originellement construit plus de vingt ans auparavant, n'avait jamais eu d'évaluation formelle de dette malgré une reconnaissance informelle répandue parmi le personnel que des portions significatives étaient fragiles et mal comprises. Une évaluation de dette structurée, combinant les constats d'analyse statique, les données de points chauds, et des entretiens avec les quelques ingénieurs restants qui comprenaient les composants les plus anciens, a produit un arriéré quantifié et priorisé qui a directement soutenu une demande de budget de modernisation pluriannuelle. De manière cruciale, l'évaluation a aussi explicitement identifié plusieurs composants hérités stables et rarement touchés comme raisonnables à laisser inchangés, évitant une réécriture complète du système inutilement large et coûteuse en faveur d'un investissement ciblé dans les zones spécifiques que les données montraient porter le coût continu le plus élevé.

## Argumentaire économique : motivations, ROI et TCO

Le retour de gérer délibérément la dette technique est un coût composé évité : chaque raccourci non adressé rend les changements futurs marginalement plus difficiles, et cet effet s'accélère sans intervention, produisant éventuellement une base de code si fragile que même des changements simples deviennent lents et risqués. L'exemple de télécommunications ci-dessus montre le retour concrètement : cibler un petit nombre des éléments au coût de portage le plus élevé a produit une amélioration mesurable de livraison et de qualité, disproportionnée par rapport à la fraction modeste de l'arriéré total que ces éléments représentaient.

Le coût total de possession est la capacité protégée allouée à la remédiation, typiquement 10 % à 20 % du temps d'ingénierie, qui est un coût réel et visible qui concourt avec la vélocité de fonctionnalités à court terme. Ce coût vaut la peine d'être payé parce que l'alternative, une dette non gérée et composée, coûte éventuellement bien plus en livraison ralentie et taux de défauts élevés à travers la base de code entière, pas seulement les éléments spécifiques laissés non adressés.

## Antipatrons et pièges

- **Aucun arriéré de dette visible et suivi :** la dette perd la compétition de priorisation par défaut et se compose invisiblement.
- **Affirmations de dette vagues et non quantifiées :** concourent rarement bien contre des demandes de fonctionnalités concrètes et quantifiées en planification.
- **Prioriser la dette par ancienneté ou volume de plaidoyer plutôt que par impact :** mal dirige une capacité de remédiation limitée.
- **Aucune capacité protégée pour la remédiation :** le remboursement de dette ne se produit que réactivement, après une crise, plutôt que comme pratique routinière et délibérée.
- **Traiter toute la dette comme méritant également d'être corrigée :** gaspille l'effort sur des éléments à faible impact tandis que les éléments à coût de portage élevé restent non adressés.
- **Laisser la dette reposer indéfiniment sur un arriéré actif sans jamais décider qu'elle est permanente :** implique un travail futur qui ne se produira jamais réellement et encombre la priorisation authentique.

## Modèle de maturité

- **Niveau 1, Initiation :** La dette technique est discutée informellement, sans arriéré suivi ni quantification ; elle perd systématiquement contre le travail de fonctionnalités.
- **Niveau 2, Développement :** Certaines équipes suivent la dette informellement, mais il n'y a pas de quantification cohérente, de visibilité inter-équipes, ou de capacité de remédiation protégée.
- **Niveau 3, Standardisation :** Un arriéré de dette visible et quantifié existe à l'échelle de l'organisation, avec une capacité de remédiation protégée allouée de manière cohérente.
- **Niveau 4, Gestion :** Les éléments de dette sont priorisés par impact mesuré (coût de portage combiné au churn), et la dette acceptée de manière permanente est explicitement documentée plutôt que laissée ambiguë.
- **Niveau 5, Orchestration :** L'organisation peut pointer vers des améliorations spécifiques et mesurables de livraison ou de qualité retracées à une remédiation de dette ciblée, et la gestion de dette est une entrée routinière et fiable aux décisions d'investissement d'ingénierie aux côtés du travail de fonctionnalités.

## Idées pour la discussion

1. Quel est notre élément de dette unique au coût de portage le plus élevé en ce moment, et pourrions-nous le quantifier ?
2. Quel pourcentage de notre capacité va réellement à la remédiation de dette aujourd'hui ?
3. Quel élément de dette devrions-nous accepter explicitement comme permanent plutôt que de le laisser ambigu sur notre arriéré ?
4. Notre arriéré de dette a-t-il grandi, rétréci, ou resté stable l'année dernière ?
5. Que révélerait une évaluation de dette quantifiée que notre conscience informelle actuelle manque ?

## Points clés à retenir

- La dette technique est un **compromis gérable, pas un secret honteux** ; quantifiez-la plutôt que de la laisser comme une préoccupation vague et perpétuellement dépriorisée.
- **Quantifiez le coût de correction contre le coût de portage** pour chaque élément afin qu'il concoure équitablement contre le travail de fonctionnalités.
- **Priorisez par impact** (coût de portage combiné au churn), pas par ancienneté ou volume de plaidoyer.
- Allouez une **capacité de remédiation protégée et dédiée**, décidée à l'avance, puisque la dette perd de manière fiable la compétition élément par élément contre le travail de fonctionnalités autrement.
- **Acceptez explicitement une partie de la dette comme permanente** là où le coût de correction dépasse le coût de portage, plutôt que de la laisser ambiguë sur un arriéré actif.

## Sources et lectures complémentaires

- Cunningham, Ward, "The WyCash Portfolio Management System" (rapport d'expérience OOPSLA, 1992) : l'origine de la métaphore de la dette technique.
- *Managing Technical Debt: Reducing Friction in Software Development*, par Philippe Kruchten, Robert Nord, and Ipek Ozkaya (un traitement complet de la mesure et de la gestion de la dette technique).
- *Refactoring: Improving the Design of Existing Code*, par Martin Fowler (les techniques de remédiation sur lesquelles un arriéré de dette s'appuie finalement).
- *Your Code as a Crime Scene*, par Adam Tornhill (l'analyse de points chauds comme entrée à la priorisation de dette, chapitre 4.3).
