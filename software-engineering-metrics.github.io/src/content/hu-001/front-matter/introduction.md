# Bevezetés

Ez a könyv gyakorlati útmutató a [szoftverfejlesztés](https://en.wikipedia.org/wiki/Software_engineering) jó méréséhez, az ötfős startuptól a több ezer mérnököt foglalkoztató nagyvállalatig vagy a törvényben rögzített teljesítménykeretrendszer szerint jelentő kormányzati szervig. Azért készült, mert a metrikákról szóló tanácsok többsége vagy egy keretrendszer működési részletek nélküli összefoglalója, vagy egy eszközgyártó funkciólistája. Ez a könyv egyik sem akar lenni: határozott abban, mit érdemes mérni, kendőzetlen abban, hogyan játsszák ki az egyes metrikákat, és gyakorlatias abban, hogyan vezess olyan metrikaprogramot, amelyben a csapat megbízik, ahelyett hogy félne tőle.

## Kinek szól

Az elsődleges közönség azok, akik eldöntik, mit mér egy szervezet: mérnökvezetők, senior és principal mérnökök, platform- és DevOps-csapatok, valamint program- és termékmenedzserek. A másodlagos közönség minden olyan mérnök, aki meg akarja érteni egy dashboard mögötti gondolatmenetet, amelyet javítania kell, és azt, hogyan lehet megkérdőjelezni egy metrikát, amely már nem szolgálja a célját. Nem kell az elejétől a végéig elolvasni. Minden téma önmagában is megáll, először az alapelveit mondja ki, és gyakorlati tanulságokkal, érettségi modellel és forrásokkal zárul.

## Hogyan épül fel a könyv

A könyv **részekre** (egész számok) és **témákra** (tizedes törtek) oszlik. Az **N.0** téma bevezeti az egyes részeket, és elmagyarázza, hogyan függnek össze a témái; az **N.1, N.2, …** témák mélyebben tárgyalják a témákat.

- **1. rész, A mérés alapjai:** miért mérjünk egyáltalán, Goodhart törvénye és a kijátszás pszichológiája, az eredmények választása a kibocsátás helyett, a governance és a felelősség, az adatforrások, és az a statisztikai jártasság, amelyre minden metrikaprogramnak szüksége van.
- **2. rész, Flow-metrikák:** a Flow Framework, flow-elemei és öt flow-metrikája, a ciklusidő, a sorbanállás-elmélet, a klasszikus Lean értékáram-metrikák, a pull request- és kódáttekintési metrikák, valamint a DORA keretrendszer mint referenciatéma.
- **3. rész, Fejlesztői élmény és a SPACE keretrendszer:** a SPACE keretrendszer és öt dimenziója, valamint az, hogyan szervezz fejlesztői élmény felmérést úgy, hogy az ne váljon népszerűségi versennyé.
- **4. rész, Kód- és minőségmetrikák:** bonyolultság, tesztlefedettség és -hatékonyság, fluktuáció és hotspotok, statikus elemzés, technikai adósság és dokumentáció.
- **5. rész, Termék- és üzleti metrikák:** kiszökött hibák, funkcióelfogadás, ügyfél- és üzleti eredmények, egységgazdaságtan és megtérülés.
- **6. rész, Megbízhatósági, üzemeltetési és biztonsági metrikák:** SLI-k, SLO-k és hibakeretek, incidensmetrikák, ügyelet és kapacitás, valamint biztonsági és sérülékenységi metrikák.
- **7. rész, Metrikák a mesterséges intelligencia korában:** a generatív MI paradigmaváltása, az MI-támogatott fejlesztés mérése, a metrikainfláció kockázata, és az, hogy miért az eredménytelemetria lesz a sarkcsillag, ahogy a kibocsátás olcsóvá válik.
- **8. rész, Metrikaprogram felépítése:** dashboard tervezése, építés vagy vásárlás, a metrikák bevezetése félelemkeltés nélkül, egy érettségi modell és egy fokozatos bevezetési ütemterv.
- **9. rész, Függelékek:** szószedet, metrikadefiníciók és képletek kézikönyve, ellenőrzőlisták, sablonok, érettségi önértékelés, források és tárgymutató.

## Vezérelvek

Nyolc alapelv adja a könyv gerincét:

1. **Az a mérték, amely céllá válik, megszűnik jó mérték lenni.** Goodhart törvényére már az elejétől számíts, ne akkor, amikor a torzulás már megjelent.
2. **Eredmények a kibocsátás előtt, a kibocsátás a tevékenység előtt.** Minden metrikakészletet afelé súlyozz, ami az ügyfélnél vagy az üzletben megváltozott, ne afelé, amit a csapat előállított, vagy ahogy elfoglalt volt.
3. **Minden ösztönzött metrikához védőkorlát kell.** Párosítsd a sebességet a minőséggel, az átbocsátást a stabilitással, és soha ne hajszolj egyetlen számot elszigetelten.
4. **Rendszereket mérj, ne embereket.** Az a metrika, amely egyénre hárítja a felelősséget, rombolja a bizalmat és kijátszásra csábít; az, amely egy rendszerbeli szűk keresztmetszetet tár fel, javításra ösztönöz.
5. **Ahol lehet, műszerezést használj önbevallás helyett, ahol nem, önbevallást.** A telepítések számát a pipeline adja; az elégedettséget úgy tudod meg, ha megkérdezed.
6. **A metrikának ki kell érdemelnie a helyét, különben nyugdíjba megy.** A dashboard minden csempéje figyelmet emészt. Gyomlálj tudatosan.
7. **A definíciók fontosabbak a dashboardoknál.** Két csapat, amely másképp számolja az "átfutási időt", több időt tölt a szám vitatásával, mint a cselekvéssel.
8. **A generatív MI ok az újragondolásra, nem csak az új alapértékek felvételére.** Amikor a kibocsátás olcsóvá válik, a kibocsátási volumenre épülő metrikáknak új védőkorlátokra van szükségük, nem csupán új célokra.

## Átfogó témák

[Goodhart törvénye](https://en.wikipedia.org/wiki/Goodhart%27s_law) az az egyetlen téma, amely a könyv minden részén végigvonul, nem csak az 1.2 témában. Minden metrikacsaládról szóló téma kimondja, hogyan játsszák ki az általa tárgyalt metrikát, és milyen védőkorlát fogja ezt meg. A kormányzati és vállalati jelentési kötelezettségeket, ahol a metrika törvényi vagy szerződéses súlyt hordozhat, mindenütt tervezési bemenetként kezeljük, nem egyetlen témába zárt utólagos gondolatként.

## Hogyan használd

Fokozatosan vezesd be; ne zúdíts egy csapásra dashboardot egy olyan csapatra, amelynek még soha nem volt. Kezdd ott, ahol a legnagyobb a fájdalom, használd az egyes témák érettségi modelljét, hogy őszintén megtaláld a helyed, és a bevezetési ütemterv (8.5 téma) sorolja a munkát. A cél nem a diagramok fala. Hanem egy olyan szervezet, amely bizonyítékokkal meg tudja mondani, működik-e, amit csinál, és eléggé bízik a saját számaiban ahhoz, hogy cselekedjen rájuk.
