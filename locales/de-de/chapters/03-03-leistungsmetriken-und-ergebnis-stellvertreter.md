# 3.3 Leistungsmetriken und Ergebnis-Stellvertreter

## Überblick und Motivation

**Leistung**, das P in SPACE (Kapitel 3.1), ist die Dimension, die am häufigsten mit Aktivität verwechselt wird, und genau diese Verwechslung soll dieses Kapitel verhindern. Leistung fragt, ob die Arbeit einer Ingenieurin, eines Ingenieurs oder eines Teams tatsächlich ein gutes [Ergebnis](https://en.wikipedia.org/wiki/Outcome_(probability)) hervorbrachte: ein Feature, das ausgeliefert wurde und funktionierte, ein System, das zuverlässig blieb, eine Änderung, die eine Geschäfts- oder Nutzermetrik in die richtige Richtung bewegte. Aktivität (Kapitel 3.4) fragt nur, wie viel Bewegung stattfand. Ein Team kann hochaktiv und leistungsschwach sein, indem es ständig kleine Änderungen ausliefert, die nie ein Ergebnis bewegen, und das Umgekehrte ist ebenso möglich: ein Team, das selten liefert, dessen Änderungen aber zuverlässig genau richtig landen.

Die Schwierigkeit bei dieser Dimension ist, dass Ergebnis oft nicht einer einzelnen Person oder auch nur einem einzelnen Team zuschreibbar ist; Software-Ergebnisse entstehen aus Zusammenarbeit, aus Entscheidungen, die Monate zuvor von Menschen getroffen wurden, die inzwischen zu anderen Projekten gewechselt sind, aus Marktbedingungen, die keine Ingenieurin und kein Ingenieur kontrolliert. SPACE-Forscherinnen und -Forscher waren darüber explizit: Leistung sollte auf System- oder Teamebene anhand mehrerer, konvergierender Signale gemessen werden, nicht auf eine einzelne Zahl reduziert und schon gar nicht einer einzelnen Ingenieurin oder einem einzelnen Ingenieur isoliert zugeschrieben werden. Dieses Kapitel nimmt diesen Rat ernst und behandelt individuelle Leistungszuschreibung als eine Falle, die aktiv vermieden werden sollte, nicht als Abkürzung, die genommen wird, wenn es bequem ist.

Für große Teams ist es das, was ein Metrikprogramm, das tatsächlich Ergebnisse verbessert, von einem unterscheidet, das lediglich sichtbare Geschäftigkeit belohnt, Leistungsmessung richtig zu machen. Konzerne, die Leistung über viele Teams hinweg vergleichen, brauchen Signale, die Manipulation durch rohes Output-Volumen widerstehen; Behörden, die Technologieinvestitionen gegenüber Aufsichtsgremien rechtfertigen, müssen zeigen, dass Engineering-Aufwand echte Ergebnisse erzeugte, nicht nur gelieferte Artefakte, genau Kapitel 1.3s Ergebnisse-vor-Output-Prinzip, angewendet auf diese konkrete Dimension.

## Kernprinzipien

- **Leistung misst, ob Arbeit ein gutes Ergebnis hervorbrachte, nicht wie viel Arbeit stattfand.** Das ist die Kernunterscheidung zur Aktivitätsdimension.
- **Mehrere, konvergierende Signale sollten genutzt werden, nie eine einzelne Leistungszahl.** Kein einzelner Stellvertreter ist zuverlässig genug, um allein zu stehen.
- **Auf Team- oder Systemebene sollte gemessen werden.** Individuelle Ergebniszuschreibung ist meist unzuverlässig und lädt genau zu der Manipulation ein, vor der dieses Buch durchgängig warnt.
- **Qualität ist Teil der Leistung, kein separates Anliegen.** Arbeit, die ausgeliefert wird, aber etwas anderes kaputt macht, hat nicht wirklich gut performt.
- **Ein Leistungssignal ohne angehängte Entscheidung ist Dekoration**, genau gemäß dem allgemeinen Prinzip aus Kapitel 1.1, angewendet auf diese Dimension.

## Empfehlungen

### Mehrere konvergierende Signale kombinieren, statt eines Leistungswerts

Leistungsbelege sollten aus mehreren Quellen gezogen werden: Change Failure Rate (Kapitel 2.10) und Rate entwichener Defekte (Kapitel 5.1) für Qualität, Deployment-Ergebnisse verknüpft mit tatsächlicher Feature-Adoption (Kapitel 5.2) dafür, ob die Arbeit etwas bewirkte, und qualitative Peer- oder Führungsbeurteilung des Beitrags eines Teams zu strategischen Zielen für Kontext, den eine reine Metrik nicht erfassen kann. Keines davon ist allein zuverlässig; gemeinsam, wenn sie zur selben Schlussfolgerung konvergieren, sind sie weit vertrauenswürdiger, als es eine einzelne Zahl je sein könnte.

### Auf Teamebene messen, individuelle Zuschreibung vermeiden

Software-Ergebnisse sind selten das Produkt der Arbeit einer einzelnen Person allein; sie entstehen aus Designentscheidungen, Review-Feedback, vorheriger Arbeit von Menschen, die das Team inzwischen möglicherweise verlassen haben, und Zusammenarbeit über Grenzen hinweg. Ein Ergebnis einer einzelnen Ingenieurin oder einem einzelnen Ingenieur zuzuschreiben, ist meist eine falsche Präzision, die diese Realität ignoriert und einen starken Anreiz für Einzelpersonen schafft, Anerkennung zu schützen statt frei zusammenzuarbeiten, genau die Art von Anreizverzerrung, vor der Kapitel 1.2 warnt.

### Qualität direkt in die Definition von Leistung einfalten

Ein Feature, das pünktlich ausgeliefert wird, aber eine Welle von Produktions-Incidents verursacht, hat nicht gut performt, selbst wenn eine naive, reine Output-Sicht es als geliefert zählen würde. Change Failure Rate, Rate entwichener Defekte und Nach-Release-Incident-Daten sollten direkt in die Leistungsbeurteilung eingebaut werden, statt Qualität als separates, unzusammenhängendes Anliegen zu behandeln, das nur in Teil 4 und Teil 6 dieses Buches gemessen wird.

### Leistungsdaten nutzen, um Investitions- und Prozessentscheidungen zu informieren, nicht individuelle Rankings

Die produktive Nutzung von Leistungsdaten besteht darin zu entscheiden, wo weiter investiert werden sollte (ein Team, das beständig starke Ergebnisse liefert, verdient mehr Ressourcen und Autonomie) und wo untersucht werden sollte (ein Team, dessen Arbeit beständig nicht landet, verdient Hilfe, nicht Schuldzuweisung, gemäß der diagnostischen Rahmung aus Kapitel 1.1). Einzelpersonen oder Teams anhand von Leistungsdaten wettbewerblich gegeneinander zu ranken, lädt genau zu der Manipulation und dem Moralschaden ein, vor denen dieses Buch warnt, und erzeugt selten bessere Ergebnisse als die diagnostische Nutzung.

### Ehrlich über Zuschreibungsgrenzen sein, besonders bei Plattform- und ermöglichenden Teams

Teams, die gemeinsame Infrastruktur, interne Tools oder Plattformfähigkeiten bauen (das Kapitel zu Plattform-Engineering im begleitenden Buch `software-engineering-guide` behandelt das direkt), sind mit ihrem Beitrag zu Ergebnissen oft mehrere Schritte von jeder einzelnen kundenseitigen Metrik entfernt. Die Leistung dieser Teams sollte über ihre Wirkung auf die Teams gemessen werden, die sie ermöglichen, Akzeptanz ihrer Plattform, Reduktion der von konsumierenden Teams berichteten Reibung, statt eine schlecht passende direkte Ergebnismetrik auf Arbeit zu zwingen, die von Natur aus indirekt ist.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Einzelner Leistungswert pro Team | Einfach zu präsentieren und zu vergleichen | Falsche Präzision; verbirgt, welches zugrunde liegende Signal den Wert tatsächlich trieb |
| Mehrere konvergierende Signale | Vertrauenswürdiger, widersteht Einzelmetrik-Manipulation | Schwerer in einer Zahl zusammenzufassen; braucht mehr Kontext zur Interpretation |
| Leistungsmessung auf Teamebene | Entspricht dem, wie Software-Ergebnisse tatsächlich entstehen | Kann Fragen zum individuellen Beitrag nicht direkt beantworten |
| Leistungszuschreibung auf individueller Ebene | Fühlt sich für Beurteilungen direkt handlungsleitender an | Meist eine falsche Präzision; starkes Manipulations- und Anerkennungsschutzrisiko |

Die zentrale Spannung ist **Präzision gegen Ehrlichkeit**. Eine einzelne Leistungszahl pro Team, oder schlimmer, pro Einzelperson, ist leicht zu vergleichen und zu ranken, aber diese Präzision ist meist falsch und verbirgt echte Unsicherheit über Zuschreibung und Qualität hinter einer sauber aussehenden Zahl. Die Lösung: ein weniger ordentliches Multi-Signal-Bild als das ehrliche akzeptieren, und dem Druck von Führungsebene oder Leistungsbeurteilungsprozessen widerstehen, es zurück in eine einzelne, falsch präzise Zahl zusammenzufalten.

## Fragen für die Diskussion im Team

1. **Kombiniert unsere aktuelle Leistungsmessung mehrere konvergierende Signale, oder verlässt sie sich auf eine einzelne Zahl, die präziser wirkt, als sie tatsächlich ist?** Was auch immer aktuell „Leistungsmetrik" genannt wird, sollte geprüft werden, und wie viele unabhängige, konvergierende Signale tatsächlich hineinfließen.

2. **Haben wir je die Leistung eines Teams oder einer Einzelperson zugeschrieben, ohne die kollaborative, teamübergreifende Natur zu berücksichtigen, wie das Ergebnis tatsächlich zustande kam?** Eine jüngste Erfolgsgeschichte sollte ausgewählt und nachverfolgt werden, wie viel davon von Menschen, Entscheidungen oder vorheriger Arbeit außerhalb des anerkannten Teams oder der Einzelperson abhing.

3. **Enthält unsere Leistungsmessung Qualität, oder nur Liefergeschwindigkeit und Output-Volumen?** Ein ausgeliefertes Feature, das später bedeutsame Produktions-Incidents verursachte, sollte nicht als hohe Leistung gelten; es sollte geprüft werden, ob die aktuelle Messung diesen Fall tatsächlich fangen würde.

4. **Wie messen wir die Leistung von Plattform- oder ermöglichenden Teams, deren Beitrag zu Ergebnissen indirekt ist?** Wenn die ehrliche Antwort „naja, gar nicht" ist, sollte diese Lücke benannt und direkt angegangen werden, statt diese Teams effektiv ungemessen oder unfair gegen kundenseitige Ergebnismetriken gemessen zu lassen, die nicht zu ihrer Arbeit passen.

5. **Wurden Leistungsdaten je genutzt, um Einzelpersonen wettbewerblich gegeneinander zu ranken, formal oder informell?** Diese Abdrift, ähnlich dem Risiko bei Zufriedenheitsdaten aus Kapitel 3.2, schädigt sowohl die Ehrlichkeit der Daten als auch die Bereitschaft des Teams, offen zusammenzuarbeiten.

6. **Was schließen wir, wenn unsere konvergierenden Signale sich widersprechen, hohe Liefergeschwindigkeit, aber steigende Defektrate zum Beispiel, und geht unser Prozess mit diesem Widerspruch gut um?** Widerspruch zwischen Signalen ist selbst wertvolle Information; es sollte diskutiert werden, ob das eigene Team das aktuell als zu ignorierendes Rauschen oder als echten, untersuchungswürdigen Befund behandelt.

## Branchenperspektive

**Startup.** Leistung ist meist direkt sichtbar: Hat das Feature funktioniert, haben Kundinnen und Kunden es übernommen, hat sich die Metrik bewegt. Formale Multi-Signal-Messung ist auf dieser Ebene oft unnötig; das Risiko ist stattdessen, Erfolg oder Misserfolg zu schnell einer Person zuzuschreiben, in einem schnelllebigen, hochkollaborativen kleinen Team, in dem Anerkennung und Schuld selten nur einer Einzelperson gehören.

**Kleinunternehmen.** Vorhandene Liefer- und Qualitätsdaten (Kapitel 2.10, Kapitel 5.1) sollten mit direktem, ehrlichem Gespräch darüber kombiniert werden, ob jüngste Arbeit dem Geschäft tatsächlich geholfen hat, statt formale Multi-Signal-Instrumentierung zu bauen, für deren Pflege keine Kapazität besteht.

**Enterprise.** Hier verdient sich die Disziplin der Multi-Signal-Messung auf Teamebene ihre Investition, da der Druck, Leistung auf eine einzelne vergleichbare Zahl über Dutzende Teams hinweg zu reduzieren, hier am stärksten ist und der Schaden durch falsche Präzision sich über die Ressourcenentscheidungen der gesamten Organisation summiert. Diesem Druck sollte explizit widerstanden und der Multi-Signal-Fall dafür gebaut werden, warum das zählt.

**Behörden.** Zu zeigen, dass Engineering-Investition echte Ergebnisse erzeugte, nicht nur gelieferte Artefakte, ist oft die zentrale Frage, die ein Aufsichtsgremium stellt. Multi-Signal-Leistungsmessung, explizit an Ergebnismetriken geknüpft (Kapitel 5.3) statt an reine Lieferstellvertreter, gibt eine weit stärkere, vertretbarere Antwort als eine Aktivitäts- oder Lieferzählung allein.

## Beispiele

**Enterprise.** Die Führungsebene eines Einzelhandelstechnologieunternehmens hatte informell Engineering-Teams nach abgeschlossenen Story Points pro Sprint gerankt und dies als Leistungsstellvertreter behandelt. Nach der Einführung eines Multi-Signal-Ansatzes, der Lieferdaten, Change Failure Rate und Nach-Release-Feature-Adoption kombinierte, fand die Führungsebene, dass das Team mit der höchsten Story-Point-Abschlussrate im Unternehmen die niedrigste Feature-Adoptionsrate hatte: Sie lieferten schnell, bauten aber Dinge, die Kundinnen und Kunden nicht nutzten. Die Roadmap-Prioritäten dieses Teams basierend auf dem vollständigeren Leistungsbild neu zuzuweisen, statt auf dem irreführenden Einzelzahl-Ranking, lenkte innerhalb eines Quartals bedeutende Engineering-Kapazität zu wirkungsvollerer Arbeit um.

**Behörden.** Das Engineering-Programm einer nationalen Steuerbehörde musste einem Aufsichtsausschuss zeigen, dass eine größere Systeminvestition die Leistung verbessert hatte, nicht nur den vertraglich vereinbarten Umfang geliefert hatte. Statt allein Story-Point- oder Meilenstein-Abschluss zu berichten, präsentierte das Programm ein konvergierendes Set an Signalen: reduzierte Bearbeitungsfehlerrate, reduzierte mediane Bearbeitungszeit und erhöhte erfolgreiche Selbstbedienungs-Abschlussrate, alle an die konkret gelieferten Systemkomponenten geknüpft. Die Multi-Signal-, ergebnisgeknüpfte Präsentation erfüllte die Prüfung des Ausschusses auf eine Weise, die ein einfacher „pünktlich geliefert"-Bericht eines früheren Programms im Vorjahr verfehlt hatte.

## Business Case: Motivation, ROI und TCO

Die Rendite, Leistung durch konvergierende, ergebnisgeknüpfte Signale statt einer falsch präzisen Einzelzahl zu messen, sind bessere Ressourcenentscheidungen: Eine Organisation, die sehen kann, welche Teamarbeit echt Ergebnisse bewegt, kann dort weiter investieren, wo es zählt, und dort untersuchen, wo es nicht der Fall ist, statt das Team zu belohnen, das zufällig am beschäftigtsten aussieht. Das Einzelhandelsbeispiel oben ist typisch: Ein irreführendes Einzelzahl-Ranking hatte Investitionsaufmerksamkeit von dort weggelenkt, wo sie tatsächlich geholfen hätte.

Die Gesamtbetriebskosten sind höher als bei einem Einzelmetrik-Ansatz, weil Daten aus mehreren Quellen kombiniert werden müssen (Lieferung, Qualität, Ergebnis) und organisatorischem Druck widerstanden werden muss, das Bild zurück in eine vergleichbare Zahl zusammenzufalten. Diese Kosten lohnen sich, weil die Alternative, ein falsch präziser Einzelwert, die Ressourcenentscheidungen, die Leistungsdaten informieren sollen, aktiv in die Irre führt.

## Antipatterns und Fallstricke

- **Aktivität mit Leistung verwechseln:** der häufigste Fehler, den diese Dimension speziell verhindern soll.
- **Individuelle Leistungszuschreibung für kollaborative, teamübergreifende Ergebnisse:** meist eine falsche Präzision, die Zusammenarbeit entmutigt.
- **Qualität aus der Definition von Leistung ausschließen:** belohnt Arbeit, die ausgeliefert wird, aber etwas anderes kaputt macht.
- **Eine direkte Ergebnismetrik auf Plattform- oder ermöglichende Teams zwingen:** misst das Falsche für von Natur aus indirekte Arbeit.
- **Mehrere konvergierende Signale unter organisatorischem Druck zurück in eine falsch präzise Zahl zusammenfalten:** verliert die Ehrlichkeit, die der Multi-Signal-Ansatz liefern sollte.
- **Leistungsdaten nutzen, um Einzelpersonen wettbewerblich zu ranken:** schädigt sowohl die Ehrlichkeit der Daten als auch die Teamzusammenarbeit.

## Reifegradmodell

- **Stufe 1, Initiieren:** Leistung wird mit Aktivität oder Output-Volumen gleichgesetzt, gemessen mit einer einzelnen, ungeprüften Zahl.
- **Stufe 2, Entwickeln:** Manche Qualitätssignale werden neben Output betrachtet, aber es gibt keinen konsistenten Multi-Signal-Ansatz, und individuelle Zuschreibung geschieht noch informell.
- **Stufe 3, Standardisieren:** Leistung wird auf Teamebene anhand mehrerer konvergierender Signale einschließlich Qualität gemessen, organisationsweit konsistent.
- **Stufe 4, Steuern:** Widersprüche zwischen konvergierenden Signalen werden aktiv untersucht; Plattform- und ermöglichende Teams haben angemessen indirekte, zu ihrer tatsächlichen Arbeit passende Leistungsmaße.
- **Stufe 5, Orchestrieren:** Leistungsdaten informieren direkt Ressourcen- und Investitionsentscheidungen, und die Organisation kann auf konkrete Neuzuweisungsentscheidungen verweisen, die eine Multi-Signal-Sicht ermöglichte und eine Einzelzahl-Sicht übersehen hätte.

## Diskussionsanregungen

1. Welche einzelne Zahl nutzen wir aktuell als Leistungsstellvertreter, die wir zugunsten eines konvergierenden Sets aussondern sollten?
2. Haben wir je ein Ergebnis dem falschen Team oder der falschen Person zugeschrieben, weil die Zuschreibung unklar war?
3. Wie messen wir aktuell die Leistung eines Plattform- oder ermöglichenden Teams?
4. Wie würde es aussehen, wenn sich unsere konvergierenden Signale nächstes Quartal widersprächen?
5. Wo hat ein Story-Point- oder Lieferzahl-Ranking unsere Investitionsaufmerksamkeit fehlgeleitet?

## Die wichtigsten Erkenntnisse

- Leistung misst, ob Arbeit ein **gutes Ergebnis** hervorbrachte, nicht wie viel Bewegung stattfand; sie sollte nicht mit Aktivität verwechselt werden (Kapitel 3.4).
- **Mehrere, konvergierende Signale** sollten genutzt werden, nie eine einzelne Leistungszahl, und falscher Präzision sollte misstraut werden.
- Gemessen werden sollte auf **Team- oder Systemebene**; individuelle Ergebniszuschreibung ist meist unzuverlässig und schädigt Zusammenarbeit.
- **Qualität ist Teil der Leistung**, kein separates, unzusammenhängendes Anliegen.
- Plattform- und ermöglichenden Teams sollten **angemessen indirekte** Leistungsmaße gegeben werden, statt eine schlecht passende direkte Ergebnismetrik auf ihre Arbeit zu zwingen.

## Quellen und weiterführende Literatur

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble und Gene Kim (ergebnisbasierte Leistungsmessung).
- *Team Topologies*, von Matthew Skelton und Manuel Pais (Plattform- und ermöglichende Teamstrukturen und wie ihr Beitrag gemessen wird).
- *Measuring and Managing Performance in Organizations*, von Robert D. Austin (die Risiken falsch präziser Leistungsmetriken).
