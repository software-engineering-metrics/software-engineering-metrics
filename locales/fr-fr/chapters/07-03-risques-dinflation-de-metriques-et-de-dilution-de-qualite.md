# 7.3 Risques d'inflation de métriques et de dilution de qualité

## Vue d'ensemble et motivation

Ce chapitre nomme, directement et spécifiquement, les deux modes de défaillance contre lesquels le chapitre 7.1 mettait en garde que tout le cadre de ce livre doit se protéger à mesure que le développement assisté par IA devient une pratique standard : **l'inflation de métriques**, des chiffres qui montent sans valeur réelle correspondante, et la **dilution de qualité**, une érosion graduelle de la qualité de code qui dépasse la capacité actuelle de l'industrie à la détecter par les pratiques de revue et de test existantes. Ce ne sont pas de nouvelles catégories de risque que ce livre n'a pas déjà nommées, l'inflation de métriques est la loi de Goodhart du chapitre 1.2 et la manipulation de substitution du chapitre 1.2 appliquées à l'échelle, et la dilution de qualité est l'écart d'efficacité de couverture du chapitre 4.2 et la préoccupation de défaut échappé du chapitre 5.1, tous deux intensifiés. Ce qui est nouveau est la vitesse et l'échelle auxquelles l'IA générative peut produire les deux modes de défaillance simultanément, plus vite que ce pour quoi la plupart des garde-fous existants des organisations ont été conçus pour attraper.

Le mécanisme spécifique dont ce chapitre se préoccupe est subtil : le code généré par IA a très souvent l'air correct. Il suit des idiomes familiers, utilise des noms de variables plausibles, et passe une lecture superficielle bien plus fiablement que le code écrit par un humain authentiquement négligent ne le fait typiquement, précisément parce qu'il a été entraîné sur un vaste corpus de code qui avait l'air correct. Cela rend les défauts générés par IA plus difficiles à attraper pour un réviseur humain par le genre de revue de reconnaissance de motif, « est-ce que cela a l'air correct », qui attrape de nombreux bugs introduits par un humain, parce que la version générée par IA est spécifiquement optimisée, dans un sens statistique, pour avoir l'air correcte qu'elle le soit réellement ou non.

Pour les grandes équipes, les risques de ce chapitre se composent avec l'échelle d'une manière qui devrait préoccuper spécifiquement les organisations de grande entreprise et de gouvernement : l'inflation de métriques à travers des dizaines d'équipes simultanément peut produire un faux signal à l'échelle de l'organisation d'une productivité améliorée qui prend un temps et une analyse significatifs à défaire, exactement comme l'exemple de technologie financière du chapitre 7.1 l'a montré. La dilution de qualité qui dépasse la capacité de détection est encore plus sérieuse dans les contextes réglementés, critiques pour la sécurité, ou de confiance publique, où le coût d'un défaut non détecté atteignant la production porte des conséquences bien au-delà de la préoccupation d'ingénierie immédiate.

## Principes clés

- **L'inflation de métriques et la dilution de qualité sont des versions intensifiées de risques que ce livre a déjà nommés,** pas des catégories entièrement nouvelles ; les garde-fous existants s'appliquent encore, mais doivent travailler plus dur.
- **La qualité « a l'air correct » du code généré par IA le rend spécifiquement plus difficile pour la revue de reconnaissance de motif humaine à attraper des défauts subtils.** C'est un risque distinct de l'erreur humaine ordinaire.
- **La vitesse de ce changement peut dépasser la capacité d'une organisation à adapter ses garde-fous,** créant une véritable fenêtre d'exposition limitée dans le temps.
- **Les métriques de qualité existantes (Partie 4) restent précieuses mais pourraient nécessiter une recalibration,** pas un remplacement, à la lumière de ce nouveau profil de risque.
- **La capacité de détection elle-même nécessite un investissement délibéré,** puisque les pratiques de revue et de test que ce livre couvre ont été conçues avant que ce risque spécifique n'existe à cette échelle.

## Recommandations

### Recalibrez le taux d'échecs de changement et les seuils de défaut échappé pour le travail lourd en IA

