# 9.2 Mittarien määritelmät ja kaavojen viiteluettelo

Kirjan jokainen kaava yhdessä paikassa. Jokainen merkintä nimeää aiheen,
jossa asiaa käsitellään kokonaisuudessaan, pelaamisen riski ja suojakaide
mukaan lukien. Käytä tätä pikahakuun, älä aiheen itsensä korvikkeena.

## Flow-mittarit (osa 2)

| Mittari | Kaava | Aihe |
| --- | --- | --- |
| Flow-nopeus | Valmistuneiden flow-kohteiden määrä aikayksikköä kohden | 2.3 |
| Flow-jakauma | (Yhden flow-kohdetyypin valmistuneet kohteet) / (Valmistuneet kohteet yhteensä) x 100 % | 2.3 |
| Flow-aika | Aika flow-kohteen saapumisesta arvovirtaan sen toimitukseen | 2.4 |
| Flow-kuorma | Arvovirrassa tällä hetkellä aktiivisena tai odottavana olevien flow-kohteiden määrä | 2.4 |
| Littlen laki | Flow-kuorma (keskeneräinen työ) = Saapumisnopeus x Flow-aika (sykliaika) | 2.4, 2.7 |
| Flow-tehokkuus | Aktiivinen työaika / Kokonaiskulunut aika x 100 % | 2.5 |
| Sykliaika | Vaiheiden kestojen summa: koodaus + poiminta + katselmointi + testaus + julkaisu | 2.6 |
| Käyttöaste | Saapumisnopeus / Palvelunopeus | 2.7 |
| Täydellisten ja oikeiden osuus (%C/A) | (Alavirrassa ilman uudelleentyöstöä käyttökelpoiset yksiköt) / (Yksiköt yhteensä) x 100 % | 2.8 |
| Läpäisykelpoisuuden tulo (rolled throughput yield) | Vaiheen 1 %C/A x vaiheen 2 %C/A x ... x vaiheen N %C/A | 2.8 |
| Taktiaika | Käytettävissä oleva työaika / Asiakaskysyntä kyseisellä jaksolla | 2.8 |
| Aika ensimmäiseen katselmointiin | Aika pull requestin avaamisesta katselmoijan ensimmäiseen sisällölliseen vastaukseen | 2.9 |
| Julkaisutiheys | Onnistuneiden tuotantojulkaisujen määrä aikayksikköä kohden | 2.10 |
| Muutosten läpimenoaika | Aika ensimmäisestä commitista onnistuneeseen tuotantojulkaisuun (raportoi mediaani ja 90. persentiili) | 2.10 |
| Muutosten epäonnistumisprosentti | (Vian aiheuttaneet julkaisut) / (Julkaisut yhteensä) x 100 % | 2.10 |
| Epäonnistuneen julkaisun palautumisaika | Aika vian havaitsemisesta palvelun aitoon palautumiseen | 2.10 |

## Kehittäjäkokemus (osa 3)

| Mittari | Kaava | Aihe |
| --- | --- | --- |
| Keskittymisaika | Keskeytymättömien vähintään kahden tunnin jaksojen määrä ja kesto viikossa, kalenteridatasta | 3.6 |
| Vastausprosentti | (Saadut kyselyvastaukset) / (Lähetetyt kyselykutsut) x 100 % | 3.7 |

## Koodi ja laatu (osa 4)

| Mittari | Kaava | Aihe |
| --- | --- | --- |
| Syklomaattinen kompleksisuus | Riippumattomat polut kontrollivirrassa (kaaret − solmut + 2, McCaben mukaan) | 4.1 |
| Testikattavuus | (Testien suorittamat rivit/haarat) / (Rivit/haarat yhteensä) x 100 % | 4.2 |
| Mutaatioiden tappoprosentti | (Testisarjan tappamat mutantit) / (Tuotetut mutantit yhteensä) x 100 % | 4.2 |
| Koodin muuttuvuus | Lisätyt + muokatut + poistetut rivit tiedostoa kohden aikaikkunassa | 4.3 |
| Kuuman pisteen pistemäärä | Muuttuvuus x Monimutkaisuus, järjestettynä tiedostoittain | 4.3 |
| Velan kantokustannus | Kohteen korjaamatta jättämisen arvioitu jatkuva kustannus (hitaampi liittyvä työ, kohonnut virheriski) | 4.5 |

## Tuote ja liiketoiminta (osa 5)

| Mittari | Kaava | Aihe |
| --- | --- | --- |
| Karanneiden virheiden osuus | (Vakavuuspainotetut karanneet virheet) / (Toimitusyksikkö tai aika) | 5.1 |
| Alkuperäinen käyttöönotto | (Käyttäjät, jotka kokeilivat ominaisuutta vähintään kerran) / (Kohdeyleisö) x 100 % | 5.2 |
| Säilynyt käyttöönotto | (Käyttäjät, jotka käyttävät ominaisuutta yhä N viikon jälkeen) / (Käyttäjät, jotka alun perin kokeilivat sitä) x 100 % | 5.2 |
| Yksikkökustannus | Kokonaiskustannus (ihmiset + infrastruktuuri + työkalut) / Mielekäs yksikkö (asiakas, transaktio) | 5.4 |
| ROI | (Kokonaishyöty − omistamisen kokonaiskustannukset) / Omistamisen kokonaiskustannukset, esitettynä vaihteluvälinä | 5.5 |

## Luotettavuus, toiminta ja tietoturva (osa 6)

| Mittari | Kaava | Aihe |
| --- | --- | --- |
| Virhebudjetti | (1 − SLO-tavoite) x Aikaikkuna (esim. 0,1 % 30 päivästä ≈ 43 minuuttia) | 6.1 |
| Virhebudjetin kulutusnopeus | Kulutettu virhebudjetti / Myönnetty virhebudjetti, tietyssä ikkunassa | 6.1 |
| MTTD | Aika häiriön alkamisesta havaitsemiseen | 6.2 |
| MTTA | Aika häiriöilmoituksesta kuittaukseen | 6.2 |
| MTTR (häiriö) | Aika kuittauksesta palvelun aitoon palautumiseen | 6.2 |
| Päivystyshälytysten jakautuminen | Yksilöä kohden saadut hälytykset liukuvassa ikkunassa (ei tiimin keskiarvo) | 6.3 |
| Haavoittuvuuden korjausaika | Aika löytämisestä aitoon korjaukseen, seurattuna vakavuuden mukaan | 6.4 |

## Huomioita kaavojen käytöstä

- **Parita aina nopeus- tai tuotoskaava sen suojakaiteen kanssa** (aihe
  1.2): muutosten epäonnistumisprosentti julkaisutiheyden ja läpimenoajan
  kanssa, karanneiden virheiden osuus toimitusnopeuden kanssa ja
  virhebudjetin kulutus julkaisuaktiivisuuden kanssa.
- **Käytä aikapohjaisissa kaavoissa mediaaneja ja persentiilejä, ei
  keskiarvoja** (aihe 1.6), ellei kaava nimenomaisesti vaadi keskiarvoa.
- **Jokainen kaava tarvitsee dokumentoidun lähdejärjestelmän ja
  keruutavan** (aihe 1.5) matemaattisen määritelmänsä rinnalle. Kaksi
  tiimiä, jotka laskevat saman kaavan eri lähteistä, eivät tuota vertailukelpoisia
  lukuja.
- **Vakavuuspainotusta ei ole esitetty nimenomaisesti jokaisessa yllä
  olevassa kaavassa**, mutta se pätee aina, kun esiintyy "vakavuuspainotettu".
  Katso täydellinen luokittelumalli asianomaisesta aiheesta.
