# 7.1 Le changement de paradigme de l'IA générative

## Vue d'ensemble et motivation

Pendant la majeure partie de l'histoire de l'ingénierie logicielle, écrire du code était assez lent et laborieux pour que le volume de production brut, lignes écrites, commits effectués, fonctionnalités livrées, corrèle au moins vaguement avec l'effort réel et, imparfaitement, avec la valeur réelle. Cette corrélation n'a jamais été parfaite, le sujet 3.4 a consacré un sujet entier à pourquoi les métriques d'activité induisent en erreur même dans un monde pré-IA, mais elle était assez forte pour que de nombreuses organisations construisent des programmes de métriques sur l'hypothèse implicite que plus de code produit signifiait généralement plus de travail accompli. Les assistants de codage d'[IA générative](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) ont brisé cette hypothèse de manière décisive : un outil peut maintenant produire un volume important et à l'air plausible de code en secondes, à une fraction du coût précédent, et ce volume ne vous dit presque rien en soi sur si le code résultant fonctionne, est maintenable, ou sert un véritable but.

L'affirmation centrale de ce sujet est que c'est un changement de paradigme, pas un changement d'outillage incrémental. Un changement de paradigme change ce que vos instruments existants mesurent réellement, pas seulement les valeurs qu'ils rapportent. Un compteur de vitesse mesure encore la vitesse après que vous changez le moteur d'une voiture ; plusieurs des métriques de ce livre ne survivent pas aussi proprement à cette transition. La fréquence de déploiement (sujet 2.10) peut augmenter parce que l'IA a accéléré un travail authentiquement précieux, ou parce que l'IA a rendu trivialement facile de générer de nombreux petits changements à faible valeur ; le chiffre seul ne peut plus distinguer les deux, d'une manière qu'il pouvait en grande partie, avec une prudence appropriée, auparavant. La même logique s'applique avec encore plus de force aux comptes de commits bruts, aux lignes de code, et au volume de demandes de tirage, tous que le sujet 3.4 a déjà déconseillés comme métriques individuelles, maintenant amplifiés en un risque pertinent au niveau de l'équipe et de l'organisation également.

Pour les grandes équipes, ce changement est arrivé plus vite que ce à quoi la pratique de mesure de la plupart des organisations pouvait s'adapter, et l'écart entre la vitesse d'adoption et l'adaptation de mesure est où vit le véritable risque de cette partie. Les organisations de grande entreprise qui continuent à rapporter des métriques d'activité de l'ère pré-IA sans ajustement risquent de célébrer une métrique qui a discrètement cessé de corréler avec la valeur ; les organisations de gouvernement évaluant un investissement d'outillage IA ont besoin d'une compréhension lucide de exactement quelles métriques restent dignes de confiance et lesquelles ne le sont plus, avant de s'engager dans des décisions d'approvisionnement ou de politique construites sur des hypothèses de mesure dépassées.

## Principes clés

- **C'est un changement de paradigme dans ce que les métriques mesurent, pas un changement incrémental.** Certaines métriques existantes ont discrètement cessé de signifier ce qu'elles signifiaient auparavant.
- **Le volume de production n'a jamais été un représentant fiable de la valeur, et il est devenu activement peu fiable maintenant.** La mise en garde du sujet 3.4 a toujours été correcte ; ce changement rend l'ignorer bien plus coûteux.
- **L'écart entre la vitesse d'adoption de l'IA et la vitesse d'adaptation de mesure est le véritable risque.** Les organisations adoptent l'outillage plus vite qu'elles ne reconsidèrent leurs métriques.
- **Toute métrique de ce livre n'est pas affectée également.** Les métriques de résultat (Partie 5) sont bien plus résilientes à ce changement que les métriques d'activité et de production brute.
- **Ce changement est à l'échelle de l'industrie et continu, pas un ajustement unique.** Attendez-vous à un changement continu à mesure que l'outillage et ses schémas d'adoption continuent d'évoluer.

## Recommandations

### Auditez explicitement votre ensemble de métriques existant pour la validité de l'ère de l'IA

