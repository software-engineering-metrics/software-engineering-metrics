# 2.2 Elfennau llif: nodweddion, diffygion, risgiau, a dyled

## Trosolwg a chymhelliant

**Elfen lif** yw uned waith y Flow Framework, ac mae pob elfen lif yn
perthyn i union un o bedwar math: **nodweddion**, gwerth busnes newydd
neu allu a gyflenwyd i gwsmer; **diffygion**, trwsiadau ansawdd ar gyfer
bygiau a ganfuwyd gan ddefnyddwyr neu brofi; **risgiau**, gwaith
diogelwch, cydymffurfiaeth, preifatrwydd, a llywodraethiant sy'n diogelu'r
busnes; a **dyled**, [dyled dechnegol](https://en.wikipedia.org/wiki/Technical_debt),
gwelliant pensaernïol, a gwaith isadeiledd sy'n galluogi cyflymder yn y
dyfodol. Cyflwynodd pwnc 2.1 y fframwaith y mae'r pedwar categori hyn yn
perthyn iddo; mae'r pwnc hwn yn mynd yn ddwfn i mewn i'r dacsonomi ei
hun, oherwydd dim ond os yw tîm yn dosbarthu ei waith iddynt yn onest ac
yn gyson y mae'r categorïau'n cyflenwi gwerth.

Priodwedd ddiffiniol elfennau llif yw bod dyraniad ar draws y pedwar math
yn **gêm swm-sero**: mae swm sefydlog o gapasiti peirianneg yn bodoli mewn
unrhyw gyfnod penodol, ac mae pob awr a dreulir ar nodwedd yn awr na
dreulir ar waith dyled, risg, na diffyg. Nid yw hon yn ffaith newydd am
gyflenwi meddalwedd, mae pob arweinydd peirianneg eisoes yn gwybod bod
capasiti'n derfynol, ond nid oes gan y rhan fwyaf o sefydliadau unrhyw
ffordd gyson, onest o weld y rhaniad gwirioneddol. Mae cyflymder sbrint yn
cyfrif pwyntiau stori waeth beth yw'r math; mae backlog wedi'i losgi i
lawr yn edrych yn union yr un fath p'un a oedd y gwaith y tu ôl iddo'n
llif talu newydd neu dri mis o remediad diogelwch di-fawreddog. Mae
elfennau llif yn bodoli'n benodol i wneud y rhaniad anweledig hwnnw'n
weladwy.

I dimau mawr, mae'r gwelededd hwn yn newid natur sgwrs adnoddau. Yn lle
arweinydd peirianneg yn gwneud dadl heb ei meintioli bod "angen mwy o
amser arnom ar gyfer dyled dechnegol," mae dosbarthiad elfen-lif yn
cynhyrchu rhif gwirioneddol, defnyddiodd dyled 30% o gapasiti'r chwarter
diwethaf, y gellir ei drafod, ei amddiffyn, a'i addasu'n fwriadol â
rhanddeiliaid busnes. Mae sefydliadau menter sy'n rhedeg llawer o linellau
cynnyrch cydredol ac asiantaethau llywodraeth sy'n cydbwyso ymarferoldeb
dinesig-wynebus newydd yn erbyn risg system etifeddol ill dau'n dibynnu ar
y math hwn o gyfaddawd amddiffynadwy, wedi'i feintioli lawer mwy na
synnwyr preifat, anffurfiol bod "rydym yn treulio gormod o amser ar gynnal
a chadw."

## Egwyddorion allweddol

- **Mae pob elfen lif yn perthyn i union un math.** Gorfodi dosbarthiad
  sengl, yn hytrach na chaniatáu un cymysg neu amwys, yw'r hyn sy'n gwneud
  y dacsonomi'n ddefnyddiadwy ar gyfer adrodd cyfanredol.
- **Mae dyraniad yn swm-sero, nid yn ychwanegol.** Mae mwy o gapasiti ar
  gyfer nodweddion o reidrwydd yn llai o gapasiti ar gyfer diffygion,
  risg, a dyled yn yr un cyfnod.
- **Nid oes dosbarthiad iach cyffredinol.** Dylai cynnyrch ifanc mewn
  cyfnod twf yn gyfreithlon sgiwio tuag at nodweddion; dylai system aeddfed
  sy'n cario risg technegol gwirioneddol yn gyfreithlon sgiwio tuag at
  waith dyled a risg.
- **Mae gwaith dyled a risg yn cael ei dan-adrodd yn gronig heb y
  ddisgyblaeth hon.** Mae'n tueddu i ddigwydd yn dawel, wedi'i amsugno i
  mewn i "dasgau peirianneg" cyffredinol, hyd nes bod dosbarthiad elfen-lif
  yn ei orfodi i'r amlwg.
- **Ansawdd dosbarthiad sy'n penderfynu gwerth cyfan y dacsonomi.** Mae
  tacsonomi a gymhwysir yn anghyson neu a dwyllir ar ôl y ffaith yn
  cynhyrchu rhifau sy'n gamarwain yn weithredol yn hytrach na hysbysu.

## Argymhellion

### Dosbarthwch bob eitem wrth ei chymryd i mewn, gan ddefnyddio diffiniad ysgrifenedig ar gyfer pob math

Cytunwch ar ddiffiniad cryno, ysgrifenedig ar gyfer beth sy'n cyfrif fel
nodwedd, diffyg, risg, a dyled yn eich cyd-destun penodol, a mynnwch fod
pob darn newydd o waith yn cael ei ddosbarthu yn erbyn y diffiniad hwnnw
yr eiliad y mae'n mynd i mewn i'r ffrwd werth, nid ar ôl iddo gael ei
gwblhau. Mae diffiniad y cytunwyd arno ymlaen llaw yn gwrthsefyll y
demtasiwn i ddosbarthu'n ôl-weithredol yn seiliedig ar sut mae darn o
waith wedi troi allan i edrych, sef yn union y risg twyllo y mae'r
pwnc hwn yn ei enwi'n uniongyrchol isod.

### Adroddwch ddosbarthiad llif fel tuedd, nid instantiad sengl

Mae dosbarthiad un cyfnod yn dweud llai wrthych na'r duedd ar draws sawl
cyfnod. Mae drifft cyson tuag at un math o elfen, nodweddion yn dringo tra
bo dyled yn crebachu'n dawel chwarter wrth chwarter, yn signal llawer
cryfach nag unrhyw rif un cyfnod, ac fel arfer dyma'r patrwm sy'n werth ei
godi â rhanddeiliaid cyn iddo ddod yn argyfwng yn hytrach nag wedyn.

### Gosodwch ddosbarthiad targed bwriadol â rhanddeiliaid busnes, nid dim ond peirianneg

Penderfynwch, ynghyd â arweinyddiaeth cynnyrch a busnes, sut olwg sydd ar
ddosbarthiad iach ar gyfer cyfnod cyfredol eich ffrwd werth benodol, ac
ailedrychwch ar y targed hwnnw'n gyfnodol yn hytrach na gadael iddo
ddrifftio'n ddiofyn. Mae gan gynnyrch ifanc, cyfnod-twf a system aeddfed,
cyfnod-sefydlogrwydd dargedau iach gyfreithlon wahanol, a dylai'r targed
ei hun fod yn benderfyniad busnes wedi'i drafod, nid rhywbeth y mae
peirianneg yn ei benderfynu'n dawel ar ei ben ei hun.

### Croeswiriwch ddosbarthiad elfen-lif yn erbyn tystiolaeth annibynnol

Cymharwch eich dosbarthiad llif yn gyfnodol yn erbyn metrigau nad ydynt yn
dibynnu ar hunan-ddosbarthiad: cyfradd defnydd escapiedig (pwnc 5.1),
mesur dyled dechnegol (pwnc 4.5), a metrigau rheoli bregusrwydd (pwnc
6.4). Os yw diffygion neu fregusrwyddau'n codi tra bo cyfranddaliadau
elfen llif "diffygion" a "risg" yn aros yn wastad neu'n crebachu, y
camgyfateb hwnnw yw'r signal cliriaf sydd ar gael bod dosbarthiad wedi
drifftio oddi wrth realiti.

### Gwyliwch am batrwm y ffatri nodweddion yn benodol

Pan fydd dosbarthiad llif yn dangos nodweddion yn amsugno bron pob
capasiti'n gyson, chwarter ar ôl chwarter, gyda gwaith dyled a risg byth
yn codi uwchben cyfran symbolaidd, mae'r patrwm hwnnw (a elwir weithiau'n
"ffatri nodweddion") fel arfer yn golygu bod dyled a risg yn cael eu
llwgu o gapasiti, nid bod y system yn wirioneddol angen dim cynnal a
chadw. Mae'r patrwm hwn yn gyfforddus yn y tymor byr ac yn ddrud yn
ddiweddarach, gan ymddangos yn y pen draw fel argyfwng ansawdd neu
ddiogelwch sy'n cyrraedd heb rybudd yn y siart dosbarthiad llif, oherwydd
nid oedd y cronni sylfaenol byth yn weladwy.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Dim dosbarthiad ffurfiol (backlog cyffredinol) | Dim gorbenion proses | Mae gwaith dyled, risg, a diffyg yn aros yn anweledig; anodd amddiffyn penderfyniadau adnoddau |
| Dosbarthiad elfen-lif pedwar math | Yn gwneud dyraniad capasiti'n weladwy ac yn drafodadwy â rhanddeiliaid | Angen disgyblaeth amser-cymryd-i-mewn a diffiniad ysgrifenedig, y cytunwyd arno fesul math |
| Dosbarthiad mwy manwl-gronynnog (llawer o is-fathau) | Mwy o fanylder diagnostig | Mwy o ymdrech dosbarthiad; mwy o rifau i'w hesbonio i randdeiliaid |
| Dosbarthiad ôl-weithredol | Haws ei gymhwyso, dim newid proses ymlaen llaw | Yn hynod agored i dwyllo; mae dosbarthiad yn drifftio tuag at beth bynnag sy'n edrych orau |

