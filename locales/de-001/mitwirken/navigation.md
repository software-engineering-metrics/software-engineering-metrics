# Navigation: wie die generierten Dateien funktionieren

Pro Locale werden vier Navigationsartefakte aus den Themen dieser Locale
generiert, nicht von Hand geschrieben (dazu `README.md`, das einmal für die
Referenz-Locale `en-gb-oxendict` generiert wird):

- `README.md` (das Inhaltsverzeichnis auf der Startseite des Repositorys; nur Referenz-Locale)
- `locales/<locale>/index.md` (die Startseite der veröffentlichten Website)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (der Sachindex, mit Links)

Sie werden von
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py)
erzeugt. Bearbeiten Sie sie nicht von Hand, denn die nächste Generierung
überschreibt Ihre Änderung.

## Wann man neu generiert

Führen Sie `just nav` (oder `python3 tools/gen_nav.py`) immer dann aus, wenn Sie:

- ein Thema hinzufügen, entfernen, umbenennen oder umnummerieren, oder
- die Überschrift `# N.M Title` eines Themas ändern (das Inhaltsverzeichnis
  verwendet sie).

Führen Sie zuerst `python3 tools/localize.py` aus, wenn Sie etwas unter
`locales/en-gb-oxendict/` geändert haben, damit die Themen der anderen drei
Locales (und ihre generierten Titel) aktuell sind, bevor `gen_nav.py` sie liest;
siehe [`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Wie es funktioniert

Für jede Locale liest `gen_nav.py` jede Datei `locales/<locale>/topics/*.md`,
sortiert nach Dezimalnummer, gruppiert nach Teil und:

- baut das teilweise Inhaltsverzeichnis aus dem H1-Titel jedes Themas,
- schreibt es nach `locales/<locale>/index.md` und
  `locales/<locale>/front-matter/table-of-contents.md` (und, nur für die
  Referenz-Locale, `README.md`),
- durchsucht die inhaltlichen Themen (Teile 1 bis 8) nach einer festen Liste
  von Schlüsselbegriffen und schreibt den Sachindex nach
  `locales/<locale>/topics/09-07-index.md`.

Der gemeinsame Standardtext (der Einführungsabsatz, "Wie man dieses Buch liest",
"Übergreifende Themen" und die Teiltitel) wird auf dieselbe Weise lokalisiert
wie die Themenprosa, über die Locale-Funktionen von `tools/localize.py`, sodass
die generierten Seiten in jeder Locale natürlich klingen.

Teiltitel stehen im Dictionary `PART_TITLES` am Anfang des Skripts. Der
Generator verwendet Teilüberschriften im Doppelpunkt-Stil ("Part 2: Delivery and
Flow Metrics"), niemals Geviertstriche.

Bei handübersetzten Locales werden Startseite und Inhaltsverzeichnisseite von
Hand geschrieben (die übersetzten Überschriften und die N.0-Einführungszeile
jedes Teils), und `tools/gen_translated_nav.py` aktualisiert die Themenlisten
aus den H1-Titeln der Themen dieser Locale.

## Was es nicht anfasst

Die Spezifikation im Wurzelverzeichnis des Repositorys (`spec/index.md`,
`spec/structure.md` und ihre Begleiter) ist die handgeschriebene Quelle der
Wahrheit. Der Generator schreibt sie nicht, und sie ist nicht Teil der
veröffentlichten Website. Wenn Sie die Struktur ändern, aktualisieren Sie
`spec/structure.md` selbst und führen dann `just nav` für die abgeleiteten
Dateien und `just test` aus, um zu bestätigen, dass alles zusammenpasst.
