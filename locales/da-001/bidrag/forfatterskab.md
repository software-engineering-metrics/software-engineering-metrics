# Forfatterskab: at skrive og redigere emner

## Før du skriver

- Læs [stilreglerne](stilregler.md) og `spec/conventions.md` i repositoriets rod.
- Tjek `spec/structure.md` i repositoriets rod for at se, hvor emnet passer ind, og hvilket nummer det skal have.

## At skrive et nyt emne

1. Vælg delen og det næste ledige decimaltal i den del. Nummereringen er sammenhængende, så et nyt emne får normalt det næste nummer efter det sidste i sin del.
2. Opret `locales/en-gb-oxendict/topics/PP-CC-slug.md` (nulpolstret, bindestregsadskilt præfiks, for eksempel `02-01-...`) ud fra [emneskabelonen](emneskabelon.md). Skriv det med Oxford-stavning (se `spec/oxford-spelling.md`); redigér aldrig de tre andre lokaliteter direkte.
3. Skriv efter skabelonen. Hvert indholdsemne skal have alle sine afsnit: overblik, nøgleprincipper, anbefalinger, afvejninger (med en tabel), spørgsmål til drøftelse, et sektorperspektiv (startup, mindre virksomhed, stor virksomhed, offentlig sektor), eksempler (ét fra en stor virksomhed og ét fra det offentlige), business case, antimønstre, en femtrins modenhedsmodel, idéer til drøftelse, vigtigste pointer og kilder.
4. Navngiv manipulationsvektoren. Hver metrikfamilie har brug for et eksplicit svar på "hvordan får et team dette tal til at se godt ud uden at forbedre det, det måler, og hvilket værn fanger det" (se emne 1.2).
5. Definér begreber ved første brug. Tilføj Wikipedia-links til nøglebegreber ved første omtale, kun i brødtekst.
6. Henvis til beslægtede emner med decimaltal, for eksempel "(emne 2.1)."
7. Tilføj emnet til `spec/structure.md`.
8. Hvis delintroduktionen (N.0) opregner sine emner, så tilføj en punktopstilling dér.
9. Kør `python3 tools/localize.py` for at udlede emnet til `en-001`, `en-gb` og `en-us`.
10. Kør `just nav`, derefter `just test`.

## At redigere et eksisterende emne

- Bevar afsnitsrækkefølgen og overskrifterne uændret. Testene kontrollerer, at indholdsemner stadig har alle de krævede afsnit.
- Bevar indbyggede definitioner, Wikipedia-links, tabeller og kildelisten, medmindre redigeringen specifikt handler om dem.
- Indfør ikke tankestreger eller de forbudte vendinger. Hvis du omformulerer, så omformulér i stedet for at sætte en tankestreg ind.
- Kør bagefter `python3 tools/localize.py` for at udlede `en-001`, `en-gb` og `en-us` igen fra den redigerede kilde `en-gb-oxendict`.

## Omdøbning eller omnummerering

- Omdøb filen i `locales/en-gb-oxendict/`, opdatér dens overskrift `# N.M Title`, opdatér `spec/structure.md`, og opdatér hver krydshenvisning, der peger på det gamle nummer.
- Kør `python3 tools/localize.py` for også at omdøbe filen i de tre andre lokaliteter (den udleder alle fire ud fra de samme relative stier).
- Kør `just nav` og `just test`. Testene vil flage uoverensstemmelse mellem H1 og filnavn, et hul i nummereringen, en lokalitet, der er drevet fra kilden, eller et brudt link.

## Tonepåmindelse

Skriv som en erfaren kollega, der vil have, at læseren lykkes. Varm, jævn, direkte og nyttig. Korte sætninger. Ingen fyld.
