# 2.7 Warteschlangentheorie

## Überblick und Motivation

**[Warteschlangentheorie](https://en.wikipedia.org/wiki/Queueing_theory)** ist das mathematische Studium von Warteschlangen. Das klingt nach einer seltsamen Passform für ein Buch über Software-Engineering-Metriken, bis bemerkt wird, wie viel von einer Lieferpipeline tatsächlich eine Warteschlange ist: ein Pull Request, der auf eine Reviewerin oder einen Reviewer wartet, ein Commit, der auf einen CI-Runner wartet, ein Ticket, das darauf wartet, aufgenommen zu werden, eine Support-Nachricht, die auf eine Antwort wartet. Thema 2.4 führte bereits Flow-Last und Flow-Zeit ein und zeigte, dass die Überlastung eines Wertstroms die Lieferung scharf verlangsamt, und die Themen 2.5 und 2.6 zeigten, dass die meiste Lieferzeit Wartezeit ist, nicht Arbeitszeit. Warteschlangentheorie ist die zugrunde liegende Mathematik, die erklärt, warum all das zutrifft, nicht nur ein beobachtetes Muster.

Das nützlichste Einzelergebnis ist **[Littles Gesetz](https://en.wikipedia.org/wiki/Little%27s_law)**, ein 1961 vom Operations Researcher John Little bewiesenes Theorem: Die durchschnittliche Anzahl an Items in einem stabilen System entspricht der durchschnittlichen Rate, mit der Items ankommen, multipliziert mit der durchschnittlichen Zeit, die jedes Item im System verbringt. Thema 2.4 nutzte dieses Ergebnis bereits unter den eigenen Namen des Flow Frameworks, Flow-Last entspricht Ankunftsrate mal Flow-Zeit. Im breiteren Vokabular dieses Buches liest es sich auch als Work in Process (Thema 2.5) entspricht der Ankunftsrate neuer Arbeit multipliziert mit Zykluszeit (Thema 2.6). Das ist keine Faustregel oder eine in manchen Studien beobachtete Korrelation. Es ist ein Beweis, der für jede stabile Warteschlange gilt, unabhängig davon, was die Warteschlange verarbeitet oder wie sie entscheidet, was als Nächstes bearbeitet wird.

Für ein großes Team ist genau diese Allgemeingültigkeit der Sinn. Littles Gesetz gibt einen Plausibilitätstest, der identisch funktioniert, egal ob die Warteschlange ein Kanban-Board, ein Message Broker oder eine gemeinsame CI-Pipeline ist. Wenn die gemessene Work in Process, Ankunftsrate und Zykluszeit die Gleichung nicht ungefähr erfüllen, ist eine der drei Zahlen falsch, meist wegen einer inkonsistenten Definition dessen, was als „in Arbeit" oder „angekommen" zählt. Konzerne und Behörden betreiben Dutzende solcher Warteschlangen gleichzeitig, gemeinsame Code-Review-Pools, gemeinsame Testumgebungen, gemeinsame Freigabegremien, und Littles Gesetz ist das günstigste verfügbare Werkzeug, um eine schlechte Metrikdefinition zu fangen, bevor sie eine schlechte Personal- oder Prozessentscheidung antreibt.

## Kernprinzipien

- **Littles Gesetz ist ein Beweis, keine Heuristik.** Work in Process entspricht Ankunftsrate mal Zykluszeit, für jede stabile Warteschlange, und es ist eine schnelle Prüfung, ob Liefermetriken intern konsistent sind.
- **Auslastung skaliert nicht linear mit Wartezeit.** Sobald sich eine gemeinsam genutzte Ressource der vollen Auslastung nähert, wächst die Warteschlangenverzögerung scharf, nicht allmählich. Eine zu 95 % ausgelastete Ressource wartet oft um ein Vielfaches länger als eine zu 80 % ausgelastete, nicht nur „ein bisschen schlechter".
- **Der Durchschnitt einer Warteschlange verbirgt ihren schlimmsten Fall.** Nur die mittlere Wartezeit zu berichten, verdeckt den langen, schmerzhaften Ausläufer nahe der Kapazitätsgrenze, genau das, wovor Thema 1.6 warnt, wenn es um die Nutzung von Perzentilen statt Durchschnitten geht.
- **Wie eine Warteschlange definiert wird, kann genauso leicht manipuliert werden wie jede andere Metrik.** Ob etwas als „angekommen", „in Arbeit" oder „bedient" zählt, ist eine Wahl, und sie kann so abgestimmt werden, dass sie ein Dashboard schönt, ohne zu ändern, was der Arbeit tatsächlich widerfährt.
- **Eine Pipeline ist meist eine Warteschlange von Warteschlangen.** Eine Lieferpipeline verkettet mehrere Phasen, und die langsamste Phase gibt das Tempo für die gesamte Kette vor, unabhängig davon, wie schnell die anderen laufen.

## Empfehlungen

### Littles Gesetz nutzen, um die eigenen Zahlen zu prüfen, bevor ihnen vertraut wird

Die gemessene durchschnittliche Work in Process des Teams, seine durchschnittliche Ankunftsrate neuer Items pro Woche und seine durchschnittliche Zykluszeit sollten genommen werden, um zu prüfen, ob Work in Process ungefähr der Ankunftsrate multipliziert mit der Zykluszeit entspricht. Wenn nicht, sollte nicht angenommen werden, die Theorie sei falsch. Nach der tatsächlichen Ursache sollte gesucht werden: eine inkonsistent gezählte Phasengrenze, Arbeit, die „blockiert" liegt, aber weiterhin als in Arbeit gezählt wird, oder eine Ankunftsrate, die über ein anderes Fenster gemessen wird als die Zykluszeit. Diese eine Prüfung fängt mehr schlechte Instrumentierung, als die meisten Teams auf jede andere Weise finden.

### Auslastung direkt für jede gemeinsam genutzte, kapazitätsbeschränkte Ressource verfolgen

Die Ressourcen, die sich die Lieferpipeline über viele Teams hinweg teilt, ein Code-Review-Pool, ein CI-Cluster, eine Staging-Umgebung, sollten identifiziert werden, und es sollte gemessen werden, wie stark jede als Anteil ihrer verfügbaren Kapazität ausgelastet ist, bevor geplant wird, sie nahe ihrer Grenze zu betreiben. Eine gemeinsame Reviewer-Gruppe, die nahe voller Kapazität läuft, erzeugt Review-Warteschlangen-Wartezeiten, die weit schneller wachsen als der bescheidene Nachfrageanstieg, der sie verursachte, genau die Dynamik hinter dem Rat aus Thema 2.9, die Zeit bis zur ersten Überprüfung als Frühindikator zu beobachten.

### Ankunftsrate, Erfolgsrate, Fehlerrate und Skip-Rate trennen

Es sollte widerstanden werden, alles, was eine Warteschlange verlässt, in eine einzelne „Durchsatz"- oder „Servicerate"-Zahl zusammenzufassen. Vier Dinge sollten getrennt verfolgt werden: wie schnell Arbeit ankommt, wie viel davon erfolgreich fertiggestellt wird, wie viel fehlschlägt und Nacharbeit braucht, und wie viel aufgegeben oder still fallengelassen wird, bevor es jemand fertigstellt. Eine Pipeline, die schnell aussieht, weil ihre Skip-Rate still gestiegen ist, liefert tatsächlich nicht mehr, und nur diese vier Raten getrennt zu verfolgen, zeigt das.

### Mehrstufige Pipelines als Warteschlange von Warteschlangen modellieren

Eine Lieferpipeline, oder jeder mehrstufige Prozess, ein Incident-Lebenszyklus, eine Einstellungspipeline, sollte als Kette von Warteschlangen behandelt werden, nicht als ein undifferenzierter Klumpen „Zeit". Die Gesamtankunftsrate wird von der ersten Phase festgelegt, die Gesamtabschlussrate von der letzten, und die Gesamt-Fehler- und Skip-Zahlen der Pipeline sind die Summe der Zahlen jeder Phase. Diese Rahmung zeigt sofort, in welche Phase es sich zu investieren lohnt: die mit der schlimmsten Kombination aus hoher Auslastung und hoher Fehler- oder Skip-Rate, nicht die, die zufällig am leichtesten zu instrumentieren ist.

### Personal- und WIP-Limits mit Auslastung im Blick festlegen, nicht nur mit Durchsatz

Bei der Entscheidung, wie viele Reviewerinnen und Reviewer oder CI-Runner ein Team braucht, sollte die Kapazität nicht exakt auf die durchschnittliche Ankunftsrate zugeschnitten werden. Eine Warteschlange, die im Durchschnitt bei 100 % Auslastung läuft, hat in der Praxis effektiv unendliche Wartezeit, weil echte Ankünfte ungleichmäßig sind, nicht perfekt glatt. Bewusst sollte Spielraum eingeplant werden, und „unsere Reviewerinnen und Reviewer sind fast immer beschäftigt" sollte als Warnzeichen für kommende Wartezeiten behandelt werden, nicht als Beleg effizienter Ressourcenausstattung.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Kein formales Warteschlangenmodell, Personalausstattung nach Bauchgefühl | Schnell zu beginnen; kein neues Vokabular fürs Team | Unterschätzt durchgängig, wie explosiv Wartezeit nahe voller Kapazität wächst |
| Littles Gesetz als Plausibilitätsprüfung vorhandener Metriken | Günstig, braucht kein neues Tooling, fängt schlechte Definitionen schnell | Prüft nur Konsistenz, diagnostiziert die Ursache nicht selbst |
| Vollständige Warteschlangensimulation (Ankunftsverteilungen, mehrere Server) | Genaueste Vorhersage des Wartezeitverhaltens unter Last | Braucht echtes statistisches Können und Pflege, die die meisten Teams nicht durchhalten |
| Auslastungsverfolgung bei gemeinsamen Ressourcen ohne tiefere Modellierung | Einfach, handlungsfähig, fängt die mit Abstand größte Ursache außer Kontrolle geratener Wartezeiten | Sagt nichts darüber, warum die Auslastung hoch ist oder was gegen die zugrunde liegende Ursache zu tun ist |

Die zentrale Spannung ist **Strenge gegen Einführung**. Eine vollständige Warteschlangensimulation liefert die genaueste Antwort, aber fast kein Engineering-Team wird eine bauen und pflegen, und ein Modell, dem niemand vertraut oder das niemand aktualisiert, ist schlimmer als kein Modell. Littles Gesetz und grundlegende Auslastungsverfolgung geben etwas Präzision auf, brauchen aber kein spezialisiertes statistisches Können und passen direkt in Metriken, die ein Team für die Themen 2.4 bis 2.6 bereits sammelt. Auf diese günstigen, einführbaren Prüfungen sollte standardmäßig gesetzt werden, und volle Simulation sollte für den seltenen Fall reserviert werden, in dem eine einzelne gemeinsame Ressource, eine große CI-Flotte, ein spezialisierter Review-Pool, teuer genug ist, um die Investition zu rechtfertigen.

## Fragen für die Diskussion im Team

1. **Erfüllen unsere gemessene Work in Process, Ankunftsrate und Zykluszeit tatsächlich Littles Gesetz, und wenn nicht, warum nicht?** Das ist die schnellste verfügbare Diagnose für eine schlechte Metrikdefinition. Die tatsächlichen Zahlen sollten gemeinsam durchgegangen werden, und wenn die Gleichung nicht ungefähr hält, sollte die Diskrepanz auf eine konkrete definitorische Inkonsistenz zurückverfolgt werden, statt die Prüfung abzutun.

2. **Welche gemeinsamen Ressourcen in unserer Lieferpipeline laufen nahe voller Auslastung, und kennen wir tatsächlich ihre Auslastungszahl?** Die meisten Teams können eine Ressource benennen, die sich „immer beschäftigt anfühlt", haben ihre Auslastung aber nie direkt gemessen. Die zwei oder drei am stärksten beschränkten gemeinsamen Ressourcen sollten identifiziert und für jede eine echte Zahl ermittelt werden.

3. **Vermischen wir Erfolg, Fehlschlag und Skip zu einer Durchsatzzahl, und was würden wir sehen, wenn wir sie auftrennten?** Eine einzelne Zahl „abgeschlossene Items" kann steigen, selbst während die Qualität sinkt oder Arbeit still aufgegeben wird. Der Durchsatz eines jüngsten Zeitraums sollte als drei getrennte Zahlen neu berechnet werden, und diskutiert werden, was die Aufteilung enthüllt, das die vermischte Zahl verbarg.

4. **Wo in unserer Pipeline liegt der echte Flaschenhals, die langsamste Phase, die das Tempo für alles Nachgelagerte vorgibt?** Teams investieren oft in die Beschleunigung der Phase, die am leichtesten zu verbessern ist, statt der, die den Gesamtdurchsatz tatsächlich begrenzt. Die Phase mit der schlimmsten Kombination aus hoher Auslastung und hoher Fehler- oder Skip-Rate sollte identifiziert werden.

5. **Würde sich die Wartezeit tatsächlich verbessern, wenn wir Kapazität zu unserer am stärksten beschränkten gemeinsamen Ressource hinzufügten, oder würde die Nachfrage sich einfach ausdehnen, um sie zu füllen?** Diese Frage trennt einen echten Kapazitätsmangel von einem Nachfrageproblem, und die Antwort ändert, ob die richtige Lösung mehr Personal, ein WIP-Limit oder eine Änderung daran ist, wie Arbeit priorisiert wird, bevor sie in die Warteschlange eintritt.

6. **Haben wir je neu definiert, was als „in Arbeit" oder „angekommen" zählt, auf eine Weise, die ein Dashboard besser aussehen ließ, ohne zu ändern, was der Arbeit tatsächlich widerfuhr?** Das lohnt sich, ehrlich und konkret zu fragen, mit echten Beispielen aus dem letzten Jahr, statt es als hypothetische Sorge zu behandeln.

## Branchenperspektive

**Startup.** Bei einer Handvoll Ingenieurinnen und Ingenieuren sind die meisten Warteschlangen kurz genug, dass formale Warteschlangenanalyse übertrieben ist. Die nützliche Gewohnheit ist kleiner: Es sollte bemerkt werden, wenn eine Person, oft die dienstälteste Ingenieurin oder der dienstälteste Ingenieur, zu einer De-facto-gemeinsamen Ressource geworden ist, auf die alles andere wartet, und das sollte als Auslastungsproblem benannt werden, das es wert ist, selbst ohne formales Modell dahinter.

**Kleinunternehmen.** Ein kleines Unternehmensteam braucht selten mehr als die Verfolgung der Auslastung seiner ein oder zwei echt gemeinsam genutzten Ressourcen, oft eine einzelne Reviewerin oder ein einzelner Reviewer oder eine einzelne Deploy-Pipeline, und die Beobachtung des Punkts, an dem „meist verfügbar" still zu „meist der Flaschenhals" wird. Eine Tabelle reicht; dediziertes Tooling ist auf dieser Ebene nicht nötig.

**Enterprise.** Gemeinsame Ressourcen vermehren sich auf Konzernebene schnell: ein zentrales Plattform-Team, ein gemeinsames Sicherheits-Review-Gremium, eine gemeinsame CI-Flotte, die Dutzende Produktteams bedient. Genau das sind die Ressourcen, bei denen sich Auslastungsverfolgung auszahlt, weil eine einzelne überlastete gemeinsame Ressource die Lieferzeit jedes davon abhängigen Teams still verschlechtern kann, und keine eigenen Metriken eines einzelnen Teams eine Ursache enthüllen, die außerhalb der eigenen Pipeline liegt.

**Behörden.** Programme mit mehreren Behörden und Anbietern leiten Arbeit oft durch gemeinsame Freigabegremien, gemeinsame Sicherheitsakkreditierungsprozesse und gemeinsame Testumgebungen, die keine einzelne Stelle allein kontrolliert oder anpassen kann. Warteschlangenanalyse dieser gemeinsamen Tore, Ankunftsrate, Kapazität, Auslastung, ist oft der klarste verfügbare Beleg für einen Business Case zur Kapazitätserweiterung oder zur Änderung, wie Arbeit gebündelt wird, bevor sie das Tor erreicht.

## Beispiele

**Enterprise.** Das interne Plattform-Team eines Cloud-Infrastruktur-Anbieters bemerkte, dass die Lead Time für Änderungen (Thema 2.10) über jedes Produktteam hinweg gekrochen war, das von seiner gemeinsamen CI-Flotte abhing, obwohl kein einzelnes Team seine Arbeitsweise geändert hatte. Eine Auslastungsanalyse fand die Flotte während der Kernstunden über 90 % ausgelastet, weit jenseits des Punkts, an dem Warteschlangentheorie vorhersagt, dass die Wartezeit scharf statt allmählich wächst. Das Plattform-Team fügte CI-Kapazität hinzu und führte eine Fair-Share-Scheduling-Richtlinie ein, sodass kein einzelnes Team die Warteschlange durch einen Aktivitätsschub monopolisieren konnte. Die mediane CI-Wartezeit fiel innerhalb eines Monats um mehr als die Hälfte, ein Beleg, dass der Flaschenhals die ganze Zeit eine gemeinsame, unsichtbare Warteschlange gewesen war.

**Behörden.** Das Digitaldienste-Team einer nationalen Genehmigungsbehörde verfolgte die Antragsbearbeitung zwei Jahre lang als eine einzelne Durchsatzzahl „abgeschlossene Fälle pro Woche", und die Zahl sah stabil aus. Eine genauere Analyse, die diese Zahl in genehmigte, abgelehnte und von Antragstellenden nach langen Verzögerungen aufgegebene Fälle aufteilte, fand, dass sich die Abbruchrate im selben Zeitraum fast verdreifacht hatte, während Genehmigungen flach blieben. Littles Gesetz, auf die Sachbearbeiter-Warteschlange angewendet, zeigte, dass die Work in Process weit über das hinausgewachsen war, was die angegebene durchschnittliche Bearbeitungszeit des Teams implizierte, was bedeutete, dass sich Fälle still in einem Status anhäuften, der nicht als „wartend" gezählt wurde. Die Behörde strukturierte ihre Fallverfolgungsdefinitionen um, um jeden offenen Fall ehrlich zu zählen, und fügte Sachbearbeiter-Kapazität hinzu, bemessen, um die Auslastung unter 85 % zu halten, nun als ständiges operatives Ziel neben der Durchsatzzahl verfolgt.

## Business Case: Motivation, ROI und TCO

Die Rendite der Anwendung grundlegender Warteschlangenanalyse ist, dass sie „die Pipeline fühlt sich langsam an" in eine konkrete, vertretbare Entscheidung verwandelt, dieser gemeinsamen Ressource Spielraum hinzufügen, diese vermischte Metrik in ihre echten Bestandteile aufteilen, statt eines vagen Drängens, „schneller zu arbeiten", das die tatsächliche Ursache verfehlt. Das Beispiel des Cloud-Infrastruktur-Anbieters oben, halbierte Wartezeit durch eine Kapazitäts- und Scheduling-Lösung statt jeder Änderung am Verhalten einzelner Teams, ist das Muster, das diese Analyse zuverlässig erzeugt: Die Lösung ist fast immer günstiger, als jedes nachgelagerte Team zu bitten, sich schneller um einen Flaschenhals zu bewegen, den es nicht sehen kann.

Die Gesamtkosten der Einführung sind echt niedrig. Littles Gesetz und Auslastungsverfolgung brauchen kein neues Tooling über das hinaus, was die Themen 2.4 bis 2.6 bereits zu sammeln verlangen: Ankunftsrate, Work in Process und Zykluszeit. Die Investition ist größtenteils analytische Disziplin, die Zahlen gegeneinander zu prüfen und die Auslastung gemeinsamer Ressourcen periodisch zu überprüfen, bevor sie zur nächsten unerklärten Lead-Time-Regression der Organisation werden.

## Antipatterns und Fallstricke

- **Die Kapazität einer gemeinsamen Ressource exakt auf ihre durchschnittliche Ankunftsrate zuschneiden:** garantiert hohe Auslastung und außer Kontrolle geratene Wartezeiten, sobald die Nachfrage auch nur kurz ungleichmäßig ist.
- **Nur die mittlere Wartezeit berichten, nie ein Perzentil:** verbirgt den langen Ausläufer, der für die darin Wartenden am meisten zählt.
- **Erfolg, Fehlschlag und Skip zu einer Durchsatzzahl vermischen:** der Manipulationsvektor im Zentrum dieses Themas. Ein Team unter Druck kann den Durchsatz gesund aussehen lassen, indem es die Skip-Rate still steigen lässt, aufgegebene Tickets, still fallengelassene Anfragen, Arbeit, die nie als Fehlschlag gezählt wird. Die Leitplanke ist, Ankunfts-, Erfolgs-, Fehler- und Skip-Rate als vier getrennte, sichtbare Zahlen zu verfolgen, dieselbe Disziplin, die Thema 1.2 für jede Metrik in diesem Buch verlangt, damit sich eine steigende Skip-Rate nicht hinter einem flachen Durchsatzdiagramm verstecken kann.
- **„Unsere Leute sind immer beschäftigt" als Kompliment behandeln:** Das ist ein Symptom hoher Auslastung, der Hauptursache langer, unvorhersehbarer Wartezeiten.
- **„In Arbeit" neu definieren, um Work in Process still zu schrumpfen:** verschiebt Arbeit in einen ungezählten Zustand, „blockiert", „pausiert", ohne zu ändern, wie lange sie tatsächlich braucht, und bricht die Littles-Gesetz-Prüfung, die es sonst gefangen hätte.
- **Annehmen, ein Warteschlangenmodell brauche keine Pflege, sobald es gebaut ist:** Ankunftsmuster und Kapazität ändern sich ständig, und ein veraltetes Modell erzeugt selbstsicher falsche Vorhersagen.

## Reifegradmodell

- **Stufe 1, Initiieren:** Keine Warteschlange wird explizit gemessen; Wartezeit wird anekdotisch als „Dinge fühlen sich langsam an" diskutiert.
- **Stufe 2, Entwickeln:** Ankunftsrate, Work in Process und Zykluszeit werden für mindestens eine Pipeline verfolgt, aber nie gegen Littles Gesetz oder gegen Auslastung gemeinsamer Ressourcen geprüft.
- **Stufe 3, Standardisieren:** Littles Gesetz ist eine routinemäßige Konsistenzprüfung über Lieferpipelines hinweg, und Auslastung wird explizit für die bedeutsamsten gemeinsamen Ressourcen verfolgt.
- **Stufe 4, Steuern:** Erfolgs-, Fehler- und Skip-Rate werden für jede bedeutsame Warteschlange getrennt verfolgt, und Kapazitätsentscheidungen nutzen Auslastungsziele, nicht nur durchschnittliche Nachfrage.
- **Stufe 5, Orchestrieren:** Die Organisation modelliert ihre wichtigsten Pipelines als Warteschlangen von Warteschlangen, identifiziert echte Flaschenhälse systematisch und kann auf konkrete Kapazitäts- oder Prozessänderungen verweisen, die aufgrund von Warteschlangenanalyse getroffen wurden, mit gemessener Wartezeit-Verbesserung als Beleg.

## Diskussionsanregungen

1. Eine unserer Lieferpipelines sollte ausgewählt und geprüft werden, ob ihre Zahlen heute Littles Gesetz erfüllen.
2. Die eine gemeinsame Ressource in unserer Organisation sollte benannt werden, der die meisten zustimmen würden, sie sei „immer beschäftigt", und ihre tatsächliche Auslastungszahl sollte gefunden werden.
3. Wie sähe unser Durchsatzdiagramm aus, wenn wir es für das letzte Quartal in Erfolgs-, Fehler- und Skip-Raten aufteilten?
4. Wenn wir dieses Jahr genau einer gemeinsamen Ressource Kapazität hinzufügen müssten, welcher, und welcher Beleg würde das rechtfertigen?

## Die wichtigsten Erkenntnisse

- **Littles Gesetz**, Work in Process entspricht Ankunftsrate mal Zykluszeit, ist ein Beweis, keine Heuristik, und die günstigste verfügbare Prüfung, ob Liefermetriken intern konsistent sind.
- **Wartezeit wächst scharf, nicht allmählich, sobald sich die Auslastung voller Kapazität nähert.** „Immer beschäftigt" sollte als Warnzeichen behandelt werden, nicht als Kompliment.
- **Ankunftsrate, Erfolgsrate, Fehlerrate und Skip-Rate** sollten getrennt verfolgt werden; sie in eine Durchsatzzahl zu vermischen, ist der zentrale Manipulationsvektor dieses Themas.
- Eine mehrstufige Pipeline sollte als **Warteschlange von Warteschlangen** modelliert werden, und investiert werden sollte in die Phase mit der schlimmsten Kombination aus hoher Auslastung und hoher Fehler- oder Skip-Rate, nicht in die am leichtesten zu verbessernde.
- Günstige, einführbare Prüfungen, **Littles Gesetz und Auslastungsverfolgung**, sollten einer vollständigen Warteschlangensimulation vorgezogen werden, die kaum ein Team durchhält.

## Quellen und weiterführende Literatur

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve Performance Problems on the Computer Systems You Work With*. CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
