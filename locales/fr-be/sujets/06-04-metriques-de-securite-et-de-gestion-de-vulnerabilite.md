# 6.4 Métriques de sécurité et de gestion de vulnérabilité

## Vue d'ensemble et motivation

Ce sujet clôt la Partie 6 en étendant la même discipline de fiabilité que cette partie a construite, fixation de cible, association de garde-fou, rapport d'incident honnête, à un risque distinct mais étroitement lié : pas si un système échoue de lui-même, mais si quelqu'un le fait échouer, ou l'exploite, délibérément. Les métriques de **gestion de vulnérabilité** mesurent à quel point une organisation trouve et corrige les faiblesses de sécurité avant qu'elles ne soient exploitées : combien de vulnérabilités existent, à quel point elles sont sévères, et de manière cruciale, à quelle vitesse elles sont remédiées une fois découvertes, puisqu'une vulnérabilité connue mais non corrigée est un risque permanent et quantifiable que l'organisation a choisi de porter, que ce soit délibérément ou par négligence.

La préoccupation centrale de ce sujet reflète directement le traitement des constats d'analyse statique du sujet 4.4 : un compte brut de vulnérabilités est une mauvaise métrique, mélangeant des problèmes triviaux et critiques, et il est exposé exactement aux mêmes risques de manipulation, restriction de définition, suppression, et manipulation de seuil, que le sujet 1.2 décrit en général. L'ajout spécifique que les métriques de sécurité nécessitent est le temps de remédiation suivi contre la sévérité, puisqu'une vulnérabilité critique restant non corrigée pendant des mois représente un risque fondamentalement différent de la même vulnérabilité attrapée et corrigée en une journée, une information qu'un simple compte seul ne peut pas transmettre.

Pour les grandes équipes, les métriques de sécurité portent des conséquences au-delà du risque technique immédiat : les organisations de grande entreprise font face à une exposition contractuelle et réputationnelle d'une violation, et les organisations de gouvernement font face à des conséquences de sécurité nationale, légales, et de confiance publique qui font des métriques de sécurité une question d'intérêt public authentique, pas simplement une préoccupation d'ingénierie interne. Ce sujet traite la gestion de vulnérabilité avec la même rigueur et la même discipline d'association de garde-fou que ce livre applique tout du long, parce que les métriques de sécurité sont exposées à chaque risque de manipulation que ce livre décrit, avec des enjeux correspondamment plus élevés quand cette manipulation réussit.

## Principes clés

- **Le temps de remédiation par sévérité compte plus qu'un compte brut de vulnérabilités.** Un problème critique non corrigé pendant des mois est un risque fondamentalement différent du même problème attrapé et corrigé rapidement.
- **Les métriques de sécurité sont exposées aux mêmes risques de manipulation que les constats d'analyse statique** (sujet 4.4), avec des enjeux plus élevés quand la manipulation réussit.
- **La classification de sévérité nécessite des critères externes et standardisés** là où possible, pas un jugement purement interne qui peut dériver vers le laxisme.
- **Une vulnérabilité divulguée et corrigée rapidement est un signe de processus sain, pas un échec à cacher.** Punir la divulgation décourage le rapport dont tout ce système dépend.
- **La dette de sécurité est une catégorie de dette technique** (sujet 4.5) et devrait concourir pour une capacité de remédiation priorisée sur la même base explicite et quantifiée.

## Recommandations

### Suivez le temps de remédiation par sévérité comme métrique primaire

Pour chaque vulnérabilité découverte, enregistrez sa sévérité (en utilisant une échelle standardisée telle que le [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System), CVSS, où applicable) et suivez le temps de la découverte jusqu'à la remédiation authentique, pas jusqu'à ce qu'un ticket soit fermé ou qu'une correction soit fusionnée mais pas encore déployée. Fixez des cibles de temps de remédiation explicites par sévérité, communément mesurées en jours pour les problèmes critiques et en semaines pour les moins sévères, et suivez la conformité contre ces cibles comme métrique de santé de sécurité primaire, plutôt qu'un compte brut et non pondéré de vulnérabilités.

### Utilisez un scoring de sévérité standardisé plutôt qu'un jugement purement interne

Là où un système de scoring externe standardisé comme CVSS est disponible, utilisez-le comme base primaire pour la classification de sévérité plutôt que de reposer entièrement sur un jugement interne et potentiellement incohérent. Cela reflète la discipline de classification de défaut échappé du sujet 5.1 et la discipline de classification d'incident du sujet 6.2, appliquée ici spécifiquement à la sécurité, et cela résiste au même risque de dérive laxiste contre lequel ces sujets mettent en garde, puisqu'un score ancré externement est plus difficile à redéfinir discrètement vers le bas qu'un purement interne.

