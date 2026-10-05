# 7.1 Der Paradigmenwechsel der generativen KI

## Überblick und Motivation

Für den größten Teil der Geschichte des Software-Engineerings war das Schreiben von Code langsam und aufwendig genug, dass rohes Output-Volumen, geschriebene Zeilen, gemachte Commits, ausgelieferte Features, zumindest lose mit echtem Aufwand und, unvollkommen, mit echtem Wert korrelierte. Diese Korrelation war nie perfekt, Kapitel 3.4 widmete ein ganzes Kapitel dem, warum Aktivitätsmetriken selbst in einer Welt vor KI in die Irre führen, aber sie war stark genug, dass viele Organisationen Metrikprogramme auf der impliziten Annahme aufbauten, mehr Code produziert bedeute generell mehr erledigte Arbeit. [Generative-KI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)-Codierassistenten haben diese Annahme entscheidend gebrochen: ein Werkzeug kann jetzt ein großes, plausibel aussehendes Codevolumen in Sekunden produzieren, zu einem Bruchteil der vorherigen Kosten, und dieses Volumen sagt für sich allein fast nichts darüber, ob der resultierende Code funktioniert, wartbar ist, oder irgendeinem echten Zweck dient.

Die Kernbehauptung dieses Kapitels ist, dass dies ein Paradigmenwechsel ist, keine inkrementelle Tooling-Änderung. Ein Paradigmenwechsel ändert, was bestehende Instrumente tatsächlich messen, nicht nur welche Werte sie berichten. Ein Tachometer misst weiterhin Geschwindigkeit, nachdem der Motor eines Autos ausgetauscht wurde; mehrere Metriken dieses Buches überstehen diesen Übergang nicht so sauber. Deployment-Frequenz (Kapitel 2.10) kann steigen, weil KI echt wertvolle Arbeit beschleunigte, oder weil KI es trivial einfach machte, viele kleine, geringwertige Änderungen zu generieren; die Zahl allein kann die beiden nicht mehr unterscheiden, auf eine Weise, wie sie es früher, mit angemessener Vorsicht, meist konnte. Dieselbe Logik gilt mit noch mehr Kraft für rohe Commit-Zahlen, Codezeilen, und Pull-Request-Volumen, vor allen dreien Kapitel 3.4 bereits als individuelle Metriken warnte, jetzt verstärkt zu einem Risiko, das auch auf Team- und Organisationsebene relevant ist.

Für große Teams kam dieser Wandel schneller, als sich die Messpraxis der meisten Organisationen anpassen konnte, und die Lücke zwischen Einführungsgeschwindigkeit und Messanpassung ist, wo das echte Risiko in diesem Teil lebt. Konzerne, die weiterhin Aktivitätsmetriken aus der Vor-KI-Ära ohne Anpassung berichten, riskieren, eine Metrik zu feiern, die still aufgehört hat, mit Wert zu korrelieren; Behörden, die KI-Tooling-Investition bewerten, brauchen ein klarsichtiges Verständnis genau dessen, welche Metriken vertrauenswürdig bleiben und welche es nicht mehr sind, bevor sie sich Beschaffungs- oder Richtlinienentscheidungen verpflichten, die auf veralteten Messannahmen aufgebaut sind.

## Kernprinzipien

- **Dies ist ein Paradigmenwechsel darin, was Metriken messen, keine inkrementelle Änderung.** Manche bestehenden Metriken haben still aufgehört zu bedeuten, was sie früher bedeuteten.
- **Output-Volumen war nie ein zuverlässiger Stellvertreter für Wert, und es ist jetzt aktiv unzuverlässig geworden.** Die Warnung aus Kapitel 3.4 war immer korrekt; dieser Wandel macht es weit kostspieliger, sie zu ignorieren.
- **Die Lücke zwischen KI-Einführungsgeschwindigkeit und Messanpassungsgeschwindigkeit ist das echte Risiko.** Organisationen führen das Tooling schneller ein, als sie ihre Metriken überdenken.
- **Nicht jede Metrik in diesem Buch ist gleichermaßen betroffen.** Ergebnismetriken (Teil 5) sind weit resistenter gegen diesen Wandel als Aktivitäts- und rohe Output-Metriken.
- **Dieser Wandel ist branchenweit und andauernd, keine einmalige Anpassung.** Anhaltende Veränderung sollte erwartet werden, während sich das Tooling und seine Einführungsmuster weiterentwickeln.

