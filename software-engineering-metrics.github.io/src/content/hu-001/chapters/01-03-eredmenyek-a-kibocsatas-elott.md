# 1.3 Eredmények a kibocsátás előtt: mit érdemes mérni

## Áttekintés és indíték

Minden mérnöki metrika három kategória egyikébe esik, és ezek összekeverése a
könyv második leggyakoribb hibamódja, a [Goodhart törvényének](https://en.wikipedia.org/wiki/Goodhart%27s_law)
teljes figyelmen kívül hagyása után. A **bemeneti metrika** a ráfordított
erőfeszítést méri: mérnökórákat, elköltött dollárokat, vállalt story pontokat.
A **kibocsátási metrika** azt méri, amit a rendszer előállított: leszállított
funkciókat, beolvasztott pull requesteket, lezárt jegyeket. Az **eredménymetrika**
azt a változást méri, amely valóban számított: megtartott bevételt, elkerült
incidenseket, egy felhasználónál megtakarított időt. A csapatok a bemenetek és
a kibocsátások felé húznak, mert könnyű megszámolni őket, és teljesen a csapat
kezében vannak. Az érték szinte mindig az eredményekben lakik, amelyek lassabban
jelennek meg, zajosabban mérhetők, és nehezebb őket egyetlen csapat munkájának
tulajdonítani.

Ez a téma arról szól, hogy tudatosan ellenálljunk ennek a vonzásnak. A kizárólag
bemenetekből és kibocsátásokból épített dashboard lenyűgözően zsúfoltnak
látszhat, miközben semmilyen valódi értéket nem hoz létre: egy csapat tucatnyi
olyan funkciót szállíthat le, amelyet senki nem használ, százával zárhat le
olyan jegyeket, amelyek egy hét múlva újranyílnak, vagy teljesíthet minden
story pont becslést, miközben a termék tényleges eredményei, a megtartás, az
elégedettség, a bevétel, változatlanok maradnak vagy romlanak. Ebből a
zsúfoltságból semmi nem jelenik meg problémaként egy csak kibocsátást mutató
dashboardon, mert az ilyen dashboardokat nem arra építették, hogy ezt lássák.

Nagyvállalati és kormányzati léptéken ez a megkülönböztetés dönti el, hogy a
vezetés meg tudja-e különböztetni a termelékeny csapatot a pusztán aktívtól.
Egy divízió évekig kitűnő kibocsátási számokat jelenthet, leszállított
funkciókat, lezárt sprinteket, miközben az az eredmény, amely a finanszírozót
vagy a törvényhozást valójában érdekli, a megtartott bevétel, a lecsökkent
állampolgári várakozási idő, csendben erodálódik alatta. A „leszállítottuk az
ütemtervet" nem ugyanaz az állítás, mint hogy „az ütemterv jobbá tett dolgokat",
és csak az eredményekre súlyozott metrikakészlet tudja megkülönböztetni a kettőt.

## Alapelvek

- **A bemenetek és kibocsátások közelítő mutatók; az eredmények maga a dolog.**
  Súlyozd a metrikakészletedet az eredmények felé, ahol csak elérhetők.
- **A mérhetőség könnyűsége nem ok arra, hogy valamit mérjünk.** A
  legkönnyebben megszámolható dolgok általában bemenetek és kibocsátások, nem
  azért, mert a legfontosabbak, hanem mert mechanikusan egyszerű rögzíteni őket.
- **Az eredmények felé haladva egyre nehezebb a tulajdonítás.** Fogadd el ezt a
  kompromisszumot tudatosan, ahelyett hogy visszahúzódnál a kibocsátásokhoz,
  mert az eredményeket nehezebb tulajdonítani.
- **A csapat a bemeneteit és kibocsátásait irányíthatja, de az eredményeket csak
  befolyásolhatja.** Ennek megfelelően tervezd az elszámoltathatóságot: a
  csapatot azért tartsd felelősnek, amit valóban irányíthat, az eredményeket
  pedig megosztott, csapatok közötti jelzésként kövesd.
- **Egyetlen sarkcsillag-eredmény kis számú mozgatóval többet ér, mint egy fal
  kibocsátási csempe.** A lefedettségnek a szerkezetből kell származnia, nem a
  dashboard puszta mennyiségéből.

## Ajánlások

### Minden metrikát osztályozz, mielőtt bevezeted

Bármely jelölt metrikánál kérdezd meg, a három kategória melyikébe esik. A
„hetente beolvasztott pull requestek" kibocsátás. A „beolvasztott pull requestek
százaléka, amelyek egy héten belül éles incidenst okoztak" közelebb áll az
eredményhez, mert következményt mér, nem mennyiséget. Ez az osztályozás
harminc másodpercet vesz igénybe, és kötelezővé kell tenni, mielőtt bármely
metrikát felvesznek egy csapat- vagy szervezeti dashboardra, mert ez a
leggyorsabb módja annak, hogy elkapjuk a dashboardot, amely csendben megtelik
könnyen számolható kibocsátásokkal, miközben azt hiszi, értéket mér.

### Építs metrikafát egyetlen eredmény alatt

Ne lapos listát kövess. Rendezd a metrikákat **metrikafává** (néha KPI-fának
is hívják): egy felső eredménymetrikát bontsd le azokra a mozgatókra, amelyek
oksági vagy matematikai úton táplálják, egészen azokig a műveleti kibocsátási
és bemeneti mértékekig, amelyek az egyes csapatok tulajdonában vannak. Amikor
a felső eredmény mozdul, a fa megmondja, melyik alacsonyabb szintű mozgatót kell
megvizsgálni, a „a szám lement" állításból pedig „a csővezeték ez a konkrét
lépése az ok" lesz. Nevezz meg egyetlen **sarkcsillag-metrikát** a fa tetején,
ahol a szakterületed ad rá lehetőséget: azt a mértéket, amely a legjobban
megragadja a leszállított értéket, a telepítési gyakoriságot a változtatási
hibaaránnyal párosítva egy platformcsapatnál, vagy egy alapfunkció heti aktív
használatát egy termékcsapatnál.

### Az eredményeket az áttekintésekben is súlyozd, ne csak a dashboardon

A metrikafa csak annyit ér, amennyire a gyakorlatban használják. A sprint
áttekintésekben, a negyedéves üzleti áttekintésekben és a vezetői
tájékoztatókban az eredményszintű számmal kezdj, és az alatta lévő kibocsátási
és bemeneti metrikákat csak a mozgás magyarázatára használd, ne a helyettesítésére.
Az a csapat, amely eredményi kontextus nélkül azt jelenti, hogy „ebben a sprintben
40 jegyet zártunk le", semmit nem mondott arról, hogy a munka számított-e; az a
csapat, amely azt jelenti, hogy „a kiszökött hibák 30%-kal csökkentek, és itt a
tesztelési beruházás, amely ezt hajtotta", valódi dolgot mondott.

### Fogadd el a lassabb visszajelzést az eredménymetrikáknál, és párosítsd őket gyorsabb előremutató mutatókkal

Az eredménymetrikák gyakran követők: azután erősítik meg az eredményt, hogy
elég idő telt el a bizonyossághoz. Ez a késés valódi költség, mert késlelteti a
tanulást. Párosíts minden eredménymetrikát legalább egy előremutató mutatóval,
vagyis olyan metrikával, amely korábban mozdul, és előrejelzi az eredményt, hogy
a csapat még azelőtt kormányozhasson, hogy a lassú, hiteles szám végre megérkezik.
A telepítési gyakoriság előremutató mutató a szállítási eredményekhez; a
növekvő kiszökött hiba trend előremutató mutató egy közelgő megbízhatósági
eredményhez. Az előremutató mutatókat arra használd, hogy korán cselekedj, a
követő eredménymetrikákat pedig arra, hogy megerősítsd, igazad volt.

## Kompromisszumok: előnyök és hátrányok

| Kategória | Előnyök | Hátrányok |
| --- | --- | --- |
| Bemeneti metrikák | Teljesen a csapat irányítása alatt, könnyű megszámolni | A leggyengébb kapcsolat a tényleges értékkel; mennyiséggel könnyen kijátszható |
| Kibocsátási metrikák | Könnyű megszámolni, egyértelmű felelősség, gyors visszajelzés | A tevékenységet jutalmazza a hatás helyett; emelkedhet, miközben az érték csökken |
| Eredménymetrikák | Közvetlenül azt tükrözik, ami számít; olcsón nehéz kijátszani | Lassúak, zajosak, és nehéz őket egyetlen csapatnak tulajdonítani |
| Metrikafa-szerkezet | Összekapcsolja a mindennapi munkát a stratégiai értékkel; segíti a diagnózist | Valódi elemzői munka kell a helyes felépítéséhez és karbantartásához |

A központi feszültség az **irányíthatóság és az érték** között áll fenn. A
bemenetek és kibocsátások teljesen a csapat irányítása alatt állnak, ami
csábítóvá teszi, hogy a csapatokat velük számoltassák el; az eredmények hordozzák
az értéket, de csak részben állnak bármely egyetlen csapat befolyása alatt,
hiszen egy jó funkció is elbukhat a mérnökségen kívüli okok miatt. Úgy oldd fel,
hogy a csapatokat azokért a bemenetekért és kibocsátásokért tartod felelősnek,
amelyeket teljesen irányítanak, az eredményeket pedig megosztott jelzésekként
követed, amelyeket az egész szervezet együtt birtokol, egy kifejezett
metrikafával összekötve, nem pedig magyarázatlan hézagként hagyva a „megcsináltuk
a munkát" és a „segített-e" között.

## Kérdések a csapattal való megbeszéléshez

1. **A mostani dashboardunk minden metrikája bemenet, kibocsátás vagy eredmény,
   és a három közti egyensúly őszinte történetet mesél?** A legtöbb dashboard,
   őszintén auditálva, szinte teljesen bemenetekből és kibocsátásokból áll,
   mert az eszközök alapértelmezés szerint ezeket jelentik. Osztályozz minden
   csempét, és számold meg a megoszlást; az a dashboard, amelyen egyetlen
   eredménycsempe sincs, tevékenységet mér, és teljesítményként mutatja be.

2. **Mi az egyetlen sarkcsillag-eredménymetrikánk, és vissza tudjuk-e követni egy
   metrikafán át valamihez, amit egy-egy csapat valóban birtokol?** E kapcsolódó
   szerkezet nélkül a mozgó felső szám nem ad támpontot, hová nézzünk, és a
   csapatok nem látják, hogyan kapcsolódnak a napi kibocsátási metrikáik
   bármihez, ami számít. Hozd el a jelenlegi felső metrikádat, ha van, és
   próbáld élőben felépíteni a fát.

3. **Hol tartunk felelősnek egy csapatot olyan eredményért, amelyet csak
   befolyásolni tud, irányítani nem?** Ez gyakori forrása a frusztrációnak és a
   csendes kijátszásnak, mert az a csapat, amelyet olyan eredményért büntetnek,
   amelyet rajta kívül álló tényezők alakítanak, minden ösztönzést megkap
   arra, hogy megvédje magát, ahelyett hogy a valódi rendszert javítaná.
   Azonosítsd ezeket az eltéréseket, és vagy igazítsd az elszámoltathatóságot,
   vagy add hozzá a hiányzó emelőket.

4. **Milyen előremutató mutatónk van az egyes követő eredménymetrikáinkhoz, és
   mennyire előre jelzi őket?** Egy tisztán követő metrikakészlet azt jelenti,
   hogy csak akkor derül ki a tévedésünk, amikor már késő olcsón irányt
   váltani. Hozd el az eredménymetrikáidat, és ellenőrizd, létezik-e mindegyikhez
   valódi előremutató mutató, vagy vakon repülsz a jelentési időszakok között.

5. **Mennyi az, amit az áttekintéseken és a retrospektíveken ünnepelünk,
   kibocsátás („leszállítottuk X-et"), és mennyi eredmény („X jobbá tette Y-t")?**
   A nyelv, amellyel a csapatok a munkát ünneplik, idővel azt formálja, amire
   optimalizálnak, gyakran jobban, mint a dashboard. Figyeld a saját
   áttekintéseidet egy sprinten át, és őszintén számold meg a megoszlást.

6. **Ha a legfontosabb kibocsátási metrikáink egyik napról a másikra
   megduplázódnának, az eredménymetrikáink feltétlenül javulnának, vagy
   romolhatnának is?** Ez a gondolatkísérlet leleplezi azokat a kibocsátási
   metrikákat, amelyek elszakadtak a szolgálandó eredményektől, vagy akár
   aktívan szembefordultak velük, például a funkciók mennyiségét, amely gyorsabban
   növeli a karbantartási terhet, mint az elfogadást.

## Ágazati szemszög

**Startup.** Válassz egy eredményt, jellemzően egy olyan közelítő mutatót,
hogy az ügyfelek továbbra is értéket kapnak-e, például a heti megtartást vagy
az aktiválást, és az első naptól kezeld sarkcsillagodként. Állj ellen a
kibocsátási hiúsági metrikák, például a halmozott funkciószám vonzásának,
amelyeket csábító jelenteni a befektetőknek, de semmit nem mondanak arról, hogy
a termék valóban működik-e bárkinek.

**Kisvállalkozás.** A meglévő eszközeid, a kasszarendszer, az ügyfélszolgálati
rendszer, az analitika, általában már jelentenek egy eredményközeli számot,
az ismételt vásárlási arányt, a jegyek újranyitási arányát. Ezeket használd,
ahelyett hogy egyedi eredménymérést építenél, amelynek karbantartására nincs
kapacitásod, és állj ellen a kísértésnek, hogy nyers tevékenységi számlálókra
térj vissza csak azért, mert az az alapértelmezett nézet.

**Nagyvállalat.** A meghatározó hibamód a csapatok portfóliója, amelyek mind helyi
kibocsátási metrikákra optimalizálnak, és ezek nem adnak össze semmilyen
koherens szervezeti eredményt. Építsd fel tudatosan a metrikafát, egységesítsd
az eredménydefiníciókat az üzletági egységek között, és követeld meg minden
jelentős kezdeményezéstől, hogy a finanszírozás előtt kimondja az eredményi
hipotézisét, ne csak a kibocsátási tervét.

**Közszféra.** A felügyeleti szervek és a nyilvánosság egyre jártasabb a
„teljesítette a munkaleírást" és az „javította az eredményt" különbségében, és a
csak kibocsátást mutató jelentés pontosan ezt a vizsgálatot hívja. Határozd meg
a sikert állampolgárok számára látható eredményként (várakozási idő,
hibaarány, elégedettség), ahol jogilag és gyakorlatilag lehetséges, és légy
kifejezett, amikor csak kibocsátási metrika elérhető, és miért.

## Példák

**Nagyvállalat.** Egy logisztikai cég mérnöki divíziója két éven át folyamatosan
emelkedő „negyedévente leszállított funkciók" számot jelentett, miközben a
vállalat fő ügyfél-elégedettségi pontszáma csendben ellaposodott. Egy új mérnöki
alelnök a pontos szállítási arányra, a tényleges üzleti eredményre gyökerező
metrikafát épített, amely a csomópontokban töltött időn és az utolsó
mérföldön át egészen a csapatszintű mérnöki kibocsátásokig bomlott. Egyetlen
jelentési cikluson belül világossá vált, hogy több nagy kibocsátású csapat olyan
területeken szállít funkciókat, amelyeknek nincs mérhető hatásuk a
sarkcsillag-metrikára, és a beruházás azokra a mozgatókra tolódott, amelyekről
a fa megmutatta, hogy valóban számítanak.

**Közszféra.** Egy nemzeti egészségügyi szolgálat digitális csapata egy többéves
betegnyilvántartás-modernizációs programban „a munkaleírás szerint leszállított
modulokat" jelentette. Egy felügyeleti bizottság másik kérdést tett fel: kevesebb
időt töltenek-e a klinikusok adminisztratív adatrögzítéssel. A csapat utólag
eredménymetrikát vezetett be, az egy betegtalálkozóra jutó adminisztratív idő
mediánját percben, és azt találta, hogy a korai modulok a munkafolyamat
súrlódása miatt valójában növelték ezt az időt, annak ellenére, hogy minden
szállítási mérföldkövet teljesítettek. A későbbi modulokat közvetlenül az
eredménymetrika köré tervezték újra, és a program nyilvános jelentése a
szállítási ellenőrzőlistáról az előtte-utána eredményi összehasonlításra váltott.

## Üzleti érv: indítékok, ROI és TCO

Az eredménysúlyozás megtérülése az elkerült pazarlás: az a szervezet, amely
közel valós időben látja, hogy a kibocsátás egy áradata nem mozdít semmilyen
eredményt, átirányíthatja a beruházást, mielőtt egy teljes költségvetési
ciklust a nehéz úton kitalálással töltene. A nagy mérnöki szervezetekben a
domináns rejtett költség nem az alulbefektetés, hanem a jól végrehajtott munka,
amelyet soha nem lett volna szabad finanszírozni, mert elszakadt minden valódi
eredménytől, és a csak kibocsátást mutató dashboard ezt a szakadást egyáltalán
nem látja.

Az eredménymérés teljes birtoklási költsége magasabb, mint a kibocsátásmérésé,
mert az eredményeket valóban nehezebb definiálni, tulajdonítani és műszerezni,
és egy valódi metrikafa felépítése tudatos elemzői erőfeszítést igényel ahelyett,
hogy elfogadnánk, amit egy eszköz alapértelmezés szerint exportál. Ezt a
költséget érdemes megfizetni minden szerény méretet meghaladó kezdeményezésnél,
mert az alternatíva, hogy utólag fedezzük fel, hogy egy évnyi magabiztosan
jelentett kibocsátás nem hozott valódi értéket, sokkal többe kerül az előzetes
elemzésnél.

## Antiminták és buktatók

- **Kizárólag kibocsátási csempékből álló dashboard:** tevékenységet mér, és
  teljesítményként mutatja be.
- **Egy csapat teljes felelőssé tétele olyan eredményért, amelyet nem
  irányíthat:** frusztrációt szül, és kijátszásra ösztönöz az igazságtalan
  hibáztatás elleni védekezésül.
- **Nincs előremutató mutató egy követő eredményhez:** a csapat csak akkor
  tudja meg, hogy tévedett, amikor már túl drága kijavítani.
- **Kibocsátási nyelv ünneplése az áttekintéseken, miközben az eredményeket
  értékeljük:** a kimondott prioritás és a megélt ösztönző szétválik, és a megélt
  ösztönző nyer.
- **Lapos metrikalista fastruktúra nélkül:** a mozgó felső szám nem ad támpontot,
  hová nézzünk.
- **Az eredménymérés túl nehéznek tekintése a próbálkozáshoz:** a szervezetet
  tartósan visszaállítja a könnyen számolható bemenetekre és kibocsátásokra.

## Érettségi modell

- **1. szint, Kezdeti:** A metrikák szinte teljesen bemenetek és kibocsátások;
  senki nem tudja megnevezni a szervezet eredménymetrikáit, sem vonalat húzni
  hozzájuk.
- **2. szint, Fejlődő:** Néhány csapat informálisan azonosított eredménymetrikákat,
  de nincs közös metrikafa és nincsenek következetes előremutató mutatók.
- **3. szint, Szabványosított:** Dokumentált metrikafa köti össze a közös
  sarkcsillag-eredményt a csapatok tulajdonában lévő kibocsátásokig, a szervezet
  egészében következetesen alkalmazva.
- **4. szint, Irányított:** Az előremutató és a követő mutatókat is követik és
  együtt vizsgálják; a csapatokat csak azért tartják felelősnek, amit
  irányítanak, és az eredménymérés aktívan erőforrásokat kap.
- **5. szint, Összehangolt:** Az eredménymérés közvetlenül beépül a finanszírozási
  és priorizálási döntésekbe; a szervezet rendszeresen átirányítja a beruházást a
  nagy kibocsátású, kis eredményű munkától, mielőtt egy teljes költségvetési
  ciklus lejárna.

## Ötletek a vitához

1. Nevezd meg a szervezetünk egyetlen legfontosabb eredménymetrikáját. Meg tud-e mindenki egyezni benne?
2. Mi a jelenlegi legnagyobb kibocsátási beruházásunk, amelyet még nem tudunk semmilyen eredményhez visszavezetni?
3. Hol bünteti a felelősségi szerkezetünk a csapatot olyan eredményért, amelyet nem irányíthat?
4. Hogyan nézne ki a dashboardunk, ha minden tisztán kibocsátási csempét törölnénk?
5. Mennyi idő alatt tudjuk meg jelenleg, hogy egy leszállított funkció valóban segített-e?

## A legfontosabb tanulságok

- Minden metrikát osztályozz **bemenetként, kibocsátásként vagy eredményként**,
  és tudatosan súlyozd a készletet az eredmények felé.
- Építs **metrikafát** egyetlen **sarkcsillag-metrika** alatt, hogy a mozgó felső
  szám egy okra mutasson.
- A csapatokat azért tartsd felelősnek, amit **irányítanak** (bemenetek,
  kibocsátások); az eredményeket kövesd megosztott jelzésként, amelyet az egész
  szervezet együtt befolyásol.
- Párosíts minden követő **eredménymetrikát** gyorsabb **előremutató mutatóval**,
  hogy kormányozhass, mielőtt a lassú szám megerősíti, hogy tévedtél.
- A csak kibocsátást mutató dashboard tevékenységet mér, és teljesítménynek
  nevezi; ezt tekintsd figyelmeztető jelnek, ne kényelemnek.

## Források és ajánlott olvasmányok

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble és Gene Kim (eredményalapú szállítási mérés).
- *Lean Analytics*, Alistair Croll és Benjamin Yoskovitz (a One Metric That
  Matters és a bemenet/kibocsátás/eredmény megkülönböztetés startup
  környezetben).
- *Measure What Matters*, John Doerr (eredményorientált célkitűzés és az OKR
  keretrendszer hangsúlya az eredményekre a tevékenység helyett).
- *The Lean Startup*, Eric Ries (cselekvésre alkalmas és hiúsági metrikák, és
  az eredmények validálása).
- *Key Performance Indicators*, David Parmenter (KPI- vagy metrikafa-struktúra
  építése sarkcsillag-mérték alatt).
