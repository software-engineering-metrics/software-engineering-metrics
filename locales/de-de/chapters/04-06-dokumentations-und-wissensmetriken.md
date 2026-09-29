# 4.6 Dokumentations- und Wissensmetriken

## Überblick und Motivation

Dieses Kapitel schließt Teil 4 ab, indem es misst, ob das Wissen, das nötig ist, um eine Codebasis sicher zu warten, tatsächlich dokumentiert und auffindbar ist, nicht nur, ob Dokumentation technisch irgendwo existiert. Kapitel 3.5 behandelte Kommunikation und Zusammenarbeit als Entwicklererfahrungs-Anliegen; dieses Kapitel behandelt dasselbe zugrunde liegende Problem, Wissensverfügbarkeit, von der Code-Seite: hat eine neue Ingenieurin oder ein neuer Ingenieur, oder eine bestehende Person, die an unvertrautem Code arbeitet, was sie braucht, um eine sichere Änderung zu machen, oder lebt dieses Wissen nur in den Köpfen einer schrumpfenden Anzahl langjähriger Mitarbeitender.

Die Messherausforderung hier ist echt schwierig, schwieriger als die meisten anderen Metriken in diesem Buch, weil Dokumentationsqualität und -nützlichkeit von Natur aus subjektiver sind als ein Abdeckungs-Prozentsatz oder ein Komplexitätswert. Der Ansatz dieses Kapitels ist, Stellvertreter für Nützlichkeit zu messen, statt Existenz: wie oft Dokumentation tatsächlich aufgerufen wird, wie oft dieselbe Frage wiederholt gestellt wird, obwohl eine dokumentierte Antwort existiert, und wie lange jemand, der mit einem System unvertraut ist, braucht, um darin produktiv zu werden. Keiner dieser Stellvertreter ist allein perfekt, aber zusammen geben sie ein weit ehrlicheres Bild als das Zählen der Anzahl Wiki-Seiten oder README-Dateien, die eine Codebasis enthält.

Für große Teams verstärken sich die Anliegen dieses Kapitels mit organisatorischer Betriebszugehörigkeit und Fluktuation auf Weisen, die leicht zu unterschätzen sind, bis eine Krise das Thema erzwingt: ein System, das über Jahre von denselben zwei Ingenieurinnen und Ingenieuren gepflegt wird, kann perfekt gut mit fast keiner geschriebenen Dokumentation funktionieren, genau bis beide diese Personen im selben Jahr das Unternehmen verlassen, an welchem Punkt die Organisation entdeckt, dass das Wissen nie tatsächlich irgendwo dauerhaft erfasst wurde. Konzerne und Behörden, mit typisch längeren Systemlebensdauern und weniger sicherer Personalkontinuität als ein Startup, tragen dieses Risiko akuter als die meisten.

## Kernprinzipien

- **Dokumentationsexistenz ist nicht dasselbe wie Dokumentationsnützlichkeit.** Es sollte gemessen werden, ob sie tatsächlich hilft, nicht nur, ob sie vorhanden ist.
- **Wiederholte Fragen trotz dokumentierter Antworten enthüllen ein Auffindbarkeitsproblem, kein Dokumentationsaufwand-Problem.** Mehr Inhalt ist nicht immer die Korrektur.
- **Onboarding-Zeit bis zum produktiven Beitrag ist ein starker, praktischer Stellvertreter** für allgemeine Wissensgesundheit, der sich direkt mit den Zusammenarbeitsmetriken aus Kapitel 3.5 verbindet.
- **Wissen, das nur in den Köpfen von Menschen lebt, ist ein Dauerhaftigkeitsrisiko,** kein stabiler, nachhaltiger Zustand, wie gut er auch derzeit funktioniert.
- **Dokumentation verfällt.** Eine Seite, die vor einem Jahr korrekt war, mag jetzt aktiv irreführend sein, und Veralterung selbst muss verfolgt werden.

## Empfehlungen

### Dokumentationszugriff und Veralterung verfolgen, nicht nur Existenz

