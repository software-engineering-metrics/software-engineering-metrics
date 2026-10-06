# 4.3 Trosiant cod a dadansoddiad man-poeth

## Trosolwg a chymhelliant

Mae **trosiant cod** yn mesur pa mor aml y mae ffeil neu fodiwl yn
newid dros amser, llinellau wedi'u hychwanegu, eu haddasu, a'u dileu
ar draws ymrwymiadau olynol. Ar ei ben ei hun, mae trosiant yn signal
eithaf gwan: mae rhai ffeiliau'n newid yn aml oherwydd eu bod dan
ddatblygiad gweithredol, iach, ac mae rhai'n anaml yn newid oherwydd eu
bod yn sefydlog ac yn gywir, nid oherwydd eu bod wedi'u hesgeuluso.
Daw pŵer diagnostig gwirioneddol dull y pwnc hwn o gyfuno trosiant â
chymhlethdod (pwnc 4.1): mae ffeil sy'n newid yn aml ac yn hynod
gymhleth, **man poeth**, yn anghymesur o debygol o fod yn ffynhonnell
diffygion ac yn llusgo ar gyflymder tîm, ac mae ymchwil empirig yn
cadarnhau hyn yn gyson ar draws llawer o sylfeini cod a sefydliadau.

Mae **dadansoddiad man-poeth**, a boblogeiddiwyd gan waith Adam
Tornhill ar ddadansoddeg meddalwedd, yn arbennig o werthfawr oherwydd
nid oes angen arolwg â llaw na barn oddrychol i ddod o hyd i'w
dargedau. Mae hanes **[rheoli fersiwn](https://en.wikipedia.org/wiki/Version_control)**
eisoes yn cynnwys popeth sydd ei angen i gyfrifo trosiant ac, wedi'i
gyfuno ag offeryno dadansoddi statig, cymhlethdod, ar gyfer pob ffeil
mewn sylfaen cod yn awtomatig. Mae hyn yn caniatáu i dîm neu sefydliad
nodi, â thystiolaeth wirioneddol yn hytrach nag anecdot neu'r gŵyn
uchaf mewn ôl-drafodaeth, yn union pa ffracsiwn bach o'r sylfaen cod
sy'n haeddu sylw ad-drefnu'n gyntaf.

I dimau mawr, mae dadansoddiad man-poeth yn datrys problem ddyrannu
wirioneddol: mae gan sylfaen cod â channoedd o filoedd o linellau lawer
mwy o god nag y gall unrhyw dîm fforddio ei ad-drefnu'n gynhwysfawr, ac
mae greddf am ble mae'r problemau gwaethaf yn byw'n aml yn anghywir,
wedi'i sgiwio gan bwy bynnag a gwynodd fwyaf diweddar neu ba ffeil
bynnag nad yw peiriannydd uwch yn ei hoffi. Mae sefydliadau menter a
llywodraeth sy'n rheoli sylfeini cod mawr, hirhoedlog yn dibynnu ar y
flaenoriaethu wedi'i yrru-gan-ddata hwn i gyfeirio cyllideb ad-drefnu
gwirioneddol prin tuag at y cod a gynhyrchith yr enillion mwyaf.

## Egwyddorion allweddol

- **Mae trosiant ar ei ben ei hun yn signal gwan; mae trosiant wedi'i
  gyfuno â chymhlethdod yn gryf.** Y cyfuniad, nid yr un metrig ar ei
  ben ei hun, sy'n nodi man poeth gwirioneddol.
- **Nid oes angen arolwg â llaw ar ddadansoddiad man-poeth.** Mae hanes
  rheoli fersiwn eisoes yn cynnwys popeth sydd ei angen i'w gyfrifo'n
  awtomatig.
- **Mae man poeth yn signal blaenoriaethu, nid dyfarniad awtomatig.** Mae
  angen barn ddynol o hyd i benderfynu pa weithred y mae man poeth
  penodol yn ei mynnu.
- **Nid yw newid aml yn ddrwg yn gynhenid.** Mae rhywfaint o drosiant yn
  adlewyrchu datblygiad iach, gweithredol yn hytrach na phroblem
  ansawdd.
- **Mae'r dadansoddiad hwn yn graddio'n union lle mae greddf yn
  methu**: mewn sylfeini cod mawr rhy fawr i unrhyw unigolyn eu
  harolygu a'u blaenoriaethu wrth deimlad yn unig.

## Argymhellion

### Cyfrifwch drosiant a chymhlethdod gyda'i gilydd, a graddiwch yn ôl eu cyfuniad

Tynnwch amlder newid fesul ffeil o hanes rheoli fersiwn dros ffenestr
ystyrlon, chwe mis i flwyddyn yn nodweddiadol, a'i parejo â mesur
cymhlethdod (pwnc 4.1) ar gyfer yr un ffeiliau. Graddiwch ffeiliau yn
ôl y cyfuniad, cynnyrch trosiant a chymhlethdod yn gyffredin, yn
hytrach na'r naill fetrig ar ei ben ei hun, gan mai'r cyfuniad hwn yw'r
hyn y mae'r ymchwil sylfaenol yn ei gysylltu'n gyson â chyfraddau
diffyg uwch a chost cynnal a chadw.

### Ymchwiliwch y mannau poeth uchaf â barn ddynol cyn gweithredu

Mae rhestr mannau poeth wedi'i graddio'n nodi ymgeiswyr ar gyfer sylw,
nid rhestr weithredu awtomatig. Ar gyfer pob un o'ch mannau poeth
uchaf, ymchwiliwch â llygad dynol: ai cod wedi'i ddylunio'n wael
gwirioneddol yw hwn sydd angen ad-drefnu, neu a yw'n ffeil sydd angen
newid aml yn ddilys oherwydd ei bod yn eistedd wrth ganol rhesymeg
busnes gweithredol, esblygol, ac os felly gallai'r flaenoriaeth fod yn
brofion gwell neu ddogfennaeth gliriach yn hytrach nag ailysgrifennu
strwythurol. Mae hyn yn adlewyrchu gwahaniaeth cymhlethdod hanfodol-yn-
erbyn-damweiniol pwnc 4.1, wedi'i gymhwyso yma i'r signal cyfun
trosiant-cymhlethdod.

### Croesgyfeiriwch fannau poeth yn erbyn data digwyddiad a diffyg

Lle bo ar gael, gwiriwch a yw eich mannau poeth wedi'u nodi'n
cydberthyn â digwyddiadau cynhyrchu gwirioneddol (pwnc 6.2) neu ddata
dianc diffygion (pwnc 5.1). Mae cydberthynas gref yn dilysu'r
dadansoddiad man-poeth fel un rhagfynegol gwirioneddol ar gyfer eich
sylfaen cod benodol ac yn cryfhau'r achos busnes dros weithredu arno;
mae cydberthynas wan neu absennol yn awgrymu naill ai mater ansawdd
data neu nad yw trosiant a chymhlethdod, yn eich cyd-destun penodol
chi, y cyfuniad cywir o signalau i flaenoriaethu yn eu herbyn.

### Olrheiniwch duedd mannau poeth ar draws dadansoddiadau olynol, nid dim ond ciplun sengl

Ail-redwch ddadansoddiad man-poeth yn gyfnodol, yn chwarterol yn
gyffredin, ac olrheiniwch a yw mannau poeth a nodwyd yn flaenorol yn
gwella, yn gwaethygu, neu wedi'u datrys, ac a yw rhai newydd yn dod i'r
amlwg. Mae man poeth sy'n parhau ar draws sawl cylch dadansoddi er
gwaethaf cael ei nodi'n ailadroddus yn nodi naill ai nad oes ymdrech
unioni wedi'i chymhwyso mewn gwirionedd neu na wnaeth ymgais unioni
flaenorol fynd i'r afael â'r broblem sylfaenol wirioneddol.

### Defnyddiwch ddata mannau poeth i lywio, nid disodli, sgyrsiau blaenoriaethu lefel-tîm

Cyflwynwch ddadansoddiad man-poeth fel tystiolaeth mewn trafodaeth
flaenoriaethu, nid fel mandad awtomatig sy'n disodli barn gyd-destunol
tîm ei hun am yr hyn sy'n bwysicaf ar hyn o bryd. Efallai bod gan dîm
resymau da, dilys dros dan-flaenoriaethu man poeth hysbys dros dro, mae
ailysgrifennu wedi'i gynllunio ar y gweill yn gwneud ad-drefnu
cynyddrannol yn ymdrech wastraffus, er enghraifft, a dylai'r
dadansoddiad lywio'r sgwrs honno, nid ei disodli.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Blaenoriaethu seiliedig-ar-reddf | Cyflym, dim angen offeryno, yn manteisio ar wybodaeth gyd-destunol tîm | Wedi'i sgiwio gan ddiweddarwch, ffafriaeth bersonol, a phwy bynnag sy'n cwyno uchaf |
| Trosiant yn unig | Syml i'w gyfrifo | Signal gwan ar ei ben ei hun; nid yw newid aml yn ddrwg yn gynhenid |
| Trosiant wedi'i gyfuno â chymhlethdod (dadansoddiad man-poeth) | Cryf, seiliedig ar dystiolaeth, yn awtomatig o ddata presennol | Angen cyfuno dwy ffynhonnell ddata a dehongli canlyniadau â barn |
| Dadansoddiad man-poeth wedi'i groesgyfeirio â data digwyddiad | Wedi'i ddilysu, y dystiolaeth gryfaf ar gyfer blaenoriaethu | Angen cyswllt digwyddiad-i-god dibynadwy, nad oes gan bob sefydliad |

Y tensiwn canolog yw **tystiolaeth yn erbyn cyd-destun**. Mae
dadansoddiad man-poeth yn darparu tystiolaeth wrthrychol, raddadwy na
all blaenoriaethu seiliedig-ar-reddf ei chyfateb ar faint sylfaen cod
mawr, anghyfarwydd, neu hirhoedlog, ond mae'n brin o'r farn gyd-destunol
sydd gan dîm am pam mae man poeth penodol yn bwysig, neu beidio, ar
hyn o bryd. Datryswch y tensiwn trwy drin dadansoddiad man-poeth fel
sylfaen dystiolaeth ar gyfer sgwrs flaenoriaethu, wedi'i gyfuno â, byth
yn disodli, barn gyd-destunol tîm ei hun am amseru a chyfnewidiadau.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Beth yw ein pum man poeth uchaf, wedi'u graddio yn ôl trosiant a
   chymhlethdod wedi'u cyfuno, ac a fyddai'r graddiad hwnnw'n cyfateb â
   greddf ein tîm am ble mae ein problemau gwaethaf yn byw?** Rhedwch y
   dadansoddiad a chymharwch y canlyniad yn erbyn yr hyn y byddai eich
   tîm wedi'i ddyfalu cyn gweld y data; mae anghysondebau'n aml yn y
   canfyddiad mwyaf gwerthfawr.

2. **A yw ein mannau poeth wedi'u nodi'n cydberthyn â digwyddiadau
   cynhyrchu gwirioneddol neu ddata dianc diffygion?** Os oes gennych
   y data i wirio hyn, gwnewch hynny'n uniongyrchol; os na, mae'r bwlch
   hwnnw ei hun yn werth ei enwi fel rhywbeth i adeiladu tuag ato.

3. **Ar gyfer ein man poeth uchaf ar hyn o bryd, ai cymhlethdod hanfodol
   sy'n dilys angen newid aml yw'r broblem sylfaenol, neu gymhlethdod
   damweiniol y gallai ad-drefniad ei drwsio'n wirioneddol?** Ewch trwy'r
   ffeil gyda'ch gilydd a gwnewch y farn hon yn benodol yn hytrach na
   thybio'r naill ateb neu'r llall.

4. **A yw man poeth a nodwyd yn flaenorol wedi parhau ar draws sawl
   cylch dadansoddi er gwaethaf cael ei nodi?** Os felly, ymchwiliwch yn
   onest pam: ni chynigiwyd unioni erioed mewn gwirionedd, neu ni
   wnaeth ymgais flaenorol fynd i'r afael â'r achos gwraidd
   gwirioneddol.

5. **A ydym ar hyn o bryd yn blaenoriaethu gwaith ad-drefnu yn seiliedig
   ar dystiolaeth, neu yn seiliedig ar bwy bynnag a gwynodd fwyaf
   diweddar neu fwyaf uchel?** Byddwch yn onest am broses flaenoriaethu
   gyfredol wirioneddol eich tîm a sut mae'n cymharu â'r hyn y byddai
   dadansoddiad man-poeth seiliedig-ar-dystiolaeth yn ei awgrymu.

6. **Beth fyddai'n ei gostio i ni, mewn cyfradd diffyg neu arafiad
   cyflenwi, adael ein man poeth uchaf cyfredol heb ei drin am flwyddyn
   arall?** Mae'r cwestiwn hwn yn gorfodi amcangyfrif cost concrid a all
   angori penderfyniad blaenoriaethu, yn hytrach na gadael y man poeth
   fel pryder haniaethol, hawdd ei dan-flaenoriaethu.

## Golwg sector

**Cwmni newydd.** Mae dadansoddiad man-poeth ffurfiol fel arfer yn
ddiangen gyda sylfaen cod fach, ifanc y mae'r tîm cyfan yn dal i'w
dal ar y cyd yn eu pennau. Mae'r dechneg yn dod yn werthfawr yn benodol
unwaith y bydd y sylfaen cod wedi tyfu heibio'r maint lle gall unrhyw
unigolyn nodi'r ardaloedd gwaethaf yn ddibynadwy o gof yn unig, yn aml
rywle ym mlwyddyn gyntaf neu ail dwf parhaus.

**Busnes bach.** Gall offeryno rhad neu am ddim dynnu data trosiant yn
uniongyrchol o'ch hanes rheoli fersiwn presennol gyda lleiafswm o osod;
cyfunwch ef â pha ddata cymhlethdod bynnag y mae eich leinydd neu
offeryn dadansoddi statig presennol eisoes yn ei adrodd, yn hytrach na
buddsoddi mewn meddalwedd dadansoddiad-man-poeth masnachol pwrpasol ar
y raddfa hon.

**Menter.** Dyma lle mae blaenoriaethu seiliedig-ar-dystiolaeth yn
ennill y mwyaf o enillion, gan fod greddf yn methu'n wirioneddol ar
raddfa sylfaen cod sy'n cwmpasu cannoedd o wasanaethau a miloedd o
ffeiliau. Buddsoddwch mewn rhedeg y dadansoddiad hwn yn rheolaidd ar
draws y sylfaen cod gyfan a chroesgyfeirio yn erbyn data digwyddiad i
adeiladu achos dilysedig, amddiffynadwy ar gyfer buddsoddiad ad-drefnu.

**Llywodraeth.** Mae systemau hirhoedlog, weithiau'n ddegawdau oed, yn
addas yn naturiol ar gyfer dadansoddiad man-poeth, gan fod yr hanes
rheoli fersiwn cronedig yn darparu signal cyfoethog, tymor-hir am pa
rannau o'r system sydd wedi profi'n wirioneddol drafferthus dros amser.
Mae'r dull seiliedig-ar-dystiolaeth hwn hefyd yn offeryn darbwyllol,
concrid ar gyfer cyfiawnhau buddsoddiad moderneiddio i randdeiliaid sydd
angen mwy na barn anffurfiol peiriannydd i gymeradwyo cyllid.

## Enghreifftiau

**Menter.** Roedd platfform prosesu-hawliadau cwmni yswiriant, yn
cwmpasu dros ddwy filiwn o linellau o god ar draws degau o wasanaethau,
wedi cronni blynyddoedd o gwynion anffurfiol am "y modiwl dilysu-
hawliadau" yn drafferthus, ond ni ddilynodd unrhyw flaenoriaethu
ffurfiol erioed o'r cwynion hynny. Nododd dadansoddiad man-poeth yn
cyfuno chwe mis o ddata trosiant â sgoriau cymhlethdod ffeil gwbl
wahanol, cyfleustod trosi-arian cyfred a rennir wedi'i gladdu'n ddwfn
mewn dibyniaeth anaml ei thrafod, fel y man poeth uchaf gwirioneddol,
un nad oedd erioed wedi codi mewn unrhyw gŵyn ôl-drafodaeth. Cadarnhaodd
croesgyfeirio yn erbyn data digwyddiad fod y cyfleustod hwn yn
gysylltiedig â chyfran anghymesur o ddiffygion cyfrifo-ariannol dros y
flwyddyn flaenorol, a chynhyrchodd ad-drefniad wedi'i dargedu o'r
cyfleustod penodol hwnnw, yn hytrach na'r modiwl yr oedd pawb wedi bod
yn ei feio'n anffurfiol, ostyngiad mesuradwy mewn digwyddiadau
cysylltiedig o fewn y chwarter canlynol.

**Llywodraeth.** Aeth system drwyddedu ddegawdau oed asiantaeth
cerbydau modur talaith trwy ddadansoddiad man-poeth fel rhan o achos
busnes moderneiddio. Nododd y dadansoddiad glwstwr bach o ffeiliau, yn
cynrychioli o dan 3% o'r sylfaen cod gyfan, yn gyfrifol am gyfran
anghymesur o drosiant a chymhlethdod fel ei gilydd, a dangosodd
croesgyfeirio yn erbyn log digwyddiad yr asiantaeth fod yr un clwstwr
hwn yn cyfrif am bron 40% o'r holl ddiffygion system a adroddwyd dros y
tair blynedd flaenorol. Daeth y canfyddiad concrid, seiliedig-ar-
dystiolaeth hwn, yn llawer mwy darbwyllol na honiad cyffredinol bod
"y system yn hen ac angen ei moderneiddio," yn ganolbwynt cais
cyllideb llwyddiannus ar gyfer ymdrech foderneiddio wedi'i thargedu,
gynyddrannol wedi'i ffocysu'n benodol ar y clwstwr hwnnw yn hytrach na
disodliad system gyfan llawer mwy costus.

## Achos busnes: cymhellion, ROI, a TCO

Buddsoddiad wedi'i dargedu, seiliedig-ar-dystiolaeth yw'r enillion ar
ddadansoddiad man-poeth: mae'r ddwy enghraifft uchod yn dangos achos lle
gwnaeth dadansoddiad ffurfiol ailgyfeirio sylw ad-drefnu i ffwrdd o ble
roedd cwyn anffurfiol wedi canolbwyntio arno a thuag at ble roedd y
data mewn gwirionedd yn dangos bod y broblem yn byw, gan gynhyrchu
enillion mesuradwy well nag y byddai buddsoddiad heb ei dargedu neu wedi'i
yrru-gan-reddf.

Mae cost cyfanswm perchnogaeth yn isel, gan fod data trosiant yn dod yn
uniongyrchol o hanes rheoli fersiwn presennol a bod data cymhlethdod fel
arfer eisoes ar gael o offeryno dadansoddi statig (pwnc 4.4); y prif
fuddsoddiad yw'r ymdrech dadansoddi cyfnodol a'r amser barn ddynol i
ddehongli canlyniadau a phenderfynu pa weithred y mae pob man poeth a
nodwyd yn ei mynnu.

## Gwrth-batrymau a risgiau

- **Defnyddio trosiant yn unig heb gymhlethdod:** signal gwan ar ei ben
  ei hun a all fflagio cod iach, wedi'i ddatblygu'n weithredol fel
  positif ffug.
- **Trin graddiad man-poeth fel rhestr weithredu awtomatig heb farn
  ddynol:** yn colli'r gwahaniaeth hanfodol-yn-erbyn-damweiniol sy'n
  pennu'r ymateb cywir.
- **Blaenoriaethu ad-drefnu yn seiliedig ar y gŵyn uchaf yn hytrach na
  thystiolaeth:** yn aml yn camgyfeirio ymdrech i ffwrdd o ble mae'r
  data mewn gwirionedd yn dangos bod y broblem yn byw.
- **Byth yn croesgyfeirio mannau poeth yn erbyn data digwyddiad neu
  ddiffyg:** yn colli'r cam dilysu sy'n cryfhau'r achos dros weithredu
  ar y dadansoddiad.
- **Rhedeg y dadansoddiad unwaith a byth yn ei ailadrodd:** yn colli a
  yw ymdrech unioni mewn gwirionedd yn gweithio dros amser.
- **Anwybyddu man poeth wedi'i fflagio'n barhaus heb ymchwilio pam nad
  yw unioni wedi glynu:** yn gwastraffu gwerth diagnostig dadansoddiad
  ailadroddus.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Gosodir blaenoriaethau ad-drefnu yn ôl greddf
  neu gyfaint cwyn, heb ddata trosiant na chymhlethdod yn llywio'r
  penderfyniad.
- **Lefel 2, Datblygu:** Mae rhai timau'n gwirio data trosiant neu
  gymhlethdod yn anffurfiol, ond nid oes arfer dadansoddiad man-poeth
  cyson, ar draws y sefydliad.
- **Lefel 3, Safoni:** Mae dadansoddiad man-poeth yn cyfuno trosiant a
  chymhlethdod yn rhedeg yn rheolaidd ac yn gyson yn llywio
  blaenoriaethu ad-drefnu ar draws y sefydliad.
- **Lefel 4, Rheoli:** Croesgyfeirir mannau poeth yn erbyn data
  digwyddiad a diffyg i ddilysu'r dadansoddiad, ac olrheinir tuedd ar
  draws cylchoedd olynol yn weithredol.
- **Lefel 5, Cerddorfaru:** Gall y sefydliad bwyntio at welliannau
  cyfradd-diffygion neu gyflenwi penodol, mesuradwy o fuddsoddiad
  ad-drefnu wedi'i lywio gan fannau poeth, ac mae'r dadansoddiad yn
  fewnbwn rheolaidd, ymddiriedol i benderfyniadau buddsoddi peirianneg.

## Syniadau ar gyfer trafodaeth

1. Sut olwg fyddai ar ein rhestr mannau poeth uchaf petaem yn rhedeg y dadansoddiad hwn heddiw?
2. A fyddai'r rhestr honno'n cyfateb, neu'n gwrthddweud, synnwyr anffurfiol cyfredol ein tîm o'n hardaloedd problem gwaethaf?
3. A oes gennym y data i groesgyfeirio mannau poeth yn erbyn digwyddiadau gwirioneddol?
4. A yw ardal broblem hysbys wedi parhau er gwaethaf ymdrechion blaenorol i'w thrwsio, a pham?
5. Beth fyddai'n ei gostio i ni adael ein man poeth uchaf cyfredol heb ei drin am flwyddyn arall?

## Prif gasgliadau

- Mae **trosiant wedi'i gyfuno â chymhlethdod** yn nodi mannau poeth
  gwirioneddol yn llawer mwy dibynadwy na'r naill fetrig ar ei ben ei
  hun.
- Nid oes angen **arolwg â llaw** ar ddadansoddiad man-poeth; mae'n
  gyfrifadwy'n awtomatig o ddata rheoli fersiwn a dadansoddiad statig
  presennol.
- Triniwch raddiad man-poeth fel **tystiolaeth ar gyfer blaenoriaethu**,
  nid dyfarniad awtomatig; mae barn ddynol yn dal ei hangen.
- **Croesgyfeiriwch fannau poeth yn erbyn data digwyddiad a diffyg** i
  ddilysu'r dadansoddiad a chryfhau'r achos dros weithredu arno.
- Olrheiniwch fannau poeth **ar draws cylchoedd dadansoddi olynol** i
  gadarnhau bod unioni mewn gwirionedd yn gweithio, nid dim ond unwaith
  fel ciplun.

## Cyfeiriadau a darllen pellach

- *Your Code as a Crime Scene*, gan Adam Tornhill (y testun sylfaenol ar
  ddadansoddiad man-poeth yn cyfuno trosiant a chymhlethdod o ddata
  rheoli fersiwn).
- *Software Design X-Rays*, gan Adam Tornhill (technegau pellach ar
  gyfer dadansoddiad cod ymddygiadol gan ddefnyddio hanes rheoli
  fersiwn).
- Nagappan, Nachiappan, a Thomas Ball, "Use of Relative Code Churn
  Measures to Predict System Defect Density," *ICSE* (2005): ymchwil
  empirig ar y berthynas rhwng trosiant a dwysedd diffyg.
- *Refactoring: Improving the Design of Existing Code*, gan Martin
  Fowler (technegau ar gyfer mynd i'r afael â chymhlethdod damweiniol
  unwaith y'i nodir).
