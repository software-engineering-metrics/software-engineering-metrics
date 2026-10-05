# 1.6 Statistische Kompetenz für Engineering-Metriken

## Überblick und Motivation

Für ein gutes Metrikprogramm ist kein Statistikstudium nötig, aber eine kleine Zahl konkreter, häufiger Fehler muss vermieden werden, die ansonsten gut governte, gut instrumentierte Metriken aktiv irreführend machen. Ein Team kann alles richtig machen, eine klare Entscheidung benennen, Goodharts Gesetz vermeiden, auf Ergebnisse gewichten, Eigentümerschaft governen, zuverlässig instrumentieren, und dennoch die falsche Schlussfolgerung ziehen, weil es einen Durchschnitt ablas, wo ein Perzentil nötig gewesen wäre, Rauschen für einen Trend hielt oder auf einen als Ursache getarnten Zufall hereinfiel. Dieses Thema ist das Mindestmaß an statistischem Urteilsvermögen, das dieses Buch für jedes spätere Thema bei der Leserin oder dem Leser bereits voraussetzt.

Das Kernproblem ist, dass Engineering-Metriken nach den Maßstäben formaler Statistik meist verrauscht, schief verteilt und mit kleiner Stichprobe sind. Die wöchentliche Deploy-Zahl eines einzelnen Teams ist keine glatte Glockenkurve; es ist eine Handvoll Datenpunkte mit gelegentlichen großen Ausreißern (eine große Veröffentlichung, eine Incident-getriebene Rollback-Serie). Naive Intuitionen, die für große, wohlverhaltene Datensätze gebaut wurden, auf diese Art von Daten anzuwenden, erzeugt regelmäßig selbstsichere, falsche Schlussfolgerungen. Zu lernen, wann eine Zahl zu verrauscht ist, um ihr zu vertrauen, wann ein Durchschnitt lügt, und wann zwei gemeinsam wandernde Dinge nichts über Kausalität aussagen, ist keine optionale Strenge, es ist das, was ein Metrikprogramm, das einer Organisation etwas Wahres beibringt, von einem unterscheidet, das ihr etwas plausibel klingend Falsches beibringt.

Auf Konzern- und Behördenebene verstärken sich statistische Fehler, weil eine irreführende Schlussfolgerung, einmal von der Führungsebene akzeptiert, in vielen Teams zur Handlungsgrundlage wird, bevor jemand daran denkt, die zugrunde liegende Analyse erneut zu prüfen. Ein statistisch naiver Vergleich zwischen zwei Bereichen, oder zwischen vorher und nachher einer großen Reorganisation, kann Ressourcenentscheidungen über Jahre auf Basis von nichts weiter als Rauschen oder einer nicht kontrollierten Störvariable formen. Dieses Thema existiert, um diesen Fehler weniger wahrscheinlich zu machen.

## Kernprinzipien

