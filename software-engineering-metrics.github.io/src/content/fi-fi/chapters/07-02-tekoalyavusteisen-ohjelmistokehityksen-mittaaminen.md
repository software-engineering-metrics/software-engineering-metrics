# 7.2 Tekoälyavusteisen ohjelmistokehityksen mittaaminen

## Yleiskatsaus ja perustelut

Aihe 7.1 osoitti, miksi useat nykyiset mittarit eivät enää luotettavasti
mittaa sitä, mitä ne ennen mittasivat tekoälyavusteisessa kehityksessä.
Tämä aihe käsittelee, mitä mitata sen sijaan: miten saat todellisen näytön,
ei vaikutelmaa tai toimittajan markkinointia, siitä, auttaako tekoälyn
koodausavustus organisaatiotasi oikeasti ja kuinka paljon. Kysymys on
aidosti tärkeä ja sillä on todellisia budjettivaikutuksia. Tekoälytyökalujen
lisenssit ovat todellinen, jatkuva kustannus, aiheen 5.4 yksikkötaloudellisuuden
kuri pätee suoraan, ja organisaatio, joka ei pysty vastaamaan kysymykseen
näytöllä, joko maksaa liikaa työkalusta, joka ei auta, tai investoi liian
vähän työkaluun, joka oikeasti auttaa.

Tämän aiheen lähestymistapa nojaa suoraan aiheen 1.3 periaatteeseen tulokset
ennen tuotoksia, nyt sovellettuna tekoälytyökalujen arviointiin. Naiivi ja
yleisin lähestymistapa mittaa tekoälyavusteista kehitystä tuotosten määrällä:
generoidut koodirivit, hyväksytyt ehdotukset ja kehittäjien itse raportoima
tehtävää kohden säästetty aika. Juuri näistä mittareista aihe 7.1 varoitti,
että ne ovat alttiimpia tälle muutokselle. Tarkempi lähestymistapa, jota tämä
aihe suosittelee, mittaa tuloksia: onko tekoälyavustus oikeasti lyhentänyt
sykliaikaa laatua heikentämättä, onko se vähentänyt aikaa, joka kuluu aidosti
vähäarvoiseen, toistuvaan työhön, ja vapauttanut kapasiteettia
arvokkaammalle työlle, ja onko se mitattavasti vaikuttanut osan 5
liiketoiminta- ja tuotetuloksiin.

Suurille tiimeille tämän mittauksen onnistuminen ratkaisee, tehdäänkö
tekoälytyökaluinvestointien päätökset näytön vai toimittajien väitteiden ja
organisaation vauhdin perusteella. Suuryritykset, jotka neuvottelevat
laajamittaisia tekoälytyökaluja koskevia sopimuksia, tarvitsevat aitoa
näyttöä arvosta voidakseen perustella menon ja verrata kilpailevia
työkaluja reilusti. Julkishallinto, johon kohdistuu usein erityistä
tarkastelua teknologiamenojen osalta, tarvitsee tiukan, puolustettavan
arviointimenetelmän ennen kuin se sitoo julkisia varoja tekoälytyökalujen
laajamittaiseen käyttöönottoon.

## Keskeiset periaatteet

- **Mittaa tekoälyavustusta tuloksilla, ei tuotosten määrällä tai
  toimittajan raportoimilla käyttötilastoilla.** Aiheen 1.3 kuri pätee tässä
  täydellä voimalla.
