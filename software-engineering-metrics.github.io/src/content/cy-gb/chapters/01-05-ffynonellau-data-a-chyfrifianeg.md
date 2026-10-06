# 1.5 Ffynonellau data a chyfrifianeg

## Trosolwg a chymhelliant

Mae metrig cystal â dibynadwy â'r data oddi tano yn unig, ac mae'r rhan
fwyaf o raglenni metrigau'n treulio llawer mwy o ymdrech yn dylunio
dangosfyrddau na gwirio'r biblinell sy'n eu bwydo. Mae hyn tuag yn ôl. Mae
siart wedi'i ddylunio'n hardd wedi'i adeiladu ar gyfrifianeg anghyson,
hunan-adroddedig, neu wedi'i thorri'n dawel yn waeth na dim siart o gwbl,
oherwydd mae'n edrych yn awdurdodol tra'n anghywir. Mae'r pwnc hwn yn
ymwneud â'r sylfaen ddi-fawreddog y mae gweddill y llyfr hwn yn ei chymryd
yn ganiataol: o ble mae data peirianneg mewn gwirionedd yn dod, pryd i
ymddiried mewn cyfrifianeg awtomataidd dros hunan-adrodd, a'r methiannau
ansawdd data sy'n dirymu metrig yn dawel cyn i unrhyw un sylwi.

