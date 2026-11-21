# Hozzájárulás

Köszönjük, hogy segítesz jobbá tenni ezt a könyvet. Minden méretű hozzájárulást szívesen fogadunk, az elütés javításától az új téma megírásáig.

## Alapszabályok

A könyv szigorú házi stílust követ. A lényeg:

- Nincs em-dash. Használj vesszőt, kettőspontot, zárójelet vagy két mondatot.
- Nincs sablonos fordulat ("not only ... but also", "load-bearing" és hasonlók).
- Meleg, egyszerű, közvetlen írás. Az olvasót szólítsd meg közvetlenül. Rövid mondatok.
- Az első használatkor határozd meg a fogalmakat. Az első említésnél kösd a kulcsfogalmakat a Wikipediához.
- Csak valódi források.
- Minden metrikacsaládról szóló téma megnevezi a kijátszási vektorát és a védőkorlátját.

A teljes szabályok a tárolóhely gyökerében lévő `spec/conventions.md` fájlban vannak, a rövid változat pedig a [stílusszabályok](stilusszabalyok.md). A tesztek a mechanikus részeket kikényszerítik.

## Beállítás

Szükséged van a Python 3-ra és a [just](https://github.com/casey/just) eszközre. Ez a tárolóhely a könyv tartalmát és specifikációját tartalmazza, valamint a SvelteKit-oldalt (`software-engineering-metrics.github.io/`), amely a közzétett weboldallá rendereli.

```sh
just         # feladatok listázása
just test    # az ellenőrző csomag futtatása
just nav     # a generált navigációs fájlok újragenerálása
just stats   # téma- és szószámok
```

## Változtatás végrehajtása

1. Olvasd el a megfelelő útmutatót: a [szerzés](szerzes.md) a témákról, a [navigáció](navigacio.md) a generált fájlokról, a [tesztelés](teszteles.md) a tesztekről szól.
2. Végezd el a lehető legkisebb változtatást, amely megoldja a feladatot.
3. Ha témát adtál hozzá, töröltél, neveztél át vagy számoztál át, frissítsd a tárolóhely gyökerében lévő `spec/structure.md` fájlt, és futtasd a `just nav` parancsot.
4. Futtasd a `just test` parancsot. Át kell mennie.
5. Vegyél fel egysoros bejegyzést a [változásnaplóba](../projekt/valtozasnaplo.md) a **Kiadatlan** alatt.

## Min dolgozhatsz

- Javíts hibákat, homályos részeket vagy elavult forrásokat.
- Javítsd a példákat, különösen a konkrét nagyvállalati és közszféra példákat.
- Ellenőrizd a hivatkozásokat valódi forrásokkal.
- Tölts fel hiányokat egy téma lefedettségében a sablon megsértése nélkül.

## Mit kerülj

- Ne szerkeszd kézzel a generált fájlokat (`README.md`, az egyes nyelvi változatok `index.md` fájlja, `front-matter/table-of-contents.md` és `topics/09-07-index.md`). Helyette változtasd a témákat, és futtasd a `just nav` parancsot.
- Ne szerkeszd közvetlenül az `en-001`, `en-gb` és `en-us` változatot; ezeket a `tools/localize.py` az `en-gb-oxendict` változatból származtatja.
- Ne adj hozzá témát a `spec/structure.md` frissítése nélkül.
- Ne írj em-dasht és tiltott kifejezéseket; a tesztek elbuknak.

## Hibák jelentése

Nyiss egy hibajegyet, amely leírja a problémát, a fájlt és a témát, és ha lényeges, a helyes forrást vagy hivatkozást. A kicsi, konkrét jelentésekre a legkönnyebb reagálni.
