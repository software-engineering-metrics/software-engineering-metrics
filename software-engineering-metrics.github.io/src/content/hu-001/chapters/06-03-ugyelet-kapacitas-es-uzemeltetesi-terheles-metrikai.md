# 6.3 Ügyelet, kapacitás és üzemeltetési terhelés metrikái

## Áttekintés és indíték

A 6.1 téma által bevezetett megbízhatóság és a 6.2 téma által mért incidenskezelés is egy emberi rendszertől függ, amelyet ez a téma közvetlenül mér: az ügyeleti rotációtól, azoktól a mérnököktől, akik a személyhívót viselik, és reagálnak, ha valami elromlik, valamint az infrastruktúra kapacitásától, amely meghatározza, mekkora terhelést bír el egy rendszer, mielőtt egyáltalán elkezd romlani. Egy szervezetnek lehetnek kiváló SLO-i, jól megtervezett hibakeretei és valóban hibáztatásmentes incidenskultúrája, és mégis kiégetheti az ügyeletes mérnökeit egy fenntarthatatlan terheléssel, amely végül éppen azt a megbízhatóságot rontja, amelynek védelmére a többi gyakorlatot létrehozták.

Ez a téma az üzemeltetési terhelést önálló metrikacsaládként kezeli, amely közvetlenül kapcsolódik a 3.2 téma jóllét- és [kiégés](https://en.wikipedia.org/wiki/Occupational_burnout)mérésére, de a személyhívó viselésének sajátos, heves stresszére vonatkozik: a megszakított alvásra, az ügyeletben levés lelki költségére akkor is, ha semmi nem történik, és a gyakori, rosszul elosztott incidensterhelés halmozódó terhére. Az a szervezet, amely aprólékosan méri a rendszerei megbízhatóságát, de sosem méri azoknak az embereknek a fenntarthatóságát, akik ezeket a rendszereket megbízhatóvá teszik, csak a kép felét méri, és a nem mért fele előbb-utóbb felszínre kerül: lemorzsolódásként, kimerült reagálók gyengébb incidenskezelési minőségeként, vagy mindkettőként.

Nagy csapatoknál az ügyeleti és kapacitásmetrikák olyan terheléselosztási problémákat tárnak fel, amelyek a 3.5 téma tudáskoncentrációs aggályait tükrözik: kevés mérnök nyeli el a riasztások aránytalan részét, gyakran éppen a legtapasztaltabbak, mert ők tudják leggyorsabban megoldani az incidenseket, ami egyszerre jelent kiégési és busz-faktor kockázatot. Az éjjel-nappali kritikus szolgáltatásokat működtető nagyvállalatok és közszféra szervezetei a téma metrikáira támaszkodnak, hogy fenntartható módon lássák el létszámmal az ügyeleti rotációkat, ahelyett, hogy a valódi költséget csak a lemorzsolódáson át fedeznék fel.

## Alapelvek

- **Az ügyeleti terhelés mérhető, kezelhető erőforrás**, nem elkerülhetetlen, korlátlan teher, amelyet a mérnököknek egyszerűen el kell nyelniük.
- **A riasztási gyakoriság és a riasztások eloszlása egyaránt fontos.** A csapatátlag elrejtheti a kevés egyénre való súlyos koncentrációt.
- **Az ügyelet közbeni megszakítás akkor is költséggel jár, ha nincs tényleges incidens**: az elérhetőség és a felelősség lelki súlya.
- **A kapacitástervezés és az ügyeleti terhelés összefügg.** A rosszul méretezett infrastruktúra több riasztást generál, ami közvetlenül növeli az ügyeleti terhet.
- **A fenntartható ügyeleti rendszer magát a megbízhatóságot védi**, mert a kimerült reagálók lassabb, hibára hajlamosabb döntéseket hoznak az incidensek alatt.

## Ajánlások

### Kövesd a riasztási gyakoriságot és eloszlást, ne csak a csapatszintű átlagot

Mérd, hány riasztást kap az egyes ügyeletes mérnök, ne csak a csapatátlagot, amely elrejtheti a súlyos koncentrációt. A 3.5 téma busz-faktor és a 2.9 téma áttekintői terhelési aggályaihoz hasonlóan az ügyeleti terhelés gyakran néhány tapasztalt emberre koncentrálódik, akik a leggyorsabban meg tudják oldani az incidenseket, pontosan az a minta, amely egyszerre kiégési kockázatot és veszélyes egyedi hibapontot teremt. Ha ez a koncentráció megjelenik, tudatosan egyensúlyozd újra a rotációkat.

### Mérd az ügyeletben levés lelki költségét, ne csak az aktív incidensidőt

Az ügyeletben levés valódi költséggel jár olyan műszakban is, amikor nulla tényleges riasztás van: a lehetséges megszakítás várása miatt romlik az alvás minősége, korlátozottak a személyes tevékenységek, és a folyamatos felelősség alacsony fokú stresszt okoz. Ahol lehetséges, ezt felmérési adatokkal (3.7 téma) fogd meg, kifejezetten az ügyeleti élményről, elkülönítve az általános elégedettségtől, mert egy csapat jelezhet elfogadható általános elégedettséget, miközben az ügyelet kifejezetten csendben rombolja a jóllétet.

### Állíts fel kifejezett korlátokat a fenntartható ügyeleti gyakoriságra

Határozd meg, milyen gyakran lehet észszerűen ügyeletben bármely egyén, jellemzően legfeljebb négy-öt hétből egy héten, és kövesd a tényleges rotációs gyakoriságot ehhez a korláthoz képest. Az a rotáció, amelyben névleg elég ember szerepel, de a készséghiányok vagy a rendelkezésre állási korlátok miatt gyakorlatilag két-három emberre támaszkodik, valójában nem teljesíti a korlátot, akármit mutat is a névleges beosztás.

### Kösd a kapacitástervezést közvetlenül az ügyeleti terheléshez

A rosszul méretezett infrastruktúra, a forgalmi csúcsokhoz elégtelen tartalék, a nem megfelelő automatikus skálázási konfiguráció definíció szerint több riasztást generál, ami közvetlenül növeli az ügyeleti terhet. Kövesd az infrastruktúra kapacitáskihasználtságát, és vesd össze a riasztási gyakorisággal: az a szolgáltatás, amely rendszeresen a kapacitásplafonja közelében fut, és a riasztások aránytalan részét generálja, közvetlen, számszerűsíthető érv a kapacitásbefektetés mellett, nem csak homályos üzemeltetési panasz.

### Az ügyeleti metrikákat a létszám- és felvételi döntések megalapozására használd, ne egyéni értékelésre

Az ügyeleti terhelési adatot csapatszinten összesítsd, hogy érvelni tudj további létszám, a téves riasztásokat csökkentő jobb eszközök vagy a valódi incidensgyakoriságot csökkentő architekturális befektetés mellett. A könyv következetes útmutatását követve minden egyént közvetlenül érintő metrikánál (1.2 téma, 3.4 téma), soha ne használd az egyéni riasztásreagálási metrikákat egy konkrét mérnök teljesítményének értékelésére. A cél a fenntartható létszámozás és rendszertervezés, nem az egyéni pontszámolás.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs formális ügyeleti terheléskövetés | Nincs ráfordítás | A kiégési kockázat és a busz-faktor koncentráció láthatatlan marad, amíg lemorzsolódásként fel nem bukkan |
| Csak a csapatátlag riasztási gyakoriság | Egyszerű kiszámítani | Elrejti a súlyos egyéni koncentrációt |
| Egyéni szintű riasztáseloszlás-követés | Közvetlenül feltárja a koncentrációt és a kiégési kockázatot | Gondot igényel, hogy csak összesítve használják, soha egyéni értékelésre |
| Kapacitásbefektetés a riasztások mennyiségének forrásnál való csökkentésére | A kiváltó okot kezeli, fenntarthatóan csökkenti a terhet | Előzetes infrastrukturális befektetést igényel |

A központi feszültség az **elfogadás és a befektetés** között van. Könnyű a magas riasztási mennyiséget egyszerűen a megbízható szolgáltatás működtetésének elkerülhetetlen költségeként kezelni, és megkérni az ügyeletes mérnököket, hogy nyeljék el, de ez az elfogadás előbb-utóbb lemorzsolódással és a kimerült reagálók romló incidenskezelési minőségével kerül a szervezetnek. Oldd fel a feszültséget úgy, hogy a megemelkedett ügyeleti terhelést valódi befektetést kívánó jelnek tekinted, kapacitásjavításokat, a téves pozitívokat csökkentő jobb riasztást, bővített rotációs létszámot, nem pedig elkerülhetetlen teherként, amelyet határozatlan ideig egyszerűen el kell viselni.

## Kérdések a csapattal való megbeszéléshez

1. **Mi a tényleges riasztáseloszlás a rotáció egyes tagjai között, nem csak a csapatátlag?** Vedd elő a valódi, egyéni szintű adatokat. Egy észszerűnek látszó csapatátlag elrejthet egy-két embert, akik drámaian aránytalan részt nyelnek el.

2. **Mértük-e valaha az ügyeletben levés lelki költségét az általános elégedettségtől elkülönítve?** Ha nem, beszéljétek meg, hogy egy külön, rövid felmérési kérdés kifejezetten az ügyeleti élményről feltárna-e olyasmit, amit az általános elégedettségi felmérésetek (3.2 téma) jelenleg elmulaszt.

3. **A névleges ügyeleti rotációs beosztásunk tükrözi a valóságot, vagy gyakorlatilag csak két-három emberre támaszkodik készséghiányok vagy rendelkezésre állás miatt?** Légy őszinte: az a beosztás, amely nyolc nevet sorol fel, de gyakorlatilag kettőtől függ, semmilyen észszerű fenntarthatósági korlátot nem teljesít.

4. **Melyik szolgáltatásunk generálja a riasztások aránytalan részét a kapacitástartalékához képest, és csökkentené-e a további infrastrukturális befektetés közvetlenül ezt a terhet?** Vesd össze kifejezetten a riasztási gyakoriságot a kapacitáskihasználtsági adatokkal, hogy valódi bizonyítékkal építsd fel ezt az érvet.

5. **Használtuk-e valaha az ügyeleti terhelési adatot, akár informálisan is, egy egyén teljesítményének értékelésére a létszám- és architektúradöntések megalapozása helyett?** Ez ugyanabba az egyéni értékelési csapdába vezet, amelyre a 3.4 téma a tevékenységi adatoknál figyelmeztet, itt az üzemeltetési terhelésre alkalmazva.

6. **Mibe kerülne, ha elveszítenénk a legtöbbet riasztott ügyeletes mérnökünket kiégés vagy lemorzsolódás miatt, és ez hogyan viszonyul a rotáció újraegyensúlyozásának vagy a kiváltó okok javításába való befektetésnek a költségéhez most?** Ez a konkrét összehasonlítás gyakran erősebb érv az előrelátó befektetés mellett, mint a fenntarthatóságra tett elvont hivatkozás önmagában.

## Ágazati szemszög

**Startup.** Az ügyelet gyakran informális, és szükségszerűen az alapítókra vagy egy kis korai mérnökcsapatra koncentrálódik. A kockázat az, hogy egy fenntarthatatlan ritmus korán normává válik, mielőtt a rotáció tudatos megtervezését egyáltalán fontolóra vették volna, és ezt sokkal nehezebb visszafordítani, ha már alapértelmezett elvárássá vált a később csatlakozó új munkatársak számára.

**Kisvállalkozás.** Egy egyszerű, kifejezett rotációs beosztás világos fenntarthatósági korláttal (például legfeljebb négy hétből egy hét) külön ügyeleti eszköz nélkül is megvalósítható. A fő fegyelem egyszerűen az, hogy a rotációt és a méltányosságát láthatóvá és kifejezetté tegyük, ne hagyjuk informális, ki nem mondott megállapodásnak.

**Nagyvállalat.** A riasztáseloszlás koncentrációja és a hozzá kapcsolódó kiégési és busz-faktor kockázatok itt rosszul skálázódnak, mert több szolgáltatás és több bonyolultság általában több lehetséges riasztást jelent, a szakértelem koncentrációja pedig súlyosbítja a problémát. Fektess be az egyéni szintű terheléskövetésbe (csak összesítve, létszámdöntésekhez használva), a riasztások mennyiségét a forrásnál csökkentő kapacitásbefektetésbe és a rotáció tudatos újraegyensúlyozásába.

**Közszféra.** A kritikus közinfrastruktúra gyakran éjjel-nappali ügyeleti lefedettséget igényel, valódi következményekkel a késedelmes reagálás esetén, ami növeli mind a fenntartható létszámozás fontosságát, mind elérésének nehézségét a jellemző közszféra-béli létszámkorlátok mellett. Az ügyeleti terhelési adatot kifejezetten és közvetlenül használd a létszámigények indoklására, a fenntartható ügyeleti kapacitást közvetlen, számszerűsíthető megbízhatósági követelményként keretezve, nem tetszés szerinti létszámpreferenciaként.

## Példák

**Nagyvállalat.** Egy felhőinfrastruktúra-cég először lekérte az egyéni szintű riasztási adatokat, és azt találta, hogy a tizenöt fős ügyeleti rotációból két senior mérnök személyesen kezelte az előző évi összes riasztás több mint 60%-át, egyrészt mert ők voltak a leggyorsabbak a bonyolult incidensek megoldásában, másrészt mert a rotáció többi tagja megtanulta informálisan rájuk hárítani, ahelyett, hogy maguk próbálták volna megoldani. Mindkét mérnök jelentős kiégési tünetekről számolt be a cég jóléti felmérésében (3.2 téma), anélkül hogy a vezetés korábban összekapcsolta volna ezt a felmérési jelet a konkrét, számszerűsíthető ügyeleti koncentrációs adattal. A tudatos újraegyensúlyozás, a szélesebb rotációban a megoldási önbizalmat építő célzott képzéssel és annak formális korlátozásával, hogy egy egyénhez hány egymás utáni riasztás rendelhető, hat hónapon belül 25% alá csökkentette a két mérnök részesedését, és ennek megfelelően javult a jelentett jóllétük.

**Közszféra.** Egy regionális vízművállalat ügyeleti mérnökcsapata névlegesen négyfős rotációval dolgozott a kritikus infrastruktúra megfigyelésén, de a kapacitáskihasználtsági adatok megmutatták, hogy egyetlen konkrét, elöregedett szivattyúállomás, amely következetesen az üzemi plafonja közelében működött, a teljes rotáció összes riasztásának közel felét generálta. Az egyetlen szivattyúállomás kapacitásbővítése, amelyet közvetlenül a riasztási gyakoriság és a kapacitás közötti korrelációval mint konkrét alátámasztó bizonyítékkal a költségvetési kérelemben finanszíroztak, a következő évben nagyjából 40%-kal csökkentette a szervezetszintű összes riasztási mennyiséget, megmutatva, hogy az ügyeleti teher jelentős részben álcázott kapacitásprobléma volt, nem pusztán létszám- vagy folyamatprobléma.

## Üzleti érv: indítékok, ROI és TCO

Az ügyeleti és kapacitásterhelés tudatos kezelésének megtérülése az elkerült lemorzsolódás és az elkerült megbízhatósági romlás, amelyet a lassabb, hibára hajlamosabb döntéseket hozó kimerült reagálók okoznának. A fenti felhőinfrastruktúra-példa közvetlenül mutatja a halmozódó kockázatot: a kezeletlen koncentráció egyidejű kiégési és busz-faktor kitettséget teremtett, amelyet egy egyszerű, adatalapú újraegyensúlyozás szerény költséggel oldott meg ahhoz a kockázathoz képest, hogy bármelyik senior mérnököt elveszítik a lemorzsolódás miatt.

A teljes birtoklási költség magában foglalja az egyéni szintű riasztáseloszlás követéséhez szükséges műszerezést (óvatosan, csak összesítve használva), és ahol indokolt, a riasztások mennyiségét a forrásnál csökkentő valódi kapacitásbefektetést. A vízművállalat példája azt mutatja, hogy ez a befektetés közvetlenül és mérhetően megtérülhet, mert egyetlen jól célzott kapacitásjavítás jelentősen csökkentette a szervezetszintű üzemeltetési terhet.

## Antiminták és buktatók

- **Csak csapatszintű átlagos riasztásszám követése:** elrejti a súlyos egyéni koncentrációt, amely egyszerre hajtja a kiégési és a busz-faktor kockázatot.
- **A névleges rotációs beosztás valóságnak tekintése:** az a beosztás, amely gyakorlatilag két-három emberre támaszkodik, nem fenntartható, akárhány név szerepel rajta.
- **Az egyéni riasztásreagálási adatok használata a teljesítmény értékelésére:** megismétli az egyéni értékelési csapdát, amelyre a könyv végig figyelmeztet, itt az üzemeltetési terhelésre alkalmazva.
- **A magas riasztási mennyiség elfogadása a megbízhatóság elkerülhetetlen költségeként ahelyett, hogy a kapacitást kiváltó okként vizsgálnák:** elmulaszt egy gyakran elérhető, közvetlen javítást.
- **Az ügyeleti terhelési adatok sosem összekapcsolása a jóléti felmérési adatokkal:** elmulasztja annak lehetőségét, hogy a halmozódó kiégési kockázatot azonosítsák és kezeljék, mielőtt lemorzsolódásként felszínre kerül.
- **Az ügyeletben levés lelki költségének figyelmen kívül hagyása nulla tényleges riasztásnál:** alulszámolja a rotáció valódi terhét.

## Érettségi modell

- **1. szint, Kezdeti:** Az ügyeleti terhelést egyáltalán nem követik, vagy csak az egyéni koncentrációt elrejtő csapatátlagként.
- **2. szint, Fejlődő:** Van némi egyéni szintű riasztási adat, de nem kapcsolódik jóléti felmérési adatokhoz vagy kapacitásbefektetési döntésekhez.
- **3. szint, Szabványosított:** Az egyéni szintű riasztáseloszlást és a kapacitáskihasználtsági korrelációt következetesen követik, a rotációs gyakoriságra kifejezett fenntarthatósági korlátokkal.
- **4. szint, Irányított:** Az ügyeleti terhelési adatot aktívan használják a kapacitásbefektetés és a rotáció újraegyensúlyozásának hajtására, kifejezetten a jóléti felmérési jelekhez kapcsolva.
- **5. szint, Összehangolt:** A szervezet konkrét, mérhető javulást tud felmutatni az üzemeltetési terhelésben és a jóllétben a célzott kapacitásbefektetésből és rotációs újratervezésből, és a fenntartható ügyeleti létszámozás a létszám- és infrastruktúra-tervezés rutinszerű, jól indokolt bemenete.

## Ötletek a vitához

1. Hogyan néz ki most a tényleges, egyéni szintű riasztáseloszlásunk?
2. A névleges rotációs beosztásunk tükrözi, hogy valójában ki oldja meg a legtöbb incidenst?
3. Melyik egyetlen kapacitásbefektetés csökkentené leginkább a jelenlegi riasztási mennyiségünket?
4. Összekapcsoltuk-e valaha az ügyeleti terhelési adatot jóléti felmérési jelekkel?
5. Mibe kerülne, ha elveszítenénk a legtöbbet riasztott mérnökünket kiégés miatt?

## A legfontosabb tanulságok

- Az ügyeleti terhelés **mérhető, kezelhető erőforrás**. Kövesd az egyéni szintű eloszlást, ne csak a súlyos koncentrációt elrejtő csapatátlagot.
- Az ügyeletben levés **lelki költséggel jár nulla tényleges riasztásnál is**. Ezt az általános elégedettségtől elkülönítve mérd.
- A **kapacitástervezés és az ügyeleti terhelés közvetlenül összefügg**: a rosszul méretezett infrastruktúra több riasztást és nagyobb terhet generál.
- Az ügyeleti adatot **létszám- és kapacitásdöntésekhez** használd, soha nem egyéni teljesítményértékeléshez.
- A fenntartható ügyeleti rendszer **magát a megbízhatóságot védi**, mert a kimerült reagálók lassabb, hibára hajlamosabb döntéseket hoznak.

## Források és ajánlott olvasmányok

- *Site Reliability Engineering: How Google Runs Production Systems*, szerkesztők: Betsy Beyer, Chris Jones, Jennifer Petoff és Niall Richard Murphy (az ügyeleti gyakorlat és a fenntartható üzemeltetési terhelés).
- *The Site Reliability Workbook*, szerkesztők: Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara és Stephen Thorne (gyakorlati útmutató az ügyeleti rotáció tervezéséhez).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve Wellbeing*, szerző: Christina Maslach és Michael P. Leiter (a kiégés szervezeti okai és beavatkozásai, az ügyeleti stresszre is alkalmazhatóan).
- *Seeking SRE: Conversations About Running Production Systems at Scale*, szerkesztő: David N. Blank-Edelman (gyakorlati nézőpontok a fenntartható üzemeltetési gyakorlatról).
