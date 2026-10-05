# 6.2 Métriques d'incident : détection, réponse, et récupération

## Vue d'ensemble et motivation

Ce sujet mesure ce qui se passe quand le budget d'erreur du sujet 6.1 est dépensé par une véritable défaillance : un **incident**, un événement non planifié qui dégrade ou interrompt un service. Quatre métriques forment le vocabulaire standard pour mesurer à quel point une organisation gère cela : le **temps moyen de détection (MTTD)**, combien de temps avant que l'organisation ne remarque que quelque chose ne va pas ; le **temps moyen d'accusé de réception (MTTA)**, combien de temps avant que quelqu'un ne prenne possession de la réponse ; le **temps moyen de résolution** ou **de récupération (MTTR)**, combien de temps jusqu'à ce que le service soit restauré, le même concept que le sujet 2.10 a couvert spécifiquement pour les défaillances causées par déploiement, maintenant généralisé à tout incident indépendamment de la cause ; et la **fréquence d'incident**, simplement à quelle fréquence les incidents se produisent du tout.

La préoccupation centrale de ce sujet, faisant écho au traitement du taux d'échecs de changement du sujet 2.10, est que ces chiffres ne sont dignes de confiance qu'à hauteur de la culture organisationnelle autour du rapport et de la classification honnêtes des incidents. Une équipe qui craint le blâme pour un incident a toute incitation à sous-rapporter, retarder l'accusé de réception pour éviter d'être « sur l'horloge », ou classer un événement sérieux comme mineur pour protéger ses propres métriques. La pratique du **[post-mortem sans blâme](https://en.wikipedia.org/wiki/Just_culture)**, pionnière dans des organisations comme Etsy et formalisée dans la littérature SRE de Google, existe spécifiquement pour retirer cette incitation, et ce sujet la traite comme un prérequis pour des données d'incident dignes de confiance, pas une élégance culturelle facultative superposée aux métriques.

Pour les grandes équipes, les métriques d'incident révèlent si la capacité de détection et de réponse d'une organisation, l'outillage de retour en arrière du sujet 2.10 parmi d'autres investissements, fonctionne réellement sous des conditions réelles et variées, pas seulement le scénario spécifique de défaillance causée par déploiement que ce sujet couvrait. Les organisations de grande entreprise et de gouvernement exploitant une infrastructure critique dépendent de ces métriques à la fois en interne, pour conduire une véritable amélioration opérationnelle, et en externe, pour démontrer aux clients, régulateurs, ou au public que les incidents sont gérés avec compétence et s'améliorent dans le temps.

## Principes clés

- **La culture sans blâme est un prérequis pour des données d'incident dignes de confiance,** pas un ajout facultatif ; la peur du blâme corrompt le rapport, la vitesse d'accusé de réception, et la classification de sévérité pareillement.
- **La détection, l'accusé de réception, et la résolution sont des phases distinctes avec des corrections distinctes.** Un temps de récupération global lent peut cacher des problèmes sous-jacents très différents selon quelle phase est réellement lente.
- **La fréquence d'incident et le MTTR sont un signal apparié,** similaire au taux d'échecs de changement et au temps de récupération de DORA (sujet 2.10) : ni l'un ni l'autre seul ne raconte l'histoire complète.
- **La classification de sévérité nécessite la même rigueur que la classification de défaut échappé** (sujet 5.1) : critères cohérents et documentés, pas un jugement ad hoc.
- **La valeur d'un post-mortem réside dans l'apprentissage systémique, pas dans la production d'un chiffre.** La métrique est un sous-produit de la bonne pratique, pas son objectif.

## Recommandations

### Décomposez le temps de réponse à l'incident en ses phases distinctes

Mesurez et rapportez le temps de détection (du début réel de la défaillance jusqu'à ce que quelqu'un le remarque), le temps d'accusé de réception (de la notification jusqu'à ce que quelqu'un prenne possession), et le temps de résolution (de la possession jusqu'à la récupération authentique) séparément, plutôt qu'un seul total mélangé. Chaque phase pointe vers une correction différente : une détection lente pointe vers un écart de surveillance et d'alerte, un accusé de réception lent pointe vers un problème de processus d'astreinte ou d'escalade, et une résolution lente pointe vers un écart d'outillage, de guide opérationnel, ou de capacité diagnostique (le sujet 2.10 couvre cela spécifiquement pour les défaillances causées par déploiement).

### Construisez et protégez un processus de post-mortem authentiquement sans blâme

