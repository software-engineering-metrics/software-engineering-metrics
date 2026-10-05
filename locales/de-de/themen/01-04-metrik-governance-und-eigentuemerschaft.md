# 1.4 Metrik-Governance und Eigentümerschaft

## Überblick und Motivation

Eine Metrik ohne Eigentümer ist ein Streit, der nur darauf wartet, auszubrechen. Zwei Teams berechnen „aktive Nutzer" unterschiedlich und verbringen ein Meeting damit, Zahlen abzugleichen, statt den Trend zu steuern; eine Dashboard-Kachel, die niemand pflegt, veraltet still über Monate, bevor es jemand bemerkt; eine Metrik, die ursprünglich zur Diagnose eines Teams gebaut wurde, wird von einem anderen Team für einen Zweck übernommen, den ihre ursprüngliche Definition nie unterstützen sollte. Nichts davon ist ein Messproblem im statistischen Sinn. Es ist ein Governance-Problem, und es lässt sich mit derselben Disziplin lösen, die Organisationen bereits auf Code anwenden: explizite Eigentümerschaft, eine dokumentierte [Quelle der Wahrheit](https://en.wikipedia.org/wiki/Single_source_of_truth) und ein Review-Prozess.

Governance ist nicht Bürokratie um ihrer selbst willen. Sie ist das, was ein Metrikprogramm den Kontakt mit organisatorischer Größe überleben lässt. Ein einzelnes Team kann seine Metrikdefinitionen im Kopf einer Person behalten und Abdrift durch tägliche Gespräche korrigieren. Eine Organisation mit Dutzenden Teams, von denen jedes Metriken produziert und konsumiert, kann das nicht. Ohne Governance driften Definitionen still auseinander, Metriken vermehren sich, ohne dass sie jemand ausdünnt, und bis die Führungsebene bemerkt, dass zwei Berichte sich widersprechen, wurden die Kosten des Abgleichs bereits vielfach in verschwendeten Meetings und erodiertem Vertrauen bezahlt.

Für Konzerne und Behörden trägt Governance zusätzliches Gewicht, weil Metriken zunehmend Entscheidungen mit echten Konsequenzen speisen, Budgetzuweisung, öffentliche Leistungsberichterstattung, Lieferantenverträge, die jede einzelne Person überdauern, die das ursprüngliche Dashboard gebaut hat. Ein Metrik-Charter, der Personalfluktuation übersteht, den jedes neue Teammitglied lesen und verstehen kann, ist das, was dafür sorgt, dass die Zahlen einer Organisation in fünf Jahren noch dasselbe bedeuten wie heute.

## Kernprinzipien

- **Jede Metrik hat genau einen Eigentümer.** Geteilte Eigentümerschaft ist keine Eigentümerschaft; wenn allen eine Definition gehört, pflegt sie niemand.
- **Eine Metrik hat eine Quelle der Wahrheit.** Zwei Systeme, die dieselbe Metrik unterschiedlich berechnen, sind ein Governance-Versagen, das nur darauf wartet, sichtbar zu werden.
- **Governance wird niederschrieben, nicht als Stammeswissen bewahrt.** Ein Metrik-Charter, der nur im Gedächtnis einer Person existiert, übersteht deren Weggang nicht.
- **Ausmusterung ist so wichtig wie Einführung.** Ein gesundes Metrikprogramm dünnt so bewusst aus, wie es wächst.
- **Governance skaliert mit Konsequenz, nicht mit Metrikanzahl.** Eine Metrik, die einen öffentlichen Bericht speist, braucht schwerere Governance als eine, die ein einzelnes Team zum Debuggen des eigenen Sprints nutzt.

## Empfehlungen

### Für jeden Metrik-Satz, der eine Teamgrenze überschreitet, einen Metrik-Charter schreiben

Ein **Metrik-Charter** ist ein kurzes, lebendiges Dokument, das den Zweck eines Metrik-Satzes, seine expliziten Nicht-Ziele (die Unterscheidung zwischen diagnostisch und bewertend aus Kapitel 1.1 gehört hierher), die Eigentümerin oder den Eigentümer und die Quelle der Wahrheit jeder Metrik sowie einen Überprüfungsrhythmus festhält. Es sollte auf einer Seite bleiben. Die Datei docs/examples/metrics-charter-example.md im Begleit-Repository dieses Buches zeigt die Form. Ein so kurzer Charter wird gelesen; ein Charter, der zu einem Richtliniendokument aufgebläht wird, nicht.

