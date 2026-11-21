# 4.6 Dokumentaation ja tiedon mittarit

## Yleiskatsaus ja perustelut

Tämä aihe päättää osan 4 mittaamalla, onko koodikannan turvalliseen ylläpitoon tarvittava tieto todella dokumentoitu ja löydettävissä, ei vain sitä, onko dokumentaatiota teknisesti jossain olemassa. Aihe 3.5 käsitteli viestintää ja yhteistyötä kehittäjäkokemuksen kysymyksenä. Tämä aihe käsittelee samaa perusongelmaa, tiedon saatavuutta, koodin puolelta: onko uudella kehittäjällä tai tuntemattoman koodin parissa työskentelevällä vanhalla kehittäjällä tarvittava tieto turvallisen muutoksen tekemiseen, vai elääkö tieto vain yhä harvempien pitkäaikaisten työntekijöiden päässä.

Mittaushaaste on tässä aidosti vaikea, vaikeampi kuin useimmat tämän kirjan muut mittarit, koska dokumentaation laatu ja hyödyllisyys ovat luonnostaan subjektiivisempia kuin kattavuusprosentti tai monimutkaisuuspistemäärä. Tämän aiheen lähestymistapa on mitata hyödyllisyyden sijaismittareita eikä olemassaoloa: kuinka usein dokumentaatiota todella luetaan, kuinka usein sama kysymys esitetään uudestaan, vaikka dokumentoitu vastaus on olemassa, ja kuinka kauan järjestelmää tuntemattomalta kestää tulla siinä tuottavaksi. Yksikään näistä sijaismittareista ei yksin ole täydellinen, mutta yhdessä ne antavat paljon rehellisemmän kuvan kuin koodikannan wikisivujen tai README-tiedostojen laskeminen.

Suurille tiimeille tämän aiheen huolet kasautuvat organisaation palvelusajan ja vaihtuvuuden myötä tavoilla, joita on helppo aliarvioida, kunnes kriisi pakottaa asian esiin. Järjestelmä, jota samat kaksi kehittäjää on ylläpitänyt vuosia, voi toimia täysin hyvin lähes ilman kirjallista dokumentaatiota, kunnes molemmat lähtevät saman vuoden aikana. Silloin organisaatio huomaa, ettei tietoa koskaan tallennettu mihinkään pysyvään paikkaan. Suuryritykset ja julkishallinto, joissa järjestelmien elinkaaret ovat tyypillisesti pidempiä ja henkilöstön jatkuvuus epävarmempaa kuin startup-yrityksessä, kantavat tätä riskiä keskimääräistä tuntuvammin.

## Keskeiset periaatteet

- **Dokumentaation olemassaolo ei ole sama asia kuin dokumentaation hyödyllisyys.** Mittaa, auttaako se todella, ei vain sitä, onko se olemassa.
- **Toistuvat kysymykset dokumentoidusta vastauksesta huolimatta paljastavat löydettävyysongelman, eivät dokumentointityön ongelmaa.** Lisäsisältö ei aina ole ratkaisu.
- **Perehdytysaika tuottavaan kontribuutioon on vahva, käytännöllinen sijaismittari** tiedon yleiselle terveydelle, ja se kytkeytyy suoraan aiheen 3.5 yhteistyömittareihin.
- **Tieto, joka elää vain ihmisten päässä, on kestävyysriski,** ei vakaa, kestävä tila, vaikka se toimisi tällä hetkellä kuinka hyvin.
- **Dokumentaatio vanhenee.** Vuosi sitten tarkka sivu voi nyt olla aktiivisesti harhaanjohtava, ja vanhentuneisuutta on seurattava erikseen.

## Suositukset

### Seuraa dokumentaation käyttöä ja vanhentuneisuutta, älä vain olemassaoloa

Jos dokumentaatioalustasi tukee sitä, seuraa, kuinka usein sivuja todella katsotaan, ja erikseen, kuinka kauan sivun viimeisestä päivityksestä on kulunut suhteessa siihen, kuinka usein kuvattu järjestelmä on muuttunut (aiheen 4.3 muuttuvuusdatan vertaaminen on tässä suoraan hyödyllistä). Sivu, joka kuvaa järjestelmää, joka on muuttunut merkittävästi sivun viimeisen muokkauksen jälkeen, on vahva ehdokas olemaan aktiivisesti harhaanjohtava eikä pelkästään hyödytön. Tämä vanhentuneisuussignaali ansaitsee vähintään yhtä paljon huomiota kuin sen seuraaminen, onko dokumentaatiota ylipäätään olemassa.

