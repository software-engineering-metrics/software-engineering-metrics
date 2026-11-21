# Navigáció: hogyan működnek a generált fájlok

Nyelvi változatonként négy navigációs elem generálódik az adott nyelvi változat témáiból, nem kézzel íródik (plusz a `README.md`, amelyet egyszer, a referencia-nyelvi változatra, az `en-gb-oxendict` változatra generálnak):

- `README.md` (a tartalomjegyzék a tárolóhely főoldalán; csak a referencia-nyelvi változatnál)
- `locales/<locale>/index.md` (a közzétett oldal főoldala)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (a tárgymutató, hivatkozásokkal)

Ezeket a
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py)
állítja elő. Ne szerkeszd őket kézzel, mert a következő generálás felülírja a változtatást.

## Mikor kell újragenerálni

Futtasd a `just nav` parancsot (vagy a `python3 tools/gen_nav.py` parancsot), amikor:

- témát adsz hozzá, törölsz, nevezel át vagy számozol át, vagy
- megváltoztatod egy téma `# N.M Cím` címsorát (a tartalomjegyzék ezt használja).

Ha bármit megváltoztattál a `locales/en-gb-oxendict/` alatt, előbb futtasd a `python3 tools/localize.py` parancsot, hogy a másik három nyelvi változat témái (és generált címeik) naprakészek legyenek, mielőtt a `gen_nav.py` beolvassa őket; lásd a
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md) fájlt.

## Hogyan működik

Minden nyelvi változatnál a `gen_nav.py` beolvassa az összes `locales/<locale>/topics/*.md` fájlt, tizedes szám szerint rendezi, részek szerint csoportosítja, majd:

- felépíti a részenkénti tartalomjegyzéket az egyes témák H1 címéből,
- beírja a `locales/<locale>/index.md` és a `locales/<locale>/front-matter/table-of-contents.md` fájlba (és csak a referencia-nyelvi változatnál a `README.md` fájlba),
- átvizsgálja a tartalmi témákat (az 1–8. rész) egy rögzített kulcsfogalmi listáért, és megírja a tárgymutatót a `locales/<locale>/topics/09-07-index.md` fájlba.

A közös szövegrészek (a bevezető bekezdés, a "Hogyan olvasd ezt a könyvet", az "Átfogó témák" és a részcímek) ugyanúgy lokalizáltak, mint a témák szövege, a `tools/localize.py` nyelvi függvényein keresztül, így a generált oldalak természetesen olvashatók minden nyelvi változatban.

A részcímek a szkript elején lévő `PART_TITLES` szótárban vannak. A generátor kettőspontos részfejléceket használ ("2. rész: Szállítási és flow-metrikák"), soha nem em-dasht.

## Amit nem érint

A tárolóhely gyökerében lévő specifikáció (`spec/index.md`, `spec/structure.md` és társai) kézzel írt igazságforrás. A generátor nem írja, és nem része a közzétett oldalnak. Ha megváltoztatod a szerkezetet, frissítsd magad a `spec/structure.md` fájlt, majd futtasd a `just nav` parancsot a származtatott fájlokhoz, és a `just test` parancsot annak megerősítésére, hogy minden egyezik.
