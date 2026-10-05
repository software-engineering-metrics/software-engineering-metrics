# 2.1 Y Flow Framework

## Trosolwg a chymhelliant

Mae'r **Flow Framework** yn fodel rheolaethol a strwythurol a grëwyd gan
Mik Kersten ac a gyhoeddwyd yn ei lyfr 2018 *Project to Product*. Mae'n
bodoli i ateb cwestiwn na all metrigau piblinell pur ei ateb: nid dim ond
pa mor gyflym a pha mor ddiogel y mae cod yn symud o gomit i gynhyrchu,
ond pa fath o werth sy'n symud trwy'r biblinell o gwbl, ac a yw'r
cymysgedd hwnnw'n adlewyrchu strategaeth wirioneddol y busnes. Mae'r
fframwaith yn trin cyflenwi meddalwedd fel
**[ffrwd werth](https://en.wikipedia.org/wiki/Value_stream)**, y
dilyniant o weithgareddau o'r naill ben i'r llall sy'n troi syniad yn
werth y mae cwsmer yn ei dderbyn, gan fenthyg yn uniongyrchol o draddodiad
mapio ffrwd werth gweithgynhyrchu lean.

Mae'r llyfr hwn yn defnyddio'r Flow Framework fel strwythur trefnu Rhan
2. Mae pennod 2.2 yn cyflwyno ei bedair elfen lif, mae penodau 2.3 a 2.4
yn cyflwyno ei bum metrig llif, mae pennod 2.8 yn olrhain y metrigau
hynny'n ôl at eu tarddiad mewn mapio ffrwd werth Lean clasurol, ac mae
pennod 2.10 yn cwmpasu metrigau DORA fel fframwaith cyfeirio culach,
sy'n canolbwyntio ar y biblinell, na fydd y rhan hon yn arwain ag ef mwyach.
Dewis bwriadol yw hwnnw, nid diystyriad o ymchwil DORA. Mae DORA'n mesur
trwybwn a sefydlogrwydd system â thrylwyredd ystadegol gwirioneddol, ond
mae'n dawel ar y cwestiwn sydd o wir bwys i arweinydd busnes: o'r
cyfan a gyflenwodd y sefydliad peirianneg y chwarter hwn, faint ohono
oedd gwerth cwsmer newydd, a faint a gafodd ei ddefnyddio'n dawel yn trwsio
diffygion, rheoli risg, neu dalu dyled i lawr. Mae'r Flow Framework yn
bodoli'n benodol i wneud y cymysgedd hwnnw'n weladwy.

I dimau mawr, nid yw'r gwahaniaeth hwn yn academaidd. Gall sefydliad
platfform sy'n rhedeg dwsinau o ffrydiau gwerth gael rhifau DORA
rhagorol, defnyddiadau cyflym, aml, sefydlog, tra bo'i gynnyrch cynnyrch
gwirioneddol wedi drifftio'n dawel tuag at waith cynnal a chadw bron yn
bur, patrwm anweledig i ddangosfwrdd sy'n mesur mecaneg piblinell yn
unig. Mae sefydliadau menter a llywodraeth, sy'n gorfod cyfiawnhau
buddsoddiad peirianneg i randdeiliaid sy'n meddwl mewn termau busnes,
nid termau piblinell, angen eirfa sy'n cysylltu gweithgarwch cyflenwi â
bwriad strategol. Dyna beth mae'r fframwaith hwn yn ei ddarparu.

## Egwyddorion allweddol

- **Ffrwd werth yw'r uned fesur, nid tîm neu biblinell.** Mae'n
  ymestyn o angen cwsmer neu fusnes i'r canlyniad a gyflenwyd, gan groesi
  pa bynnag ffiniau tîm y mae'r gwaith mewn gwirionedd yn eu croesi.
- **Mae elfennau llif yn gwneud y "beth" yn weladwy, nid dim ond y "pa mor
  gyflym."** Mae pedwar categori pennod 2.2, nodweddion, diffygion,
  risgiau, a dyled, yn troi penderfyniad blaenoriaethu ymhlyg yn un
  esblyg, mesuradwy.
- **Mae dyraniad capasiti ar draws elfennau llif yn swm-sero.** Mae mwy o
  gapasiti a dreulir ar un math o elfen yn llai o gapasiti sydd ar gael
  ar gyfer y lleill; mae'r fframwaith yn gwneud y cyfaddawd hwnnw'n
  weladwy yn lle ei adael yn ymhlyg.
- **Mae'r pum metrig llif yn ateb cwestiynau busnes, nid dim ond rhai
  peirianneg.** Fe'u dyluniwyd i'w cyflwyno i randdeiliad anhechnegol, nid
  eu cadw y tu mewn i dîm peirianneg.
- **Dylai rheolaeth ffrwd werth fod yn barhaus, nid yn ymarfer mapio un-
  waith.** Mae mapiau ffrwd werth statig yn mynd yn hen; mae'r fframwaith
  wedi'i adeiladu i'w gyfrifiannu o'r offer y mae timau eisoes yn eu
  defnyddio.

## Argymhellion

### Mapiwch eich ffrwd werth cyn cyfrifiannu unrhyw beth

Cyn mabwysiadu unrhyw fetrig llif, ewch trwy'r llwybr gwirioneddol y mae
darn o waith yn ei gymryd o adnabod angen busnes i gwsmer yn derbyn
gwerth, gan enwi pob cam a phob trosglwyddiad rhwng timau. Dyma'r ymarfer
[mapio ffrwd werth](https://en.wikipedia.org/wiki/Value_stream_mapping)
clasurol, wedi'i addasu o weithgynhyrchu lean, ac mae ei hepgor yw'r
rheswm mwyaf cyffredin bod mabwysiadu Flow Framework yn cynhyrchu rhifau
nad oes neb yn ymddiried ynddynt: yn anaml y mae metrigau wedi'u cyfrifo
yn erbyn proses heb ei harchwilio, wedi'i deall yn anffurfiol, yn cyfateb
i'r hyn sy'n digwydd mewn gwirionedd.

### Cysylltwch fetrigau llif â'r offer y mae eich timau eisoes yn eu defnyddio

Mae'r Flow Framework wedi'i adeiladu ar gyfer rheolaeth ffrwd werth
barhaus, awtomataidd, nid ymarfer mapio â llaw cyfnodol. Integreiddiwch
olrhain elfennau llif yn uniongyrchol i mewn i'r offer y mae gwaith eisoes
yn llifo trwyddynt, Jira, Azure DevOps, GitHub, yn hytrach nag adeiladu
system olrhain gyfochrog y mae'n rhaid i dimau ei diweddaru â llaw.
Dylai statws elfen lif ei ddiweddaru ei hun wrth i'r tocyn neu'r cais
tynnu sylfaenol symud, yr un ddisgyblaeth cyfrifianeg-dros-hunan-adrodd y
mae pennod 1.5 yn ei hargymell ar gyfer pob metrig yn y llyfr hwn.

### Cyflwynwch ddosbarthiad llif i randdeiliaid busnes yn uniongyrchol, nid dim ond arweinyddiaeth beirianneg

Y cyfle a gollwyd mwyaf sengl â'r fframwaith hwn yw ei drin fel offeryn
peirianneg mewnol. Mae dosbarthiad llif, cyfran y gwaith sy'n mynd i
nodweddion yn erbyn diffygion, risg, a dyled (pennod 2.3), wedi'i ddylunio'n
benodol i fod yn sgwrs a gewch â arweinyddiaeth cynnyrch a busnes,
oherwydd mae'n gwneud penderfyniad blaenoriaethu ymhlyg, faint o gapasiti
sy'n mynd i werth newydd yn erbyn cadw'r goleuadau ymlaen, yn esblyg ac
yn drafodadwy yn lle tybiedig.

### Triniwch y pedwar elfen lif fel tacsonomi wirioneddol, nid ffurfioldeb

Mynnwch fod pob uned waith yn cael ei dosbarthu'n union un o'r pedwar
math o elfen lif wrth ei chymryd i mewn, nid yn ôl-weithredol. Mae
dosbarthiad a gymhwysir ar ôl y ffaith, neu a gymhwysir yn llac oherwydd
"mae'n fasnach yn nodwedd," yn erydu gwerth cyfan y dacsonomi, oherwydd
holl bwynt hyn yw cofnod gonest, cyson o ble mae'r capasiti mewn
gwirionedd wedi mynd.

### Ailedrychwch ar eich map ffrwd werth pan fydd y sefydliad yn newid, nid ar amserlen sefydlog

Mae map ffrwd werth yn mynd yn hen yr eiliad y bydd ffiniau tîm, offer, neu'r
cynnyrch ei hun yn newid yn ystyrlon, nid ar ryw gadwedd flynyddol
fympwyol. Triniwch ad-drefniant, mudiad offer mawr, neu drobwynt cynnyrch
sylweddol fel sbardun i ailgerdded y ffrwd werth, oherwydd mae metrig
wedi'i gyfrifo yn erbyn map hen yn mesur y peth anghywir yn dawel.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Metrigau piblinell yn unig (DORA, pennod 2.10) | Syml, wedi'i ddilysu'n dda, rhad i'w gyfrifiannu o ddata CI/CD presennol | Yn dawel ar ba fath o werth sy'n cael ei gyflenwi |
| Mabwysiadu Flow Framework llawn | Yn cysylltu cyflenwi â strategaeth fusnes; yn gwneud cymysgedd gwerth yn weladwy ac yn drafodadwy | Angen map ffrwd werth gonest a disgyblaeth dosbarthu elfen-lif gyson |
| Mapio ffrwd werth statig, un-waith | Rhad, cyflym i'w redeg fel ymarfer gweithdy | Yn mynd yn hen yn gyflym; yn cynhyrchu instantiad, nid metrig byw |
| Rheolaeth ffrwd werth barhaus, wedi'i integreiddio ag offer | Data byw, cyfredol bob amser; yn graddio ar draws llawer o ffrydiau gwerth | Angen gwaith integreiddio offer gwirioneddol ymlaen llaw |

Y tensiwn canolog yw **darllenadwyedd busnes yn erbyn ymdrech
gyfrifianeg**. Mae metrigau piblinell yn rhad oherwydd bod y biblinell
eisoes yn cynhyrchu'r data; mae metrigau ffrwd werth angen map gonest o'r
broses gyfan ac arfer dosbarthu amser-cymryd-i-mewn disgybledig na fynnodd
metrigau piblinell erioed. Datryswch y tensiwn trwy ddechrau ag un ffrwd
werth, nid y sefydliad cyfan ar unwaith, gan ei mapio'n briodol, a dim ond
wedyn integreiddio olrhain elfennau llif i mewn i offer presennol, yn
hytrach na cheisio lansiad un-golch ar draws pob tîm ar yr un pryd.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A allem dynnu map ffrwd werth cywir ar gyfer ein cynnyrch pwysicaf
   ar hyn o bryd, neu a fyddem yn dyfalu wrth sawl un o'r trosglwyddiadau?**
   Nid yw'r rhan fwyaf o sefydliadau erioed wedi cerdded y llwybr hwn o'r
   naill ben i'r llall. Ceisiwch yr ymarfer yn onest a nodwch bob man lle
   mae'r grŵp yn anghytuno ynghylch beth sy'n digwydd mewn gwirionedd,
   oherwydd mae'r anghytundeb hwnnw'n ddiagnostig ynddo'i hun.

2. **Petaem yn dosbarthu popeth a gyflenwodd ein tîm y chwarter diwethaf
   yn nodweddion, diffygion, risg, a dyled, a fyddai'r canlyniad yn synnu
   ein harweinyddiaeth cynnyrch?** Nid yw'r rhan fwyaf o dimau erioed wedi
   gwneud y rhaniad hwn yn esblyg, ac mae'r ateb yn aml yn datgelu baich
   cynnal a chadw neu broblem dyled a oedd yn anweledig cynt mewn cyfrif
   syml "pwyntiau stori wedi'u cyflenwi."

3. **A oes gennym ffordd wirioneddol, wedi'i integreiddio ag offer i
   olrhain elfennau llif, neu a fyddai hyn angen i rywun ddosbarthu ac
   ailddosbarthu gwaith â llaw?** Mae system â llaw yn dirywio'n gyflym o
   dan lwyth gwaith gwirioneddol; nid yw un wedi'i integreiddio ag offer.
   Aseswch yn onest pa un yr ydych mewn gwirionedd yn barod i'w gynnal.

4. **Pryd newidiodd ein map ffrwd werth ddiwethaf, ac a ydym wedi
   diweddaru ein metrigau i adlewyrchu hynny?** Mae ad-drefniannau a
   mudiadau offer yn dirymu map ffrwd werth yn dawel, ac ychydig o
   sefydliadau sy'n cofio ailedrych arno pan fydd hynny'n digwydd.

5. **A yw ein metrigau llif byth yn cael eu cyflwyno'n uniongyrchol i
   randdeiliaid busnes neu gynnyrch, neu a ydynt yn aros y tu mewn i
   beirianneg?** Mantais fwyaf y fframwaith dros fetrigau piblinell-yn-
   unig yw'n union y sgwrs hon, ac mae ei hepgor yn colli'r rhan fwyaf o
   werth y fframwaith.

6. **Beth fyddai ei angen i rywun dwyllo ein dosbarthiad elfen-lif heb
   wneud unrhyw beth anonest ar bapur?** Ewch trwy sut y gallai tîm o dan
   bwysau cyflenwi ailenwi'n dawel waith dyled neu risg fel nodweddion i
   edrych yn fwy cynhyrchiol, a thrafodwch a fyddech yn sylwi ar hynny ar
   hyn o bryd.

## Golwg sector

**Cwmni newydd.** Mae map ffrwd werth llawn fel arfer yn ormodedd ar
gyfer tîm pum person lle mae pawb eisoes yn gwybod y broses gyfan ar ei
gof. Yr arfer defnyddiol ar y raddfa hon yw enwi'r pedwar math o elfen
lif yn uchel mewn sgyrsiau cynllunio, fel nad yw gwaith dyled a risg yn
diflannu'n dawel o'r golwg yr eiliad y bydd terfyn amser nodwedd yn
agosáu.

**Busnes bach.** Mabwysiadwch ddosbarthiad elfen-lif y tu mewn i pa
bynnag offeryn olrhain ysgafn a ddefnyddiwch eisoes, colofn wedi'i labelu
neu faes pwrpasol, yn hytrach nag unrhyw gynnyrch rheoli ffrwd werth
pwrpasol. Mae disgyblaeth dosbarthiad cyson yn bwysicach o lawer na
soffistigedigrwydd yr offer y tu ôl iddo.

**Menter.** Dyma lle mae'r fframwaith yn ennill ei le, oherwydd nid oes
gan sefydliad mawr sy'n rhedeg dwsinau o ffrydiau gwerth ar draws llawer o
linellau cynnyrch unrhyw ffordd ddibynadwy arall i weld, mewn un lle,
sut mae capasiti peirianneg mewn gwirionedd yn cael ei ddyrannu ar draws
nodweddion, diffygion, risg, a dyled. Buddsoddwch yn yr integreiddiad
offer; nid yw'r dewis â llaw yn goroesi cyswllt â graddfa wirioneddol.

**Llywodraeth.** Mae dosbarthiad llif yn rhoi ateb amddiffynadwy,
busnes-ddarllenadwy i sefydliad peirianneg sector cyhoeddus i "pam nad
oes mwy o ymarferoldeb newydd yn cael ei gyflenwi," pan mai'r ateb gonest
yw cyfran gynyddol o gapasiti'n mynd i remediad diogelwch neu ddyled
etifeddol. Mae gwneud y cyfaddawd hwnnw'n weladwy ac yn esblyg, yn hytrach
nag amsugno'r pwysau'n dawel, yn aml yr un peth mwyaf defnyddiol y mae'r
fframwaith hwn yn ei gynnig i arweinydd technoleg llywodraeth.

## Enghreifftiau

**Menter.** Roedd sefydliad platfform hawliadau cludwr yswiriant mawr yn
credu ei fod yn bennaf yn cyflenwi nodweddion newydd, yn seiliedig ar ei
adroddiadau cyflymder sbrint. Datgelodd ymarfer mapio ffrwd werth a
dosbarthiad elfen-lif cyntaf fod gwaith dyled a risg, llawer ohono'n ddyled
dechnegol heb ei ddogfennu o system graidd degawd oed, mewn gwirionedd yn
defnyddio bron hanner cyfanswm capasiti peirianneg, ffaith na wnaeth
unrhyw adrodd blaenorol ei dwyn i'r amlwg oherwydd bod y gwaith hwnnw
bob amser wedi'i blygu i mewn i "dasgau peirianneg" cyffredinol. Sicrhaodd
cyflwyno'r rhaniad hwn i'r pwyllgor gweithredol gyllideb lleihau-dyled
bwrpasol am y tro cyntaf yn hanes y platfform, yn hytrach na gwaith
dyled yn parhau i gystadlu'n dawel yn erbyn pob cais nodwedd.

**Llywodraeth.** Defnyddiodd is-adran gwasanaethau digidol awdurdod treth
genedlaethol fapio ffrwd werth i wneud diagnosis o pam roedd nodwedd
flaenllaw dinesig-wynebus wedi bod "ar y gweill" am dros flwyddyn er
gwaethaf cwblhau sbrint sefydlog. Datgelodd y map fod y ffrwd werth mewn
gwirionedd yn ymestyn pum tîm ar wahân â thri throsglwyddiad nad oedd y
siart sefydliadol yn ei adlewyrchu, a dangosodd dosbarthiad elfen-lif fod
amser peirianneg gwirioneddol y nodwedd yn ffracsiwn bach o'i chyfanswm
amser llif, y gweddill wedi'i ddefnyddio gan oedi trosglwyddo rhwng timau
na allai metrigau ei thîm ei hun eu gweld. Ailstrwythurodd yr is-adran o
gwmpas y ffrwd werth yn hytrach na'r siart sefydliadol ar gyfer y llinell
gynnyrch benodol honno, gan dorri amser llif yn sylweddol o fewn dau
chwarter.

## Achos busnes: cymhellion, ROI, a TCO

Ateb amddiffynadwy, busnes-ddarllenadwy i gwestiwn na all metrigau
piblinell ei ateb yw'r enillion ar fabwysiadu'r Flow Framework: a yw
capasiti peirianneg yn cael ei ddyrannu fel y mae arweinyddiaeth yn credu
ei fod. Mae'r enghraifft yswiriant uchod, gan ddwyn i'r amlwg bron hanner y
capasiti'n mynd i waith dyled a oedd yn anweledig gynt, yn batrwm cyffredin
unwaith y bydd sefydliad mewn gwirionedd yn dosbarthu ei waith yn onest,
ac mae'r gwelededd hwnnw'n rheolaidd yn datgloi buddsoddiad na fyddai
cais "mae angen mwy o amser arnom ar gyfer dyled dechnegol" amwys byth
wedi'i wneud.

Mae cost cyfanswm perchnogaeth wedi'i ganolbwyntio mewn dau le: yr
ymarfer mapio ffrwd werth cychwynnol, sy'n cymryd amser hwyluso
gwirioneddol i'w wneud yn onest, a'r integreiddiad offer sydd ei angen i
gadw data elfen-lif yn gyfredol heb gynnal a chadw â llaw. Mae'r ddau
gost yn un-waith neu'n gynnal a chadw isel unwaith y'u gwneir yn dda, sy'n
gwneud y fframwaith yn sylweddol rhatach i'w gynnal nag ydyw i'w
fabwysiadu.

## Gwrth-batrymau a pheryglon

- **Trin mapio ffrwd werth fel gweithdy un-waith, byth wedi'i ailedrych
  arno:** mae'r map yn mynd yn hen yr eiliad y bydd y sefydliad yn newid,
  ac mae metrig wedi'i gyfrifo yn erbyn map hen yn mesur y peth anghywir.
- **Adeiladu system olrhain elfen-lif gyfochrog, wedi'i chynnal â llaw:**
  yn dirywio'n gyflym o dan lwyth gwaith gwirioneddol; integreiddiwch i
  offer presennol yn lle hynny.
- **Dosbarthu elfennau llif yn ôl-weithredol yn hytrach nag wrth eu
  cymryd i mewn:** y fector twyllo wrth galon y bennod hon. O dan bwysau
  cyflenwi, gall tîm ailenwi'n dawel waith dyled neu risg fel nodweddion
  ar ôl y ffaith i edrych yn fwy cynhyrchiol i randdeiliaid nad ydynt ond
  yn gweld y siart dosbarthiad llif, heb i unrhyw un byth wneud
  penderfyniad esblyg, gweladwy i wneud hynny. Y gledr ddiogelwch yw mynnu
  dosbarthiad wrth gymryd i mewn, cyn i'r canlyniad fod yn hysbys, ac
  archwilio sampl o eitemau wedi'u dosbarthu'n gyfnodol yn erbyn yr hyn a
  wnaeth y newid sylfaenol mewn gwirionedd, yr un ddisgyblaeth archwilio y
  mae pennod 1.2 yn gofyn amdani gyda phob metrig yn y llyfr hwn.
- **Cadw metrigau llif y tu mewn i beirianneg yn unig:** yn colli prif
  fantais y fframwaith, eirfa a rennir â rhanddeiliaid busnes.
- **Mapio'r siart sefydliadol yn lle'r ffrwd werth wirioneddol:** yn
  cuddio trosglwyddiadau traws-dîm sydd yn aml y ffynhonnell fwyaf o
  oedi.
- **Mabwysiadu'r fframwaith yn sefydliadol gyfan cyn ei ddilysu ar un
  ffrwd werth:** yn risgio buddsoddiad mawr mewn metrigau nad oes neb yn
  ymddiried ynddynt oherwydd na chadarnhawyd erioed fod y map sylfaenol yn
  gywir.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Nid oes map ffrwd werth yn bodoli; olrheinir
  gwaith fel tocynnau cyffredinol heb ddosbarthiad elfen-lif.
- **Lefel 2, Datblygu:** Mae un ffrwd werth wedi'i mapio ac mae elfennau
  llif yn cael eu dosbarthu'n anffurfiol, ond mae olrhain â llaw ac wedi'i
  gymhwyso'n anghyson.
- **Lefel 3, Safoni:** Mae dosbarthiad elfen-lif wedi'i integreiddio i
  mewn i offer presennol ac wedi'i gymhwyso'n gyson wrth gymryd i mewn ar
  draws prif ffrydiau gwerth.
- **Lefel 4, Rheoli:** Adolygir dosbarthiad llif yn rheolaidd â
  rhanddeiliaid busnes, a chedwir mapiau ffrwd werth yn gyfredol yn
  weithredol wrth i'r sefydliad newid.
- **Lefel 5, Cerddorfaru:** Mae'r sefydliad yn dyrannu buddsoddiad
  peirianneg yn fwriadol ar draws ffrydiau gwerth gan ddefnyddio data
  llif, a gall bwyntio at benderfyniadau strategol penodol, cyllideb
  lleihau-dyled, ad-drefnu tîm, a wnaed oherwydd bod y fframwaith wedi
  gwneud cyfaddawd a oedd yn anweledig gynt yn weladwy.

## Syniadau ar gyfer trafodaeth

1. A allem dynnu map ffrwd werth cywir ar gyfer ein cynnyrch blaenllaw heddiw, heb ddyfalu?
2. Pa ganran o gapasiti'r chwarter diwethaf y byddai dosbarthiad elfen-lif gonest yn ei ddatgelu a aeth i ddyled a risg, yn erbyn nodweddion?
3. A yw ein metrigau llif ar hyn o bryd yn cyrraedd rhanddeiliaid busnes, neu a ydynt yn aros y tu mewn i beirianneg?
4. Beth yw'r trosglwyddiad traws-dîm mwyaf yn ein ffrwd werth nad yw ein siart sefydliadol yn ei adlewyrchu?

## Prif gasgliadau

- Mae'r **Flow Framework**, o *Project to Product* Mik Kersten, yn mesur
  pa fath o werth sy'n symud trwy biblinell gyflenwi, nid dim ond pa mor
  gyflym y mae'r biblinell ei hun yn rhedeg.
- **Ffrwd werth**, nid tîm neu biblinell, yw uned fesur y fframwaith, ac
  mae ei mapio'n onest yn dod cyn cyfrifiannu unrhyw beth.
- **Dosbarthiad elfen-lif wrth gymryd i mewn, nid ar ôl y ffaith**, yw'r
  gledr ddiogelwch yn erbyn fector twyllo canolog y bennod hon: ailenwi'n
  dawel waith dyled neu risg fel nodweddion i edrych yn fwy cynhyrchiol.
- **Cysylltwch fetrigau llif ag offer presennol**, Jira, Azure DevOps,
  GitHub, yn hytrach na system olrhain â llaw gyfochrog na fydd yn
  goroesi llwyth gwaith gwirioneddol.
- Cyflwynwch ddata llif **yn uniongyrchol i randdeiliaid busnes**; y
  sgwrs honno, nid dangosfwrdd peirianneg mewnol, yw prif fantais y
  fframwaith dros fetrigau piblinell-yn-unig.

## Cyfeiriadau a darllen pellach

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Rother, Mike, a John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, a George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, a John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
