# Beth yw metrigau peirianneg meddalwedd?

Mae [metrigau peirianneg meddalwedd](https://en.wikipedia.org/wiki/Software_metric)
yn fesurau meintiol a ddefnyddir i werthuso, olrhain a gwella ansawdd,
effeithlonrwydd ac effaith prosesau, cynhyrchion a thimau datblygu meddalwedd.
O'u defnyddio'n dda, maent yn gweithredu fel offer diagnostig systemig: maent yn
datgelu tagfeydd gweithredol, yn cyfiawnhau mynd i'r afael â dyled dechnegol, ac
yn alinio gweithgarwch peirianneg â chanlyniadau busnes pendant. O'u defnyddio'n
wael, maent yn ystumio ymddygiad, yn niweidio ymddiriedaeth, ac yn gwobrwyo'n
union y pethau anghywir.

Mae'r llyfr hwn yn bodoli oherwydd bod y rhan fwyaf o dimau'n estyn am fetrigau
cyn iddynt benderfynu *at ba ddiben* y mae metrig. Mae dangosfwrdd yn llenwi â
phopeth sy'n hawdd ei gyfrif, mae tîm arweinyddiaeth yn dechrau gofyn "ydy'r
rhif hwn i fyny neu i lawr," ac o fewn chwarter mae'r tîm yn gwneud y gorau o'r
rhif yn hytrach na'r canlyniad yr oedd i fod i'w gynrychioli. Mae gan y methiant
hwnnw enw, [Deddf Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): pan
fo mesur yn dod yn darged, mae'n peidio â bod yn fesur da. Ysgrifennwyd pob pwnc
yn y llyfr hwn gyda'r ddeddf honno'n sefyll y tu ôl iddo.

## Y ddau fframwaith sylfaenol

Mae'r diwydiant wedi cytuno'n fras ar ddau fframwaith a gefnogir gan ymchwil i
fesur cyflenwi peirianneg ac iechyd tîm.

Mae **[metrigau DORA](https://dora.dev/guides/dora-metrics/)** (o'r rhaglen
DevOps Research and Assessment) yn mesur trwybwn a sefydlogrwydd system: amlder
defnyddio, amser arwain ar gyfer newidiadau, cyfradd methiant newid, ac amser
adfer ar ôl defnyddio aflwyddiannus. Mae Rhan 2 y llyfr hwn yn ymdrin â'r
pedwar mewn pwnc cyfeirio pwrpasol, ochr yn ochr â'r Fframwaith Llif (Flow
Framework) a ddefnyddir i drefnu metrigau cyflenwi a llif yn ehangach, oherwydd
bod DORA yn mesur mecaneg y biblinell yn dda ond yn dweud dim am ba fath o werth
sy'n symud trwyddi.

Mae **[fframwaith SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, a
grëwyd gan ymchwilwyr yn Microsoft, GitHub a Phrifysgol Victoria, yn gwrthbwyso
trwybwn crai â phrofiad datblygwyr ar draws pum dimensiwn: bodlonrwydd a
llesiant, perfformiad, gweithgaredd, cyfathrebu a chydweithio, ac effeithlonrwydd
a llif. Mae Rhan 3 yn ei drafod yn fanwl.

Y tu hwnt i'r ddau fframwaith hyn, mae timau'n olrhain metrigau lleol wedi'u
grwpio yn ôl maes: metrigau cod ac ansawdd (Rhan 4), metrigau cynnyrch a busnes
(Rhan 5), a metrigau dibynadwyedd, gweithrediadau a diogelwch (Rhan 6). Mae
Rhan 7 yn mynd i'r afael â newid sydd eisoes ar y gweill: mae offer deallusrwydd
artiffisial cynhyrchiol wedi gwneud allbwn cod crai bron yn rhad ac am ddim, sy'n
golygu nad yw sawl metrig y mae'r diwydiant wedi dibynnu arnynt ers degawd yn
golygu'r hyn yr oeddent yn arfer ei olygu.

## I bwy y mae hwn

Y prif gynulleidfa yw'r bobl sy'n dewis beth y mae tîm yn ei fesur a pham:
arweinwyr peirianneg, peirianwyr staff a phrifathrawol, timau llwyfan a DevOps,
a rheolwyr rhaglenni a chynnyrch sy'n adeiladu dangosfwrdd neu gerdyn sgorio
am y tro cyntaf, neu'n trwsio un sydd wedi dechrau ystumio ymddygiad. Yr ail
gynulleidfa yw unrhyw beiriannydd sydd eisiau deall pam y mae ei sefydliad yn
olrhain yr hyn y mae'n ei olrhain, a sut i ymateb pan gamddefnyddir metrig.

## Sut i'w ddarllen

Dechreuwch yma, yna darllenwch y [cyflwyniad](cyflwyniad.md) i weld sut y
trefnir y llyfr, neu ewch yn syth i'r [cynnwys](cynnwys.md). Mae pob
pwnc yn sefyll ar ei ben ei hun: mae'n nodi ei egwyddorion yn gyntaf, yn rhoi
argymhellion pendant, yn enwi sut y caiff y metrig y mae'n ymdrin ag ef ei
ystumio, ac yn gorffen gyda model aeddfedrwydd, cwestiynau trafod a
chyfeiriadau. Nid oes angen i chi ddarllen y llyfr o glawr i glawr i'w
ddefnyddio.
