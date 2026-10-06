# Was sind Software-Engineering-Metriken?

[Software-Engineering-Metriken](https://en.wikipedia.org/wiki/Software_metric)
sind quantitative Maße, mit denen die Qualität, Effizienz und Wirkung von
Softwareentwicklungsprozessen, -produkten und -teams bewertet, verfolgt und
verbessert wird. Gut eingesetzt wirken sie als systemische Diagnoseinstrumente:
Sie decken betriebliche Engpässe auf, rechtfertigen den Abbau technischer
Schulden und richten die Entwicklungsarbeit an konkreten Geschäftsergebnissen aus.
Schlecht eingesetzt verzerren sie das Verhalten, beschädigen das Vertrauen und
belohnen genau die falschen Dinge.

Dieses Buch gibt es, weil die meisten Teams zu Metriken greifen, bevor sie
entschieden haben, *wofür* eine Metrik gut sein soll. Ein Dashboard füllt sich
mit allem, was sich leicht zählen lässt, die Führungsebene beginnt zu fragen
"Ist diese Zahl gestiegen oder gesunken?", und binnen eines Quartals optimiert
das Team die Zahl statt des Ergebnisses, für das sie stehen sollte. Dieses
Versagen hat einen Namen, [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law):
Wenn ein Maß zum Ziel wird, ist es kein gutes Maß mehr. Jedes Thema in diesem
Buch ist mit diesem Gesetz im Rücken geschrieben.

## Die zwei grundlegenden Frameworks

Die Branche hat sich weitgehend auf zwei forschungsgestützte Frameworks zur
Messung der Lieferleistung und der Teamgesundheit verständigt.

**[DORA-Metriken](https://dora.dev/guides/dora-metrics/)** (aus dem Programm
DevOps Research and Assessment) messen Durchsatz und Stabilität eines Systems:
Deployment-Frequenz, Durchlaufzeit für Änderungen, Änderungsfehlerrate und
Wiederherstellungszeit nach fehlgeschlagenem Deployment. Teil 2 dieses Buchs
behandelt alle vier in einem eigenen Referenzthema, neben dem Flow-Framework,
mit dem Liefer- und Flow-Metriken breiter organisiert werden, weil DORA die
Mechanik der Pipeline gut misst, aber nichts darüber sagt, welche Art von Wert
durch die Pipeline fließt.

**Das [SPACE-Framework](https://queue.acm.org/detail.cfm?id=3454124)**,
entwickelt von Forschenden bei Microsoft, GitHub und der University of
Victoria, gleicht den rohen Durchsatz mit der Entwicklererfahrung über fünf
Dimensionen aus: Zufriedenheit und Wohlbefinden, Leistung, Aktivität,
Kommunikation und Zusammenarbeit sowie Effizienz und Flow. Teil 3 behandelt es
ausführlich.

Über diese beiden Frameworks hinaus verfolgen Teams lokale Metriken, nach
Bereichen gruppiert: Code- und Qualitätsmetriken (Teil 4), Produkt- und
Geschäftsmetriken (Teil 5) sowie Metriken zu Zuverlässigkeit, Betrieb und
Sicherheit (Teil 6). Teil 7 befasst sich mit einem bereits laufenden Wandel:
Generative-KI-Werkzeuge haben rohe Code-Ausgabe nahezu kostenlos gemacht, und
das bedeutet, dass mehrere Metriken, auf die sich die Branche ein Jahrzehnt
lang gestützt hat, nicht mehr bedeuten, was sie früher bedeutet haben.

## Für wen dieses Buch ist

Die Hauptzielgruppe sind die Menschen, die entscheiden, was ein Team misst und
warum: Führungskräfte in der Entwicklung, Staff und Principal Engineers,
Plattform- und DevOps-Teams sowie Programm- und Produktverantwortliche, die zum
ersten Mal ein Metrik-Dashboard oder eine Scorecard aufbauen oder eine
reparieren, die begonnen hat, das Verhalten zu verzerren. Die zweite
Zielgruppe sind alle Ingenieurinnen und Ingenieure, die verstehen wollen,
warum ihre Organisation verfolgt, was sie verfolgt, und wie sie widersprechen
können, wenn eine Metrik missbraucht wird.

## Wie man es liest

Beginnen Sie hier und lesen Sie dann die [Einleitung](introduction.md), um zu
sehen, wie das Buch aufgebaut ist, oder springen Sie direkt zum
[Inhaltsverzeichnis](table-of-contents.md). Jedes Thema steht für sich: Es
nennt zuerst seine Prinzipien, gibt konkrete Empfehlungen, benennt, wie die
behandelte Metrik manipuliert wird, und endet mit einem Reifegradmodell,
Diskussionsfragen und Quellen. Sie müssen das Buch nicht von vorn bis hinten
lesen, um es zu nutzen.
