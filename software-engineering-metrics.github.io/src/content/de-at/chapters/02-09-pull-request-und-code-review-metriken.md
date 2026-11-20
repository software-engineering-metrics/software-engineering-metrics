# 2.9 Pull-Request- und Code-Review-Metriken

## Überblick und Motivation

[Code-Review](https://en.wikipedia.org/wiki/Code_review) ist meist der größte Wartezeit-Beitrag innerhalb der Zykluszeit-Aufschlüsselung aus Thema 2.6, und es ist auch die Phase, die am direktesten in der eigenen Kontrolle eines Teams liegt zu verbessern, anders als ein gemeinsamer Plattform-Flaschenhals oder eine externe Abhängigkeit. Dieses Thema behandelt die konkreten Metriken, die innerhalb der Review-Phase leben: Zeit bis zur ersten Überprüfung, Pull-Request-Größe, Anzahl der Review-Iterationen und Verteilung der Reviewer-Last, und wie sie genutzt werden, um Review-Geschwindigkeit zu verbessern, ohne den tatsächlichen Qualitätsnutzen zu opfern, den Review liefern soll.

Das Risiko, für das dieses Thema am wachsamsten ist, ist eines, das dieses Buch noch nicht direkt behandelt hat: Die Optimierung der Review-Geschwindigkeit kann still die Review-Qualität untergraben, wenn sie unbedacht verfolgt wird. Ein Team, das seine Zeit bis zur ersten Überprüfung halbiert, indem es alles mit einem Gummistempel genehmigt, hat eine Metrik verbessert, während es den tatsächlichen Wert der Praxis zerstört hat. Jede Empfehlung dieses Themas ist mit diesem Kompromiss im Blick geschrieben, weil Pull-Request-Metriken zu den in diesem Buch am leichtesten manipulierbaren gehören, auf eine Weise, die auf einem Dashboard gut aussieht, während sie die zugrunde liegende Codebasis messbar verschlechtert.

Für große Teams enthüllen Review-Metriken Lastverteilungsprobleme, die sonst unsichtbar sind: eine kleine Zahl leitender Ingenieurinnen und Ingenieure, die einen unverhältnismäßigen Anteil der Review-Last absorbiert, ein bestimmtes Team oder einen Codebasis-Bereich, in dem Reviews beständig stocken, oder ein Muster übergroßer Pull Requests, das gründliche Überprüfung unabhängig von der Sorgfalt der Reviewerinnen und Reviewer praktisch unmöglich macht. Diese Muster verstärken sich im großen Maßstab weit mehr als in einem kleinen Team, wo alle das Ungleichgewicht direkt sehen können, ohne eine Metrik zu brauchen, die es zutage fördert.

## Kernprinzipien

- **Zeit bis zur ersten Überprüfung ist meist der größte Hebel, nicht die Gründlichkeit des Reviews selbst.** Die meiste Verzögerung kommt davon, dass ein Pull Request darauf wartet, angeschaut zu werden, nicht davon, dass das Review-Gespräch lange dauert, sobald es beginnt.
- **Kleinere Pull Requests werden schneller und gründlicher überprüft, nicht nur schneller.** Größe ist ein Hebelpunkt für Geschwindigkeit und Qualität gleichzeitig.
- **Review-Geschwindigkeit und Review-Qualität stehen nicht automatisch in Spannung, aber sie können unbedacht gegeneinander ausgetauscht werden.** Vor diesem Tausch sollte explizit geschützt werden.
- **Ungleichgewicht der Reviewer-Last ist häufig und meist unsichtbar ohne eine Metrik.** Eine kleine Zahl von Menschen absorbiert oft einen unverhältnismäßigen Anteil.
- **Diese Metriken sind dem Gummistempel-Manipulationsrisiko ausgesetzt.** Eine schnelle Genehmigung ohne echte Prüfung untergräbt den gesamten Sinn des Reviews.

## Empfehlungen

### Zeit bis zur ersten Überprüfung als primäre Geschwindigkeitsmetrik verfolgen

Das Intervall von der Eröffnung eines Pull Requests bis zum ersten substanziellen Kommentar oder der Genehmigung einer Reviewerin oder eines Reviewers sollte gemessen werden, automatisch aus der Versionsverwaltungsplattform instrumentiert. Das ist meist der dominante Wartezeit-Beitrag innerhalb der Review-Phase (Thema 2.5, Thema 2.6), und ihn zu verbessern, durch klarere Normen für Review-Zuweisung, Benachrichtigungspraktiken oder dedizierte Review-Zeitblöcke, erzeugt typischerweise die größte einzelne Verbesserung der gesamten Zykluszeit, die einem Team verfügbar ist.

### Pull-Request-Größe verfolgen und aktiv kleinere Änderungen fördern

Geänderte Zeilen oder berührte Dateien pro Pull Request sollten gemessen werden, und eine anhaltend große mediane Größe sollte als Signal behandelt werden, das es wert ist, direkt angegangen zu werden. Kleinere Pull Requests werden schneller überprüft, gründlicher überprüft (eine Reviewerin oder ein Reviewer kann die gesamte Änderung tatsächlich im Kopf behalten) und sind leichter zurückzurollen, wenn etwas schiefgeht, was sich direkt mit dem Losgrößen-Prinzip hinter der Deployment-Frequenz in Thema 2.10 verbindet. Das Aufteilen großer Änderungen in eine Abfolge kleinerer, unabhängig überprüfbarer Pull Requests sollte gefördert werden, wo immer die Arbeit es erlaubt.

### Verteilung der Reviewer-Last explizit überwachen

Die Anzahl abgeschlossener Reviews pro Person über ein gleitendes Fenster sollte verfolgt werden, mit besonderem Augenmerk darauf, dass eine kleine Zahl von Menschen einen unverhältnismäßigen Anteil absorbiert. Dieses Muster ist häufig, fällt oft auf die dienstältesten oder vertrauenswürdigsten Ingenieurinnen und Ingenieure, und erzeugt sowohl einen Flaschenhals (ihre Verfügbarkeit deckelt den gesamten Review-Durchsatz des Teams) als auch ein Burnout-Risiko (Thema 3.2 behandelt Wohlbefinden-Metriken vertiefter). Review-Verantwortung sollte bewusst rotiert werden, statt sie standardmäßig um diejenige oder denjenigen konzentrieren zu lassen, die oder der am schnellsten antwortet.

### Explizit gegen das Gummistempel-Manipulationsrisiko schützen

Zeit bis zur ersten Überprüfung sollte mit einem Qualitätssignal gepaart werden: der Rate von Defekten oder Incidents, die auf Änderungen zurückgeführt werden, die mit null Review-Kommentaren genehmigt wurden, oder der Rate nötiger Nach-Merge-Korrekturen für kürzlich überprüften Code. Ein Team, das die Review-Geschwindigkeit verbessert, indem es ohne echte Prüfung genehmigt, sollte sehen, wie sich diese Leitplanke verschlechtert, genau das Paarungsprinzip aus Thema 1.2, angewendet auf diese konkrete Metrikfamilie. Review-Geschwindigkeit sollte nie ohne diese Gegenmetrik im Blick verfolgt werden.

### Anzahl der Review-Iterationen nutzen, um Reibung aufzuspüren, nicht um Einzelpersonen zu beurteilen

Die Anzahl der Review-Runden, die ein Pull Request vor dem Merge durchläuft, kann echte Reibung signalisieren, unklare Anforderungen, Uneinigkeit über den Ansatz, inkonsistente Stilerwartungen, die es wert ist, auf Prozessebene untersucht zu werden. Diese Zahl sollte vermieden werden, um Autorinnen, Autoren, Reviewerinnen oder Reviewer direkt zu beurteilen; eine hohe Iterationszahl ist öfter ein System- oder Kommunikationssignal als ein persönliches, und sie als individuelle Bewertungskarte zu behandeln, riskiert genau die bewertende Abdrift, vor der Thema 1.1 warnt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Rein auf Zeit bis zur ersten Überprüfung optimieren | Schnell, klares Signal, leicht zu instrumentieren | Kann oberflächliches Gummistempel-Review begünstigen, wenn ungeschützt |
| Rein auf Pull-Request-Größenreduktion optimieren | Verbessert Geschwindigkeit und Gründlichkeit gleichzeitig | Nicht jede Arbeit lässt sich sauber in kleine Inkremente aufteilen |
| Review-Last gleichmäßig rotieren | Reduziert Flaschenhals- und Burnout-Risiko | Kann Review für spezialisierten, schwer zu überprüfenden Code verlangsamen, der konkrete Expertise braucht |
| Review bei leitenden Ingenieurinnen und Ingenieuren konzentrieren | Tiefe Fachexpertise konsistent angewendet | Erzeugt über die Zeit einen Flaschenhals und ein Burnout-Risiko |

Die zentrale Spannung ist **Geschwindigkeit gegen Prüfungstiefe**. Jede Technik in diesem Thema zur Beschleunigung des Reviews, schnellere erste Antwort, kleinere Pull Requests, verteiltere Reviewer-Last, trägt ein gewisses Risiko, echte Prüfung einzutauschen, wenn sie ohne die in diesem Thema empfohlene Qualitäts-Leitplanke verfolgt wird. Die Lösung: jede Geschwindigkeitsmetrik mit einem Qualitätssignal paaren, über denselben Zeitraum verfolgt, damit ein Team echte Prozessverbesserung von einem still erodierenden Review-Standard unterscheiden kann.

## Fragen für die Diskussion im Team

1. **Wie hoch ist unsere tatsächliche Zeit bis zur ersten Überprüfung, und wie viel unserer gesamten Zykluszeit verbraucht die Review-Phase?** Die echte Zahl sollte gezogen werden, statt sich auf Eindruck zu verlassen; Review-Wartezeit ist oft größer, als Teams annehmen, genau weil es leicht ist, in Wartezeit verbrachte Zeit gegenüber aktiver Arbeit zu unterschätzen.

2. **Wie hoch ist unsere mediane Pull-Request-Größe, und wie viel unserer Review-Verzögerung würde schrumpfen, wenn diese Größe sänke?** Große Pull Requests werden sowohl langsamer überprüft als auch eher oberflächlich überprüft, schlicht weil eine Reviewerin oder ein Reviewer nicht das Ganze auf einmal im Kopf behalten kann. Die tatsächliche Größenverteilung sollte betrachtet werden, nicht nur der Median.

3. **Ist die Review-Last auf eine kleine Zahl von Menschen konzentriert, und was würde mit unserem Review-Durchsatz geschehen, wenn eine davon zwei Wochen nicht verfügbar wäre?** Diese Frage bringt gleichzeitig ein Flaschenhals- und ein Burnout-Risiko ans Licht. Echte Reviewer-Last-Daten sollten gezogen werden, statt sich auf Eindruck zu verlassen.

4. **Haben wir je eine Review-Geschwindigkeits-Metrik auf eine Weise verbessert, die, im Rückblick, echte Prüfung reduziert hat?** Hier sollte ehrlich geantwortet werden; das ist genau das Gummistempel-Risiko, das dieses Thema benennt, und es ist leicht, ohne bewusste Entscheidung dorthin abzugleiten.

5. **Was signalisiert eine hohe Anzahl an Review-Iterationen bei uns meist: echte Uneinigkeit, unklare Anforderungen oder inkonsistente Stilerwartungen?** Eine Stichprobe von Pull Requests mit ungewöhnlich hoher Iterationszahl sollte betrachtet und das tatsächliche Muster diagnostiziert werden, statt anzunehmen, es spiegele schlecht auf Autorin, Autor, Reviewerin oder Reviewer.

6. **Haben wir eine Qualitäts-Leitplanke gepaart mit unseren Review-Geschwindigkeits-Metriken, oder verfolgen wir Geschwindigkeit isoliert?** Wenn die ehrliche Antwort ist, dass keine solche Leitplanke existiert, ist das eine Lücke, die es wert ist, geschlossen zu werden, bevor die Review-Geschwindigkeit weiter vorangetrieben wird, gemäß dem Paarungsprinzip aus Thema 1.2.

## Branchenperspektive

**Startup.** Review ist bei einem kleinen Team oft standardmäßig schnell, manchmal fast zu schnell, Single-Approver-Review mit minimaler Prüfung, weil alle allen vertrauen. Das Risiko, auf das geachtet werden sollte, während das Team wächst, ist, dass die Review-Qualität nicht mit der Teamgröße mitskaliert, da informelles Vertrauen, das für fünf Ingenieurinnen und Ingenieure funktionierte, nicht automatisch für fünfzig funktioniert.

**Kleinunternehmen.** Die meisten Versionsverwaltungsplattformen berichten Time-to-Merge- und Review-Zahl-Statistiken von Haus aus; diese sollten genutzt werden, statt eigene Instrumentierung zu bauen. Die wichtigste Disziplin ist schlicht zu bemerken, ob sich Review-Last still auf ein oder zwei Menschen konzentriert hat, während das Team gewachsen ist.

**Enterprise.** Ungleichgewicht der Reviewer-Last und Flaschenhälse durch spezialisiertes Wissen sind hier besonders häufig, wo tiefe Fachexpertise in einem kritischen System Review-Verantwortung unabhängig von der Teamgröße auf eine kleine Gruppe konzentrieren kann. In bewusstes Wissensteilen und Review-Rotation sollte investiert werden, um Expertise zu verteilen und sowohl den Flaschenhals als auch das Bus-Faktor-Risiko zu reduzieren, dass diese Expertise in zu wenigen Menschen lebt.

**Behörden.** Review-Prozesse tragen hier oft Compliance-Gewicht neben Qualitätszielen, was Pull Requests von Natur aus größer und Reviews langsamer machen kann. Wo echte Compliance-Anforderungen gründliches Review verlangen, sollte sich die Verbesserungsanstrengung darauf konzentrieren, Wartezeit zu reduzieren (schnellere Review-Zuweisung, klarere Triage), statt die tatsächliche Tiefe des Reviews zu kompromittieren, und der Kompromiss sollte explizit dokumentiert werden, wenn Prüfung aus regulatorischen Gründen schwer bleiben muss.

## Beispiele

**Enterprise.** Die Engineering-Organisation eines Cybersicherheitsunternehmens fand heraus, dass eine Handvoll Principal Engineers über 40 % aller Code-Reviews in einer zweihundertköpfigen Organisation abschloss, ein Ungleichgewicht, das niemand direkt gemessen hatte, bis Reviewer-Last-Daten gezogen wurden. Diese Konzentration war sowohl ein Flaschenhals, da die Verfügbarkeit dieser Ingenieurinnen und Ingenieure den Review-Durchsatz der gesamten Organisation deckelte, als auch ein Burnout-Risiko, separat durch eine Engagement-Umfrage markiert (Thema 3.2). Die Organisation führte ein strukturiertes Review-Rotationsprogramm gepaart mit gezielten Wissensaustausch-Sitzungen ein, und innerhalb von zwei Quartalen hatte sich die Review-Last über eine weit breitere Gruppe verteilt, wobei sich die Zeit bis zur ersten Überprüfung als direkter Nebeneffekt des reduzierten Flaschenhalses verbesserte.

**Behörden.** Das Engineering-Team einer Steuerbehörde, unter Druck, die Lieferzeit zu verbessern, setzte sich das Ziel, die Zeit bis zur ersten Überprüfung zu halbieren. Innerhalb eines Quartals wurde das Ziel erreicht, aber eine anschließende Qualitätsprüfung fand einen scharfen Anstieg von Nach-Merge-Defektkorrektur-Pull-Requests, konzentriert in Änderungen, die mit einem einzigen, kurzen Kommentar genehmigt worden waren. Die Lösung des Teams paarte das Geschwindigkeitsziel mit einer expliziten Qualitäts-Leitplanke, der Rate nötiger Nach-Merge-Korrekturen innerhalb von zwei Wochen nach einem Review, und schulte das Team neu darin, was ein substanzielles Review tatsächlich erforderte, wodurch echte Prüfung wiederhergestellt wurde, während der größte Teil der Geschwindigkeitsverbesserung erhalten blieb, die aus besserer Review-Zuweisung und kleineren Pull-Request-Größen kam.

## Business Case: Motivation, ROI und TCO

Die Rendite gut gemanagter Review-Metriken ist schnellere Lieferung ohne Qualitätsopfer, eine seltene Kombination: Die meisten Lieferverbesserungen tauschen irgendwo Geschwindigkeit gegen Risiko, aber Verbesserungen der Review-Phase, kleinere Pull Requests, bessere Lastverteilung, schnellere erste Reaktion, verbessern beides echt gleichzeitig, wenn sie mit der in diesem Thema empfohlenen Qualitäts-Leitplanke verfolgt werden. Das Cybersicherheitsbeispiel oben ist typisch: Die Behebung eines Flaschenhalses verbesserte die Geschwindigkeit, während sich die zugrunde liegende Review-Qualität eher noch verbesserte, da sich Expertise breiter verteilte.

Die Gesamtbetriebskosten sind niedrig: Die meisten dieser Metriken stammen direkt aus vorhandenen Versionsverwaltungsplattform-Daten mit minimaler zusätzlicher Instrumentierung, und die Prozessänderungen, auf die sie hindeuten, Review-Rotation, das Fördern kleinerer Pull Requests, kosten größtenteils Disziplin statt Tooling-Investition.

## Antipatterns und Fallstricke

- **Zeit bis zur ersten Überprüfung ohne gepaarte Qualitäts-Leitplanke optimieren:** lädt zu Gummistempel-Genehmigung ein, die den Sinn des Reviews untergräbt.
- **Konzentration der Reviewer-Last ignorieren:** erzeugt sowohl einen Flaschenhals als auch ein Burnout-Risiko, das unsichtbar bleibt, bis es gemessen wird.
- **Anzahl der Review-Iterationen als individuelle Bewertungskarte behandeln:** öfter ein System- oder Kommunikationssignal als ein persönliches.
- **Anhaltend große Pull Requests als unvermeidlich akzeptieren:** die meisten großen Änderungen lassen sich weiter aufteilen, als Teams zunächst annehmen.
- **Einheitliche Review-Tiefe unabhängig vom Änderungsrisiko anwenden:** verschwendet Prüfung an risikoarme Änderungen, während risikoreiche möglicherweise unterprüft bleiben.
- **Review-Geschwindigkeit messen, aber nie prüfen, ob echte Prüfung damit gesunken ist:** die häufigste Art, wie diese Metrikfamilie unbeabsichtigt manipuliert wird.

## Reifegradmodell

- **Stufe 1, Initiieren:** Review-Metriken werden nicht verfolgt; Verteilung der Reviewer-Last und Pull-Request-Größe sind unsichtbar.
- **Stufe 2, Entwickeln:** Manche Review-Geschwindigkeits-Daten existieren aus Plattform-Standardeinstellungen, aber es gibt keine Qualitäts-Leitplanke und kein aktives Management der Reviewer-Last.
- **Stufe 3, Standardisieren:** Zeit bis zur ersten Überprüfung, Pull-Request-Größe und Reviewer-Last werden konsistent verfolgt, mit einer expliziten Qualitäts-Leitplanke, gepaart gegen Geschwindigkeitsverbesserungen.
- **Stufe 4, Steuern:** Reviewer-Last wird aktiv durch Rotation und Wissensteilen neu ausbalanciert; Muster der Iterationszahl werden auf Prozessebene untersucht, nicht auf individueller Ebene.
- **Stufe 5, Orchestrieren:** Metriken der Review-Phase informieren direkt Prozessinvestitionen, und die Organisation kann gleichzeitige Verbesserung sowohl der Review-Geschwindigkeit als auch review-bezogener Qualitätsergebnisse über einen anhaltenden Zeitraum nachweisen.

## Diskussionsanregungen

1. Wie hoch ist unsere aktuelle mediane Zeit bis zur ersten Überprüfung, und wohin geht diese Zeit tatsächlich?
2. Ist unsere Review-Last auf eine kleine Zahl von Menschen konzentriert, und was ist das Risiko, wenn eine davon nicht verfügbar ist?
3. Haben wir je Review-Geschwindigkeit auf Kosten echter Prüfung verbessert, selbst unbeabsichtigt?
4. Wie hoch ist unsere mediane Pull-Request-Größe, und wie viel kleiner könnten die meisten Änderungen realistisch sein?
5. Behandeln wir eine hohe Anzahl an Review-Iterationen als Systemsignal oder als individuelles Urteil?

## Die wichtigsten Erkenntnisse

- **Zeit bis zur ersten Überprüfung** ist meist der größte Einzelhebel innerhalb der Review-Phase, mehr als die Länge des Review-Gesprächs selbst.
- **Kleinere Pull Requests** verbessern Review-Geschwindigkeit und Review-Gründlichkeit gleichzeitig.
- **Ungleichgewicht der Reviewer-Last** ist häufig und meist unsichtbar ohne direkte Messung; es erzeugt sowohl einen Flaschenhals als auch ein Burnout-Risiko.
- Jede Review-Geschwindigkeits-Metrik sollte mit einer expliziten **Qualitäts-Leitplanke** gepaart werden, um das Gummistempel-Manipulationsrisiko zu fangen, für das diese Metrikfamilie besonders anfällig ist.
- **Anzahl der Review-Iterationen** sollte genutzt werden, um systemweite Reibung zu diagnostizieren, nicht um einzelne Autorinnen, Autoren, Reviewerinnen oder Reviewer zu beurteilen.

## Quellen und weiterführende Literatur

- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble und Gene Kim (Code-Review-Praktiken und ihre Beziehung zur Lieferleistung).
- Forschung zu *Modern Code Review* von Alberto Bacchelli und Christian Bird (empirische Studie zu Code-Review-Praktiken im großen Maßstab).
- *Peer Reviews in Software: A Practical Guide*, von Karl E. Wiegers (Gestaltung des Review-Prozesses und seine Kompromisse).
- *The Principles of Product Development Flow*, von Donald G. Reinertsen (Losgrößen-Überlegungen angewendet auf Pull-Request-Größe).
