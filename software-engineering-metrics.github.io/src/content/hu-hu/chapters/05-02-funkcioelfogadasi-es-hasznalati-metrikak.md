# 5.2 Funkcióelfogadási és használati metrikák

## Áttekintés és indíték

A **funkcióelfogadás** azt méri, hogy azok az emberek, akiknek egy funkciót építettek, valóban használják-e, milyen arányban, és hogy ez a használat tartós-e az idő során. Nagyon közvetlen értelemben ez a valóságpróba mindarra, amit a könyv 2–4. része mér: egy szervezet telepíthet gyakran, tarthat fenn kiváló fejlesztői élményt, szállíthat tökéletesen tesztelt kódot, és közben mégis olyasmit építhet, amit senki nem akar. Az elfogadási adatokból derül ki egy mérnöki szervezetnek, hogy a kibocsátása kapcsolódott-e egyáltalán valódi eredményhez. Ez pontosan az 1.3 téma bemenet-kibocsátás-eredmény megkülönböztetése, a könyv legkonkrétabb esetére alkalmazva: egy meghatározott, kiszállított funkcióra.

A téma központi gondja, hogy az elfogadási adatokat, a könyv szinte bármely más metrikacsaládjánál inkább, könnyű úgy mérni, hogy az hízeleg, nem pedig tájékoztat. Egy funkció mutathat lenyűgöző kezdeti elfogadást pusztán kíváncsiságból vagy kikényszerített megjelenítésből (egy modális ablak, amely akkor is felbukkan, ha a felhasználó nem akarja), miközben a valódi, tartós értékteremtés, amelyet az mér, hogy az emberek használják-e tovább, miután az újdonság varázsa elmúlt, egészen más történetet mesél. A valódi elfogadás és az átmeneti csúcs megkülönböztetése a téma központi technikai kihívása, és ha ezt elrontják, a szervezetek rendre olyan funkciókat ünnepelnek, amelyek csendben megbuknak, és olyanokat hagynak el, amelyek éppen csak megtalálták a közönségüket.

Nagy csapatoknál a funkcióelfogadási adatok teszik bizonyítékalapúvá az ütemterv-priorizálást ahelyett, hogy azé döntene, aki a leggyőzőbben érvel a saját csapata munkája mellett. A nagy termékportfóliót kezelő nagyvállalatoknak elfogadási adatokra van szükségük, hogy lássák, mely befektetések térülnek meg. Az állampolgároknak szóló digitális szolgáltatásokat építő közszférabeli szervezeteknek azért kell, hogy bizonyítsák: a közpénz olyan szolgáltatásokat hozott létre, amelyeket az emberek valóban használnak, nem csak olyanokat, amelyek technikailag léteznek.

## Alapelvek

- **A kezdeti és a tartós elfogadás különböző jelek.** A kíváncsiságból vagy kikényszerített megjelenítésből származó csúcs nem ugyanaz, mint a valódi, tartós értékteremtés.
- **Az elfogadást azon a közönségen kell mérni, amelynek a funkciót építették**, nem válogatás nélkül a teljes felhasználói bázison.
- **Az alacsony elfogadású funkció nem automatikusan kudarc.** Lehet, hogy rosszul találják meg, rosszul célozták, vagy egyszerűen új. Vizsgáld meg, mielőtt következtetsz.
- **A használat megtartása fontosabb az egyszeri elfogadási pillanatképnél.** Kövesd, hogy akik kipróbáltak egy funkciót, visszatérnek-e hozzá.
- **Az elfogadási adatokat kijátszhatják kikényszerített megjelenítéssel vagy sötét mintákkal.** Az a szám, amelyet úgy fújtak fel, hogy a funkciót nehéz elkerülni, nem valódi jel.

## Ajánlások

### Különböztesd meg a kezdeti kipróbálást a tartós megtartástól

