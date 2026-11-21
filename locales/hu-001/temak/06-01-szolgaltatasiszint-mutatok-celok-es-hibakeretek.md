# 6.1 Szolgáltatásiszint-mutatók, -célok és hibakeretek

## Áttekintés és indíték

A **[webhelymegbízhatósági mérnökség](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE)**, a Google-nál úttörő módon kialakított és a *Site Reliability Engineering* könyvben dokumentált fegyelem, olyan szókincset adott, amelyre ez a téma közvetlenül épít: a **szolgáltatásiszint-mutató (SLI)** egy szolgáltatás állapotának közvetlenül mért jele, például a kérések késleltetése, a hibaarány vagy az elérhetőség. A **szolgáltatásiszint-cél (SLO)** ennek a mutatónak a célsávja, például a kérések 99,9%-a sikeres 200 ezredmásodpercen belül. A **hibakeret** pedig a megengedett hiány, a kérések 0,1%-a, amelynek kudarca megengedett, és amelyet nem kiirtandó hibának, hanem elkölthető erőforrásnak tekintünk, amely tudatosan használható kockázatvállalásra: kockázatos változtatás szállítására, kísérlet futtatására, vagy annak elfogadására, hogy a tökéletes megbízhatóság nem érhető el, és egy bizonyos ponton túl nem is éri meg az árát.

Ez az utolsó gondolat, a hibakeret mint elkölthető erőforrás, nem pedig nullára csökkentendő szám, a téma, és vitathatóan az egész rész legfontosabb fogalma. Feloldja azt a feszültséget, amely sok szervezetet gyötör: a mérnökök funkciókat akarnak szállítani és észszerű kockázatot vállalni, az üzemeltetés pedig maximális stabilitást. Közös, számszerűsített hibakeret nélkül ez végtelen, politikailag terhelt alkudozássá válik. Ha van, egyszerű, objektív szabály lesz belőle: költs szabadon, amíg van keret, és lassíts, helyezz előtérbe stabilitási munkát automatikusan, amint kifogyott. Ez egy filozófiai vitát számtani kérdéssé alakít.

Nagy csapatoknál az SLO-k és a hibakeretek teszik a megbízhatóságot mérhetővé és megvitathatóvá ahelyett, hogy elérhetetlen, kimondatlan abszolút érték lenne, amelynek minden csapat csendben nem felel meg, miközben homályosan bűntudatot érez. A nagyvállalatok SLO-kkal állítanak fel világos, szerződéses elvárásokat a csapatok között és az ügyfelek felé. A kritikus közinfrastruktúrát működtető közszféra szervezetei védhető, nyilvánosan indokolható megbízhatósági célok kitűzésére használják őket a tökéletesség lehetetlen mércéje helyett, amelyet semmilyen valódi rendszer nem tud fenntartani.

## Alapelvek

- **A 100%-os megbízhatóság szinte bármely rendszernél rossz cél.** Általában elérhetetlen, és egy bizonyos ponton túl hajszolva aktívan sebességet áldoz fel érdemi felhasználói előny nélkül.
- **Az SLO tükrözze, amit a felhasználók valóban észrevesznek és amivel törődnek**, ne önkényes kerek szám legyen, amelyet azért választottak, mert megnyugtatóan hangzik.
- **A hibakeret a megbízhatóságot elkölthető erőforrássá teszi**, és a mérnökségnek és az üzemeltetésnek közös, objektív szabályt ad arra, mikor szállítson gyorsan és mikor lassítson.
- **Az SLI-ket lehetőleg a felhasználó tényleges élményéből kell mérni**, nem csak egy belső rendszer saját magáról jelentett állapotából.
- **A hibakeret kimerülése előre meghatározott, elfogadott választ vált ki**, nem eseti vitát minden alkalommal.

## Ajánlások

### Olyan SLI-ket válassz, amelyek a valódi felhasználói élményt tükrözik

Olyan mutatókat válassz, amelyeket a tényleges felhasználói élményhez a lehető legközelebb mérnek: a kérések sikerességi arányát és késleltetését a peremen vagy a terheléselosztónál mérve, nem csak belső szolgáltatás-állapotellenőrzéseket, amelyek „egészségest" jelenthetnek, miközben a felhasználók valódi problémákat tapasztalnak. Az az SLI, amely olyasmit mér, amit a felhasználó sosem vesz észre, például egy belső komponens technikailag fut, miközben az összkérés mégis hibás, rosszat mér, bármilyen könnyű is műszerezni.