Là où une équipe ou une zone de code a lourdement adopté l'assistance IA, appliquez le suivi pondéré par sévérité des chapitres 2.4 et 5.1 avec une sensibilité accrue, au moins jusqu'à ce que votre organisation ait construit assez de preuves (chapitre 7.2) pour savoir si la relation historique entre ces métriques et le risque authentique tient encore inchangée pour le travail assisté par IA spécifiquement. Traitez cette recalibration comme une posture temporaire de collecte de preuves, pas une hypothèse permanente et non examinée dans un sens ou l'autre.

### Investissez spécifiquement dans une capacité de détection qui résiste au problème « a l'air correct »

La revue de code traditionnelle, qui repose fortement sur la reconnaissance de motif d'un réviseur pour ce qui a l'air correct, est spécifiquement affaiblie contre le code généré par IA à l'air plausible mais subtilement incorrect. Investissez correspondamment plus dans des méthodes de détection qui ne reposent pas sur la reconnaissance de motif visuelle : le [test de mutation](https://en.wikipedia.org/wiki/Mutation_testing) (chapitre 4.2), qui teste le comportement réel plutôt que l'apparence, et le test basé sur les propriétés ou les invariants, qui vérifie la correction logique plutôt que la plausibilité de surface, deviennent tous deux disproportionnellement plus précieux spécifiquement en raison de ce changement.

### Surveillez l'inflation de métriques à travers tout le pipeline de livraison, pas seulement au point de génération de code

L'inflation de métriques issue du développement assisté par IA n'est pas confinée à l'étape de codage ; elle peut se propager à travers toute la chaîne de temps de cycle (chapitre 2.6) : un plus grand volume de demandes de tirage générées par IA peut gonfler les métriques de débit de demande de tirage (chapitre 2.9) même tandis que le signal utile que cette métrique était originellement conçue pour capturer, un véritable débit d'équipe, reste plat ou même décline une fois que le fardeau de revue et le coût de correction sont correctement pris en compte. Auditez votre ensemble de métriques complet pour ce schéma de propagation, pas seulement les métriques les plus évidentes et directement adjacentes à l'IA.

### Construisez un plan de recalibration explicite et limité dans le temps plutôt qu'une posture permanente de suspicion

L'examen accru que ce chapitre recommande est approprié pendant une période active d'adoption et d'incertitude, mais il ne devrait pas devenir une taxe permanente et non examinée sur le travail assisté par IA indéfiniment. À mesure que votre organisation construit de véritables preuves par la discipline de mesure du chapitre 7.2, révisez les seuils et garde-fous basés sur ce que ces preuves montrent réellement, resserrant davantage où le risque est confirmé, relâchant là où il ne l'est pas, plutôt que soit d'ignorer entièrement le risque soit de traiter chaque morceau de code assisté par IA avec une suspicion permanente et indifférenciée indépendamment des preuves accumulées.

### Communiquez ce risque de manière transparente plutôt que de le traiter comme une raison de résister à l'adoption de l'IA

Formulez les conseils de ce chapitre comme une gestion de risque pour une nouvelle capacité authentiquement précieuse, pas comme un argument contre le développement assisté par IA en général. Une organisation qui communique ces risques spécifiques et nommés clairement et construit des garde-fous proportionnés contre eux, exactement comme ce livre le recommande pour toute autre métrique et technique qu'il couvre, adopte l'assistance IA plus sûrement et plus durablement qu'une qui soit ignore le risque soit le traite comme une raison de résistance générale à un ensemble d'outils authentiquement utile.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Aucune recalibration, traiter le travail assisté par IA identiquement au code écrit par un humain | Simple, aucun changement de processus | Manque un profil de risque élevé spécifique et suggéré par les preuves |
| Examen accru général et permanent de tout code assisté par IA | Maximise la réduction de risque à court terme | Taxe insoutenable sur une capacité authentiquement précieuse ; ignore les preuves accumulées |
| Recalibration limitée dans le temps et conduite par les preuves | Équilibre la gestion de risque avec une adoption durable | Nécessite une discipline de mesure continue (chapitre 7.2) pour savoir quand relâcher l'examen |
| Investissement dans des méthodes de détection résistantes aux défauts « a l'air correct » | Adresse directement et durablement le nouveau risque spécifique | Nécessite un investissement initial dans l'infrastructure de test de mutation et basé sur les propriétés |

