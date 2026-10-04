# 1.1 Pourquoi mesurer l'ingénierie logicielle

## Vue d'ensemble et motivation

L'ingénierie logicielle résiste à la mesure d'une manière que l'industrie manufacturière ne connaît pas. Une chaîne d'usine produit des unités identiques, donc les compter vous dit quelque chose de réel. Le travail logiciel produit des artefacts uniques sous des exigences qui changent constamment, donc un comptage naïf, de commits, de lignes, de tickets fermés, ne vous dit presque rien sur la valeur livrée. Cet écart entre la difficulté de mesurer le travail logiciel et le besoin bien réel de savoir si les choses se passent bien est là où vit tout ce livre. Ce chapitre consiste à combler cet écart honnêtement : non pas en prétendant que le travail logiciel est aussi comptable que des widgets, mais en étant précis sur ce que la mesure peut et ne peut pas faire pour une organisation d'ingénierie.

La mesure existe pour répondre à des questions auxquelles une organisation ne peut autrement répondre avec confiance : notre livraison s'accélère-t-elle ou ralentit-elle, la qualité s'améliore-t-elle ou se dégrade-t-elle, les ingénieurs s'épuisent-ils, cet investissement porte-t-il ses fruits. Sans métriques, ces questions reçoivent une réponse de quiconque parle avec le plus d'assurance dans la pièce, généralement la personne la plus senior ou la plus persuasive présente, et cette réponse est fréquemment fausse. Les équipes d'[ingénierie logicielle](https://en.wikipedia.org/wiki/Software_engineering) qui sautent la mesure n'évitent pas de porter des jugements sur leur propre performance. Elles portent simplement ces jugements sur des impressions, des anecdotes et un biais de récence plutôt que sur des preuves.

Pour les grandes équipes, cela cesse d'être un luxe et devient structurel. Une équipe de six personnes peut partager un modèle mental de comment vont les choses par la conversation quotidienne. Un département de six cents personnes, réparties sur des fuseaux horaires et des unités commerciales, ne le peut pas. À cette échelle, un ensemble de chiffres partagé et fiable est le seul substitut pratique à la conscience informelle qu'une petite équipe obtient gratuitement. La direction d'entreprise a besoin de métriques pour allouer l'investissement entre des dizaines d'équipes qui se disputent le même budget. Les organisations d'ingénierie gouvernementales ont besoin de métriques pour démontrer aux législatures et au public que les fonds alloués ont produit une capacité réelle, pas seulement de l'activité. Dans les deux contextes, « nous avons travaillé dur » n'est pas une preuve ; un chiffre défendable l'est.

## Principes clés

- **Mesurez pour apprendre, pas pour juger.** L'objectif premier d'une métrique d'ingénierie est d'éclairer une décision, pas de noter une personne ou une équipe.
- **Un chiffre sans décision attachée est décoratif.** Si aucune lecture d'une métrique ne changerait ce que vous faites ensuite, elle n'a pas sa place sur un tableau de bord.
- **La mesure est un moyen, pas le but.** Le but est un meilleur logiciel, livré plus fiablement, par une équipe durable. Les métriques n'existent que pour servir ce but.
- **Chaque métrique a un coût.** L'instrumentation, le temps de revue et le risque de distorsion comportementale couvert au chapitre 1.2 coûtent tous quelque chose. Une métrique doit rentabiliser ce coût.
- **Le silence est aussi une décision.** Choisir de ne pas mesurer quelque chose est un choix avec des conséquences, pas un défaut neutre.

## Recommandations

### Partez de la décision, pas du tableau de bord

Avant d'instrumenter quoi que ce soit, nommez la décision que la métrique éclairera. « Nous voulons savoir si notre nouveau pipeline de déploiement a réduit les taux d'incidents » est une question en forme de décision ; « suivons tout ce que l'outil peut exporter » ne l'est pas. Travailler à rebours depuis une décision garde l'ensemble de métriques petit et garde chaque tuile défendable quand quelqu'un demande pourquoi elle existe. Si vous ne pouvez pas nommer la décision qu'une métrique éclairerait, ne la construisez pas encore. Le chapitre 1.3 approfondit la version résultats-plutôt-que-production de cette discipline.

