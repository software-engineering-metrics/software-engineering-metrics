# 7.3 Peryglon chwyddiant metrig a gwanhad ansawdd

## Trosolwg a chymhelliant

Mae'r pwnc hwn yn enwi, yn uniongyrchol ac yn benodol, y ddau fodd
methiant y rhybuddiodd pwnc 7.1 fod yn rhaid i fframwaith cyfan y
llyfr hwn warchod yn eu herbyn wrth i ddatblygiad â chymorth deallusrwydd artiffisial (AI) ddod yn
arfer safonol: **chwyddiant metrig**, rhifau'n codi heb werth
gwirioneddol cyfatebol, a **gwanhad ansawdd**, erydiad graddol mewn
ansawdd cod sy'n rhagori ar allu cyfredol y diwydiant i'w ganfod trwy
arferion adolygu a phrofi presennol. Nid yw'r rhain yn gategorïau
newydd o berygl nad yw'r llyfr hwn eisoes wedi'u henwi, mae chwyddiant
metrig yn ddeddf Goodhart pwnc 1.2 a thwyllo amnewid pwnc 1.2 wedi'u
cymhwyso ar raddfa, ac mae gwanhad ansawdd yn fwlch effeithiolrwydd-
gorchudd pwnc 4.2 a phryder diffyg-dianc pwnc 5.1, y ddau wedi'u
dwysáu. Yr hyn sy'n newydd yw'r cyflymder a'r raddfa y gall AI
cynhyrchiol gynhyrchu'r ddau fodd methiant ar yr un pryd, yn gyflymach
nag y dyluniwyd cledrau diogelwch presennol y rhan fwyaf o sefydliadau
i'w dal.

Mae'r mecanwaith penodol y mae'r pwnc hwn yn poeni amdano'n gynnil:
mae cod a gynhyrchwyd-gan-AI yn aml iawn yn edrych yn gywir. Mae'n
dilyn idiomau cyfarwydd, yn defnyddio enwau newidyn credadwy, ac yn
pasio darlleniad arwynebol yn llawer mwy dibynadwy na chod a
ysgrifennwyd-gan-ddyn gwirioneddol ddiofal fel arfer, yn union
oherwydd iddo gael ei hyfforddi ar gorpws enfawr o god a oedd yn edrych
yn gywir. Mae hyn yn gwneud diffygion a gynhyrchwyd-gan-AI'n anos i
adolygydd dynol eu dal trwy'r math o baru-patrwm, ydy-hwn-yn-edrych-yn-
iawn adolygiad sy'n dal llawer o wallau wedi'u cyflwyno-gan-ddyn,
oherwydd bod y fersiwn a gynhyrchwyd-gan-AI wedi'i optimeiddio'n
benodol, mewn ystyr ystadegol, i edrych yn iawn boed felly mewn
gwirionedd ai peidio.

I dimau mawr, mae peryglon y pwnc hwn yn cyfansymio â graddfa mewn
ffordd a ddylai bryderu sefydliadau menter a llywodraeth yn benodol:
gall chwyddiant metrig ar draws degau o dimau ar yr un pryd gynhyrchu
signal ffug, ar draws y sefydliad o gynhyrchiant gwell sy'n cymryd amser a
dadansoddiad sylweddol i'w ddadwneud, yn union fel y dangosodd enghraifft
technoleg ariannol pwnc 7.1. Mae gwanhad ansawdd sy'n rhagori ar allu
canfod hyd yn oed yn fwy difrifol mewn cyd-destunau rheoledig, diogelwch-
dyngedfennol, neu ymddiriedaeth-gyhoeddus, lle mae cost diffyg heb ei
ganfod yn cyrraedd cynhyrchu'n cario canlyniadau ymhell y tu hwnt i'r
pryder peirianneg uniongyrchol.

## Egwyddorion allweddol

- **Mae chwyddiant metrig a gwanhad ansawdd yn fersiynau wedi'u dwysáu
  o beryglon y mae'r llyfr hwn eisoes wedi'u henwi**, nid categorïau
  cwbl newydd; mae'r cledrau diogelwch presennol yn dal yn gymwys, ond
  angen gweithio'n galetach.
