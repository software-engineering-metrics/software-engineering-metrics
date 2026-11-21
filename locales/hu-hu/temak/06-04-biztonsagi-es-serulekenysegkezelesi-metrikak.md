# 6.4 Biztonsági és sérülékenységkezelési metrikák

## Áttekintés és indíték

Ez a téma a 6. részt azzal zárja, hogy a rész által felépített megbízhatósági fegyelmet, a célkitűzést, a védőkorlát-párosítást és az őszinte incidensjelentést, kiterjeszti egy különálló, de szorosan kapcsolódó kockázatra: nem arra, hogy egy rendszer magától meghibásodik-e, hanem arra, hogy valaki szándékosan elrontja vagy kihasználja. A **sérülékenységkezelési** metrikák azt mérik, mennyire jól találja meg és javítja egy szervezet a biztonsági gyengeségeket, mielőtt kihasználnák őket: hány sérülékenység létezik, mennyire súlyosak, és ami döntő, milyen gyorsan javítják őket a felfedezésük után, mert az ismert, de be nem foltozott sérülékenység állandó, számszerűsíthető kockázat, amelyet a szervezet vagy tudatosan, vagy mulasztásból vállalt.

A téma központi gondja közvetlenül párhuzamos a 4.4 téma statikus elemzési találatokról szóló tárgyalásával: a nyers sérülékenységi darabszám gyenge metrika, mert összemossa az apró és a kritikus problémákat, és pontosan ugyanazoknak a kijátszási kockázatoknak van kitéve, definíció szűkítésének, elnyomásnak és küszöbkijátszásnak, amelyeket az 1.2 téma általánosan leír. A biztonsági metrikáknál a különleges kiegészítés a súlyosság szerint követett javítási idő, mert egy hónapokig be nem foltozott kritikus sérülékenység alapvetően más kockázatot jelent, mint ugyanaz a sérülékenység, amelyet egy napon belül elkaptak és kijavítottak, és ezt az információt egy egyszerű darabszám önmagában nem tudja közvetíteni.

Nagy csapatoknál a biztonsági metrikák a közvetlen technikai kockázaton túli következményekkel járnak: a nagyvállalatok szerződéses és hírnévbeli kitettséggel néznek szembe egy adatsértés miatt, a közszféra szervezetei pedig nemzetbiztonsági, jogi és közbizalmi következményekkel, amelyek a biztonsági metrikákat valódi közérdekű üggyé teszik, nem csupán belső mérnöki gonddá. Ez a téma a sérülékenységkezelést ugyanazzal a szigorral és védőkorlát-párosítási fegyelemmel kezeli, amelyet a könyv mindenütt alkalmaz, mert a biztonsági metrikák a könyv által leírt minden kijátszási kockázatnak ki vannak téve, és ha a kijátszás sikerül, a tét ennek megfelelően nagyobb.

## Alapelvek

- **A súlyosság szerinti javítási idő fontosabb a nyers sérülékenységi darabszámnál.** A hónapokig be nem foltozott kritikus probléma alapvetően más kockázat, mint ugyanaz a probléma gyorsan elkapva és kijavítva.
- **A biztonsági metrikák ugyanazoknak a kijátszási kockázatoknak vannak kitéve, mint a statikus elemzési találatok** (4.4 téma), nagyobb téttel, ha a kijátszás sikerül.
- **A súlyossági besorolásnak külső, szabványosított szempontok kellenek**, ahol csak lehetséges, nem tisztán belső megítélés, amely az engedékenység felé sodródhat.
- **A gyorsan közzétett és kijavított sérülékenység egészséges folyamat jele, nem eltitkolandó kudarc.** A közzététel büntetése eltántorítja azt a jelentést, amelyre az egész rendszer épül.
- **A biztonsági adósság a technikai adósság egyik kategóriája** (4.5 téma), és ugyanolyan kifejezett, számszerűsített alapon kell versenyeznie a priorizált javítási kapacitásért.

## Ajánlások

### Elsődleges metrikaként a súlyosság szerinti javítási időt kövesd

