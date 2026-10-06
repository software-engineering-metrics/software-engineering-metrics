# Stilregeln (gemeinsam, durchsetzbar)

Der Hausstil an einem Ort. Mit "(test)" markierte Punkte werden von
`tests/validate.py` erzwungen; ein Verstoß lässt den Build fehlschlagen. Die
vollständige Fassung ist `spec/conventions.md` im Wurzelverzeichnis des
Repositorys.

## Harte Regeln

- **Keine Geviertstriche.** Verwenden Sie niemals "—" (U+2014). Verwenden Sie
  ein Komma, einen Doppelpunkt, Klammern oder zwei Sätze. Halbgeviertstriche "–"
  sind nur in Zahlenbereichen wie `1–9` oder `2.1–2.8` erlaubt. (test)
- **Keine Standardfloskeln.** Verwenden Sie nicht "not only ... but also", "but
  also" oder "load-bearing". Vermeiden Sie "It's important to note", "In today's
  fast-paced world", "It's crucial to consider", "It appears that", "One could
  argue" und die Formel "it's not just X, it's Y". (test, für die ersten drei)
- **Begriffe bei der ersten Verwendung definieren.** Lösen Sie Akronyme auf und
  definieren Sie Fachjargon beim ersten Mal, wenn ein Thema sie verwendet, zum
  Beispiel "mean time to recovery (MTTR)."
- **Zentrale Konzepte mit Wikipedia verlinken** bei der ersten Erwähnung, einmal
  pro Thema, nur in der Prosa. Form:
  `[term](https://en.wikipedia.org/wiki/Article_Title)`. Nie in Überschriften,
  Tabellen, Code oder im Quellenabschnitt. (die Linkform wird getestet)
- **Nur echte Quellen.** Autorin oder Autor und Titel echter Werke. Keine
  erfundenen Titel, Autorinnen und Autoren oder URLs.
- **Den Manipulationsweg benennen.** Ein Metrikfamilien-Thema nennt, wie die
  Metrik manipuliert wird und welche Leitplanke das auffängt (Thema 1.2).

## Stimme

- Warm, direkt, ermutigend. Sprechen Sie die Leserin oder den Leser direkt an.
  Kurze Sätze, einfache Wörter. Mit der Kernaussage beginnen.
- Meinungsstark und praktisch. Herstellerneutral. Produkte nur als sachliche
  Beispiele nennen.

## Struktur (test)

- Inhaltsthemen verwenden die genaue Abschnittsreihenfolge aus
  [`chapter-template.md`](chapter-template.md).
- Die erste Überschrift ist `# N.M Title` (punktierte Themennummer) und passt
  zum mit Nullen aufgefüllten Präfix `PP-CC` der Datei.
- Die Nummerierung innerhalb jedes Teils ist lückenlos und beginnt bei N.0.

## Nach dem Bearbeiten

- Wenn Sie die Menge der Themen geändert haben, aktualisieren Sie
  `spec/structure.md` und führen Sie `just nav` aus.
- Führen Sie immer `just test` aus.
