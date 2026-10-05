# 4.2 Gorchudd profi ac effeithiolrwydd profi

## Trosolwg a chymhelliant

Mae **[gorchudd profi](https://en.wikipedia.org/wiki/Code_coverage)**
yn mesur y canran o god a weithredir gan set brofion: gorchudd llinell,
gorchudd cangen, neu'r gorchudd llwybr llymach. Dyma un o'r metrigau a
olrheinir fwyaf eang yn y llyfr cyfan hwn, yn rhad i'w gyfrifo, yn hawdd
ei weledoli fel un canran, ac o ganlyniad yn un o'r rhai a dwyllir
amlaf, yn union fel y mae pennod 1.2 yn rhagfynegi ar gyfer unrhyw fetrig
sy'n dod yn darged. Gall set brofion gyflawni gorchudd uchel tra'n
gwirio bron dim byd ystyrlon, oherwydd mae gorchudd yn mesur a
weithredwyd cod yn ystod rhediad prawf, nid a wiriodd y prawf mewn
gwirionedd fod y cod yn ymddwyn yn gywir.

Nid nodyn troed bach yw'r bwlch hwn rhwng gorchudd ac effeithiolrwydd
profi gwirioneddol; dyma bryder canolog y bennod hon. Mae prawf sy'n
galw ffwythiant ac yn haeru dim byd am ei ganlyniad yn cynyddu gorchudd
yn union yr un fath â phrawf sy'n gwirio ymddygiad y ffwythiant yn
drylwyr ar draws achosion ymyl. Mae'r ateb y mae'r bennod hon yn ei
argymell, **profi treiglo**, sy'n cyflwyno beiau bach, artiffisial i mewn
i'r cod yn fwriadol ac yn gwirio a yw'r set brofion mewn gwirionedd yn
eu dal, yr ateb uniongyrchol i'r bwlch hwn, ac mae'r bennod hon yn ei
drin fel ategiad angenrheidiol gorchudd, nid ychwanegiad dewisol.

I dimau mawr, mae targedau gorchudd yn aml yn cael eu mabwysiadu ar
draws y sefydliad fel giât ansawdd, yn union y math o fetrig wedi'i
gymell, uchel-welededd y mae pennod 1.2 yn rhybuddio ei fod fwyaf agored
i dwyllo. Mae sefydliadau menter a llywodraeth sy'n gosod gofyniad
canran gorchudd cyffredinol heb wiriad effeithiolrwydd wedi'i parejo,
i bob pwrpas, yn cymell union y patrwm twyllo-trothwy y mae'r llyfr
hwn yn ei ddisgrifio: profion dibwys wedi'u hysgrifennu'n bur i gyrraedd
rhif, heb unrhyw welliant cyfatebol mewn atal diffyg gwirioneddol.

## Egwyddorion allweddol

- **Mae gorchudd yn mesur gweithrediad, nid gwiriad.** Nid yw llinell yn
  cael ei rhedeg gan brawf yn dweud dim am a wiriodd y prawf unrhyw beth
  ystyrlon amdani.
- **Mae targed gorchudd heb wiriad effeithiolrwydd yn osodiad deddf-
  Goodhart llyfr-testun** (pennod 1.2): mae'r rhif yn gwella tra nad yw
  ansawdd gwirioneddol yn gwneud hynny.
- **Mae profi treiglo'n ategiad angenrheidiol gorchudd**, nid
  disodliad; defnyddiwch y ddau gyda'i gilydd.
- **Mae gorchudd yn fwy defnyddiol fel llawr nag fel targed i'w
  fwyafu.** Mae rhif isel yn datgelu cod gwirioneddol heb ei brofi;
  mae mynd ar drywydd 100% yn aml yn cynhyrchu enillion lleihaol neu
  negyddol.
- **Mae gorchudd llwybr-dyngedfennol yn bwysicach na gorchudd unffurf,
  cyffredinol.** Nid yw pob cod yn cario'r un perygl os yw'n methu.

## Argymhellion

### Defnyddiwch orchudd i ddod o hyd i god heb ei brofi, nid fel targed i'w fwyafu

Triniwch adroddiad gorchudd yn bennaf fel map o'r hyn nad oes ganddo
brawf o gwbl, sy'n wybodaeth wirioneddol ddefnyddiol, yn hytrach na
sgôr i'w wthio tuag at 100%. Mae cod â sero gorchudd yn fwlch
gwirioneddol sy'n werth ei gau; mae gwerth ymylol gwthio gorchudd o 85%
i 95% fel arfer yn llawer is ac yn aml nid yn werth yr ymdrech y mae'n
ei gymryd, yn enwedig os yw'r ymdrech honno'n cynhyrchu profion gwerth-
isel dim ond i gyrraedd y rhif uwch.

### Parejwch bob targed gorchudd â phrofi treiglo

Mae offer **profi treiglo** yn cyflwyno beiau bach i'ch cod yn
awtomatig, gan droi gweithredydd cymhariaeth, newid amod ffin, ac yna'n
rhedeg eich set brofion yn erbyn pob fersiwn wedi'i dreiglo. Mae set
brofion sy'n "lladd" (methu yn erbyn) y rhan fwyaf o dreigladau'n
gwirio ymddygiad yn wirioneddol; mae set brofion â gorchudd llinell
uchel ond cyfradd lladd-treiglo isel yn gweithredu cod heb ei wirio'n
ystyrlon. Y parejiad hwn yw'r gledr ddiogelwch sengl fwyaf effeithiol yn
erbyn twyllo targed-gorchudd, ac mae'r llyfr hwn yn ei argymell fel
arfer safonol, nid techneg uwch neu ddewisol.

### Blaenoriaethwch orchudd a phrofi treiglo ar lwybrau dyngedfennol yn gyntaf

Nid yw pob cod yn cario'r un perygl. Mae llwybr prosesu-taliadau,
gwiriad dilysu, neu sgript mudo-data'n haeddu profi llawer mwy trylwyr
nag adroddiad gweinyddol a ddefnyddir yn anaml. Yn hytrach na mynd ar
drywydd gorchudd unffurf ar draws sylfaen cod gyfan, nodwch eich
llwybrau cod perygl-uchaf, canlyniad-uchaf a chanolbwyntiwch ymdrech
gorchudd a phrofi treiglo yno'n gyntaf, gan dderbyn gorchudd is ar god
gwirioneddol berygl-isel fel cyfaddawd bwriadol, gwybodus yn hytrach na
goruchwyliaeth.

### Gwyliwch am y patrymau twyllo-gorchudd penodol

Mae'r ffyrdd mwyaf cyffredin y mae gorchudd yn cael ei dwyllo, unwaith y
daw'n darged, yn cynnwys: profion sy'n galw ffwythiant ond yn haeru dim
byd ystyrlon am y canlyniad (twyllo trothwy pennod 1.2 wedi'i gymhwyso
i'r metrig hwn), analluogi neu ddileu profion sy'n methu yn hytrach na
thrwsio'r broblem sylfaenol, ac eithrio cod anodd ei brofi o'r cyfrifiad
gorchudd yn gyfan gwbl yn hytrach na mynd i'r afael â pham ei fod yn
anodd ei brofi. Archwiliwch sampl o brofion yn uniongyrchol yn gyfnodol,
gan ddarllen eu haeriadau gwirioneddol, yn hytrach nag ymddiried yn y
canran gorchudd yn unig.

### Gosodwch lawr gorchudd, nid nenfwd gorchudd, yn eich piblinell CI

Ffurfweddwch eich piblinell adeiladu i fethu os yw gorchudd yn gostwng o
dan lawr y cytunwyd arno ar gyfer cod newydd, gan atal ôl-gwympiad, yn
hytrach na mynnu bod pob newid yn gwthio'r rhif cyffredinol yn uwch.
Mae'r gwahaniaeth hwn yn bwysig: mae llawr yn gwarchod yn erbyn
ôl-gwympiad heb greu'r un pwysau esgynnol didostur sy'n cynhyrchu
profion gwerth-isel wedi'u hysgrifennu'n bur i symud y rhif ychydig yn
uwch ymhellach.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Canran gorchudd yn unig | Rhad, syml, wedi'i gefnogi'n eang gan offeryno | Yn hawdd ei dwyllo; yn mesur gweithrediad, nid gwiriad |
| Gorchudd ynghyd â phrofi treiglo | Yn gwirio bod profion mewn gwirionedd yn gwirio ymddygiad, yn gwrthsefyll twyllo | Yn fwy costus yn gyfrifiadol; angen buddsoddiad offeryno |
| Targed gorchudd unffurf ar draws y sylfaen cod | Syml i'w ddatgan a'i orfodi | Yn gwastraffu ymdrech ar god perygl-isel; yn tan-fuddsoddi mewn perthynas â pherygl mewn mannau eraill |
| Gorchudd seiliedig-ar-berygl, llwybr-dyngedfennol-yn-gyntaf | Yn canolbwyntio ymdrech lle mae'n bwysicaf | Angen barn i nodi llwybrau gwirioneddol ddyngedfennol yn gywir |

Y tensiwn canolog yw **symlrwydd yn erbyn gonestrwydd**. Mae un canran
gorchudd yn hawdd ei adrodd ac yn hawdd ei osod fel targed, ond y
symlrwydd hwnnw yw'n union yr hyn sy'n ei gwneud mor hawdd ei dwyllo
unwaith y daw'n rif wedi'i gymell. Datryswch y tensiwn trwy dderbyn y
cymhlethdod ychwanegol o brofi treiglo a blaenoriaethu seiliedig-ar-
berygl fel cost signal gonest, a thrwy gyfathrebu'n benodol i'ch tîm pam
mae rhif gorchudd cyffredinol is, wedi'i ganolbwyntio'n gywir ar
lwybrau dyngedfennol ac wedi'i gefnogi gan gyfradd lladd-treiglo gref,
yn fwy gwerthfawr nag un uwch, wedi'i ddosbarthu'n fwy unffurf ond wedi'i
wirio'n llai effeithiol.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Beth yw ein cyfradd lladd-treiglo ar ein llwybrau cod perygl-uchaf,
   a sut mae'n cymharu â'n canran gorchudd ar yr un cod?** Mae bwlch
   mawr rhwng rhif gorchudd uchel a chyfradd lladd-treiglo isel yn
   arwydd cliriaf posibl nad yw gorchudd ar ei ben ei hun yn dweud
   wrthych yr hyn yr ydych yn meddwl ei fod yn ei ddweud.

2. **A ydym erioed wedi ysgrifennu prawf yn bennaf i gynyddu rhif
   gorchudd, gydag ychydig o feddwl gwirioneddol am yr hyn y dylai ei
   wirio?** Byddwch yn onest yma; mae hyn yn digwydd yn amlach nag y
   mae timau'n hoffi ei gyfaddef, yn enwedig o dan bwysau terfyn amser
   pan fydd giât gorchudd yn rhwystro uno.

3. **A yw ein hymdrech orchudd wedi'i chanolbwyntio ar ein llwybrau cod
   perygl-uchaf, neu wedi'i lledaenu'n unffurf waeth beth fo'r canlyniad
   os yw'r cod hwnnw'n methu?** Mapiwch eich dosbarthiad gorchudd
   cyfredol yn erbyn asesiad perygl onest o'ch sylfaen cod a chwiliwch
   am y camgyfateb.

4. **A ydym erioed wedi analluogi neu ddileu prawf sy'n methu yn hytrach
   na thrwsio'r broblem sylfaenol a ddatgelwyd ganddo?** Dyma un o'r
   ffurfiau mwyaf niweidiol o dwyllo gorchudd, oherwydd ei fod yn
   dileu diogelwch gwirioneddol yn weithredol tra bo'r rhif gorchudd a
   adroddir prin yn symud.

5. **A yw ein piblinell CI'n gorfodi llawr gorchudd ar gyfer cod newydd,
   neu a yw'n gwthio am nenfwd cynyddol uwch waeth beth fo enillion
   lleihaol?** Trafodwch a yw dyluniad eich giât cyfredol yn creu'r
   cymhelliant iawn, gwarchod yn erbyn ôl-gwympiad, neu'r un anghywir,
   pwysau esgynnol didostur sy'n gwobrwyo padio prawf gwerth-isel.

6. **Pa god yn ein sylfaen cod sydd wedi'i eithrio o'r cyfrifiad
   gorchudd, ac a yw'r eithriad hwnnw'n gyfiawn neu'n cuddio bwlch
   profi gwirioneddol?** Adolygwch eich ffurfweddiad eithrio
   gwirioneddol; mae'n gyffredin i'r rhestr hon dyfu'n dawel dros
   amser heb i unrhyw un ailystyried a yw pob eithriad yn dal yn
   gyfiawn.

## Golwg sector

**Cwmni newydd.** Mae targedau gorchudd ffurfiol yn aml yn ddiangen mor
gynnar; canolbwyntiwch ymdrech ysgrifennu-prawf yn uniongyrchol ar eich
llwybrau cod mwyaf peryglus, mwyaf dyngedfennol-busnes (rhesymeg talu
neu llif-gwaith-craidd fel arfer) yn hytrach na mynd ar drywydd canran
cyffredinol ar draws sylfaen cod sy'n dal i newid yn gyflym ac a all
gael ei hailysgrifennu'n sylweddol yn fuan beth bynnag.

**Busnes bach.** Mae'r rhan fwyaf o blatfformau CI'n adrodd gorchudd yn
awtomatig am gost osod isafswm; defnyddiwch ef yn bennaf i sbotio cod
dyngedfennol heb ei brofi o gwbl yn hytrach na mynd ar drywydd canran
targed penodol, ac ystyriwch brofi treiglo dim ond unwaith y bydd
gennych y gallu peirianneg i weithredu ar yr hyn y mae'n ei ddatgelu.

**Menter.** Mae targedau gorchudd cyffredinol, ar draws y sefydliad yn
gamgymeriad cyffredin a chanlyniadol ar y raddfa hon, gan eu bod yn
cymell union y twyllo y mae'r bennod hon yn ei ddisgrifio ar draws
degau o dimau ar yr un pryd. Sefydlwch ddisgwyliadau gorchudd
seiliedig-ar-berygl sy'n amrywio yn ôl dyngedfennoldeb gwasanaeth, a
buddsoddwch mewn isadeiledd profi treiglo ar gyfer eich systemau
perygl-uchaf yn benodol.

**Llywodraeth.** Mae gofynion gorchudd weithiau'n ymddangos mewn
dogfennaeth caffael neu gydymffurfio fel dirprwy pŵl, hawdd ei
benodi ar gyfer sicrwydd ansawdd. Lle bo'n bosibl, parejwch unrhyw
ganran gorchudd sy'n ofynnol yn gontractiol â gofyniad effeithiolrwydd
seiliedig-ar-brofi-treiglo neu ddiffyg, fel nad yw'r cymhelliant
contractiol yn ddamweiniol yn gwobrwyo union y padio prawf gwerth-isel
y mae'r bennod hon yn rhybuddio yn ei erbyn.

## Enghreifftiau

**Menter.** Roedd arweinyddiaeth platfform e-fasnach wedi gosod gofyniad
gorchudd 95% ar draws y cwmni ar gyfer pob cod newydd, wedi'i orfodi
fel giât CI galed. Canfu archwiliad ddwy flynedd yn ddiweddarach, wedi'i
ysgogi gan don o ddiffygion cynhyrchu mewn cod y tybid ei fod wedi'i
brofi'n dda, gyfradd lladd-treiglo o dan 40% ar draws llawer o'r
sylfaen cod: roedd timau wedi bod yn ysgrifennu profion a weithredai
lwybrau cod heb haeru'n ystyrlon ar eu hymddygiad, yn bur i fodloni'r
giât o dan bwysau terfyn amser. Disodlodd y cwmni'r gofyniad gorchudd
cyffredinol â pholisi wedi'i haenu-yn-ôl-perygl: gorchudd llym ynghyd â
phrofi treiglo gorfodol uwchlaw trothwy cyfradd-lladd 80% ar gyfer cod
talu a dilysu, a llawr gorchudd llawer ysgafnach ar gyfer offeryno
mewnol perygl-isel, a leihaodd ymdrech brofi wastraffus a gwella
cyfraddau diffyg yn fesuradwy yn y llwybrau gwirioneddol ddyngedfennol
fel ei gilydd.

**Llywodraeth.** Roedd system cymhwysedd-budd-daliadau asiantaeth iechyd
gyhoeddus wedi bod yn ofynnol yn gontractiol i gynnal 90% o orchudd
profi o dan ei chytundeb gwerthwr datblygu. Canfu adolygiad ôl-ddigwyddiad,
yn dilyn diffyg cyfrifo-cymhwysedd sylweddol a ryddhawyd er
gwaethaf bodloni'r gofyniad gorchudd, fod y ffwythiant penodol yn
gyfrifol wedi cyflawni ei orchudd yn gyfan gwbl trwy brofion a alwodd y
ffwythiant â mewnbynnau dilys ond nad oeddent byth yn profi amodau
ffin na mewnbynnau annilys, yn union lle digwyddodd y diffyg. Mae
contract gwerthwr diwygiedig yr asiantaeth bellach yn mynnu sgôr profi-
treiglo wedi'i ddogfennu ochr yn ochr â gorchudd ar gyfer unrhyw god
cyfrifo-cymhwysedd, gan gau'r bwlch penodol a oedd wedi caniatáu i
brofi cydymffurfiol ond aneffeithiol fodloni'r contract.

## Achos busnes: cymhellion, ROI, a TCO

Dal y bwlch rhwng ansawdd prawf ymddangosiadol a gwirioneddol cyn iddo
gostio diffyg cynhyrchu yw'r enillion ar barejo gorchudd â phrofi
treiglo. Mae'r enghraifft e-fasnach uchod yn dangos y patrwm yn glir: roedd
gofyniad gorchudd yn unig wedi cynhyrchu ymdeimlad ffug o ddiogelwch yr
oedd ton o ddiffygion yn y pen draw yn ei ddatgelu am gost lawer mwy na'r
buddsoddiad profi-treiglo a fyddai wedi dal y bwlch yn gynharach.

Mae cost cyfanswm perchnogaeth yn cynnwys cost gyfrifiadurol profi
treiglo, sy'n fwy costus i'w redeg nag offeryno gorchudd syml ac felly
fel arfer yn cael ei neilltuo ar gyfer cod llwybr-dyngedfennol yn
hytrach na sylfaen cod gyfan, ynghyd ag amser peirianneg i ddehongli a
gweithredu ar ganlyniadau. Mae'r gost honno'n gyfiawn yn benodol ar
gyfer y cod perygl-uchaf, lle mae cost bwlch heb ei ganfod mewn
effeithiolrwydd profi ar ei uchaf.

## Gwrth-batrymau a pheryglon

- **Trin canran gorchudd fel dyfarniad ansawdd uniongyrchol:** mae'n
  mesur gweithrediad, nid gwiriad.
- **Ysgrifennu profion yn bennaf i fodloni giât gorchudd:** yn
  cynhyrchu union y patrwm twyllo-trothwy, gwerth-isel y mae pennod
  1.2 yn rhybuddio yn ei erbyn.
- **Analluogi neu ddileu profion sy'n methu yn lle trwsio'r broblem
  sylfaenol:** yn dileu diogelwch gwirioneddol tra prin yn effeithio
  ar y rhif a adroddir.
- **Cymhwyso targed gorchudd unffurf waeth beth fo perygl y cod:** yn
  gwastraffu ymdrech ar god perygl-isel ac yn tan-fuddsoddi mewn
  llwybrau gwirioneddol ddyngedfennol.
- **Tyfu rhestr eithrio'n dawel dros amser:** yn cuddio bylchau profi
  gwirioneddol y tu ôl i ffigur gorchudd sy'n dechnegol gywir ond yn
  camarweiniol.
- **Mynd ar drywydd nenfwd gorchudd yn hytrach na llawr gorchudd:** yn
  creu pwysau esgynnol didostur sy'n gwobrwyo padio prawf dros wiriad
  gwirioneddol.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Ni fesurir gorchudd, neu fe'i mesurir yn
  anghyson heb lawr, targed, na gwiriad effeithiolrwydd.
- **Lefel 2, Datblygu:** Mae targed gorchudd yn bodoli ac yn cael ei
  olrhain, ond nid oes profi treiglo na blaenoriaethu seiliedig-ar-
  berygl yn llywio sut mae ymdrech yn cael ei dyrannu.
- **Lefel 3, Safoni:** Gorfodir llorau gorchudd yn gyson yn CI, gyda
  blaenoriaethu seiliedig-ar-berygl yn cyfeirio ble mae ymdrech
  gorchudd yn canolbwyntio.
- **Lefel 4, Rheoli:** Rhedir profi treiglo ar god llwybr-dyngedfennol,
  gyda throthwy cyfradd-lladd a olrheinir y mae'n rhaid ei fodloni
  ochr yn ochr â gorchudd, ac archwilir rhestrau eithrio'n gyfnodol.
- **Lefel 5, Cerddorfaru:** Gall y sefydliad bwyntio at ostyngiadau
  diffyg penodol wedi'u holrhain at flaenoriaethu wedi'i lywio gan
  brofi treiglo, ac mae data gorchudd ac effeithiolrwydd gyda'i
  gilydd yn llywio penderfyniadau buddsoddi profi'n uniongyrchol.

## Syniadau ar gyfer trafodaeth

1. Beth yw ein cyfradd lladd-treiglo ar ein llwybr cod mwyaf dyngedfennol sengl, ac a ydym hyd yn oed yn ei wybod?
2. A ydym erioed wedi ysgrifennu prawf gwerth-isel yn bur i fodloni giât gorchudd?
3. A yw ein hymdrech orchudd gyfredol wedi'i chanolbwyntio lle mae perygl uchaf, neu wedi'i lledaenu'n unffurf?
4. Pa god sydd wedi'i eithrio o'r cyfrifiad gorchudd ar hyn o bryd, ac a yw'r eithriad hwnnw'n dal yn gyfiawn?
5. A fyddai buddsoddiad profi-treiglo ar ein system perygl-uchaf yn werth ei gost gyfrifiadurol?

## Prif gasgliadau

- Mae gorchudd profi'n mesur **gweithrediad, nid gwiriad**; nid yw
  llinell a orchuddir yn dweud dim am a gafodd ei gwirio'n ystyrlon.
- Parejwch orchudd â **phrofi treiglo** i wirio bod profion mewn
  gwirionedd yn dal beiau gwirioneddol, nid dim ond eu bod yn rhedeg y
  cod.
- Canolbwyntiwch ymdrech brofi ar **lwybrau dyngedfennol, perygl-uchel**
  yn hytrach na mynd ar drywydd gorchudd unffurf ar draws sylfaen cod
  gyfan.
- Defnyddiwch orchudd fel **llawr i warchod yn erbyn ôl-gwympiad**, nid
  nenfwd i'w fwyafu'n ddidostur.
- Gwyliwch am y patrymau twyllo-gorchudd penodol: **profion gwerth-isel,
  profion methu wedi'u hanalluogi, a rhestrau eithrio sy'n tyfu'n
  dawel**.

## Cyfeiriadau a darllen pellach

- *Working Effectively with Legacy Code*, gan Michael Feathers
  (strategaeth gorchudd profi ar gyfer sylfeini cod presennol, anodd eu
  profi).
- Jia, Yue, a Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering*
  (2011): arolwg cynhwysfawr o dechnegau profi treiglo a'u
  heffeithiolrwydd.
- *xUnit Test Patterns*, gan Gerard Meszaros (patrymau dylunio prawf
  sy'n berthnasol i ysgrifennu profion gwirioneddol effeithiol, nid dim
  ond rhai sy'n bodloni gorchudd).
- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (y berthynas rhwng arferion profi a
  pherfformiad cyflenwi).