- **Mae ansawdd "edrych yn gywir" cod a gynhyrchwyd-gan-AI'n ei wneud yn
  benodol anos i adolygiad paru-patrwm dynol ddal diffygion cynnil.**
  Mae hwn yn berygl gwahanol i wall dynol arferol.
- **Gall cyflymder y symudiad hwn ragori ar allu sefydliad i addasu ei
  gledrau diogelwch**, gan greu ffenestr amlygiad gwirioneddol,
  amser-gyfyngedig.
- **Mae metrigau ansawdd presennol (Rhan 4) yn dal yn werthfawr ond
  efallai y bydd angen eu hailgalibro**, nid eu disodli, o gofio'r
  proffil perygl newydd hwn.
- **Mae angen buddsoddiad bwriadol ar allu canfod ei hun**, gan fod yr
  arferion adolygu a phrofi y mae'r llyfr hwn yn eu cwmpasu wedi'u
  dylunio cyn i'r perygl penodol hwn fodoli ar y raddfa hon.

## Argymhellion

### Ailgalibrwch drothwyon cyfradd methiant newid a diffygion dianc ar gyfer gwaith trwm-AI

Lle mae tîm neu ardal god wedi mabwysiadu cymorth AI'n drwm,
cymhwyswch olrhain wedi'i bwysoli-yn-ôl-difrifoldeb pwnc 2.4 a
phwnc 5.1 â sensitifrwydd uwch, o leiaf hyd nes bod eich sefydliad
wedi adeiladu digon o dystiolaeth (pwnc 7.2) i wybod a yw'r berthynas
hanesyddol rhwng y metrigau hyn a pherygl gwirioneddol yn dal i sefyll
heb ei newid ar gyfer gwaith â chymorth-AI yn benodol. Triniwch yr
ailgalibro hwn fel ystum casglu-tystiolaeth, dros dro, nid tybiaeth
barhaol, heb ei harchwilio i unrhyw gyfeiriad.

### Buddsoddwch yn benodol mewn gallu canfod sy'n gwrthsefyll y broblem "edrych yn gywir"