Wo die Dokumentationsplattform es unterstützt, sollte verfolgt werden, wie oft Seiten tatsächlich angesehen werden, und separat, wie lange es her ist, seit eine Seite zuletzt aktualisiert wurde, relativ dazu, wie oft sich das zugrunde liegende System, das sie beschreibt, geändert hat (Kreuzreferenzierung der Fluktuationsdaten aus Kapitel 4.3 ist hier direkt nützlich). Eine Seite, die ein System beschreibt, das sich seit der letzten Bearbeitung der Seite substanziell geändert hat, ist ein starker Kandidat dafür, aktiv irreführend zu sein statt bloß unhilfreich, und dieses Veralterungssignal verdient mindestens so viel Aufmerksamkeit wie zu verfolgen, ob Dokumentation überhaupt existiert.

### Auf wiederholte Fragen als Auffindbarkeitssignal achten

Wenn dieselbe Frage wiederholt in einem Team-Chat-Kanal oder während des Onboardings gestellt wird, obwohl eine dokumentierte Antwort technisch irgendwo existiert, enthüllt dieses Muster ein Auffindbarkeitsproblem, die Antwort ist nicht dort, wo Menschen natürlich danach suchen, statt eines Dokumentationsaufwand-Problems, das mehr Schreiben beheben würde. Wiederkehrende Fragen sollten explizit verfolgt werden, und genutzt werden, um zu priorisieren, bestehenden Inhalt umzuorganisieren oder besser sichtbar zu machen, statt mehr davon zu schreiben.

### Onboarding-Zeit bis zum ersten bedeutsamen, unabhängigen Beitrag messen

Diese Metrik, in Kapitel 3.5 als Zusammenarbeitssignal eingeführt, ist gleichermaßen ein Dokumentations- und Wissensgesundheitssignal von der Code-Seite. Eine konsistent kurze, vorhersagbare Onboarding-Zeit deutet auf echt zugängliches, korrektes Wissen hin; eine lange, stark variable Zeit, besonders eine, die stark davon abhängt, welche bestimmte Person zufällig ein neues Teammitglied einarbeitet, deutet auf Wissen hin, das gefährlich konzentriert im individuellen Gedächtnis lebt statt in dauerhafter, geschriebener Form.

### Undokumentierte kritische-Wissens-Bereiche explizit identifizieren und priorisieren