- **Käytä aitoa [vertailuryhmää](https://en.wikipedia.org/wiki/Treatment_and_control_groups) aina kun mahdollista**, ei pelkkää
  ennen-jälkeen-vertailua, jonka voi sekoittaa alan laajuinen nouseva lähtötaso.
- **Itse raportoidut ajansäästöt ovat yksinään heikko signaali.** Parita ne
  objektiivisen sykliaika- ja laatudatan kanssa.
- **Mittaa koko kustannus, katselmoinnin ja korjaamisen aika mukaan lukien**,
  ei vain generoinnin nopeutta.
- **Eri tehtävissä ja eri insinööreillä tekoälyavustuksen arvo voi vaihdella
  paljon.** Vältä yhtä sekoitettua organisaation laajuista lukua, joka
  kätkee tämän vaihtelun.

## Suositukset

### Rakenna aito vertailu, ei pelkkää ennen-jälkeen-tilannekuvaa

Vertaa mahdollisuuksien mukaan tuloksia tekoälyavustusta käyttävän ryhmän
ja vastaavan, sitä käyttämättömän ryhmän välillä samalla ajanjaksolla sen
sijaan, että vertaisit vain oman organisaatiosi ennen-jälkeen-lukuja. Ne
eivät pysty erottamaan tekoälyavustuksen vaikutusta mistään muusta
samanaikaisesta muutoksesta (aiheen 1.6 sekoittavien muuttujien varoitus
pätee suoraan). Jos aitoa vertailuryhmää ei voi käytännössä muodostaa, vertaa
vähintään pidempään historialliseen lähtötasoon (ohjauskortti, aiheen 1.6
mukaan) yksittäisen ennen-jälkeen-tilannekuvan sijaan. Tilannekuva on alttiina
regressiolle kohti keskiarvoa ja asiaan liittymättömille samanaikaisille
muutoksille.

### Mittaa sykliaikaa ja laatua yhdessä, älä koskaan pelkkää tekoälyavustuksen nopeusväitettä

Sovella aiheiden 2.6 ja 2.10 kuria suoraan: seuraa, liikkuuko tekoälyavusteinen
työ nopeammin sykliaikavaiheiden läpi, ja samalla, liikkuuko tuon työn
muutosten epäonnistumisprosentti tai karanneiden virheiden osuus (aihe 5.1)
väärään suuntaan. Aito tuottavuushyöty näyttää nopeampaa sykliaikaa
vakaalla tai parantuneella laadulla. Näennäinen hyöty näyttää nopeampaa
sykliaikaa heikkenevällä laadulla. Tämä on täsmälleen se vaihtokauppa,
josta aihe 7.1 varoitti, ja se paljastuu tässä samalla paritetun mittarin
kurilla, jota kirja soveltaa kauttaaltaan.

### Sisällytä katselmoinnin ja korjaamisen aika koko kustannuslaskentaan

Tekoälyn tuottama koodi, jota on nopeampi tuottaa mutta hitaampi katselmoida
tai joka vaatii enemmän korjausta ja uudelleentyöstöä alkuperäisen
generoinnin jälkeen, ei välttämättä näytä nettoparannusta sykliajassa, kun
koko putki mitataan. Näin on, vaikka alkuperäinen koodin generointivaihe
tuntuisi yksittäisestä insinööristä dramaattisesti nopeammalta. Mittaa koko
sykliaikaketju (aihe 2.6), älä vain koodausvaihetta, jotta saat tämän
rehellisesti esiin etkä hyvitä tekoälyavustusta koetun mutta
epätäydellisen nopeuden tunteen perusteella.

### Kohtele itse raportoituja ajansäästöjä aloitushypoteesina, ei johtopäätöksenä

Kehittäjän oma raportti "tämä säästi minulta tunnin" on hyödyllinen alustava
signaali ja laadullinen konteksti (aiheen 5.3 yhdistetty
määrällinen ja laadullinen lähestymistapa pätee tässäkin). Se on kuitenkin
altis samoille muistamisen ja toivottavuuden vinoumille, joista aihe 1.5
varoittaa kaikessa itse raportoidussa datassa, eikä se kerro mitään
jatkossa syntyvästä katselmointi- tai korjauskustannuksesta. Käytä
itseraportointia hypoteesien luomiseen siitä, missä tekoälyavustus auttaa
eniten, ja validoi hypoteesit sitten objektiivista sykliaika- ja laatudataa
vasten ennen kuin teet lopullisen johtopäätöksen.

### Segmentoi mittaus tehtävätyypin mukaan ja vältä yhtä sekoitettua lukua

Tekoälyn koodausavustus tarjoaa todennäköisesti hyvin erilaista arvoa
vakiokoodin ja hyvin ymmärrettyjen tehtävien kuin aidosti uusien,
monimutkaisten ongelmanratkaisutehtävien osalta. Mittaa ja raportoi
tehtäväluokittain yhden sekoitetun, organisaation laajuisen keskiarvon sijaan.
Keskiarvo voi kätkeä sen, että avustus tuottaa vahvaa arvoa yhdessä luokassa
mutta vähän tai jopa negatiivista arvoa toisessa. Sekoitettu luku peittäisi
tämän tiedon täysin.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Pelkät itse raportoidut ajansäästöt | Nopea ja helppo kerätä | Heikko signaali; altis vinoumalle; ohittaa jatkossa syntyvän katselmointikustannuksen |
| Pelkkä ennen-jälkeen-vertailu | Yksinkertainen toteuttaa | Mikä tahansa muu samanaikainen muutos tai alan trendi sekoittaa |
| Aito vertailuryhmä | Vahvin, puolustettavin näyttö | Vaikeampi järjestää; ei välttämättä mahdollinen täyden käyttöönoton yhteydessä |
| Tehtävittäin segmentoitu tulosmittaus | Paljastaa, mihin arvo aidosti keskittyy | Vaatii tarkempaa seurantaa ja luokittelutyötä |

Keskeinen jännite on **mittauksen tiukkuus versus käytännön toteutettavuus**.
Aito, kontrolloitu vertailuryhmä on vahvin näyttö, mutta se on usein
epäkäytännöllinen, kun työkalu on jo otettu käyttöön koko organisaatiossa
ilman pidätettyä kontrolliryhmää. Itse raportoidut vaikutelmat ovat nopeita
ja helppoja mutta yksinään heikkoja. Ratkaise jännite käyttämällä vahvinta
vertailuasetelmaa, jonka todellinen käyttöönottosi sallii: aito
kontrolliryhmä varhaisessa pilottivaiheessa, jos mahdollista, muuten
historiallisen lähtötason ohjauskortti. Kohtele itseraportointia
hypoteesien luontityökaluna eikä viimeisenä sanana riippumatta siitä,
minkä vertailuasetelman lopulta käytät.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Oliko meillä aito vertailuryhmä tekoälytyökalujen käyttöönoton
   arviointiin, tai voisimmeko sellaisen vielä muodostaa, vai nojaammeko
   kokonaan ennen-jälkeen-vertailuun?** Jos aitoa vertailuryhmää ei koskaan
   perustettu, keskustelkaa siitä, voisiko historiallisen lähtötason
   ohjauskortti silti tarjota kohtuullisen tiukan vaihtoehdon.

2. **Olemmeko mitanneet sykliaikaa ja laatua yhdessä tekoälyavusteisen työn
   osalta, vai onko meillä vain nopeusväite ilman vastaavaa
   laatutarkistusta?** Hae kaikki olemassa oleva data ja tarkista tämä
   nimenomainen pari. Jos dataa ei ole, tämä aukko on aiheen tärkein
   korjattava asia.

3. **Sisältääkö tekoälyavusteisen työn sykliaikamittauksemme katselmoinnin ja
   korjaamisen ajan vai vain alkuperäisen generointivaiheen?** Nopeusväite,
   joka perustuu vain generointiaikaan ja ohittaa jatkossa syntyvän
   katselmointikustannuksen, kärsii täsmälleen siitä epätäydellisen
   laskennan ansasta, josta tämä aihe suoraan varoittaa.

4. **Mitä itse raportoituja ajansäästöväitteitä olemme keränneet, ja olemmeko
   validoineet niistä yhtäkään objektiivista dataa vasten?** Valitse yksi
   tietty, usein toistettu väite ja tarkista, tukeeko objektiivinen data
   sitä oikeasti.

5. **Sekoittaako nykyinen mittauksemme kaikki tehtävätyypit yhdeksi luvuksi,
   vai tiedämmekö, missä työluokissa tekoälyavustuksen arvo on vahvinta?**
   Jos luku on sekoitettu, keskustelkaa siitä, mitä tehtävittäin
   segmentoitu erittely voisi paljastaa, minkä nykyinen luku kätkee.

6. **Jos meidän pitäisi tänään puolustaa tekoälytyökaluinvestointiamme
   epäilevälle taloussidosryhmälle näytöllä eikä vaikutelmalla, mitä
   pystyisimme oikeasti näyttämään?** Tämä konkreettinen testi paljastaa
   aukon sen välillä, mitä organisaatiosi uskoo tekoälyavustuksen arvosta ja
   mitä se pystyy osoittamaan näytöllä.

## Sektorinäkökulma

**Startup-yritys.** Muodollinen vertailuryhmätutkimus on pienessä
mittakaavassa yleensä epäkäytännöllinen, mutta jopa yksinkertainen,
rehellinen ennen-jälkeen-tarkastelu sykliajasta ja virheosuudesta tuottaa
merkittävästi luotettavamman signaalin kuin pelkkä vaikutelma siitä, kuinka
paljon nopeammalta työ tuntuu.

**Pieni yritys.** Keskitä mittaustyö ensin arvokkaimpaan ja toistuvimpaan
tehtäväluokkaasi, jossa tekoälyavustuksen arvo on todennäköisimmin selvä ja
mitattavissa. Älä yritä kattavaa arviointia kaikesta pienen tiimisi tekemästä
työstä.

**Suuryritys.** Aito, kontrolloitu vertailu varhaisessa pilottivaiheessa
ennen koko organisaation käyttöönottoa on täällä usein mahdollinen, ja se
kannattaa järjestää tietoisesti, sillä se tuottaa paljon puolustettavampaa
näyttöä laajamittaista työkaluinvestointipäätöstä varten, joka tyypillisesti
seuraa onnistunutta pilottia.

**Julkishallinto.** Julkisten teknologiamenojen päätöksiin, tekoälytyökalujen
hankinta mukaan lukien, kohdistuu usein erityistä tarkastelua, ja ne voivat
vaatia muodollisen kustannus-hyötyperustelun (aihe 5.5). Rakenna tämän aiheen
suosittelema mittauskuri mihin tahansa pilottivaiheeseen alusta alkaen, sillä
tiukka, dokumentoitu arviointimenetelmä vahvistaa lopullista rahoitus- tai
hankintaperustetta huomattavasti.

## Esimerkit

**Suuryritys.** Ohjelmistoyritys otti tekoälyn koodausassistentin käyttöön
puolessa kehitystiimeistään harkittuna pilottina ja piti toista puolta
vertailuryhmänä yhden vuosineljänneksen ajan ennen täyttä käyttöönottoa.
Pilottiryhmä osoitti aidon, tilastollisesti merkitsevän sykliaikaparannuksen
hyvin määritellyissä, paljon vakiokoodia sisältävissä tehtävissä. Monimutkaisessa,
uudessa arkkitehtuurityössä parannusta ei kuitenkaan voitu mitata, ja
katselmointikierrosten määrä (aihe 2.9) oli hieman koholla. Tämä tehtävittäin
segmentoitu löydös, joka tuli näkyviin vain aidon vertailuasetelman ja
tehtäväluokittaisen erittelyn ansiosta, johti siihen, että yritys kohdensi
tekoälyavustuksen käyttöönoton viestinnän ja koulutuksen niihin
tehtäväluokkiin, joissa se osoittautui auttavan, sen sijaan että se olisi
esitetty tasaisena tuottavuuden lisäyksenä kaikessa työssä.

**Julkishallinto.** Liittovaltion virasto pilotoi tekoälyn koodausavustusta
osassa moderniointiohjelmansa tiimejä ja nojasi aluksi itse raportoituihin
ajansäästökyselyihin, jotka osoittivat innostuneita, yhdenmukaisen
myönteisiä vastauksia. Jatkoanalyysi, jossa verrattiin sykliaikaa ja
karanneiden virheiden osuutta pilottitiimien ja vastaavan, pilotin
ulkopuolisen ryhmän välillä samankaltaisten järjestelmäkomponenttien
parissa, osoitti objektiivisen sykliaikaparannuksen todelliseksi mutta
selvästi pienemmäksi kuin itse raportoidut arviot antoivat ymmärtää. Se
tunnisti myös vaatimattoman mutta todellisen katselmointiajan kasvun, joka
oli kumonnut osan generointinopeuden hyödystä. Pelkkä itseraportointidata oli
ohittanut tämän täysin. Tämä tarkempi, näyttöön perustuva kuva ohjasi
suoraan vaatimattomampaa ja puolustettavampaa liiketoimintaperustelua työkalun
jatkuvalle, laajennetulle hankinnalle.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Tekoälyavusteisen kehityksen tiukan mittaamisen tuotto on luottavaiset,
näyttöön perustuvat investointipäätökset. Organisaatio, joka tietää tarkasti,
missä tekoälyavustus aidosti auttaa, voi investoida sen laajentamiseen siellä
ja välttää maksamasta liikaa lisensseistä tehtäväluokissa, joissa se tuottaa
vähän arvoa. Juuri tätä tehtäväsegmentoinnin oivallusta yllä oleva
ohjelmistoyritysesimerkki havainnollistaa. Tämä liittyy suoraan aiheen 5.4
yksikkötaloudellisuuteen ja aiheen 5.5 ROI-kuriin, sillä tekoälytyökalun
kustannus, jota lisensoidaan usein käyttäjäpaikkaa kohden, tarvitsee saman
tiukan kustannus-hyötykäsittelyn, jota kirja soveltaa mihin tahansa muuhun
suureen insinööri-investointiin.

Omistamisen kokonaiskustannukset (TCO) ovat analyyttinen työ, jolla
rakennetaan aidot vertailut, mitataan koko sykliaika katselmointi ja korjaus
mukaan lukien ja segmentoidaan tehtävätyypin mukaan. Se on enemmän työtä kuin
toimittajan raportoimien käyttötilastojen tai itse raportoitujen vaikutelmien
hyväksyminen sellaisinaan. Työn oikeuttaa suoraan tekoälytyökalujen lisenssikustannusten
suuruus suuressa organisaatiossa ja riski heikosti perustellusta,
kalliista, koko organisaation laajuisesta sitoumuksesta, joka perustuu
vaikutelmaan eikä dataan.

## Antimallit ja sudenkuopat

- **Tekoälyavustuksen mittaaminen pelkällä tuotosten määrällä tai toimittajan
  käyttötilastoilla:** toistaa suoraan aiheen 7.1 keskeisen varoituksen.
- **Kokonaan itse raportoitujen ajansäästöjen varassa oleminen:** heikko
  signaali, joka on altis vinoumalle ja sokea jatkossa syntyvälle
  katselmointi- ja korjauskustannukselle.
- **Vain generointinopeusvaiheen mittaaminen, koko sykliajan ohittaminen:**
  tuottaa epätäydellisen, mahdollisesti harhaanjohtavan kuvan todellisesta
  tuottavuusvaikutuksesta.
- **Yhden, sekoitetun organisaation laajuisen luvun raportointi:** kätkee
  arvon todellisen vaihtelun eri tehtäväluokkien välillä.
- **Ei vertailuryhmää tai historiallista lähtötasoa:** ei pysty erottamaan
  tekoälyavustuksen todellista vaikutusta mistään muusta samanaikaisesta
  muutoksesta.
- **Innostuneen itse raportoidun kyselytuloksen kohtelu riittävänä näyttönä
  laajamittaisessa investointipäätöksessä:** riskinä juuri se aukko, jonka
  yllä oleva liittovaltion viraston esimerkki huomasi vasta rakennettuaan
  tiukemman vertailun.

## Kypsyysmalli

- **Taso 1, Aloittava:** Tekoälyavusteisen kehityksen arvoa arvioidaan, jos
  lainkaan, pelkän itse raportoidun vaikutelman ja toimittajan
  käyttötilastojen perusteella.
- **Taso 2, Kehittyvä:** Jonkin verran sykliaika- tai laatudataa on, mutta
  aitoa vertailuryhmää tai historiallista lähtötasoa ei ole eikä
  tehtävittäin segmentoitua analyysiä.
- **Taso 3, Vakioitu:** Aitoa vertailuasetelmaa (kontrolliryhmä tai
  historiallinen lähtötaso) sovelletaan yhdenmukaisesti paritetun sykliaika- ja
  laatumittauksen kanssa, segmentoituna tehtävätyypin mukaan.
- **Taso 4, Hallittu:** Koko sykliajan laskentaa, katselmoinnin ja korjaamisen
  aika mukaan lukien, seurataan. Itse raportoidut väitteet validoidaan
  järjestelmällisesti objektiivista dataa vasten.
- **Taso 5, Orkestroitu:** Organisaatiolla on kypsä, näyttöön perustuva
  ymmärrys siitä, missä tekoälyavustus aidosti auttaa, ja se ohjaa kohdennettua
  käyttöönottoa, koulutusinvestointeja ja hankintapäätöksiä osoitetulla,
  puolustettavalla ROI:lla.

## Keskusteluideoita

1. Mikä aito vertailu meillä on, jos mitään, nykyiselle tekoälytyökalujen käyttöönotollemme?
2. Olemmeko mitanneet sykliaikaa ja laatua yhdessä vai vain nopeusväitettä?
3. Mikä itse raportoitu tekoälyavustusväite meidän pitäisi validoida objektiivista dataa vasten?
4. Mikä tehtäväluokka osoittaa meillä vahvimman näytön tekoälyavustuksen aidosta arvosta?
5. Pystyisimmekö tällä hetkellä puolustamaan tekoälytyökaluinvestointiamme epäilevälle taloussidosryhmälle näytöllä?

## Keskeiset opit

- Mittaa tekoälyavusteista kehitystä **tuloksilla**, ei tuotosten määrällä tai
  toimittajan raportoimilla käyttötilastoilla.
- Käytä **aitoa vertailuryhmää tai historiallista lähtötasoa**, ei pelkkää
  ennen-jälkeen-tilannekuvaa, jonka sekoittavat tekijät voivat vääristää.
- Mittaa **sykliaikaa ja laatua yhdessä**, koko putki, katselmoinnin ja
  korjaamisen aika mukaan lukien, ei vain generointinopeutta.
- Kohtele **itse raportoituja ajansäästöjä hypoteesina**, ei johtopäätöksenä,
  ja validoi ne objektiivista dataa vasten.
- **Segmentoi tehtävätyypin mukaan**. Yksi sekoitettu luku kätkee, missä arvo
  aidosti keskittyy ja missä ei.

## Lähteet ja lisälukemista

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (tulosmittauksen kuri, jota tämä aihe soveltaa
  tekoälytyökalujen arviointiin).
- GitHub's research on AI pair programming and developer productivity
  (alan mittakaavan empiirinen tutkimus tekoälyavusteisen kehityksen tuloksista).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021) (moniulotteisen mittauksen kuri, jota
  tämä aihe soveltaa uuteen työkaluluokkaan).
- *How to Measure Anything*, by Douglas W. Hubbard (puolustettavien
  vertailujen rakentaminen ja arvon kvantifiointi aidossa epävarmuudessa).
