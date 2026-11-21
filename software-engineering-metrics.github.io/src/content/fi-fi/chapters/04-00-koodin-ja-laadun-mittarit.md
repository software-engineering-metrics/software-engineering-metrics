# 4.0 Johdanto osaan 4: Koodin ja laadun mittarit

Osat 2 ja 3 mittasivat, miten työ liikkuu ja miten sen tuottavat ihmiset voivat. Tämä osa kääntyy itse artefaktin puoleen: koodiin ja siihen, mitä mittari voi ja ei voi kertoa sen laadusta. Koodin laadun mittareilla on kirjan mittariperheistä pisin historia, syklomaattinen kompleksisuus on vuodelta 1976, ja sen mukana pisin väärinkäytön historia. Tämä osa kohtelee tuota historiaa vakavasti: jokainen aihe nimeää aidosti hyödyllisen signaalin ja sen rinnalle täsmällisen, hyvin dokumentoidun tavan, jolla signaalia pelataan, kun siitä tulee tavoite.

Näitä kuutta aihetta yhdistävä punainen lanka on, ettei mikään yksittäinen koodimittari kuvaa laatua yksinään, ja useat suosituimmista harhauttavat aktiivisesti, kun niitä tavoitellaan erillään. Korkea testikattavuusprosentti voi esiintyä yhdessä testien kanssa, jotka eivät varmista mitään merkityksellistä. Matala monimutkaisuuspiste voi esiintyä yhdessä koodin kanssa, joka on teknisesti yksinkertaista mutta käsitteellisesti epäjohdonmukaista. Tämän osan aiheet yhdistävät kukin päämittarinsa täydentävään tarkistukseen, joka havaitsee sen erityisen sokean pisteen: monimutkaisuus ylläpidettävyyskontekstiin, kattavuus mutaatiotestaukseen, muuttuvuus kuumien pisteiden analyysiin, staattinen analyysi ihmisen harkintaan ja tekninen velka priorisoituun korjaamiseen jatkuvasti kasvavan, rakastamattoman jonon sijaan.

Suurille tiimeille koodin ja laadun mittarit tekevät mahdolliseksi hallita koodikantaa, joka on liian suuri yhden ihmisen pidettäväksi päässään. Viiden hengen tiimi voi luottaa yhteiseen hiljaiseen tietoon siitä, mitkä järjestelmän osat ovat hauraita. Viidensadan insinöörin organisaatio, joka kattaa kymmeniä palveluita, tarvitsee instrumentoituja signaaleja löytääkseen tuon haurauden järjestelmällisesti. Suuryritykset ja julkishallinto, joiden koodikannat mitataan usein vuosikymmenissä, eivät vuosissa, nojaavat tämän osan mittareihin priorisoidessaan, mihin rajallinen ylläpitoinvestointi tekee eniten hyvää.

## Aiheet tässä osassa

- **4.1 Koodin monimutkaisuusmittarit:** Syklomaattinen kompleksisuus ja sen sukulaiset, mitä ne todella ennustavat ja niiden hyvin dokumentoitu pelaamisriski.
- **4.2 Testikattavuus ja testien tehokkuus:** Miksi pelkkä kattavuusprosentti kertoo vähemmän kuin miltä se näyttää ja miten mutaatiotestaus kuroo aukon umpeen.
- **4.3 Koodin muuttuvuus ja kuumien pisteiden analyysi:** Sen pienen, tarkasti rajatun osan löytäminen koodikannasta, joka vastaa suhteettoman suuresta osasta virheitä ja ylläpitokustannuksia.
- **4.4 Staattinen analyysi ja koodihajujen mittarit:** Automaattiset koodin laadun signaalit, niiden todellinen arvo ja niiden rajat ihmisen harkintaa vastaan.
- **4.5 Teknisen velan mittaaminen:** Näkymättömän, epävirallisesti keskustellun vastuun muuttaminen näkyväksi, priorisoiduksi, hallittavaksi salkuksi.
- **4.6 Dokumentaation ja tiedon mittarit:** Sen mittaaminen, auttaako dokumentaatio todella, ei vain sen, onko sitä olemassa.

## Miten nämä aiheet liittyvät toisiinsa

Nämä kuusi aihetta rakentuvat koodin pienimmästä yksiköstä ulospäin. Aihe 4.1 aloittaa yksittäisen funktion tai metodin tasolta. Aihe 4.2 kysyy, varmistavatko testit todella tuon yksikön käyttäytymisen. Aihe 4.3 zoomaa ulos löytääkseen, mitkä tiedostot ja moduulit koko koodikannassa ansaitsevat huomiota ensin. Aihe 4.4 lisää automaattisen työkalukerroksen, joka skannaa kaiken jatkuvasti. Aihe 4.5 muuttaa kaikkien neljän kertyneet havainnot hallituksi, priorisoiduksi jonoksi hajanaisen, käsittelemättömän huolen sijaan. Aihe 4.6 päättää osan mittaamalla, onko tieto, jota kaiken tämän turvallinen ylläpito vaatii, todella dokumentoitu ja löydettävissä.

Tämä osa kytkeytyy suoraan takaisin osan 2 vakausmittareihin: muutosten epäonnistumisprosentti (aihe 2.10) on suurelta osin tämän osan ylävirrassa mittaaman koodin laadun alavirran seuraus. Se kytkeytyy myös eteenpäin osan 5 tuotemittareihin, koska karanneet virheet (aihe 5.1) voi usein jäljittää täsmälleen niihin monimutkaisuuden kuumiin pisteisiin ja kattavuusaukkoihin, jotka tämä osa on rakennettu tuomaan esiin ennen kuin ne ylipäätään pääsevät tuotantoon.
