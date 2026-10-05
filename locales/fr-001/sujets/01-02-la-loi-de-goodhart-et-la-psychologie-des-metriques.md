# 1.2 La loi de Goodhart et la psychologie des métriques

## Vue d'ensemble et motivation

La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law), nommée d'après l'économiste Charles Goodhart, s'énonce généralement ainsi : quand une mesure devient une cible, elle cesse d'être une bonne mesure. L'observation originale de Goodhart en 1975 portait sur la politique monétaire, mais la reformulation ultérieure de l'anthropologue Marilyn Strathern est la version dont les équipes logicielles ont réellement besoin, et c'est la phrase sur laquelle tout ce livre est construit. Chaque métrique de chaque sujet suivant, fréquence de déploiement, couverture de test, scores de satisfaction, porte ce risque, et chaque recommandation de ce livre est, sous une forme ou une autre, une stratégie pour le gérer.

Le mécanisme n'a rien de mystérieux. Les gens répondent aux incitations, et une métrique attachée à une récompense, une évaluation ou une réputation est une incitation, que quelqu'un l'ait voulu ainsi ou non. Une fois qu'une équipe sait que la « fréquence de déploiement » est surveillée, la manière la moins coûteuse de faire bouger ce chiffre n'est pas toujours celle voulue : diviser un changement significatif en cinq déploiements triviaux, et le chiffre monte alors que rien de réel ne s'est amélioré. Ce n'est pas une histoire d'acteurs malveillants. Des ingénieurs ordinaires et bien intentionnés répondent exactement ainsi à des incitations mal conçues, parce que c'est l'incitation, pas l'intention derrière elle, qui façonne le comportement sous pression.

Pour les grandes organisations, les enjeux sont plus élevés parce que la distance entre le concepteur de la métrique et la personne dont elle façonne le comportement grandit avec l'échelle. Un chef d'équipe qui construit une métrique pour sa propre équipe de huit personnes peut surveiller directement la manipulation et corriger rapidement le cap. Une métrique déployée à travers une division de six cents personnes, ou publiée dans un rapport de performance gouvernemental lu par une législature, traverse des couches de personnes qui n'ont jamais rencontré son auteur et ont toute raison de traiter la lettre de la métrique comme l'objectif. La distorsion s'accumule avec la distance, et c'est exactement pourquoi ce sujet, et non un sujet ultérieur, est là où le livre place son centre de gravité.

## Principes clés

- **Supposez que chaque métrique incitative sera manipulée.** Concevez contre cela dès la première version, pas après que la distorsion ait été découverte.
- **La manipulation est rationnelle, pas malveillante.** Les gens répondent sensément à l'incitation que vous avez construite ; les en blâmer ne corrige rien.
- **La distance par rapport au propriétaire de la métrique augmente le risque de distorsion.** Plus un chiffre voyage loin de la personne qui comprend son intention, plus il devient la lettre de la règle plutôt que son esprit.
- **Les ratios et les plages résistent mieux à la manipulation que les comptages bruts.** Un comptage brut récompense le volume ; un ratio bien choisi récompense le comportement réel que vous voulez.
- **Une métrique garde-fou n'est pas optionnelle sur une métrique incitative.** Chaque métrique à laquelle vous attachez une récompense a besoin d'une contre-métrique jumelée qui ne doit pas se dégrader.

## Recommandations

### Classez chaque métrique par exposition à l'incitation

Avant de publier une métrique où que ce soit de visible, demandez directement : la récompense, l'évaluation, la réputation ou le budget de quelqu'un dépend-il de ce chiffre bougeant dans une direction particulière ? Si oui, c'est une métrique incitative et elle a besoin d'une métrique garde-fou (ci-dessous) avant d'entrer en production. Si non, c'est une métrique diagnostique (sujet 1.1) et elle porte un risque de manipulation plus faible, bien que jamais nul, parce que les gens peuvent encore façonner un chiffre qu'ils s'attendent simplement à voir jugé plus tard, même sans incitation formelle attachée aujourd'hui.

### Préférez les ratios, les taux et les cohortes aux comptages bruts

