# Mik a szoftverfejlesztési metrikák?

A [szoftverfejlesztési metrikák](https://en.wikipedia.org/wiki/Software_metric) mennyiségi mértékek, amelyekkel a szoftverfejlesztési folyamatok, termékek és csapatok minőségét, hatékonyságát és hatását értékeljük, követjük és javítjuk. Jól használva rendszerszintű diagnosztikai eszközök: feltárják a működési szűk keresztmetszeteket, megindokolják a technikai adósság törlesztését, és a mérnöki tevékenységet konkrét üzleti eredményekhez igazítják. Rosszul használva torzítják a viselkedést, rombolják a bizalmat, és éppen a rossz dolgokat jutalmazzák.

Ez a könyv azért létezik, mert a legtöbb csapat azelőtt nyúl metrikákhoz, hogy eldöntötte volna, mire *való* egy metrika. A dashboard megtelik mindennel, amit könnyű megszámolni, a vezetés elkezdi kérdezni, hogy "ez a szám nő vagy csökken", és egy negyedéven belül a csapat a számot optimalizálja ahelyett az eredmény helyett, amelyet a szám képviselni hivatott. Ennek a hibának neve van: [Goodhart törvénye](https://en.wikipedia.org/wiki/Goodhart%27s_law), azaz amikor egy mérték céllá válik, megszűnik jó mérték lenni. A könyv minden témája ezzel a törvénnyel a háta mögött készült.

## A két alapvető keretrendszer

Az iparág nagyjából két kutatásra épülő keretrendszer köré rendeződött a szállítás és a csapategészség mérésére.

A **[DORA-metrikák](https://dora.dev/guides/dora-metrics/)** (a DevOps Research and Assessment programból) a rendszer átbocsátását és stabilitását mérik: a telepítési gyakoriságot, a változtatások átfutási idejét, a változtatási hibaarányt és a sikertelen telepítés helyreállítási idejét. A könyv 2. része mind a négyet külön referenciatémában tárgyalja, a Flow Framework mellett, amelyet a szállítási és flow-metrikák tágabb rendszerezésére használ, mert a DORA jól méri a pipeline mechanikáját, de semmit nem mond arról, milyen értéket szállít a pipeline.

A **[SPACE keretrendszer](https://queue.acm.org/detail.cfm?id=3454124)**, amelyet a Microsoft, a GitHub és a Victoriai Egyetem kutatói alkottak, a nyers átbocsátást a fejlesztői élménnyel egyensúlyozza öt dimenzióban: elégedettség és jóllét, teljesítmény, aktivitás, kommunikáció és együttműködés, valamint hatékonyság és flow. A 3. rész részletesen tárgyalja.

E két keretrendszeren túl a csapatok tartományonként csoportosított helyi metrikákat követnek: kód- és minőségmetrikákat (4. rész), termék- és üzleti metrikákat (5. rész), valamint megbízhatósági, üzemeltetési és biztonsági metrikákat (6. rész). A 7. rész egy már zajló elmozdulással foglalkozik: a generatív MI eszközei szinte ingyenessé tették a nyers kódkibocsátást, ami azt jelenti, hogy több metrika, amelyre az iparág egy évtizede támaszkodik, már nem azt jelenti, amit korábban.

## Kinek szól

Az elsődleges közönség azok, akik eldöntik, mit mér egy csapat, és miért: mérnökvezetők, senior és principal mérnökök, platform- és DevOps-csapatok, valamint program- és termékmenedzserek, akik először építenek metrika-dashboardot vagy eredménykártyát, vagy egy már a viselkedést torzító rendszert javítanak. A másodlagos közönség minden mérnök, aki meg akarja érteni, miért követ a szervezete éppen azt, amit követ, és hogyan lehet ellentmondani, ha egy metrikával visszaélnek.

## Hogyan olvasd

Kezdj itt, majd olvasd el a [bevezetést](bevezetes.md), hogy lásd, hogyan épül fel a könyv, vagy ugorj egyenesen a [tartalomjegyzékhez](tartalomjegyzek.md). Minden téma önmagában is megáll: előbb az alapelveit mondja ki, konkrét ajánlásokat ad, megnevezi, hogyan játsszák ki az általa tárgyalt metrikát, és érettségi modellel, megbeszélési kérdésekkel és forrásokkal zárul. Nem kell a könyvet az elejétől a végéig elolvasni ahhoz, hogy használni tudd.
