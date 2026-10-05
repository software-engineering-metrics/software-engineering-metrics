# 2.7 Théorie des files d'attente

## Vue d'ensemble et motivation

La **[théorie des files d'attente](https://en.wikipedia.org/wiki/Queueing_theory)** est l'étude mathématique des lignes d'attente. Cela semble être un ajustement étrange pour un livre sur les métriques d'ingénierie logicielle jusqu'à ce que vous remarquiez à quel point une grande partie d'un pipeline de livraison est réellement une file d'attente : une demande de tirage attendant un réviseur, un commit attendant un exécuteur CI, un ticket attendant d'être pris en charge, un message de support client attendant une réponse. Le sujet 2.4 a déjà introduit la charge de flux et le temps de flux et a montré que surcharger un flux de valeur ralentit nettement la livraison, et les sujets 2.5 et 2.6 ont montré que la plupart du temps de livraison est du temps d'attente, pas du temps de travail. La théorie des files d'attente est la mathématique sous-jacente qui explique pourquoi tout cela est vrai, pas seulement un schéma observé.

Le résultat unique le plus utile est la **[loi de Little](https://en.wikipedia.org/wiki/Little%27s_law)**, un théorème démontré par le chercheur en recherche opérationnelle John Little en 1961 : le nombre moyen d'éléments dans un système stable est égal au taux moyen auquel les éléments arrivent, multiplié par le temps moyen que chaque élément passe dans le système. Le sujet 2.4 a déjà utilisé ce résultat sous les propres noms du Flow Framework, la charge de flux est égale au taux d'arrivée multiplié par le temps de flux. Dans le vocabulaire plus large de ce livre, cela se lit aussi comme le travail en cours (sujet 2.5) est égal au taux d'arrivée de nouveau travail multiplié par le temps de cycle (sujet 2.6). Ce n'est pas une règle empirique ou une corrélation observée dans certaines études. C'est une preuve qui tient pour toute file stable, indépendamment de ce que la file traite ou comment elle décide de ce sur quoi travailler ensuite.

Pour une grande équipe, cette généralité est tout l'intérêt. La loi de Little vous donne une vérification de bon sens qui fonctionne identiquement que la file soit un tableau kanban, un courtier de messages, ou un pipeline CI partagé. Si votre travail en cours mesuré, taux d'arrivée et temps de cycle ne satisfont pas approximativement l'équation, l'un de vos trois chiffres est faux, généralement à cause d'une définition incohérente de ce qui compte comme « en cours » ou « arrivé ». Les organisations d'entreprise et gouvernementales gèrent des dizaines de telles files à la fois, pools de revue de code partagés, environnements de test partagés, conseils d'approbation partagés, et la loi de Little est l'outil le moins coûteux disponible pour attraper une mauvaise définition de métrique avant qu'elle ne conduise une mauvaise décision de personnel ou de processus.

## Principes clés

- **La loi de Little est une preuve, pas une heuristique.** Le travail en cours est égal au taux d'arrivée multiplié par le temps de cycle, pour toute file stable, et c'est une vérification rapide de si vos métriques de livraison sont internement cohérentes.
- **L'utilisation ne s'échelonne pas linéairement avec le temps d'attente.** À mesure qu'une ressource partagée approche de l'utilisation complète, le délai de mise en file croît nettement, pas graduellement. Une ressource fonctionnant à 95 % d'occupation attend souvent bien plus longtemps qu'une fonctionnant à 80 %, pas juste « un peu pire ».
- **La moyenne d'une file cache son pire cas.** Rapporter seulement le temps d'attente moyen dissimule la longue traîne douloureuse près de la capacité, exactement ce contre quoi met en garde le sujet 1.6 concernant l'utilisation de percentiles plutôt que de moyennes.
- **Comment une file est définie peut être manipulé aussi facilement que toute autre métrique.** Si quelque chose compte comme « arrivé », « en cours », ou « servi » est un choix, et il peut être ajusté pour flatter un tableau de bord sans changer ce qui arrive réellement au travail.
- **Un pipeline est généralement une file de files.** Un pipeline de livraison enchaîne plusieurs étapes ensemble, et l'étape la plus lente fixe le rythme pour toute la chaîne indépendamment de la vitesse des autres.

## Recommandations

### Utilisez la loi de Little pour vérifier vos propres chiffres avant de leur faire confiance

Prenez le travail en cours moyen mesuré de votre équipe, son taux d'arrivée moyen de nouveaux éléments par semaine, et son temps de cycle moyen, et vérifiez si le travail en cours est approximativement égal au taux d'arrivée multiplié par le temps de cycle. Quand ce n'est pas le cas, ne supposez pas que la théorie est fausse. Cherchez la cause réelle : une limite d'étape comptée de manière incohérente, un travail qui reste « bloqué » mais est toujours compté comme en cours, ou un taux d'arrivée mesuré sur une fenêtre différente du temps de cycle. Cette seule vérification attrape plus de mauvaise instrumentation que la plupart des équipes ne trouvent par toute autre méthode.

### Suivez l'utilisation directement pour chaque ressource partagée et contrainte en capacité

Identifiez les ressources que votre pipeline de livraison partage à travers de nombreuses équipes, un pool de revue de code, un cluster CI, un environnement de pré-production, et mesurez à quel point chacune fonctionne occupée en proportion de sa capacité disponible, avant de prévoir de la faire fonctionner près de sa limite. Un groupe de réviseurs partagé fonctionnant près de la capacité complète produit des temps d'attente de file de revue qui croissent bien plus vite que l'augmentation modeste de demande qui les a causés, exactement la dynamique derrière le conseil du sujet 2.9 de surveiller le temps jusqu'à la première revue comme indicateur avancé.

### Séparez le taux d'arrivée, le taux de succès, le taux d'échec et le taux d'abandon

Résistez à fusionner tout ce qui quitte une file en un seul chiffre « débit » ou « taux de service ». Suivez quatre choses séparément : à quelle vitesse le travail arrive, combien se termine avec succès, combien échoue et a besoin de reprise, et combien est abandonné ou tranquillement laissé tomber avant que quiconque ne le termine. Un pipeline qui a l'air rapide parce que son taux d'abandon a tranquillement grimpé ne livre pas réellement plus, et seul le suivi de ces quatre taux séparément vous le montrera.

### Modélisez les pipelines multi-étapes comme une file de files

Traitez un pipeline de livraison, ou tout processus multi-étapes, un cycle de vie d'incident, un pipeline de recrutement, comme une chaîne de files plutôt qu'un amas indifférencié de « temps ». Le taux d'arrivée global est fixé par la première étape, le taux de complétion global par la dernière étape, et les comptes totaux d'erreur et d'abandon du pipeline sont la somme de ceux de chaque étape. Ce cadrage vous dit immédiatement quelle étape vaut la peine d'un investissement : celle avec la pire combinaison d'utilisation élevée et de taux d'échec ou d'abandon élevé, pas celle qui se trouve être la plus facile à instrumenter.

### Établissez les limites de personnel et de WIP en gardant l'utilisation à l'esprit, pas seulement le débit

Quand vous décidez combien de réviseurs ou d'exécuteurs CI une équipe a besoin, ne dimensionnez pas la capacité pour correspondre exactement au taux d'arrivée moyen. Une file fonctionnant à 100 % d'utilisation en moyenne a un temps d'attente effectivement infini en pratique, parce que les arrivées réelles sont inégales, pas parfaitement lisses. Planifiez délibérément une marge, et traitez « nos réviseurs sont presque toujours occupés » comme un signal d'alerte sur les temps d'attente à venir, pas comme une preuve de dotation en ressources efficace.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Aucun modèle de file formel, dotation au feeling | Rapide à démarrer ; aucun nouveau vocabulaire pour l'équipe | Sous-estime systématiquement à quel point le temps d'attente explose près de la capacité complète |
| Loi de Little comme vérification de bon sens sur les métriques existantes | Peu coûteuse, ne nécessite aucun nouvel outillage, attrape rapidement les mauvaises définitions | Vérifie seulement la cohérence, ne diagnostique pas par elle-même la cause |
| Simulation complète de files d'attente (distributions d'arrivée, serveurs multiples) | Prédiction la plus précise du comportement du temps d'attente sous charge | Nécessite une vraie compétence statistique et un entretien que la plupart des équipes ne soutiendront pas |
| Suivi d'utilisation sur les ressources partagées sans modélisation plus profonde | Simple, actionnable, attrape la plus grande cause unique de temps d'attente incontrôlés | Ne dit rien sur pourquoi l'utilisation est élevée ou que faire à propos de la cause sous-jacente |

La tension centrale est **rigueur contre adoption**. Une simulation complète de files d'attente donne la réponse la plus précise, mais presque aucune équipe d'ingénierie n'en construira et maintiendra une, et un modèle en qui personne ne fait confiance ou ne met à jour est pire qu'aucun modèle. La loi de Little et le suivi d'utilisation de base abandonnent une partie de la précision mais ne nécessitent aucune compétence statistique spécialisée et s'intègrent directement dans les métriques qu'une équipe collecte déjà pour les sujets 2.4 à 2.6. Utilisez par défaut ces vérifications peu coûteuses et adoptables, et réservez la simulation complète au cas rare où une seule ressource partagée, une grande flotte CI, un pool de revue spécialisé, est assez coûteuse pour justifier l'investissement.

## Questions à discuter avec votre équipe

1. **Notre travail en cours, taux d'arrivée et temps de cycle mesurés satisfont-ils réellement la loi de Little, et si non, pourquoi pas ?** C'est le diagnostic le plus rapide disponible pour une mauvaise définition de métrique. Parcourez les chiffres réels ensemble, et si l'équation ne tient pas approximativement, tracez l'inadéquation jusqu'à une incohérence définitionnelle spécifique plutôt que de rejeter la vérification.

2. **Quelles ressources partagées dans notre pipeline de livraison fonctionnent près de l'utilisation complète, et connaissons-nous réellement leur chiffre d'utilisation ?** La plupart des équipes peuvent nommer une ressource qui « semble toujours occupée » mais n'ont jamais mesuré son utilisation directement. Identifiez les deux ou trois ressources partagées les plus contraintes et obtenez un vrai chiffre pour chacune.

3. **Fusionnons-nous le succès, l'échec et l'abandon en un seul chiffre de débit, et que verrions-nous si nous les séparions ?** Un seul compte « éléments terminés » peut augmenter même pendant que la qualité baisse ou que le travail est tranquillement abandonné. Recalculez le débit d'une récente période comme trois chiffres séparés et discutez de ce que la division révèle que le chiffre fusionné cachait.

4. **Où dans notre pipeline se trouve le vrai goulot d'étranglement, l'étape la plus lente qui fixe le rythme pour tout ce qui est en aval ?** Les équipes investissent souvent dans l'accélération de l'étape la plus facile à améliorer plutôt que celle qui contraint réellement le débit total. Identifiez l'étape avec la pire combinaison d'utilisation élevée et de taux d'échec ou d'abandon élevé.

5. **Si nous ajoutions de la capacité à notre ressource partagée la plus contrainte, le temps d'attente s'améliorerait-il réellement, ou la demande s'étendrait-elle simplement pour la remplir ?** Cette question sépare un véritable manque de capacité d'un problème de demande, et la réponse change si la bonne correction est plus de personnel, une limite de WIP, ou un changement dans la façon dont le travail est priorisé avant d'entrer dans la file.

6. **Avons-nous déjà redéfini ce qui compte comme « en cours » ou « arrivé » d'une manière qui a fait mieux paraître un tableau de bord sans changer ce qui est réellement arrivé au travail ?** Cela vaut la peine d'être demandé honnêtement et spécifiquement, avec de vrais exemples de l'année dernière, plutôt que de le traiter comme une préoccupation hypothétique.

## Regard sectoriel

**Startup.** Avec une poignée d'ingénieurs, la plupart des files sont assez courtes pour que l'analyse formelle de files d'attente soit excessive. L'habitude utile est plus petite : remarquez quand une personne, souvent l'ingénieur le plus senior, est devenue une ressource partagée de facto sur laquelle tout le reste attend, et traitez cela comme un problème d'utilisation qui vaut la peine d'être nommé même sans aucun modèle formel derrière lui.

**Petite entreprise.** Une équipe de petite entreprise a rarement besoin de quelque chose de plus sophistiqué que de suivre l'utilisation sur ses une ou deux ressources authentiquement partagées, souvent un seul réviseur ou un seul pipeline de déploiement, et de surveiller le point où « généralement disponible » devient tranquillement « généralement le goulot d'étranglement ». Une feuille de calcul suffit ; un outillage dédié n'est pas nécessaire à cette échelle.

**Grande entreprise.** Les ressources partagées se multiplient rapidement à l'échelle de l'entreprise : une équipe de plateforme centrale, un conseil de revue de sécurité partagé, une flotte CI partagée servant des dizaines d'équipes produit. Ce sont exactement les ressources où le suivi d'utilisation se rentabilise, parce qu'une seule ressource partagée surchargée peut tranquillement dégrader le temps de livraison pour chaque équipe qui en dépend, et aucune métrique propre à une équipe individuelle ne révélera une cause qui vit hors de son propre pipeline.

**Gouvernement.** Les programmes de livraison multi-agences et multi-fournisseurs acheminent souvent le travail à travers des conseils d'approbation partagés, des processus d'accréditation de sécurité partagés, et des environnements de test partagés qu'aucune équipe unique ne contrôle ou ne peut redimensionner seule. L'analyse de files d'attente de ces portes partagées, taux d'arrivée, capacité, utilisation, est fréquemment la preuve la plus claire disponible pour un dossier commercial pour ajouter de la capacité ou changer comment le travail est regroupé avant d'atteindre la porte.

## Exemples

**Grande entreprise.** L'équipe de plateforme interne d'un fournisseur d'infrastructure cloud a remarqué que le temps d'exécution pour les changements (sujet 2.10) avait grimpé insidieusement à travers chaque équipe produit qui dépendait de sa flotte CI partagée, même si aucune équipe individuelle n'avait changé sa façon de travailler. Une analyse d'utilisation a trouvé la flotte fonctionnant au-dessus de 90 % occupée pendant les heures centrales, bien au-delà du point où la théorie des files d'attente prédit que le temps d'attente croît nettement plutôt que graduellement. L'équipe de plateforme a ajouté de la capacité CI et introduit une politique de planification à parts équitables pour qu'aucune rafale d'activité d'une seule équipe ne puisse monopoliser la file. Le temps d'attente CI médian a chuté de plus de moitié en un mois, preuve que le goulot d'étranglement avait été une file partagée et invisible depuis le début.

**Gouvernement.** L'équipe de service numérique d'une agence nationale de permis a suivi le traitement des demandes comme un seul chiffre de débit « dossiers fermés par semaine » pendant deux ans, et le chiffre avait l'air stable. Une analyse plus approfondie, divisant ce chiffre en dossiers approuvés, rejetés et abandonnés par les demandeurs après de longs délais, a trouvé que le taux d'abandon avait presque triplé sur la même période pendant que les approbations restaient plates. La loi de Little, appliquée à la file des agents de traitement, a montré que le travail en cours avait grandi bien au-delà de ce que le temps de traitement moyen déclaré par l'équipe impliquait, signifiant que les dossiers s'accumulaient tranquillement dans un statut non compté comme « en attente ». L'agence a restructuré ses définitions de suivi de dossiers pour compter honnêtement chaque dossier ouvert et a ajouté une capacité d'agents de traitement dimensionnée pour garder l'utilisation sous 85 %, maintenant suivie comme une cible opérationnelle permanente aux côtés du chiffre de débit.

## Argumentaire économique : motivations, ROI et TCO

Le retour de l'application d'une analyse de files d'attente de base est qu'elle transforme « le pipeline semble lent » en une décision spécifique et défendable, ajouter de la marge à cette ressource partagée, diviser cette métrique fusionnée en ses composantes réelles, plutôt qu'une poussée vague à « travailler plus vite » qui manque la cause réelle. L'exemple d'infrastructure cloud ci-dessus, temps d'attente réduit de moitié grâce à une correction de capacité et de planification plutôt qu'un changement de comportement des équipes individuelles, est le schéma que cette analyse produit fiablement : la correction est presque toujours moins coûteuse que de demander à chaque équipe en aval d'aller plus vite autour d'un goulot d'étranglement qu'elle ne peut pas voir.

Le coût total d'adoption est authentiquement faible. La loi de Little et le suivi d'utilisation ne nécessitent aucun nouvel outillage au-delà de ce que les sujets 2.4 à 2.6 vous demandent déjà de collecter : taux d'arrivée, travail en cours et temps de cycle. L'investissement est principalement une discipline analytique, vérifier les chiffres les uns contre les autres et revoir périodiquement l'utilisation sur les ressources partagées avant qu'elles ne deviennent la prochaine régression inexpliquée de temps d'exécution de l'organisation.

## Antipatrons et pièges

- **Dimensionner la capacité d'une ressource partagée pour correspondre exactement à son taux d'arrivée moyen :** garantit une utilisation élevée et des temps d'attente incontrôlés chaque fois que la demande est même brièvement inégale.
- **Rapporter seulement le temps d'attente moyen, jamais un percentile :** cache la longue traîne qui importe le plus aux gens qui y attendent.
- **Fusionner le succès, l'échec et l'abandon en un seul chiffre de débit :** le vecteur de manipulation au cœur de ce sujet. Une équipe sous pression peut faire paraître le débit sain en laissant tranquillement monter le taux d'abandon, tickets abandonnés, demandes tranquillement laissées tomber, travail jamais compté comme un échec. Le garde-fou est de suivre le taux d'arrivée, de succès, d'échec et d'abandon comme quatre chiffres séparés et visibles, la même discipline que demande le sujet 1.2 pour chaque métrique de ce livre, pour qu'un taux d'abandon croissant ne puisse pas se cacher derrière un graphique de débit plat.
- **Traiter « nos gens sont toujours occupés » comme un compliment :** c'est un symptôme d'utilisation élevée, la cause principale de temps d'attente longs et imprévisibles.
- **Redéfinir « en cours » pour tranquillement rétrécir le travail en cours :** déplace le travail vers un état non compté, « bloqué », « en attente », sans changer combien de temps il prend à terminer, et casse la vérification de la loi de Little qui l'aurait autrement attrapé.
- **Supposer qu'un modèle de files d'attente n'a besoin d'aucun entretien une fois construit :** les schémas d'arrivée et la capacité changent constamment, et un modèle obsolète produit des prédictions confiantes et fausses.

## Modèle de maturité

- **Niveau 1, Initiation :** Aucune file n'est mesurée explicitement ; le temps d'attente est discuté de manière anecdotique comme « les choses semblent lentes ».
- **Niveau 2, Développement :** Le taux d'arrivée, le travail en cours et le temps de cycle sont suivis pour au moins un pipeline, mais jamais vérifiés contre la loi de Little ou contre l'utilisation sur les ressources partagées.
- **Niveau 3, Standardisation :** La loi de Little est une vérification de cohérence routinière à travers les pipelines de livraison, et l'utilisation est suivie explicitement pour les ressources partagées les plus significatives.
- **Niveau 4, Gestion :** Le taux de succès, d'échec et d'abandon sont suivis séparément pour chaque file significative, et les décisions de capacité utilisent des cibles d'utilisation, pas seulement la demande moyenne.
- **Niveau 5, Orchestration :** L'organisation modélise ses pipelines majeurs comme des files de files, identifie systématiquement les vrais goulots d'étranglement, et peut pointer vers des changements spécifiques de capacité ou de processus faits à cause de l'analyse de files d'attente, avec une amélioration mesurée du temps d'attente à montrer pour cela.

## Idées de discussion

1. Choisissez l'un de nos pipelines de livraison et vérifiez si ses chiffres satisfont la loi de Little aujourd'hui.
2. Nommez la seule ressource partagée dans notre organisation que la plupart des gens conviendraient être « toujours occupée », et trouvez son chiffre d'utilisation réel.
3. À quoi ressemblerait notre graphique de débit si nous le divisions en taux de succès, d'échec et d'abandon pour le dernier trimestre ?
4. Si nous devions ajouter de la capacité à exactement une ressource partagée cette année, laquelle, et quelle preuve le justifierait ?

## Points clés à retenir

- La **loi de Little**, le travail en cours est égal au taux d'arrivée multiplié par le temps de cycle, est une preuve, pas une heuristique, et c'est la vérification la moins coûteuse disponible pour savoir si vos métriques de livraison sont internement cohérentes.
- **Le temps d'attente croît nettement, pas graduellement, à mesure que l'utilisation approche de la capacité complète.** Traitez « toujours occupé » comme un signal d'alerte, pas un compliment.
- Suivez le **taux d'arrivée, le taux de succès, le taux d'échec et le taux d'abandon** séparément ; les fusionner en un seul chiffre de débit est le vecteur de manipulation central de ce sujet.
- Modélisez un pipeline multi-étapes comme une **file de files**, et investissez dans l'étape avec la pire combinaison d'utilisation élevée et de taux d'échec ou d'abandon élevé, pas l'étape la plus facile à améliorer.
- Favorisez les vérifications peu coûteuses et adoptables, **la loi de Little et le suivi d'utilisation**, plutôt qu'une simulation complète de files d'attente que peu d'équipes soutiendront.

## Sources et lectures complémentaires

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve Performance Problems on the Computer Systems You Work With*. CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