### Az SLO célját az alapján add meg, amire a felhasználóknak valóban szükségük van, ne önkényes kerek szám legyen

Állj ellen a reflexnek, hogy „99,99%-os üzemidő" típusú célt tűzz ki csak azért, mert lenyűgözően szigorúan hangzik. Inkább derítsd ki, milyen megbízhatósági szintet vesznek észre és milyet tartanak fontosnak a felhasználók, a korábbi incidensadatok, a felhasználókutatás és az egyes további megbízhatósági lépcsők elérésének kimutatott költsége alapján, mert a 99,9%-ról a 99,99%-ra jutás gyakran sokkal több mérnöki erőfeszítésbe kerül, mint a 99%-ról a 99,9%-ra jutás került, csökkenő, végül elhanyagolható, a felhasználó által érzékelhető előnyért.

### Kezeld a hibakeretet elkölthető erőforrásként, előre meghatározott válasszal a kimerülésre

Számítsd ki a hibakeretet közvetlenül az SLO-ból (a 30 napra vetített 99,9%-os elérhetőségi cél nagyjából 43 perc megengedett kiesést jelent), és folyamatosan kövesd a költést. Egyezzetek meg előre, bármely konkrét incidens előtt, mi történik, ha a keret kimerül: gyakori, hatékony szabály, hogy a funkciófejlesztés szünetel, és a csapat prioritása automatikusan a megbízhatósági munkára vált, amíg a keret helyre nem áll. Ez az előre meghatározott szabály megszünteti annak szükségét, hogy nyomás alatt, minden egyes incidensnél újra vitassátok a kompromisszumot.

### Használd a hibakeretet tudatos, tájékozott kockázati döntésekhez

Az egészséges, el nem költött hibakeret nem felhalmozandó. Engedély az észszerű kockázatvállalásra: megemelt, de elfogadható kockázatú változtatás szállítására, kaoszmérnöki kísérlet futtatására (a testvérkönyv, a `software-engineering-guide` kaoszmérnöki témája ezt közvetlenül tárgyalja), vagy kockázatosabb architekturális változtatás elfogadására, mert a keret éppen arra van, hogy tudatosan elköltsék, nem arra, hogy érintetlenül megőrizzék. A hibakeret, amelyet sosem költenek el, vagy túlzottan óvatos csapatra, vagy a ténylegesen elért megbízhatósághoz képest túl lazán megadott SLO-ra utal, és mindkettőt érdemes megvizsgálni.

### Rendszeresen vizsgáld felül és módosítsd az SLO-kat, bizonyíték alapján, nem megszokásból

