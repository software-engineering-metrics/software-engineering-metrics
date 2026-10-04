# 2.3 Vélocité de flux et distribution de flux

## Vue d'ensemble et motivation

La **vélocité de flux** est le nombre d'éléments de flux (chapitre 2.2) terminés sur une période donnée, la mesure de [débit](https://en.wikipedia.org/wiki/Throughput) du Flow Framework. La **distribution de flux** est la proportion de chaque type d'élément de flux, fonctionnalités, défauts, risque et dette, parmi les éléments terminés dans cette même période. Les deux métriques sont conçues pour être lues ensemble : la vélocité seule répond à « combien avons-nous livré », et la distribution seule répond à « quel genre de travail c'était », mais ni l'une ni l'autre question ne signifie grand-chose sans l'autre. Une équipe peut augmenter sa vélocité pendant que sa distribution dérive tranquillement loin des fonctionnalités et vers la reprise de défauts, ce qui ressemble à une accélération sur un graphique de vélocité et est en fait un symptôme de qualité déclinante.

Ce jumelage est la même discipline que demande le chapitre 1.2 pour chaque famille de métriques de ce livre : ne jamais rapporter un chiffre de vitesse sans le garde-fou qui montre ce que cette vitesse a coûté. La vélocité de flux est la généralisation la plus directe d'une métrique de débit de cette partie, plus proche en esprit de la fréquence de déploiement (chapitre 2.10) que de tout autre chiffre unique de ce livre, mais consciente du type d'élément d'une manière que la fréquence de déploiement n'a jamais été. La fréquence de déploiement vous dit à quelle fréquence le code atteint la production ; la vélocité de flux, jumelée avec la distribution, vous dit à quelle fréquence la valeur atteint la production et quel genre de valeur c'est.

Pour les grandes équipes gérant de nombreux flux de valeur concurrents, ce jumelage expose un schéma qu'un seul chiffre de débit cache complètement : un flux de valeur dont la vélocité a l'air saine pendant que sa distribution a tranquillement dérivé vers un travail de fonctionnalité presque pur, privant tranquillement la capacité de dette et de risque que le chapitre 2.2 a avertie nécessiter une protection délibérée. Les organisations d'entreprise comparant le débit entre lignes de produits, et les agences gouvernementales rapportant la production de livraison aux organes de surveillance, ont toutes deux besoin de ce jumelage pour éviter de confondre la production brute avec un progrès authentique et durable.

## Principes clés

- **La vélocité sans la distribution cache ce qui a réellement été livré.** Un compte d'éléments croissant ne dit rien sur si ce compte est sain, manipulé, ou tranquillement incliné vers le travail le plus facile disponible.
- **La distribution sans la vélocité cache l'échelle.** Une répartition en pourcentage qui a l'air saine signifie peu si vous ne savez pas aussi quelle quantité de travail total elle représente.
- **Les deux métriques doivent être rapportées ensemble, toujours.** C'est une application directe du principe de jumelage avec garde-fou du chapitre 1.2 aux données de flux spécifiquement.
- **La vélocité est exposée à la même manipulation de substitution que toute métrique de comptage d'éléments.** Diviser un travail difficile en plusieurs petits éléments faciles gonfle le compte sans livrer proportionnellement plus de valeur.
- **Une distribution saine dépend du contexte, pas une cible fixe.** Le chapitre 2.2 couvre cela en profondeur ; la vélocité et la distribution devraient toujours être interprétées contre la cible que ce contexte implique.

## Recommandations

### Rapportez la vélocité de flux comme une ligne de tendance, jamais un chiffre d'une seule période

Le compte d'éléments d'une seule période est bruyant et facilement mal lu. Tracez la vélocité de flux à travers plusieurs périodes consécutives et regardez la tendance, pas un seul point de données, la même discipline que recommande le chapitre 1.6 pour toute métrique de série temporelle sujette à une variation naturelle.

### Ne présentez jamais la vélocité de flux sans sa distribution à ses côtés

Traitez cela comme une règle stricte pour tout tableau de bord ou rapport, pas comme un agréable à avoir. Un graphique de vélocité montré seul invite exactement la mauvaise lecture par laquelle ce chapitre commence : un débit croissant qui est en fait une part croissante de reprise ou de travail de fonctionnalité facile évinçant la capacité de dette et de risque. Mettez les deux sur la même vue, toujours.

### Pondérez la vélocité par taille ou complexité quand les tailles d'éléments varient largement

