# 2.9 Metrigau pull request ac adolygu cod

## Trosolwg a chymhelliant

Fel arfer **[adolygu cod](https://en.wikipedia.org/wiki/Code_review)** yw'r
cyfrannwr amser-aros mwyaf sengl o fewn dadansoddiad amser cylch pwnc
2.6, ac ef hefyd yw'r cam sydd fwyaf uniongyrchol o dan reolaeth tîm ei
hun i'w wella, yn wahanol i dagfa platfform a rennir neu ddibyniaeth
allanol. Mae'r pwnc hwn yn ymdrin â'r metrigau penodol sy'n byw o fewn
cam yr adolygu: amser i'r adolygiad cyntaf, maint pull request, cyfrif
ailadroddiadau adolygu, a dosbarthiad llwyth adolygwyr, a sut i'w
defnyddio i wella cyflymder adolygu heb aberthu'r budd ansawdd
gwirioneddol y mae adolygu i fod i'w ddarparu.

Y perygl y mae'r pwnc hwn fwyaf effro iddo yw un nad yw'r llyfr hwn
wedi'i drafod yn uniongyrchol eto: gall optimeiddio cyflymder adolygu
erydu ansawdd adolygu'n dawel os dilynir yn ddiofal. Mae tîm sy'n haneru
ei amser-i'r-adolygiad-cyntaf trwy gymeradwyo popeth â stamp rwber wedi
gwella metrig tra'n dinistrio gwerth gwirioneddol yr arfer. Mae pob
argymhelliad yn y pwnc hwn wedi'i ysgrifennu â'r cyfnewidiad hwnnw mewn
golwg, oherwydd mae metrigau pull request ymhlith y rhai haws yn y llyfr
hwn i'w twyllo mewn ffordd sy'n edrych yn dda ar ddangosfwrdd tra'n
gwneud y sylfaen cod sylfaenol yn wirioneddol waeth.

I dimau mawr, mae metrigau adolygu'n datgelu problemau cydbwyso-llwyth
sydd fel arall yn anweledig: nifer fach o beirianwyr uwch yn amsugno
cyfran anghymesur o'r llwyth adolygu, tîm neu ardal sylfaen cod benodol
lle mae adolygiadau'n aros yn gyson, neu batrwm o pull requests
gorfawr sy'n gwneud adolygu trylwyr yn ymarferol amhosibl waeth pa mor
ddiwyd yw'r adolygwr. Mae'r patrymau hyn yn cyfansymio ar raddfa lawer
mwy nag ar dîm bach, lle gall pawb weld yr anghydbwysedd yn uniongyrchol
heb angen metrig i'w ddatgelu.

## Egwyddorion allweddol

- **Amser i'r adolygiad cyntaf fel arfer yw'r lifer mwyaf, nid
  trylwyredd yr adolygu ei hun.** Daw'r rhan fwyaf o'r oedi o pull
  request yn aros i gael ei edrych arno, nid o'r sgwrs adolygu yn cymryd
  amser hir unwaith y mae'n dechrau.
- **Mae pull requests llai'n cael eu hadolygu'n gyflymach ac yn fwy
  trylwyr, nid dim ond yn gyflymach.** Mae maint yn bwynt lifer ar gyfer
  cyflymder ac ansawdd ar yr un pryd.
- **Nid yw cyflymder adolygu ac ansawdd adolygu'n awtomatig mewn
  tensiwn, ond gellir eu masnachu'n ddiofal.** Gwarchodwch yn erbyn y
  fasnach honno'n benodol.
- **Mae anghydbwysedd llwyth adolygwyr yn gyffredin ac fel arfer yn
  anweledig heb fetrig.** Yn aml mae nifer fach o bobl yn amsugno cyfran
  anghymesur.
- **Mae'r metrigau hyn yn agored i'r perygl twyllo stamp-rwber.** Mae
  cymeradwyaeth gyflym heb wir graffu yn trechu holl bwrpas adolygu.

## Argymhellion

### Olrheiniwch amser i'r adolygiad cyntaf fel y prif fetrig cyflymder

Mesurwch y cyfnod o pull request yn agor hyd sylw sylweddol cyntaf
adolygwr neu gymeradwyaeth, wedi'i offeryno'n awtomatig o'ch platfform
rheoli fersiwn. Dyma fel arfer y cyfrannwr amser-aros dominyddol o fewn
cam yr adolygu (pwnc 2.5, pwnc 2.6), ac mae ei wella, trwy normau
neilltuo-adolygu cliriach, arferion hysbysu, neu flociau amser adolygu
penodedig, fel arfer yn cynhyrchu'r gwelliant sengl mwyaf sydd ar gael i
dîm i amser cylch cyffredinol.

### Olrheiniwch faint pull request ac annog newidiadau llai yn weithredol

Mesurwch linellau a newidiwyd neu ffeiliau a gyffyrddwyd fesul pull
request, a thriniwch faint canolrifol mawr yn barhaus fel arwydd sy'n
werth ei drafod yn uniongyrchol. Mae pull requests llai'n cael eu
hadolygu'n gyflymach, eu hadolygu'n fwy trylwyr (gall adolygwr ddal y
newid cyfan yn ei ben mewn gwirionedd), ac yn haws eu dadwneud os aiff
rhywbeth o'i le, gan gysylltu'n uniongyrchol yn ôl â'r egwyddor
maint-swp y tu ôl i amledd defnyddio ym mhwnc 2.10. Anogwch hollti
newidiadau mawr yn ddilyniant o pull requests llai, adolygadwy'n
annibynnol lle bynnag y mae'r gwaith yn caniatáu hynny.

### Monitro dosbarthiad llwyth adolygwyr yn benodol

Olrheiniwch nifer yr adolygiadau a gwblhawyd fesul person dros ffenestr
dreigl, a gwyliwch yn benodol am nifer fach o bobl yn amsugno cyfran
anghymesur. Mae'r patrwm hwn yn gyffredin, yn aml yn disgyn ar y
peirianwyr mwyaf profiadol neu ymddiriedol, ac yn creu tagfa (mae eu
argaeledd yn capio trwybwn adolygu'r tîm cyfan) a pherygl llosgi allan
(mae pwnc 3.2 yn ymdrin â metrigau llesiant yn fwy manwl) fel ei gilydd.
Cylchdrowch gyfrifoldeb adolygu'n fwriadol yn hytrach na gadael iddo
grynhoi'n ddiofal o gwmpas pwy bynnag sydd gyflymaf i ymateb.

### Gwarchodwch yn erbyn y perygl twyllo stamp-rwber yn benodol

Parejwch amser-i'r-adolygiad-cyntaf â signal ansawdd: cyfradd diffygion
neu ddigwyddiadau a olrheiniwyd yn ôl i newidiadau a gymeradwywyd heb
unrhyw sylwadau adolygu, neu gyfradd trwsiadau ôl-uno sydd eu hangen ar
gyfer cod a adolygwyd yn ddiweddar. Dylai tîm sy'n gwella cyflymder
adolygu trwy gymeradwyo heb wir graffu weld y gledr ddiogelwch hon yn
dirywio, sef union yr egwyddor parejo o bwnc 1.2 wedi'i chymhwyso i'r
teulu metrig penodol hwn. Peidiwch byth â mynd ar drywydd cyflymder
adolygu heb y gwrth-fetrig hwn mewn golwg.

### Defnyddiwch gyfrif ailadroddiadau adolygu i sbotio ffrithiant, nid i farnu unigolion

Gall nifer y rowndiau adolygu y mae pull request yn mynd trwyddynt cyn
uno arwyddo ffrithiant gwirioneddol, gofynion aneglur, anghytundeb am
ddull, disgwyliadau arddull anghyson, sy'n werth eu harchwilio ar lefel
y broses. Osgowch ddefnyddio'r rhif hwn i farnu awduron neu adolygwyr
unigol yn uniongyrchol; mae cyfrif ailadrodd uchel yn amlach yn signal
system neu gyfathrebu na signal personol, ac mae ei drin fel cerdyn
sgorio unigol yn peryglu union y drifft gwerthuso y mae pwnc 1.1 yn
rhybuddio yn ei erbyn.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Optimeiddio'n bur ar gyfer amser i'r adolygiad cyntaf | Signal cyflym, clir, hawdd ei offeryno | Gall gymell adolygu arwynebol, stamp-rwber os na chaiff ei warchod |
| Optimeiddio'n bur ar gyfer lleihau maint pull request | Yn gwella cyflymder a thrylwyredd ar yr un pryd | Nid yw pob gwaith yn hollti'n lân yn gynyddiadau bach |
| Cylchdroi llwyth adolygu'n gyfartal | Yn lleihau tagfa a pherygl llosgi allan | Gall arafu adolygu ar gyfer cod arbenigol, anodd ei adolygu sydd angen arbenigedd penodol |
| Crynhoi adolygu ymhlith peirianwyr uwch | Arbenigedd parth dwfn wedi'i gymhwyso'n gyson | Yn creu tagfa a pherygl llosgi allan dros amser |

Y tensiwn canolog yw **cyflymder yn erbyn dyfnder graffu**. Mae pob
techneg yn y pwnc hwn ar gyfer cyflymu adolygu, ymateb cyntaf
cyflymach, pull requests llai, llwyth adolygwyr mwy dosbarthedig, yn
cario rhywfaint o berygl o fasnachu gwir graffu i ffwrdd os dilynir heb
gledr ddiogelwch ansawdd y mae'r pwnc hwn yn ei hargymell. Datryswch y
tensiwn trwy barejo pob metrig cyflymder â signal ansawdd, wedi'i
olrhain dros yr un cyfnod, fel y gall tîm wahaniaethu gwelliant proses
gwirioneddol oddi wrth safon adolygu sy'n erydu'n dawel.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Beth yw ein hamser gwirioneddol i'r adolygiad cyntaf, a faint o'n
   hamser cylch cyffredinol y mae cam yr adolygu'n ei ddefnyddio?**
   Tynnwch y rhif gwirioneddol yn hytrach na dibynnu ar argraff; mae
   amser aros adolygu'n aml yn fwy nag y mae timau'n ei dybio, yn union
   oherwydd ei bod yn hawdd tanamcangyfrif amser a dreulir yn aros yn
   hytrach nag yn gweithio'n weithredol.

2. **Beth yw ein maint pull request canolrifol, a faint fyddai ein
   hoedi adolygu'n crebachu petai'r maint hwnnw'n gostwng?** Mae pull
   requests mawr yn arafach i'w hadolygu ac yn fwy tebygol o dderbyn
   adolygiad arwynebol yn syml oherwydd na all adolygwr ddal y cyfan yn
   ei ben ar unwaith. Edrychwch ar eich dosbarthiad maint gwirioneddol,
   nid dim ond y canolrif.

3. **A yw llwyth adolygu wedi'i grynhoi ymhlith nifer fach o bobl, a beth
   fyddai'n digwydd i'n trwybwn adolygu petai un ohonynt yn anargaeledig
   am bythefnos?** Mae'r cwestiwn hwn yn datgelu perygl tagfa a pherygl
   llosgi allan ar yr un pryd. Tynnwch ddata llwyth-adolygwr
   gwirioneddol yn hytrach na dibynnu ar argraff.

4. **A ydym erioed wedi gwella metrig cyflymder-adolygu mewn ffordd a
   leihaodd, o edrych yn ôl, wir graffu?** Byddwch yn onest yma; dyma
   union y perygl stamp-rwber y mae'r pwnc hwn yn ei enwi, ac mae'n
   hawdd llithro iddo heb unrhyw benderfyniad bwriadol i wneud hynny.

5. **Beth fel arfer y mae cyfrif ailadrodd adolygu uchel yn ei
   arwyddo ar ein tîm: anghytundeb gwirioneddol, gofynion aneglur, neu
   ddisgwyliadau arddull anghyson?** Edrychwch ar sampl o pull requests
   â chyfrifon ailadrodd anarferol o uchel a diagnoswch y patrwm
   gwirioneddol, yn hytrach na thybio ei fod yn adlewyrchu'n wael ar
   naill ai'r awdur neu'r adolygwr.

6. **A oes gennym gledr ddiogelwch ansawdd wedi'i pharejo â'n metrigau
   cyflymder-adolygu, neu a ydym yn olrhain cyflymder ar wahân?** Os
   yw'r ateb gonest yn nodi nad oes cledr ddiogelwch o'r fath yn
   bodoli, mae hynny'n fwlch sy'n werth ei gau cyn gwthio cyflymder
   adolygu ymhellach, yn ôl egwyddor parejo pwnc 1.2.

## Golwg sector

**Cwmni newydd.** Mae adolygu'n aml yn gyflym yn ddiofal gyda thîm bach,
weithiau bron yn rhy gyflym, adolygu un-cymeradwywr â graffu lleiaf
oherwydd bod pawb yn ymddiried yn ei gilydd. Y perygl i'w wylio wrth i'r
tîm dyfu yw ansawdd adolygu heb raddio ochr yn ochr â maint y tîm,
oherwydd nid yw ymddiriedaeth anffurfiol a weithiodd i bum peiriannydd
yn gweithio'n awtomatig i hanner cant.

**Busnes bach.** Mae'r rhan fwyaf o blatfformau rheoli fersiwn yn
adrodd ystadegau amser-i-uno a chyfrif-adolygu allan o'r bocs; defnyddiwch
y rhain yn hytrach na chodi offeryno pwrpasol. Y ddisgyblaeth
bwysicaf sy'n werth ei mabwysiadu yw sylwi'n syml a yw llwyth adolygu
wedi crynhoi'n dawel ar un neu ddau berson wrth i'r tîm dyfu.

**Menter.** Mae anghydbwysedd llwyth adolygwyr a thagfeydd
gwybodaeth-arbenigol yn arbennig o gyffredin yma, lle gall arbenigedd
parth dwfn mewn system dyngedfennol grynhoi cyfrifoldeb adolygu ar grŵp
bach waeth beth fo maint y tîm. Buddsoddwch mewn rhannu gwybodaeth
bwriadol a chylchdroi adolygu i ledaenu arbenigedd, gan leihau'r dagfa a
pherygl ffactor-bws yr arbenigedd hwnnw'n byw mewn rhy ychydig o bobl.

**Llywodraeth.** Mae prosesau adolygu yma'n aml yn cario pwysau cydymffurfio
ochr yn ochr â nodau ansawdd, sy'n gallu gwneud pull requests yn fwy ac
adolygiadau'n arafach yn ôl dyluniad. Lle mae gofynion cydymffurfio
gwirioneddol yn galw am adolygu trylwyr, canolbwyntiwch ymdrech
gwella ar leihau amser aros (neilltuo adolygu cyflymach, triniaeth
gliriach) yn hytrach na chyfaddawdu dyfnder gwirioneddol yr adolygu, a
dogfennwch y cyfnewidiad yn benodol os oes rhaid i graffu aros yn drwm am
resymau rheoleiddiol.

## Enghreifftiau

**Menter.** Canfu sefydliad peirianneg cwmni seiberddiogelwch fod
llond llaw o beirianwyr pennaf yn cwblhau dros 40% o'r holl adolygiadau
cod ar draws sefydliad dau gant o bobl, anghydbwysedd na wnaeth neb ei
fesur yn uniongyrchol tan i ddata llwyth-adolygwr gael ei dynnu. Roedd y
crynhoad hwn yn dagfa, gan fod argaeledd y peirianwyr hynny'n capio
trwybwn adolygu ar gyfer y sefydliad cyfan, a hefyd yn berygl llosgi
allan a nodwyd ar wahân gan arolwg ymgysylltu (pwnc 3.2). Cyflwynodd
y sefydliad raglen cylchdroi-adolygu strwythuredig wedi'i pharejo â
sesiynau rhannu gwybodaeth wedi'u targedu, ac o fewn dau chwarter roedd
llwyth adolygu wedi lledaenu ar draws grŵp llawer ehangach, gydag amser
i'r adolygiad cyntaf yn gwella fel sgil-effaith uniongyrchol o'r dagfa
leihaedig.

**Llywodraeth.** Gosododd tîm peirianneg awdurdod treth, dan bwysau i
wella cyflymder cyflenwi, darged i haneru amser i'r adolygiad cyntaf. O
fewn un chwarter, cyrhaeddwyd y targed, ond canfu archwiliad ansawdd
dilynol godiad sydyn mewn pull requests trwsio-diffyg ôl-uno, wedi'u
crynhoi mewn newidiadau a gymeradwywyd â sylw byr, sengl. Parejodd
ateb y tîm y targed cyflymder â chledr ddiogelwch ansawdd benodol,
cyfradd trwsiadau ôl-uno sydd eu hangen o fewn pythefnos i adolygiad, ac
ail-hyfforddwyd y tîm ar yr hyn yr oedd adolygiad sylweddol yn ei olygu
mewn gwirionedd, gan adfer gwir graffu tra'n cadw'r rhan fwyaf o'r
gwelliant cyflymder a ddaeth o neilltuo adolygu gwell a meintiau pull
request llai.

## Achos busnes: cymhellion, ROI, a TCO

Y ffordd o gyflenwi'n gyflymach heb aberthu ansawdd yw'r enillion ar
fetrigau adolygu wedi'u rheoli'n dda, sy'n gyfuniad prin: mae'r rhan
fwyaf o welliannau cyflenwi'n masnachu cyflymder yn erbyn perygl yn
rhywle, ond mae gwelliannau cam-adolygu, pull requests llai, dosbarthiad
llwyth gwell, ymateb cyntaf cyflymach, yn gwella'r ddau'n wirioneddol ar
yr un pryd pan ddilynir gyda'r gledr ddiogelwch ansawdd y mae'r pwnc
hon yn ei hargymell. Mae'r enghraifft seiberddiogelwch uchod yn nodweddiadol:
gwellodd trwsio tagfa gyflymder tra bo ansawdd adolygu sylfaenol, os
rhywbeth, wedi gwella wrth i arbenigedd ledaenu'n ehangach.

Mae cost cyfanswm perchnogaeth yn isel: daw'r rhan fwyaf o'r metrigau
hyn yn uniongyrchol o ddata platfform rheoli fersiwn presennol gyda
lleiafswm o offeryno ychwanegol, ac mae'r newidiadau proses y maent yn
pwyntio tuag atynt, cylchdroi adolygu, annog pull requests llai, yn
costio disgyblaeth yn bennaf yn hytrach na buddsoddiad offer.

## Gwrth-batrymau a pheryglon

- **Optimeiddio amser i'r adolygiad cyntaf heb gledr ddiogelwch ansawdd
  wedi'i pharejo:** yn gwahodd cymeradwyaeth stamp-rwber sy'n trechu
  pwrpas adolygu.
- **Anwybyddu crynhoad llwyth adolygwyr:** yn creu tagfa a pherygl
  llosgi allan sy'n aros yn anweledig tan ei fesur.
- **Trin cyfrif ailadroddiadau adolygu fel cerdyn sgorio unigol:** yn
  amlach yn signal system neu gyfathrebu na signal personol.
- **Derbyn pull requests mawr parhaus fel rhai anochel:** gall y rhan
  fwyaf o newidiadau mawr hollti ymhellach nag y mae timau'n ei dybio'n
  gyntaf.
- **Cymhwyso dyfnder adolygu unffurf waeth beth fo perygl y newid:** yn
  gwastraffu graffu ar newidiadau perygl-isel tra'n danadolygu rhai
  perygl-uchel o bosibl.
- **Mesur cyflymder adolygu ond byth yn gwirio a wnaeth gwir graffu
  ddirywio ochr yn ochr ag ef:** y ffordd fwyaf cyffredin y mae'r teulu
  metrig hwn yn cael ei dwyllo'n anfwriadol.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Ni olrheinir metrigau adolygu; mae dosbarthiad
  llwyth adolygu a maint pull request yn anweledig.
- **Lefel 2, Datblygu:** Mae rhywfaint o ddata cyflymder-adolygu'n bodoli
  o ddiofyn platfform, ond nid oes cledr ddiogelwch ansawdd na rheolaeth
  weithredol o lwyth adolygwyr.
- **Lefel 3, Safoni:** Olrheinir amser i'r adolygiad cyntaf, maint pull
  request, a llwyth adolygwyr yn gyson, gyda chledr ddiogelwch ansawdd
  benodol wedi'i pharejo yn erbyn gwelliannau cyflymder.
- **Lefel 4, Rheoli:** Ailgydbwysir llwyth adolygwyr yn weithredol trwy
  gylchdroi a rhannu gwybodaeth; archwilir patrymau cyfrif-ailadrodd ar
  lefel y broses yn hytrach nag ar lefel yr unigolyn.
- **Lefel 5, Cerddorfaru:** Mae metrigau cam-adolygu'n llywio buddsoddiad
  proses yn uniongyrchol, a gall y sefydliad ddangos gwelliant
  cydamserol mewn cyflymder adolygu a chanlyniadau ansawdd wedi'u
  cysylltu ag adolygu dros gyfnod parhaus.

## Syniadau ar gyfer trafodaeth

1. Beth yw ein hamser canolrifol cyfredol i'r adolygiad cyntaf, ac i ble mae'r amser hwnnw'n mynd mewn gwirionedd?
2. A yw ein llwyth adolygu wedi'i grynhoi ar nifer fach o bobl, a beth yw'r perygl os yw un yn anargaeledig?
3. A ydym erioed wedi gwella cyflymder adolygu ar draul gwir graffu, hyd yn oed yn anfwriadol?
4. Beth yw ein maint pull request canolrifol, a faint yn llai y gallai'r rhan fwyaf o newidiadau fod mewn gwirionedd?
5. A ydym yn trin cyfrif ailadrodd adolygu uchel fel signal system neu farn unigol?

## Prif gasgliadau

- **Amser i'r adolygiad cyntaf** fel arfer yw'r lifer sengl mwyaf o
  fewn cam yr adolygu, yn fwy na hyd y sgwrs adolygu ei hun.
- Mae **pull requests llai** yn gwella cyflymder a thrylwyredd adolygu
  ar yr un pryd.
- Mae **anghydbwysedd llwyth adolygwyr** yn gyffredin ac fel arfer yn
  anweledig heb fesuriad uniongyrchol; mae'n creu tagfa a pherygl llosgi
  allan fel ei gilydd.
- Parejwch bob metrig cyflymder-adolygu â **chledr ddiogelwch ansawdd**
  benodol i ddal y perygl twyllo stamp-rwber y mae'r teulu metrig hwn yn
  arbennig o dueddol iddo.
- Defnyddiwch **gyfrif ailadroddiadau adolygu** i ddiagnosio ffrithiant
  lefel-system, nid i farnu awduron neu adolygwyr unigol.

## Cyfeiriadau a darllen pellach

- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (arferion adolygu cod a'u perthynas â
  pherfformiad cyflenwi).
- Ymchwil *Modern Code Review* gan Alberto Bacchelli a Christian Bird
  (astudiaeth empirig o arferion adolygu cod ar raddfa).
- *Peer Reviews in Software: A Practical Guide*, gan Karl E. Wiegers
  (dylunio proses adolygu a'i gyfnewidiadau).
- *The Principles of Product Development Flow*, gan Donald G. Reinertsen
  (rhesymu maint-swp wedi'i gymhwyso i faint pull request).
