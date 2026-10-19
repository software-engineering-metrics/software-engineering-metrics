# Bijdragen

Bedankt dat je dit boek helpt verbeteren. Bijdragen van elke omvang zijn welkom, van het herstellen van een typfout tot het schrijven van een nieuw onderwerp.

## Basisregels

Dit boek volgt een strikte huisstijl. De kern:

- Geen gedachtestreepjes. Gebruik een komma, dubbele punt, haakjes of twee zinnen.
- Geen clichézinnen ("not only ... but also", "load-bearing" en dergelijke).
- Warm, helder, direct proza. Spreek de lezer direct aan. Korte zinnen.
- Definieer termen bij eerste gebruik. Link kernbegrippen bij de eerste vermelding naar Wikipedia.
- Alleen echte referenties.
- Elk onderwerp over een metriekenfamilie benoemt de manipulatieroute en de beschermmetriek.

De volledige regels staan in `spec/conventions.md` in de repositoryroot, en de korte versie is de [stijlregels](style-rules.md). De tests dwingen het mechanische deel af.

## Opzetten

Je hebt Python 3 en [just](https://github.com/casey/just) nodig. Deze repository bevat de inhoud en de spec van het boek, plus de SvelteKit-site
(`software-engineering-metrics.github.io/`) die het tot de gepubliceerde website rendert.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Een wijziging aanbrengen

1. Lees de relevante gids: [schrijven](authoring.md) voor onderwerpen, [navigatie](navigation.md) voor gegenereerde bestanden, [testen](testing.md) voor de tests.
2. Maak de kleinste wijziging die de klus klaart.
3. Als je een onderwerp toevoegt, verwijdert, hernoemt of hernummert, werk dan `spec/structure.md` in de repositoryroot bij en draai `just nav`.
4. Draai `just test`. Die moet slagen.
5. Voeg een regel toe aan het [wijzigingslogboek](../project/changelog.md) onder **Unreleased**.

## Waar je aan kunt werken

- Herstel fouten, onduidelijke passages of verouderde referenties.
- Verbeter voorbeelden, vooral concrete voorbeelden uit ondernemingen en overheden.
- Verifieer citaten aan de hand van echte bronnen.
- Vul hiaten in de dekking van een onderwerp zonder het sjabloon te breken.

## Wat je moet vermijden

- Bewerk gegenereerde bestanden (`README.md`, de `index.md` van elke locale, `front-matter/table-of-contents.md` en `topics/09-07-index.md`) niet met de hand.
  Wijzig in plaats daarvan de onderwerpen en draai `just nav`.
- Bewerk `en-001`, `en-gb` of `en-us` niet rechtstreeks; ze worden door `tools/localize.py` afgeleid van `en-gb-oxendict`.
- Voeg geen onderwerp toe zonder ook `spec/structure.md` bij te werken.
- Voer geen gedachtestreepjes of verboden formuleringen in; de tests mislukken dan.

## Problemen melden

Open een issue dat het probleem beschrijft, het bestand en het onderwerp, en waar relevant de juiste bron of referentie. Kleine, specifieke meldingen zijn het makkelijkst op te volgen.
