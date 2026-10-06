# 4.1 Metrigau cymhlethdod cod

## Trosolwg a chymhelliant

Mae **[cymhlethdod cyclomatig](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**,
a gyflwynwyd gan Thomas J. McCabe yn 1976, yn cyfrif nifer y llwybrau
annibynnol trwy lif rheolaeth darn o god: mae pob `if`, dolen, a changen
yn ychwanegu at y cyfrif. Mae'n aros y metrig cymhlethdod cod a
ddefnyddir fwyaf eang bron hanner canrif yn ddiweddarach, ochr yn ochr â
pherthnasau fel cymhlethdod gwybyddol (sy'n pwysoli llif rheolaeth
nythog ac anodd ei ddilyn yn drymach na chyfrif llinellol gwreiddiol
McCabe) a dyfnder nythu. Mae'r metrigau hyn yn rhannu mewnwelediad
gwirioneddol, wedi'i ddilysu: mae cod â mwy o lwybrau annibynnol
trwyddo'n anos ei brofi'n llawn, yn anos rhesymu amdano, ac, mewn
degawdau o ymchwil empirig, yn fesuradwy fwy tebygol o gynnwys
diffygion.

Mae'r pwnc hwn yn trin y mewnwelediad hwnnw â pharch gwirioneddol tra
hefyd yn trin ei gyfyngiadau'r un mor ddifrifol. Mae metrigau cymhlethdod
yn mesur un briodwedd benodol o god, a gall sylfaen cod fod yn syml yn
ôl pob metrig cymhlethdod tra'n dal i fod wedi'i ddylunio'n wael, wedi'i
enwi'n wael, neu'n gysyniadol anghyson mewn ffyrdd na all yr un algorithm
cyfrif-cangen eu canfod. I'r gwrthwyneb, mae rhai problemau
cymhleth-yn-anhepgor mewn gwirionedd angen cod cymhleth i'w datrys yn
gywir, a gall tîm dan bwysau i leihau sgôr cymhlethdod gynhyrchu cod
sy'n sgorio'n dda tra'n wirioneddol anos ei ddeall, gan wasgaru cymhlethdod
hanfodol ar draws mwy o ffeiliau a haenau o anuniongyrchedd yn hytrach
na'i leihau.

I dimau mawr, mae metrigau cymhlethdod yn ennill eu lle fel offeryn
triniaeth: ffordd o ddod o hyd i'r is-set fach, ymhlith miloedd o
ffeiliau, sydd fwyaf tebygol o wobrwyo golwg agosach, nid fel dyfarniad
annibynnol ar ansawdd cod. Mae sefydliadau menter a llywodraeth sy'n
cynnal sylfeini cod rhy fawr i unrhyw unigolyn eu darllen yn llawn yn
dibynnu ar y swyddogaeth driniaeth hon i gyfeirio ymdrech ad-drefnu ac
adolygu prin lle bydd yn gwneud y llesiant mwyaf.

## Egwyddorion allweddol

- **Mae metrigau cymhlethdod yn rhagfynegi anhawster profi a diffyg;
  nid ydynt yn mesur ansawdd yn uniongyrchol.** Triniwch nhw fel un
  mewnbwn, nid dyfarniad.
- **Mae sgôr cymhlethdod yn agored i dwyllo trwy dywyllu, nid dim ond
  trwy symleiddio gwirioneddol.** Gall hollti cymhlethdod ar draws mwy o
  ffeiliau ostwng y sgôr heb wirioneddol wneud y cod yn haws ei ddeall.
- **Mae rhywfaint o gymhlethdod yn hanfodol, nid yn ddamweiniol.** Gall
  problem wirioneddol anodd angen cod gwirioneddol gymhleth; y nod yw
  lleihau cymhlethdod damweiniol, nid dileu pob cymhlethdod yn
  ddiwahân.
- **Defnyddiwch fetrigau cymhlethdod ar gyfer triniaeth, nid fel cerdyn
  sgorio unigol neu dîm.** Maent yn pwyntio at ble i edrych, nid at bwy
  i'w feio.
- **Mae tuedd ac allanolion yn bwysicach nag unrhyw drothwy absolwt.**
  Mae tuedd gynyddol neu allanolyn eithafol yn fwy gweithredadwy na
  chyfartaledd tîm-cyfan sengl.

## Argymhellion

### Defnyddiwch fetrigau cymhlethdod i drefnu ymdrech adolygu ac ad-drefnu

Rhedwch ddadansoddiad cymhlethdod ar draws y sylfaen cod a defnyddiwch
y canlyniadau i flaenoriaethu ble byddai adolygiad dynol agosach neu
fuddsoddiad ad-drefnu'n talu ffordd fwyaf: ffwythiannau neu ffeiliau'n
sgorio ymhell uwchlaw ystod nodweddiadol y sylfaen cod ei hun yw'r
mannau gwerth-uchaf i edrych arnynt gyntaf. Y defnydd triniaeth hwn, dod
o hyd i ble i edrych, yw cymhwysiad mwyaf amddiffynadwy, gwerthfawr
metrigau cymhlethdod, yn llawer mwy felly na'u defnyddio fel giât
pasio/methu absolwt.

### Gosodwch drothwyon yn gymharol i'ch sylfaen cod eich hun, nid rhif cyffredinol

Gall trothwyon cymhlethdod absolwt wedi'u benthyca'n ddi-feirniadol o
gonfensiwn diwydiant (mae sgôr cymhlethdod o ddeg yn rheol bawd a
ddyfynnir yn gyffredin) fod naill ai'n rhy oddefol neu'n rhy llym yn
dibynnu ar eich parth: gall gan barsiwr neu beiriant rheolau
gymhlethdod llinell-sylfaen uwch yn ddilys na gwasanaeth CRUD
nodweddiadol. Calibrwch eich trothwyon eich hun yn erbyn dosraniad
gwirioneddol eich sylfaen cod, a thriniwch dorri trothwy fel anogaeth i
edrych yn agosach, nid methiant adeiladu awtomatig, oni bai bod eich
tîm wedi dewis y polisi llymach hwnnw'n fwriadol â llawn ymwybyddiaeth
o'i gyfnewidiadau.

### Gwyliwch am dwyllo trwy ddadelfennu heb symleiddio gwirioneddol

Y ffordd fwyaf cyffredin y mae sgoriau cymhlethdod yn cael eu twyllo yw
patrwm amnewid pwnc 1.2 wedi'i gymhwyso i'r metrig penodol hwn:
hollti un ffwythiant gwirioneddol gymhleth yn nifer o ffwythiannau
llai sy'n sgorio'n dda yn unigol, tra bo'r system gyffredinol yn aros
yr un mor anodd ei deall, neu weithiau'n dod yn anos, oherwydd bod y
rhesymeg bellach wedi'i gwasgaru ar draws mwy o ffeiliau â mwy o
anuniongyrchedd rhyngddynt. Parejwch fetrigau cymhlethdod ag adolygiad
ansoddol o a wnaeth dadelfeniad wirioneddol egluro'r cod, neu a wnaeth
ddim ond symud y cymhlethdod i rywle na allai'r metrig ei weld
mwyach.

### Gwahaniaethwch gymhlethdod hanfodol o gymhlethdod damweiniol cyn ymateb

Cyn trin sgôr cymhlethdod uchel fel problem i'w thrwsio, gofynnwch a
yw'r broblem sylfaenol mewn gwirionedd angen cymaint â hynny o lwybrau
annibynnol, mae gan resymeg cyfrifo cod treth lawer o ganghennau'n
ddilys, er enghraifft, neu a yw'r cymhlethdod yn dod o achosion
osgoiadwy: amodolion wedi'u nythu'n ddwfn y gellid eu gwastatáu,
rhesymeg ddyblyg y gellid ei chyfuno, neu ffiniau cyfrifoldeb aneglur y
gellid eu hail-lunio. Dim ond yr ail gategori sy'n broblem ansawdd
wirioneddol y dylai'r metrig hwn eich gyrru i'w thrwsio.

### Olrheiniwch duedd ac allanolion, nid dim ond cyfartaledd ciplun

Yn anaml y mae sgôr cymhlethdod cyfartalog sylfaen-cod-gyfan yn symud
ychydig yn weithredadwy ar ei ben ei hun; mae cymhlethdod ffeil benodol
yn codi'n sydyn dros sawl newid, neu nifer fach o allanolion eithafol
mewn sylfaen cod sydd fel arall yn ymddwyn yn dda, yn signalau llawer
mwy defnyddiol. Olrheiniwch y duedd dros amser a chynffon yr
allanolion fel ei gilydd, a defnyddiwch nhw i sbarduno ymchwiliad
penodol, wedi'i dargedu yn hytrach na menter lleihau-cymhlethdod
eang, heb ffocws.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Trothwy cyffredinol absolwt | Syml, cyson, hawdd ei awtomeiddio | Yn anwybyddu gwahaniaethau parth dilys; gellir ei dwyllo trwy ddadelfennu |
| Trothwy cymharol-sylfaen-cod | Wedi'i galibro'n well i'r cyd-destun gwirioneddol | Angen mwy o osod ac ailgalibro cyfnodol |
| Cymhlethdod fel giât adeiladu awtomataidd | Yn gorfodi cysondeb heb faich adolygu dynol | Gall rwystro cod cymhleth ond wedi'i ddylunio'n dda yn ddilys, neu wobrwyo dadelfennu wedi'i dywyllu |
| Cymhlethdod fel signal triniaeth ar gyfer adolygiad dynol | Yn dal problemau ansawdd gwirioneddol y byddai dadelfennu ar ei ben ei hun yn eu colli | Angen mwy o amser adolygu dynol na giât gwbl awtomataidd |

Y tensiwn canolog yw **awtomeiddio yn erbyn barn**. Mae giât cymhlethdod
gwbl awtomataidd yn rhad i'w orfodi ac yn gyson, ond gall rwystro cod
cymhleth, wedi'i ddylunio'n dda yn ddilys a gwobrwyo dadelfennu
arwynebol sy'n twyllo'r sgôr heb symleiddio dim yn wirioneddol.
Datryswch y tensiwn trwy ddefnyddio dadansoddiad cymhlethdod
awtomataidd i ddatgelu ymgeiswyr ar gyfer adolygiad, a chadw'r farn
wirioneddol, a yw'r cymhlethdod hwn yn hanfodol neu'n ddamweiniol, a
wnaeth yr ad-drefniad hwn wirioneddol egluro neu ddim ond ail-leoli'r
cymhlethdod, ar gyfer adolygydd dynol yn hytrach na giât awtomataidd
galed ar ei ben ei hun.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A yw ein trothwyon cymhlethdod wedi'u calibro i ddosraniad
   gwirioneddol ein sylfaen cod ein hun, neu wedi'u benthyca'n
   ddi-feirniadol o gonfensiwn diwydiant generig?** Tynnwch ddosbarthiad
   cymhlethdod gwirioneddol eich sylfaen cod a gwiriwch a yw eich
   trothwyon cyfredol yn gwneud synnwyr yn ei erbyn, yn hytrach na thybio
   bod rhif a ddyfynnir yn gyffredin yn berthnasol yn gyffredinol i'ch
   parth.

2. **A ydym erioed wedi gweld ffwythiant wedi'i hollti'n nifer o rai
   llai heb i'r cod canlyniadol wirioneddol ddod yn haws ei ddeall?**
   Dyma'r arwydd cliriaf o'r patrwm twyllo-dadelfennu y mae'r pwnc hwn
   yn rhybuddio yn ei erbyn. Edrychwch ar ad-drefniad diweddar wedi'i
   ysgogi'n bennaf gan sgôr cymhlethdod ac aseswch yn onest a wellodd
   ddealladwyedd gwirioneddol.

3. **Ble yn ein sylfaen cod y mae cymhlethdod yn hanfodol i'r broblem, a
   ble mae'n ddamweiniol a thrwsiadwy?** Ewch trwy eich allanolion
   cymhlethdod-uchaf a'u didoli i'r ddau gategori hyn yn benodol, gan
   mai dim ond yr ail gategori sy'n cynrychioli problem ansawdd
   wirioneddol, weithredadwy.

4. **A ydym yn defnyddio metrigau cymhlethdod i drefnu ymdrech adolygu,
   neu fel giât awtomataidd galed heb unrhyw farn ddynol yn gysylltiedig?**
   Trafodwch a yw eich dull gorfodi cyfredol yn gadael lle i'r
   gwahaniaeth hanfodol-yn-erbyn-damweiniol y mae'r pwnc hwn yn ei
   argymell, neu a yw'n trin pob toriad yn union yr un fath waeth beth
   fo'r cyd-destun.

5. **A yw sgôr cymhlethdod erioed wedi cael ei ddefnyddio, hyd yn oed
   yn anffurfiol, i farnu ansawdd gwaith peiriannydd unigol?** Mae hyn
   yn peryglu'r un trap gwerthuso-unigol y mae pwnc 3.4 yn rhybuddio
   yn ei erbyn ar gyfer metrigau gweithgarwch, wedi'i gymhwyso yma i
   fetrigau cod yn lle hynny, ac mae'n gwahodd yr un ymateb twyllo.

6. **Sut olwg sydd ar ein tuedd cymhlethdod dros y flwyddyn ddiwethaf ar
   gyfer ein ffeiliau mwyaf dyngedfennol, mwyaf aml eu newid?** Cyfunwch
   hyn â'r dadansoddiad trosiant a man-poeth o bwnc 4.3, gan fod ffeil
   sy'n gymhleth iawn ac yn cael ei newid yn aml yn haeddu sylw ymhell
   cyn un sy'n gymhleth ond anaml yn cael ei chyffwrdd.

## Golwg sector

**Cwmni newydd.** Mae metrigau cymhlethdod fel arfer yn llai brys ar y
raddfa hon; mae maint sylfaen cod yn ddigon bach fel bod cyfarwydd-deb
anffurfiol yn aml yn disodli mesuriad ffurfiol. Yr arferiad sy'n werth
ei fabwysiadu'n gynnar yw rhedeg sgan cymhlethdod yn achlysurol i ddal
ffeil benodol yn dod yn anrheoladwy'n dawel cyn i'r tîm dyfu'n rhy fawr
i sylwi'n anffurfiol.

**Busnes bach.** Mae'r rhan fwyaf o offer dadansoddiad-statig modern yn
adrodd metrigau cymhlethdod fel rhan o osodiad leinio ehangach, rhad
neu am ddim; defnyddiwch yr allbwn fel signal triniaeth cyfnodol yn
hytrach na buddsoddi mewn offeryno pwrpasol. Canolbwyntiwch sylw ar eich
ffeiliau mwyaf aml eu haddasu yn gyntaf.

**Menter.** Mae metrigau cymhlethdod ar raddfa fwyaf gwerthfawr wedi'u
cyfuno â data trosiant (pwnc 4.3) i flaenoriaethu buddsoddiad
ad-drefnu ar draws sylfaen cod rhy fawr i unrhyw unigolyn ei harolygu â
llaw. Calibrwch drothwyon fesul gwasanaeth neu barth yn hytrach na
chymhwyso un rhif ar draws y sefydliad, gan fod cymhlethdod dilys yn
amrywio'n sylweddol ar draws mathau gwahanol o systemau.

**Llywodraeth.** Mae systemau llywodraeth hirhoedlog yn aml yn cronni
cymhlethdod yn raddol dros flynyddoedd neu ddegawdau o newidiadau
gofynion cynyddrannol, a gall archwiliad cymhlethdod fod yn offeryn
darbwyllol, concrid ar gyfer cyfiawnhau buddsoddiad moderneiddio neu
ad-drefnu i randdeiliaid a allai fel arall weld y system fel un sy'n
syml "gweithio" ac felly ddim yn werth buddsoddi ynddi.

## Enghreifftiau

**Menter.** Rhedodd cwmni prosesu taliadau archwiliad cymhlethdod
sylfaen-cod-gyfan am y tro cyntaf a chanfod un ffwythiant dilysu-
trafodiad â sgôr cymhlethdod cyclomatig mwy na deg gwaith canolrif y
sylfaen cod. Canfu ymchwiliad fod y cymhlethdod bron yn gyfan gwbl yn
ddamweiniol: roedd blynyddoedd o drin achosion-arbennig wedi'u
hychwanegu'n gynyddol ar gyfer darparwyr talu penodol wedi cronni'n
amodolion wedi'u nythu'n ddwfn y gellid eu hail-strwythuro'n batrwm
strategaeth glanach sy'n gwahanu rhesymeg penodol-i-ddarparwr. Gostyngodd
yr ad-drefniad, wedi'i flaenoriaethu'n uniongyrchol oherwydd bod yr
archwiliad cymhlethdod wedi'i nodi fel y targed gwerth-uchaf sengl yn y
sylfaen cod, sgôr cymhlethdod y ffwythiant dros 80% ac, yn bwysicach,
gostyngodd y gyfradd diffygion yn y llwybr cod penodol hwnnw'n
fesuradwy dros y ddau chwarter canlynol.

**Llywodraeth.** Sgoriodd peiriant cyfrifo-budd-daliadau degawdau oed
awdurdod treth yn hynod uchel ar fetrigau cymhlethdod ar draws bron pob
ffwythiant, gan ysgogi tybiaeth gychwynnol bod angen ailysgrifennu
o'r gwaelod ar y system gyfan. Canfu adolygiad agosach, ffwythiant-
wrth-ffwythiant, oedd yn gwahaniaethu cymhlethdod hanfodol o rai
damweiniol, fod y rhan fwyaf o'r cymhlethdod mewn gwirionedd yn
adlewyrchu'r rheolau cyfreithiol sylfaenol, a oedd wir yn cael cymaint
â hynny o ganghennau dilys ac achosion arbennig wedi'u mynnu gan
statud, tra bo is-set lai'n dod o ddyblygiad osgoiadwy ar draws
llwybrau cyfrifo tebyg. Targedodd y tîm dim ond yr is-set cymhlethdod-
damweiniol ar gyfer ad-drefnu, gan osgoi ailysgrifennu llawn, drud, a
pheryglus tra'n dal i wella ardaloedd mwyaf gwirioneddol broblematig y
system yn ystyrlon.

## Achos busnes: cymhellion, ROI, a TCO

Buddsoddiad ad-drefnu wedi'i dargedu, gwerth-uchel yw'r enillion ar
ddefnyddio metrigau cymhlethdod yn dda: mae'r enghraifft cwmni taliadau
uchod yn dangos un trwsiad sengl, wedi'i dargedu'n dda, wedi'i nodi
trwy ddadansoddiad cymhlethdod, a leihaodd ddiffygion yn fesuradwy yn
union yn y llwybr cod risg-uchaf, am ffracsiwn o'r gost y byddai
menter ad-drefnu eang, heb ei dargedu ei mynnu.

Mae cost cyfanswm perchnogaeth yn isel: mae'r rhan fwyaf o gadwyni offer
datblygu modern yn cyfrifo metrigau cymhlethdod yn awtomatig fel rhan
o ddadansoddiad statig (pwnc 4.4), a'r buddsoddiad gwirioneddol yw'r
amser barn dynol i ddehongli canlyniadau'n gywir, gwahaniaethu
cymhlethdod hanfodol o rai damweiniol a dal twyllo dadelfennu, yn
hytrach nag unrhyw gost offeryno newydd sylweddol.

## Gwrth-batrymau a risgiau

- **Trin sgôr cymhlethdod fel dyfarniad ansawdd uniongyrchol:** mae'n
  mesur un briodwedd benodol, nid ansawdd cod cyffredinol.
- **Hollti ffwythiant i dwyllo'r sgôr heb symleiddio gwirioneddol:** y
  patrwm twyllo-dadelfennu y mae'r pwnc hwn yn ei enwi'n benodol.
- **Cymhwyso trothwy cyffredinol heb galibro i'ch sylfaen cod eich hun:**
  yn cynhyrchu gorfodaeth naill ai'n rhy oddefol neu'n rhy llym yn
  dibynnu ar y parth.
- **Defnyddio metrigau cymhlethdod i werthuso peirianwyr yn unigol:** yn
  gwahodd twyllo ac yn camgymhwyso metrig a fwriadwyd ar gyfer
  triniaeth, nid barn.
- **Trin pob cymhlethdod fel un yr un mor drwsiadwy:** nid yw
  cymhlethdod hanfodol o broblem wirioneddol anodd yn ddiffyg i'w
  ddileu.
- **Anwybyddu tuedd ac allanolion o blaid cyfartaledd sylfaen-cod-gyfan
  fflat:** yn colli'r signal mwyaf gweithredadwy y mae'r teulu metrig
  hwn yn ei ddarparu.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Ni fesurir cymhlethdod, neu fe'i mesurir â
  throthwy cyffredinol generig, heb ei archwilio, wedi'i gymhwyso'n
  ddi-feirniadol.
- **Lefel 2, Datblygu:** Casglir metrigau cymhlethdod ond yn anaml y
  gweithredir arnynt, ac ni wneir gwahaniaeth rhwng cymhlethdod
  hanfodol a damweiniol.
- **Lefel 3, Safoni:** Calibrir trothwyon i ddosbarthiad y sylfaen cod
  ei hun, ac mae metrigau cymhlethdod yn gyrru triniaeth adolygu ac
  ad-drefnu'n gyson ar draws y sefydliad.
- **Lefel 4, Rheoli:** Monitro tuedd ac allanolion cymhlethdod yn
  weithredol a'u cyfuno â data trosiant (pwnc 4.3) i flaenoriaethu
  buddsoddiad ad-drefnu; gwylio'n weithredol am dwyllo dadelfennu.
- **Lefel 5, Cerddorfaru:** Gall y sefydliad bwyntio at welliannau
  cyfradd-diffygion penodol, mesuradwy wedi'u holrhain yn uniongyrchol
  at fuddsoddiad ad-drefnu wedi'i lywio gan gymhlethdod, ac mae data
  cymhlethdod yn fewnbwn rheolaidd, ymddiriedol i benderfyniadau
  buddsoddi peirianneg.

## Syniadau ar gyfer trafodaeth

1. Beth yw ein ffwythiant neu ffeil fwyaf cymhleth sengl, ac a yw ei chymhlethdod yn hanfodol neu'n ddamweiniol?
2. A ydym erioed wedi twyllo sgôr cymhlethdod trwy ddadelfennu heb symleiddio gwirioneddol?
3. A yw ein trothwyon wedi'u calibro i'n sylfaen cod ein hun, neu wedi'u benthyca'n ddi-feirniadol?
4. Ble mae cymhlethdod uchel yn gorgyffwrdd â throsiant uchel yn ein sylfaen cod ar hyn o bryd?
5. A yw data cymhlethdod erioed wedi llywio penderfyniad buddsoddi ad-drefnu, neu a yw'n eistedd heb ei ddefnyddio?

## Prif gasgliadau

- Mae metrigau cymhlethdod fel **cymhlethdod cyclomatig** yn rhagfynegi
  anhawster profi a diffyg; nid ydynt yn mesur ansawdd cod cyffredinol
  yn uniongyrchol.
- Gwahaniaethwch **gymhlethdod hanfodol** (o broblem wirioneddol anodd)
  o **gymhlethdod damweiniol** (osgoiadwy trwy ddyluniad gwell) cyn
  ymateb i sgôr uchel.
- Gwyliwch am **dwyllo dadelfennu**: hollti cod i ostwng sgôr heb
  symleiddio dim yn wirioneddol.
- Defnyddiwch fetrigau cymhlethdod ar gyfer **triniaeth**, gan gyfeirio
  ymdrech adolygu ac ad-drefnu dynol, nid fel cerdyn sgorio unigol na
  giât awtomataidd anhyblyg.
- Calibrwch drothwyon i **ddosbarthiad eich sylfaen cod eich hun**, ac
  olrheiniwch **duedd ac allanolion**, nid dim ond cyfartaledd fflat.

## Cyfeiriadau a darllen pellach

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on
  Software Engineering* (1976): y papur cymhlethdod cyclomatig
  gwreiddiol.
- *Code Complete*, gan Steve McConnell (canllawiau ymarferol ar reoli
  cymhlethdod mewn adeiladu meddalwedd).
- *Working Effectively with Legacy Code*, gan Michael Feathers
  (technegau ar gyfer lleihau cymhlethdod yn ddiogel mewn cod presennol,
  anodd ei newid).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring
  Understandability" (SonarSource, 2018): y metrig cymhlethdod
  gwybyddol a'i wahaniaeth o gymhlethdod cyclomatig.
