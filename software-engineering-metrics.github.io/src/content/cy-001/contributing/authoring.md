# Ysgrifennu: ysgrifennu a golygu pynciau

## Cyn i chi ysgrifennu

- Darllenwch y [rheolau arddull](style-rules.md) a `spec/conventions.md` yng
  ngwraidd y storfa.
- Gwiriwch `spec/structure.md` yng ngwraidd y storfa i weld ble mae'r pwnc yn
  ffitio a pha rif a ddylai fod ganddo.

## Ysgrifennu pwnc newydd

1. Dewiswch y rhan a'r rhif degol rhydd nesaf yn y rhan honno. Mae'r rhifo'n
   gyfagos, felly mae pwnc newydd fel arfer yn cymryd y rhif nesaf ar ôl yr
   olaf yn ei ran.
2. Crëwch `locales/en-gb-oxendict/topics/PP-CC-slug.md` (rhagddodiad wedi'i
   badio â sero, wedi'i wahanu â chysylltnod, er enghraifft `02-01-...`) o'r
   [templed pwnc](chapter-template.md). Ysgrifennwch ef mewn sillafu Rhydychen
   (gweler `spec/oxford-spelling.md`); peidiwch byth â golygu'r tair locale arall
   yn uniongyrchol.
3. Ysgrifennwch i'r templed. Mae angen ei holl adrannau ar bob pwnc cynnwys:
   trosolwg, egwyddorion allweddol, argymhellion, cyfnewidiadau (gyda thabl),
   cwestiynau trafod, lens sector (cwmni newydd, busnes bach, menter,
   llywodraeth), enghreifftiau (un menter ac un llywodraeth), achos busnes,
   gwrthbatrymau, model aeddfedrwydd pum lefel, syniadau i'w trafod, siopau
   cludfwyd allweddol, a chyfeiriadau.
4. Enwch y llwybr ystumio. Mae angen ateb eglur ar bob teulu metrigau i "sut
   mae tîm yn gwneud i'r rhif hwn edrych yn dda heb wella'r hyn y mae'n ei
   fesur, a pha reilen ddiogelwch sy'n dal hynny" (gweler pwnc 1.2).
5. Diffiniwch dermau wrth eu defnyddio gyntaf. Ychwanegwch gysylltiadau
   Wikipedia at gysyniadau allweddol wrth eu crybwyll gyntaf, mewn rhyddiaith yn
   unig.
6. Croesgyfeiriwch at bynciau cysylltiedig yn ôl rhif degol, er enghraifft
   "(pwnc 2.1)."
7. Ychwanegwch y pwnc at `spec/structure.md`.
8. Os yw cyflwyniad y rhan (N.0) yn rhestru ei phynciau, ychwanegwch bwled yno.
9. Rhedwch `python3 tools/localize.py` i ddeillio'r pwnc i `en-001`, `en-gb`,
   ac `en-us`.
10. Rhedwch `just nav`, yna `just test`.

## Golygu pwnc sy'n bodoli

- Cadwch drefn yr adrannau a'r penawdau'n gyfan. Mae'r profion yn gwirio bod
  gan bynciau cynnwys bob adran ofynnol o hyd.
- Cadwch ddiffiniadau mewnlin, cysylltiadau Wikipedia, tablau a'r rhestr
  gyfeiriadau oni bai bod y golygiad yn ymwneud â hwy'n benodol.
- Peidiwch â chyflwyno cysylltnodau em na'r ymadroddion gwaharddedig. Os ydych
  yn aralleirio, ailysgrifennwch yn hytrach na gollwng cysylltnod i mewn.
- Rhedwch `python3 tools/localize.py` wedyn i ailddeillio `en-001`, `en-gb`,
  ac `en-us` o'r ffynhonnell `en-gb-oxendict` a olygwyd.

## Ailenwi neu ailrifo

- Ailenwch y ffeil yn `locales/en-gb-oxendict/`, diweddarwch ei phennawd
  `# N.M Title`, diweddarwch `spec/structure.md`, a diweddarwch bob
  croesgyfeirnod sy'n pwyntio at yr hen rif.
- Rhedwch `python3 tools/localize.py` i ailenwi'r ffeil yn y tair locale arall
  hefyd (mae'n deillio'r pedair o'r un llwybrau cymharol).
- Rhedwch `just nav` a `just test`. Bydd y profion yn nodi anghydweddiad rhwng yr
  H1 ac enw'r ffeil, bwlch rhifo, locale sydd wedi drifftio o'r ffynhonnell, neu
  gyswllt wedi torri.

## Nodyn atgoffa am y naws

Ysgrifennwch fel cydweithiwr profiadol sydd eisiau i'r darllenydd lwyddo.
Cynnes, plaen, uniongyrchol, a defnyddiol. Brawddegau byr. Dim llanw.
