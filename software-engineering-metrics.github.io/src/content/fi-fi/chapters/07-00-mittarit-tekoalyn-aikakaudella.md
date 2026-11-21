# 7.0 Johdanto osaan 7: Mittarit tekoälyn aikakaudella

Jokainen tämän kirjan tähänastinen mittari rakennettiin maailmaan, jossa
koodin kirjoittaminen oli niukka ja vaivalloinen resurssi. Generatiivisen
tekoälyn (AI) työkalut ovat muuttaneet tuon lähtökohdan nopeammin kuin useimpien
organisaatioiden mittarit ovat ehtineet perässä. Kun työkalu tuottaa
uskottavan näköisen pull requestin sekunneissa, useat aiemmissa osissa
käsitellyt mittarit lakkaavat mittaamasta sitä, mitä ne ennen mittasivat.
Selvimmin näin käy aktiivisuuslaskureille (aihe 3.4), mutta jossain määrin
myös raa'alle julkaisutiheydelle (aihe 2.10) ja jopa testikattavuudelle
(aihe 4.2), jos niitä tavoitellaan huolimattomasti. Tämä osa on olemassa,
koska mittariohjelma, joka ei ota tätä muutosta suoraan huomioon, raportoi
itsevarmasti lukuja, jotka ovat huomaamatta menettäneet merkityksensä tai
joista on pahimmillaan tullut suorastaan haitallisia.

Osan neljä aihetta muodostavat harkitun kaaren. Aihe 7.1 nimeää muutoksen
suoraan ja selittää, miksi se on paradigmanmuutos eikä vähittäinen
säätö. Aihe 7.2 käsittelee, miten tekoälyavusteisen kehityksen hyöty
mitataan oikeasti, soveltaen aiheessa 1.3 kirjan alussa esiteltyä periaatetta
tulokset ennen tuotoksia. Aihe 7.3 nimeää muutoksen tuomat uudet riskit:
mittarit, jotka paisuvat ilman vastaavaa arvoa, ja laadun laimeneminen, joka
etenee nopeammin kuin alan nykyinen kyky havaita sitä. Aihe 7.4 päättää osan
kirjan vastauksella koko muutokseen: harkittuun siirtymään kohti
tulostelemetriaa tärkeimpinä mittareina, juuri siksi että tuotosten määrä oli
tämän osan väitteen mukaan alun perinkin väärä optimoinnin kohde, ja
generatiivinen tekoäly on vain tehnyt tästä totuudesta mahdottoman sivuuttaa.

Suurille tiimeille tämä osa on kiireellinen, ei spekulatiivinen. Suuryritysten,
jotka ottavat tekoälyn koodausassistentteja käyttöön laajasti, on pian
tiedettävä, tarkoittavatko niiden nykyiset mittarit vielä sitä, mitä ne
luulevat. Julkishallinto etenee tekoälyn käyttöönotossa usein varovaisemmin,
mutta se kohtaa saman työkalumuutoksen alalla, josta se rekrytoi ja johon se
vertaa itseään. Se tarvitsee tämän osan ohjeita, jotta se tulkitsee
alan vertailuarvoja oikein, kun nekin muuttuvat saman paineen alla.

## Aiheet tässä osassa

- **7.1 Generatiivisen tekoälyn paradigmanmuutos:** Miksi kyse on perustavasta
  muutoksesta siihen, mitä useat nykyiset mittarit mittaavat, eikä pelkästä
  uudesta työkalusta työkalupakkiin.
- **7.2 Tekoälyavusteisen ohjelmistokehityksen mittaaminen:** Miten mitataan,
  auttaako tekoälyavustus oikeasti, käyttäen tulosdataa tuotosten määrän
  sijaan.
- **7.3 Mittarien inflaatio ja laadun laimenemisen riskit:** Muutoksen tuomat
  uudet pelaamisen ja laadun riskit ja miten niiltä suojaudutaan.
- **7.4 Tulostelemetria uutena pohjantähtenä:** Kirjan vastaus koko
  muutokseen: harkittu ja pysyvä siirtymä kohti tulosmittareita, kun tuotos
  halpenee.

## Miten nämä aiheet liittyvät toisiinsa

Aihe 7.1 perustelee, miksi tämä osa on ylipäätään olemassa. Aihe 7.2 antaa
muutoksen vaatiman käytännön mittausohjeistuksen. Aihe 7.3 nimeää
epäonnistumisen tavat, joilta organisaation on suojauduttava ottaessaan
tekoälyavusteisen kehityksen käyttöön. Aihe 7.4 yleistää opin pysyväksi
periaatteeksi, joka kestää minkä tahansa yksittäisen työkalun tai toimittajan.
Tämä osa on vähemmän erillinen mittariperhe, sellaisena kuin osat 2–6 kukin
käsittelevät oman alueensa, ja enemmän linssi, jota käytetään koko kirjaan:
jokaisen aiemman aiheen aktiivisuus-, tuotos- ja jopa osa tulosmittareista on
tarkasteltava uudelleen tämän osan kysymysten kautta, kun
tekoälyavusteisesta kehityksestä tulee vakiokäytäntö eikä poikkeus.

Osa kytkeytyy tiukimmin aiheen 1.3 periaatteeseen tulokset ennen tuotoksia ja
aiheen 3.4 varoitukseen aktiivisuusmittareista. Tämä osa pitää molempia
alusta asti oikeina, ja teknologiamurros osoittaa ne nyt kiireellisesti
oikeiksi: se tekee niiden vastakohdasta, määrällä mittaamisesta, suorastaan
vaarallista eikä vain epäoptimaalista. Osa myös valmistelee osan 8
käytännön ohjeita mittariohjelman rakentamiseen, sillä ennen tätä muutosta
suunniteltu mittaristo on harkittava uudelleen, ei vain säädettävä
vähän.
