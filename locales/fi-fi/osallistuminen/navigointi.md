# Navigointi: miten generoidut tiedostot toimivat

Kielialuetta kohti neljä navigointiartefaktia generoidaan kyseisen kielialueen
aiheista, ei kirjoiteta käsin (sekä `README.md`, joka generoidaan vain kerran
vertailukielialueelle `en-gb-oxendict`):

- `README.md` (sisällysluettelo repositorion etusivulla; vain vertailukielialue)
- `locales/<locale>/index.md` (julkaistun sivuston etusivu)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (linkitetty asiahakemisto)

Ne tuottaa
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Älä muokkaa niitä käsin, koska seuraava generointi korvaa muutoksesi.

## Milloin generoidaan uudelleen

Aja `just nav` (tai `python3 tools/gen_nav.py`), aina kun:

- lisäät, poistat, nimeät uudelleen tai numeroit uudelleen aiheen tai
- muutat aiheen `# N.M Otsikko` -otsikkoa (sisällysluettelo käyttää sitä).

Aja ensin `python3 tools/localize.py`, jos muutit mitään hakemiston
`locales/en-gb-oxendict/` alla, jotta kolmen muun englanninkielisen kielialueen
aiheet (ja niiden generoidut otsikot) ovat ajan tasalla ennen kuin `gen_nav.py`
lukee ne; katso
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
Käsin käännetyillä kielialueilla vastaavan päivityksen tekee
`python3 tools/gen_translated_nav.py`.

## Miten se toimii

Kullekin kielialueelle `gen_nav.py` lukee jokaisen tiedoston
`locales/<locale>/topics/*.md`, lajittelee ne desimaalinumeron mukaan, ryhmittelee
osittain ja:

- rakentaa osittain etenevän sisällysluettelon jokaisen aiheen H1-otsikosta,
- kirjoittaa sen tiedostoihin `locales/<locale>/index.md` ja
  `locales/<locale>/front-matter/table-of-contents.md` (ja vain
  vertailukielialueelle tiedostoon `README.md`),
- käy läpi asiasisältöiset aiheet (osat 1–8) kiinteän avaintermilistan varalta ja
  kirjoittaa asiahakemiston tiedostoon `locales/<locale>/topics/09-07-index.md`.

Jaettu vakioteksti (johdantokappale, "Näin luet tätä kirjaa", "Läpileikkaavat
teemat" ja osien otsikot) lokalisoidaan samoin kuin aiheiden leipäteksti
`tools/localize.py`:n kielialuefunktioilla, jotta generoidut sivut luetaan
luontevasti kullakin kielialueella.

Osien otsikot ovat `PART_TITLES`-sanakirjassa skriptin alussa. Generaattori
käyttää kaksoispisteellä erotettuja osaotsikoita ("Osa 2: Toimitus- ja
virtausmittarit"), ei koskaan em-viivoja.

## Mihin se ei koske

Repositorion juuren määrittely (`spec/index.md`, `spec/structure.md` ja
niiden kumppanit) on käsin kirjoitettu totuuden lähde. Generaattori ei kirjoita
sitä, eikä se ole osa julkaistua sivustoa. Jos muutat rakennetta, päivitä
`spec/structure.md` itse, aja sitten `just nav` johdettuja tiedostoja varten ja
`just test` varmistaaksesi, että kaikki täsmää.