Parcourez votre tableau de bord actuel et, pour chaque métrique, demandez directement : une équipe utilisant lourdement l'assistance IA mais ne produisant pas plus de valeur réelle qu'avant montrerait-elle une lecture améliorée sur cette métrique. Les comptes d'activité, la fréquence de commits, et la fréquence de déploiement brute (sans garde-fou de stabilité associé, sujet 2.10) sont les plus exposés. Les métriques de résultat de la Partie 5, taux de défauts échappés, adoption de fonctionnalités, résultats d'affaires, sont comparativement résilientes, puisqu'elles mesurent le résultat réel plutôt que le volume d'activité qui l'a produit.

### Réexaminez spécifiquement la fréquence de déploiement et le temps d'exécution, avec une attention de garde-fou accrue

Le sujet 2.10 a déjà mis en garde contre la manipulation de substitution, diviser un travail significatif en déploiements triviaux pour gonfler le compte. L'IA générative rend ce schéma de manipulation spécifique dramatiquement moins coûteux et plus facile à produire, même non intentionnellement, puisque les changements triviaux assistés par IA sont maintenant presque gratuits à générer. Resserrez votre garde-fou de taux d'échecs de changement (sujet 2.10) spécifiquement en proportion de combien lourdement une équipe a adopté le développement assisté par IA, et surveillez les tendances de taille de déploiement encore plus étroitement qu'avant.

### Traitez la capacité de revue de code comme un nouveau goulot d'étranglement critique

Si l'assistance IA augmente dramatiquement le volume de code proposé pour revue, l'étape de revue (sujet 2.9), déjà souvent le plus grand contributeur de temps d'attente dans le pipeline de livraison, devient une contrainte encore plus aiguë. Un réviseur demandé d'évaluer un volume bien plus élevé de code généré par IA au même rythme qu'avant ralentira inévitablement soit le pipeline soit réduira la profondeur de revue, exactement le risque de tampon automatique contre lequel le sujet 2.9 mettait déjà en garde, maintenant sous une pression significativement plus grande. Surveillez les garde-fous de profondeur et de qualité de revue avec une attention accrue à mesure que le volume de code généré par IA augmente.

### Ne supposez pas que le code généré par IA porte le même profil de défaut que le code écrit par un humain

Les premières preuves et l'expérience des praticiens suggèrent que le code généré par IA peut avoir un profil de défaut différent du code écrit par un humain : une logique à l'air plausible mais subtilement fausse, une gestion de cas limite générée avec assurance mais incorrecte, ou du code qui passe une revue superficielle parce qu'il a l'air idiomatique et raisonnable, mais n'a pas réellement été raisonné avec une compréhension authentique du contexte spécifique du système. Traitez cela comme une hypothèse qui vaut la peine d'être activement testée contre vos propres données de défaut échappé (sujet 5.1), en étiquetant les défauts selon si le code d'origine était substantiellement généré par IA, plutôt que de supposer que les relations historiques de taux de défaut autour desquelles votre organisation a construit ses pratiques de qualité tiennent encore inchangées.

### Mettez à jour explicitement votre charte de métriques et votre processus de gouvernance pour ce changement

Suivant la discipline de gouvernance du sujet 1.4, ne laissez pas ce changement arriver passivement à votre programme de métriques. Revisitez explicitement votre charte de métriques, en nommant quelles métriques ont besoin de nouveaux garde-fous, lesquelles doivent être retirées, et lesquelles restent dignes de confiance, comme une décision de gouvernance délibérée plutôt qu'une dérive non examinée. Documentez le raisonnement, puisque c'est exactement le genre de changement définitionnel et contextuel contre lequel le sujet 1.4 met en garde qu'il peut autrement se produire silencieusement et n'être découvert que bien plus tard.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Continuer à rapporter les métriques pré-IA inchangées | Aucune perturbation, rapport familier | Risque de célébrer des métriques qui ont discrètement cessé de corréler avec la valeur |
| Audit complet et révision délibérée de l'ensemble de métriques | Restaure une mesure digne de confiance | Nécessite un véritable effort analytique et une gestion du changement organisationnel |
| Abandonner entièrement les métriques d'activité et de production | Retire directement le risque le plus exposé | Perd un certain signal contextuel légitimement utile (la réserve du sujet 3.4) |
| Resserrer les garde-fous sans audit complet | Plus rapide à mettre en œuvre | Peut manquer des métriques dont l'exposition est moins évidente que les cas les plus clairs |

