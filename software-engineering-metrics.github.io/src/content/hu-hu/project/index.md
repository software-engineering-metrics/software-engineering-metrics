# A projektről

A könyv projektdokumentációja: hogyan áll össze, hogyan építhető és ellenőrizhető, és hol van az igazságforrás. Magához a könyvhöz lásd a [tartalomjegyzéket](../index.md).

## A projekt térképe

- **A könyv:** négy nyelvi változatban jelenik meg a `locales/` alatt; lásd a
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md) fájlt.
  Ez a nyelvi változat, az `en-gb-oxendict/topics/` (63 fájl), az `en-gb-oxendict/front-matter/`
  és a 9. rész függelékei a kézzel írt forrás; az `en-001`, `en-gb` és `en-us` ebből származik.
- **Igazságforrás:** a `spec/` a tárolóhely gyökerében (nem kerül ki az oldalra). A szerkezetet a `spec/structure.md`, az írási szabályokat a `spec/conventions.md`, a helyesírást a `spec/oxford-spelling.md` rögzíti. Minden más ehhez igazodik.
- **Eszközök:** a `tools/localize.py` származtatja a másik három nyelvi változatot; a `tools/gen_nav.py` generálja a navigációt; a `tests/validate.py` kikényszeríti a specifikációt; a `justfile` köti össze őket.
- **Útmutató közreműködőknek:**
  az [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  a tárolóhely gyökerében, valamint a [hozzájárulás szakasz](../contributing/index.md) útmutatói.

## Építés és ellenőrzés

Az ellenőrző csomag Python 3-on fut, más függőség és hálózat nélkül. A feladatok a [just](https://github.com/casey/just) eszközön keresztül futnak.

```sh
just test    # szerkezet, stílus, hivatkozások és a specifikáció-lemez egyezés ellenőrzése
just nav     # a generált navigációs fájlok újragenerálása
just check   # nav, majd test
just stats   # téma- és szószámok
```

Ez a tárolóhely a könyv tartalmát és specifikációját tartalmazza. A különálló
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io)
tárolóhely rendereli weboldallá.

## Hogyan működik itt a specifikációvezérelt fejlesztés

A specifikáció az első. A `spec/structure.md` megmondja, mely témák léteznek és hogyan számozottak. A `spec/conventions.md` megmondja, hogyan kell írni őket. A témák mindkettőnek megfelelően készülnek. A `tools/gen_nav.py` a témákból származtatja a navigációt, a `tests/validate.py` pedig az eredményt visszaellenőrzi a specifikációhoz képest. Ha a témák és a specifikáció valaha eltérnek, a tesztek elbuknak, és ez a jel, hogy hozd őket újra összhangba.

Ez távol tartja az eltéréseket: egy változtatás csak akkor "kész", ha a specifikáció, a témák, a generált navigáció és a tesztek mind egyeznek.

## Tervezési döntések, amelyeket érdemes ismerni

- **Lapos, tizedes számozású témák.** A fájlok `locales/<locale>/topics/PP-CC-slug.md` alakúak, minden nyelvi változatban ugyanazzal a slug-gal. A rész egész szám; a téma tizedes tört; az N.0 a rész bevezetője. Ez stabil azonosítókat ad, és lehetővé teszi, hogy az eszközök könyvtárfa nélkül rendezzenek és csoportosítsanak.
- **Egy kézzel írt nyelvi változat, három származtatott.** Az `en-gb-oxendict` oxfordi helyesírású, a legtöbb nemzetközi szabványügyi szervezet házi stílusa (lásd a `spec/oxford-spelling.md` fájlt); az `en-001`, `en-gb` és `en-us` mechanikusan ebből származik, így a fordítás soha nem tér el a forrástól.
- **Generált navigáció.** A tartalomjegyzék, a tartalom oldal és a tárgymutató generált, így soha nem tér el a témáktól.
- **Kapcsolat nélküli, függőségmentes tesztek.** A csomag csak a standard könyvtárat használja, így bárhol fut, CI-ben és pre-commit hookokban is.
- **A kereszthivatkozások sima szövegek maradnak.** A próza tizedes számmal hivatkozik a témákra ("lásd a 2.1 témát"), ahogy a specifikáció megköveteli; a renderelő oldal feladata, hogy ezekből hivatkozásokat csináljon.
- **Nincs em-dash, szabályként és tesztként is.** Tudatos stílusválasztás, kikényszerítve, hogy a könyv növekedésével is igaz maradjon.
- **Minden metrikacsalád megnevezi a saját kijátszási vektorát.** Ez az egyetlen szabály a sablonban, amelynek nincs megfelelője a testvérprojekt, a `software-engineering-guide` esetében: azért van, mert e könyv egész tárgya a mérés, ezért magának a mérésnek a kockázata elsőrendű, nem rejtett.

## További olvasnivaló

- [Szerzés](../contributing/authoring.md) : témák írása és szerkesztése.
- [Navigáció](../contributing/navigation.md) : hogyan működnek a generált fájlok.
- [Tesztelés](../contributing/testing.md) : mit ellenőriznek a tesztek, és hogyan javítsd a hibákat.
- [Példák](../examples/index.md) : kicsi, konkrét példák.
- [Változásnapló](changelog.md) : a lényeges változtatások története.
