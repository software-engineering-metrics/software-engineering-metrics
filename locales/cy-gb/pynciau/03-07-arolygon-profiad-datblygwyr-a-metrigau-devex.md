# 3.7 Arolygon profiad datblygwyr a metrigau DevEx

## Trosolwg a chymhelliant

Mae'r pwnc hwn yn cau Rhan 3 â'r mecaneg ymarferol sy'n gwneud data
hunan-adrodd pob pwnc blaenorol yn ddibynadwy: sut i ddylunio arolwg
profiad datblygwyr (DevEx) sy'n cynhyrchu signal gwirioneddol yn
hytrach na chystadleuaeth boblogrwydd, a sut i gyfuno data arolwg ag
offeryno gwrthrychol yn set fetrigau y gall sefydliad weithredu arni
mewn gwirionedd. Mae pob pwnc yn y rhan hon yn dibynnu ar ryw ffurf o
hunan-adrodd, boddhad a llesiant (pwnc 3.2) yn fwyaf uniongyrchol, ond mae
perfformiad, cyfathrebu, a llif i gyd yn elwa o arolwg wedi'i ddylunio'n
dda hefyd, ac mae arolwg wedi'i ddylunio'n wael yn tanseilio gwerth pob
un ohonynt ar unwaith.

**Profiad datblygwyr (DevEx)** yw'r fframio ehangach, mwy diweddar sydd
wedi dod i'r amlwg o gwmpas yr un syniad craidd a ffurfiolodd SPACE:
mae profiad gwirioneddol, dydd i ddydd peirianwyr o gyflawni gwaith,
ffrithiant, offeryno, llwyth gwybyddol, dolenni adborth, ei hun yn beth
mesuradwy, gwelladwy, nid dim ond pryder diwylliannol meddal. Mae
ymchwil DevEx, yn enwedig y fframwaith a gynigiwyd gan Abi Noda,
Margaret-Anne Storey, Nicole Forsgren, a Michaela Greiler, yn trefnu'r
profiad hwn o gwmpas tri dimensiwn: dolenni adborth, llwyth gwybyddol, a
chyflwr llif, sy'n mapio'n agos ar ac yn ymestyn dimensiynau SPACE y mae'r
rhan hon eisoes wedi'u cwmpasu'n fanwl.

I dimau mawr, mae'r gwahaniaeth rhwng arolwg sy'n cynhyrchu signal
dibynadwy ac un sy'n cynhyrchu sŵn neu, yn waeth, ddata sy'n camarwain yn
weithredol yn gyfan gwbl yn y manylion dylunio y mae'r pwnc hwn yn eu
cwmpasu: geiriad cwestiwn, dewis graddfa ymateb, samplu a chadence, a
sut mae canlyniadau'n cael eu cyfathrebu'n ôl i ymatebwyr. Ni all
sefydliadau menter a llywodraeth sy'n rhedeg yr arolygon hyn ar raddfa,
ar draws miloedd o beirianwyr, fforddio cael hyn yn anghywir, oherwydd
mae offeryn diffygiol ar y raddfa honno'n cynhyrchu casgliadau anghywir
â hyder sy'n llunio penderfyniadau adnoddu gwirioneddol.

## Egwyddorion allweddol

- **Mae ansawdd dylunio arolwg yn pennu dibynadwyedd data yn llawer mwy
  na hyd na soffistigeiddrwydd arolwg.** Mae arolwg byr, wedi'i ddylunio'n
  dda bob amser yn curo un hir, wedi'i ddylunio'n wael.
- **Mae cyfradd ymateb ei hun yn signal**, nid dim ond metrig casglu
  data; mae cyfradd ostyngol yn aml yn nodi ymddiriedaeth sy'n erydu yn
  y broses.
- **Cyfunwch ddata arolwg ag offeryno gwrthrychol** lle bynnag y bo'n
  bosibl, gan ddilyn egwyddor offeryno pwnc 1.5; defnyddiwch ddata
  arolwg yn benodol ar gyfer yr hyn na all data gwrthrychol ei ddal.
