# 3.5 Metrigau cyfathrebu a chydweithio

## Trosolwg a chymhelliant

Mae **Cyfathrebu a chydweithio**, y C yn SPACE (pwnc 3.1), yn mesur
sut mae gwybodaeth mewn gwirionedd yn llifo rhwng pobl a thimau: pa mor
ddarganfyddadwy yw dogfennaeth, pa mor gyfartal y mae gwybodaeth yn
lledaenu ar draws tîm, pa mor dda y mae dibyniaethau traws-dîm yn cael
eu cydlynu, a sut mae aelodau tîm newydd yn cynefino i mewn i lif
dealltwriaeth a rennir. Dyma'r dimensiwn a offerynir leiaf o'r pump yn
aml, yn union oherwydd ei fod yn anos ei arsylwi na data cyflenwi ac yn
llai personol na data boddhad, ac mae'r bwlch hwnnw'n gamgymeriad,
oherwydd mae chwalfeydd yma'n aml yn wraidd achos i broblemau sy'n
ymddangos, wedi'u cambriodoli, ym mhob dimensiwn arall.

Mae cyfradd methiant newid gynyddol (pwnc 2.10) sy'n edrych fel
problem brofi weithiau mewn gwirionedd yn broblem gyfathrebu: tîm nad
oedd yn gwybod am newid dibyniaeth tan iddo dorri mewn cynhyrchu. Mae
tuedd boddhad ostyngol (pwnc 3.2) sy'n edrych fel problem llwyth
gwaith weithiau mewn gwirionedd yn broblem ynysu: peiriannydd sydd wedi
cael ei eithrio'n dawel o'r sgyrsiau lle mae penderfyniadau'n cael eu
gwneud. Dadl ganolog y pwnc hwn yw bod cyfathrebu a chydweithio'n
haeddu mesuriad uniongyrchol yn union oherwydd bod eu methiannau'n
esgus-fyw fel problemau eraill, ac mae tîm sy'n mynd ar drywydd yr
achos gwraidd anghywir yn gwastraffu ymdrech wirioneddol yn trwsio'r
peth anghywir.

I dimau mawr, mae'r dimensiwn hwn yn dod yn strwythurol anos ei gynnal
yn union wrth iddo ddod yn bwysicach. Mae cydlynu tîm pum person yn
digwydd trwy agosrwydd dyddiol ac angen bron dim mesuriad bwriadol; mae
sefydliad pum cant o bobl wedi'i wasgaru ar draws parthau amser ac
unedau busnes yn dibynnu ar ddogfennaeth, darganfyddadwyedd, a
mecanweithiau cydlynu traws-dîm y mae'n rhaid eu dylunio'n fwriadol a'u
monitro'n weithredol, oherwydd nid yw'r sianeli anffurfiol a weithiodd
ar raddfa fach yn syml yn cyrraedd mor bell.

## Egwyddorion allweddol

- **Mae chwalfeydd cyfathrebu'n aml yn esgus-fyw fel problemau eraill.**
  Gall gan broblem ansawdd neu foddhad achos gwraidd cydweithio.
- **Dyma'r dimensiwn anoddaf i'w offeryno'n awtomatig**, a'r demtasiwn
  yw ei hepgor yn gyfan gwbl; gwrthsefyllwch y demtasiwn honno'n
  fwriadol.
- **Mae crynhoad gwybodaeth yn berygl mesuradwy, nid dim ond pryder
  amwys.** Olrheiniwch pa mor gul y cedwir gwybodaeth dyngedfennol.
- **Mae ffrithiant dibyniaeth draws-dîm yn aml yn anweledig i'r timau
  dan sylw** tan i rywun ei fesur yn uniongyrchol.
- **Mae cyflymder cynefino'n ddirprwy uniongyrchol, mesuradwy ar gyfer
  pa mor dda y mae dealltwriaeth a rennir mewn gwirionedd yn llifo**
  mewn sefydliad.

## Argymhellion

### Mesurwch grynhoad gwybodaeth yn uniongyrchol

