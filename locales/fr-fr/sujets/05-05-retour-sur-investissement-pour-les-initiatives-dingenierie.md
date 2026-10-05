# 5.5 Retour sur investissement pour les initiatives d'ingénierie

## Vue d'ensemble et motivation

Ce chapitre clôt la Partie 5 en rassemblant tout ce que les quatre chapitres précédents ont mesuré, qualité, adoption, résultats, et coût, dans le cadrage financier unique qui gouverne finalement la plupart des décisions majeures d'investissement d'ingénierie : le **[retour sur investissement](https://en.wikipedia.org/wiki/Return_on_investment) (ROI)**. Qu'une organisation décide de financer une modernisation de plateforme, un effort de refactorisation majeur, ou une nouvelle ligne de produit, quelqu'un doit finalement répondre à la question en termes financiers : cela vaut-il ce que cela coûte. Ce chapitre consiste à répondre à cette question honnêtement, en utilisant les métriques que ce livre a déjà construites, plutôt que soit d'éviter la question (ce qui cède l'influence sur les décisions d'investissement à des personnes moins équipées pour y répondre correctement) soit d'y répondre avec un dossier gonflé et insoutenable qui endommage la crédibilité quand il ne tient pas.

La discipline que ce chapitre recommande s'appuie directement sur l'unité économique du chapitre 5.4 pour le côté coût de l'équation, et les métriques de résultat du chapitre 5.3, avec leur traitement honnête de l'incertitude d'attribution, pour le côté bénéfice. Un dossier de ROI construit de cette manière est nécessairement plus modeste et plus nuancé qu'un chiffre vedette simple et attrayant, mais il a l'avantage décisif que ce livre a souligné tout du long : il survit à l'examen, et une organisation qui construit systématiquement des dossiers de ROI défendables gagne plus de confiance, et donc plus d'autonomie, dans les futures décisions d'investissement qu'une qui promet occasionnellement trop.

Pour les grandes équipes, la discipline de ROI est ce qui sépare une organisation d'ingénierie traitée comme un partenaire stratégique d'une traitée comme un centre de coût dont la dépense est tolérée plutôt qu'activement investie. Les organisations de grande entreprise utilisent des dossiers de ROI rigoureux pour concourir avec succès pour le capital contre d'autres investissements d'affaires ; les organisations de gouvernement utilisent la discipline équivalente, souvent recadrée comme analyse coût-bénéfice, pour obtenir et soutenir le financement de technologie publique contre la pression politique et budgétaire qui a peu de patience pour des promesses vagues et non étayées.

## Principes clés

- **Un dossier de ROI honnête est construit à partir des autres métriques de ce livre,** pas inventé séparément ; le coût du chapitre 5.4, le bénéfice des chapitres 5.1 à 5.3.
- **Le coût total de possession, pas seulement le coût initial, appartient au côté coût.** La maintenance continue, le support, et le coût d'infrastructure se composent sur la durée de vie d'un système.
- **Les estimations de bénéfice portent une incertitude ; énoncez-la explicitement** plutôt que de présenter un chiffre unique et faussement précis.
- **Un constat de ROI négatif ou marginal est un résultat légitime et utile.** La discipline existe pour informer les décisions honnêtement, pas pour justifier des décisions déjà prises.
- **Suivez le ROI réel après coup, pas seulement le dossier projeté à l'avance.** Une projection qui n'est jamais vérifiée contre la réalité n'enseigne rien à l'organisation.

## Recommandations

### Construisez le côté coût à partir du coût total de possession, pas seulement l'investissement initial

Incluez pas seulement le coût de développement initial mais le **[coût total de possession](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO)** complet : maintenance continue, infrastructure (l'unité économique du chapitre 5.4 est directement utile ici), support, et le coût d'opportunité de la capacité d'ingénierie que l'initiative consomme et qui aurait pu aller vers un travail alternatif. Un projet qui a l'air bon marché basé sur le coût initial seul peut être coûteux sur toute sa durée de vie une fois le fardeau de maintenance continu honnêtement pris en compte.

### Construisez le côté bénéfice à partir de preuves de résultat documentées et honnêtes

Tirez les estimations de bénéfice de la discipline de mesure de résultat des chapitres 5.1 à 5.3 : améliorations de qualité traduites en coût d'incident et de support réduit, données d'adoption traduites en valeur conduite par l'usage, et corrélations de résultat d'affaires construites avec l'approche de chaîne causale honnête et vérifiée contre les facteurs confondants du chapitre 5.3. Évitez d'inventer une estimation de bénéfice à partir de principes premiers ou d'hypothèse optimiste quand des données réelles mesurées ou historiques comparables sont disponibles pour l'ancrer à la place.

### Énoncez l'incertitude explicitement, en utilisant une plage plutôt qu'un chiffre unique

Présentez les estimations de ROI comme une plage (un cas conservateur et un cas optimiste) plutôt qu'un chiffre unique et faussement précis, et expliquez ce qui conduit la plage : quelle hypothèse spécifique, si elle se révèle optimiste ou pessimiste, bougerait le plus le résultat. Cela reflète directement le principe de littératie statistique du chapitre 1.6, appliqué à la projection financière, et cela protège la crédibilité du dossier, puisqu'une estimation ponctuelle unique qui se révèle fausse endommage la confiance bien plus qu'une plage bien expliquée dans laquelle le résultat réel tombe.

### Traitez un constat négatif ou marginal comme un résultat légitime

Construisez votre processus d'analyse de ROI pour être authentiquement capable de conclure « cela ne vaut pas le coup », et traitez cette conclusion, quand les preuves la soutiennent, comme un résultat précieux plutôt qu'un échec de l'analyse. Une organisation connue pour ne produire que des dossiers de ROI positifs, indépendamment de l'initiative, perd rapidement sa crédibilité, parce que les parties prenantes infèrent correctement que l'analyse n'est en réalité pas indépendante de la décision qu'elle est censée informer.

### Suivez les résultats réels contre le dossier projeté, et bouclez la boucle publiquement

Après qu'une initiative se termine, ou atteint un jalon significatif, comparez les résultats réellement mesurés contre la plage projetée originale, et publiez cette comparaison, incluant où la projection s'est trompée. Cette discipline de bouclage de boucle, similaire à la recommandation de suivi d'enquête du chapitre 3.7, est ce qui construit la crédibilité de prévision de ROI à long terme d'une organisation et améliore la précision des futures estimations en créant une véritable boucle de rétroaction visible.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Affirmation de ROI simple à chiffre unique | Convaincant, facile à communiquer | Faussement précis ; vulnérable à être faux et à endommager la crédibilité |
| ROI basé sur une plage avec incertitude énoncée | Défendable, survit à l'examen, honnête sur ce qui conduit la plage | Plus complexe à présenter ; nécessite plus d'effort analytique |
| Analyse de coût initial seul | Simple, rapide à produire | Sous-estime le vrai coût en omettant le fardeau de maintenance et de support continu |
| Analyse complète de coût total de possession | Précise, image complète du vrai coût d'investissement | Nécessite plus de collecte de données, particulièrement pour la projection de coût continu |

La tension centrale est **la simplicité persuasive contre l'honnêteté défendable**, la même tension que le chapitre 5.3 a nommée pour les affirmations de résultat en général, maintenant appliquée spécifiquement au dossier financier. Une affirmation de ROI à chiffre unique, simple et confiante, est plus facile à vendre à un décideur sur le moment, mais un dossier honnête et basé sur une plage avec une incertitude explicite et une comptabilité complète de coût total de possession est ce qui tient réellement sur la durée de vie de l'investissement et protège la crédibilité de l'organisation pour le prochain dossier qu'elle devra faire.

## Questions à discuter avec votre équipe

1. **Pour notre dernier dossier d'investissement d'ingénierie majeur, avons-nous pris en compte le coût total de possession, ou seulement le coût de développement initial ?** Revisitez le dossier original et vérifiez si le coût de maintenance et d'infrastructure continu était inclus, et sinon, estimez ce qu'ils auraient ajouté.

2. **Notre estimation de bénéfice s'est-elle appuyée sur des preuves de résultat documentées et mesurées, ou a-t-elle été construite à partir d'hypothèse optimiste ?** Retracez le côté bénéfice d'un dossier récent jusqu'à sa source probante réelle et évaluez honnêtement combien il était réellement ancré.

3. **Avons-nous déjà présenté une estimation de ROI comme un chiffre unique quand une plage aurait été plus honnête ?** Discutez de à quoi aurait ressemblé la plage pour un dossier récent, et quelle hypothèse spécifique a conduit la largeur de cette plage.

4. **Notre processus d'analyse de ROI a-t-il déjà conclu qu'une initiative ne valait pas la peine d'être poursuivie, et comment cette conclusion a-t-elle été reçue ?** Si chaque analyse passée a conclu positivement, discutez honnêtement de si cela reflète une sélection d'initiative authentiquement saine ou un processus qui ne produit que la réponse que les parties prenantes veulent entendre.

5. **Pour une initiative terminée, sommes-nous déjà retournés comparer les résultats réels contre le dossier projeté original ?** Sinon, choisissez une initiative réelle et terminée et faites cette comparaison maintenant comme exercice de groupe, aussi inconfortable que puisse s'avérer l'écart entre projection et réalité.

6. **Que faudrait-il pour rendre notre prochain dossier de ROI majeur défendable sous un examen authentiquement sceptique de quelqu'un en dehors de l'ingénierie ?** Parcourez votre prochain dossier planifié et identifiez le maillon le plus faible de sa chaîne probante actuelle avant qu'il n'aille à un décideur.

## Regard sectoriel

**Startup.** L'analyse de ROI formelle est souvent moins pertinente qu'une question plus simple de survie et de croissance : cet investissement nous aide-t-il à atteindre le prochain jalon ou tour de financement. Pourtant, appliquez le même principe d'honnêteté, résistez à gonfler un dossier pour justifier une décision à laquelle l'équipe s'est déjà émotionnellement engagée, puisque l'examen des investisseurs appliquera finalement le même scepticisme que ce chapitre recommande d'appliquer en interne d'abord.

**Petite entreprise.** Gardez l'analyse de ROI proportionnée à la taille de la décision ; un investissement de plateforme majeur et pluriannuel mérite la discipline complète que ce chapitre recommande, tandis qu'un petit achat d'outillage n'a pas besoin de la même rigueur. Concentrez l'effort d'analyse formelle sur vos quelques décisions les plus importantes et les plus conséquentes.

**Grande entreprise.** La discipline de ROI à cette échelle est ce qui détermine si l'ingénierie concourt avec succès pour le capital contre d'autres investissements d'affaires avec des traditions d'analyse financière plus établies. Construisez la discipline complète de coût total de possession et basée sur une plage que ce chapitre recommande comme pratique standard, et investissez dans le suivi de bouclage de boucle qui construit la crédibilité de prévision à long terme.

**Gouvernement.** L'analyse coût-bénéfice, l'équivalent du secteur public du ROI, est fréquemment une partie formelle et requise de la justification budgétaire, et l'honnêteté sur l'incertitude et le coût total de possession est particulièrement importante là où les constats peuvent faire face à un audit externe ou un examen législatif. Une analyse qui a exagéré le bénéfice ou sous-estimé le coût, une fois découverte, cause un dommage durable à la crédibilité d'un programme auprès de son organisme de financement.

## Exemples

**Grande entreprise.** La direction d'ingénierie d'une entreprise de technologie logistique a proposé un investissement majeur dans la migration d'un monolithe hérité vers une architecture de microservices, présentant initialement un chiffre de ROI unique et optimiste basé principalement sur des améliorations de fréquence de déploiement projetées. Le questionnement sceptique d'une partie prenante financière a exposé que le dossier n'avait pas pris en compte la complexité opérationnelle continue substantielle et le coût d'infrastructure que la nouvelle architecture introduirait. Un dossier révisé, construit avec un coût total de possession complet et une plage reflétant à la fois des scénarios conservateurs et optimistes d'amélioration de livraison, a montré un retour attendu plus modeste mais toujours positif, et de manière cruciale, il a survécu à l'examen de l'équipe financière et obtenu un financement, là où le dossier original et exagéré n'y serait probablement pas parvenu.

**Gouvernement.** Le programme de numérisation des dossiers judiciaires d'un gouvernement d'État a construit son dossier coût-bénéfice initial autour des économies de coût administratif seules, avec un chiffre de ROI unique et précis. Une revue indépendante du bureau du budget a trouvé que la projection n'avait pas pris en compte les économies de temps du côté citoyen ou les taux d'erreur réduits dans les procédures légales, des bénéfices qui étaient réels mais avaient été omis parce qu'ils étaient plus difficiles à quantifier que le coût administratif. Une analyse révisée a incorporé ces bénéfices avec une plage explicitement énoncée reflétant l'incertitude de mesure authentique impliquée, produisant un dossier plus fort et, surtout, plus défendable que le bureau du budget a finalement approuvé, précisément parce qu'il était transparent sur ce qu'il savait et ne savait pas avec confiance.

## Argumentaire économique : motivations, ROI et TCO

Le retour d'une discipline de ROI rigoureuse est, de manière quelque peu récursive, la crédibilité propre de la discipline de ROI : une organisation qui construit systématiquement des dossiers honnêtes et défendables, incluant conclure occasionnellement qu'une initiative ne vaut pas la peine d'être poursuivie, gagne une plus grande confiance et donc plus d'autonomie dans les futures décisions d'investissement qu'une dont les dossiers sont vus avec scepticisme parce qu'elle a promis trop auparavant. L'exemple de l'entreprise de logistique ci-dessus le montre directement : le dossier révisé, plus modeste mais honnête, a réussi là où l'original gonflé aurait probablement échoué sous examen.

Le coût total de possession de cette discipline est l'effort analytique pour construire des estimations de coût total de possession complètes, ancrer les estimations de bénéfice dans des preuves réelles, énoncer l'incertitude explicitement, et suivre les résultats réels après coup. Cet effort est authentiquement plus de travail qu'un argumentaire rapide et confiant à chiffre unique, et il en vaut la peine spécifiquement parce que l'alternative risque la crédibilité de l'organisation pour chaque futur dossier qu'elle devra faire.

## Antipatrons et pièges

- **Analyse de coût initial seul, omettant le coût total de possession :** sous-estime le vrai coût d'investissement, particulièrement pour les systèmes à longue durée de vie.
- **Inventer des estimations de bénéfice à partir d'hypothèse optimiste plutôt que de preuve documentée :** produit un dossier qui ne survit pas à l'examen.
- **Présenter un chiffre de ROI unique et faussement précis au lieu d'une plage énoncée :** endommage la crédibilité quand le résultat réel diffère de l'estimation ponctuelle.
- **Un processus d'analyse qui ne produit jamais que des conclusions positives :** correctement lu par les parties prenantes comme preuve que le processus n'est pas authentiquement indépendant.
- **Ne jamais suivre les résultats réels contre la projection originale :** perd la boucle de rétroaction qui améliorerait la précision des futures prévisions.
- **Construire un dossier pour justifier une décision déjà émotionnellement engagée, plutôt que pour authentiquement informer la décision :** la cause racine de la plupart des dossiers de ROI gonflés.

## Modèle de maturité

- **Niveau 1, Initiation :** Les dossiers de ROI sont informels, non soutenus par des preuves documentées, et concluent presque toujours positivement indépendamment de l'initiative.
- **Niveau 2, Développement :** Certains dossiers incluent des estimations de coût et de bénéfice, mais le coût total de possession est appliqué de manière incohérente et l'incertitude est rarement énoncée explicitement.
- **Niveau 3, Standardisation :** Les dossiers de ROI utilisent systématiquement le coût total de possession complet, des preuves de bénéfice documentées, et une plage énoncée reflétant une incertitude authentique, à l'échelle de l'organisation.
- **Niveau 4, Gestion :** Les résultats réels sont suivis contre les projections originales après achèvement, et la comparaison est publiée et utilisée pour améliorer les futures prévisions.
- **Niveau 5, Orchestration :** L'organisation a un historique démontré et pluriannuel de prévision de ROI précise et honnête, incluant des dossiers qui ont correctement conclu qu'une initiative ne valait pas la peine d'être poursuivie, et cet historique gagne à l'ingénierie une place de confiance dans les décisions d'investissement stratégique.

## Idées pour la discussion

1. Quel est notre plus grand dossier d'investissement actuel, et pourrait-il survivre à un examen authentiquement sceptique aujourd'hui ?
2. Avons-nous déjà suivi le résultat réel d'une initiative terminée contre sa projection de ROI originale ?
3. Que devrait changer dans notre processus d'analyse pour être authentiquement capable de conclure « ne vaut pas le coup » ?
4. Quelle composante de coût total de possession manque le plus souvent dans nos estimations de coût actuelles ?
5. Quel est le maillon probant le plus faible de notre prochain dossier d'investissement majeur planifié ?

## Points clés à retenir

- Construisez les dossiers de ROI à partir des **autres métriques de ce livre**, le coût de l'unité économique (chapitre 5.4), le bénéfice des preuves de résultat documentées (chapitres 5.1 à 5.3), pas d'hypothèses inventées.
- Incluez le **coût total de possession**, pas seulement le coût initial, et énoncez les estimations de bénéfice comme une **plage avec incertitude explicite**, pas un chiffre unique et faussement précis.
- Construisez un processus authentiquement capable de conclure qu'une initiative **ne vaut pas la peine d'être poursuivie** ; une analyse qui ne produit jamais que des conclusions positives n'est pas crédible.
- **Suivez les résultats réels contre la projection** après achèvement, et publiez la comparaison pour construire la crédibilité de prévision à long terme.
- Une discipline de ROI honnête et défendable est ce qui gagne à l'ingénierie une **place de confiance** dans les décisions d'investissement stratégique dans le temps.

## Sources et lectures complémentaires

- *How to Measure Anything*, par Douglas W. Hubbard (quantifier une valeur incertaine et construire des estimations défendables et basées sur une plage).
- *Cloud FinOps*, par J.R. Storment et Mike Fuller (discipline de coût total de possession pour l'investissement en infrastructure basée sur le cloud).
- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble, and Gene Kim (la base de recherche pour connecter l'investissement de pratique de livraison au retour d'affaires).
- U.S. Office of Management and Budget Circular A-94, conseils sur l'analyse coût-bénéfice pour les programmes fédéraux (discipline de ROI du secteur public).
