# 1.0 Bevezetés az 1. részhez: A mérés alapjai

Mielőtt ez a könyv akár egyetlen metrikát megnevezne, meg kell válaszolnia
egy nehezebb kérdést: mire *való* a mérés? Minden csapat, amely valaha
dashboardot épített, előbb-utóbb végignézte, ahogy egy szám javul, miközben
az, amit a szám képviselt volna, romlik. Ez nem eszközhiba. Annak a
kiszámítható következménye, hogy kihagyjuk az ebben a részben tárgyalt
alapokat: miért mérünk egyáltalán, mi történik egy metrikával, amint az
emberek tudják, hogy figyelik, hogyan súlyozzuk az eredményeket a tevékenység
fölé, ki a felelős egy számért és a definíciójáért, honnan jönnek valójában
az adatok, és hogyan olvassunk egy zajos jelet anélkül, hogy becsapnánk
magunkat.

A nagy csapatoknál ezek az alapok már nem választhatók. Egyetlen csapat
megúszhatja egy ad hoc számmal, amelyre a vezető hetente egyszer rápillant.
Egy több száz mérnököt, tucatnyi dashboardot és felfelé jelentő vezetőséget
számláló szervezet nem teheti meg. Ekkora léptéknél a gazdátlan vagy rosszul
definiált metrika nem csak egy csapatot vezet félre: mindenkit félrevezet
lefelé, aki ellenőrzés nélkül megbízik a számban, és drága visszabontani, ha
a viselkedés már alkalmazkodott a kijátszásához.

A nagyvállalatok és a közszféra szervezetei érzik ezt a legélesebben, mert
a metrikáik gyakran az őket előállító csapaton túlmutató következményekkel
járnak: költségvetési döntések, nyilvános teljesítményjelentések, audit
megállapítások és szállítói szerződések. Egy metrika, amely belső mérnöki
kényelmi eszköznek látszik, csendben kritikus, megkérdőjelezetlen bemenetévé
válhat olyanok döntéseinek, akik soha nem látják az azt előállító csővezetéket.
Az alapok rendbetétele teszi elviselhetővé ezt a súlyt.

## A rész témái

- **1.1 Miért mérjük a szoftverfejlesztést:** Az érv a mérés mellett
  egyáltalán, mit hivatott elérni, és mi a különbség a tanulásért és az
  ítélkezésért végzett mérés között.
- **1.2 Goodhart törvénye és a metrikák pszichológiája:** Az az egyetlen
  gondolat, amely a könyv minden más témáját irányítja: az a mérték, amely
  céllá válik, megszűnik jó mérték lenni, és azok a pszichológiai
  mechanizmusok, amelyek a kijátszást szinte elkerülhetetlenné teszik, ha
  az emberek tudják, hogy figyelik őket.
- **1.3 Eredmények a kibocsátás előtt: mit érdemes mérni:** Hogyan
  súlyozzuk a metrikakészletet az eredmények, és ne a tevékenység felé, a
  klasszikus bemenet/kibocsátás/eredmény megkülönböztetéssel és a
  sarkcsillag-mintával.
- **1.4 Metrikagovernance és felelősség:** Ki dönti el, mit mérünk, ki a
  felelős egy definícióért, és hogyan akadályozza meg a metrikacharta, hogy
  egy növekvő dashboard elszámoltathatatlan burjánzássá váljon.
- **1.5 Adatforrások és műszerezés:** Honnan jönnek valójában a mérnöki
  metrikák, a műszerezés és az önbevallás különbsége, és azok az
  adatminőségi problémák, amelyek csendben érvénytelenítik a dashboardot,
  mielőtt bárki észrevenné.
- **1.6 Statisztikai jártasság mérnöki metrikákhoz:** A minimális
  statisztikai ítélőképesség, amelyre egy csapatnak szüksége van, hogy
  őszintén olvasson egy metrikát: percentilisek az átlagokkal szemben,
  mintaméret, regresszió az átlaghoz és zavaró változók.

## Hogyan kapcsolódnak össze ezek a témák

Ez a hat téma szigorú sorrendben épül egymásra. Az 1.1 téma azt kérdezi,
miért mérünk egyáltalán, ami azért számít, mert az a csapat, amely nem
válaszolt erre, olyan számokat gyűjt majd, amelyekkel senki nem tesz
semmit. Az 1.2 téma az a forgáspont, amely körül a könyv többi része
forog: ha elfogadod, hogy bármely mérték céllá válhat és kijátszhatóvá
válik, minden későbbi téma ajánlása abból következik, hogy e kockázat ellen
tervezünk. Az 1.3 téma ezt az óvatosságot pozitív szabállyá alakítja:
súlyozz az eredmények felé, mert ezeket a legnehezebb olcsón kijátszani.
Az 1.4 téma kézzelfoghatóvá teszi a governance-t, az 1.5 téma az adatokat,
az 1.6 téma pedig megadja azt a statisztikai ítélőképességet, amellyel
akkor sem csap be a zaj, ha a governance és a műszerezés már rendben van.

Minden további erre a részre épül. A 2. rész flow-metrikái és DORA-metrikái,
valamint a 3. rész SPACE keretrendszere lényegében mind kidolgozott példa az
1.2 és 1.3 témában lefektetett eredménysúlyozási és védőkorlát-párosítási
elvekre. A 8.1 téma dashboard-tervezési útmutatója az 1.4 témában
bemutatott governance-modellt feltételezi. És az érettségi modell, amely a
könyv minden témáját lezárja, öt szintje alatt pontosan annak a
fegyelemnek az érettségi modellje, amelyet ez a rész bevezet: úgy mérni,
hogy komolyan gondoljuk, és ellenőrizni a saját munkánkat.
