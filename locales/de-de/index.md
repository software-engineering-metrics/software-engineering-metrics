# Software-Engineering-Metriken

Ein praxisnahes Buch darüber, **Software Engineering** gut zu messen: wie man Metriken wählt, die echte Ergebnisse statt bloßer Aktivität widerspiegeln, die Frameworks, auf denen dieses Buch aufbaut (das Flow-Framework, das SPACE-Framework, die Warteschlangentheorie und die DORA-Metriken), die wichtigen Metrikfamilien und wie man ein Metrikprogramm führt, das ein Team besser macht, statt es zu überwachen.

Das Buch behandelt Lieferung und Flow, Entwicklererfahrung, Code und Qualität, Produkt- und Geschäftsergebnisse, Zuverlässigkeit und Sicherheit sowie die Frage, wie generative KI die Bedeutung dieser Zahlen verändert.

- **[Was sind Software-Engineering-Metriken?](vorspann/was-sind-software-engineering-metriken.md):** Hier beginnen
- **[Einleitung](vorspann/einleitung.md):** was dieses Buch ist und wie man es liest
- **[Inhaltsverzeichnis](vorspann/inhaltsverzeichnis.md):** die vollständige Themenliste

## Wie man dieses Buch liest

Teile sind ganze Zahlen; Themen sind Dezimalzahlen. Thema **N.0** führt in jeden Teil ein; **N.1, N.2, …** sind seine Themen. Teil 9 versammelt die Anhänge (Glossar, eine Formelreferenz, Checklisten, Vorlagen, eine Reifegrad-Selbstbewertung, Quellen und einen Index). Jedes Metrikfamilien-Thema nennt Prinzipien, Empfehlungen, Abwägungen, eine Sektorperspektive, Beispiele (Unternehmen und Verwaltung), einen Business Case (ROI/TCO), Anti-Muster, ein Reifegradmodell, Diskussionsfragen und Quellen und benennt, wie die Metrik manipuliert wird und welche Leitplanke das auffängt. Führen Sie schrittweise ein; nicht alles auf einmal.

## Inhaltsverzeichnis

### Teil 1: Grundlagen der Messung
- [1.0 Einführung](themen/01-00-grundlagen-der-messung.md)
- [1.1 Warum Softwareentwicklung überhaupt messen](themen/01-01-warum-softwareentwicklung-messen.md)
- [1.2 Goodharts Gesetz und die Psychologie der Metriken](themen/01-02-goodharts-gesetz-und-die-psychologie-der-metriken.md)
- [1.3 Ergebnisse vor Output: die Wahl, was gemessen wird](themen/01-03-ergebnisse-vor-output.md)
- [1.4 Metrik-Governance und Eigentümerschaft](themen/01-04-metrik-governance-und-eigentuemerschaft.md)
- [1.5 Datenquellen und Instrumentierung](themen/01-05-datenquellen-und-instrumentierung.md)
- [1.6 Statistische Kompetenz für Engineering-Metriken](themen/01-06-statistische-kompetenz-fuer-engineering-metriken.md)

### Teil 2: Flow-Metriken
- [2.0 Einführung](themen/02-00-flow-metriken.md)
- [2.1 Das Flow Framework](themen/02-01-das-flow-framework.md)
- [2.2 Flow-Items: Features, Defekte, Risiken und Schulden](themen/02-02-flow-items.md)
- [2.3 Flow-Velocity und Flow-Verteilung](themen/02-03-flow-velocity-und-flow-verteilung.md)
- [2.4 Flow-Zeit und Flow-Last](themen/02-04-flow-zeit-und-flow-last.md)
- [2.5 Flow-Effizienz und Work in Process](themen/02-05-flow-effizienz-und-work-in-process.md)
- [2.6 Zykluszeit und ihre Bestandteile](themen/02-06-zykluszeit-und-ihre-bestandteile.md)
- [2.7 Warteschlangentheorie](themen/02-07-warteschlangentheorie.md)
- [2.8 Lean-Wertstrom-Metriken](themen/02-08-lean-wertstrom-metriken.md)
- [2.9 Pull-Request- und Code-Review-Metriken](themen/02-09-pull-request-und-code-review-metriken.md)
- [2.10 Das DORA-Metriken-Framework](themen/02-10-das-dora-metriken-framework.md)

