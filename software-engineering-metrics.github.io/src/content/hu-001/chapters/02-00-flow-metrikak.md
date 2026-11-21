# 2.0 Bevezetés a 2. részhez: Flow-metrikák

Ha az 1. rész a mérés filozófiája, akkor a 2. rész az a hely, ahol ez a filozófia
találkozik magával a szállítással: azokkal a metrikákkal, amelyek nem csak azt
írják le, milyen gyorsan és milyen biztonságosan mozgat egy csapat kódot az
ötlettől a futó rendszerig, hanem azt is, milyen fajta érték áramlik egyáltalán
ezen a csővezetéken. Ez a rész a **Flow Framework** köré szerveződik, amelyet Mik
Kersten alkotott meg a 2018-as *Project to Product* című könyvében, és amely a
szoftverszállítást értékáramként kezeli, és közös szókincset ad ennek az
értékáramnak: négy flow-elemtípust és öt flow-metrikát, amelyek a mérnöki
tevékenységet olyan módon kötik az üzleti stratégiához, amelyet egy nem műszaki
érdekelt is valóban használni tud.

A szervező keretrendszer választása szándékos. A DORA-metrikák, a telepítési
gyakoriság, az átfutási idő, a változtatási hibaarány és a helyreállítási idő,
valóban kutatással igazoltak, és továbbra is az egyik legjobban alátámasztott
elérhető szállítási keretrendszert alkotják, de a csővezeték mechanikáját
mérik, nem azt, ami rajta áramlik. Egy csapat kitűnő DORA-számokat produkálhat,
miközben a ténylegesen leszállított értéke csendben az újramunka felé sodródott,
vagy eltávolodott az adósság- és kockázati munkától, amely a rendszer jövőjét
védi. Ez a rész teljes egészében tárgyalja a DORA-t, de egyetlen, összevont
referenciatémaként a végén (2.10 téma), mert a legtöbb szervezet számára a
sürgetőbb, gyakrabban hiányzó kérdés nem az, hogy „milyen gyors a
csővezetékünk", hanem az, hogy „mit szállít valójában a csővezetékünk". A rész
minden témája továbbra is ugyanazt a fegyelmet követi, amelyet az 1. rész
megalapozott: mondd ki a metrikát, nevezd meg, hogyan játsszák ki, és párosítsd
azzal a védőkorláttal, amely elkapja ezt a kijátszást.

A nagy csapatoknál a flow-metrikák teszik lehetővé a csapatok közötti
összehasonlítást az érték szem elől tévesztése nélkül. Egy platformcsapatnak,
egy mobilcsapatnak és egy adatcsapatnak szinte semmi közös nem lehet a napi
munkájában, de a következetesen számolt flow-sebesség és flow-eloszlás lehetővé
teszi a vezetésnek, hogy mindhármuknak ugyanazt a tisztességes kérdést tegye fel:
olyan értéket szállít-e ez a csapat, amilyet a jelenlegi szakasza valóban
megkíván. A nagyvállalatok és a közszféra szervezetei erre a részre támaszkodnak
a platformberuházás indoklásához, a versengő modernizációs erőfeszítések
megtérülésének összehasonlításához, és annak bizonyításához, anekdota helyett
bizonyítékkal, hogy a mérnöki kapacitást úgy osztják el, ahogy a vezetés hiszi.

## A rész témái

- **2.1 A Flow Framework:** A keretrendszer eredete, értékáram-modellje, és az,
  hogy a könyv miért ezt használja, nem pedig csak a DORA-t a szállítási és
  flow-metrikák szervezéséhez.
- **2.2 Flow-elemek: funkciók, hibák, kockázatok és adósság:** A keretrendszer
  négy típusú taxonómiája, zéró összegű kapacitáselosztása, és az, hogyan
  játsszák ki az osztályozást, ha utólag alkalmazzák.
- **2.3 Flow-sebesség és flow-eloszlás:** Mennyi készült el és milyen fajta érték
  volt, mindig együtt olvasva.
