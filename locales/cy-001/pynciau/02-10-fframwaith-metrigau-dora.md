# 2.10 Fframwaith metrigau DORA

## Trosolwg a chymhelliant

Daw **[metrigau DORA](https://dora.dev/guides/dora-metrics/)** o
raglen Ymchwil ac Asesu
**[DevOps](https://en.wikipedia.org/wiki/DevOps)**, ymdrech ymchwil
aml-flwyddyn a gyhoeddwyd yn ddiweddarach fel y llyfr *Accelerate* gan
Nicole Forsgren, Jez Humble, a Gene Kim, a arolygodd ddegau o filoedd o
weithwyr peirianneg proffesiynol i ganfod pa arferion cyflenwi sy'n
cydberthyn â pherfformiad sefydliadol. Y canlyniad oedd pedwar metrig,
wedi'u parejo'n ddau a dau: mae amledd defnyddio ac amser arwain ar
gyfer newidiadau'n mesur cyflymder; mae cyfradd methiant newid ac amser
adfer defnyddio wedi methu, a fyrhewir yn aml i gymedr amser i adfer
(MTTR), yn mesur sefydlogrwydd. Y canfyddiad ymchwil a wnaeth y
fframwaith yn arwyddocaol oedd bod perfformwyr elit yn gyflym ac yn
sefydlog ar yr un pryd, gan ddymchwel y dybiaeth bod cyflymder a
diogelwch yn masnachu yn erbyn ei gilydd, ac mae'r canfyddiad hwnnw'n
dal yr enghraifft weithredig fwyaf clir sydd gan y llyfr hwn o egwyddor
parejo-cledr-ddiogelwch pwnc 1.2: metrig cyflymder wedi'i gymell, wedi'i
parejo â chledr ddiogelwch sefydlogrwydd, yw'r hyn y mae'r sefydliadau
sy'n perfformio orau'n ei wneud mewn gwirionedd.

Mae'r llyfr hwn yn ymdrin â DORA olaf yn y rhan hon, yn fwriadol, yn
hytrach nag fel fframwaith trefnu'r rhan. Nid yw'r lleoliad hwnnw'n
wrthodiad o'r ymchwil, sy'n parhau i fod yn wirioneddol drylwyr ac yn
werth ei ddefnyddio. Mae'n adlewyrchu cyfyngiad penodol, gwirioneddol:
mae DORA yn mesur pa mor gyflym a pha mor ddiogel y mae piblinell yn
symud, ond mae'n dawel ynghylch beth sy'n symud trwy'r biblinell. Gall
tîm bostio rhifau DORA rhagorol tra bo'i allbwn gwirioneddol wedi drifftio'n
dawel tuag at ailwaith diffygion neu wedi llwgu dyled dechnegol a gwaith
diogelwch o gynhwysedd, patrwm y mae Fframwaith Llif pynciau 2.1 i 2.4 wedi'i
adeiladu'n benodol i'w ddatgelu ac na all DORA ei weld. Defnyddiwch DORA
fel y mae'r pwnc hwn yn ei gyflwyno: mesur cyfeirnod cul, wedi'i
ddilysu'n dda, o fecaneg piblinell, nid darlun cyfan iechyd cyflenwi.

I dimau mawr, cymharedd yw gwerth gwirioneddol, parhaus DORA. Mae
metrig a gyfrifir yn gyson o ddata piblinell a digwyddiad yn caniatáu i
sefydliad gymharu gallu cyflenwi ar draws llawer o dimau sy'n gweithio
mewn parthau gwahanol heb y broblem afalau-ac-orennau sy'n poeni'r rhan
fwyaf o gymariaethau traws-dîm. Mae sefydliadau menter yn dal i'w
ddefnyddio i flaenoriaethu buddsoddiad platfform; mae sefydliadau
llywodraeth yn dal i'w ddefnyddio i ddangos, gyda thystiolaeth, bod
rhaglen foderneiddio wedi gwella mecaneg cyflenwi'n fesuradwy.
Trinwch hynny fel swydd briodol, gyfyngedig DORA, a defnyddiwch bynciau'r
Fframwaith Llif yn gynharach yn y rhan hon ar gyfer y cwestiwn ehangach
o pa un a yw'r pethau cywir yn cael eu cyflenwi o gwbl.

## Egwyddorion allweddol

- **Mae DORA yn mesur y biblinell, nid y gwerth sy'n llifo trwyddi.** Mae
  pwnc 2.1 yn enwi'r bwlch hwn yn uniongyrchol; defnyddiwch
  ddosbarthiad llif (pwnc 2.3) i weld yr hyn na all DORA ei weld.
- **Mesurir cyflymder a sefydlogrwydd gyda'i gilydd, byth ar wahân.**
  Nid yw dangosfwrdd wedi'i lywio gan DORA heb y ddau hanner mewn
  gwirionedd yn defnyddio'r fframwaith.
- **Mae cysondeb diffiniad yn bwysicach na'r rhif crai.** Mae tîm yn
  symud o berfformiad "canolig" i "uchel" ar fetrig wedi'i ddiffinio'n
  gyson yn signal gwirioneddol; nid yw cymharu dau dîm a gyfrifwyd yn
  wahanol.
- **Mae DORA yn mesur y system, nid unigolion.** Mae cymhwyso'r
  metrigau hyn at beirianwyr unigol yn torri sylfaen ystadegol y
  fframwaith ac yn gwahodd union y twyllo y mae pwnc 1.2 yn rhybuddio
  yn ei erbyn.
- **Mae pob un o'r pedwar metrig yn ddirprwy, nid yn nod.** Maent yn
  cydberthyn â pherfformiad sefydliadol; mae mynd ar drywydd y rhif ei
  hun, ar wahân i welliant cyflenwi gwirioneddol, yn trechu pwrpas y
  fframwaith.

## Argymhellion

### Offeryna amledd defnyddio o'r biblinell, gan gyfrif dim ond ryddhadau cynhyrchu

Mae **amledd defnyddio** yn mesur pa mor aml y mae tîm yn rhyddhau i
gynhyrchu'n llwyddiannus. Cyfrifwch ddim ond defnyddiadau cynhyrchu
llwyddiannus, wedi'u hoffryno'n awtomatig o ddata piblinell CI/CD, byth
wedi'u hunan-adrodd. Gwyliwch yn benodol am dwyllo amnewid, hollti un
newid ystyrlon yn nifer o ddefnyddiadau dibwys yn bur i chwyddo'r cyfrif,
trwy olrhain maint defnyddio ochr yn ochr ag amledd: mae maint
cyfartalog crebachu ynghlwm â chyfrif cynyddol yn arwydd cliriaf bod hyn
yn digwydd.

### Offeryna amser arwain ar gyfer newidiadau o'r ymrwymiad cyntaf hyd cynhyrchu

Mae **amser arwain ar gyfer newidiadau** yn mesur yr amser o ymrwymiad
cyntaf newid cod hyd ei ddefnyddio llwyddiannus mewn cynhyrchu.
Adroddwch y canolrif a phersentil uchel, nid dim ond cymedr, gan ddilyn
canllawiau pwnc 1.6 ar ddata seiliedig-ar-amser sgiw, a gwyliwch am
drifft diffiniad ar y naill ben neu'r llall, sy'n gwneud y rhif yn well
heb unrhyw welliant gwirioneddol.

### Diffiniwch gyfradd methiant newid yn ysgrifenedig cyn cymharu ar draws timau

Mae **cyfradd methiant newid** yn mesur canran y defnyddiadau sy'n achosi
methiant sydd angen unioni, dychweliad, trwsiad brys, neu ddigwyddiad.
Dyma'r anoddaf o'r pedwar i'w ddiffinio'n gyson, oherwydd nid yw
"methiant" yn amlwg-wrtho'i-hun yn wrthrychol. Cytunwch ar ddiffiniad
ysgrifenedig cyn cymharu timau; hebddo, gall cymhariaeth sy'n ymddangos
yn deg gamarwain yn ddrwg. Gwyliwch am welliant amheus o gyflym heb
unrhyw newid proses sylfaenol y tu ôl iddo, arwydd cliriaf o dwyllo
diffiniad yn hytrach na chynnydd gwirioneddol.

### Mesurwch amser adfer o ganfyddiad, nid o'r digwyddiad defnyddio

Mae **amser adfer defnyddio wedi methu** yn mesur pa mor hir y mae'n ei
gymryd i adfer gwasanaeth unwaith y mae defnyddio'n achosi methiant.
Dechreuwch y cloc ar ganfyddiad, nid ar y digwyddiad defnyddio ei hun,
fel bod y rhif yn adlewyrchu oedi adfer gwirioneddol yn hytrach na bwlch
monitro. Buddsoddwch yn benodol mewn gallu dychwelyd awtomataidd, y
lifer mwyaf cyffredin sengl ar gyfer gwella'r metrig hwn yn wirioneddol
yn hytrach na thrwy ddatgan digwyddiad wedi'i ddatrys yn gynamserol.

### Defnyddiwch fetrigau llif, nid DORA, i ddiagnosio pam symudodd rhif

Pan fydd metrig DORA yn symud, mae'r pedwar rhif ar eu pen eu hunain yn
anaml yn egluro pam. Defnyddiwch ddadelfeniad amser cylch (pwnc 2.6),
llwyth llif (pwnc 2.4), a dosbarthiad llif (pwnc 2.3) fel yr haen
ddiagnostig o dan rifau crynodeb DORA, a pheidiwch byth â defnyddio
metrig DORA mewn adolygiad perfformiad unigol, y camddefnydd sengl mwyaf
niweidiol y mae'r fframwaith hwn yn agored iddo.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Fframwaith DORA llawn, pob un o'r pedwar metrig wedi'u parejo | Wedi'i ddilysu gan ymchwil, yn gwrthsefyll twyllo trwy barejo, yn galluogi cymhariaeth deg draws-dîm | Yn dawel ynghylch pa fath o werth sy'n cael ei gyflenwi; angen y Fframwaith Llif ochr yn ochr ag ef ar gyfer y darlun hwnnw |
| DORA fel unig set fetrigau drefnu'r rhan hon | Syml, cyfarwydd i'r rhan fwyaf o arweinwyr peirianneg | Yn colli'r cwestiwn cymysgedd-gwerth yn gyfan gwbl, rheswm y llyfr hwn dros ei ddad-flaenoriaethu yma |
| DORA a'r Fframwaith Llif gyda'i gilydd | Mae mecaneg piblinell a chymysgedd gwerth ill dau'n weladwy | Angen cynnal dwy eirfa fetrig yn lle un |
| DORA wedi'i gymhwyso ar lefel unigol | Yn teimlo'n uniongyrchol weithredadwy i rai rheolwyr | Yn torri dilysrwydd ystadegol y fframwaith; amlygiad cryf i ddeddf Goodhart |

Y tensiwn canolog yw **trylwyredd mecanyddol yn erbyn darllenadwyedd
busnes**. Mae pedwar metrig DORA wedi'u diffinio'n fanwl gywir ac wedi'u
dilysu gan ymchwil, sy'n eu gwneud yn ardderchog ar gyfer cymharu
perfformiad piblinell ar draws timau, ond mae'r un manwl gywirdeb hwnnw
wedi'i gwmpasu'n gul i'r biblinell ei hun ac nid yw'n dweud unrhyw beth
am pa un a yw'r gwaith cywir yn llifo trwyddi. Datryswch y tensiwn trwy
gadw DORA fel haen gyfeirnod ar gyfer iechyd piblinell, lle priodol
pwnc 2.10 yng nghyfundrefn y llyfr hwn, tra'n defnyddio pynciau'r
Fframwaith Llif yn gynharach yn y rhan hon ar gyfer y cwestiwn
busnes-wynebedig o gymysgedd gwerth, yn hytrach na cheisio gwneud i
DORA ateb cwestiwn na chafodd erioed ei ddylunio i'w ateb.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A ydym yn offeryno pob un o'r pedwar metrig DORA o'r biblinell, neu
   a yw rhai ohonynt yn amcangyfrifon hunan-adroddedig?** Mae fframwaith
   wedi'i adeiladu ar fesuriad gwrthrychol, wedi'i ddilysu gan ymchwil,
   yn colli llawer o'i werth y foment y daw rhif yn ddyfaliad gorau.
   Archwiliwch ffynhonnell ddata wirioneddol pob metrig (pwnc 1.5).

2. **A yw'r holl dimau yr ydym yn eu cymharu gan ddefnyddio metrigau DORA
   yn rhannu'r un diffiniadau o ddefnyddio, newid, a methiant?** Nid yw
   cymhariaeth rhwng timau sy'n defnyddio diffiniadau gwahanol yn
   gymhariaeth wirioneddol, a gall gynhyrchu dyfarniadau annheg am
   berfformiad cymharol.

3. **A oes unrhyw un yn ein sefydliad wedi defnyddio metrig DORA mewn
   adolygiad perfformiad unigol, yn ffurfiol neu'n anffurfiol?** Dyma'r
   camddefnydd sengl mwyaf niweidiol o'r fframwaith ac mae'n digwydd yn
   dawel yn aml. Gofynnwch yn uniongyrchol a byddwch yn barod am ateb
   anghyfforddus ond angenrheidiol.

4. **A allai ein rhifau DORA fod yn ardderchog tra bo'n dosbarthiad llif
   (pwnc 2.3) wedi drifftio'n dawel tuag at ailwaith neu i ffwrdd o
   nodweddion?** Dyma'n union y bwlch na all DORA ei weld ar ei ben ei
   hun. Tynnwch y ddwy set o rifau gyda'i gilydd a gwiriwch a ydynt yn
   adrodd stori gyson.

5. **Pan fydd un o'n metrigau DORA yn symud, a oes gennym y diagnosteg
   metrig-llif i egluro pam?** Mae rhif DORA ar ei ben ei hun yn dweud
   wrthych fod rhywbeth wedi newid, nid beth. Gwiriwch a all eich timau
   ateb "pam gynyddodd amser arwain y mis hwn" gyda data, neu ddim ond â
   dyfaliad.

6. **Sut fyddai ein pedwar rhif DORA'n newid petaem yn ceisio twyllo pob
   un yn fwriadol, a fyddem yn sylwi?** Ewch trwy amledd defnyddio, amser
   arwain, cyfradd methiant newid, ac amser adfer fesul un, cymhwysiad
   ymarferol o ddisgyblaeth graidd pwnc 1.2 i'r fframwaith penodol
   hwn.

## Golwg sector

**Cwmni newydd.** Mae metrigau cyflymder DORA fel arfer yn dod yn
naturiol i dîm bach sydd eisoes yn defnyddio'n aml; y ddisgyblaeth
anos yw offeryno cyfradd methiant newid ac amser adfer yn onest yn
hytrach na thybio sefydlogrwydd oherwydd nad oes dim wedi torri'n ddrwg
eto. Mae parejo DORA â hollt eitem-llif anffurfiol hyd yn oed (pwnc
2.2) yn gynnar yn osgoi adeiladu ymdeimlad ffug o iechyd cyflenwi o
gwmpas cyflymder piblinell yn unig.

**Busnes bach.** Mae'r rhan fwyaf o blatfformau CI/CD a rheoli fersiwn
modern yn allforio data amledd defnyddio ac amser arwain gyda lleiafswm
o osod; mae cysylltu defnyddiadau â digwyddiadau ar gyfer cyfradd
methiant newid fel arfer angen mwy o ymdrech â llaw. Dechreuwch â'r ddau
fetrig cyflymder ac ychwanegwch olrhain sefydlogrwydd cyn gynted ag y
bydd log digwyddiad anffurfiol yn bodoli i gysylltu ag ef.

**Menter.** Cymhariaeth deg, gyson draws-dîm ar gyfer penderfyniadau
buddsoddi platfform yw gwerth mwyaf parhaus DORA ar y raddfa hon.
Safonwch ddiffiniadau ar draws y sefydliad (pwnc 1.4), awtomeiddiwch
offeryno'n ganolog, a pharejwch bob adroddiad DORA â golwg dosbarthiad
llif fel bod arweinyddiaeth yn gweld cyflymder piblinell a chymysgedd
gwerth gyda'i gilydd, nid y naill heb y llall.

**Llywodraeth.** Mae metrigau DORA'n dal i roi ffordd amddiffynadwy,
wedi'i chefnogi gan ymchwil, i raglen foderneiddio ddangos gwelliant
mecaneg cyflenwi i gyrff goruchwylio. Adroddwch bob un o'r pedwar metrig
gyda'i gilydd, byth yn dewis-a-dethol yr hanner mwy deniadol, a
pharejwch nhw â dosbarthiad llif fel bod yr adroddiad hefyd yn ateb y
cwestiwn anoddach, pwysicach o beth mae'r biblinell gyflymach yn ei
gyflenwi mewn gwirionedd.

## Enghreifftiau

**Menter.** Offerynodd rhaglen foderneiddio platfform cwmni
telegyfathrebu mawr bob un o'r pedwar metrig DORA yn gyson ar draws
deugain tîm cynnyrch a dangosodd symudiad gwirioneddol o fand isel-
berfformiwr i uchel-berfformiwr dros ddeunaw mis, amledd defnyddio i fyny
tua degwaith, amser arwain i lawr o wythnosau i ddiwrnodau, cyfradd
methiant newid yn aros yn fflat. Gofynnodd aelod bwrdd, wrth adolygu'r
cyflwyniad, gwestiwn na allai rifau DORA ar eu pen eu hunain ei ateb: faint
o'r cyflenwi cyflymach hwnnw oedd gwerth cwsmer newydd yn erbyn ailwaith.
Nid oedd gan y sefydliad peirianneg ateb tan iddo fabwysiadu dosbarthiad
eitem-llif y chwarter dilynol, a ddangosodd fod gwaith nodweddion mewn
gwirionedd wedi gostwng fel cyfran o gyfanswm allbwn hyd yn oed wrth i
rifau cyflymder DORA wella, canfyddiad a ail-luniodd flaenoriaethau'r
rhaglen ar gyfer y flwyddyn ganlynol.

**Llywodraeth.** Mabwysiadodd swyddfa foderneiddio TG llywodraeth
talaith fetrigau DORA fel amod contract i gymharu gallu cyflenwi sawl
tîm gwerthwr cystadleuol, defnydd effeithiol o gymharedd y fframwaith.
Datgelwyd bod amledd defnyddio uchel un gwerthwr, unwaith y gofynnwyd am
gyfradd methiant newid ochr yn ochr ag ef, yn cydberthyn â chyfradd
methiant bron deirgwaith yn uwch na'i gymheiriaid, gwybodaeth a lywiodd
benderfyniad adnewyddu contract y swyddfa'n uniongyrchol. Ychwanegodd y
swyddfa ofyniad dosbarthiad-llif at yr un contractau'n ddiweddarach ar
ôl darganfod mai'r gwerthwr â'r rhifau DORA gorau hefyd oedd yr un a
oedd yn gwario'r gyfran leiaf o gynhwysedd ar y gwaith unioni diogelwch yr
oedd y contract yn ei fynnu'n benodol.

## Achos busnes: cymhellion, ROI, a TCO

Ateb amddiffynadwy, seiliedig-ar-dystiolaeth i "a yw ein piblinell
gyflenwi'n mynd yn gyflymach ac yn fwy diogel" yw'r enillion ar
fabwysiadu DORA yn dda, o fewn ei gwmpas priodol, sy'n parhau i fod yn
un o'r cwestiynau mwy hydrin mewn peirianneg i'w ateb â hyder. Mae'r ateb
hwnnw'n cyfiawnhau buddsoddiad platfform ac offer â rhifau gwirioneddol,
ac yn caniatáu i arweinyddiaeth gymharu buddsoddiadau cystadleuol ar sail
deg, gyson, yn union fel y mae erioed wedi'i wneud.

Y gwaith integreiddio i gysylltu digwyddiadau defnyddio â chofnodion
digwyddiad ar gyfer cyfradd methiant newid ac amser adfer, yn
sylweddol ar draws tirwedd offer mawr, heterogenaidd, yw cost cyfanswm
perchnogaeth. Mae'r gost ychwanegol o barejo DORA â phynciau'r
Fframwaith Llif yn gynharach yn y rhan hon yn gymharol fach, gan fod
dosbarthiad eitem-llif yn gonfensiwn adrodd wedi'i haenu ar waith
presennol, nid system fesur gyfochrog, ac mae'r enillion, dal yn union y
man dall cymysgedd-gwerth y mae'r enghraifft telegyfathrebu uchod yn ei
ddangos, yn werth chweil am y buddsoddiad cymedrol ychwanegol hwnnw.

## Gwrth-batrymau a risgiau

- **Trin DORA fel darlun cyfan iechyd cyflenwi:** y fector twyllo y mae
  lleoliad y pwnc hwn wedi'i ddylunio i'w wrthweithio. Gall sefydliad
  gyflwyno rhifau DORA gwirioneddol ragorol, defnyddiadau cyflym, aml,
  sefydlog, tra bo'i werth wedi'i gyflenwi mewn gwirionedd wedi symud yn
  dawel tuag at ailwaith neu i ffwrdd o nodweddion, ac ni fydd pedwar
  metrig DORA ar eu pen eu hunain byth yn datgelu'r symudiad hwnnw
  oherwydd na chawsant erioed eu dylunio i'w fesur. Y gledr ddiogelwch
  yw parejo pob adroddiad DORA â dosbarthiad llif (pwnc 2.3), fel bod
  piblinell gyflym, sefydlog sy'n cyflenwi'r cymysgedd anghywir o waith
  yn weladwy yn hytrach na chael ei gamgymryd am iechyd cyflenwi
  gwirioneddol.
- **Adrodd dim ond hanner cyflymder DORA:** yn trechu canfyddiad canolog
  y fframwaith bod cyflymder a sefydlogrwydd yn symud gyda'i gilydd
  mewn perfformwyr uchel.
- **Defnyddio metrigau DORA mewn adolygiadau perfformiad unigol:** yn
  torri dilysrwydd ystadegol y fframwaith ac yn gwahodd twyllo cryf.
- **Cymharu timau â diffiniadau anghyson:** yn cynhyrchu cymariaethau
  sy'n edrych yn deg ond nad ydynt.
- **Rhifau DORA hunan-adroddedig yn hytrach na rhai wedi'u hoffryno o'r
  biblinell:** yn cyflwyno union y gogwydd yr oedd y fframwaith wedi'i
  ddylunio i'w ddileu.
- **Trin DORA fel un diagnostig yn hytrach na chrynodeb:** yn gadael tîm
  yn methu ag egluro pam symudodd rhif heb yr haen metrig-llif oddi
  tano.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Mae metrigau DORA, os ydynt yn cael eu holrhain
  o gwbl, yn hunan-adroddedig, wedi'u diffinio'n anghyson, ac erioed
  wedi'u parejo â data llif.
- **Lefel 2, Datblygu:** Mae rhai timau'n offeryno DORA o'r biblinell,
  ond mae diffiniadau'n amrywio ac nid oes cymar dosbarthiad-llif i
  wirio yn ei erbyn.
- **Lefel 3, Safoni:** Offerynir pob un o'r pedwar metrig DORA yn gyson
  o ddata piblinell a digwyddiad, gyda diffiniadau a rennir, ac fe'u
  dangosir yn rheolaidd ochr yn ochr â dosbarthiad llif.
- **Lefel 4, Rheoli:** Adolygir metrigau DORA a llif gyda'i gilydd fel
  parejad safonol ar bob lefel o'r sefydliad, ac ni ddefnyddir DORA
  byth ar gyfer gwerthuso unigol.
- **Lefel 5, Cerddorfaru:** Gall y sefydliad bwyntio at achosion
  penodol lle daliodd dosbarthiad llif broblem cymysgedd-gwerth yr oedd
  rhifau DORA rhagorol ar eu pen eu hunain wedi'i chuddio, ac mae'n
  defnyddio'r ddau fframwaith yn fwriadol ar gyfer y cwestiynau
  gwahanol y mae pob un yn eu hateb.

## Syniadau ar gyfer trafodaeth

1. Ble mae ein pedwar metrig DORA yn ein gosod ar y sbectrwm haenau-perfformiad ar hyn o bryd, yn onest?
2. A allai ein rhifau DORA edrych yn ragorol tra bo'n dosbarthiad llif wedi drifftio'n dawel? A ydym erioed wedi gwirio?
3. A oes unrhyw un erioed wedi defnyddio rhif DORA i farnu unigolyn, hyd yn oed yn anffurfiol?
4. Petai cystadleuydd yn cyhoeddi ei rifau DORA, a fyddai ein rhai ni'n cymharu'n ffafriol, ac a fyddai'r gymhariaeth honno mewn gwirionedd yn dweud wrthym pwy sy'n cyflenwi mwy o werth gwirioneddol?

## Prif gasgliadau

- Mae pedwar metrig DORA, **amledd defnyddio, amser arwain, cyfradd
  methiant newid, ac amser adfer**, yn parejo cyflymder â sefydlogrwydd
  yn ôl dyluniad ac yn parhau i fod wedi'u dilysu gan ymchwil mewn
  gwirionedd.
- Mae'r llyfr hwn yn gosod DORA **olaf yn y rhan hon** oherwydd ei fod
  yn mesur y biblinell, nid y gwerth sy'n llifo trwyddi; parejwch ef â
  dosbarthiad llif (pwnc 2.3) am y darlun cyflawnach.
- Fector twyllo canolog y pwnc yw **camgymryd rhifau DORA rhagorol am
  iechyd cyflenwi cyflawn**; y gledr ddiogelwch yw adrodd DORA bob amser
  ochr yn ochr â dosbarthiad llif.
- **Peidiwch byth â defnyddio metrigau DORA mewn adolygiadau perfformiad
  unigol**; mae dilysrwydd y fframwaith yn dibynnu ar fesuriad lefel-
  system, nid unigol.
- Defnyddiwch **fetrigau llif fel yr haen ddiagnostig** o dan rifau
  crynodeb DORA pan fydd un ohonynt yn symud.

## Cyfeiriadau a darllen pellach

- Forsgren, Nicole, Jez Humble, a Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. Rhaglen Ymchwil ac Asesu DevOps.
  [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, a George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, a John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the
  Age of Digital Disruption with the Flow Framework*. IT Revolution
  Press, 2018.
