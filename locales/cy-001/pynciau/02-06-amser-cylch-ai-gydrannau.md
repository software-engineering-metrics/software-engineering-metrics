# 2.6 Amser cylch a'i gydrannau

## Trosolwg a chymhelliant

**Amser cylch** yw dadelfeniad mewnol amser llif newid (pwnc 2.4) i mewn
i'w gamau peirianneg cyfansoddol: amser codio, amser adolygu, amser
profi, ac amser defnyddio, weithiau wedi'i hollti ymhellach yn amser
codi (pa mor hir mae newid yn aros cyn i unrhyw un ddechrau gweithio
arno) ac amser gweithredol (pa mor hir mae'n ei gymryd unwaith y bydd
rhywun yn gwneud hynny). Lle mae amser llif yn rhoi un rhif sengl i chi ar
gyfer pa mor hir mae newid yn ei gymryd o'r naill ben i'r llall trwy'r
ffrwd werth gyfan, mae [amser cylch](https://en.wikipedia.org/wiki/Cycle_time)
yn dweud wrthych ble mae'r amser hwnnw mewn gwirionedd yn mynd unwaith y
mae'n cyrraedd peirianneg, sef yr haen ddiagnostig y addawodd pwnc 2.4
sy'n eistedd oddi tan ei rif crynodeb ei hun.

Mae'r gwahaniaeth hwn yn bwysig oherwydd nad yw "mae amser arwain yn rhy
hir" yn weithredadwy ar ei ben ei hun. Mae angen ymyrraeth wahanol ar
dîm y mae ei amser arwain wedi'i ddominyddu gan amser codio na thîm y
mae ei amser arwain wedi'i ddominyddu gan giw adolygu tri diwrnod, sydd
angen ymyrraeth wahanol eto na thîm sy'n colli'r rhan fwyaf o'i amser i
suite profi bregus, araf. Heb ddadelfeniad amser-cylch, mae timau'n
tueddu i ddyfalu wrth y dagfa, ac mae'r dyfaliad yn anghywir yn ddigon
aml fel bod trwsio'r cam anghywir yn gwastraffu ymdrech wirioneddol tra
bo'r cyfyngiad gwirioneddol yn aros heb ei gyffwrdd.

I dimau mawr, dadelfeniad amser-cylch yw'r hyn sy'n troi dirywiad amser-
arwain sefydliadol-gyfan o ddirgelwch yn broblem benodol, gyraeddadwy.
Pan fydd dwsinau o dimau'n rhannu isadeiledd cyffredin, gall dagfa
adolygu a rennir neu biblinell CI a rennir araf lusgo amser arwain pob
tîm i lawr yn union yr un fath, a dim ond cymhariaeth amser-cylch traws-
dîm sy'n datgelu'r achos gwraidd a rennir hwnnw, yn hytrach na phob tîm
yn dyfalu'n annibynnol wrth ei esboniad lleol ei hun.

## Egwyddorion allweddol

- **Mae amser cylch yn esbonio amser arwain; nid yw'n ei ddisodli.**
  Adroddwch y ddau gyda'i gilydd, gydag amser cylch yn ddiagnostig ac
  amser arwain yn grynodeb.
- **Amser aros fel arfer sy'n dominyddu amser gweithredol.** Mae'r rhan
  fwyaf o oedi mewn cyflenwi meddalwedd yn dod o waith yn eistedd yn
  segur mewn ciw, nid o ymdrech weithredol (mae pwnc 2.5 yn cwmpasu hyn
  yn uniongyrchol trwy effeithlonrwydd llif).
- **Dadelfennwch fesul cam cyn cynnig trwsiad.** Mae trwsiad wedi'i
  anelu at y cam anghywir yn gwastraffu ymdrech a gall ddad-fywiogi tîm y
  gofynnir iddo "weithio'n gyflymach" pan oedd y dagfa wirioneddol yn
  rhywle arall.
- **Mae tagfa a rennir ar draws llawer o dimau'n gyfle buddsoddi
  platfform,** nid dim ond cyfres o broblemau tîm unigol.
- **Mae data amser-cylch yn agored i'r un risgiau twyllo ag amser llif**
  (pwnc 2.4): gwyliwch am derfynau cam sy'n symud yn dawel i ffafrio
  rhif.

## Argymhellion

### Cyfrifiannwch bob terfyn cam yn benodol

Torrwch siwrnai newid i mewn i gamau wedi'u henwi â therfynau clir, y
gellir eu cyfrifiannu: codio (comit cyntaf i agor cais tynnu), codi (agor
cais tynnu i adolygiad cyntaf), adolygu (adolygiad cyntaf i gymeradwyaeth),
a defnyddio (cymeradwyaeth i gynhyrchu). Daliwch stampiau amser ar gyfer
pob trosglwyddiad yn awtomatig o ddigwyddiadau rheolaeth fersiwn a
CI/CD, nid o olrhain cam hunan-adroddedig, gan gymhwyso'r un egwyddor
cyfrifianeg-dros-hunan-adrodd o bwnc 1.5.

### Gwahanwch amser aros oddi wrth amser gweithredol o fewn pob cam

O fewn adolygu, er enghraifft, gwahaniaethwch yr amser y mae cais tynnu'n
eistedd heb ei gyffwrdd yn aros i adolygydd ddechrau (amser aros) oddi
wrth yr amser y mae sgwrs adolygu weithredol yn ei gymryd unwaith y
bydd yn dechrau (amser gweithredol). Mae'r gwahaniaeth hwn fel arfer yn
datgelu mai ciwio, nid ymdrech, yw'r gost ddominyddol, sy'n pwyntio at
drwsiad gwahanol iawn (mwy o gynhwysedd adolygydd, hysbysu gwell, ceisiadau
tynnu llai i'w hadolygu) na thrwsiad wedi'i anelu at wneud sgyrsiau
adolygu eu hunain yn gyflymach.

### Chwiliwch am dagfa a rennir cyn gwneud diagnosis fesul tîm

Pan fydd sawl tîm yn dangos yr un cam fel eu prif oedi, piblinell CI a
rennir araf, pwll adolygu a rennir wedi'i orlwytho, trên rhyddhau a
rennir anfynych, mae'r achos a rennir hwnnw'n gyfle buddsoddi lefel-
platfform, nid cyfres o broblemau lleol digyswllt. Cyfanredwch ddata
amser-cylch ar draws timau'n benodol i chwilio am y patrwm hwn cyn tybio
bod tagfa pob tîm yn unigryw i'r tîm hwnnw.

### Defnyddiwch amser cylch i osod targedau gwelliant realistig, cam-benodol

Yn lle un targed "lleihau amser arwain 20%," nad yw'n rhoi unrhyw
arweiniad i dîm ar ble i ganolbwyntio, defnyddiwch ddadelfeniad amser-
cylch i osod targed cam-benodol: "lleihau amser aros adolygu canolrifol o
ddau ddiwrnod i bedair awr." Mae nod penodol, wedi'i dargedu at gam yn
haws i dîm weithredu arno ac yn haws ei wirio ei fod wedi'i gyflawni mewn
gwirionedd trwy newid proses gwirioneddol yn hytrach na symudiad
digyswllt yn rhywle arall.

### Gwyliwch am dwyllo terfyn-cam

Yn union fel y gall pwyntiau cychwyn a diwedd amser llif ddrifftio (pwnc
2.4), gall terfynau cam amser-cylch unigol symud mewn ffyrdd sy'n ffafrio
rhif cam penodol heb unrhyw welliant gwirioneddol, er enghraifft, marcio
adolygiad fel "wedi dechrau" yr eiliad y neilltuir adolygydd yn hytrach
na phan fyddant mewn gwirionedd yn dechrau darllen y newid. Archwiliwch
gyfrifianeg terfyn-cam yn gyfnodol yn erbyn ei ddiffiniad dogfennedig.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Amser cylch bras-gronynnog (dau neu dri cham) | Syml i'w gyfrifiannu a'i esbonio | Efallai na fydd yn nodi'r dagfa wirioneddol yn ddigon manwl gywir i weithredu arni |
| Amser cylch manwl-gronynnog (llawer o gamau, rhaniad aros yn erbyn gweithredol) | Diagnosis manwl gywir, targedau cam-benodol gweithredadwy | Mwy o ymdrech gyfrifianeg; mwy o rifau i'w cynnal a'u hesbonio |
| Adolygiad amser-cylch fesul tîm | Wedi'i deilwra i lif gwaith gwirioneddol pob tîm | Gall golli tagfa a rennir, draws-dîm sy'n cuddio y tu ôl i rifau lleol tebyg |
| Adolygiad amser-cylch cyfanredol traws-dîm | Yn datgelu tagfeydd lefel-platfform a rennir | Angen diffiniadau cam wedi'u safoni ar draws timau i fod yn ystyrlon |

Y tensiwn canolog yw **manwl gywirdeb diagnostig yn erbyn cost
cyfrifianeg**. Mae olrhain amser-cylch mwy manwl-gronynnog yn rhoi
diagnosis mwy gweithredadwy ond yn costio mwy i'w adeiladu a'i gynnal, ac
yn ychwanegu mwy o rifau y mae'n rhaid i dîm eu deall a'u hymddiried
ynddynt. Datryswch y tensiwn trwy ddechrau'n fras (codio, adolygu,
defnyddio) ac ychwanegu rhaniadau manylach, aros yn erbyn amser
gweithredol o fewn cam penodol, dim ond unwaith y bydd y cam hwnnw wedi'i
gadarnhau fel tagfa wirioneddol, ailadroddus sy'n werth y buddsoddiad
cyfrifianeg ychwanegol.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Petai amser arwain yn dirywio heddiw, allem ni ddweud o fewn awr pa
   gam penodol oedd yn gyfrifol, gan ddefnyddio data yn hytrach na
   dyfalu?** Dyma brif brawf a yw eich cyfrifianeg amser-cylch mewn
   gwirionedd yn gwasanaethu ei bwrpas diagnostig. Os yw'r ateb gonest yn
   na, mae'r bwlch hwnnw'n werth ei gau cyn i'r dirywiad nesaf ddigwydd.

2. **O fewn ein cam tagfa dominyddol, faint o'r oedi sy'n amser aros yn
   erbyn amser gweithredol?** Mae'r rhan fwyaf o dimau'n tybio mai
   ymdrech weithredol yw'r cyfyngiad cyn gwirio, pan mae ciwio fel arfer
   y gost fwyaf. Tynnwch y rhaniad gwirioneddol ar gyfer eich cam
   arafaf a gwelwch a yw'r dybiaeth yn dal.

3. **A yw sawl tîm yn rhannu'r un cam tagfa dominyddol, gan awgrymu
   trwsiad lefel-platfform yn hytrach nag un lefel-tîm?** Cyfanredwch
   eich data amser-cylch ar draws timau a chwiliwch yn benodol am y
   patrwm hwn cyn tybio bod arafwch pob tîm wedi'i achosi'n lleol.

4. **A ydym wedi gosod targedau gwelliant cam-benodol, neu ddim ond un
   targed amser-arwain cyffredinol heb arweiniad ar ble i ganolbwyntio?**
   Mae targed amwys yn gadael tîm i ddyfalu ble i fuddsoddi ymdrech; nid
   yw un cam-benodol. Gwiriwch eich nodau cyfredol yn erbyn y
   gwahaniaeth hwn.

5. **A yw unrhyw derfyn cam amser-cylch yn ein cyfrifianeg wedi drifftio
   oddi wrth ei ddiffiniad dogfennedig dros amser?** Mae terfynau cam yn
   agored i'r un risg drifft diffiniadol ag amser llif ei hun (pwnc
   2.4). Archwiliwch sampl o ddigwyddiadau trosglwyddiad-cam diweddar
   yn erbyn y diffiniad ysgrifenedig.

