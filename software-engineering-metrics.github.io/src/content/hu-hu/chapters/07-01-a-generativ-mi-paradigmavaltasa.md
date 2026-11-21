# 7.1 A generatív MI paradigmaváltása

## Áttekintés és indíték

A szoftverfejlesztés történetének nagy részében a kódírás elég lassú és fáradságos volt ahhoz, hogy a nyers kibocsátás mennyisége, vagyis a megírt sorok, a commitok, a leszállított funkciók, legalább lazán korreláljon a ráfordított munkával, és tökéletlenül, a valódi értékkel. Ez a korreláció sosem volt tökéletes: a 3.4 téma egy egész témát szentelt annak, miért vezetnek félre az aktivitásmetrikák már az MI előtti világban is. De elég erős volt ahhoz, hogy sok szervezet azzal az ki nem mondott feltevéssel építse fel a metrikaprogramját, hogy a több előállított kód általában több elvégzett munkát jelent. A [generatív MI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) kódolási asszisztensek ezt a feltevést véglegesen megtörték: egy eszköz ma másodpercek alatt, a korábbi költség töredékéért hihetően kinéző kódot állít elő nagy mennyiségben, és ez a mennyiség önmagában szinte semmit nem mond arról, hogy az eredmény működik-e, karbantartható-e, vagy szolgál-e valódi célt.

A téma alapállítása, hogy ez paradigmaváltás, nem fokozatos eszközváltozás. A paradigmaváltás azt változtatja meg, hogy a meglévő műszereink valójában mit mérnek, nem csak azt, hogy milyen értékeket mutatnak. A sebességmérő akkor is sebességet mér, ha kicseréled az autó motorját. A könyv több metrikája nem éli túl ilyen tisztán ezt az átmenetet. A telepítési gyakoriság (2.10 téma) emelkedhet azért, mert az MI valóban értékes munkát gyorsított fel, vagy azért, mert az MI triviálisan könnyűvé tette sok apró, kis értékű változtatás generálását. A szám önmagában már nem tudja megkülönböztetni a kettőt, ahogy korábban, megfelelő óvatossággal, többnyire tudta. Ugyanez a logika még nagyobb erővel érvényes a nyers commitszámokra, a kódsorokra és a pull requestek mennyiségére. A 3.4 téma már egyedi metrikaként is óvott ezektől, most pedig csapat- és szervezeti szinten is releváns kockázattá erősödtek.

A nagy csapatoknál ez a váltás gyorsabban érkezett, mint ahogy a legtöbb szervezet mérési gyakorlata alkalmazkodni tudott volna hozzá, és a bevezetés sebessége meg a mérés alkalmazkodása közötti rés az, ahol ennek a résznek az igazi kockázata lakik. Azok a nagyvállalatok, amelyek változtatás nélkül jelentik tovább az MI-korszak előtti aktivitásmetrikákat, olyan mutatót ünnepelhetnek, amely csendben megszűnt az értékkel korrelálni. A közszféra szervezeteinek, amelyek az MI-eszközbe fektetést értékelik, világosan kell látniuk, mely metrikák maradnak megbízhatók, és melyek nem, mielőtt elavult mérési feltevésekre épülő beszerzési vagy szakpolitikai döntéseket hoznak.

## Alapelvek

- **Ez paradigmaváltás abban, hogy a metrikák mit mérnek, nem fokozatos változás.** Néhány meglévő metrika csendben megszűnt azt jelenteni, amit korábban.
- **A kibocsátás mennyisége sosem volt megbízható közelítő mutatója az értéknek, és most aktívan megbízhatatlanná vált.** A 3.4 téma figyelmeztetése mindig helyes volt, ez a váltás sokkal költségesebbé teszi a figyelmen kívül hagyását.
- **A bevezetés sebessége és a mérés alkalmazkodási sebessége közötti rés az igazi kockázat.** A szervezetek gyorsabban vezetik be az eszközt, mint ahogy újragondolják a metrikáikat.
- **A könyv nem minden metrikáját érinti egyformán.** Az eredménymetrikák (5. rész) sokkal ellenállóbbak a váltással szemben, mint az aktivitás- és a nyers kibocsátásmetrikák.
- **A váltás iparági szintű és folyamatos, nem egyszeri igazodás.** Számíts további változásra, ahogy az eszközök és a bevezetési minták tovább fejlődnek.

## Ajánlások

### Auditáld a meglévő metrikakészletedet kifejezetten az MI-korszakbeli érvényességre

