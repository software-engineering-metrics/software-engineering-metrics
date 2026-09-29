# 3.4 Aktivitätsmetriken und ihre Grenzen

## Überblick und Motivation

**Aktivität**, das A in SPACE (Kapitel 3.1), zählt das Volumen aus System-Telemetrie beobachtbarer Engineering-Arbeit: Commits, eröffnete Pull Requests, geänderte Codezeilen, hinterlassene Code-Review-Kommentare. Es ist die am leichtesten zu messende SPACE-Dimension, weil jedes dieser Ereignisse bereits automatisch von Tools protokolliert wird, die Engineering-Teams täglich nutzen, und genau diese Messleichtigkeit macht diese Dimension zur gefährlichsten, sie überzugewichten. Aktivität ist ein echtes, legitimes Signal, sorgfältig genutzt. Als eigenständiger Produktivitätsstellvertreter genutzt, ist sie die mit Abstand am meisten manipulierte, am meisten irreführende Metrikfamilie in der gesamten Geschichte der Messung der [Softwareentwicklung](https://en.wikipedia.org/wiki/Software_engineering).

Das Kernproblem ist, dass Aktivität Bewegung misst, nicht Wert. Eine Commit-Zahl unterscheidet nicht zwischen einem Commit, der ein schwieriges Problem elegant löste, und einem Commit, der eine bedeutsame Änderung in fünf aufteilte, um produktiver zu wirken (Kapitel 1.2s Substitutions-Manipulation, direkt auf diese Metrikfamilie angewendet). Geänderte Codezeilen belohnen Weitschweifigkeit gegenüber der weit wertvolleren Fähigkeit, unnötigen Code zu löschen. Eine Ingenieurin oder ein Ingenieur, die oder der einen ganzen Tag in tiefem, ununterbrochenem Nachdenken verbringt, bevor zehn elegante, gut getestete Zeilen geschrieben werden, wirkt nach diesen Metriken weniger „aktiv" als jemand, der alle zwanzig Minuten flache, ungeprüfte Änderungen committet, obwohl Ersteres sehr oft weit mehr echten Wert erzeugt.

Für große Teams ist die Versuchung, Aktivitätsmetriken zur individuellen Bewertung zu nutzen, konstant und gut dokumentiert, weil Aktivität leicht einer konkreten Person zuzuschreiben und leicht automatisch zu berechnen ist, anders als die schwierigeren, ehrlicheren Signale in den anderen SPACE-Dimensionen. Dieses Kapitel existiert speziell, um diese Versuchung zu benennen und Teams Sprache und Belege zu geben, ihr zu widerstehen, weil, sobald eine Organisation beginnt, Ingenieurinnen und Ingenieure einzeln nach Commit-Zahl oder Codezeilen zu ranken, der Schaden für Zusammenarbeit, Codequalität und Moral gut dokumentiert und schwer umkehrbar ist.

## Kernprinzipien

- **Aktivität misst Bewegung, nicht Wert.** Sie ist ein legitimes kontextuelles Signal, nie ein eigenständiger Produktivitätsstellvertreter.
- **Das ist die historisch am meisten missbrauchte Metrikfamilie in der Messung der Softwareentwicklung.** Diese Geschichte sollte als Warnung behandelt werden, nicht als Zufall.
- **Individuelles Aktivitätsranking ist fast immer schädlich.** Es schädigt Zusammenarbeit, belohnt sichtbare Beschäftigungstherapie und lädt fast sofort zu Manipulation ein.
- **Aktivitätsdaten sind am nützlichsten aggregiert, als Kontext für andere Dimensionen,** nicht als eigenständiges Signal über eine einzelne Person oder ein Team.
- **Tiefe, wertvolle Arbeit sieht auf einem Aktivitäts-Dashboard oft ruhig aus.** Die Metrikfamilie ist strukturell gegen genau die Art von Denken verzerrt, die die besten Engineering-Ergebnisse hervorbringt.

## Empfehlungen

### Einzelpersonen nie nach rohen Aktivitätszahlen ranken oder bewerten

Das ist die einzige härteste, wichtigste Regel dieses Kapitels. Commit-Zahl, Codezeilen und Pull-Request-Zahl sollten nie in einer individuellen Leistungsbeurteilung, einem vergleichenden Ranking oder irgendeinem Kontext erscheinen, in dem die Vergütung, das Ansehen oder der Ruf einer Ingenieurin oder eines Ingenieurs von der Zahl abhängt. Das folgt direkt aus Kapitel 1.2s Anreizexpositions-Prinzip: In dem Moment, in dem Aktivität zu einer anreizbehafteten individuellen Metrik wird, folgt fast sofort Manipulation, und das resultierende Verhalten, Commits aufblähen, Änderungen trivial aufsplitten, tiefe, unglamouröse Arbeit meiden, die wenige sichtbare Ereignisse erzeugt, schadet der Organisation aktiv.

### Aktivitätsdaten aggregiert nutzen, als Kontext, nicht als Urteil

Aktivitätsdaten werden echt nützlich, sobald sie auf Teamebene aggregiert und neben den anderen SPACE-Dimensionen gelesen werden: ein scharfer Rückgang der Commit-Aktivität auf Teamebene, der mit einem Anstieg der Zufriedenheit zusammenfällt, könnte darauf hindeuten, dass das Team endlich Raum hatte, tief nachzudenken und technische Schulden abzubauen, ein positives Muster, kein negatives. Isoliert gelesen, wirkt derselbe Rückgang alarmierend. Kontext aus den anderen Dimensionen ist das, was Aktivitätsdaten interpretierbar statt irreführend macht.

### Qualitätsnahe Aktivitätssignale gegenüber rohem Volumen bevorzugen

Wo Aktivitätsdaten überhaupt nützlich sind, sollten qualitätsangepasste Signale gegenüber Rohzahlen bevorzugt werden: Pull-Request-Größe relativ zur Review-Tiefe (Kapitel 2.9), oder das Verhältnis von neuem zu entferntem Code, was enthüllen kann, ob ein Team Komplexität anhäuft oder aktiv vereinfacht. Diese angepassten Signale sind noch immer Aktivitätsdimensions-Daten, widerstehen aber der gröbsten Manipulation, zu der Rohzahlen einladen.

### Speziell auf das Substitutions-Manipulationsmuster in Aktivitätsdaten achten

Der häufigste Weg, wie Aktivitätsmetriken manipuliert werden, ist genau Kapitel 1.2s Substitutionsmuster: echt bedeutsame Arbeit in viele kleine, triviale Ereignisse aufzuspalten, um eine Zahl aufzublähen. Wenn Commit- oder Pull-Request-Häufigkeit steigt, während die zugrunde liegende Komplexität oder Größe der Änderungen scharf sinkt, sollte untersucht werden, bevor einer echten Produktivitätsverbesserung Anerkennung gezollt wird, mit derselben diagnostischen Disziplin, die Kapitel 2.10 für Deployment-Frequenz empfiehlt.

### Aktivitäts-Theater explizit benennen und entmutigen

**Aktivitäts-Theater** ist Arbeit, die bewusst oder unbewusst primär geleistet wird, weil sie sichtbar und zählbar ist, statt weil sie wertvoll ist: häufige kleine Commits, auffällige nächtliche Aktivität oder sichtbare Geschäftigkeit in gemeinsamen Kanälen. Dieses Muster dem eigenen Team gegenüber explizit zu benennen, und transparent zu sein, dass die Führungsebene rohe Aktivität nicht nutzt, um Beitrag zu beurteilen, entfernt einen Großteil des Anreizes, dass es überhaupt entsteht.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Individuelles Aktivitätsranking | Einfach, leicht zu berechnen, fühlt sich direkt handlungsleitend an | Fast sofort manipuliert; schädigt Zusammenarbeit und Moral; misst das Falsche |
| Gar keine Aktivitätsmessung | Vermeidet das Missbrauchsrisiko vollständig | Verliert echt nützliches kontextuelles Signal zum Erkennen von Mustern auf Teamebene |
| Aggregierte Aktivität auf Teamebene, im Kontext gelesen | Liefert nützlichen Kontext ohne individuelles Risiko | Braucht Disziplin, gemeinsam mit anderen Dimensionen zu interpretieren, nicht isoliert |
| Qualitätsangepasste Aktivitätssignale | Widersteht der gröbsten Rohzahl-Manipulation | Komplexer zu berechnen und zu erklären als eine einfache Zählung |

Die zentrale Spannung ist **Nützlichkeit gegen Missbrauchsrisiko**. Aktivitätsdaten, sorgfältig aggregiert und im Kontext gelesen, sind echt nützlich, um Muster wie nicht nachhaltiges Tempo zu erkennen oder ein Team, das still Raum findet, technische Schulden anzugehen. Dieselben Daten, als individuelle Bewertungskarte genutzt, sind nahezu einheitlich schädlich. Die Lösung: nicht Aktivitätsdaten vollständig vermeiden, sondern eine harte organisatorische Regel gegen individuelle Nutzung aufstellen, während durchdachte, kontextualisierte Nutzung auf Teamebene erlaubt und sogar gefördert wird.

## Fragen für die Diskussion im Team

1. **Wurde je jemand in unserer Organisation formal oder informell anhand einer rohen Aktivitätszahl wie Commits oder Codezeilen bewertet?** Direkt sollte gefragt werden, und auf eine unbequeme, aber nötige Antwort sollte man vorbereitet sein; dieser Missbrauch geschieht oft still, durch eine beiläufige Bemerkung einer Führungskraft, ohne je offizielle Richtlinie zu werden.

2. **Wie würde Aktivitäts-Theater speziell in unserem Team aussehen, und haben wir Anzeichen davon gesehen?** Die konkrete, plausible Form zu benennen, die dieses Muster im eigenen Team annehmen könnte, macht es weit leichter zu erkennen, sollte es beginnen.

3. **Interpretieren wir, wenn sich unsere Aktivitätsdaten auf Teamebene bewegen, sie zusammen mit den anderen SPACE-Dimensionen, oder isoliert?** Ein isoliert gelesener Aktivitätsrückgang wirkt besorgniserregend; derselbe Rückgang, zusammen mit einer Zufriedenheits- oder Leistungsverbesserung gelesen, kann wie ein echt positives Muster aussehen. Die tatsächliche Überprüfungspraxis sollte gegen diese Unterscheidung geprüft werden.

4. **Haben wir je einen Anstieg der Commit- oder Pull-Request-Häufigkeit gesehen, begleitet von einer schrumpfenden durchschnittlichen Änderungsgröße, was auf triviale Aufspaltung statt echten Produktivitätsgewinn hindeutet?** Echte Daten sollten gezogen und auf dieses konkrete Substitutions-Manipulationsmuster geprüft werden.

5. **Wie sprechen wir aktuell darüber, „wer am meisten beiträgt" in unserem Team, und stützt sich dieses Gespräch implizit auf Aktivitätsdaten, selbst ohne formale Metrik?** Informelle, ungemessene Neigung zu sichtbarer Geschäftigkeit kann Wahrnehmung und Belohnung formen, selbst ohne explizite aktivitätsbasierte Richtlinie; das sollte ehrlich ans Licht gebracht werden.

6. **Wie sieht echt wertvolle, aber ruhige Arbeit, tiefes Denken, sorgfältiges Design, Mentoring, in unserem Team aus, und wie stellen wir sicher, dass sie trotz wenig sichtbarer Aktivitätsdaten anerkannt wird?** Diese Frage ist das positive Gegenstück zu den vorherigen: zu benennen, wie gute, ruhige Arbeit aussieht, hilft, sie davor zu schützen, zugunsten lauterer, zählbarerer Arbeit übersehen zu werden.

## Branchenperspektive

**Startup.** Bei einem kleinen, eng zusammenarbeitenden Team sind Aktivitätsdaten meist ohne jedes Dashboard sichtbar, und das Risiko individuellen Rankings, vor dem dieses Kapitel warnt, ist unwahrscheinlicher, schlicht weil alle bereits wissen, woran alle anderen arbeiten. Das Risiko ist stattdessen, dass eine Gründerin oder ein Gründer unbewusst sichtbar „beschäftigtes" Verhalten bei frühen Einstellungs- oder Beteiligungsentscheidungen bevorzugt.

**Kleinunternehmen.** Aktivitätsdaten aus vorhandenen Tools können für ein allgemeines Gefühl des Teamdurchsatzes betrachtet werden, aber es sollte widerstanden werden, sie zu nutzen, um einzelne Beitragende direkt zu vergleichen; der echte Wert eines kleinen Teams konzentriert sich oft auf wenige Menschen, die ruhige, hochwirksame Arbeit leisten, die eine Commit-Zahl-Sicht systematisch unterschätzen würde.

**Enterprise.** Hier ist die Versuchung individuellen Rankings am stärksten und am schädlichsten, weil Aktivitätsdaten das am leichtesten zu ziehende Signal für einen Leistungsbeurteilungsprozess über Tausende Ingenieurinnen und Ingenieure hinweg sind, und der Druck, *irgendeinen* quantifizierbaren Input zu finden, real ist. Eine explizite, kommunizierte, durchgesetzte Richtlinie gegen individuelles Aktivitätsranking sollte gebaut werden, und Leistungsbeurteilungspraktiken sollten periodisch geprüft werden, um zu bestätigen, dass die Richtlinie tatsächlich befolgt wird, nicht nur erklärt.

**Behörden.** Aktivitätsmetriken können verlockend sein, in einem öffentlichen Bericht als Produktivitätsbeleg zu zitieren („zehntausend Commits dieses Jahr"), aber diese Art Schlagzeile ist nahezu bedeutungslos und kann genau die falsche Prüfung einladen, sobald eine kundige Prüferin oder ein kundiger Prüfer darauf hinweist, dass rohe Aktivität nichts über Ergebnisse aussagt. Stattdessen sollten Ergebnis- und Leistungsdaten berichtet werden (Kapitel 3.3), und Aktivitätszahlen sollten in jeder extern gerichteten Kommunikation vermieden werden.

## Beispiele

**Enterprise.** Die Engineering-Führung eines Softwareunternehmens hatte, ohne formale Richtlinie, begonnen, informell individuelle Commit-Häufigkeitsdaten in Beförderungsgesprächen zu referenzieren. Eine interne Überprüfung, ausgelöst durch ein unabhängiges Fluktuationsanalyse-Projekt, fand, dass Ingenieurinnen und Ingenieure, die an den komplexesten, wertvollsten Systemen des Unternehmens arbeiteten und lange Phasen sorgfältiger Designarbeit brauchten, bevor überhaupt Code geschrieben wurde, systematisch niedrigere Commit-Zahlen hatten als jene an einfacheren, inkrementeller entwickelten Systemen, und dadurch subtil in Beförderungsgesprächen benachteiligt wurden. Die Führungsebene erließ eine explizite, kommunizierte Richtlinie, die Verweise auf Aktivitätszahlen in Leistungs- und Beförderungsgesprächen verbot, und verlagerte Beförderungsbelege hin zum Multi-Signal-Leistungsansatz aus Kapitel 3.3.

**Behörden.** Eine Digitaldienste-Behörde, unter Druck, einem legislativen Aufsichtsausschuss Produktivität nachzuweisen, schlug zunächst vor, Gesamt-Commits und geschriebene Codezeilen über ihr Engineering-Programm hinweg als Beleg für gelieferten Wert zu berichten. Eine interne technische Beraterin oder ein interner technischer Berater widersprach und stellte korrekt fest, dass diese Rahmung genau die falsche Prüfung einlade, da ein technisch versiertes Ausschussmitglied leicht darauf hinweisen könnte, dass rohes Code-Volumen nichts darüber aussagt, ob der Code funktionierte oder etwas bewirkte. Der überarbeitete Bericht der Behörde nutzte stattdessen Ergebnismetriken (Kapitel 5.3): Rückgang bürgerseitig gemeldeter Fehler und Anstieg erfolgreicher Selbstbedienungs-Abschlüsse, was der Befragung durch den Ausschuss weit besser standhielt, als es die Aktivitätszahlen getan hätten.

## Business Case: Motivation, ROI und TCO

Die Rendite, Aktivitätsmetriken richtig zu nutzen, kontextuell statt als individuelle Bewertungskarten, ist vermiedener Schaden: Organisationen, die Ingenieurinnen und Ingenieure individuell nach Aktivität ranken, sehen zuverlässig Manipulationsverhalten, reduzierte Zusammenarbeit (Ingenieurinnen und Ingenieure, die den eigenen sichtbaren Output schützen, statt Teamkolleginnen und -kollegen zu helfen) und eine systematische Verzerrung gegen die tiefe, hochwirksame Arbeit, die oft den meisten Wert erzeugt, während sie die wenigste sichtbare Aktivität erzeugt. Diesen Schaden umzukehren, sobald er in einer Leistungsbeurteilungskultur verankert ist, ist echt schwierig und langsam.

Die Gesamtkosten, diese Falle zu vermeiden, sind größtenteils organisatorische Disziplin: eine explizite, konsistent durchgesetzte Richtlinie gegen individuelles Aktivitätsranking, und ein Bekenntnis, stattdessen in die schwierigere, ehrlichere Leistungsmessung aus Kapitel 3.3 zu investieren. Diese Disziplin kostet weniger als die fehlgeleiteten Beförderungsentscheidungen, geschädigte Zusammenarbeit und das Manipulationsverhalten, die individuelle Aktivitätsmetriken über die Zeit zuverlässig erzeugen.

## Antipatterns und Fallstricke

- **Individuelles Ranking nach Commit-Zahl oder Codezeilen:** der mit Abstand schädlichste, historisch häufigste Missbrauch in diesem gesamten Buch.
- **Aktivitäts-Theater:** Arbeit, die primär für Sichtbarkeit statt Wert geleistet wird, eine vollständig vorhersehbare Reaktion auf aktivitätsbasierte Bewertung.
- **Einen Aktivitätsrückgang auf Teamebene isoliert interpretieren, ohne die anderen SPACE-Dimensionen zu prüfen:** kann ein echt positives Muster für ein besorgniserregendes halten.
- **Rohe Aktivitätszahlen in externer oder an die Führungsebene gerichteter Kommunikation zitieren:** lädt genau die falsche Prüfung ein und sagt wenig über echten Wert.
- **Tiefe, sorgfältige Arbeit, die wenige sichtbare Ereignisse erzeugt, systematisch unterschätzen:** eine strukturelle Verzerrung, die in diese gesamte Metrikfamilie eingebacken ist.
- **Informelle, richtlinienlose Aktivitätsverzerrung, die in Beförderungs- oder Beurteilungsgespräche einschleicht:** schädlich selbst ohne offizielle Metrik dahinter.

## Reifegradmodell

- **Stufe 1, Initiieren:** Aktivitätsmetriken werden formal oder informell genutzt, um Einzelpersonen zu bewerten oder zu ranken, ohne Bewusstsein für das Risiko.
- **Stufe 2, Entwickeln:** Manches Bewusstsein für das Risiko existiert, aber keine explizite Richtlinie verhindert, dass Aktivitätsdaten informell Beurteilungen oder Beförderungsgespräche beeinflussen.
- **Stufe 3, Standardisieren:** Eine explizite, kommunizierte organisationsweite Richtlinie verbietet individuelles Aktivitätsranking, und Aktivitätsdaten werden nur aggregiert, im Teamkontext genutzt.
- **Stufe 4, Steuern:** Leistungsbeurteilungs- und Beförderungspraktiken werden periodisch geprüft, um zu bestätigen, dass die Richtlinie in der Praxis befolgt wird, und qualitätsangepasste Aktivitätssignale ersetzen Rohzahlen, wo Aktivitätsdaten überhaupt genutzt werden.
- **Stufe 5, Orchestrieren:** Die Organisation hat die Bewertungskultur nachweislich von Aktivitätsmetriken hin zum Multi-Signal-Leistungsansatz aus Kapitel 3.3 verschoben, mit sichtbarer Verbesserung der Zusammenarbeit und reduziertem Manipulationsverhalten als Beleg, dass die Verschiebung funktioniert hat.

## Diskussionsanregungen

1. Hat sich hier je jemand bewertet gefühlt, selbst informell, danach, wie „beschäftigt" die eigene Aktivität aussah?
2. Wie würde Aktivitäts-Theater konkret in unserem Team aussehen?
3. Haben wir eine explizite, schriftliche Richtlinie gegen individuelles Aktivitätsranking, und wird sie tatsächlich befolgt?
4. Welche ruhige, hochwertige Arbeit in unserem Team erzeugt aktuell die wenigsten sichtbaren Aktivitätsdaten?
5. Wie würden wir unsere Leistungsbeurteilungsbelege umgestalten, um Aktivitätszahlen vollständig zu entfernen?

## Die wichtigsten Erkenntnisse

- Aktivität misst **Bewegung, nicht Wert**; sie ist die historisch am meisten missbrauchte Metrikfamilie in der Softwareentwicklung.
- Einzelpersonen sollten **nie nach rohen Aktivitätszahlen geranked oder bewertet werden**; das ist die härteste und wichtigste Regel dieses Kapitels.
- Aktivitätsdaten sollten **aggregiert, als Kontext** für die anderen SPACE-Dimensionen genutzt werden, nie als eigenständiges Urteil.
- Speziell auf **Aktivitäts-Theater** und das **Substitutions-Manipulationsmuster** (Kapitel 1.2) innerhalb dieser Metrikfamilie sollte geachtet werden.
- Tiefe, wertvolle Arbeit erzeugt oft **die wenigsten sichtbaren Aktivitätsdaten**; sie sollte davor geschützt werden, systematisch unterschätzt zu werden.

## Quellen und weiterführende Literatur

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, von Tom DeMarco und Timothy Lister (das Argument gegen die Messung von Ingenieurinnen und Ingenieuren nach sichtbarer Geschäftigkeit).
- *Deep Work: Rules for Focused Success in a Distracted World*, von Cal Newport (der Wert ruhiger, ununterbrochener Arbeit, den Aktivitätsmetriken systematisch unterzählen).
- *The Tyranny of Metrics*, von Jerry Z. Muller (Metrik-Fixierung und ihre Kosten, direkt anwendbar auf aktivitätsbasierte Bewertung).
