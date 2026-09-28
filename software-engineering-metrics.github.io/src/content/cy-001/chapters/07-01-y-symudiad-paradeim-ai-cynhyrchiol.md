# 7.1 Y symudiad paradeim AI cynhyrchiol

## Trosolwg a chymhelliant

Am y rhan fwyaf o hanes peirianneg meddalwedd, roedd ysgrifennu cod yn
ddigon araf a llafurus fel bod cyfaint allbwn crai, llinellau a
ysgrifennwyd, ymrwymiadau a wnaed, nodweddion a ryddhawyd, yn
cydberthyn o leiaf yn llac ag ymdrech wirioneddol ac, yn amherffaith, â
gwerth gwirioneddol. Nid oedd y gydberthynas honno erioed yn berffaith,
neilltuodd pennod 3.4 bennod gyfan i pam mae metrigau gweithgarwch yn
camarwain hyd yn oed mewn byd cyn-AI, ond roedd yn ddigon cryf fel bod
llawer o sefydliadau wedi adeiladu rhaglenni metrigau ar y dybiaeth
oblygedig bod mwy o god fel arfer yn golygu mwy o waith wedi'i wneud.
Mae cynorthwywyr codio **[AI cynhyrchiol](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)**
wedi torri'r dybiaeth honno'n derfynol: gall offeryn nawr gynhyrchu
cyfaint mawr, credadwy-yr-olwg o god mewn eiliadau, am ffracsiwn o'r
gost flaenorol, ac mae'r cyfaint hwnnw'n dweud bron dim byd wrthych ar
ei ben ei hun am a yw'r cod canlyniadol yn gweithio, yn gynaliadwy,
neu'n gwasanaethu unrhyw bwrpas gwirioneddol.

Hawliad craidd y bennod hon yw bod hwn yn newid paradeim, nid newid
offeryno cynyddrannol. Mae newid paradeim yn newid yr hyn y mae eich
offerynnau presennol mewn gwirionedd yn ei fesur, nid dim ond y
gwerthoedd y maent yn eu hadrodd. Mae mesurydd cyflymder yn dal i fesur
cyflymder ar ôl i chi newid injan car; nid yw sawl un o fetrigau'r
llyfr hwn yn goroesi'r trawsnewid hwn mor lân. Gall amledd defnyddio
(pennod 2.10) godi oherwydd bod AI wedi cyflymu gwaith gwirioneddol
werthfawr, neu oherwydd bod AI wedi ei gwneud yn ddibwys hawdd
cynhyrchu llawer o newidiadau bach, gwerth-isel; ni all y rhif ar ei
ben ei hun wahaniaethu'r ddau mwyach, mewn ffordd y gallai'n bennaf, â
gofal priodol, o'r blaen. Mae'r un rhesymeg yn gymwys ag hyd yn oed mwy
o rym i gyfrifon ymrwymiad crai, llinellau o god, a chyfaint pull
request, y cyfan y rhybuddiodd pennod 3.4 yn eu herbyn eisoes fel
metrigau unigol, wedi'u mwyhau nawr i berygl sy'n berthnasol ar lefel y
tîm a'r sefydliad hefyd.

I dimau mawr, cyrhaeddodd y symudiad hwn yn gyflymach nag y gallai
arfer mesur y rhan fwyaf o sefydliadau addasu iddo, a'r bwlch rhwng
cyflymder mabwysiadu ac addasiad mesur yw lle mae'r perygl gwirioneddol
yn y rhan hon yn byw. Mae sefydliadau menter sy'n parhau i adrodd
metrigau gweithgarwch cyn-oes-AI heb addasiad yn mentro dathlu metrig
sydd wedi peidio â chydberthyn â gwerth yn dawel; mae angen dealltwriaeth
glir ar sefydliadau llywodraeth sy'n gwerthuso buddsoddiad offeryno AI o
union pa fetrigau sy'n aros yn ddibynadwy a pha rai nad ydynt bellach,
cyn ymrwymo i benderfyniadau caffael neu bolisi wedi'u hadeiladu ar
dybiaethau mesur hen ffasiwn.

