# Um þetta verkefni

Verkefnisskjölun fyrir bókina: hvernig hún er sett saman, hvernig á að byggja og athuga hana, og hvar sannleiksgrunnurinn býr. Fyrir bókina sjálfa, sjá [efnisyfirlitið](../index.md).

## Kort af verkefninu

- **Bókin:** gefin út á fjórum málsvæðum undir `locales/`; sjá [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md). Þetta málsvæði, `en-gb-oxendict/topics/` (63 skrár), `en-gb-oxendict/front-matter/` og viðaukarnir í 9. hluta eru handskrifaða uppsprettan; `en-001`, `en-gb` og `en-us` eru leidd út frá henni.
- **Sannleiksgrunnur:** `spec/` í rót geymslunnar (ekki gefið út á vefinn). Byggingin er lýst í `spec/structure.md`, skrifreglurnar í `spec/conventions.md` og stafsetningin í `spec/oxford-spelling.md`. Allt annað er byggt til að passa.
- **Tól:** `tools/localize.py` leiðir hin þrjú málsvæðin út; `tools/gen_nav.py` myndar leiðsögn; `tests/validate.py` framfylgir forskriftinni; `justfile` tengir þetta saman.
- **Framlagsleiðbeiningar:** [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md) í rót geymslunnar, og leiðbeiningarnar í [framlagshlutanum](../framlag/yfirlit.md).

## Byggja og athuga

Sannprófunarsafnið keyrir á Python 3 án annarra háða og án netaðgangs. Verk keyra gegnum [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Þessi geymsla heldur efni bókarinnar og forskrift hennar. Hún er birt á vefsíðu af aðskildu [`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io) geymslunni.

## Hvernig forskriftardrifin þróun virkar hér

Forskriftin kemur fyrst. `spec/structure.md` segir hvaða viðfangsefni eru til og hvernig þau eru númeruð. `spec/conventions.md` segir hvernig þau verða að vera skrifuð. Viðfangsefnin eru skrifuð til að fullnægja hvoru tveggja. `tools/gen_nav.py` leiðir leiðsögnina út frá viðfangsefnunum, og `tests/validate.py` athugar niðurstöðuna aftur gegn forskriftinni. Ef viðfangsefnin og forskriftin eru einhvern tímann ósammála falla prófin, sem er merkið um að koma þeim aftur í samræmi.

Þetta heldur reki úti: breyting er aðeins „búin“ þegar forskriftin, viðfangsefnin, myndaða leiðsögnin og prófin eru öll sammála.

## Hönnunarákvarðanir vert að þekkja

- **Flöt, tugabrotsnúmeruð viðfangsefni.** Skrár eru `locales/<locale>/topics/PP-CC-slug.md`, sami slug á hverju málsvæði. Hlutinn er heil tala; viðfangsefnið er tugabrot; N.0 er hlutainngangurinn. Þetta heldur stöðugum auðkennum og lætur tól raða og flokka án möppuskipulags.
- **Eitt handskrifað málsvæði, þrjú leidd.** `en-gb-oxendict` er Oxford-stafsetning, húsastíll flestra alþjóðlegra staðlastofnana (sjá `spec/oxford-spelling.md`); `en-001`, `en-gb` og `en-us` eru vélrænt leidd út frá því, svo þýðing rekur aldrei frá uppsprettunni.
- **Mynduð leiðsögn.** Efnisyfirlitið, innihaldssíðan og atriðisorðaskráin eru mynduð, svo þau reka aldrei frá viðfangsefnunum.
- **Nettenglalaus, háðalaus próf.** Safnið notar aðeins staðalsafnið svo það keyrir hvar sem er, þar með CI og pre-commit króka.
- **Víxlvísanir haldast einfaldur texti.** Texti vísar í viðfangsefni með tugabrotsnúmeri („sjá viðfangsefni 2.1“), eins og forskriftin krefst; birtingarvefurinn ber ábyrgð á að breyta þeim tilvísunum í tengla.
- **Engin tankastrik, samkvæmt reglu og prófi.** Vísvitandi stílval, framfylgt svo það haldist satt eftir því sem bókin vex.
- **Sérhver mælikvarðafjölskylda nefnir eigin leikvektor.** Þetta er eina reglan í sniðmátinu sem á sér ekkert jafngildi í systurverkefninu `software-engineering-guide`: hún er til því allt efni þessarar bókar er mæling, svo áhætta mælingarinnar sjálfrar verður að vera fyrsta flokks, ekki óbein.

## Frekara lesefni

- [Ritun](../framlag/ritun.md) : að skrifa og breyta viðfangsefnum.
- [Leiðsögn](../framlag/leiðsögn.md) : hvernig myndaðar skrár virka.
- [Prófanir](../framlag/prófanir.md) : hvað prófin athuga og hvernig á að laga bilanir.
- [Dæmi](../dæmi/yfirlit.md) : lítil, áþreifanleg dæmi.
- [Breytingaskrá](breytingaskrá.md) : saga athyglisverðra breytinga.
