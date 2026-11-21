# 6.1 Palvelutasoindikaattorit, -tavoitteet ja virhebudjetit

## Yleiskatsaus ja perustelut

**[Sivustojen luotettavuustekniikka](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(SRE)**, Googlella uranuurtettu ja *Site Reliability Engineering* -kirjassa
dokumentoitu kuri, toi sanaston, jolle tämä aihe rakentuu suoraan:
**palvelutasoindikaattori (SLI)** on palvelun terveyden suoraan mitattu
signaali, kuten pyynnön viive, virheiden osuus tai käytettävyys.
**Palvelutasotavoite (SLO)** on tämän indikaattorin tavoitealue, esimerkiksi
99,9 % pyynnöistä onnistuu 200 millisekunnissa. **Virhebudjetti** on sallittu
vajaus, 0,1 % pyynnöistä, joiden sallitaan epäonnistua. Sitä ei kohdella
poistettavana virheenä vaan käytettävänä resurssina, jolla voi tietoisesti
ottaa riskiä: julkaista riskialtis muutos, ajaa kokeilu tai yksinkertaisesti
hyväksyä, ettei täydellinen luotettavuus ole saavutettavissa eikä tietyn
pisteen jälkeen sen hinnan arvoinen.

Tämä viimeinen ajatus, virhebudjetti käytettävänä resurssina eikä nollaan
minimoitavana lukuna, on tämän aiheen ja kiistatta koko tämän osan tärkein
yksittäinen käsite. Se ratkaisee jännitteen, joka vaivaa monia organisaatioita:
ohjelmistotuotanto haluaa toimittaa ominaisuuksia ja ottaa kohtuullisia
riskejä, ja käyttö haluaa maksimaalisen vakauden. Ilman yhteistä,
kvantifioitua virhebudjettia tästä tulee loputon, poliittisesti latautunut
neuvottelu. Sen kanssa siitä tulee yksinkertainen, objektiivinen sääntö: käytä
vapaasti niin kauan kuin budjettia on, hidasta ja priorisoi vakaustyö
automaattisesti, kun se on käytetty loppuun. Näin filosofinen erimielisyys
muuttuu aritmeettiseksi.

Suurille tiimeille SLO:t ja virhebudjetit tekevät luotettavuudesta
mitattavan ja neuvoteltavan saavuttamattoman, ääneen lausumattoman absoluutin
sijaan, jonka jokainen tiimi hiljaa jättää saavuttamatta tuntien itsensä
hieman syylliseksi. Suuryritykset käyttävät SLO:ita selkeiden, sopimuksellisten
odotusten asettamiseen tiimien välillä ja asiakkaiden kanssa. Kriittistä
julkista infrastruktuuria pyörittävät julkishallinnon organisaatiot käyttävät
niitä asettamaan puolustettavia, julkisesti perusteltavia luotettavuustavoitteita
mahdottoman täydellisyysvaatimuksen sijaan, jota mikään todellinen järjestelmä
ei voi ylläpitää.

## Keskeiset periaatteet

- **100 %:n luotettavuus on väärä tavoite lähes kaikille järjestelmille.**
  Se on yleensä saavuttamaton, ja sen tavoittelu tietyn pisteen jälkeen
  vaihtaa aktiivisesti pois nopeutta ilman mitään merkityksellistä hyötyä
  käyttäjille.
- **SLO:n tulee heijastaa sitä, minkä käyttäjät todella huomaavat ja mistä he
  välittävät**, ei mielivaltaista pyöreää lukua, joka valittiin, koska se
  kuulostaa rauhoittavalta.
- **Virhebudjetti tekee luotettavuudesta käytettävän resurssin** ja antaa
  sekä ohjelmistotuotannolle että käytölle yhteisen, objektiivisen säännön
  siitä, milloin toimittaa nopeasti ja milloin hidastaa.
- **SLI:t on mitattava käyttäjän todellisesta kokemuksesta** aina kun
  mahdollista, ei vain sisäisen järjestelmän itse raportoimasta terveydestä.
- **Virhebudjetin loppuun kuluminen laukaisee ennalta sovitun, yhteisesti
  hyväksytyn vastauksen**, ei tapauskohtaista väittelyä joka kerta.

## Suositukset

### Valitse SLI:t, jotka heijastavat aitoa käyttäjäkokemusta

Valitse indikaattorit, jotka on mitattu mahdollisimman läheltä todellista
käyttäjäkokemusta: pyyntöjen onnistumisosuus ja viive mitattuna
reunalla tai kuormantasaajassa, ei vain sisäisistä palvelun
terveystarkistuksista, jotka voivat raportoida "terve" käyttäjien kokiessa
todellisia ongelmia. SLI, joka mittaa jotain, mitä käyttäjä ei koskaan
huomaa, kuten sisäisen komponentin olevan teknisesti toiminnassa vaikka koko
pyyntö silti epäonnistuu, mittaa väärää asiaa, vaikka se olisi kuinka helppo
instrumentoida.

### Aseta SLO-tavoite sen perusteella, mitä käyttäjät todella tarvitsevat, ei mielivaltaisen pyöreän luvun mukaan

Vastusta refleksiä asettaa tavoite kuten "99,99 % käytettävyys" vain siksi,
että se kuulostaa vaikuttavan tarkalta. Selvitä sen sijaan, minkä
luotettavuustason käyttäjät aidosti huomaavat ja mistä he välittävät,
historiallisen häiriödatan, käyttäjätutkimuksen ja jokaisen lisäluotettavuuden
osoitetun hinnan pohjalta. Siirtyminen 99,9 %:sta 99,99 %:iin maksaa usein
paljon enemmän ohjelmistotuotannon työtä kuin siirtyminen 99 %:sta 99,9 %:iin
maksoi, ja hyöty on vähenevä ja lopulta käyttäjän havaittavissa olematon.

### Kohtele virhebudjettia käytettävänä resurssina ja sovi ennalta vastaus sen loppumiseen

Laske virhebudjetti suoraan SLO:sta (99,9 %:n käytettävyystavoite 30 päivän
aikana sallii noin 43 minuuttia sallittua käyttökatkoa) ja seuraa sen kulutusta
jatkuvasti. Sovi etukäteen, ennen yhtäkään tiettyä häiriötä, mitä tapahtuu,
kun budjetti on käytetty loppuun: yleinen, tehokas käytäntö on, että
ominaisuustyö keskeytyy ja tiimin prioriteetti siirtyy automaattisesti
luotettavuustyöhön, kunnes budjetti palautuu. Tämä ennalta sovittu sääntö
poistaa tarpeen käydä kompromissia uudelleen läpi paineen alla jokaisen
yksittäisen häiriön aikana.

### Käytä virhebudjettia tietoisten, perusteltujen riskipäätösten tekemiseen

Terve, käyttämätön virhebudjetti ei ole jotain, mitä kerätään talteen. Se on
lupa ottaa kohtuullisia riskejä: julkaista muutos kohonneella mutta
hyväksyttävällä riskillä, ajaa kaaostestauskokeilu (sisarkirja
`software-engineering-guide` käsittelee kaaostestausta suoraan) tai
hyväksyä riskialttiimpi arkkitehtuurimuutos, koska budjetti on olemassa
nimenomaan käytettäväksi tietoisesti eikä säilytettäväksi koskemattomana.
Virhebudjetti, jota ei koskaan käytetä, viittaa joko liian varovaiseen
tiimiin tai SLO:hon, joka on asetettu liian löysäksi todelliseen saavutettuun
luotettavuuteen nähden. Molemmat kannattaa selvittää.

### Katselmoi ja päivitä SLO:t säännöllisesti, näytön perusteella, ei tottumuksesta

Vuosia sitten asetettu SLO ei välttämättä enää heijasta nykyisiä käyttäjien
odotuksia, järjestelmäarkkitehtuuria tai liiketoiminnan prioriteetteja.
Katselmoi SLO:t säännöllisessä rytmissä ja tarkista historiallisesti saavutettu
luotettavuus, käyttäjäpalaute ja se, edustaako tavoite yhä merkityksellistä
kompromissipistettä eikä joko helposti saavutettua tavoitetta, jota voisi
kiristää nopeuden mahdollistamiseksi muualla, tai epärealistista tavoitetta,
jonka saavuttamisesta tiimi on käytännössä luopunut.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei muodollista SLO:ta (epäsuora "niin luotettava kuin mahdollista") | Ei käyttöönoton vaivaa | Loputon, perusteeton neuvottelu nopeuden ja vakauden välillä, ei yhteistä sääntöä |
| Tavoitteellinen, hyvin korkea SLO (99,99 %+) | Viestii vakavuudesta luotettavuuden suhteen | Usein tarpeeton kustannus, vähenevä hyöty sen jälkeen, mitä käyttäjät oikeasti huomaavat |
| Näyttöön ja käyttäjäkokemukseen perustuva SLO | Heijastaa aitoa arvoa, puolustettavissa ja saavutettavissa | Vaatii oikeaa dataa ja analyysia oikeaan asettamiseen |
| Virhebudjetti ennalta sovitulla loppumisvastauksella | Poistaa tapauskohtaisen neuvottelun, objektiivinen, nopea päätöksenteko | Vaatii organisaation sitoutumista ja kuria noudattaa ennalta sovittua sääntöä |

Keskeinen jännite on **tavoitteellisuus versus saavutettavuus**. Korkea,
tavoitteellinen SLO tuntuu viestivän vakavuudesta laadun suhteen, mutta
luotettavuuden tavoittelu yli sen, minkä käyttäjät oikeasti huomaavat, vaihtaa
pois todellista nopeutta ilman aitoa hyötyä, ja epärealistinen tavoite, jota
tiimi ei koskaan saavuta, opettaa kaikki lopettamaan SLO:n vakavasti
ottamisen kokonaan. Ratkaise jännite perustamalla SLO todelliseen näyttöön:
mitä käyttäjät huomaavat, mitä järjestelmä on historiallisesti saavuttanut,
mitä jokainen lisäaskel maksaa. Älä perusta sitä tavoitteellisuuteen tai
haluun näyttää tarkalta tuloskortilla.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Perustuuko nykyinen SLO:mme näyttöön siitä, minkä käyttäjät todella
   huomaavat, vai asetettiinko se tavoitteellisesti, koska korkea luku tuntui
   asianmukaisen vakavalta?** Jäljitä nykyisen tavoitteesi alkuperä, jos
   voit, ja arvioi rehellisesti, heijastaako se todellista käyttäjätutkimusta
   vai pelkkää ohjelmistotuotannon intuitiota.

2. **Onko meillä ennalta sovittu, yhteisesti hyväksytty vastaus
   virhebudjetin loppumiseen, vai käydäänkö kompromissi uudelleen läpi joka
   kerta?** Jos rehellinen vastaus on jälkimmäinen, se aukko kannattaa sulkea
   ennen kuin seuraava häiriö pakottaa väittelyn paineen alla.

3. **Käytetäänkö virhebudjettiamme koskaan tietoisesti, harkitun riskin
   muutokseen tai kokeiluun, vai kuluuko se vain vahingossa häiriöiden
   kautta?** Budjetti, jota ei koskaan tietoisesti käytetä, voi viitata liian
   varovaiseen tiimiin, joka ohittaa oikeutettuja mahdollisuuksia, joita
   varten budjetti on olemassa.

4. **Mitataanko SLI:mme aidosta käyttäjäkokemuksesta vai sisäisestä
   järjestelmän terveydestä, joka ei välttämättä heijasta sitä, mitä
   käyttäjät kohtaavat?** Tarkista nykyinen instrumentointisi tätä eroa
   vasten. Se on yleinen aukko myös muuten kypsissä luotettavuusohjelmissa.

5. **Milloin viimeksi katselmoimme SLO:mme nykyistä näyttöä vasten, ja onko
   jokin muuttunut, käyttäjien odotukset, järjestelmäarkkitehtuuri,
   liiketoiminnan prioriteetit, mikä oikeuttaisi sen päivittämisen?** Jos et
   muista viimeaikaista katselmointia, sen puuttuminen on jo itsessään
   keskustelun arvoinen.

6. **Mitä meille maksaisi ohjelmistotuotannon työnä nostaa nykyistä SLO:tamme
   yksi lisäyhdeksikkö, ja olisiko kustannus perusteltu minkään aidon
   käyttäjähyödyn kannalta?** Tämä konkreettinen kustannus-hyötykehystys
   auttaa pohjaamaan tavoitteellisuuden ja saavutettavuuden jännitteen
   todellisiin lukuihin abstraktin mieltymyksen sijaan.

## Sektorinäkökulma

**Startup-yritys.** Muodolliset SLO:t ovat usein tarpeettomia hyvin
varhaisessa vaiheessa, kun tiimi voi reagoida luotettavuusongelmiin suoraan
ja epämuodollisesti. Ota käyttöön vähintään karkea, epämuodollinen SLO, kun
sinulla on todellisia maksavia asiakkaita, jotka riippuvat käytettävyydestä,
koska nimenomaisen tavoitteen kuri, vaikka löyhästi seurattunakin, auttaa
priorisoimaan luotettavuustyötä ominaisuuspainetta vastaan aiemmin kuin
useimmat nuoret yritykset tulevat ajatelleeksi.

**Pieni yritys.** Useimmat nykyaikaiset hosting- ja havaittavuusalustat
raportoivat perustason käytettävyys- ja viivedataa vähällä käyttöönotolla.
Käytä tätä yksinkertaisen, saavutettavan SLO:n asettamiseen, älä
tavoitteellisen, jota et realistisesti pysty seuraamaan tai jonka mukaan et
pysty toimimaan rajallisella käyttökapasiteetilla.

**Suuryritys.** SLO:t tukevat tässä mittakaavassa usein sopimuksellisia
palvelutasosopimuksia (SLA), joilla on todellisia taloudellisia seurauksia,
mikä tekee näyttöön perustuvasta tavoitteenasetannasta ja kurinalaisesta
virhebudjetin hallinnasta erityisen tärkeää. Investoi aitoon
käyttäjäkokemukseen perustuviin SLI:hin kätevien sisäisten
terveystarkistusten sijaan ja vahvista ennalta sovittu loppumisvastauskäytäntö
muodollisesti johdon tuella ennen kuin sitä tarvitaan paineen alla.

**Julkishallinto.** Julkisen sektorin luotettavuustavoitteilla kriittiselle
infrastruktuurille on joskus oikeudellista tai sääntelypainoa, ja
epärealistinen, saavuttamaton tavoite, joka paljastuu auditoinnissa tai
julkisessa häiriössä, vahingoittaa instituution uskottavuutta merkittävästi.
Aseta tavoitteet aidon, dokumentoidun käyttäjä- ja tehtävätarpeen perusteella
ja ole julkisesti avoin virhebudjetin edustamasta tietoisesta kompromissista
sen sijaan, että antaisit ymmärtää saavuttamatonta täydellisyyden standardia.

## Esimerkit

**Suuryritys.** Pilvitallennusyritys oli vuosia tavoitellut "maksimaalista
käytettävyyttä" ilman muodollista SLO:ta. Tämä johti krooniseen,
ratkaisemattomaan jännitteeseen tuotetiimin (halusi toimittaa ominaisuuksia
nopeasti) ja infrastruktuuritiimin (halusi maksimaalista varovaisuutta)
välillä, ja asiasta kiisteltiin uudelleen jokaisessa julkaisusuunnittelun
palaverissa. Muodollisen 99,95 %:n käytettävyys-SLO:n käyttöönotto
nimenomaisella virhebudjetilla ja ennalta sovitulla käytännöllä, jonka
mukaan ominaisuustyö keskeytyy automaattisesti budjetin loputtua, ratkaisi
toistuvan neuvottelun kokonaan: molemmat tiimit näkivät saman luvun ja
sopivat samasta säännöstä. Yritys raportoi toimitettujen ominaisuuksien
mitattavaa kasvua terveen budjetin aikoina sekä mitattavaa, tietoista
hidastumista kahdella seuraavan vuoden jaksolla, jolloin budjetti oli aidosti
käytetty loppuun, täsmälleen kuten käytäntö tarkoitti.

**Julkishallinto.** Kansallisen sääpalvelun julkinen hälytysjärjestelmä oli
toiminut vuosia epämuodollisen "aina saatavilla" -odotuksen alla ilman
dokumentoitua tavoitetta, ja päivystystiimiin kohdistui merkittävää,
käsittelemätöntä käyttöpainetta pyrkiessään täyttämään lausumattoman,
käytännössä mahdottoman standardin. Uusi muodollinen SLO, 99,9 %:n
käytettävyys selkeästi viestityllä julkisella virhebudjetin selityksellä, antoi
käyttötiimille nimenomaisen, puolustettavan luvan ajoittaa suunniteltuja
huoltoikkunoita budjetin sisällä. Aiempi lausumaton "aina saatavilla" -odotus
oli tehnyt tämän poliittisesti vaikeaksi, vaikka se oli aidosti välttämätöntä
järjestelmän pitkän aikavälin terveydelle. Julkinen viestintä, joka selitti
virhebudjetin käsitteen suoraan sen kätkemisen sijaan, otettiin myönteisesti
vastaan rehellisen, kypsän käyttökäytännön merkkinä eikä sitoutumisen
palvelun laatuun heikkenemisenä.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

SLO:iden ja virhebudjettien muodollisen käyttöönoton tuotto on muuten
loputtoman, poliittisesti kalliin nopeuden ja vakauden välisen neuvottelun
ratkaiseminen yhdellä, yhteisellä, objektiivisella säännöllä. Edellä oleva
pilvitallennusesimerkki osoittaa tämän konkreettisesti: vuosien toistuva,
ratkaisematon jännite kahden tiimin välillä ratkesi yhdellä muodollisella
tavoitteella ja ennalta sovitulla käytännöllä, mikä vapautti merkittävästi
organisaation energiaa, joka oli aiemmin mennyt saman kompromissin
toistuvaan uudelleen käymiseen.

Omistamisen kokonaiskustannuksiin kuuluu analyysityö näyttöön perustuvan
tavoitteen asettamiseksi oikein sekä kuri noudattaa ennalta sovittua
loppumisvastausta paineenkin alla, kun halutaan silti toimittaa erityisen
toivottu ominaisuus. Tämä kurin kustannus on todellinen, mutta se on paljon
pienempi kuin ratkaisemattoman, kroonisen neuvottelun jatkuva kustannus, joka
kuluttaa organisaation energiaa jokaisessa suunnittelusyklissä loputtomiin.

## Antimallit ja sudenkuopat

- **Tavoitteellisen SLO:n asettaminen ilman näyttöä:** tuottaa epärealistisen
  tavoitteen, jota tiimi lakkaa ottamasta vakavasti, tai tarpeettoman
  kalliin, joka jahtaa hyötyä, jota käyttäjät eivät huomaa.
- **Ei ennalta sovittua vastausta virhebudjetin loppumiseen:** pakottaa saman
  vaikean kompromissiväittelyn paineen alla joka kerta.
- **SLI:iden mittaaminen sisäisestä järjestelmän terveydestä aidon
  käyttäjäkokemuksen sijaan:** voi raportoida "terve" käyttäjien kokiessa
  todellisia ongelmia.
- **Terveen virhebudjetin tietoinen käyttämättä jättäminen:** voi viitata
  liialliseen varovaisuuteen ja ohitettuihin oikeutettuihin mahdollisuuksiin.
- **Tavoitteen asettaminen kerran ja sen uudelleen tarkastelematta
  jättäminen:** SLO voi vanhentua, kun käyttäjien odotukset, arkkitehtuuri ja
  prioriteetit muuttuvat.
- **Virhebudjettikäytännön kohteleminen valinnaisena paineen alla:** ennalta
  sovittu sääntö, joka ohitetaan aina kun se on hankala, ei tuo todellista
  päätöksentekoarvoa.

## Kypsyysmalli

- **Taso 1, Aloittava:** Luotettavuustavoitteet ovat epäsuoria tai
  tavoitteellisia, ilman muodollista SLO:ta, SLI:tä tai virhebudjettia.
- **Taso 2, Kehittyvä:** Joillakin palveluilla on epämuodollinen SLO, mutta
  SLI:t eivät välttämättä heijasta aitoa käyttäjäkokemusta eikä ennalta
  sovittua loppumiskäytäntöä ole.
- **Taso 3, Vakioitu:** Näyttöön perustuvat SLO:t, aidot käyttäjäkokemus-SLI:t
  ja ennalta sovittu virhebudjetin loppumiskäytäntö on otettu yhdenmukaisesti
  käyttöön kriittisissä palveluissa.
- **Taso 4, Hallittu:** Virhebudjetteja käytetään aktiivisesti ja tietoisesti
  harkittuun riskinottoon, ja SLO:t katselmoidaan ja päivitetään säännöllisessä,
  näyttöön perustuvassa rytmissä.
- **Taso 5, Orkestroitu:** SLO:t ja virhebudjetit on integroitu koko
  organisaatioon yhteisenä, objektiivisena mekanismina nopeuden ja vakauden
  tasapainottamiseen, ja organisaatio voi osoittaa tiettyjä päätöksiä, jotka
  kehys mahdollisti ja joita perusteeton neuvottelu ei olisi ratkaissut yhtä
  tehokkaasti.

## Keskusteluideoita

1. Perustuuko nykyinen SLO:mme näyttöön vai tavoitteellisuuteen?
2. Onko meillä ennalta sovittu vastaus virhebudjetin loppumiseen, jota todella noudattaisimme paineen alla?
3. Milloin viimeksi käytimme terveen virhebudjetin tietoisesti harkittuun riskiin?
4. Mittaavatko SLI:mme aitoa käyttäjäkokemusta vai käteviä sisäisiä terveystarkistuksia?
5. Mitä meille maksaisi nostaa SLO:ta yhdellä lisäyhdeksiköllä, ja olisiko kustannus perusteltu?

## Keskeiset opit

- **Palvelutasoindikaattori (SLI)** mittaa aitoa käyttäjäkokemusta,
  **palvelutasotavoite (SLO)** on sen näyttöön perustuva tavoite ja
  **virhebudjetti** on tietoisesti käytettävä sallittu vajaus.
- **100 %:n luotettavuus on yleensä väärä tavoite.** Perusta SLO siihen,
  minkä käyttäjät todella huomaavat ja mitä jokainen lisäaskel aidosti maksaa.
- Kohtele virhebudjettia **käytettävänä resurssina ja ennalta sovitulla
  loppumisvastauksella**, jolloin nopeuden ja vakauden kompromissia ei
  tarvitse käydä uudelleen läpi paineen alla joka kerta.
- Mittaa SLI:t **aidosta käyttäjäkokemuksesta**, ei vain kätevistä sisäisistä
  terveystarkistuksista.
- **Katselmoi ja päivitä SLO:t säännöllisesti** näytön perusteella, koska
  vanhentunut tavoite menettää hyödyllisyytensä järjestelmän ja sen käyttäjien
  muuttuessa.

## Lähteet ja lisälukemista

- *Site Reliability Engineering: How Google Runs Production Systems*,
  toimittaneet Betsy Beyer, Chris Jones, Jennifer Petoff ja Niall Richard
  Murphy (perusteos, joka määrittelee SLI:t, SLO:t ja virhebudjetit).
- *The Site Reliability Workbook*, toimittaneet Betsy Beyer, Niall Richard
  Murphy, David K. Rensin, Kent Kawahara ja Stephen Thorne (käytännön ohjeita
  SLO:iden ja virhebudjettien käyttöönottoon).
- *Implementing Service Level Objectives*, kirjoittanut Alex Hidalgo
  (kattava, käytännön tekijöille suunnattu opas SLO:iden suunnitteluun ja
  käyttöönottoon).
- *Accelerate: The Science of Lean Software and DevOps*, kirjoittaneet Nicole
  Forsgren, Jez Humble ja Gene Kim (luotettavuuskäytännön ja toimitussuorituskyvyn
  suhde).
