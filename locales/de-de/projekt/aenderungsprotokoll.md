# Änderungsprotokoll

Wichtige Änderungen am Buch und seinen Werkzeugen. Die neuesten Einträge stehen
oben. Daten verwenden ISO 8601 (JJJJ-MM-TT).

## [Unreleased]

### Changed

- Niederländisch (`nl-nl`): die verbliebenen englischen Titel und Slugs der Themen 9.0, 9.3 und 9.4
  übersetzt (`bijlagen`, `controlelijsten`, `sjablonen`).
- Walisisch (`cy-001`, `cy-gb`): Terminologie an TermCymru angeglichen: `risg` (Risiko, statt
  `perygl`, mit Genusübereinstimmung), `cyfnewidiad` (Abwägung), `dangosydd rhagfynegi` und
  `dangosydd ôl-fynegi` (vorlaufender und nachlaufender Indikator, statt `hwyrfrydig`), `cynhwysedd`
  (Kapazität), `dosraniad` (Verteilung), `cydberthynas` (Korrelation), `allbwn` für Ausgabe in
  Thema 1.3 und `cyfradd gadael staff` (Fluktuation). Vier Themen-Slugs wurden passend umbenannt.
- Website: `@lilydesignsystem/svelte-picker-bar` auf 0.2.0 aktualisiert, was der Kopfleiste
  einen Such-Picker hinzufügt; er sendet an die bestehende Websitesuche `/?<query>`.
- `scripts/generate-sitemap.mjs` hinzugefügt, das am Ende von `pnpm build` läuft und
  `sitemap.xml` aus den vorgerenderten Seiten schreibt (nur kanonische Locale-URLs,
  keine Duplikate durch Zwei-Buchstaben-Aliase), sodass die Zeile `Sitemap:` in
  `robots.txt` aufgelöst wird.
- `AGENTS.md` ist jetzt ein kurzer Index; Details wanderten nach `AGENTS/layout.md`, `style.md`,
  `locales.md` und `workflow.md`.
- Dokumentationsdurchgang: `AGENTS.md`, `index.md`, den generierten README-Locale-Text,
  `spec/index.md`, `spec/locales.md` sowie `AGENTS.md` und `README.md` der Website auf
  27 Locales, Verzeichnisnamen der Abschnitte je Locale und die neuen Werkzeuge aktualisiert;
  `CLAUDE.md` hinzugefügt (ein Verweis auf `AGENTS.md`); die veralteten `docs/`-Pfade in beiden
  Agenten-Skills korrigiert und `skills/` zur kanonischen Kopie von `.claude/skills/`
  gemacht (von den Tests geprüft).
- `llms.txt` und `llms.json` (ein KI-Agenten-Index aller ausgelieferten Locales
  und Themen) zu `static/` der Website hinzugefügt, von `tools/gen_llms.py`
  (`just llms`) erzeugt und von den Tests geprüft.
- Startseite der Website: Die Kachelliste "neun Teile" ist jetzt eine verschachtelte Liste "Inhalt" aller
  Teile und Themen, und der Abschnitt "Goodharts Gesetz, überall" wurde entfernt.
- In der Prosa des Buchs wurde in jeder Locale "chapter" durch "topic" ersetzt
  (zum Beispiel "Thema 2.1", "Themen in diesem Teil"), unter Verwendung des
  jeweiligen Worts der Sprache für Thema (`tema`, `sujet`, `Thema`, `тема`, `主題`
  und so weiter), ebenso in der Spezifikation, im von den Werkzeugen generierten Text und
  in den Oberflächentexten der Website. Dateinamen, URLs und die Abschnittsschlüssel sind unverändert.
- Jeden Abschnittsverzeichnisnamen unter `locales/` übersetzt: `chapters/` heißt
  jetzt `topics/` (und seine Übersetzung in jeder anderen Locale, z. B. `temas/`,
  `sujets/`, `themen/`), und `examples/` von `es-001` ist `ejemplos/`. Die Namen
  stehen in `spec/section-names.json`; die Werkzeuge, Tests und die Inhaltssynchronisierung der Website
  lesen sie von dort, und die URLs der Website sind unverändert.

