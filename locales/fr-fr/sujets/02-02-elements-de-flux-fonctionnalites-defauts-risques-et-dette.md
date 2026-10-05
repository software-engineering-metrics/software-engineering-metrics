# 2.2 Éléments de flux : fonctionnalités, défauts, risques et dette

## Vue d'ensemble et motivation

Un **élément de flux** est l'unité de travail du Flow Framework, et chaque élément de flux appartient à exactement l'un des quatre types : **fonctionnalités**, nouvelle valeur ou capacité commerciale livrée à un client ; **défauts**, corrections de qualité pour les bugs trouvés par les utilisateurs ou les tests ; **risques**, travail de sécurité, conformité, confidentialité et gouvernance qui protège l'entreprise ; et **dette**, [dette technique](https://en.wikipedia.org/wiki/Technical_debt), amélioration architecturale et travail d'infrastructure qui permet la vitesse future. Le sujet 2.1 a introduit le cadre auquel appartiennent ces quatre catégories ; ce sujet approfondit la taxonomie elle-même, parce que les catégories ne livrent de la valeur que si une équipe classifie son travail en elles honnêtement et de manière cohérente.

La propriété déterminante des éléments de flux est que l'allocation entre les quatre types est un **jeu à somme nulle** : une quantité fixe de capacité d'ingénierie existe dans toute période donnée, et chaque heure dépensée sur une fonctionnalité est une heure non dépensée sur la dette, le risque ou le travail de défaut. Ce n'est pas un nouveau fait sur la livraison de logiciel, chaque dirigeant d'ingénierie sait déjà que la capacité est finie, mais la plupart des organisations n'ont aucune manière cohérente et honnête de voir la répartition réelle. La vélocité de sprint compte les points d'histoire indépendamment du type ; un backlog épuisé a l'air identique que le travail derrière lui ait été un nouveau flux de paiement ou trois mois de remédiation de sécurité peu glamour. Les éléments de flux existent spécifiquement pour rendre visible cette répartition invisible.

Pour les grandes équipes, cette visibilité change la nature d'une conversation de ressources. Au lieu qu'un dirigeant d'ingénierie fasse un argument non quantifié que « nous avons besoin de plus de temps pour la dette technique », la classification des éléments de flux produit un chiffre réel, la dette a consommé 30 % de la capacité du dernier trimestre, qui peut être discuté, défendu et ajusté délibérément avec les parties prenantes commerciales. Les organisations d'entreprise gérant de nombreuses lignes de produits concurrentes et les agences gouvernementales équilibrant la nouvelle fonctionnalité orientée citoyen contre le risque de système hérité dépendent toutes deux de ce genre de compromis défendable et quantifié bien plus qu'un sentiment privé et informel que « nous passons trop de temps sur la maintenance ».

## Principes clés

- **Chaque élément de flux appartient à exactement un type.** Forcer une classification unique, plutôt que permettre une mélangée ou ambiguë, est ce qui rend la taxonomie utilisable pour le rapport agrégé.
- **L'allocation est à somme nulle, pas additive.** Plus de capacité pour les fonctionnalités est nécessairement moins de capacité pour les défauts, le risque et la dette dans la même période.
- **Il n'y a pas de distribution universellement saine.** Un jeune produit en phase de croissance devrait légitimement pencher vers les fonctionnalités ; un système mature portant un vrai risque technique devrait légitimement pencher vers le travail de dette et de risque.
- **Le travail de dette et de risque est chroniquement sous-rapporté sans cette discipline.** Il tend à se produire tranquillement, absorbé dans des « tâches d'ingénierie » génériques, jusqu'à ce que la classification des éléments de flux le force au grand jour.
- **La qualité de la classification détermine toute la valeur de la taxonomie.** Une taxonomie appliquée de manière incohérente ou manipulée après coup produit des chiffres qui induisent activement en erreur plutôt que d'informer.

## Recommandations

### Classifiez chaque élément à l'accueil, en utilisant une définition écrite pour chaque type

Accordez-vous sur une définition concise et écrite de ce qui compte comme une fonctionnalité, un défaut, un risque et une dette dans votre contexte spécifique, et exigez que chaque nouveau morceau de travail soit classifié contre cette définition au moment où il entre dans le flux de valeur, pas après qu'il soit terminé. Une définition convenue à l'avance résiste à la tentation de classifier rétroactivement sur la base de comment un morceau de travail a fini par ressembler, ce qui est exactement le risque de manipulation que ce sujet nomme directement ci-dessous.

### Rapportez la distribution de flux comme une tendance, pas un instantané unique

