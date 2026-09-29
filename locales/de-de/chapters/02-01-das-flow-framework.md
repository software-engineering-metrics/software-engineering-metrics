# 2.1 Das Flow Framework

## Überblick und Motivation

Das **Flow Framework** ist ein Management- und Strukturmodell, geschaffen von Mik Kersten und veröffentlicht in seinem 2018 erschienenen Buch *Project to Product*. Es existiert, um eine Frage zu beantworten, die reine Pipeline-Metriken nicht beantworten können: nicht nur wie schnell und wie sicher Code vom Commit zur Produktion gelangt, sondern welche Art von Wert überhaupt durch die Pipeline fließt, und ob diese Mischung die tatsächliche Strategie des Unternehmens widerspiegelt. Das Framework behandelt Softwarelieferung als **[Wertstrom](https://en.wikipedia.org/wiki/Value_stream)**, die durchgängige Abfolge von Aktivitäten, die eine Idee in Wert verwandelt, den eine Kundin oder ein Kunde erhält, direkt entlehnt aus der Wertstromanalyse-Tradition der schlanken Fertigung.

Dieses Buch nutzt das Flow Framework als organisierende Struktur von Teil 2. Kapitel 2.2 führt seine vier Flow-Items ein, die Kapitel 2.3 und 2.4 führen seine fünf Flow-Metriken ein, Kapitel 2.8 verfolgt diese Metriken zurück zu ihrem Ursprung in der klassischen Lean-Wertstromanalyse, und Kapitel 2.10 behandelt die DORA-Metriken als engeres, pipelinefokussiertes Referenzframework, mit dem dieser Teil nicht mehr beginnt. Das ist eine bewusste Wahl, keine Abwertung von DORAs Forschung. DORA misst Systemdurchsatz und -stabilität mit echter statistischer Strenge, schweigt aber zu der Frage, die einer Geschäftsführung tatsächlich am meisten am Herzen liegt: Von allem, was die Engineering-Organisation dieses Quartal ausgeliefert hat, wie viel davon war neuer Kundenwert, und wie viel wurde still durch das Beheben von Defekten, das Management von Risiken oder das Abbauen von Schulden verbraucht. Das Flow Framework existiert speziell, um diese Mischung sichtbar zu machen.

Für große Teams ist diese Unterscheidung nicht akademisch. Eine Plattformorganisation, die Dutzende Wertströme betreibt, kann hervorragende DORA-Zahlen haben, schnelle, häufige, stabile Deployments, während ihr tatsächlicher Produkt-Output still zu fast reiner Wartungsarbeit abgedriftet ist, ein Muster, das für ein Dashboard unsichtbar ist, das nur Pipeline-Mechanik misst. Konzerne und Behörden, die Engineering-Investitionen gegenüber Stakeholdern rechtfertigen müssen, die in Geschäftsbegriffen denken, nicht in Pipeline-Begriffen, brauchen ein Vokabular, das Lieferaktivität mit strategischer Absicht verbindet. Genau das liefert dieses Framework.

## Kernprinzipien

- **Ein Wertstrom ist die Messeinheit, nicht ein Team oder eine Pipeline.** Er reicht von einem Kunden- oder Geschäftsbedarf bis zum gelieferten Ergebnis und überschreitet dabei jede Teamgrenze, die die Arbeit tatsächlich überschreitet.
- **Flow-Items machen das „Was" sichtbar, nicht nur das „wie schnell".** Die vier Kategorien aus Kapitel 2.2, Features, Defekte, Risiken und Schulden, verwandeln eine implizite Priorisierungsentscheidung in eine explizite, messbare.
- **Kapazitätszuweisung über Flow-Items hinweg ist ein Nullsummenspiel.** Mehr Kapazität für einen Item-Typ bedeutet weniger verfügbare Kapazität für die anderen; das Framework macht diesen Kompromiss sichtbar, statt ihn implizit zu lassen.
- **Die fünf Flow-Metriken beantworten Geschäftsfragen, nicht nur Engineering-Fragen.** Sie sind dafür gestaltet, einer nicht-technischen Stakeholderin oder einem nicht-technischen Stakeholder präsentiert zu werden, nicht innerhalb eines Engineering-Teams zu bleiben.
- **Wertstrom-Management sollte kontinuierlich sein, keine einmalige Mapping-Übung.** Statische Wertstromkarten veralten; das Framework ist dafür gebaut, aus den Tools instrumentiert zu werden, die Teams bereits nutzen.

## Empfehlungen

### Den Wertstrom kartieren, bevor irgendetwas instrumentiert wird

Bevor irgendeine Flow-Metrik übernommen wird, sollte der tatsächliche Pfad durchgegangen werden, den ein Stück Arbeit von der Identifikation eines Geschäftsbedarfs bis zum Erhalt von Wert durch eine Kundin oder einen Kunden nimmt, wobei jede Phase und jede Übergabe zwischen Teams benannt wird. Das ist die klassische [Wertstromanalyse](https://en.wikipedia.org/wiki/Value_stream_mapping)-Übung, adaptiert aus der schlanken Fertigung, und sie zu überspringen ist der häufigste Grund, warum eine Flow-Framework-Einführung Zahlen produziert, denen niemand vertraut: Metriken, die gegen einen ungeprüften, nur informell verstandenen Prozess berechnet werden, stimmen selten mit dem überein, was tatsächlich geschieht.

### Flow-Metriken mit den Tools verbinden, die Teams bereits nutzen

Das Flow Framework ist für kontinuierliches, automatisiertes Wertstrom-Management gebaut, nicht für eine periodische manuelle Mapping-Übung. Flow-Item-Tracking sollte direkt in die Tools integriert werden, durch die Arbeit bereits fließt, Jira, Azure DevOps, GitHub, statt ein paralleles Tracking-System zu bauen, das Teams von Hand aktualisieren müssen. Der Zustand eines Flow-Items sollte sich selbst aktualisieren, während sich das zugrunde liegende Ticket oder der Pull Request bewegt, dieselbe Instrumentierung-statt-Selbstauskunft-Disziplin, die Kapitel 1.5 für jede Metrik in diesem Buch empfiehlt.

### Flow-Verteilung direkt Geschäfts-Stakeholdern präsentieren, nicht nur der Engineering-Führung

Die größte verpasste Gelegenheit bei diesem Framework ist, es als internes Engineering-Werkzeug zu behandeln. Flow-Verteilung, der Anteil der Arbeit, der an Features gegenüber Defekten, Risiko und Schulden geht (Kapitel 2.3), ist speziell dafür gestaltet, ein Gespräch mit Produkt- und Geschäftsführung zu sein, weil sie eine implizite Priorisierungsentscheidung, wie viel Kapazität in neuen Wert versus das Aufrechterhalten des Betriebs fließt, explizit und verhandelbar macht, statt sie anzunehmen.

### Die vier Flow-Items als echte Taxonomie behandeln, nicht als Formalität

Jede Arbeitseinheit sollte bei der Aufnahme in genau einen der vier Flow-Item-Typen klassifiziert werden, nicht rückwirkend. Eine nachträglich angewendete Klassifikation, oder eine locker angewendete, weil „es im Grunde ein Feature ist", untergräbt den gesamten Wert der Taxonomie, weil der ganze Sinn eine ehrliche, konsistente Aufzeichnung dessen ist, wohin Kapazität tatsächlich geflossen ist.

### Die Wertstromkarte überarbeiten, wenn sich die Organisation ändert, nicht nach festem Plan

Eine Wertstromkarte veraltet in dem Moment, in dem sich Teamgrenzen, Tooling oder das Produkt selbst bedeutsam ändern, nicht nach einem willkürlichen jährlichen Rhythmus. Eine Reorganisation, eine größere Tooling-Migration oder ein bedeutender Produktschwenk sollte als Auslöser behandelt werden, den Wertstrom erneut zu begehen, weil eine gegen eine veraltete Karte berechnete Flow-Metrik still das Falsche misst.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Nur Pipeline-Metriken (DORA, Kapitel 2.10) | Einfach, gut validiert, günstig aus vorhandenen CI/CD-Daten zu instrumentieren | Schweigt darüber, welche Art von Wert geliefert wird |
| Vollständige Einführung des Flow Frameworks | Verbindet Lieferung mit Geschäftsstrategie; macht Wertmischung sichtbar und verhandelbar | Braucht eine ehrliche Wertstromkarte und konsistente Flow-Item-Klassifikationsdisziplin |
| Statisches, einmaliges Wertstrom-Mapping | Günstig, schnell als Workshop-Übung durchzuführen | Veraltet schnell; erzeugt eine Momentaufnahme, keine lebende Metrik |
| Kontinuierliches, tool-integriertes Wertstrom-Management | Lebendige, stets aktuelle Daten; skaliert über viele Wertströme | Braucht echte Tooling-Integrationsarbeit im Voraus |

Die zentrale Spannung ist **Geschäftsverständlichkeit gegen Instrumentierungsaufwand**. Pipeline-Metriken sind günstig, weil die Pipeline die Daten bereits erzeugt; Wertstrom-Metriken brauchen eine ehrliche Karte des gesamten Prozesses und eine disziplinierte Klassifikationsgewohnheit zum Aufnahmezeitpunkt, die Pipeline-Metriken nie verlangten. Die Lösung: mit einem einzigen Wertstrom beginnen, nicht mit der gesamten Organisation auf einmal, ihn richtig kartieren und erst dann Flow-Item-Tracking in vorhandene Tools integrieren, statt einen Big-Bang-Rollout über alle Teams gleichzeitig zu versuchen.

## Fragen für die Diskussion im Team

1. **Könnten wir gerade jetzt eine genaue Wertstromkarte für unser wichtigstes Produkt zeichnen, oder würden wir bei mehreren Übergaben raten?** Die meisten Organisationen haben diesen Pfad noch nie durchgängig begangen. Die Übung sollte ehrlich versucht und jede Stelle notiert werden, an der die Gruppe uneinig ist, was tatsächlich geschieht, weil diese Uneinigkeit selbst diagnostisch ist.

2. **Würde die Führungsebene des Produkts überrascht, wenn wir alles, was unser Team letztes Quartal ausgeliefert hat, in Features, Defekte, Risiko und Schulden klassifizierten?** Die meisten Teams haben diese Aufteilung nie explizit gemacht, und die Antwort enthüllt oft eine Wartungslast oder ein Schuldenproblem, das in einer einfachen Zählung „gelieferter Story Points" zuvor unsichtbar war.

3. **Haben wir einen echten, tool-integrierten Weg, Flow-Items zu verfolgen, oder würde das verlangen, dass jemand Arbeit von Hand klassifiziert und neu klassifiziert?** Ein manuelles System verfällt schnell unter echter Arbeitslast; ein tool-integriertes nicht. Es sollte ehrlich eingeschätzt werden, welches tatsächlich tragfähig gehalten werden kann.

4. **Wann hat sich unsere Wertstromkarte zuletzt geändert, und haben wir unsere Metriken entsprechend aktualisiert?** Reorganisationen und Tooling-Migrationen machen eine Wertstromkarte still ungültig, und wenige Organisationen erinnern sich, sie dann erneut zu überarbeiten.

5. **Werden unsere Flow-Metriken jemals direkt Geschäfts- oder Produkt-Stakeholdern präsentiert, oder bleiben sie innerhalb des Engineerings?** Der größte Vorteil des Frameworks gegenüber reinen Pipeline-Metriken ist genau dieses Gespräch, und es zu überspringen verspielt den größten Teil des Werts des Frameworks.

6. **Was wäre nötig, damit jemand unsere Flow-Item-Klassifikation manipuliert, ohne auf dem Papier irgendetwas Unehrliches zu tun?** Es sollte durchgegangen werden, wie ein Team unter Lieferdruck Schulden- oder Risikoarbeit still als Features umetikettieren könnte, um produktiver zu wirken, und diskutiert werden, ob das aktuell bemerkt würde.

## Branchenperspektive

**Startup.** Eine vollständige Wertstromkarte ist für ein fünfköpfiges Team, das den gesamten Prozess bereits auswendig kennt, meist übertrieben. Die nützliche Gewohnheit auf dieser Ebene ist schlicht, die vier Flow-Item-Typen in Planungsgesprächen laut zu benennen, damit Schulden- und Risikoarbeit nicht still aus dem Blick verschwinden, sobald eine Feature-Frist naht.

**Kleinunternehmen.** Flow-Item-Klassifikation sollte innerhalb des schlanken Tracking-Tools eingeführt werden, das bereits genutzt wird, eine beschriftete Spalte oder ein benutzerdefiniertes Feld, statt eines dedizierten Wertstrom-Management-Produkts. Die Disziplin konsistenter Klassifikation zählt weit mehr als die Raffinesse des dahinterstehenden Toolings.

**Enterprise.** Hier verdient sich das Framework seinen Nutzen, weil eine große Organisation, die Dutzende Wertströme über viele Produktlinien hinweg betreibt, keinen anderen zuverlässigen Weg hat, an einem Ort zu sehen, wie Engineering-Kapazität tatsächlich über Features, Defekte, Risiko und Schulden verteilt wird. In die Tooling-Integration sollte investiert werden; die manuelle Alternative übersteht keinen Kontakt mit echter Größe.

**Behörden.** Flow-Verteilung gibt einer behördlichen Engineering-Organisation eine vertretbare, geschäftsverständliche Antwort auf „warum wird nicht mehr neue Funktionalität ausgeliefert", wenn die ehrliche Antwort ist, dass ein wachsender Kapazitätsanteil in Sicherheitsbehebung oder Alt-Schulden fließt. Diesen Kompromiss sichtbar und explizit zu machen, statt den Druck still zu absorbieren, ist oft das nützlichste Einzelding, das dieses Framework einer Technologieführung im öffentlichen Sektor bietet.

## Beispiele

**Enterprise.** Die Schadensplattform-Organisation eines großen Versicherungskonzerns glaubte, basierend auf ihren Sprint-Velocity-Berichten, primär neue Features auszuliefern. Eine erste Wertstrom-Mapping- und Flow-Item-Klassifikationsübung enthüllte, dass Schulden- und Risikoarbeit, viel davon undokumentierte technische Schulden aus einem jahrzehntealten Kernsystem, tatsächlich fast die Hälfte der gesamten Engineering-Kapazität verbrauchte, eine Tatsache, die keine frühere Berichterstattung zutage gefördert hatte, weil diese Arbeit immer in generische „Engineering-Aufgaben" gefaltet worden war. Diese Aufteilung dem Führungsausschuss zu präsentieren, sicherte erstmals in der Geschichte der Plattform ein dediziertes Schuldenabbau-Budget, statt dass Schuldenarbeit weiterhin still gegen jede Feature-Anfrage konkurrierte.

**Behörden.** Die Digitaldienste-Abteilung einer nationalen Steuerbehörde nutzte Wertstromanalyse, um zu diagnostizieren, warum ein Vorzeige-Feature für Bürgerinnen und Bürger trotz stetiger Sprint-Abschlüsse seit über einem Jahr „in Arbeit" war. Die Karte enthüllte, dass sich der Wertstrom tatsächlich über fünf separate Teams mit drei Übergaben erstreckte, die das Organigramm nicht widerspiegelte, und Flow-Item-Klassifikation zeigte, dass die tatsächliche Engineering-Zeit des Features nur einen kleinen Bruchteil seiner gesamten Flow-Zeit ausmachte, der Rest verbraucht durch Übergabeverzögerungen zwischen Teams, die keine Metrik eines einzelnen Teams sehen konnte. Die Abteilung strukturierte sich für diese spezifische Produktlinie um den Wertstrom statt um das Organigramm herum und senkte die Flow-Zeit innerhalb von zwei Quartalen erheblich.

## Business Case: Motivation, ROI und TCO

Die Rendite der Einführung des Flow Frameworks ist eine vertretbare, geschäftsverständliche Antwort auf eine Frage, die Pipeline-Metriken nicht beantworten können: Wird Engineering-Kapazität so zugewiesen, wie die Führungsebene glaubt. Das Versicherungsbeispiel oben, das fast die Hälfte der Kapazität als zuvor unsichtbare Schuldenarbeit zutage fördert, ist ein häufiges Muster, sobald eine Organisation ihre Arbeit tatsächlich ehrlich klassifiziert, und diese Sichtbarkeit erschließt routinemäßig Investitionen, die eine vage Anfrage „wir brauchen mehr Zeit für technische Schulden" nie erreichen könnte.

Die Gesamtbetriebskosten konzentrieren sich auf zwei Stellen: die anfängliche Wertstrom-Mapping-Übung, die echte Moderationszeit braucht, um ehrlich durchgeführt zu werden, und die Tooling-Integration, die nötig ist, um Flow-Item-Daten ohne manuellen Pflegeaufwand aktuell zu halten. Beide Kosten sind einmalig oder wartungsarm, sobald sie gut erledigt sind, was das Framework im Unterhalt erheblich günstiger macht, als es in der Einführung ist.

## Antipatterns und Fallstricke

- **Wertstrom-Mapping als einmaligen Workshop behandeln, der nie überarbeitet wird:** Die Karte veraltet in dem Moment, in dem sich die Organisation ändert, und eine gegen eine veraltete Karte berechnete Metrik misst das Falsche.
- **Ein paralleles, manuell gepflegtes Flow-Item-Tracking-System bauen:** verfällt schnell unter echter Arbeitslast; stattdessen in vorhandene Tools integrieren.
- **Flow-Items rückwirkend statt bei der Aufnahme klassifizieren:** der Manipulationsvektor im Zentrum dieses Kapitels. Unter Lieferdruck kann ein Team Schulden- oder Risikoarbeit nachträglich still als Features umetikettieren, um produktiver gegenüber Stakeholdern zu wirken, die nur das Flow-Verteilungsdiagramm sehen, ohne dass jemals jemand eine explizite, sichtbare Entscheidung dazu trifft. Die Leitplanke ist, Klassifikation bei der Aufnahme zu verlangen, bevor das Ergebnis bekannt ist, und periodisch eine Stichprobe klassifizierter Items dagegen zu prüfen, was die zugrunde liegende Änderung tatsächlich bewirkt hat, dieselbe Prüfdisziplin, die Kapitel 1.2 für jede Metrik in diesem Buch verlangt.
- **Flow-Metriken nur innerhalb des Engineerings halten:** verspielt den Hauptvorteil des Frameworks, ein gemeinsames Vokabular mit Geschäfts-Stakeholdern.
- **Das Organigramm statt des tatsächlichen Wertstroms kartieren:** verbirgt teamübergreifende Übergaben, die oft die größte Verzögerungsquelle sind.
- **Das Framework organisationsweit einführen, bevor es an einem Wertstrom validiert wurde:** riskiert eine große Investition in Metriken, denen niemand vertraut, weil die zugrunde liegende Karte nie auf Genauigkeit geprüft wurde.

## Reifegradmodell

- **Stufe 1, Initiieren:** Es existiert keine Wertstromkarte; Arbeit wird als generische Tickets ohne Flow-Item-Klassifikation verfolgt.
- **Stufe 2, Entwickeln:** Ein Wertstrom wurde kartiert, und Flow-Items werden informell klassifiziert, aber das Tracking ist manuell und inkonsistent angewendet.
- **Stufe 3, Standardisieren:** Flow-Item-Klassifikation ist in vorhandenes Tooling integriert und wird konsistent bei der Aufnahme über die wichtigsten Wertströme hinweg angewendet.
- **Stufe 4, Steuern:** Flow-Verteilung wird regelmäßig mit Geschäfts-Stakeholdern überprüft, und Wertstromkarten werden aktiv aktuell gehalten, während sich die Organisation ändert.
- **Stufe 5, Orchestrieren:** Die Organisation weist Engineering-Investitionen bewusst über Wertströme hinweg anhand von Flow-Daten zu und kann auf konkrete strategische Entscheidungen verweisen, ein Schuldenabbau-Budget, eine Team-Umstrukturierung, die getroffen wurden, weil das Framework einen zuvor unsichtbaren Kompromiss sichtbar gemacht hat.

## Diskussionsanregungen

1. Könnten wir heute eine genaue Wertstromkarte für unser Vorzeigeprodukt zeichnen, ohne zu raten?
2. Welcher Prozentsatz der Kapazität des letzten Quartals würde eine ehrliche Flow-Item-Klassifikation als Schulden und Risiko statt Features enthüllen?
3. Erreichen unsere Flow-Metriken aktuell Geschäfts-Stakeholder, oder bleiben sie innerhalb des Engineerings?
4. Was ist die größte teamübergreifende Übergabe in unserem Wertstrom, die unser Organigramm nicht widerspiegelt?

## Die wichtigsten Erkenntnisse

- Das **Flow Framework** aus Mik Kerstens *Project to Product* misst, welche Art von Wert durch eine Lieferpipeline fließt, nicht nur, wie schnell die Pipeline selbst läuft.
- Ein **Wertstrom**, nicht ein Team oder eine Pipeline, ist die Messeinheit des Frameworks, und ihn ehrlich zu kartieren kommt vor jeder Instrumentierung.
- **Flow-Item-Klassifikation bei der Aufnahme, nicht nachträglich**, ist die Leitplanke gegen den zentralen Manipulationsvektor dieses Kapitels: Schulden- oder Risikoarbeit still als Features umzuetikettieren, um produktiver zu wirken.
- Flow-Metriken sollten **mit vorhandenen Tools verbunden werden**, Jira, Azure DevOps, GitHub, statt mit einem parallelen manuellen Tracking-System, das echte Arbeitslast nicht übersteht.
- Flow-Daten sollten **direkt Geschäfts-Stakeholdern präsentiert werden**; dieses Gespräch, nicht ein internes Engineering-Dashboard, ist der Hauptvorteil des Frameworks gegenüber reinen Pipeline-Metriken.

## Quellen und weiterführende Literatur

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
