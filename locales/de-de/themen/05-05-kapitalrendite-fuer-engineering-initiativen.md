# 5.5 Kapitalrendite für Engineering-Initiativen

## Überblick und Motivation

Dieses Kapitel schließt Teil 5 ab, indem es alles zusammenbringt, was die vorangegangenen vier Kapitel maßen, Qualität, Akzeptanz, Ergebnisse, und Kosten, in die einzelne finanzielle Rahmung, die letztlich die meisten größeren Engineering-Investitionsentscheidungen regiert: **[Kapitalrendite](https://en.wikipedia.org/wiki/Return_on_investment) (ROI)**. Ob eine Organisation entscheidet, eine Plattformmodernisierung, einen größeren Refactoring-Aufwand, oder eine neue Produktlinie zu finanzieren, jemand muss schließlich die Frage in finanziellen Begriffen beantworten: ist dies wert, was es kostet. Dieses Kapitel handelt davon, diese Frage ehrlich zu beantworten, unter Nutzung der Metriken, die dieses Buch bereits aufgebaut hat, statt entweder die Frage zu vermeiden (was Einfluss auf Investitionsentscheidungen an Menschen abtritt, die weniger ausgestattet sind, sie gut zu beantworten) oder sie mit einem aufgeblähten, unhaltbaren Fall zu beantworten, der Glaubwürdigkeit schädigt, wenn er nicht standhält.

Die Disziplin, die dieses Kapitel empfiehlt, stützt sich direkt auf die Einheitswirtschaftlichkeit aus Kapitel 5.4 für die Kostenseite der Gleichung, und auf die Ergebnismetriken aus Kapitel 5.3, mit ihrer ehrlichen Behandlung von Zurechnungsunsicherheit, für die Nutzenseite. Ein auf diese Weise aufgebauter ROI-Fall ist notwendigerweise bescheidener und stärker abgesichert als eine einfache, ansprechende Schlagzeilenzahl, aber er hat den entscheidenden Vorteil, den dieses Buch durchgängig betont hat: er übersteht Prüfung, und eine Organisation, die konsistent verteidigungsfähige ROI-Fälle aufbaut, verdient mehr Vertrauen, und daher mehr Autonomie, in zukünftigen Investitionsentscheidungen als eine, die gelegentlich zu viel verspricht.

Für große Teams ist ROI-Disziplin das, was eine Engineering-Organisation, die als strategische Partnerin behandelt wird, von einer trennt, die als Kostenstelle behandelt wird, deren Ausgaben toleriert statt aktiv investiert wird. Konzerne nutzen rigorose ROI-Fälle, um erfolgreich um Kapital gegen andere Geschäftsinvestitionen zu konkurrieren; Behörden nutzen dieselbe Disziplin, oft umgerahmt als Kosten-Nutzen-Analyse, um öffentliche Technologiefinanzierung gegen politischen und budgetären Druck zu sichern und aufrechtzuerhalten, der wenig Geduld für vage, unbelegte Versprechen hat.

## Kernprinzipien

- **Ein ehrlicher ROI-Fall wird aus den anderen Metriken dieses Buches aufgebaut**, nicht separat erfunden; Kosten aus Kapitel 5.4, Nutzen aus den Kapiteln 5.1 bis 5.3.
- **Gesamtbetriebskosten, nicht nur Vorabkosten, gehören auf die Kostenseite.** Laufende Wartungs-, Support-, und Infrastrukturkosten akkumulieren über die Lebensdauer eines Systems.
- **Nutzenschätzungen tragen Unsicherheit; diese sollte explizit angegeben werden**, statt eine einzelne, falsch präzise Zahl zu präsentieren.
- **Ein negativer oder marginaler ROI-Befund ist ein legitimes, nützliches Ergebnis.** Die Disziplin existiert, um Entscheidungen ehrlich zu informieren, nicht um bereits getroffene Entscheidungen zu rechtfertigen.
- **Tatsächlicher ROI sollte im Nachhinein verfolgt werden, nicht nur der projizierte Fall vorab.** Eine Projektion, die nie gegen die Realität geprüft wird, lehrt die Organisation nichts.

## Empfehlungen

### Die Kostenseite aus Gesamtbetriebskosten aufbauen, nicht nur Vorabinvestition

Nicht nur die anfänglichen Entwicklungskosten sollten einbezogen werden, sondern die vollen **[Gesamtbetriebskosten](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO)**: laufende Wartung, Infrastruktur (die Einheitswirtschaftlichkeit aus Kapitel 5.4 ist hier direkt nützlich), Support, und die Opportunitätskosten der Engineering-Kapazität, die die Initiative verbraucht, die andernfalls in alternative Arbeit hätte gehen können. Ein Projekt, das basierend auf Vorabkosten allein günstig aussieht, kann über seine volle Lebensdauer teuer sein, sobald die laufende Wartungslast ehrlich berücksichtigt wird.

### Die Nutzenseite aus dokumentierter, ehrlicher Ergebnisevidenz aufbauen

Nutzenschätzungen sollten aus der Ergebnismessungsdisziplin der Kapitel 5.1 bis 5.3 gezogen werden: Qualitätsverbesserungen übersetzt in reduzierte Vorfall- und Supportkosten, Akzeptanzdaten übersetzt in nutzungsgetriebenen Wert, und Geschäftsergebniskorrelationen aufgebaut mit dem ehrlichen, störvariablengeprüften Kausalkettenansatz aus Kapitel 5.3. Es sollte vermieden werden, eine Nutzenschätzung aus ersten Prinzipien oder optimistischer Annahme zu erfinden, wenn tatsächliche gemessene oder vergleichbare historische Daten verfügbar sind, um sie stattdessen zu erden.

### Unsicherheit explizit angeben, unter Nutzung einer Spanne statt einer einzelnen Zahl

ROI-Schätzungen sollten als Spanne präsentiert werden (ein konservativer Fall und ein optimistischer Fall), statt als einzelne, falsch präzise Zahl, und es sollte erklärt werden, was die Spanne antreibt: welche spezifische Annahme, falls sie sich als optimistisch oder pessimistisch erweist, das Ergebnis am meisten bewegen würde. Dies spiegelt das statistische Kompetenzprinzip aus Kapitel 1.6 direkt, angewandt auf finanzielle Projektion, und es schützt die Glaubwürdigkeit des Falls, da eine einzelne Punktschätzung, die sich als falsch erweist, Vertrauen weit mehr schädigt als eine gut erklärte Spanne, in die das tatsächliche Ergebnis fällt.

### Einen negativen oder marginalen Befund als legitimes Ergebnis behandeln

Der ROI-Analyseprozess sollte so aufgebaut werden, dass er echt fähig ist, zu schließen „das ist es nicht wert", und diese Schlussfolgerung, wenn die Evidenz sie stützt, sollte als wertvolles Ergebnis behandelt werden, nicht als Versagen der Analyse. Eine Organisation, die dafür bekannt ist, nur je positive ROI-Fälle zu produzieren, unabhängig von der Initiative, verliert schnell Glaubwürdigkeit, weil Stakeholder korrekt ableiten, dass die Analyse tatsächlich nicht unabhängig von der Entscheidung ist, die sie informieren soll.

### Tatsächliche Ergebnisse gegen den projizierten Fall verfolgen, und die Schleife öffentlich schließen

Nachdem eine Initiative abgeschlossen ist, oder einen bedeutsamen Meilenstein erreicht, sollten tatsächlich gemessene Ergebnisse gegen die ursprünglich projizierte Spanne verglichen werden, und dieser Vergleich sollte veröffentlicht werden, einschließlich wo die Projektion falsch lag. Diese Schleife-Schließen-Disziplin, ähnlich der Empfehlung aus Kapitel 3.7 für Umfrage-Follow-up, ist das, was die langfristige ROI-Prognose-Glaubwürdigkeit einer Organisation aufbaut und die Genauigkeit zukünftiger Schätzungen verbessert, indem eine echte, sichtbare Feedback-Schleife geschaffen wird.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Einfache, einzelne-Zahl-ROI-Behauptung | Überzeugend, leicht zu kommunizieren | Falsch präzise; anfällig, falsch zu sein und Glaubwürdigkeit zu schädigen |
| Spannenbasierter ROI mit angegebener Unsicherheit | Verteidigungsfähig, übersteht Prüfung, ehrlich darüber, was die Spanne antreibt | Komplexer zu präsentieren; braucht mehr analytischen Aufwand |
| Nur-Vorabkosten-Analyse | Einfach, schnell zu produzieren | Unterschätzt echte Kosten, indem laufende Wartungs- und Supportlast weggelassen wird |
| Vollständige Gesamtbetriebskosten-Analyse | Genau, vollständiges Bild echter Investitionskosten | Braucht mehr Datensammlung, besonders für laufende Kostenprojektion |

Die zentrale Spannung ist **überzeugende Einfachheit gegen verteidigungsfähige Ehrlichkeit**, dieselbe Spannung, die Kapitel 5.3 allgemein für Ergebnisbehauptungen benannte, jetzt speziell auf den finanziellen Fall angewandt. Eine einfache, selbstsichere einzelne-Zahl-ROI-Behauptung ist leichter, einer Entscheidungsträgerin oder einem Entscheidungsträger im Moment zu verkaufen, aber ein ehrlicher, spannenbasierter Fall mit expliziter Unsicherheit und voller Gesamtbetriebskostenrechnung ist das, was tatsächlich über die Lebensdauer der Investition standhält und die Glaubwürdigkeit der Organisation für den nächsten Fall schützt, den sie machen muss.

## Fragen für die Diskussion im Team

1. **Haben wir für unseren letzten größeren Engineering-Investitionsfall Gesamtbetriebskosten berücksichtigt, oder nur Vorab-Entwicklungskosten?** Der ursprüngliche Fall sollte erneut betrachtet werden, und geprüft werden, ob laufende Wartungs- und Infrastrukturkosten einbezogen waren, und falls nicht, geschätzt werden, was sie hinzugefügt hätten.

2. **Zog unsere Nutzenschätzung aus dokumentierter, gemessener Ergebnisevidenz, oder wurde sie aus optimistischer Annahme aufgebaut?** Die Nutzenseite eines aktuellen Falls sollte zurück zu ihrer tatsächlichen Evidenzquelle verfolgt werden, und ehrlich bewertet werden, wie geerdet sie tatsächlich war.

3. **Haben wir je eine ROI-Schätzung als einzelne Zahl präsentiert, wenn eine Spanne ehrlicher gewesen wäre?** Diskutiert werden sollte, wie die Spanne für einen aktuellen Fall ausgesehen hätte, und welche spezifische Annahme die Breite dieser Spanne antrieb.

4. **Hat unser ROI-Analyseprozess je geschlossen, dass eine Initiative nicht verfolgenswert war, und wie wurde diese Schlussfolgerung aufgenommen?** Wenn jede vergangene Analyse positiv geschlossen hat, sollte ehrlich diskutiert werden, ob das echt vernünftige Initiativenauswahl widerspiegelt oder einen Prozess, der nur je die Antwort produziert, die Stakeholder hören wollen.

5. **Sind wir für eine abgeschlossene Initiative je zurückgegangen und haben tatsächliche Ergebnisse gegen den ursprünglich projizierten Fall verglichen?** Falls nicht, sollte eine echte, abgeschlossene Initiative ausgewählt werden, und dieser Vergleich sollte jetzt als Gruppenübung durchgeführt werden, wie unbequem sich die Lücke zwischen Projektion und Realität auch erweisen mag.

6. **Was würde es brauchen, um unseren nächsten größeren ROI-Fall unter echter, skeptischer Prüfung von jemandem außerhalb von Engineering verteidigungsfähig zu machen?** Der nächste geplante Fall sollte durchgegangen werden, und das schwächste Glied in seiner aktuellen Evidenzkette sollte identifiziert werden, bevor er zu einer Entscheidungsträgerin oder einem Entscheidungsträger geht.

## Branchenperspektive

**Startup.** Formale ROI-Analyse ist oft weniger relevant als eine einfachere Überlebens-und-Wachstums-Frage: hilft diese Investition, den nächsten Meilenstein oder die nächste Finanzierungsrunde zu erreichen. Dennoch sollte dasselbe Ehrlichkeitsprinzip angewandt werden, es sollte widerstanden werden, einen Fall aufzublähen, um eine Entscheidung zu rechtfertigen, zu der sich das Team bereits emotional verpflichtet hat, da Investorenprüfung schließlich dieselbe Skepsis anwenden wird, die dieses Kapitel empfiehlt, zuerst intern anzuwenden.

**Kleinunternehmen.** ROI-Analyse sollte proportional zur Größe der Entscheidung gehalten werden; eine größere, mehrjährige Plattforminvestition verdient die volle Disziplin, die dieses Kapitel empfiehlt, während ein kleiner Tooling-Kauf nicht dieselbe Strenge braucht. Formaler Analyseaufwand sollte auf die wenigen größten, folgenreichsten Entscheidungen fokussiert werden.

**Enterprise.** ROI-Disziplin bestimmt auf dieser Ebene, ob Engineering erfolgreich um Kapital gegen andere Geschäftsinvestitionen mit etablierteren Finanzanalysetraditionen konkurriert. Die volle Gesamtbetriebskosten- und spannenbasierte Disziplin, die dieses Kapitel empfiehlt, sollte als Standardpraxis aufgebaut werden, und in die Schleife-Schließen-Verfolgung investiert werden, die langfristige Prognoseglaubwürdigkeit aufbaut.

**Behörden.** Kosten-Nutzen-Analyse, das Äquivalent des öffentlichen Sektors zu ROI, ist häufig ein formaler, erforderlicher Teil der Budgetrechtfertigung, und Ehrlichkeit über Unsicherheit und Gesamtbetriebskosten ist besonders wichtig, wo Befunde externem Audit oder gesetzgeberischer Prüfung begegnen könnten. Eine Analyse, die Nutzen übertrieb oder Kosten unterschätzte, verursacht, einmal entdeckt, dauerhaften Schaden an der Glaubwürdigkeit eines Programms bei seinem Finanzierungsgremium.

## Beispiele

**Enterprise.** Die Engineering-Führung eines Logistiktechnologieunternehmens schlug eine größere Investition vor, einen Legacy-Monolithen zu einer Microservices-Architektur zu migrieren, zunächst eine einzelne, optimistische ROI-Zahl präsentierend, primär basierend auf projizierten Deployment-Frequenz-Verbesserungen. Skeptisches Nachfragen einer finanziellen Stakeholderin enthüllte, dass der Fall die substanzielle laufende operative Komplexität und Infrastrukturkosten, die die neue Architektur einführen würde, nicht berücksichtigt hatte. Ein überarbeiteter Fall, aufgebaut mit vollen Gesamtbetriebskosten und einer Spanne, die sowohl konservative als auch optimistische Lieferverbesserungsszenarien widerspiegelte, zeigte eine bescheidenere, aber immer noch positive erwartete Rendite, und entscheidend überstand er die Prüfung des Finanzteams und sicherte Finanzierung, wo der ursprüngliche, übertriebene Fall wahrscheinlich nicht bestanden hätte.

**Behörden.** Das Gerichtsakten-Digitalisierungsprogramm einer Landesregierung baute seinen anfänglichen Kosten-Nutzen-Fall allein um Verwaltungskosteneinsparungen herum auf, mit einer einzelnen, präzisen ROI-Zahl. Eine unabhängige Budgetbüro-Überprüfung fand, dass die Projektion bürgerseitige Zeitersparnisse oder reduzierte Fehlerraten in Gerichtsverfahren nicht berücksichtigt hatte, Nutzen, der echt war, aber weggelassen worden war, weil er schwerer zu quantifizieren war als Verwaltungskosten. Eine überarbeitete Analyse integrierte diesen Nutzen mit einer explizit angegebenen Spanne, die die echte beteiligte Messunsicherheit widerspiegelte, was einen stärkeren und, wichtig, verteidigungsfähigeren Fall produzierte, den das Budgetbüro schließlich genehmigte, genau weil er transparent darüber war, was er mit Zuversicht wusste und nicht wusste.

## Business Case: Motivation, ROI und TCO

Die Rendite rigoroser ROI-Disziplin ist, etwas rekursiv, die eigene Glaubwürdigkeit der ROI-Disziplin: eine Organisation, die konsistent ehrliche, verteidigungsfähige Fälle aufbaut, einschließlich gelegentlich schließend, dass eine Initiative nicht verfolgenswert ist, verdient größeres Vertrauen und daher mehr Autonomie in zukünftigen Investitionsentscheidungen als eine, deren Fälle mit Skepsis betrachtet werden, weil sie zuvor zu viel versprochen haben. Das Beispiel des Logistikunternehmens oben zeigt dies direkt: der überarbeitete, bescheidenere, aber ehrliche Fall gelang, wo das aufgeblähte Original wahrscheinlich unter Prüfung versagt hätte.

Die Gesamtbetriebskosten dieser Disziplin sind der analytische Aufwand, volle Gesamtbetriebskostenschätzungen aufzubauen, Nutzenschätzungen in echter Evidenz zu erden, Unsicherheit explizit anzugeben, und tatsächliche Ergebnisse im Nachhinein zu verfolgen. Dieser Aufwand ist echt mehr Arbeit als ein schneller, selbstsicherer Einzelne-Zahl-Pitch, und er ist es wert, speziell weil die Alternative die Glaubwürdigkeit der Organisation für jeden zukünftigen Fall riskiert, den sie machen muss.

## Antipatterns und Fallstricke

- **Nur-Vorabkosten-Analyse, Gesamtbetriebskosten weglassend:** unterschätzt echte Investitionskosten, besonders für langlebige Systeme.
- **Nutzenschätzungen aus optimistischer Annahme statt dokumentierter Evidenz erfinden:** produziert einen Fall, der Prüfung nicht übersteht.
- **Eine einzelne, falsch präzise ROI-Zahl statt einer angegebenen Spanne präsentieren:** schädigt Glaubwürdigkeit, wenn sich das tatsächliche Ergebnis von der Punktschätzung unterscheidet.
- **Ein Analyseprozess, der nur je positive Schlussfolgerungen produziert:** korrekt von Stakeholdern als Evidenz gelesen, dass der Prozess nicht echt unabhängig ist.
- **Tatsächliche Ergebnisse nie gegen die ursprüngliche Projektion verfolgen:** verliert die Feedback-Schleife, die zukünftige Prognosegenauigkeit verbessern würde.
- **Einen Fall aufbauen, um eine bereits emotional verpflichtete Entscheidung zu rechtfertigen, statt die Entscheidung echt zu informieren:** die Grundursache der meisten aufgeblähten ROI-Fälle.

## Reifegradmodell

- **Stufe 1, Initiieren:** ROI-Fälle sind informell, ungestützt von dokumentierter Evidenz, und schließen fast immer positiv, unabhängig von der Initiative.
- **Stufe 2, Entwickeln:** Manche Fälle enthalten Kosten- und Nutzenschätzungen, aber Gesamtbetriebskosten werden inkonsistent angewandt und Unsicherheit wird selten explizit angegeben.
- **Stufe 3, Standardisieren:** ROI-Fälle nutzen konsistent volle Gesamtbetriebskosten, dokumentierte Nutzenevidenz, und eine angegebene Spanne, die echte Unsicherheit widerspiegelt, organisationsweit.
- **Stufe 4, Steuern:** Tatsächliche Ergebnisse werden nach Abschluss gegen ursprüngliche Projektionen verfolgt, und der Vergleich wird veröffentlicht und genutzt, um zukünftige Prognosen zu verbessern.
- **Stufe 5, Orchestrieren:** Die Organisation hat eine demonstrierte, mehrjährige Erfolgsbilanz genauer, ehrlicher ROI-Prognosen, einschließlich Fälle, die korrekt schlossen, dass eine Initiative nicht verfolgenswert war, und diese Erfolgsbilanz verdient Engineering einen vertrauenswürdigen Platz in strategischen Investitionsentscheidungen.

## Diskussionsanregungen

1. Was ist unser größter aktueller Investitionsfall, und könnte er heute echt skeptische Prüfung überstehen?
2. Haben wir je das tatsächliche Ergebnis einer abgeschlossenen Initiative gegen ihre ursprüngliche ROI-Projektion verfolgt?
3. Was müsste sich an unserem Analyseprozess ändern, um echt fähig zu sein, „nicht wert" zu schließen?
4. Welche Gesamtbetriebskostenkomponente fehlt am häufigsten in unseren aktuellen Kostenschätzungen?
5. Was ist das einzige schwächste Evidenzglied in unserem nächsten geplanten größeren Investitionsfall?

## Die wichtigsten Erkenntnisse

- ROI-Fälle sollten aus den **anderen Metriken dieses Buches** aufgebaut werden, Kosten aus Einheitswirtschaftlichkeit (Kapitel 5.4), Nutzen aus dokumentierter Ergebnisevidenz (Kapitel 5.1 bis 5.3), nicht aus erfundenen Annahmen.
- **Gesamtbetriebskosten** sollten einbezogen werden, nicht nur Vorabkosten, und Nutzenschätzungen sollten als **Spanne mit expliziter Unsicherheit** angegeben werden, nicht als einzelne, falsch präzise Zahl.
- Ein Prozess sollte aufgebaut werden, der echt fähig ist, zu schließen, dass eine Initiative **nicht verfolgenswert ist**; eine Analyse, die nur je positive Schlussfolgerungen produziert, ist nicht glaubwürdig.
- **Tatsächliche Ergebnisse sollten gegen die Projektion verfolgt werden** nach Abschluss, und der Vergleich sollte veröffentlicht werden, um langfristige Prognoseglaubwürdigkeit aufzubauen.
- Ehrliche, verteidigungsfähige ROI-Disziplin ist das, was Engineering über die Zeit einen **vertrauenswürdigen Platz** in strategischen Investitionsentscheidungen verdient.

## Quellen und weiterführende Literatur

- *How to Measure Anything*, von Douglas W. Hubbard (unsicheren Wert quantifizieren und verteidigungsfähige, spannenbasierte Schätzungen aufbauen).
- *Cloud FinOps*, von J.R. Storment and Mike Fuller (Gesamtbetriebskostendisziplin für cloud-basierte Infrastrukturinvestition).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die Forschungsbasis, um Lieferpraxisinvestition mit Geschäftsrendite zu verbinden).
- U.S. Office of Management and Budget Circular A-94, Anleitung zur Kosten-Nutzen-Analyse für Bundesprogramme (ROI-Disziplin des öffentlichen Sektors).
