# 4.6 Métriques de documentation et de connaissance

## Vue d'ensemble et motivation

Ce chapitre clôt la Partie 4 en mesurant si la connaissance nécessaire pour maintenir en sécurité une base de code est réellement documentée et trouvable, pas seulement si la documentation existe techniquement quelque part. Le chapitre 3.5 a couvert la communication et la collaboration comme préoccupation d'expérience développeur ; ce chapitre couvre la même question sous-jacente, la disponibilité de connaissance, du côté du code : un nouvel ingénieur, ou un existant travaillant sur du code peu familier, a-t-il ce dont il a besoin pour faire un changement en sécurité, ou cette connaissance vit-elle seulement dans la tête d'un nombre décroissant de personnes anciennes.

Le défi de mesure ici est authentiquement difficile, plus difficile que la plupart des autres métriques de ce livre, parce que la qualité et l'utilité de la documentation sont intrinsèquement plus subjectives qu'un pourcentage de couverture ou un score de complexité. L'approche de ce chapitre est de mesurer des représentants pour l'utilité plutôt que l'existence : à quelle fréquence la documentation est réellement consultée, à quelle fréquence la même question est posée de manière répétée malgré l'existence d'une réponse documentée, et combien de temps il faut à quelqu'un peu familier avec un système pour devenir productif dedans. Aucun de ces représentants n'est parfait seul, mais ensemble ils donnent une image bien plus honnête que de compter le nombre de pages de wiki ou de fichiers README qu'une base de code contient.

Pour les grandes équipes, les préoccupations de ce chapitre se composent avec l'ancienneté organisationnelle et le turnover de manières faciles à sous-estimer jusqu'à ce qu'une crise force la question : un système maintenu pendant des années par les deux mêmes ingénieurs peut fonctionner parfaitement bien avec presque aucune documentation écrite, jusqu'au moment où ces deux ingénieurs partent dans la même année, moment auquel l'organisation découvre que la connaissance n'a jamais été réellement capturée nulle part de manière durable. Les organisations de grande entreprise et de gouvernement, avec des durées de vie de système typiquement plus longues et une continuité de personnel moins certaine qu'une startup, portent ce risque plus aiguement que la plupart.

## Principes clés

- **L'existence de documentation n'est pas la même chose que son utilité.** Mesurez si elle aide réellement, pas seulement si elle est présente.
- **Des questions répétées malgré des réponses documentées révèlent un problème de trouvabilité, pas un problème d'effort de documentation.** Plus de contenu n'est pas toujours la solution.
- **Le temps d'intégration jusqu'à la contribution productive est un représentant solide et pratique** de la santé globale de la connaissance, se connectant directement aux métriques de collaboration du chapitre 3.5.
- **La connaissance qui vit seulement dans la tête des personnes est un risque de durabilité,** pas un état stable et soutenable, aussi bien qu'elle fonctionne actuellement.
- **La documentation se dégrade.** Une page qui était exacte il y a un an peut maintenant être activement trompeuse, et l'obsolescence elle-même doit être suivie.

## Recommandations

### Suivez l'accès et l'obsolescence de la documentation, pas seulement son existence

Là où votre plateforme de documentation le supporte, suivez à quelle fréquence les pages sont réellement consultées, et séparément, depuis combien de temps une page a été mise à jour pour la dernière fois relativement à la fréquence à laquelle le système sous-jacent qu'elle décrit a changé (croiser les données de churn du chapitre 4.3 est directement utile ici). Une page décrivant un système qui a substantiellement changé depuis que la page a été éditée pour la dernière fois est une forte candidate pour être activement trompeuse plutôt que simplement inutile, et ce signal d'obsolescence mérite au moins autant d'attention que de suivre si la documentation existe du tout.

### Surveillez les questions répétées comme signal de trouvabilité

Si la même question est posée de manière répétée dans un canal de discussion d'équipe ou pendant l'intégration, malgré l'existence technique d'une réponse documentée quelque part, ce schéma révèle un problème de trouvabilité, la réponse n'est pas là où les gens cherchent naturellement, plutôt qu'un problème d'effort de documentation que plus d'écriture corrigerait. Suivez explicitement les questions récurrentes, et utilisez-les pour prioriser la réorganisation ou une meilleure mise en avant du contenu existant plutôt que d'en écrire davantage.

### Mesurez le temps d'intégration jusqu'à la première contribution significative et indépendante