### Jeder Metrik eine benannte Person zuweisen, kein Team

„Das Plattform-Team besitzt diese Metrik" verwässert Verantwortlichkeit, bis sie tatsächlich niemand mehr pflegt. Eine Person oder eine konkrete, rechenschaftspflichtige Rolle sollte benannt werden. Diese Eigentümerin oder dieser Eigentümer ist dafür verantwortlich, dass die Definition der Metrik korrekt bleibt, ihre Instrumentierung gesund bleibt, und die Frage „warum sieht diese Zahl falsch aus" zu beantworten, wenn sie unvermeidlich aufkommt. Eigentümerschaft kann und sollte rotieren, wenn Menschen Rollen wechseln, aber der Charter sollte immer eine aktuelle Eigentümerin oder einen aktuellen Eigentümer benennen und das Feld nie leer lassen.

### Eine Quelle der Wahrheit pro Metrik festlegen und parallele Berechnung verbieten

Wenn zwei Systeme dieselbe nominell benannte Metrik unterschiedlich berechnen, etwa wenn ein Team bei „aktive Nutzer" Logins zählt und ein anderes API-Aufrufe, kostet die daraus entstehende Uneinigkeit weit mehr in Abgleichs-Meetings, als es gekostet hätte, sich vorab auf eine Quelle der Wahrheit zu einigen. Das maßgebliche System für jede Metrik sollte im Charter benannt werden, und jede andere Berechnung derselben Metrik sollte entweder als zu behebender Fehler oder als umzubenennende, anders benannte Metrik behandelt werden.

### Eine Ausmusterungsprüfung in den Governance-Rhythmus einbauen

Ein Metrikprogramm, das nur je Metriken hinzufügt, häuft Dashboard-Wildwuchs an, auf den niemand reagieren kann (Kapitel 1.1). Bei jeder Governance-Überprüfung sollte, neben dem Vorschlagen neuer Metriken, gefragt werden, welche bestehenden in den letzten zwei Zyklen keine Entscheidung informiert haben und Kandidaten zur Ausmusterung sind. Ausmusterung ist kein Scheitern; es ist dieselbe Disziplin, die eine gesunde Codebasis auf toten Code anwendet.

### Governance-Strenge an Konsequenz skalieren, nicht an Volumen

Nicht jede Metrik braucht denselben Prozess. Eine Metrik, die ein einzelnes Team erfindet, um den eigenen Sprint zu debuggen, braucht kaum Governance, außer dass das Team weiß, was sie bedeutet. Eine Metrik, die ein Führungs-Scorecard, einen öffentlichen Leistungsbericht oder die Vergütung einer Person speist, braucht eine dokumentierte Definition, eine benannte Eigentümerin oder einen benannten Eigentümer, einen Prüfpfad und eine Freigabe, bevor sie live geht. Das Gewicht des Prozesses sollte an die Konsequenz angepasst werden, wenn die Metrik falsch ist, nicht daran, wie viele Metriken existieren.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Keine formale Governance | Schnell, geringer Overhead für kleine Teams | Definitionen driften auseinander; Eigentümerschaft verwässert; Dashboards wuchern ungeprüft |
| Leichtgewichtiger Charter pro Metrik-Satz | Günstig, lesbar, skaliert mit der Organisation | Braucht Disziplin, aktuell zu bleiben; wird unter Termindruck leicht übersprungen |
| Schweres zentrales Metrik-Governance-Gremium | Starke Konsistenz, starker Prüfpfad | Langsame Freigabe neuer Metriken; kann zum Flaschenhals werden, den Teams umgehen |
| An Konsequenz skalierte Governance | Passt Aufwand an tatsächliches Risiko an | Braucht Urteilsvermögen, um Konsequenz korrekt einzustufen; kann durch Untertreiben der Tragweite unterlaufen werden |

Die zentrale Spannung ist **Konsistenz gegen Geschwindigkeit**. Schwere zentrale Governance erzeugt vertrauenswürdige, konsistente Metriken, verlangsamt ein Team aber genau dann, wenn es schnell etwas instrumentieren möchte, um eine dringende Frage zu beantworten. Die Lösung: Governance-Gewicht an Konsequenz skalieren, Teams für die eigene diagnostische Nutzung frei instrumentieren lassen und die volle Disziplin aus Charter, Eigentümerschaft und Freigabe erst verlangen, sobald eine Metrik eine Teamgrenze überschreitet oder eine bewertende oder öffentliche Nutzung speist.

