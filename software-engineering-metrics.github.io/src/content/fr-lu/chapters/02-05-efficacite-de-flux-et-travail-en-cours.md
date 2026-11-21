# 2.5 Efficacité de flux et travail en cours

## Vue d'ensemble et motivation

L'**efficacité de flux** est le ratio du temps actif au temps total pour un morceau de travail : si un changement passe dix heures activement codé, revu et testé, mais reste inactif dans des files d'attente pendant quatre-vingt-dix heures au total sur tout son parcours, l'efficacité de flux est de 10 %. La plupart des pipelines de livraison de logiciels, mesurés honnêtement, se situent quelque part entre 10 % et 25 % d'efficacité de flux, ce qui surprend les gens s'attendant à ce que l'effort domine. Le coût dominant dans la plupart des systèmes de livraison n'est pas combien de temps le travail prend à faire, c'est combien de temps le travail attend d'être démarré.

Le **[travail en cours](https://en.wikipedia.org/wiki/Work_in_process)** (WIP) est le compte d'éléments activement travaillés à un moment donné, à travers une équipe ou un système, la même quantité que le sujet 2.4 appelle « charge de flux ». La découverte contre-intuitive derrière ce sujet, soutenue par des décennies de recherche en gestion des opérations et formalisée pour la livraison de logiciel à travers le kanban et la théorie des files d'attente, est que limiter le WIP tend à *augmenter* le débit, pas à le diminuer, parce que moins de travail en vol à la fois signifie moins de changement de contexte, des files plus courtes, et une complétion plus rapide par élément, même si cela semble que faire moins de travail simultanément devrait produire moins de production globalement.

Pour les grandes équipes, comprendre l'efficacité de flux reformule presque chaque problème de livraison de « les gens doivent travailler plus vite » à « le travail doit attendre moins ». Cette reformulation importe parce que le premier cadrage invite la pression sur les individus, exactement le piège contre lequel le sujet 2.6 met en garde, tandis que le second invite l'investigation de la structure des files d'attente, de la capacité de revue, et de combien de travail est démarré simultanément, qui est là où vit généralement la véritable amélioration durable. Les organisations d'entreprise jonglant avec de nombreuses initiatives concurrentes à travers des équipes partagées sont particulièrement sujettes à un WIP élevé et une faible efficacité de flux, parce que démarrer un nouveau travail ressemble toujours à du progrès même quand cela ralentit tranquillement tout ce qui est déjà en vol.

## Principes clés

- **Le temps d'attente, pas l'effort actif, domine la plupart des pipelines de livraison.** Une efficacité de flux sous 25 % est typique, pas un signe d'une équipe défaillante.
- **Limiter le travail en cours tend à augmenter le débit,** pas à le diminuer, en réduisant le changement de contexte et en raccourcissant les files.
- **Démarrer un nouveau travail ressemble à du progrès ; terminer le travail est ce qui livre réellement de la valeur.** Ce ne sont pas la même chose, et les organisations les confondent routinement.
- **Un WIP élevé est souvent invisible jusqu'à ce qu'il soit mesuré.** Une équipe peut jongler avec bien plus de travail concurrent que quiconque ne le réalise individuellement.
- **C'est une métrique au niveau du système, pas une métrique individuelle.** Appliquer des limites de WIP pour punir des individus mal interprète tout le sens de la technique.

## Recommandations

### Mesurez l'efficacité de flux avant de supposer que l'effort est le goulot d'étranglement

Calculez le ratio du temps actif au temps total écoulé pour un échantillon représentatif de changements récents, en utilisant les données d'étape de temps de cycle du sujet 2.6. La plupart des équipes mesurant cela pour la première fois sont surprises de voir à quel point le chiffre est bas, et cette surprise est elle-même précieuse : elle redirige l'attention de « travailler plus dur » vers « réduire la mise en file d'attente », qui est presque toujours le levier le plus productif.

### Établissez une limite explicite de travail en cours et appliquez-la visiblement

Plafonnez le nombre d'éléments qu'une équipe ou un individu peut avoir activement en cours à la fois, visible sur un tableau partagé (un tableau kanban physique ou numérique est l'implémentation classique). Quand la limite est atteinte, la prochaine action de l'équipe est d'aider à terminer quelque chose déjà en vol, pas de démarrer quelque chose de nouveau. Cette pratique unique, empruntée à la fabrication lean et formalisée dans le kanban, est l'une des améliorations de flux les plus constamment efficaces disponibles pour une équipe logicielle, et elle coûte presque rien à mettre en œuvre.

### Traitez une limite de WIP comme une contrainte système, pas un quota individuel

Une limite de WIP gouverne combien de travail le *système* (une équipe, une file de revue partagée, un environnement partagé) a en vol à la fois, pas combien une seule personne est autorisée à toucher. Appliquer la limite comme un quota de performance individuel, « vous ne pouvez avoir que deux tickets ouverts », mal applique la technique et risque exactement le genre de manipulation au niveau individuel contre laquelle ce livre met en garde tout au long. La limite existe pour protéger le flux à travers tout le système, et son application devrait être une norme d'équipe, pas un plafond personnel.

### Investiguez pourquoi le travail reste inactif, pas seulement combien de temps

Quand l'analyse d'efficacité de flux révèle de longs temps d'attente, demandez spécifiquement pourquoi : le travail attend-il parce qu'un réviseur n'est pas disponible, parce qu'un environnement de test partagé est réservé, parce qu'une dépendance envers une autre équipe n'a pas encore atterri. Chacune a une correction différente. Une directive générique « réduire le temps d'attente » sans cette investigation spécifique tend à produire des réponses génériques et inefficaces.

### Surveillez le WIP qui remonte tranquillement après une amélioration initiale

Les équipes qui adoptent avec succès une limite de WIP la voient souvent s'éroder avec le temps à mesure que la pression pour démarrer de nouvelles initiatives revient, « juste cette fois, nous devons aussi démarrer cette chose urgente ». Traitez chaque exception de limite de WIP comme une décision délibérée et visible avec une raison énoncée, pas un contournement tranquille et routinier, pour que la discipline de la limite ne se dégrade pas tranquillement vers son état original.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Aucune limite de WIP | Semble flexible ; aucune friction en démarrant un nouveau travail | Le changement de contexte et la mise en file ralentissent tranquillement tout |
| Limite de WIP au niveau de l'équipe | Améliore le débit et l'efficacité de flux de manière mesurable | Nécessite de la discipline pour l'appliquer, surtout sous pression de délai |
| Quota de WIP au niveau individuel | Simple à énoncer | Mal applique la technique ; risque la manipulation individuelle |
| Limite de WIP stricte et inflexible | Bénéfice maximal d'efficacité de flux | Peut sembler rigide dans des situations authentiquement urgentes et exceptionnelles |

La tension centrale est **flexibilité contre flux**. Démarrer un nouveau travail chaque fois qu'il semble urgent semble réactif, mais la recherche sur l'efficacité de flux et le WIP montre constamment que cette flexibilité vient au coût de terminer quoi que ce soit rapidement, puisque plus de travail concurrent signifie des files plus longues et plus de changement de contexte pour tout ce qui est déjà en vol. Résolvez la tension en adoptant une limite de WIP au niveau de l'équipe comme défaut, avec un processus d'exception délibéré, visible et rare pour les urgences authentiques, plutôt qu'une règle rigide sans exception ou une liberté illimitée et flexible.

## Questions à discuter avec votre équipe

1. **Quelle est notre efficacité de flux réelle, mesurée à partir de vraies données de temps de cycle, et ce chiffre nous surprend-il ?** La plupart des équipes n'ont jamais calculé cela et supposent qu'il est bien plus élevé qu'il ne s'avère l'être. Rassemblez un échantillon de changements récents et calculez le ratio honnêtement avant de discuter de quoi que ce soit d'autre dans ce sujet.

2. **Combien de travail en cours avons-nous réellement en ce moment, à travers toute l'équipe, et quelqu'un connaissait-il ce chiffre avant de compter ?** Un WIP élevé est souvent invisible jusqu'à ce qu'il soit mesuré explicitement, parce que chaque individu ne voit que sa propre tranche de celui-ci. Comptez tout ce qui est actuellement en cours, y compris le travail que personne ne touche activement aujourd'hui.

3. **Si nous adoptions une limite de WIP, que devrait-il changer dans la manière dont nous répondons à une nouvelle demande urgente ?** Cette question fait émerger la vraie habitude organisationnelle, démarrer un nouveau travail par réflexe, qu'une limite de WIP est conçue pour interrompre, et cela vaut la peine d'être discuté avant, pas après, d'essayer d'appliquer une limite.

4. **Quand le travail reste inactif dans notre pipeline, quelle est la raison spécifique, et est-ce la même raison à chaque fois ?** Un sentiment générique que « les choses attendent » est moins utile qu'une cause spécifique et récurrente : un réviseur indisponible, un environnement partagé réservé, une dépendance inter-équipes. Nommez le schéma réel à partir d'exemples récents réels.

5. **Avons-nous déjà adopté une limite de WIP puis l'avons-nous vue s'éroder tranquillement à travers des exceptions ?** C'est extrêmement commun et vaut la peine d'être discuté honnêtement : quelle pression a causé la première exception, et les exceptions sont-elles devenues la nouvelle norme sans que personne ne le décide explicitement.

6. **Une limite de WIP dans notre contexte devrait-elle être appliquée au niveau individuel, de l'équipe, ou de la ressource partagée (comme une file de revue ou un environnement de test) ?** Différents goulots d'étranglement appellent des limites à différents niveaux, et appliquer une limite au mauvais niveau, des quotas individuels au lieu d'un plafond de file partagée, peut mal appliquer toute la technique.

## Regard sectoriel

**Startup.** Avec peu de personnes, le WIP est souvent naturellement bas simplement parce qu'il n'y a pas assez d'ingénieurs pour démarrer beaucoup de travail simultanément. Le risque est l'opposé : un fondateur ou un ingénieur principal jonglant personnellement avec bien plus d'initiatives concurrentes qu'il ne le réalise, ce qui vaut la peine d'être mesuré même sans outillage kanban formel.

**Petite entreprise.** Un simple tableau visible, physique ou un outil numérique basique, avec une limite de colonne explicite suffit pour obtenir la plupart du bénéfice sans investir dans un outillage de métriques de flux sophistiqué. Commencez avec une limite généreuse et resserrez-la graduellement à mesure que l'équipe devient à l'aise avec la discipline.

**Grande entreprise.** Un WIP élevé est particulièrement commun et particulièrement coûteux ici, parce que de nombreuses initiatives stratégiques concurrentes se disputent la même capacité d'ingénierie partagée, et démarrer une nouvelle ressemble toujours à du progrès pour quiconque l'a sponsorisée. Rendez le WIP visible au niveau du portefeuille, pas seulement au niveau de l'équipe, pour que la direction puisse voir le coût de démarrer encore une autre initiative avant de terminer les actuelles.

**Gouvernement.** Les programmes pluriannuels accumulent souvent un WIP implicite énorme à travers de nombreux flux de travail, chacun individuellement justifié, sans visibilité à l'échelle de l'organisation sur le total. Introduire la visibilité du WIP au niveau du portefeuille, même informellement, est souvent l'argument le plus persuasif pour séquencer le travail plutôt que d'exécuter tout en parallèle, puisque le coût d'efficacité de flux d'un WIP élevé s'accumule visiblement une fois mesuré.

## Exemples

**Grande entreprise.** L'équipe de plateforme d'une entreprise de services financiers jonglait avec dix-huit initiatives concurrentes avec seulement douze ingénieurs, un ratio WIP-capacité que personne n'avait réellement calculé jusqu'à ce qu'un nouveau directeur de l'ingénierie le demande directement. L'efficacité de flux à travers le travail de l'équipe mesurait sous 12 %. L'équipe a adopté une limite de WIP explicite d'une initiative active pour deux ingénieurs, mettant délibérément en pause plusieurs initiatives de priorité inférieure plutôt que de continuer à étaler la capacité trop finement. Le débit, mesuré comme les initiatives authentiquement terminées par trimestre, a plus que doublé en deux trimestres, même si l'équipe « faisait visiblement moins » à tout moment donné.

**Gouvernement.** Le programme de transformation numérique d'une agence d'infrastructure nationale avait accumulé plus de quarante flux de travail concurrents à travers son portefeuille, chacun avec son propre sponsor et sa propre justification, sans vue unique du travail en cours total. Une revue d'efficacité de flux au niveau du programme a trouvé que le flux de travail médian passait moins de 15 % de son temps écoulé en développement actif, le reste attendant des ressources partagées : une petite équipe centrale de revue d'architecture, un environnement de test partagé, et une validation inter-agences. Le programme a introduit des limites de WIP explicites au niveau du portefeuille, séquençant les flux de travail plutôt que d'exécuter les quarante en parallèle, et le propre suivi de l'agence a montré une complétion mesurablement plus rapide pour les flux de travail restés actifs, même si le nombre total exécuté à la fois a chuté nettement.

## Argumentaire économique : motivations, ROI et TCO

Le retour de gérer délibérément l'efficacité de flux et le WIP est contre-intuitif mais bien documenté : le débit tend à augmenter, pas diminuer, quand une organisation fait moins à la fois, parce que moins de changement de contexte et des files plus courtes signifient que chaque morceau de travail individuel se termine plus vite. L'exemple des services financiers ci-dessus, un débit doublé grâce à la réduction délibérée du travail concurrent, est un schéma commun une fois que les organisations mesurent réellement et agissent sur l'efficacité de flux plutôt que de supposer que plus de travail parallèle signifie toujours plus de progrès.

Le coût total d'adoption de cette discipline est principalement organisationnel, pas technique : un tableau visible, une limite de WIP convenue, et la discipline de dire non au démarrage d'un nouveau travail quand la limite est atteinte. Cette discipline est plus difficile à soutenir qu'à adopter, c'est pourquoi la recommandation « surveiller le WIP qui remonte » ci-dessus importe autant que l'adoption initiale elle-même.

## Antipatrons et pièges

- **Supposer que l'effort actif domine le temps de livraison sans mesurer l'efficacité de flux :** généralement faux, et cela dirige mal l'effort d'amélioration vers le mauvais levier.
- **Appliquer une limite de WIP comme quota individuel plutôt que contrainte système :** mal applique la technique et risque la manipulation individuelle.
- **Démarrer un nouveau travail par réflexe parce que cela ressemble à du progrès :** l'habitude centrale que l'efficacité de flux et les limites de WIP sont conçues pour interrompre.
- **Laisser les exceptions de limite de WIP devenir routinières et invisibles :** érode la discipline vers son état original sans que personne ne le décide exprès.
- **Mesurer le WIP seulement au niveau de l'équipe, manquant la surcharge au niveau du portefeuille :** commun dans les grandes organisations exécutant de nombreuses initiatives stratégiques concurrentes.
- **Traiter un faible chiffre d'efficacité de flux comme un signe d'une mauvaise équipe :** c'est typique de la plupart des pipelines de livraison et c'est un point de départ pour l'investigation, pas un verdict.

## Modèle de maturité

- **Niveau 1, Initiation :** Le travail en cours n'est pas suivi ; les équipes démarrent un nouveau travail par réflexe sans visibilité sur la charge concurrente totale.
- **Niveau 2, Développement :** Certaines équipes utilisent un tableau informel, mais les limites de WIP ne sont pas appliquées de manière cohérente et l'efficacité de flux n'est jamais calculée.
- **Niveau 3, Standardisation :** Les équipes ont des limites de WIP explicites et visibles au niveau du système, et l'efficacité de flux est mesurée périodiquement à partir de vraies données de temps de cycle.
- **Niveau 4, Gestion :** Les exceptions de limite de WIP sont suivies comme des décisions délibérées et visibles ; l'efficacité de flux est surveillée pour l'érosion dans le temps et investiguée quand elle chute.
- **Niveau 5, Orchestration :** Le WIP est visible et géré au niveau du portefeuille, pas seulement au niveau de l'équipe, et l'organisation peut pointer vers des améliorations de débit spécifiques résultant de la réduction délibérée du travail concurrent.

## Idées de discussion

1. Quelle est notre efficacité de flux réelle, calculée honnêtement à partir de vraies données ?
2. Combien de travail en cours avons-nous actuellement que personne n'avait compté avant cette discussion ?
3. À quoi devrions-nous dire non pour appliquer une vraie limite de WIP ?
4. Quelle est la raison la plus commune pour laquelle le travail reste inactif dans notre pipeline ?
5. Où dans notre organisation le WIP au niveau du portefeuille est-il invisible et probablement trop élevé ?

## Points clés à retenir

- L'**efficacité de flux**, le ratio du temps actif au temps total, est typiquement sous 25 % dans les vrais pipelines de livraison ; le temps d'attente, pas l'effort, domine.
- **Limiter le travail en cours tend à augmenter le débit**, pas à le diminuer, en réduisant le changement de contexte et en raccourcissant les files.
- Appliquez une **limite de WIP comme contrainte système**, jamais comme quota individuel.
- Investiguez la **raison spécifique** pour laquelle le travail reste inactif plutôt que d'émettre une directive générique « réduire le temps d'attente ».
- Surveillez les limites de WIP **s'érodant à travers des exceptions routinières** ; traitez chaque exception comme une décision délibérée et visible.
- Le sujet 2.4 nomme cette quantité **charge de flux** et le sujet 2.7 formalise la relation comme la loi de Little : le travail en cours est égal au taux d'arrivée multiplié par le temps de cycle, pour toute file stable.

## Sources et lectures complémentaires

- *The Principles of Product Development Flow*, par Donald G. Reinertsen (théorie des files d'attente, taille de lot et limites de WIP dans le développement de produit).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, par David J. Anderson (le texte fondateur sur les limites de WIP et le flux pour les équipes logicielles).
- *Actionable Agile Metrics for Predictability*, par Daniel S. Vacanti (mesure de l'efficacité de flux et prévision basée sur le flux).
- *The Goal*, par Eliyahu M. Goldratt (théorie des contraintes et la relation contre-intuitive entre l'occupation locale et le débit système).
