# Navigering: hur de genererade filerna fungerar

Per lokal genereras fyra navigeringsartefakter ur den lokalens ämnen och skrivs inte för hand (plus `README.md`, som genereras en gång för referenslokalen,
`en-gb-oxendict`):

- `README.md` (innehållsförteckningen på repositoryts startsida; endast referenslokalen)
- `locales/<locale>/index.md` (den publicerade webbplatsens startsida)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (ämnesregistret, med länkar)

Alla framställs av
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Redigera dem inte för hand, eftersom nästa generering skriver över dina ändringar.

## När du ska generera om

Kör `just nav` (eller `python3 tools/gen_nav.py`) varje gång du:

- lägger till, tar bort, byter namn på eller numrerar om ett ämne, eller
- ändrar ett ämnes rubrik `# N.M Title` (innehållsförteckningen använder den).

Kör `python3 tools/localize.py` först om du har ändrat något under `locales/en-gb-oxendict/`, så att de andra tre lokalernas ämnen (och de rubriker de ger upphov till) är aktuella
innan `gen_nav.py` läser dem; se
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Hur det fungerar

För varje lokal läser `gen_nav.py` varje fil i `locales/<locale>/topics/*.md`, sorterar efter decimalnummer, grupperar efter del och:

- bygger innehållsförteckningen del för del ur varje ämnes H1-rubrik,
- skriver den till `locales/<locale>/index.md` och `locales/<locale>/front-matter/table-of-contents.md` (och, endast för referenslokalen, `README.md`),
- söker igenom innehållsämnena (del 1 till 8) efter en fast lista nyckeltermer och skriver ämnesregistret till `locales/<locale>/topics/09-07-index.md`.

Den delade standardtexten (inledande stycken, "Hur du läser den här boken", "Genomgående teman" och delrubriker) lokaliseras på samma sätt som ämnenas prosa,
genom lokalfunktionerna i `tools/localize.py`, så att de genererade sidorna läses naturligt i varje lokal.

Delrubrikerna finns i ordlistan `PART_TITLES` nära början av skriptet. Generatorn använder delrubriker i kolonstil ("Part 2: Delivery and Flow Metrics"),
aldrig långa tankstreck.

För handöversatta lokaler skrivs startsidan och innehållsförteckningssidan för hand (översatta rubriker och varje dels N.0-introduktionsrad), och
`tools/gen_translated_nav.py` uppdaterar ämneslistan ur H1-rubrikerna i den lokalens ämnen.

## Vad den inte rör

Specifikationen i repositoryts rot (`spec/index.md`, `spec/structure.md` och deras följeslagare) är den handskrivna sanningskällan. Generatorn skriver den inte, och den ingår inte i den publicerade webbplatsen.
Om du ändrar strukturen, uppdatera `spec/structure.md` själv, kör sedan `just nav` för de härledda filerna och `just test` för att bekräfta att allt stämmer överens.
