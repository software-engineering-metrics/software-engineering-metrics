# 3.0 Bevezetés a 3. részhez: Fejlesztői élmény és a SPACE keretrendszer

A 2. rész a szállítást kívülről mérte: milyen gyorsan és milyen biztonságosan
halad a kód egy csővezetéken. Ez a rész a kódot író emberek élményét méri,
és azért létezik, mert egy kizárólag szállítási metrikákból álló készlet
kitűnően festhet akkor is, amikor mögötte az emberek kiégnek, belefulladnak a
megszakításokba, vagy csendben kiszállnak lélekben. Az a szervezet, amely
csak a DORA-metrikákat figyeli, egy-két évig javíthatja őket úgy, hogy
egyre keményebben hajtja a csapatot, egészen addig, amíg a fluktuáció, a
minőség összeomlása vagy a kiégés egyszerre el nem törli a nyereséget. Ez a
rész az ellensúly.

A központi elem a [SPACE keretrendszer](https://queue.acm.org/detail.cfm?id=3454124),
amelyet a Microsoft, a GitHub és a Victoria Egyetem kutatói dolgoztak ki, kifejezetten
korrekciónak arra az iparági szokásra, hogy a fejlesztői termelékenységet
egyetlen, könnyen kijátszható közelítő mutatóval, például a kódsorok vagy a
commitok számával mérik. A SPACE öt dimenziót ölel fel: elégedettség és jóllét,
teljesítmény, aktivitás, kommunikáció és együttműködés, valamint hatékonyság
és flow. A keretrendszer központi fegyelme, és ezért kezeli ez a rész
ugyanazzal a szigorral, mint a 2. rész a saját flow-metrikáit, az, hogy
egyetlen dimenzió sem megbízható önmagában; az érték éppen abból fakad, hogy
mind az ötöt együtt tartjuk szem előtt, így egy csapat nem festhet jól az
egyik tengelyen úgy, hogy közben csendben rombol egy másikat.

Nagy csapatoknál a fejlesztői élmény metrikái olyan kérdésre felelnek, amelyre a
DORA nem tud: fenntartható-e ez a szállítási teljesítmény, és megtartja-e a
szervezet az embereket, akik létrehozzák. Azok a nagyvállalatok, amelyek
figyelmen kívül hagyják ezt a részt, általában a fluktuációs adatokból és a
kilépő interjúkból szembesülnek a költséggel, jóval azután, hogy a kár
megtörtént; a közszféra szervezetei, amelyeket gyakran a közszférabeli
bérkorlátok akadályoznak abban, hogy pusztán fizetéssel versenyezzenek, különösen
jó okkal kezelik a fejlesztői élményt elsőrangú, aktívan irányított ügyként,
nem utólagos gondolatként.

## A rész témái

- **3.1 A SPACE keretrendszer:** Az öt dimenzió együtt, miért nem megbízható
  egyik sem önmagában, és hogyan építhető belőlük valóban kiegyensúlyozott
  metrikakészlet.
- **3.2 Elégedettségi és jóllétmetrikák:** A beteljesülés, a frusztráció és a
  kiégési kockázat mérése, az a dimenzió, amelyet semmilyen rendszertelemetria
  nem láthat közvetlenül.
- **3.3 Teljesítménymetrikák és eredményközelítők:** Az a dimenzió, amelyet
  a legkönnyebben tévesztenek össze az aktivitással, és hogyan mérhető helyette
  az eredményhez való valódi hozzájárulás.
- **3.4 Aktivitásmetrikák és korlátaik:** A commitok száma, a kódsorok és az,
  hogy miért ez a legveszélyesebb dimenzió, ha túlsúlyt kap.
- **3.5 Kommunikációs és együttműködési metrikák:** Hogyan áramlik valójában az
  információ emberek és csapatok között, és milyen egy egészséges minta.
- **3.6 Hatékonyság és flow: mély munka és megszakítások:** A valódi mérnöki
  munkához szükséges megszakítatlan idő védelme és az azt erodáló
  súrlódás mérése.
- **3.7 Fejlesztői élmény felmérések és DevEx-metrikák:** Hogyan futtass olyan
  felmérést, amely megbízható jelet ad egy népszerűségi verseny helyett, és
  hogyan kombináld objektív adatokkal.

## Hogyan kapcsolódnak össze ezek a témák

A 3.1 téma az öt SPACE-dimenziót együtt mutatja be, a 3.2-től a 3.6-ig terjedő
témák pedig sorra veszik mindegyiket valódi mélységben, abban a sorrendben,
ahogy a SPACE kutatói megadják őket. A 3.7 téma a felmérések tervezésének
gyakorlati mechanikájával zárja a részt, mert az elégedettség, a teljesítmény
és az együttműködés mind részben önbevalláson alapuló adatokra támaszkodik (az
1.5 téma műszerezés és önbevallás közötti különbségtétele az egész részben
közvetlenül lényeges), és egy rosszul megtervezett felmérés az összes
korábbi témát alááshatja.

A rész központi fegyelme, a dimenziók közötti egyensúly az egyetlen dimenzióbeli
erő helyett, ennek a könyvnek a legvilágosabb gyakorlati példája az 1.3 téma
eredmények a kibocsátás előtt elvére, amelyet itt emberekre alkalmazunk egy
szállítási csővezeték helyett. Az aktivitás (3.4 téma) a SPACE azon dimenziója, amely
leginkább hasonlít a tiszta kibocsátási metrikához, és ez a rész ennek
megfelelően kezeli: hasznos az öt bemenet egyikeként, veszélyes önálló
jelként. A 2. résszel együtt olvasva ez a rész kiegészíti azt a képet, amelyet
a DORA egyedül nem tud megadni: nem csak azt, hogy a szoftver gyorsan és
biztonságosan eljut-e a felhasználókhoz, hanem azt is, hogy a szállító emberek
fenn tudják-e tartani ezt a tempót.
