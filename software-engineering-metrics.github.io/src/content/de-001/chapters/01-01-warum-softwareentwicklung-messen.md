# 1.1 Warum Softwareentwicklung überhaupt messen

## Überblick und Motivation

Softwareentwicklung widersetzt sich der Messung auf eine Weise, wie es die Fertigung nicht tut. Ein Fließband produziert identische Einheiten, daher sagt ihre Zählung etwas Reales aus. Softwarearbeit erzeugt Unikate unter sich ständig ändernden Anforderungen, sodass eine naive Zählung, von Commits, von Codezeilen, von geschlossenen Tickets, fast nichts über den gelieferten Wert aussagt. Genau in dieser Lücke zwischen der Schwierigkeit, Softwarearbeit zu messen, und dem sehr realen Bedürfnis zu wissen, ob sie gut läuft, lebt dieses ganze Buch. Dieses Thema schließt diese Lücke ehrlich: nicht indem so getan wird, als sei Softwarearbeit so zählbar wie Bauteile, sondern indem präzise benannt wird, was Messung für eine Engineering-Organisation leisten kann und was nicht.

Messung existiert, um Fragen zu beantworten, die eine Organisation sonst nicht mit Zuversicht beantworten kann: Wird unsere Lieferung schneller oder langsamer, verbessert sich die Qualität oder verschlechtert sie sich, brennen Ingenieurinnen und Ingenieure aus, zahlt sich diese Investition aus. Ohne Metriken werden diese Fragen von der Person beantwortet, die im Raum am selbstbewusstesten spricht, meist der dienstältesten oder überzeugendsten Person, und diese Antwort ist häufig falsch. Teams der [Softwareentwicklung](https://en.wikipedia.org/wiki/Software_engineering), die Messung überspringen, vermeiden damit keineswegs Urteile über die eigene Leistung. Sie fällen diese Urteile nur nach Gefühl, Anekdote und der Verzerrung durch das zuletzt Erlebte statt nach Belegen.

Für große Teams hört das auf, ein Nice-to-have zu sein, und wird strukturell. Ein Team aus sechs Personen kann sich ein gemeinsames mentales Modell davon, wie die Dinge laufen, durch tägliche Gespräche verschaffen. Eine Abteilung mit sechshundert Personen, verteilt über Zeitzonen und Geschäftsbereiche, kann das nicht. Auf dieser Ebene ist ein gemeinsamer, vertrauenswürdiger Zahlensatz der einzige praktikable Ersatz für das informelle Bewusstsein, das ein kleines Team kostenlos bekommt. Die Führungsebene eines Konzerns braucht Metriken, um Investitionen über Dutzende Teams zu verteilen, die um dasselbe Budget konkurrieren. Behördliche Engineering-Organisationen brauchen Metriken, um Parlamenten und der Öffentlichkeit zu zeigen, dass bewilligte Mittel echte Fähigkeiten und nicht nur Aktivität hervorgebracht haben. In beiden Fällen ist „wir haben hart gearbeitet" kein Beleg, eine belastbare Zahl schon.

## Kernprinzipien

- **Messen, um zu lernen, nicht um zu urteilen.** Der primäre Zweck einer Engineering-Metrik ist es, eine Entscheidung zu informieren, nicht eine Person oder ein Team zu bewerten.
- **Eine Zahl ohne angehängte Entscheidung ist Dekoration.** Wenn kein Ablesewert einer Metrik ändern würde, was als Nächstes getan wird, gehört sie nicht auf ein Dashboard.
- **Messung ist ein Mittel, kein Ziel.** Das Ziel ist bessere Software, zuverlässiger geliefert, von einem nachhaltig arbeitenden Team. Metriken existieren nur, um diesem Ziel zu dienen.
- **Jede Metrik hat Kosten.** Instrumentierung, Prüfzeit und das in Thema 1.2 behandelte Risiko der Verhaltensverzerrung kosten alle etwas. Eine Metrik muss diese Kosten wieder hereinholen.
- **Schweigen ist auch eine Entscheidung.** Sich dagegen zu entscheiden, etwas zu messen, ist eine Wahl mit Konsequenzen, kein neutraler Standardzustand.

## Empfehlungen

### Von der Entscheidung ausgehen, nicht vom Dashboard

Bevor irgendetwas instrumentiert wird, sollte die Entscheidung benannt werden, die die Metrik informieren wird. „Wir wollen wissen, ob unsere neue Deployment-Pipeline die Incident-Rate gesenkt hat" ist eine entscheidungsförmige Frage; „lasst uns alles verfolgen, was das Tool exportieren kann" ist es nicht. Von einer Entscheidung rückwärts zu arbeiten, hält den Metrik-Satz klein und macht jede Kachel verteidigungsfähig, wenn jemand fragt, warum sie existiert. Wenn die Entscheidung, die eine Metrik informieren würde, nicht benannt werden kann, sollte sie noch nicht gebaut werden. Thema 1.3 vertieft die Ergebnisse-vor-Output-Version dieser Disziplin.

### Diagnostische Nutzung von bewertender Nutzung trennen

Eine Metrik, die zur Diagnose eines Systemproblems verwendet wird (warum steigt unsere Lead Time), verhält sich völlig anders als dieselbe Metrik, die zur Bewertung einer Person oder eines Teams verwendet wird (wessen Lead Time ist am schlechtesten). Die erste Nutzung lädt zu Untersuchung und Verbesserung ein. Die zweite lädt zu Verschleierung und Manipulation ein, weil die Zahl nun eine reputations- oder finanzbezogene Konsequenz hat. Es sollte explizit und schriftlich festgelegt werden, wofür eine Metrik gedacht ist, und eine diagnostische Metrik sollte nie ohne bewusste Neubewertung des Risikos in eine bewertende Nutzung abgleiten. Diese Unterscheidung zieht sich beständig durch dieses Buch und wird im Abschnitt zu Nicht-Zielen des Metrik-Charters in Thema 1.4 formalisiert.

### Messung als Hypothese behandeln, nicht als Tatsache

Eine Metrik ist ein Stellvertreter für etwas, das einem tatsächlich am Herzen liegt, nicht die Sache selbst. Deployment-Frequenz ist ein Stellvertreter für Lieferfähigkeit, nicht die Lieferfähigkeit selbst. Jede Metrik sollte als Hypothese behandelt werden, die fortlaufend geprüft wird: Bildet diese Zahl noch immer das ab, was wichtig ist, oder hat sich die Welt weiterbewegt und den Stellvertreter zurückgelassen? Diese Frage sollte in festem Rhythmus erneut gestellt werden, statt anzunehmen, dass eine vor zwei Jahren gut gewählte Metrik auch heute noch gut gewählt ist, besonders wenn sich Tooling, Teamstruktur oder (siehe Teil 7) die Natur der Arbeit selbst ändern.

### Das Fehlen von Messung sichtbar machen

In großen Organisationen ist die riskanteste Lücke nicht eine schlechte Metrik, sondern ein Bereich, den niemand überhaupt misst, weil er schwer zu instrumentieren ist: Developer Experience, Reibung durch teamübergreifende Abhängigkeiten, der Verfall institutionellen Wissens. Diese Lücken sollten explizit im Metrik-Charter benannt werden, statt sie standardmäßig unsichtbar zu lassen. Eine Organisation, die weiß, was sie nicht misst, und warum, steht weitaus besser da als eine, die diese Bereiche still vergessen hat.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Umfangreiche Instrumentierung, viele Metriken | Breite Sichtbarkeit, weniger blinde Flecken | Dashboard-Ermüdung, größere Angriffsfläche für Manipulation, höhere Wartungskosten |
| Minimale, entscheidungsgetriebene Metriken | Fokus, geringer Aufwand, jede Metrik verteidigungsfähig | Risiko, ein aufkommendes Problem außerhalb des gewählten Sets zu übersehen |
| Metriken nur zur Diagnose | Fördert ehrliches Berichten und Untersuchen | Führungskräfte nutzen sie mitunter trotzdem informell bewertend |
| Metriken an individuelle Bewertung gekoppelt | Wirkt nachvollziehbar, leicht gegenüber Führungskräften zu erklären | Starker Manipulationsanreiz; schädigt Vertrauen; misst meist das Falsche |

Die zentrale Spannung ist **Abdeckung gegen Fokus**, verschärft durch **Diagnose gegen Urteil**. Zu wenige Metriken erzeugen blinde Flecken, die erst als Krise sichtbar werden; zu viele, und niemand kann auf Basis einer von ihnen handeln, während jede, der bewertendes Gewicht verliehen wird, zu Verzerrung einlädt. Die Lösung: minimal und entscheidungsgetrieben beginnen, eine Metrik nur hinzufügen, wenn eine konkret benannte Entscheidung sie braucht, und die Nur-diagnostisch-Grenze explizit in der Governance-Arbeit aus Thema 1.4 verteidigen, statt sie standardmäßig erodieren zu lassen.

## Fragen für die Diskussion im Team

1. **Welche Entscheidung würde ein guter und welche ein schlechter Ablesewert für jede Metrik auf unserem aktuellen Dashboard jeweils auslösen?** Wenn beide Ablesewerte zur selben Handlung führen, oder zu gar keiner, ist die Metrik Dekoration. Das Dashboard sollte Kachel für Kachel durchgegangen und für jede eine ehrliche Antwort erzwungen werden. Diese Übung halbiert routinemäßig ein aufgeblähtes Dashboard in einer einzigen Sitzung, weil sich der meiste Wildwuchs aus Metriken ansammelt, die nie jemand entfernt, statt aus Metriken, die jemand bewusst aus einem heute noch gültigen Grund hinzugefügt hat.

2. **Welche unserer Metriken werden diagnostisch genutzt, und welche sind still bewertend geworden?** Eine Metrik, die gebaut wurde, um eine Systembegrenzung zu verstehen, kann abdriften und zur Rangfolge von Teams oder Einzelpersonen genutzt werden, ohne dass das jemand absichtlich entschieden hat, oft durch eine beiläufige Bemerkung in einem Review-Meeting, die zur Gewohnheit wird. Sobald diese Abdrift passiert, hört die Zahl auf, vertrauenswürdig zu sein, weil Menschen nun einen Grund haben, sie gut aussehen zu lassen, statt sie korrekt zu halten. Der beabsichtigte Zweck jeder Metrik sollte schriftlich festgehalten und die aktuelle Praxis dagegen geprüft werden.

3. **Was messen wir nicht, weil es schwer zu instrumentieren ist, und was kostet uns diese Lücke?** Die gefährlichsten blinden Flecken sind genau jene, die es nie auf ein Dashboard schaffen, weil sie sich einfacher Messung widersetzen: Reibung durch teamübergreifende Abhängigkeiten, der Verfall institutionellen Wissens oder die stille Anhäufung brüchiger Workarounds. Eine Liste der Dinge sollte zusammengetragen werden, über die sich insgeheim alle Sorgen machen, die aber niemand verfolgt, und es sollte ehrlich benannt werden, warum.

4. **Wenn wir diese Metrik morgen löschten, wer würde es bemerken, und was würde verloren gehen?** Eine Metrik, die niemandem fehlen würde, ist eine Metrik, die keine Entscheidung informiert. Diese Frage bringt Vanity-Kacheln ans Licht, die nur durch Trägheit überleben. Für eine große Organisation mit Dutzenden Team-Dashboards zählt diese Ausdünnungsdisziplin genauso viel wie die Disziplin, überhaupt neue Metriken hinzuzufügen.

5. **Wie viel kostet jede Metrik auf unserem Dashboard tatsächlich in Erstellung und Pflege, einschließlich der Engineering-Zeit hinter der Instrumentierung?** Metriken sind nicht kostenlos. Pipelines, Dashboards und die Prüfzeit, die auf die Diskussion einer Zahl verwendet wird, tragen alle wiederkehrende Kosten, die leicht unterschätzt werden, weil sie sich über viele kleine Aufgaben verteilen statt als ein sichtbarer Posten dazustehen. Der tatsächliche Instrumentierungs- und Pflegeaufwand sollte gegen den Entscheidungswert aus Frage 1 abgewogen werden.

6. **Wo ist Messung zum Ersatz für Urteilsvermögen geworden, und wo ist Urteilsvermögen zum Ersatz für Messung geworden?** Beide Fehlmodi sind real. Ein Team, das jede Entscheidung an ein Dashboard auslagert, verliert das kontextuelle Urteilsvermögen, das auffängt, was die Zahl übersieht; ein Team, das verfügbare Daten zugunsten der lautesten Stimme im Raum ignoriert, wiederholt genau das Problem, mit dem dieses Thema beginnt. Das Ziel sind Metriken, die Urteilsvermögen informieren, nicht Metriken, die es ersetzen.

## Branchenperspektive

**Startup.** Mit einer Handvoll Ingenieurinnen und Ingenieuren lässt sich das meiste, wovor dieses Thema warnt, Abdrift zu bewertender Nutzung, blinde Flecken, Dashboard-Aufblähung, einfach vermeiden, weil alle täglich miteinander sprechen. Das Risiko ist das gegenteilige: Messung komplett zu überspringen, weil sie sich wie ein Overhead anfühlt, den sich das Team nicht leisten kann. Zwei oder drei entscheidungsförmige Fragen sollten ausgewählt werden (liefern wir schnell genug, hält die Qualität) und nur diese instrumentiert werden.

**Kleinunternehmen.** Ohne dedizierte Plattform- oder Datenteams sollte auf das zurückgegriffen werden, was die vorhandenen Tools bereits berichten, statt eigene Instrumentierung zu bauen. Das Dashboard eines Zahlungsdienstleisters, die Antwortmetriken eines Support-Tools und der Build-Verlauf des CI-Anbieters decken meist die wichtigsten Entscheidungen ab. Der Versuchung, eine dedizierte Engineering-Analytics-Plattform zu kaufen, bevor bewiesen ist, dass nach ihren Erkenntnissen auch gehandelt wird, sollte widerstanden werden.

**Enterprise.** Das Kernrisiko sind Metriken, die still von diagnostischer zu bewertender Nutzung abdriften, während sie durch Managementebenen nach oben gereicht werden, sowie Dashboards, die durch Anhäufung wachsen, weil niemand die Aufgabe besitzt, sie auszudünnen. Governance (Thema 1.4) ist auf dieser Ebene nicht optional. Definitionen sollten über Geschäftsbereiche hinweg standardisiert und eine regelmäßige Sichtungs- und Aussonderungsprüfung fest in das Metrikprogramm eingebaut werden.

**Behörden.** Metriken tragen hier oft gesetzliches oder budgetäres Gewicht, was sowohl den Wert, sie richtig zu machen, als auch die Kosten, sie falsch zu machen, erhöht. Eine Zahl, die an ein Parlament oder ein Aufsichtsgremium berichtet wird, braucht eine dokumentierte Methodik, eine über Berichtszeiträume hinweg stabile Definition und Ehrlichkeit über ihre Grenzen. „Das messen wir derzeit nicht" sollte als eine Antwort behandelt werden, die möglicherweise verteidigt werden muss, nicht als privates Versagen, das versteckt wird.

## Beispiele

**Enterprise.** Die Engineering-Organisation eines globalen Versicherungskonzerns war auf über sechzig Scrum-Teams angewachsen, jedes mit seinem eigenen informellen Dashboard, keines mit einem anderen vergleichbar. Die Führungsebene konnte eine grundlegende Frage nicht beantworten: Welche der zehn strategischen Plattforminvestitionen liefert tatsächlich schneller Software. Die Lösung waren nicht mehr Metriken, sondern weniger, bessere: Die Organisation definierte einen gemeinsamen, entscheidungsgetriebenen Kern aus DORA-Metriken (Thema 2.10), überall identisch aus denselben Pipeline-Daten berechnet, sonderte vierzig teamspezifische Dashboards aus und konnte Investitionsbereiche innerhalb von zwei Quartalen endlich auf gemeinsamer Basis vergleichen.

**Behörden.** Das Digital-Service-Team einer nationalen Steuerbehörde wurde von einem Aufsichtsausschuss gebeten, die Rendite eines mehrjährigen Modernisierungsprogramms nachzuweisen. Die vorhandenen Metriken des Teams waren rein intern und aktivitätsbasiert: abgeschlossene Story Points, geschlossene Sprints. Nichts davon beantwortete die eigentliche Frage des Ausschusses. Das Team baute stattdessen einen kleinen Satz an Ergebnismetriken: mediane Zeit bis zur Lösung eines Anliegens einer Bürgerin oder eines Bürgers, Akzeptanzrate des digitalen Kanals und Rate entwichener Defekte im neuen System, und berichtete diese vierteljährlich mit dokumentierter Methodik. Die Fragen des Ausschusses verschoben sich von „beweist, dass ihr arbeitet" zu „wie replizieren wir das in der nächsten Behörde", was genau das Ergebnis ist, das ein gut gewählter Metrik-Satz hervorbringen soll.

## Business Case: Motivation, ROI und TCO

Die Rendite bewusster Messung ist Entscheidungsqualität. Eine Organisation, die mit Belegen sagen kann „unsere Lead Time hat sich nach der Plattforminvestition um 30 % verbessert", kann diese Investition verteidigen, wiederholen, was funktioniert hat, und beenden, was nicht funktioniert hat. Eine Organisation, die sich auf Anekdoten verlässt, kann keines davon mit Zuversicht tun und führt dieselben Diskussionen in jedem Budgetzyklus erneut, weil niemand auf eine Zahl verweisen kann, der beide Seiten vertrauen.

Die Kosten der Messung sind nicht das Dashboard. Es ist die fortlaufende Disziplin: Instrumentierung, Pflege der Definitionen und die in diesem Thema empfohlene periodische Ausdünnung. Diese Gesamtbetriebskosten (TCO) sind real, aber bescheiden im Vergleich zu den Kosten der Alternative, nämlich einer großen Organisation, die technologische Entscheidungen im Wert vieler Millionen auf Basis dessen trifft, wer im Raum am überzeugendsten argumentiert hat. Die Rendite eines Metrikprogramms sind nicht die Metriken selbst; es sind die Entscheidungen, die dank ihnen besser getroffen werden.

## Antipatterns und Fallstricke

- **Alles messen, was das Tool exportiert:** verwandelt ein Dashboard in Rauschen und lädt zu Manipulation auf einer riesigen Fläche ohne entsprechenden Entscheidungswert ein.
- **Metriken ohne benannte Entscheidung:** Dekoration, die Pflegeaufwand kostet und niemandem etwas Handlungsrelevantes sagt.
- **Stille Abdrift von diagnostischer zu bewertender Nutzung:** der schnellste Weg, das Vertrauen in eine Zahl zu zerstören.
- **Eine Metrik als Tatsache statt als Hypothese behandeln:** ein Stellvertreter, der vor zwei Jahren richtig war, kann heute falsch sein, und niemand prüft es.
- **Das Fehlen einer schlechten Zahl mit dem Vorhandensein einer guten verwechseln:** eine Metrik, die man nie ansieht, kann einem nicht sagen, dass etwas nicht stimmt.
- **Messfähigkeit aufbauen, bevor entschieden ist, was entschieden werden soll:** Instrumentierung auf der Suche nach einer Frage verschwendet echte Engineering-Zeit.

## Reifegradmodell

- **Stufe 1, Initiieren:** Metriken, sofern überhaupt vorhanden, sind ad hoc, persönlich für die Person, die sie gebaut hat, und niemand kann sagen, welche Entscheidung sie jeweils informieren.
- **Stufe 2, Entwickeln:** Ein grundlegender Satz von Metriken existiert für einige Teams, meist aus einem Framework oder den Standardeinstellungen eines Tools übernommen, ohne klaren Bezug zu einer Entscheidung.
- **Stufe 3, Standardisieren:** Jede verfolgte Metrik hat einen dokumentierten Zweck und eine explizite Klassifikation als diagnostisch oder bewertend, konsistent in der gesamten Organisation angewendet.
- **Stufe 4, Steuern:** Metriken werden in festem Rhythmus gegen die Entscheidungen überprüft, die sie informieren; Metriken, die ihren Nutzen nicht mehr rechtfertigen, werden ausgesondert, und das gesamte Set wird sowohl auf Kosten als auch auf Wert hin gemessen.
- **Stufe 5, Orchestrieren:** Messung ist eine lebendige Fähigkeit: Die Organisation identifiziert routinemäßig ihre eigenen blinden Flecken, prüft, ob ihre Stellvertreter noch immer die Realität abbilden, und behandelt das Metrikprogramm selbst als etwas, das verbessert und nicht nur gepflegt wird.

## Diskussionsanregungen

1. Welche Metrik auf unserem Dashboard fiele es uns am schwersten zu rechtfertigen, wenn wir heute danach gefragt würden?
2. Welche Entscheidung haben wir im letzten Quartal anhand einer Metrik getroffen, statt anhand einer Meinung?
3. Wo in unserer Organisation ist eine diagnostische Metrik still bewertend geworden?
4. Was fürchten wir zu messen, und warum?
5. Wenn unser Metrikprogramm morgen verschwände, welche Entscheidungen würden schlechter?

## Die wichtigsten Erkenntnisse

- Messung existiert, um **Entscheidungen** zu dienen, nicht um ihrer selbst willen zu existieren; eine Metrik ohne angehängte Entscheidung ist Dekoration.
- **Diagnostische** Nutzung sollte schriftlich von **bewertender** Nutzung getrennt gehalten werden, und auf stille Abdrift zwischen beiden sollte geachtet werden.
- Jede Metrik sollte als **Hypothese** darüber behandelt werden, was sie abbildet, nicht als feststehende Tatsache, und diese Hypothese sollte in festem Rhythmus erneut geprüft werden.
- Schweigen, sich gegen die Messung von etwas zu entscheiden, ist selbst eine Entscheidung mit Konsequenzen; blinde Flecken sollten sichtbar gemacht werden, statt sie standardmäßig unsichtbar zu lassen.
- Die Gesamtbetriebskosten eines Metrikprogramms sind real; sie sollten explizit gegen den Entscheidungswert jeder Metrik abgewogen werden.

## Quellen und weiterführende Literatur

- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble und Gene Kim (die Forschungsgrundlage für ergebnisbasierte Engineering-Messung).
- *How to Measure Anything*, von Douglas W. Hubbard (ein allgemeines Framework zur Quantifizierung scheinbar unmessbarer Dinge).
- *Measuring and Managing Performance in Organizations*, von Robert D. Austin (die grundlegende Analyse der Dysfunktion, die Messung in eine Organisation einführen kann).
- *Thinking, Fast and Slow*, von Daniel Kahneman (die kognitiven Verzerrungen, die ungestütztes Urteilsvermögen zu einem unzuverlässigen Ersatz für Messung machen).
- Googles DevOps-Research-and-Assessment-Programm (DORA), [dora.dev](https://dora.dev/) (die laufende State-of-DevOps-Forschung, auf die dieses Buch durchgängig zurückgreift).