Két külön számot kövess: azt a százalékot, amely a célközönségből legalább egyszer kipróbálja a funkciót (kezdeti elfogadás), és azt, amely értelmes idő, például négy vagy nyolc hét után még mindig használja (megtartott elfogadás). Az a funkció, amelynél magas a kezdeti kipróbálás és alacsony a megtartás, arra utal, hogy a felfedezhetőség működött, de maga a funkció nem adott elég értéket ahhoz, hogy az emberek visszatérjenek. Ez egészen más diagnózis és egészen más javítás, mint az alacsony kezdeti kipróbálás magas megtartással, amely valóban értékes funkciót sejtet, amelyről túl kevesen tudnak.

### Add meg pontosan a célközönséget, mielőtt az elfogadást méred

A teljes felhasználói bázison mért elfogadás félrevezető lehet, ha a funkciót eleve csak egy adott szegmensnek szánták: a nagyvállalati rendszergazdáknak szóló funkció, amelyet többnyire egyéni felhasználókból álló bázison mérnek, mindig rettenetes elfogadásúnak fog látszani, akármilyen jól szolgálja is azokat, akiknek készült. Az induláskor add meg kifejezetten a célközönséget, és az elfogadást erre a névlőre mérd, ne a teljes felhasználószámra.

### Vizsgáld meg az alacsony elfogadást, mielőtt azt mondod, a funkció megbukott

Az alacsony elfogadási szám több lehetséges okra vezethető vissza, amelyek egészen más választ kívánnak: a funkció valóban nem értékes, a funkció értékes, de rosszul felfedezhető (a felhasználók nem tudják, hogy létezik), a funkció értékes, de rosszul magyarázott (a felhasználók látják, de nem értik a célját), vagy a mérési ablak egyszerűen túl rövid ahhoz, hogy egy lassabban elfogadott funkció megtalálja a közönségét. Mielőtt a további befektetésről, az újratervezésről vagy a kivezetésről döntesz, derítsd ki, melyik áll fenn.

### Figyelj a kikényszerített megjelenítéssel vagy [sötét mintákkal](https://en.wikipedia.org/wiki/Dark_pattern) felfújt elfogadásra

Az az elfogadási szám, amelyet az hajt, hogy a funkciót nehéz elkerülni, egy tolakodó bevezető folyamat, egy modális ablak, amelyet el kell zárni, egy nehezen módosítható alapbeállítás, nem a valódi értékteremtést méri, és ha úgy ünnepeljük, mintha azt mérné, az az 1.2 téma helyettesítéses kijátszási mintáját ismétli meg termékoldalon. Ahol megoldható, párosítsd a nyers elfogadási számokat az adott funkcióra vonatkozó elégedettségi vagy Net Promoter típusú jellel, hogy a kikényszerített megjelenítés, amely nem fordul át valódi elégedettségbe, kiderüljön ahelyett, hogy ünnepelnék.

### Kösd az elfogadási trendeket konkrét termék- és mérnöki döntésekhez

Ha az elfogadás váratlanul nő vagy csökken, vezesd vissza a változást egy konkrét döntésre: felületi változtatásra, az alapbeállítások módosítására, marketingkampányra, teljesítményjavulásra vagy -romlásra, ahelyett, hogy megmagyarázhatatlan rejtélyként kezelnéd a mozgást. Ez az elfogadási adatot cselekvésre ösztönző termék- és mérnöki tanulássá köti, és bezárja a kört egy konkrét változtatás és a valódi használatra gyakorolt mért hatása között.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Mérés a teljes felhasználói bázison | Egyszerű, egyetlen névlő | Félrevezető egy adott szegmensnek szánt funkcióknál |
| Mérés a meghatározott célközönségen | Tisztességes, pontosan tükrözi a szándékolt elérést | Az induláskor tudatos közönségmeghatározást igényel |
| Csak kezdeti kipróbálás | Gyors jel, röviddel az indulás után elérhető | Nem mutatja, hogy a funkció tartós értéket ad-e |
| Kezdeti kipróbálás és megtartás | Megkülönbözteti a kíváncsiságot a valódi értéktől | Hosszabb várakozást (hetek) igényel, mire teljes kép áll össze |