### Séparez l'usage diagnostique de l'usage évaluatif

Une métrique utilisée pour diagnostiquer un problème système (pourquoi notre temps d'exécution augmente-t-il insidieusement) se comporte complètement différemment de la même métrique utilisée pour évaluer une personne ou une équipe (de qui le temps d'exécution est-il le pire). La première invite à l'investigation et à l'amélioration. La seconde invite à la dissimulation et à la manipulation, parce que maintenant le chiffre a une conséquence réputationnelle ou financière attachée. Décidez explicitement, par écrit, à quel usage une métrique est destinée, et ne laissez jamais une métrique diagnostique glisser vers un usage évaluatif sans reconsidérer délibérément le risque. Cette distinction revient constamment tout au long de ce livre et est formalisée dans la section des non-objectifs de la charte des métriques décrite au chapitre 1.4.

### Traitez la mesure comme une hypothèse, pas comme un fait

Une métrique est un représentant de quelque chose qui vous importe réellement, pas la chose elle-même. La fréquence de déploiement est un représentant de la capacité de livraison, pas la capacité de livraison elle-même. Traitez chaque métrique comme une hypothèse en test permanent : ce chiffre suit-il encore la chose à laquelle nous tenons, ou le monde a-t-il bougé en laissant le représentant derrière lui ? Revisitez cette question à une cadence fixe plutôt que de supposer qu'une métrique bien choisie il y a deux ans l'est encore aujourd'hui, particulièrement à mesure que l'outillage, la structure d'équipe, ou (voir la partie 7) la nature même du travail change.

### Rendez visible l'absence de mesure

Dans les grandes organisations, le pire écart n'est pas une mauvaise métrique, c'est une zone que personne ne mesure du tout parce qu'elle est difficile à instrumenter : l'expérience du développeur, les frictions de dépendance inter-équipes, l'érosion du savoir institutionnel. Nommez explicitement ces écarts dans votre charte des métriques plutôt que de les laisser rester invisibles par défaut. Une organisation qui sait ce qu'elle ne mesure pas, et pourquoi, est dans une position bien plus forte que celle qui a tranquillement oublié que ces zones existent.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Instrumentation lourde, nombreuses métriques | Visibilité large, moins d'angles morts | Fatigue du tableau de bord, surface de manipulation plus grande, coût de maintenance plus élevé |
| Métriques minimales, pilotées par la décision | Focus, faibles frais généraux, chaque métrique défendable | Risque de manquer un problème émergent hors de l'ensemble choisi |
| Métriques pour diagnostic uniquement | Encourage le signalement honnête et l'investigation | La direction peut encore les utiliser de manière évaluative informellement |
| Métriques liées à l'évaluation individuelle | Semble responsabilisant, facile à expliquer aux dirigeants | Fort incitatif à la manipulation ; endommage la confiance ; mesure généralement la mauvaise chose |

La tension centrale est **couverture contre focus**, et elle est aiguisée par **diagnostic contre jugement**. Trop peu de métriques et vous développez des angles morts qui n'émergent que comme une crise ; trop et personne ne peut agir sur aucune d'elles, tandis que chacune à laquelle vous attachez un poids évaluatif invite à la distorsion. Résolvez cela en commençant minimal et piloté par la décision, en n'ajoutant une métrique que lorsqu'une décision spécifique et nommée en a besoin, et en défendant explicitement la frontière diagnostique-uniquement dans le travail de gouvernance du chapitre 1.4 plutôt que de la laisser s'éroder par défaut.

## Questions à discuter avec votre équipe

