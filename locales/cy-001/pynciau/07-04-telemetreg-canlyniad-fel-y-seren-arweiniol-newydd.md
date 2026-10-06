# 7.4 Telemetreg canlyniad fel y seren arweiniol newydd

## Trosolwg a chymhelliant

Mae'r pwnc hwn yn cau Rhan 7, ac mewn ystyr wirioneddol yn cau'r
ddadl y mae'r llyfr cyfan hwn wedi bod yn ei hadeiladu ers pwnc 1.3,
â hawliad sengl, uniongyrchol: wrth i ddeallusrwydd artiffisial cynhyrchiol (AI) wneud allbwn crai'n
rhad, mae **[telemetreg](https://en.wikipedia.org/wiki/Telemetry)
canlyniad**, mesuriad parhaus, wedi'i offryno o ganlyniadau
gwirioneddol yn hytrach na gweithgarwch neu allbwn, yn peidio â bod yn
un arfer da ymhlith sawl un ac yn dod yn egwyddor drefnu y mae'n rhaid
adeiladu rhaglen fetrigau o'i chwmpas. Nid dyma syniad newydd sy'n cael
ei gyflwyno am y tro cyntaf yma. Dyma'r syniad a gyflwynodd pwnc 1.3
yn rhan agoriadol y llyfr hwn, wedi'i gyflwyno nawr fel yr ymateb
angenrheidiol, yn hytrach na dim ond dewisol, i symudiad technolegol
sydd wedi gwneud pob dewis arall yn fwy peryglus nag yr arferai fod.

Mae'r rhesymeg yn uniongyrchol. Cyn AI cynhyrchiol, roedd cyfaint
allbwn yn ddirprwy amherffaith ond nid diwerth ar gyfer ymdrech ac, yn
llac, ar gyfer gwerth; roedd tîm a ryddhaodd fwy o nodweddion, ar y
lleiaf, wedi gwneud mwy o waith, hyd yn oed os nad oedd y gwaith
hwnnw'n gywir bob amser. Mae AI cynhyrchiol yn torri hyd yn oed y
cysylltiad llac hwnnw: nid yw cyfaint allbwn bellach yn nodi ymdrech yn
ddibynadwy, gan y gall offeryn ei gynhyrchu mewn eiliadau, ac yn sicr nid
yw'n nodi gwerth, gan i bwnc 7.3 ddangos y gall allbwn chwyddedig
gyd-fodoli ag ansawdd dirywiedig. Y metrigau sy'n goroesi'r symudiad
hwn yn gyfan yw'n union y rhai y mae'r llyfr hwn wedi pwysleisio
adeiladu tuag atynt o'i bynciau agoriadol: cyfradd diffygion dianc
(pwnc 5.1), mabwysiad nodwedd (pwnc 5.2), canlyniadau cwsmer a
busnes (pwnc 5.3), dibynadwyedd (Rhan 6), a llesiant datblygwyr (Rhan 3).
Nid yw'r un o'r rhain yn dibynnu ar sut y cynhyrchwyd y cod sylfaenol;
mae pob un ohonynt yn mesur yr hyn a ddigwyddodd mewn gwirionedd o
ganlyniad.

I dimau mawr, mae gan ddadl y pwnc hwn ganlyniadau uniongyrchol,
ymarferol ar gyfer sut y dylid adeiladu ac ailadeiladu rhaglen fetrigau
wrth symud ymlaen. Dylai sefydliadau menter sy'n ailddylunio eu
dangosfyrddau peirianneg o gofio mabwysiadu AI bwyso buddsoddiad yn
benodol tuag at yr isadeiledd telemetreg-canlyniad y mae'r pwnc hwn
yn ei ddisgrifio; dylai sefydliadau llywodraeth, sy'n gwerthuso offeryno
AI a'r rhaglenni technoleg ehangach y mae wedi'i ymgorffori ynddynt fel
ei gilydd, ddal y ddau i'r un safon telemetreg-canlyniad y mae'r pwnc
hon yn ei hargymell fel y llinell sylfaen ar gyfer unrhyw werthusiad
credadwy, gwrth-ddyfodol.

## Egwyddorion allweddol

- **Mae telemetreg canlyniad yn dod yn angenrheidiol, nid dim ond yn
  ddewisol, unwaith y mae allbwn yn rhad.** Dyma egwyddor sylfaen
  pwnc 1.3, yn frys nawr yn hytrach nag uchelgeisiol.
- **Y metrigau sy'n goroesi'r symudiad hwn yw'r rhai y mae'r llyfr hwn
  wedi adeiladu tuag atynt drwyddo draw**: diffygion dianc, mabwysiad,
  canlyniadau busnes, dibynadwyedd, a llesiant.
- **Mae rhaglen fetrigau wedi'i hadeiladu'n bennaf o gwmpas metrigau
  allbwn bellach yn rhwymedigaeth, nid dim ond dewis isaddas.** Gellir
  chwyddo metrigau allbwn yn rhad ac yn gyflym ar raddfa.
- **Mae telemetreg canlyniad angen buddsoddiad gwirioneddol**,
  offeryno, amynedd am signal arafach, a disgyblaeth sefydliadol i
  wrthsefyll y dynfa tuag at fetrigau allbwn cyflymach, rhatach, ond
  bellach annibynadwy.
- **Mae'r egwyddor hon yn goroesi unrhyw offeryn neu werthwr AI
  penodol.** Mae'n ymateb parhaol i symudiad parhaol yn yr hyn y mae
  allbwn yn ei olygu, nid addasiad dros dro i duedd sy'n mynd heibio.

## Argymhellion

### Archwiliwch eich cymhareb buddsoddi metrigau: telemetreg canlyniad yn erbyn olrhain allbwn

Cyfrifwch yn fras pa gyfran o'ch isadeiledd metrigau cyfredol, ymdrech
offeryno, gofod dangosfwrdd, amser cyfarfod-adolygu, sy'n mynd tuag at
fetrigau canlyniad (Rhan 5, Rhan 6, llesiant datblygwyr o Ran 3) yn erbyn
metrigau allbwn a gweithgarwch (cyfrif defnyddio, cyfaint ymrwymiad,
trwybwn pull request). Os yw olrhain allbwn yn dominyddu, mae'r
gymhareb honno ei hun bellach yn rhwymedigaeth o gofio dadl y pwnc
hon, ac mae ei hailgydbwyso yw'r newid lifer-uchaf sengl y mae'r pwnc
hon yn ei argymell.

### Buddsoddwch mewn isadeiledd telemetreg canlyniad yn fwriadol, fel buddsoddiad peirianneg dosbarth-cyntaf

Mae mesuriad canlyniad, olrhain mabwysiad nodwedd, cydberthynas
canlyniad busnes (pwnc 5.3), offeryno dibynadwyedd (Rhan 6), angen
buddsoddiad peirianneg gwirioneddol, parhaus y mae llawer o
sefydliadau wedi'i dan-adnoddu'n hanesyddol mewn perthynas â'r
metrigau allbwn cymharol rad a hawdd sy'n dominyddu llawer o
ddangosfyrddau heddiw. Triniwch y buddsoddiad isadeiledd hwn â'r un
difrifoldeb y mae'r llyfr hwn yn ei gymhwyso i unrhyw allu peirianneg
sylweddol arall, nid fel pryder eilaidd y tu ôl i'r buddsoddiad
offeryno AI ei hun.

### Derbyniwch a chyfathrebwch fod telemetreg canlyniad yn arafach, ac adeiladwch amynedd am hynny i mewn i ddisgwyliadau eich sefydliad

Mae metrigau canlyniad, bron wrth eu natur, yn fwy ôl-fynegi ac yn
swnllyd na metrigau allbwn (gwahaniaeth rhagfynegi-yn-erbyn-ôl-fynegi
pwnc 1.3, gofal ystadegol pwnc 1.6). Mae angen i sefydliad sy'n
gyfarwydd ag adborth cyflym, boddhaus o wylio rhif allbwn yn codi
adeiladu amynedd gwirioneddol am y signal arafach, mwy onest y mae
telemetreg canlyniad yn ei ddarparu, ac mae angen i arweinyddiaeth
gyfathrebu a modelu'r amynedd hwnnw'n weithredol yn hytrach na chyrraedd
yn reddfol am y dewis arall cyflymach, bellach annibynadwy o dan bwysau
i ddangos canlyniadau cyflym.

### Defnyddiwch y symudiad hwn fel achlysur i ymddeol metrigau allbwn gwirioneddol hen ffasiwn, nid dim ond i ychwanegu metrigau canlyniad ochr yn ochr â nhw

Gan ddilyn disgyblaeth pwnc 1.1 o ymddeol metrigau nad ydynt bellach
yn ennill eu lle, defnyddiwch y foment hon fel achlysur bwriadol i
dynnu metrigau allbwn a gweithgarwch y mae'r symudiad hwn wedi'u
gwerthu i lawr yn benodol, yn hytrach na dim ond ychwanegu metrigau
canlyniad ar ben dangosfwrdd presennol, heb ei newid. Mae dangosfwrdd
sy'n cadw pob hen fetrig allbwn tra'n bolltio rhai canlyniad newydd
arno'n tyfu'n chwyddedig yn hytrach na gwirioneddol well.

### Triniwch fuddsoddiad telemetreg canlyniad fel un parhaol, yn annibynnol ar unrhyw offeryn AI neu berthynas gwerthwr penodol

Adeiladwch isadeiledd telemetreg-canlyniad fel gallu sefydliadol
parhaol, nid fel ymateb penodol i ba offeryn AI bynnag y mae eich
sefydliad yn digwydd ei ddefnyddio eleni. Bydd yr egwyddor hon, a'r
isadeiledd y mae'n galw amdano, yn goroesi unrhyw berthynas gwerthwr
neu genhedlaeth offeryno benodol, ac mae ei adeiladu fel gallu parhaol
yn gwarchod eich rhaglen fetrigau yn erbyn y symudiad technolegol
nesaf gymaint â'r un cyfredol.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Dangosfwrdd wedi'i dominyddu-gan-fetrig-allbwn | Adborth cyflym, rhad; yn gyfarwydd i'r rhan fwyaf o sefydliadau | Bellach yn weithredol annibynadwy o gofio effaith AI cynhyrchiol ar gost allbwn |
| Dangosfwrdd wedi'i dominyddu-gan-delemetreg-canlyniad | Gwydn i'r symudiad hwn; yn mesur yr hyn sy'n bwysig mewn gwirionedd | Signal arafach, mwy swnllyd; angen buddsoddiad offeryno gwirioneddol |
| Ychwanegu metrigau canlyniad ochr yn ochr â metrigau allbwn heb eu newid | Cynyddrannol, llai o darfu | Yn cynhyrchu chwyddiant dangosfwrdd yn hytrach na gwelliant gwirioneddol |
| Ailgydbwyso llawn, bwriadol tuag at delemetreg canlyniad | Yn mynd i'r afael â'r symudiad yn uniongyrchol ac yn gyflawn | Angen y newid sefydliadol a buddsoddi mwyaf sylweddol |

Y tensiwn canolog, mewn ystyr wirioneddol, yw'r un y agorodd y llyfr
hwn ag ef ym mhwnc 1.3, wedi'i finiogi nawr i'w ffurf fwyaf brys:
**adborth cyflym, cyfarwydd yn erbyn signal arafach, onest**. Bu
metrigau allbwn bob amser yn haws ac yn gyflymach i'w cynhyrchu; dadl y
pwnc hwn yw bod AI cynhyrchiol wedi symud y cyfnewidiad hwnnw o fod dim
ond yn isaddas i fod yn weithredol beryglus. Datryswch y tensiwn yn y
ffordd y mae'r llyfr hwn wedi'i hargymell ers ei bwnc agoriadol:
pwyswch yn benderfynol tuag at ganlyniadau, derbyniwch yr adborth arafach
sy'n dod â mesuriad gwerth gwirioneddol, a thriniwch anghysur y
adborth arafach hwnnw fel cost onest mesur rhywbeth gwirioneddol yn
hytrach na rhywbeth dim ond cyfleus.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Pa gyfran o'n hisadeiledd metrigau a sylw dangosfwrdd cyfredol sy'n
   mynd tuag at fetrigau canlyniad yn erbyn metrigau allbwn a
   gweithgarwch?** Cyfrifwch y gymhareb hon yn onest; mae'r rhan fwyaf
   o sefydliadau, wedi'u hasesu am y tro cyntaf, yn ei chanfod yn fwy
   pwysoledig-tuag-at-allbwn nag y byddent wedi'i ddyfalu.

2. **Pa fuddsoddiad isadeiledd telemetreg-canlyniad penodol ydym wedi
   bod yn ei ohirio o blaid olrhain allbwn cyflymach, rhatach?** Enwch
   enghraifft goncrid, offeryno mabwysiad nodwedd, offeryno
   cydberthynas canlyniad busnes, a thrafodwch beth fyddai ei angen i
   mewn gwirionedd ei adeiladu.

3. **A yw ein sefydliad wedi adeiladu amynedd gwirioneddol am adborth
   arafach telemetreg canlyniad, neu a yw pwysau am ganlyniadau cyflym
   yn dal i'n tynnu'n ôl tuag at fetrigau allbwn cyflymach ond bellach
   annibynadwy?** Byddwch yn onest am y patrwm hwn yn eich adrodd a'ch
   cyfarfodydd adolygu diweddar eich hun.

4. **Pa fetrig allbwn neu weithgarwch ar ein dangosfwrdd cyfredol sy'n
   ymgeisydd gwirioneddol ar gyfer ymddeoliad, nawr bod dadl y pwnc
   hon yn gymwys iddo'n benodol?** Nodwch o leiaf un, a thrafodwch beth
   fyddai angen ei ddisodli yn hytrach na dim ond gadael bwlch.

5. **Petai ein gwerthwr offeryno AI neu genhedlaeth gyfredol
   cynorthwywyr codio AI'n newid yn ddramatig y flwyddyn nesaf, a fyddai
   ein rhaglen fetrigau'n dal i sefyll?** Mae hyn yn profi a yw eich
   buddsoddiad telemetreg-canlyniad yn wirioneddol barhaol, wedi'i
   adeiladu fel gallu parhaol, neu'n ddim ond ymateb penodol i'ch
   sefyllfa offeryno gyfredol.

6. **Sut olwg fyddai arni petai ein sefydliad yn ymrwymo'n llawn i ddadl
   y pwnc hwn, gan ailgydbwyso ein buddsoddiad metrigau'n benderfynol
   tuag at ganlyniadau yn hytrach na chynyddrannol?** Braslunwch hyn yn
   gonc yn hytrach na'i adael yn haniaethol; y bwlch rhwng y cyflwr
   cyfredol a'r weledigaeth hon yw map ffordd gwirioneddol eich
   sefydliad ar gyfer ymateb i'r symudiad hwn.

## Golwg sector

**Cwmni newydd.** Mae adeiladu telemetreg canlyniad yn gynnar, cyn i
fetrigau allbwn gael cyfle i ddod yn arferiad sefydliadol dwfn wedi'i
wreiddio, yn wirioneddol haws na'i ôl-osod yn ddiweddarach. Mae gan
gwmni ifanc sy'n mabwysiadu cymorth codio AI o'r dechrau gyfle
gwirioneddol i adeiladu ei raglen fetrigau canlyniad-yn-gyntaf yn
hytrach nag angen dad-wneud diwylliant metrig-allbwn-dominyddol
presennol.

**Busnes bach.** Canolbwyntiwch fuddsoddiad telemetreg-canlyniad ar yr
un metrig canlyniad sy'n adlewyrchu goroesiad a thwf yn fwyaf
uniongyrchol (pwnc 5.3), yn hytrach na cheisio offeryno cynhwysfawr
ar draws pob categori canlyniad y mae'r llyfr hwn yn ei gwmpasu. Mae
buddsoddiad telemetreg-canlyniad cymedrol, wedi'i ffocysu'n curo
dangosfwrdd metrig-allbwn cynhwysfawr y mae dadl y pwnc hwn bellach
wedi'i werthu i lawr yn benodol.

**Menter.** Mae'r ailgydbwyso y mae'r pwnc hwn yn ei argymell yn
newid sefydliadol gwirioneddol, sylweddol ar y raddfa hon, yn debygol
o angen nawdd gweithredol a chynllun buddsoddi aml-chwarter. Triniwch
ef â'r un difrifoldeb ag unrhyw fuddsoddiad isadeiledd mawr arall y mae'r
llyfr hwn yn ei gwmpasu, a defnyddiwch yr enghreifftiau penodol, concrid
o bwnc 7.1 a phwnc 7.3, chwyddiant metrig a gwanhad ansawdd y byddai
dangosfwrdd wedi'i ailgydbwyso wedi'u dal yn gynharach, i adeiladu'r
achos mewnol dros y buddsoddiad.

**Llywodraeth.** Mae rhaglenni technoleg llywodraeth a werthusir yn
bennaf ar fetrigau cyflenwi ac allbwn (nodweddion a ryddhawyd, ar
amserlen) yn gynyddol agored i union yr amheuaeth a ddisgrifiodd pwnc
5.3, ac mae dadl y pwnc hwn yn miniogi'r agoredrwydd hwnnw ymhellach
wrth i fabwysiadu offeryno AI ledaenu trwy'r diwydiant ehangach y mae
asiantaethau llywodraeth yn recriwtio ohono ac yn cael eu cymharu yn ei
erbyn. Adeiladwch delemetreg canlyniad fel y sylfaen gynradd ar gyfer
adrodd cyhoeddus a chyfiawnhad cyllideb, gan osod eich sefydliad ar y
blaen i, yn hytrach nag ar ôl, y symudiad hwn.

## Enghreifftiau

**Menter.** Cynhaliodd arweinyddiaeth peirianneg cwmni meddalwedd, wedi'i
ysgogi'n uniongyrchol gan yr enghraifft agosáu-at-chwyddiant-metrig a
ddisgrifiwyd yn enghraifft technoleg ariannol pwnc 7.1, archwiliad
llawn o'i gymhareb buddsoddi metrigau a chanfod bod bron 70% o'i ofod
dangosfwrdd ac ymdrech offeryno wedi'u neilltuo i fetrigau allbwn a
gweithgarwch, gyda dim ond buddsoddiad cymedrol, anghyson mewn
telemetreg canlyniad. Dros y flwyddyn ganlynol, ailgydbwyodd y cwmni'r
gymhareb hon yn fwriadol, gan ymddeol sawl metrig allbwn yr oedd
archwiliad pwnc 7.1 wedi'u fflagio fel rhai mwyaf agored a buddsoddi'r
cynhwysedd a ryddhawyd mewn offeryno mabwysiad nodwedd a chanlyniad
busnes (pynciau 5.2, 5.3). Cafodd y dangosfwrdd canlyniadol, a
gyflwynwyd yng nghyfarfod bwrdd y flwyddyn ganlynol, ei gredydu'n benodol
gan yr un aelod bwrdd a fu'n amheugar yn flaenorol fel sylfaen sylweddol
fwy dibynadwy ar gyfer gwerthuso buddsoddiad peirianneg na'r fersiwn
trwm-ar-allbwn a ddisodlodd.

**Llywodraeth.** Mabwysiadodd asiantaeth gwasanaethau digidol
genedlaethol, oedd yn adeiladu rhaglen fetrigau peirianneg newydd o'r
dechrau'n benodol oherwydd bod ei dangosfwrdd blaenorol, wedi'i
dominyddu-gan-fetrig-allbwn wedi denu amheuaeth ddeddfwriaethol barhaus,
egwyddor y pwnc hwn yn benodol fel ei phenderfyniad dylunio sylfaenol:
telemetreg canlyniad, amser aros dinesydd, cyfradd gwblhau gwasanaeth,
cyfradd diffygion dianc, fyddai'r sylfaen gynradd ar gyfer pob adroddiad
cyhoeddus, gyda metrigau allbwn a chyflenwi'n cael eu cadw dim ond fel
offer diagnostig mewnol, byth fel y dystiolaeth bennawd a gyflwynwyd yn
allanol. Rhoddodd y dyluniad canlyniad-yn-gyntaf hwn, wedi'i adeiladu'n
fwriadol o gofio symudiad AI cynhyrchiol y mae'r rhan hon yn ei
ddisgrifio, i adroddiad yr asiantaeth barhad a chredadwyedd gyda'i
phwyllgor goruchwylio na chyflawnodd ei raglen ragflaenol erioed, un a
adeiladwyd o gwmpas tybiaethau metrig-allbwn cenhedlaeth gynharach.

## Achos busnes: cymhellion, ROI, a TCO

Rhaglen fetrigau sy'n aros yn ddibynadwy ac yn gredadwy trwy'r symudiad
technolegol cyfredol a beth bynnag ddaw wedyn, yn hytrach nag un sydd
angen ail-drwsio sylweddol arall y tro nesaf y bydd allbwn yn dod yn
rhad trwy ryw newid technolegol yn y dyfodol, yw'r enillion ar ymrwymo'n
benderfynol i delemetreg canlyniad. Mae'r enghraifft cwmni meddalwedd
uchod yn dangos hyn yn gonc: gwnaeth y dangosfwrdd wedi'i ailgydbwyso
drwsio credadwyedd yn uniongyrchol yr oedd y fersiwn cynharach, trwm-
ar-allbwn wedi'i beryglu'n wirioneddol.

Buddsoddiad isadeiledd telemetreg-canlyniad y mae'r pwnc hwn yn ei
argymell, gwaith gwirioneddol sylweddol, aml-chwarter i sefydliad mawr,
wedi'i bwyso yn erbyn risg tymor-hir, parhaol rhaglen fetrigau sy'n
dod yn gynyddol lai dibynadwy wrth i allbwn barhau i ddod yn rhatach,
yw cost cyfanswm perchnogaeth. Nid dyma gost y mae'r llyfr hwn yn gofyn
i chi ei derbyn yn ysgafn; dyma ganlyniad uniongyrchol, angenrheidiol o
gymryd dadl sylfaen pwnc 1.3 mor ddifrifol ag y mae rhan olaf hon o'r
llyfr yn gofyn i chi ei wneud.

## Gwrth-batrymau a risgiau

- **Trin y symudiad hwn fel un sydd angen dim ond addasiad
  cynyddrannol yn hytrach nag ailgydbwyso gwirioneddol:** yn
  tanamcangyfrif graddfa'r newid y mae AI cynhyrchiol wedi'i gyflwyno
  i'r hyn y mae metrigau allbwn yn ei olygu.
- **Ychwanegu metrigau canlyniad ochr yn ochr â set fetrigau allbwn heb
  ei newid, yn dal i ddominyddu:** yn cynhyrchu chwyddiant dangosfwrdd
  yn hytrach na'r ailgydbwyso gwirioneddol y mae'r pwnc hwn yn dadlau
  drosto.
- **Adeiladu buddsoddiad telemetreg-canlyniad fel ymateb i offeryn AI
  cyfredol penodol yn hytrach na gallu parhaol:** yn gadael y sefydliad
  yn agored i'r symudiad technolegol nesaf yn yr un ffordd.
- **Methu ag adeiladu amynedd sefydliadol am adborth arafach
  telemetreg canlyniad:** yn mentro dychwelyd i fetrigau allbwn
  cyflymach, ond bellach annibynadwy o dan bwysau am ganlyniadau
  cyflym.
- **Ymddeol metrigau allbwn heb ddisodliad telemetreg-canlyniad
  gwirioneddol:** yn gadael bwlch mesur yn hytrach na gwelliant
  gwirioneddol.
- **Cyflwyno'r symudiad hwn i randdeiliaid fel dim ond ymateb i offeryno
  AI yn hytrach na chyflawniad egwyddor sylfaen y llyfr hwn:** yn
  tanddweud parhad a chyffredinolrwydd y ddadl.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Mae'r dangosfwrdd yn aros wedi'i dominyddu-gan-
  fetrig-allbwn, heb ymateb bwriadol i'r symudiad y mae'r rhan hon yn ei
  ddisgrifio.
- **Lefel 2, Datblygu:** Ychwanegwyd rhai metrigau canlyniad, ond mae'r
  gymhareb buddsoddi gyffredinol yn aros yn drwm-ar-allbwn ac ni
  ymddeolwyd unrhyw fetrigau'n fwriadol.
- **Lefel 3, Safoni:** Cynhaliwyd archwiliad ac ailgydbwyso bwriadol
  tuag at delemetreg canlyniad, gydag metrigau allbwn gwirioneddol hen
  ffasiwn wedi'u hymddeol, ar draws y sefydliad.
- **Lefel 4, Rheoli:** Trinnir isadeiledd telemetreg-canlyniad fel
  buddsoddiad peirianneg dosbarth-cyntaf, parhaus, a meithrinir a
  gwarchodir amynedd sefydliadol am ei adborth arafach yn weithredol.
- **Lefel 5, Cerddorfaru:** Mae rhaglen fetrigau'r sefydliad wedi'i
  harwain-gan-delemetreg-canlyniad fel egwyddor dylunio barhaol,
  parhaol, wedi'i brofi'n wydn trwy'r symudiad technolegol cyfredol ac
  wedi'i hadeiladu'n benodol i aros yn wydn trwy beth bynnag ddaw
  nesaf.

## Syniadau ar gyfer trafodaeth

1. Beth yw ein cymhareb gyfredol wirioneddol o fuddsoddiad metrig-canlyniad i fetrig-allbwn?
2. Pa un metrig allbwn ddylem ei ymddeol y chwarter hwn, a pha fetrig canlyniad ddylai ei ddisodli?
3. Ble mae diffyg amynedd sefydliadol wedi ein tynnu'n ôl tuag at fetrigau allbwn cyflymach ond llai dibynadwy'n ddiweddar?
4. A yw ein buddsoddiad telemetreg-canlyniad yn barhaol, neu wedi'i glymu'n benodol wrth ein sefyllfa offeryno AI gyfredol?
5. Beth fyddai ei angen i ymrwymo'n llawn i ddadl y pwnc hwn, yn hytrach nag addasu'n gynyddrannol?

## Prif gasgliadau

- Mae telemetreg canlyniad yn dod yn **angenrheidiol, nid dim ond yn
  ddewisol**, unwaith y mae AI cynhyrchiol yn gwneud allbwn yn rhad;
  dyma egwyddor sylfaen pwnc 1.3, yn frys nawr.
- Y metrigau sy'n **goroesi'r symudiad hwn** yw'r rhai y mae'r llyfr hwn
  yn adeiladu tuag atynt drwyddo draw: diffygion dianc, mabwysiad,
  canlyniadau busnes, dibynadwyedd, a llesiant.
- **Archwiliwch ac ailgydbwyswch eich cymhareb buddsoddi metrigau'n**
  fwriadol, gan ymddeol metrigau allbwn gwirioneddol hen ffasiwn yn
  hytrach na dim ond eu hychwanegu ochr yn ochr â metrigau canlyniad.
- Adeiladwch **amynedd sefydliadol am adborth arafach telemetreg
  canlyniad**, a gwrthsefyllwch y dynfa yn ôl tuag at fetrigau allbwn
  cyflymach ond bellach annibynadwy o dan bwysau.
- Adeiladwch y buddsoddiad hwn fel **gallu parhaol**, yn annibynnol ar
  unrhyw offeryn neu werthwr AI penodol, gan warchod eich rhaglen
  fetrigau yn erbyn symudiadau technolegol y dyfodol yn ogystal â'r un
  cyfredol.

## Cyfeiriadau a darllen pellach

- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (y sylfaen mesur seiliedig-ar-
  ganlyniad y mae'r llyfr cyfan hwn, a'r pwnc hwn sy'n cau Rhan 7, yn
  adeiladu arni).
- *Lean Analytics*, gan Alistair Croll a Benjamin Yoskovitz (y
  gwahaniaeth metrig-gweithredadwy-yn-erbyn-gwagedd y mae dadl y
  pwnc hwn yn ei ymestyn i oes AI).
- *The Innovator's Dilemma*, gan Clayton M. Christensen (y patrwm
  cyffredinol o fetrigau ac arferion sefydledig yn dod yn rhwymedigaethau
  o dan symudiad technolegol darfudol).
- *Measure What Matters*, gan John Doerr (gosod nodau canlyniad-
  gyfeiriedig fel egwyddor drefnu ar gyfer rhaglen fetrigau, y model y
  mae'r pwnc hwn yn dadlau y dylai fod y diofyn nawr, nid yr
  eithriad).