## Egwyddorion allweddol

- **Mae hwn yn newid paradeim yn yr hyn y mae metrigau'n ei fesur, nid
  newid cynyddrannol.** Mae rhai metrigau presennol wedi peidio â
  golygu'r hyn yr oeddent yn arfer ei olygu'n dawel.
- **Ni fu cyfaint allbwn erioed yn ddirprwy dibynadwy ar gyfer gwerth,
  ac mae wedi dod yn weithredol annibynadwy nawr.** Roedd rhybudd
  pennod 3.4 bob amser yn gywir; mae'r symudiad hwn yn gwneud ei
  anwybyddu'n llawer mwy costus.
- **Y bwlch rhwng cyflymder mabwysiadu AI a chyflymder addasiad mesur
  yw'r perygl gwirioneddol.** Mae sefydliadau'n mabwysiadu'r offeryno'n
  gyflymach nag y maent yn ailystyried eu metrigau.
- **Ni effeithir yr un fath ar bob metrig yn y llyfr hwn.** Mae
  metrigau canlyniad (Rhan 5) yn llawer mwy gwydn i'r symudiad hwn na
  metrigau gweithgarwch ac allbwn crai.
- **Mae'r symudiad hwn yn eang-i'r-diwydiant ac yn barhaus, nid yn
  addasiad un-tro.** Disgwyliwch newid parhaus wrth i'r offeryno a'i
  batrymau mabwysiadu barhau i esblygu.

## Argymhellion

### Archwiliwch eich set fetrigau bresennol yn benodol am ddilysrwydd oes-AI