## Empfehlungen

### Das bestehende Metrik-Set explizit auf Gültigkeit im KI-Zeitalter auditieren

Das aktuelle Dashboard sollte durchgegangen werden, und für jede Metrik sollte direkt gefragt werden: würde ein Team, das KI-Unterstützung stark nutzt, aber nicht mehr echten Wert produziert als zuvor, eine verbesserte Ablesung bei dieser Metrik zeigen. Aktivitätszählungen, Commit-Häufigkeit, und rohe Deployment-Frequenz (ohne eine gepaarte Stabilitäts-Leitplanke, Kapitel 2.10) sind am stärksten exponiert. Ergebnismetriken aus Teil 5, entwichene Fehlerrate, Feature-Akzeptanz, Geschäftsergebnisse, sind vergleichsweise resistent, da sie das tatsächliche Ergebnis messen statt das Volumen der Aktivität, die es produzierte.

### Deployment-Frequenz und Durchlaufzeit speziell mit erhöhter Leitplanken-Aufmerksamkeit erneut untersuchen

Kapitel 2.10 warnte bereits vor Substitutionsmanipulation, bedeutsame Arbeit in triviale Deploys aufzuteilen, um die Zahl aufzublähen. Generative KI macht dieses spezifische Manipulationsmuster dramatisch günstiger und leichter zu produzieren, selbst unbeabsichtigt, da KI-unterstützte triviale Änderungen jetzt fast kostenlos zu generieren sind. Die Änderungsfehlerraten-Leitplanke (Kapitel 2.10) sollte speziell im Verhältnis dazu gestrafft werden, wie stark ein Team KI-unterstützte Entwicklung übernommen hat, und Deploy-Größentrends sollten noch genauer verfolgt werden als zuvor.

### Code-Review-Kapazität als neuen, kritischen Engpass behandeln

Wenn KI-Unterstützung das Volumen zum Review vorgeschlagenen Codes dramatisch erhöht, wird die Review-Phase (Kapitel 2.9), bereits oft der größte Wartezeitbeitrag in der Lieferpipeline, zu einer noch schärferen Beschränkung. Eine Prüferin oder ein Prüfer, gebeten, ein weit höheres Volumen KI-generierten Codes im selben Tempo wie zuvor zu bewerten, wird unweigerlich entweder die Pipeline verlangsamen oder die Review-Tiefe reduzieren, genau das Abnick-Risiko, vor dem Kapitel 2.9 bereits warnte, jetzt unter deutlich größerem Druck. Review-Tiefe- und Qualitäts-Leitplanken sollten mit erhöhter Aufmerksamkeit überwacht werden, während KI-generiertes Codevolumen steigt.

### Nicht annehmen, dass KI-generierter Code dasselbe Fehlerprofil trägt wie menschlich geschriebener Code

Frühe Evidenz und Praktikererfahrung deuten darauf hin, dass KI-generierter Code ein anderes Fehlerprofil haben kann als menschlich geschriebener Code: plausibel aussehende, aber subtil falsche Logik, selbstsicher generierte, aber inkorrekte Grenzfallbehandlung, oder Code, der oberflächlichen Review besteht, weil er idiomatisch und vernünftig aussieht, aber nicht tatsächlich mit echtem Verständnis des spezifischen Kontexts des Systems durchdacht wurde. Dies sollte als eine Hypothese behandelt werden, die es wert ist, aktiv gegen die eigenen entwichene-Fehler-Daten getestet zu werden (Kapitel 5.1), Fehler danach markierend, ob der ursprüngliche Code substanziell KI-generiert war, statt anzunehmen, die historischen Fehlerraten-Beziehungen, um die herum die Organisation ihre Qualitätspraktiken aufgebaut hat, gälten noch unverändert.