Egy évekkel ezelőtt megadott SLO talán már nem tükrözi a jelenlegi felhasználói elvárásokat, a rendszerarchitektúrát vagy az üzleti prioritásokat. Rendszeres ritmusban nézd át az SLO-kat: ellenőrizd a korábban elért megbízhatóságot, a felhasználói visszajelzéseket, és azt, hogy a cél még mindig érdemi kompromisszumpontot jelent-e, nem pedig vagy könnyen teljesíthető célt, amelyet szigorítani lehetne, hogy másutt nagyobb sebesség legyen, vagy irreálisat, amelynek teljesítéséről a csapat gyakorlatilag lemondott.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs formális SLO (hallgatólagos „legyen olyan megbízható, amilyen csak lehet") | Nincs bevezetési teher | Végtelen, megalapozatlan alkudozás a sebesség és a stabilitás között; nincs közös szabály |
| Törekvő, nagyon magas SLO (99,99%+) | Komolyságot jelez a megbízhatóság iránt | Gyakran fölösleges költség; csökkenő hozam azon túl, amit a felhasználók észrevesznek |
| Bizonyítékalapú, a felhasználói élményre épülő SLO | Valódi értéket tükröz; védhető és elérhető | Valódi adatot és elemzést igényel a helyes megadáshoz |
| Hibakeret előre meghatározott kimerülési válasszal | Megszünteti az eseti alkudozást; objektív, gyors döntéshozatal | Szervezeti egyetértést és fegyelmet igényel az előre meghatározott szabály tényleges betartásához |

A központi feszültség a **törekvés és az elérhetőség** között van. A magas, törekvő SLO úgy érződik, mintha komolyságot jelezne a minőség iránt, de a felhasználók által észrevetteknél messzebb hajszolt megbízhatóság valódi sebességet áldoz fel valódi előny nélkül, és az irreális cél, amelyet a csapat sosem teljesít, mindenkit megtanít arra, hogy az SLO-t egyáltalán ne vegye komolyan. Oldd fel a feszültséget úgy, hogy az SLO-t tényleges bizonyítékra alapozod: mit vesznek észre a felhasználók, mit ért el a rendszer korábban, mibe kerül minden további lépcső, nem pedig törekvésre vagy arra a vágyra, hogy szigorúnak látszódj egy eredménykártyán.

## Kérdések a csapattal való megbeszéléshez

1. **A jelenlegi SLO-nk bizonyítékra épül arról, mit vesznek észre a felhasználók, vagy törekvésből adtuk meg, mert egy magas szám megfelelően komolynak érződött?** Ha tudod, vezesd vissza a jelenlegi cél eredetét, és őszintén értékeld, valódi felhasználókutatást tükröz-e, vagy csak mérnöki megérzést.

2. **Van előre meghatározott, elfogadott válaszunk a hibakeret kimerülésére, vagy a kompromisszumot minden alkalommal újra vitatjuk?** Ha az őszinte válasz az utóbbi, ezt a hiányt érdemes pótolni, mielőtt a következő incidens nyomás alatt kényszeríti ki a vitát.

3. **Költjük-e valaha tudatosan a hibakeretünket egy kiszámított kockázatú változtatásra vagy kísérletre, vagy csak véletlenül fogy el incidensek miatt?** Az a keret, amelyet sosem költenek el tudatosan, túlzottan óvatos csapatra utalhat, amely kihagyja azokat a jogos lehetőségeket, amelyekre a keret létezik.

4. **Az SLI-jeinket a valódi felhasználói élményből mérjük, vagy belső rendszerállapotból, amely nem biztos, hogy tükrözi, amivel a felhasználók ténylegesen találkoznak?** Vesd össze a jelenlegi műszerezést ezzel a különbségtétellel. Ez gyakori hiány még egyébként érett megbízhatósági programokban is.

5. **Mikor vizsgáltuk felül utoljára az SLO-nkat a jelenlegi bizonyítékok fényében, és változott-e bármi, felhasználói elvárások, rendszerarchitektúra, üzleti prioritások, ami indokolná a módosítást?** Ha nem emlékszel friss felülvizsgálatra, ez a hiány maga is megbeszélést érdemel.

6. **Mennyibe kerülne mérnöki erőfeszítésben, ha a jelenlegi SLO-nkat egy további „kilenccel" feljebb vinnénk, és indokolná-e ezt a költséget valódi felhasználói előny?** Ez a konkrét költség-haszon keretezés segít a törekvés és az elérhetőség közti feszültséget valódi számokra alapozni az elvont preferencia helyett.

## Ágazati szemszög

**Startup.** A formális SLO-k gyakran fölöslegesek nagyon korán, amikor a csapat közvetlenül és informálisan tud reagálni a megbízhatósági problémákra. Fogadj el legalább durva, informális SLO-t, amint valódi, fizető ügyfeleid függnek az üzemidőtől, mert egy kifejezett cél fegyelme, még lazán követve is, a legtöbb fiatal cég gondolatánál korábban segít a megbízhatósági munkát a funkciónyomással szemben priorizálni.

**Kisvállalkozás.** A legtöbb modern hosting- és megfigyelhetőségi platform minimális beállítással alapvető üzemidő- és késleltetési adatokat jelent. Ezzel adj meg egyszerű, elérhető SLO-t, ne törekvőt, amelyet korlátozott üzemeltetési kapacitással reálisan nem tudsz követni vagy cselekvésre váltani.

**Nagyvállalat.** Az SLO-k ekkora méretben gyakran valódi pénzügyi következményű, szerződéses szolgáltatásiszint-megállapodások alapját képezik, ami különösen fontossá teszi a bizonyítékalapú célkitűzést és a fegyelmezett hibakeret-kezelést. Fektess be valódi, a felhasználói élményre épülő SLI-kba a kényelmes belső állapotellenőrzések helyett, és az előre meghatározott kimerülési válasz szabályát hivatalosan, vezetői támogatással rögzítsd, még mielőtt nyomás alatt szükség lenne rá.

**Közszféra.** A kritikus infrastruktúra közszféra-béli megbízhatósági céljai néha jogi vagy szabályozási súllyal bírnak, és egy audit vagy nyilvános incidens során felfedezett irreális, el nem ért cél jelentősen rontja az intézményi hitelt. A célokat valódi, dokumentált felhasználói és küldetési szükségletre alapozd, és légy nyilvánosan átlátható arról a tudatos kompromisszumról, amelyet a hibakeret jelent, ahelyett, hogy elérhetetlen tökéletességi mércét sugallnál.

## Példák

**Nagyvállalat.** Egy felhőalapú tárolócég évekig „maximális üzemidőt" célzott formális SLO nélkül, ami krónikus, megoldatlan feszültséget okozott a termékcsapat (amely gyorsan akart funkciókat szállítani) és az infrastruktúracsapat (amely maximális óvatosságot akart) között, és ezt minden kiadástervezési megbeszélésen újra eldöntötték. A 99,95%-os elérhetőségi SLO bevezetése kifejezett hibakerettel és előre meghatározott szabállyal, a funkciófejlesztés automatikusan szünetel, ha a keret kimerül, teljesen megoldotta az ismétlődő alkudozást: mindkét csapat ugyanazt a számot látta, és ugyanabban a szabályban állapodott meg. A cég az egészséges keret időszakaiban mérhetően több szállított funkcióról számolt be, a következő évben pedig a két időszakban, amikor a keret valóban kimerült, mérhető, tudatos lassulásról, pontosan úgy, ahogy a szabály szánta.

**Közszféra.** Egy nemzeti meteorológiai szolgálat nyilvános riasztórendszere évekig a „mindig elérhető" informális elvárása szerint működött, dokumentált cél nélkül, és az ügyeleti csapat jelentős, kezeletlen üzemeltetési terhelést viselt, hogy egy ki nem mondott, gyakorlatilag lehetetlen mércének megfeleljen. Az újonnan bevezetett formális SLO, 99,9%-os elérhetőség, a hibakeretet nyilvánosan érthetően elmagyarázó közleménnyel, kifejezett, védhető engedélyt adott az üzemeltetésnek arra, hogy a kereten belül tervezett karbantartási ablakokat ütemezzen, amit a korábbi, ki nem mondott „mindig elérhető" elvárás politikailag nehézzé tett, még akkor is, ha a rendszer hosszú távú egészségéhez valóban szükséges volt. A hibakeret fogalmát nyíltan, nem elrejtve magyarázó nyilvános kommunikációt kedvezően fogadták, mint az őszinte, érett üzemeltetési gyakorlat jelét, nem a szolgáltatásminőség iránti elkötelezettség gyengülését.

## Üzleti érv: indítékok, ROI és TCO

Az SLO-k és hibakeretek hivatalos bevezetésének megtérülése az, hogy a sebesség és a stabilitás közötti, egyébként végtelen, politikailag költséges alkudozást egyetlen közös, objektív szabállyal oldja fel. A fenti felhőalapú tárolócég példája ezt konkrétan mutatja: két csapat közötti, évek óta ismétlődő megoldatlan feszültséget egyetlen formális cél és egy előre meghatározott szabály oldott fel, jelentős szervezeti energiát felszabadítva, amely korábban ugyanannak a kompromisszumnak az ismételt újravitatására ment el.

A teljes birtoklási költség magában foglalja a bizonyítékalapú cél helyes megadásának elemzői erőfeszítését, és azt a fegyelmet, hogy az előre meghatározott kimerülési választ nyomás alatt is betartsák, akkor is, ha valamelyik különösen kívánt funkciót mégis ki szeretnék szállítani. Ez a fegyelemköltség valódi, de sokkal alacsonyabb, mint a megoldatlan, krónikus alkudozás folyamatos költsége, amely minden tervezési ciklusban határozatlan ideig szervezeti energiát emészt fel.

## Antiminták és buktatók

- **Törekvő SLO megadása bizonyíték nélkül:** irreális célt eredményez, amelyet a csapat nem vesz komolyan, vagy fölöslegesen drágát, amely olyan előnyt hajszol, amelyet a felhasználók nem vesznek észre.
- **Nincs előre meghatározott válasz a hibakeret kimerülésére:** ugyanazt a nehéz kompromisszumvitát kényszeríti ki nyomás alatt minden alkalommal.
- **Az SLI-k mérése belső rendszerállapotból a valódi felhasználói élmény helyett:** „egészségest" jelenthet, miközben a felhasználók valódi problémákat tapasztalnak.
- **Az egészséges hibakeret tudatos elköltésének elmaradása:** túlzott óvatosságra és elszalasztott jogos lehetőségre utalhat.
- **A cél egyszeri megadása, és soha nem felülvizsgálata:** az SLO elavulhat, ahogy a felhasználói elvárások, az architektúra és a prioritások változnak.
- **A hibakeret-szabály opcionálisként kezelése nyomás alatt:** az az előre meghatározott szabály, amelyet felülbírálnak, valahányszor kényelmetlen, nem ad valódi döntéshozatali értéket.

## Érettségi modell

- **1. szint, Kezdeti:** A megbízhatósági célok hallgatólagosak vagy törekvők, formális SLO, SLI vagy hibakeret nincs meghatározva.
- **2. szint, Fejlődő:** Néhány szolgáltatásnak van informális SLO-ja, de az SLI-k nem biztos, hogy a valódi felhasználói élményt tükrözik, és nincs előre meghatározott kimerülési szabály.
- **3. szint, Szabványosított:** Bizonyítékalapú SLO-k, valódi felhasználói élményt tükröző SLI-kkel és előre meghatározott hibakeret-kimerülési szabállyal, következetesen kialakultak a kritikus szolgáltatásoknál.
- **4. szint, Irányított:** A hibakeretet aktívan és tudatosan elköltik kiszámított kockázatvállalásra, az SLO-kat pedig rendszeres, bizonyítékalapú ritmusban felülvizsgálják és módosítják.
- **5. szint, Összehangolt:** Az SLO-k és hibakeretek szervezetszerte beépültek mint a sebesség és a stabilitás kiegyensúlyozásának közös, objektív mechanizmusa, és a szervezet konkrét döntéseket tud megnevezni, amelyeket a keretrendszer tett lehetővé, és amelyeket egy megalapozatlan alkudozás nem oldott volna meg ilyen hatékonyan.

## Ötletek a vitához

1. A jelenlegi SLO-nk bizonyítékra vagy törekvésre épül?
2. Van előre meghatározott válaszunk a hibakeret kimerülésére, amelyet nyomás alatt is valóban betartanánk?
3. Mikor költöttünk utoljára tudatosan egészséges hibakeretet kiszámított kockázatra?
4. Az SLI-jeink a valódi felhasználói élményt mérik, vagy kényelmes belső állapotellenőrzéseket?
5. Mibe kerülne, ha az SLO-nkat még egy „kilenccel" megemelnénk, és indokolt lenne-e ez a költség?

## A legfontosabb tanulságok

- A **szolgáltatásiszint-mutató (SLI)** a valódi felhasználói élményt méri. A **szolgáltatásiszint-cél (SLO)** a bizonyítékalapú célja. A **hibakeret** a tudatosan elkölthető megengedett hiány.
- **A 100%-os megbízhatóság általában rossz cél.** Az SLO-t arra alapozd, amit a felhasználók valóban észrevesznek, és amibe minden további lépcső valóban kerül.
- Kezeld a hibakeretet **elkölthető erőforrásként, előre meghatározott kimerülési válasszal**, így nem kell minden alkalommal nyomás alatt újravitatni a sebesség és a stabilitás kérdését.
- Az SLI-ket a **valódi felhasználói élményből** mérd, ne csak kényelmes belső állapotellenőrzésekből.
- **Rendszeresen vizsgáld felül és módosítsd az SLO-kat**, bizonyíték alapján, mert az elavult cél elveszíti a hasznosságát, ahogy a rendszer és a felhasználói elvárások változnak.

## Források és ajánlott olvasmányok

- *Site Reliability Engineering: How Google Runs Production Systems*, szerkesztők: Betsy Beyer, Chris Jones, Jennifer Petoff és Niall Richard Murphy (az alapmű, amely az SLI-ket, SLO-kat és hibakereteket meghatározza).
- *The Site Reliability Workbook*, szerkesztők: Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara és Stephen Thorne (gyakorlati útmutató az SLO-k és hibakeretek bevezetéséhez).
- *Implementing Service Level Objectives*, szerző: Alex Hidalgo (átfogó, gyakorlatorientált útmutató az SLO-k megtervezéséhez és működtetéséhez).
- *Accelerate: The Science of Lean Software and DevOps*, szerző: Nicole Forsgren, Jez Humble és Gene Kim (a megbízhatósági gyakorlat és a szállítási teljesítmény kapcsolata).