La tension centrale est **la prudence contre la vitesse d'adoption**. Une prudence excessive et permanente gaspille une grande partie de la valeur authentique du développement assisté par IA ; une prudence insuffisante risque l'inflation de métriques et la dilution de qualité que ce chapitre nomme, potentiellement à une échelle significative avant détection. Résolvez la tension par l'approche limitée dans le temps et conduite par les preuves que ce chapitre recommande : un examen accru maintenant, calibré vers le bas ou le haut à mesure que de véritables preuves de la discipline de mesure du chapitre 7.2 s'accumulent, plutôt que soit une politique générale permanente soit une hypothèse non examinée que rien n'a changé.

## Questions à discuter avec votre équipe

1. **Avons-nous recalibré nos seuils de taux d'échecs de changement ou de défaut échappé pour le travail lourd en IA, ou appliquons-nous des seuils de l'ère pré-IA inchangés ?** Si inchangés, discutez de si cela reflète une décision délibérée et fondée sur des preuves ou simplement une absence d'attention à la question.

2. **Avons-nous des méthodes de détection, comme le test de mutation, qui ne reposent pas sur la reconnaissance de motif visuelle d'un réviseur, ou notre processus de revue dépend-il entièrement d'yeux humains évaluant si le code « a l'air correct » ?** C'est la vulnérabilité spécifique que ce chapitre identifie ; évaluez honnêtement votre capacité de détection actuelle contre elle.

3. **L'inflation de métriques s'est-elle propagée au-delà de l'étape de codage dans nos métriques de demande de tirage ou de déploiement, et le remarquerions-nous actuellement si c'était le cas ?** Parcourez votre chaîne de temps de cycle complète en cherchant ce schéma de propagation, pas seulement le point d'origine le plus évident.

4. **Notre examen accru actuel du code assisté par IA, le cas échéant, est-il basé sur des preuves accumulées, ou est-ce un défaut non examiné et indéfini qui n'a jamais été reconsidéré ?** Discutez de quelles preuves devraient s'accumuler avant que vous ne considériez relâcher ou resserrer davantage les garde-fous actuels.

5. **Comment communiquons-nous les risques de ce chapitre en interne : comme une raison de prudence et de garde-fous proportionnés, ou comme un argument implicite contre l'adoption de l'IA en général ?** Soyez honnêtes sur comment cette conversation atterrit réellement auprès de votre équipe, puisqu'un message reçu comme une résistance générale produit rarement la réponse proportionnée et fondée sur des preuves que ce chapitre recommande.

6. **À quoi ressemblerait-il pour notre organisation de découvrir, seulement après une échelle significative, que l'inflation de métriques et la dilution de qualité s'étaient produites simultanément et non détectées ?** Ce scénario concret et quelque peu inconfortable vaut la peine d'être nommé explicitement comme l'échec spécifique que les garde-fous de ce chapitre sont construits pour prévenir.

## Regard sectoriel

**Startup.** L'adoption rapide avec une capacité de revue limitée rend les risques de ce chapitre particulièrement aigus pour une petite équipe ; le problème de détection « a l'air correct » est plus difficile à attraper avec moins de réviseurs, moins spécialisés. Investissez tôt dans au moins un test de mutation léger sur vos chemins de code les plus critiques, même si une couverture complète n'est pas encore faisable.

**Petite entreprise.** Les processus formels de recalibration sont probablement inutiles à cette échelle, mais une conscience simple et explicite que le code généré par IA mérite une lecture légèrement plus sceptique que d'habitude, spécifiquement parce qu'il tend à avoir l'air plus confiant et correct qu'il ne l'est réellement peut-être, ne coûte rien et adresse directement la préoccupation centrale de ce chapitre.

**Grande entreprise.** L'inflation de métriques et la dilution de qualité se composent toutes deux significativement à l'échelle, puisqu'un faux signal ou un problème de qualité non détecté à travers des dizaines d'équipes simultanément est bien plus conséquent et bien plus difficile à défaire que le même problème sur une seule équipe. Investissez délibérément dans des mises à niveau de capacité de détection à l'échelle de l'organisation (infrastructure de test de mutation, adoption de test basé sur les propriétés) et dans la discipline de recalibration limitée dans le temps que ce chapitre recommande, suivie centralement.