Le compte d'éléments brut traite un changement de configuration d'une ligne et une migration architecturale de plusieurs semaines comme équivalents, ce qui invite la même manipulation de substitution que ce livre a déjà nommée pour la fréquence de déploiement (chapitre 2.10) : diviser un travail difficile en plusieurs petits éléments gonfle le compte sans livrer proportionnellement plus. Là où les tailles d'éléments varient largement, pondérez la vélocité par une estimation grossière de taille ou de complexité, ou suivez la taille moyenne d'élément aux côtés du compte brut, pour qu'une taille moyenne en rétrécissement à côté d'un compte en hausse soit visible plutôt que cachée.

### Surveillez la distribution de flux pour la dérive, pas seulement son instantané actuel

Le signal le plus utile dans la distribution de flux est rarement les pourcentages exacts de cette période ; c'est la direction du changement à travers plusieurs périodes. Une dérive constante, les fonctionnalités grimpant pendant que la dette et le risque rétrécissent tranquillement, vaut la peine d'être soulevée avec les parties prenantes bien avant qu'elle ne devienne le genre de problème de qualité ou de sécurité que le chapitre 2.2 avertit s'accumuler invisiblement sous un schéma d'usine à fonctionnalités.

### Comparez la vélocité de flux entre flux de valeur seulement avec un soin authentique

Deux flux de valeur avec une granularité d'élément différente, des tailles d'équipe différentes, ou des phases de produit différentes ne sont pas directement comparables sur la seule vélocité brute, le même problème d'équité que nomme le chapitre 2.10 pour la fréquence de déploiement entre équipes. Utilisez la vélocité pour la propre tendance d'un flux de valeur en premier, et tentez seulement une comparaison inter-flux-de-valeur après avoir confirmé des définitions et une granularité d'éléments authentiquement comparables.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Vélocité de comptage d'éléments brut seule | Simple à calculer et expliquer | Exposée à la manipulation de substitution ; cache quel genre de valeur a été livré |
| Vélocité jumelée avec distribution | Montre à la fois l'échelle et le mélange de valeur ensemble | Nécessite une classification disciplinée des éléments de flux (chapitre 2.2) pour être significative |
| Vélocité pondérée par taille | Résiste à la manipulation de substitution par division de taille d'élément | Nécessite une méthode de dimensionnement cohérente et convenue à travers l'équipe |
| Comparaison de vélocité inter-flux-de-valeur | Utile pour les décisions d'investissement au niveau du portefeuille | Facilement injuste sans confirmer des définitions d'éléments authentiquement comparables |

La tension centrale est **simplicité contre résistance à la manipulation**. Le compte d'éléments brut est le chiffre le plus facile à calculer et expliquer, mais c'est aussi le plus facile à gonfler en divisant un travail difficile en plusieurs petites pièces. Résolvez la tension en gardant la métrique primaire simple, vélocité brute jumelée avec distribution, et en réservant la pondération par taille aux flux de valeur où les tailles d'éléments sont connues pour varier assez largement pour que le compte simple soit devenu activement trompeur.

## Questions à discuter avec votre équipe

1. **Quand nous rapportons la vélocité de flux, la distribution de flux est-elle toujours montrée à ses côtés, ou la vélocité se tient-elle parfois seule ?** Un chiffre de vélocité sans sa distribution est une image incomplète selon le propre principe central de ce chapitre. Vérifiez vos tableaux de bord et rapports réels pour cet écart.

2. **Notre taille moyenne d'élément a-t-elle changé aux côtés d'une vélocité croissante, et le saurions-nous si c'était le cas ?** Une taille moyenne en rétrécissement à côté d'un compte en hausse est la signature spécifique de la manipulation de substitution appliquée aux éléments de flux. Rassemblez les données réelles plutôt que de supposer que le schéma est absent.

3. **Avons-nous déjà comparé notre vélocité à celle d'une autre équipe sans confirmer que nos définitions et granularité d'éléments correspondent réellement ?** Une comparaison injuste ici peut pousser une équipe à manipuler ses propres chiffres juste pour paraître comparable, faisant écho au même risque que ce livre nomme déjà pour la fréquence de déploiement.

4. **Notre distribution de flux a-t-elle dérivé dans une direction au cours des dernières périodes, et quelqu'un a-t-il décidé cela délibérément ?** Une dérive lente est facile à manquer période par période. Tracez plusieurs périodes ensemble et cherchez honnêtement une tendance avant de supposer que la répartition actuelle est stable.

