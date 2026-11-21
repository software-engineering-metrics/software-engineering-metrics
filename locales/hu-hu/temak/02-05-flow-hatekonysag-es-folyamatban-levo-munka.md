# 2.5 Flow-hatékonyság és folyamatban lévő munka

## Áttekintés és indíték

A **flow-hatékonyság** az aktív idő és a teljes idő aránya egy munkadarabnál: ha egy
változtatás tíz órát tölt aktív kódolással, áttekintéssel és teszteléssel, de a
teljes útja során összesen kilencven órát tölt tétlenül a sorokban, a
flow-hatékonyság 10%. A legtöbb szoftverszállítási csővezeték, őszintén mérve, 10%
és 25% közötti flow-hatékonyságra jön ki, ami meglepi azokat, akik azt várják, hogy
az erőfeszítés dominál. A legtöbb szállítási rendszerben a domináns költség nem az,
mennyi ideig tart a munkát elvégezni, hanem az, mennyi ideig vár a munka az
elkezdésére.

A **[folyamatban lévő munka](https://en.wikipedia.org/wiki/Work_in_process)** (WIP)
az egy időben ténylegesen dolgozott elemek száma egy csapatban vagy rendszerben,
ugyanaz a mennyiség, amelyet a 2.4 téma „flow-terhelésnek" nevez. A téma mögötti
ellenintuitív megállapítás, amelyet az operációmenedzsment évtizedes kutatása
támaszt alá, és amelyet a szoftverszállításra a kanban és a sorbanállás-elmélet
formalizált, az, hogy a WIP korlátozása hajlamos *növelni* az átbocsátást, nem
csökkenteni, mert kevesebb egyidejűleg folyamatban lévő munka kevesebb
kontextusváltást, rövidebb sorokat és elemenként gyorsabb befejezést jelent, annak
ellenére, hogy úgy érződik, hogy kevesebb munka egyidejű végzése összességében
kevesebb kibocsátást kellene hogy hozzon.

A nagy csapatoknál a flow-hatékonyság megértése szinte minden szállítási problémát
átfogalmaz „az embereknek gyorsabban kell dolgozniuk"-ról arra, hogy „a munkának
kevesebbet kell várnia". Ez az átfogalmazás azért számít, mert az első keretezés az
egyénekre gyakorolt nyomást hívja, pontosan azt a csapdát, amelyről a 2.6 téma
figyelmeztet, a második pedig a sorbanállási szerkezet, az áttekintési kapacitás és
az egyszerre elindított munka mennyiségének vizsgálatát, ahol a valódi, fenntartható
javulás általában lakik. A közös csapatokon át sok párhuzamos kezdeményezést
egyensúlyozó nagyvállalatok különösen hajlamosak a magas WIP-re és az alacsony
flow-hatékonyságra, mert az új munka megkezdése mindig haladásnak érződik, még akkor
is, ha csendben lassít mindent, ami már folyamatban van.

## Alapelvek

- **A legtöbb szállítási csővezetéken a várakozási idő uralkodik, nem az aktív
  erőfeszítés.** A 25% alatti flow-hatékonyság tipikus, nem a rossz csapat jele.
- **A folyamatban lévő munka korlátozása hajlamos növelni az átbocsátást,** nem
  csökkenteni, a kontextusváltás csökkentésével és a sorok rövidítésével.
- **Az új munka elkezdése haladásnak érződik; a munka befejezése az, ami valóban
  értéket szállít.** Ez nem ugyanaz, és a szervezetek rutinszerűen összekeverik.
- **A magas WIP gyakran láthatatlan, amíg meg nem mérik.** Egy csapat sokkal több
  párhuzamos munkát zsonglőrködhet, mint bárki egyénileg észreveszi.
- **Ez rendszerszintű metrika, nem egyéni.** A WIP-korlátok alkalmazása egyének
  büntetésére a technika egész lényegét félreérti.

## Ajánlások

### Mérd a flow-hatékonyságot, mielőtt feltételeznéd, hogy az erőfeszítés a szűk keresztmetszet

Számold ki az aktív idő és az összes eltelt idő arányát a közelmúltbeli változtatások
reprezentatív mintájára, a 2.6 téma ciklusidő-szakaszadataival. A legtöbb csapat,
amely először méri ezt, meglepődik, milyen alacsony a szám, és ez a meglepetés
maga is értékes: a figyelmet a „dolgozz keményebben"-ről a „csökkentsd a
sorbanállást" felé tereli, ami szinte mindig a produktívabb emelő.

### Állíts be kifejezett folyamatban lévő munka korlátot, és láthatóan érvényesítsd

Korlátozd, hány elem lehet egy csapatnál vagy egy egyénnél egyszerre aktívan
folyamatban, egy közös táblán láthatóan (a fizikai vagy digitális kanban tábla a
klasszikus megvalósítás). Amikor a korlátot elérték, a csapat következő lépése az,
hogy segít befejezni valamit, ami már folyamatban van, nem hogy valami újat
elkezd. Ez az egyetlen gyakorlat, amelyet a lean gyártásból kölcsönöztek, és a
kanban formalizált, az egyik legkövetkezetesebben hatékony flow-javítás, amely egy
szoftvercsapat számára elérhető, és szinte semmibe nem kerül bevezetni.

### Kezeld a WIP-korlátot rendszerkorlátként, ne egyéni kvótaként

A WIP-korlát azt szabályozza, mennyi munka van egyszerre folyamatban a *rendszerben*
(egy csapatban, egy közös áttekintési sorban, egy közös környezetben), nem azt, hogy
egy adott ember mihez nyúlhat. A korlát egyéni teljesítménykvótaként való
alkalmazása, „csak két jegyed lehet nyitva", félreértelmezi a technikát, és éppen
azt az egyéni szintű kijátszást kockáztatja, amelyről a könyv végig figyelmeztet.
A korlát az egész rendszeren át tartó flow védelmére létezik, és az érvényesítésének
csapatnormának kell lennie, nem személyes plafonnak.

### Vizsgáld meg, miért áll a munka tétlenül, ne csak azt, mennyi ideig

Amikor a flow-hatékonysági elemzés hosszú várakozási időket tár fel, kérdezd meg
konkrétan, miért: azért vár a munka, mert egy áttekintő nem elérhető, mert egy közös
tesztkörnyezet foglalt, mert egy másik csapattól függő elem még nem érkezett meg.
Ezek mindegyikének más a javítása. Az általános „csökkentsd a várakozási időt"
utasítás ennek a konkrét vizsgálatnak a nélkül általános, eredménytelen válaszokat
szül.

### Figyelj arra, hogy a WIP az első javulás után ne kússzon vissza

Azok a csapatok, amelyek sikeresen bevezetnek egy WIP-korlátot, gyakran látják, hogy
idővel erodálódik, ahogy visszatér a nyomás új kezdeményezések indítására, „csak most
az egyszer, ezt a sürgős dolgot is el kell kezdenünk". Kezelj minden WIP-korlát
kivételt tudatos, látható döntésként, megadott indokkal, ne csendes, rutinszerű
felülírásként, hogy a korlát fegyelme csendben ne romoljon vissza az eredeti
állapotába.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs WIP-korlát | Rugalmasnak érződik; nincs súrlódás új munka indításakor | A kontextusváltás és a sorbanállás csendben mindent lelassít |
| Csapatszintű WIP-korlát | Mérhetően javítja az átbocsátást és a flow-hatékonyságot | Fegyelmet igényel az érvényesítés, különösen határidő-nyomás alatt |
| Egyéni szintű WIP-kvóta | Egyszerű kimondani | Félreérti a technikát; egyéni kijátszást kockáztat |
| Szigorú, hajlíthatatlan WIP-korlát | Maximális flow-hatékonysági haszon | Merevnek érződhet valóban sürgős, kivételes helyzetekben |

A központi feszültség a **rugalmasság és a flow** között áll fenn. Az új munka
megkezdése, valahányszor sürgősnek látszik, reagálókésznek érződik, de a
flow-hatékonysági és WIP-kutatás következetesen azt mutatja, hogy ez a rugalmasság
azon áron jön, hogy semmi nem fejeződik be gyorsan, mert több párhuzamos munka
hosszabb sorokat és több kontextusváltást jelent mindennek, ami már folyamatban van.
Úgy oldd fel a feszültséget, hogy a csapatszintű WIP-korlátot fogadod el
alapértelmezésként, tudatos, látható és ritka kivételfolyamattal a valódi
vészhelyzetekre, a merev, kivétel nélküli szabály és a korlátlan, rugalmas
szabadjáték helyett.

## Kérdések a csapattal való megbeszéléshez

1. **Mi a tényleges flow-hatékonyságunk, valódi ciklusidő-adatokból mérve, és
   meglep-e ez a szám?** A legtöbb csapat soha nem számolta ki ezt, és sokkal
   magasabbnak feltételezi, mint ami kiderül. Húzz egy mintát a közelmúltbeli
   változtatásokból, és őszintén számold ki az arányt, mielőtt bármi mást
   megbeszélnétek ebben a témában.

2. **Mennyi folyamatban lévő munkánk van valójában most, az egész csapatban, és
   tudta-e bárki ezt a számot a megszámlálás előtt?** A magas WIP gyakran
   láthatatlan, amíg kifejezetten meg nem mérik, mert minden egyén csak a saját
   szeletét látja. Számold meg mindazt, ami jelenleg folyamatban van, azt a munkát
   is beleértve, amelyhez ma senki nem nyúl aktívan.

3. **Ha bevezetnénk WIP-korlátot, mit kellene megváltoztatnunk abban, hogyan
   reagálunk egy új sürgős kérésre?** Ez a kérdés felszínre hozza a valódi
   szervezeti szokást, az új munka reflexszerű megkezdését, amelyet a WIP-korlát
   megszakítani hivatott, és érdemes megbeszélni a korlát érvényesítésének
   megkísérlése előtt, nem utána.

4. **Amikor a munka tétlenül áll a csővezetékünkben, mi a konkrét ok, és ugyanaz
   az ok minden alkalommal?** Az általános érzet, hogy „a dolgok várakoznak",
   kevésbé hasznos, mint egy konkrét, visszatérő ok: egy nem elérhető áttekintő,
   egy foglalt közös környezet, egy csapatok közötti függőség. Nevezd meg a tényleges
   mintát valódi, közelmúltbeli példákból.

5. **Bevezettünk-e valaha WIP-korlátot, majd néztük, ahogy csendben erodálódik a
   kivételeken át?** Ez rendkívül gyakori, és érdemes őszintén megbeszélni: milyen
   nyomás okozta az első kivételt, és a kivételek az új normává váltak-e anélkül,
   hogy ezt bárki kifejezetten eldöntötte volna.

6. **A mi környezetünkben a WIP-korlátot egyéni, csapat- vagy közös erőforrás
   szinten (például áttekintési sor vagy tesztkörnyezet) kellene alkalmazni?** A
   különböző szűk keresztmetszetek különböző szinten kérnek korlátot, és a korlát
   rossz szinten való alkalmazása, egyéni kvóták közös sor plafonja helyett,
   az egész technikát félreértheti.

## Ágazati szemszög

**Startup.** Kevés embernél a WIP gyakran természetesen alacsony, egyszerűen mert
nincs elég mérnök, hogy egyszerre sok munkát elkezdjenek. A kockázat az ellenkezője:
egy alapító vagy vezető mérnök személyesen sokkal több párhuzamos kezdeményezést
zsonglőrködik, mint amennyit észrevesz, amit érdemes mérni formális kanban-eszköz
nélkül is.

**Kisvállalkozás.** Egy egyszerű, látható tábla, fizikai vagy alapvető digitális
eszköz, kifejezett oszlopkorláttal elég ahhoz, hogy a haszon nagy részét
megszerezd, kifinomult flow-metrika-eszközökbe való befektetés nélkül. Kezdj
bőkezű korláttal, és fokozatosan szigorítsd, ahogy a csapat megszokja a fegyelmet.

**Nagyvállalat.** A magas WIP itt különösen gyakori és különösen költséges, mert sok
párhuzamos stratégiai kezdeményezés verseng ugyanazért a közös mérnöki
kapacitásért, és egy új megkezdése mindig haladásnak látszik annak, aki szponzorálta.
Tedd láthatóvá a WIP-et portfóliószinten, ne csak csapatszinten, hogy a vezetés lássa
még egy kezdeményezés elindításának költségét, mielőtt a jelenlegiek befejeződnének.

**Közszféra.** A többéves programok gyakran hatalmas implicit WIP-et halmoznak fel
sok munkafolyamaton át, amelyek mindegyike külön-külön indokolt, az összegről való
szervezetszintű rálátás nélkül. A portfóliószintű WIP-láthatóság bevezetése, akár
informálisan is, gyakran a legmeggyőzőbb érv a munka sorba rendezése mellett a
mindent párhuzamosan futtatással szemben, mert a magas WIP flow-hatékonysági költsége
láthatóan halmozódik, amint megmérik.

## Példák

**Nagyvállalat.** Egy pénzügyi szolgáltató cég platformcsapata tizennyolc párhuzamos
kezdeményezést zsonglőrködött mindössze tizenkét mérnökkel, ezt a WIP-kapacitás
arányt senki nem számolta ki, amíg egy új mérnöki igazgató közvetlenül nem kérte. A
csapat munkájának flow-hatékonysága 12% alatt mért. A csapat kifejezett WIP-korlátot
vezetett be, két mérnökönként egy aktív kezdeményezést, tudatosan felfüggesztve
több alacsonyabb prioritású kezdeményezést, ahelyett hogy tovább szórta volna
vékonyan a kapacitást. Az átbocsátás, a negyedévente valóban befejezett
kezdeményezések számában mérve, két negyedéven belül több mint megduplázódott,
annak ellenére, hogy a csapat láthatóan „kevesebbet csinált" egy adott pillanatban.

**Közszféra.** Egy nemzeti infrastruktúra-hivatal digitális átalakítási programja a
portfólióján át negyvennél több párhuzamos munkafolyamatot halmozott fel, mindegyiknek
saját szponzora és saját indoklása volt, az összes folyamatban lévő munkáról való
egyetlen rálátás nélkül. Egy programszintű flow-hatékonysági felülvizsgálat azt
találta, hogy a medián munkafolyamat az eltelt idejének kevesebb mint 15%-át töltötte
aktív fejlesztéssel, a többit közös erőforrásokra várva: egy kis központi
architektúra-áttekintő csapatra, egy közös tesztkörnyezetre és ügynökségek közötti
jóváhagyásra. A program kifejezett portfóliószintű WIP-korlátokat vezetett be,
sorba rendezve a munkafolyamatokat, nem futtatva mind a negyvenet párhuzamosan, és
a hivatal saját követése mérhetően gyorsabb befejezést mutatott az aktívan maradt
munkafolyamatoknál, még ha az egyszerre futók teljes száma meredeken esett is.

## Üzleti érv: indítékok, ROI és TCO

A flow-hatékonyság és a WIP tudatos kezelésének megtérülése ellenintuitív, de jól
dokumentált: az átbocsátás hajlamos emelkedni, nem esni, ha a szervezet kevesebbet
csinál egyszerre, mert a kevesebb kontextusváltás és a rövidebb sorok azt jelentik,
hogy minden egyes munkadarab gyorsabban fejeződik be. A fenti pénzügyi szolgáltatói
példa, a párhuzamos munka tudatos csökkentéséből megduplázódott átbocsátás, gyakori
minta, amint a szervezetek ténylegesen mérik és cselekszenek a flow-hatékonyságra,
ahelyett hogy feltételeznék, hogy a több párhuzamos munka mindig több haladást jelent.

A fegyelem bevezetésének teljes költsége többnyire szervezeti, nem technikai: egy
látható tábla, egy elfogadott WIP-korlát, és a fegyelem, hogy nemet mondjunk az új
munka megkezdésére, ha a korlátot elérték. Ezt a fegyelmet nehezebb fenntartani, mint
bevezetni, ezért számít a fenti „figyelj arra, hogy a WIP visszakússzon" ajánlás
ugyanannyira, mint maga a kezdeti bevezetés.

## Antiminták és buktatók

- **Feltételezni, hogy az aktív erőfeszítés uralja a szállítási időt a
  flow-hatékonyság mérése nélkül:** általában téves, és a fejlesztési erőfeszítést a
  rossz emelő felé tereli.
- **A WIP-korlát egyéni kvótaként, nem rendszerkorlátként alkalmazása:** félreérti
  a technikát, és egyéni kijátszást kockáztat.
- **Az új munka reflexszerű megkezdése, mert haladásnak érződik:** az alapszokás,
  amelyet a flow-hatékonyság és a WIP-korlátok megszakítani hivatottak.
- **Hagyni, hogy a WIP-korlát kivételei rutinszerűvé és láthatatlanná váljanak:**
  a fegyelmet az eredeti állapotába erodálja, anélkül hogy bárki szándékosan
  eldöntené.
- **A WIP mérése csak csapatszinten, a portfóliószintű túlterhelés kihagyásával:**
  gyakori sok párhuzamos stratégiai kezdeményezést futtató nagy szervezetekben.
- **Az alacsony flow-hatékonysági szám rossz csapat jelének tekintése:** a legtöbb
  szállítási csővezetéknél tipikus, és a vizsgálat kiindulópontja, nem ítélet.

## Érettségi modell

- **1. szint, Kezdeti:** A folyamatban lévő munkát nem követik; a csapatok reflexszerűen
  kezdenek új munkát, az összes párhuzamos terhelés láthatósága nélkül.
- **2. szint, Fejlődő:** Néhány csapat informális táblát használ, de a WIP-korlátokat
  nem érvényesítik következetesen, és a flow-hatékonyságot soha nem számolják ki.
- **3. szint, Szabványosított:** A csapatoknak kifejezett, látható WIP-korlátjaik
  vannak rendszerszinten, és a flow-hatékonyságot időszakosan mérik valódi
  ciklusidő-adatokból.
- **4. szint, Irányított:** A WIP-korlát kivételeit tudatos, látható döntésként
  követik; a flow-hatékonyságot az idő során az erózióra figyelve monitorozzák, és
  csökkenéskor kivizsgálják.
- **5. szint, Összehangolt:** A WIP látható és kezelt portfóliószinten, nem csak
  csapatszinten, és a szervezet konkrét átbocsátási javulásokra tud mutatni, amelyek
  a párhuzamos munka tudatos csökkentéséből származtak.

## Ötletek a vitához

1. Mi a tényleges flow-hatékonyságunk, őszintén, valódi adatokból kiszámolva?
2. Mennyi folyamatban lévő munkánk van jelenleg, amelyet e beszélgetés előtt senki nem számolt meg?
3. Mire kellene nemet mondanunk egy valódi WIP-korlát érvényesítéséhez?
4. Mi a leggyakoribb egyetlen oka annak, hogy a munka tétlenül áll a csővezetékünkben?
5. A szervezetünk hol láthatatlan a portfóliószintű WIP, és valószínűleg túl magas?

## A legfontosabb tanulságok

- A **flow-hatékonyság**, az aktív idő és a teljes idő aránya, a valódi szállítási
  csővezetékekben jellemzően 25% alatt van; a várakozási idő uralkodik, nem az
  erőfeszítés.
- A **folyamatban lévő munka korlátozása hajlamos növelni az átbocsátást**, nem
  csökkenteni, a kontextusváltás csökkentésével és a sorok rövidítésével.
- Alkalmazd a **WIP-korlátot rendszerkorlátként**, soha nem egyéni kvótaként.
- Vizsgáld meg a **konkrét okot**, amiért a munka tétlenül áll, ahelyett hogy általános
  „csökkentsd a várakozási időt" utasítást adnál.
- Figyelj a WIP-korlátok **rutinkivételeken át való erodálódására**; kezelj minden
  kivételt tudatos, látható döntésként.
- A 2.4 téma **flow-terhelésnek** nevezi ezt a mennyiséget, és a 2.7 téma Little
  törvényeként formalizálja az összefüggést: a folyamatban lévő munka egyenlő az
  érkezési ráta szorozva a ciklusidővel, bármely stabil sorra.

## Források és ajánlott olvasmányok

- *The Principles of Product Development Flow*, Donald G. Reinertsen
  (sorbanállás-elmélet, kötegméret és WIP-korlátok a termékfejlesztésben).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, David J.
  Anderson (az alapmű a WIP-korlátokról és a flow-ról szoftvercsapatok számára).
- *Actionable Agile Metrics for Predictability*, Daniel S. Vacanti
  (flow-hatékonyság mérése és flow-alapú előrejelzés).
- *The Goal*, Eliyahu M. Goldratt (a korlátok elmélete és a helyi elfoglaltság és a
  rendszer átbocsátása közötti ellenintuitív kapcsolat).