Mae data peirianneg meddalwedd yn dod o lond llaw o fathau ffynhonnell,
pob un â nodweddion dibynadwyedd gwahanol. Mae rheolaeth fersiwn a
phiblinellau [CI/CD](https://en.wikipedia.org/wiki/CI/CD) yn cynhyrchu
cofnodion gwrthrychol, wedi'u stampio amser, anodd eu ffugio o'r hyn a
ddigwyddodd mewn gwirionedd. Mae olrheinwyr materion ac offer rheoli
prosiect yn cynhyrchu cofnodion sy'n dibynnu ar bobl yn diweddaru statws
yn gywir ac yn brydlon, y maent yn aml yn ei wneud yn anghyson. Mae
arolygon yn cynhyrchu data hunan-adroddedig sy'n amhrisiadwy ar gyfer
pethau na all unrhyw system eu harsylwi, fel boddhad, ond sy'n destun
tuedd cof ac effeithiau dymunoldeb cymdeithasol. Mae platfformau
arsylladwyedd yn cynhyrchu telemetreg lefel-system sy'n wrthrychol ond
dim ond yn cwmpasu'r hyn a gyfrifiannwyd. Mae gwybod o ba gategori y daw
data metrig penodol yn dweud wrthych faint i ymddiried ynddo a pha
foddau methiant i wylio amdanynt.

Ar raddfa menter a llywodraeth, mae problemau ansawdd data'n cronni
oherwydd bod y pellter rhwng tarddiad y data a'i ddefnydd terfynol mewn
dangosfwrdd yn tyfu trwy sawl system, integreiddiad, a thrawsffurfiad.
Gall maes sy'n golygu un peth yn y system ffynhonnell olygu rhywbeth
gwahanol yn gynnil erbyn iddo gyrraedd haen adrodd, ac nid oes neb i lawr
yr afon yn sylwi oherwydd bod y rhif yn dal i edrych yn gredadwy. Mae cael
cyfrifianeg yn iawn yn llai cyffrous na chael fframweithiau'n iawn, ond
dyma'r sylfaen y mae popeth arall yn y llyfr hwn yn sefyll arno.

## Egwyddorion allweddol

- **Ffafriwch gyfrifianeg dros hunan-adrodd ble bynnag y gall y system
  arsylwi'r digwyddiad yn uniongyrchol.** Mae stamp amser defnyddio o'r
  biblinell yn fwy dibynadwy na chyfrif defnyddio hunan-adroddedig tîm.
- **Defnyddiwch hunan-adrodd dim ond ar gyfer yr hyn na ellir ei arsylwi'n
  uniongyrchol.** Nid oes gan foddhad, ffrithiant a ganfyddir, a llesiant
  ddirprwy system-o-gofnod; gofynnwch yn uniongyrchol a dyluniwch yr
  arolwg yn dda (pwnc 3.7). Neilltuwch hunan-adrodd yn benodol ar gyfer
  y categori hwnnw.
- **Mae gan ddata pob metrig system ffynhonnell, dull casglu, a modd
  methiant hysbys.** Dogfennwch y tri, nid dim ond y diffiniad.
- **Mae ansawdd data'n dirywio'n dawel.** Gall piblinell a weithiodd yn
  gywir flwyddyn yn ôl fod wedi'i thorri'n dawel heddiw, a bydd
  dangosfwrdd yn parhau i renderu rhif anghywir heb gwyno.
- **Cyfrifiannwch ar bwynt y gwirionedd, nid i lawr yr afon o
  gyfieithiad.** Mae pob naid rhwng y digwyddiad a'r dangosfwrdd yn gyfle
  i ystyr ddrifftio.

## Argymhellion

### Mapiwch bob metrig i'w system ffynhonnell wirioneddol cyn ymddiried ynddo

Ar gyfer pob metrig ar ddangosfwrdd, enwch y system benodol sy'n
cynhyrchu'r digwyddiad sylfaenol: y biblinell CI/CD ar gyfer digwyddiadau
defnyddio, y gwesteiwr rheolaeth fersiwn ar gyfer digwyddiadau comit a
chyfuno, yr olrheiniwr digwyddiadau ar gyfer cofnodion toriad, y
platfform arolwg ar gyfer boddhad hunan-adroddedig. Os na allwch enwi'r
system fanwl gywir, nid ydych mewn gwirionedd yn gwybod o ble mae'r rhif
yn dod, ac ni allwch werthuso ei ddibynadwyedd. Mae'r mapio hwn yn
rhagofyniad ar gyfer y siarter llywodraethiant ym mhwnc 1.4, nid ymarfer
ar wahân.

### Cyfrifiannwch wrth y digwyddiad, nid wrth yr adroddiad

Mae'r data mwyaf dibynadwy'n dal digwyddiad yn awtomatig yn y foment y
mae'n digwydd: mae piblinell yn cofnodi defnydd yr eiliad y mae'n
gyflawn, mae system rheolaeth fersiwn yn cofnodi cyfuniad yr eiliad y
mae'n glanio. Mae data sy'n dibynnu ar berson yn cofio diweddaru maes
statws wedyn, gan farcio tocyn yn "wedi'i wneud," yn cofnodi defnydd â
llaw mewn taenlen, yn dirywio mewn cywirdeb po bellaf y mae'n eistedd
oddi wrth y digwyddiad gwirioneddol a pho fwyaf prysur y daw'r person
cyfrifol. Ble bynnag y bo digwyddiad awtomataidd yn bodoli, ffafriwch ef
dros ddirprwy a adroddwyd gan berson ar gyfer yr un ffaith.

### Neilltuwch arolygon ar gyfer yr hyn na all ond person ei ddweud wrthych

Ni ellir arsylwi rhai pethau'n wirioneddol o delemetreg system: a yw
peiriannydd yn teimlo bod ei waith yn ystyrlon, a yw proses yn teimlo'n
rhwystredig, a yw risg llosgi allan yn codi. Mae'r rhain angen gofyn yn
uniongyrchol, ac arolwg wedi'i ddylunio'n dda (mae pwnc 3.7 yn cwmpasu'r
mecaneg) yw'r offeryn cywir. Y camgymeriad yw defnyddio hunan-adrodd ar
gyfer pethau y gallai system eu harsylwi'n uniongyrchol yn lle hynny, gan
ofyn i beirianwyr amcangyfrif eu hamlder defnyddio eu hunain yn hytrach na'i
dynnu o'r biblinell, sy'n cyflwyno sŵn a thuedd ddiangen i mewn i ddata a
allai fod wedi bod yn wrthrychol.

### Adeiladwch wiriadau ansawdd data i mewn i'r biblinell ei hun

Triniwch biblinellau metrig â'r un trylwyredd â chod cynhyrchu: ychwanegwch
wiriadau awtomataidd sy'n baneri pan fydd ffynhonnell yn stopio anfon
data, pan fydd dosbarthiad maes yn symud yn annisgwyl, neu pan fydd
cyfrif yn syrthio i sero'n annisgwyl. Mae dangosfwrdd sy'n renderu data
hen neu wedi'i thorri'n dawel fel petai'n gyfredol yn waeth na
dangosfwrdd sy'n dangos yn weladwy "data ar gael ddim," oherwydd mae'r
cyntaf yn erydu ymddiriedaeth yn anweledig tra bo'r ail o leiaf yn dweud
y gwir am ei gyfyngiadau ei hun.

### Dogfennwch y dull casglu ochr yn ochr â'r diffiniad

Nid yw diffiniad metrig ("amser arwain ar gyfer newidiadau") yn gyflawn
heb ei ddull casglu (wedi'i fesur o'r stamp amser comit cyntaf mewn
rheolaeth fersiwn i'r stamp amser defnyddio cynhyrchu yn y biblinell, gan
eithrio canghennau trwsio-poeth). Bydd dau dîm â'r un diffiniad ond
dulliau casglu gwahanol yn dal i gynhyrchu rhifau na ellir eu cymharu.
Cofnodwch y ddau yn y siarter metrigau o bwnc 1.4, a thriniwch newid i'r
naill neu'r llall fel newid sy'n gofyn am yr un adolygiad dogfennedig.

## Cyfnewidiadau: manteision ac anfanteision

| Math ffynhonnell | Manteision | Anfanteision |
| --- | --- | --- |
| Cyfrifianeg biblinell awtomataidd (CI/CD, rheolaeth fersiwn) | Gwrthrychol, wedi'i stampio amser, anodd ei ffugio, ymdrech barhaus isel | Angen buddsoddiad peirianneg ymlaen llaw i'w adeiladu a'i gynnal |
| Data olrheiniwr materion a rheoli prosiect | Ar gael yn eang, cyfarwydd i dimau | Yn dibynnu ar ddyfalbarhad dynol; yn aml yn anghyson ar draws timau |
| Arolygon a hunan-adrodd | Yr unig ffynhonnell ar gyfer profiad goddrychol (boddhad, llesiant) | Tuedd cof, tuedd dymunoldeb cymdeithasol, blinder ymateb |
| Platfformau arsylladwyedd a thelemetreg | Signal cyfoethog, amser real, lefel-system | Dim ond yn cwmpasu'r hyn a gyfrifiannwyd yn benodol; gall fod yn ddrud ar raddfa |

Y tensiwn canolog yw **gwrthrychedd yn erbyn cwmpas**. Cyfrifianeg
awtomataidd yw'r ffynhonnell fwyaf dibynadwy ond ni all arsylwi profiad
goddrychol o gwbl, tra gall arolygon gyrraedd yn union yr hyn na all
awtomatiaeth ei wneud ond maent yn cario risg tuedd gwirioneddol.
Datryswch y tensiwn trwy ddefnyddio cyfrifianeg awtomataidd ble bynnag y
gellir arsylwi digwyddiad yn uniongyrchol, a neilltuo hunan-adrodd yn
benodol ac yn unig ar gyfer yr hyn sy'n wirioneddol angen gofyn i berson,
byth fel dirprwy diog ar gyfer data y gallai system fod wedi'i ddarparu.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Ar gyfer ein pum metrig pwysicaf, allwn ni enwi'r system ffynhonnell
   fanwl gywir a'r dull casglu ar gyfer pob un, neu a ydym yn tybio
   diffiniad heb wybod o ble mae'r data mewn gwirionedd yn dod?** Mae hwn
   yn fwlch cyffredin syfrdanol: mae metrig yn cael ei fabwysiadu o
   fframwaith neu ddangosfwrdd diofyn gwerthwr, ac nid oes neb ar y tîm
   cyfredol mewn gwirionedd yn gwybod pa system sy'n cynhyrchu'r data
   sylfaenol na sut. Olrheiniwch bob un yn ôl at ei darddiad fel ymarfer
   grŵp.

2. **Pa rai o'n metrigau sy'n dibynnu ar hunan-adrodd ar gyfer rhywbeth y
   gallai system ei arsylwi'n uniongyrchol, a beth fyddai'n ei gymryd i
   ddisodli'r hunan-adrodd hwnnw â chyfrifianeg wirioneddol?** Mae
   cyfrifon defnyddio hunan-adroddedig, oriau gwaith hunan-adroddedig, ac
   amser cylch hunan-amcangyfrifedig i gyd yn enghreifftiau cyffredin o
   ddefnyddio'r ffynhonnell data anghywir ar gyfer rhywbeth y gallai
   awtomatiaeth ei ddal yn fwy dibynadwy. Nodwch y rhain a blaenoriaethwch
   ddisodli'r rhai risg uchaf.

3. **Sut byddem yn gwybod petai un o'n piblinellau data wedi torri'n
   dawel?** Mae'r rhan fwyaf o sefydliadau dim ond yn darganfod piblinell
   fetrigau wedi torri pan fydd rhywun yn sylwi bod rhif yn edrych yn
   annhebygol, a all gymryd misoedd. Trafodwch a oes gan unrhyw un o'ch
   piblinellau wiriadau iechyd awtomataidd heddiw, ac os na, pa rai sydd
   angen amdanynt gyntaf.

4. **Ble mae cyfieithiad rhwng systemau wedi newid ystyr metrig heb i
   unrhyw un benderfynu hynny'n fwriadol?** Gall maes sy'n golygu un peth
   mewn system ffynhonnell olygu rhywbeth gwahanol yn gynnil ar ôl
   integreiddiad neu fudo, a gall y rhif sy'n deillio edrych yn gredadwy
   tra'n anghywir. Ewch trwy lwybr data llawn eich metrig mwyaf
   canlyniadol a chwiliwch am bwyntiau cyfieithu.

5. **A ydym yn dogfennu dulliau casglu, nid dim ond diffiniadau, ar gyfer
   ein siarter metrigau?** Gall dau dîm rannu enw a diffiniad metrig tra'n
   ei gyfrifo o ddulliau casglu gwahanol, gan gynhyrchu rhifau nad ydynt
   mewn gwirionedd yn gymaradwy. Archwiliwch sampl o'ch siarteri yn erbyn
   y bwlch penodol hwn.

6. **Sut ydym yn gwahaniaethu rhwng tuedd wirioneddol ac artiffact
   ansawdd data pan fydd rhif yn symud yn annisgwyl?** Mae symudiad sydyn
   mewn metrig yn aml yn arwydd cyntaf naill ai o newid gwirioneddol neu
   biblinell wedi torri, ac mae gwahaniaethu rhwng y ddau angen gwybod y
   ffynhonnell data'n ddigon da i ymchwilio'n gyflym. Trafodwch broses
   wirioneddol eich tîm ar gyfer y symudiad metrig heb ei esbonio
   diwethaf a wyneboch.

## Golwg sector

**Cwmni newydd.** Gyda stac fach, gall y rhan fwyaf o'ch metrigau ddod yn
uniongyrchol o'ch darparwr CI/CD, gwesteiwr rheolaeth fersiwn, ac offeryn
arolwg ysgafn, heb adeiladu piblinellau pwrpasol. Y risg yw hepgor hyd
yn oed gwiriadau iechyd sylfaenol oherwydd bod y tîm yn symud yn gyflym;
mae gwiriad awtomataidd pum munud bod ffynhonnell data'n dal i anfon
digwyddiadau yn yswiriant rhad yn erbyn hedfan yn ddall yn dawel.

**Busnes bach.** Dibynnwch ar adrodd mewnol eich offer presennol yn
hytrach nag adeiladu piblinellau data pwrpasol nad oes gennych y gallu
i'w cynnal. Byddwch yn benodol ynghylch pa rifau sy'n dod o systemau
awtomataidd a pha rai sy'n amcangyfrifon y mae rhywun yn eu teipio i mewn
i daenlen, oherwydd mae'r ddau'n cario dibynadwyedd gwahanol iawn, hyd yn
oed os ydynt yn dod i ben ar yr un dudalen.

**Menter.** Mae problemau ansawdd data'n cronni ar draws integreiddiadau,
mudiadau, a ffiniau uned fusnes. Buddsoddwch mewn piblinellau data
canolog, wedi'u monitro'n dda ar gyfer eich metrigau mwyaf canlyniadol,
adeiladwch wiriadau ansawdd data awtomataidd fel arfer safonol, ac
archwiliwch ddulliau casglu, nid dim ond diffiniadau, pryd bynnag y byddwch
yn cymharu metrigau ar draws unedau busnes.

**Llywodraeth.** Gall tarddiad data gario pwysau cyfreithiol ac
archwiliadol: efallai y bydd angen i ffigur perfformiad a gyhoeddir
oroesi archwiliad allanol nid dim ond o'i werth ond ei gadwyn casglu
gyfan. Dogfennwch dras data'n benodol, cadwch gofnodion dull casglu
hanesyddol hyd yn oed ar ôl i fethodoleg newid, a byddwch yn barod i
ddangos yn union sut y cynhyrchwyd rhif, nid dim ond beth mae'n ei
ddarllen ar hyn o bryd.

## Enghreifftiau

**Menter.** Roedd arweinyddiaeth beirianneg cwmni gwasanaethau ariannol
wedi bod yn olrhain "amser arwain ar gyfer newidiadau" am ddwy flynedd
cyn darganfod bod mudiad piblinell data ddeunaw mis ynghynt wedi newid
yn dawel y ffynhonnell stamp amser o'r comit cyntaf i greu cais tynnu, gan
fyrhau'r amser arwain ymddangosiadol gan gyfartaledd o sawl awr ar draws
pob tîm heb i unrhyw un sylwi na chymeradwyo'r newid. Sefydlodd y trwsiad
wiriad ansawdd data'n cymharu dosbarthiad pob metrig wythnos wrth
wythnos ac yn baneri symudiadau anarferol yn ystadegol ar gyfer adolygiad
dynol, gan ddal dau broblem piblinell dawel arall o fewn y flwyddyn
ganlynol.

**Llywodraeth.** Roedd dangosfwrdd dibynadwyedd gwasanaeth cyhoeddus-
wynebus asiantaeth trafnidiaeth yn dibynnu ar gymysgedd o delemetreg
synhwyrydd awtomataidd ac adroddiadau digwyddiad a fewnbynnwyd â llaw o
swyddfeydd rhanbarthol. Canfu archwiliad fod rhanbarthau â llai o
gynhwysedd staff yn tan-adrodd digwyddiadau bach yn systematig, nid o
anonestrwydd ond yn syml oherwydd bod mewnbwn â llaw yn cystadlu am amser
â gwaith mwy brys, sy'n golygu bod y ffigur dibynadwyedd a gyhoeddwyd yn
well na realiti yn union yn y rhanbarthau a allai fforddio leiaf i gynnal
a chadw heb adnoddau digonol fynd heb ei sylwi. Disodlodd trwsiad yr
asiantaeth fewnbwn digwyddiad â llaw â chofnodi wedi'i sbarduno gan
synhwyrydd awtomataidd ble bynnag y bo'n ymarferol ac ychwanegodd
amcangyfrif dogfennedig o gwmpas adrodd â llaw ochr yn ochr â'r ffigur a
gyhoeddwyd.

## Achos busnes: cymhellion, ROI, a TCO

Hyder yw'r enillion ar gyfrifianeg gadarn: gall tîm arweinyddiaeth sy'n
ymddiried yn ei ddata weithredu arno'n bendant, tra bo tîm sydd wedi'i
losgi gan biblinell wedi torri'n dawel yn dechrau ail-ddyfalu pob rhif, sy'n
arafu pob penderfyniad sy'n dibynnu ar fetrigau. Mae'r golled hyder honno'n
ddrud ac yn anodd ei thrwsio, yn aml yn cymryd llawer hirach i'w
hailadeiladu na fyddai'r buddsoddiad cyfrifianeg gwreiddiol wedi'i
gostio.

Mae cost cyfanswm perchnogaeth cyfrifianeg dda'n cynnwys y gwaith
peirianneg ymlaen llaw i adeiladu piblinellau dibynadwy a'r gost barhaus
o fonitro ansawdd data, y ddau'n hawdd eu tanfuddsoddi ynddynt oherwydd
nid yw'r naill na'r llall yn cynhyrchu teilsen dangosfwrdd weladwy ei
hun. Mae'r tanfuddsoddiad hwnnw'n economi ffug: mae cost darganfod
piblinell wedi torri'n dawel ar ôl misoedd o benderfyniadau wedi'u
gwneud ar ddata gwael yn llawer uwch na chost adeiladu'r gwiriadau
iechyd a fyddai wedi'i ddal ar y diwrnod cyntaf.

## Gwrth-batrymau a risgiau

- **Ymddiried mewn rhif heb wybod ei system ffynhonnell:** metrig a
  fabwysiadwyd o fframwaith neu ddiofyn gwerthwr heb i unrhyw un olrhain
  o ble mae'r data mewn gwirionedd yn dod.
- **Hunan-adrodd yr hyn y gallai system ei arsylwi'n uniongyrchol:** yn
  cyflwyno sŵn a thuedd ddiangen i mewn i ddata a allai fod wedi bod yn
  wrthrychol.
- **Dim gwiriadau ansawdd data awtomataidd ar biblinell fetrig:** gall
  piblinell wedi torri'n dawel renderu rhifau anghywir am fisoedd heb ei
  ddarganfod.
- **Dogfennu dim ond y diffiniad, nid y dull casglu:** gall dau dîm â'r
  un enw metrig fod yn dal i gyfrifo rhifau na ellir eu cymharu.
- **Dangosfwrdd sy'n renderu "0" neu ddata hen fel petai'n gyfredol, heb
  unrhyw arwydd o fethiant ffynhonnell:** yn waeth na neges "data ar gael
  ddim" weladwy.
- **Rhanbarthau neu dimau heb ddigon o adnoddau'n tan-adrodd yn
  systematig oherwydd baich mewnbwn â llaw:** bwlch ansawdd data sy'n
  cydberthyn yn union â'r ardaloedd sydd angen y sylw mwyaf.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Ni all neb olrhain metrig yn ddibynadwy yn ôl at
  ei system ffynhonnell; nid oes gan biblinellau wiriadau iechyd ac mae
  methiannau'n mynd heb eu sylwi.
- **Lefel 2, Datblygu:** Mae gan rai metrigau ffynonellau dogfennedig, ond
  mae dulliau casglu'n anghyson ac mae gwiriadau ansawdd data'n ad hoc ar
  y gorau.
- **Lefel 3, Safoni:** Mae pob metrig a lywodraethir yn dogfennu ei system
  ffynhonnell a'i ddull casglu; ffafrir piblinellau awtomataidd dros
  hunan-adrodd ble bynnag y gellir arsylwi digwyddiad yn uniongyrchol.
- **Lefel 4, Rheoli:** Mae gwiriadau ansawdd data awtomataidd yn monitro
  pob piblinell ganlyniadol, yn baneri anomaleddau ar gyfer adolygiad, ac
  mae tras data'n ddogfennedig ac yn archwiliadwy.
- **Lefel 5, Cerddorfaru:** Mae'r sefydliad yn trin ansawdd data fel
  disgyblaeth beirianneg dosbarth cyntaf â'i fonitro a'i ymateb
  digwyddiadau ei hun, ac fe all ddangos tarddiad llawn ar gyfer unrhyw
  fetrig a gyhoeddwyd ar alwad.

## Syniadau ar gyfer trafodaeth

1. Allen ni olrhain ein tri metrig gorau'n ôl at eu system ffynhonnell fanwl gywir ar hyn o bryd, yn fyw, yn y cyfarfod hwn?
2. Pa rai o'n metrigau presennol sy'n dibynnu ar hunan-adrodd ar gyfer rhywbeth y gallai system ei fesur yn uniongyrchol?
3. A oes gan unrhyw un o'n piblinellau metrig wiriadau iechyd awtomataidd heddiw?
4. Pryd wnaethom ddarganfod piblinell ddata wedi torri'n dawel ddiwethaf, a pha mor hir yr oedd yn anghywir?
5. Ble mae mewnbwn data â llaw yn creu bwlch rhwng realiti a adroddwyd a realiti gwirioneddol?

## Prif gasgliadau

- Ffafriwch **gyfrifianeg awtomataidd** dros hunan-adrodd ble bynnag y
  gall system arsylwi'r digwyddiad yn uniongyrchol; neilltuwch
  hunan-adrodd ar gyfer profiad goddrychol gwirioneddol.
- Mae angen **system ffynhonnell a dull casglu** dogfennedig ar bob
  metrig, nid dim ond diffiniad.
- Mae ansawdd data'n **dirywio'n dawel**; adeiladwch wiriadau
  awtomataidd i mewn i'r biblinell ei hun yn hytrach na darganfod
  toriad ar ddamwain.
- Cyfrifiannwch **wrth y digwyddiad**, nid i lawr yr afon o gyfieithiad,
  i leihau drifft rhwng yr hyn a ddigwyddodd a'r hyn y mae'r dangosfwrdd
  yn ei ddangos.
- Mae cost piblinell wedi torri'n dawel, misoedd o benderfyniadau a
  wnaed ar ddata gwael, ymhell y tu hwnt i gost y gwiriadau iechyd a
  fyddai wedi'i ddal.

## Cyfeiriadau a darllen pellach

- *Observability Engineering*, gan Charity Majors, Liz Fong-Jones, a
  George Miranda (egwyddorion dylunio cyfrifianeg a thelemetreg).
- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (y dull cyfrifianeg y tu ôl i
  fetrigau DORA).
- *Data Quality: The Accuracy Dimension*, gan Jack E. Olson (cysyniadau
  ansawdd data y gellir eu cymhwyso i biblinellau metrigau).
- *How to Measure Anything*, gan Douglas W. Hubbard (dulliau mesur ar
  gyfer meintiau sy'n ymddangos yn anodd eu harsylwi'n uniongyrchol).