**Gouvernement.** Les conséquences d'une dilution de qualité non détectée sont particulièrement sérieuses dans les contextes réglementés, critiques pour la sécurité, ou de confiance publique courants dans les systèmes gouvernementaux. Appliquez un examen accru et conduit par les preuves spécifiquement aux changements assistés par IA dans les chemins de code à haute conséquence (la logique de pondération d'exposition et d'exploitabilité du chapitre 6.4 s'applique similairement ici), et soyez préparés à démontrer, à un auditeur ou organisme de surveillance, exactement quelle capacité de détection existe contre ce risque spécifique.

## Exemples

**Grande entreprise.** L'équipe d'ingénierie de traitement de sinistres d'une compagnie d'assurance a adopté largement l'assistance de codage IA et, six mois plus tard, a remarqué une hausse graduelle mais mesurable des défauts échappés spécifiquement dans la logique conditionnelle complexe, le genre de code où une gestion de cas limite subtilement fausse est à la fois la plus facile à générer de manière plausible pour les outils IA et la plus difficile à attraper pour un réviseur par inspection seule. Une investigation a confirmé le schéma « a l'air correct » que ce chapitre décrit : le code défectueux avait constamment utilisé des schémas idiomatiques et à l'air familier qui passaient la revue sans déclencher le genre d'examen qu'un morceau de code écrit par un humain de manière évidemment inhabituelle ou maladroite aurait pu recevoir. La réponse de l'équipe a ciblé spécifiquement le test de mutation sur la logique conditionnelle complexe à l'échelle de l'entreprise, une méthode de détection résistante au problème de plausibilité de surface, et a mesuré une réduction significative de cette catégorie de défaut spécifique en deux trimestres.

**Gouvernement.** Une administration fiscale pilotant le développement assisté par IA pour un sous-ensemble de son travail de maintenance du moteur de calcul a construit dès le début la discipline de recalibration limitée dans le temps que ce chapitre recommande, fixant une période explicite de collecte de preuves de six mois avec des exigences de revue accrues pour les changements assistés par IA touchant spécifiquement la logique de calcul. Les preuves recueillies n'ont montré aucune différence statistiquement significative de taux de défaut pour les changements étroitement délimités et bien ciblés, mais ont confirmé un risque élevé pour les changements assistés par IA plus larges et architecturalement significatifs. La politique résultante de l'agence a relâché l'examen accru pour la catégorie de changement étroit tout en le maintenant et même le renforçant pour les changements architecturalement significatifs, un résultat proportionné et fondé sur des preuves qu'aucun des extrêmes « pas de recalibration » ni « examen permanent général » n'aurait produit.

## Argumentaire économique : motivations, ROI et TCO

Le retour de se protéger délibérément contre l'inflation de métriques et la dilution de qualité est d'éviter exactement le scénario que montre l'exemple de la compagnie d'assurance ci-dessus : un problème de qualité non détecté et se composant graduellement qui coûte bien plus à découvrir et remédier après coup que ce que l'investissement de détection, une infrastructure de test de mutation spécifiquement ciblée sur le code au risque le plus élevé, aurait coûté proactivement.

Le coût total de possession inclut l'investissement de capacité de détection que ce chapitre recommande et la discipline continue de recalibration fondée sur des preuves plutôt que l'un ou l'autre extrême, suspicion permanente ou inattention permanente. Ce coût est modeste et limité dans le temps relativement au risque d'un problème de qualité significatif et à l'échelle passant non détecté spécifiquement parce qu'il a été conçu, par la nature de comment ces outils génèrent le code, pour avoir l'air correct aux processus de revue qu'une organisation avait déjà en place.

## Antipatrons et pièges

