# 9.3 Checklisten

Einsatzbereite Schnellreferenz-Checklisten. Eine sollte in den eigenen Prozess kopiert und angepasst werden; es geht um Abdeckung, nicht exakten Wortlaut.

## Checkliste für neue Metrik-Reviews (bevor eine Metrik zu einem Dashboard hinzugefügt wird)

- [ ] Die Metrik hat eine benannte Entscheidung, die sie informiert (Thema 1.1)
- [ ] Die Metrik ist schriftlich als diagnostisch oder bewertend klassifiziert (Thema 1.1)
- [ ] Falls incentiviert, ist gleichzeitig eine Leitplanken-Metrik definiert (Thema 1.2)
- [ ] Der Manipulationsvektor wurde benannt: wie würde ein rationales Team diese Zahl gut aussehen lassen, ohne das echte Ergebnis zu verbessern (Thema 1.2)
- [ ] Die Metrik ist als Input, Output, oder Ergebnis klassifiziert (Thema 1.3)
- [ ] Die Metrik hat eine benannte Eigentümerin oder einen benannten Eigentümer und ein dokumentiertes Quellsystem und eine Erhebungsmethode (Themen 1.4, 1.5)
- [ ] Die Metrik wird einen Median oder ein Perzentil nutzen, keinen Durchschnitt, falls die zugrunde liegenden Daten verzerrt sind (Thema 1.6)
- [ ] Die Metrik wird nie für individuelle Bewertung genutzt, oder diese Nutzung ist separat und explizit offengelegt (Thema 1.1)

## Dashboard-Einführungs-Checkliste

- [ ] Das Dashboard hat eine benannte, spezifische Zielgruppe und Entscheidung (Thema 8.1)
- [ ] Jede incentivierte Metrik erscheint auf derselben Ansicht wie ihre Leitplanke (Themen 1.2, 8.1)
- [ ] Achsen beginnen bei null, sofern nicht eine erklärte, sichtbare Ausnahme dokumentiert ist (Thema 1.6)
- [ ] Trend über die Zeit wird gezeigt, keine einzelne Momentaufnahme (Thema 1.6)
- [ ] Das Dashboard hat eine benannte Eigentümerin oder einen benannten Eigentümer und einen Überprüfungsrhythmus (Thema 1.4)
- [ ] Eine sichtbare Erklärung gibt an, wofür das Dashboard nicht ist, falls relevant (Thema 1.1)
- [ ] Datenquellen haben grundlegende Gesundheitsprüfungen, sodass eine defekte Pipeline nicht still als aktuell erscheint (Thema 1.5)

## Metrikprogramm-Rollout-Checkliste

- [ ] Zweck und explizite Nicht-Ziele werden vor der Einführung kommuniziert, nicht reaktiv (Thema 8.3)
- [ ] Die gemessenen Personen waren in die Metrikauswahl einbezogen (Thema 8.3)
- [ ] Das Programm beginnt im rein-diagnostischen Modus, mit einer verpflichteten Mindest-Bewährungsperiode (Thema 8.3)
- [ ] Ein schnelles, sichtbares Reaktionsprotokoll existiert für jeden zukünftigen Missbrauchsvorfall (Thema 8.3)
- [ ] Ein Pilotteam wurde ausgewählt, das echt freiwillig war, keines, das verpflichtet wurde (Thema 8.5)
- [ ] Grundlegende Governance (Charter, Eigentümerschaft, diagnostische Richtlinie) ist vorhanden, bevor Instrumentierung beginnt (Themen 1.4, 8.5)

## Vorfall- und Post-Mortem-Checkliste

- [ ] Das Post-Mortem untersucht das System, nicht die Einzelperson (Thema 6.2)
- [ ] Schweregrad wurde gegen dokumentierte, standardisierte Kriterien klassifiziert (Thema 6.2)
- [ ] Erkennungs-, Bestätigungs-, und Lösungszeiten werden separat aufgezeichnet (Thema 6.2)
- [ ] Handlungspunkte sind spezifisch, zugewiesen, und bis zum Abschluss verfolgt (Thema 6.2)
- [ ] Das Post-Mortem wird ohne Furcht vor individueller Konsequenz geteilt (Themen 6.2, 8.3)

## Metrik-Audit-Checkliste für das KI-Zeitalter

- [ ] Jede Dashboard-Metrik wurde gegen folgendes getestet: „würde ein Team, das starke KI-Unterstützung nutzt, aber nicht mehr echten Wert produziert, hier eine verbesserte Ablesung zeigen" (Thema 7.1)
- [ ] Änderungsfehlerrate und Fehlerrate werden zusammen mit jedem Anstieg KI-unterstützter Deployment-Frequenz oder Commit-Volumen überprüft (Thema 7.1)
- [ ] Review-Kapazität und -Tiefe werden überwacht, während sich KI-generiertes Codevolumen ändert (Thema 7.1)
- [ ] Entwichene Fehler werden nach KI-Unterstützungsgrad markiert, um zu testen, statt anzunehmen, ob die historische Fehlerraten-Beziehung noch gilt (Themen 7.1, 7.3)
- [ ] Erkennungsmethoden, resistent gegen „sieht korrekt aus"-Fehler (Mutationstests, eigenschaftsbasierte Tests), sind für KI-lastige Codepfade vorhanden (Thema 7.3)
- [ ] Das Metrik-Charter wurde explizit für diesen Wandel erneut betrachtet und aktualisiert, nicht ungeprüft driften gelassen (Themen 1.4, 7.1)

## Metrikprogramm-Audit-Checkliste (jährlich)

- [ ] Jede Metrik hat noch eine benannte Eigentümerin oder einen benannten Eigentümer (Thema 1.4)
- [ ] Mindestens eine Metrik wurde im letzten Zyklus ausgemustert, falls sie ihren Platz nicht mehr verdiente (Thema 1.1)
- [ ] Die Fünf-Dimensionen-Reifebewertung wurde ehrlich durchgeführt, nach Minimum bewertet, nicht Durchschnitt (Thema 8.4)
- [ ] Keine Metrik ist ohne explizite, offengelegte Entscheidung von diagnostischer zu bewertender Nutzung gedriftet (Thema 1.1)
- [ ] Definitionen wurden stichprobenartig gegen tatsächliche Instrumentierung auf Drift geprüft (Themen 1.2, 2.4, 5.1, 6.2, 6.4)
- [ ] Das Ergebnis-zu-Output-Verhältnis auf primären Dashboards wurde berechnet und überprüft (Thema 7.4)
