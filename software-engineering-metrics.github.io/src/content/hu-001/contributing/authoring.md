# Szerzés: témák írása és szerkesztése

## Írás előtt

- Olvasd el a [stílusszabályokat](style-rules.md) és a tárolóhely gyökerében lévő `spec/conventions.md` fájlt.
- Nézd meg a tárolóhely gyökerében a `spec/structure.md` fájlt, hogy lásd, hová illik a téma, és milyen számot kapjon.

## Új téma írása

1. Válaszd ki a részt és a részen belüli következő szabad tizedes számot. A számozás folytonos, ezért egy új téma általában a rész utolsó témája utáni számot kapja.
2. Hozd létre a `locales/en-gb-oxendict/topics/PP-CC-slug.md` fájlt (nullákkal kiegészített, kötőjellel tagolt előtag, például `02-01-...`) a [témasablonból](chapter-template.md). Írd oxfordi helyesírással (lásd `spec/oxford-spelling.md`); a másik három nyelvi változatot soha ne szerkeszd közvetlenül.
3. Írj a sablon szerint. Minden tartalmi téma minden szakaszára szükség van: áttekintés, alapelvek, ajánlások, kompromisszumok (táblával), megbeszélési kérdések, ágazati szemszög (startup, kisvállalkozás, nagyvállalat, közszféra), példák (egy nagyvállalati és egy közszféra), üzleti érv, antiminták, ötszintű érettségi modell, ötletek a vitához, legfontosabb tanulságok és források.
4. Nevezd meg a kijátszási vektort. Minden metrikacsaládnak ki kell mondania a választ arra, hogy "hogyan tud egy csapat jól mutató számot elérni anélkül, hogy javítaná azt, amit a szám mér, és milyen védőkorlát fogja ezt meg" (lásd az 1.2 témát).
5. Az első használatkor határozd meg a fogalmakat. Az első említésnél tegyél Wikipedia-hivatkozást a kulcsfogalmakhoz, csak folyó szövegben.
6. Hivatkozz a kapcsolódó témákra tizedes számmal, például "(2.1 téma)".
7. Vedd fel a témát a `spec/structure.md` fájlba.
8. Ha a rész bevezetője (N.0) felsorolja a témáit, vegyél fel oda egy pontot.
9. Futtasd a `python3 tools/localize.py` parancsot, hogy a téma átkerüljön az `en-001`, `en-gb` és `en-us` változatba.
10. Futtasd a `just nav`, majd a `just test` parancsot.

## Meglévő téma szerkesztése

- Tartsd meg a szakaszok sorrendjét és a címsorokat. A tesztek ellenőrzik, hogy a tartalmi témákban megvan-e minden kötelező szakasz.
- Őrizd meg a beágyazott definíciókat, a Wikipedia-hivatkozásokat, a táblákat és a forráslistát, hacsak a szerkesztés nem éppen róluk szól.
- Ne írj em-dasht és a tiltott kifejezéseket. Ha átfogalmazol, fogalmazd át, ne tegyél gondolatjelet a helyére.
- Ezután futtasd a `python3 tools/localize.py` parancsot, hogy az `en-001`, `en-gb` és `en-us` újra származzon a szerkesztett `en-gb-oxendict` forrásból.

## Átnevezés vagy átszámozás

- Nevezd át a fájlt a `locales/en-gb-oxendict/` alatt, frissítsd a `# N.M Cím` címsort, frissítsd a `spec/structure.md` fájlt, és frissíts minden, a régi számra mutató kereszthivatkozást.
- Futtasd a `python3 tools/localize.py` parancsot, hogy a fájl a másik három nyelvi változatban is átnevezésre kerüljön (mind a négyet ugyanazokból a relatív útvonalakból származtatja).
- Futtasd a `just nav` és a `just test` parancsot. A tesztek jelezni fogják, ha eltér a H1 és a fájlnév, ha lyuk van a számozásban, ha egy nyelvi változat eltért a forrástól, vagy ha egy hivatkozás törött.

## Hangnem emlékeztető

Úgy írj, mint egy tapasztalt kolléga, aki azt akarja, hogy az olvasó sikeres legyen. Meleg, egyszerű, közvetlen és hasznos. Rövid mondatok. Töltelék nélkül.
