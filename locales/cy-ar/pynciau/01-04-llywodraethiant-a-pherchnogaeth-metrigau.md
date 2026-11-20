# 1.4 Llywodraethiant a pherchnogaeth metrigau

## Trosolwg a chymhelliant

Mae metrig heb berchennog yn ddadl sefydlog sy'n aros i ddigwydd. Mae dau
dîm yn cyfrifo "defnyddwyr gweithredol" yn wahanol ac yn treulio cyfarfod
yn cysoni rhifau yn lle rheoli'r tuedd; mae teilsen dangosfwrdd nad oes
neb yn ei chynnal yn mynd yn dawel yn hen am fisoedd cyn i unrhyw un sylwi;
mae metrig a adeiladwyd yn wreiddiol ar gyfer diagnosis un tîm yn cael ei
fabwysiadu gan dîm arall at bwrpas na chynlluniwyd ei ddiffiniad
gwreiddiol erioed i'w gefnogi. Nid problem fesur yn yr ystyr ystadegol yw
hyn i gyd. Problem llywodraethiant ydyw, ac fe'i datrysir â'r un ddisgyblaeth
y mae sefydliadau eisoes yn ei chymhwyso i god: perchnogaeth benodol,
[ffynhonnell wirionedd](https://en.wikipedia.org/wiki/Single_source_of_truth)
ddogfennedig, a phroses adolygu.

Nid biwrocratiaeth er ei mwyn ei hun yw llywodraethiant. Dyma'r hyn sy'n
gwneud i raglen fetrigau oroesi cyswllt â graddfa sefydliadol. Gall un tîm
gadw ei ddiffiniadau metrig ym mhen rhywun a chywiro drifft trwy sgwrs
ddyddiol. Ni all sefydliad â dwsinau o dimau, pob un yn cynhyrchu ac yn
defnyddio metrigau. Heb lywodraethiant, mae diffiniadau'n drifftio'n dawel,
mae metrigau'n lluosi heb i unrhyw un eu tocio, a chan yr amser y bydd
arweinyddiaeth yn sylwi bod dau adroddiad yn anghytuno, mae cost eu
cysoni eisoes wedi'i thalu sawl gwaith drosodd mewn cyfarfodydd gwastraffus
ac ymddiriedaeth wedi'i herydu.

I sefydliadau menter a llywodraeth, mae llywodraethiant yn cario pwysau
ychwanegol oherwydd bod metrigau'n gynyddol yn bwydo penderfyniadau â
chanlyniadau gwirioneddol, dyraniad cyllideb, adrodd perfformiad
cyhoeddus, contractau gwerthwyr, sy'n goroesi unrhyw un person a adeiladodd
y dangosfwrdd gwreiddiol. Siarter metrigau sy'n goroesi trosiant staff, y
gall unrhyw aelod tîm newydd ei ddarllen a'i ddeall, yw'r hyn sy'n cadw
rhifau sefydliad yn golygu'r un peth mewn pum mlynedd o hyn ag y maent
heddiw.

## Egwyddorion allweddol

- **Mae gan bob metrig yn union un perchennog.** Nid perchnogaeth yw
  perchnogaeth a rennir; pan fydd pawb yn berchen ar ddiffiniad, nid oes
  neb yn ei gynnal.
- **Mae gan fetrig un ffynhonnell wirionedd.** Mae dwy system yn cyfrifo'r
  un metrig yn wahanol yn fethiant llywodraethiant sy'n aros i ymddangos.
- **Mae llywodraethiant wedi'i ysgrifennu i lawr, nid yn wybodaeth
  lwythol.** Nid yw siarter metrigau sy'n byw dim ond yng nghof rhywun yn
  goroesi eu hymadawiad.
- **Mae ymddeoliad yr un mor bwysig â mabwysiadu.** Mae rhaglen fetrigau
  iach yn tocio'r un mor fwriadol ag y mae'n tyfu.
- **Mae llywodraethiant yn graddio gyda chanlyniad, nid gyda chyfrif
  metrig.** Mae angen llywodraethiant trymach ar fetrig sy'n bwydo
  adroddiad cyhoeddus nag ar un y mae un tîm yn ei ddefnyddio i ddadfygio ei
  sbrint ei hun.

## Argymhellion

### Ysgrifennwch siarter metrigau ar gyfer pob set fetrigau sy'n croesi ffin tîm

Dogfen fer, fyw yw **siarter metrigau** sy'n nodi pwrpas set fetrigau, ei
diffyg-nodau penodol (mae gwahaniaeth diagnostig-yn-erbyn-gwerthusol pwnc
1.1 yn perthyn yma), perchennog a ffynhonnell wirionedd pob metrig, a
chadwedd adolygu. Cadwch hi i un dudalen. Mae'r ffeil
docs/examples/metrics-charter-example.md yn ystorfa gydymaith y llyfr hwn
yn dangos y siâp. Mae siarter mor fyr yn cael ei darllen; nid yw siarter
sy'n ymledu i ddogfen bolisi.

### Neilltuwch berchennog wedi'i enwi i bob metrig, nid tîm

Mae "y tîm platfform sy'n berchen ar y metrig hwn" yn gwasgaru cyfrifoldeb
nes nad oes neb mewn gwirionedd yn ei gynnal. Enwch berson neu rôl benodol,
atebol. Mae'r perchennog hwnnw'n gyfrifol am gadw diffiniad y metrig yn
gywir, cadw ei gyfrifianeg yn iach, ac am ateb y cwestiwn "pam mae'r rhif
hwn yn edrych yn anghywir" pan ddaw i'r amlwg yn anochel. Gall ac fe
ddylai berchnogaeth gylchdroi wrth i bobl newid rolau, ond dylai'r siarter
bob amser enwi perchennog cyfredol, byth adael y maes yn wag.

### Sefydlwch un ffynhonnell wirionedd fesul metrig a gwaherddwch gyfrifiadura cyfochrog

Pan fydd dwy system yn cyfrifo'r un metrig sydd wedi'i enwi'n nominal yn
wahanol, er enghraifft un tîm yn cyfrif mewngofnodiadau ar gyfer
"defnyddwyr gweithredol" a'r llall yn cyfrif galwadau API, mae'r
anghytundeb sy'n deillio yn costio llawer mwy mewn cyfarfodydd cysoni nag
y byddai wedi costio i gytuno ar un ffynhonnell wirionedd ymlaen llaw.
Enwch y system awdurdodol ar gyfer pob metrig yn y siarter, a thriniwch
unrhyw gyfrifiad arall o'r un metrig naill ai fel bwg i'w drwsio neu fetrig
wedi'i enwi'n wahanol i'w ailenwi.

### Adeiladwch adolygiad ymddeoliad i mewn i'r gadwedd llywodraethiant

Mae rhaglen fetrigau sy'n ychwanegu metrigau'n unig yn cronni gwasgariad
dangosfwrdd na all neb weithredu arno (pwnc 1.1). Ym mhob adolygiad
llywodraethiant, ochr yn ochr â chynnig metrigau newydd, gofynnwch pa rai
presennol nad ydynt wedi llywio penderfyniad yn y ddau gylch diwethaf ac
sy'n ymgeiswyr ar gyfer ymddeoliad. Nid methiant yw ymddeoliad; yr un
ddisgyblaeth ydyw y mae sylfaen god iach yn ei chymhwyso i god marw.

### Graddiwch drylwyredd llywodraethiant i ganlyniad, nid i gyfaint

Nid oes angen yr un broses ar bob metrig. Mae angen bron dim llywodraethiant
y tu hwnt i'r tîm yn gwybod beth mae'n ei olygu ar fetrig y mae un tîm yn ei
ddyfeisio i ddadfygio ei sbrint ei hun. Mae angen diffiniad dogfennedig,
perchennog wedi'i enwi, llwybr archwilio, a chymeradwyaeth cyn iddo fynd yn
fyw ar fetrig sy'n bwydo sgorgerdyn gweithredol, adroddiad perfformiad
cyhoeddus, neu iawndal unigolyn. Paru pwysau eich proses i ganlyniad y
metrig fod yn anghywir, nid i sawl metrig sy'n bodoli.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Dim llywodraethiant ffurfiol | Cyflym, gorbenion isel ar gyfer timau bach | Mae diffiniadau'n drifftio; mae perchnogaeth yn gwasgaru; mae dangosfyrddau'n gwasgaru'n ddigyfrif |
| Siarter ysgafn fesul set fetrigau | Rhad, darllenadwy, yn graddio gyda'r sefydliad | Angen disgyblaeth i'w chadw'n gyfredol; gellir ei hepgor o dan bwysau terfyn amser |
| Bwrdd llywodraethiant metrigau canolog trwm | Cysondeb cryf, llwybr archwilio cryf | Araf i gymeradwyo metrigau newydd; gall ddod yn dagfa y mae timau'n ei osgoi |
| Llywodraethiant wedi'i raddio i ganlyniad | Yn paru ymdrech â risg wirioneddol | Angen barn i ddosbarthu canlyniad yn gywir; gellir ei dwyllo trwy danddweud y risg |

Y tensiwn canolog yw **cysondeb yn erbyn cyflymder**. Mae llywodraethiant
canolog trwm yn cynhyrchu metrigau dibynadwy, cyson ond yn arafu tîm yn
union pan fydd eisiau cyfrifiannu rhywbeth yn gyflym i ateb cwestiwn
brys. Datryswch y tensiwn trwy raddio pwysau llywodraethiant i ganlyniad:
gadewch i dimau gyfrifiannu'n rhydd ar gyfer eu defnydd diagnostig eu
hunain, a mynnwch y ddisgyblaeth siarter, perchnogaeth, a chymeradwyaeth
lawn dim ond unwaith y bydd metrig yn croesi ffin tîm neu'n bwydo
defnydd gwerthusol neu gyhoeddus.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A oes gan bob metrig sy'n croesi ffin tîm berchennog wedi'i enwi, ac a
   fyddai'r perchennog hwnnw'n adnabod ei hun fel atebol pe gofynnid iddo
   heddiw?** Nid ateb yw "y tîm platfform sy'n berchen arno"; person neu
   rôl benodol ydyw. Archwiliwch eich metrigau traws-dîm a gwiriwch a yw'r
   perchennog wedi'i enwi, os oes un yn bodoli o gwbl, mewn gwirionedd yn
   gwybod ei fod yn dal y cyfrifoldeb hwnnw.

2. **Ble ydym ar hyn o bryd yn cyfrifo'r un metrig sydd wedi'i enwi'n
   nominal mewn dwy ffordd wahanol, a faint o amser ydym wedi'i dreulio'n
   cysoni'r anghytundeb?** Dyma un o'r methiannau llywodraethiant mwyaf drud a
   mwyaf cyffredin mewn sefydliadau mawr, ac mae'n hollol ataliadwy gydag
   un ffynhonnell wirionedd ddogfennedig. Dewch ag enghraifft wirioneddol
   os oes gennych un ac olrheiniwch ei chost.

3. **Pryd wnaethom ymddeol metrig ddiwethaf, a beth sbardunodd y
   penderfyniad hwnnw?** Mae sefydliad na all ond ddisgrifio sut mae'n
   ychwanegu metrigau, byth sut mae'n eu tynnu, yn cronni dyled
   dangosfwrdd. Os na allwch gofio ymddeoliad, mae'r absenoldeb hwnnw ei
   hun yn ateb i'r cwestiwn hwn.

4. **A yw ein proses llywodraethiant'n gyfrannol â chanlyniad, neu a yw pob
   metrig yn mynd trwy'r un pwysau adolygu waeth beth yw'r risg?** Mae
   llywodraethiant gorbwyslas ar fetrig tîm risg isel yn arafu gwaith heb
   fudd diogelwch; mae llywodraethiant gorysgafn ar fetrig sy'n bwydo
   adroddiad cyhoeddus neu benderfyniad iawndal yn risg wirioneddol.
   Mapiwch eich metrigau presennol yn ôl canlyniad a gwiriwch bwysau'r
   broses yn ei erbyn yn onest.

5. **Beth sy'n digwydd i berchnogaeth metrig pan fydd y person a'i
   hadeiladodd yn newid rolau neu'n gadael?** Mae siarter metrigau sydd
   ond yn bodoli ym mhen un person yn diflannu gyda hwy. Profwch hyn trwy
   ddewis metrig a gofyn a allai cyflogai newydd, o'r ddogfennaeth
   ysgrifenedig yn unig, ddeall ei ddiffiniad, ffynhonnell wirionedd, a
   phwrpas.

6. **Sut byddem yn gwybod petai diffiniad metrig wedi newid yn dawel?** Mae
   newid i sut y cyfrifir rhif, heb newid i'w enw na nodyn yn ei hanes, bron
   yn anweledig hyd nes bod rhywun yn cymharu data hen a newydd ac yn dod o
   hyd i anghysondeb na all ei esbonio. Trafodwch a yw eich metrigau'n
   cario unrhyw ffurf o gofnod newid heddiw.

## Golwg sector

**Cwmni newydd.** Mae llywodraethiant ffurfiol fel arfer yn ormodedd ar
gyfer tîm pum person lle mae pawb eisoes yn gwybod beth mae pob rhif yn ei
olygu. Yr un ddisgyblaeth sy'n werth ei mabwysiadu'n gynnar beth bynnag yw
enwi un perchennog fesul metrig yn ysgrifenedig, oherwydd mae'n costio
bron dim ac yn atal dryswch wrth i'r ychydig gyflogeion cyntaf ymuno a
dechrau gofyn beth mae rhif yn ei olygu.

**Busnes bach.** Mae llywodraethiant yma'n bennaf yn golygu dewis, a
glynu wrth, un offeryn fel ffynhonnell wirionedd ar gyfer pob metrig yn
hytrach na gadael i daenlenni a dangosfwrdd mewnol platfform ddargyfeirio'n
dawel. Ysgrifennwch y siarter fel un ddogfen a rennir, hyd yn oed un
anffurfiol, fel y gall cyflogai newydd ddarganfod beth mae rhif yn ei
olygu heb ofyn o gwmpas.

**Menter.** Dyma lle mae llywodraethiant yn ennill ei le. Safonwch
ddiffiniadau ar draws unedau busnes, mynnwch siarter ar gyfer unrhyw beth
sy'n bwydo sgorgerdyn gweithredol, ac adeiladwch adolygiad ymddeoliad i
mewn i gadwedd llywodraethiant reolaidd, oherwydd mae gwasgariad dangosfwrdd
ar y raddfa hon yn dod yn ddrud yn gyflym, mewn cost cynnal a chadw ac yn
y golled credadwyedd pan fydd dwy is-adran yn adrodd rhifau gwrthgyferbyniol
am yr un peth.

**Llywodraeth.** Yn aml mae gan lywodraethiant yma ddimensiwn cyfreithiol
neu archwiliadol: efallai y bydd angen i fesurau perfformiad a gyhoeddir
fodloni gofynion adrodd statudol, a gall newid diffiniad gael
canlyniadau gwleidyddol gwirioneddol. Dogfennwch fethodoleg yn gyhoeddus,
rhewwch ddiffiniadau ar draws cyfnodau adrodd oni bai bod newid ei hun
yn cael ei gyfiawnhau'n gyhoeddus, a thriniwch archwiliad annibynnol o
ddiffiniad y metrig, nid dim ond ei werth cyfredol, fel arfer llywodraethiant
sefydlog.

## Enghreifftiau

**Menter.** Darganfu cwmni meddalwedd amlwladol, yn ystod integreiddiad ôl-
gaffael, fod ei ddwy uned fusnes fwyaf yn diffinio "amlder defnyddio" yn
wahanol: roedd un yn cyfrif pob push i amgylchedd staging, roedd y llall
yn cyfrif dim ond ryddhau cynhyrchu. Roedd arweinyddiaeth wedi bod yn
cymharu perfformiad cyflenwi'r ddwy uned am dros flwyddyn gan ddefnyddio
rhifau nad oeddent mewn gwirionedd yn gymaradwy. Y trwsiad oedd bwrdd
llywodraethiant metrigau ledled y cwmni a gyhoeddodd eirfa sengl o
ddiffiniadau metrig (a adlewyrchir ym mhwnc 9.2 y llyfr hwn), a fynnodd
fod pob tîm yn ardystio cydymffurfiaeth, ac a ymddeolodd y diffiniadau
lleol amwys o fewn un chwarter.

**Llywodraeth.** Canfu swyddfa ystadegau genedlaethol sy'n gyfrifol am
gyhoeddi dangosfwrdd perfformiad gwasanaethau digidol fod newid yn y ffordd
y cyfrifwyd "wedi'i ddatrys o fewn SLA," a wnaed yn dawel gan dîm
peirianneg oedd yn trwsio'r hyn a welsant fel bwg, wedi symud ffigur
cydymffurfiaeth pennawd o sawl pwynt canran heb unrhyw ddogfennaeth
gyhoeddus o'r newid. Sefydlodd y swyddfa broses rheoli-newid ffurfiol ar
gyfer unrhyw ddiffiniad metrig sy'n bwydo adroddiad cyhoeddus: mae newidiadau
arfaethedig angen rhesymeg ddogfennedig, cymhariaeth cyn-ac-ar-ôl a
gyhoeddwyd ochr yn ochr â'r newid, a chymeradwyaeth gan swyddog atebol
wedi'i enwi, gan gau'r bwlch a oedd wedi gadael i'r newid cynharach fynd
heb ei sylwi.

## Achos busnes: cymhellion, ROI, a TCO

Cost cysoni a osgowyd yw'r enillion ar lywodraethiant. Mae pob awr a
dreulir mewn cyfarfod lle mae dau dîm yn dadlau am pwy sydd â'r rhif cywir
yn awr y byddai llywodraethiant disgybledig, un ffynhonnell wirionedd,
perchennog wedi'i enwi, wedi'i hatal yn gyfan gwbl. Ar raddfa menter, mae'r
gost hon yn cronni ar draws dwsinau o dimau a gall dreulio cyfran wirioneddol
sylweddol o sylw arweinyddiaeth ar broblem y byddai siarter un dudalen
fesul set fetrigau wedi'i hosgoi.

Mae cost cyfanswm perchnogaeth arfer llywodraethiant ysgafn, siarter,
perchennog wedi'i enwi, adolygiad cyfnodol, yn gymedrol ac yn bennaf
ymlaen llaw. Mae'r dewis arall, darganfod flwyddyn i mewn i fenter fawr nad
oedd y rhifau y mae arweinyddiaeth wedi bod yn ymddiried ynddynt erioed
mewn gwirionedd yn gymaradwy, yn costio'n ddramatig fwy, mewn dadansoddiad
gwastraffus ac yn y niwed credadwyedd o gywiro'r cofnod cyhoeddus neu
fewnol ar ôl y ffaith.

## Gwrth-batrymau a risgiau

- **Perchnogaeth tîm yn lle perchnogaeth person-wedi'i-enwi:** yn
  gwasgaru atebolrwydd nes nad oes neb mewn gwirionedd yn cynnal y
  diffiniad.
- **Cyfrifiadura cyfochrog o'r un metrig nominal:** yn gwarantu
  anghytundeb yn y pen draw a chysoni drud.
- **Siarter sydd ond yn bodoli ym mhen rhywun:** yn diflannu'r eiliad y
  bydd y person hwnnw'n newid rolau.
- **Rhaglen fetrigau sy'n ychwanegu'n unig, byth yn ymddeol:** yn
  cynhyrchu gwasgariad dangosfwrdd na all neb weithredu arno.
- **Pwysau llywodraethiant unffurf waeth beth yw'r canlyniad:** yn arafu
  gwaith risg isel tra'n tan-ddiogelu metrigau cyhoeddus neu gysylltiedig
  ag iawndal risg uchel.
- **Newidiadau diffiniad tawel:** mae ystyr metrig yn newid heb gofnod
  newid, ac mae cymariaethau hanesyddol yn dod yn annilys yn dawel.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Nid oes gan fetrigau berchnogion ffurfiol; mae
  diffiniadau'n byw mewn cof unigol ac yn drifftio'n dawel ar draws timau.
- **Lefel 2, Datblygu:** Mae rhai timau'n ysgrifennu dogfennaeth
  anffurfiol ar gyfer eu metrigau eu hunain, ond nid oes fformat siarter a
  rennir na chysondeb traws-dîm.
- **Lefel 3, Safoni:** Mae gan bob metrig sy'n croesi ffin tîm siarter
  ddogfennedig, perchennog wedi'i enwi, ac un ffynhonnell wirionedd
  y cytunwyd arni, wedi'i orfodi'n sefydliadol gyfan.
- **Lefel 4, Rheoli:** Mae cadwedd llywodraethiant reolaidd yn adolygu
  metrigau am berthnasedd parhaus, yn ymddeol y rhai nad ydynt bellach yn
  ennill eu lle, ac yn olrhain newidiadau diffiniad â hanes gweladwy.
- **Lefel 5, Cerddorfaru:** Mae llywodraethiant yn gyfrannol â chanlyniad,
  wedi'i awtomeiddio lle bo modd (catalog metrigau sy'n baneri metrigau
  heb eu dogfennu neu heb berchennog), a gall y sefydliad ddangos, ar
  alwad, tarddiad llawn unrhyw rif a gyhoeddwyd.