### Construisez une culture de divulgation de vulnérabilité et de rapport interne authentiquement non punitive

Appliquez directement le principe de post-mortem sans blâme du sujet 6.2 à la sécurité : un ingénieur qui découvre et rapporte une vulnérabilité qu'il a introduite, ou un chercheur qui divulgue de manière responsable une trouvée externement, devrait être traité comme fournissant un service précieux, pas comme confessant un échec. Punir la divulgation, en interne ou de chercheurs externes, décourage de manière fiable exactement le rapport dont tout le système de gestion de vulnérabilité dépend, poussant le véritable risque vers la clandestinité plutôt que vers un processus de remédiation géré.

### Traitez la dette de sécurité comme une catégorie au sein de votre arriéré de dette technique

Intégrez les vulnérabilités connues et à risque accepté, celles délibérément pas encore remédiées en raison de priorités concurrentes, dans le même arriéré de dette technique visible et quantifié décrit dans le sujet 4.5, avec le même cadrage coût-de-correction contre coût-de-portage. Cela empêche le risque de sécurité soit de disparaître dans un statut invisible et non documenté « nous le savons » soit de concourir injustement contre le travail de fonctionnalités sans un dossier explicite et quantifié pour sa priorité.

### Combinez les métriques de vulnérabilité avec le contexte d'exposition et d'exploitabilité

Toute vulnérabilité avec le même score de sévérité nominal ne porte pas le même risque réel : une vulnérabilité critique dans un outil interne sans exposition réseau externe est un risque différent de la même sévérité nominale dans un service exposé à Internet gérant des données clients. Là où faisable, pondérez la priorisation par le contexte d'exposition et d'exploitabilité réel, pas le score de sévérité seul, afin que la capacité de remédiation se concentre d'abord sur les éléments authentiquement au risque le plus élevé.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Compte brut de vulnérabilités | Simple à rapporter | Mélange des problèmes triviaux et critiques ; facilement manipulé par suppression |
| Suivi pondéré par sévérité, temps de remédiation | Reflète l'exposition au risque réel dans le temps | Nécessite une classification et un suivi disciplinés et cohérents |
| Jugement de sévérité purement interne | Flexible, adapté au contexte | Sujet à la dérive laxiste et à l'incohérence entre équipes |
| Scoring externe standardisé (par exemple, CVSS) plus pondération contextuelle | Cohérent, ancré externement, résiste à la manipulation | Nécessite une analyse de contexte supplémentaire pour une priorisation authentiquement précise |

La tension centrale est **la cohérence contre le contexte**. Une approche de scoring purement standardisée est cohérente et résistante à la manipulation mais peut manquer un contexte authentique, exposition et exploitabilité, qui détermine le risque réel ; une approche purement contextuelle et jugée en interne capture la nuance mais est sujette au même risque de dérive laxiste contre lequel ce livre met en garde pour toute autre métrique dépendante de classification. Résolvez la tension en vous ancrant sur le scoring standardisé comme référence cohérente, puis en appliquant une pondération contextuelle documentée et auditable par-dessus, plutôt que l'un ou l'autre extrême seul.

## Questions à discuter avec votre équipe

1. **Suivons-nous le temps de remédiation par sévérité, ou seulement un compte brut de vulnérabilités ?** Sortez votre métrique actuelle réelle et vérifiez si elle distingue un problème critique restant non corrigé pendant des mois d'un corrigé en une journée, puisqu'un compte brut traite ces situations très différemment risquées de manière identique.

2. **Utilisons-nous un système de scoring de sévérité externe standardisé, ou la classification repose-t-elle sur un jugement purement interne et potentiellement incohérent ?** Si purement interne, discutez de ce que l'adoption d'un standard comme CVSS changerait à votre pratique de classification actuelle.

3. **Un ingénieur qui a introduit puis rapporté une vulnérabilité se sentirait-il en sécurité de le faire, ou craindrait-il la punition ?** C'est la version directe et spécifique à la sécurité de la question de culture sans blâme du sujet 6.2, et une réponse honnête ici compte énormément pour savoir si vos données de vulnérabilité peuvent être dignes de confiance du tout.

4. **Avons-nous un arriéré visible et quantifié de vulnérabilités connues et à risque accepté, ou le statut « nous le savons » devient-il discrètement invisible et non adressé dans le temps ?** Vérifiez si votre dette de sécurité est suivie avec la même rigueur que votre arriéré de dette technique général (sujet 4.5).

5. **Notre priorisation de remédiation prend-elle en compte l'exposition et l'exploitabilité réelles, ou repose-t-elle purement sur un score de sévérité nominal indépendamment du contexte ?** Choisissez un exemple réel où deux vulnérabilités avec une sévérité nominale similaire portaient un risque réel très différent, et discutez de si votre processus actuel les aurait priorisées correctement.

