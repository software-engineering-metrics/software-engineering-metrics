# 3.1 Y fframwaith SPACE

## Trosolwg a chymhelliant

Cafodd **[fframwaith SPACE](https://queue.acm.org/detail.cfm?id=3454124)**,
a gyhoeddwyd yn 2021 gan yr ymchwilwyr Nicole Forsgren, Margaret-Anne
Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, a Jenna
Butler, ei adeiladu i ateb problem benodol: mae metrigau
**[cynhyrchedd datblygwyr](https://en.wikipedia.org/wiki/Productivity)**
rhif-sengl, llinellau o god, cyfrif ymrwymiad, pwyntiau stori, yn cael
eu twyllo'n ddibwys ac yn camarwain yn rheolaidd. Yn lle hynny, mae
SPACE yn cynnig mesur ar draws pum dimensiwn: **Boddhad a lles**,
**Perfformiad**, **Gweithgarwch**, **Cyfathrebu a chydweithio**, ac
**Effeithlonrwydd a llif**. Ni fwriedir i'r un llythyren sengl sefyll ar
ei phen ei hun; cyfraniad gwirioneddol y fframwaith yw'r ddisgyblaeth o
ddal pob un o'r pump mewn golwg gyda'i gilydd, fel na all tîm edrych yn
gynhyrchiol ar un echel tra'n niweidio un arall yn dawel.

Mae hyn yn bwysig oherwydd nid un peth yw cynhyrchedd datblygwyr. Gall
tîm fod yn hynod weithgar (llawer o ymrwymiadau, llawer o pull
requests) tra'n perfformio'n wael (nid yw'r gwaith yn symud y
canlyniadau sy'n bwysig). Gall tîm berfformio'n dda yn y tymor byr tra
bo boddhad yn suddo, dangosydd blaenllaw o'r traul staff a'r cwymp
ansawdd sy'n ymddangos fisoedd yn ddiweddarach. Mewnwelediad SPACE,
sy'n adeiladu'n uniongyrchol ar bennod 1.2 a phennod 1.3 y llyfr hwn,
yw y bydd unrhyw un o'r dimensiynau hyn, wedi'i ddilyn fel targed
annibynnol, yn cael ei dwyllo ar draul y lleill, ac mae'r fframwaith yn
bodoli'n benodol i wneud y cyfaddawd hwnnw'n weladwy cyn iddo wneud
niwed gwirioneddol.

I dimau mawr, mae SPACE yn rhoi geirfa a rennir i arweinyddiaeth ar
gyfer sgwrs sydd fel arall yn ddiofyn i ba bynnag ddimensiwn sydd
haws ei fesur, gweithgarwch bron bob amser. Mae angen fframwaith sy'n
gwrthsefyll y tynfa tuag at gyfrif ymrwymiadau ar sefydliadau menter
sy'n cymharu cynhyrchedd ar draws llawer o dimau; mae angen data
boddhad a lles ar sefydliadau llywodraeth sy'n wynebu pwysau recriwtio
a chadw mewn marchnad lafur gystadleuol lawn cymaint â data cyflenwi,
oherwydd bod colli peiriannydd profiadol i losgi allan yn costio llawer
mwy nag y mae allbwn unrhyw sbrint sengl erioed wedi'i arbed.

## Egwyddorion allweddol

- **Nid yw'r un dimensiwn SPACE sengl yn ddibynadwy ar ei ben ei
  hun.** Daw gwerth y fframwaith yn benodol o fesur nifer ohonynt gyda'i
  gilydd.
- **O leiaf un metrig o o leiaf dri dimensiwn, gan gymysgu ffynonellau
  goddrychol a gwrthrychol, yw'r lleiafswm ar gyfer darlun cytbwys.**
  Nid yw set fetrigau wedi'i thynnu'n gyfan gwbl o un dimensiwn neu un
  math data mewn gwirionedd yn defnyddio SPACE.
- **Gweithgarwch yw'r dimensiwn mwyaf tueddol i gael ei gamddefnyddio
  fel dirprwy annibynnol.** Dyma'r hawsaf i'w fesur a'r lleiaf
  cynrychioladol o werth gwirioneddol ar ei ben ei hun.
- **Mae angen triniaeth wahanol ar fesuriad lefel-tîm a lefel-unigol.**
  Cafodd SPACE ei ddylunio'n bennaf ar gyfer mewnwelediad lefel-tîm a
  lefel-system, nid ar gyfer cardiau sgorio unigol.
- **Mae'r pum dimensiwn yn rhyngweithio.** Gall newid sy'n gwella un
  ddirywio un arall, ac mae'r fframwaith yn bodoli i ddal y cyfaddawd
  hwnnw.

## Argymhellion

### Adeiladwch eich set fetrigau o o leiaf dri dimensiwn cyn ymddiried ynddi

Peidiwch â mabwysiadu SPACE trwy ddewis un dimensiwn ffefryn sengl,
gweithgarwch neu berfformiad fel arfer, a'i alw'n gyflawn. Dewiswch yn
fwriadol o leiaf un metrig o o leiaf dri o'r pum dimensiwn, gan
gymysgu offeryno gwrthrychol (pennod 1.5) â data arolwg goddrychol
(pennod 3.7), cyn cyflwyno unrhyw gasgliad am gynhyrchedd tîm. Y
cyfansoddiad lleiafswm hwn sy'n atal SPACE rhag cwympo'n ôl i'r broblem
dirprwy-sengl yr oedd wedi'i ddylunio i'w datrys.

### Triniwch fetrigau gweithgarwch fel cyd-destun, byth fel y pennawd

Mae cyfrifon ymrwymiad, llinellau o god, a chyfrifon pull request yn
ddata dimensiwn-gweithgarwch SPACE dilys, ond ni ddylent byth fod y
metrig cynradd na'r unig fetrig a gyflwynir am gynhyrchedd tîm.
Defnyddiwch ddata gweithgarwch i ddarparu cyd-destun ar gyfer y
dimensiynau eraill, er enghraifft sylwi bod gostyngiad mewn gweithgarwch
yn cyd-daro â chodiad mewn boddhad oherwydd bod y tîm o'r diwedd wedi
cael lle i dalu dyled dechnegol i lawr, yn hytrach nag fel dyfarniad
annibynnol. Mae pennod 3.4 yn ymdrin â pheryglon penodol y dimensiwn hwn
yn fanwl.

### Cymhwyswch SPACE ar lefel y tîm a'r system, nid lefel yr unigolyn

Mae ymchwil wreiddiol SPACE a'i fabwysiad diwydiannol dilynol fel ei
gilydd yn trin y fframwaith fel lens ar gyfer deall cynhyrchedd tîm a
sefydliadol, nid fel cerdyn sgorio perfformiad unigol. Mae cymhwyso
dimensiynau SPACE i raddio unigolion, yn enwedig y dimensiwn
gweithgarwch, yn ailgreu union y perygl twyllo y mae pennod 1.2 yn
rhybuddio yn ei erbyn ac yn camgymhwyso fframwaith na chafodd erioed ei
ddilysu ar gyfer y defnydd hwnnw.

### Gwyliwch am gyfaddawdau rhwng dimensiynau, nid dim ond symudiad o fewn un

Daw pŵer diagnostig gwirioneddol y fframwaith o wylio sut mae
dimensiynau'n symud yn gymharol i'w gilydd. Mae metrig perfformiad
cynyddol ochr yn ochr â boddhad gostyngol yn arwydd rhybudd sy'n werth
ei archwilio ar unwaith, gan awgrymu cyflymder anghynaliadwy o bosibl.
Mae metrig gweithgarwch cynyddol ochr yn ochr â pherfformiad fflat neu
ostyngol yn awgrymu gwaith-prysur yn hytrach na chynnydd gwirioneddol.
Adolygwch bob un o'r pum dimensiwn gyda'i gilydd ar gadence sefydlog yn
benodol i ddal y patrymau traws-ddimensiwn hyn, nid dim ond i wirio pob
rhif ar ei ben ei hun.

### Cymysgwch gadensau'n briodol ar draws dimensiynau

Mae rhai dimensiynau SPACE yn newid yn araf ac orau eu mesur yn
gyfnodol (boddhad, cylchoedd arolwg chwarterol fel arfer); mae eraill yn
newid yn gyflym ac yn elwa o olrhain amlach, awtomataidd (gweithgarwch,
effeithlonrwydd a llif, y ddau'n bennaf offerynadwy o systemau
presennol). Paru eich cadence mesur â chyfradd newid naturiol pob
dimensiwn yn hytrach na gorfodi pob metrig ar yr un amserlen adrodd.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Set fetrigau un-dimensiwn (gweithgarwch fel arfer) | Syml, rhad, cyfarwydd | Yn hawdd ei dwyllo, yn colli cost ddynol arferion anghynaliadwy |
| Mabwysiad SPACE pum dimensiwn llawn | Cytbwys, yn gwrthsefyll twyllo un-echel, yn dal cyfaddawdau | Angen mwy o offeryno a buddsoddiad arolwg |
| Cymhwysiad SPACE lefel-tîm | Yn cyfateb â defnydd dilyswyd y fframwaith, yn diogelu unigolion rhag camgymhwysiad | Ni all ateb cwestiynau lefel-unigol y mae arweinyddiaeth weithiau eu heisiau |
| Cymhwysiad SPACE lefel-unigol | Yn teimlo'n fwy uniongyrchol weithredadwy i rai rheolwyr | Yn camgymhwyso'r fframwaith; perygl twyllo ac ysbryd cryf |

Y tensiwn canolog yw **cyflawnrwydd mesur yn erbyn cost a chymhlethdod**.
Mae gweithrediad SPACE llawn, cytbwys angen mwy o offeryno, mwy o
ymdrech dylunio arolwg, a mwy o ddisgyblaeth i adolygu pob un o'r pum
dimensiwn gyda'i gilydd na dangosfwrdd gweithgarwch syml. Datryswch y
tensiwn trwy ddechrau â set wirioneddol leiafswm ond cytbwys, o leiaf un
metrig o o leiaf dri dimensiwn, yn hytrach na naill ai osgoi disgyblaeth
y fframwaith yn gyfan gwbl neu geisio fersiwn llethol, wedi'i offeryno'n
llawn o bob un o'r pum dimensiwn ar y diwrnod cyntaf.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A yw ein set fetrigau cynhyrchedd gyfredol yn tynnu o o leiaf dri
   dimensiwn SPACE, neu a yw'n cael ei dominyddu gan ddata gweithgarwch
   yn unig?** Archwiliwch eich dangosfwrdd yn erbyn y pum dimensiwn yn
   benodol; mae'r rhan fwyaf o sefydliadau, o'u hasesu'n onest, yn llawer
   mwy trwm-weithgarwch nag y maent yn sylweddoli.

2. **A ydym erioed wedi gweld un dimensiwn SPACE yn gwella tra bo un
   arall yn dirywio'n dawel, ac a wnaethom sylwi ar y pryd?** Dyma union
   y cyfaddawd traws-ddimensiwn y mae'r fframwaith wedi'i ddylunio i'w
   ddal. Edrychwch yn ôl dros y flwyddyn ddiwethaf am gyfnod pan wellodd
   metrigau cyflenwi a gofynnwch beth ddangosodd data boddhad neu les
   yn ystod yr un ffenestr.

3. **A yw data SPACE erioed yn cael ei ddefnyddio, hyd yn oed yn
   anffurfiol, i werthuso neu gymharu unigolion yn hytrach na thimau?**
   Mae hyn yn camgymhwyso'r fframwaith ac yn gwahodd twyllo. Byddwch yn
   onest ynghylch sut mae'r metrigau hyn yn cael eu trafod mewn
   gwirionedd yn ymarferol, nid dim ond sut mae'r polisi'n nodi y
   dylent gael eu defnyddio.

4. **Sut fyddem yn sylwi petai tîm wedi gwella ei fetrigau perfformiad
   ar draul cyflymder anghynaliadwy?** Heb ddata boddhad a lles yn cael
   ei adolygu ochr yn ochr â data perfformiad, mae'r math hwn o
   gyfaddawd yn anweledig tan iddo ymddangos fel traul staff neu gwymp
   ansawdd fisoedd yn ddiweddarach.

5. **Beth yw ein cadence mesur ar gyfer pob un o'r pum dimensiwn, ac a
   yw'n cyfateb â pha mor gyflym y mae pob dimensiwn mewn gwirionedd yn
   newid?** Mae arolwg boddhad chwarterol wedi'i parejo â data
   gweithgarwch amser-real yn anghyfatebiad rhesymol mewn cadence; nid
   yw'r un cadence wedi'i gymhwyso i bob un o'r pump heb feddwl.

6. **Petai rheolwr peirianneg newydd yn ymuno yfory ac yn edrych dim
   ond ar ein dangosfwrdd, a fyddent yn cael darlun cytbwys o
   gynhyrchedd tîm, neu un sgiw?** Mae hwn yn brawf ymarferol o pa un a
   yw eich set fetrigau wedi cyflawni cydbwysedd SPACE mewn gwirionedd,
   neu a yw'n dim ond ystumio tuag at y fframwaith tra'n aros yn
   dominyddu gan weithgarwch yn ymarferol.

## Golwg sector

**Cwmni newydd.** Mae gweithrediad pum dimensiwn llawn fel arfer yn
ormodedd ar gyfer llond llaw o beirianwyr sy'n siarad bob dydd ac yn
gallu synhwyro iechyd boddhad a chydweithio'n uniongyrchol. Yr un
arferiad sy'n werth ei fabwysiadu'n gynnar yw gwrthsefyll y tynfa tuag
at fetrigau gweithgarwch-yn-unig wrth i'r tîm ddechrau tyfu heibio'r
maint lle mae ymwybyddiaeth anffurfiol yn cwmpasu popeth.

**Busnes bach.** Heb swyddogaeth dadansoddeg-pobl bwrpasol, cadwch bethau'n
syml: parejwch pa ddata cyflenwi bynnag sydd gennych eisoes (pennod
2.10) â check-in byr, anffurfiol, rheolaidd ar foddhad, hyd yn oed
arolwg pyls un-cwestiwn syml. Mae'r parejiad lleiafswm hwnnw eisoes yn
dal disgyblaeth graidd y fframwaith yn well o lawer na dangosfwrdd
gweithgarwch-yn-unig.

**Menter.** Dyma lle mae'r fframwaith llawn yn ennill ei gymhlethdod.
Safonwch set fetrigau SPACE gytbwys ar draws timau fel y gall
arweinyddiaeth gymharu cynhyrchedd yn deg yn hytrach na bod yn ddiofyn i
ba bynnag dîm sydd â'r graff ymrwymiad mwyaf trawiadol yr olwg, a
buddsoddwch yn yr isadeiledd arolwg y mae pennod 3.7 yn ymdrin ag ef i
wneud data boddhad a chydweithio mor ddibynadwy â'r offeryno gwrthrychol.

**Llywodraeth.** Mae pwysau recriwtio a chadw, yn enwedig lle na all
cyflog sector cyhoeddus gystadlu bob amser â chynigion sector preifat, yn
gwneud data boddhad a lles yn bryder strategol gwirioneddol, nid
ychwanegiad meddal. Triniwch SPACE lawn mor ddifrifol â metrigau
cyflenwi mewn cynllunio gweithlu a chyfiawnhad cyllideb, gan fod cost
colli peiriannydd profiadol i losgi allan yn cael ei fesur mewn misoedd
o wybodaeth sefydliadol na all disodliad ei ddarparu ar unwaith.

## Enghreifftiau

**Menter.** Roedd arweinyddiaeth peirianneg cwmni meddalwedd wedi bod
yn olrhain cyfrifon ymrwymiad a phwyntiau stori a gwblhawyd fel ei brif
signal cynhyrchedd am flynyddoedd. Ar ôl mabwysiadu set fetrigau SPACE
lawnach, gan gynnwys arolwg boddhad chwarterol a dadansoddiad
rhwydwaith-cydweithio (pennod 3.5), darganfu arweinyddiaeth fod gan y
tîm â'r rhifau gweithgarwch uchaf hefyd y sgoriau boddhad isaf a'r
gyfradd traul staff wirfoddol uchaf dros y flwyddyn ganlynol. Roedd y
rhifau gweithgarwch ar eu pen eu hunain wedi bod yn camarwain yn
weithredol; arweiniodd y darlun llawnach at ostyngiad bwriadol yng
ngwaith cydamserol y tîm hwnnw (egwyddor gwaith-ar-y-gweill pennod 2.5
wedi'i chymhwyso ar y lefel ddynol) ac adferiad mesuradwy mewn boddhad
ac, yn y pen draw, perfformiad cynaliadwy.

**Llywodraeth.** Mabwysiadodd asiantaeth gwasanaeth digidol
cenedlaethol, oedd yn cystadlu am dalent beirianneg yn erbyn cyflogau
sector preifat na allai eu cyfateb, set fetrigau SPACE gytbwys yn
benodol i ddadlau'r achos dros fuddsoddiadau cadw an-ariannol: offer
gwell, amser ffocws diogel, a llai o ffrithiant proses. Dangosodd data
arolwg boddhad wedi'i gyfuno â metrigau effeithlonrwydd a llif (pennod
3.6) mai amlder ymyrraeth, nid cyflog, oedd y rhagfynegydd cryfaf o
fwriad-i-adael mewn data cyfweliad ymadael. Roedd buddsoddiad dilynol
yr asiantaeth mewn polisi amser-ffocws diogel, wedi'i gyfiawnhau'n
uniongyrchol gan y data SPACE hwn, yn cydberthyn â gwelliant mesuradwy
mewn cadw dros y deunaw mis canlynol.

## Achos busnes: cymhellion, ROI, a TCO

Traul staff osgowyd a chwymp ansawdd wedi'i yrru gan losgi allan osgowyd
yw'r enillion ar fabwysiadu SPACE yn llawn, y ddau'n llawer drutach na
chost offeryno'r fframwaith. Gall set fetrigau gweithgarwch-yn-unig
edrych yn rhagorol am flwyddyn neu ddwy hyd nes i'r gost ddynol ddal i
fyny ar unwaith, ac ar y pwynt hwnnw mae cost disodli arbenigedd
coll ac ailadeiladu iechyd tîm yn gwneud i unrhyw enillion cynhyrchedd
yr oedd y set fetrigau gul erioed yn ymddangos ei ddangos edrych yn fach.

Mae cost cyfanswm perchnogaeth yn cynnwys isadeiledd arolwg (pennod 3.7)
a'r ddisgyblaeth o adolygu pob un o'r pum dimensiwn gyda'i gilydd yn
hytrach na bod yn ddiofyn i ba bynnag sydd hawsaf. Mae'r gost honno'n
werth ei thalu mewn gwirionedd: mae'r enghraifft menter uchod yn dangos
patrwm gwirioneddol, darganfyddadwy, gweithgarwch uchel yn cuddio
perygl traul staff uchel, na fyddai set fetrigau gulach erioed wedi'i
ddatgelu tan i'r niwed gael ei wneud eisoes.

## Gwrth-batrymau a pheryglon

- **Mabwysiadu SPACE mewn enw'n unig tra'n aros yn ddominyddu gan
  weithgarwch yn ymarferol:** y modd methiant mwyaf cyffredin, ac mae'n
  trechu holl bwrpas y fframwaith.
- **Cymhwyso dimensiynau SPACE at gardiau sgorio unigol:** yn
  camgymhwyso fframwaith a ddilyswyd ar gyfer mewnwelediad lefel-tîm a
  lefel-system.
- **Adolygu dimensiynau ar wahân yn hytrach na gwylio am gyfaddawdau
  traws-ddimensiwn:** yn colli'r patrwm y mae SPACE wedi'i ddylunio'n
  benodol i'w ddal.
- **Gorfodi pob dimensiwn ar yr un cadence mesur:** yn gwastraffu
  ymdrech ar ddimensiynau sy'n newid yn araf ac yn tan-fesur rhai sy'n
  newid yn gyflym.
- **Trin sgôr arolwg boddhad sengl fel un digonol heb ddata
  gwrthrychol:** yn colli'r cydbwysedd rhwng ffynonellau goddrychol a
  gwrthrychol y mae'r fframwaith yn galw amdano.
- **Anwybyddu tuedd sy'n gwaethygu mewn un dimensiwn oherwydd bod un
  arall yn edrych yn dda:** yr union fethiant y mae disgyblaeth
  traws-ddimensiwn y fframwaith yn bodoli i'w atal.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Mesurir cynhyrchedd trwy fetrigau gweithgarwch
  yn unig, heb ddim data boddhad, cydweithio, nac effeithlonrwydd yn
  cael ei gasglu.
- **Lefel 2, Datblygu:** Mesurir rhai dimensiynau ychwanegol yn
  anffurfiol, ond nid oes adolygiad traws-ddimensiwn cyson na safon
  cyfansoddiad-lleiafswm.
- **Lefel 3, Safoni:** Cymhwysir set fetrigau gytbwys sy'n tynnu o o
  leiaf dri dimensiwn SPACE yn gyson ar lefel y tîm ar draws y
  sefydliad.
- **Lefel 4, Rheoli:** Adolygir pob un o'r pum dimensiwn gyda'i gilydd
  ar gadence rheolaidd, archwilir cyfaddawdau traws-ddimensiwn yn
  weithredol, ac mae'r fframwaith yn llywio penderfyniadau staffio a
  phroses gwirioneddol.
- **Lefel 5, Cerddorfaru:** Mae data SPACE yn llunio cynllunio gweithlu
  a buddsoddiad cadw'n uniongyrchol, a gall y sefydliad bwyntio at
  ymyriadau penodol, wedi'u llywio gan batrymau traws-ddimensiwn, a
  wellodd gyflenwi a lles datblygwyr gyda'i gilydd mewn ffordd
  fesuradwy.

## Syniadau ar gyfer trafodaeth

1. Pa ddimensiwn SPACE sydd fwyaf tan-fesuredig yn ein set fetrigau gyfredol?
2. A ydym erioed wedi gweld gweithgarwch tîm yn codi tra bo boddhad yn gostwng yn dawel?
3. Sut fyddem yn dal tîm yn masnachu cynaliadwyedd tymor-hir am allbwn tymor-byr heddiw?
4. A yw unrhyw ddata cyfagos-SPACE yn cael ei ddefnyddio ar hyn o bryd i werthuso unigolion yn hytrach na thimau?
5. Sut olwg fyddai ar ddangosfwrdd cynhyrchedd wirioneddol gytbwys i ni, yn benodol?

## Prif gasgliadau

- Mae SPACE yn cwmpasu pum dimensiwn, **Boddhad a lles, Perfformiad,
  Gweithgarwch, Cyfathrebu a chydweithio, ac Effeithlonrwydd a llif**,
  ac nid yw'r un sengl yn ddibynadwy ar ei ben ei hun.
- Adeiladwch set fetrigau o **o leiaf dri dimensiwn**, gan gymysgu
  ffynonellau data gwrthrychol a goddrychol.
- Triniwch **fetrigau gweithgarwch fel cyd-destun**, byth fel y signal
  cynhyrchedd pennawd (pennod 3.4).
- Cymhwyswch SPACE ar **lefel y tîm a'r system**, nid fel cerdyn sgorio
  unigol.
- Adolygwch ddimensiynau gyda'i gilydd, gan wylio am **gyfaddawdau
  traws-ddimensiwn**, nid dim ond symudiad o fewn yr un sengl.

## Cyfeiriadau a darllen pellach

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, a Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021): y papur fframwaith SPACE
  gwreiddiol.
- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (y sylfaen ymchwil a rennir â
  metrigau DORA).
- *Peopleware: Productive Projects and Teams*, gan Tom DeMarco a
  Timothy Lister (yr achos clasurol dros drin cynhyrchedd datblygwyr
  fel cwestiwn dynol, nid un mecanyddol yn unig).
- *Drive: The Surprising Truth About What Motivates Us*, gan Daniel H.
  Pink (ymchwil cymhelliant sy'n berthnasol i fesur boddhad a lles).
