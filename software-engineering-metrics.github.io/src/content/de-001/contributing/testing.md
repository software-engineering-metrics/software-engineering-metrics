# Testen: die Validierungssuite

## Ausführen

```sh
just test
# or
python3 tests/validate.py
```

Sie läuft von überall und braucht nur Python 3 (keine Pakete von Dritten, kein
Netzwerk). Sie gibt pro Prüfung eine Zeile aus und beendet sich mit einem Wert
ungleich null, wenn eine Prüfung fehlschlägt, sodass sie in CI und als
Pre-Commit-Hook funktioniert.

## Was sie prüft

- **Die erwartete Themenzahl** (die Konstante am Anfang des Skripts).
- **Lückenlose Nummerierung** in jedem Teil, beginnend bei N.0.
- **H1 passt zur Dezimalnummer im Dateinamen** bei jedem Thema.
- **H1-Titel stimmen mit `spec/structure.md` überein**, Zeichen für Zeichen,
  nicht nur die führende Dezimalzahl.
- **Erforderliche Abschnitte** sind in jedem Inhaltsthema vorhanden (Teile 1 bis
  8, Thema N.1 und höher), **in genau der Reihenfolge der Vorlage**.
- **Eine Mindestwortzahl** für jedes Inhaltsthema (1.500 Wörter), mit einer
  Ausnahmeliste im Skript für beabsichtigte Ausnahmen.
- **Keine Geviertstriche** in irgendeiner Markdown-Datei.
- **Halbgeviertstriche nur zwischen Ziffern**, "2.1–2.8" besteht also und alles
  andere schlägt fehl.
- **Keine verbotenen Formulierungen** ("not only", "but also", "load-bearing").
- **Alle internen `.md`-Links lösen auf.**
- **Querverweise in der Prosa zeigen auf echte Themen**: Ein Verweis auf eine
  Themennummer ohne passende Datei auf der Platte schlägt fehl, mit demselben
  Verweismuster, das die automatische Themenverlinkung der veröffentlichten
  Website verwendet.
- **Wikipedia-Links sind wohlgeformt** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` stimmt mit den Dateien auf der Platte überein**, in
  beide Richtungen.
- **README, Startseite und Inhaltsseite verlinken jedes Thema.**

## Wenn eine Prüfung fehlschlägt

Die fehlgeschlagene Zeile nennt Datei und Problem. Häufige Lösungen:

- Geviertstrich gefunden: Formulieren Sie den Satz um, um das "—" zu entfernen.
  Löschen Sie es nicht einfach.
- Fehlender Abschnitt: Fügen Sie den fehlenden `##`-Abschnitt aus der
  Themenvorlage hinzu.
- Strukturabweichung: Sie haben ein Thema hinzugefügt oder umbenannt, ohne
  `spec/structure.md` zu aktualisieren, oder umgekehrt. Bringen Sie beides
  wieder in Einklang.
- Kaputter Link: Korrigieren Sie den Pfad oder aktualisieren Sie ihn nach einer
  Umbenennung.
- Nummerierungslücke: Nummerieren Sie um, sodass der Teil ab N.0 lückenlos ist.

## Jenseits der Validierungssuite

- `just spell` führt [codespell](https://github.com/codespell-project/codespell)
  über das Repository aus. Die Konfiguration, einschließlich der Ignorierliste
  für Fehlalarme, ist der Abschnitt `[tool.codespell]` in `pyproject.toml`.
- `just stats` gibt einen Markdown-Bericht aus (Wortzahlen je Thema, dünne
  Themen, Wikipedia-Links, Quelleneinträge) aus `tools/stats.py`.

## Kontinuierliche Integration

- `.github/workflows/test.yml` läuft bei jedem Pull Request und bei Pushes auf
  Nicht-Main-Branches: die Validierungssuite und codespell. Dieses Repository
  baut oder deployt keine Website; das Rendern geschieht im separaten
  Repository `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` prüft externe Links wöchentlich mit
  [lychee](https://github.com/lycheeverse/lychee) (Ignoriermuster in
  `.lycheeignore`) und hält die Ergebnisse in einem einzigen Issue "Link checker
  report" fest. Externe Links bleiben absichtlich aus dem PR-Pfad heraus.

## Von den Tests nicht abgedeckt

Die Suite prüft Struktur und Stil, nicht Wahrheit. Sie kann nicht feststellen,
ob eine Quelle echt oder die Prosa zutreffend ist. Prüfen Sie Zitate und Fakten
von Hand oder mit einem Recherchedurchgang. Auch die Existenz eines
Wikipedia-Links (im Unterschied zu seiner Form) erfordert eine Netzwerkprüfung,
die die Suite bewusst auslässt, damit sie offline laufen kann.
