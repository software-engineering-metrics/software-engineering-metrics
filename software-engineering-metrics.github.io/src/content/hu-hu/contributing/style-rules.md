# Stílusszabályok (közös, kikényszeríthető)

A házi stílus egy helyen. A "(teszt)" jelölésű tételeket a `tests/validate.py` kényszeríti ki; a megsértés megbuktatja az összeállítást. A teljes elbeszélő változat a tárolóhely gyökerében lévő `spec/conventions.md` fájl.

## Kemény szabályok

- **Nincs em-dash.** Soha ne használd a hosszú gondolatjelet (U+2014). Használj vesszőt, kettőspontot, zárójelet vagy két mondatot. Az en-dash "-" csak számtartományban megengedett, például `1–9` vagy `2.1–2.8`. (teszt)
- **Nincs sablonos fordulat.** Ne használd a "not only ... but also", "but also" vagy "load-bearing" kifejezést. Kerüld az "It's important to note", "In today's fast-paced world", "It's crucial to consider", "It appears that", "One could argue" fordulatokat és az "it's not just X, it's Y" sémát. (teszt, az első háromra)
- **Az első használatkor határozd meg a fogalmakat.** Az első használatkor minden témában oldd fel a betűszavakat és határozd meg a szakszavakat, például "átlagos helyreállítási idő (MTTR)".
- **Kösd a kulcsfogalmakat a Wikipediához** az első említésnél, témánként egyszer, csak folyó szövegben. Alak: `[fogalom](https://en.wikipedia.org/wiki/Article_Title)`. Soha ne címsorban, táblában, kódban vagy a források szakaszában. (az alak teszt)
- **Csak valódi források.** Valódi művek szerzője és címe. Nincs kitalált cím, szerző vagy URL.
- **Nevezd meg a kijátszási vektort.** A metrikacsaládról szóló téma kimondja, hogyan játsszák ki a metrikát, és milyen védőkorlát fogja ezt meg (1.2 téma).

## Hangnem

- Meleg, közvetlen, bátorító. Szólítsd meg az olvasót közvetlenül. Rövid mondatok, egyszerű szavak. A lényeggel kezdj.
- Határozott és gyakorlatias. Gyártósemleges. Terméknevet csak tényszerű példaként említs.

## Szerkezet (teszt)

- A tartalmi témák a [`temasablon.md`](chapter-template.md) pontos szakaszsorrendjét követik.
- Az első címsor `# N.M Cím` (pontozott témaszám), és egyezik a fájl nullákkal kiegészített `PP-CC` előtagjával.
- A számozás minden részen belül folytonos, és N.0-val kezdődik.

## Szerkesztés után

- Ha megváltoztattad a témák készletét, frissítsd a `spec/structure.md` fájlt, és futtasd a `just nav` parancsot.
- Mindig futtasd a `just test` parancsot.
