# Johdanto

Tämä kirja on käytännön opas [ohjelmistotuotannon](https://en.wikipedia.org/wiki/Software_engineering)
mittaamiseen hyvin, viiden hengen startupista tuhansien insinöörien suuryritykseen
tai lakisääteistä suorituskykyviitekehystä vastaan raportoivaan viranomaiseen.
Se on olemassa, koska useimmat mittarineuvot ovat joko viitekehyksen tiivistelmä
ilman toiminnan yksityiskohtia tai työkalutoimittajan ominaisuusluettelo. Tämä
kirja yrittää olla kumpaakaan: se on jyrkkä siitä, mitä kannattaa mitata, suora
siitä, miten kutakin mittaria pelataan, ja käytännöllinen siinä, miten pidät
mittariohjelmaa, johon tiimi luottaa eikä pelkää.

## Kenelle tämä on tarkoitettu

Ensisijainen lukija on se, joka päättää, mitä organisaatio mittaa:
ohjelmistotuotannon johtajat, staff- ja principal-tason insinöörit, alusta- ja
DevOps-tiimit sekä ohjelma- ja tuotepäälliköt. Toissijainen lukija on jokainen
kehittäjä, joka haluaa ymmärtää mittariston takana olevan ajattelun, kun häntä
pyydetään liikuttamaan lukua, ja tietää, miten haastaa mittari, joka ei enää
palvele tarkoitustaan. Kirjaa ei tarvitse lukea kannesta kanteen. Jokainen
aihe on itsenäinen, esittää periaatteensa ensin ja päättyy käytännön oppeihin,
kypsyysmalliin ja lähteisiin.

## Kirjan rakenne

Kirja jakautuu **osiin** (kokonaisluvut) ja **aiheisiin** (desimaaliluvut).
Aihe **N.0** johdattaa kuhunkin osaan ja selittää, miten sen aiheet liittyvät
toisiinsa. Aiheet **N.1, N.2, …** käsittelevät asiat syvällisesti.

- **Osa 1, Mittaamisen perusteet:** miksi mitata lainkaan, Goodhartin laki ja
  pelaamisen psykologia, tulokset tuotosten edellä, hallinta ja omistajuus,
  tietolähteet sekä tilastollinen lukutaito, jota jokainen mittariohjelma
  tarvitsee.
- **Osa 2, Virtausmittarit:** Flow Framework, sen flow-kohteet ja viisi
  flow-mittaria, sykliaika, jonoteoria, perinteiset Lean-arvovirran mittarit,
  pull requestien ja koodikatselmoinnin mittarit sekä DORA-viitekehys
  viiteaiheena.
- **Osa 3, Kehittäjäkokemus ja SPACE-viitekehys:** SPACE-viitekehys ja sen viisi
  ulottuvuutta sekä se, miten kehittäjäkokemuskysely tehdään niin, ettei siitä
  tule suosiokilpailua.
- **Osa 4, Koodin ja laadun mittarit:** monimutkaisuus, testikattavuus ja
  -tehokkuus, muuttuvuus ja kuumat pisteet, staattinen analyysi, tekninen velka
  ja dokumentaatio.
- **Osa 5, Tuote- ja liiketoimintamittarit:** karanneet virheet,
  ominaisuuksien käyttöönotto, asiakas- ja liiketoimintatulokset,
  yksikkötaloudellisuus ja sijoitetun pääoman tuotto.
- **Osa 6, Luotettavuuden, käytön ja tietoturvan mittarit:** palvelutasoindikaattorit,
  -tavoitteet ja virhebudjetit, häiriömittarit, päivystys ja kapasiteetti sekä
  tietoturva- ja haavoittuvuusmittarit.
- **Osa 7, Mittarit tekoälyn aikakaudella:** generatiivisen tekoälyn
  paradigmanmuutos, tekoälyavusteisen kehityksen mittaaminen, mittarien
  inflaation riski ja se, miksi tulostelemetriasta tulee pohjantähti, kun
  tuotos halpenee.
- **Osa 8, Mittariohjelman rakentaminen:** mittariston suunnittelu, rakenna vai
  osta, käyttöönotto pelkoa herättämättä, kypsyysmalli ja vaiheittainen
  käyttöönottosuunnitelma.
- **Osa 9, Liitteet:** sanasto, mittarien määritelmien ja kaavojen
  viiteluettelo, tarkistuslistat, mallipohjat, kypsyyden itsearviointi, lähteet
  ja hakemisto.

## Ohjaavat periaatteet

Kirjan selkärankana on kahdeksan periaatetta:

1. **Mittari, josta tulee tavoite, lakkaa olemasta hyvä mittari.** Suunnittele
   Goodhartin lakia vastaan alusta asti, älä vasta vääristymän ilmestyttyä.
2. **Tulokset ennen tuotoksia ja tuotokset ennen aktiivisuutta.** Paina jokaista
   mittarijoukkoa sen suuntaan, mikä muuttui asiakkaalle tai liiketoiminnalle,
   ei sen suuntaan, mitä tiimi tuotti tai kuinka kiireinen se oli.
3. **Jokainen kannustava mittari tarvitsee suojakaiteen.** Yhdistä nopeus
   laatuun ja läpivirtaus vakauteen äläkä jahtaa yhtä lukua erillään muista.
4. **Mittaa järjestelmiä, älä ihmisiä.** Mittari, joka yksilöi syyllisen,
   rikkoo luottamuksen ja kutsuu pelaamaan. Mittari, joka paljastaa järjestelmän
   pullonkaulan, kutsuu parantamaan.
5. **Suosi instrumentointia itseraportoinnin edellä, kun sitä on saatavilla, ja
   itseraportointia, kun ei ole.** Julkaisumäärät tulevat putkesta,
   tyytyväisyys tulee kysymällä.
6. **Mittarin on ansaittava paikkansa tai se poistetaan.** Jokainen mittariston
   ruutu maksaa huomiota. Karsi harkiten.
7. **Määritelmät painavat enemmän kuin mittaristot.** Kaksi tiimiä, jotka
   laskevat "läpimenoajan" eri tavalla, käyttävät enemmän aikaa luvusta
   kiistelyyn kuin sen mukaan toimimiseen.
8. **Generatiivinen tekoäly on syy tarkastella uudelleen, ei vain asettaa
   lähtötaso uudelleen.** Kun tuotos halpenee, tuotosmäärän ympärille
   rakennetut mittarit tarvitsevat uusia suojakaiteita, eivät vain uusia
   tavoitteita.

## Läpileikkaavat teemat

[Goodhartin laki](https://en.wikipedia.org/wiki/Goodhart%27s_law) on se yksi
teema, joka kulkee kirjan jokaisen osan läpi, ei vain aiheessa 1.2. Jokainen
mittariperheen aihe kertoo, miten sen käsittelemää mittaria pelataan ja mikä
suojakaide sen pysäyttää. Julkishallinnon ja suuryritysten raportointivelvoitteet,
joissa mittarilla voi olla lakisääteinen tai sopimuksellinen paino, käsitellään
koko kirjan läpi suunnittelun lähtökohtina, ei yhteen aiheeseen rajattuna
jälkikäteisenä lisänä.

## Näin käytät kirjaa

Ota käyttöön vaiheittain. Älä pudota mittaristoa kerralla tiimille, jolla ei ole
koskaan ollut sellaista. Aloita sieltä, missä vaiva on suurin, paikanna itsesi
rehellisesti kunkin aiheen kypsyysmallilla ja anna käyttöönottosuunnitelman
(aihe 8.5) järjestää työ. Tavoitteena ei ole kaaviomuuri. Tavoitteena on
organisaatio, joka osaa todistaa, toimiiko se, mitä se tekee, ja joka luottaa
omiin lukuihinsa niin paljon, että uskaltaa toimia niiden mukaan.