Die Wissenskonzentrationsdaten (die [Bus-Faktor](https://en.wikipedia.org/wiki/Bus_factor)-Analyse aus Kapitel 3.5) sollten mit Dokumentationsabdeckung kreuzreferenziert werden: ein System mit einem Bus-Faktor von eins und keiner bedeutsamen Dokumentation ist ein schweres, sich akkumulierendes Risiko, das priorisierte Aufmerksamkeit gegenüber einem gut dokumentierten System mit demselben niedrigen Bus-Faktor verdient, da die Dokumentation zumindest eine teilweise Milderung bietet, während eine dedizierte Nachfolgerin oder ein dedizierter Nachfolger ausgebildet wird.

### Dokumentationsschuld als Kategorie innerhalb des technischen-Schuld-Rückstands behandeln

Statt Dokumentationslücken separat und informell zu verfolgen, sollten bedeutsame Dokumentationslücken in denselben sichtbaren, quantifizierten Rückstand eingebracht werden, der in Kapitel 4.5 beschrieben ist, besonders für kritische Systeme mit niedrigem Bus-Faktor, damit Dokumentationsarbeit fair um priorisierte Kapazität konkurriert, statt dauerhaft als Aufgabe niedrigeren Status im Vergleich zu code-fokussierter Schuldbehebung aufgeschoben zu werden.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Keine Dokumentationsmessung | Geringer Aufwand | Wissensrisiko bleibt unsichtbar, bis eine Krise es entdeckt |
| Dokumentationsexistenz zählen (Seitenzahl, README-Präsenz) | Einfach, leicht zu berichten | Sagt nichts über Nützlichkeit, Genauigkeit oder Auffindbarkeit |
| Zugriff und Veralterung verfolgen | Enthüllt tatsächliche Nützlichkeit und Verfall | Braucht Dokumentationsplattform-Analytik und laufende Überprüfungsdisziplin |
| Onboarding-Zeit als Stellvertreter | Praktisch, konkret, verbindet sich direkt mit echter Geschäftswirkung | Indirekt; andere Faktoren neben Dokumentation beeinflussen auch die Onboarding-Geschwindigkeit |

Die zentrale Spannung ist **Messbarkeit gegen Bedeutung**. Dokumentationsexistenz ist trivial leicht zu zählen und sagt fast nichts Nützliches; echte Nützlichkeit, ob jemand tatsächlich dokumentiertes Wissen finden und sich darauf verlassen kann, wenn er es braucht, ist das, was tatsächlich zählt, aber schwerer direkt zu messen. Die Spannung sollte gelöst werden, indem die von diesem Kapitel empfohlenen Stellvertreter, Zugriffsmuster, Veralterung relativ zur Fluktuation, wiederholte Fragen, und Onboarding-Zeit, in Kombination genutzt werden, wobei akzeptiert wird, dass keiner allein perfekt ist, aber dass ihre Konvergenz weit bedeutsamer ist als eine Existenzzahl allein.

## Fragen für die Diskussion im Team

1. **Existiert für unser kritischstes System mit dem niedrigsten Bus-Faktor tatsächlich bedeutsame, korrekte Dokumentation, oder würde eine ausscheidende Expertin oder ein ausscheidender Experte den Großteil des echten Wissens mitnehmen?** Dies ist die schärfste, konkreteste Version des zentralen Anliegens dieses Kapitels; sie sollte zuerst ehrlich für das riskanteste einzelne System beantwortet werden.

2. **Welche Frage wird wiederholt in unserem Team-Chat gestellt, obwohl eine dokumentierte Antwort irgendwo existiert?** Wenn sofort eine genannt werden kann, ist das ein Auffindbarkeitsproblem, das es wert ist, direkt behoben zu werden, wahrscheinlich durch Umorganisation oder bessere Sichtbarmachung bestehenden Inhalts statt mehr zu schreiben.

3. **Wie lange brauchte unser jüngstes neues Teammitglied, um seinen ersten bedeutsamen, unabhängigen Beitrag zu leisten, und wie verglich sich das mit dem Teammitglied davor?** Eine große, unerklärte Varianz zwischen Individuen deutet oft auf Wissen hin, das stark davon abhängt, wer zufällig jemanden einarbeitet, statt auf dauerhafte, zugängliche Dokumentation.

4. **Wann haben wir zuletzt geprüft, ob ein Dokumentationsstück noch korrekt war, relativ dazu, wie sehr sich das zugrunde liegende System seit seiner Verfassung geändert hat?** Wenn die ehrliche Antwort ist „wir prüfen das nicht systematisch", ist dieses Veralterungsrisiko wahrscheinlich größer, als derzeit irgendjemand annimmt.

5. **Umfasst unser technischer-Schuld-Rückstand (Kapitel 4.5) Dokumentationslücken, oder wird Dokumentationsarbeit dauerhaft als Aufgabe niedrigeren Status im Vergleich zu Code-Korrekturen aufgeschoben?** Der tatsächliche Rückstand sollte überprüft werden, und geschaut werden, ob Dokumentationsschuld sichtbar ist und um priorisierte Kapazität konkurriert oder effektiv unsichtbar ist.

6. **Was würde es uns kosten, wenn die ein oder zwei Personen, die unser kritischstes, am wenigsten dokumentiertes System verstehen, im selben Jahr das Unternehmen verließen?** Diese konkrete, unbequeme Frage ist es wert, ehrlich beantwortet zu werden, statt das Risiko als abstrakt oder unwahrscheinlich zu behandeln.

## Branchenperspektive

**Startup.** Formale Dokumentationsmetriken sind mit einem kleinen Team, in dem sich Wissen durch ständiges, direktes Gespräch verbreitet, meist unnötig. Das zu beachtende Risiko ist dieselbe Bus-Faktor-Konzentration, vor der Kapitel 3.5 warnt, jetzt speziell auf Dokumentation angewandt: während das Team über die Größe hinauswächst, in der alle täglich sprechen, wird undokumentiertes Wissen, das informell gut funktionierte, zu einer echten Verbindlichkeit.

**Kleinunternehmen.** Zuerst sollte das kritischste, am wenigsten redundante System dokumentiert werden, selbst informell, statt umfassende Dokumentation über alles zu versuchen. Ein kurzes, korrektes Dokument, das den riskantesten einzelnen Ausfallpunkt abdeckt, liefert mehr echten Wert als breite, aber flache Abdeckung überall.

**Enterprise.** Dokumentationsveralterung und Auffindbarkeit skalieren hier beide schlecht, da eine große Organisation Dokumentation über viele Teams und Plattformen schneller akkumuliert, als jemand sie aktuell oder konsistent organisiert halten kann. In Dokumentationsplattform-Analytik sollte investiert werden, um Zugriff und Veralterung im großen Maßstab zu verfolgen, und Dokumentationsschuld sollte als erstklassige Kategorie im organisationsweiten Schuldrückstand behandelt werden.

**Behörden.** Lange Mitarbeiterbindung, üblich in Organisationen des öffentlichen Sektors, kann schweres undokumentiertes-Wissen-Risiko hinter scheinbarer Stabilität verbergen, da ein System, das fünfzehn Jahre von derselben Person gepflegt wird, perfekt gut funktionieren mag, genau bis diese Person in Rente geht. Dokumentationsgesundheit sollte explizit als Anliegen der Betriebskontinuität behandelt werden, direkt mit Personal- und Nachfolgeplanung verbunden, nicht bloß als Engineering-Annehmlichkeit.

## Beispiele

**Enterprise.** Ein Finanzdienstleistungsunternehmen entdeckte während einer unabhängigen Reorganisation, dass seine Kern-Risikoberechnungs-Engine keine bedeutsame Dokumentation über einige veraltete Code-Kommentare hinaus hatte, und die zwei Ingenieurinnen und Ingenieure, die sie am besten verstanden, wurden beide gleichzeitig einer neuen Initiative zugewiesen. Ein Notfall-Dokumentationsaufwand, unter erheblichem Zeitdruck durchgeführt, extrahierte und erfasste das kritische Wissen, bevor die Neuzuweisung wirksam wurde, aber der Prozess kostete mehrere Wochen dedizierter Zeit leitender Ingenieurinnen und Ingenieure, die graduell und günstiger hätte verteilt werden können, wenn Dokumentationsgesundheit proaktiv verfolgt und priorisiert worden wäre, statt als Notfall entdeckt zu werden.

**Behörden.** Das jahrzehntealte Fallmanagementsystem einer Landesregierung hatte über die Jahre substanzielle Dokumentation akkumuliert, aber ein Auffindbarkeits-Audit fand, dass neue Teammitglieder konsistent relevante bestehende Dokumentation nicht finden konnten und wiederholt dieselbe Handvoll Fragen in Team-Kanälen stellten, Fragen, die tatsächlich bereits irgendwo in der weitläufigen, schlecht organisierten Dokumentationsplattform der Behörde beantwortet waren. Statt mehr Inhalt zu schreiben, investierte die Behörde in die Umorganisation und Verbesserung der Such- und Navigationsstruktur ihrer bestehenden Dokumentation, und eine Folgeumfrage zeigte eine messbare Reduktion wiederholter Fragen und eine bedeutsam schnellere berichtete Onboarding-Erfahrung für neue Mitarbeitende, ohne eine einzige neue Inhaltsseite hinzuzufügen.

## Business Case: Motivation, ROI und TCO

Die Rendite, Dokumentationsgesundheit bewusst zu messen und zu verwalten, sind vermiedene Krisenkosten: das Finanzdienstleistungsbeispiel oben zeigt den Unterschied zwischen proaktiver, gradueller Wissenserfassung und einem teuren, komprimierten Notfallaufwand, erzwungen durch ungeplante Personalbewegung. Undokumentiertes kritisches Wissen ist eine ständige Verbindlichkeit, die sichtbar nichts kostet, bis zu dem Moment, in dem sie plötzlich sehr teuer wird.

Die Gesamtbetriebskosten sind größtenteils die Disziplin, die von diesem Kapitel empfohlenen Stellvertreter zu verfolgen, Zugriffsmuster, Veralterung, wiederholte Fragen, Onboarding-Zeit, und die Bereitschaft, Dokumentationslücken in einen priorisierten Rückstand einzubringen, statt sie als dauerhaft niedrigeren Status als code-fokussierte Arbeit zu behandeln. Diese Disziplin kostet weit weniger als die Krisenmodus-Wissensextraktion, die das Finanzdienstleistungsbeispiel als Alternative zeigt.

## Antipatterns und Fallstricke

- **Dokumentationsexistenz statt Nützlichkeit zählen:** sagt fast nichts darüber, ob Wissen tatsächlich zugänglich ist, wenn es gebraucht wird.
- **Mehr Inhalt in Reaktion auf wiederholte Fragen schreiben, ohne zuerst Auffindbarkeit zu prüfen:** adressiert oft das falsche Problem vollständig.
- **Nie prüfen, ob Dokumentation relativ dazu veraltet ist, wie sehr sich das System geändert hat:** riskiert aktiv irreführenden, veralteten Inhalt.
- **Dokumentationsschuld als dauerhaft niedrigeren Status als Code-Schuld behandeln:** lässt sie chronisch depriorisiert und unsichtbar auf dem Rückstand.
- **Scheinbare Stabilität, ein System, das sich seit Jahren nicht geändert hat, mit niedrigem Risiko verwechseln:** kann ein schweres, undokumentiertes Bus-Faktor-Problem hinter einem System verbergen, das schlicht seine einzige Expertin oder seinen einzigen Experten noch nicht gebraucht hat.
- **Kritisches undokumentiertes Wissen erst während eines Notfall-Personalübergangs entdecken:** der teure, vermeidbare Fehlermodus, den dieses Kapitel zu verhindern sucht.

## Reifegradmodell

- **Stufe 1, Initiieren:** Dokumentationsgesundheit wird nicht gemessen; Wissenskonzentration und Veralterungsrisiko werden nur durch Krise entdeckt.
- **Stufe 2, Entwickeln:** Manche Dokumentation existiert, aber es gibt keine systematische Verfolgung von Zugriff, Veralterung oder Auffindbarkeit.
- **Stufe 3, Standardisieren:** Zugriff und Veralterung werden für kritische Systeme verfolgt, und Onboarding-Zeit wird organisationsweit als Stellvertreter für Wissensgesundheit gemessen.
- **Stufe 4, Steuern:** Dokumentationslücken werden in den priorisierten technischen-Schuld-Rückstand eingebracht, kreuzreferenziert mit Bus-Faktor-Risiko, um die schwersten kombinierten Risiken zu identifizieren.
- **Stufe 5, Orchestrieren:** Die Organisation identifiziert und adressiert proaktiv undokumentiertes-kritisches-Wissen-Risiko, bevor ein Personalübergang das Thema erzwingt, und kann auf konkrete, messbare Onboarding- oder Vorfallreaktionsverbesserungen verweisen, die auf Dokumentationsinvestition zurückgeführt werden.

## Diskussionsanregungen

1. Was ist unsere einzige schwerste Kombination aus niedrigem Bus-Faktor und schlechter Dokumentation gerade jetzt?
2. Welche Frage wird wiederholt gestellt, obwohl eine dokumentierte Antwort existiert?
3. Woran würden wir erkennen, wenn ein Dokumentationsstück veraltet und irreführend geworden wäre?
4. Umfasst unser technischer-Schuld-Rückstand Dokumentationslücken, oder sind sie unsichtbar?
5. Was würde es uns kosten, wenn die einzige Expertin oder der einzige Experte unseres am schlechtesten dokumentierten Systems dieses Jahr das Unternehmen verließe?

## Die wichtigsten Erkenntnisse

- **Nützlichkeit, nicht Existenz** sollte gemessen werden: ob Dokumentation tatsächlich hilft, unter Nutzung von Stellvertretern wie Zugriffsmustern, Veralterung, und wiederholten Fragen.
- **Wiederholte Fragen trotz dokumentierter Antworten** enthüllen ein Auffindbarkeitsproblem, nicht notwendigerweise ein Inhaltsaufwand-Problem.
- **Onboarding-Zeit bis zum produktiven Beitrag** ist ein starker, praktischer Stellvertreter für allgemeine Wissensgesundheit.
- **Undokumentiertes kritisches Wissen ist ein sich akkumulierendes Risiko**, besonders kombiniert mit einem niedrigen Bus-Faktor (Kapitel 3.5); es kostet sichtbar nichts, bis es plötzlich sehr viel kostet.
- **Dokumentationslücken sollten in den technischen-Schuld-Rückstand eingebracht werden** (Kapitel 4.5), damit sie fair um priorisierte Kapazität konkurrieren.

## Quellen und weiterführende Literatur

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, von Jared Bhatti, Zachariah Goldberg, Ted Kubaska, and Sarah Moir (praktische Dokumentationspraktiken für Engineering-Teams).
- *A Philosophy of Software Design*, von John Ousterhout (die Beziehung zwischen Dokumentation, Komplexität und Wartbarkeit).
- *Team Topologies*, von Matthew Skelton and Manuel Pais (organisatorische Designimplikationen konzentrierten gegenüber verteiltem Wissen).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (Dokumentation als eine der mit Lieferleistung korrelierten Fähigkeiten).