## Fragen für die Diskussion im Team

1. **Hat jede Metrik, die eine Teamgrenze überschreitet, eine benannte Eigentümerin oder einen benannten Eigentümer, und würde diese Person sich selbst heute als verantwortlich erkennen, wenn gefragt würde?** „Das Plattform-Team besitzt sie" ist keine Antwort; eine konkrete Person oder Rolle schon. Die teamübergreifenden Metriken sollten geprüft werden, und ob die benannte Eigentümerin oder der benannte Eigentümer, falls überhaupt vorhanden, tatsächlich weiß, diese Verantwortung zu tragen.

2. **Wo berechnen wir aktuell dieselbe nominell benannte Metrik auf zwei verschiedene Arten, und wie viel Zeit haben wir damit verbracht, die Uneinigkeit abzugleichen?** Das ist eines der teuersten und häufigsten Governance-Versagen in großen Organisationen, und es lässt sich mit einer dokumentierten einzigen Quelle der Wahrheit vollständig verhindern. Ein echtes Beispiel sollte, falls vorhanden, mitgebracht und dessen Kosten nachverfolgt werden.

3. **Wann haben wir zuletzt eine Metrik ausgesondert, und was hat diese Entscheidung ausgelöst?** Eine Organisation, die nur beschreiben kann, wie sie Metriken hinzufügt, nie, wie sie sie entfernt, häuft Dashboard-Schulden an. Wenn keine Ausmusterung erinnerlich ist, ist diese Abwesenheit selbst die Antwort auf diese Frage.

4. **Ist unser Governance-Prozess proportional zur Konsequenz, oder durchläuft jede Metrik unabhängig von der Tragweite dasselbe Prüfungsgewicht?** Übermäßig schwere Governance bei einer Metrik mit geringer Tragweite verlangsamt Arbeit ohne Sicherheitsgewinn; übermäßig leichte Governance bei einer Metrik, die einen öffentlichen Bericht oder eine Vergütungsentscheidung speist, ist ein echtes Risiko. Die aktuellen Metriken sollten nach Konsequenz kartiert und das Prozessgewicht ehrlich dagegen geprüft werden.

5. **Was geschieht mit der Eigentümerschaft einer Metrik, wenn die Person, die sie gebaut hat, die Rolle wechselt oder das Unternehmen verlässt?** Ein Metrik-Charter, der nur im Kopf einer Person existiert, verschwindet mit ihr. Das sollte getestet werden, indem eine Metrik ausgewählt und gefragt wird, ob eine neue Mitarbeiterin oder ein neuer Mitarbeiter allein aus schriftlicher Dokumentation ihre Definition, Quelle der Wahrheit und ihren Zweck verstehen könnte.

6. **Woran würden wir erkennen, dass sich die Definition einer Metrik still geändert hat?** Eine Änderung daran, wie eine Zahl berechnet wird, ohne Änderung ihres Namens oder einen Vermerk in ihrer Historie, ist nahezu unsichtbar, bis jemand alte und neue Daten vergleicht und einen unerklärlichen Bruch findet. Es sollte diskutiert werden, ob unsere Metriken heute irgendeine Form von Änderungsprotokoll tragen.

## Branchenperspektive

**Startup.** Formale Governance ist für ein fünfköpfiges Team, in dem bereits alle wissen, was jede Zahl bedeutet, meist übertrieben. Die eine Disziplin, die sich trotzdem früh lohnt, ist, schriftlich eine einzige Eigentümerin oder einen einzigen Eigentümer pro Metrik zu benennen, weil das fast nichts kostet und Verwirrung vorbeugt, sobald die ersten Neueinstellungen dazukommen und fragen, was eine Zahl bedeutet.

**Kleinunternehmen.** Governance bedeutet hier meist, ein Tool als Quelle der Wahrheit für jede Metrik zu wählen und dabei zu bleiben, statt Tabellen und das eingebaute Dashboard einer Plattform still auseinanderdriften zu lassen. Der Charter sollte als einziges gemeinsames Dokument geschrieben werden, selbst ein informelles, damit eine neue Mitarbeiterin oder ein neuer Mitarbeiter herausfinden kann, was eine Zahl bedeutet, ohne herumfragen zu müssen.