### Tarkkaile toistuvia kysymyksiä löydettävyyden signaalina

Jos sama kysymys esitetään toistuvasti tiimin chat-kanavalla tai perehdytyksen aikana, vaikka dokumentoitu vastaus on teknisesti jossain olemassa, kuvio paljastaa löydettävyysongelman: vastaus ei ole siellä, mistä ihmiset sitä luontaisesti etsivät. Kyse ei ole dokumentointityön ongelmasta, jonka lisäkirjoittaminen korjaisi. Seuraa toistuvia kysymyksiä eksplisiittisesti ja käytä niitä priorisoimaan olemassa olevan sisällön uudelleenjärjestelyä tai parempaa esiin nostamista uuden kirjoittamisen sijaan.

### Mittaa perehdytysaika ensimmäiseen merkittävään, itsenäiseen kontribuutioon

Tämä mittari, joka esiteltiin aiheessa 3.5 yhteistyön signaalina, on yhtä lailla dokumentaation ja tiedon terveyden signaali koodin puolelta. Johdonmukaisen lyhyt, ennustettava perehdytysaika viittaa aidosti saavutettavaan, tarkkaan tietoon. Pitkä, voimakkaasti vaihteleva aika, erityisesti jos se riippuu paljon siitä, kuka sattuu perehdyttämään uuden tiimin jäsenen, viittaa tietoon, joka on vaarallisen keskittynyt yksittäisten ihmisten muistiin eikä pysyvään kirjalliseen muotoon.

### Tunnista ja priorisoi eksplisiittisesti dokumentoimattomat kriittisen tiedon alueet

