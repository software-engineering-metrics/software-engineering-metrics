# Über dieses Projekt

Projektdokumentation zum Buch: wie es zusammengesetzt ist, wie man es baut und
prüft und wo die Quelle der Wahrheit liegt. Für das Buch selbst siehe das
[Inhaltsverzeichnis](../index.md).

## Karte des Projekts

- **Das Buch:** in vier Locales unter `locales/` veröffentlicht; siehe
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Diese Locale, `en-gb-oxendict/topics/` (63 Dateien), `en-gb-oxendict/front-matter/`
  und die Anhänge in Teil 9 sind die handgeschriebene Quelle; `en-001`,
  `en-gb` und `en-us` werden aus ihr abgeleitet.
- **Quelle der Wahrheit:** `spec/` im Wurzelverzeichnis des Repositorys (nicht
  auf der Website veröffentlicht). Die Struktur steht in `spec/structure.md`,
  die Schreibregeln in `spec/conventions.md`, die Rechtschreibung in
  `spec/oxford-spelling.md`. Alles andere wird so gebaut, dass es dazu passt.
- **Werkzeuge:** `tools/localize.py` leitet die anderen drei Locales ab;
  `tools/gen_nav.py` erzeugt die Navigation; `tests/validate.py` erzwingt die
  Spezifikation; das `justfile` verbindet sie.
- **Hinweise für Mitwirkende:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  im Wurzelverzeichnis des Repositorys und die Leitfäden im
  [Bereich Mitwirken](../contributing/index.md).

## Bauen und prüfen

Die Validierungssuite läuft auf Python 3 ohne weitere Abhängigkeiten und ohne
Netzwerkzugriff. Aufgaben laufen über [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Dieses Repository enthält den Inhalt und die Spezifikation des Buchs. Es wird
vom separaten Repository
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io)
in eine Website gerendert.

## Wie spezifikationsgetriebene Entwicklung hier funktioniert

Die Spezifikation kommt zuerst. `spec/structure.md` sagt, welche Themen es gibt
und wie sie nummeriert sind. `spec/conventions.md` sagt, wie sie geschrieben
sein müssen. Die Themen werden so verfasst, dass sie beides erfüllen.
`tools/gen_nav.py` leitet die Navigation aus den Themen ab, und
`tests/validate.py` prüft das Ergebnis gegen die Spezifikation zurück. Wenn
Themen und Spezifikation je auseinanderlaufen, schlagen die Tests fehl, und
das ist das Signal, sie wieder in Einklang zu bringen.

So bleibt Drift draußen: Eine Änderung ist erst "fertig", wenn Spezifikation,
Themen, generierte Navigation und Tests alle übereinstimmen.

## Entwurfsentscheidungen, die man kennen sollte

- **Flache, dezimal nummerierte Themen.** Dateien sind
  `locales/<locale>/topics/PP-CC-slug.md`, derselbe Slug in jeder Locale. Der
  Teil ist eine ganze Zahl; das Thema eine Dezimalzahl; N.0 ist die
  Einführung des Teils. Das erhält stabile Kennungen und lässt Werkzeuge ohne
  Verzeichnisbaum sortieren und gruppieren.
- **Eine handgeschriebene Locale, drei abgeleitete.** `en-gb-oxendict` ist
  Oxford-Rechtschreibung, der Hausstil der meisten internationalen
  Normungsgremien (siehe `spec/oxford-spelling.md`); `en-001`, `en-gb` und
  `en-us` werden maschinell daraus abgeleitet, sodass die Übersetzung nie von
  der Quelle abdriftet.
- **Generierte Navigation.** Inhaltsverzeichnis, Inhaltsseite und Sachindex
  werden generiert, sodass sie nie von den Themen abdriften.
- **Offline-Tests ohne Abhängigkeiten.** Die Suite verwendet nur die
  Standardbibliothek, läuft also überall, auch in CI und Pre-Commit-Hooks.
- **Querverweise bleiben Klartext.** Die Prosa verweist mit der Dezimalnummer
  auf Themen ("siehe Thema 2.1"), wie es die Spezifikation verlangt; die
  rendernde Website ist dafür zuständig, diese Verweise in Links zu verwandeln.
- **Keine Geviertstriche, per Regel und per Test.** Eine bewusste Stilwahl,
  erzwungen, damit sie auch beim Wachsen des Buchs gilt.
- **Jede Metrikfamilie benennt ihren eigenen Manipulationsweg.** Das ist die
  eine Regel in der Vorlage, die im Schwesterprojekt
  `software-engineering-guide` keine Entsprechung hat: Es gibt sie, weil das
  ganze Thema dieses Buchs die Messung ist, sodass das Risiko der Messung
  selbst erstklassig sein muss, nicht implizit.

## Weiterführende Links

- [Verfassen](../contributing/authoring.md) : Themen schreiben und bearbeiten.
- [Navigation](../contributing/navigation.md) : wie die generierten Dateien funktionieren.
- [Testen](../contributing/testing.md) : was die Tests prüfen und wie man Fehler behebt.
- [Beispiele](../examples/index.md) : kleine, konkrete Beispiele.
- [Änderungsprotokoll](changelog.md) : Geschichte wichtiger Änderungen.
