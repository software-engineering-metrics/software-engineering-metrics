# 1.3 Ergebnisse vor Output: die Wahl, was gemessen wird

## Überblick und Motivation

Jede Engineering-Metrik fällt in eine von drei Kategorien, und sie zu verwechseln ist der zweithäufigste Fehlmodus in diesem Buch, gleich nach dem völligen Ignorieren von [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law). Eine **Input-Metrik** misst aufgewendeten Aufwand: Ingenieurstunden, eingesetzte Euro, zugesagte Story Points. Eine **Output-Metrik** misst, was das System produziert hat: ausgelieferte Features, gemergte Pull Requests, geschlossene Tickets. Eine **Ergebnis-Metrik** misst die Veränderung, die tatsächlich zählte: gehaltener Umsatz, vermiedene Incidents, gesparte Zeit für eine Nutzerin oder einen Nutzer. Teams neigen zu Input und Output, weil sie leicht zu zählen und vollständig in der Kontrolle des Teams sind. Der Wert liegt fast immer in den Ergebnissen, die langsamer erscheinen, verrauschter zu messen und schwerer der Arbeit eines einzelnen Teams zuzuschreiben sind.

Dieses Kapitel handelt davon, dieser Anziehungskraft bewusst zu widerstehen. Ein Dashboard, das vollständig aus Input und Output besteht, kann beeindruckend geschäftig wirken, während überhaupt kein realer Wert entsteht: Ein Team kann Dutzende Features ausliefern, die niemand nutzt, Hunderte Tickets schließen, die eine Woche später wieder aufgemacht werden, oder jede Story-Point-Schätzung treffen, während die tatsächlichen Ergebnisse des Produkts, Bindung, Zufriedenheit, Umsatz, stagnieren oder sinken. Nichts von dieser Geschäftigkeit zeigt sich als Problem auf einem reinen Output-Dashboard, weil reine Output-Dashboards nicht dafür gebaut sind, das zu sehen.

Auf Enterprise- und Behördenebene entscheidet diese Unterscheidung darüber, ob die Führungsebene den Unterschied zwischen einem produktiven und einem nur aktiven Team erkennen kann. Eine Abteilung kann jahrelang hervorragende Output-Zahlen vorweisen, ausgelieferte Features, geschlossene Sprints, während das Ergebnis, das einem Geldgeber oder einem Parlament tatsächlich am Herzen liegt, gehaltener Umsatz, verringerte Wartezeiten für Bürgerinnen und Bürger, still darunter erodiert. „Wir haben die Roadmap geliefert" ist nicht dieselbe Aussage wie „die Roadmap hat die Dinge verbessert", und nur ein ergebnisgewichteter Metrik-Satz kann die beiden auseinanderhalten.

## Kernprinzipien

- **Input und Output sind Stellvertreter; Ergebnisse sind die Sache selbst.** Der Metrik-Satz sollte, wo immer erreichbar, auf Ergebnisse gewichtet werden.
- **Leichte Messbarkeit ist kein Grund, etwas zu messen.** Die am leichtesten zu zählenden Dinge sind meist Input und Output, nicht weil sie am wichtigsten sind, sondern weil sie mechanisch einfach zu erfassen sind.
- **Zuschreibung wird schwerer, je näher man an Ergebnisse herankommt.** Dieser Kompromiss sollte bewusst akzeptiert werden, statt sich zu Output zurückzuziehen, nur weil Ergebnisse schwerer zuzuschreiben sind.
- **Ein Team kontrolliert seinen Input und Output, kann Ergebnisse aber nur beeinflussen.** Verantwortlichkeit sollte entsprechend gestaltet werden: Teams für das verantwortlich machen, was sie tatsächlich kontrollieren, und Ergebnisse als gemeinsame, teamübergreifende Signale verfolgen.
- **Ein einzelnes Nordstern-Ergebnis mit einem kleinen Satz an Treibern schlägt eine Wand aus Output-Kacheln.** Abdeckung sollte aus Struktur entstehen, nicht aus schierem Dashboard-Volumen.

## Empfehlungen

### Jede Metrik vor der Übernahme klassifizieren

Für jede Kandidatenmetrik sollte gefragt werden, in welche der drei Kategorien sie fällt. „Gemergte Pull Requests pro Woche" ist ein Output. „Prozentsatz gemergter Pull Requests, die innerhalb einer Woche einen Produktions-Incident verursachten" kommt einem Ergebnis näher, weil es eine Konsequenz statt eines Volumens misst. Diese Klassifikation dauert dreißig Sekunden und sollte verpflichtend sein, bevor eine Metrik zu einem Team- oder Organisations-Dashboard hinzugefügt wird, weil sie der schnellste Weg ist zu erkennen, dass sich ein Dashboard still mit leicht zählbaren Outputs füllt, während geglaubt wird, es messe Wert.