Cette métrique, introduite au chapitre 3.5 comme signal de collaboration, est également un signal de santé de documentation et de connaissance du côté du code. Un temps d'intégration constamment court et prévisible suggère une connaissance authentiquement accessible et exacte ; un temps long et très variable, particulièrement un qui dépend fortement de quelle personne spécifique se trouve intégrer un nouveau membre d'équipe, suggère une connaissance qui vit dangereusement concentrée dans la mémoire individuelle plutôt que sous forme écrite et durable.

### Identifiez et priorisez explicitement les zones de connaissance critique non documentées

Croisez vos données de concentration de connaissance (l'analyse de [facteur bus](https://en.wikipedia.org/wiki/Bus_factor) du chapitre 3.5) avec la couverture de documentation : un système avec un facteur bus de un et aucune documentation significative est un risque sévère et composé qui mérite une attention prioritaire par rapport à un système bien documenté avec le même faible facteur bus, puisque la documentation fournit au moins une atténuation partielle pendant qu'un successeur dédié est formé.

### Traitez la dette de documentation comme une catégorie au sein de votre arriéré de dette technique

Plutôt que de suivre les lacunes de documentation séparément et informellement, intégrez les lacunes de documentation significatives dans le même arriéré visible et quantifié décrit au chapitre 4.5, particulièrement pour les systèmes critiques à faible facteur bus, afin que le travail de documentation concoure équitablement pour une capacité priorisée plutôt que d'être perpétuellement différé comme une tâche de statut inférieur comparée à la remédiation de dette centrée sur le code.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Aucune mesure de documentation | Faible surcharge | Le risque de connaissance reste invisible jusqu'à ce qu'une crise force la découverte |
| Compter l'existence de documentation (compte de pages, présence de README) | Simple, facile à rapporter | Ne dit rien sur l'utilité, l'exactitude, ou la trouvabilité |
| Suivre l'accès et l'obsolescence | Révèle l'utilité réelle et la dégradation | Nécessite une analytique de plateforme de documentation et une discipline de revue continue |
| Temps d'intégration comme représentant | Pratique, concret, se relie directement à l'impact d'affaires réel | Indirect ; d'autres facteurs au-delà de la documentation affectent aussi la vitesse d'intégration |

La tension centrale est **la mesurabilité contre le sens**. L'existence de documentation est trivialement facile à compter et ne vous dit presque rien d'utile ; l'utilité authentique, si quelqu'un peut réellement trouver et se fier à la connaissance documentée quand il en a besoin, est ce qui compte réellement mais est plus difficile à mesurer directement. Résolvez la tension en utilisant les représentants que ce chapitre recommande, schémas d'accès, obsolescence relative au churn, questions répétées, et temps d'intégration, en combinaison, acceptant qu'aucun seul n'est parfait mais que leur convergence est bien plus significative qu'un simple compte d'existence.

## Questions à discuter avec votre équipe

1. **Pour notre système le plus critique et au facteur bus le plus bas, une documentation significative et exacte existe-t-elle réellement, ou un expert partant emporterait-il la plupart de la connaissance réelle avec lui ?** C'est la version la plus aiguë et concrète de la préoccupation centrale de ce chapitre ; répondez-y honnêtement pour votre système unique le plus risqué en premier.

2. **Quelle question est posée de manière répétée dans notre discussion d'équipe malgré l'existence d'une réponse documentée quelque part ?** Si vous pouvez en nommer une immédiatement, c'est un problème de trouvabilité qui vaut la peine d'être corrigé directement, probablement en réorganisant ou en mettant mieux en avant le contenu existant plutôt qu'en écrivant davantage.

3. **Combien de temps a pris notre membre d'équipe le plus récent pour faire sa première contribution significative et indépendante, et comment cela se compare-t-il au membre d'équipe avant lui ?** Une grande variance inexpliquée entre individus pointe souvent vers une connaissance qui dépend fortement de qui se trouve intégrer quelqu'un, plutôt qu'une documentation durable et accessible.

4. **Quand avons-nous vérifié pour la dernière fois si un élément de documentation était encore exact, relativement à combien le système sous-jacent a changé depuis sa rédaction ?** Si la réponse honnête est « nous ne vérifions pas cela systématiquement », ce risque d'obsolescence est probablement plus grand que ce que quiconque suppose actuellement.

5. **Notre arriéré de dette technique (chapitre 4.5) inclut-il les lacunes de documentation, ou le travail de documentation est-il perpétuellement différé comme une tâche de statut inférieur comparée aux corrections de code ?** Vérifiez votre arriéré réel et voyez si la dette de documentation est visible et concourt pour une capacité priorisée ou est effectivement invisible.

6. **Que nous coûterait-il si la seule ou les deux personnes qui comprennent notre système le plus critique et le moins documenté partaient dans la même année ?** Cette question concrète et inconfortable vaut la peine d'être répondue honnêtement plutôt que de traiter le risque comme abstrait ou improbable.

## Regard sectoriel

**Startup.** Les métriques de documentation formelles sont habituellement inutiles avec une petite équipe où la connaissance se répand par conversation constante et directe. Le risque à surveiller est la même concentration de facteur bus contre laquelle le chapitre 3.5 met en garde, maintenant appliquée spécifiquement à la documentation : à mesure que l'équipe grandit au-delà de la taille où tout le monde parle quotidiennement, la connaissance non documentée qui fonctionnait bien informellement devient un véritable passif.

**Petite entreprise.** Priorisez la documentation de votre système unique le plus critique et le moins redondant en premier, même informellement, plutôt que de tenter une documentation complète partout. Un document court et exact couvrant votre point de défaillance unique le plus risqué livre plus de valeur réelle qu'une couverture large mais superficielle partout.

**Grande entreprise.** L'obsolescence et la trouvabilité de la documentation passent toutes deux mal à l'échelle ici, puisqu'une grande organisation accumule de la documentation à travers de nombreuses équipes et plateformes plus vite que quiconque ne peut la garder à jour ou organisée de manière cohérente. Investissez dans l'analytique de plateforme de documentation pour suivre l'accès et l'obsolescence à l'échelle, et traitez la dette de documentation comme une catégorie de premier ordre dans votre arriéré de dette à l'échelle de l'organisation.

**Gouvernement.** La longue ancienneté des employés courante dans les organisations du secteur public peut masquer un risque sévère de connaissance non documentée derrière une stabilité apparente, puisqu'un système maintenu par la même personne pendant quinze ans peut fonctionner parfaitement bien jusqu'au moment où cette personne part à la retraite. Traitez explicitement la santé de la documentation comme une préoccupation de continuité des opérations, connectée directement à la planification de la main-d'œuvre et de la succession, pas simplement une élégance d'ingénierie.

## Exemples

**Grande entreprise.** Une entreprise de services financiers a découvert, pendant une réorganisation non liée, que son moteur central de calcul de risque n'avait aucune documentation significative au-delà de quelques commentaires de code obsolètes, et les deux ingénieurs qui le comprenaient le mieux étaient tous deux réaffectés à une nouvelle initiative simultanément. Un effort de documentation d'urgence, mené sous pression de temps significative, a extrait et enregistré la connaissance critique avant que la réaffectation ne prenne effet, mais le processus a pris plusieurs semaines de temps d'ingénieur senior dédié qui aurait pu être réparti plus graduellement et à moindre coût si la santé de la documentation avait été suivie et priorisée proactivement plutôt que découverte comme une urgence.

**Gouvernement.** Le système de gestion de dossiers vieux de plusieurs décennies d'un gouvernement d'État avait accumulé une documentation substantielle au fil des ans, mais un audit de trouvabilité a trouvé que les nouveaux membres d'équipe ne pouvaient systématiquement pas trouver la documentation existante pertinente et posaient de manière répétée la même poignée de questions dans les canaux d'équipe, des questions qui étaient, en fait, déjà répondues quelque part dans la plateforme de documentation étendue et mal organisée de l'agence. Plutôt que d'écrire plus de contenu, l'agence a investi dans la réorganisation et l'amélioration de la structure de recherche et de navigation de sa documentation existante, et une enquête de suivi a montré une réduction mesurable des questions répétées et une expérience d'intégration rapportée significativement plus rapide pour le nouveau personnel, sans ajouter une seule nouvelle page de contenu.

## Argumentaire économique : motivations, ROI et TCO

Le retour de mesurer et gérer délibérément la santé de la documentation est un coût de crise évité : l'exemple de services financiers ci-dessus montre la différence entre une capture de connaissance proactive et graduelle et un effort d'urgence coûteux et compressé forcé par un mouvement de personnel non planifié. La connaissance critique non documentée est un passif permanent qui ne coûte rien visiblement jusqu'au moment où il devient très coûteux d'un coup.

Le coût total de possession est principalement la discipline de suivre les représentants que ce chapitre recommande, schémas d'accès, obsolescence, questions répétées, temps d'intégration, et la volonté d'intégrer les lacunes de documentation dans un arriéré priorisé plutôt que de les traiter comme perpétuellement de statut inférieur comparées au travail centré sur le code. Cette discipline coûte bien moins que l'extraction de connaissance en mode crise que montre l'exemple de services financiers comme alternative.

## Antipatrons et pièges

- **Compter l'existence de documentation plutôt que son utilité :** ne dit presque rien sur si la connaissance est réellement accessible quand nécessaire.
- **Écrire plus de contenu en réponse à des questions répétées, sans d'abord vérifier la trouvabilité :** adresse souvent entièrement le mauvais problème.
- **Ne jamais vérifier l'obsolescence de la documentation relativement à combien le système a changé :** risque un contenu activement trompeur et dépassé.
- **Traiter la dette de documentation comme perpétuellement de statut inférieur à la dette de code :** la laisse chroniquement dépriorisée et invisible sur l'arriéré.
- **Confondre une stabilité apparente, un système qui n'a pas changé depuis des années, avec un faible risque :** peut masquer un problème sévère de facteur bus non documenté derrière un système qui n'a simplement pas encore eu besoin de son seul expert.
- **Découvrir une connaissance critique non documentée seulement pendant une transition d'urgence de personnel :** le mode de défaillance coûteux et évitable que ce chapitre est construit pour prévenir.

## Modèle de maturité

- **Niveau 1, Initiation :** La santé de la documentation n'est pas mesurée ; la concentration de connaissance et le risque d'obsolescence sont découverts seulement par crise.
- **Niveau 2, Développement :** Une certaine documentation existe, mais il n'y a pas de suivi systématique de l'accès, de l'obsolescence, ou de la trouvabilité.
- **Niveau 3, Standardisation :** L'accès et l'obsolescence sont suivis pour les systèmes critiques, et le temps d'intégration est mesuré comme représentant de la santé de connaissance à l'échelle de l'organisation.
- **Niveau 4, Gestion :** Les lacunes de documentation sont intégrées dans l'arriéré de dette technique priorisé, croisées avec le risque de facteur bus pour identifier les risques combinés les plus sévères.
- **Niveau 5, Orchestration :** L'organisation identifie et adresse proactivement le risque de connaissance critique non documentée avant qu'une transition de personnel ne force la question, et peut pointer vers des améliorations spécifiques et mesurables d'intégration ou de réponse aux incidents retracées à l'investissement de documentation.

## Idées pour la discussion

1. Quelle est notre combinaison unique la plus sévère de faible facteur bus et de documentation médiocre en ce moment ?
2. Quelle question est posée de manière répétée malgré l'existence d'une réponse documentée ?
3. Comment saurions-nous si un élément de documentation critique était devenu obsolète et trompeur ?
4. Notre arriéré de dette technique inclut-il les lacunes de documentation, ou sont-elles invisibles ?
5. Que nous coûterait-il si le seul expert de notre système le moins documenté partait cette année ?

## Points clés à retenir

- Mesurez **l'utilité, pas l'existence** : si la documentation aide réellement, en utilisant des représentants comme les schémas d'accès, l'obsolescence, et les questions répétées.
- **Des questions répétées malgré des réponses documentées** révèlent un problème de trouvabilité, pas nécessairement un problème d'effort de contenu.
- **Le temps d'intégration jusqu'à la contribution productive** est un représentant solide et pratique de la santé globale de la connaissance.
- **La connaissance critique non documentée est un risque composé**, particulièrement combinée à un faible facteur bus (chapitre 3.5) ; elle ne coûte rien visiblement jusqu'à ce qu'elle coûte beaucoup d'un coup.
- Intégrez les **lacunes de documentation dans votre arriéré de dette technique** (chapitre 4.5) afin qu'elles concourent équitablement pour une capacité priorisée.

## Sources et lectures complémentaires

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, par Jared Bhatti, Zachariah Goldberg, Ted Kubaska, and Sarah Moir (pratiques de documentation pratiques pour les équipes d'ingénierie).
- *A Philosophy of Software Design*, par John Ousterhout (la relation entre documentation, complexité, et maintenabilité).
- *Team Topologies*, par Matthew Skelton et Manuel Pais (implications de conception organisationnelle de la connaissance concentrée contre distribuée).
- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble, and Gene Kim (la documentation comme l'une des capacités corrélées à la performance de livraison).