- **Caewch y ddolen gydag ymatebwyr.** Mae arolwg nad yw byth yn arwain
  yn weladwy at unrhyw newid yn hyfforddi pobl i stopio'i gymryd o
  ddifrif.
- **Mae DevEx a SPACE yn fframiau cyflenwol o'r un pryder sylfaenol**,
  nid fframweithiau cystadleuol i ddewis rhyngddynt.

## Argymhellion

### Dyluniwch gwestiynau ar gyfer eglurder ac osgowch eiriad arweiniol neu ddwy-ran

Ysgrifennwch gwestiynau arolwg sy'n gofyn am union un peth, mewn iaith
blaen, heb blannu tybiaeth yn y cwestiwn ei hun. Mae "pa mor fodlon
ydych chi â'n hoffer a'n dogfennaeth?" yn gwestiwn dwy-ran sy'n cymysgu
dau ateb a allai fod yn wahanol iawn yn un ymateb dryslyd. Hollwch ef
yn ddau gwestiwn ar wahân. Osgowch eiriad arweiniol fel "faint y mae ein
buddsoddiad diweddar mewn offer wedi gwella eich profiad?" sy'n tybio
bod y gwelliant wedi digwydd yn hytrach na gofyn yn niwtral a wnaeth.

### Defnyddiwch raddfeydd ymateb cyson a pheilotwch gwestiynau newydd cyn cyflwyniad eang