Olrheiniwch faint o bobl a all adolygu, addasu, neu weithredu pob
cydran system dyngedfennol yn gymwys: mae cydran ag un person cymwys yn
unig yn **[ffactor bws](https://en.wikipedia.org/wiki/Bus_factor)** o
un, perygl difrifol ac yn aml anweledig (mae pwnc y llyfr chwaer
`software-engineering-guide` ar gynnal systemau hirhoedlog yn ymdrin â
hyn yn fanylach). Gall data bai rheoli fersiwn, wedi'i gyfuno â
chofnodion cylchdroi ar-alwad, ddatgelu'r crynhoad hwn yn awtomatig:
chwiliwch am gydrannau lle mae un awdur neu un ymatebwr ar-alwad yn
cyfrif am gyfran anghymesur o newidiadau neu ymatebion digwyddiad dros
gyfnod ystyrlon.

### Mesurwch ffrithiant dibyniaeth draws-dîm â signal uniongyrchol

Olrheiniwch pa mor hir y mae cais traws-dîm, newid API angenrheidiol,
diweddariad llyfrgell a rennir, rhyddhad wedi'i gydlynu, yn ei gymryd o
gael ei godi i gael ei ddatrys, yn debyg mewn ysbryd i'r dadelfeniad
amser-cylch ym mhwnc 2.6 ond wedi'i gymhwyso'n benodol i gydlynu
rhwng-timau, yn hytrach na mewn-tîm. Mae gan dîm sy'n aros wythnosau'n
gyson am ddibyniaeth y mae tîm arall yn ei berchen broblem gydweithio
na fydd yn ymddangos yn lân ym metrigau cyflenwi mewnol yr un o'r
timau.

### Defnyddiwch ddarganfyddadwyedd dogfennaeth, nid dim ond bodolaeth dogfennaeth, fel y signal

Nid yw wici llawn tudalennau hen ffasiwn neu na ellir eu canfod yn
dystiolaeth o gyfathrebu da dim ond oherwydd bod cynnwys yn bodoli'n
dechnegol yn rhywle. Lle bo'n bosibl, olrheiniwch pa mor aml y mae
dogfennaeth mewn gwirionedd yn cael ei chyrchu, pa mor aml y mae aelod
tîm newydd yn adrodd na allant ddod o hyd i ateb yr oedd ei angen
arnynt, neu pa mor aml y gofynnir yr un cwestiwn drosodd a throsodd
mewn sianel sgwrsio oherwydd nad oedd yr ateb, er ei fod wedi'i
ddogfennu, yn ddarganfyddadwy. Mae hyn yn cysylltu ansawdd dogfennaeth
(pwnc 4.6) yn uniongyrchol â phryderon cydweithio'r dimensiwn hwn.

### Olrheiniwch amser cynefino i gyfraniad cynhyrchiol fel dirprwy uniongyrchol

Mae'r amser o aelod tîm newydd yn ymuno i'w gyfraniad ystyrlon,
annibynnol cyntaf yn ddirprwy cryf, ymarferol ar gyfer pa mor dda y
mae dealltwriaeth a rennir mewn gwirionedd yn llifo mewn sefydliad: mae
tîm lle mae gwybodaeth yn byw'n gyfan gwbl ym mhenaethiaid pobl yn
cynefino'n araf ac yn anrhagweladwy; mae tîm â dogfennaeth wirioneddol
dda, perchnogaeth glir, a mentora hygyrch yn cynefino'n gyflymach ac yn
fwy cyson. Olrheiniwch y metrig hwn yn benodol a thriniwch amser
cynefino hir neu hynod amrywiol fel signal cydweithio, nid dim ond
pryder AD.

### Mapiwch rwydweithiau cyfathrebu gwirioneddol yn gyfnodol, nid dim ond siartiau sefydliadol

Mae siart sefydliadol yn disgrifio pwy sydd i fod i adrodd i bwy; yn
anaml y mae'n disgrifio pwy sydd mewn gwirionedd yn siarad â phwy i
gyflawni gwaith. Gall dadansoddiad cyfnodol, ysgafn o batrymau
cyfathrebu, rhwydweithiau adolygu cod (pwy sy'n adolygu gwaith pwy), neu
orgyffwrdd presenoldeb cyfarfod, ddatgelu strwythur cydweithio
gwirioneddol sy'n wahanol yn sylweddol i'r siart sefydliadol ffurfiol,
gan aml amlygu tagfa anffurfiol (un person y mae pawb yn llwybro
trwyddo) neu boced ynysig (is-dîm sydd wedi drifftio allan o'r llif
gwybodaeth ehangach) a fyddai fel arall yn aros yn anweledig.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Dim mesuriad cydweithio uniongyrchol | Baich isel | Camfriodolir achosion gwraidd i ddimensiynau eraill; mae peryglon yn aros yn anweledig |
| Olrhain crynhoad gwybodaeth | Yn datgelu perygl gwirioneddol, difrifol (ffactor bws) yn uniongyrchol | Angen cyfuno data o sawl system (rheoli fersiwn, ar-alwad) |
| Olrhain ffrithiant dibyniaeth draws-dîm | Yn datgelu problemau cydlynu anweledig o fewn y naill dîm neu'r llall | Angen offeryno bwriadol; nid yn awtomatig o offer presennol |
| Mapio rhwydwaith-cyfathrebu | Yn datgelu'r strwythur anffurfiol, gwirioneddol y tu ôl i'r siart sefydliadol | Gall deimlo'n ymwthiol os na chaiff ei drin â'r un gofal â data boddhad |

Y tensiwn canolog yw **anhawster offeryno yn erbyn gwerth diagnostig**.
Mae'r dimensiwn hwn yn wirioneddol anos ei fesur yn awtomatig na data
cyflenwi neu weithgarwch, a dyna'n union pam mae llawer o sefydliadau'n
ei hepgor, er bod ei fethiannau'n aml yn achos gwraidd cudd i
broblemau a briodolir i ddimensiynau eraill. Datryswch y tensiwn trwy
ddechrau â'r signalau gwerth-uchaf, mwyaf hydrin, crynhoad gwybodaeth a
ffrithiant dibyniaeth draws-dîm, y ddau ohonynt yn deilliadwy i raddau
helaeth o ddata rheoli fersiwn ac olrhain materion presennol, cyn ceisio
dadansoddiad rhwydwaith-cyfathrebu mwy uchelgeisiol.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A ydym yn gwybod ein ffactor bws ar gyfer pob cydran system
   dyngedfennol, neu a fyddem dim ond yn darganfod y ffordd galed pan fo'r
   un person sy'n ei ddeall yn anargaeledig?** Tynnwch ddata rheoli
   fersiwn ac ar-alwad ar gyfer eich systemau mwyaf dyngedfennol a
   gwiriwch yn onest pa mor grynodedig yw'r wybodaeth mewn gwirionedd.

2. **Pa mor hir y mae cais dibyniaeth draws-dîm nodweddiadol yn ei
   gymryd i'w ddatrys, ac a fyddai'r naill dîm neu'r llall dan sylw wedi
   sylwi ar y ffrithiant hwnnw heb ei fesur yn fwriadol?** Dewiswch
   ddibyniaeth draws-dîm ddiweddar ac olrheiniwch ei hamserlen
   wirioneddol; mae'r ateb yn aml yn hirach, ac yn llai gweladwy i'r
   rhai dan sylw, na thybiodd y naill dîm neu'r llall.

3. **Pan fu gennym broblem ansawdd neu foddhad yn ddiweddar, a allai
   chwalfa gyfathrebu neu gydweithio fod wedi bod yn rhan o'r achos
   gwraidd gwirioneddol?** Edrychwch yn ôl ar ddigwyddiad diweddar neu
   ostyngiad boddhad a gofynnwch y cwestiwn hwn yn benodol, yn hytrach na
   derbyn yr esboniad cyntaf, mwy amlwg.

4. **Pa mor hir y mae'n ei gymryd i aelod tîm newydd wneud ei gyfraniad
   ystyrlon, annibynnol cyntaf, a faint y mae'r amser hwnnw'n amrywio o
   berson i berson?** Mae amser cynefino hir neu hynod amrywiol yn
   symptom uniongyrchol, mesuradwy o pa mor dda y mae dealltwriaeth a
   rennir mewn gwirionedd yn llifo ar eich tîm.

5. **A yw ein rhwydwaith cyfathrebu anffurfiol yn cyfateb â'n siart
   sefydliadol ffurfiol, neu a yw tagfa gudd neu boced ynysig wedi
   datblygu na wnaeth neb ei henwi?** Os nad ydych erioed wedi edrych ar
   hyn yn uniongyrchol, mae'r absenoldeb hwnnw ei hun yn werth ei
   drafod.

6. **A yw ein dogfennaeth mewn gwirionedd yn ddarganfyddadwy, neu a
   yw'n dim ond bodoli yn rhywle sy'n anodd dod o hyd iddo?** Gofynnwch
   i aelod tîm newydd diweddar, neu ceisiwch yn fwriadol ateb cwestiwn
   gwirioneddol gan ddefnyddio dim ond eich adnoddau dogfennedig, a
   gwelwch sut mae'r profiad mewn gwirionedd yn mynd.

## Golwg sector

**Cwmni newydd.** Mae cyfathrebu'n digwydd yn naturiol trwy agosrwydd a
sgwrs ddyddiol mewn tîm bach, ac mae mesuriad ffurfiol fel arfer yn
ddiangen. Y perygl i'w wylio yw ffactor bws yn crynhoi'n beryglus wrth
i'r tîm dyfu heibio'r maint lle mae osmosis anffurfiol yn dal i
gyrraedd pawb, yn aml o gwmpas wyth i ddeuddeg o bobl.

**Busnes bach.** Mae sgwrs syml, gyfnodol, onest, "pwy yw'r unig berson
sy'n deall y system hon," yn aml yn dwyn y peryglon crynhoad-gwybodaeth
mwyaf dyngedfennol i'r wyneb heb angen offeryno ffurfiol. Blaenoriaethwch
ddogfennu'r ddwy neu dair ardal wybodaeth fwyaf bregus, mwyaf crynodedig
yn gyntaf.

**Menter.** Mae ffrithiant dibyniaeth draws-dîm a chrynhoad gwybodaeth
ill dau'n graddio'n wael yma, gan fod mwy o dimau'n golygu mwy o arwynebedd
cydlynu a mwy o systemau dyngedfennol a all ddod i berthyn i bwll sy'n
crebachu o arbenigwyr hirsefydlog. Buddsoddwch yn yr offeryno y mae'r
pwnc hwn yn ei argymell yn fwriadol, gan na all ymwybyddiaeth
anffurfiol wirioneddol gwmpasu sefydliad ar y raddfa hon.

**Llywodraeth.** Gall systemau hirhoedlog a chyfnodau cyflogaeth hir sy'n
gyffredin mewn sefydliadau sector cyhoeddus greu perygl ffactor-bws
difrifol yn cuddio y tu ôl i sefydlogrwydd ymddangosiadol, gan y gallai
system nad yw wedi newid dwylo mewn degawd ddibynnu'n gyfan gwbl ar un
neu ddau berson sy'n nesáu at ymddeoliad. Triniwch fesuriad crynhoad-
gwybodaeth fel pryder parhad-gweithrediadau, nid dim ond hwylustod
peirianneg.

## Enghreifftiau

**Menter.** Darganfu tîm platfform cwmni logisteg, dim ond ar ôl
digwyddiad dyngedfennol yn ystod gwyliau peiriannydd allweddol, fod gan
algorithm llwybro craidd ffactor bws effeithiol o un: dangosodd hanes
rheoli fersiwn fod un person wedi awduro dros 90% o newidiadau
diweddar y gydran, a dangosodd cofnod cylchdroi ar-alwad fod yr un
person wedi datrys pob digwyddiad cysylltiedig yn bersonol am y ddwy
flynedd flaenorol. Sefydlodd y tîm raglen lledaenu-gwybodaeth fwriadol,
sesiynau paru a chylchdroi perchnogaeth digwyddiadau cysylltiedig, a
dangosodd dadansoddiad dilynol wyth mis yn ddiweddarach fod y ffactor
bws wedi codi i bedwar, gyda'r peiriannydd gwreiddiol yn rhydd i gymryd
gwaith newydd, effaith-uwch yn lle aros yn bwynt methiant sengl parhaol.

**Llywodraeth.** Mesurodd tîm peirianneg asiantaeth budd-daliadau talaith
ffrithiant dibyniaeth draws-dîm am y tro cyntaf ar ôl oedi ailadroddus,
a nodwyd yn anffurfiol, mewn gwasanaeth gwirio-cymhwysedd a rennir.
Dangosodd y data mai'r aros canolrifol ar gyfer newid dibyniaeth gan
dîm y gwasanaeth a rennir oedd un diwrnod ar ddeg, yn llawer hirach nag
y tybiodd y naill dîm neu'r llall pan ofynnwyd yn anffurfiol, a
throdd yr achos gwraidd allan i fod yn broses gais aneglur, heb ei
ddogfennu yn hytrach nag unrhyw brinder capasiti. Daeth cyhoeddi
proses gais glir, syml a tharged amser-ymateb ymrwymedig ar gyfer y
gwasanaeth a rennir â'r aros canolrifol i lawr i lai na dau ddiwrnod
o fewn un chwarter, heb angen staffio ychwanegol.

## Achos busnes: cymhellion, ROI, a TCO

Dal achosion gwraidd y mae dimensiynau eraill yn eu camfriodoli yw'r
enillion ar fesur cyfathrebu a chydweithio'n uniongyrchol: mae problem
ansawdd sy'n edrych fel bwlch profi ond sydd mewn gwirionedd yn chwalfa
gyfathrebu yn gwastraffu ymdrech pan fydd tîm yn ceisio ei thrwsio trwy
ychwanegu mwy o brofion yn hytrach na thrwsio'r methiant cydlynu
sylfaenol. Mae'r enghraifft ffactor-bws uchod yn dangos fersiwn fwyaf
llym o'r enillion hwn: mae sefydliad sy'n darganfod ac yn trwsio
perygl crynhoad-gwybodaeth difrifol yn rhagweithiol yn osgoi cost
drychinebus ei ddarganfod yn ystod argyfwng gwirioneddol, pan fo'r un
person a ddeallodd system dyngedfennol yn wirioneddol anargaeledig.

Ymdrech offeryno yn bennaf yw cost cyfanswm perchnogaeth, cyfuno data
rheoli fersiwn, ar-alwad, ac olrhain materion mewn ffyrdd nad ydynt yn
awtomatig allan o'r bocs, ynghyd â disgyblaeth gyfnodol o adolygu
crynhoad gwybodaeth a ffrithiant dibyniaeth yn benodol. Mae'r gost
honno'n gymedrol o'i chymharu â chost argyfwng ffactor-bws gwirioneddol
neu fethiant cydlynu traws-dîm cronig, heb ei ddatrys.

## Gwrth-batrymau a pheryglon

- **Hepgor y dimensiwn hwn oherwydd ei fod yn anodd ei offeryno'n
  awtomatig:** yn gadael achosion gwraidd wedi'u camfriodoli i
  ddimensiynau eraill, haws eu mesur.
- **Trin siart sefydliadol fel darlun cywir o batrymau cyfathrebu
  gwirioneddol:** yn aml yn anghywir, a'r bwlch yn union lle mae tagfeydd
  cudd yn byw.
- **Anwybyddu ffactor bws tan i argyfwng orfodi'r darganfyddiad:** y
  modd methiant sengl mwyaf niweidiol y mae'r pwnc hwn yn rhybuddio
  yn ei erbyn.
- **Tybio bod bodolaeth dogfennaeth yn hafal i ddefnyddioldeb
  dogfennaeth:** mae cynnwys hen ffasiwn neu na ellir ei ganfod yn
  darparu ychydig o werth cyfathrebu gwirioneddol.
- **Mesur ffrithiant traws-dîm ond heb weithredu ar achos gwraidd clir,
  trwsiadwy unwaith y'i canfyddir:** yn gwastraffu'r buddsoddiad
  diagnostig.
- **Trin cynefino araf, amrywiol fel mater AD yn bur yn hytrach na
  signal cydweithio peirianneg:** yn colli dirprwy gwirioneddol
  ddefnyddiol, mesuradwy.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Ni fesurir cyfathrebu a chydweithio o gwbl;
  darganfyddir ffactor bws a ffrithiant traws-dîm dim ond trwy argyfwng.
- **Lefel 2, Datblygu:** Mae rhywfaint o ymwybyddiaeth anffurfiol o
  grynhoad gwybodaeth yn bodoli, ond nid oes mesuriad cyson nac
  ymchwiliad rhagweithiol.
- **Lefel 3, Safoni:** Mesurir ffactor bws a ffrithiant dibyniaeth
  draws-dîm yn gyson ar gyfer systemau dyngedfennol a gwasanaethau a
  rennir ar draws y sefydliad.
- **Lefel 4, Rheoli:** Mae mapio rhwydwaith-cyfathrebu cyfnodol yn
  datgelu tagfeydd cudd a phocedi ynysig, ac olrheinir amser cynefino
  fel dirprwy uniongyrchol ar gyfer iechyd dealltwriaeth-a-rennir.
- **Lefel 5, Cerddorfaru:** Mae'r sefydliad yn lleihau perygl crynhoad-
  gwybodaeth a ffrithiant traws-dîm yn rhagweithiol cyn iddynt achosi
  digwyddiadau, a gall bwyntio at ymyriadau penodol, lledaenu gwybodaeth
  bwriadol, prosesau dibyniaeth wedi'u hegluro, a wellodd y dimensiwn
  hwn yn fesuradwy.

## Syniadau ar gyfer trafodaeth

1. Beth yw ein ffactor bws ar gyfer ein system fwyaf dyngedfennol sengl, yn onest?
2. Pa ddibyniaeth draws-dîm sydd wedi achosi'r ffrithiant mwyaf yn y chwarter diwethaf, ac a wnaethom ei fesur?
3. A fyddai aelod tîm newydd yn dod o hyd i'n dogfennaeth, neu dim ond yn darganfod ei bod yn bodoli'n dechnegol yn rhywle?
4. A yw ein rhwydwaith cyfathrebu anffurfiol yn cyfateb â'n siart sefydliadol?
5. Pa broblem ansawdd neu foddhad a allai mewn gwirionedd fod ag achos gwraidd cydweithio nad ydym wedi'i archwilio?

## Prif gasgliadau

- Mae methiannau cyfathrebu a chydweithio'n aml yn **esgus-fyw fel
  problemau eraill**; mae achos gwraidd wedi'i gamfriodoli i'r
  dimensiwn anghywir yn gwastraffu ymdrech.
- Olrheiniwch **grynhoad gwybodaeth (ffactor bws)** yn uniongyrchol gan
  ddefnyddio data rheoli fersiwn ac ar-alwad, yn hytrach na disgwyl i
  argyfwng ei ddatgelu.
- Mesurwch **ffrithiant dibyniaeth draws-dîm** yn benodol; mae fel
  arfer yn anweledig i'r timau dan sylw tan iddo gael ei fesur.
- Defnyddiwch **amser cynefino i gyfraniad cynhyrchiol** fel dirprwy
  uniongyrchol, ymarferol ar gyfer pa mor dda y mae dealltwriaeth a
  rennir yn llifo.
- Mapiwch **rwydweithiau cyfathrebu gwirioneddol** yn gyfnodol, gan eu
  bod yn aml yn wahanol yn sylweddol i'r siart sefydliadol ffurfiol.

## Cyfeiriadau a darllen pellach

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, a Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Team Topologies*, gan Matthew Skelton a Manuel Pais (moddau
  rhyngweithio tîm a dyluniad dibyniaeth draws-dîm).
- *Peopleware: Productive Projects and Teams*, gan Tom DeMarco a
  Timothy Lister (strwythurau cyfathrebu anffurfiol a'u heffaith ar
  gynhyrchedd).
- Conway, Melvin E., "How Do Committees Invent?" (1968): tarddiad
  Cyfraith Conway, ar y berthynas rhwng strwythur cyfathrebu a
  strwythur system.
