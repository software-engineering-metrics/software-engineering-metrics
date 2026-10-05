# 2.9 Métriques des demandes de tirage et de la revue de code

## Vue d'ensemble et motivation

La [revue de code](https://en.wikipedia.org/wiki/Code_review) est généralement le plus grand contributeur unique de temps d'attente dans la décomposition de temps de cycle du sujet 2.6, et c'est aussi l'étape la plus directement sous le propre contrôle d'une équipe pour s'améliorer, contrairement à un goulot d'étranglement de plateforme partagé ou une dépendance externe. Ce sujet couvre les métriques spécifiques qui vivent à l'intérieur de l'étape de revue : temps jusqu'à la première revue, taille de la demande de tirage, nombre d'itérations de revue, et distribution de la charge des réviseurs, et comment les utiliser pour améliorer la vitesse de revue sans sacrifier le bénéfice de qualité réel que la revue est censée fournir.

Le risque auquel ce sujet est le plus attentif est un que ce livre n'a pas encore couvert directement : optimiser la vitesse de revue peut tranquillement éroder la qualité de revue si poursuivi négligemment. Une équipe qui réduit de moitié son temps jusqu'à la première revue en approuvant tout avec une approbation de pure forme a amélioré une métrique tout en détruisant la valeur réelle de la pratique. Chaque recommandation de ce sujet est écrite avec ce compromis en vue, parce que les métriques de demandes de tirage sont parmi les plus faciles de ce livre à manipuler d'une manière qui a l'air bien sur un tableau de bord tout en rendant la base de code sous-jacente mesurablement pire.

Pour les grandes équipes, les métriques de revue révèlent des problèmes d'équilibrage de charge autrement invisibles : un petit nombre d'ingénieurs seniors absorbant une part disproportionnée de la charge de revue, une équipe spécifique ou une zone de base de code où les revues stagnent constamment, ou un schéma de demandes de tirage surdimensionnées qui rendent une revue approfondie pratiquement impossible indépendamment de la diligence du réviseur. Ces schémas s'accumulent à l'échelle bien plus que sur une petite équipe, où tout le monde peut voir le déséquilibre directement sans avoir besoin d'une métrique pour le faire émerger.

## Principes clés

- **Le temps jusqu'à la première revue est généralement le plus grand levier, pas l'exhaustivité de la revue elle-même.** La plupart du délai vient d'une demande de tirage attendant d'être regardée, pas de la conversation de revue prenant du temps une fois qu'elle commence.
- **Les demandes de tirage plus petites sont revues plus vite et plus en profondeur, pas seulement plus vite.** La taille est un point de levier à la fois pour la vitesse et la qualité simultanément.
- **La vitesse de revue et la qualité de revue ne sont pas automatiquement en tension, mais elles peuvent être échangées négligemment.** Protégez-vous explicitement contre cet échange.
- **Le déséquilibre de charge des réviseurs est commun et généralement invisible sans métrique.** Un petit nombre de personnes absorbe souvent une part disproportionnée.
- **Ces métriques sont exposées au risque de manipulation par approbation de pure forme.** Une approbation rapide sans examen réel défait tout le but de la revue.

## Recommandations

### Suivez le temps jusqu'à la première revue comme métrique de vitesse primaire

Mesurez l'intervalle depuis l'ouverture d'une demande de tirage jusqu'au premier commentaire ou approbation substantielle d'un réviseur, instrumenté automatiquement depuis votre plateforme de contrôle de version. C'est généralement le contributeur dominant de temps d'attente au sein de l'étape de revue (sujet 2.5, sujet 2.6), et l'améliorer, à travers des normes d'assignation de revue plus claires, des pratiques de notification, ou des blocs de temps de revue dédiés, produit typiquement la plus grande amélioration unique du temps de cycle global disponible pour une équipe.

### Suivez la taille des demandes de tirage et encouragez activement des changements plus petits

Mesurez les lignes changées ou les fichiers touchés par demande de tirage, et traitez une taille médiane persistamment grande comme un signal valant la peine d'être adressé directement. Les demandes de tirage plus petites sont revues plus vite, revues plus en profondeur (un réviseur peut réellement tenir tout le changement dans sa tête), et plus faciles à annuler si quelque chose tourne mal, se connectant directement au principe de taille de lot derrière la fréquence de déploiement dans le sujet 2.10. Encouragez la division de grands changements en une séquence de demandes de tirage plus petites et revisables indépendamment partout où le travail le permet.

### Surveillez explicitement la distribution de charge des réviseurs

Suivez le nombre de revues complétées par personne sur une fenêtre glissante, et surveillez spécifiquement un petit nombre de personnes absorbant une part disproportionnée. Ce schéma est commun, retombe souvent sur les ingénieurs les plus seniors ou les plus fiables, et crée à la fois un goulot d'étranglement (leur disponibilité plafonne le débit de revue de toute l'équipe) et un risque d'épuisement professionnel (le sujet 3.2 couvre les métriques de bien-être plus en profondeur). Faites tourner délibérément la responsabilité de revue plutôt que de la laisser se concentrer par défaut autour de qui répond le plus vite.