**Enterprise.** Hier verdient Governance sich ihren Nutzen. Definitionen sollten über Geschäftsbereiche hinweg standardisiert, ein Charter für alles verlangt werden, was ein Führungs-Scorecard speist, und eine Ausmusterungsprüfung fest in einen wiederkehrenden Governance-Rhythmus eingebaut werden, weil Dashboard-Wildwuchs auf dieser Ebene schnell teuer wird, sowohl an Pflegeaufwand als auch am Glaubwürdigkeitsverlust, wenn zwei Bereiche widersprüchliche Zahlen für dieselbe Sache berichten.

**Behörden.** Governance hat hier oft eine rechtliche oder prüfungsbezogene Dimension: Veröffentlichte Leistungskennzahlen müssen möglicherweise gesetzliche Berichtspflichten erfüllen, und eine Definitionsänderung kann echte politische Konsequenzen haben. Die Methodik sollte öffentlich dokumentiert, Definitionen über Berichtszeiträume hinweg eingefroren werden, sofern eine Änderung nicht selbst öffentlich begründet wird, und eine unabhängige Prüfung der Definition der Metrik, nicht nur ihres aktuellen Werts, sollte als ständige Governance-Praxis behandelt werden.

## Beispiele

**Enterprise.** Ein multinationales Softwareunternehmen entdeckte während einer Post-Merger-Integration, dass seine beiden größten Geschäftsbereiche „Deployment-Frequenz" unterschiedlich definierten: einer zählte jeden Push in eine Staging-Umgebung, der andere nur Produktionsveröffentlichungen. Die Führungsebene hatte über ein Jahr lang die Lieferleistung der beiden Bereiche mit Zahlen verglichen, die eigentlich nicht vergleichbar waren. Die Lösung war ein unternehmensweites Metrik-Governance-Gremium, das ein einziges Glossar von Metrikdefinitionen veröffentlichte (gespiegelt in Kapitel 9.2 dieses Buches), jedes Team zur Zertifizierung der Einhaltung verpflichtete und die mehrdeutigen lokalen Definitionen innerhalb eines Quartals aussonderte.

**Behörden.** Ein nationales Statistikamt, zuständig für die Veröffentlichung eines Leistungs-Dashboards für digitale Dienste, stellte fest, dass eine Änderung daran, wie „innerhalb der SLA gelöst" berechnet wurde, still von einem Engineering-Team vorgenommen, das dies als Fehlerbehebung ansah, eine Schlagzeilen-Konformitätszahl um mehrere Prozentpunkte verschoben hatte, ohne öffentliche Dokumentation der Änderung. Das Amt richtete einen formalen Änderungskontrollprozess für jede Metrikdefinition ein, die einen öffentlichen Bericht speist: Vorgeschlagene Änderungen brauchen eine dokumentierte Begründung, einen zusammen mit der Änderung veröffentlichten Vorher-Nachher-Vergleich und die Freigabe einer benannten, rechenschaftspflichtigen Amtsperson, was die Lücke schloss, die die frühere Änderung unbemerkt hatte durchgehen lassen.

## Business Case: Motivation, ROI und TCO

Die Rendite von Governance sind vermiedene Abgleichskosten. Jede Stunde in einem Meeting, in dem zwei Teams darüber streiten, wessen Zahl richtig ist, ist eine Stunde, die disziplinierte Governance, eine einzige Quelle der Wahrheit, eine benannte Eigentümerin oder ein benannter Eigentümer, vollständig verhindert hätte. Auf Konzernebene summieren sich diese Kosten über Dutzende Teams und können einen echt beachtlichen Anteil der Aufmerksamkeit der Führungsebene für ein Problem verbrauchen, das ein einseitiger Charter pro Metrik-Satz vermieden hätte.

Die Gesamtbetriebskosten einer leichtgewichtigen Governance-Praxis, ein Charter, eine benannte Eigentümerin oder ein benannter Eigentümer, eine periodische Überprüfung, sind bescheiden und größtenteils vorgelagert. Die Alternative, ein Jahr in eine größere Initiative zu entdecken, dass die Zahlen, denen die Führungsebene vertraut hat, nie tatsächlich vergleichbar waren, kostet dramatisch mehr, sowohl an verschwendeter Analyse als auch am Glaubwürdigkeitsschaden, die öffentliche oder interne Aufzeichnung nachträglich zu korrigieren.

## Antipatterns und Fallstricke