6. **Une classification de sévérité de vulnérabilité a-t-elle déjà dérivé vers le bas dans le temps sans justification claire ?** Cela reflète le schéma de manipulation de définition contre lequel les sujets 1.2 et 6.2 mettent tous deux en garde ; auditez un échantillon de vos classifications récentes pour ce risque spécifique.

## Regard sectoriel

**Startup.** Les processus formels de gestion de vulnérabilité sont souvent inutiles très tôt, mais adopter un scan de dépendance automatisé de base et une norme de rapport interne simple et honnête dès le début coûte peu et empêche la dette de sécurité de s'accumuler invisiblement avant que l'équipe n'ait la capacité de l'adresser systématiquement.

**Petite entreprise.** La plupart des plateformes de développement modernes incluent un scan de vulnérabilité automatisé gratuit ou peu coûteux pour les dépendances ; activez cela tôt et suivez le temps de remédiation pour tout ce qui est signalé comme critique, même sans fonction de sécurité dédiée ni outillage sophistiqué.

**Grande entreprise.** Le scoring de sévérité cohérent et standardisé et une culture de divulgation authentiquement non punitive sont tous deux essentiels et tous deux plus difficiles à maintenir à l'échelle, où l'incohérence à travers des dizaines d'équipes et la dérive culturelle vers la recherche de blâme après un incident sérieux sont des risques constants. Investissez dans une fonction de gouvernance de sécurité dédiée pour maintenir la cohérence de classification et protéger activement la culture de divulgation.

**Gouvernement.** Les métriques de sécurité ici recoupent souvent directement la sécurité nationale, la conformité réglementaire, et la confiance publique, et une vulnérabilité sérieuse et mal gérée peut avoir des conséquences bien au-delà d'une violation typique du secteur privé. Maintenez une classification de sévérité rigoureuse et ancrée externement, protégez activement la culture de divulgation interne et externe, et traitez la dette de sécurité avec la transparence et la rigueur de priorisation que ce sujet recommande, puisqu'une vulnérabilité critique non documentée et discrètement acceptée dans une infrastructure publique est un risque authentiquement sérieux et auditable.

## Exemples

**Grande entreprise.** L'équipe de sécurité d'une entreprise de logiciels avait, pendant des années, rapporté seulement un compte brut de vulnérabilités à la direction, un chiffre qui avait tendance à être plat, donnant un faux sentiment de stabilité. Une analyse révisée pondérée par sévérité et de temps de remédiation a révélé que bien que le compte total soit plat, les vulnérabilités critiques prenaient en moyenne plus de quatre-vingt-dix jours à remédier, bien au-delà de toute cible raisonnable, parce qu'elles concouraient sans succès contre le travail de fonctionnalités à chaque cycle de planification sans capacité dédiée et protégée. Établir une cible stricte de remédiation de 7 jours pour les vulnérabilités critiques, soutenue par une capacité de remédiation de dette de sécurité protégée reflétant le modèle d'allocation de dette technique du sujet 4.5, a fait descendre le temps de remédiation critique moyen à moins de cinq jours en deux trimestres.

**Gouvernement.** Une agence d'infrastructure nationale a découvert, suivant un audit de sécurité externe, que des ingénieurs internes évitaient informellement de rapporter les vulnérabilités qu'ils découvraient dans leur propre code, craignant que cela ne nuise à leurs évaluations de performance, un parallèle clair au schéma de sous-rapport d'incident conduit par le blâme du sujet 6.2. L'agence a instauré une politique explicite et publiquement communiquée protégeant les rapporteurs internes de vulnérabilités de toute conséquence de performance, modelée directement sur la pratique de réponse à incident sans blâme, et les rapports de vulnérabilité internes ont substantiellement augmenté dans l'année suivante, un résultat que la direction de l'agence a correctement interprété comme preuve d'une détection et d'un rapport honnête améliorés, pas preuve d'une qualité de code en déclin, évitant la conclusion naturelle mais erronée qu'un chiffre en hausse devait signifier que les choses avaient empiré.

## Argumentaire économique : motivations, ROI et TCO

Le retour d'une gestion de vulnérabilité rigoureuse, bien classée, et honnêtement rapportée est un coût de violation évité, qui pour un incident de sécurité sérieux dépasse fréquemment de loin le coût de la remédiation proactive, aux côtés d'un dommage réglementaire, contractuel, et réputationnel évité. L'exemple de l'entreprise de logiciels ci-dessus montre le mécanisme spécifique : la dette de sécurité perdait silencieusement la compétition de priorisation contre le travail de fonctionnalités depuis des années, exactement le schéma contre lequel le sujet 4.5 met en garde pour la dette technique en général, jusqu'à ce qu'une capacité de remédiation protégée le corrige directement.

