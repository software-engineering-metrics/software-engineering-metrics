# 7.2 Mesur datblygiad meddalwedd â chymorth AI

## Trosolwg a chymhelliant

Sefydlodd pennod 7.1 pam nad yw sawl metrig presennol bellach yn mesur
yr hyn yr oeddent yn arfer ei fesur yn ddibynadwy o dan ddatblygiad â
chymorth AI. Mae'r bennod hon yn ymwneud â beth i'w fesur yn lle hynny:
sut i wybod, â thystiolaeth wirioneddol yn hytrach nag argraff neu
farchnata gwerthwr, a yw cymorth codio AI mewn gwirionedd yn helpu eich
sefydliad, a faint. Dyma gwestiwn gwirioneddol bwysig â chanlyniadau
cyllideb gwirioneddol, mae trwyddedau offeryno AI'n cynrychioli cost
wirioneddol, barhaus, mae disgyblaeth economeg uned pennod 5.4'n
gymwys yn uniongyrchol, ac mae sefydliad na all ei ateb â thystiolaeth
naill ai'n gordalu am offeryn nad yw'n helpu neu'n tan-fuddsoddi mewn un
sy'n wirioneddol yn helpu.

Mae dull y bennod hon yn tynnu'n uniongyrchol ar egwyddor canlyniadau-
dros-allbwn pennod 1.3, wedi'i chymhwyso nawr yn benodol i werthuso
offeryno AI. Mae'r dull naïf, mwyaf cyffredin yn mesur datblygiad â
chymorth AI yn ôl cyfaint allbwn, llinellau o god a gynhyrchwyd,
awgrymiadau wedi'u derbyn, amser wedi'i arbed fesul tasg fel yr adroddir
gan ddatblygwyr eu hunain, yn union y metrigau y rhybuddiodd pennod
7.1 eu bod fwyaf agored i'r symudiad hwn. Mae'r dull mwy trylwyr y mae'r
bennod hon yn ei argymell yn mesur canlyniadau: a leihaodd cymorth AI
amser cylch yn wirioneddol heb ddirywio ansawdd, a leihaodd amser a
dreuliwyd ar waith ailadroddus, gwerth-isel gwirioneddol, gan ryddhau
capasiti ar gyfer gwaith gwerth-uwch, ac a effeithiodd yn fesuradwy ar
ganlyniadau busnes a chynnyrch Rhan 5.

I dimau mawr, mae cael y mesuriad hwn yn iawn yn penderfynu a wneir
penderfyniadau buddsoddi offeryno AI ar dystiolaeth neu ar hawliadau
gwerthwr a momentwm sefydliadol. Mae angen tystiolaeth wirioneddol o
werth ar sefydliadau menter sy'n negodi contractau offeryno AI ar
raddfa fawr i gyfiawnhau'r gwariant ac i gymharu offer cystadleuol yn
deg; mae angen methodoleg gwerthuso trylwyr, amddiffynadwy ar
sefydliadau llywodraeth, sy'n aml o dan graffu penodol ar gyfer gwariant
technoleg, cyn ymrwymo cyllid cyhoeddus i fabwysiadu offeryno AI ar
raddfa.

## Egwyddorion allweddol

- **Mesurwch gymorth AI yn ôl canlyniad, nid cyfaint allbwn nac
  ystadegau defnydd a adroddir gan werthwr.** Mae disgyblaeth pennod
  1.3'n gymwys â grym llawn yma.