5. **Si quelqu'un voulait gonfler notre vélocité de flux sans faire plus de travail réel, quelle est la manière la plus facile de le faire, et notre rapport actuel l'attraperait-il ?** Parcourez la mécanique spécifique de diviser des éléments difficiles en éléments faciles, et discutez si votre tableau de bord révélerait réellement ce schéma.

6. **Nos chiffres de vélocité et de distribution atteignent-ils jamais les parties prenantes commerciales ensemble, ou seul le titre de vélocité voyage-t-il vers le haut ?** Le principe de jumelage ne protège contre la mauvaise lecture que si les deux moitiés sont réellement vues par les personnes prenant des décisions à partir des données.

## Regard sectoriel

**Startup.** La vélocité de flux est généralement facile à suivre informellement à cette échelle, puisque toute l'équipe a déjà un sens approximatif du débit. La discipline utile est de la jumeler avec la distribution même informellement, pour qu'un fondateur ne confonde pas un compte croissant de fermeture de tickets avec un progrès authentique de fonctionnalités quand le compte est en fait dominé par la correction de bugs de début de phase.

**Petite entreprise.** Suivez la vélocité et la distribution ensemble depuis quel que soit l'outil léger que vous utilisez déjà pour la classification des éléments de flux (chapitre 2.2) ; aucune plateforme d'analytique dédiée n'est nécessaire à cette échelle. L'habitude de toujours les visualiser côte à côte importe plus que n'importe quelle sophistication d'outillage.

**Grande entreprise.** La comparaison de vélocité inter-flux-de-valeur est tentante à cette échelle pour la priorisation au niveau du portefeuille, et c'est aussi là où le risque d'équité est le plus grand, puisque différentes lignes de produits ont légitimement une granularité d'éléments très différente. Investissez dans la confirmation de définitions comparables avant d'utiliser des comparaisons de vélocité pour justifier des décisions d'investissement entre équipes.

**Gouvernement.** La vélocité de flux jumelée avec la distribution donne à un dirigeant technologique du secteur public une base de preuves bien plus forte pour rapporter la production de livraison aux organes de surveillance que le débit brut seul, parce qu'elle peut montrer non seulement combien a été livré mais que le mélange reflète une allocation délibérée et défendable entre nouvelle fonctionnalité, remédiation de défauts et gestion du risque.

## Exemples

**Grande entreprise.** L'équipe de plateforme d'un fournisseur de logiciels a rapporté une vélocité de flux régulièrement croissante pendant trois trimestres consécutifs, une tendance que la direction a célébrée comme une livraison en accélération. Un examen plus attentif de la distribution de flux, demandé seulement après une escalade client sur des bugs récurrents, a révélé que la part « fonctionnalités » de cette vélocité croissante était en fait tombée de 70 % à 45 % sur la même période, avec des éléments de correction de défauts comblant l'écart. L'équipe avait livré plus d'éléments, mais une proportion décroissante d'entre eux était de la nouvelle valeur ; le reste était de la reprise que le graphique de vélocité seul avait complètement obscurcie.

**Gouvernement.** L'équipe de plateforme de données d'une agence nationale de statistiques a suivi la vélocité de flux comme sa métrique de livraison primaire pour un rapport annuel à son conseil de surveillance. Quand un membre du conseil a demandé quelle proportion de cette vélocité représentait une nouvelle capacité orientée vers le public, l'équipe a découvert qu'elle n'avait jamais décomposé le chiffre par type d'élément de flux et ne pouvait pas répondre directement. L'agence a par la suite adopté un rapport jumelé vélocité-et-distribution, qui a révélé que le travail de risque et de conformité, conduit par une nouvelle réglementation de protection des données, avait légitimement consommé une part croissante de capacité, une allocation défendable que le conseil a acceptée volontiers une fois qu'elle a été montrée explicitement plutôt que laissée implicite dans une baisse de vélocité inexpliquée.

## Argumentaire économique : motivations, ROI et TCO

Le retour du jumelage de la vélocité avec la distribution est un compte rendu plus honnête et plus défendable de la production de livraison que l'un ou l'autre chiffre ne fournit seul. L'exemple du fournisseur de logiciels ci-dessus, découvrant qu'une vélocité croissante reflétait en fait une production de fonctionnalités déclinante, est exactement le genre de mauvaise lecture que ce jumelage prévient, et attraper ce schéma tôt est bien moins coûteux que de le découvrir seulement après qu'un problème de qualité orienté client ne force la question.