## Syniadau ar gyfer trafodaeth

1. A allai cyflogai newydd ddarganfod, o ddogfennaeth yn unig, beth mae ein tri metrig pwysicaf mewn gwirionedd yn ei olygu?
2. Pa rai o'n metrigau y mae dwy system wahanol ar hyn o bryd yn eu cyfrifo'n wahanol?
3. Pryd wnaethom ymddeol metrig ddiwethaf, a sut penderfynom wneud hynny?
4. A yw ein proses llywodraethiant'n drymach lle mae'r canlyniad uchaf, neu a yw'n unffurf?
5. Pwy sy'n berchen ar fetrig cyhoeddus-wynebus mwyaf canlyniadol ein sefydliad, yn ôl enw?

## Prif gasgliadau

- Mae angen **un perchennog wedi'i enwi** ar bob metrig, nid tîm, ac **un
  ffynhonnell wirionedd**, nid cyfrifiadura cyfochrog.
- Ysgrifennwch **siarter metrigau** fer, fyw ar gyfer unrhyw set fetrigau
  sy'n croesi ffin tîm, gan nodi pwrpas, diffyg-nodau, perchnogaeth, a
  chadwedd adolygu.
- Mae **ymddeoliad** yr un mor bwysig fel disgyblaeth llywodraethiant â
  mabwysiadu; tociwch yn fwriadol.
- Graddiwch drylwyredd llywodraethiant i **ganlyniad**, nid i gyfrif metrig:
  proses drymach ar gyfer metrigau cyhoeddus, gwerthusol, neu gysylltiedig
  ag iawndal.
- Gall diffiniad metrig ddrifftio'n dawel; olrheiniwch newidiadau â
  hanes gweladwy fel bod ymddiriedaeth mewn rhif yn goroesi trosiant
  staff.

## Cyfeiriadau a darllen pellach

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, gan John Ladley (strwythurau llywodraethiant y gellir
  eu cymhwyso i raglenni metrigau).
- *Measuring and Managing Performance in Organizations*, gan Robert D.
  Austin (annormaledd sefydliadol o gwmpas perchnogaeth a defnydd
  metrig).
- *Key Performance Indicators*, gan David Parmenter (perchnogaeth metrig,
  disgyblaeth diffiniad, a chadwedd adolygu).
- Arweiniad Swyddfa Atebolrwydd Llywodraeth (GAO) Unol Daleithiau ar
  fesur perfformiad a Deddf Foderneiddio GPRA: llywodraethiant metrig
  sector cyhoeddus a rheoli newid.
