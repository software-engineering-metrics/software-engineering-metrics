# 6.1 Dangosyddion, amcanion, a chyllidebau gwall lefel gwasanaeth

## Trosolwg a chymhelliant

Cyfrannodd **[peirianneg dibynadwyedd safle](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(SRE)**, y ddisgyblaeth a arloeswyd yn Google ac a ddogfennwyd yn y
llyfr *Site Reliability Engineering*, eirfa y mae'r pwnc hwn yn
adeiladu arni'n uniongyrchol: mae **dangosydd lefel gwasanaeth (SLI)**
yn signal a fesurir yn uniongyrchol o iechyd gwasanaeth, latenedd cais,
cyfradd gwall, argaeledd. Mae **amcan lefel gwasanaeth (SLO)** yn ystod
darged ar gyfer y dangosydd hwnnw, 99.9% o geisiadau'n llwyddo o fewn
200 milieiliad, er enghraifft. Ac mae **cyllideb gwall** yn ddiffyg a
ganiateir, y 0.1% o geisiadau a ganiateir i fethu, wedi'i drin nid fel
diffyg i'w ddileu ond fel adnodd gwariadwy y gellir ei ddefnyddio'n
fwriadol i gymryd perygl: rhyddhau newid peryglus, rhedeg arbrawf, neu'n
syml dderbyn nad yw dibynadwyedd perffaith yn gyraeddadwy nac, y tu
hwnt i bwynt penodol, yn werth ei gost.

Y syniad olaf hwn, cyllideb gwall fel adnodd gwariadwy yn hytrach na
rhif i'w leihau tuag at sero, yw'r cysyniad sengl pwysicaf yn y pwnc
hon ac o bosibl yn y rhan gyfan hon. Mae'n datrys tensiwn sy'n poeni
llawer o sefydliadau: mae peirianneg eisiau rhyddhau nodweddion a
chymryd peryglon rhesymol; mae gweithrediadau eisiau sefydlogrwydd
mwyaf. Heb gyllideb gwall a rennir, wedi'i meintioli, mae hyn yn dod yn
negodiad diddiwedd, wedi'i wleidyddoli. Gydag un, mae'n dod yn rheol
syml, wrthrychol: gwariwch yn rhydd tra bo cyllideb yn aros, arafwch a
blaenoriaethwch waith sefydlogrwydd yn awtomatig unwaith y'i disbyddir.
Mae hyn yn troi anghytundeb athronyddol yn un rhifyddol.

I dimau mawr, mae SLOs a chyllidebau gwall yn gwneud dibynadwyedd yn
fesuradwy ac yn negodiadwy yn hytrach nag absolwt na ellir ei gyrraedd,
heb ei ddatgan y mae pob tîm yn methu'n dawel â'i fodloni tra'n teimlo'n
euog yn amwys yn ei gylch. Mae sefydliadau menter yn defnyddio SLOs i
osod disgwyliadau clir, contractiol rhwng timau a chyda chwsmeriaid; mae
sefydliadau llywodraeth sy'n gweithredu isadeiledd cyhoeddus
dyngedfennol yn eu defnyddio i osod targedau dibynadwyedd amddiffynadwy,
gyhoeddus gyfiawnadwy yn hytrach na safon berffeithrwydd amhosibl na
all yr un system wirioneddol ei chynnal.

## Egwyddorion allweddol

- **Mae dibynadwyedd 100% yn darged anghywir ar gyfer bron unrhyw
  system.** Fel arfer nid yw'n gyraeddadwy, ac mae ei ddilyn y tu hwnt
  i bwynt penodol yn masnachu cyflymder i ffwrdd yn weithredol am ddim
  budd defnyddiwr ystyrlon.
- **Dylai SLO adlewyrchu'r hyn y mae defnyddwyr mewn gwirionedd yn
  sylwi arno ac yn poeni amdano**, nid rhif crwn mympwyol a ddewiswyd
  oherwydd ei fod yn swnio'n gysurlon.
- **Mae'r gyllideb gwall yn troi dibynadwyedd yn adnodd gwariadwy**,
  gan roi rheol wrthrychol, a rennir i beirianneg a gweithrediadau fel
  ei gilydd ar gyfer pryd i ryddhau'n gyflym a phryd i arafu.
- **Rhaid mesur SLIs o brofiad gwirioneddol y defnyddiwr** lle bynnag
  y bo'n bosibl, nid dim ond o iechyd hunan-adroddedig system fewnol.
- **Mae disbyddu'r gyllideb gwall yn sbarduno ymateb wedi'i
  benderfynu ymlaen llaw, y cytunwyd arno**, nid dadl ad hoc bob tro y
  mae'n digwydd.

## Argymhellion

### Dewiswch SLIs sy'n adlewyrchu profiad defnyddiwr gwirioneddol

Dewiswch ddangosyddion wedi'u mesur mor agos â phosibl at brofiad
gwirioneddol y defnyddiwr: cyfradd llwyddiant a latenedd cais wedi'u
mesur wrth yr ymyl neu'r cydbwysydd llwyth, nid dim ond gwiriadau
iechyd gwasanaeth mewnol a all adrodd "iach" tra bo defnyddwyr yn
profi problemau gwirioneddol. Mae SLI sy'n mesur rhywbeth nad yw'r
defnyddiwr byth mewn gwirionedd yn sylwi arno, cydran fewnol yn
dechnegol i fyny tra bo'r cais cyffredinol yn dal i fethu, yn mesur y
peth anghywir waeth pa mor hawdd y gallai fod i'w offeryno.

### Gosodwch y targed SLO yn seiliedig ar yr hyn y mae defnyddwyr mewn gwirionedd ei angen, nid rhif crwn mympwyol

Gwrthsefyllwch yr adwaith i osod targed fel "99.99% amser i fyny" yn
syml oherwydd ei fod yn swnio'n drylwyr yn drawiadol. Yn lle hynny,
ymchwiliwch pa lefel dibynadwyedd y mae defnyddwyr mewn gwirionedd yn
sylwi arni ac yn poeni amdani, wedi'i hysbysu gan ddata digwyddiad
hanesyddol, ymchwil defnyddiwr, a chost ddangosedig cyflawni pob
cynyddiad ychwanegol o ddibynadwyedd, gan fod mynd o 99.9% i 99.99% yn
aml yn costio llawer mwy o ymdrech beirianneg na mynd o 99% i 99.9%, am
fudd canfyddadwy-i-ddefnyddiwr sy'n lleihau ac yn y pen draw'n ddibwys.

### Triniwch y gyllideb gwall fel adnodd gwariadwy ag ymateb wedi'i benderfynu ymlaen llaw i ddisbyddiad

Cyfrifwch y gyllideb gwall yn uniongyrchol o'r SLO (mae targed
argaeledd 99.9% dros 30 diwrnod yn caniatáu tua 43 munud o amser-i-lawr
a ganiateir) ac olrheiniwch wariant yn ei erbyn yn barhaus. Cytunwch,
ymlaen llaw a chyn unrhyw ddigwyddiad penodol, beth sy'n digwydd pan
ddisbyddir y gyllideb: mae polisi cyffredin, effeithiol yn nodi bod
gwaith nodweddion yn oedi a blaenoriaeth y tîm yn symud yn awtomatig i
waith dibynadwyedd hyd nes i'r gyllideb adfer. Mae'r rheol wedi'i
phenderfynu ymlaen llaw hon yn dileu'r angen i ail-ddadlau'r cyfaddawd
o dan bwysau yn ystod pob digwyddiad unigol.