Y tensiwn canolog yw **disgyblaeth dosbarthiad yn erbyn gorbenion
proses**. Mae tacsonomi pedwar math yn fwriadol bras, yn ddigon bras fel
bod dosbarthu eitem yn cymryd eiliadau, nid dadl, ond dim ond os yw'r
ddisgyblaeth o ddosbarthu wrth gymryd i mewn, yn erbyn diffiniad
ysgrifenedig, yn cael ei chynnal yn wirioneddol y mae'r braster hwnnw'n
dal. Datryswch y tensiwn trwy gadw'r dacsonomi'n union mor syml â hyn,
pedwar math, dim mwy, a buddsoddi unrhyw drylwyredd ychwanegol yn y cam
archwilio (croeswirio yn erbyn tystiolaeth annibynnol) yn hytrach nag mewn
cynllun dosbarthiad mwy manwl sy'n erydu o dan lwyth gwaith gwirioneddol.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Petaem yn dosbarthu popeth a gyflenwodd ein tîm y chwarter diwethaf,
   sut olwg fyddai ar y rhaniad gwirioneddol ar draws nodweddion,
   diffygion, risg, a dyled, ac a fyddai hynny'n synnu ein
   rhanddeiliaid?** Nid yw'r rhan fwyaf o dimau erioed wedi gwneud yr
   ymarfer hwn yn onest. Ceisiwch ef â data gwirioneddol cyn tybio eich
   bod eisoes yn gwybod yr ateb.

