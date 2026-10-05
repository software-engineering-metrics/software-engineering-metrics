# 1.3 Les résultats plutôt que la production : choisir ce qu'il faut mesurer

## Vue d'ensemble et motivation

Chaque métrique d'ingénierie tombe dans l'une de trois catégories, et les confondre est le deuxième mode d'échec le plus commun dans ce livre, après ignorer entièrement la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law). Une **métrique d'entrée** mesure l'effort dépensé : heures d'ingénieur, dollars déployés, points d'histoire engagés. Une **métrique de production** mesure ce que le système a produit : fonctionnalités livrées, demandes de tirage fusionnées, tickets fermés. Une **métrique de résultat** mesure le changement qui a réellement compté : revenu conservé, incidents évités, temps économisé pour un utilisateur. Les équipes gravitent vers les entrées et la production parce qu'elles sont faciles à compter et entièrement sous le contrôle d'une équipe. La valeur, presque toujours, vit dans les résultats, qui sont plus lents à apparaître, plus bruyants à mesurer, et plus difficiles à attribuer au travail d'une seule équipe.

Ce sujet consiste à résister délibérément à cette gravité. Un tableau de bord construit entièrement à partir d'entrées et de production peut paraître impressionnant d'activité tout en ne produisant aucune valeur réelle : une équipe peut livrer des dizaines de fonctionnalités que personne n'utilise, fermer des centaines de tickets qui se rouvrent une semaine plus tard, ou atteindre chaque estimation en points d'histoire pendant que les résultats réels du produit, rétention, satisfaction, revenu, restent plats ou déclinent. Rien de cette agitation n'apparaît comme un problème sur un tableau de bord uniquement centré sur la production, parce que les tableaux de bord uniquement centrés sur la production ne sont pas construits pour le voir.

À l'échelle de l'entreprise et du gouvernement, cette distinction détermine si la direction peut faire la différence entre une équipe productive et une équipe simplement active. Une division peut afficher d'excellents chiffres de production pendant des années, fonctionnalités livrées, sprints fermés, pendant que le résultat auquel un bailleur de fonds ou une législature tient réellement, revenu conservé, temps d'attente réduits pour les citoyens, s'érode tranquillement en dessous. « Nous avons livré la feuille de route » n'est pas la même affirmation que « la feuille de route a amélioré les choses », et seul un ensemble de métriques pondéré vers les résultats peut distinguer les deux.

## Principes clés

- **Les entrées et la production sont des représentants ; les résultats sont la chose elle-même.** Pondérez votre ensemble de métriques vers les résultats partout où vous pouvez les atteindre.
- **La facilité de mesure n'est pas une raison de mesurer quelque chose.** Les choses les plus faciles à compter sont généralement les entrées et la production, non pas parce qu'elles importent le plus mais parce qu'elles sont mécaniquement simples à capturer.
- **L'attribution devient plus difficile à mesure que vous vous rapprochez des résultats.** Acceptez ce compromis délibérément plutôt que de vous replier sur la production parce que les résultats sont plus difficiles à attribuer.
- **Une équipe peut contrôler ses entrées et sa production mais seulement influencer les résultats.** Concevez la responsabilité en conséquence : tenez les équipes responsables de ce qu'elles peuvent réellement contrôler, et suivez les résultats comme des signaux partagés entre équipes.
- **Un unique résultat étoile polaire, avec un petit ensemble de facteurs moteurs, bat un mur de tuiles de production.** La couverture devrait venir de la structure, pas du pur volume du tableau de bord.

## Recommandations

### Classez chaque métrique avant de l'adopter

Pour toute métrique candidate, demandez dans laquelle des trois catégories elle tombe. « Demandes de tirage fusionnées par semaine » est une production. « Pourcentage de demandes de tirage fusionnées ayant causé un incident en production dans la semaine » est plus proche d'un résultat, parce qu'elle mesure une conséquence plutôt qu'un volume. Cette classification prend trente secondes et devrait être obligatoire avant qu'une métrique ne soit ajoutée à un tableau de bord d'équipe ou d'organisation, parce que c'est le moyen le plus rapide d'attraper un tableau de bord qui se remplit tranquillement de production facile à compter tout en croyant mesurer la valeur.