### Das Metrik-Charter und den Governance-Prozess explizit für diesen Wandel aktualisieren

Der Governance-Disziplin aus Kapitel 1.4 folgend, sollte diesem Metrikprogramm dieser Wandel nicht passiv geschehen gelassen werden. Das Metrik-Charter sollte explizit erneut betrachtet werden, wobei benannt wird, welche Metriken neue Leitplanken brauchen, welche ausgemustert werden sollten, und welche vertrauenswürdig bleiben, als bewusste Governance-Entscheidung statt ungeprüfter Drift. Die Begründung sollte dokumentiert werden, da dies genau die Art von definitorischem und kontextuellem Wandel ist, vor der Kapitel 1.4 warnt, er könne sonst still geschehen und erst viel später entdeckt werden.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Vor-KI-Metriken unverändert weiter berichten | Keine Störung, vertraute Berichterstattung | Riskiert, Metriken zu feiern, die still aufgehört haben, mit Wert zu korrelieren |
| Vollständiges Metrik-Set-Audit und bewusste Revision | Stellt vertrauenswürdige Messung wieder her | Braucht echten analytischen Aufwand und organisatorisches Änderungsmanagement |
| Aktivitäts- und Output-Metriken vollständig aufgeben | Entfernt das am stärksten exponierte Risiko direkt | Verliert manches legitim nützliches kontextuelles Signal (Vorbehalt aus Kapitel 3.4) |
| Leitplanken ohne vollständiges Audit straffen | Schneller umzusetzen | Kann Metriken übersehen, deren Exposition weniger offensichtlich ist als die klarsten Fälle |

Die zentrale Spannung ist **Messkontinuität gegen Messgültigkeit**. Organisationen bevorzugen verständlicherweise, vertraute Metriken auf vertraute Weisen weiter zu berichten, da eine Änderung eines Metrikprogramms echte organisatorische Kosten und Störung hat. Aber weiterhin eine Metrik zu berichten, die still aufgehört hat zu messen, was sie früher maß, ist schlimmer als Störung, es ist aktive Fehlleitung. Die Spannung sollte gelöst werden, indem dies genau als die Art bewusster, dokumentierter Governance-Änderung behandelt wird, die Kapitel 1.4 beschreibt, kurzfristig störend, aber notwendig, um die Metriken der Organisation ehrlich zu halten.

## Fragen für die Diskussion im Team

1. **Würde für jede Metrik auf unserem Dashboard ein Team, das KI-Unterstützung stark nutzt, aber nicht mehr echten Wert produziert, eine verbesserte Ablesung zeigen?** Die Metriken sollten explizit mit diesem Test durchgegangen werden; die, die ihn nicht bestehen, sind die höchstpriorisierten Kandidaten für überarbeitete Leitplanken oder Ausmusterung.

2. **Ist unsere Deployment-Frequenz oder unser Commit-Volumen seit der Einführung von KI-Codierunterstützung gestiegen, und haben wir geprüft, ob sich Änderungsfehlerrate oder Fehlerrate entsprechend bewegt haben?** Die tatsächlichen gepaarten Daten sollten gezogen werden, statt entweder ein positives oder negatives Ergebnis anzunehmen.

3. **Hält unsere Code-Review-Kapazität mit einem Anstieg des KI-unterstützten Codevolumens Schritt, oder erodiert Review-Tiefe still unter erhöhtem Druck?** Review-Phase-Metriken (Kapitel 2.9) sollten speziell auf Zeichen sich verstärkenden Abnick-Risikos geprüft werden.

4. **Markieren wir Fehler danach, ob der ursprüngliche Code substanziell KI-generiert war, und wenn ja, was zeigen diese Daten bisher?** Falls dies derzeit nicht markiert wird, sollte diskutiert werden, was es bräuchte, um damit zu beginnen, da diese Daten direkt relevant dafür sind, ob die historischen Qualitätsannahmen noch gelten.

