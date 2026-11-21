# 9.4 Mallipohjat

Kopioitavat mallipohjat toistuviin dokumentteihin. Kahden ensimmäisen
läpikäydyt, täytetyt esimerkit löytyvät [esimerkkien yleiskatsauksesta](../esimerkit/yleiskatsaus.md).

## Mittarien peruskirjan mallipohja

```markdown
# Mittarien peruskirja: [tiimin tai mittarijoukon nimi]

- **Tiimi:** [omistava tiimi]
- **Omistaja:** [nimetty henkilö tai rooli]
- **Katselmoitu:** [rytmi, esim. neljännesvuosittain]

## Tarkoitus

[Yksi tai kaksi lausetta: mitä tämä peruskirja hallitsee ja miksi.]

## Mitä seuraamme

| Mittari | Totuuden lähde | Omistaja |
| --- | --- | --- |
| [mittari] | [järjestelmä] | [nimetty omistaja] |

## Ei-tavoitteet

[Nimenomainen ilmoitus siitä, mihin näitä mittareita ei käytetä, esim.
yksilön suorituksen arviointi, tiimien keskinäinen vertailu ilman kontekstia.]

## Suojakaiteet

[Nimeä jokaiselle kannustetulle mittarille sen paritettu suojakaide ja
millaisen pelaamisen mallin se havaitsee.]

## Katselmointirytmi

[Milloin ja miten tämä peruskirja käydään uudelleen läpi; mikä laukaisee
mittarin poiston.]
```

## Mittariston määrittelyn mallipohja

```markdown
# Mittariston määrittely: [mittariston nimi]

## Yleisö

[Kenelle tämä mittaristo on tarkoitettu ja minkä päätöksen se tukee. Ilmoita
nimenomaisesti, jos sitä ei ole tarkoitettu yksilöiden arviointiin.]

## Ruudut (näyttöjärjestyksessä)

1. **[Mittarin nimi]**, [aikaikkuna], [kaaviotyyppi]. [Mahdolliset
   visualisointihuomiot: akselisäännöt, merkinnät.]
2. ...

## Visualisointisäännöt

- Akselit alkavat nollasta, ellei toisin ole ilmoitettu, ja poikkeus
  dokumentoidaan ruutuun.
- [Muut projektikohtaiset rehellisyyssäännöt.]

## Päivitysrytmi

[Kuinka usein kukin ruutu päivittyy ja mistä lähteestä.]

## Mitä tämä mittaristo jättää tarkoituksella pois

[Nimeä kaikki tarkoituksella pois jätetty ja miksi, esim. yksittäisten
henkilöiden aktiivisuuslaskurit.]
```

## Mittarikatselmuksen esityslistan mallipohja

```markdown
# Mittarikatselmus: [päivämäärä]

## Osallistujat

[Nimet ja roolit]

## Katselmoidut mittarit

Jokaisesta mittarista:
- Nykyinen lukema ja trendi
- Normaalin vaihtelun ulkopuolinen liike (aihe 1.6)
- Paritetun suojakaiteen tila, jos relevanttia
- Päätös, jota tämä lukema tukee, jos mikään

## Ehdotetut uudet mittarit

[Käy jokainen läpi uuden mittarin katselmoinnin tarkistuslistalla, aihe 9.3.]

## Poistettavaksi harkitut mittarit

[Mitkä mittarit eivät ole tukeneet päätöstä kahden viime kierroksen aikana?]

## Toimenpiteet

| Kohde | Omistaja | Määräaika |
| --- | --- | --- |
| | | |
```

## Syytön jälkikatselmuksen mallipohja

```markdown
# Jälkikatselmus: [häiriön nimi], [päivämäärä]

## Yhteenveto

[Yksi kappale: mitä tapahtui, vaikutus käyttäjiin, kesto.]

## Aikajana

- Havaitseminen: [aika, miten havaittiin]
- Kuittaus: [aika, kuka vastasi]
- Ratkaisu: [aika, mikä korjasi]

## Vakavuus

[Luokittelu dokumentoitujen kriteerien mukaan, aihe 6.2.]

## Perimmäinen syy

[Mikä salli tämän tapahtua, muotoiltuna järjestelmäkysymykseksi, ei
yksilökysymykseksi.]

## Mikä meni hyvin

[Täsmällisiä asioita, jotka toimivat vastauksessa.]

## Toimenpiteet

| Kohde | Omistaja | Määräaika |
| --- | --- | --- |
| | | |

## Seuranta

[Vahvistus siitä, että toimenpiteitä seurattiin päätökseen asti,
seuraavan katselmointikierroksen mukaan.]
```

## ROI-perustelun mallipohja

```markdown
# ROI-perustelu: [aloitteen nimi]

## Kustannus (omistamisen kokonaiskustannukset, aihe 5.5)

- Alkukustannus: [kehityskustannus]
- Jatkuva: [ylläpito, infrastruktuuri, tuki, vuodessa]
- Mahdollisuuskustannus: [mitä muuta tällä kapasiteetilla olisi voitu tehdä]

## Hyöty (dokumentoitu näyttö, aiheet 5.1–5.3)

- [Hyöty 1], todennettu lähteellä [tietolähde]
- [Hyöty 2], todennettu lähteellä [tietolähde]

## Vaihteluväli ja oletukset

- Konservatiivinen tapaus: [luku]
- Optimistinen tapaus: [luku]
- Vaihteluväliä ajava keskeinen oletus: [nimeä se]

## Huomioidut ja pois suljetut sekoittavat tekijät

[Mikä muu voisi selittää arvioidun hyödyn ja miksi se suljettiin pois tai
otettiin huomioon.]

## Valmistumisen jälkeinen tarkistus (täytä aloitteen valmistuttua)

- Todellinen tulos: [luku]
- Verrattuna arvioituun vaihteluväliin: [yläpuolella / sisällä / alapuolella]
- Mitä tämä opettaa seuraavaa arviota varten: [huomio]
```
