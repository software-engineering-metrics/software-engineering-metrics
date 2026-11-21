# 1.2 Goodhart törvénye és a metrikák pszichológiája

## Áttekintés és indíték

[Goodhart törvénye](https://en.wikipedia.org/wiki/Goodhart%27s_law), amelyet
Charles Goodhart közgazdászról neveztek el, általában így fogalmazzák meg:
amikor egy mérték céllá válik, megszűnik jó mérték lenni. Goodhart eredeti,
1975-ös megfigyelése a monetáris politikáról szólt, de Marilyn Strathern
antropológus későbbi megfogalmazása az a változat, amelyre a szoftveres
csapatoknak valójában szükségük van, és ez az a mondat, amelyre ez az egész
könyv épül. Minden későbbi téma minden metrikája, a telepítési gyakoriság, a
tesztlefedettség, az elégedettségi pontszámok, hordozza ezt a kockázatot, és
a könyv minden ajánlása valamilyen formában a kezelésének stratégiája.

A mechanizmus nem rejtélyes. Az emberek reagálnak az ösztönzőkre, és a
jutalomhoz, értékeléshez vagy hírnévhez kötött metrika ösztönző, akár szánta
bárki annak, akár nem. Amint egy csapat tudja, hogy a „telepítési gyakoriságot"
figyelik, a szám mozgatásának legolcsóbb módja nem mindig a szándékolt: egy
értelmes változtatást felaprítani öt jelentéktelen telepítésre, és a szám
felmegy, miközben semmi valós nem javult. Ez nem rossz szándékú szereplőkről
szóló történet. A hétköznapi, jó szándékú mérnökök pontosan így reagálnak a
rosszul megtervezett ösztönzőkre, mert nyomás alatt a viselkedést az ösztönző
alakítja, nem a mögötte álló szándék.

A nagy szervezeteknél a tét nagyobb, mert a metrika tervezője és az a személy,
akinek a viselkedését alakítja, a léptékkel egyre távolabb kerül egymástól.
Az a csapatvezető, aki a saját nyolcfős csapatának épít metrikát, közvetlenül
figyelheti a kijátszást, és gyorsan korrigálhat. Egy hatszáz fős divízión
bevezetett, vagy egy törvényhozás által olvasott kormányzati teljesítményjelentésben
közzétett metrika olyan emberek rétegein halad át, akik soha nem találkoztak
a szerzőjével, és minden okuk megvan arra, hogy a metrika betűjét tekintsék
célnak. A torzulás a távolsággal halmozódik, és éppen ezért itt van, nem egy
későbbi témában, a könyv súlypontja.

## Alapelvek

- **Feltételezd, hogy minden ösztönzött metrikát ki fognak játszani.**
  Már az első változattól ez ellen tervezz, ne a torzulás felfedezése után.
- **A kijátszás racionális, nem rosszindulatú.** Az emberek értelmesen
  reagálnak az általad épített ösztönzőre; ha őket hibáztatod, semmit nem
  oldasz meg.
- **A metrika felelősétől való távolság növeli a torzulás kockázatát.** Minél
  messzebbre jut egy szám attól, aki érti a szándékát, annál inkább a szabály
  betűjévé válik a szelleme helyett.
- **Az arányok és tartományok jobban ellenállnak a kijátszásnak, mint a nyers
  számlálók.** A nyers számláló a mennyiséget jutalmazza; a jól választott
  arány a kívánt tényleges viselkedést.
- **Az ösztönzött metrikánál a védőkorlát nem választható.** Minden metrikához,
  amelyhez jutalmat kötsz, kell egy párosított ellenmetrika, amely nem
  romolhat.

## Ajánlások

### Sorold be minden metrikát az ösztönzési kitettsége szerint

Mielőtt bárhol láthatóan közzéteszel egy metrikát, kérdezd meg közvetlenül:
függ-e valakinek a jutalma, értékelése, hírneve vagy költségvetése attól,
hogy ez a szám egy bizonyos irányba mozduljon? Ha igen, ösztönzött metrika, és
élesítés előtt védőkorlát kell hozzá (lásd lejjebb). Ha nem, diagnosztikai
metrika (1.1 téma), és alacsonyabb a kijátszási kockázata, bár soha nem nulla,
mert az emberek akkor is alakíthatják azt a számot, amelynek alapján később
megítélhetik őket, ha ma nincs hozzá formális ösztönző.

### Részesítsd előnyben az arányokat, rátákat és kohorszokat a nyers számlálókkal szemben

Az olyan nyers számláló, mint a „lezárt jegyek", kijátszható azzal, hogy valami
alacsony értékűből többet csinálunk. Az olyan arány, mint „az első
kapcsolatfelvételnél megoldott jegyek százaléka", a mögöttes viselkedést
jutalmazza a mennyiség helyett. A **kohorsz**, vagyis egy közös kiindulópont
által meghatározott csoport, például egy adott hét összes telepítése,
megakadályozza, hogy egy rossz friss trend elbújjon egy hízelgő hosszú távú
összesítésben. Ahol számláló és olyan ráta közül választasz, amely ugyanazt a
mögöttes viselkedést rögzíti, válaszd a rátát.

### Párosíts minden ösztönzött metrikát védőkorláttal

A **védőkorlát-metrika** olyan párosított ellenmetrika, amely nem romolhat,
miközben az elsődleges metrika javul. A telepítési gyakoriság a változtatási
hibaaránnyal párosul; az átfutási idő a kiszökött hibák arányával; egy
ügyfélszolgálati csapat kezelési ideje az ügyfél-elégedettséggel. A védőkorlát
az, ami az olcsó kijátszást láthatóan drágává teszi: az a csapat, amely az
ösztönzött számot a védőkorlát rontásával javítja, a párosítás révén lebukik,
nem a szerencsén múlik. A védőkorlátot az elsődleges metrikával egy időben
tervezd meg, soha ne utólag, amikor a kijátszást már felfedezték.

### Figyelj a négy klasszikus kijátszási mintára

A Goodhart törvénye szerinti torzulás néhány felismerhető alakba rendeződik.
A **küszöbkijátszás** pontosan a célig optimalizál, aztán megáll (a 95%-os
tesztlefedettségi cél jelentéktelen teszteket szül, hogy éppen 95% legyen, nem
valódi lefedettséget). A **definíciókijátszás** azt változtatja meg, mi számít,
nem azt, mi történik (a „megoldott" újradefiniálása, hogy kizárja a nehéz
eseteket). Az **időzítéskijátszás** azt tolja el, mikor rögzítik a munkát, nem
azt, mikor történt (telepítések összevonása közvetlenül a jelentési időszak
lezárása előtt). A **helyettesítéskijátszás** a metrika betűjét teljesíti,
miközben a szándékát elhagyja (egy valódi változtatás sok jelentéktelenre
bontása a telepítési gyakoriság felfújására). Ha ezeket a mintákat kifejezetten
megnevezed a csapatodnak, sokkal könnyebb észrevenni őket, amikor a saját
számaidban megjelennek.

### Válaszd szét a mérést a jutalomtól, ahol csak tudod

A legerősebb védőkorlát szerkezeti: válaszd le a metrikát az egyéni
jutalomról. Az a metrika, amelyet kizárólag egy rendszer megértésére
használnak, és amelynek iránya nem függ senki fizetésétől, minősítésétől vagy
helyzetétől, sokkal gyengébb kijátszási nyomással néz szembe, mint az
értékeléshez kötött. Ezért számít a gyakorlatban olyan sokat az 1.1 téma
diagnosztikai és értékelő használat közti különbsége: a metrikát diagnosztikainak
tartani gyakran olcsóbb és hatékonyabb, mint bármennyi utólag alkalmazott
védőkorlát-mérnökség.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nyers számlálók | Egyszerű kiszámítani és elmagyarázni | Mennyiséggel nagyon könnyen kijátszható |
| Arányok és ráták | A helyes viselkedést jutalmazzák, ellenállnak a mennyiségi kijátszásnak | Elrejthetnek egy zsugorodó nevezős problémát |
| Védőkorlát-párosítás | Az olcsó kijátszást láthatóan drágává teszi | Megkétszerezi a definiálandó, gondozandó és karbantartandó metrikákat |
| Csak diagnosztikai (egyéni jutalom nélkül) | A legkisebb kijátszási nyomás az összes lehetőség közül | Gyengébb közvetlen motivációs eszköz a vezetés kezében |
| Erősen ösztönzött metrikák | Erős, gyors viselkedési válasz | Nagy torzulási kockázat, gyakran egyetlen jelentési cikluson belül |

A központi feszültség a **motivációs erő és a torzulási kockázat** között áll
fenn. A metrikák, amelyek a leggyorsabban mozgatják a viselkedést, vagyis
amelyek a számot közvetlenül jutalomhoz kötik, pontosan azok, amelyek a
legjobban ki vannak téve Goodhart törvényének. Úgy oldd fel a feszültséget,
hogy az erős ösztönzőket olyan eredménymetrikákra tartogatod, amelyeket
valóban nehéz olcsón kijátszani, és mindent, amit mégis ösztönzöl, olyan
védőkorláttal párosítasz, amelyet egy időben terveztél, nem az első torzulás
megjelenése után ragasztottál rá.

## Kérdések a csapattal való megbeszéléshez

1. **Minden olyan metrikánál, amelytől valakinek a jutalma függ, mi a
   legolcsóbb módja a kijátszásnak, és észrevennénk-e ma ezt a kijátszást?**
   Ülj le, és tervezd meg szándékosan a kiaknázást a dashboard minden ösztönzött
   számához: hogyan tudna egy racionális, jó szándékú csapat jól mutatni
   anélkül, hogy a mögöttes munkát elvégezné? Ha nem tudod megnevezni, hogyan
   kapnád el a kijátszást, még nem állsz készen a metrika ösztönzésére. A
   gyakorlat kellemetlen, és a kellemetlenség a lényege.

2. **Melyik jelenlegi metrikánk csúszott már bele a négy kijátszási minta
   egyikébe, a küszöb-, definíció-, időzítés- vagy helyettesítéskijátszásba,
   anélkül hogy bárki szóvá tette volna?** A torzulás ritkán jelentkezik be;
   olyan számként bukkan fel, amely remekül néz ki, miközben a mögöttes
   panaszok, incidensek vagy ügyfélvisszajelzések mást mondanak. Menj végig a
   dashboardon minden mintán név szerint, és légy őszinte az egyezésekről.

3. **Minden ösztönzött dashboard-metrikánknak van párosított védőkorlátja, és
   azt a metrikával egy időben terveztük?** A csak a kijátszás felfedezése után
   hozzáadott védőkorlát javítás, nem tervezési döntés, és általában túl későn
   érkezik ahhoz, hogy megakadályozza a bizalmat érő első csapást. Kifejezetten
   erre a párosításra auditáld az ösztönzött metrikáidat.

4. **Milyen messzire jut ez a metrika attól, aki érti a szándékát, mielőtt
   eléri azt, akinek a viselkedését alakítja?** A platformcsapat által épített,
   de három vezetői réteggel arrébb használt metrika, vagy egy nyilvános
   jelentésben közzétett, olyanok által olvasott metrika, akik soha nem látták a
   műszerezést, sokkal inkább ki van téve a betű-nem-szellem kijátszásnak, mint
   az, amelyet a csapat magának tervezett. Térképezd fel ezt a távolságot a
   legnagyobb következményű metrikáidnál.

5. **Eltávolítottunk-e valaha ösztönzőt egy metrikától, miután kiderült, hogy
   kijátsszák, és mibe került ezt bizalomban helyrehozni?** A szervezetek
   gyakran a nehezebb úton fedezik fel Goodhart törvényét, egy negyedév vagy egy
   év torz viselkedése után, és a javítás többe kerül, mint a megelőzés. Hozz
   egy valódi esetet, ha van, és vonj le belőle kifejezetten tanulságot,
   ahelyett hogy csendben továbblépnél.

6. **Hol feltételeztük, hogy a kijátszás személyes integritási probléma, nem
   egy rosszul tervezett ösztönzőre adott racionális válasz?** Ha egyéneket
   hibáztatsz azért, hogy kiszámíthatóan reagáltak egy általad épített
   ösztönzőre, ritkán oldasz meg bármit, és gyakran tovább rontod a bizalmat.
   Fogalmazd át minden felidézhető kijátszási esetet a metrika tervezési
   problémájaként, nem az ember jellemhibájaként, és kérdezd meg, milyen
   újratervezés előzte volna meg.

## Ágazati szemszög

**Startup.** Egy apró csapatnál a leggyorsabb védőkorlát a közvetlen
beszélgetés: mindenki látja a számot, és azonnal megkérdezheti, „várj, miért
ugrott meg". A valódi kockázat az, ha egy alapító a befektetői narratívához
(növekedés bármi áron) köt egy metrikát védőkorlát nélkül, mert a külső
befektetők pontosan azt a távoli, nagy téttel járó nyomást gyakorolják, amely
a kijátszást vonzóvá teszi.

**Kisvállalkozás.** A készen kapott eszközök gyakran számlálókra épülő
alapértelmezett dashboardokkal érkeznek (lezárt jegyek, kezelt hívások), mert
a számlálókat könnyű kiszámolni. Alakítsd át ezeket aktívan rátákká, ahol az
eszköz engedi, és állj ellen annak, hogy bármely egyetlen számot prémiumhoz
vagy értékeléshez kösd anélkül, hogy előbb azonosítanád a védőkorlátját.

**Nagyvállalat.** A távolság a meghatározó kockázat: a platformcsapat által
belső diagnózisra tervezett metrikát három vezetői réteggel később felkapják, és
olyan KPI-vá alakítják, amelyet senki, aki megalkotta, nem ismerne fel. Ezt
kifejezetten szabályozd (1.4 téma): követelj dokumentált védőkorlátot, mielőtt
bármely metrikát jóváhagynak teljesítményértékelésben vagy vezetői
eredménykártyán való használatra.

**Közszféra.** A nyilvánosan közzétett teljesítménymértékek szembesülnek a
könyv legerősebb kijátszási nyomásával, mert egy elmulasztott cél
költségvetési vagy politikai következményekkel járhat. Auditáld a definíciót
magát is rögzített ritmusban, nem csak a számot, mert a klasszikus közszféra
kijátszási minta az, hogy csendben újradefiniálják, ki számít (egy várólistát
„megoldottá" tesznek azzal, hogy átsorolják, ki vár), ahelyett hogy a mögöttes
szolgáltatást javítanák.

## Példák

**Nagyvállalat.** Egy kiskereskedelmi technológiai cég 99%-os automatizált
tesztlefedettségi célt tűzött ki minden szolgáltatásra, amelyet a negyedéves
értékelésekben használt csapatszintű minőségi pontszámhoz kötött. Két
negyedéven belül a lefedettség elérte a 99%-ot, és az incidensek aránya
megnőtt. Egy audit azt találta, hogy a csapatok jelentéktelen teszteket írtak,
amelyek azt állították, hogy egy függvény kivétel nélkül visszatér, pusztán a
lefedettségi eszköz kielégítésére, miközben a valódi határesetek tesztelése
egyáltalán nem javult. A megoldás a nyers lefedettségi célt egy párosított
metrikára cserélte: lefedettség plusz egy mutációs tesztelési pontszám
(4.2 téma), amely azt méri, hogy a tesztek valóban elkapják-e a beinjektált
hibákat, és ezt sokkal nehezebb olcsón kijátszani.

**Közszféra.** Egy állam munkanélküli-biztosítási hivatalát az első kifizetésig
eltelt napok mediánján mérték, és ezt közzétették a törvényhozásnak. A cél
elérésére nehezedő nyomás alatt az egyik regionális iroda csendben „hiányosnak"
kezdte átsorolni a nehezebben feldolgozható igényeket, és kizárta őket a
nevezőből, ami a közzétett mediánt kiválónak mutatta, miközben egyes igénylők
sokkal tovább vártak, mint a jelentés sugallta. A definíció, nem csak a szám
független auditja tárta fel a gyakorlatot. A hivatal megoldása befagyasztotta
a definíciót, nyilvánosan közzétette a kizárási feltételeket, és hozzáadott
egy védőkorlát-metrikát, amely magát a hiányos igények arányát követte, így az
átsorolás megugrása már látható lett, nem rejtett.

## Üzleti érv: indítékok, ROI és TCO

Goodhart törvényének komolyan vételéből a megtérülés a megelőzött
újramunka. Az a szervezet, amely előre tervez védőkorlátokat, szerény
többletmunkát fordít egy második metrika definiálására az első mellé. Az a
szervezet, amely kihagyja ezt a lépést, gyakran egy teljes negyedévet vagy
többet tölt félrevezetett erőfeszítéssel, mielőtt a torzulás felszínre kerül,
majd jön a sokkal nehezebb költség: a kijátszott viselkedés visszacsinálása és
a szám iránti bizalom újjáépítése. A fenti kiskereskedelmi példa tipikus:
olcsó megelőzni, drága kijavítani.

A védőkorlát teljes birtoklási költsége nem nulla: egy második metrika, amelyet
definiálni, műszerezni és felülvizsgálni kell. De ez a költség kicsi és
rögzített ahhoz az ösztönzőhöz képest, amelynek költsége korlátlan, ha hónapokig
csendben a rossz viselkedést jutalmazza, mielőtt bárki észrevenné. Minden
ezután következő téma beárazza ezt a kompromisszumot, ezért szerepel a
védőkorlát-párosítás ajánlásként a könyv hátralévő részében, nem csak itt.

## Antiminták és buktatók

- **Védőkorlát nélküli ösztönzött metrika közzététele:** a könyvben a torzult
  dashboardok legáltalánosabb gyökéroka.
- **A kijátszás személyes hibaként kezelése:** egyéneket hibáztat egy rosszul
  tervezett ösztönzőre adott racionális válaszért, és semmit nem old meg.
- **A számot auditálni, de a definíciót soha:** a klasszikus közszféra hibamód,
  ahol a metrika jól néz ki, mert csendben megváltozott, ki számít.
- **Feltételezni, hogy a diagnosztikaiként bevált metrika biztonságos marad,
  ha értékelővé válik:** a kitettség abban a pillanatban megváltozik, amikor
  jutalom kapcsolódik hozzá, még ha a metrikában semmi más nem változik.
- **A védőkorlát megtervezése csak az első kijátszási eset után:** olyan
  javítás, amely akkor érkezik, amikor a bizalomban esett kár már megtörtént.
- **A távolság figyelmen kívül hagyása:** feltételezni, hogy a metrikát úgy
  olvassák, ahogy a tervezője szánta, miután több vezetői rétegen vagy egy
  nyilvános jelentésen át távolra jutott tőle.

## Érettségi modell

- **1. szint, Kezdeti:** A metrikákat ad hoc ösztönzik, a kijátszási kockázat
  mérlegelése nélkül, és a torzulást csak azután fedezik fel, hogy a minőség
  vagy a bizalom láthatóan szenved.
- **2. szint, Fejlődő:** Néhány csapat utólag felismeri a kijátszást, és
  informálisan igazít, de nincs következetes gyakorlat a védőkorlátok előzetes
  megtervezésére.
- **3. szint, Szabványosított:** A szervezet minden ösztönzött metrikájához
  jóváhagyás előtt dokumentált védőkorlát szükséges, és a négy kijátszási
  mintát megnevezik és oktatják.
- **4. szint, Irányított:** A kijátszási kockázatot aktívan figyelik: a
  definíciókat időszakosan auditálják, a védőkorlát-párokat felülvizsgálják,
  hogy még mindig elkapják-e a torzulást, és a kijátszási eseteket önálló
  metrikaként követik.
- **5. szint, Összehangolt:** A szervezet Goodhart törvényét állandó tervezési
  korlátként kezeli, amelyet minden új metrika javaslatakor automatikusan
  felülvizsgál, és konkrét újratervezésekre tud mutatni, amelyek a torzulást
  még előtte megakadályozták, nem csak utólag.

## Ötletek a vitához

1. Melyik a legnagyobb következményű metrika a szervezetünkben, amelynek ma nincs védőkorlátja?
2. Láttuk-e valaha, hogy egy szám javult, miközben a mögöttes valóság romlott?
3. Ki venné észre, ha csendben megváltozna egy nyilvános metrikánk mögötti definíció?
4. A négy kijátszási minta (küszöb, definíció, időzítés, helyettesítés) közül melyikre hajlamos leginkább a szervezetünk?
5. Mibe kerülne bizalomban felfedezni, hogy egy fontos metrikát egy éven át kijátszottak?

## A legfontosabb tanulságok

- **Goodhart törvénye:** az a mérték, amely céllá válik, megszűnik jó mérték
  lenni, és ez a könyv minden metrikájára vonatkozik.
- A kijátszás **racionális válasz az ösztönzőre**, nem jellemhiba; az
  ösztönzők tervezését javítsd, ne az embereket.
- Részesítsd előnyben az **arányokat, rátákat és kohorszokat** a nyers
  számlálókkal szemben, ahol ugyanazt a viselkedést rögzítik.
- Minden ösztönzött metrikához kell **védőkorlát**, egy időben megtervezve,
  nem a torzulás felfedezése után hozzáadva.
- Figyeld a négy kijátszási mintát név szerint: **küszöb-, definíció-,
  időzítés- és helyettesítéskijátszás**.
- A metrika tervezője és az a személy közötti **távolság**, akinek a
  viselkedését alakítja, növeli a torzulás kockázatát; tartsd rövidre, ahol
  lehet.

## Források és ajánlott olvasmányok

- Goodhart, C. A. E., „Problems of Monetary Management: The UK Experience"
  (1975): Goodhart törvényének eredete.
- Strathern, Marilyn, „'Improving Ratings': Audit in the British University
  System" (1997): a széles körben idézett újrafogalmazás, „when a measure
  becomes a target, it ceases to be a good measure".
- *Seeing Like a State*, James C. Scott (hogyan torzítják az áttekinthető
  metrikák a mért rendszereket, nemzetek léptékén).
- *The Tyranny of Metrics*, Jerry Z. Muller (könyvnyi feldolgozás a
  metrikafüggőségről és annak költségeiről sok szakmán át).
- *Lean Analytics*, Alistair Croll és Benjamin Yoskovitz (hiúsági és
  cselekvésre alkalmas metrikák, valamint védőkorlát-tervezés startup
  környezetben).
- Az Egyesült Államok Kormányzati Elszámoltathatósági Hivatalának (GAO)
  útmutatói a teljesítménymérésről és a GPRA Modernization Actről: a közszféra
  teljesítményjelentése és a kijátszási kockázat.
