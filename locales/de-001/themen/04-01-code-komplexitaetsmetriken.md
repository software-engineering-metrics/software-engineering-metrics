# 4.1 Code-Komplexitätsmetriken

## Überblick und Motivation

**[Zyklomatische Komplexität](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, eingeführt von Thomas J. McCabe im Jahr 1976, zählt die Anzahl unabhängiger Pfade durch den Kontrollfluss eines Codestücks: jedes `if`, jede Schleife und jede Verzweigung erhöht die Zahl. Sie bleibt fast fünfzig Jahre später die am weitesten verbreitete Code-Komplexitätsmetrik, neben Verwandten wie kognitiver Komplexität (die verschachtelten und schwer nachvollziehbaren Kontrollfluss stärker gewichtet als McCabes ursprüngliche lineare Zählung) und Verschachtelungstiefe. Diese Metriken teilen eine echte, validierte Erkenntnis: Code mit mehr unabhängigen Pfaden ist schwerer vollständig zu testen, schwerer nachzuvollziehen, und, in Jahrzehnten empirischer Forschung, messbar wahrscheinlicher fehlerhaft.

Dieses Thema behandelt diese Erkenntnis mit echtem Respekt, während es ihre Grenzen ebenso ernst nimmt. Komplexitätsmetriken messen eine spezifische Eigenschaft von Code, und eine Codebasis kann nach jeder Komplexitätsmetrik einfach sein und dabei dennoch schlecht gestaltet, schlecht benannt oder konzeptionell inkohärent sein, auf Weisen, die kein verzweigungszählender Algorithmus erkennen kann. Umgekehrt erfordern manche unreduzierbar komplexen Probleme echt komplexen Code, um korrekt gelöst zu werden, und ein Team, das unter Druck steht, einen Komplexitätswert zu minimieren, kann Code produzieren, der gut abschneidet, während er tatsächlich schwerer zu verstehen ist, weil die essenzielle Komplexität über mehr Dateien und Ebenen der Indirektion verteilt wird, statt reduziert zu werden.

Für große Teams verdienen sich Komplexitätsmetriken ihren Platz als Triage-Werkzeug: ein Weg, um unter Tausenden Dateien die kleine Teilmenge zu finden, die am ehesten einen genaueren Blick belohnt, nicht als eigenständiges Urteil über Code-Qualität. Konzerne und Behörden, die Codebasen pflegen, die zu groß sind, als dass eine einzelne Person sie vollständig gelesen haben könnte, verlassen sich auf diese Triage-Funktion, um knappen Refactoring- und Review-Aufwand dorthin zu lenken, wo er den größten Nutzen bringt.

## Kernprinzipien

- **Komplexitätsmetriken sagen Test- und Fehlerschwierigkeit voraus; sie messen Qualität nicht direkt.** Sie sollten als ein Eingabewert behandelt werden, nicht als Urteil.
- **Ein Komplexitätswert ist Manipulation durch Verschleierung ausgesetzt, nicht nur durch echte Vereinfachung.** Komplexität auf mehr Dateien aufzuteilen kann den Wert senken, ohne den Code tatsächlich verständlicher zu machen.
- **Manche Komplexität ist essenziell, nicht zufällig.** Ein echt schwieriges Problem mag echt komplexen Code erfordern; das Ziel ist, zufällige Komplexität zu minimieren, nicht wahllos alle Komplexität zu eliminieren.
- **Komplexitätsmetriken sollten für Triage genutzt werden, nicht als individuelles oder Team-Scorecard.** Sie zeigen, wohin geschaut werden sollte, nicht, wer zu beschuldigen ist.
- **Trend und Ausreißer zählen mehr als jede absolute Schwelle.** Ein steigender Trend oder ein extremer Ausreißer ist handlungsfähiger als ein einzelner teamweiter Durchschnitt.

## Empfehlungen

### Komplexitätsmetriken für Review- und Refactoring-Triage nutzen

Komplexitätsanalyse sollte über die gesamte Codebasis hinweg ausgeführt werden, und die Ergebnisse sollten genutzt werden, um zu priorisieren, wo ein genauerer menschlicher Review oder eine Refactoring-Investition sich am meisten auszahlen würde: Funktionen oder Dateien, die weit über dem typischen Bereich der eigenen Codebasis liegen, sind die wertvollsten Stellen, um zuerst zu schauen. Diese Triage-Nutzung, herauszufinden, wohin geschaut werden sollte, ist die verteidigungsfähigste und wertvollste Anwendung von Komplexitätsmetriken, weit mehr als sie als absolutes Bestehen/Durchfallen-Gate zu nutzen.

### Schwellenwerte relativ zur eigenen Codebasis setzen, nicht nach einer universellen Zahl

Absolute Komplexitätsschwellen, unkritisch von einer Branchenkonvention übernommen (ein Komplexitätswert von zehn ist eine häufig zitierte Faustregel), können je nach Domäne entweder zu nachsichtig oder zu streng sein: ein Parser oder eine Regel-Engine mag legitim höhere Basiskomplexität haben als ein typischer CRUD-Service. Die eigenen Schwellenwerte sollten gegen die tatsächliche Verteilung der eigenen Codebasis kalibriert werden, und eine Schwellenüberschreitung sollte als Anlass für einen genaueren Blick behandelt werden, nicht als automatisches Build-Versagen, sofern das Team diese strengere Richtlinie nicht bewusst gewählt hat, mit vollem Bewusstsein ihrer Abwägungen.

### Auf Manipulation durch Zerlegung ohne echte Vereinfachung achten

Der häufigste Weg, wie Komplexitätswerte manipuliert werden, ist das Substitutionsmuster aus Thema 1.2, angewandt auf diese spezifische Metrik: eine echt komplexe Funktion in mehrere kleinere Funktionen aufzuteilen, die einzeln gut abschneiden, während das Gesamtsystem genauso schwer zu verstehen bleibt, oder manchmal schwerer wird, weil die Logik nun über mehr Dateien mit mehr Indirektion dazwischen verstreut ist. Komplexitätsmetriken sollten mit einer qualitativen Prüfung gepaart werden, ob die Zerlegung den Code echt geklärt hat, oder ob sie die Komplexität nur dorthin verschoben hat, wo die Metrik sie nicht mehr sehen kann.

### Essenzielle Komplexität von zufälliger Komplexität unterscheiden, bevor reagiert wird

Bevor ein hoher Komplexitätswert als zu behebendes Problem behandelt wird, sollte gefragt werden, ob das zugrunde liegende Problem echt so viele unabhängige Pfade erfordert, Steuerberechnungslogik hat zum Beispiel legitim viele Verzweigungen, oder ob die Komplexität aus vermeidbaren Ursachen stammt: tief verschachtelte Bedingungen, die abgeflacht werden könnten, duplizierte Logik, die konsolidiert werden könnte, oder unklare Verantwortungsgrenzen, die neu gezogen werden könnten. Nur die zweite Kategorie ist ein echtes Qualitätsproblem, das diese Metrik zur Behebung antreiben sollte.

### Trend und Ausreißer verfolgen, nicht nur einen Momentaufnahme-Durchschnitt

Ein sich leicht bewegender codebasisweiter Durchschnitts-Komplexitätswert ist für sich allein selten handlungsfähig; die Komplexität einer bestimmten Datei, die über mehrere Änderungen hinweg stark steigt, oder eine kleine Zahl extremer Ausreißer in einer ansonsten wohlverhaltenden Codebasis, sind weit nützlichere Signale. Sowohl der Trend über die Zeit als auch der Ausreißer-Schwanz sollten verfolgt werden, und genutzt werden, um eine spezifische, gezielte Untersuchung auszulösen, statt einer breiten, unfokussierten Komplexitätsreduktions-Initiative.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Absolute universelle Schwelle | Einfach, konsistent, leicht zu automatisieren | Ignoriert legitime Domänenunterschiede; kann durch Zerlegung manipuliert werden |
| Codebasis-relative Schwelle | Besser auf den tatsächlichen Kontext kalibriert | Braucht mehr Einrichtung und periodische Neukalibrierung |
| Komplexität als automatisiertes Build-Gate | Erzwingt Konsistenz ohne menschlichen Review-Aufwand | Kann legitim komplexen, aber gut gestalteten Code blockieren, oder verschleierte Zerlegung belohnen |
| Komplexität als Triage-Signal für menschlichen Review | Fängt echte Qualitätsprobleme, die Zerlegung allein übersehen würde | Braucht mehr menschliche Review-Zeit als ein vollautomatisches Gate |

Die zentrale Spannung ist **Automatisierung gegen Urteilsvermögen**. Ein vollautomatisches Komplexitäts-Gate ist günstig durchzusetzen und konsistent, kann aber sowohl legitim komplexen, gut gestalteten Code blockieren als auch oberflächliche Zerlegung belohnen, die den Wert manipuliert, ohne irgendetwas echt zu vereinfachen. Die Spannung sollte gelöst werden, indem automatisierte Komplexitätsanalyse genutzt wird, um Kandidaten für den Review sichtbar zu machen, und das eigentliche Urteil, ist diese Komplexität essenziell oder zufällig, hat dieses Refactoring echt geklärt oder nur die Komplexität verlagert, einer menschlichen Prüferin oder einem menschlichen Prüfer vorbehalten bleibt, statt allein einem starren automatisierten Gate.

## Fragen für die Diskussion im Team

1. **Sind unsere Komplexitätsschwellen auf die tatsächliche Verteilung unserer eigenen Codebasis kalibriert, oder unkritisch von einer generischen Branchenkonvention übernommen?** Die tatsächliche Komplexitätsverteilung der Codebasis sollte gezogen werden, und geprüft werden, ob die aktuellen Schwellen dagegen Sinn ergeben, statt anzunehmen, eine häufig zitierte Zahl gelte universell für die eigene Domäne.

2. **Haben wir je gesehen, wie eine Funktion in mehrere kleinere aufgeteilt wurde, ohne dass der resultierende Code tatsächlich verständlicher wurde?** Dies ist das klarste Zeichen des Zerlegungs-Manipulationsmusters, vor dem dieses Thema warnt. Ein aktuelles Refactoring, das primär durch einen Komplexitätswert motiviert war, sollte betrachtet werden, und ehrlich bewertet werden, ob es echte Verständlichkeit verbessert hat.

3. **Wo in unserer Codebasis ist Komplexität essenziell für das Problem, und wo ist sie zufällig und behebbar?** Die höchsten Komplexitäts-Ausreißer sollten durchgegangen und explizit in diese zwei Kategorien sortiert werden, da nur die zweite Kategorie ein echtes, handlungsfähiges Qualitätsproblem darstellt.

4. **Nutzen wir Komplexitätsmetriken zur Triage von Review-Aufwand, oder als starres automatisiertes Gate ohne menschliches Urteilsvermögen?** Es sollte diskutiert werden, ob der aktuelle Durchsetzungsansatz Raum für die essenziell-gegen-zufällig-Unterscheidung lässt, die dieses Thema empfiehlt, oder ob er jede Überschreitung identisch behandelt, unabhängig vom Kontext.

5. **Wurde ein Komplexitätswert je genutzt, auch nur informell, um die Arbeitsqualität einer einzelnen Ingenieurin oder eines einzelnen Ingenieurs zu beurteilen?** Dies riskiert dieselbe Individualbewertungsfalle, vor der Thema 3.4 für Aktivitätsmetriken warnt, hier angewandt auf Code-Metriken stattdessen, und es lädt zur selben Manipulationsreaktion ein.

6. **Wie sieht unser Komplexitätstrend über das letzte Jahr für unsere kritischsten, am häufigsten geänderten Dateien aus?** Dies sollte mit der Fluktuations- und Hotspot-Analyse aus Thema 4.3 kombiniert werden, da eine Datei, die sowohl hochkomplex als auch häufig geändert ist, weit vor Aufmerksamkeit verdient als eine, die komplex, aber selten angefasst wird.

## Branchenperspektive

**Startup.** Komplexitätsmetriken sind auf dieser Ebene meist weniger dringend; die Codebasisgröße ist klein genug, dass informelle Vertrautheit oft formale Messung ersetzt. Die Gewohnheit, die es sich lohnt, früh anzunehmen, ist einfach gelegentlich einen Komplexitäts-Scan auszuführen, um eine bestimmte Datei zu fangen, die still unhandhabbar wird, bevor das Team zu groß geworden ist, um es informell zu bemerken.

**Kleinunternehmen.** Die meisten modernen statischen Analysewerkzeuge berichten Komplexitätsmetriken als Teil einer breiteren, kostenlosen oder günstigen Linting-Einrichtung; die Ausgabe sollte als periodisches Triage-Signal genutzt werden, statt in dediziertes Tooling zu investieren. Aufmerksamkeit sollte zuerst auf die am häufigsten geänderten Dateien gerichtet werden.

**Enterprise.** Komplexitätsmetriken im großen Maßstab sind am wertvollsten, kombiniert mit Fluktuationsdaten (Thema 4.3), um Refactoring-Investition über eine Codebasis hinweg zu priorisieren, die zu groß ist, als dass eine einzelne Person sie manuell überblicken könnte. Schwellenwerte sollten pro Service oder Domäne kalibriert werden, statt eine organisationsweite Zahl anzuwenden, da legitime Komplexität zwischen unterschiedlichen Arten von Systemen erheblich variiert.

**Behörden.** Langlebige Behördensysteme akkumulieren Komplexität oft graduell über Jahre oder Jahrzehnte inkrementeller Anforderungsänderungen, und ein Komplexitäts-Audit kann ein überzeugendes, konkretes Werkzeug sein, um Modernisierungs- oder Refactoring-Investition gegenüber Stakeholdern zu rechtfertigen, die das System sonst einfach als „funktionierend" ansehen könnten und daher nicht für investitionswürdig halten.

## Beispiele

**Enterprise.** Ein Zahlungsabwicklungsunternehmen führte zum ersten Mal ein codebasisweites Komplexitäts-Audit durch und fand eine einzelne Transaktionsvalidierungsfunktion mit einem zyklomatischen Komplexitätswert mehr als zehnmal so hoch wie der Median der Codebasis. Die Untersuchung fand, dass die Komplexität fast vollständig zufällig war: Jahre inkrementell hinzugefügter Sonderfallbehandlung für bestimmte Zahlungsanbieter hatten sich zu tief verschachtelten Bedingungen akkumuliert, die zu einem saubereren Strategie-Muster umstrukturiert werden konnten, das anbieterspezifische Logik trennte. Das Refactoring, direkt priorisiert, weil das Komplexitäts-Audit es als das wertvollste einzelne Ziel in der Codebasis identifizierte, reduzierte den Komplexitätswert der Funktion um mehr als 80 % und, wichtiger, reduzierte die Fehlerrate in diesem spezifischen Codepfad messbar über die folgenden zwei Quartale.

**Behörden.** Die jahrzehntealte Leistungsberechnungs-Engine einer Steuerbehörde erzielte extrem hohe Werte bei Komplexitätsmetriken über fast jede Funktion hinweg, was zunächst die Annahme auslöste, das gesamte System brauche einen kompletten Neubau. Ein genauerer, funktionsweiser Review, der essenzielle von zufälliger Komplexität unterschied, fand, dass die meiste Komplexität echt die zugrunde liegenden gesetzlichen Regeln widerspiegelte, die tatsächlich so viele legitime Verzweigungen und gesetzlich vorgeschriebene Sonderfälle hatten, während eine kleinere Teilmenge aus vermeidbarer Duplikation über ähnliche Berechnungspfade stammte. Das Team zielte nur auf die zufällige-Komplexität-Teilmenge für Refactoring, vermied so einen teuren, riskanten kompletten Neubau, während es dennoch die echt problematischsten Bereiche des Systems bedeutsam verbesserte.

## Business Case: Motivation, ROI und TCO

Die Rendite guter Nutzung von Komplexitätsmetriken ist gezielte, hochwertige Refactoring-Investition: das Beispiel des Zahlungsabwicklungsunternehmens oben zeigt eine einzelne, gut gezielte Korrektur, identifiziert durch Komplexitätsanalyse, die Fehler messbar genau in dem risikoreichsten Codepfad reduzierte, zu einem Bruchteil der Kosten, die eine breite, ungezielte Refactoring-Initiative erfordert hätte.

Die Gesamtbetriebskosten sind niedrig: die meisten modernen Entwicklungs-Toolchains berechnen Komplexitätsmetriken automatisch als Teil statischer Analyse (Thema 4.4), und die echte Investition ist die menschliche Urteilszeit, um Ergebnisse korrekt zu interpretieren, essenzielle von zufälliger Komplexität zu unterscheiden und Zerlegungs-Manipulation zu fangen, statt irgendeiner bedeutsamen neuen Tooling-Kosten.

## Antipatterns und Fallstricke

- **Einen Komplexitätswert als direktes Qualitätsurteil behandeln:** er misst eine spezifische Eigenschaft, nicht Gesamt-Code-Qualität.
- **Eine Funktion aufteilen, um den Wert zu manipulieren, ohne echte Vereinfachung:** das Zerlegungs-Manipulationsmuster, das dieses Thema konkret benennt.
- **Eine universelle Schwelle anwenden, ohne sie auf die eigene Codebasis zu kalibrieren:** erzeugt je nach Domäne entweder zu nachsichtige oder zu strenge Durchsetzung.
- **Komplexitätsmetriken nutzen, um Ingenieurinnen und Ingenieure individuell zu bewerten:** lädt zur Manipulation ein und wendet eine für Triage gedachte Metrik falsch für Urteile an.
- **Alle Komplexität als gleichermaßen behebbar behandeln:** essenzielle Komplexität aus einem echt schwierigen Problem ist kein zu eliminierender Fehler.
- **Trend und Ausreißer zugunsten eines flachen, codebasisweiten Durchschnitts ignorieren:** übersieht das handlungsfähigste Signal, das diese Metrikfamilie bietet.

## Reifegradmodell

- **Stufe 1, Initiieren:** Komplexität wird nicht gemessen, oder mit einer ungeprüften, generischen universellen Schwelle unkritisch angewandt.
- **Stufe 2, Entwickeln:** Komplexitätsmetriken werden erhoben, aber selten umgesetzt, und es wird keine Unterscheidung zwischen essenzieller und zufälliger Komplexität getroffen.
- **Stufe 3, Standardisieren:** Schwellenwerte sind auf die eigene Verteilung der Codebasis kalibriert, und Komplexitätsmetriken treiben konsistent organisationsweite Review- und Refactoring-Triage an.
- **Stufe 4, Steuern:** Komplexitätstrend und Ausreißer werden aktiv überwacht und mit Fluktuationsdaten (Thema 4.3) kombiniert, um Refactoring-Investition zu priorisieren; auf Zerlegungs-Manipulation wird aktiv geachtet.
- **Stufe 5, Orchestrieren:** Die Organisation kann auf konkrete, messbare Fehlerraten-Verbesserungen verweisen, die direkt auf komplexitätsinformierte Refactoring-Investition zurückgeführt werden, und Komplexitätsdaten sind ein routinemäßiger, vertrauenswürdiger Eingabewert für Engineering-Investitionsentscheidungen.

## Diskussionsanregungen

1. Was ist unsere einzige komplexeste Funktion oder Datei, und ist ihre Komplexität essenziell oder zufällig?
2. Haben wir je einen Komplexitätswert durch Zerlegung ohne echte Vereinfachung manipuliert?
3. Sind unsere Schwellenwerte auf unsere eigene Codebasis kalibriert, oder unkritisch übernommen?
4. Wo überschneidet sich hohe Komplexität mit hoher Fluktuation in unserer Codebasis gerade jetzt?
5. Hat Komplexitätsdaten je eine Refactoring-Investitionsentscheidung informiert, oder liegt sie ungenutzt herum?

## Die wichtigsten Erkenntnisse

- Komplexitätsmetriken wie **zyklomatische Komplexität** sagen Test- und Fehlerschwierigkeit voraus; sie messen Gesamt-Code-Qualität nicht direkt.
- **Essenzielle Komplexität** (aus einem echt schwierigen Problem) sollte von **zufälliger Komplexität** (vermeidbar durch besseres Design) unterschieden werden, bevor auf einen hohen Wert reagiert wird.
- Auf **Zerlegungs-Manipulation** sollte geachtet werden: Code aufzuteilen, um einen Wert zu senken, ohne irgendetwas echt zu vereinfachen.
- Komplexitätsmetriken sollten für **Triage** genutzt werden, um menschlichen Review- und Refactoring-Aufwand zu lenken, nicht als individuelles Scorecard oder starres automatisiertes Gate.
- Schwellenwerte sollten auf **die Verteilung der eigenen Codebasis** kalibriert werden, und **Trend und Ausreißer** verfolgt werden, nicht nur ein flacher Durchschnitt.

## Quellen und weiterführende Literatur

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976): das ursprüngliche Papier zur zyklomatischen Komplexität.
- *Code Complete*, von Steve McConnell (praktische Anleitung zur Handhabung von Komplexität in der Softwarekonstruktion).
- *Working Effectively with Legacy Code*, von Michael Feathers (Techniken zur sicheren Reduktion von Komplexität in bestehendem, schwer änderbarem Code).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018): die kognitive Komplexitätsmetrik und ihre Unterscheidung von zyklomatischer Komplexität.
