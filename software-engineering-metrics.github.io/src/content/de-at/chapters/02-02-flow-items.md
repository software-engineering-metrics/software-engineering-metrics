# 2.2 Flow-Items: Features, Defekte, Risiken und Schulden

## Überblick und Motivation

Ein **Flow-Item** ist die Arbeitseinheit des Flow Frameworks, und jedes Flow-Item gehört zu genau einem von vier Typen: **Features**, neuer Geschäftswert oder neue Fähigkeit, die einer Kundin oder einem Kunden geliefert wird; **Defekte**, Qualitätskorrekturen für Fehler, die von Nutzerinnen und Nutzern oder durch Tests gefunden wurden; **Risiken**, Sicherheits-, Compliance-, Datenschutz- und Governance-Arbeit, die das Unternehmen schützt; und **Schulden**, [technische Schulden](https://en.wikipedia.org/wiki/Technical_debt), architektonische Verbesserungen und Infrastrukturarbeit, die künftige Geschwindigkeit ermöglicht. Thema 2.1 führte das Framework ein, zu dem diese vier Kategorien gehören; dieses Thema geht in die Tiefe der Taxonomie selbst, weil die Kategorien nur dann Wert liefern, wenn ein Team seine Arbeit ehrlich und konsistent in sie einordnet.

Die entscheidende Eigenschaft von Flow-Items ist, dass die Zuweisung über die vier Typen hinweg ein **Nullsummenspiel** ist: In jedem gegebenen Zeitraum existiert eine feste Menge Engineering-Kapazität, und jede an einem Feature verbrachte Stunde ist eine Stunde, die nicht für Schulden-, Risiko- oder Defektarbeit aufgewendet wird. Das ist keine neue Tatsache über Softwarelieferung, jede Engineering-Führungskraft weiß bereits, dass Kapazität endlich ist, aber die meisten Organisationen haben keinen konsistenten, ehrlichen Weg, die tatsächliche Aufteilung zu sehen. Sprint-Velocity zählt Story Points unabhängig vom Typ; ein abgearbeiteter Backlog sieht identisch aus, egal ob die dahinterliegende Arbeit ein neuer Checkout-Flow oder drei Monate unglamouröser Sicherheitsbehebung war. Flow-Items existieren speziell, um diese unsichtbare Aufteilung sichtbar zu machen.

Für große Teams verändert diese Sichtbarkeit die Natur eines Ressourcengesprächs. Statt dass eine Engineering-Führungskraft ein unquantifiziertes Argument vorbringt, „wir brauchen mehr Zeit für technische Schulden", erzeugt Flow-Item-Klassifikation eine echte Zahl, Schulden verbrauchten 30 % der Kapazität des letzten Quartals, die mit Geschäfts-Stakeholdern diskutiert, verteidigt und bewusst angepasst werden kann. Konzerne, die viele Produktlinien parallel betreiben, und Behörden, die neue bürgernahe Funktionalität gegen das Risiko von Altsystemen abwägen, hängen beide weit mehr von dieser Art vertretbarer, quantifizierter Abwägung ab als von einem privaten, informellen Gefühl, „wir verbringen zu viel Zeit mit Wartung".

## Kernprinzipien

- **Jedes Flow-Item gehört zu genau einem Typ.** Eine eindeutige Klassifikation zu erzwingen, statt eine gemischte oder mehrdeutige zuzulassen, ist das, was die Taxonomie für aggregierte Berichterstattung nutzbar macht.
- **Zuweisung ist ein Nullsummenspiel, nicht additiv.** Mehr Kapazität für Features bedeutet zwangsläufig weniger Kapazität für Defekte, Risiko und Schulden im selben Zeitraum.
- **Es gibt keine universell gesunde Verteilung.** Ein junges Produkt in der Wachstumsphase sollte legitim zu Features neigen; ein reifes System mit echtem technischen Risiko sollte legitim zu Schulden- und Risikoarbeit neigen.
- **Schulden- und Risikoarbeit wird ohne diese Disziplin chronisch unterberichtet.** Sie geschieht tendenziell still, aufgenommen in generische „Engineering-Aufgaben", bis Flow-Item-Klassifikation sie ans Licht zwingt.
- **Klassifikationsqualität bestimmt den gesamten Wert der Taxonomie.** Eine inkonsistent angewendete oder nachträglich manipulierte Taxonomie erzeugt Zahlen, die aktiv irreführen statt zu informieren.

## Empfehlungen

### Jedes Item bei der Aufnahme klassifizieren, anhand einer schriftlichen Definition für jeden Typ

Eine knappe, schriftliche Definition sollte vereinbart werden, was im eigenen Kontext als Feature, Defekt, Risiko und Schulden zählt, und verlangt werden, dass jedes neue Stück Arbeit in dem Moment gegen diese Definition klassifiziert wird, in dem es in den Wertstrom eintritt, nicht nachdem es abgeschlossen ist. Eine im Voraus vereinbarte Definition widersteht der Versuchung, rückwirkend danach zu klassifizieren, wie ein Stück Arbeit am Ende aussah, was genau das Manipulationsrisiko ist, das dieses Thema gleich unten direkt benennt.

### Flow-Verteilung als Trend berichten, nicht als einzelne Momentaufnahme

Die Verteilung eines einzelnen Zeitraums sagt weniger aus als der Trend über mehrere Zeiträume. Eine stetige Abdrift zu einem Item-Typ, Features steigen, während Schulden Quartal für Quartal still schrumpfen, ist ein weit stärkeres Signal als die Zahl eines einzelnen Zeitraums, und es ist meist das Muster, das mit Stakeholdern angesprochen werden sollte, bevor es zur Krise wird, statt danach.

### Eine bewusste Zielverteilung mit Geschäfts-Stakeholdern festlegen, nicht nur mit dem Engineering

Gemeinsam mit Produkt- und Geschäftsführung sollte entschieden werden, wie eine gesunde Verteilung für die aktuelle Phase des eigenen Wertstroms aussieht, und dieses Ziel sollte periodisch überarbeitet werden, statt es standardmäßig driften zu lassen. Ein junges Produkt in der Wachstumsphase und ein reifes System in der Stabilitätsphase haben legitim unterschiedliche gesunde Ziele, und das Ziel selbst sollte eine ausgehandelte Geschäftsentscheidung sein, nicht etwas, das das Engineering still allein entscheidet.

### Flow-Item-Klassifikation gegen unabhängige Belege gegenprüfen

Die Flow-Verteilung sollte periodisch gegen Metriken verglichen werden, die nicht von Selbstklassifikation abhängen: Rate entwichener Defekte (Thema 5.1), Messung technischer Schulden (Thema 4.5) und Metriken des Schwachstellenmanagements (Thema 6.4). Wenn Defekte oder Schwachstellen steigen, während die Anteile der Flow-Items „Defekte" und „Risiko" flach bleiben oder schrumpfen, ist diese Abweichung das klarste verfügbare Signal, dass Klassifikation von der Realität abgedriftet ist.

### Speziell auf das Feature-Factory-Muster achten

Wenn die Flow-Verteilung zeigt, dass Features Quartal für Quartal beständig fast die gesamte Kapazität absorbieren, wobei Schulden- und Risikoarbeit nie über einen symbolischen Anteil hinauskommt, bedeutet dieses Muster (manchmal „Feature-Factory" genannt) meist, dass Schulden und Risiko Kapazität entzogen wird, nicht dass das System tatsächlich keine Wartung braucht. Dieses Muster ist kurzfristig bequem und später teuer und zeigt sich schließlich als Qualitäts- oder Sicherheitskrise, die ohne Vorwarnung im Flow-Verteilungsdiagramm auftaucht, weil die zugrunde liegende Anhäufung nie sichtbar war.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Keine formale Klassifikation (generischer Backlog) | Kein Prozess-Overhead | Schulden-, Risiko- und Defektarbeit bleibt unsichtbar; Ressourcenentscheidungen schwer zu verteidigen |
| Vier-Typen-Flow-Item-Klassifikation | Macht Kapazitätszuweisung sichtbar und mit Stakeholdern verhandelbar | Braucht Disziplin zum Aufnahmezeitpunkt und eine schriftliche, vereinbarte Definition pro Typ |
| Feinere Klassifikation (viele Subtypen) | Mehr diagnostisches Detail | Mehr Klassifikationsaufwand; mehr Zahlen, die Stakeholdern erklärt werden müssen |
| Rückwirkende Klassifikation | Leichter anzuwenden, keine vorgelagerte Prozessänderung | Stark manipulationsanfällig; Klassifikation driftet zu dem, was am besten aussieht |

Die zentrale Spannung ist **Klassifikationsdisziplin gegen Prozess-Overhead**. Eine Vier-Typen-Taxonomie ist bewusst grob, grob genug, dass die Klassifikation eines Items Sekunden dauert, keine Debatte, aber diese Grobheit hält nur, wenn die Disziplin, bei der Aufnahme gegen eine schriftliche Definition zu klassifizieren, tatsächlich aufrechterhalten wird. Die Lösung: die Taxonomie genau so einfach halten, vier Typen, nicht mehr, und jede zusätzliche Strenge in den Prüfschritt investieren (Gegenprüfung gegen unabhängige Belege) statt in ein aufwendigeres Klassifikationsschema, das unter echter Arbeitslast erodiert.

## Fragen für die Diskussion im Team

1. **Wie sähe die tatsächliche Aufteilung über Features, Defekte, Risiko und Schulden aus, wenn wir alles klassifizierten, was unser Team letztes Quartal ausgeliefert hat, und würde das unsere Stakeholder überraschen?** Die meisten Teams haben diese Übung nie ehrlich durchgeführt. Sie sollte mit echten Daten versucht werden, bevor angenommen wird, die Antwort bereits zu kennen.

2. **Haben wir eine schriftliche, vereinbarte Definition dafür, was in unserem Kontext als Feature gegenüber Schulden gegenüber Risiko zählt, oder hängt die Klassifikation davon ab, wer gerade das Ticket beschriftet?** Eine informelle, inkonsistente Definition erzeugt Zahlen, die präzise aussehen, aber tatsächlich nicht zeitraumübergreifend vergleichbar sind.

3. **Ist unsere Flow-Verteilung jemals stetig zu einem Item-Typ abgedriftet, ohne dass das jemand bewusst entschieden hat?** Eine langsame Abdrift ist Zeitraum für Zeitraum leicht zu übersehen, aber offensichtlich, sobald sie als Trend geplottet wird. Mehrere Zeiträume an Daten sollten, falls vorhanden, gezogen und ehrlich auf dieses Muster geprüft werden.

4. **Wie würde eine gesunde Flow-Verteilung für die aktuelle Phase unseres Produkts aussehen, und haben wir dieses Ziel tatsächlich mit Geschäfts-Stakeholdern vereinbart?** Die meisten Organisationen haben dieses Ziel nie explizit gemacht, was bedeutet, dass keine gemeinsame Grundlage besteht, um zu bemerken, wenn die tatsächliche Verteilung davon abdriftet.

5. **Stimmt unsere Flow-Verteilung mit unabhängigen Belegen überein, wie der Rate entwichener Defekte oder der Zahl offener Schwachstellen, oder gibt es eine Abweichung, die es wert ist, untersucht zu werden?** Eine Abweichung hier ist das klarste verfügbare Zeichen, dass Klassifikation von dem abgedriftet ist, was die Arbeit tatsächlich ist.

6. **Könnte jemand in unserem Team ein Schulden- oder Risiko-Item unter Lieferdruck still als Feature umetikettieren, und würden wir das aktuell bemerken, wenn es geschähe?** Das ist das zentrale Manipulationsrisiko dieses Themas, direkt ausgesprochen. Es sollte diskutiert werden, ob der aktuelle Prozess das tatsächlich fangen würde, nicht nur, ob das jemand absichtlich täte.

## Branchenperspektive

**Startup.** Formale Klassifikation fühlt sich oft wie Overhead an, wenn das gesamte Team bereits weiß, woran jeder arbeitet. Das nützliche Minimum auf dieser Ebene ist schlicht, die vier Kategorien während der Planung laut zu benennen, damit Schulden- und Risikoarbeit nicht jedes Mal still depriorisiert wird, wenn eine Feature-Frist Druck erzeugt, ein Muster, das sich böse verstärkt, sobald Codebasis und Team beide wachsen.

**Kleinunternehmen.** Ein einzelnes benutzerdefiniertes Feld oder ein Label im vorhandenen Tracking-Tool reicht, um den Flow-Item-Typ zu erfassen, ohne dedizierte Tooling-Investition. Die Disziplin, konsistent bei der Aufnahme zu klassifizieren, zählt weit mehr als jede Tooling-Raffinesse.

**Enterprise.** Flow-Item-Klassifikation ist der Punkt, an dem dieses Framework seinen Wert im großen Maßstab verdient, weil eine große Organisation, die viele Wertströme parallel betreibt, keinen anderen zuverlässigen, aggregierten Weg hat zu sehen, wie Kapazität tatsächlich über Features, Defekte, Risiko und Schulden verteilt ist. In tool-integrierte Klassifikation und periodische Gegenprüfungen gegen unabhängige Belege sollte investiert werden; manuelle, Ad-hoc-Klassifikation übersteht keine echte organisatorische Größe.

**Behörden.** Flow-Verteilung gibt einer Technologieführung im öffentlichen Sektor eine vertretbare, quantifizierte Antwort, wenn gefragt wird, warum nicht mehr neue bürgernahe Features ausgeliefert werden, wenn die ehrliche Antwort ist, dass die Risiko- und Schuldenlast eines Altsystems einen echten, gerechtfertigten Kapazitätsanteil verbraucht. Diesen Kompromiss explizit und ausgehandelt zu machen, statt ihn still zu absorbieren, baut tendenziell mehr Vertrauen bei Aufsichtsgremien auf als eine unquantifizierte Berufung auf „technische Notwendigkeit".

## Beispiele

**Enterprise.** Das E-Commerce-Plattform-Team eines großen Einzelhandelsunternehmens glaubte, basierend auf Sprint-Velocity, stetigen Feature-Output zu liefern. Eine erste ehrliche Flow-Item-Klassifikationsübung ergab, dass „Features" tatsächlich nur 40 % der abgeschlossenen Arbeit ausmachten, während Schulden, viel davon an ein alterndes Checkout-System gebunden, fast ein Drittel der Kapazität verbrauchten, ohne je in einem früheren Bericht so benannt worden zu sein. Diese Aufteilung der Produktführung zu präsentieren, zusammen mit einer steigenden Rate entwichener Defekte, die die Schuldenlast bestätigte, sicherte ein dediziertes Modernisierungsbudget, das das Team zwei Jahre lang erfolglos allein mit qualitativen Argumenten beantragt hatte.

**Behörden.** Das Digital-Lizenzierungsteam einer staatlichen Kraftfahrzeugbehörde klassifizierte seinen Backlog zum ersten Mal, nachdem ein öffentlicher Ausfall die Aufmerksamkeit auf die Stabilität des zugrunde liegenden Systems gelenkt hatte. Die Übung enthüllte, dass „Risiko"-Arbeit, primär Sicherheits-Patches, die wiederholt zugunsten sichtbarer bürgernaher Features depriorisiert worden waren, im vorangegangenen Jahr auf unter 5 % der Kapazität geschrumpft war, ein Muster, das in der Standardberichterstattung des Teams nie sichtbar gewesen war. Die Führung der Behörde nutzte den Befund, um künftig eine Mindestzuweisung für Risikoarbeit vorzuschreiben, gestützt auf die Flow-Verteilungsdaten statt allein auf eine allgemeine Richtlinienerklärung.

## Business Case: Motivation, ROI und TCO

Die Rendite von Flow-Item-Klassifikation ist eine vertretbare, quantifizierte Grundlage für Ressourcenentscheidungen, die zuvor qualitativ argumentiert wurden und oft gegen das verloren, was für Stakeholder am sichtbarsten war. Das Einzelhandelsbeispiel oben, ein Modernisierungsbudget mit echten Kapazitätsdaten statt einer allgemeinen Bitte zu sichern, ist das Muster, das diese Disziplin zuverlässig erzeugt: Eine konkrete Zahl ist weit schwerer abzutun als ein allgemeiner Eindruck, „wir brauchen mehr Zeit für Wartung".

Die Gesamtbetriebskosten sind gering, sobald Taxonomie und ihre Definitionen vereinbart sind: Klassifikation fügt der Aufnahme Sekunden hinzu, keine bedeutsame Prozesslast, und die dafür nötige Tooling-Integration ist meist ein einzelnes benutzerdefiniertes Feld oder Label. Die echten, laufenden Kosten sind die Disziplin, ehrliche Klassifikation unter Lieferdruck aufrechtzuerhalten, weshalb die periodische Gegenprüfung gegen unabhängige Belege genauso zählt wie die anfängliche Einführung.

## Antipatterns und Fallstricke

- **Arbeit rückwirkend klassifizieren, nachdem das Ergebnis bekannt ist:** der Manipulationsvektor im Zentrum dieses Themas. Unter Lieferdruck kann ein Team Schulden- oder Risikoarbeit nachträglich still als Feature beschriften, oder ein mehrdeutiges Item zu dem Typ hin runden, der auf dem Verteilungsdiagramm besser aussieht, ohne dass eine einzelne Entscheidung für sich genommen je unehrlich wirkt. Die Leitplanke ist Klassifikation zum Aufnahmezeitpunkt gegen eine schriftliche Definition, kombiniert mit periodischen Prüfungen, die die Flow-Verteilung gegen unabhängige Belege wie die Rate entwichener Defekte (Thema 5.1) und Schwachstellenmetriken (Thema 6.4) vergleichen, dieselbe Prüfung-gegen-unabhängige-Belege-Disziplin, die Thema 1.2 für jede Metrik in diesem Buch verlangt.
- **Features beständig fast die gesamte Kapazität absorbieren lassen (das Feature-Factory-Muster):** entzieht Schulden- und Risikoarbeit still Kapazität, bis sie als Krise auftaucht.
- **Die Verteilung eines einzelnen Zeitraums als das ganze Bild behandeln:** übersieht die langsame, kumulative Abdrift, die eine Trendansicht klar zeigt.
- **Eine Zielverteilung ohne Geschäfts-Stakeholder festlegen:** verspielt den Hauptwert des Frameworks, ein gemeinsames, ausgehandeltes Verständnis der Abwägung.
- **Eine inkonsistente oder undokumentierte Definition pro Typ verwenden:** erzeugt Zahlen, die präzise aussehen, aber über die Zeit tatsächlich nicht vergleichbar sind.
- **Die Taxonomie mit vielen Subtypen überkonstruieren:** fügt Klassifikationsaufwand hinzu, der Disziplin untergräbt, ohne proportionalen Erkenntnisgewinn zu bringen.

## Reifegradmodell

- **Stufe 1, Initiieren:** Arbeit wird generisch verfolgt, ohne Flow-Item-Klassifikation; Schulden- und Risikoarbeit ist in der Berichterstattung unsichtbar.
- **Stufe 2, Entwickeln:** Manche Teams klassifizieren Flow-Items informell, aber Definitionen sind inkonsistent, und Klassifikation geschieht oft rückwirkend.
- **Stufe 3, Standardisieren:** Alle Teams klassifizieren bei der Aufnahme gegen eine gemeinsame, schriftliche Definition, und Flow-Verteilung wird als Trend verfolgt.
- **Stufe 4, Steuern:** Flow-Verteilung wird periodisch gegen unabhängige Belege gegengeprüft, und Zielverteilungen werden bewusst mit Geschäfts-Stakeholdern festgelegt.
- **Stufe 5, Orchestrieren:** Flow-Item-Daten informieren direkt Ressourcen- und Investitionsentscheidungen in der gesamten Organisation, und die Führung kann auf konkrete Entscheidungen verweisen, die getroffen wurden, weil Klassifikation eine zuvor unsichtbare Abwägung explizit gemacht hat.

## Diskussionsanregungen

1. Was würde eine ehrliche Flow-Item-Aufteilung der Arbeit des letzten Quartals zeigen, und würde das jemanden überraschen?
2. Haben wir eine schriftliche Definition für jeden der vier Flow-Item-Typen, oder hängt die Klassifikation davon ab, wer die Arbeit beschriftet?
3. Ist unsere Flow-Verteilung jemals zu einem Item-Typ abgedriftet, ohne dass eine bewusste Entscheidung dahinterstand?
4. Gegen welche unabhängigen Belege könnten wir unsere Flow-Verteilung heute gegenprüfen?

## Die wichtigsten Erkenntnisse

- Ein **Flow-Item** gehört zu genau einem von vier Typen, Features, Defekte, Risiken oder Schulden, und die Kapazitätszuweisung über sie hinweg ist **ein Nullsummenspiel**.
- Es gibt **keine universell gesunde Verteilung**; die richtige Mischung hängt von der Phase eines Produkts ab und sollte ein bewusstes, mit Geschäfts-Stakeholdern ausgehandeltes Ziel sein.
- Der zentrale Manipulationsvektor des Themas ist **rückwirkende Klassifikation**, Schulden- oder Risikoarbeit nachträglich still als Feature umzuetikettieren; die Leitplanke ist Klassifikation zum Aufnahmezeitpunkt plus periodische Prüfungen gegen unabhängige Belege.
- Speziell auf das **Feature-Factory-Muster** sollte geachtet werden, Features, die beständig fast die gesamte Kapazität absorbieren, was Schulden- und Risikoarbeit entzieht, bis sie als Krise auftaucht.
- Flow-Verteilung ist als **Trend** am wertvollsten, und ihr größter Nutzen entsteht dadurch, sie direkt mit Geschäfts-Stakeholdern zu teilen.

## Quellen und weiterführende Literatur

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
