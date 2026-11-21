# 2.7 Sorbanállás-elmélet

## Áttekintés és indíték

A **[sorbanállás-elmélet](https://en.wikipedia.org/wiki/Queueing_theory)** a
várakozási sorok matematikai tanulmányozása. Furcsán illeszkedik egy szoftverfejlesztési
metrikákról szóló könyvhöz, amíg észre nem vesszük, mennyire sor egy szállítási
csővezeték: egy áttekintőre váró pull request, egy CI futtatóra váró commit, egy
felvételre váró jegy, egy válaszra váró ügyfélszolgálati üzenet. A 2.4 téma már
bemutatta a flow-terhelést és a flow-időt, és megmutatta, hogy egy értékáram
túlterhelése élesen lelassítja a szállítást, a 2.5 és 2.6 téma pedig megmutatta, hogy
a szállítási idő nagy része várakozási idő, nem munkaidő. A sorbanállás-elmélet az a
mögöttes matematika, amely megmagyarázza, miért igaz mindez, nem csak megfigyelt
mintaként.

A legfontosabb eredmény **[Little törvénye](https://en.wikipedia.org/wiki/Little%27s_law)**,
a tétel, amelyet John Little műveletkutató bizonyított 1961-ben: egy stabil
rendszerben az elemek átlagos száma egyenlő az elemek átlagos érkezési rátájának és az
egyes elemek rendszerben töltött átlagos idejének szorzatával. A 2.4 téma már a Flow
Framework saját neveivel használta ezt az eredményt, a flow-terhelés egyenlő az
érkezési ráta szorozva a flow-idővel. A könyv tágabb szókincsében úgy is olvasható,
hogy a folyamatban lévő munka (2.5 téma) egyenlő az új munka érkezési rátája
szorozva a ciklusidővel (2.6 téma). Ez nem ökölszabály vagy néhány tanulmányban
megfigyelt korreláció. Bizonyítás, amely bármely stabil sorra érvényes, függetlenül
attól, mit dolgoz fel a sor, vagy hogyan dönti el, mivel foglalkozzon legközelebb.

Egy nagy csapatnál ez az általánosság a lényeg. Little törvénye olyan józansági
ellenőrzést ad, amely ugyanúgy működik, akár kanban tábla a sor, akár üzenetközvetítő
vagy közös CI csővezeték. Ha a mért folyamatban lévő munkád, érkezési rátád és
ciklusidőd nagyjából nem teljesíti az egyenletet, a három szám egyike téves,
általában azért, mert következetlen a definíció arra, mi számít „folyamatban
lévőnek" vagy „megérkezettnek". A nagyvállalatok és a közszféra szervezetei
tucatnyi ilyen sort működtetnek egyszerre, közös kódáttekintési készleteket, közös
tesztkörnyezeteket, közös jóváhagyási testületeket, és Little törvénye a
legolcsóbb elérhető eszköz egy rossz metrikadefiníció elkapására, mielőtt az rossz
létszám- vagy folyamatdöntést hajtana.

## Alapelvek

- **Little törvénye bizonyítás, nem heurisztika.** A folyamatban lévő munka egyenlő
  az érkezési ráta szorozva a ciklusidővel, bármely stabil sorra, és gyors
  ellenőrzés arra, hogy a szállítási metrikáid belsőleg következetesek-e.
- **A kihasználtság nem lineárisan skálázódik a várakozási idővel.** Ahogy egy közös
  erőforrás megközelíti a teljes kihasználtságot, a sorbanállási késés élesen nő, nem
  fokozatosan. A 95%-ban foglalt erőforrás gyakran sokszor hosszabb ideig vár, mint a
  80%-ban foglalt, nem csak „kicsit rosszabb".
- **A sor átlaga elrejti a legrosszabb esetet.** Ha csak az átlagos várakozási időt
  jelented, elrejted a hosszú, fájdalmas farkat a kapacitás közelében, pontosan azt,
  amitől az 1.6 téma óv, amikor a percentilisek használatát ajánlja az átlagok helyett.
- **Egy sor definíciója ugyanúgy kijátszható, mint bármely más metrika.** Az, hogy
  valami „megérkezettnek", „folyamatban lévőnek" vagy „kiszolgáltnak" számít-e,
  választás, és hangolható úgy, hogy hízelgő legyen a dashboardnak, anélkül hogy
  megváltozna, mi történik valójában a munkával.
- **A csővezeték általában sorok sora.** A szállítási csővezeték több szakaszt
  láncol össze, és a leglassabb szakasz szabja meg az egész lánc tempóját, bármilyen
  gyorsan futnak is a többiek.

## Ajánlások

### Használd Little törvényét, hogy ellenőrizd a saját számaidat, mielőtt megbízol bennük

Vedd a csapatod mért átlagos folyamatban lévő munkáját, az új elemek heti átlagos
érkezési rátáját és az átlagos ciklusidejét, és ellenőrizd, hogy a folyamatban lévő
munka nagyjából egyenlő-e az érkezési ráta és a ciklusidő szorzatával. Ha nem, ne
feltételezd, hogy az elmélet téves. Keresd a tényleges okot: egy következetlenül
számolt szakaszhatár, „blokkoltként" álló, de mégis folyamatbelinek számolt munka,
vagy a ciklusidőtől eltérő ablakon mért érkezési ráta. Ez az egyetlen ellenőrzés
több rossz műszerezést kap el, mint amennyit a legtöbb csapat bármi más módon talál.

### Minden közös, kapacitáskorlátos erőforrás kihasználtságát közvetlenül kövesd

Azonosítsd azokat az erőforrásokat, amelyeket a szállítási csővezeték sok csapat
között oszt meg, egy kódáttekintési készletet, egy CI klasztert, egy staging
környezetet, és mérd, mennyire foglalt mindegyik a rendelkezésre álló kapacitásához
képest, mielőtt a határához közel tervezed futtatni. A teljes kapacitás közelében
működő közös áttekintői csoport olyan áttekintési sorbeli várakozási időket
produkál, amelyek sokkal gyorsabban nőnek, mint az őket kiváltó szerény keresletnövekedés,
éppen ez a dinamika áll a 2.9 téma tanácsa mögött, hogy az első áttekintésig eltelt
időt előremutató mutatóként figyeljük.

### Válaszd szét az érkezési rátát, a sikerességi rátát, a hibaarányt és a kihagyási rátát

Állj ellen annak, hogy mindent, ami elhagyja a sort, egyetlen „átbocsátási" vagy
„kiszolgálási ráta" számba omlassz. Négy dolgot kövess külön: milyen gyorsan érkezik
a munka, mennyi fejeződik be sikeresen, mennyi hibás és igényel újramunkát, és mennyit
hagynak el vagy dobnak el csendben, mielőtt bárki befejezné. Az a csővezeték, amely
azért tűnik gyorsnak, mert a kihagyási rátája csendben emelkedett, nem szállít
valójában többet, és ezt csak e négy ráta külön követése mutatja meg.

### Modellezd a többszakaszos csővezetékeket sorok soraként

Kezelj egy szállítási csővezetéket, vagy bármely többszakaszos folyamatot, egy
incidens életciklusát, egy felvételi csővezetéket, sorok láncaként, nem az „idő"
egyetlen megkülönböztetetlen tömbjeként. Az általános érkezési rátát az első
szakasz határozza meg, az általános teljesítési rátát az utolsó, a csővezeték
teljes hiba- és kihagyásszáma pedig az egyes szakaszok saját számainak összege. Ez
a keretezés azonnal megmondja, melyik szakaszba érdemes fektetni: abba, amelyiknek a
legrosszabb a magas kihasználtság és a magas hiba- vagy kihagyási ráta kombinációja,
nem abba, amelyiket véletlenül a legkönnyebb műszerezni.

### A létszám- és WIP-korlátokat a kihasználtság figyelembevételével állítsd be, ne csak az átbocsátás alapján

Amikor eldöntöd, hány áttekintőre vagy CI futtatóra van szüksége egy csapatnak, ne
méretezd a kapacitást pontosan az átlagos érkezési rátához. Az átlagosan 100%-os
kihasználtságú sor a gyakorlatban végtelen várakozási idejű, mert a valódi érkezések
egyenetlenek, nem tökéletesen simák. Tudatosan tervezz tartalékot, és a „az
áttekintőink szinte mindig foglaltak" állítást kezeld a várható várakozási időkről
szóló figyelmeztető jelként, nem a hatékony erőforrás-elosztás bizonyítékaként.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs formális sorbanállási modell, megérzés alapú létszámtervezés | Gyors indulás; nincs új szókincs a csapatnak | Következetesen alábecsüli, hogyan robban fel a várakozási idő a teljes kapacitás közelében |
| Little törvénye józansági ellenőrzésként a meglévő metrikákon | Olcsó, nem igényel új eszközt, gyorsan elkapja a rossz definíciókat | Csak a következetességet ellenőrzi, önmagában nem diagnosztizálja az okot |
| Teljes sorbanállási szimuláció (érkezési eloszlások, több kiszolgáló) | A várakozási idő viselkedésének legpontosabb előrejelzése terhelés alatt | Valódi statisztikai készséget és karbantartást igényel, amelyet a legtöbb csapat nem fenntart |
| Kihasználtság-követés közös erőforrásokon mélyebb modellezés nélkül | Egyszerű, cselekvésre alkalmas, elkapja az elszabadult várakozási idők legnagyobb egyetlen okát | Semmit nem mond arról, miért magas a kihasználtság, vagy mit tegyünk a mögöttes okkal |

A központi feszültség a **szigor és a bevezethetőség** között áll fenn. A teljes
sorbanállási szimuláció adja a legpontosabb választ, de szinte egyetlen mérnöki
csapat sem építi és tartja karban, és az a modell, amelyben senki nem bízik, vagy
amelyet nem frissít, rosszabb, mint a modell hiánya. Little törvénye és az alapvető
kihasználtság-követés felad némi pontosságot, de nem igényel speciális statisztikai
készséget, és közvetlenül illeszkedik azokba a metrikákba, amelyeket a csapat már
gyűjt a 2.4-től a 2.6-ig terjedő témákhoz. Alapértelmezésként ezeket az olcsó,
bevezethető ellenőrzéseket használd, és a teljes szimulációt a ritka esetre
tartogasd, amikor egyetlen közös erőforrás, egy nagy CI flotta, egy speciális
áttekintői készlet, elég drága ahhoz, hogy indokolja a beruházást.

## Kérdések a csapattal való megbeszéléshez

1. **A mért folyamatban lévő munkánk, érkezési rátánk és ciklusidőnk valóban
   teljesíti Little törvényét, és ha nem, miért nem?** Ez a leggyorsabb elérhető
   diagnosztika egy rossz metrikadefinícióra. Járjátok végig együtt a tényleges
   számokat, és ha az egyenlet nagyjából nem áll, vezesd vissza az eltérést egy konkrét
   definíciós következetlenségre, ahelyett hogy elvetnéd az ellenőrzést.

2. **A szállítási csővezetékünk mely közös erőforrásai működnek a teljes
   kihasználtság közelében, és ismerjük-e valóban a kihasználtsági számukat?** A
   legtöbb csapat meg tud nevezni egy erőforrást, amely „mindig foglaltnak érződik",
   de soha nem mérte közvetlenül a kihasználtságát. Azonosítsd a két-három
   legkorlátozottabb közös erőforrást, és szerezz mindegyikre valódi számot.

3. **A sikert, a hibát és a kihagyást egyetlen átbocsátási számba keverjük, és mit
   látnánk, ha szétválasztanánk őket?** Az egyetlen „befejezett elemek" szám
   emelkedhet akkor is, ha a minőség esik, vagy a munkát csendben elhagyják. Számold
   újra egy közelmúltbeli időszak átbocsátását három külön számként, és beszéljétek
   meg, mit tár fel a felosztás, amit a kevert szám elrejtett.

4. **Hol van a csővezetékünkben a valódi szűk keresztmetszet, a leglassabb szakasz,
   amely az utána következő mindennek szabja a tempót?** A csapatok gyakran abba a
   szakaszba fektetnek, amelyet a legkönnyebb javítani, nem abba, amely ténylegesen
   korlátozza a teljes átbocsátást. Azonosítsd azt a szakaszt, amelyiknek a legrosszabb
   a magas kihasználtság és a magas hiba- vagy kihagyási ráta kombinációja.

5. **Ha bővítenénk a legkorlátozottabb közös erőforrásunk kapacitását, a várakozási
   idő valóban javulna, vagy a kereslet egyszerűen kitöltené?** Ez a kérdés
   elkülöníti a valódi kapacitáshiányt a keresleti problémától, és a válasz
   megváltoztatja, hogy a helyes javítás több létszám, WIP-korlát, vagy a munka
   priorizálási módjának megváltoztatása a sorba lépés előtt.

6. **Újradefiniáltuk-e valaha, mi számít „folyamatban lévőnek" vagy „megérkezettnek"
   úgy, hogy az egy dashboardot jobbá tett, anélkül hogy megváltozott volna, mi
   történik valójában a munkával?** Érdemes ezt őszintén és konkrétan megkérdezni,
   valódi példákkal az elmúlt évből, nem hipotetikus aggályként kezelve.

## Ágazati szemszög

**Startup.** Néhány mérnöknél a legtöbb sor elég rövid ahhoz, hogy a formális
sorbanállási elemzés túlzás legyen. A hasznos szokás kisebb: vedd észre, ha egy
ember, gyakran a legtapasztaltabb mérnök, de facto közös erőforrássá vált, amelyre
minden más vár, és kezeld ezt megnevezésre érdemes kihasználtsági problémaként, akkor
is, ha nincs mögötte formális modell.

**Kisvállalkozás.** Egy kisvállalkozás csapatának ritkán kell bonyolultabb a
kihasználtság követésénél az egy-két valóban közös erőforráson, gyakran egyetlen
áttekintőn vagy egyetlen telepítési csővezetéken, és figyelnie kell arra a pontra,
ahol az „általában elérhető" csendben „általában a szűk keresztmetszet"-té válik. Egy
táblázat elég; dedikált eszköz ezen a léptéken nem szükséges.

**Nagyvállalat.** A közös erőforrások nagyvállalati léptéken gyorsan szaporodnak: egy
központi platformcsapat, egy közös biztonsági áttekintő testület, egy tucatnyi
terméket kiszolgáló közös CI flotta. Ezek pontosan azok az erőforrások, ahol a
kihasználtság-követés megéri az árát, mert egyetlen túlterhelt közös erőforrás
csendben ronthatja a szállítási időt minden tőle függő csapatnál, és egyetlen csapat
saját metrikája sem fogja feltárni a saját csővezetékén kívül élő okot.

**Közszféra.** A több ügynökséges és több szállítós szállítási programok gyakran olyan
közös jóváhagyó testületeken, közös biztonsági akkreditációs folyamatokon és közös
tesztkörnyezeteken vezetik át a munkát, amelyeket egyetlen csapat sem irányít, vagy
tud önállóan átméretezni. E közös kapuk sorbanállási elemzése, érkezési ráta,
kapacitás, kihasználtság, gyakran a legvilágosabb elérhető bizonyíték egy üzleti
érvhez a kapacitás bővítésére vagy a munka kötegelésének megváltoztatására, mielőtt
eléri a kaput.

## Példák

**Nagyvállalat.** Egy felhőinfrastruktúra-szolgáltató belső platformcsapata észrevette,
hogy a változtatások átfutási ideje (2.10 téma) minden olyan termékcsapatnál
felkúszott, amely a közös CI flottájától függött, annak ellenére, hogy egyetlen csapat
sem változtatta meg a munkamódját. Egy kihasználtsági elemzés azt találta, hogy a
flotta a törzsidőben 90% fölött volt foglalt, jóval azon a ponton túl, ahol a
sorbanállás-elmélet azt jósolja, hogy a várakozási idő élesen, nem fokozatosan nő. A
platformcsapat CI kapacitást adott hozzá, és méltányos elosztású ütemezési
szabályzatot vezetett be, hogy egyetlen csapat tevékenységi csúcsa se
monopolizálhassa a sort. A medián CI várakozási idő egy hónapon belül több mint a
felére esett, bizonyítva, hogy a szűk keresztmetszet mindvégig egy közös, láthatatlan
sor volt.

**Közszféra.** Egy nemzeti engedélyezési hivatal digitális szolgáltatási csapata két
éven át egyetlen „hetente lezárt ügyek" átbocsátási számként követte az
ügyintézést, és a szám stabilnak tűnt. Alaposabb elemzés, amely a számot jóváhagyott,
elutasított és a kérelmezők által hosszú késések után elhagyott ügyekre bontotta,
megállapította, hogy az elhagyási arány az ugyanezen időszak alatt majdnem
megháromszorozódott, miközben a jóváhagyások változatlanok maradtak. Little törvénye,
az ügyintézői sorra alkalmazva, megmutatta, hogy a folyamatban lévő munka sokkal
jobban megnőtt, mint amit a csapat megadott átlagos feldolgozási ideje sugallt, vagyis
az ügyek csendben olyan állapotban halmozódtak, amelyet nem számoltak
„várakozónak". A hivatal átstrukturálta az ügykövetési definícióit, hogy minden nyitott
ügyet őszintén számoljon, és olyan ügyintézői kapacitást adott hozzá, amely a
kihasználtságot 85% alatt tartja, és ezt most állandó működési célként követik az
átbocsátási szám mellett.

## Üzleti érv: indítékok, ROI és TCO

Az alapvető sorbanállási elemzés alkalmazásának megtérülése, hogy a „a csővezeték
lassúnak érződik" állítást konkrét, védhető döntéssé alakítja, tartalékot adni ehhez a
közös erőforráshoz, szétbontani ezt a kevert metrikát valódi összetevőire, a
homályos „dolgozzatok gyorsabban" szorgalmazás helyett, amely elhibázza a tényleges okot.
A fenti felhőinfrastruktúra-példa, amely a várakozási időt kapacitás- és
ütemezési javítással felezte meg az egyes csapatok viselkedésének bármilyen
megváltoztatása nélkül, az a minta, amelyet ez az elemzés megbízhatóan hoz: a javítás
szinte mindig olcsóbb, mint minden lefelé lévő csapatot arra kérni, hogy gyorsabban
mozogjon egy szűk keresztmetszet körül, amelyet nem is láthat.

A bevezetés teljes költsége valóban alacsony. Little törvénye és a kihasználtság-követés
nem igényel új eszközt azon túl, amit a 2.4-től a 2.6-ig terjedő témák már kérnek,
hogy gyűjts: érkezési ráta, folyamatban lévő munka és ciklusidő. A beruházás
többnyire elemzői fegyelem, a számok egymáshoz mérése és a közös erőforrások
kihasználtságának időszakos felülvizsgálata, mielőtt azok a szervezet következő
megmagyarázhatatlan átfutásiidő-regressziójává válnának.

## Antiminták és buktatók

- **Egy közös erőforrás kapacitásának pontosan az átlagos érkezési rátához
  méretezése:** magas kihasználtságot és elszabadult várakozási időket garantál,
  valahányszor a kereslet akár rövid ideig egyenetlen.
- **Csak az átlagos várakozási idő jelentése, soha percentilis:** elrejti a hosszú
  farkat, amely a legfontosabb azoknak, akik várnak benne.
- **A siker, a hiba és a kihagyás egyetlen átbocsátási számba keverése:** a téma
  lényegi kijátszási vektora. A nyomás alatt álló csapat egészségesnek mutathatja az
  átbocsátást úgy, hogy csendben hagyja emelkedni a kihagyási rátát, az elhagyott
  jegyeket, a csendben eldobott kéréseket, a munkát, amelyet soha nem számolnak
  hibának. A védőkorlát az érkezési, sikerességi, hiba- és kihagyási ráta négy külön,
  látható számként való követése, ugyanazt a fegyelmet követve, amelyet az 1.2 téma a
  könyv minden metrikájától kér, hogy az emelkedő kihagyási ráta ne bújhasson a
  lapos átbocsátási diagram mögé.
- **A „mindig elfoglaltak az embereink" dicséretként kezelése:** a magas
  kihasználtság tünete, a hosszú, kiszámíthatatlan várakozási idők vezető oka.
- **A „folyamatban" újradefiniálása a folyamatban lévő munka csendes
  zsugorítására:** a munkát egy nem számolt állapotba, „blokkolt", „felfüggesztett"
  tolja, anélkül hogy megváltoztatná, mennyi ideig tart befejezni, és megtöri a
  Little-törvény-ellenőrzést, amely egyébként elkapta volna.
- **Annak feltételezése, hogy a sorbanállási modell megépítés után nem igényel
  karbantartást:** az érkezési minták és a kapacitás állandóan változnak, és az elavult
  modell magabiztosan téves előrejelzéseket ad.

## Érettségi modell

- **1. szint, Kezdeti:** Egyetlen sort sem mérnek kifejezetten; a várakozási időről
  anekdotikusan beszélnek: „a dolgok lassúnak érződnek".
- **2. szint, Fejlődő:** Az érkezési rátát, a folyamatban lévő munkát és a ciklusidőt
  legalább egy csővezetékre követik, de soha nem ellenőrzik Little törvényével vagy a
  közös erőforrások kihasználtságával.
- **3. szint, Szabványosított:** Little törvénye rutinszerű következetességi ellenőrzés a
  szállítási csővezetékeken, és a kihasználtságot kifejezetten követik a
  legjelentősebb közös erőforrásokra.
- **4. szint, Irányított:** A sikerességi, hiba- és kihagyási rátát minden jelentős
  sorra külön követik, és a kapacitási döntések kihasználtsági célokat használnak, nem
  csak az átlagos keresletet.
- **5. szint, Összehangolt:** A szervezet a fő csővezetékeit sorok soraiként modellezi,
  szisztematikusan azonosítja a valódi szűk keresztmetszeteket, és konkrét
  kapacitás- vagy folyamatváltozásokra tud mutatni, amelyeket sorbanállási elemzés
  miatt hoztak, mérhető várakozásiidő-javulással.

## Ötletek a vitához

1. Válasszuk ki az egyik szállítási csővezetékünket, és ellenőrizzük, hogy a számai ma teljesítik-e Little törvényét.
2. Nevezzük meg a szervezetünk azon egyetlen közös erőforrását, amelyről a legtöbben egyetértenének, hogy „mindig foglalt", és találjuk meg a tényleges kihasználtsági számát.
3. Hogyan nézne ki az átbocsátási diagramunk, ha az elmúlt negyedévre sikerességi, hiba- és kihagyási rátára bontanánk?
4. Ha ebben az évben pontosan egy közös erőforrás kapacitását kellene bővítenünk, melyikét, és milyen bizonyíték indokolná?

## A legfontosabb tanulságok

- **Little törvénye**, a folyamatban lévő munka egyenlő az érkezési ráta szorozva a
  ciklusidővel, bizonyítás, nem heurisztika, és a legolcsóbb elérhető ellenőrzés
  arra, hogy a szállítási metrikáid belsőleg következetesek-e.
- **A várakozási idő élesen, nem fokozatosan nő, ahogy a kihasználtság a teljes
  kapacitás felé közeledik.** Kezeld a „mindig foglalt" állapotot figyelmeztető jelként,
  nem dicséretként.
- Kövesd külön az **érkezési rátát, a sikerességi rátát, a hibaarányt és a kihagyási
  rátát**; ezek egyetlen átbocsátási számba keverése a téma központi kijátszási
  vektora.
- Modellezz egy többszakaszos csővezetéket **sorok soraként**, és abba a szakaszba
  fektess, amelyiknek a legrosszabb a magas kihasználtság és a magas hiba- vagy
  kihagyási ráta kombinációja, nem abba, amelyiket a legkönnyebb javítani.
- Részesítsd előnyben az olcsó, bevezethető ellenőrzéseket, **Little törvényét és a
  kihasználtság-követést**, a teljes sorbanállási szimulációval szemben, amelyet kevés
  csapat tart fenn.

## Források és ajánlott olvasmányok

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*.
  Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and
  Solve Performance Problems on the Computer Systems You Work With*.
  CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