### Changed

- Die walisischen Locales (`cy-001`, `cy-gb`, identisch gehalten) anhand der Terminologieliste
  TermCymru der walisischen Regierung überarbeitet: `llesiant` für Wohlbefinden,
  `cynhyrchiant` für Produktivität, `gwendid`/`gwendidau` für Schwachstelle,
  `llywodraethiant` für Governance, `cydberthynas` für Korrelation,
  `ôl-groniad` für Backlog (zuvor auf Englisch belassen), `cost a budd` für
  Kosten-Nutzen und `deallusrwydd artiffisial (AI)` bei der ersten Erwähnung von KI
  in jedem Thema.

### Added

- Deutsch (`de-001`) als 26. vollständig übersetzte Locale hinzugefügt: alle 63
  Themen mit passenden `.locale-peer-id`-Sidecars, inhaltsgleich mit
  `de-de`. An die Website angebunden und unter `/de-001/` (Alias `/de/`) ausgeliefert.
- Portugiesisch (`pt-001`) als 25. vollständig übersetzte Locale hinzugefügt: alle 63
  Themen mit passenden `.locale-peer-id`-Sidecars, inhaltsgleich mit
  `pt-pt`. An die Website angebunden und unter `/pt-001/` (Alias `/pt/`) ausgeliefert.
- Eine vollständige, von Grund auf von Hand erstellte Übersetzung aller 63 Themen ins
  Urdu (`ur-001`, rechts-nach-links) abgeschlossen, die 24. vollständig übersetzte Locale, mit
  passenden `.locale-peer-id`-Sidecars. Jedes Thema wurde direkt
  aus der englischen Quelle übersetzt, der Index (Thema 9.7) bildet jeden internen Link
  auf seinen Urdu-Dateinamen ab, und das Abschnittsverzeichnis heißt `موضوعات`. An
  die Website angebunden und unter `/ur-001/` (Alias `/ur/`) ausgeliefert.
- Eine vollständige, von Grund auf von Hand erstellte Übersetzung aller 63 Themen ins
  Indonesische (`id-001`) abgeschlossen, mit passenden `.locale-peer-id`-Sidecars. Es gab
  keine frühere indonesische Locale als Grundlage, daher wurde jedes Thema
  direkt aus der englischen Quelle übersetzt, und der Index (Thema 9.7) bildet jeden
  internen Link auf seinen indonesischen Dateinamen ab. An die Website angebunden und unter
  `/id-001/` (Alias `/id/`) ausgeliefert.
- Russisch (`ru-001`) und Chinesisch (`zh-001`) als 21. und 22.
  vollständig übersetzte Locale hinzugefügt: je alle 63 Themen, mit passenden
  `.locale-peer-id`-Sidecars, inhaltsgleich mit `ru-ru` und `zh-cn`.
  An die Website angebunden und unter `/ru-001/` und `/zh-001/` (Aliase
  `/ru/` und `/zh/`) ausgeliefert.
- Französisch (`fr-001`) als 20. vollständig übersetzte Locale hinzugefügt: alle 63
  Themen mit passenden `.locale-peer-id`-Sidecars, inhaltsgleich mit
  `fr-fr`. An die Website angebunden und unter `/fr-001/` (Alias `/fr/`) ausgeliefert.
- Bengalisch (`bn-001`) als 19. vollständig übersetzte Locale hinzugefügt: alle 63
  Themen mit passenden `.locale-peer-id`-Sidecars, inhaltsgleich mit
  `bn-bd`. An die Website angebunden und unter `/bn-001/` (Alias `/bn/`) ausgeliefert.
- Arabisch (`ar-001`) als 18. vollständig übersetzte Locale hinzugefügt: alle 63
  Themen mit passenden `.locale-peer-id`-Sidecars, inhaltsgleich mit
  `ar-eg`. An die Website angebunden und unter `/ar-001/` (Alias `/ar/`) ausgeliefert.