- **Ein Median oder Perzentil sagt meist mehr aus als ein Durchschnitt.** Engineering-Daten sind routinemäßig durch Ausreißer schief verteilt, die Durchschnitte absorbieren und Perzentile nicht.
- **Kleine Stichproben erzeugen verrauschte Zahlen.** Ein aus einer Handvoll Ereignissen berechneter Prozentsatz schwankt stark aus Gründen, die nichts mit echter Veränderung zu tun haben.
- **Regression zur Mitte täuscht Menschen ständig.** Auf einen ungewöhnlich guten oder schlechten Wert folgt tendenziell ein normalerer, mit oder ohne jeden Eingriff.
- **Korrelation ist keine Kausalität, und Störvariablen sind überall.** Zwei gemeinsam wandernde Metriken können eine verborgene dritte Ursache teilen, statt dass eine die andere treibt.
- **Eine [Kontrollkarte](https://en.wikipedia.org/wiki/Control_chart) schlägt einen einzelnen Vorher-Nachher-Vergleich.** Die normale Schwankungsbreite zu sehen, ist das, was eine echte Verschiebung von Rauschen unterscheiden lässt.

## Empfehlungen

### Standardmäßig Median und Perzentile für schief verteilte Daten verwenden

Zeitbasierte Engineering-Metriken, Lead Time, Incident-Wiederherstellungszeit, Antwortlatenz, sind fast immer rechtsschief: Die meisten Werte häufen sich niedrig, mit einem langen Ausläufer gelegentlicher großer Ausreißer. Ein von diesem Ausläufer gezogener Durchschnitt kann ein Bild malen, das kein typischer Fall tatsächlich zeigt. Der **Median** (der mittlere Wert, bei dem die Hälfte der Beobachtungen darüber und die Hälfte darunter liegt) sollte zusammen mit dem **90.** oder **95. Perzentil** (dem Wert, unter dem 90 % oder 95 % der Beobachtungen liegen) berichtet werden, was zusammen sowohl den typischen Fall als auch den Worst-Case-Ausläufer zeigt, den ein Team tatsächlich erlebt. Das KPI-Kapitel des begleitenden Buches `software-engineering-guide` und jedes Liefermetrik-Thema in Teil 2 dieses Buches setzen diese Gewohnheit durchgängig voraus.

### Wissen, wann eine Stichprobe zu klein ist, um ihr zu vertrauen

Eine aus drei Deploys in einer ruhigen Woche berechnete Change Failure Rate ist kein bedeutsames Signal; ein einziger Fehlschlag bewegt den Prozentsatz über Nacht von 0 % auf 33 %, aus Gründen, die möglicherweise nichts mit dem zugrunde liegenden Risiko zu tun haben. Bevor auf eine prozentbasierte Metrik reagiert wird, sollte die zugrunde liegende Zählung geprüft werden. Als praktische Faustregel sollte eine aus weniger als etwa zwanzig bis dreißig zugrunde liegenden Ereignissen berechnete Rate als verrauscht behandelt werden und ein längeres Beobachtungsfenster verlangen, bevor eine Schlussfolgerung gezogen wird, und das sollte explizit auf dem Dashboard vermerkt werden, statt einen volatilen Kleinstichproben-Prozentsatz mit derselben Zuversicht zu präsentieren wie einen stabilen aus großer Stichprobe.

### Auf Regression zur Mitte achten, bevor ein Eingriff gewürdigt wird

Wenn auf die schlechteste Incident-Woche eines Teams aller Zeiten Aufmerksamkeit der Führungsebene und eine anschließende Verbesserung folgen, ist es verlockend, den Eingriff dafür zu würdigen. Oft wäre ein Teil dieser Verbesserung ohnehin geschehen, weil auf einen ungewöhnlich extremen Wert tendenziell ein typischerer folgt, rein als statistisches Artefakt, ein Phänomen namens **Regression zur Mitte**. Dagegen sollte geschützt werden, indem gegen eine längere historische Baseline verglichen wird statt gegen den einzelnen extremen Datenpunkt, der die Aufmerksamkeit ausgelöst hat, und indem angemessen zurückhaltend beurteilt wird, wie viel einer beobachteten Verbesserung einer konkreten Handlung zugeschrieben werden sollte.

### Nach Störvariablen suchen, bevor behauptet wird, eine Metrik habe ein Ergebnis verursacht

Wenn sich zwei Metriken gemeinsam bewegen, etwa Deployment-Frequenz und Kundenzufriedenheit gemeinsam steigen, sollte dem Reflex widerstanden werden, die eine als Ursache der anderen zu behaupten, bevor eine **Störvariable** in Betracht gezogen wird: ein verborgener dritter Faktor, der beide treibt. Die Einführung eines neuen Features könnte unabhängig sowohl die Deploy-Frequenz (mehr Folgekorrekturen) als auch die Zufriedenheit (das Feature selbst) steigern, ganz ohne kausale Verbindung zwischen den beiden Metriken. Bevor eine Korrelation als Beweis für Kausalität präsentiert wird, sollte aktiv gefragt werden, was sich sonst noch zur selben Zeit geändert hat, das beide Bewegungen erklären könnte.

### Eine Kontrollkarte statt eines einzelnen Vorher-Nachher-Schnappschusses verwenden

Eine **Kontrollkarte** stellt eine Metrik über die Zeit dar, mit ihrer normalen Schwankungsbreite explizit gezeigt, typischerweise als Bänder um einen zentralen Durchschnitt. Das erlaubt, eine echte Verschiebung, einen Datenpunkt oder eine anhaltende Serie außerhalb der normalen Spanne, von gewöhnlichem Rauschen zu unterscheiden, das ein einzelner Vorher-Nachher-Vergleich nicht auseinanderhalten kann. Bevor erklärt wird „die Zahl hat sich nach der Änderung verbessert", sollten genug historische Daten geplottet werden, um zu sehen, wie normale Schwankung aussieht, und geprüft werden, ob der Wert nach der Änderung tatsächlich außerhalb davon liegt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Durchschnitte | Einfach, vertraut, leicht zu berechnen | Durch Ausreißer bei schief verteilten Engineering-Daten verzerrt |
| Median und Perzentile | Robust gegen Ausreißer, zeigen typischen Fall und Ausläufer gemeinsam | Nicht-technischem Publikum etwas weniger vertraut |
| Einzelner Vorher-Nachher-Vergleich | Schnell, intuitiv, leicht zu präsentieren | Anfällig für Regression zur Mitte und für Rauschen |
| Kontrollkarten und längere Baselines | Unterscheidet echte Verschiebungen zuverlässig von Rauschen | Braucht mehr historische Daten und mehr Erklärung für nicht-technisches Publikum |

Die zentrale Spannung ist **Einfachheit gegen Strenge**. Durchschnitte und einzelne Vorher-Nachher-Vergleiche sind leichter zu berechnen und zu erklären, weshalb sie in beiläufiger Berichterstattung dominieren, aber sie sind auch die zwei Techniken, die bei der Art von verrauschten, schief verteilten Daten, die die Metriken dieses Buches erzeugen, am wahrscheinlichsten eine selbstsichere, falsche Schlussfolgerung produzieren. Die Lösung: Für jede Entscheidung mit echter Konsequenz sollte standardmäßig zu den strengeren Techniken gegriffen werden, Median, Perzentile und Kontrollkarten, und die einfacheren Techniken sollten für Blicke mit geringer Tragweite reserviert werden, bei denen eine fehlerhafte Ablesung wenig kostet.

## Fragen für die Diskussion im Team

1. **Welche unserer Dashboard-Kacheln berichten einen Durchschnitt, wo ein Median oder Perzentil eine wahrere Geschichte erzählen würde?** Zeitbasierte Engineering-Metriken sind fast immer schief verteilt, und ein Durchschnitt auf schiefen Daten kann gut aussehen, während der typische Fall oder der Worst-Case-Ausläufer eine ganz andere Geschichte erzählt. Die zeitbasierten Kacheln sollten gezielt auf diese Verwechslung geprüft werden.

2. **Wie klein ist die zugrunde liegende Stichprobe hinter unseren prozentbasierten Metriken, und behandeln wir eine Metrik aus zehn Ereignissen mit derselben Zuversicht wie eine aus tausend?** Eine volatile Kleinstichproben-Rate, ohne ihre zugrunde liegende Zählung präsentiert, lädt zu Überreaktion auf Rauschen ein. Die Change-Failure-Rate und ähnliche prozentbasierte Kacheln sollten auf diese Lücke geprüft werden.

3. **Haben wir jemals einem Eingriff eine Verbesserung zugeschrieben, die Regression zur Mitte ohnehin erzeugt hätte?** Das ist einer der leichtesten statistischen Fehler und einer der schwersten, ihn nachträglich zu bemerken, weil der Eingriff und die Verbesserung tatsächlich in dieser Reihenfolge geschahen. Eine jüngste „wir haben es behoben"-Geschichte sollte erneut betrachtet und ehrlich gefragt werden, ob der Baseline-Vergleich lang genug war, um das auszuschließen.

4. **Wo haben wir angenommen, eine Metrik habe eine andere verursacht, ohne auf eine Störvariable zu prüfen?** Dass sich zwei Dinge gemeinsam bewegen, ist häufig; dass das eine das andere verursacht, ist eine stärkere Behauptung, die mehr Belege braucht. Eine Korrelation, an die das Team aktuell glaubt, sollte ausgewählt und versucht werden, eine plausible Störvariable zu benennen, die sie ganz ohne kausale Verbindung erklären würde.

5. **Haben wir genug historische Daten, um zu wissen, wie normale Schwankung für unsere wichtigsten Metriken aussieht, oder vergleichen wir einzelne Punkte?** Ohne ein Gefühl für die normale Spanne wirkt jeder einzelne Wert je nach Stimmung alarmierend oder beruhigend, statt evidenzbasiert. Es sollte diskutiert werden, ob die meistbeobachtete Metrik jemals als Kontrollkarte geplottet wurde statt als einzelne Zahl.

6. **Wie kommunizieren wir Unsicherheit aktuell gegenüber nicht-technischen Stakeholdern, und suggeriert unser Dashboard mehr Präzision, als die Daten tatsächlich stützen?** Ein Diagramm ohne Hinweis auf normale Schwankung oder Stichprobengröße kann eine Führungsebene dazu bringen, auf Rauschen überzureagieren oder, ebenso oft, ein echtes Signal als Rauschen abzutun. Es sollte diskutiert werden, wie die eigene Berichterstattung das ehrlich kommunizieren könnte, ohne unlesbar zu werden.

## Branchenperspektive

**Startup.** Kleine Teams erzeugen fast überall kleine Stichproben, was bedeutet, dass die Kleinstichproben-Vorsicht dieses Themas ständig zählt. Starken Schlussfolgerungen aus einer einzelnen schlechten oder einer einzelnen großartigen Woche sollte widerstanden werden; mit nur einer Handvoll Datenpunkte ist die ehrliche Antwort auf „ist das ein Trend" oft „wir wissen es noch nicht".

**Kleinunternehmen.** Eingebaute Dashboards von Standard-Tools greifen oft standardmäßig auf Durchschnitte und Einzelperioden-Vergleiche zurück, weil diese am einfachsten zu berechnen und darzustellen sind. Wo das Tool es erlaubt, sollte für zeitbasierte Metriken zu Medianen gewechselt werden, und jede „diesen Monat um 40 % gestiegen"-Schlagzeile, die aus einer kleinen zugrunde liegenden Zählung berechnet wurde, sollte skeptisch betrachtet werden.

**Enterprise.** Statistische Fehler auf dieser Ebene fließen in Ressourcen- und Reorganisationsentscheidungen ein, die Hunderte Menschen betreffen. In Analystinnen und Analysten oder eingebettete Data-Practitioner investiert werden sollte, die echte Kontrollkarten bauen und auf Störvariablen prüfen können, bevor ein Vergleich zwischen Geschäftsbereichen oder ein Vorher-Nachher-Vergleich einer großen Änderung der Führungsebene als feststehende Tatsache präsentiert wird.

**Behörden.** Ein statistisch naiver Vergleich, der einen öffentlichen Bericht oder eine Budgetbegründung speist, kann überproportionale reale Konsequenzen haben und lädt genau zu der Prüfung ein, die schlampige Analyse öffentlich bloßstellt. Die strengeren Techniken, Kontrollkarten, dokumentierte Stichprobengrößen, Störvariablenprüfungen, sollten als ständige Praxis für alles gelten, was extern veröffentlicht wird, nicht nur als gelegentliche Bemühung.

## Beispiele

**Enterprise.** Die Führungsebene eines Softwareunternehmens feierte im Monat nach der Einführung einer neuen Code-Review-Richtlinie eine Verbesserung der Change Failure Rate um 25 % und schrieb dies direkt der Richtlinie zu. Eine genauere Betrachtung ergab, dass der „Vorher"-Monat ungewöhnlich schlecht gewesen war, getrieben durch eine misslungene Migration eines einzelnen Teams, und die zugrunde liegende Stichprobengröße lag in beiden Monaten unternehmensweit unter dreißig Deploys. Eine Kontrollkarte mit zwölf Monaten Historie zeigte, dass der neue Wert gut innerhalb der normalen Schwankung lag, keine echte Stufenänderung, und die tatsächliche Wirkung der Richtlinie, obwohl real, war weit kleiner als die Schlagzeilenzahl nahelegte.

**Behörden.** Eine Nahverkehrsbehörde berichtete eine große Verbesserung der Pünktlichkeit im Jahresvergleich für ein neu digitalisiertes Fahrplansystem, wobei ein einzelnes „Vorher"-Quartal mit einem einzelnen „Nachher"-Quartal verglichen wurde. Eine unabhängige Überprüfung fand, dass das „Vorher"-Quartal mit einer unabhängigen Bausperrung zusammenfiel, die die Leistung im gesamten Netz gedrückt hatte, und eine längere Baseline zeigte, dass sich die Pünktlichkeit bereits erholt hatte, bevor das neue System startete. Der überarbeitete Bericht der Behörde nutzte eine vollständige mehrjährige Kontrollkarte und schrieb dem neuen System eine bescheidenere, aber besser zu rechtfertigende Verbesserung zu.

## Business Case: Motivation, ROI und TCO

Die Rendite statistischer Kompetenz ist vermiedene Fehlleitung: Eine Organisation, die eine Verbesserung korrekt zuschreibt oder Rauschen korrekt als Rauschen erkennt, investiert ihre nächste Investition dort, wo sie tatsächlich hilft, statt einem Phantomeffekt hinterherzujagen. Das Einzelhandelsbeispiel oben ist typisch: Ein Unternehmen, das glaubte, seine Review-Richtlinie allein habe eine Verbesserung von 25 % bewirkt, investiert womöglich zu wenig in andere echte Beitragende oder überschätzt den Wert der Richtlinie auf eine Weise, die künftige Entscheidungen irreführt.

Die Gesamtkosten statistischer Strenge sind größtenteils eine Gewohnheitsänderung, kein neues Tooling: einen Median statt eines Durchschnitts wählen, eine Stichprobengröße prüfen, bevor reagiert wird, eine längere Baseline plotten, bevor ein Erfolg erklärt wird. Diese Gewohnheiten kosten wenig in der Einführung und verhindern die weit größeren, schwerer zu erkennenden Kosten von Entscheidungen, die auf selbstsicheren, falschen Schlussfolgerungen beruhen.

## Antipatterns und Fallstricke

- **Einen Durchschnitt bei schief verteilten zeitbasierten Daten berichten:** verbirgt den typischen Fall und den Ausläufer hinter einer einzigen irreführenden Zahl.
- **Auf einen Prozentsatz ohne sichtbare Stichprobengröße reagieren:** behandelt Rauschen aus einer Handvoll Ereignissen, als sei es ein stabiler, bedeutsamer Trend.
- **Einem Eingriff eine Verbesserung zuschreiben, ohne Regression zur Mitte auszuschließen:** ein häufiger, leicht zu machender, schwer zu bemerkender Fehler.
- **Aus Korrelation Kausalität behaupten, ohne Störvariablen zu bedenken:** überschätzt, was die Daten tatsächlich stützen.
- **Einen einzelnen Vorher-Nachher-Schnappschuss vergleichen, statt eine längere Baseline zu plotten:** kann eine echte Verschiebung nicht von gewöhnlicher Schwankung unterscheiden.
- **In der Berichterstattung an die Führungsebene mehr Präzision suggerieren, als die Daten stützen:** lädt zu Überreaktion auf Rauschen oder zur Abtuung eines echten Signals ein.

## Reifegradmodell

- **Stufe 1, Initiieren:** Metriken werden als rohe Durchschnitte und einzelne Vorher-Nachher-Schnappschüsse berichtet, ohne Beachtung von Stichprobengröße, Schiefe oder Baseline-Schwankung.
- **Stufe 2, Entwickeln:** Manche Analystinnen und Analysten wenden informell Mediane oder Perzentile an, aber es gibt keine konsistente organisationsweite Praxis, und Störvariablen werden selten geprüft.
- **Stufe 3, Standardisieren:** Median und Perzentile sind der Standard für schief verteilte zeitbasierte Metriken; Stichprobengrößen werden organisationsweit neben prozentbasierten Metriken gezeigt.
- **Stufe 4, Steuern:** Kontrollkarten mit historischen Baselines sind Standardpraxis für jede Behauptung einer echten Verschiebung; Störvariablen werden aktiv bedacht, bevor kausale Behauptungen in der Berichterstattung aufgestellt werden.
- **Stufe 5, Orchestrieren:** Statistische Strenge ist in das Tooling selbst eingebaut, Dashboards stellen standardmäßig Perzentile und Kontrollbänder dar, und die Organisation kann nachweisen, dass eine konkrete vergangene Entscheidung korrigiert wurde, weil eine statistisch naive Ablesung entdeckt wurde, bevor sie die Strategie formte.

## Diskussionsanregungen

1. Welche unserer aktuellen Dashboard-Schlagzeilen sähen anders aus, wenn wir einen Durchschnitt durch einen Median ersetzten?
2. Haben wir jemals eine Entscheidung geändert, weil sich herausstellte, dass ein Prozentsatz auf einer weit kleineren Stichprobe beruhte, als angenommen?
3. Welche jüngste „wir haben diese Metrik verbessert"-Geschichte sollten wir auf Regression zur Mitte hin erneut prüfen?
4. Wo könnten zwei unserer Metriken durch eine verborgene dritte Ursache korrelieren, statt dass eine die andere treibt?
5. Zeigen unsere wichtigsten Diagramme eine normale Schwankungsbreite, oder nur eine einzelne Trendlinie?

## Die wichtigsten Erkenntnisse

- **Median und Perzentile** sollten gegenüber Durchschnitten für schief verteilte, zeitbasierte Engineering-Metriken bevorzugt werden.
- Ein **Prozentsatz aus kleiner Stichprobe** sollte als verrauscht behandelt werden, und das sollte explizit vermerkt werden, statt darauf wie auf einen stabilen Trend zu reagieren.
- Auf **Regression zur Mitte** sollte geachtet werden, bevor einem Eingriff eine Verbesserung zugeschrieben wird, die auf einen ungewöhnlich schlechten Wert folgte.
- **Korrelation ist keine Kausalität**; nach Störvariablen sollte aktiv gesucht werden, bevor eine kausale Behauptung aufgestellt wird.
- Eine **Kontrollkarte mit echter historischer Baseline** sollte genutzt werden, kein einzelner Vorher-Nachher-Schnappschuss, um eine echte Verschiebung von gewöhnlichem Rauschen zu unterscheiden.

## Quellen und weiterführende Literatur

- *The Signal and the Noise*, von Nate Silver (echtes Signal von Rauschen in unvollkommenen Daten unterscheiden).
- *How to Measure Anything*, von Douglas W. Hubbard (statistisches Denken für organisatorische Messung).
- *Understanding Variation: The Key to Managing Chaos*, von Donald J. Wheeler (Kontrollkarten und die Unterscheidung zwischen gewöhnlicher und besonderer Schwankungsursache).
- *Thinking, Fast and Slow*, von Daniel Kahneman (kognitive Verzerrungen einschließlich Regression zur Mitte und der Illusion kausaler Erzählungen).
- *The Visual Display of Quantitative Information*, von Edward R. Tufte (ehrliche, hochintegre Darstellung quantitativer Daten).