### Defnyddiwch y gyllideb gwall i wneud penderfyniadau perygl bwriadol, gwybodus

Nid yw cyllideb gwall iach, heb ei gwario'n rhywbeth i'w chronni; mae'n
ganiatâd i gymryd peryglon rhesymol, rhyddhau newid â pherygl uwch ond
derbyniol, rhedeg arbrawf peirianneg-anhrefn (mae pwnc peirianneg-
anhrefn y llyfr chwaer `software-engineering-guide` yn ymdrin â hyn yn
uniongyrchol), neu dderbyn newid pensaernïaeth mwy peryglus, oherwydd
mae'r gyllideb yn bodoli'n benodol i gael ei gwario'n fwriadol yn
hytrach na'i chadw'n ddigyffwrdd. Mae cyllideb gwall na chaiff byth ei
gwario'n awgrymu naill ai dîm gorgeidwadol neu SLO wedi'i gosod yn rhy
llac mewn perthynas â dibynadwyedd gwirioneddol a gyflawnwyd, ac mae'r
ddau'n werth eu harchwilio.

### Adolygwch ac adolygwch SLOs yn gyfnodol, yn seiliedig ar dystiolaeth, nid inertia

Efallai na fydd SLO a osodwyd flynyddoedd yn ôl bellach yn adlewyrchu
disgwyliadau defnyddiwr cyfredol, pensaernïaeth system, na
blaenoriaethau busnes. Adolygwch SLOs ar gadence rheolaidd, gan wirio
dibynadwyedd hanesyddol a gyflawnwyd, adborth defnyddiwr, ac a yw'r
targed yn dal i gynrychioli pwynt cyfaddawd ystyrlon yn hytrach na naill
ai darged hawdd ei fodloni y gellid ei dynhau i alluogi mwy o gyflymder
mewn man arall, neu un afrealistig y mae'r tîm i bob pwrpas wedi rhoi'r
gorau i geisio'i fodloni.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Dim SLO ffurfiol ("mor ddibynadwy â phosibl" yn oblygedig) | Dim baich i'w sefydlu | Negodi diddiwedd, heb ei seilio rhwng cyflymder a sefydlogrwydd; dim rheol a rennir |
| SLO uchelgeisiol, uchel iawn (99.99%+) | Yn signalu difrifoldeb am ddibynadwyedd | Yn aml yn gost ddiangen; enillion lleihaol y tu hwnt i'r hyn y mae defnyddwyr mewn gwirionedd yn sylwi arno |
| SLO seiliedig-ar-dystiolaeth, wedi'i seilio ar brofiad-defnyddiwr | Yn adlewyrchu gwerth gwirioneddol; amddiffynadwy a chyraeddadwy | Angen data a dadansoddiad gwirioneddol i'w osod yn gywir |
| Cyllideb gwall ag ymateb disbyddiad wedi'i benderfynu ymlaen llaw | Yn dileu negodi ad hoc; gwneud penderfyniadau gwrthrychol, cyflym | Angen cefnogaeth sefydliadol a disgyblaeth i wirioneddol anrhydeddu'r rheol wedi'i phenderfynu ymlaen llaw |