- Walisisch, Großbritannien (`cy-gb`) als 17. vollständig übersetzte
  Locale hinzugefügt: alle 63 Themen mit passenden `.locale-peer-id`-Sidecars, inhaltsgleich
  mit `cy-001` (dieselbe Beziehung wie `hi-id` zu `hi-001`).
  In `SERVED_LOCALE_CODES` der Website eingetragen und unter `/cy-gb/` ausgeliefert.
- Eine vollständige, von Grund auf von Hand erstellte Übersetzung aller 63 Themen ins
  Niederländische, Niederlande (`nl-nl`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars und
  bestandenem `just test`. Es gab keine frühere niederländische Locale als Grundlage, daher wurde
  jedes Thema direkt aus der englischen Quelle übersetzt. Der Index
  (Thema 9.7) bildet jeden internen Themenlink auf seinen niederländischen
  Dateinamen ab, nach dem Vorgehen bei `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr` und `sv-se`. Noch nicht an
  die Website angebunden.
- Eine vollständige, von Grund auf von Hand erstellte Übersetzung aller 63 Themen ins
  Schwedische, Schweden (`sv-se`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars und
  bestandenem `just test`. Es gab keine frühere schwedische Locale als Grundlage, daher wurde
  jedes Thema direkt aus der englischen Quelle übersetzt. Der Index
  (Thema 9.7) bildet jeden internen Themenlink auf seinen schwedischen
  Dateinamen ab, nach dem Vorgehen bei `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru` und `fr-fr`. Noch nicht an die
  Website angebunden.
- Eine vollständige, von Grund auf von Hand erstellte Übersetzung aller 63 Themen ins
  Französische, Frankreich (`fr-fr`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars und
  bestandenem `just test`. Es gab keine frühere französische Locale als Grundlage, daher wurde
  jedes Thema direkt aus der englischen Quelle übersetzt. Der Index
  (Thema 9.7) bildet jeden internen Themenlink auf seinen französischen
  Dateinamen ab, nach dem Vorgehen bei `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp` und `ru-ru`. Noch nicht an die Website angebunden.
- Eine vollständige, von Grund auf von Hand erstellte Übersetzung aller 63 Themen ins
  Russische, Russland (`ru-ru`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars und
  bestandenem `just test`. Es gab keine frühere russische Locale als Grundlage, daher wurde
  jedes Thema direkt aus der englischen Quelle übersetzt. Der Index
  (Thema 9.7) bildet jeden internen Themenlink auf seinen russischen
  Dateinamen ab, nach dem Vorgehen bei `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt` und `ja-jp`. Noch nicht an die Website angebunden.
- Eine vollständige, von Grund auf von Hand erstellte Übersetzung aller 63 Themen ins
  Japanische, Japan (`ja-jp`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars und
  bestandenem `just test`. Es gab keine frühere japanische Locale als Grundlage, daher wurde
  jedes Thema direkt aus der englischen Quelle übersetzt. Der Index
  (Thema 9.7) bildet jeden internen Themenlink auf seinen japanischen
  Dateinamen ab, nach dem Vorgehen bei `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es` und `pt-pt`. Noch nicht an die Website angebunden.
- Eine vollständige, von Grund auf von Hand erstellte Übersetzung aller 63 Themen ins
  Portugiesische, Portugal (`pt-pt`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars
  und bestandenem `just test`. Es gab keine frühere portugiesische Locale als
  Grundlage, daher wurde jedes Thema direkt aus der englischen Quelle übersetzt.
  Der Index (Thema 9.7) bildet jeden internen Themenlink auf seinen
  portugiesischen Dateinamen ab, nach dem Vorgehen bei `ar-eg`, `bn-bd`,
  `ko-kr` und `es-es`. Noch nicht an die Website angebunden.
- Spanisch, Spanien (`es-es`) als vollständig übersetzte Locale hinzugefügt, alle 63
  Themen, ausgehend von einer Kopie der bestehenden spanischen Übersetzung (`es-001`)
  (die sich bei der Prüfung als bereits grammatisch neutral erwies,
  mit überwiegend schon auf Spanien ausgerichtetem Vokabular), und anschließend mit einem
  gezielten Terminologiedurchgang für die verbleibenden Minderheitenverwendungen, vor allem
  "incidente" zu "incidencia" für den Incident-Metrik-Bereich dieses Buchs,
  mit entsprechenden Genuskorrekturen durchgängig. Noch nicht an die
  Website angebunden.
- Eine vollständige Handübersetzung aller 63 Themen ins Koreanische, Korea
  (`ko-kr`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars und bestandenem
  `just test`. Der Index (Thema 9.7) bildet jeden internen Themenlink
  auf seinen koreanischen Dateinamen ab, nach dem Vorgehen bei `ar-eg` und
  `bn-bd`. Noch nicht an die Website angebunden.
- Hindi, Indien (`hi-id`) als vollständig übersetzte Locale hinzugefügt, alle 63
  Themen, indem die bestehende Hindi-Übersetzung (`hi-001`) unverändert
  unter dem länderbezogenen Locale-Code kopiert wurde, da Standard-Hindi keine
  eigene Indien-spezifische Variante hat, die separat von Hand zu übersetzen wäre. Noch nicht an
  die Website angebunden.
- Eine vollständige Handübersetzung aller 63 Themen ins Bengalische,
  Bangladesch (`bn-bd`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars und
  bestandenem `just test`. Noch nicht an die Website angebunden.
- Eine vollständige Handübersetzung aller 63 Themen ins Arabische, Ägypten
  (`ar-eg`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars und bestandenem
  `just test`. Noch nicht an die Website angebunden.
- Eine vollständige Handübersetzung aller 63 Themen ins Deutsche, Deutschland
  (`de-de`), abgeschlossen, mit passenden `.locale-peer-id`-Sidecars und bestandenem
  `just test`. Noch nicht an die Website angebunden.
- Vollständige Handübersetzungen aller 63 Themen in drei Locales abgeschlossen:
  Walisisch (`cy-001`), Chinesisch (`zh-cn`) und Hindi (`hi-001`), jeweils mit
  passenden `.locale-peer-id`-Sidecars und bestandenem `just test`.
- Zwei weitere geplante übersetzte Locales, Walisisch - Großbritannien
  (`cy-gb`) und Chinesisch (`zh-001`), zu
  `spec/locales-for-global-sharing-with-svelte/locales.tsv` und
  `spec/locales.md` hinzugefügt (jetzt dreizehn geplante Locales, zuvor elf), und
  das bislang unentschiedene Endonym von `zh-cn` auf 中文 festgelegt. Die `LOCALE_LABELS`
  der Website erhielten passende Einträge (`cy-gb`: "Cymraeg (Prydain
  Fawr)", `zh-001`: "中文", `zh-cn`: "中文 (中国)"). Noch reine Infrastruktur:
  keine dieser Locales hat ein Verzeichnis `locales/<code>/` oder übersetzte
  Inhalte.
- Das Buch in vier Locales unter `locales/` veröffentlicht: `en-gb-oxendict`
  (Britisches Englisch, Oxford-Rechtschreibung; die handgeschriebene Quelle), `en-001`
  (internationales Englisch), `en-gb` (allgemeines britisches Englisch) und `en-us`
  (amerikanisches Englisch). `en-001`, `en-gb` und `en-us` werden vom neuen `tools/localize.py`
  maschinell aus `en-gb-oxendict` abgeleitet; siehe
  `spec/locales.md`. `docs/` existiert nicht mehr; jeder Verweis darauf in
  `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py` und
  `tools/stats.py` zeigt jetzt auf `locales/<locale>/`.
- Zwei Claude-Code-Skills hinzugefügt, `software-engineering-metrics-skill` (für Leserinnen
  und Leser, die die Hinweise des Buchs auf ihr eigenes Team anwenden) und
  `software-engineering-metrics-maintainer-skill` (für Mitwirkende, die Themen
  hinzufügen oder bearbeiten), unter `skills/` und gespiegelt nach `.claude/skills/`.
- Die Quelle der veröffentlichten Website in dieses Repository verschoben, als
  `software-engineering-metrics.github.io/`, zuvor ein eigenes Repository.
  Sie liest `locales/` jetzt direkt aus dem Wurzelverzeichnis des Repositorys statt aus einem
  danebenliegenden Checkout. Der `.github/workflows/deploy.yml` im Wurzelverzeichnis prüft, dass die Website
  bei jedem Push auf `main` weiterhin baut, und sendet dann ein `repository_dispatch` an das
  Repository `software-engineering-metrics.github.io` (als dünne
  Deploy-Hülle beibehalten, da GitHub Pages diese nackte Domain nur aus einem
  Repository mit genau diesem Namen ausliefert), das dieses Monorepo auscheckt, die
  Website baut und deployt.
- Die Infrastruktur für übersetzte (nicht nur rechtschreibabgeleitete)
  Locales hinzugefügt, nach der neuen Unterspezifikation `spec/locales-for-global-sharing-with-svelte/`:
  `tools/gen_locale_peer_ids.py` weist jeder Inhaltsdatei einen
  `.locale-peer-id`-Sidecar zu, identisch über alle Locales, den eine künftige übersetzte Locale
  (mit eigenen Slugs in der Originalschrift) nutzen kann, um
  "diese Seite, in Locale X" aufzulösen, statt nach Slug zu suchen; `tests/validate.py`
  prüft, dass jeder Sidecar existiert und übereinstimmt. `spec/locales.md` dokumentiert zehn
  geplante übersetzte Locales (Arabisch, Bengalisch, Walisisch, Spanisch, Französisch, Hindi,
  Indonesisch, Portugiesisch, Russisch, Urdu und Chinesisch - China); keine hat
  bisher ein Verzeichnis `locales/<code>/`, da keine bisher übersetzt ist. Auf der Website
  erhielt `scripts/locales.mjs` `LOCALE_LABELS`/`localeLabel()` (einen Anzeigenamen für
  jede geplante Locale, vor dem Routing bereit) und
  `sortedLocaleEntries()` (die Sortierreihenfolge, die eine künftige Locale-Liste nutzen sollte),
  und `src/lib/i18n.js` extrahierte die UI-Chrome-Texte (Navigation, Seitenleiste, Blätterfunktion,
  Picker, Fußzeile, Skip-Link), die jede `.svelte`-Komponente zuvor
  fest auf Englisch codiert hatte, über `ui(locale)` durchgereicht, mit Rückfall auf
  Englisch für jede Locale ohne eigene Übersetzungen.
- Das handgebaute reine Locale-Kopfsteuerelement der Website durch
  `@lilydesignsystem/svelte-picker-bar` des [Lily Design System](https://lilydesignsystem.com/)
  ersetzt: ein echter Theme-Picker (hell/dunkel, über neue
  `static/assets/themes/{light,dark}.css`), der echte Locale-Picker
  (an das URL-basierte Routing dieser Website angebunden statt an sein Standardverhalten,
  nur lang/dir zu setzen), ein Textgrößen-Picker (Lilys siebenstufige Skala) und
  ein Teilen-Picker (E-Mail, Mastodon, Link kopieren). `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker`
  auf `^0.1.2` und `@lilydesignsystem/svelte-headless` auf `^0.2.0` über
  `pnpm-workspace.yaml`-Overrides festgelegt, um einen echten veröffentlichten Fehler in den
  Abhängigkeitsbereichen von `svelte-picker-bar` 0.1.0 selbst zu umgehen (siehe das `CHANGELOG.md`
  jedes Pickers, "0.1.2", und das `AGENTS.md` dieser Website).
- Die Statistikzeile der Startseite (Teile/Themen/"Free Always") und ihren Abschnitt
  "How to read it" entfernt und das Kartenraster "Browse the nine parts" durch
  eine einfache Aufzählung ersetzt.

### Changed

- `scripts/generate-sitemap.mjs` hinzugefügt, das am Ende von `pnpm build` läuft und
  `sitemap.xml` aus den vorgerenderten Seiten schreibt (nur kanonische Locale-URLs,
  keine Duplikate durch Zwei-Buchstaben-Aliase), sodass die Zeile `Sitemap:` in
  `robots.txt` aufgelöst wird.
- Thema 2.8, Lean-Wertstrommetriken (Durchlaufzeit, Bearbeitungszeit,
  Zykluszeit, Prozentsatz vollständig und korrekt und Taktzeit aus der klassischen
  Lean-Wertstromanalyse, dazu die Berechnung des gerollten Durchsatzertrags),
  hinzugefügt, nach der Warteschlangentheorie eingeordnet. Pull-Request- und Code-Review-Metriken
  wanderten von 2.8 nach 2.9, und das Thema DORA-Metriken von 2.9 nach 2.10.
  Jeder betroffene Querverweis im ganzen Buch wurde aktualisiert.
- Teil 2 von "Delivery and Flow Metrics" in "Flow Metrics" umbenannt und
  um das Flow Framework von Mik Kersten herum neu organisiert. Vier neue
  Themen hinzugefügt: 2.1 Das Flow Framework, 2.2 Flow-Items (Features, Defekte,
  Risiken, Schulden), 2.3 Flow-Geschwindigkeit und Flow-Verteilung und 2.4 Flow-Zeit
  und Flow-Last. Die vier einzelnen DORA-Metrik-Themen
  (Deployment-Frequenz, Durchlaufzeit, Änderungsfehlerrate, Wiederherstellungszeit)
  zu einem einzigen Referenzthema zusammengeführt, 2.9 Das DORA-Metrik-Framework, ans
  Ende des Teils verschoben. Flow-Effizienz und Work in Process
  auf 2.5 umnummeriert und das Thema Warteschlangentheorie (zuvor
  2.9) in 2.7 Warteschlangentheorie umbenannt und umnummeriert. Durchlaufzeit (2.6) und Pull-Request- und Code-Review-Metriken
  (2.8) behalten ihre Nummern. Jeder Querverweis im ganzen Buch, das Glossar,
  die Formelreferenz, die Reifegrad-Selbstbewertung und der Vorspann wurden
  entsprechend aktualisiert.

### Added

- Erstveröffentlichung: 45 inhaltliche Themen in 8 Teilen, dazu Vorspann
  und ein Anhang mit 7 Themen (Teil 9), die die Frameworks DORA und SPACE,
  Code- und Qualitätsmetriken, Produkt- und Geschäftsmetriken, Zuverlässigkeits- und
  Sicherheitsmetriken und die Wirkung generativer KI auf Engineering-Metriken abdecken.
- Repository-Infrastruktur, gespiegelt aus dem Schwesterprojekt
  `software-engineering-guide`: ein spezifikationsgetriebenes `spec/`
  (Index, Struktur, Konventionen, Oxford-Rechtschreibung, Roadmap), eine Validierungssuite
  in `tests/validate.py`, ein Navigationsgenerator in `tools/gen_nav.py`,
  ein `justfile`, `AGENTS.md` mit Leitfäden für Mitwirkende unter `docs/contributing/`,
  `CONTRIBUTING.md` und dieses Änderungsprotokoll.
- `spec/structure.md`, das kanonische Themenmanifest, gegen das die Tests die
  Dateien prüfen.
- Zwei ausgearbeitete Beispiele in `docs/examples/`: eine ausgefüllte Metrik-Charta und eine
  Dashboard-Spezifikation.

## Geschichte

Das Buch wurde von der Spezifikation nach außen gebaut: Die Struktur aus neun Teilen
wurde zuerst in `spec/structure.md` festgelegt, dann wurde jedes Thema
nach der gemeinsamen Vorlage in `docs/contributing/chapter-template.md` verfasst, wobei
`tests/validate.py` durchgehend Struktur und Hausstil erzwang.

## Konventionen für diese Datei

- Gruppieren Sie Änderungen unter **Added**, **Changed**, **Fixed**, **Removed** oder
  **Deprecated**.
- Halten Sie Einträge kurz und konkret. Möglichst eine Zeile je Eintrag.
- Verwenden Sie auch hier keine Geviertstriche; die Tests prüfen auch diese Datei.