### Construisez un arbre de métriques sous un résultat unique

Ne suivez pas une liste plate. Organisez les métriques comme un **arbre de métriques** (parfois appelé arbre de KPI) : une métrique de résultat au sommet, décomposée en facteurs moteurs qui l'alimentent causalement ou mathématiquement, jusqu'aux mesures opérationnelles de production et d'entrée que les équipes individuelles possèdent réellement. Quand le résultat au sommet bouge, l'arbre vous dit quel facteur moteur de niveau inférieur investiguer, transformant « le chiffre est en baisse » en « cette étape spécifique du pipeline est la cause ». Nommez une unique **métrique étoile polaire** au sommet partout où votre domaine en permet une : la mesure qui capture le mieux la valeur livrée, fréquence de déploiement jumelée avec le taux d'échecs de changement pour une équipe de plateforme, ou utilisation active hebdomadaire d'une fonctionnalité centrale pour une équipe produit.

### Pondérez les résultats en revue, pas seulement sur le tableau de bord

Un arbre de métriques ne vaut que par la manière dont il est utilisé en pratique. Dans les revues de sprint, les revues trimestrielles d'activité et les mises à jour de direction, commencez par le chiffre au niveau du résultat et utilisez les métriques de production et d'entrée en dessous uniquement pour expliquer le mouvement, pas pour s'y substituer. Une équipe qui rapporte « nous avons fermé 40 tickets ce sprint » sans aucun contexte de résultat ne vous a rien dit sur le fait que le travail ait compté ; une équipe qui rapporte « les défauts échappés ont chuté de 30 % et voici l'investissement de test qui l'a motivé » vous a dit quelque chose de réel.

### Acceptez une rétroaction plus lente pour les métriques de résultat, et jumelez-les avec des indicateurs avancés plus rapides

Les métriques de résultat sont souvent retardées : elles confirment un résultat après qu'assez de temps se soit écoulé pour en être sûr. Ce retard est un coût réel, puisqu'il retarde l'apprentissage. Jumelez chaque métrique de résultat avec au moins un indicateur avancé, une métrique qui bouge plus tôt et prédit le résultat, de sorte qu'une équipe puisse se diriger avant que le chiffre lent et faisant autorité n'atterrisse enfin. La fréquence de déploiement est un indicateur avancé pour les résultats de livraison ; une tendance croissante de défauts échappés est un indicateur avancé pour un résultat de fiabilité à venir. Utilisez les indicateurs avancés pour agir tôt et les métriques de résultat retardées pour confirmer que vous aviez raison.

## Compromis : avantages et inconvénients

| Catégorie | Avantages | Inconvénients |
| --- | --- | --- |
| Métriques d'entrée | Entièrement sous le contrôle de l'équipe, faciles à compter | Lien le plus faible avec la valeur réelle ; facile à manipuler par le volume |
| Métriques de production | Faciles à compter, propriété claire, rétroaction rapide | Récompense l'activité plutôt que l'impact ; peut monter pendant que la valeur baisse |
| Métriques de résultat | Reflètent directement ce qui compte ; difficiles à manipuler à bas coût | Lentes, bruyantes et difficiles à attribuer à une seule équipe |
| Structure en arbre de métriques | Connecte le travail quotidien à la valeur stratégique ; aide le diagnostic | Nécessite un vrai travail analytique pour construire et maintenir correctement |