Y tensiwn canolog yw **uchelgais yn erbyn cyraeddadwyedd**. Mae SLO
uchel, uchelgeisiol yn teimlo fel ei fod yn signalu difrifoldeb am
ansawdd, ond mae dilyn dibynadwyedd y tu hwnt i'r hyn y mae defnyddwyr
mewn gwirionedd yn sylwi arno'n masnachu cyflymder gwirioneddol i
ffwrdd am ddim budd gwirioneddol, ac mae targed afrealistig nad yw'r
tîm byth mewn gwirionedd yn ei fodloni'n dysgu i bawb stopio cymryd yr
SLO o ddifrif o gwbl. Datryswch y tensiwn trwy seilio'r SLO mewn
tystiolaeth wirioneddol, beth mae defnyddwyr yn sylwi arno, beth y mae'r
system wedi'i gyflawni'n hanesyddol, beth mae pob cynyddiad ychwanegol
yn ei gostio, yn hytrach nag mewn uchelgais neu awydd i edrych yn
drylwyr ar gerdyn sgorio.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A yw ein SLO cyfredol wedi'i seilio mewn tystiolaeth am yr hyn y
   mae defnyddwyr mewn gwirionedd yn sylwi arno, neu a gafodd ei osod
   yn uchelgeisiol oherwydd bod rhif uchel yn teimlo'n briodol
   ddifrifol?** Olrheiniwch darddiad eich targed cyfredol, os gallwch,
   ac aseswch yn onest a yw'n adlewyrchu ymchwil defnyddiwr gwirioneddol
   neu reddf beirianneg yn unig.

