# 2.6 Temps de cycle et ses composantes

## Vue d'ensemble et motivation

Le **temps de cycle** est la décomposition interne du temps de flux d'un changement (chapitre 2.4) en ses étapes d'ingénierie constitutives : temps de codage, temps de revue, temps de test et temps de déploiement, parfois divisé davantage en temps de prise en charge (combien de temps un changement attend avant que quiconque ne commence à y travailler) et temps actif (combien de temps cela prend une fois que quelqu'un le fait). Là où le temps de flux vous donne un chiffre unique pour combien de temps un changement prend de bout en bout à travers tout le flux de valeur, le [temps de cycle](https://en.wikipedia.org/wiki/Cycle_time) vous dit où ce temps va réellement une fois qu'il atteint l'ingénierie, qui est la couche diagnostique que le chapitre 2.4 a promise se trouver sous son propre chiffre sommaire.

Cette distinction importe parce que « le temps d'exécution est trop long » n'est pas actionnable en soi. Une équipe dont le temps d'exécution est dominé par le temps de codage a besoin d'une intervention différente d'une équipe dont le temps d'exécution est dominé par une file de revue de trois jours, qui a besoin encore d'une intervention différente d'une équipe perdant la plupart de son temps à une suite de tests lente et instable. Sans décomposition du temps de cycle, les équipes tendent à deviner le goulot d'étranglement, et la supposition est fausse assez souvent pour que corriger la mauvaise étape gaspille un effort réel pendant que la contrainte réelle reste intouchée.

Pour les grandes équipes, la décomposition du temps de cycle est ce qui transforme une régression du temps d'exécution à l'échelle de l'organisation d'un mystère en un problème spécifique et adressable. Quand des dizaines d'équipes partagent une infrastructure commune, un goulot d'étranglement de revue partagé ou un pipeline CI lent partagé peut tirer identiquement vers le bas le temps d'exécution de chaque équipe, et seule une comparaison inter-équipes du temps de cycle révèle cette cause racine partagée, plutôt que chaque équipe devinant indépendamment sa propre explication locale.

## Principes clés

- **Le temps de cycle explique le temps d'exécution ; il ne le remplace pas.** Rapportez les deux ensemble, avec le temps de cycle comme diagnostic et le temps d'exécution comme résumé.
- **Le temps d'attente domine généralement le temps actif.** La plupart du délai dans la livraison de logiciel vient du travail restant inactif dans une file, pas de l'effort actif (le chapitre 2.5 couvre cela directement à travers l'efficacité de flux).
- **Décomposez par étape avant de proposer une correction.** Une correction visant la mauvaise étape gaspille un effort et peut démoraliser une équipe à qui on demande de « travailler plus vite » alors que le vrai goulot d'étranglement était ailleurs.
- **Un goulot d'étranglement partagé à travers de nombreuses équipes est une opportunité d'investissement de plateforme,** pas seulement une série de problèmes d'équipes individuelles.
- **Les données de temps de cycle sont exposées aux mêmes risques de manipulation que le temps de flux** (chapitre 2.4) : surveillez les limites d'étapes qui changent tranquillement pour flatter un chiffre.

## Recommandations

### Instrumentez chaque limite d'étape explicitement

Décomposez le parcours d'un changement en étapes nommées avec des limites claires et instrumentables : codage (premier commit jusqu'à l'ouverture de la demande de tirage), prise en charge (ouverture de la demande de tirage jusqu'à la première revue), revue (première revue jusqu'à l'approbation), et déploiement (approbation jusqu'à la production). Capturez les horodatages pour chaque transition automatiquement depuis les événements de contrôle de version et de CI/CD, pas depuis un suivi d'étape auto-déclaré, appliquant le même principe d'instrumentation-plutôt-qu'auto-déclaration du chapitre 1.5.

### Séparez le temps d'attente du temps actif au sein de chaque étape

Au sein de la revue, par exemple, distinguez le temps qu'une demande de tirage reste intouchée en attendant qu'un réviseur commence (temps d'attente) du temps qu'une conversation de revue active prend une fois qu'elle commence (temps actif). Cette distinction révèle généralement que le coût dominant est la mise en file, pas l'effort, ce qui pointe vers une correction très différente (plus de capacité de réviseurs, meilleure notification, demandes de tirage plus petites à revoir) qu'une correction visant à rendre les conversations de revue elles-mêmes plus rapides.

### Cherchez un goulot d'étranglement partagé avant de diagnostiquer équipe par équipe

Quand plusieurs équipes montrent la même étape comme leur délai dominant, un pipeline CI partagé lent, un pool de revue partagé surchargé, un train de version partagé peu fréquent, cette cause partagée est une opportunité d'investissement au niveau de la plateforme, pas une série de problèmes locaux non liés. Agrégez les données de temps de cycle à travers les équipes spécifiquement pour chercher ce schéma avant de supposer que le goulot d'étranglement de chaque équipe est unique à cette équipe.

### Utilisez le temps de cycle pour établir des cibles d'amélioration réalistes et spécifiques à l'étape

Plutôt qu'une cible unique « réduire le temps d'exécution de 20 % », qui ne donne à une équipe aucune orientation sur où se concentrer, utilisez la décomposition du temps de cycle pour établir une cible spécifique à l'étape : « réduire le temps d'attente médian de revue de deux jours à quatre heures ». Un objectif spécifique et ciblé par étape est à la fois plus facile pour une équipe à actionner et plus facile à vérifier comme réellement atteint par un vrai changement de processus plutôt qu'un changement non lié ailleurs.

### Surveillez la manipulation des limites d'étapes

Tout comme les points de départ et de fin du temps de flux peuvent dériver (chapitre 2.4), les limites d'étapes individuelles de temps de cycle peuvent changer de manières qui flattent le chiffre d'une étape spécifique sans aucune véritable amélioration, par exemple, marquer une revue « commencée » au moment où un réviseur est assigné plutôt que quand il commence réellement à lire le changement. Auditez périodiquement l'instrumentation des limites d'étapes contre sa définition documentée.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Temps de cycle grossier (deux ou trois étapes) | Simple à instrumenter et expliquer | Peut ne pas cibler le goulot d'étranglement réel assez précisément pour agir |
| Temps de cycle fin (nombreuses étapes, division attente contre actif) | Diagnostic précis, cibles actionnables spécifiques à l'étape | Plus d'effort d'instrumentation ; plus de chiffres à maintenir et expliquer |
| Revue de temps de cycle équipe par équipe | Adaptée au flux de travail réel de chaque équipe | Peut manquer un goulot d'étranglement partagé inter-équipes caché derrière des chiffres locaux similaires |
| Revue de temps de cycle agrégée inter-équipes | Révèle les goulots d'étranglement partagés au niveau de la plateforme | Nécessite des définitions d'étapes standardisées à travers les équipes pour être significative |

La tension centrale est **précision diagnostique contre coût d'instrumentation**. Un suivi de temps de cycle plus fin donne un diagnostic plus actionnable mais coûte plus à construire et maintenir, et ajoute plus de chiffres qu'une équipe doit comprendre et en qui faire confiance. Résolvez la tension en commençant grossier (codage, revue, déploiement) et en ajoutant des divisions plus fines, temps d'attente contre temps actif au sein d'une étape spécifique, seulement une fois que cette étape est confirmée comme un goulot d'étranglement authentique et récurrent valant l'investissement d'instrumentation supplémentaire.

## Questions à discuter avec votre équipe

1. **Si le temps d'exécution régressait aujourd'hui, pourrions-nous dire en une heure quelle étape spécifique en était responsable, en utilisant des données plutôt que des suppositions ?** C'est le test central de si votre instrumentation de temps de cycle sert réellement son objectif diagnostique. Si la réponse honnête est non, cet écart vaut la peine d'être comblé avant que la prochaine régression ne se produise.

2. **Au sein de notre étape de goulot d'étranglement dominante, quelle part du délai est du temps d'attente contre du temps actif ?** La plupart des équipes supposent que l'effort actif est la contrainte avant de vérifier, alors que la mise en file est généralement le plus grand coût. Rassemblez la division réelle pour votre étape la plus lente et voyez si la supposition tient.

3. **Plusieurs équipes partagent-elles la même étape de goulot d'étranglement dominante, suggérant une correction au niveau de la plateforme plutôt qu'au niveau de l'équipe ?** Agrégez vos données de temps de cycle à travers les équipes et cherchez explicitement ce schéma avant de supposer que la lenteur de chaque équipe est causée localement.

4. **Avons-nous établi des cibles d'amélioration spécifiques à l'étape, ou seulement une cible globale unique de temps d'exécution sans orientation sur où se concentrer ?** Une cible vague laisse une équipe deviner où investir l'effort ; une cible spécifique à l'étape non. Vérifiez vos objectifs actuels contre cette distinction.

5. **Une limite d'étape de temps de cycle dans notre instrumentation a-t-elle déjà dérivé de sa définition documentée dans le temps ?** Les limites d'étapes sont exposées au même risque de dérive définitionnelle que le temps de flux lui-même (chapitre 2.4). Auditez un échantillon d'événements de transition d'étape récents contre la définition écrite.

6. **Comment une culture centrée sur la revue contre une culture centrée sur la confiance se manifeste-t-elle différemment dans nos données de temps de cycle ?** Une équipe avec une revue très approfondie et à plusieurs tours montrera un temps d'étape de revue plus long qu'une équipe qui fait confiance aux fusions à approbation unique ; discutez si votre équilibre actuel reflète un choix délibéré ou un défaut non examiné.

## Regard sectoriel

**Startup.** Le temps de cycle est généralement dominé par le temps de codage plutôt que les étapes de revue ou de déploiement, simplement parce que le processus est minimal. À mesure que l'équipe grandit au-delà d'une poignée d'ingénieurs, commencez à surveiller spécifiquement le temps d'attente de revue, puisque c'est généralement la première étape à ralentir à mesure que le travail de plus de personnes doit passer par moins de réviseurs disponibles.

**Petite entreprise.** L'analytique de base de la plateforme de contrôle de version expose généralement assez de chronométrage au niveau de l'étape (temps jusqu'à la première revue, temps jusqu'à la fusion) sans instrumentation sur mesure. Concentrez-vous sur l'étape de revue en premier, puisque c'est le goulot d'étranglement précoce le plus commun et le plus facile à corriger avec un petit changement de processus comme une rotation de réviseurs.

**Grande entreprise.** Les goulots d'étranglement partagés à travers des dizaines d'équipes sont communs et à fort effet de levier à trouver : une seule file CI partagée surchargée ou une étape de revue centrale obligatoire peut tranquillement taxer le temps d'exécution à l'échelle de l'organisation. Investissez spécifiquement dans l'agrégation inter-équipes du temps de cycle pour faire émerger ces contraintes partagées plutôt que de laisser chaque équipe diagnostiquer indépendamment.

**Gouvernement.** Les données de temps de cycle sont un outil fort et concret pour justifier la modernisation de processus auprès de parties prenantes sceptiques, puisque « le temps d'attente de revue moyenne quatre jours à cause d'un seul rôle d'approbation goulot d'étranglement » est un argument bien plus persuasif et spécifique pour l'investissement qu'une affirmation abstraite « notre processus est lent ».

## Exemples

**Grande entreprise.** La direction d'ingénierie d'une entreprise d'infrastructure cloud a remarqué le temps d'exécution grimpant insidieusement à travers presque chaque équipe simultanément. L'agrégation inter-équipes du temps de cycle a révélé que le temps d'attente de revue, pas le temps de revue actif, était la cause dominante et partagée : une petite équipe centralisée de revue de sécurité était devenue un goulot d'étranglement à mesure que le nombre d'équipes nécessitant leur validation grandissait plus vite que l'équipe elle-même. Élargir et former un pool plus large de réviseurs certifiés en sécurité, plutôt que de demander aux équipes individuelles de coder ou tester d'une manière ou d'une autre plus vite, a résolu le goulot d'étranglement partagé et a ramené le temps d'exécution en baisse à travers l'ensemble en un trimestre.

**Gouvernement.** L'équipe de services numériques d'un gouvernement d'État était sous pression pour réduire le temps d'exécution, et a initialement répondu en demandant aux ingénieurs de travailler plus vite, un instinct naturel mais finalement peu utile. La décomposition du temps de cycle a montré que le temps de codage actif avait à peine changé d'année en année ; presque toute la régression venait d'une file croissante dans une étape obligatoire de revue d'architecture introduite dix-huit mois plus tôt comme mesure de conformité. L'équipe a reconçu cette revue en un processus plus léger et à niveaux de risque pour les changements à faible risque, réduisant substantiellement le temps d'attente de revue tout en préservant la rigueur de revue complète pour les changements authentiquement à haut risque.

## Argumentaire économique : motivations, ROI et TCO

Le retour de la décomposition du temps de cycle est un investissement ciblé et efficace : une organisation qui sait exactement quelle étape est le goulot d'étranglement peut corriger cette étape spécifique plutôt que de répartir l'effort finement à travers tout un processus dans l'espoir que quelque chose aide. L'exemple de revue de sécurité ci-dessus est typique : une correction précisément ciblée, élargissant une ressource spécifique goulot d'étranglement, a résolu un problème à l'échelle de l'organisation bien plus économiquement qu'une initiative large et non ciblée « accélérer la livraison » ne l'aurait fait.

Le coût total de possession est l'effort d'instrumentation pour capturer fiablement les horodatages au niveau de l'étape et la discipline continue d'auditer périodiquement les limites d'étapes pour la dérive. Ce coût vaut la peine parce que l'alternative, deviner les goulots d'étranglement et corriger la mauvaise étape, gaspille bien plus d'effort d'ingénierie dans le temps que l'instrumentation elle-même ne coûte.

## Antipatrons et pièges

- **Réagir à une régression de temps d'exécution sans diagnostic de temps de cycle :** mène fréquemment à corriger la mauvaise étape.
- **Supposer que l'effort actif, pas le temps d'attente, est le coût dominant :** généralement faux ; la mise en file domine dans la plupart des pipelines de livraison réels (chapitre 2.5).
- **Manquer un goulot d'étranglement partagé inter-équipes en ne revoyant le temps de cycle qu'équipe par équipe :** laisse une correction de plateforme à fort effet de levier non découverte.
- **Établir une cible globale vague de temps d'exécution sans orientation spécifique à l'étape :** laisse les équipes deviner où concentrer l'effort.
- **Dérive définitionnelle des limites d'étapes :** flatte le chiffre d'une étape spécifique sans véritable amélioration.
- **Instrumenter chaque étape fine possible avant de confirmer qu'une seule d'entre elles est un véritable goulot d'étranglement :** gaspille l'effort d'instrumentation sur un détail qui n'informe pas encore une décision.

## Modèle de maturité

- **Niveau 1, Initiation :** Le temps de cycle n'est pas décomposé du tout ; les équipes devinent les goulots d'étranglement quand le temps d'exécution régresse.
- **Niveau 2, Développement :** Certaines équipes suivent un chronométrage d'étape grossier informellement, mais il n'y a pas d'instrumentation cohérente ni de comparaison inter-équipes.
- **Niveau 3, Standardisation :** Les limites d'étapes sont instrumentées de manière cohérente à l'échelle de l'organisation, avec le temps d'attente séparé du temps actif dans les étapes de goulot d'étranglement dominantes.
- **Niveau 4, Gestion :** L'agrégation inter-équipes du temps de cycle fait activement émerger les goulots d'étranglement partagés ; les cibles d'amélioration spécifiques à l'étape remplacent les objectifs globaux vagues de temps d'exécution.
- **Niveau 5, Orchestration :** Les données de temps de cycle pilotent directement la priorisation d'investissement de plateforme, et l'organisation peut pointer vers des corrections spécifiques et ciblées, un pool de revue élargi, un pipeline partagé plus rapide, qui ont amélioré de manière mesurable le temps d'exécution à travers de nombreuses équipes à la fois.

## Idées de discussion

1. Quelle est notre étape de goulot d'étranglement dominante actuelle, et quelle confiance avons-nous dans cette réponse ?
2. Quelle part du temps de cette étape de goulot d'étranglement est du temps d'attente contre du temps actif ?
3. Certaines de nos équipes partagent-elles le même goulot d'étranglement, suggérant une correction au niveau de la plateforme ?
4. Quand avons-nous établi pour la dernière fois une cible d'amélioration de livraison spécifique à l'étape, plutôt que globale ?
5. Une définition de limite d'étape dans notre outillage a-t-elle déjà changé sans documentation ?

## Points clés à retenir

- Le temps de cycle **décompose le temps de flux** en étapes d'ingénierie, codage, revue, test, déploiement, et est la couche diagnostique sous ce chiffre sommaire.
- Séparez le **temps d'attente du temps actif** au sein de chaque étape ; la mise en file domine généralement l'effort actif (chapitre 2.5).
- Cherchez les **goulots d'étranglement partagés à travers les équipes** avant de supposer qu'un ralentissement est spécifique à une équipe ; une cause partagée est souvent une opportunité d'investissement de plateforme.
- Établissez des **cibles d'amélioration spécifiques à l'étape**, pas des objectifs globaux vagues, pour que les équipes sachent exactement où se concentrer.
- Les limites d'étapes sont exposées au même risque de **dérive définitionnelle** que le temps de flux lui-même ; auditez-les périodiquement.
- Le chapitre 2.7 donne les mathématiques sous-jacentes, la loi de Little, pour pourquoi le travail en cours et le temps de cycle bougent ensemble.

## Sources et lectures complémentaires

- *The Principles of Product Development Flow*, par Donald G. Reinertsen (théorie des files d'attente et raisonnement sur la taille de lot sous-jacents à l'analyse du temps de cycle).
- *Actionable Agile Metrics for Predictability*, par Daniel S. Vacanti (mesure du temps de cycle et basée sur le flux pour la livraison de logiciel).
- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble et Gene Kim (temps d'exécution et sa relation avec la performance de livraison).
- *The Goal*, par Eliyahu M. Goldratt (théorie des contraintes, et le principe de trouver et corriger le goulot d'étranglement réel plutôt que d'optimiser partout).