2. **A oes gennym ddiffiniad ysgrifenedig, y cytunwyd arno ar gyfer beth
   sy'n cyfrif fel nodwedd yn erbyn dyled yn erbyn risg yn ein cyd-destun
   penodol, neu a yw dosbarthiad yn dibynnu ar bwy bynnag sy'n digwydd bod
   yn labelu'r tocyn?** Mae diffiniad anffurfiol, anghyson yn cynhyrchu
   rhifau sy'n edrych yn fanwl gywir ond nad ydynt mewn gwirionedd yn
   gymaradwy cyfnod wrth gyfnod.

3. **A yw ein dosbarthiad llif erioed wedi drifftio'n gyson tuag at un
   math o elfen heb i unrhyw un benderfynu hynny'n fwriadol?** Mae drifft
   araf yn hawdd ei golli cyfnod wrth gyfnod ond yn amlwg unwaith y'i
   plotir fel tuedd. Tynnwch sawl cyfnod o ddata, os oes gennych, a
   chwiliwch yn onest am y patrwm hwn.

4. **Sut olwg fyddai ar ddosbarthiad llif iach ar gyfer cyfnod cyfredol
   ein cynnyrch, ac a ydym mewn gwirionedd wedi cytuno ar y targed hwnnw
   â rhanddeiliaid busnes?** Nid yw'r rhan fwyaf o sefydliadau erioed
   wedi gwneud y targed hwn yn esblyg, sy'n golygu nad oes sail a rennir
   ar gyfer sylwi pan fydd y dosbarthiad gwirioneddol yn drifftio i
   ffwrdd oddi wrtho.