Minden felfedezett sérülékenységnél jegyezd fel a súlyosságát (ahol alkalmazható, szabványosított skálával, például a [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System), CVSS), és kövesd a felfedezéstől a valódi javításig eltelt időt, nem a jegy lezárásáig vagy addig, amíg egy javítást beolvasztottak, de még nem telepítettek. Adj meg kifejezett javítási idő célokat súlyosság szerint, jellemzően napokban mérve a kritikus, hetekben az alacsonyabb súlyosságú problémáknál, és ezeknek a céloknak a teljesülését kövesd elsődleges biztonsági egészségmetrikaként, a nyers, súlyozatlan sérülékenységi darabszám helyett.

### Szabványosított súlyossági pontozást használj, ne tisztán belső megítélést

Ahol rendelkezésre áll szabványosított külső pontozási rendszer, mint a CVSS, azt használd a súlyossági besorolás elsődleges alapjaként ahelyett, hogy teljes egészében a belső, potenciálisan következetlen megítélésre hagyatkoznál. Ez az 5.1 téma kiszökött hibák besorolási fegyelmét és a 6.2 téma incidensbesorolási fegyelmét tükrözi, itt kifejezetten a biztonságra alkalmazva, és ellenáll ugyanannak az engedékeny sodródási kockázatnak, amelyre azok a témák figyelmeztetnek, mert a külsőleg lehorgonyzott pontszámot nehezebb csendben lefelé újradefiniálni, mint a tisztán belsőt.

### Építs valóban büntetésmentes sérülékenység-közzétételi és belső jelentési kultúrát

Alkalmazd a 6.2 téma hibáztatásmentes utólagos elemzési elvét közvetlenül a biztonságra: az a mérnök, aki felfedez és jelent egy általa bevitt sérülékenységet, vagy az a kutató, aki felelősségteljesen közzétesz egy külsőleg talált sérülékenységet, értékes szolgáltatást nyújt, nem kudarcot vall be. A közzététel büntetése, belsőleg vagy külső kutatók felé, megbízhatóan eltántorítja éppen azt a jelentést, amelyre az egész sérülékenységkezelési rendszer épül, a valódi kockázatot a föld alá szorítva a kezelt javítási folyamat helyett.

### Kezeld a biztonsági adósságot a technikai adósság hátralékának kategóriájaként

Az ismert, elfogadott kockázatú sérülékenységeket, amelyeket versengő prioritások miatt tudatosan még nem javítottak, vedd fel ugyanabba a látható, számszerűsített technikai adósság-hátralékba, amelyet a 4.5 téma ír le, ugyanazzal a javítási költség és viselési költség keretezéssel. Ez megakadályozza, hogy a biztonsági kockázat vagy láthatatlan, dokumentálatlan „tudunk róla" státuszba tűnjön el, vagy igazságtalanul versengjen a funkciómunkával kifejezett, számszerűsített prioritási érv nélkül.

### Kombináld a sérülékenységi metrikákat a kitettségi és kihasználhatósági környezettel

Nem minden, névlegesen azonos súlyossági pontszámú sérülékenység hordoz azonos tényleges kockázatot: egy belső eszköz kritikus sérülékenysége külső hálózati kitettség nélkül más kockázat, mint ugyanaz a névleges súlyosság egy ügyféladatokat kezelő, internet felé néző szolgáltatásban. Ahol lehetséges, a priorizálást a tényleges kitettségi és kihasználhatósági környezet szerint súlyozd, ne csak a súlyossági pontszám szerint, hogy a javítási kapacitás elsőként a valóban legnagyobb kockázatú tételekre koncentrálódjon.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nyers sérülékenységi darabszám | Egyszerű jelenteni | Összemossa az apró és a kritikus problémákat; elnyomással könnyen kijátszható |
| Súlyosság szerint súlyozott, javítási idő alapú követés | Az idő során a tényleges kockázati kitettséget tükrözi | Fegyelmezett, következetes besorolást és követést igényel |
| Tisztán belső súlyossági megítélés | Rugalmas, a környezethez szabott | Hajlamos az engedékeny sodródásra és a csapatok közötti következetlenségre |
| Szabványosított külső pontozás (például CVSS) és környezeti súlyozás | Következetes, külsőleg lehorgonyzott, ellenáll a kijátszásnak | További környezetelemzést igényel a valóban pontos priorizáláshoz |

