# Schrijven: onderwerpen schrijven en bewerken

## Voordat je schrijft

- Lees de [stijlregels](stijlregels.md) en `spec/conventions.md` in de repositoryroot.
- Controleer `spec/structure.md` in de repositoryroot om te zien waar het onderwerp past en welk nummer het moet krijgen.

## Een nieuw onderwerp schrijven

1. Kies het deel en het eerstvolgende vrije decimale nummer in dat deel. De nummering is aaneengesloten, dus een nieuw onderwerp krijgt meestal het nummer na het laatste
   onderwerp van zijn deel.
2. Maak `locales/en-gb-oxendict/topics/PP-CC-slug.md` (voorvoegsel met voorloopnullen en koppelteken, bijvoorbeeld `02-01-...`) op basis van het
   [onderwerpsjabloon](onderwerpsjabloon.md). Schrijf in Oxford-spelling (zie `spec/oxford-spelling.md`); bewerk de andere drie locales nooit rechtstreeks.
3. Schrijf volgens het sjabloon. Een inhoudelijk onderwerp heeft alle secties nodig: overzicht, kernprincipes, aanbevelingen, afwegingen (met tabel), discussievragen,
   sectorperspectief (startup, kleine onderneming, grote onderneming, overheid), voorbeelden (één onderneming en één overheid), businesscase, antipatronen, volwassenheidsmodel
   met vijf niveaus, discussie-ideeën, kernpunten en referenties.
4. Benoem de manipulatieroute. Elke metriekenfamilie heeft een expliciet antwoord nodig op "hoe laat een team dit getal er goed uitzien zonder te verbeteren wat het meet, en
   welke beschermmetriek vangt dat op" (zie onderwerp 1.2).
5. Definieer termen bij eerste gebruik. Voeg bij de eerste vermelding een Wikipedia-link toe voor kernbegrippen, alleen in proza.
6. Verwijs naar verwante onderwerpen met hun decimale nummer, bijvoorbeeld "(onderwerp 2.1)".
7. Voeg het onderwerp toe aan `spec/structure.md`.
8. Als de introductie van het deel (N.0) zijn onderwerpen opsomt, voeg dan een opsommingsteken toe.
9. Draai `python3 tools/localize.py` om het onderwerp af te leiden naar `en-001`, `en-gb` en `en-us`.
10. Draai `just nav` en daarna `just test`.

## Een bestaand onderwerp bewerken

- Behoud de volgorde en koppen van de secties. De tests controleren of inhoudelijke onderwerpen nog elke vereiste sectie hebben.
- Behoud inline definities, Wikipedia-links, tabellen en referentielijsten, tenzij de bewerking daar juist over gaat.
- Voer geen gedachtestreepjes of verboden formuleringen in. Als je herformuleert, schrijf dan opnieuw in plaats van een streepje in te voegen.
- Draai daarna `python3 tools/localize.py` om `en-001`, `en-gb` en `en-us` opnieuw af te leiden van de bewerkte bron `en-gb-oxendict`.

## Hernoemen of hernummeren

- Hernoem het bestand in `locales/en-gb-oxendict/`, werk de kop `# N.M Title` bij, werk `spec/structure.md` bij en werk elke kruisverwijzing naar het oude nummer bij.
- Draai `python3 tools/localize.py` om de bestanden in de andere drie locales ook te hernoemen (het leidt alle vier af van hetzelfde relatieve pad).
- Draai `just nav` en `just test`. De tests wijzen op een mismatch tussen H1 en bestandsnaam, een gat in de nummering, een locale die van de bron is afgedreven of een kapotte link.

## Herinnering over toon

Schrijf als een ervaren collega die wil dat de lezer slaagt. Warm, helder, direct en nuttig. Korte zinnen. Geen vulling.
