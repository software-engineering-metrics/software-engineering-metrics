# 1.2 Goodharts Gesetz und die Psychologie der Metriken

## Überblick und Motivation

[Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law), benannt nach dem Ökonomen Charles Goodhart, wird meist so formuliert: Wenn eine Messgröße zum Ziel wird, hört sie auf, eine gute Messgröße zu sein. Goodharts ursprüngliche Beobachtung von 1975 betraf die Geldpolitik, aber die spätere Neuformulierung der Anthropologin Marilyn Strathern ist die Version, die Software-Teams tatsächlich brauchen, und es ist der Satz, auf dem dieses gesamte Buch aufbaut. Jede Metrik in jedem späteren Thema, Deployment-Frequenz, Testabdeckung, Zufriedenheitswerte, trägt dieses Risiko, und jede Empfehlung in diesem Buch ist in irgendeiner Form eine Strategie, damit umzugehen.

Der Mechanismus ist kein Geheimnis. Menschen reagieren auf Anreize, und eine Metrik, die mit einer Belohnung, einer Beurteilung oder einem Ruf verknüpft ist, ist ein Anreiz, ganz gleich, ob das so beabsichtigt war. Sobald ein Team weiß, dass „Deployment-Frequenz" beobachtet wird, ist der billigste Weg, diese Zahl zu bewegen, nicht immer der beabsichtigte: eine bedeutsame Änderung in fünf triviale Deploys aufzuteilen, lässt die Zahl steigen, während sich real nichts verbessert hat. Das ist keine Geschichte über böswillige Akteure. Gewöhnliche, wohlmeinende Ingenieurinnen und Ingenieure reagieren genau so auf schlecht gestaltete Anreize, weil der Anreiz, nicht die Absicht dahinter, das Verhalten unter Druck formt.

Für große Organisationen steht mehr auf dem Spiel, weil die Distanz zwischen der Person, die die Metrik entwirft, und der Person, deren Verhalten sie formt, mit der Größe wächst. Eine Teamleitung, die eine Metrik für das eigene achtköpfige Team baut, kann Manipulation direkt beobachten und den Kurs schnell korrigieren. Eine Metrik, die auf eine sechshundertköpfige Abteilung ausgerollt oder in einem behördlichen Leistungsbericht veröffentlicht wird, den ein Parlament liest, durchläuft Schichten von Menschen, die ihre Urheberin oder ihren Urheber nie getroffen haben und jeden Grund haben, den Buchstaben der Metrik als das Ziel zu behandeln. Die Verzerrung verstärkt sich mit der Distanz, und genau deshalb liegt der Schwerpunkt des Buches in diesem Thema, nicht in einem späteren.

## Kernprinzipien

- **Davon ausgehen, dass jede mit Anreizen verknüpfte Metrik manipuliert wird.** Von der ersten Version an dagegen gestalten, nicht erst, nachdem die Verzerrung entdeckt wurde.
- **Manipulation ist rational, nicht böswillig.** Menschen reagieren vernünftig auf den geschaffenen Anreiz; sie dafür verantwortlich zu machen, behebt nichts.
- **Distanz zur Eigentümerin oder zum Eigentümer der Metrik erhöht das Verzerrungsrisiko.** Je weiter eine Zahl sich von der Person entfernt, die ihre Absicht versteht, desto mehr wird sie zum Buchstaben statt zum Geist der Regel.
- **Verhältnisse und Spannen widerstehen Manipulation besser als Rohzahlen.** Eine Rohzahl belohnt Volumen; ein gut gewähltes Verhältnis belohnt das tatsächlich gewünschte Verhalten.
- **Eine Leitplanke ist bei einer mit Anreizen verknüpften Metrik nicht optional.** Jede Metrik, an die eine Belohnung geknüpft wird, braucht eine gepaarte Gegenmetrik, die sich nicht verschlechtern darf.

## Empfehlungen

### Jede Metrik nach Anreizexposition klassifizieren

