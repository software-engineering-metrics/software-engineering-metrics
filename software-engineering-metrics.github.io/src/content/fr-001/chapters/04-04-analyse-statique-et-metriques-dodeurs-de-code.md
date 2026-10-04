# 4.4 Analyse statique et métriques d'odeurs de code

## Vue d'ensemble et motivation

Les outils d'**[analyse statique](https://en.wikipedia.org/wiki/Static_program_analysis)** scannent le code source sans l'exécuter, signalant des schémas connus pour corréler avec des défauts, des vulnérabilités de sécurité, ou des problèmes de maintenabilité : code inaccessible, ressources non fermées, coercitions de type suspectes, logique dupliquée, et la catégorie plus large des **odeurs de code**, des schémas structurels qui ne sont pas nécessairement des bugs mais tendent à rendre le code plus difficile à comprendre, tester, ou changer en sécurité. L'analyse statique est la couche automatisée et continue sous-jacente aux métriques plus ciblées des autres chapitres de cette partie, s'exécutant à chaque commit et faisant émerger les problèmes au moment où ils sont introduits plutôt que d'attendre un audit périodique.

La préoccupation centrale de ce chapitre est l'écart entre ce que les outils d'analyse statique rapportent et ce qui compte réellement. Un outil peut signaler des milliers de constats à travers une grande base de code, et le nombre de constats seul est une mauvaise métrique, puisqu'il mélange des préférences de style triviales avec un véritable risque sévère, et il peut être réduit par suppression aussi facilement que par de véritables corrections. La valeur de l'analyse statique ne vient pas du compte brut de constats mais de la qualité avec laquelle une organisation trie par sévérité, prévient la régression, et résiste à la tentation de traiter le jugement de l'outil comme un substitut à la revue humaine plutôt qu'un complément à celle-ci.

Pour les grandes équipes, l'analyse statique est le seul moyen pratique d'appliquer une référence de qualité de code et d'hygiène de sécurité à travers une base de code plus grande que ce qu'aucune équipe ne peut revoir manuellement entièrement. Les organisations de grande entreprise et de gouvernement, faisant souvent face à des exigences de conformité autour des pratiques de codage sécurisé, dépendent de l'analyse statique comme preuve documentée et auditable qu'un niveau de référence de contrôle a été appliqué de manière cohérente, pas seulement quand un réviseur humain a remarqué un problème.

## Principes clés

- **Le compte brut de constats est une mauvaise métrique en soi.** Il mélange des problèmes triviaux et sévères, et peut être manipulé par suppression plutôt que par de véritables corrections.
- **Le tri par sévérité compte plus que le volume.** Un petit nombre de constats critiques mérite plus d'attention qu'un grand nombre de triviaux.
- **L'analyse statique complète la revue humaine ; elle ne la remplace pas.** Les outils attrapent des schémas ; ils ne comprennent pas l'intention ou le contexte d'affaires.
- **Une tendance de « nouveaux problèmes introduits » est plus actionnable qu'un compte total d'arriéré.** Elle vous dit si la pratique actuelle s'améliore ou se dégrade.
- **Les faux positifs érodent la confiance dans l'outil.** Un taux de faux positifs non géré conduit les équipes à ignorer les constats en masse, y compris les vrais.

## Recommandations

### Suivez les constats pondérés par sévérité, pas le compte brut

Configurez votre outillage d'analyse statique pour classer les constats par sévérité (critique, élevée, moyenne, basse, ou une échelle équivalente), et suivez une tendance pondérée par sévérité plutôt qu'un compte total plat. Une base de code avec zéro constat critique et cinq cents suggestions de style de basse sévérité est dans un état très différent de celle avec cinquante constats critiques et aucun problème de style du tout, et un compte brut traite ces cas comme à peu près équivalents quand ils ne le sont pas.

### Appliquez une porte sur les nouveaux constats introduits, pas sur l'arriéré historique total

La plupart des bases de code établies portent un arriéré historique de constats qui précèdent la pratique actuelle et seraient prohibitivement coûteux à corriger tous à la fois. Plutôt que de bloquer tout travail jusqu'à ce que l'arriéré entier soit nettoyé, appliquez une porte d'IC sur si un changement spécifique introduit de nouveaux constats au-dessus d'un seuil de sévérité convenu, laissant l'arriéré se réduire graduellement par la maintenance normale tout en empêchant une accumulation supplémentaire. Cette distinction reflète la recommandation de plancher de couverture du chapitre 4.2 : protéger contre la régression plutôt que d'exiger une correction irréaliste et tout-à-la-fois.

