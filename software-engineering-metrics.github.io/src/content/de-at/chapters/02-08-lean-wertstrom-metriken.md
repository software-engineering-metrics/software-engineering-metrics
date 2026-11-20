# 2.8 Lean-Wertstrom-Metriken

## Überblick und Motivation

Jede Metrik, die dieser Teil bisher behandelt hat, Flow-Zeit, Flow-Last, Zykluszeit, Auslastung, stammt von einem weit älteren Werkzeugset ab: den fünf grundlegenden Messgrößen der klassischen **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**-Wertstromanalyse, entwickelt bei Toyota und verallgemeinert über Fertigung, Betrieb und Dienstleistungserbringung hinweg, lange bevor Software sie übernahm. **Lead Time (LT)** ist die gesamte Uhrzeit von der Anfrage einer Arbeit bis zu ihrer Lieferung. **Prozesszeit (PT)** ist die tatsächliche Hands-on-Zeit, die an einer einzelnen Einheit gearbeitet wird. **Zykluszeit (CT)** ist die durchschnittliche Zeit, die zum Abschluss eines einzelnen Knotens oder einer Phase innerhalb des Stroms benötigt wird. **Percent Complete and Accurate (%C/A)** ist der Prozentsatz an Einheiten, die ein nachgelagertes Team ohne nötige Nacharbeit verarbeiten kann. **Taktzeit** ist die maximal akzeptable Zeit, um eine Einheit fertigzustellen und dabei sauber der Kundennachfrage zu entsprechen.

Dieses Thema existiert, weil die Softwareentwicklung diese Ideen nicht erfunden, sondern entlehnt hat, und die Entlehnung manchmal dieselben Wörter für leicht andere Dinge wiederverwendete. Die eigene Zykluszeit dieses Buches (Thema 2.6) misst speziell die Engineering-Phasen einer Änderung, Codierung, Review, Test, Deploy, während Leans klassische CT die allgemeinere „durchschnittliche Zeit pro Knoten" ist, angewendet auf jeden Prozess. Flow-Zeit (Thema 2.4) ist der Name dieses Buches für das, was Lean Lead Time nennt. Diese Zuordnung zu kennen zählt, weil eine Leserin oder ein Leser mit Lean-Six-Sigma-Hintergrund, verbreitet in Fertigung, Logistik, Gesundheitswesen und Behördenbetrieb, diese exakten Begriffe mit ihrer ursprünglichen Bedeutung verwenden wird, und ein Software-Team, das nicht dieselbe Sprache spricht, eine einfache, evidenzgestützte Brücke zu Kolleginnen und Kollegen außerhalb des Engineerings verspielt.

Für große Teams ist %C/A die am meisten unterschätzte Metrik dieses Themas. Sie erfasst etwas, das die Flow-Metriken aus den Themen 2.3 und 2.4 nicht erfassen: wie viel von dem, was eine Phase produziert, tatsächlich von der nächsten Phase nutzbar ist, ohne zurückgeschickt zu werden. Über einen mehrstufigen Wertstrom aufsummiert, ein Konzept, das die Fertigung **Rolled Throughput Yield** nennt, enthüllt %C/A, wie sich Nacharbeit unsichtbar über Übergaben hinweg summiert, ein Muster, für das Konzerne mit langen, teamübergreifenden Pipelines und Behördenprogramme mit mehreren Freigabetoren besonders anfällig sind und das sie selten direkt messen.

## Kernprinzipien