1. **Pour chaque métrique sur notre tableau de bord actuel, quelle décision une bonne lecture et une mauvaise lecture déclencheraient-elles chacune ?** Si les deux lectures mènent à la même action, ou à aucune action du tout, la métrique est décorative. Parcourez votre tableau de bord tuile par tuile et forcez une réponse honnête pour chacune. Cet exercice réduit routinement de moitié un tableau de bord surchargé en une seule séance, parce que la plupart de la prolifération s'accumule à partir de métriques que personne ne supprime jamais plutôt que de métriques que quelqu'un a délibérément ajoutées pour une raison qui tient toujours.

2. **Lesquelles de nos métriques sont utilisées de manière diagnostique, et lesquelles sont tranquillement devenues évaluatives ?** Une métrique construite pour comprendre une contrainte système peut dériver vers un usage de classement des équipes ou des individus sans que personne ne le décide exprès, souvent par un commentaire désinvolte lors d'une réunion de revue qui devient une habitude. Une fois cette dérive survenue, le chiffre cesse d'être fiable, parce que les gens ont maintenant une raison de le faire bien paraître plutôt que de le rendre exact. Nommez par écrit l'usage prévu de chaque métrique et vérifiez la pratique actuelle par rapport à cela.

3. **Que ne mesurons-nous pas parce que c'est difficile à instrumenter, et que nous coûte cet écart ?** Les angles morts les plus dangereux sont ceux qui n'arrivent jamais sur un tableau de bord précisément parce qu'ils résistent à une mesure facile : la friction de dépendance inter-équipes, l'érosion du savoir institutionnel, ou l'accumulation tranquille de contournements fragiles. Apportez une liste des choses dont tout le monde s'inquiète en privé mais que personne ne suit, et soyez honnêtes sur pourquoi.

4. **Si nous supprimions cette métrique demain, qui le remarquerait, et que perdrait-il ?** Une métrique que personne ne manquerait est une métrique qui n'éclaire aucune décision. Cette question fait émerger les tuiles de vanité qui survivent purement par inertie. Pour une grande organisation avec des dizaines de tableaux de bord d'équipe, cette discipline d'élagage importe autant que la discipline d'ajouter de nouvelles métriques en premier lieu.

5. **Combien chaque métrique sur notre tableau de bord coûte-t-elle réellement à produire et à maintenir, y compris le temps d'ingénierie derrière l'instrumentation ?** Les métriques ne sont pas gratuites. Les pipelines, les tableaux de bord et le temps de revue passé à discuter d'un chiffre portent tous un coût récurrent facile à sous-estimer parce qu'il est distribué sur de nombreuses petites tâches plutôt qu'une ligne visible. Apportez votre effort réel d'instrumentation et de maintenance et pesez-le contre la valeur décisionnelle de la question 1.

6. **Où la mesure est-elle devenue un substitut au jugement, et où le jugement est-il devenu un substitut à la mesure ?** Les deux modes d'échec sont réels. Une équipe qui externalise chaque décision à un tableau de bord perd le jugement contextuel qui attrape ce que le chiffre manque ; une équipe qui ignore les données disponibles en faveur de la voix la plus forte dans la pièce répète le problème même par lequel ce chapitre commence. Le but est des métriques qui éclairent le jugement, pas des métriques qui le remplacent.

## Regard sectoriel

**Startup.** Avec une poignée d'ingénieurs, la plupart de ce contre quoi ce chapitre met en garde, la dérive vers un usage évaluatif, les angles morts, la prolifération de tableaux de bord, est facile à éviter simplement parce que tout le monde se parle quotidiennement. Le risque est l'opposé : sauter la mesure entièrement parce qu'elle semble être des frais généraux que l'équipe ne peut pas se permettre. Choisissez deux ou trois questions en forme de décision (livrons-nous assez vite, la qualité tient-elle) et n'instrumentez que celles-là.

**Petite entreprise.** Sans plateforme ou équipe de données dédiée, appuyez-vous sur ce que vos outils existants rapportent déjà plutôt que de construire une instrumentation sur mesure. Le tableau de bord d'un processeur de paiement, les métriques de réponse d'un outil de support, et l'historique de build de votre fournisseur d'intégration continue couvrent généralement les décisions qui importent le plus. Résistez à la tentation d'acheter une plateforme d'analyse d'ingénierie dédiée avant d'avoir prouvé que vous agirez sur ce qu'elle vous dit.

