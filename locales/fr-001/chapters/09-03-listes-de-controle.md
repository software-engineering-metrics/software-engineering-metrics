# 9.3 Listes de contrôle

Listes de contrôle de référence rapide et prêtes à l'emploi. Copiez-en une dans votre propre processus et adaptez-la ; le but est la couverture, pas la formulation exacte.

## Liste de contrôle de revue de nouvelle métrique (avant d'ajouter toute métrique à un tableau de bord)

- [ ] La métrique a une décision nommée qu'elle informe (chapitre 1.1)
- [ ] La métrique est classée comme diagnostique ou évaluative, par écrit (chapitre 1.1)
- [ ] Si incitative, une métrique de garde-fou est définie en même temps (chapitre 1.2)
- [ ] Le vecteur de manipulation a été nommé : comment une équipe rationnelle ferait-elle paraître ce chiffre bon sans améliorer le véritable résultat (chapitre 1.2)
- [ ] La métrique est classée comme entrée, production, ou résultat (chapitre 1.3)
- [ ] La métrique a un propriétaire nommé et un système source documenté et une méthode de collecte (chapitres 1.4, 1.5)
- [ ] La métrique utilisera une médiane ou un percentile, pas une moyenne, si les données sous-jacentes sont asymétriques (chapitre 1.6)
- [ ] La métrique n'est jamais utilisée pour l'évaluation individuelle, ou cet usage est séparément et explicitement divulgué (chapitre 1.1)

## Liste de contrôle de lancement de tableau de bord

- [ ] Le tableau de bord a un public et une décision nommés et spécifiques (chapitre 8.1)
- [ ] Chaque métrique incitative apparaît sur la même vue que son garde-fou (chapitres 1.2, 8.1)
- [ ] Les axes commencent à zéro sauf si une exception énoncée et visible est documentée (chapitre 1.6)
- [ ] La tendance dans le temps est montrée, pas un seul instantané (chapitre 1.6)
- [ ] Le tableau de bord a un propriétaire nommé et une cadence de revue (chapitre 1.4)
- [ ] Une déclaration visible énonce ce pour quoi le tableau de bord n'est pas destiné, si pertinent (chapitre 1.1)
- [ ] Les sources de données ont des contrôles de santé de base afin qu'un pipeline cassé ne s'affiche pas silencieusement comme actuel (chapitre 1.5)

## Liste de contrôle de déploiement de programme de métriques

- [ ] Le but et les non-objectifs explicites sont communiqués avant le lancement, pas réactivement (chapitre 8.3)
- [ ] Les personnes mesurées ont été impliquées dans la sélection de métrique (chapitre 8.3)
- [ ] Le programme commence en mode purement diagnostique, avec une période d'épreuve minimale engagée (chapitre 8.3)
- [ ] Un protocole de réponse rapide et visible existe pour tout futur incident de mauvaise utilisation (chapitre 8.3)
- [ ] Une équipe pilote a été sélectionnée qui s'est authentiquement portée volontaire, pas une qui a été mandatée (chapitre 8.5)
- [ ] La gouvernance fondamentale (charte, propriété, politique diagnostique) est en place avant que l'instrumentation ne commence (chapitres 1.4, 8.5)

## Liste de contrôle d'incident et de post-mortem

- [ ] Le post-mortem investigue le système, pas l'individu (chapitre 6.2)
- [ ] La sévérité a été classée contre des critères documentés et standardisés (chapitre 6.2)
- [ ] Les temps de détection, d'accusé de réception, et de résolution sont enregistrés séparément (chapitre 6.2)
- [ ] Les éléments d'action sont spécifiques, assignés, et suivis jusqu'à l'achèvement (chapitre 6.2)
- [ ] Le post-mortem est partagé sans crainte de conséquence individuelle (chapitres 6.2, 8.3)

## Liste de contrôle d'audit de métriques de l'ère de l'IA

- [ ] Chaque métrique de tableau de bord a été testée contre : « une équipe utilisant lourdement l'assistance IA mais ne produisant pas plus de valeur réelle montrerait-elle une lecture améliorée ici » (chapitre 7.1)
- [ ] Le taux d'échecs de changement et le taux de défauts sont revus aux côtés de toute hausse de fréquence de déploiement ou de volume de commits assisté par IA (chapitre 7.1)
- [ ] La capacité et la profondeur de revue sont surveillées à mesure que le volume de code généré par IA change (chapitre 7.1)
- [ ] Les défauts échappés sont étiquetés par niveau d'assistance IA pour tester, pas supposer, si la relation historique de taux de défaut tient encore (chapitres 7.1, 7.3)
- [ ] Des méthodes de détection résistantes aux défauts « a l'air correct » (test de mutation, test basé sur les propriétés) sont en place pour les chemins de code lourds en IA (chapitre 7.3)
- [ ] La charte de métriques a été explicitement revisitée et mise à jour pour ce changement, pas laissée à dériver sans examen (chapitres 1.4, 7.1)

## Liste de contrôle d'audit de programme de métriques (annuel)

- [ ] Chaque métrique a encore un propriétaire nommé (chapitre 1.4)
- [ ] Au moins une métrique a été retirée dans le dernier cycle si elle a cessé de gagner sa place (chapitre 1.1)
- [ ] L'évaluation de maturité à cinq dimensions a été menée honnêtement, évaluée par minimum, pas moyenne (chapitre 8.4)
- [ ] Aucune métrique n'a dérivé de l'usage diagnostique à évaluatif sans une décision explicite et divulguée (chapitre 1.1)
- [ ] Les définitions ont été vérifiées ponctuellement contre l'instrumentation réelle pour la dérive (chapitres 1.2, 2.4, 5.1, 6.2, 6.4)
- [ ] Le ratio résultat-contre-production sur les tableaux de bord primaires a été calculé et revu (chapitre 7.4)
