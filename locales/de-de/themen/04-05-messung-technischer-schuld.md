# 4.5 Messung technischer Schuld

## Überblick und Motivation

**[Technische Schuld](https://en.wikipedia.org/wiki/Technical_debt)**, eine von Ward Cunningham geprägte Metapher, beschreibt die akkumulierten Kosten vergangener Abkürzungen, zweckmäßiger Entscheidungen, die etwas früher auslieferten, aber die Codebasis danach schwerer änderbar machten, auf dieselbe Weise, wie finanzielle Schuld erlaubt, jetzt auf Kosten späterer Zinsen auszugeben. Jede Codebasis trägt etwas technische Schuld, und das ist nicht automatisch ein Versagen; der echte Wert der Metapher ist, dass sie Schuld als handhabbare Abwägung rahmt, statt als beschämendes Geheimnis oder unvermeidliche, permanente Last. Dieses Thema handelt davon, diese Abwägung durch Messung sichtbar und handhabbar zu machen, statt sie als vage, dauerhaft depriorisierte Sorge zu belassen, die jede Ingenieurin und jeder Ingenieur spürt, aber niemand mit Evidenz umsetzen kann.

Die vorangegangenen Themen dieses Teils, Komplexität (4.1), Abdeckung (4.2), Fluktuation und Hotspots (4.3), und statische Analyse (4.4), machen jeweils eine Facette technischer Schuld sichtbar. Die Aufgabe dieses Themas ist Synthese: diese separaten Signale, plus Punkte, die in keinem automatisierten Scan je auftauchen (eine undokumentierte architektonische Abkürzung, eine bewusst verschobene Migration), in einen einzigen, priorisierten, sichtbaren Rückstand zu verwandeln, der fair um Investition gegen Feature-Arbeit konkurriert, statt diesen Wettbewerb standardmäßig zu verlieren, einfach weil er keine Metrik angehängt hat und keine Fürsprecherin oder keinen Fürsprecher in Planungsmeetings.

Für große Teams akkumuliert unverwaltete technische Schuld auf eine Weise, die echt gefährlich und leicht zu unterschätzen ist: jede neue Abkürzung macht die nächste Änderung leicht schwerer, was Druck für mehr Abkürzungen erzeugt, was sich weiter akkumuliert. Konzerne und Behörden, die Systeme über viele Jahre pflegen, sind diesem sich verstärkenden Effekt besonders ausgesetzt, und die zentrale Empfehlung dieses Themas, ein sichtbarer, quantifizierter, priorisierter Schuldenrückstand, ist der Mechanismus, der einer Organisation erlaubt, die Abwägung tatsächlich bewusst zu verwalten, statt in eine Krise zu treiben.

## Kernprinzipien

- **Technische Schuld ist eine bewusste Metapher für eine handhabbare Abwägung, kein beschämendes Geheimnis.** Manche Schuld, wissentlich eingegangen, ist eine vernünftige Geschäftsentscheidung.
- **Ungemessene Schuld verliert den Priorisierungswettbewerb gegen Feature-Arbeit standardmäßig,** nicht weil sie weniger zählt, sondern weil sie keine sichtbare Fürsprache hat.
- **Schuld sollte in Begriffen quantifiziert werden, die Entscheidungsträgerinnen und Entscheidungsträger abwägen können: Kosten der Behebung gegen Kosten des Tragens.** Eine vage Behauptung „der Code ist unordentlich" konkurriert selten gut gegen eine konkrete Feature-Anfrage.
- **Schuld akkumuliert sich.** Jede neue Abkürzung macht zukünftige Änderungen marginal schwerer, und dieser Effekt beschleunigt sich, wenn unverwaltet gelassen.
- **Nicht alle Schuld sollte abgetragen werden.** Manche ist es wert, unbegrenzt getragen zu werden, wenn die Behebungskosten die Kosten übersteigen, damit zu leben.

## Empfehlungen

### Einen sichtbaren, einzigen technischen-Schuld-Rückstand aufbauen

Die Signale aus den früheren Themen dieses Teils sollten konsolidiert werden, Komplexitäts-Ausreißer, Bereiche mit niedriger Mutations-Tötungsrate, Hotspots, ungelöste statische-Analyse-Befunde, zusammen mit Schuldposten, die nur ein Mensch identifizieren kann (eine architektonische Abkürzung, eine verschobene Abhängigkeits-Aktualisierung, ein undokumentierter Workaround), in einen sichtbaren Rückstand, verfolgt mit derselben Strenge und Sichtbarkeit wie der Feature-Rückstand. Schuld, die nur im Gedächtnis einzelner Ingenieurinnen und Ingenieure oder in verstreuten Code-Kommentaren lebt, existiert für Priorisierungszwecke effektiv nicht.

### Die Kosten und Tragekosten jedes Schuldpostens quantifizieren

Für jeden Posten sollten zwei Zahlen geschätzt werden: die Behebungskosten (Engineering-Zeit, Risiko der Behebung selbst) und die Kosten, ihn unbehoben zu tragen (wie viel langsamer geht verwandte Arbeit, wie viel zusätzliches Fehlerrisiko trägt er, wie viel blockiert er andere Arbeit). Diese Rahmung, direkt aus der Logik der finanziellen-Schuld-Metapher entlehnt, gibt Entscheidungsträgerinnen und Entscheidungsträgern eine echte Vergleichsbasis gegen die Kosten und den erwarteten Wert von Feature-Arbeit, statt einer abstrakten, unquantifizierten Beschwerde.

### Nach Wirkung priorisieren, nicht nach Alter oder lautester Fürsprache

Schuldposten sollten nach ihrer Kombination aus Tragekosten und wie häufig der betroffene Code angefasst wird gerankt werden (die Fluktuationsdaten aus Thema 4.3 sind hier direkt nützlich): ein Posten in einer selten geänderten Ecke der Codebasis, so unangenehm er auch ist, zählt weit weniger als einer, der direkt im Pfad der aktivsten Entwicklung sitzt. Es sollte widerstanden werden, danach zu priorisieren, welcher Posten am längsten im Rückstand ist oder welche Ingenieurin oder welcher Ingenieur am hartnäckigsten dafür eintritt, da keines von beidem zuverlässig mit tatsächlicher Geschäftswirkung korreliert.

### Dedizierte, geschützte Kapazität für Schuldbehebung zuteilen

Ein Schuldrückstand, der Posten für Posten gegen jede eingehende Feature-Anfrage in jedem Planungszyklus konkurrieren muss, neigt dazu, konsistent zu verlieren, weil Feature-Arbeit meist eine klarere, unmittelbarere Geschäftsfürsprache hat. Ein geschützter Prozentsatz an Engineering-Kapazität sollte zugeteilt werden, ein übliches Muster liegt irgendwo zwischen 10 % und 20 %, speziell für Schuldbehebung, im Voraus entschieden statt jeden Sprint neu verhandelt, damit Schuldabtragung als Selbstverständlichkeit geschieht, statt nur im Nachgang einer Krise.

### Manche Schuld als permanent akzeptieren, und dies explizit sagen

Nicht jeder Posten gehört auf einen aktiven Behebungsplan. Wo die Behebungskosten echt die Kosten übersteigen, einen Posten unbegrenzt zu tragen, besonders für Code in einem stabilen, selten angefassten, bald ausgemusterten System, sollte diese Entscheidung explizit dokumentiert werden, und der Posten in eine bewusst depriorisierte Kategorie verschoben werden, statt ihn unbegrenzt auf einem aktiven Rückstand sitzen zu lassen, wo seine fortdauernde Präsenz still Arbeit impliziert, die nie tatsächlich geschehen wird.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Keine formale Schuldverfolgung | Kein Aufwand | Schuld verliert den Priorisierungswettbewerb standardmäßig; akkumuliert unsichtbar |
| Informelles, ad hoc Schuldbewusstsein | Geringer Aufwand, etwas Sichtbarkeit | Inkonsistent; verlässt sich auf individuelles Gedächtnis und Fürsprache |
| Formaler, quantifizierter Schuldrückstand | Konkurriert fair um Investition; ermöglicht informierte Abwägungen | Braucht laufende Wartung und Quantifizierungsdisziplin |
| Geschützte, dedizierte Behebungskapazität | Stellt sicher, dass Abtragung konsistent geschieht, nicht nur reaktiv | Reduziert kurzfristig verfügbare Kapazität für Feature-Arbeit |

Die zentrale Spannung ist **unmittelbarer Lieferdruck gegen langfristige Wartbarkeit**. Feature-Arbeit hat fast immer eine klarere, unmittelbarere Geschäftsfürsprache als Schuldbehebung, was strukturellen Druck erzeugt, dass Schuld jede einzelne Priorisierungsentscheidung verliert, selbst wenn ihre kumulativen Kosten hoch sind. Die Spannung sollte gelöst werden, indem Schuldbehebung vollständig aus dem Posten-für-Posten-Wettbewerb entfernt wird, durch geschützte, vorab zugeteilte Kapazität, sodass die Abwägung bewusst und im Voraus entschieden wird, statt in jedem einzelnen Planungszyklus neu verhandelt und meist verloren zu werden.

## Fragen für die Diskussion im Team

1. **Haben wir einen einzigen, sichtbaren technischen-Schuld-Rückstand, oder lebt Schuldbewusstsein größtenteils in den Köpfen einzelner Ingenieurinnen und Ingenieure?** Wenn die ehrliche Antwort Letzteres ist, ist das die größte Lücke, die dieses Thema zuerst zu schließen empfiehlt.

2. **Könnten wir für unseren obersten Schuldposten seine Behebungskosten und seine Tragekosten in Begriffen angeben, die spezifisch genug sind, um fair gegen eine Feature-Anfrage zu vergleichen?** Wenn nicht, sollte diese Quantifizierung gemeinsam als Gruppenübung mit einem echten, aktuellen Posten geübt werden.

3. **Welcher Prozentsatz unserer Engineering-Kapazität geht tatsächlich in Schuldbehebung, und wurde dieser Prozentsatz bewusst entschieden, oder ist es einfach das, was übrig bleibt, nachdem Feature-Arbeit zugeteilt wurde?** Die tatsächlichen jüngsten Sprints sollten betrachtet werden, und die reale Zahl sollte berechnet werden, statt sich auf Eindruck zu verlassen.

4. **Ist unser Schuldrückstand nach echter Geschäftswirkung priorisiert, oder nach dem Posten, der am hartnäckigsten aufgeworfen wurde oder am längsten dort sitzt?** Die aktuelle Priorisierung sollte gegen Fluktuationsdaten (Thema 4.3) kreuzreferenziert werden, und geschaut werden, ob beide übereinstimmen.

5. **Welche Schuldposten sollten wir explizit als permanent akzeptieren, statt sie unbegrenzt auf einem aktiven Rückstand sitzen zu lassen?** Mindestens ein echter Posten sollte identifiziert werden, bei dem die Behebungskosten echt die Tragekosten übersteigen, und diskutiert werden, ihn in einen explizit depriorisierten Status zu verschieben.

6. **Wie hat sich unser Schuldrückstand über das letzte Jahr verändert, wachsend, schrumpfend, oder gleichbleibend, und entspricht dieser Trend unserer Intuition?** Dies sollte über die Zeit verfolgt werden, statt nur je eine einzelne Momentaufnahme zu betrachten; der Trend ist oft informativer als die absolute Größe zu einem gegebenen Zeitpunkt.

## Branchenperspektive

**Startup.** Bewusste, informierte Schuld ist auf dieser Stufe oft eine vernünftige Strategie: schnell auszuliefern, um eine Hypothese zu validieren, mit einem klaren Plan, bestimmte Abkürzungen zu überarbeiten, falls sich das Produkt bewährt, ist ein legitimer Handel, kein Versagen. Das Risiko ist, den Überblick zu verlieren, welche Abkürzungen bewusst und rückgängig machbar waren, gegenüber welchen still zu permanenten, ungeprüften Verbindlichkeiten geworden sind, während die Codebasis wächst.

**Kleinunternehmen.** Eine einfache, geteilte Liste, selbst eine informelle, die bekannte Abkürzungen und ihre ungefähren Behebungskosten benennt, reicht auf dieser Ebene meist aus. Die Hauptdisziplin, die es sich lohnt anzunehmen, ist, diese Liste periodisch zu überprüfen, statt sie still akkumulieren zu lassen und durch Vertrautheit unsichtbar zu werden.

**Enterprise.** Geschützte, vorab zugeteilte Behebungskapazität zählt hier am meisten, da der individuelle Priorisierungswettbewerb zwischen Schuld und Feature-Arbeit zuverlässig Features über Dutzende Teams gleichzeitig bevorzugt, ohne ein strukturelles Gegengewicht. Schuldquantifizierungspraxis sollte organisationsweit standardisiert werden, damit Schuldposten fair über Teams hinweg für Portfolio-Ebene-Investitionsentscheidungen verglichen werden können.

**Behörden.** Langlebige Systeme akkumulieren Schuld über Jahre oder Jahrzehnte inkrementeller, einzeln vernünftiger Anforderungsänderungen, oft ohne jede formale Schuldverfolgung, bis eine Krise das Thema erzwingt. Ein quantifizierter, sichtbarer Schuldrückstand ist ein echt überzeugendes Werkzeug, um Modernisierungsbudget gegenüber Aufsichtsgremien zu rechtfertigen, da er eine vage Behauptung „das System ist alt" in einen konkreten, bezifferten Investitionsfall verwandelt.

## Beispiele

**Enterprise.** Die Abrechnungsplattform eines Telekommunikationsunternehmens hatte über ein Jahrzehnt informell anerkannter, aber nie formal verfolgter technischer Schuld akkumuliert, wobei Ingenieurinnen und Ingenieure routinemäßig „die Abrechnungs-Engine ist ein Chaos" in Retrospektiven zitierten, ohne dass etwas folgte. Eine neue Engineering-Direktorin verlangte von jedem Team, einen quantifizierten Schuldrückstand aufzubauen, Behebungskosten und Tragekosten für jeden Posten zu schätzen, und teilte fortan feste 15 % der Engineering-Kapazität für Schuldbehebung zu. Innerhalb eines Jahres waren die fünf obersten Posten mit den höchsten Tragekosten, die einen kleinen Bruchteil des gesamten Rückstands nach Anzahl repräsentierten, gelöst worden, und die Änderungsfehlerrate (Thema 2.10) für abrechnungsbezogene Deployments verbesserte sich messbar, was die unverhältnismäßige Wirkung demonstrierte, zuerst auf die Posten mit den höchsten Tragekosten zu zielen, statt den Rückstand in beliebiger Reihenfolge abzuarbeiten.

**Behörden.** Das Kerndatenverarbeitungssystem einer nationalen Statistikbehörde, ursprünglich vor über zwanzig Jahren gebaut, hatte nie eine formale Schuldbewertung erhalten, trotz weitverbreiteter informeller Anerkennung unter den Mitarbeitenden, dass bedeutende Teile zerbrechlich und schlecht verstanden waren. Eine strukturierte Schuldbewertung, die statische-Analyse-Befunde, Hotspot-Daten, und Interviews mit den wenigen verbliebenen Ingenieurinnen und Ingenieuren kombinierte, die die ältesten Komponenten verstanden, produzierte einen quantifizierten, priorisierten Rückstand, der eine mehrjährige Modernisierungsbudgetanfrage direkt stützte. Entscheidend identifizierte die Bewertung auch explizit mehrere stabile, selten angefasste Altsystemkomponenten als vernünftig unverändert zu lassen, und vermied so einen unnötig breiten und teuren kompletten Systemneubau zugunsten einer gezielten Investition in die spezifischen Bereiche, die die Daten als am höchsten laufende Kosten tragend zeigten.

## Business Case: Motivation, ROI und TCO

Die Rendite bewusster Verwaltung technischer Schuld sind vermiedene sich akkumulierende Kosten: jede unadressierte Abkürzung macht zukünftige Änderungen marginal schwerer, und dieser Effekt beschleunigt sich ohne Eingreifen, produziert schließlich eine Codebasis, die so zerbrechlich ist, dass selbst einfache Änderungen langsam und riskant werden. Das Telekommunikationsbeispiel oben zeigt die Rendite konkret: das Zielen auf eine kleine Anzahl der Posten mit den höchsten Tragekosten produzierte eine messbare Liefer- und Qualitätsverbesserung, unverhältnismäßig zum bescheidenen Bruchteil des Gesamtrückstands, den diese Posten repräsentierten.

Die Gesamtbetriebskosten sind die für Behebung zugeteilte geschützte Kapazität, typisch 10 % bis 20 % der Engineering-Zeit, was eine echte, sichtbare Kosten ist, die kurzfristig mit Feature-Geschwindigkeit konkurriert. Diese Kosten sind es wert, gezahlt zu werden, weil die Alternative, unverwaltete, sich akkumulierende Schuld, schließlich weit mehr kostet, in verlangsamter Lieferung und erhöhten Fehlerraten über die gesamte Codebasis, nicht nur die spezifischen unadressierten Posten.

## Antipatterns und Fallstricke

- **Kein sichtbarer, verfolgter Schuldrückstand:** Schuld verliert den Priorisierungswettbewerb standardmäßig und akkumuliert unsichtbar.
- **Vage, unquantifizierte Schuldbehauptungen:** konkurrieren selten gut gegen konkrete, quantifizierte Feature-Anfragen in der Planung.
- **Schuld nach Alter oder Fürsprachevolumen statt Wirkung priorisieren:** lenkt begrenzte Behebungskapazität fehl.
- **Keine geschützte Kapazität für Behebung:** Schuldabtragung geschieht nur reaktiv, nach einer Krise, statt als routinemäßige, bewusste Praxis.
- **Alle Schuld als gleichermaßen behebungswürdig behandeln:** verschwendet Aufwand auf geringwirksame Posten, während Posten mit hohen Tragekosten unadressiert bleiben.
- **Schuld unbegrenzt auf einem aktiven Rückstand sitzen lassen, ohne je zu entscheiden, dass sie permanent ist:** impliziert zukünftige Arbeit, die nie tatsächlich geschehen wird, und überfrachtet echte Priorisierung.

## Reifegradmodell

- **Stufe 1, Initiieren:** Technische Schuld wird informell besprochen, ohne verfolgten Rückstand und ohne Quantifizierung; sie verliert konsistent gegen Feature-Arbeit.
- **Stufe 2, Entwickeln:** Manche Teams verfolgen Schuld informell, aber es gibt keine konsistente Quantifizierung, teamübergreifende Sichtbarkeit, oder geschützte Behebungskapazität.
- **Stufe 3, Standardisieren:** Ein sichtbarer, quantifizierter Schuldrückstand existiert organisationsweit, mit konsistent zugeteilter geschützter Behebungskapazität.
- **Stufe 4, Steuern:** Schuldposten werden nach gemessener Wirkung priorisiert (Tragekosten kombiniert mit Fluktuation), und permanent akzeptierte Schuld wird explizit dokumentiert statt mehrdeutig belassen.
- **Stufe 5, Orchestrieren:** Die Organisation kann auf konkrete, messbare Liefer- oder Qualitätsverbesserungen verweisen, die auf gezielte Schuldbehebung zurückgeführt werden, und Schuldverwaltung ist ein routinemäßiger, vertrauenswürdiger Eingabewert für Engineering-Investitionsentscheidungen neben Feature-Arbeit.

## Diskussionsanregungen

1. Was ist unser einziger Schuldposten mit den höchsten Tragekosten gerade jetzt, und könnten wir ihn quantifizieren?
2. Welcher Prozentsatz unserer Kapazität geht heute tatsächlich in Schuldbehebung?
3. Welchen Schuldposten sollten wir explizit als permanent akzeptieren, statt ihn mehrdeutig auf unserem Rückstand zu belassen?
4. Ist unser Schuldrückstand über das letzte Jahr gewachsen, geschrumpft, oder gleichgeblieben?
5. Was würde eine quantifizierte Schuldbewertung enthüllen, das unser aktuelles informelles Bewusstsein übersieht?

## Die wichtigsten Erkenntnisse

- Technische Schuld ist eine **handhabbare Abwägung, kein beschämendes Geheimnis**; sie sollte quantifiziert werden, statt sie als vage, dauerhaft depriorisierte Sorge zu belassen.
- **Behebungskosten gegen Tragekosten** sollten für jeden Posten quantifiziert werden, damit er fair gegen Feature-Arbeit konkurriert.
- **Nach Wirkung priorisieren** (Tragekosten kombiniert mit Fluktuation), nicht nach Alter oder Fürsprachevolumen.
- **Geschützte, dedizierte Behebungskapazität** sollte zugeteilt werden, im Voraus entschieden, da Schuld sonst zuverlässig den Posten-für-Posten-Wettbewerb gegen Feature-Arbeit verliert.
- **Manche Schuld sollte explizit als permanent akzeptiert werden**, wo die Behebungskosten die Tragekosten übersteigen, statt sie mehrdeutig auf einem aktiven Rückstand zu belassen.

## Quellen und weiterführende Literatur

- Cunningham, Ward, "The WyCash Portfolio Management System" (OOPSLA-Erfahrungsbericht, 1992): der Ursprung der technischen-Schuld-Metapher.
- *Managing Technical Debt: Reducing Friction in Software Development*, von Philippe Kruchten, Robert Nord, and Ipek Ozkaya (eine umfassende Behandlung der Messung und Verwaltung technischer Schuld).
- *Refactoring: Improving the Design of Existing Code*, von Martin Fowler (die Behebungstechniken, auf die sich ein Schuldrückstand letztlich stützt).
- *Your Code as a Crime Scene*, von Adam Tornhill (Hotspot-Analyse als Eingabewert für Schuldpriorisierung, Thema 4.3).
