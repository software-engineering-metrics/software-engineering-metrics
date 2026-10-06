# 1.1 Pam mesur peirianneg meddalwedd

## Trosolwg a chymhelliant

Mae peirianneg meddalwedd yn gwrthsefyll mesur mewn ffordd nad yw
gweithgynhyrchu'n ei wneud. Mae llinell ffatri'n cynhyrchu unedau unfath, felly
mae eu cyfrif yn dweud rhywbeth gwirioneddol wrthych. Mae gwaith meddalwedd yn
cynhyrchu artiffactau unigryw o dan ofynion sy'n newid yn gyson, felly nid yw
cyfrif naïf, o gomitiau, o linellau, o docynnau wedi'u cau, yn dweud fawr ddim
wrthych am y gwerth a gyflwynwyd. Y bwlch hwnnw rhwng anhawster mesur gwaith
meddalwedd a'r angen gwirioneddol i wybod a yw'n mynd yn dda yw lle mae'r
llyfr cyfan hwn yn byw. Mae'r pwnc hwn yn ymwneud â chau'r bwlch hwnnw'n
onest: nid trwy esgus bod gwaith meddalwedd mor gyfrifadwy â nwyddau, ond
trwy fod yn fanwl gywir ynghylch beth y gall ac na all mesur ei wneud i
sefydliad peirianneg.