- **Diese fünf Metriken gehen der Software voraus und verallgemeinern über sie hinaus.** Sie sind das gemeinsame Vokabular, das eine Lean-Six-Sigma-geschulte Stakeholderin oder ein Stakeholder, verbreitet in großen Konzernen und Behördenbetrieben, bereits fließend spricht.
- **Terminologie-Kollision ist real und es lohnt sich, sie explizit zu benennen.** Die Zykluszeit dieses Buches (Thema 2.6) und Leans klassische CT sind verwandt, aber nicht identisch; die Zuordnung sollte dokumentiert werden, damit funktionsübergreifende Gespräche nicht still aneinander vorbeigehen.
- **%C/A muss über jede Phase hinweg aufsummiert werden, nicht nur einmal am Ende gemessen.** Nacharbeit, die früh in einem Strom eingeführt und spät gefangen wird, ist für eine Metrik unsichtbar, die nur bei der finalen Lieferung gemessen wird.
- **Taktzeit rahmt Kapazitätsplanung um Nachfrage statt Aufwand herum.** Die Frage verschiebt sich von „wie schnell können wir sein" zu „wie schnell müssen wir sein", was sich direkt mit Auslastung (Thema 2.7) und Flow-Last (Thema 2.4) verbindet.
- **Das sind diagnostische Metriken, keine Vanity-Metriken.** Jede existiert, um eine konkrete operative Frage zu beantworten, nicht um eine beeindruckende Zahl für ein Dashboard zu erzeugen.

## Empfehlungen

### Den eigenen Wertstrom mit allen fünf Lean-Metriken kartieren, bevor ein softwarespezifisches Framework übernommen wird

Lead Time, Prozesszeit, Zykluszeit, %C/A und Taktzeit sollten für eine repräsentative Stichprobe von Arbeit berechnet werden, die durch den Wertstrom läuft, bevor die eigenen Metriken des Flow Frameworks (Themen 2.3 und 2.4) darübergelegt werden. Das liefert eine Baseline, die jede Lean-Six-Sigma-kundige Stakeholderin oder jeder Stakeholder sofort versteht, und es fördert häufig dieselbe Wartezeit-Dominanz zutage, die Thema 2.5 beschreibt, ausgedrückt in einem Vokabular, das jedem bestimmten Software-Framework vorausgeht und es überdauert.

### Percent Complete and Accurate multiplikativ über jede Phase hinweg aufsummieren

%C/A sollte an jeder Phase einzeln gemessen werden, dann sollten die phasenweisen Prozentsätze miteinander multipliziert werden, um den Rolled Throughput Yield des Wertstroms zu erhalten. Drei Phasen, jede einzeln bei 90 % Complete and Accurate laufend, summieren sich auf ungefähr 73 % insgesamt, eine Zahl, die überhaupt nicht wie der eigene Bericht einer einzelnen Phase aussieht und meist die ehrlichere ist. Diese eine Berechnung ist der schnellste Weg zu enthüllen, wie viel Nacharbeit eine mehrstufige Pipeline tatsächlich absorbiert.

### Taktzeit explizit aus echten Kundennachfragedaten festlegen, nicht aus Kapazität

Die Taktzeit sollte als verfügbare Arbeitszeit geteilt durch Kundennachfrage in diesem Zeitraum berechnet werden, bewusst unabhängig davon, wie schnell das eigene Team heute zufällig arbeiten kann. Die gemessene Prozesszeit und Zykluszeit sollten gegen diese Zahl verglichen werden: eine Prozesszeit bequem unter der Taktzeit zeigt gesunden Spielraum an, während eine Zykluszeit, die die Taktzeit übersteigt, konkreter, quantifizierter Beleg für einen Kapazitätsmangel ist, nicht nur ein Gefühl, dass man im Rückstand ist.

### Die Zuordnung zwischen Lean-Begriffen und dem eigenen Vokabular dieses Buches dokumentieren

Wo die eigene Organisation außerhalb der Software bereits ein Lean-Six-Sigma-Programm betreibt, oder wo das Engineering an eine Führungsebene berichtet, die dieses Vokabular fließend spricht, sollte die Zuordnung explizit im Metrik-Charter dokumentiert werden (Thema 1.4): Die Flow-Zeit dieses Buches ist Leans Lead Time, die Zykluszeit dieses Buches (Thema 2.6) ist eine konkrete Anwendung von Leans allgemeinerer CT, und die aktive Zeit dieses Buches (Thema 2.5) ist Leans Prozesszeit. Dieses eine Dokument verhindert eine wiederkehrende, wertlose Debatte darüber, wessen Zahlen „echt" sind.

