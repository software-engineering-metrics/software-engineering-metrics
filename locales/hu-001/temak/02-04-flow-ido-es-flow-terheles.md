# 2.4 Flow-idő és flow-terhelés

## Áttekintés és indíték

A **flow-idő** az az összes eltelt idő, amely attól kezdve telik, hogy egy flow-elem
(2.2 téma) belép az értékáramba, odáig, amíg leszállítják, és a válaszkészséget
méri a teljes úton, attól kezdve, hogy egy üzleti igényt azonosítanak, addig,
amíg az ügyfél megkapja az értéket. A **flow-terhelés** az értékáramban egy adott
pillanatban aktív vagy várakozó flow-elemek teljes száma, a Flow Framework neve
arra, amit a 2.5 téma folyamatban lévő munkának nevez. Együtt ez az a két Flow
Framework-metrika, amely a legközvetlenebbül kapcsolódik a sorbanállás
matematikájához, mert a flow-terhelés nem csak korrelál a flow-idővel, hanem
matematikailag meghatározza.

Ez a kapcsolat **[Little törvénye](https://en.wikipedia.org/wiki/Little%27s_law)**,
a sorbanállás-elmélet egy bizonyítása (a 2.7 téma teljes egészében tárgyalja),
amely kimondja, hogy egy stabil rendszerben az elemek átlagos száma egyenlő az
átlagos érkezési ráta és az egyes elemek rendszerben töltött átlagos idejének
szorzatával. Ide alkalmazva: a flow-terhelés egyenlő az érkezési ráta szorozva a
flow-idővel. Ez a téma leghasznosabb ténye, mert a korábban kvalitatív érvet, „túl
vagyunk terhelve, a dolgok túl sokáig tartanak", bizonyítható, kvantitatív érvvé
alakítja, amelyet egy üzleti vezető nem tud könnyen elvetni: ha a flow-terhelés
tovább emelkedik, miközben az érkezési ráta változatlan, a flow-idő
matematikailag garantáltan szintén emelkedik, nem csak valószínűleg.

A nagy csapatoknál ez gyakran a teljes keretrendszer legmeggyőzőbb száma. Az az
üzleti vezető, aki ellenáll annak, hogy nemet mondjon az új munkának, mert minden
kérés külön-külön indokoltnak érződik, gyakran elfogadja, hogy egy értékáram
túlterhelése bizonyíthatóan lelassít minden benne lévő elemet, ha a flow-terhelést
követik, és a flow-idővel való kapcsolatot közvetlenül megmutatják, nem
elvontan érvelnek vele. A sok párhuzamos stratégiai kezdeményezést egyensúlyozó
nagyvállalatok és a tucatnyi párhuzamos munkafolyamatot futtató kormányzati
programok egyaránt erre a bizonyításra támaszkodnak, nem csak a mögötte álló
intuícióra, hogy indokolják: nem kezdenek egyszerre több munkát.

## Alapelvek

- **A flow-terhelés matematikailag meghatározza a flow-időt, Little törvényén át.**
  Ez nem korreláció; bizonyítás, amely minden stabil értékáramra érvényes.
- **A flow-idő az egész értékáramot átfogja, nem csak a mérnökséget.** Akkor
  kezdődik, amikor egy üzleti igényt azonosítanak, nem amikor a mérnökség átveszi
  a munkát, amelyet a 2.6 téma ciklusideje tovább bont.
- **Az emelkedő flow-terhelés az emelkedő flow-idő legkorábbi figyelmeztető jele.**
  Mivel a kapcsolat bizonyítható, a flow-terhelés előremutató mutatóként
  figyelhető, nem csak akkor derül ki, amikor a flow-idő már romlott.
- **Az értékáram belépési pontját rögzíteni és dokumentálni kell.** Az, hogy hol
  indul a flow-idő órája, definíciós választás, amelyet ugyanaz a kijátszási
  kockázat fenyeget, mint a könyv bármely más metrikahatárát.
- **Egy üzleti vezető közvetlenül cselekedhet a flow-terhelésre.** A flow-idővel
  ellentétben, amely követő mérés, a flow-terhelés emelő: az új munka
  megkezdésének megtagadása ma elérhető lépés.

## Ajánlások

### A flow-idő mérése előtt rögzítsd és dokumentáld az értékáram belépési pontját

Döntsd el kifejezetten, hogy a flow-idő akkor kezdődik-e, amikor egy üzleti igényt
először azonosítanak, amikor formálisan jóváhagyják, vagy amikor a mérnökség
megkezdi a munkát, és dokumentáld ezt a választást úgy, ahogy az 1.4 téma bármely
metrikachartára ajánlja. Ez az egyetlen döntés határozza meg, hogy a flow-idő
valódi végpontól végpontig tartó válaszkészséget mér, vagy csak annak szűkebb
szeletét, amelyet a mérnökség irányít, és a definíció későbbi, közzététel nélküli
megváltoztatása a téma központi kijátszási kockázata.

### A flow-terhelést folyamatosan kövesd, ne időszakosan

Mivel a flow-terhelés Little törvényén át a még érkező flow-idő előremutató mutatója,
élő, folyamatosan frissített számként kövesd, nem időszakos pillanatképként. Az a
flow-terhelés, amely már hetek óta emelkedett, mire valaki megnézi, már éppen
olyan ideje csendben, láthatatlanul növeli a flow-időt, mielőtt a metrika utolérte
volna.

### Használd Little törvényét kifejezetten, ha WIP-korlátért vagy kapacitásbővítésért érvelsz

Amikor amellett érvelsz, hogy kevesebb párhuzamos munkát kezdjünk, vagy
kapacitást bővítsünk, a tényleges egyenletet mutasd be, ne csak az ajánlást: a
flow-terhelés egyenlő az érkezési ráta szorozva a flow-idővel, tehát ha az
érkezési ráta nagyjából rögzített, a flow-terhelés csökkentése matematikailag
garantáltan csökkenti a flow-időt. Ez lényegesen erősebb érv egy szkeptikus
érdekeltnek, mint a számszerűsítetlen állítás, hogy „túl elfoglaltak vagyunk",
mert bizonyítható, nem csak állított.

### A javítás javaslata előtt különítsd el a flow-időt a flow-terhelés mögöttes okaitól

Ha a flow-terhelés magas, vizsgáld meg, melyik flow-elemtípus (2.2 téma) hajtja
valójában: túl sok egyszerre megkezdett funkció, kezeletlen hibák backlogja, vagy
egy közös jóváhagyásra váró kockázati munka. Minden ok más javítást implikál, és a
„magas a flow-terhelés" egyetlen, megkülönböztetetlen problémaként kezelése
általános, eredménytelen választ szül.

### Ellenőrizd keresztbe a flow-időt a ciklusidővel, hogy elkülönítsd, hol keletkezik a késés valójában

Mivel a flow-idő az egész értékáramot átfogja, a ciklusidő (2.6 téma) pedig csak
a mérnöki részét, hasonlítsd össze közvetlenül a kettőt. A flow-idő és a ciklusidő
közötti nagy különbség azt jelenti, hogy a késés nagy része még azelőtt történik,
hogy a mérnökség látná a munkát, jóváhagyási sorokban, priorizálási backlogokban
vagy csapatok közötti átadásokban, ami egészen más javítás felé mutat, mint a
magán a mérnökségen belül koncentrálódó különbség.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| A flow-idő mérése csak a mérnökségi átvételtől | Egyszerű, megfelel a meglévő ciklusidő-műszerezésnek | Kihagyja a mérnökség előtti késést, alulbecsüli a valódi válaszkészséget |
| A flow-idő mérése a tényleges üzleti igény azonosításától | Megragadja a valódi végpontól végpontig tartó válaszkészséget | A mérnökség közvetlen irányításán kívüli szakaszok műszerezését igényli |
| Időszakos flow-terhelési pillanatképek | Olcsó alkalmanként kiszámolni | Elveszíti az előremutató mutató értékét; az emelkedő terhelés túl sokáig észrevétlen marad |
| Folyamatos flow-terhelés-követés | Élő, cselekvésre alkalmas előremutató mutató | Folyamatos eszközintegrációt igényel, nem csak alkalmi jelentést |

A központi feszültség a **hatókör és a műszerezés elérhetősége** között áll fenn. A
flow-idő mérése csak a mérnökségi átvételtől sokkal könnyebben műszerezhető, mert a
2.6 téma már gyűjtött ciklusidő-adatait használja újra, de csendben alulbecsüli a
valódi válaszkészséget, mert figyelmen kívül hagyja mindazt, ami azelőtt történik,
hogy a mérnökség látja a munkát. Úgy oldd fel a feszültséget, hogy a szűkebb,
mérnökségi hatókörű méréssel indulsz, ha ma csak azt tudod műszerezni, de a
flow-idő kezdőpontjának felfelé tolását, az üzleti igény azonosításába és
priorizálásába, közeljövőbeli prioritásként kezeld, nem végleges korlátként.

## Kérdések a csapattal való megbeszéléshez

1. **Hol indul ma valójában a flow-idő órája, és a szervezetben mindenki egyetért
   abban, hogy ez a megfelelő kezdőpont?** Az eltérés aközött, hogy az érdekeltek
   hol feltételezik az óra indulását, és hol indul valójában, a metrika iránti
   bizalmatlanság gyakori, csendes forrása. Erősítsd meg, hogy a dokumentált
   definíció megfelel a közös értelmezésnek.

2. **Ellenőriztük-e valaha, hogy a mért flow-terhelésünk, érkezési rátánk és
   flow-időnk valóban teljesíti-e Little törvényét?** Ha nagyjából nem
   egyensúlyoznak, a három szám egyike következetlenül van mérve. Járjátok végig
   együtt a tényleges számokat, ahelyett hogy feltételeznétek, hogy az ellenőrzés
   sikerülne.

3. **A flow-terhelést folyamatosan követjük, vagy egy egyenletes emelkedés hetekig
   észrevétlen maradna, mielőtt valaki ellenőrizné?** Az előremutató mutató csak
   akkor véd, ha valaki valóban közel valós időben figyeli, nem csak egy negyedéves
   jelentésben vizsgálja.

4. **Amikor a flow-terhelés emelkedik, meg tudjuk mondani, melyik flow-elemtípus
   hajtja valójában, vagy egyetlen megkülönböztetetlen számként olvasódik?** Az
   általános „túlterheltek vagyunk" diagnózis általános, gyakran eredménytelen
   választ szül. Ellenőrizd, hogy a jelenlegi műszerezésed valóban tudja-e az
   emelkedő terhelést konkrét okhoz rendelni.

5. **Mekkora a különbség a flow-időnk és a ciklusidőnk között, és ez a különbség
   arra utal, hogy a késés nagy része azelőtt vagy azután történik, hogy a
   mérnökség látja a munkát?** Ez az összehasonlítás gyakran feltárja, hogy a
   legnagyobb javítási lehetőség teljesen a mérnökség saját irányításán kívül van.

6. **Szűkítette-e valaki csendben a flow-idő kezdőpontját, hogy a szám jobban
   nézzen ki, anélkül hogy a változást dokumentálták vagy közzétették volna?**
   Ez a téma központi kijátszási kockázata, kimondva. Kérdezd meg őszintén, hogy a
   definíciótok sodródott-e valaha így.

## Ágazati szemszög

**Startup.** A flow-terhelés általában alacsony, egyszerűen mert nincs elég ember,
hogy egyszerre sok munkát kezdjenek, de ugyanaz a matematikai összefüggés azonnal
érvényes, amint egy alapító vagy vezető mérnök személyes szűk keresztmetszetté
válik sok párhuzamos kezdeményezésnél. Kövesd informálisan a flow-terhelést
dedikált eszközök nélkül is, mert Little törvénye mérettől függetlenül érvényes.

**Kisvállalkozás.** Az éppen aktív dolgok egyszerű, közös listája általában elég a
flow-terhelés kiszámításához dedikált értékáram-menedzsment szoftver nélkül. A
hasznos szokás, hogy elég rendszeresen ellenőrizzük, hogy az emelkedő számot
korán elkapják, ne csak akkor derüljön ki, amikor a flow-idő már láthatóan romlott.

**Nagyvállalat.** Itt éri meg Little törvénye az árát érvként, nem csak
metrikaként: a tucatnyi párhuzamos stratégiai kezdeményezést egyensúlyozó nagy
szervezet a flow-terhelés és a flow-idő közötti bizonyítható összefüggéssel
bizonyítékalapú érvet építhet a munka sorba rendezésére, amit a tisztán kvalitatív
„túl elfoglaltak vagyunk" érv ritkán ér el elszánt érdekelti nyomással szemben.

**Közszféra.** A többéves programok rutinszerűen nagy, implicit flow-terhelést
halmoznak fel sok munkafolyamaton át, amelyek mindegyike külön-külön indokolt,
az összegről való szervezetszintű rálátás nélkül. Little törvényének közvetlen
bemutatása, annak megmutatása, hogy a program saját flow-idő-növekedését
matematikailag megmagyarázza a saját emelkedő flow-terhelése, gyakran a
legvilágosabb és legmeggyőzőbb elérhető bizonyíték arra, hogy a munkafolyamatokat
sorba kell rendezni, nem mindet párhuzamosan futtatni a végtelenségig.

## Példák

**Nagyvállalat.** Egy médiatechnológiai cég platformszervezete huszonkét párhuzamos
stratégiai kezdeményezést futtatott olyan kapacitással, amely nagyjából
tizenkettőre volt reális, ezt az eltérést senki nem számszerűsítette, amíg egy új
mérnöki alelnök nem kérte közvetlenül a flow-terhelést. A medián kezdeményezés
flow-ideje az előző évben 40%-kal nőtt, ezt a trendet a vezetés „a munka
nehezebbé válásának" tulajdonította. Little törvényének bemutatása a tényleges
flow-terhelési és érkezési ráta számokkal megmutatta, hogy a növekedést teljes
egészében az emelkedő flow-terhelés magyarázza, a mögöttes munka nehézségének
bármilyen változása nélkül. A szervezet fenntartható flow-terhelésre rendezte
sorba a kezdeményezéseket, és a medián flow-idő két negyedéven belül közel
harmadával csökkent.

**Közszféra.** Egy szövetségi támogatáskezelési hivatal modernizációs programja
tucatnyi párhuzamos munkafolyamaton át halmozott fel flow-terhelést, egyetlen
követett összeg nélkül, minden munkafolyamat szponzora azt hitte, hogy a saját
kezdeményezése elszigetelten megfelelően forrásokkal ellátott. Egy programiroda
Little törvényét használó elemzése megmutatta, hogy a program összesített
flow-ideje, a munkafolyamat jóváhagyásától a leszállításáig tartó idő, szinte
pontosan megjósolható az összesített flow-terhelésből egyedül, ez a megállapítás
meggyőzte a szponzorokat, akik több mint egy éve ellenálltak a
visszapriorizálási érveknek. A program kifejezett flow-terhelési plafont
vezetett be, és az új munkafolyamatok most sorba állnak, ahelyett hogy azonnal
elindulnának a jelenlegi terheléstől függetlenül.

## Üzleti érv: indítékok, ROI és TCO

A flow-terhelés és a flow-idő együttes követésének megtérülése bizonyítható, nem csak
meggyőző érv a munka sorba rendezése mellett, ahelyett hogy mindent párhuzamosan
futtatnának. A fenti médiatechnológiai példa, amely egy egész flow-idő-regressziót
egyedül a flow-terheléssel magyarázott, az a minta, amelyet ez a kombináció
megbízhatóan hoz: egy konkrét, kvantitatív érv sikerül ott, ahol a „túl elfoglalt"
voltra való kvalitatív hivatkozás korábban elbukott a több munka megkezdésére
irányuló valódi szervezeti nyomással szemben.

A teljes birtoklási költség alacsony a meggyőző erejéhez képest: a flow-terheléshez
csak az aktív és várakozó elemek élő számlálása kell, a flow-időhöz az értékáram
belépési pontjának műszerezése, és ez a munka az első alkalommal megtérül,
amikor megakadályozza, hogy egy szervezet több párhuzamos kezdeményezést vállaljon,
mint amennyit a tényleges kapacitása elbír.

## Antiminták és buktatók

- **A flow-idő kezdőpontjának csendes szűkítése a szám hízelgővé tételére:** a
  téma lényegi kijátszási vektora. Az óra indulásának áthelyezése a tényleges
  üzleti igény azonosításától egy későbbi pontra, a mérnökségi átvételre vagy a
  formális jóváhagyásra, csökkenti a flow-időt a valódi válaszkészség
  megváltozása nélkül, és elég fokozatosan történhet ahhoz, hogy egyetlen változás
  se tűnjön szándékos manipulációnak. A védőkorlát a belépési pont kifejezett
  dokumentálása egy metrikachartában (1.4 téma), és időszakos auditálása a
  dokumentált definícióhoz képest, ugyanaz a fegyelem, amelyet a könyv minden
  metrikahatártól kér.
- **A flow-terhelés csak időszakos mérése:** elveszíti az előremutató mutatóként
  való értékét, mert az egyenletes emelkedés hetekig észrevétlen maradhat.
- **A flow-terhelés egyetlen megkülönböztetetlen számként kezelése:** kihagyja,
  melyik flow-elemtípus hajtja valójában a túlterhelést, általános, nem célzott
  választ eredményezve.
- **A flow-idő és a ciklusidő közötti különbség figyelmen kívül hagyása:** kihagyja,
  hogy a késés a mérnökség előtt vagy után koncentrálódik-e, ami egészen más
  javításokat implikál.
- **Kevesebb párhuzamos munka melletti érvelés Little törvényének kifejezett
  bemutatása nélkül:** a kvalitatív felhívást az érdekelt sokkal könnyebben elveti,
  mint a kvantitatív, bizonyítható összefüggést.
- **Annak feltételezése, hogy Little törvénye csak nagy léptéken érvényes:**
  bármely stabil rendszerre érvényes mérettől függetlenül, egyetlen túlterhelt
  egyént is beleértve.

## Érettségi modell

- **1. szint, Kezdeti:** Sem a flow-időt, sem a flow-terhelést nem követik; a
  késésről anekdotikusan beszélnek, alátámasztó adat nélkül.
- **2. szint, Fejlődő:** A flow-időt csak a mérnökségi átvételtől követik, a
  flow-terhelést időszakosan, nem folyamatosan ellenőrzik.
- **3. szint, Szabványosított:** A flow-időt dokumentált, szervezetszintű
  értékáram-belépési ponttól mérik, és a flow-terhelést folyamatosan követik
  előremutató mutatóként.
- **4. szint, Irányított:** Little törvényét kifejezetten használják a kapacitási és
  sorba rendezési döntések indoklására, és az emelkedő flow-terhelést konkrét
  flow-elemtípushoz rendelik, mielőtt javítást javasolnak.
- **5. szint, Összehangolt:** A szervezet kifejezett flow-terhelési plafonokat
  állít be az értékáramain, és konkrét, Little törvényével alátámasztott sorba
  rendezési döntésekre tud mutatni, amelyek mérhetően javították a flow-időt.

## Ötletek a vitához

1. Hol indul valójában a flow-idő órája, és sodródott-e valaha ez a definíció dokumentálatlanul?
2. A mért flow-terhelésünk, érkezési rátánk és flow-időnk nagyjából teljesíti-e Little törvényét?
3. Elég folyamatosan követjük-e a flow-terhelést ahhoz, hogy az egyenletes emelkedést napokon, nem hónapokon belül elkapjuk?
4. Mekkora a különbség a flow-időnk és a ciklusidőnk között, és mit mond ez a különbség arról, hol keletkezik valójában a késés?

## A legfontosabb tanulságok

- A **flow-terhelés matematikailag meghatározza a flow-időt**, Little törvényén át:
  a flow-terhelés egyenlő az érkezési ráta szorozva a flow-idővel, bármely stabil
  értékáramra.
- A **flow-idő az egész értékáramot átfogja**, az üzleti igény azonosításától a
  leszállításig, szélesebben, mint a ciklusidő csak mérnökségi hatóköre (2.6 téma).
- A téma központi kijátszási vektora a **flow-idő kezdőpontjának csendes
  szűkítése**; a védőkorlát egy dokumentált, auditált belépésipont-definíció.
- **Kövesd a flow-terhelést folyamatosan**, ne időszakosan, hogy valódi előremutató
  mutatóként működjön, ne követő felfedezésként.
- Használd Little törvényét **kifejezetten**, ne csak intuícióként, amikor
  WIP-korlátért, kapacitásbővítésért vagy a párhuzamos munka sorba rendezéséért
  érvelsz.

## Források és ajánlott olvasmányok

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