Mae adolygu cod traddodiadol, sy'n dibynnu'n drwm ar adnabyddiaeth
patrwm adolygydd am yr hyn sy'n edrych yn iawn, yn benodol wedi'i
wanhau yn erbyn cod a gynhyrchwyd-gan-AI sy'n edrych yn gredadwy ond yn
gynnil anghywir. Buddsoddwch yn gyfatebol fwy mewn dulliau canfod nad
ydynt yn dibynnu ar baru-patrwm gweledol:
**[profi treiglo](https://en.wikipedia.org/wiki/Mutation_testing)**
(pwnc 4.2), sy'n profi ymddygiad gwirioneddol yn hytrach nag
ymddangosiad, a phrofi seiliedig-ar-briodwedd neu seiliedig-ar-
anfariant, sy'n gwirio cywirdeb rhesymegol yn hytrach na chredadwyedd
arwynebol, mae'r ddau'n dod yn anghymesur o fwy gwerthfawr yn benodol
oherwydd y symudiad hwn.

### Gwyliwch am chwyddiant metrig ar draws y biblinell gyflenwi gyfan, nid dim ond ar bwynt cynhyrchu cod

Nid yw chwyddiant metrig o ddatblygiad â chymorth AI wedi'i gyfyngu i'r
cam codio; gall ledaenu trwy'r gadwyn amser-cylch gyfan (pwnc 2.6):
gall cyfaint mwy o pull requests a gynhyrchwyd-gan-AI chwyddo metrigau
trwybwn pull request (pwnc 2.9) hyd yn oed tra bo'r signal defnyddiol
y dyluniwyd y metrig hwnnw'n wreiddiol i'w ddal, trwybwn tîm
gwirioneddol, yn aros yn fflat neu'n gostwng hyd yn oed unwaith y
cyfrifir yn briodol am faich adolygu a chost cywiro. Archwiliwch eich
set fetrigau lawn am y patrwm lledaenu hwn, nid dim ond y metrigau
cyfagos-AI mwyaf amlwg, uniongyrchol.

### Adeiladwch gynllun ailgalibro penodol, wedi'i amseru yn hytrach nag ystum amheuaeth barhaol

Mae'r craffu uwch y mae'r pwnc hwn yn ei argymell yn briodol yn
ystod cyfnod gweithredol o fabwysiadu ac ansicrwydd, ond ni ddylai ddod
yn dreth barhaol, heb ei harchwilio ar waith â chymorth AI yn ddiddiwedd.
Wrth i'ch sefydliad adeiladu tystiolaeth wirioneddol trwy ddisgyblaeth
mesur pwnc 7.2, adolygwch drothwyon a chledrau diogelwch yn seiliedig
ar yr hyn y mae'r dystiolaeth honno mewn gwirionedd yn ei ddangos, gan
dynhau ymhellach lle cadarnheir perygl, llacio lle na chadarnheir, yn
hytrach naill ai'n anwybyddu'r perygl yn gyfan gwbl neu'n trin pob
darn o god â chymorth AI ag amheuaeth barhaol, ddiwahân waeth beth fo'r
dystiolaeth gronedig.

### Cyfathrebwch y perygl hwn yn dryloyw yn hytrach na'i drin fel rheswm i wrthsefyll mabwysiadu AI

Fframiwch ganllawiau'r pwnc hwn fel rheoli perygl ar gyfer gallu
newydd, gwirioneddol werthfawr, nid fel dadl yn erbyn datblygiad â
chymorth AI yn gyffredinol. Mae sefydliad sy'n cyfathrebu'r peryglon
penodol, wedi'u henwi hyn yn glir ac yn adeiladu cledrau diogelwch
cymesur yn eu herbyn, yn union fel y mae'r llyfr hwn yn ei argymell ar
gyfer pob metrig a thechneg arall y mae'n ei chwmpasu, yn mabwysiadu
cymorth AI'n fwy diogel ac yn fwy cynaliadwy nag un sy'n naill ai'n
anwybyddu'r perygl neu'n ei drin fel rheswm dros wrthwynebiad
diwahân i set o offer gwirioneddol ddefnyddiol.

## Cyfnewidiadau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Dim ailgalibro, trin gwaith â chymorth AI yn union yr un fath â chod a ysgrifennwyd-gan-ddyn | Syml, dim newid proses | Yn colli proffil perygl uwch penodol, wedi'i awgrymu gan dystiolaeth |
| Craffu uwch diwahân, parhaol ar bob cod â chymorth AI | Yn mwyafu lleihad perygl tymor-byr | Treth anghynaliadwy ar allu gwirioneddol werthfawr; yn anwybyddu tystiolaeth gronedig |
| Ailgalibro wedi'i amseru, wedi'i yrru-gan-dystiolaeth | Yn cydbwyso rheoli perygl â mabwysiadu cynaliadwy | Angen disgyblaeth fesur barhaus (pwnc 7.2) i wybod pryd i lacio craffu |
| Buddsoddiad mewn dulliau canfod sy'n gwrthsefyll diffygion "edrych yn gywir" | Yn mynd i'r afael â'r perygl newydd penodol yn uniongyrchol ac yn barhaol | Angen buddsoddiad ymlaen llaw mewn isadeiledd profi treiglo a seiliedig-ar-briodwedd |

Y tensiwn canolog yw **gofal yn erbyn cyflymder mabwysiadu**. Mae gofal
gormodol, parhaol yn gwastraffu llawer o werth gwirioneddol datblygiad
â chymorth AI; mae gofal annigonol yn peryglu'r chwyddiant metrig a'r
gwanhad ansawdd y mae'r pwnc hwn yn eu henwi, o bosibl ar raddfa
sylweddol cyn canfod. Datryswch y tensiwn trwy'r dull wedi'i amseru,
wedi'i yrru-gan-dystiolaeth y mae'r pwnc hwn yn ei argymell: craffu
uwch nawr, wedi'i galibro i lawr neu i fyny wrth i dystiolaeth
wirioneddol o ddisgyblaeth mesur pwnc 7.2 gronni, yn hytrach na naill
ai bolisi diwahân parhaol neu dybiaeth heb ei harchwilio nad oes dim
byd wedi newid.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A ydym wedi ailgalibro ein trothwyon cyfradd methiant newid neu
   ddiffygion dianc ar gyfer gwaith trwm-AI, neu a ydym yn cymhwyso
   trothwyon cyn-oes-AI heb eu newid?** Os heb eu newid, trafodwch a
   yw hynny'n adlewyrchu penderfyniad bwriadol, seiliedig-ar-
   dystiolaeth neu ddim ond absenoldeb sylw i'r cwestiwn.

2. **A oes gennym ddulliau canfod, fel profi treiglo, nad ydynt yn
   dibynnu ar baru-patrwm gweledol adolygydd, neu a yw ein proses
   adolygu'n gyfan gwbl yn ddibynnol ar lygaid dynol yn asesu a yw cod
   yn "edrych yn iawn"?** Dyma'r gwendid penodol y mae'r pwnc hwn
   yn ei nodi; aseswch eich gallu canfod cyfredol yn ei erbyn yn onest.

3. **A yw chwyddiant metrig wedi lledaenu y tu hwnt i'r cam codio i mewn
   i'n metrigau pull request neu ddefnyddio, ac a fyddem yn sylwi ar hyn
   o bryd petai wedi digwydd?** Ewch trwy eich cadwyn amser-cylch lawn
   yn chwilio am y patrwm lledaenu hwn, nid dim ond y pwynt tarddiad
   mwyaf amlwg.

4. **A yw ein craffu uwch cyfredol ar god â chymorth AI, os oes un, yn
   seiliedig ar dystiolaeth gronedig, neu a yw'n ddiofyn, diddiwedd heb
   ei archwilio nad yw erioed wedi'i ailystyried?** Trafodwch pa
   dystiolaeth y byddai angen ei chronni cyn i chi ystyried llacio neu
   dynhau ymhellach y cledrau diogelwch cyfredol.

5. **Sut ydym yn cyfathrebu peryglon y pwnc hwn yn fewnol: fel rheswm
   dros ofal a chledrau diogelwch cymesur, neu fel dadl oblygedig yn
   erbyn mabwysiadu AI yn gyffredinol?** Byddwch yn onest am sut mae'r
   sgwrs hon mewn gwirionedd yn cael ei derbyn gan eich tîm, gan nad yw
   neges a dderbynnir fel gwrthwynebiad diwahân yn aml yn cynhyrchu'r
   ymateb cymesur, seiliedig-ar-dystiolaeth y mae'r pwnc hwn yn ei
   argymell.

6. **Sut olwg fyddai arni petai ein sefydliad yn darganfod, dim ond ar
   ôl graddfa sylweddol, bod chwyddiant metrig a gwanhad ansawdd wedi
   bod yn digwydd ar yr un pryd ac heb eu canfod?** Mae'r senario
   concrid, braidd yn anghyfforddus hwn yn werth ei enwi'n benodol fel y
   methiant penodol y mae cledrau diogelwch y pwnc hwn wedi'u
   hadeiladu i'w atal.

## Golwg sector

**Cwmni newydd.** Mae mabwysiadu cyflym â chynhwysedd adolygu cyfyngedig
yn gwneud peryglon y pwnc hwn yn arbennig o acíwt ar gyfer tîm bach;
mae'r broblem ganfod "edrych yn gywir" yn anos ei dal â llai o
adolygwyr, llai arbenigol. Buddsoddwch yn gynnar mewn profi treiglo
ysgafn o leiaf ar eich llwybrau cod mwyaf dyngedfennol, hyd yn oed os
nad yw gorchudd cynhwysfawr yn ymarferol eto.

**Busnes bach.** Mae prosesau ailgalibro ffurfiol yn debygol o fod yn
ddiangen ar y raddfa hon, ond mae ymwybyddiaeth syml, benodol y mae cod
a gynhyrchwyd-gan-AI'n haeddu darlleniad ychydig yn fwy amheugar na'r
arfer, yn benodol oherwydd ei fod yn tueddu i edrych yn fwy hyderus
gywir nag y gallai mewn gwirionedd fod, yn costio dim ac yn mynd i'r
afael â phryder craidd y pwnc hwn yn uniongyrchol.

**Menter.** Mae chwyddiant metrig a gwanhad ansawdd ill dau'n cyfansymio'n
sylweddol ar raddfa, gan fod signal ffug neu broblem ansawdd heb ei
chanfod ar draws degau o dimau ar yr un pryd yn llawer mwy canlyniadol
ac yn llawer anos ei ddadwneud na'r un mater ar un tîm sengl.
Buddsoddwch yn fwriadol mewn uwchraddiadau gallu canfod ar draws y
sefydliad (isadeiledd profi treiglo, mabwysiad profi seiliedig-ar-
briodwedd) ac yn y ddisgyblaeth ailgalibro wedi'i hamseru y mae'r pwnc
hon yn ei hargymell, wedi'i holrhain yn ganolog.

**Llywodraeth.** Mae canlyniadau gwanhad ansawdd heb ei ganfod yn
arbennig o ddifrifol mewn cyd-destunau rheoledig, diogelwch-dyngedfennol,
neu ymddiriedaeth-gyhoeddus sy'n gyffredin mewn systemau llywodraeth.
Cymhwyswch graffu uwch, wedi'i yrru-gan-dystiolaeth yn benodol i
newidiadau â chymorth AI mewn llwybrau cod canlyniad-uchel (mae rhesymeg
pwysoli amlygiad-a-chamfanteisioldeb pwnc 6.4'n gymwys yn debyg
yma), a byddwch yn barod i ddangos, i archwilydd neu gorff goruchwylio,
union pa allu canfod sy'n bodoli yn erbyn y perygl penodol hwn.

## Enghreifftiau

**Menter.** Mabwysiadodd tîm peirianneg prosesu-hawliadau cwmni
yswiriant gymorth codio AI yn eang ac, chwe mis yn ddiweddarach, sylwi
ar godiad graddol ond mesuradwy mewn diffygion dianc yn benodol mewn
rhesymeg amodol gymhleth, y math o god lle mae trin achos-ymyl yn
gynnil anghywir ill dau'n haws i offer AI ei gynhyrchu'n gredadwy ac
yn anoddaf i adolygydd ei ddal trwy arolygiad yn unig. Cadarnhaodd
ymchwiliad y patrwm "edrych yn gywir" y mae'r pwnc hwn yn ei
ddisgrifio: roedd y cod diffygiol wedi defnyddio patrymau idiomatig,
cyfarwydd-yr-olwg yn gyson a basiodd adolygiad heb sbarduno'r math o
graffu y gallai darn o god a ysgrifennwyd-gan-ddyn, amlwg anarferol
neu chwithig fod wedi'i dderbyn. Targedodd ymateb y tîm brofi treiglo'n
benodol at resymeg amodol gymhleth ar draws y cwmni, dull canfod sy'n
gwrthsefyll y broblem credadwyedd-arwynebol, a mesurodd ostyngiad
sylweddol yn y categori diffyg penodol hwn o fewn dau chwarter.

**Llywodraeth.** Adeiladodd awdurdod treth oedd yn peilota datblygiad â
chymorth AI ar gyfer is-set o'i waith cynnal a chadw peiriant-cyfrifo
y ddisgyblaeth ailgalibro wedi'i hamseru y mae'r pwnc hwn yn ei
hargymell o'r dechrau, gan osod cyfnod casglu-tystiolaeth chwe mis
penodol â gofynion adolygu uwch ar gyfer newidiadau â chymorth AI i
resymeg cyfrifo yn benodol. Ni ddangosodd y dystiolaeth a gasglwyd
wahaniaeth ystyrlon yn ystadegol mewn cyfradd diffyg ar gyfer
newidiadau cul, wedi'u cwmpasu'n dda, ond fe gadarnhaodd berygl uwch
ar gyfer newidiadau â chymorth AI ehangach, yn bensaernïol arwyddocaol.
Llaciodd polisi canlyniadol yr asiantaeth graffu uwch ar gyfer y
categori newid-cul tra'n cynnal a hyd yn oed yn cryfhau ar gyfer
newidiadau'n bensaernïol arwyddocaol, canlyniad cymesur, seiliedig-ar-
dystiolaeth na fyddai naill ai'r pen eithaf "dim ailgalibro" na'r pen
eithaf "craffu diwahân parhaol" wedi'i gynhyrchu.

## Achos busnes: cymhellion, ROI, a TCO

Osgoi'n union y senario y mae'r enghraifft cwmni yswiriant uchod yn ei
ddangos yw'r enillion ar warchod yn erbyn chwyddiant metrig a gwanhad
ansawdd yn fwriadol: problem ansawdd heb ei chanfod, yn cyfansymio'n
raddol sy'n costio llawer mwy i'w darganfod a'i hunioni ar ôl y ffaith
na fyddai'r buddsoddiad canfod, isadeiledd profi treiglo wedi'i dargedu'n
benodol at y cod perygl-uchaf, wedi'i gostio'n rhagweithiol.

Mae cost cyfanswm perchnogaeth yn cynnwys y buddsoddiad gallu-canfod y
mae'r pwnc hwn yn ei argymell a'r ddisgyblaeth barhaus o ailgalibro
seiliedig-ar-dystiolaeth yn hytrach naill ai ben eithaf, amheuaeth
barhaol neu ddiofal parhaol. Mae'r gost honno'n gymedrol ac wedi'i
hamseru mewn perthynas â pherygl problem ansawdd sylweddol, ar raddfa'n
mynd heb ei chanfod yn benodol oherwydd iddi gael ei pheirianneg, gan
natur sut mae'r offer hyn yn cynhyrchu cod, i edrych yn gywir i'r
prosesau adolygu yr oedd gan sefydliad eisoes ar waith.

## Gwrth-batrymau a pheryglon

- **Cymhwyso trothwyon a dulliau canfod cyn-oes-AI heb eu newid:** yn
  colli proffil perygl uwch penodol, wedi'i awgrymu gan dystiolaeth.
- **Dibynnu'n gyfan gwbl ar adolygiad paru-patrwm dynol ar gyfer cod a
  gynhyrchwyd-gan-AI:** yn benodol agored i'r broblem "edrych yn gywir"
  y mae'r pwnc hwn yn ei nodi.
- **Colli lledaeniad chwyddiant metrig y tu hwnt i bwynt cynhyrchu
  cod:** gall signal ffug ledaenu trwy'r biblinell gyflenwi gyfan heb ei
  ganfod.
- **Craffu diwahân parhaol, heb ei archwilio heb ailgalibro seiliedig-
  ar-dystiolaeth:** yn gwastraffu llawer o werth gwirioneddol
  datblygiad â chymorth AI yn anghynaliadwy.
- **Cyfathrebu peryglon y pwnc hwn fel gwrthwynebiad diwahân i
  fabwysiadu AI yn hytrach na rheoli perygl cymesur:** yn tanseilio
  diogelwch a mabwysiadu fel ei gilydd.
- **Dim buddsoddiad gallu-canfod wedi'i dargedu'n benodol at y proffil
  perygl newydd hwn:** yn gadael y sefydliad yn ddibynnol ar ddulliau
  adolygu y mae'r pwnc hwn wedi dangos eu bod wedi'u gwanhau'n
  benodol yn eu herbyn.

## Model aeddfedrwydd

- **Lefel 1, Cychwyn:** Dim ymwybyddiaeth o berygl chwyddiant metrig na
  gwanhad ansawdd penodol i ddatblygiad â chymorth AI; cymhwysir
  cledrau diogelwch a dulliau canfod presennol heb eu newid.
- **Lefel 2, Datblygu:** Mae rhywfaint o ymwybyddiaeth yn bodoli, ond
  mae ailgalibro'n ad hoc ac ni wnaed buddsoddiad gallu-canfod penodol
  i'r perygl hwn.
- **Lefel 3, Safoni:** Cymhwysir trothwyon wedi'u hailgalibro a dulliau
  canfod sy'n gwrthsefyll y broblem "edrych yn gywir" (profi treiglo a
  seiliedig-ar-briodwedd) yn gyson i waith â chymorth AI.
