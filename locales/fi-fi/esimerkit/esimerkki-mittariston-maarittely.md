# Esimerkki: toimitusmittariston määrittely

Läpikäyty mittariston määrittely
[aiheen 8.1, Ohjelmistotuotannon mittariston suunnittelu](../aiheet/08-01-ohjelmistotuotannon-mittariston-suunnittelu.md)
mukaan. Olennaista on muoto: nimetty yleisö, pieni määrä ruutuja, rehellinen
visualisointistandardi ja ilmoitettu päivitystahti.

## Yleisö

Ohjelmistotuotannon johto ja alustatiimi, joka käy mittariston läpi
kahden viikon välein pidettävässä toimituskatselmuksessa. Ei tarkoitettu
yksilön suorituksen arviointiin.

## Ruudut (näyttöjärjestyksessä)

1. **Julkaisutiheys**, viimeiset 4 viikkoa, tiimeittäin. Viivakaavio,
   viikoittaiset jaksot, akseli alkaa nollasta.
2. **Muutosten läpimenoaika**, mediaani ja 90. persentiili, viimeiset 4 viikkoa.
   Pylväskaavio, jossa molemmat sarjat näkyvät, ei pelkkä mediaani.
3. **Muutosten epäonnistumisprosentti**, viimeiset 4 viikkoa, ruudusta
   linkki tiimin sopimaan "epäonnistumisen" määritelmään.
4. **Epäonnistuneen julkaisun palautumisaika**, mediaani, viimeiset 4 viikkoa.
5. **Jäljellä oleva virhebudjetti**, kuluva neljännes, palveluittain, prosentteina.

## Visualisointisäännöt

- Jokainen trendikaavio näyttää vähintään kahdeksan datapistettä, ei koskaan
  yksittäistä tilannekuvaa.
- Akselit alkavat nollasta, ellei poikkeusta ole dokumentoitu ruudulle.
- Julkaisut, häiriöt ja vapaapäivät merkitään aikajanalle, jotta lukija
  erottaa todellisen muutoksen kohinasta.
- Ei kaksoisakseleita, ei kolmiulotteisia tehosteita, ei poimittuja aikavälejä.

## Päivitystahti

Putkesta tulevat ruudut (julkaisutiheys, läpimenoaika) päivittyvät tunneittain.
Häiriöistä tulevat ruudut (muutosten epäonnistumisprosentti, palautumisaika)
päivittyvät jälkikatselmuksen sulkeutuessa. Mittaristo ilmoittaa itse
viimeisimmän päivityksensä ajan.

## Mitä tämä mittaristo jättää tarkoituksella pois

Yksittäisten kehittäjien commit-määrät ja pull request -määrät sekä koodirivit.
Ne ovat aktiivisuusmittareita, joita on dokumentoidusti pelattu ja jotka mittaavat
ponnistelua eivätkä tulosta (aihe 3.4).