### Gérez activement le taux de faux positifs

Passez en revue périodiquement un échantillon de constats, particulièrement toute catégorie à haut volume, et vérifiez combien sont de véritables faux positifs, des cas où l'outil a signalé un schéma qui n'est en réalité pas problématique dans le contexte. Ajustez la configuration des règles pour supprimer spécifiquement les catégories de règles authentiquement bruyantes et à faible valeur, plutôt que de laisser les équipes développer l'habitude d'ignorer la sortie de l'outil en masse parce que trop de celle-ci est du bruit. Un taux de faux positifs élevé et non géré est la manière la plus rapide de détruire la crédibilité d'un programme d'analyse statique.

### Utilisez les constats d'analyse statique comme invite pour la revue, pas comme verdict automatique

Même un constat légitime et non faux positif ne mérite pas toujours une correction automatique et obligatoire ; certains schémas signalés sont acceptables étant donné un contexte spécifique qu'un outil ne peut pas voir. Construisez un processus léger pour qu'un humain revoie et soit corrige soit lève explicitement et visiblement un constat avec une raison documentée, plutôt que de soit appliquer aveuglément chaque constat comme obligatoire soit permettre une suppression silencieuse et non documentée qui érode la valeur de l'outil dans le temps.

### Combinez l'analyse statique avec les autres métriques de qualité de code de cette partie

Les constats d'analyse statique, les scores de complexité (chapitre 4.1), et les données de points chauds (chapitre 4.3) sont des preuves complémentaires, pas des métriques concurrentes. Un fichier avec une forte concentration de constats d'analyse statique non résolus qui est aussi un point chaud churn-complexité est un candidat particulièrement fort pour une attention priorisée, puisque plusieurs signaux indépendants convergent vers la même conclusion.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Compte brut de constats comme métrique | Simple à rapporter | Mélange des problèmes triviaux et sévères ; facilement manipulé par suppression |
| Tendance pondérée par sévérité | Reflète plus précisément le risque réel | Nécessite une maintenance continue de classification de sévérité |
| Porte sur l'arriéré historique entier | Maximise la propreté éventuelle du code | Souvent impraticable pour les bases de code établies ; peut arrêter tout travail |
| Porte sur les nouveaux constats seulement | Pratique, prévient la régression, laisse l'arriéré se réduire graduellement | Les problèmes hérités persistent plus longtemps sans plan de remédiation délibéré |

La tension centrale est **l'exhaustivité contre le pragmatisme**. Une politique d'analyse statique qui exige que l'arriéré historique entier soit résolu avant que tout nouveau travail ne procède est exhaustive mais habituellement impraticable pour toute base de code avec un historique réel, et les équipes sous cette pression ont tendance à supprimer les constats en masse plutôt que de les corriger authentiquement. Résolvez la tension en appliquant une porte stricte sur les nouveaux constats tout en exécutant un effort de remédiation séparé et délibérément rythmé contre l'arriéré hérité, priorisé en utilisant les techniques de sévérité et de croisement que ce chapitre et le chapitre 4.3 recommandent.

## Questions à discuter avec votre équipe

1. **Suivons-nous une tendance pondérée par sévérité, ou juste un compte brut total de constats ?** Sortez votre tableau de bord réel et vérifiez ; un compte brut est courant par défaut dans de nombreux outils et nécessite souvent une configuration délibérée pour faire émerger correctement la sévérité à la place.

2. **Quel est notre arriéré hérité actuel de constats non résolus, et avons-nous un plan délibéré et rythmé pour le réduire, ou s'accumule-t-il simplement indéfiniment ?** Un arriéré non adressé et grandissant silencieusement est courant et vaut la peine d'être nommé honnêtement plutôt que laissé non examiné.

3. **Quel est notre taux de faux positifs estimé pour nos catégories de constats à plus haut volume, et avons-nous ajusté la configuration des règles en réponse ?** Si vous n'avez jamais vérifié cela, échantillonnez un lot de constats de votre catégorie la plus bruyante et évaluez honnêtement combien sont authentiquement actionnables.

4. **Les ingénieurs de notre équipe font-ils confiance aux constats d'analyse statique, ou ont-ils appris à les ignorer parce que trop de la sortie est du bruit ?** C'est une question directe et honnête de vérification instinctive qui vaut la peine d'être posée à l'équipe, puisqu'un outil qui est ignoré ne fournit aucune valeur réelle indépendamment de sa capacité théorique.