6. **Sut mae diwylliant adolygu-trwm yn erbyn diwylliant ymddiried-
   trwm yn ymddangos yn wahanol yn ein data amser-cylch?** Bydd tîm ag
   adolygu trylwyr iawn, aml-rownd yn dangos amser cam-adolygu hirach na
   thîm sy'n ymddiried mewn cyfuniadau cymeradwyaeth sengl; trafodwch a
   yw eich cydbwysedd cyfredol yn adlewyrchu dewis bwriadol neu
   ragosodiad heb ei archwilio.

## Golwg sector

**Cwmni newydd.** Mae amser cylch fel arfer wedi'i ddominyddu gan amser
codio yn hytrach na chamau adolygu neu ddefnyddio, yn syml oherwydd bod
proses yn finimol. Wrth i'r tîm dyfu heibio llond llaw o beirianwyr,
dechreuwch wylio am amser aros adolygu'n benodol, gan mai dyna fel arfer
y cam cyntaf i arafu wrth i waith mwy o bobl orfod mynd trwy lai o
adolygwyr sydd ar gael.

**Busnes bach.** Mae dadansoddeg platfform rheolaeth fersiwn sylfaenol
fel arfer yn dinoethi digon o amseru lefel-cam (amser i'r adolygiad
cyntaf, amser i gyfuno) heb gyfrifianeg bwrpasol. Canolbwyntiwch ar y
cam adolygu gyntaf, gan mai dyma'r dagfa gynnar fwyaf cyffredin a'r
hawsaf i'w thrwsio â newid proses bach fel cylchdroi adolygwyr.