### Teil 3: Entwicklererfahrung und das SPACE-Framework
- [3.0 Einführung](themen/03-00-entwicklererfahrung-und-space.md)
- [3.1 Das SPACE-Framework](themen/03-01-das-space-framework.md)
- [3.2 Zufriedenheit und Wohlbefinden-Metriken](themen/03-02-zufriedenheit-und-wohlbefinden-metriken.md)
- [3.3 Leistungsmetriken und Ergebnis-Stellvertreter](themen/03-03-leistungsmetriken-und-ergebnis-stellvertreter.md)
- [3.4 Aktivitätsmetriken und ihre Grenzen](themen/03-04-aktivitaetsmetriken-und-ihre-grenzen.md)
- [3.5 Kommunikations- und Zusammenarbeits-Metriken](themen/03-05-kommunikations-und-zusammenarbeits-metriken.md)
- [3.6 Effizienz und Fluss: konzentrierte Arbeit und Unterbrechungen](themen/03-06-effizienz-und-fluss.md)
- [3.7 Entwicklererfahrungs-Umfragen und DevEx-Metriken](themen/03-07-entwicklererfahrungs-umfragen-und-devex-metriken.md)

### Teil 4: Code- und Qualitätsmetriken
- [4.0 Einführung](themen/04-00-code-und-qualitaetsmetriken.md)
- [4.1 Code-Komplexitätsmetriken](themen/04-01-code-komplexitaetsmetriken.md)
- [4.2 Testabdeckung und Testwirksamkeit](themen/04-02-testabdeckung-und-testwirksamkeit.md)
- [4.3 Code-Fluktuation und Hotspot-Analyse](themen/04-03-code-fluktuation-und-hotspot-analyse.md)
- [4.4 Statische Analyse und Code-Smell-Metriken](themen/04-04-statische-analyse-und-code-smell-metriken.md)
- [4.5 Messung technischer Schuld](themen/04-05-messung-technischer-schuld.md)
- [4.6 Dokumentations- und Wissensmetriken](themen/04-06-dokumentations-und-wissensmetriken.md)

### Teil 5: Produkt- und Geschäftsmetriken
- [5.0 Einführung](themen/05-00-produkt-und-geschaeftsmetriken.md)
- [5.1 Entwichene Fehlerrate und Qualitätsentkommen](themen/05-01-entwichene-fehlerrate-und-qualitaetsentkommen.md)
- [5.2 Feature-Akzeptanz und Nutzungsmetriken](themen/05-02-feature-akzeptanz-und-nutzungsmetriken.md)
- [5.3 Kunden- und Geschäftsergebnismetriken](themen/05-03-kunden-und-geschaeftsergebnismetriken.md)
- [5.4 Kosten und Einheitswirtschaftlichkeit des Engineerings](themen/05-04-kosten-und-einheitswirtschaftlichkeit-des-engineerings.md)
- [5.5 Kapitalrendite für Engineering-Initiativen](themen/05-05-kapitalrendite-fuer-engineering-initiativen.md)

### Teil 6: Zuverlässigkeits-, Betriebs-, und Sicherheitsmetriken
- [6.0 Einführung](themen/06-00-zuverlaessigkeits-betriebs-und-sicherheitsmetriken.md)
- [6.1 Service-Level-Indikatoren, -Ziele, und Fehlerbudgets](themen/06-01-service-level-indikatoren-ziele-und-fehlerbudgets.md)
- [6.2 Vorfallmetriken: Erkennung, Reaktion, und Wiederherstellung](themen/06-02-vorfallmetriken.md)
- [6.3 Bereitschaftsdienst-, Kapazitäts-, und Betriebslastmetriken](themen/06-03-bereitschaftsdienst-kapazitaets-und-betriebslastmetriken.md)
- [6.4 Sicherheits- und Schwachstellenmanagement-Metriken](themen/06-04-sicherheits-und-schwachstellenmanagement-metriken.md)