Bevor eine Metrik irgendwo sichtbar veröffentlicht wird, sollte direkt gefragt werden: Hängt die Belohnung, Beurteilung, der Ruf oder das Budget irgendjemandes davon ab, dass sich diese Zahl in eine bestimmte Richtung bewegt? Wenn ja, handelt es sich um eine anreizbehaftete Metrik, die eine Leitplanke (siehe unten) braucht, bevor sie live geht. Wenn nein, ist es eine diagnostische Metrik (Thema 1.1) mit geringerem, aber nie null, Manipulationsrisiko, weil Menschen auch eine Zahl formen können, bei der sie nur erwarten, später danach beurteilt zu werden, selbst ohne heute formal daran geknüpften Anreiz.

### Verhältnisse, Raten und Kohorten gegenüber Rohzahlen bevorzugen

Eine Rohzahl wie „geschlossene Tickets" lässt sich manipulieren, indem mehr von etwas Geringwertigem getan wird. Ein Verhältnis wie „Prozentsatz der beim ersten Kontakt gelösten Tickets" belohnt das zugrunde liegende Verhalten statt das Volumen. Eine **Kohorte**, eine Gruppe, die durch einen gemeinsamen Startpunkt definiert ist, etwa alle Deploys einer bestimmten Woche, verhindert, dass sich ein schlechter jüngerer Trend in einem schmeichelhaften langfristigen Aggregat versteckt. Wo immer zwischen einer Zählung und einer Rate gewählt werden kann, die dasselbe zugrunde liegende Verhalten erfasst, sollte die Rate gewählt werden.

### Jede anreizbehaftete Metrik mit einer Leitplanke paaren

Eine **Leitplanken-Metrik** ist eine gepaarte Gegenmetrik, die sich nicht verschlechtern darf, während sich die primäre Metrik verbessert. Deployment-Frequenz wird mit der Change Failure Rate gepaart; Lead Time mit der Rate entwichener Defekte; die Bearbeitungszeit eines Support-Teams mit der Kundenzufriedenheit. Die Leitplanke ist das, was billige Manipulation sichtbar teuer macht: Ein Team, das die anreizbehaftete Zahl verbessert, indem es die Leitplanke verschlechtert, wird durch die Paarung entdeckt, nicht durch Glück. Die Leitplanke sollte gleichzeitig mit der primären Metrik entworfen werden, nie erst nachträglich, sobald Manipulation bereits entdeckt wurde.

### Auf die vier klassischen Manipulationsmuster achten