La tension centrale est **la continuité de mesure contre la validité de mesure**. Les organisations préfèrent naturellement continuer à rapporter des métriques familières de manières familières, puisque changer un programme de métriques a un véritable coût organisationnel et une perturbation. Mais continuer à rapporter une métrique qui a discrètement cessé de mesurer ce qu'elle mesurait auparavant est pire qu'une perturbation, c'est une mauvaise direction active. Résolvez la tension en traitant cela comme exactement le genre de changement de gouvernance délibéré et documenté que décrit le sujet 1.4, perturbateur à court terme mais nécessaire pour garder les métriques de l'organisation honnêtes.

## Questions à discuter avec votre équipe

1. **Pour chaque métrique de notre tableau de bord, une équipe utilisant lourdement l'assistance IA mais ne produisant pas plus de valeur réelle montrerait-elle une lecture améliorée ?** Parcourez vos métriques explicitement avec ce test ; celles qui échouent sont vos candidates de plus haute priorité pour des garde-fous révisés ou une retraite.

2. **Notre fréquence de déploiement ou notre volume de commits a-t-il augmenté depuis l'adoption de l'assistance de codage IA, et avons-nous vérifié si le taux d'échecs de changement ou le taux de défauts a bougé en correspondance ?** Sortez les données appariées réelles plutôt que de supposer un résultat positif ou négatif.

3. **Notre capacité de revue de code suit-elle le rythme de toute augmentation du volume de code assisté par IA, ou la profondeur de revue s'érode-t-elle discrètement sous une pression accrue ?** Vérifiez les métriques d'étape de revue (sujet 2.9) spécifiquement pour des signes du risque de tampon automatique s'intensifiant.

4. **Étiquetons-nous les défauts selon si le code d'origine était substantiellement généré par IA, et si oui, que montrent ces données jusqu'à présent ?** Si vous n'étiquetez pas actuellement cela, discutez de ce qu'il faudrait pour commencer, puisque ces données sont directement pertinentes pour savoir si vos hypothèses de qualité historiques tiennent encore.

5. **Avons-nous délibérément revisité notre charte de métriques (sujet 1.4) à la lumière de ce changement, ou notre pratique de mesure a-t-elle simplement continué inchangée ?** Si la réponse honnête est la seconde, cet écart est exactement ce que ce sujet recommande de fermer en premier.

6. **À quoi ressemblerait-il pour notre organisation d'être prise au dépourvu par ce changement, célébrant une métrique qui avait déjà cessé de signifier ce que nous pensions qu'elle signifiait ?** Cette expérience de pensée concrète et légèrement inconfortable aide à motiver l'audit que ce sujet recommande avant, plutôt qu'après, que ce scénario ne se produise réellement.

## Regard sectoriel

**Startup.** L'adoption rapide d'outils IA est courante et souvent un véritable avantage concurrentiel, mais la même vitesse qui rend l'adoption attrayante rend une dérive de métrique non examinée plus probable. Construisez l'habitude de vérifier les métriques de résultat (Partie 5) aux côtés de tout gain d'efficacité que vous rapportez de l'adoption de l'IA, plutôt que de rapporter des améliorations de vélocité seules.

**Petite entreprise.** L'assistance de codage IA peut substantiellement étendre la capacité d'une petite équipe, mais résistez à la tentation de rapporter des augmentations de production brute comme un succès sans ambiguïté sans vérifier les garde-fous de qualité ; une petite équipe a moins de capacité pour absorber un problème de qualité non détecté qu'une plus grande organisation avec plus de redondance.

**Grande entreprise.** L'échelle de ce risque se compose significativement ici, puisque l'adoption de l'IA à travers des dizaines ou centaines d'équipes simultanément peut déplacer la validité de métrique à l'échelle de l'organisation avant qu'une seule équipe ne remarque le schéma localement. Menez l'audit d'ensemble de métriques que ce sujet recommande au niveau organisationnel, pas seulement équipe par équipe, et mettez à jour la gouvernance (sujet 1.4) centralement et explicitement.