### Einen Metrikbaum unter einem einzelnen Ergebnis aufbauen

Keine flache Liste sollte verfolgt werden. Metriken sollten als **Metrikbaum** (manchmal auch KPI-Baum genannt) angeordnet werden: eine oberste Ergebnis-Metrik, heruntergebrochen in die Treiber, die sie kausal oder rechnerisch speisen, bis hinunter zu den operativen Output- und Input-Kennzahlen, die einzelne Teams tatsächlich besitzen. Wenn sich das oberste Ergebnis bewegt, zeigt der Baum, welcher untergeordnete Treiber untersucht werden sollte, und macht so aus „die Zahl ist gesunken" ein „dieser konkrete Schritt in der Pipeline ist die Ursache". Wo immer die Domäne es erlaubt, sollte an der Spitze eine einzelne **Nordstern-Metrik** benannt werden: die Kennzahl, die den gelieferten Wert am besten erfasst, Deployment-Frequenz gepaart mit Change Failure Rate für ein Plattform-Team, oder wöchentliche aktive Nutzung eines Kernfeatures für ein Produktteam.

### Ergebnisse in Reviews gewichten, nicht nur auf dem Dashboard

Ein Metrikbaum ist nur so gut, wie er in der Praxis genutzt wird. In Sprint-Reviews, vierteljährlichen Geschäftsreviews und Führungs-Updates sollte mit der Ergebniszahl begonnen werden, und die darunterliegenden Output- und Input-Metriken sollten nur zur Erklärung von Bewegungen dienen, nicht als Ersatz dafür. Ein Team, das „wir haben diesen Sprint 40 Tickets geschlossen" ohne jeden Ergebniskontext berichtet, hat nichts darüber gesagt, ob die Arbeit etwas bewirkt hat; ein Team, das berichtet „entwichene Defekte sind um 30 % gesunken, und hier ist die Testinvestition, die das bewirkt hat", hat etwas Reales gesagt.

### Langsamere Rückmeldung bei Ergebnis-Metriken akzeptieren und sie mit schnelleren Frühindikatoren paaren

Ergebnis-Metriken sind oft nachlaufend: Sie bestätigen ein Resultat erst, nachdem genug Zeit vergangen ist, um sicher zu sein. Diese Verzögerung ist eine echte Kosten, weil sie das Lernen verzögert. Jede Ergebnis-Metrik sollte mit mindestens einem Frühindikator gepaart werden, einer Metrik, die sich früher bewegt und das Ergebnis vorhersagt, sodass ein Team steuern kann, bevor die langsame, maßgebliche Zahl schließlich eintrifft. Deployment-Frequenz ist ein Frühindikator für Lieferergebnisse; ein steigender Trend bei entwichenen Defekten ist ein Frühindikator für ein kommendes Zuverlässigkeitsergebnis. Frühindikatoren sollten genutzt werden, um früh zu handeln, und nachlaufende Ergebnis-Metriken, um zu bestätigen, dass man richtiglag.

## Abwägungen: Vor- und Nachteile

| Kategorie | Vorteile | Nachteile |
| --- | --- | --- |
| Input-Metriken | Vollständig in Teamkontrolle, leicht zu zählen | Schwächste Verbindung zu echtem Wert; leicht durch Volumen zu manipulieren |
| Output-Metriken | Leicht zu zählen, klare Eigentümerschaft, schnelle Rückmeldung | Belohnt Aktivität statt Wirkung; kann steigen, während der Wert sinkt |
| Ergebnis-Metriken | Bilden direkt ab, was zählt; schwer billig zu manipulieren | Langsam, verrauscht und schwer einem einzelnen Team zuzuschreiben |
| Metrikbaum-Struktur | Verbindet tägliche Arbeit mit strategischem Wert; unterstützt Diagnose | Braucht echte analytische Arbeit für korrekten Aufbau und Pflege |

Die zentrale Spannung ist **Kontrollierbarkeit gegen Wert**. Input und Output liegen vollständig in der Kontrolle eines Teams, was verlockend macht, Teams dafür verantwortlich zu machen; Ergebnisse tragen den Wert, liegen aber nur teilweise im Einfluss eines einzelnen Teams, weil ein gutes Feature aus Gründen scheitern kann, die völlig außerhalb des Engineerings liegen. Die Lösung: Teams für den Input und Output verantwortlich machen, den sie vollständig kontrollieren, während Ergebnisse als gemeinsame Signale verfolgt werden, die die gesamte Organisation gemeinsam besitzt, verbunden durch einen expliziten Metrikbaum statt als unerklärte Lücke zwischen „wir haben die Arbeit gemacht" und „hat es geholfen" stehen gelassen.

