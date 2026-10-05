# 7.4 Ergebnis-Telemetrie als der neue Nordstern

## Überblick und Motivation

Dieses Kapitel schließt Teil 7 ab, und schließt in echtem Sinn das Argument, das dieses gesamte Buch seit Kapitel 1.3 aufgebaut hat, mit einer einzelnen, direkten Behauptung: während generative KI rohen Output billig macht, hört **Ergebnis-[Telemetrie](https://en.wikipedia.org/wiki/Telemetry)**, kontinuierliche, instrumentierte Messung echter Ergebnisse statt Aktivität oder Output, auf, eine gute Praxis unter mehreren zu sein, und wird zum Organisationsprinzip, um das ein Metrikprogramm gebaut werden muss. Dies ist keine neue Idee, hier zum ersten Mal eingeführt. Es ist die Idee, die Kapitel 1.3 im Eröffnungsteil dieses Buches einführte, jetzt als die notwendige, statt bloß bevorzugte, Reaktion auf einen Technologiewandel präsentiert, der jede Alternative gefährlicher gemacht hat, als sie früher war.

Die Logik ist direkt. Vor generativer KI war Output-Volumen ein unvollkommener, aber nicht wertloser Stellvertreter für Aufwand und, lose, für Wert; ein Team, das mehr Features auslieferte, hatte mindestens mehr Arbeit geleistet, selbst wenn diese Arbeit nicht immer die richtige Arbeit war. Generative KI durchtrennt selbst diese lose Verbindung: Output-Volumen zeigt nicht mehr zuverlässig Aufwand an, da ein Werkzeug ihn in Sekunden generieren kann, und es zeigt sicherlich keinen Wert an, da Kapitel 7.3 zeigte, dass aufgeblähter Output mit sich verschlechternder Qualität koexistieren kann. Die Metriken, die diesen Wandel intakt überstehen, sind genau die, auf die dieses Buch seit seinen Eröffnungskapiteln hinzuarbeiten betont hat: entwichene Fehlerrate (Kapitel 5.1), Feature-Akzeptanz (Kapitel 5.2), Kunden- und Geschäftsergebnisse (Kapitel 5.3), Zuverlässigkeit (Teil 6), und Entwicklerwohlbefinden (Teil 3). Keine davon hängt davon ab, wie der zugrunde liegende Code produziert wurde; alle messen, was tatsächlich als Ergebnis geschah.

Für große Teams hat das Argument dieses Kapitels direkte, praktische Konsequenzen dafür, wie ein Metrikprogramm künftig gebaut und umgebaut werden sollte. Konzerne, die ihre Engineering-Dashboards im Licht der KI-Einführung neu gestalten, sollten Investition speziell zur Ergebnis-Telemetrie-Infrastruktur gewichten, die dieses Kapitel beschreibt; Behörden, die sowohl KI-Tooling als auch die breiteren Technologieprogramme bewerten, in die es eingebettet ist, sollten beide an denselben Ergebnis-Telemetrie-Standard halten, den dieses Kapitel als Grundlinie für jede glaubwürdige, zukunftssichere Bewertung empfiehlt.

## Kernprinzipien

- **Ergebnis-Telemetrie wird notwendig, nicht bloß bevorzugt, sobald Output billig ist.** Dies ist das Gründungsprinzip aus Kapitel 1.3, jetzt dringlich statt aspirational.
- **Die Metriken, die diesen Wandel überstehen, sind die, auf die dieses Buch durchgängig hingearbeitet hat**: entwichene Fehler, Akzeptanz, Geschäftsergebnisse, Zuverlässigkeit, und Wohlbefinden.
- **Ein Metrikprogramm, primär um Output-Metriken gebaut, ist jetzt eine Verbindlichkeit, nicht nur eine suboptimale Wahl.** Output-Metriken können im großen Maßstab günstig und schnell aufgebläht werden.
- **Ergebnis-Telemetrie braucht echte Investition**, Instrumentierung, Geduld für langsameres Signal, und organisatorische Disziplin, dem Zug hin zu schnelleren, günstigeren, aber jetzt unzuverlässigen Output-Metriken zu widerstehen.
- **Dieses Prinzip überdauert jedes spezifische KI-Werkzeug oder jeden Anbieter.** Es ist eine dauerhafte Reaktion auf einen dauerhaften Wandel dessen, was Output bedeutet, keine temporäre Anpassung an einen vorübergehenden Trend.

## Empfehlungen

### Das eigene Metrikinvestitionsverhältnis auditieren: Ergebnis-Telemetrie gegen Output-Verfolgung

Es sollte ungefähr berechnet werden, welcher Anteil der aktuellen Metrikinfrastruktur, Instrumentierungsaufwand, Dashboard-Fläche, Review-Meeting-Zeit, in Ergebnismetriken geht (Teil 5, Teil 6, Entwicklerwohlbefinden aus Teil 3) gegenüber Output- und Aktivitätsmetriken (Deployment-Zahl, Commit-Volumen, Pull-Request-Durchsatz). Falls Output-Verfolgung dominiert, ist dieses Verhältnis selbst jetzt eine Verbindlichkeit, angesichts des Arguments dieses Kapitels, und es neu auszubalancieren, ist die einzige höchsthebelnde Änderung, die dieses Kapitel empfiehlt.

### Bewusst in Ergebnis-Telemetrie-Infrastruktur investieren, als erstklassige Engineering-Investition

Ergebnismessung, Feature-Akzeptanzverfolgung, Geschäftsergebniskorrelation (Kapitel 5.3), Zuverlässigkeitsinstrumentierung (Teil 6), braucht echte, laufende Engineering-Investition, die viele Organisationen historisch relativ zu den vergleichsweise günstigen und einfachen Output-Metriken unterressourciert haben, die heute viele Dashboards dominieren. Diese Infrastrukturinvestition sollte mit derselben Ernsthaftigkeit behandelt werden, die dieses Buch auf jede andere bedeutsame Engineering-Fähigkeit anwendet, nicht als sekundäres Anliegen hinter der KI-Tooling-Investition selbst.

### Akzeptieren und kommunizieren, dass Ergebnis-Telemetrie langsamer ist, und dafür Geduld in die Erwartungen der Organisation einbauen

Ergebnismetriken sind, fast von Natur aus, träger und verrauschter als Output-Metriken (die Führungs-gegen-nachlaufend-Unterscheidung aus Kapitel 1.3, die statistische Vorsicht aus Kapitel 1.6). Eine Organisation, gewohnt an das schnelle, befriedigende Feedback, eine steigende Output-Zahl zu beobachten, muss echte Geduld für das langsamere, ehrlichere Signal aufbauen, das Ergebnis-Telemetrie liefert, und die Führung muss diese Geduld aktiv kommunizieren und vorleben, statt reflexartig nach der schnelleren, jetzt unzuverlässigen Alternative zu greifen, unter Druck, schnelle Ergebnisse zu zeigen.

### Diesen Wandel als Anlass nutzen, echt veraltete Output-Metriken auszumustern, nicht nur Ergebnismetriken neben ihnen hinzuzufügen

Der Disziplin aus Kapitel 1.1 folgend, Metriken auszumustern, die ihren Platz nicht mehr verdienen, sollte dieser Moment als bewusster Anlass genutzt werden, Output- und Aktivitätsmetriken zu entfernen, die dieser Wandel speziell entwertet hat, statt einfach Ergebnismetriken oben auf ein unverändertes bestehendes Dashboard zu setzen. Ein Dashboard, das jede alte Output-Metrik behält, während es neue Ergebnismetriken anschraubt, wächst aufgebläht statt echt verbessert.

### Ergebnis-Telemetrie-Investition als dauerhaft behandeln, unabhängig von jedem spezifischen KI-Werkzeug oder Anbieterverhältnis

Ergebnis-Telemetrie-Infrastruktur sollte als permanente organisatorische Fähigkeit aufgebaut werden, nicht als Reaktion spezifisch auf welches KI-Werkzeug die Organisation dieses Jahr zufällig nutzt. Dieses Prinzip, und die Infrastruktur, die es erfordert, wird jedes spezifische Anbieterverhältnis oder jede Tooling-Generation überdauern, und es als dauerhafte Fähigkeit aufzubauen, schützt das Metrikprogramm vor dem nächsten Technologiewandel ebenso wie vor dem aktuellen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Output-Metrik-dominiertes Dashboard | Schnelles, günstiges Feedback; vertraut für die meisten Organisationen | Jetzt aktiv unzuverlässig, angesichts der Wirkung generativer KI auf Output-Kosten |
| Ergebnis-Telemetrie-dominiertes Dashboard | Resistent gegen diesen Wandel; misst, was tatsächlich zählt | Langsameres, verrauschteres Signal; braucht echte Instrumentierungsinvestition |
| Ergebnismetriken neben unveränderten Output-Metriken hinzufügen | Inkrementell, weniger störend | Produziert Dashboard-Aufblähung statt echte Verbesserung |
| Vollständige, bewusste Neuausbalancierung hin zu Ergebnis-Telemetrie | Adressiert den Wandel direkt und vollständig | Braucht die bedeutsamste organisatorische und Investitionsänderung |

Die zentrale Spannung ist, in echtem Sinn, dieselbe, mit der dieses Buch in Kapitel 1.3 begann, jetzt zu ihrer dringlichsten Form geschärft: **schnelles, vertrautes Feedback gegen langsameres, ehrliches Signal**. Output-Metriken waren immer leichter und schneller zu produzieren; das Argument dieses Kapitels ist, dass generative KI diese Abwägung von bloß suboptimal zu aktiv gefährlich verschoben hat. Die Spannung sollte gelöst werden, wie dieses Buch seit seinem Eröffnungskapitel empfohlen hat: entscheidend hin zu Ergebnissen gewichten, das langsamere Feedback akzeptieren, das mit echter Wertmessung einhergeht, und das Unbehagen dieses langsameren Feedbacks als die ehrlichen Kosten behandeln, etwas Echtes zu messen statt etwas bloß Bequemes.

## Fragen für die Diskussion im Team

1. **Welcher Anteil unserer aktuellen Metrikinfrastruktur und Dashboard-Aufmerksamkeit geht in Ergebnismetriken gegenüber Output- und Aktivitätsmetriken?** Dieses Verhältnis sollte ehrlich berechnet werden; die meisten Organisationen, zum ersten Mal bewertet, finden es output-gewichteter, als sie geraten hätten.

2. **Welche spezifische Ergebnis-Telemetrie-Infrastrukturinvestition haben wir zugunsten schnellerer, günstigerer Output-Verfolgung aufgeschoben?** Ein konkretes Beispiel sollte benannt werden, Feature-Akzeptanzinstrumentierung, Geschäftsergebniskorrelations-Tooling, und diskutiert werden, was es bräuchte, es tatsächlich zu bauen.

3. **Hat unsere Organisation echte Geduld für das langsamere Feedback von Ergebnis-Telemetrie aufgebaut, oder zieht uns Druck für schnelle Ergebnisse weiter zurück zu schnelleren, aber jetzt unzuverlässigen Output-Metriken?** Ehrlich sollte über dieses Muster in den eigenen jüngsten Berichten und Review-Meetings reflektiert werden.

4. **Welche Output- oder Aktivitätsmetrik auf unserem aktuellen Dashboard ist ein echter Kandidat für Ausmusterung, jetzt, da das Argument dieses Kapitels speziell auf sie zutrifft?** Mindestens eine sollte identifiziert werden, und diskutiert werden, was sie ersetzen müsste, statt einfach eine Lücke zu hinterlassen.

5. **Wenn sich unser KI-Tooling-Anbieter oder die aktuelle Generation von KI-Codierassistenten nächstes Jahr dramatisch ändern würde, würde unser Metrikprogramm noch standhalten?** Dies testet, ob die Ergebnis-Telemetrie-Investition echt dauerhaft ist, als permanente Fähigkeit gebaut, oder bloß eine Reaktion spezifisch auf die aktuelle Tooling-Situation.

6. **Wie würde es aussehen, wenn sich unsere Organisation vollständig dem Argument dieses Kapitels verpflichten würde, unsere Metrikinvestition entscheidend hin zu Ergebnissen neu auszubalancieren, statt inkrementell?** Dies sollte konkret skizziert werden, statt abstrakt zu bleiben; die Lücke zwischen dem aktuellen Zustand und dieser Vision ist die tatsächliche Roadmap der Organisation, um auf diesen Wandel zu reagieren.

## Branchenperspektive

**Startup.** Ergebnis-Telemetrie früh aufzubauen, bevor Output-Metriken die Chance hatten, sich tief als organisatorische Gewohnheit zu verankern, ist echt leichter, als es später nachzurüsten. Ein junges Unternehmen, das von Anfang an KI-Codierunterstützung einführt, hat eine echte Chance, sein Metrikprogramm ergebnis-zuerst aufzubauen, statt eine bestehende, output-metrik-dominierte Kultur rückgängig machen zu müssen.

**Kleinunternehmen.** Ergebnis-Telemetrie-Investition sollte auf die einzelne Ergebnismetrik fokussiert werden, die am direktesten Überleben und Wachstum widerspiegelt (Kapitel 5.3), statt umfassende Instrumentierung über jede Ergebniskategorie zu versuchen, die dieses Buch abdeckt. Eine bescheidene, fokussierte Ergebnis-Telemetrie-Investition schlägt ein umfassendes Output-Metrik-Dashboard, das das Argument dieses Kapitels jetzt speziell entwertet hat.

**Enterprise.** Die Neuausbalancierung, die dieses Kapitel empfiehlt, ist auf dieser Ebene eine echte, bedeutsame organisatorische Änderung, wahrscheinlich Führungssponsoring und einen mehrquartalsigen Investitionsplan erfordernd. Sie sollte mit derselben Ernsthaftigkeit behandelt werden wie jede andere größere Infrastrukturinvestition, die dieses Buch abdeckt, und die spezifischen, konkreten Beispiele aus Kapitel 7.1 und Kapitel 7.3, Metrikinflation und Qualitätsverwässerung, die ein neu ausbalanciertes Dashboard früher gefangen hätte, sollten genutzt werden, um den internen Fall für die Investition aufzubauen.

**Behörden.** Behördliche Technologieprogramme, primär nach Liefer- und Output-Metriken bewertet (ausgelieferte Features, termingerecht), sind zunehmend verwundbar gegenüber genau der Skepsis, die Kapitel 5.3 beschrieb, und das Argument dieses Kapitels schärft diese Verwundbarkeit weiter, während sich KI-Tooling-Einführung durch die breitere Branche verbreitet, aus der Behörden rekrutieren und mit der sie verglichen werden. Ergebnis-Telemetrie sollte als primäre Basis für öffentliche Berichterstattung und Budgetrechtfertigung aufgebaut werden, wobei die Organisation diesem Wandel voraus statt hinterher positioniert wird.

## Beispiele

**Enterprise.** Die Engineering-Führung eines Softwareunternehmens, direkt ausgelöst durch den Beinahe-Metrikinflations-Vorfall, beschrieben im Beispiel des Finanztechnologieunternehmens aus Kapitel 7.1, führte ein vollständiges Audit ihres Metrikinvestitionsverhältnisses durch und fand, dass fast 70 % ihrer Dashboard-Fläche und Instrumentierungsaufwand Output- und Aktivitätsmetriken gewidmet waren, mit nur bescheidener, inkonsistenter Investition in Ergebnis-Telemetrie. Über das folgende Jahr balancierte das Unternehmen dieses Verhältnis bewusst neu aus, musterte mehrere Output-Metriken aus, die das Audit aus Kapitel 7.1 als am stärksten exponiert gekennzeichnet hatte, und investierte die freigewordene Kapazität in Feature-Akzeptanz- und Geschäftsergebnisinstrumentierung (Kapitel 5.2, 5.3). Das resultierende Dashboard, präsentiert beim Vorstandstreffen des folgenden Jahres, wurde explizit von demselben zuvor skeptischen Vorstandsmitglied als bedeutsam vertrauenswürdigere Basis zur Bewertung von Engineering-Investition anerkannt als die Output-lastige Version, die es ersetzte.

**Behörden.** Eine nationale Digitaldienstbehörde, die ein neues Engineering-Metrikprogramm von Grund auf aufbaute, speziell weil ihr vorheriges, output-metrik-dominiertes Dashboard anhaltende gesetzgeberische Skepsis gezogen hatte, übernahm das Prinzip dieses Kapitels explizit als ihre grundlegende Designentscheidung: Ergebnis-Telemetrie, Bürgerwartezeit, Dienstabschlussrate, entwichene Fehlerrate, würde die primäre Basis für alle öffentliche Berichterstattung sein, mit Output- und Liefermetriken nur als interne Diagnosewerkzeuge beibehalten, nie als extern präsentierte Schlagzeilen-Evidenz. Dieses ergebnis-zuerst-Design, bewusst im Licht des in diesem Teil beschriebenen generativen-KI-Wandels gebaut, gab der Berichterstattung der Behörde eine Dauerhaftigkeit und Glaubwürdigkeit bei ihrem Aufsichtsausschuss, die ihr Vorgängerprogramm, um die Output-Metrik-Annahmen einer früheren Generation gebaut, nie erreicht hatte.

## Business Case: Motivation, ROI und TCO

Die Rendite, sich entscheidend zu Ergebnis-Telemetrie zu verpflichten, ist ein Metrikprogramm, das durch den aktuellen Technologiewandel und was auch immer danach kommt vertrauenswürdig und glaubwürdig bleibt, statt eines, das eine weitere bedeutsame Überholung braucht, wenn Output das nächste Mal durch eine zukünftige Technologieänderung billig wird. Das Beispiel des Softwareunternehmens oben zeigt dies konkret: das neu ausbalancierte Dashboard reparierte direkt Glaubwürdigkeit, die die frühere, output-lastige Version echt riskiert hatte.

Die Gesamtbetriebskosten sind die Ergebnis-Telemetrie-Infrastrukturinvestition, die dieses Kapitel empfiehlt, echt bedeutsame, mehrquartalsige Arbeit für eine große Organisation, abgewogen gegen das dauerhafte, langfristige Risiko eines Metrikprogramms, das progressiv weniger vertrauenswürdig wird, während Output weiter billiger wird. Dies sind keine Kosten, die dieses Buch bittet, leichtfertig zu akzeptieren; es ist die direkte, notwendige Konsequenz, das gründende Argument aus Kapitel 1.3 so ernst zu nehmen, wie dieser abschließende Teil des Buches bittet.

## Antipatterns und Fallstricke

- **Diesen Wandel als nur inkrementelle Anpassung statt echter Neuausbalancierung behandeln:** unterschätzt das Ausmaß der Änderung, die generative KI in das eingeführt hat, was Output-Metriken bedeuten.
- **Ergebnismetriken neben einem unveränderten, weiterhin dominanten Set von Output-Metriken hinzufügen:** produziert Dashboard-Aufblähung statt der echten Neuausbalancierung, für die dieses Kapitel argumentiert.
- **Ergebnis-Telemetrie-Investition als Reaktion auf ein spezifisches aktuelles KI-Werkzeug statt als dauerhafte Fähigkeit aufbauen:** lässt die Organisation dem nächsten Technologiewandel auf dieselbe Weise ausgesetzt.
- **Organisatorische Geduld für das langsamere Feedback von Ergebnis-Telemetrie nicht aufbauen:** riskiert einen Rückfall zu schnelleren, aber jetzt unzuverlässigen Output-Metriken unter Druck für schnelle Ergebnisse.
- **Output-Metriken ohne echten Ergebnis-Telemetrie-Ersatz ausmustern:** hinterlässt eine Messlücke statt einer echten Verbesserung.
- **Diesen Wandel Stakeholdern als bloße Reaktion auf KI-Tooling präsentieren, statt als Erfüllung des gründenden Prinzips dieses Buches:** untertreibt die Dauerhaftigkeit und Allgemeingültigkeit des Arguments.

## Reifegradmodell

- **Stufe 1, Initiieren:** Das Dashboard bleibt output-metrik-dominiert, ohne bewusste Reaktion auf den Wandel, den dieser Teil beschreibt.
- **Stufe 2, Entwickeln:** Manche Ergebnismetriken wurden hinzugefügt, aber das Gesamtinvestitionsverhältnis bleibt output-lastig, und keine Metriken wurden bewusst ausgemustert.
- **Stufe 3, Standardisieren:** Ein bewusstes Audit und eine Neuausbalancierung hin zu Ergebnis-Telemetrie wurden durchgeführt, mit echt veralteten Output-Metriken organisationsweit ausgemustert.
- **Stufe 4, Steuern:** Ergebnis-Telemetrie-Infrastruktur wird als erstklassige, laufende Engineering-Investition behandelt, und organisatorische Geduld für ihr langsameres Feedback wird aktiv kultiviert und geschützt.
- **Stufe 5, Orchestrieren:** Das Metrikprogramm der Organisation ist ergebnis-telemetrie-geführt als dauerhaftes, permanentes Designprinzip, resistent durch den aktuellen Technologiewandel bewiesen und explizit gebaut, um resistent zu bleiben, was auch immer als Nächstes kommt.

## Diskussionsanregungen

1. Wie hoch ist unser tatsächliches aktuelles Verhältnis von Ergebnismetrik- zu Output-Metrik-Investition?
2. Welche einzelne Output-Metrik sollten wir dieses Quartal ausmustern, und welche Ergebnismetrik sollte sie ersetzen?
3. Wo hat organisatorische Ungeduld uns kürzlich zurück zu schnelleren, aber weniger vertrauenswürdigen Output-Metriken gezogen?
4. Ist unsere Ergebnis-Telemetrie-Investition dauerhaft, oder spezifisch an unsere aktuelle KI-Tooling-Situation gebunden?
5. Was würde es brauchen, um uns dem Argument dieses Kapitels vollständig zu verpflichten, statt inkrementell anzupassen?

## Die wichtigsten Erkenntnisse

- Ergebnis-Telemetrie wird **notwendig, nicht bloß bevorzugt**, sobald generative KI Output billig macht; dies ist das Gründungsprinzip aus Kapitel 1.3, jetzt dringlich.
- Die Metriken, die **diesen Wandel überstehen**, sind die, auf die dieses Buch durchgängig hinarbeitet: entwichene Fehler, Akzeptanz, Geschäftsergebnisse, Zuverlässigkeit, und Wohlbefinden.
- Das eigene Metrikinvestitionsverhältnis sollte **bewusst auditiert und neu ausbalanciert werden**, mit echt veralteten Output-Metriken ausgemustert, statt nur Ergebnismetriken neben ihnen hinzuzufügen.
- Organisatorische **Geduld für das langsamere Feedback von Ergebnis-Telemetrie** sollte aufgebaut werden, und dem Zug zurück zu schnelleren, aber jetzt unzuverlässigen Output-Metriken unter Druck sollte widerstanden werden.
- Diese Investition sollte als **dauerhafte Fähigkeit** aufgebaut werden, unabhängig von jedem spezifischen KI-Werkzeug oder Anbieter, was das Metrikprogramm sowohl gegen zukünftige als auch gegen den aktuellen Technologiewandel schützt.

## Quellen und weiterführende Literatur

- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble, and Gene Kim (die ergebnisbasierte Messgrundlage, auf der dieses gesamte Buch, und dieses abschließende Kapitel aus Teil 7, aufbaut).
- *Lean Analytics*, von Alistair Croll and Benjamin Yoskovitz (die handlungsfähig-gegenüber-eitle-Metrik-Unterscheidung, die das Argument dieses Kapitels auf das KI-Zeitalter erweitert).
- *The Innovator's Dilemma*, von Clayton M. Christensen (das allgemeine Muster etablierter Metriken und Praktiken, die unter einem disruptiven Technologiewandel zu Verbindlichkeiten werden).
- *Measure What Matters*, von John Doerr (ergebnisorientierte Zielsetzung als Organisationsprinzip für ein Metrikprogramm, das Modell, das dieses Kapitel argumentiert, sollte jetzt der Standard sein, nicht die Ausnahme).
