# 9.1 Glossaire

Définitions des termes et acronymes utilisés à travers le livre. Chaque entrée nomme le sujet où le terme est introduit en profondeur.

**Arbre de métriques (metric tree).** Une structure connectant une métrique de résultat de haut niveau à travers ses conducteurs jusqu'aux métriques opérationnelles que possèdent les équipes individuelles. Voir sujet 1.3.

**Budget d'erreur (error budget).** Le manque autorisé entre un objectif de niveau de service et une fiabilité de 100 %, traité comme une ressource dépensable. Voir sujet 6.1.

**Cadre SPACE (SPACE framework).** Un cadre à cinq dimensions pour la productivité des développeurs : Satisfaction et bien-être, Performance, Activité, Communication et collaboration, et Efficacité et flux. Voir sujet 3.1.

**Carte de contrôle (control chart).** Un graphique montrant la plage normale de variation d'une métrique dans le temps, utilisé pour distinguer un véritable changement du bruit ordinaire. Voir sujet 1.6.

**Charge de flux (flow load).** Le nombre total d'éléments de flux actuellement actifs ou en attente dans un flux de valeur, le nom du Flow Framework pour le travail en cours. Voir sujet 2.4.

**Complexité cyclomatique (cyclomatic complexity).** Un compte des chemins indépendants à travers le flux de contrôle d'un morceau de code, introduit par Thomas J. McCabe en 1976. Voir sujet 4.1.

**CVSS (Common Vulnerability Scoring System).** Une échelle standardisée pour noter la sévérité d'une vulnérabilité de sécurité. Voir sujet 6.4.

**Défaut échappé (escaped defect).** Un défaut qui atteint la production et affecte un véritable utilisateur, distinct d'un attrapé en revue ou en test. Voir sujet 5.1.

**Dette technique (technical debt).** Le coût accumulé de raccourcis passés dans une base de code, une métaphore pour un compromis gérable, pas un secret honteux. Voir sujet 4.5.

**DevEx (expérience développeur).** Le cadrage plus large et apparenté à SPACE, organisé autour des boucles de rétroaction, de la charge cognitive, et de l'état de flux. Voir sujet 3.7.

**Distribution de flux (flow distribution).** La proportion d'éléments de flux achevés appartenant à chaque type d'élément de flux dans une période donnée. Voir sujet 2.3.

**DORA, métriques (DORA metrics).** Quatre métriques du programme DevOps Research and Assessment : fréquence de déploiement, temps d'exécution pour les changements, taux d'échecs de changement, et temps de récupération de déploiement échoué. Voir sujet 2.10.

**Efficacité de flux (flow efficiency).** Le ratio du temps de travail actif au temps total écoulé pour un morceau de travail se déplaçant à travers un pipeline de livraison. Voir sujet 2.5.

**Élément de flux (flow item).** L'unité de travail du Flow Framework : un élément de fonctionnalité, défaut, risque, ou dette, classé à l'admission. Voir sujet 2.2.

**Facteur bus (bus factor).** Le nombre de personnes qui devraient devenir indisponibles avant qu'un système ou un élément de connaissance ne devienne non maintenable. Un facteur bus de un est un risque sévère. Voir sujet 3.5.

**FinOps.** La discipline consistant à apporter la responsabilité financière à la dépense d'infrastructure cloud variable. Voir sujet 5.4.

**Flow Framework.** Un modèle de gestion, créé par Mik Kersten, qui traite la livraison logicielle comme un flux de valeur et le mesure avec quatre types d'éléments de flux et cinq métriques de flux. Voir sujet 2.1.

**Flux de valeur (value stream).** La séquence de bout en bout d'activités qui transforme une idée en valeur qu'un client reçoit, l'unité de mesure du Flow Framework. Voir sujet 2.1.

**Fréquence de déploiement (deployment frequency).** À quelle fréquence une équipe publie avec succès en production. L'une des quatre métriques DORA. Voir sujet 2.10.