Mae mesur yn bodoli i ateb cwestiynau na all sefydliad eu hateb fel arall gyda
hyder: a yw ein cyflenwi'n gyflymach neu'n arafach, a yw ansawdd yn gwella
neu'n dirywio, a yw peirianwyr yn llosgi allan, a yw'r buddsoddiad hwn yn
talu ar ei ganfed. Heb fetrigau, mae'r cwestiynau hynny'n cael eu hateb gan
bwy bynnag sy'n siarad fwyaf hyderus yn yr ystafell, fel arfer y person mwyaf
uwch neu'r un mwyaf perswadiol sy'n bresennol, ac mae'r ateb hwnnw'n
aml yn anghywir. Nid yw timau
[peirianneg meddalwedd](https://en.wikipedia.org/wiki/Software_engineering)
sy'n hepgor mesur yn osgoi gwneud dyfarniadau am eu perfformiad eu hunain.
Maen nhw'n unig yn gwneud y dyfarniadau hynny ar deimladau, straeon, a
thuedd diweddarder yn hytrach na thystiolaeth.

I dimau mawr, mae hyn yn peidio â bod yn beth braf i'w gael ac yn dod yn
strwythurol. Gall tîm o chwech rannu model meddyliol o sut mae pethau'n mynd
trwy sgwrs ddyddiol. Ni all adran o chwe chant, wedi'i wasgaru ar draws
parthau amser ac unedau busnes. Ar y raddfa honno, set o rifau a rennir ac
sy'n cael eu hymddiried ynddynt yw'r unig ddewis ymarferol yn lle'r
ymwybyddiaeth anffurfiol y mae tîm bach yn ei chael am ddim. Mae angen
metrigau ar arweinyddiaeth menter i ddyrannu buddsoddiad ar draws dwsinau o
dimau sy'n cystadlu am yr un gyllideb. Mae angen metrigau ar sefydliadau
peirianneg llywodraeth i ddangos i ddeddfwrfeydd a'r cyhoedd fod arian a
neilltuwyd wedi cynhyrchu gallu gwirioneddol, nid gweithgarwch yn unig. Yn y
ddau leoliad, nid tystiolaeth yw "buom yn gweithio'n galed"; mae rhif
amddiffynadwy'n dystiolaeth.

## Egwyddorion allweddol

- **Mesur i ddysgu, nid i farnu.** Prif ddiben metrig peirianneg yw
  llywio penderfyniad, nid rhoi sgôr i berson neu dîm.
- **Mae rhif heb benderfyniad ynghlwm wrtho yn addurn.** Os na fyddai unrhyw
  ddarlleniad o fetrig yn newid yr hyn a wnewch nesaf, nid yw'n perthyn ar
  ddangosfwrdd.
- **Modd yw mesur, nid y nod.** Y nod yw meddalwedd well, wedi'i chyflwyno'n
  fwy dibynadwy, gan dîm cynaliadwy. Mae metrigau'n bodoli i wasanaethu'r
  nod hwnnw yn unig.
- **Mae gan bob metrig gost.** Mae cyfrifianeg, amser adolygu, a'r risg
  ystumio ymddygiadol a gwmpesir ym mhwnc 1.2 i gyd yn costio rhywbeth. Rhaid
  i fetrig ennill y gost honno'n ôl.
- **Penderfyniad yw distawrwydd hefyd.** Mae dewis peidio â mesur rhywbeth yn
  ddewis â chanlyniadau, nid rhagosodiad niwtral.

## Argymhellion

### Dechreuwch o'r penderfyniad, nid y dangosfwrdd

Cyn cyfrifiannu unrhyw beth, enwch y penderfyniad y bydd y metrig yn ei
lywio. Mae "rydym eisiau gwybod a wnaeth ein llif gwaith defnyddio newydd
leihau cyfraddau digwyddiadau" yn gwestiwn ar ffurf penderfyniad; nid yw
"gadewch inni olrhain popeth y gall yr offeryn ei allforio" felly. Mae
gweithio'n ôl o benderfyniad yn cadw'r set fetrigau'n fach ac yn cadw pob
teilsen yn amddiffynadwy pan fydd rhywun yn gofyn pam mae'n bodoli. Os na
allwch enwi'r penderfyniad y byddai metrig yn ei lywio, peidiwch â'i adeiladu
eto. Mae pwnc 1.3 yn mynd yn ddyfnach i mewn i'r fersiwn canlyniadau-dros-
gynnyrch o'r ddisgyblaeth hon.

### Gwahanwch ddefnydd diagnostig oddi wrth ddefnydd gwerthuso

Mae metrig a ddefnyddir i wneud diagnosis o broblem system (pam mae ein
hamser arwain yn cynyddu'n araf) yn ymddwyn yn hollol wahanol i'r un metrig a
ddefnyddir i werthuso person neu dîm (pwy sydd â'r amser arwain gwaethaf). Mae'r
cyntaf yn gwahodd ymchwiliad a gwelliant. Mae'r ail yn gwahodd cuddio a
thwyllo, oherwydd erbyn hyn mae gan y rhif ganlyniad enw da neu ariannol
ynghlwm wrtho. Penderfynwch yn benodol, yn ysgrifenedig, at ba ddefnydd y mae
metrig, a byth peidiwch â gadael i fetrig diagnostig lithro i ddefnydd
gwerthuso heb ailystyried y risg yn fwriadol. Mae'r gwahaniaeth hwn yn
digwydd dro ar ôl tro trwy'r llyfr hwn ac fe'i ffurfiolir yn adran y
diffyg-nodau o'r siarter metrigau a ddisgrifir ym mhwnc 1.4.

### Trinwch fesur fel damcaniaeth, nid ffaith

Metrig yw dirprwy ar gyfer rhywbeth y mae gwirioneddol ots gennych amdano,
nid y peth ei hun. Mae amlder defnyddio yn ddirprwy ar gyfer gallu
cyflenwi, nid gallu cyflenwi ei hun. Trinwch bob metrig fel damcaniaeth o
dan brawf parhaus: a yw'r rhif hwn yn dal i olrhain y peth y mae ots
gennym amdano, neu a yw'r byd wedi symud gan adael y dirprwy ar ôl? Ailedrychwch
ar y cwestiwn hwnnw ar gadwedd sefydlog yn hytrach na chymryd yn ganiataol
bod metrig a ddewiswyd yn dda ddwy flynedd yn ôl yn dal i gael ei ddewis yn
dda heddiw, yn enwedig wrth i offer, strwythur tîm, neu (gweler Rhan 7)
natur y gwaith ei hun newid.

### Gwnewch absenoldeb mesur yn weladwy

Mewn sefydliadau mawr, nid metrig gwael yw'r bwlch mwyaf peryglus, ond ardal
nad oes neb yn ei mesur o gwbl oherwydd ei bod yn anodd ei chyfrifiannu:
profiad datblygwr, ffrithiant dibyniaeth traws-dîm, erydiad gwybodaeth
sefydliadol. Enwch y bylchau hyn yn benodol yn eich siarter metrigau yn
hytrach na gadael iddynt aros yn anweledig yn ddiofyn. Mae sefydliad sy'n
gwybod beth nad yw'n ei fesur, a pham, mewn safle llawer cryfach nag un
sydd wedi anghofio'n dawel fod yr ardaloedd hynny'n bodoli.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Cyfrifianeg drwm, llawer o fetrigau | Gwelededd eang, llai o fannau dall | Blinder dangosfwrdd, arwyneb twyllo uwch, cost cynnal a chadw uwch |
| Metrigau lleiafswm, wedi'u gyrru gan benderfyniad | Ffocws, gorbenion isel, pob metrig yn amddiffynadwy | Risg o golli problem sy'n dod i'r amlwg y tu allan i'r set a ddewiswyd |
| Metrigau ar gyfer diagnosis yn unig | Yn annog adrodd ac ymchwilio gonest | Gall arweinyddiaeth eu defnyddio'n anffurfiol o hyd yn werthusol |
| Metrigau'n gysylltiedig â gwerthuso unigol | Yn teimlo'n atebol, yn hawdd i'w esbonio i weithredwyr | Cymhelliant twyllo cryf; yn niweidio ymddiriedaeth; fel arfer yn mesur y peth anghywir |

Y tensiwn canolog yw **cwmpas yn erbyn ffocws**, ac fe'i mireinir gan
**ddiagnosis yn erbyn dyfarniad**. Gormod o fetrigau prin a byddwch yn datblygu
mannau dall sy'n dod i'r amlwg dim ond fel argyfwng; gormod a all neb weithredu
ar unrhyw un ohonynt, tra bo pob un y rhowch bwysau gwerthuso arno'n gwahodd
ystumio. Datryswch ef trwy ddechrau'n leiafswm ac wedi'i yrru gan
benderfyniad, gan ychwanegu metrig dim ond pan fydd penderfyniad penodol, wedi'i
enwi ei angen, a thrwy amddiffyn y ffin diagnostig-yn-unig yn benodol yng
ngwaith llywodraethiant pwnc 1.4 yn hytrach na gadael iddi erydu'n ddiofyn.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Ar gyfer pob metrig ar ein dangosfwrdd presennol, pa benderfyniad y
   byddai darlleniad da a darlleniad gwael yn ei sbarduno?** Os yw'r ddau
   ddarlleniad yn arwain at yr un weithred, neu at ddim gweithred o gwbl,
   addurn yw'r metrig. Ewch trwy'ch dangosfwrdd deilsen wrth deilsen a
   gorfodwch ateb gonest ar gyfer pob un. Mae'r ymarfer hwn yn rheolaidd yn
   haneru dangosfwrdd chwyddedig mewn un eisteddiad, oherwydd mae'r rhan fwyaf
   o'r gwasgariad yn cronni o fetrigau nad oes neb erioed wedi'u tynnu yn
   hytrach na metrigau y penderfynodd rhywun yn fwriadol eu hychwanegu am
   reswm sy'n dal i sefyll.

2. **Pa rai o'n metrigau sy'n cael eu defnyddio'n ddiagnostig, a pha rai
   sydd wedi dod yn dawel yn werthusol?** Gall metrig a adeiladwyd i
   ddeall cyfyngiad system ddrifftio i mewn i gael ei ddefnyddio i raddio
   timau neu unigolion heb i unrhyw un benderfynu hynny'n fwriadol, yn aml
   trwy sylw achlysurol mewn cyfarfod adolygu sy'n dod yn arfer. Unwaith y
   bydd y drifft hwnnw'n digwydd, mae'r rhif yn peidio â bod yn ddibynadwy,
   oherwydd erbyn hyn mae gan bobl reswm i'w wneud i edrych yn dda yn
   hytrach na'i wneud yn gywir. Enwch bwriad defnydd pob metrig yn
   ysgrifenedig a gwiriwch yr arfer presennol yn ei erbyn.

3. **Beth nad ydym yn ei fesur oherwydd ei bod yn anodd ei gyfrifiannu, a
   beth mae'r bwlch hwnnw'n ei gostio i ni?** Y mannau dall mwyaf peryglus
   yw'r rhai nad ydynt byth yn cyrraedd dangosfwrdd yn union oherwydd eu bod
   yn gwrthsefyll mesur hawdd: ffrithiant dibyniaeth traws-dîm, erydiad
   gwybodaeth sefydliadol, neu gasgliad tawel o waith-o-gwmpas bregus. Dewch
   â rhestr o'r pethau y mae pawb yn poeni amdanynt yn breifat ond nad oes
   neb yn eu holrhain, a byddwch yn onest ynghylch pam.

4. **Petaem yn dileu'r metrig hwn yfory, pwy fyddai'n sylwi, a beth
   fyddent yn ei golli?** Mae metrig na fyddai neb yn ei golli yn fetrig nad
   yw'n llywio unrhyw benderfyniad. Mae'r cwestiwn hwn yn dod â theils
   gwagedd i'r amlwg sy'n goroesi drwy inertia'n unig. I sefydliad mawr â
   dwsinau o ddangosfyrddau tîm, mae'r ddisgyblaeth tocio hon yr un mor
   bwysig â'r ddisgyblaeth o ychwanegu metrigau newydd yn y lle cyntaf.

5. **Faint mae pob metrig ar ein dangosfwrdd yn ei gostio mewn gwirionedd
   i'w gynhyrchu a'i gynnal, gan gynnwys yr amser peirianneg y tu ôl i'r
   cyfrifianeg?** Nid yw metrigau'n rhad ac am ddim. Mae piblinellau,
   dangosfyrddau, a'r amser adolygu a dreulir yn trafod rhif i gyd yn cario
   cost ailadroddus sy'n hawdd ei danamcangyfrif oherwydd ei bod wedi'i
   dosbarthu ar draws llawer o dasgau bach yn hytrach nag un eitem llinell
   weladwy. Dewch â'ch ymdrech cyfrifianeg a chynnal a chadw gwirioneddol a'i
   bwyso yn erbyn gwerth y penderfyniad o gwestiwn 1.

6. **Ble mae mesur wedi dod yn ddirprwy ar gyfer dyfarniad, a ble mae
   dyfarniad wedi dod yn ddirprwy ar gyfer mesur?** Mae'r ddau fodd methiant
   yn wirioneddol. Mae tîm sy'n allanoli pob penderfyniad i ddangosfwrdd yn
   colli'r dyfarniad cyd-destunol sy'n dal yr hyn y mae'r rhif yn ei golli;
   mae tîm sy'n anwybyddu data sydd ar gael o blaid y llais uchaf yn yr
   ystafell yn ailadrodd yr union broblem y mae'r pwnc hwn yn agor â hi.
   Metrigau sy'n llywio dyfarniad yw'r nod, nid metrigau sy'n ei ddisodli.

## Golwg sector

**Cwmni newydd.** Gyda llond llaw o beirianwyr, mae'r rhan fwyaf o'r hyn y mae'r
pwnc hwn yn rhybuddio yn ei erbyn, drifft tuag at ddefnydd gwerthuso, mannau
dall, chwydd dangosfwrdd, yn hawdd ei osgoi'n syml oherwydd bod pawb yn siarad
bob dydd. Y risg yw'r un gwrthgyferbyniol: hepgor mesur yn gyfan gwbl
oherwydd ei fod yn teimlo fel gorbenion na all y tîm eu fforddio. Dewiswch
ddau neu dri chwestiwn ar ffurf penderfyniad (a ydym yn cyflenwi'n ddigon
cyflym, a yw ansawdd yn dal) a chyfrifiannwch y rheini'n unig.

**Busnes bach.** Heb blatfform neu dîm data pwrpasol, dibynnwch ar
beth bynnag y mae eich offer presennol eisoes yn ei adrodd yn hytrach nag
adeiladu cyfrifianeg bwrpasol. Mae dangosfwrdd prosesydd taliadau, metrigau
ymateb offeryn cymorth, a hanes adeiladu eich darparwr CI fel arfer yn
cwmpasu'r penderfyniadau sydd bwysicaf. Gwrthsefwch y demtasiwn i brynu
platfform dadansoddeg peirianneg pwrpasol cyn ichi brofi y byddwch yn
gweithredu ar yr hyn y mae'n ei ddweud wrthych.

**Menter.** Y prif risg yw metrigau sy'n drifftio'n dawel o ddefnydd
diagnostig i ddefnydd gwerthuso wrth iddynt rolio i fyny trwy haenau
rheolaeth, a dangosfyrddau sy'n tyfu trwy gronni oherwydd nad oes neb yn
berchen ar y swydd o'u tocio. Nid yw llywodraethiant (pwnc 1.4) yn ddewisol
ar y raddfa hon. Safonwch ddiffiniadau ar draws unedau busnes, ac adeiladwch
adolygiad ymddeol rheolaidd i mewn i'r rhaglen fetrigau ei hun.

**Llywodraeth.** Yn aml mae gan fetrigau yma bwysau statudol neu
cyllidebol, sy'n codi gwerth eu cael yn iawn a chost eu cael yn anghywir.
Mae angen methodoleg ddogfennedig, diffiniad sefydlog ar draws cyfnodau
adrodd, a gonestrwydd am ei gyfyngiadau ar rif a adroddir i ddeddfwrfa neu
gorff goruchwylio. Trinwch "nid ydym yn mesur hyn ar hyn o bryd" fel ateb y
gallai fod angen i chi ei amddiffyn, nid methiant preifat i'w guddio.

## Enghreifftiau

**Menter.** Roedd sefydliad peirianneg cwmni yswiriant byd-eang wedi tyfu i
dros drigain o dimau scrum, pob un â'i ddangosfwrdd anffurfiol ei hun, dim un
yn gymaradwy ag unrhyw un arall. Ni allai arweinyddiaeth ateb cwestiwn
sylfaenol: p'un o'n deg buddsoddiad platfform strategol sydd mewn gwirionedd
yn cyflenwi meddalwedd yn gyflymach. Nid mwy o fetrigau oedd yr ateb, ond
llai, gwell: diffiniodd y sefydliad graidd a rennir, wedi'i yrru gan
benderfyniad o fetrigau DORA (pwnc 2.10) wedi'u cyfrifo'n union yr un fath
ym mhobman o'r un data piblinell, ymddeolodd bedwar dangosfwrdd tîm-benodol
ar hugain, a gallai o'r diwedd gymharu meysydd buddsoddi ar sail gyffredin
o fewn dau chwarter.

**Llywodraeth.** Roedd tîm gwasanaeth digidol asiantaeth dreth genedlaethol
wedi cael ei ofyn gan bwyllgor goruchwylio i ddangos y ffordd y talodd
rhaglen foderneiddio aml-flwyddyn ar ei chanfed. Roedd metrigau presennol y
tîm yn hollol fewnol ac wedi'u seilio ar weithgarwch: pwyntiau stori wedi'u
cwblhau, sbrintiau wedi'u cau. Ni atebodd yr un o'r rheini gwestiwn
gwirioneddol y pwyllgor. Adeiladodd y tîm set fach o fetrigau canlyniad yn
lle hynny, amser canolrifol i ddatrys problem gyflwyno dinesydd, cyfradd
mabwysiadu sianel ddigidol, a chyfradd diffyg dianc yn y system newydd, ac
adroddodd y rheini bob chwarter gyda methodoleg ddogfennedig. Newidiodd
cwestiynau'r pwyllgor o "profwch eich bod yn gweithio" i "sut ydym yn
dyblygu hyn yn yr asiantaeth nesaf," sef y canlyniad y mae set fetrigau
wedi'i dewis yn dda i fod i'w gynhyrchu.

## Achos busnes: cymhellion, ROI, a TCO

Ansawdd penderfyniad yw'r enillion ar fesur bwriadol. Gall sefydliad sy'n
gallu dweud, gyda thystiolaeth, "gwellodd ein hamser arwain 30% ar ôl y
buddsoddiad platfform" amddiffyn y buddsoddiad hwnnw, ailadrodd yr hyn a
weithiodd, a stopio'r hyn na wnaeth. Ni all sefydliad sy'n dibynnu ar
straeon wneud unrhyw un o'r rheini gyda hyder, ac mae'n dod i ben yn
ailgyflafareddu'r un dadleuon bob cylch cyllideb oherwydd na all neb bwyntio
at rif y mae'r ddwy ochr yn ymddiried ynddo.

Nid y dangosfwrdd yw cost mesur. Y ddisgyblaeth barhaus ydyw: cyfrifianeg,
cynnal a chadw diffiniadau, a'r tocio cyfnodol y mae'r pwnc hwn yn ei
argymell. Mae'r gost cyfanswm perchnogaeth honno'n wirioneddol ond yn fach
o'i chymharu â chost y dewis arall, sef sefydliad mawr yn gwneud
penderfyniadau technoleg gwerth miliynau o ddoleri ar sail pwy bynnag a
ddadleuodd fwyaf perswadiol yn yr ystafell. Nid y metrigau eu hunain yw'r
enillion ar raglen fetrigau; y penderfyniadau a wneir yn well o'u herwydd
ydyw.

## Gwrth-batrymau a risgiau

- **Mesur popeth y mae'r offeryn yn ei allforio:** yn troi dangosfwrdd yn
  sŵn ac yn gwahodd twyllo ar draws arwyneb enfawr heb werth penderfyniad
  cyfatebol.
- **Metrigau heb benderfyniad wedi'i enwi:** addurn sy'n costio ymdrech
  cynnal a chadw ac nad yw'n dweud dim gweithredadwy wrth neb.
- **Drifft tawel o ddefnydd diagnostig i ddefnydd gwerthuso:** y ffordd
  gyflymaf o ddinistrio ymddiriedaeth mewn rhif.
- **Trin metrig fel ffaith yn hytrach na damcaniaeth:** dirprwy oedd yn
  gywir ddwy flynedd yn ôl a all fod yn anghywir heddiw, ac nid oes neb yn
  gwirio.
- **Drysu absenoldeb rhif gwael â phresenoldeb un da:** ni all metrig nad
  ydych byth yn edrych arno ddweud wrthych fod unrhyw beth o'i le.
- **Adeiladu gallu mesur cyn penderfynu beth i'w benderfynu:** mae
  cyfrifianeg sy'n chwilio am gwestiwn yn gwastraffu amser peirianneg
  gwirioneddol.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Mae metrigau, os ydynt yn bodoli o gwbl, yn ad hoc,
  yn bersonol i bwy bynnag a'u hadeiladodd, ac ni all neb ddweud pa
  benderfyniad y mae unrhyw un ohonynt yn ei lywio.
- **Lefel 2, Datblygu:** Mae set sylfaenol o fetrigau'n bodoli ar gyfer
  rhai timau, wedi'u copïo'n bennaf o fframwaith neu ragosodiadau offeryn,
  heb gyswllt clir yn ôl at benderfyniad.
- **Lefel 3, Safoni:** Mae gan bob metrig a olrheinir bwrpas dogfennedig a
  dosbarthiad diagnostig-yn-erbyn-gwerthusol penodol, wedi'i gymhwyso'n
  gyson ar draws y sefydliad.
- **Lefel 4, Rheoli:** Adolygir metrigau ar gadwedd sefydlog yn erbyn y
  penderfyniadau y maent yn eu llywio; mae metrigau sy'n peidio ag ennill
  eu lle'n cael eu hymddeol, a mesurir y set gyfan am gost yn ogystal â
  gwerth.
- **Lefel 5, Cerddorfaru:** Mae mesur yn allu byw: mae'r sefydliad yn
  nodi'n rheolaidd ei fannau dall ei hun, yn profi a yw ei ddirprwyon yn
  dal i olrhain realiti, ac yn trin y rhaglen fetrigau ei hun fel rhywbeth
  i'w wella, nid dim ond ei chynnal.

## Syniadau ar gyfer trafodaeth

1. Pa fetrig ar ein dangosfwrdd y byddem yn cael y drafferth fwyaf i'w gyfiawnhau ei gadw pe gofynnid inni heddiw?
2. Pa benderfyniad ydym wedi'i wneud yn y chwarter diwethaf gan ddefnyddio metrig, yn hytrach na barn?
3. Ble yn ein sefydliad y mae metrig diagnostig wedi dod yn dawel yn werthusol?
4. Beth ydym yn ofni ei fesur, a pham?
5. Petai ein rhaglen fetrigau'n diflannu yfory, pa benderfyniadau fyddai'n gwaethygu?

## Prif gasgliadau

- Mae mesur yn bodoli i wasanaethu **penderfyniadau**, nid i fodoli er ei
  fwyn ei hun; addurn yw metrig heb benderfyniad ynghlwm wrtho.
- Cadwch ddefnydd **diagnostig** ar wahân i ddefnydd **gwerthuso**, yn
  ysgrifenedig, a gwyliwch am ddrifft tawel rhyngddynt.
- Trinwch bob metrig fel **damcaniaeth** am yr hyn y mae'n ei gynrychioli,
  nid ffaith sefydlog, ac ailedrychwch ar y ddamcaniaeth honno ar gadwedd.
- Mae distawrwydd, dewis peidio â mesur rhywbeth, yn benderfyniad ynddo'i
  hun â chanlyniadau; gwnewch fannau dall yn weladwy yn hytrach na gadael
  iddynt aros yn anweledig yn ddiofyn.
- Mae cost cyfanswm rhaglen fetrigau'n wirioneddol; pwyswch ef yn benodol
  yn erbyn gwerth penderfyniad pob metrig.

## Cyfeiriadau a darllen pellach

- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (sylfaen ymchwil ar gyfer mesur
  peirianneg wedi'i seilio ar ganlyniadau).
- *How to Measure Anything*, gan Douglas W. Hubbard (fframwaith cyffredinol
  ar gyfer meintioli pethau sy'n ymddangos yn amhosibl eu mesur).
- *Measuring and Managing Performance in Organizations*, gan Robert D.
  Austin (y dadansoddiad sylfaenol o annormaledd y gall mesur ei gyflwyno
  i sefydliad).
- *Thinking, Fast and Slow*, gan Daniel Kahneman (y rhagfarnau gwybyddol
  sy'n gwneud dyfarniad heb gymorth yn ddirprwy annibynadwy ar gyfer
  mesur).
- Rhaglen Ymchwil a Chymhariaeth DevOps (DORA) Google, [dora.dev](https://dora.dev/)
  (yr ymchwil Cyflwr DevOps parhaus y mae'r llyfr hwn yn tynnu arno
  drwyddo draw).