- **Appliquer des seuils et méthodes de détection de l'ère pré-IA inchangés :** manque un profil de risque élevé spécifique et suggéré par les preuves.
- **Se reposer entièrement sur la revue de reconnaissance de motif humaine pour le code généré par IA :** spécifiquement vulnérable au problème « a l'air correct » que ce chapitre identifie.
- **Manquer la propagation d'inflation de métriques au-delà du point de génération de code :** un faux signal peut se répandre à travers tout le pipeline de livraison sans être détecté.
- **Examen général permanent et non examiné sans recalibration fondée sur des preuves :** gaspille une grande partie de la valeur authentique du développement assisté par IA de manière insoutenable.
- **Communiquer les risques de ce chapitre comme une résistance générale à l'adoption de l'IA plutôt qu'une gestion de risque proportionnée :** sape à la fois la sécurité et l'adoption.
- **Aucun investissement de capacité de détection spécifiquement ciblé sur ce nouveau profil de risque :** laisse l'organisation dépendante de méthodes de revue que ce chapitre a montrées être spécifiquement affaiblies contre lui.

## Modèle de maturité

- **Niveau 1, Initiation :** Aucune conscience du risque d'inflation de métriques ou de dilution de qualité spécifique au développement assisté par IA ; les garde-fous et méthodes de détection existants sont appliqués inchangés.
- **Niveau 2, Développement :** Une certaine conscience existe, mais la recalibration est ad hoc et l'investissement de capacité de détection spécifique à ce risque n'a pas été fait.
- **Niveau 3, Standardisation :** Des seuils recalibrés et des méthodes de détection résistantes au problème « a l'air correct » (test de mutation et basé sur les propriétés) sont appliqués de manière cohérente au travail assisté par IA.
- **Niveau 4, Gestion :** Une discipline de recalibration limitée dans le temps et conduite par les preuves ajuste activement l'examen basé sur les données accumulées, et la propagation d'inflation de métriques est activement surveillée à travers le pipeline complet.
- **Niveau 5, Orchestration :** L'organisation a une posture de gestion de risque mature, proportionnée, et continuellement évolutive envers le développement assisté par IA, communiquée de manière transparente, qui ne gaspille ni sa valeur par une prudence excessive ni n'expose l'organisation à une dilution de qualité non détectée.

## Idées pour la discussion

1. Avons-nous vu une preuve précoce du schéma de défaut « a l'air correct » dans notre propre code assisté par IA ?
2. Quelle méthode de détection adresserait le plus directement le risque spécifique de ce chapitre pour nous ?
3. L'inflation de métriques de l'assistance IA s'est-elle propagée dans l'une de nos métriques de pipeline en aval ?
4. Notre examen actuel du code assisté par IA est-il fondé sur des preuves ou un défaut non examiné ?
5. Comment les conseils de ce chapitre sont-ils réellement reçus par notre équipe : comme gestion de risque ou comme résistance à l'adoption de l'IA ?

## Points clés à retenir

- L'inflation de métriques et la dilution de qualité sont des **versions intensifiées de risques que ce livre nomme déjà**, nécessitant que les garde-fous existants travaillent plus dur, pas des cadres entièrement nouveaux.
- La tendance du code généré par IA à **« avoir l'air correct »** affaiblit spécifiquement la revue de code humaine traditionnelle par reconnaissance de motif.
- Investissez dans des **méthodes de détection résistantes à la plausibilité de surface**, particulièrement le test de mutation et basé sur les propriétés.
- Appliquez une posture de **recalibration limitée dans le temps et conduite par les preuves**, pas une suspicion générale permanente ni une confiance non examinée permanente.
- **Communiquez ce risque comme une gestion de risque proportionnée**, pas comme un argument contre l'adoption de l'IA, pour soutenir à la fois la sécurité et l'usage durable.

## Sources et lectures complémentaires

- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble, and Gene Kim (la discipline appariée vitesse-stabilité que ce chapitre applique à une nouvelle catégorie de risque).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011) : la méthode de détection dont ce chapitre argumente qu'elle devient disproportionnellement précieuse.
- La recherche de GitHub sur la programmation en binôme avec l'IA et la productivité des développeurs (données de l'industrie sur les résultats et risques du développement assisté par IA).
- *The Tyranny of Metrics*, par Jerry Z. Muller (fixation sur les métriques et risque de manipulation, directement pertinent à la préoccupation d'inflation de métriques que ce chapitre nomme).