Vertaa tiedon keskittymisen dataa (aiheen 3.5 [bussikerroin](https://en.wikipedia.org/wiki/Bus_factor)-analyysi) dokumentaation kattavuuteen: järjestelmä, jonka bussikerroin on yksi ja jolla ei ole mitään merkityksellistä dokumentaatiota, on vakava, kasautuva riski, joka ansaitsee etusijaa hyvin dokumentoituun järjestelmään nähden, jolla on sama matala bussikerroin. Dokumentaatio tarjoaa ainakin osittaisen lievityksen, kun omistautunutta seuraajaa koulutetaan.

### Kohtele dokumentaatiovelkaa luokkana teknisen velkajonosi sisällä

Sen sijaan, että seuraisit dokumentaatioaukkoja erikseen ja epämuodollisesti, sisällytä merkittävät dokumentaatioaukot samaan näkyvään, kvantifioituun jonoon, joka kuvataan aiheessa 4.5, erityisesti kriittisille, matalan bussikertoimen järjestelmille. Näin dokumentaatiotyö kilpailee reilusti priorisoidusta kapasiteetista eikä jää ikuisesti lykättyyn, koodikeskeistä velan korjaamista matalamman statuksen tehtävään.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei dokumentaation mittausta | Vähän lisätyötä | Tietoriski pysyy näkymättömänä, kunnes kriisi pakottaa sen esiin |
| Dokumentaation olemassaolon laskeminen (sivumäärä, README:n olemassaolo) | Yksinkertainen, helppo raportoida | Ei kerro mitään hyödyllisyydestä, tarkkuudesta tai löydettävyydestä |
| Käytön ja vanhentuneisuuden seuranta | Paljastaa todellisen hyödyllisyyden ja rapautumisen | Vaatii dokumentaatioalustan analytiikkaa ja jatkuvaa katselmointikuria |
| Perehdytysaika sijaismittarina | Käytännöllinen, konkreettinen, kytkeytyy suoraan todelliseen liiketoimintavaikutukseen | Epäsuora; myös muut tekijät kuin dokumentaatio vaikuttavat perehdytyksen nopeuteen |

Keskeinen jännite on **mitattavuus verrattuna merkitykseen**. Dokumentaation olemassaolo on triviaalin helppo laskea eikä kerro juuri mitään hyödyllistä. Aito hyödyllisyys, eli se, voiko joku todella löytää dokumentoidun tiedon ja luottaa siihen tarvitessaan, on se, mikä oikeasti on tärkeää, mutta sitä on vaikeampi mitata suoraan. Ratkaise jännite käyttämällä tämän aiheen suosittelemia sijaismittareita, käyttökuvioita, vanhentuneisuutta suhteessa muuttuvuuteen, toistuvia kysymyksiä ja perehdytysaikaa, yhdessä. Yksikään niistä ei ole täydellinen, mutta niiden yhtyminen on paljon merkityksellisempää kuin pelkkä olemassaolon laskeminen.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Onko kriittisimmällä, matalimman bussikertoimen järjestelmällämme merkityksellistä, tarkkaa dokumentaatiota, vai veisikö lähtevä asiantuntija mukanaan suurimman osan todellisesta tiedosta?** Tämä on tämän aiheen keskeisen huolen terävin ja konkreettisin muoto. Vastaa siihen ensin rehellisesti yhden riskialttiimman järjestelmäsi osalta.

2. **Mikä kysymys esitetään toistuvasti tiimimme chatissa, vaikka dokumentoitu vastaus on jossain olemassa?** Jos voit nimetä sellaisen heti, se on löydettävyysongelma, joka kannattaa korjata suoraan, todennäköisesti järjestämällä olemassa oleva sisältö uudelleen tai nostamalla se paremmin esiin uuden kirjoittamisen sijaan.

3. **Kuinka kauan viimeisimmältä uudelta tiimin jäseneltämme kesti tehdä ensimmäinen merkittävä, itsenäinen kontribuutio, ja miten se vertautui häntä edeltäneeseen jäseneen?** Suuri, selittämätön vaihtelu yksilöiden välillä viittaa usein tietoon, joka riippuu paljon siitä, kuka sattuu perehdyttämään, eikä pysyvään, saavutettavaan dokumentaatioon.

4. **Milloin viimeksi tarkistimme, onko jokin dokumentaatio yhä tarkkaa suhteessa siihen, kuinka paljon taustalla oleva järjestelmä on muuttunut sen kirjoittamisen jälkeen?** Jos rehellinen vastaus on "emme tarkista tätä järjestelmällisesti", tämä vanhentuneisuusriski on todennäköisesti suurempi kuin kukaan tällä hetkellä olettaa.

5. **Sisältääkö tekninen velkajonomme (aihe 4.5) dokumentaatioaukkoja, vai lykätäänkö dokumentaatiotyötä ikuisesti koodikorjauksia matalamman statuksen tehtävänä?** Tarkista todellinen jonosi ja katso, onko dokumentaatiovelka näkyvää ja kilpailemassa priorisoidusta kapasiteetista vai käytännössä näkymätöntä.

6. **Mitä se maksaisi meille, jos ne yksi tai kaksi ihmistä, jotka ymmärtävät kriittisintä, vähiten dokumentoitua järjestelmäämme, lähtisivät saman vuoden aikana?** Tähän konkreettiseen, epämukavaan kysymykseen kannattaa vastata rehellisesti sen sijaan, että kohtelisit riskiä abstraktina tai epätodennäköisenä.

## Sektorinäkökulma

**Startup-yritys.** Muodolliset dokumentaatiomittarit ovat yleensä tarpeettomia pienessä tiimissä, jossa tieto leviää jatkuvan, suoran keskustelun kautta. Seurattava riski on sama bussikerroinkeskittymä, josta aihe 3.5 varoittaa, nyt erityisesti dokumentaatioon sovellettuna: kun tiimi kasvaa yli koon, jossa kaikki puhuvat päivittäin, epämuodollisesti hyvin toiminut dokumentoimaton tieto muuttuu todelliseksi vastuuksi.

**Pieni yritys.** Dokumentoi ensin yksi kriittisin, vähiten redundantti järjestelmäsi, vaikka epämuodollisesti, sen sijaan että yrittäisit kattavaa dokumentaatiota kaikesta. Lyhyt, tarkka dokumentti, joka kattaa riskialttiimman yksittäisen vikaantumispisteesi, tuottaa enemmän todellista arvoa kuin laaja mutta pinnallinen kattavuus kaikkialla.

**Suuryritys.** Dokumentaation vanhentuneisuus ja löydettävyys skaalautuvat tässä molemmat huonosti, koska suuri organisaatio kerää dokumentaatiota monissa tiimeissä ja alustoilla nopeammin kuin kukaan ehtii pitää sitä ajan tasalla tai johdonmukaisesti järjestettynä. Investoi dokumentaatioalustan analytiikkaan, jotta voit seurata käyttöä ja vanhentuneisuutta laajassa mittakaavassa, ja kohtele dokumentaatiovelkaa ensimmäisen luokan kategoriana organisaation laajuisessa velkajonossa.

**Julkishallinto.** Julkisen sektorin organisaatioissa yleinen pitkä palvelusaika voi peittää vakavan dokumentoimattoman tiedon riskin näennäisen vakauden taakse, sillä saman henkilön viisitoista vuotta ylläpitämä järjestelmä voi toimia täysin hyvin, kunnes kyseinen henkilö jää eläkkeelle. Kohtele dokumentaation terveyttä eksplisiittisesti toiminnan jatkuvuuden kysymyksenä, joka kytkeytyy suoraan henkilöstö- ja seuraajasuunnitteluun, ei pelkkänä insinöörin mukavuutena.

## Esimerkit

**Suuryritys.** Rahoituspalveluyritys huomasi aiheeseen liittymättömän uudelleenorganisoinnin yhteydessä, ettei sen keskeisellä riskinlaskentamoottorilla ollut merkityksellistä dokumentaatiota muutamaa vanhentunutta koodikommenttia lukuun ottamatta, ja kaksi sen parhaiten ymmärtänyttä kehittäjää siirrettiin samanaikaisesti uuteen hankkeeseen. Kiireellinen dokumentointityö, joka tehtiin merkittävän aikapaineen alla, poimi ja tallensi kriittisen tiedon ennen siirtojen voimaantuloa. Prosessi vei kuitenkin useita viikkoja senior-kehittäjien omistautunutta työaikaa, joka olisi voitu jakaa paljon pidemmälle ja halvemmaksi, jos dokumentaation terveyttä olisi seurattu ja priorisoitu ennakoivasti sen sijaan, että se huomattiin hätätilanteena.

**Julkishallinto.** Osavaltion hallinnon vuosikymmeniä vanha asianhallintajärjestelmä oli kerännyt vuosien varrella runsaasti dokumentaatiota, mutta löydettävyysauditointi osoitti, etteivät uudet tiimin jäsenet löytäneet johdonmukaisesti olemassa olevaa asiaankuuluvaa dokumentaatiota ja kysyivät toistuvasti samoja muutamia kysymyksiä tiimikanavilla. Näihin kysymyksiin oli itse asiassa jo vastattu jossain viraston laajassa, huonosti järjestetyssä dokumentaatioalustassa. Uuden sisällön kirjoittamisen sijaan virasto investoi olemassa olevan dokumentaationsa haun ja navigointirakenteen uudelleenjärjestelyyn ja parantamiseen. Seurantakysely osoitti toistuvien kysymysten mitattavan vähenemisen ja merkittävästi nopeamman koetun perehdytyksen uudelle henkilöstölle ilman, että yhtäkään uutta sisältösivua lisättiin.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Dokumentaation terveyden tietoisen mittaamisen ja hallinnan tuotto on vältetty kriisikustannus: yllä oleva rahoituspalveluesimerkki näyttää eron ennakoivan, asteittaisen tiedon talteenoton ja kalliin, tiivistetyn hätätyön välillä, johon suunnittelematon henkilöstöliike pakotti. Dokumentoimaton kriittinen tieto on pysyvä vastuu, joka ei näkyvästi maksa mitään, kunnes siitä tulee yhtäkkiä erittäin kallis.

Omistamisen kokonaiskustannukset (TCO) ovat enimmäkseen kuria seurata tämän aiheen suosittelemia sijaismittareita, käyttökuvioita, vanhentuneisuutta, toistuvia kysymyksiä ja perehdytysaikaa, sekä halua sisällyttää dokumentaatioaukot priorisoituun jonoon sen sijaan, että niitä kohdeltaisiin ikuisesti koodikeskeistä työtä matalampina. Tämä kuri maksaa paljon vähemmän kuin kriisitilan tiedonpoiminta, jonka rahoituspalveluesimerkki osoittaa vaihtoehdoksi.

## Antimallit ja sudenkuopat

- **Dokumentaation olemassaolon laskeminen hyödyllisyyden sijaan:** ei kerro juuri mitään siitä, onko tieto todella saatavilla tarvittaessa.
- **Lisäsisällön kirjoittaminen toistuviin kysymyksiin tarkistamatta ensin löydettävyyttä:** ratkaisee usein täysin väärää ongelmaa.
- **Dokumentaation vanhentuneisuuden tarkistamatta jättäminen suhteessa siihen, kuinka paljon järjestelmä on muuttunut:** riskinä aktiivisesti harhaanjohtava, vanhentunut sisältö.
- **Dokumentaatiovelan kohtelu ikuisesti koodivelkaa matalampana:** jättää sen krooniseksi, matalalle priorisoiduksi ja näkymättömäksi jonossa.
- **Näennäisen vakauden, järjestelmän, joka ei ole muuttunut vuosiin, sekoittaminen pieneen riskiin:** voi peittää vakavan, dokumentoimattoman bussikerroinongelman järjestelmän taakse, joka ei vain ole vielä tarvinnut ainoaa asiantuntijaansa.
- **Kriittisen dokumentoimattoman tiedon löytäminen vasta hätätilanteessa tapahtuvan henkilöstösiirron yhteydessä:** kallis, vältettävissä oleva virhetila, jonka estämiseksi tämä aihe on rakennettu.

## Kypsyysmalli

- **Taso 1, Aloittava:** Dokumentaation terveyttä ei mitata; tiedon keskittyminen ja vanhentuneisuusriski huomataan vain kriisin kautta.
- **Taso 2, Kehittyvä:** Jonkin verran dokumentaatiota on olemassa, mutta käyttöä, vanhentuneisuutta tai löydettävyyttä ei seurata järjestelmällisesti.
- **Taso 3, Vakioitu:** Käyttöä ja vanhentuneisuutta seurataan kriittisille järjestelmille, ja perehdytysaikaa mitataan tiedon terveyden sijaismittarina koko organisaatiossa.
- **Taso 4, Hallittu:** Dokumentaatioaukot sisällytetään priorisoituun tekniseen velkajonoon ja niitä verrataan bussikerroinriskiin vakavimpien yhdistettyjen riskien tunnistamiseksi.
- **Taso 5, Orkestroitu:** Organisaatio tunnistaa ja käsittelee dokumentoimattoman kriittisen tiedon riskin ennakoivasti ennen kuin henkilöstömuutos pakottaa asian esiin, ja voi osoittaa tiettyjä, mitattavia perehdytyksen tai häiriöihin reagoinnin parannuksia, jotka johtuvat dokumentaatioinvestoinnista.

## Keskusteluideoita

1. Mikä on tällä hetkellä vakavin yhdistelmä matalaa bussikerrointa ja heikkoa dokumentaatiota?
2. Mikä kysymys esitetään toistuvasti, vaikka dokumentoitu vastaus on olemassa?
3. Mistä tietäisimme, että kriittinen dokumentaatio olisi vanhentunut ja harhaanjohtavaa?
4. Sisältääkö tekninen velkajonomme dokumentaatioaukkoja, vai ovatko ne näkymättömiä?
5. Mitä se maksaisi meille, jos vähiten dokumentoidun järjestelmämme ainoa asiantuntija lähtisi tänä vuonna?

## Keskeiset opit

- Mittaa **hyödyllisyyttä, ei olemassaoloa**: auttaako dokumentaatio todella,
  sijaismittareilla kuten käyttökuviot, vanhentuneisuus ja toistuvat
  kysymykset.
- **Toistuvat kysymykset dokumentoidusta vastauksesta huolimatta** paljastavat
  löydettävyysongelman, eivät välttämättä sisällöntuotannon ongelmaa.
- **Perehdytysaika tuottavaan kontribuutioon** on vahva, käytännöllinen
  sijaismittari tiedon yleiselle terveydelle.
- **Dokumentoimaton kriittinen tieto on kasautuva riski**, erityisesti
  yhdistettynä matalaan bussikertoimeen (aihe 3.5); se ei näkyvästi maksa
  mitään, kunnes se maksaa yhtäkkiä paljon.
- Sisällytä **dokumentaatioaukot tekniseen velkajonoosi** (aihe 4.5), jotta ne
  kilpailevat reilusti priorisoidusta kapasiteetista.

## Lähteet ja lisälukemista

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*,
  Jared Bhatti, Zachariah Goldberg, Ted Kubaska ja Sarah Moir (käytännön
  dokumentaatiokäytäntöjä kehitystiimeille).
- *A Philosophy of Software Design*, John Ousterhout (dokumentaation,
  monimutkaisuuden ja ylläpidettävyyden suhde).
- *Team Topologies*, Matthew Skelton ja Manuel Pais (keskittyneen ja
  hajautetun tiedon organisaatiosuunnittelun seuraukset).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble ja Gene Kim (dokumentaatio yhtenä toimituskyvyn kanssa korreloivista
  kyvykkyyksistä).
