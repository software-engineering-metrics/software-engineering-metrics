# 2.9 Pull request- és kódáttekintési metrikák

## Áttekintés és indíték

A [kódáttekintés](https://en.wikipedia.org/wiki/Code_review) általában a 2.6 téma
ciklusidő-felbontásán belül a legnagyobb egyedi várakozásiidő-tényező, és egyben az a
szakasz, amelyet a legközvetlenebbül a csapat saját kezében van javítani, a közös
platform szűk keresztmetszetével vagy külső függőséggel ellentétben. Ez a téma
azokat a konkrét metrikákat tárgyalja, amelyek az áttekintési szakaszon belül élnek:
az első áttekintésig eltelt idő, a pull request mérete, az áttekintési iterációk
száma és az áttekintők terheléseloszlása, és azt, hogyan használjuk őket az
áttekintési sebesség javítására anélkül, hogy feláldoznánk azt a tényleges minőségi
előnyt, amelyet az áttekintésnek nyújtania kell.

A kockázat, amelyre ez a téma a leginkább figyel, olyasmi, amit a könyv még nem
tárgyalt közvetlenül: az áttekintési sebesség optimalizálása csendben erodálhatja az
áttekintés minőségét, ha gondatlanul űzik. Az a csapat, amely úgy felezi meg az első
áttekintésig eltelt időt, hogy mindent gumibélyegzővel jóváhagy, javított egy
metrikát, miközben a gyakorlat tényleges értékét megsemmisítette. A téma minden
ajánlása ezt a kompromisszumot szem előtt tartva íródott, mert a pull request-metrikák
a könyv legkönnyebben kijátszható metrikái közé tartoznak olyan módon, amely jól néz ki
egy dashboardon, miközben mérhetően rosszabbá teszi a mögöttes kódbázist.

A nagy csapatoknál az áttekintési metrikák olyan terheléselosztási problémákat tárnak
fel, amelyek egyébként láthatatlanok: néhány senior mérnök az áttekintési terhelés
aránytalan részét nyeli el, egy konkrét csapat vagy kódbázis-terület, ahol az
áttekintések következetesen elakadnak, vagy olyan túlméretezett pull requestek
mintája, amelyek az áttekintő szorgalmától függetlenül gyakorlatilag lehetetlenné
teszik az alapos áttekintést. Ezek a minták léptéken sokkal jobban halmozódnak, mint
egy kis csapatban, ahol mindenki közvetlenül látja az egyensúlytalanságot anélkül, hogy
metrika kellene a felszínre hozásához.

## Alapelvek

- **Az első áttekintésig eltelt idő általában a legnagyobb emelő, nem maga az
  áttekintés alapossága.** A késés nagy része abból ered, hogy egy pull request arra
  vár, hogy ránézzenek, nem abból, hogy az áttekintési beszélgetés sokáig tart,
  amint elkezdődik.
- **A kisebb pull requesteket nem csak gyorsabban, hanem alaposabban is áttekintik.**
  A méret egyszerre emelő a sebességhez és a minőséghez.
- **Az áttekintési sebesség és az áttekintési minőség nem automatikusan feszül
  egymásnak, de gondatlanul felcserélhetők.** Védekezz ez ellen kifejezetten.
- **Az áttekintői terhelés egyensúlytalansága gyakori, és metrika nélkül általában
  láthatatlan.** Kevés ember gyakran az arányos résznél többet nyel el.
- **Ezeket a metrikákat a gumibélyegzős kijátszás kockázata fenyegeti.** A valódi
  vizsgálat nélküli gyors jóváhagyás az áttekintés egész célját meghiúsítja.

## Ajánlások

### Az első áttekintésig eltelt időt kövesd elsődleges sebességmetrikaként

Mérd meg az időt attól, hogy egy pull requestet megnyitnak, az áttekintő első érdemi
megjegyzéséig vagy jóváhagyásáig, automatikusan műszerezve a verziókezelő
platformodból. Ez általában a domináns várakozásiidő-tényező az áttekintési szakaszon
belül (2.5 téma, 2.6 téma), és javítása, világosabb áttekintés-kijelölési normákkal,
értesítési gyakorlatokkal vagy dedikált áttekintési időblokkokkal, általában a
legnagyobb egyedi javulást hozza az általános ciklusidőben, amely egy csapat számára
elérhető.

### Kövesd a pull request méretét, és aktívan bátorítsd a kisebb változtatásokat

Mérd a pull requestenként módosított sorokat vagy érintett fájlokat, és kezeld a tartósan
nagy mediánméretet közvetlenül kezelendő jelként. A kisebb pull requesteket
gyorsabban és alaposabban tekintik át (az áttekintő valóban a fejében tarthatja az
egész változtatást), és könnyebb őket visszavonni, ha valami elromlik, ez közvetlenül
visszakapcsolódik a 2.10 téma telepítési gyakorisága mögötti kötegméret-elvhez.
Bátorítsd a nagy változtatások egymást követő, önállóan áttekinthető kisebb pull
requestekre bontását, ahol a munka engedi.

### Kifejezetten figyeld az áttekintői terheléseloszlást

Kövesd az egy főre jutó befejezett áttekintések számát gördülő ablakon, és
kifejezetten arra figyelj, hogy kevés ember az arányos résznél nagyobb részt nyel-e
el. Ez a minta gyakori, gyakran a legtapasztaltabb vagy leginkább megbízható
mérnökökre hárul, és szűk keresztmetszetet (az elérhetőségük a teljes csapat
áttekintési átbocsátását korlátozza) és kiégési kockázatot is teremt (a 3.2 téma a
jóllétmetrikákat mélyebben tárgyalja). Rotáld tudatosan az áttekintési felelősséget,
ahelyett hogy alapértelmezés szerint a leggyorsabban válaszoló körül koncentrálódna.

### Kifejezetten védekezz a gumibélyegzős kijátszás kockázata ellen

Párosítsd az első áttekintésig eltelt időt minőségjellel: azoknak a hibáknak vagy
incidenseknek az aránya, amelyek nulla áttekintési megjegyzéssel jóváhagyott
változtatásokra vezethetők vissza, vagy a nemrég áttekintett kódhoz szükséges
merge utáni javítások aránya. Az a csapat, amely az áttekintési sebességet valódi
vizsgálat nélküli jóváhagyással javítja, ennek a védőkorlátnak a romlását fogja látni,
és ez pontosan az 1.2 téma párosítási elve erre a konkrét metrikacsaládra
alkalmazva. Soha ne kergesd az áttekintési sebességet ennek az ellenmetrikának a
szem előtt tartása nélkül.

### Használd az áttekintési iterációk számát a súrlódás észrevételére, ne egyének megítélésére

Az áttekintési körök száma, amelyen egy pull request a merge előtt átmegy, valódi
súrlódást jelezhet, tisztázatlan követelményeket, a megközelítésről szóló vitát,
következetlen stíluselvárásokat, amelyeket érdemes folyamatszinten vizsgálni.
Kerüld ennek a számnak az egyes szerzők vagy áttekintők közvetlen megítélésére
használatát; a magas iterációszám gyakrabban rendszer- vagy kommunikációs jel, mint
személyes, és az egyéni eredménykártyaként kezelése éppen azt az értékelő sodródást
kockáztatja, amelytől az 1.1 téma óv.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Tisztán az első áttekintésig eltelt időre optimalizálás | Gyors, világos jel, könnyű műszerezni | Felületes, gumibélyegzős áttekintésre ösztönözhet, ha nincs védve |
| Tisztán a pull request méretének csökkentésére optimalizálás | Egyszerre javítja a sebességet és az alaposságot | Nem minden munka bontható tisztán kis lépésekre |
| Az áttekintési terhelés egyenletes rotálása | Csökkenti a szűk keresztmetszet és a kiégés kockázatát | Lassíthatja a speciális, nehezen áttekinthető, konkrét szakértelmet igénylő kód áttekintését |
| Az áttekintés koncentrálása a senior mérnököknél | Mély szakterületi szakértelem következetes alkalmazása | Idővel szűk keresztmetszetet és kiégési kockázatot teremt |

A központi feszültség a **sebesség és a vizsgálat mélysége** között áll fenn. A téma
minden technikája az áttekintés felgyorsítására, gyorsabb első válasz, kisebb pull
requestek, elosztottabb áttekintői terhelés, azzal a kockázattal jár, hogy valódi
vizsgálatot cserélünk le, ha a téma által ajánlott minőségi védőkorlát nélkül űzik.
Úgy oldd fel a feszültséget, hogy minden sebességmetrikát párosítasz egy ugyanabban az
időszakban követett minőségjellel, hogy a csapat meg tudja különböztetni a valódi
folyamatjavulást a csendben erodálódó áttekintési színvonaltól.

## Kérdések a csapattal való megbeszéléshez

1. **Mi a tényleges első áttekintésig eltelt időnk, és az általános ciklusidőnk
   mekkora részét emészti fel az áttekintési szakasz?** Húzd elő a valódi számot a
   benyomás helyett; az áttekintési várakozási idő gyakran nagyobb, mint a csapatok
   feltételezik, éppen mert könnyű alábecsülni a várakozással, nem az aktív munkával
   töltött időt.

2. **Mi a medián pull request-méretünk, és az áttekintési késésünk mekkora része
   zsugorodna, ha ez a méret lejjebb menne?** A nagy pull requesteket lassabb
   áttekinteni, és nagyobb valószínűséggel kapnak felületes áttekintést, egyszerűen mert
   az áttekintő nem tudja egyszerre a fejében tartani az egészet. Nézd meg a tényleges
   méreteloszlásodat, ne csak a mediánt.

3. **Az áttekintési terhelés kevés emberre koncentrálódik, és mi történne az
   áttekintési átbocsátásunkkal, ha egyikük két hétig nem lenne elérhető?** Ez a
   kérdés egyszerre hozza felszínre a szűk keresztmetszet és a kiégés kockázatát.
   Húzd elő a tényleges áttekintői terhelési adatokat a benyomás helyett.

4. **Javítottunk-e valaha áttekintési sebességmetrikát úgy, hogy az, visszatekintve,
   csökkentette a tényleges vizsgálatot?** Légy őszinte; ez éppen a téma által
   megnevezett gumibélyegzős kockázat, és könnyű belecsúszni anélkül, hogy bárki
   szándékosan így döntene.

5. **Mit jelez általában a magas áttekintési iterációszám a csapatunknál: valódi
   nézeteltérést, tisztázatlan követelményeket vagy következetlen
   stíluselvárásokat?** Nézz meg egy mintát a szokatlanul magas iterációszámú pull
   requestekből, és diagnosztizáld a tényleges mintát, ahelyett hogy feltételeznéd, hogy
   az rossz fényt vet a szerzőre vagy az áttekintőre.

6. **Van minőségi védőkorlátunk az áttekintési sebességmetrikáink mellé párosítva,
   vagy a sebességet elszigetelten követjük?** Ha az őszinte válasz az, hogy nincs
   ilyen védőkorlát, érdemes lezárni ezt a hiányt, mielőtt tovább erőltetnénk az
   áttekintési sebességet, az 1.2 téma párosítási elve szerint.

## Ágazati szemszög

**Startup.** Az áttekintés kis csapatnál gyakran alapértelmezetten gyors, néha
majdnem túl gyors, egyetlen jóváhagyós áttekintés minimális vizsgálattal, mert
mindenki megbízik mindenkiben. A kockázat, amelyre a csapat növekedésével figyelni kell,
az, hogy az áttekintés minősége nem skálázódik a csapatmérettel, mert az informális
bizalom, amely öt mérnöknél működött, nem működik automatikusan ötvennél.

**Kisvállalkozás.** A legtöbb verziókezelő platform a merge-ig eltelt időt és az
áttekintésszám-statisztikát készen jelenti; használd ezeket egyedi műszerezés helyett.
A fő fegyelem, amelyet érdemes bevezetni, egyszerűen annak észrevétele, hogy az
áttekintési terhelés a csapat növekedésével csendben egy-két emberre koncentrálódott-e.

**Nagyvállalat.** Az áttekintői terhelés egyensúlytalansága és a speciális tudás
szűk keresztmetszetei itt különösen gyakoriak, ahol egy kritikus rendszer mély
szakterületi szakértelme a csapatmérettől függetlenül kis csoportra koncentrálhatja az
áttekintési felelősséget. Fektess tudatos tudásmegosztásba és áttekintési rotációba a
szakértelem szétterjesztésére, csökkentve mind a szűk keresztmetszetet, mind annak a
busz-faktor kockázatát, hogy a szakértelem túl kevés emberben él.

**Közszféra.** Az áttekintési folyamatok itt gyakran a minőségi célok mellett
megfelelőségi súlyt is hordoznak, ami a pull requesteket nagyobbá és az áttekintéseket
tervezetten lassabbá teheti. Ahol a valódi megfelelőségi követelmények alapos
áttekintést kívánnak, a fejlesztési erőfeszítést a várakozási idő csökkentésére
összpontosítsd (gyorsabb áttekintés-kijelölés, világosabb osztályozás), ne az
áttekintés tényleges mélységének kompromittálására, és dokumentáld kifejezetten a
kompromisszumot, ha a vizsgálatnak szabályozási okokból erősnek kell maradnia.

## Példák

**Nagyvállalat.** Egy kiberbiztonsági cég mérnöki szervezete megállapította, hogy egy
maroknyi vezető mérnök egy kétszáz fős szervezetben az összes kódáttekintés több mint
40%-át végezte, ezt az egyensúlytalanságot senki nem mérte közvetlenül, amíg az
áttekintői terhelési adatokat elő nem húzták. Ez a koncentráció egyszerre volt szűk
keresztmetszet, mert ezeknek a mérnököknek az elérhetősége az egész szervezet
áttekintési átbocsátását korlátozta, és kiégési kockázat, amelyet külön egy
elkötelezettségi felmérés is jelzett (3.2 téma). A szervezet strukturált
áttekintési rotációs programot vezetett be célzott tudásmegosztó alkalmakkal párosítva,
és két negyedéven belül az áttekintési terhelés sokkal szélesebb csoportra oszlott
el, az első áttekintésig eltelt idő pedig a csökkent szűk keresztmetszet közvetlen
mellékhatásaként javult.

**Közszféra.** Egy adóhatóság mérnöki csapata a szállítási sebesség javítására irányuló
nyomás alatt azt a célt tűzte ki, hogy megfelezi az első áttekintésig eltelt időt.
Egy negyedéven belül a célt elérték, de egy későbbi minőségi audit a merge utáni
hibajavító pull requestek meredek emelkedését találta, azokra a változtatásokra
koncentrálva, amelyeket egyetlen, rövid megjegyzéssel hagytak jóvá. A csapat
megoldása a sebességi célt kifejezett minőségi védőkorláttal párosította, az
áttekintést követő két héten belül szükséges merge utáni javítások arányával, és újra
kiképezte a csapatot arra, mit igényel valójában az érdemi áttekintés, visszaállítva a
valódi vizsgálatot, miközben megőrizte a sebességjavulás nagy részét, amely a jobb
áttekintés-kijelölésből és a kisebb pull request-méretekből származott.

## Üzleti érv: indítékok, ROI és TCO

A jól kezelt áttekintési metrikák megtérülése a gyorsabb szállítás a minőség
feláldozása nélkül, ami ritka kombináció: a legtöbb szállítási javulás valahol a
sebességet kockázatra cseréli, de az áttekintési szakasz javításai, kisebb pull
requestek, jobb terheléseloszlás, gyorsabb első válasz, valóban mindkettőt javítják
egyszerre, ha a téma által ajánlott minőségi védőkorláttal űzik őket. A fenti
kiberbiztonsági példa tipikus: egy szűk keresztmetszet javítása a sebességet javította,
míg a mögöttes áttekintési minőség, ha valami, javult, ahogy a szakértelem szélesebben
terjedt.

A teljes birtoklási költség alacsony: ezeknek a metrikáknak a legtöbbje közvetlenül a
meglévő verziókezelő platform adataiból származik minimális további műszerezéssel, és
a folyamatváltozások, amelyekre mutatnak, az áttekintési rotáció, a kisebb pull
requestek bátorítása, többnyire fegyelembe, nem eszközbefektetésbe kerülnek.

## Antiminták és buktatók

- **Az első áttekintésig eltelt idő optimalizálása párosított minőségi védőkorlát
  nélkül:** gumibélyegzős jóváhagyásra ösztönöz, amely meghiúsítja az áttekintés
  célját.
- **Az áttekintői terheléskoncentráció figyelmen kívül hagyása:** szűk keresztmetszetet
  és kiégési kockázatot teremt, amely láthatatlan marad, amíg meg nem mérik.
- **Az áttekintési iterációszám egyéni eredménykártyaként kezelése:** gyakrabban
  rendszer- vagy kommunikációs jel, mint személyes.
- **A tartósan nagy pull requestek elkerülhetetlenként elfogadása:** a legtöbb nagy
  változtatás tovább bontható, mint amennyire a csapatok kezdetben feltételezik.
- **Egységes áttekintési mélység alkalmazása a változtatás kockázatától függetlenül:**
  vizsgálatot pazarol a kis kockázatú változtatásokra, miközben esetleg alulvizsgálja a
  nagy kockázatúakat.
- **Az áttekintési sebesség mérése, de annak soha nem ellenőrzése, hogy a valódi
  vizsgálat vele együtt csökkent-e:** a leggyakoribb módja annak, hogy ezt a
  metrikacsaládot akaratlanul kijátsszák.

## Érettségi modell

- **1. szint, Kezdeti:** Az áttekintési metrikákat nem követik; az áttekintési
  terheléseloszlás és a pull request mérete láthatatlan.
- **2. szint, Fejlődő:** Létezik némi áttekintési sebességi adat a platform
  alapértelmezéseiből, de nincs minőségi védőkorlát és az áttekintői terhelés aktív
  kezelése.
- **3. szint, Szabványosított:** Az első áttekintésig eltelt időt, a pull request
  méretét és az áttekintői terhelést következetesen követik, kifejezett minőségi
  védőkorláttal párosítva a sebességi javulásokhoz.
- **4. szint, Irányított:** Az áttekintői terhelést rotációval és tudásmegosztással
  aktívan újraegyensúlyozzák; az iterációszám-mintákat folyamatszinten vizsgálják, nem
  egyéni szinten.
- **5. szint, Összehangolt:** Az áttekintési szakasz metrikái közvetlenül megalapozzák a
  folyamatberuházást, és a szervezet fenntartott időszakon át be tudja mutatni az
  áttekintési sebesség és az áttekintéshez kötött minőségi eredmények egyidejű
  javulását.

## Ötletek a vitához

1. Mi a jelenlegi medián első áttekintésig eltelt időnk, és hová megy valójában ez az idő?
2. Az áttekintési terhelésünk kevés emberre koncentrálódik, és mi a kockázat, ha egyikük nem elérhető?
3. Javítottunk-e valaha áttekintési sebességet a valódi vizsgálat rovására, akár akaratlanul is?
4. Mi a medián pull request-méretünk, és mennyivel lehetne reálisan kisebb a legtöbb változtatás?
5. A magas áttekintési iterációszámot rendszerjelként vagy egyéni ítéletként kezeljük?

## A legfontosabb tanulságok

- Az **első áttekintésig eltelt idő** általában a legnagyobb egyedi emelő az
  áttekintési szakaszon belül, több, mint maga az áttekintési beszélgetés hossza.
- A **kisebb pull requestek** egyszerre javítják az áttekintés sebességét és
  alaposságát.
- Az **áttekintői terhelés egyensúlytalansága** gyakori, és közvetlen mérés nélkül
  általában láthatatlan; szűk keresztmetszetet és kiégési kockázatot is teremt.
- Párosíts minden áttekintési sebességmetrikát kifejezett **minőségi védőkorláttal**,
  hogy elkapd a gumibélyegzős kijátszás kockázatát, amelyre ez a metrikacsalád
  különösen hajlamos.
- Használd az **áttekintési iterációszámot** a rendszerszintű súrlódás
  diagnosztizálására, ne az egyes szerzők vagy áttekintők megítélésére.

## Források és ajánlott olvasmányok

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble és Gene Kim (kódáttekintési gyakorlatok és kapcsolatuk a szállítási
  teljesítménnyel).
- Alberto Bacchelli és Christian Bird *Modern Code Review* kutatása (a kódáttekintési
  gyakorlatok empirikus vizsgálata léptéken).
- *Peer Reviews in Software: A Practical Guide*, Karl E. Wiegers (áttekintési
  folyamat tervezése és kompromisszumai).
- *The Principles of Product Development Flow*, Donald G. Reinertsen
  (kötegméret-gondolkodás a pull request-méretezésre alkalmazva).