- **Lefel 4, Rheoli:** Mae disgyblaeth ailgalibro wedi'i hamseru, wedi'i
  gyrru-gan-dystiolaeth yn addasu craffu'n weithredol yn seiliedig ar
  ddata cronedig, a monitrir lledaeniad chwyddiant metrig yn weithredol
  ar draws y biblinell gyfan.
- **Lefel 5, Cerddorfaru:** Mae gan y sefydliad ystum rheoli-perygl
  aeddfed, cymesur, sy'n esblygu'n barhaus tuag at ddatblygiad â
  chymorth AI, wedi'i gyfathrebu'n dryloyw, nad yw'n gwastraffu ei werth
  trwy ofal gormodol nac yn amlygu'r sefydliad i wanhad ansawdd heb ei
  ganfod.

## Syniadau ar gyfer trafodaeth

1. A ydym wedi gweld unrhyw dystiolaeth gynnar o'r patrwm diffyg "edrych yn gywir" yn ein cod ein hunain â chymorth AI?
2. Pa ddull canfod fyddai'n mynd i'r afael yn fwyaf uniongyrchol â pherygl penodol y pwnc hwn i ni?
3. A yw chwyddiant metrig o gymorth AI wedi lledaenu i mewn i unrhyw un o'n metrigau biblinell i lawr yr afon?
4. A yw ein craffu cyfredol ar god â chymorth AI yn seiliedig-ar-dystiolaeth neu'n ddiofyn heb ei archwilio?
5. Sut mae canllawiau'r pwnc hwn mewn gwirionedd yn cael eu derbyn gan ein tîm: fel rheoli perygl neu fel gwrthwynebiad i fabwysiadu AI?