La tension centrale est **contrôlabilité contre valeur**. Les entrées et la production sont entièrement sous le contrôle d'une équipe, ce qui les rend tentantes pour tenir les équipes responsables ; les résultats portent la valeur mais ne sont que partiellement sous l'influence d'une seule équipe, puisqu'une bonne fonctionnalité peut encore échouer pour des raisons entièrement extérieures à l'ingénierie. Résolvez cela en tenant les équipes responsables des entrées et de la production qu'elles contrôlent entièrement, tout en suivant les résultats comme des signaux partagés que toute l'organisation possède ensemble, connectés par un arbre de métriques explicite plutôt que laissés comme un écart inexpliqué entre « nous avons fait le travail » et « cela a-t-il aidé ».

## Questions à discuter avec votre équipe

1. **Pour chaque métrique sur notre tableau de bord actuel, est-ce une entrée, une production, ou un résultat, et l'équilibre entre les trois raconte-t-il une histoire honnête ?** La plupart des tableaux de bord, audités honnêtement, s'avèrent être presque entièrement des entrées et de la production, parce que c'est ce que l'outillage rapporte par défaut. Classez chaque tuile et comptez la répartition ; un tableau de bord sans aucune tuile de résultat mesure l'activité et la présente comme de la performance.

2. **Quelle est notre unique métrique de résultat étoile polaire, et pouvons-nous la tracer à travers un arbre de métriques jusqu'à quelque chose que chaque équipe possède réellement ?** Sans cette structure connective, un chiffre de tête qui bouge ne donne aucun indice sur où regarder, et les équipes ne peuvent pas voir comment leurs métriques de production quotidiennes se connectent à quoi que ce soit qui compte. Apportez votre métrique de tête actuelle, si vous en avez une, et essayez de construire l'arbre en direct.

3. **Où tenons-nous une équipe responsable d'un résultat qu'elle peut seulement influencer, pas contrôler ?** C'est une source commune de frustration et de manipulation tranquille, parce qu'une équipe punie pour un résultat façonné par des facteurs hors de son contrôle a toute raison de se protéger plutôt que d'améliorer le système réel. Identifiez ces disparités et ajustez soit la responsabilité, soit ajoutez les leviers manquants.

4. **Quel indicateur avancé avons-nous pour chacune de nos métriques de résultat retardées, et de combien de temps à l'avance les prédit-il ?** Un ensemble de métriques purement retardées signifie que vous ne découvrez que vous aviez tort qu'après qu'il soit trop tard pour changer de cap à bas coût. Apportez vos métriques de résultat et vérifiez si un véritable indicateur avancé existe pour chacune, ou si vous volez à l'aveugle entre les périodes de rapport.

5. **Combien de ce que nous célébrons dans les revues et les rétrospectives est de la production (« nous avons livré X ») contre du résultat (« X a changé Y pour le mieux ») ?** Le langage que les équipes utilisent pour célébrer le travail façonne ce pour quoi elles optimisent avec le temps, souvent plus que ne le fait le tableau de bord. Écoutez vos propres réunions de revue pendant un sprint et comptez la répartition honnêtement.

6. **Si nos principales métriques de production doublaient du jour au lendemain, nos métriques de résultat s'amélioreraient-elles nécessairement, ou pourraient-elles empirer ?** Cette expérience de pensée expose les métriques de production devenues déconnectées des, ou même activement opposées aux, résultats qu'elles étaient censées servir, comme un volume de fonctionnalités qui augmente le fardeau de maintenance plus vite qu'il n'augmente l'adoption.

## Regard sectoriel

**Startup.** Choisissez un résultat, typiquement un représentant de si les clients continuent d'obtenir de la valeur, comme la rétention ou l'activation hebdomadaire, et traitez-le comme votre étoile polaire dès le premier jour. Résistez à l'attrait des métriques de vanité de production comme le compte cumulatif de fonctionnalités, tentantes à rapporter aux investisseurs mais qui ne vous disent rien sur le fait que le produit fonctionne réellement pour quelqu'un.

**Petite entreprise.** Vos outils existants, point de vente, bureau de support, analytique, rapportent généralement déjà un chiffre proche d'un résultat, taux de réachat, taux de réouverture de ticket. Utilisez ceux-là plutôt que de construire une instrumentation de résultat sur mesure que vous n'avez pas la capacité de maintenir, et résistez à la tentation de vous replier sur des comptages d'activité bruts simplement parce qu'ils sont la vue par défaut.

