# 3.4 Métriques d'activité et leurs limites

## Vue d'ensemble et motivation

L'**activité**, le A dans SPACE (chapitre 3.1), compte le volume de travail d'ingénierie observable depuis la télémétrie système : commits, demandes de tirage ouvertes, lignes de code changées, commentaires de revue de code laissés. C'est la dimension SPACE la plus facile à mesurer, parce que chacun de ces événements est déjà enregistré automatiquement par les outils que les équipes d'ingénierie utilisent quotidiennement, et cette facilité de mesure est exactement ce qui rend cette dimension la plus dangereuse à surpondérer. L'activité est un signal réel et légitime utilisé avec précaution. Utilisée comme représentant de productivité autonome, c'est la famille de métriques la plus manipulée et la plus trompeuse de toute l'histoire de la mesure de l'[ingénierie logicielle](https://en.wikipedia.org/wiki/Software_engineering).

Le problème central est que l'activité mesure le mouvement, pas la valeur. Un compte de commits ne distingue pas entre un commit ayant résolu élégamment un problème difficile et un commit ayant divisé un changement significatif en cinq pour paraître plus productif (manipulation de substitution du chapitre 1.2, appliquée directement à cette famille de métriques). Les lignes de code changées récompensent la verbosité plutôt que la compétence bien plus précieuse de supprimer du code inutile. Un ingénieur passant une journée entière en pensée profonde et ininterrompue avant d'écrire dix lignes élégantes et bien testées a l'air moins « actif » selon ces métriques qu'un qui commite des changements superficiels et non revus toutes les vingt minutes, même si le premier produit très souvent bien plus de valeur réelle.

Pour les grandes équipes, la tentation d'utiliser les métriques d'activité pour l'évaluation individuelle est constante et bien documentée, parce que l'activité est facile à attribuer à une personne spécifique et facile à calculer automatiquement, contrairement aux signaux plus difficiles et plus honnêtes des autres dimensions SPACE. Ce chapitre existe spécifiquement pour nommer cette tentation et donner aux équipes le langage et les preuves pour y résister, parce qu'une fois qu'une organisation commence à classer individuellement les ingénieurs par compte de commits ou lignes de code, le dommage à la collaboration, à la qualité de code et au moral est bien documenté et difficile à inverser.

## Principes clés

- **L'activité mesure le mouvement, pas la valeur.** C'est un signal contextuel légitime, jamais un représentant de productivité autonome.
- **C'est la famille de métriques historiquement la plus mal utilisée dans la mesure de l'ingénierie logicielle.** Traitez cette histoire comme un avertissement, pas une coïncidence.
- **Le classement d'activité individuel est presque toujours nuisible.** Il endommage la collaboration, récompense le travail d'occupation visible, et invite la manipulation presque immédiatement.
- **Les données d'activité sont les plus utiles en agrégat, comme contexte pour les autres dimensions,** pas comme signal indépendant sur une personne ou une équipe.
- **Le travail profond et précieux a souvent l'air silencieux sur un tableau de bord d'activité.** Cette famille de métriques est structurellement biaisée contre exactement le genre de pensée qui produit les meilleurs résultats d'ingénierie.

## Recommandations

### Ne classez ni n'évaluez jamais des individus par comptages d'activité bruts

C'est la règle unique la plus difficile et la plus importante de ce chapitre. Le compte de commits, les lignes de code et le compte de demandes de tirage ne devraient jamais apparaître dans une évaluation de performance individuelle, un classement comparatif, ou tout contexte où la compensation, le statut, ou la réputation d'un ingénieur dépend du chiffre. Cela suit directement le principe d'exposition à l'incitation du chapitre 1.2 : au moment où l'activité devient une métrique individuelle incitative, la manipulation suit presque immédiatement, et le comportement résultant, gonfler les commits, diviser trivialement les changements, éviter le travail profond et peu glamour produisant peu d'événements visibles, nuit activement à l'organisation.

### Utilisez les données d'activité en agrégat, comme contexte, pas comme verdict

Les données d'activité deviennent authentiquement utiles quand agrégées au niveau de l'équipe et lues aux côtés des autres dimensions SPACE : une forte baisse de l'activité de commits au niveau de l'équipe coïncidant avec une hausse de satisfaction pourrait indiquer que l'équipe a enfin eu de l'espace pour penser profondément et rembourser la dette technique, un schéma positif, pas négatif. Lue isolément, la même baisse a l'air alarmante. Le contexte des autres dimensions est ce qui rend les données d'activité interprétables plutôt que trompeuses.

### Préférez les signaux d'activité ajustés à la qualité plutôt que le volume brut

Là où les données d'activité sont utiles du tout, préférez les signaux ajustés pour la qualité plutôt que les comptages bruts : taille de demande de tirage relative à la profondeur de revue (chapitre 2.9), ou le ratio de nouveau code à code retiré, qui peut révéler si une équipe accumule de la complexité ou simplifie activement. Ces signaux ajustés sont toujours des données de la dimension activité mais résistent à la manipulation la plus grossière que les comptages bruts invitent.

### Surveillez spécifiquement le schéma de manipulation de substitution dans les données d'activité

La manière la plus commune dont les métriques d'activité sont manipulées est exactement le schéma de substitution du chapitre 1.2 : diviser un travail authentiquement significatif en de nombreux petits événements triviaux pour gonfler un compte. Si la fréquence de commits ou de demandes de tirage augmente pendant que la complexité ou la taille sous-jacente des changements baisse nettement, investiguez avant de créditer une véritable amélioration de productivité, en utilisant la même discipline diagnostique que recommande le chapitre 2.10 pour la fréquence de déploiement.

### Nommez et découragez explicitement le théâtre d'activité

Le **théâtre d'activité** est du travail effectué, consciemment ou non, principalement parce qu'il est visible et comptable plutôt que parce qu'il est précieux : commits petits et fréquents, activité nocturne voyante, ou occupation visible dans les canaux partagés. Nommer ce schéma explicitement à votre équipe, et être transparents que la direction n'utilise pas l'activité brute pour juger la contribution, enlève une grande partie de l'incitation pour que cela se produise en premier lieu.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Classement d'activité individuel | Simple, facile à calculer, semble directement actionnable | Manipulé presque immédiatement ; endommage la collaboration et le moral ; mesure la mauvaise chose |
| Aucune mesure d'activité du tout | Évite entièrement le risque de mauvais usage | Perd un signal contextuel authentiquement utile pour repérer des schémas au niveau de l'équipe |
| Activité agrégée au niveau de l'équipe, lue en contexte | Fournit un contexte utile sans risque individuel | Nécessite de la discipline pour interpréter aux côtés des autres dimensions plutôt qu'isolément |
| Signaux d'activité ajustés à la qualité | Résiste à la manipulation la plus grossière du comptage brut | Plus complexe à calculer et expliquer qu'un simple compte |

La tension centrale est **utilité contre risque de mauvais usage**. Les données d'activité, lues avec précaution en agrégat et en contexte, sont authentiquement utiles pour repérer des schémas comme un rythme non durable ou une équipe trouvant tranquillement de l'espace pour adresser la dette technique. Les mêmes données, utilisées comme fiche d'évaluation individuelle, sont presque uniformément nuisibles. Résolvez la tension non pas en évitant entièrement les données d'activité mais en construisant une règle organisationnelle stricte contre l'usage individuel, tout en permettant et même en encourageant un usage réfléchi et contextualisé au niveau de l'équipe.

## Questions à discuter avec votre équipe

1. **Quelqu'un dans notre organisation a-t-il déjà été évalué, formellement ou informellement, en utilisant un comptage d'activité brut comme les commits ou les lignes de code ?** Demandez cela directement et soyez prêts pour une réponse inconfortable mais nécessaire ; ce mauvais usage se produit souvent tranquillement, à travers un commentaire désinvolte d'un manager, sans jamais devenir une politique officielle.

2. **À quoi ressemblerait le théâtre d'activité spécifiquement dans notre équipe, et en avons-nous vu des signes ?** Nommer la forme spécifique et plausible que ce schéma pourrait prendre dans votre propre équipe le rend bien plus facile à reconnaître s'il commence à se produire.

3. **Quand nos données d'activité au niveau de l'équipe bougent, les interprétons-nous aux côtés des autres dimensions SPACE, ou isolément ?** Une baisse d'activité lue isolément a l'air préoccupante ; la même baisse lue aux côtés d'une amélioration de satisfaction ou de performance peut avoir l'air d'un schéma authentiquement positif. Vérifiez votre pratique de revue réelle contre cette distinction.

4. **Avons-nous déjà vu une hausse de fréquence de commits ou de demandes de tirage accompagnée d'une taille moyenne de changement en rétrécissement, suggérant une division triviale plutôt qu'un véritable gain de productivité ?** Rassemblez de vraies données et vérifiez ce schéma spécifique de manipulation de substitution.

5. **Comment parlons-nous actuellement de « qui contribue le plus » dans notre équipe, et cette conversation s'appuie-t-elle implicitement sur les données d'activité même sans métrique formelle ?** Le biais informel et non mesuré vers l'occupation visible peut façonner la perception et la récompense même sans politique explicite basée sur l'activité ; faites émerger cela honnêtement.

6. **À quoi ressemble le travail authentiquement précieux mais silencieux, pensée profonde, conception soignée, mentorat, dans notre équipe, et comment nous assurons-nous qu'il est reconnu malgré le fait qu'il génère peu de données d'activité visibles ?** Cette question est le complément positif des précédentes : nommer à quoi ressemble le bon travail silencieux aide à le protéger d'être négligé en faveur d'un travail plus bruyant et plus comptable.

## Regard sectoriel

**Startup.** Avec une petite équipe collaborant étroitement, les données d'activité sont généralement visibles sans avoir besoin d'un tableau de bord du tout, et le risque de classement individuel contre lequel met en garde ce chapitre est moins probable simplement parce que tout le monde sait déjà sur quoi travaille tout le monde. Le risque est plutôt qu'un fondateur favorise inconsciemment un comportement visiblement « occupé » en prenant des décisions précoces d'embauche ou d'équité.

**Petite entreprise.** Les données d'activité de vos outils existants sont bien à regarder pour un sens général du débit d'équipe, mais résistez à les utiliser pour comparer directement les contributeurs individuels ; la vraie valeur d'une petite équipe se concentre souvent chez quelques personnes faisant un travail silencieux et à fort effet de levier qu'une vue de comptage de commits sous-évaluerait systématiquement.

**Grande entreprise.** C'est ici que la tentation de classement individuel est la plus forte et la plus dommageable, parce que les données d'activité sont le signal le plus facile à rassembler pour un processus d'évaluation de performance couvrant des milliers d'ingénieurs, et la pression pour trouver *une* entrée quantifiable est réelle. Construisez une politique explicite, communiquée et appliquée contre le classement d'activité individuel, et auditez périodiquement les pratiques d'évaluation de performance pour confirmer que la politique est réellement suivie en pratique, pas seulement énoncée.

**Gouvernement.** Les métriques d'activité peuvent être tentantes à citer dans un rapport public comme preuve de productivité (« dix mille commits cette année »), mais ce genre de titre est presque dénué de sens et peut inviter exactement le mauvais examen une fois qu'un examinateur averti souligne que l'activité brute ne dit rien sur les résultats. Rapportez plutôt les données de résultat et de performance (chapitre 3.3), et évitez les comptages d'activité dans toute communication destinée à l'extérieur.

## Exemples

**Grande entreprise.** La direction d'ingénierie d'une entreprise de logiciels avait, sans politique formelle, commencé à référencer informellement des données de fréquence de commits individuelles dans les discussions de promotion. Un examen interne, incité par un projet d'analyse d'attrition non lié, a trouvé que les ingénieurs travaillant sur les systèmes les plus complexes et à plus forte valeur de l'entreprise, nécessitant de longues périodes de travail de conception soigneux avant qu'aucun code ne soit écrit, avaient systématiquement des comptes de commits plus bas que les ingénieurs sur des systèmes plus simples et développés de manière plus incrémentale, et étaient subtilement désavantagés dans les conversations de promotion en conséquence. La direction a publié une politique explicite et communiquée interdisant les références au compte d'activité dans les discussions de performance et de promotion, et a déplacé les preuves de promotion vers l'approche de performance à signaux multiples du chapitre 3.3.

**Gouvernement.** Une agence de services numériques, sous pression de démontrer la productivité à un comité de surveillance législatif, a initialement proposé de rapporter le total des commits et des lignes de code écrites à travers son programme d'ingénierie comme preuve de valeur livrée. Un conseiller technique interne s'y est opposé, notant correctement que ce cadrage invitait exactement le mauvais examen, puisqu'un membre du comité techniquement lettré pourrait facilement souligner que le volume de code brut ne dit rien sur si le code fonctionnait ou comptait. Le rapport révisé de l'agence a plutôt utilisé des métriques de résultat (chapitre 5.3) : réduction des erreurs rapportées par les citoyens et augmentation de la complétion de libre-service réussie, ce qui a bien mieux tenu sous le questionnement du comité que ne l'auraient fait les chiffres d'activité.

## Argumentaire économique : motivations, ROI et TCO

Le retour de bien faire les métriques d'activité, les utiliser contextuellement plutôt que comme fiches d'évaluation individuelles, est le dommage évité : les organisations qui classent individuellement les ingénieurs par activité voient fiablement un comportement de manipulation, une collaboration réduite (les ingénieurs protégeant leur propre production visible plutôt que d'aider un coéquipier), et un biais systématique contre le travail profond et à fort effet de levier produisant souvent le plus de valeur tout en générant le moins d'activité visible. Inverser ce dommage, une fois enraciné dans une culture d'évaluation de performance, est authentiquement difficile et lent.

Le coût total d'éviter ce piège est principalement une discipline organisationnelle : une politique explicite, appliquée de manière cohérente, contre le classement d'activité individuel, et un engagement à investir plutôt dans la mesure de performance plus difficile et plus honnête décrite au chapitre 3.3. Cette discipline coûte moins que les décisions de promotion mal dirigées, la collaboration endommagée, et le comportement de manipulation que les métriques d'activité individuelles produisent fiablement dans le temps.

## Antipatrons et pièges

- **Classement individuel par compte de commits ou lignes de code :** le mauvais usage le plus dommageable et le plus historiquement commun de tout ce livre.
- **Théâtre d'activité :** travail effectué principalement pour la visibilité plutôt que pour la valeur, une réponse entièrement prévisible à l'évaluation basée sur l'activité.
- **Interpréter une baisse d'activité au niveau de l'équipe isolément, sans vérifier les autres dimensions SPACE :** peut confondre un schéma authentiquement positif avec un préoccupant.
- **Citer des comptages d'activité bruts dans une communication externe ou destinée à la direction :** invite exactement le mauvais examen et dit peu sur la valeur réelle.
- **Sous-évaluer systématiquement le travail profond et soigné générant peu d'événements visibles :** un biais structurel intégré dans toute cette famille de métriques.
- **Biais d'activité informel et non réglementé s'infiltrant dans les conversations de promotion ou d'évaluation :** dommageable même sans métrique officielle derrière.

## Modèle de maturité

- **Niveau 1, Initiation :** Les métriques d'activité sont utilisées, formellement ou informellement, pour évaluer ou classer des individus, sans conscience du risque.
- **Niveau 2, Développement :** Une certaine conscience du risque existe, mais aucune politique explicite n'empêche les données d'activité d'influencer informellement les évaluations ou les discussions de promotion.
- **Niveau 3, Standardisation :** Une politique explicite et communiquée à l'échelle de l'organisation interdit le classement d'activité individuel, et les données d'activité ne sont utilisées qu'en contexte agrégé au niveau de l'équipe.
- **Niveau 4, Gestion :** Les pratiques d'évaluation de performance et de promotion sont auditées périodiquement pour confirmer que la politique est suivie en pratique, et les signaux d'activité ajustés à la qualité remplacent les comptages bruts là où les données d'activité sont utilisées du tout.
- **Niveau 5, Orchestration :** L'organisation a démontrablement déplacé la culture d'évaluation loin des métriques d'activité vers l'approche de performance à signaux multiples du chapitre 3.3, avec une amélioration visible de la collaboration et un comportement de manipulation réduit comme preuve que le changement a fonctionné.

## Idées de discussion

1. Quelqu'un ici s'est-il déjà senti évalué, même informellement, par à quel point son activité semblait « occupée » ?
2. À quoi ressemblerait le théâtre d'activité spécifiquement dans notre équipe ?
3. Avons-nous une politique explicite et écrite contre le classement d'activité individuel, et est-elle réellement suivie ?
4. Quel travail silencieux et à haute valeur dans notre équipe génère actuellement le moins de données d'activité visibles ?
5. Comment reconcevrions-nous nos preuves d'évaluation de performance pour retirer entièrement les comptages d'activité ?

## Points clés à retenir

- L'activité mesure le **mouvement, pas la valeur** ; c'est la famille de métriques historiquement la plus mal utilisée en ingénierie logicielle.
- **Ne classez ni n'évaluez jamais des individus** par comptages d'activité bruts ; c'est la règle la plus difficile et la plus importante de ce chapitre.
- Utilisez les données d'activité **en agrégat, comme contexte** pour les autres dimensions SPACE, jamais comme verdict autonome.
- Surveillez le **théâtre d'activité** et le **schéma de manipulation de substitution** (chapitre 1.2) spécifiquement au sein de cette famille de métriques.
- Le travail profond et de haute valeur génère souvent le **moins de données d'activité visibles** ; protégez-le d'être systématiquement sous-évalué.

## Sources et lectures complémentaires

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, par Tom DeMarco et Timothy Lister (l'argument contre la mesure des ingénieurs par l'occupation visible).
- *Deep Work: Rules for Focused Success in a Distracted World*, par Cal Newport (la valeur du travail silencieux et ininterrompu que les métriques d'activité sous-comptent systématiquement).
- *The Tyranny of Metrics*, par Jerry Z. Muller (fixation sur les métriques et ses coûts, directement applicable à l'évaluation basée sur l'activité).