**Menter.** Mae tagfeydd a rennir ar draws dwsinau o dimau'n gyffredin ac
yn drosoledd uchel i'w canfod: gall ciw CI a rennir wedi'i orlwytho neu
gam adolygu canolog gorfodol fod yn trethu amser arwain sefydliadol-gyfan
yn dawel. Buddsoddwch yn benodol mewn cyfanredu amser-cylch traws-dîm i
ddod â'r cyfyngiadau a rennir hyn i'r amlwg yn hytrach na gadael i bob
tîm wneud diagnosis yn annibynnol.

**Llywodraeth.** Mae data amser-cylch yn offeryn cryf, concrid ar gyfer
cyfiawnhau moderneiddio proses i randdeiliaid amheus, gan fod "mae amser
aros adolygu'n cyfartaledd pedwar diwrnod oherwydd un rôl cymeradwyo
tagfeydd" yn achos llawer mwy penodol, perswadiol dros fuddsoddiad na
hawliad haniaethol "mae ein proses yn araf."

## Enghreifftiau

**Menter.** Sylwodd arweinyddiaeth beirianneg cwmni isadeiledd cwmwl fod
amser arwain yn cropian i fyny ar draws bron pob tîm ar yr un pryd.
Datgelodd cyfanredu amser-cylch traws-dîm mai amser aros adolygu, nid
amser adolygu gweithredol, oedd yr achos dominyddol a rennir: roedd tîm
adolygu diogelwch canolog, bach wedi dod yn dagfa wrth i nifer y timau
sydd angen eu cymeradwyaeth dyfu'n gyflymach na'r tîm ei hun. Datryswyd
y dagfa a rennir gan ehangu a hyfforddi pwll ehangach o adolygwyr wedi'u
tystysgrifio ar ddiogelwch, yn hytrach na gofyn i dimau unigol godio neu
brofi'n gyflymach rywsut, a dychwelodd amser arwain i lawr ar draws y
bwrdd o fewn un chwarter.