La distribution d'une seule période vous en dit moins que la tendance à travers plusieurs périodes. Une dérive constante vers un type d'élément, les fonctionnalités grimpant pendant que la dette rétrécit tranquillement trimestre après trimestre, est un signal bien plus fort que le chiffre de n'importe quelle période unique, et c'est généralement le schéma qui vaut la peine d'être soulevé avec les parties prenantes avant qu'il ne devienne une crise plutôt qu'après.

### Établissez une distribution cible délibérée avec les parties prenantes commerciales, pas seulement l'ingénierie

Décidez, avec la direction produit et commerciale, à quoi ressemble une distribution saine pour la phase actuelle de votre flux de valeur spécifique, et revisitez cette cible périodiquement plutôt que de la laisser dériver par défaut. Un produit jeune en phase de croissance et un système mature en phase de stabilité ont des cibles saines légitimement différentes, et la cible elle-même devrait être une décision commerciale négociée, pas quelque chose que l'ingénierie décide tranquillement seule.

### Vérifiez la classification des éléments de flux par recoupement avec des preuves indépendantes

Comparez périodiquement votre distribution de flux avec des métriques qui ne dépendent pas de l'auto-classification : le taux de défauts échappés (sujet 5.1), la mesure de la dette technique (sujet 4.5), et les métriques de gestion des vulnérabilités (sujet 6.4). Si les défauts ou les vulnérabilités augmentent pendant que les parts d'éléments de flux « défauts » et « risque » restent plates ou rétrécissent, cette inadéquation est le signal le plus clair disponible que la classification a dérivé de la réalité.

### Surveillez spécifiquement le schéma d'usine à fonctionnalités

Quand la distribution de flux montre les fonctionnalités absorbant systématiquement presque toute la capacité, trimestre après trimestre, avec le travail de dette et de risque ne montant jamais au-dessus d'une part symbolique, ce schéma (parfois appelé « usine à fonctionnalités ») signifie généralement que la dette et le risque sont privés de capacité, pas que le système n'a authentiquement besoin d'aucune maintenance. Ce schéma est confortable à court terme et coûteux plus tard, se manifestant éventuellement comme une crise de qualité ou de sécurité qui arrive sans avertissement dans le graphique de distribution de flux, parce que l'accumulation sous-jacente n'a jamais été visible.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Aucune classification formelle (backlog générique) | Aucune charge de processus | Le travail de dette, risque et défaut reste invisible ; difficile à défendre les décisions de ressources |
| Classification en quatre types d'éléments de flux | Rend l'allocation de capacité visible et négociable avec les parties prenantes | Nécessite une discipline au moment de l'accueil et une définition écrite et convenue par type |
| Classification plus fine (nombreux sous-types) | Plus de détail diagnostique | Plus d'effort de classification ; plus de chiffres à expliquer aux parties prenantes |
| Classification rétroactive | Plus facile à appliquer, aucun changement de processus en amont | Hautement exposée à la manipulation ; la classification dérive vers ce qui a l'air le mieux |

La tension centrale est **discipline de classification contre charge de processus**. Une taxonomie en quatre types est délibérément grossière, assez grossière pour que classifier un élément prenne des secondes, pas un débat, mais cette grossièreté ne tient que si la discipline de classifier à l'accueil, contre une définition écrite, est authentiquement maintenue. Résolvez la tension en gardant la taxonomie exactement aussi simple, quatre types, pas plus, et en investissant toute rigueur supplémentaire dans l'étape d'audit (recoupement avec des preuves indépendantes) plutôt que dans un schéma de classification plus élaboré qui s'érode sous une charge de travail réelle.

## Questions à discuter avec votre équipe

1. **Si nous classifiions tout ce que notre équipe a livré le dernier trimestre, à quoi ressemblerait la répartition réelle entre fonctionnalités, défauts, risque et dette, et cela surprendrait-il nos parties prenantes ?** La plupart des équipes n'ont jamais fait cet exercice honnêtement. Tentez-le avec de vraies données avant de supposer que vous connaissez déjà la réponse.

2. **Avons-nous une définition écrite et convenue de ce qui compte comme une fonctionnalité contre une dette contre un risque dans notre contexte spécifique, ou la classification dépend-elle de qui étiquette le ticket ?** Une définition informelle et incohérente produit des chiffres qui ont l'air précis mais ne sont pas réellement comparables période après période.

3. **Notre distribution de flux a-t-elle déjà dérivé régulièrement vers un type d'élément sans que personne ne le décide délibérément ?** Une dérive lente est facile à manquer période par période mais évidente une fois tracée comme tendance. Rassemblez plusieurs périodes de données, si vous les avez, et cherchez honnêtement ce schéma.

4. **À quoi ressemblerait une distribution de flux saine pour la phase actuelle de notre produit, et nous sommes-nous réellement accordés sur cette cible avec les parties prenantes commerciales ?** La plupart des organisations n'ont jamais rendu cette cible explicite, ce qui signifie qu'il n'y a aucune base partagée pour remarquer quand la distribution réelle s'en éloigne.

