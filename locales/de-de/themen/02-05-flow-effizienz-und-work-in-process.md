# 2.5 Flow-Effizienz und Work in Process

## Überblick und Motivation

**Flow-Effizienz** ist das Verhältnis von aktiver Zeit zu Gesamtzeit für ein Stück Arbeit: Wenn eine Änderung zehn Stunden aktiv codiert, überprüft und getestet wird, aber über ihre gesamte Reise insgesamt neunzig Stunden untätig in Warteschlangen sitzt, beträgt die Flow-Effizienz 10 %. Die meisten Software-Lieferpipelines liegen, ehrlich gemessen, irgendwo zwischen 10 % und 25 % Flow-Effizienz, was Menschen überrascht, die erwarten, dass Aufwand dominiert. Die dominante Kostenquelle in den meisten Liefersystemen ist nicht, wie lange Arbeit dauert, sie zu erledigen, sondern wie lange Arbeit wartet, bevor sie begonnen wird.

**[Work in Process](https://en.wikipedia.org/wiki/Work_in_process)** (WIP) ist die Zählung der Items, die zu einem gegebenen Zeitpunkt aktiv bearbeitet werden, über ein Team oder ein System hinweg, dieselbe Größe, die Kapitel 2.4 „Flow-Last" nennt. Der kontraintuitive Befund hinter diesem Kapitel, gestützt durch Jahrzehnte an Forschung im Operations Management und für Softwarelieferung durch Kanban und Warteschlangentheorie formalisiert, ist, dass die Begrenzung von WIP tendenziell den Durchsatz *erhöht*, nicht verringert, weil weniger gleichzeitig in Arbeit befindliche Arbeit weniger Kontextwechsel, kürzere Warteschlangen und schnellere Fertigstellung pro Item bedeutet, obwohl es sich anfühlt, als müsste weniger gleichzeitige Arbeit insgesamt weniger Output erzeugen.

Für große Teams rahmt das Verständnis von Flow-Effizienz fast jedes Lieferproblem um, von „Menschen müssen schneller arbeiten" zu „Arbeit muss weniger warten". Diese Umrahmung zählt, weil die erste Rahmung Druck auf Einzelpersonen einlädt, genau die Falle, vor der Kapitel 2.6 warnt, während die zweite zur Untersuchung von Warteschlangenstruktur, Review-Kapazität und wie viel Arbeit gleichzeitig begonnen wird einlädt, wo die echte, nachhaltige Verbesserung meist liegt. Konzerne, die viele gleichzeitige Initiativen über gemeinsam genutzte Teams jonglieren, sind besonders anfällig für hohe WIP und niedrige Flow-Effizienz, weil das Beginnen neuer Arbeit sich immer wie Fortschritt anfühlt, selbst wenn es still alles bereits Laufende verlangsamt.

## Kernprinzipien

- **Wartezeit, nicht aktiver Aufwand, dominiert die meisten Lieferpipelines.** Flow-Effizienz unter 25 % ist typisch, kein Zeichen eines kaputten Teams.
- **Die Begrenzung von Work in Process erhöht tendenziell den Durchsatz,** statt ihn zu verringern, indem sie Kontextwechsel reduziert und Warteschlangen verkürzt.
- **Neue Arbeit zu beginnen fühlt sich wie Fortschritt an; Arbeit zu beenden ist das, was tatsächlich Wert liefert.** Das ist nicht dasselbe, und Organisationen verwechseln es routinemäßig.
- **Hohe WIP ist oft unsichtbar, bis sie gemessen wird.** Ein Team kann weit mehr gleichzeitige Arbeit jonglieren, als irgendjemandem einzeln bewusst ist.
- **Das ist eine Metrik auf Systemebene, keine individuelle.** WIP-Limits zur Bestrafung von Einzelpersonen anzuwenden, verkennt den ganzen Sinn der Technik.

## Empfehlungen

### Flow-Effizienz messen, bevor angenommen wird, Aufwand sei der Flaschenhals

Das Verhältnis von aktiver Zeit zu gesamter verstrichener Zeit sollte für eine repräsentative Stichprobe jüngster Änderungen berechnet werden, mit den Zykluszeit-Phasendaten aus Kapitel 2.6. Die meisten Teams, die das zum ersten Mal messen, sind überrascht, wie niedrig die Zahl ist, und diese Überraschung ist selbst wertvoll: Sie lenkt die Aufmerksamkeit von „härter arbeiten" zu „Warteschlangen reduzieren", was fast immer der produktivere Hebel ist.

### Ein explizites Work-in-Process-Limit festlegen und sichtbar durchsetzen

Die Anzahl der Items, die ein Team oder eine Einzelperson gleichzeitig aktiv in Arbeit haben kann, sollte gedeckelt und auf einem gemeinsamen Board sichtbar sein (ein physisches oder digitales Kanban-Board ist die klassische Umsetzung). Wenn das Limit erreicht ist, ist die nächste Handlung des Teams, etwas bereits Laufendes fertigzustellen, nicht etwas Neues zu beginnen. Diese eine, aus der schlanken Fertigung entlehnte und in Kanban formalisierte Praxis ist eine der zuverlässigsten verfügbaren Flow-Verbesserungen für ein Software-Team, und sie kostet fast nichts in der Umsetzung.

### Ein WIP-Limit als Systembeschränkung behandeln, nicht als individuelle Quote

Ein WIP-Limit steuert, wie viel Arbeit das *System* (ein Team, eine gemeinsame Review-Warteschlange, eine gemeinsame Umgebung) gleichzeitig in Arbeit hat, nicht wie viel eine einzelne Person anfassen darf. Das Limit als individuelle Leistungsquote anzuwenden, „du darfst nur zwei Tickets offen haben", wendet die Technik falsch an und riskiert genau die Art individueller Manipulation, vor der dieses Buch durchgängig warnt. Das Limit existiert, um den Fluss durch das gesamte System zu schützen, und seine Durchsetzung sollte eine Team-Norm sein, keine persönliche Obergrenze.

### Untersuchen, warum Arbeit untätig liegt, nicht nur wie lange

Wenn eine Flow-Effizienz-Analyse lange Wartezeiten enthüllt, sollte konkret gefragt werden, warum: Wartet Arbeit, weil eine Reviewerin oder ein Reviewer nicht verfügbar ist, weil eine gemeinsame Testumgebung belegt ist, weil eine Abhängigkeit von einem anderen Team noch nicht gelandet ist. Jede dieser Ursachen hat eine andere Lösung. Eine generische Anweisung „Wartezeit reduzieren" ohne diese konkrete Untersuchung führt tendenziell zu generischen, wirkungslosen Reaktionen.

### Darauf achten, dass WIP nach einer anfänglichen Verbesserung wieder hochkriecht

Teams, die erfolgreich ein WIP-Limit einführen, sehen es oft über die Zeit erodieren, während der Druck zurückkehrt, neue Initiativen zu beginnen, „nur dieses eine Mal müssen wir auch das dringend anfangen". Jede Ausnahme vom WIP-Limit sollte als bewusste, sichtbare Entscheidung mit angegebenem Grund behandelt werden, nicht als stille, routinemäßige Umgehung, damit die Disziplin des Limits nicht still zu ihrem ursprünglichen Zustand zurückzerfällt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Kein WIP-Limit | Fühlt sich flexibel an; keine Reibung beim Beginnen neuer Arbeit | Kontextwechsel und Warteschlangen verlangsamen still alles |
| WIP-Limit auf Teamebene | Verbessert Durchsatz und Flow-Effizienz messbar | Braucht Disziplin zur Durchsetzung, besonders unter Termindruck |
| WIP-Quote auf individueller Ebene | Einfach zu formulieren | Wendet die Technik falsch an; riskiert individuelle Manipulation |
| Strenges, unnachgiebiges WIP-Limit | Maximaler Flow-Effizienz-Nutzen | Kann sich in echt dringenden Ausnahmesituationen starr anfühlen |

Die zentrale Spannung ist **Flexibilität gegen Fluss**. Neue Arbeit zu beginnen, wann immer sie dringend erscheint, fühlt sich reaktionsfähig an, aber die Forschung zu Flow-Effizienz und WIP zeigt durchgängig, dass diese Flexibilität auf Kosten geht, irgendetwas schnell fertigzustellen, da mehr gleichzeitige Arbeit längere Warteschlangen und mehr Kontextwechsel für alles bereits Laufende bedeutet. Die Lösung: ein WIP-Limit auf Teamebene als Standard einführen, mit einem bewussten, sichtbaren und seltenen Ausnahmeprozess für echte Notfälle, statt entweder einer starren, ausnahmslosen Regel oder eines unbegrenzten, flexiblen Freibriefs.

## Fragen für die Diskussion im Team

1. **Wie hoch ist unsere tatsächliche Flow-Effizienz, gemessen an echten Zykluszeit-Daten, und überrascht uns diese Zahl?** Die meisten Teams haben das nie berechnet und nehmen an, es sei weit höher, als es sich herausstellt. Eine Stichprobe jüngster Änderungen sollte gezogen und das Verhältnis ehrlich berechnet werden, bevor irgendetwas anderes in diesem Kapitel diskutiert wird.

2. **Wie viel Work in Process haben wir aktuell tatsächlich, über das gesamte Team hinweg, und kannte jemand diese Zahl, bevor sie gezählt wurde?** Hohe WIP ist oft unsichtbar, bis sie explizit gemessen wird, weil jede Einzelperson nur den eigenen Ausschnitt davon sieht. Alles aktuell Laufende sollte gezählt werden, einschließlich Arbeit, die heute niemand aktiv anfasst.

3. **Was müsste sich daran ändern, wie wir auf eine neue dringende Anfrage reagieren, wenn wir ein WIP-Limit einführten?** Diese Frage bringt die echte organisatorische Gewohnheit ans Licht, reflexartig neue Arbeit zu beginnen, die ein WIP-Limit unterbrechen soll, und es lohnt sich, das vor, nicht nach dem Versuch zu diskutieren, ein Limit durchzusetzen.

4. **Wenn Arbeit in unserer Pipeline untätig liegt, was ist der konkrete Grund, und ist es jedes Mal derselbe Grund?** Ein generisches Gefühl, „Dinge warten herum", ist weniger nützlich als eine konkrete, wiederkehrende Ursache: eine nicht verfügbare Reviewerin oder ein nicht verfügbarer Reviewer, eine belegte gemeinsame Umgebung, eine teamübergreifende Abhängigkeit. Das tatsächliche Muster sollte anhand echter jüngster Beispiele benannt werden.

5. **Haben wir je ein WIP-Limit eingeführt und dann zugesehen, wie es durch Ausnahmen still erodierte?** Das ist extrem häufig und lohnt sich, ehrlich zu diskutieren: Welcher Druck verursachte die erste Ausnahme, und wurden die Ausnahmen zum neuen Normalzustand, ohne dass das jemand explizit entschied?

6. **Müsste ein WIP-Limit in unserem Kontext auf individueller, Team- oder Ebene gemeinsamer Ressourcen (wie einer Review-Warteschlange oder Testumgebung) angewendet werden?** Verschiedene Flaschenhälse verlangen Limits auf verschiedenen Ebenen, und ein Limit auf der falschen Ebene anzuwenden, individuelle Quoten statt einer Obergrenze für eine gemeinsame Warteschlange, kann die gesamte Technik falsch anwenden.

## Branchenperspektive

**Startup.** Bei wenigen Menschen ist WIP oft natürlich niedrig, schlicht weil nicht genug Ingenieurinnen und Ingenieure da sind, um viel Arbeit gleichzeitig zu beginnen. Das Risiko ist das gegenteilige: eine Gründerin, ein Gründer oder eine leitende Ingenieurin oder ein leitender Ingenieur, die oder der persönlich weit mehr gleichzeitige Initiativen jongliert, als ihr oder ihm bewusst ist, was sich lohnt zu messen, auch ohne formales Kanban-Tooling.

**Kleinunternehmen.** Ein einfaches sichtbares Board, physisch oder ein einfaches digitales Tool, mit einem expliziten Spaltenlimit reicht aus, um den größten Teil des Nutzens zu erhalten, ohne in ausgefeiltes Flow-Metrik-Tooling zu investieren. Mit einem großzügigen Limit sollte begonnen und es schrittweise verschärft werden, sobald sich das Team mit der Disziplin wohlfühlt.

**Enterprise.** Hohe WIP ist hier besonders häufig und besonders teuer, weil viele gleichzeitige strategische Initiativen um dieselbe gemeinsame Engineering-Kapazität konkurrieren, und eine neue zu beginnen sieht für jede Sponsorin oder jeden Sponsor immer wie Fortschritt aus. WIP sollte auf Portfolioebene sichtbar gemacht werden, nicht nur auf Teamebene, damit die Führungsebene die Kosten sieht, eine weitere Initiative zu beginnen, bevor die aktuellen abgeschlossen sind.

**Behörden.** Mehrjährige Programme häufen oft enorme implizite WIP über viele Arbeitsstränge an, jeder einzeln gerechtfertigt, ohne organisationsweite Sichtbarkeit auf die Gesamtsumme. Portfolioweite WIP-Sichtbarkeit einzuführen, selbst informell, ist oft das überzeugendste Einzelargument dafür, Arbeit zu sequenzieren, statt alles parallel laufen zu lassen, da sich die Flow-Effizienz-Kosten hoher WIP sichtbar summieren, sobald gemessen wird.

## Beispiele

**Enterprise.** Das Plattform-Team eines Finanzdienstleisters jonglierte achtzehn gleichzeitige Initiativen mit nur zwölf Ingenieurinnen und Ingenieuren, ein WIP-zu-Kapazität-Verhältnis, das niemand tatsächlich berechnet hatte, bis ein neuer Engineering-Direktor direkt danach fragte. Die Flow-Effizienz über die Arbeit des Teams hinweg maß unter 12 %. Das Team führte ein explizites WIP-Limit von einer aktiven Initiative pro zwei Ingenieurinnen und Ingenieuren ein und pausierte bewusst mehrere niedriger priorisierte Initiativen, statt die Kapazität weiter dünn zu verteilen. Der Durchsatz, gemessen als echt abgeschlossene Initiativen pro Quartal, mehr als verdoppelte sich innerhalb von zwei Quartalen, obwohl das Team zu jedem gegebenen Zeitpunkt sichtbar „weniger tat".

**Behörden.** Das Programm zur digitalen Transformation einer nationalen Infrastrukturbehörde hatte über vierzig gleichzeitige Arbeitsstränge in seinem Portfolio angehäuft, jeder mit eigener Sponsorin oder eigenem Sponsor und eigener Rechtfertigung, ohne eine einzige Gesamtansicht des Work in Process. Eine Flow-Effizienz-Überprüfung auf Programmebene fand, dass der mediane Arbeitsstrang weniger als 15 % seiner verstrichenen Zeit in aktiver Entwicklung verbrachte, der Rest wartend auf gemeinsame Ressourcen: ein kleines zentrales Architektur-Review-Team, eine gemeinsame Testumgebung und behördenübergreifende Freigaben. Das Programm führte explizite WIP-Limits auf Programmebene ein, sequenzierte Arbeitsstränge, statt alle vierzig parallel laufen zu lassen, und die eigene Verfolgung der Behörde zeigte messbar schnellere Fertigstellung für die aktiv gebliebenen Arbeitsstränge, während die Gesamtzahl der gleichzeitig laufenden stark fiel.

## Business Case: Motivation, ROI und TCO

Die Rendite, Flow-Effizienz und WIP bewusst zu managen, ist kontraintuitiv, aber gut belegt: Der Durchsatz steigt tendenziell, statt zu fallen, wenn eine Organisation gleichzeitig weniger tut, weil weniger Kontextwechsel und kürzere Warteschlangen bedeuten, dass jedes einzelne Stück Arbeit schneller fertig wird. Das Beispiel des Finanzdienstleisters oben, verdoppelter Durchsatz durch bewusst reduzierte gleichzeitige Arbeit, ist ein häufiges Muster, sobald Organisationen Flow-Effizienz tatsächlich messen und danach handeln, statt anzunehmen, mehr parallele Arbeit bedeute immer mehr Fortschritt.

Die Gesamtkosten der Einführung dieser Disziplin sind größtenteils organisatorisch, nicht technisch: ein sichtbares Board, ein vereinbartes WIP-Limit und die Disziplin, Nein zum Beginnen neuer Arbeit zu sagen, wenn das Limit erreicht ist. Diese Disziplin ist schwerer aufrechtzuerhalten als einzuführen, weshalb die Empfehlung oben, auf wiederkriechende WIP zu achten, genauso zählt wie die anfängliche Einführung selbst.

## Antipatterns und Fallstricke

- **Annehmen, aktiver Aufwand dominiere die Lieferzeit, ohne Flow-Effizienz zu messen:** meist falsch, und es lenkt Verbesserungsaufwand auf den falschen Hebel.
- **Ein WIP-Limit als individuelle Quote statt als Systembeschränkung anwenden:** wendet die Technik falsch an und riskiert individuelle Manipulation.
- **Reflexartig neue Arbeit beginnen, weil es sich wie Fortschritt anfühlt:** die Kerngewohnheit, die Flow-Effizienz und WIP-Limits unterbrechen sollen.
- **Ausnahmen vom WIP-Limit zur Routine und unsichtbar werden lassen:** lässt die Disziplin still zu ihrem ursprünglichen Zustand zurückerodieren, ohne dass das jemand absichtlich entscheidet.
- **WIP nur auf Teamebene messen und Überlastung auf Portfolioebene übersehen:** häufig in großen Organisationen, die viele gleichzeitige strategische Initiativen betreiben.
- **Eine niedrige Flow-Effizienz-Zahl als Zeichen eines schlechten Teams behandeln:** Sie ist typisch für die meisten Lieferpipelines und ein Ausgangspunkt für Untersuchung, kein Urteil.

## Reifegradmodell

- **Stufe 1, Initiieren:** Work in Process wird nicht verfolgt; Teams beginnen reflexartig neue Arbeit ohne Sichtbarkeit auf die gesamte gleichzeitige Last.
- **Stufe 2, Entwickeln:** Manche Teams nutzen ein informelles Board, aber WIP-Limits werden nicht konsistent durchgesetzt, und Flow-Effizienz wird nie berechnet.
- **Stufe 3, Standardisieren:** Teams haben explizite, sichtbare WIP-Limits auf Systemebene, und Flow-Effizienz wird periodisch aus echten Zykluszeit-Daten gemessen.
- **Stufe 4, Steuern:** Ausnahmen vom WIP-Limit werden als bewusste, sichtbare Entscheidungen verfolgt; Flow-Effizienz wird über die Zeit auf Erosion überwacht und untersucht, wenn sie sinkt.
- **Stufe 5, Orchestrieren:** WIP ist auf Portfolioebene sichtbar und gemanagt, nicht nur auf Teamebene, und die Organisation kann auf konkrete Durchsatzverbesserungen verweisen, die aus bewusst reduzierter gleichzeitiger Arbeit resultierten.

## Diskussionsanregungen

1. Wie hoch ist unsere tatsächliche Flow-Effizienz, ehrlich aus echten Daten berechnet?
2. Wie viel Work in Process haben wir aktuell, das vor dieser Diskussion niemand gezählt hatte?
3. Wozu müssten wir Nein sagen, um ein echtes WIP-Limit durchzusetzen?
4. Was ist der häufigste konkrete Grund, warum Arbeit in unserer Pipeline untätig liegt?
5. Wo in unserer Organisation ist portfolioweite WIP unsichtbar und wahrscheinlich zu hoch?

## Die wichtigsten Erkenntnisse

- **Flow-Effizienz**, das Verhältnis von aktiver Zeit zu Gesamtzeit, liegt in echten Lieferpipelines typischerweise unter 25 %; Wartezeit, nicht Aufwand, dominiert.
- **Die Begrenzung von Work in Process erhöht tendenziell den Durchsatz**, statt ihn zu verringern, indem sie Kontextwechsel reduziert und Warteschlangen verkürzt.
- Ein **WIP-Limit sollte als Systembeschränkung** angewendet werden, nie als individuelle Quote.
- Der **konkrete Grund**, warum Arbeit untätig liegt, sollte untersucht werden, statt eine generische Anweisung „Wartezeit reduzieren" auszugeben.
- Darauf sollte geachtet werden, dass WIP-Limits **durch routinemäßige Ausnahmen erodieren**; jede Ausnahme sollte als bewusste, sichtbare Entscheidung behandelt werden.
- Kapitel 2.4 nennt diese Größe **Flow-Last**, und Kapitel 2.7 formalisiert die Beziehung als Littles Gesetz: Work in Process entspricht Ankunftsrate mal Zykluszeit, für jede stabile Warteschlange.

## Quellen und weiterführende Literatur

- *The Principles of Product Development Flow*, von Donald G. Reinertsen (Warteschlangentheorie, Losgröße und WIP-Limits in der Produktentwicklung).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, von David J. Anderson (der grundlegende Text zu WIP-Limits und Flow für Software-Teams).
- *Actionable Agile Metrics for Predictability*, von Daniel S. Vacanti (Flow-Effizienz-Messung und flow-basierte Prognose).
- *The Goal*, von Eliyahu M. Goldratt (Engpasstheorie und die kontraintuitive Beziehung zwischen lokaler Geschäftigkeit und Systemdurchsatz).