5. **Haben wir unser Metrik-Charter (Kapitel 1.4) bewusst im Licht dieses Wandels überarbeitet, oder ist unsere Messpraxis einfach unverändert fortgesetzt worden?** Wenn die ehrliche Antwort Letzteres ist, ist diese Lücke genau das, was dieses Kapitel empfiehlt, zuerst zu schließen.

6. **Wie würde es aussehen, wenn unsere Organisation von diesem Wandel auf dem falschen Fuß erwischt würde, eine Metrik feiernd, die bereits aufgehört hatte zu bedeuten, was wir dachten, dass sie bedeutet?** Dieses konkrete, leicht unbequeme Gedankenexperiment hilft, das Audit zu motivieren, das dieses Kapitel empfiehlt, bevor, statt nachdem, dieses Szenario tatsächlich geschieht.

## Branchenperspektive

**Startup.** Schnelle KI-Werkzeugeinführung ist üblich und oft ein echter Wettbewerbsvorteil, aber dieselbe Geschwindigkeit, die Einführung attraktiv macht, macht ungeprüfte Metrikdrift wahrscheinlicher. Die Gewohnheit sollte aufgebaut werden, Ergebnismetriken (Teil 5) zusammen mit jedem berichteten Effizienzgewinn aus KI-Einführung zu prüfen, statt Geschwindigkeitsverbesserungen allein zu berichten.

**Kleinunternehmen.** KI-Codierunterstützung kann die Kapazität eines kleinen Teams bedeutsam erweitern, aber der Versuchung sollte widerstanden werden, rohe Output-Steigerungen als eindeutigen Erfolg zu berichten, ohne Qualitäts-Leitplanken zu prüfen; ein kleines Team hat weniger Kapazität, ein unentdecktes Qualitätsproblem zu absorbieren, als eine größere Organisation mit mehr Redundanz.

**Enterprise.** Der Maßstab dieses Risikos verstärkt sich hier bedeutsam, da KI-Einführung über Dutzende oder Hunderte Teams gleichzeitig Metrikgültigkeit organisationsweit verschieben kann, bevor ein einzelnes Team das Muster lokal bemerkt. Das Metrik-Set-Audit, das dieses Kapitel empfiehlt, sollte auf organisatorischer Ebene durchgeführt werden, nicht nur Team für Team, und Governance (Kapitel 1.4) sollte zentral und explizit aktualisiert werden.

**Behörden.** Organisationen des öffentlichen Sektors übernehmen neue Technologie oft vorsichtiger, aber die Metriken und Benchmarks, die zur Bewertung von Behörden-Technologieprogrammen genutzt werden, stammen häufig aus oder werden verglichen mit Daten des privaten Sektors, die sich selbst unter demselben Druck verschieben. Explizit sollte verstanden werden, welche Branchenbenchmarks, gegen die verglichen wird, von diesem Wandel betroffen waren, bevor sie genutzt werden, um Erwartungen zu setzen oder Leistung zu bewerten.

## Beispiele

**Enterprise.** Die Engineering-Führung eines Finanztechnologieunternehmens bemerkte, dass die Deployment-Frequenz in den zwei Quartalen nach breiter KI-Codierassistenten-Einführung um fast 40 % gestiegen war, und berichtete dies zunächst als unkomplizierten Produktivitätsgewinn in einer Vorstandspräsentation. Eine sorgfältigere Folgeanalyse, ausgelöst durch die Frage eines skeptischen Vorstandsmitglieds, ob Qualität geprüft worden war, fand, dass die Änderungsfehlerrate fast im Gleichschritt mit der Deployment-Frequenz gestiegen war, was den scheinbaren Gewinn vollständig ausglich, sobald die gepaarte Stabilitätsmetrik tatsächlich untersucht wurde. Die überarbeitete Berichterstattung des Unternehmens präsentiert jetzt Deployment-Frequenz und Änderungsfehlerrate explizit zusammen, wann immer KI-unterstützte Produktivitätsbehauptungen gemacht werden, und vermeidet so die frühere, fast öffentliche, irreführende Behauptung.