Menj végig a jelenlegi dashboardodon, és minden metrikánál tedd fel közvetlenül a kérdést: javuló értéket mutatna-e ezen a metrikán egy csapat, amely sokat használ MI-támogatást, de nem állít elő több valódi értéket, mint korábban? A legkitettebbek az aktivitásszámok, a commitgyakoriság és a nyers telepítési gyakoriság (párosított stabilitási védőkorlát nélkül, 2.10 téma). Az 5. rész eredménymetrikái, a kiszökött hibák aránya, a funkcióelfogadás és az üzleti eredmények viszonylag ellenállóak, mert magát az eredményt mérik, nem az azt létrehozó tevékenység mennyiségét.

### Vizsgáld újra külön a telepítési gyakoriságot és az átfutási időt, fokozott védőkorlát-figyelemmel

A 2.10 téma már figyelmeztetett a helyettesítéses kijátszásra: az érdemi munka triviális telepítésekre darabolására, hogy nőjön a darabszám. A generatív MI ezt a kijátszási mintát látványosan olcsóbbá és könnyebbé teszi, akár szándék nélkül is, hiszen az MI-támogatott triviális változtatások szinte ingyen generálhatók. Szigorítsd a változtatási hibaarány védőkorlátját (2.10 téma) arányosan azzal, mennyire erősen vezette be egy csapat az MI-támogatott fejlesztést, és az eddigieknél szorosabban figyeld a telepítések méretének trendjét.

### Kezeld a kódáttekintési kapacitást új, kritikus szűk keresztmetszetként

Ha az MI-támogatás drámaian megnöveli az áttekintésre javasolt kód mennyiségét, az áttekintési szakasz (2.9 téma), amely már most is gyakran a legnagyobb várakozásiidő-tétel a szállítási folyamatban, még élesebb korláttá válik. Az az áttekintő, akitől a korábbival azonos tempóban kérik sokkal több MI-generált kód értékelését, elkerülhetetlenül vagy lassítja a folyamatot, vagy csökkenti az áttekintés mélységét. Ez pontosan az a gumibélyegzős kockázat, amelyre a 2.9 téma már figyelmeztetett, most jelentősen nagyobb nyomás alatt. Az MI-generált kód mennyiségének növekedésével fokozott figyelemmel kövesd az áttekintés mélységét és minőségi védőkorlátait.

### Ne feltételezd, hogy az MI-generált kód hibaprofilja megegyezik az emberi kódéval

A korai bizonyítékok és a gyakorlati tapasztalatok arra utalnak, hogy az MI-generált kód hibaprofilja eltérhet az emberi kódétól: hihetően kinéző, de finoman hibás logika, magabiztosan generált, de téves szélsőeset-kezelés, vagy olyan kód, amely átmegy a felületes áttekintésen, mert idiomatikusnak és ésszerűnek látszik, de valójában nem gondolták végig a rendszer konkrét környezetének valódi megértésével. Kezeld ezt olyan hipotézisként, amelyet érdemes aktívan tesztelni a saját kiszökött hibákra vonatkozó adataid ellen (5.1 téma): címkézd a hibákat aszerint, hogy az eredeti kód lényegében MI-generált volt-e, ahelyett hogy azt feltételeznéd, a szervezeted minőségi gyakorlatainak alapjául szolgáló történeti hibaarány-összefüggések változatlanul érvényesek.

### Frissítsd kifejezetten a metrikachartádat és a governance-folyamatodat erre a váltásra

Az 1.4 téma governance-fegyelmét követve ne hagyd, hogy ez a váltás passzívan történjen meg a metrikaprogramoddal. Tekintsd át kifejezetten a metrikachartádat, és nevezd meg, mely metrikák kapnak új védőkorlátot, melyeket kell kivezetni, és melyek maradnak megbízhatók. Ez legyen tudatos governance-döntés, ne átgondolatlan sodródás. Dokumentáld az indoklást, mert ez pontosan az a fajta definíciós és kontextusbeli eltolódás, amelyről az 1.4 téma figyelmeztet, hogy másképp csendben megtörténhet, és csak jóval később derül ki.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Az MI előtti metrikák változatlan jelentése | Nincs fennakadás, megszokott riportolás | Azt kockáztatja, hogy olyan metrikákat ünnepelünk, amelyek csendben megszűntek az értékkel korrelálni |
| Teljes metrikakészlet-audit és tudatos felülvizsgálat | Helyreállítja a megbízható mérést | Valódi elemzési erőfeszítést és szervezeti változásmenedzsmentet igényel |
| Az aktivitás- és kibocsátásmetrikák teljes elhagyása | Közvetlenül megszünteti a legkitettebb kockázatot | Elveszít némi jogosan hasznos kontextusjelet (a 3.4 téma fenntartása) |
| Védőkorlátok szigorítása teljes audit nélkül | Gyorsabb bevezetni | Elmulaszthat olyan metrikákat, amelyek kitettsége kevésbé nyilvánvaló, mint a legvilágosabb esetek |

