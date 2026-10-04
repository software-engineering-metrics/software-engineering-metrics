# 9.2 Référence des définitions et formules de métriques

Chaque formule du livre, rassemblée en un seul endroit. Chaque entrée nomme le chapitre avec la discussion complète, incluant son risque de manipulation et son garde-fou. Utilisez ceci comme une recherche rapide, pas un substitut au chapitre lui-même.

## Métriques de flux (Partie 2)

| Métrique | Formule | Chapitre |
| --- | --- | --- |
| Vélocité de flux | Compte d'éléments de flux achevés par unité de temps | 2.3 |
| Distribution de flux | (Éléments achevés d'un type d'élément de flux) / (Total des éléments achevés) x 100 % | 2.3 |
| Temps de flux | Temps depuis qu'un élément de flux entre dans le flux de valeur jusqu'à sa livraison | 2.4 |
| Charge de flux | Compte d'éléments de flux actuellement actifs ou en attente dans le flux de valeur | 2.4 |
| Loi de Little | Charge de flux (travail en cours) = Taux d'arrivée x Temps de flux (temps de cycle) | 2.4, 2.7 |
| Efficacité de flux | Temps de travail actif / Temps total écoulé x 100 % | 2.5 |
| Temps de cycle | Somme des durées d'étape : codage + prise en charge + revue + test + déploiement | 2.6 |
| Utilisation | Taux d'arrivée / Taux de service | 2.7 |
| Pourcentage de complétude et de précision (%C/A) | (Unités utilisables en aval sans retravail) / (Total des unités) x 100 % | 2.8 |
| Rendement de débit cumulé | %C/A de l'étape 1 x %C/A de l'étape 2 x ... x %C/A de l'étape N | 2.8 |
| Temps takt | Temps de travail disponible / Demande client sur cette période | 2.8 |
| Temps jusqu'à la première revue | Temps depuis l'ouverture d'une demande de tirage jusqu'à la première réponse substantielle de réviseur | 2.9 |
| Fréquence de déploiement | Compte de déploiements de production réussis par unité de temps | 2.10 |
| Temps d'exécution pour les changements | Temps depuis le premier commit jusqu'au déploiement de production réussi (rapporter la médiane et le 90e percentile) | 2.10 |
| Taux d'échecs de changement | (Déploiements causant un échec) / (Total des déploiements) x 100 % | 2.10 |
| Temps de récupération de déploiement échoué | Temps depuis la détection de l'échec jusqu'à la restauration authentique du service | 2.10 |

## Expérience développeur (Partie 3)

| Métrique | Formule | Chapitre |
| --- | --- | --- |
| Temps de concentration | Compte et durée des blocs ininterrompus de plus de deux heures par semaine, depuis les données de calendrier | 3.6 |
| Taux de réponse | (Réponses d'enquête reçues) / (Invitations d'enquête envoyées) x 100 % | 3.7 |

## Code et qualité (Partie 4)

| Métrique | Formule | Chapitre |
| --- | --- | --- |
| Complexité cyclomatique | Chemins indépendants à travers le flux de contrôle (arêtes − nœuds + 2, selon McCabe) | 4.1 |
| Couverture de test | (Lignes/branches exécutées par les tests) / (Total des lignes/branches) x 100 % | 4.2 |
| Taux de mise à mort de mutation | (Mutants tués par la suite de tests) / (Total des mutants introduits) x 100 % | 4.2 |
| Churn de code | Lignes ajoutées + modifiées + supprimées par fichier sur une fenêtre de temps | 4.3 |
| Score de point chaud | Churn x Complexité, classé par fichier | 4.3 |
| Coût de portage de dette | Coût continu estimé de ne pas corriger un élément (travail lié plus lent, risque de défaut élevé) | 4.5 |

## Produit et affaires (Partie 5)

| Métrique | Formule | Chapitre |
| --- | --- | --- |
| Taux de défauts échappés | (Défauts échappés pondérés par sévérité) / (Unité de livraison ou de temps) | 5.1 |
| Adoption initiale | (Utilisateurs ayant essayé la fonctionnalité au moins une fois) / (Public cible) x 100 % | 5.2 |
| Adoption retenue | (Utilisateurs utilisant encore la fonctionnalité après N semaines) / (Utilisateurs l'ayant initialement essayée) x 100 % | 5.2 |
| Coût unitaire | Coût total (personnel + infrastructure + outillage) / Unité significative (client, transaction) | 5.4 |
| ROI | (Bénéfice total − Coût total de possession) / Coût total de possession, présenté comme une plage | 5.5 |

## Fiabilité, exploitation, et sécurité (Partie 6)

| Métrique | Formule | Chapitre |
| --- | --- | --- |
| Budget d'erreur | (1 − cible SLO) x Fenêtre de temps (par exemple, 0,1 % de 30 jours ≈ 43 minutes) | 6.1 |
| Taux de combustion du budget d'erreur | Budget d'erreur consommé / Budget d'erreur alloué, sur une fenêtre donnée | 6.1 |
| MTTD | Temps depuis le début de l'incident jusqu'à la détection | 6.2 |
| MTTA | Temps depuis la notification de l'incident jusqu'à l'accusé de réception | 6.2 |
| MTTR (incident) | Temps depuis l'accusé de réception jusqu'à la restauration authentique du service | 6.2 |
| Distribution de bipage d'astreinte | Bipages reçus par individu, sur une fenêtre glissante (pas une moyenne d'équipe) | 6.3 |
| Temps de remédiation de vulnérabilité | Temps depuis la découverte jusqu'à la remédiation authentique, suivi par sévérité | 6.4 |

## Notes sur l'utilisation de ces formules

- **Associez toujours une formule de vitesse ou de production à son garde-fou** (chapitre 1.2) : taux d'échecs de changement avec fréquence de déploiement et temps d'exécution ; taux de défauts échappés avec vitesse de livraison ; combustion de budget d'erreur avec activité de déploiement.
- **Utilisez des médianes et percentiles, pas des moyennes, pour les formules basées sur le temps** (chapitre 1.6) à moins qu'une formule n'appelle explicitement une moyenne.
- **Chaque formule a besoin d'un système source documenté et d'une méthode de collecte** (chapitre 1.5) aux côtés de sa définition mathématique ; deux équipes calculant la même formule depuis des sources différentes ne produiront pas de chiffres comparables.
- **La pondération par sévérité n'est pas montrée explicitement dans chaque formule ci-dessus** mais s'applique partout où « pondéré par sévérité » apparaît ; voir le chapitre pertinent pour le schéma de classification complet.
