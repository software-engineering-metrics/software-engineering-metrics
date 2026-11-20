# 1.5 Datenquellen und Instrumentierung

## Überblick und Motivation

Eine Metrik ist nur so vertrauenswürdig wie die Daten darunter, und die meisten Metrikprogramme investieren weit mehr Aufwand in die Gestaltung von Dashboards als in die Überprüfung der Pipeline, die sie speist. Das ist verkehrt herum. Ein wunderschön gestaltetes Diagramm, das auf inkonsistenter, selbst berichteter oder still kaputter Instrumentierung aufbaut, ist schlimmer als gar kein Diagramm, weil es maßgeblich wirkt, während es falsch ist. Dieses Thema behandelt die unglamouröse Grundlage, die der Rest dieses Buches voraussetzt: woher Engineering-Daten tatsächlich stammen, wann automatisierter Instrumentierung mehr zu vertrauen ist als Selbstauskunft, und die Datenqualitätsfehler, die eine Metrik still entwerten, bevor es jemand bemerkt.

Daten der Softwareentwicklung stammen aus einer Handvoll Quelltypen, jeder mit anderen Zuverlässigkeitsmerkmalen. Versionsverwaltung und [CI/CD](https://en.wikipedia.org/wiki/CI/CD)-Pipelines erzeugen objektive, zeitgestempelte, schwer zu fälschende Aufzeichnungen dessen, was tatsächlich geschah. Issue-Tracker und Projektmanagement-Tools erzeugen Aufzeichnungen, die davon abhängen, dass Menschen den Status korrekt und zeitnah aktualisieren, was sie oft inkonsistent tun. Umfragen erzeugen selbst berichtete Daten, die für Dinge, die kein System beobachten kann, wie Zufriedenheit, von unschätzbarem Wert sind, aber Erinnerungsverzerrung und sozialer Erwünschtheit unterliegen. Observability-Plattformen erzeugen systemseitige Telemetrie, die objektiv ist, aber nur abdeckt, was instrumentiert wurde. Zu wissen, aus welcher Kategorie die Daten einer bestimmten Metrik stammen, sagt, wie sehr ihr vertraut werden kann und auf welche Fehlmodi geachtet werden sollte.

Auf Konzern- und Behördenebene verstärken sich Datenqualitätsprobleme, weil die Distanz zwischen dem Ursprung der Daten und ihrer endgültigen Nutzung in einem Dashboard über mehrere Systeme, Integrationen und Transformationen hinweg wächst. Ein Feld, das im Quellsystem eine Sache bedeutet, kann bis es eine Berichtsebene erreicht, etwas subtil anderes bedeuten, und niemand nachgelagert bemerkt es, weil die Zahl weiterhin plausibel aussieht. Instrumentierung richtig zu machen, ist weniger aufregend, als Frameworks richtig zu machen, aber es ist das Fundament, auf dem alles andere in diesem Buch steht.

## Kernprinzipien

- **Instrumentierung sollte gegenüber Selbstauskunft bevorzugt werden, wo immer das System das Ereignis direkt beobachten kann.** Ein Deploy-Zeitstempel aus der Pipeline ist vertrauenswürdiger als eine selbst berichtete Deploy-Zahl eines Teams.
- **Selbstauskunft sollte nur für das genutzt werden, was nicht direkt beobachtet werden kann.** Zufriedenheit, empfundene Reibung und Wohlbefinden haben keinen Ersatz durch ein System of Record; direkt gefragt und die Umfrage gut gestaltet werden sollte (Thema 3.7). Selbstauskunft sollte speziell für diese Kategorie reserviert bleiben.
- **Die Daten jeder Metrik haben ein Quellsystem, eine Erhebungsmethode und einen bekannten Fehlmodus.** Alle drei sollten dokumentiert werden, nicht nur die Definition.
- **Datenqualität verfällt still.** Eine Pipeline, die vor einem Jahr korrekt funktionierte, kann heute still kaputt sein, und ein Dashboard wird eine falsche Zahl klaglos weiter anzeigen.
- **Instrumentiert werden sollte am Ort der Wahrheit, nicht nachgelagert einer Übersetzung.** Jeder Sprung zwischen dem Ereignis und dem Dashboard ist eine Gelegenheit für Bedeutungsverschiebung.

## Empfehlungen

### Jede Metrik ihrem tatsächlichen Quellsystem zuordnen, bevor ihr vertraut wird

Für jede Metrik auf einem Dashboard sollte das konkrete System benannt werden, das das zugrunde liegende Ereignis erzeugt: die CI/CD-Pipeline für Deploy-Ereignisse, das Versionsverwaltungssystem für Commit- und Merge-Ereignisse, der Incident-Tracker für Ausfallaufzeichnungen, die Umfrageplattform für selbst berichtete Zufriedenheit. Wenn das genaue System nicht benannt werden kann, ist tatsächlich nicht bekannt, woher die Zahl stammt, und ihre Zuverlässigkeit kann nicht bewertet werden. Diese Zuordnung ist eine Voraussetzung für den Governance-Charter aus Thema 1.4, keine separate Übung.

### Am Ereignis instrumentieren, nicht am Bericht

Die zuverlässigsten Daten erfassen ein Ereignis automatisch in dem Moment, in dem es geschieht: Eine Pipeline zeichnet einen Deploy in dem Augenblick auf, in dem er abgeschlossen ist, ein Versionsverwaltungssystem zeichnet einen Merge in dem Augenblick auf, in dem er landet. Daten, die davon abhängen, dass sich eine Person nachträglich an die Aktualisierung eines Statusfelds erinnert, ein Ticket als „erledigt" markiert, einen Deploy manuell in einer Tabelle protokolliert, verlieren an Genauigkeit, je weiter sie vom tatsächlichen Ereignis entfernt liegen und je beschäftigter die verantwortliche Person wird. Wo immer ein automatisiertes Ereignis existiert, sollte es einem von Menschen berichteten Stellvertreter für dieselbe Tatsache vorgezogen werden.

### Umfragen für das reservieren, was nur eine Person sagen kann

Manche Dinge lassen sich aus System-Telemetrie tatsächlich nicht beobachten: ob eine Ingenieurin oder ein Ingenieur die eigene Arbeit als bedeutsam empfindet, ob sich ein Prozess frustrierend anfühlt, ob das Burnout-Risiko steigt. Diese müssen direkt erfragt werden, und eine gut gestaltete Umfrage (Thema 3.7 behandelt die Mechanik) ist das richtige Werkzeug dafür. Der Fehler ist, stattdessen Selbstauskunft für Dinge zu nutzen, die ein System direkt beobachten könnte, etwa Ingenieurinnen und Ingenieure zu bitten, ihre eigene Deployment-Frequenz zu schätzen, statt sie aus der Pipeline zu ziehen, was unnötiges Rauschen und Verzerrung in Daten einführt, die objektiv hätten sein können.

### Datenqualitätsprüfungen in die Pipeline selbst einbauen

Metrik-Pipelines sollten mit derselben Strenge behandelt werden wie Produktionscode: automatisierte Prüfungen sollten hinzugefügt werden, die markieren, wenn eine Quelle aufhört, Daten zu senden, wenn sich die Verteilung eines Feldes unerwartet verschiebt, oder wenn eine Zählung unerwartet auf null fällt. Ein Dashboard, das veraltete oder kaputte Daten still so anzeigt, als seien sie aktuell, ist schlimmer als ein Dashboard, das sichtbar „Daten nicht verfügbar" zeigt, weil ersteres Vertrauen unsichtbar untergräbt, während letzteres wenigstens die Wahrheit über seine eigenen Grenzen sagt.

### Die Erhebungsmethode zusammen mit der Definition dokumentieren

Die Definition einer Metrik („Lead Time für Änderungen") ist ohne ihre Erhebungsmethode nicht vollständig (gemessen vom ersten Commit-Zeitstempel in der Versionsverwaltung bis zum Produktions-Deploy-Zeitstempel in der Pipeline, Hotfix-Branches ausgeschlossen). Zwei Teams mit derselben Definition, aber unterschiedlichen Erhebungsmethoden, werden dennoch unvergleichbare Zahlen produzieren. Beides sollte im Metrik-Charter aus Thema 1.4 festgehalten werden, und eine Änderung an beidem sollte als Änderung behandelt werden, die dieselbe dokumentierte Überprüfung verlangt.

## Abwägungen: Vor- und Nachteile

| Quelltyp | Vorteile | Nachteile |
| --- | --- | --- |
| Automatisierte Pipeline-Instrumentierung (CI/CD, Versionsverwaltung) | Objektiv, zeitgestempelt, schwer zu fälschen, geringer laufender Aufwand | Braucht vorgelagerte Engineering-Investition für Aufbau und Pflege |
| Issue-Tracker- und Projektmanagement-Daten | Weit verbreitet, Teams vertraut | Hängt von menschlicher Sorgfalt ab; oft inkonsistent zwischen Teams |
| Umfragen und Selbstauskunft | Einzige Quelle für subjektive Erfahrung (Zufriedenheit, Wohlbefinden) | Erinnerungsverzerrung, soziale Erwünschtheit, Umfragemüdigkeit |
| Observability- und Telemetrie-Plattformen | Reichhaltiges Echtzeit-Signal auf Systemebene | Deckt nur ab, was explizit instrumentiert wurde; kann in großem Maßstab teuer werden |

Die zentrale Spannung ist **Objektivität gegen Abdeckung**. Automatisierte Instrumentierung ist die vertrauenswürdigste Quelle, kann subjektive Erfahrung aber überhaupt nicht beobachten, während Umfragen genau das erreichen können, was Automatisierung nicht kann, dabei aber echtes Verzerrungsrisiko tragen. Die Lösung: Automatisierte Instrumentierung sollte genutzt werden, wo immer ein Ereignis direkt beobachtet werden kann, und Selbstauskunft sollte spezifisch und nur für das reserviert werden, was tatsächlich das Befragen einer Person erfordert, nie als bequemer Ersatz für Daten, die ein System hätte liefern können.

## Fragen für die Diskussion im Team

1. **Können wir für unsere fünf wichtigsten Metriken jeweils das genaue Quellsystem und die Erhebungsmethode benennen, oder nehmen wir eine Definition an, ohne zu wissen, woher die Daten tatsächlich stammen?** Das ist eine überraschend häufige Lücke: Eine Metrik wird aus einem Framework oder dem Standard-Dashboard eines Anbieters übernommen, und niemand im aktuellen Team weiß tatsächlich, welches System die zugrunde liegenden Daten erzeugt oder wie. Jede sollte als Gruppenübung bis zu ihrem Ursprung zurückverfolgt werden.

2. **Welche unserer Metriken beruhen auf Selbstauskunft für etwas, das ein System direkt beobachten könnte, und was wäre nötig, um diese Selbstauskunft durch echte Instrumentierung zu ersetzen?** Selbst berichtete Deploy-Zahlen, selbst berichtete Arbeitsstunden und selbst geschätzte Zykluszeit sind alles verbreitete Beispiele dafür, die falsche Datenquelle für etwas zu nutzen, das Automatisierung zuverlässiger erfassen könnte. Diese sollten identifiziert und die folgenreichsten zuerst ersetzt werden.

3. **Woran würden wir erkennen, wenn eine unserer Daten-Pipelines still kaputtginge?** Die meisten Organisationen entdecken eine kaputte Metrik-Pipeline erst, wenn jemand bemerkt, dass eine Zahl unplausibel aussieht, was Monate dauern kann. Es sollte diskutiert werden, ob irgendeine unserer Pipelines heute automatisierte Gesundheitsprüfungen hat, und falls nicht, welche sie zuerst am dringendsten brauchen.

4. **Wo hat eine Übersetzung zwischen Systemen die Bedeutung einer Metrik verändert, ohne dass das jemand absichtlich entschieden hat?** Ein Feld, das in einem Quellsystem eine Sache bedeutet, kann nach einer Integration oder Migration etwas subtil anderes bedeuten, und die resultierende Zahl kann plausibel aussehen, während sie falsch ist. Der vollständige Datenpfad der folgenreichsten Metrik sollte durchgegangen und auf Übersetzungspunkte geprüft werden.

5. **Dokumentieren wir in unserem Metrik-Charter Erhebungsmethoden, nicht nur Definitionen?** Zwei Teams können sich Namen und Definition einer Metrik teilen, während sie sie nach unterschiedlichen Erhebungsmethoden berechnen, was Zahlen erzeugt, die tatsächlich nicht vergleichbar sind. Eine Stichprobe der Charter sollte gezielt auf diese Lücke geprüft werden.

6. **Wie unterscheiden wir zwischen einem echten Trend und einem Datenqualitätsartefakt, wenn sich eine Zahl unerwartet bewegt?** Eine plötzliche Verschiebung einer Metrik ist oft das erste Anzeichen entweder für eine echte Veränderung oder eine kaputte Pipeline, und die beiden zu unterscheiden verlangt, die Datenquelle gut genug zu kennen, um schnell zu untersuchen. Der tatsächliche Prozess des Teams für die letzte unerklärte Metrikverschiebung sollte diskutiert werden.

## Branchenperspektive

**Startup.** Bei einem kleinen Stack können die meisten Metriken direkt vom CI/CD-Anbieter, dem Versionsverwaltungshost und einem schlanken Umfragetool kommen, ohne eigene Pipelines zu bauen. Das Risiko ist, selbst grundlegende Gesundheitsprüfungen auszulassen, weil das Team schnell vorankommt; eine fünfminütige automatisierte Prüfung, dass eine Datenquelle noch Ereignisse sendet, ist billige Versicherung gegen stilles Blindfliegen.

**Kleinunternehmen.** Auf die eingebaute Berichterstattung vorhandener Tools sollte zurückgegriffen werden, statt eigene Daten-Pipelines zu bauen, für deren Pflege keine Kapazität besteht. Es sollte explizit benannt werden, welche Zahlen aus automatisierten Systemen stammen und welche Schätzungen sind, die jemand in eine Tabelle tippt, weil beide sehr unterschiedliche Zuverlässigkeit tragen, selbst wenn sie am Ende auf derselben Seite landen.

**Enterprise.** Datenqualitätsprobleme verstärken sich über Integrationen, Migrationen und Geschäftsbereichsgrenzen hinweg. In zentralisierte, gut überwachte Daten-Pipelines für die folgenreichsten Metriken sollte investiert werden, automatisierte Datenqualitätsprüfungen sollten Standardpraxis werden, und Erhebungsmethoden, nicht nur Definitionen, sollten geprüft werden, wann immer Metriken über Geschäftsbereiche hinweg verglichen werden.

**Behörden.** Datenherkunft kann rechtliches und prüfungsbezogenes Gewicht tragen: Eine veröffentlichte Leistungszahl muss möglicherweise eine externe Prüfung nicht nur ihres Werts, sondern ihrer gesamten Erhebungskette überstehen. Datenherkunft sollte explizit dokumentiert, historische Aufzeichnungen der Erhebungsmethode auch nach einer Methodikänderung aufbewahrt werden, und es sollte vorbereitet sein, genau zu zeigen, wie eine Zahl entstanden ist, nicht nur, was sie aktuell anzeigt.

## Beispiele

**Enterprise.** Die Engineering-Führung eines Finanzdienstleisters hatte zwei Jahre lang „Lead Time für Änderungen" verfolgt, bevor entdeckt wurde, dass eine Daten-Pipeline-Migration achtzehn Monate zuvor die Zeitstempelquelle still vom ersten Commit auf die Erstellung des Pull Requests umgestellt hatte, was die scheinbare Lead Time über alle Teams hinweg im Schnitt um mehrere Stunden verkürzte, ohne dass es jemand bemerkt oder die Änderung freigegeben hatte. Die Lösung führte eine Datenqualitätsprüfung ein, die die Verteilung jeder Metrik Woche für Woche vergleicht und statistisch ungewöhnliche Verschiebungen zur menschlichen Überprüfung markiert, wodurch im folgenden Jahr zwei weitere stille Pipeline-Probleme entdeckt wurden.

**Behörden.** Das öffentlich sichtbare Dashboard zur Dienstzuverlässigkeit einer Verkehrsbehörde stützte sich auf eine Mischung aus automatisierter Sensor-Telemetrie und manuell eingegebenen Vorfallberichten regionaler Dienststellen. Eine Prüfung ergab, dass Regionen mit geringerer Personalkapazität kleinere Vorfälle systematisch unterberichteten, nicht aus Unehrlichkeit, sondern schlicht weil manuelle Eingabe mit dringenderer Arbeit um Zeit konkurrierte, was bedeutete, dass die veröffentlichte Zuverlässigkeitszahl genau in den Regionen besser aussah als die Realität, die es sich am wenigsten leisten konnten, dass unterversorgte Wartung unbemerkt blieb. Die Behörde ersetzte manuelle Vorfalleingabe, wo machbar, durch automatisierte, sensorausgelöste Protokollierung und fügte der veröffentlichten Zahl eine dokumentierte Schätzung der Abdeckung durch manuelle Berichterstattung hinzu.

## Business Case: Motivation, ROI und TCO

Die Rendite solider Instrumentierung ist Zuversicht: Eine Führungsebene, die ihren Daten vertraut, kann entschlossen danach handeln, während ein Team, das von einer still kaputten Pipeline verbrannt wurde, beginnt, jede Zahl anzuzweifeln, was jede von Metriken abhängige Entscheidung verlangsamt. Dieser Vertrauensverlust ist teuer und schwer zu reparieren und braucht oft weit länger zum Wiederaufbau, als die ursprüngliche Instrumentierungsinvestition gekostet hätte.

Die Gesamtbetriebskosten guter Instrumentierung umfassen die vorgelagerte Engineering-Arbeit zum Bau zuverlässiger Pipelines und die laufenden Kosten der Datenqualitätsüberwachung, in beide wird leicht zu wenig investiert, weil keine von beiden eine eigene sichtbare Dashboard-Kachel erzeugt. Diese Unterinvestition ist eine Milchmädchenrechnung: Die Kosten, eine still kaputte Pipeline zu entdecken, nachdem Monate von Entscheidungen auf schlechten Daten getroffen wurden, sind weit höher als die Kosten der Gesundheitsprüfungen, die sie am ersten Tag entdeckt hätten.

## Antipatterns und Fallstricke

- **Einer Zahl vertrauen, ohne ihr Quellsystem zu kennen:** eine aus einem Framework oder Anbieter-Standard übernommene Metrik, bei der niemand zurückverfolgt, woher die Daten tatsächlich stammen.
- **Selbstauskunft für das nutzen, was ein System direkt beobachten könnte:** führt unnötiges Rauschen und Verzerrung in Daten ein, die objektiv hätten sein können.
- **Keine automatisierten Datenqualitätsprüfungen an einer Metrik-Pipeline:** Eine still kaputte Pipeline kann monatelang unentdeckt falsche Zahlen liefern.
- **Nur die Definition dokumentieren, nicht die Erhebungsmethode:** Zwei Teams mit demselben Metriknamen können dennoch unvergleichbare Zahlen berechnen.
- **Ein Dashboard, das „0" oder veraltete Daten so anzeigt, als seien sie aktuell, ohne Hinweis auf einen Quellenausfall:** schlimmer als eine sichtbare Meldung „Daten nicht verfügbar".
- **Unterversorgte Regionen oder Teams, die aufgrund des manuellen Eingabeaufwands systematisch unterberichten:** eine Datenqualitätslücke, die genau mit den Bereichen korreliert, die die meiste Aufmerksamkeit brauchen.

## Reifegradmodell

- **Stufe 1, Initiieren:** Niemand kann eine Metrik zuverlässig auf ihr Quellsystem zurückführen; Pipelines haben keine Gesundheitsprüfungen, und Ausfälle bleiben unbemerkt.
- **Stufe 2, Entwickeln:** Manche Metriken haben dokumentierte Quellen, aber Erhebungsmethoden sind inkonsistent, und Datenqualitätsprüfungen sind bestenfalls ad hoc.
- **Stufe 3, Standardisieren:** Jede governte Metrik dokumentiert ihr Quellsystem und ihre Erhebungsmethode; automatisierte Pipelines werden gegenüber Selbstauskunft bevorzugt, wo immer ein Ereignis direkt beobachtet werden kann.
- **Stufe 4, Steuern:** Automatisierte Datenqualitätsprüfungen überwachen jede folgenreiche Pipeline, markieren Anomalien zur Überprüfung, und Datenherkunft ist dokumentiert und prüfbar.
- **Stufe 5, Orchestrieren:** Die Organisation behandelt Datenqualität als eigenständige Engineering-Disziplin mit eigener Überwachung und Incident Response und kann auf Anfrage die vollständige Herkunft jeder veröffentlichten Metrik nachweisen.

## Diskussionsanregungen

1. Könnten wir unsere drei wichtigsten Metriken jetzt, live, in diesem Meeting bis zu ihrem genauen Quellsystem zurückverfolgen?
2. Welche unserer aktuellen Metriken beruhen auf Selbstauskunft für etwas, das ein System direkt messen könnte?
3. Haben irgendwelche unserer Metrik-Pipelines heute automatisierte Gesundheitsprüfungen?
4. Wann haben wir zuletzt eine still kaputte Daten-Pipeline entdeckt, und wie lange war sie schon falsch?
5. Wo erzeugt manuelle Dateneingabe eine Lücke zwischen berichteter und tatsächlicher Realität?

## Die wichtigsten Erkenntnisse

- **Automatisierte Instrumentierung** sollte gegenüber Selbstauskunft bevorzugt werden, wo immer ein System das Ereignis direkt beobachten kann; Selbstauskunft sollte für genuin subjektive Erfahrung reserviert bleiben.
- Jede Metrik braucht ein dokumentiertes **Quellsystem und eine Erhebungsmethode**, nicht nur eine Definition.
- Datenqualität **verfällt still**; automatisierte Prüfungen sollten in die Pipeline selbst eingebaut werden, statt Ausfälle zufällig zu entdecken.
- Instrumentiert werden sollte **am Ereignis**, nicht nachgelagert einer Übersetzung, um Verschiebung zwischen dem Geschehenen und der Dashboard-Anzeige zu minimieren.
- Die Kosten einer still kaputten Pipeline, Monate von Entscheidungen auf schlechten Daten, übersteigen die Kosten der Gesundheitsprüfungen, die sie entdeckt hätten, bei Weitem.

## Quellen und weiterführende Literatur

- *Observability Engineering*, von Charity Majors, Liz Fong-Jones und George Miranda (Prinzipien der Instrumentierungs- und Telemetrie-Gestaltung).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble und Gene Kim (der Instrumentierungsansatz hinter den DORA-Metriken).
- *Data Quality: The Accuracy Dimension*, von Jack E. Olson (Datenqualitätskonzepte, anwendbar auf Metrik-Pipelines).
- *How to Measure Anything*, von Douglas W. Hubbard (Messmethoden für Größen, die schwer direkt beobachtbar erscheinen).