**Grande entreprise.** Le mode d'échec dominant est un portefeuille d'équipes optimisant chacune des métriques de production locales qui ne s'additionnent en aucun résultat organisationnel cohérent. Construisez l'arbre de métriques délibérément, standardisez les définitions de résultat entre unités commerciales, et exigez que chaque initiative majeure énonce son hypothèse de résultat avant le financement, pas seulement son plan de production.

**Gouvernement.** Les organes de surveillance et le public sont de plus en plus lettrés dans la différence entre « a livré le cahier des charges » et « a amélioré le résultat », et un rapport uniquement de production invite exactement cet examen. Définissez le succès comme un résultat orienté citoyen (temps d'attente, taux d'erreur, satisfaction) partout où c'est légalement et pratiquement possible, et soyez explicites quand seule une métrique de production est disponible et pourquoi.

## Exemples

**Grande entreprise.** La division d'ingénierie d'une entreprise de logistique a rapporté un compte constamment croissant de « fonctionnalités livrées par trimestre » pendant deux ans, pendant que le score de satisfaction client central de l'entreprise s'aplatissait tranquillement. Une nouvelle vice-présidente de l'ingénierie a construit un arbre de métriques enraciné dans le taux de livraison à l'heure, le résultat commercial réel, décomposé à travers le temps de séjour au hub et le succès du dernier kilomètre jusqu'à la production au niveau des équipes d'ingénierie. En un cycle de rapport, il est devenu clair que plusieurs équipes à forte production livraient des fonctionnalités dans des zones sans effet mesurable sur la métrique étoile polaire, et l'investissement s'est déplacé vers les facteurs moteurs que l'arbre a montré comme réellement importants.

**Gouvernement.** L'équipe numérique d'un service de santé national avait rapporté des « modules livrés contre le cahier des charges » pour un programme pluriannuel de modernisation des dossiers patients. Un comité de surveillance a posé une question différente : les cliniciens passaient-ils moins de temps sur la saisie de données administratives. L'équipe a rétro-adapté une métrique de résultat, minutes médianes de temps administratif par rencontre patient, et a trouvé que les premiers modules avaient en fait augmenté ce temps à cause de friction dans le flux de travail, malgré avoir atteint chaque jalon de livraison. Les modules ultérieurs ont été reconçus directement autour de la métrique de résultat, et le rapport public du programme est passé d'une liste de contrôle de livraison à une comparaison de résultat avant-après.

## Argumentaire économique : motivations, ROI et TCO

Le retour de la pondération vers les résultats est le gaspillage évité : une organisation qui peut voir, en quasi temps réel, qu'un flux de production ne fait bouger aucun résultat peut rediriger cet investissement avant qu'un cycle budgétaire complet ne soit dépensé à le découvrir de la manière difficile. Le coût caché dominant dans les grandes organisations d'ingénierie n'est pas le sous-investissement, c'est le travail bien exécuté qui n'aurait jamais dû être financé parce qu'il était déconnecté de tout résultat réel, et un tableau de bord uniquement de production ne peut pas voir du tout cette déconnexion.

Le coût total de possession de la mesure de résultat est plus élevé que la mesure de production, parce que les résultats sont authentiquement plus difficiles à définir, attribuer et instrumenter, et construire un véritable arbre de métriques prend un effort analytique délibéré plutôt que d'accepter ce qu'un outil exporte par défaut. Ce coût vaut la peine d'être payé pour toute initiative au-dessus d'une taille modeste, parce que l'alternative, découvrir après coup qu'une année de production rapportée avec confiance n'a produit aucune valeur réelle, coûte bien plus cher que l'analyse en amont.

## Antipatrons et pièges