Un **post-mortem sans blâme** investigue ce qui s'est passé et pourquoi le système a permis que cela se produise, évitant explicitement d'attribuer la faute à un individu pour une erreur que toute personne raisonnable dans les mêmes circonstances, avec la même information, aurait plausiblement pu commettre. Protégez cette discipline activement : la direction modélisant des réponses non punitives aux incidents, une politique écrite explicite, et l'habitude de demander « qu'est-ce qui dans notre système a permis cela » plutôt que « qui a fait cela » sont tous des investissements continus et nécessaires, pas une déclaration de politique unique.

### Classez la sévérité avec des critères cohérents, documentés, et audités

Appliquez la même discipline que le sujet 5.1 recommande pour les défauts échappés à la classification de sévérité d'incident : une échelle fixe et documentée basée sur l'impact client ou d'affaires réel, appliquée de manière cohérente à travers les équipes, périodiquement auditée pour la dérive. Une classification incohérente, certaines équipes généreuses, certaines strictes, rend les données d'incident à l'échelle de l'organisation aussi peu fiables pour la comparaison que le seraient des données de défaut classées de manière incohérente.

### Suivez la fréquence d'incident et le MTTR ensemble, jamais isolément

Un MTTR qui s'améliore aux côtés d'une fréquence d'incident en hausse pourrait indiquer une équipe qui devient meilleure à éteindre les incendies tandis que la fiabilité du système sous-jacent se dégrade réellement ; une fréquence d'incident en baisse aux côtés d'un MTTR qui s'aggrave pourrait indiquer des défaillances plus rares mais plus sévères et plus difficiles à diagnostiquer remplaçant des défaillances mineures fréquentes. Revoyez les deux ensemble, reflétant exactement la discipline d'association vitesse-stabilité des métriques DORA de la Partie 2, pour obtenir une image combinée et honnête.

### Extrayez et suivez les éléments d'action systémiques des post-mortems, pas seulement les métriques

La véritable valeur du processus de post-mortem réside dans les éléments d'action spécifiques et systémiques qu'il produit : une alerte manquante ajoutée, un guide opérationnel amélioré, un point unique de défaillance retiré. Suivez ces éléments d'action jusqu'à l'achèvement avec la même discipline que l'arriéré de dette technique du sujet 4.5, puisqu'un post-mortem qui produit de l'intuition mais aucun suivi gaspille l'apprentissage organisationnel que le processus est censé capturer.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Métrique de temps de réponse à l'incident unique et mélangée | Simple à rapporter | Cache quelle phase spécifique, détection, accusé de réception, résolution, est le véritable problème |
| Métriques d'incident décomposées par phase | Diagnostique, pointe directement vers la bonne correction | Nécessite une instrumentation plus soigneuse de chaque transition de phase |
| Revue d'incident orientée blâme | Semble responsabilisante, satisfait un désir d'assigner une responsabilité | Corrompt l'honnêteté de rapport future et corrige rarement la véritable cause systémique |
| Pratique de post-mortem sans blâme | Produit des données honnêtes et de véritables corrections systémiques | Nécessite un investissement culturel soutenu et une discipline de direction pour maintenir |

La tension centrale est **l'attrait de la responsabilité individuelle contre le besoin pratique de rapport honnête**. Blâmer un individu après un incident peut sembler satisfaisant et peut ressembler à un leadership décisif, mais cela corrompt de manière fiable les données de chaque incident futur, parce que les gens sous-rapportent, retardent l'accusé de réception, ou mal classent la sévérité une fois qu'ils craignent une conséquence personnelle. Résolvez la tension en faveur de la pratique sans blâme délibérément et de manière cohérente, en comprenant que la véritable responsabilité vient de corriger le système qui a permis une défaillance, pas de punir l'individu qui se trouvait présent quand elle s'est produite.

## Questions à discuter avec votre équipe

1. **Décomposons-nous le temps de réponse à l'incident en phases de détection, d'accusé de réception, et de résolution, ou suivons-nous seulement un chiffre unique et mélangé ?** Si seul un chiffre mélangé existe, choisissez un incident significatif récent et essayez de reconstruire la répartition de phase rétroactivement pour voir ce qu'elle aurait révélé.

2. **Notre équipe croirait-elle authentiquement que notre processus de post-mortem est sans blâme, ou la peur de conséquence façonne-t-elle encore comment les incidents sont rapportés et discutés ?** Posez cette question directement et honnêtement ; une politique sans blâme énoncée mais pas réellement vécue ne produit pas de données dignes de confiance.

3. **Deux équipes différentes classeraient-elles la sévérité du même incident de la même manière ?** Choisissez un incident passé réel et ambigu et faites classer indépendamment par des représentants de différentes équipes, puis comparez les résultats.

