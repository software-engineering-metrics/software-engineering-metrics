# Over dit project

Projectdocumentatie voor dit boek: hoe het is opgebouwd, hoe je het bouwt en controleert en waar de bron van waarheid staat. Voor het boek zelf, zie de [inhoudsopgave](../index.md).

## Kaart van het project

- **Het boek:** gepubliceerd in vier locales onder `locales/`; zie
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Deze locale, `en-gb-oxendict/topics/` (63 bestanden), `en-gb-oxendict/front-matter/` en de bijlagen in deel 9 zijn de met de hand geschreven bron;
  `en-001`, `en-gb` en `en-us` worden ervan afgeleid.
- **Bron van waarheid:** `spec/` in de root van de repository (niet gepubliceerd op de site). De structuur wordt vastgelegd in `spec/structure.md`, de schrijfregels in
  `spec/conventions.md` en de spelling in `spec/oxford-spelling.md`. Al het andere wordt hierop afgestemd.
- **Tooling:** `tools/localize.py` leidt de andere drie locales af; `tools/gen_nav.py` genereert de navigatie; `tests/validate.py` dwingt de spec af;
  het `justfile` verbindt ze.
- **Richtlijnen voor bijdragers:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md) in de repositoryroot, en de gidsen in de
  [sectie bijdragen](../bijdragen/overzicht.md).

## Bouwen en controleren

De validatiesuite draait op Python 3 zonder andere afhankelijkheden en zonder netwerktoegang. Taken worden uitgevoerd via [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Deze repository bevat de inhoud en de spec van het boek. Het wordt tot een website gerenderd door de aparte repository
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Hoe specificatiegedreven ontwikkeling hier werkt

De spec komt eerst. `spec/structure.md` legt vast welke onderwerpen er bestaan en hoe ze genummerd zijn. `spec/conventions.md` legt vast hoe onderwerpen geschreven moeten worden.
Onderwerpen worden geschreven om aan beide te voldoen. `tools/gen_nav.py` leidt de navigatie af uit de onderwerpen en `tests/validate.py` controleert het resultaat opnieuw tegen de spec.
Als een onderwerp en de spec ooit uit elkaar lopen, mislukt een test, en dat is het signaal om ze weer op één lijn te brengen.

Zo blijft drift buiten de deur: een wijziging is pas "af" wanneer de spec, de onderwerpen, de gegenereerde navigatie en de tests het allemaal eens zijn.

## Ontwerpbeslissingen die het weten waard zijn

- **Platte onderwerpen met decimale nummers.** Bestanden zijn `locales/<locale>/topics/PP-CC-slug.md`, dezelfde slug in elke locale. Delen zijn hele getallen; onderwerpen zijn
  decimalen; N.0 is de introductie van een deel. Zo blijven identificatoren stabiel en kan tooling sorteren en groeperen zonder een mappenboom.
- **Eén met de hand geschreven locale, drie afgeleide.** `en-gb-oxendict` is Oxford-spelling, de huisstijl van de meeste internationale normalisatie-instellingen (zie
  `spec/oxford-spelling.md`); `en-001`, `en-gb` en `en-us` worden er mechanisch van afgeleid, zodat vertalingen nooit van de bron afdrijven.
- **Gegenereerde navigatie.** De inhoudsopgave, de inhoudspagina's en de onderwerpenindex worden gegenereerd, dus ze lopen nooit uit de pas met de onderwerpen.
- **Offline tests zonder afhankelijkheden.** De suite gebruikt alleen de standaardbibliotheek, dus ze draait overal, ook in CI en in pre-commit-hooks.
- **Kruisverwijzingen blijven platte tekst.** Proza verwijst naar onderwerpen met hun decimale nummer ("zie onderwerp 2.1"), zoals de spec vereist; de renderende site
  is ervoor verantwoordelijk die verwijzingen in links te veranderen.
- **Geen gedachtestreepjes, per regel en per test.** Een bewuste stijlkeuze, afgedwongen zodat ze juist blijft naarmate het boek groeit.
- **Elke metriekenfamilie benoemt haar eigen manipulatieroute.** Dit is de enige regel in het sjabloon die geen tegenhanger heeft in het zusterproject
  `software-engineering-guide`: ze bestaat omdat het hele onderwerp van dit boek meten is, dus het risico van meten zelf moet eersteklas zijn, niet impliciet.

## Verder lezen

- [Schrijven](../bijdragen/schrijven.md) : onderwerpen schrijven en bewerken.
- [Navigatie](../bijdragen/navigatie.md) : hoe de gegenereerde bestanden werken.
- [Testen](../bijdragen/testen.md) : wat de tests controleren en hoe je fouten oplost.
- [Voorbeelden](../voorbeelden/overzicht.md) : kleine, concrete voorbeelden.
- [Wijzigingslogboek](wijzigingslogboek.md) : de geschiedenis van belangrijke wijzigingen.
