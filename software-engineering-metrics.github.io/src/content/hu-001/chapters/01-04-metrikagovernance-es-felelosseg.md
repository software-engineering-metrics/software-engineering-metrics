# 1.4 Metrikagovernance és felelősség

## Áttekintés és indíték

A gazdátlan metrika egy állandó vita, amely csak arra vár, hogy kitörjön. Két
csapat másképp számolja az „aktív felhasználókat", és egy megbeszélést a
számok egyeztetésével tölt a trend kezelése helyett; egy dashboard-csempe,
amelyet senki nem gondoz, hónapokig csendben elavul, mielőtt bárki észrevenné;
az egyik csapat diagnózisára épített metrikát egy másik csapat olyan célra
veszi át, amelyet az eredeti definíció soha nem arra tervezett. Ezek egyike
sem mérési probléma statisztikai értelemben. Governance-probléma, és ugyanazzal
a fegyelemmel oldható meg, amelyet a szervezetek már a kódra alkalmaznak:
kifejezett felelősség, dokumentált [egyetlen igazságforrás](https://en.wikipedia.org/wiki/Single_source_of_truth)
és felülvizsgálati folyamat.

A governance nem öncélú bürokrácia. Az teszi lehetővé, hogy egy metrikaprogram
túlélje a szervezeti léptékkel való találkozást. Egyetlen csapat a metrikák
definícióit valakinek a fejében tarthatja, és a sodródást napi beszélgetéssel
korrigálhatja. Egy tucatnyi csapatot számláló szervezet, ahol mindenki metrikákat
állít elő és használ, nem tudja. Governance nélkül a definíciók csendben
sodródnak, a metrikák szaporodnak anélkül, hogy bárki metszené őket, és mire
a vezetés észreveszi, hogy két jelentés nem egyezik, a kiegyeztetés ára már
sokszorosan megfizetődött elpazarolt megbeszélésekben és megkopott bizalomban.

A nagyvállalatoknál és a közszféra szervezeteinél a governance további súlyt
hordoz, mert a metrikák egyre inkább valódi következményű döntéseket táplálnak,
költségvetési elosztást, nyilvános teljesítményjelentést, szállítói szerződéseket,
amelyek túlélik bármely egyetlen embert, aki az eredeti dashboardot építette. Az a
metrikacharta, amely túléli a személyzeti fluktuációt, amelyet bármely új
csapattag elolvashat és megérthet, az tartja a szervezet számait ugyanazt
jelentőnek öt év múlva, mint ma.

## Alapelvek

- **Minden metrikának pontosan egy felelőse van.** A megosztott felelősség nem
  felelősség; ha mindenki birtokol egy definíciót, senki nem tartja karban.
- **A metrikának egyetlen igazságforrása van.** Ha két rendszer ugyanazt a
  metrikát másképp számolja, az egy governance-hiba, amely csak arra vár,
  hogy felszínre törjön.
- **A governance le van írva, nem szájhagyomány.** A csak valakinek az
  emlékezetében élő metrikacharta nem éli túl az illető távozását.
- **A kivezetés ugyanolyan fontos, mint a bevezetés.** Az egészséges
  metrikaprogram ugyanolyan tudatosan metsz, ahogy nő.
- **A governance a következménnyel skálázódik, nem a metrikák számával.** Az a
  metrika, amely nyilvános jelentést táplál, nehezebb governance-t igényel,
  mint az, amelyet egyetlen csapat a saját sprintjének hibakeresésére használ.

## Ajánlások

### Írj metrikachartát minden olyan metrikakészlethez, amely átlépi a csapathatárt

A **metrikacharta** egy rövid, élő dokumentum, amely kimondja a metrikakészlet
célját, a kifejezett nem céljait (az 1.1 téma diagnosztikai és értékelő használat
közti különbsége ide tartozik), az egyes metrikák felelősét és igazságforrását,
valamint a felülvizsgálati ritmust. Tartsd egy oldalon. A docs/examples/metrics-charter-example.md
fájl a könyv kísérő tárolójában megmutatja az alakját. Az ilyen rövid chartát
elolvassák; azt, amely szabályzati dokumentummá burjánzik, nem.

### Rendelj minden metrikához megnevezett felelőst, ne csapatot

A „a platformcsapat birtokolja ezt a metrikát" addig hígítja a felelősséget,
amíg senki nem tartja karban valójában. Nevezz meg egy személyt vagy egy
konkrét, elszámoltatható szerepkört. Ez a felelős viseli a felelősséget azért,
hogy a metrika definíciója pontos maradjon, a műszerezése egészséges, és hogy
válaszoljon a „miért tűnik rossznak ez a szám" kérdésre, amikor az
elkerülhetetlenül felmerül. A felelősség rotálhat és rotálnia is kell, ahogy
az emberek szerepet váltanak, de a chartának mindig meg kell neveznie a
jelenlegi felelőst, soha nem hagyhatja üresen a mezőt.

### Állíts fel metrikánként egy igazságforrást, és tiltsd a párhuzamos számítást

Amikor két rendszer ugyanazt a névleg azonos nevű metrikát másképp számolja,
például az egyik csapat „aktív felhasználói" a bejelentkezéseket, a másiké az
API-hívásokat számolják, az ebből adódó eltérés sokkal többe kerül
egyeztető megbeszélésekben, mint amennyibe az kerülne, ha előre megegyeznének
egyetlen igazságforrásban. Nevezd meg a chartában az egyes metrikák
mérvadó rendszerét, és ugyanazon metrika bármely más számítását kezeld vagy
javítandó hibaként, vagy másképp elnevezendő metrikaként.

### Építs kivezetési felülvizsgálatot a governance ritmusába

Az a metrikaprogram, amely csak hozzáad metrikákat, olyan dashboard-burjánzást
halmoz fel, amellyel senki nem tud mit kezdeni (1.1 téma). Minden governance
felülvizsgálaton, az új metrikák javaslata mellett, kérdezd meg, melyik meglévő
nem alapozott meg döntést az elmúlt két ciklusban, és jelölt-e a kivezetésre. A
kivezetés nem kudarc; ugyanaz a fegyelem, amelyet egy egészséges kódbázis a holt
kódra alkalmaz.

### A governance szigorát a következményhez igazítsd, ne a mennyiséghez

Nem minden metrikához kell ugyanaz a folyamat. Az a metrika, amelyet egyetlen
csapat talál ki a saját sprintjének hibakeresésére, szinte semmilyen governance-t
nem igényel azon túl, hogy a csapat tudja, mit jelent. Az a metrika, amely
vezetői eredménykártyát, nyilvános teljesítményjelentést vagy egyéni
javadalmazást táplál, dokumentált definíciót, megnevezett felelőst,
nyomvonalat és jóváhagyást igényel, mielőtt élesbe megy. A folyamat súlyát
ahhoz igazítsd, mekkora következménye van a metrika tévedésének, ne ahhoz,
hány metrika létezik.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs formális governance | Gyors, kis többletteher kis csapatoknak | A definíciók sodródnak; a felelősség szétoszlik; a dashboardok ellenőrizetlenül burjánzanak |
| Könnyű charta metrikakészletenként | Olcsó, olvasható, a szervezettel skálázódik | Fegyelmet igényel a naprakészen tartása; határidő-nyomás alatt kihagyható |
| Nehézkes központi metrika-governance testület | Erős következetesség, erős nyomvonal | Lassan hagy jóvá új metrikákat; szűk keresztmetszetté válhat, amelyet a csapatok megkerülnek |
| A következményhez igazított governance | Az erőfeszítést a tényleges kockázathoz illeszti | Ítélőképességet igényel a következmény helyes besorolásához; kijátszható a tét alulbecslésével |

A központi feszültség a **következetesség és a sebesség** között áll fenn. A
nehézkes központi governance megbízható, következetes metrikákat hoz létre, de
lelassítja a csapatot éppen akkor, amikor valamit gyorsan akar műszerezni egy
sürgős kérdés megválaszolásához. Úgy oldd fel a feszültséget, hogy a governance
súlyát a következményhez igazítod: engedd, hogy a csapatok szabadon
műszerezzenek a saját diagnosztikai használatukra, és a teljes charta, felelősség
és jóváhagyási fegyelem csak akkor legyen kötelező, amikor a metrika átlépi a
csapathatárt, vagy értékelő vagy nyilvános használatot táplál.

## Kérdések a csapattal való megbeszéléshez

1. **Minden csapathatárt átlépő metrikának van megnevezett felelőse, és az a
   felelős felismerné-e magát elszámoltathatóként, ha ma megkérdeznék?** A „a
   platformcsapat birtokolja" nem válasz; egy konkrét személy vagy szerepkör
   az. Auditáld a csapatok közötti metrikáidat, és ellenőrizd, hogy a
   megnevezett felelős, ha egyáltalán van, tudja-e, hogy ez a felelősség az övé.

2. **Hol számoljuk ma ugyanazt a névleg azonos nevű metrikát két különböző
   módon, és mennyi időt töltöttünk az eltérés egyeztetésével?** Ez a nagy
   szervezetek egyik legdrágább és leggyakoribb governance-hibája, és teljesen
   megelőzhető dokumentált egyetlen igazságforrással. Hozz egy valódi példát, ha
   van, és kövesd nyomon a költségét.

3. **Mikor vezettünk ki utoljára metrikát, és mi váltotta ki a döntést?** Az a
   szervezet, amely csak azt tudja leírni, hogyan ad hozzá metrikákat, azt nem,
   hogyan távolítja el őket, dashboard-adósságot halmoz fel. Ha nem emlékszel
   kivezetésre, ez a hiány maga a válasz erre a kérdésre.

4. **A governance-folyamatunk arányos a következménnyel, vagy minden metrika
   ugyanolyan súlyú felülvizsgálaton esik át a tét függetlenül?** A kis téttel
   bíró csapatmetrikán a túlzottan nehézkes governance biztonsági haszon nélkül
   lassítja a munkát; a nyilvános jelentést vagy javadalmazási döntést tápláló
   metrikán a túlzottan könnyű governance valódi kockázat. Térképezd fel a
   jelenlegi metrikáidat következmény szerint, és őszintén ellenőrizd hozzá a
   folyamat súlyát.

5. **Mi történik egy metrika felelősségével, amikor az, aki építette,
   szerepet vált vagy távozik?** Az a metrikacharta, amely csak egy ember
   fejében létezik, vele együtt eltűnik. Próbáld ki: válassz egy metrikát, és
   kérdezd meg, hogy egy új munkatárs pusztán írásos dokumentációból megérthetné-e
   a definícióját, igazságforrását és célját.

6. **Honnan tudnánk, hogy egy metrika definíciója csendben megváltozott?** A
   szám számítási módjának megváltoztatása a neve megváltoztatása vagy az
   előzményeiben szereplő jegyzet nélkül szinte láthatatlan addig, amíg valaki
   össze nem hasonlítja a régi és az új adatokat, és meg nem talál egy
   megmagyarázhatatlan szakadást. Beszéljétek meg, hordoznak-e a metrikáitok
   ma bármilyen változásnaplót.

## Ágazati szemszög

**Startup.** A formális governance általában túlzás egy ötfős csapatnál, ahol
mindenki tudja, mit jelent minden szám. Az az egy fegyelem, amelyet mégis
érdemes korán bevezetni, hogy metrikánként írásban megnevezünk egyetlen
felelőst, mert szinte semmibe nem kerül, és megelőzi a zavart, amikor az első
néhány új munkatárs csatlakozik, és elkezdi kérdezni, mit jelent egy szám.

**Kisvállalkozás.** A governance itt többnyire azt jelenti, hogy minden
metrikához kiválasztunk, és kitartunk mellette, egyetlen eszközt igazságforrásnak,
ahelyett hogy hagynánk, hogy a táblázatok és egy platform beépített dashboardja
csendben eltérjenek. Írd meg a chartát egyetlen közös dokumentumként, akár
informálisként is, hogy egy új alkalmazott kideríthesse, mit jelent egy szám,
anélkül hogy körbekérdezősködne.

**Nagyvállalat.** Itt éri meg a governance az árát. Egységesítsd a definíciókat az
üzletági egységek között, követelj chartát mindenre, ami vezetői
eredménykártyát táplál, és építs kivezetési felülvizsgálatot egy ismétlődő
governance-ritmusba, mert a dashboard-burjánzás ezen a léptéken gyorsan
költségessé válik, mind karbantartási költségben, mind a hitelesség
elvesztésében, amikor két divízió ellentmondó számokat jelent ugyanarról.

**Közszféra.** A governance-nak itt gyakran jogi vagy audit dimenziója van: a
közzétett teljesítménymértékeknek törvényi jelentési követelményeknek is
meg kell felelniük, és egy definícióváltozásnak valódi politikai
következményei lehetnek. Dokumentáld nyilvánosan a módszertant, fagyaszd be a
definíciókat a jelentési időszakok között, hacsak maga a változtatás nincs
nyilvánosan megindokolva, és kezeld a metrika definíciójának, nem csak a
jelenlegi értékének független auditját állandó governance-gyakorlatként.

## Példák

**Nagyvállalat.** Egy multinacionális szoftvercég egy felvásárlás utáni
integráció során fedezte fel, hogy két legnagyobb üzletági egysége másképp
definiálta a „telepítési gyakoriságot": az egyik minden push-t számolt egy
staging környezetbe, a másik csak az éles kiadásokat. A vezetés több mint egy
éve hasonlította össze a két egység szállítási teljesítményét olyan számokkal,
amelyek valójában nem voltak összehasonlíthatók. A megoldás egy vállalati
szintű metrika-governance testület volt, amely közzétette a metrikadefiníciók
egyetlen szószedetét (ezt tükrözi a könyv 9.2 témája), minden csapattól
megkövetelte a megfelelőség igazolását, és egy negyedéven belül kivezette a
félreérthető helyi definíciókat.

**Közszféra.** Egy nemzeti statisztikai hivatal, amely egy digitális
szolgáltatási teljesítmény-dashboard közzétételéért felelős, azt találta, hogy a
„SLA-n belül megoldott" számítási módjának megváltoztatása, amelyet egy mérnöki
csapat csendben hajtott végre egy általuk hibának látott dolog javítására,
néhány százalékponttal eltolt egy kiemelt megfelelőségi számot, a változás
nyilvános dokumentálása nélkül. A hivatal formális változáskezelési folyamatot
vezetett be minden nyilvános jelentést tápláló metrikadefinícióra: a javasolt
változtatásokhoz dokumentált indoklás, a változtatással együtt közzétett
előtte-utána összehasonlítás és egy megnevezett felelős tisztviselő jóváhagyása
szükséges, bezárva azt a rést, amelyen a korábbi változás észrevétlenül
átcsúszott.

## Üzleti érv: indítékok, ROI és TCO

A governance megtérülése az elkerült egyeztetési költség. Minden óra, amelyet
egy olyan megbeszélésen töltenek, ahol két csapat azon vitatkozik, kinek a
száma a helyes, egy óra, amelyet a fegyelmezett governance, az egyetlen
igazságforrás, a megnevezett felelős teljesen megelőzött volna. Nagyvállalati
léptéken ez a költség tucatnyi csapaton halmozódik, és a vezetői figyelem
valóban jelentős részét emésztheti fel egy olyan problémán, amelyet metrikakészletenként
egy egyoldalas charta elkerült volna.

Egy könnyű governance-gyakorlat, egy charta, egy megnevezett felelős, egy
időszakos felülvizsgálat, teljes birtoklási költsége szerény és többnyire előre
jelentkezik. Az alternatíva, hogy egy jelentős kezdeményezés egy évében
felfedezzük, hogy a számok, amelyekben a vezetés megbízott, soha nem voltak
valójában összehasonlíthatók, drámaian többe kerül, mind az elpazarolt
elemzésben, mind a nyilvános vagy belső nyilvántartás utólagos helyesbítésének
hitelességi kárában.

## Antiminták és buktatók

- **Csapatfelelősség megnevezett személy helyett:** addig hígítja az
  elszámoltathatóságot, amíg senki nem tartja karban a definíciót.
- **Ugyanazon névleges metrika párhuzamos számítása:** garantálja a végül
  bekövetkező eltérést és a drága egyeztetést.
- **Charta, amely csak valakinek a fejében létezik:** eltűnik, amint az illető
  szerepet vált.
- **Metrikaprogram, amely csak ad hozzá, soha nem vezet ki:** olyan
  dashboard-burjánzást szül, amellyel senki nem tud mit kezdeni.
- **Egységes governance-súly a következménytől függetlenül:** lassítja a kis
  téttel bíró munkát, miközben alulvédi a nagy téttel bíró nyilvános vagy
  javadalmazáshoz kötött metrikákat.
- **Csendes definícióváltoztatások:** a metrika jelentése eltolódik változásnapló
  nélkül, és a történeti összehasonlítások csendben érvénytelenné válnak.

## Érettségi modell

- **1. szint, Kezdeti:** A metrikáknak nincs formális felelősük; a definíciók az
  egyéni emlékezetben élnek, és csendben sodródnak a csapatok között.
- **2. szint, Fejlődő:** Néhány csapat informális dokumentációt ír a saját
  metrikáihoz, de nincs közös chartaformátum és csapatok közötti következetesség.
- **3. szint, Szabványosított:** Minden csapathatárt átlépő metrikának
  dokumentált chartája, megnevezett felelőse és egyetlen elfogadott
  igazságforrása van, a szervezet egészében érvényesítve.
- **4. szint, Irányított:** Ismétlődő governance-ritmus vizsgálja a metrikák
  további relevanciáját, kivezeti azokat, amelyek már nem érdemlik meg a
  helyüket, és a definícióváltozásokat látható előzménnyel követi.
- **5. szint, Összehangolt:** A governance arányos a következménnyel, ahol
  lehetséges, automatizált (egy metrikakatalógus, amely jelzi a dokumentálatlan
  vagy gazdátlan metrikákat), és a szervezet kérésre bemutathatja bármely
  közzétett szám teljes eredetét.

## Ötletek a vitához

1. Kideríthetné-e egy új munkatárs pusztán a dokumentációból, mit jelent valójában a három legfontosabb metrikánk?
2. Melyik metrikánkat számolja jelenleg két különböző rendszer másképp?
3. Mikor vezettünk ki utoljára metrikát, és hogyan döntöttünk róla?
4. A governance-folyamatunk ott nehezebb, ahol a következmény a legnagyobb, vagy egységes?
5. Ki a felelőse névvel a szervezetünk legnagyobb következményű, nyilvánosan látható metrikájának?

## A legfontosabb tanulságok

- Minden metrikának kell **egy megnevezett felelős**, nem csapat, és **egy
  igazságforrás**, nem párhuzamos számítás.
- Írj rövid, élő **metrikachartát** minden csapathatárt átlépő metrikakészlethez,
  amely kimondja a célt, a nem célokat, a felelősséget és a felülvizsgálati ritmust.
- A **kivezetés** ugyanolyan fontos governance-fegyelem, mint a bevezetés;
  tudatosan metssz.
- A governance szigorát a **következményhez** igazítsd, ne a metrikák számához:
  nehezebb folyamat a nyilvános, értékelő vagy javadalmazáshoz kötött metrikáknak.
- A metrikadefiníció csendben sodródhat; kövesd a változásokat látható
  előzménnyel, hogy a szám iránti bizalom túlélje a személyzeti fluktuációt.

## Források és ajánlott olvasmányok

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, John Ladley (a metrikaprogramokra is alkalmazható
  governance-struktúrák).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (szervezeti működési zavarok a metrikák felelőssége és használata körül).
- *Key Performance Indicators*, David Parmenter (metrikafelelősség,
  definíciós fegyelem és felülvizsgálati ritmus).
- Az Egyesült Államok Kormányzati Elszámoltathatósági Hivatalának (GAO)
  útmutatói a teljesítménymérésről és a GPRA Modernization Actről: a közszféra
  metrika-governance-a és változáskezelése.