Un comptage brut comme « tickets fermés » est manipulable en faisant plus de quelque chose de faible valeur. Un ratio comme « pourcentage de tickets résolus au premier contact » récompense le comportement sous-jacent au lieu du volume. Une **cohorte**, un groupe défini par un point de départ partagé comme tous les déploiements d'une semaine donnée, empêche une mauvaise tendance récente de se cacher dans un agrégat de long terme flatteur. Partout où vous choisissez entre un comptage et un taux qui capture le même comportement sous-jacent, choisissez le taux.

### Jumelez chaque métrique incitative avec une métrique garde-fou

Une **métrique garde-fou** est une contre-métrique jumelée qui ne doit pas se dégrader pendant que la métrique primaire s'améliore. La fréquence de déploiement se jumelle avec le taux d'échecs de changement ; le temps d'exécution se jumelle avec le taux de défauts échappés ; le temps de traitement d'une équipe de support se jumelle avec la satisfaction client. La métrique garde-fou est ce qui rend la manipulation bon marché visiblement coûteuse : une équipe qui améliore le chiffre incitatif en dégradant la métrique garde-fou se fait attraper par le jumelage, pas par chance. Concevez la métrique garde-fou en même temps que la métrique primaire, jamais comme une réflexion après coup une fois la manipulation déjà découverte.

### Surveillez les quatre schémas classiques de manipulation

La distorsion sous la loi de Goodhart tend à se ranger dans un petit nombre de formes reconnaissables. La **manipulation de seuil** optimise jusqu'à une cible puis s'arrête (une cible de couverture de test de 95 % produit des tests triviaux pour atteindre exactement 95 %, pas une couverture authentique). La **manipulation de définition** change ce qui compte plutôt que ce qui se passe (redéfinir « résolu » pour exclure les cas difficiles). La **manipulation temporelle** déplace quand le travail est enregistré plutôt que quand il s'est produit (regrouper les déploiements juste avant la fermeture d'une fenêtre de rapport). La **manipulation de substitution** livre la lettre de la métrique tout en abandonnant son intention (diviser un vrai changement en plusieurs triviaux pour gonfler la fréquence de déploiement). Nommer ces schémas à votre équipe, explicitement, les rend bien plus faciles à repérer quand ils apparaissent dans vos propres chiffres.

### Séparez la mesure de la récompense partout où vous le pouvez

La métrique garde-fou la plus forte de toutes est structurelle : découplez la métrique de la récompense individuelle. Une métrique utilisée purement pour comprendre un système, sans que la paie, la note ou le statut de personne n'en dépende, fait face à une pression de manipulation bien plus faible qu'une métrique liée à une évaluation. C'est pourquoi la distinction diagnostique-contre-évaluative du sujet 1.1 importe tant en pratique : garder une métrique diagnostique est souvent moins coûteux et plus efficace que n'importe quelle ingénierie de garde-fou appliquée après coup.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Comptages bruts | Simples à calculer et à expliquer | Hautement manipulables par le volume |
| Ratios et taux | Récompensent le bon comportement, résistent à la manipulation par volume | Peuvent cacher un problème de dénominateur qui se réduit |
| Jumelage avec garde-fou | Rend la manipulation bon marché visiblement coûteuse | Double les métriques à définir, posséder et maintenir |
| Diagnostique uniquement (pas de récompense individuelle) | Pression de manipulation la plus faible de toute option | Levier motivationnel direct plus faible pour la direction |
| Métriques fortement incitatives | Réponse comportementale forte et rapide | Risque de distorsion élevé, souvent en un seul cycle de rapport |

La tension centrale est **pouvoir motivationnel contre risque de distorsion**. Les métriques qui font bouger le comportement le plus vite, liant un chiffre directement à une récompense, sont exactement celles les plus exposées à la loi de Goodhart. Résolvez la tension en réservant les fortes incitations aux métriques de résultat qui sont authentiquement difficiles à manipuler à bas coût, et en jumelant tout ce que vous incitez avec une métrique garde-fou conçue en même temps, pas ajoutée après que la première distorsion apparaisse.

## Questions à discuter avec votre équipe