5. **Notre distribution de flux correspond-elle à des preuves indépendantes, comme le taux de défauts échappés ou le nombre de vulnérabilités ouvertes, ou y a-t-il une inadéquation qui vaut la peine d'être investiguée ?** Une inadéquation ici est le signe le plus clair disponible que la classification a dérivé de ce qu'est réellement le travail.

6. **Quelqu'un dans notre équipe pourrait-il tranquillement reclassifier un élément de dette ou de risque en fonctionnalité sous pression de livraison, et le remarquerions-nous actuellement s'il le faisait ?** C'est le risque de manipulation central du sujet énoncé directement. Discutez si votre processus actuel attraperait réellement cela, pas seulement si quelqu'un le ferait délibérément.

## Regard sectoriel

**Startup.** La classification formelle ressemble souvent à une charge quand toute l'équipe sait déjà ce sur quoi tout le monde travaille. Le minimum utile à cette échelle est simplement de nommer les quatre catégories à voix haute pendant la planification, pour que le travail de dette et de risque ne soit pas tranquillement dépriorisé chaque fois qu'une échéance de fonctionnalité crée une pression, un schéma qui s'aggrave mal une fois que la base de code et l'équipe grandissent toutes deux.

**Petite entreprise.** Un seul champ personnalisé ou étiquette dans votre outil de suivi existant suffit pour capturer le type d'élément de flux sans aucun investissement d'outillage dédié. La discipline de classifier de manière cohérente à l'accueil importe bien plus que n'importe quelle sophistication d'outillage.

**Grande entreprise.** La classification des éléments de flux est là où ce cadre se rentabilise à l'échelle, parce qu'une grande organisation gérant de nombreux flux de valeur concurrents n'a aucun autre moyen fiable et agrégé de voir comment la capacité est réellement répartie entre fonctionnalités, défauts, risque et dette. Investissez dans une classification intégrée aux outils et des recoupements périodiques avec des preuves indépendantes ; la classification manuelle et improvisée ne survit pas à l'échelle organisationnelle réelle.

**Gouvernement.** La distribution de flux donne à un dirigeant technologique du secteur public une réponse défendable et quantifiée quand on lui demande pourquoi plus de nouvelles fonctionnalités orientées citoyen ne sont pas livrées, quand la réponse honnête est qu'un fardeau de risque et de dette d'un système hérité consomme une part réelle et justifiable de la capacité. Rendre ce compromis explicite et négocié, plutôt qu'absorbé tranquillement, tend à construire plus de confiance avec les organes de surveillance qu'un appel non quantifié à la « nécessité technique ».

## Exemples

**Grande entreprise.** L'équipe de plateforme de commerce électronique d'une grande entreprise de vente au détail croyait, sur la base de la vélocité de sprint, qu'elle livrait une production de fonctionnalités régulière. Un premier exercice honnête de classification des éléments de flux a trouvé que les « fonctionnalités » ne constituaient en fait que 40 % du travail terminé, avec la dette, beaucoup liée à un système de paiement vieillissant, consommant près d'un tiers de la capacité sans jamais avoir été nommée comme telle dans aucun rapport précédent. Présenter cette répartition à la direction produit, aux côtés d'un taux de défauts échappés croissant qui corroborait le fardeau de la dette, a sécurisé un budget de modernisation dédié que l'équipe avait demandé sans succès pendant deux ans en utilisant uniquement des arguments qualitatifs.

**Gouvernement.** L'équipe de licences numériques d'une agence de véhicules motorisés d'un État a classifié son backlog pour la première fois après qu'une panne publique ait attiré l'attention sur la stabilité du système sous-jacent. L'exercice a révélé que le travail de « risque », principalement le correctif de sécurité qui avait été dépriorisé de manière répétée en faveur de fonctionnalités visibles orientées citoyen, avait rétréci à moins de 5 % de la capacité au cours de l'année précédente, un schéma qui n'avait jamais été visible dans le rapport standard de l'équipe. La direction de l'agence a utilisé la découverte pour mandater une allocation minimale de travail de risque à l'avenir, soutenue par les données de distribution de flux plutôt qu'une simple déclaration de politique générale.

## Argumentaire économique : motivations, ROI et TCO

Le retour de la classification des éléments de flux est une base défendable et quantifiée pour les décisions de ressources précédemment argumentées qualitativement et souvent perdues face à quel que soit le travail le plus visible pour les parties prenantes. L'exemple de la vente au détail ci-dessus, sécurisant un budget de modernisation avec des données de capacité réelles plutôt qu'un appel général, est le schéma que cette discipline produit fiablement : un chiffre spécifique est bien plus difficile à rejeter qu'une impression générale que « nous avons besoin de plus de temps pour la maintenance ».