Safonwch ar raddfa ymateb gyson (mae graddfa
**[Likert](https://en.wikipedia.org/wiki/Likert_scale)** pump neu saith
pwynt yn gyffredin ac wedi'i hastudio'n dda) ar draws eich offeryn
arolwg, fel bod ymatebion yn gymharadwy ar draws cwestiynau ac ar
draws amser. Peilotwch unrhyw gwestiwn newydd gyda grŵp bach cyn ei
gyflwyno ar draws y sefydliad, i ddal geiriad amwys neu ddehongliad
annisgwyl cyn iddo lygru set ddata lawn.

### Triniwch gyfradd ymateb fel signal diagnostig yn ei rinwedd ei hun

Olrheiniwch gyfradd ymateb arolwg dros gylchoedd olynol, a thriniwch
gyfradd ostyngol fel arwydd rhybudd sy'n werth ei archwilio'n
uniongyrchol, yn debyg i'r signal ymddiriedaeth a drafodwyd ym mhwnc
3.2. Mae cyfradd ymateb yn gostwng yn aml yn nodi blinder arolwg,
ymddiriedaeth sy'n erydu bod canlyniadau'n arwain at weithredu, neu
amheuaeth gynyddol nad yw anhysbysrwydd wedi'i warchod mewn gwirionedd,
mae unrhyw un o'r rhain yn haeddu ymchwiliad uniongyrchol yn hytrach na
chael ei ddiystyru fel niwsans casglu data yn unig.

### Cyfunwch ddata arolwg ag offeryno DevEx gwrthrychol

Parejwch ymatebion arolwg goddrychol â signalau gwrthrychol lle maent
yn bodoli: amser adeiladu, amser rhedeg set brofion, amser gosod
amgylchedd datblygu lleol, a'r data amser-llif ac ymyriad o bwnc 3.6.
Mae ymateb arolwg sy'n dweud "mae ein hadeiladu'n rhy araf" yn dod yn
llawer mwy gweithredadwy wedi'i parejo â thuedd amser adeiladu wedi'i
fesur mewn gwirionedd, ac mae'r cyfuniad yn dal achosion lle mae
canfyddiad a realiti gwrthrychol yn dargyfeirio i unrhyw gyfeiriad,
sy'n werth ei archwilio ynddo'i hun.

### Caewch y ddolen: cyhoeddwch ganlyniadau a gweithredu dilynol gweladwy

Ar ôl pob cylch arolwg, cyhoeddwch grynodeb onest o ganlyniadau, gan
gynnwys canlyniadau y gallai arweinyddiaeth well ganddi beidio â'u
tynnu sylw atynt, ac ymrwymwch yn gyhoeddus i o leiaf un weithred
gonc a gymerwyd mewn ymateb. Mae arolwg nad yw'n cynhyrchu unrhyw
ddilyniant gweladwy'n dysgu ymatebwyr nad yw eu mewnbwn gonest yn
bwysig, sy'n dirywio cyfradd ymateb a gonestrwydd ymateb fel ei
gilydd ym mhob cylch dilynol. Y ddisgyblaeth cau-y-ddolen hon yw'r
penderfynydd sengl mwyaf yn aml ar a yw rhaglen arolwg DevEx yn aros
yn ddefnyddiol dros sawl blwyddyn neu'n dadfeilio'n araf yn ymarfer
ticio-blychau.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Arolwg hir, cynhwysfawr | Data cyfoethog, manwl ar draws llawer o bynciau | Cyfradd ymateb is, blinder uwch, mwy o le i gwestiynau wedi'u dylunio'n wael |
| Arolwg byr, ffocysedig | Cyfradd ymateb uwch, haws ei ddylunio'n dda | Llai o gwmpas; gall golli mater sy'n dod i'r amlwg y tu allan i'r ffocws dewisedig |
| Data arolwg yn unig | Yn dal profiad goddrychol yn uniongyrchol | Agored i ogwydd ac ni all wirio yn erbyn realiti gwrthrychol |
| Arolwg wedi'i gyfuno ag offeryno gwrthrychol | Yn dal dargyfeiriad rhwng canfyddiad a realiti, mwy gweithredadwy | Angen mwy o ymdrech integreiddio data |

Y tensiwn canolog yw **cwmpas yn erbyn ansawdd ymateb**. Mae arolwg
hirach, mwy cynhwysfawr yn dal mwy o dir ond yn dirywio cyfradd ymateb ac
yn cynyddu'r risg o gwestiynau wedi'u dylunio'n wael yn llithro trwodd;
mae arolwg byr, ffocysedig yn cael ymatebion o ansawdd gwell ond yn
peryglu colli rhywbeth pwysig y tu allan i'w gwmpas. Datryswch y tensiwn
trwy gadw'r arolwg craidd, rheolaidd yn fyr ac wedi'i beilota'n dda, a
defnyddio arolygon ymchwilio-dwfn achlysurol, wedi'u labelu'n glir ar
gyfer pynciau penodol sydd angen archwiliad mwy manwl, yn hytrach na
cheisio cwmpasu popeth ym mhob cylch.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A ydym erioed wedi peilota cwestiwn arolwg newydd gyda grŵp bach
   cyn ei gyflwyno'n eang, neu a yw cwestiynau newydd yn mynd yn
   syth i'r arolwg llawn?** Mae hepgor y cam peilota'n ffordd gyffredin
   y mae cwestiynau amwys neu ddwy-ran yn dod i lygru set ddata lawn cyn
   i unrhyw un sylwi bod y geiriad yn aneglur.

2. **Beth mae ein cyfradd ymateb wedi'i wneud dros sawl cylch arolwg
   diwethaf, ac a ydym wedi archwilio gostyngiad os digwyddodd un?**
   Triniwch y duedd hon fel signal gwirioneddol sy'n werth ei drafod,
   nid dim ond niwsans casglu data i'w nodi wrth fynd heibio.

3. **A ydym yn cyfuno data arolwg ag unrhyw offeryno gwrthrychol, neu a
   yw canfyddiad goddrychol yn sefyll yn gyfan gwbl ar ei ben ei hun yn
   ein hadroddiadau?** Nodwch o leiaf un man lle gallai parejo cwestiwn
   arolwg â data gwrthrychol, amser adeiladu, amledd defnyddio, wneud y
   canlyniad yn fwy gweithredadwy.

4. **Pa weithred gonc yr ydym wedi'i chymryd fel canlyniad uniongyrchol,
   gweladwy i'n cylch arolwg diwethaf, ac a wnaethom gyfathrebu'r
   weithred honno'n ôl i ymatebwyr?** Os yw'r ateb onest yn "dim byd
   gweladwy," mae'r bwlch hwnnw'n debygol eisoes o erydu ymddiriedaeth
   yn yr offeryn, boed wedi ymddangos yn y gyfradd ymateb eto ai peidio.

5. **A oes unrhyw un o'n cwestiynau arolwg cyfredol yn arweiniol neu'n
   ddwy-ran, ac a fyddem yn sylwi petaent felly?** Adolygwch eich
   cwestiynau cyfredol gwirioneddol yn erbyn y prawf penodol hwn fel
   ymarfer grŵp.

6. **Sut mae ein data arolwg DevEx neu SPACE yn cymharu â signalau
   gwrthrychol pan fydd y ddau'n ymddangos yn anghytuno, a beth mae'r
   anghytundeb hwnnw'n ei ddweud wrthym?** Mae achos lle mae canfyddiad
   a data gwrthrychol yn dargyfeirio'n aml yn fwy diagnostig werthfawr
   nag achos lle maent yn cytuno, gan fod y bwlch ei hun yn wybodaeth.

## Golwg sector

**Cwmni newydd.** Mae arolwg pyls syml, byr iawn, weithiau dim ond un
neu ddau gwestiwn, wedi'i redeg yn anffurfiol ac yn aml, fel arfer yn
ddigonol ar y raddfa hon, ac mae trylwyredd dylunio offeryn ffurfiol yn
llai pwysig pan all sylfaenydd gael sgwrs uniongyrchol o hyd â bron pawb
yn rheolaidd.

**Busnes bach.** Mae offeryn arolwg rhad neu am ddim â set gwestiynau
fyr, wedi'i haddasu, wedi'i redeg yn chwarterol, yn dal y rhan fwyaf o'r
gwerth yma heb angen arbenigedd dylunio-arolwg pwrpasol. Blaenoriaethwch
y ddisgyblaeth cau-y-ddolen dros soffistigeiddrwydd; mae hyd yn oed tîm
bach yn elwa o weithredu'n weladwy ar yr hyn y mae arolwg byr yn ei
ddatgelu.

**Menter.** Mae ansawdd dylunio arolwg yn bwysig yn aruthrol ar raddfa,
oherwydd mae cwestiwn diffygiol neu warant anhysbysrwydd wedi'i thorri'n
llygru data ar draws miloedd o ymatebwyr ar unwaith, a gall y
casgliadau anghywir â hyder canlyniadol gamgyfeirio penderfyniadau
adnoddu sylweddol. Buddsoddwch mewn arbenigedd dylunio-arolwg
gwirioneddol, neu bartneriwch â phlatfform mesur DevEx sefydledig, yn
hytrach nag adeiladu offeryn ad hoc yn fewnol.

**Llywodraeth.** Mae cyfradd ymateb ac ymddiriedaeth yn arbennig o
fregus mewn sefydliadau lle gallai staff eisoes fod yn wyliadwrus o sut
mae data'n cael ei ddefnyddio'n fewnol. Gor-fuddsoddwch mewn gwarantau
anhysbysrwydd tryloyw a gweithredu dilynol gweladwy'n benodol i
adeiladu'r ymddiriedaeth sy'n gwneud cyfradd ymateb onest yn gyraeddadwy
mewn cyd-destun lle gallai amheuaeth am ddefnydd data eisoes redeg yn
uwch nag mewn lleoliad sector-preifat nodweddiadol.

## Enghreifftiau

**Menter.** Roedd arolwg DevEx cychwynnol cwmni meddalwedd yn cynnwys
cwestiwn yn gofyn i beirianwyr raddio "boddhad ag offer a phroses,"
cwestiwn dwy-ran a gymysgodd ddau bryder gwahanol iawn. Pan ddaeth y
sgôr gyfunol yn ôl yn gymedrol, ni allai arweinyddiaeth ddweud a oedd y
broblem yn offer, yn broses, neu'n ddau, a thargedodd ymdrechion
unioni cychwynnol yr ardal anghywir am ddau chwarter. Datgelodd hollti'r
cwestiwn mewn diwygiad dilynol fod y sgôr offer mewn gwirionedd yn
gryf a'r sgôr proses yn wael, gan ailgyfeirio buddsoddiad tuag at
symleiddio proses cymeradwyo-rhyddhau lletchwith, a gynhyrchodd
welliant boddhad mesuradwy o fewn un chwarter, yn wahanol i'r ymdrech
ffocysedig-ar-offer gynharach a oedd wedi dangos ychydig o effaith.

**Llywodraeth.** Roedd gan arolwg DevEx cyntaf asiantaeth ddigidol
genedlaethol gyfradd ymateb o dan 30%, a chanfu adolygiad mewnol fod
staff yn credu'n eang, yn gywir fel y digwyddodd, y gallai rheolwyr
unigol weld pwy oedd wedi ac heb ymateb, er bod canlyniadau cyfanredol
i fod yn anhysbys. Symudodd yr asiantaeth i blatfform arolwg trydydd
parti, gwirioneddol annibynnol â anhysbysrwydd wedi'i wirio,
cyfathrebodd y newid yn benodol ac yn ailadroddus, a chyhoeddodd
grynodeb clir o ganlyniadau'r cylch blaenorol ynghyd â thair gweithred
gonc a gymerwyd mewn ymateb. Cododd cyfradd ymateb i dros 70% o fewn
dau gylch, a chredydodd arweinyddiaeth yr asiantaeth y cyfuniad o
anhysbysrwydd gwirioneddol a gweithredu dilynol gweladwy'n benodol fel y
rheswm i ymddiriedaeth yn yr offeryn adfer.

## Achos busnes: cymhellion, ROI, a TCO

Data dibynadwy, gweithredadwy am ddimensiwn, profiad datblygwyr, sydd fel
arall yn aros yn anweledig tan iddo ymddangos fel cyfradd gadael staff neu
arafiad cyflenwi yw'r enillion ar raglen arolwg DevEx wedi'i dylunio'n
dda. Mae'r enghraifft cwmni meddalwedd uchod yn dangos cost cael dylunio'n
anghywir: dau chwarter o ymdrech unioni camgyfeiriedig oherwydd bod un
cwestiwn wedi'i eirio'n wael wedi cymysgu dau bryder gwahanol.

Mae cost cyfanswm perchnogaeth yn cynnwys offeryn arolwg, y ddisgyblaeth
dylunio a pheilota y mae'r pwnc hwn yn ei hargymell, a'r ymrwymiad
parhaus i gau'r ddolen â gweithredu dilynol gweladwy bob cylch. Yr
ymrwymiad hwnnw, yn fwy nag unrhyw gost offer, sy'n pennu a yw rhaglen
arolwg yn aros yn ddefnyddiol am flynyddoedd neu'n dadfeilio'n ymarfer
ticio-blychau sy'n cynhyrchu data cynyddol llai dibynadwy dros amser.

## Gwrth-batrymau a risgiau

- **Cwestiynau dwy-ran neu arweiniol:** yn cymysgu pryderon gwahanol
  neu'n gogwyddo ymatebion, ac yn aml yn mynd heb eu canfod heb
  beilota.
- **Hepgor y cam peilota ar gyfer cwestiynau newydd:** yn gadael i
  eiriad amwys lygru set ddata raddfa-lawn.
- **Anwybyddu cyfradd ymateb ostyngol:** yn colli signal ymddiriedaeth
  pwysig yn ei rinwedd ei hun.
- **Byth yn cau'r ddolen â gweithredu dilynol gweladwy:** yn hyfforddi
  ymatebwyr nad yw mewnbwn gonest yn bwysig, gan ddirywio ansawdd data
  yn y dyfodol.
- **Trin data arolwg fel un digonol ar ei ben ei hun, heb wirio
  gwrthrychol:** yn colli achosion lle mae canfyddiad a realiti'n
  dargyfeirio i unrhyw gyfeiriad.
- **Gwarantau anhysbysrwydd gwan neu na ellir eu gwirio:** y ffordd
  gyflymaf sengl o gwympo cyfradd ymateb a gonestrwydd ymateb fel ei
  gilydd.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Mae cwestiynau arolwg yn ad hoc ac heb eu
  peilota, ni olrheinir cyfradd ymateb fel signal, ac yn anaml y mae
  canlyniadau'n arwain at weithredu gweladwy.
- **Lefel 2, Datblygu:** Mae rhywfaint o ddisgyblaeth dylunio arolwg yn
  bodoli, ond mae peilota'n anghyson ac nid yw'r ddolen yn cael ei chau'n
  ddibynadwy ag ymatebwyr.
- **Lefel 3, Safoni:** Peilotir cwestiynau cyn eu cyflwyno, olrheinir
  cyfradd ymateb a'i harchwilio pan fydd yn gostwng, a chyhoeddir
  canlyniadau'n gyson gydag o leiaf un weithred ddilynol gonc.
- **Lefel 4, Rheoli:** Cyfunir data arolwg yn systematig ag offeryno
  gwrthrychol, ac archwilir dargyfeiriad rhwng y ddau'n weithredol fel
  signal diagnostig.
- **Lefel 5, Cerddorfaru:** Mae gan y sefydliad raglen arolwg aeddfed,
  ymddiriedol, aml-flwyddyn â chyfraddau ymateb uchel yn gyson, gweithredu
  gweladwy dangosadwy o bob cylch, a hanes o ddal a chywiro cwestiynau
  wedi'u dylunio'n wael cyn iddynt lygru data.

## Syniadau ar gyfer trafodaeth

1. A wnaeth unrhyw gwestiwn arolwg cyfredol yn ein hofferyn erioed ddrysu neu gamarwain ymatebwr?
2. Beth oedd y weithred gonc olaf a gymerwyd gennym fel canlyniad uniongyrchol i ddata arolwg?
3. Sut fyddem yn gwybod petai ein gwarant anhysbysrwydd wedi'i thorri, hyd yn oed yn ddamweiniol?
4. Ble mae ein data arolwg yn cytuno neu'n anghytuno ag offeryno gwrthrychol, a beth mae hynny'n ei ddweud wrthym?
5. Beth fyddai ei angen i ddyblu ein cyfradd ymateb gyfredol?

## Prif gasgliadau

- Mae **ansawdd dylunio** arolwg, cwestiynau clir, un-cysyniad, di-ogwydd,
  yn bwysicach na hyd na soffistigeiddrwydd.
- **Mae cyfradd ymateb yn signal yn ei rinwedd ei hun**; archwiliwch
  ostyngiad yn hytrach na'i drin fel niwsans yn unig.
- **Cyfunwch ddata arolwg ag offeryno gwrthrychol** i ddal dargyfeiriad
  rhwng canfyddiad a realiti.
- **Caewch y ddolen**: cyhoeddwch ganlyniadau a gweithredu dilynol
  gweladwy bob cylch, neu bydd ymddiriedaeth yn yr offeryn yn erydu.
- Mae **DevEx a SPACE yn gyflenwol**, nid yn fframiau cystadleuol, o'r
  un pryder sylfaenol ar gyfer profiad datblygwyr.

## Cyfeiriadau a darllen pellach

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren, a Michaela Greiler,
  "DevEx: What Actually Drives Productivity," *ACM Queue* (2023): y
  fframwaith DevEx o ddolenni adborth, llwyth gwybyddol, a chyflwr llif.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, a Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers
  and Win in the 21st Century*, gan Jeff Lawson (buddsoddiad
  sefydliadol mewn profiad datblygwyr).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, gan
  Louis M. Rea a Richard A. Parker (methodoleg dylunio-arolwg
  gyffredinol berthnasol i offerynnau DevEx).
