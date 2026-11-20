# 4.4 Statische Analyse und Code-Smell-Metriken

## Überblick und Motivation

**[Statische Analyse](https://en.wikipedia.org/wiki/Static_program_analysis)**-Werkzeuge scannen Quellcode, ohne ihn auszuführen, und kennzeichnen Muster, die bekanntermaßen mit Fehlern, Sicherheitslücken oder Wartbarkeitsproblemen korrelieren: unerreichbaren Code, nicht geschlossene Ressourcen, verdächtige Typumwandlungen, duplizierte Logik, und die breitere Kategorie der **Code-Smells**, strukturelle Muster, die nicht notwendigerweise Fehler sind, aber dazu neigen, Code schwerer verständlich, testbar oder sicher änderbar zu machen. Statische Analyse ist die automatisierte, kontinuierliche Schicht unter den gezielteren Metriken in den anderen Themen dieses Teils, die bei jedem Commit läuft und Probleme in dem Moment sichtbar macht, in dem sie eingeführt werden, statt auf ein periodisches Audit zu warten.

Das zentrale Anliegen dieses Themas ist die Lücke zwischen dem, was statische Analysewerkzeuge berichten, und dem, was tatsächlich zählt. Ein Werkzeug kann Tausende Befunde über eine große Codebasis hinweg kennzeichnen, und die Anzahl der Befunde allein ist eine schlechte Metrik, da sie triviale Stilpräferenzen mit echtem, schwerwiegendem Risiko vermischt, und sie kann durch Unterdrückung ebenso leicht heruntergedrückt werden wie durch echte Korrekturen. Der Wert statischer Analyse kommt nicht aus der rohen Befundzahl, sondern daraus, wie gut eine Organisation Schweregrad triagiert, Rückschritt verhindert, und der Versuchung widersteht, das Urteil des Werkzeugs als Ersatz für menschlichen Review zu behandeln, statt als dessen Ergänzung.

Für große Teams ist statische Analyse der einzige praktische Weg, eine Grundlinie an Code-Qualität und Sicherheitshygiene über eine Codebasis hinweg durchzusetzen, die größer ist, als ein Team sie manuell vollständig überprüfen könnte. Konzerne und Behörden, die oft Compliance-Anforderungen zu sicheren Programmierpraktiken gegenüberstehen, verlassen sich auf statische Analyse als dokumentierte, auditierbare Evidenz, dass ein Grundlinien-Niveau an Prüfung konsistent angewandt wurde, nicht nur, wenn eine menschliche Prüferin oder ein menschlicher Prüfer zufällig ein Problem bemerkte.

## Kernprinzipien

- **Rohe Befundzahl ist eine schlechte Metrik allein.** Sie vermischt triviale und schwerwiegende Probleme, und sie kann durch Unterdrückung statt echte Korrekturen manipuliert werden.
- **Schweregrad-Triage zählt mehr als Volumen.** Eine kleine Anzahl kritischer Befunde verdient mehr Aufmerksamkeit als eine große Anzahl trivialer.
- **Statische Analyse ergänzt menschlichen Review; sie ersetzt ihn nicht.** Werkzeuge fangen Muster; sie verstehen keine Absicht oder Geschäftskontext.
- **Ein Trend „neu eingeführter Probleme" ist handlungsfähiger als ein Gesamtrückstand-Zähler.** Er sagt, ob sich die aktuelle Praxis verbessert oder verschlechtert.
- **Falsch-Positive erodieren Vertrauen in das Werkzeug.** Eine unverwaltete Falsch-Positiv-Rate führt dazu, dass Teams Befunde pauschal ignorieren, einschließlich der echten.

## Empfehlungen

### Schweregrad-gewichtete Befunde verfolgen, nicht rohe Zahl

Das statische Analyse-Tooling sollte konfiguriert werden, um Befunde nach Schweregrad zu klassifizieren (kritisch, hoch, mittel, niedrig, oder eine äquivalente Skala), und ein schweregrad-gewichteter Trend sollte verfolgt werden, statt eines flachen Gesamtzählers. Eine Codebasis mit null kritischen Befunden und fünfhundert niedrigschweregrad Stilvorschlägen ist in einem sehr anderen Zustand als eine mit fünfzig kritischen Befunden und gar keinen Stilproblemen, und eine rohe Zahl behandelt diese als ungefähr äquivalent, obwohl sie es nicht sind.

### Auf neu eingeführte Befunde gaten, nicht auf den gesamten historischen Rückstand

Die meisten etablierten Codebasen tragen einen Altbestand-Rückstand an Befunden, die vor der aktuellen Praxis liegen und unerschwinglich teuer wären, alle auf einmal zu beheben. Statt alle Arbeit zu blockieren, bis der gesamte Rückstand geklärt ist, sollte CI darauf gegatet werden, ob eine bestimmte Änderung neue Befunde über einer vereinbarten Schweregradschwelle einführt, und den Rückstand durch normale Wartung graduell schrumpfen lassen, während weitere Akkumulation verhindert wird. Diese Unterscheidung spiegelt die Abdeckungs-Untergrenzen-Empfehlung aus Thema 4.2: Schutz gegen Rückschritt statt eine unrealistische Alles-auf-einmal-Korrektur zu verlangen.

### Die Falsch-Positiv-Rate aktiv verwalten

Eine Stichprobe von Befunden sollte periodisch überprüft werden, besonders jede Kategorie mit hohem Volumen, und geprüft werden, wie viele echte Falsch-Positive sind, Fälle, in denen das Werkzeug ein Muster kennzeichnete, das im Kontext tatsächlich nicht problematisch ist. Die Regelkonfiguration sollte angepasst werden, um echt lauten, geringwertigen Regelkategorien speziell zu unterdrücken, statt Teams eine Gewohnheit entwickeln zu lassen, die Ausgabe des Werkzeugs pauschal zu ignorieren, weil zu viel davon Rauschen ist. Eine hohe, unverwaltete Falsch-Positiv-Rate ist der einzige schnellste Weg, die Glaubwürdigkeit eines statischen Analyseprogramms zu zerstören.

### Statische-Analyse-Befunde als Anlass für Review nutzen, nicht als automatisches Urteil

Selbst ein legitimer, nicht-falsch-positiver Befund rechtfertigt nicht immer eine automatische, verpflichtende Korrektur; manche gekennzeichneten Muster sind akzeptabel angesichts eines spezifischen Kontexts, den ein Werkzeug nicht sehen kann. Ein leichtgewichtiger Prozess sollte aufgebaut werden, damit eine Person einen Befund überprüft und entweder behebt oder explizit, sichtbar mit dokumentiertem Grund erlässt, statt entweder jeden Befund blind als verpflichtend durchzusetzen oder stille, undokumentierte Unterdrückung zu erlauben, die den Wert des Werkzeugs über die Zeit erodiert.

### Statische Analyse mit den anderen Code-Qualitätsmetriken dieses Teils kombinieren

Statische-Analyse-Befunde, Komplexitätswerte (Thema 4.1), und Hotspot-Daten (Thema 4.3) sind ergänzende Evidenz, keine konkurrierenden Metriken. Eine Datei mit einer hohen Konzentration ungelöster statischer Analyse-Befunde, die auch ein Fluktuations-Komplexitäts-Hotspot ist, ist ein besonders starker Kandidat für priorisierte Aufmerksamkeit, da mehrere unabhängige Signale zur selben Schlussfolgerung konvergieren.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Rohe Befundzahl als Metrik | Einfach zu berichten | Vermischt triviale und schwerwiegende Probleme; leicht durch Unterdrückung manipulierbar |
| Schweregrad-gewichteter Trend | Spiegelt tatsächliches Risiko genauer wider | Braucht laufende Wartung der Schweregradklassifikation |
| Gate auf den gesamten historischen Rückstand | Maximiert schlussendliche Code-Sauberkeit | Oft unpraktisch für etablierte Codebasen; kann alle Arbeit stoppen |
| Gate nur auf neue Befunde | Praktisch, verhindert Rückschritt, lässt den Rückstand graduell schrumpfen | Altbestandsprobleme bestehen länger fort ohne bewussten Behebungsplan |

Die zentrale Spannung ist **Gründlichkeit gegen Praktikabilität**. Eine statische-Analyse-Richtlinie, die verlangt, dass der gesamte historische Rückstand gelöst wird, bevor neue Arbeit fortschreitet, ist gründlich, aber meist unpraktisch für jede Codebasis mit echter Geschichte, und Teams unter diesem Druck neigen dazu, Befunde pauschal zu unterdrücken, statt sie echt zu beheben. Die Spannung sollte gelöst werden, indem strikt auf neue Befunde gegatet wird, während ein separater, bewusst getakteter Behebungsaufwand gegen den Altbestand-Rückstand läuft, priorisiert mit den Schweregrad- und Kreuzreferenzierungstechniken, die dieses Thema und Thema 4.3 empfehlen.

## Fragen für die Diskussion im Team

1. **Verfolgen wir einen schweregrad-gewichteten Trend, oder nur eine rohe Gesamtbefundzahl?** Das tatsächliche Dashboard sollte gezogen und überprüft werden; eine rohe Zahl ist bei vielen Werkzeugen standardmäßig üblich und braucht oft bewusste Konfiguration, um Schweregrad stattdessen richtig sichtbar zu machen.

2. **Wie groß ist unser aktueller Altbestand-Rückstand ungelöster Befunde, und haben wir einen bewussten, getakteten Plan, ihn zu reduzieren, oder akkumuliert er einfach unbegrenzt?** Ein unadressierter, still wachsender Rückstand ist üblich und es ist wert, ehrlich benannt zu werden, statt unüberprüft belassen zu werden.

3. **Wie hoch ist unsere geschätzte Falsch-Positiv-Rate für unsere volumenstärksten Befundkategorien, und haben wir die Regelkonfiguration entsprechend angepasst?** Falls dies nie geprüft wurde, sollte eine Charge Befunde aus der lautesten Kategorie stichprobenartig geprüft werden, und ehrlich bewertet werden, wie viele echt handlungsfähig sind.

4. **Vertrauen Ingenieurinnen und Ingenieure in unserem Team statischen-Analyse-Befunden, oder haben sie gelernt, sie auszublenden, weil zu viel der Ausgabe Rauschen ist?** Dies ist eine direkte, ehrliche Bauchgefühl-Frage, die es wert ist, dem Team zu stellen, da ein ignoriertes Werkzeug keinen echten Wert liefert, unabhängig von seiner theoretischen Fähigkeit.

5. **Wie handhaben wir derzeit einen legitimen Befund, von dem ein Team glaubt, er sollte angesichts eines spezifischen Kontexts erlassen werden?** Es sollte geprüft werden, ob der Prozess dies zu einer sichtbaren, dokumentierten Entscheidung macht, oder ob es durch stille, undokumentierte Unterdrückung geschieht, die das Signal des Werkzeugs über die Zeit erodiert.

6. **Wo konvergieren statische-Analyse-Befunde, Komplexitätswerte und Hotspot-Daten auf derselben Datei oder demselben Modul?** Diese drei Signale sollten explizit kreuzreferenziert werden; Konvergenz über mehrere unabhängige Metriken hinweg ist ein stärkeres Priorisierungssignal als eine einzelne allein.

## Branchenperspektive

**Startup.** Ein leichtgewichtiges, kostenloses statisches Analysewerkzeug, von Anfang an in CI integriert, ist günstige Versicherung und fängt echte Probleme früh, bevor ein Altbestand-Rückstand überhaupt die Chance hat, sich anzuhäufen. Das Regelset sollte auf echt hochwertige, rauscharme Kategorien fokussiert bleiben, statt sofort jede verfügbare Regel zu aktivieren.

**Kleinunternehmen.** Die meisten modernen Sprachökosysteme enthalten fähiges kostenloses statisches Analyse-Tooling; es in CI mit einem vernünftigen Standard-Regelset zu aktivieren, braucht wenig Investition. Der Fokus sollte auf dem Gaten neuer Befunde liegen, statt zu versuchen, einen bereits bestehenden Rückstand alles auf einmal zu lösen.

**Enterprise.** Falsch-Positiv-Rate und Schweregrad-Triage bewusst zu verwalten wird auf dieser Ebene essenziell, da ein schlecht abgestimmtes Werkzeug, das übermäßiges Rauschen über Dutzende Teams erzeugt, organisationsweit ignoriert wird. In eine dedizierte Eigentümerschaft für die Konfiguration des statischen Analyse-Toolings selbst sollte investiert werden, wobei Regelabstimmung als laufende Disziplin behandelt wird, nicht als einmalige Einrichtungsaufgabe.

**Behörden.** Statische-Analyse-Befunde, besonders sicherheitsbezogene, sind oft direkt relevant für Compliance- und Auditanforderungen. Ein dokumentierter, auditierbarer Prozess sollte gepflegt werden, wie Befunde triagiert, behoben, oder formal mit aufgezeichneter Begründung erlassen werden, da diese Dokumentation selbst häufig das ist, was ein externer Auditor sehen möchte.

## Beispiele

**Enterprise.** Das statische-Analyse-Dashboard eines Softwareunternehmens hatte über vierzigtausend ungelöste Befunde über seine Codebasis hinweg akkumuliert, nach mehreren Jahren ohne schweregrad-gewichtete Triage, eine Zahl so groß, dass Ingenieurinnen und Ingenieure größtenteils aufgehört hatten, überhaupt aufs Dashboard zu schauen. Ein überarbeiteter Ansatz klassifizierte Befunde nach Schweregrad, fand, dass weniger als zweihundert echt kritisch waren, und gatete CI speziell auf neue kritische und hochschweregrad Befunde, während der niedrigschweregrad Rückstand durch normale Code-Wartung graduell schrumpfen gelassen wurde. Innerhalb von sechs Monaten waren kritische Befunde auf einstellige Zahlen gesunken, und, wichtiger, Ingenieurs-Umfragedaten zeigten erneuertes Vertrauen in die Ausgabe des Werkzeugs, jetzt, da es ein handhabbares, echt handlungsfähiges Signal sichtbar machte, statt eines überwältigenden, ignorierten Rückstands.

**Behörden.** Die Software-Lieferketten-Sicherheitsrichtlinie einer Verteidigungsbehörde verlangte statisches Analyse-Scannen mit null ungelösten Befunden vor jeder Veröffentlichung, eine Richtlinie, die in der Praxis Entwicklungsteams dazu geführt hatte, große Mengen Befunde zu unterdrücken, einschließlich mancher echter Sicherheitsprobleme, einfach um Veröffentlichungstermine unter einem unhandhabbaren Alles-oder-nichts-Gate einzuhalten. Eine überarbeitete Richtlinie verlangte null neue kritische oder hochschweregrad Befunde, eingeführt durch eine gegebene Veröffentlichung, kombiniert mit einem dokumentierten, verfolgten Behebungsplan und Zeitplan für den Altbestand-Rückstand, vierteljährlich von einem Sicherheits-Governance-Gremium überprüft. Dieser praktische, gestufte Ansatz stellte sowohl echte Sicherheitsprüfung für neuen Code wieder her als auch machte echten, messbaren Fortschritt gegen den Altbestand-Rückstand über achtzehn Monate, anders als die unhandhabbare vorherige Richtlinie, die meist Unterdrückung statt echte Korrekturen produziert hatte.

## Business Case: Motivation, ROI und TCO

Die Rendite gut verwalteter statischer Analyse ist, echte Fehler und Sicherheitslücken zu fangen, bevor sie die Produktion erreichen, zu Kosten weit niedriger, als der äquivalente menschliche Review-Aufwand für dieselbe Abdeckung erfordern würde. Das Beispiel der Verteidigungsbehörde oben zeigt die Kosten, dies falsch zu machen: eine unhandhabbare Alles-oder-nichts-Richtlinie hatte echte Sicherheitsprüfung tatsächlich reduziert, indem sie Unterdrückung antrieb, das Gegenteil ihrer Absicht.

Die Gesamtbetriebskosten umfassen das Tooling selbst, oft kostenlos oder günstig für gängige Sprachökosysteme, und die laufende Disziplin von Schweregrad-Triage, Falsch-Positiv-Verwaltung, und Altbestand-Rückstand-Behebungsplanung. Diese laufende Disziplin, mehr als das Werkzeug selbst, bestimmt, ob ein statisches Analyseprogramm echten, vertrauenswürdigen Wert liefert oder zu ignoriertem Rauschen verkommt.

## Antipatterns und Fallstricke

- **Rohe Befundzahl als Metrik behandeln:** vermischt triviale und schwerwiegende Probleme und ist leicht durch Unterdrückung manipulierbar.
- **Verlangen, dass der gesamte historische Rückstand gelöst wird, bevor neue Arbeit fortschreitet:** meist unpraktisch und treibt Unterdrückung statt echte Korrekturen an.
- **Falsch-Positiv-Rate ignorieren:** ein unverwaltetes Rauschniveau führt dazu, dass Teams die Ausgabe des Werkzeugs vollständig ausblenden, einschließlich echter Befunde.
- **Stille, undokumentierte Unterdrückung legitimer Befunde:** erodiert das Signal des Werkzeugs und hinterlässt keine Audit-Spur für Compliance-Zwecke.
- **Einen statischen-Analyse-Befund als automatisches Urteil ohne menschlichen Review behandeln:** übersieht Kontext, den ein Werkzeug nicht sehen kann.
- **Befunde nie mit Komplexitäts- und Hotspot-Daten kreuzreferenzieren:** übersieht das stärkere Priorisierungssignal, das konvergente Evidenz liefert.

## Reifegradmodell

- **Stufe 1, Initiieren:** Statische Analyse läuft nicht, oder Befunde akkumulieren unverwaltet ohne Schweregrad-Triage oder Trendverfolgung.
- **Stufe 2, Entwickeln:** Manche statische Analyse läuft in CI, aber Schweregrad-Triage ist inkonsistent und die Falsch-Positiv-Rate ist unverwaltet.
- **Stufe 3, Standardisieren:** Befunde sind schweregrad-gewichtet, und CI gatet organisationsweit auf neue kritische und hochschweregrad Befunde.
- **Stufe 4, Steuern:** Die Falsch-Positiv-Rate wird aktiv abgestimmt, der Altbestand-Rückstand hat einen dokumentierten, getakteten Behebungsplan, und Erlasse sind sichtbar und dokumentiert.
- **Stufe 5, Orchestrieren:** Statische-Analyse-Befunde, Komplexitätsdaten und Hotspot-Daten werden routinemäßig kreuzreferenziert, um Investition zu priorisieren, und die Organisation kann auf konkrete, messbare Fehler- oder Sicherheitsverbesserungen verweisen, die auf das Programm zurückgeführt werden.

## Diskussionsanregungen

1. Wie sieht unser aktueller schweregrad-gewichteter Trend aus, und verbessert er sich oder verschlechtert er sich?
2. Wie groß ist unser Altbestand-Befund-Rückstand, und haben wir einen bewussten Plan, ihn zu reduzieren?
3. Wie hoch ist unsere geschätzte Falsch-Positiv-Rate für unsere lauteste Befundkategorie?
4. Vertrauen Ingenieurinnen und Ingenieure in unserem Team derzeit unserer statischen-Analyse-Ausgabe, oder ignorieren sie sie?
5. Wo konvergieren statische-Analyse-Befunde mit Komplexitäts- oder Hotspot-Daten in unserer Codebasis?

## Die wichtigsten Erkenntnisse

- Ein **schweregrad-gewichteter Trend** sollte verfolgt werden, nicht eine rohe Befundzahl, die triviale und schwerwiegende Probleme vermischt.
- CI sollte auf **neu eingeführte Befunde** gegatet werden, nicht den gesamten historischen Rückstand, um Rückschritt zu verhindern, ohne eine unpraktische Alles-auf-einmal-Korrektur zu verlangen.
- Die **Falsch-Positiv-Rate** sollte aktiv verwaltet werden; unverwaltetes Rauschen zerstört Vertrauen ins Werkzeug und führt dazu, dass Befunde pauschal ignoriert werden.
- Befunde sollten als **Anlass für menschlichen Review** behandelt werden, mit sichtbaren, dokumentierten Erlassen, nicht als automatisches Urteil oder stille Unterdrückung.
- Statische Analyse sollte mit **Komplexitäts- und Hotspot-Daten** (Themen 4.1, 4.3) kreuzreferenziert werden für konvergente, stärkere Priorisierungsevidenz.

## Quellen und weiterführende Literatur

- *Static Program Analysis*, von Anders Møller and Michael I. Schwartzbach (die theoretischen und praktischen Grundlagen statischer Analysetechniken).
- Die Anleitung der OWASP zu statischem Anwendungssicherheitstesten (SAST), Teil der breiteren OWASP-Foundation-Ressourcen zu sicheren Softwareentwicklungspraktiken.
- *Refactoring: Improving the Design of Existing Code*, von Martin Fowler (der Code-Smell-Katalog, auf den sich viel statisches Analyse-Tooling stützt).
- *Working Effectively with Legacy Code*, von Michael Feathers (Verwaltung eines Altbestand-Rückstands von Qualitätsproblemen in einer etablierten Codebasis).
