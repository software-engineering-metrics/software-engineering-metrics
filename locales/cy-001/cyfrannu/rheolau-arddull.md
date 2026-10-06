# Rheolau arddull (a rennir, gorfodadwy)

Arddull y tŷ mewn un lle. Mae eitemau a farciwyd "(test)" yn cael eu gorfodi gan
`tests/validate.py`; mae tramgwydd yn methu'r adeiladu. Y fersiwn naratif llawn
yw `spec/conventions.md` yng ngwraidd y storfa.

## Rheolau caled

- **Dim cysylltnodau em.** Peidiwch byth â defnyddio "—" (U+2014). Defnyddiwch
  goma, colon, cromfachau, neu ddwy frawddeg. Caniateir cysylltnodau en "–" yn
  unig mewn ystodau rhifol fel `1–9` neu `2.1–2.8`. (test)
- **Dim ymadroddion ystrydebol.** Peidiwch â defnyddio "not only ... but also",
  "but also", na "load-bearing". Osgowch "It's important to note", "In today's
  fast-paced world", "It's crucial to consider", "It appears that", "One could
  argue", a'r fformiwla "it's not just X, it's Y". (test, ar gyfer y tri
  cyntaf)
- **Diffiniwch dermau wrth eu defnyddio gyntaf.** Ehangwch acronymau a
  diffiniwch jargon y tro cyntaf y mae pob pwnc yn eu defnyddio, er enghraifft
  "mean time to recovery (MTTR)."
- **Cysylltwch gysyniadau allweddol â Wikipedia** wrth eu crybwyll gyntaf, unwaith
  y pwnc, mewn rhyddiaith yn unig. Ffurf: `[term](https://en.wikipedia.org/wiki/Article_Title)`.
  Byth mewn penawdau, tablau, cod, na'r adran gyfeiriadau. (mae ffurf y
  cyswllt yn brawf)
- **Cyfeiriadau go iawn yn unig.** Awdur a theitl gweithiau gwirioneddol. Dim
  teitlau, awduron nac URLau dyfeisiedig.
- **Enwch y llwybr ystumio.** Mae pwnc teulu metrigau yn nodi sut y caiff y
  metrig ei ystumio a pha reilen ddiogelwch sy'n dal hynny (pwnc 1.2).

## Llais

- Cynnes, uniongyrchol, calonogol. Cyfeiriwch at y darllenydd fel "chi."
  Brawddegau byr, geiriau plaen. Arweiniwch gyda'r pwynt.
- Penderfynol ac ymarferol. Niwtral o ran gwerthwyr. Enwch gynhyrchion fel
  enghreifftiau ffeithiol yn unig.

## Strwythur (test)

- Mae pynciau cynnwys yn defnyddio trefn union yr adrannau yn
  [`chapter-template.md`](templed-pwnc.md).
- Y pennawd cyntaf yw `# N.M Title` (rhif pwnc degol), ac mae'n cyfateb i
  ragddodiad `PP-CC` wedi'i badio â sero y ffeil.
- Mae'r rhifo ym mhob rhan yn gyfagos ac yn dechrau ar N.0.

## Ar ôl golygu

- Os newidioch set y pynciau, diweddarwch `spec/structure.md` a rhedwch
  `just nav`.
- Rhedwch `just test` bob amser.