Ewch trwy eich dangosfwrdd cyfredol a, ar gyfer pob metrig, gofynnwch
yn uniongyrchol: a fyddai tîm sy'n defnyddio cymorth AI'n drwm ond yn
cynhyrchu dim mwy o werth gwirioneddol nag o'r blaen yn dangos
darlleniad gwell ar y metrig hwn. Cyfrifon gweithgarwch, amlder
ymrwymiad, ac amledd defnyddio crai (heb gledr ddiogelwch
sefydlogrwydd wedi'i pharejo, pennod 2.10) yw'r rhai mwyaf agored.
Mae metrigau canlyniad o Ran 5, cyfradd diffygion dianc, mabwysiad
nodwedd, canlyniadau busnes, yn gymharol wydn, gan eu bod yn mesur y
canlyniad gwirioneddol yn hytrach na chyfaint y gweithgarwch a'i
cynhyrchodd.

### Ailarchwiliwch amledd defnyddio ac amser arwain yn benodol, â sylw cledr-ddiogelwch uwch

Rhybuddiodd pennod 2.10 eisoes am dwyllo amnewid, hollti gwaith
ystyrlon yn ddefnyddiadau dibwys i chwyddo'r cyfrif. Mae AI cynhyrchiol
yn gwneud y patrwm twyllo penodol hwn yn ddramatig rhatach ac yn haws
ei gynhyrchu, hyd yn oed yn anfwriadol, gan fod newidiadau dibwys â
chymorth AI bellach bron yn rhad ac am ddim i'w cynhyrchu. Tynhewch
eich cledr ddiogelwch cyfradd-methiant-newid (pennod 2.10) yn benodol
yn gymesur â pha mor drwm y mae tîm wedi mabwysiadu datblygiad â
chymorth AI, a gwyliwch dueddiadau maint defnyddio hyd yn oed yn agosach
nag o'r blaen.

### Triniwch gapasiti adolygu cod fel tagfa newydd, dyngedfennol

Os yw cymorth AI'n cynyddu cyfaint y cod a gynigir ar gyfer adolygiad
yn ddramatig, mae cam yr adolygiad (pennod 2.9), eisoes yn aml y
cyfrannwr amser-aros mwyaf yn y biblinell gyflenwi, yn dod yn gyfyngiad
hyd yn oed mwy llym. Bydd adolygydd sy'n cael ei ofyn i werthuso cyfaint
llawer uwch o god a gynhyrchwyd-gan-AI ar yr un cyflymder ag o'r blaen
yn anochel naill ai'n arafu'r biblinell neu'n lleihau dyfnder adolygu,
union y perygl stamp-rwber y rhybuddiodd pennod 2.9 amdano eisoes, o
dan bwysau sylweddol fwy nawr. Monitrwch gledrau diogelwch dyfnder ac
ansawdd adolygu â sylw uwch wrth i gyfaint cod a gynhyrchwyd-gan-AI godi.

### Peidiwch â thybio bod gan god a gynhyrchwyd-gan-AI yr un proffil diffyg â chod a ysgrifennwyd-gan-ddyn

Mae tystiolaeth gynnar a phrofiad ymarferwyr yn awgrymu y gall fod gan
god a gynhyrchwyd-gan-AI broffil diffyg gwahanol i god a ysgrifennwyd-
gan-ddyn: rhesymeg sy'n edrych yn gredadwy ond sy'n gynnil anghywir,
trin achos-ymyl a gynhyrchwyd yn hyderus ond yn anghywir, neu god sy'n
pasio adolygiad arwynebol oherwydd ei fod yn edrych yn idiomatig a
rhesymol, ond na chafodd ei resymu drwyddo mewn gwirionedd â
dealltwriaeth wirioneddol o gyd-destun penodol y system. Triniwch hyn
fel damcaniaeth sy'n werth ei phrofi'n weithredol yn erbyn eich data
diffyg-dianc eich hun (pennod 5.1), gan dagio diffygion yn ôl a oedd y
cod gwreiddiol wedi'i gynhyrchu'n sylweddol gan AI, yn hytrach na thybio
bod y perthnasau cyfradd-diffyg hanesyddol y mae eich sefydliad wedi
adeiladu ei arferion ansawdd o'u cwmpas yn dal heb newid.

### Diweddarwch eich siarter metrigau a'ch proses lywodraethu'n benodol ar gyfer y symudiad hwn

Gan ddilyn disgyblaeth llywodraethu pennod 1.4, peidiwch â gadael i'r
symudiad hwn ddigwydd i'ch rhaglen fetrigau'n oddefol. Ailedrychwch yn
benodol ar eich siarter metrigau, gan enwi pa fetrigau sydd angen
cledrau diogelwch newydd, pa rai sydd angen eu hymddeol, a pha rai sy'n
aros yn ddibynadwy, fel penderfyniad llywodraethu bwriadol yn hytrach
na drifft heb ei archwilio. Dogfennwch y rhesymu, gan mai dyma'n union y
math o symudiad diffiniadol a chyd-destunol y mae pennod 1.4'n
rhybuddio y gall ddigwydd yn dawel fel arall a chael ei ddarganfod dim
ond yn llawer diweddarach.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Parhau i adrodd metrigau cyn-oes-AI heb eu newid | Dim tarfu, adrodd cyfarwydd | Yn mentro dathlu metrigau sydd wedi peidio â chydberthyn â gwerth yn dawel |
| Archwiliad set fetrigau lawn ac adolygiad bwriadol | Yn adfer mesuriad dibynadwy | Angen ymdrech ddadansoddol wirioneddol a rheolaeth newid sefydliadol |
| Rhoi'r gorau i fetrigau gweithgarwch ac allbwn yn gyfan gwbl | Yn dileu'r perygl mwyaf agored yn uniongyrchol | Yn colli rhywfaint o signal cyd-destunol dilys ddefnyddiol (rhybudd pennod 3.4) |
| Tynhau cledrau diogelwch heb archwiliad llawn | Cyflymach i'w weithredu | Gall golli metrigau y mae eu hamlygiad yn llai amlwg na'r achosion cliriaf |

Y tensiwn canolog yw **parhad mesur yn erbyn dilysrwydd mesur**. Mae
sefydliadau'n deall yn ffafrio parhau i adrodd metrigau cyfarwydd mewn
ffyrdd cyfarwydd, gan fod gan newid rhaglen fetrigau gost a tharfu
sefydliadol gwirioneddol. Ond mae parhau i adrodd metrig sydd wedi
peidio â mesur yr hyn yr oedd yn arfer ei fesur yn dawel yn waeth na
tharfu, mae'n gamgyfeiriad gweithredol. Datryswch y tensiwn trwy drin
hyn fel union y math o newid llywodraethu bwriadol, wedi'i ddogfennu y
mae pennod 1.4'n ei ddisgrifio, yn tarfu yn y tymor byr ond yn
angenrheidiol i gadw metrigau'r sefydliad yn onest.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Ar gyfer pob metrig ar ein dangosfwrdd, a fyddai tîm sy'n defnyddio
   cymorth AI'n drwm ond yn cynhyrchu dim mwy o werth gwirioneddol yn
   dangos darlleniad gwell?** Ewch trwy eich metrigau'n benodol â'r
   prawf hwn; y rhai sy'n methu ag ef yw eich ymgeiswyr blaenoriaeth-
   uchaf ar gyfer cledrau diogelwch diwygiedig neu ymddeoliad.

2. **A yw ein hamledd defnyddio neu gyfaint ymrwymiad wedi codi ers
   mabwysiadu cymorth codio AI, ac a ydym wedi gwirio a symudodd cyfradd
   methiant newid neu gyfradd diffyg yn gyfatebol?** Tynnwch y data
   wedi'i barejo gwirioneddol yn hytrach na thybio canlyniad
   cadarnhaol neu negyddol.

3. **A yw ein capasiti adolygu cod yn cadw i fyny ag unrhyw gynnydd yng
   nghyfaint cod â chymorth AI, neu a yw dyfnder adolygu'n erydu'n
   dawel o dan bwysau cynyddol?** Gwiriwch fetrigau cam-adolygu
   (pennod 2.9) yn benodol am arwyddion o'r perygl stamp-rwber yn
   dwysáu.

4. **A ydym yn tagio diffygion yn ôl a oedd y cod gwreiddiol wedi'i
   gynhyrchu'n sylweddol gan AI, ac os felly, beth mae'r data hwnnw'n
   ei ddangos hyd yn hyn?** Os nad ydych yn tagio hyn ar hyn o bryd,
   trafodwch beth fyddai ei angen i ddechrau, gan fod y data hwn yn
   uniongyrchol berthnasol i a yw eich tybiaethau ansawdd hanesyddol yn
   dal i sefyll.

5. **A ydym wedi ailedrych yn fwriadol ar ein siarter metrigau (pennod
   1.4) o gofio'r symudiad hwn, neu a yw ein harfer mesur wedi parhau
   heb ei newid yn syml?** Os yw'r ateb onest yn yr olaf, mae'r bwlch
   hwnnw'n union yr hyn y mae'r bennod hon yn argymell ei gau'n gyntaf.

6. **Sut olwg fyddai arni petai ein sefydliad yn cael ei ddal ar draed
   fflat gan y symudiad hwn, yn dathlu metrig a oedd eisoes wedi peidio
   â golygu'r hyn y tybiwyd ein bod yn ei olygu?** Mae'r arbrawf
   meddwl concrid, ychydig yn anghyfforddus hwn yn helpu i ysgogi'r
   archwiliad y mae'r bennod hon yn ei argymell cyn, yn hytrach nag ar
   ôl, i'r senario hwnnw ddigwydd mewn gwirionedd.

## Golwg sector

**Cwmni newydd.** Mae mabwysiadu offer AI cyflym yn gyffredin ac yn aml
yn fantais gystadleuol wirioneddol, ond mae'r un cyflymder sy'n gwneud
mabwysiadu'n ddeniadol yn gwneud drifft metrig heb ei archwilio'n fwy
tebygol. Adeiladwch yr arferiad o wirio metrigau canlyniad (Rhan 5)
ochr yn ochr ag unrhyw enillion effeithlonrwydd yr ydych yn eu hadrodd
o fabwysiadu AI, yn hytrach nag adrodd gwelliannau cyflymder yn unig.

**Busnes bach.** Gall cymorth codio AI ymestyn capasiti tîm bach yn
ystyrlon, ond gwrthsefyllwch y demtasiwn i adrodd cynnydd allbwn crai
fel llwyddiant diamwys heb wirio cledrau diogelwch ansawdd; mae gan
dîm bach lai o gapasiti i amsugno problem ansawdd heb ei chanfod na
sefydliad mwy â mwy o ddiswyddiant.

**Menter.** Mae graddfa'r perygl hwn yn cyfansymio'n sylweddol yma, gan
y gall mabwysiadu AI ar draws degau neu gannoedd o dimau ar yr un pryd
symud dilysrwydd metrig ar draws y sefydliad cyfan cyn i unrhyw un tîm
sylwi ar y patrwm yn lleol. Cynhaliwch yr archwiliad set-fetrigau y
mae'r bennod hon yn ei argymell ar y lefel sefydliadol, nid fesul tîm
yn unig, a diweddarwch lywodraethu (pennod 1.4) yn ganolog ac yn benodol.

**Llywodraeth.** Mae sefydliadau sector-cyhoeddus yn aml yn mabwysiadu
technoleg newydd yn fwy gofalus, ond mae'r metrigau a'r meincnodau a
ddefnyddir i werthuso rhaglenni technoleg llywodraeth yn aml wedi'u
tynnu o, neu eu cymharu yn erbyn, ddata diwydiant sector-preifat sydd
ei hun yn symud o dan yr un pwysau. Deallwch yn benodol pa feincnodau
diwydiant yr ydych yn cymharu yn eu herbyn sydd wedi cael eu heffeithio
gan y symudiad hwn cyn eu defnyddio i osod disgwyliadau neu werthuso
perfformiad.

## Enghreifftiau

**Menter.** Sylwodd arweinyddiaeth peirianneg cwmni technoleg ariannol
fod amledd defnyddio wedi codi bron 40% yn y ddau chwarter yn dilyn
mabwysiad eang cynorthwyydd codio AI, ac adroddodd hyn yn wreiddiol fel
llwyddiant cynhyrchedd uniongyrchol mewn cyflwyniad bwrdd. Canfu
dadansoddiad dilynol mwy gofalus, wedi'i ysgogi gan gwestiwn aelod
bwrdd amheugar am a wiriwyd ansawdd, fod cyfradd methiant newid wedi codi
bron gam am gam ag amledd defnyddio, gan wrthbwyso'r enillion
ymddangosiadol yn gyfan gwbl unwaith yr archwiliwyd y metrig
sefydlogrwydd wedi'i barejo mewn gwirionedd. Mae adroddiad diwygiedig y
cwmni bellach yn cyflwyno amledd defnyddio a chyfradd methiant newid
gyda'i gilydd yn benodol pryd bynnag y gwneir hawliadau cynhyrchedd â
chymorth AI, gan osgoi'r hawliad camarweiniol, bron yn gyhoeddus,
cynharach.

**Llywodraeth.** Canfu adran TG llywodraeth talaith, oedd yn peilota
cymorth codio AI ar gyfer is-set o'i thimau peirianneg, fod allbwn cod
crai fesul peiriannydd wedi cynyddu'n sylweddol, ffigur a ddyfynnwyd yn
ffafriol yn wreiddiol mewn adolygiad peilot mewnol. Archwiliodd
dadansoddiad agosach, wedi'i ysgogi gan ganllawiau'r llyfr hwn yn cael
eu hymgorffori i fframwaith gwerthuso'r adran, gyfradd diffygion dianc
ar gyfer gwaith â chymorth-AI yn erbyn gwaith heb-gymorth-AI yn benodol
a chanfod cyfradd diffyg ychydig yn uwch yn y garfan â-chymorth-AI, wedi'i
grynhoi mewn trin achos-ymyl ar gyfer amgylchiadau dinesydd anarferol
nad oedd yr offeryno AI wedi'i amlygu iddynt yn ystod hyfforddi. Ni
wnaeth y canfyddiad hwn atal y peilot ond arweiniodd at gynnydd
penodol, wedi'i dargedu mewn trylwyredd adolygu ar gyfer newidiadau â
chymorth-AI yn cyffwrdd rhesymeg achos-ymyl cymhwysedd, gan fynd i'r
afael â'r perygl gwirioneddol na fyddai'r metrig allbwn crai ar ei ben
ei hun byth wedi'i ddatgelu.

## Achos busnes: cymhellion, ROI, a TCO

Osgoi embaras cyhoeddus neu lefel-bwrdd rhag adrodd metrig sy'n troi
allan, o dan graffu, i fod wedi mesur dim byd gwirioneddol, union y
senario y bu bron i'r enghraifft technoleg ariannol uchod ei gynhyrchu,
yw'r enillion ar gynnal yr archwiliad hwn yn rhagweithiol. Mae
sefydliad sy'n mynd o flaen y symudiad hwn yn cynnal credadwyedd gyda'i
randdeiliaid; mae un sy'n cael ei ddal yn adrodd metrig gwag yn talu
cost enw da gwirioneddol, ac i raddau helaeth osgoiadwy.

Yr ymdrech ddadansoddol i archwilio'r set fetrigau bresennol, tynhau
cledrau diogelwch, a diweddaru dogfennaeth lywodraethu, buddsoddiad
cymedrol, un-tro mewn perthynas â'r perygl parhaus o barhau i adrodd
metrigau sydd wedi peidio â mesur yr hyn y maent yn honni ei fesur yn
dawel, yw cost cyfanswm perchnogaeth. Mae'r gost hon hefyd yn ailadrodd
ar lefel is, gan fod y symudiad hwn yn barhaus, nid yn ddigwyddiad
un-tro, ac mae ailarchwiliad cyfnodol wrth i batrymau offeryno a
mabwysiadu barhau i esblygu'n ychwanegiad rhesymol, parhaol i gadence
llywodraethu metrigau.

## Gwrth-batrymau a pheryglon

- **Parhau i adrodd metrigau gweithgarwch cyn-oes-AI heb eu newid ac
  yn ddi-feirniadol:** yn mentro dathlu metrig sydd wedi peidio â
  chydberthyn â gwerth gwirioneddol yn dawel.
- **Adrodd cynnydd amledd defnyddio neu gyfaint allbwn heb y gledr
  ddiogelwch sefydlogrwydd wedi'i parejo:** yn ailadrodd rhybudd pennod
  2.10 â stanciau sylweddol uwch o dan ddatblygiad â chymorth AI.
- **Tybio bod gan god a gynhyrchwyd-gan-AI yr un proffil diffyg â chod
  a ysgrifennwyd-gan-ddyn heb wirio:** tybiaeth heb ei phrofi a allai
  fod yn weithredol anghywir.
- **Gadael i ddyfnder adolygu erydu'n dawel o dan gyfaint cod a
  gynhyrchwyd-gan-AI cynyddol:** perygl stamp-rwber pennod 2.9, wedi'i
  ddwysau.
- **Trin y symudiad hwn fel addasiad un-tro yn hytrach na phryder
  parhaus:** mae'r offeryno a'i batrymau mabwysiadu'n parhau i esblygu,
  ac mae angen i arfer mesur gadw i fyny.
- **Cymharu yn erbyn meincnodau diwydiant heb ddeall a yw'r meincnodau
  hynny eu hunain wedi symud o dan yr un pwysau:** yn mentro
  ymdeimlad ffug o berfformiad cymharol.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Adroddir metrigau cyn-oes-AI heb eu newid, heb
  ymwybyddiaeth y gallai mabwysiadu AI fod wedi effeithio ar eu
  dilysrwydd.
- **Lefel 2, Datblygu:** Mae rhywfaint o ymwybyddiaeth o'r symudiad yn
  bodoli, ond ni chynhaliwyd archwiliad systematig o'r set fetrigau
  bresennol.
- **Lefel 3, Safoni:** Cynhaliwyd archwiliad set-fetrigau llawn, gyda
  chledrau diogelwch wedi'u tynhau a metrigau wedi'u dogfennu fel rhai
  wedi'u heffeithio neu wydn, ar draws y sefydliad.
- **Lefel 4, Rheoli:** Tagir ac olrheinir diffygion a chanlyniadau
  ansawdd yn weithredol yn ôl lefel cymorth-AI i brofi, nid tybio, bod
  perthnasau ansawdd hanesyddol y sefydliad yn dal i sefyll.
- **Lefel 5, Cerddorfaru:** Mae gan y sefydliad arfer aeddfed, parhaus o
  ailarchwilio ei fetrigau wrth i offeryno AI a phatrymau mabwysiadu
  barhau i esblygu, a gall bwyntio at benderfyniadau llywodraethu
  penodol a wnaed yn rhagweithiol mewn ymateb i'r symudiad hwn yn
  hytrach nag yn adweithiol ar ôl i broblem ddod i'r amlwg.

## Syniadau ar gyfer trafodaeth

1. Pa un o'n metrigau cyfredol fyddai'n gwneud i dîm sy'n defnyddio cymorth AI'n drwm ond yn cynhyrchu dim mwy o werth gwirioneddol edrych orau?
2. A yw ein hamledd defnyddio wedi codi ers mabwysiadu AI, ac a symudodd cyfradd methiant newid gydag ef?
3. A ydym yn tagio canlyniadau ansawdd yn ôl lefel cymorth-AI, a beth fyddai'r data hwnnw'n ei ddangos?
4. A yw ein capasiti adolygu'n cadw i fyny ag unrhyw gynnydd mewn cyfaint cod a gynhyrchwyd-gan-AI?
5. Pa feincnod diwydiant ydym ni'n ein cymharu ein hunain yn ei erbyn ar hyn o bryd, ac a yw ef ei hun wedi symud o dan y pwysau hwn?

## Prif gasgliadau

- Mae AI cynhyrchiol yn **newid paradeim yn yr hyn y mae sawl metrig
  presennol yn ei fesur**, nid newid offeryno cynyddrannol; mae rhai
  metrigau wedi peidio â golygu'r hyn yr oeddent yn arfer ei olygu'n
  dawel.
- **Metrigau gweithgarwch ac allbwn crai yw'r rhai mwyaf agored**; mae
  metrigau canlyniad (Rhan 5) yn gymharol wydn.
- **Tynhewch gledrau diogelwch, yn enwedig cyfradd methiant newid**, yn
  gymesur â mabwysiadu datblygiad â chymorth AI.
- **Profwch, peidiwch â thybio, a oes gan god a gynhyrchwyd-gan-AI
  broffil diffyg gwahanol** i god a ysgrifennwyd-gan-ddyn, gan
  ddefnyddio data diffyg-dianc wedi'i dagio.
- Triniwch hyn fel pryder llywodraethu **parhaus, nid un-tro** (pennod
  1.4), gan fod yr offeryno a'i batrymau mabwysiadu'n parhau i esblygu.

## Cyfeiriadau a darllen pellach

- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (y sylfaen mesur seiliedig-ar-
  ganlyniad y mae'r bennod hon yn dadlau ei bod yn dod yn fwy, nid yn
  llai, pwysig o dan y symudiad hwn).
- Ymchwil GitHub ar barau-rhaglennu AI a chynhyrchedd datblygwyr
  (ymchwil diwydiant ar effeithiau mesuradwy datblygiad â chymorth AI).
- Rhaglen Ymchwil ac Asesu DevOps Google Cloud, [dora.dev](https://dora.dev/)
  (ymchwil State of DevOps parhaus yn ymgorffori canfyddiadau
  mabwysiadu-AI mewn blynyddoedd diweddar).
- *The Tyranny of Metrics*, gan Jerry Z. Muller (yr achos cyffredinol
  dros amheuaeth tuag at fetrigau seiliedig-ar-gyfaint, yn uniongyrchol
  berthnasol wrth i gyfaint allbwn ddod yn rhad).
