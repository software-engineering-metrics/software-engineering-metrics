# 7.2 Mesurer le développement logiciel assisté par IA

## Vue d'ensemble et motivation

Le chapitre 7.1 a établi pourquoi plusieurs métriques existantes ne mesurent plus de manière fiable ce qu'elles mesuraient auparavant sous le développement assisté par IA. Ce chapitre consiste à savoir quoi mesurer à la place : comment savoir, avec de véritables preuves plutôt qu'une impression ou le marketing d'un fournisseur, si l'assistance de codage IA aide réellement votre organisation, et de combien. C'est une question authentiquement importante avec de véritables conséquences budgétaires, les licences d'outillage IA représentent un coût réel et continu, la discipline d'unité économique du chapitre 5.4 s'applique directement, et une organisation qui ne peut pas y répondre avec des preuves soit surpaie pour un outil qui n'aide pas soit sous-investit dans un qui aide authentiquement.

L'approche de ce chapitre s'appuie directement sur le principe résultats-plutôt-que-production du chapitre 1.3, maintenant appliqué spécifiquement à l'évaluation d'outillage IA. L'approche naïve et la plus courante mesure le développement assisté par IA par le volume de production, lignes de code générées, suggestions acceptées, temps économisé par tâche tel qu'auto-rapporté par les développeurs, exactement les métriques contre lesquelles le chapitre 7.1 met en garde comme les plus exposées à ce changement. L'approche plus rigoureuse que ce chapitre recommande mesure les résultats : l'assistance IA a-t-elle authentiquement réduit le temps de cycle sans dégrader la qualité, a-t-elle réduit le temps passé sur un travail répétitif et authentiquement à faible valeur, libérant de la capacité pour un travail à plus forte valeur, et a-t-elle mesurablement affecté les résultats d'affaires et de produit de la Partie 5.

Pour les grandes équipes, bien faire cette mesure détermine si les décisions d'investissement d'outillage IA sont prises sur preuve ou sur affirmations de fournisseur et élan organisationnel. Les organisations de grande entreprise négociant des contrats d'outillage IA à grande échelle ont besoin de véritables preuves de valeur pour justifier la dépense et comparer équitablement les outils concurrents ; les organisations de gouvernement, souvent sous un examen particulier pour les dépenses de technologie, ont besoin d'une méthodologie d'évaluation rigoureuse et défendable avant d'engager des fonds publics dans l'adoption d'outillage IA à l'échelle.

## Principes clés