A központi feszültség a **következetesség és a környezet** között van. A tisztán szabványosított pontozás következetes és ellenáll a kijátszásnak, de elmulaszthatja azt a valódi környezetet, kitettséget és kihasználhatóságot, amely a tényleges kockázatot meghatározza. A tisztán környezeti, belsőleg megítélt megközelítés megragadja az árnyalatokat, de ki van téve ugyanannak az engedékeny sodródási kockázatnak, amelyre a könyv minden más besoroláshoz kötött metrikánál figyelmeztet. Oldd fel a feszültséget úgy, hogy a szabványosított pontozást következetes alapként használod, majd arra épített, dokumentált, auditálható környezeti súlyozást alkalmazol, nem valamelyik szélsőséget önmagában.

## Kérdések a csapattal való megbeszéléshez

1. **Súlyosság szerint követjük a javítási időt, vagy csak a nyers sérülékenységi darabszámot?** Vedd elő a jelenlegi tényleges metrikádat, és ellenőrizd, megkülönbözteti-e a hónapokig be nem foltozott kritikus problémát az egy napon belül kijavítottól, mert a nyers darabszám ezeket az egészen eltérően kockázatos helyzeteket egyformán kezeli.

2. **Szabványosított külső súlyossági pontozási rendszert használunk, vagy a besorolás tisztán belső, esetleg következetlen megítélésre épül?** Ha tisztán belső, beszéljétek meg, mit változtatna a jelenlegi besorolási gyakorlatotokon egy olyan szabvány bevezetése, mint a CVSS.

3. **Az a mérnök, aki bevitt, majd jelentett egy sérülékenységet, biztonságban érezné magát ezzel, vagy büntetéstől félne?** Ez a 6.2 téma hibáztatásmentes kultúra kérdésének közvetlen, biztonságspecifikus változata, és az őszinte válasz óriási jelentőségű abból a szempontból, hogy a sérülékenységi adataitok egyáltalán megbízhatók-e.

4. **Van látható, számszerűsített hátralékunk az ismert, elfogadott kockázatú sérülékenységekről, vagy a „tudunk róla" státusz idővel csendben láthatatlanná és kezeletlenné válik?** Ellenőrizd, hogy a biztonsági adósságot ugyanolyan szigorral követitek-e, mint az általános technikai adósság hátralékot (4.5 téma).

5. **A javítási priorizálásunk figyelembe veszi a tényleges kitettséget és kihasználhatóságot, vagy tisztán a környezettől független névleges súlyossági pontszámra támaszkodik?** Válassz egy valódi példát, ahol két hasonló névleges súlyosságú sérülékenység egészen eltérő tényleges kockázatot hordozott, és beszéljétek meg, hogy a jelenlegi folyamatotok helyesen priorizálta volna-e őket.

6. **Előfordult-e, hogy egy sérülékenység súlyossági besorolása idővel egyértelmű indok nélkül lefelé sodródott?** Ez az 1.2 téma és a 6.2 téma által egyaránt figyelmeztetett definíciókijátszási mintát tükrözi. Auditálj egy mintát a friss besorolásaitokból erre a konkrét kockázatra.

## Ágazati szemszög

**Startup.** A formális sérülékenységkezelési folyamatok nagyon korán gyakran fölöslegesek, de az alapvető automatizált függőségellenőrzés és az egyszerű, őszinte belső jelentési norma kezdettől fogva keveset kerül, és megakadályozza, hogy a biztonsági adósság láthatatlanul halmozódjon, mielőtt a csapatnak lenne kapacitása rendszerszerűen kezelni.

**Kisvállalkozás.** A legtöbb modern fejlesztési platform ingyenes vagy olcsó, automatizált sérülékenységellenőrzést tartalmaz a függőségekhez. Kapcsold be korán, és kövesd a javítási időt mindennél, amit kritikusnak jelöltek, külön biztonsági funkció vagy kifinomult eszközök nélkül is.

**Nagyvállalat.** A következetes, szabványosított súlyossági pontozás és a valóban büntetésmentes közzétételi kultúra egyaránt alapvető, és egyaránt nehezebben tartható fenn nagy méretben, ahol a több tucat csapat közötti következetlenség és egy súlyos incidens utáni, hibáztatáskereső kulturális sodródás állandó kockázat. Fektess be külön biztonsági governance-funkcióba a besorolási következetesség fenntartására és a közzétételi kultúra aktív védelmére.

