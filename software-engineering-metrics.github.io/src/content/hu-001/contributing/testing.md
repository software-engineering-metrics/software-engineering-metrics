# Tesztelés: az ellenőrző csomag

## Futtatás

```sh
just test
# vagy
python3 tests/validate.py
```

Bárhonnan fut, és csak Python 3-at igényel (nincs külső csomag, nincs hálózat). Ellenőrzésenként egy sort ír ki, és nem nulla kilépési kóddal tér vissza, ha bármelyik ellenőrzés elbukik, így CI-ben és pre-commit hookként is működik.

## Mit ellenőriz

- **A várt témaszámot** (a szkript elején lévő állandó).
- **Folytonos számozást** minden részen belül, N.0-tól kezdve.
- **A H1 egyezik a fájlnévvel** minden téma tizedes számánál.
- **A H1 címek egyeznek a `spec/structure.md` fájllal** karakterre pontosan, nem csak a vezető tizedes számra.
- **A kötelező szakaszok** megvannak minden tartalmi témában (az 1–8. rész, N.1 és följebb), **pontosan a sablon sorrendjében**.
- **Minimális szószámot** minden tartalmi témára (1500 szó), a szkriptben szándékos kivételekre vonatkozó engedélyezőlistával.
- **Nincs em-dash** egyetlen Markdown fájlban sem.
- **Az en-dash csak számjegyek között**, így a "2.1–2.8" átmegy, minden más elbukik.
- **Nincsenek tiltott kifejezések** ("not only", "but also", "load-bearing").
- **Minden belső `.md` hivatkozás feloldódik.**
- **A prózai kereszthivatkozások valódi témákra mutatnak**: a témaszámra hivatkozás megfelelő fájl nélkül elbukik, ugyanazzal a hivatkozási mintával, amelyet a közzétett oldal témahivatkozás-automatikus linkelése használ.
- **A Wikipedia-hivatkozások jól formáltak** (`https://en.wikipedia.org/wiki/...`).
- **A `spec/structure.md` egyezik a lemezen lévő fájlokkal**, mindkét irányban.
- **A README, a főoldal és a tartalomjegyzék oldal minden témára hivatkozik.**

## Ha egy ellenőrzés elbukik

A hibás sor megnevezi a fájlt és a problémát. Gyakori javítások:

- Em-dash található: fogalmazd át a mondatot a hosszú gondolatjel eltávolításához. Ne csak töröld.
- Hiányzó szakasz: add hozzá a hiányzó `##` szakaszt a témasablonból.
- Szerkezeti eltérés: témát adtál hozzá vagy neveztél át a `spec/structure.md` frissítése nélkül, vagy fordítva. Hozd újra összhangba őket.
- Törött hivatkozás: javítsd az útvonalat, vagy frissítsd átnevezés után.
- Számozási lyuk: számozd át úgy, hogy a rész N.0-tól folytonos legyen.

## Az ellenőrző csomagon túl

- A `just spell` a [codespell](https://github.com/codespell-project/codespell) eszközt futtatja a tárolóhelyen. A konfiguráció, a hamis pozitívok kihagyási listájával együtt, a `pyproject.toml` fájl `[tool.codespell]` szakasza.
- A `just stats` Markdown jelentést ír ki (témánkénti szószámok, vékony témák, Wikipedia-hivatkozások, forrásbejegyzések) a `tools/stats.py` eszközből.

## Folyamatos integráció

- A `.github/workflows/test.yml` minden pull requestnél és a nem-main ágakra érkező pusholásoknál fut: az ellenőrző csomag és a codespell. Ez a tárolóhely nem épít és nem telepít oldalt; a renderelés a különálló `software-engineering-metrics.github.io` tárolóhelyen történik.
- A `.github/workflows/links.yml` hetente ellenőrzi a külső hivatkozásokat a [lychee](https://github.com/lycheeverse/lychee) eszközzel (kihagyási minták a `.lycheeignore` fájlban), és az eredményeket egyetlen "Link checker report" hibajegyben tartja. A külső hivatkozások szándékosan kimaradnak a pull request útvonalából.

## Amit a tesztek nem fednek le

A csomag a szerkezetet és a stílust ellenőrzi, nem az igazságot. Nem tudja megmondani, hogy egy hivatkozás valódi-e, vagy hogy a szöveg pontos-e. A forrásokat és a tényeket kézzel vagy kutatási körrel ellenőrizd. A Wikipedia-hivatkozás létezéséhez (az alakjától eltérően) hálózati ellenőrzés kell, amelyet a csomag szándékosan kihagy, hogy kapcsolat nélkül is futhasson.
