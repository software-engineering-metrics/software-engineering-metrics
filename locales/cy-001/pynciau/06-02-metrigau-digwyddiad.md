# 6.2 Metrigau digwyddiad: canfod, ymateb, ac adfer

## Trosolwg a chymhelliant

Mae'r pwnc hwn yn mesur beth sy'n digwydd pan gaiff y gyllideb gwall
o bwnc 6.1 ei gwario trwy fethiant gwirioneddol: **digwyddiad**,
digwyddiad heb ei gynllunio sy'n dirywio neu'n torri ar draws
gwasanaeth. Mae pedwar metrig yn ffurfio'r eirfa safonol ar gyfer mesur
pa mor dda y mae sefydliad yn trin hyn: **cymedr amser i ganfod
(MTTD)**, pa mor hir cyn i'r sefydliad sylwi bod rhywbeth o'i le;
**cymedr amser i gydnabod (MTTA)**, pa mor hir cyn i rywun gymryd
perchnogaeth ymateb; **cymedr amser i ddatrys** neu **adfer (MTTR)**,
pa mor hir hyd nes yr adferir gwasanaeth, yr un cysyniad a gwmpasodd
pwnc 2.10 yn benodol ar gyfer methiannau wedi'u hachosi gan
ddefnyddio, wedi'i gyffredinoli nawr i unrhyw ddigwyddiad waeth beth
fo'i achos; ac **amlder digwyddiad**, yn syml pa mor aml y mae
digwyddiadau'n digwydd o gwbl.