## Fragen für die Diskussion im Team

1. **Ist jede Metrik auf unserem aktuellen Dashboard ein Input, ein Output oder ein Ergebnis, und erzählt die Balance zwischen den dreien eine ehrliche Geschichte?** Die meisten Dashboards erweisen sich bei ehrlicher Prüfung als fast vollständig Input und Output, weil das Tooling standardmäßig genau das berichtet. Jede Kachel sollte klassifiziert und die Verteilung gezählt werden; ein Dashboard ganz ohne Ergebniskacheln misst Aktivität und stellt sie als Leistung dar.

2. **Was ist unsere einzige Nordstern-Ergebnis-Metrik, und können wir sie durch einen Metrikbaum bis zu etwas zurückverfolgen, das jedes Team tatsächlich besitzt?** Ohne diese verbindende Struktur gibt eine sich bewegende Spitzenzahl keinen Hinweis, wo nachgeschaut werden sollte, und Teams können nicht sehen, wie ihre täglichen Output-Metriken mit irgendetwas Wichtigem zusammenhängen. Die aktuelle Spitzenmetrik, falls vorhanden, sollte mitgebracht und versucht werden, den Baum live zu bauen.

3. **Wo machen wir ein Team für ein Ergebnis verantwortlich, das es nur beeinflussen, nicht kontrollieren kann?** Das ist eine häufige Quelle von Frustration und stiller Manipulation, weil ein Team, das für ein von externen Faktoren geformtes Ergebnis bestraft wird, jeden Anreiz hat, sich selbst zu schützen statt das reale System zu verbessern. Diese Fehlanpassungen sollten identifiziert und entweder die Verantwortlichkeit angepasst oder die fehlenden Hebel ergänzt werden.

4. **Welchen Frühindikator haben wir für jede unserer nachlaufenden Ergebnis-Metriken, und wie weit im Voraus sagt er sie vorher?** Ein rein nachlaufender Metrik-Satz bedeutet, dass erst erkannt wird, dass man falsch lag, wenn es zu spät ist, um billig gegenzusteuern. Die Ergebnis-Metriken sollten mitgebracht und geprüft werden, ob für jede ein echter Frühindikator existiert, oder ob zwischen den Berichtsperioden blind geflogen wird.

5. **Wie viel von dem, was in Reviews und Retrospektiven gefeiert wird, ist Output („wir haben X ausgeliefert") gegenüber Ergebnis („X hat Y zum Besseren verändert")?** Die Sprache, mit der Teams Arbeit feiern, formt über die Zeit, wofür optimiert wird, oft stärker als das Dashboard es tut. Die eigenen Review-Meetings sollten für einen Sprint darauf abgehört und die Verteilung ehrlich gezählt werden.

6. **Würden sich unsere Ergebnis-Metriken zwangsläufig verbessern, wenn sich unsere wichtigsten Output-Metriken über Nacht verdoppelten, oder könnten sie sich verschlechtern?** Dieses Gedankenexperiment deckt Output-Metriken auf, die sich von den Ergebnissen, denen sie dienen sollten, gelöst haben oder ihnen sogar aktiv entgegenwirken, etwa Feature-Volumen, das den Wartungsaufwand schneller steigert als die Akzeptanz.

## Branchenperspektive

**Startup.** Ein Ergebnis sollte ausgewählt werden, typischerweise ein Stellvertreter dafür, ob Kundinnen und Kunden weiterhin Wert erhalten, wie wöchentliche Bindung oder Aktivierung, und dieses sollte von Tag eins an als Nordstern behandelt werden. Der Anziehungskraft von Output-Vanity-Metriken wie kumulativer Feature-Zahl sollte widerstanden werden, die verlockend gegenüber Investorinnen und Investoren zu berichten sind, aber nichts darüber aussagen, ob das Produkt für irgendjemanden tatsächlich funktioniert.

**Kleinunternehmen.** Vorhandene Tools, Kassensystem, Support-Desk, Analytics, berichten meist bereits eine ergebnisnahe Zahl, Wiederkaufrate, Ticket-Wiedereröffnungsrate. Diese sollten genutzt werden, statt eigene Ergebnis-Instrumentierung zu bauen, für deren Pflege keine Kapazität besteht, und der Versuchung sollte widerstanden werden, auf rohe Aktivitätszahlen zurückzufallen, nur weil sie die Standardansicht sind.