1. **Pour chaque métrique dont dépend la récompense de quelqu'un, quelle est la manière la moins coûteuse de la manipuler, et l'attraperions-nous aujourd'hui ?** Asseyez-vous et concevez délibérément l'exploit pour chaque chiffre incitatif sur votre tableau de bord : comment une équipe rationnelle et bien intentionnée ferait-elle bien paraître cela sans faire le travail sous-jacent ? Si vous ne pouvez pas nommer une manière dont vous attraperiez cette manipulation, vous n'êtes pas prêts à inciter la métrique encore. Cet exercice est inconfortable et cet inconfort est le but.

2. **Lesquelles de nos métriques actuelles ont déjà dérivé vers l'un des quatre schémas de manipulation, de seuil, de définition, temporelle ou de substitution, sans que personne ne le signale ?** La distorsion s'annonce rarement elle-même ; elle se manifeste comme un chiffre qui a l'air excellent pendant que les plaintes sous-jacentes, les incidents ou les retours clients racontent une histoire différente. Parcourez votre tableau de bord contre chaque schéma nommément et soyez honnêtes sur les correspondances.

3. **Chaque métrique incitative sur notre tableau de bord a-t-elle une métrique garde-fou jumelée, et cette métrique garde-fou a-t-elle été conçue en même temps que la métrique ?** Une métrique garde-fou ajoutée seulement après la découverte de la manipulation est une réparation, pas un choix de conception, et elle arrive généralement trop tard pour prévenir le premier tour de dommage à la confiance. Auditez vos métriques incitatives spécifiquement pour ce jumelage.

4. **Jusqu'où cette métrique voyage-t-elle depuis la personne qui comprend son intention avant d'atteindre la personne dont elle façonne le comportement ?** Une métrique construite par une équipe de plateforme et consommée trois couches de management plus loin, ou publiée dans un rapport public lu par des gens qui n'ont jamais vu l'instrumentation, est bien plus exposée à la manipulation de la lettre plutôt que de l'esprit qu'une métrique qu'une équipe a conçue pour elle-même. Cartographiez cette distance pour vos métriques les plus conséquentes.

5. **Avons-nous déjà retiré une incitation d'une métrique après avoir découvert qu'elle était manipulée, et que nous a coûté cela en confiance à réparer ?** Les organisations découvrent souvent la loi de Goodhart de la manière difficile, après un trimestre ou une année de comportement déformé, et la réparation coûte plus cher que n'aurait coûté la prévention. Apportez un incident réel, si vous en avez un, et extrayez la leçon explicitement plutôt que de tranquillement passer à autre chose.

6. **Où avons-nous supposé que la manipulation était un problème d'intégrité personnelle plutôt qu'une réponse rationnelle à une incitation mal conçue ?** Blâmer des individus pour avoir répondu de manière prévisible à une incitation que vous avez construite ne corrige rarement rien et endommage souvent davantage la confiance. Reformulez chaque incident de manipulation dont vous vous souvenez comme un problème de conception dans la métrique, pas un problème de caractère dans la personne, et demandez quelle reconception l'aurait empêché.

## Regard sectoriel

**Startup.** Avec une équipe minuscule, la métrique garde-fou la plus rapide est la conversation directe : tout le monde peut voir un chiffre et demander immédiatement « attends, pourquoi ça a bondi ». Le risque réel est qu'un fondateur attache une métrique à un récit de levée de fonds (croissance à tout prix) sans métrique garde-fou jumelée, parce que les investisseurs externes appliquent exactement le genre de pression distante et à forts enjeux qui rend la manipulation attirante.

**Petite entreprise.** Les outils du commerce livrent souvent des tableaux de bord par défaut construits autour de comptages (tickets fermés, appels traités) parce que les comptages sont faciles à calculer. Convertissez activement ceux-ci en taux partout où l'outil le permet, et résistez à lier un seul chiffre à une prime ou une évaluation sans d'abord identifier sa métrique garde-fou.

**Grande entreprise.** La distance est le risque dominant : une métrique conçue par une équipe de plateforme pour un diagnostic interne est récupérée trois couches de management plus tard et transformée en KPI que personne parmi ceux qui l'ont construite ne reconnaîtrait. Gouvernez cela explicitement (sujet 1.4) : exigez une métrique garde-fou documentée avant qu'une métrique ne soit approuvée pour usage dans une évaluation de performance ou un tableau de bord de direction.

