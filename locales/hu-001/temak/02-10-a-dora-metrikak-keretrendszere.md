# 2.10 A DORA-metrikák keretrendszere

## Áttekintés és indíték

A **[DORA-metrikák](https://dora.dev/guides/dora-metrics/)** a [DevOps](https://en.wikipedia.org/wiki/DevOps)
Research and Assessment programból származnak, egy többéves kutatási erőfeszítésből,
amelyet később Nicole Forsgren, Jez Humble és Gene Kim az *Accelerate* című könyvben
tett közzé, és amely mérnök szakemberek tízezreit kérdezte meg, hogy kiderítse, mely
szállítási gyakorlatok korrelálnak a szervezeti teljesítménnyel. Az eredmény négy
metrika lett, kettesével párosítva: a telepítési gyakoriság és a változtatások
átfutási ideje a sebességet méri; a változtatási hibaarány és a sikertelen telepítés
helyreállítási ideje, amelyet gyakran átlagos helyreállítási időnek (MTTR) rövidítenek,
a stabilitást. A kutatási megállapítás, amely a keretrendszert jelentőssé tette, az
volt, hogy az elit teljesítők egyszerre voltak gyorsak és stabilak, megdöntve azt a
feltevést, hogy a sebesség és a biztonság egymás rovására megy, és ez a megállapítás a
könyv legvilágosabb kidolgozott példája az 1.2 téma védőkorlát-párosítási
elvére: az ösztönzött sebességmetrika, stabilitási védőkorláttal párosítva, az, amit a
legjobban teljesítő szervezetek valójában tesznek.

A könyv a DORA-t szándékosan ebben a részben utolsóként tárgyalja, nem a rész
szervező keretrendszereként. Ez az elhelyezés nem a kutatás elutasítása, amely
valóban szigorú és érdemes használni. Egy konkrét, valós korlátot tükröz: a DORA azt
méri, milyen gyorsan és milyen biztonságosan mozog egy csővezeték, de hallgat arról, mi
mozog a csővezetéken. Egy csapat kitűnő DORA-számokat produkálhat, miközben a tényleges
kibocsátása csendben a hibák újramunkája felé sodródott, vagy a technikai adósság- és
biztonsági munkát kiéheztette a kapacitástól, ezt a mintát a 2.1-től a 2.4-ig terjedő
témák Flow Frameworkje kifejezetten felszínre hozni hivatott, a DORA pedig nem látja.
Használd a DORA-t úgy, ahogy ez a téma bemutatja: jól validált, szűkebb referenciamérték
a csővezeték mechanikájáról, nem a szállítás egészségének teljes képe.

A nagy csapatoknál a DORA megmaradó, valódi értéke az összehasonlíthatóság. A
következetesen, csővezeték- és incidensadatokból számolt metrika lehetővé teszi, hogy
egy szervezet sok, különböző területeken dolgozó csapat szállítási képességét
hasonlítsa össze az almák-és-körték problémája nélkül, amely a legtöbb csapatok közötti
összehasonlítást sújtja. A nagyvállalatok még mindig ezzel priorizálják a
platformberuházást; a kormányzati szervek még mindig ezzel bizonyítják, bizonyítékkal,
hogy egy modernizációs program mérhetően javította a szállítás mechanikáját. Kezeld ezt
a DORA megfelelő, körülhatárolt feladataként, és a rész korábbi Flow Framework
témáit használd a tágabb kérdésre, hogy egyáltalán a megfelelő dolgokat szállítják-e.

## Alapelvek

- **A DORA a csővezetéket méri, nem a rajta áramló értéket.** A 2.1 téma közvetlenül
  megnevezi ezt a hiányt; használd a flow-eloszlást (2.3 téma), hogy lásd, amit a DORA
  nem tud.
- **A sebességet és a stabilitást együtt mérjük, soha nem külön.** Az a DORA-alapú
  dashboard, amely nem tartalmazza mindkét felet, valójában nem a keretrendszert
  használja.
- **A definíció következetessége fontosabb a nyers számnál.** Az a csapat, amely
  következetesen definiált metrikán „közepes" teljesítményből „magasba" lép, valódi
  jel; két különbözőképpen számolt csapat összehasonlítása nem az.
- **A DORA a rendszert méri, nem az egyéneket.** E metrikák egyéni mérnökökre
  alkalmazása megtöri a keretrendszer statisztikai alapját, és éppen azt a kijátszást
  hívja, amelytől az 1.2 téma óv.
- **Mind a négy metrika közelítő mutató, nem cél.** Korrelálnak a szervezeti
  teljesítménnyel; magát a számot hajszolni, a valódi szállítási javulástól elszakadva,
  meghiúsítja a keretrendszer célját.

## Ajánlások

### A telepítési gyakoriságot a csővezetékből műszerezd, csak az éles kiadásokat számolva

A **telepítési gyakoriság** azt méri, milyen gyakran ad ki egy csapat sikeresen az
éleshez. Csak a sikeres éles telepítéseket számold, automatikusan műszerezve a CI/CD
csővezeték adataiból, soha nem önbevallásból. Kifejezetten figyelj a helyettesítéskijátszásra,
egy értelmes változtatás több jelentéktelen telepítésre bontására pusztán a szám
felfújása érdekében, a telepítés méretének a gyakoriság melletti követésével: a
csökkenő átlagméret az emelkedő szám mellett a legvilágosabb jele annak, hogy ez
történik.

### A változtatások átfutási idejét az első commit-tól az élesig műszerezd

A **változtatások átfutási ideje** a kódváltoztatás első commit-jától az éles
környezetben való sikeres telepítéséig eltelt időt méri. Jelents mediánt és magas
percentilist is, ne csak átlagot, az 1.6 téma ferde, időalapú adatokra vonatkozó
útmutatását követve, és figyelj a definíció sodródására bármelyik végponton, amely
valódi javulás nélkül teszi hízelgővé a számot.

### Írásban definiáld a változtatási hibaarányt, mielőtt csapatok között összehasonlítanál

A **változtatási hibaarány** azon telepítések százalékát méri, amelyek olyan hibát
okoznak, amely helyreállítást igényel, visszagörgetést, hotfixet vagy incidenst. Ez a
négy közül a legnehezebben következetesen definiálható, mert a „hiba" nem
magától értetődően objektív. Egyezzetek meg írásos definícióban, mielőtt csapatokat
hasonlítotok össze; enélkül egy látszólag tisztességes összehasonlítás súlyosan
félrevezethet. Figyelj a gyanúsan gyors javulásra a mögötte álló folyamatváltozás
nélkül, ez a definíciókijátszás, nem a valódi haladás legvilágosabb jele.

### A helyreállítási időt az észleléstől mérd, ne a telepítési eseménytől

A **sikertelen telepítés helyreállítási ideje** azt méri, mennyi ideig tart helyreállítani
a szolgáltatást, amint egy telepítés hibát okoz. Az órát az észlelésnél indítsd, nem
magánál a telepítési eseménynél, hogy a szám valódi helyreállítási késést tükrözzön,
ne megfigyelési hiányt. Kifejezetten az automatikus visszagörgetési képességbe
fektess, ez a metrika valódi javításának leggyakoribb egyedi emelője, szemben azzal,
hogy az incidenst idő előtt megoldottnak nyilvánítják.

### A flow-metrikákat használd annak diagnosztizálására, miért mozdult egy szám, ne a DORA-t

Amikor egy DORA-metrika elmozdul, a négy szám önmagában ritkán magyarázza meg, miért.
Használd a ciklusidő felbontását (2.6 téma), a flow-terhelést (2.4 téma) és a
flow-eloszlást (2.3 téma) diagnosztikai rétegként a DORA összefoglaló számai alatt, és
soha ne használj DORA-metrikát egyéni teljesítményértékelésben, ez a keretrendszer
legkárosabb visszaélése, amelynek ki van téve.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Teljes DORA keretrendszer, mind a négy metrika párosítva | Kutatással igazolt, párosítással ellenáll a kijátszásnak, tisztességes csapatok közötti összehasonlítást tesz lehetővé | Hallgat arról, milyen fajta értéket szállítanak; ehhez a képhez mellé kell a Flow Framework |
| A DORA a rész egyedüli szervező metrikakészleteként | Egyszerű, a legtöbb mérnökvezetőnek ismerős | Teljesen kihagyja az értékkeverék kérdését, ez a könyv oka, hogy itt hátrébb sorolta |
| DORA és Flow Framework együtt | A csővezeték mechanikája és az értékkeverék is látható | Egy helyett két metrikaszókincs fenntartását igényli |
| DORA egyéni szinten alkalmazva | Egyes menedzserek számára közvetlenül cselekvésre alkalmasnak érződik | Megtöri a keretrendszer statisztikai érvényességét; erős Goodhart-törvény-kitettség |

A központi feszültség a **mechanikai szigor és az üzleti olvashatóság** között áll
fenn. A DORA négy metrikája pontosan definiált és kutatással igazolt, ami kiválóvá
teszi őket a csővezeték teljesítményének csapatok közötti összehasonlítására, de ez a
pontosság szűken magára a csővezetékre vonatkozik, és semmit nem mond arról, hogy a
megfelelő munka áramlik-e rajta. Úgy oldd fel a feszültséget, hogy a DORA-t a
csővezeték egészségének referenciarétegeként tartod, ez a 2.10 téma megfelelő helye a
könyv szerkezetében, a rész korábbi Flow Framework témáit pedig az értékkeverék
üzletközpontú kérdésére használod, ahelyett hogy megpróbálnád a DORA-t olyan
kérdés megválaszolására kényszeríteni, amelyre soha nem tervezték.

## Kérdések a csapattal való megbeszéléshez

1. **Mind a négy DORA-metrikát a csővezetékből műszerezzük, vagy némelyik önbevallott
   becslés?** Az objektív, kutatással igazolt méréssel épített keretrendszer értékének
   nagy részét elveszíti abban a pillanatban, amikor egy szám találgatássá válik.
   Auditáld az egyes metrikák tényleges adatforrását (1.5 téma).

2. **Mindazon csapatoknak, amelyeket DORA-metrikákkal hasonlítunk össze, azonos a
   telepítés, a változtatás és a hiba definíciója?** A különböző definíciókat használó
   csapatok közötti összehasonlítás valójában nem összehasonlítás, és igazságtalan
   ítéleteket szülhet a relatív teljesítményről.

3. **Használt-e valaki a szervezetünkben DORA-metrikát egyéni teljesítményértékelésben,
   formálisan vagy informálisan?** Ez a keretrendszer legkárosabb visszaélése, és gyakran
   csendben történik. Kérdezd meg közvetlenül, és légy kész egy kellemetlen, de
   szükséges válaszra.

4. **Lehetnek-e a DORA-számaink kitűnőek, miközben a flow-eloszlásunk (2.3 téma)
   csendben az újramunka felé vagy a funkcióktól el sodródott?** Pontosan ez a hiány,
   amelyet a DORA egyedül nem lát. Húzd elő mindkét számkészletet, és ellenőrizd,
   hogy következetes történetet mesélnek-e.

5. **Amikor az egyik DORA-metrikánk elmozdul, megvannak a flow-metrika diagnosztikák
   a miértjének megmagyarázásához?** Egy DORA-szám önmagában azt mondja meg, hogy
   valami megváltozott, nem azt, hogy mi. Ellenőrizd, hogy a csapataid tudnak-e
   adatokkal válaszolni arra, hogy „miért nőtt az átfutási idő ebben a hónapban", vagy
   csak találgatással.

6. **Hogyan változna a négy DORA-számunk, ha szándékosan megpróbálnánk kijátszani
   mindegyiket, és észrevennénk-e?** Menj végig a telepítési gyakoriságon, az átfutási
   időn, a változtatási hibaarányon és a helyreállítási időn egyenként, az 1.2 téma
   alapfegyelmének gyakorlati alkalmazásaként erre a konkrét keretrendszerre.

## Ágazati szemszög

**Startup.** A DORA sebességmetrikái általában természetesen jönnek egy kis csapatnál,
amely már gyakran telepít; a nehezebb fegyelem a változtatási hibaarány és a
helyreállítási idő őszinte műszerezése ahelyett, hogy stabilitást feltételeznénk, mert
még semmi nem romlott el súlyosan. A DORA korai párosítása akár egy informális
flow-elem-felosztással (2.2 téma) is megakadályozza, hogy a szállítás egészségéről
hamis érzetet építsünk pusztán a csővezeték sebessége köré.

**Kisvállalkozás.** A legtöbb modern CI/CD és verziókezelő platform minimális
beállítással exportálja a telepítési gyakoriságot és az átfutási idő adatait; a
telepítések incidensekhez kapcsolása a változtatási hibaarányhoz általában több kézi
erőfeszítést igényel. Kezdd a két sebességmetrikával, és add hozzá a stabilitás
követését, amint létezik informális incidensnapló, amelyhez kapcsolni lehet.

**Nagyvállalat.** A DORA legnagyobb megmaradó értéke ezen a léptéken a tisztességes,
következetes csapatok közötti összehasonlítás a platformberuházási döntésekhez.
Egységesítsd a definíciókat szervezetszinten (1.4 téma), automatizáld központilag a
műszerezést, és párosíts minden DORA-jelentést flow-eloszlási nézettel, hogy a vezetés
a csővezeték sebességét és az értékkeveréket is együtt lássa, ne az egyiket a másik
nélkül.

**Közszféra.** A DORA-metrikák továbbra is védhető, kutatásra épülő módot adnak egy
modernizációs programnak a szállítási mechanika javulásának felügyeleti szerveknek
való bemutatására. Jelentsd mind a négy metrikát együtt, soha ne válogasd ki a
hízelgő felet, és párosítsd őket flow-eloszlással, hogy a jelentés a nehezebb,
fontosabb kérdésre is válaszoljon: mit szállít valójában a gyorsabb csővezeték.

## Példák

**Nagyvállalat.** Egy nagy távközlési cég platformmodernizációs programja
következetesen műszerezte mind a négy DORA-metrikát negyven termékcsapaton át, és
tizennyolc hónap alatt valódi elmozdulást mutatott az alacsony teljesítményű sávból a
magas teljesítményű sávba, a telepítési gyakoriság nagyjából tízszeresére nőtt, az
átfutási idő hetekről napokra csökkent, a változtatási hibaarány változatlan maradt.
Egy testületi tag, aki átnézte a prezentációt, olyan kérdést tett fel, amelyre a
DORA-számok önmagukban nem tudtak válaszolni: a gyorsabb szállítás mekkora része volt új
ügyfélérték, és mekkora újramunka. A mérnöki szervezetnek nem volt válasza, amíg a
következő negyedévben be nem vezette a flow-elem-besorolást, amely megmutatta, hogy a
funkciómunka a teljes kibocsátás részarányában valójában csökkent, még ahogy a DORA
sebességi számai javultak, ez a megállapítás átalakította a program következő évi
prioritásait.

**Közszféra.** Egy állami kormány IT-modernizációs hivatala szerződéses feltételként
fogadta el a DORA-metrikákat, hogy összehasonlítsa több versengő szállítói csapat
szállítási képességét, a keretrendszer összehasonlíthatóságának hatékony
felhasználásaként. Az egyik szállító magas telepítési gyakoriságáról, amint a
változtatási hibaarányt is megkövetelték mellé, kiderült, hogy a társainál közel
háromszor magasabb hibaaránnyal korrelál, ez az információ közvetlenül megalapozta a
hivatal szerződésmegújítási döntését. A hivatal később flow-eloszlási követelményt is
hozzáadott ugyanezekhez a szerződésekhez, miután felfedezte, hogy a legjobb
DORA-számokkal rendelkező szállító egyben az, amelyik a legkisebb kapacitásrészt
fordítja a szerződés által kifejezetten megkövetelt biztonsági helyreállítási munkára.

## Üzleti érv: indítékok, ROI és TCO

A DORA jó, megfelelő hatókörű bevezetésének megtérülése védhető, bizonyítékokon
alapuló válasz arra, hogy „a szállítási csővezetékünk gyorsabbá és biztonságosabbá
válik-e", ami továbbra is a mérnöki munka egyik kezelhetőbb kérdése, amelyet
magabiztosan meg lehet válaszolni. Ez a válasz valódi számokkal indokolja a platform-
és eszközberuházást, és lehetővé teszi a vezetésnek, hogy a versengő beruházásokat
tisztességes, következetes alapon hasonlítsa össze, pontosan úgy, ahogy mindig is.

A teljes birtoklási költség az az integrációs munka, amely a telepítési eseményeket
az incidensnyilvántartásokhoz köti a változtatási hibaarányhoz és a helyreállítási
időhöz, ez nem triviális egy nagy, heterogén eszköztájon. A DORA Flow Framework
témákkal való párosításának többletköltsége viszonylag kicsi, mert a flow-elem-besorolás
a meglévő munkára épített jelentési konvenció, nem párhuzamos mérési rendszer, és a
megtérülés, éppen az az értékkeverék-vakfolt elkapása, amelyet a fenti távközlési
példa illusztrál, bőven megéri ezt a szerény többletbefektetést.

## Antiminták és buktatók

- **A DORA kezelése a szállítás egészségének teljes képeként:** a kijátszási vektor,
  amelynek ellensúlyozására a téma elhelyezése szolgál. Egy szervezet valóban kitűnő
  DORA-számokat mutathat be, gyors, gyakori, stabil telepítéseket, miközben a
  tényleges leszállított értéke csendben az újramunka felé tolódott vagy a funkcióktól
  eltávolodott, és a DORA négy metrikája egyedül soha nem fogja ezt az eltolódást
  feltárni, mert soha nem erre tervezték őket. A védőkorlát minden DORA-jelentés
  párosítása flow-eloszlással (2.3 téma), hogy a gyors, stabil, de a rossz
  munkakeveréket szállító csővezeték látható legyen, ne tévesszék össze a valódi
  szállítási egészséggel.
- **Csak a DORA sebességfelének jelentése:** meghiúsítja a keretrendszer központi
  megállapítását, hogy a sebesség és a stabilitás együtt mozog a magas teljesítőknél.
- **DORA-metrikák használata egyéni teljesítményértékelésben:** megtöri a
  keretrendszer statisztikai érvényességét, és erős kijátszást hív.
- **Csapatok összehasonlítása következetlen definíciókkal:** tisztességesnek látszó,
  de nem tisztességes összehasonlításokat ad.
- **Önbevallott DORA-számok csővezetékből műszerezettek helyett:** éppen azt a
  torzítást viszi be, amelynek kiküszöbölésére a keretrendszert tervezték.
- **A DORA diagnosztikai, nem összefoglaló jellegként kezelése:** a csapatot képtelenné
  teszi megmagyarázni, miért mozdult egy szám, az alatta lévő flow-metrika réteg
  nélkül.

## Érettségi modell

- **1. szint, Kezdeti:** A DORA-metrikákat, ha egyáltalán követik, önbevallással,
  következetlenül definiálva követik, és soha nem párosítják flow-adatokkal.
- **2. szint, Fejlődő:** Néhány csapat a csővezetékből műszerezi a DORA-t, de a
  definíciók eltérnek, és nincs flow-eloszlási megfelelő, amelyhez ellenőrizni lehetne.
- **3. szint, Szabványosított:** Mind a négy DORA-metrikát következetesen műszerezik a
  csővezeték- és incidensadatokból, közös definíciókkal, és rutinszerűen
  flow-eloszlás mellett mutatják.
- **4. szint, Irányított:** A DORA-t és a flow-metrikákat a szervezet minden szintjén
  szokásos párosításként együtt vizsgálják, és a DORA-t soha nem használják egyéni
  értékelésre.
- **5. szint, Összehangolt:** A szervezet konkrét esetekre tud mutatni, ahol a
  flow-eloszlás olyan értékkeverék-problémát kapott el, amelyet a kitűnő DORA-számok
  önmagukban elfedtek, és mindkét keretrendszert tudatosan használja az általuk
  megválaszolt különböző kérdésekre.

## Ötletek a vitához

1. Hová helyez minket őszintén a négy DORA-metrikánk a teljesítményszint-spektrumon?
2. Lehetnek-e a DORA-számaink kitűnőek, miközben a flow-eloszlásunk csendben elsodródott? Ellenőriztük-e valaha?
3. Használt-e valaha valaki DORA-számot egyén megítélésére, akár informálisan is?
4. Ha egy versenytárs közzétenné a DORA-számait, kedvezően hasonlítana-e a miénkhez, és megmondaná-e ez az összehasonlítás valóban, ki szállít több valódi értéket?

## A legfontosabb tanulságok

- A DORA négy metrikája, a **telepítési gyakoriság, az átfutási idő, a változtatási
  hibaarány és a helyreállítási idő**, tervezetten párosítja a sebességet a
  stabilitással, és valóban kutatással igazolt marad.
- A könyv a DORA-t **a rész utolsó helyére** teszi, mert a csővezetéket méri, nem a
  rajta áramló értéket; párosítsd flow-eloszlással (2.3 téma) a teljesebb képért.
- A téma központi kijátszási vektora a **kitűnő DORA-számok összetévesztése a teljes
  szállítási egészséggel**; a védőkorlát az, hogy a DORA-t mindig a flow-eloszlás
  mellett jelentsük.
- **Soha ne használj DORA-metrikákat egyéni teljesítményértékelésben**; a keretrendszer
  érvényessége a rendszerszintű, nem az egyéni mérésen múlik.
- Használd a **flow-metrikákat diagnosztikai rétegként** a DORA összefoglaló számai alatt,
  amikor az egyik elmozdul.

## Források és ajánlott olvasmányok

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme.
  [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