**Gouvernement.** Les organisations du secteur public adoptent souvent les nouvelles technologies plus prudemment, mais les métriques et repères utilisés pour évaluer les programmes de technologie gouvernementale sont fréquemment tirés de, ou comparés contre, des données d'industrie du secteur privé qui changent elles-mêmes sous la même pression. Comprenez explicitement quels repères de l'industrie contre lesquels vous comparez ont été affectés par ce changement avant de les utiliser pour fixer des attentes ou évaluer la performance.

## Exemples

**Grande entreprise.** La direction d'ingénierie d'une entreprise de technologie financière a remarqué que la fréquence de déploiement avait augmenté de près de 40 % dans les deux trimestres suivant l'adoption large d'assistants de codage IA, et a initialement rapporté cela comme un gain de productivité simple dans une présentation au conseil d'administration. Une analyse de suivi plus soigneuse, incitée par la question d'un membre du conseil sceptique sur si la qualité avait été vérifiée, a trouvé que le taux d'échecs de changement avait augmenté presque au même rythme que la fréquence de déploiement, compensant entièrement le gain apparent une fois que la métrique de stabilité appariée a été réellement examinée. Le rapport révisé de l'entreprise présente maintenant explicitement la fréquence de déploiement et le taux d'échecs de changement ensemble chaque fois que des affirmations de productivité assistée par IA sont faites, évitant l'affirmation trompeuse antérieure et presque publique.

**Gouvernement.** Un département informatique d'un gouvernement d'État pilotant l'assistance de codage IA pour un sous-ensemble de ses équipes d'ingénierie a trouvé que la production de code brute par ingénieur avait substantiellement augmenté, un chiffre initialement cité favorablement dans une revue de pilote interne. Une analyse plus approfondie, incitée par l'incorporation des conseils de ce livre dans le cadre d'évaluation du département, a examiné spécifiquement le taux de défauts échappés pour le travail assisté par IA contre non assisté par IA et a trouvé un taux de défauts modestement élevé dans la cohorte assistée par IA, concentré dans la gestion de cas limites pour des circonstances citoyennes inhabituelles auxquelles l'outillage IA n'avait pas été exposé pendant l'entraînement. Ce constat n'a pas arrêté le pilote mais a mené à une augmentation spécifique et ciblée de la rigueur de revue pour les changements assistés par IA touchant la logique de cas limite d'éligibilité, adressant le véritable risque que la métrique de production brute seule n'aurait jamais révélé.

## Argumentaire économique : motivations, ROI et TCO

Le retour de mener cet audit proactivement est d'éviter un embarras public ou au niveau du conseil d'administration issu du rapport d'une métrique qui s'avère, sous examen, n'avoir mesuré rien de réel, exactement le scénario que l'exemple de technologie financière ci-dessus a presque produit. Une organisation qui prend de l'avance sur ce changement maintient sa crédibilité auprès de ses parties prenantes ; une qui se fait prendre à rapporter une métrique creuse paie un coût réputationnel réel et largement évitable.

Le coût total de possession est l'effort analytique pour auditer l'ensemble de métriques existant, resserrer les garde-fous, et mettre à jour la documentation de gouvernance, un investissement modéré et unique relatif au risque continu de continuer à rapporter des métriques qui ont discrètement cessé de mesurer ce qu'elles prétendent mesurer. Ce coût est aussi récurrent à un niveau plus bas, puisque ce changement est continu, pas un événement unique, et un réaudit périodique à mesure que l'outillage et les schémas d'adoption continuent d'évoluer est un ajout raisonnable et permanent à une cadence de gouvernance de métriques.

## Antipatrons et pièges

