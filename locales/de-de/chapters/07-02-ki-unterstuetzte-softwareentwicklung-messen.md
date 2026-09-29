# 7.2 KI-unterstützte Softwareentwicklung messen

## Überblick und Motivation

Kapitel 7.1 etablierte, warum mehrere bestehende Metriken unter KI-unterstützter Entwicklung nicht mehr zuverlässig messen, was sie früher maßen. Dieses Kapitel handelt davon, was stattdessen gemessen werden sollte: wie mit echter Evidenz statt Eindruck oder Anbietermarketing gewusst wird, ob KI-Codierunterstützung der Organisation tatsächlich hilft, und um wie viel. Dies ist eine echt wichtige Frage mit echten Budgetkonsequenzen, KI-Tooling-Lizenzen stellen echte, laufende Kosten dar, die Einheitswirtschaftlichkeitsdisziplin aus Kapitel 5.4 gilt direkt, und eine Organisation, die dies nicht mit Evidenz beantworten kann, zahlt entweder zu viel für ein Werkzeug, das nicht hilft, oder unterinvestiert in eines, das es echt tut.

Der Ansatz dieses Kapitels stützt sich direkt auf das Ergebnisse-über-Output-Prinzip aus Kapitel 1.3, jetzt speziell auf KI-Tooling-Bewertung angewandt. Der naive, üblichste Ansatz misst KI-unterstützte Entwicklung nach Output-Volumen, generierten Codezeilen, akzeptierten Vorschlägen, selbstberichteter eingesparter Zeit pro Aufgabe, genau die Metriken, vor denen Kapitel 7.1 warnte, sie seien diesem Wandel am stärksten exponiert. Der rigorosere Ansatz, den dieses Kapitel empfiehlt, misst Ergebnisse: hat KI-Unterstützung echt Zykluszeit reduziert, ohne Qualität zu verschlechtern, hat sie Zeit reduziert, die für echt geringwertige, repetitive Arbeit aufgewandt wurde, Kapazität für höherwertige Arbeit freisetzend, und hat sie die Geschäfts- und Produktergebnisse aus Teil 5 messbar beeinflusst.

Für große Teams bestimmt, diese Messung richtig zu machen, ob KI-Tooling-Investitionsentscheidungen auf Evidenz oder auf Anbieterbehauptungen und organisatorischem Momentum getroffen werden. Konzerne, die groß angelegte KI-Tooling-Verträge verhandeln, brauchen echte Wertevidenz, um die Ausgaben zu rechtfertigen und konkurrierende Werkzeuge fair zu vergleichen; Behörden, oft unter besonderer Prüfung für Technologieausgaben, brauchen eine rigorose, verteidigungsfähige Bewertungsmethodik, bevor sie öffentliche Mittel für KI-Tooling-Einführung im großen Maßstab verpflichten.

## Kernprinzipien