**Behörden.** Eine IT-Abteilung einer Landesregierung, die KI-Codierunterstützung für eine Teilmenge ihrer Engineering-Teams pilotierte, fand, dass der rohe Code-Output pro Ingenieurin oder Ingenieur substanziell gestiegen war, eine Zahl, die zunächst günstig in einer internen Pilotüberprüfung zitiert wurde. Eine genauere Analyse, ausgelöst durch die Einbindung der Anleitung dieses Buches in das Bewertungs-Framework der Abteilung, untersuchte speziell die entwichene Fehlerrate für KI-unterstützte gegenüber nicht-KI-unterstützter Arbeit und fand eine bescheiden erhöhte Fehlerrate in der KI-unterstützten Kohorte, konzentriert in der Grenzfallbehandlung für ungewöhnliche Bürgerumstände, denen das KI-Tooling während des Trainings nicht ausgesetzt gewesen war. Dieser Befund stoppte den Piloten nicht, führte aber zu einer spezifischen, gezielten Erhöhung der Review-Strenge für KI-unterstützte Änderungen, die Berechtigungs-Grenzfall-Logik betrafen, und adressierte das tatsächliche Risiko, das die rohe Output-Metrik allein nie enthüllt hätte.

## Business Case: Motivation, ROI und TCO

Die Rendite, dieses Audit proaktiv durchzuführen, ist, eine öffentliche oder Vorstandsebene-Peinlichkeit zu vermeiden, die daher kommt, eine Metrik zu berichten, die sich unter Prüfung als nichts Echtes messend herausstellt, genau das Szenario, das das Finanztechnologie-Beispiel oben fast produzierte. Eine Organisation, die diesem Wandel vorausgeht, erhält Glaubwürdigkeit bei ihren Stakeholdern; eine, die dabei erwischt wird, eine hohle Metrik zu berichten, zahlt echte, und größtenteils vermeidbare, Reputationskosten.

Die Gesamtbetriebskosten sind der analytische Aufwand, das bestehende Metrik-Set zu auditieren, Leitplanken zu straffen, und Governance-Dokumentation zu aktualisieren, eine einmalige, moderate Investition relativ zum laufenden Risiko, weiterhin Metriken zu berichten, die still aufgehört haben, das zu messen, was sie zu messen behaupten. Diese Kosten wiederholen sich auch auf niedrigerem Niveau, da dieser Wandel andauernd ist, kein einmaliges Ereignis, und periodisches erneutes Auditieren, während sich Tooling und Einführungsmuster weiterentwickeln, ist eine vernünftige, dauerhafte Ergänzung zu einem Metrik-Governance-Rhythmus.

## Antipatterns und Fallstricke

- **Aktivitätsmetriken aus der Vor-KI-Ära unverändert und unkritisch weiter berichten:** riskiert, eine Metrik zu feiern, die still aufgehört hat, mit echtem Wert zu korrelieren.
- **Deployment-Frequenz- oder Output-Volumen-Steigerungen ohne die gepaarte Stabilitäts-Leitplanke berichten:** wiederholt die Warnung aus Kapitel 2.10 mit deutlich höheren Einsätzen unter KI-unterstützter Entwicklung.
- **Annehmen, dass KI-generierter Code dasselbe Fehlerprofil trägt wie menschlich geschriebener Code, ohne zu prüfen:** eine ungetestete Annahme, die aktiv falsch sein könnte.
- **Review-Tiefe still unter erhöhtem KI-generiertem Codevolumen erodieren lassen:** das Abnick-Risiko aus Kapitel 2.9, verstärkt.
- **Diesen Wandel als einmalige Anpassung statt anhaltendes Anliegen behandeln:** das Tooling und seine Einführungsmuster entwickeln sich weiter, und die Messpraxis muss Schritt halten.
- **Gegen Branchenbenchmarks vergleichen, ohne zu verstehen, ob sich diese Benchmarks selbst unter demselben Druck verschoben haben:** riskiert ein falsches Gefühl relativer Leistung.

