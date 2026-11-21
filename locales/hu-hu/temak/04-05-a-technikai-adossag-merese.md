# 4.5 A technikai adósság mérése

## Áttekintés és indíték

A **[technikai adósság](https://en.wikipedia.org/wiki/Technical_debt)**, a Ward Cunningham
által megalkotott metafora, a múltbeli rövidítések felhalmozott költségét írja le: azokat a
kényelmi döntéseket, amelyek hamarabb szállítottak valamit, de utána nehezebben
változtathatóvá tették a kódbázist, ugyanúgy, ahogy a pénzügyi adósság lehetővé teszi, hogy
most költs, később kamatot fizetve. Minden kódbázis hordoz némi technikai adósságot, és ez
nem automatikusan kudarc; a metafora valódi értéke az, hogy az adósságot kezelhető
kompromisszumként keretezi, nem szégyenletes titokként vagy elkerülhetetlen, állandó
tehertételként. Ez a téma azt szolgálja, hogy ezt a kompromisszumot méréssel láthatóvá és
kezelhetővé tegyük, ahelyett, hogy homályos, tartósan háttérbe szorított aggály maradna,
amelyet minden mérnök érez, de senki sem tud bizonyítékkal cselekedni rá.

A téma előtti témák, a bonyolultság (4.1), a lefedettség (4.2), a fluktuáció és a hotspotok
(4.3) és a statikus elemzés (4.4), a technikai adósság egy-egy oldalát hozzák felszínre. Ennek
a témának a feladata a szintézis: ezeket a különálló jeleket, plusz azokat a tételeket, amelyek
soha nem jelennek meg semmilyen automatikus vizsgálatban (egy dokumentálatlan építészeti
rövidítés, egy tudatosan elhalasztott migráció), egyetlen, rangsorolt, látható hátralékká
alakítani, amely tisztességesen versenyez a beruházásért a funkciómunkával szemben, ahelyett,
hogy alapértelmezésben elveszítené a versenyt, egyszerűen mert nincs hozzá metrika, és nincs
szószólója a tervezési megbeszéléseken.

Nagy csapatoknál a kezeletlen technikai adósság olyan módon halmozódik, amely valóban
veszélyes és könnyen alábecsülhető: minden új rövidítés kissé megnehezíti a következő
változtatást, ami nyomást teremt további rövidítésekre, ami tovább halmozódik. Az éveken át
rendszereket fenntartó nagyvállalatok és közszféra szervezetek különösen ki vannak téve ennek
a halmozódó hatásnak, és a téma központi ajánlása, a látható, számszerűsített, rangsorolt
adósság-hátralék az a mechanizmus, amely lehetővé teszi a szervezetnek, hogy valóban
tudatosan kezelje a kompromisszumot, ahelyett, hogy válságba sodródna.

## Alapelvek

- **A technikai adósság tudatos metafora egy kezelhető kompromisszumra, nem
  szégyenletes titok.** Némi tudatosan vállalt adósság ésszerű üzleti döntés.
- **A mérés nélküli adósság alapértelmezésben veszít a funkciómunkával szembeni
  rangsorolási versenyben,** nem azért, mert kevésbé számít, hanem mert nincs látható
  szószólója.
- **Számszerűsítsd az adósságot olyan fogalmakban, amelyeket a döntéshozók mérlegelni
  tudnak: a javítás költsége a hordozás költségével szemben.** A homályos „a kód
  zavaros” állítás ritkán versenyez jól egy konkrét funkciókéréssel.
- **Az adósság halmozódik.** Minden új rövidítés kissé megnehezíti a jövőbeli
  változtatásokat, és ez a hatás gyorsul, ha kezeletlen marad.
- **Nem minden adósságot kell törleszteni.** Némelyiket érdemes határozatlan ideig
  hordozni, ha a javítás költsége meghaladja az együttélés költségét.

## Ajánlások

### Építs látható, egyetlen technikai adósság-hátralékot

Vond össze a rész korábbi témáinak jeleit, a bonyolultsági kiugró értékeket, az alacsony
mutánsölési arányú területeket, a hotspotokat, a megoldatlan statikus elemzési
megállapításokat, azokkal az adósságtételekkel együtt, amelyeket csak ember tud
azonosítani (egy építészeti rövidítés, egy elhalasztott függőségfrissítés, egy
dokumentálatlan kerülőmegoldás), egyetlen látható hátralékká, amelyet ugyanazzal a
szigorral és láthatósággal követsz, mint a funkció-hátralékodat. Az az adósság, amely csak
az egyes mérnökök emlékezetében vagy szétszórt kódkommentekben él, rangsorolási
szempontból gyakorlatilag nem létezik.

### Számszerűsítsd minden adósságtétel költségét és hordozási költségét

Minden tételhez becsülj meg két számot: a javítás költségét (mérnöki idő, maga a javítás
kockázata) és a javítatlan hordozás költségét (mennyivel lassabban halad a kapcsolódó
munka, mekkora további hibakockázatot hordoz, mennyire blokkol más munkát). Ez a
keretezés, amely közvetlenül a pénzügyi adósság metaforájának saját logikájából származik,
valódi alapot ad a döntéshozóknak az összehasonlításra a funkciómunka költségével és
várható értékével, ahelyett, hogy elvont, számszerűsítetlen panasz lenne.

### Hatás alapján rangsorolj, ne kor vagy a leghangosabb szószóló alapján

Rangsorold az adósságtételeket a hordozási költségük és az érintett kód érintési
gyakorisága kombinációja szerint (a 4.3 téma fluktuációs adata közvetlenül hasznos itt):
egy tétel a kódbázis ritkán módosított sarkában, bármilyen kellemetlen is, sokkal kevésbé
számít, mint egy, amely közvetlenül a legaktívabb fejlesztésed útjában áll. Állj ellen
annak, hogy aszerint rangsorolj, melyik tétel van a legrégebben a hátralékon, vagy melyik
mérnök szószólja a legkitartóbban, és ezek egyike sem korrelál megbízhatóan a tényleges
üzleti hatással.

### Különíts el dedikált, védett kapacitást az adósság javítására

Az az adósság-hátralék, amelynek minden tervezési ciklusban tételenként kell versenyeznie
minden beérkező funkciókéréssel, következetesen veszít, mert a funkciómunkának általában
világosabb, azonnalibb üzleti bajnoka van. Különíts el a mérnöki kapacitás egy védett
százalékát, gyakori minta valahol 10% és 20% között, kifejezetten az adósság javítására,
előre eldöntve, nem sprintenként újratárgyalva, hogy az adósság törlesztése magától
értetődően történjen, ne csak egy válság nyomában.

### Fogadj el némi adósságot véglegesként, és mondd ki kifejezetten

Nem minden tétel tartozik aktív javítási tervbe. Ahol a javítás költsége valóban meghaladja
egy tétel határozatlan ideig hordozásának költségét, különösen egy stabil, ritkán érintett,
hamarosan kivezetendő rendszer kódjánál, dokumentáld ezt a döntést kifejezetten, és vidd át
a tételt tudatosan háttérbe szorított kategóriába, ahelyett, hogy határozatlan ideig egy aktív
hátralékon hagynád, ahol folyamatos jelenléte csendben olyan munkát sejtet, amely soha nem
fog megtörténni.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs formális adósságkövetés | Nincs többletteher | Az adósság alapértelmezésben veszít a rangsorolási versenyben; láthatatlanul halmozódik |
| Informális, ad hoc adósságtudatosság | Kis többletteher, némi láthatóság | Következetlen; az egyéni emlékezetre és szószólásra támaszkodik |
| Formális, számszerűsített adósság-hátralék | Tisztességesen versenyez a beruházásért; megalapozott kompromisszumokat tesz lehetővé | Folyamatos karbantartást és számszerűsítési fegyelmet igényel |
| Védett, dedikált javítási kapacitás | Biztosítja, hogy a törlesztés következetesen, nem csak reaktívan történik | Rövid távon csökkenti a funkciómunkára elérhető kapacitást |

A központi feszültség az **azonnali szállítási nyomás és a hosszú távú
karbantarthatóság között** húzódik. A funkciómunkának szinte mindig világosabb, azonnalibb
üzleti bajnoka van, mint az adósság javításának, ami szerkezeti nyomást teremt, hogy az
adósság minden egyes rangsorolási döntésben veszítsen, még akkor is, ha halmozott költsége
magas. A feszültséget úgy oldd fel, hogy az adósság javítását védett, előre elkülönített
kapacitással teljesen kiveszed a tételenkénti versenyből, hogy a kompromisszumot tudatosan
és előre döntsék el, ne vitassák újra, és általában veszítsék el minden egyes tervezési
ciklusban.

## Kérdések a csapattal való megbeszéléshez

1. **Van-e egyetlen, látható technikai adósság-hátralékunk, vagy az adósságtudatosság
   többnyire az egyes mérnökök fejében él?** Ha az őszinte válasz az utóbbi, ez az a
   legnagyobb hiány, amelynek bezárását a téma először ajánlja.

2. **A legfontosabb adósságtételünknél meg tudnánk-e adni a javítási és a hordozási
   költséget olyan pontossággal, hogy tisztességesen összevethessük egy funkciókéréssel?**
   Ha nem, gyakoroljátok együtt ezt a számszerűsítést csoportgyakorlatként egy valódi,
   aktuális tételen.

3. **A mérnöki kapacitásunk hány százaléka megy valójában az adósság javítására, és ezt
   a százalékot tudatosan döntöttük el, vagy az éppen az, ami a funkciómunka elosztása után
   megmarad?** Nézd meg a tényleges friss sprinteket, és számold ki a valódi számot, ne a
   benyomásra támaszkodj.

4. **Az adósság-hátralékunkat valódi üzleti hatás szerint rangsoroljuk, vagy aszerint,
   hogy melyik tételt hozták fel a legkitartóbban, vagy melyik áll ott a legrégebben?** Vesd
   össze a jelenlegi rangsorolást a fluktuációs adattal (4.3 téma), és nézd meg, hogy a
   kettő egyezik-e.

5. **Melyik adósságtételeket kellene kifejezetten véglegesként elfogadnunk, ahelyett, hogy
   határozatlan ideig egy aktív hátralékon állnának?** Azonosíts legalább egy valódi
   tételt, ahol a javítás költsége valóban meghaladja a hordozás költségét, és beszéljétek
   meg a kifejezetten háttérbe szorított státuszba helyezését.

6. **Hogyan változott az adósság-hátralékunk az elmúlt évben, nőtt, csökkent vagy
   változatlan maradt, és egyezik-e ez a trend az intuíciónkkal?** Kövesd ezt időben, ne
   csak egyetlen pillanatképet nézz; a trend gyakran informatívabb, mint az abszolút méret
   bármely adott pillanatban.

## Ágazati szemszög

**Startup.** A tudatos, megalapozott adósság ezen a szakaszon gyakran ésszerű stratégia:
gyorsan szállítani egy hipotézis validálására, világos tervvel, hogy konkrét rövidítésekhez
visszatérjünk, ha a termék beválik, jogos kompromisszum, nem kudarc. A kockázat az, hogy
elvész a követés arról, melyik rövidítések voltak tudatosak és visszafordíthatók, és melyek
váltak csendben állandó, át nem vizsgált kötelezettséggé, ahogy a kódbázis nő.

**Kisvállalkozás.** Egy egyszerű, közös lista, akár informális is, amely megnevezi az ismert
rövidítéseket és durva javítási költségüket, ekkora léptéknél általában elegendő. A fő
fegyelem, amelyet érdemes átvenni, hogy időnként újra átnézd a listát, ahelyett, hogy
hagynád csendben felhalmozódni és az ismerősség miatt láthatatlanná válni.

**Nagyvállalat.** A védett, előre elkülönített javítási kapacitás itt számít a legtöbbet, mert
az adósság és a funkciómunka közötti egyedi rangsorolási verseny megbízhatóan a
funkciókat részesíti előnyben tucatnyi csapatban egyszerre, szerkezeti ellensúly nélkül.
Szabványosítsd az adósság-számszerűsítési gyakorlatot szervezetszinten, hogy az adósságtételek
tisztességesen összehasonlíthatók legyenek a csapatok között a portfólió szintű
beruházási döntésekhez.

**Közszféra.** A hosszú életű rendszerek évek vagy évtizedek növekményes, egyenként
ésszerű követelményváltozásai során halmoznak fel adósságot, gyakran semmilyen formális
adósságkövetés nélkül, amíg egy válság ki nem kényszeríti a kérdést. A számszerűsített,
látható adósság-hátralék valóban meggyőző eszköz a modernizációs költségvetés
indoklására a felügyeleti szerveknek, mert a homályos „a rendszer régi” állítást konkrét,
költségvetett beruházási érvvé alakítja.

## Példák

**Nagyvállalat.** Egy távközlési cég számlázó platformján több mint egy évtizednyi
informálisan elismert, de soha formálisan nem követett technikai adósság halmozódott fel,
a mérnökök rutinszerűen azt idézték a retrospektíveken, hogy „a számlázómotor egy
katasztrófa”, de nem következett belőle semmi. Egy új mérnöki igazgató minden csapattól
megkövetelte, hogy építsen számszerűsített adósság-hátralékot, tételenként becsülve a
javítási és a hordozási költséget, és a mérnöki kapacitás fix 15%-át az adósság javítására
különítette el a továbbiakban. Egy éven belül a legmagasabb hordozási költségű öt tétel,
amelyek darabszám szerint a teljes hátralék kis hányadát képviselték, megoldódott, és a
számlázással kapcsolatos telepítések változtatási hibaaránya (2.10 téma) mérhetően
javult, bemutatva a legmagasabb hordozási költségű tételek először megcélzásának
aránytalan hatását ahelyett, hogy a hátralékot tetszőleges sorrendben dolgoznák fel.

**Közszféra.** Egy nemzeti statisztikai hivatal központi adatfeldolgozó rendszere,
amelyet eredetileg több mint húsz évvel korábban építettek, soha nem esett át formális
adósságértékelésen, annak ellenére, hogy a munkatársak körében széles körű informális
elismerés volt, hogy jelentős részei törékenyek és rosszul értettek. Egy strukturált
adósságértékelés, amely a statikus elemzési megállapításokat, a hotspot-adatot és az
interjúkat kombinálta a néhány megmaradt mérnökkel, akik a legrégebbi komponenseket értették,
számszerűsített, rangsorolt hátralékot állított elő, amely közvetlenül támogatott egy
többéves modernizációs költségvetési kérelmet. Kritikus, hogy az értékelés kifejezetten
azonosított több stabil, ritkán érintett örökölt komponenst is, amelyeket ésszerű
változatlanul hagyni, elkerülve egy szükségtelenül széles és drága teljes rendszer-újraírást
a konkrét területekbe történő célzott beruházás javára, amelyekről az adat kimutatta, hogy
a legmagasabb folyamatos költséget hordozzák.

## Üzleti érv: indítékok, ROI és TCO

A technikai adósság tudatos kezelésének megtérülése az elkerült halmozódó költség: minden
kezeletlen rövidítés kissé megnehezíti a jövőbeli változtatásokat, és ez a hatás
beavatkozás nélkül gyorsul, végül olyan törékeny kódbázist hozva létre, hogy még az
egyszerű változtatások is lassúvá és kockázatossá válnak. A fenti távközlési példa konkrétan
mutatja a megtérülést: a legmagasabb hordozási költségű tételek kis számának megcélzása
mérhető szállítási és minőségi javulást hozott, amely aránytalan volt ahhoz a szerény
hányadhoz képest, amelyet ezek a tételek a teljes hátralékból képviseltek.

A teljes birtoklási költség (TCO) a javításra elkülönített védett kapacitás, jellemzően a
mérnöki idő 10–20%-a, ami valódi, látható költség, amely rövid távon versenyez a
funkciósebességgel. Ezt a költséget érdemes megfizetni, mert az alternatíva, a kezeletlen,
halmozódó adósság, végül sokkal többe kerül lassult szállításban és megnövekedett
hibaarányban az egész kódbázison, nem csak a kezeletlenül hagyott konkrét tételeknél.

## Antiminták és buktatók

- **Nincs látható, követett adósság-hátralék:** az adósság alapértelmezésben veszít a
  rangsorolási versenyben, és láthatatlanul halmozódik.
- **Homályos, számszerűsítetlen adósságállítások:** ritkán versenyeznek jól a konkrét,
  számszerűsített funkciókérésekkel a tervezésben.
- **Az adósság rangsorolása kor vagy a szószólás hangereje, nem a hatás alapján:**
  félrevezeti a korlátozott javítási kapacitást.
- **Nincs védett kapacitás a javításra:** az adósság törlesztése csak reaktívan történik,
  válság után, nem rutinszerű, tudatos gyakorlatként.
- **Minden adósság egyformán javításra érdemesnek tekintése:** erőfeszítést pazarol az
  alacsony hatású tételekre, miközben a magas hordozási költségűek kezeletlenek maradnak.
- **Az adósság határozatlan ideig egy aktív hátralékon hagyása anélkül, hogy valaha
  eldöntenék, hogy végleges:** olyan jövőbeli munkát sejtet, amely soha nem fog megtörténni,
  és összezavarja a valódi rangsorolást.

## Érettségi modell

- **1. szint, Kezdeti:** A technikai adósságról informálisan beszélnek, követett
  hátralék és számszerűsítés nélkül; következetesen veszít a funkciómunkával szemben.
- **2. szint, Fejlődő:** Néhány csapat informálisan követi az adósságot, de nincs
  következetes számszerűsítés, csapatok közötti láthatóság vagy védett javítási
  kapacitás.
- **3. szint, Szabványosított:** Látható, számszerűsített adósság-hátralék létezik
  szervezetszinten, védett javítási kapacitással, következetesen elkülönítve.
- **4. szint, Irányított:** Az adósságtételeket mért hatás szerint (hordozási költség a
  fluktuációval kombinálva) rangsorolják, és a véglegesen elfogadott adósságot kifejezetten
  dokumentálják, nem hagyják kétértelműen.
- **5. szint, Összehangolt:** A szervezet rá tud mutatni konkrét, mérhető szállítási vagy
  minőségi javulásokra, amelyek a célzott adósságjavításra vezethetők vissza, és az
  adósságkezelés rutinszerű, megbízható bemenete a mérnöki beruházási döntéseknek a
  funkciómunka mellett.

## Ötletek a vitához

1. Melyik a jelenleg legmagasabb hordozási költségű adósságtételünk, és tudnánk-e számszerűsíteni?
2. A kapacitásunk hány százaléka megy ma ténylegesen az adósság javítására?
3. Melyik adósságtételt kellene kifejezetten véglegesként elfogadnunk ahelyett, hogy kétértelműen a hátralékunkon hagynánk?
4. Nőtt, csökkent vagy változatlan maradt az adósság-hátralékunk az elmúlt évben?
5. Mit tárna fel egy számszerűsített adósságértékelés, amit a jelenlegi informális tudatosságunk elmulaszt?

## A legfontosabb tanulságok

- A technikai adósság **kezelhető kompromisszum, nem szégyenletes titok**; számszerűsítsd,
  ahelyett, hogy homályos, tartósan háttérbe szorított aggály maradna.
- **Számszerűsítsd a javítás költségét a hordozás költségével szemben** minden tételnél,
  hogy tisztességesen versenyezzen a funkciómunkával.
- **Hatás alapján rangsorolj** (hordozási költség a fluktuációval kombinálva), ne kor vagy a
  szószólás hangereje alapján.
- Különíts el **védett, dedikált javítási kapacitást**, előre eldöntve, mert az adósság
  máskülönben megbízhatóan veszít a tételenkénti versenyben a funkciómunkával szemben.
- **Fogadj el némi adósságot kifejezetten véglegesként,** ahol a javítás költsége
  meghaladja a hordozás költségét, ahelyett, hogy kétértelműen egy aktív hátralékon hagynád.

## Források és ajánlott olvasmányok

- Cunningham, Ward, "The WyCash Portfolio Management System" (OOPSLA
  tapasztalati beszámoló, 1992): a technikai adósság metafora eredete.
- *Managing Technical Debt: Reducing Friction in Software Development*, Philippe
  Kruchten, Robert Nord és Ipek Ozkaya műve (átfogó tárgyalás a technikai adósság
  méréséről és kezeléséről).
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler műve (a
  javítási technikák, amelyekre egy adósság-hátralék végső soron támaszkodik).
- *Your Code as a Crime Scene*, Adam Tornhill műve (a hotspot-elemzés mint az
  adósság-rangsorolás bemenete, 4.3 téma).