- **KI-Unterstützung sollte nach Ergebnis gemessen werden, nicht nach Output-Volumen oder anbieterberichteten Nutzungsstatistiken.** Die Disziplin aus Kapitel 1.3 gilt hier mit voller Kraft.
- **Eine echte [Vergleichsgruppe](https://en.wikipedia.org/wiki/Treatment_and_control_groups) sollte genutzt werden, wo machbar**, nicht nur ein Vorher-Nachher-Vergleich, den eine steigende branchenweite Grundlinie konfundieren könnte.
- **Selbstberichtete Zeitersparnisse sind ein schwaches Signal allein.** Sie sollten mit objektiven Zykluszeit- und Qualitätsdaten gepaart werden.
- **Die vollen Kosten sollten gemessen werden, einschließlich Review- und Korrekturzeit**, nicht nur die Generierungsgeschwindigkeit.
- **Unterschiedliche Aufgaben und unterschiedliche Ingenieurinnen und Ingenieure sehen möglicherweise sehr unterschiedlichen KI-Unterstützungswert.** Eine einzelne, gemischte organisationsweite Zahl, die diese Variation verbirgt, sollte vermieden werden.

## Empfehlungen

### Einen echten Vergleich aufbauen, nicht nur eine Vorher-Nachher-Momentaufnahme

Wo machbar, sollten Ergebnisse zwischen einer Gruppe, die KI-Unterstützung nutzt, und einer vergleichbaren Gruppe, die sie nicht nutzt, über denselben Zeitraum verglichen werden, statt nur die eigenen Vorher-Nachher-Zahlen der Organisation zu vergleichen, die die Wirkung von KI-Unterstützung nicht von jeder anderen gleichzeitigen Änderung unterscheiden können (die Störvariablen-Vorsicht aus Kapitel 1.6 gilt direkt). Wo eine echte Vergleichsgruppe unpraktisch ist, sollte mindestens gegen eine längere historische Grundlinie verglichen werden (eine Kontrollkarte, gemäß Kapitel 1.6), statt einer einzelnen Vorher-Nachher-Momentaufnahme, anfällig für Regression zur Mitte oder unverbundene gleichzeitige Änderungen.

### Zykluszeit und Qualität zusammen messen, nie die Geschwindigkeitsbehauptung der KI-Unterstützung allein

Die Disziplin aus Kapitel 2.6 und Kapitel 2.10 sollte direkt angewandt werden: es sollte verfolgt werden, ob sich KI-unterstützte Arbeit schneller durch die Zykluszeit-Phasen bewegt, und gleichzeitig, ob sich Änderungsfehlerrate oder entwichene Fehlerrate (Kapitel 5.1) für diese Arbeit in die falsche Richtung bewegen. Ein echter Produktivitätsgewinn zeigt schnellere Zykluszeit mit stabiler oder verbesserter Qualität; ein falscher Gewinn zeigt schnellere Zykluszeit mit sich verschlechternder Qualität, genau der Handel, vor dem Kapitel 7.1 warnte, hier entdeckt durch dieselbe Paarungsdisziplin, die dieses Buch durchgängig anwendet.

### Review- und Korrekturzeit in die volle Kostenrechnung einbeziehen

KI-generierter Code, der schneller zu produzieren, aber langsamer zu überprüfen ist, oder der mehr Korrektur und Nacharbeit nach der ursprünglichen Generierung braucht, mag keine Netto-Zykluszeit-Verbesserung zeigen, sobald die volle Pipeline gemessen wird, selbst wenn sich der ursprüngliche Code-Generierungsschritt für die einzelne Ingenieurin oder den einzelnen Ingenieur dramatisch schneller anfühlte. Die volle Zykluszeit-Kette sollte gemessen werden (Kapitel 2.6), nicht nur die Codier-Phase, um dies ehrlich zu erfassen, statt KI-Unterstützung basierend auf einem gefühlten, aber unvollständigen Geschwindigkeitssinn Anerkennung zu geben.

### Selbstberichtete Zeitersparnisse als Ausgangshypothese behandeln, nicht als Schlussfolgerung

Die Selbstauskunft einer Ingenieurin oder eines Ingenieurs, „das hat mir eine Stunde gespart", ist als anfängliches Signal und als qualitativer Kontext nützlich (der kombinierte quantitativ-qualitative Ansatz aus Kapitel 5.3 gilt auch hier), aber sie unterliegt denselben Erinnerungs- und Erwünschtheitsverzerrungen, vor denen Kapitel 1.5 für jede selbstberichtete Daten warnt, und sie sagt nichts über nachgelagerte Review- oder Korrekturkosten. Selbstauskunft sollte genutzt werden, um Hypothesen darüber zu generieren, wo KI-Unterstützung am meisten hilft, dann sollten diese Hypothesen gegen objektive Zykluszeit- und Qualitätsdaten validiert werden, bevor eine feste Schlussfolgerung gezogen wird.

### Messung nach Aufgabentyp segmentieren und eine einzelne gemischte Zahl vermeiden

KI-Codierunterstützung liefert wahrscheinlich sehr unterschiedlichen Wert für Boilerplate, gut verstandene Aufgaben, als für echt neuartige, komplexe Problemlösung. Nach Aufgabenkategorie sollte gemessen und berichtet werden, statt eines einzelnen, gemischten organisationsweiten Durchschnitts, der verbergen kann, dass Unterstützung starken Wert in einer Kategorie liefert, während sie in einer anderen wenig oder sogar negativen Wert liefert, Information, die eine gemischte Zahl vollständig verschleiern würde.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Nur selbstberichtete Zeitersparnisse | Schnell, leicht zu sammeln | Schwaches Signal; anfällig für Verzerrung; ignoriert nachgelagerte Reviewkosten |
| Nur Vorher-Nachher-Vergleich | Einfach einzurichten | Konfundiert durch jede andere gleichzeitige Änderung oder branchenweiten Trend |
| Echte Vergleichsgruppe | Stärkste, verteidigungsfähigste Evidenz | Schwerer zu arrangieren; mag für einen vollständigen Rollout nicht machbar sein |
| Aufgabensegmentierte Ergebnismessung | Enthüllt, wo sich Wert echt konzentriert | Braucht granularere Verfolgung und Kategorisierungsaufwand |

Die zentrale Spannung ist **Messstrenge gegen praktische Machbarkeit**. Eine echte, kontrollierte Vergleichsgruppe ist die stärkste Evidenz, ist aber oft unpraktisch, sobald ein Werkzeug organisationsweit ohne zurückgehaltene Kontrollgruppe ausgerollt wurde; selbstberichtete Eindrücke sind schnell und einfach, aber schwach allein. Die Spannung sollte gelöst werden, indem das stärkste Vergleichsdesign genutzt wird, das der tatsächliche Rollout erlaubt, eine echte Kontrollgruppe während einer frühen Pilotphase, falls möglich, eine historische Grundlinien-Kontrollkarte, falls nicht, und Selbstauskunft als Hypothesengenerierungswerkzeug behandelt wird, statt als letztes Wort, unabhängig davon, welches Vergleichsdesign letztlich genutzt wird.

## Fragen für die Diskussion im Team

1. **Hatten wir eine echte Vergleichsgruppe für die Bewertung unserer KI-Tooling-Einführung, oder könnten wir noch eine konstruieren, oder verlassen wir uns vollständig auf einen Vorher-Nachher-Vergleich?** Falls nie eine echte Vergleichsgruppe etabliert wurde, sollte diskutiert werden, ob eine historische Grundlinien-Kontrollkarte noch eine vernünftig rigorose Alternative liefern könnte.

2. **Haben wir Zykluszeit und Qualität für KI-unterstützte Arbeit zusammen gemessen, oder haben wir nur eine Geschwindigkeitsbehauptung ohne entsprechende Qualitätsprüfung?** Welche Daten auch immer existieren, sollten gezogen werden, und auf diese spezifische Paarung geprüft werden; falls sie nicht existiert, ist diese Lücke die einzige höchstpriorisierte Korrektur dieses Kapitels.

3. **Umfasst unsere Zykluszeitmessung für KI-unterstützte Arbeit Review- und Korrekturzeit, oder nur den ursprünglichen Generierungsschritt?** Eine Geschwindigkeitsbehauptung, basierend nur auf Generierungszeit, nachgelagerte Reviewkosten ignorierend, riskiert genau die unvollständige-Buchführung-Falle, vor der dieses Kapitel direkt warnt.

4. **Welche selbstberichteten Zeitersparnis-Behauptungen haben wir gesammelt, und haben wir eine davon gegen objektive Daten validiert?** Eine spezifische, häufig wiederholte Behauptung sollte ausgewählt werden, und geprüft werden, ob die objektiven Daten sie tatsächlich stützen.

5. **Vermischt unsere aktuelle Messung alle Aufgabentypen in eine Zahl, oder wissen wir, welche spezifischen Arbeitskategorien den stärksten KI-Unterstützungswert zeigen?** Falls gemischt, sollte diskutiert werden, was eine aufgabensegmentierte Aufschlüsselung enthüllen könnte, das die aktuelle Zahl verbirgt.

6. **Wenn wir unsere KI-Tooling-Investition heute gegenüber einer skeptischen finanziellen Stakeholderin oder einem skeptischen finanziellen Stakeholder verteidigen müssten, mit Evidenz statt Eindruck, was könnten wir ihr oder ihm tatsächlich zeigen?** Dieser konkrete Test macht die Lücke zwischen dem sichtbar, was die Organisation derzeit über KI-Unterstützungswert glaubt, und dem, was sie tatsächlich mit Evidenz demonstrieren kann.

## Branchenperspektive

**Startup.** Eine formale Vergleichsgruppenstudie ist im kleinen Maßstab meist unpraktisch, aber selbst ein einfacher, ehrlicher Vorher-Nachher-Blick auf Zykluszeit und Fehlerrate, statt sich rein darauf zu verlassen, wie viel schneller sich die Arbeit anfühlt, gibt ein bedeutsam zuverlässigeres Signal als Eindruck allein.

**Kleinunternehmen.** Der Messaufwand sollte zuerst auf die höchstwertige, repetitivste Aufgabenkategorie fokussiert werden, wo KI-Unterstützungswert am wahrscheinlichsten klar und messbar ist, statt eine umfassende Bewertung über jede Art Arbeit zu versuchen, die das kleine Team macht.

**Enterprise.** Ein echter, kontrollierter Vergleich während einer frühen Pilotphase, vor vollständigem organisationsweitem Rollout, ist hier oft erreichbar und den bewussten Aufwand wert, ihn zu arrangieren, da er weit verteidigungsfähigere Evidenz für die großmaßstäbliche Tooling-Investitionsentscheidung produziert, die typisch einem erfolgreichen Piloten folgt.

**Behörden.** Öffentliche Technologieausgabenentscheidungen, einschließlich KI-Tooling-Beschaffung, begegnen oft besonderer Prüfung und mögen formale Kosten-Nutzen-Rechtfertigung erfordern (Kapitel 5.5). Die Messdisziplin, die dieses Kapitel empfiehlt, sollte von Anfang an in jede Pilotphase eingebaut werden, da eine rigorose, dokumentierte Bewertungsmethodik den letztendlichen Finanzierungs- oder Beschaffungsfall erheblich stärkt.

## Beispiele

**Enterprise.** Ein Softwareunternehmen rollte einen KI-Codierassistenten für die Hälfte seiner Engineering-Teams als bewussten Piloten aus, wobei die andere Hälfte für ein Quartal vor vollständigem Rollout als Vergleichsgruppe zurückgehalten wurde. Die Pilotgruppe zeigte eine echte, statistisch bedeutsame Zykluszeit-Verbesserung für gut definierte, boilerplate-lastige Aufgaben, zeigte aber keine messbare Verbesserung, und eine leicht erhöhte Review-Iterationszahl (Kapitel 2.9), für komplexe, neuartige Architekturarbeit. Dieser aufgabensegmentierte Befund, nur sichtbar wegen des echten Vergleichsdesigns und der Aufgabenkategorie-Aufschlüsselung, führte das Unternehmen dazu, KI-Unterstützungs-Rollout-Botschaften und -Training speziell auf die Aufgabenkategorien zu zielen, in denen sie nachweislich half, statt sie als einheitlichen Produktivitätsschub über alle Arbeit hinweg zu präsentieren.

**Behörden.** Eine Bundesbehörde, die KI-Codierunterstützung für eine Teilmenge ihrer Modernisierungsprogramm-Teams pilotierte, verließ sich zunächst auf selbstberichtete Zeitersparnis-Umfragen, die enthusiastische, einheitlich positive Antworten zeigten. Eine objektive Folgeanalyse, die Zykluszeit und entwichene Fehlerrate zwischen den Pilotteams und einer vergleichbaren Nicht-Pilot-Kohorte verglich, die an ähnlichen Systemkomponenten arbeitete, fand, dass die objektive Zykluszeit-Verbesserung echt, aber merklich kleiner war, als die selbstberichteten Schätzungen nahelegten, und identifizierte einen bescheidenen, aber echten Anstieg der Reviewzeit, der einen Teil des Generierungsgeschwindigkeitsgewinns ausgeglichen hatte, ein Befund, den die Selbstauskunftsdaten allein vollständig übersehen hatten. Dieses genauere, evidenzbasierte Bild informierte direkt einen bescheideneren und verteidigungsfähigeren Business Case für die fortgesetzte, erweiterte Beschaffung des Werkzeugs.

## Business Case: Motivation, ROI und TCO

Die Rendite, KI-unterstützte Entwicklung rigoros zu messen, sind selbstsichere, evidenzbasierte Investitionsentscheidungen: eine Organisation, die genau weiß, wo KI-Unterstützung echt hilft, kann investieren, sie dort zu erweitern, und vermeiden, für Lizenzen in Aufgabenkategorien zu viel zu zahlen, in denen sie wenig Wert liefert, genau die Aufgabensegmentierungs-Einsicht, die das Beispiel des Softwareunternehmens oben demonstriert. Dies verbindet sich direkt mit der Einheitswirtschaftlichkeit aus Kapitel 5.4 und der ROI-Disziplin aus Kapitel 5.5, da KI-Tooling-Kosten, oft pro Sitzplatz lizenziert, dieselbe rigorose Kosten-Nutzen-Behandlung braucht, die dieses Buch auf jede andere größere Engineering-Investition anwendet.

Die Gesamtbetriebskosten sind der analytische Aufwand, echte Vergleiche aufzubauen, volle Zykluszeit einschließlich Review und Korrektur zu messen, und nach Aufgabentyp zu segmentieren, was mehr Arbeit ist, als anbieterberichtete Nutzungsstatistiken oder selbstberichtete Eindrücke unhinterfragt zu akzeptieren. Dieser Aufwand ist direkt gerechtfertigt durch den Umfang der KI-Tooling-Lizenzkosten über eine große Organisation hinweg und das Risiko einer schlecht belegten, teuren, organisationsweiten Verpflichtung, basierend auf Eindruck statt Daten.

## Antipatterns und Fallstricke

- **KI-Unterstützung allein nach Output-Volumen oder Anbieternutzungsstatistiken messen:** wiederholt die zentrale Warnung aus Kapitel 7.1 direkt.
- **Sich vollständig auf selbstberichtete Zeitersparnisse verlassen:** ein schwaches Signal, anfällig für Verzerrung, und blind für nachgelagerte Review- und Korrekturkosten.
- **Nur den Generierungsgeschwindigkeitsschritt messen, volle Zykluszeit ignorierend:** produziert eine unvollständige, potenziell irreführende Buchführung der tatsächlichen Produktivitätswirkung.
- **Eine einzelne, gemischte organisationsweite Zahl berichten:** verbirgt echte Variation im Wert über unterschiedliche Aufgabenkategorien hinweg.
- **Keine Vergleichsgruppe oder historische Grundlinie:** kann die tatsächliche Wirkung der KI-Unterstützung nicht von jeder anderen gleichzeitigen Änderung unterscheiden.
- **Ein enthusiastisches selbstberichtetes Umfrageergebnis als ausreichende Evidenz für eine großmaßstäbliche Investitionsentscheidung behandeln:** riskiert genau die Lücke, die das Bundesbehörden-Beispiel oben erst entdeckte, nachdem ein rigoroserer Vergleich aufgebaut worden war.

## Reifegradmodell

- **Stufe 1, Initiieren:** Der Wert KI-unterstützter Entwicklung wird, wenn überhaupt, allein durch selbstberichteten Eindruck und Anbieternutzungsstatistiken bewertet.
- **Stufe 2, Entwickeln:** Manche Zykluszeit- oder Qualitätsdaten existieren, aber es gibt keine echte Vergleichsgruppe oder historische Grundlinie und keine aufgabensegmentierte Analyse.
- **Stufe 3, Standardisieren:** Ein echtes Vergleichsdesign (Kontrollgruppe oder historische Grundlinie) mit gepaarter Zykluszeit- und Qualitätsmessung wird konsistent angewandt, segmentiert nach Aufgabentyp.
- **Stufe 4, Steuern:** Volle Zykluszeit-Buchführung, einschließlich Review- und Korrekturzeit, wird verfolgt; selbstberichtete Behauptungen werden systematisch gegen objektive Daten validiert.
- **Stufe 5, Orchestrieren:** Die Organisation hat ein reifes, evidenzbasiertes Verständnis genau dessen, wo KI-Unterstützung echt hilft, und informiert gezielten Rollout, Trainingsinvestition, und Beschaffungsentscheidungen mit demonstriertem, verteidigungsfähigem ROI.

## Diskussionsanregungen

1. Welchen echten Vergleich haben wir, falls überhaupt, für unsere aktuelle KI-Tooling-Einführung?
2. Haben wir Zykluszeit und Qualität zusammen gemessen, oder nur eine Geschwindigkeitsbehauptung?
3. Welche selbstberichtete KI-Unterstützungsbehauptung sollten wir gegen objektive Daten validieren?
4. Welche spezifische Aufgabenkategorie zeigt für uns die stärkste Evidenz echten KI-Unterstützungswerts?
5. Könnten wir unsere KI-Tooling-Investition derzeit gegenüber einer skeptischen finanziellen Stakeholderin oder einem skeptischen finanziellen Stakeholder mit Evidenz verteidigen?

## Die wichtigsten Erkenntnisse

- KI-unterstützte Entwicklung sollte nach **Ergebnis** gemessen werden, nicht nach Output-Volumen oder anbieterberichteten Nutzungsstatistiken.
- Eine **echte Vergleichsgruppe oder historische Grundlinie** sollte genutzt werden, nicht nur eine Vorher-Nachher-Momentaufnahme, anfällig für Störvariablen.
- **Zykluszeit und Qualität sollten zusammen gemessen werden**, einschließlich der vollen Pipeline, Review- und Korrekturzeit, nicht nur Generierungsgeschwindigkeit.
- **Selbstberichtete Zeitersparnisse sollten als Hypothese behandelt werden**, keine Schlussfolgerung, und gegen objektive Daten validiert werden.
- **Nach Aufgabentyp sollte segmentiert werden**; eine einzelne gemischte Zahl verbirgt, wo sich Wert echt konzentriert und wo nicht.

## Quellen und weiterführende Literatur

- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die Ergebnismessungsdisziplin, die dieses Kapitel auf KI-Tooling-Bewertung anwendet).
- Die Forschung von GitHub zu KI-Pair-Programming und Entwicklerproduktivität (branchenmaßstäbliche empirische Forschung zu Ergebnissen KI-unterstützter Entwicklung).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021) (die mehrdimensionale Messdisziplin, die dieses Kapitel auf eine spezifische neue Tooling-Kategorie anwendet).
- *How to Measure Anything*, von Douglas W. Hubbard (verteidigungsfähige Vergleiche konstruieren und Wert unter echter Unsicherheit quantifizieren).
