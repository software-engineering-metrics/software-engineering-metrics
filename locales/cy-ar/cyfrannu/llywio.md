# Llywio: sut mae'r ffeiliau a gynhyrchir yn gweithio

Ar gyfer pob locale, cynhyrchir pedair arteffact llywio o bynciau'r locale
honno, nid eu hysgrifennu â llaw (ynghyd â `README.md`, a gynhyrchir unwaith ar
gyfer y locale gyfeirio, `en-gb-oxendict`):

- `README.md` (y tabl cynnwys ar hafan y storfa; y locale gyfeirio yn unig)
- `locales/<locale>/index.md` (hafan y wefan gyhoeddedig)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (y mynegai pwnc, gyda chysylltiadau)

Fe'u cynhyrchir gan
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Peidiwch â'u golygu â llaw, oherwydd bydd y cynhyrchiad nesaf yn trosysgrifo eich
newid.

## Pryd i ailgynhyrchu

Rhedwch `just nav` (neu `python3 tools/gen_nav.py`) pryd bynnag y byddwch:

- yn ychwanegu, dileu, ailenwi neu ailrifo pwnc, neu
- yn newid pennawd `# N.M Title` pwnc (mae'r tabl cynnwys yn ei ddefnyddio).

Rhedwch `python3 tools/localize.py` yn gyntaf os newidioch unrhyw beth o dan
`locales/en-gb-oxendict/`, fel bod pynciau'r tair locale arall (a'u teitlau a
gynhyrchir) yn gyfredol cyn i `gen_nav.py` eu darllen; gweler
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Sut mae'n gweithio

Ar gyfer pob locale, mae `gen_nav.py` yn darllen pob ffeil
`locales/<locale>/topics/*.md`, yn didoli yn ôl rhif degol, yn grwpio yn ôl
rhan, ac:

- yn adeiladu'r tabl cynnwys rhan wrth ran o H1 pob pwnc,
- yn ei ysgrifennu i `locales/<locale>/index.md` a
  `locales/<locale>/front-matter/table-of-contents.md` (ac, ar gyfer y locale
  gyfeirio yn unig, `README.md`),
- yn sganio'r pynciau sylweddol (Rhannau 1 hyd 8) am restr sefydlog o dermau
  allweddol ac yn ysgrifennu'r mynegai pwnc i
  `locales/<locale>/topics/09-07-index.md`.

Caiff y testun safonol a rennir (y paragraff rhagarweiniol, "Sut i ddarllen y
llyfr hwn", "Themâu trawsbynciol", a theitlau'r rhannau) ei leoleiddio yn yr un
modd â rhyddiaith y pynciau, trwy swyddogaethau locale `tools/localize.py`,
fel bod y tudalennau a gynhyrchir yn darllen yn naturiol ym mhob locale.

Mae teitlau'r rhannau yn y geiriadur `PART_TITLES` ger brig y sgript. Mae'r
cynhyrchydd yn defnyddio penawdau rhan arddull colon ("Part 2: Delivery and
Flow Metrics"), byth gysylltnodau em.

Ar gyfer locales a gyfieithir â llaw, ysgrifennir yr hafan a'r dudalen
cynnwys â llaw (y penawdau wedi'u cyfieithu a llinell gyflwyniad N.0 pob rhan),
ac mae `tools/gen_translated_nav.py` yn adnewyddu'r rhestrau pynciau o benawdau
H1 pynciau'r locale honno.

## Yr hyn nad yw'n ei gyffwrdd

Y fanyleb yng ngwraidd y storfa (`spec/index.md`, `spec/structure.md`, a'i
chymdeithion) yw ffynhonnell y gwir a ysgrifennir â llaw. Nid yw'r cynhyrchydd yn
ei hysgrifennu, ac nid yw'n rhan o'r wefan gyhoeddedig. Os newidiwch y strwythur,
diweddarwch `spec/structure.md` eich hun, yna rhedwch `just nav` ar gyfer y
ffeiliau sy'n deillio a `just test` i gadarnhau bod popeth yn cyd-fynd.
