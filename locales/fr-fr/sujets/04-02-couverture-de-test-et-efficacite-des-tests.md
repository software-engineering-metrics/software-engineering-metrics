# 4.2 Couverture de test et efficacité des tests

## Vue d'ensemble et motivation

La **[couverture de test](https://en.wikipedia.org/wiki/Code_coverage)** mesure le pourcentage de code exécuté par une suite de tests : couverture de ligne, couverture de branche, ou la couverture de chemin plus stricte. C'est l'une des métriques les plus largement suivies de tout ce livre, peu coûteuse à calculer, facile à visualiser comme un pourcentage unique, et conséquemment l'une des plus fréquemment manipulées, exactement de la manière que le chapitre 1.2 prédit pour toute métrique qui devient une cible. Une suite de tests peut atteindre une haute couverture tout en vérifiant presque rien de significatif, parce que la couverture mesure si le code a été exécuté pendant une passe de test, pas si le test a réellement vérifié que le code se comportait correctement.

Cet écart entre couverture et efficacité authentique des tests n'est pas une note de bas de page mineure ; c'est la préoccupation centrale de ce chapitre. Un test qui appelle une fonction et n'affirme rien sur son résultat augmente la couverture de manière identique à un test qui vérifie minutieusement le comportement de la fonction à travers les cas limites. Le correctif que ce chapitre recommande, le **test de mutation**, introduit délibérément de petites fautes artificielles dans le code et vérifie si la suite de tests les attrape réellement, est la réponse directe à cet écart, et ce chapitre le traite comme le complément nécessaire de la couverture, pas un extra facultatif.

Pour les grandes équipes, les objectifs de couverture sont souvent adoptés à l'échelle de l'organisation comme porte de qualité, précisément le genre de métrique incitative et hautement visible contre laquelle le chapitre 1.2 met en garde comme la plus exposée à la manipulation. Les organisations de grande entreprise et de gouvernement qui fixent une exigence de pourcentage de couverture générale sans contrôle d'efficacité associé incitent, en effet, exactement le schéma de manipulation de seuil que ce livre décrit : des tests triviaux rédigés purement pour atteindre un chiffre, sans amélioration correspondante de la prévention réelle de défauts.

## Principes clés

- **La couverture mesure l'exécution, pas la vérification.** Qu'une ligne soit exécutée par un test ne dit rien sur si le test a vérifié quelque chose de significatif à son sujet.
- **Un objectif de couverture sans contrôle d'efficacité est une configuration manuel de la loi de Goodhart** (chapitre 1.2) : le chiffre s'améliore tandis que la qualité authentique ne le fait pas.
- **Le test de mutation est le complément nécessaire de la couverture,** pas un remplacement ; utilisez les deux ensemble.
- **La couverture est plus utile comme plancher que comme objectif à maximiser.** Un chiffre bas révèle du code authentiquement non testé ; poursuivre 100 % produit souvent des retours décroissants ou négatifs.
- **La couverture des chemins critiques compte plus que la couverture uniforme et générale.** Tout le code ne porte pas un risque égal en cas d'échec.

## Recommandations

### Utilisez la couverture pour trouver le code non testé, pas comme objectif à maximiser

Traitez un rapport de couverture principalement comme une carte de ce qui n'a aucun test du tout, ce qui est une information authentiquement utile, plutôt que comme un score à pousser vers 100 %. Le code avec une couverture de zéro est un véritable écart qui vaut la peine d'être comblé ; la valeur marginale de pousser la couverture de 85 % à 95 % est habituellement bien plus basse et souvent ne vaut pas l'effort qu'elle demande, particulièrement si cet effort produit des tests de faible valeur juste pour atteindre le chiffre plus élevé.

### Associez chaque objectif de couverture au test de mutation

Les outils de **test de mutation** introduisent automatiquement de petites fautes dans votre code, inverser un opérateur de comparaison, changer une condition limite, puis exécutent votre suite de tests contre chaque version mutée. Une suite de tests qui « tue » (échoue contre) la plupart des mutants vérifie authentiquement le comportement ; une suite de tests avec une haute couverture de ligne mais un faible taux de mise à mort de mutation exécute le code sans le vérifier de manière significative. Cette association est le garde-fou unique le plus efficace contre la manipulation d'objectif de couverture, et ce livre la recommande comme pratique standard, pas une technique avancée ou facultative.

### Priorisez la couverture et le test de mutation sur les chemins critiques en premier

Tout le code ne porte pas un risque égal. Un chemin de traitement de paiement, une vérification d'authentification, ou un script de migration de données mérite un test bien plus rigoureux qu'un rapport administratif rarement utilisé. Plutôt que de poursuivre une couverture uniforme à travers une base de code entière, identifiez vos chemins de code au risque et aux conséquences les plus élevés et concentrez-y l'effort de couverture et de test de mutation en premier, acceptant une couverture plus basse sur du code authentiquement à faible risque comme un compromis délibéré et informé plutôt qu'un oubli.

### Surveillez les schémas spécifiques de manipulation de couverture

Les manières les plus communes dont la couverture est manipulée, une fois qu'elle devient une cible, incluent : des tests qui appellent une fonction mais n'affirment rien de significatif sur le résultat (la manipulation de seuil du chapitre 1.2 appliquée à cette métrique), désactiver ou supprimer des tests en échec plutôt que corriger le problème sous-jacent, et exclure du code difficile à tester du calcul de couverture entièrement plutôt que d'adresser pourquoi il est difficile à tester. Auditez périodiquement un échantillon de tests directement, en lisant leurs assertions réelles, plutôt que de faire confiance au pourcentage de couverture seul.

### Fixez un plancher de couverture, pas un plafond de couverture, dans votre pipeline d'IC

Configurez votre pipeline de compilation pour échouer si la couverture tombe sous un plancher convenu pour le nouveau code, prévenant la régression, plutôt que d'exiger que chaque changement pousse le chiffre global plus haut. Cette distinction compte : un plancher protège contre le recul sans créer la même pression ascendante incessante qui produit des tests de faible valeur rédigés purement pour grappiller le chiffre davantage.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Pourcentage de couverture seul | Peu coûteux, simple, largement supporté par l'outillage | Facilement manipulé ; mesure l'exécution, pas la vérification |
| Couverture plus test de mutation | Vérifie que les tests contrôlent réellement le comportement, résiste à la manipulation | Plus coûteux en calcul ; nécessite un investissement d'outillage |
| Objectif de couverture uniforme à travers la base de code | Simple à énoncer et à appliquer | Gaspille l'effort sur du code à faible risque ; sous-investit ailleurs par rapport au risque |
| Couverture basée sur le risque, chemins critiques en premier | Concentre l'effort là où cela compte le plus | Nécessite du jugement pour identifier correctement les chemins authentiquement critiques |

La tension centrale est **la simplicité contre l'honnêteté**. Un pourcentage de couverture unique est facile à rapporter et facile à fixer comme objectif, mais cette simplicité est exactement ce qui le rend si facilement manipulable une fois qu'il devient un chiffre incitatif. Résolvez la tension en acceptant la complexité ajoutée du test de mutation et de la priorisation basée sur le risque comme le coût d'un signal honnête, et en communiquant explicitement à votre équipe pourquoi un chiffre de couverture global plus bas, correctement concentré sur les chemins critiques et soutenu par un fort taux de mise à mort de mutation, a plus de valeur qu'un plus élevé mais réparti plus uniformément et moins efficacement vérifié.

## Questions à discuter avec votre équipe

1. **Quel est notre taux de mise à mort de mutation sur nos chemins de code au risque le plus élevé, et comment se compare-t-il à notre pourcentage de couverture sur le même code ?** Un grand écart entre un chiffre de couverture élevé et un faible taux de mise à mort de mutation est le signe le plus clair possible que la couverture seule ne vous dit pas ce que vous pensez qu'elle vous dit.

2. **Avons-nous déjà rédigé un test principalement pour augmenter un chiffre de couverture, avec peu de réflexion réelle sur ce qu'il devrait vérifier ?** Soyez honnêtes ici ; cela arrive plus souvent que les équipes aiment l'admettre, particulièrement sous pression de délai quand une porte de couverture bloque une fusion.

3. **Notre effort de couverture est-il concentré sur nos chemins de code au risque le plus élevé, ou réparti uniformément indépendamment de la conséquence si ce code échoue ?** Cartographiez votre distribution de couverture actuelle contre une évaluation honnête du risque de votre base de code et cherchez l'écart.

4. **Avons-nous déjà désactivé ou supprimé un test en échec plutôt que de corriger le problème sous-jacent qu'il révélait ?** C'est l'une des formes les plus dommageables de manipulation de couverture, parce qu'elle retire activement une protection réelle tandis que le chiffre de couverture rapporté bouge à peine.

5. **Notre pipeline d'IC applique-t-il un plancher de couverture pour le nouveau code, ou pousse-t-il vers un plafond toujours plus élevé indépendamment des retours décroissants ?** Discutez si la conception de votre porte actuelle crée la bonne incitation, protéger contre la régression, ou la mauvaise, une pression ascendante incessante qui récompense le remplissage de tests à faible valeur.

6. **Quel code dans notre base de code est exclu du calcul de couverture, et cette exclusion est-elle justifiée ou cache-t-elle un véritable écart de test ?** Passez en revue votre configuration d'exclusion réelle ; il est courant que cette liste grandisse discrètement avec le temps sans que personne ne revisite si chaque exclusion est encore justifiée.

## Regard sectoriel

**Startup.** Les objectifs de couverture formels sont souvent inutiles si tôt ; concentrez l'effort de rédaction de tests directement sur vos chemins de code les plus risqués et critiques pour l'activité (habituellement la logique de paiement ou de flux de travail central) plutôt que de poursuivre un pourcentage général à travers une base de code qui change encore rapidement et pourrait être substantiellement réécrite bientôt de toute façon.

**Petite entreprise.** La plupart des plateformes d'IC rapportent la couverture automatiquement à coût de configuration minimal ; utilisez-la principalement pour repérer du code critique complètement non testé plutôt que de poursuivre un pourcentage cible spécifique, et considérez le test de mutation seulement une fois que vous avez la capacité d'ingénierie pour agir sur ce qu'il révèle.

**Grande entreprise.** Les objectifs de couverture généraux à l'échelle de l'organisation sont une erreur courante et conséquente à cette échelle, puisqu'ils incitent exactement la manipulation que ce chapitre décrit à travers des dizaines d'équipes simultanément. Établissez des attentes de couverture basées sur le risque qui varient selon la criticité du service, et investissez dans une infrastructure de test de mutation pour vos systèmes au risque le plus élevé spécifiquement.

**Gouvernement.** Les exigences de couverture apparaissent parfois dans la documentation d'approvisionnement ou de conformité comme un représentant brut et facilement spécifié de l'assurance qualité. Là où possible, associez tout pourcentage de couverture contractuellement requis à une exigence d'efficacité basée sur le test de mutation ou les défauts, afin que l'incitation contractuelle ne récompense pas par inadvertance exactement le remplissage de tests à faible valeur contre lequel ce chapitre met en garde.

## Exemples

**Grande entreprise.** La direction d'une plateforme de commerce électronique avait fixé une exigence de couverture de 95 % à l'échelle de l'entreprise pour tout nouveau code, appliquée comme porte d'IC stricte. Un audit deux ans plus tard, provoqué par une vague de défauts en production dans du code censément bien testé, a trouvé un taux de mise à mort de mutation sous 40 % à travers une grande partie de la base de code : les équipes avaient rédigé des tests qui exécutaient des chemins de code sans affirmer de manière significative sur leur comportement, purement pour satisfaire la porte sous pression de délai. L'entreprise a remplacé l'exigence de couverture générale par une politique à niveaux basés sur le risque : couverture stricte plus test de mutation obligatoire au-dessus d'un seuil de taux de mise à mort de 80 % pour le code de paiement et d'authentification, et un plancher de couverture bien plus léger pour l'outillage interne à faible risque, ce qui a à la fois réduit l'effort de test gaspillé et mesurablement amélioré les taux de défauts dans les chemins authentiquement critiques.

**Gouvernement.** Le système d'éligibilité aux prestations d'une agence de santé publique avait été contractuellement tenu de maintenir une couverture de test de 90 % selon son accord avec le fournisseur de développement. Une revue post-incident, suivant un défaut significatif de calcul d'éligibilité ayant été déployé malgré la satisfaction de l'exigence de couverture, a trouvé que la fonction spécifique responsable avait atteint sa couverture entièrement par des tests qui appelaient la fonction avec des entrées valides mais ne testaient jamais les conditions limites ou les entrées invalides, précisément là où le défaut s'est produit. Le contrat de fournisseur révisé de l'agence exige maintenant un score de test de mutation documenté aux côtés de la couverture pour tout code de calcul d'éligibilité, fermant l'écart spécifique qui avait permis à un test conforme mais inefficace de satisfaire le contrat.

## Argumentaire économique : motivations, ROI et TCO

Le retour d'associer la couverture au test de mutation est de capturer l'écart entre la qualité apparente et réelle des tests avant qu'il ne coûte un défaut en production. L'exemple de commerce électronique ci-dessus montre le schéma clairement : une exigence de couverture seule avait produit un faux sentiment de sécurité qu'une vague de défauts a finalement exposé à un coût bien plus élevé que l'investissement de test de mutation qui aurait attrapé l'écart plus tôt.

Le coût total de possession inclut le coût de calcul du test de mutation, qui est plus coûteux à exécuter que l'instrumentation de couverture simple et est donc habituellement réservé au code de chemin critique plutôt qu'à une base de code entière, plus le temps d'ingénierie pour interpréter et agir sur les résultats. Ce coût est justifié spécifiquement pour le code au risque le plus élevé, où le coût d'un écart non détecté d'efficacité de test est le plus élevé.

## Antipatrons et pièges

- **Traiter le pourcentage de couverture comme un verdict direct de qualité :** il mesure l'exécution, pas la vérification.
- **Rédiger des tests principalement pour satisfaire une porte de couverture :** produit exactement le schéma de manipulation de seuil à faible valeur contre lequel le chapitre 1.2 met en garde.
- **Désactiver ou supprimer des tests en échec au lieu de corriger le problème sous-jacent :** retire une protection réelle tout en affectant à peine le chiffre rapporté.
- **Appliquer un objectif de couverture uniforme indépendamment du risque de code :** gaspille l'effort sur du code à faible risque et sous-investit dans les chemins authentiquement critiques.
- **Faire grandir une liste d'exclusion discrètement avec le temps :** cache de véritables écarts de test derrière un chiffre de couverture techniquement exact mais trompeur.
- **Poursuivre un plafond de couverture au lieu d'un plancher de couverture :** crée une pression ascendante incessante qui récompense le remplissage de tests plutôt que la vérification authentique.

## Modèle de maturité

- **Niveau 1, Initiation :** La couverture n'est pas mesurée, ou est mesurée de manière incohérente sans plancher, objectif, ou contrôle d'efficacité.
- **Niveau 2, Développement :** Un objectif de couverture existe et est suivi, mais aucun test de mutation ou priorisation basée sur le risque n'informe comment l'effort est alloué.
- **Niveau 3, Standardisation :** Les planchers de couverture sont appliqués de manière cohérente en IC, avec une priorisation basée sur le risque dirigeant où l'effort de couverture se concentre.
- **Niveau 4, Gestion :** Le test de mutation s'exécute sur le code de chemin critique, avec un seuil de taux de mise à mort suivi devant être atteint aux côtés de la couverture, et les listes d'exclusion sont auditées périodiquement.
- **Niveau 5, Orchestration :** L'organisation peut pointer vers des réductions de défauts spécifiques retracées à une priorisation informée par le test de mutation, et les données de couverture et d'efficacité informent ensemble directement les décisions d'investissement de test.

## Idées pour la discussion

1. Quel est notre taux de mise à mort de mutation sur notre chemin de code le plus critique, et le savons-nous même ?
2. Avons-nous déjà rédigé un test à faible valeur purement pour satisfaire une porte de couverture ?
3. Notre effort de couverture actuel est-il concentré là où le risque est le plus élevé, ou réparti uniformément ?
4. Quel code est actuellement exclu du calcul de couverture, et cette exclusion est-elle encore justifiée ?
5. Un investissement de test de mutation sur notre système au risque le plus élevé en vaudrait-il le coût de calcul ?

## Points clés à retenir

- La couverture de test mesure **l'exécution, pas la vérification** ; une ligne couverte ne dit rien sur si elle a été vérifiée de manière significative.
- Associez la couverture au **test de mutation** pour vérifier que les tests attrapent réellement de véritables fautes, pas seulement qu'ils exécutent le code.
- Concentrez l'effort de test sur les **chemins critiques et à haut risque** plutôt que de poursuivre une couverture uniforme à travers une base de code entière.
- Utilisez la couverture comme **plancher pour protéger contre la régression**, pas un plafond à maximiser sans relâche.
- Surveillez les schémas spécifiques de manipulation de couverture : **tests à faible valeur, tests en échec désactivés, et listes d'exclusion grandissant discrètement**.

## Sources et lectures complémentaires

- *Working Effectively with Legacy Code*, par Michael Feathers (stratégie de couverture de test pour les bases de code existantes et difficiles à tester).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011) : une étude complète des techniques de test de mutation et de leur efficacité.
- *xUnit Test Patterns*, par Gerard Meszaros (motifs de conception de test pertinents pour rédiger des tests authentiquement efficaces, pas seulement satisfaisant la couverture).
- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble, and Gene Kim (la relation entre les pratiques de test et la performance de livraison).