### Protégez-vous explicitement contre le risque de manipulation par approbation de pure forme

Jumelez le temps jusqu'à la première revue avec un signal de qualité : le taux de défauts ou d'incidents retracés jusqu'à des changements approuvés sans aucun commentaire de revue, ou le taux de corrections post-fusion nécessaires pour du code récemment revu. Une équipe qui améliore la vitesse de revue en approuvant sans examen réel devrait voir ce garde-fou se dégrader, ce qui est exactement le principe de jumelage du sujet 1.2 appliqué à cette famille de métriques spécifique. Ne poursuivez jamais la vitesse de revue sans cette contre-métrique en vue.

### Utilisez le nombre d'itérations de revue pour repérer la friction, pas pour juger les individus

Le nombre de tours de revue qu'une demande de tirage traverse avant la fusion peut signaler une friction authentique, des exigences peu claires, un désaccord sur l'approche, des attentes de style incohérentes, valant la peine d'être investigué au niveau du processus. Évitez d'utiliser ce chiffre pour juger directement des auteurs ou réviseurs individuels ; un nombre d'itérations élevé est plus souvent un signal système ou de communication qu'un signal personnel, et le traiter comme une fiche d'évaluation individuelle risque exactement la dérive évaluative contre laquelle met en garde le sujet 1.1.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Optimiser purement pour le temps jusqu'à la première revue | Signal rapide, clair, facile à instrumenter | Peut inciter à une revue superficielle, d'approbation de pure forme si non surveillée |
| Optimiser purement pour la réduction de taille de demande de tirage | Améliore à la fois la vitesse et l'exhaustivité simultanément | Tout le travail ne se divise pas proprement en petits incréments |
| Faire tourner la charge de revue uniformément | Réduit le risque de goulot d'étranglement et d'épuisement | Peut ralentir la revue pour du code spécialisé et difficile à revoir nécessitant une expertise spécifique |
| Concentrer la revue parmi les ingénieurs seniors | Expertise de domaine profonde appliquée de manière cohérente | Crée un goulot d'étranglement et un risque d'épuisement avec le temps |

La tension centrale est **vitesse contre profondeur d'examen**. Chaque technique de ce sujet pour accélérer la revue, réponse initiale plus rapide, demandes de tirage plus petites, charge de réviseurs plus distribuée, porte un certain risque d'échanger un examen réel si poursuivie sans le garde-fou de qualité que recommande ce sujet. Résolvez la tension en jumelant chaque métrique de vitesse avec un signal de qualité, suivi sur la même période, pour qu'une équipe puisse distinguer une véritable amélioration de processus d'un standard de revue s'érodant tranquillement.

## Questions à discuter avec votre équipe

1. **Quel est notre temps réel jusqu'à la première revue, et quelle part de notre temps de cycle global l'étape de revue consomme-t-elle ?** Rassemblez le chiffre réel plutôt que de vous fier à l'impression ; le temps d'attente de revue est souvent plus grand que ce que les équipes supposent, précisément parce qu'il est facile de sous-estimer le temps passé à attendre plutôt que de travailler activement.

2. **Quelle est notre taille médiane de demande de tirage, et de combien notre délai de revue se réduirait-il si cette taille baissait ?** Les grandes demandes de tirage sont à la fois plus lentes à revoir et plus susceptibles de recevoir une revue superficielle simplement parce qu'un réviseur ne peut pas tenir tout le changement dans sa tête à la fois. Regardez votre distribution de taille réelle, pas seulement la médiane.

3. **La charge de revue est-elle concentrée parmi un petit nombre de personnes, et qu'arriverait-il à notre débit de revue si l'une d'elles était indisponible pendant deux semaines ?** Cette question fait émerger à la fois un risque de goulot d'étranglement et un risque d'épuisement en même temps. Rassemblez de vraies données de charge de réviseurs plutôt que de vous fier à l'impression.

4. **Avons-nous déjà amélioré une métrique de vitesse de revue d'une manière qui, à la réflexion, a réduit l'examen réel ?** Soyez honnêtes ici ; c'est exactement le risque d'approbation de pure forme que nomme ce sujet, et il est facile d'y glisser sans aucune décision délibérée de le faire.

5. **Que signale généralement un nombre élevé d'itérations de revue dans notre équipe : un désaccord authentique, des exigences peu claires, ou des attentes de style incohérentes ?** Regardez un échantillon de demandes de tirage avec des nombres d'itérations inhabituellement élevés et diagnostiquez le schéma réel, plutôt que de supposer qu'il reflète mal sur l'auteur ou le réviseur.