Verzerrung unter Goodharts Gesetz fällt tendenziell in eine kleine Zahl wiedererkennbarer Formen. **Schwellenwert-Manipulation** optimiert bis genau an ein Ziel heran und hört dann auf (ein Testabdeckungsziel von 95 % erzeugt triviale Tests, um exakt 95 % zu erreichen, keine echte Abdeckung). **Definitions-Manipulation** ändert, was zählt, statt was geschieht (die Neudefinition von „gelöst", um schwierige Fälle auszuschließen). **Zeitpunkt-Manipulation** verschiebt, wann Arbeit erfasst wird, statt wann sie tatsächlich geschah (Deploys kurz vor Schließung eines Berichtsfensters bündeln). **Substitutions-Manipulation** liefert den Buchstaben der Metrik, während ihre Absicht aufgegeben wird (eine reale Änderung in viele triviale aufsplitten, um die Deployment-Frequenz aufzublähen). Diese Muster dem eigenen Team gegenüber explizit zu benennen, macht es weit leichter, sie zu erkennen, wenn sie in den eigenen Zahlen auftauchen.

### Messung von Belohnung trennen, wo immer möglich

Die stärkste Leitplanke überhaupt ist strukturell: die Metrik von individueller Belohnung zu entkoppeln. Eine Metrik, die rein zum Verständnis eines Systems genutzt wird, ohne dass das Gehalt, die Bewertung oder das Ansehen einer Person von ihrer Richtung abhängt, ist weit geringerem Manipulationsdruck ausgesetzt als eine an eine Bewertung geknüpfte. Deshalb ist die Unterscheidung zwischen diagnostischer und bewertender Nutzung aus Thema 1.1 in der Praxis so wichtig: Eine Metrik diagnostisch zu halten, ist oft billiger und wirksamer als jede noch so aufwendige nachträgliche Leitplanken-Konstruktion.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Rohzahlen | Einfach zu berechnen und zu erklären | Stark manipulierbar durch Volumen |
| Verhältnisse und Raten | Belohnen das richtige Verhalten, widerstehen Volumen-Manipulation | Können ein schrumpfendes Nenner-Problem verbergen |
| Leitplanken-Paarung | Macht billige Manipulation sichtbar teuer | Verdoppelt die zu definierenden, zu besitzenden und zu pflegenden Metriken |
| Nur diagnostisch (keine individuelle Belohnung) | Geringster Manipulationsdruck aller Optionen | Schwächerer direkter Motivationshebel für die Führungsebene |
| Stark anreizbehaftete Metriken | Starke, schnelle Verhaltensreaktion | Hohes Verzerrungsrisiko, oft schon innerhalb eines Berichtszyklus |

Die zentrale Spannung ist **Motivationskraft gegen Verzerrungsrisiko**. Die Metriken, die Verhalten am schnellsten bewegen, weil eine Zahl direkt mit Belohnung verknüpft ist, sind genau jene, die Goodharts Gesetz am stärksten ausgesetzt sind. Die Lösung: starke Anreize für Ergebnismetriken reservieren, die sich tatsächlich schwer billig manipulieren lassen, und alles, was mit Anreizen versehen wird, mit einer gleichzeitig entworfenen Leitplanke paaren, nicht erst nachträglich anbauen, sobald die erste Verzerrung auftritt.

## Fragen für die Diskussion im Team

1. **Was ist für jede Metrik, von der die Belohnung von irgendjemandem abhängt, der billigste Weg, sie zu manipulieren, und würden wir das heute bemerken?** Für jede anreizbehaftete Zahl auf dem Dashboard sollte bewusst der Exploit entworfen werden: Wie würde ein rationales, wohlmeinendes Team das gut aussehen lassen, ohne die zugrunde liegende Arbeit zu leisten? Wenn kein Weg genannt werden kann, wie diese Manipulation entdeckt würde, ist die Metrik noch nicht bereit, mit Anreizen versehen zu werden. Diese Übung ist unangenehm, und genau das ist der Sinn.

2. **Welche unserer aktuellen Metriken sind bereits in eines der vier Manipulationsmuster abgedriftet, Schwellenwert-, Definitions-, Zeitpunkt- oder Substitutions-Manipulation, ohne dass es jemand angesprochen hat?** Verzerrung kündigt sich selten selbst an; sie zeigt sich als eine Zahl, die großartig aussieht, während die zugrunde liegenden Beschwerden, Incidents oder das Kundenfeedback eine andere Geschichte erzählen. Das Dashboard sollte gegen jedes Muster namentlich durchgegangen und ehrlich auf Übereinstimmungen geprüft werden.

3. **Hat jede anreizbehaftete Metrik auf unserem Dashboard eine gepaarte Leitplanke, und wurde diese Leitplanke gleichzeitig mit der Metrik entworfen?** Eine Leitplanke, die erst hinzugefügt wird, nachdem Manipulation entdeckt wurde, ist eine Reparatur, keine Gestaltungsentscheidung, und sie kommt meist zu spät, um die erste Runde des Vertrauensschadens zu verhindern. Die anreizbehafteten Metriken sollten gezielt auf diese Paarung geprüft werden.

4. **Wie weit reist diese Metrik von der Person, die ihre Absicht versteht, bis sie die Person erreicht, deren Verhalten sie formt?** Eine Metrik, die ein Plattform-Team gebaut hat und die drei Managementebenen entfernt konsumiert wird, oder die in einem öffentlichen Bericht veröffentlicht wird, den Menschen lesen, die die Instrumentierung nie gesehen haben, ist weit stärker Buchstabe-statt-Geist-Manipulation ausgesetzt als eine Metrik, die ein Team für sich selbst entworfen hat. Diese Distanz sollte für die folgenreichsten Metriken kartiert werden.

5. **Haben wir jemals einen Anreiz von einer Metrik entfernt, nachdem entdeckt wurde, dass sie manipuliert wurde, und was hat uns die Reparatur an Vertrauen gekostet?** Organisationen entdecken Goodharts Gesetz oft auf die harte Tour, nach einem Quartal oder einem Jahr verzerrten Verhaltens, und die Reparatur kostet mehr, als Vorbeugung gekostet hätte. Ein echter Vorfall sollte, falls vorhanden, mitgebracht und die Lehre daraus explizit gezogen werden, statt still darüber hinwegzugehen.

6. **Wo haben wir angenommen, Manipulation sei ein persönliches Integritätsproblem, statt eine rationale Reaktion auf einen schlecht gestalteten Anreiz?** Einzelpersonen dafür verantwortlich zu machen, dass sie vorhersehbar auf einen geschaffenen Anreiz reagieren, behebt selten etwas und schädigt oft weiter das Vertrauen. Jeder erinnerte Manipulationsvorfall sollte als Gestaltungsproblem der Metrik umgedeutet werden, nicht als Charakterproblem der Person, und es sollte gefragt werden, welche Neugestaltung ihn verhindert hätte.

## Branchenperspektive

**Startup.** Bei einem winzigen Team ist die schnellste Leitplanke das direkte Gespräch: Alle können eine Zahl sehen und sofort fragen „Moment, warum ist das gesprungen." Das eigentliche Risiko ist, dass eine Gründerin oder ein Gründer eine Metrik an die Fundraising-Erzählung knüpft (Wachstum um jeden Preis) ohne gepaarte Leitplanke, weil externe Investorinnen und Investoren genau die Art von distanziertem, hochriskantem Druck ausüben, der Manipulation attraktiv macht.

**Kleinunternehmen.** Standard-Tools liefern oft Standard-Dashboards, die um Rohzahlen herum gebaut sind (geschlossene Tickets, bearbeitete Anrufe), weil Rohzahlen leicht zu berechnen sind. Diese sollten aktiv in Raten umgewandelt werden, wo immer das Tool es erlaubt, und es sollte widerstanden werden, eine einzelne Zahl an einen Bonus oder eine Beurteilung zu knüpfen, ohne zuvor ihre Leitplanke zu identifizieren.

**Enterprise.** Distanz ist das dominante Risiko: Eine Metrik, die ein Plattform-Team zur internen Diagnose entworfen hat, wird drei Managementebenen später aufgegriffen und zu einem KPI gemacht, den niemand von denen, die sie gebaut haben, wiedererkennen würde. Das sollte explizit geregelt werden (Thema 1.4): eine dokumentierte Leitplanke sollte verlangt werden, bevor eine Metrik für die Nutzung in einer Leistungsbeurteilung oder einem Führungs-Scorecard freigegeben wird.

**Behörden.** Veröffentlichte Leistungskennzahlen stehen unter dem stärksten Manipulationsdruck jeder Kategorie in diesem Buch, weil ein verfehltes Ziel budgetäre oder politische Konsequenzen haben kann. Die Definition selbst sollte in festem Rhythmus geprüft werden, nicht nur die Zahl, denn das klassische Manipulationsmuster im öffentlichen Sektor besteht darin, still neu zu definieren, wer zählt (eine Warteliste wird „gelöst", indem umklassifiziert wird, wer wartet), statt den zugrunde liegenden Dienst zu verbessern.

## Beispiele

**Enterprise.** Ein Einzelhandelstechnologieunternehmen setzte sich ein Ziel von 99 % automatisierter Testabdeckung über alle Dienste hinweg, geknüpft an einen Qualitäts-Score auf Teamebene, der in vierteljährlichen Beurteilungen verwendet wurde. Innerhalb von zwei Quartalen erreichte die Abdeckung 99 %, und die Incident-Rate stieg. Eine Prüfung ergab, dass Teams triviale Tests schrieben, die nur behaupteten, eine Funktion kehre zurück, ohne einen Fehler zu werfen, rein um das Abdeckungstool zufriedenzustellen, während sich echtes Edge-Case-Testing überhaupt nicht verbessert hatte. Die Lösung ersetzte das reine Abdeckungsziel durch eine gepaarte Metrik: Abdeckung plus ein Mutationstest-Score (Thema 4.2), der misst, ob Tests tatsächlich eingeschleuste Fehler fangen, was sich weit schwerer billig manipulieren lässt.

**Behörden.** Die Arbeitslosenversicherungsbehörde eines Bundeslandes wurde an der medianen Anzahl von Tagen bis zur ersten Zahlung gemessen, veröffentlicht an ihr Parlament. Unter Druck, ein Ziel zu erreichen, begann eine regionale Dienststelle, schwerer zu bearbeitende Anträge still als „unvollständig" umzuklassifizieren und aus dem Nenner auszuschließen, was den veröffentlichten Median hervorragend aussehen ließ, während manche Antragstellerinnen und Antragsteller weit länger warteten, als der Bericht nahelegte. Eine unabhängige Prüfung der Definition selbst, nicht nur der Zahl, deckte die Praxis auf. Die Behörde reagierte, indem sie die Definition einfror, die Ausschlusskriterien öffentlich veröffentlichte und eine Leitplanken-Metrik hinzufügte, die die Rate unvollständiger Anträge selbst verfolgte, sodass ein Anstieg der Umklassifizierung nun sichtbar statt verborgen wäre.

## Business Case: Motivation, ROI und TCO

Die Rendite, Goodharts Gesetz ernst zu nehmen, ist vermiedene Nacharbeit. Eine Organisation, die Leitplanken von vornherein entwirft, wendet einen bescheidenen Mehraufwand auf, um eine zweite Metrik neben der ersten zu definieren. Eine Organisation, die diesen Schritt überspringt, verbringt oft ein volles Quartal oder mehr mit fehlgeleitetem Aufwand, bevor die Verzerrung auftaucht, gefolgt von den weit höheren Kosten, manipuliertes Verhalten rückgängig zu machen und danach das Vertrauen in die Zahl wiederherzustellen. Das Einzelhandelsbeispiel oben ist typisch: billig zu verhindern, teuer zu reparieren.

Die Gesamtbetriebskosten einer Leitplanke sind nicht null: Es ist eine zweite Metrik, die definiert, instrumentiert und überprüft werden muss. Aber diese Kosten sind klein und fest im Vergleich zu den unbegrenzten Kosten eines Anreizes, der still über Monate das falsche Verhalten belohnt, bevor es jemand bemerkt. Jedes Thema nach diesem berücksichtigt diesen Kompromiss, weshalb Leitplanken-Paarung als Empfehlung im gesamten restlichen Buch erscheint, nicht nur hier.

## Antipatterns und Fallstricke

- **Eine anreizbehaftete Metrik ohne Leitplanke veröffentlichen:** die mit Abstand häufigste Grundursache eines verzerrten Dashboards in diesem Buch.
- **Manipulation als persönliches Versagen behandeln:** macht Einzelpersonen für eine rationale Reaktion auf einen schlecht gestalteten Anreiz verantwortlich und behebt nichts.
- **Die Zahl prüfen, aber nie die Definition:** das klassische Fehlmuster im öffentlichen Sektor, bei dem die Metrik gut aussieht, weil sich still geändert hat, wer zählt.
- **Annehmen, eine Metrik, die als diagnostisch funktionierte, bleibe sicher, sobald sie bewertend wird:** Die Exposition ändert sich in dem Moment, in dem Belohnung daran geknüpft wird, selbst wenn sich sonst nichts an der Metrik ändert.
- **Die Leitplanke erst nach dem ersten Manipulationsvorfall entwerfen:** eine Reparatur, die eintrifft, nachdem der Vertrauensschaden bereits geschehen ist.
- **Distanz ignorieren:** annehmen, eine Metrik werde so gelesen, wie es ihre Urheberin oder ihr Urheber beabsichtigte, sobald sie mehrere Managementebenen oder einen öffentlichen Bericht weit von ihnen entfernt ist.

## Reifegradmodell

- **Stufe 1, Initiieren:** Metriken werden ad hoc mit Anreizen versehen, ohne Berücksichtigung des Manipulationsrisikos, und Verzerrung wird erst entdeckt, nachdem Qualität oder Vertrauen sichtbar gelitten haben.
- **Stufe 2, Entwickeln:** Manche Teams erkennen Manipulation nachträglich und passen informell an, aber es gibt keine konsistente Praxis, Leitplanken im Voraus zu entwerfen.
- **Stufe 3, Standardisieren:** Jede anreizbehaftete Metrik organisationsweit verlangt eine dokumentierte Leitplanke vor der Freigabe, und die vier Manipulationsmuster werden namentlich benannt und geschult.
- **Stufe 4, Steuern:** Manipulationsrisiko wird aktiv überwacht: Definitionen werden periodisch geprüft, Leitplanken-Paare werden darauf überprüft, ob sie Verzerrung noch immer fangen, und Manipulationsvorfälle werden als eigenständige Metrik verfolgt.
- **Stufe 5, Orchestrieren:** Die Organisation behandelt Goodharts Gesetz als ständige Gestaltungsbeschränkung, die automatisch überprüft wird, sobald eine neue Metrik vorgeschlagen wird, und kann auf konkrete Neugestaltungen verweisen, die Verzerrung verhinderten, bevor sie geschah, statt nur danach.

## Diskussionsanregungen

1. Was ist die folgenreichste Metrik in unserer Organisation, die heute keine Leitplanke hat?
2. Haben wir jemals gesehen, wie sich eine Zahl verbesserte, während sich die zugrunde liegende Realität verschlechterte?
3. Wer würde es bemerken, wenn sich die Definition hinter einer unserer öffentlichen Metriken still änderte?
4. Für welches der vier Manipulationsmuster (Schwellenwert, Definition, Zeitpunkt, Substitution) ist unsere Organisation am anfälligsten?
5. Was würde es uns an Vertrauen kosten, zu entdecken, dass eine wichtige Metrik ein Jahr lang manipuliert wurde?

## Die wichtigsten Erkenntnisse

- **Goodharts Gesetz:** Eine Messgröße, die zum Ziel wird, hört auf, eine gute Messgröße zu sein, und das bestimmt jede Metrik in diesem Buch.
- Manipulation ist eine **rationale Reaktion auf Anreize**, kein Charakterfehler; behoben werden sollte die Anreizgestaltung, nicht die Menschen.
- **Verhältnisse, Raten und Kohorten** sollten gegenüber Rohzahlen bevorzugt werden, wo immer sie dasselbe Verhalten erfassen.
- Jede anreizbehaftete Metrik braucht eine **Leitplanke**, gleichzeitig entworfen, nicht erst hinzugefügt, nachdem Verzerrung entdeckt wurde.
- Auf die vier Manipulationsmuster sollte namentlich geachtet werden: **Schwellenwert-, Definitions-, Zeitpunkt- und Substitutions-Manipulation**.
- **Distanz** zwischen der Urheberin oder dem Urheber einer Metrik und der Person, deren Verhalten sie formt, erhöht das Verzerrungsrisiko; diese Distanz sollte klein gehalten werden, wo immer möglich.

## Quellen und weiterführende Literatur

- Goodhart, C. A. E., „Problems of Monetary Management: The UK Experience" (1975): der Ursprung von Goodharts Gesetz.
- Strathern, Marilyn, „'Improving Ratings': Audit in the British University System" (1997): die weithin zitierte Neuformulierung, „wenn eine Messgröße zum Ziel wird, hört sie auf, eine gute Messgröße zu sein."
- *Seeing Like a State*, von James C. Scott (wie lesbar gemachte Metriken die Systeme verzerren, die sie messen, im Maßstab von Nationen).
- *The Tyranny of Metrics*, von Jerry Z. Muller (eine buchlange Behandlung der Metrik-Fixierung und ihrer Kosten über viele Berufe hinweg).
- *Lean Analytics*, von Alistair Croll und Benjamin Yoskovitz (Vanity- gegen handlungsrelevante Metriken und Leitplanken-Gestaltung im Startup-Kontext).
- Leitfaden des U.S. Government Accountability Office (GAO) zu Leistungsmessung und dem GPRA Modernization Act: behördliche Leistungsberichterstattung und Manipulationsrisiko.
