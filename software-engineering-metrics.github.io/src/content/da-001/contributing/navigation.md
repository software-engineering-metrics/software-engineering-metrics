# Navigation: sådan virker de genererede filer

Pr. lokalitet genereres fire navigationsartefakter ud fra den lokalitets emner og skrives ikke i hånden (plus `README.md`, som kun genereres én gang for referencelokaliteten, `en-gb-oxendict`):

- `README.md` (indholdsfortegnelsen på repositoriets forside; kun referencelokaliteten)
- `locales/<locale>/index.md` (forsiden af det udgivne site)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (emneindekset, med links)

De produceres af [`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py). Redigér dem ikke i hånden, fordi næste generering overskriver din ændring.

## Hvornår du skal generere igen

Kør `just nav` (eller `python3 tools/gen_nav.py`), hver gang du:

- tilføjer, fjerner, omdøber eller omnummererer et emne, eller
- ændrer et emnes overskrift `# N.M Title` (indholdsfortegnelsen bruger den).

Kør først `python3 tools/localize.py`, hvis du har ændret noget under `locales/en-gb-oxendict/`, så de tre andre lokaliteters emner (og deres genererede titler) er opdaterede, før `gen_nav.py` læser dem; se [`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Sådan virker det

For hver lokalitet læser `gen_nav.py` hver fil `locales/<locale>/topics/*.md`, sorterer efter decimaltal, grupperer efter del og:

- bygger indholdsfortegnelsen del for del ud fra hvert emnes H1-titel,
- skriver den ind i `locales/<locale>/index.md` og `locales/<locale>/front-matter/table-of-contents.md` (og, kun for referencelokaliteten, `README.md`),
- gennemsøger de substantielle emner (del 1 til og med 8) efter en fast liste af nøglebegreber og skriver emneindekset til `locales/<locale>/topics/09-07-index.md`.

Den fælles standardtekst (introduktionsafsnittet, "Sådan læser du denne bog", "Tværgående temaer" og deltitlerne) lokaliseres på samme måde som emneteksten, via lokaliseringsfunktionerne i `tools/localize.py`, så de genererede sider læses naturligt i hver lokalitet.

Deltitlerne findes i ordbogen `PART_TITLES` øverst i scriptet. Generatoren bruger deloverskrifter i kolonstil ("Part 2: Delivery and Flow Metrics"), aldrig tankestreger.

## Hvad den ikke rører

Specifikationen i repositoriets rod (`spec/index.md`, `spec/structure.md` og dens ledsagere) er den håndskrevne autoritative kilde. Generatoren skriver den ikke, og den er ikke en del af det udgivne site. Hvis du ændrer strukturen, så opdatér selv `spec/structure.md`, og kør derefter `just nav` for de afledte filer og `just test` for at bekræfte, at alt stemmer.
