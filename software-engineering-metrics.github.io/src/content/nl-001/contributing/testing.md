# Testen: de validatiesuite

## Draaien

```sh
just test
# or
python3 tests/validate.py
```

Ze draait overal en heeft alleen Python 3 nodig (geen pakketten van derden, geen netwerk). Ze print één regel per controle en sluit af met een
waarde ongelijk aan nul als een controle mislukt, dus ze is geschikt voor CI en als pre-commit-hook.

## Wat ze controleert

- **Verwacht aantal onderwerpen** (een constante bovenaan het script).
- **Aaneengesloten nummering** binnen elk deel, beginnend bij N.0.
- **H1 komt overeen met het decimaal in de bestandsnaam** voor elk onderwerp.
- **H1-titel komt overeen met `spec/structure.md`**, teken voor teken, niet alleen het voorloopdecimaal.
- **Vereiste secties** aanwezig in elk inhoudelijk onderwerp (delen 1 tot en met 8, onderwerpen N.1 en hoger), **in exact de volgorde van het sjabloon**.
- **Minimaal aantal woorden** voor elk inhoudelijk onderwerp (1.500 woorden), met een toegestane lijst in het script voor bewuste uitzonderingen.
- **Geen gedachtestreepjes** in enig Markdown-bestand.
- **Korte streepjes alleen tussen cijfers**, dus "2.1–2.8" slaagt en andere falen.
- **Geen verboden formuleringen** ("not only", "but also", "load-bearing").
- **Alle interne `.md`-links worden opgelost.**
- **Kruisverwijzingen in proza wijzen naar echte onderwerpen**: een verwijzing naar een onderwerpnummer zonder bijpassend bestand op schijf mislukt, met hetzelfde verwijzingspatroon
  als de automatische onderwerplinks van de gepubliceerde site.
- **Wikipedia-links hebben de juiste vorm** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` komt overeen met de bestanden op schijf**, in beide richtingen.
- **README, startpagina en inhoudspagina's linken naar elk onderwerp.**

## Wanneer een controle mislukt

De mislukte regel noemt het bestand en het probleem. Veelvoorkomende oplossingen:

- Gedachtestreepje gevonden: herschrijf de zin om "—" te verwijderen. Verwijder het niet alleen.
- Sectie ontbreekt: voeg de ontbrekende `##`-sectie toe uit het onderwerpsjabloon.
- Structuurmismatch: je hebt een onderwerp toegevoegd of hernoemd zonder `spec/structure.md` bij te werken, of andersom. Breng ze weer op één lijn.
- Kapotte link: corrigeer het pad, of werk het bij na een hernoeming.
- Gat in de nummering: hernummer zodat het deel aaneengesloten is vanaf N.0.

## Voorbij de validatiesuite

- `just spell` draait [codespell](https://github.com/codespell-project/codespell) over de repository. De configuratie, inclusief een negeerlijst voor valse positieven,
  is de sectie `[tool.codespell]` in `pyproject.toml`.
- `just stats` print een Markdown-rapport (aantal woorden per onderwerp, dunne onderwerpen, Wikipedia-links, referentie-items) uit `tools/stats.py`.

## Continue integratie

- `.github/workflows/test.yml` draait op elke pull request en op pushes naar andere branches dan main: de validatiesuite en codespell. Deze repository bouwt of
  deployt de site niet; het renderen gebeurt in de aparte repository `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` controleert wekelijks externe links met [lychee](https://github.com/lycheeverse/lychee) (negeerpatronen in `.lycheeignore`) en houdt de uitkomst bij in
  één issue "Link checker report". Externe links worden bewust buiten het PR-pad gehouden.

## Niet gedekt door de tests

De suite controleert structuur en stijl, geen waarheid. Ze kan niet weten of een referentie echt is of dat het proza juist is. Verifieer citaten en feiten met de hand of met een onderzoeksronde.
Het bestaan van een Wikipedia-link (anders dan de vorm) vereist ook een netwerkcontrole, die de suite bewust achterwege laat zodat ze offline kan draaien.