A központi feszültség a **gyorsaság és az őszinteség** között van. A kezdeti kipróbálási adat szinte azonnal elérhető az indulás után, és megfelel a korai eredmények jelentésére nehezedő szervezeti nyomásnak, de önmagában nem tudja megkülönböztetni a kíváncsiságot vagy a kikényszerített megjelenítést a valódi, tartós értéktől. Oldd fel a feszültséget úgy, hogy a kezdeti kipróbálási adatot korán jelented, egyértelműen előzetesként megjelölve, és nyilvánosan vállalod a megtartási vizsgálatot egy rögzített, előre meghatározott időpontban, hogy a korai lelkesedés ne merevedjen meg átgondolatlan sikertörténetté, mielőtt a valódi jelnek ideje lett volna kibontakozni.

## Kérdések a csapattal való megbeszéléshez

1. **A legutóbb kiszállított funkciónál külön tudjuk a kezdeti kipróbálást és a megtartott használatot, vagy csak egyetlen összevont számunk van?** Ha csak összevont szám létezik, az pontosan azt a kíváncsiság és érték közötti különbséget rejti el, amelyet ez a téma központinak tekint.

2. **Az induláskor kifejezetten meghatároztuk a funkció célközönségét, és az elfogadást erre a csoportra mérjük?** Nézd meg, hogy a jelenlegi elfogadási névlőtök egyezik-e azzal, akiknek a funkciót valóban építettétek, vagy egy lényegtelenül tágabb népességre mérve hígul.

3. **Egy alacsony elfogadású funkciónál megvizsgáltuk, hogy a több lehetséges ok közül, az alacsony érték, a rossz felfedezhetőség, a rossz magyarázat vagy az elégtelen idő, melyik áll fenn?** Egy valódi, jelenlegi alacsony elfogadású funkciónál menj végig ezen a diagnosztikai listán ahelyett, hogy alapértelmezésként azt mondanád, „biztos nem értékes".

4. **A jelentett elfogadási számunk egy része fel van fújva kikényszerített megjelenítéssel, tolakodó alapbeállítással vagy elzárandó modális ablakkal, nem valódi, önkéntes használattal?** Légy őszinte: ez gyakori és könnyen belecsúszható minta, különösen akkor, ha korai pozitív eredményeket kell felmutatni.

5. **Amikor egy funkció elfogadása jelentősen elmozdult, vissza tudtuk vezetni egy konkrét változtatásunkra?** Ha a válasz többnyire az, hogy „nem vagyunk biztosak benne", ez a hiány korlátozza, mennyit tud a szervezeted az idők során a saját elfogadási adataiból tanulni.

6. **Párosítjuk az elfogadási számokat valamilyen elégedettségi jellel ugyanarra a funkcióra, vagy csak a nyers használatot követjük?** A magas elfogadás alacsony elégedettséggel párosulva olyan figyelmeztető jel, amelyet a nyers használat önmagában teljesen elmulasztana.

## Ágazati szemszög

**Startup.** A funkcióelfogadás gyakran a legfontosabb jel, amellyel egy fiatal cég rendelkezik, és szorosan kötődik magához a termék-piac illeszkedéshez. Az első funkció indításától fogva kifejezetten a megtartást kövesd, ne csak a kezdeti kipróbálást, mert a valódi érték és a korai kíváncsiság megkülönböztetése döntő, ha a cég fennmaradása múlhat ezen a diagnózison.

**Kisvállalkozás.** A legtöbb analitikai platform minimális beállítással alapvető használati adatokat jelent. A fő fegyelem az, hogy mérés előtt világosan megadd a célközönségedet, ahelyett, hogy az elfogadást a teljes ügyfélkörödre jelentenéd, függetlenül attól, kinek épült az adott funkció.

**Nagyvállalat.** Ekkora méretben az elfogadási adatok nélkülözhetetlenek a nagy termékportfólión átívelő, tisztességes, bizonyítékalapú ütemterv-priorizáláshoz, és a kezdeti kipróbálás és a tartós megtartás megkülönböztetésének fegyelme itt még fontosabb, mert elég nagy felhasználói bázis szinte bármely indításnál lenyűgözőnek látszó kezdeti csúcsot tud produkálni, a valódi értéktől függetlenül.

