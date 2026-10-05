# 2.1 Le Flow Framework

## Vue d'ensemble et motivation

Le **Flow Framework** est un modèle managérial et structurel créé par Mik Kersten et publié dans son livre de 2018 *Project to Product*. Il existe pour répondre à une question que les pures métriques de pipeline ne peuvent pas : non seulement à quelle vitesse et avec quelle sécurité le code se déplace du commit à la production, mais quel genre de valeur traverse réellement le pipeline, et si ce mélange reflète la stratégie réelle de l'entreprise. Le cadre traite la livraison de logiciel comme un **[flux de valeur](https://en.wikipedia.org/wiki/Value_stream)**, la séquence d'activités de bout en bout qui transforme une idée en valeur qu'un client reçoit, empruntant directement à la tradition de cartographie du flux de valeur de la fabrication lean.

Ce livre utilise le Flow Framework comme structure organisatrice de la partie 2. Le chapitre 2.2 introduit ses quatre éléments de flux, les chapitres 2.3 et 2.4 introduisent ses cinq métriques de flux, le chapitre 2.8 retrace ces métriques jusqu'à leur origine dans la cartographie classique du flux de valeur Lean, et le chapitre 2.10 couvre les métriques DORA comme un cadre de référence plus étroit, centré sur le pipeline, sur lequel cette partie ne s'appuie plus en premier. C'est un choix délibéré, pas un rejet de la recherche de DORA. DORA mesure le débit et la stabilité du système avec une rigueur statistique authentique, mais elle est silencieuse sur la question qui importe réellement le plus à un dirigeant d'entreprise : étant donné tout ce que l'organisation d'ingénierie a livré ce trimestre, combien de cela était de la nouvelle valeur client, et combien a été tranquillement consommé par la correction de défauts, la gestion du risque, ou le remboursement de la dette. Le Flow Framework existe spécifiquement pour rendre ce mélange visible.

Pour les grandes équipes, cette distinction n'est pas académique. Une organisation de plateforme gérant des dizaines de flux de valeur peut avoir d'excellents chiffres DORA, des déploiements rapides, fréquents, stables, pendant que sa production réelle de produit a tranquillement dérivé vers un travail de maintenance presque pur, un schéma invisible pour un tableau de bord qui ne mesure que la mécanique du pipeline. Les organisations d'entreprise et gouvernementales, qui doivent justifier l'investissement d'ingénierie à des parties prenantes qui pensent en termes commerciaux, pas en termes de pipeline, ont besoin d'un vocabulaire qui connecte l'activité de livraison à l'intention stratégique. C'est ce que fournit ce cadre.

## Principes clés

- **Un flux de valeur est l'unité de mesure, pas une équipe ou un pipeline.** Il s'étend d'un besoin client ou commercial au résultat livré, traversant quelles que soient les frontières d'équipe que le travail traverse réellement.
- **Les éléments de flux rendent visible le « quoi », pas seulement le « à quelle vitesse ».** Les quatre catégories du chapitre 2.2, fonctionnalités, défauts, risques et dette, transforment une décision de priorisation implicite en une décision explicite et mesurable.
- **L'allocation de capacité entre éléments de flux est à somme nulle.** Plus de capacité dépensée sur un type d'élément est moins de capacité disponible pour les autres ; le cadre rend ce compromis visible au lieu de le laisser implicite.
- **Les cinq métriques de flux répondent à des questions commerciales, pas seulement d'ingénierie.** Elles sont conçues pour être présentées à une partie prenante non technique, pas gardées à l'intérieur d'une équipe d'ingénierie.
- **La gestion du flux de valeur devrait être continue, pas un exercice de cartographie unique.** Les cartes de flux de valeur statiques deviennent obsolètes ; le cadre est construit pour être instrumenté depuis les outils que les équipes utilisent déjà.

## Recommandations

### Cartographiez votre flux de valeur avant d'instrumenter quoi que ce soit

