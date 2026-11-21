# O tomto projektu

Projektová dokumentace knihy: jak je sestavena, jak se sestavuje a kontroluje
a kde leží zdroj pravdy. Samotná kniha viz [obsah](../index.md).

## Mapa projektu

- **Kniha:** vychází v mnoha jazykových verzích pod `locales/`; viz
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Ručně psaným zdrojem jsou lokalita `en-gb-oxendict/topics/` (63 souborů),
  `en-gb-oxendict/front-matter/` a přílohy v části 9; `en-001`, `en-gb`
  a `en-us` jsou z ní odvozeny.
- **Zdroj pravdy:** `spec/` v kořeni repozitáře (nepublikuje se na web). Struktura
  je deklarována v `spec/structure.md`, pravidla psaní v `spec/conventions.md`
  a pravopis v `spec/oxford-spelling.md`. Všechno ostatní se sestavuje tak, aby
  s tím souhlasilo.
- **Nástroje:** `tools/localize.py` odvozuje další tři lokality;
  `tools/gen_nav.py` generuje navigaci; `tests/validate.py` vynucuje
  specifikaci; `justfile` je spojuje dohromady.
- **Pokyny pro přispěvatele:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  v kořeni repozitáře a příručky v
  [sekci o přispívání](../prispivani/prehled.md).

## Sestavení a kontrola

Validační sada běží na Pythonu 3 bez dalších závislostí a bez přístupu k síti.
Úlohy se spouštějí přes [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Tento repozitář obsahuje obsah knihy a její specifikaci. Na web ji vykresluje
samostatný repozitář
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Jak tu funguje vývoj řízený specifikací

Specifikace je na prvním místě. `spec/structure.md` říká, která témata existují
a jak se číslují. `spec/conventions.md` říká, jak se musí psát. Témata se píší
tak, aby vyhovovala oběma. `tools/gen_nav.py` odvozuje navigaci z témat
a `tests/validate.py` výsledek kontroluje zpět proti specifikaci. Pokud se témata
a specifikace někdy rozejdou, testy selžou, a to je signál, že je třeba je
sladit.

Tím se brání rozjíždění: změna je „hotová“ teprve tehdy, když se shodují
specifikace, témata, vygenerovaná navigace i testy.

## Návrhová rozhodnutí, která stojí za to znát

- **Plochá témata číslovaná desetinně.** Soubory jsou
  `locales/<locale>/topics/PP-CC-slug.md`, v každé lokalitě stejný slug.
  Část je celé číslo; téma je desetinné číslo; N.0 je úvod části. Tím vznikají
  stabilní identifikátory a nástroje mohou řadit a seskupovat bez stromu adresářů.
- **Jedna ručně psaná lokalita, tři odvozené.** `en-gb-oxendict` je oxfordský
  pravopis, hlavní styl většiny mezinárodních normalizačních orgánů (viz
  `spec/oxford-spelling.md`); `en-001`, `en-gb` a `en-us` se z ní odvozují
  strojově, takže překlad se nikdy neodchýlí od zdroje.
- **Generovaná navigace.** Obsah, stránka s obsahem a rejstřík předmětů se
  generují, takže se od témat nikdy nerozejdou.
- **Offline testy bez závislostí.** Sada používá jen standardní knihovnu, takže
  běží kdekoli, včetně CI a pre-commit háčků.
- **Křížové odkazy zůstávají prostým textem.** Text odkazuje na témata
  desetinným číslem („viz téma 2.1“), jak vyžaduje specifikace; za převod těchto
  odkazů na odkazy odpovídá vykreslující web.
- **Žádné dlouhé pomlčky, pravidlem i testem.** Záměrná stylistická volba,
  vynucená tak, aby platila, i když kniha roste.
- **Každá rodina metrik pojmenovává svůj způsob manipulace.** Je to jediné
  pravidlo šablony, které nemá obdobu v sesterském projektu
  `software-engineering-guide`: existuje proto, že celým předmětem této knihy je
  měření, takže riziko samotného měření musí být prvotřídní, ne implicitní.

## Další četba

- [Psaní a úprava témat](../prispivani/psani-a-uprava-temat.md) : psaní a úprava témat.
- [Navigace](../prispivani/navigace.md) : jak fungují generované soubory.
- [Testování](../prispivani/testovani.md) : co testy kontrolují a jak opravit selhání.
- [Příklady](../priklady/prehled.md) : malé, konkrétní příklady.
- [Seznam změn](seznam-zmen.md) : historie významných změn.