**Grande entreprise.** Le risque central est des métriques qui dérivent silencieusement du diagnostique vers l'évaluatif à mesure qu'elles remontent à travers les couches de management, et des tableaux de bord qui grossissent par accrétion parce que personne ne possède le travail de les élaguer. La gouvernance (chapitre 1.4) n'est pas optionnelle à cette échelle. Standardisez les définitions entre unités commerciales, et construisez une revue de retrait régulière dans le programme de métriques lui-même.

**Gouvernement.** Les métriques ici portent souvent un poids statutaire ou budgétaire, ce qui augmente à la fois la valeur de bien les faire et le coût de les faire mal. Un chiffre rapporté à une législature ou à un organe de surveillance a besoin d'une méthodologie documentée, d'une définition stable entre les périodes de rapport, et d'une honnêteté sur ses limites. Traitez « nous ne mesurons pas actuellement cela » comme une réponse que vous pourriez devoir défendre, pas une faiblesse privée à cacher.

## Exemples

**Grande entreprise.** L'organisation d'ingénierie d'une compagnie d'assurance mondiale avait grandi jusqu'à plus de soixante équipes scrum, chacune avec son propre tableau de bord informel, aucun comparable à un autre. La direction ne pouvait pas répondre à une question basique : lequel de nos dix investissements de plateforme stratégiques livre réellement un logiciel plus rapide. La solution n'était pas plus de métriques, c'était moins, de meilleures : l'organisation a défini un noyau partagé, piloté par la décision, de métriques DORA (chapitre 2.10) calculées identiquement partout à partir des mêmes données de pipeline, a retiré quarante tableaux de bord spécifiques à des équipes, et a finalement pu comparer les domaines d'investissement sur une base commune en deux trimestres.

**Gouvernement.** L'équipe de service numérique d'une agence fiscale nationale avait reçu d'un comité de surveillance la demande de démontrer le retour sur un programme de modernisation pluriannuel. Les métriques existantes de l'équipe étaient entièrement internes et basées sur l'activité : points d'histoire complétés, sprints fermés. Rien de tout cela ne répondait à la question réelle du comité. L'équipe a construit un petit ensemble de métriques de résultat à la place, le temps médian pour résoudre un problème de dossier d'un citoyen, le taux d'adoption du canal numérique, et le taux de défauts échappés dans le nouveau système, et a rapporté celles-ci trimestriellement avec une méthodologie documentée. Les questions du comité sont passées de « prouvez que vous travaillez » à « comment répliquons-nous cela dans la prochaine agence », ce qui est le résultat qu'un ensemble de métriques bien choisi est censé produire.

## Argumentaire économique : motivations, ROI et TCO

Le retour de la mesure délibérée est la qualité de la décision. Une organisation qui peut dire, avec preuve, « notre temps d'exécution s'est amélioré de 30 % après l'investissement de plateforme » peut défendre cet investissement, répéter ce qui a fonctionné, et arrêter ce qui n'a pas fonctionné. Une organisation s'appuyant sur l'anecdote ne peut rien faire de tout cela avec confiance, et finit par relitiger les mêmes arguments à chaque cycle budgétaire parce que personne ne peut pointer vers un chiffre auquel les deux parties font confiance.

Le coût de la mesure n'est pas le tableau de bord. C'est la discipline continue : instrumentation, maintenance des définitions, et l'élagage périodique que recommande ce chapitre. Ce coût total de possession est réel mais modeste comparé au coût de l'alternative, qui est une grande organisation prenant des décisions technologiques de plusieurs millions de dollars sur la base de qui a le plus argumenté de manière persuasive dans la pièce. Le retour d'un programme de métriques n'est pas les métriques elles-mêmes ; ce sont les décisions prises mieux grâce à elles.

## Antipatrons et pièges