- **Team-Eigentümerschaft statt namentlich benannter Eigentümerschaft:** verwässert Verantwortlichkeit, bis tatsächlich niemand die Definition pflegt.
- **Parallele Berechnung derselben nominellen Metrik:** garantiert eventuelle Uneinigkeit und teuren Abgleich.
- **Ein Charter, der nur im Kopf einer Person existiert:** verschwindet in dem Moment, in dem diese Person die Rolle wechselt.
- **Ein Metrikprogramm, das nur hinzufügt, nie aussondert:** erzeugt Dashboard-Wildwuchs, auf den niemand reagieren kann.
- **Einheitliches Governance-Gewicht unabhängig von der Konsequenz:** verlangsamt Arbeit mit geringer Tragweite, während öffentliche oder vergütungsgebundene Metriken mit hoher Tragweite unterschützt bleiben.
- **Stille Definitionsänderungen:** Die Bedeutung einer Metrik verschiebt sich ohne Änderungsprotokoll, und historische Vergleiche werden still ungültig.

## Reifegradmodell

- **Stufe 1, Initiieren:** Metriken haben keine formalen Eigentümerinnen oder Eigentümer; Definitionen leben im individuellen Gedächtnis und driften still zwischen Teams auseinander.
- **Stufe 2, Entwickeln:** Manche Teams schreiben informelle Dokumentation für ihre eigenen Metriken, aber es gibt kein gemeinsames Charter-Format und keine teamübergreifende Konsistenz.
- **Stufe 3, Standardisieren:** Jede teamübergreifende Metrik hat einen dokumentierten Charter, eine namentlich benannte Eigentümerin oder einen benannten Eigentümer und eine einzige vereinbarte Quelle der Wahrheit, organisationsweit durchgesetzt.
- **Stufe 4, Steuern:** Ein wiederkehrender Governance-Rhythmus überprüft Metriken auf anhaltende Relevanz, sondert solche aus, die ihren Nutzen nicht mehr rechtfertigen, und verfolgt Definitionsänderungen mit sichtbarer Historie.
- **Stufe 5, Orchestrieren:** Governance ist proportional zur Konsequenz, wo möglich automatisiert (ein Metrikkatalog, der undokumentierte oder eigentümerlose Metriken markiert), und die Organisation kann auf Anfrage die vollständige Herkunft jeder veröffentlichten Zahl nachweisen.

## Diskussionsanregungen

1. Könnte eine neue Mitarbeiterin oder ein neuer Mitarbeiter allein aus der Dokumentation herausfinden, was unsere drei wichtigsten Metriken tatsächlich bedeuten?
2. Welche unserer Metriken berechnen aktuell zwei verschiedene Systeme unterschiedlich?
3. Wann haben wir zuletzt eine Metrik ausgesondert, und wie haben wir das entschieden?
4. Ist unser Governance-Prozess dort schwerer, wo die Konsequenz am größten ist, oder ist er einheitlich?
5. Wer besitzt namentlich die folgenreichste öffentlich sichtbare Metrik unserer Organisation?

## Die wichtigsten Erkenntnisse

- Jede Metrik braucht **eine namentlich benannte Eigentümerin oder einen benannten Eigentümer**, kein Team, und **eine Quelle der Wahrheit**, keine parallele Berechnung.
- Ein kurzer, lebendiger **Metrik-Charter** sollte für jeden Metrik-Satz geschrieben werden, der eine Teamgrenze überschreitet, mit Zweck, Nicht-Zielen, Eigentümerschaft und Überprüfungsrhythmus.
- **Ausmusterung** ist eine ebenso wichtige Governance-Disziplin wie Einführung; es sollte bewusst ausgedünnt werden.
- Governance-Strenge sollte an **Konsequenz** skaliert werden, nicht an Metrikanzahl: schwererer Prozess für öffentliche, bewertende oder vergütungsgebundene Metriken.
- Eine Metrikdefinition kann still auseinanderdriften; Änderungen sollten mit sichtbarer Historie verfolgt werden, damit Vertrauen in eine Zahl Personalfluktuation übersteht.

## Quellen und weiterführende Literatur

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program*, von John Ladley (Governance-Strukturen, anwendbar auf Metrikprogramme).
- *Measuring and Managing Performance in Organizations*, von Robert D. Austin (organisatorische Dysfunktion rund um Metrik-Eigentümerschaft und -Nutzung).
- *Key Performance Indicators*, von David Parmenter (Metrik-Eigentümerschaft, Definitionsdisziplin und Überprüfungsrhythmus).
- Leitfaden des U.S. Government Accountability Office (GAO) zu Leistungsmessung und dem GPRA Modernization Act: behördliche Metrik-Governance und Änderungskontrolle.