Pryder canolog y pwnc hwn, yn adleisio triniaeth pwnc 2.10 o
gyfradd methiant newid, yw mai dim ond mor ddibynadwy â'r diwylliant
sefydliadol o gwmpas adrodd a dosbarthu digwyddiadau'n onest y mae'r
rhifau hyn. Mae gan dîm sy'n ofni bai am ddigwyddiad bob cymhelliant i
danadrodd, oedi cydnabyddiaeth i osgoi bod "ar y cloc," neu ddosbarthu
digwyddiad difrifol fel un mân i warchod ei fetrigau ei hun. Mae arfer
**post-mortem [di-fai](https://en.wikipedia.org/wiki/Just_culture)**, a
arloeswyd mewn sefydliadau fel Etsy ac a ffurfiolwyd yn llenyddiaeth SRE
Google, yn bodoli'n benodol i ddileu'r cymhelliant hwnnw, ac mae'r
bwnc hwn yn ei drin fel rhagofyniad ar gyfer data digwyddiad
dibynadwy, nid hwylustod diwylliannol dewisol wedi'i haenu ar ben y
metrigau.

I dimau mawr, mae metrigau digwyddiad yn datgelu a yw gallu canfod ac
ymateb sefydliad, offeryno dychwelyd pwnc 2.10 ymhlith buddsoddiadau
eraill, mewn gwirionedd yn gweithio o dan amodau gwirioneddol,
amrywiol, nid dim ond y senario methiant wedi'i achosi-gan-ddefnyddio
penodol a gwmpasodd y pwnc hwnnw. Mae sefydliadau menter a llywodraeth
sy'n gweithredu isadeiledd dyngedfennol yn dibynnu ar y metrigau hyn ill
dau'n fewnol, i yrru gwelliant gweithredol gwirioneddol, ac yn allanol,
i ddangos i gwsmeriaid, rheoleiddwyr, neu'r cyhoedd fod digwyddiadau'n
cael eu trin yn gymwys ac yn gwella dros amser.

## Egwyddorion allweddol

- **Mae diwylliant di-fai'n rhagofyniad ar gyfer data digwyddiad
  dibynadwy**, nid ychwanegiad dewisol; mae ofn beio'n llygru adrodd,
  cyflymder cydnabyddiaeth, a dosbarthiad difrifoldeb fel ei gilydd.
- **Mae canfod, cydnabod, a datrys yn gyfnodau gwahanol â thrwsiadau
  gwahanol.** Gall amser adfer cyffredinol araf guddio problemau
  sylfaenol gwahanol iawn yn dibynnu ar ba gyfnod sy'n araf mewn
  gwirionedd.
- **Mae amlder digwyddiad a MTTR yn signal wedi'i barejo**, yn debyg i
  gyfradd methiant newid ac amser adfer DORA (pwnc 2.10): nid yw'r
  naill na'r llall ar ei ben ei hun yn dweud y stori lawn.
- **Mae angen yr un trylwyredd â dosbarthiad diffyg dianc ar
  ddosbarthiad difrifoldeb** (pwnc 5.1): meini prawf cyson,
  dogfennedig, nid barn ad hoc.
- **Mae gwerth post-mortem mewn dysgu systemig, nid mewn cynhyrchu
  rhif.** Mae'r metrig yn sgil-gynnyrch arfer da, nid ei nod.

## Argymhellion

### Dadelfennwch amser ymateb digwyddiad i'w gyfnodau gwahanol

Mesurwch ac adroddwch amser canfod (o gychwyn gwirioneddol y methiant
i rywun yn sylwi), amser cydnabod (o hysbysiad i rywun yn cymryd
perchnogaeth), ac amser datrys (o berchnogaeth i adferiad gwirioneddol)
ar wahân, yn hytrach na dim ond un cyfanswm cymysg sengl. Mae pob
cyfnod yn pwyntio at drwsiad gwahanol: mae canfod araf yn pwyntio at
fwlch monitro a rhybuddio, mae cydnabyddiaeth araf yn pwyntio at
broblem proses ar-alwad neu ddwysau, ac mae datrys araf yn pwyntio at
fwlch offeryno, llawlyfr-rhedeg, neu allu diagnostig (mae pwnc 2.10'n
ymdrin â hyn yn benodol ar gyfer methiannau wedi'u hachosi-gan-
ddefnyddio).

### Adeiladwch a gwarchodwch broses post-mortem wirioneddol ddi-fai

Mae **post-mortem di-fai** yn ymchwilio beth ddigwyddodd a pham y
gadawodd y system iddo ddigwydd, gan osgoi'n benodol briodoli bai i
unigolyn am gamgymeriad y gallai unrhyw berson rhesymol yn yr un
amgylchiadau, â'r un wybodaeth, fod wedi'i wneud yn gredadwy. Gwarchodwch
y ddisgyblaeth hon yn weithredol: arweinyddiaeth yn modelu ymatebion
di-gosb i ddigwyddiadau, polisi ysgrifenedig penodol, ac arferiad o
ofyn "beth am ein system a ganiataodd hyn" yn hytrach na "pwy wnaeth
hyn," maent i gyd yn fuddsoddiadau angenrheidiol, parhaus, nid
datganiad polisi un-tro.

### Dosbarthwch ddifrifoldeb â meini prawf cyson, dogfennedig, wedi'u harchwilio

Cymhwyswch yr un ddisgyblaeth y mae pwnc 5.1'n ei hargymell ar gyfer
diffygion dianc i ddosbarthiad difrifoldeb digwyddiad: graddfa
sefydlog, ddogfennedig yn seiliedig ar effaith gwsmer neu fusnes
wirioneddol, wedi'i chymhwyso'n gyson ar draws timau, wedi'i harchwilio'n
gyfnodol am ddrifft. Mae dosbarthiad anghyson, rhai timau'n hael, rhai'n
llym, yn gwneud data digwyddiad ar draws y sefydliad mor annibynadwy ar
gyfer cymhariaeth ag y byddai data diffyg wedi'i ddosbarthu'n anghyson.

### Olrheiniwch amlder digwyddiad a MTTR gyda'i gilydd, byth ar wahân

Gallai MTTR sy'n gwella ochr yn ochr ag amlder digwyddiad cynyddol nodi
tîm sy'n gwella wrth ddiffodd tanau tra bo dibynadwyedd system sylfaenol
mewn gwirionedd yn dirywio; gallai amlder digwyddiad gostyngol ochr yn
ochr â MTTR yn gwaethygu nodi methiannau prinach ond mwy difrifol, anos
eu diagnosio'n disodli rhai mân, aml. Adolygwch y ddau gyda'i gilydd,
gan adlewyrchu'n union ddisgyblaeth parejo cyflymder-a-sefydlogrwydd
metrigau DORA Rhan 2, i gael darlun cyfunol, onest.

### Tynnwch ac olrheiniwch eitemau gweithredu systemig o post-mortemau, nid dim ond metrigau

Gwir werth y broses post-mortem yw'r eitemau gweithredu penodol,
systemig y mae'n eu cynhyrchu: rhybudd coll wedi'i ychwanegu, llawlyfr
rhedeg wedi'i wella, pwynt-methiant-sengl wedi'i ddileu. Olrheiniwch yr
eitemau gweithredu hyn i gwblhad â'r un ddisgyblaeth â chronfa-waith
dyled dechnegol pwnc 4.5, gan fod post-mortem sy'n cynhyrchu
mewnwelediad ond dim dilyniant yn gwastraffu'r dysgu sefydliadol y mae'r
broses i fod i'w ddal.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Metrig amser-ymateb-digwyddiad cymysg, sengl | Syml i'w adrodd | Yn cuddio pa gyfnod penodol, canfod, cydnabod, datrys, yw'r broblem wirioneddol |
| Metrigau digwyddiad wedi'u dadelfennu-yn-ôl-cyfnod | Diagnostig, yn pwyntio'n uniongyrchol at y trwsiad cywir | Angen offeryno mwy gofalus o bob trosglwyddiad cyfnod |
| Adolygiad digwyddiad wedi'i gyfeirio-gan-fai | Yn teimlo'n atebol, yn bodloni awydd i ddyrannu cyfrifoldeb | Yn llygru gonestrwydd adrodd yn y dyfodol ac yn anaml yn trwsio'r achos systemig gwirioneddol |
| Arfer post-mortem di-fai | Yn cynhyrchu data onest a thrwsiadau systemig gwirioneddol | Angen buddsoddiad diwylliannol parhaus a disgyblaeth arweinyddiaeth i'w gynnal |

Y tensiwn canolog yw **apêl atebolrwydd unigol yn erbyn yr angen
ymarferol am adrodd onest**. Gall beio unigolyn ar ôl digwyddiad deimlo'n
foddhaus a gall edrych fel arweinyddiaeth benderfynol, ond mae'n llygru
data pob digwyddiad yn y dyfodol yn ddibynadwy, oherwydd bod pobl yn
tanadrodd, yn oedi cydnabyddiaeth, neu'n camddosbarthu difrifoldeb
unwaith y maent yn ofni canlyniad personol. Datryswch y tensiwn o blaid
arfer di-fai'n fwriadol ac yn gyson, gan ddeall bod atebolrwydd
gwirioneddol yn dod o drwsio'r system a ganiataodd fethiant, nid o
gosbi'r unigolyn a oedd yn digwydd bod yn bresennol pan ddigwyddodd.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A ydym yn dadelfennu amser ymateb digwyddiad i gyfnodau canfod,
   cydnabod, a datrys, neu dim ond yn olrhain rhif cymysg sengl?** Os
   dim ond rhif cymysg sy'n bodoli, dewiswch ddigwyddiad sylweddol
   diweddar a cheisiwch ail-adeiladu'r dadansoddiad cyfnod yn ôl-
   weithredol i weld beth y byddai wedi'i ddatgelu.

2. **A fyddai ein tîm mewn gwirionedd yn credu bod ein proses post-
   mortem yn ddi-fai, neu a yw ofn canlyniad yn dal i lunio sut mae
   digwyddiadau'n cael eu hadrodd a'u trafod?** Gofynnwch hyn yn
   uniongyrchol ac yn onest; nid yw polisi di-fai a ddatganwyd ond nad
   yw'n cael ei fyw mewn gwirionedd yn cynhyrchu data dibynadwy.

3. **A fyddai dau dîm gwahanol yn dosbarthu difrifoldeb yr un digwyddiad
   yn yr un ffordd?** Dewiswch ddigwyddiad gwirioneddol, amwys o'r
   gorffennol a chael cynrychiolwyr o dimau gwahanol i'w ddosbarthu'n
   annibynnol, yna cymharwch ganlyniadau.

4. **A ydym yn adolygu amlder digwyddiad a MTTR gyda'i gilydd, neu a
   yw un yn cael mwy o sylw na'r llall?** Gwiriwch eich arfer adrodd ac
   adolygu gwirioneddol ar gyfer y parejiad hwn, gan adlewyrchu'r un
   ddisgyblaeth y mae pwnc 2.10'n ei hargymell ar gyfer metrigau
   sefydlogrwydd DORA.

5. **Pa ganran o'n heitemau gweithredu post-mortem o'r chwe mis diwethaf
   sydd mewn gwirionedd wedi'u cwblhau?** Os nad ydych yn olrhain hyn ar
   hyn o bryd, mae'r bwlch hwnnw'n werth ei enwi; mae proses post-mortem
   â chyfradd gwblhau eitem-weithredu isel yn cynhyrchu mewnwelediad heb
   ddilyniant.

6. **A yw ofn beio erioed wedi achosi i rywun oedi adrodd neu gydnabod
   digwyddiad?** Dyma gwestiwn anghyfforddus ond pwysig; mae ateb onest
   "ie, a dyma beth ddigwyddodd" yn llawer mwy gwerthfawr i iechyd eich
   proses ddigwyddiad na "na" adweithiol.

## Golwg sector

**Cwmni newydd.** Mae ymateb digwyddiad yn aml yn anffurfiol o
angenrheidiol gyda thîm bach, a gall dadelfeniad cyfnod ffurfiol fod yn
ddiangen ar y dechrau. Yr arferiad sy'n werth ei fabwysiadu'n gynnar yw
normau trafodaeth di-fai o'r digwyddiad cyntaf un, gan fod arferion
diwylliannol a osodwyd yn gynnar yn llawer haws eu cynnal na'u hôl-
osod unwaith y bydd patrwm beio-dueddol wedi ymwreiddio.

**Busnes bach.** Mae log digwyddiad syml, a rennir, hyd yn oed un
anffurfiol, â dosbarthiad difrifoldeb sylfaenol ac ôl-drafodaeth ddi-fai
fer ar gyfer unrhyw beth sylweddol, yn dal y rhan fwyaf o werth y
bwnc hwn heb angen offeryno soffistigedig na phlatfform rheoli-
digwyddiad pwrpasol.

**Menter.** Mae dosbarthiad difrifoldeb cyson a diwylliant di-fai
gwirioneddol, parhaus ill dau'n anos eu cynnal ar raddfa, ac mae'r ddau'n
hanfodol ar gyfer data digwyddiad dibynadwy, cymharadwy ar draws degau
o dimau. Buddsoddwch mewn meini prawf dosbarthiad dogfennedig,
archwilio cyfnodol, a modelu arweinyddiaeth weithredol o ymateb di-fai,
gan fod drifft diwylliannol tuag at feio'n tueddu i ymgripian i mewn yn
raddol heb wrth-bwysau bwriadol, parhaus.

**Llywodraeth.** Mae digwyddiadau sy'n effeithio ar wasanaethau
cyhoeddus neu isadeiledd dyngedfennol yn aml yn wynebu craffu allanol,
sylw'r cyfryngau, neu ymholiad ffurfiol, sy'n creu pwysau cryf tuag at
geisio-beio a all danseilio arfer di-fai mewnol yn uniongyrchol os na
chaiff ei reoli'n weithredol. Cynhaliwch ddisgyblaeth ddi-fai fewnol
glir ar gyfer dysgu systemig gwirioneddol, ar wahân i unrhyw broses
atebolrwydd allanol a allai ddilyn digwyddiad difrifol, a chyfathrebwch
y gwahaniaeth hwnnw'n glir i staff.

## Enghreifftiau

**Menter.** Roedd diwylliant peirianneg cwmni taliadau, am flynyddoedd,
wedi trin digwyddiadau'n anffurfiol fel rhywbeth i'w lleihau
cydnabyddiaeth ohonynt yn gyflym i osgoi edrych yn gyfrifol, gan arwain
at amseroedd canfod a chydnabod gwael yn gyson yr oedd arweinyddiaeth yn
priodoli i offeryno monitro annigonol yn wreiddiol. Cynhyrchodd symudiad
diwylliannol tuag at bost-mortemau gwirioneddol ddi-fai, gan gynnwys
arweinyddiaeth yn canmol yn gyhoeddus ac yn benodol gydnabyddiaeth
ddigwyddiad gyflym, onest yn hytrach na dim ond canmol datrysiad
cyflym, wellhad mesuradwy mewn amser canfod a chydnabod fel ei gilydd o
fewn dau chwarter, gan ddatgelu bod y dagfa wreiddiol wedi bod yn
ddiwylliannol, ofn beio, yn hytrach na thechnegol, offeryno annigonol,
fel y tybiwyd yn wreiddiol.

**Llywodraeth.** Roedd canolfan weithrediadau asiantaeth trafnidiaeth
gyhoeddus wedi dosbarthu bron pob amhariad gwasanaeth yn hanesyddol fel
"mân" yn ei log digwyddiad mewnol, patrwm a gafodd cyfarwyddwr diogelwch
newydd yn amheus o gofio cwynion parhaus, anffurfiol gan staff maes am
broblemau ailadroddus difrifol. Datgelodd ymchwiliad fod y dosbarthiad
"mân" yn osgoi proses adrodd ffurfiol, feichus a oedd yn ofynnol ar
gyfer difrifoldebau uwch, gan greu cymhelliant anfwriadol i dan-
ddosbarthu. Symleiddiodd yr asiantaeth ei gofynion adrodd ffurfiol ar
gyfer pob difrifoldeb a gwarchod staff yn benodol rhag bai am adrodd
difrifoldeb onest, a dangosodd data digwyddiad dilynol gyfradd fwy
cywir, a sylweddol uwch o amhariadau gwirioneddol sylweddol, gan roi
darlun onest i arweinyddiaeth yn olaf i flaenoriaethu buddsoddiad
isadeiledd yn ei erbyn.

## Achos busnes: cymhellion, ROI, a TCO

Data onest sy'n gwirioneddol yrru gwelliant systemig, yn hytrach na
darlun cysurus ond ffug a gynhyrchwyd gan dan-adrodd neu gamddosbarthiad
wedi'i yrru-gan-ofn, yw'r enillion ar fetrigau digwyddiad gwirioneddol
ddi-fai, wedi'u dosbarthu'n dda, wedi'u dadelfennu-yn-ôl-cyfnod. Mae'r
enghraifft cwmni taliadau uchod yn dangos hyn yn gonc: gwnaeth trwsiad
diwylliannol, nid buddsoddiad offeryno, ddatrys yr hyn yr oedd
arweinyddiaeth wedi'i gam-ddiagnosio fel problem canfod dechnegol.

Buddsoddiad diwylliannol a phroses yn bennaf yw cost cyfanswm
perchnogaeth: ymrwymiad arweinyddiaeth parhaus i arfer di-fai, meini
prawf dosbarthiad difrifoldeb dogfennedig ac archwiliedig, a'r
ddisgyblaeth o olrhain eitemau gweithredu post-mortem i gwblhad. Mae'r
buddsoddiad hwnnw'n costio llai na'r dewis arall, rhaglen fetrigau
digwyddiad sy'n cynhyrchu data anghywir â hyder oherwydd bod ofn wedi
llygru pob mewnbwn iddo.

## Gwrth-batrymau a pheryglon

- **Adolygiad digwyddiad wedi'i gyfeirio-gan-fai:** yn llygru
  gonestrwydd adrodd, cyflymder cydnabyddiaeth, a dosbarthiad
  difrifoldeb ar gyfer pob digwyddiad yn y dyfodol.
- **Olrhain dim ond rhif amser-ymateb cymysg:** yn cuddio pa gyfnod
  penodol, canfod, cydnabod, datrys, sydd mewn gwirionedd yn broblem.
- **Dosbarthiad difrifoldeb anghyson ar draws timau:** yn gwneud data
  digwyddiad ar draws y sefydliad yn annibynadwy ar gyfer cymhariaeth.
- **Adolygu amlder digwyddiad a MTTR ar wahân:** yn colli'r darlun
  cyfunol, onest y mae'r signal wedi'i barejo'n ei ddarparu.
- **Proses post-mortem sy'n cynhyrchu mewnwelediad ond dim eitemau
  gweithredu wedi'u cwblhau:** yn gwastraffu'r dysgu sefydliadol y mae'r
  broses i fod i'w ddal.
- **Polisi di-fai wedi'i ddatgan nad yw'n cael ei fyw mewn gwirionedd
  gan arweinyddiaeth:** yn cynhyrchu'r un llygru data wedi'i yrru-gan-
  ofn â diwylliant beio-dueddol agored.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Mae ymateb digwyddiad yn anffurfiol, mae
  adrodd yn anghyson, ac mae diwylliant beio-dueddol yn atal adrodd
  onest yn weithredol.
- **Lefel 2, Datblygu:** Mae rhywfaint o olrhain digwyddiad yn bodoli,
  ond mae dosbarthiad difrifoldeb yn anghyson ac mae arfer di-fai wedi'i
  ddatgan ond heb ei fyw'n gyson.
- **Lefel 3, Safoni:** Olrheinir metrigau digwyddiad wedi'u dadelfennu-
  yn-ôl-cyfnod â dosbarthiad difrifoldeb cyson, dogfennedig ar draws y
  sefydliad, gydag arfer post-mortem gwirioneddol ddi-fai.
- **Lefel 4, Rheoli:** Adolygir amlder digwyddiad a MTTR gyda'i gilydd,
  olrheinir eitemau gweithredu post-mortem i gwblhad, ac archwilir
  dosbarthiad yn gyfnodol am gysondeb.
- **Lefel 5, Cerddorfaru:** Mae gan y sefydliad hanes dangosadwy,
  parhaus o arfer di-fai yn cynhyrchu data onest a thrwsiadau systemig
  gwirioneddol, ac mae metrigau digwyddiad yn llywio penderfyniadau
  buddsoddi dibynadwyedd yn uniongyrchol ac yn ddibynadwy.

## Syniadau ar gyfer trafodaeth

1. A fyddai ein proses post-mortem yn goroesi prawf onest o a yw'n wirioneddol ddi-fai?
2. Beth yw'r dadansoddiad cyfnod, canfod, cydnabod, datrys, o'n digwyddiad diweddar arafaf?
3. A fyddai dau dîm yn dosbarthu difrifoldeb ein digwyddiad sylweddol diwethaf yn yr un ffordd?
4. Pa ganran o'n heitemau gweithredu post-mortem diweddar sydd mewn gwirionedd wedi'u cwblhau?
5. A yw ofn beio erioed wedi llunio sut cafodd digwyddiad ei adrodd neu ei drafod ar ein tîm?

## Prif gasgliadau

- **Mae diwylliant post-mortem di-fai'n rhagofyniad** ar gyfer data
  digwyddiad dibynadwy; mae ofn beio'n llygru adrodd, cyflymder
  cydnabyddiaeth, a dosbarthiad fel ei gilydd.
- Dadelfennwch amser ymateb i gyfnodau **canfod, cydnabod, a datrys**,
  pob un yn pwyntio at drwsiad gwahanol.
- Dosbarthwch ddifrifoldeb â **meini prawf cyson, dogfennedig, wedi'u
  harchwilio**, gan adlewyrchu disgyblaeth diffyg-dianc pwnc 5.1.
- Adolygwch **amlder digwyddiad a MTTR gyda'i gilydd**, byth ar wahân,
  yr un ddisgyblaeth barejo â metrigau sefydlogrwydd DORA.
- Olrheiniwch **eitemau gweithredu post-mortem i gwblhad**; mae'r
  metrig yn sgil-gynnyrch arfer da, nid ei nod.

## Cyfeiriadau a darllen pellach

- *Site Reliability Engineering: How Google Runs Production Systems*,
  gan Betsy Beyer, Chris Jones, Jennifer Petoff, a Niall Richard
  Murphy, gol. (arfer post-mortem di-fai a metrigau digwyddiad).
- *The Site Reliability Workbook*, gan Betsy Beyer, Niall Richard
  Murphy, David K. Rensin, Kent Kawahara, a Stephen Thorne, gol.
  (canllawiau ymarferol ymateb-digwyddiad a phost-mortem).
- *The Field Guide to Understanding Human Error*, gan Sidney Dekker
  (yr achos sylfaenol dros ymchwiliad methiant systemig, di-fai).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy
  Engineering Blog (2012): mynegiant cynnar, dylanwadol o arfer di-fai
  mewn gweithrediadau meddalwedd.