6. **Avons-nous un garde-fou de qualité jumelé avec nos métriques de vitesse de revue, ou suivons-nous la vitesse isolément ?** Si la réponse honnête est qu'aucun garde-fou de ce genre n'existe, c'est un écart valant la peine d'être comblé avant de pousser la vitesse de revue plus loin, selon le principe de jumelage du sujet 1.2.

## Regard sectoriel

**Startup.** La revue est souvent rapide par défaut avec une petite équipe, parfois presque trop rapide, revue à approbateur unique avec un examen minimal parce que tout le monde fait confiance à tout le monde. Le risque à surveiller à mesure que l'équipe grandit est que la qualité de revue ne s'échelonne pas avec la taille de l'équipe, puisque la confiance informelle qui fonctionnait pour cinq ingénieurs ne fonctionne pas automatiquement pour cinquante.

**Petite entreprise.** La plupart des plateformes de contrôle de version rapportent des statistiques de temps jusqu'à la fusion et de nombre de revues dès l'installation ; utilisez-les plutôt que de construire une instrumentation sur mesure. La principale discipline valant la peine d'être adoptée est simplement de remarquer si la charge de revue s'est tranquillement concentrée sur une ou deux personnes à mesure que l'équipe a grandi.

**Grande entreprise.** Le déséquilibre de charge de réviseurs et les goulots d'étranglement de connaissance spécialisée sont particulièrement communs ici, où une expertise de domaine profonde dans un système critique peut concentrer la responsabilité de revue sur un petit groupe indépendamment de la taille de l'équipe. Investissez dans le partage de connaissance délibéré et la rotation de revue pour répandre l'expertise, réduisant à la fois le goulot d'étranglement et le risque de facteur autobus de cette expertise vivant dans trop peu de personnes.

**Gouvernement.** Les processus de revue ici portent souvent un poids de conformité aux côtés des objectifs de qualité, ce qui peut rendre les demandes de tirage plus grandes et les revues plus lentes par conception. Là où de véritables exigences de conformité demandent une revue approfondie, concentrez l'effort d'amélioration sur la réduction du temps d'attente (assignation de revue plus rapide, triage plus clair) plutôt que de compromettre la profondeur réelle de la revue, et documentez explicitement le compromis si l'examen doit rester lourd pour des raisons réglementaires.

## Exemples

**Grande entreprise.** L'organisation d'ingénierie d'une entreprise de cybersécurité a trouvé qu'une poignée d'ingénieurs principaux complétaient plus de 40 % de toutes les revues de code à travers une organisation de deux cents personnes, un déséquilibre que personne n'avait mesuré directement jusqu'à ce que des données de charge de réviseurs soient rassemblées. Cette concentration était à la fois un goulot d'étranglement, puisque la disponibilité de ces ingénieurs plafonnait le débit de revue pour toute l'organisation, et un risque d'épuisement signalé séparément par un sondage d'engagement (sujet 3.2). L'organisation a introduit un programme structuré de rotation de revue jumelé avec des sessions ciblées de partage de connaissance, et en deux trimestres la charge de revue s'était répandue à travers un groupe bien plus large, avec le temps jusqu'à la première revue s'améliorant comme effet secondaire direct du goulot d'étranglement réduit.

**Gouvernement.** L'équipe d'ingénierie d'une autorité fiscale, sous pression pour améliorer la vitesse de livraison, a établi une cible de réduire de moitié le temps jusqu'à la première revue. En un trimestre, la cible a été atteinte, mais un audit de qualité subséquent a trouvé une forte hausse des demandes de tirage de correction de défauts post-fusion, concentrées dans des changements qui avaient été approuvés avec un seul commentaire bref. La correction de l'équipe a jumelé la cible de vitesse avec un garde-fou de qualité explicite, le taux de corrections post-fusion nécessaires dans les deux semaines d'une revue, et a reformé l'équipe sur ce qu'une revue substantielle exigeait réellement, restaurant un examen authentique tout en gardant la plupart de l'amélioration de vitesse venue d'une meilleure assignation de revue et de tailles de demandes de tirage plus petites.

## Argumentaire économique : motivations, ROI et TCO

Le retour de métriques de revue bien gérées est une livraison plus rapide sans sacrifier la qualité, ce qui est une combinaison rare : la plupart des améliorations de livraison échangent la vitesse contre le risque quelque part, mais les améliorations de l'étape de revue, demandes de tirage plus petites, meilleure distribution de charge, réponse initiale plus rapide, améliorent authentiquement les deux simultanément quand poursuivies avec le garde-fou de qualité que recommande ce sujet. L'exemple de cybersécurité ci-dessus est typique : corriger un goulot d'étranglement a amélioré la vitesse pendant que la qualité de revue sous-jacente, si quoi que ce soit, s'est améliorée à mesure que l'expertise se répandait plus largement.