5. **A yw ein dosbarthiad llif yn cyfateb i dystiolaeth annibynnol, fel
   cyfradd defnydd escapiedig neu gyfrif bregusrwydd agored, neu a oes
   camgyfateb sy'n werth ei ymchwilio?** Camgyfateb yma yw'r arwydd
   cliriaf sydd ar gael bod dosbarthiad wedi drifftio oddi wrth yr hyn y
   mae'r gwaith mewn gwirionedd.

6. **A allai rhywun ar ein tîm ailenwi'n dawel eitem dyled neu risg fel
   nodwedd o dan bwysau cyflenwi, ac a fyddem yn sylwi ar hynny ar hyn o
   bryd petaent yn gwneud hynny?** Dyma brif risg twyllo'r pwnc wedi'i
   nodi'n uniongyrchol. Trafodwch a fyddai eich proses gyfredol mewn
   gwirionedd yn dal hyn, nid dim ond a fyddai unrhyw un yn bwriadol yn ei
   wneud.

## Golwg sector

**Cwmni newydd.** Mae dosbarthiad ffurfiol yn aml yn teimlo fel
gorbenion pan fydd y tîm cyfan eisoes yn gwybod ar beth mae pawb yn
gweithio. Y lleiafswm defnyddiol ar y raddfa hon yw enwi'r pedwar
categori'n uchel yn ystod cynllunio, fel nad yw gwaith dyled a risg yn
cael ei ddadflaenoriaethu'n dawel bob tro y bydd terfyn amser nodwedd yn
creu pwysau, patrwm sy'n cronni'n wael unwaith y bydd y sylfaen god a'r
tîm ill dau'n tyfu.

**Busnes bach.** Mae un maes pwrpasol neu label sengl yn eich offeryn
olrhain presennol yn ddigon i ddal math elfen-lif heb unrhyw fuddsoddiad
offer pwrpasol. Mae disgyblaeth dosbarthu'n gyson wrth gymryd i mewn yn
bwysicach o lawer nag unrhyw soffistigedigrwydd offer.

**Menter.** Dosbarthiad elfen-lif yw lle mae'r fframwaith hwn yn ennill
ei werth ar raddfa, oherwydd nid oes gan sefydliad mawr sy'n rhedeg llawer
o ffrydiau gwerth cydredol unrhyw ffordd ddibynadwy, gyfanredol arall i
weld sut mae capasiti mewn gwirionedd yn cael ei rannu ar draws
nodweddion, diffygion, risg, a dyled. Buddsoddwch mewn dosbarthiad wedi'i
integreiddio ag offer a chroeswiriadau cyfnodol yn erbyn tystiolaeth
annibynnol; nid yw dosbarthiad â llaw, ad hoc yn goroesi graddfa
sefydliadol wirioneddol.

**Llywodraeth.** Mae dosbarthiad llif yn rhoi ateb amddiffynadwy, wedi'i
feintioli i arweinydd technoleg sector cyhoeddus pan ofynnir pam nad oes
mwy o nodweddion dinesig-wynebus newydd yn cael eu cyflenwi, pan mai'r
ateb gonest yw bod baich risg a dyled system etifeddol yn defnyddio
cyfran wirioneddol, gyfiawnadwy o gapasiti. Mae gwneud y cyfaddawd hwnnw'n
esblyg ac wedi'i drafod, yn hytrach na'i amsugno'n dawel, yn tueddu i
adeiladu mwy o ymddiriedaeth â chyrff goruchwylio nag apêl heb ei
meintioli i "reidrwydd technegol."

## Enghreifftiau

**Menter.** Roedd tîm platfform e-fasnach cwmni manwerthu mawr yn credu,
yn seiliedig ar gyflymder sbrint, ei fod yn cyflenwi cynnyrch nodwedd
sefydlog. Canfu ymarfer dosbarthiad elfen-lif onest cyntaf mai dim ond
40% o'r gwaith cyflawn a wnaeth "nodweddion" mewn gwirionedd, gyda dyled,
llawer ohono ynghlwm wrth system talu wrth y til sy'n heneiddio, yn
defnyddio bron traean o gapasiti heb erioed gael ei enwi felly mewn
unrhyw adroddiad blaenorol. Sicrhaodd cyflwyno'r rhaniad hwn i
arweinyddiaeth cynnyrch, ochr yn ochr â chyfradd defnydd escapiedig
gynyddol a gadarnhaodd y baich dyled, gyllideb moderneiddio bwrpasol yr
oedd y tîm wedi ceisio amdani'n aflwyddiannus am ddwy flynedd gan ddefnyddio
dadleuon ansoddol yn unig.

