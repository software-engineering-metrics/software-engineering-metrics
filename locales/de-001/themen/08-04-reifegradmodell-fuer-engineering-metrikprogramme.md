# 8.4 Reifegradmodell für Engineering-Metrikprogramme

## Überblick und Motivation

Jedes Thema in Teilen 1 bis 7 dieses Buches endet mit seinem eigenen fünfstufigen [Reifegradmodell](https://en.wikipedia.org/wiki/Capability_Maturity_Model), zugeschnitten auf die spezifische Metrikfamilie dieses Themas. Dieses Thema tut etwas anderes: es tritt zurück und fragt, wie Reife für das Metrik*programm* als Ganzes aussieht, die organisatorische Fähigkeit, die all diese individuellen Metriken zusammen produziert, regiert, und umsetzt. Eine Organisation kann bei Stufe 4 individueller DORA-Metrik-Reife sein, während sie insgesamt noch bei Stufe 1 Programmreife ist, falls sie zum Beispiel exzellente Instrumentierung, aber keine Governance hat (Thema 1.4), oder exzellente individuelle Metriken, aber einen furchtgetriebenen Rollout (Thema 8.3), der die zugrunde liegenden Daten korrumpiert hat, unabhängig davon, wie gut jede Metrik gestaltet war.

Das Modell dieses Themas ist um fünf Dimensionen herum aufgebaut, die jede individuelle Metrikfamilie durchschneiden, die dieses Buch abdeckt: Governance und Eigentümerschaft (Thema 1.4), Instrumentierungsqualität (Thema 1.5), Ergebnis-gegen-Output-Balance (Thema 1.3, Thema 7.4), kulturelles Vertrauen (Thema 8.3), und kontinuierliche Verbesserung (die Ausmusterungs- und Revisionsdisziplin, die Thema 1.1 ganz am Anfang dieses Buches etablierte). Die Gesamtprogrammreife einer Organisation ist realistischerweise das Minimum, nicht der Durchschnitt, über diese fünf Dimensionen hinweg, da eine schwere Schwäche in einer, besonders kulturelles Vertrauen, den Wert der Stärke in allen anderen untergraben kann, genau wie Thema 8.3 direkt argumentierte.

Für große Teams gibt dieses konsolidierte Modell der Führung ein einzelnes, ehrliches Instrument für organisatorische Selbstbewertung, eigenständig von und ergänzend zu den themenweisen Reifeprüfungen, die dieses Buch durchgängig liefert. Konzerne, die Metrikreife über Geschäftseinheiten hinweg vergleichen, und Behörden, die Programmreife an Aufsichtsgremien berichten, profitieren beide von dieser einzelnen, querschneidenden Bewertung, statt fünfundvierzig separate themenweise Reifeablesungen selbst zu einem kohärenten Gesamtbild synthetisieren zu müssen.

## Kernprinzipien

- **Programmreife ist das Minimum über ihre Dimensionen, nicht der Durchschnitt.** Eine schwere Schwäche in kulturellem Vertrauen untergräbt Stärke überall sonst.
- **Die fünf querschneidenden Dimensionen sind Governance, Instrumentierung, Ergebnisbalance, kulturelles Vertrauen, und kontinuierliche Verbesserung.** Jede Dimension führt Fäden aus vielen individuellen Themen zusammen.
- **Dieses Modell ergänzt, ersetzt nicht, die individuellen themenweisen Reifegradmodelle.** Beide sollten zusammen für ein vollständiges Bild genutzt werden.
- **Selbstbewertung sollte ehrlich und spezifisch sein, nicht aspirational.** Bewertet werden sollte, wo man tatsächlich steht, unter Nutzung konkreter Evidenz, nicht, wo man zu sein beabsichtigt.
- **Bewegung zwischen Stufen braucht bewusste Investition**, nicht nur verstreichende Zeit; Reife akkumuliert sich nicht automatisch.

## Empfehlungen

### Jede der fünf Dimensionen unabhängig bewerten, unter Nutzung konkreter Evidenz

Für Governance sollte geprüft werden, ob jede folgenreiche Metrik eine benannte Eigentümerin oder einen benannten Eigentümer und ein dokumentiertes Charter hat (Thema 1.4). Für Instrumentierung sollte geprüft werden, ob Metriken aus automatisierten Quellen stammen statt aus Selbstauskunft, wo möglich (Thema 1.5). Für Ergebnisbalance sollte das tatsächliche Verhältnis ergebnisgewichteter zu output-gewichteten Metriken auf den primären Dashboards berechnet werden (Thema 7.4). Für kulturelles Vertrauen sollte ehrlich bewertet werden, ob die Rollout-Geschichte je eine schlecht gehandhabte, punitive Nutzung einer Metrik umfasste und wie sie adressiert wurde (Thema 8.3). Für kontinuierliche Verbesserung sollte geprüft werden, ob die Organisation eine dokumentierte Geschichte hat, Metriken auszumustern, die ihren Platz nicht mehr verdienten (Thema 1.1). Jede Dimension sollte unabhängig bewertet werden, bevor sie kombiniert werden.

### Das Minimum über Dimensionen als ehrliche Gesamtbewertung nehmen

Der Versuchung sollte widerstanden werden, die fünf Dimensionsbewertungen in eine einzelne, schmeichelhaftere Zusammensetzung zu mitteln. Ein Programm mit exzellenter Instrumentierung (Stufe 4), aber schwachem kulturellem Vertrauen (Stufe 1) ist in keinem bedeutsamen Sinn ein Stufe-2- oder -3-Programm; die schwache Dimension untergräbt aktiv den Wert der starken, da unvertrauenswürdige, durch furchtgetriebene Manipulation korrumpierte Daten nicht dadurch gerettet werden, mit exzellenter Instrumentierung gesammelt worden zu sein. Das Minimum sollte ehrlich berichtet werden, selbst wenn es ein weniger schmeichelhaftes Gesamtbild produziert als ein Durchschnitt würde.

### Dieses Modell zusammen mit, nicht statt, den themenweisen Modellen nutzen

Dieses konsolidierte Modell beantwortet, „wie reif ist unser Gesamtprogramm"; die individuellen themenweisen Modelle durch Teile 2 bis 8 beantworten, „wie reif ist unsere Praxis für diese spezifische Metrik". Beide sollten zusammen genutzt werden: das konsolidierte Modell, um zu priorisieren, welche querschneidende Dimension am meisten Investition braucht, und die themenweisen Modelle, um zu identifizieren, welche spezifischen Metrikfamilien innerhalb dieser Dimension am meisten Aufmerksamkeit brauchen.

### Die Bewertung in festem Rhythmus erneut betrachten, nicht nur, wenn eine Krise dazu auffordert

Der durchgängigen Governance-Disziplin dieses Buches folgend (Thema 1.4), sollte Programmreife in regelmäßigem Rhythmus neu bewertet werden, jährlich ist üblich, statt erst nachdem eine Krise (ein entdeckter Manipulationsvorfall, ein glaubwürdigkeitsschädigender öffentlicher Bericht) die Frage erzwingt. Ein Programm, das seine eigene Reife nur reaktiv untersucht, verpasst die Chance, eine sich schwächende Dimension zu fangen und zu adressieren, bevor sie einen echten, teuren Vorfall produziert.

### Eine niedrige Bewertung ehrlich als Ausgangspunkt für Investition behandeln, nicht als Durchfallnote

Der diagnostischen, nicht bewertenden, Rahmung folgend, die Thema 1.1 für dieses gesamte Buch etablierte, sollte eine niedrige Reifebewertung, in jeder Dimension, als Ausgangspunkt für einen bewussten Investitionsplan genutzt werden (die Einführungs-Roadmap aus Thema 8.5 ist der direkte nächste Schritt), nicht als Urteil, über das man sich schlecht fühlen sollte. Die meisten Organisationen werden, ehrlich bewertet, echte Schwächen irgendwo in diesem Modell finden; die produktive Reaktion ist gezielte Investition, nicht Defensivität über die Bewertung.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Die fünf Dimensionsbewertungen mitteln | Produziert eine einzelne, einfache, schmeichelhaftere Zahl | Verbirgt eine kritische Schwäche in einer Dimension, die den Rest untergräbt |
| Das Minimum über Dimensionen nehmen | Ehrlich, handlungsfähig, identifiziert korrekt die echte Beschränkung | Kann entmutigend wirken, wenn eine Dimension deutlich hinter den anderen zurückbleibt |
| Nur themenweise Modelle nutzen | Detaillierte, metrikspezifische Anleitung | Übersieht die querschneidende Sicht auf Gesamtprogrammgesundheit |
| Nur dieses konsolidierte Modell nutzen | Einfach, hochrangig | Übersieht das spezifische, handlungsfähige Detail, das die themenweisen Modelle liefern |

Die zentrale Spannung ist **Einfachheit gegen Ehrlichkeit**, die Vorsicht aus Thema 5.5 gegen eine falsch präzise einzelne Zahl widerhallend. Eine gemittelte Bewertung ist einfacher und bequemer zu berichten, aber sie verbirgt aktiv die echte Beschränkung der Gesamtvertrauenswürdigkeit und des Werts des Programms. Die Spannung sollte zugunsten von Ehrlichkeit gelöst werden: das Minimum sollte berichtet werden, und sowohl dieses konsolidierte Modell als auch die individuellen themenweisen Modelle sollten zusammen für ein vollständiges, genaues, handlungsfähiges Bild genutzt werden.

## Fragen für die Diskussion im Team

1. **Ehrlich und unabhängig bewertet, welche Stufe erreicht jede unserer fünf Dimensionen, Governance, Instrumentierung, Ergebnisbalance, kulturelles Vertrauen, und kontinuierliche Verbesserung, tatsächlich?** Jede Dimension sollte explizit durchgegangen werden, unter Nutzung konkreter Evidenz statt Eindruck, bevor sie zu einer Gesamtbewertung kombiniert werden.

2. **Was ist unsere schwächste Dimension, und stimmt das mit unserer Intuition über die Gesamtgesundheit unseres Programms überein, oder enthüllt es etwas, das wir zuvor nicht direkt benannt hatten?** Eine niedrige Bewertung speziell in kulturellem Vertrauen könnte zum Beispiel Vertrauen in Daten untergraben, die sonst technisch exzellent aussehen.

3. **Haben wir unsere Stärken und Schwächen zu einem schmeichelhafteren Gesamtbild gemittelt, statt unsere schwächste Dimension ehrlich als echte Beschränkung zu berichten?** Ehrlich sollte reflektiert werden, wie die Organisation bisher über ihre eigene Metrikreife gesprochen hat.

4. **Wann haben wir unsere Gesamtprogrammreife zuletzt formal neu bewertet, und wurde sie durch eine Krise oder durch einen bewussten, regelmäßigen Rhythmus ausgelöst?** Falls nur krisenausgelöst, sollte diskutiert werden, wie ein regelmäßiger Bewertungsrhythmus künftig aussehen würde.

5. **Wie würde gezielte Investition in unsere schwächste Dimension für das nächste Quartal tatsächlich konkret aussehen?** Direkt von der Bewertung zur Handlung übergegangen werden sollte, die Diagnose dieses Themas mit der Einführungs-Roadmap aus Thema 8.5 verbindend.

6. **Wie würde sich unsere Selbstbewertung mit einer ehrlichen externen Überprüfung durch jemanden außerhalb unserer Organisation vergleichen?** Diese Frage testet, ob die interne Bewertung selbst manchem derselben optimistischen Verzerrung unterliegen könnte, vor der dieses Buch durchgängig warnt, es wert, periodisch mit echt außenstehender Perspektive zu prüfen.

## Branchenperspektive

**Startup.** Formale Fünf-Dimensionen-Bewertung ist im sehr kleinen Maßstab wahrscheinlich unnötig, wo informelles Bewusstsein meist das meiste abdeckt, was dieses Modell enthüllen würde. Die Gewohnheit, die es sich lohnt, früh anzunehmen, ist einfach, speziell über kulturelles Vertrauen ehrlich zu sein, da die frühe Metrikkultur eines jungen Unternehmens ein Fundament setzt, das viel schwerer zu ändern wird, sobald die Organisation erheblich gewachsen ist.

**Kleinunternehmen.** Ein einfacher, ehrlicher, informeller Durchgang durch die fünf Dimensionen einmal jährlich, selbst ohne formale Bewertung, erfasst den größten Teil des Werts dieses Themas, ohne einen strukturierten Bewertungsprozess auf dieser Ebene zu brauchen.

**Enterprise.** Dieses konsolidierte Modell ist besonders wertvoll, um Metrikreife über viele Geschäftseinheiten fair zu vergleichen, da ein themenweiser Vergleich über Dutzende Teams unhandlich wäre. Es sollte genutzt werden, um organisationsweite Investition auf die Dimension zu priorisieren, die die am weitesten verbreitete Schwäche über Einheiten hinweg zeigt.

**Behörden.** Eine dokumentierte, ehrliche Reife-Selbstbewertung, unter Nutzung dieses konsolidierten Modells, ist ein echt nützliches Artefakt, um Programmstrenge gegenüber einem Aufsichtsgremium zu demonstrieren, vorausgesetzt, die Bewertung wird ehrlich statt aspirational durchgeführt. Periodische externe Überprüfung der Selbstbewertung selbst sollte erwogen werden, besonders für die kulturelles-Vertrauen-Dimension, die am schwersten genau aus rein interner Perspektive zu bewerten ist.

## Beispiele

**Enterprise.** Die anfängliche Selbstbewertung eines Logistiktechnologieunternehmens bewertete seine Instrumentierungsdimension bei Stufe 4 (automatisierte, umfassende Datenerhebung aus Pipelines und Systemen), aber seine kulturelles-Vertrauen-Dimension bei Stufe 1, nach einem unadressierten Metrik-Missbrauch-Vorfall aus zwei Jahren zuvor, der nie direkt anerkannt oder repariert worden war (das Behörden-Beispiel aus Thema 8.3 direkt widerhallend). Der anfängliche Instinkt der Führung war, diese zu einem respektablen Stufe-2- oder -3-Gesamtbild zu mitteln; eine ehrlichere Anwendung der minimumbasierten Bewertung dieses Themas identifizierte korrekt kulturelles Vertrauen als die echte Beschränkung des Werts des Gesamtprogramms, da selbst exzellente Instrumentierung Daten produzierte, denen Ingenieurinnen und Ingenieure, sich des vergangenen Vorfalls bewusst, noch nicht vollständig vertrauten oder ehrlich meldeten. Gezielte Investition speziell in kulturelle-Vertrauens-Reparatur, direkt der Anleitung aus Thema 8.3 folgend, wurde als direktes Ergebnis dieser ehrlichen, minimumbasierten Bewertung gegenüber weiterer Instrumentierungsinvestition priorisiert.

**Behörden.** Eine nationale Statistikbehörde, die ihre erste formale Reife-Selbstbewertung durchführte, unter Nutzung dieses konsolidierten Modells als Teil einer breiteren Technologie-Governance-Überprüfung, fand, dass ihre Governance-Dimension gut abschnitt (klare Eigentümerschaft, dokumentierte Charters), aber ihre Ergebnisbalance-Dimension schlecht abschnitt, mit der überwältigenden Mehrheit verfolgter Metriken output- und aktivitätsbasiert, trotz des Arguments aus Teil 7 für Ergebnisgewichtung, das innerhalb der technischen Führung der Behörde intellektuell gut verstanden worden war. Dieser ehrliche, spezifische Befund, statt eines vagen allgemeinen Gefühls, „wir sollten mehr Ergebnisse messen", gab dem nachfolgenden Investitionsplan der Behörde (Thema 8.5) einen konkreten, evidenzbasierten Ausgangspunkt, und Folgeberichterstattung an das Aufsichtsgremium der Behörde zitierte diese Reifebewertung speziell als Basis für eine umgeleitete Metrikinvestitionsstrategie.

## Business Case: Motivation, ROI und TCO

Die Rendite einer ehrlichen, minimumbasierten Reife-Selbstbewertung ist, die tatsächliche Beschränkung des Werts eines Metrikprogramms korrekt zu identifizieren, statt weiter in eine bereits starke Dimension zu investieren, während eine schwache weiterhin die Vertrauenswürdigkeit des Gesamtprogramms untergräbt, genau das Muster, das beide Beispiele oben illustrieren. Dieser Zielungseffekt ist der primäre Wert des Modells: es lenkt begrenzte Verbesserungsinvestition dorthin, wo sie die Gesamtreife des Programms echt bewegen wird, statt dorthin, wo Investition zufällig am leichtesten oder vertrautesten ist.

Die Gesamtbetriebskosten sind der Bewertungsaufwand selbst, bescheiden und periodisch, abgewogen gegen das Risiko, weiter in eine bereits starke Dimension zu investieren, während eine unadressierte schwache, besonders kulturelles Vertrauen, weiterhin still den Wert von allem anderen korrumpiert, was das Programm aufgebaut hat.

## Antipatterns und Fallstricke

- **Dimensionsbewertungen zu einer schmeichelhafteren Zusammensetzung mitteln:** verbirgt die echte Beschränkung des Gesamtwerts des Programms.
- **Nur aspirational bewerten, basierend auf erklärter Richtlinie statt tatsächlicher Praxis:** produziert ein ungenaues, übermäßig optimistisches Bild.
- **Dieses konsolidierte Modell als Ersatz für, statt als Ergänzung zu, den themenweisen Modellen nutzen:** verliert das spezifische, handlungsfähige Detail, das diese individuellen Modelle liefern.
- **Nur neu bewerten, nachdem eine Krise die Frage erzwingt:** verpasst die Chance, eine sich schwächende Dimension proaktiv zu fangen und zu adressieren.
- **Eine niedrige Bewertung als Durchfallnote statt als Investitionsausgangspunkt behandeln:** lädt zu Defensivität ein statt der produktiven, diagnostischen Reaktion, die dieses Buch durchgängig empfiehlt.
- **Nie eine ehrliche externe Perspektive auf die Selbstbewertung suchen:** riskiert, dass dieselbe optimistische Verzerrung, vor der dieses Buch durchgängig warnt, die Bewertung selbst beeinflusst.

## Reifegradmodell

- **Stufe 1, Initiieren:** Keine formale querschneidende Bewertung existiert; individuelle Metrikfamilien mögen unabhängig bewertet werden, aber Gesamtprogrammgesundheit ist ununtersucht.
- **Stufe 2, Entwickeln:** Manches informelles Bewusstsein über Gesamtprogrammstärken und -schwächen existiert, aber keine strukturierte Fünf-Dimensionen-Bewertung wurde durchgeführt.
- **Stufe 3, Standardisieren:** Eine strukturierte, ehrliche, minimumbasierte Fünf-Dimensionen-Bewertung wird organisationsweit durchgeführt, unter Nutzung konkreter Evidenz.
- **Stufe 4, Steuern:** Die Bewertung wird in regelmäßigem Rhythmus wiederholt, und ihre Befunde informieren direkt und konsistent gezielte Investitionsprioritäten.
- **Stufe 5, Orchestrieren:** Die Organisation hat eine demonstrierte, anhaltende Praxis ehrlicher Selbstbewertung, einschließlich periodischer externer Überprüfung, und kann auf spezifische Investitionsentscheidungen verweisen, die die Befunde der Bewertung direkt antrieben.

## Diskussionsanregungen

1. Wie ist unsere ehrliche, evidenzbasierte Bewertung für jede der fünf Dimensionen gerade jetzt?
2. Welche Dimension ist unsere echte Beschränkung, und stimmt das mit unserer Intuition überein?
3. Haben wir unsere Bewertungen je zu einem schmeichelhafteren Bild gemittelt, als das Minimum zeigen würde?
4. Wann haben wir zuletzt formal neu bewertet, und war es proaktiv oder krisengetrieben?
5. Was würde eine ehrliche externe Überprüfung unserer Selbstbewertung wahrscheinlich enthüllen?

## Die wichtigsten Erkenntnisse

- Programmreife umspannt fünf querschneidende Dimensionen: **Governance, Instrumentierung, Ergebnisbalance, kulturelles Vertrauen, und kontinuierliche Verbesserung**.
- Gesamtreife ist das **Minimum über Dimensionen, nicht der Durchschnitt**; eine Schwäche in kulturellem Vertrauen untergräbt Stärke überall sonst.
- Dieses konsolidierte Modell sollte **zusammen mit, nicht statt**, den individuellen themenweisen Reifegradmodellen dieses Buches genutzt werden.
- **In regelmäßigem Rhythmus sollte neu bewertet werden**, statt zu warten, bis eine Krise die Frage erzwingt.
- Eine niedrige Bewertung sollte als **ehrlicher Investitionsausgangspunkt** behandelt werden, keine Durchfallnote, der durchgängigen diagnostischen Rahmung dieses Buches folgend.

## Quellen und weiterführende Literatur

- *Capability Maturity Model Integration (CMMI)*, Software Engineering Institute (die allgemeine Reifegradmodell-Methodik, aus der der Ansatz dieses Themas strukturelle Inspiration zieht).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die Forschungsbasis für die individuellen themenweisen Reifegradmodelle, die dieses konsolidierte Modell zusammenführt).
- *Measuring and Managing Performance in Organizations*, von Robert D. Austin (organisatorische Bewertung von Metrikprogrammgesundheit und -dysfunktion).
- *The Fifth Discipline: The Art and Practice of the Learning Organization*, von Peter M. Senge (systemebenen-organisatorische Selbstbewertung und kontinuierliche Verbesserung).
