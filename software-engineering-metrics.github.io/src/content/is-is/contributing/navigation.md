# Leiðsögn: hvernig myndaðar skrár virka

Á hvert málsvæði eru fjórir leiðsögugripir myndaðir úr viðfangsefnum þess málsvæðis, ekki skrifaðir handvirkt (auk `README.md`, myndaðs einu sinni fyrir viðmiðunarmálsvæðið, `en-gb-oxendict`):

- `README.md` (efnisyfirlitið á heimasíðu geymslunnar; aðeins viðmiðunarmálsvæði)
- `locales/<locale>/index.md` (heimasíða útgefna vefsins)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (atriðisorðaskráin, með tenglum)

Þær eru framleiddar af [`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py). Breyttu þeim ekki handvirkt, því næsta mynd skrifar yfir breytingu þína.

## Hvenær á að mynda aftur

Keyrðu `just nav` (eða `python3 tools/gen_nav.py`) hvenær sem þú:

- bætir við, fjarlægir, endurnefnir eða endurnúmerar viðfangsefni, eða
- breytir `# N.M Title` fyrirsögn viðfangsefnis (efnisyfirlitið notar hana).

Keyrðu `python3 tools/localize.py` fyrst ef þú breyttir einhverju undir `locales/en-gb-oxendict/`, svo viðfangsefni hinna þriggja málsvæðanna (og mynduðu titlar þeirra) séu uppfærð áður en `gen_nav.py` les þau; sjá [`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Hvernig það virkar

Fyrir hvert málsvæði les `gen_nav.py` hverja `locales/<locale>/topics/*.md` skrá, raðar eftir tugabrotsnúmeri, flokkar eftir hluta og:

- byggir hluta-fyrir-hluta efnisyfirlitið úr H1-titli hvers viðfangsefnis,
- skrifar það í `locales/<locale>/index.md` og `locales/<locale>/front-matter/table-of-contents.md` (og, fyrir viðmiðunarmálsvæðið eingöngu, `README.md`),
- skannar efnisviðfangsefnin (1. til 8. hluta) fyrir fastan lista lykilhugtaka og skrifar atriðisorðaskrána í `locales/<locale>/topics/09-07-index.md`.

Sameiginlegi staðaltextinn (inngangsmálsgreinin, „Hvernig á að lesa þessa bók“, „Þvert á hluta“ og hlutatitlarnir) er staðfærður á sama hátt og viðfangsefnatextinn, gegnum málsvæðaföll `tools/localize.py`, svo myndaðar síður lesist eðlilega á hverju málsvæði.

Hlutatitlar búa í `PART_TITLES` orðabókinni nálægt toppi skriftunnar. Myndarinn notar tvípunktsstíl hlutafyrirsagna („Part 2: Delivery and Flow Metrics“), aldrei tankastrik.

## Hverju það snertir ekki

Forskriftin í rót geymslunnar (`spec/index.md`, `spec/structure.md` og fylgiskjöl hennar) er handskrifaður sannleiksgrunnur. Myndarinn skrifar hana ekki, og hún er ekki hluti útgefna vefsins. Ef þú breytir byggingunni, uppfærðu `spec/structure.md` sjálfur, keyrðu síðan `just nav` fyrir leiddu skrárnar og `just test` til að staðfesta að allt passi saman.
