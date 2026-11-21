# 3.7 Fejlesztői élmény felmérések és DevEx-metrikák

## Áttekintés és indíték

Ez a téma a 3. részt azokkal a gyakorlati mechanizmusokkal zárja, amelyek
megbízhatóvá teszik minden korábbi téma önbevalláson alapuló adatát: hogyan tervezz
fejlesztői élmény (DevEx) felmérést, amely valódi jelet ad egy népszerűségi verseny
helyett, és hogyan kombináld a felmérési adatokat az objektív műszerezéssel olyan
metrikakészletté, amelyre a szervezet ténylegesen cselekedni tud. Ennek a résznek
minden témája támaszkodik valamilyen önbevallásra, az elégedettség és a jóllét (3.2
téma) a legközvetlenebbül, de a teljesítmény, a kommunikáció és a flow is profitál
egy jól megtervezett felmérésből, egy rosszul megtervezett felmérés pedig mindegyik
értékét egyszerre aláássa.

A **fejlesztői élmény (DevEx)** a tágabb, újabb keretezés, amely ugyanazon alapgondolat
körül jött létre, amelyet a SPACE formalizált: a mérnökök tényleges, mindennapi
élménye a munka elvégzéséről, a súrlódásról, az eszközökről, a kognitív terhelésről, a
visszacsatolási hurkokról, maga is mérhető, javítható dolog, nem csupán puha kulturális
kérdés. A DevEx-kutatás, különösen az Abi Noda, Margaret-Anne Storey, Nicole
Forsgren és Michaela Greiler által javasolt keretrendszer, ezt az élményt három
dimenzió köré szervezi: visszacsatolási hurkok, kognitív terhelés és flow-állapot,
amelyek szorosan illeszkednek és kiterjesztik az eddig mélyen tárgyalt
SPACE-dimenziókat.

Nagy csapatoknál az a különbség, hogy egy felmérés megbízható jelet ad vagy zajt,
vagy ami rosszabb, aktívan félrevezető adatot, teljes egészében az ebben a témában
tárgyalt tervezési részleteken múlik: a kérdések megfogalmazásán, a válaszskála
megválasztásán, a mintavételen és az ütemezésen, és azon, hogyan kommunikálják
vissza az eredményeket a válaszadóknak. A nagyvállalatok és közszféra szervezetek,
amelyek ezeket a felméréseket nagy léptékben, mérnökök ezrein futtatják, nem
engedhetik meg maguknak, hogy elrontsák, mert egy hibás eszköz ekkora léptéknél
magabiztosan téves következtetéseket szül, amelyek valódi erőforrás-allokációs
döntéseket alakítanak.

## Alapelvek

- **A felmérés tervezésének minősége sokkal inkább meghatározza az adat
  megbízhatóságát, mint a felmérés hossza vagy kifinomultsága.** A rövid, jól
  megtervezett felmérés mindig megveri a hosszú, rosszul megtervezettet.
- **A válaszadási arány maga is jel**, nem csupán adatgyűjtési metrika; a csökkenő
  arány gyakran a folyamat iránti bizalom eróziójára utal.
- **Kombináld a felmérési adatokat az objektív műszerezéssel,** ahol csak lehet, az
  1.5 téma műszerezési elvét követve; a felmérési adatot kifejezetten arra használd,
  amit az objektív adat nem tud megragadni.
- **Zárd le a kört a válaszadókkal.** Az a felmérés, amely soha nem vezet látható
  változáshoz, arra szoktatja az embereket, hogy ne vegyék komolyan.
- **A DevEx és a SPACE ugyanannak a mögöttes aggálynak kiegészítő keretezései,**
  nem egymással versengő keretrendszerek, amelyek között választani kell.

## Ajánlások

### A kérdéseket érthetőségre tervezd, és kerüld a sugalmazó vagy kettős kérdéseket

