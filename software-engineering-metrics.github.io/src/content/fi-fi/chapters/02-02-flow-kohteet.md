# 2.2 Flow-kohteet: ominaisuudet, virheet, riskit ja velka

## Yleiskatsaus ja perustelut

**Flow-kohde** on Flow Frameworkin työyksikkö, ja jokainen flow-kohde kuuluu täsmälleen yhteen neljästä tyypistä: **ominaisuudet**, uusi liiketoiminta-arvo tai kyvykkyys, joka toimitetaan asiakkaalle; **virheet**, laatukorjaukset käyttäjien tai testauksen löytämiin vikoihin; **riskit**, tietoturva-, vaatimustenmukaisuus-, yksityisyys- ja hallintotyö, joka suojaa liiketoimintaa; sekä **velka**, [tekninen velka](https://en.wikipedia.org/wiki/Technical_debt), arkkitehtuuriparannukset ja infrastruktuurityö, joka mahdollistaa tulevan nopeuden. Aihe 2.1 esitteli viitekehyksen, johon nämä neljä luokkaa kuuluvat. Tämä aihe menee syvälle itse luokitteluun, koska luokat tuottavat arvoa vain, jos tiimi luokittelee työnsä niihin rehellisesti ja johdonmukaisesti.

Flow-kohteiden määrittävä ominaisuus on, että allokointi neljän tyypin kesken on **nollasummapeli**: ohjelmistotuotannon kapasiteetti on missä tahansa jaksossa kiinteä, ja jokainen ominaisuuteen käytetty tunti on tunti, jota ei käytetty velkaan, riskiin tai virhetyöhön. Tämä ei ole uusi tosiasia ohjelmistotoimituksesta, jokainen ohjelmistotuotannon johtaja tietää kapasiteetin olevan rajallinen, mutta useimmilla organisaatioilla ei ole johdonmukaista, rehellistä tapaa nähdä todellista jakoa. Sprintin nopeus laskee tarinapisteet tyypistä riippumatta. Loppuun kulutettu työjono näyttää samalta riippumatta siitä, oliko sen takana uusi kassavirta vai kolme kuukautta vähemmän hohdokasta tietoturvakorjausta. Flow-kohteet ovat olemassa nimenomaan tekemään tuon näkymättömän jaon näkyväksi.

Suurille tiimeille tämä näkyvyys muuttaa resursointikeskustelun luonnetta. Sen sijaan, että ohjelmistotuotannon johtaja esittäisi kvantifioimattoman argumentin "tarvitsemme lisää aikaa tekniselle velalle", flow-kohteiden luokittelu tuottaa todellisen luvun, velka kulutti 30 % viime neljänneksen kapasiteetista, jota voi keskustella, puolustaa ja säätää tietoisesti liiketoiminnan sidosryhmien kanssa. Useita rinnakkaisia tuotelinjoja ajavat suuryritykset ja uutta kansalaisille suunnattua toiminnallisuutta ja vanhojen järjestelmien riskiä tasapainottavat julkishallinnon virastot nojaavat tällaiseen puolustettavaan, kvantifioituun kompromissiin paljon enemmän kuin yksityiseen, epäviralliseen tunteeseen, että "käytämme liikaa aikaa ylläpitoon".

## Keskeiset periaatteet

- **Jokainen flow-kohde kuuluu täsmälleen yhteen tyyppiin.** Yhden luokituksen pakottaminen sekoitetun tai epäselvän sijaan tekee luokittelusta käyttökelpoisen koostettuun raportointiin.
- **Allokointi on nollasumma, ei additiivinen.** Enemmän kapasiteettia ominaisuuksille on välttämättä vähemmän kapasiteettia virheille, riskille ja velalle samassa jaksossa.
- **Yleisesti terveellistä jakaumaa ei ole.** Kasvuvaiheessa olevan nuoren tuotteen kuuluu perustellusti painottua ominaisuuksiin. Aitoa teknistä riskiä kantavan kypsän järjestelmän kuuluu perustellusti painottua velka- ja riskityöhön.
- **Velka- ja riskityötä raportoidaan krooniseti liian vähän ilman tätä kuria.** Se tapahtuu helposti hiljaa, yleisiin "ohjelmistotuotannon tehtäviin" imeytyneenä, kunnes flow-kohteiden luokittelu pakottaa sen esiin.
- **Luokittelun laatu määrää koko luokittelun arvon.** Epäjohdonmukaisesti sovellettu tai jälkikäteen pelattu luokittelu tuottaa lukuja, jotka johtavat aktiivisesti harhaan sen sijaan, että ne kertoisivat.

## Suositukset

### Luokittele jokainen kohde vastaanotossa käyttäen kunkin tyypin kirjallista määritelmää

Sovi tiiviistä, kirjallisesta määritelmästä sille, mikä on ominaisuus, virhe, riski ja velka tietyssä kontekstissasi, ja vaadi jokaisen uuden työn luokittelua tuota määritelmää vasten heti kun se astuu arvovirtaan, ei sen valmistumisen jälkeen. Etukäteen sovittu määritelmä vastustaa houkutusta luokitella jälkikäteen sen perusteella, miltä työ lopulta näytti, mikä on juuri se pelaamisen riski, jonka tämä aihe nimeää suoraan alla.

### Raportoi flow-jakauma trendinä, ei yksittäisenä tilannekuvana

Yhden jakson jakauma kertoo vähemmän kuin trendi usean jakson yli. Tasainen ajautuminen kohti yhtä kohdetyyppiä, ominaisuuksien kasvu velan hiljaa kutistuessa neljännes neljänneksen jälkeen, on paljon vahvempi signaali kuin minkään yksittäisen jakson luku, ja se on yleensä kuvio, joka kannattaa nostaa sidosryhmien kanssa esiin ennen kuin siitä tulee kriisi, ei sen jälkeen.

### Aseta tavoitejakauma tietoisesti liiketoiminnan sidosryhmien kanssa, ei vain ohjelmistotuotannon

Päätä yhdessä tuote- ja liiketoimintajohdon kanssa, miltä terveellinen jakauma näyttää arvovirtasi nykyisessä vaiheessa, ja palaa tuohon tavoitteeseen ajoittain sen sijaan, että annat sen ajautua oletuksena. Nuorella, kasvuvaiheen tuotteella ja kypsällä, vakauden vaiheessa olevalla järjestelmällä on perustellusti erilaiset terveelliset tavoitteet, ja tavoitteen itsensä pitäisi olla neuvoteltu liiketoimintapäätös, ei jotain, minkä ohjelmistotuotanto hiljaa päättää yksin.

### Tarkista flow-kohteiden luokittelu riippumatonta näyttöä vasten

Vertaa flow-jakaumaasi ajoittain mittareihin, jotka eivät riipu itseluokittelusta: karanneiden virheiden osuus (aihe 5.1), teknisen velan mittaus (aihe 4.5) ja haavoittuvuuksien hallinnan mittarit (aihe 6.4). Jos virheet tai haavoittuvuudet kasvavat samalla kun "virheet"- ja "riskit"-flow-kohteiden osuudet pysyvät tasaisina tai pienenevät, tuo epäsuhta on selvin saatavilla oleva signaali siitä, että luokittelu on ajautunut todellisuudesta.

### Tunnista erityisesti ominaisuustehtaan kuvio

Kun flow-jakauma osoittaa ominaisuuksien johdonmukaisesti imevän lähes kaiken kapasiteetin neljännes neljänneksen jälkeen ja velka- ja riskityön osuuden pysyvän symbolisena, tuo kuvio (jota joskus kutsutaan "feature factoryksi") tarkoittaa yleensä, että velalta ja riskiltä evätään kapasiteettia, ei että järjestelmä todella tarvitsisi vähän ylläpitoa. Kuvio on lyhyellä aikavälillä mukava ja myöhemmin kallis, ja se ilmenee lopulta laatu- tai tietoturvakriisinä, joka saapuu ilman varoitusta flow-jakaumakaaviossa, koska taustalla oleva kasautuminen ei koskaan ollut näkyvissä.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei muodollista luokittelua (yleinen työjono) | Ei prosessikuormaa | Velka-, riski- ja virhetyö pysyy näkymättömänä; resursointipäätöksiä on vaikea puolustaa |
| Nelityyppinen flow-kohteiden luokittelu | Tekee kapasiteetin allokoinnin näkyväksi ja neuvoteltavaksi sidosryhmien kanssa | Vaatii vastaanottohetken kuria ja kirjallisen, sovitun määritelmän kullekin tyypille |
| Hienojakoisempi luokittelu (monta alatyyppiä) | Enemmän diagnostista yksityiskohtaa | Enemmän luokitteluvaivaa; enemmän selitettäviä lukuja sidosryhmille |
| Jälkikäteinen luokittelu | Helpompi soveltaa, ei etukäteistä prosessimuutosta | Erittäin altis pelaamiselle; luokittelu ajautuu siihen, mikä näyttää parhaalta |

Keskeinen jännite on **luokittelukuri vastaan prosessikuorma**. Nelityyppinen luokittelu on tarkoituksella karkea, niin karkea, että kohteen luokitteluun menee sekunteja eikä väittelyä, mutta tuo karkeus pitää vain, jos vastaanottohetkellä luokittelun kuri kirjallista määritelmää vasten todella säilyy. Ratkaise jännite pitämällä luokittelu täsmälleen näin yksinkertaisena, neljä tyyppiä eikä enempää, ja investoimalla ylimääräinen ankaruus auditointivaiheeseen (tarkistus riippumatonta näyttöä vasten) monimutkaisemman luokittelujärjestelmän sijaan, joka rapautuu todellisen työmäärän alla.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Jos luokittelisimme kaiken, minkä tiimimme toimitti viime neljänneksellä, miltä todellinen jako ominaisuuksien, virheiden, riskin ja velan välillä näyttäisi, ja yllättäisikö se sidosryhmämme?** Useimmat tiimit eivät ole koskaan tehneet tätä harjoitusta rehellisesti. Kokeile sitä oikealla datalla ennen kuin oletat jo tietäväsi vastauksen.

2. **Onko meillä kirjallinen, sovittu määritelmä sille, mikä on ominaisuus, velka ja riski tietyssä kontekstissamme, vai riippuuko luokittelu siitä, kuka sattuu merkitsemään tiketin?** Epävirallinen, epäjohdonmukainen määritelmä tuottaa lukuja, jotka näyttävät tarkoilta mutta eivät ole oikeasti vertailukelpoisia jaksosta toiseen.

3. **Onko flow-jakaumamme koskaan ajautunut tasaisesti kohti yhtä kohdetyyppiä ilman että kukaan päätti sitä tarkoituksella?** Hidas ajautuminen on helppo missata jakso jaksolta, mutta ilmeinen heti kun se piirretään trendinä. Hae useiden jaksojen dataa, jos sitä on, ja etsi rehellisesti tätä kuviota.

4. **Miltä terveellinen flow-jakauma näyttäisi tuotteemme nykyisessä vaiheessa, ja olemmeko oikeasti sopineet tuosta tavoitteesta liiketoiminnan sidosryhmien kanssa?** Useimmat organisaatiot eivät ole koskaan tehneet tätä tavoitetta nimenomaiseksi, mikä tarkoittaa, ettei ole yhteistä perustaa huomata, kun todellinen jakauma ajautuu siitä pois.

5. **Vastaako flow-jakaumamme riippumatonta näyttöä, kuten karanneiden virheiden osuutta tai avoimien haavoittuvuuksien määrää, vai onko epäsuhta, joka kannattaa tutkia?** Epäsuhta tässä on selvin saatavilla oleva merkki siitä, että luokittelu on ajautunut siitä, mitä työ todella on.

6. **Voisiko joku tiimissämme hiljaa nimetä velka- tai riskikohteen uudelleen ominaisuudeksi toimituspaineen alla, ja huomaisimmeko tällä hetkellä, jos hän tekisi niin?** Tämä on aiheen keskeinen pelaamisen riski sanottuna suoraan. Keskustelkaa, saisiko nykyinen prosessinne tämän oikeasti kiinni, ei vain sitä, tekisikö kukaan sen tahallaan.

## Sektorinäkökulma

**Startup-yritys.** Muodollinen luokittelu tuntuu usein kuormalta, kun koko tiimi jo tietää, mitä kukin tekee. Hyödyllinen vähimmäismäärä tässä mittakaavassa on yksinkertaisesti neljän luokan nimeäminen ääneen suunnittelun aikana, jotta velka- ja riskityötä ei hiljaa priorisoida alas aina kun ominaisuuden määräaika luo painetta, kuvio, joka kasautuu pahasti, kun sekä koodikanta että tiimi kasvavat.

**Pieni yritys.** Yksi mukautettu kenttä tai merkintä nykyisessä seurantatyökalussasi riittää flow-kohdetyypin tallentamiseen ilman erillistä työkaluinvestointia. Johdonmukaisen luokittelun kuri vastaanotossa on paljon tärkeämpi kuin työkalujen hienostuneisuus.

**Suuryritys.** Flow-kohteiden luokittelu on se kohta, jossa viitekehys ansaitsee arvonsa mittakaavassa, koska suurella organisaatiolla, joka ajaa monta rinnakkaista arvovirtaa, ei ole muuta luotettavaa, koostettua tapaa nähdä, miten kapasiteetti todella jakautuu ominaisuuksien, virheiden, riskin ja velan kesken. Investoi työkaluihin integroituun luokitteluun ja ajoittaisiin tarkistuksiin riippumatonta näyttöä vasten. Käsin tehtävä, ad hoc -luokittelu ei selviä todellisesta organisaation mittakaavasta.

**Julkishallinto.** Flow-jakauma antaa julkisen sektorin teknologiajohtajalle puolustettavan, kvantifioidun vastauksen, kun kysytään, miksi uusia kansalaisille suunnattuja ominaisuuksia ei toimiteta enemmän, kun rehellinen vastaus on, että vanhan järjestelmän riski- ja velkataakka kuluttaa aidon, perustellun osan kapasiteetista. Tämän kompromissin tekeminen nimenomaiseksi ja neuvotelluksi hiljaisen absorboinnin sijaan rakentaa yleensä enemmän luottamusta valvontaelimiin kuin kvantifioimaton vetoaminen "tekniseen välttämättömyyteen".

## Esimerkit

**Suuryritys.** Suuren vähittäiskauppayrityksen verkkokauppa-alustan tiimi uskoi sprinttinopeuden perusteella toimittavansa tasaista ominaisuustuotosta. Ensimmäinen rehellinen flow-kohteiden luokitteluharjoitus paljasti, että "ominaisuudet" muodostivat vain 40 % valmistuneesta työstä, ja velka, josta suuri osa liittyi ikääntyvään kassajärjestelmään, kulutti lähes kolmanneksen kapasiteetista ilman että sitä oli koskaan nimetty sellaiseksi missään aiemmassa raportissa. Tämän jaon esittäminen tuotejohdolle yhdessä nousevan karanneiden virheiden osuuden kanssa, joka vahvisti velkataakan, varmisti erillisen uudistusbudjetin, jota tiimi oli kaksi vuotta turhaan pyytänyt pelkästään laadullisin perusteluin.

**Julkishallinto.** Osavaltion ajoneuvohallintoviraston digitaalisen ajokorttipalvelun tiimi luokitteli työjononsa ensimmäistä kertaa sen jälkeen, kun julkinen katko oli kiinnittänyt huomion taustalla olevan järjestelmän vakauteen. Harjoitus paljasti, että "riski"-työ, pääasiassa tietoturvakorjaukset, jotka oli toistuvasti priorisoitu alas näkyvien kansalaisille suunnattujen ominaisuuksien hyväksi, oli kutistunut alle 5 %:iin kapasiteetista edellisen vuoden aikana, kuvio, joka ei ollut koskaan ollut näkyvissä tiimin vakioraportoinnissa. Viraston johto käytti havaintoa määrätäkseen vähimmäisriskityön allokaation jatkossa, tukenaan flow-jakaumadata eikä pelkkä yleinen periaatelausunto.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Flow-kohteiden luokittelun tuotto on puolustettava, kvantifioitu perusta resursointipäätöksille, joista aiemmin väiteltiin laadullisesti ja jotka usein hävittiin sille työlle, joka oli sidosryhmille näkyvintä. Yllä oleva vähittäiskauppaesimerkki, jossa uudistusbudjetti varmistettiin todellisella kapasiteettidatalla yleisen vetoomuksen sijaan, on kuvio, jonka tämä kuri luotettavasti tuottaa: tietty luku on paljon vaikeampi sivuuttaa kuin yleinen vaikutelma, että "tarvitsemme lisää aikaa ylläpitoon".

Omistamisen kokonaiskustannus (TCO) on matala kun luokittelu ja sen määritelmät on sovittu: luokittelu lisää vastaanottoon sekunteja, ei merkittävää prosessikuormaa, ja sen seuraamiseen tarvittava työkaluintegraatio on yleensä yksi mukautettu kenttä tai merkintä. Todellinen, jatkuva kustannus on kuri ylläpitää rehellistä luokittelua toimituspaineen alla, minkä vuoksi ajoittainen tarkistus riippumatonta näyttöä vasten on yhtä tärkeä kuin alkuperäinen käyttöönotto.

## Antimallit ja sudenkuopat

- **Työn luokittelu jälkikäteen, kun tulos on tiedossa:** tämän aiheen ytimessä oleva pelaamisen tapa. Toimituspaineen alla tiimi voi hiljaa merkitä velka- tai riskityön ominaisuudeksi jälkikäteen tai pyöristää epäselvän kohteen siihen tyyppiin, joka näyttää paremmalta jakaumakaaviossa, ilman että yksikään yksittäinen päätös näyttää itsessään epärehelliseltä. Suojakaide on vastaanottohetken luokittelu kirjallista määritelmää vasten yhdistettynä ajoittaisiin auditointeihin, jotka vertaavat flow-jakaumaa riippumattomaan näyttöön, kuten karanneiden virheiden osuuteen (aihe 5.1) ja haavoittuvuusmittareihin (aihe 6.4), sama riippumatonta näyttöä vasten auditoinnin kuri, jota aihe 1.2 pyytää jokaiselle tämän kirjan mittarille.
- **Ominaisuuksien salliminen johdonmukaisesti imeä lähes kaikki kapasiteetti (feature factory -kuvio):** näivettää velka- ja riskityötä hiljaa kunnes se nousee esiin kriisinä.
- **Yhden jakson jakauman kohteleminen koko kuvana:** ohittaa hitaan, kumuloituvan ajautumisen, jonka trendinäkymä paljastaa selvästi.
- **Tavoitejakauman asettaminen ilman liiketoiminnan sidosryhmiä:** menettää viitekehyksen suurimman arvon, jaetun, neuvotellun ymmärryksen kompromissista.
- **Epäjohdonmukainen tai dokumentoimaton määritelmä tyyppiä kohti:** tuottaa lukuja, jotka näyttävät tarkoilta mutta eivät ole oikeasti vertailukelpoisia ajan yli.
- **Luokittelun ylisuunnittelu monilla alatyypeillä:** lisää luokitteluvaivaa, joka rapauttaa kuria tuomatta suhteellista oivallusta.

## Kypsyysmalli

- **Taso 1, Aloittava:** Työtä seurataan yleisesti ilman flow-kohteiden luokittelua. Velka- ja riskityö on raportoinnissa näkymätöntä.
- **Taso 2, Kehittyvä:** Jotkin tiimit luokittelevat flow-kohteita epävirallisesti, mutta määritelmät ovat epäjohdonmukaisia ja luokittelu tapahtuu usein jälkikäteen.
- **Taso 3, Vakioitu:** Kaikki tiimit luokittelevat vastaanotossa jaettua, kirjallista määritelmää vasten, ja flow-jakaumaa seurataan trendinä.
- **Taso 4, Hallittu:** Flow-jakauma tarkistetaan ajoittain riippumatonta näyttöä vasten, ja tavoitejakaumat asetetaan tietoisesti liiketoiminnan sidosryhmien kanssa.
- **Taso 5, Orkestroitu:** Flow-kohteiden data ohjaa suoraan resursointi- ja investointipäätöksiä koko organisaatiossa, ja johto voi osoittaa tiettyjä päätöksiä, jotka tehtiin, koska luokittelu teki aiemmin näkymättömän kompromissin nimenomaiseksi.

## Keskusteluideoita

1. Mitä rehellinen flow-kohteiden jako viime neljänneksen työstä näyttäisi, ja yllättäisikö se ketään?
2. Onko meillä kirjallinen määritelmä jokaiselle neljälle flow-kohdetyypille, vai riippuuko luokittelu siitä, kuka työn merkitsee?
3. Onko flow-jakaumamme koskaan ajautunut kohti yhtä kohdetyyppiä ilman tietoista päätöstä sen takana?
4. Mitä riippumatonta näyttöä vasten voisimme tarkistaa flow-jakaumamme tänään?

## Keskeiset opit

- **Flow-kohde** kuuluu täsmälleen yhteen neljästä tyypistä, ominaisuudet, virheet, riskit tai velka, ja kapasiteetin allokointi niiden kesken on **nollasumma**.
- **Yleisesti terveellistä jakaumaa ei ole.** Oikea sekoitus riippuu tuotteen vaiheesta, ja sen pitäisi olla tietoinen, liiketoiminnan sidosryhmien kanssa neuvoteltu tavoite.
- Aiheen keskeinen pelaamisen tapa on **jälkikäteinen luokittelu**, velka- tai riskityön hiljainen uudelleennimeäminen ominaisuudeksi jälkikäteen. Suojakaide on vastaanottohetken luokittelu sekä ajoittaiset auditoinnit riippumatonta näyttöä vasten.
- Tunnista erityisesti **ominaisuustehtaan kuvio**, jossa ominaisuudet johdonmukaisesti imevät lähes kaiken kapasiteetin ja näivettävät velka- ja riskityötä kunnes se nousee esiin kriisinä.
- Flow-jakauma on arvokkaimmillaan **trendinä**, ja sen suurin hyöty tulee jakamalla se suoraan liiketoiminnan sidosryhmille.

## Lähteet ja lisälukemista

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