**Közszféra.** A biztonsági metrikák itt gyakran közvetlenül metszik a nemzetbiztonságot, a szabályozási megfelelőséget és a közbizalmat, és egy súlyos, rosszul kezelt sérülékenység következményei messze túlmutathatnak egy tipikus magánszféra-béli adatsértésen. Tarts fenn szigorú, külsőleg lehorgonyzott súlyossági besorolást, aktívan védd a belső és külső közzétételi kultúrát, és a biztonsági adósságot kezeld azzal az átláthatósággal és priorizálási szigorral, amelyet ez a téma ajánl, mert a közinfrastruktúrában dokumentálatlanul, csendben elfogadott kritikus sérülékenység valóban súlyos, auditálható kockázat.

## Példák

**Nagyvállalat.** Egy szoftvercég biztonsági csapata évekig csak nyers sérülékenységi darabszámot jelentett a vezetésnek, olyan számot, amely laposan alakult, hamis stabilitásérzetet keltve. Egy felülvizsgált, súlyosság szerint súlyozott, javítási idő alapú elemzés megmutatta, hogy bár az összes darabszám lapos volt, a kritikus sérülékenységek javítása átlagosan kilencven napnál is tovább tartott, messze minden észszerű cél fölött, mert minden tervezési ciklusban sikertelenül versenyeztek a funkciómunkával, külön, védett kapacitás nélkül. A kritikus sérülékenységekre vonatkozó kemény, 7 napos javítási cél kitűzése, a 4.5 téma technikai adósság-allokációs modelljét tükröző, védett biztonságiadósság-javítási kapacitással megtámogatva, két negyedéven belül öt nap alá vitte le a kritikus javítás átlagos idejét.

**Közszféra.** Egy nemzeti infrastruktúra-ügynökség egy külső biztonsági audit nyomán felfedezte, hogy a belső mérnökök informálisan kerülték a saját kódjukban talált sérülékenységek jelentését, mert attól féltek, hogy az rossz fényt vet a teljesítményértékelésükre, ami világos párhuzam a 6.2 téma hibáztatásvezérelt incidens-alulnyilvánítási mintájával. Az ügynökség kifejezett, nyilvánosan közölt szabályzatot vezetett be, amely a belső sérülékenységjelentőket megvédi minden teljesítménybeli következménytől, közvetlenül a hibáztatásmentes incidenskezelési gyakorlat mintájára, és a belső sérülékenységi jelentések száma a következő évben jelentősen nőtt. Ezt az ügynökség vezetése helyesen az észlelés javulásának és az őszinte jelentésnek a bizonyítékaként értelmezte, nem a romló kódminőségéként, elkerülve azt a természetes, de téves következtetést, hogy az emelkedő számnak rosszabbodást kell jelentenie.

## Üzleti érv: indítékok, ROI és TCO

A szigorú, jól besorolt, őszintén jelentett sérülékenységkezelés megtérülése az elkerült adatsértési költség, amely egy súlyos biztonsági incidensnél gyakran sokszorosan meghaladja a proaktív javítás költségét, az elkerült szabályozási, szerződéses és hírnévbeli kár mellett. A fenti szoftvercég példája megmutatja a konkrét mechanizmust: a biztonsági adósság évekig csendben veszítette a priorizálási versenyt a funkciómunkával szemben, pontosan azt a mintát követve, amelyre a 4.5 téma a technikai adósságnál általánosan figyelmeztet, amíg a védett javítási kapacitás ezt közvetlenül ki nem javította.

A teljes birtoklási költség magában foglalja az automatizált ellenőrző eszközöket, a téma által ajánlott védett javítási kapacitást, és a büntetésmentes közzétételi gyakorlatba tett tartós kulturális befektetést. Ez a költség szerény ahhoz a költséghez képest, amelyet egy súlyos, sikeresen kihasznált sérülékenység jelent, amelyet a proaktív, jól priorizált javítás jóval a kihasználás előtt elkapott és kijavított volna.

## Antiminták és buktatók