Úgy fogalmazd meg a felmérési kérdéseket, hogy pontosan egyetlen dologról kérdezzenek,
közérthető nyelven, anélkül, hogy a feltevést magába a kérdésbe ágyaznád. A „Mennyire
vagy elégedett az eszközeinkkel és a dokumentációnkkal?” kettős kérdés, amely két
potenciálisan nagyon különböző választ egyetlen zavaros válaszba olvaszt össze. Bontsd
két külön kérdésre. Kerüld az olyan sugalmazó megfogalmazást, mint „mennyivel javította
az élményedet az eszközökbe való közelmúltbeli beruházásunk?”, amely azt feltételezi,
hogy a javulás megtörtént, ahelyett, hogy semlegesen megkérdezné, megtörtént-e.

### Használj következetes válaszskálákat, és a széles bevezetés előtt pilotáld az új kérdéseket

Szabványosíts egy következetes válaszskálát (az öt- vagy hétpontos [Likert-skála](https://en.wikipedia.org/wiki/Likert_scale)
gyakori és jól tanulmányozott) a felmérési eszközödben, hogy a válaszok összehasonlíthatók
legyenek a kérdések között és az időben. Minden új kérdést pilotálj kis csoporttal,
mielőtt szervezetszinten bevezetnéd, hogy elkapd a nem egyértelmű megfogalmazást vagy
a váratlan értelmezést, mielőtt az megrontaná a teljes adathalmazt.

### A válaszadási arányt kezeld önálló diagnosztikai jelként

Kövesd a felmérés válaszadási arányát az egymást követő ciklusokon át, és a csökkenő
arányt kezeld közvetlenül vizsgálandó figyelmeztető jelként, hasonlóan a 3.2 témában
tárgyalt bizalmi jelhez. A csökkenő válaszadási arány gyakran felmérési fáradtságra
utal, a bizalom eróziójára abban, hogy az eredmények cselekvéshez vezetnek, vagy
növekvő gyanúra, hogy az anonimitás nincs valóban védve, és ezek bármelyike közvetlen
vizsgálatot érdemel ahelyett, hogy puszta adatgyűjtési kellemetlenségként
elintéznék.

### Kombináld a felmérési adatokat az objektív DevEx-műszerezéssel

Párosítsd a szubjektív felmérési válaszokat objektív jelekkel, ahol léteznek: a
buildidővel, a tesztkészlet futási idejével, a helyi fejlesztői környezet
beállítási idejével, valamint a 3.6 téma flow-idő- és megszakítási adataival. Az a
felmérési válasz, hogy „a buildünk túl lassú”, sokkal inkább cselekvésre késztet a
tényleges mért buildidő-trenddel párosítva, és a kombináció elkapja azokat az
eseteket, amikor az észlelés és az objektív valóság bármelyik irányban eltér,
ami önmagában is megér egy vizsgálatot.

### Zárd le a kört: tedd közzé az eredményeket és a látható követő intézkedést

Minden felmérési ciklus után tégy közzé őszinte összefoglalót az eredményekről,
beleértve azokat is, amelyeket a vezetés szívesebben nem emelne ki, és vállalj
nyilvánosan legalább egy konkrét intézkedést válaszul. Az a felmérés, amely nem
ad látható követést, megtanítja a válaszadókat, hogy az őszinte véleményük nem számít,
ami minden következő ciklusban rontja mind a válaszadási arányt, mind a válaszok
őszinteségét. Ez a kör lezárására vonatkozó fegyelem gyakran az egyetlen
legnagyobb meghatározója annak, hogy egy DevEx-felmérési program évekig hasznos
marad-e, vagy lassan formális pipálgatássá hanyatlik.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Hosszú, átfogó felmérés | Gazdag, részletes adat sok témában | Alacsonyabb válaszadási arány, nagyobb fáradtság, több tér a rosszul megtervezett kérdéseknek |
| Rövid, fókuszált felmérés | Magasabb válaszadási arány, könnyebb jól megtervezni | Kisebb lefedettség; elmulaszthat egy, a választott fókuszon kívül kialakuló problémát |
| Csak felmérési adat | Közvetlenül megragadja a szubjektív élményt | Sebezhető az elfogultsággal szemben, és nem ellenőrizhető az objektív valósággal |
| Felmérés objektív műszerezéssel kombinálva | Elkapja az észlelés és a valóság közötti eltérést, jobban cselekvésre késztet | Több adatintegrációs erőfeszítést igényel |

A központi feszültség a **lefedettség és a válaszminőség között** húzódik. Egy
hosszabb, átfogóbb felmérés több területet fed le, de rontja a válaszadási arányt, és
növeli annak kockázatát, hogy rosszul megtervezett kérdések átcsúsznak; a rövid,
fókuszált felmérés jobb minőségű válaszokat kap, de azt kockáztatja, hogy kihagy
valami fontosat a hatókörén kívül. A feszültséget úgy oldd fel, hogy a központi,
ismétlődő felmérést rövidre és jól pilotáltra tartod, és alkalmi, egyértelműen
megjelölt mélyfúrási felméréseket használsz az olyan konkrét témákra, amelyek
részletesebb feltárást igényelnek, ahelyett, hogy minden ciklusban mindent
lefednél.

## Kérdések a csapattal való megbeszéléshez

1. **Pilotáltunk-e valaha új felmérési kérdést kis csoporttal, mielőtt széles körben
   bevezettük volna, vagy az új kérdések egyenesen a teljes felmérésbe kerülnek?** A
   pilotlépés kihagyása gyakori módja annak, hogy a nem egyértelmű vagy kettős
   kérdések megrontják a teljes adathalmazt, mielőtt bárki észrevenné, hogy a
   megfogalmazás homályos volt.

2. **Mi történt a válaszadási arányunkkal az elmúlt néhány felmérési cikluson át, és
   megvizsgáltuk-e a csökkenést, ha volt?** Kezeld ezt a trendet valódi,
   megbeszélést érdemlő jelként, nem csak mellékesen megjegyzendő adatgyűjtési
   kellemetlenségként.

3. **Kombináljuk-e a felmérési adatot bármilyen objektív műszerezéssel, vagy a
   szubjektív észlelés teljesen önállóan áll a jelentésünkben?** Azonosíts legalább
   egy helyet, ahol egy felmérési kérdés objektív adattal, buildidővel,
   telepítési gyakorisággal való párosítása cselekvésre késztetőbbé tehetné az
   eredményt.

4. **Milyen konkrét intézkedést tettünk az utolsó felmérési ciklusunk közvetlen,
   látható eredményeként, és közöltük-e ezt vissza a válaszadókkal?** Ha az őszinte
   válasz az, hogy „semmi láthatót”, ez a hiány valószínűleg már rontja az eszköz
   iránti bizalmat, akár megjelent már a válaszadási arányban, akár nem.

5. **Sugalmazóak vagy kettősek-e a jelenlegi felmérési kérdéseink, és észrevennénk-e,
   ha azok lennének?** Nézd át a tényleges jelenlegi kérdéseidet ezzel a konkrét
   próbával, csoportgyakorlatként.

6. **Hogyan viszonyul a DevEx- vagy SPACE-felmérési adatunk az objektív jelekhez,
   amikor úgy tűnik, hogy nem értenek egyet, és mit mond nekünk ez az eltérés?** Az
   az eset, amikor az észlelés és az objektív adat eltér, gyakran diagnosztikailag
   értékesebb, mint amikor egyeznek, mert maga a rés informatív.

## Ágazati szemszög

**Startup.** Egy egyszerű, nagyon rövid pulzusfelmérés, olykor csak egy-két kérdés,
informálisan és gyakran futtatva, ekkora léptéknél általában elegendő, és a
formális eszköztervezési szigor kevésbé számít, amikor egy alapító még mindig
rendszeresen közvetlenül beszélhet szinte mindenkivel.

**Kisvállalkozás.** Egy ingyenes vagy olcsó felmérőeszköz rövid, adaptált
kérdéskészlettel, negyedévente futtatva, itt az érték nagy részét megragadja
dedikált felméréstervezési szakértelem nélkül. A kör lezárásának fegyelmét
részesítsd előnyben a kifinomultsággal szemben; még egy kis csapat is profitál abból,
ha láthatóan cselekszik azon, amit egy rövid felmérés feltár.

**Nagyvállalat.** A felmérés tervezésének minősége ekkora léptéknél óriási
jelentőségű, mert egy hibás kérdés vagy megszegett anonimitási garancia egyszerre
rontja meg az adatot válaszadók ezrein, és az ebből fakadó magabiztosan téves
következtetések jelentős erőforrás-allokációs döntéseket téríthetnek el. Fektess be
valódi felméréstervezési szakértelembe, vagy működj együtt egy bejáratott
DevEx-mérési platformmal, ahelyett, hogy házon belül ad hoc eszközt építenél.

**Közszféra.** A válaszadási arány és a bizalom különösen törékeny azokban a
szervezetekben, ahol a munkatársak már eleve óvatosak lehetnek azzal kapcsolatban,
hogyan használják belül az adatokat. Túlfektess az átlátható anonimitási
garanciákba és a látható követő intézkedésbe, kifejezetten azért, hogy kiépítsd azt a
bizalmat, amely őszinte válaszadási arányt tesz elérhetővé egy olyan környezetben,
ahol az adathasználattal kapcsolatos szkepticizmus a tipikus magánszektorbeli
helyzetnél már eleve magasabb lehet.

## Példák

**Nagyvállalat.** Egy szoftvercég első DevEx-felmérése tartalmazott egy kérdést,
amely a mérnököket arra kérte, értékeljék az „eszközökkel és folyamattal való
elégedettséget”, ami kettős kérdés, amely két nagyon különböző aggályt kevert össze.
Amikor a kombinált pontszám közepesre sikerült, a vezetés nem tudta megmondani, hogy a
probléma az eszközökben, a folyamatban vagy mindkettőben volt-e, és a kezdeti
javítási erőfeszítések két negyedéven át rossz területet céloztak. A kérdés
szétválasztása egy későbbi átdolgozásban feltárta, hogy az eszközpontszám valójában
erős, a folyamatpontszám pedig gyenge, ami a beruházást egy körülményes kiadás-
jóváhagyási folyamat egyszerűsítése felé terelte, és ez egy negyedéven belül
mérhető elégedettségi javulást hozott, ellentétben a korábbi, az eszközökre
összpontosító erőfeszítéssel, amely alig mutatott hatást.

**Közszféra.** Egy nemzeti digitális ügynökség első DevEx-felmérésének válaszadási
aránya 30% alatt volt, és egy belső felülvizsgálat megállapította, hogy a munkatársak
széles körben hitték, mint kiderült, helyesen, hogy az egyes menedzserek láthatják,
ki válaszolt és ki nem, noha az összesített eredményeknek anonimnak kellett volna
lenniük. Az ügynökség valóban független, harmadik féltől származó felmérési
platformra állt át ellenőrzött anonimitással, a változást kifejezetten és ismételten
kommunikálta, és közzétett egy világos összefoglalót az előző ciklus eredményeiről
három, válaszul tett konkrét intézkedéssel. A válaszadási arány két cikluson belül
70% fölé emelkedett, és az ügynökség vezetése kifejezetten a valódi anonimitás és a
látható követő intézkedés kombinációjának tulajdonította, hogy az eszköz iránti
bizalom helyreállt.

## Üzleti érv: indítékok, ROI és TCO

Egy jól megtervezett DevEx-felmérési program megtérülése megbízható, cselekvésre
alkalmas adat egy olyan dimenzióról, a fejlesztői élményről, amely máskülönben
láthatatlan marad, amíg fluktuációként vagy szállítási lassulásként fel nem
bukkan. A fenti szoftvercégpélda mutatja a rossz tervezés költségét: két negyedévnyi
félrevezetett javítási erőfeszítés, mert egyetlen rosszul megfogalmazott kérdés két
különálló aggályt kevert össze.

A teljes birtoklási költség (TCO) magában foglalja a felmérőeszközt, az ebben a
témában ajánlott tervezési és pilotálási fegyelmet, és a folyamatos
elkötelezettséget, hogy minden ciklusban látható követő intézkedéssel zárjuk a kört.
Ez az elkötelezettség, inkább, mint bármilyen eszközköltség, határozza meg, hogy egy
felmérési program évekig hasznos marad-e, vagy olyan pipálgatássá hanyatlik, amely
idővel egyre kevésbé megbízható adatot állít elő.

## Antiminták és buktatók

- **Kettős vagy sugalmazó kérdések:** különálló aggályokat kevernek össze vagy
  torzítják a válaszokat, és pilotálás nélkül gyakran észrevétlenek maradnak.
- **A pilotlépés kihagyása új kérdéseknél:** hagyja, hogy a homályos megfogalmazás
  megrontsa a teljes léptékű adathalmazt.
- **A csökkenő válaszadási arány figyelmen kívül hagyása:** önmagában elmulaszt egy
  fontos bizalmi jelet.
- **A kör soha nem lezárása látható követő intézkedéssel:** arra tanítja a
  válaszadókat, hogy az őszinte véleményük nem számít, rontva a jövőbeli
  adatminőséget.
- **A felmérési adat önmagában elégségesnek tekintése objektív megerősítés
  nélkül:** elmulaszt olyan eseteket, amikor az észlelés és a valóság bármelyik
  irányban eltér.
- **Gyenge vagy ellenőrizhetetlen anonimitási garanciák:** a leggyorsabb módja
  annak, hogy mind a válaszadási arány, mind a válaszok őszintesége összeomoljon.

## Érettségi modell

- **1. szint, Kezdeti:** A felmérési kérdések ad hoc jellegűek és pilotálatlanok, a
  válaszadási arányt nem követik jelként, és az eredmények ritkán vezetnek látható
  intézkedéshez.
- **2. szint, Fejlődő:** Van némi felméréstervezési fegyelem, de a pilotálás
  következetlen, és a kört nem zárják le megbízhatóan a válaszadókkal.
- **3. szint, Szabványosított:** A kérdéseket a bevezetés előtt pilotálják, a
  válaszadási arányt követik és csökkenése esetén vizsgálják, az eredményeket
  következetesen közzéteszik legalább egy konkrét követő intézkedéssel.
- **4. szint, Irányított:** A felmérési adatot rendszeresen kombinálják objektív
  műszerezéssel, és a kettő közötti eltérést aktívan vizsgálják diagnosztikai
  jelként.
- **5. szint, Összehangolt:** A szervezetnek érett, megbízható, több évre kiterjedő
  felmérési programja van következetesen magas válaszadási arányokkal, minden
  ciklusból bemutatható látható intézkedéssel, és referenciával arra, hogy a rosszul
  megtervezett kérdéseket elkapják és kijavítják, mielőtt azok megrontanák az
  adatot.

## Ötletek a vitához

1. Zavart vagy félrevezetett-e valaha egy válaszadót az eszközünk bármelyik jelenlegi kérdése?
2. Mi volt az utolsó konkrét intézkedés, amelyet a felmérési adat közvetlen eredményeként tettünk?
3. Honnan tudnánk, hogy az anonimitási garanciánk megsérült, akár véletlenül is?
4. Hol egyezik vagy tér el a felmérési adatunk az objektív műszerezéstől, és mit mond ez nekünk?
5. Mi kellene ahhoz, hogy megduplázzuk a jelenlegi válaszadási arányunkat?

## A legfontosabb tanulságok

- A felmérés **tervezési minősége**, a világos, egy fogalmat tartalmazó, elfogulatlan
  kérdések, többet számít a hossznál vagy a kifinomultságnál.
- **A válaszadási arány önmagában jel**; vizsgáld a csökkenést, ne puszta
  kellemetlenségként kezeld.
- **Kombináld a felmérési adatot objektív műszerezéssel,** hogy elkapd az észlelés
  és a valóság közötti eltérést.
- **Zárd le a kört**: minden ciklusban tegyél közzé eredményeket és látható követő
  intézkedést, különben az eszköz iránti bizalom erodálódik.
- **A DevEx és a SPACE kiegészítő,** nem versengő keretezései a fejlesztői élmény
  iránti ugyanazon mögöttes aggálynak.

## Források és ajánlott olvasmányok

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren, and Michaela Greiler,
  "DevEx: What Actually Drives Productivity," *ACM Queue* (2023): a DevEx
  keretrendszer visszacsatolási hurkokkal, kognitív terheléssel és flow-állapottal.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and
  Win in the 21st Century*, Jeff Lawson műve (szervezeti beruházás a fejlesztői
  élménybe).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, Louis M. Rea
  és Richard A. Parker műve (általános felméréstervezési módszertan, amely a
  DevEx-eszközökre is alkalmazható).