5. **Comment traitons-nous actuellement un constat légitime qu'une équipe estime devoir être levé étant donné un contexte spécifique ?** Vérifiez si votre processus fait de cela une décision visible et documentée, ou si cela se produit par suppression silencieuse et non documentée qui érode le signal de l'outil dans le temps.

6. **Où les constats d'analyse statique, les scores de complexité, et les données de points chauds convergent-ils sur le même fichier ou module ?** Croisez ces trois signaux explicitement ; la convergence à travers plusieurs métriques indépendantes est un signal de priorisation plus fort qu'aucun seul.

## Regard sectoriel

**Startup.** Un outil d'analyse statique léger et gratuit intégré à l'IC dès le début est une assurance peu coûteuse et attrape de véritables problèmes tôt, avant qu'un arriéré hérité n'ait eu la moindre chance de s'accumuler. Gardez l'ensemble de règles concentré sur des catégories authentiquement à forte valeur et à faible bruit plutôt que d'activer immédiatement chaque règle disponible.

**Petite entreprise.** La plupart des écosystèmes de langage modernes incluent un outillage d'analyse statique gratuit et compétent ; l'activer en IC avec un ensemble de règles par défaut sensé nécessite peu d'investissement. Concentrez-vous sur la porte des nouveaux constats plutôt que de tenter de résoudre tout arriéré préexistant d'un coup.

**Grande entreprise.** Gérer délibérément le taux de faux positifs et le tri par sévérité devient essentiel à cette échelle, puisqu'un outil mal ajusté générant un bruit excessif à travers des dizaines d'équipes sera ignoré à l'échelle de l'organisation. Investissez dans un propriétaire dédié pour la configuration de l'outillage d'analyse statique lui-même, traitant l'ajustement des règles comme une discipline continue plutôt qu'une tâche de configuration unique.

**Gouvernement.** Les constats d'analyse statique, particulièrement ceux liés à la sécurité, sont souvent directement pertinents pour les exigences de conformité et d'audit. Maintenez un processus documenté et auditable sur comment les constats sont triés, corrigés, ou formellement levés avec une justification enregistrée, puisque cette documentation elle-même est fréquemment ce qu'un auditeur externe voudra voir.

## Exemples

**Grande entreprise.** Le tableau de bord d'analyse statique d'une entreprise de logiciels avait accumulé plus de quarante mille constats non résolus à travers sa base de code après plusieurs années sans tri pondéré par sévérité, un nombre si grand que les ingénieurs avaient largement cessé de regarder le tableau de bord du tout. Une approche révisée a classé les constats par sévérité, a trouvé que moins de deux cents étaient authentiquement critiques, et a appliqué une porte d'IC spécifiquement sur les nouveaux constats critiques et de sévérité élevée tout en laissant l'arriéré de basse sévérité se réduire graduellement par la maintenance de code normale. En six mois, les constats critiques étaient tombés à un chiffre unique, et, plus important encore, les données d'enquête des ingénieurs ont montré une confiance renouvelée dans la sortie de l'outil maintenant qu'elle faisait émerger un signal gérable et authentiquement actionnable plutôt qu'un arriéré accablant et ignoré.

**Gouvernement.** La politique de sécurité de la chaîne d'approvisionnement logicielle d'une agence de défense exigeait un scan d'analyse statique avec zéro constat non résolu avant toute publication, une politique qui avait, en pratique, conduit les équipes de développement à supprimer un grand nombre de constats, y compris certains véritables problèmes de sécurité, simplement pour respecter les délais de publication sous une porte tout-ou-rien impraticable. Une politique révisée exigeait zéro nouveau constat critique ou de sévérité élevée introduit par toute publication donnée, combinée à un plan de remédiation documenté et suivi et un calendrier pour l'arriéré hérité, revus trimestriellement par un comité de gouvernance de sécurité. Cette approche pratique et par phases a à la fois restauré un véritable contrôle de sécurité sur le nouveau code et fait des progrès réels et mesurables contre l'arriéré hérité sur dix-huit mois, contrairement à la politique antérieure impraticable qui avait surtout produit de la suppression plutôt que de véritables corrections.

## Argumentaire économique : motivations, ROI et TCO

Le retour d'une analyse statique bien gérée est de capturer de véritables défauts et vulnérabilités de sécurité avant qu'ils n'atteignent la production, à un coût bien plus bas que ce que l'effort de revue humaine équivalent nécessiterait pour la même couverture. L'exemple de l'agence de défense ci-dessus montre le coût de mal faire cela : une politique tout-ou-rien impraticable avait en réalité réduit le véritable contrôle de sécurité en conduisant à la suppression, l'opposé de son intention.