**Llywodraeth.** Roedd tîm gwasanaethau digidol government talaith o dan
bwysau i leihau amser arwain, ac ymatebodd yn gyntaf trwy ofyn i
beirianwyr weithio'n gyflymach, greddf naturiol ond yn y pen draw
ddiwerth. Dangosodd dadelfeniad amser-cylch fod amser codio gweithredol
prin wedi newid blwyddyn ar ôl blwyddyn; daeth bron holl y dirywiad o giw
gynyddol mewn cam adolygu pensaernïol gorfodol a gyflwynwyd ddeunaw mis
ynghynt fel mesur cydymffurfiaeth. Ailddyluniodd y tîm yr adolygiad
hwnnw i broses ysgafnach, wedi'i graddio yn ôl risg ar gyfer newidiadau
risg-isel, gan dorri amser aros adolygu'n sylweddol tra'n cadw
trylwyredd adolygu llawn ar gyfer newidiadau risg-uchel gwirioneddol.

## Achos busnes: cymhellion, ROI, a TCO

Buddsoddiad dargedig, effeithiol yw'r enillion ar ddadelfeniad amser-
cylch: gall sefydliad sy'n gwybod yn union pa gam yw'r dagfa drwsio'r cam
penodol hwnnw yn hytrach na lledaenu ymdrech yn denau ar draws proses
gyfan yn y gobaith bod rhywbeth yn helpu. Mae'r enghraifft adolygu-
diogelwch uchod yn nodweddiadol: datryswyd problem sefydliadol-gyfan yn
llawer rhatach gan drwsiad wedi'i dargedu'n fanwl gywir, ehangu un
adnodd tagfeydd penodol, nag y byddai menter "cyflymu cyflenwi" eang, heb
ffocws wedi'i wneud.

Mae cost cyfanswm perchnogaeth yn ymdrech gyfrifianeg i ddal stampiau
amser lefel-cam yn ddibynadwy a'r ddisgyblaeth barhaus o archwilio
terfynau cam yn gyfnodol am ddrifft. Mae'r gost honno'n werth chweil
oherwydd bod y dewis arall, dyfalu wrth dagfeydd a thrwsio'r cam
anghywir, yn gwastraffu llawer mwy o ymdrech peirianneg dros amser nag y
mae'r gyfrifianeg ei hun yn ei gostio.

## Gwrth-batrymau a risgiau

- **Ymateb i ddirywiad amser-arwain heb ddiagnosis amser-cylch:** yn aml
  yn arwain at drwsio'r cam anghywir.
- **Tybio mai ymdrech weithredol, nid amser aros, yw'r gost ddominyddol:**
  fel arfer yn anghywir; mae ciwio'n dominyddu yn y rhan fwyaf o
  biblinellau cyflenwi gwirioneddol (pwnc 2.5).
- **Colli tagfa a rennir, draws-dîm trwy adolygu amser cylch fesul tîm yn
  unig:** yn gadael trwsiad platfform trosoledd uchel heb ei ddarganfod.
