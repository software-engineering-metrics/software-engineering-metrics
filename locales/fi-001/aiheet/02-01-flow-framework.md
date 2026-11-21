# 2.1 Flow Framework

## Yleiskatsaus ja perustelut

**Flow Framework** on johtamisen ja rakenteen malli, jonka loi Mik Kersten ja joka julkaistiin hänen vuoden 2018 kirjassaan *Project to Product*. Se on olemassa vastaamaan kysymykseen, johon pelkät putkimittarit eivät pysty: ei vain kuinka nopeasti ja turvallisesti koodi liikkuu commitista tuotantoon, vaan millaista arvoa putken läpi ylipäätään kulkee ja heijastaako tuo sekoitus liiketoiminnan todellista strategiaa. Viitekehys kohtelee ohjelmistotoimitusta **[arvovirtana](https://en.wikipedia.org/wiki/Value_stream)**, päästä päähän ulottuvana toimintojen sarjana, joka muuttaa idean asiakkaan saamaksi arvoksi, lainaten suoraan lean-valmistuksen arvovirtakuvauksen perinteestä.

Tämä kirja käyttää Flow Frameworkia osan 2 jäsentävänä rakenteena. Aihe 2.2 esittelee sen neljä flow-kohdetta, aiheet 2.3 ja 2.4 sen viisi flow-mittaria, aihe 2.8 jäljittää nuo mittarit alkuperäänsä klassisessa Lean-arvovirtakuvauksessa, ja aihe 2.10 kattaa DORA-mittarit kapeampana, putkikeskeisenä viitekehyksenä, jolla tämä osa ei enää aloita. Se on tietoinen valinta, ei DORA:n tutkimuksen väheksymistä. DORA mittaa järjestelmän läpivirtausta ja vakautta aidolla tilastollisella ankaruudella, mutta se on hiljaa kysymyksestä, josta liiketoimintajohtaja välittää eniten: kaikesta siitä, mitä ohjelmistotuotanto toimitti tällä neljänneksellä, kuinka paljon oli uutta asiakasarvoa ja kuinka paljon kului hiljaa virheiden korjaamiseen, riskien hallintaan tai velan lyhentämiseen. Flow Framework on olemassa nimenomaan tekemään tuon sekoituksen näkyväksi.

Suurille tiimeille tämä ero ei ole akateeminen. Kymmeniä arvovirtoja ajava alustaorganisaatio voi esittää erinomaisia DORA-lukuja, nopeita, tiheitä ja vakaita julkaisuja, samalla kun sen todellinen tuotetuotos on hiljaa ajautunut lähes puhtaaseen ylläpitotyöhön. Kuvio on näkymätön mittaristolle, joka mittaa vain putken mekaniikkaa. Suuryritykset ja julkishallinto, joiden täytyy perustella ohjelmistoinvestoinnit sidosryhmille, jotka ajattelevat liiketoiminnan eikä putken termein, tarvitsevat sanaston, joka yhdistää toimitustoiminnan strategiseen tarkoitukseen. Sen tämä viitekehys tarjoaa.

## Keskeiset periaatteet

- **Arvovirta on mittauksen yksikkö, ei tiimi eikä putki.** Se ulottuu asiakkaan tai liiketoiminnan tarpeesta toimitettuun tulokseen ylittäen kaikki ne tiimirajat, jotka työ todella ylittää.
- **Flow-kohteet tekevät "mitä" näkyväksi, ei vain "kuinka nopeasti".** Aiheen 2.2 neljä luokkaa, ominaisuudet, virheet, riskit ja velka, muuttavat implisiittisen priorisointipäätöksen nimenomaiseksi ja mitattavaksi.
- **Kapasiteetin allokointi flow-kohteiden kesken on nollasummapeli.** Enemmän yhteen kohdetyyppiin käytettyä kapasiteettia on vähemmän kapasiteettia muille. Viitekehys tekee tämän kompromissin näkyväksi sen sijaan, että jättäisi sen implisiittiseksi.
- **Viisi flow-mittaria vastaavat liiketoimintakysymyksiin, ei vain ohjelmistotuotannon kysymyksiin.** Ne on suunniteltu esitettäviksi ei-tekniselle sidosryhmälle, ei pidettäviksi ohjelmistotuotannon tiimin sisällä.
- **Arvovirran hallinnan pitäisi olla jatkuvaa, ei kertaluonteinen kartoitusharjoitus.** Staattiset arvovirtakuvaukset vanhenevat. Viitekehys on rakennettu instrumentoitavaksi tiimien jo käyttämistä työkaluista.

## Suositukset

### Kartoita arvovirtasi ennen kuin instrumentoit mitään

Ennen minkään flow-mittarin käyttöönottoa kävele läpi työn todellinen polku liiketoiminnan tarpeen tunnistamisesta siihen, että asiakas saa arvoa, nimeten jokainen vaihe ja jokainen tiimien välinen luovutus. Tämä on klassinen [arvovirtakuvaus](https://en.wikipedia.org/wiki/Value_stream_mapping), lean-valmistuksesta mukautettu harjoitus, ja sen ohittaminen on yleisin syy siihen, että Flow Frameworkin käyttöönotto tuottaa lukuja, joihin kukaan ei luota: tarkastelemattoman, epävirallisesti ymmärretyn prosessin pohjalta lasketut mittarit harvoin vastaavat sitä, mitä oikeasti tapahtuu.

### Yhdistä flow-mittarit tiimiesi jo käyttämiin työkaluihin

Flow Framework on rakennettu jatkuvaan, automatisoituun arvovirran hallintaan, ei ajoittaiseen käsin tehtävään kartoitusharjoitukseen. Integroi flow-kohteiden seuranta suoraan työkaluihin, joiden läpi työ jo virtaa, Jira, Azure DevOps, GitHub, sen sijaan että rakentaisit rinnakkaisen seurantajärjestelmän, jota tiimien pitää päivittää käsin. Flow-kohteen tilan pitäisi päivittyä itsestään taustalla olevan tiketin tai pull requestin liikkuessa, sama instrumentointi itse raportoinnin sijaan -kuri, jota aihe 1.5 suosittelee jokaiselle tämän kirjan mittarille.

### Esitä flow-jakauma suoraan liiketoiminnan sidosryhmille, ei vain ohjelmistotuotannon johdolle

Suurin yksittäinen hukattu mahdollisuus tämän viitekehyksen kanssa on sen kohteleminen sisäisenä ohjelmistotuotannon työkaluna. Flow-jakauma, ominaisuuksiin verrattuna virheisiin, riskiin ja velkaan menevän työn osuus (aihe 2.3), on nimenomaan suunniteltu keskusteluksi, jota käyt tuote- ja liiketoimintajohdon kanssa, koska se tekee implisiittisestä priorisointipäätöksestä, kuinka paljon kapasiteettia menee uuteen arvoon verrattuna toiminnan ylläpitoon, nimenomaisen ja neuvoteltavan oletetun sijaan.

### Kohtele neljää flow-kohdetta aitona luokitteluna, ei muodollisuutena

Vaadi jokaisen työyksikön luokittelua täsmälleen yhteen neljästä flow-kohdetyypistä vastaanotossa, ei jälkikäteen. Jälkikäteen tai löyhästi sovellettu luokittelu, koska "se on periaatteessa ominaisuus", rapauttaa luokittelun koko arvon, koska koko tarkoitus on rehellinen, johdonmukainen kirjaus siitä, mihin kapasiteetti todella meni.

### Palaa arvovirtakuvaukseesi, kun organisaatio muuttuu, ei kiinteän aikataulun mukaan

Arvovirtakuvaus vanhenee heti kun tiimirajat, työkalut tai tuote itse muuttuvat merkittävästi, ei jonkin mielivaltaisen vuosirytmin mukaan. Kohtele uudelleenjärjestelyä, suurta työkalumigraatiota tai merkittävää tuotteen suunnanmuutosta laukaisijana kävellä arvovirta uudelleen läpi, koska vanhentuneen kuvauksen pohjalta laskettu flow-mittari mittaa hiljaa väärää asiaa.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Vain putkimittarit (DORA, aihe 2.10) | Yksinkertainen, hyvin validoitu, halpa instrumentoida nykyisestä CI/CD-datasta | Hiljainen siitä, millaista arvoa toimitetaan |
| Flow Frameworkin täysi käyttöönotto | Yhdistää toimituksen liiketoimintastrategiaan; tekee arvosekoituksen näkyväksi ja neuvoteltavaksi | Vaatii rehellisen arvovirtakuvauksen ja johdonmukaisen flow-kohteiden luokittelukurin |
| Staattinen, kertaluonteinen arvovirtakuvaus | Halpa, nopea toteuttaa työpajaharjoituksena | Vanhenee nopeasti; tuottaa tilannekuvan, ei elävää mittaria |
| Jatkuva, työkaluihin integroitu arvovirran hallinta | Elävä, aina ajan tasalla oleva data; skaalautuu moniin arvovirtoihin | Vaatii todellista työkaluintegraatiotyötä etukäteen |

Keskeinen jännite on **liiketoiminnan luettavuus vastaan instrumentointivaiva**. Putkimittarit ovat halpoja, koska putki tuottaa datan jo valmiiksi. Arvovirtamittarit vaativat rehellisen kuvauksen koko prosessista ja kurinalaisen vastaanottohetken luokittelutavan, jota putkimittarit eivät koskaan vaatineet. Ratkaise jännite aloittamalla yhdestä arvovirrasta, ei koko organisaatiosta kerralla, kartoittamalla se kunnolla ja vasta sitten integroimalla flow-kohteiden seuranta nykyisiin työkaluihin sen sijaan, että yritettäisiin big bang -käyttöönottoa kaikissa tiimeissä samanaikaisesti.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Pystyisimmekö piirtämään tarkan arvovirtakuvauksen tärkeimmälle tuotteellemme juuri nyt, vai arvailisimmeko useita luovutuksia?** Useimmat organisaatiot eivät ole koskaan oikeasti kävelleet tätä polkua päästä päähän. Yritä harjoitusta rehellisesti ja merkitse jokainen kohta, jossa ryhmä on eri mieltä siitä, mitä oikeasti tapahtuu, koska tuo erimielisyys on itsessään diagnostinen.

2. **Jos luokittelisimme kaiken, minkä tiimimme toimitti viime neljänneksellä, ominaisuuksiin, virheisiin, riskiin ja velkaan, yllättäisikö tulos tuotejohtomme?** Useimmat tiimit eivät ole koskaan tehneet tätä jakoa nimenomaiseksi, ja vastaus paljastaa usein ylläpitotaakan tai velkaongelman, joka oli aiemmin näkymätön yksinkertaisessa "toimitetut tarinapisteet" -laskennassa.

3. **Onko meillä aito, työkaluihin integroitu tapa seurata flow-kohteita, vai vaatisiko tämä jonkun luokittelevan ja uudelleenluokittelevan työtä käsin?** Käsin ylläpidetty järjestelmä rapautuu nopeasti todellisen työmäärän alla. Työkaluihin integroitu ei. Arvioi rehellisesti, kumpaa olet oikeasti valmis ylläpitämään.

4. **Milloin arvovirtakuvauksemme viimeksi muuttui, ja olemmeko päivittäneet mittarimme heijastamaan sitä?** Uudelleenjärjestelyt ja työkalumigraatiot mitätöivät arvovirtakuvauksen hiljaa, ja harva organisaatio muistaa palata siihen, kun niin tapahtuu.

5. **Esitetäänkö flow-mittarimme koskaan suoraan liiketoiminnan tai tuotteen sidosryhmille, vai pysyvätkö ne ohjelmistotuotannon sisällä?** Viitekehyksen suurin etu pelkkiin putkimittareihin verrattuna on juuri tämä keskustelu, ja sen ohittaminen menettää suurimman osan viitekehyksen arvosta.

6. **Mitä tarvittaisiin, jotta joku voisi pelata flow-kohteidemme luokittelua tekemättä mitään epärehellistä paperilla?** Käy läpi, miten toimituspaineen alla oleva tiimi voisi hiljaa nimetä velka- tai riskityön uudelleen ominaisuuksiksi näyttääkseen tuottavammalta, ja keskustelkaa, huomaisitteko sen tällä hetkellä.

## Sektorinäkökulma

**Startup-yritys.** Täysi arvovirtakuvaus on yleensä liioittelua viiden hengen tiimille, jossa kaikki tuntevat koko prosessin ulkoa. Hyödyllinen tapa tässä mittakaavassa on yksinkertaisesti sanoa neljä flow-kohdetyyppiä ääneen suunnittelukeskusteluissa, jotta velka- ja riskityö eivät katoa hiljaa näkyvistä heti kun ominaisuuden määräaika häämöttää.

**Pieni yritys.** Ota flow-kohteiden luokittelu käyttöön siinä kevyessä seurantatyökalussa, jota jo käytät, nimetyssä sarakkeessa tai mukautetussa kentässä, sen sijaan että hankkisit erillisen arvovirranhallintatuotteen. Johdonmukaisen luokittelun kuri on paljon tärkeämpi kuin sen takana olevan työkalun hienostuneisuus.

**Suuryritys.** Tässä viitekehys ansaitsee paikkansa, koska suurella organisaatiolla, joka ajaa kymmeniä arvovirtoja useilla tuotelinjoilla, ei ole muuta luotettavaa tapaa nähdä yhdessä paikassa, miten ohjelmistotuotannon kapasiteetti todella jakautuu ominaisuuksien, virheiden, riskin ja velan kesken. Investoi työkaluintegraatioon. Käsin tehtävä vaihtoehto ei selviä kohtaamisesta todellisen mittakaavan kanssa.

**Julkishallinto.** Flow-jakauma antaa julkisen sektorin ohjelmistoorganisaatiolle puolustettavan, liiketoiminnalle luettavan vastauksen kysymykseen "miksi uutta toiminnallisuutta ei toimiteta enemmän", kun rehellinen vastaus on kasvava osuus kapasiteetista, joka menee tietoturvakorjauksiin tai vanhaan velkaan. Tämän kompromissin tekeminen näkyväksi ja nimenomaiseksi paineen hiljaisen absorboinnin sijaan on usein hyödyllisin yksittäinen asia, jonka tämä viitekehys tarjoaa julkishallinnon teknologiajohtajalle.

## Esimerkit

**Suuryritys.** Suuren vakuutusyhtiön korvausalustaorganisaatio uskoi toimittavansa pääasiassa uusia ominaisuuksia sprinttinopeusraporttiensa perusteella. Ensimmäinen arvovirtakuvaus ja flow-kohteiden luokitteluharjoitus paljasti, että velka- ja riskityö, josta suuri osa oli dokumentoimatonta teknistä velkaa vuosikymmenen vanhasta ydinjärjestelmästä, kulutti lähes puolet ohjelmistotuotannon kokonaiskapasiteetista, mitä mikään aiempi raportointi ei ollut tuonut esiin, koska tuo työ oli aina niputettu yleisiin "ohjelmistotuotannon tehtäviin". Tämän jaon esittäminen johtoryhmälle varmisti ensimmäistä kertaa alustan historiassa erillisen velanvähennysbudjetin sen sijaan, että velkatyö olisi jatkanut hiljaista kilpailua jokaista ominaisuuspyyntöä vastaan.

**Julkishallinto.** Kansallisen veroviranomaisen digitaalisten palvelujen divisioona käytti arvovirtakuvausta selvittääkseen, miksi keskeinen kansalaisille suunnattu ominaisuus oli ollut "kesken" yli vuoden vakaasta sprinttien valmistumisesta huolimatta. Kuvaus paljasti, että arvovirta ulottui todellisuudessa viiden eri tiimin yli kolmella luovutuksella, joita organisaatiokaavio ei heijastanut, ja flow-kohteiden luokittelu osoitti, että ominaisuuden todellinen ohjelmistotuotantoaika oli pieni osa sen kokonaisflow-ajasta, ja loput kului tiimien väliseen luovutusviiveeseen, jota minkään yksittäisen tiimin omat mittarit eivät nähneet. Divisioona organisoi kyseisen tuotelinjan uudelleen arvovirran eikä organisaatiokaavion ympärille ja lyhensi flow-aikaa merkittävästi kahdessa vuosineljänneksessä.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Flow Frameworkin käyttöönoton tuotto on puolustettava, liiketoiminnalle luettava vastaus kysymykseen, johon putkimittarit eivät pysty vastaamaan: onko ohjelmistotuotannon kapasiteetti kohdennettu niin kuin johto uskoo. Yllä oleva vakuutusesimerkki, joka toi esiin lähes puolet kapasiteetista menevän aiemmin näkymättömään velkatyöhön, on yleinen kuvio heti kun organisaatio todella luokittelee työnsä rehellisesti, ja tuo näkyvyys avaa rutiininomaisesti investointeja, joita epämääräinen "tarvitsemme lisää aikaa tekniselle velalle" -pyyntö ei koskaan voisi.

Omistamisen kokonaiskustannus (TCO) keskittyy kahteen paikkaan: alkuperäiseen arvovirtakuvausharjoitukseen, joka vaatii todellista fasilitointiaikaa tehdäkseen sen rehellisesti, ja työkaluintegraatioon, jota tarvitaan pitämään flow-kohteiden data ajan tasalla ilman käsin tehtävää ylläpitoa. Molemmat kustannukset ovat kertaluonteisia tai vähän ylläpitoa vaativia kun ne on tehty hyvin, mikä tekee viitekehyksestä huomattavasti halvemman ylläpitää kuin ottaa käyttöön.

## Antimallit ja sudenkuopat

- **Arvovirtakuvauksen kohteleminen kertaluonteisena työpajana, johon ei koskaan palata:** kuvaus vanhenee heti kun organisaatio muuttuu, ja vanhentuneen kuvauksen pohjalta laskettu mittari mittaa väärää asiaa.
- **Rinnakkaisen, käsin ylläpidetyn flow-kohteiden seurantajärjestelmän rakentaminen:** rapautuu nopeasti todellisen työmäärän alla. Integroi sen sijaan nykyisiin työkaluihin.
- **Flow-kohteiden luokittelu jälkikäteen eikä vastaanotossa:** tämän aiheen ytimessä oleva pelaamisen tapa. Toimituspaineen alla tiimi voi hiljaa nimetä velka- tai riskityön uudelleen ominaisuuksiksi jälkikäteen näyttääkseen tuottavammalta sidosryhmille, jotka näkevät vain flow-jakaumakaavion, ilman että kukaan koskaan tekee nimenomaista, näkyvää päätöstä tehdä niin. Suojakaide on vaatia luokittelu vastaanotossa, ennen kuin tulos on tiedossa, ja auditoida ajoittain otos luokitelluista kohteista sitä vasten, mitä taustalla oleva muutos todella teki, sama auditointikuri, jota aihe 1.2 pyytää jokaiselle tämän kirjan mittarille.
- **Flow-mittarien pitäminen vain ohjelmistotuotannon sisällä:** menettää viitekehyksen suurimman edun, yhteisen sanaston liiketoiminnan sidosryhmien kanssa.
- **Organisaatiokaavion kartoittaminen todellisen arvovirran sijaan:** piilottaa tiimien väliset luovutukset, jotka ovat usein suurin viiveen lähde.
- **Viitekehyksen käyttöönotto koko organisaatiossa ennen sen validointia yhdellä arvovirralla:** riskinä suuri investointi mittareihin, joihin kukaan ei luota, koska taustalla olevan kuvauksen tarkkuutta ei koskaan vahvistettu.

## Kypsyysmalli

- **Taso 1, Aloittava:** Arvovirtakuvausta ei ole. Työtä seurataan yleisinä tikettinä ilman flow-kohteiden luokittelua.
- **Taso 2, Kehittyvä:** Yksi arvovirta on kartoitettu ja flow-kohteet luokitellaan epävirallisesti, mutta seuranta on käsin tehtävää ja epäjohdonmukaisesti sovellettua.
- **Taso 3, Vakioitu:** Flow-kohteiden luokittelu on integroitu nykyisiin työkaluihin ja sitä sovelletaan johdonmukaisesti vastaanotossa suurissa arvovirroissa.
- **Taso 4, Hallittu:** Flow-jakauma katselmoidaan säännöllisesti liiketoiminnan sidosryhmien kanssa, ja arvovirtakuvauksia pidetään aktiivisesti ajan tasalla organisaation muuttuessa.
- **Taso 5, Orkestroitu:** Organisaatio kohdentaa ohjelmistotuotannon investoinnit tietoisesti arvovirtojen kesken flow-datan perusteella ja voi osoittaa tiettyjä strategisia päätöksiä, velanvähennysbudjetin tai tiimin uudelleenjärjestelyn, jotka tehtiin, koska viitekehys teki aiemmin näkymättömän kompromissin näkyväksi.

## Keskusteluideoita

1. Pystyisimmekö piirtämään tarkan arvovirtakuvauksen lippulaivatuotteellemme tänään arvaamatta?
2. Kuinka suuren osan viime neljänneksen kapasiteetista rehellinen flow-kohteiden luokittelu paljastaisi menneen velkaan ja riskiin ominaisuuksien sijaan?
3. Tavoittavatko flow-mittarimme tällä hetkellä liiketoiminnan sidosryhmät, vai pysyvätkö ne ohjelmistotuotannon sisällä?
4. Mikä on arvovirtamme suurin tiimien välinen luovutus, jota organisaatiokaaviomme ei heijasta?

## Keskeiset opit

- **Flow Framework**, Mik Kerstenin kirjasta *Project to Product*, mittaa millaista arvoa toimitusputken läpi liikkuu, ei vain kuinka nopeasti itse putki toimii.
- **Arvovirta**, ei tiimi eikä putki, on viitekehyksen mittausyksikkö, ja sen rehellinen kartoittaminen tulee ennen minkään instrumentointia.
- **Flow-kohteiden luokittelu vastaanotossa, ei jälkikäteen**, on suojakaide tämän aiheen keskeistä pelaamisen tapaa vastaan: velka- tai riskityön hiljainen nimeäminen uudelleen ominaisuuksiksi tuottavammalta näyttämiseksi.
- **Yhdistä flow-mittarit nykyisiin työkaluihin**, Jira, Azure DevOps, GitHub, rinnakkaisen käsin tehtävän seurantajärjestelmän sijaan, joka ei selviä todellisesta työmäärästä.
- Esitä flow-data **suoraan liiketoiminnan sidosryhmille**. Tuo keskustelu, ei sisäinen ohjelmistotuotannon mittaristo, on viitekehyksen suurin etu pelkkiin putkimittareihin verrattuna.

## Lähteet ja lisälukemista

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
