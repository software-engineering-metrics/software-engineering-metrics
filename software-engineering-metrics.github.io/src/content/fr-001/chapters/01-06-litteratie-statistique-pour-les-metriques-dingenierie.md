# 1.6 Littératie statistique pour les métriques d'ingénierie

## Vue d'ensemble et motivation

Vous n'avez pas besoin d'un diplôme de statistiques pour faire fonctionner un bon programme de métriques, mais vous devez éviter un petit nombre d'erreurs spécifiques et communes qui rendent des métriques par ailleurs bien gouvernées et bien instrumentées activement trompeuses. Une équipe peut tout faire correctement, nommer une décision claire, éviter la loi de Goodhart, pondérer vers les résultats, gouverner la propriété, instrumenter fiablement, et quand même tirer la mauvaise conclusion parce qu'elle a lu une moyenne là où elle avait besoin d'un percentile, a confondu le bruit avec une tendance, ou est tombée pour une coïncidence déguisée en cause. Ce chapitre est le jugement statistique minimal que ce livre suppose que chaque lecteur de chapitre ultérieur possède déjà.

Le problème central est que les métriques d'ingénierie sont généralement bruyantes, asymétriques et à petit échantillon selon les standards de la statistique formelle. Le compte hebdomadaire de déploiements d'une seule équipe n'est pas une courbe en cloche lisse ; c'est une poignée de points de données avec des valeurs aberrantes occasionnellement importantes (une grande sortie, une série de retours en arrière pilotée par un incident). Appliquer des intuitions naïves construites pour de grands ensembles de données bien comportées à ce type de données produit régulièrement des conclusions confiantes et fausses. Apprendre à repérer quand un chiffre est trop bruyant pour qu'on lui fasse confiance, quand une moyenne vous ment, et quand deux choses qui bougent ensemble ne disent rien sur la causalité n'est pas une rigueur optionnelle, c'est ce qui sépare un programme de métriques qui enseigne à une organisation quelque chose de vrai d'un qui lui enseigne quelque chose qui sonne plausible et faux.

À l'échelle de l'entreprise et du gouvernement, les erreurs statistiques s'accumulent parce qu'une conclusion trompeuse, une fois acceptée par la direction, est actée à travers de nombreuses équipes avant que quiconque ne pense à réexaminer l'analyse sous-jacente. Une comparaison statistiquement naïve entre deux divisions, ou entre avant et après une réorganisation majeure, peut façonner des décisions de ressources pendant des années sur la base de rien de plus que du bruit ou d'un facteur confondant que personne n'a contrôlé. Ce chapitre existe pour rendre cet échec moins probable.

## Principes clés