A fő feszültség a **mérési folytonosság és a mérési érvényesség** között van. A szervezetek érthető módon szeretik a megszokott metrikákat a megszokott módon jelenteni, mert a metrikaprogram megváltoztatásának valódi szervezeti költsége és zavara van. De egy olyan metrika további jelentése, amely csendben megszűnt azt mérni, amit korábban, rosszabb a zavarnál: aktív félrevezetés. Oldd fel a feszültséget úgy, hogy ezt pontosan a tudatos, dokumentált governance-változásnak tekintsd, amelyet az 1.4 téma leír: rövid távon zavaró, de szükséges a szervezet metrikáinak őszinteségéhez.

## Kérdések a csapattal való megbeszéléshez

1. **A dashboardunk minden metrikájánál: javuló értéket mutatna-e egy csapat, amely sokat használ MI-támogatást, de nem állít elő több valódi értéket?** Menj végig a metrikáidon kifejezetten ezzel a teszttel. Azok, amelyek megbuknak rajta, a legfontosabb jelöltek felülvizsgált védőkorlátra vagy kivezetésre.

2. **Nőtt-e a telepítési gyakoriságunk vagy a commitok száma az MI kódolási asszisztensek bevezetése óta, és megnéztük-e, hogy a változtatási hibaarány vagy a hibaarány ennek megfelelően mozdult-e?** Húzd elő a tényleges párosított adatokat ahelyett, hogy akár pozitív, akár negatív kimenetelt feltételeznél.

3. **Tartja-e a lépést a kódáttekintési kapacitásunk az MI-támogatott kód mennyiségének bármilyen növekedésével, vagy az áttekintés mélysége csendben erodál a megnövekedett nyomás alatt?** Vizsgáld meg az áttekintési szakasz metrikáit (2.9 téma) kifejezetten a gumibélyegzős kockázat erősödésének jeleire.

4. **Címkézzük-e a hibákat aszerint, hogy az eredeti kód lényegében MI-generált volt-e, és ha igen, mit mutat eddig az adat?** Ha jelenleg nem címkézed, beszéljétek meg, mi kellene a kezdéshez, mert ez az adat közvetlenül releváns annak eldöntéséhez, hogy a történeti minőségi feltevéseink még érvényesek-e.

5. **Tudatosan újra átnéztük-e a metrikachartánkat (1.4 téma) e váltás fényében, vagy a mérési gyakorlatunk egyszerűen változatlanul folytatódott?** Ha az őszinte válasz az utóbbi, pontosan ezt a rést ajánlja ez a téma elsőként bezárni.

6. **Hogyan nézne ki, ha a szervezetünket felkészületlenül érné ez a váltás, és olyan metrikát ünnepelnénk, amely már rég nem jelentette azt, amit gondoltunk?** Ez a konkrét, kissé kellemetlen gondolatkísérlet segít motiválni az ebben a témában ajánlott auditot azelőtt, nem azután, hogy ez a forgatókönyv ténylegesen megtörténik.

## Ágazati szemszög

**Startup.** A gyors MI-eszközbevezetés gyakori, és gyakran valódi versenyelőny, de ugyanaz a sebesség, amely a bevezetést vonzóvá teszi, valószínűbbé teszi a vizsgálatlan metrikasodródást. Építsd be a szokást, hogy az MI-bevezetésből jelentett hatékonysági nyereségek mellett ellenőrzöd az eredménymetrikákat is (5. rész), ahelyett hogy önmagában a sebességjavulást jelentenéd.

**Kisvállalkozás.** Az MI kódolási támogatás érdemben bővítheti egy kis csapat kapacitását, de ellenállj a kísértésnek, hogy a nyers kibocsátásnövekedést minőségi védőkorlátok ellenőrzése nélkül egyértelmű sikerként jelentsd. Egy kis csapatnak kevesebb kapacitása van egy észrevétlen minőségi probléma felszívására, mint egy nagyobb, több redundanciával rendelkező szervezetnek.

**Nagyvállalat.** A kockázat léptéke itt jelentősen összetevődik, mert az MI-bevezetés tucatnyi vagy száznyi csapatnál egyszerre eltolhatja a metrikák érvényességét szervezet szinten, mielőtt bármelyik csapat helyben észrevenné a mintát. A témában ajánlott metrikakészlet-auditot szervezeti szinten végezd, ne csak csapatonként, és a governance-t (1.4 téma) központilag és kifejezetten frissítsd.

