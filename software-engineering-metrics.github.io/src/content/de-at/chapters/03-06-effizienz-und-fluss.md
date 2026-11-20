# 3.6 Effizienz und Fluss: konzentrierte Arbeit und Unterbrechungen

## Überblick und Motivation

**Effizienz und Fluss**, die letzte Dimension von SPACE (Thema 3.1), misst die Abwesenheit von Reibung und die Fähigkeit, ununterbrochene, konzentrierte Arbeit aufrechtzuerhalten. Diese Dimension sitzt an der Grenze zwischen den Liefer-Flow-Metriken aus Teil 2 (Thema 2.5s Flow-Effizienz misst, wie Arbeit durch ein Teamsystem fließt) und etwas Persönlicherem: der individuellen kognitiven Erfahrung tiefer, konzentrierter Engineering-Arbeit, und wie oft diese Erfahrung durch Unterbrechung zerstückelt wird. Softwareentwicklung hängt, mehr als die meiste Wissensarbeit, davon ab, eine große Menge Kontext gleichzeitig im Arbeitsgedächtnis zu halten, was sie ungewöhnlich anfällig für die Kosten der Unterbrechung macht.

Die Forschung zu diesen Kosten ist konsistent und ernüchternd: Sich nach einer Unterbrechung tiefer, komplexer Arbeit neu zu fokussieren, dauert nicht Sekunden, es dauert routinemäßig viele Minuten, manchmal näher an einer halben Stunde, um das [Arbeitsgedächtnis](https://en.wikipedia.org/wiki/Working_memory) vollständig wiederaufzubauen, das eine Ingenieurin oder ein Ingenieur vor der Unterbrechung hielt. Eine Ingenieurin oder ein Ingenieur, deren oder dessen Tag durch Meetings, Benachrichtigungen und Kontextwechsel in Fünfzehn-Minuten-Blöcke zerstückelt ist, kann reichlich Aktivität zeigen (Thema 3.4), während weit weniger echt schwierige Arbeit erledigt wird, als dieselbe Person mit zwei geschützten, ununterbrochenen Stunden schaffen würde. Diese Dimension existiert speziell, um diese unsichtbaren Kosten sichtbar zu machen.

Für große Teams verstärken sich Unterbrechungskosten strukturell: mehr Meetings, mehr teamübergreifender Koordinationsaufwand, mehr Slack-Kanäle und Benachrichtigungen, mehr Prozess-Checkpoints, alles einzeln vernünftig erscheinend, aber gemeinsam zerstückeln sie den Tag stark. Konzerne und Behörden, mit ihren schwereren Governance- und Koordinationsbedürfnissen, sind für diese Zerstückelung besonders anfällig, und diese Dimension gibt der Führungsebene einen konkreten Weg, dagegen zu messen und sich zu verteidigen, statt „Fokuszeit" als vage kulturelle Wunschvorstellung zu behandeln, die niemand tatsächlich schützt.

## Kernprinzipien

- **Kontextwechsel haben echte, messbare Kosten, keine bloß gefühlten.** Sich nach einer Unterbrechung neu zu fokussieren, dauert routinemäßig viele Minuten, nicht Sekunden.
- **Meeting-Last und Unterbrechungshäufigkeit sind messbar, nicht nur anekdotisch.** Kalender- und Tooling-Daten können beide direkt zutage fördern.
- **Geschützte, ununterbrochene Zeit ist eine knappe Ressource, die bewusst verteidigt werden muss,** keine, die standardmäßig überlebt, während eine Organisation wächst.
- **Diese Dimension erklärt oft eine Lücke zwischen Aktivität und Leistung** (Themen 3.3 und 3.4): Hohe Aktivität bei niedriger Leistung lässt sich manchmal auf zerstückelte, unterbrechungsreiche Tage zurückführen.
- **Individuelle Variation im Fokusbedarf ist real,** und diese Dimension sollte Team-Normen informieren, keinen starren, identischen Zeitplan für alle erzwingen.

## Empfehlungen

### Meeting-Last und Zerstückelung direkt aus Kalenderdaten messen

Die Anzahl und Dauer ununterbrochener Blöcke von zwei oder mehr Stunden, die einer Ingenieurin oder einem Ingenieur in einer typischen Woche zur Verfügung stehen, sollte anhand von Kalenderdaten berechnet werden. Diese eine Zahl, manchmal **Fokuszeit** oder **Maker Time** genannt, ist ein direkter, instrumentierbarer Stellvertreter für diese Dimension, und es ist häufig, festzustellen, dass eine nominell vollzeitbeschäftigte Ingenieurin oder ein nominell vollzeitbeschäftigter Ingenieur in einer typischen Woche fast keine solchen Blöcke verfügbar hat, sobald Meetings berücksichtigt werden, ein Befund, der die Führungsebene meist mehr überrascht als die Ingenieurinnen und Ingenieure selbst.

### Unterbrechungshäufigkeit aus Tooling-Daten verfolgen, wo verfügbar

Benachrichtigungsvolumen, Häufigkeit eingehender Nachrichten während der Arbeitszeit und die Rate von Kontextwechseln zwischen Aufgaben können alle aus vorhandenem Kollaborations-Tooling angenähert werden. Diese Daten sollten aggregiert genutzt werden, auf Teamebene, nach demselben Prinzip wie Aktivitätsdaten (Thema 3.4): nie als individueller Überwachungsmechanismus, immer als Signal auf Teamebene darüber, ob der Koordinationsaufwand der Organisation über das hinausgewachsen ist, was echten Fokus schützt.

### Explizite Fokuszeit-Blöcke als Team- oder Organisationsnorm schützen

Die wirksamste Intervention, auf die diese Dimension hindeutet, ist einfach und günstig: konkrete, geschützte Zeitblöcke sollten festgelegt werden, üblich ist ein Vormittag oder Nachmittag an bestimmten Tagen, während derer standardmäßig keine Meetings angesetzt werden. Das braucht organisatorische Zustimmung über die Kontrolle eines einzelnen Teams hinaus, da Meetings oft über Teamgrenzen hinweg angesetzt werden, aber wo konsistent umgesetzt, ist es eine der Interventionen mit dem höchsten Ertrag und den geringsten Kosten in diesem gesamten Buch.

### Flow-Daten mit der Aktivitäts-Leistungs-Lücke korrelieren

Wenn ein Team hohe Aktivität zeigt (Thema 3.4), aber flache oder sinkende Leistung (Thema 3.3), sollten Flow- und Unterbrechungsdaten geprüft werden, bevor angenommen wird, die Lücke spiegele ein individuelles oder Team-Fähigkeitsproblem wider. Ein stark zerstückelter Zeitplan kann genau dieses Muster erzeugen: reichlich sichtbare Bewegung, wenig echt schwierige Arbeit abgeschlossen, weil schwierige Arbeit speziell den anhaltenden Fokus braucht, den Zerstückelung zerstört.

### Individuelle Variation respektieren, statt einen einzelnen starren Zeitplan aufzuzwingen

Nicht jede Ingenieurin und jeder Ingenieur braucht identische Fokuszeit-Muster oder arbeitet damit am besten; manche denken echt am besten in kürzeren Schüben, andere brauchen lange, ununterbrochene Phasen. Die Daten dieser Dimension sollten genutzt werden, um Team-Normen und -Standards zu informieren, geschützte Blöcke, die Opt-out statt verpflichtend sind, statt eines einzelnen erzwungenen Zeitplans, der einheitlichen Bedarf für alle annimmt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Kein Fokuszeit-Schutz | Maximale Terminflexibilität für Meetings | Zerstückelte Tage reduzieren Kapazität für echt schwierige Arbeit |
| Geschützte Fokusblöcke auf Teamebene | Geringe Kosten, hoher Ertrag, schützt tiefe Arbeit direkt | Braucht Koordinationszustimmung über ein einzelnes Team hinaus |
| Organisationsweite meetingfreie Zeiträume | Stärkster Schutz, am schwersten zu erodieren | Braucht breites organisatorisches Bekenntnis und kann für Rollen mit mehr Koordinationsbedarf starr wirken |
| Individuelle Opt-in-Fokusplanung | Respektiert individuelle Variation im Arbeitsstil | Schwächerer Standardschutz; leicht unter Terminplanungsdruck zu erodieren |

Die zentrale Spannung ist **Koordinationsbedarf gegen Fokusschutz**. Große Organisationen brauchen echt Meetings und teamübergreifende Koordination, um zu funktionieren, und dieser Bedarf zieht direkt gegen die ununterbrochene Zeit, die tiefe Engineering-Arbeit braucht. Die Lösung: nicht Koordination eliminieren, sondern Fokuszeit zu einem expliziten, geschützten Standard machen, statt zu dem, was zufällig übrig bleibt, nachdem jede Meeting-Anfrage untergebracht wurde, Fokusschutz als eine Ressource behandeln, die bewusst verteidigt wird, keine Restgröße.

## Fragen für die Diskussion im Team

1. **Wie viele ununterbrochene Zwei-Stunden-Blöcke hat eine typische Ingenieurin oder ein typischer Ingenieur in unserem Team tatsächlich in einer Woche, gemessen aus echten Kalenderdaten?** Die meisten Teams haben das nie direkt geprüft, und die Antwort ist, einmal gemessen, meist niedriger, als es der bloße Eindruck vermuten ließe.

2. **Haben wir je eine Lücke zwischen Aktivität und Leistung gesehen, die Flow-Daten erklären könnten?** Ein Zeitraum sollte betrachtet werden, in dem ein Team beschäftigt wirkte, aber bei echt schwieriger Arbeit unterlieferte, und geprüft werden, ob Meeting-Last oder Zerstückelung die Lücke erklären könnten.

3. **Was wäre nötig, um einen geschützten, meetingfreien Fokusblock für unser Team einzurichten, und was steht dem heute im Weg?** Das konkrete Hindernis sollte benannt werden, teamübergreifende Terminplanungsgewohnheiten, eine Führungserwartung ständiger Verfügbarkeit, und diskutiert werden, ob es tatsächlich so festgefahren ist, wie es sich anfühlt.

4. **Respektieren wir individuelle Variation im Fokusbedarf, oder nimmt unser aktueller Zeitplan an, alle arbeiten gleich?** Teammitglieder sollten direkt gefragt werden, wie sie konzentrierte Arbeit tatsächlich bevorzugt strukturieren, statt ein Einheitsmuster anzunehmen.

5. **Wie hat sich unsere Meeting-Last über das letzte Jahr verändert, und hat jemand den Trend vor dieser Diskussion bemerkt?** Zerstückelung schleicht sich oft graduell ein, ein vernünftig erscheinendes wiederkehrendes Meeting nach dem anderen, und ist selten das Ergebnis einer einzelnen bewussten Entscheidung.

6. **Wenn wir organisationsweit zwei volle Nachmittage pro Woche für tiefe Arbeit schützten, wozu müssten wir Nein sagen, und wäre es das wert?** Diese konkrete Abwägungsfrage bringt die Spannung zwischen Koordination und Fokus offen zutage, statt sie als abstrakte Wunschvorstellung zu belassen.

## Branchenperspektive

**Startup.** Meeting-Last ist bei einem kleinen Team meist natürlich niedrig, und das Risiko ist stattdessen Kontextwechsel, getrieben davon, gleichzeitig viele Hüte zu tragen, statt speziell durch angesetzte Meetings. Fokuszeit sollte auch im kleinen Maßstab bewusst geschützt werden, da die Gewohnheit früh leichter einzurichten ist als später nachzurüsten.

**Kleinunternehmen.** Eine einfache, informelle Norm, zum Beispiel keine internen Meetings vor Mittag, kann den größten Teil des Nutzens dieser Dimension erfassen, ohne Kalender-Analytics-Tooling zu brauchen. Die Disziplin zählt auf dieser Ebene mehr als die Messung.

**Enterprise.** Meeting-Last und teamübergreifender Koordinationsaufwand skalieren hier schlecht, und Zerstückelung schleicht sich oft durch viele einzeln vernünftige wiederkehrende Meetings ein, die niemand aggregiert betrachtet hat. Fokuszeit-Verfügbarkeit sollte direkt anhand von Kalenderdaten über die Organisation hinweg gemessen werden, und geschützte Fokusblöcke sollten als organisationsweite Richtlinie behandelt werden, keine Team-für-Team-Option, die von teamübergreifenden Terminplanungsgewohnheiten überschrieben wird.

**Behörden.** Schwere Governance- und Koordinationsanforderungen, verbreitet in Organisationen des öffentlichen Sektors, machen diese Dimension besonders wichtig, bewusst zu schützen, da die natürliche Anziehungskraft zu mehr Prozess und mehr Review-Meetings stark ist. Fokuszeit-Schutz sollte explizit als Produktivitätsinvestition gerahmt werden, wenn der Fall gegenüber Stakeholdern gemacht wird, die Meeting-Reduktion möglicherweise als Reduktion der Aufsicht sehen, statt als Schutz echter Engineering-Kapazität.

## Beispiele

**Enterprise.** Die Engineering-Führung eines Finanztechnologieunternehmens bemerkte eine anhaltende Lücke zwischen Commit-Aktivität und der Fähigkeit des Teams, echt komplexe Features pünktlich auszuliefern. Kalenderanalyse fand, dass die mediane Ingenieurin oder der mediane Ingenieur weniger als drei Stunden ununterbrochener Zwei-Stunden-Blöcke pro Woche verfügbar hatte, zerstückelt über einen Zeitplan wiederkehrender Status-Meetings, von denen viele über zwei Jahre inkrementell hinzugefügt worden waren, ohne eine einzelne Entscheidung, so viel Gesamt-Meeting-Last hinzuzufügen. Das Unternehmen führte zwei verpflichtende, organisationsweite meetingfreie Nachmittage pro Woche ein, und eine Folgeumfrage sowie eine Liefermetrik-Überprüfung sechs Monate später zeigten sowohl verbesserte Zufriedenheitswerte als auch eine messbare Reduktion der Zykluszeit (Thema 2.6) speziell für komplexe, mehrtägige Features.

**Behörden.** Das Engineering-Team einer Bundesbehörde, das unter schweren Governance-Anforderungen arbeitete, fand, dass Ingenieurinnen und Ingenieure fast 40 % ihrer Arbeitsstunden in Status- und Compliance-Review-Meetings verbrachten, basierend auf einer Kalenderprüfung, die durchgeführt wurde, nachdem mehrere Ingenieurinnen und Ingenieure in Austrittsgesprächen Bedenken geäußert hatten. Statt die Governance-Anforderungen zu eliminieren, die echten Aufsichtszwecken dienten, konsolidierte das Team redundante Status-Meetings in eine einzelne wöchentliche Überprüfung und verlagerte routinemäßige Compliance-Prüfungen zu asynchroner Dokumentationsprüfung statt Live-Meetings, was die Meeting-Last fast halbierte, während die zugrunde liegende Aufsichtsfunktion erhalten blieb, und nachfolgende Umfragedaten zeigten eine bedeutsame Verbesserung der berichteten Fokuszeit.

## Business Case: Motivation, ROI und TCO

Die Rendite, Fokuszeit zu schützen, steht in keinem Verhältnis zu ihren Kosten: Das Beispiel des Finanztechnologieunternehmens oben zeigt eine messbare Lieferverbesserung durch eine Änderung, die außer Terminplanungsdisziplin nichts kostete, zwei meetingfreie Nachmittage pro Woche. Weil tiefe, komplexe Arbeit speziell von anhaltender, ununterbrochener Aufmerksamkeit abhängt, kann selbst eine bescheidene Steigerung echter Fokuszeit-Verfügbarkeit eine überproportionale Verbesserung der Kapazität der Organisation für ihre schwierigste, wertvollste Arbeit erzeugen.

Die Gesamtbetriebskosten sind fast vollständig organisatorische Disziplin, keine Tooling-Investition: Kalenderdaten sind meist bereits verfügbar, und die Intervention selbst, konkrete Blöcke schützen, kostet nichts außer der Bereitschaft, Nein zur Ansetzung von Meetings während dieser Blöcke zu sagen. Die wichtigsten laufenden Kosten bestehen darin, die geschützte Zeit gegen graduelle Erosion zu verteidigen, während unweigerlich neue Koordinationsbedürfnisse entstehen.

## Antipatterns und Fallstricke

- **Zerstückelte Tage als unvermeidliche Kosten der Größe behandeln:** Sie verstärkt sich graduell und ist selten das Ergebnis einer einzelnen bewussten Entscheidung, was es leicht macht, sie unbehandelt zu lassen.
- **Hohe Aktivität mit hoher Leistung verwechseln, ohne Flow-Daten zu prüfen:** ein zerstückelter Zeitplan kann genau dieses irreführende Muster erzeugen.
- **Einen einzelnen, starren Fokuszeit-Zeitplan allen aufzwingen:** ignoriert echte individuelle Variation darin, wie Menschen am besten arbeiten.
- **Unterbrechungs- oder Benachrichtigungsdaten als individuelle Überwachung nutzen:** wiederholt genau das Missbrauchsrisiko, vor dem Thema 3.4 bei Aktivitätsdaten warnt.
- **Geschützte Fokuszeit durch Ausnahmen graduell erodieren lassen:** dasselbe Erosionsrisiko, vor dem Thema 2.5 bei WIP-Limits warnt, auf Fokuszeit-Schutz angewendet.
- **Governance- oder Koordinationsanforderungen hinzufügen, ohne je ihre kumulativen Meeting-Last-Kosten zu messen:** Zerstückelung schleicht sich eine vernünftig erscheinende Ergänzung nach der anderen ein.

## Reifegradmodell

- **Stufe 1, Initiieren:** Fokuszeit und Unterbrechungskosten werden weder gemessen noch geschützt; die Meeting-Last wächst, ohne dass jemand ihre kumulative Wirkung verfolgt.
- **Stufe 2, Entwickeln:** Manches informelles Bewusstsein für Zerstückelung existiert, aber keine Kalenderdaten werden analysiert, und keine geschützte Zeit ist formal eingerichtet.
- **Stufe 3, Standardisieren:** Fokuszeit-Verfügbarkeit wird aus Kalenderdaten gemessen, und geschützte, meetingfreie Blöcke sind als Team- oder Organisationsnorm eingerichtet.
- **Stufe 4, Steuern:** Flow-Daten werden aktiv mit Aktivitäts-Leistungs-Lücken korreliert, um durch Zerstückelung getriebene Unterleistung zu diagnostizieren, und geschützte Zeit wird auf Erosion überwacht.
- **Stufe 5, Orchestrieren:** Die Organisation behandelt Fokuszeit-Schutz als erstklassige Produktivitätsinvestition, kann auf konkrete Liefer- und Zufriedenheitsverbesserungen verweisen, die darauf zurückgeführt werden, und verteidigt sie proaktiv gegen den graduellen, inkrementellen Druck, der sie sonst erodieren würde.

## Diskussionsanregungen

1. Wie viele echt ununterbrochene Stunden hatte jede und jeder von uns letzte Woche?
2. Ist unsere Meeting-Last graduell gewachsen, ohne dass das jemand absichtlich entschieden hat?
3. Wo könnte eine jüngste Aktivitäts-Leistungs-Lücke tatsächlich ein Flow-Problem sein?
4. Welches einzelne wiederkehrende Meeting würden wir zuerst streichen, wenn wir gebeten würden, Zerstückelung zu reduzieren?
5. Was würde es uns tatsächlich kosten, zwei geschützte, meetingfreie Nachmittage pro Woche einzurichten?

## Die wichtigsten Erkenntnisse

- Effizienz und Fluss misst die **Abwesenheit von Reibung** und die Fähigkeit, **ununterbrochene, konzentrierte Arbeit** aufrechtzuerhalten, wovon Softwareentwicklung ungewöhnlich stark abhängt.
- **Kontextwechsel haben echte, messbare Kosten**, oft viele Minuten zum Neufokussieren, nicht Sekunden.
- **Fokuszeit-Verfügbarkeit sollte direkt aus Kalenderdaten gemessen werden**; das Ergebnis überrascht die Führungsebene meist.
- Diese Dimension **erklärt oft eine Lücke zwischen Aktivität und Leistung**, die sonst falsch diagnostiziert würde.
- **Geschützte Fokuszeit-Blöcke** sind eine kostengünstige, ertragreiche Intervention, brauchen aber bewusste Verteidigung gegen graduelle Erosion.

## Quellen und weiterführende Literatur

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Deep Work: Rules for Focused Success in a Distracted World*, von Cal Newport (die Kosten von Kontextwechseln und der Wert geschützter Fokuszeit).
- *Peopleware: Productive Projects and Teams*, von Tom DeMarco und Timothy Lister (Unterbrechungskosten und die Gestaltung von Umgebungen, die Fokus schützen).
- Mark, Gloria, Daniela Gudith, and Ulrich Klocke, "The Cost of Interrupted Work: More Speed and Stress" (2008): empirische Forschung zur Unterbrechungs-Erholungszeit.
