# 6.0 Johdanto osaan 6: Luotettavuuden, käytön ja tietoturvan mittarit

Osa 2 käsitteli sitä, miten muutos pääsee commitista tuotantoon. Tämä osa
käsittelee sitä, mitä tapahtuu, kun muutos on siellä käynnissä, jatkuvasti,
todellisissa olosuhteissa, joita tiimi ei voi täysin hallita.
Luotettavuuden, käytön ja tietoturvan mittarit ovat paikka, jossa
ohjelmistotuotannon lupaukset kohtaavat pitkäkestoisen todellisuuden. Kysymys
ei ole "onnistuiko tämä julkaisu" vaan "pysyykö järjestelmä toiminnassa yöstä
toiseen, kuormituksessa, hyökkäyksen alla ja päivystysvuoron rasituksessa,
jonka on oltava kestävä vuosia, ei vain seuraavan häiriön ajan".

Osan neljä aihetta noudattavat harkittua kaarta. Palvelutasoindikaattorit ja
-tavoitteet (aihe 6.1) luovat sanaston ja tavoitteenasetannan kurin, johon
kaikki muu tässä osassa nojaa. Häiriömittarit (aihe 6.2) mittaavat, mitä
tapahtuu, kun tavoite ohitetaan. Päivystys- ja kapasiteettimittarit (aihe
6.3) mittaavat inhimillisen ja infrastruktuurisen hinnan, joka tavoitteessa
pysymisestä maksetaan. Tietoturva- ja haavoittuvuusmittarit (aihe 6.4)
laajentavat saman luotettavuuskurin erilliseen mutta läheisesti liittyvään
riskiin: ei "pettääkö tämä itsestään" vaan "saako joku tämän pettämään
tarkoituksella". Kaikki neljä aihetta jakavat kirjan keskeisen kurin: nimeä
mittari, nimeä sen pelaamisen tapa ja yhdistä siihen suojakaide, joka
pelaamisen havaitsee.

Suurille tiimeille tämän osan mittarit ovat paikka, jossa ohjelmistotuotannon
lupauksista tulee sopimuksellisia ja julkishallinnon yhteydessä joskus
lakisääteisiä. Suuryritykset kirjoittavat palvelutasosopimuksia aiheessa 6.1
esiteltyjä mittareita vastaan, ja niiden ohittamisesta seuraa todellisia
taloudellisia seuraamuksia. Julkishallinnon organisaatiot pyörittävät
kriittistä julkista infrastruktuuria, jossa luotettavuuden tai tietoturvan
pettäminen vaikuttaa paljon yksittäisen yrityksen taseen ulkopuolelle. Tämä
osa suhtautuu tähän painoon vakavasti alusta loppuun.

## Aiheet tässä osassa

- **6.1 Palvelutasoindikaattorit, -tavoitteet ja virhebudjetit:** Sanasto ja
  tavoitteenasetannan kuri, jonka varassa koko sivustojen luotettavuustekniikka
  (SRE) on, ja miten virhebudjetti tekee luotettavuudesta käytettävän,
  hallittavan resurssin saavuttamattoman absoluutin sijaan.
- **6.2 Häiriömittarit: havaitseminen, reagointi ja palautuminen:**
  Sen mittaaminen, kuinka nopeasti organisaatio huomaa vian, reagoi siihen ja
  ratkaisee sen, sekä syyllistämätön kuri, joka pitää mittauksen rehellisenä.
- **6.3 Päivystyksen, kapasiteetin ja käyttökuorman mittarit:** Luotettavuuden
  ylläpidon inhimillinen ja infrastruktuurinen hinta, ja miksi kestämätön
  päivystystaakka alkaa lopulta näkyä itse luotettavuusongelmana.
- **6.4 Tietoturvan ja haavoittuvuuksien hallinnan mittarit:** Saman
  kurinalaisen, suojakaiteilla varustetun lähestymistavan laajentaminen
  tietoturvariskiin, haavoittuvuuksien löytämisestä niiden korjaamiseen.

## Miten nämä aiheet liittyvät toisiinsa

Aihe 6.1 luo perustan, jolle kaikki tämän osan myöhemmät aiheet rakentuvat:
ilman selkeää palvelutasotavoitetta kysymyksellä "kuinka paha tämä häiriö
oli" (aihe 6.2) ja "onko päivystyskuormamme kestävä" (aihe 6.3) ei ole
yhteistä vertailukohtaa. Aiheen 6.2 häiriömittarit ovat aidosti aiheen 6.1
esittelemän virhebudjetin kulutuksen kirjanpito. Aihe 6.3 mittaa sen
ihmisjärjestelmän kestävyyttä, joka vastaa kulutuksen pitämisestä
budjetissa, ja aihe 6.4 soveltaa samaa tavoite- ja budjettiajattelua
tietoturvatasoon, joka mittaamatta jätettynä saa yleensä huomiota vain
reaktiivisesti, häiriön jälkeen, eikä ennakoivasti.

Tämä osa liittyy suoraan takaisin osaan 2: DORAn muutosten
epäonnistumisprosentti ja epäonnistuneen julkaisun palautumisaika (molemmat
käsitelty aiheessa 2.10) ovat vastaavasti ennakoiva indikaattori tämän osan
häiriömittareille ja esimerkki niistä. Osa liittyy myös eteenpäin osaan 8,
jossa mittaristo- ja ohjelman kypsyysohjeistus nojaa vahvasti tämän osan
virhebudjettimalliin käytännön esimerkkinä siitä, miten abstrakti tavoite
(luotettavuus, tietoturva) muutetaan konkreettiseksi, seurattavaksi,
ei-absoluuttiseksi tavoitteeksi, jota tiimi voi todella hallita päivittäin.