- **Mesurez l'assistance IA par résultat, pas par volume de production ou statistiques d'usage rapportées par le fournisseur.** La discipline du chapitre 1.3 s'applique avec pleine force ici.
- **Utilisez un véritable [groupe de comparaison](https://en.wikipedia.org/wiki/Treatment_and_control_groups) là où faisable,** pas seulement une comparaison avant-après qu'une référence croissante à l'échelle de l'industrie pourrait confondre.
- **Les économies de temps auto-rapportées sont un signal faible en soi.** Associez-les aux données objectives de temps de cycle et de qualité.
- **Mesurez le coût complet, incluant le temps de revue et de correction,** pas seulement la vitesse de génération.
- **Différentes tâches et différents ingénieurs peuvent voir une valeur d'assistance IA très différente.** Évitez un seul chiffre mélangé à l'échelle de l'organisation qui cache cette variation.

## Recommandations

### Construisez une véritable comparaison, pas seulement un instantané avant-après

Là où faisable, comparez les résultats entre un groupe utilisant l'assistance IA et un groupe comparable ne l'utilisant pas, sur la même période, plutôt que de comparer seulement les chiffres avant-après de votre propre organisation, qui ne peuvent pas distinguer l'effet de l'assistance IA de tout autre changement concurrent (la mise en garde sur les variables confondantes du chapitre 1.6 s'applique directement). Là où un véritable groupe de comparaison est impraticable, comparez au minimum contre une référence historique plus longue (une carte de contrôle, selon le chapitre 1.6) plutôt qu'un instantané avant-après unique vulnérable à la régression vers la moyenne ou des changements concurrents non liés.

### Mesurez le temps de cycle et la qualité ensemble, jamais l'affirmation de vitesse de l'assistance IA seule

Appliquez directement la discipline des chapitres 2.6 et 2.10 : suivez si le travail assisté par IA se déplace plus vite à travers les étapes de temps de cycle, et simultanément si le taux d'échecs de changement ou le taux de défauts échappés (chapitre 5.1) pour ce travail bouge dans la mauvaise direction. Un véritable gain de productivité montre un temps de cycle plus rapide avec une qualité stable ou améliorée ; un faux gain montre un temps de cycle plus rapide avec une qualité en dégradation, exactement l'échange contre lequel le chapitre 7.1 mettait en garde, découvert ici par la même discipline de métrique appariée que ce livre applique tout du long.

### Incluez le temps de revue et de correction dans la comptabilité de coût complète

Le code généré par IA qui est plus rapide à produire mais plus lent à revoir, ou qui nécessite plus de correction et de retravail après la génération initiale, peut ne montrer aucune amélioration nette de temps de cycle une fois le pipeline complet mesuré, même si l'étape initiale de génération de code semblait dramatiquement plus rapide pour l'ingénieur individuel. Mesurez la chaîne de temps de cycle complète (chapitre 2.6), pas seulement l'étape de codage, pour capturer cela honnêtement plutôt que de créditer l'assistance IA sur la base d'un sentiment de vitesse ressenti mais incomplet.

### Traitez les économies de temps auto-rapportées comme une hypothèse de départ, pas une conclusion

L'auto-rapport de développeur « cela m'a économisé une heure » est utile comme signal initial et comme contexte qualitatif (l'approche combinée quantitative-qualitative du chapitre 5.3 s'applique ici aussi), mais il est sujet aux mêmes biais de rappel et de désirabilité contre lesquels le chapitre 1.5 met en garde pour toute donnée auto-rapportée, et il ne dit rien sur le coût de revue ou de correction en aval. Utilisez l'auto-rapport pour générer des hypothèses sur où l'assistance IA aide le plus, puis validez ces hypothèses contre des données objectives de temps de cycle et de qualité avant de tirer une conclusion ferme.

### Segmentez la mesure par type de tâche et évitez un chiffre unique mélangé

L'assistance de codage IA fournit probablement une valeur très différente pour des tâches répétitives et bien comprises que pour une résolution de problème authentiquement nouvelle et complexe. Mesurez et rapportez par catégorie de tâche plutôt qu'une moyenne unique et mélangée à l'échelle de l'organisation, ce qui peut cacher le fait que l'assistance fournit une forte valeur dans une catégorie tout en fournissant peu, voire une valeur négative, dans une autre, une information qu'un chiffre mélangé obscurcirait complètement.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Économies de temps auto-rapportées seules | Rapide, facile à collecter | Signal faible ; sujet au biais ; ignore le coût de revue en aval |
| Comparaison avant-après seule | Simple à mettre en place | Confondue par tout autre changement concurrent ou tendance à l'échelle de l'industrie |
| Véritable groupe de comparaison | Preuve la plus forte et la plus défendable | Plus difficile à organiser ; peut ne pas être faisable pour un déploiement d'adoption complète |
| Mesure de résultat segmentée par tâche | Révèle où la valeur se concentre authentiquement | Nécessite un suivi et un effort de catégorisation plus granulaires |

La tension centrale est **la rigueur de mesure contre la faisabilité pratique**. Un véritable groupe de comparaison contrôlé est la preuve la plus forte mais est souvent impraticable une fois qu'un outil a été déployé à l'échelle de l'organisation sans groupe de contrôle retenu ; les impressions auto-rapportées sont rapides et faciles mais faibles en elles-mêmes. Résolvez la tension en utilisant la conception de comparaison la plus forte que votre déploiement réel permet, un véritable groupe de contrôle pendant une phase pilote précoce si possible, une carte de contrôle de référence historique sinon, et en traitant l'auto-rapport comme un outil de génération d'hypothèses plutôt que le mot final, indépendamment de quelle conception de comparaison vous finissez par utiliser.

## Questions à discuter avec votre équipe

1. **Avions-nous, ou pourrions-nous encore construire, un véritable groupe de comparaison pour évaluer notre adoption d'outillage IA, ou nous reposons-nous entièrement sur une comparaison avant-après ?** Si un véritable groupe de comparaison n'a jamais été établi, discutez de si une carte de contrôle de référence historique pourrait encore fournir une alternative raisonnablement rigoureuse.

2. **Avons-nous mesuré le temps de cycle et la qualité ensemble pour le travail assisté par IA, ou avons-nous seulement une affirmation de vitesse sans contrôle de qualité correspondant ?** Sortez quelles que soient les données existantes et vérifiez cette association spécifique ; si elle n'existe pas, cet écart est la correction de plus haute priorité de ce chapitre.

3. **Notre mesure de temps de cycle pour le travail assisté par IA inclut-elle le temps de revue et de correction, ou seulement l'étape de génération initiale ?** Une affirmation de vitesse basée seulement sur le temps de génération, ignorant le coût de revue en aval, risque directement le piège de comptabilité incomplète contre lequel ce chapitre met en garde.

4. **Quelles affirmations d'économie de temps auto-rapportées avons-nous collectées, et en avons-nous validé une contre des données objectives ?** Choisissez une affirmation spécifique et couramment répétée et vérifiez si les données objectives la soutiennent réellement.

5. **Notre mesure actuelle mélange-t-elle tous les types de tâches en un seul chiffre, ou savons-nous quelles catégories spécifiques de travail voient la plus forte valeur d'assistance IA ?** Si mélangée, discutez de ce qu'une répartition segmentée par tâche pourrait révéler que le chiffre actuel cache.

6. **Si nous devions défendre notre investissement d'outillage IA auprès d'une partie prenante financière sceptique aujourd'hui, en utilisant des preuves plutôt qu'une impression, que pourrions-nous réellement leur montrer ?** Ce test concret fait émerger l'écart entre ce que votre organisation croit actuellement sur la valeur de l'assistance IA et ce qu'elle peut réellement démontrer avec des preuves.

## Regard sectoriel

**Startup.** Une étude formelle de groupe de comparaison est habituellement impraticable à petite échelle, mais même un simple regard honnête avant-après sur le temps de cycle et le taux de défauts, plutôt que de se reposer purement sur à quel point le travail semble plus rapide, donne un signal significativement plus fiable que l'impression seule.

**Petite entreprise.** Concentrez l'effort de mesure sur votre catégorie de tâche la plus précieuse et la plus répétitive en premier, où la valeur de l'assistance IA est la plus susceptible d'être claire et mesurable, plutôt que de tenter une évaluation complète à travers chaque type de travail que fait votre petite équipe.

**Grande entreprise.** Une véritable comparaison contrôlée pendant une phase pilote précoce, avant un déploiement complet à l'échelle de l'organisation, est souvent réalisable ici et vaut l'effort délibéré de l'organiser, puisqu'elle produit une preuve bien plus défendable pour la décision d'investissement d'outillage à grande échelle qui suit typiquement un pilote réussi.

**Gouvernement.** Les décisions de dépense de technologie publique, incluant l'approvisionnement d'outillage IA, font souvent face à un examen particulier et peuvent nécessiter une justification coût-bénéfice formelle (chapitre 5.5). Construisez la discipline de mesure que ce chapitre recommande dans toute phase pilote dès le début, puisqu'une méthodologie d'évaluation rigoureuse et documentée renforce considérablement le dossier de financement ou d'approvisionnement éventuel.

## Exemples

**Grande entreprise.** Une entreprise de logiciels a déployé un assistant de codage IA pour la moitié de ses équipes d'ingénierie comme pilote délibéré, gardant l'autre moitié comme groupe de comparaison pendant un trimestre avant le déploiement complet. Le groupe pilote a montré une amélioration de temps de cycle authentique et statistiquement significative pour des tâches bien définies et riches en code répétitif, mais n'a montré aucune amélioration mesurable, et un compte d'itération de revue légèrement élevé (chapitre 2.9), pour un travail architectural complexe et nouveau. Ce constat segmenté par tâche, visible seulement grâce à la véritable conception de comparaison et la répartition par catégorie de tâche, a conduit l'entreprise à spécifiquement cibler le message de déploiement et la formation de l'assistance IA vers les catégories de tâches où elle aidait démontrablement, plutôt que de la présenter comme un boost de productivité uniforme à travers tout le travail.

**Gouvernement.** Une agence fédérale pilotant l'assistance de codage IA pour un sous-ensemble des équipes de son programme de modernisation s'est initialement appuyée sur des enquêtes d'économie de temps auto-rapportées, qui montraient des réponses enthousiastes et uniformément positives. Une analyse objective de suivi, comparant le temps de cycle et le taux de défauts échappés entre les équipes pilotes et une cohorte comparable non pilote travaillant sur des composants système similaires, a trouvé que l'amélioration de temps de cycle objective était réelle mais notablement plus petite que ce que les estimations auto-rapportées suggéraient, et a identifié une augmentation modeste mais réelle du temps de revue qui avait compensé une partie du gain de vitesse de génération, un constat que les données d'auto-rapport seules avaient complètement manqué. Cette image plus précise et fondée sur des preuves a directement informé un dossier d'affaires plus modeste et plus défendable pour l'approvisionnement continu et élargi de l'outil.

## Argumentaire économique : motivations, ROI et TCO

Le retour de mesurer rigoureusement le développement assisté par IA est des décisions d'investissement confiantes et fondées sur des preuves : une organisation qui sait précisément où l'assistance IA aide authentiquement peut investir dans son expansion là et éviter de surpayer pour des licences dans des catégories de tâches où elle fournit peu de valeur, exactement l'intuition de segmentation par tâche que l'exemple de l'entreprise de logiciels ci-dessus démontre. Cela se connecte directement à l'unité économique du chapitre 5.4 et à la discipline de ROI du chapitre 5.5, puisque le coût d'outillage IA, souvent sous licence par poste, nécessite le même traitement coût-bénéfice rigoureux que ce livre applique à tout autre investissement d'ingénierie majeur.

Le coût total de possession est l'effort analytique pour construire de véritables comparaisons, mesurer le temps de cycle complet incluant la revue et la correction, et segmenter par type de tâche, ce qui est plus de travail que d'accepter les statistiques d'usage rapportées par le fournisseur ou les impressions auto-rapportées à leur valeur nominale. Cet effort est justifié directement par l'échelle du coût de licence d'outillage IA à travers une grande organisation et le risque d'un engagement à l'échelle de l'organisation mal étayé, coûteux, et basé sur l'impression plutôt que les données.

## Antipatrons et pièges

- **Mesurer l'assistance IA par volume de production ou statistiques d'usage du fournisseur seules :** répète directement la mise en garde centrale du chapitre 7.1.
- **Se reposer entièrement sur les économies de temps auto-rapportées :** un signal faible vulnérable au biais, et aveugle au coût de revue et de correction en aval.
- **Mesurer seulement l'étape de vitesse de génération, ignorant le temps de cycle complet :** produit une comptabilité incomplète et potentiellement trompeuse de l'effet de productivité réel.
- **Rapporter un seul chiffre mélangé à l'échelle de l'organisation :** cache la variation réelle de valeur à travers différentes catégories de tâches.
- **Aucun groupe de comparaison ni référence historique :** ne peut pas distinguer l'effet réel de l'assistance IA de tout autre changement concurrent.
- **Traiter un résultat d'enquête auto-rapporté enthousiaste comme une preuve suffisante pour une décision d'investissement à grande échelle :** risque exactement l'écart que l'exemple de l'agence fédérale ci-dessus a découvert seulement après avoir construit une comparaison plus rigoureuse.

## Modèle de maturité

- **Niveau 1, Initiation :** La valeur du développement assisté par IA est évaluée, le cas échéant, seulement par impression auto-rapportée et statistiques d'usage du fournisseur.
- **Niveau 2, Développement :** Certaines données de temps de cycle ou de qualité existent, mais il n'y a pas de véritable groupe de comparaison ni de référence historique, et aucune analyse segmentée par tâche.
- **Niveau 3, Standardisation :** Une véritable conception de comparaison (groupe de contrôle ou référence historique) avec une mesure appariée de temps de cycle et de qualité est appliquée de manière cohérente, segmentée par type de tâche.
- **Niveau 4, Gestion :** La comptabilité de temps de cycle complète, incluant le temps de revue et de correction, est suivie ; les affirmations auto-rapportées sont systématiquement validées contre des données objectives.
- **Niveau 5, Orchestration :** L'organisation a une compréhension mature et fondée sur des preuves de exactement où l'assistance IA aide authentiquement, informant le déploiement ciblé, l'investissement de formation, et les décisions d'approvisionnement avec un ROI démontré et défendable.

## Idées pour la discussion

1. Quelle véritable comparaison, le cas échéant, avons-nous pour notre adoption d'outillage IA actuelle ?
2. Avons-nous mesuré le temps de cycle et la qualité ensemble, ou seulement une affirmation de vitesse ?
3. Quelle affirmation d'assistance IA auto-rapportée devrions-nous valider contre des données objectives ?
4. Quelle catégorie de tâche spécifique montre la preuve la plus forte de valeur d'assistance IA authentique pour nous ?
5. Pourrions-nous actuellement défendre notre investissement d'outillage IA auprès d'une partie prenante financière sceptique avec des preuves ?

## Points clés à retenir

- Mesurez le développement assisté par IA par **résultat**, pas volume de production ou statistiques d'usage rapportées par le fournisseur.
- Utilisez un **véritable groupe de comparaison ou une référence historique**, pas seulement un instantané avant-après vulnérable aux facteurs confondants.
- Mesurez le **temps de cycle et la qualité ensemble**, incluant le pipeline complet, le temps de revue et de correction, pas seulement la vitesse de génération.
- Traitez les **économies de temps auto-rapportées comme une hypothèse**, pas une conclusion, et validez-les contre des données objectives.
- **Segmentez par type de tâche** ; un seul chiffre mélangé cache où la valeur se concentre authentiquement et où elle ne le fait pas.

## Sources et lectures complémentaires

- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble, and Gene Kim (la discipline de mesure de résultat que ce chapitre applique à l'évaluation d'outillage IA).
- La recherche de GitHub sur la programmation en binôme avec l'IA et la productivité des développeurs (recherche empirique à l'échelle de l'industrie sur les résultats du développement assisté par IA).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021) (la discipline de mesure multidimensionnelle que ce chapitre applique à une nouvelle catégorie d'outillage spécifique).
- *How to Measure Anything*, par Douglas W. Hubbard (construire des comparaisons défendables et quantifier la valeur sous une incertitude authentique).
