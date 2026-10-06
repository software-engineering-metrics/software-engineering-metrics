# Navigatie: hoe de gegenereerde bestanden werken

Per locale worden vier navigatieartefacten gegenereerd uit de onderwerpen van die locale, niet met de hand geschreven (plus `README.md`, dat eenmalig wordt
gegenereerd voor de referentielocale, `en-gb-oxendict`):

- `README.md` (de inhoudsopgave op de startpagina van de repository; alleen de referentielocale)
- `locales/<locale>/index.md` (de startpagina van de gepubliceerde site)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (de onderwerpenindex, met links)

Ze worden allemaal geproduceerd door
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Bewerk ze niet met de hand, want de volgende generatie overschrijft je wijzigingen.

## Wanneer opnieuw genereren

Draai `just nav` (of `python3 tools/gen_nav.py`) telkens wanneer je:

- een onderwerp toevoegt, verwijdert, hernoemt of hernummert, of
- de kop `# N.M Title` van een onderwerp wijzigt (de inhoudsopgave gebruikt die).

Draai eerst `python3 tools/localize.py` als je iets onder `locales/en-gb-oxendict/` hebt gewijzigd, zodat de onderwerpen van de andere drie locales (en de titels die ze
opleveren) actueel zijn voordat `gen_nav.py` ze leest; zie
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Hoe het werkt

Voor elke locale leest `gen_nav.py` elk bestand in `locales/<locale>/topics/*.md`, sorteert op decimaal nummer, groepeert per deel en:

- bouwt de inhoudsopgave per deel op uit de H1-titel van elk onderwerp,
- schrijft die naar `locales/<locale>/index.md` en `locales/<locale>/front-matter/table-of-contents.md` (en, alleen voor de referentielocale, `README.md`),
- scant de inhoudelijke onderwerpen (delen 1 tot en met 8) op een vaste lijst kernbegrippen en schrijft de onderwerpenindex naar `locales/<locale>/topics/09-07-index.md`.

De gedeelde standaardtekst (inleidingsalinea's, "Hoe je dit boek leest", "Terugkerende thema's" en de titels van de delen) wordt gelokaliseerd op dezelfde manier als het proza van de onderwerpen,
via de locale-functies van `tools/localize.py`, zodat de gegenereerde pagina's in elke locale natuurlijk lezen.

De titels van de delen staan in het woordenboek `PART_TITLES` bovenaan het script. De generator gebruikt koppen van delen in dubbelepuntstijl ("Part 2: Delivery and Flow Metrics"),
nooit een gedachtestreepje.

Voor met de hand vertaalde locales zijn de startpagina en de inhoudsopgavepagina met de hand geschreven (vertaalde koppen en de introductieregel N.0 van elk deel), en
`tools/gen_translated_nav.py` ververst de lijst met onderwerpen vanuit de H1-titels van de onderwerpen van die locale.

## Wat het niet aanraakt

De spec in de repositoryroot (`spec/index.md`, `spec/structure.md` en hun gezellen) is de met de hand geschreven bron van waarheid. De generator schrijft haar niet, en ze maakt
geen deel uit van de gepubliceerde site. Als je de structuur wijzigt, werk dan `spec/structure.md` zelf bij, draai dan `just nav` voor de afgeleide bestanden en `just test` om te bevestigen
dat alles klopt.
