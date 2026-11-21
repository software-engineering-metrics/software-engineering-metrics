# 5.5 Sijoitetun pääoman tuotto ohjelmistotuotannon hankkeissa

## Yleiskatsaus ja perustelut

Tämä aihe päättää osan 5 kokoamalla yhteen kaiken, mitä edelliset neljä
aihetta mittasivat, laadun, käyttöönoton, tulokset ja kustannukset,
yhdeksi taloudelliseksi kehykseksi, joka lopulta ohjaa useimpia merkittäviä
ohjelmistotuotannon investointipäätöksiä: **[sijoitetun pääoman
tuotto](https://en.wikipedia.org/wiki/Return_on_investment) (ROI)**. Päättipä
organisaatio rahoittaa alustan modernisoinnin, laajan refaktorointihankkeen
tai uuden tuotelinjan, jonkun on lopulta vastattava kysymykseen taloudellisin
termein: onko tämä sen hinnan arvoista. Tämä aihe käsittelee sitä, miten
kysymykseen vastataan rehellisesti kirjan jo rakentamilla mittareilla, sen
sijaan että kysymystä vältettäisiin (mikä luovuttaa vaikutusvallan
investointipäätöksiin ihmisille, jotka osaavat vastata siihen huonommin) tai
vastattaisiin paisutetulla, kestämättömällä perustelulla, joka vahingoittaa
uskottavuutta, kun se ei pidä.

Aiheen suosittelema kuri nojaa suoraan aiheen 5.4 yksikkötaloudellisuuteen
kustannuspuolella ja aiheen 5.3 tulosmittareihin, rehellisine
kohdistamisen epävarmuuden käsittelyineen, hyötypuolella. Näin rakennettu
ROI-perustelu on väistämättä vaatimattomampi ja varovaisempi kuin
yksinkertainen, houkutteleva otsikkoluku, mutta sillä on ratkaiseva etu,
jota tämä kirja on korostanut alusta asti: se kestää tarkastelun. Organisaatio,
joka rakentaa johdonmukaisesti puolustettavia ROI-perusteluja, ansaitsee
enemmän luottamusta, ja siksi enemmän autonomiaa, tulevissa
investointipäätöksissä kuin sellainen, joka silloin tällöin lupaa liikaa.

Suurille tiimeille ROI-kuri erottaa strategisena kumppanina kohdellun
ohjelmistotuotanto-organisaation kustannuspaikasta, jonka kulutus siedetään
sen sijaan että siihen aktiivisesti investoitaisiin. Suuryritykset käyttävät
tarkkoja ROI-perusteluja kilpaillakseen menestyksekkäästi pääomasta muita
liiketoimintainvestointeja vastaan. Julkishallinnon organisaatiot käyttävät
vastaavaa kuria, usein kustannus-hyötyanalyysiksi uudelleenkehystettynä,
varmistaakseen ja ylläpitääkseen julkista teknologiarahoitusta poliittisessa
ja budjettipaineessa, jolla on vähän kärsivällisyyttä epämääräisille,
perustelemattomille lupauksille.

## Keskeiset periaatteet

- **Rehellinen ROI-perustelu rakennetaan tämän kirjan muista mittareista**,
  ei keksitä erikseen: kustannus aiheesta 5.4, hyöty aiheista 5.1–5.3.
- **Omistamisen kokonaiskustannukset, ei vain alkukustannus, kuuluvat
  kustannuspuolelle.** Jatkuva ylläpito, tuki ja infrastruktuurikustannus
  kertautuvat järjestelmän elinkaaren aikana.
- **Hyötyarvioihin liittyy epävarmuutta. Ilmaise se nimenomaisesti** sen
  sijaan että esittäisit yhden, valheellisen tarkan luvun.
- **Negatiivinen tai marginaalinen ROI-löydös on oikeutettu, hyödyllinen
  tulos.** Kuri on olemassa informoimaan päätöksiä rehellisesti, ei
  perustelemaan jo tehtyjä päätöksiä.
- **Seuraa toteutunutta ROI:ta jälkikäteen, ei vain ennakolta esitettyä
  perustelua.** Ennuste, jota ei koskaan tarkisteta todellisuutta vasten, ei
  opeta organisaatiolle mitään.

## Suositukset

### Rakenna kustannuspuoli omistamisen kokonaiskustannuksista, ei vain alkuinvestoinnista

Sisällytä mukaan paitsi alkuperäinen kehityskustannus myös koko
**[omistamisen kokonaiskustannus](https://en.wikipedia.org/wiki/Total_cost_of_ownership)
(TCO)**: jatkuva ylläpito, infrastruktuuri (aiheen 5.4 yksikkötaloudellisuus
on tässä suoraan hyödyllinen), tuki ja hankkeen kuluttaman
ohjelmistotuotantokapasiteetin vaihtoehtoiskustannus, jonka olisi voinut
suunnata vaihtoehtoiseen työhön. Pelkän alkukustannuksen perusteella
halvalta näyttävä hanke voi olla kallis koko elinkaarensa aikana, kun jatkuva
ylläpitotaakka otetaan rehellisesti huomioon.

### Rakenna hyötypuoli dokumentoidusta, rehellisestä tulosnäytöstä

Johda hyötyarviot aiheiden 5.1–5.3 tulosmittauskurista: laadun parannukset
muunnettuna vähentyneiksi häiriö- ja tukikustannuksiksi, käyttöönottodata
käyttövetoiseksi arvoksi ja liiketoimintatulosten korrelaatiot rakennettuna
aiheen 5.3 rehellisellä, sekoittavat tekijät tarkistavalla syysuhdeketjulla.
Vältä hyötyarvion keksimistä perusperiaatteista tai optimistisesta
oletuksesta, kun sen pohjaksi on saatavilla todellista mitattua tai
vertailukelpoista historiadataa.

### Ilmaise epävarmuus nimenomaisesti, käyttäen vaihteluväliä yhden luvun sijaan

Esitä ROI-arviot vaihteluvälinä (varovainen ja optimistinen skenaario)
yhden, valheellisen tarkan luvun sijaan ja selitä, mikä väliä ajaa: mikä
tietty oletus, jos se osoittautuu optimistiseksi tai pessimistiseksi,
siirtäisi tulosta eniten. Tämä peilaa suoraan aiheen 1.6 tilastollisen
lukutaidon periaatetta sovellettuna taloudelliseen ennusteeseen, ja se suojaa
perustelun uskottavuutta, koska yksittäinen pisteennuste, joka osoittautuu
vääräksi, vahingoittaa luottamusta paljon enemmän kuin hyvin selitetty väli,
jonka sisään todellinen tulos osuu.

### Kohtele negatiivista tai marginaalista löydöstä oikeutettuna tuloksena

Rakenna ROI-analyysiprosessisi niin, että se todella kykenee päätymään
johtopäätökseen "tämä ei ole sen arvoista", ja kohtele tuota johtopäätöstä,
kun näyttö sitä tukee, arvokkaana tuloksena eikä analyysin epäonnistumisena.
Organisaatio, joka tunnetaan siitä, että se tuottaa aina vain positiivisia
ROI-perusteluja hankkeesta riippumatta, menettää nopeasti uskottavuutensa,
koska sidosryhmät päättelevät oikein, ettei analyysi ole todellisuudessa
riippumaton päätöksestä, jota sen on tarkoitus informoida.

### Seuraa toteutuneita tuloksia ennustettua perustelua vasten ja sulje kehä julkisesti

Kun hanke on valmistunut tai saavuttanut merkittävän välitavoitteen, vertaa
toteutuneita mitattuja tuloksia alkuperäiseen ennustettuun väliin ja julkaise
vertailu, myös siinä, missä ennuste meni väärin. Tämä kehän sulkemisen kuri,
samankaltainen kuin aiheen 3.7 suositus kyselyjen jatkotoimista, rakentaa
organisaation pitkän aikavälin ROI-ennustamisen uskottavuutta ja parantaa
tulevien arvioiden tarkkuutta luomalla todellisen, näkyvän
palautesilmukan.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Yksinkertainen, yhden luvun ROI-väite | Vakuuttava, helppo viestiä | Valheellisen tarkka, altis erehtymään ja vahingoittamaan uskottavuutta |
| Vaihteluvälipohjainen ROI ilmaistulla epävarmuudella | Puolustettavissa, kestää tarkastelun, rehellinen siitä, mikä väliä ajaa | Monimutkaisempi esittää, vaatii enemmän analyyttistä työtä |
| Pelkkä alkukustannusanalyysi | Yksinkertainen, nopea tuottaa | Aliarvioi todellisen kustannuksen jättämällä pois jatkuvan ylläpidon ja tuen taakan |
| Täysi omistamisen kokonaiskustannusten analyysi | Tarkka, täydellinen kuva todellisesta investointikustannuksesta | Vaatii enemmän datan keruuta, erityisesti jatkuvan kustannuksen ennustamiseen |

Keskeinen jännite on **vakuuttava yksinkertaisuus versus puolustettavissa
oleva rehellisyys**, sama jännite, jonka aihe 5.3 nimesi tulosväitteille
yleisesti, nyt sovellettuna erityisesti taloudelliseen perusteluun.
Yksinkertainen, varma yhden luvun ROI-väite on päättäjälle helpompi myydä
hetkessä, mutta rehellinen, vaihteluvälipohjainen perustelu nimenomaisine
epävarmuuksineen ja täydellä omistamisen kokonaiskustannusten laskennalla on
se, joka todella kestää investoinnin koko eliniän ja suojaa organisaation
uskottavuutta seuraavaa perustelua varten.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Huomioimmeko viimeisimmässä suuressa ohjelmistotuotannon
   investointiperustelussamme omistamisen kokonaiskustannukset vai vain
   alkuperäisen kehityskustannuksen?** Palaa alkuperäiseen perusteluun ja
   tarkista, sisältyivätkö jatkuva ylläpito ja infrastruktuurikustannus. Jos
   eivät, arvioi, mitä ne olisivat lisänneet.

2. **Perustuiko hyötyarviomme dokumentoituun, mitattuun tulosnäyttöön vai
   rakennettiinko se optimistisesta oletuksesta?** Jäljitä viimeaikaisen
   perustelun hyötypuoli sen todelliseen näyttölähteeseen ja arvioi
   rehellisesti, kuinka perusteltu se todella oli.

3. **Olemmeko koskaan esittäneet ROI-arvion yhtenä lukuna, kun
   vaihteluväli olisi ollut rehellisempi?** Pohdi, miltä väli olisi
   näyttänyt viimeaikaisessa tapauksessa ja mikä tietty oletus ajoi välin
   leveyttä.

4. **Onko ROI-analyysiprosessimme koskaan päätynyt siihen, ettei hanketta
   kannata toteuttaa, ja miten tämä johtopäätös otettiin vastaan?** Jos
   jokainen aiempi analyysi on päätynyt myönteiseen tulokseen, pohdi
   rehellisesti, heijastaako se aidosti hyvää hankevalintaa vai prosessia,
   joka tuottaa aina vain sen vastauksen, jonka sidosryhmät haluavat kuulla.

5. **Olemmeko valmistuneen hankkeen osalta koskaan palanneet vertaamaan
   toteutuneita tuloksia alkuperäiseen ennustettuun perusteluun?** Jos
   emme, valitse yksi todellinen, valmistunut hanke ja tee tämä vertailu nyt
   ryhmäharjoituksena, vaikka ennusteen ja todellisuuden välinen kuilu
   osoittautuisi epämukavaksi.

6. **Mitä vaadittaisiin, jotta seuraava suuri ROI-perustelumme olisi
   puolustettavissa aidossa, epäilevässä tarkastelussa ohjelmistotuotannon
   ulkopuolelta?** Käy läpi seuraava suunniteltu perustelusi ja tunnista sen
   nykyisen näyttöketjun heikoin lenkki ennen kuin se menee päättäjälle.

## Sektorinäkökulma

**Startup-yritys.** Muodollinen ROI-analyysi on usein vähemmän olennaista
kuin yksinkertaisempi selviytymisen ja kasvun kysymys: auttaako tämä
investointi pääsemään seuraavaan välitavoitteeseen tai rahoituskierrokseen.
Sovella silti samaa rehellisyyden periaatetta ja vastusta perustelun
paisuttamista päätöksen oikeuttamiseksi, johon tiimi on jo tunnetasolla
sitoutunut, koska sijoittajien tarkastelu soveltaa lopulta samaa
epäilevyyttä, jota tämä aihe suosittelee soveltamaan ensin sisäisesti.

**Pieni yritys.** Pidä ROI-analyysi oikeassa suhteessa päätöksen kokoon:
suuri, monivuotinen alustainvestointi ansaitsee tässä aiheessa suositellun
täyden kurin, kun taas pieni työkaluhankinta ei tarvitse samaa tarkkuutta.
Keskitä muodollinen analyysityö muutamaan suurimpaan, seurauksellisimpaan
päätökseesi.

**Suuryritys.** ROI-kuri tässä mittakaavassa ratkaisee, kilpaileeko
ohjelmistotuotanto menestyksekkäästi pääomasta muita liiketoimintainvestointeja
vastaan, joilla on vakiintuneempia taloudellisen analyysin perinteitä. Rakenna
tämän aiheen suosittelema täysi omistamisen kokonaiskustannusten ja
vaihteluvälin kuri vakiokäytännöksi ja investoi kehän sulkevaan seurantaan,
joka rakentaa pitkän aikavälin ennustamisen uskottavuutta.

**Julkishallinto.** Kustannus-hyötyanalyysi, ROI:n julkisen sektorin vastine,
on usein muodollinen, vaadittu osa budjettiperustelua, ja rehellisyys
epävarmuudesta ja omistamisen kokonaiskustannuksista on erityisen tärkeää
siellä, missä löydökset voivat joutua ulkoisen auditoinnin tai lainsäädännöllisen
tarkastelun kohteeksi. Analyysi, joka liioitteli hyötyä tai aliarvioi
kustannuksia, aiheuttaa havaittuna pysyvää vahinkoa ohjelman uskottavuudelle
sen rahoittajan silmissä.

## Esimerkit

**Suuryritys.** Logistiikkateknologiayrityksen ohjelmistotuotannon johto
ehdotti suurta investointia vanhan monoliitin migraatioon
mikropalveluarkkitehtuuriin ja esitti aluksi yhden, optimistisen ROI-luvun,
joka perustui ensisijaisesti ennustettuihin julkaisutiheyden parannuksiin.
Talousosaston sidosryhmän epäilevä kyselytyö paljasti, ettei perustelussa
ollut huomioitu huomattavaa jatkuvaa käyttöön liittyvää monimutkaisuutta ja
infrastruktuurikustannusta, jonka uusi arkkitehtuuri toisi mukanaan.
Tarkistettu perustelu, joka rakennettiin täydellä omistamisen
kokonaiskustannuksella ja välillä, joka heijasti sekä varovaisia että
optimistisia toimituksen parannusskenaarioita, osoitti vaatimattomamman
mutta yhä positiivisen odotetun tuoton, ja ratkaisevasti se kesti talousosaston
tarkastelun ja sai rahoituksen, mihin alkuperäinen, liioiteltu perustelu
tuskin olisi pystynyt.

**Julkishallinto.** Osavaltion tuomioistuinasiakirjojen digitointiohjelma
rakensi alkuperäisen kustannus-hyötyperustelunsa pelkästään hallinnollisten
kustannussäästöjen varaan yhdellä, tarkalla ROI-luvulla. Riippumaton
budjettitoimiston katselmus havaitsi, ettei ennusteessa ollut huomioitu
kansalaisten aikasäästöjä tai oikeudenkäyntien vähentyneitä virhemääriä,
hyötyjä, jotka olivat todellisia mutta jätettiin pois, koska ne oli vaikeampi
kvantifioida kuin hallinnolliset kustannukset. Tarkistettu analyysi sisällytti
nämä hyödyt nimenomaisesti ilmaistulla välillä, joka heijasti niihin
liittyvää todellista mittausepävarmuutta, ja tuotti vahvemman ja, mikä
tärkeää, puolustettavamman perustelun, jonka budjettitoimisto lopulta
hyväksyi juuri siksi, että se oli avoin siitä, mitä se tiesi varmasti ja mitä
ei.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Tarkan ROI-kurin tuotto on jossain määrin rekursiivisesti ROI-kurin oma
uskottavuus: organisaatio, joka rakentaa johdonmukaisesti rehellisiä,
puolustettavia perusteluja ja päätyy toisinaan myös siihen, ettei hanke ole
sen arvoinen, ansaitsee enemmän luottamusta ja siksi enemmän autonomiaa
tulevissa investointipäätöksissä kuin sellainen, jonka perusteluihin
suhtaudutaan epäillen, koska se on aiemmin luvannut liikaa. Edellä oleva
logistiikkayritysesimerkki osoittaa tämän suoraan: tarkistettu, vaatimattomampi
mutta rehellinen perustelu onnistui siellä, missä paisutettu alkuperäinen
olisi todennäköisesti kaatunut tarkastelussa.

Tämän kurin omistamisen kokonaiskustannukset ovat analyyttinen työ täysien
omistamisen kokonaiskustannusarvioiden rakentamiseen, hyötyarvioiden
perustamiseen todelliseen näyttöön, epävarmuuden nimenomaiseen
ilmaisemiseen ja toteutuneiden tulosten seurantaan jälkikäteen. Tämä työ on
aidosti enemmän vaivaa kuin nopea, varma yhden luvun esitys, ja se kannattaa
juuri siksi, että vaihtoehto vaarantaa organisaation uskottavuuden jokaista
tulevaa perustelua varten.

## Antimallit ja sudenkuopat

- **Pelkkä alkukustannusanalyysi, omistamisen kokonaiskustannukset
  pois jättäen:** aliarvioi todellisen investointikustannuksen, erityisesti
  pitkäikäisissä järjestelmissä.
- **Hyötyarvioiden keksiminen optimistisesta oletuksesta dokumentoidun
  näytön sijaan:** tuottaa perustelun, joka ei kestä tarkastelua.
- **Yhden, valheellisen tarkan ROI-luvun esittäminen ilmaistun välin
  sijaan:** vahingoittaa uskottavuutta, kun todellinen tulos poikkeaa
  pisteennusteesta.
- **Analyysiprosessi, joka tuottaa aina vain myönteisiä johtopäätöksiä:**
  sidosryhmät tulkitsevat sen oikein todisteeksi siitä, ettei prosessi ole
  aidosti riippumaton.
- **Toteutuneiden tulosten seuraamatta jättäminen alkuperäistä ennustetta
  vasten:** menettää palautesilmukan, joka parantaisi tulevien ennusteiden
  tarkkuutta.
- **Perustelun rakentaminen jo tunnetasolla tehdyn päätöksen oikeuttamiseksi
  päätöksen aidon informoinnin sijaan:** useimpien paisutettujen
  ROI-perustelujen perimmäinen syy.

## Kypsyysmalli

- **Taso 1, Aloittava:** ROI-perustelut ovat epämuodollisia, dokumentoidun
  näytön tukemattomia ja päätyvät lähes aina myönteiseen tulokseen hankkeesta
  riippumatta.
- **Taso 2, Kehittyvä:** Joissakin perusteluissa on kustannus- ja
  hyötyarvioita, mutta omistamisen kokonaiskustannuksia sovelletaan
  epäyhtenäisesti ja epävarmuus ilmaistaan harvoin nimenomaisesti.
- **Taso 3, Vakioitu:** ROI-perustelut käyttävät yhdenmukaisesti täyttä
  omistamisen kokonaiskustannusta, dokumentoitua hyötynäyttöä ja ilmaistua
  väliä, joka heijastaa todellista epävarmuutta, koko organisaatiossa.
- **Taso 4, Hallittu:** Toteutuneita tuloksia seurataan alkuperäisiä
  ennusteita vasten valmistumisen jälkeen, ja vertailu julkaistaan ja
  käytetään tulevan ennustamisen parantamiseen.
- **Taso 5, Orkestroitu:** Organisaatiolla on osoitettu, monivuotinen historia
  tarkasta, rehellisestä ROI-ennustamisesta, mukaan lukien tapaukset, joissa
  päädyttiin oikein siihen, ettei hanke ollut tavoittelemisen arvoinen, ja
  tämä historia ansaitsee ohjelmistotuotannolle luotetun paikan
  strategisissa investointipäätöksissä.

## Keskusteluideoita

1. Mikä on suurin nykyinen investointiperustelumme, ja kestäisikö se aidosti epäilevän tarkastelun tänään?
2. Olemmeko koskaan verranneet valmistuneen hankkeen toteutunutta tulosta sen alkuperäiseen ROI-ennusteeseen?
3. Mitä analyysiprosessimme tulisi muuttaa, jotta se todella kykenisi päätymään johtopäätökseen "ei kannata"?
4. Mikä omistamisen kokonaiskustannusten osa puuttuu useimmin nykyisistä kustannusarvioistamme?
5. Mikä on seuraavan suunnitellun suuren investointiperustelumme yksittäinen heikoin näyttölenkki?

## Keskeiset opit

- Rakenna ROI-perustelut kirjan **muista mittareista**: kustannus
  yksikkötaloudellisuudesta (aihe 5.4), hyöty dokumentoidusta tulosnäytöstä
  (aiheet 5.1–5.3), ei keksityistä oletuksista.
- Sisällytä **omistamisen kokonaiskustannukset**, ei vain alkukustannus, ja
  ilmaise hyötyarviot **vaihteluvälinä ja nimenomaisena epävarmuutena**, ei
  yhtenä, valheellisen tarkkana lukuna.
- Rakenna prosessi, joka todella kykenee päätymään siihen, että hanketta
  **ei kannata toteuttaa**. Analyysi, joka tuottaa aina vain myönteisiä
  johtopäätöksiä, ei ole uskottava.
- **Seuraa toteutuneita tuloksia ennustetta vasten** valmistumisen jälkeen ja
  julkaise vertailu pitkän aikavälin ennustamisen uskottavuuden rakentamiseksi.
- Rehellinen, puolustettavissa oleva ROI-kuri ansaitsee ohjelmistotuotannolle
  ajan myötä **luotetun paikan** strategisissa investointipäätöksissä.

## Lähteet ja lisälukemista

- *How to Measure Anything*, kirjoittanut Douglas W. Hubbard (epävarman
  arvon kvantifiointi ja puolustettavien, vaihteluvälipohjaisten arvioiden
  rakentaminen).
- *Cloud FinOps*, kirjoittaneet J.R. Storment ja Mike Fuller (omistamisen
  kokonaiskustannusten kuri pilvipohjaisessa infrastruktuuri-investoinnissa).
- *Accelerate: The Science of Lean Software and DevOps*, kirjoittaneet Nicole
  Forsgren, Jez Humble ja Gene Kim (tutkimusperusta toimituskäytäntöjen
  investointien yhdistämiseksi liiketoiminnan tuottoon).
- U.S. Office of Management and Budget Circular A-94, guidance on
  cost-benefit analysis for federal programmes (public-sector ROI
  discipline).
