# 4.5 Mesur dyled dechnegol

## Trosolwg a chymhelliant

Mae **[dyled dechnegol](https://en.wikipedia.org/wiki/Technical_debt)**,
trosiad a fathwyd gan Ward Cunningham, yn disgrifio cost gronedig
llwybrau byrion y gorffennol, penderfyniadau cyfleus a ryddhaodd
rywbeth yn gynt ond a adawodd y sylfaen cod yn anos ei newid wedyn, yn
yr un modd ag y mae dyled ariannol yn caniatáu i chi wario nawr am
gost llog yn ddiweddarach. Mae gan bob sylfaen cod ryw ddyled dechnegol,
ac nid yw hynny'n fethiant yn awtomatig; gwerth gwirioneddol y trosiad
yw ei fod yn fframio dyled fel cyfaddawd rheoladwy yn hytrach na naill
ai gyfrinach gywilyddus neu faich parhaol, anochel. Mae'r pwnc hwn yn
ymwneud â gwneud y cyfaddawd hwnnw'n weladwy a rheoladwy trwy fesur, yn
hytrach na'i adael fel pryder amwys, wedi'i dan-flaenoriaethu'n barhaus y
mae pob peiriannydd yn ei synhwyro ond na all neb weithredu arno â
thystiolaeth.

Mae'r pynciau sy'n rhagflaenu hwn, cymhlethdod (4.1), gorchudd (4.2),
trosiant a mannau poeth (4.3), a dadansoddiad statig (4.4), yn dangos
un agwedd o ddyled dechnegol yr un. Swydd y pwnc hwn yw synthesis:
troi'r signalau ar wahân hynny, ynghyd ag eitemau nad ydynt byth yn
ymddangos mewn unrhyw sgan awtomataidd (llwybr byr pensaernïol heb ei
ddogfennu, mudo wedi'i ohirio'n fwriadol), i mewn i un gronfa-waith
sengl, wedi'i blaenoriaethu, weladwy sy'n cystadlu'n deg am fuddsoddiad
yn erbyn gwaith nodweddion, yn hytrach na cholli'r gystadleuaeth honno'n
ddiofyn dim ond oherwydd nad oes ganddi fetrig ynghlwm wrthi na
heiriolwr mewn cyfarfodydd cynllunio.

I dimau mawr, mae dyled dechnegol heb ei rheoli'n cyfansymio mewn ffordd
sy'n wirioneddol beryglus ac yn hawdd ei thanamcangyfrif: mae pob
llwybr byr newydd yn gwneud y newid nesaf ychydig yn anos, sy'n creu
pwysau am fwy o lwybrau byrion, sy'n cyfansymio ymhellach. Mae
sefydliadau menter a llywodraeth sy'n cynnal systemau dros flynyddoedd
lawer yn arbennig o agored i'r effaith gyfansymio hon, a phrif argymhelliad
y pwnc hwn, cronfa-waith dyled weladwy, wedi'i meintioli, wedi'i
blaenoriaethu, yw'r mecanwaith sy'n caniatáu i sefydliad wirioneddol
reoli'r cyfaddawd yn fwriadol yn lle drifftio i mewn i argyfwng.

## Egwyddorion allweddol

- **Mae dyled dechnegol yn drosiad bwriadol ar gyfer cyfaddawd
  rheoladwy, nid cyfrinach gywilyddus.** Mae rhywfaint o ddyled, a
  gymerwyd yn wybodus, yn benderfyniad busnes rhesymol.
- **Mae dyled heb ei mesur yn colli'r gystadleuaeth flaenoriaethu yn
  erbyn gwaith nodweddion yn ddiofyn,** nid oherwydd ei bod yn bwysig
  yn llai, ond oherwydd nad oes ganddi heiriolwr gweladwy.
- **Meintiolwch ddyled mewn termau y gall penderfynwyr eu pwyso: cost i'w
  thrwsio yn erbyn cost ei chario.** Yn anaml y mae hawliad amwys "mae'r
  cod yn flêr" yn cystadlu'n dda yn erbyn cais nodwedd concrid.
- **Mae dyled yn cyfansymio.** Mae pob llwybr byr newydd yn gwneud
  newidiadau'r dyfodol ychydig yn anos, ac mae'r effaith honno'n
  cyflymu os na chaiff ei rheoli.
- **Ni ddylid talu pob dyled i lawr.** Mae rhai'n werth eu cario'n
  ddiddiwedd os yw cost ei thrwsio'n fwy na chost byw gyda hi.

## Argymhellion

### Adeiladwch gronfa-waith dyled dechnegol sengl, weladwy

Cyfunwch y signalau o bynciau cynharach y rhan hon, allanolion
cymhlethdod, ardaloedd cyfradd-lladd-treiglo isel, mannau poeth,
canfyddiadau dadansoddiad statig heb eu datrys, ochr yn ochr ag
eitemau dyled na all ond person eu nodi (llwybr byr pensaernïol,
uwchraddiad dibyniaeth wedi'i ohirio, ateb dros dro heb ei ddogfennu),
i mewn i un gronfa-waith weladwy, wedi'i holrhain â'r un trylwyredd a
gwelededd â'ch cronfa-waith nodweddion. Nid yw dyled sy'n byw dim ond
ym mhennaethiaid peirianwyr unigol neu mewn sylwadau cod gwasgaredig i
bob pwrpas yn bodoli at ddibenion blaenoriaethu.

### Meintiolwch gost pob eitem dyled a'i chost cario

Ar gyfer pob eitem, amcangyfrifwch ddau ffigwr: y gost i'w thrwsio
(amser peirianneg, perygl y trwsiad ei hun) a chost ei chario heb ei
thrwsio (faint yn arafach y mae gwaith cysylltiedig yn mynd, faint o
berygl diffyg ychwanegol y mae'n ei gario, faint y mae'n rhwystro
gwaith arall). Mae'r fframio hwn, wedi'i fenthyca'n uniongyrchol o
resymeg trosiad y ddyled ariannol ei hun, yn rhoi sylfaen wirioneddol i
benderfynwyr ar gyfer cymhariaeth yn erbyn cost a gwerth disgwyliedig
gwaith nodweddion, yn hytrach na chwyn haniaethol, heb ei meintioli.

### Blaenoriaethwch gan ddefnyddio effaith, nid oedran na'r heiriolwr uchaf

Graddiwch eitemau dyled yn ôl eu cyfuniad o gost cario a pha mor aml y
mae'r cod dan sylw'n cael ei gyffwrdd (mae data trosiant pwnc 4.3'n
uniongyrchol ddefnyddiol yma): mae eitem mewn cornel o'r sylfaen cod a
addasir yn anaml, waeth pa mor annymunol, yn bwysig lawer llai nag un
sy'n eistedd yn uniongyrchol yn llwybr eich datblygiad mwyaf
gweithredol. Gwrthsefyllwch flaenoriaethu yn ôl pa eitem sydd wedi bod
ar y gronfa-waith hiraf neu ba beiriannydd sy'n ei heiriol yn fwyaf
parhaus, gan nad yw'r naill na'r llall yn cydberthyn yn ddibynadwy ag
effaith busnes gwirioneddol.

### Dyrannwch gapasiti unioni pwrpasol, gwarchodedig

Mae cronfa-waith dyled sy'n gorfod cystadlu eitem-wrth-eitem yn erbyn
pob cais nodwedd sy'n dod i mewn ym mhob cylch cynllunio'n tueddu i
golli'n gyson, oherwydd bod gan waith nodweddion bencampwr busnes
cliriach, mwy uniongyrchol fel arfer. Dyrannwch ganran warchodedig o
gapasiti peirianneg, mae patrwm cyffredin rhwng 10% a 20%, yn benodol
ar gyfer unioni dyled, wedi'i benderfynu ymlaen llaw yn hytrach na'i
negodi o'r newydd bob sbrint, fel bod talu dyled i lawr yn digwydd fel
mater o drefn yn hytrach nag ond yn dilyn argyfwng.

### Derbyniwch rywfaint o ddyled fel un barhaol, a dywedwch hynny'n benodol

Nid yw pob eitem yn perthyn ar gynllun unioni gweithredol. Lle mae'r
gost i'w thrwsio'n wirioneddol fwy na chost cario eitem yn ddiddiwedd,
yn enwedig ar gyfer cod mewn system sefydlog, anaml ei chyffwrdd, ar
fin ymddeol, dogfennwch y penderfyniad hwnnw'n benodol a symudwch yr
eitem i gategori wedi'i dan-flaenoriaethu'n fwriadol yn hytrach na
gadael iddi eistedd yn ddiddiwedd ar gronfa-waith weithredol lle mae ei
phresenoldeb parhaus yn awgrymu'n dawel waith na fydd byth mewn
gwirionedd yn digwydd.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Dim olrhain dyled ffurfiol | Dim baich | Mae dyled yn colli'r gystadleuaeth flaenoriaethu yn ddiofyn; yn cyfansymio'n anweledig |
| Ymwybyddiaeth dyled anffurfiol, ad hoc | Baich isel, rhywfaint o welededd | Anghyson; yn dibynnu ar gof ac eiriolaeth unigol |
| Cronfa-waith dyled ffurfiol, wedi'i meintioli | Yn cystadlu'n deg am fuddsoddiad; yn galluogi cyfaddawdau gwybodus | Angen cynnal a chadw parhaus a disgyblaeth meintioli |
| Capasiti unioni gwarchodedig, pwrpasol | Yn sicrhau bod talu i lawr yn digwydd yn gyson, nid dim ond yn adweithiol | Yn lleihau capasiti sydd ar gael ar gyfer gwaith nodweddion yn y tymor byr |

Y tensiwn canolog yw **pwysau cyflenwi ar unwaith yn erbyn cynaliadwyedd
tymor-hir**. Mae gan waith nodweddion bron bob amser bencampwr busnes
cliriach, mwy uniongyrchol nag unioni dyled, sy'n creu pwysau
strwythurol i ddyled golli pob penderfyniad blaenoriaethu unigol hyd
yn oed pan fo'i chost gronedig yn uchel. Datryswch y tensiwn trwy dynnu
unioni dyled o'r gystadleuaeth eitem-wrth-eitem yn gyfan gwbl trwy
gapasiti gwarchodedig, wedi'i ragddyrannu, fel bod y cyfaddawd yn cael
ei benderfynu'n fwriadol ac ymlaen llaw yn hytrach na'i ail-ddadlau, ac
fel arfer ei golli, ym mhob cylch cynllunio unigol.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A oes gennym gronfa-waith dyled dechnegol sengl, weladwy, neu a yw
   ymwybyddiaeth dyled yn byw'n bennaf ym mhennaethiaid peirianwyr
   unigol?** Os yw'r ateb onest yr olaf, dyna'r bwlch sengl mwyaf y
   mae'r pwnc hwn yn argymell ei gau'n gyntaf.

2. **Ar gyfer ein heitem ddyled uchaf, allem ni ddatgan ei chost i'w
   thrwsio a'i chost i'w chario mewn termau digon penodol i'w cymharu'n
   deg yn erbyn cais nodwedd?** Os na, ymarferwch y meintioli hwn gyda'ch
   gilydd fel ymarfer grŵp gan ddefnyddio eitem wirioneddol, gyfredol.

3. **Pa ganran o'n capasiti peirianneg sy'n mynd tuag at unioni dyled
   mewn gwirionedd, ac a benderfynwyd ar y ganran honno'n fwriadol neu
   ai dim ond yr hyn sy'n digwydd goroesi ar ôl dyrannu gwaith
   nodweddion ydyw?** Edrychwch ar eich sbrintiau diweddar gwirioneddol
   a chyfrifwch y rhif gwirioneddol yn hytrach na dibynnu ar argraff.

4. **A yw ein cronfa-waith dyled wedi'i blaenoriaethu yn ôl effaith
   busnes wirioneddol, neu yn ôl pa bynnag eitem sydd wedi'i chodi'n fwyaf
   parhaus neu wedi eistedd yno hiraf?** Croesgyfeiriwch eich
   blaenoriaethu cyfredol yn erbyn data trosiant (pwnc 4.3) a gwelwch
   a yw'r ddau'n cyd-fynd.

5. **Pa eitemau dyled y dylem eu derbyn yn benodol fel rhai parhaol, yn
   hytrach na'u gadael i eistedd yn ddiddiwedd ar gronfa-waith
   weithredol?** Nodwch o leiaf un eitem wirioneddol lle mae'r gost i'w
   thrwsio'n wirioneddol fwy na'r gost i'w chario, a thrafodwch symud i
   statws wedi'i dan-flaenoriaethu'n benodol.

6. **Sut mae ein cronfa-waith dyled wedi newid dros y flwyddyn
   ddiwethaf, yn tyfu, yn crebachu, neu'n aros yn fflat, ac a yw'r
   duedd honno'n cyfateb â'n greddf?** Olrheiniwch hyn dros amser yn
   hytrach na dim ond edrych ar giplun sengl bob amser; mae'r duedd yn
   aml yn fwy gwybodus na'r maint absolwt ar unrhyw foment benodol.

## Golwg sector

**Cwmni newydd.** Mae dyled fwriadol, wybodus yn aml yn strategaeth
resymol ar y cam hwn: rhyddhau'n gyflym i ddilysu rhagdybiaeth, gyda
chynllun clir i ailedrych ar lwybrau byrion penodol os yw'r cynnyrch yn
profi ei hun, yn fasnach ddilys, nid methiant. Y perygl yw colli
trywydd pa lwybrau byrion oedd yn fwriadol ac yn wrthdroadwy yn erbyn
pa rai sydd wedi dod yn rhwymedigaethau parhaol, heb eu harchwilio'n
dawel wrth i'r sylfaen cod dyfu.

**Busnes bach.** Mae rhestr syml, a rennir, hyd yn oed un anffurfiol,
yn enwi eich llwybrau byrion hysbys a'u cost fras i'w trwsio fel arfer
yn ddigonol ar y raddfa hon. Y ddisgyblaeth bwysicaf sy'n werth ei
mabwysiadu yw ailedrych ar y rhestr honno'n gyfnodol yn hytrach na
gadael iddi gronni'n dawel a dod yn anweledig trwy gyfarwydd-deb.

**Menter.** Mae capasiti unioni gwarchodedig, wedi'i ragddyrannu'n
bwysicaf yma, gan fod y gystadleuaeth flaenoriaethu unigol rhwng dyled a
gwaith nodweddion yn ffafrio nodweddion yn ddibynadwy ar draws degau o
dimau ar yr un pryd heb wrthbwysau strwythurol. Safonwch arfer
meintioli dyled ar draws y sefydliad fel y gellir cymharu eitemau
dyled yn deg ar draws timau ar gyfer penderfyniadau buddsoddi lefel-
portffolio.

**Llywodraeth.** Mae systemau hirhoedlog yn cronni dyled dros
flynyddoedd neu ddegawdau o newidiadau gofynion cynyddrannol, rhesymol
yn unigol, yn aml heb unrhyw olrhain dyled ffurfiol o gwbl tan i
argyfwng orfodi'r mater. Mae cronfa-waith dyled wedi'i meintioli,
weladwy'n offeryn gwirioneddol ddarbwyllol ar gyfer cyfiawnhau
cyllideb moderneiddio i gyrff goruchwylio, gan ei fod yn troi hawliad
amwys "mae'r system yn hen" yn achos penodol, wedi'i gostio dros
fuddsoddiad.

## Enghreifftiau

**Menter.** Roedd platfform bilio cwmni telegyfathrebu wedi cronni dros
ddegawd o ddyled dechnegol a gydnabuwyd yn anffurfiol ond na chafodd
erioed ei holrhain yn ffurfiol, gyda pheirianwyr yn dyfynnu "mae'r
peiriant bilio'n llanast" yn rheolaidd mewn ôl-drafodaethau heb unrhyw
ddilyniant. Mynnodd cyfarwyddwr peirianneg newydd fod pob tîm yn
adeiladu cronfa-waith dyled wedi'i meintioli, gan amcangyfrif cost
trwsio a chost cario ar gyfer pob eitem, a dyrannodd 15% sefydlog o
gapasiti peirianneg ar gyfer unioni dyled o hynny ymlaen. O fewn
blwyddyn, roedd y pum eitem cost-cario-uchaf, yn cynrychioli ffracsiwn
bach o'r gronfa-waith gyfan yn ôl cyfrif, wedi'u datrys, a gwellodd
cyfradd methiant newid (pwnc 2.10) ar gyfer defnyddiadau
cysylltiedig-â-bilio'n fesuradwy, gan ddangos effaith anghymesur
targedu'r eitemau cost-cario-uchaf yn gyntaf yn hytrach na gweithio
trwy'r gronfa-waith mewn trefn fympwyol.

**Llywodraeth.** Nid oedd system prosesu-data-craidd asiantaeth
ystadegau genedlaethol, a adeiladwyd yn wreiddiol dros ugain mlynedd
ynghynt, erioed wedi cael asesiad dyled ffurfiol er gwaethaf cydnabyddiaeth
anffurfiol eang ymhlith staff bod rhannau sylweddol yn fregus ac wedi'u
deall yn wael. Cynhyrchodd asesiad dyled strwythuredig, yn cyfuno
canfyddiadau dadansoddiad statig, data man-poeth, a chyfweliadau â'r
ychydig beirianwyr sy'n weddill oedd yn deall y cydrannau hynaf, gronfa-
waith wedi'i meintioli, wedi'i blaenoriaethu a gefnogodd yn uniongyrchol
gais cyllideb moderneiddio aml-flwyddyn. Yn allweddol, nododd yr asesiad
hefyd yn benodol nifer o gydrannau gwaddol sefydlog, anaml eu cyffwrdd
fel rhai rhesymol i'w gadael heb eu newid, gan osgoi ailysgrifennu
system-gyfan gormodol o eang a drud o blaid buddsoddiad wedi'i dargedu
yn yr ardaloedd penodol y dangosodd y data eu bod yn cario'r gost
barhaus uchaf.

## Achos busnes: cymhellion, ROI, a TCO

Cost gyfansymio osgowyd yw'r enillion ar reoli dyled dechnegol yn
fwriadol: mae pob llwybr byr heb ei drin yn gwneud newidiadau'r dyfodol
ychydig yn anos, ac mae'r effaith honno'n cyflymu heb ymyrraeth, gan
gynhyrchu yn y pen draw sylfaen cod mor fregus fel bod hyd yn oed
newidiadau syml yn dod yn araf ac yn beryglus. Mae'r enghraifft
telegyfathrebu uchod yn dangos yr enillion yn gonc: cynhyrchodd
targedu nifer fach o'r eitemau cost-cario-uchaf welliant cyflenwi ac
ansawdd mesuradwy, yn anghymesur â'r ffracsiwn cymedrol o'r gronfa-waith
gyfan yr oedd yr eitemau hynny'n ei gynrychioli.

Y capasiti gwarchodedig a ddyrannwyd i unioni, fel arfer 10% i 20% o
amser peirianneg, sy'n gost wirioneddol, weladwy sy'n cystadlu â
chyflymder nodwedd yn y tymor byr, yw cost cyfanswm perchnogaeth. Mae'r
gost honno'n werth ei thalu oherwydd bod y dewis arall, dyled heb ei
rheoli, gyfansymio, yn y pen draw'n costio llawer mwy mewn cyflenwi
arafach a chyfraddau diffyg uwch ar draws y sylfaen cod gyfan, nid dim
ond yr eitemau penodol a adawyd heb eu trin.

## Gwrth-batrymau a pheryglon

- **Dim cronfa-waith dyled weladwy, wedi'i holrhain:** mae dyled yn
  colli'r gystadleuaeth flaenoriaethu'n ddiofyn ac yn cyfansymio'n
  anweledig.
- **Hawliadau dyled amwys, heb eu meintioli:** yn anaml yn cystadlu'n
  dda yn erbyn ceisiadau nodwedd concrid, wedi'u meintioli mewn
  cynllunio.
- **Blaenoriaethu dyled yn ôl oedran neu gyfaint eiriolaeth yn hytrach
  nag effaith:** yn camgyfeirio capasiti unioni cyfyngedig.
- **Dim capasiti gwarchodedig ar gyfer unioni:** dim ond yn adweithiol,
  ar ôl argyfwng, y mae talu dyled i lawr yn digwydd, yn hytrach nag fel
  arfer rheolaidd, bwriadol.
- **Trin pob dyled fel un yr un mor werth ei thrwsio:** yn gwastraffu
  ymdrech ar eitemau effaith-isel tra bo eitemau cost-cario-uchel yn
  aros heb eu trin.
- **Gadael i ddyled eistedd yn ddiddiwedd ar gronfa-waith weithredol
  heb byth benderfynu ei bod yn barhaol:** yn awgrymu gwaith yn y
  dyfodol na fydd byth mewn gwirionedd yn digwydd ac yn llanast-io
  blaenoriaethu gwirioneddol.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Trafodir dyled dechnegol yn anffurfiol, heb
  gronfa-waith wedi'i holrhain na meintioli; mae'n colli'n gyson i waith
  nodweddion.
- **Lefel 2, Datblygu:** Mae rhai timau'n olrhain dyled yn anffurfiol,
  ond nid oes meintioli cyson, gwelededd traws-dîm, na chapasiti unioni
  gwarchodedig.
- **Lefel 3, Safoni:** Mae cronfa-waith dyled weladwy, wedi'i meintioli'n
  bodoli ar draws y sefydliad, gyda chapasiti unioni gwarchodedig wedi'i
  ddyrannu'n gyson.
- **Lefel 4, Rheoli:** Blaenoriaethir eitemau dyled yn ôl effaith wedi'i
  mesur (cost cario wedi'i chyfuno â throsiant), a dogfennir dyled a
  dderbynnir yn barhaol yn benodol yn hytrach na'i gadael yn amwys.
- **Lefel 5, Cerddorfaru:** Gall y sefydliad bwyntio at welliannau
  cyflenwi neu ansawdd penodol, mesuradwy wedi'u holrhain at unioni
  dyled wedi'i dargedu, ac mae rheoli dyled yn fewnbwn rheolaidd,
  ymddiriedol i benderfyniadau buddsoddi peirianneg ochr yn ochr â
  gwaith nodweddion.

## Syniadau ar gyfer trafodaeth

1. Beth yw ein heitem ddyled cost-cario-uchaf sengl ar hyn o bryd, a allem ei meintioli?
2. Pa ganran o'n capasiti sy'n mynd i unioni dyled mewn gwirionedd heddiw?
3. Pa eitem ddyled y dylem ei derbyn yn benodol fel un barhaol yn hytrach na'i gadael yn amwys ar ein cronfa-waith?
4. A yw ein cronfa-waith dyled wedi tyfu, wedi crebachu, neu wedi aros yn fflat dros y flwyddyn ddiwethaf?
5. Beth fyddai asesiad dyled wedi'i feintioli'n ei ddatgelu nad yw ein hymwybyddiaeth anffurfiol gyfredol yn ei ddal?

## Prif gasgliadau

- Mae dyled dechnegol yn **gyfaddawd rheoladwy, nid cyfrinach
  gywilyddus**; meintiolwch hi yn hytrach na'i gadael fel pryder amwys,
  wedi'i dan-flaenoriaethu'n barhaus.
- **Meintiolwch gost i'w thrwsio yn erbyn cost i'w chario** ar gyfer pob
  eitem fel ei bod yn cystadlu'n deg yn erbyn gwaith nodweddion.
- **Blaenoriaethwch yn ôl effaith** (cost cario wedi'i chyfuno â
  throsiant), nid oedran na chyfaint eiriolaeth.
- Dyrannwch **gapasiti unioni gwarchodedig, pwrpasol**, wedi'i
  benderfynu ymlaen llaw, gan fod dyled yn colli'r gystadleuaeth
  eitem-wrth-eitem yn erbyn gwaith nodweddion yn ddibynadwy fel arall.
- **Derbyniwch rywfaint o ddyled yn benodol fel un barhaol** lle mae'r
  gost i'w thrwsio'n fwy na'r gost i'w chario, yn hytrach na'i gadael yn
  amwys ar gronfa-waith weithredol.

## Cyfeiriadau a darllen pellach

- Cunningham, Ward, "The WyCash Portfolio Management System" (adroddiad
  profiad OOPSLA, 1992): tarddiad trosiad y ddyled dechnegol.
- *Managing Technical Debt: Reducing Friction in Software Development*,
  gan Philippe Kruchten, Robert Nord, ac Ipek Ozkaya (triniaeth
  gynhwysfawr o fesur a rheoli dyled dechnegol).
- *Refactoring: Improving the Design of Existing Code*, gan Martin
  Fowler (y technegau unioni y mae cronfa-waith dyled yn tynnu arnynt
  yn y pen draw).
- *Your Code as a Crime Scene*, gan Adam Tornhill (dadansoddiad
  man-poeth fel mewnbwn i flaenoriaethu dyled, pwnc 4.3).