- **Continuer à rapporter des métriques d'activité de l'ère pré-IA inchangées et sans esprit critique :** risque de célébrer une métrique qui a discrètement cessé de corréler avec une valeur réelle.
- **Rapporter des augmentations de fréquence de déploiement ou de volume de production sans le garde-fou de stabilité apparié :** répète la mise en garde du sujet 2.10 avec des enjeux significativement plus élevés sous le développement assisté par IA.
- **Supposer que le code généré par IA porte le même profil de défaut que le code écrit par un humain sans vérifier :** une hypothèse non testée qui pourrait être activement fausse.
- **Laisser la profondeur de revue s'éroder silencieusement sous un volume accru de code généré par IA :** le risque de tampon automatique du sujet 2.9, intensifié.
- **Traiter ce changement comme un ajustement unique plutôt qu'une préoccupation continue :** l'outillage et ses schémas d'adoption continuent d'évoluer, et la pratique de mesure doit suivre le rythme.
- **Comparer contre des repères de l'industrie sans comprendre si ces repères ont eux-mêmes changé sous la même pression :** risque un faux sentiment de performance relative.

## Modèle de maturité

- **Niveau 1, Initiation :** Les métriques de l'ère pré-IA sont rapportées inchangées, sans conscience que l'adoption de l'IA pourrait avoir affecté leur validité.
- **Niveau 2, Développement :** Une certaine conscience du changement existe, mais aucun audit systématique de l'ensemble de métriques existant n'a été mené.
- **Niveau 3, Standardisation :** Un audit complet de l'ensemble de métriques a été mené, avec des garde-fous resserrés et des métriques documentées comme affectées ou résilientes, à l'échelle de l'organisation.
- **Niveau 4, Gestion :** Les défauts et résultats de qualité sont activement étiquetés et suivis par niveau d'assistance IA pour tester, pas supposer, que les relations de qualité historiques de l'organisation tiennent encore.
- **Niveau 5, Orchestration :** L'organisation a une pratique mature et continue de réexamen de ses métriques à mesure que l'outillage IA et les schémas d'adoption continuent d'évoluer, et peut pointer vers des décisions de gouvernance spécifiques prises proactivement en réponse à ce changement plutôt que réactivement après qu'un problème ait émergé.

## Idées pour la discussion

1. Laquelle de nos métriques actuelles flatterait le plus une équipe utilisant lourdement l'assistance IA mais ne produisant pas plus de valeur réelle ?
2. Notre fréquence de déploiement a-t-elle augmenté depuis l'adoption de l'IA, et le taux d'échecs de changement a-t-il bougé avec elle ?
3. Étiquetons-nous les résultats de qualité par niveau d'assistance IA, et que montreraient ces données ?
4. Notre capacité de revue suit-elle le rythme de toute augmentation du volume de code généré par IA ?
5. Contre quel repère de l'industrie nous comparons-nous actuellement, et a-t-il lui-même changé sous cette pression ?

## Points clés à retenir

- L'IA générative est un **changement de paradigme dans ce que plusieurs métriques existantes mesurent**, pas un changement d'outillage incrémental ; certaines métriques ont discrètement cessé de signifier ce qu'elles signifiaient auparavant.
- **Les métriques d'activité et de production brute sont les plus exposées** ; les métriques de résultat (Partie 5) sont comparativement résilientes.
- **Resserrez les garde-fous, particulièrement le taux d'échecs de changement,** en proportion de l'adoption du développement assisté par IA.
- **Testez, ne supposez pas, si le code généré par IA porte un profil de défaut différent** du code écrit par un humain, en utilisant des données de défaut échappé étiquetées.
- Traitez cela comme une **préoccupation de gouvernance continue, pas unique** (sujet 1.4), puisque l'outillage et ses schémas d'adoption continuent d'évoluer.

## Sources et lectures complémentaires

- *Accelerate: The Science of Lean Software and DevOps*, par Nicole Forsgren, Jez Humble, and Gene Kim (la fondation de mesure basée sur le résultat que ce sujet argumente devenir plus, pas moins, importante sous ce changement).
- La recherche de GitHub sur la programmation en binôme avec l'IA et la productivité des développeurs (recherche de l'industrie sur les effets mesurables du développement assisté par IA).
- Le programme Google Cloud DevOps Research and Assessment, [dora.dev](https://dora.dev/) (recherche continue State of DevOps incorporant les constats d'adoption de l'IA ces dernières années).
- *The Tyranny of Metrics*, par Jerry Z. Muller (l'argument général pour le scepticisme envers les métriques basées sur le volume, directement pertinent à mesure que le volume de production devient bon marché).