### %C/A als Leitplanke neben Flow-Velocity nutzen, nicht als deren Ersatz

Rolled Throughput Yield sollte mit Flow-Velocity (Thema 2.3) gepaart werden, genauso wie dieses Buch jede Geschwindigkeitsmetrik mit einer Stabilitäts-Leitplanke paart. Eine steigende Item-Zahl mit sinkendem kumuliertem %C/A bedeutet, dass der Wertstrom mehr Einheiten liefert, die zunehmend später Nacharbeit brauchen, genau das Muster von Geschwindigkeit-ohne-Qualität, vor dem Thema 1.2 jede Metrikfamilie zu schützen mahnt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Nur klassische Lean-Metriken (LT, PT, CT, %C/A, Taktzeit) | Universelles Vokabular; funktioniert über Software- und Nicht-Software-Teams hinweg gleichermaßen | Nicht softwarespezifisch; braucht Übersetzung für engineering-spezifische Phasen |
| Nur Flow-Framework-Metriken (Themen 2.3, 2.4) | Zweckgebaut für Software-Wertströme und Item-Typ-Sichtbarkeit | Lean-Six-Sigma-geschulten Stakeholdern außerhalb des Engineerings unvertraut |
| Beides, mit explizit dokumentierter Zuordnung | Spricht beide Vokabulare; stärkste funktionsübergreifende Brücke | Braucht die vorgelagerte Disziplin, die Zuordnung niederzuschreiben und aktuell zu halten |
| %C/A nur bei finaler Lieferung gemessen | Einfach, eine Zahl | Verbirgt Nacharbeit, die früher im Strom eingeführt und gefangen wurde |

Die zentrale Spannung ist **Universalität gegen Spezifität**. Klassische Lean-Metriken sind für jeden mit Fertigungs-, Betriebs- oder Six-Sigma-Erfahrung sofort lesbar, aber sie wurden nicht mit Softwares konkreten Phasen im Blick entworfen, Code-Review, automatisiertes Testen, Deployment-Freigabe. Die Lösung: Die Lean-Metriken als gemeinsames Basisvokabular für funktionsübergreifende und Führungsgespräche nutzen, und die eigenen Metriken des Flow Frameworks (Themen 2.3 und 2.4) für die softwarespezifische diagnostische Arbeit, die Engineering-Teams täglich leisten.

## Fragen für die Diskussion im Team

1. **Könnten wir heute alle fünf klassischen Lean-Metriken für unseren Wertstrom berechnen, oder haben wir nur einige davon?** Die meisten Software-Teams haben Entsprechungen für Flow-Zeit und Zykluszeit, haben aber Prozesszeit, %C/A oder Taktzeit nie explizit berechnet. Es sollte identifiziert werden, welche der fünf tatsächlich fehlen, bevor angenommen wird, die Lücke sei klein.

2. **Haben wir %C/A je über jede Phase unseres Wertstroms hinweg aufsummiert, oder nur bei der finalen Lieferung gemessen?** Eine einzelne Messung am Ende des Stroms verbirgt genau die sich summierende Nacharbeit, die die Rolled-Throughput-Yield-Berechnung dieses Themas enthüllen soll. Die Aufsummierungsberechnung sollte mit echten Daten versucht werden.

3. **Kennen wir unsere Taktzeit, berechnet aus echter Kundennachfrage, und wie schneidet unsere gemessene Zykluszeit im Vergleich dazu ab?** Die meisten Teams haben diesen Vergleich nie explizit gemacht, was bedeutet, dass Kapazitätsgespräche anekdotisch statt quantifiziert bleiben.

