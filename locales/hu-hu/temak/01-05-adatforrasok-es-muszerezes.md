# 1.5 Adatforrások és műszerezés

## Áttekintés és indíték

A metrika csak annyira megbízható, amennyire az alatta lévő adat, és a legtöbb
metrikaprogram sokkal több erőfeszítést fordít a dashboardok tervezésére, mint az
őket tápláló csővezeték ellenőrzésére. Ez fordítva van. A következetlen,
önbevallott vagy csendben elromlott műszerezésre épített, szépen megtervezett
diagram rosszabb, mint semmilyen diagram, mert hitelesnek látszik, miközben téves.
Ez a téma arról a hálátlan alapról szól, amelyet a könyv többi része
feltételez: honnan jönnek valójában a mérnöki adatok, mikor bízzunk az automatikus
műszerezésben az önbevallással szemben, és milyen adatminőségi hibák érvénytelenítik
csendben a metrikát, mielőtt bárki észrevenné.

A szoftverfejlesztési adatok néhány forrástípusból származnak, mindegyiknek
más a megbízhatósági jellemzője. A verziókezelés és a [CI/CD](https://en.wikipedia.org/wiki/CI/CD)
csővezetékek objektív, időbélyeges, nehezen hamisítható nyilvántartást
adnak arról, mi történt valójában. A hibakövetők és projektmenedzsment-eszközök
olyan nyilvántartást adnak, amely azon múlik, hogy az emberek helyesen és
időben frissítik az állapotot, amit gyakran következetlenül tesznek. A
felmérések önbevallott adatot adnak, amely felbecsülhetetlen olyan dolgokhoz,
amelyeket semmilyen rendszer nem lát, például az elégedettséghez, de ki van
téve az emlékezeti torzításnak és a társas kívánatosság hatásának. A
megfigyelhetőségi platformok rendszerszintű telemetriát adnak, amely objektív,
de csak azt fedi le, amit műszereztek. Ha tudod, melyik kategóriából jön egy
metrika adata, tudod, mennyire bízz benne, és milyen hibamódokra figyelj.

Nagyvállalati és kormányzati léptéken az adatminőségi problémák halmozódnak,
mert az adat eredete és a dashboardon való végső felhasználása közötti
távolság több rendszeren, integráción és átalakításon át nő. Egy mező, amely a
forrásrendszerben egyet jelent, finoman mást jelenthet, mire a jelentési
rétegbe ér, és lefelé senki nem veszi észre, mert a szám még hihetőnek tűnik. A
műszerezés helyes megoldása kevésbé izgalmas, mint a keretrendszerek helyes
megoldása, de ez az az alap, amelyre a könyv minden más épül.

## Alapelvek

- **Részesítsd előnyben a műszerezést az önbevallással szemben, ahol a rendszer
  közvetlenül megfigyelheti az eseményt.** A csővezeték telepítési időbélyege
  megbízhatóbb, mint a csapat önbevallott telepítésszáma.
- **Az önbevallást csak arra használd, ami közvetlenül nem figyelhető meg.**
  Az elégedettségnek, az észlelt súrlódásnak és a jóllétnek nincs
  nyilvántartórendszer-beli helyettesítője; kérdezd meg közvetlenül, és tervezd
  jól a felmérést (3.7 téma). Az önbevallást kifejezetten erre a kategóriára
  tartogasd.
- **Minden metrika adatának van forrásrendszere, gyűjtési módszere és ismert
  hibamódja.** Mindhármat dokumentáld, ne csak a definíciót.
- **Az adatminőség csendben romlik.** Az a csővezeték, amely egy éve helyesen
  működött, ma csendben elromolhat, és a dashboard panasz nélkül tovább
  jeleníti a téves számot.
- **Műszerezz az igazság pontján, ne egy átalakítás után.** Az esemény és a
  dashboard közötti minden ugrás esély arra, hogy a jelentés elsodródjon.

## Ajánlások

### Minden metrikát képezz le a tényleges forrásrendszerére, mielőtt megbízol benne

A dashboard minden metrikájához nevezd meg a konkrét rendszert, amely a mögöttes
eseményt létrehozza: a CI/CD csővezetéket a telepítési eseményekhez, a
verziókezelő tárhelyet a commit- és merge-eseményekhez, az incidenskövetőt a
kiesési nyilvántartásokhoz, a felmérési platformot az önbevallott
elégedettséghez. Ha nem tudod megnevezni a pontos rendszert, nem tudod
valójában, honnan jön a szám, és nem tudod értékelni a megbízhatóságát. Ez a
leképezés az 1.4 téma governance-chartájának előfeltétele, nem külön gyakorlat.

### Az eseménynél műszerezz, ne a jelentésnél

A legmegbízhatóbb adat az eseményt automatikusan, a megtörténtének pillanatában
rögzíti: egy csővezeték a telepítést abban a pillanatban rögzíti, amikor
befejeződik, egy verziókezelő rendszer a merge-et abban a pillanatban, amikor
landol. Az az adat, amely azon múlik, hogy egy ember utólag eszébe jusson
frissíteni egy állapotmezőt, egy jegyet „késznek" jelölni, egy telepítést
kézzel naplózni egy táblázatban, annál pontatlanabb, minél messzebb van a
tényleges eseménytől és minél elfoglaltabb a felelős személy. Ahol létezik
automatikus esemény, azt részesítsd előnyben ugyanazon tény emberi bevallású
közelítő mutatójával szemben.

### A felméréseket arra tartogasd, amit csak egy ember mondhat meg

Néhány dolog valóban nem figyelhető meg a rendszertelemetriából: hogy egy
mérnök úgy érzi-e, a munkája értelmes, hogy egy folyamat frusztrálónak
érződik-e, hogy nő-e a kiégés kockázata. Ezekhez közvetlenül kérdezni kell, és
a jól megtervezett felmérés (a 3.7 téma a mechanikát tárgyalja) a megfelelő
eszköz. A hiba az, ha az önbevallást olyasmire használják, amit egy rendszer
közvetlenül megfigyelhetne, például arra kérik a mérnököket, hogy becsüljék meg
a saját telepítési gyakoriságukat, ahelyett hogy a csővezetékből lehívnák,
ami szükségtelen zajt és torzítást visz olyan adatba, amely objektív lehetett volna.

### Építs adatminőségi ellenőrzéseket magába a csővezetékbe

A metrikacsővezetékeket ugyanolyan szigorral kezeld, mint az éles kódot: adj
hozzá automatikus ellenőrzéseket, amelyek jelzik, ha egy forrás leáll az
adatküldéssel, ha egy mező eloszlása váratlanul eltolódik, vagy ha egy
számláló váratlanul nullára esik. Az a dashboard, amely csendben elavult vagy
elromlott adatot jelenít meg, mintha friss lenne, rosszabb, mint az, amely
láthatóan azt mutatja, hogy „az adat nem elérhető", mert az első láthatatlanul
rontja a bizalmat, a második legalább igazat mond a saját korlátairól.

### Dokumentáld a gyűjtési módszert a definíció mellett

A metrika definíciója („változtatások átfutási ideje") nem teljes a gyűjtési
módszere nélkül (a verziókezelésben az első commit időbélyegétől a csővezetékben
az éles telepítés időbélyegéig mérve, a hotfix ágakat kivéve). Két csapat,
amelynek ugyanaz a definíciója, de eltérő a gyűjtési módszere, továbbra is
összehasonlíthatatlan számokat állít elő. Mindkettőt rögzítsd az 1.4 téma
metrikachartájában, és bármelyik megváltoztatását kezeld ugyanazt a dokumentált
felülvizsgálatot igénylő változtatásként.

## Kompromisszumok: előnyök és hátrányok

| Forrástípus | Előnyök | Hátrányok |
| --- | --- | --- |
| Automatikus csővezeték-műszerezés (CI/CD, verziókezelés) | Objektív, időbélyeges, nehezen hamisítható, kis folyamatos erőfeszítés | Előzetes mérnöki befektetést igényel az építése és karbantartása |
| Hibakövető és projektmenedzsment-adatok | Széles körben elérhető, ismerős a csapatoknak | Az emberi gondosságon múlik; csapatok között gyakran következetlen |
| Felmérések és önbevallás | Egyetlen forrás a szubjektív élményhez (elégedettség, jóllét) | Emlékezeti torzítás, társas kívánatossági torzítás, válaszfáradtság |
| Megfigyelhetőségi és telemetriai platformok | Gazdag, valós idejű, rendszerszintű jel | Csak azt fedi le, amit kifejezetten műszereztek; léptéken drága lehet |

A központi feszültség az **objektivitás és a lefedettség** között áll fenn. Az
automatikus műszerezés a legmegbízhatóbb forrás, de a szubjektív élményt egyáltalán
nem látja, míg a felmérések pontosan azt érik el, amit az automatizálás nem, de
valós torzítási kockázatot hordoznak. Úgy oldd fel a feszültséget, hogy
automatikus műszerezést használsz, ahol egy esemény közvetlenül megfigyelhető, az
önbevallást pedig kifejezetten és csakis arra tartogatod, amihez valóban
embert kell kérdezni, soha nem lusta pótlékként olyan adatra, amelyet egy rendszer
megadhatott volna.

## Kérdések a csapattal való megbeszéléshez

1. **A legfontosabb öt metrikánknál meg tudjuk nevezni a pontos
   forrásrendszert és gyűjtési módszert, vagy úgy feltételezünk egy
   definíciót, hogy nem tudjuk, honnan jön valójában az adat?** Ez meglepően
   gyakori hiány: a metrikát egy keretrendszerből vagy egy szállító alapértelmezett
   dashboardjáról veszik át, és a jelenlegi csapatból senki nem tudja, melyik
   rendszer állítja elő a mögöttes adatot vagy hogyan. Kövessétek nyomon
   mindegyiket az eredetéig csoportos gyakorlatként.

2. **Melyik metrikánk támaszkodik önbevallásra olyasmihez, amit egy rendszer
   közvetlenül megfigyelhetne, és mi kellene ahhoz, hogy az önbevallást valódi
   műszerezéssel váltsuk fel?** Az önbevallott telepítésszám, az önbevallott
   ledolgozott órák és az önbecsült ciklusidő mind gyakori példák arra, hogy
   rossz adatforrást használnak olyasmire, amit az automatizálás megbízhatóbban
   rögzíthetne. Azonosítsd ezeket, és elsőként a legnagyobb téttel bírókat
   cseréld le.

3. **Honnan tudnánk, hogy az egyik adatcsővezetékünk csendben elromlott?** A
   legtöbb szervezet csak akkor fedez fel egy elromlott metrikacsővezetéket,
   amikor valaki észreveszi, hogy egy szám hihetetlennek látszik, ami hónapokig
   is eltarthat. Beszéljétek meg, van-e ma bármelyik csővezetéketeknek
   automatikus egészségellenőrzése, és ha nincs, melyiknek van rá a leginkább
   szüksége elsőként.

4. **Hol változtatta meg a rendszerek közötti átalakítás egy metrika jelentését
   anélkül, hogy bárki szándékosan eldöntötte volna?** Egy mező, amely a
   forrásrendszerben egyet jelent, finoman mást jelenthet egy integráció vagy
   migráció után, és az eredő szám hihetőnek tűnhet, miközben téves. Járd végig a
   legnagyobb következményű metrikád teljes adatútját, és keress átalakítási
   pontokat.

5. **A metrikachartánkban dokumentáljuk a gyűjtési módszereket, nem csak a
   definíciókat?** Két csapat osztozhat egy metrika nevén és definícióján, de
   különböző gyűjtési módszerekből számolhatja, így olyan számokat kapnak,
   amelyek valójában nem összehasonlíthatók. Egy mintán auditáld a chartáidat
   kifejezetten erre a hiányra.

6. **Hogyan különböztetjük meg a valódi trendet az adatminőségi műterméktől,
   amikor egy szám váratlanul elmozdul?** Egy metrika hirtelen eltolódása gyakran
   vagy valódi változás, vagy elromlott csővezeték első jele, és a kettő
   megkülönböztetéséhez elég jól kell ismerni az adatforrást a gyors
   vizsgálathoz. Beszéljétek meg a csapatotok tényleges folyamatát az utolsó
   megmagyarázatlan metrikaeltolódásra, amellyel találkoztatok.

## Ágazati szemszög

**Startup.** Kis stack mellett a legtöbb metrikád közvetlenül a CI/CD
szolgáltatódtól, a verziókezelő tárhelytől és egy könnyű felmérési eszköztől
jöhet, egyedi csővezetékek építése nélkül. A kockázat az, hogy még az alapvető
egészségellenőrzéseket is kihagyják, mert a csapat gyorsan halad; egy
ötperces automatikus ellenőrzés, hogy egy adatforrás még küld-e eseményeket,
olcsó biztosítás a csendes vakrepülés ellen.

**Kisvállalkozás.** Támaszkodj a meglévő eszközeid beépített jelentéseire ahelyett,
hogy olyan egyedi adatcsővezetékeket építenél, amelyek karbantartására nincs
kapacitásod. Légy kifejezett abban, mely számok jönnek automatikus
rendszerekből, és melyek azok a becslések, amelyeket valaki beír egy
táblázatba, mert a kettő nagyon különböző megbízhatóságú, még ha ugyanarra az
oldalra kerülnek is.

**Nagyvállalat.** Az adatminőségi problémák halmozódnak az integrációkon,
migrációkon és üzletági egységek határain át. Fektess központosított, jól
felügyelt adatcsővezetékekbe a legnagyobb következményű metrikáidhoz, építs
automatikus adatminőségi ellenőrzéseket szokásos gyakorlatként, és auditáld a
gyűjtési módszereket, ne csak a definíciókat, valahányszor üzletági egységek
metrikáit hasonlítod össze.

**Közszféra.** Az adatok eredete jogi és audit súlyt hordozhat: egy közzétett
teljesítményadatnak szükség lehet túlélnie egy külső auditot, nem csak az
értéke, hanem a teljes gyűjtési lánca tekintetében. Dokumentáld kifejezetten
az adatok származását, őrizd meg a korábbi gyűjtésimódszer-nyilvántartásokat
akkor is, ha a módszertan megváltozik, és légy kész pontosan bemutatni, hogyan
készült egy szám, nem csak azt, hogy jelenleg mit mutat.

## Példák

**Nagyvállalat.** Egy pénzügyi szolgáltató cég mérnöki vezetése két éven át követte
a „változtatások átfutási idejét", mielőtt felfedezte volna, hogy egy tizennyolc
hónappal korábbi adatcsővezeték-migráció csendben az első commitról a pull
request létrehozására cserélte az időbélyeg forrását, ami minden csapatnál
átlagosan több órával rövidítette a látszólagos átfutási időt, anélkül hogy
bárki észrevette vagy jóváhagyta volna a változást. A megoldás egy
adatminőségi ellenőrzést vezetett be, amely hétről hétre összehasonlítja minden
metrika eloszlását, és a statisztikailag szokatlan eltolódásokat emberi
felülvizsgálatra jelzi, és a következő évben további két csendes
csővezeték-hibát kapott el.

**Közszféra.** Egy közlekedési hivatal nyilvános szolgáltatásmegbízhatósági
dashboardja automatikus szenzortelemetria és a regionális irodák kézzel
bevitt incidensjelentéseinek keverékére támaszkodott. Egy audit azt találta, hogy
a kisebb személyzeti kapacitású régiók rendszeresen alulbejelentették a
kisebb incidenseket, nem tisztességtelenségből, hanem mert a kézi bevitel
időért versengett sürgősebb munkával, ami azt jelentette, hogy a közzétett
megbízhatósági adat pontosan azokban a régiókban volt jobb a valóságnál,
amelyek a legkevésbé engedhették meg maguknak, hogy az alulfinanszírozott
karbantartás észrevétlen maradjon. A hivatal megoldása a kézi incidensrögzítést
szenzor által kiváltott automatikus naplózásra cserélte, ahol lehetséges, és a
közzétett adat mellé dokumentált becslést tett a kézi jelentés lefedettségéről.

## Üzleti érv: indítékok, ROI és TCO

A szilárd műszerezés megtérülése a bizalom: az a vezetői csapat, amely bízik az
adataiban, határozottan cselekedhet rájuk, míg az a csapat, amelyet megégetett
egy csendben elromlott csővezeték, minden számot megkérdőjelez, ami lassítja
minden metrikákon alapuló döntést. Ez a bizalomvesztés drága és nehéz
helyrehozni, és gyakran sokkal tovább tart újjáépíteni, mint amennyibe az
eredeti műszerezési beruházás került volna.

A jó műszerezés teljes birtoklási költsége magában foglalja a megbízható
csővezetékek felépítésének előzetes mérnöki munkáját és az adatminőség-felügyelet
folyamatos költségét, és mindkettőbe könnyű alulbefektetni, mert egyik sem
hoz létre saját látható dashboard-csempét. Ez az alulbefektetés hamis
takarékosság: egy csendben elromlott csővezeték felfedezésének költsége,
miután hónapokig rossz adatok alapján hoztak döntéseket, sokkal magasabb, mint
azoknak az egészségellenőrzéseknek az építési költsége, amelyek az első napon
elkapták volna.

## Antiminták és buktatók

- **Megbízni egy számban a forrásrendszerének ismerete nélkül:** keretrendszerből
  vagy szállítói alapértelmezésből átvett metrika, amelynek adatai eredetét
  senki nem követte nyomon.
- **Önbevallani azt, amit egy rendszer közvetlenül megfigyelhetne:** szükségtelen
  zajt és torzítást visz olyan adatba, amely objektív lehetett volna.
- **Nincs automatikus adatminőségi ellenőrzés a metrikacsővezetéken:** egy
  csendben elromlott csővezeték hónapokig észrevétlenül téves számokat
  jeleníthet meg.
- **Csak a definíció dokumentálása, a gyűjtési módszeré nem:** két csapat
  ugyanazzal a metrikanévvel még mindig összehasonlíthatatlan számokat
  állíthat elő.
- **Dashboard, amely „0"-t vagy elavult adatot jelenít meg, mintha friss lenne,
  a forrás hibájának jelzése nélkül:** rosszabb, mint egy látható „az adat nem
  elérhető" üzenet.
- **Alulerőforrásolt régiók vagy csapatok rendszeres alulbejelentése a kézi
  bevitel terhe miatt:** olyan adatminőségi hiány, amely pontosan azokkal a
  területekkel korrelál, amelyek a legtöbb figyelmet igénylik.

## Érettségi modell

- **1. szint, Kezdeti:** Senki nem tud megbízhatóan visszavezetni egy metrikát a
  forrásrendszeréig; a csővezetékeknek nincs egészségellenőrzésük, és a hibák
  észrevétlenek maradnak.
- **2. szint, Fejlődő:** Néhány metrikának dokumentált forrása van, de a gyűjtési
  módszerek következetlenek, és az adatminőségi ellenőrzések a legjobb esetben is
  ad hoc jellegűek.
- **3. szint, Szabványosított:** Minden irányított metrika dokumentálja a
  forrásrendszerét és gyűjtési módszerét; az automatikus csővezetékeket
  részesítik előnyben az önbevallással szemben, ahol egy esemény közvetlenül
  megfigyelhető.
- **4. szint, Irányított:** Automatikus adatminőségi ellenőrzések figyelik minden
  jelentős csővezetéket, az anomáliákat felülvizsgálatra jelzik, és az adatok
  származása dokumentált és auditálható.
- **5. szint, Összehangolt:** A szervezet az adatminőséget első osztályú mérnöki
  fegyelemként kezeli saját felügyelettel és incidenskezeléssel, és kérésre
  bemutathatja bármely közzétett metrika teljes eredetét.

## Ötletek a vitához

1. Vissza tudnánk-e vezetni a három legfontosabb metrikánkat a pontos forrásrendszerükig most, élőben, ezen a megbeszélésen?
2. Melyik jelenlegi metrikánk támaszkodik önbevallásra olyasmihez, amit egy rendszer közvetlenül mérhetne?
3. Van-e ma bármelyik metrikacsővezetékünknek automatikus egészségellenőrzése?
4. Mikor fedeztünk fel utoljára csendben elromlott adatcsővezetéket, és mióta volt téves?
5. Hol hoz létre a kézi adatbevitel rést a jelentett és a tényleges valóság között?

## A legfontosabb tanulságok

- Részesítsd előnyben az **automatikus műszerezést** az önbevallással szemben,
  ahol egy rendszer közvetlenül megfigyelheti az eseményt; az önbevallást
  tartogasd a valóban szubjektív élményre.
- Minden metrikához dokumentált **forrásrendszer és gyűjtési módszer** kell, nem
  csak definíció.
- Az adatminőség **csendben romlik**; építs automatikus ellenőrzéseket magába a
  csővezetékbe, ahelyett hogy véletlenül fedeznéd fel a hibát.
- Műszerezz **az eseménynél**, ne egy átalakítás után, hogy minimalizáld az
  eltérést aközött, ami történt, és amit a dashboard mutat.
- Egy csendben elromlott csővezeték költsége, hónapokig rossz adatok alapján
  hozott döntések, messze meghaladja azoknak az egészségellenőrzéseknek a
  költségét, amelyek elkapták volna.

## Források és ajánlott olvasmányok

- *Observability Engineering*, Charity Majors, Liz Fong-Jones és George Miranda
  (műszerezési és telemetriatervezési alapelvek).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble és Gene Kim (a DORA-metrikák mögötti műszerezési megközelítés).
- *Data Quality: The Accuracy Dimension*, Jack E. Olson (a metrikacsővezetékekre
  is alkalmazható adatminőségi fogalmak).
- *How to Measure Anything*, Douglas W. Hubbard (mérési módszerek olyan
  mennyiségekhez, amelyeket nehéz közvetlenül megfigyelni).