4. **Revoyons-nous la fréquence d'incident et le MTTR ensemble, ou l'un reçoit-il plus d'attention que l'autre ?** Vérifiez votre pratique de rapport et vos revues réelles pour cette association, reflétant la même discipline que le sujet 2.10 recommande pour les métriques de stabilité DORA.

5. **Quel pourcentage de nos éléments d'action de post-mortem des six derniers mois ont réellement été complétés ?** Si vous ne suivez pas cela actuellement, cet écart vaut la peine d'être nommé ; un processus de post-mortem avec un faible taux d'achèvement d'éléments d'action produit de l'intuition sans suivi.

6. **La peur du blâme a-t-elle déjà causé que quelqu'un retarde le rapport ou l'accusé de réception d'un incident ?** C'est une question inconfortable mais importante ; une réponse honnête « oui, et voici ce qui s'est passé » est bien plus précieuse pour la santé de votre processus d'incident qu'un « non » réflexe.

## Regard sectoriel

**Startup.** La réponse aux incidents est souvent informelle par nécessité avec une petite équipe, et la décomposition formelle de phase pourrait être inutile au début. L'habitude qui vaut la peine d'être adoptée tôt est les normes de discussion sans blâme dès le tout premier incident, puisque les habitudes culturelles établies tôt sont bien plus faciles à maintenir qu'à adapter une fois qu'un schéma propice au blâme s'est installé.

**Petite entreprise.** Un journal d'incident simple et partagé, même informel, avec une classification de sévérité de base et une brève rétrospective sans blâme pour tout ce qui est significatif, capture la plupart de la valeur de ce sujet sans nécessiter d'outillage sophistiqué ou de plateforme de gestion d'incident dédiée.

**Grande entreprise.** La classification de sévérité cohérente et une culture sans blâme authentique et soutenue sont toutes deux plus difficiles à maintenir à l'échelle, et toutes deux essentielles pour des données d'incident fiables et comparables à travers des dizaines d'équipes. Investissez dans des critères de classification documentés, un audit périodique, et une modélisation active de la direction de la réponse sans blâme, puisque la dérive culturelle vers le blâme a tendance à s'infiltrer graduellement sans contre-pression délibérée et continue.

**Gouvernement.** Les incidents affectant les services publics ou l'infrastructure critique font souvent face à un examen externe, une attention médiatique, ou une enquête formelle, ce qui crée une forte pression vers la recherche de blâme qui peut directement saper la pratique interne sans blâme si non gérée activement. Maintenez une discipline interne claire et sans blâme pour un véritable apprentissage systémique, séparée de tout processus de responsabilité externe qui pourrait suivre un incident sérieux, et communiquez cette distinction clairement au personnel.

## Exemples

**Grande entreprise.** La culture d'ingénierie d'une entreprise de paiements avait, pendant des années, traité informellement les incidents comme quelque chose à minimiser en accusant réception rapidement pour éviter de paraître responsable, conduisant à des temps de détection et d'accusé de réception systématiquement médiocres que la direction attribuait initialement à un outillage de surveillance inadéquat. Un changement culturel vers des post-mortems authentiquement sans blâme, incluant la direction louant publiquement et spécifiquement l'accusé de réception rapide et honnête d'incident plutôt que de ne louer que la résolution rapide, a produit une amélioration mesurable à la fois du temps de détection et d'accusé de réception en deux trimestres, révélant que le goulot d'étranglement original avait été culturel, la peur du blâme, plutôt que technique, un outillage inadéquat, comme initialement supposé.

**Gouvernement.** Le centre d'opérations d'une agence de transit public avait historiquement classé presque chaque perturbation de service comme « mineure » dans son journal d'incident interne, un schéma qu'un nouveau directeur de sécurité a trouvé suspect étant donné des plaintes persistantes et informelles du personnel de terrain sur des problèmes récurrents sérieux. Une investigation a révélé que la classification « mineure » évitait un processus de rapport formel lourd requis pour les sévérités plus élevées, créant une incitation non intentionnelle à sous-classer. L'agence a simplifié ses exigences de rapport formel pour toutes les sévérités et a explicitement protégé le personnel du blâme pour le rapport honnête de sévérité, et les données d'incident ultérieures ont montré un taux plus précis, et substantiellement plus élevé, de perturbations authentiquement significatives, donnant enfin à la direction une image honnête contre laquelle prioriser l'investissement en infrastructure.

## Argumentaire économique : motivations, ROI et TCO

