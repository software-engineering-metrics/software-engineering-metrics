# Navigace: jak fungují generované soubory

Pro každou lokalitu se generují čtyři navigační artefakty z témat dané lokality,
nepíšou se ručně (a navíc `README.md`, generovaný jednou pro referenční lokalitu
`en-gb-oxendict`):

- `README.md` (obsah na domovské stránce repozitáře; jen referenční lokalita)
- `locales/<locale>/index.md` (domovská stránka publikovaného webu)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (rejstřík předmětů s odkazy)

Vytváří je
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Neupravujte je ručně, protože další generování vaši změnu přepíše.

## Kdy znovu generovat

Spusťte `just nav` (nebo `python3 tools/gen_nav.py`), kdykoli:

- přidáte, odstraníte, přejmenujete nebo přečíslujete téma, nebo
- změníte nadpis tématu `# N.M Název` (obsah ho používá).

Pokud jste změnili cokoli pod `locales/en-gb-oxendict/`, spusťte nejdřív
`python3 tools/localize.py`, aby byla témata (a jejich generované názvy) ostatních
tří lokalit aktuální dřív, než je `gen_nav.py` přečte; viz
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Jak to funguje

Pro každou lokalitu `gen_nav.py` přečte každý soubor `locales/<locale>/topics/*.md`,
seřadí podle desetinného čísla, seskupí podle částí a:

- sestaví obsah po částech z H1 názvu každého tématu,
- zapíše ho do `locales/<locale>/index.md` a
  `locales/<locale>/front-matter/table-of-contents.md` (a jen pro referenční
  lokalitu do `README.md`),
- prohledá obsahová témata (části 1 až 8) podle pevného seznamu klíčových pojmů
  a zapíše rejstřík předmětů do `locales/<locale>/topics/09-07-index.md`.

Společný pomocný text (úvodní odstavec, „Jak tuto knihu číst“, „Průřezová
témata“ a názvy částí) se lokalizuje stejně jako próza témat, pomocí lokalizačních
funkcí v `tools/localize.py`, takže generované stránky v každé lokalitě znějí
přirozeně.

Názvy částí jsou ve slovníku `PART_TITLES` blízko začátku skriptu. Generátor
používá záhlaví částí s dvojtečkou („Part 2: Delivery and Flow Metrics“),
nikdy dlouhé pomlčky.

## Čeho se nedotýká

Specifikace v kořeni repozitáře (`spec/index.md`, `spec/structure.md` a její
doprovodné soubory) je ručně psaný zdroj pravdy. Generátor ji nezapisuje a není
součástí publikovaného webu. Pokud změníte strukturu, aktualizujte
`spec/structure.md` sami, pak spusťte `just nav` pro odvozené soubory
a `just test`, abyste potvrdili, že vše sedí.