**Közszféra.** Egy állampolgároknak szóló digitális szolgáltatás elfogadása közvetlen, konkrét mércéje annak, hogy a közberuházás valódi közhaszonná alakult-e, és egy felügyeleti szerv számára gyakran sokkal meggyőzőbb metrika, mint a szállítási vagy tevékenységi szám. Az elfogadást azon a népességen mérd, amelynek a szolgáltatást építették, és légy őszinte azokról az akadályokról (digitális jártasság, hozzáférés, tudatosság), amelyek a szolgáltatás saját kialakításán túl magyarázhatják az alacsony elfogadást.

## Példák

**Nagyvállalat.** Egy projektmenedzsment-szoftvercég új közös szerkesztési funkciót indított, és az első két hétben lenyűgöző, 60%-os kezdeti kipróbálási arányt ünnepelt. A nyolchetes megtartási vizsgálat szerint a kezdeti kipróbálóknak csak 8%-a használta még rendszeresen a funkciót, vagyis a magas kipróbálási arányt szinte teljes egészében egy feltűnő, nehezen elzárható bevezető buboréksúgó hajtotta, nem valódi, tartós érdeklődés. A funkciót abbahagyó korai kipróbálóktól kapott kvalitatív visszajelzések konkrét, javítható használhatósági problémát tártak fel, egy nem intuitív interakciós mintát, amelyet egy célzott újratervezés orvosolt. A megtartott használat a javítás után közel a háromszorosára nőtt, bár a félrevezetően magas kezdeti kipróbálási számot sosem közelítette meg.

**Közszféra.** Egy nemzeti foglalkoztatási szolgálat új online állásközvetítő eszközt indított, és az elfogadást kezdetben az ügynökség teljes regisztrált felhasználói bázisán jelentette, ami elkeserítően alacsony százalékot adott, és veszélyeztette a program további finanszírozását. A felülvizsgált elemzés az elfogadást kifejezetten a regisztrált felhasználóknak arra a részhalmazára mérte, amely az eszköz célágazataiban aktívan munkát keresett, vagyis a tényleges célközönségre, és lényegesen magasabb, pontosabb elfogadási arányt mutatott. A kifejezetten erre a meghatározott közönségre célzott megkereső kampánnyal, valamint egy későbbi megtartási vizsgálattal együtt, amely erős tartós használatot mutatott az elfogadók körében, a program a helyesbített, őszintén célzott metrika alapján kapott további finanszírozást, nem az eredeti, félrevezetően hígított szám alapján.

## Üzleti érv: indítékok, ROI és TCO

A szigorú funkcióelfogadás-mérés megtérülése a bizonyítékalapú ütemterv-befektetés: az a szervezet, amely meg tudja különböztetni a valódi, megtartott értéket a kíváncsiságból fakadó kezdeti kipróbálástól, magabiztosan fektethet be tovább azokba a funkciókba, amelyek valóban működnek, és irányíthatja át az erőfeszítést azoktól, amelyek nem, ahelyett, hogy félrevezető kezdeti csúcsot hajkurászna, vagy idő előtt elhagyna egy valóban értékes, de lassan felfedezett funkciót.

A teljes birtoklási költség többnyire az analitikai műszerezés, amely a legtöbb modern termékanalitikai platformon általában már elérhető, valamint a célközönség kifejezett meghatározásának és a megtartási vizsgálatok vállalásának fegyelme ahelyett, hogy megállnánk egy korai, hiányos jelnél. Ez a fegyelem keveset kerül, és megelőzi azt a sokkal drágább hibát, hogy félreolvasunk egy hamis sikert vagy egy hamis kudarcot.

## Antiminták és buktatók