Le retour de métriques d'incident authentiquement sans blâme, bien classées, et décomposées par phase est des données honnêtes qui conduisent réellement une amélioration systémique, plutôt qu'une image réconfortante mais fausse produite par le sous-rapport ou la mauvaise classification conduits par la peur. L'exemple de l'entreprise de paiements ci-dessus le montre concrètement : une correction culturelle, pas un investissement d'outillage, a résolu ce que la direction avait mal diagnostiqué comme un problème technique de détection.

Le coût total de possession est principalement un investissement culturel et de processus : un engagement soutenu de la direction envers la pratique sans blâme, des critères de classification de sévérité documentés et audités, et la discipline de suivre les éléments d'action de post-mortem jusqu'à l'achèvement. Cet investissement coûte moins que l'alternative, un programme de métriques d'incident qui produit des données faussement assurées parce que la peur a corrompu chaque entrée qui y va.

## Antipatrons et pièges

- **Revue d'incident orientée blâme :** corrompt l'honnêteté de rapport, la vitesse d'accusé de réception, et la classification de sévérité pour chaque incident futur.
- **Suivre seulement un chiffre de temps de réponse mélangé :** cache quelle phase spécifique, détection, accusé de réception, résolution, est réellement le problème.
- **Classification de sévérité incohérente entre équipes :** rend les données d'incident à l'échelle de l'organisation peu fiables pour la comparaison.
- **Revoir la fréquence d'incident et le MTTR isolément :** manque l'image combinée et honnête que le signal apparié fournit.
- **Un processus de post-mortem qui produit de l'intuition mais aucun élément d'action complété :** gaspille l'apprentissage organisationnel que le processus est censé capturer.
- **Une politique sans blâme énoncée mais pas réellement vécue par la direction :** produit la même corruption de données conduite par la peur qu'une culture ouvertement orientée blâme.

## Modèle de maturité

- **Niveau 1, Initiation :** La réponse aux incidents est informelle, le rapport est incohérent, et une culture propice au blâme décourage activement le rapport honnête.
- **Niveau 2, Développement :** Un certain suivi d'incident existe, mais la classification de sévérité est incohérente et la pratique sans blâme est énoncée mais pas vécue de manière cohérente.
- **Niveau 3, Standardisation :** Les métriques d'incident décomposées par phase avec une classification de sévérité cohérente et documentée sont suivies à l'échelle de l'organisation, avec une pratique de post-mortem authentiquement sans blâme.
- **Niveau 4, Gestion :** La fréquence d'incident et le MTTR sont revus ensemble, les éléments d'action de post-mortem sont suivis jusqu'à l'achèvement, et la classification est périodiquement auditée pour la cohérence.
- **Niveau 5, Orchestration :** L'organisation a un historique démontré et soutenu de pratique sans blâme produisant des données honnêtes et de véritables corrections systémiques, et les métriques d'incident informent directement et de manière fiable les décisions d'investissement de fiabilité.

## Idées pour la discussion

1. Notre processus de post-mortem survivrait-il à un test honnête de s'il est authentiquement sans blâme ?
2. Quelle est la répartition de phase, détection, accusé de réception, résolution, de notre incident récent le plus lent ?
3. Deux équipes classeraient-elles la sévérité de notre dernier incident significatif de la même manière ?
4. Quel pourcentage de nos éléments d'action de post-mortem récents ont réellement été complétés ?
5. La peur du blâme a-t-elle déjà façonné comment un incident a été rapporté ou discuté dans notre équipe ?

## Points clés à retenir

- **La culture de post-mortem sans blâme est un prérequis** pour des données d'incident dignes de confiance ; la peur du blâme corrompt le rapport, la vitesse d'accusé de réception, et la classification pareillement.
- Décomposez le temps de réponse en phases de **détection, d'accusé de réception, et de résolution**, chacune pointant vers une correction différente.
- Classez la sévérité avec des **critères cohérents, documentés, et audités**, reflétant la discipline de défaut échappé du sujet 5.1.
- Revoyez la **fréquence d'incident et le MTTR ensemble**, jamais isolément, la même discipline d'association que les métriques de stabilité DORA.
- Suivez les **éléments d'action de post-mortem jusqu'à l'achèvement** ; la métrique est un sous-produit de la bonne pratique, pas son objectif.

## Sources et lectures complémentaires

- *Site Reliability Engineering: How Google Runs Production Systems*, par Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds. (pratique de post-mortem sans blâme et métriques d'incident).
- *The Site Reliability Workbook*, par Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, and Stephen Thorne, eds. (conseils pratiques de réponse à l'incident et de post-mortem).
- *The Field Guide to Understanding Human Error*, par Sidney Dekker (l'argument fondateur pour l'investigation systémique et sans blâme de défaillance).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy Engineering Blog (2012) : une articulation précoce et influente de la pratique sans blâme dans les opérations logicielles.