- **Gosod targed amser-arwain cyffredinol amwys heb arweiniad cam-
  benodol:** yn gadael timau i ddyfalu ble i ganolbwyntio ymdrech.
- **Drifft diffiniadol terfyn-cam:** yn ffafrio rhif cam penodol heb
  welliant gwirioneddol.
- **Cyfrifiannu pob cam manwl-gronynnog posibl cyn cadarnhau bod
  unrhyw un ohonynt yn dagfa wirioneddol:** yn gwastraffu ymdrech
  gyfrifianeg ar fanylder nad yw eto'n llywio penderfyniad.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Ni ddadelfennir amser cylch o gwbl; mae timau'n
  dyfalu wrth dagfeydd pan fydd amser arwain yn dirywio.
- **Lefel 2, Datblygu:** Mae rhai timau'n olrhain amseru cam bras-
  gronynnog yn anffurfiol, ond nid oes cyfrifianeg gyson na chymhariaeth
  draws-dîm.
- **Lefel 3, Safoni:** Cyfrifiannir terfynau cam yn gyson sefydliadol-
  gyfan, gydag amser aros wedi'i wahanu oddi wrth amser gweithredol yn y
  camau tagfa dominyddol.
- **Lefel 4, Rheoli:** Mae cyfanredu amser-cylch traws-dîm yn dwyn i'r
  amlwg dagfeydd a rennir yn weithredol; mae targedau gwelliant cam-
  benodol yn disodli nodau amser-arwain cyffredinol amwys.
- **Lefel 5, Cerddorfaru:** Mae data amser-cylch yn gyrru blaenoriaethu
  buddsoddiad platfform yn uniongyrchol, a gall y sefydliad bwyntio at
  drwsiadau penodol, wedi'u targedu, pwll adolygu ehangedig, piblinell a
  rennir gyflymach, a wellodd amser arwain yn fesuradwy ar draws llawer o
  dimau ar unwaith.

## Syniadau ar gyfer trafodaeth

1. Beth yw ein cam tagfa dominyddol cyfredol, a pha mor hyderus ydym yn yr ateb hwnnw?
2. Faint o amser y cam tagfa hwnnw sy'n amser aros yn erbyn amser gweithredol?
3. A yw unrhyw un o'n timau'n rhannu'r un dagfa, gan awgrymu trwsiad lefel-platfform?
4. Pryd wnaethom osod targed gwelliant cyflenwi cam-benodol, yn hytrach na chyffredinol, ddiwethaf?
5. A yw diffiniad terfyn-cam yn ein hoffer erioed wedi newid heb ddogfennaeth?

## Prif gasgliadau

- Mae amser cylch yn **dadelfennu amser llif** i mewn i gamau
  peirianneg, codio, adolygu, profi, defnyddio, ac yw'r haen ddiagnostig
  o dan y rhif crynodeb hwnnw.
- Gwahanwch **amser aros oddi wrth amser gweithredol** o fewn pob cam;
  mae ciwio fel arfer yn dominyddu ymdrech weithredol (pwnc 2.5).
- Chwiliwch am **dagfeydd a rennir ar draws timau** cyn tybio bod
  arafwch yn benodol i dîm; mae achos a rennir yn aml yn gyfle buddsoddi
  platfform.
- Gosodwch **dargedau gwelliant cam-benodol**, nid nodau cyffredinol
  amwys, fel bod timau'n gwybod yn union ble i ganolbwyntio.
- Mae terfynau cam yn agored i'r un risg **drifft diffiniadol** ag amser
  llif ei hun; archwiliwch nhw'n gyfnodol.
- Mae pwnc 2.7 yn rhoi'r fathemateg sylfaenol, cyfraith Little, ar
  gyfer pam mae gwaith ar y gweill ac amser cylch yn symud gyda'i
  gilydd.

## Cyfeiriadau a darllen pellach

- *The Principles of Product Development Flow*, gan Donald G. Reinertsen
  (theori ciwio a rhesymu maint-swp sy'n sail i ddadansoddiad amser-
  cylch).
- *Actionable Agile Metrics for Predictability*, gan Daniel S. Vacanti
  (mesur amser-cylch a seiliedig-ar-lif ar gyfer cyflenwi meddalwedd).
- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (amser arwain a'i berthynas â
  pherfformiad cyflenwi).
- *The Goal*, gan Eliyahu M. Goldratt (theori cyfyngiadau, ac egwyddor
  dod o hyd i'r dagfa wirioneddol a'i thrwsio yn hytrach nag optimeiddio
  ym mhobman).
