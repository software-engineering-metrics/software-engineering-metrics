# Beispiel: Metrik-Charta für ein Payments-Plattform-Team

Ein ausgearbeitetes Beispiel einer Metrik-Charta, des einseitigen Dokuments, das
in [Thema 1.4, Governance und Verantwortung für Metriken](../themen/01-04-metrik-governance-und-eigentuemerschaft.md)
beschrieben ist. Es geht um die Form: ein erklärter Zweck, ein ausdrückliches
Nicht-Ziel, benannte Verantwortliche und ein Überprüfungsrhythmus. Eine so
kurze Charta soll gelesen, nicht abgelegt werden.

- **Team:** Payments-Plattform
- **Verantwortlich:** Leitung Plattform-Engineering
- **Überprüfung:** vierteljährlich, im Plattform-Review

## Zweck

Diese Charta regelt die Metriken, die das Payments-Plattform-Team zu seiner
eigenen Lieferung und Zuverlässigkeit verfolgt. Sie existiert, damit alle,
innerhalb und außerhalb des Teams, sehen können, was gemessen wird, warum und
wofür es nicht gedacht ist.

## Was wir verfolgen

| Metrik | Quelle der Wahrheit | Verantwortlich |
| --- | --- | --- |
| Deployment-Frequenz | CI/CD-Pipeline | Plattform-Lead |
| Durchlaufzeit für Änderungen | Git plus Deployment-Pipeline | Plattform-Lead |
| Änderungsfehlerrate | Incident-Tracker, nach Deployment getaggt | Bereitschafts-Lead |
| Wiederherstellungszeit nach fehlgeschlagenem Deployment | Incident-Tracker | Bereitschafts-Lead |
| P99-API-Latenz (SLI) | Observability-Plattform | SRE-Lead |
| Verbrauch des Fehlerbudgets | Observability-Plattform | SRE-Lead |

## Nicht-Ziele

Diese Metriken werden nie, einzeln oder in Kombination, genutzt, um Ingenieurinnen
und Ingenieure zu ranken, Leistungsbeurteilungen zu bewerten oder dieses Team mit
der Roadmap eines anderen Teams zu vergleichen, ohne auch Umfang, Besetzung und
Systemreife zu vergleichen. Jede Nutzung außerhalb des oben genannten Zwecks
erfordert die Zustimmung der Entwicklungsleitung und des Teams selbst.

## Leitplanken

Jede Metrik oben, an die ein Anreiz geknüpft ist, ist mit einer Leitplanke
gekoppelt. Die Durchlaufzeit für Änderungen wird zusammen mit der
Änderungsfehlerrate beobachtet, damit ein Team seine Geschwindigkeitszahl nicht
verbessern kann, indem es riskantere Änderungen ausliefert. Die
Deployment-Frequenz wird aus demselben Grund zusammen mit dem Verbrauch des
Fehlerbudgets beobachtet.

## Überprüfungsrhythmus

Das Team überprüft diese Charta jedes Quartal. Eine Metrik, die in zwei
aufeinanderfolgenden Quartalen keine Entscheidung verändert hat, ist ein
Kandidat für die Ausmusterung.
