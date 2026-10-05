# 2.4 Flow-Zeit und Flow-Last

## Überblick und Motivation

**Flow-Zeit** ist die gesamte verstrichene Zeit von dem Moment, in dem ein Flow-Item (Kapitel 2.2) in den Wertstrom eintritt, bis es geliefert wird, und misst Reaktionsfähigkeit über den gesamten Pfad von der Identifikation eines Geschäftsbedarfs bis zum Erhalt von Wert durch eine Kundin oder einen Kunden. **Flow-Last** ist die Gesamtzahl der Flow-Items, die in einem gegebenen Moment im Wertstrom aktiv oder wartend sind, der Name des Flow Frameworks für das, was Kapitel 2.5 Work in Process nennt. Gemeinsam sind das die zwei Flow-Framework-Metriken, die am direktesten mit der Mathematik der Warteschlangentheorie verbunden sind, weil Flow-Last nicht nur mit Flow-Zeit korreliert, sondern sie mathematisch bestimmt.

Diese Beziehung ist **[Littles Gesetz](https://en.wikipedia.org/wiki/Little%27s_law)**, ein Beweis aus der Warteschlangentheorie (Kapitel 2.7 behandelt ihn vollständig), der besagt, dass die durchschnittliche Anzahl an Items in einem stabilen System der durchschnittlichen Ankunftsrate multipliziert mit der durchschnittlichen Zeit entspricht, die jedes Item im System verbringt. Hier angewendet: Flow-Last entspricht der Ankunftsrate multipliziert mit der Flow-Zeit. Das ist die nützlichste Einzeltatsache dieses Kapitels, weil sie ein Argument, das früher qualitativ war, „wir sind zu überlastet, Dinge dauern zu lange", in ein beweisbares, quantitatives verwandelt, das eine Geschäftsführung nicht leicht abtun kann: Wenn Flow-Last weiter steigt, während die Ankunftsrate flach bleibt, ist ein Anstieg der Flow-Zeit mathematisch garantiert, nicht nur wahrscheinlich.

Für große Teams ist das oft die überzeugendste Einzelzahl im gesamten Framework. Eine Geschäftsführung, die sich dagegen sträubt, neue Arbeit abzulehnen, weil jede Anfrage für sich genommen gerechtfertigt wirkt, wird oft akzeptieren, dass die Überlastung eines Wertstroms nachweislich jedes bereits darin befindliche Item verlangsamt, sobald Flow-Last verfolgt und die Beziehung zur Flow-Zeit direkt gezeigt wird, statt abstrakt argumentiert. Konzerne, die viele strategische Initiativen gleichzeitig jonglieren, und Behördenprogramme, die Dutzende parallele Arbeitsstränge betreiben, hängen beide von diesem Beweis ab, nicht nur von der dahinterliegenden Intuition, um es zu rechtfertigen, Nein zum gleichzeitigen Beginn weiterer Arbeit zu sagen.

## Kernprinzipien

- **Flow-Last bestimmt Flow-Zeit mathematisch, über Littles Gesetz.** Das ist keine Korrelation; es ist ein Beweis, der für jeden stabilen Wertstrom gilt.
- **Flow-Zeit umspannt den gesamten Wertstrom, nicht nur das Engineering.** Sie beginnt, wenn ein Geschäftsbedarf identifiziert wird, nicht wenn das Engineering die Arbeit aufnimmt, was die Zykluszeit aus Kapitel 2.6 dann weiter zerlegt.
- **Steigende Flow-Last ist das früheste Warnzeichen für steigende Flow-Zeit.** Weil die Beziehung beweisbar ist, kann Flow-Last als Frühindikator beobachtet werden, nicht nur entdeckt werden, nachdem sich die Flow-Zeit bereits verschlechtert hat.
- **Der Eintrittspunkt des Wertstroms muss festgelegt und dokumentiert sein.** Wo die Flow-Zeit-Uhr zu laufen beginnt, ist eine definitorische Entscheidung, die demselben Manipulationsrisiko ausgesetzt ist wie jede andere Metrikgrenze in diesem Buch.
- **Eine Geschäftsführung kann direkt auf Flow-Last einwirken.** Anders als Flow-Zeit, eine nachlaufende Messung, ist Flow-Last ein Hebel: Neue Arbeit abzulehnen, ist eine heute verfügbare Handlung.

## Empfehlungen

### Den Eintrittspunkt des Wertstroms festlegen und dokumentieren, bevor Flow-Zeit gemessen wird

Es sollte explizit entschieden werden, ob die Flow-Zeit beginnt, wenn ein Geschäftsbedarf erstmals identifiziert, wenn er formal genehmigt, oder wenn das Engineering die Arbeit aufnimmt, und diese Wahl sollte genauso dokumentiert werden, wie Kapitel 1.4 es für jeden Metrik-Charter empfiehlt. Diese eine Entscheidung bestimmt, ob Flow-Zeit echte durchgängige Reaktionsfähigkeit misst oder nur den engeren Ausschnitt davon, den das Engineering kontrolliert, und die Definition später ohne Offenlegung zu ändern, ist das zentrale Manipulationsrisiko dieses Kapitels.

### Flow-Last kontinuierlich verfolgen, nicht periodisch

Weil Flow-Last über Littles Gesetz ein Frühindikator für noch kommende Flow-Zeit ist, sollte sie als lebendige, kontinuierlich aktualisierte Zahl verfolgt werden, nicht als periodische Momentaufnahme. Eine Flow-Last, die bereits wochenlang gestiegen ist, bis sie jemand prüft, hat bereits genauso lange still die Flow-Zeit verlängert, unsichtbar, bevor die Metrik aufholte.

### Littles Gesetz explizit nutzen, wenn für ein WIP-Limit oder eine Kapazitätserhöhung argumentiert wird

Wenn dafür argumentiert wird, weniger parallele Arbeit zu beginnen, oder Kapazität hinzuzufügen, sollte die tatsächliche Gleichung präsentiert werden, nicht nur die Empfehlung: Flow-Last entspricht Ankunftsrate mal Flow-Zeit, sodass, wenn die Ankunftsrate ungefähr fest ist, eine Reduzierung der Flow-Last mathematisch garantiert die Flow-Zeit reduziert. Das ist ein wesentlich stärkeres Argument gegenüber einer skeptischen Stakeholderin oder einem skeptischen Stakeholder als eine unquantifizierte Behauptung, „wir sind zu beschäftigt", weil es beweisbar statt behauptet ist.

### Flow-Zeit von den zugrunde liegenden Ursachen der Flow-Last trennen, bevor eine Lösung vorgeschlagen wird

Wenn die Flow-Last hoch ist, sollte untersucht werden, welcher Flow-Item-Typ (Kapitel 2.2) sie tatsächlich treibt: zu viele gleichzeitig begonnene Features, ein Rückstau unbehandelter Defekte, oder Risikoarbeit, die auf eine gemeinsame Freigabe wartet. Jede Ursache legt eine andere Lösung nahe, und „die Flow-Last ist hoch" als einzelnes, undifferenziertes Problem zu behandeln, führt tendenziell zu einer generischen, wirkungslosen Reaktion.

### Flow-Zeit gegen Zykluszeit gegenprüfen, um zu isolieren, wo Verzögerung tatsächlich geschieht

Da Flow-Zeit den gesamten Wertstrom umspannt und Zykluszeit (Kapitel 2.6) nur den Engineering-Anteil davon abdeckt, sollten beide direkt verglichen werden. Eine große Lücke zwischen Flow-Zeit und Zykluszeit bedeutet, dass der Großteil der Verzögerung geschieht, bevor das Engineering die Arbeit überhaupt sieht, in Freigabewarteschlangen, Priorisierungs-Backlogs oder Übergaben zwischen Teams, was auf eine ganz andere Lösung hindeutet als eine Lücke, die sich innerhalb des Engineerings selbst konzentriert.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Flow-Zeit nur ab Engineering-Aufnahme messen | Einfach, passt zu vorhandener Zykluszeit-Instrumentierung | Übersieht Verzögerung vor dem Engineering, unterschätzt echte Reaktionsfähigkeit |
| Flow-Zeit ab echter Geschäftsbedarf-Identifikation messen | Erfasst echte durchgängige Reaktionsfähigkeit | Braucht Instrumentierung von Phasen außerhalb direkter Engineering-Kontrolle |
| Periodische Flow-Last-Momentaufnahmen | Günstig, gelegentlich zu berechnen | Verpasst den Frühindikator-Wert; steigende Last bleibt zu lange unbemerkt |
| Kontinuierliches Flow-Last-Tracking | Lebendiger, handlungsfähiger Frühindikator | Braucht laufende Tool-Integration, nicht nur einen gelegentlichen Bericht |

Die zentrale Spannung ist **Umfang gegen Instrumentierungsreichweite**. Flow-Zeit nur ab Engineering-Aufnahme zu messen, ist weit leichter zu instrumentieren, da es die bereits von Kapitel 2.6 erhobenen Zykluszeit-Daten wiederverwendet, aber es unterschätzt still die echte Reaktionsfähigkeit, indem es alles ignoriert, was geschieht, bevor das Engineering die Arbeit sieht. Die Lösung: mit der engeren, auf Engineering beschränkten Messung beginnen, wenn das heute alles ist, was instrumentiert werden kann, aber die Erweiterung des Flow-Zeit-Startpunkts stromaufwärts, in Geschäftsbedarf-Identifikation und Priorisierung, als kurzfristige Priorität behandeln, nicht als dauerhafte Einschränkung.

## Fragen für die Diskussion im Team

1. **Wo beginnt unsere Flow-Zeit-Uhr heute tatsächlich, und stimmt die gesamte Organisation zu, dass das der richtige Startpunkt ist?** Eine Diskrepanz zwischen dem, wo Stakeholder annehmen, dass die Uhr beginnt, und wo sie tatsächlich beginnt, ist eine häufige, stille Quelle von Misstrauen gegenüber der Metrik. Die dokumentierte Definition sollte gegen das gemeinsame Verständnis geprüft werden.

2. **Haben wir je geprüft, ob unsere gemessene Flow-Last, Ankunftsrate und Flow-Zeit tatsächlich Littles Gesetz erfüllen?** Wenn sie sich nicht ungefähr ausgleichen, wird eine der drei Zahlen inkonsistent gemessen. Die tatsächlichen Zahlen sollten gemeinsam durchgegangen werden, statt anzunehmen, die Prüfung würde bestehen.

3. **Wird Flow-Last kontinuierlich verfolgt, oder würde ein stetiger Anstieg wochenlang unbemerkt bleiben, bevor ihn jemand prüft?** Ein Frühindikator schützt nur, wenn ihn tatsächlich jemand nahezu in Echtzeit beobachtet, nicht nur in einem vierteljährlichen Bericht überprüft.

4. **Können wir, wenn die Flow-Last steigt, sagen, welcher Flow-Item-Typ sie tatsächlich treibt, oder liest sie sich als eine undifferenzierte Zahl?** Eine generische Diagnose „wir sind überlastet" erzeugt eine generische, oft wirkungslose Reaktion. Es sollte geprüft werden, ob die aktuelle Instrumentierung steigende Last tatsächlich einer konkreten Ursache zuordnen kann.

5. **Wie groß ist die Lücke zwischen unserer Flow-Zeit und unserer Zykluszeit, und was legt diese Lücke darüber nahe, ob die meiste Verzögerung vor oder nach dem Engineering geschieht?** Dieser Vergleich enthüllt oft, dass die größte Verbesserungsmöglichkeit vollständig außerhalb der eigenen Kontrolle des Engineerings liegt.

6. **Hat je jemand still unseren Flow-Zeit-Startpunkt verengt, um die Zahl besser aussehen zu lassen, ohne dass diese Änderung dokumentiert oder offengelegt wurde?** Das ist das zentrale Manipulationsrisiko dieses Kapitels, direkt ausgesprochen. Es sollte ehrlich gefragt werden, ob die eigene Definition je auf diese Weise abgedriftet ist.

## Branchenperspektive

**Startup.** Flow-Last ist meist niedrig, schlicht weil nicht genug Menschen da sind, um viel Arbeit gleichzeitig zu beginnen, aber dieselbe mathematische Beziehung gilt trotzdem in dem Moment, in dem eine Gründerin, ein Gründer oder eine leitende Ingenieurin oder ein leitender Ingenieur zum persönlichen Flaschenhals für viele parallele Initiativen wird. Flow-Last sollte auch ohne dediziertes Tooling informell verfolgt werden, da Littles Gesetz unabhängig vom Maßstab gilt.

**Kleinunternehmen.** Eine einfache, gemeinsame Liste von allem aktuell Aktiven reicht meist aus, um Flow-Last ohne dedizierte Wertstrom-Management-Software zu berechnen. Die nützliche Gewohnheit ist, sie regelmäßig genug zu prüfen, dass eine steigende Zahl früh gefangen wird, nicht erst entdeckt wird, nachdem sich die Flow-Zeit bereits sichtbar verschlechtert hat.

**Enterprise.** Hier verdient sich Littles Gesetz seinen Nutzen als Argument, nicht nur als Metrik: Eine große Organisation, die Dutzende gleichzeitige strategische Initiativen jongliert, kann die beweisbare Beziehung zwischen Flow-Last und Flow-Zeit nutzen, um einen evidenzbasierten Fall für die Sequenzierung von Arbeit zu machen, etwas, das ein rein qualitatives Argument „wir sind zu beschäftigt" gegen entschlossenen Stakeholder-Druck selten erreicht.

**Behörden.** Mehrjährige Programme häufen routinemäßig große, implizite Flow-Last über viele Arbeitsstränge an, jeder einzeln gerechtfertigt, ohne organisationsweite Sichtbarkeit auf die Gesamtsumme. Littles Gesetz direkt zu präsentieren, zu zeigen, dass das eigene Flow-Zeit-Wachstum des Programms mathematisch durch seine eigene steigende Flow-Last erklärt wird, ist oft der klarste und überzeugendste verfügbare Beleg dafür, Arbeitsstränge zu sequenzieren, statt sie alle unbegrenzt parallel laufen zu lassen.

## Beispiele

**Enterprise.** Die Plattformorganisation eines Medientechnologieunternehmens betrieb zweiundzwanzig gleichzeitige strategische Initiativen bei einer Kapazität, die realistisch für etwa zwölf reichte, eine Diskrepanz, die niemand quantifiziert hatte, bis eine neue Engineering-Führungskraft direkt nach der Flow-Last fragte. Die Flow-Zeit für die mediane Initiative war im Vorjahr um 40 % gestiegen, ein Trend, den die Führungsebene darauf zurückgeführt hatte, dass „die Arbeit schwieriger wird". Littles Gesetz zusammen mit den tatsächlichen Flow-Last- und Ankunftsratenzahlen zu präsentieren, zeigte, dass das Wachstum vollständig allein durch steigende Flow-Last erklärt wurde, ohne dass eine Änderung der zugrunde liegenden Arbeitsschwierigkeit nötig war, um es zu erklären. Die Organisation sequenzierte Initiativen auf eine nachhaltige Flow-Last herunter, und die mediane Flow-Zeit fiel innerhalb von zwei Quartalen um fast ein Drittel.

**Behörden.** Das Modernisierungsprogramm einer Bundesbehörde für Fördermittelverwaltung hatte Flow-Last über Dutzende parallele Arbeitsstränge angehäuft, ohne eine einzige verfolgte Gesamtsumme, wobei jede Sponsorin oder jeder Sponsor eines Arbeitsstrangs glaubte, die eigene Initiative sei isoliert betrachtet angemessen ausgestattet. Eine Analyse des Programmbüros mit Littles Gesetz zeigte, dass die aggregierte Flow-Zeit des Programms, die Zeit von der Genehmigung eines Arbeitsstrangs bis zu seiner Lieferung, sich fast exakt allein aus seiner aggregierten Flow-Last vorhersagen ließ, ein Befund, der Sponsorinnen und Sponsoren überzeugte, die Depriorisierungsargumente über ein Jahr lang abgelehnt hatten. Das Programm führte eine explizite Flow-Last-Obergrenze ein, und neue Arbeitsstränge treten nun in eine Warteschlange ein, statt unabhängig von der aktuellen Last sofort zu beginnen.

## Business Case: Motivation, ROI und TCO

Die Rendite, Flow-Last und Flow-Zeit gemeinsam zu verfolgen, ist ein beweisbarer, nicht nur überzeugender Fall dafür, Arbeit zu sequenzieren, statt alles parallel laufen zu lassen. Das Beispiel des Medientechnologieunternehmens oben, eine gesamte Flow-Zeit-Regression allein durch Flow-Last zu erklären, ist das Muster, das diese Kombination zuverlässig erzeugt: Ein konkretes, quantitatives Argument gelingt dort, wo ein qualitativer Appell an „zu beschäftigt" zuvor gegen echten organisatorischen Druck, mehr Arbeit zu beginnen, scheiterte.

Die Gesamtbetriebskosten sind im Verhältnis zu ihrer Überzeugungskraft niedrig: Flow-Last braucht nur eine lebendige Zählung aktiver und wartender Items, und Flow-Zeit braucht die Instrumentierung des Eintrittspunkts des Wertstroms, Arbeit, die sich beim ersten Mal amortisiert, wenn sie eine Organisation davon abhält, sich zu mehr gleichzeitigen Initiativen zu verpflichten, als ihre tatsächliche Kapazität tragen kann.

## Antipatterns und Fallstricke

- **Den Flow-Zeit-Startpunkt still verengen, um die Zahl zu schönen:** der Manipulationsvektor im Zentrum dieses Kapitels. Den Start der Uhr von echter Geschäftsbedarf-Identifikation auf einen späteren Punkt zu verschieben, Engineering-Aufnahme, formale Genehmigung, verkürzt die Flow-Zeit, ohne die echte Reaktionsfähigkeit überhaupt zu ändern, und kann graduell genug geschehen, dass keine einzelne Änderung wie bewusste Manipulation aussieht. Die Leitplanke ist, den Eintrittspunkt explizit in einem Metrik-Charter (Kapitel 1.4) zu dokumentieren und ihn periodisch gegen die dokumentierte Definition zu prüfen, dieselbe Disziplin, die dieses Buch für jede Metrikgrenze verlangt.
- **Flow-Last nur periodisch messen:** verspielt ihren Wert als Frühindikator, da ein stetiger Anstieg wochenlang unbemerkt bleiben kann.
- **Flow-Last als einzelne undifferenzierte Zahl behandeln:** übersieht, welcher Flow-Item-Typ eine Überlastung tatsächlich treibt, was zu einer generischen statt gezielten Reaktion führt.
- **Die Lücke zwischen Flow-Zeit und Zykluszeit ignorieren:** übersieht, ob sich Verzögerung vor oder nach dem Engineering konzentriert, was sehr unterschiedliche Lösungen nahelegt.
- **Für reduzierte parallele Arbeit argumentieren, ohne Littles Gesetz explizit zu präsentieren:** Ein qualitativer Appell lässt sich für eine Stakeholderin oder einen Stakeholder weit leichter abtun als eine quantitative, beweisbare Beziehung.
- **Annehmen, Littles Gesetz gelte nur bei großem Maßstab:** Es gilt für jedes stabile System unabhängig von der Größe, einschließlich einer einzelnen überlasteten Person.

## Reifegradmodell

- **Stufe 1, Initiieren:** Weder Flow-Zeit noch Flow-Last wird verfolgt; Verzögerung wird anekdotisch ohne stützende Daten diskutiert.
- **Stufe 2, Entwickeln:** Flow-Zeit wird nur ab Engineering-Aufnahme verfolgt, und Flow-Last wird periodisch statt kontinuierlich geprüft.
- **Stufe 3, Standardisieren:** Flow-Zeit wird ab einem dokumentierten, organisationsweiten Eintrittspunkt des Wertstroms gemessen, und Flow-Last wird kontinuierlich als Frühindikator verfolgt.
- **Stufe 4, Steuern:** Littles Gesetz wird explizit genutzt, um Kapazitäts- und Sequenzierungsentscheidungen zu rechtfertigen, und steigende Flow-Last wird einem konkreten Flow-Item-Typ zugeordnet, bevor eine Lösung vorgeschlagen wird.
- **Stufe 5, Orchestrieren:** Die Organisation setzt explizite Flow-Last-Obergrenzen über ihre Wertströme hinweg und kann auf konkrete, durch Littles Gesetz gestützte Sequenzierungsentscheidungen verweisen, die die Flow-Zeit messbar verbessert haben.

## Diskussionsanregungen

1. Wo beginnt unsere Flow-Zeit-Uhr tatsächlich, und ist diese Definition je ohne Dokumentation abgedriftet?
2. Erfüllen unsere gemessene Flow-Last, Ankunftsrate und Flow-Zeit ungefähr Littles Gesetz?
3. Wird Flow-Last kontinuierlich genug verfolgt, dass ein stetiger Anstieg innerhalb von Tagen, nicht Monaten, gefangen würde?
4. Wie groß ist die Lücke zwischen unserer Flow-Zeit und unserer Zykluszeit, und was sagt uns diese Lücke darüber, wo Verzögerung tatsächlich geschieht?

## Die wichtigsten Erkenntnisse

- **Flow-Last bestimmt Flow-Zeit mathematisch**, über Littles Gesetz: Flow-Last entspricht Ankunftsrate mal Flow-Zeit, für jeden stabilen Wertstrom.
- **Flow-Zeit umspannt den gesamten Wertstrom**, von der Geschäftsbedarf-Identifikation bis zur Lieferung, breiter als der reine Engineering-Umfang der Zykluszeit (Kapitel 2.6).
- Der zentrale Manipulationsvektor des Kapitels ist, **den Flow-Zeit-Startpunkt still zu verengen**; die Leitplanke ist eine dokumentierte, geprüfte Eintrittspunkt-Definition.
- Flow-Last sollte **kontinuierlich verfolgt werden**, nicht periodisch, damit sie als echter Frühindikator funktioniert statt als nachlaufende Entdeckung.
- Littles Gesetz sollte **explizit** genutzt werden, nicht nur als Intuition, wenn für ein WIP-Limit, eine Kapazitätserhöhung oder die Sequenzierung paralleler Arbeit argumentiert wird.

## Quellen und weiterführende Literatur

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
