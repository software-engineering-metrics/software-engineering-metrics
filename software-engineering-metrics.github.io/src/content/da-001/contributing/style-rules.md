# Stilregler (delte, håndhævelige)

Husstilen samlet ét sted. Punkter markeret "(test)" håndhæves af `tests/validate.py`; en overtrædelse får bygningen til at fejle. Den fulde fortællende version er `spec/conventions.md` i repositoriets rod.

## Hårde regler

- **Ingen tankestreger (em-dashes).** Brug aldrig tegnet U+2014. Brug komma, kolon, parentes eller to sætninger. Tankestreger af typen en-dash (U+2013) er kun tilladt i talintervaller som `1–9` eller `2.1–2.8`. (test)
- **Ingen stereotype vendinger.** Brug ikke "not only ... but also", "but also" eller "load-bearing". Undgå "It's important to note", "In today's fast-paced world", "It's crucial to consider", "It appears that", "One could argue" og formlen "it's not just X, it's Y". (test, for de første tre)
- **Definér begreber ved første brug.** Udvid akronymer og definér fagsprog første gang, hvert emne bruger dem, for eksempel "mean time to recovery (MTTR)."
- **Link nøglebegreber til Wikipedia** ved første omtale, én gang pr. emne, kun i brødtekst. Form: `[term](https://en.wikipedia.org/wiki/Article_Title)`. Aldrig i overskrifter, tabeller, kode eller kildeafsnittet. (linkformen er en test)
- **Kun rigtige kilder.** Forfatter og titel på ægte værker. Ingen opfundne titler, forfattere eller URL'er.
- **Navngiv manipulationsvektoren.** Et emne om en metrikfamilie angiver, hvordan metrikken bliver manipuleret, og hvilket værn der fanger det (emne 1.2).

## Stemme

- Varm, direkte, opmuntrende. Tiltal læseren som "du". Korte sætninger, almindelige ord. Start med pointen.
- Med holdninger og praktisk. Leverandørneutral. Nævn kun produkter som faktuelle eksempler.

## Struktur (test)

- Indholdsemner bruger den nøjagtige afsnitsrækkefølge i [`chapter-template.md`](chapter-template.md).
- Den første overskrift er `# N.M Title` (punktumdelt emnenummer), og den svarer til filens nulpolstrede `PP-CC`-præfiks.
- Nummereringen inden for hver del er sammenhængende og starter ved N.0.

## Efter redigering

- Hvis du har ændret sættet af emner, så opdatér `spec/structure.md` og kør `just nav`.
- Kør altid `just test`.
