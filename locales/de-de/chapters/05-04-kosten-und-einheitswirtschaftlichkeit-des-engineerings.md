# 5.4 Kosten und Einheitswirtschaftlichkeit des Engineerings

## Überblick und Motivation

Dieses Kapitel wendet Teil 5 explizit finanziell: wie Engineering-Kosten in Begriffen ausgedrückt werden, die eine finanzielle Stakeholderin oder ein finanzieller Stakeholder direkt nutzen kann, und wie **Einheitswirtschaftlichkeit** aufgebaut wird, Kosten ausgedrückt pro bedeutsamer Einheit von Output oder Nutzung, statt als undurchsichtige, aggregierte Abteilungsbudgetzeile. Engineering-Kosten sind meist die größte kontrollierbare Ausgabenzeile in einer softwaregetriebenen Organisation, und dennoch ist sie häufig die am wenigsten gut verstandene von der Finanzfunktion, berichtet als eine einzelne große Zahl mit wenig Sichtbarkeit darüber, was sie antreibt oder wie sie mit Wachstum skaliert. Dieses Kapitel existiert, um diese Lücke zu schließen, weil eine Engineering-Führungskraft, die „was kostet es uns, dieses System zu betreiben" oder „wie skalieren unsere Kosten, während wir wachsen" nicht in konkreten finanziellen Begriffen beantworten kann, in jedem Budgetgespräch echt im Nachteil ist.

Die spezifische Disziplin, die dieses Kapitel empfiehlt, Einheitswirtschaftlichkeit, bedeutet, Kosten pro Deployment, pro bedienter Kundin oder bedientem Kunden, pro verarbeiteter Transaktion, oder einer anderen Einheit auszudrücken, die dem Geschäft tatsächlich wichtig ist, statt nur als Gesamtpersonalkosten oder Gesamt-Cloud-Ausgaben. Diese Umrahmung verbindet sich direkt mit dem Ergebnisse-über-Output-Prinzip aus Kapitel 1.3: eine fallende Gesamtkostenzahl ist nicht automatisch gut, wenn sie daher kommt, weniger Kunden zu bedienen, und eine steigende Gesamtkostenzahl ist nicht automatisch schlecht, wenn sie daher kommt, proportional viel mehr zu bedienen. Einheitswirtschaftlichkeit ist das, was Kostentrends interpretierbar macht, statt nur sichtbar.

Für große Teams ist die Disziplin dieses Kapitels das, was Engineering-Finanzen von einer Blackbox in ein lesbares, handhabbares System verwandelt. Konzerne nutzen Einheitswirtschaftlichkeit, um die Kosteneffizienz unterschiedlicher Produkte, Plattformen, oder Teams auf fairer Basis zu vergleichen; Behörden nutzen dieselbe Disziplin, um fiskalische Verantwortung zu demonstrieren und einen evidenzbasierten Fall für Infrastrukturinvestition zu machen, die die Kosten pro bedientem Bürger über die Zeit reduzieren wird.

## Kernprinzipien

- **Gesamtkosten allein sind ohne einen Nenner nicht interpretierbar.** Einheitswirtschaftlichkeit, Kosten pro bedeutsamer Einheit, verwandelt eine undurchsichtige Zahl in einen handlungsfähigen Trend.
- **Eine Einheit sollte gewählt werden, die echten Geschäfts- oder Missionswert widerspiegelt**, keinen willkürlichen oder leicht manipulierbaren Nenner.
- **Kosten haben mehrere Komponenten: Personal, Infrastruktur, und Tooling.** Sie sollten separat verfolgt werden, da jede einen anderen Kostentreiber und einen anderen Hebel hat.
- **FinOps-Praktiken bringen dieselbe Strenge zu Cloud-Kosten, die dieses Buch zu Liefer- und Qualitätsmetriken bringt.** Kosten sollten als messbar und handhabbar behandelt werden, nicht als unvermeidliches, undurchsichtiges Gegebenes.
- **Fallende Gesamtkosten sind nicht automatisch gut, und steigende sind nicht automatisch schlecht**, ohne zu prüfen, was gleichzeitig mit dem Einheitsmaß geschah.

## Empfehlungen

### Eine Einheit wählen, die echten gelieferten Wert widerspiegelt, keinen willkürlichen Nenner

