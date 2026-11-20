# 4.3 Code-Fluktuation und Hotspot-Analyse

## Überblick und Motivation

**Code-Fluktuation** (Code Churn) misst, wie häufig sich eine Datei oder ein Modul über die Zeit ändert, Zeilen hinzugefügt, geändert und gelöscht über aufeinanderfolgende Commits hinweg. Für sich allein ist Fluktuation ein ziemlich schwaches Signal: manche Dateien ändern sich häufig, weil sie unter aktiver, gesunder Entwicklung stehen, und manche ändern sich selten, weil sie stabil und korrekt sind, nicht weil sie vernachlässigt werden. Die echte diagnostische Kraft des Ansatzes dieses Themas kommt aus der Kombination von Fluktuation mit Komplexität (Thema 4.1): eine Datei, die sowohl häufig geändert als auch hochkomplex ist, ein **Hotspot**, ist unverhältnismäßig wahrscheinlich eine Fehlerquelle und eine Bremse für die Team-Geschwindigkeit, und empirische Forschung bestätigt dies konsistent über viele Codebasen und Organisationen hinweg.

**Hotspot-Analyse**, popularisiert durch Adam Tornhills Arbeit zu Software-Analytik, ist speziell wertvoll, weil sie keine manuelle Erhebung oder subjektives Urteilsvermögen braucht, um ihre Ziele zu finden. Die [Versionskontroll](https://en.wikipedia.org/wiki/Version_control)-Historie enthält bereits alles Nötige, um sowohl Fluktuation als auch, kombiniert mit statischem Analyse-Tooling, Komplexität für jede Datei in einer Codebasis automatisch zu berechnen. Dies lässt ein Team oder eine Organisation mit echter Evidenz statt Anekdote oder der lautesten Beschwerde in einer Retrospektive identifizieren, welcher kleine Bruchteil der Codebasis genau zuerst Refactoring-Aufmerksamkeit verdient.

Für große Teams löst Hotspot-Analyse ein echtes Zuteilungsproblem: eine Codebasis mit Hunderttausenden Zeilen hat weit mehr Code, als sich ein Team leisten kann, umfassend zu refaktorieren, und Intuition darüber, wo die schlimmsten Probleme leben, liegt häufig falsch, verzerrt durch, wer sich zuletzt beschwert hat oder welche Datei eine leitende Ingenieurin oder ein leitender Ingenieur zufällig nicht mag. Konzerne und Behörden, die große, langlebige Codebasen verwalten, verlassen sich auf diese datengetriebene Priorisierung, um echt knappes Refactoring-Budget dorthin zu lenken, wo es die größte Rendite bringt.

## Kernprinzipien

- **Fluktuation allein ist ein schwaches Signal; Fluktuation kombiniert mit Komplexität ist stark.** Die Kombination, nicht eine der beiden Metriken allein, identifiziert einen echten Hotspot.
- **Hotspot-Analyse braucht keine manuelle Erhebung.** Die Versionskontroll-Historie enthält bereits alles Nötige, um sie automatisch zu berechnen.
- **Ein Hotspot ist ein Priorisierungssignal, kein automatisches Urteil.** Menschliches Urteilsvermögen wird noch gebraucht, um zu entscheiden, welche Maßnahme ein bestimmter Hotspot rechtfertigt.
- **Häufige Änderung ist nicht von Natur aus schlecht.** Manche Fluktuation spiegelt gesunde, aktive Entwicklung wider, nicht ein Qualitätsproblem.
- **Diese Analyse skaliert genau dort, wo Intuition versagt**: in großen Codebasen, zu groß, als dass eine einzelne Person sie nach Gefühl allein überblicken und priorisieren könnte.

## Empfehlungen

### Fluktuation und Komplexität zusammen berechnen und nach ihrer Kombination ranken

Änderungsfrequenz pro Datei sollte aus der Versionskontroll-Historie über ein bedeutsames Zeitfenster extrahiert werden, typisch sechs Monate bis ein Jahr, und mit einem Komplexitätsmaß (Thema 4.1) für dieselben Dateien gepaart werden. Dateien sollten nach der Kombination gerankt werden, häufig dem Produkt aus Fluktuation und Komplexität, statt nach einer der beiden Metriken allein, da diese Kombination das ist, was die zugrunde liegende Forschung konsistent mit erhöhten Fehlerraten und Wartungskosten verbindet.

### Die obersten Hotspots mit menschlichem Urteilsvermögen untersuchen, bevor gehandelt wird

Eine gerankte Hotspot-Liste identifiziert Kandidaten für Aufmerksamkeit, keine automatische Handlungsliste. Für jeden der obersten Hotspots sollte mit menschlichem Blick untersucht werden: ist dies echt schlecht gestalteter Code, der Refactoring braucht, oder ist es eine Datei, die legitim häufige Änderung braucht, weil sie im Zentrum aktiver, sich entwickelnder Geschäftslogik sitzt, in welchem Fall die Priorität besser bessere Tests oder klarere Dokumentation sein könnte statt einer strukturellen Neuschreibung. Dies spiegelt die essenziell-gegen-zufällig-Komplexitätsunterscheidung aus Thema 4.1, hier auf das kombinierte Fluktuations-Komplexitäts-Signal angewandt.

### Hotspots gegen Vorfall- und Fehlerdaten kreuzreferenzieren

Wo verfügbar, sollte geprüft werden, ob die identifizierten Hotspots mit tatsächlichen Produktionsvorfällen (Thema 6.2) oder Fehler-Entkommens-Daten (Thema 5.1) korrelieren. Eine starke Korrelation validiert die Hotspot-Analyse als echt vorhersagend für die spezifische Codebasis und stärkt den Business Case, danach zu handeln; eine schwache oder fehlende Korrelation deutet entweder auf ein Datenqualitätsproblem hin oder darauf, dass Fluktuation und Komplexität im jeweiligen Kontext nicht die richtige Kombination von Signalen zur Priorisierung sind.

### Hotspot-Trend über aufeinanderfolgende Analysen verfolgen, nicht nur eine einzelne Momentaufnahme

Hotspot-Analyse sollte periodisch erneut ausgeführt werden, vierteljährlich ist üblich, und verfolgt werden, ob zuvor identifizierte Hotspots sich verbessern, verschlechtern oder gelöst sind, und ob neue entstehen. Ein Hotspot, der über mehrere Analysezyklen hinweg trotz wiederholter Kennzeichnung fortbesteht, deutet entweder darauf hin, dass Behebungsaufwand tatsächlich nicht angewandt wurde, oder dass ein vorheriger Behebungsversuch das echte zugrunde liegende Problem nicht angegangen hat.

### Hotspot-Daten nutzen, um Team-Priorisierungsgespräche zu informieren, nicht zu ersetzen

Hotspot-Analyse sollte als Evidenz in einem Priorisierungsgespräch präsentiert werden, nicht als automatisches Mandat, das das eigene kontextuelle Urteilsvermögen eines Teams darüber, was gerade am meisten zählt, überschreibt. Ein Team mag gute, legitime Gründe haben, einen bekannten Hotspot vorübergehend zu depriorisieren, ein bevorstehender geplanter Neuschreib macht inkrementelles Refactoring zu verschwendetem Aufwand, zum Beispiel, und die Analyse sollte dieses Gespräch informieren, nicht es ersetzen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Intuitionsbasierte Priorisierung | Schnell, kein Tooling nötig, nutzt das kontextuelle Wissen des Teams | Verzerrt durch Aktualität, persönliche Präferenz, und wer sich am lautesten beschwert |
| Fluktuation allein | Einfach zu berechnen | Schwaches Signal allein; häufige Änderung ist nicht von Natur aus schlecht |
| Fluktuation kombiniert mit Komplexität (Hotspot-Analyse) | Starke, evidenzbasierte, automatische Erkennung aus bestehenden Daten | Braucht die Kombination zweier Datenquellen und die Interpretation der Ergebnisse mit Urteilsvermögen |
| Hotspot-Analyse kreuzreferenziert mit Vorfalldaten | Validiert, stärkste Evidenz für Priorisierung | Braucht verlässliche Vorfall-zu-Code-Verknüpfung, die nicht jede Organisation hat |

Die zentrale Spannung ist **Evidenz gegen Kontext**. Hotspot-Analyse liefert objektive, skalierbare Evidenz, die intuitionsbasierte Priorisierung im Maßstab einer großen, unvertrauten oder langlebigen Codebasis nicht erreichen kann, aber ihr fehlt das kontextuelle Urteilsvermögen, das ein Team darüber hat, warum ein gegebener Hotspot gerade jetzt zählt oder nicht. Die Spannung sollte gelöst werden, indem Hotspot-Analyse als Evidenzbasis für ein Priorisierungsgespräch behandelt wird, kombiniert mit, nie als Ersatz für, das eigene kontextuelle Urteilsvermögen des Teams über Timing und Abwägungen.

## Fragen für die Diskussion im Team

1. **Wie sehen unsere obersten fünf Hotspots aus, gerankt nach Fluktuation und Komplexität kombiniert, und würde dieses Ranking der Intuition unseres Teams darüber entsprechen, wo unsere schlimmsten Probleme leben?** Die Analyse sollte ausgeführt werden, und das Ergebnis gegen das verglichen werden, was das Team vor dem Sehen der Daten geraten hätte; Diskrepanzen sind oft der wertvollste Befund.

2. **Korrelieren unsere identifizierten Hotspots mit tatsächlichen Produktionsvorfällen oder Fehler-Entkommens-Daten?** Wenn die Daten vorhanden sind, um dies zu prüfen, sollte dies direkt getan werden; wenn nicht, ist diese Lücke selbst es wert, als etwas benannt zu werden, worauf hingearbeitet werden sollte.

3. **Ist für unseren obersten Hotspot gerade jetzt das zugrunde liegende Problem essenzielle Komplexität, die legitim häufige Änderung erfordert, oder zufällige Komplexität, die ein Refactoring echt beheben könnte?** Die Datei sollte gemeinsam durchgegangen werden, und dieses Urteil sollte explizit getroffen werden, statt eine der beiden Antworten anzunehmen.

4. **Ist ein zuvor identifizierter Hotspot über mehrere Analysezyklen hinweg trotz Kennzeichnung fortbestehen geblieben?** Wenn ja, sollte ehrlich untersucht werden, warum: Behebung wurde nie tatsächlich versucht, oder ein vorheriger Versuch hat die echte zugrunde liegende Ursache nicht angegangen.

5. **Priorisieren wir Refactoring-Arbeit derzeit basierend auf Evidenz, oder basierend darauf, wer sich zuletzt oder am lautesten beschwert hat?** Es sollte ehrlich über den tatsächlichen aktuellen Priorisierungsprozess des Teams reflektiert werden und wie er sich zu dem verhält, was eine evidenzbasierte Hotspot-Analyse nahelegen würde.

6. **Was würde es uns kosten, an Fehlerrate oder Lieferverlangsamung, unseren aktuellen obersten Hotspot ein weiteres Jahr unadressiert zu lassen?** Diese Frage erzwingt eine konkrete Kostenschätzung, die eine Priorisierungsentscheidung verankern kann, statt den Hotspot als abstrakte, leicht depriorisierbare Sorge zu belassen.

## Branchenperspektive

**Startup.** Formale Hotspot-Analyse ist meist unnötig bei einer kleinen, jungen Codebasis, die das ganze Team noch kollektiv im Kopf behält. Die Technik wird speziell wertvoll, sobald die Codebasis über die Größe hinausgewachsen ist, in der eine einzelne Person die schlimmsten Bereiche zuverlässig allein aus dem Gedächtnis identifizieren kann, oft irgendwo in den ersten ein bis zwei Jahren anhaltenden Wachstums.

**Kleinunternehmen.** Kostenloses oder günstiges Tooling kann Fluktuationsdaten direkt aus der bestehenden Versionskontroll-Historie mit minimaler Einrichtung extrahieren; sie sollten mit welchen Komplexitätsdaten auch immer der bestehende Linter oder das statische Analysewerkzeug bereits berichtet kombiniert werden, statt auf dieser Ebene in dedizierte kommerzielle Hotspot-Analyse-Software zu investieren.

**Enterprise.** Hotspot-Analyse ist der Ort, an dem evidenzbasierte Priorisierung die größte Rendite verdient, da Intuition im Maßstab einer Codebasis, die Hunderte Services und Tausende Dateien umspannt, echt versagt. In die regelmäßige Ausführung dieser Analyse über die gesamte Codebasis hinweg und Kreuzreferenzierung gegen Vorfalldaten sollte investiert werden, um einen validierten, verteidigungsfähigen Fall für Refactoring-Investition aufzubauen.

**Behörden.** Langlebige Systeme, manchmal Jahrzehnte alt, passen natürlich zu Hotspot-Analyse, da die akkumulierte Versionskontroll-Historie ein reichhaltiges, langfristiges Signal darüber liefert, welche Teile des Systems sich über die Zeit echt als problematisch erwiesen haben. Dieser evidenzbasierte Ansatz ist auch ein überzeugendes, konkretes Werkzeug, um Modernisierungsinvestition gegenüber Stakeholdern zu rechtfertigen, die mehr als die informelle Meinung einer Ingenieurin oder eines Ingenieurs brauchen, um Finanzierung zu genehmigen.

## Beispiele

**Enterprise.** Die Schadensbearbeitungsplattform eines Versicherungsunternehmens, mit über zwei Millionen Codezeilen über Dutzende Services hinweg, hatte Jahre informeller Beschwerden akkumuliert, dass „das Schadensvalidierungsmodul" problematisch sei, aber nie war formale Priorisierung aus diesen Beschwerden gefolgt. Eine Hotspot-Analyse, die sechs Monate Fluktuationsdaten mit Komplexitätswerten kombinierte, identifizierte eine vollständig andere Datei, ein geteiltes Währungsumrechnungs-Utility, tief in einer selten diskutierten Abhängigkeit vergraben, als den tatsächlichen obersten Hotspot, eine, die in keiner Retrospektiv-Beschwerde je aufgetaucht war. Kreuzreferenzierung gegen Vorfalldaten bestätigte, dass dieses Utility in einen unverhältnismäßigen Anteil finanzieller Berechnungsfehler im Vorjahr verwickelt war, und ein gezieltes Refactoring genau dieses Utilitys, statt des Moduls, dem alle informell die Schuld gegeben hatten, produzierte eine messbare Reduktion verwandter Vorfälle innerhalb des folgenden Quartals.

**Behörden.** Das jahrzehntealte Zulassungssystem einer staatlichen Kraftfahrzeugbehörde durchlief eine Hotspot-Analyse als Teil eines Modernisierungs-Business-Case. Die Analyse identifizierte eine kleine Gruppe von Dateien, die unter 3 % der Gesamtcodebasis repräsentierten, verantwortlich für einen unverhältnismäßigen Anteil sowohl an Fluktuation als auch Komplexität, und Kreuzreferenzierung gegen das Vorfallprotokoll der Behörde zeigte, dass genau diese Gruppe für fast 40 % aller gemeldeten Systemfehler über die vorherigen drei Jahre verantwortlich war. Dieser konkrete, evidenzbasierte Befund, weit überzeugender als eine allgemeine Behauptung, „das System ist alt und braucht Modernisierung", wurde zum Kernstück einer erfolgreichen Budgetanfrage für einen gezielten, inkrementellen Modernisierungsaufwand, der sich speziell auf diese Gruppe konzentrierte, statt einen weit teureren vollständigen Systemersatz.

## Business Case: Motivation, ROI und TCO

Die Rendite von Hotspot-Analyse ist gezielte, evidenzbasierte Investition: beide Beispiele oben zeigen einen Fall, in dem formale Analyse Refactoring-Aufmerksamkeit weg von dem umlenkte, worauf informelle Beschwerde sie fokussiert hatte, und hin zu dem, wo die Daten tatsächlich zeigten, dass das Problem lebte, was eine messbar bessere Rendite produzierte, als eine ungezielte oder intuitionsgetriebene Investition hätte.

Die Gesamtbetriebskosten sind niedrig, da Fluktuationsdaten direkt aus bestehender Versionskontroll-Historie kommen und Komplexitätsdaten meist bereits aus statischem Analyse-Tooling verfügbar sind (Thema 4.4); die Hauptinvestition ist der periodische Analyseaufwand und die menschliche Urteilszeit, um Ergebnisse zu interpretieren und zu entscheiden, welche Maßnahme jeder identifizierte Hotspot rechtfertigt.

## Antipatterns und Fallstricke

- **Fluktuation allein ohne Komplexität nutzen:** ein schwaches Signal allein, das gesunden, aktiv entwickelten Code als Falsch-Positiv kennzeichnen kann.
- **Ein Hotspot-Ranking als automatische Handlungsliste ohne menschliches Urteilsvermögen behandeln:** übersieht die essenziell-gegen-zufällig-Unterscheidung, die die richtige Reaktion bestimmt.
- **Refactoring basierend auf der lautesten Beschwerde statt Evidenz priorisieren:** lenkt Aufwand häufig weg von dort, wo die Daten tatsächlich zeigen, dass das Problem lebt.
- **Hotspots nie gegen Vorfall- oder Fehlerdaten kreuzreferenzieren:** übersieht den Validierungsschritt, der den Fall stärkt, nach der Analyse zu handeln.
- **Die Analyse einmal ausführen und nie wiederholen:** übersieht, ob Behebungsaufwand über die Zeit tatsächlich wirkt.
- **Einen anhaltend gekennzeichneten Hotspot ignorieren, ohne zu untersuchen, warum Behebung nicht gehalten hat:** verschwendet den diagnostischen Wert wiederholter Analyse.

## Reifegradmodell

- **Stufe 1, Initiieren:** Refactoring-Prioritäten werden durch Intuition oder Beschwerdevolumen gesetzt, ohne dass Fluktuations- oder Komplexitätsdaten die Entscheidung informieren.
- **Stufe 2, Entwickeln:** Manche Teams prüfen informell Fluktuations- oder Komplexitätsdaten, aber es gibt keine konsistente, organisationsweite Hotspot-Analyse-Praxis.
- **Stufe 3, Standardisieren:** Hotspot-Analyse, die Fluktuation und Komplexität kombiniert, läuft regelmäßig und informiert konsistent organisationsweite Refactoring-Priorisierung.
- **Stufe 4, Steuern:** Hotspots werden gegen Vorfall- und Fehlerdaten kreuzreferenziert, um die Analyse zu validieren, und Trend über aufeinanderfolgende Zyklen wird aktiv verfolgt.
- **Stufe 5, Orchestrieren:** Die Organisation kann auf konkrete, messbare Fehlerraten- oder Lieferverbesserungen aus hotspot-informierter Refactoring-Investition verweisen, und die Analyse ist ein routinemäßiger, vertrauenswürdiger Eingabewert für Engineering-Investitionsentscheidungen.

## Diskussionsanregungen

1. Wie würde unsere oberste Hotspot-Liste aussehen, wenn wir diese Analyse heute ausführen würden?
2. Würde diese Liste dem aktuellen informellen Gefühl unseres Teams über unsere schlimmsten Problembereiche entsprechen, oder widersprechen?
3. Haben wir die Daten, um Hotspots gegen tatsächliche Vorfälle zu kreuzreferenzieren?
4. Ist ein bekannter Problembereich trotz vorheriger Behebungsversuche fortbestehen geblieben, und warum?
5. Was würde es uns kosten, unseren aktuellen obersten Hotspot ein weiteres Jahr unadressiert zu lassen?

## Die wichtigsten Erkenntnisse

- **Fluktuation kombiniert mit Komplexität** identifiziert echte Hotspots weit zuverlässiger als eine der beiden Metriken allein.
- Hotspot-Analyse braucht **keine manuelle Erhebung**; sie ist automatisch aus bestehenden Versionskontroll- und statischen Analysedaten berechenbar.
- Ein Hotspot-Ranking sollte als **Evidenz für Priorisierung** behandelt werden, kein automatisches Urteil; menschliches Urteilsvermögen wird noch gebraucht.
- **Hotspots sollten gegen Vorfall- und Fehlerdaten kreuzreferenziert werden**, um die Analyse zu validieren und den Fall zu stärken, danach zu handeln.
- Hotspots sollten **über aufeinanderfolgende Analysezyklen** verfolgt werden, um zu bestätigen, dass Behebung tatsächlich wirkt, nicht nur einmal als Momentaufnahme.

## Quellen und weiterführende Literatur

- *Your Code as a Crime Scene*, von Adam Tornhill (der grundlegende Text zu Hotspot-Analyse, die Fluktuation und Komplexität aus Versionskontrolldaten kombiniert).
- *Software Design X-Rays*, von Adam Tornhill (weitere Techniken für verhaltensbasierte Code-Analyse mit Versionskontroll-Historie).
- Nagappan, Nachiappan, and Thomas Ball, "Use of Relative Code Churn Measures to Predict System Defect Density," *ICSE* (2005): empirische Forschung zur Beziehung zwischen Fluktuation und Fehlerdichte.
- *Refactoring: Improving the Design of Existing Code*, von Martin Fowler (Techniken zum Angehen zufälliger Komplexität, sobald sie identifiziert ist).
