# 1.1 Miért mérjük a szoftverfejlesztést

## Áttekintés és indíték

A szoftverfejlesztés úgy áll ellen a mérésnek, ahogy a gyártás nem. Egy
gyártósor egyforma darabokat állít elő, ezért ha megszámoljuk őket, valódi
dolgot tudunk meg. A szoftveres munka egyedi termékeket hoz létre állandóan
változó követelmények mellett, ezért a naiv számlálás, a commitoké, a
soroké, a lezárt jegyeké szinte semmit nem mond a leszállított értékről.
Ez a szakadék aközött, hogy nehéz mérni a szoftveres munkát, és aközött,
hogy nagyon is valóban tudnunk kell, jól megy-e, az, ahol ez az egész könyv
él. Ez a téma e szakadék őszinte áthidalásáról szól: nem úgy teszünk,
mintha a szoftveres munka olyan jól megszámolható volna, mint az
alkatrészek, hanem pontosan megmondjuk, mit tud és mit nem tud a mérés
egy mérnöki szervezetnek nyújtani.

A mérés olyan kérdésekre ad választ, amelyekre egy szervezet másképp nem
tud magabiztosan felelni: gyorsabb vagy lassabb lesz-e a szállításunk,
javul vagy romlik-e a minőség, kiégnek-e a mérnökök, megtérül-e ez a
beruházás. Metrikák nélkül ezekre a kérdésekre az válaszol, aki a
legmagabiztosabban beszél a teremben, általában a legrangosabb vagy
a leggyőzőbb jelenlévő, és ez a válasz gyakran téves. A [szoftverfejlesztő](https://en.wikipedia.org/wiki/Software_engineering)
csapatok, amelyek kihagyják a mérést, nem kerülik el, hogy ítéletet
alkossanak a saját teljesítményükről. Csak hangulatra, anekdotára és a
frissesség torzítására építik az ítéletet a bizonyítékok helyett.

A nagy csapatoknál ez már nem kellemes többlet, hanem szerkezeti kérdés.
Egy hatfős csapat a napi beszélgetésekből is közös képet alkot arról, hogyan
állnak a dolgok. Egy hatszáz fős főosztály, amely időzónák és üzletági
egységek között szóródik szét, erre nem képes. Ekkora léptéknél a közös,
megbízható számok halmaza az egyetlen gyakorlati pótléka annak az informális
tudatosságnak, amelyet a kis csapat ingyen megkap. A nagyvállalati vezetésnek
metrikák kellenek, hogy tucatnyi, ugyanazért a költségvetésért versengő
csapat között osszon el beruházást. A kormányzati mérnöki szervezeteknek
metrikák kellenek, hogy a törvényhozásnak és a nyilvánosságnak megmutassák:
a megítélt források valódi képességet hoztak létre, nem csak tevékenységet.
Mindkét helyen a „keményen dolgoztunk" nem bizonyíték; a védhető szám az.

## Alapelvek

- **Tanulj a méréssel, ne ítélkezz vele.** Egy mérnöki metrika elsődleges célja
  egy döntés megalapozása, nem egy ember vagy egy csapat pontozása.
- **A döntés nélküli szám dísz.** Ha a metrika semmilyen értéke nem
  változtatna azon, mit teszel legközelebb, nincs helye a dashboardon.
- **A mérés eszköz, nem cél.** A cél a jobb szoftver, megbízhatóbban
  szállítva, fenntartható csapat által. A metrikák csak ezt a célt szolgálják.
- **Minden metrikának ára van.** A műszerezés, az áttekintésre fordított
  idő és az 1.2 témában tárgyalt viselkedéstorzítási kockázat mind
  kerül valamibe. A metrikának ki kell termelnie ezt az árat.
- **A hallgatás is döntés.** Ha valamit nem mérünk, az következményekkel járó
  választás, nem semleges alapértelmezés.

## Ajánlások

### Indulj a döntésből, ne a dashboardból

Mielőtt bármit műszerezel, nevezd meg a döntést, amelyet a metrika megalapoz.
„Tudni szeretnénk, csökkentette-e az új telepítési csővezeték az incidensek
számát" döntés alakú kérdés; „kövessünk mindent, amit az eszköz exportálni
tud" nem az. A döntésből visszafelé dolgozva kicsi marad a metrikakészlet,
és minden csempe védhető, ha valaki megkérdezi, miért létezik. Ha nem tudod
megnevezni a döntést, amelyet egy metrika megalapozna, még ne építsd meg.
Az 1.3 téma az eredmények a kibocsátás előtt változatával mélyebben
foglalkozik ezzel a fegyelemmel.

### Válaszd szét a diagnosztikai és az értékelő használatot

Egy rendszerprobléma diagnosztizálására használt metrika (miért kúszik fel az
átfutási idő) teljesen másképp viselkedik, mint ugyanaz a metrika egy ember
vagy csapat értékelésére használva (kinek a legrosszabb az átfutási ideje).
Az első vizsgálódásra és fejlesztésre késztet. A második titkolózásra és
kijátszásra, mert a számhoz most már hírnévbeli vagy anyagi következmény
kapcsolódik. Döntsd el kifejezetten, írásban, melyik használatra való a
metrika, és soha ne hagyd, hogy egy diagnosztikai metrika az értékelő
használatba csússzon át a kockázat tudatos újragondolása nélkül. Ez a
különbségtétel újra meg újra előkerül a könyvben, és az 1.4 témában leírt
metrikacharta nem célokról szóló szakasza formálisan is rögzíti.

### Kezeld a mérést hipotézisként, ne tényként

A metrika egy közelítő mutató valamire, ami valóban érdekel, nem maga az a
dolog. A telepítési gyakoriság a szállítási képesség közelítő mutatója, nem
maga a szállítási képesség. Kezelj minden metrikát folyamatosan tesztelt
hipotézisként: ez a szám még mindig követi azt, ami számít, vagy a világ
továbblépett, és a közelítő mutató lemaradt? Ezt a kérdést rögzített ritmusban
tedd fel újra, ne feltételezd, hogy a két éve jól választott metrika ma is jó,
különösen, ha az eszközök, a csapatszerkezet vagy (lásd a 7. részt) maga a
munka természete változik.

### Tedd láthatóvá a mérés hiányát

A nagy szervezetekben a legkockázatosabb rés nem a rossz metrika, hanem az a
terület, amelyet senki nem mér, mert nehéz műszerezni: a fejlesztői élmény,
a csapatok közötti függőségek súrlódása, az intézményi tudás eróziója. Nevezd
meg ezeket a hézagokat kifejezetten a metrikachartádban, ne hagyd, hogy
alapértelmezés szerint láthatatlanok maradjanak. Az a szervezet, amely tudja,
mit nem mér és miért, sokkal erősebb helyzetben van, mint amelyik csendben
elfelejtette, hogy ezek a területek léteznek.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Erős műszerezés, sok metrika | Széles láthatóság, kevesebb vakfolt | Dashboard-fáradtság, nagyobb kijátszási felület, magasabb karbantartási költség |
| Minimális, döntésvezérelt metrikák | Fókusz, kis többletteher, minden metrika védhető | Kockázat, hogy kimarad egy a kiválasztott készleten kívül kialakuló probléma |
| Csak diagnózisra szolgáló metrikák | Őszinte jelentésre és vizsgálódásra ösztönöz | A vezetés informálisan így is használhatja értékelésre |
| Egyéni értékeléshez kötött metrikák | Elszámoltathatónak érződik, könnyű elmagyarázni a vezetőknek | Erős kijátszási ösztönző; rontja a bizalmat; általában rossz dolgot mér |

A központi feszültség a **lefedettség és a fókusz** között áll fenn, és a
**diagnózis és az ítélkezés** különbsége élesíti. Túl kevés metrikával
vakfoltok alakulnak ki, amelyek csak válságként bukkannak fel; túl sokkal
senki nem tud egyikkel sem mit kezdeni, miközben minden olyan metrika, amelyre
értékelő súlyt teszel, torzulást hív. Oldd fel úgy, hogy minimálisan,
döntésvezérelten indulsz, csak akkor adsz hozzá metrikát, ha egy konkrét,
megnevezett döntésnek szüksége van rá, és a csak diagnosztikai határt
kifejezetten az 1.4 téma governance-munkájában védelmezed, ahelyett hogy
alapértelmezés szerint kopni hagynád.

## Kérdések a csapattal való megbeszéléshez

1. **A mostani dashboardunk minden metrikájánál milyen döntést váltana ki egy
   jó és egy rossz érték?** Ha mindkét érték ugyanahhoz a lépéshez vagy
   semmilyen lépéshez vezet, a metrika dísz. Menj végig a dashboardon csempéről
   csempére, és kényszeríts ki őszinte választ mindegyikre. Ez a gyakorlat
   rendszerint egy ülésben megfelezi a felduzzadt dashboardot, mert a burjánzás
   többnyire olyan metrikákból halmozódik fel, amelyeket senki nem távolít el,
   nem olyanokból, amelyeket valaki ma is érvényes okból vett fel.

2. **Melyik metrikánkat használjuk diagnosztikai célra, és melyik vált
   csendben értékelővé?** Egy rendszerszintű szűk keresztmetszet megértésére
   épített metrika eltolódhat oda, hogy csapatokat vagy egyéneket rangsoroljanak
   vele, anélkül hogy ezt bárki szándékosan eldöntötte volna, gyakran egy
   megbeszélésen elejtett megjegyzésen át, amely szokássá válik. Ha ez az
   eltolódás megtörténik, a szám megbízhatatlanná válik, mert az embereknek
   most már az az okuk, hogy jól mutasson, nem az, hogy pontos legyen. Írd le
   minden metrika szándékolt használatát, és vesd össze a jelenlegi gyakorlattal.

3. **Mit nem mérünk, mert nehéz műszerezni, és mibe kerül nekünk ez a hiány?**
   A legveszélyesebb vakfoltok azok, amelyek soha nem kerülnek dashboardra,
   éppen mert nehezen mérhetők: a csapatok közötti függőségek súrlódása, az
   intézményi tudás eróziója, vagy a törékeny kerülőmegoldások csendes
   halmozódása. Hozz egy listát arról, amiért mindenki titokban aggódik, de
   senki nem követi, és légy őszinte, miért.

4. **Ha holnap törölnénk ezt a metrikát, ki venné észre, és mit veszítene?**
   Az a metrika, amelyet senki nem hiányolna, nem alapoz meg egyetlen döntést
   sem. Ez a kérdés felszínre hozza a hiúsági csempéket, amelyek pusztán
   tehetetlenségből maradnak fenn. Egy tucatnyi csapat-dashboarddal rendelkező
   nagy szervezetben ez a metszési fegyelem ugyanúgy számít, mint az új
   metrikák felvételének fegyelme.

5. **Valójában mennyibe kerül előállítani és fenntartani a dashboardunk
   egyes metrikáit, beleértve a műszerezés mögötti mérnöki időt?** A
   metrikák nem ingyenesek. A csővezetékeknek, a dashboardoknak és egy szám
   megbeszélésére fordított áttekintési időnek ismétlődő költsége van, amelyet
   könnyű alábecsülni, mert sok apró feladat között oszlik el, nem egyetlen
   látható tételként jelenik meg. Hozd el a tényleges műszerezési és
   karbantartási ráfordítást, és mérd az 1. kérdésből származó döntési értékhez.

6. **Hol vált a mérés az ítélőképesség helyettesítőjévé, és hol vált az
   ítélőképesség a mérés helyettesítőjévé?** Mindkét hibamód valós. Az a
   csapat, amely minden döntést a dashboardra bíz, elveszíti azt a kontextuális
   ítélőképességet, amely észreveszi, amit a szám nem; az a csapat, amely a
   rendelkezésre álló adatokat figyelmen kívül hagyja a teremben leghangosabb
   hang javára, pontosan azt a problémát ismétli, amellyel ez a téma kezdődött.
   A cél olyan metrika, amely megalapozza az ítélőképességet, nem olyan, amely
   leváltja.

## Ágazati szemszög

**Startup.** Néhány mérnöknél a legtöbb, amitől ez a téma óv, az értékelő
használat felé sodródás, a vakfoltok, a dashboard felfúvódása, könnyen
elkerülhető, egyszerűen azért, mert mindenki naponta beszél egymással. A
kockázat az ellenkezője: hogy teljesen kihagyják a mérést, mert olyan
többletteherként érződik, amelyet a csapat nem engedhet meg magának.
Válassz két-három döntés alakú kérdést (elég gyorsan szállítunk-e, tartja-e
magát a minőség), és csak azokat műszerezd.

**Kisvállalkozás.** Dedikált platform- vagy adatcsapat nélkül támaszkodj arra,
amit a meglévő eszközeid már jelentenek, ahelyett hogy egyedi műszerezést
építenél. Egy fizetésfeldolgozó dashboardja, egy ügyfélszolgálati eszköz
válaszidő-metrikái és a CI-szolgáltatód build-előzményei általában lefedik a
legfontosabb döntéseket. Állj ellen a kísértésnek, hogy dedikált mérnöki
elemzési platformot vegyél, mielőtt bebizonyítottad volna, hogy cselekedni
fogsz azon, amit az mond.

**Nagyvállalat.** A fő kockázat a metrikák csendes eltolódása a diagnosztikaiból
az értékelő használatba, ahogy a vezetői rétegeken át felgördülnek, és a
dashboardok, amelyek felhalmozódással nőnek, mert senkinek nem feladata a
metszésük. A governance (1.4 téma) ezen a léptéken nem választható.
Egységesítsd a definíciókat az üzletági egységek között, és építs rendszeres
kivezetési felülvizsgálatot magába a metrikaprogramba.

**Közszféra.** A metrikák itt gyakran törvényi vagy költségvetési súlyt
hordoznak, ami növeli a helyes kialakításuk értékét és a hibás kialakítás
költségét is. A törvényhozásnak vagy felügyeleti szervnek jelentett számhoz
dokumentált módszertan, a jelentési időszakok között stabil definíció és
őszinteség kell a korlátairól. A „ezt jelenleg nem mérjük" olyan válasz,
amelyet esetleg meg kell védened, nem rejtegetendő magánhiba.

## Példák

**Nagyvállalat.** Egy globális biztosítótársaság mérnöki szervezete hatvan
fölötti scrum-csapatra nőtt, mindegyiknek megvolt a maga informális
dashboardja, és egyik sem volt összehasonlítható egyetlen másikkal. A
vezetés nem tudott válaszolni egy alapkérdésre: a tíz stratégiai platformberuházásunk
közül melyik szállít valójában gyorsabban szoftvert. A megoldás nem több
metrika volt, hanem kevesebb, jobb: a szervezet meghatározta a DORA-metrikák
(2.10 téma) közös, döntésvezérelt magját, mindenhol ugyanabból a csővezetékadatból,
azonos módon számolva, kivezetett negyven csapatspecifikus dashboardot, és két
negyedéven belül végre közös alapon tudta összehasonlítani a beruházási
területeket.

**Közszféra.** Egy nemzeti adóhatóság digitális szolgáltatási csapatától
felügyeleti bizottság kérte, hogy bizonyítsa egy többéves modernizációs
program megtérülését. A csapat meglévő metrikái teljesen belsők és
tevékenységalapúak voltak: elvégzett story pontok, lezárt sprintek. Ezek
közül egyik sem válaszolt a bizottság tényleges kérdésére. A csapat ehelyett
egy kis eredménymetrika-készletet épített: az állampolgári bevallási
problémák megoldásának mediánideje, a digitális csatorna elfogadási aránya
és a kiszökött hibák aránya az új rendszerben, és ezeket negyedévente
dokumentált módszertannal jelentette. A bizottság kérdései a „bizonyítsák,
hogy dolgoznak" helyett oda tolódtak, hogy „hogyan ismételhetjük meg ezt a
következő ügynökségnél", és pontosan ezt az eredményt hivatott hozni egy jól
megválasztott metrikakészlet.

## Üzleti érv: indítékok, ROI és TCO

A tudatos mérés megtérülése a döntések minősége. Az a szervezet, amely
bizonyítékkal tudja mondani, hogy „az átfutási időnk 30%-kal javult a
platformberuházás után", meg tudja védeni a beruházást, meg tudja ismételni,
ami bevált, és le tudja állítani, ami nem. Az anekdotára támaszkodó
szervezet semmit nem tud ebből magabiztosan, és minden költségvetési
ciklusban ugyanazokat a vitákat vívja újra, mert senki nem tud olyan
számra mutatni, amelyben mindkét fél megbízik.

A mérés költsége nem a dashboard. Hanem a folyamatos fegyelem: a műszerezés,
a definíciók karbantartása és az ebben a témában ajánlott időszakos metszés.
Ez a teljes birtoklási költség valós, de szerény ahhoz a költséghez képest,
amelyet az alternatíva jelent: egy nagy szervezet sokmilliós technológiai
döntéseket hoz annak alapján, hogy ki érvelt a leggyőzőbben a teremben. A
metrikaprogram megtérülése nem maguk a metrikák; hanem az általuk jobbá tett
döntések.

## Antiminták és buktatók

- **Mindent mérni, amit az eszköz exportál:** a dashboardot zajjá változtatja,
  és hatalmas felületen hív kijátszást anélkül, hogy bármilyen döntési érték
  állna vele szemben.
- **Metrikák megnevezett döntés nélkül:** dísz, amely karbantartási
  erőfeszítésbe kerül, és senkinek nem mond semmi használhatót.
- **Csendes eltolódás a diagnosztikai használatból az értékelőbe:** a leggyorsabb
  módja egy szám iránti bizalom elpusztításának.
- **A metrika tényként, nem hipotézisként kezelése:** egy két éve helyes
  közelítő mutató ma lehet téves, és senki nem ellenőrzi.
- **A rossz szám hiányának összetévesztése a jó szám jelenlétével:** az a
  metrika, amelyet soha nem nézel, nem tudja megmondani, hogy valami nincs
  rendben.
- **Mérési képesség építése, mielőtt eldöntenénk, mit akarunk eldönteni:** a
  kérdést kereső műszerezés valós mérnöki időt pazarol.

## Érettségi modell

- **1. szint, Kezdeti:** A metrikák, ha egyáltalán vannak, ad hoc jellegűek,
  annak személyes ügyei, aki építette őket, és senki nem tudja megmondani,
  melyik milyen döntést alapoz meg.
- **2. szint, Fejlődő:** Néhány csapatnak van alapvető metrikakészlete,
  többnyire egy keretrendszerből vagy az eszköz alapértelmezéseiből
  másolva, a döntéshez való világos kapcsolat nélkül.
- **3. szint, Szabványosított:** Minden követett metrikának dokumentált célja
  és kifejezett diagnosztikai-vagy-értékelő besorolása van, amelyet a szervezet
  egységesen alkalmaz.
- **4. szint, Irányított:** A metrikákat rögzített ritmusban vizsgálják az
  általuk megalapozott döntésekhez képest; az a metrika, amely már nem
  érdemli ki a helyét, kivezetésre kerül, és az egész készletet költség és
  érték szerint is mérik.
- **5. szint, Összehangolt:** A mérés élő képesség: a szervezet rendszeresen
  azonosítja a saját vakfoltjait, teszteli, hogy a közelítő mutatói még
  követik-e a valóságot, és magát a metrikaprogramot is fejlesztendőnek
  tekinti, nem csak fenntartandónak.

## Ötletek a vitához

1. Melyik dashboard-metrikánkat indokolnánk a legnehezebben, ha ma kérdeznék, miért tartjuk meg?
2. Milyen döntést hoztunk az elmúlt negyedévben metrika alapján, vélemény helyett?
3. A szervezetünk hol vált csendben értékelővé egy diagnosztikai metrika?
4. Mitől félünk mérni, és miért?
5. Ha holnap eltűnne a metrikaprogramunk, mely döntések romlanának?

## A legfontosabb tanulságok

- A mérés **döntéseket** szolgál, nem önmagáért van; a döntés nélküli metrika
  dísz.
- Tartsd külön a **diagnosztikai** és az **értékelő** használatot, írásban,
  és figyeld a csendes átcsúszást köztük.
- Minden metrikát **hipotézisként** kezelj arról, amit képvisel, nem
  lezárt tényként, és rögzített ritmusban vizsgáld újra a hipotézist.
- A hallgatás, vagyis hogy valamit nem mérünk, maga is következményekkel
  járó döntés; tedd láthatóvá a vakfoltokat, ahelyett hogy alapértelmezés
  szerint láthatatlanok maradnának.
- A metrikaprogram teljes költsége valós; mérd össze kifejezetten az egyes
  metrikák nyújtotta döntési értékkel.

## Források és ajánlott olvasmányok

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble és Gene Kim (az eredményalapú mérnöki mérés kutatási alapja).
- *How to Measure Anything*, Douglas W. Hubbard (általános keret a mérhetetlennek
  tűnő dolgok számszerűsítéséhez).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin (a
  mérés által a szervezetbe vitt működési zavarok alapvető elemzése).
- *Thinking, Fast and Slow*, Daniel Kahneman (a kognitív torzítások, amelyek
  a segítség nélküli ítélőképességet megbízhatatlan pótlékká teszik a mérés
  helyett).
- A Google DevOps Research and Assessment (DORA) programja, [dora.dev](https://dora.dev/) (a
  folyamatos State of DevOps kutatás, amelyre a könyv végig támaszkodik).