4. **Wären wir zuversichtlich, dasselbe zu meinen, wenn eine Lean-Six-Sigma-geschulte Stakeholderin oder ein Stakeholder von außerhalb des Engineerings nach unserer Zykluszeit fragte?** Die Zykluszeit dieses Buches (Thema 2.6) und Leans klassische CT sind verwandt, aber nicht identisch. Es sollte diskutiert werden, ob diese Unterscheidung in der eigenen Organisation je zu einem echten Missverständnis geführt hat.

5. **War unser Rolled Throughput Yield je bedeutsam niedriger als das eigene berichtete %C/A einer einzelnen Phase?** Wenn die Aufsummierung nie berechnet wurde, sollte diskutiert werden, was erwartet würde, und es sollte dann gegen echte Daten geprüft werden.

6. **Betreibt unsere Organisation außerhalb der Software bereits ein Lean- oder Six-Sigma-Programm, mit dem wir uns abstimmen könnten, statt ein separates, unverbundenes Vokabular zu pflegen?** Viele Konzerne und Behörden haben diese Infrastruktur bereits; es sollte geprüft werden, ob sich das Engineering je tatsächlich damit verbunden hat.

## Branchenperspektive

**Startup.** Vollständiges Lean-Wertstrom-Mapping ist auf dieser Ebene selten die Zeremonie wert, aber Taktzeit lohnt sich, informell zu verstehen: ungefähr zu wissen, wie schnell das Team tatsächlich sein muss, um echter Kundennachfrage zu entsprechen, statt einem willkürlichen internen Tempo, verhindert sowohl zu frühen Kapazitätsüberbau als auch Unterbau, sobald Wachstum eintrifft.

**Kleinunternehmen.** %C/A ist hier die unmittelbar nützlichste der fünf Metriken, da sie direkt „wie viel von dem, was wir ausliefern, muss neu gemacht werden" beantwortet, eine Frage, die Inhaberinnen, Inhaber und kleine Teams akut spüren, ohne immer eine Zahl dafür zu haben. Sie sollte informell für die ein oder zwei kritischen Prozesse verfolgt werden, bevor in irgendetwas Aufwendigeres investiert wird.

**Enterprise.** Hier verdient sich das klassische Lean-Vokabular seinen Nutzen, weil große Konzerne sehr oft bereits ein Lean-Six-Sigma-Programm im Betrieb, in fertigungsnahen Bereichen oder gemeinsamen Diensten betreiben, und Engineering, das dieselbe Sprache spricht, gewinnt eine sofortige, glaubwürdige Brücke zu diesen Funktionen, statt ein separates, reines Software-Metrik-Set von Grund auf rechtfertigen zu müssen.

**Behörden.** Behörden, besonders solche mit Wurzeln in regulatorischen, fertigungsnahen oder logistischen Funktionen, haben häufig bestehende Lean- oder Prozessverbesserungsmandate. Den Wertstrom eines digitalen Dienstes in denselben klassischen Begriffen zu rahmen, Lead Time, Prozesszeit, %C/A, Taktzeit, die das Prozessverbesserungsbüro einer Behörde bereits nutzt, ist oft der schnellste Weg, echte institutionelle Unterstützung für ein Software-Modernisierungsvorhaben zu sichern.

## Beispiele

**Enterprise.** Die interne Softwareabteilung eines Fertigungsunternehmens hatte jahrelang gekämpft, ihre Engineering-Metriken von einer Betriebsführung ernst genommen zu bekommen, die vom Werksboden her fließend Lean Six Sigma sprach. Die Lieferpipeline der Abteilung mit denselben fünf klassischen Metriken neu zu rahmen, Lead Time, Prozesszeit, Zykluszeit, %C/A und Taktzeit für ihren Software-Wertstrom zu berechnen, machte die Zahlen der Abteilung zum ersten Mal sofort für die Betriebsführung lesbar. Eine Rolled-Throughput-Yield-Berechnung über die vier Phasen der Pipeline enthüllte ein tatsächliches %C/A von 61 %, weit unter der eigenen berichteten Zahl jeder einzelnen Phase, was zur Beweisgrundlage für eine Nacharbeitsreduktions-Initiative wurde, die die Betriebsführung noch im selben Quartal finanzierte.

