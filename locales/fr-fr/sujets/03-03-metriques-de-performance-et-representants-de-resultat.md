# 3.3 Métriques de performance et représentants de résultat

## Vue d'ensemble et motivation

La **performance**, le P dans SPACE (sujet 3.1), est la dimension la plus souvent confondue avec l'activité, et cette confusion est exactement ce que ce sujet existe pour prévenir. La performance demande si le travail d'un ingénieur ou d'une équipe a réellement produit un bon [résultat](https://en.wikipedia.org/wiki/Outcome_(probability)) : une fonctionnalité qui a été livrée et a fonctionné, un système qui est resté fiable, un changement qui a fait bouger une métrique commerciale ou utilisateur dans la bonne direction. L'activité (sujet 3.4) demande seulement combien de mouvement s'est produit. Une équipe peut être hautement active et peu performante, livrant des petits changements constants qui ne font jamais bouger un résultat, et l'inverse est également possible : une équipe qui livre rarement mais dont les changements atterrissent fiablement exactement bien.

La difficulté avec cette dimension est que le résultat n'est souvent pas attribuable à une seule personne ou même une seule équipe ; les résultats logiciels émergent de la collaboration, de décisions prises des mois plus tôt par des personnes ayant depuis déménagé vers d'autres projets, de conditions de marché qu'aucun ingénieur ne contrôle. Les chercheurs de SPACE étaient explicites à ce sujet : la performance devrait être mesurée au niveau du système ou de l'équipe en utilisant de multiples signaux convergents, pas réduite à un seul chiffre et certainement pas attribuée à un ingénieur individuel isolément. Ce sujet prend ce conseil au sérieux et traite l'attribution de performance individuelle comme un piège à éviter activement, pas un raccourci à prendre quand c'est pratique.

Pour les grandes équipes, bien faire la mesure de performance est ce qui sépare un programme de métriques améliorant réellement les résultats d'un qui ne fait que récompenser une occupation visible. Les organisations d'entreprise comparant la performance à travers de nombreuses équipes ont besoin de signaux résistant à la manipulation par volume de production brut ; les organisations gouvernementales justifiant l'investissement technologique auprès d'organes de surveillance doivent démontrer que l'effort d'ingénierie a produit de vrais résultats, pas seulement livré des artefacts, ce qui est précisément le principe de résultats-plutôt-que-production du sujet 1.3 appliqué à cette dimension spécifique.

## Principes clés

- **La performance mesure si le travail a produit un bon résultat, pas combien de travail s'est produit.** C'est la distinction centrale avec la dimension activité.
- **Utilisez de multiples signaux convergents, jamais un seul chiffre de performance.** Aucun représentant individuel n'est assez fiable pour se tenir seul.
- **Mesurez au niveau de l'équipe ou du système.** L'attribution de résultat individuel est généralement peu fiable et invite exactement la manipulation contre laquelle ce livre met en garde tout au long.
- **La qualité fait partie de la performance, pas une préoccupation séparée.** Le travail qui est livré mais casse autre chose n'a pas vraiment bien performé.
- **Un signal de performance sans décision attachée est décoratif**, exactement selon le principe général du sujet 1.1 appliqué à cette dimension.

## Recommandations

### Combinez plusieurs signaux convergents plutôt qu'un score de performance unique

Tirez les preuves de performance de multiples sources : le taux d'échecs de changement (sujet 2.10) et le taux de défauts échappés (sujet 5.1) pour la qualité, les résultats de déploiement liés à l'adoption réelle de fonctionnalités (sujet 5.2) pour si le travail a compté, et l'évaluation qualitative par les pairs ou le manager de la contribution d'une équipe aux objectifs stratégiques pour un contexte qu'une métrique pure ne peut pas capturer. Aucun de ces éléments seul n'est fiable ; ensemble, quand ils convergent vers la même conclusion, ils sont bien plus fiables que ne pourrait l'être n'importe quel chiffre unique.

### Mesurez au niveau de l'équipe, résistez à l'attribution individuelle

Les résultats logiciels sont rarement le produit du travail d'une seule personne seule ; ils émergent de décisions de conception, de retours de revue, de travail antérieur de personnes ayant depuis quitté l'équipe, et de collaboration à travers les frontières. Attribuer un résultat à un seul ingénieur est généralement une fausse précision qui ignore cette réalité et crée une forte incitation pour les individus à protéger le mérite plutôt qu'à collaborer librement, exactement le genre de distorsion d'incitation contre laquelle met en garde le sujet 1.2.