2. **A oes gennym ymateb wedi'i benderfynu ymlaen llaw, y cytunwyd
   arno i ddisbyddiad cyllideb-gwall, neu a yw'r cyfaddawd yn cael ei
   ail-ddadlau bob tro y mae'n digwydd?** Os yw'r ateb onest yn yr
   ail, mae'r bwlch hwnnw'n werth ei gau cyn i'r digwyddiad nesaf
   orfodi'r ddadl o dan bwysau.

3. **A yw ein cyllideb gwall erioed mewn gwirionedd yn cael ei gwario'n
   fwriadol, ar newid perygl-cyfrifedig neu arbrawf, neu a yw dim ond
   byth yn cael ei defnyddio'n ddamweiniol trwy ddigwyddiadau?** Gallai
   cyllideb nad yw byth yn cael ei gwario'n fwriadol nodi tîm
   gorwyliadwrus sy'n colli cyfleoedd dilys y mae'r gyllideb yn bodoli
   i'w galluogi.

4. **A yw ein SLIs wedi'u mesur o brofiad defnyddiwr gwirioneddol, neu o
   iechyd system fewnol na allai adlewyrchu'r hyn y mae defnyddwyr
   mewn gwirionedd yn ei brofi?** Gwiriwch eich offeryno cyfredol yn
   erbyn y gwahaniaeth penodol hwn; mae'n fwlch cyffredin hyd yn oed
   mewn rhaglenni dibynadwyedd aeddfed fel arall.

5. **Pryd wnaethom adolygu ein SLO ddiwethaf yn erbyn tystiolaeth
   gyfredol, ac a oes unrhyw beth wedi newid, disgwyliadau defnyddiwr,
   pensaernïaeth system, blaenoriaethau busnes, a fyddai'n cyfiawnhau
   ei ddiwygio?** Os na allwch gofio adolygiad diweddar, mae'r
   absenoldeb hwnnw ei hun yn werth ei drafod.

6. **Beth fyddai'n ei gostio i ni, mewn ymdrech beirianneg, i symud ein
   SLO cyfredol i fyny un "naw" ychwanegol o ddibynadwyedd, ac a fyddai'r
   gost honno'n gyfiawn gan unrhyw fudd defnyddiwr gwirioneddol?** Mae'r
   fframio cost-fudd concrid hwn yn helpu i seilio'r tensiwn uchelgais-
   yn-erbyn-cyraeddadwyedd mewn rhifau gwirioneddol yn hytrach na
   ffafriaeth haniaethol.

## Golwg sector

**Cwmni newydd.** Mae SLOs ffurfiol yn aml yn ddiangen yn gynnar iawn,
pan all y tîm ymateb i broblemau dibynadwyedd yn uniongyrchol ac yn
anffurfiol. Mabwysiadwch o leiaf SLO bras, anffurfiol unwaith y bydd
gennych gwsmeriaid gwirioneddol, sy'n talu'n dibynnu ar amser i fyny,
gan fod disgyblaeth targed penodol, hyd yn oed un sy'n cael ei olrhain
yn llac, yn helpu i flaenoriaethu gwaith dibynadwyedd yn erbyn pwysau
nodweddion yn gynt na mae'r rhan fwyaf o gwmnïau ifanc yn meddwl amdano.

**Busnes bach.** Mae'r rhan fwyaf o blatfformau cynnal ac arsylwi modern
yn adrodd data amser-i-fyny a latenedd sylfaenol gyda lleiafswm o osod;
defnyddiwch hyn i osod SLO syml, cyraeddadwy yn hytrach nag un
uchelgeisiol na allwch ei olrhain neu weithredu arno'n realistig â
chapasiti gweithredol cyfyngedig.