**Llywodraeth.** Dosbarthodd tîm trwyddedu digidol asiantaeth cerbydau
modur talaith ei backlog am y tro cyntaf ar ôl i doriad cyhoeddus dynnu
craffu at sefydlogrwydd y system sylfaenol. Datgelodd yr ymarfer fod
gwaith "risg", yn bennaf patsio diogelwch a oedd wedi cael ei
ddadflaenoriaethu dro ar ôl tro o blaid nodweddion dinesig-wynebus
gweladwy, wedi crebachu i lai na 5% o gapasiti dros y flwyddyn flaenorol,
patrwm nad oedd erioed wedi bod yn weladwy yn adrodd safonol y tîm.
Defnyddiodd arweinyddiaeth yr asiantaeth y canfyddiad i fynnu dyraniad
gwaith-risg lleiafswm yn y dyfodol, wedi'i gefnogi gan y data dosbarthiad
llif yn hytrach na datganiad polisi cyffredinol yn unig.

## Achos busnes: cymhellion, ROI, a TCO

Sail amddiffynadwy, wedi'i feintioli ar gyfer penderfyniadau adnoddau a
ddadleuwyd yn ansoddol o'r blaen ac a gollwyd yn aml i beth bynnag oedd y
gwaith mwyaf gweladwy i randdeiliaid yw'r enillion ar ddosbarthiad
elfen-lif. Mae'r enghraifft fanwerthu uchod, gan sicrhau cyllideb
foderneiddio gyda data capasiti gwirioneddol yn hytrach nag apêl
gyffredinol, yn batrwm y mae'r ddisgyblaeth hon yn ei gynhyrchu'n
ddibynadwy: mae rhif penodol yn llawer anos ei wfftio nag argraff
gyffredinol bod "angen mwy o amser arnom ar gyfer cynnal a chadw."

Mae cost cyfanswm perchnogaeth yn isel unwaith y cytunir ar y dacsonomi
a'i ddiffiniadau: mae dosbarthiad yn ychwanegu eiliadau at gymryd i mewn,
nid baich proses ystyrlon, ac mae'r integreiddiad offer sydd ei angen i'w
olrhain fel arfer yn faes pwrpasol neu label sengl. Y gost wirioneddol,
barhaus yw'r ddisgyblaeth o gynnal dosbarthiad onest o dan bwysau
cyflenwi, a dyna pam mae'r croeswiriad cyfnodol yn erbyn tystiolaeth
annibynnol yn bwysig cymaint â'r fabwysiadu cychwynnol.

## Gwrth-batrymau a pheryglon

- **Dosbarthu gwaith yn ôl-weithredol, ar ôl i'r canlyniad fod yn
  hysbys:** y fector twyllo wrth galon y pwnc hwn. O dan bwysau
  cyflenwi, gall tîm labelu'n dawel waith dyled neu risg fel nodwedd ar
  ôl y ffaith, neu dalgrynnu eitem amwys tuag at ba fath bynnag sy'n
  edrych orau ar y siart dosbarthiad, heb i unrhyw benderfyniad sengl
  byth edrych yn anonest ar ei ben ei hun. Y gledr ddiogelwch yw
  dosbarthiad amser-cymryd-i-mewn yn erbyn diffiniad ysgrifenedig, ynghyd
  ag archwiliadau cyfnodol yn cymharu dosbarthiad llif yn erbyn
  tystiolaeth annibynnol fel cyfradd defnydd escapiedig (pwnc 5.1) a
  metrigau bregusrwydd (pwnc 6.4), yr un ddisgyblaeth archwilio-yn-erbyn-
  tystiolaeth-annibynnol y mae pwnc 1.2 yn gofyn amdani gyda phob
  metrig yn y llyfr hwn.
- **Gadael i nodweddion amsugno bron pob capasiti'n gyson (patrwm y
  ffatri nodweddion):** yn llwgu gwaith dyled a risg yn dawel hyd nes ei
  fod yn ymddangos fel argyfwng.
