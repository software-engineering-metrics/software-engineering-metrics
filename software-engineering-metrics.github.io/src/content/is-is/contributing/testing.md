# Prófanir: sannprófunarsafnið

## Keyrðu það

```sh
just test
# or
python3 tests/validate.py
```

Það keyrir hvaðan sem er og þarfnast aðeins Python 3 (engir þriðja aðila pakkar, ekkert net). Það prentar eina línu á athugun og hættir með ekki-núll stöðu ef einhver athugun fellur, svo það virkar í CI og sem pre-commit krókur.

## Hvað það athugar

- **Væntanlegur viðfangsefnafjöldi** (fastinn efst í skriftunni).
- **Samfelld númerun** innan hvers hluta, byrjandi á N.0.
- **H1 passar við skráarnafn** tugabrot fyrir sérhvert viðfangsefni.
- **H1 titlar passa við `spec/structure.md`** staf fyrir staf, ekki bara upphafs-tugabrotið.
- **Nauðsynlegir hlutar** eru til í sérhverju efnisviðfangsefni (1. til 8. hluti, viðfangsefni N.1 og upp), **í nákvæmri sniðmátsröð**.
- **Lágmarksorðafjöldi** fyrir sérhvert efnisviðfangsefni (1.500 orð), með leyfislista í skriftunni fyrir vísvitandi undantekningar.
- **Engin tankastrik** í nokkurri Markdown-skrá.
- **Hálfstrik aðeins milli tölustafa**, svo „2.1–2.8“ stenst og allt annað fellur.
- **Engir bannaðir frasar** („not only“, „but also“, „load-bearing“).
- **Allir innri `.md` tenglar leysast.**
- **Víxlvísanir í texta benda á raunveruleg viðfangsefni**: tilvísun í viðfangsefnisnúmer án samsvarandi skrár á diski fellur, með sama tilvísunarmynstri og sjálfvirk viðfangsefnatenging útgefna vefsins notar.
- **Wikipedia-tenglar eru rétt mótaðir** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` passar við skrárnar á diski**, í báðar áttir.
- **README, heimasíðan og efnisyfirlitssíðan tengja hvert viðfangsefni.**

## Þegar athugun fellur

Fallandi línan nefnir skrána og vandann. Algengar lagfæringar:

- Tankastrik fannst: endurorðaðu setninguna til að fjarlægja strikið. Eyddu því ekki bara.
- Vantandi hluti: bættu vantandi `##` hlutanum við úr viðfangsefnissniðmátinu.
- Byggingarmisræmi: þú bættir við eða endurnefndir viðfangsefni án þess að uppfæra `spec/structure.md`, eða öfugt. Komdu þeim aftur í samræmi.
- Brotinn tengill: lagaðu slóðina, eða uppfærðu hana eftir endurnefningu.
- Númerabil: endurnúmeraðu svo hlutinn sé samfelldur frá N.0.

## Umfram sannprófunarsafnið

- `just spell` keyrir [codespell](https://github.com/codespell-project/codespell) yfir geymsluna. Stillingin, þar með falskjákvæðu hunsunarlistinn, er `[tool.codespell]` hlutinn í `pyproject.toml`.
- `just stats` prentar Markdown-skýrslu (orðafjölda á viðfangsefni, þunn viðfangsefni, Wikipedia-tengla, heimildafærslur) frá `tools/stats.py`.

## Samfelld samþætting

- `.github/workflows/test.yml` keyrir á hverja sameiningarbeiðni og á ýtingar á greinar sem eru ekki main: sannprófunarsafnið og codespell. Þessi geymsla byggir ekki eða afhendir vef; birting á sér stað í aðskildu `software-engineering-metrics.github.io` geymslunni.
- `.github/workflows/links.yml` athugar ytri tengla vikulega með [lychee](https://github.com/lycheeverse/lychee) (hunsunarmynstur í `.lycheeignore`) og heldur niðurstöðunum í einni „Link checker report“ vandamálsskýrslu. Ytri tenglar eru viljandi utan sameiningarbeiðnaleiðarinnar.

## Ekki þakið af prófunum

Safnið athugar byggingu og stíl, ekki sannleika. Það getur ekki sagt hvort heimild sé raunveruleg eða hvort texti sé nákvæmur. Staðfestu tilvitnanir og staðreyndir handvirkt eða með rannsóknarumferð. Tilvist Wikipedia-tengils (öfugt við form tengils) þarfnast líka netathugunar, sem safnið skilur viljandi eftir úti svo það geti keyrt án nets.