**Menter.** Mae SLOs ar y raddfa hon yn aml yn sail i gytundebau lefel
gwasanaeth contractiol â chanlyniadau ariannol gwirioneddol, sy'n
gwneud gosod targed seiliedig-ar-dystiolaeth a rheolaeth gyllideb-gwall
ddisgybledig yn arbennig o bwysig. Buddsoddwch mewn SLIs gwirioneddol
wedi'u seilio-ar-brofiad-defnyddiwr yn hytrach na gwiriadau iechyd
mewnol cyfleus, a sefydlwch y polisi ymateb-disbyddiad wedi'i
benderfynu ymlaen llaw'n ffurfiol, gyda chefnogaeth weithredol, cyn ei
fod ei angen o dan bwysau.

**Llywodraeth.** Mae gan dargedau dibynadwyedd sector-cyhoeddus ar gyfer
isadeiledd dyngedfennol bwysau cyfreithiol neu reoliadol weithiau, ac
mae targed afrealistig, heb ei gyflawni a ddarganfyddir yn ystod
archwiliad neu ddigwyddiad cyhoeddus yn niweidio credadwyedd
sefydliadol yn sylweddol. Gosodwch dargedau yn seiliedig ar angen
defnyddiwr a chenhadaeth gwirioneddol, wedi'i ddogfennu, a byddwch yn
dryloyw'n gyhoeddus am y cyfaddawd bwriadol y mae cyllideb gwall yn ei
gynrychioli, yn hytrach na goblygu safon berffeithrwydd na ellir ei
chyrraedd.

## Enghreifftiau