**Behörden.** Das Digital-Genehmigungsteam einer Landesverkehrsbehörde, das an eine Behörde mit langjährigem Lean-Prozessverbesserungsbüro berichtete, hatte dieses Büro nie einbezogen, weil seine eigenen Metriken softwarespezifische Sprache nutzten, die das Büro nicht erkannte. Nach der Übersetzung des Genehmigungswertstroms in Lead Time, Prozesszeit und %C/A identifizierte das Prozessverbesserungsbüro, dass die echte Beschränkung des Teams nicht Engineering-Geschwindigkeit war, sondern eine nachgelagerte juristische Prüfphase, die weit unter ihrer eigenen effektiven Taktzeit relativ zur Genehmigungsnachfrage lief, ein Befund, auf den das Büro sofort reagieren konnte, weil er in vertrauten Begriffen gerahmt war.

## Business Case: Motivation, ROI und TCO

Die Rendite, klassisches Lean-Vokabular neben den softwarespezifischen Metriken dieses Buches zu übernehmen, ist eine glaubwürdige, unmittelbare Brücke zu Prozessverbesserungsexpertise und Finanzierung, die in einer großen Organisation oft anderswo bereits existiert. Das Beispiel des Fertigungsunternehmens oben, Nacharbeitsreduktions-Finanzierung noch im selben Quartal zu sichern, in dem die Neurahmung den Fall lesbar machte, ist das Muster, das der Ansatz dieses Themas zuverlässig erzeugt: Die Einsicht war nicht neu, aber das Vokabular, das sie für das richtige Publikum handlungsfähig machte, war es.

Die Gesamtbetriebskosten sind niedrig: Diese fünf Metriken brauchen keine neue Instrumentierung über das hinaus, was die Themen 2.4 bis 2.6 bereits sammeln, plus eine %C/A-Nacharbeitsklassifikation, die meist eine einfache Ergänzung zu vorhandenem Defekt- und Flow-Item-Tracking ist (Thema 2.2). Die Hauptinvestition ist Übersetzung, die Zuordnung zwischen den Begriffen dieses Buches und Leans klassischen niederzuschreiben, was sich beim ersten Mal amortisiert, wenn es ein funktionsübergreifendes Missverständnis verhindert.

## Antipatterns und Fallstricke

- **%C/A nur bei finaler Lieferung messen:** der Manipulationsvektor im Zentrum dieses Themas. Ein Team kann ein hohes %C/A der letzten Phase berichten, während frühere Phasen still Nacharbeit produzieren, die behoben wird, bevor sie jemand misst, was den gesamten Wertstrom gesünder aussehen lässt, als er ist. Die Leitplanke ist, %C/A multiplikativ über jede Phase aufzusummieren, die Rolled-Throughput-Yield-Berechnung, und periodisch die Definition von „complete and accurate" jeder Phase zu prüfen, damit sie sich nicht still über die Zeit verengt.
- **Annehmen, die Zykluszeit dieses Buches und Leans klassische CT bedeuten exakt dasselbe:** erzeugt echte funktionsübergreifende Verwirrung, wenn die beiden Vokabulare ohne dokumentierte Zuordnung aufeinandertreffen.
- **Taktzeit aus aktueller Kapazität statt echter Kundennachfrage festlegen:** verfehlt den Zweck der Metrik, der darin besteht, eine Lücke zwischen Nachfrage und Kapazität zu enthüllen, nicht das bereits bestehende Tempo zu bestätigen.
- **Klassische Lean-Metriken als veraltet behandeln, sobald ein softwarespezifisches Framework übernommen wird:** verwirft eine glaubwürdige, evidenzgestützte Brücke zu Prozessverbesserungsexpertise, die in der Organisation bereits existieren könnte.
- **Ein bestehendes Lean-Six-Sigma-Programm anderswo in der Organisation ignorieren:** verspielt Finanzierung, Expertise und institutionelle Glaubwürdigkeit, die eine Neurahmung der Liefermetriken in gemeinsamer Sprache erschließen könnte.
- **%C/A berichten, ohne es gegen Flow-Velocity zu paaren:** erlaubt einer steigenden Durchsatzzahl, eine sinkende Nacharbeitsrate zu verbergen, dieselbe Leitplanken-Lücke, vor der dieses Buch durchgängig warnt.

