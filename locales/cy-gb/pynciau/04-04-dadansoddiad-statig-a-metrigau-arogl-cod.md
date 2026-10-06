# 4.4 Dadansoddiad statig a metrigau arogl cod

## Trosolwg a chymhelliant

Mae offer **[dadansoddiad statig](https://en.wikipedia.org/wiki/Static_program_analysis)**
yn sganio cod ffynhonnell heb ei weithredu, gan fflagio patrymau y
gwyddys eu bod yn cydberthyn â diffygion, gwendidau diogelwch, neu
broblemau cynaliadwyedd: cod anghyraeddadwy, adnoddau heb eu cau,
gorfodiadau math amheus, rhesymeg ddyblyg, a'r categori ehangach o
**arogleuon cod**, patrymau strwythurol nad ydynt o reidrwydd yn
wallau ond sy'n tueddu i wneud cod yn anos ei ddeall, ei brofi, neu ei
newid yn ddiogel. Dadansoddiad statig yw'r haen awtomataidd, barhaus o
dan y metrigau mwy targededig ym mhynciau eraill y rhan hon, yn rhedeg
ar bob ymrwymiad ac yn datgelu materion ar y foment y'u cyflwynir yn
hytrach nag aros am archwiliad cyfnodol.

Pryder canolog y pwnc hwn yw'r bwlch rhwng yr hyn y mae offer
dadansoddiad statig yn ei adrodd a'r hyn sydd mewn gwirionedd yn bwysig.
Gall offeryn fflagio miloedd o ganfyddiadau ar draws sylfaen cod fawr,
ac mae nifer y canfyddiadau ar ei ben ei hun yn fetrig gwael, gan ei
fod yn cymysgu ffafriaethau arddull dibwys â pherygl gwirioneddol,
difrifol, a gellir ei ostwng trwy atal cystal â thrwy drwsiadau
gwirioneddol. Daw gwerth dadansoddiad statig nid o'r cyfrif canfyddiad
crai ond o ba mor dda y mae sefydliad yn didoli difrifoldeb, yn atal
ôl-gwympiad, ac yn gwrthsefyll y demtasiwn i drin barn yr offeryn fel
disodliad ar gyfer adolygiad dynol yn hytrach nag ategiad iddo.

I dimau mawr, dadansoddiad statig yw'r unig ffordd ymarferol o orfodi
llinell sylfaen o ansawdd cod a hylendid diogelwch ar draws sylfaen cod
yn fwy nag y gall unrhyw dîm ei hadolygu â llaw yn llawn. Mae
sefydliadau menter a llywodraeth, sy'n aml yn wynebu gofynion
cydymffurfio o gwmpas arferion codio diogel, yn dibynnu ar ddadansoddiad
statig fel tystiolaeth ddogfennedig, archwiliadwy bod lefel llinell
sylfaen o graffu wedi'i chymhwyso'n gyson, nid dim ond pan fydd
adolygydd dynol yn digwydd sylwi ar broblem.

## Egwyddorion allweddol

- **Mae cyfrif canfyddiad crai'n fetrig gwael ar ei ben ei hun.** Mae'n
  cymysgu materion dibwys a difrifol, a gellir ei dwyllo trwy atal yn
  hytrach na thrwsiadau gwirioneddol.
- **Mae didoli difrifoldeb yn bwysicach na chyfaint.** Mae nifer fach o
  ganfyddiadau critigol yn haeddu mwy o sylw na nifer fawr o rai
  dibwys.
- **Mae dadansoddiad statig yn ategu adolygiad dynol; nid yw'n ei
  ddisodli.** Mae offer yn dal patrymau; nid ydynt yn deall bwriad na
  chyd-destun busnes.
- **Mae tuedd "materion newydd wedi'u cyflwyno" yn fwy gweithredadwy na
  chyfrif cronfa-waith gyfan.** Mae'n dweud wrthych a yw arfer cyfredol
  yn gwella neu'n dirywio.
- **Mae positifau ffug yn erydu ymddiriedaeth yn yr offeryn.** Mae
  cyfradd positif-ffug heb ei rheoli'n arwain timau i anwybyddu
  canfyddiadau'n gyfan gwbl, gan gynnwys y rhai gwirioneddol.

## Argymhellion

### Olrheiniwch ganfyddiadau wedi'u pwysoli-yn-ôl-difrifoldeb, nid gyfrif crai

Ffurfweddwch eich offeryno dadansoddiad statig i ddosbarthu
canfyddiadau yn ôl difrifoldeb (critigol, uchel, canolig, isel, neu
raddfa gyfatebol), ac olrheiniwch duedd wedi'i phwysoli-yn-ôl-difrifoldeb
yn hytrach na chyfrif cyfanswm fflat. Mae sylfaen cod â sero canfyddiadau
critigol a phum cant o awgrymiadau arddull difrifoldeb-isel mewn cyflwr
gwahanol iawn i un â hanner cant o ganfyddiadau critigol a dim materion
arddull o gwbl, ac mae cyfrif crai'n trin y rhain fel rhai bras-gyfatebol
pan nad ydynt.

### Giatiwch ar ganfyddiadau newydd wedi'u cyflwyno, nid ar y gronfa-waith hanesyddol gyfan

Mae'r rhan fwyaf o sylfeini cod sefydledig yn cario cronfa-waith
gwaddol o ganfyddiadau sy'n rhagddyddio arfer cyfredol ac a fyddai'n
ormodol o ddrud i'w trwsio i gyd ar unwaith. Yn hytrach na rhwystro
pob gwaith tan y clirir y gronfa-waith gyfan, giatiwch CI ar a yw newid
penodol yn cyflwyno canfyddiadau newydd uwchlaw trothwy difrifoldeb y
cytunwyd arno, gan adael i'r gronfa-waith grebachu'n raddol trwy gynnal
a chadw arferol tra'n atal cronni pellach. Mae'r gwahaniaeth hwn yn
adlewyrchu argymhelliad llawr-gorchudd pwnc 4.2: gwarchod yn erbyn
ôl-gwympiad yn hytrach na mynnu trwsiad afrealistig, ar unwaith.

### Rheolwch y gyfradd positif-ffug yn weithredol

Adolygwch sampl o ganfyddiadau'n gyfnodol, yn enwedig unrhyw gategori â
chyfaint uchel, a gwiriwch faint sy'n bositifau ffug gwirioneddol,
achosion lle mae'r offeryn wedi fflagio patrwm nad yw mewn gwirionedd
yn broblematig yn ei gyd-destun. Cymhwyswch ffurfweddiad rheol i
atal categorïau rheol gwirioneddol swnllyd, gwerth-isel yn benodol, yn
hytrach na gadael i dimau ddatblygu arferiad o anwybyddu allbwn yr
offeryn yn gyfan gwbl oherwydd bod gormod ohono'n sŵn. Cyfradd
positif-ffug uchel, heb ei rheoli yw'r ffordd gyflymaf sengl o
ddinistrio credadwyedd rhaglen dadansoddiad statig.

### Defnyddiwch ganfyddiadau dadansoddiad statig fel anogaeth ar gyfer adolygiad, nid dyfarniad awtomatig

Nid yw hyd yn oed canfyddiad dilys, nad yw'n bositif ffug bob amser yn
mynnu trwsiad awtomatig, gorfodol; mae rhai patrymau wedi'u fflagio'n
dderbyniol o gofio cyd-destun penodol na all offeryn ei weld. Adeiladwch
broses ysgafn i berson adolygu a naill ai drwsio neu hepgor canfyddiad
yn benodol, yn weladwy gyda rheswm wedi'i ddogfennu, yn hytrach na naill
ai gorfodi pob canfyddiad yn ddall fel un gorfodol neu ganiatáu atal
tawel, heb ei ddogfennu sy'n erydu gwerth yr offeryn dros amser.

### Cyfunwch ddadansoddiad statig â'r metrigau ansawdd-cod eraill yn y rhan hon

Mae canfyddiadau dadansoddiad statig, sgoriau cymhlethdod (pwnc 4.1),
a data man-poeth (pwnc 4.3) yn dystiolaeth gyflenwol, nid metrigau
cystadleuol. Mae ffeil â chrynhoad uchel o ganfyddiadau dadansoddiad
statig heb eu datrys sydd hefyd yn fan poeth trosiant-cymhlethdod yn
ymgeisydd arbennig o gryf ar gyfer sylw wedi'i flaenoriaethu, gan fod
sawl signal annibynnol yn cydgyfeirio ar yr un casgliad.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Cyfrif canfyddiad crai fel y metrig | Syml i'w adrodd | Yn cymysgu materion dibwys a difrifol; yn hawdd ei dwyllo trwy atal |
| Tuedd wedi'i phwysoli-yn-ôl-difrifoldeb | Yn adlewyrchu perygl gwirioneddol yn fwy cywir | Angen cynnal a chadw dosbarthiad-difrifoldeb parhaus |
| Giatio ar y gronfa-waith hanesyddol gyfan | Yn mwyafu glendid cod terfynol | Yn aml yn anymarferol ar gyfer sylfeini cod sefydledig; gall atal pob gwaith |
| Giatio ar ganfyddiadau newydd yn unig | Ymarferol, yn atal ôl-gwympiad, yn gadael i'r gronfa-waith grebachu'n raddol | Mae materion gwaddol yn parhau'n hirach heb gynllun unioni bwriadol |

Y tensiwn canolog yw **trylwyredd yn erbyn ymarferoldeb**. Mae polisi
dadansoddiad statig sy'n mynnu bod y gronfa-waith hanesyddol gyfan yn
cael ei datrys cyn i unrhyw waith newydd fynd rhagddo'n drylwyr ond fel
arfer yn anymarferol ar gyfer unrhyw sylfaen cod ag unrhyw hanes
gwirioneddol, ac mae timau o dan y pwysau hwnnw'n tueddu i atal
canfyddiadau'n gyfan gwbl yn hytrach na'u trwsio'n wirioneddol.
Datryswch y tensiwn trwy giatio'n llym ar ganfyddiadau newydd tra'n
rhedeg ymdrech unioni ar wahân, wedi'i chamu'n fwriadol yn erbyn y
gronfa-waith waddol, wedi'i blaenoriaethu gan ddefnyddio'r technegau
difrifoldeb a chroesgyfeirio y mae'r pwnc hwn a phwnc 4.3 yn eu
hargymell.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A ydym yn olrhain tuedd wedi'i phwysoli-yn-ôl-difrifoldeb, neu dim
   ond gyfrif canfyddiad cyfanswm crai?** Tynnwch eich dangosfwrdd
   gwirioneddol a gwiriwch; mae cyfrif crai'n gyffredin yn ddiofyn mewn
   llawer o offer ac yn aml angen ffurfweddiad bwriadol i ddatgelu
   difrifoldeb yn briodol yn lle hynny.

2. **Beth yw ein cronfa-waith waddol gyfredol o ganfyddiadau heb eu
   datrys, ac a oes gennym gynllun bwriadol, wedi'i gamu i'w lleihau,
   neu a yw'n dim ond cronni'n ddiddiwedd?** Mae cronfa-waith heb ei
   thrin, yn tyfu'n dawel yn gyffredin ac yn werth ei henwi'n onest yn
   hytrach na'i gadael heb ei harchwilio.

3. **Beth yw ein cyfradd positif-ffug amcangyfrifedig ar gyfer ein
   categorïau canfyddiad cyfaint-uchaf, ac a ydym wedi cymhwyso
   ffurfweddiad rheol mewn ymateb?** Os na wnaethoch erioed wirio hyn,
   samplwch swp o ganfyddiadau o'ch categori swnllyd-uchaf ac aseswch yn
   onest faint sy'n wirioneddol weithredadwy.

4. **A yw peirianwyr ar ein tîm yn ymddiried yng nghanfyddiadau
   dadansoddiad statig, neu a ydynt wedi dysgu eu diystyru oherwydd bod
   gormod o'r allbwn yn sŵn?** Dyma gwestiwn gwiriad-perfedd uniongyrchol,
   onest sy'n werth ei ofyn i'r tîm, gan nad yw offeryn sy'n cael ei
   anwybyddu'n darparu gwerth gwirioneddol waeth beth fo'i alluogrwydd
   damcaniaethol.

5. **Sut ydym yn trin canfyddiad dilys ar hyn o bryd y mae tîm yn credu
   y dylid ei hepgor o gofio cyd-destun penodol?** Gwiriwch a yw eich
   proses yn gwneud hyn yn benderfyniad gweladwy, wedi'i ddogfennu, neu a
   yw'n digwydd trwy atal tawel, heb ei ddogfennu sy'n erydu signal yr
   offeryn dros amser.

6. **Ble mae canfyddiadau dadansoddiad statig, sgoriau cymhlethdod, a
   data man-poeth yn cydgyfeirio ar yr un ffeil neu fodiwl?**
   Croesgyfeiriwch y tri signal hyn yn benodol; mae cydgyfeiriant ar
   draws sawl metrig annibynnol yn signal blaenoriaethu cryfach nag
   unrhyw un ar ei ben ei hun.

## Golwg sector

**Cwmni newydd.** Mae offeryn dadansoddiad statig ysgafn, am ddim wedi'i
integreiddio i CI o'r dechrau'n yswiriant rhad ac yn dal materion
gwirioneddol yn gynnar, cyn i gronfa-waith waddol gael unrhyw gyfle i
gronni. Cadwch y set reol wedi'i ffocysu ar gategorïau gwirioneddol
werth-uchel, swn-isel yn hytrach na galluogi pob rheol sydd ar gael ar
unwaith.

**Busnes bach.** Mae'r rhan fwyaf o ecosystemau iaith modern yn cynnwys
offeryno dadansoddiad statig galluog, am ddim; mae ei alluogi yn CI â
set reol ddiofyn synhwyrol angen ychydig o fuddsoddiad. Canolbwyntiwch
ar giatio canfyddiadau newydd yn hytrach na cheisio datrys unrhyw gronfa-
waith bresennol ar unwaith.

**Menter.** Mae rheoli cyfradd positif-ffug a didoli difrifoldeb yn
fwriadol yn dod yn hanfodol ar y raddfa hon, gan y bydd offeryn heb ei
diwnio'n dda yn cynhyrchu sŵn gormodol ar draws degau o dimau'n cael
ei anwybyddu ar draws y sefydliad. Buddsoddwch mewn perchennog
pwrpasol ar gyfer ffurfweddiad offeryno dadansoddiad statig ei hun, gan
drin diwnio rheol fel disgyblaeth barhaus yn hytrach na thasg osod
unwaith.

**Llywodraeth.** Mae canfyddiadau dadansoddiad statig, yn enwedig rhai
sy'n ymwneud â diogelwch, yn aml yn uniongyrchol berthnasol i ofynion
cydymffurfio ac archwilio. Cynhaliwch broses ddogfennedig, archwiliadwy
ar gyfer sut mae canfyddiadau'n cael eu didoli, eu trwsio, neu eu
hepgor yn ffurfiol â chyfiawnhad wedi'i gofnodi, gan mai'r ddogfennaeth
hon ei hun yw'n aml yr hyn y bydd archwilydd allanol eisiau ei weld.

## Enghreifftiau

**Menter.** Roedd dangosfwrdd dadansoddiad statig cwmni meddalwedd wedi
cronni dros ddeugain mil o ganfyddiadau heb eu datrys ar draws ei
sylfaen cod ar ôl sawl blwyddyn heb ddidoli wedi'i bwysoli-yn-ôl-
difrifoldeb, rhif mor fawr fel bod peirianwyr wedi stopio edrych ar y
dangosfwrdd o gwbl i raddau helaeth. Dosbarthodd dull diwygiedig
ganfyddiadau yn ôl difrifoldeb, canfod bod llai na dau gant yn
wirioneddol critigol, a giatiodd CI yn benodol ar ganfyddiadau critigol
a difrifoldeb-uchel newydd tra'n gadael i'r gronfa-waith difrifoldeb-
isel grebachu'n raddol trwy gynnal a chadw cod arferol. O fewn chwe mis,
roedd canfyddiadau critigol wedi gostwng i ffigurau sengl, ac, yn
bwysicach, dangosodd data arolwg peirianwyr ymddiriedaeth adnewyddedig
yn allbwn yr offeryn gan ei fod bellach yn datgelu signal rheoladwy,
gwirioneddol weithredadwy yn hytrach na chronfa-waith lethol, wedi'i
hanwybyddu.

**Llywodraeth.** Roedd polisi diogelwch cadwyn-gyflenwi meddalwedd
asiantaeth amddiffyn yn mynnu sganio dadansoddiad statig â sero
canfyddiadau heb eu datrys cyn unrhyw ryddhad, polisi a oedd, yn
ymarferol, wedi arwain timau datblygu i atal niferoedd mawr o
ganfyddiadau, gan gynnwys rhai materion diogelwch gwirioneddol, dim ond
i fodloni terfynau amser rhyddhau o dan giât popeth-neu-ddim afrealistig.
Roedd polisi diwygiedig yn mynnu sero canfyddiadau critigol neu
ddifrifoldeb-uchel newydd a gyflwynwyd gan unrhyw ryddhad penodol,
ynghyd â chynllun ac amserlen unioni wedi'u dogfennu, eu holrhain ar
gyfer y gronfa-waith waddol, wedi'u hadolygu'n chwarterol gan fwrdd
llywodraethiant diogelwch. Adferodd y dull ymarferol, wedi'i gamu hwn graffu
diogelwch gwirioneddol i god newydd a gwneud cynnydd gwirioneddol,
mesuradwy yn erbyn y gronfa-waith waddol dros ddeunaw mis, yn wahanol
i'r polisi blaenorol anymarferol a oedd wedi cynhyrchu atal yn bennaf
yn hytrach na thrwsiadau gwirioneddol.

## Achos busnes: cymhellion, ROI, a TCO

Dal diffygion gwirioneddol a gwendidau diogelwch cyn iddynt gyrraedd
cynhyrchu, am gost lawer is nag y byddai ymdrech adolygu dynol
cyfatebol ei mynnu ar gyfer yr un gorchudd, yw'r enillion ar
ddadansoddiad statig wedi'i reoli'n dda. Mae'r enghraifft asiantaeth
amddiffyn uchod yn dangos cost cael hyn yn anghywir: roedd polisi
popeth-neu-ddim anymarferol wedi lleihau graffu diogelwch gwirioneddol
mewn gwirionedd trwy yrru atal, i'r gwrthwyneb i'w fwriad.

Mae cost cyfanswm perchnogaeth yn cynnwys yr offeryn ei hun, sy'n aml yn
rhad ac am ddim ar gyfer ecosystemau iaith cyffredin, a'r ddisgyblaeth
barhaus o ddidoli difrifoldeb, rheoli positif-ffug, a chynllunio unioni
cronfa-waith-waddol. Y ddisgyblaeth barhaus honno, yn fwy na'r offeryn
ei hun, sy'n pennu a yw rhaglen dadansoddiad statig yn darparu gwerth
gwirioneddol, ymddiriedol neu'n dirywio'n sŵn wedi'i anwybyddu.

## Gwrth-batrymau a pheryglon

- **Trin cyfrif canfyddiad crai fel y metrig:** yn cymysgu materion
  dibwys a difrifol ac yn hawdd ei dwyllo trwy atal.
- **Mynnu bod y gronfa-waith hanesyddol gyfan wedi'i datrys cyn i
  unrhyw waith newydd fynd rhagddo:** fel arfer yn anymarferol ac yn
  gyrru atal yn hytrach na thrwsiadau gwirioneddol.
- **Anwybyddu cyfradd positif-ffug:** mae lefel sŵn heb ei rheoli'n
  arwain timau i ddiystyru allbwn yr offeryn yn gyfan gwbl, gan gynnwys
  canfyddiadau gwirioneddol.
- **Atal tawel, heb ei ddogfennu o ganfyddiadau dilys:** yn erydu
  signal yr offeryn ac yn gadael dim llwybr archwilio at ddibenion
  cydymffurfio.
- **Trin canfyddiad dadansoddiad statig fel dyfarniad awtomatig heb
  adolygiad dynol:** yn colli cyd-destun na all offeryn ei weld.
- **Byth yn croesgyfeirio canfyddiadau â data cymhlethdod a man-poeth:**
  yn colli'r signal blaenoriaethu cryfach y mae tystiolaeth gydgyfeiriol
  yn ei ddarparu.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Ni redir dadansoddiad statig, neu mae
  canfyddiadau'n cronni heb eu rheoli heb ddidoli difrifoldeb na
  olrhain tuedd.
- **Lefel 2, Datblygu:** Mae rhywfaint o ddadansoddiad statig yn rhedeg
  yn CI, ond mae didoli difrifoldeb yn anghyson ac ni reolir cyfradd
  positif-ffug.
- **Lefel 3, Safoni:** Pwysolir canfyddiadau yn ôl difrifoldeb ac mae CI
  yn giatio ar ganfyddiadau critigol a difrifoldeb-uchel newydd, ar
  draws y sefydliad.
- **Lefel 4, Rheoli:** Diwnio cyfradd positif-ffug yn weithredol, mae
  gan y gronfa-waith waddol gynllun unioni dogfennedig, wedi'i gamu, ac
  mae hepgoriadau'n weladwy ac wedi'u dogfennu.
- **Lefel 5, Cerddorfaru:** Croesgyfeirir canfyddiadau dadansoddiad
  statig, data cymhlethdod, a data man-poeth yn rheolaidd i
  flaenoriaethu buddsoddiad, a gall y sefydliad bwyntio at welliannau
  diffyg neu ddiogelwch penodol, mesuradwy wedi'u holrhain at y
  rhaglen.

## Syniadau ar gyfer trafodaeth

1. Beth yw ein tuedd wedi'i phwysoli-yn-ôl-difrifoldeb gyfredol, ac a yw'n gwella neu'n gwaethygu?
2. Pa mor fawr yw ein cronfa-waith canfyddiad waddol, ac a oes gennym gynllun bwriadol i'w lleihau?
3. Beth yw ein cyfradd positif-ffug amcangyfrifedig ar gyfer ein categori canfyddiad swnllyd-uchaf?
4. A yw peirianwyr ar ein tîm ar hyn o bryd yn ymddiried yn neu'n anwybyddu ein hallbwn dadansoddiad statig?
5. Ble mae canfyddiadau dadansoddiad statig yn cydgyfeirio â data cymhlethdod neu fan-poeth yn ein sylfaen cod?

## Prif gasgliadau

- Olrheiniwch **duedd wedi'i phwysoli-yn-ôl-difrifoldeb**, nid gyfrif
  canfyddiad crai, sy'n cymysgu materion dibwys a difrifol.
- Giatiwch CI ar **ganfyddiadau newydd wedi'u cyflwyno**, nid y gronfa-
  waith hanesyddol gyfan, i atal ôl-gwympiad heb fynnu trwsiad
  anymarferol, ar unwaith.
- Rheolwch y **gyfradd positif-ffug** yn weithredol; mae sŵn heb ei
  reoli'n dinistrio ymddiriedaeth yn yr offeryn ac yn arwain at
  ganfyddiadau'n cael eu hanwybyddu'n gyfan gwbl.
- Triniwch ganfyddiadau fel **anogaeth ar gyfer adolygiad dynol**, gyda
  hepgoriadau gweladwy, wedi'u dogfennu, nid dyfarniad awtomatig neu
  atal tawel.
- Croesgyfeiriwch ddadansoddiad statig â **data cymhlethdod a man-
  poeth** (pynciau 4.1, 4.3) am dystiolaeth flaenoriaethu gydgyfeiriol,
  gryfach.

## Cyfeiriadau a darllen pellach

- *Static Program Analysis*, gan Anders Møller a Michael I.
  Schwartzbach (sylfeini damcaniaethol ac ymarferol technegau
  dadansoddiad statig).
- Canllawiau OWASP ar brofi diogelwch cymhwysiad statig (SAST), rhan o
  adnoddau ehangach Sefydliad OWASP ar arferion datblygu meddalwedd
  diogel.
- *Refactoring: Improving the Design of Existing Code*, gan Martin
  Fowler (y catalog arogl cod y mae llawer o offeryno dadansoddiad
  statig yn tynnu arno).
- *Working Effectively with Legacy Code*, gan Michael Feathers (rheoli
  cronfa-waith waddol o faterion ansawdd mewn sylfaen cod sefydledig).