- **2.4 Flow-idő és flow-terhelés:** Hogyan bizonyítja Little törvénye, hogy egy
  túlterhelt értékáram matematikailag lelassul, nem csak valószínűleg.
- **2.5 Flow-hatékonyság és folyamatban lévő munka:** Miért nem ugyanaz elfoglaltnak
  lenni, mint gyorsnak, és hogyan javítja a folyamatban lévő munka korlátozása
  az átbocsátást ellenintuitív módon.
- **2.6 Ciklusidő és összetevői:** Egy változtatás mérnöki idejének felbontása
  alkotó szakaszaira, hogy a csapat pontosan tudja, hová megy valójában az idő.
- **2.7 Sorbanállás-elmélet:** A flow-terhelés, a flow-idő, a ciklusidő és a
  folyamatban lévő munka alatti matematika, és az, miért robban fel egy közös
  erőforrás várakozási ideje, ahogy a kihasználtság a határához közelít.
- **2.8 Lean értékáram-metrikák:** A klasszikus Lean eszköztár, az átfutási idő,
  a feldolgozási idő, a ciklusidő, a kész és pontos arány és az ütemidő,
  amelyből a rész szoftverspecifikus metrikái származnak, és hogyan kössük
  össze a két szókincset.
- **2.9 Pull request- és kódáttekintési metrikák:** A szállítási csővezeték
  egyetlen szakaszán belül élő metrikák, és hogyan torzíthatják az áttekintés
  minőségét, ha gondatlanul használják őket.
- **2.10 A DORA-metrikák keretrendszere:** A négy DORA-metrika teljes egészében,
  szándékosan utolsóként, mert a csővezetéket mérik, nem a rajta áramló értéket.

## Hogyan kapcsolódnak össze ezek a témák

A 2.1 téma a Flow Frameworköt mutatja be egészében; a 2.2 téma a flow-elemek
taxonómiáját adja, a 2.3 és 2.4 téma pedig közösen lefedi az öt flow-metrikát,
a sebességet és az eloszlást együtt, majd az időt és a terhelést együtt, a
terhelést és az időt közvetlenül Little törvényéhez kötve. A 2.5-től a 2.7-ig
terjedő témák a flow-idő és a ciklusidő alatti mechanikára nagyítanak rá: a
flow-hatékonyság és a folyamatban lévő munka megmagyarázza, miért lassabbak a
mérnöki szakaszok, mint amilyennek látszanak, a ciklusidő ezt a mérnöki részt
szakaszaira bontja, a sorbanállás-elmélet pedig bizonyítható matematikai
formában megalapozza, miért igazak az összes előző téma állításai a terhelésről,
a várakozási időről és a kihasználtságról. A 2.8 téma egy lépést hátralép, hogy
mindezt visszavezesse az eredetéhez, a klasszikus Lean értékáram-térképezéshez,
a közös szókincshez, amelyből a rész szoftverspecifikus metrikái általánosítanak.
A 2.9 téma azt az egyetlen csővezeték-szakaszt tárgyalja, amelyet a legtöbb csapat
a leggyorsabban javíthat. A 2.10 téma a DORA-metrikákkal zárja a részt teljes
egészükben, jól alátámasztott, de szűkebb referenciarétegként bemutatva, miután
a korábbi témák szélesebb, üzletközpontú képe már a látómezőben van.

A rész védőkorlát-fegyelme közvetlenül visszakapcsolódik az 1.2 témához: a
flow-sebességet soha nem jelentik mellette flow-eloszlás nélkül, a DORA
sebességmetrikái pedig a stabilitásmetrikákkal párosítva maradnak, hogy egy
csapat ne javíthasson sebességi számot azzal, hogy csendben kockázatosabb kódot
vagy szűkebb értékválasztékot szállít. Ez a párosítás egyik keretrendszernek sem
mellékes: mindkettő központi felismerése, és a 6. rész megbízhatósági metrikái
ugyanennek a párosításnak a stabilitási felét terjesztik ki az éles
üzemeltetésre, miután a kód már kiszállt.