## Reifegradmodell

- **Stufe 1, Initiieren:** Keine der fünf klassischen Lean-Metriken wird berechnet; Lieferung wird ohne Bezug auf Lead Time, Prozesszeit oder %C/A diskutiert.
- **Stufe 2, Entwickeln:** Lead Time und Zykluszeit werden informell verfolgt, aber Prozesszeit, %C/A und Taktzeit werden nicht berechnet, und es gibt keine Zuordnung zum eigenen Vokabular dieses Buches.
- **Stufe 3, Standardisieren:** Alle fünf klassischen Metriken werden konsistent berechnet, und die Zuordnung zum Flow- und Zykluszeit-Vokabular dieses Buches ist in einem gemeinsamen Metrik-Charter dokumentiert.
- **Stufe 4, Steuern:** Rolled Throughput Yield wird über jede Phase des Wertstroms berechnet, und Taktzeit wird gegen gemessene Zykluszeit verglichen, um Kapazitätslücken explizit zu quantifizieren.
- **Stufe 5, Orchestrieren:** Die Organisation hat ihre Software-Liefermetriken mit einem bestehenden Lean- oder Six-Sigma-Programm anderswo im Unternehmen verbunden und kann auf konkrete Investitions- oder Prozessentscheidungen verweisen, die getroffen wurden, weil das gemeinsame Vokabular eine Einsicht für ein Nicht-Engineering-Publikum handlungsfähig machte.

## Diskussionsanregungen

1. Könnten wir heute Lead Time, Prozesszeit, Zykluszeit, %C/A und Taktzeit für unseren Wertstrom berechnen?
2. Wie hoch wäre unser Rolled Throughput Yield, wenn wir das %C/A jeder Phase miteinander multiplizierten?
3. Betreibt unsere Organisation bereits ein Lean- oder Six-Sigma-Programm, mit dem wir Engineering-Metriken nie verbunden haben?
4. Wie schneidet unsere gemessene Zykluszeit im Vergleich zu unserer Taktzeit ab, berechnet aus echter Kundennachfrage?

## Die wichtigsten Erkenntnisse

- Die fünf klassischen Lean-Metriken, **Lead Time, Prozesszeit, Zykluszeit, Percent Complete and Accurate und Taktzeit**, gehen der Software voraus und bleiben das gemeinsame Vokabular Lean-Six-Sigma-geschulter Stakeholder.
- Die eigene **Flow-Zeit und Zykluszeit dieses Buches entsprechen, sind aber nicht identisch mit**, Leans Lead Time und klassischer CT; die Zuordnung sollte explizit dokumentiert werden, um funktionsübergreifende Verwirrung zu vermeiden.
- Der zentrale Manipulationsvektor des Themas ist, **%C/A nur bei finaler Lieferung zu messen**; die Leitplanke ist, es multiplikativ über jede Phase als Rolled Throughput Yield aufzusummieren.
- **Taktzeit rahmt Kapazität um echte Kundennachfrage herum**, nicht um bestehendes Tempo, und paart sich direkt mit Auslastung (Thema 2.7) und Flow-Last (Thema 2.4).
- Softwarelieferung in klassischen Lean-Begriffen neu zu rahmen, ist oft der schnellste Weg, sich mit **bestehender Prozessverbesserungsexpertise und Finanzierung** zu verbinden, die in einer großen Organisation bereits vorhanden ist.

## Quellen und weiterführende Literatur

- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., and Daniel T. Jones. *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, and Daniel Roos. *The Machine That Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill, 2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press, 1988.