- **Mesurer tout ce que l'outil exporte :** transforme un tableau de bord en bruit et invite à la manipulation sur une surface énorme sans valeur décisionnelle correspondante.
- **Métriques sans décision nommée :** décoration qui coûte un effort de maintenance et ne dit rien d'actionnable à personne.
- **Dérive silencieuse du diagnostique vers l'évaluatif :** le moyen le plus rapide de détruire la confiance dans un chiffre.
- **Traiter une métrique comme un fait plutôt qu'une hypothèse :** un représentant qui était juste il y a deux ans peut être faux aujourd'hui, et personne ne vérifie.
- **Confondre l'absence d'un mauvais chiffre avec la présence d'un bon :** une métrique que vous ne regardez jamais ne peut rien vous dire de mal.
- **Construire une capacité de mesure avant de décider quoi décider :** l'instrumentation en quête d'une question gaspille du temps d'ingénierie réel.

## Modèle de maturité

- **Niveau 1, Initiation :** Les métriques, si elles existent, sont improvisées, personnelles à quiconque les a construites, et personne ne peut dire quelle décision l'une d'elles éclaire.
- **Niveau 2, Développement :** Un ensemble basique de métriques existe pour certaines équipes, principalement copié d'un cadre ou des valeurs par défaut d'un outil, sans lien clair vers une décision.
- **Niveau 3, Standardisation :** Chaque métrique suivie a un objectif documenté et une classification diagnostique-contre-évaluative explicite, appliquée de manière cohérente à travers l'organisation.
- **Niveau 4, Gestion :** Les métriques sont revues à cadence fixe contre les décisions qu'elles éclairent ; les métriques qui cessent de se rentabiliser sont retirées, et l'ensemble entier est mesuré pour son coût autant que sa valeur.
- **Niveau 5, Orchestration :** La mesure est une capacité vivante : l'organisation identifie routinement ses propres angles morts, teste si ses représentants suivent encore la réalité, et traite le programme de métriques lui-même comme quelque chose à améliorer, pas seulement à maintenir.

## Idées de discussion

1. Quelle métrique sur notre tableau de bord aurions-nous le plus de mal à justifier de garder si on nous le demandait aujourd'hui ?
2. Quelle décision avons-nous prise le dernier trimestre en utilisant une métrique, plutôt qu'une opinion ?
3. Où dans notre organisation une métrique diagnostique est-elle tranquillement devenue évaluative ?
4. Qu'avons-nous peur de mesurer, et pourquoi ?
5. Si notre programme de métriques disparaissait demain, quelles décisions se détérioreraient ?

## Points clés à retenir

- La mesure existe pour servir des **décisions**, pas pour exister pour elle-même ; une métrique sans décision attachée est décorative.
- Gardez l'usage **diagnostique** séparé de l'usage **évaluatif**, par écrit, et surveillez la dérive silencieuse entre eux.
- Traitez chaque métrique comme une **hypothèse** sur ce qu'elle représente, pas un fait établi, et revisitez cette hypothèse à une cadence régulière.
- Le silence, choisir de ne pas mesurer quelque chose, est lui-même une décision avec des conséquences ; rendez les angles morts visibles plutôt que de les laisser rester invisibles par défaut.
- Le coût total d'un programme de métriques est réel ; pesez-le explicitement contre la valeur décisionnelle que fournit chaque métrique.

## Sources et lectures complémentaires

- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble et Gene Kim (le fondement de recherche pour la mesure d'ingénierie basée sur les résultats).
- *How to Measure Anything*, par Douglas W. Hubbard (un cadre général pour quantifier des choses qui semblent impossibles à mesurer).
- *Measuring and Managing Performance in Organizations*, par Robert D. Austin (l'analyse fondatrice du dysfonctionnement que la mesure peut introduire dans une organisation).
- *Thinking, Fast and Slow*, par Daniel Kahneman (les biais cognitifs qui rendent le jugement non assisté un substitut peu fiable à la mesure).
- Le programme DevOps Research and Assessment (DORA) de Google, [dora.dev](https://dora.dev/) (la recherche continue State of DevOps sur laquelle s'appuie ce livre tout au long).