Le coût total de possession inclut l'outillage lui-même, souvent gratuit ou peu coûteux pour les écosystèmes de langage courants, et la discipline continue de tri par sévérité, de gestion des faux positifs, et de planification de remédiation de l'arriéré hérité. Cette discipline continue, plus que l'outil lui-même, est ce qui détermine si un programme d'analyse statique fournit une valeur authentique et fiable ou se dégrade en bruit ignoré.

## Antipatrons et pièges

- **Traiter le compte brut de constats comme la métrique :** mélange des problèmes triviaux et sévères et est facilement manipulé par suppression.
- **Exiger que l'arriéré historique entier soit résolu avant que tout nouveau travail ne procède :** habituellement impraticable et conduit à la suppression plutôt qu'à de véritables corrections.
- **Ignorer le taux de faux positifs :** un niveau de bruit non géré conduit les équipes à ignorer entièrement la sortie de l'outil, y compris les vrais constats.
- **Suppression silencieuse et non documentée de constats légitimes :** érode le signal de l'outil et ne laisse aucune trace d'audit à des fins de conformité.
- **Traiter un constat d'analyse statique comme un verdict automatique sans revue humaine :** manque un contexte qu'un outil ne peut pas voir.
- **Ne jamais croiser les constats avec les données de complexité et de points chauds :** manque le signal de priorisation plus fort que la preuve convergente fournit.

## Modèle de maturité

- **Niveau 1, Initiation :** L'analyse statique n'est pas exécutée, ou les constats s'accumulent de manière non gérée sans tri par sévérité ni suivi de tendance.
- **Niveau 2, Développement :** Une certaine analyse statique s'exécute en IC, mais le tri par sévérité est incohérent et le taux de faux positifs est non géré.
- **Niveau 3, Standardisation :** Les constats sont pondérés par sévérité et l'IC applique une porte sur les nouveaux constats critiques et de sévérité élevée, à l'échelle de l'organisation.
- **Niveau 4, Gestion :** Le taux de faux positifs est activement ajusté, l'arriéré hérité a un plan de remédiation documenté et rythmé, et les levées sont visibles et documentées.
- **Niveau 5, Orchestration :** Les constats d'analyse statique, les données de complexité, et les données de points chauds sont routinièrement croisés pour prioriser l'investissement, et l'organisation peut pointer vers des améliorations spécifiques et mesurables de défauts ou de sécurité retracées au programme.

## Idées pour la discussion

1. Quelle est notre tendance pondérée par sévérité actuelle, et s'améliore-t-elle ou s'aggrave-t-elle ?
2. Quelle est la taille de notre arriéré hérité de constats, et avons-nous un plan délibéré pour le réduire ?
3. Quel est notre taux de faux positifs estimé pour notre catégorie de constats la plus bruyante ?
4. Les ingénieurs de notre équipe font-ils actuellement confiance à notre sortie d'analyse statique, ou l'ignorent-ils ?
5. Où les constats d'analyse statique convergent-ils avec les données de complexité ou de points chauds dans notre base de code ?

## Points clés à retenir

- Suivez une **tendance pondérée par sévérité**, pas un compte brut de constats, qui mélange des problèmes triviaux et sévères.
- Appliquez une porte d'IC sur les **nouveaux constats introduits**, pas l'arriéré historique entier, pour prévenir la régression sans exiger une correction impraticable tout-à-la-fois.
- Gérez activement le **taux de faux positifs** ; un bruit non géré détruit la confiance dans l'outil et conduit à ce que les constats soient ignorés en masse.
- Traitez les constats comme une **invite pour la revue humaine**, avec des levées visibles et documentées, pas un verdict automatique ou une suppression silencieuse.
- Croisez l'analyse statique avec les **données de complexité et de points chauds** (chapitres 4.1, 4.3) pour une preuve de priorisation convergente et plus forte.

## Sources et lectures complémentaires

- *Static Program Analysis*, par Anders Møller et Michael I. Schwartzbach (les fondements théoriques et pratiques des techniques d'analyse statique).
- Les conseils d'OWASP sur les tests de sécurité des applications statiques (SAST), partie des ressources plus larges de l'OWASP Foundation sur les pratiques de développement logiciel sécurisé.
- *Refactoring: Improving the Design of Existing Code*, par Martin Fowler (le catalogue d'odeurs de code sur lequel une grande partie de l'outillage d'analyse statique s'appuie).
- *Working Effectively with Legacy Code*, par Michael Feathers (gérer un arriéré hérité de problèmes de qualité dans une base de code établie).
