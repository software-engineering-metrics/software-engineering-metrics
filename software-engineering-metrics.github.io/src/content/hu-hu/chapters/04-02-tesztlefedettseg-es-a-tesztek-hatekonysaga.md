# 4.2 Tesztlefedettség és a tesztek hatékonysága

## Áttekintés és indíték

A **[tesztlefedettség](https://en.wikipedia.org/wiki/Code_coverage)** azt a kódszázalékot
méri, amelyet egy tesztkészlet végrehajt: sorlefedettség, ágelfedettség vagy a
szigorúbb útvonallefedettség. Ez az egyik legszélesebb körben követett metrika ebben az
egész könyvben, olcsó kiszámítani, egyetlen százalékként könnyű megjeleníteni, és
következésképpen az egyik leggyakrabban kijátszott, pontosan úgy, ahogy az 1.2 téma
megjósolja minden olyan metrikára, amely céllá válik. Egy tesztkészlet elérhet magas
lefedettséget, miközben szinte semmi érdemlegeset nem ellenőriz, mert a lefedettség azt
méri, hogy a kód lefutott-e egy tesztfuttatás során, nem azt, hogy a teszt ténylegesen
ellenőrizte-e, hogy a kód helyesen viselkedett.

A lefedettség és a valódi tesztelési hatékonyság közötti rés nem apró lábjegyzet;
ennek a témának a központi aggálya. Az a teszt, amely meghív egy függvényt, és semmit
nem állít az eredményéről, pontosan ugyanúgy növeli a lefedettséget, mint az, amely
alaposan ellenőrzi a függvény viselkedését a szélső esetekben. A téma által
ajánlott javítás, a **mutációs tesztelés**, amely tudatosan apró, mesterséges hibákat
visz a kódba, és ellenőrzi, hogy a tesztkészlet valóban elkapja-e őket, a rés közvetlen
válasza, és ez a téma a lefedettség szükséges kiegészítőjének tekinti, nem opcionális
extrának.

Nagy csapatoknál a lefedettségi célokat gyakran szervezetszinten minőségi kapuként
vezetik be, pontosan az az ösztönzött, nagy láthatóságú metrika, amelyről az 1.2 téma
figyelmeztet, hogy a leginkább ki van téve a kijátszásnak. Azok a nagyvállalatok és
közszféra szervezetek, amelyek általános lefedettségi százalékos követelményt
állapítanak meg párosított hatékonysági ellenőrzés nélkül, valójában éppen azt a
küszöbkijátszási mintát ösztönzik, amelyet ez a könyv leír: triviális teszteket, amelyeket
pusztán egy szám eléréséhez írnak, a tényleges hibamegelőzés megfelelő javulása nélkül.

## Alapelvek

- **A lefedettség végrehajtást mér, nem ellenőrzést.** Az, hogy egy tesztben egy sor
  lefut, semmit nem mond arról, hogy a teszt ellenőrzött-e róla bármi érdemlegeset.
- **A hatékonysági ellenőrzés nélküli lefedettségi cél Goodhart törvényének
  tankönyvi felállása** (1.2 téma): a szám javul, a valódi minőség nem.
- **A mutációs tesztelés a lefedettség szükséges kiegészítője,** nem helyettesítője;
  használd mindkettőt együtt.
- **A lefedettség inkább alsó korlátként hasznos, mint maximalizálandó célként.** Az
  alacsony szám valóban teszteletlen kódot tár fel; a 100% hajszolása gyakran csökkenő
  vagy negatív megtérülést hoz.
- **A kritikus útvonalak lefedettsége többet számít az egységes, általános
  lefedettségnél.** Nem minden kód hordoz egyenlő kockázatot, ha hibázik.

## Ajánlások

### A lefedettséget a teszteletlen kód megtalálására használd, ne maximalizálandó célként

A lefedettségi jelentést elsősorban annak térképeként kezeld, hogy mihez nincs egyáltalán
teszt, ami valóban hasznos információ, ne olyan pontszámként, amelyet a 100% felé kell
tolni. A nulla lefedettségű kód valódi rés, amelyet érdemes bezárni; a lefedettség
85%-ról 95%-ra tolásának határhaszna általában sokkal alacsonyabb, és gyakran nem éri
meg a ráfordítást, különösen, ha ez az erőfeszítés alacsony értékű teszteket szül,
csak hogy elérjék a magasabb számot.

### Minden lefedettségi célt párosíts mutációs teszteléssel

A **mutációs tesztelő** eszközök automatikusan apró hibákat visznek a kódodba,
megfordítanak egy összehasonlító operátort, megváltoztatnak egy határfeltételt, majd
lefuttatják a tesztkészletedet minden mutált változaton. Az a tesztkészlet, amely a
mutánsok többségét „megöli” (megbukik rajtuk), valóban ellenőrzi a viselkedést; az a
tesztkészlet, amelynek magas a sorlefedettsége, de alacsony a mutánsölési aránya, kódot
hajt végre anélkül, hogy érdemben ellenőrizné. Ez a párosítás a legeredményesebb védőkorlát
a lefedettségi cél kijátszása ellen, és ez a könyv szabványos gyakorlatként ajánlja,
nem fejlett vagy opcionális technikaként.

### Először a kritikus útvonalakon rangsorold a lefedettséget és a mutációs tesztelést

Nem minden kód hordoz egyenlő kockázatot. Egy fizetésfeldolgozó útvonal, egy
hitelesítési ellenőrzés vagy egy adatmigrációs szkript sokkal szigorúbb tesztelést érdemel,
mint egy ritkán használt adminisztratív jelentés. A teljes kódbázison egységes
lefedettség hajszolása helyett azonosítsd a legnagyobb kockázatú, legsúlyosabb
következményű kódútvonalaidat, és először oda összpontosítsd a lefedettségi és
mutációs tesztelési erőfeszítést, a valóban kis kockázatú kód alacsonyabb lefedettségét
tudatos, megalapozott kompromisszumként fogadva el, nem mulasztásként.

### Figyeld a konkrét lefedettség-kijátszási mintákat

A lefedettség kijátszásának leggyakoribb módjai, ha egyszer céllá válik: olyan
tesztek, amelyek meghívnak egy függvényt, de semmi érdemlegeset nem állítanak az
eredményéről (az 1.2 téma küszöbkijátszása erre a metrikára alkalmazva), a megbukó
tesztek kikapcsolása vagy törlése a mögöttes probléma kijavítása helyett, és a nehezen
tesztelhető kód teljes kizárása a lefedettségi számításból ahelyett, hogy kezelnék, miért
nehéz tesztelni. Időnként auditálj közvetlenül egy tesztmintát, elolvasva a tényleges
állításaikat, ne bízz egyedül a lefedettségi százalékban.

### A CI-csővezetékedben alsó lefedettségi korlátot állíts be, ne felsőt

Úgy állítsd be a build-csővezetéket, hogy megbukjon, ha a lefedettség az új kódra
megegyezett alsó korlát alá csökken, ezzel megakadályozva a regressziót, ahelyett, hogy
minden változtatástól megkövetelnéd, hogy az összesített számot feljebb tolja. Ez a
különbség számít: az alsó korlát véd a visszacsúszás ellen anélkül, hogy ugyanazt a
könyörtelen felfelé nyomást hozná létre, amely alacsony értékű teszteket szül, amelyeket
pusztán azért írnak, hogy a számot még egy kicsit feljebb tolják.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Csak a lefedettségi százalék | Olcsó, egyszerű, az eszközök széles körben támogatják | Könnyen kijátszható; végrehajtást mér, nem ellenőrzést |
| Lefedettség plusz mutációs tesztelés | Ellenőrzi, hogy a tesztek valóban a viselkedést vizsgálják, ellenáll a kijátszásnak | Számításigényesebb; eszközbefektetést igényel |
| Egységes lefedettségi cél a kódbázison | Egyszerű kimondani és betartatni | Erőfeszítést pazarol az alacsony kockázatú kódra; máshol alulbefektet a kockázathoz képest |
| Kockázatalapú, a kritikus útvonalakkal kezdő lefedettség | Oda összpontosítja az erőfeszítést, ahol a legtöbbet számít | Ítélőképességet igényel a valóban kritikus útvonalak helyes azonosításához |

A központi feszültség az **egyszerűség és az őszinteség között** húzódik. Egyetlen
lefedettségi százalék könnyen jelenthető és könnyen célként kitűzhető, de éppen ez az
egyszerűség teszi olyan könnyen kijátszhatóvá, amint ösztönzött számmá válik. A
feszültséget úgy oldd fel, hogy a mutációs tesztelés és a kockázatalapú rangsorolás
hozzáadott bonyolultságát az őszinte jel árának fogadod el, és kifejezetten közlöd a
csapatoddal, miért értékesebb egy alacsonyabb, a kritikus útvonalakra helyesen
összpontosított, erős mutánsölési aránnyal alátámasztott összlefedettségi szám, mint egy
magasabb, egyenletesebben elosztott, de kevésbé hatékonyan ellenőrzött.

## Kérdések a csapattal való megbeszéléshez

1. **Mekkora a mutánsölési arányunk a legnagyobb kockázatú kódútvonalainkon, és hogyan
   viszonyul ugyanazon kód lefedettségi százalékához?** A magas lefedettségi szám és az
   alacsony mutánsölési arány közötti nagy rés a lehető legvilágosabb jele annak, hogy a
   lefedettség önmagában nem azt mondja neked, amit gondolsz.

2. **Írtunk-e valaha tesztet elsősorban azért, hogy növeljük a lefedettségi számot,
   azon kevés valódi gondolkodással, mit kellene ellenőriznie?** Légy őszinte; ez
   gyakrabban fordul elő, mint a csapatok szívesen elismerik, különösen határidőnyomás
   alatt, amikor a lefedettségi kapu blokkol egy merge-et.

3. **A lefedettségi erőfeszítésünk a legnagyobb kockázatú kódútvonalainkra összpontosul,
   vagy egyenletesen oszlik el, függetlenül attól, mekkora a következmény, ha az a kód
   hibázik?** Vesd össze a jelenlegi lefedettségi eloszlásunkat a kódbázisod őszinte
   kockázatértékelésével, és keresd az eltérést.

4. **Kapcsoltunk-e ki vagy töröltünk-e valaha megbukó tesztet ahelyett, hogy a
   felfedett mögöttes problémát kijavítottuk volna?** Ez a lefedettség-kijátszás
   egyik legkárosabb formája, mert aktívan eltávolít valódi védelmet, miközben a
   jelentett lefedettségi szám alig mozdul.

5. **A CI-csővezetékünk alsó lefedettségi korlátot ír elő az új kódra, vagy egyre
   magasabb felső korlát felé tol, a csökkenő megtérüléstől függetlenül?** Beszéljétek
   meg, hogy a jelenlegi kapu kialakítása a helyes ösztönzést teremti-e meg, a
   regresszió elleni védelmet, vagy a rosszat, a könyörtelen felfelé nyomást, amely
   az alacsony értékű tesztfeltöltést jutalmazza.

6. **A kódbázisunk melyik kódja van kizárva a lefedettségi számításból, és indokolt-e a
   kizárás, vagy valódi tesztelési rést rejt el?** Nézd át a tényleges kizárási
   konfigurációt; gyakori, hogy ez a lista csendben növekszik idővel, anélkül, hogy
   bárki újra megnézné, hogy az egyes kizárások még indokoltak-e.

## Ágazati szemszög

**Startup.** A formális lefedettségi célok ilyen korán gyakran szükségtelenek;
a tesztírási erőfeszítést közvetlenül a legkockázatosabb, legüzletkritikusabb
kódútvonalakra (általában fizetési vagy alapvető munkafolyamat-logikára) összpontosítsd
egy általános százalék hajszolása helyett egy olyan kódbázison, amely még gyorsan
változik, és úgyis jelentősen újraírhatják hamarosan.

**Kisvállalkozás.** A legtöbb CI-platform minimális beállítási költséggel
automatikusan jelenti a lefedettséget; elsősorban a teljesen teszteletlen kritikus kód
felkutatására használd, ne egy konkrét célszázalék hajszolására, és csak akkor fontold
meg a mutációs tesztelést, ha megvan a mérnöki kapacitásod arra, hogy cselekedj azon,
amit feltár.

**Nagyvállalat.** Az általános, szervezetszintű lefedettségi célok ennél a
léptéknél gyakori és súlyos hibák, mert éppen az ebben a témában leírt kijátszást
ösztönzik tucatnyi csapatban egyszerre. Alakíts ki kockázatalapú lefedettségi
elvárásokat, amelyek a szolgáltatás kritikusságától függően változnak, és a
mutációs tesztelési infrastruktúrába kifejezetten a legnagyobb kockázatú
rendszereidhez fektess be.

**Közszféra.** A lefedettségi követelmények néha a közbeszerzési vagy megfelelőségi
dokumentációban a minőségbiztosítás tompa, könnyen megadható közelítő mutatójaként
jelennek meg. Ahol lehet, a szerződésben előírt lefedettségi százalékot párosítsd
mutációs tesztelési vagy hibaalapú hatékonysági követelménnyel, hogy a szerződéses
ösztönzés ne jutalmazza véletlenül éppen azt az alacsony értékű tesztfeltöltést,
amely ellen ez a téma figyelmeztet.

## Példák

**Nagyvállalat.** Egy e-kereskedelmi platform vezetése vállalatszintű 95%-os
lefedettségi követelményt írt elő minden új kódra, kemény CI-kapuként betartatva. Egy
két évvel későbbi audit, amelyet az állítólag jól tesztelt kódban jelentkező éles hibák
hulláma indított, a kódbázis nagy részén 40% alatti mutánsölési arányt talált: a
csapatok olyan teszteket írtak, amelyek végrehajtották a kódútvonalakat anélkül, hogy
érdemben állítottak volna a viselkedésükről, pusztán azért, hogy határidőnyomás alatt
teljesítsék a kaput. A cég az általános lefedettségi követelményt kockázati szintű
szabályzatra cserélte: szigorú lefedettségre és kötelező mutációs tesztelésre 80%-os
ölési arány fölött a fizetési és hitelesítési kódnál, valamint sokkal enyhébb
lefedettségi alsó korlátra az alacsony kockázatú belső eszközöknél, ami egyszerre
csökkentette a pazarolt tesztelési erőfeszítést, és mérhetően javította a hibaarányt
a valóban kritikus útvonalakon.

**Közszféra.** Egy közegészségügyi ügynökség juttatási jogosultsági rendszerének a
fejlesztő szállítóval kötött szerződés szerint 90%-os tesztlefedettséget kellett
fenntartania. Egy incidens utáni áttekintés, amely egy jelentős jogosultságszámítási
hibát követett, amely annak ellenére került ki, hogy a lefedettségi követelményt
teljesítették, megállapította, hogy a felelős függvény a lefedettségét teljes egészében
olyan tesztekkel érte el, amelyek érvényes bemenetekkel hívták meg, de soha nem
tesztelték a határfeltételeket vagy az érvénytelen bemeneteket, éppen ott, ahol a hiba
történt. Az ügynökség átdolgozott szállítói szerződése most dokumentált mutációs
tesztelési pontszámot követel a lefedettség mellett minden jogosultságszámító kódra,
bezárva azt a konkrét rést, amely lehetővé tette, hogy megfelelő, de hatástalan tesztelés
teljesítse a szerződést.

## Üzleti érv: indítékok, ROI és TCO

A lefedettség mutációs teszteléssel való párosításának megtérülése az, hogy elkapjuk a
látszólagos és a tényleges tesztminőség közötti rést, mielőtt az éles hibába kerülne. A
fenti e-kereskedelmi példa világosan mutatja a mintát: a puszta lefedettségi követelmény
hamis biztonságérzetet szült, amelyet egy hibahullám végül sokkal nagyobb költséggel
leplezett le, mint a mutációs tesztelési beruházás, amely korábban elkapta volna a rést.

A teljes birtoklási költség (TCO) magában foglalja a mutációs tesztelés számítási
költségét, amely drágább a futtatásra, mint az egyszerű lefedettségi műszerezés, és ezért
általában a kritikus útvonalú kódra tartják fenn, nem az egész kódbázisra, valamint az
eredmények értelmezésére és az azokra való cselekvésre fordított mérnöki időt. Ez a
költség kifejezetten a legnagyobb kockázatú kódra indokolt, ahol a tesztek hatékonyságában
fel nem fedezett rés ára a legmagasabb.

## Antiminták és buktatók

- **A lefedettségi százalék kezelése közvetlen minőségi ítéletként:** végrehajtást mér,
  nem ellenőrzést.
- **Tesztek írása elsősorban a lefedettségi kapu teljesítésére:** pontosan azt az
  alacsony értékű, küszöbkijátszó mintát hozza létre, amely ellen az 1.2 téma figyelmeztet.
- **A megbukó tesztek kikapcsolása vagy törlése a mögöttes probléma kijavítása
  helyett:** valódi védelmet távolít el, miközben alig érinti a jelentett számot.
- **Egységes lefedettségi cél alkalmazása a kód kockázatától függetlenül:** erőfeszítést
  pazarol az alacsony kockázatú kódra, és alulbefektet a valóban kritikus
  útvonalakba.
- **A kizárási lista csendes növelése idővel:** valódi tesztelési réseket rejt el egy
  technikailag pontos, de félrevezető lefedettségi szám mögé.
- **Felső lefedettségi korlát hajszolása alsó helyett:** könyörtelen felfelé nyomást
  hoz létre, amely a tesztfeltöltést jutalmazza a valódi ellenőrzés helyett.

## Érettségi modell

- **1. szint, Kezdeti:** A lefedettséget nem mérik, vagy következetlenül mérik, alsó
  korlát, cél vagy hatékonysági ellenőrzés nélkül.
- **2. szint, Fejlődő:** Van lefedettségi cél, és követik, de sem mutációs tesztelés,
  sem kockázatalapú rangsorolás nem tájékoztatja az erőfeszítés elosztását.
- **3. szint, Szabványosított:** Az alsó lefedettségi korlátokat következetesen
  betartatják a CI-ben, kockázatalapú rangsorolással, amely irányítja, hová
  összpontosul a lefedettségi erőfeszítés.
- **4. szint, Irányított:** A mutációs tesztelés a kritikus útvonalú kódon fut, követett
  ölési arány küszöbbel, amelyet a lefedettség mellett teljesíteni kell, és a kizárási
  listákat időszakosan auditálják.
- **5. szint, Összehangolt:** A szervezet rá tud mutatni konkrét hibacsökkenésekre,
  amelyek a mutációs tesztelés által tájékoztatott rangsorolásra vezethetők vissza, és
  a lefedettségi és hatékonysági adatok együtt közvetlenül tájékoztatják a tesztelési
  beruházási döntéseket.

## Ötletek a vitához

1. Mekkora a mutánsölési arányunk a legkritikusabb kódútvonalunkon, és egyáltalán tudjuk-e?
2. Írtunk-e valaha alacsony értékű tesztet pusztán egy lefedettségi kapu teljesítésére?
3. A jelenlegi lefedettségi erőfeszítésünk oda összpontosul, ahol a kockázat a legnagyobb, vagy egyenletesen oszlik el?
4. Melyik kód van jelenleg kizárva a lefedettségi számításból, és még indokolt-e a kizárás?
5. Megérné-e a számítási költségét egy mutációs tesztelési beruházás a legnagyobb kockázatú rendszerünkön?

## A legfontosabb tanulságok

- A tesztlefedettség **végrehajtást mér, nem ellenőrzést**; a lefedett sor semmit nem
  mond arról, hogy érdemben ellenőrizték-e.
- Párosítsd a lefedettséget **mutációs teszteléssel**, hogy ellenőrizd, a tesztek
  ténylegesen elkapják-e a valódi hibákat, nem csupán lefuttatják a kódot.
- Az erőfeszítést a **kritikus, nagy kockázatú útvonalakra** összpontosítsd, ne egységes
  lefedettséget hajszolj a teljes kódbázison.
- A lefedettséget **a regresszió elleni védelemre szolgáló alsó korlátként** használd,
  ne könyörtelenül maximalizálandó felső korlátként.
- Figyelj a konkrét lefedettség-kijátszási mintákra: **az alacsony értékű tesztekre, a
  kikapcsolt megbukó tesztekre és a csendben növekvő kizárási listákra**.

## Források és ajánlott olvasmányok

- *Working Effectively with Legacy Code*, Michael Feathers műve (tesztlefedettségi
  stratégia meglévő, nehezen tesztelhető kódbázisokhoz).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering* (2011): átfogó
  áttekintés a mutációs tesztelési technikákról és azok hatékonyságáról.
- *xUnit Test Patterns*, Gerard Meszaros műve (tesztterv-minták a valóban hatékony,
  nem pusztán lefedettséget teljesítő tesztek írásához).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble és Gene Kim műve (a tesztelési gyakorlatok és a szállítási teljesítmény
  kapcsolata).
