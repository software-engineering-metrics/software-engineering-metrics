# 3.4 Metrigau gweithgarwch a'u cyfyngiadau

## Trosolwg a chymhelliant

Mae **Gweithgarwch**, yr A yn SPACE (pennod 3.1), yn cyfrif cyfaint y
gwaith peirianneg y gellir ei arsylwi o delemetreg system: ymrwymiadau,
pull requests wedi'u hagor, llinellau o god wedi'u newid, sylwadau
adolygu cod a adawyd. Dyma'r dimensiwn SPACE hawsaf i'w fesur, gan fod
pob un o'r digwyddiadau hyn eisoes wedi'i logio'n awtomatig gan offer y
mae timau peirianneg yn eu defnyddio bob dydd, a'r hawster mesur hwnnw
yw'n union yr hyn sy'n gwneud y dimensiwn hwn y mwyaf peryglus i'w
or-bwysoli. Mae gweithgarwch yn signal gwirioneddol, dilys pan gaiff ei
ddefnyddio'n ofalus. Wedi'i ddefnyddio fel dirprwy cynhyrchedd
annibynnol, dyma'r teulu metrig sengl mwyaf twylledig, mwyaf
camarweiniol yn hanes cyfan mesur
**[peirianneg meddalwedd](https://en.wikipedia.org/wiki/Software_engineering)**.

Y broblem graidd yw bod gweithgarwch yn mesur symudiad, nid gwerth. Nid
yw cyfrif ymrwymiad yn gwahaniaethu rhwng ymrwymiad a ddatryswyd
problem anodd yn gain ac ymrwymiad a hollodd un newid ystyrlon yn bump
i edrych yn fwy cynhyrchiol (twyllo amnewid pennod 1.2, wedi'i gymhwyso'n
uniongyrchol i'r teulu metrig hwn). Mae llinellau o god a newidiwyd yn
gwobrwyo geiriogrwydd dros y sgil llawer mwy gwerthfawr o ddileu cod
diangen. Mae peiriannydd sy'n treulio diwrnod cyfan mewn myfyrdod dwfn,
di-dor cyn ysgrifennu deg llinell gain, wedi'u profi'n dda yn edrych yn
llai "gweithgar" gan y metrigau hyn na pheiriannydd sy'n ymrwymo
newidiadau bas, heb eu hadolygu bob ugain munud, er bod y cyntaf yn
aml iawn yn cynhyrchu llawer mwy o werth gwirioneddol.

I dimau mawr, mae'r demtasiwn i ddefnyddio metrigau gweithgarwch ar
gyfer gwerthusiad unigol yn gyson ac wedi'i ddogfennu'n dda, oherwydd
bod gweithgarwch yn hawdd ei briodoli i berson penodol ac yn hawdd ei
gyfrifo'n awtomatig, yn wahanol i'r signalau anos, mwy gonest yn y
dimensiynau SPACE eraill. Mae'r bennod hon yn bodoli'n benodol i enwi'r
demtasiwn honno a rhoi iaith a thystiolaeth i dimau ei gwrthsefyll,
oherwydd unwaith y mae sefydliad yn dechrau graddio peirianwyr yn
unigol yn ôl cyfrif ymrwymiad neu linellau o god, mae'r niwed i
gydweithio, ansawdd cod, ac ysbryd wedi'i ddogfennu'n dda ac yn anodd ei
wrthdroi.

## Egwyddorion allweddol

- **Mae gweithgarwch yn mesur symudiad, nid gwerth.** Mae'n signal
  cyd-destunol dilys, byth yn ddirprwy cynhyrchedd annibynnol.
- **Dyma'r teulu metrig a gamddefnyddiwyd fwyaf yn hanesyddol yn
  mesur peirianneg meddalwedd.** Trinwch yr hanes hwnnw fel rhybudd, nid
  cyd-ddigwyddiad.
- **Mae graddio gweithgarwch unigol bron bob amser yn niweidiol.** Mae'n
  niweidio cydweithio, yn gwobrwyo gwaith-prysur gweladwy, ac yn
  gwahodd twyllo bron ar unwaith.
- **Mae data gweithgarwch fwyaf defnyddiol yn gyfanredol, fel cyd-destun
  ar gyfer dimensiynau eraill,** nid fel signal annibynnol am unrhyw un
  person neu dîm.
- **Mae gwaith dwfn, gwerthfawr yn aml yn edrych yn dawel ar
  ddangosfwrdd gweithgarwch.** Mae'r teulu metrig yn strwythurol
  ragfarnllyd yn erbyn union y math o feddwl sy'n cynhyrchu'r
  canlyniadau peirianneg gorau.

## Argymhellion

### Peidiwch byth â graddio na gwerthuso unigolion yn ôl cyfrifon gweithgarwch crai

Dyma'r rheol anoddaf, bwysicaf sengl yn y bennod hon. Ni ddylai cyfrif
ymrwymiad, llinellau o god, na chyfrif pull request byth ymddangos mewn
adolygiad perfformiad unigol, graddiad cymharol, nac unrhyw gyd-destun
lle mae cydnabyddiaeth, safle, neu enw da peiriannydd yn dibynnu ar y
rhif. Mae hyn yn dilyn yn uniongyrchol o egwyddor amlygiad-cymhelliant
pennod 1.2: y foment y daw gweithgarwch yn fetrig unigol wedi'i gymell,
mae twyllo'n dilyn bron ar unwaith, ac mae'r ymddygiad canlyniadol,
padio ymrwymiadau, hollti newidiadau'n ddibwys, osgoi gwaith dwfn,
di-lachar sy'n cynhyrchu ychydig o ddigwyddiadau gweladwy, yn niweidio'r
sefydliad yn weithredol.

### Defnyddiwch ddata gweithgarwch yn gyfanredol, fel cyd-destun, nid fel dyfarniad

Mae data gweithgarwch yn dod yn wirioneddol ddefnyddiol pan gaiff ei
gyfanredu ar lefel y tîm a'i ddarllen ochr yn ochr â'r dimensiynau SPACE
eraill: gallai gostyngiad sydyn mewn gweithgarwch ymrwymiad lefel-tîm
sy'n cyd-daro â chodiad mewn boddhad ddangos bod y tîm o'r diwedd wedi
cael lle i anadlu i feddwl yn ddwfn a thalu dyled dechnegol i lawr,
patrwm cadarnhaol, nid un negyddol. Wedi'i ddarllen ar wahân, mae'r un
gostyngiad yn edrych yn frawychus. Cyd-destun o'r dimensiynau eraill yw'r
hyn sy'n gwneud data gweithgarwch yn ddehonglrwyd yn hytrach na
chamarweiniol.

### Ffafriwch signalau gweithgarwch cyfagos-ansawdd dros gyfaint crai

Lle mae data gweithgarwch yn ddefnyddiol o gwbl, ffafriwch signalau wedi'u
haddasu ar gyfer ansawdd dros gyfrifon crai: maint pull request yn
gymharol i ddyfnder adolygu (pennod 2.9), neu gymhareb cod newydd i god
a ddileuwyd, a all ddatgelu a yw tîm yn cronni cymhlethdod neu'n
symleiddio'n weithredol. Mae'r signalau wedi'u haddasu hyn yn dal yn
ddata dimensiwn-gweithgarwch ond yn gwrthsefyll y twyllo mwyaf bras y
mae cyfrifon crai'n ei wahodd.

### Gwyliwch yn benodol am y patrwm twyllo-amnewid mewn data gweithgarwch

Y ffordd fwyaf cyffredin y mae metrigau gweithgarwch yn cael eu twyllo
yw union batrwm amnewid pennod 1.2: hollti gwaith gwirioneddol
ystyrlon yn nifer o ddigwyddiadau bach, dibwys i chwyddo cyfrif. Os yw
amlder ymrwymiad neu pull request yn codi tra bo cymhlethdod neu faint
sylfaenol y newidiadau'n gostwng yn sydyn, archwiliwch cyn rhoi clod am
welliant cynhyrchedd gwirioneddol, gan ddefnyddio'r un ddisgyblaeth
ddiagnostig y mae pennod 2.10 yn ei hargymell ar gyfer amledd defnyddio.

### Enwch ac anogwch yn erbyn theatr gweithgarwch yn benodol

Mae **theatr gweithgarwch** yn waith a berfformir, yn ymwybodol neu
beidio, yn bennaf oherwydd ei fod yn weladwy ac yn gyfrifadwy yn hytrach
na'i fod yn werthfawr: ymrwymiadau bach aml, gweithgarwch canol-nos
amlwg, neu brysurdeb gweladwy mewn sianeli a rennir. Mae enwi'r patrwm
hwn yn benodol i'ch tîm, a bod yn dryloyw nad yw arweinyddiaeth yn
defnyddio gweithgarwch crai i farnu cyfraniad, yn dileu llawer o'r
cymhelliant iddo ddigwydd yn y lle cyntaf.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Graddiad gweithgarwch unigol | Syml, hawdd ei gyfrifo, yn teimlo'n uniongyrchol weithredadwy | Wedi'i dwyllo bron ar unwaith; yn niweidio cydweithio ac ysbryd; yn mesur y peth anghywir |
| Dim mesuriad gweithgarwch o gwbl | Yn osgoi'r perygl camddefnydd yn gyfan gwbl | Yn colli signal cyd-destunol gwirioneddol ddefnyddiol ar gyfer sbotio patrymau lefel-tîm |
| Gweithgarwch cyfanredol lefel-tîm, wedi'i ddarllen mewn cyd-destun | Yn darparu cyd-destun defnyddiol heb berygl unigol | Angen disgyblaeth i'w ddehongli ochr yn ochr â dimensiynau eraill yn hytrach nag ar wahân |
| Signalau gweithgarwch wedi'u haddasu ar gyfer ansawdd | Yn gwrthsefyll y twyllo cyfrif-crai mwyaf bras | Mwy cymhleth i'w cyfrifo a'u hesbonio na chyfrif syml |

Y tensiwn canolog yw **defnyddioldeb yn erbyn perygl camddefnydd**. Mae
data gweithgarwch, wedi'i ddarllen yn ofalus yn gyfanredol ac mewn
cyd-destun, yn wirioneddol ddefnyddiol ar gyfer sbotio patrymau fel
cyflymder anghynaliadwy neu dîm sy'n canfod lle'n dawel i fynd i'r
afael â dyled dechnegol. Mae'r un data, wedi'i ddefnyddio fel cerdyn
sgorio unigol, bron yn gyffredinol niweidiol. Datryswch y tensiwn nid
trwy osgoi data gweithgarwch yn gyfan gwbl ond trwy adeiladu rheol
sefydliadol galed yn erbyn defnydd unigol, tra'n caniatáu a hyd yn oed
annog defnydd meddylgar, cyd-destunol lefel-tîm.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A oes unrhyw un yn ein sefydliad erioed wedi cael ei werthuso, yn
   ffurfiol neu'n anffurfiol, gan ddefnyddio cyfrif gweithgarwch crai fel
   ymrwymiadau neu linellau o god?** Gofynnwch hyn yn uniongyrchol a
   byddwch yn barod am ateb anghyfforddus ond angenrheidiol; mae'r
   camddefnydd hwn yn aml yn digwydd yn dawel, trwy sylw achlysurol gan
   reolwr, heb byth ddod yn bolisi swyddogol.

2. **Sut olwg fyddai ar theatr gweithgarwch ar ein tîm yn benodol, ac a
   ydym wedi gweld arwyddion ohoni?** Mae enwi'r ffurf benodol,
   gredadwy y gallai'r patrwm hwn ei chymryd ar eich tîm eich hun yn ei
   gwneud yn llawer haws ei adnabod petai'n dechrau digwydd.

3. **Pan fydd ein data gweithgarwch lefel-tîm yn symud, a ydym yn ei
   ddehongli ochr yn ochr â'r dimensiynau SPACE eraill, neu ar wahân?**
   Mae gostyngiad mewn gweithgarwch wedi'i ddarllen ar wahân yn edrych
   yn bryderus; gall yr un gostyngiad wedi'i ddarllen ochr yn ochr â
   gwelliant boddhad neu berfformiad edrych fel patrwm gwirioneddol
   gadarnhaol. Gwiriwch eich arfer adolygu gwirioneddol yn erbyn y
   gwahaniaeth hwn.

4. **A ydym erioed wedi gweld cynnydd mewn amlder ymrwymiad neu pull
   request ynghyd â maint newid cyfartalog crebachu, gan awgrymu hollti
   dibwys yn hytrach na chynnydd cynhyrchedd gwirioneddol?** Tynnwch
   ddata gwirioneddol a gwiriwch am y patrwm twyllo-amnewid penodol
   hwn.

5. **Sut ydym yn siarad ar hyn o bryd am "pwy sy'n cyfrannu fwyaf" ar ein
   tîm, ac a yw'r sgwrs honno'n pwyso'n oblygedig ar ddata gweithgarwch
   hyd yn oed heb fetrig ffurfiol?** Gall gogwydd anffurfiol, heb ei
   fesur tuag at brysurdeb gweladwy lunio canfyddiad a gwobr hyd yn oed
   heb bolisi seiliedig-ar-weithgarwch penodol; dewch â hyn i'r wyneb yn
   onest.

6. **Sut olwg sydd ar waith gwirioneddol werthfawr ond tawel, meddwl
   dwfn, dylunio gofalus, mentora, ar ein tîm, a sut ydym yn sicrhau ei
   fod yn cael ei gydnabod er gwaethaf cynhyrchu ychydig o ddata
   gweithgarwch gweladwy?** Mae'r cwestiwn hwn yn gymar cadarnhaol i'r
   rhai blaenorol: mae enwi sut olwg sydd ar waith tawel, da yn helpu i'w
   ddiogelu rhag cael ei anwybyddu o blaid gwaith uwch ei sŵn, mwy
   cyfrifadwy.

## Golwg sector

**Cwmni newydd.** Gyda thîm bach, cydweithredol yn agos, mae data
gweithgarwch fel arfer yn weladwy heb angen dangosfwrdd o gwbl, ac mae'r
perygl graddio-unigol y mae'r bennod hon yn rhybuddio yn ei erbyn yn
llai tebygol yn syml oherwydd bod pawb eisoes yn gwybod ar beth y mae
pawb arall yn gweithio. Y perygl yn lle hynny yw sylfaenydd yn ffafrio
ymddygiad "prysur" gweladwy yn ddiarwybod wrth wneud penderfyniadau
cyflogi neu ecwiti cynnar.

**Busnes bach.** Mae data gweithgarwch o'ch offer presennol yn iawn i
gipolwg arno am synnwyr cyffredinol o drwybwn tîm, ond gwrthsefyllwch ei
ddefnyddio i gymharu cyfranwyr unigol yn uniongyrchol; mae gwerth
gwirioneddol tîm bach yn aml yn crynhoi mewn ychydig o bobl sy'n gwneud
gwaith tawel, effaith-uchel y byddai golwg cyfrif-ymrwymiad yn ei
danbrisio'n systematig.

**Menter.** Dyma lle mae'r demtasiwn graddio-unigol gryfaf ac fwyaf
niweidiol, oherwydd data gweithgarwch yw'r signal hawsaf i'w dynnu ar
gyfer proses adolygu perfformiad sy'n cwmpasu miloedd o beirianwyr, ac
mae'r pwysau i ddod o hyd i *ryw* fewnbwn meintiol yn wirioneddol.
Adeiladwch bolisi penodol, wedi'i gyfathrebu, wedi'i orfodi yn erbyn
graddio gweithgarwch unigol, ac archwiliwch arferion adolygu-perfformiad
yn gyfnodol i gadarnhau bod y polisi'n cael ei ddilyn mewn gwirionedd,
nid dim ond ei ddatgan.

**Llywodraeth.** Gall metrigau gweithgarwch fod yn ddeniadol i'w
dyfynnu mewn adroddiad cyhoeddus fel tystiolaeth o gynhyrchedd ("deng
mil o ymrwymiadau eleni"), ond mae'r math hwn o bennawd bron yn ddiystyr
ac gall wahodd union y craffu anghywir unwaith y bydd adolygydd
gwybodus yn nodi nad yw gweithgarwch crai'n dweud dim am ganlyniadau.
Adroddwch ddata canlyniad a pherfformiad (pennod 3.3) yn lle hynny, ac
osgowch gyfrifon gweithgarwch mewn unrhyw gyfathrebu allanol-wynebedig.

## Enghreifftiau

**Menter.** Roedd arweinyddiaeth peirianneg cwmni meddalwedd, heb bolisi
ffurfiol, wedi dechrau cyfeirio'n anffurfiol at ddata amlder-ymrwymiad
unigol mewn trafodaethau dyrchafiad. Canfu adolygiad mewnol, wedi'i
sbarduno gan brosiect dadansoddi-traul-staff diberthynas, fod
peirianwyr yn gweithio ar systemau mwyaf cymhleth, gwerth-uchaf y
cwmni, oedd angen cyfnodau hir o waith dylunio gofalus cyn ysgrifennu
unrhyw god, â chyfrifon ymrwymiad is yn systematig na pheirianwyr ar
systemau symlach, mwy cynyddrannol eu datblygiad, ac yn cael eu
tangyfrif yn gynnil mewn sgyrsiau dyrchafiad o ganlyniad. Cyhoeddodd
arweinyddiaeth bolisi penodol, wedi'i gyfathrebu, yn gwahardd
cyfeiriadau cyfrif-gweithgarwch mewn trafodaethau perfformiad a
dyrchafiad, a symudodd dystiolaeth dyrchafiad tuag at ddull perfformiad
aml-signal pennod 3.3.

**Llywodraeth.** Cynigiodd asiantaeth gwasanaethau digidol, dan bwysau i
ddangos cynhyrchedd i bwyllgor goruchwylio deddfwriaethol, yn wreiddiol
adrodd cyfanswm ymrwymiadau a llinellau o god a ysgrifennwyd ar draws ei
rhaglen beirianneg fel tystiolaeth o werth a gyflenwyd. Gwrthwynebodd
ymgynghorydd technegol mewnol, gan nodi'n gywir bod y fframio hwn yn
gwahodd union y craffu anghywir, gan y gallai aelod pwyllgor
llythrennog yn dechnegol nodi'n hawdd nad yw cyfaint cod crai'n dweud
dim am a weithiodd y cod neu a oedd yn bwysig. Defnyddiodd adroddiad
diwygiedig yr asiantaeth fetrigau canlyniad yn lle hynny (pennod 5.3):
gostyngiad mewn gwallau a adroddwyd gan ddinasyddion a chynnydd mewn
cwblhau hunanwasanaeth llwyddiannus, a safodd i fyny'n well o dan
gwestiynu'r pwyllgor na fyddai'r rhifau gweithgarwch wedi'i wneud.

## Achos busnes: cymhellion, ROI, a TCO

Niwed osgowyd yw'r enillion ar gael metrigau gweithgarwch yn iawn, gan
eu defnyddio'n gyd-destunol yn hytrach nag fel cardiau sgorio unigol:
mae sefydliadau sy'n graddio peirianwyr yn unigol yn ôl gweithgarwch yn
gweld ymddygiad twyllo, cydweithio lleihaol (peirianwyr yn gwarchod eu
hallbwn gweladwy eu hunain yn hytrach na helpu cydweithiwr), a rhagfarn
systematig yn erbyn y gwaith dwfn, effaith-uchel sy'n aml yn cynhyrchu'r
gwerth mwyaf tra'n cynhyrchu'r lleiaf o weithgarwch gweladwy'n
ddibynadwy. Mae gwrthdroi'r niwed hwnnw, unwaith y bydd wedi ymwreiddio
mewn diwylliant adolygu-perfformiad, yn wirioneddol anodd ac araf.

Disgyblaeth sefydliadol yn bennaf yw cost cyfanswm osgoi'r trap hwn:
polisi penodol, wedi'i orfodi'n gyson, yn erbyn graddio gweithgarwch
unigol, ac ymrwymiad i fuddsoddi yn y mesuriad perfformiad anos, mwy
gonest a ddisgrifir ym mhennod 3.3 yn lle hynny. Mae'r ddisgyblaeth
honno'n costio llai na'r penderfyniadau dyrchafiad camgyfeiriedig, y
cydweithio niweidiedig, a'r ymddygiad twyllo y mae metrigau gweithgarwch
unigol yn eu cynhyrchu'n ddibynadwy dros amser.

## Gwrth-batrymau a pheryglon

- **Graddio unigol yn ôl cyfrif ymrwymiad neu linellau o god:** y
  camddefnydd sengl mwyaf niweidiol, mwyaf cyffredin yn hanesyddol yn y
  llyfr cyfan hwn.
- **Theatr gweithgarwch:** gwaith a berfformir yn bennaf ar gyfer
  gwelededd yn hytrach na gwerth, ymateb rhagweladwy'n gyfan gwbl i
  werthusiad seiliedig-ar-weithgarwch.
- **Dehongli gostyngiad gweithgarwch lefel-tîm ar wahân, heb wirio'r
  dimensiynau SPACE eraill:** gall gamgymryd patrwm gwirioneddol
  gadarnhaol am un pryderus.
- **Dyfynnu cyfrifon gweithgarwch crai mewn cyfathrebu allanol neu
  arweinyddiaeth-wynebedig:** yn gwahodd union y craffu anghywir ac yn
  dweud ychydig am werth gwirioneddol.
- **Tanbrisio'n systematig waith dwfn, gofalus sy'n cynhyrchu ychydig o
  ddigwyddiadau gweladwy:** rhagfarn strwythurol wedi'i choginio i mewn
  i'r teulu metrig cyfan hwn.
- **Gogwydd gweithgarwch anffurfiol, heb bolisi'n ymgripian i mewn i
  sgyrsiau dyrchafiad neu adolygu:** niweidiol hyd yn oed heb fetrig
  swyddogol y tu ôl iddo.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Defnyddir metrigau gweithgarwch, yn ffurfiol
  neu'n anffurfiol, i werthuso neu raddio unigolion, heb ymwybyddiaeth
  o'r perygl.
- **Lefel 2, Datblygu:** Mae rhywfaint o ymwybyddiaeth o'r perygl yn
  bodoli, ond nid oes polisi penodol yn atal data gweithgarwch rhag
  dylanwadu'n anffurfiol ar adolygiadau neu drafodaethau dyrchafiad.
- **Lefel 3, Safoni:** Mae polisi penodol, wedi'i gyfathrebu, ar draws y
  sefydliad yn gwahardd graddio gweithgarwch unigol, a defnyddir data
  gweithgarwch mewn cyd-destun cyfanredol, lefel-tîm yn unig.
- **Lefel 4, Rheoli:** Archwilir arferion adolygu-perfformiad a
  dyrchafiad yn gyfnodol i gadarnhau bod y polisi'n cael ei ddilyn mewn
  gwirionedd, ac mae signalau gweithgarwch wedi'u haddasu ar gyfer
  ansawdd yn disodli cyfrifon crai lle defnyddir data gweithgarwch o
  gwbl.
- **Lefel 5, Cerddorfaru:** Mae'r sefydliad wedi symud diwylliant
  gwerthuso'n amlwg i ffwrdd o fetrigau gweithgarwch tuag at ddull
  perfformiad aml-signal pennod 3.3, gyda gwelliant gweladwy mewn
  cydweithio ac ymddygiad twyllo lleihaol fel tystiolaeth bod y symudiad
  wedi gweithio.

## Syniadau ar gyfer trafodaeth

1. A oes unrhyw un yma erioed wedi teimlo eu bod yn cael eu gwerthuso, hyd yn oed yn anffurfiol, gan ba mor "brysur" yr oedd eu gweithgarwch yn edrych?
2. Sut olwg fyddai ar theatr gweithgarwch yn benodol ar ein tîm?
3. A oes gennym bolisi penodol, ysgrifenedig yn erbyn graddio gweithgarwch unigol, ac a yw'n cael ei ddilyn mewn gwirionedd?
4. Pa waith tawel, gwerth-uchel ar ein tîm sy'n cynhyrchu'r data gweithgarwch lleiaf gweladwy ar hyn o bryd?
5. Sut fyddem yn ail-ddylunio ein tystiolaeth adolygu-perfformiad i ddileu cyfrifon gweithgarwch yn gyfan gwbl?

## Prif gasgliadau

- Mae gweithgarwch yn mesur **symudiad, nid gwerth**; dyma'r teulu
  metrig a gamddefnyddiwyd fwyaf yn hanesyddol mewn peirianneg
  meddalwedd.
- **Peidiwch byth â graddio na gwerthuso unigolion** yn ôl cyfrifon
  gweithgarwch crai; dyma'r rheol anoddaf a phwysicaf yn y bennod hon.
- Defnyddiwch ddata gweithgarwch **yn gyfanredol, fel cyd-destun** ar
  gyfer y dimensiynau SPACE eraill, byth fel dyfarniad annibynnol.
- Gwyliwch am **theatr gweithgarwch** a'r **patrwm twyllo-amnewid**
  (pennod 1.2) yn benodol o fewn y teulu metrig hwn.
- Mae gwaith dwfn, gwerth-uchel yn aml yn cynhyrchu'r **data
  gweithgarwch lleiaf gweladwy**; diogelwch ef rhag cael ei danbrisio'n
  systematig.

## Cyfeiriadau a darllen pellach

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, a Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, gan Tom DeMarco a
  Timothy Lister (yr achos yn erbyn mesur peirianwyr yn ôl prysurdeb
  gweladwy).
- *Deep Work: Rules for Focused Success in a Distracted World*, gan Cal
  Newport (gwerth gwaith tawel, di-dor y mae metrigau gweithgarwch yn
  ei dangyfrif yn systematig).
- *The Tyranny of Metrics*, gan Jerry Z. Muller (obsesiwn metrig a'i
  gostau, yn uniongyrchol berthnasol i werthusiad seiliedig-ar-
  weithgarwch).
