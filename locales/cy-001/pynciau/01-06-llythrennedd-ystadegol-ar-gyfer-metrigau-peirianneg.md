# 1.6 Llythrennedd ystadegol ar gyfer metrigau peirianneg

## Trosolwg a chymhelliant

Nid oes angen gradd ystadegau arnoch i redeg rhaglen fetrigau'n dda, ond
mae angen i chi osgoi nifer bach o gamgymeriadau penodol, cyffredin sy'n
gwneud metrigau fel arall wedi'u llywodraethu'n dda, wedi'u cyfrifiannu'n
dda yn weithredol gamarweiniol. Gall tîm wneud popeth yn iawn, enwi
penderfyniad clir, osgoi cyfraith Goodhart, pwysoli tuag at ganlyniadau,
llywodraethu perchnogaeth, cyfrifiannu'n ddibynadwy, a dal i dynnu'r
casgliad anghywir oherwydd iddo ddarllen cyfartaledd lle roedd angen
canradd, camgymryd sŵn am duedd, neu syrthio am gyd-ddigwyddiad wedi'i
wisgo fel achos. Y pwnc hwn yw'r farn ystadegol leiafswm y mae'r llyfr
hwn yn tybio bod gan ddarllenydd pob pwnc diweddarach eisoes.

Y broblem graidd yw bod metrigau peirianneg fel arfer yn swnllyd, yn
gam, ac yn sampl fach yn ôl safonau ystadegaeth ffurfiol. Nid cromlin gloch
lyfn yw cyfrif defnyddio wythnosol un tîm; llond llaw o bwyntiau data ydyw
gyda gwerthoedd eithafol mawr achlysurol (rhyddhad mawr, sbri dychwelyd
wedi'i yrru gan ddigwyddiad). Mae cymhwyso greddfau naïf a adeiladwyd ar
gyfer setiau data mawr, yn ymddwyn yn dda i'r math hwn o ddata'n
cynhyrchu casgliadau hyderus, anghywir yn rheolaidd. Nid trylwyredd
dewisol yw dysgu i weld pryd mae rhif yn rhy swnllyd i'w ymddiried, pryd
mae cyfartaledd yn dweud celwydd wrthych, a phryd nad yw dau beth yn symud
gyda'i gilydd yn dweud dim am achosiaeth, dyma'r hyn sy'n gwahaniaethu
rhaglen fetrigau sy'n dysgu rhywbeth gwir i sefydliad oddi wrth un sy'n
dysgu rhywbeth sy'n swnio'n gredadwy ond yn anwir.

Ar raddfa menter a llywodraeth, mae camgymeriadau ystadegol yn cronni
oherwydd bod casgliad camarweiniol, unwaith y'i derbynnir gan
arweinyddiaeth, yn cael ei weithredu ar draws llawer o dimau cyn i
unrhyw un feddwl ailarchwilio'r dadansoddiad sylfaenol. Gall cymhariaeth
naïf yn ystadegol rhwng dwy is-adran, neu rhwng cyn ac ar ôl
ad-drefniant mawr, lunio penderfyniadau adnoddau am flynyddoedd yn seiliedig
ar ddim mwy na sŵn neu ddrysydd na reolwyd gan unrhyw un amdano. Mae'r
bwnc hwn yn bodoli i wneud y methiant hwnnw'n llai tebygol.

## Egwyddorion allweddol

- **Fel arfer mae canolrif neu ganradd yn dweud mwy wrthych na
  chyfartaledd.** Mae data peirianneg yn rheolaidd wedi'i sgiwio gan
  werthoedd eithafol y mae cyfartaleddau'n eu amsugno a chanraddau ddim.
- **Mae samplau bach yn cynhyrchu rhifau swnllyd.** Mae canran wedi'i
  chyfrifo o lond llaw o ddigwyddiadau'n siglo'n wyllt am resymau nad oes
  a wnelont ddim â newid gwirioneddol.
- **Mae atchweliad tuag at y cymedr yn twyllo pobl yn barhaus.** Mae
  darlleniad anarferol o dda neu wael yn tueddu i gael ei ddilyn gan un
  mwy normal, gydag neu heb unrhyw ymyrraeth.
- **Nid yw cydberthynas yn achosiaeth, ac mae newidynnau drysu ym
  mhobman.** Gall dau fetrig sy'n symud gyda'i gilydd rannu trydydd achos
  cudd yn lle bod y naill yn gyrru'r llall.
- **Mae [siart reoli](https://en.wikipedia.org/wiki/Control_chart) yn curo
  cymhariaeth cyn-ac-ar-ôl sengl.** Gweld yr amrediad normal o amrywiant
  yw'r hyn sy'n gadael i chi ddweud tuedd wirioneddol oddi wrth sŵn.

## Argymhellion

### Rhagosodwch i ganolrifau a chanraddau ar gyfer data cam

Mae metrigau peirianneg wedi'u seilio ar amser, amser arwain, amser
adfer digwyddiad, latencedd ymateb, bron bob amser wedi'u sgiwio i'r
dde: mae'r rhan fwyaf o werthoedd yn clystyru'n isel, gyda chynffon hir o
werthoedd eithafol mawr achlysurol. Gall cyfartaledd wedi'i dynnu gan y
gynffon honno beintio darlun nad yw unrhyw achos nodweddiadol mewn
gwirionedd yn edrych fel hynny. Adroddwch y **canolrif** (y gwerth canol,
lle mae hanner yr arsylwadau uwchben a hanner islaw) ochr yn ochr â'r
**90fed** neu'r **95fed ganradd** (y gwerth y mae 90% neu 95% o
arsylwadau'n syrthio islaw iddo), sydd gyda'i gilydd yn dangos yr achos
nodweddiadol a'r gynffon gwaethaf-achos y mae tîm mewn gwirionedd yn ei
brofi. Mae pwnc KPI llyfr chwaer `software-engineering-guide`, a phob
pwnc metrig cyflenwi yn Rhan 2 y llyfr hwn, yn tybio'r arfer hwn
drwyddo draw.

### Gwybyddwch pryd mae sampl yn rhy fach i'w ymddiried

Nid signal ystyrlon yw cyfradd methiant newid wedi'i chyfrifo o dri
defnydd mewn wythnos araf; mae un methiant yn symud y ganran o 0% i 33%
dros nos am resymau nad oes a wnelont ddim â risg sylfaenol o bosibl. Cyn
ymateb i fetrig wedi'i seilio ar ganran, gwiriwch y cyfrif sylfaenol.
Fel rheol ymarferol, triniwch gyfradd wedi'i chyfrifo o lai na thua
ugain i ddeg ar hugain o ddigwyddiadau sylfaenol fel un swnllyd ac angen
ffenestr arsylwi hirach cyn tynnu casgliad, a dywedwch hynny'n benodol ar
y dangosfwrdd yn hytrach na chyflwyno canran sampl-bach anwadal â'r un
hyder â chanran sampl-fawr sefydlog.

### Gwyliwch am atchweliad tuag at y cymedr cyn credydu ymyrraeth

Os yw wythnos waethaf tîm erioed am ddigwyddiadau'n cael ei dilyn gan
sylw arweinyddiaeth a gwelliant dilynol, mae'n demtasiwn credydu'r
ymyrraeth. Yn aml, byddai peth o'r gwelliant hwnnw wedi digwydd beth
bynnag, oherwydd mae darlleniad eithafol anarferol yn tueddu i gael ei
ddilyn gan un mwy nodweddiadol yn bur fel artiffact ystadegol, ffenomen o'r
enw **atchweliad tuag at y cymedr**. Amddiffynnwch yn erbyn hyn trwy
gymharu yn erbyn llinell sylfaen hanesyddol hirach yn hytrach na'r pwynt
data eithafol sengl a sbardunodd sylw, a thrwy fod yn addas o ostyngedig
ynghylch faint o unrhyw welliant a arsylwyd i'w briodoli i weithred
benodol.

### Chwiliwch am newidynnau drysu cyn hawlio bod metrig wedi achosi canlyniad

Pan fydd dau fetrig yn symud gyda'i gilydd, amlder defnyddio'n codi ochr
yn ochr â boddhad cwsmer, gwrthsefwch yr atgyrch i hawlio bod y naill
wedi achosi'r llall cyn ystyried **newidyn drysu**: trydydd ffactor cudd
sy'n gyrru'r ddau. Gallai lansiad nodwedd newydd hybu'n annibynnol yn
gyfradd defnyddio (mwy o drwsiadau dilynol) a boddhad (y nodwedd ei hun),
heb unrhyw gyswllt achosol rhwng y ddau fetrig o gwbl. Cyn cyflwyno
cydberthynas fel tystiolaeth o achosiaeth, gofynnwch yn weithredol beth
arall a newidiodd ar yr un pryd a allai esbonio'r ddau symudiad.

### Defnyddiwch siart reoli, nid instantiad cyn-ac-ar-ôl sengl

Mae **siart reoli** yn plotio metrig dros amser gyda'i amrediad normal o
amrywiant wedi'i ddangos yn benodol, fel arfer fel bandiau o gwmpas
cyfartaledd canolog. Mae hyn yn gadael i chi wahaniaethu tuedd wirioneddol,
pwynt data neu redeg parhaus y tu allan i'r amrediad normal, oddi wrth
sŵn cyffredin na all cymhariaeth cyn-ac-ar-ôl sengl wahaniaethu rhyngddynt.
Cyn datgan "gwellodd y rhif ar ôl y newid," plotiwch ddigon o ddata
hanesyddol i weld sut mae amrywiant normal yn edrych, a gwiriwch a yw'r
darlleniad ar ôl y newid mewn gwirionedd yn syrthio y tu allan iddo.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Cyfartaleddau | Syml, cyfarwydd, hawdd eu cyfrifo | Wedi'u hystumio gan werthoedd eithafol ar ddata peirianneg cam |
| Canolrifau a chanraddau | Cadarn yn erbyn gwerthoedd eithafol, yn dangos yr achos nodweddiadol a'r gynffon gyda'i gilydd | Ychydig yn llai cyfarwydd i gynulleidfaoedd anhechnegol |
| Cymhariaeth cyn-ac-ar-ôl sengl | Cyflym, greddfol, hawdd ei gyflwyno | Agored i atchweliad tuag at y cymedr ac i sŵn |
| Siartiau rheoli a llinellau sylfaen hirach | Yn gwahaniaethu tuedd wirioneddol oddi wrth sŵn yn ddibynadwy | Angen mwy o ddata hanesyddol a mwy o esboniad i gynulleidfa anhechnegol |

Y tensiwn canolog yw **symlrwydd yn erbyn trylwyredd**. Mae cyfartaleddau
a chymariaethau cyn-ac-ar-ôl sengl yn haws eu cyfrifo a'u hesbonio, sef
pam yn union y maent yn dominyddu adrodd achlysurol, ond hwy hefyd yw'r
ddwy dechneg fwyaf tebygol o gynhyrchu casgliad hyderus, anghywir ar y
math o ddata swnllyd, cam y mae metrigau'r llyfr hwn yn eu cynhyrchu.
Datryswch y tensiwn trwy ragosod i'r technegau mwy trylwyr, canolrifau,
canraddau, a siartiau rheoli, ar gyfer unrhyw benderfyniad â chanlyniad
gwirioneddol, a neilltuo'r technegau symlach ar gyfer golygon
archwiliadol, risg isel lle mae darlleniad camgymerol yn costio ychydig.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Pa rai o'n teils dangosfwrdd sy'n adrodd cyfartaledd lle byddai
   canolrif neu ganradd yn dweud stori fwy gwir?** Mae metrigau peirianneg
   wedi'u seilio ar amser bron bob amser wedi'u sgiwio, a gall cyfartaledd
   ar ddata cam edrych yn iawn tra bo'r achos nodweddiadol, neu'r gynffon
   gwaethaf-achos, yn dweud stori hollol wahanol. Archwiliwch eich teils
   wedi'u seilio ar amser yn benodol am yr amnewid hwn.

2. **Pa mor fach yw'r sampl sylfaenol y tu ôl i'n metrigau wedi'u seilio
   ar ganran, ac a ydym yn trin metrig o ddeg digwyddiad â'r un hyder ag
   un o fil?** Mae cyfradd sampl-bach anwadal a gyflwynir heb ei chyfrif
   sylfaenol yn gwahodd gorymateb i sŵn. Gwiriwch eich teils cyfradd
   methiant newid a chanran debyg am y bwlch hwn.

3. **A ydym erioed wedi credydu ymyrraeth am welliant y byddai atchweliad
   tuag at y cymedr wedi'i gynhyrchu beth bynnag?** Dyma un o'r
   camgymeriadau ystadegol hawsaf i'w gwneud ac un o'r rhai anodda eu
   sylwi ar ôl y ffaith, oherwydd yr ymyrraeth a'r gwelliant mewn
   gwirionedd wedi digwydd yn y drefn honno. Edrychwch yn ôl ar stori
   "fe wnaethom ei drwsio" ddiweddar a gofynnwch yn onest a oedd y
   gymhariaeth llinell sylfaen yn ddigon hir i ddiystyru hyn.

4. **Ble ydym wedi tybio bod un metrig wedi achosi un arall heb wirio am
   newidyn drysu?** Mae dau beth yn symud gyda'i gilydd yn gyffredin; mae'r
   naill yn achosi'r llall yn hawliad cryfach sydd angen mwy o dystiolaeth.
   Dewiswch gydberthynas y mae eich tîm yn credu ynddi ar hyn o bryd a
   cheisiwch enwi drysydd credadwy a fyddai'n ei esbonio heb unrhyw
   gyswllt achosol o gwbl.

5. **A oes gennym ddigon o ddata hanesyddol i wybod sut mae amrywiant
   normal yn edrych ar gyfer ein metrigau pwysicaf, neu a ydym yn cymharu
   pwyntiau sengl?** Heb synnwyr o amrediad normal, mae unrhyw ddarlleniad
   sengl yn edrych yn frawychus neu'n dawelu meddwl yn dibynnu ar hwyliau
   yn hytrach na thystiolaeth. Trafodwch a yw'ch metrig mwyaf gwyliedig
   erioed wedi'i blotio fel siart reoli yn hytrach na rhif sengl.

6. **Sut ydym ar hyn o bryd yn cyfathrebu ansicrwydd i randdeiliaid
   anhechnegol, ac a yw ein dangosfwrdd yn awgrymu mwy o gywirdeb nag y
   mae'r data mewn gwirionedd yn ei gefnogi?** Gall siart heb unrhyw
   arwydd o amrywiant normal neu faint sampl wneud i dîm arweinyddiaeth
   orymateb i sŵn neu, yr un mor aml, wfftio signal gwirioneddol fel sŵn.
   Trafodwch sut y gallai eich adrodd gyfathrebu hyn yn onest heb ddod yn
   anddarllenadwy.

## Golwg sector

**Cwmni newydd.** Mae timau bach yn cynhyrchu samplau bach bron ym
mhobman, sy'n golygu bod y rhybudd sampl-bach yn y pwnc hwn yn bwysig
yn barhaus. Gwrthsefwch dynnu casgliadau cryf o un wythnos wael sengl neu
un wych sengl; gyda dim ond llond llaw o bwyntiau data, yr ateb gonest i
"a yw hwn yn duedd" yn aml yw "nid ydym yn gwybod eto."

**Busnes bach.** Mae dangosfyrddau mewnol offer parod yn aml yn
rhagosod i gyfartaleddau a chymariaethau cyfnod sengl oherwydd dyna'r
symlaf i'w cyfrifo a'u harddangos. Ble bynnag y mae'r offeryn yn
caniatáu, newidiwch i ganolrifau ar gyfer metrigau wedi'u seilio ar
amser, a byddwch yn amheus o unrhyw bennawd "i fyny 40% y mis hwn" wedi'i
gyfrifo o gyfrif sylfaenol bach.

**Menter.** Mae camgymeriadau ystadegol ar y raddfa hon yn cael eu pobi i
mewn i benderfyniadau adnoddau ac ad-drefnu sy'n effeithio ar gannoedd o
bobl. Buddsoddwch mewn dadansoddwyr neu ymarferwyr data mewnol a all
adeiladu siartiau rheoli priodol a gwirio am ddrysyddion cyn i
gymhariaeth rhwng unedau busnes neu gyn-ac-ar-ôl newid mawr gael ei
chyflwyno i arweinyddiaeth fel ffaith wedi'i setlo.

**Llywodraeth.** Gall cymhariaeth naïf yn ystadegol sy'n bwydo
adroddiad cyhoeddus neu gyfiawnhad cyllideb gael canlyniadau byd-real
gormodol ac yn gwahodd yn union y math o graffu sy'n dinoethi
dadansoddiad esgeulus yn gyhoeddus. Cymhwyswch y technegau mwy trylwyr,
siartiau rheoli, meintiau sampl dogfennedig, gwiriadau drysydd, fel
arfer sefydlog ar gyfer unrhyw beth a gyhoeddir yn allanol, nid dim ond
fel ymdrech achlysurol orau.

## Enghreifftiau

**Menter.** Dathlodd tîm arweinyddiaeth cwmni meddalwedd welliant o 25%
mewn cyfradd methiant newid y mis ar ôl lansio polisi adolygu cod newydd,
gan gredydu'r polisi'n uniongyrchol. Canfu golwg agosach fod y mis
"cynt" wedi bod yn un anarferol wael, wedi'i yrru gan fudo un tîm a aeth
o chwith, ac roedd maint y sampl sylfaenol yn y ddau fis o dan ddeg ar
hugain o ddefnyddiadau ledled y cwmni. Dangosodd siart reoli gan
ddefnyddio deuddeg mis o hanes fod y darlleniad newydd yn dda o fewn
amrywiant normal, nid newid cam gwirioneddol, ac roedd effaith
wirioneddol y polisi, er yn real, yn llawer llai na'r rhif pennawd a
awgrymai.

**Llywodraeth.** Adroddodd asiantaeth tramwy cyhoeddus welliant blwyddyn
ar ôl blwyddyn mawr mewn perfformiad mewn pryd ar gyfer system
amserlennu wedi'i digideiddio'n newydd, gan gymharu un chwarter "cynt"
sengl ag un chwarter "ar ôl" sengl. Canfu adolygiad annibynnol fod y
chwarter "cynt" wedi cyd-daro â chau adeiladu digyswllt a oedd wedi
gostwng perfformiad ar draws y rhwydwaith cyfan, a dangosodd llinell
sylfaen hirach fod perfformiad mewn pryd eisoes wedi bod yn adfer cyn i'r
system newydd lansio. Defnyddiodd adroddiad diwygiedig yr asiantaeth
siart reoli aml-flwyddyn lawn a phriodolodd welliant mwy cymedrol, ond
mwy amddiffynadwy, i'r system newydd yn benodol.

## Achos busnes: cymhellion, ROI, a TCO

Camgyfeirio a osgowyd yw'r enillion ar lythrennedd ystadegol: mae
sefydliad sy'n priodoli gwelliant yn gywir, neu'n cydnabod sŵn fel sŵn yn
gywir, yn treulio ei fuddsoddiad nesaf ble bydd mewn gwirionedd yn
helpu yn hytrach na erlid effaith rithiol. Mae'r enghraifft fanwerthu
uchod yn nodweddiadol: gallai cwmni a gredai fod ei bolisi adolygu ei
hun wedi gyrru gwelliant o 25% dan-fuddsoddi mewn cyfranwyr gwirioneddol
eraill, neu orddweud gwerth y polisi mewn ffordd sy'n camarwain
penderfyniadau'r dyfodol.

Mae cost trylwyredd ystadegol yn bennaf yn newid mewn arfer yn hytrach na
offer newydd: dewis canolrif dros gyfartaledd, gwirio maint sampl cyn
ymateb, plotio llinell sylfaen hirach cyn datgan buddugoliaeth. Mae'r
arferion hyn yn costio ychydig i'w mabwysiadu ac yn atal y gost llawer
mwy, anos ei ganfod o benderfyniadau a wnaed ar gasgliadau hyderus,
anghywir.

## Gwrth-batrymau a pheryglon

- **Adrodd cyfartaledd ar ddata wedi'i seilio ar amser cam:** yn cuddio'r
  achos nodweddiadol a'r gynffon y tu ôl i un rhif camarweiniol.
- **Ymateb i ganran heb faint sampl gweladwy:** yn trin sŵn o lond llaw o
  ddigwyddiadau fel petai'n duedd sefydlog, ystyrlon.
- **Credydu ymyrraeth heb ddiystyru atchweliad tuag at y cymedr:**
  camgymeriad cyffredin, hawdd ei wneud, anodd ei sylwi.
- **Hawlio achosiaeth o gydberthynas heb ystyried drysyddion:** yn
  gorddweud yr hyn y mae'r data mewn gwirionedd yn ei gefnogi.
- **Cymharu instantiad cyn-ac-ar-ôl sengl yn lle plotio llinell sylfaen
  hirach:** ni all wahaniaethu tuedd wirioneddol oddi wrth amrywiant
  cyffredin.
- **Awgrymu mwy o gywirdeb nag y mae'r data'n ei gefnogi mewn adrodd
  arweinyddiaeth-wynebus:** yn gwahodd gorymateb i sŵn neu wfftio signal
  gwirioneddol.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Adroddir metrigau fel cyfartaleddau crai ac
  instantiadau cyn-ac-ar-ôl sengl heb unrhyw sylw i faint sampl, sgiw, neu
  amrywiant llinell sylfaen.
- **Lefel 2, Datblygu:** Mae rhai dadansoddwyr yn cymhwyso canolrifau
  neu ganraddau'n anffurfiol, ond nid oes arfer sefydliadol cyson ac
  anaml y gwirir drysyddion.
- **Lefel 3, Safoni:** Canolrifau a chanraddau yw'r rhagosodiad ar gyfer
  metrigau wedi'u seilio ar amser cam; dangosir meintiau sampl ochr yn
  ochr â metrigau wedi'u seilio ar ganran yn sefydliadol gyfan.
- **Lefel 4, Rheoli:** Mae siartiau rheoli â llinellau sylfaen
  hanesyddol yn arfer safonol ar gyfer unrhyw hawliad o duedd wirioneddol;
  ystyrir newidynnau drysu'n weithredol cyn gwneud hawliadau achosol mewn
  adrodd.
- **Lefel 5, Cerddorfaru:** Mae trylwyredd ystadegol wedi'i adeiladu i
  mewn i'r offer ei hun, mae dangosfyrddau'n renderu canraddau a bandiau
  rheoli yn ddiofyn, a gall y sefydliad ddangos y cywirwyd penderfyniad
  penodol yn y gorffennol oherwydd bod darlleniad naïf yn ystadegol wedi'i
  ddal cyn iddo lunio strategaeth.

## Syniadau ar gyfer trafodaeth

1. Pa un o'n penawdau dangosfwrdd presennol fyddai'n edrych yn wahanol petaem yn disodli cyfartaledd â chanolrif?
2. A ydym erioed wedi newid penderfyniad oherwydd bod canran wedi troi allan i fod wedi'i seilio ar sampl lawer llai nag y tybiom?
3. Beth yw stori "fe wnaethom wella'r metrig hwn" ddiweddar y dylem ei hailarchwilio am atchweliad tuag at y cymedr?
4. Ble gallai dau o'n metrigau fod yn gydberthynol trwy drydydd achos cudd yn hytrach na bod y naill yn gyrru'r llall?
5. A yw ein siartiau pwysicaf yn dangos amrediad normal o amrywiant, neu ddim ond llinell duedd sengl?

## Prif gasgliadau

- Ffafriwch **ganolrifau a chanraddau** dros gyfartaleddau ar gyfer
  metrigau peirianneg cam, wedi'u seilio ar amser.
- Triniwch **ganran o sampl bach** fel un swnllyd, a dywedwch hynny'n
  benodol yn hytrach nag ymateb iddo fel tuedd sefydlog.
- Gwyliwch am **atchweliad tuag at y cymedr** cyn credydu ymyrraeth am
  welliant a ddilynodd ddarlleniad anarferol wael.
- **Nid yw cydberthynas yn achosiaeth**; chwiliwch yn weithredol am
  newidynnau drysu cyn gwneud hawliad achosol.
- Defnyddiwch **siart reoli â llinell sylfaen hanesyddol wirioneddol**,
  nid instantiad cyn-ac-ar-ôl sengl, i ddweud tuedd wirioneddol oddi
  wrth sŵn cyffredin.

## Cyfeiriadau a darllen pellach

- *The Signal and the Noise*, gan Nate Silver (gwahaniaethu signal
  gwirioneddol oddi wrth sŵn mewn data amherffaith).
- *How to Measure Anything*, gan Douglas W. Hubbard (rhesymu ystadegol
  ar gyfer mesur sefydliadol).
- *Understanding Variation: The Key to Managing Chaos*, gan Donald J.
  Wheeler (siartiau rheoli a'r gwahaniaeth rhwng amrywiant achos-cyffredin
  ac achos-arbennig).
- *Thinking, Fast and Slow*, gan Daniel Kahneman (rhagfarnau gwybyddol
  gan gynnwys atchweliad tuag at y cymedr a rhithdyb y naratif achosol).
- *The Visual Display of Quantitative Information*, gan Edward R. Tufte
  (cyflwyniad gonest, uniondeb uchel o ddata meintiol).