- **Une médiane ou un percentile vous en dit généralement plus qu'une moyenne.** Les données d'ingénierie sont régulièrement asymétriques par des valeurs aberrantes que les moyennes absorbent et que les percentiles non.
- **Les petits échantillons produisent des chiffres bruyants.** Un pourcentage calculé à partir d'une poignée d'événements oscille violemment pour des raisons qui n'ont rien à voir avec un vrai changement.
- **La régression vers la moyenne trompe constamment les gens.** Une lecture inhabituellement bonne ou mauvaise tend à être suivie d'une plus normale, avec ou sans intervention.
- **La corrélation n'est pas la causalité, et les variables confondantes sont partout.** Deux métriques qui bougent ensemble peuvent partager une troisième cause cachée plutôt que l'une conduisant l'autre.
- **Une [carte de contrôle](https://en.wikipedia.org/wiki/Control_chart) bat une simple comparaison avant-après.** Voir la plage normale de variation est ce qui vous permet de distinguer un véritable changement du bruit.

## Recommandations

### Par défaut, utilisez les médianes et les percentiles pour les données asymétriques

Les métriques d'ingénierie basées sur le temps, temps d'exécution, temps de récupération d'incident, latence de réponse, sont presque toujours asymétriques à droite : la plupart des valeurs se regroupent bas, avec une longue traîne de valeurs aberrantes occasionnellement importantes. Une moyenne tirée par cette traîne peut peindre une image qu'aucun cas typique ne ressemble réellement. Rapportez la **médiane** (la valeur médiane, où la moitié des observations sont au-dessus et la moitié en dessous) aux côtés du **90e** ou **95e percentile** (la valeur en dessous de laquelle tombent 90 % ou 95 % des observations), qui ensemble montrent à la fois le cas typique et la traîne de pire cas qu'une équipe rencontre réellement. Le chapitre KPI du livre compagnon `software-engineering-guide`, et chaque chapitre de métrique de livraison dans la partie 2 de ce livre, suppose cette habitude tout au long.

### Sachez quand un échantillon est trop petit pour qu'on lui fasse confiance

Un taux d'échecs de changement calculé à partir de trois déploiements lors d'une semaine calme n'est pas un signal significatif ; un seul échec fait bouger le pourcentage de 0 % à 33 % du jour au lendemain pour des raisons qui peuvent n'avoir rien à voir avec le risque sous-jacent. Avant de réagir à une métrique basée sur un pourcentage, vérifiez le comptage sous-jacent. Comme règle pratique, traitez un taux calculé à partir de moins d'environ vingt à trente événements sous-jacents comme bruyant et nécessitant une fenêtre d'observation plus longue avant de tirer une conclusion, et dites-le explicitement sur le tableau de bord plutôt que de présenter un pourcentage volatil à petit échantillon avec la même confiance qu'un pourcentage stable à grand échantillon.

### Surveillez la régression vers la moyenne avant de créditer une intervention

Si la pire semaine jamais vue d'une équipe pour les incidents est suivie par l'attention de la direction et une amélioration subséquente, il est tentant de créditer l'intervention. Souvent, une partie de cette amélioration se serait produite de toute façon, parce qu'une lecture inhabituellement extrême tend à être suivie d'une plus typique purement comme artefact statistique, un phénomène appelé **régression vers la moyenne**. Protégez-vous contre cela en comparant avec une référence historique plus longue plutôt que le seul point de données extrême qui a déclenché l'attention, et en étant modestement humble sur la part de toute amélioration observée à attribuer à une action spécifique.

### Cherchez des variables confondantes avant d'affirmer qu'une métrique a causé un résultat

Quand deux métriques bougent ensemble, fréquence de déploiement augmentant aux côtés de la satisfaction client, résistez au réflexe d'affirmer que l'une a causé l'autre avant de considérer une **variable confondante** : un troisième facteur caché conduisant les deux. Le lancement d'une nouvelle fonctionnalité pourrait indépendamment augmenter à la fois la fréquence de déploiement (plus de corrections de suivi) et la satisfaction (la fonctionnalité elle-même), sans aucun lien causal entre les deux métriques du tout. Avant de présenter une corrélation comme preuve de causalité, demandez activement ce qui a changé d'autre en même temps qui pourrait expliquer les deux mouvements.

### Utilisez une carte de contrôle, pas un simple instantané avant-après

Une **carte de contrôle** trace une métrique dans le temps avec sa plage normale de variation montrée explicitement, typiquement comme des bandes autour d'une moyenne centrale. Cela vous permet de distinguer un véritable changement, un point de données ou une série soutenue hors de la plage normale, du bruit ordinaire qu'une simple comparaison avant-après ne peut pas distinguer. Avant de déclarer « le chiffre s'est amélioré après le changement », tracez assez de données historiques pour voir à quoi ressemble la variation normale, et vérifiez si la lecture post-changement tombe réellement en dehors.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Moyennes | Simples, familières, faciles à calculer | Déformées par les valeurs aberrantes sur des données d'ingénierie asymétriques |
| Médianes et percentiles | Robustes aux valeurs aberrantes, montrent le cas typique et la traîne ensemble | Légèrement moins familières aux audiences non techniques |
| Simple comparaison avant-après | Rapide, intuitive, facile à présenter | Vulnérable à la régression vers la moyenne et au bruit |
| Cartes de contrôle et références plus longues | Distingue fiablement les vrais changements du bruit | Nécessite plus de données historiques et plus d'explication à une audience non technique |

La tension centrale est **simplicité contre rigueur**. Les moyennes et les simples comparaisons avant-après sont plus faciles à calculer et expliquer, ce qui explique exactement pourquoi elles dominent le rapport informel, mais ce sont aussi les deux techniques les plus susceptibles de produire une conclusion confiante et fausse sur le type de données bruyantes et asymétriques que génèrent les métriques de ce livre. Résolvez la tension en utilisant par défaut les techniques plus rigoureuses, médianes, percentiles et cartes de contrôle, pour toute décision à conséquence réelle, et en réservant les techniques plus simples aux regards exploratoires à faibles enjeux où une mauvaise lecture coûte peu.

## Questions à discuter avec votre équipe

1. **Lesquelles de nos tuiles de tableau de bord rapportent une moyenne là où une médiane ou un percentile raconterait une histoire plus vraie ?** Les métriques d'ingénierie basées sur le temps sont presque toujours asymétriques, et une moyenne sur des données asymétriques peut avoir l'air correcte pendant que le cas typique, ou la traîne de pire cas, raconte une histoire entièrement différente. Auditez vos tuiles basées sur le temps spécifiquement pour cette substitution.

2. **À quel point l'échantillon sous-jacent derrière nos métriques basées sur un pourcentage est-il petit, et traitons-nous une métrique de dix événements avec la même confiance qu'une de mille ?** Un taux volatil à petit échantillon présenté sans son comptage sous-jacent invite à une surréaction au bruit. Vérifiez vos tuiles de taux d'échecs de changement et pourcentages similaires pour cet écart.

3. **Avons-nous déjà crédité une intervention pour une amélioration que la régression vers la moyenne aurait produite de toute façon ?** C'est l'une des erreurs statistiques les plus faciles à commettre et l'une des plus difficiles à remarquer après coup, parce que l'intervention et l'amélioration se sont réellement produites dans cet ordre. Regardez en arrière une récente histoire « nous avons corrigé ça » et demandez honnêtement si la comparaison de référence était assez longue pour exclure cela.

4. **Où avons-nous supposé qu'une métrique en a causé une autre sans vérifier une variable confondante ?** Deux choses qui bougent ensemble sont communes ; l'une causant l'autre est une affirmation plus forte qui nécessite plus de preuves. Choisissez une corrélation en laquelle votre équipe croit actuellement et essayez de nommer un facteur confondant plausible qui l'expliquerait sans aucun lien causal du tout.

5. **Avons-nous assez de données historiques pour savoir à quoi ressemble la variation normale pour nos métriques les plus importantes, ou comparons-nous des points uniques ?** Sans un sens de la plage normale, toute lecture unique a l'air alarmante ou rassurante selon l'humeur plutôt que la preuve. Discutez si votre métrique la plus surveillée a déjà été tracée comme une carte de contrôle plutôt qu'un chiffre unique.

6. **Comment communiquons-nous actuellement l'incertitude aux parties prenantes non techniques, et notre tableau de bord implique-t-il plus de précision que les données ne le supportent réellement ?** Un graphique sans indication de variation normale ou de taille d'échantillon peut faire sur-réagir une équipe de direction au bruit ou, tout aussi souvent, rejeter un vrai signal comme du bruit. Discutez de comment votre rapport pourrait communiquer cela honnêtement sans devenir illisible.

## Regard sectoriel

**Startup.** Les petites équipes génèrent de petits échantillons presque partout, ce qui signifie que la prudence sur les petits échantillons de ce chapitre importe constamment. Résistez à tirer des conclusions fortes d'une seule mauvaise semaine ou d'une seule excellente ; avec seulement une poignée de points de données, la réponse honnête à « est-ce une tendance » est souvent « nous ne savons pas encore ».

**Petite entreprise.** Les tableaux de bord intégrés des outils du commerce utilisent souvent par défaut des moyennes et des comparaisons sur une seule période parce que ce sont les plus simples à calculer et afficher. Là où l'outil le permet, passez aux médianes pour les métriques basées sur le temps, et soyez sceptiques envers tout titre « en hausse de 40 % ce mois-ci » calculé à partir d'un petit comptage sous-jacent.

**Grande entreprise.** Les erreurs statistiques à cette échelle s'intègrent dans des décisions de ressources et de réorganisation qui affectent des centaines de personnes. Investissez dans des analystes ou des praticiens des données intégrés qui peuvent construire des cartes de contrôle appropriées et vérifier les facteurs confondants avant qu'une comparaison entre unités commerciales ou un avant-après d'un changement majeur ne soit présenté à la direction comme un fait établi.

**Gouvernement.** Une comparaison statistiquement naïve alimentant un rapport public ou une justification budgétaire peut avoir des conséquences réelles démesurées et invite exactement le genre d'examen qui expose publiquement une analyse bâclée. Appliquez les techniques plus rigoureuses, cartes de contrôle, tailles d'échantillon documentées, vérifications de facteurs confondants, comme pratique permanente pour tout ce qui est publié externement, pas seulement comme un effort occasionnel.

## Exemples

**Grande entreprise.** L'équipe de direction d'une entreprise de logiciels a célébré une amélioration de 25 % du taux d'échecs de changement le mois suivant le déploiement d'une nouvelle politique de revue de code, créditant directement la politique. Un examen plus attentif a trouvé que le mois « avant » avait été inhabituellement mauvais, conduit par une migration ratée d'une seule équipe, et la taille d'échantillon sous-jacente des deux mois était sous trente déploiements à l'échelle de l'entreprise. Une carte de contrôle utilisant douze mois d'historique a montré que la nouvelle lecture était bien dans la variation normale, pas un véritable changement de palier, et l'effet réel de la politique, bien que réel, était bien plus petit que ne le suggérait le chiffre titre.

**Gouvernement.** Une agence de transport public a rapporté une grande amélioration d'une année sur l'autre de la performance à l'heure pour un système de planification nouvellement numérisé, comparant un seul trimestre « avant » à un seul trimestre « après ». Un examen indépendant a trouvé que le trimestre « avant » avait coïncidé avec une fermeture de construction non liée qui avait déprimé la performance à travers tout le réseau, et une référence plus longue a montré que la performance à l'heure avait déjà récupéré avant le lancement du nouveau système. Le rapport révisé de l'agence a utilisé une carte de contrôle pluriannuelle complète et a attribué une amélioration plus modeste, mais plus défendable, spécifiquement au nouveau système.

## Argumentaire économique : motivations, ROI et TCO

Le retour de la littératie statistique est la mauvaise direction évitée : une organisation qui attribue correctement une amélioration, ou reconnaît correctement le bruit comme du bruit, dépense son prochain investissement là où il aidera réellement plutôt que de poursuivre un effet fantôme. L'exemple de la vente au détail ci-dessus est typique : une entreprise qui croyait que sa seule politique de revue avait conduit une amélioration de 25 % pourrait sous-investir dans d'autres contributeurs réels, ou surestimer la valeur de la politique d'une manière qui induit en erreur les décisions futures.

Le coût total de la rigueur statistique est principalement un changement d'habitude plutôt qu'un nouvel outillage : choisir une médiane plutôt qu'une moyenne, vérifier une taille d'échantillon avant de réagir, tracer une référence plus longue avant de déclarer victoire. Ces habitudes coûtent peu à adopter et préviennent le coût bien plus grand et difficile à détecter de décisions prises sur des conclusions confiantes et fausses.

## Antipatrons et pièges

- **Rapporter une moyenne sur des données asymétriques basées sur le temps :** cache le cas typique et la traîne derrière un seul chiffre trompeur.
- **Réagir à un pourcentage sans taille d'échantillon visible :** traite le bruit d'une poignée d'événements comme s'il était une tendance stable et significative.
- **Créditer une intervention sans exclure la régression vers la moyenne :** une erreur commune, facile à commettre, difficile à remarquer.
- **Affirmer la causalité à partir de la corrélation sans considérer les facteurs confondants :** surestime ce que les données supportent réellement.
- **Comparer un simple instantané avant-après au lieu de tracer une référence plus longue :** ne peut pas distinguer un vrai changement de la variation ordinaire.
- **Impliquer plus de précision que les données ne le supportent dans le rapport destiné à la direction :** invite à la surréaction au bruit ou au rejet d'un vrai signal.

## Modèle de maturité

- **Niveau 1, Initiation :** Les métriques sont rapportées comme des moyennes brutes et de simples instantanés avant-après sans attention à la taille d'échantillon, l'asymétrie, ou la variation de référence.
- **Niveau 2, Développement :** Certains analystes appliquent des médianes ou percentiles informellement, mais il n'y a pas de pratique organisationnelle cohérente et les facteurs confondants sont rarement vérifiés.
- **Niveau 3, Standardisation :** Les médianes et percentiles sont le défaut pour les métriques asymétriques basées sur le temps ; les tailles d'échantillon sont montrées aux côtés des métriques basées sur un pourcentage à travers l'organisation.
- **Niveau 4, Gestion :** Les cartes de contrôle avec références historiques sont une pratique standard pour toute affirmation d'un véritable changement ; les variables confondantes sont activement considérées avant que des affirmations causales ne soient faites dans le rapport.
- **Niveau 5, Orchestration :** La rigueur statistique est intégrée dans l'outillage lui-même, les tableaux de bord affichent des percentiles et des bandes de contrôle par défaut, et l'organisation peut démontrer qu'une décision passée spécifique a été corrigée parce qu'une lecture statistiquement naïve a été attrapée avant qu'elle ne façonne la stratégie.

## Idées de discussion

1. Lesquels de nos titres actuels de tableau de bord auraient l'air différents si nous remplacions une moyenne par une médiane ?
2. Avons-nous déjà changé une décision parce qu'un pourcentage s'est avéré basé sur un échantillon bien plus petit que nous ne le supposions ?
3. Quelle est une récente histoire « nous avons amélioré cette métrique » que nous devrions réexaminer pour la régression vers la moyenne ?
4. Où deux de nos métriques pourraient-elles être corrélées par une troisième cause cachée plutôt que l'une conduisant l'autre ?
5. Nos graphiques les plus importants montrent-ils une plage normale de variation, ou juste une seule ligne de tendance ?

## Points clés à retenir

- Préférez les **médianes et percentiles** aux moyennes pour les métriques d'ingénierie asymétriques basées sur le temps.
- Traitez un **pourcentage d'un petit échantillon** comme bruyant, et dites-le explicitement plutôt que de réagir comme à une tendance stable.
- Surveillez la **régression vers la moyenne** avant de créditer une intervention pour une amélioration qui a suivi une lecture inhabituellement mauvaise.
- **La corrélation n'est pas la causalité** ; cherchez activement des variables confondantes avant de faire une affirmation causale.
- Utilisez une **carte de contrôle avec une véritable référence historique**, pas un simple instantané avant-après, pour distinguer un véritable changement du bruit ordinaire.

## Sources et lectures complémentaires

- *The Signal and the Noise*, par Nate Silver (distinguer le vrai signal du bruit dans des données imparfaites).
- *How to Measure Anything*, par Douglas W. Hubbard (raisonnement statistique pour la mesure organisationnelle).
- *Understanding Variation: The Key to Managing Chaos*, par Donald J. Wheeler (cartes de contrôle et distinction entre variation de cause commune et de cause spéciale).
- *Thinking, Fast and Slow*, par Daniel Kahneman (biais cognitifs incluant la régression vers la moyenne et l'illusion du récit causal).
- *The Visual Display of Quantitative Information*, par Edward R. Tufte (présentation honnête et de haute intégrité des données quantitatives).