- **Csak a kezdeti kipróbálás jelentése, a megtartás soha:** nem tudja megkülönböztetni a kíváncsiságot vagy a kikényszerített megjelenítést a valódi, tartós értéktől.
- **Az elfogadás mérése rossz névlőn:** hígítja vagy felfújja a jelet az adott közönségszegmensnek szánt funkcióknál.
- **Annak kimondása, hogy a funkció megbukott, az alacsony elfogadás konkrét okának vizsgálata nélkül:** annak kockázata, hogy elhagyunk egy valóban értékes, de rosszul felfedezhető vagy rossz időzítésű funkciót.
- **A kikényszerített megjelenítéssel vagy sötét mintákkal felfújt elfogadás ünneplése:** az 1.2 téma helyettesítéses kijátszásának termékoldali példája.
- **Az elfogadási mozgások sosem kötődnek konkrét döntésekhez:** korlátozza, mennyit tanul a szervezet a saját adataiból.
- **Használat követése bármilyen párosított elégedettségi jel nélkül:** elmulasztja azt az esetet, amikor a magas használat alacsony valódi értékkel vagy elégedettséggel él együtt.

## Érettségi modell

- **1. szint, Kezdeti:** Az elfogadást nem mérik, vagy csak egyetlen, korai, megtartás nélküli kipróbálási számot jelentenek.
- **2. szint, Fejlődő:** Van némi elfogadáskövetés, de a célközönségek nincsenek pontosan meghatározva, és a megtartást következetlenül mérik.
- **3. szint, Szabványosított:** A kezdeti kipróbálást és a megtartott elfogadást is következetesen követik minden jelentős funkciónál, pontosan meghatározott célközönségre mérve.
- **4. szint, Irányított:** Az alacsony elfogadású funkciók konkrét kiváltó okát rendszeresen megvizsgálják, mielőtt az újratervezésről vagy a kivezetésről döntenek. Az elfogadást elégedettségi adatokkal párosítják.
- **5. szint, Összehangolt:** Az elfogadási adatok közvetlenül és rendszeresen megalapozzák az ütemterv-priorizálási és befektetési döntéseket, és a szervezet magabiztosan vissza tudja vezetni az elfogadási mozgásokat konkrét termék- és mérnöki döntésekre.

## Ötletek a vitához

1. Melyik friss funkciónál mesélt a kezdeti kipróbálás és a megtartott elfogadás egészen más történetet?
2. Az utolsó funkciónk célközönségét az indulás előtt pontosan meghatároztuk, vagy csak utána?
3. Melyik alacsony elfogadású funkció érdemel őszinte kiváltóok-vizsgálatot, mielőtt eldöntjük a sorsát?
4. A jelenlegi elfogadási jelentésünk bármely része fel van fújva kikényszerített megjelenítéssel?
5. Mit mutatna meg a legtöbbet használt funkciónkról az elfogadási és az elégedettségi adatok párosítása?

## A legfontosabb tanulságok

- Különböztesd meg a **kezdeti kipróbálást a tartós megtartástól**. A kíváncsiságból vagy kikényszerített megjelenítésből származó csúcs nem valódi, tartós érték.
- Az elfogadást **pontosan meghatározott célközönségre** mérd, nem egy lényegtelenül tágabb felhasználói bázisra.
- **Vizsgáld meg az alacsony elfogadás konkrét okát**, mielőtt azt mondod, a funkció megbukott. Több, egészen különböző ok egészen különböző választ kíván.
- Figyelj a **kikényszerített megjelenítéssel vagy sötét mintákkal felfújt** elfogadásra, és ennek kiszűrésére párosítsd az elfogadást **elégedettségi jellel**.
- **Vezesd vissza az elfogadási mozgásokat konkrét döntésekre**, hogy az adatokból valódi szervezeti tanulás legyen.

## Források és ajánlott olvasmányok

- *Lean Analytics*, szerző: Alistair Croll és Benjamin Yoskovitz (cselekvésre ösztönző és hiúsági metrikák, a termékhasználati adatokra alkalmazva).
- *Continuous Discovery Habits*, szerző: Teresa Torres (a termékdöntések összekapcsolása az ügyféleredmény-bizonyítékokkal, az elfogadási adatokat is beleértve).
- *Hooked: How to Build Habit-Forming Products*, szerző: Nir Eyal (a megtartás és a szokáskialakítás, valamint a valódi érték és a sötét minták közötti etikai határ).
- *Measure What Matters*, szerző: John Doerr (eredményorientált célkitűzés, amely az elfogadási célok kitűzésére alkalmazható).
