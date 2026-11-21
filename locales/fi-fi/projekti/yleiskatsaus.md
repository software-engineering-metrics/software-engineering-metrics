# Tietoa hankkeesta

Kirjan hankedokumentaatio: miten se on koottu, miten se rakennetaan ja tarkistetaan
ja missä totuuden lähde sijaitsee. Itse kirjaan pääset
[sisällysluettelosta](../index.md).

## Hankkeen kartta

- **Kirja:** julkaistu neljällä englanninkielisellä kielialueella hakemiston
  `locales/` alla sekä käsin käännetyillä kielialueilla; katso
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Kielialue `en-gb-oxendict/topics/` (63 tiedostoa), `en-gb-oxendict/front-matter/`
  ja osan 9 liitteet ovat käsin kirjoitettu lähde; `en-001`, `en-gb` ja `en-us`
  johdetaan siitä.
- **Totuuden lähde:** `spec/` repositorion juuressa (ei julkaista sivustolle).
  Rakenne on määritelty tiedostossa `spec/structure.md`, kirjoitussäännöt
  tiedostossa `spec/conventions.md` ja oikeinkirjoitus tiedostossa
  `spec/oxford-spelling.md`. Kaikki muu rakennetaan vastaamaan niitä.
- **Työkalut:** `tools/localize.py` johtaa kolme muuta englanninkielistä
  kielialuetta; `tools/gen_nav.py` generoi navigoinnin; `tests/validate.py`
  valvoo määrittelyä; `justfile` sitoo ne yhteen.
- **Osallistujan ohjeet:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  repositorion juuressa ja oppaat [osallistumisosiossa](../osallistuminen/yleiskatsaus.md).

## Rakenna ja tarkista

Tarkistussarja toimii Python 3:lla ilman muita riippuvuuksia ja ilman
verkkoyhteyttä. Tehtävät ajetaan [justilla](https://github.com/casey/just).

```sh
just test    # tarkista rakenne, tyyli, linkit ja määrittely levyä vasten
just nav     # generoi navigointitiedostot uudelleen
just check   # nav, sitten test
just stats   # aihe- ja sanamäärät
```

Tämä repositorio sisältää kirjan sisällön ja määrittelyn. Se renderöidään
verkkosivustoksi erillisessä
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io)-repositoriossa.

## Miten määrittelylähtöinen kehitys toimii täällä

Määrittely tulee ensin. `spec/structure.md` kertoo, mitkä aiheet ovat olemassa
ja miten ne numeroidaan. `spec/conventions.md` kertoo, miten ne on kirjoitettava.
Aiheet kirjoitetaan täyttämään molemmat. `tools/gen_nav.py` johtaa navigoinnin
aiheista, ja `tests/validate.py` tarkistaa tuloksen takaisin määrittelyä
vasten. Jos aiheet ja määrittely joskus eroavat toisistaan, testit kaatuvat,
mikä on merkki palauttaa ne linjaan.

Näin ajautuminen pysyy poissa: muutos on valmis vasta, kun määrittely, aiheet,
generoitu navigointi ja testit ovat yhtä mieltä.

## Suunnittelupäätökset, jotka kannattaa tietää

- **Litteät, desimaalinumeroidut aiheet.** Tiedostot ovat
  `locales/<locale>/topics/PP-CC-slug.md`, englanninkielisillä kielialueilla
  sama slug joka kielialueella. Osa on kokonaisluku, aihe on desimaaliluku ja
  N.0 on osan johdanto. Tämä pitää tunnisteet vakaina ja antaa työkalujen
  lajitella ja ryhmitellä ilman hakemistopuuta.
- **Yksi käsin kirjoitettu kielialue, kolme johdettua.** `en-gb-oxendict` on
  Oxford-oikeinkirjoitusta, useimpien kansainvälisten standardointielinten
  talon tyyliä (katso `spec/oxford-spelling.md`); `en-001`, `en-gb` ja `en-us`
  johdetaan siitä mekaanisesti, joten ne eivät ajaudu lähteestä.
- **Generoitu navigointi.** Sisällysluettelo, sisältösivu ja asiahakemisto
  generoidaan, joten ne eivät koskaan ajaudu aiheista.
- **Offline-toimiva, riippuvuuksista vapaa testaus.** Sarja käyttää vain
  vakiokirjastoa, joten se toimii kaikkialla, myös CI:ssä ja pre-commit-koukuissa.
- **Ristiviittaukset pysyvät pelkkänä tekstinä.** Leipäteksti viittaa aiheisiin
  desimaalinumerolla ("katso aihe 2.1"), kuten määrittely vaatii; renderöivä
  sivusto vastaa viittausten muuttamisesta linkeiksi.
- **Ei em-viivoja, säännöllä ja testillä.** Tietoinen tyylivalinta, jota
  valvotaan, jotta se pysyy totena kirjan kasvaessa.
- **Jokainen mittariperhe nimeää oman pelaamisen tapansa.** Tämä on pohjan ainoa
  sääntö, jolla ei ole vastinetta sisarprojektissa
  `software-engineering-guide`: se on olemassa, koska tämän kirjan koko aihe on
  mittaaminen, joten itse mittaamisen riski on oltava ensimmäisen luokan asia,
  ei piilevä.

## Lisälukemista

- [Kirjoittaminen](../osallistuminen/kirjoittaminen.md) : aiheiden kirjoittaminen ja muokkaaminen.
- [Navigointi](../osallistuminen/navigointi.md) : miten generoidut tiedostot toimivat.
- [Testaus](../osallistuminen/testaus.md) : mitä testit tarkistavat ja miten virheet korjataan.
- [Esimerkit](../esimerkit/yleiskatsaus.md) : pieniä, konkreettisia esimerkkejä.
- [Muutoshistoria](muutoshistoria.md) : merkittävien muutosten historia.
