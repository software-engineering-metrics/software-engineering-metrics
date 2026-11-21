# 4.3 Koodin muuttuvuus ja kuumien pisteiden analyysi

## Yleiskatsaus ja perustelut

**Koodin muuttuvuus** (code churn) mittaa, kuinka usein tiedosto tai moduuli muuttuu ajan myötä: lisätyt, muokatut ja poistetut rivit peräkkäisten commitien yli. Yksinään muuttuvuus on melko heikko signaali: jotkin tiedostot muuttuvat usein, koska ne ovat aktiivisessa, terveessä kehityksessä, ja jotkin harvoin, koska ne ovat vakaita ja oikein toimivia, ei siksi, että niitä laiminlyötäisiin. Tämän aiheen lähestymistavan todellinen diagnostinen voima syntyy muuttuvuuden yhdistämisestä monimutkaisuuteen (aihe 4.1): tiedosto, joka sekä muuttuu usein että on erittäin monimutkainen, **kuuma piste** (hotspot), on suhteettoman todennäköisesti virheiden lähde ja tiimin nopeuden jarru, ja empiirinen tutkimus vahvistaa tämän johdonmukaisesti monissa koodikannoissa ja organisaatioissa.

**Kuumien pisteiden analyysi**, jota Adam Tornhillin ohjelmistoanalytiikan työ on tehnyt tunnetuksi, on erityisen arvokas, koska se ei vaadi manuaalista kartoitusta tai subjektiivista harkintaa kohteidensa löytämiseen. [Versionhallinnan](https://en.wikipedia.org/wiki/Version_control) historia sisältää jo kaiken tarpeellisen sekä muuttuvuuden että, yhdistettynä staattisen analyysin työkaluihin, monimutkaisuuden laskemiseksi automaattisesti koodikannan jokaiselle tiedostolle. Tämän ansiosta tiimi tai organisaatio voi tunnistaa todellisen näytön perusteella, ei anekdootin tai retrospektiivin äänekkäimmän valituksen, täsmälleen sen, mikä pieni osa koodikannasta ansaitsee refaktorointihuomion ensin.

Suurille tiimeille kuumien pisteiden analyysi ratkaisee aidon kohdentamisongelman: koodikannassa, jossa on satoja tuhansia rivejä, on paljon enemmän koodia kuin yksikään tiimi voi sallia itselleen refaktoroida kattavasti, ja intuitio siitä, missä pahimmat ongelmat ovat, on usein väärässä, vinoutunut sen mukaan, kuka valitti viimeksi tai minkä tiedoston kokenut insinööri sattuu inhoamaan. Suuryritykset ja julkishallinto, jotka hallinnoivat suuria, pitkäikäisiä koodikantoja, nojaavat tähän dataohjattuun priorisointiin ohjatakseen aidosti niukan refaktorointibudjetin koodiin, joka tuottaa suurimman tuoton.

## Keskeiset periaatteet

- **Pelkkä muuttuvuus on heikko signaali. Muuttuvuus yhdistettynä monimutkaisuuteen on vahva.** Yhdistelmä, ei kumpikaan mittari yksin, tunnistaa aidon kuuman pisteen.
- **Kuumien pisteiden analyysi ei vaadi manuaalista kartoitusta.** Versionhallinnan historia sisältää jo kaiken tarpeellisen sen automaattiseen laskemiseen.
- **Kuuma piste on priorisointisignaali, ei automaattinen tuomio.** Ihmisen harkintaa tarvitaan yhä sen päättämiseen, mitä toimenpidettä tietty kuuma piste edellyttää.
- **Usein tapahtuva muutos ei ole luonnostaan huono.** Jokin muuttuvuus heijastaa tervettä, aktiivista kehitystä eikä laatuongelmaa.
- **Tämä analyysi skaalautuu juuri siellä, missä intuitio pettää:** suurissa koodikannoissa, jotka ovat liian isoja kenenkään yksin kartoitettaviksi ja priorisoitaviksi pelkän tunteen varassa.

## Suositukset

### Laske muuttuvuus ja monimutkaisuus yhdessä ja järjestä niiden yhdistelmän mukaan

Pura tiedostokohtainen muutostiheys versionhallinnan historiasta mielekkäältä aikaikkunalta, tyypillisesti kuudesta kuukaudesta vuoteen, ja yhdistä se samojen tiedostojen monimutkaisuusmittariin (aihe 4.1). Järjestä tiedostot yhdistelmän mukaan, yleisesti muuttuvuuden ja monimutkaisuuden tulon mukaan, kummankaan mittarin yksin sijaan, koska juuri tämän yhdistelmän taustalla oleva tutkimus yhdistää johdonmukaisesti kohonneisiin virheprosentteihin ja ylläpitokustannuksiin.

### Tutki kärkikuumat pisteet ihmisen harkinnalla ennen toimimista

Järjestetty kuumien pisteiden lista tunnistaa huomion ehdokkaita, ei automaattista toimintalistaa. Tutki jokaista kärkikuumaa pistettäsi ihmisen silmällä: onko tämä aidosti huonosti suunniteltua koodia, joka tarvitsee refaktorointia, vai tiedosto, joka perustellusti tarvitsee usein muutoksia, koska se on aktiivisen, kehittyvän liiketoimintalogiikan keskellä, jolloin prioriteetti voi olla paremmat testit tai selkeämpi dokumentaatio rakenteellisen uudelleenkirjoituksen sijaan. Tämä heijastaa aiheen 4.1 erottelua olennaisen ja sattumanvaraisen monimutkaisuuden välillä sovellettuna tässä yhdistettyyn muuttuvuus-monimutkaisuussignaaliin.

### Vertaa kuumia pisteitä häiriö- ja virhedataan

Kun mahdollista, tarkista, korreloivatko tunnistetut kuumat pisteesi todellisten tuotantohäiriöiden (aihe 6.2) tai karanneiden virheiden datan (aihe 5.1) kanssa. Vahva korrelaatio validoi kuumien pisteiden analyysin aidosti ennustavaksi nimenomaan sinun koodikannallesi ja vahvistaa liiketoimintaperustelua sen pohjalta toimimiselle. Heikko tai puuttuva korrelaatio viittaa joko datan laatuongelmaan tai siihen, etteivät muuttuvuus ja monimutkaisuus ole sinun erityisessä kontekstissasi oikea signaalien yhdistelmä priorisoinnin perustaksi.

### Seuraa kuumien pisteiden trendiä peräkkäisissä analyyseissä, älä vain yhtä tilannekuvaa

Aja kuumien pisteiden analyysi uudelleen määräajoin, neljännesvuosittain on yleistä, ja seuraa, paranevatko, pahenevatko vai ratkeavatko aiemmin tunnistetut kuumat pisteet ja nouseeko uusia. Kuuma piste, joka säilyy useiden analyysikierrosten yli huolimatta toistuvasta liputtamisesta, osoittaa joko sen, ettei korjaustyötä ole todellisuudessa tehty, tai sen, ettei aiempi korjausyritys käsitellyt todellista taustalla olevaa ongelmaa.

### Käytä kuumien pisteiden dataa tiimitason priorisointikeskustelujen tueksi, ei korvaamaan niitä

Esitä kuumien pisteiden analyysi näyttönä priorisointikeskustelussa, ei automaattisena toimeksiantona, joka ohittaa tiimin oman kontekstuaalisen harkinnan siitä, mikä on tärkeintä juuri nyt. Tiimillä voi olla hyviä, oikeutettuja syitä jättää tunnettu kuuma piste väliaikaisesti vähemmälle huomiolle, esimerkiksi tuleva suunniteltu uudelleenkirjoitus tekee asteittaisesta refaktoroinnista hukkavaivaa, ja analyysin pitäisi ohjata tuota keskustelua, ei korvata sitä.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Intuitioon perustuva priorisointi | Nopea, ei vaadi työkaluja, hyödyntää tiimin kontekstuaalista tietoa | Vinoutunut tuoreuden, henkilökohtaisen mieltymyksen ja äänekkäimmän valittajan mukaan |
| Pelkkä muuttuvuus | Yksinkertainen laskea | Heikko signaali yksinään, usein tapahtuva muutos ei ole luonnostaan huono |
| Muuttuvuus yhdistettynä monimutkaisuuteen (kuumien pisteiden analyysi) | Vahva, näyttöön perustuva, automaattinen olemassa olevasta datasta | Vaatii kahden tietolähteen yhdistämistä ja tulosten tulkintaa harkinnalla |
| Kuumien pisteiden analyysi verrattuna häiriödataan | Validoitu, vahvin näyttö priorisoinnille | Vaatii luotettavan häiriöiden ja koodin välisen linkityksen, jota kaikilla organisaatioilla ei ole |

Keskeinen jännite on **näyttö versus konteksti**. Kuumien pisteiden analyysi tarjoaa objektiivista, skaalautuvaa näyttöä, jota intuitioon perustuva priorisointi ei voi vastata suuren, vieraan tai pitkäikäisen koodikannan koossa, mutta siitä puuttuu kontekstuaalinen harkinta, joka tiimillä on siitä, miksi tietty kuuma piste on tärkeä tai ei ole juuri nyt. Ratkaise jännite kohtelemalla kuumien pisteiden analyysiä priorisointikeskustelun näyttöpohjana, yhdistettynä tiimin omaan kontekstuaaliseen harkintaan ajoituksesta ja kompromisseista, mutta ei koskaan sen korvikkeena.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Mitkä ovat viisi kärkikuumaa pistettämme, järjestettynä muuttuvuuden ja monimutkaisuuden yhdistelmän mukaan, ja vastaisiko tuo järjestys tiimimme intuitiota siitä, missä pahimmat ongelmamme ovat?** Aja analyysi ja vertaa tulosta siihen, mitä tiimisi olisi arvannut ennen datan näkemistä. Poikkeamat ovat usein arvokkain löydös.

2. **Korreloivatko tunnistetut kuumat pisteemme todellisten tuotantohäiriöiden tai karanneiden virheiden datan kanssa?** Jos sinulla on data tämän tarkistamiseen, tee se suoraan. Jos ei ole, myös tuo aukko on nimeämisen arvoinen asia, jota kohti rakentaa.

3. **Onko kärkikuuman pisteemme taustalla oleva ongelma olennaista monimutkaisuutta, joka perustellusti vaatii usein muutoksia, vai sattumanvaraista monimutkaisuutta, jonka refaktorointi voisi aidosti korjata?** Käykää tiedosto läpi yhdessä ja tehkää tämä arvio eksplisiittisesti sen sijaan, että oletatte jommankumman vastauksen.

4. **Onko aiemmin tunnistettu kuuma piste säilynyt usean analyysikierroksen yli huolimatta liputtamisesta?** Jos on, tutki rehellisesti miksi: korjausta ei koskaan oikeasti yritetty, tai aiempi yritys ei käsitellyt todellista taustalla olevaa syytä.

5. **Priorisoimmeko refaktorointityötä tällä hetkellä näytön vai sen perusteella, kuka valitti viimeksi tai äänekkäimmin?** Ole rehellinen tiimisi todellisesta nykyisestä priorisointiprosessista ja siitä, miten se vertautuu siihen, mitä näyttöön perustuva kuumien pisteiden analyysi ehdottaisi.

6. **Mitä meille maksaisi virheprosentissa tai toimituksen hidastumisessa jättää nykyinen kärkikuuma pisteemme käsittelemättä vielä vuodeksi?** Tämä kysymys pakottaa konkreettisen kustannusarvion, joka voi ankkuroida priorisointipäätöksen, sen sijaan että kuuma piste jäisi abstraktiksi, helposti vähemmälle huomiolle jätettäväksi huoleksi.

## Sektorinäkökulma

**Startup-yritys.** Muodollinen kuumien pisteiden analyysi on yleensä tarpeeton pienellä, nuorella koodikannalla, jota koko tiimi yhä kantaa kollektiivisesti päässään. Tekniikasta tulee arvokas nimenomaan sen jälkeen, kun koodikanta on kasvanut yli koon, jossa kukaan yksittäinen ei voi luotettavasti tunnistaa pahimpia alueita pelkästä muistista, usein jossain jatkuvan kasvun ensimmäisen tai toisen vuoden aikana.

**Pieni yritys.** Ilmaiset tai edulliset työkalut voivat purkaa muuttuvuusdatan suoraan olemassa olevasta versionhallinnan historiasta vähäisellä käyttöönotolla. Yhdistä se mihin tahansa monimutkaisuusdataan, jonka nykyinen lintterisi tai staattisen analyysin työkalusi jo raportoi, sen sijaan että investoisit omistettuun kaupalliseen kuumien pisteiden analyysiohjelmistoon tässä mittakaavassa.

**Suuryritys.** Kuumien pisteiden analyysi on se paikka, jossa näyttöön perustuva priorisointi tuottaa eniten, koska intuitio pettää aidosti satoja palveluita ja tuhansia tiedostoja kattavan koodikannan mittakaavassa. Panosta tämän analyysin säännölliseen ajoon koko koodikannassa ja vertaamiseen häiriödataan rakentaaksesi validoidun, puolustettavan perustelun refaktorointi-investoinnille.

**Julkishallinto.** Pitkäikäiset järjestelmät, joskus vuosikymmeniä vanhat, sopivat luontevasti kuumien pisteiden analyysiin, koska kertynyt versionhallinnan historia antaa rikkaan, pitkäaikaisen signaalin siitä, mitkä järjestelmän osat ovat osoittautuneet aidosti ongelmallisiksi ajan mittaan. Tämä näyttöön perustuva lähestymistapa on myös vakuuttava, konkreettinen työkalu uudistusinvestoinnin perusteluun sidosryhmille, jotka tarvitsevat enemmän kuin insinöörin epävirallisen mielipiteen rahoituksen hyväksymiseen.

## Esimerkit

**Suuryritys.** Vakuutusyhtiön korvauskäsittelyalusta, joka käsitti yli kaksi miljoonaa koodiriviä kymmenissä palveluissa, oli kerännyt vuosien epävirallisia valituksia "korvausvalidointimoduulin" ongelmallisuudesta, mutta mikään muodollinen priorisointi ei ollut koskaan seurannut näistä valituksista. Kuumien pisteiden analyysi, joka yhdisti kuuden kuukauden muuttuvuusdatan monimutkaisuuspisteisiin, tunnisti aivan toisen tiedoston, jaetun valuutanmuunnosapuohjelman, joka oli haudattu syvälle harvoin keskusteltuun riippuvuuteen, todelliseksi kärkikuumaksi pisteeksi, sellaiseksi, joka ei ollut koskaan noussut esiin missään retrospektiivin valituksessa. Vertaaminen häiriödataan vahvisti, että tämä apuohjelma oli osallisena suhteettomassa osassa talouslaskennan virheitä edellisen vuoden aikana, ja tämän tietyn apuohjelman kohdennettu refaktorointi, ei moduulin, jota kaikki olivat epävirallisesti syyttäneet, tuotti mitattavan liittyvien häiriöiden vähenemisen seuraavalla neljänneksellä.

**Julkishallinto.** Osavaltion ajoneuvoviraston vuosikymmeniä vanhalle ajokorttijärjestelmälle tehtiin kuumien pisteiden analyysi osana uudistamisen liiketoimintaperustelua. Analyysi tunnisti pienen tiedostoklusterin, alle 3 % koko koodikannasta, joka vastasi suhteettoman suuresta osasta sekä muuttuvuutta että monimutkaisuutta, ja vertaaminen viraston häiriölokiin osoitti, että sama klusteri vastasi lähes 40 %:sta kaikista raportoiduista järjestelmävirheistä kolmen edellisen vuoden aikana. Tämä konkreettinen, näyttöön perustuva löydös, paljon vakuuttavampi kuin yleinen väite, että "järjestelmä on vanha ja tarvitsee uudistaa", muodostui onnistuneen budjettipyynnön kulmakiveksi kohdennetulle, asteittaiselle uudistustyölle, joka keskittyi nimenomaan tuohon klusteriin, paljon kalliimman koko järjestelmän korvaamisen sijaan.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Kuumien pisteiden analyysin tuotto on kohdennettu, näyttöön perustuva investointi: molemmat yllä olevat esimerkit osoittavat tapauksen, jossa muodollinen analyysi ohjasi refaktorointihuomion pois sieltä, mihin epävirallinen valitus oli sen kohdistanut, sinne, missä data osoitti ongelman todella olevan, tuottaen mitattavasti paremman tuoton kuin kohdentumaton tai intuitioon perustuva investointi olisi tuottanut.

Omistamisen kokonaiskustannus on matala, koska muuttuvuusdata tulee suoraan olemassa olevasta versionhallinnan historiasta ja monimutkaisuusdata on yleensä jo saatavilla staattisen analyysin työkaluista (aihe 4.4). Pääinvestointi on määräajoin tehtävä analyysityö ja ihmisen harkinta-aika tulosten tulkintaan ja sen päättämiseen, mitä toimenpidettä kukin tunnistettu kuuma piste edellyttää.

## Antimallit ja sudenkuopat

- **Pelkän muuttuvuuden käyttö ilman monimutkaisuutta:** heikko signaali yksinään, joka voi liputtaa terveen, aktiivisesti kehitetyn koodin väärän positiivisen tapaukseksi.
- **Kuumien pisteiden järjestyksen käsittely automaattisena toimintalistana ilman ihmisen harkintaa:** missaa olennaisen ja sattumanvaraisen erottelun, joka määrää oikean vastauksen.
- **Refaktoroinnin priorisointi äänekkäimmän valituksen perusteella näytön sijaan:** ohjaa usein vaivan pois sieltä, missä data osoittaa ongelman todella olevan.
- **Kuumien pisteiden vertaamatta jättäminen häiriö- tai virhedataan:** missaa validointivaiheen, joka vahvistaa perustelua analyysin pohjalta toimimiselle.
- **Analyysin ajaminen kerran ja sen toistamatta jättäminen:** missaa sen, toimiiko korjaustyö todella ajan myötä.
- **Jatkuvasti liputetun kuuman pisteen sivuuttaminen tutkimatta, miksi korjaus ei ole pitänyt:** tuhlaa toistuvan analyysin diagnostisen arvon.

## Kypsyysmalli

- **Taso 1, Aloittava:** Refaktorointiprioriteetit asetetaan intuitiolla tai valitusten määrällä, eikä mikään muuttuvuus- tai monimutkaisuusdata ohjaa päätöstä.
- **Taso 2, Kehittyvä:** Jotkin tiimit tarkistavat epävirallisesti muuttuvuus- tai monimutkaisuusdataa, mutta johdonmukaista, koko organisaation kuumien pisteiden analyysikäytäntöä ei ole.
- **Taso 3, Vakioitu:** Muuttuvuuden ja monimutkaisuuden yhdistävä kuumien pisteiden analyysi ajetaan säännöllisesti ja se ohjaa johdonmukaisesti refaktoroinnin priorisointia koko organisaatiossa.
- **Taso 4, Hallittu:** Kuumia pisteitä verrataan häiriö- ja virhedataan analyysin validoimiseksi, ja trendiä peräkkäisten kierrosten yli seurataan aktiivisesti.
- **Taso 5, Orkestroitu:** Organisaatio voi osoittaa tiettyjä, mitattavia virheprosentin tai toimituksen parannuksia kuumien pisteiden ohjaamasta refaktorointi-investoinnista, ja analyysi on rutiininomainen, luotettu syöte ohjelmistotyön investointipäätöksiin.

## Keskusteluideoita

1. Miltä kärkikuumien pisteiden listamme näyttäisi, jos ajaisimme tämän analyysin tänään?
2. Vastaisiko lista tiimimme nykyistä epävirallista tuntumaa pahimmista ongelma-alueistamme vai ristiriidassa sen kanssa?
3. Onko meillä data kuumien pisteiden vertaamiseen todellisiin häiriöihin?
4. Onko tunnettu ongelma-alue säilynyt aiemmista korjausyrityksistä huolimatta, ja miksi?
5. Mitä meille maksaisi jättää nykyinen kärkikuuma pisteemme käsittelemättä vielä vuodeksi?

## Keskeiset opit

- **Muuttuvuus yhdistettynä monimutkaisuuteen** tunnistaa aidot kuumat pisteet paljon luotettavammin kuin kumpikaan mittari yksin.
- Kuumien pisteiden analyysi ei vaadi **manuaalista kartoitusta**. Sen voi laskea automaattisesti olemassa olevasta versionhallinta- ja staattisen analyysin datasta.
- Kohtele kuumien pisteiden järjestystä **priorisoinnin näyttönä**, ei automaattisena tuomiona. Ihmisen harkintaa tarvitaan yhä.
- **Vertaa kuumia pisteitä häiriö- ja virhedataan** analyysin validoimiseksi ja perustelun vahvistamiseksi sen pohjalta toimimiselle.
- Seuraa kuumia pisteitä **peräkkäisillä analyysikierroksilla** varmistaaksesi, että korjaus todella toimii, älä vain kerran tilannekuvana.

## Lähteet ja lisälukemista

- *Your Code as a Crime Scene*, by Adam Tornhill (perusteos kuumien pisteiden analyysistä, joka yhdistää muuttuvuuden ja monimutkaisuuden versionhallinnan datasta).
- *Software Design X-Rays*, by Adam Tornhill (lisää tekniikoita käyttäytymiseen perustuvaan koodianalyysiin versionhallinnan historiaa käyttäen).
- Nagappan, Nachiappan, and Thomas Ball, "Use of Relative Code Churn Measures to Predict System Defect Density," *ICSE* (2005): empiiristä tutkimusta muuttuvuuden ja virhetiheyden suhteesta.
- *Refactoring: Improving the Design of Existing Code*, by Martin Fowler (tekniikoita sattumanvaraisen monimutkaisuuden käsittelyyn sen tunnistamisen jälkeen).