**Gouvernement.** Les mesures de performance publiées font face à la pression de manipulation la plus forte de toute catégorie dans ce livre, parce qu'une cible manquée peut porter des conséquences budgétaires ou politiques. Auditez la définition elle-même à cadence fixe, pas seulement le chiffre, puisque le schéma de manipulation classique du secteur public est de tranquillement redéfinir qui compte (une liste d'attente « résolue » en reclassifiant qui attend) plutôt que d'améliorer le service sous-jacent.

## Exemples

**Grande entreprise.** Une entreprise de technologie du commerce de détail a fixé une cible de 99 % de couverture de test automatisée à travers tous les services, liée à un score de qualité au niveau de l'équipe utilisé dans les évaluations trimestrielles. En deux trimestres, la couverture a atteint 99 %, et le taux d'incidents a augmenté. Un audit a trouvé des équipes écrivant des tests triviaux, affirmant qu'une fonction retournait sans lever d'exception, purement pour satisfaire l'outil de couverture, tandis que les tests authentiques de cas limites ne s'étaient pas du tout améliorés. La correction a remplacé la cible de couverture brute par une métrique jumelée : couverture plus un score de test de mutation (sujet 4.2) qui mesure si les tests attrapent réellement des défauts injectés, ce qui est bien plus difficile à manipuler à bas coût.

**Gouvernement.** Une agence d'assurance chômage d'un État était mesurée sur le nombre médian de jours jusqu'au premier paiement, publié à sa législature. Sous pression pour atteindre une cible, un bureau régional a commencé à tranquillement reclassifier les réclamations plus difficiles à traiter comme « incomplètes » et à les exclure du dénominateur, ce qui faisait paraître excellente la médiane publiée pendant que certains réclamants attendaient bien plus longtemps que ce que suggérait le rapport. Un audit indépendant de la définition elle-même, pas seulement du chiffre, a découvert la pratique. La correction de l'agence a gelé la définition, publié publiquement les critères d'exclusion, et ajouté une métrique garde-fou suivant le taux de réclamations incomplètes lui-même, de sorte qu'un pic de reclassification serait désormais visible plutôt que caché.

## Argumentaire économique : motivations, ROI et TCO

Le retour de prendre la loi de Goodhart au sérieux est le travail de reprise évité. Une organisation qui conçoit des métriques garde-fou en amont dépense un montant modeste d'effort supplémentaire pour définir une seconde métrique aux côtés de la première. Une organisation qui saute cette étape dépense souvent un trimestre entier ou plus d'effort mal dirigé avant que la distorsion n'émerge, suivi du coût bien plus difficile de défaire le comportement manipulé et de reconstruire la confiance dans le chiffre par la suite. L'exemple du commerce de détail ci-dessus est typique : bon marché à prévenir, coûteux à réparer.

Le coût total de possession d'une métrique garde-fou n'est pas nul : c'est une seconde métrique à définir, instrumenter et revoir. Mais ce coût est petit et fixe comparé au coût non borné d'une incitation qui récompense tranquillement le mauvais comportement pendant des mois avant que quiconque ne le remarque. Chaque sujet après celui-ci intègre ce compromis dans son prix, ce qui explique pourquoi le jumelage avec un garde-fou apparaît comme une recommandation tout au long du reste de ce livre et pas seulement ici.

## Antipatrons et pièges

- **Publier une métrique incitative sans métrique garde-fou :** la cause racine la plus commune d'un tableau de bord déformé dans ce livre.
- **Traiter la manipulation comme une faiblesse personnelle :** blâme les individus pour une réponse rationnelle à une incitation mal conçue, et ne corrige rien.
- **Auditer le chiffre mais jamais la définition :** le mode d'échec classique du secteur public, où la métrique a l'air correcte parce que qui compte a tranquillement changé.
- **Supposer qu'une métrique qui fonctionnait comme diagnostique restera sûre une fois qu'elle devient évaluative :** l'exposition change au moment où la récompense s'attache, même si rien d'autre à propos de la métrique ne change.
- **Concevoir la métrique garde-fou seulement après le premier incident de manipulation :** une réparation qui arrive après que le dommage à la confiance soit déjà fait.
- **Ignorer la distance :** supposer qu'une métrique sera lue de la manière dont son concepteur l'a voulue une fois qu'elle voyage à plusieurs couches de management ou un rapport public de distance.

