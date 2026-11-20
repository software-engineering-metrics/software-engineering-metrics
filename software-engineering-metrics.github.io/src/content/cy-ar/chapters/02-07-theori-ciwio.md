# 2.7 Theori ciwio

## Trosolwg a chymhelliant

Astudiaeth fathemategol o linellau aros yw
**[theori ciwio](https://en.wikipedia.org/wiki/Queueing_theory)**. Mae'n
swnio fel ffit od ar gyfer llyfr am fetrigau peirianneg meddalwedd hyd
nes ichi sylwi faint o biblinell gyflenwi sydd mewn gwirionedd yn giw:
cais tynnu'n aros am adolygydd, comit yn aros am redwr CI, tocyn yn aros
i gael ei godi, neges cymorth cwsmer yn aros am ymateb. Cyflwynodd pwnc
2.4 eisoes lwyth llif ac amser llif a dangosodd fod gorlwytho ffrwd werth
yn gwneud i gyflenwi arafu'n sydyn, a dangosodd pynciau 2.5 a 2.6 mai
amser aros, nid amser gwaith, yw'r rhan fwyaf o amser cyflenwi. Theori
ciwio yw'r fathemateg sylfaenol sy'n esbonio pam mae hyn i gyd yn wir,
nid dim ond patrwm a arsylwyd.

Y canlyniad mwyaf defnyddiol sengl yw **[cyfraith Little](https://en.wikipedia.org/wiki/Little%27s_law)**,
theorem a broadwyd gan yr ymchwilydd gweithrediadau John Little ym 1961:
mae nifer cyfartalog yr eitemau mewn system sefydlog yn hafal i'r
gyfradd gyfartalog y mae eitemau'n cyrraedd, wedi'i lluosi â'r amser
cyfartalog y mae pob eitem yn ei dreulio yn y system. Defnyddiodd pwnc
2.4 eisoes y canlyniad hwn o dan enwau'r Flow Framework ei hun, mae
llwyth llif yn hafal i gyfradd gyrraedd wedi'i lluosi ag amser llif. Yn
eirfa ehangach y llyfr hwn mae hefyd yn darllen fel gwaith ar y gweill
(pwnc 2.5) yn hafal i gyfradd gyrraedd gwaith newydd wedi'i lluosi ag
amser cylch (pwnc 2.6). Nid rheol fysedd na chydberthynas a arsylwyd
mewn rhai astudiaethau yw hon. Prawf ydyw sy'n dal ar gyfer unrhyw giw
sefydlog, waeth beth y mae'r ciw'n ei brosesu na sut mae'n penderfynu
beth i weithio arno nesaf.

I dîm mawr, dyna'r pwynt am y cyffredinolrwydd hwnnw. Mae cyfraith Little
yn rhoi gwiriad synnwyr cyffredin i chi sy'n gweithio'n union yr un fath
p'un a yw'r ciw'n fwrdd kanban, brocer neges, neu biblinell CI a rennir.
Os nad yw eich gwaith ar y gweill, cyfradd gyrraedd, ac amser cylch a
fesurwyd yn fras yn bodloni'r hafaliad, mae un o'ch tri rhif yn anghywir,
fel arfer oherwydd diffiniad anghyson o beth sy'n cyfrif fel "ar y
gweill" neu "wedi cyrraedd." Mae sefydliadau menter a llywodraeth yn
rhedeg dwsinau o giwiau o'r fath ar unwaith, pyllau adolygu cod a
rennir, amgylcheddau profi a rennir, byrddau cymeradwyo a rennir, a
chyfraith Little yw'r offeryn rhataf sydd ar gael ar gyfer dal diffiniad
metrig gwael cyn iddo yrru penderfyniad staffio neu broses gwael.

## Egwyddorion allweddol

- **Prawf yw cyfraith Little, nid ffordd o feddwl.** Mae gwaith ar y
  gweill yn hafal i gyfradd gyrraedd wedi'i lluosi ag amser cylch, ar
  gyfer unrhyw giw sefydlog, ac mae'n wiriad cyflym ar a yw eich
  metrigau cyflenwi'n gyson yn fewnol.
- **Nid yw defnydd yn graddio'n llinellol ag amser aros.** Wrth i adnodd a
  rennir nesáu at ddefnydd llawn, mae oedi ciwio'n tyfu'n sydyn, nid yn
  raddol. Mae adnodd sy'n rhedeg ar 95% prysur yn aml yn aros lawer gwaith
  hirach nag un sy'n rhedeg ar 80%, nid dim ond "ychydig yn waeth."
- **Mae cyfartaledd ciw'n cuddio ei achos gwaethaf.** Mae adrodd dim ond
  yr amser aros cymedrig yn cuddio'r gynffon hir, boenus ger cynhwysedd,
  yn union yr hyn y mae pwnc 1.6 yn rhybuddio yn ei erbyn o ran
  defnyddio canraddau yn lle cyfartaleddau.
- **Gellir twyllo sut mae ciw'n cael ei ddiffinio mor hawdd ag unrhyw
  fetrig arall.** Mae a yw rhywbeth yn cyfrif fel "wedi cyrraedd," "ar y
  gweill," neu "wedi'i wasanaethu" yn ddewis, a gellir ei diwnio i ffafrio
  dangosfwrdd heb newid yr hyn sy'n digwydd i'r gwaith mewn gwirionedd.
- **Mae piblinell fel arfer yn giw o giwiau.** Mae piblinell gyflenwi'n
  cadwyno sawl cam gyda'i gilydd, a'r cam arafaf sy'n gosod y cyflymder
  ar gyfer y gadwyn gyfan waeth pa mor gyflym mae'r lleill yn rhedeg.

## Argymhellion

### Defnyddiwch gyfraith Little i wirio'ch rhifau eich hun cyn ymddiried ynddynt

Cymerwch waith ar y gweill cyfartalog a fesurwyd eich tîm, ei gyfradd
gyrraedd gyfartalog o eitemau newydd yr wythnos, a'i amser cylch
cyfartalog, a gwiriwch a yw gwaith ar y gweill yn fras hafal i gyfradd
gyrraedd wedi'i lluosi ag amser cylch. Pan nad yw, peidiwch â thybio bod
y theori'n anghywir. Chwiliwch am yr achos gwirioneddol: terfyn cam wedi'i
gyfrif yn anghyson, gwaith sy'n eistedd "wedi'i rwystro" ond sy'n dal i
gael ei gyfrif fel ar y gweill, neu gyfradd gyrraedd wedi'i mesur dros
ffenestr wahanol i'r amser cylch. Mae'r un gwiriad hwn yn dal mwy o
gyfrifianeg wael nag y mae'r rhan fwyaf o dimau'n ei ganfod unrhyw ffordd
arall.

### Olrheiniwch ddefnydd yn uniongyrchol ar gyfer pob adnodd a rennir, wedi'i gyfyngu gan gynhwysedd

Nodwch yr adnoddau y mae eich piblinell gyflenwi'n eu rhannu ar draws
llawer o dimau, pwll adolygu cod, clwstwr CI, amgylchedd staging, a
mesurwch pa mor brysur mae pob un yn rhedeg fel cyfran o'i gynhwysedd
sydd ar gael, cyn ichi gynllunio ei redeg yn agos at ei derfyn. Mae grŵp
adolygwyr a rennir sy'n rhedeg ger cynhwysedd llawn yn cynhyrchu amseroedd
aros ciw-adolygu sy'n tyfu lawer cyflymach na'r cynnydd cymedrol mewn
galw a'u hachosodd, yn union y dynameg y tu ôl i gyngor pwnc 2.9 i
wylio amser-i'r-adolygiad-cyntaf fel dangosydd rhagfynegi.

### Gwahanwch gyfradd gyrraedd, cyfradd llwyddiant, cyfradd methiant, a chyfradd hepgor

Gwrthsefwch grynhoi popeth sy'n gadael ciw i mewn i un rhif "trwybwn" neu
"gyfradd wasanaeth." Olrheiniwch bedwar peth ar wahân: pa mor gyflym mae
gwaith yn cyrraedd, faint ohono sy'n gorffen yn llwyddiannus, faint sy'n
methu ac angen ailwaith, a faint sy'n cael ei adael neu ei ollwng yn
dawel cyn i unrhyw un ei orffen. Nid yw piblinell sy'n edrych yn gyflym
oherwydd bod ei chyfradd hepgor wedi dringo'n dawel mewn gwirionedd yn
cyflenwi mwy, a dim ond olrhain y pedwar cyfradd hyn ar wahân fydd yn
dangos hynny i chi.

### Modelwch biblinellau aml-gam fel ciw o giwiau

Triniwch biblinell gyflenwi, neu unrhyw broses aml-gam, cylch bywyd
digwyddiad, piblinell recriwtio, fel cadwyn o giwiau yn hytrach nag un
belen ddiwahaniaeth o "amser." Gosodir y gyfradd gyrraedd gyffredinol gan
y cam cyntaf, y gyfradd gwblhau gyffredinol gan y cam olaf, a chyfrifon
gwall a hepgor cyfanswm y biblinell yw swm rhai pob cam ei hun. Mae'r
fframiad hwn yn dweud wrthych ar unwaith pa gam sy'n werth buddsoddi
ynddo: yr un â'r cyfuniad gwaethaf o ddefnydd uchel a chyfradd methiant
neu hepgor uchel, nid yr un sy'n digwydd bod hawsaf i'w gyfrifiannu.

### Gosodwch derfynau staffio a WIP gan gadw defnydd mewn cof, nid dim ond trwybwn

Pan fyddwch yn penderfynu faint o adolygwyr neu redwyr CI sydd angen ar
dîm, peidiwch â meintioli cynhwysedd i gyfateb yn union â'r gyfradd
gyrraedd gyfartalog. Mae gan giw sy'n rhedeg ar 100% defnydd ar
gyfartaledd amser aros anfeidraidd yn effeithiol yn ymarferol, oherwydd
nid yw cyrraeddiadau gwirioneddol yn wastad, nid yn berffaith llyfn.
Cynlluniwch yn fwriadol ar gyfer pen uwch, a thriniwch "mae ein
hadolygwyr bron bob amser yn brysur" fel arwydd rhybudd am amseroedd
aros sydd i ddod, nid fel tystiolaeth o adnoddau effeithlon.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Dim model ciwio ffurfiol, staffio ar deimlad perfedd | Cyflym i ddechrau; dim eirfa newydd i'r tîm | Yn gyson yn tanamcangyfrif sut mae amser aros yn ffrwydro ger cynhwysedd llawn |
| Cyfraith Little fel gwiriad synnwyr cyffredin ar fetrigau presennol | Rhad, angen dim offer newydd, yn dal diffiniadau gwael yn gyflym | Dim ond yn gwirio cysondeb, nid yn gwneud diagnosis o'r achos ar ei ben ei hun |
| Efelychiad ciwio llawn (dosraniadau cyrraedd, sawl gweinydd) | Y rhagfynegiad mwyaf cywir o ymddygiad amser-aros o dan lwyth | Angen sgil ystadegol gwirioneddol a chynnal a chadw na fydd y rhan fwyaf o dimau'n ei gynnal |
| Olrhain defnydd ar adnoddau a rennir heb fodelu dyfnach | Syml, gweithredadwy, yn dal yr achos mwyaf sengl o amseroedd aros rhemp | Yn dweud dim ynghylch pam mae defnydd yn uchel na beth i'w wneud am yr achos sylfaenol |

Y tensiwn canolog yw **trylwyredd yn erbyn mabwysiadu**. Mae efelychiad
ciwio llawn yn rhoi'r ateb mwyaf cywir, ond ni fydd bron unrhyw dîm
peirianneg yn adeiladu ac yn cynnal un, ac mae model nad oes neb yn
ymddiried ynddo na'i ddiweddaru'n waeth na dim model. Mae cyfraith Little
a olrhain defnydd sylfaenol yn ildio rhywfaint o fanwl gywirdeb ond nid
ydynt angen sgil ystadegol arbenigol ac maent yn ffitio'n uniongyrchol i
mewn i fetrigau y mae tîm eisoes yn eu casglu ar gyfer pynciau 2.4 i
2.6. Rhagosodwch i'r gwiriadau rhad, mabwysiadwy hynny, a neilltuwch
efelychiad llawn ar gyfer yr achos prin lle mae un adnodd a rennir, fflyd
CI mawr, pwll adolygu arbenigol, yn ddigon drud i gyfiawnhau'r
buddsoddiad.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A yw ein gwaith ar y gweill, cyfradd gyrraedd, ac amser cylch a
   fesurwyd mewn gwirionedd yn bodloni cyfraith Little, ac os na, pam
   ddim?** Dyma'r diagnosis cyflymaf sengl sydd ar gael ar gyfer
   diffiniad metrig gwael. Ewch trwy'r rhifau gwirioneddol gyda'ch
   gilydd, ac os nad yw'r hafaliad yn fras yn dal, olrheiniwch y
   camgyfateb i anghysondeb diffiniadol penodol yn hytrach na diystyru'r
   gwiriad.

2. **Pa adnoddau a rennir yn ein piblinell gyflenwi sy'n rhedeg yn agos
   at ddefnydd llawn, ac a ydym mewn gwirionedd yn gwybod eu rhif
   defnydd?** Gall y rhan fwyaf o dimau enwi adnodd sy'n "teimlo bob amser
   yn brysur" ond nid ydynt erioed wedi mesur ei ddefnydd yn
   uniongyrchol. Nodwch y ddau neu dri adnodd a rennir mwyaf cyfyngedig a
   chael rhif gwirioneddol ar gyfer pob un.

3. **A ydym yn cymysgu llwyddiant, methiant, a hepgor i mewn i un rhif
   trwybwn, a beth fyddem yn ei weld petaem yn eu gwahanu ar wahân?** Gall
   un cyfrif "eitemau wedi'u cwblhau" godi hyd yn oed wrth i ansawdd
   syrthio neu waith gael ei adael yn dawel. Ailgyfrifwch drwybwn cyfnod
   diweddar fel tri rhif ar wahân a thrafodwch beth mae'r rhaniad yn ei
   ddatgelu a guddiodd y rhif cymysg.

4. **Ble yn ein piblinell mae'r dagfa wirioneddol, y cam arafaf sy'n
   gosod y cyflymder ar gyfer popeth i lawr yr afon ohono?** Mae timau'n
   aml yn buddsoddi mewn cyflymu'r cam hawsaf i'w wella yn hytrach na'r
   un sydd mewn gwirionedd yn cyfyngu trwybwn cyfanswm. Nodwch y cam â'r
   cyfuniad gwaethaf o ddefnydd uchel a chyfradd methiant neu hepgor
   uchel.

5. **Petaem yn ychwanegu cynhwysedd i'n hadnodd a rennir mwyaf cyfyngedig, a
   fyddai amser aros mewn gwirionedd yn gwella, neu a fyddai galw'n
   syml yn ehangu i'w lenwi?** Mae'r cwestiwn hwn yn gwahanu prinder
   cynhwysedd gwirioneddol oddi wrth broblem galw, ac mae'r ateb yn newid a
   yw'r trwsiad cywir yn fwy o bennau staff, terfyn WIP, neu newid i sut
   mae gwaith yn cael ei flaenoriaethu cyn iddo fynd i mewn i'r ciw.

6. **A ydym erioed wedi ailddiffinio beth sy'n cyfrif fel "ar y gweill"
   neu "wedi cyrraedd" mewn ffordd a wnaeth i ddangosfwrdd edrych yn well
   heb newid yr hyn a ddigwyddodd i'r gwaith mewn gwirionedd?** Mae hyn yn
   werth ei ofyn yn onest ac yn benodol, ag enghreifftiau gwirioneddol o'r
   flwyddyn ddiwethaf, yn hytrach na'i drin fel pryder damcaniaethol.

## Golwg sector

**Cwmni newydd.** Gyda llond llaw o beirianwyr, mae'r rhan fwyaf o
giwiau'n ddigon byr fel bod dadansoddiad ciwio ffurfiol yn ormodedd. Mae'r
arfer defnyddiol yn llai: sylwch pan fydd un person, yn aml y peiriannydd
mwyaf uwch, wedi dod yn adnodd a rennir de facto y mae popeth arall yn
aros arno, a thriniwch hynny fel problem defnydd sy'n werth ei henwi hyd
yn oed heb unrhyw fodel ffurfiol y tu ôl iddo.

**Busnes bach.** Yn anaml y mae angen unrhyw beth mwy soffistigedig ar
dîm busnes bach na olrhain defnydd ar ei un neu ddau adnodd sy'n
wirioneddol a rennir, yn aml un adolygydd sengl neu biblinell defnyddio
sengl, a gwylio am y pwynt lle mae "fel arfer ar gael" yn dod yn dawel yn
"fel arfer y dagfa." Mae taenlen yn ddigon; nid oes angen offer pwrpasol
ar y raddfa hon.

**Menter.** Mae adnoddau a rennir yn lluosi'n gyflym ar raddfa menter:
tîm platfform canolog, bwrdd adolygu diogelwch a rennir, fflyd CI a
rennir yn gwasanaethu dwsinau o dimau cynnyrch. Dyma'n union yr adnoddau
lle mae olrhain defnydd yn ennill ei le, oherwydd gall un adnodd a rennir
wedi'i orlwytho ddirywio amser cyflenwi'n dawel ar gyfer pob tîm sy'n
dibynnu arno, ac ni fydd metrigau unrhyw dîm unigol ei hun yn datgelu
achos sy'n byw y tu allan i'w biblinell ei hun.

**Llywodraeth.** Mae rhaglenni cyflenwi aml-asiantaeth ac aml-werthwr yn
aml yn llwybro gwaith trwy fyrddau cymeradwyo a rennir, prosesau
achrediad diogelwch a rennir, ac amgylcheddau profi a rennir nad oes
gan unrhyw un tîm eu rheoli na'u haddasu ar ei ben ei hun. Mae
dadansoddiad ciwio o'r pyrth a rennir hyn, cyfradd gyrraedd, cynhwysedd,
defnydd, yn aml y dystiolaeth gliriaf sydd ar gael ar gyfer achos busnes
i ychwanegu cynhwysedd neu i newid sut mae gwaith yn cael ei swp-brosesu
cyn iddo gyrraedd y porth.

## Enghreifftiau

**Menter.** Sylwodd tîm platfform mewnol darparwr isadeiledd cwmwl fod
amser arwain ar gyfer newidiadau (pwnc 2.10) wedi cropian i fyny ar
draws pob tîm cynnyrch a oedd yn dibynnu ar ei fflyd CI a rennir, er na
newidiodd unrhyw dîm unigol sut yr oedd yn gweithio. Canfu dadansoddiad
defnydd fod y fflyd yn rhedeg dros 90% prysur yn ystod oriau craidd, ymhell
y tu hwnt i'r pwynt lle mae theori ciwio'n rhagfynegi bod amser aros yn
tyfu'n sydyn yn hytrach na graddol. Ychwanegodd y tîm platfform gynhwysedd
CI a chyflwynodd bolisi amserlennu cyfran-deg fel na allai bwrst
gweithgarwch unrhyw dîm sengl fonopoleiddio'r ciw. Syrthiodd amser aros
CI canolrifol dros hanner o fewn mis, tystiolaeth mai ciw a rennir,
anweledig oedd y dagfa drwy'r amser.

**Llywodraeth.** Olrheiniodd tîm gwasanaeth digidol asiantaeth trwyddedu
genedlaethol brosesu ceisiadau fel un rhif trwybwn "achosion wedi'u cau
yr wythnos" am ddwy flynedd, ac roedd y rhif yn edrych yn sefydlog.
Canfu dadansoddiad agosach, gan hollti'r rhif hwnnw yn achosion a
gymeradwywyd, a wrthodwyd, ac a adawyd gan ymgeiswyr ar ôl oedi hir, fod y
gyfradd adael bron wedi treblu dros yr un cyfnod tra bo cymeradwyaethau'n
aros yn wastad. Dangosodd cyfraith Little, wedi'i chymhwyso i giw'r
gweithiwr achos, fod gwaith ar y gweill wedi tyfu ymhell y tu hwnt i'r
hyn yr oedd amser prosesu cyfartalog datganedig y tîm yn ei awgrymu, gan
olygu bod achosion yn pentyrru'n dawel mewn statws nad oedd yn cael ei
gyfrif fel "aros." Ailstrwythurodd yr asiantaeth ei diffiniadau olrhain-
achosion i gyfrif pob achos agored yn onest ac ychwanegodd gynhwysedd
gweithiwr achos wedi'i feintio i gadw defnydd o dan 85%, a olrheinir
bellach fel targed gweithredol sefydlog ochr yn ochr â'r rhif trwybwn.

## Achos busnes: cymhellion, ROI, a TCO

Mae'r enillion ar gymhwyso dadansoddiad ciwio sylfaenol yn troi "mae'r
biblinell yn teimlo'n araf" yn benderfyniad penodol, amddiffynadwy,
ychwanegu pen uwch i'r adnodd a rennir hwn, hollti'r metrig cymysg hwn i
mewn i'w gydrannau gwirioneddol, yn hytrach na gwthiad amwys i "weithio'n
gyflymach" sy'n colli'r achos gwirioneddol. Mae enghraifft isadeiledd
cwmwl uchod, gan haneru amser aros o drwsiad cynhwysedd ac amserlennu yn
hytrach nag unrhyw newid i ymddygiad timau unigol, yn batrwm y mae'r
dadansoddiad hwn yn ei gynhyrchu'n ddibynadwy: mae'r trwsiad bron bob
amser yn rhatach na gofyn i bob tîm i lawr yr afon symud yn gyflymach o
gwmpas tagfa na allant ei gweld.

Mae cost mabwysiadu'n wirioneddol isel. Nid oes angen unrhyw offer newydd
ar gyfraith Little ac olrhain defnydd y tu hwnt i'r hyn y mae pynciau
2.4 i 2.6 eisoes yn gofyn i chi ei gasglu: cyfradd gyrraedd, gwaith ar y
gweill, ac amser cylch. Mae'r buddsoddiad yn bennaf yn ddisgyblaeth
ddadansoddol, gwirio'r rhifau yn erbyn ei gilydd ac adolygu defnydd ar
adnoddau a rennir yn gyfnodol cyn iddynt ddod yn ddirywiad amser-arwain
heb ei esbonio nesaf y sefydliad.

## Gwrth-batrymau a risgiau

- **Meintioli cynhwysedd adnodd a rennir i gyfateb yn union â'i gyfradd
  gyrraedd gyfartalog:** yn gwarantu defnydd uchel ac amseroedd aros
  rhemp pryd bynnag y mae galw hyd yn oed ychydig yn anwastad.
- **Adrodd dim ond amser aros cymedrig, byth canradd:** yn cuddio'r
  gynffon hir sy'n bwysicaf i'r bobl sy'n aros ynddi.
- **Cymysgu llwyddiant, methiant, a hepgor i mewn i un rhif trwybwn:** y
  fector twyllo wrth galon y pwnc hwn. Gall tîm o dan bwysau wneud i
  drwybwn edrych yn iach trwy adael y gyfradd hepgor godi'n dawel,
  tocynnau wedi'u gadael, ceisiadau wedi'u gollwng yn dawel, gwaith na
  chaiff byth ei gyfrif fel methiant. Y gledr ddiogelwch yw olrhain
  cyfradd gyrraedd, llwyddiant, methiant, a hepgor fel pedwar rhif ar
  wahân, gweladwy, yr un ddisgyblaeth y mae pwnc 1.2 yn gofyn amdani
  gyda phob metrig yn y llyfr hwn, fel na all cyfradd hepgor gynyddol
  guddio y tu ôl i siart trwybwn gwastad.
- **Trin "mae ein pobl bob amser yn brysur" fel canmoliaeth:** symptom o
  ddefnydd uchel ydyw, prif achos amseroedd aros hir, anrhagweladwy.
- **Ailddiffinio "ar y gweill" i grebachu gwaith ar y gweill yn dawel:**
  yn symud gwaith i mewn i statws heb ei gyfrif, "wedi'i rwystro," "ar
  ddal," heb newid pa mor hir mae'n ei gymryd i orffen, ac yn torri'r
  gwiriad cyfraith Little a fyddai fel arall wedi ei ddal.
- **Tybio nad oes angen unrhyw gynnal a chadw ar fodel ciwio unwaith ei
  adeiladu:** mae patrymau cyrraedd a chynhwysedd'n newid yn gyson, ac mae
  model hen yn cynhyrchu rhagfynegiadau hyderus, anghywir.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Ni fesurir unrhyw giw'n benodol; trafodir amser
  aros yn anecdotaidd fel "mae pethau'n teimlo'n araf."
- **Lefel 2, Datblygu:** Olrheinir cyfradd gyrraedd, gwaith ar y gweill,
  ac amser cylch ar gyfer o leiaf un biblinell, ond byth eu gwirio yn
  erbyn cyfraith Little na defnydd ar adnoddau a rennir.
- **Lefel 3, Safoni:** Mae cyfraith Little yn wiriad cysondeb rheolaidd ar
  draws piblinellau cyflenwi, ac olrheinir defnydd yn benodol ar gyfer yr
  adnoddau a rennir mwyaf sylweddol.
- **Lefel 4, Rheoli:** Olrheinir cyfradd llwyddiant, methiant, a hepgor ar
  wahân ar gyfer pob ciw sylweddol, ac mae penderfyniadau cynhwysedd'n
  defnyddio targedau defnydd, nid dim ond galw cyfartalog.
- **Lefel 5, Cerddorfaru:** Mae'r sefydliad yn modelu ei brif
  biblinellau fel ciwiau o giwiau, yn nodi tagfeydd gwirioneddol yn
  systematig, a gall bwyntio at newidiadau cynhwysedd neu broses penodol a
  wnaed oherwydd dadansoddiad ciwio, gyda gwelliant amser-aros wedi'i
  fesur i'w ddangos amdano.

## Syniadau ar gyfer trafodaeth

1. Dewiswch un o'n piblinellau cyflenwi a gwiriwch a yw ei rifau'n bodloni cyfraith Little heddiw.
2. Enwch yr adnodd a rennir sengl yn ein sefydliad y byddai'r rhan fwyaf o bobl yn cytuno ei fod "bob amser yn brysur," a dewch o hyd i'w rif defnydd gwirioneddol.
3. Sut fyddai ein siart trwybwn yn edrych petaem yn ei hollti'n gyfraddau llwyddiant, methiant, a hepgor ar gyfer y chwarter diwethaf?
4. Petai'n rhaid inni ychwanegu cynhwysedd i union un adnodd a rennir eleni, pa un, a pha dystiolaeth fyddai'n ei gyfiawnhau?

## Prif gasgliadau

- Mae **cyfraith Little**, gwaith ar y gweill yn hafal i gyfradd
  gyrraedd wedi'i lluosi ag amser cylch, yn brawf, nid ffordd o feddwl,
  a dyma'r gwiriad rhataf sydd ar gael ar a yw eich metrigau cyflenwi'n
  gyson yn fewnol.
- **Mae amser aros yn tyfu'n sydyn, nid yn raddol, wrth i ddefnydd nesáu
  at gynhwysedd llawn.** Triniwch "bob amser yn brysur" fel arwydd
  rhybudd, nid canmoliaeth.
- Olrheiniwch **gyfradd gyrraedd, cyfradd llwyddiant, cyfradd methiant, a
  chyfradd hepgor** ar wahân; mae eu cymysgu i mewn i un rhif trwybwn yn
  fector twyllo canolog y pwnc hwn.
- Modelwch biblinell aml-gam fel **ciw o giwiau**, a buddsoddwch yn y
  cam â'r cyfuniad gwaethaf o ddefnydd uchel a chyfradd methiant neu
  hepgor uchel, nid y cam sydd hawsaf i'w wella.
- Ffafriwch wiriadau rhad, mabwysiadwy, **cyfraith Little ac olrhain
  defnydd**, dros efelychiad ciwio llawn na fydd y rhan fwyaf o dimau'n
  ei gynnal.

## Cyfeiriadau a darllen pellach

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*.
  Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and
  Solve Performance Problems on the Computer Systems You Work With*.
  CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing,
  2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
