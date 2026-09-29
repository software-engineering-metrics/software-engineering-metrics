# 8.1 Ein Engineering-Metrik-Dashboard gestalten

## Überblick und Motivation

Jede Metrik, die dieses Buch behandelt hat, muss schließlich irgendwo leben, wo echte Menschen tatsächlich hinschauen, und ein schlecht gestaltetes [Dashboard](https://en.wikipedia.org/wiki/Dashboard_(business)) kann die sorgfältige Arbeit jedes vorangegangenen Kapitels zunichtemachen: ehrliche, gut regierte, leitplanken-gepaarte Metriken, unehrlich präsentiert, überladen, oder an das falsche Publikum gerichtet, produzieren genau die Verwirrung und das Misstrauen, die dieses Buch zu verhindern versucht hat. Dieses Kapitel handelt vom spezifischen Handwerk des Dashboard-Designs: zu wählen, was wem gezeigt wird, es ehrlich zu visualisieren, und das gesamte Artefakt so zu strukturieren, dass es tatsächlich genutzt wird, um Entscheidungen zu treffen, statt ignoriert oder, schlimmer, falsch gelesen zu werden.

Die zentrale Disziplin, die dieses Kapitel empfiehlt, ist publikumsspezifisches Design. Ein Dashboard, gebaut für das tägliche Standup eines einzelnen Engineering-Teams, braucht andere Metriken, andere Granularität, und eine andere visuelle Dichte als eines, gebaut für eine vierteljährliche Führungsüberprüfung, und ein einzelnes, einheitliches Dashboard, das versucht, beide Zielgruppen zu bedienen, dient meist keiner gut. Dieses Kapitel behandelt Dashboard-Design als echte Design-Disziplin, nicht als bloßen Berichterstattungs-Nachgedanken, und stützt sich durchgängig auf die statistischen Ehrlichkeitsprinzipien aus Kapitel 1.6: jede Visualisierungsentscheidung hilft oder behindert die Fähigkeit einer Leserin oder eines Lesers, die korrekte Schlussfolgerung aus den Daten zu ziehen.

Für große Teams ist Dashboard-Design, wo die vielen individuellen Metrik-Ebene-Leitplanken dieses Buches entweder in die Praxis überleben oder verloren gehen. Konzerne, die Dutzende Team-Dashboards betreiben, brauchen Konsistenz ohne Starrheit, geteilte Standards, die dennoch erlauben, dass die spezifischen Bedürfnisse jedes Publikums erfüllt werden; Behörden, deren Dashboards öffentlicher Prüfung begegnen oder als Basis für Aufsichtsberichterstattung dienen mögen, brauchen die ehrlichen Visualisierungsstandards, die dieses Kapitel empfiehlt, mit besonderer Strenge angewandt, da ein irreführendes Diagramm, von einer externen Prüferin oder einem externen Prüfer entdeckt, Glaubwürdigkeit weit über die spezifische betroffene Metrik hinaus schädigt.

## Kernprinzipien

- **Für ein spezifisches Publikum und eine Entscheidung sollte gestaltet werden, nicht für umfassende Abdeckung.** Ein Dashboard, das versucht, alle zu bedienen, dient meist niemandem gut.
- **Jede Visualisierungsentscheidung hilft oder führt aktiv in die Irre.** Die statistische Ehrlichkeit aus Kapitel 1.6 sollte rigoros angewandt werden: echter Trend, ehrliche Achsen, sichtbare Unsicherheit.
- **Wenige, gut gewählte Metriken schlagen umfassende Abdeckung.** Das durchgängige Prinzip dieses Buches, von Kapitel 1.1 an, gilt direkt für Dashboard-Design.
- **Ein Dashboard braucht eine Eigentümerin oder einen Eigentümer und einen Überprüfungsrhythmus**, genau wie jede andere regierte Metrik (Kapitel 1.4), sonst verfällt es zu einem ungepflegten, unvertrauenswürdigen Artefakt.
- **Leitplankenpaare gehören auf dieselbe Ansicht.** Eine incentivierte Metrik sollte nie von ihrer Leitplanke auf unterschiedliche Dashboards oder unterschiedliche Abschnitte getrennt werden.

## Empfehlungen

### Eigenständige Dashboards für eigenständige Zielgruppen und Entscheidungen gestalten

Separate, zweckspezifische Ansichten sollten gebaut werden, statt eines Dashboards, das jede Zielgruppe bedient: ein Team-Ebene-Betriebsdashboard (täglicher oder wöchentlicher Rhythmus, granulare Liefer- und Qualitätsmetriken für die eigene Nutzung des Teams), ein Führungsdashboard (monatlicher oder vierteljährlicher Rhythmus, ergebnisgewichtet gemäß Kapitel 7.4, weniger Metriken, mehr Kontext), und, wo relevant, ein extern gerichtetes Dashboard (für Kunden, Aufsichtsgremien, oder die Öffentlichkeit, sorgfältig regiert gemäß der konsequenz-skalierten Strenge aus Kapitel 1.4). Jedes dient einer anderen Entscheidung und sollte speziell für diese Entscheidung gestaltet werden, nicht als gefilterte Ansicht eines einzelnen Master-Dashboards.

### Ehrliche Visualisierungsstandards konsistent anwenden

Die statistischen Ehrlichkeitsprinzipien aus Kapitel 1.6 sollten als harte Designanforderungen befolgt werden, nicht als optionaler Feinschliff: Wertachsen sollten bei null beginnen, sofern nicht eine erklärte, sichtbare Ausnahme dokumentiert ist, Trend über die Zeit sollte gezeigt werden statt einer einzelnen Momentaufnahme, Mediane und Perzentile sollten statt Durchschnitten für verzerrte Daten genutzt werden, und Kontext sollte annotiert werden (Deploys, Vorfälle, organisatorische Änderungen), damit eine Leserin oder ein Leser eine echte Verschiebung von Rauschen unterscheiden kann. Die spezifischen Diagrammmanipulationen, die Kapitel 1.6 direkt benannte, sollten vermieden werden: doppelte Achsen, die falsche Korrelation implizieren, ausgewählte Datumsbereiche, und 3-D-Effekte, die Proportion verzerren.

### Eine Metrik nie über unterschiedliche Ansichten hinweg von ihrer gepaarten Leitplanke trennen

Dem Leitplanken-Paarungsprinzip aus Kapitel 1.2 sollte als harte Dashboard-Design-Regel gefolgt werden: Deployment-Frequenz und Änderungsfehlerrate (Kapitel 2.10) gehören auf dieselbe Ansicht, immer zusammen sichtbar, nie über ein „Geschwindigkeits"-Dashboard und ein separates „Qualitäts"-Dashboard aufgeteilt, die unterschiedliche Zielgruppen isoliert betrachten könnten. Dies ist keine geringfügige Layout-Präferenz; eine Metrik auf unterschiedlichen Dashboards von ihrer Leitplanke zu trennen, schafft genau das Anreiz-Expositionsrisiko neu, vor dem Kapitel 1.2 warnt, selbst wenn beide Zahlen technisch irgendwo verfolgt werden.

### Jedem Dashboard eine benannte Eigentümerin oder einen benannten Eigentümer und einen Überprüfungsrhythmus zuweisen

Die Governance-Disziplin aus Kapitel 1.4 sollte direkt auf das Dashboard-Artefakt selbst angewandt werden, nicht nur auf die individuellen Metriken, die es anzeigt: eine Eigentümerin oder ein Eigentümer sollte benannt werden, verantwortlich für die fortdauernde Genauigkeit und Relevanz des Dashboards, und ein Überprüfungsrhythmus sollte gesetzt werden, in dem Metriken hinzugefügt, ausgemustert, oder überdacht werden. Ein Dashboard ohne Eigentümerin oder Eigentümer verfällt genau so, wie es eine nicht zugeordnete Metrik tut (Kapitel 1.4), veraltete Kacheln akkumulierend, die niemand die Autorität oder Verantwortung hat zu entfernen.

### Eine explizite, sichtbare Erklärung einbauen, wofür das Dashboard nicht ist

Der diagnostisch-gegen-bewertend-Unterscheidung aus Kapitel 1.1 folgend, sollte auf jedem Dashboard, dessen Metriken plausibel für individuelle Bewertung missbraucht werden könnten, direkt und sichtbar angegeben werden, wofür das Dashboard nicht ist: „diese Metriken beschreiben Team- und Systemgesundheit; sie werden nicht in individuellen Leistungsbeurteilungen genutzt". Diese explizite Erklärung, besonders angewandt auf jedes Dashboard, das Aktivitätsdaten (Kapitel 3.4) oder Bereitschaftsdienstlastdaten (Kapitel 6.3) enthält, ist eine kleine Designentscheidung mit überdimensionaler Wirkung darauf, genau die bewertende Drift zu verhindern, vor der dieses Buch durchgängig warnt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Einzelnes, umfassendes Dashboard für alle Zielgruppen | Einfach, ein Artefakt zu bauen und zu pflegen | Dient keiner spezifischen Zielgruppe gut; überwältigend für manche, unzureichend für andere |
| Publikumsspezifische Dashboards | Jedes dient seiner tatsächlichen Entscheidung gut | Mehr Artefakte zu bauen, zu pflegen, und konsistent zu halten |
| Umfassende Metrikabdeckung auf jeder Ansicht | Nichts wird übersehen | Dashboard-Müdigkeit; begräbt die Metriken, die für die Entscheidung dieser Zielgruppe tatsächlich zählen |
| Minimale, entscheidungsgetriebene Metrikauswahl pro Dashboard | Fokussiert, handlungsfähig, leichter zu vertrauen | Braucht bewusste Kuratierungsdisziplin und riskiert, etwas Relevantes wegzulassen |

Die zentrale Spannung ist **Umfassendheit gegen Fokus**, die grundlegende Spannung aus Kapitel 1.1, speziell auf Dashboard-Design angewandt. Ein umfassendes Dashboard fühlt sich sicherer an, nichts wird ausgelassen, aber es dient seiner tatsächlichen Zielgruppe meist schlechter als ein fokussiertes, speziell um die Entscheidungen gebaut, die diese Zielgruppe treffen muss. Die Spannung sollte gelöst werden, indem mehrere, zweckspezifische Dashboards gebaut werden statt eines umfassenden, die bescheidenen zusätzlichen Wartungskosten mehrerer fokussierter Artefakte akzeptierend, im Austausch dafür, dass jedes tatsächlich für sein beabsichtigtes Publikum nützlich ist.

## Fragen für die Diskussion im Team

1. **Versucht unser aktuelles Dashboard, mehrere Zielgruppen gleichzeitig zu bedienen, und falls ja, wem dient es tatsächlich gut?** Das bestehende Dashboard sollte durchgegangen werden, und seine tatsächliche primäre Zielgruppe gegenüber seiner beabsichtigten Zielgruppe identifiziert werden; eine Diskrepanz hier ist üblich und es wert, direkt benannt zu werden.

2. **Trennt eines unserer Dashboards eine incentivierte Metrik von ihrer gepaarten Leitplanke auf unterschiedliche Ansichten?** Die aktuellen Dashboards sollten speziell auf dieses Muster auditiert werden, wobei jede der DORA-Metriken aus Teil 2 und ihre Paarungen als Ausgangspunkt geprüft werden.

3. **Würden die Visualisierungen unseres Dashboards die ehrlichen Visualisierungsstandards aus Kapitel 1.6 bestehen: nullbasierte Achsen, Trend über Momentaufnahme, Mediane über Durchschnitte für verzerrte Daten?** Die tatsächlichen aktuellen Diagramme sollten direkt gegen diese Checkliste überprüft werden.

4. **Hat jedes Dashboard, das gepflegt wird, eine benannte Eigentümerin oder einen benannten Eigentümer und einen Überprüfungsrhythmus, oder existieren manche einfach, ohne dass jemand für ihre Genauigkeit und Relevanz verantwortlich ist?** Falls einem Dashboard eine benannte Eigentümerin oder ein benannter Eigentümer fehlt, ist diese Lücke es wert, sofort geschlossen zu werden, da ein nicht zugeordnetes Dashboard genau so verfällt wie eine nicht zugeordnete Metrik.

5. **Gibt jedes Dashboard, dessen Metriken plausibel für individuelle Bewertung missbraucht werden könnten, explizit an, wofür es nicht ist?** Jedes Dashboard, das Aktivitäts- oder Bereitschaftsdienstlastdaten enthält, sollte speziell auf diese explizite Erklärung geprüft werden.

6. **Wenn die Dashboards heute von Grund auf neu gestaltet würden, Zielgruppe für Zielgruppe, ausgehend von der Entscheidung, die jede Zielgruppe treffen muss, wie unterschiedlich würde das Ergebnis von dem aussehen, was derzeit existiert?** Dieses Gedankenexperiment enthüllt oft, wie viel Dashboard-Struktur sich durch Trägheit statt bewusstes Design akkumuliert hat.

## Branchenperspektive

**Startup.** Ein einzelnes, einfaches Dashboard ist auf dieser Ebene meist angemessen, da das gesamte Team und die Führung oft dieselbe kleine Gruppe von Menschen sind, die weitgehend dieselben Entscheidungen treffen. Auf die ehrlichen Visualisierungsstandards und die explizite Nicht-für-Bewertung-Erklärung sollte sich selbst im kleinen Maßstab fokussiert werden, da diese Gewohnheiten weit leichter früh zu etablieren sind, als später nachzurüsten.

**Kleinunternehmen.** Die meisten Standardwerkzeuge liefern vernünftige Standarddashboards; die Hauptdisziplin ist, sie auf die wenigen Metriken herunterzukuratieren, die tatsächlich eine echte Entscheidung für das spezifische Geschäft informieren, statt jede Metrik anzuzeigen, die das Werkzeug zufällig standardmäßig berechnet.

**Enterprise.** Konsistenz ohne Starrheit ist hier die zentrale Herausforderung: Dutzende Team-Dashboards brauchen genug geteilten Standard (ehrliche Visualisierungsregeln, Leitplanken-Paarung, Eigentümerschaftsdisziplin), um vertrauenswürdig und vergleichbar zu sein, während sie dennoch erlauben, dass die spezifischen operativen Bedürfnisse jedes Teams seine eigene Ansicht formen. In einen geteilten Dashboard-Designstandard sollte investiert werden, durchgesetzt durch Governance (Kapitel 1.4), statt entweder einer starren, einheitlichen Vorlage oder vollständig unstrukturierten, inkonsistenten lokalen Dashboards.

**Behörden.** Dashboards, die externer oder Aufsichtsprüfung begegnen, brauchen besondere Strenge bei ehrlicher Visualisierung und expliziter Governance-Dokumentation, da ein irreführendes Diagramm, von einer externen Prüferin oder einem externen Prüfer entdeckt, institutionelle Glaubwürdigkeit weit über die spezifische betroffene Metrik hinaus schädigt. Der höchste Standard der Empfehlungen dieses Kapitels sollte speziell auf jedes extern gerichtete Dashboard angewandt werden.

## Beispiele

**Enterprise.** Ein Logistiktechnologieunternehmen hatte jahrelang ein einzelnes „Engineering-Gesundheits"-Dashboard gepflegt, angesehen von sowohl individuellen Engineering-Teams als auch der Führungsebene, mit über vierzig Kacheln, die alles von individuellen Commit-Zahlen bis zu vierteljährlichen Geschäftsergebnissen abdeckten. Keine Zielgruppe fand es echt nützlich: Ingenieurinnen und Ingenieure ignorierten die Geschäftsergebnis-Kacheln als irrelevant für ihre tägliche Arbeit, und Führungskräfte waren von granularen Liefermetriken ohne Kontext für Interpretation überwältigt. Die Aufteilung in ein fokussiertes, sechs-Kacheln-Team-Betriebsdashboard und ein separates, acht-Kacheln-Führungsdashboard, beide den Leitplanken-Paarungs- und ehrlichen Visualisierungsstandards dieses Kapitels folgend, produzierte messbar höheres Engagement, und, entscheidend, Führungskräfte berichteten zum ersten Mal, in der Lage zu sein zu erklären, was die Zahlen bedeuteten, wenn sie von ihrer eigenen Führung gefragt wurden.

**Behörden.** Das öffentlich gerichtete digitale-Dienste-Dashboard einer Landesregierung war öffentlich für ein Diagramm kritisiert worden, das „durchschnittliche" Bearbeitungszeit unter Nutzung einer gekürzten Y-Achse zeigte, die eine bescheidene Verbesserung visuell übertrieb, eine Verletzung der ehrlichen Visualisierungsstandards aus Kapitel 1.6, die ein externer Technologiejournalist gefangen und darüber berichtet hatte. Das überarbeitete Dashboard der Behörde, explizit gegen die Standards dieses Kapitels gebaut, nullbasierte Achsen, Median statt Durchschnitt für die rechtsschiefen Bearbeitungszeitdaten, und klar annotierter Kontext für jede bemerkenswerte Änderung, wurde in einem Folgeartikel speziell als Modell transparenter Datenpräsentation des öffentlichen Sektors gelobt, was direkt die Glaubwürdigkeit reparierte, die das frühere, irreführende Diagramm geschädigt hatte.

## Business Case: Motivation, ROI und TCO

Die Rendite bewusster, publikumsspezifischer, ehrlich gestalteter Dashboards sind echte Nutzung und echtes Vertrauen: das Beispiel des Logistikunternehmens oben zeigt die direkten Kosten eines schlecht gestalteten einzelnen Dashboards, niedriges Engagement von beiden beabsichtigten Zielgruppen, und den direkten Nutzen der Neugestaltung, messbar höheres Engagement, sobald jede Zielgruppe eine Ansicht erhielt, tatsächlich für ihre eigenen Entscheidungen gebaut.

Die Gesamtbetriebskosten sind der Design- und Wartungsaufwand für mehrere, zweckspezifische Dashboards statt eines umfassenden Artefakts, plus die laufende Governance-Disziplin (benannte Eigentümerschaft, Überprüfungsrhythmus), die dieses Kapitel empfiehlt. Diese Kosten sind bescheiden im Vergleich zum Risiko eines ungenutzten Dashboards, oder schlimmer, eines, das seine Zielgruppe aktiv in die Irre führt und Glaubwürdigkeit schädigt, wie das Behörden-Beispiel oben konkret zeigt.

## Antipatterns und Fallstricke

- **Ein einzelnes Dashboard, das versucht, jede Zielgruppe zu bedienen:** dient meist niemandem gut.
- **Eine incentivierte Metrik über unterschiedliche Ansichten hinweg von ihrer Leitplanke trennen:** schafft das Anreiz-Expositionsrisiko neu, vor dem Kapitel 1.2 warnt.
- **Unehrliche Visualisierungsentscheidungen:** gekürzte Achsen, ausgewählte Datumsbereiche, und doppelte Achsen führen alle Leserinnen und Leser in die Irre, manchmal mit echten Reputationskonsequenzen.
- **Keine benannte Eigentümerin oder kein benannter Eigentümer oder Überprüfungsrhythmus für das Dashboard selbst:** das Artefakt verfällt genau so, wie es eine nicht zugeordnete Metrik tut.
- **Keine explizite Erklärung, wofür ein Dashboard nicht ist:** lädt zur bewertenden Drift ein, vor der dieses Buch durchgängig warnt.
- **Umfassende Kachelabdeckung über fokussierte, entscheidungsgetriebene Kuratierung:** produziert Dashboard-Müdigkeit und begräbt, was tatsächlich zählt.

## Reifegradmodell

- **Stufe 1, Initiieren:** Ein einzelnes, unkuriertes Dashboard, falls überhaupt vorhanden, dient allen Zielgruppen schlecht, ohne ehrlichen Visualisierungsstandard oder Leitplanken-Paarung.
- **Stufe 2, Entwickeln:** Manche publikumsspezifischen Ansichten existieren, aber Visualisierungsstandards sind inkonsistent und Eigentümerschaft ist unklar.
- **Stufe 3, Standardisieren:** Publikumsspezifische Dashboards mit konsistenten, ehrlichen Visualisierungsstandards und Leitplanken-Paarung sind organisationsweit etabliert, jedes mit einer benannten Eigentümerin oder einem benannten Eigentümer.
- **Stufe 4, Steuern:** Dashboards werden in regelmäßigem Rhythmus überprüft, mit expliziten Nicht-für-Bewertung-Erklärungen, wo relevant, und veraltete Kacheln werden aktiv entfernt.
- **Stufe 5, Orchestrieren:** Die Dashboard-Design-Praxis der Organisation ist eine vertrauenswürdige, gut regierte Fähigkeit, und die Organisation kann auf spezifische Fälle verweisen, in denen ehrliche, gut gestaltete Dashboards Stakeholder-Vertrauen reparierten oder aufbauten.

## Diskussionsanregungen

1. Wer ist das tatsächliche primäre Publikum unseres aktuellen Dashboards, gegenüber seinem beabsichtigten Publikum?
2. Trennt eines unserer Dashboards eine Metrik von ihrer Leitplanke?
3. Würden unsere aktuellen Diagramme ein ehrliches Visualisierungsaudit bestehen?
4. Hat jedes Dashboard, das wir pflegen, eine klar benannte, verantwortliche Eigentümerin oder einen klar benannten, verantwortlichen Eigentümer?
5. Wie würde eine Von-Grund-auf-, Publikum-zuerst-Neugestaltung unserer Dashboards aussehen?

## Die wichtigsten Erkenntnisse

- **Publikumsspezifische Dashboards** sollten für spezifische Entscheidungen gestaltet werden, nicht ein umfassendes Artefakt, das versucht, alle zu bedienen.
- **Ehrliche Visualisierungsstandards** (Kapitel 1.6) sollten als harte Anforderungen angewandt werden: nullbasierte Achsen, Trend über Momentaufnahme, Mediane über Durchschnitte für verzerrte Daten.
- **Eine incentivierte Metrik sollte nie von ihrer Leitplanke getrennt werden** über unterschiedliche Ansichten hinweg; Leitplankenpaare sollten auf demselben Dashboard bleiben.
- Jedem Dashboard sollte eine **benannte Eigentümerin oder ein benannter Eigentümer und ein Überprüfungsrhythmus** zugewiesen werden, genau wie Kapitel 1.4 es für jede regierte Metrik verlangt.
- Explizit sollte angegeben werden, **wofür ein Dashboard nicht ist**, besonders wo Aktivitäts- oder Betriebslastdaten für individuelle Bewertung missbraucht werden könnten.

## Quellen und weiterführende Literatur

- *The Visual Display of Quantitative Information*, von Edward R. Tufte (der grundlegende Text zu ehrlicher, hochwertiger Datenvisualisierung).
- *Storytelling with Data*, von Cole Nussbaumer Knaflic (praktisches Dashboard- und Diagrammdesign für Geschäftszielgruppen).
- *Information Dashboard Design*, von Stephen Few (dashboardspezifische Designprinzipien für effektive, ehrliche Kommunikation).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die Metrikpaarungsdisziplin, die dieses Kapitel direkt auf Dashboard-Layout anwendet).