## Reifegradmodell

- **Stufe 1, Initiieren:** Metriken aus der Vor-KI-Ära werden unverändert berichtet, ohne Bewusstsein, dass KI-Einführung ihre Gültigkeit beeinflusst haben könnte.
- **Stufe 2, Entwickeln:** Manches Bewusstsein des Wandels existiert, aber kein systematisches Audit des bestehenden Metrik-Sets wurde durchgeführt.
- **Stufe 3, Standardisieren:** Ein vollständiges Metrik-Set-Audit wurde durchgeführt, mit gestrafften Leitplanken und Metriken, die organisationsweit als betroffen oder resistent dokumentiert sind.
- **Stufe 4, Steuern:** Fehler und Qualitätsergebnisse werden aktiv nach KI-Unterstützungsgrad markiert und verfolgt, um zu testen, statt anzunehmen, dass die historischen Qualitätsbeziehungen der Organisation noch gelten.
- **Stufe 5, Orchestrieren:** Die Organisation hat eine reife, laufende Praxis, ihre Metriken erneut zu untersuchen, während sich KI-Tooling und Einführungsmuster weiterentwickeln, und kann auf spezifische Governance-Entscheidungen verweisen, die proaktiv als Reaktion auf diesen Wandel getroffen wurden, statt reaktiv, nachdem ein Problem auftauchte.

## Diskussionsanregungen

1. Welche unserer aktuellen Metriken würde ein Team am meisten schmeicheln, das KI-Unterstützung stark nutzt, aber nicht mehr echten Wert produziert?
2. Ist unsere Deployment-Frequenz seit KI-Einführung gestiegen, und hat sich die Änderungsfehlerrate damit bewegt?
3. Markieren wir Qualitätsergebnisse nach KI-Unterstützungsgrad, und was würden diese Daten zeigen?
4. Hält unsere Review-Kapazität mit einem Anstieg des KI-generierten Codevolumens Schritt?
5. Gegen welchen Branchenbenchmark vergleichen wir uns derzeit, und hat er sich selbst unter diesem Druck verschoben?

## Die wichtigsten Erkenntnisse

- Generative KI ist ein **Paradigmenwechsel darin, was mehrere bestehende Metriken messen**, keine inkrementelle Tooling-Änderung; manche Metriken haben still aufgehört zu bedeuten, was sie früher bedeuteten.
- **Aktivitäts- und rohe Output-Metriken sind am stärksten exponiert**; Ergebnismetriken (Teil 5) sind vergleichsweise resistent.
- **Leitplanken sollten gestrafft werden, besonders Änderungsfehlerrate**, im Verhältnis zur Einführung KI-unterstützter Entwicklung.
- **Getestet, nicht angenommen, werden sollte, ob KI-generierter Code ein anderes Fehlerprofil trägt** als menschlich geschriebener Code, unter Nutzung markierter entwichene-Fehler-Daten.
- Dies sollte als **laufendes, nicht einmaliges Governance-Anliegen** behandelt werden (Kapitel 1.4), da sich das Tooling und seine Einführungsmuster weiterentwickeln.

## Quellen und weiterführende Literatur

- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die ergebnisbasierte Messgrundlage, von der dieses Kapitel argumentiert, sie werde unter diesem Wandel wichtiger, nicht weniger wichtig).
- Die Forschung von GitHub zu KI-Pair-Programming und Entwicklerproduktivität (Branchenforschung zu den messbaren Effekten KI-unterstützter Entwicklung).
- Das DevOps-Forschungs- und Bewertungsprogramm von Google Cloud, [dora.dev](https://dora.dev/) (laufende State-of-DevOps-Forschung, die KI-Einführungsbefunde in jüngeren Jahren einbezieht).
- *The Tyranny of Metrics*, von Jerry Z. Muller (der allgemeine Fall für Skepsis gegenüber volumenbasierten Metriken, direkt relevant, während Output-Volumen billig wird).
