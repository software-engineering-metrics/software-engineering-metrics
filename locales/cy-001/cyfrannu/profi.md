# Profi: y gyfres ddilysu

## Ei rhedeg

```sh
just test
# or
python3 tests/validate.py
```

Mae'n rhedeg o unrhyw le ac nid oes angen dim ond Python 3 arni (dim pecynnau
trydydd parti, dim rhwydwaith). Mae'n argraffu un llinell fesul gwiriad ac yn
gadael gyda chod nad yw'n sero os bydd unrhyw wiriad yn methu, felly mae'n
gweithio mewn CI ac fel bachyn cyn-ymrwymo.

## Beth y mae'n ei wirio

- **Y nifer disgwyliedig o bynciau** (y cysonyn ar frig y sgript).
- **Rhifo cyfagos** ym mhob rhan, gan ddechrau ar N.0.
- **Mae'r H1 yn cyfateb i'r rhif degol yn enw'r ffeil** ar gyfer pob pwnc.
- **Mae teitlau H1 yn cyfateb i `spec/structure.md`** nod am nod, nid y degol
  arweiniol yn unig.
- **Mae'r adrannau gofynnol yn bresennol** ym mhob pwnc cynnwys (Rhannau 1 hyd
  8, pwnc N.1 ac i fyny), **yn nhrefn union y templed**.
- **Isafswm nifer geiriau** ar gyfer pob pwnc cynnwys (1,500 gair), gyda rhestr
  ganiatáu yn y sgript ar gyfer eithriadau bwriadol.
- **Dim cysylltnodau em** mewn unrhyw ffeil Markdown.
- **Cysylltnodau en rhwng digidau yn unig**, felly mae "2.1–2.8" yn pasio ac
  mae popeth arall yn methu.
- **Dim ymadroddion gwaharddedig** ("not only", "but also", "load-bearing").
- **Mae pob cyswllt `.md` mewnol yn datrys.**
- **Mae croesgyfeirnodau rhyddiaith yn pwyntio at bynciau go iawn**: mae
  cyfeiriad at rif pwnc heb ffeil gyfatebol ar y ddisg yn methu, gan ddefnyddio'r
  un patrwm cyfeirnod ag y mae cysylltu awtomatig pynciau'r wefan gyhoeddedig yn
  ei ddefnyddio.
- **Mae cysylltiadau Wikipedia wedi'u ffurfio'n gywir**
  (`https://en.wikipedia.org/wiki/...`).
- **Mae `spec/structure.md` yn cyfateb i'r ffeiliau ar y ddisg**, i'r ddau
  gyfeiriad.
- **Mae README, yr hafan a'r dudalen gynnwys yn cysylltu â phob pwnc.**

## Pan fydd gwiriad yn methu

Mae'r llinell sy'n methu yn enwi'r ffeil a'r broblem. Atgyweiriadau cyffredin:

- Cafwyd hyd i gysylltnod em: ailysgrifennwch y frawddeg i ddileu'r "—". Peidiwch
  â'i dileu'n unig.
- Adran ar goll: ychwanegwch yr adran `##` goll o'r templed pwnc.
- Anghydweddiad strwythur: ychwanegoch neu ailenwoch bwnc heb ddiweddaru
  `spec/structure.md`, neu i'r gwrthwyneb. Dewch â hwy yn ôl i gyd-fynd.
- Cyswllt wedi torri: trwsiwch y llwybr, neu ei ddiweddaru ar ôl ailenwi.
- Bwlch rhifo: ailrifwch fel bod y rhan yn gyfagos o N.0.

## Y tu hwnt i'r gyfres ddilysu

- Mae `just spell` yn rhedeg [codespell](https://github.com/codespell-project/codespell)
  dros y storfa. Yr adran `[tool.codespell]` yn `pyproject.toml` yw'r
  ffurfwedd, gan gynnwys y rhestr anwybyddu positifau ffug.
- Mae `just stats` yn argraffu adroddiad Markdown (cyfrifon geiriau fesul pwnc,
  pynciau tenau, cysylltiadau Wikipedia, cofnodion cyfeiriadau) o `tools/stats.py`.

## Integreiddio parhaus

- Mae `.github/workflows/test.yml` yn rhedeg ar bob cais tynnu ac ar wthiadau i
  ganghennau nad ydynt yn brif: y gyfres ddilysu a codespell. Nid yw'r storfa hon
  yn adeiladu nac yn defnyddio gwefan; mae'r rendro'n digwydd yn y storfa
  `software-engineering-metrics.github.io` ar wahân.
- Mae `.github/workflows/links.yml` yn gwirio cysylltiadau allanol bob wythnos
  gyda [lychee](https://github.com/lycheeverse/lychee) (patrymau anwybyddu yn
  `.lycheeignore`) ac yn cadw'r canlyniadau mewn un issue "Link checker report".
  Cedwir cysylltiadau allanol allan o lwybr y cais tynnu yn fwriadol.

## Heb ei gwmpasu gan y profion

Mae'r gyfres yn gwirio strwythur ac arddull, nid gwirionedd. Ni all ddweud a yw
cyfeiriad yn real nac a yw rhyddiaith yn gywir. Gwiriwch ddyfyniadau a ffeithiau
â llaw neu gyda phas ymchwil. Mae angen gwiriad rhwydwaith hefyd i weld a yw
cyswllt Wikipedia yn bodoli (yn hytrach na'i ffurf), y mae'r gyfres yn ei
adael allan yn fwriadol fel y gall redeg all-lein.