Avant d'adopter une métrique de flux, parcourez le chemin réel qu'un morceau de travail prend depuis l'identification d'un besoin commercial jusqu'à ce qu'un client reçoive de la valeur, nommant chaque étape et chaque transfert entre équipes. C'est l'exercice classique de [cartographie du flux de valeur](https://en.wikipedia.org/wiki/Value_stream_mapping), adapté de la fabrication lean, et le sauter est la raison la plus commune pour laquelle une adoption du Flow Framework produit des chiffres auxquels personne ne fait confiance : les métriques calculées contre un processus non examiné, compris informellement, correspondent rarement à ce qui se passe réellement.

### Connectez les métriques de flux aux outils que vos équipes utilisent déjà

Le Flow Framework est construit pour une gestion continue et automatisée du flux de valeur, pas un exercice de cartographie manuelle périodique. Intégrez le suivi des éléments de flux directement dans les outils à travers lesquels le travail circule déjà, Jira, Azure DevOps, GitHub, plutôt que de construire un système de suivi parallèle que les équipes doivent mettre à jour à la main. L'état d'un élément de flux devrait se mettre à jour lui-même à mesure que le ticket ou la demande de tirage sous-jacente se déplace, la même discipline d'instrumentation-plutôt-qu'auto-déclaration que recommande le chapitre 1.5 pour chaque métrique de ce livre.

### Présentez la distribution de flux directement aux parties prenantes commerciales, pas seulement à la direction d'ingénierie

La plus grande opportunité manquée avec ce cadre est de le traiter comme un outil d'ingénierie interne. La distribution de flux, la proportion de travail allant aux fonctionnalités contre les défauts, le risque et la dette (chapitre 2.3), est spécifiquement conçue pour être une conversation que vous avez avec la direction produit et commerciale, parce qu'elle rend une décision de priorisation implicite, combien de capacité va à la nouvelle valeur contre maintenir les lumières allumées, explicite et négociable au lieu de supposée.

### Traitez les quatre éléments de flux comme une taxonomie authentique, pas une formalité

Exigez que chaque unité de travail soit classifiée dans exactement un des quatre types d'éléments de flux à l'accueil, pas rétroactivement. Une classification appliquée après coup, ou appliquée vaguement parce que « c'est essentiellement une fonctionnalité », érode toute la valeur de la taxonomie, parce que tout l'intérêt est un enregistrement honnête et cohérent de où la capacité est réellement allée.

### Revisitez votre carte de flux de valeur quand l'organisation change, pas sur un calendrier fixe

Une carte de flux de valeur devient obsolète au moment où les frontières d'équipe, l'outillage, ou le produit lui-même changent significativement, pas selon une cadence annuelle arbitraire. Traitez une réorganisation, une migration d'outillage majeure, ou un pivot de produit significatif comme un déclencheur pour reparcourir le flux de valeur, parce qu'une métrique de flux calculée contre une carte obsolète mesure tranquillement la mauvaise chose.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Métriques de pipeline uniquement (DORA, chapitre 2.10) | Simples, bien validées, peu coûteuses à instrumenter depuis les données CI/CD existantes | Silencieuses sur quel genre de valeur est livrée |
| Adoption complète du Flow Framework | Connecte la livraison à la stratégie commerciale ; rend le mélange de valeur visible et négociable | Nécessite une carte de flux de valeur honnête et une discipline de classification cohérente des éléments de flux |
| Cartographie de flux de valeur statique, unique | Peu coûteuse, rapide à exécuter comme exercice d'atelier | Devient rapidement obsolète ; produit un instantané, pas une métrique vivante |
| Gestion continue du flux de valeur intégrée aux outils | Données vivantes, toujours actuelles ; s'échelonne à travers de nombreux flux de valeur | Nécessite un vrai travail d'intégration d'outillage en amont |

La tension centrale est **lisibilité commerciale contre effort d'instrumentation**. Les métriques de pipeline sont peu coûteuses parce que le pipeline produit déjà les données ; les métriques de flux de valeur nécessitent une carte honnête de tout le processus et une habitude de classification disciplinée au moment de l'accueil que les métriques de pipeline n'ont jamais exigée. Résolvez la tension en commençant avec un flux de valeur, pas toute l'organisation à la fois, en le cartographiant correctement, et seulement ensuite en intégrant le suivi des éléments de flux dans les outils existants, plutôt que de tenter un déploiement massif à travers chaque équipe simultanément.

## Questions à discuter avec votre équipe

1. **Pourrions-nous dessiner une carte de flux de valeur précise pour notre produit le plus important en ce moment, ou devinerions-nous plusieurs des transferts ?** La plupart des organisations n'ont jamais réellement parcouru ce chemin de bout en bout. Tentez l'exercice honnêtement et notez chaque endroit où le groupe est en désaccord sur ce qui se passe réellement, parce que ce désaccord est lui-même diagnostique.

2. **Si nous classifiions tout ce que notre équipe a livré le dernier trimestre en fonctionnalités, défauts, risque et dette, le résultat surprendrait-il notre direction produit ?** La plupart des équipes n'ont jamais rendu cette répartition explicite, et la réponse révèle souvent un fardeau de maintenance ou un problème de dette qui était auparavant invisible dans un simple compte de « points d'histoire livrés ».

3. **Avons-nous une manière authentique et intégrée aux outils de suivre les éléments de flux, ou cela nécessiterait-il que quelqu'un classifie et reclassifie manuellement le travail à la main ?** Un système manuel se dégrade rapidement sous une charge de travail réelle ; un système intégré aux outils non. Évaluez honnêtement lequel vous êtes réellement prêts à soutenir.

4. **Quand notre carte de flux de valeur a-t-elle changé pour la dernière fois, et avons-nous mis à jour nos métriques pour refléter cela ?** Les réorganisations et les migrations d'outillage invalident tranquillement une carte de flux de valeur, et peu d'organisations se souviennent de la revisiter quand cela arrive.

## Regard sectoriel

**Startup.** Une carte de flux de valeur complète est généralement excessive pour une équipe de cinq personnes où tout le monde connaît déjà tout le processus par cœur. L'habitude utile à cette échelle est simplement de nommer les quatre types d'éléments de flux à voix haute dans les conversations de planification, pour que le travail de dette et de risque ne disparaisse pas tranquillement de la vue au moment où une échéance de fonctionnalité approche.

**Petite entreprise.** Adoptez la classification des éléments de flux à l'intérieur de quel que soit l'outil de suivi léger que vous utilisez déjà, une colonne étiquetée ou un champ personnalisé, plutôt que n'importe quel produit dédié de gestion de flux de valeur. La discipline de classification cohérente importe bien plus que la sophistication de l'outillage derrière elle.

**Grande entreprise.** C'est ici que le cadre se rentabilise, parce qu'une grande organisation gérant des dizaines de flux de valeur à travers de nombreuses lignes de produits n'a aucun autre moyen fiable de voir, en un seul endroit, comment la capacité d'ingénierie est réellement allouée entre fonctionnalités, défauts, risque et dette. Investissez dans l'intégration d'outillage ; l'alternative manuelle ne survit pas au contact de la vraie échelle.

**Gouvernement.** La distribution de flux donne à une organisation d'ingénierie du secteur public une réponse défendable et lisible pour l'entreprise à « pourquoi pas plus de nouvelle fonctionnalité est-elle livrée », quand la réponse honnête est une part croissante de capacité allant à la remédiation de sécurité ou à la dette héritée. Rendre ce compromis visible et explicite, plutôt que d'absorber la pression tranquillement, est souvent la chose la plus utile que ce cadre offre à un dirigeant technologique gouvernemental.

## Exemples

**Grande entreprise.** L'organisation de plateforme de sinistres d'un grand assureur croyait qu'elle livrait principalement de nouvelles fonctionnalités, sur la base de ses rapports de vélocité de sprint. Un premier exercice de cartographie de flux de valeur et de classification d'éléments de flux a révélé que le travail de dette et de risque, beaucoup venant de dette technique non documentée d'un système central vieux d'une décennie, consommait en fait près de la moitié de la capacité d'ingénierie totale, un fait qu'aucun rapport précédent n'avait fait émerger parce que ce travail avait toujours été plié dans des « tâches d'ingénierie » génériques. Présenter cette répartition au comité exécutif a sécurisé un budget dédié de réduction de dette pour la première fois dans l'histoire de la plateforme, plutôt que le travail de dette continuant à concurrencer tranquillement chaque demande de fonctionnalité.

**Gouvernement.** La division des services numériques d'une autorité fiscale nationale a utilisé la cartographie de flux de valeur pour diagnostiquer pourquoi une fonctionnalité phare orientée citoyen était « en cours » depuis plus d'un an malgré une complétion de sprint régulière. La carte a révélé que le flux de valeur s'étendait réellement sur cinq équipes séparées avec trois transferts que l'organigramme ne reflétait pas, et la classification des éléments de flux a montré que le temps d'ingénierie réel de la fonctionnalité était une petite fraction de son temps de flux total, le reste consommé par des délais de transfert entre équipes qu'aucune métrique propre à une seule équipe ne pouvait voir. La division s'est restructurée autour du flux de valeur plutôt que de l'organigramme pour cette ligne de produit spécifique, réduisant substantiellement le temps de flux en deux trimestres.

## Argumentaire économique : motivations, ROI et TCO

Le retour de l'adoption du Flow Framework est une réponse défendable et lisible pour l'entreprise à une question que les métriques de pipeline ne peuvent pas répondre : la capacité d'ingénierie est-elle allouée de la manière dont la direction le croit. L'exemple de l'assureur ci-dessus, faisant émerger près de la moitié de la capacité allant à un travail de dette auparavant invisible, est un schéma commun une fois qu'une organisation classifie réellement son travail honnêtement, et cette visibilité débloque routinement un investissement qu'une vague demande « nous avons besoin de plus de temps pour la dette technique » n'aurait jamais pu obtenir.

Le coût total de possession est concentré en deux endroits : l'exercice initial de cartographie de flux de valeur, qui prend un vrai temps de facilitation pour être fait honnêtement, et l'intégration d'outillage nécessaire pour garder les données d'éléments de flux actuelles sans entretien manuel. Les deux coûts sont uniques ou à faible entretien une fois bien faits, ce qui rend le cadre considérablement moins coûteux à soutenir qu'à adopter.

## Antipatrons et pièges

- **Traiter la cartographie de flux de valeur comme un atelier unique, jamais revisité :** la carte devient obsolète au moment où l'organisation change, et une métrique calculée contre une carte obsolète mesure la mauvaise chose.
- **Construire un système parallèle de suivi d'éléments de flux maintenu manuellement :** se dégrade rapidement sous une charge de travail réelle ; intégrez plutôt dans les outils existants.
- **Classifier les éléments de flux rétroactivement plutôt qu'à l'accueil :** le vecteur de manipulation au cœur de ce chapitre. Sous pression de livraison, une équipe peut tranquillement reclassifier le travail de dette ou de risque en fonctionnalités après coup pour paraître plus productive aux parties prenantes qui ne voient que le graphique de distribution de flux, sans que personne ne prenne jamais une décision explicite et visible de le faire. Le garde-fou est d'exiger la classification à l'accueil, avant que le résultat ne soit connu, et d'auditer périodiquement un échantillon d'éléments classifiés contre ce que le changement sous-jacent a réellement fait, la même discipline d'audit que le chapitre 1.2 demande pour chaque métrique de ce livre.
- **Garder les métriques de flux uniquement à l'intérieur de l'ingénierie :** renonce au principal avantage du cadre, un vocabulaire partagé avec les parties prenantes commerciales.
- **Cartographier l'organigramme au lieu du flux de valeur réel :** cache les transferts inter-équipes qui sont souvent la plus grande source de délai.
- **Adopter le cadre à l'échelle de l'organisation avant de le valider sur un flux de valeur :** risque un investissement important dans des métriques auxquelles personne ne fait confiance parce que la carte sous-jacente n'a jamais été confirmée précise.

## Modèle de maturité

- **Niveau 1, Initiation :** Aucune carte de flux de valeur n'existe ; le travail est suivi comme des tickets génériques sans classification d'éléments de flux.
- **Niveau 2, Développement :** Un flux de valeur a été cartographié et les éléments de flux sont classifiés informellement, mais le suivi est manuel et appliqué de manière incohérente.
- **Niveau 3, Standardisation :** La classification des éléments de flux est intégrée dans l'outillage existant et appliquée de manière cohérente à l'accueil à travers les flux de valeur majeurs.
- **Niveau 4, Gestion :** La distribution de flux est revue régulièrement avec les parties prenantes commerciales, et les cartes de flux de valeur sont activement maintenues actuelles à mesure que l'organisation change.
- **Niveau 5, Orchestration :** L'organisation alloue délibérément l'investissement d'ingénierie à travers les flux de valeur en utilisant les données de flux, et peut pointer vers des décisions stratégiques spécifiques, un budget de réduction de dette, une restructuration d'équipe, prises parce que le cadre a rendu visible un compromis auparavant invisible.

## Idées de discussion

1. Pourrions-nous dessiner une carte de flux de valeur précise pour notre produit phare aujourd'hui, sans deviner ?
2. Quel pourcentage de la capacité du dernier trimestre une classification honnête des éléments de flux révélerait-elle être allé à la dette et au risque, contre les fonctionnalités ?
3. Nos métriques de flux atteignent-elles actuellement les parties prenantes commerciales, ou restent-elles à l'intérieur de l'ingénierie ?
4. Quel est le plus grand transfert inter-équipes dans notre flux de valeur que notre organigramme ne reflète pas ?

## Points clés à retenir

- Le **Flow Framework**, du livre *Project to Product* de Mik Kersten, mesure quel genre de valeur traverse un pipeline de livraison, pas seulement à quelle vitesse le pipeline lui-même fonctionne.
- Un **flux de valeur**, pas une équipe ou un pipeline, est l'unité de mesure du cadre, et le cartographier honnêtement précède l'instrumentation de quoi que ce soit.
- La **classification des éléments de flux à l'accueil, pas après coup**, est le garde-fou contre le vecteur de manipulation central de ce chapitre : reclassifier tranquillement le travail de dette ou de risque en fonctionnalités pour paraître plus productif.
- **Connectez les métriques de flux aux outils existants**, Jira, Azure DevOps, GitHub, plutôt qu'un système de suivi manuel parallèle qui ne survivra pas à une charge de travail réelle.
- Présentez les données de flux **directement aux parties prenantes commerciales** ; cette conversation, pas un tableau de bord d'ingénierie interne, est le principal avantage du cadre sur les métriques de pipeline uniquement.

## Sources et lectures complémentaires

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
