# 2.3 Flow-Velocity und Flow-Verteilung

## Überblick und Motivation

**Flow-Velocity** ist die Anzahl der Flow-Items (Kapitel 2.2), die in einem gegebenen Zeitraum abgeschlossen wurden, das Maß des Flow Frameworks für [Durchsatz](https://en.wikipedia.org/wiki/Throughput). **Flow-Verteilung** ist der Anteil jedes Flow-Item-Typs, Features, Defekte, Risiko und Schulden, unter den in demselben Zeitraum abgeschlossenen Items. Die beiden Metriken sind dafür gestaltet, gemeinsam gelesen zu werden: Velocity allein beantwortet „wie viel haben wir ausgeliefert", und Verteilung allein beantwortet „welche Art von Arbeit war es", aber keine der beiden Fragen bedeutet ohne die andere viel. Ein Team kann seine Velocity steigern, während seine Verteilung still von Features weg und zu Defekt-Nacharbeit hin abdriftet, was auf einem Velocity-Diagramm wie Beschleunigung aussieht und tatsächlich ein Symptom sinkender Qualität ist.

Diese Paarung ist dieselbe Disziplin, die Kapitel 1.2 für jede Metrikfamilie in diesem Buch verlangt: nie eine Geschwindigkeitszahl ohne die Leitplanke berichten, die zeigt, was diese Geschwindigkeit gekostet hat. Flow-Velocity ist die direkteste Verallgemeinerung einer Durchsatzmetrik in diesem Teil, im Geist näher an der Deployment-Frequenz (Kapitel 2.10) als an jeder anderen einzelnen Zahl in diesem Buch, aber typbewusst auf eine Weise, wie es Deployment-Frequenz nie war. Deployment-Frequenz sagt, wie oft Code die Produktion erreicht; Flow-Velocity, gepaart mit Verteilung, sagt, wie oft Wert die Produktion erreicht und welche Art von Wert es ist.

Für große Teams, die viele Wertströme parallel betreiben, deckt diese Paarung ein Muster auf, das eine einzelne Durchsatzzahl vollständig verbirgt: ein Wertstrom, dessen Velocity gesund aussieht, während seine Verteilung still zu fast reiner Feature-Arbeit abgedriftet ist und dabei still der Schulden- und Risikokapazität die Nahrung entzieht, vor deren bewusstem Schutz Kapitel 2.2 warnte. Konzerne, die Durchsatz über Produktlinien hinweg vergleichen, und Behörden, die Lieferoutput an Aufsichtsgremien berichten, brauchen beide diese Paarung, um nicht rohen Output mit echtem, nachhaltigem Fortschritt zu verwechseln.

## Kernprinzipien

- **Velocity ohne Verteilung verbirgt, was tatsächlich ausgeliefert wurde.** Eine steigende Item-Zahl sagt nichts darüber, ob diese Zahl gesund, manipuliert oder still zur einfachsten verfügbaren Arbeit hin verschoben ist.
- **Verteilung ohne Velocity verbirgt den Maßstab.** Eine gesund aussehende prozentuale Aufteilung bedeutet wenig, wenn nicht auch bekannt ist, wie viel Gesamtarbeit sie repräsentiert.
- **Die beiden Metriken müssen immer gemeinsam berichtet werden.** Das ist eine direkte Anwendung von Kapitel 1.2s Leitplanken-Paarungsprinzip speziell auf Flow-Daten.
- **Velocity ist derselben Substitutions-Manipulation ausgesetzt wie jede Item-Zähl-Metrik.** Schwere Arbeit in viele kleine, leichte Items aufzuspalten bläht die Zählung auf, ohne proportional mehr Wert zu liefern.
- **Eine gesunde Verteilung ist kontextabhängig, kein festes Ziel.** Kapitel 2.2 behandelt das ausführlich; Velocity und Verteilung sollten immer gegen das Ziel interpretiert werden, das der Kontext nahelegt.

## Empfehlungen

### Flow-Velocity als Trendlinie berichten, nie als Einzelperiodenzahl

Die Item-Zahl eines einzelnen Zeitraums ist verrauscht und leicht falsch gelesen. Flow-Velocity sollte über mehrere aufeinanderfolgende Zeiträume geplottet werden, und der Trend sollte betrachtet werden, nicht ein einzelner Datenpunkt, dieselbe Disziplin, die Kapitel 1.6 für jede zu natürlicher Schwankung neigende Zeitreihen-Metrik empfiehlt.

### Flow-Velocity nie ohne begleitende Verteilung präsentieren

Das sollte als feste Regel für jedes Dashboard oder jeden Bericht behandelt werden, nicht als nettes Extra. Ein allein gezeigtes Velocity-Diagramm lädt genau zu der Fehllesung ein, mit der dieses Kapitel beginnt: steigender Durchsatz, der tatsächlich ein steigender Anteil an Nacharbeit oder leichter Feature-Arbeit ist, die Schulden- und Risikokapazität verdrängt. Beides sollte immer auf derselben Ansicht stehen.

### Velocity nach Größe oder Komplexität gewichten, wenn Item-Größen stark variieren

Rohe Item-Zählung behandelt eine einzeilige Konfigurationsänderung und eine mehrwöchige architektonische Migration als gleichwertig, was zu derselben Substitutions-Manipulation einlädt, die dieses Buch bereits für Deployment-Frequenz benannt hat (Kapitel 2.10): schwere Arbeit in viele kleine Items aufzuspalten bläht die Zählung auf, ohne proportional mehr zu liefern. Wo Item-Größen stark variieren, sollte Velocity nach einer groben Größen- oder Komplexitätsschätzung gewichtet werden, oder die durchschnittliche Item-Größe sollte neben der rohen Zahl verfolgt werden, sodass eine schrumpfende Durchschnittsgröße neben einer steigenden Zahl sichtbar statt verborgen ist.

### Flow-Verteilung auf Abdrift beobachten, nicht nur auf ihre aktuelle Momentaufnahme

Das nützlichste Signal in der Flow-Verteilung sind selten die exakten Prozentsätze dieses Zeitraums; es ist die Richtung der Veränderung über mehrere Zeiträume. Eine stetige Abdrift, Features steigen, während Schulden und Risiko still schrumpfen, sollte mit Stakeholdern angesprochen werden, lange bevor sie zu der Art von Qualitäts- oder Sicherheitsproblem wird, vor deren unsichtbarer Anhäufung unter einem Feature-Factory-Muster Kapitel 2.2 warnt.

### Flow-Velocity nur mit echter Sorgfalt über Wertströme hinweg vergleichen

Zwei Wertströme mit unterschiedlicher Item-Granularität, unterschiedlicher Teamgröße oder unterschiedlicher Produktphase sind allein anhand roher Velocity nicht direkt vergleichbar, dasselbe Fairnessproblem, das Kapitel 2.10 für Deployment-Frequenz zwischen Teams benennt. Velocity sollte zuerst für den eigenen Trend eines Wertstroms genutzt werden, und ein wertstromübergreifender Vergleich sollte erst versucht werden, nachdem echt vergleichbare Item-Definitionen und -Granularität bestätigt wurden.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Nur rohe Item-Zähl-Velocity | Einfach zu berechnen und zu erklären | Anfällig für Substitutions-Manipulation; verbirgt, welche Art von Wert ausgeliefert wurde |
| Velocity gepaart mit Verteilung | Zeigt Maßstab und Wertmischung gemeinsam | Braucht disziplinierte Flow-Item-Klassifikation (Kapitel 2.2), um bedeutsam zu sein |
| Größengewichtete Velocity | Widersteht Substitutions-Manipulation durch Item-Größenaufspaltung | Braucht eine konsistente, vereinbarte Größenschätzungsmethode im Team |
| Wertstromübergreifender Velocity-Vergleich | Nützlich für Investitionsentscheidungen auf Portfolioebene | Leicht unfair ohne Bestätigung echt vergleichbarer Item-Definitionen |

Die zentrale Spannung ist **Einfachheit gegen Manipulationsresistenz**. Rohe Item-Zählung ist die am leichtesten zu berechnende und zu erklärende Zahl, aber auch die am leichtesten aufzublähende, indem schwere Arbeit in viele kleine Stücke aufgespalten wird. Die Lösung: die primäre Metrik einfach halten, rohe Velocity gepaart mit Verteilung, und Größengewichtung für Wertströme reservieren, in denen bekanntermaßen Item-Größen stark genug variieren, dass die einfache Zählung aktiv irreführend geworden ist.

## Fragen für die Diskussion im Team

1. **Wird bei der Berichterstattung von Flow-Velocity immer die Flow-Verteilung mitgezeigt, oder steht Velocity manchmal allein?** Eine Velocity-Zahl ohne ihre Verteilung ist nach dem eigenen zentralen Prinzip dieses Kapitels ein unvollständiges Bild. Die tatsächlichen Dashboards und Berichte sollten auf diese Lücke geprüft werden.

2. **Hat sich unsere durchschnittliche Item-Größe zusammen mit einer steigenden Velocity verändert, und würden wir es wissen, wenn ja?** Eine schrumpfende Durchschnittsgröße neben einer steigenden Zahl ist die spezifische Signatur von auf Flow-Items angewendeter Substitutions-Manipulation. Die echten Daten sollten gezogen werden, statt anzunehmen, das Muster liege nicht vor.

3. **Haben wir je unsere Velocity mit der eines anderen Teams verglichen, ohne zu bestätigen, dass unsere Item-Definitionen und Granularität tatsächlich übereinstimmen?** Ein unfairer Vergleich hier kann ein Team dazu drängen, die eigenen Zahlen zu manipulieren, nur um vergleichbar zu wirken, und spiegelt dasselbe Risiko, das dieses Buch bereits für Deployment-Frequenz benennt.

4. **Ist unsere Flow-Verteilung über die letzten Zeiträume in eine Richtung abgedriftet, und hat das jemand bewusst entschieden?** Eine langsame Abdrift ist Zeitraum für Zeitraum leicht zu übersehen. Mehrere Zeiträume sollten gemeinsam geplottet und ehrlich auf einen Trend geprüft werden, bevor angenommen wird, die aktuelle Aufteilung sei stabil.

5. **Was wäre der einfachste Weg für jemanden, unsere Flow-Velocity aufzublähen, ohne mehr echte Arbeit zu leisten, und würde unsere aktuelle Berichterstattung das fangen?** Die konkrete Mechanik, schwere Items in leichte aufzuspalten, sollte durchgegangen und diskutiert werden, ob das Dashboard dieses Muster tatsächlich aufdecken würde.

6. **Erreichen unsere Velocity- und Verteilungszahlen Geschäfts-Stakeholder jemals gemeinsam, oder reist nur die Velocity-Schlagzeile nach oben?** Das Paarungsprinzip schützt nur vor Fehllesung, wenn beide Hälften tatsächlich von den Menschen gesehen werden, die Entscheidungen aus den Daten treffen.

## Branchenperspektive

**Startup.** Flow-Velocity ist auf dieser Ebene meist leicht informell zu verfolgen, da das gesamte Team bereits ein grobes Gefühl für den Durchsatz hat. Die nützliche Disziplin ist, sie selbst informell mit der Verteilung zu paaren, damit eine Gründerin oder ein Gründer eine steigende Ticket-Abschlusszahl nicht mit echtem Feature-Fortschritt verwechselt, wenn die Zahl tatsächlich von früher Fehlerbehebung dominiert wird.

**Kleinunternehmen.** Velocity und Verteilung sollten gemeinsam aus dem schlanken Tool verfolgt werden, das bereits für Flow-Item-Klassifikation genutzt wird (Kapitel 2.2); auf dieser Ebene ist keine dedizierte Analytics-Plattform nötig. Die Gewohnheit, sie immer nebeneinander zu betrachten, zählt mehr als jede Tooling-Raffinesse.

**Enterprise.** Wertstromübergreifender Velocity-Vergleich ist auf dieser Ebene für Priorisierung auf Portfolioebene verlockend, und genau hier ist auch das Fairnessrisiko am größten, da unterschiedliche Produktlinien legitim sehr unterschiedliche Item-Granularität haben. In die Bestätigung vergleichbarer Definitionen sollte investiert werden, bevor Velocity-Vergleiche genutzt werden, um Investitionsentscheidungen zwischen Teams zu rechtfertigen.

**Behörden.** Flow-Velocity gepaart mit Verteilung gibt einer Technologieführung im öffentlichen Sektor eine weit stärkere Beweisgrundlage für die Berichterstattung von Lieferoutput an Aufsichtsgremien als roher Durchsatz allein, weil sie nicht nur zeigen kann, wie viel ausgeliefert wurde, sondern dass die Mischung eine bewusste, vertretbare Zuweisung über neue Funktionalität, Defektbehebung und Risikomanagement widerspiegelt.

## Beispiele

**Enterprise.** Das Plattform-Team eines Softwareanbieters berichtete drei aufeinanderfolgende Quartale lang stetig steigende Flow-Velocity, ein Trend, den die Führungsebene als beschleunigte Lieferung feierte. Ein genauerer Blick auf die Flow-Verteilung, erst nach einer Kundeneskalation wegen wiederkehrender Fehler angefordert, enthüllte, dass der „Features"-Anteil dieser steigenden Velocity im selben Zeitraum tatsächlich von 70 % auf 45 % gefallen war, wobei Defekt-Korrektur-Items die Lücke füllten. Das Team hatte mehr Items ausgeliefert, aber ein schrumpfender Anteil davon war neuer Wert; der Rest war Nacharbeit, die das Velocity-Diagramm allein vollständig verschleiert hatte.

**Behörden.** Das Datenplattform-Team einer nationalen Statistikbehörde verfolgte Flow-Velocity als primäre Liefermetrik für einen Jahresbericht an sein Aufsichtsgremium. Als ein Gremiumsmitglied fragte, welcher Anteil dieser Velocity neue bürgernahe Fähigkeit repräsentierte, entdeckte das Team, dass es die Zahl nie nach Flow-Item-Typ aufgeschlüsselt hatte und nicht direkt antworten konnte. Die Behörde führte daraufhin gepaarte Velocity-und-Verteilungs-Berichterstattung ein, die enthüllte, dass Risiko- und Compliance-Arbeit, getrieben durch eine neue Datenschutzregulierung, legitim einen wachsenden Kapazitätsanteil verbraucht hatte, eine vertretbare Zuweisung, die das Gremium bereitwillig akzeptierte, sobald sie explizit gezeigt wurde, statt implizit in einem unerklärten Velocity-Rückgang zu bleiben.

## Business Case: Motivation, ROI und TCO

Die Rendite der Paarung von Velocity mit Verteilung ist ein ehrlicherer, vertretbarerer Bericht über Lieferoutput, als es jede der beiden Zahlen allein liefert. Das Beispiel des Softwareanbieters oben, die Entdeckung, dass steigende Velocity tatsächlich sinkenden Feature-Output widerspiegelte, ist genau die Art von Fehllesung, die diese Paarung verhindert, und dieses Muster früh zu fangen, ist weit günstiger, als es erst zu entdecken, nachdem ein kundenseitiges Qualitätsproblem die Frage erzwingt.

Die Gesamtbetriebskosten sind minimal, sobald Flow-Item-Klassifikation (Kapitel 2.2) bereits vorhanden ist: Verteilung ist eine unkomplizierte Aggregation bereits klassifizierter Items, und die Disziplin, beide Metriken gemeinsam zu zeigen, ist eine Berichtskonvention, keine technische Investition. Der größte Teil der Kosten der Empfehlungen dieses Kapitels wurde bereits bezahlt, als die Organisation ehrliche Flow-Item-Klassifikation überhaupt einführte.

## Antipatterns und Fallstricke

- **Flow-Velocity ohne Verteilung berichten:** der Manipulationsvektor im Zentrum dieses Kapitels. Ein Team unter Lieferdruck kann die Item-Zahl steigern, indem es kleine, leichte Feature-Arbeit bevorzugt und schwierigere Schulden-, Risiko- oder Defekt-Items meidet, oder indem es große Items in viele kleine aufspaltet, und ein allein gezeigtes Velocity-Diagramm wird sich als Beschleunigung lesen statt als die tatsächliche Verschiebung dessen, was geliefert wird. Die Leitplanke ist dieselbe Paarungsdisziplin, die Kapitel 1.2 durchgängig in diesem Buch verlangt: Velocity nie ohne Verteilung zeigen, und die durchschnittliche Item-Größe periodisch neben der Zahl prüfen, um Aufspaltung speziell zu fangen.
- **Velocity über Wertströme mit unterschiedlicher Item-Granularität vergleichen:** erzeugt einen unfairen, irreführenden Vergleich.
- **Die Verteilung eines einzelnen Zeitraums als stabil behandeln:** übersieht eine langsame, bedeutsame Abdrift, die nur eine Trendansicht enthüllt.
- **Nur die Velocity-Schlagzeile Geschäfts-Stakeholder erreichen lassen:** verspielt den gesamten schützenden Wert des Paarungsprinzips.
- **Die durchschnittliche Item-Größe ignorieren, während steigende Velocity gefeiert wird:** übersieht die spezifische Signatur von Substitutions-Manipulation.
- **Ein Velocity-Ziel ohne Bezug zur Verteilung festlegen:** lädt genau zu der Manipulation ein, vor der dieses Kapitel namentlich warnt.

## Reifegradmodell

- **Stufe 1, Initiieren:** Flow-Velocity wird, falls überhaupt verfolgt, allein ohne Verteilungsdaten berichtet, und niemand hat auf Substitutions-Manipulation geprüft.
- **Stufe 2, Entwickeln:** Manche Teams verfolgen Verteilung, aber sie wird nicht konsistent mit Velocity in der Berichterstattung gepaart oder als Trend überprüft.
- **Stufe 3, Standardisieren:** Velocity und Verteilung werden immer gemeinsam berichtet, als Trends betrachtet, mit überwachter durchschnittlicher Item-Größe, um Substitutions-Manipulation zu fangen.
- **Stufe 4, Steuern:** Verteilungsabdrift wird proaktiv untersucht, bevor sie zu einem Qualitäts- oder Sicherheitsproblem wird, und wertstromübergreifende Velocity-Vergleiche werden erst gemacht, nachdem echt vergleichbare Item-Definitionen bestätigt wurden.
- **Stufe 5, Orchestrieren:** Velocity und Verteilung informieren direkt Investitionsentscheidungen auf Portfolioebene, und die Organisation kann auf konkrete Fälle verweisen, in denen Verteilungsabdrift gefangen und korrigiert wurde, bevor sie einen sichtbaren Ausfall verursachte.

## Diskussionsanregungen

1. Enthält unsere Flow-Velocity-Berichterstattung immer die Verteilung, oder haben wir je eines ohne das andere gezeigt?
2. Hat sich unsere durchschnittliche Flow-Item-Größe kürzlich zusammen mit einer Veränderung der Velocity verschoben?
3. Würden wir wissen, ob unsere Flow-Verteilung über die letzten Quartale stetig abgedriftet ist?
4. Was wäre nötig, damit jemand unsere Velocity aufbläht, ohne mehr echten Wert zu liefern, und würden wir es bemerken?

## Die wichtigsten Erkenntnisse

- **Flow-Velocity** misst Durchsatz; **Flow-Verteilung** misst, welche Art von Arbeit dieser Durchsatz repräsentiert. Sie sollten immer gemeinsam berichtet werden.
- Diese Paarung ist eine direkte Anwendung des **Leitplanken-Prinzips** aus Kapitel 1.2: nie eine Geschwindigkeitszahl ohne den Kontext zeigen, was sie gekostet hat.
- Der zentrale Manipulationsvektor des Kapitels ist, **Velocity allein zu berichten**, was eine Verschiebung zu leichter Feature-Arbeit oder Item-Aufspaltung verbergen kann, die die Zählung aufbläht, ohne proportionalen Wert zu liefern.
- **Verteilungsabdrift** ist als Trend über mehrere Zeiträume am sichtbarsten, nicht in der Momentaufnahme eines einzelnen Zeitraums.
- **Wertstromübergreifende Velocity-Vergleiche** brauchen echt vergleichbare Item-Definitionen, um fair zu sein; ohne das führen sie mehr in die Irre, als sie informieren.

## Quellen und weiterführende Literatur

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