- **Trin dosbarthiad un cyfnod fel y darlun cyfan:** yn colli'r drifft
  araf, cronnol y mae golwg tuedd yn ei ddatgelu'n glir.
- **Gosod dosbarthiad targed heb randdeiliaid busnes:** yn colli prif
  werth y fframwaith, dealltwriaeth a rennir, wedi'i thrafod o'r
  cyfaddawd.
- **Defnyddio diffiniad anghyson neu heb ei ddogfennu fesul math:** yn
  cynhyrchu rhifau sy'n edrych yn fanwl gywir ond nad ydynt mewn
  gwirionedd yn gymaradwy dros amser.
- **Gor-beirianneg y dacsonomi â llawer o is-fathau:** yn ychwanegu
  gorbenion dosbarthiad sy'n erydu disgyblaeth heb ychwanegu
  mewnwelediad cyfrannol.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Olrheinir gwaith yn gyffredinol, heb ddosbarthiad
  elfen-lif; mae gwaith dyled a risg yn anweledig mewn adrodd.
- **Lefel 2, Datblygu:** Mae rhai timau'n dosbarthu elfennau llif yn
  anffurfiol, ond mae diffiniadau'n anghyson ac mae dosbarthiad yn aml yn
  digwydd yn ôl-weithredol.
- **Lefel 3, Safoni:** Mae pob tîm yn dosbarthu wrth gymryd i mewn yn
  erbyn diffiniad a rennir, ysgrifenedig, a rhestrir dosbarthiad llif fel
  tuedd.
- **Lefel 4, Rheoli:** Croeswiritir dosbarthiad llif yn gyfnodol yn erbyn
  tystiolaeth annibynnol, a gosodir dosbarthiadau targed yn fwriadol â
  rhanddeiliaid busnes.
- **Lefel 5, Cerddorfaru:** Mae data elfen-lif yn llywio penderfyniadau
  adnoddau a buddsoddiad yn uniongyrchol ar draws y sefydliad, a gall
  arweinyddiaeth bwyntio at benderfyniadau penodol a wnaed oherwydd bod
  dosbarthiad wedi gwneud cyfaddawd a oedd yn anweledig gynt yn esblyg.

## Syniadau ar gyfer trafodaeth

1. Beth fyddai rhaniad elfen-lif gonest o waith y chwarter diwethaf yn ei ddangos, ac a fyddai'n synnu unrhyw un?
2. A oes gennym ddiffiniad ysgrifenedig ar gyfer pob un o'r pedwar math elfen lif, neu a yw dosbarthiad yn dibynnu ar bwy sy'n labelu'r gwaith?
3. A yw ein dosbarthiad llif erioed wedi drifftio tuag at un math o elfen heb benderfyniad bwriadol y tu ôl iddo?
4. Pa dystiolaeth annibynnol y gallem groeswirio ein dosbarthiad llif yn ei erbyn heddiw?

## Prif gasgliadau

- Mae **elfen lif** yn perthyn i union un o bedwar math, nodweddion,
  diffygion, risgiau, neu ddyled, ac mae dyraniad capasiti ar eu traws yn
  **swm-sero**.
- **Nid oes dosbarthiad iach cyffredinol**; mae'r cymysgedd cywir yn
  dibynnu ar gyfnod cynnyrch a dylai fod yn darged bwriadol, wedi'i
  drafod â rhanddeiliaid busnes.
- Fector twyllo canolog y pwnc yw **dosbarthiad ôl-weithredol**,
  ailenwi'n dawel waith dyled neu risg fel nodwedd ar ôl y ffaith; y
  gledr ddiogelwch yw dosbarthiad amser-cymryd-i-mewn ynghyd ag
  archwiliadau cyfnodol yn erbyn tystiolaeth annibynnol.
- Gwyliwch yn benodol am **batrwm y ffatri nodweddion**, nodweddion yn
  amsugno bron pob capasiti'n gyson, sy'n llwgu gwaith dyled a risg hyd
  nes ei fod yn ymddangos fel argyfwng.
- Mae dosbarthiad llif fwyaf gwerthfawr fel **tuedd**, ac mae ei enillion
  mwyaf yn dod o'i rannu'n uniongyrchol â rhanddeiliaid busnes.

## Cyfeiriadau a darllen pellach

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Kim, Gene, Kevin Behr, a George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing,
  2009.