### Teil 7: Metriken im Zeitalter der KI
- [7.0 Einführung](themen/07-00-metriken-im-zeitalter-der-ki.md)
- [7.1 Der Paradigmenwechsel der generativen KI](themen/07-01-der-paradigmenwechsel-der-generativen-ki.md)
- [7.2 KI-unterstützte Softwareentwicklung messen](themen/07-02-ki-unterstuetzte-softwareentwicklung-messen.md)
- [7.3 Metrikinflation und Qualitätsverwässerungsrisiken](themen/07-03-metrikinflation-und-qualitaetsverwaesserungsrisiken.md)
- [7.4 Ergebnis-Telemetrie als der neue Nordstern](themen/07-04-ergebnis-telemetrie-als-der-neue-nordstern.md)

### Teil 8: Ein Metrikprogramm aufbauen
- [8.0 Einführung](themen/08-00-ein-metrikprogramm-aufbauen.md)
- [8.1 Ein Engineering-Metrik-Dashboard gestalten](themen/08-01-ein-engineering-metrik-dashboard-gestalten.md)
- [8.2 Tooling-Landschaft: Bauen gegen Kaufen](themen/08-02-tooling-landschaft-bauen-gegen-kaufen.md)
- [8.3 Metriken einführen, ohne Furcht zu züchten](themen/08-03-metriken-einfuehren-ohne-furcht-zu-zuechten.md)
- [8.4 Reifegradmodell für Engineering-Metrikprogramme](themen/08-04-reifegradmodell-fuer-engineering-metrikprogramme.md)
- [8.5 Eine inkrementelle Einführungs-Roadmap](themen/08-05-eine-inkrementelle-einfuehrungs-roadmap.md)

### Teil 9: Anhänge
- [9.0 Anhänge](themen/09-00-anhaenge.md)
- [9.1 Glossar](themen/09-01-glossar.md)
- [9.2 Metrikdefinitionen- und Formelreferenz](themen/09-02-metrikdefinitionen-und-formelreferenz.md)
- [9.3 Checklisten](themen/09-03-checklisten.md)
- [9.4 Vorlagen](themen/09-04-vorlagen.md)
- [9.5 Reifegrad-Selbstbewertung](themen/09-05-reifegrad-selbstbewertung.md)
- [9.6 Quellen und weiterführende Literatur](themen/09-06-quellen-und-weiterfuehrende-literatur.md)
- [9.7 Index](themen/09-07-index.md)

## Übergreifende Themen

[Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) regiert jedes Thema: Ein Maß, das zum Ziel wird, ist kein gutes Maß mehr, daher kommt hier jede Metrikfamilie mit ihrem Manipulationsweg und ihrer Leitplanke. Ergebnisse werden durchgängig über Ausgabe und Aktivität gewichtet. Berichtspflichten von Behörden und Unternehmen werden als Entwurfsvorgaben behandelt, nicht als Nachgedanke, und der Wandel zu generativer KI als Grund, die Bedeutung dieser Metriken neu zu prüfen, nicht nur als neue Spalte im Dashboard.

## Jenseits der Themen

- **[Beispiele](beispiele/uebersicht.md):** kleine, konkrete Beispiele für die Ideen des Buchs im Einsatz.
- **[Über dieses Projekt](projekt/uebersicht.md):** wie das Buch gebaut, geprüft und veröffentlicht wird.
- **[Mitwirken](mitwirken/uebersicht.md):** wie man helfen kann, und die Regeln des Hausstils.