Le coût total de possession est faible une fois que la taxonomie et ses définitions sont convenues : la classification ajoute des secondes à l'accueil, pas une charge de processus significative, et l'intégration d'outillage nécessaire pour la suivre est généralement un seul champ personnalisé ou une étiquette. Le coût réel et continu est la discipline de maintenir une classification honnête sous pression de livraison, c'est pourquoi le recoupement périodique avec des preuves indépendantes importe autant que l'adoption initiale.

## Antipatrons et pièges

- **Classifier le travail rétroactivement, après que le résultat soit connu :** le vecteur de manipulation au cœur de ce sujet. Sous pression de livraison, une équipe peut tranquillement étiqueter du travail de dette ou de risque comme une fonctionnalité après coup, ou arrondir un élément ambigu vers quel que soit le type qui a l'air le mieux sur le graphique de distribution, sans qu'aucune décision unique n'ait jamais l'air malhonnête en elle-même. Le garde-fou est la classification au moment de l'accueil contre une définition écrite, combinée avec des audits périodiques comparant la distribution de flux à des preuves indépendantes comme le taux de défauts échappés (sujet 5.1) et les métriques de vulnérabilité (sujet 6.4), la même discipline d'audit-contre-preuve-indépendante que le sujet 1.2 demande pour chaque métrique de ce livre.
- **Laisser les fonctionnalités absorber systématiquement presque toute la capacité (le schéma d'usine à fonctionnalités) :** prive tranquillement le travail de dette et de risque de capacité jusqu'à ce qu'il émerge comme une crise.
- **Traiter la distribution d'une seule période comme l'image complète :** manque la dérive lente et cumulative qu'une vue de tendance révèle clairement.
- **Établir une distribution cible sans les parties prenantes commerciales :** renonce à la principale valeur du cadre, une compréhension partagée et négociée du compromis.
- **Utiliser une définition incohérente ou non documentée par type :** produit des chiffres qui ont l'air précis mais ne sont pas réellement comparables dans le temps.
- **Sur-concevoir la taxonomie avec de nombreux sous-types :** ajoute une charge de classification qui érode la discipline sans ajouter une perspicacité proportionnelle.

## Modèle de maturité

- **Niveau 1, Initiation :** Le travail est suivi génériquement, sans classification d'éléments de flux ; le travail de dette et de risque est invisible dans le rapport.
- **Niveau 2, Développement :** Certaines équipes classifient les éléments de flux informellement, mais les définitions sont incohérentes et la classification se produit souvent rétroactivement.
- **Niveau 3, Standardisation :** Toutes les équipes classifient à l'accueil contre une définition écrite et partagée, et la distribution de flux est suivie comme une tendance.
- **Niveau 4, Gestion :** La distribution de flux est recoupée périodiquement avec des preuves indépendantes, et les distributions cibles sont établies délibérément avec les parties prenantes commerciales.
- **Niveau 5, Orchestration :** Les données d'éléments de flux informent directement les décisions de ressources et d'investissement à travers l'organisation, et la direction peut pointer vers des décisions spécifiques prises parce que la classification a rendu explicite un compromis auparavant invisible.

## Idées de discussion

1. Que montrerait une répartition honnête des éléments de flux du travail du dernier trimestre, et cela surprendrait-il quelqu'un ?
2. Avons-nous une définition écrite pour chacun des quatre types d'éléments de flux, ou la classification dépend-elle de qui étiquette le travail ?
3. Notre distribution de flux a-t-elle déjà dérivé vers un type d'élément sans décision délibérée derrière cela ?
4. Avec quelle preuve indépendante pourrions-nous recouper notre distribution de flux aujourd'hui ?

## Points clés à retenir

- Un **élément de flux** appartient à exactement l'un des quatre types, fonctionnalités, défauts, risques ou dette, et l'allocation de capacité entre eux est à **somme nulle**.
- Il n'y a **pas de distribution universellement saine** ; le bon mélange dépend de la phase d'un produit et devrait être une cible délibérée et négociée avec les parties prenantes commerciales.
- Le vecteur de manipulation central du sujet est la **classification rétroactive**, reclassifier tranquillement du travail de dette ou de risque en fonctionnalité après coup ; le garde-fou est la classification au moment de l'accueil plus des audits périodiques contre des preuves indépendantes.
- Surveillez spécifiquement le **schéma d'usine à fonctionnalités**, les fonctionnalités absorbant systématiquement presque toute la capacité, qui prive le travail de dette et de risque jusqu'à ce qu'il émerge comme une crise.
- La distribution de flux est la plus précieuse comme **tendance**, et son plus grand gain vient du partage direct avec les parties prenantes commerciales.

## Sources et lectures complémentaires

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