**Menter.** Roedd cwmni storio cwmwl wedi targedu "amser i fyny mwyaf"
am flynyddoedd heb SLO ffurfiol, gan arwain at densiwn cronig, heb ei
ddatrys rhwng y tîm cynnyrch (eisiau rhyddhau nodweddion yn gyflym) a'r
tîm isadeiledd (eisiau'r rhagofal mwyaf), wedi'i ddadlau o'r newydd ym
mhob cyfarfod cynllunio rhyddhau. Datryswyd y negodiad ailadroddus yn
gyfan gwbl gan fabwysiadu SLO argaeledd 99.95% ffurfiol â chyllideb
gwall benodol a pholisi wedi'i benderfynu ymlaen llaw, mae gwaith
nodweddion yn oedi'n awtomatig pan ddisbyddir y gyllideb: gallai'r
ddau dîm weld yr un rhif a chytuno ar yr un rheol, ac adroddodd y cwmni
gynnydd mesuradwy mewn nodweddion a ryddhawyd yn ystod cyfnodau o
gyllideb iach ochr yn ochr ag arafiad mesuradwy, bwriadol yn ystod y
ddau gyfnod dros y flwyddyn ganlynol pan ddisbyddwyd y gyllideb
mewn gwirionedd, yn union fel y bwriadai'r polisi.

**Llywodraeth.** Roedd system rhybudd cyhoeddus gwasanaeth tywydd
cenedlaethol wedi gweithredu am flynyddoedd o dan ddisgwyliad
anffurfiol o "bob amser ar gael," heb darged wedi'i ddogfennu a straen
gweithredol sylweddol, heb ei drin ar y tîm ar-alwad wrth geisio
bodloni safon heb ei datgan, i bob pwrpas amhosibl. Rhoddodd SLO
ffurfiol newydd ei fabwysiadu, argaeledd 99.9% ag esboniad cyllideb-
gwall cyhoeddus wedi'i gyfathrebu'n glir, ganiatâd penodol,
amddiffynadwy i'r tîm gweithrediadau amserlennu ffenestri cynnal a chadw
wedi'u cynllunio o fewn y gyllideb, rhywbeth yr oedd y disgwyliad
"bob amser ar gael" heb ei datgan blaenorol wedi'i wneud yn
wleidyddol anodd ei wneud hyd yn oed pan oedd yn wirioneddol angenrheidiol
ar gyfer iechyd system tymor-hir. Cafodd cyfathrebu cyhoeddus yn egluro
cysyniad y gyllideb gwall yn uniongyrchol, yn hytrach na'i guddio, ei
dderbyn yn ffafriol fel arwydd o arfer gweithredol onest, aeddfed yn
hytrach na gwanhau ymrwymiad i ansawdd gwasanaeth.

## Achos busnes: cymhellion, ROI, a TCO

Datrys negodiad diddiwedd, wleidyddol gostus fel arall rhwng cyflymder a
sefydlogrwydd â rheol wrthrychol, sengl, a rennir yw'r enillion ar
fabwysiadu SLOs a chyllidebau gwall yn ffurfiol. Mae'r enghraifft storio
cwmwl uchod yn dangos hyn yn gonc: datryswyd blynyddoedd o densiwn
ailadroddus, heb ei ddatrys rhwng dau dîm gan un targed ffurfiol sengl
a pholisi wedi'i benderfynu ymlaen llaw, gan ryddhau egni sefydliadol
sylweddol a oedd wedi mynd yn flaenorol i ail-ddadlau'r un cyfaddawd yn
ailadroddus.

Mae cost cyfanswm perchnogaeth yn cynnwys yr ymdrech ddadansoddi i
osod targed seiliedig-ar-dystiolaeth yn gywir a'r ddisgyblaeth i
anrhydeddu'r ymateb disbyddiad wedi'i benderfynu ymlaen llaw hyd yn oed
o dan bwysau i ryddhau nodwedd a ddymunir yn arbennig beth bynnag. Mae'r
gost ddisgyblaeth honno'n wirioneddol, ond mae'n llawer is na chost
barhaus negodiad cronig, heb ei ddatrys sy'n defnyddio egni sefydliadol
ym mhob cylch cynllunio'n ddiddiwedd.

## Gwrth-batrymau a pheryglon

- **Gosod SLO uchelgeisiol heb dystiolaeth y tu ôl iddo:** yn cynhyrchu
  targed afrealistig nad yw'r tîm yn ei gymryd o ddifrif mwyach, neu un
  yn ddiangen ddrud yn mynd ar drywydd budd nad yw defnyddwyr yn sylwi
  arno.
- **Dim ymateb wedi'i benderfynu ymlaen llaw i ddisbyddiad cyllideb-
  gwall:** yn gorfodi'r un ddadl cyfaddawd anodd o dan bwysau bob tro y
  mae'n digwydd.
- **Mesur SLIs o iechyd system fewnol yn hytrach na phrofiad defnyddiwr
  gwirioneddol:** gall adrodd "iach" tra bo defnyddwyr yn profi
  problemau gwirioneddol.
- **Byth mewn gwirionedd yn gwario cyllideb gwall iach yn fwriadol:**
  gall nodi rhagofal gormodol a chyfle dilys wedi'i golli.
- **Gosod targed unwaith a byth yn ei ailedrych:** gall SLO fynd yn hen
  ffasiwn wrth i ddisgwyliadau defnyddiwr, pensaernïaeth, a
  blaenoriaethau newid.
- **Trin y polisi cyllideb-gwall fel un dewisol o dan bwysau:** nid yw
  rheol wedi'i phenderfynu ymlaen llaw sy'n cael ei disodli pan bynnag
  y mae'n anghyfleus yn darparu unrhyw werth gwneud-penderfyniadau
  gwirioneddol.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Mae targedau dibynadwyedd yn oblygedig neu'n
  uchelgeisiol, heb SLO, SLI, na chyllideb gwall ffurfiol wedi'u
  diffinio.
- **Lefel 2, Datblygu:** Mae gan rai gwasanaethau SLO anffurfiol, ond
  efallai na fydd SLIs yn adlewyrchu profiad defnyddiwr gwirioneddol ac
  nid oes polisi disbyddiad wedi'i benderfynu ymlaen llaw.
- **Lefel 3, Safoni:** Sefydlir SLOs seiliedig-ar-dystiolaeth â SLIs
  profiad-defnyddiwr gwirioneddol a pholisi disbyddiad cyllideb-gwall
  wedi'i benderfynu ymlaen llaw'n gyson ar draws gwasanaethau
  dyngedfennol.
- **Lefel 4, Rheoli:** Gwerir cyllidebau gwall yn weithredol ac yn
  fwriadol ar gymryd perygl wedi'i gyfrifo, ac adolygir a diwygir SLOs
  ar gadence rheolaidd, seiliedig-ar-dystiolaeth.
- **Lefel 5, Cerddorfaru:** Integreiddir SLOs a chyllidebau gwall ar
  draws y sefydliad fel y mecanwaith gwrthrychol, a rennir ar gyfer
  cydbwyso cyflymder a sefydlogrwydd, a gall y sefydliad bwyntio at
  benderfyniadau penodol a alluogwyd gan y fframwaith na fyddai negodiad
  heb ei seilio wedi'u datrys mor effeithiol.

## Syniadau ar gyfer trafodaeth

1. A yw ein SLO cyfredol wedi'i seilio mewn tystiolaeth, neu mewn uchelgais?
2. A oes gennym ymateb wedi'i benderfynu ymlaen llaw i ddisbyddiad cyllideb-gwall y byddem mewn gwirionedd yn ei anrhydeddu o dan bwysau?
3. Pryd wnaethom fwriadol wario cyllideb gwall iach ddiwethaf ar berygl wedi'i gyfrifo?
4. A yw ein SLIs yn mesur profiad defnyddiwr gwirioneddol neu wiriadau iechyd mewnol cyfleus?
5. Beth fyddai ei gostio i ni godi ein SLO un "naw" ychwanegol, ac a fyddai'r gost honno'n gyfiawn?

## Prif gasgliadau

- Mae **dangosydd lefel gwasanaeth (SLI)** yn mesur profiad defnyddiwr
  gwirioneddol; mae **amcan lefel gwasanaeth (SLO)** yn darged
  seiliedig-ar-dystiolaeth ar ei gyfer; mae **cyllideb gwall** yn
  ddiffyg a ganiateir, gwariadwy'n fwriadol.
- **Fel arfer mae dibynadwyedd 100% yn darged anghywir**; seiliwch eich
  SLO yn yr hyn y mae defnyddwyr mewn gwirionedd yn sylwi arno a beth
  mae pob cynyddiad ychwanegol mewn gwirionedd yn ei gostio.
- Triniwch y gyllideb gwall fel **adnodd gwariadwy ag ymateb disbyddiad
  wedi'i benderfynu ymlaen llaw**, gan ddileu'r angen i ail-ddadlau
  cyflymder-yn-erbyn-sefydlogrwydd o dan bwysau bob tro.
- Mesurwch SLIs o **brofiad defnyddiwr gwirioneddol**, nid dim ond
  gwiriadau iechyd mewnol cyfleus.
- **Adolygwch a diwygiwch SLOs yn gyfnodol**, yn seiliedig ar
  dystiolaeth, gan fod targed hen ffasiwn yn colli ei ddefnyddioldeb
  wrth i'r system a'i defnyddwyr newid.

## Cyfeiriadau a darllen pellach

- *Site Reliability Engineering: How Google Runs Production Systems*,
  gan Betsy Beyer, Chris Jones, Jennifer Petoff, a Niall Richard
  Murphy, gol. (y testun sylfaenol sy'n diffinio SLIs, SLOs, a
  chyllidebau gwall).
- *The Site Reliability Workbook*, gan Betsy Beyer, Niall Richard
  Murphy, David K. Rensin, Kent Kawahara, a Stephen Thorne, gol.
  (canllawiau ymarferol ar weithredu SLOs a chyllidebau gwall).
- *Implementing Service Level Objectives*, gan Alex Hidalgo (canllaw
  cynhwysfawr, wedi'i ffocysu-ar-ymarferydd i ddylunio a gweithredu
  SLOs).
- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (y berthynas rhwng arfer
  dibynadwyedd a pherfformiad cyflenwi).