**Közszféra.** A közszféra szervezetei gyakran óvatosabban vezetnek be új technológiát, de a kormányzati technológiai programok értékeléséhez használt metrikák és viszonyítási értékek gyakran a magánszektor iparági adataiból származnak vagy azokhoz viszonyítanak, és ezek az adatok maguk is ugyanezen a nyomás alatt tolódnak el. Értsd meg kifejezetten, hogy a viszonyításra használt iparági értékek közül melyeket érintette ez a váltás, mielőtt elvárások felállítására vagy teljesítmény értékelésére használod őket.

## Példák

**Nagyvállalat.** Egy pénzügyi technológiai vállalat mérnökvezetése észrevette, hogy a telepítési gyakoriság közel 40%-kal emelkedett a széles körű MI kódolási asszisztens-bevezetést követő két negyedévben, és ezt kezdetben egyértelmű termelékenységi nyereségként jelentette egy igazgatósági prezentációban. Egy alaposabb utóelemzés, amelyet egy szkeptikus igazgatósági tag kérdése indított el arról, hogy ellenőrizték-e a minőséget, kiderítette, hogy a változtatási hibaarány majdnem lépést tartva emelkedett a telepítési gyakorisággal, és a látszólagos nyereséget teljesen semlegesítette, amint a párosított stabilitási metrikát tényleg megvizsgálták. A vállalat felülvizsgált riportolása ma kifejezetten együtt mutatja a telepítési gyakoriságot és a változtatási hibaarányt, valahányszor MI-támogatott termelékenységi állítást tesz, elkerülve a korábbi, majdnem nyilvánossá vált, félrevezető állítást.

**Közszféra.** Egy tagállami kormány IT-részlege az MI kódolási támogatást kísérletezte néhány mérnökcsapatánál, és azt találta, hogy az egy mérnökre jutó nyers kódkibocsátás jelentősen nőtt, amit egy belső kísérleti értékelés eleinte kedvezően idézett. Egy alaposabb elemzés, amelyet az indított el, hogy a könyv útmutatását beépítették a részleg értékelési keretrendszerébe, külön megvizsgálta a kiszökött hibák arányát az MI-támogatott és az MI nélküli munkánál, és mérsékelten magasabb hibaarányt talált az MI-támogatott csoportban, amely a szélsőeset-kezelésre koncentrálódott: szokatlan polgári körülményekre, amelyekkel az MI-eszköz a tanítás során nem találkozott. Ez a megállapítás nem állította meg a kísérletet, de konkrét, célzott áttekintési szigort eredményezett az MI-támogatott, jogosultsági szélsőeset-logikát érintő változtatásoknál, megcélozva azt a valódi kockázatot, amelyet a nyers kibocsátásmetrika önmagában sosem fedett volna fel.

## Üzleti érv: indítékok, ROI és TCO

Az audit proaktív elvégzésének megtérülése az, hogy elkerüljük a nyilvános vagy igazgatósági szintű szégyent azért, mert olyan metrikát jelentettünk, amelyről vizsgálat alatt kiderül, hogy semmi valódit nem mért. A fenti pénzügyi technológiai példa majdnem pontosan ezt a forgatókönyvet hozta létre. Az a szervezet, amely a váltás elé kerül, megőrzi hitelét az érdekeltek előtt. Az, amelyet üres metrika jelentésén kapnak, valódi, és nagyrészt elkerülhető hírnévvesztéssel fizet.

A teljes birtoklási költség a meglévő metrikakészlet auditálására, a védőkorlátok szigorítására és a governance-dokumentáció frissítésére fordított elemzési erőfeszítés. Ez egyszeri, mérsékelt befektetés ahhoz a folyamatos kockázathoz képest, amelyet olyan metrikák további jelentése jelent, amelyek csendben megszűntek azt mérni, amit állítanak. A költség alacsonyabb szinten ismétlődő is, mert a váltás folyamatos, nem egyszeri esemény, és az eszközök és a bevezetési minták fejlődésével az időszakos újraaudit ésszerű, tartós része a metrikagovernance ütemének.

## Antiminták és buktatók

