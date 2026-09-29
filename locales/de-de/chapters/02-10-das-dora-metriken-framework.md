# 2.10 Das DORA-Metriken-Framework

## Überblick und Motivation

Die **[DORA-Metriken](https://dora.dev/guides/dora-metrics/)** stammen aus dem [DevOps](https://en.wikipedia.org/wiki/DevOps)-Research-and-Assessment-Programm, einem mehrjährigen Forschungsvorhaben, später veröffentlicht als das Buch *Accelerate* von Nicole Forsgren, Jez Humble und Gene Kim, das Zehntausende Engineering-Fachleute befragte, um herauszufinden, welche Lieferpraktiken mit organisatorischer Leistung korrelieren. Das Ergebnis waren vier Metriken, gepaart zu zweit: Deployment-Frequenz und Lead Time für Änderungen messen Geschwindigkeit; Change Failure Rate und Wiederherstellungszeit nach fehlgeschlagenem Deployment, oft verkürzt zu Mean Time to Recovery (MTTR), messen Stabilität. Der Forschungsbefund, der das Framework bedeutsam machte, war, dass Spitzenleister gleichzeitig schnell und stabil waren, was die Annahme umstieß, Geschwindigkeit und Sicherheit stünden zwangsläufig im Widerspruch, und dieser Befund ist noch immer das klarste durchgerechnete Beispiel, das dieses Buch für das Leitplanken-Paarungsprinzip aus Kapitel 1.2 hat: eine anreizbehaftete Geschwindigkeitsmetrik, gepaart mit einer Stabilitäts-Leitplanke, ist das, was die leistungsstärksten Organisationen tatsächlich tun.

Dieses Buch behandelt DORA bewusst zuletzt in diesem Teil, statt als organisierendes Framework des Teils. Diese Platzierung ist keine Ablehnung der Forschung, die echt streng und nutzenswert bleibt. Sie spiegelt eine konkrete, echte Einschränkung wider: DORA misst, wie schnell und wie sicher eine Pipeline arbeitet, schweigt aber darüber, was durch die Pipeline fließt. Ein Team kann hervorragende DORA-Zahlen vorweisen, während sein tatsächlicher Output still zu Defekt-Nacharbeit abgedriftet ist oder technischer Schulden- und Sicherheitsarbeit Kapazität entzogen hat, ein Muster, für das das Flow Framework aus den Kapiteln 2.1 bis 2.4 speziell gebaut ist, es zutage zu fördern, und das DORA nicht sehen kann. DORA sollte so genutzt werden, wie dieses Kapitel es präsentiert: ein gut validiertes, engeres Referenzmaß für Pipeline-Mechanik, nicht das gesamte Bild der Liefergesundheit.

Für große Teams liegt DORAs verbleibender, echter Wert in der Vergleichbarkeit. Eine konsistent aus Pipeline- und Incident-Daten berechnete Metrik erlaubt einer Organisation, Lieferfähigkeit über viele Teams in unterschiedlichen Domänen zu vergleichen, ohne das Äpfel-mit-Birnen-Problem, das die meisten teamübergreifenden Vergleiche plagt. Konzerne nutzen sie weiterhin, um Plattforminvestitionen zu priorisieren; Behörden nutzen sie weiterhin, um mit Belegen zu zeigen, dass ein Modernisierungsprogramm die Liefermechanik messbar verbessert hat. Das sollte als DORAs richtiger, begrenzter Auftrag behandelt werden, und die Flow-Framework-Kapitel früher in diesem Teil sollten für die breitere Frage genutzt werden, ob überhaupt die richtigen Dinge geliefert werden.

## Kernprinzipien

- **DORA misst die Pipeline, nicht den Wert, der durch sie fließt.** Kapitel 2.1 benennt diese Lücke direkt; Flow-Verteilung (Kapitel 2.3) sollte genutzt werden, um zu sehen, was DORA nicht kann.
- **Geschwindigkeit und Stabilität werden gemeinsam gemessen, nie getrennt.** Ein DORA-informiertes Dashboard ohne beide Hälften nutzt das Framework nicht wirklich.
- **Konsistenz der Definition zählt mehr als die Rohzahl.** Ein Team, das bei einer konsistent definierten Metrik von „mittlerer" zu „hoher" Leistung wechselt, ist ein echtes Signal; zwei unterschiedlich berechnete Teams zu vergleichen ist keines.
- **DORA misst das System, nicht Einzelpersonen.** Diese Metriken auf einzelne Ingenieurinnen und Ingenieure anzuwenden, bricht die statistische Grundlage des Frameworks und lädt genau zu der Manipulation ein, vor der Kapitel 1.2 warnt.
- **Alle vier Metriken sind Stellvertreter, keine Ziele.** Sie korrelieren mit organisatorischer Leistung; der Zahl selbst hinterherzujagen, losgelöst von echter Lieferverbesserung, untergräbt den Zweck des Frameworks.

## Empfehlungen

### Deployment-Frequenz aus der Pipeline instrumentieren, nur Produktionsveröffentlichungen zählen

**Deployment-Frequenz** misst, wie oft ein Team erfolgreich in die Produktion veröffentlicht. Nur erfolgreiche Produktions-Deployments sollten gezählt werden, automatisch aus CI/CD-Pipeline-Daten instrumentiert, nie selbst berichtet. Speziell auf Substitutions-Manipulation sollte geachtet werden, eine bedeutsame Änderung in mehrere triviale Deploys aufzuteilen, rein um die Zählung aufzublähen, indem die Deploy-Größe neben der Frequenz verfolgt wird: eine schrumpfende Durchschnittsgröße neben einer steigenden Zahl ist das klarste Zeichen, dass das geschieht.

### Lead Time für Änderungen vom ersten Commit bis zur Produktion instrumentieren

**Lead Time für Änderungen** misst die Zeit vom ersten Commit einer Codeänderung bis zu ihrem erfolgreichen Deployment in der Produktion. Sowohl der Median als auch ein hohes Perzentil sollten berichtet werden, nicht nur ein Mittelwert, gemäß dem Rat aus Kapitel 1.6 zu schief verteilten zeitbasierten Daten, und es sollte auf Definitionsabdrift an beiden Endpunkten geachtet werden, die die Zahl schönt, ohne echte Verbesserung.

### Change Failure Rate schriftlich definieren, bevor über Teams hinweg verglichen wird

**Change Failure Rate** misst den Prozentsatz der Deployments, die einen Ausfall verursachen, der Behebung braucht, ein Rollback, einen Hotfix oder einen Incident. Das ist die schwierigste der vier, konsistent zu definieren, weil „Ausfall" nicht von selbst objektiv ist. Eine schriftliche Definition sollte vereinbart werden, bevor Teams verglichen werden; ohne sie kann ein scheinbar fairer Vergleich stark in die Irre führen. Auf verdächtig schnelle Verbesserung ohne zugrunde liegende Prozessänderung sollte geachtet werden, das klarste Zeichen für Definitions-Manipulation statt echten Fortschritts.

### Wiederherstellungszeit ab Entdeckung messen, nicht ab dem Deploy-Ereignis

**Wiederherstellungszeit nach fehlgeschlagenem Deployment** misst, wie lange es dauert, den Dienst wiederherzustellen, sobald ein Deployment einen Ausfall verursacht. Die Uhr sollte bei der Entdeckung beginnen, nicht beim Deploy-Ereignis selbst, damit die Zahl echte Wiederherstellungsverzögerung widerspiegelt statt einer Überwachungslücke. Speziell in automatisierte Rollback-Fähigkeit sollte investiert werden, der mit Abstand häufigste Hebel, um diese Metrik echt zu verbessern, statt indem ein Incident vorzeitig für gelöst erklärt wird.

### Flow-Metriken, nicht DORA, nutzen, um zu diagnostizieren, warum sich eine Zahl bewegt hat

Wenn sich eine DORA-Metrik verschiebt, erklären die vier Zahlen allein selten warum. Zykluszeit-Zerlegung (Kapitel 2.6), Flow-Last (Kapitel 2.4) und Flow-Verteilung (Kapitel 2.3) sollten als diagnostische Ebene unter DORAs Zusammenfassungszahlen genutzt werden, und eine DORA-Metrik sollte nie in einer individuellen Leistungsbeurteilung genutzt werden, der schädlichste Missbrauch, dem dieses Framework ausgesetzt ist.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Vollständiges DORA-Framework, alle vier Metriken gepaart | Forschungsvalidiert, widersteht Manipulation durch Paarung, ermöglicht fairen teamübergreifenden Vergleich | Schweigt darüber, welche Art von Wert geliefert wird; braucht das Flow Framework daneben für dieses Bild |
| DORA als einziges organisierendes Metrik-Set dieses Teils | Einfach, den meisten Engineering-Führungskräften vertraut | Übersieht die Wertmischungsfrage vollständig, der Grund dieses Buches, es hier zu depriorisieren |
| DORA plus Flow Framework gemeinsam | Pipeline-Mechanik und Wertmischung beide sichtbar | Braucht die Pflege zweier Metrik-Vokabulare statt eines |
| DORA auf individueller Ebene angewendet | Fühlt sich für manche Führungskräfte direkt handlungsleitend an | Bricht die statistische Validität des Frameworks; starke Goodhart-Gesetz-Exposition |

Die zentrale Spannung ist **mechanische Strenge gegen Geschäftsverständlichkeit**. DORAs vier Metriken sind präzise definiert und forschungsvalidiert, was sie hervorragend für den Vergleich der Pipeline-Leistung über Teams hinweg macht, aber genau diese Präzision ist eng auf die Pipeline selbst begrenzt und sagt nichts darüber, ob die richtige Arbeit durch sie fließt. Die Lösung: DORA als Referenzebene für Pipeline-Gesundheit behalten, Kapitel 2.10s richtiger Platz in der Struktur dieses Buches, während die Flow-Framework-Kapitel früher in diesem Teil für die geschäftsseitige Frage der Wertmischung genutzt werden, statt zu versuchen, DORA eine Frage beantworten zu lassen, für die es nie gestaltet wurde.

## Fragen für die Diskussion im Team

1. **Instrumentieren wir alle vier DORA-Metriken aus der Pipeline, oder sind manche davon selbst berichtete Schätzungen?** Ein auf objektiver, forschungsvalidierter Messung aufgebautes Framework verliert einen Großteil seines Werts in dem Moment, in dem eine Zahl zur besten Vermutung wird. Die tatsächliche Datenquelle jeder Metrik sollte geprüft werden (Kapitel 1.5).

2. **Teilen alle Teams, die wir mittels DORA-Metriken vergleichen, dieselben Definitionen von Deployment, Änderung und Ausfall?** Ein Vergleich zwischen Teams mit unterschiedlichen Definitionen ist kein echter Vergleich und kann unfaire Urteile über relative Leistung erzeugen.

3. **Hat jemand in unserer Organisation je eine DORA-Metrik in einer individuellen Leistungsbeurteilung genutzt, formal oder informell?** Das ist der schädlichste Missbrauch des Frameworks und geschieht oft still. Direkt sollte gefragt werden, und auf eine unbequeme, aber nötige Antwort sollte man vorbereitet sein.

4. **Könnten unsere DORA-Zahlen hervorragend sein, während unsere Flow-Verteilung (Kapitel 2.3) still zu Nacharbeit oder weg von Features abgedriftet ist?** Das ist genau die Lücke, die DORA allein nicht sehen kann. Beide Zahlensätze sollten gemeinsam gezogen und geprüft werden, ob sie eine konsistente Geschichte erzählen.

5. **Haben wir die Flow-Metrik-Diagnostik, um zu erklären, warum sich eine unserer DORA-Metriken bewegt hat?** Eine DORA-Zahl allein sagt, dass sich etwas geändert hat, nicht was. Es sollte geprüft werden, ob Teams „warum ist die Lead Time diesen Monat gestiegen" mit Daten beantworten können, oder nur mit Spekulation.

6. **Wie würden sich unsere vier DORA-Zahlen ändern, wenn wir bewusst versuchten, jede einzelne zu manipulieren, und würden wir es bemerken?** Deployment-Frequenz, Lead Time, Change Failure Rate und Wiederherstellungszeit sollten einzeln durchgegangen werden, die praktische Anwendung von Kapitel 1.2s Kerndisziplin auf dieses konkrete Framework.

## Branchenperspektive

**Startup.** DORAs Geschwindigkeitsmetriken kommen einem kleinen Team, das bereits häufig deployt, meist natürlich; die schwierigere Disziplin ist, Change Failure Rate und Wiederherstellungszeit ehrlich zu instrumentieren, statt Stabilität anzunehmen, weil noch nichts schwer kaputtgegangen ist. DORA früh mit selbst einer informellen Flow-Item-Aufteilung zu paaren (Kapitel 2.2) vermeidet den Aufbau eines falschen Gefühls von Liefergesundheit rein um Pipeline-Geschwindigkeit herum.

**Kleinunternehmen.** Die meisten modernen CI/CD- und Versionsverwaltungsplattformen exportieren Deployment-Frequenz- und Lead-Time-Daten mit minimaler Einrichtung; Deploys mit Incidents für Change Failure Rate zu verknüpfen braucht typischerweise mehr manuellen Aufwand. Mit den beiden Geschwindigkeitsmetriken sollte begonnen und Stabilitäts-Tracking hinzugefügt werden, sobald ein informelles Incident-Protokoll existiert, gegen das verknüpft werden kann.

**Enterprise.** DORAs größter verbleibender Wert auf dieser Ebene ist fairer, konsistenter teamübergreifender Vergleich für Plattform-Investitionsentscheidungen. Definitionen sollten organisationsweit standardisiert (Kapitel 1.4), Instrumentierung zentral automatisiert werden, und jeder DORA-Bericht sollte mit einer Flow-Verteilungsansicht gepaart werden, damit die Führungsebene sowohl Pipeline-Geschwindigkeit als auch Wertmischung gemeinsam sieht, nicht eines ohne das andere.

**Behörden.** DORA-Metriken geben einem Modernisierungsprogramm weiterhin einen vertretbaren, forschungsgestützten Weg, Verbesserung der Liefermechanik gegenüber Aufsichtsgremien nachzuweisen. Alle vier Metriken sollten gemeinsam berichtet werden, nie nur die schmeichelhafte Hälfte herausgepickt, und sie sollten mit Flow-Verteilung gepaart werden, damit der Bericht auch die schwierigere, wichtigere Frage beantwortet, was die schnellere Pipeline tatsächlich liefert.

## Beispiele

**Enterprise.** Das Plattform-Modernisierungsprogramm eines großen Telekommunikationsunternehmens instrumentierte alle vier DORA-Metriken konsistent über vierzig Produktteams hinweg und zeigte über achtzehn Monate eine echte Bewegung von der Kategorie niedriger zu hoher Leistung, Deployment-Frequenz um etwa das Zehnfache gestiegen, Lead Time von Wochen auf Tage gesunken, Change Failure Rate flach gehalten. Ein Vorstandsmitglied, das die Präsentation prüfte, stellte eine Frage, die die DORA-Zahlen allein nicht beantworten konnten: wie viel dieser schnelleren Lieferung neuer Kundenwert gegenüber Nacharbeit war. Die Engineering-Organisation hatte keine Antwort, bis sie im folgenden Quartal Flow-Item-Klassifikation einführte, die zeigte, dass Feature-Arbeit als Anteil des Gesamt-Outputs tatsächlich gesunken war, selbst während sich DORAs Geschwindigkeitszahlen verbesserten, ein Befund, der die Prioritäten des Programms fürs nächste Jahr umgestaltete.

**Behörden.** Das IT-Modernisierungsbüro einer Landesregierung übernahm DORA-Metriken als Vertragsbedingung, um die Lieferfähigkeit mehrerer konkurrierender Anbieterteams zu vergleichen, eine wirksame Nutzung der Vergleichbarkeit des Frameworks. Die hohe Deployment-Frequenz eines Anbieters erwies sich, sobald Change Failure Rate danebengestellt wurde, als mit einer fast dreimal höheren Ausfallrate als bei seinen Konkurrenten korreliert, eine Information, die direkt die Vertragsverlängerungsentscheidung des Büros informierte. Das Büro fügte später eine Flow-Verteilungs-Anforderung zu denselben Verträgen hinzu, nachdem entdeckt wurde, dass der Anbieter mit den besten DORA-Zahlen auch derjenige war, der den kleinsten Kapazitätsanteil für die vom Vertrag konkret verlangte Sicherheitsbehebungsarbeit aufwendete.

## Business Case: Motivation, ROI und TCO

Die Rendite, DORA gut einzuführen, innerhalb seines richtigen Umfangs, ist eine vertretbare, evidenzbasierte Antwort auf „wird unsere Lieferpipeline schneller und sicherer", was eine der handhabbareren Fragen im Engineering bleibt, die mit Zuversicht beantwortet werden kann. Diese Antwort rechtfertigt Plattform- und Tooling-Investition mit echten Zahlen und lässt die Führungsebene konkurrierende Investitionen auf fairer, konsistenter Basis vergleichen, genau wie schon immer.

Die Gesamtbetriebskosten sind die Integrationsarbeit, Deploy-Ereignisse mit Incident-Aufzeichnungen für Change Failure Rate und Wiederherstellungszeit zu verknüpfen, nicht trivial über eine große, heterogene Tooling-Landschaft. Die zusätzlichen Kosten, DORA mit den Flow-Framework-Kapiteln früher in diesem Teil zu paaren, sind vergleichsweise klein, da Flow-Item-Klassifikation eine Berichtskonvention ist, die auf vorhandene Arbeit gelegt wird, kein paralleles Messsystem, und die Rendite, genau den Wertmischungs-blinden-Fleck zu fangen, den das Telekommunikationsbeispiel oben illustriert, ist diese bescheidene zusätzliche Investition wert.

## Antipatterns und Fallstricke

- **DORA als das gesamte Bild der Liefergesundheit behandeln:** der Manipulationsvektor, gegen den die Platzierung dieses Kapitels gestaltet ist. Eine Organisation kann echt hervorragende DORA-Zahlen präsentieren, schnelle, häufige, stabile Deployments, während sich ihr tatsächlich gelieferter Wert still zu Nacharbeit oder weg von Features verschoben hat, und DORAs vier Metriken allein werden diese Verschiebung nie enthüllen, weil sie nie dafür gestaltet wurden, sie zu messen. Die Leitplanke ist, jeden DORA-Bericht mit Flow-Verteilung zu paaren (Kapitel 2.3), sodass eine schnelle, stabile Pipeline, die die falsche Arbeitsmischung liefert, sichtbar ist, statt für echte Liefergesundheit gehalten zu werden.
- **Nur die Geschwindigkeitshälfte von DORA berichten:** untergräbt den zentralen Befund des Frameworks, dass sich Geschwindigkeit und Stabilität bei Spitzenleistern gemeinsam bewegen.
- **DORA-Metriken in individuellen Leistungsbeurteilungen nutzen:** bricht die statistische Validität des Frameworks und lädt zu starker Manipulation ein.
- **Teams mit inkonsistenten Definitionen vergleichen:** erzeugt Vergleiche, die fair aussehen, es aber nicht sind.
- **Selbst berichtete DORA-Zahlen statt pipeline-instrumentierter:** führt genau die Verzerrung ein, die das Framework beseitigen sollte.
- **DORA als diagnostisch statt zusammenfassend behandeln:** lässt ein Team unfähig zurück zu erklären, warum sich eine Zahl bewegt hat, ohne die Flow-Metrik-Ebene darunter.

## Reifegradmodell

- **Stufe 1, Initiieren:** DORA-Metriken werden, falls überhaupt verfolgt, selbst berichtet, inkonsistent definiert und nie mit Flow-Daten gepaart.
- **Stufe 2, Entwickeln:** Manche Teams instrumentieren DORA aus der Pipeline, aber Definitionen variieren, und es gibt kein Flow-Verteilungs-Gegenstück zur Prüfung.
- **Stufe 3, Standardisieren:** Alle vier DORA-Metriken werden konsistent aus Pipeline- und Incident-Daten instrumentiert, mit gemeinsamen Definitionen, und routinemäßig neben Flow-Verteilung gezeigt.
- **Stufe 4, Steuern:** DORA und Flow-Metriken werden auf jeder Ebene der Organisation als Standard-Paarung gemeinsam überprüft, und DORA wird nie zur individuellen Bewertung genutzt.
- **Stufe 5, Orchestrieren:** Die Organisation kann auf konkrete Fälle verweisen, in denen Flow-Verteilung ein Wertmischungsproblem fing, das hervorragende DORA-Zahlen allein verborgen hatten, und nutzt beide Frameworks bewusst für die jeweils unterschiedlichen Fragen, die sie beantworten.

## Diskussionsanregungen

1. Wo platzieren uns unsere vier DORA-Metriken aktuell auf dem Leistungsspektrum, ehrlich betrachtet?
2. Könnten unsere DORA-Zahlen hervorragend aussehen, während unsere Flow-Verteilung still abgedriftet ist? Haben wir das je geprüft?
3. Hat je jemand eine DORA-Zahl genutzt, um eine Einzelperson zu beurteilen, selbst informell?
4. Würden unsere Zahlen günstig abschneiden, wenn ein Konkurrent seine DORA-Zahlen veröffentlichte, und würde dieser Vergleich uns tatsächlich sagen, wer mehr echten Wert liefert?

## Die wichtigsten Erkenntnisse

- DORAs vier Metriken, **Deployment-Frequenz, Lead Time, Change Failure Rate und Wiederherstellungszeit**, paaren Geschwindigkeit mit Stabilität nach Design und bleiben echt forschungsvalidiert.
- Dieses Buch platziert DORA **zuletzt in diesem Teil**, weil es die Pipeline misst, nicht den Wert, der durch sie fließt; es sollte mit Flow-Verteilung (Kapitel 2.3) gepaart werden für das vollständigere Bild.
- Der zentrale Manipulationsvektor des Kapitels ist, **hervorragende DORA-Zahlen mit vollständiger Liefergesundheit zu verwechseln**; die Leitplanke ist, DORA immer neben Flow-Verteilung zu berichten.
- **DORA-Metriken sollten nie in individuellen Leistungsbeurteilungen genutzt werden**; die Validität des Frameworks hängt von Messung auf Systemebene ab, nicht individueller.
- **Flow-Metriken sollten als diagnostische Ebene** unter DORAs Zusammenfassungszahlen genutzt werden, wenn sich eine davon bewegt.

## Quellen und weiterführende Literatur

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
