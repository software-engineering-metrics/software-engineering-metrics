# 3.1 Das SPACE-Framework

## Überblick und Motivation

Das [SPACE-Framework](https://queue.acm.org/detail.cfm?id=3454124), 2021 von den Forscherinnen und Forschern Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck und Jenna Butler veröffentlicht, wurde gebaut, um ein konkretes Problem zu lösen: Einzelzahl-Metriken für [Entwicklerproduktivität](https://en.wikipedia.org/wiki/Productivity), Codezeilen, Commit-Zahl, Story Points, werden trivial manipuliert und führen routinemäßig in die Irre. SPACE schlägt stattdessen Messung über fünf Dimensionen vor: **Zufriedenheit und Wohlbefinden**, **Leistung**, **Aktivität**, **Kommunikation und Zusammenarbeit** sowie **Effizienz und Fluss**. Kein einzelner Buchstabe soll allein stehen; der eigentliche Beitrag des Frameworks ist die Disziplin, alle fünf gemeinsam im Blick zu behalten, sodass ein Team nicht auf einer Achse produktiv aussehen kann, während es still eine andere schädigt.

Das zählt, weil Entwicklerproduktivität nicht eine Sache ist. Ein Team kann hochaktiv sein (viele Commits, viele Pull Requests), während es schlecht performt (die Arbeit bewegt nicht die Ergebnisse, die zählen). Ein Team kann kurzfristig gut performen, während die Zufriedenheit einbricht, ein Frühindikator für die Fluktuation und den Qualitätskollaps, die sich Monate später zeigen. SPACEs Einsicht, direkt aufbauend auf den Kapiteln 1.2 und 1.3 dieses Buches, ist, dass jede dieser Dimensionen, als eigenständiges Ziel verfolgt, auf Kosten der anderen manipuliert wird, und das Framework existiert speziell, um diesen Kompromiss sichtbar zu machen, bevor er echten Schaden anrichtet.

Für große Teams gibt SPACE der Führungsebene ein gemeinsames Vokabular für ein Gespräch, das sonst standardmäßig zu der am leichtesten messbaren Dimension greift, fast immer Aktivität. Konzerne, die Produktivität über viele Teams hinweg vergleichen, brauchen ein Framework, das der Anziehungskraft des Commit-Zählens widersteht; Behörden, die unter Rekrutierungs- und Bindungsdruck in einem konkurrierenden Arbeitsmarkt stehen, brauchen Zufriedenheits- und Wohlbefinden-Daten genauso ernsthaft wie Lieferdaten, weil der Verlust einer erfahrenen Ingenieurin oder eines erfahrenen Ingenieurs an Burnout weit mehr kostet, als der Output eines einzelnen Sprints je einsparte.

## Kernprinzipien

- **Keine einzelne SPACE-Dimension ist isoliert vertrauenswürdig.** Der Wert des Frameworks entsteht speziell daraus, mehrere gemeinsam zu messen.
- **Mindestens eine Metrik aus mindestens drei Dimensionen, subjektive und objektive Quellen mischend, ist das Minimum für ein ausgewogenes Bild.** Ein Metrik-Set, das vollständig aus einer Dimension oder einem Datentyp stammt, nutzt SPACE nicht wirklich.
- **Aktivität ist die Dimension, die am anfälligsten für Missbrauch als eigenständiger Stellvertreter ist.** Sie ist am leichtesten zu messen und am wenigsten repräsentativ für echten Wert für sich genommen.
- **Messung auf Team- und individueller Ebene braucht unterschiedliche Behandlung.** SPACE wurde primär für Einsicht auf Team- und Systemebene entworfen, nicht für individuelle Bewertungskarten.
- **Die fünf Dimensionen interagieren.** Eine Änderung, die eine verbessert, kann eine andere verschlechtern, und das Framework existiert, um diesen Kompromiss zu fangen.

## Empfehlungen

### Das eigene Metrik-Set aus mindestens drei Dimensionen aufbauen, bevor ihm vertraut wird

SPACE sollte nicht übernommen werden, indem eine einzelne Lieblingsdimension ausgewählt wird, meist Aktivität oder Leistung, und das für erledigt erklärt wird. Bewusst sollte mindestens eine Metrik aus mindestens drei der fünf Dimensionen ausgewählt werden, objektive Instrumentierung (Kapitel 1.5) mit subjektiven Umfragedaten (Kapitel 3.7) mischend, bevor irgendeine Schlussfolgerung über Teamproduktivität präsentiert wird. Diese Mindestzusammensetzung ist das, was verhindert, dass SPACE zurück in das Einzelstellvertreter-Problem verfällt, das es lösen sollte.

### Aktivitätsmetriken als Kontext behandeln, nie als Schlagzeile

Commit-Zahlen, Codezeilen und Pull-Request-Zahlen sind legitime Daten der SPACE-Aktivitätsdimension, aber sie sollten nie die primäre oder alleinige Metrik sein, die über die Produktivität eines Teams präsentiert wird. Aktivitätsdaten sollten genutzt werden, um Kontext für die anderen Dimensionen zu liefern, zum Beispiel zu bemerken, dass ein Rückgang der Aktivität mit einem Anstieg der Zufriedenheit zusammenfiel, weil das Team endlich Raum hatte, technische Schulden abzubauen, statt als eigenständiges Urteil. Kapitel 3.4 behandelt die konkreten Risiken dieser Dimension vertiefter.

### SPACE auf Team- und Systemebene anwenden, nicht auf individueller Ebene

Sowohl SPACEs ursprüngliche Forschung als auch ihre spätere Übernahme in der Branche behandeln das Framework als Linse zum Verständnis von Team- und organisatorischer Produktivität, nicht als individuelle Leistungsbewertungskarte. SPACE-Dimensionen zu nutzen, um Einzelpersonen zu ranken, besonders die Aktivitätsdimension, erzeugt genau das Manipulationsrisiko, vor dem Kapitel 1.2 warnt, und wendet ein Framework falsch an, das für diese Nutzung nie validiert wurde.

### Auf Kompromisse zwischen Dimensionen achten, nicht nur auf Bewegung innerhalb einer

Die echte diagnostische Kraft des Frameworks kommt daher, zu beobachten, wie sich Dimensionen relativ zueinander bewegen. Eine steigende Leistungsmetrik neben sinkender Zufriedenheit ist ein Warnzeichen, das es wert ist, sofort untersucht zu werden, möglicherweise ein Hinweis auf nicht nachhaltiges Tempo. Eine steigende Aktivitätsmetrik neben flacher oder sinkender Leistung deutet auf Beschäftigungstherapie statt echten Fortschritt hin. Alle fünf Dimensionen sollten gemeinsam in festem Rhythmus überprüft werden, speziell um diese dimensionsübergreifenden Muster zu fangen, nicht nur um jede Zahl isoliert zu prüfen.

### Rhythmen über Dimensionen hinweg angemessen mischen

Manche SPACE-Dimensionen ändern sich langsam und werden am besten periodisch gemessen (Zufriedenheit, typischerweise vierteljährliche Umfragezyklen); andere ändern sich schnell und profitieren von häufigerer, automatisierter Verfolgung (Aktivität, Effizienz und Fluss, beide größtenteils aus vorhandenen Systemen instrumentierbar). Der Messrhythmus sollte an das natürliche Änderungstempo jeder Dimension angepasst werden, statt jede Metrik auf denselben Berichtszeitplan zu zwingen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Einzeldimensionales Metrik-Set (meist Aktivität) | Einfach, günstig, vertraut | Leicht zu manipulieren, übersieht die menschlichen Kosten nicht nachhaltiger Praktiken |
| Vollständige Fünf-Dimensionen-SPACE-Einführung | Ausgewogen, widersteht Einzelachsen-Manipulation, fängt Kompromisse | Braucht mehr Instrumentierung und Umfrageinvestition |
| SPACE-Anwendung auf Teamebene | Entspricht der validierten Nutzung des Frameworks, schützt Einzelpersonen vor Fehlanwendung | Kann Fragen auf individueller Ebene nicht beantworten, die die Führungsebene manchmal will |
| SPACE-Anwendung auf individueller Ebene | Fühlt sich für manche Führungskräfte direkt handlungsleitender an | Wendet das Framework falsch an; starkes Manipulations- und Moralrisiko |

Die zentrale Spannung ist **Messvollständigkeit gegen Kosten und Komplexität**. Eine vollständige, ausgewogene SPACE-Umsetzung braucht mehr Instrumentierung, mehr Umfragedesign-Aufwand und mehr Disziplin, alle fünf Dimensionen gemeinsam zu überprüfen, als ein einfaches Aktivitäts-Dashboard. Die Lösung: mit einem echt minimalen, aber ausgewogenen Set beginnen, mindestens eine Metrik aus mindestens drei Dimensionen, statt entweder die Disziplin des Frameworks komplett zu überspringen oder am ersten Tag eine überwältigende, vollständig instrumentierte Version aller fünf Dimensionen zu versuchen.

## Fragen für die Diskussion im Team

1. **Stammt unser aktuelles Produktivitäts-Metrik-Set aus mindestens drei SPACE-Dimensionen, oder wird es allein von Aktivitätsdaten dominiert?** Das Dashboard sollte explizit gegen die fünf Dimensionen geprüft werden; die meisten Organisationen sind, ehrlich betrachtet, weit aktivitätslastiger, als ihnen bewusst ist.

2. **Haben wir je gesehen, dass sich eine SPACE-Dimension verbesserte, während eine andere still verschlechterte, und haben wir das damals bemerkt?** Dieser dimensionsübergreifende Kompromiss ist genau das, was das Framework fangen soll. Das letzte Jahr sollte auf eine Periode geprüft werden, in der sich Liefermetriken verbesserten, und gefragt werden, was Zufriedenheits- oder Wohlbefinden-Daten im selben Fenster zeigten.

3. **Werden SPACE-Daten je genutzt, selbst informell, um Einzelpersonen statt Teams zu bewerten oder zu vergleichen?** Das wendet das Framework falsch an und lädt zu Manipulation ein. Es sollte ehrlich betrachtet werden, wie diese Metriken tatsächlich in der Praxis diskutiert werden, nicht nur, wie die Richtlinie besagt, dass sie genutzt werden sollten.

4. **Wie würden wir bemerken, wenn ein Team seine Leistungsmetriken auf Kosten nicht nachhaltigen Tempos verbesserte?** Ohne Zufriedenheits- und Wohlbefinden-Daten, die neben Leistungsdaten überprüft werden, ist diese Art von Kompromiss unsichtbar, bis sie Monate später als Fluktuation oder Qualitätskollaps zutage tritt.

5. **Was ist unser Messrhythmus für jede der fünf Dimensionen, und passt er dazu, wie schnell sich jede Dimension tatsächlich ändert?** Eine vierteljährliche Zufriedenheitsumfrage gepaart mit Echtzeit-Aktivitätsdaten ist eine vernünftige Rhythmus-Diskrepanz; derselbe Rhythmus, gedankenlos auf alle fünf angewendet, ist es nicht.

6. **Würde eine neue Engineering-Führungskraft, die morgen dazustößt und nur auf unser Dashboard schaut, ein ausgewogenes Bild der Teamproduktivität bekommen, oder ein verzerrtes?** Das ist ein praktischer Test, ob das eigene Metrik-Set SPACEs Balance tatsächlich erreicht hat, oder ob es nur auf das Framework verweist, während es in der Praxis aktivitätsdominiert bleibt.

## Branchenperspektive

**Startup.** Eine vollständige Fünf-Dimensionen-Umsetzung ist meist übertrieben für eine Handvoll Ingenieurinnen und Ingenieure, die täglich sprechen und Zufriedenheit und Zusammenarbeitsgesundheit direkt spüren können. Die eine Gewohnheit, die sich früh lohnt, ist, der Anziehungskraft rein aktivitätsbasierter Metriken zu widerstehen, sobald das Team über die Größe hinauswächst, in der informelles Bewusstsein alles abdeckt.

**Kleinunternehmen.** Ohne dedizierte People-Analytics-Funktion sollte es einfach gehalten werden: Vorhandene Liefer-Daten (Kapitel 2.10) sollten mit einem kurzen, informellen, regelmäßigen Check-in zur Zufriedenheit gepaart werden, selbst einer einfachen Ein-Frage-Puls-Umfrage. Diese minimale Paarung erfasst die Kerndisziplin des Frameworks bereits weit besser als ein reines Aktivitäts-Dashboard.

**Enterprise.** Hier verdient sich das vollständige Framework seine Komplexität. Ein ausgewogenes SPACE-Metrik-Set sollte über Teams hinweg standardisiert werden, damit die Führungsebene Produktivität fair vergleichen kann, statt standardmäßig auf das Team zu setzen, das den beeindruckendsten Commit-Graphen hat, und in die in Kapitel 3.7 behandelte Umfrage-Infrastruktur investiert werden, um Zufriedenheits- und Zusammenarbeitsdaten so verlässlich wie die objektive Instrumentierung zu machen.

**Behörden.** Rekrutierungs- und Bindungsdruck, besonders wo öffentliche Bezahlung nicht immer mit Angeboten des privaten Sektors konkurrieren kann, macht Zufriedenheits- und Wohlbefinden-Daten zu einem echt strategischen Anliegen, keinem weichen Zusatz. SPACE sollte in Personalplanung und Budgetbegründung genauso ernst genommen werden wie Liefermetriken, da die Kosten, eine erfahrene Ingenieurin oder einen erfahrenen Ingenieur an Burnout zu verlieren, in Monaten institutionellen Wissens gemessen werden, das eine Ersatzperson nicht sofort liefern kann.

## Beispiele

**Enterprise.** Die Engineering-Führung eines Softwareunternehmens hatte jahrelang Commit-Zahlen und abgeschlossene Story Points als primäres Produktivitätssignal verfolgt. Nach der Einführung eines vollständigeren SPACE-Metrik-Sets, einschließlich einer vierteljährlichen Zufriedenheitsumfrage und Analyse des Zusammenarbeitsnetzwerks (Kapitel 3.5), entdeckte die Führungsebene, dass das Team mit den höchsten Aktivitätszahlen im folgenden Jahr auch die niedrigsten Zufriedenheitswerte und die höchste freiwillige Fluktuationsrate hatte. Die Aktivitätszahlen allein hatten aktiv in die Irre geführt; das vollständigere Bild führte zu einer bewussten Reduktion der gleichzeitigen Arbeitslast dieses Teams (Kapitel 2.5s WIP-Prinzip auf menschlicher Ebene angewendet) und einer messbaren Erholung sowohl der Zufriedenheit als auch, letztlich, nachhaltiger Leistung.

**Behörden.** Eine nationale Digitaldienstbehörde, die um Engineering-Talent gegen Gehälter des privaten Sektors konkurrierte, die sie nicht erreichen konnte, führte ein ausgewogenes SPACE-Metrik-Set speziell ein, um den Fall für nicht-monetäre Bindungsinvestitionen zu machen: besseres Tooling, geschützte Fokuszeit und reduzierte Prozessreibung. Zufriedenheitsumfragedaten kombiniert mit Effizienz- und Fluss-Metriken (Kapitel 3.6) zeigten, dass Unterbrechungshäufigkeit, nicht Vergütung, der stärkste Prädiktor für Kündigungsabsicht in Austrittsgesprächsdaten war. Die anschließende Investition der Behörde in eine Richtlinie zu geschützter Fokuszeit, direkt durch diese SPACE-Daten gerechtfertigt, korrelierte mit einer messbaren Verbesserung der Bindung über die folgenden achtzehn Monate.

## Business Case: Motivation, ROI und TCO

Die Rendite, SPACE vollständig einzuführen, sind vermiedene Fluktuation und vermiedener burnout-getriebener Qualitätskollaps, beide weit teurer als die Instrumentierungskosten des Frameworks. Ein reines Aktivitäts-Metrik-Set kann ein oder zwei Jahre lang hervorragend aussehen, bis die menschlichen Kosten auf einen Schlag einholen, an welchem Punkt die Kosten, verlorene Expertise zu ersetzen und Teamgesundheit wiederaufzubauen, jeden Produktivitätsgewinn überschatten, den das enge Metrik-Set je zu zeigen schien.

Die Gesamtbetriebskosten umfassen Umfrage-Infrastruktur (Kapitel 3.7) und die Disziplin, alle fünf Dimensionen gemeinsam zu überprüfen, statt standardmäßig auf die leichteste zu setzen. Diese Kosten lohnen sich echt: Das Enterprise-Beispiel oben zeigt ein echtes, entdeckbares Muster, hohe Aktivität, die hohes Fluktuationsrisiko verdeckt, das ein engeres Metrik-Set nie zutage gefördert hätte, bis der Schaden bereits geschehen war.

## Antipatterns und Fallstricke

- **SPACE nur dem Namen nach übernehmen, während man in der Praxis aktivitätsdominiert bleibt:** der häufigste Fehlmodus, und er untergräbt den gesamten Zweck des Frameworks.
- **SPACE-Dimensionen auf individuelle Bewertungskarten anwenden:** wendet ein Framework falsch an, das für Einsicht auf Team- und Systemebene validiert wurde.
- **Dimensionen isoliert überprüfen, statt auf dimensionsübergreifende Kompromisse zu achten:** übersieht das Muster, das SPACE speziell fangen soll.
- **Jede Dimension auf denselben Messrhythmus zwingen:** verschwendet Aufwand an sich langsam ändernden Dimensionen und untermisst sich schnell ändernde.
- **Einen einzelnen Zufriedenheits-Umfragewert ohne objektive Daten als ausreichend behandeln:** verliert die Balance zwischen subjektiven und objektiven Quellen, die das Framework verlangt.
- **Einen sich verschlechternden Trend in einer Dimension ignorieren, weil eine andere gut aussieht:** genau das Versagen, das die dimensionsübergreifende Disziplin des Frameworks verhindern soll.

## Reifegradmodell

- **Stufe 1, Initiieren:** Produktivität wird allein über Aktivitätsmetriken gemessen, ohne Zufriedenheits-, Zusammenarbeits- oder Effizienzdaten.
- **Stufe 2, Entwickeln:** Manche zusätzlichen Dimensionen werden informell gemessen, aber es gibt keine konsistente dimensionsübergreifende Überprüfung und keinen Mindestzusammensetzungsstandard.
- **Stufe 3, Standardisieren:** Ein ausgewogenes Metrik-Set aus mindestens drei SPACE-Dimensionen wird organisationsweit konsistent auf Teamebene angewendet.
- **Stufe 4, Steuern:** Alle fünf Dimensionen werden gemeinsam in regelmäßigem Rhythmus überprüft, dimensionsübergreifende Kompromisse werden aktiv untersucht, und das Framework informiert echte Personal- und Prozessentscheidungen.
- **Stufe 5, Orchestrieren:** SPACE-Daten formen direkt Personalplanung und Bindungsinvestitionen, und die Organisation kann auf konkrete, durch dimensionsübergreifende Muster informierte Interventionen verweisen, die sowohl Lieferung als auch Entwicklerwohlbefinden gemeinsam messbar verbessert haben.

## Diskussionsanregungen

1. Welche SPACE-Dimension ist in unserem aktuellen Metrik-Set am stärksten untermessen?
2. Haben wir je gesehen, dass die Aktivität eines Teams stieg, während die Zufriedenheit still fiel?
3. Wie würden wir heute fangen, dass ein Team langfristige Nachhaltigkeit gegen kurzfristigen Output eintauscht?
4. Werden aktuell irgendwelche SPACE-nahen Daten genutzt, um Einzelpersonen statt Teams zu bewerten?
5. Wie würde ein echt ausgewogenes Produktivitäts-Dashboard für uns konkret aussehen?

## Die wichtigsten Erkenntnisse

- SPACE umspannt fünf Dimensionen, **Zufriedenheit und Wohlbefinden, Leistung, Aktivität, Kommunikation und Zusammenarbeit sowie Effizienz und Fluss**, und keine einzelne ist allein vertrauenswürdig.
- Ein Metrik-Set sollte aus **mindestens drei Dimensionen** aufgebaut werden, objektive und subjektive Datenquellen mischend.
- **Aktivitätsmetriken sollten als Kontext behandelt werden**, nie als Schlagzeilen-Produktivitätssignal (Kapitel 3.4).
- SPACE sollte auf **Team- und Systemebene** angewendet werden, nicht als individuelle Bewertungskarte.
- Dimensionen sollten gemeinsam überprüft werden, mit Blick auf **dimensionsübergreifende Kompromisse**, nicht nur Bewegung innerhalb einer einzelnen.

## Quellen und weiterführende Literatur

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021): das ursprüngliche SPACE-Framework-Paper.
- *Accelerate: The Science of Lean Software and DevOps*, von Nicole Forsgren, Jez Humble und Gene Kim (die mit den DORA-Metriken geteilte Forschungsgrundlage).
- *Peopleware: Productive Projects and Teams*, von Tom DeMarco und Timothy Lister (das klassische Argument, Entwicklerproduktivität als menschliche, nicht rein mechanische Frage zu behandeln).
- *Drive: The Surprising Truth About What Motivates Us*, von Daniel H. Pink (Motivationsforschung, relevant für Zufriedenheits- und Wohlbefinden-Messung).
