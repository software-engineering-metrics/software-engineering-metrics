# Om det här projektet

Projektdokumentation för den här boken: hur den är sammansatt, hur du bygger och kontrollerar den och var sanningskällan finns. För själva boken, se [innehållsförteckningen](../index.md).

## Projektkarta

- **Boken:** publiceras i fyra lokaler under `locales/`; se
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Den här lokalen, `en-gb-oxendict/topics/` (63 filer), `en-gb-oxendict/front-matter/` och bilagorna i del 9 är den handskrivna källan;
  `en-001`, `en-gb` och `en-us` härleds ur den.
- **Sanningskälla:** `spec/` i repositoryts rot (publiceras inte på webbplatsen). Strukturen deklareras i `spec/structure.md`, skrivreglerna i
  `spec/conventions.md` och stavningen i `spec/oxford-spelling.md`. Allt annat byggs för att stämma överens.
- **Verktyg:** `tools/localize.py` härleder de andra tre lokalerna; `tools/gen_nav.py` genererar navigeringen; `tests/validate.py` upprätthåller specifikationen;
  `justfile` knyter ihop dem.
- **Vägledning för bidragsgivare:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md) i repositoryts rot och guiderna i
  [bidragsavsnittet](../contributing/index.md).

## Bygga och kontrollera

Valideringssviten körs på Python 3 utan andra beroenden och utan nätverksåtkomst. Uppgifter körs via [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Det här repositoryt innehåller bokens innehåll och specifikation. Det renderas till en webbplats av det separata repositoryt
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Hur specifikationsdriven utveckling fungerar här

Specifikationen kommer först. `spec/structure.md` deklarerar vilka ämnen som finns och hur de numreras. `spec/conventions.md` deklarerar hur ämnen ska skrivas.
Ämnen författas för att uppfylla båda. `tools/gen_nav.py` härleder navigeringen ur ämnena och `tests/validate.py` kontrollerar resultatet mot specifikationen igen.
Om ett ämne och specifikationen någonsin glider isär misslyckas ett test, och det är signalen att räta upp dem igen.

Det håller avdriften borta: en ändring är först "klar" när specifikationen, ämnena, den genererade navigeringen och testerna alla är överens.

## Designbeslut värda att känna till

- **Platta, decimalnumrerade ämnen.** Filerna är `locales/<locale>/topics/PP-CC-slug.md`, samma slug i varje lokal. Delar är heltal; ämnen är
  decimaltal; N.0 är en dels introduktion. Det håller identifierarna stabila och låter verktyg sortera och gruppera utan ett katalogträd.
- **En handskriven lokal, tre härledda.** `en-gb-oxendict` är Oxford-stavning, de flesta internationella standardiseringsorganens husstil (se
  `spec/oxford-spelling.md`); `en-001`, `en-gb` och `en-us` härleds mekaniskt ur den, så att översättningar aldrig glider från källan.
- **Genererad navigering.** Innehållsförteckningen, innehållssidorna och ämnesregistret genereras, så de glider aldrig från ämnena.
- **Offline-tester utan beroenden.** Sviten använder bara standardbiblioteket, så den körs överallt, även i CI och pre-commit-hooks.
- **Korsreferenser förblir ren text.** Prosan hänvisar till ämnen med deras decimalnummer ("se ämne 2.1"), som specifikationen kräver; webbplatsen som renderar
  ansvarar för att göra hänvisningarna till länkar.
- **Inga långa tankstreck, enligt regel och enligt test.** Ett medvetet stilval, upprätthållet så att det förblir sant när boken växer.
- **Varje mätetalsfamilj namnger sin egen manipulationsväg.** Det här är den enda regeln i mallen som saknar motsvarighet i systerprojektet
  `software-engineering-guide`: den finns eftersom hela bokens ämne är mätning, så risken med själva mätningen måste vara förstklassig, inte underförstådd.

## Vidare läsning

- [Författande](../contributing/authoring.md) : att skriva och redigera ämnen.
- [Navigering](../contributing/navigation.md) : hur de genererade filerna fungerar.
- [Testning](../contributing/testing.md) : vad testerna kontrollerar och hur du åtgärdar fel.
- [Exempel](../examples/index.md) : små, konkreta exempel.
- [Ändringslogg](changelog.md) : historiken över anmärkningsvärda ändringar.
