# 2.6 Zykluszeit und ihre Bestandteile

## Überblick und Motivation

**Zykluszeit** ist die interne Aufschlüsselung der Flow-Zeit einer Änderung (Thema 2.4) in ihre einzelnen Engineering-Phasen: Codierzeit, Review-Zeit, Testzeit und Deploy-Zeit, manchmal weiter aufgeteilt in Abholzeit (wie lange eine Änderung wartet, bevor jemand mit der Arbeit daran beginnt) und aktive Zeit (wie lange es dauert, sobald jemand beginnt). Wo Flow-Zeit eine einzelne Zahl dafür gibt, wie lange eine Änderung durchgängig durch den gesamten Wertstrom braucht, sagt [Zykluszeit](https://en.wikipedia.org/wiki/Cycle_time), wohin diese Zeit tatsächlich geht, sobald sie das Engineering erreicht, die diagnostische Ebene, die Thema 2.4 versprach, liege unter seiner eigenen Zusammenfassungszahl.

Diese Unterscheidung zählt, weil „die Lead Time ist zu lang" für sich genommen nicht handlungsleitend ist. Ein Team, dessen Lead Time von Codierzeit dominiert wird, braucht einen anderen Eingriff als ein Team, dessen Lead Time von einer dreitägigen Review-Warteschlange dominiert wird, was wiederum einen anderen Eingriff braucht als ein Team, das die meiste Zeit an eine instabile, langsame Testsuite verliert. Ohne Zykluszeit-Zerlegung tendieren Teams dazu, den Flaschenhals zu erraten, und die Vermutung liegt oft genug falsch, dass die Behebung der falschen Phase echten Aufwand verschwendet, während der tatsächliche Engpass unangetastet bleibt.

Für große Teams verwandelt Zykluszeit-Zerlegung eine organisationsweite Lead-Time-Regression von einem Rätsel in ein konkretes, angehbares Problem. Wenn Dutzende Teams gemeinsame Infrastruktur teilen, kann ein gemeinsamer Review-Flaschenhals oder eine gemeinsame langsame CI-Pipeline die Lead Time jedes Teams identisch nach unten ziehen, und nur ein teamübergreifender Zykluszeit-Vergleich enthüllt diese gemeinsame Grundursache, statt dass jedes Team unabhängig seine eigene lokale Erklärung errät.

## Kernprinzipien

- **Zykluszeit erklärt Lead Time; sie ersetzt sie nicht.** Beide sollten gemeinsam berichtet werden, Zykluszeit als Diagnose und Lead Time als Zusammenfassung.
- **Wartezeit dominiert meist aktiven Aufwand.** Die meiste Verzögerung in Softwarelieferung kommt von untätig in einer Warteschlange liegender Arbeit, nicht von aktivem Aufwand (Thema 2.5 behandelt das direkt über Flow-Effizienz).
- **Nach Phase zerlegen, bevor eine Lösung vorgeschlagen wird.** Eine auf die falsche Phase zielende Lösung verschwendet Aufwand und kann ein Team demoralisieren, das gebeten wird, „schneller zu arbeiten", wenn der echte Flaschenhals woanders lag.
- **Ein gemeinsamer Flaschenhals über viele Teams ist eine Plattform-Investitionsmöglichkeit,** nicht nur eine Reihe individueller Teamprobleme.
- **Zykluszeit-Daten sind denselben Manipulationsrisiken ausgesetzt wie Flow-Zeit** (Thema 2.4): Es sollte auf Phasengrenzen geachtet werden, die still verschoben werden, um eine Zahl zu schönen.

## Empfehlungen

### Jede Phasengrenze explizit instrumentieren

Die Reise einer Änderung sollte in benannte Phasen mit klaren, instrumentierbaren Grenzen aufgeteilt werden: Codierung (erster Commit bis Pull Request eröffnet), Abholung (Pull Request eröffnet bis erste Überprüfung), Review (erste Überprüfung bis Freigabe) und Deploy (Freigabe bis Produktion). Zeitstempel für jeden Übergang sollten automatisch aus Versionsverwaltungs- und CI/CD-Ereignissen erfasst werden, nicht aus selbst berichtetem Phasen-Tracking, in Anwendung desselben Instrumentierung-statt-Selbstauskunft-Prinzips aus Thema 1.5.

### Wartezeit von aktiver Zeit innerhalb jeder Phase trennen

Innerhalb des Reviews sollte zum Beispiel die Zeit, die ein Pull Request unberührt darauf wartet, dass eine Reviewerin oder ein Reviewer beginnt (Wartezeit), von der Zeit unterschieden werden, die ein aktives Review-Gespräch braucht, sobald es beginnt (aktive Zeit). Diese Unterscheidung enthüllt meist, dass die dominante Kostenquelle Warteschlangenbildung ist, nicht Aufwand, was auf eine ganz andere Lösung hindeutet (mehr Reviewer-Kapazität, bessere Benachrichtigung, kleinere zu überprüfende Pull Requests) als eine Lösung, die darauf zielt, Review-Gespräche selbst schneller zu machen.

### Nach einem gemeinsamen Flaschenhals suchen, bevor Team für Team diagnostiziert wird

Wenn mehrere Teams dieselbe Phase als ihre dominante Verzögerung zeigen, eine langsame gemeinsame CI-Pipeline, einen überlasteten gemeinsamen Review-Pool, einen seltenen gemeinsamen Release Train, ist diese gemeinsame Ursache eine Investitionsmöglichkeit auf Plattformebene, keine Reihe unzusammenhängender lokaler Probleme. Zykluszeit-Daten sollten teamübergreifend aggregiert werden, um gezielt nach diesem Muster zu suchen, bevor angenommen wird, der Flaschenhals jedes Teams sei diesem Team eigen.

### Zykluszeit nutzen, um realistische, phasenspezifische Verbesserungsziele festzulegen

Statt eines einzelnen Ziels „Lead Time um 20 % reduzieren", das einem Team keine Orientierung gibt, wo der Fokus liegen sollte, sollte Zykluszeit-Zerlegung genutzt werden, um ein phasenspezifisches Ziel festzulegen: „mediane Review-Wartezeit von zwei Tagen auf vier Stunden reduzieren". Ein konkretes, phasenbezogenes Ziel ist für ein Team sowohl leichter umzusetzen als auch leichter zu verifizieren, ob es tatsächlich durch echte Prozessänderung erreicht wurde, statt durch eine unzusammenhängende Verschiebung woanders.

### Auf Manipulation der Phasengrenzen achten

Genau wie Start- und Endpunkt der Flow-Zeit abdriften können (Thema 2.4), können sich einzelne Zykluszeit-Phasengrenzen auf Weisen verschieben, die die Zahl einer bestimmten Phase schönen, ohne echte Verbesserung, zum Beispiel indem ein Review in dem Moment als „begonnen" markiert wird, in dem eine Reviewerin oder ein Reviewer zugewiesen wird, statt wenn sie oder er tatsächlich beginnt, die Änderung zu lesen. Die Phasengrenzen-Instrumentierung sollte periodisch gegen ihre dokumentierte Definition geprüft werden.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Grobkörnige Zykluszeit (zwei oder drei Phasen) | Einfach zu instrumentieren und zu erklären | Findet den tatsächlichen Flaschenhals möglicherweise nicht präzise genug für Handeln |
| Feinkörnige Zykluszeit (viele Phasen, Warte- gegen aktive Zeit) | Präzise Diagnose, umsetzbare phasenspezifische Ziele | Mehr Instrumentierungsaufwand; mehr Zahlen zu pflegen und zu erklären |
| Team-für-Team-Zykluszeit-Überprüfung | Zugeschnitten auf den tatsächlichen Workflow jedes Teams | Kann einen gemeinsamen, teamübergreifenden Flaschenhals übersehen, der sich hinter ähnlichen lokalen Zahlen verbirgt |
| Teamübergreifend aggregierte Zykluszeit-Überprüfung | Enthüllt gemeinsame Flaschenhälse auf Plattformebene | Braucht standardisierte Phasendefinitionen über Teams hinweg, um bedeutsam zu sein |

Die zentrale Spannung ist **diagnostische Präzision gegen Instrumentierungskosten**. Feinkörnigeres Zykluszeit-Tracking liefert eine handlungsfähigere Diagnose, kostet aber mehr in Aufbau und Pflege und fügt mehr Zahlen hinzu, die ein Team verstehen und denen es vertrauen muss. Die Lösung: grob beginnen (Codierung, Review, Deploy) und feinere Aufteilungen, Warte- gegen aktive Zeit innerhalb einer bestimmten Phase, erst hinzufügen, sobald diese Phase als echter, wiederkehrender Flaschenhals bestätigt ist, der die zusätzliche Instrumentierungsinvestition wert ist.

## Fragen für die Diskussion im Team

1. **Könnten wir, wenn die Lead Time heute regredierte, innerhalb einer Stunde anhand von Daten statt Vermutungen sagen, welche konkrete Phase verantwortlich war?** Das ist der Kerntest, ob die Zykluszeit-Instrumentierung tatsächlich ihrem diagnostischen Zweck dient. Wenn die ehrliche Antwort Nein ist, lohnt es sich, diese Lücke zu schließen, bevor die nächste Regression geschieht.

2. **Wie viel der Verzögerung in unserer dominanten Flaschenhals-Phase ist Wartezeit gegenüber aktiver Zeit?** Die meisten Teams nehmen an, aktiver Aufwand sei der Engpass, bevor sie prüfen, obwohl Warteschlangenbildung meist die größere Kostenquelle ist. Die tatsächliche Aufteilung für die langsamste Phase sollte gezogen werden, um zu prüfen, ob die Annahme hält.

3. **Teilen mehrere Teams dieselbe dominante Flaschenhals-Phase, was auf eine Lösung auf Plattformebene statt auf Teamebene hindeutet?** Zykluszeit-Daten sollten teamübergreifend aggregiert und explizit auf dieses Muster geprüft werden, bevor angenommen wird, die Langsamkeit jedes Teams sei lokal verursacht.

4. **Haben wir phasenspezifische Verbesserungsziele festgelegt, oder nur ein einzelnes Gesamt-Lead-Time-Ziel ohne Orientierung, wo der Fokus liegen sollte?** Ein vages Ziel lässt ein Team raten, wo Aufwand investiert werden soll; ein phasenspezifisches nicht. Die aktuellen Ziele sollten gegen diese Unterscheidung geprüft werden.

5. **Ist irgendeine Zykluszeit-Phasengrenze in unserer Instrumentierung über die Zeit von ihrer dokumentierten Definition abgedriftet?** Phasengrenzen sind demselben definitorischen Abdriftrisiko ausgesetzt wie die Flow-Zeit selbst (Thema 2.4). Eine Stichprobe jüngster Phasenübergangsereignisse sollte gegen die schriftliche Definition geprüft werden.

6. **Wie zeigt sich eine review-lastige gegenüber einer vertrauensbasierten Kultur unterschiedlich in unseren Zykluszeit-Daten?** Ein Team mit sehr gründlichem, mehrrundigem Review wird längere Review-Phasen-Zeit zeigen als ein Team, das Single-Approval-Merges vertraut; es sollte diskutiert werden, ob die aktuelle Balance eine bewusste Wahl oder einen ungeprüften Standard widerspiegelt.

## Branchenperspektive

**Startup.** Zykluszeit wird meist von Codierzeit dominiert statt von Review- oder Deploy-Phasen, schlicht weil der Prozess minimal ist. Sobald das Team über eine Handvoll Ingenieurinnen und Ingenieure hinauswächst, sollte speziell auf Review-Wartezeit geachtet werden, da das meist die erste Phase ist, die sich verlangsamt, sobald die Arbeit von mehr Menschen durch weniger verfügbare Reviewerinnen und Reviewer muss.

**Kleinunternehmen.** Grundlegende Analytics der Versionsverwaltungsplattform legen meist genug phasenbezogenes Timing offen (Zeit bis zur ersten Überprüfung, Zeit bis zum Merge) ohne eigene Instrumentierung. Zuerst sollte auf die Review-Phase fokussiert werden, da sie der häufigste frühe Flaschenhals und am leichtesten mit einer kleinen Prozessänderung wie einer Reviewer-Rotation zu beheben ist.

**Enterprise.** Gemeinsame Flaschenhälse über Dutzende Teams sind häufig und mit hohem Hebel zu finden: Eine einzelne überlastete gemeinsame CI-Warteschlange oder ein verpflichtender zentraler Review-Schritt kann still die Lead Time organisationsweit belasten. Es sollte speziell in teamübergreifende Zykluszeit-Aggregation investiert werden, um diese gemeinsamen Beschränkungen zutage zu fördern, statt jedes Team unabhängig diagnostizieren zu lassen.

**Behörden.** Zykluszeit-Daten sind ein starkes, konkretes Werkzeug, um Prozessmodernisierung gegenüber skeptischen Stakeholdern zu rechtfertigen, denn „Review-Wartezeit beträgt im Schnitt vier Tage wegen einer einzelnen überlasteten Freigaberolle" ist ein weit überzeugenderer, konkreter Fall für Investition als eine abstrakte Behauptung „unser Prozess ist langsam".

## Beispiele

**Enterprise.** Die Engineering-Führung eines Cloud-Infrastruktur-Unternehmens bemerkte, dass die Lead Time in fast jedem Team gleichzeitig kroch. Teamübergreifende Zykluszeit-Aggregation enthüllte, dass Review-Wartezeit, nicht aktive Review-Zeit, die dominante und gemeinsame Ursache war: Ein kleines, zentralisiertes Sicherheits-Review-Team war zum Flaschenhals geworden, da die Zahl der Teams, die dessen Freigabe brauchten, schneller wuchs als das Team selbst. Einen breiteren Pool sicherheitszertifizierter Reviewerinnen und Reviewer zu erweitern und zu schulen, statt einzelne Teams zu bitten, irgendwie schneller zu codieren oder zu testen, löste den gemeinsamen Flaschenhals und brachte die Lead Time innerhalb eines Quartals über die gesamte Organisation hinweg wieder herunter.

**Behörden.** Das Digitaldienste-Team einer Landesregierung stand unter Druck, die Lead Time zu reduzieren, und reagierte zunächst damit, Ingenieurinnen und Ingenieure zu bitten, schneller zu arbeiten, ein natürlicher, aber letztlich unhilfreicher Instinkt. Zykluszeit-Zerlegung zeigte, dass sich die aktive Codierzeit im Jahresvergleich kaum verändert hatte; fast die gesamte Regression kam von einer wachsenden Warteschlange in einer verpflichtenden Architektur-Review-Phase, die achtzehn Monate zuvor als Compliance-Maßnahme eingeführt worden war. Das Team gestaltete diese Überprüfung zu einem leichteren, risikogestuften Prozess für risikoarme Änderungen um, was die Review-Wartezeit erheblich senkte, während volle Prüfstrenge für echt risikoreiche Änderungen erhalten blieb.

## Business Case: Motivation, ROI und TCO

Die Rendite der Zykluszeit-Zerlegung ist gezielte, wirksame Investition: Eine Organisation, die genau weiß, welche Phase der Flaschenhals ist, kann genau diese Phase beheben, statt Aufwand dünn über einen ganzen Prozess zu verteilen in der Hoffnung, dass irgendetwas hilft. Das Beispiel des Sicherheits-Reviews oben ist typisch: eine präzise gezielte Lösung, die Erweiterung einer bestimmten überlasteten Ressource, löste ein organisationsweites Problem weit günstiger, als es eine breite, unfokussierte Initiative „Lieferung beschleunigen" getan hätte.

Die Gesamtbetriebskosten sind der Instrumentierungsaufwand, um phasenbezogene Zeitstempel zuverlässig zu erfassen, und die laufende Disziplin, Phasengrenzen periodisch auf Abdrift zu prüfen. Diese Kosten lohnen sich, weil die Alternative, Flaschenhälse zu erraten und die falsche Phase zu beheben, über die Zeit weit mehr Engineering-Aufwand verschwendet, als die Instrumentierung selbst kostet.

## Antipatterns und Fallstricke

- **Auf eine Lead-Time-Regression ohne Zykluszeit-Diagnose reagieren:** führt häufig dazu, die falsche Phase zu beheben.
- **Annehmen, aktiver Aufwand, nicht Wartezeit, sei die dominante Kostenquelle:** meist falsch; Warteschlangenbildung dominiert in den meisten echten Lieferpipelines (Thema 2.5).
- **Einen gemeinsamen, teamübergreifenden Flaschenhals übersehen, indem Zykluszeit nur Team für Team überprüft wird:** lässt eine Lösung mit hohem Hebel auf Plattformebene unentdeckt.
- **Ein vages Gesamt-Lead-Time-Ziel ohne phasenspezifische Orientierung festlegen:** lässt Teams raten, wo Aufwand fokussiert werden soll.
- **Definitorische Abdrift der Phasengrenzen:** schönt die Zahl einer bestimmten Phase ohne echte Verbesserung.
- **Jede mögliche feinkörnige Phase instrumentieren, bevor bestätigt ist, dass irgendeine davon ein echter Flaschenhals ist:** verschwendet Instrumentierungsaufwand auf Detail, das noch keine Entscheidung informiert.

## Reifegradmodell

- **Stufe 1, Initiieren:** Zykluszeit wird überhaupt nicht zerlegt; Teams raten Flaschenhälse, wenn die Lead Time regrediert.
- **Stufe 2, Entwickeln:** Manche Teams verfolgen grobkörniges Phasen-Timing informell, aber es gibt keine konsistente Instrumentierung oder teamübergreifenden Vergleich.
- **Stufe 3, Standardisieren:** Phasengrenzen werden organisationsweit konsistent instrumentiert, mit Wartezeit getrennt von aktiver Zeit in den dominanten Flaschenhals-Phasen.
- **Stufe 4, Steuern:** Teamübergreifende Zykluszeit-Aggregation fördert aktiv gemeinsame Flaschenhälse zutage; phasenspezifische Verbesserungsziele ersetzen vage Gesamt-Lead-Time-Ziele.
- **Stufe 5, Orchestrieren:** Zykluszeit-Daten treiben direkt die Priorisierung von Plattforminvestitionen, und die Organisation kann auf konkrete, gezielte Lösungen verweisen, einen erweiterten Review-Pool, eine schnellere gemeinsame Pipeline, die die Lead Time über viele Teams hinweg gleichzeitig messbar verbessert haben.

## Diskussionsanregungen

1. Was ist unsere aktuelle dominante Flaschenhals-Phase, und wie zuversichtlich sind wir bei dieser Antwort?
2. Wie viel der Zeit dieser Flaschenhals-Phase ist Wartezeit gegenüber aktiver Zeit?
3. Teilen sich irgendwelche unserer Teams denselben Flaschenhals, was auf eine Lösung auf Plattformebene hindeutet?
4. Wann haben wir zuletzt ein phasenspezifisches statt eines Gesamt-Lieferverbesserungsziel festgelegt?
5. Hat sich je eine Phasengrenzen-Definition in unserem Tooling ohne Dokumentation geändert?

## Die wichtigsten Erkenntnisse

- Zykluszeit **zerlegt Flow-Zeit** in Engineering-Phasen, Codierung, Review, Testing, Deploy, und ist die diagnostische Ebene unter dieser Zusammenfassungszahl.
- **Wartezeit sollte von aktiver Zeit** innerhalb jeder Phase getrennt werden; Warteschlangenbildung dominiert meist aktiven Aufwand (Thema 2.5).
- Nach **gemeinsamen Flaschenhälsen über Teams hinweg** sollte gesucht werden, bevor angenommen wird, eine Verlangsamung sei teamspezifisch; eine gemeinsame Ursache ist oft eine Plattform-Investitionsmöglichkeit.
- **Phasenspezifische Verbesserungsziele** sollten festgelegt werden, keine vagen Gesamtziele, damit Teams genau wissen, wo der Fokus liegen sollte.
- Phasengrenzen sind demselben Risiko **definitorischer Abdrift** ausgesetzt wie die Flow-Zeit selbst; sie sollten periodisch geprüft werden.
- Thema 2.7 liefert die zugrunde liegende Mathematik, Littles Gesetz, dafür, warum sich Work in Process und Zykluszeit gemeinsam bewegen.

## Quellen und weiterführende Literatur

- *The Principles of Product Development Flow*, von Donald G. Reinertsen (Warteschlangentheorie und Losgrößen-Überlegungen, die der Zykluszeit-Analyse zugrunde liegen).
- *Actionable Agile Metrics for Predictability*, von Daniel S. Vacanti (Zykluszeit- und flow-basierte Messung für Softwarelieferung).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble und Gene Kim (Lead Time und ihre Beziehung zur Lieferleistung).
- *The Goal*, von Eliyahu M. Goldratt (Engpasstheorie und das Prinzip, den tatsächlichen Flaschenhals zu finden und zu beheben, statt überall zu optimieren).
