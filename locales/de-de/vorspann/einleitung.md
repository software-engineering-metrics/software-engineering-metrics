# Einleitung

Dieses Buch ist ein praxisnaher Leitfaden, um [Software Engineering](https://en.wikipedia.org/wiki/Software_engineering)
gut zu messen, für Teams vom Fünf-Personen-Start-up bis zum Konzern mit
tausenden Ingenieurinnen und Ingenieuren oder zur Behörde, die an einem
gesetzlichen Leistungsrahmen berichtet. Es gibt es, weil die meisten Ratschläge
zu Metriken entweder eine Zusammenfassung eines Frameworks ohne
operative Details sind oder die Feature-Liste eines Werkzeuganbieters. Dieses
Buch versucht, keines von beiden zu sein: Es ist meinungsstark in der Frage,
was zu messen ist, ausdrücklich darin, wie jede Metrik manipuliert wird, und
praktisch darin, wie man ein Metrikprogramm führt, dem ein Team vertraut,
statt es zu fürchten.

## Für wen dieses Buch ist

Die Hauptzielgruppe sind die Menschen, die entscheiden, was eine Organisation
misst: Führungskräfte in der Entwicklung, Staff und Principal Engineers,
Plattform- und DevOps-Teams sowie Programm- und Produktverantwortliche. Die
zweite Zielgruppe sind alle Ingenieurinnen und Ingenieure, die die Gründe hinter
einem Dashboard verstehen wollen, dessen Zahlen sie bewegen sollen, und wie sie
eine Metrik infrage stellen, die ihrem Zweck nicht mehr dient. Sie müssen es
nicht von vorn bis hinten lesen. Jedes Thema steht für sich, nennt zuerst seine
Prinzipien und endet mit praktischen Erkenntnissen, einem Reifegradmodell und
Quellen.

## Wie das Buch aufgebaut ist

Das Buch ist in **Teile** (ganze Zahlen) und **Themen** (Dezimalzahlen)
gegliedert. Thema **N.0** führt in jeden Teil ein und erklärt, wie seine Themen
zusammenhängen; die Themen **N.1, N.2, …** behandeln die Themen im Einzelnen.

- **Teil 1, Grundlagen der Messung:** warum überhaupt messen, Goodharts Gesetz
  und die Psychologie der Manipulation, Ergebnisse statt Ausgabe wählen,
  Governance und Verantwortung, Datenquellen und die statistische
  Kompetenz, die jedes Metrikprogramm braucht.
- **Teil 2, Flow-Metriken:** das Flow-Framework, seine Flow-Items und fünf
  Flow-Metriken, Durchlaufzeit, Warteschlangentheorie, klassische
  Lean-Wertstrommetriken, Pull-Request- und Code-Review-Metriken sowie das
  DORA-Framework als Referenzthema.
- **Teil 3, Entwicklererfahrung und das SPACE-Framework:** das SPACE-Framework
  und seine fünf Dimensionen sowie die Frage, wie man eine Umfrage zur
  Entwicklererfahrung durchführt, ohne dass sie zum Beliebtheitswettbewerb wird.
- **Teil 4, Code- und Qualitätsmetriken:** Komplexität, Testabdeckung und
  Testwirksamkeit, Churn und Hotspots, statische Analyse, technische Schulden
  und Dokumentation.
- **Teil 5, Produkt- und Geschäftsmetriken:** entwichene Fehler, Feature-
  Akzeptanz, Kunden- und Geschäftsergebnisse, Einheitswirtschaftlichkeit und
  Kapitalrendite.
- **Teil 6, Metriken zu Zuverlässigkeit, Betrieb und Sicherheit:** SLIs, SLOs
  und Fehlerbudgets, Incident-Metriken, Bereitschaft und Kapazität sowie
  Sicherheits- und Schwachstellenmetriken.
- **Teil 7, Metriken im Zeitalter der KI:** der Paradigmenwechsel durch
  generative KI, wie man KI-gestützte Entwicklung misst, das Risiko der
  Metrikinflation und warum Ergebnis-Telemetrie zum Nordstern wird, wenn
  Ausgabe billig wird.
- **Teil 8, Ein Metrikprogramm aufbauen:** ein Dashboard entwerfen, Bauen
  oder Kaufen, Metriken einführen, ohne Angst zu erzeugen, ein
  Reifegradmodell und eine schrittweise Einführungs-Roadmap.
- **Teil 9, Anhänge:** Glossar, Referenz zu Metrikdefinitionen und Formeln,
  Checklisten, Vorlagen, Reifegrad-Selbstbewertung, Quellen und Index.

## Leitprinzipien

Acht Prinzipien bilden das Rückgrat des Buchs:

1. **Ein Maß, das zum Ziel wird, ist kein gutes Maß mehr.** Entwerfen Sie von
   Anfang an gegen Goodharts Gesetz, nicht erst, wenn die Verzerrung auftritt.
2. **Ergebnisse vor Ausgabe vor Aktivität.** Gewichten Sie jedes Metrik-Set in
   Richtung dessen, was sich für Kundschaft oder Geschäft verändert hat, nicht
   dessen, was das Team produziert hat oder wie beschäftigt es war.
3. **Jede incentivierte Metrik braucht eine Leitplanke.** Koppeln Sie
   Geschwindigkeit mit Qualität, Durchsatz mit Stabilität, und jagen Sie
   niemals eine Zahl isoliert.
4. **Messen Sie Systeme, nicht Menschen.** Eine Metrik, die Schuld
   individualisiert, zerstört Vertrauen und lädt zur Manipulation ein; eine
   Metrik, die eine Systemgrenze sichtbar macht, lädt zur Verbesserung ein.
5. **Bevorzugen Sie Instrumentierung gegenüber Selbstauskunft, wo Sie sie
   bekommen können, und Selbstauskunft, wo nicht.** Deployment-Zahlen kommen
   aus der Pipeline; Zufriedenheit kommt vom Fragen.
6. **Eine Metrik verdient sich ihren Platz oder wird ausgemustert.** Jede
   Kachel auf einem Dashboard kostet Aufmerksamkeit. Dünnen Sie bewusst aus.
7. **Definitionen sind wichtiger als Dashboards.** Zwei Teams, die die
   "Durchlaufzeit" unterschiedlich berechnen, werden mehr Zeit mit Streit über
   die Zahl verbringen als damit, danach zu handeln.
8. **Generative KI ist ein Grund zum Überdenken, nicht nur zum Neu-Baselinen.**
   Wenn Ausgabe billig wird, brauchen auf Ausgabemenge gebaute Metriken neue
   Leitplanken, nicht nur neue Ziele.

## Übergreifende Themen

[Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) ist das eine
Thema, das sich durch jeden Teil dieses Buchs zieht, nicht nur durch Thema 1.2.
Jedes Metrikfamilien-Thema nennt, wie die behandelte Metrik manipuliert wird und
welche Leitplanke das auffängt. Berichtspflichten von Behörden und Unternehmen,
bei denen eine Metrik gesetzliches oder vertragliches Gewicht tragen kann,
werden durchgängig als Entwurfsvorgaben behandelt, nicht als Nachgedanke, der
auf ein Thema beschränkt ist.

## Wie man es nutzt

Führen Sie schrittweise ein; kippen Sie kein Dashboard auf ein Team, das nie
eines hatte. Beginnen Sie dort, wo der Schmerz am größten ist, nutzen Sie das
Reifegradmodell jedes Themas, um Ihren Standort ehrlich zu bestimmen, und lassen
Sie die Einführungs-Roadmap (Thema 8.5) die Arbeit ordnen. Das Ziel ist keine
Wand aus Diagrammen. Es ist eine Organisation, die mit Belegen sagen kann, ob
das, was sie tut, funktioniert, und die ihren eigenen Zahlen genug vertraut, um
danach zu handeln.
