# Métriques d'ingénierie logicielle

Un livre de travail sur la façon de bien mesurer l'**ingénierie logicielle** : comment choisir des métriques qui reflètent des résultats réels plutôt que de l'activité, les cadres sur lesquels ce livre s'appuie (le Flow Framework, le cadre SPACE, la théorie des files d'attente et les métriques DORA), les familles de métriques qui comptent, et comment mener un programme de métriques qui améliore une équipe au lieu de la surveiller.

Le livre couvre la livraison et le flux, l'expérience du développeur, le code et la qualité, les résultats de produit et d'activité, la fiabilité et la sécurité, et la façon dont l'IA générative transforme le sens de ces chiffres.

- **[Qu'est-ce que les métriques d'ingénierie logicielle ?](liminaires/qu-est-ce-que-les-métriques-d-ingénierie-logicielle.md):** commencez ici
- **[Introduction](liminaires/introduction.md):** ce qu'est ce livre et comment le lire
- **[Table des matières](liminaires/table-des-matières.md):** la liste complète des sujets

## Comment lire ce livre

Les parties sont des nombres entiers ; les sujets sont des décimaux. Le sujet **N.0** présente chaque partie ; **N.1, N.2, …** sont ses sujets. La partie 9 rassemble les annexes (glossaire, une référence de formules, listes de contrôle, modèles, une auto-évaluation de la maturité, références et un index). Chaque sujet sur une famille de métriques énonce des principes, des recommandations, des compromis, un éclairage par secteur, des exemples (d'entreprise et d'administration), une analyse de rentabilité (ROI/TCO), des antimodèles, un modèle de maturité, des questions de discussion et des références, et nomme la façon dont la métrique est manipulée et le garde-fou qui le détecte. Adoptez progressivement ; pas tout d'un coup.

## Table des matières