- **Az MI-korszak előtti aktivitásmetrikák változatlan és kritikátlan további jelentése:** azt kockáztatja, hogy olyan metrikát ünnepelünk, amely csendben megszűnt a valódi értékkel korrelálni.
- **A telepítési gyakoriság vagy a kibocsátás mennyiségének növekedése párosított stabilitási védőkorlát nélküli jelentése:** megismétli a 2.10 téma figyelmeztetését, az MI-támogatott fejlesztésben jóval nagyobb tétekkel.
- **Annak feltételezése, hogy az MI-generált kód hibaprofilja megegyezik az emberi kódéval, ellenőrzés nélkül:** teszteletlen feltevés, amely aktívan hibás lehet.
- **Az áttekintés mélységének csendes erodálása a megnövekedett MI-generált kódmennyiség alatt:** a 2.9 téma gumibélyegzős kockázata, felerősítve.
- **A váltás egyszeri igazításként kezelése folyamatos téma helyett:** az eszközök és a bevezetési minták tovább fejlődnek, és a mérési gyakorlatnak lépést kell tartania.
- **Iparági viszonyítási értékekhez hasonlítás anélkül, hogy megértenénk, maguk a viszonyítási értékek eltolódtak-e ugyanezen a nyomás alatt:** a relatív teljesítmény hamis érzetét kockáztatja.

## Érettségi modell

- **1. szint, Kezdeti:** Az MI előtti metrikákat változatlanul jelentik, azzal a tudatosság nélkül, hogy az MI-bevezetés érinthette az érvényességüket.
- **2. szint, Fejlődő:** Van némi tudatosság a váltásról, de a meglévő metrikakészlet szisztematikus auditját nem végezték el.
- **3. szint, Szabványosított:** Teljes metrikakészlet-auditot végeztek, a védőkorlátokat szigorították, és a metrikákat érintettként vagy ellenállóként dokumentálták, szervezet szinten.
- **4. szint, Irányított:** A hibákat és a minőségi eredményeket aktívan címkézik és követik az MI-támogatás szintje szerint, hogy teszteljék, ne feltételezzék, hogy a szervezet történeti minőségi összefüggései még érvényesek.
- **5. szint, Összehangolt:** A szervezetnek érett, folyamatos gyakorlata van a metrikái újravizsgálatára, ahogy az MI-eszközök és a bevezetési minták tovább fejlődnek, és rá tud mutatni konkrét governance-döntésekre, amelyeket proaktívan hoztak e váltásra válaszul, nem reaktívan egy probléma felbukkanása után.

## Ötletek a vitához

1. Melyik jelenlegi metrikánk hízelegne a legjobban egy csapatnak, amely sokat használ MI-támogatást, de nem állít elő több valódi értéket?
2. Nőtt-e a telepítési gyakoriságunk az MI-bevezetés óta, és mozdult-e vele a változtatási hibaarány?
3. Címkézzük-e a minőségi eredményeket az MI-támogatás szintje szerint, és mit mutatna ez az adat?
4. Lépést tart-e az áttekintési kapacitásunk az MI-generált kód mennyiségének bármilyen növekedésével?
5. Melyik iparági viszonyítási értékhez hasonlítjuk jelenleg magunkat, és eltolódott-e maga is ezen a nyomás alatt?

## A legfontosabb tanulságok

- A generatív MI **paradigmaváltás abban, hogy több meglévő metrika mit mér**, nem fokozatos eszközváltozás. Néhány metrika csendben megszűnt azt jelenteni, amit korábban.
- **Az aktivitás- és a nyers kibocsátásmetrikák a legkitettebbek.** Az eredménymetrikák (5. rész) viszonylag ellenállóak.
- **Szigorítsd a védőkorlátokat, különösen a változtatási hibaarányét**, az MI-támogatott fejlesztés bevezetésének arányában.
- **Teszteld, ne feltételezd, hogy az MI-generált kód hibaprofilja eltér-e** az emberi kódétól, címkézett kiszökött hiba adatokkal.
- Kezeld ezt **folyamatos, nem egyszeri governance-kérdésként** (1.4 téma), mert az eszközök és a bevezetési minták tovább fejlődnek.

## Források és ajánlott olvasmányok

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez Humble és Gene Kim (az eredményalapú mérés alapja, amelynek jelentősége e téma érvelése szerint e váltás alatt nő, nem csökken).
- A GitHub kutatása az MI páros programozásról és a fejlesztői termelékenységről (iparági kutatás az MI-támogatott fejlesztés mérhető hatásairól).
- A Google Cloud DevOps Research and Assessment programja, [dora.dev](https://dora.dev/) (folyamatos State of DevOps kutatás, amely az utóbbi években az MI-bevezetés megállapításait is magában foglalja).
- *The Tyranny of Metrics*, Jerry Z. Muller (a mennyiségalapú metrikákkal szembeni szkepticizmus általános indoklása, közvetlenül releváns, ahogy a kibocsátás mennyisége olcsóvá válik).