## Prif gasgliadau

- Mae chwyddiant metrig a gwanhad ansawdd yn **fersiynau wedi'u dwysáu
  o beryglon y mae'r llyfr hwn eisoes yn eu henwi**, gan fynnu bod
  cledrau diogelwch presennol yn gweithio'n galetach, nid fframweithiau
  cwbl newydd.
- Mae tueddiad cod a gynhyrchwyd-gan-AI i **"edrych yn gywir"** yn
  gwanhau adolygiad cod dynol, paru-patrwm traddodiadol yn benodol.
- Buddsoddwch mewn **dulliau canfod sy'n gwrthsefyll credadwyedd
  arwynebol**, yn enwedig profi treiglo a seiliedig-ar-briodwedd.
- Cymhwyswch ystum **ailgalibro wedi'i amseru, wedi'i yrru-gan-
  dystiolaeth**, nid amheuaeth ddiwahân barhaol nac ymddiriedaeth
  barhaol, heb ei harchwilio.
- **Cyfathrebwch y perygl hwn fel rheoli perygl cymesur**, nid fel dadl
  yn erbyn mabwysiadu AI, i gefnogi diogelwch a defnydd cynaliadwy fel
  ei gilydd.

## Cyfeiriadau a darllen pellach

- *Accelerate: The Science of Lean Software and DevOps*, gan Nicole
  Forsgren, Jez Humble, a Gene Kim (y ddisgyblaeth cyflymder-a-
  sefydlogrwydd wedi'i barejo y mae'r pwnc hwn yn ei chymhwyso i
  gategori perygl newydd).
- Jia, Yue, a Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering*
  (2011): y dull canfod y mae'r pwnc hwn yn dadlau ei fod yn dod yn
  anghymesur o werthfawr.
- Ymchwil GitHub ar barau-rhaglennu AI a chynhyrchiant datblygwyr (data
  diwydiant ar ganlyniadau a pherygl datblygiad â chymorth AI).
- *The Tyranny of Metrics*, gan Jerry Z. Muller (obsesiwn metrig a
  pherygl twyllo, yn uniongyrchol berthnasol i bryder chwyddiant metrig
  y mae'r pwnc hwn yn ei enwi).