Le coût total de possession est faible : la plupart de ces métriques viennent directement des données de plateforme de contrôle de version existantes avec une instrumentation supplémentaire minimale, et les changements de processus vers lesquels elles pointent, rotation de revue, encourager des demandes de tirage plus petites, coûtent principalement de la discipline plutôt qu'un investissement d'outillage.

## Antipatrons et pièges

- **Optimiser le temps jusqu'à la première revue sans garde-fou de qualité jumelé :** invite à une approbation de pure forme qui défait le but de la revue.
- **Ignorer la concentration de charge de réviseurs :** crée à la fois un goulot d'étranglement et un risque d'épuisement qui restent invisibles jusqu'à ce qu'ils soient mesurés.
- **Traiter le nombre d'itérations de revue comme une fiche d'évaluation individuelle :** plus souvent un signal système ou de communication qu'un signal personnel.
- **Accepter des demandes de tirage persistamment grandes comme inévitables :** la plupart des grands changements peuvent être divisés plus que les équipes ne le supposent initialement.
- **Appliquer une profondeur de revue uniforme indépendamment du risque du changement :** gaspille l'examen sur des changements à faible risque tout en sous-examinant potentiellement ceux à haut risque.
- **Mesurer la vitesse de revue mais ne jamais vérifier si l'examen réel a décliné à ses côtés :** la manière la plus commune dont cette famille de métriques est manipulée involontairement.

## Modèle de maturité

- **Niveau 1, Initiation :** Les métriques de revue ne sont pas suivies ; la distribution de charge de revue et la taille des demandes de tirage sont invisibles.
- **Niveau 2, Développement :** Certaines données de vitesse de revue existent depuis les valeurs par défaut de la plateforme, mais il n'y a aucun garde-fou de qualité ni gestion active de la charge des réviseurs.
- **Niveau 3, Standardisation :** Le temps jusqu'à la première revue, la taille des demandes de tirage, et la charge des réviseurs sont suivis de manière cohérente, avec un garde-fou de qualité explicite jumelé contre les améliorations de vitesse.
- **Niveau 4, Gestion :** La charge des réviseurs est rééquilibrée activement par rotation et partage de connaissance ; les schémas de nombre d'itérations sont investigués au niveau du processus plutôt qu'au niveau individuel.
- **Niveau 5, Orchestration :** Les métriques de l'étape de revue informent directement l'investissement de processus, et l'organisation peut démontrer une amélioration simultanée à la fois de la vitesse de revue et des résultats de qualité liés à la revue sur une période soutenue.

## Idées de discussion

1. Quel est notre temps médian actuel jusqu'à la première revue, et où ce temps va-t-il réellement ?
2. Notre charge de revue est-elle concentrée sur un petit nombre de personnes, et quel est le risque si l'une d'elles est indisponible ?
3. Avons-nous déjà amélioré la vitesse de revue au coût d'un examen réel, même involontairement ?
4. Quelle est notre taille médiane de demande de tirage, et de combien la plupart des changements pourraient-ils réalistement être plus petits ?
5. Traitons-nous un nombre élevé d'itérations de revue comme un signal système ou un jugement individuel ?

## Points clés à retenir

- Le **temps jusqu'à la première revue** est généralement le plus grand levier unique à l'intérieur de l'étape de revue, plus que la longueur de la conversation de revue elle-même.
- Les **demandes de tirage plus petites** améliorent à la fois la vitesse et l'exhaustivité de revue simultanément.
- Le **déséquilibre de charge des réviseurs** est commun et généralement invisible sans mesure directe ; il crée à la fois un goulot d'étranglement et un risque d'épuisement.
- Jumelez chaque métrique de vitesse de revue avec un **garde-fou de qualité** explicite pour attraper le risque de manipulation par approbation de pure forme auquel cette famille de métriques est particulièrement sujette.
- Utilisez le **nombre d'itérations de revue** pour diagnostiquer la friction au niveau système, pas pour juger les auteurs ou réviseurs individuels.

## Sources et lectures complémentaires

- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble et Gene Kim (pratiques de revue de code et leur relation avec la performance de livraison).
- Recherche *Modern Code Review* par Alberto Bacchelli et Christian Bird (étude empirique des pratiques de revue de code à l'échelle).
- *Peer Reviews in Software: A Practical Guide*, par Karl E. Wiegers (conception du processus de revue et ses compromis).
- *The Principles of Product Development Flow*, par Donald G. Reinertsen (raisonnement sur la taille de lot appliqué au dimensionnement des demandes de tirage).