- **Un tableau de bord entièrement composé de tuiles de production :** mesure l'activité et la présente comme de la performance.
- **Tenir une équipe entièrement responsable d'un résultat qu'elle ne peut pas contrôler :** engendre la frustration et invite à la manipulation pour se protéger d'un blâme injuste.
- **Aucun indicateur avancé pour un résultat retardé :** l'équipe apprend qu'elle avait tort seulement après qu'il soit trop coûteux de corriger.
- **Célébrer le langage de production en revue tout en prétendant valoriser les résultats :** la priorité énoncée et l'incitation vécue divergent, et l'incitation vécue gagne.
- **Une liste plate de métriques sans structure en arbre :** un chiffre de tête qui bouge ne donne aucun indice sur où regarder.
- **Traiter la mesure de résultat comme trop difficile à tenter :** fait revenir une organisation en permanence aux entrées et à la production faciles à compter.

## Modèle de maturité

- **Niveau 1, Initiation :** Les métriques sont presque entièrement des entrées et de la production ; personne ne peut nommer les métriques de résultat de l'organisation ni tracer une ligne jusqu'à elles.
- **Niveau 2, Développement :** Certaines équipes ont identifié des métriques de résultat informellement, mais il n'y a pas d'arbre de métriques partagé ni d'indicateurs avancés cohérents.
- **Niveau 3, Standardisation :** Un arbre de métriques documenté connecte un résultat étoile polaire partagé jusqu'à la production possédée par les équipes, appliqué de manière cohérente à travers l'organisation.
- **Niveau 4, Gestion :** Les indicateurs avancés et retardés sont tous deux suivis et revus ensemble ; les équipes ne sont tenues responsables que de ce qu'elles contrôlent, et la mesure de résultat est activement dotée de ressources.
- **Niveau 5, Orchestration :** La mesure de résultat est intégrée directement dans les décisions de financement et de priorisation ; l'organisation redirige routinement l'investissement loin du travail à forte production et faible résultat avant qu'un cycle budgétaire complet ne s'écoule.

## Idées de discussion

1. Nommez l'unique métrique de résultat la plus importante de notre organisation. Tout le monde peut-il s'accorder dessus ?
2. Quel est notre plus grand investissement actuel en production que nous ne pouvons pas encore tracer jusqu'à un résultat ?
3. Où notre structure de responsabilité punit-elle une équipe pour un résultat qu'elle ne peut pas contrôler ?
4. À quoi ressemblerait notre tableau de bord si nous supprimions chaque tuile de production pure ?
5. Combien de temps nous faut-il actuellement pour apprendre si une fonctionnalité livrée a réellement aidé ?

## Points clés à retenir

- Classez chaque métrique comme **entrée, production ou résultat**, et pondérez votre ensemble délibérément vers les résultats.
- Construisez un **arbre de métriques** sous une unique **métrique étoile polaire** de sorte qu'un chiffre de tête qui bouge pointe vers une cause.
- Tenez les équipes responsables de ce qu'elles **contrôlent** (entrées, production) ; suivez les résultats comme des signaux partagés que toute l'organisation influence ensemble.
- Jumelez chaque **métrique de résultat** retardée avec un **indicateur avancé** plus rapide pour pouvoir vous diriger avant que le chiffre lent ne confirme que vous aviez tort.
- Un tableau de bord uniquement de production mesure l'activité et l'appelle performance ; traitez cela comme un signal d'alerte, pas un réconfort.

## Sources et lectures complémentaires

- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble et Gene Kim (mesure de livraison basée sur les résultats).
- *Lean Analytics*, par Alistair Croll et Benjamin Yoskovitz (l'Unique Métrique Qui Compte et la distinction entrée/production/résultat dans un contexte de startup).
- *Measure What Matters*, par John Doerr (établissement d'objectifs orienté résultat et l'accent du cadre OKR sur les résultats plutôt que l'activité).
- *The Lean Startup*, par Eric Ries (métriques actionnables contre métriques de vanité et validation de résultat).
- *Key Performance Indicators*, par David Parmenter (construction d'une structure en arbre de KPI ou de métriques sous une mesure étoile polaire).