### Intégrez la qualité directement dans la définition de la performance

Une fonctionnalité livrée à temps mais causant une vague d'incidents de production n'a pas bien performé, même si une vue naïve uniquement de production la compterait comme livrée. Construisez le taux d'échecs de changement, le taux de défauts échappés et les données d'incidents post-sortie directement dans la façon dont vous évaluez la performance, plutôt que de traiter la qualité comme une préoccupation séparée et déconnectée mesurée seulement dans les parties 4 et 6 de ce livre.

### Utilisez les données de performance pour informer les décisions d'investissement et de processus, pas des classements individuels

L'usage productif des données de performance est de décider où investir davantage (une équipe livrant constamment de forts résultats mérite plus de ressources et d'autonomie) et où investiguer (une équipe dont le travail échoue constamment à atterrir mérite de l'aide, pas du blâme, selon la formulation diagnostique du sujet 1.1). Classer des individus ou des équipes de manière compétitive les uns contre les autres sur les données de performance invite exactement la manipulation et le dommage de moral contre lesquels ce livre met en garde et produit rarement de meilleurs résultats que l'usage diagnostique.

### Soyez honnêtes sur les limites d'attribution, surtout pour les équipes de plateforme et habilitantes

Les équipes qui construisent une infrastructure partagée, des outils internes, ou des capacités de plateforme (le chapitre d'ingénierie de plateforme du livre compagnon `software-engineering-guide` couvre cela directement) ont souvent leur contribution aux résultats plusieurs étapes éloignée de toute métrique unique orientée client. Mesurez la performance de ces équipes à travers leur effet sur les équipes qu'elles habilitent, l'adoption de leur plateforme, la réduction de friction rapportée par les équipes consommatrices, plutôt que de forcer une métrique de résultat direct mal adaptée sur un travail intrinsèquement indirect.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Score de performance unique par équipe | Simple à présenter et comparer | Fausse précision ; cache quel signal sous-jacent a réellement conduit le score |
| Multiples signaux convergents | Plus fiable, résiste à la manipulation à métrique unique | Plus difficile à résumer en un chiffre ; nécessite plus de contexte à interpréter |
| Mesure de performance au niveau de l'équipe | Correspond à comment les résultats logiciels émergent réellement | Ne peut pas répondre directement aux questions sur la contribution individuelle |
| Attribution de performance au niveau individuel | Semble plus directement actionnable pour les évaluations | Généralement une fausse précision ; fort risque de manipulation et de protection de mérite |

La tension centrale est **précision contre honnêteté**. Un seul chiffre de performance par équipe, ou pire, par individu, est facile à comparer et classer, mais cette précision est généralement fausse, cachant une vraie incertitude sur l'attribution et la qualité derrière un chiffre qui a l'air net. Résolvez la tension en acceptant une image moins ordonnée et à signaux multiples comme l'honnête, et en résistant à la pression de la direction ou des processus d'évaluation de performance pour la réduire de nouveau en un seul score faussement précis.

## Questions à discuter avec votre équipe

1. **Notre mesure de performance actuelle combine-t-elle de multiples signaux convergents, ou se fie-t-elle à un seul chiffre qui semble plus précis qu'il ne l'est réellement ?** Auditez ce que vous appelez actuellement « métrique de performance » et vérifiez combien de signaux indépendants et convergents l'alimentent réellement.

2. **Avons-nous déjà attribué la performance d'une équipe ou d'un individu sans tenir compte de la nature collaborative et inter-équipes de comment le résultat s'est réellement produit ?** Choisissez une histoire de succès récente et tracez combien elle dépendait de personnes, de décisions, ou de travail antérieur en dehors de l'équipe ou de l'individu crédité.

3. **Notre mesure de performance inclut-elle la qualité, ou seulement la vitesse de livraison et le volume de production ?** Une fonctionnalité livrée ayant plus tard causé des incidents de production significatifs ne devrait pas obtenir un score de haute performance ; vérifiez si votre mesure actuelle attraperait réellement ce cas.

4. **Comment mesurons-nous la performance des équipes de plateforme ou habilitantes dont la contribution aux résultats est indirecte ?** Si la réponse honnête est « nous ne le faisons pas, enfin », cet écart vaut la peine d'être nommé et adressé directement plutôt que de laisser ces équipes effectivement non mesurées ou injustement mesurées contre des métriques de résultat orientées client qui ne conviennent pas à leur travail.

5. **Les données de performance ont-elles déjà été utilisées pour classer des individus de manière compétitive les uns contre les autres, formellement ou informellement ?** Cette dérive, similaire au risque de données de satisfaction du sujet 3.2, endommage à la fois l'honnêteté des données et la volonté de l'équipe de collaborer ouvertement.

6. **Quand nos signaux convergents sont en désaccord, une haute vitesse de livraison mais un taux de défauts croissant, par exemple, que concluons-nous, et notre processus gère-t-il bien ce désaccord ?** Le désaccord entre signaux est lui-même une information précieuse ; discutez si votre équipe le traite actuellement comme du bruit à ignorer ou comme une véritable découverte valant la peine d'être investiguée.

## Regard sectoriel

**Startup.** La performance est généralement visible directement : la fonctionnalité a-t-elle fonctionné, les clients l'ont-ils adoptée, la métrique a-t-elle bougé. La mesure formelle à signaux multiples est souvent inutile à cette échelle ; le risque est plutôt d'attribuer le succès ou l'échec trop vite à une personne dans une petite équipe se déplaçant vite et hautement collaborative où le mérite et le blâme n'appartiennent rarement à un seul individu.

**Petite entreprise.** Combinez quelles que soient les données de livraison et de qualité que vous avez déjà (sujet 2.10, sujet 5.1) avec une conversation directe et honnête sur si le travail récent a réellement aidé l'entreprise, plutôt que de construire une instrumentation formelle à signaux multiples que vous n'avez pas la capacité de maintenir.

**Grande entreprise.** C'est ici que la discipline de mesure au niveau de l'équipe et à signaux multiples se rentabilise, puisque la pression pour réduire la performance à un seul chiffre comparable à travers des dizaines d'équipes est la plus forte ici, et le dommage de la fausse précision s'accumule à travers toutes les décisions de ressources de l'organisation. Résistez explicitement à cette pression et construisez le dossier à signaux multiples pour pourquoi cela importe.

**Gouvernement.** Démontrer que l'investissement d'ingénierie a produit de vrais résultats, pas seulement livré des artefacts, est souvent la question centrale qu'un organe de surveillance pose. La mesure de performance à signaux multiples, liée explicitement aux métriques de résultat (sujet 5.3) plutôt qu'à des représentants uniquement de livraison, donne une réponse bien plus forte et défendable qu'un seul compte d'activité ou de livraison.

## Exemples

**Grande entreprise.** La direction d'une entreprise de technologie de vente au détail avait informellement classé les équipes d'ingénierie par points d'histoire complétés par sprint, traitant cela comme un représentant de performance. Après avoir adopté une approche à signaux multiples, combinant les données de livraison, le taux d'échecs de changement, et l'adoption de fonctionnalités post-sortie, la direction a trouvé que l'équipe avec le taux de complétion de points d'histoire le plus élevé avait le taux d'adoption de fonctionnalités le plus bas de l'entreprise : elle livrait vite mais construisait des choses que les clients n'utilisaient pas. Réallouer les priorités de feuille de route de cette équipe sur la base de l'image de performance plus complète, plutôt que le classement trompeur à chiffre unique, a redirigé une capacité d'ingénierie significative vers un travail à plus fort impact en un trimestre.

**Gouvernement.** Le programme d'ingénierie d'une agence fiscale nationale devait démontrer à un comité de surveillance qu'un investissement de systèmes majeur avait amélioré la performance, pas seulement livré la portée contractée. Plutôt que de rapporter seulement les points d'histoire ou la complétion de jalons, le programme a présenté un ensemble convergent de signaux : taux d'erreur de traitement réduit, temps de traitement médian réduit, et taux de complétion de libre-service réussi augmenté, tous liés aux composants système spécifiques livrés. La présentation à signaux multiples et liée aux résultats a satisfait l'examen du comité d'une manière qu'un simple rapport « livré selon le calendrier » d'un programme antérieur n'avait pas réussi à faire l'année précédente.

## Argumentaire économique : motivations, ROI et TCO

Le retour de mesurer la performance à travers des signaux convergents liés aux résultats plutôt qu'un chiffre unique de fausse précision est de meilleures décisions de ressources : une organisation qui peut voir quel travail d'équipe fait réellement bouger les résultats peut investir davantage là où cela compte et investiguer là où ce n'est pas le cas, plutôt que de récompenser quelle que soit l'équipe semblant la plus occupée. L'exemple de vente au détail ci-dessus est typique : un classement trompeur à chiffre unique avait dirigé l'attention d'investissement loin de là où elle aurait réellement aidé.

Le coût total de possession est plus élevé qu'une approche à métrique unique, parce qu'elle nécessite de combiner des données de multiples sources (livraison, qualité, résultat) et de résister à la pression organisationnelle de réduire l'image à nouveau en un seul chiffre comparable. Ce coût vaut la peine d'être payé parce que l'alternative, un seul score faussement précis, induit activement en erreur les décisions de ressources que les données de performance sont censées éclairer.

## Antipatrons et pièges

- **Confondre l'activité avec la performance :** l'erreur la plus commune que cette dimension est spécifiquement conçue pour prévenir.
- **Attribution de performance individuelle pour des résultats collaboratifs et inter-équipes :** généralement une fausse précision décourageant la collaboration.
- **Exclure la qualité de la définition de la performance :** récompense le travail qui est livré mais casse autre chose.
- **Forcer une métrique de résultat direct sur des équipes de plateforme ou habilitantes :** mesure la mauvaise chose pour un travail intrinsèquement indirect.
- **Réduire plusieurs signaux convergents à nouveau en un seul chiffre faussement précis sous pression organisationnelle :** perd l'honnêteté que l'approche à signaux multiples a été construite pour fournir.
- **Utiliser les données de performance pour classer des individus de manière compétitive :** endommage à la fois l'honnêteté des données et la collaboration d'équipe.

## Modèle de maturité

- **Niveau 1, Initiation :** La performance est confondue avec l'activité ou le volume de production, mesurée avec un seul chiffre non examiné.
- **Niveau 2, Développement :** Certains signaux de qualité sont considérés aux côtés de la production, mais il n'y a pas d'approche cohérente à signaux multiples et l'attribution individuelle se produit encore informellement.
- **Niveau 3, Standardisation :** La performance est mesurée au niveau de l'équipe en utilisant de multiples signaux convergents incluant la qualité, de manière cohérente à l'échelle de l'organisation.
- **Niveau 4, Gestion :** Le désaccord entre signaux convergents est activement investigué ; les équipes de plateforme et habilitantes ont des mesures de performance appropriément indirectes adaptées à leur travail réel.
- **Niveau 5, Orchestration :** Les données de performance informent directement les décisions de ressources et d'investissement, et l'organisation peut pointer vers des décisions de réallocation spécifiques qu'une vue à signaux multiples a permises et qu'une vue à chiffre unique aurait manquées.

## Idées de discussion

1. Quel chiffre unique utilisons-nous actuellement comme représentant de performance que nous devrions retirer en faveur d'un ensemble convergent ?
2. Avons-nous déjà crédité un résultat à la mauvaise équipe ou personne parce que l'attribution était peu claire ?
3. Comment mesurons-nous actuellement la performance d'une équipe de plateforme ou habilitante ?
4. À quoi ressemblerait-il si nos signaux convergents étaient en désaccord les uns avec les autres le prochain trimestre ?
5. Où un classement par points d'histoire ou compte de livraison a-t-il mal dirigé notre attention d'investissement ?

## Points clés à retenir

- La performance mesure si le travail a produit un **bon résultat**, pas combien de mouvement s'est produit ; ne la confondez pas avec l'activité (sujet 3.4).
- Utilisez des **signaux multiples et convergents**, jamais un seul chiffre de performance, et soyez méfiants de la fausse précision.
- Mesurez au **niveau de l'équipe ou du système** ; l'attribution de résultat individuel est généralement peu fiable et endommage la collaboration.
- **La qualité fait partie de la performance**, pas une préoccupation séparée et déconnectée.
- Donnez aux équipes de plateforme et habilitantes des mesures de performance **appropriément indirectes** plutôt que de forcer une métrique de résultat direct mal adaptée sur leur travail.

## Sources et lectures complémentaires

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble et Gene Kim (mesure de performance basée sur les résultats).
- *Team Topologies*, par Matthew Skelton et Manuel Pais (structures d'équipes de plateforme et habilitantes et comment mesurer leur contribution).
- *Measuring and Managing Performance in Organizations*, par Robert D. Austin (les risques des métriques de performance à fausse précision).
