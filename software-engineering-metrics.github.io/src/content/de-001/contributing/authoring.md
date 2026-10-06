# Verfassen: Themen schreiben und bearbeiten

## Bevor Sie schreiben

- Lesen Sie die [Stilregeln](style-rules.md) und `spec/conventions.md` im
  Wurzelverzeichnis des Repositorys.
- Prüfen Sie `spec/structure.md` im Wurzelverzeichnis des Repositorys, um zu
  sehen, wo das Thema hineinpasst und welche Nummer es tragen soll.

## Ein neues Thema schreiben

1. Wählen Sie den Teil und die nächste freie Dezimalnummer in diesem Teil. Die
   Nummerierung ist lückenlos, ein neues Thema erhält also in der Regel die
   Nummer nach dem letzten in seinem Teil.
2. Legen Sie `locales/en-gb-oxendict/topics/PP-CC-slug.md` an (mit Nullen
   aufgefülltes, durch Bindestrich getrenntes Präfix, zum Beispiel `02-01-...`),
   ausgehend von der [Themenvorlage](chapter-template.md). Schreiben Sie es in
   Oxford-Rechtschreibung (siehe `spec/oxford-spelling.md`); bearbeiten Sie die
   anderen drei Locales nie direkt.
3. Schreiben Sie nach der Vorlage. Jedes Inhaltsthema braucht alle seine
   Abschnitte: Überblick, Leitprinzipien, Empfehlungen, Abwägungen (mit
   Tabelle), Diskussionsfragen, Sektorperspektive (Start-up, kleines
   Unternehmen, Konzern, Behörde), Beispiele (eines aus dem Unternehmen, eines
   aus der Verwaltung), Business Case, Anti-Muster, ein fünfstufiges
   Reifegradmodell, Diskussionsanstöße, zentrale Erkenntnisse und Quellen.
4. Benennen Sie den Manipulationsweg. Jede Metrikfamilie braucht eine
   ausdrückliche Antwort auf "Wie lässt ein Team diese Zahl gut aussehen, ohne
   das zu verbessern, was sie misst, und welche Leitplanke fängt das auf" (siehe
   Thema 1.2).
5. Definieren Sie Begriffe bei der ersten Verwendung. Fügen Sie
   Wikipedia-Links für zentrale Konzepte bei der ersten Erwähnung hinzu, nur in
   der Prosa.
6. Verweisen Sie auf verwandte Themen mit der Dezimalnummer, zum Beispiel
   "(Thema 2.1)."
7. Tragen Sie das Thema in `spec/structure.md` ein.
8. Wenn die Teileinführung (N.0) ihre Themen auflistet, fügen Sie dort einen
   Aufzählungspunkt hinzu.
9. Führen Sie `python3 tools/localize.py` aus, um das Thema in `en-001`,
   `en-gb` und `en-us` abzuleiten.
10. Führen Sie `just nav` aus, dann `just test`.

## Ein bestehendes Thema bearbeiten

- Behalten Sie Abschnittsreihenfolge und Überschriften bei. Die Tests prüfen,
  dass Inhaltsthemen weiterhin jeden erforderlichen Abschnitt haben.
- Erhalten Sie Inline-Definitionen, Wikipedia-Links, Tabellen und die
  Quellenliste, sofern sich die Bearbeitung nicht gezielt auf sie bezieht.
- Führen Sie keine Geviertstriche oder verbotenen Formulierungen ein. Wenn Sie
  umformulieren, formulieren Sie neu, statt einen Strich einzusetzen.
- Führen Sie danach `python3 tools/localize.py` aus, um `en-001`, `en-gb` und
  `en-us` aus der bearbeiteten Quelle `en-gb-oxendict` neu abzuleiten.

## Umbenennen oder Umnummerieren

- Benennen Sie die Datei in `locales/en-gb-oxendict/` um, aktualisieren Sie ihre
  Überschrift `# N.M Title`, aktualisieren Sie `spec/structure.md` und
  aktualisieren Sie jeden Querverweis, der auf die alte Nummer zeigt.
- Führen Sie `python3 tools/localize.py` aus, um die Datei auch in den anderen
  drei Locales umzubenennen (es leitet alle vier aus denselben relativen Pfaden
  ab).
- Führen Sie `just nav` und `just test` aus. Die Tests melden eine
  Nichtübereinstimmung zwischen H1 und Dateiname, eine Nummerierungslücke, eine
  von der Quelle abgedriftete Locale oder einen kaputten Link.

## Erinnerung zum Ton

Schreiben Sie wie eine erfahrene Kollegin oder ein erfahrener Kollege, die oder
der möchte, dass die Leserin oder der Leser Erfolg hat. Warm, schlicht, direkt
und nützlich. Kurze Sätze. Kein Füllmaterial.
