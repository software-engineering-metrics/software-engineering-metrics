# 4.2 Testabdeckung und Testwirksamkeit

## Überblick und Motivation

**[Testabdeckung](https://en.wikipedia.org/wiki/Code_coverage)** misst den Prozentsatz des Codes, der von einer Testsuite ausgeführt wird: Zeilenabdeckung, Verzweigungsabdeckung oder die strengere Pfadabdeckung. Sie ist eine der am weitesten verfolgten Metriken in diesem gesamten Buch, günstig zu berechnen, leicht als einzelner Prozentsatz zu visualisieren, und folglich eine der am häufigsten manipulierten, genau auf die Weise, die Thema 1.2 für jede Metrik vorhersagt, die zum Ziel wird. Eine Testsuite kann hohe Abdeckung erreichen, während sie fast nichts Bedeutsames verifiziert, weil Abdeckung misst, ob Code während eines Testlaufs ausgeführt wurde, nicht, ob der Test tatsächlich prüfte, dass sich der Code korrekt verhielt.

Diese Lücke zwischen Abdeckung und echter Testwirksamkeit ist keine kleine Fußnote; sie ist das zentrale Anliegen dieses Themas. Ein Test, der eine Funktion aufruft und nichts über ihr Ergebnis behauptet, erhöht die Abdeckung identisch zu einem Test, der das Verhalten der Funktion über Grenzfälle hinweg gründlich verifiziert. Die von diesem Thema empfohlene Korrektur, **Mutationstests**, führt absichtlich kleine, künstliche Fehler in den Code ein und prüft, ob die Testsuite sie tatsächlich fängt, ist die direkte Antwort auf diese Lücke, und dieses Thema behandelt sie als notwendige Ergänzung zur Abdeckung, nicht als optionales Extra.

Für große Teams werden Abdeckungsziele oft organisationsweit als Qualitäts-Gate übernommen, genau die Art von incentivierter, hochsichtbarer Metrik, vor der Thema 1.2 warnt, sie sei am stärksten der Manipulation ausgesetzt. Konzerne und Behörden, die eine pauschale Abdeckungs-Prozentsatz-Anforderung ohne gepaarte Wirksamkeitsprüfung setzen, incentivieren im Effekt genau das Schwellenwert-Manipulationsmuster, das dieses Buch beschreibt: triviale Tests, rein geschrieben, um eine Zahl zu erreichen, ohne entsprechende Verbesserung der tatsächlichen Fehlervermeidung.

## Kernprinzipien

- **Abdeckung misst Ausführung, nicht Verifikation.** Dass eine Zeile von einem Test ausgeführt wird, sagt nichts darüber, ob der Test irgendetwas Bedeutsames über sie geprüft hat.
- **Ein Abdeckungsziel ohne Wirksamkeitsprüfung ist ein Lehrbuchbeispiel für Goodharts Gesetz** (Thema 1.2): die Zahl verbessert sich, während echte Qualität es nicht tut.
- **Mutationstests sind die notwendige Ergänzung zur Abdeckung**, kein Ersatz; beide sollten zusammen genutzt werden.
- **Abdeckung ist nützlicher als Untergrenze denn als zu maximierendes Ziel.** Eine niedrige Zahl enthüllt echt ungetesteten Code; 100 % anzustreben erzeugt oft abnehmende oder negative Erträge.
- **Kritische-Pfad-Abdeckung zählt mehr als einheitliche, pauschale Abdeckung.** Nicht aller Code trägt gleiches Risiko, wenn er versagt.

## Empfehlungen

### Abdeckung nutzen, um ungetesteten Code zu finden, nicht als zu maximierendes Ziel

Ein Abdeckungsbericht sollte primär als Karte dessen behandelt werden, was gar keinen Test hat, was echt nützliche Information ist, statt als Punktzahl, die auf 100 % zu drängen ist. Code mit null Abdeckung ist eine echte Lücke, die es wert ist, geschlossen zu werden; der Grenznutzen, die Abdeckung von 85 % auf 95 % zu drängen, ist meist weit niedriger und oft nicht den Aufwand wert, besonders wenn dieser Aufwand geringwertige Tests produziert, nur um die höhere Zahl zu erreichen.

### Jedes Abdeckungsziel mit Mutationstests paaren

**Mutationstest**-Werkzeuge führen automatisch kleine Fehler in den Code ein, kippen einen Vergleichsoperator, ändern eine Grenzbedingung, und führen dann die Testsuite gegen jede mutierte Version aus. Eine Testsuite, die die meisten Mutanten „tötet" (gegen sie fehlschlägt), verifiziert echt Verhalten; eine Testsuite mit hoher Zeilenabdeckung, aber niedriger Mutations-Tötungsrate, führt Code aus, ohne ihn bedeutsam zu prüfen. Diese Paarung ist die einzige wirksamste Leitplanke gegen Abdeckungsziel-Manipulation, und dieses Buch empfiehlt sie als Standardpraxis, nicht als fortgeschrittene oder optionale Technik.

### Abdeckung und Mutationstests zuerst auf kritische Pfade priorisieren

Nicht aller Code trägt gleiches Risiko. Ein Zahlungsabwicklungspfad, eine Authentifizierungsprüfung, oder ein Datenmigrationsskript verdient weit strengeres Testen als ein selten genutzter Verwaltungsbericht. Statt einheitliche Abdeckung über eine gesamte Codebasis zu verfolgen, sollten die höchstriskanten, folgenreichsten Codepfade identifiziert werden, und sowohl Abdeckungs- als auch Mutationstest-Aufwand dort zuerst konzentriert werden, wobei niedrigere Abdeckung auf echt risikoarmem Code als bewusste, informierte Abwägung akzeptiert wird, statt als Versehen.

### Auf die spezifischen Abdeckungs-Manipulationsmuster achten

Die häufigsten Weisen, wie Abdeckung manipuliert wird, sobald sie zum Ziel wird, umfassen: Tests, die eine Funktion aufrufen, aber nichts Bedeutsames über das Ergebnis behaupten (Thema 1.2s Schwellenwert-Manipulation, angewandt auf diese Metrik), fehlschlagende Tests zu deaktivieren oder zu löschen, statt das zugrunde liegende Problem zu beheben, und schwer testbaren Code vollständig aus der Abdeckungsberechnung auszuschließen, statt anzugehen, warum er schwer zu testen ist. Eine Stichprobe von Tests sollte periodisch direkt geprüft werden, ihre tatsächlichen Behauptungen gelesen werden, statt allein dem Abdeckungs-Prozentsatz zu vertrauen.

### Eine Abdeckungs-Untergrenze setzen, keine Abdeckungs-Obergrenze, in der CI-Pipeline

Die Build-Pipeline sollte so konfiguriert werden, dass sie fehlschlägt, wenn die Abdeckung für neuen Code unter eine vereinbarte Untergrenze fällt, um Rückschritt zu verhindern, statt zu verlangen, dass jede Änderung die Gesamtzahl höher treibt. Diese Unterscheidung zählt: eine Untergrenze schützt gegen Rückfall, ohne denselben unerbittlichen Aufwärtsdruck zu erzeugen, der geringwertige Tests produziert, die nur geschrieben werden, um die Zahl weiter voranzuschieben.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Abdeckungs-Prozentsatz allein | Günstig, einfach, breit vom Tooling unterstützt | Leicht manipulierbar; misst Ausführung, nicht Verifikation |
| Abdeckung plus Mutationstests | Verifiziert, dass Tests echt Verhalten prüfen, resistent gegen Manipulation | Rechnerisch teurer; braucht Tooling-Investition |
| Einheitliches Abdeckungsziel über die gesamte Codebasis | Einfach anzugeben und durchzusetzen | Verschwendet Aufwand auf risikoarmem Code; unterinvestiert relativ zum Risiko anderswo |
| Risikobasierte, kritische-Pfade-zuerst-Abdeckung | Konzentriert Aufwand dort, wo er am meisten zählt | Braucht Urteilsvermögen, um echt kritische Pfade korrekt zu identifizieren |

Die zentrale Spannung ist **Einfachheit gegen Ehrlichkeit**. Ein einzelner Abdeckungs-Prozentsatz ist leicht zu berichten und leicht als Ziel zu setzen, aber genau diese Einfachheit macht ihn so leicht manipulierbar, sobald er zur incentivierten Zahl wird. Die Spannung sollte gelöst werden, indem die zusätzliche Komplexität von Mutationstests und risikobasierter Priorisierung als Kosten eines ehrlichen Signals akzeptiert wird, und indem dem Team explizit kommuniziert wird, warum eine niedrigere Gesamtabdeckungszahl, korrekt auf kritische Pfade konzentriert und von einer starken Mutations-Tötungsrate gestützt, wertvoller ist als eine höhere, gleichmäßiger verteilte, aber weniger wirksam verifizierte.

## Fragen für die Diskussion im Team

1. **Wie hoch ist unsere Mutations-Tötungsrate auf unseren höchstriskanten Codepfaden, und wie vergleicht sie sich mit unserem Abdeckungs-Prozentsatz auf demselben Code?** Eine große Lücke zwischen einer hohen Abdeckungszahl und einer niedrigen Mutations-Tötungsrate ist das klarste mögliche Zeichen, dass Abdeckung allein nicht sagt, was gedacht wird, dass sie sagt.

2. **Haben wir je einen Test primär geschrieben, um eine Abdeckungszahl zu erhöhen, mit wenig echtem Nachdenken darüber, was er verifizieren sollte?** Hier sollte ehrlich geantwortet werden; dies passiert häufiger, als Teams zugeben möchten, besonders unter Termindruck, wenn ein Abdeckungs-Gate einen Merge blockiert.

3. **Ist unser Abdeckungsaufwand auf unseren höchstriskanten Codepfaden konzentriert, oder gleichmäßig verteilt unabhängig von der Konsequenz, falls dieser Code versagt?** Die aktuelle Abdeckungsverteilung sollte gegen eine ehrliche Risikobewertung der Codebasis abgebildet werden, und nach der Diskrepanz gesucht werden.

4. **Haben wir je einen fehlschlagenden Test deaktiviert oder gelöscht, statt das zugrunde liegende Problem zu beheben, das er enthüllte?** Dies ist eine der schädlichsten Formen von Abdeckungs-Manipulation, weil sie aktiv echten Schutz entfernt, während sich die berichtete Abdeckungszahl kaum bewegen mag.

5. **Erzwingt unsere CI-Pipeline eine Abdeckungs-Untergrenze für neuen Code, oder drängt sie auf eine immer höhere Obergrenze unabhängig von abnehmenden Erträgen?** Es sollte diskutiert werden, ob das aktuelle Gate-Design den richtigen Anreiz schafft, Schutz gegen Rückschritt, oder den falschen, unerbittlichen Aufwärtsdruck, der geringwertiges Test-Auffüllen belohnt.

6. **Welcher Code in unserer Codebasis ist von der Abdeckungsberechnung ausgeschlossen, und ist dieser Ausschluss gerechtfertigt oder verbirgt er eine echte Testlücke?** Die tatsächliche Ausschlusskonfiguration sollte überprüft werden; es ist üblich, dass diese Liste über die Zeit still wächst, ohne dass jemand überprüft, ob jeder Ausschluss noch gerechtfertigt ist.

## Branchenperspektive

**Startup.** Formale Abdeckungsziele sind so früh oft unnötig; der Testschreibaufwand sollte direkt auf die riskantesten, geschäftskritischsten Codepfade gerichtet werden (meist Zahlungs- oder Kernworkflow-Logik), statt einen pauschalen Prozentsatz über eine Codebasis zu verfolgen, die sich noch schnell ändert und ohnehin bald wesentlich neu geschrieben werden könnte.

**Kleinunternehmen.** Die meisten CI-Plattformen berichten Abdeckung automatisch mit minimalen Einrichtungskosten; sie sollte primär genutzt werden, um vollständig ungetesteten kritischen Code zu erkennen, statt einer bestimmten Zielprozentzahl nachzujagen, und Mutationstests sollten erst in Betracht gezogen werden, sobald die Engineering-Kapazität besteht, um auf das zu reagieren, was sie enthüllen.

**Enterprise.** Pauschale, organisationsweite Abdeckungsziele sind ein häufiger und folgenreicher Fehler auf dieser Ebene, da sie genau die in diesem Thema beschriebene Manipulation über Dutzende Teams gleichzeitig incentivieren. Risikobasierte Abdeckungserwartungen sollten etabliert werden, die je nach Service-Kritikalität variieren, und in Mutationstest-Infrastruktur sollte speziell für die höchstriskanten Systeme investiert werden.

**Behörden.** Abdeckungsanforderungen erscheinen manchmal in Beschaffungs- oder Compliance-Dokumentation als stumpfer, leicht spezifizierbarer Stellvertreter für Qualitätssicherung. Wo möglich, sollte jeder vertraglich geforderte Abdeckungs-Prozentsatz mit einer Mutationstest- oder fehlerbasierten Wirksamkeitsanforderung gepaart werden, damit der vertragliche Anreiz nicht versehentlich genau das geringwertige Test-Auffüllen belohnt, vor dem dieses Thema warnt.

## Beispiele

**Enterprise.** Die Führung einer E-Commerce-Plattform hatte eine unternehmensweite 95-%-Abdeckungsanforderung für allen neuen Code gesetzt, durchgesetzt als hartes CI-Gate. Ein Audit zwei Jahre später, ausgelöst durch eine Welle von Produktionsfehlern in angeblich gut getestetem Code, fand eine Mutations-Tötungsrate unter 40 % über weite Teile der Codebasis: Teams hatten Tests geschrieben, die Codepfade ausführten, ohne bedeutsam ihr Verhalten zu behaupten, rein um das Gate unter Termindruck zu erfüllen. Das Unternehmen ersetzte die pauschale Abdeckungsanforderung durch eine risikogestufte Richtlinie: strenge Abdeckung plus verpflichtende Mutationstests über einer 80-%-Tötungsraten-Schwelle für Zahlungs- und Authentifizierungscode, und eine viel leichtere Abdeckungs-Untergrenze für risikoarmes internes Tooling, was sowohl verschwendeten Testaufwand reduzierte als auch die Fehlerraten in den echt kritischen Pfaden messbar verbesserte.

**Behörden.** Das Leistungsberechtigungssystem einer Gesundheitsbehörde war unter der Entwicklungsvertragsvereinbarung vertraglich verpflichtet, 90 % Testabdeckung zu halten. Ein Post-Incident-Review, nach einem bedeutsamen Berechtigungsberechnungsfehler, der trotz erfüllter Abdeckungsanforderung ausgeliefert worden war, fand, dass die verantwortliche spezifische Funktion ihre Abdeckung vollständig durch Tests erreicht hatte, die die Funktion mit gültigen Eingaben aufriefen, aber nie Grenzbedingungen oder ungültige Eingaben testeten, genau dort, wo der Fehler auftrat. Der überarbeitete Vertrag der Behörde verlangt nun einen dokumentierten Mutationstest-Wert neben der Abdeckung für jeden Berechtigungsberechnungscode, was die spezifische Lücke schloss, die konformes, aber unwirksames Testen erlaubt hatte, den Vertrag zu erfüllen.

## Business Case: Motivation, ROI und TCO

Die Rendite, Abdeckung mit Mutationstests zu paaren, ist, die Lücke zwischen scheinbarer und tatsächlicher Testqualität zu fangen, bevor sie einen Produktionsfehler kostet. Das E-Commerce-Beispiel oben zeigt das Muster klar: eine Abdeckungsanforderung allein hatte ein falsches Sicherheitsgefühl erzeugt, das eine Fehlerwelle schließlich zu weit höheren Kosten aufdeckte, als die Mutationstest-Investition gekostet hätte, die die Lücke früher gefangen hätte.

Die Gesamtbetriebskosten umfassen die rechnerischen Kosten von Mutationstests, die teurer auszuführen sind als einfache Abdeckungsinstrumentierung und daher meist kritischem Pfadcode vorbehalten sind statt einer gesamten Codebasis, plus die Engineering-Zeit, Ergebnisse zu interpretieren und darauf zu reagieren. Diese Kosten sind speziell für den höchstriskanten Code gerechtfertigt, wo die Kosten einer unentdeckten Lücke in der Testwirksamkeit am höchsten sind.

## Antipatterns und Fallstricke

- **Abdeckungs-Prozentsatz als direktes Qualitätsurteil behandeln:** er misst Ausführung, nicht Verifikation.
- **Tests primär schreiben, um ein Abdeckungs-Gate zu erfüllen:** produziert genau das geringwertige Schwellenwert-Manipulationsmuster, vor dem Thema 1.2 warnt.
- **Fehlschlagende Tests deaktivieren oder löschen, statt das zugrunde liegende Problem zu beheben:** entfernt echten Schutz, während die berichtete Zahl kaum beeinflusst wird.
- **Ein einheitliches Abdeckungsziel unabhängig vom Coderisiko anwenden:** verschwendet Aufwand auf risikoarmem Code und unterinvestiert in echt kritische Pfade.
- **Eine Ausschlussliste still über die Zeit wachsen lassen:** verbirgt echte Testlücken hinter einer technisch korrekten, aber irreführenden Abdeckungszahl.
- **Eine Abdeckungs-Obergrenze statt einer Abdeckungs-Untergrenze verfolgen:** erzeugt unerbittlichen Aufwärtsdruck, der Test-Auffüllen über echte Verifikation belohnt.

## Reifegradmodell

- **Stufe 1, Initiieren:** Abdeckung wird nicht gemessen, oder inkonsistent gemessen ohne Untergrenze, Ziel oder Wirksamkeitsprüfung.
- **Stufe 2, Entwickeln:** Ein Abdeckungsziel existiert und wird verfolgt, aber keine Mutationstests oder risikobasierte Priorisierung informiert, wie Aufwand zugeteilt wird.
- **Stufe 3, Standardisieren:** Abdeckungs-Untergrenzen werden konsistent in CI durchgesetzt, mit risikobasierter Priorisierung, die lenkt, wo sich Abdeckungsaufwand konzentriert.
- **Stufe 4, Steuern:** Mutationstests laufen auf kritischem Pfadcode, mit einer verfolgten Tötungsraten-Schwelle, die neben der Abdeckung erfüllt werden muss, und Ausschlusslisten werden periodisch überprüft.
- **Stufe 5, Orchestrieren:** Die Organisation kann auf konkrete Fehlerreduktionen verweisen, die auf mutationstest-informierte Priorisierung zurückgeführt werden, und Abdeckungs- und Wirksamkeitsdaten informieren gemeinsam direkt Testinvestitionsentscheidungen.

## Diskussionsanregungen

1. Wie hoch ist unsere Mutations-Tötungsrate auf unserem einzigen kritischsten Codepfad, und wissen wir es überhaupt?
2. Haben wir je einen geringwertigen Test rein geschrieben, um ein Abdeckungs-Gate zu erfüllen?
3. Ist unser aktueller Abdeckungsaufwand dort konzentriert, wo das Risiko am höchsten ist, oder gleichmäßig verteilt?
4. Welcher Code ist derzeit von der Abdeckungsberechnung ausgeschlossen, und ist dieser Ausschluss noch gerechtfertigt?
5. Würde eine Mutationstest-Investition in unser höchstriskantes System ihre rechnerischen Kosten wert sein?

## Die wichtigsten Erkenntnisse

- Testabdeckung misst **Ausführung, nicht Verifikation**; eine abgedeckte Zeile sagt nichts darüber, ob sie bedeutsam geprüft wurde.
- Abdeckung sollte mit **Mutationstests** gepaart werden, um zu verifizieren, dass Tests tatsächlich echte Fehler fangen, nicht nur, dass sie den Code ausführen.
- Testaufwand sollte auf **kritischen, hochriskanten Pfaden** konzentriert werden, statt einheitliche Abdeckung über eine gesamte Codebasis zu verfolgen.
- Abdeckung sollte als **Untergrenze zum Schutz gegen Rückschritt** genutzt werden, nicht als unerbittlich zu maximierende Obergrenze.
- Auf die spezifischen Abdeckungs-Manipulationsmuster sollte geachtet werden: **geringwertige Tests, deaktivierte fehlschlagende Tests, und still wachsende Ausschlusslisten**.

## Quellen und weiterführende Literatur

- *Working Effectively with Legacy Code*, von Michael Feathers (Testabdeckungsstrategie für bestehende, schwer testbare Codebasen).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011): ein umfassender Überblick über Mutationstest-Techniken und ihre Wirksamkeit.
- *xUnit Test Patterns*, von Gerard Meszaros (Testdesign-Muster relevant für das Schreiben echt wirksamer, nicht nur abdeckungserfüllender, Tests).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die Beziehung zwischen Testpraktiken und Lieferleistung).