**Enterprise.** Der dominante Fehlmodus ist ein Portfolio von Teams, die jeweils lokale Output-Metriken optimieren, die sich zu keinem kohärenten organisationsweiten Ergebnis summieren. Der Metrikbaum sollte bewusst aufgebaut, Ergebnisdefinitionen über Geschäftsbereiche hinweg standardisiert werden, und jede größere Initiative sollte verpflichtet werden, ihre Ergebnishypothese vor der Finanzierung darzulegen, nicht nur ihren Output-Plan.

**Behörden.** Aufsichtsgremien und die Öffentlichkeit sind zunehmend versiert im Unterschied zwischen „die Leistungsbeschreibung erfüllt" und „das Ergebnis verbessert", und ein reiner Output-Bericht lädt genau zu dieser Prüfung ein. Erfolg sollte, wo rechtlich und praktisch möglich, als bürgernahes Ergebnis definiert werden (Wartezeit, Fehlerrate, Zufriedenheit), und es sollte explizit benannt werden, wenn nur eine Output-Metrik verfügbar ist, und warum.

## Beispiele

**Enterprise.** Die Engineering-Abteilung eines Logistikunternehmens berichtete zwei Jahre lang eine beständig steigende Zahl an „pro Quartal ausgelieferten Features", während der Kernwert der Kundenzufriedenheit des Unternehmens still stagnierte. Eine neue Engineering-Führungskraft baute einen Metrikbaum, verwurzelt in der pünktlichen Lieferrate, dem tatsächlichen Geschäftsergebnis, heruntergebrochen über Verweildauer im Hub und Erfolg der letzten Meile bis hinunter zu Engineering-Outputs auf Teamebene. Innerhalb eines Berichtszyklus wurde klar, dass mehrere Teams mit hohem Output Features in Bereichen auslieferten, die keine messbare Wirkung auf die Nordstern-Metrik hatten, und Investitionen verlagerten sich zu den Treibern, die der Baum als tatsächlich wichtig zeigte.

**Behörden.** Das Digitalteam eines nationalen Gesundheitsdienstes hatte für ein mehrjähriges Modernisierungsprogramm der Patientenakten „gegen die Leistungsbeschreibung gelieferte Module" berichtet. Ein Aufsichtsausschuss stellte eine andere Frage: Verbrachte klinisches Personal weniger Zeit mit administrativer Dateneingabe. Das Team rüstete eine Ergebnis-Metrik nach, mediane Minuten administrativer Zeit pro Patientenkontakt, und stellte fest, dass frühe Module diese Zeit wegen Workflow-Reibung tatsächlich erhöht hatten, trotz Erreichen jedes Liefermeilensteins. Spätere Module wurden direkt um die Ergebnis-Metrik herum neu gestaltet, und die öffentliche Berichterstattung des Programms verschob sich von einer Lieferliste zu einem Vorher-Nachher-Ergebnisvergleich.

## Business Case: Motivation, ROI und TCO

Die Rendite der Ergebnisgewichtung ist vermiedene Verschwendung: Eine Organisation, die nahezu in Echtzeit sehen kann, dass ein Output-Strom kein Ergebnis bewegt, kann diese Investition umlenken, bevor ein voller Budgetzyklus damit verbracht wird, es auf die harte Tour herauszufinden. Die dominante versteckte Kosten in großen Engineering-Organisationen ist nicht Unterinvestition, sondern gut ausgeführte Arbeit, die nie hätte finanziert werden sollen, weil sie von keinem echten Ergebnis abhing, und ein reines Output-Dashboard kann diese Entkopplung überhaupt nicht sehen.

Die Gesamtbetriebskosten der Ergebnismessung sind höher als bei Output-Messung, weil Ergebnisse tatsächlich schwerer zu definieren, zuzuschreiben und zu instrumentieren sind und der Aufbau eines echten Metrikbaums bewussten analytischen Aufwand erfordert, statt zu akzeptieren, was ein Tool standardmäßig exportiert. Diese Kosten lohnen sich für jede Initiative oberhalb einer bescheidenen Größe, weil die Alternative, nachträglich zu entdecken, dass ein Jahr zuversichtlich berichteten Outputs keinen echten Wert erzeugt hat, weit mehr kostet als die vorgelagerte Analyse.

## Antipatterns und Fallstricke