**Loi de Goodhart (Goodhart's law).** Le principe selon lequel quand une mesure devient une cible, elle cesse d'être une bonne mesure. L'idée centrale et directrice de ce livre. Voir sujet 1.2.

**Loi de Little (Little's law).** La preuve que le nombre moyen d'éléments dans une file d'attente stable est égal au taux d'arrivée moyen multiplié par le temps moyen qu'un élément passe dans le système. Appliqué à la livraison, le travail en cours est égal au taux d'arrivée multiplié par le temps de cycle. Voir sujet 2.7.

**Métrique d'activité (activity metric).** Un compte de mouvement d'ingénierie (commits, demandes de tirage, lignes de code) qui mesure le volume, pas la valeur. Voir sujet 3.4.

**Métrique de garde-fou (guardrail metric).** Une contre-métrique appariée qui ne doit pas se dégrader tandis qu'une métrique incitative s'améliore, conçue pour attraper la manipulation. Voir sujet 1.2.

**Métrique vaniteuse (vanity metric).** Une métrique qui monte de manière fiable, a l'air impressionnante, et ne change aucune décision. Voir sujet 1.1.

**Métrique-étoile polaire (north-star metric).** La mesure unique qui capture le mieux la valeur centrale qu'une organisation livre, se trouvant au sommet d'un arbre de métriques. Voir sujet 1.3.

**MTTA (temps moyen d'accusé de réception).** Le temps entre la notification d'un incident et le moment où quelqu'un prend possession de la réponse. Voir sujet 6.2.

**MTTD (temps moyen de détection).** Le temps entre le début réel d'un incident et le moment où quelqu'un remarque qu'il s'est produit. Voir sujet 6.2.

**MTTR (temps moyen de récupération / temps moyen de résolution).** Le temps pour restaurer complètement le service après une défaillance. Utilisé à la fois pour les défaillances causées par déploiement (sujet 2.10) et les incidents généraux (sujet 6.2).

**Point chaud (hotspot).** Un fichier ou module qui est à la fois fréquemment modifié (churn élevé) et hautement complexe, identifié par l'analyse de points chauds. Voir sujet 4.3.

**Pourcentage de complétude et de précision (%C/A).** Le pourcentage d'unités qu'une équipe en aval peut traiter sans avoir besoin de retravail, issu de la cartographie classique de flux de valeur Lean. Voir sujet 2.8.

**Rendement de débit cumulé (rolled throughput yield).** Les chiffres de pourcentage de complétude et de précision de chaque étape d'un flux de valeur multipliés ensemble, révélant comment le retravail se compose à travers un pipeline multi-étapes. Voir sujet 2.8.

**ROI (retour sur investissement).** Le retour financier d'une initiative relativement à son coût, construit ici à partir de preuves de coût et de résultat documentées plutôt que d'hypothèse. Voir sujet 5.5.

**SLI (indicateur de niveau de service).** Un signal directement mesuré de la santé d'un service, tel que la latence ou le taux d'erreur. Voir sujet 6.1.

**SLO (objectif de niveau de service).** La plage cible pour un indicateur de niveau de service. Voir sujet 6.1.

**SRE (ingénierie de fiabilité des sites).** La discipline, pionnière chez Google, consistant à appliquer des approches d'ingénierie logicielle à l'exploitation et à la fiabilité. Voir sujet 6.1.

**Taux d'échecs de changement (change failure rate).** Le pourcentage de déploiements qui causent une défaillance en production nécessitant une remédiation. L'une des quatre métriques DORA. Voir sujet 2.10.

**TCO (coût total de possession).** Le coût complet d'une initiative ou d'un système sur sa durée de vie, incluant la maintenance et l'infrastructure continues, pas seulement le coût initial. Voir sujet 5.5.

**Télémétrie de résultat (outcome telemetry).** Mesure continue et instrumentée de véritables résultats plutôt que de l'activité ou de la production. Voir sujet 7.4.

**Temps de cycle (cycle time).** La décomposition interne du temps d'exécution en étapes : codage, revue, test, et déploiement. Voir sujet 2.6.

**Temps de flux (flow time).** Le temps total écoulé depuis qu'un élément de flux entre dans le flux de valeur jusqu'à sa livraison, couvrant tout le flux de valeur plutôt que seulement l'ingénierie. Voir sujet 2.4.

**Temps de processus (PT).** Le temps réel passé à travailler activement sur une seule unité, distinct du temps passé à attendre, issu de la cartographie classique de flux de valeur Lean. Voir sujet 2.8.

**Temps d'exécution pour les changements (lead time for changes).** Le temps entre le premier commit d'un changement de code et son déploiement réussi en production. L'une des quatre métriques DORA. Voir sujet 2.10.

**Temps takt (takt time).** Le temps maximum acceptable pour compléter une unité de travail afin de correspondre proprement à la demande client, issu de la cartographie classique de flux de valeur Lean. Voir sujet 2.8.

**Test de mutation (mutation testing).** Une technique qui introduit délibérément de petites fautes artificielles dans le code pour vérifier si une suite de tests les attrape réellement, comme complément à la couverture. Voir sujet 4.2.

**Théorie des files d'attente (queueing theory).** L'étude mathématique des files d'attente, appliquée aux pipelines de livraison pour expliquer comment le travail en cours, le taux d'arrivée, et l'utilisation conduisent le temps d'attente. Voir sujet 2.7.

**Travail en cours (WIP) (work in process).** Le compte d'éléments activement travaillés à tout moment donné à travers une équipe ou un système. Voir sujet 2.5.

**Unité économique (unit economics).** Le coût exprimé par unité significative de valeur livrée (par client, par transaction), plutôt que comme un total opaque. Voir sujet 5.4.

**Utilisation (utilization).** La proportion de la capacité disponible d'une ressource qui est occupée, calculée comme le taux d'arrivée divisé par le taux de service. Le temps d'attente croît fortement, pas graduellement, à mesure que l'utilisation approche la capacité complète. Voir sujet 2.7.

**Vélocité de flux (flow velocity).** Le nombre d'éléments de flux achevés sur une période donnée, la mesure de débit du Flow Framework. Voir sujet 2.3.
