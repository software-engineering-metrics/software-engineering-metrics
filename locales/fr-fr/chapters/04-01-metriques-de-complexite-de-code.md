# 4.1 Métriques de complexité de code

## Vue d'ensemble et motivation

La **[complexité cyclomatique](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, introduite par Thomas J. McCabe en 1976, compte le nombre de chemins indépendants à travers le flux de contrôle d'un morceau de code : chaque `if`, boucle et branche ajoute au compte. Elle reste la métrique de complexité de code la plus largement utilisée près de cinquante ans plus tard, aux côtés d'apparentées comme la complexité cognitive (qui pondère plus lourdement le flux de contrôle imbriqué et difficile à suivre que le compte linéaire original de McCabe) et la profondeur d'imbrication. Ces métriques partagent une intuition authentique et validée : un code avec plus de chemins indépendants à travers lui est plus difficile à tester complètement, plus difficile à raisonner, et, dans des décennies de recherche empirique, mesurablement plus susceptible de contenir des défauts.

Ce chapitre traite cette intuition avec un véritable respect tout en traitant ses limites avec un sérieux égal. Les métriques de complexité mesurent une propriété spécifique du code, et une base de code peut être simple selon chaque métrique de complexité tout en étant mal conçue, mal nommée, ou conceptuellement incohérente de manières qu'aucun algorithme de comptage de branches ne peut détecter. Inversement, certains problèmes irréductiblement complexes nécessitent authentiquement un code complexe pour être résolus correctement, et une équipe sous pression pour minimiser un score de complexité peut produire du code qui obtient un bon score tout en étant réellement plus difficile à comprendre, répartissant la complexité essentielle à travers plus de fichiers et de couches d'indirection plutôt que de la réduire.

Pour les grandes équipes, les métriques de complexité gagnent leur place comme outil de triage : un moyen de trouver, parmi des milliers de fichiers, le petit sous-ensemble le plus susceptible de récompenser un examen plus approfondi, pas comme un verdict autonome sur la qualité de code. Les organisations de grande entreprise et de gouvernement maintenant des bases de code trop grandes pour qu'un individu les ait lues entièrement dépendent de cette fonction de triage pour diriger l'effort rare de refactorisation et de revue là où il fera le plus de bien.

## Principes clés

- **Les métriques de complexité prédisent la difficulté de test et de défaut ; elles ne mesurent pas directement la qualité.** Traitez-les comme une entrée, pas un verdict.
- **Un score de complexité est exposé à la manipulation par obfuscation, pas seulement par simplification authentique.** Diviser la complexité à travers plus de fichiers peut abaisser le score sans réellement rendre le code plus facile à comprendre.
- **Une certaine complexité est essentielle, pas accidentelle.** Un problème authentiquement difficile peut nécessiter un code authentiquement complexe ; l'objectif est de minimiser la complexité accidentelle, pas d'éliminer toute complexité indistinctement.
- **Utilisez les métriques de complexité pour le triage, pas comme fiche d'évaluation individuelle ou d'équipe.** Elles indiquent où regarder, pas qui blâmer.
- **La tendance et les valeurs aberrantes comptent plus qu'aucun seuil absolu.** Une tendance en hausse ou une valeur aberrante extrême est plus actionnable qu'une simple moyenne d'équipe.

## Recommandations

### Utilisez les métriques de complexité pour trier l'effort de revue et de refactorisation

Exécutez une analyse de complexité à travers la base de code et utilisez les résultats pour prioriser où une revue humaine plus approfondie ou un investissement de refactorisation paierait le plus : les fonctions ou fichiers notés bien au-dessus de la plage typique propre à la base de code sont les endroits à plus forte valeur à regarder en premier. Cet usage de triage, trouver où regarder, est l'application la plus défendable et la plus précieuse des métriques de complexité, bien plus que de les utiliser comme porte de validation absolue.

### Fixez des seuils relatifs à votre propre base de code, pas un nombre universel

Les seuils de complexité absolus empruntés sans esprit critique à la convention de l'industrie (un score de complexité de dix est une règle empirique couramment citée) peuvent être soit trop laxistes soit trop stricts selon votre domaine : un analyseur syntaxique ou un moteur de règles peut avoir légitimement une complexité de référence plus élevée qu'un service CRUD typique. Calibrez vos propres seuils contre la distribution réelle de votre base de code, et traitez un dépassement de seuil comme une invite à regarder de plus près, pas un échec automatique de compilation, à moins que votre équipe n'ait délibérément choisi cette politique plus stricte en pleine conscience de ses compromis.

### Surveillez la manipulation par décomposition sans simplification authentique

La manière la plus commune dont les scores de complexité sont manipulés est le schéma de substitution du chapitre 1.2 appliqué à cette métrique spécifique : diviser une fonction authentiquement complexe en plusieurs fonctions plus petites qui obtiennent individuellement un bon score, tandis que le système global reste tout aussi difficile à comprendre, ou devient parfois plus difficile, parce que la logique est maintenant dispersée à travers plus de fichiers avec plus d'indirection entre eux. Associez les métriques de complexité à une revue qualitative pour savoir si la décomposition a réellement clarifié le code, ou si elle a simplement déplacé la complexité quelque part où la métrique ne pouvait plus la voir.

### Distinguez la complexité essentielle de la complexité accidentelle avant de réagir

Avant de traiter un score de complexité élevé comme un problème à corriger, demandez si le problème sous-jacent nécessite authentiquement autant de chemins indépendants, la logique de calcul du code fiscal a légitimement de nombreuses branches, par exemple, ou si la complexité provient de causes évitables : des conditionnelles profondément imbriquées qui pourraient être aplaties, une logique dupliquée qui pourrait être consolidée, ou des frontières de responsabilité floues qui pourraient être redessinées. Seule la deuxième catégorie est un véritable problème de qualité que cette métrique devrait vous pousser à corriger.

### Suivez la tendance et les valeurs aberrantes, pas seulement une moyenne instantanée

Un score de complexité moyen à l'échelle de la base de code bougeant légèrement est rarement actionnable en soi ; la complexité d'un fichier spécifique montant fortement sur plusieurs changements, ou un petit nombre de valeurs aberrantes extrêmes dans une base de code autrement bien tenue, sont des signaux bien plus utiles. Suivez à la fois la tendance dans le temps et la queue des valeurs aberrantes, et utilisez-les pour déclencher une investigation spécifique et ciblée plutôt qu'une initiative large et diffuse de réduction de complexité.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Seuil universel absolu | Simple, cohérent, facile à automatiser | Ignore les différences légitimes de domaine ; peut être manipulé par décomposition |
| Seuil relatif à la base de code | Mieux calibré au contexte réel | Nécessite plus de configuration et une recalibration périodique |
| Complexité comme porte de compilation automatisée | Applique la cohérence sans surcharge de revue humaine | Peut bloquer un code légitimement complexe mais bien conçu, ou récompenser une décomposition obfusquée |
| Complexité comme signal de triage pour revue humaine | Attrape de véritables problèmes de qualité que la décomposition seule manquerait | Nécessite plus de temps de revue humaine qu'une porte entièrement automatisée |

La tension centrale est **l'automatisation contre le jugement**. Une porte de complexité entièrement automatisée est peu coûteuse à appliquer et cohérente, mais elle peut à la fois bloquer un code légitimement complexe et bien conçu et récompenser une décomposition superficielle qui manipule le score sans réellement simplifier quoi que ce soit. Résolvez la tension en utilisant l'analyse de complexité automatisée pour faire émerger des candidats à la revue, et en réservant le véritable jugement, cette complexité est-elle essentielle ou accidentelle, cette refactorisation a-t-elle authentiquement clarifié ou simplement relocalisé la complexité, à un réviseur humain plutôt qu'à une porte automatisée stricte seule.

## Questions à discuter avec votre équipe

1. **Nos seuils de complexité sont-ils calibrés à la distribution réelle de notre propre base de code, ou empruntés sans esprit critique à une convention générique de l'industrie ?** Rassemblez la distribution réelle de complexité de votre base de code et vérifiez si vos seuils actuels ont du sens face à elle, plutôt que de supposer qu'un nombre couramment cité s'applique universellement à votre domaine.

2. **Avons-nous déjà vu une fonction divisée en plusieurs plus petites sans que le code résultant ne devienne réellement plus facile à comprendre ?** C'est le signe le plus clair du schéma de manipulation par décomposition contre lequel ce chapitre met en garde. Regardez une refactorisation récente motivée principalement par un score de complexité et évaluez honnêtement si elle a amélioré la compréhensibilité authentique.

3. **Où dans notre base de code la complexité est-elle essentielle au problème, et où est-elle accidentelle et corrigible ?** Parcourez vos valeurs aberrantes de plus haute complexité et classez-les explicitement dans ces deux catégories, puisque seule la deuxième catégorie représente un véritable problème de qualité actionnable.

4. **Utilisons-nous les métriques de complexité pour trier l'effort de revue, ou comme porte automatisée stricte sans jugement humain impliqué ?** Discutez si votre approche d'application actuelle laisse place à la distinction essentielle-contre-accidentelle que ce chapitre recommande, ou si elle traite chaque dépassement identiquement sans égard au contexte.

5. **Un score de complexité a-t-il déjà été utilisé, même informellement, pour juger la qualité du travail d'un ingénieur individuel ?** Cela risque le même piège d'évaluation individuelle contre lequel le chapitre 3.4 met en garde pour les métriques d'activité, appliqué ici aux métriques de code à la place, et cela invite la même réponse de manipulation.

6. **À quoi ressemble notre tendance de complexité sur la dernière année pour nos fichiers les plus critiques et les plus fréquemment modifiés ?** Combinez cela avec l'analyse de churn et de points chauds du chapitre 4.3, puisqu'un fichier à la fois hautement complexe et fréquemment modifié mérite l'attention bien avant un qui est complexe mais rarement touché.

## Regard sectoriel

**Startup.** Les métriques de complexité sont habituellement moins urgentes à cette échelle ; la taille de la base de code est assez petite pour que la familiarité informelle se substitue souvent à la mesure formelle. L'habitude qui vaut la peine d'être adoptée tôt est simplement d'exécuter occasionnellement une analyse de complexité pour attraper un fichier spécifique devenant discrètement ingérable avant que l'équipe n'ait grandi trop pour le remarquer informellement.

**Petite entreprise.** La plupart des outils d'analyse statique modernes rapportent les métriques de complexité dans le cadre d'une configuration de linting plus large, gratuite ou peu coûteuse ; utilisez la sortie comme signal de triage périodique plutôt que d'investir dans un outillage dédié. Concentrez l'attention sur vos fichiers les plus fréquemment modifiés en premier.

**Grande entreprise.** Les métriques de complexité à l'échelle sont les plus précieuses combinées aux données de churn (chapitre 4.3) pour prioriser l'investissement de refactorisation à travers une base de code trop grande pour qu'un individu la parcoure manuellement. Calibrez les seuils par service ou domaine plutôt que d'appliquer un nombre unique à l'échelle de l'organisation, puisque la complexité légitime varie significativement selon les types de systèmes.

**Gouvernement.** Les systèmes gouvernementaux à longue durée de vie accumulent souvent de la complexité graduellement sur des années ou des décennies de changements de besoins incrémentaux, et un audit de complexité peut être un outil concret et persuasif pour justifier un investissement de modernisation ou de refactorisation auprès de parties prenantes qui pourraient autrement voir le système comme simplement « fonctionnant » et donc ne valant pas l'investissement.

## Exemples

**Grande entreprise.** Une entreprise de traitement de paiements a exécuté un audit de complexité à l'échelle de la base de code pour la première fois et a trouvé une seule fonction de validation de transaction avec un score de complexité cyclomatique plus de dix fois la médiane de la base de code. L'investigation a trouvé que la complexité était presque entièrement accidentelle : des années de gestion de cas particuliers ajoutée incrémentalement pour des fournisseurs de paiement spécifiques s'étaient accumulées en conditionnelles profondément imbriquées qui pouvaient être restructurées en un motif de stratégie plus propre séparant la logique spécifique au fournisseur. La refactorisation, priorisée directement parce que l'audit de complexité l'avait identifiée comme la cible unique à plus forte valeur de la base de code, a réduit le score de complexité de la fonction de plus de 80 % et, plus important encore, a réduit mesurablement le taux de défauts dans ce chemin de code spécifique sur les deux trimestres suivants.

**Gouvernement.** Le moteur de calcul des allocations vieux de plusieurs décennies d'une administration fiscale obtenait un score extrêmement élevé en métriques de complexité pour presque chaque fonction, provoquant une hypothèse initiale que le système entier avait besoin d'une réécriture complète. Une revue plus approfondie, fonction par fonction, distinguant la complexité essentielle de l'accidentelle a trouvé que la plupart de la complexité reflétait authentiquement les règles légales sous-jacentes, qui avaient réellement autant de branches et de cas particuliers légitimes mandatés par la loi, tandis qu'un sous-ensemble plus petit venait d'une duplication évitable à travers des chemins de calcul similaires. L'équipe a ciblé seulement le sous-ensemble de complexité accidentelle pour la refactorisation, évitant une réécriture complète coûteuse et risquée tout en améliorant de manière significative les zones authentiquement les plus problématiques du système.

## Argumentaire économique : motivations, ROI et TCO

Le retour de bien utiliser les métriques de complexité est un investissement de refactorisation ciblé et à forte valeur : l'exemple de l'entreprise de paiements ci-dessus montre une correction unique et bien ciblée, identifiée par l'analyse de complexité, qui a mesurablement réduit les défauts exactement dans le chemin de code le plus à risque, à une fraction du coût qu'une initiative de refactorisation large et non ciblée aurait nécessité.

Le coût total de possession est bas : la plupart des chaînes d'outils de développement modernes calculent les métriques de complexité automatiquement dans le cadre de l'analyse statique (chapitre 4.4), et le véritable investissement est le temps de jugement humain pour interpréter correctement les résultats, distinguer la complexité essentielle de l'accidentelle et attraper la manipulation par décomposition, plutôt qu'un coût d'outillage nouveau et significatif.

## Antipatrons et pièges

- **Traiter un score de complexité comme un verdict direct de qualité :** il mesure une propriété spécifique, pas la qualité globale du code.
- **Diviser une fonction pour manipuler le score sans simplification authentique :** le schéma de manipulation par décomposition que ce chapitre nomme spécifiquement.
- **Appliquer un seuil universel sans calibration à votre propre base de code :** produit une application soit trop laxiste soit trop stricte selon le domaine.
- **Utiliser les métriques de complexité pour évaluer individuellement les ingénieurs :** invite la manipulation et applique mal une métrique destinée au triage, pas au jugement.
- **Traiter toute complexité comme également corrigible :** la complexité essentielle d'un problème authentiquement difficile n'est pas un défaut à éliminer.
- **Ignorer la tendance et les valeurs aberrantes en faveur d'une moyenne plate à l'échelle de la base de code :** manque le signal le plus actionnable que cette famille de métriques fournit.

## Modèle de maturité

- **Niveau 1, Initiation :** La complexité n'est pas mesurée, ou est mesurée avec un seuil universel générique et non examiné appliqué sans esprit critique.
- **Niveau 2, Développement :** Les métriques de complexité sont collectées mais rarement suivies d'action, et aucune distinction n'est faite entre complexité essentielle et accidentelle.
- **Niveau 3, Standardisation :** Les seuils sont calibrés à la propre distribution de la base de code, et les métriques de complexité pilotent de manière cohérente le triage de revue et de refactorisation à l'échelle de l'organisation.
- **Niveau 4, Gestion :** La tendance de complexité et les valeurs aberrantes sont activement surveillées et combinées aux données de churn (chapitre 4.3) pour prioriser l'investissement de refactorisation ; la manipulation par décomposition est activement surveillée.
- **Niveau 5, Orchestration :** L'organisation peut pointer vers des améliorations spécifiques et mesurables du taux de défauts retracées directement à un investissement de refactorisation informé par la complexité, et les données de complexité sont une entrée routinière et fiable aux décisions d'investissement d'ingénierie.

## Idées pour la discussion

1. Quelle est notre fonction ou fichier unique le plus complexe, et sa complexité est-elle essentielle ou accidentelle ?
2. Avons-nous déjà manipulé un score de complexité par décomposition sans simplification réelle ?
3. Nos seuils sont-ils calibrés à notre propre base de code, ou empruntés sans esprit critique ?
4. Où la complexité élevée recoupe-t-elle le churn élevé dans notre base de code en ce moment ?
5. Les données de complexité ont-elles déjà informé une décision d'investissement de refactorisation, ou restent-elles inutilisées ?

## Points clés à retenir

- Les métriques de complexité comme la **complexité cyclomatique** prédisent la difficulté de test et de défaut ; elles ne mesurent pas directement la qualité globale du code.
- Distinguez la **complexité essentielle** (d'un problème authentiquement difficile) de la **complexité accidentelle** (évitable par une meilleure conception) avant de réagir à un score élevé.
- Surveillez la **manipulation par décomposition** : diviser le code pour abaisser un score sans réellement simplifier quoi que ce soit.
- Utilisez les métriques de complexité pour le **triage**, dirigeant la revue humaine et l'effort de refactorisation, pas comme fiche d'évaluation individuelle ou porte automatisée rigide.
- Calibrez les seuils à la **distribution de votre propre base de code**, et suivez la **tendance et les valeurs aberrantes**, pas seulement une moyenne plate.

## Sources et lectures complémentaires

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976) : l'article original sur la complexité cyclomatique.
- *Code Complete*, par Steve McConnell (conseils pratiques sur la gestion de la complexité dans la construction logicielle).
- *Working Effectively with Legacy Code*, par Michael Feathers (techniques pour réduire la complexité en sécurité dans du code existant et difficile à changer).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018) : la métrique de complexité cognitive et sa distinction d'avec la complexité cyclomatique.