## Modèle de maturité

- **Niveau 1, Initiation :** Les métriques sont incitées de manière improvisée, sans considération du risque de manipulation, et la distorsion n'est découverte qu'après que la qualité ou la confiance souffre visiblement.
- **Niveau 2, Développement :** Certaines équipes reconnaissent la manipulation après coup et ajustent informellement, mais il n'y a pas de pratique cohérente de conception de métriques garde-fou à l'avance.
- **Niveau 3, Standardisation :** Chaque métrique incitative à travers l'organisation exige une métrique garde-fou documentée avant approbation, et les quatre schémas de manipulation sont nommés et enseignés.
- **Niveau 4, Gestion :** Le risque de manipulation est activement surveillé : les définitions sont périodiquement auditées, les paires garde-fou sont revues pour voir si elles attrapent toujours la distorsion, et les incidents de manipulation sont suivis comme une métrique à part entière.
- **Niveau 5, Orchestration :** L'organisation traite la loi de Goodhart comme une contrainte de conception permanente, revue automatiquement chaque fois qu'une nouvelle métrique est proposée, et elle peut pointer vers des reconceptions spécifiques qui ont prévenu la distorsion avant qu'elle ne se produise plutôt que seulement après.

## Idées de discussion

1. Quelle est la métrique la plus conséquente dans notre organisation qui n'a pas de métrique garde-fou aujourd'hui ?
2. Avons-nous déjà vu un chiffre s'améliorer pendant que la réalité sous-jacente empirait ?
3. Qui remarquerait si une définition derrière l'une de nos métriques publiques changeait tranquillement ?
4. Lequel des quatre schémas de manipulation (seuil, définition, temporelle, substitution) notre organisation est-elle la plus encline à faire ?
5. Que nous coûterait-il, en confiance, de découvrir qu'une métrique majeure avait été manipulée pendant un an ?

## Points clés à retenir

- **La loi de Goodhart :** une mesure qui devient une cible cesse d'être une bonne mesure, et cela gouverne chaque métrique de ce livre.
- La manipulation est une **réponse rationnelle à l'incitation**, pas un défaut de caractère ; corrigez la conception de l'incitation, pas les gens.
- Préférez les **ratios, les taux et les cohortes** aux comptages bruts partout où ils capturent le même comportement.
- Chaque métrique incitative a besoin d'une **métrique garde-fou**, conçue en même temps, pas ajoutée après que la distorsion soit découverte.
- Surveillez les quatre schémas de manipulation nommément : **manipulation de seuil, de définition, temporelle et de substitution**.
- La **distance** entre le concepteur d'une métrique et la personne dont elle façonne le comportement augmente le risque de distorsion ; gardez cette distance courte où vous le pouvez.

## Sources et lectures complémentaires

- Goodhart, C. A. E., « Problems of Monetary Management: The UK Experience » (1975) : l'origine de la loi de Goodhart.
- Strathern, Marilyn, « 'Improving Ratings': Audit in the British University System » (1997) : la reformulation largement citée, « quand une mesure devient une cible, elle cesse d'être une bonne mesure ».
- *Seeing Like a State*, par James C. Scott (comment des métriques lisibles déforment les systèmes qu'elles mesurent, à l'échelle des nations).
- *The Tyranny of Metrics*, par Jerry Z. Muller (un traitement complet de la fixation sur les métriques et de ses coûts à travers de nombreuses professions).
- *Lean Analytics*, par Alistair Croll et Benjamin Yoskovitz (métriques de vanité contre métriques actionnables, et conception de garde-fous dans un contexte de startup).
- Guide du Government Accountability Office (GAO) des États-Unis sur la mesure de performance et le GPRA Modernization Act : rapport de performance du secteur public et risque de manipulation.
