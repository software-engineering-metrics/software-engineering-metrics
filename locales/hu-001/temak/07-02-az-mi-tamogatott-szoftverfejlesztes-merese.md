# 7.2 Az MI-támogatott szoftverfejlesztés mérése

## Áttekintés és indíték

A 7.1 téma megmutatta, miért nem mérik már megbízhatóan több meglévő metrikák azt, amit korábban, MI-támogatott fejlesztés mellett. Ez a téma arról szól, mit mérjünk helyette: hogyan tudhatjuk meg valódi bizonyítékkal, nem benyomás vagy szállítói marketing alapján, hogy az MI kódolási támogatás tényleg segít-e a szervezetnek, és mennyivel. Ez valóban fontos kérdés, valódi költségvetési következményekkel: az MI-eszközök licencei valós, folyamatos költséget jelentenek, az 5.4 téma egységgazdaságtani fegyelme közvetlenül érvényes rájuk, és az a szervezet, amely nem tud bizonyítékkal válaszolni, vagy túlfizet egy eszközért, amely nem segít, vagy alulbefektet egy olyanba, amely valóban segít.

A téma megközelítése közvetlenül az 1.3 téma eredmények a kibocsátás előtt elvére épül, most kifejezetten az MI-eszközök értékelésére alkalmazva. A naiv, leggyakoribb megközelítés az MI-támogatott fejlesztést a kibocsátás mennyiségével méri: a generált kódsorokkal, az elfogadott javaslatokkal, a fejlesztők által önbevallott feladatonkénti időmegtakarítással. Ezek pontosan azok a metrikák, amelyekről a 7.1 téma megmondta, hogy a legkitettebbek ennek a váltásnak. A szigorúbb megközelítés, amelyet ez a téma ajánl, eredményeket mér: csökkentette-e az MI-támogatás ténylegesen a ciklusidőt a minőség romlása nélkül, csökkentette-e a valóban alacsony értékű, ismétlődő munkára fordított időt, felszabadítva kapacitást magasabb értékű munkára, és mérhetően hatott-e az 5. rész üzleti és termékeredményeire.

A nagy csapatoknál ennek helyes mérése dönti el, hogy az MI-eszközberuházásokról bizonyíték alapján döntenek-e, vagy szállítói állítások és szervezeti lendület alapján. A nagyvállalatoknak, amelyek nagy léptékű MI-eszközszerződésekről tárgyalnak, valódi értékbizonyítékra van szükségük a kiadás indoklásához és a versengő eszközök tisztességes összehasonlításához. A közszféra szervezeteinek, amelyek a technológiai kiadások miatt gyakran különös vizsgálat alatt állnak, szigorú, védhető értékelési módszertanra van szükségük, mielőtt közpénzt köteleznek el az MI-eszközök nagy léptékű bevezetésére.

## Alapelvek