Eine Einheit für die Einheitswirtschaftlichkeitsberechnung sollte gewählt werden, die echt Geschäfts- oder Missionswert verfolgt: Kosten pro bedienter Kundin oder bedientem Kunden, Kosten pro verarbeiteter Transaktion, Kosten pro Deployment, oder Kosten pro gehandhabter Bürgerinteraktion für einen Dienst des öffentlichen Sektors. Ein Nenner sollte vermieden werden, der zu leicht aufgebläht werden kann, um das Verhältnis zu schmeicheln, wie eine interne, größtenteils diskretionäre Zählung, die keiner echten externen Einheit gelieferten Werts entspricht.

### Personal-, Infrastruktur-, und Tooling-Kosten trennen

Engineering-Kosten haben mindestens drei unterschiedliche Komponenten mit unterschiedlichen Treibern und unterschiedlichen Hebeln: Personalkosten (Gehälter, Leistungen, kurzfristig größtenteils fix), Infrastrukturkosten (Cloud-Ausgaben, größtenteils variabel mit Nutzung und direkt durch Engineering-Praxis optimierbar), und Tooling- und Lizenzkosten (oft fixe Pro-Sitz- oder Pro-Nutzungsstufe-Kosten). Diese sollten separat verfolgt werden, statt als eine gemischte Summe, da eine steigende Gesamtkostenzahl, angetrieben durch Infrastrukturskalierung mit echtem Wachstum, eine sehr andere Reaktion erfordert als derselbe Gesamtanstieg, angetrieben durch unverwaltete Tooling-Ausbreitung.

### FinOps-Disziplin speziell auf Cloud-Infrastrukturkosten anwenden

