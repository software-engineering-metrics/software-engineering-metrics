# 2.5 Effeithlonrwydd llif a gwaith ar y gweill

## Trosolwg a chymhelliant

**Effeithlonrwydd llif** yw'r gymhareb rhwng amser gweithredol a chyfanswm
amser ar gyfer darn o waith: os yw newid yn treulio deg awr yn cael ei
godio, ei adolygu, a'i brofi'n weithredol, ond yn eistedd yn segur mewn
ciwiau am naw deg awr o gyfanswm ar draws ei siwrnai gyfan, mae
effeithlonrwydd llif yn 10%. Mae'r rhan fwyaf o biblinellau cyflenwi
meddalwedd, wedi'u mesur yn onest, yn glanio yn rhywle rhwng 10% a 25% o
effeithlonrwydd llif, sy'n synnu pobl sy'n disgwyl i ymdrech ddominyddu. Y
gost ddominyddol yn y rhan fwyaf o systemau cyflenwi nid yw pa mor hir mae
gwaith yn ei gymryd i'w wneud, ond pa mor hir mae gwaith yn aros i
ddechrau.

**[Gwaith ar y gweill](https://en.wikipedia.org/wiki/Work_in_process)**
(WIP) yw'r cyfrif o eitemau y gweithir arnynt yn weithredol ar unrhyw
adeg, ar draws tîm neu system, yr un maint y mae pwnc 2.4 yn ei alw'n
"lwyth llif." Y canfyddiad gwrth-reddfol y tu ôl i'r pwnc hwn, wedi'i
gefnogi gan ddegawdau o ymchwil mewn rheolaeth gweithrediadau a'i
ffurfioli ar gyfer cyflenwi meddalwedd trwy kanban a theori ciwio, yw bod
cyfyngu WIP yn tueddu i *gynyddu* trwybwn, nid ei leihau, oherwydd mae
llai o waith ar hediad ar unwaith yn golygu llai o gyfnewid cyd-destun,
ciwiau byrrach, a chwblhau cyflymach fesul eitem, er ei fod yn teimlo fel
petai gwneud llai o waith ar yr un pryd i fod i gynhyrchu llai o allbwn
yn gyffredinol.

I dimau mawr, mae deall effeithlonrwydd llif yn ail-fframio bron pob
problem cyflenwi o "mae angen i bobl weithio'n gyflymach" i "mae angen i
waith aros llai." Mae'r ail-fframio hwnnw'n bwysig oherwydd bod y
fframiad cyntaf yn gwahodd pwysau ar unigolion, yn union y fagl y mae
pwnc 2.6 yn rhybuddio yn ei herbyn, tra bo'r ail yn gwahodd ymchwiliad
i mewn i strwythur ciwio, cynhwysedd adolygu, a faint o waith sy'n cael ei
ddechrau ar yr un pryd, sef lle mae'r gwelliant gwirioneddol, cynaliadwy
fel arfer yn byw. Mae sefydliadau menter sy'n jyglo llawer o fentrau
cydredol ar draws timau a rennir yn arbennig o dueddol i WIP uchel ac
effeithlonrwydd llif isel, oherwydd mae dechrau gwaith newydd bob amser
yn edrych fel cynnydd hyd yn oed pan mae'n arafu'n dawel bopeth sydd
eisoes ar hediad.

## Egwyddorion allweddol

- **Amser aros, nid ymdrech weithredol, sy'n dominyddu'r rhan fwyaf o
  biblinellau cyflenwi.** Mae effeithlonrwydd llif o dan 25% yn
  nodweddiadol, nid yn arwydd o dîm wedi torri.
- **Mae cyfyngu gwaith ar y gweill yn tueddu i gynyddu trwybwn,** nid ei
  leihau, trwy leihau cyfnewid cyd-destun a byrhau ciwiau.
- **Mae dechrau gwaith newydd yn teimlo fel cynnydd; gorffen gwaith yw'r
  hyn sy'n mewn gwirionedd yn cyflenwi gwerth.** Nid yr un peth yw'r
  rhain, ac mae sefydliadau'n rheolaidd yn eu drysu.
- **Mae WIP uchel yn aml yn anweledig hyd nes ei fesur.** Gall tîm fod yn
  jyglo llawer mwy o waith cydredol nag y mae unrhyw un yn unigol yn ei
  sylweddoli.
- **Metrig lefel-system yw hwn, nid un unigol.** Mae cymhwyso terfynau
  WIP i gosbi unigolion yn camddarllen holl bwynt y dechneg.

## Argymhellion

### Mesurwch effeithlonrwydd llif cyn tybio mai ymdrech yw'r tagfa

Cyfrifwch y gymhareb rhwng amser gweithredol a chyfanswm amser a
dreuliwyd ar gyfer sampl gynrychiadol o newidiadau diweddar, gan
ddefnyddio'r data cam amser-cylch o bwnc 2.6. Mae'r rhan fwyaf o dimau
sy'n mesur hyn am y tro cyntaf yn synnu pa mor isel yw'r rhif, ac mae'r
syndod hwnnw ei hun yn werthfawr: mae'n ailgyfeirio sylw o "weithio'n
galetach" tuag at "leihau ciwio," sydd bron bob amser y lifer mwy
cynhyrchiol.

### Gosodwch derfyn gwaith-ar-y-gweill esblyg a'i orfodi'n weladwy

Cyfyngwch nifer yr eitemau y gall tîm neu unigolyn eu cael ar y gweill yn
weithredol ar unwaith, yn weladwy ar fwrdd a rennir (mae bwrdd kanban
ffisegol neu ddigidol yn weithrediad clasurol). Pan gyrhaeddir y terfyn,
gweithred nesaf y tîm yw helpu i orffen rhywbeth sydd eisoes ar hediad,
nid dechrau rhywbeth newydd. Mae'r arfer sengl hwn, wedi'i fenthyg o
weithgynhyrchu lean a'i ffurfioli mewn kanban, yn un o'r gwelliannau llif
mwyaf cyson effeithiol sydd ar gael i dîm meddalwedd, ac mae'n costio
bron dim i'w weithredu.

### Triniwch derfyn WIP fel cyfyngiad system, nid cwota unigol

Mae terfyn WIP yn llywodraethu faint o waith sydd gan y *system* (tîm,
ciw adolygu a rennir, amgylchedd a rennir) ar hediad ar unwaith, nid faint
y caniateir i unrhyw un person ei gyffwrdd. Mae cymhwyso'r terfyn fel
cwota perfformiad unigol, "dim ond dau docyn yn agored y cewch chi," yn
camgymhwyso'r dechneg ac yn risgio'n union y math o dwyllo lefel-unigol y
mae'r llyfr hwn yn rhybuddio yn ei erbyn drwyddo draw. Mae'r terfyn yn
bodoli i ddiogelu llif trwy'r system gyfan, a dylai ei orfodi fod yn norm
tîm, nid nenfwd personol.

### Ymchwiliwch pam mae gwaith yn eistedd yn segur, nid dim ond am ba hyd

Pan fydd dadansoddiad effeithlonrwydd llif yn datgelu amseroedd aros
hir, gofynnwch yn benodol pam: a yw gwaith yn aros oherwydd nad yw
adolygydd ar gael, oherwydd bod amgylchedd profi a rennir wedi'i archebu,
oherwydd nad yw dibyniaeth ar dîm arall wedi glanio eto. Mae gan bob un
o'r rhain drwsiad gwahanol. Mae cyfarwyddyd cyffredinol "lleihau amser
aros" heb yr ymchwiliad penodol hwn yn tueddu i gynhyrchu ymatebion
cyffredinol, aneffeithiol.

### Gwyliwch am WIP yn cropian yn ôl i fyny ar ôl gwelliant cychwynnol

Mae timau sy'n mabwysiadu terfyn WIP yn llwyddiannus yn aml yn ei weld
yn erydu dros amser wrth i bwysau i ddechrau mentrau newydd ddychwelyd,
"dim ond y tro hwn, mae angen inni ddechrau'r peth brys hwn hefyd."
Triniwch bob eithriad terfyn-WIP fel penderfyniad bwriadol, gweladwy â
rheswm datganedig, nid rhagafael tawel, rheolaidd, fel nad yw disgyblaeth
y terfyn yn dadfeilio'n dawel yn ôl i'w gyflwr gwreiddiol.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Dim terfyn WIP | Yn teimlo'n hyblyg; dim ffrithiant wrth ddechrau gwaith newydd | Mae cyfnewid cyd-destun a chiwio'n arafu popeth yn dawel |
| Terfyn WIP lefel-tîm | Yn gwella trwybwn ac effeithlonrwydd llif yn fesuradwy | Angen disgyblaeth i'w orfodi, yn enwedig o dan bwysau terfyn amser |
| Cwota WIP lefel-unigol | Syml i'w nodi | Yn camgymhwyso'r dechneg; yn risgio twyllo unigol |
| Terfyn WIP caeth, di-ildio | Budd effeithlonrwydd-llif mwyaf | Gall deimlo'n anhyblyg mewn sefyllfaoedd gwirioneddol frys, eithriadol |

Y tensiwn canolog yw **hyblygrwydd yn erbyn llif**. Mae dechrau gwaith
newydd pryd bynnag y mae'n edrych yn frys yn teimlo'n ymatebol, ond mae'r
ymchwil effeithlonrwydd-llif a WIP yn dangos yn gyson bod yr hyblygrwydd
hwn yn dod ar gost gorffen unrhyw beth yn gyflym, gan fod mwy o waith
cydredol yn golygu ciwiau hirach a mwy o gyfnewid cyd-destun ar gyfer
popeth sydd eisoes ar hediad. Datryswch y tensiwn trwy fabwysiadu terfyn
WIP lefel-tîm fel y rhagosodiad, gyda phroses eithriad bwriadol, gweladwy,
a phrin ar gyfer argyfyngau gwirioneddol, yn hytrach na naill ai reol
gaeth, ddim-eithriadau neu ryddid-i-bawb diderfyn, hyblyg.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Beth yw ein heffeithlonrwydd llif gwirioneddol, wedi'i fesur o
   ddata amser-cylch gwirioneddol, ac a yw'r rhif hwnnw'n ein synnu?**
   Nid yw'r rhan fwyaf o dimau erioed wedi cyfrifo hyn ac yn tybio ei fod
   yn llawer uwch nag y mae'n troi allan i fod. Tynnwch sampl o newidiadau
   diweddar a chyfrifwch y gymhareb yn onest cyn trafod unrhyw beth arall
   yn y pwnc hwn.

2. **Faint o waith ar y gweill sydd gennym mewn gwirionedd ar hyn o bryd,
   ar draws y tîm cyfan, ac a oedd unrhyw un yn gwybod y rhif hwnnw cyn
   cyfrif?** Mae WIP uchel yn aml yn anweledig hyd nes ei fesur yn
   benodol, oherwydd nid yw pob unigolyn ond yn gweld ei ddarn ei hun
   ohono. Cyfrifwch bopeth sy'n weithredol ar y gweill, gan gynnwys gwaith
   nad oes neb yn ei gyffwrdd yn weithredol heddiw.

3. **Petaem yn mabwysiadu terfyn WIP, beth fyddai angen newid am sut yr
   ydym yn ymateb i gais brys newydd?** Mae'r cwestiwn hwn yn dwyn i'r
   amlwg yr arfer sefydliadol gwirioneddol, dechrau gwaith newydd yn
   reddfol, y mae terfyn WIP wedi'i ddylunio i'w ymyrryd, ac mae'n werth
   ei drafod cyn, nid ar ôl, ceisio gorfodi terfyn.

4. **Pan fydd gwaith yn eistedd yn segur yn ein piblinell, beth yw'r
   rheswm penodol, ac ai'r un rheswm ydyw bob tro?** Mae synnwyr
   cyffredinol bod "pethau'n aros o gwmpas" yn llai defnyddiol nag achos
   penodol, ailadroddus: adolygydd anwaith, amgylchedd a rennir wedi'i
   archebu, dibyniaeth traws-dîm. Enwch y patrwm gwirioneddol o
   enghreifftiau diweddar go iawn.

5. **A ydym erioed wedi mabwysiadu terfyn WIP ac yna wedi ei wylio'n
   erydu'n dawel trwy eithriadau?** Mae hyn yn hynod gyffredin ac yn werth
   ei drafod yn onest: pa bwysau achosodd yr eithriad cyntaf, ac a
   ddaeth yr eithriadau'n norm newydd heb i unrhyw un benderfynu hynny'n
   esblyg?

6. **A fyddai angen cymhwyso terfyn WIP yn ein cyd-destun ni ar y lefel
   unigol, tîm, neu adnodd a rennir (fel ciw adolygu neu amgylchedd
   profi)?** Mae tagfeydd gwahanol yn galw am derfynau ar lefelau
   gwahanol, a gall cymhwyso terfyn ar y lefel anghywir, cwotâu unigol yn
   lle nenfwd ciw a rennir, gamgymhwyso'r dechneg gyfan.

## Golwg sector

**Cwmni newydd.** Gyda ychydig o bobl, mae WIP fel arfer yn isel yn
naturiol yn syml oherwydd nad oes digon o beirianwyr i ddechrau llawer o
waith ar yr un pryd. Y risg yw'r gwrthgyferbyniol: sylfaenydd neu
beiriannydd arweiniol yn jyglo llawer mwy o fentrau cydredol yn bersonol
nag y maent yn ei sylweddoli, sy'n werth ei fesur hyd yn oed heb offer
kanban ffurfiol.

**Busnes bach.** Mae bwrdd gweladwy syml, ffisegol neu offeryn digidol
sylfaenol, â therfyn colofn esblyg yn ddigon i gael y rhan fwyaf o'r
budd heb fuddsoddi mewn offer metrigau llif soffistigedig. Dechreuwch â
therfyn hael a'i dynhau'n raddol wrth i'r tîm ymgyfarwyddo â'r
ddisgyblaeth.

**Menter.** Mae WIP uchel yn arbennig o gyffredin ac yn arbennig o ddrud
yma, oherwydd mae llawer o fentrau strategol cydredol yn cystadlu am yr
un cynhwysedd peirianneg a rennir, ac mae dechrau un newydd bob amser yn
edrych fel cynnydd i bwy bynnag a'i noddodd. Gwnewch WIP yn weladwy ar y
lefel portffolio, nid dim ond lefel tîm, fel y gall arweinyddiaeth weld
cost dechrau menter arall eto cyn gorffen y rhai cyfredol.

**Llywodraeth.** Mae rhaglenni aml-flwyddyn yn aml yn cronni WIP ymhlyg
enfawr ar draws llawer o weithlifoedd, pob un wedi'i gyfiawnhau'n unigol,
heb unrhyw welededd sefydliadol-gyfan i'r cyfanswm. Mae cyflwyno
gwelededd WIP lefel-portffolio, hyd yn oed yn anffurfiol, yn aml y ddadl
fwyaf perswadiol sengl dros drefnu gwaith yn ddilyniant yn hytrach na
rhedeg popeth yn gyfochrog, gan fod cost effeithlonrwydd-llif WIP uchel
yn cronni'n weladwy unwaith y'i mesurir.

## Enghreifftiau

**Menter.** Roedd tîm platfform cwmni gwasanaethau ariannol yn jyglo un
deg wyth o fentrau cydredol gyda dim ond deuddeg peiriannydd, cymhareb
WIP-i-gynhwysedd na wnaeth neb ei chyfrifo mewn gwirionedd hyd nes i
gyfarwyddwr peirianneg newydd ofyn amdani'n uniongyrchol. Mesurodd
effeithlonrwydd llif ar draws gwaith y tîm o dan 12%. Mabwysiadodd y tîm
derfyn WIP esblyg o un fenter weithredol fesul dau beiriannydd, gan
oedi'n fwriadol sawl menter blaenoriaeth-is yn hytrach na pharhau i
daenu cynhwysedd'n denau. Mwy na dyblodd trwybwn, wedi'i fesur fel mentrau
a gwblhawyd yn wirioneddol fesul chwarter, o fewn dau chwarter, er bod y
tîm yn weladwy'n "gwneud llai" ar unrhyw foment benodol.

**Llywodraeth.** Roedd rhaglen trawsnewid digidol asiantaeth isadeiledd
genedlaethol wedi cronni dros ddeugain o weithlifoedd cydredol ar draws
ei phortffolio, pob un â'i noddwr ei hun a'i gyfiawnhad ei hun, heb
unrhyw un olwg o gyfanswm gwaith ar y gweill. Canfu adolygiad
effeithlonrwydd-llif lefel-rhaglen fod y gweithlif canolrifol yn treulio
llai na 15% o'i amser wedi mynd heibio mewn datblygiad gweithredol,
gyda'r gweddill yn aros am adnoddau a rennir: tîm adolygu pensaernïaeth
canolog bach, amgylchedd profi a rennir, a chymeradwyaeth traws-
asiantaethol. Cyflwynodd y rhaglen derfynau WIP lefel-portffolio esblyg,
gan drefnu gweithlifoedd yn ddilyniant yn hytrach na rhedeg pob un o'r
deugain yn gyfochrog, a dangosodd olrhain yr asiantaeth ei hun gwblhau
cyflymach yn fesuradwy ar gyfer y gweithlifoedd a arhosodd yn weithredol,
hyd yn oed wrth i gyfanswm nifer y rhai a redai ar unwaith ostwng yn
sylweddol.

## Achos busnes: cymhellion, ROI, a TCO

Mae'r enillion ar reoli effeithlonrwydd llif a WIP yn fwriadol yn
wrth-reddfol ond wedi'i ddogfennu'n dda: mae trwybwn yn tueddu i godi,
nid syrthio, pan fydd sefydliad yn gwneud llai ar unwaith, oherwydd mae
llai o gyfnewid cyd-destun a chiwiau byrrach yn golygu bod pob darn
unigol o waith yn gorffen yn gyflymach. Mae enghraifft gwasanaethau
ariannol uchod, gan ddyblu trwybwn o leihau gwaith cydredol yn fwriadol,
yn batrwm cyffredin unwaith y bydd sefydliadau mewn gwirionedd yn mesur
ac yn gweithredu ar effeithlonrwydd llif yn hytrach na thybio bod mwy o
waith cyfochrog bob amser yn golygu mwy o gynnydd.

Mae cost cyfanswm mabwysiadu'r ddisgyblaeth hon yn bennaf yn sefydliadol,
nid technegol: bwrdd gweladwy, terfyn WIP y cytunwyd arno, a'r
ddisgyblaeth i ddweud na wrth ddechrau gwaith newydd pan gyrhaeddir y
terfyn. Mae'r ddisgyblaeth honno'n anos ei chynnal na'i mabwysiadu, a
dyna pam mae'r argymhelliad "gwyliwch am WIP yn cropian yn ôl i fyny"
uchod yr un mor bwysig â'r mabwysiadu cychwynnol ei hun.

## Gwrth-batrymau a risgiau

- **Tybio bod ymdrech weithredol yn dominyddu amser cyflenwi heb fesur
  effeithlonrwydd llif:** fel arfer yn anghywir, ac mae'n camgyfeirio
  ymdrech gwelliant tuag at y lifer anghywir.
- **Cymhwyso terfyn WIP fel cwota unigol yn hytrach na chyfyngiad
  system:** yn camgymhwyso'r dechneg ac yn risgio twyllo unigol.
- **Dechrau gwaith newydd yn reddfol oherwydd ei fod yn teimlo fel
  cynnydd:** yr arfer craidd y mae effeithlonrwydd llif a therfynau WIP
  wedi'u dylunio i'w ymyrryd.
- **Gadael i eithriadau terfyn-WIP ddod yn rheolaidd ac anweledig:** yn
  erydu'r ddisgyblaeth yn ôl i'w chyflwr gwreiddiol heb i unrhyw un
  benderfynu hynny'n fwriadol.
- **Mesur WIP ar lefel y tîm yn unig, gan golli gorlwyth lefel-
  portffolio:** yn gyffredin mewn sefydliadau mawr sy'n rhedeg llawer o
  fentrau strategol cydredol.
- **Trin rhif effeithlonrwydd-llif isel fel arwydd o dîm gwael:** mae'n
  nodweddiadol o'r rhan fwyaf o biblinellau cyflenwi ac yn bwynt cychwyn
  ar gyfer ymchwiliad, nid dyfarniad.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Ni olrheinir gwaith ar y gweill; mae timau'n
  dechrau gwaith newydd yn reddfol heb welededd i lwyth cydredol
  cyfanswm.
- **Lefel 2, Datblygu:** Mae rhai timau'n defnyddio bwrdd anffurfiol, ond
  ni orfodir terfynau WIP yn gyson ac ni chyfrifir effeithlonrwydd llif
  byth.
- **Lefel 3, Safoni:** Mae gan dimau derfynau WIP esblyg, gweladwy ar
  lefel y system, a mesurir effeithlonrwydd llif yn gyfnodol o ddata
  amser-cylch gwirioneddol.
- **Lefel 4, Rheoli:** Olrheinir eithriadau terfyn-WIP fel penderfyniadau
  bwriadol, gweladwy; monitorir effeithlonrwydd llif am erydiad dros
  amser ac fe'i hymchwilir pan fydd yn gostwng.
- **Lefel 5, Cerddorfaru:** Mae WIP yn weladwy ac wedi'i reoli ar y lefel
  portffolio, nid dim ond lefel tîm, a gall y sefydliad bwyntio at
  welliannau trwybwn penodol a ddeilliodd o leihau gwaith cydredol yn
  fwriadol.

## Syniadau ar gyfer trafodaeth

1. Beth yw ein heffeithlonrwydd llif gwirioneddol, wedi'i gyfrifo'n onest o ddata go iawn?
2. Faint o waith ar y gweill sydd gennym ar hyn o bryd nad oedd neb wedi'i gyfrif cyn y drafodaeth hon?
3. I beth fyddai angen inni ddweud na er mwyn gorfodi terfyn WIP gwirioneddol?
4. Beth yw'r rheswm mwyaf cyffredin sengl bod gwaith yn eistedd yn segur yn ein piblinell?
5. Ble yn ein sefydliad mae WIP lefel-portffolio yn anweledig ac yn debygol o fod yn rhy uchel?

## Prif gasgliadau

- Mae **effeithlonrwydd llif**, y gymhareb rhwng amser gweithredol a
  chyfanswm amser, fel arfer o dan 25% mewn piblinellau cyflenwi
  gwirioneddol; amser aros, nid ymdrech, sy'n dominyddu.
- **Mae cyfyngu gwaith ar y gweill yn tueddu i gynyddu trwybwn**, nid ei
  leihau, trwy leihau cyfnewid cyd-destun a byrhau ciwiau.
- Cymhwyswch **derfyn WIP fel cyfyngiad system**, byth fel cwota unigol.
- Ymchwiliwch y **rheswm penodol** bod gwaith yn eistedd yn segur yn
  hytrach na chyhoeddi cyfarwyddyd cyffredinol "lleihau amser aros."
- Gwyliwch am derfynau WIP yn **erydu trwy eithriadau rheolaidd**;
  triniwch bob eithriad fel penderfyniad bwriadol, gweladwy.
- Mae pwnc 2.4 yn enwi'r maint hwn yn **llwyth llif** ac mae pwnc
  2.7 yn ffurfioli'r berthynas fel cyfraith Little: mae gwaith ar y
  gweill yn hafal i gyfradd gyrraedd wedi'i lluosi ag amser cylch, ar
  gyfer unrhyw giw sefydlog.

## Cyfeiriadau a darllen pellach

- *The Principles of Product Development Flow*, gan Donald G. Reinertsen
  (theori ciwio, maint swp, a therfynau WIP mewn datblygiad cynnyrch).
- *Kanban: Successful Evolutionary Change for Your Technology Business*,
  gan David J. Anderson (y testun sylfaenol ar derfynau WIP a llif ar
  gyfer timau meddalwedd).
- *Actionable Agile Metrics for Predictability*, gan Daniel S. Vacanti
  (mesur effeithlonrwydd llif a rhagolygu wedi'i seilio ar lif).
- *The Goal*, gan Eliyahu M. Goldratt (theori cyfyngiadau a'r berthynas
  wrth-reddfol rhwng prysurdeb lleol a thrwybwn system).
