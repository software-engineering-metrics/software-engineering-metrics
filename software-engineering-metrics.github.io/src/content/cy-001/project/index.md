# Ynghylch y prosiect hwn

Dogfennaeth y prosiect ar gyfer y llyfr: sut y caiff ei roi at ei gilydd, sut
i'w adeiladu a'i wirio, a ble mae ffynhonnell y gwir. Ar gyfer y llyfr ei hun,
gweler y [cynnwys](../index.md).

## Map o'r prosiect

- **Y llyfr:** wedi'i gyhoeddi mewn pedair locale o dan `locales/`; gweler
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Y locale hon, `en-gb-oxendict/topics/` (63 ffeil), `en-gb-oxendict/front-matter/`,
  a'r atodiadau yn Rhan 9 yw'r ffynhonnell a ysgrifennir â llaw; mae `en-001`,
  `en-gb` ac `en-us` yn deillio ohoni.
- **Ffynhonnell y gwir:** `spec/` yng ngwraidd y storfa (heb ei gyhoeddi ar y
  wefan). Datgenir y strwythur yn `spec/structure.md`, y rheolau ysgrifennu
  yn `spec/conventions.md`, a'r sillafu yn `spec/oxford-spelling.md`. Adeiledir
  popeth arall i gyd-fynd.
- **Offer:** mae `tools/localize.py` yn deillio'r tair locale arall;
  mae `tools/gen_nav.py` yn cynhyrchu llywio; mae `tests/validate.py` yn gorfodi'r
  fanyleb; mae'r `justfile` yn eu clymu at ei gilydd.
- **Arweiniad i gyfranwyr:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  yng ngwraidd y storfa, a'r canllawiau yn yr
  [adran gyfrannu](../contributing/index.md).

## Adeiladu a gwirio

Mae'r gyfres ddilysu yn rhedeg ar Python 3 heb unrhyw ddibyniaethau eraill a
heb fynediad i'r rhwydwaith. Rhedir tasgau trwy [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Mae'r storfa hon yn dal cynnwys a manyleb y llyfr. Fe'i troir yn wefan gan y
storfa ar wahân
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Sut mae datblygu a yrrir gan fanyleb yn gweithio yma

Daw'r fanyleb yn gyntaf. Mae `spec/structure.md` yn dweud pa bynciau sy'n
bodoli a sut y cânt eu rhifo. Mae `spec/conventions.md` yn dweud sut y mae'n
rhaid eu hysgrifennu. Awdurir y pynciau i fodloni'r ddau. Mae `tools/gen_nav.py`
yn deillio'r llywio o'r pynciau, ac mae `tests/validate.py` yn gwirio'r canlyniad
yn ôl yn erbyn y fanyleb. Os bydd y pynciau a'r fanyleb byth yn anghytuno,
mae'r profion yn methu, sef y signal i'w dwyn yn ôl at ei gilydd.

Mae hyn yn cadw drifft allan: dim ond pan fydd y fanyleb, y pynciau, y llywio a
gynhyrchir a'r profion i gyd yn cytuno y mae newid yn "orffenedig".

## Penderfyniadau dylunio sy'n werth eu gwybod

- **Pynciau gwastad, wedi'u rhifo'n ddegol.** Ffeiliau yw
  `locales/<locale>/topics/PP-CC-slug.md`, yr un slug ym mhob locale. Mae'r
  rhan yn rhif cyfan; y pwnc yn ddegol; N.0 yw cyflwyniad y rhan. Mae hyn yn
  cadw dynodwyr sefydlog ac yn gadael i offer ddidoli a grwpio heb goeden
  gyfeiriaduron.
- **Un locale a ysgrifennir â llaw, tair a ddeilliwyd.** Sillafu Rhydychen yw
  `en-gb-oxendict`, arddull tŷ'r rhan fwyaf o gyrff safonau rhyngwladol (gweler
  `spec/oxford-spelling.md`); deillir `en-001`, `en-gb` ac `en-us` yn fecanyddol
  ohoni, felly nid yw cyfieithu byth yn drifftio o'r ffynhonnell.
- **Llywio a gynhyrchir.** Cynhyrchir y tabl cynnwys, y dudalen gynnwys a'r
  mynegai pwnc, felly nid ydynt byth yn drifftio o'r pynciau.
- **Profion all-lein, heb ddibyniaethau.** Mae'r gyfres yn defnyddio'r llyfrgell
  safonol yn unig felly mae'n rhedeg yn unrhyw le, gan gynnwys CI a bachau
  cyn-ymrwymo.
- **Mae croesgyfeirnodau'n aros yn destun plaen.** Mae rhyddiaith yn cyfeirio at
  bynciau yn ôl rhif degol ("gweler pwnc 2.1"), fel y mae'r fanyleb yn
  gofyn; y wefan sy'n gyfrifol am droi'r cyfeirnodau hynny'n gysylltiadau.
- **Dim cysylltnodau em, yn ôl rheol ac yn ôl prawf.** Dewis arddull bwriadol,
  wedi'i orfodi fel ei fod yn aros yn wir wrth i'r llyfr dyfu.
- **Mae pob teulu metrigau yn enwi ei lwybr ystumio ei hun.** Dyma'r un rheol
  yn y templed nad oes ganddi gyfatebydd ym mhrosiect chwaer
  `software-engineering-guide`: mae'n bodoli oherwydd mai mesur yw holl bwnc y
  llyfr hwn, felly mae'n rhaid i risg mesur ei hun fod yn flaenoriaeth, nid yn
  ymhlyg.

## Darllen pellach

- [Ysgrifennu](../contributing/authoring.md) : ysgrifennu a golygu pynciau.
- [Llywio](../contributing/navigation.md) : sut mae'r ffeiliau a gynhyrchir yn gweithio.
- [Profi](../contributing/testing.md) : yr hyn y mae'r profion yn ei wirio a sut i drwsio methiannau.
- [Enghreifftiau](../examples/index.md) : enghreifftiau bach, pendant.
- [Cofnod newidiadau](changelog.md) : hanes newidiadau nodedig.