- **Az MI-támogatást eredmény alapján mérd, nem a kibocsátás mennyisége vagy a szállító által közölt használati statisztikák alapján.** Az 1.3 téma fegyelme itt teljes erővel érvényes.
- **Használj valódi [összehasonlító csoportot](https://en.wikipedia.org/wiki/Treatment_and_control_groups), ahol lehetséges**, ne csak előtte-utána összehasonlítást, amelyet az iparági szintű alapérték emelkedése összezavarhat.
- **Az önbevallott időmegtakarítás önmagában gyenge jel.** Párosítsd objektív ciklusidő- és minőségi adatokkal.
- **Mérd a teljes költséget, az áttekintési és javítási időt is**, nem csak a generálás sebességét.
- **A különböző feladatoknál és különböző mérnököknél az MI-támogatás értéke nagyon eltérő lehet.** Kerüld az egyetlen, szervezeti szintű átlagszámot, amely elrejti ezt a változatosságot.

## Ajánlások

### Építs valódi összehasonlítást, ne csak előtte-utána pillanatképet

Ahol lehetséges, hasonlítsd össze az eredményeket az MI-támogatást használó és egy összehasonlítható, azt nem használó csoport között, ugyanabban az időszakban. Ne csak a saját szervezeted előtte-utána számait hasonlítsd, mert azok nem tudják megkülönböztetni az MI-támogatás hatását bármilyen más egyidejű változástól (az 1.6 téma zavaró változókra vonatkozó óvatossága közvetlenül érvényes). Ahol valódi összehasonlító csoport nem kivitelezhető, legalább hosszabb történeti alapértékhez hasonlíts (szabályozókártyával, az 1.6 téma szerint), ne egyetlen előtte-utána pillanatképhez, amely sebezhető az átlaghoz való visszatéréssel és a független egyidejű változásokkal szemben.

### Mindig együtt mérd a ciklusidőt és a minőséget, soha ne az MI-támogatás sebességi állítását önmagában

Alkalmazd közvetlenül a 2.6 és a 2.10 téma fegyelmét: kövesd, hogy az MI-támogatott munka gyorsabban halad-e a ciklusidő szakaszain, és ezzel egyidejűleg a változtatási hibaarány vagy a kiszökött hibák aránya (5.1 téma) rossz irányba mozdul-e ennél a munkánál. A valódi termelékenységi nyereség gyorsabb ciklusidőt mutat stabil vagy javuló minőség mellett. A hamis nyereség gyorsabb ciklusidőt mutat romló minőség mellett, pontosan azt a cserét, amely ellen a 7.1 téma figyelmeztetett, itt ugyanazzal a párosított metrika-fegyelemmel felfedezve, amelyet a könyv mindenütt alkalmaz.

### Vedd be a teljes költségszámításba az áttekintési és a javítási időt

Az MI-generált kód, amelyet gyorsabb előállítani, de lassabb áttekinteni, vagy amely több javítást és újramunkát igényel a kezdeti generálás után, nem mutathat nettó ciklusidő-javulást, ha a teljes folyamatot mérjük, még akkor sem, ha a kezdeti kódgenerálási lépés az egyes mérnöknek drámaian gyorsabbnak érződött. A teljes ciklusidő-láncot mérd (2.6 téma), nem csak a kódolási szakaszt, hogy ezt őszintén rögzítsd, ahelyett hogy az MI-támogatásnak a sebesség érzett, de hiányos élménye alapján tulajdonítanál elismerést.

### Az önbevallott időmegtakarítást kiinduló hipotézisként kezeld, ne következtetésként

A fejlesztői önbevallás, hogy „ez egy órát megspórolt nekem", hasznos kezdeti jelként és kvalitatív kontextusként (az 5.3 téma kombinált kvantitatív-kvalitatív megközelítése itt is érvényes), de ugyanazoknak az emlékezeti és kívánatossági torzításoknak van kitéve, amelyekre az 1.5 téma figyelmeztet bármilyen önbevallott adatnál, és semmit nem mond a későbbi áttekintési vagy javítási költségről. Az önbevallást arra használd, hogy hipotéziseket állíts fel arról, hol segít leginkább az MI-támogatás, majd ezeket a hipotéziseket objektív ciklusidő- és minőségi adatokkal validáld, mielőtt határozott következtetést vonsz le.

### Szegmentáld a mérést feladattípus szerint, és kerüld az egyetlen összevont számot

Az MI kódolási támogatás valószínűleg nagyon eltérő értéket nyújt sablonos, jól értett feladatoknál, mint valóban újszerű, összetett problémamegoldásnál. Feladatkategóriánként mérj és jelents, ne egyetlen, szervezeti szintű összevont átlagot, amely elrejtheti, hogy a támogatás az egyik kategóriában erős értéket nyújt, a másikban pedig keveset vagy akár negatívat. Egy összevont szám ezt az információt teljesen elfedné.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Csak önbevallott időmegtakarítás | Gyors, könnyen gyűjthető | Gyenge jel, torzításra hajlamos, figyelmen kívül hagyja a későbbi áttekintési költséget |
| Csak előtte-utána összehasonlítás | Egyszerű felállítani | Bármilyen más egyidejű változás vagy iparági trend összezavarja |
| Valódi összehasonlító csoport | A legerősebb, legvédhetőbb bizonyíték | Nehezebb megszervezni, teljes bevezetésnél nem biztos, hogy kivitelezhető |
| Feladatszegmentált eredménymérés | Megmutatja, hol koncentrálódik valóban az érték | Részletesebb követést és kategorizálási erőfeszítést igényel |

A fő feszültség a **mérési szigor és a gyakorlati megvalósíthatóság** között van. A valódi, kontrollált összehasonlító csoport a legerősebb bizonyíték, de gyakran kivitelezhetetlen, ha az eszközt már az egész szervezetben bevezették, visszatartott kontrollcsoport nélkül. Az önbevallott benyomások gyorsak és könnyűek, de önmagukban gyengék. Oldd fel a feszültséget úgy, hogy a tényleges bevezetésed által megengedett legerősebb összehasonlítási tervet használod: valódi kontrollcsoportot egy korai kísérleti szakaszban, ha lehet, történeti alapérték szabályozókártyát, ha nem. Az önbevallást pedig hipotézisgeneráló eszközként kezeld, nem végső szóként, bármelyik összehasonlítási tervet használod is.

## Kérdések a csapattal való megbeszéléshez

1. **Volt-e, vagy még felépíthető-e valódi összehasonlító csoport az MI-eszköz bevezetésünk értékeléséhez, vagy teljesen az előtte-utána összehasonlításra hagyatkozunk?** Ha valódi összehasonlító csoportot sosem hoztak létre, beszéljétek meg, hogy egy történeti alapérték szabályozókártya még nyújthat-e ésszerűen szigorú alternatívát.

2. **Mértük-e együtt a ciklusidőt és a minőséget az MI-támogatott munkánál, vagy csak sebességi állításunk van megfelelő minőségi ellenőrzés nélkül?** Húzd elő, amilyen adat létezik, és ellenőrizd ezt a konkrét párosítást. Ha nem létezik, ez a rés a téma legfontosabb javítandó pontja.

3. **Az MI-támogatott munka ciklusidő-mérése magában foglalja-e az áttekintési és javítási időt, vagy csak a kezdeti generálási lépést?** Az a sebességi állítás, amely csak a generálási időre épül, és figyelmen kívül hagyja a későbbi áttekintési költséget, beleesik a hiányos számvitel csapdájába, amely ellen ez a téma közvetlenül óv.

4. **Milyen önbevallott időmegtakarítási állításokat gyűjtöttünk, és validáltuk-e bármelyiket objektív adatokkal?** Válassz ki egy konkrét, gyakran ismételt állítást, és ellenőrizd, hogy az objektív adatok tényleg alátámasztják-e.

5. **A jelenlegi mérésünk minden feladattípust egyetlen számba von össze, vagy tudjuk, melyik munkakategóriáknál a legerősebb az MI-támogatás értéke?** Ha összevont, beszéljétek meg, mit tárhatna fel egy feladatszegmentált bontás, amit a jelenlegi szám elrejt.

6. **Ha ma egy szkeptikus pénzügyi érdekelt előtt kellene megvédenünk az MI-eszközberuházásunkat, bizonyítékkal, nem benyomással, mit tudnánk ténylegesen megmutatni neki?** Ez a konkrét teszt felszínre hozza a rést aközött, amit a szervezet jelenleg hisz az MI-támogatás értékéről, és amit bizonyítékkal valóban be tud mutatni.

## Ágazati szemszög

**Startup.** A formális összehasonlító csoportos vizsgálat kis léptéknél általában kivitelezhetetlen, de már egy egyszerű, őszinte előtte-utána pillantás a ciklusidőre és a hibaarányra, ahelyett hogy kizárólag azon múlna, mennyivel gyorsabbnak érződik a munka, érdemben megbízhatóbb jelet ad, mint a puszta benyomás.

**Kisvállalkozás.** Koncentráld a mérési erőfeszítést először a legnagyobb értékű, leginkább ismétlődő feladatkategóriára, ahol az MI-támogatás értéke a legvalószínűbben világos és mérhető, ahelyett hogy átfogó értékelést kísérelnél meg a kis csapatod minden munkatípusán.

**Nagyvállalat.** A valódi, kontrollált összehasonlítás egy korai kísérleti szakaszban, a teljes szervezeti bevezetés előtt, itt gyakran elérhető, és megéri a tudatos szervezést, mert sokkal védhetőbb bizonyítékot ad a nagy léptékű eszközberuházási döntéshez, amely jellemzően egy sikeres kísérletet követ.

**Közszféra.** A közpénzből finanszírozott technológiai kiadásokról szóló döntések, az MI-eszközbeszerzést is beleértve, gyakran különös vizsgálat alatt állnak, és formális költség-haszon indoklást igényelhetnek (5.5 téma). Építsd be a témában ajánlott mérési fegyelmet minden kísérleti szakaszba az elejétől fogva, mert a szigorú, dokumentált értékelési módszertan jelentősen megerősíti az eredeti finanszírozási vagy beszerzési érvet.

## Példák

**Nagyvállalat.** Egy szoftvercég tudatos kísérletként MI kódolási asszisztenst vezetett be mérnökcsapatainak felénél, a másik felét összehasonlító csoportként tartotta vissza egy negyedévig a teljes bevezetés előtt. A kísérleti csoport valódi, statisztikailag érdemi ciklusidő-javulást mutatott a jól meghatározott, sablonos feladatoknál, de nem mutatott mérhető javulást, és kissé magasabb áttekintési iterációszámot (2.9 téma) mutatott az összetett, újszerű architekturális munkánál. Ez a feladatszegmentált megállapítás, amely csak a valódi összehasonlító terv és a feladatkategória szerinti bontás miatt vált láthatóvá, oda vezetett, hogy a cég az MI-támogatás bevezetési üzeneteit és képzését kifejezetten azokra a feladatkategóriákra célozta, ahol bizonyíthatóan segített, ahelyett hogy egységes termelékenységi lökésként mutatta volna be minden munkára.

**Közszféra.** Egy szövetségi ügynökség, amely az MI kódolási támogatást a korszerűsítési programja néhány csapatánál kísérletezte, kezdetben önbevallott időmegtakarítási felmérésekre támaszkodott, amelyek lelkes, egységesen pozitív válaszokat mutattak. Egy utólagos objektív elemzés, amely a ciklusidőt és a kiszökött hibák arányát hasonlította a kísérleti csapatok és egy hasonló rendszerkomponenseken dolgozó, összehasonlítható nem kísérleti csoport között, azt találta, hogy az objektív ciklusidő-javulás valódi volt, de észrevehetően kisebb, mint amit az önbevallott becslések sugalltak, és kimutatott egy szerény, de valódi áttekintésiidő-növekedést, amely a generálási sebességnyereség egy részét ellensúlyozta. Ezt az önbevallási adatok önmagukban teljesen elmulasztották. Ez a pontosabb, bizonyítékalapú kép közvetlenül egy szerényebb és védhetőbb üzleti érvet alakított ki az eszköz további, bővített beszerzéséhez.

## Üzleti érv: indítékok, ROI és TCO

Az MI-támogatott fejlesztés szigorú mérésének megtérülése magabiztos, bizonyítékalapú beruházási döntés. Az a szervezet, amely pontosan tudja, hol segít valóban az MI-támogatás, ott fektethet a bővítésébe, és elkerülheti a licencek túlfizetését azokban a feladatkategóriákban, ahol kevés értéket nyújt. Pontosan ezt a feladatszegmentációs felismerést mutatja a fenti szoftvercég példa. Ez közvetlenül kapcsolódik az 5.4 téma egységgazdaságtanához és az 5.5 téma ROI-fegyelméhez, mert az MI-eszközök költsége, amelyet gyakran felhasználónként licencelnek, ugyanazt a szigorú költség-haszon kezelést igényli, amelyet a könyv bármely más jelentős mérnöki befektetésre alkalmaz.

A teljes birtoklási költség az az elemzési erőfeszítés, amely a valódi összehasonlítások felépítéséhez, a teljes ciklusidő (az áttekintési és javítási időt is beleértve) méréséhez és a feladattípus szerinti szegmentáláshoz kell. Ez több munka, mint a szállító által közölt használati statisztikák vagy az önbevallott benyomások névértéken elfogadása. Ezt az erőfeszítést közvetlenül indokolja az MI-eszközlicencek költségének nagysága egy nagy szervezetben, és egy rosszul megalapozott, drága, szervezeti szintű elköteleződés kockázata, amely benyomásra épül, nem adatra.

## Antiminták és buktatók

- **Az MI-támogatás mérése pusztán a kibocsátás mennyisége vagy a szállítói használati statisztikák alapján:** közvetlenül megismétli a 7.1 téma központi figyelmeztetését.
- **Teljes mértékben az önbevallott időmegtakarításra hagyatkozás:** gyenge jel, amely torzításra hajlamos, és vak a későbbi áttekintési és javítási költségre.
- **Csak a generálási sebesség lépésének mérése, a teljes ciklusidő figyelmen kívül hagyásával:** a tényleges termelékenységi hatás hiányos, esetleg félrevezető elszámolását adja.
- **Egyetlen, összevont, szervezeti szintű szám jelentése:** elrejti az érték valódi eltéréseit a különböző feladatkategóriák között.
- **Sem összehasonlító csoport, sem történeti alapérték:** nem tudja megkülönböztetni az MI-támogatás tényleges hatását bármilyen más egyidejű változástól.
- **Egy lelkes önbevallott felmérési eredmény elegendő bizonyítéknak tekintése nagy léptékű beruházási döntéshez:** pontosan azt a rést kockáztatja, amelyet a fenti szövetségi ügynökség példája csak egy szigorúbb összehasonlítás felépítése után fedezett fel.

## Érettségi modell

- **1. szint, Kezdeti:** Az MI-támogatott fejlesztés értékét, ha egyáltalán, önbevallott benyomás és szállítói használati statisztikák alapján értékelik.
- **2. szint, Fejlődő:** Van némi ciklusidő- vagy minőségi adat, de nincs valódi összehasonlító csoport vagy történeti alapérték, és nincs feladatszegmentált elemzés.
- **3. szint, Szabványosított:** Valódi összehasonlítási tervet (kontrollcsoport vagy történeti alapérték) alkalmaznak következetesen, párosított ciklusidő- és minőségméréssel, feladattípus szerint szegmentálva.
- **4. szint, Irányított:** A teljes ciklusidő-elszámolást, az áttekintési és javítási időt is beleértve, követik. Az önbevallott állításokat szisztematikusan validálják objektív adatokkal.
- **5. szint, Összehangolt:** A szervezetnek érett, bizonyítékalapú megértése van arról, hol segít valóban az MI-támogatás, és ez tájékoztatja a célzott bevezetést, a képzési befektetést és a beszerzési döntéseket, igazolt, védhető ROI-val.

## Ötletek a vitához

1. Milyen valódi összehasonlításunk van, ha van egyáltalán, a jelenlegi MI-eszköz bevezetésünkhöz?
2. Együtt mértük-e a ciklusidőt és a minőséget, vagy csak sebességi állításunk van?
3. Melyik önbevallott MI-támogatási állítást kellene validálnunk objektív adatokkal?
4. Melyik konkrét feladatkategóriában mutatkozik a legerősebb bizonyíték a valódi MI-támogatási értékre nálunk?
5. Meg tudnánk-e jelenleg védeni az MI-eszközberuházásunkat egy szkeptikus pénzügyi érdekelt előtt bizonyítékkal?

## A legfontosabb tanulságok

- Az MI-támogatott fejlesztést **eredmény** alapján mérd, ne a kibocsátás mennyisége vagy a szállító által közölt használati statisztikák alapján.
- Használj **valódi összehasonlító csoportot vagy történeti alapértéket**, ne csak az összezavaró tényezőknek kitett előtte-utána pillanatképet.
- **A ciklusidőt és a minőséget együtt** mérd, a teljes folyamatot, az áttekintési és javítási időt is beleértve, ne csak a generálás sebességét.
- Az **önbevallott időmegtakarítást hipotézisként** kezeld, ne következtetésként, és validáld objektív adatokkal.
- **Szegmentálj feladattípus szerint**: egyetlen összevont szám elrejti, hol koncentrálódik valóban az érték, és hol nem.

## Források és ajánlott olvasmányok

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez Humble és Gene Kim (az eredménymérési fegyelem, amelyet ez a téma az MI-eszközök értékelésére alkalmaz).
- A GitHub kutatása az MI páros programozásról és a fejlesztői termelékenységről (iparági léptékű empirikus kutatás az MI-támogatott fejlesztés eredményeiről).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck és Jenna Butler, „The SPACE of Developer Productivity", *ACM Queue* (2021) (a többdimenziós mérési fegyelem, amelyet ez a téma egy sajátos új eszközkategóriára alkalmaz).
- *How to Measure Anything*, Douglas W. Hubbard (védhető összehasonlítások építése és az érték számszerűsítése valódi bizonytalanság mellett).