**[FinOps](https://en.wikipedia.org/wiki/FinOps)** ist die Disziplin, finanzielle Verantwortlichkeit zu variablen Cloud-Ausgaben durch funktionsübergreifende Zusammenarbeit zwischen Engineering-, Finanz-, und Geschäftsteams zu bringen. Ihre Kernpraktiken sollten direkt angewandt werden: Cloud-Ressourcen nach Team und Service für Kostenzurechnung markieren, Ausgaben in regelmäßigem Rhythmus gegen Budget überprüfen, und Infrastrukturkosteneffizienz (Kosten pro Einheit tatsächlicher Nutzung) als Engineering-Metrik behandeln, die es wert ist, bewusst optimiert zu werden, kein unvermeidlicher, fixer Overhead, der einfach akzeptiert wird.

### Einheitskostentrend über die Zeit verfolgen, und Bewegung explizit untersuchen

Eine einzelne Einheitskosten-Momentaufnahme ist weniger nützlich als ihr Trend: fallen Kosten pro bedienter Kundin oder bedientem Kunden, während die Plattform reift und skaliert (ein Zeichen echter Effizienzgewinne), oder steigen sie (ein Zeichen sich akkumulierender Ineffizienz, technischer Schuld, die höhere Wartungskosten antreibt, oder einer Verschiebung im Kundenmix hin zu ressourcenintensiveren Segmenten). Eine bedeutsame Einheitskostentrendänderung sollte explizit untersucht werden, statt die Zahl ohne Erklärung zu berichten.

### Kostendaten mit den technischen-Schuld- und Qualitätsmetriken anderswo in diesem Buch verbinden

Steigende Infrastruktur- oder Wartungskosten pro Einheit sind manchmal eine direkte, messbare Konsequenz akkumulierter technischer Schuld (Kapitel 4.5) oder einer Ausbreitung von Komplexitäts-Hotspots (Kapitel 4.1, Kapitel 4.3): ineffiziente Codepfade, redundante Infrastruktur, und schlecht optimierte Abfragen zeigen sich alle schließlich als erhöhte Einheitskosten. Steigende Einheitskosten sollten als ein Eingabewert genutzt werden, zusammen mit den Fluktuations- und Komplexitätssignalen aus Teil 4, in die Schuldpriorisierungsdiskussion, da ein Schuldposten mit demonstrierter, messbarer Kostenwirkung einen stärkeren Fall für Behebungsinvestition macht als eine unquantifizierte Qualitätsbeschwerde allein.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Nur Gesamtkosten berichten | Einfach, entspricht der üblichen Budgetzuteilung | Ohne Nenner nicht interpretierbar; verbirgt Effizienztrends |
| Einheitswirtschaftlichkeit mit gut gewähltem Nenner | Interpretierbar, handlungsfähig, über Zeit und Teams vergleichbar | Braucht Sorgfalt bei der Wahl einer echt bedeutsamen, schwer manipulierbaren Einheit |
| Gemischte Kostenberichterstattung (Personal, Infrastruktur, Tooling kombiniert) | Einfache einzelne Zahl | Verschleiert, welcher spezifische Kostentreiber sich tatsächlich ändert und warum |
| Getrennte Kostenkomponenten | Enthüllt den richtigen Hebel für einen gegebenen Kostentrend | Braucht detailliertere Kostenzurechnung und Verfolgungsinfrastruktur |

Die zentrale Spannung ist **Einfachheit gegen Handlungsfähigkeit**. Eine einzelne Gesamtkostenzahl ist leicht zu berichten und entspricht dem, wie viele Organisationen Budget bereits zuteilen, aber sie verschleiert sowohl, was Kostenänderungen antreibt, als auch ob diese Änderungen echte Effizienz oder echtes Wachstum widerspiegeln. Die Spannung sollte gelöst werden, indem in die etwas komplexere Einheitswirtschaftlichkeits- und komponentengetrennte Berichterstattung investiert wird, die dieses Kapitel empfiehlt, da die resultierende Handlungsfähigkeit, genau zu wissen, welchen Hebel zu ziehen ist, wenn sich Kosten bewegen, den bescheidenen zusätzlichen Verfolgungsaufwand für jede Organisation über die kleinste Größe hinaus wert ist.

## Fragen für die Diskussion im Team

1. **Verfolgen wir Engineering-Kosten pro bedeutsamer Einheit (Kunde, Transaktion, Deployment), oder nur als undurchsichtige Summe?** Wenn nur eine Summe existiert, sollte identifiziert werden, welche Einheit den Kostentrend echt interpretierbar machen würde, und diskutiert werden, was es bräuchte, um sie zu verfolgen.

2. **Können wir unsere aktuellen Kosten in Personal-, Infrastruktur-, und Tooling-Komponenten trennen, und wissen wir, welche eine kürzliche Änderung antreibt?** Die tatsächliche Kostenaufschlüsselung sollte gezogen werden, falls eine existiert, und geprüft werden, ob sie detailliert genug ist, um diese Frage mit Zuversicht zu beantworten.

3. **Haben wir FinOps-Markierungs- und Zurechnungspraktiken auf unsere Cloud-Infrastrukturkosten angewandt, oder ist es eine einzelne, unzugerechnete Zeile?** Wenn Ausgaben nicht spezifischen Teams oder Services zugerechnet werden können, sollte diskutiert werden, wie der erste Schritt hin zu echter Zurechnung aussehen würde.

4. **Hat sich unser Einheitskostentrend kürzlich bedeutsam in eine der beiden Richtungen bewegt, und wissen wir warum?** Eine echte, kürzliche Bewegung sollte untersucht werden, falls eine existiert, und geprüft werden, ob sie mit Zuversicht erklärt werden kann oder ob sie ein Rätsel bleibt.

5. **Korreliert unser aktueller Infrastrukturkostentrend mit irgendeinem unserer technischer-Schuld- oder Komplexitäts-Hotspot-Signale aus Teil 4?** Diese Datenquellen sollten explizit kreuzreferenziert werden, und geprüft werden, ob eine Verbindung entsteht, die einen Schuldbehebungs-Business-Case stärken könnte.

6. **Könnten wir mit Zuversicht antworten, wenn eine finanzielle Stakeholderin oder ein finanzieller Stakeholder morgen fragte, „was kostet es uns, eine weitere Kundin oder einen weiteren Kunden zu bedienen"?** Diese konkrete, praktische Frage prüft, ob die Einheitswirtschaftlichkeit tatsächlich aufgebaut und bereit ist, oder bloß eine theoretische Bestrebung.

## Branchenperspektive

**Startup.** Einheitswirtschaftlichkeit zählt früh enorm, da sowohl Investorinnen und Investoren als auch Gründerinnen und Gründer wissen müssen, ob die Kosten, jede zusätzliche Kundin oder jeden zusätzlichen Kunden zu bedienen, sich zur Nachhaltigkeit hin entwickeln oder zu einem Geschäftsmodell, das nicht skalieren kann. Dies sollte von sehr früh verfolgt werden, selbst mit groben Schätzungen, statt zu warten, bis das Unternehmen groß genug ist, um formales FinOps-Tooling zu rechtfertigen.

**Kleinunternehmen.** Abrechnungs-Dashboards von Cloud-Anbietern liefern meist genug grundlegende Kostensichtbarkeit ohne dediziertes FinOps-Tooling; die Hauptdisziplin ist, eine sinnvolle Einheit zu wählen (Kosten pro Kunde oder Kosten pro Transaktion) und den Trend periodisch zu prüfen, statt nur die Gesamtrechnung isoliert zu betrachten.

**Enterprise.** FinOps-Praxis und getrennte Kostenkomponentenverfolgung sind auf dieser Ebene essenziell, wo Cloud-Ausgaben eine sehr große, oft unterprüfte Budgetzeile darstellen können, verteilt über viele Teams. In korrekte Kostenzurechnungsmarkierung und einen dedizierten Kostenprüfungsrhythmus sollte investiert werden, und Einheitswirtschaftlichkeit sollte genutzt werden, um Kosteneffizienz fair über unterschiedliche Produktlinien oder Plattformen hinweg zu vergleichen.

**Behörden.** Fiskalische Verantwortung und demonstrierbare Kosteneffizienz sind direkt relevant für Budgetrechtfertigung und öffentliche Rechenschaftspflicht. Einheitswirtschaftlichkeit, ausgedrückt als Kosten pro bedientem Bürger, oder Kosten pro verarbeiteter Transaktion, ist oft eine weit überzeugendere und interpretierbarere Metrik für Budgetausschüsse als eine rohe Gesamtausgabenzahl, und sie stützt direkt den Business Case für Infrastrukturinvestition, die die Kosten pro Einheit über die Zeit reduziert.

## Beispiele

**Enterprise.** Das Finanzteam eines Software-as-a-Service-Unternehmens war mehrere aufeinanderfolgende Quartale lang durch steigende Gesamt-Cloud-Infrastrukturausgaben alarmiert gewesen, zunächst Ineffizienz oder Verschwendung annehmend. Eine Einheitswirtschaftlichkeitsanalyse, Kosten pro aktiver Kundin oder aktivem Kunden, zeigte, dass die Einheitskosten tatsächlich stetig gefallen waren, selbst während die Gesamtausgaben stiegen, weil die Kundenzahl schneller wuchs als die Infrastrukturkosten, eine echte Effizienzverbesserung, verschleiert durch die Betrachtung der Gesamtausgaben allein. Diese Umrahmung verschob das Finanzgespräch von „warum gibt Engineering mehr aus" zu „wie halten wir diese effiziente Skalierung aufrecht", eine materiell produktivere Diskussion, die ein unnötiges und potenziell schädliches Kostensenkungsmandat vermied, das echt gesunde, wachstumsgetriebene Ausgaben ins Visier genommen hätte.

**Behörden.** Die digitale Dienstbehörde einer Landesregierung wurde gebeten, fortgesetzte Cloud-Infrastrukturinvestition gegenüber einem Budgetausschuss zu rechtfertigen, der Kosten gegen das On-Premises-Altsystem verglich, das sie ersetzte. Eine Einheitswirtschaftlichkeitsanalyse, Kosten pro verarbeiteter Bürgertransaktion, zeigte, dass die Einheitskosten des neuen Cloud-basierten Systems substanziell niedriger waren als die des Altsystems, trotz höherer nomineller Gesamtausgaben, weil das neue System ein weit höheres Transaktionsvolumen mit demselben oder niedrigerem Gesamtinfrastrukturbudget handhabte. Dieser Einheitskostenvergleich, statt eines schwerer zu interpretierenden Gesamtausgabenvergleichs, wurde zur zentralen Evidenz in einem erfolgreichen Fall für fortgesetzte und erweiterte Cloud-Investition.

## Business Case: Motivation, ROI und TCO

Die Rendite rigoroser Einheitswirtschaftlichkeit ist eine verteidigungsfähige, interpretierbare Antwort auf die Frage, die jede finanzielle Stakeholderin und jeder finanzielle Stakeholder schließlich stellt: sind diese Ausgaben effizient, und skalieren sie nachhaltig. Das Enterprise-Beispiel oben zeigt das Risiko, dies falsch zu machen: eine reine Gesamtausgaben-Sicht hätte fast ein unnötiges und kontraproduktives Kostensenkungsmandat gegen Ausgaben ausgelöst, die auf Einheitsbasis effizienter wurden, nicht weniger effizient.

Die Gesamtbetriebskosten umfassen Kostenzurechnungs-Tooling (FinOps-Markierungspraktiken) und die analytische Disziplin, Kostenkomponenten zu trennen und Einheitstrends über die Zeit zu verfolgen. Diese Investition ist bescheiden im Vergleich zum Risiko, eine bedeutsame Budgetentscheidung zu treffen, echt effiziente Ausgaben zu kürzen, oder zu versäumen, Ausgaben zu fangen, die echt ineffizient wurden, basierend allein auf einer unterinformierten Gesamtkosten-Sicht.

## Antipatterns und Fallstricke

- **Gesamtkosten ohne Nenner berichten:** nicht interpretierbar und verbirgt, ob Kosten effizient oder ineffizient skalieren.
- **Eine leicht manipulierbare oder willkürliche Einheit für Kostenberechnung wählen:** produziert ein Verhältnis, das schmeichelt statt informiert.
- **Personal-, Infrastruktur-, und Tooling-Kosten in eine Zahl mischen:** verschleiert, welcher spezifische Treiber sich tatsächlich ändert und welcher Hebel ihn adressiert.
- **Keine Cloud-Kostenzurechnung (FinOps-Markierung):** lässt Infrastrukturausgaben auf Team- oder Service-Ebene effektiv unverwaltet und unzurechenbar.
- **Auf eine Gesamtkostenänderung reagieren, ohne den Einheitstrend zu prüfen:** kann ein unnötiges Kostensenkungsmandat gegen echt effiziente, wachstumsgetriebene Ausgaben auslösen.
- **Kostentrends nie mit technischer-Schuld- oder Komplexitätsdaten verbinden:** übersieht einen quantifizierten, gestärkten Fall für Schuldbehebungsinvestition.

## Reifegradmodell

- **Stufe 1, Initiieren:** Engineering-Kosten werden nur als undurchsichtige Summe berichtet, ohne Einheitswirtschaftlichkeit oder Komponententrennung.
- **Stufe 2, Entwickeln:** Manche Kostenaufschlüsselung existiert, aber Einheitswirtschaftlichkeit ist inkonsistent und Cloud-Kostenzurechnung ist größtenteils abwesend.
- **Stufe 3, Standardisieren:** Einheitswirtschaftlichkeit mit gut gewähltem Nenner wird konsistent verfolgt, mit Kosten getrennt in Personal-, Infrastruktur-, und Tooling-Komponenten, organisationsweit.
- **Stufe 4, Steuern:** FinOps-Zurechnungs- und Prüfpraktiken sind etabliert, und Einheitskostentrends werden aktiv untersucht und mit technischer-Schuld- und Qualitätssignalen verbunden.
- **Stufe 5, Orchestrieren:** Die Organisation kann detaillierte Einheitskostenfragen von finanziellen Stakeholdern selbstsicher beantworten, und Kostendaten informieren direkt sowohl Engineering-Investitionsentscheidungen als auch Budgetrechtfertigung auf höchster Ebene.

## Diskussionsanregungen

1. Welche Einheit würde unseren Kostentrend echt interpretierbar machen, und verfolgen wir sie?
2. Könnten wir eine kürzliche Kostenänderung in ihre Personal-, Infrastruktur-, und Tooling-Komponenten trennen?
3. Ist ein Teil unserer Infrastrukturausgaben derzeit keinem bestimmten Team oder Service zugerechnet?
4. Hat sich unser Einheitskostentrend kürzlich bewegt, und wissen wir warum?
5. Wo könnten steigende Einheitskosten ein Symptom unadressierter technischer Schuld sein?

## Die wichtigsten Erkenntnisse

- **Einheitswirtschaftlichkeit**, Kosten pro bedeutsamer Werteinheit, verwandelt eine undurchsichtige Gesamtkostenzahl in einen interpretierbaren, handlungsfähigen Trend.
- Eine Einheit sollte gewählt werden, die **echten Geschäfts- oder Missionswert** widerspiegelt, und ein leicht manipulierbarer oder willkürlicher Nenner sollte vermieden werden.
- Kosten sollten in **Personal-, Infrastruktur-, und Tooling**-Komponenten getrennt werden, da jede einen anderen Treiber und einen anderen Hebel hat.
- **FinOps-Disziplin** sollte speziell auf Cloud-Infrastrukturkosten angewandt werden, einschließlich Zurechnungsmarkierung und regelmäßiger Überprüfung.
- Fallende Gesamtkosten sind **nicht automatisch gut**, und steigende sind **nicht automatisch schlecht**, ohne den Einheitstrend gleichzeitig zu prüfen.

## Quellen und weiterführende Literatur

- *Cloud FinOps*, von J.R. Storment and Mike Fuller (der grundlegende Text zu FinOps-Praktiken für Cloud-Kostenverwaltung).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die Beziehung zwischen Liefereffizienz und Kosten).
- *Site Reliability Engineering*, herausgegeben von Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy (Kosten als explizite Zuverlässigkeits-Engineering-Abwägung).
- Das FinOps-Framework der FinOps Foundation, [finops.org](https://www.finops.org/) (Praktikeranleitung und Reifegradmodell für Cloud-Finanzverwaltung).