- **Defnyddiwch [grŵp cymharu](https://en.wikipedia.org/wiki/Treatment_and_control_groups)
  gwirioneddol lle bynnag y bo'n ymarferol**, nid dim ond cymhariaeth
  cyn-ac-ar-ôl y gallai llinell sylfaen gynyddol, eang-i'r-diwydiant ei
  drysu.
- **Mae arbedion amser a adroddir gan hunan yn signal gwan ar eu pen eu
  hunain.** Parejwch nhw â data amser-cylch ac ansawdd gwrthrychol.
- **Mesurwch y gost lawn, gan gynnwys amser adolygu a chywiro**, nid
  dim ond cyflymder cynhyrchu.
- **Gall gwahanol dasgau a gwahanol beirianwyr weld gwerth cymorth AI
  gwahanol iawn.** Osgowch un rhif cymysg, ar draws y sefydliad sy'n
  cuddio'r amrywiad hwn.

## Argymhellion

### Adeiladwch gymhariaeth wirioneddol, nid dim ond ciplun cyn-ac-ar-ôl

Lle bo'n ymarferol, cymharwch ganlyniadau rhwng grŵp sy'n defnyddio
cymorth AI a grŵp cymharadwy nad yw'n ei ddefnyddio, dros yr un cyfnod,
yn hytrach na dim ond cymharu rhifau cyn-ac-ar-ôl eich sefydliad eich
hun, na all wahaniaethu effaith cymorth AI oddi wrth unrhyw newid
cydamserol arall (mae rhybudd ffactor-drysu pennod 1.6'n gymwys yn
uniongyrchol). Lle mae grŵp cymharu gwirioneddol yn anymarferol,
cymharwch o leiaf yn erbyn llinell sylfaen hanesyddol hirach (siart
reoli, yn ôl pennod 1.6) yn hytrach na chiplun cyn-ac-ar-ôl sengl sy'n
agored i atchweliad i'r cyfartaledd neu newidiadau cydamserol,
amherthnasol.

### Mesurwch amser cylch ac ansawdd gyda'i gilydd, byth hawliad cyflymder cymorth AI ar ei ben ei hun

Cymhwyswch ddisgyblaeth pennod 2.6 a phennod 2.10'n uniongyrchol:
olrheiniwch a yw gwaith â chymorth AI yn symud yn gyflymach trwy
gamau amser-cylch, ac ar yr un pryd a yw cyfradd methiant newid neu
gyfradd diffygion dianc (pennod 5.1) ar gyfer y gwaith hwnnw'n symud i'r
cyfeiriad anghywir. Mae enillion cynhyrchedd gwirioneddol yn dangos
amser cylch cyflymach ag ansawdd sefydlog neu well; mae enillion ffug yn
dangos amser cylch cyflymach ag ansawdd dirywiedig, union y fasnach y
rhybuddiodd pennod 7.1 yn ei erbyn, wedi'i darganfod yma trwy'r un
ddisgyblaeth metrig-wedi'i-barejo y mae'r llyfr hwn yn ei chymhwyso
drwyddo draw.

### Cynhwyswch amser adolygu a chywiro yn y cyfrifo cost lawn

Efallai na fydd cod a gynhyrchwyd-gan-AI sy'n gyflymach i'w gynhyrchu
ond yn arafach i'w adolygu, neu sydd angen mwy o gywiro ac ailwaith ar
ôl cynhyrchu cychwynnol, yn dangos unrhyw welliant amser-cylch net
unwaith y mesurir y biblinell lawn, hyd yn oed os oedd y cam cynhyrchu-
cod cychwynnol yn teimlo'n ddramatig gyflymach i'r peiriannydd unigol.
Mesurwch y gadwyn amser-cylch lawn (pennod 2.6), nid dim ond y cam
codio, i ddal hyn yn onest yn hytrach na rhoi clod i gymorth AI yn
seiliedig ar ymdeimlad o gyflymder, ond un anghyflawn.

### Triniwch arbedion amser a adroddir gan hunan fel damcaniaeth gychwynnol, nid casgliad

Mae hunan-adroddiad datblygwr o "arbedodd hyn awr i mi" yn ddefnyddiol
fel signal cychwynnol ac fel cyd-destun ansoddol (mae dull cyfunol
meintiol-ansoddol pennod 5.3'n gymwys yma hefyd), ond mae'n destun yr un
gogwyddau cof ac awydd-i-blesio y mae pennod 1.5'n rhybuddio amdanynt
ar gyfer unrhyw ddata hunan-adroddedig, ac nid yw'n dweud dim am gost
adolygu neu gywiro i lawr yr afon. Defnyddiwch hunan-adroddiad i
gynhyrchu damcaniaethau am ble mae cymorth AI'n helpu fwyaf, yna
dilyswch y damcaniaethau hynny yn erbyn data amser-cylch ac ansawdd
gwrthrychol cyn dod i gasgliad cadarn.

### Segmentwch fesuriad yn ôl math tasg ac osgowch un rhif cymysg

Mae'n debygol bod cymorth codio AI'n darparu gwerth gwahanol iawn ar
gyfer tasgau boilerplate, wedi'u deall yn dda na thasgau datrys-problem
gwirioneddol newydd, cymhleth. Mesurwch ac adroddwch yn ôl categori
tasg yn hytrach nag un cyfartaledd cymysg, ar draws y sefydliad, a all
guddio'r ffaith bod cymorth yn darparu gwerth cryf mewn un categori tra'n
darparu ychydig neu hyd yn oed werth negyddol mewn categori arall,
gwybodaeth y byddai rhif cymysg yn ei chuddio'n gyfan gwbl.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Arbedion amser a adroddir gan hunan yn unig | Cyflym, hawdd ei gasglu | Signal gwan; agored i ogwydd; yn anwybyddu cost adolygu i lawr yr afon |
| Cymhariaeth cyn-ac-ar-ôl yn unig | Syml i'w sefydlu | Wedi'i drysu gan unrhyw newid cydamserol arall neu duedd eang-i'r-diwydiant |
| Grŵp cymharu gwirioneddol | Y dystiolaeth gryfaf, fwyaf amddiffynadwy | Anos ei drefnu; efallai na fydd yn ymarferol ar gyfer cyflwyniad mabwysiadu-llawn |
| Mesuriad canlyniad wedi'i segmentu-yn-ôl-tasg | Yn datgelu ble mae gwerth mewn gwirionedd yn canolbwyntio | Angen olrhain a chategoreiddio mwy manwl |

Y tensiwn canolog yw **trylwyredd mesur yn erbyn ymarferoldeb**. Mae
grŵp cymharu gwirioneddol, wedi'i reoli yn dystiolaeth gryfaf ond yn
aml yn anymarferol unwaith y bydd offeryn wedi'i gyflwyno ar draws y
sefydliad heb grŵp rheoli wedi'i gadw'n ôl; mae argraffiadau a adroddir
gan hunan yn gyflym ac yn hawdd ond yn wan ar eu pen eu hunain.
Datryswch y tensiwn trwy ddefnyddio'r dyluniad cymharu cryfaf y mae
eich cyflwyniad gwirioneddol yn ei ganiatáu, grŵp rheoli gwirioneddol
yn ystod cyfnod peilot cynnar os yn bosibl, siart reoli llinell
sylfaen hanesyddol os na, a thrin hunan-adroddiad fel offeryn
cynhyrchu-damcaniaeth yn hytrach na'r gair olaf, waeth pa ddyluniad
cymharu y byddwch yn ei ddefnyddio yn y pen draw.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A oedd gennym, neu a allem ni ddal adeiladu, grŵp cymharu
   gwirioneddol ar gyfer gwerthuso ein mabwysiad offeryno AI, neu a
   ydym yn dibynnu'n gyfan gwbl ar gymhariaeth cyn-ac-ar-ôl?** Os na
   sefydlwyd grŵp cymharu gwirioneddol erioed, trafodwch a allai siart
   reoli llinell sylfaen hanesyddol ddal ddarparu dewis arall rhesymol
   drylwyr.

2. **A ydym wedi mesur amser cylch ac ansawdd gyda'i gilydd ar gyfer
   gwaith â chymorth AI, neu a oes gennym ddim ond hawliad cyflymder heb
   wiriad ansawdd cyfatebol?** Tynnwch pa ddata bynnag sy'n bodoli a
   gwiriwch am y parejiad penodol hwn; os nad yw'n bodoli, dyna'r
   trwsiad blaenoriaeth-uchaf sengl y mae'r bennod hon yn ei argymell.

3. **A yw ein mesuriad amser-cylch ar gyfer gwaith â chymorth AI yn
   cynnwys amser adolygu a chywiro, neu dim ond y cam cynhyrchu
   cychwynnol?** Mae hawliad cyflymder yn seiliedig ar amser cynhyrchu
   yn unig, gan anwybyddu cost adolygu i lawr yr afon, yn mentro trap
   cyfrifo-anghyflawn y mae'r bennod hon yn rhybuddio yn ei erbyn yn
   uniongyrchol.

4. **Pa hawliadau arbedion-amser a adroddir gan hunan yr ydym wedi'u
   casglu, ac a ydym wedi dilysu unrhyw un ohonynt yn erbyn data
   gwrthrychol?** Dewiswch hawliad penodol, a ailadroddir yn gyffredin a
   gwiriwch a yw'r data gwrthrychol mewn gwirionedd yn ei gefnogi.

5. **A yw ein mesuriad cyfredol yn cymysgu pob math o dasg yn un rhif,
   neu a ydym yn gwybod pa gategorïau penodol o waith sy'n gweld y
   gwerth cymorth AI cryfaf?** Os wedi'i gymysgu, trafodwch beth y
   gallai dadansoddiad wedi'i segmentu-yn-ôl-tasg ei ddatgelu y mae'r
   rhif cyfredol yn ei guddio.

6. **Petai'n rhaid i ni amddiffyn ein buddsoddiad offeryno AI i
   randdeiliad ariannol amheugar heddiw, gan ddefnyddio tystiolaeth yn
   hytrach nag argraff, beth y byddem mewn gwirionedd yn gallu ei ddangos
   iddynt?** Mae'r prawf concrid hwn yn datgelu'r bwlch rhwng yr hyn y
   mae eich sefydliad yn ei gredu ar hyn o bryd am werth cymorth AI a'r
   hyn y gall mewn gwirionedd ei ddangos â thystiolaeth.

## Golwg sector

**Cwmni newydd.** Mae astudiaeth grŵp-cymharu ffurfiol fel arfer yn
anymarferol ar raddfa fach, ond mae hyd yn oed golwg cyn-ac-ar-ôl syml,
onest ar amser cylch a chyfradd diffyg, yn hytrach na dibynnu'n bur ar
pa mor gyflymach y mae'r gwaith yn teimlo, yn rhoi signal ystyrlon fwy
dibynadwy nag argraff yn unig.

**Busnes bach.** Canolbwyntiwch ymdrech fesur ar eich categori tasg
gwerth-uchaf, mwyaf ailadroddus yn gyntaf, lle mae gwerth cymorth AI
fwyaf tebygol o fod yn glir a mesuradwy, yn hytrach na cheisio
gwerthusiad cynhwysfawr ar draws pob math o waith y mae eich tîm bach
yn ei wneud.

**Menter.** Mae cymhariaeth wirioneddol, reoledig yn ystod cyfnod
peilot cynnar, cyn cyflwyniad llawn ar draws y sefydliad, yn aml yn
gyraeddadwy yma ac yn werth yr ymdrech fwriadol i'w threfnu, gan ei fod
yn cynhyrchu tystiolaeth lawer mwy amddiffynadwy ar gyfer y penderfyniad
buddsoddi offeryno ar raddfa fawr sy'n nodweddiadol yn dilyn peilot
llwyddiannus.

**Llywodraeth.** Mae penderfyniadau gwariant technoleg gyhoeddus, gan
gynnwys caffael offeryno AI, yn aml yn wynebu craffu penodol ac efallai
y bydd angen cyfiawnhad cost-budd ffurfiol (pennod 5.5). Adeiladwch y
ddisgyblaeth fesur y mae'r bennod hon yn ei hargymell i mewn i unrhyw
gyfnod peilot o'r dechrau, gan fod methodoleg gwerthuso trylwyr,
ddogfennedig yn cryfhau'r achos cyllido neu gaffael terfynol yn
sylweddol.

## Enghreifftiau

**Menter.** Cyflwynodd cwmni meddalwedd gynorthwyydd codio AI i hanner
ei dimau peirianneg fel peilot bwriadol, gan gadw'r hanner arall fel
grŵp cymharu am chwarter cyn cyflwyniad llawn. Dangosodd y grŵp peilot
welliant amser-cylch gwirioneddol, ystyrlon yn ystadegol ar gyfer
tasgau boilerplate-drwm, wedi'u diffinio'n dda, ond ni ddangosodd
unrhyw welliant mesuradwy, a chyfrif ailadrodd-adolygu ychydig yn uwch
(pennod 2.9), ar gyfer gwaith pensaernïol cymhleth, newydd. Arweiniodd
y canfyddiad wedi'i segmentu-yn-ôl-tasg hwn, dim ond yn weladwy
oherwydd y dyluniad cymharu gwirioneddol a'r dadansoddiad categori-
tasg, y cwmni i dargedu negeseuon cyflwyno cymorth AI a hyfforddiant
yn benodol tuag at y categorïau tasg lle helpodd yn ddangosadwy, yn
hytrach na'i gyflwyno fel hwb cynhyrchedd unffurf ar draws pob gwaith.

**Llywodraeth.** Dibynnodd asiantaeth ffederal oedd yn peilota cymorth
codio AI ar gyfer is-set o'i thimau rhaglen foderneiddio yn wreiddiol
ar arolygon arbedion-amser a adroddir gan hunan, a ddangosodd
ymatebion brwdfrydig, unffurf gadarnhaol. Canfu dadansoddiad gwrthrychol
dilynol, gan gymharu amser cylch a chyfradd diffygion dianc rhwng y
timau peilot a charfan gymharadwy nad oedd yn y peilot yn gweithio ar
gydrannau system tebyg, fod y gwelliant amser-cylch gwrthrychol yn
wirioneddol ond yn sylweddol lai na'r hyn a awgrymai'r amcangyfrifon a
adroddwyd gan hunan, a nododd gynnydd cymedrol ond gwirioneddol mewn
amser adolygu a oedd wedi bod yn gwrthbwyso rhywfaint o enillion
cyflymder-cynhyrchu, canfyddiad yr oedd y data hunan-adroddedig ar ei
ben ei hun wedi'i golli'n gyfan gwbl. Llywiodd y darlun mwy cywir,
seiliedig-ar-dystiolaeth hwn achos busnes mwy cymedrol a mwy
amddiffynadwy'n uniongyrchol ar gyfer caffael parhaus, estynedig yr
offeryn.

## Achos busnes: cymhellion, ROI, a TCO

Penderfyniadau buddsoddi hyderus, seiliedig-ar-dystiolaeth yw'r enillion
ar fesur datblygiad â chymorth AI yn drylwyr: gall sefydliad sy'n
gwybod yn union ble mae cymorth AI'n wirioneddol helpu fuddsoddi mewn ei
ehangu yno ac osgoi gordalu am drwyddedau mewn categorïau tasg lle mae'n
darparu ychydig o werth, yn union y mewnwelediad segmentu-tasg y mae'r
enghraifft cwmni meddalwedd uchod yn ei ddangos. Mae hyn yn cysylltu'n
uniongyrchol ag economeg uned pennod 5.4 a disgyblaeth ROI pennod 5.5,
gan fod cost offeryno AI, sy'n aml wedi'i thrwyddedu fesul-sedd, angen
yr un driniaeth cost-budd drylwyr y mae'r llyfr hwn yn ei chymhwyso i
unrhyw fuddsoddiad peirianneg mawr arall.

Yr ymdrech ddadansoddol i adeiladu cymariaethau gwirioneddol, mesur
amser cylch llawn gan gynnwys adolygu a chywiro, a segmentu yn ôl
math tasg, sy'n fwy o waith na derbyn ystadegau defnydd a adroddir
gan werthwr neu argraffiadau a adroddir gan hunan ar wyneb gwerth, yw
cost cyfanswm perchnogaeth. Mae'r ymdrech honno'n gyfiawn yn
uniongyrchol gan raddfa cost trwyddedu offeryno AI ar draws sefydliad
mawr a'r perygl o ymrwymiad drud, ar draws y sefydliad heb ei brofi'n
dda yn seiliedig ar argraff yn hytrach na data.

## Gwrth-batrymau a pheryglon

- **Mesur cymorth AI yn ôl cyfaint allbwn neu ystadegau defnydd
  gwerthwr yn unig:** yn ailadrodd rhybudd canolog pennod 7.1'n
  uniongyrchol.
- **Dibynnu'n gyfan gwbl ar arbedion amser a adroddir gan hunan:** signal
  gwan sy'n agored i ogwydd, ac yn ddall i gost adolygu a chywiro i
  lawr yr afon.
- **Mesur dim ond y cam cyflymder-cynhyrchu, gan anwybyddu amser cylch
  llawn:** yn cynhyrchu cyfrifo anghyflawn, o bosibl camarweiniol o'r
  effaith cynhyrchedd gwirioneddol.
- **Adrodd un rhif cymysg, ar draws y sefydliad:** yn cuddio amrywiad
  gwirioneddol mewn gwerth ar draws gwahanol gategorïau tasg.
- **Dim grŵp cymharu na llinell sylfaen hanesyddol:** ni all
  wahaniaethu effaith wirioneddol cymorth AI oddi wrth unrhyw newid
  cydamserol arall.
- **Trin canlyniad arolwg a adroddir gan hunan, brwdfrydig fel
  tystiolaeth ddigonol ar gyfer penderfyniad buddsoddi ar raddfa
  fawr:** yn mentro union y bwlch y darganfu'r enghraifft asiantaeth
  ffederal uchod dim ond ar ôl adeiladu cymhariaeth fwy trylwyr.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Asesir gwerth datblygiad â chymorth AI, os o
  gwbl, trwy argraff a adroddir gan hunan ac ystadegau defnydd
  gwerthwr yn unig.
- **Lefel 2, Datblygu:** Mae rhywfaint o ddata amser-cylch neu ansawdd
  yn bodoli, ond nid oes grŵp cymharu na llinell sylfaen hanesyddol
  wirioneddol ac ni cheir dadansoddiad wedi'i segmentu-yn-ôl-tasg.
- **Lefel 3, Safoni:** Cymhwysir dyluniad cymharu gwirioneddol (grŵp
  rheoli neu linell sylfaen hanesyddol) â mesuriad amser-cylch ac
  ansawdd wedi'i barejo'n gyson, wedi'i segmentu yn ôl math tasg.
- **Lefel 4, Rheoli:** Olrheinir cyfrifo amser-cylch llawn, gan gynnwys
  amser adolygu a chywiro; dilysir hawliadau a adroddir gan hunan yn
  systematig yn erbyn data gwrthrychol.
- **Lefel 5, Cerddorfaru:** Mae gan y sefydliad ddealltwriaeth aeddfed,
  seiliedig-ar-dystiolaeth o union ble mae cymorth AI'n wirioneddol
  helpu, gan lywio cyflwyniad wedi'i dargedu, buddsoddiad hyfforddiant,
  a phenderfyniadau caffael â ROI dangosadwy, amddiffynadwy.

## Syniadau ar gyfer trafodaeth

1. Pa gymhariaeth wirioneddol, os oes un, sydd gennym ar gyfer ein mabwysiad offeryno AI cyfredol?
2. A ydym wedi mesur amser cylch ac ansawdd gyda'i gilydd, neu ddim ond hawliad cyflymder?
3. Pa hawliad cymorth AI a adroddir gan hunan y dylem ei ddilysu yn erbyn data gwrthrychol?
4. Pa gategori tasg penodol sy'n dangos y dystiolaeth gryfaf o werth cymorth AI gwirioneddol i ni?
5. A allem ni ar hyn o bryd amddiffyn ein buddsoddiad offeryno AI i randdeiliad ariannol amheugar â thystiolaeth?

## Prif gasgliadau

- Mesurwch ddatblygiad â chymorth AI yn ôl **canlyniad**, nid cyfaint
  allbwn nac ystadegau defnydd a adroddir gan werthwr.
- Defnyddiwch **grŵp cymharu gwirioneddol neu linell sylfaen
  hanesyddol**, nid dim ond ciplun cyn-ac-ar-ôl sy'n agored i ffactorau
  drysu.
- Mesurwch **amser cylch ac ansawdd gyda'i gilydd**, gan gynnwys y
  biblinell lawn, amser adolygu a chywiro, nid dim ond cyflymder
  cynhyrchu.
- Triniwch **arbedion amser a adroddir gan hunan fel damcaniaeth**, nid
  casgliad, a'i ddilysu yn erbyn data gwrthrychol.
- **Segmentwch yn ôl math tasg**; mae un rhif cymysg yn cuddio ble mae
  gwerth mewn gwirionedd yn canolbwyntio a ble nad yw.

## Cyfeiriadau a darllen pellach

- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (y ddisgyblaeth mesur-canlyniad y
  mae'r bennod hon yn ei chymhwyso i werthuso offeryno AI).
- Ymchwil GitHub ar barau-rhaglennu AI a chynhyrchedd datblygwyr
  (ymchwil empirig ar raddfa diwydiant ar ganlyniadau datblygiad â
  chymorth AI).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, a Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021) (y ddisgyblaeth mesur aml-
  ddimensiwn y mae'r bennod hon yn ei chymhwyso i gategori offeryno
  newydd penodol).
- *How to Measure Anything*, gan Douglas W. Hubbard (adeiladu
  cymariaethau amddiffynadwy a meintioli gwerth o dan ansicrwydd
  gwirioneddol).