- **Csak nyers sérülékenységi darabszám követése:** összemossa az apró és a kritikus problémákat, és a tényleges kockázattól függetlenül hamis stabilitás- vagy válságérzetet kelt.
- **Tisztán belső, nem szabványosított súlyossági besorolás:** hajlamos az engedékeny sodródásra és a csapatok közötti következetlenségre.
- **A sérülékenység közzétételének büntetése, belsőleg vagy külsőleg:** a valódi kockázatot a föld alá szorítja a kezelt javítási folyamat helyett.
- **Biztonsági adósság látható, számszerűsített hátralék nélkül:** alapértelmezetten veszít a funkciómunkával szembeni priorizálási versenyben.
- **Priorizálás kizárólag névleges súlyossági pontszám alapján, a kitettségi és kihasználhatósági környezet figyelmen kívül hagyásával:** a korlátozott javítási kapacitást rossz irányba tereli.
- **A növekvő sérülékenységi jelentésszám értelmezése romló minőség bizonyítékaként annak ellenőrzése nélkül, hogy maga a jelentés javult-e:** az 1.6 téma zavaró változós csapdájának egy konkrét példája.

## Érettségi modell

- **1. szint, Kezdeti:** A sérülékenységeket, ha egyáltalán, nyers darabszámként követik, súlyozás és javításiidő-követés nélkül, büntető közzétételi kultúrában.
- **2. szint, Fejlődő:** Van némi súlyossági besorolás, de a mércék következetlenek, és a javítási időt nem követik kifejezett célokhoz képest.
- **3. szint, Szabványosított:** A szabványosított, külsőleg lehorgonyzott súlyossági pontozást és a súlyosság szerinti kifejezett javításiidő-célokat következetesen alkalmazzák, valóban büntetésmentes közzétételi kultúrával.
- **4. szint, Irányított:** A biztonsági adósságot látható, számszerűsített hátralékban követik védett javítási kapacitással. A priorizálás a kitettségi és kihasználhatósági környezetet is figyelembe veszi, nem csak a súlyosságot.
- **5. szint, Összehangolt:** A szervezet konkrét, mérhető csökkenést tud felmutatni a kritikus javítási időben, és tartós, megbízható közzétételi kultúrát tud bizonyítani, amely őszinte, átfogó sérülékenységi adatokat állít elő.

## Ötletek a vitához

1. Mi a kritikus sérülékenységek jelenlegi átlagos javítási ideje, és eléri-e a kifejezett célt?
2. Az a mérnök, aki bevitt egy sérülékenységet, biztonságban érezné magát, ha maga jelentené?
3. Van látható, számszerűsített hátralékunk az ismert, elfogadott kockázatú biztonsági adósságról?
4. A javítási priorizálásunk figyelembe veszi a tényleges kitettséget, vagy csak a névleges súlyosságot?
5. Sodródott-e valaha egy súlyossági besorolás idővel lefelé egyértelmű indok nélkül?

## A legfontosabb tanulságok

- Elsődleges biztonsági egészségmetrikaként a **súlyosság szerinti javítási időt** kövesd, ne a nyers sérülékenységi darabszámot.
- Használj **szabványosított külső súlyossági pontozást** (például CVSS) következetes alapként, amely ellenáll annak az engedékeny sodródási kockázatnak, amelyre a tisztán belső megítélés hajlik.
- Építs valóban **büntetésmentes közzétételi kultúrát**. A jelentés büntetése a valódi kockázatot a föld alá szorítja.
- Kezeld a **biztonsági adósságot a technikai adósság egyik kategóriájaként** (4.5 téma), amely tisztességesen versenyez a védett javítási kapacitásért.
- A priorizálást a **tényleges kitettség és kihasználhatóság** szerint súlyozd, ne csak a súlyossági pontszám szerint.

## Források és ajánlott olvasmányok

- A FIRST.org Common Vulnerability Scoring System (CVSS) specifikációja: a témában végig hivatkozott szabványosított súlyossági pontozási keretrendszer.
- Az OWASP Foundation forrásai a sérülékenységkezelésről és a biztonságos szoftverfejlesztési életciklus gyakorlatáról.
- *Site Reliability Engineering: How Google Runs Production Systems*, szerkesztők: Betsy Beyer, Chris Jones, Jennifer Petoff és Niall Richard Murphy (a hibáztatásmentes kultúra elvei, amelyeket ez a téma a biztonsági közzétételre alkalmaz).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management Planning*: hiteles útmutató a sérülékenység-javítási gyakorlatról.
