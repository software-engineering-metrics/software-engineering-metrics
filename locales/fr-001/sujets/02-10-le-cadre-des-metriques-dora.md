# 2.10 Le cadre des métriques DORA

## Vue d'ensemble et motivation

Les **[métriques DORA](https://dora.dev/guides/dora-metrics/)** viennent du programme [DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment, un effort de recherche pluriannuel, publié plus tard comme le livre *Accelerate* par Nicole Forsgren, Jez Humble et Gene Kim, qui a sondé des dizaines de milliers de professionnels de l'ingénierie pour trouver quelles pratiques de livraison corrèlent avec la performance organisationnelle. Le résultat fut quatre métriques, jumelées deux par deux : la fréquence de déploiement et le temps d'exécution pour les changements mesurent la vitesse ; le taux d'échecs de changement et le temps de récupération après déploiement échoué, souvent raccourci en temps moyen de récupération (MTTR), mesurent la stabilité. La découverte de recherche qui a rendu le cadre significatif fut que les plus performants étaient rapides et stables simultanément, renversant l'hypothèse que la vitesse et la sécurité s'échangent l'une contre l'autre, et cette découverte reste l'exemple pratique le plus clair que ce livre ait du principe de jumelage avec garde-fou du chapitre 1.2 : une métrique de vitesse incitative, jumelée avec un garde-fou de stabilité, est ce que font réellement les organisations les plus performantes.

Ce livre couvre DORA en dernier dans cette partie, délibérément, plutôt que comme cadre organisateur de la partie. Ce placement n'est pas un rejet de la recherche, qui reste authentiquement rigoureuse et valant la peine d'être utilisée. Il reflète une limitation spécifique et réelle : DORA mesure à quelle vitesse et avec quelle sécurité un pipeline se déplace, mais elle est silencieuse sur ce qui se déplace à travers le pipeline. Une équipe peut afficher d'excellents chiffres DORA pendant que sa production réelle a tranquillement dérivé vers la reprise de défauts ou a privé de capacité le travail de dette technique et de sécurité, un schéma que le Flow Framework des chapitres 2.1 à 2.4 est construit spécifiquement pour faire émerger et que DORA ne peut pas voir. Utilisez DORA tel que ce chapitre le présente : une mesure de référence bien validée mais plus étroite de la mécanique du pipeline, pas l'image complète de la santé de livraison.

Pour les grandes équipes, la valeur authentique restante de DORA est la comparabilité. Une métrique calculée de manière cohérente à partir des données de pipeline et d'incidents permet à une organisation de comparer la capacité de livraison à travers de nombreuses équipes travaillant dans différents domaines sans le problème de comparaison de choses non comparables qui afflige la plupart des comparaisons inter-équipes. Les organisations d'entreprise l'utilisent encore pour prioriser l'investissement de plateforme ; les organisations gouvernementales l'utilisent encore pour démontrer, avec des preuves, qu'un programme de modernisation a mesurablement amélioré la mécanique de livraison. Traitez cela comme le rôle propre et limité de DORA, et utilisez les chapitres du Flow Framework plus tôt dans cette partie pour la question plus large de si les bonnes choses sont livrées du tout.

## Principes clés

- **DORA mesure le pipeline, pas la valeur qui y circule.** Le chapitre 2.1 nomme cet écart directement ; utilisez la distribution de flux (chapitre 2.3) pour voir ce que DORA ne peut pas.
- **La vitesse et la stabilité sont mesurées ensemble, jamais séparément.** Un tableau de bord informé par DORA sans les deux moitiés n'utilise pas vraiment le cadre.
- **La cohérence de définition importe plus que le chiffre brut.** Une équipe passant de la performance « moyenne » à « élevée » sur une métrique définie de manière cohérente est un signal réel ; comparer deux équipes calculées différemment ne l'est pas.
- **DORA mesure le système, pas les individus.** Appliquer ces métriques à des ingénieurs individuels casse la base statistique du cadre et invite exactement la manipulation contre laquelle met en garde le chapitre 1.2.
- **Les quatre métriques sont des représentants, pas des buts.** Elles corrèlent avec la performance organisationnelle ; poursuivre le chiffre lui-même, détaché d'une véritable amélioration de livraison, défait le but du cadre.

## Recommandations

### Instrumentez la fréquence de déploiement depuis le pipeline, en ne comptant que les sorties en production

La **fréquence de déploiement** mesure à quelle fréquence une équipe sort avec succès en production. Comptez seulement les déploiements de production réussis, instrumentés automatiquement depuis les données de pipeline CI/CD, jamais auto-déclarés. Surveillez spécifiquement la manipulation de substitution, diviser un changement significatif en plusieurs déploiements triviaux purement pour gonfler le compte, en suivant la taille de déploiement aux côtés de la fréquence : une taille moyenne en rétrécissement à côté d'un compte en hausse est le signe le plus clair que cela se produit.

### Instrumentez le temps d'exécution pour les changements depuis le premier commit jusqu'à la production

Le **temps d'exécution pour les changements** mesure le temps depuis le premier commit d'un changement de code jusqu'à son déploiement réussi en production. Rapportez à la fois la médiane et un percentile élevé, pas seulement une moyenne, suivant le conseil du chapitre 1.6 sur les données asymétriques basées sur le temps, et surveillez la dérive de définition à l'un ou l'autre point final, qui flatte le chiffre sans aucune véritable amélioration.

### Définissez le taux d'échecs de changement par écrit avant de comparer entre équipes

Le **taux d'échecs de changement** mesure le pourcentage de déploiements qui causent un échec nécessitant une remédiation, un retour en arrière, un correctif urgent, ou un incident. C'est le plus difficile des quatre à définir de manière cohérente, parce que « échec » n'est pas objectif de manière évidente. Accordez-vous sur une définition écrite avant de comparer des équipes ; sans cela, une comparaison apparemment équitable peut induire gravement en erreur. Surveillez une amélioration suspicieusement rapide sans changement de processus sous-jacent derrière elle, le signe le plus clair de manipulation de définition plutôt que de progrès authentique.

### Mesurez le temps de récupération depuis la détection, pas depuis l'événement de déploiement

Le **temps de récupération après déploiement échoué** mesure combien de temps il faut pour restaurer le service une fois qu'un déploiement cause un échec. Démarrez l'horloge à la détection, pas à l'événement de déploiement lui-même, pour que le chiffre reflète un véritable délai de récupération plutôt qu'un écart de surveillance. Investissez spécifiquement dans la capacité de retour en arrière automatisé, le levier unique le plus commun pour améliorer authentiquement cette métrique plutôt qu'en déclarant un incident résolu prématurément.

### Utilisez les métriques de flux, pas DORA, pour diagnostiquer pourquoi un chiffre a bougé

Quand une métrique DORA change, les quatre chiffres seuls expliquent rarement pourquoi. Utilisez la décomposition de temps de cycle (chapitre 2.6), la charge de flux (chapitre 2.4), et la distribution de flux (chapitre 2.3) comme couche diagnostique sous les chiffres sommaires de DORA, et n'utilisez jamais une métrique DORA dans une évaluation de performance individuelle, le mauvais usage unique le plus dommageable auquel ce cadre est exposé.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Cadre DORA complet, les quatre métriques jumelées | Validé par la recherche, résiste à la manipulation par le jumelage, permet une comparaison inter-équipes équitable | Silencieux sur quel genre de valeur est livrée ; nécessite le Flow Framework à ses côtés pour cette image |
| DORA comme seul ensemble de métriques organisateur de cette partie | Simple, familier à la plupart des dirigeants d'ingénierie | Manque entièrement la question du mélange de valeur, la raison de ce livre pour le dépriorisier ici |
| DORA plus Flow Framework ensemble | Mécanique du pipeline et mélange de valeur tous deux visibles | Nécessite de maintenir deux vocabulaires de métriques au lieu d'un |
| DORA appliqué au niveau individuel | Semble directement actionnable pour certains managers | Casse la validité statistique du cadre ; forte exposition à la loi de Goodhart |

La tension centrale est **rigueur mécanique contre lisibilité commerciale**. Les quatre métriques de DORA sont précisément définies et validées par la recherche, ce qui les rend excellentes pour comparer la performance de pipeline entre équipes, mais cette même précision est limitée étroitement au pipeline lui-même et ne dit rien sur si le bon travail y circule. Résolvez la tension en gardant DORA comme couche de référence pour la santé du pipeline, la place propre du chapitre 2.10 dans la structure de ce livre, tout en utilisant les chapitres du Flow Framework plus tôt dans cette partie pour la question orientée entreprise du mélange de valeur, plutôt que d'essayer de faire répondre DORA à une question pour laquelle elle n'a jamais été conçue.

## Questions à discuter avec votre équipe

1. **Instrumentons-nous les quatre métriques DORA depuis le pipeline, ou certaines sont-elles des estimations auto-déclarées ?** Un cadre construit sur une mesure objective et validée par la recherche perd beaucoup de sa valeur au moment où un chiffre devient une meilleure estimation. Auditez la source de données réelle de chaque métrique (chapitre 1.5).

2. **Toutes les équipes que nous comparons en utilisant les métriques DORA partagent-elles les mêmes définitions de déploiement, changement et échec ?** Une comparaison entre équipes utilisant des définitions différentes n'est pas vraiment une comparaison, et peut produire des jugements injustes sur la performance relative.

3. **Quelqu'un dans notre organisation a-t-il utilisé une métrique DORA dans une évaluation de performance individuelle, formellement ou informellement ?** C'est le mauvais usage unique le plus dommageable du cadre et cela arrive souvent tranquillement. Demandez directement et soyez prêts pour une réponse inconfortable mais nécessaire.

4. **Nos chiffres DORA pourraient-ils être excellents pendant que notre distribution de flux (chapitre 2.3) a tranquillement dérivé vers la reprise ou loin des fonctionnalités ?** C'est précisément l'écart que DORA seule ne peut pas voir. Rassemblez les deux ensembles de chiffres et vérifiez s'ils racontent une histoire cohérente.

5. **Quand l'une de nos métriques DORA bouge, avons-nous les diagnostics de métriques de flux pour expliquer pourquoi ?** Un chiffre DORA seul vous dit que quelque chose a changé, pas quoi. Vérifiez si vos équipes peuvent répondre « pourquoi le temps d'exécution a-t-il augmenté ce mois-ci » avec des données, ou seulement avec de la spéculation.

6. **Comment nos quatre chiffres DORA changeraient-ils si nous essayions délibérément de manipuler chacun d'eux, et le remarquerions-nous ?** Parcourez la fréquence de déploiement, le temps d'exécution, le taux d'échecs de changement, et le temps de récupération un par un, l'application pratique de la discipline centrale du chapitre 1.2 à ce cadre spécifique.

## Regard sectoriel

**Startup.** Les métriques de vitesse de DORA viennent généralement naturellement à une petite équipe déployant déjà fréquemment ; la discipline plus difficile est d'instrumenter honnêtement le taux d'échecs de changement et le temps de récupération plutôt que de supposer la stabilité parce que rien ne s'est encore gravement cassé. Jumeler DORA avec même une répartition informelle d'éléments de flux (chapitre 2.2) tôt évite de construire un faux sentiment de santé de livraison autour de la seule vitesse de pipeline.

**Petite entreprise.** La plupart des plateformes modernes de CI/CD et de contrôle de version exportent les données de fréquence de déploiement et de temps d'exécution avec une configuration minimale ; lier les déploiements aux incidents pour le taux d'échecs de changement nécessite typiquement plus d'effort manuel. Commencez avec les deux métriques de vitesse et ajoutez le suivi de stabilité dès qu'un journal d'incidents informel existe pour s'y lier.

**Grande entreprise.** La plus grande valeur restante de DORA à cette échelle est une comparaison inter-équipes équitable et cohérente pour les décisions d'investissement de plateforme. Standardisez les définitions à l'échelle de l'organisation (chapitre 1.4), automatisez l'instrumentation centralement, et jumelez chaque rapport DORA avec une vue de distribution de flux pour que la direction voie à la fois la vitesse de pipeline et le mélange de valeur ensemble, pas l'un sans l'autre.

**Gouvernement.** Les métriques DORA donnent toujours à un programme de modernisation une manière défendable et étayée par la recherche de démontrer l'amélioration de la mécanique de livraison aux organes de surveillance. Rapportez les quatre métriques ensemble, sans jamais ne choisir que la moitié flatteuse, et jumelez-les avec la distribution de flux pour que le rapport réponde aussi à la question plus difficile et plus importante de ce que le pipeline plus rapide livre réellement.

## Exemples

**Grande entreprise.** Le programme de modernisation de plateforme d'une grande entreprise de télécommunications a instrumenté les quatre métriques DORA de manière cohérente à travers quarante équipes produit et a montré un véritable mouvement des bandes de performance basse vers élevée en dix-huit mois, fréquence de déploiement en hausse d'environ dix fois, temps d'exécution réduit de semaines à jours, taux d'échecs de changement resté plat. Un membre du conseil d'administration, examinant la présentation, a posé une question que les chiffres DORA seuls ne pouvaient pas répondre : quelle part de cette livraison plus rapide était de la nouvelle valeur client contre de la reprise. L'organisation d'ingénierie n'avait pas de réponse jusqu'à ce qu'elle adopte la classification des éléments de flux le trimestre suivant, qui a montré que le travail de fonctionnalités avait en fait baissé comme part de la production totale même pendant que les chiffres de vitesse de DORA s'amélioraient, une découverte qui a reformé les priorités de l'année suivante du programme.

**Gouvernement.** Le bureau de modernisation informatique d'un gouvernement d'État a adopté les métriques DORA comme condition contractuelle pour comparer la capacité de livraison de plusieurs équipes de fournisseurs concurrentes, un usage efficace de la comparabilité du cadre. La fréquence de déploiement élevée d'un fournisseur s'est révélée, une fois que le taux d'échecs de changement fut exigé à ses côtés, corréler avec un taux d'échec presque trois fois plus élevé que ses pairs, une information qui a directement informé la décision de renouvellement de contrat du bureau. Le bureau a plus tard ajouté une exigence de distribution de flux aux mêmes contrats après avoir découvert que le fournisseur avec les meilleurs chiffres DORA était aussi celui dépensant la plus petite part de capacité sur le travail de remédiation de sécurité que le contrat exigeait spécifiquement.

## Argumentaire économique : motivations, ROI et TCO

Le retour de l'adoption de DORA bien, dans sa portée propre, est une réponse défendable et basée sur les preuves à « notre pipeline de livraison devient-il plus rapide et plus sûr », qui reste l'une des questions les plus traitables en ingénierie à répondre avec confiance. Cette réponse justifie l'investissement de plateforme et d'outillage avec de vrais chiffres, et permet à la direction de comparer des investissements concurrents sur une base équitable et cohérente, exactement comme elle l'a toujours fait.

Le coût total de possession est le travail d'intégration liant les événements de déploiement aux enregistrements d'incidents pour le taux d'échecs de changement et le temps de récupération, non négligeable à travers un paysage d'outillage grand et hétérogène. Le coût supplémentaire de jumeler DORA avec les chapitres du Flow Framework plus tôt dans cette partie est comparativement petit, puisque la classification des éléments de flux est une convention de rapport superposée au travail existant, pas un système de mesure parallèle, et le retour, attraper exactement l'angle mort de mélange de valeur que l'exemple des télécommunications ci-dessus illustre, vaut bien cet investissement supplémentaire modeste.

## Antipatrons et pièges

- **Traiter DORA comme l'image complète de la santé de livraison :** le vecteur de manipulation que le placement de ce chapitre est conçu pour contrer. Une organisation peut présenter des chiffres DORA authentiquement excellents, déploiements rapides, fréquents, stables, pendant que sa valeur réellement livrée a tranquillement dérivé vers la reprise ou loin des fonctionnalités, et les quatre métriques de DORA seules ne révéleront jamais ce changement parce qu'elles n'ont jamais été conçues pour le mesurer. Le garde-fou est de jumeler chaque rapport DORA avec la distribution de flux (chapitre 2.3), pour qu'un pipeline rapide et stable livrant le mauvais mélange de travail soit visible plutôt que confondu avec une véritable santé de livraison.
- **Rapporter seulement la moitié vitesse de DORA :** défait la découverte centrale du cadre que la vitesse et la stabilité bougent ensemble chez les plus performants.
- **Utiliser les métriques DORA dans les évaluations de performance individuelles :** casse la validité statistique du cadre et invite une forte manipulation.
- **Comparer des équipes avec des définitions incohérentes :** produit des comparaisons qui ont l'air équitables mais ne le sont pas.
- **Chiffres DORA auto-déclarés au lieu d'instrumentés par le pipeline :** introduit exactement le biais que le cadre était conçu pour éliminer.
- **Traiter DORA comme diagnostique plutôt que sommaire :** laisse une équipe incapable d'expliquer pourquoi un chiffre a bougé sans la couche de métriques de flux sous-jacente.

## Modèle de maturité

- **Niveau 1, Initiation :** Les métriques DORA, si suivies, sont auto-déclarées, définies de manière incohérente, et jamais jumelées avec les données de flux.
- **Niveau 2, Développement :** Certaines équipes instrumentent DORA depuis le pipeline, mais les définitions varient et il n'y a pas de contrepartie de distribution de flux contre laquelle vérifier.
- **Niveau 3, Standardisation :** Les quatre métriques DORA sont instrumentées de manière cohérente depuis les données de pipeline et d'incidents, avec des définitions partagées, et sont routinièrement montrées aux côtés de la distribution de flux.
- **Niveau 4, Gestion :** DORA et les métriques de flux sont revues ensemble comme jumelage standard à chaque niveau de l'organisation, et DORA n'est jamais utilisée pour l'évaluation individuelle.
- **Niveau 5, Orchestration :** L'organisation peut pointer vers des cas spécifiques où la distribution de flux a attrapé un problème de mélange de valeur que d'excellents chiffres DORA seuls avaient dissimulé, et utilise délibérément les deux cadres pour les questions distinctes que chacun répond.

## Idées de discussion

1. Où nos quatre métriques DORA nous placent-elles actuellement sur le spectre des niveaux de performance, honnêtement ?
2. Nos chiffres DORA pourraient-ils avoir l'air excellents pendant que notre distribution de flux a tranquillement dérivé ? Avons-nous déjà vérifié ?
3. Quelqu'un a-t-il déjà utilisé un chiffre DORA pour juger un individu, même informellement ?
4. Si un concurrent publiait ses chiffres DORA, les nôtres se compareraient-ils favorablement, et cette comparaison nous dirait-elle réellement qui livre plus de valeur réelle ?

## Points clés à retenir

- Les quatre métriques de DORA, **fréquence de déploiement, temps d'exécution, taux d'échecs de changement et temps de récupération**, jumellent la vitesse avec la stabilité par conception et restent authentiquement validées par la recherche.
- Ce livre place DORA **en dernier dans cette partie** parce qu'elle mesure le pipeline, pas la valeur qui y circule ; jumelez-la avec la distribution de flux (chapitre 2.3) pour l'image plus complète.
- Le vecteur de manipulation central du chapitre est **confondre d'excellents chiffres DORA avec une santé de livraison complète** ; le garde-fou est de toujours rapporter DORA aux côtés de la distribution de flux.
- **N'utilisez jamais les métriques DORA dans les évaluations de performance individuelles** ; la validité du cadre dépend d'une mesure au niveau système, pas individuel.
- Utilisez les **métriques de flux comme couche diagnostique** sous les chiffres sommaires de DORA quand l'un d'eux bouge.

## Sources et lectures complémentaires

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. Programme DevOps Research and Assessment. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