Le coût total de possession est minimal une fois que la classification des éléments de flux (chapitre 2.2) est déjà en place : la distribution est une agrégation simple d'éléments déjà classifiés, et la discipline de montrer les deux métriques ensemble est une convention de rapport, pas un investissement technique. La plupart du coût des recommandations de ce chapitre a déjà été payé quand l'organisation a adopté une classification honnête des éléments de flux en premier lieu.

## Antipatrons et pièges

- **Rapporter la vélocité de flux sans distribution :** le vecteur de manipulation au cœur de ce chapitre. Une équipe sous pression de livraison peut augmenter le compte d'éléments en préférant du travail de fonctionnalité petit et facile et en évitant les éléments de dette, de risque ou de défaut plus difficiles, ou en divisant de grands éléments en plusieurs petits, et un graphique de vélocité montré seul se lira comme une accélération plutôt que le changement réel dans ce qui est livré. Le garde-fou est la même discipline de jumelage que demande le chapitre 1.2 tout au long de ce livre : ne jamais montrer la vélocité sans la distribution, et vérifier périodiquement la taille moyenne d'élément aux côtés du compte pour attraper la division spécifiquement.
- **Comparer la vélocité entre flux de valeur avec une granularité d'éléments différente :** produit une comparaison injuste et trompeuse.
- **Traiter la distribution d'une seule période comme stable :** manque une dérive lente et significative que seule une vue de tendance révèle.
- **Laisser seul le titre de vélocité atteindre les parties prenantes commerciales :** renonce à toute la valeur protectrice du principe de jumelage.
- **Ignorer la taille moyenne d'élément en célébrant une vélocité croissante :** manque la signature spécifique de la manipulation de substitution.
- **Établir une cible de vélocité sans référence à la distribution :** invite exactement la manipulation que ce chapitre avertit nommément.

## Modèle de maturité

- **Niveau 1, Initiation :** La vélocité de flux, si suivie, est rapportée seule sans données de distribution, et personne n'a vérifié la manipulation de substitution.
- **Niveau 2, Développement :** Certaines équipes suivent la distribution, mais elle n'est pas jumelée de manière cohérente avec la vélocité dans les rapports ni revue comme une tendance.
- **Niveau 3, Standardisation :** La vélocité et la distribution sont toujours rapportées ensemble, vues comme des tendances, avec la taille moyenne d'élément surveillée pour attraper la manipulation de substitution.
- **Niveau 4, Gestion :** La dérive de distribution est investiguée proactivement avant qu'elle ne devienne un problème de qualité ou de sécurité, et les comparaisons de vélocité inter-flux-de-valeur ne sont faites qu'après confirmation de définitions d'éléments authentiquement comparables.
- **Niveau 5, Orchestration :** La vélocité et la distribution informent directement les décisions d'investissement au niveau du portefeuille, et l'organisation peut pointer vers des cas spécifiques où la dérive de distribution a été attrapée et corrigée avant qu'elle ne cause un échec visible.

## Idées de discussion

1. Notre rapport de vélocité de flux inclut-il toujours la distribution, ou avons-nous déjà montré l'une sans l'autre ?
2. Notre taille moyenne d'élément de flux a-t-elle changé aux côtés d'un changement de vélocité récemment ?
3. Saurions-nous si notre distribution de flux avait dérivé régulièrement au cours des derniers trimestres ?
4. Que faudrait-il à quelqu'un pour gonfler notre vélocité sans livrer plus de valeur réelle, et le remarquerions-nous ?

## Points clés à retenir

- La **vélocité de flux** mesure le débit ; la **distribution de flux** mesure quel genre de travail ce débit représente. Rapportez-les ensemble, toujours.
- Ce jumelage est une application directe du **principe de garde-fou** du chapitre 1.2 : ne jamais montrer un chiffre de vitesse sans le contexte de ce qu'il a coûté.
- Le vecteur de manipulation central du chapitre est **rapporter la vélocité seule**, qui peut cacher un glissement vers du travail de fonctionnalité facile ou une division d'éléments qui gonfle le compte sans livrer de valeur proportionnelle.
- La **dérive de distribution** est plus visible comme une tendance à travers plusieurs périodes, pas dans l'instantané d'une seule période.
- Les **comparaisons de vélocité inter-flux-de-valeur** ont besoin de définitions d'éléments authentiquement comparables pour être équitables ; sans cela, elles trompent plus qu'elles n'informent.

## Sources et lectures complémentaires

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