### Partie 1 : Fondations de la mesure
- [1.0 Introduction](sujets/01-00-fondations-de-la-mesure.md)
- [1.1 Pourquoi mesurer l'ingénierie logicielle](sujets/01-01-pourquoi-mesurer-lingenierie-logicielle.md)
- [1.2 La loi de Goodhart et la psychologie des métriques](sujets/01-02-la-loi-de-goodhart-et-la-psychologie-des-metriques.md)
- [1.3 Les résultats plutôt que la production : choisir ce qu'il faut mesurer](sujets/01-03-les-resultats-plutot-que-la-production-choisir-ce-quil-faut-mesurer.md)
- [1.4 Gouvernance et propriété des métriques](sujets/01-04-gouvernance-et-propriete-des-metriques.md)
- [1.5 Sources de données et instrumentation](sujets/01-05-sources-de-donnees-et-instrumentation.md)
- [1.6 Littératie statistique pour les métriques d'ingénierie](sujets/01-06-litteratie-statistique-pour-les-metriques-dingenierie.md)

### Partie 2 : Métriques de flux
- [2.0 Introduction](sujets/02-00-metriques-de-flux.md)
- [2.1 Le Flow Framework](sujets/02-01-le-flow-framework.md)
- [2.2 Éléments de flux : fonctionnalités, défauts, risques et dette](sujets/02-02-elements-de-flux-fonctionnalites-defauts-risques-et-dette.md)
- [2.3 Vélocité de flux et distribution de flux](sujets/02-03-velocite-de-flux-et-distribution-de-flux.md)
- [2.4 Temps de flux et charge de flux](sujets/02-04-temps-de-flux-et-charge-de-flux.md)
- [2.5 Efficacité de flux et travail en cours](sujets/02-05-efficacite-de-flux-et-travail-en-cours.md)
- [2.6 Temps de cycle et ses composantes](sujets/02-06-temps-de-cycle-et-ses-composantes.md)
- [2.7 Théorie des files d'attente](sujets/02-07-theorie-des-files-dattente.md)
- [2.8 Métriques de flux de valeur Lean](sujets/02-08-metriques-de-flux-de-valeur-lean.md)
- [2.9 Métriques des demandes de tirage et de la revue de code](sujets/02-09-metriques-des-demandes-de-tirage-et-de-la-revue-de-code.md)
- [2.10 Le cadre des métriques DORA](sujets/02-10-le-cadre-des-metriques-dora.md)

### Partie 3 : Expérience du développeur et le cadre SPACE
- [3.0 Introduction](sujets/03-00-experience-du-developpeur-et-le-cadre-space.md)
- [3.1 Le cadre SPACE](sujets/03-01-le-cadre-space.md)
- [3.2 Métriques de satisfaction et de bien-être](sujets/03-02-metriques-de-satisfaction-et-de-bien-etre.md)
- [3.3 Métriques de performance et représentants de résultat](sujets/03-03-metriques-de-performance-et-representants-de-resultat.md)
- [3.4 Métriques d'activité et leurs limites](sujets/03-04-metriques-dactivite-et-leurs-limites.md)
- [3.5 Métriques de communication et de collaboration](sujets/03-05-metriques-de-communication-et-de-collaboration.md)
- [3.6 Efficacité et flux : travail profond et interruptions](sujets/03-06-efficacite-et-flux-travail-profond-et-interruptions.md)
- [3.7 Enquêtes d'expérience développeur et métriques DevEx](sujets/03-07-enquetes-dexperience-developpeur-et-metriques-devex.md)

### Partie 4 : Métriques de code et de qualité
- [4.0 Introduction](sujets/04-00-metriques-de-code-et-de-qualite.md)
- [4.1 Métriques de complexité de code](sujets/04-01-metriques-de-complexite-de-code.md)
- [4.2 Couverture de test et efficacité des tests](sujets/04-02-couverture-de-test-et-efficacite-des-tests.md)
- [4.3 Churn de code et analyse de points chauds](sujets/04-03-churn-de-code-et-analyse-de-points-chauds.md)
- [4.4 Analyse statique et métriques d'odeurs de code](sujets/04-04-analyse-statique-et-metriques-dodeurs-de-code.md)
- [4.5 Mesure de la dette technique](sujets/04-05-mesure-de-la-dette-technique.md)
- [4.6 Métriques de documentation et de connaissance](sujets/04-06-metriques-de-documentation-et-de-connaissance.md)

### Partie 5 : Métriques de produit et d'affaires
- [5.0 Introduction](sujets/05-00-metriques-de-produit-et-daffaires.md)
- [5.1 Taux de défauts échappés et échappées de qualité](sujets/05-01-taux-de-defauts-echappes-et-echappees-de-qualite.md)
- [5.2 Métriques d'adoption et d'usage de fonctionnalités](sujets/05-02-metriques-dadoption-et-dusage-de-fonctionnalites.md)
- [5.3 Métriques de résultats clients et d'affaires](sujets/05-03-metriques-de-resultats-clients-et-daffaires.md)
- [5.4 Coût et unité économique de l'ingénierie](sujets/05-04-cout-et-unite-economique-de-lingenierie.md)
- [5.5 Retour sur investissement pour les initiatives d'ingénierie](sujets/05-05-retour-sur-investissement-pour-les-initiatives-dingenierie.md)

### Partie 6 : Métriques de fiabilité, d'exploitation, et de sécurité
- [6.0 Introduction](sujets/06-00-metriques-de-fiabilite-dexploitation-et-de-securite.md)
- [6.1 Indicateurs, objectifs de niveau de service, et budgets d'erreur](sujets/06-01-indicateurs-objectifs-de-niveau-de-service-et-budgets-derreur.md)
- [6.2 Métriques d'incident : détection, réponse, et récupération](sujets/06-02-metriques-dincident.md)
- [6.3 Métriques d'astreinte, de capacité, et de charge opérationnelle](sujets/06-03-metriques-dastreinte-de-capacite-et-de-charge-operationnelle.md)
- [6.4 Métriques de sécurité et de gestion de vulnérabilité](sujets/06-04-metriques-de-securite-et-de-gestion-de-vulnerabilite.md)

### Partie 7 : Métriques à l'ère de l'IA
- [7.0 Introduction](sujets/07-00-metriques-a-lere-de-lia.md)
- [7.1 Le changement de paradigme de l'IA générative](sujets/07-01-le-changement-de-paradigme-de-lia-generative.md)
- [7.2 Mesurer le développement logiciel assisté par IA](sujets/07-02-mesurer-le-developpement-logiciel-assiste-par-ia.md)
- [7.3 Risques d'inflation de métriques et de dilution de qualité](sujets/07-03-risques-dinflation-de-metriques-et-de-dilution-de-qualite.md)
- [7.4 La télémétrie de résultat comme nouvelle métrique-étoile polaire](sujets/07-04-la-telemetrie-de-resultat-comme-nouvelle-metrique-etoile-polaire.md)

### Partie 8 : Construire un programme de métriques
- [8.0 Introduction](sujets/08-00-construire-un-programme-de-metriques.md)
- [8.1 Concevoir un tableau de bord de métriques d'ingénierie](sujets/08-01-concevoir-un-tableau-de-bord-de-metriques-dingenierie.md)
- [8.2 Paysage d'outillage : construire contre acheter](sujets/08-02-paysage-doutillage-construire-contre-acheter.md)
- [8.3 Déployer les métriques sans engendrer la peur](sujets/08-03-deployer-les-metriques-sans-engendrer-la-peur.md)
- [8.4 Modèle de maturité pour les programmes de métriques d'ingénierie](sujets/08-04-modele-de-maturite-pour-les-programmes-de-metriques-dingenierie.md)
- [8.5 Une feuille de route d'adoption incrémentale](sujets/08-05-une-feuille-de-route-dadoption-incrementale.md)

### Partie 9 : Annexes
- [9.0 Annexes](sujets/09-00-annexes.md)
- [9.1 Glossaire](sujets/09-01-glossaire.md)
- [9.2 Référence des définitions et formules de métriques](sujets/09-02-reference-des-definitions-et-formules-de-metriques.md)
- [9.3 Listes de contrôle](sujets/09-03-listes-de-controle.md)
- [9.4 Modèles](sujets/09-04-modeles.md)
- [9.5 Auto-évaluation de maturité](sujets/09-05-auto-evaluation-de-maturite.md)
- [9.6 Sources et lectures complémentaires](sujets/09-06-sources-et-lectures-complementaires.md)
- [9.7 Index](sujets/09-07-index.md)

## Thèmes transversaux

La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) gouverne chaque sujet : une mesure qui devient un objectif cesse d'être une bonne mesure, donc chaque famille de métriques arrive ici avec son vecteur de manipulation et son garde-fou. Les résultats sont pondérés au-dessus de la production et de l'activité partout. Les obligations de reporting des administrations et des entreprises sont traitées comme des données d'entrée de la conception, pas comme un après-coup, et le passage à l'IA générative est traité comme une raison de réexaminer ce que ces métriques signifient, pas seulement comme une nouvelle colonne dans le tableau de bord.

## Au-delà des sujets

- **[Exemples](exemples/aperçu.md):** de petits exemples concrets des idées du livre en situation.
- **[À propos de ce projet](projet/aperçu.md):** comment le livre est construit, vérifié et publié.
- **[Contribuer](contribuer/aperçu.md):** comment aider, et les règles de style maison.
