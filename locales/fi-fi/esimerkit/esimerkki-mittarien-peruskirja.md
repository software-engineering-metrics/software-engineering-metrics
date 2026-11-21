# Esimerkki: maksualustatiimin mittarien peruskirja

Läpikäyty esimerkki mittarien peruskirjasta, yhden sivun asiakirjasta, jota
kuvataan
[aiheessa 1.4, Mittarien hallinta ja omistajuus](../aiheet/01-04-mittarien-hallinta-ja-omistajuus.md).
Olennaista on muoto: ilmoitettu tarkoitus, selkeä ei-tavoite, nimetyt omistajat
ja katselmointitahti. Näin lyhyt peruskirja on tarkoitettu luettavaksi, ei
arkistoitavaksi.

- **Tiimi:** Maksualusta
- **Omistaja:** Alustakehityksen esimies
- **Katselmoitu:** Neljännesvuosittain alustakatselmuksessa

## Tarkoitus

Tämä peruskirja ohjaa niitä mittareita, joita maksualustatiimi seuraa oman
toimituksensa ja luotettavuutensa osalta. Se on olemassa, jotta jokainen,
tiimin sisä- ja ulkopuolella, näkee mitä mitataan, miksi ja mihin mittareita ei
ole tarkoitettu.

## Mitä seuraamme

| Mittari | Totuuden lähde | Omistaja |
| --- | --- | --- |
| Julkaisutiheys | CI/CD-putki | Alustavastaava |
| Muutosten läpimenoaika | Git ja julkaisuputki | Alustavastaava |
| Muutosten epäonnistumisprosentti | Häiriöseuranta, merkitty julkaisun mukaan | Päivystysvastaava |
| Epäonnistuneen julkaisun palautumisaika | Häiriöseuranta | Päivystysvastaava |
| API:n P99-viive (SLI) | Havainnointialusta | SRE-vastaava |
| Virhebudjetin kulutus | Havainnointialusta | SRE-vastaava |

## Ei-tavoitteet

Näitä mittareita ei koskaan käytetä, yksittäin tai yhdessä, insinöörien
asettamiseen järjestykseen, kehityskeskustelujen arviointiin tai tämän tiimin
vertaamiseen toisen tiimin etenemissuunnitelmaan vertaamatta samalla
laajuutta, henkilöstöä ja järjestelmän kypsyyttä. Kaikki edellä ilmoitetun
tarkoituksen ulkopuolinen käyttö vaatii ohjelmistotuotannon johtajan ja
tiimin itsensä hyväksynnän.

## Suojakaiteet

Jokaisella yllä olevalla mittarilla, johon liittyy kannustin, on pari, joka
toimii suojakaiteena. Muutosten läpimenoaikaa seurataan yhdessä muutosten
epäonnistumisprosentin kanssa, jottei tiimi voi parantaa nopeuslukuaan
toimittamalla riskialttiimpia muutoksia. Julkaisutiheyttä seurataan yhdessä
virhebudjetin kulutuksen kanssa samasta syystä.

## Katselmointitahti

Tiimi katselmoi tämän peruskirjan joka neljännes. Mittari, joka ei ole
muuttanut yhtäkään päätöstä kahdella peräkkäisellä neljänneksellä, on
poistoehdokas.