- **Ein Dashboard, das vollständig aus Output-Kacheln besteht:** misst Aktivität und stellt sie als Leistung dar.
- **Ein Team vollständig für ein Ergebnis verantwortlich machen, das es nicht kontrollieren kann:** züchtet Frustration und lädt zu Manipulation ein, um sich vor unfairer Schuldzuweisung zu schützen.
- **Kein Frühindikator für ein nachlaufendes Ergebnis:** Das Team erfährt erst, dass es falsch lag, wenn es bereits zu teuer ist, es zu korrigieren.
- **Output-Sprache in Reviews feiern, während behauptet wird, Ergebnisse zu schätzen:** Die erklärte Priorität und der gelebte Anreiz driften auseinander, und der gelebte Anreiz gewinnt.
- **Eine flache Liste von Metriken ohne Baumstruktur:** Eine sich bewegende Spitzenzahl gibt keinen Hinweis, wo nachgeschaut werden sollte.
- **Ergebnismessung als zu schwierig behandeln, um sie überhaupt zu versuchen:** setzt eine Organisation dauerhaft auf leicht zählbare Input- und Output-Metriken zurück.

## Reifegradmodell

- **Stufe 1, Initiieren:** Metriken sind fast ausschließlich Input und Output; niemand kann die Ergebnis-Metriken der Organisation benennen oder eine Linie zu ihnen ziehen.
- **Stufe 2, Entwickeln:** Manche Teams haben informell Ergebnis-Metriken identifiziert, aber es gibt keinen gemeinsamen Metrikbaum und keine konsistenten Frühindikatoren.
- **Stufe 3, Standardisieren:** Ein dokumentierter Metrikbaum verbindet ein gemeinsames Nordstern-Ergebnis bis hinunter zu teameigenen Outputs, konsistent in der gesamten Organisation angewendet.
- **Stufe 4, Steuern:** Früh- und Spätindikatoren werden gemeinsam verfolgt und überprüft; Teams werden nur für das verantwortlich gemacht, was sie kontrollieren, und Ergebnismessung wird aktiv mit Ressourcen ausgestattet.
- **Stufe 5, Orchestrieren:** Ergebnismessung ist direkt in Finanzierungs- und Priorisierungsentscheidungen integriert; die Organisation lenkt Investitionen routinemäßig von Arbeit mit hohem Output und niedrigem Ergebnis um, bevor ein voller Budgetzyklus verstreicht.

## Diskussionsanregungen

1. Benennt die eine wichtigste Ergebnis-Metrik unserer Organisation. Können sich alle darauf einigen?
2. Was ist unsere größte aktuelle Investition in Output, die wir noch zu keinem Ergebnis zurückverfolgen können?
3. Wo bestraft unsere Verantwortlichkeitsstruktur ein Team für ein Ergebnis, das es nicht kontrollieren kann?
4. Wie würde unser Dashboard aussehen, wenn wir jede reine Output-Kachel löschten?
5. Wie lange dauert es aktuell, bis wir erfahren, ob ein ausgeliefertes Feature tatsächlich geholfen hat?

## Die wichtigsten Erkenntnisse

- Jede Metrik sollte als **Input, Output oder Ergebnis** klassifiziert und der Satz bewusst auf Ergebnisse gewichtet werden.
- Ein **Metrikbaum** sollte unter einer einzelnen **Nordstern-Metrik** aufgebaut werden, sodass eine sich bewegende Spitzenzahl auf eine Ursache verweist.
- Teams sollten für das verantwortlich gemacht werden, was sie **kontrollieren** (Input, Output); Ergebnisse sollten als gemeinsame Signale verfolgt werden, die die gesamte Organisation gemeinsam beeinflusst.
- Jede nachlaufende **Ergebnis-Metrik** sollte mit einem schnelleren **Frühindikator** gepaart werden, damit gegengesteuert werden kann, bevor die langsame Zahl bestätigt, dass man falsch lag.
- Ein reines Output-Dashboard misst Aktivität und nennt sie Leistung; das sollte als Warnzeichen behandelt werden, nicht als Beruhigung.

## Quellen und weiterführende Literatur

- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble und Gene Kim (ergebnisbasierte Liefermessung).
- *Lean Analytics*, von Alistair Croll und Benjamin Yoskovitz (die eine Metrik, die zählt, und die Input-/Output-/Ergebnis-Unterscheidung im Startup-Kontext).
- *Measure What Matters*, von John Doerr (ergebnisorientierte Zielsetzung und die Betonung von Resultaten über Aktivität im OKR-Framework).
- *The Lean Startup*, von Eric Ries (handlungsrelevante gegen Vanity-Metriken und Ergebnisvalidierung).
- *Key Performance Indicators*, von David Parmenter (Aufbau einer KPI- oder Metrikbaum-Struktur unter einer Nordstern-Kennzahl).