Le coût total de possession inclut l'outillage de scan automatisé, la capacité de remédiation protégée que ce sujet recommande d'allouer, et l'investissement culturel soutenu dans la pratique de divulgation non punitive. Ce coût est modeste comparé au coût d'une vulnérabilité sérieuse et exploitée avec succès qu'une remédiation proactive et bien priorisée aurait attrapée et corrigée bien avant qu'elle ne puisse être exploitée.

## Antipatrons et pièges

- **Suivre seulement un compte brut de vulnérabilités :** mélange des problèmes triviaux et critiques et donne un faux sentiment de stabilité ou de crise indépendamment du risque réel.
- **Classification de sévérité purement interne et non standardisée :** sujette à la dérive laxiste et à l'incohérence entre équipes.
- **Punir la divulgation de vulnérabilité, interne ou externe :** pousse le véritable risque vers la clandestinité plutôt que vers un processus de remédiation géré.
- **Dette de sécurité sans arriéré visible et quantifié :** perd la compétition de priorisation contre le travail de fonctionnalités par défaut.
- **Prioriser par score de sévérité nominal seul, ignorant le contexte d'exposition et d'exploitabilité :** mal dirige une capacité de remédiation limitée.
- **Interpréter un compte de rapport de vulnérabilité en hausse comme preuve de qualité en déclin sans vérifier si le rapport lui-même s'est amélioré :** une instance spécifique du piège de variable confondante du sujet 1.6.

## Modèle de maturité

- **Niveau 1, Initiation :** Les vulnérabilités sont suivies, le cas échéant, comme un compte brut sans pondération de sévérité, sans suivi de temps de remédiation, et avec une culture de divulgation punitive.
- **Niveau 2, Développement :** Une certaine classification de sévérité existe, mais les standards sont incohérents et le temps de remédiation n'est pas suivi contre des cibles explicites.
- **Niveau 3, Standardisation :** Le scoring de sévérité standardisé et ancré externement et des cibles de temps de remédiation explicites par sévérité sont appliqués de manière cohérente, avec une culture de divulgation authentiquement non punitive.
- **Niveau 4, Gestion :** La dette de sécurité est suivie dans un arriéré visible et quantifié avec une capacité de remédiation protégée ; la priorisation prend en compte le contexte d'exposition et d'exploitabilité, pas la sévérité seule.
- **Niveau 5, Orchestration :** L'organisation peut pointer vers des réductions spécifiques et mesurables du temps de remédiation critique et peut démontrer une culture de divulgation soutenue et fiable qui produit des données de vulnérabilité honnêtes et complètes.

## Idées pour la discussion

1. Quel est notre temps de remédiation moyen actuel pour les vulnérabilités critiques, et atteint-il une cible explicite ?
2. Un ingénieur qui a introduit une vulnérabilité se sentirait-il en sécurité de la rapporter lui-même ?
3. Avons-nous un arriéré visible et quantifié de dette de sécurité connue et à risque accepté ?
4. Notre priorisation de remédiation prend-elle en compte l'exposition réelle, ou seulement la sévérité nominale ?
5. Une classification de sévérité a-t-elle déjà dérivé vers le bas dans le temps sans justification claire ?

## Points clés à retenir

- Suivez le **temps de remédiation par sévérité**, pas un compte brut de vulnérabilités, comme métrique de santé de sécurité primaire.
- Utilisez un **scoring de sévérité externe standardisé** (comme CVSS) comme référence cohérente, résistante au risque de dérive laxiste qu'un jugement purement interne invite.
- Construisez une **culture de divulgation authentiquement non punitive** ; punir le rapport pousse le véritable risque vers la clandestinité.
- Traitez la **dette de sécurité comme une catégorie de dette technique** (sujet 4.5), concourant équitablement pour une capacité de remédiation protégée.
- Pondérez la priorisation par **l'exposition et l'exploitabilité réelles**, pas le score de sévérité seul.

## Sources et lectures complémentaires

- La spécification du Common Vulnerability Scoring System (CVSS) de FIRST.org : le cadre de scoring de sévérité standardisé référencé tout au long de ce sujet.
- Les ressources de l'OWASP Foundation sur la gestion de vulnérabilité et la pratique de cycle de vie de développement logiciel sécurisé.
- *Site Reliability Engineering: How Google Runs Production Systems*, par Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds. (les principes de culture sans blâme que ce sujet applique à la divulgation de sécurité).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management Planning* : conseils faisant autorité sur la pratique de remédiation de vulnérabilité.
