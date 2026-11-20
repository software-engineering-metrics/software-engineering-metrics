# Mitwirken

Danke, dass Sie helfen, dieses Buch zu verbessern. Beiträge jeder Größe sind
willkommen, vom Korrigieren eines Tippfehlers bis zum Schreiben eines neuen
Themas.

## Grundregeln

Das Buch folgt einem strengen Hausstil. Das Wesentliche:

- Keine Geviertstriche. Verwenden Sie ein Komma, einen Doppelpunkt, Klammern
  oder zwei Sätze.
- Keine Standardfloskeln ("not only ... but also", "load-bearing" und Ähnliches).
- Warmes, schlichtes, direktes Schreiben. Sprechen Sie die Leserin oder den
  Leser direkt an. Kurze Sätze.
- Begriffe bei der ersten Verwendung definieren. Zentrale Konzepte bei der
  ersten Erwähnung mit Wikipedia verlinken.
- Nur echte Quellen.
- Jedes Metrikfamilien-Thema benennt seinen Manipulationsweg und seine
  Leitplanke.

Die vollständigen Regeln stehen in `spec/conventions.md` im Wurzelverzeichnis
des Repositorys, die Kurzfassung sind die [Stilregeln](stilregeln.md). Die
Tests erzwingen die mechanischen Teile.

## Einrichtung

Sie brauchen Python 3 und [just](https://github.com/casey/just). Dieses
Repository enthält den Inhalt und die Spezifikation des Buchs sowie die
SvelteKit-Website (`software-engineering-metrics.github.io/`), die es in die
veröffentlichte Website rendert.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Eine Änderung vornehmen

1. Lesen Sie den passenden Leitfaden: [Verfassen](verfassen.md) für Themen,
   [Navigation](navigation.md) für die generierten Dateien, [Testen](testen.md)
   für die Tests.
2. Nehmen Sie die kleinste Änderung vor, die die Aufgabe erfüllt.
3. Wenn Sie ein Thema hinzugefügt, entfernt, umbenannt oder umnummeriert haben,
   aktualisieren Sie `spec/structure.md` im Wurzelverzeichnis des Repositorys und
   führen Sie `just nav` aus.
4. Führen Sie `just test` aus. Es muss bestehen.
5. Fügen Sie dem [Änderungsprotokoll](../projekt/aenderungsprotokoll.md) unter
   **Unreleased** einen einzeiligen Eintrag hinzu.

## Woran man arbeiten kann

- Fehler, unklare Passagen oder veraltete Verweise beheben.
- Beispiele verbessern, besonders konkrete Unternehmens- und Behördenbeispiele.
- Zitate gegen echte Quellen prüfen.
- Lücken in der Abdeckung eines Themas füllen, ohne die Vorlage zu brechen.

## Was man vermeiden sollte

- Bearbeiten Sie die generierten Dateien nicht von Hand (`README.md`, die
  `index.md` jeder Locale, `front-matter/table-of-contents.md` und
  `topics/09-07-index.md`). Ändern Sie stattdessen die Themen und führen Sie
  `just nav` aus.
- Bearbeiten Sie `en-001`, `en-gb` oder `en-us` nicht direkt; sie werden von
  `tools/localize.py` aus `en-gb-oxendict` abgeleitet.
- Fügen Sie kein Thema hinzu, ohne auch `spec/structure.md` zu aktualisieren.
- Führen Sie keine Geviertstriche oder verbotenen Formulierungen ein; die Tests
  schlagen sonst fehl.

## Probleme melden

Eröffnen Sie ein Issue, das das Problem, die Datei und das Thema beschreibt und,
wo relevant, die richtige Quelle oder Referenz. Kleine, konkrete Meldungen sind
am leichtesten umzusetzen.
