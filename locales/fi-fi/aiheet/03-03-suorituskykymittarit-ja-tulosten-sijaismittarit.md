# 3.3 Suorituskykymittarit ja tulosten sijaismittarit

## Yleiskatsaus ja perustelut

**Suorituskyky**, SPACEn P (aihe 3.1), on ulottuvuus, joka sekoitetaan useimmin aktiivisuuteen, ja juuri tämän sekaannuksen estämiseksi tämä aihe on olemassa. Suorituskyky kysyy, tuottiko insinöörin tai tiimin työ todella hyvän [tuloksen](https://en.wikipedia.org/wiki/Outcome_(probability)): ominaisuuden, joka julkaistiin ja toimi, järjestelmän, joka pysyi luotettavana, muutoksen, joka liikutti liiketoiminnan tai käyttäjien mittaria oikeaan suuntaan. Aktiivisuus (aihe 3.4) kysyy vain, kuinka paljon liikettä tapahtui. Tiimi voi olla erittäin aktiivinen ja suoriutua heikosti, julkaista jatkuvasti pieniä muutoksia, jotka eivät koskaan liikuta tulosta. Päinvastainen on yhtä mahdollista: tiimi, joka julkaisee harvoin, mutta jonka muutokset osuvat luotettavasti täsmälleen oikeaan.

Tämän ulottuvuuden vaikeus on, ettei tulosta voi usein lukea yhden ihmisen tai edes yhden tiimin ansioksi. Ohjelmistotulokset syntyvät yhteistyöstä, kuukausia aiemmin tehdyistä päätöksistä, joiden tekijät ovat siirtyneet muihin projekteihin, ja markkinaolosuhteista, joita mikään insinööri ei hallitse. SPACEn tutkijat sanoivat tämän suoraan: suorituskykyä pitäisi mitata järjestelmä- tai tiimitasolla useilla, toisiaan tukevilla signaaleilla, ei supistaa yhdeksi luvuksi eikä varsinkaan lukea yksittäisen insinöörin ansioksi erillään muista. Tämä aihe ottaa ohjeen vakavasti ja kohtelee yksilön suorituskyvyn osoittamista ansioksi ansana, jota vältetään aktiivisesti, ei oikotienä, johon turvaudutaan kun se sopii.

Suurille tiimeille suorituskyvyn mittaamisen onnistuminen erottaa mittariohjelman, joka todella parantaa tuloksia, ohjelmasta, joka vain palkitsee näkyvää touhua. Suuryritykset, jotka vertaavat suorituskykyä monien tiimien välillä, tarvitsevat signaaleja, jotka vastustavat pelaamista raa'an tuotosmäärän kautta. Julkishallinnon organisaatiot, jotka perustelevat teknologiainvestointeja valvontaelimille, tarvitsevat todisteita siitä, että ohjelmistotyö tuotti todellisia tuloksia, ei vain toimitettuja artefakteja. Tämä on täsmälleen aiheen 1.3 periaate, tulokset ennen tuotoksia, sovellettuna tähän ulottuvuuteen.

## Keskeiset periaatteet

- **Suorituskyky mittaa, tuottiko työ hyvän tuloksen, ei sitä, kuinka paljon työtä tehtiin.** Tämä on ydinero aktiivisuusulottuvuuteen.
- **Käytä useita, toisiaan tukevia signaaleja, älä koskaan yhtä suorituskykylukua.** Mikään yksittäinen sijaismittari ei ole riittävän luotettava seisomaan yksin.
- **Mittaa tiimi- tai järjestelmätasolla.** Tuloksen osoittaminen yksilön ansioksi on yleensä epäluotettavaa ja kutsuu juuri sitä pelaamista, josta tämä kirja varoittaa alusta loppuun.
- **Laatu on osa suorituskykyä, ei erillinen huoli.** Työ, joka julkaistaan mutta rikkoo jotain muuta, ei oikeasti suoriutunut hyvin.
- **Suorituskykysignaali ilman siihen liitettyä päätöstä on koriste**, aivan kuten aiheen 1.1 yleinen periaate sanoo, sovellettuna tähän ulottuvuuteen.

## Suositukset

### Yhdistä useita toisiaan tukevia signaaleja yhden suorituskykypisteen sijaan

Kerää suorituskykynäyttö useista lähteistä: muutosten epäonnistumisprosentti (aihe 2.10) ja karanneiden virheiden osuus (aihe 5.1) laadun osalta, julkaisut sidottuina todelliseen ominaisuuksien käyttöönottoon (aihe 5.2) sen osalta, oliko työllä merkitystä, sekä laadullinen vertais- tai esihenkilöarvio tiimin panoksesta strategisiin tavoitteisiin kontekstiksi, jota puhdas mittari ei tavoita. Yksikään näistä ei ole yksin luotettava. Yhdessä, kun ne konvergoivat samaan johtopäätökseen, ne ovat paljon luotettavampia kuin yksikään luku voisi olla.

### Mittaa tiimitasolla, vastusta yksilöiden ansioksi lukemista

Ohjelmistotulokset ovat harvoin yhden ihmisen työn tulos. Ne syntyvät suunnittelupäätöksistä, katselmointipalautteesta, tiimistä mahdollisesti jo lähteneiden ihmisten aiemmasta työstä ja rajat ylittävästä yhteistyöstä. Tuloksen lukeminen yhden insinöörin ansioksi on yleensä näennäistä tarkkuutta, joka sivuuttaa tämän todellisuuden ja luo vahvan kannustimen suojella ansiota vapaan yhteistyön sijaan, juuri sellaista kannustinvääristymää, josta aihe 1.2 varoittaa.

### Sisällytä laatu suoraan suorituskyvyn määritelmään

Ominaisuus, joka julkaistaan ajallaan mutta aiheuttaa tuotantohäiriöiden aallon, ei suoriutunut hyvin, vaikka naiivi pelkkään tuotokseen perustuva näkemys laskisi sen toimitetuksi. Rakenna muutosten epäonnistumisprosentti, karanneiden virheiden osuus ja julkaisun jälkeisten häiriöiden data suoraan siihen, miten arvioit suorituskykyä, sen sijaan että kohtelisit laatua erillisenä, irrallisena huolena, jota mitataan vain tämän kirjan osissa 4 ja 6.

### Käytä suorituskykydataa investointi- ja prosessipäätösten tueksi, ei yksilöiden paremmuusjärjestykseen

Suorituskykydatan tuottava käyttö on päättää, minne investoida lisää (tiimi, joka toimittaa johdonmukaisesti vahvoja tuloksia, ansaitsee enemmän resursseja ja autonomiaa) ja mitä tutkia (tiimi, jonka työ ei johdonmukaisesti osu maaliin, ansaitsee apua, ei syyllistämistä, aiheen 1.1 diagnostisen kehyksen mukaisesti). Yksilöiden tai tiimien asettaminen kilpailulliseen paremmuusjärjestykseen suorituskykydatan perusteella kutsuu juuri sitä pelaamista ja moraalin vahingoittumista, josta tämä kirja varoittaa, eikä juuri koskaan tuota parempia tuloksia kuin diagnostinen käyttö.

### Ole rehellinen osoittamisen rajoista, erityisesti alusta- ja mahdollistavien tiimien kohdalla

Tiimien, jotka rakentavat yhteistä infrastruktuuria, sisäisiä työkaluja tai alustakyvykkyyksiä (sisarkirjan `software-engineering-guide` alustainsinöörityön aihe käsittelee tätä suoraan), vaikutus tuloksiin on usein usean askeleen päässä mistään yksittäisestä asiakasnäkyvästä mittarista. Mittaa näiden tiimien suorituskyky niiden vaikutuksella tiimeihin, joita ne mahdollistavat, alustan käyttöönotolla ja käyttäjätiimien raportoiman kitkan vähenemisellä, sen sijaan että pakottaisit huonosti sopivan suoran tulosmittarin työhön, joka on luonteeltaan epäsuoraa.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Yksi suorituskykypiste tiimiä kohti | Yksinkertainen esittää ja vertailla | Näennäinen tarkkuus, piilottaa, mikä taustalla oleva signaali todella ajoi pisteen |
| Useita toisiaan tukevia signaaleja | Luotettavampi, vastustaa yhden mittarin pelaamista | Vaikeampi tiivistää yhteen lukuun, vaatii enemmän kontekstia tulkintaan |
| Tiimitason suorituskyvyn mittaus | Vastaa sitä, miten ohjelmistotulokset todella syntyvät | Ei voi suoraan vastata yksilön panosta koskeviin kysymyksiin |
| Yksilötason suorituskyvyn osoittaminen | Tuntuu suoremmin toimintaan johtavalta arvioinneissa | Yleensä näennäistä tarkkuutta, vahva pelaamis- ja ansion suojelun riski |

Keskeinen jännite on **tarkkuus versus rehellisyys**. Yksi suorituskykyluku tiimiä kohti tai pahempaa, yksilöä kohti, on helppo vertailla ja asettaa järjestykseen, mutta tuo tarkkuus on yleensä näennäistä ja piilottaa todellisen epävarmuuden osoittamisesta ja laadusta siistin näköisen luvun taakse. Ratkaise jännite hyväksymällä vähemmän siisti, usean signaalin kuva rehellisenä kuvana ja vastustamalla johdon tai suoritusarviointiprosessien painetta supistaa se takaisin yhdeksi, väärin tarkaksi pisteeksi.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Yhdistääkö nykyinen suorituskyvyn mittauksemme useita toisiaan tukevia signaaleja, vai nojaako se yhteen lukuun, joka tuntuu tarkemmalta kuin se todellisuudessa on?** Auditoi se, mitä tällä hetkellä kutsutte "suorituskykymittariksi", ja tarkista, kuinka monta riippumatonta, toisiaan tukevaa signaalia siihen todella syötetään.

2. **Olemmeko koskaan lukeneet tiimin tai yksilön suorituskyvyn ansioksi ottamatta huomioon tuloksen todellisen syntymisen yhteistyöhön perustuvaa, tiimien välistä luonnetta?** Valitse tuore menestystarina ja jäljitä, kuinka paljon siitä riippui ihmisistä, päätöksistä tai aiemmasta työstä ansion saaneen tiimin tai yksilön ulkopuolella.

3. **Sisältääkö suorituskyvyn mittauksemme laadun, vai vain toimitusnopeuden ja tuotosmäärän?** Julkaistu ominaisuus, joka myöhemmin aiheutti merkittäviä tuotantohäiriöitä, ei pitäisi saada korkeaa suorituskykypistettä. Tarkista, havaitsisiko nykyinen mittauksemme tämän tapauksen.

4. **Miten mittaamme alusta- tai mahdollistavien tiimien suorituskykyä, kun niiden vaikutus tuloksiin on epäsuora?** Jos rehellinen vastaus on "emme kovin hyvin", tuo aukko kannattaa nimetä ja korjata suoraan sen sijaan, että nuo tiimit jätetään käytännössä mittaamatta tai mitataan epäreilusti asiakasnäkyvillä tulosmittareilla, jotka eivät sovi niiden työhön.

5. **Onko suorituskykydataa koskaan käytetty yksilöiden asettamiseen kilpailulliseen paremmuusjärjestykseen, muodollisesti tai epävirallisesti?** Tämä ajautuminen, samankaltainen kuin tyytyväisyysdatan riski aiheessa 3.2, vahingoittaa sekä datan rehellisyyttä että tiimin halukkuutta tehdä yhteistyötä avoimesti.

6. **Kun toisiaan tukevat signaalimme ovat eri mieltä, esimerkiksi korkea toimitusnopeus mutta nouseva virheprosentti, mitä päättelemme, ja käsitteleekö prosessimme tuon erimielisyyden hyvin?** Signaalien välinen erimielisyys on itsessään arvokasta tietoa. Keskustelkaa siitä, kohteleeko tiimi sitä nykyisin kohinana, jonka voi sivuuttaa, vai aitona löydöksenä, joka kannattaa tutkia.

## Sektorinäkökulma

**Startup-yritys.** Suorituskyky näkyy yleensä suoraan: toimiko ominaisuus, otettiinko se käyttöön, liikkuiko mittari. Muodollinen usean signaalin mittaus on tässä mittakaavassa usein tarpeetonta. Riski on pikemminkin se, että onnistuminen tai epäonnistuminen lasketaan liian nopeasti yhden ihmisen ansioksi nopeasti liikkuvassa, vahvasti yhteistyötä tekevässä pienessä tiimissä, jossa ansio ja syy kuuluvat harvoin vain yhdelle.

**Pieni yritys.** Yhdistä se toimitus- ja laatudata, joka sinulla jo on (aihe 2.10, aihe 5.1), suoraan ja rehelliseen keskusteluun siitä, auttoiko viimeaikainen työ liiketoimintaa, sen sijaan että rakentaisit muodollista usean signaalin instrumentointia, jota et jaksa ylläpitää.

**Suuryritys.** Täällä tiimitason, usean signaalin mittauksen kuri ansaitsee investointinsa, koska paine supistaa suorituskyky yhdeksi vertailukelpoiseksi luvuksi kymmenien tiimien yli on tässä voimakkainta, ja näennäisen tarkkuuden vahinko kertautuu koko organisaation resursointipäätöksissä. Vastusta tuota painetta eksplisiittisesti ja rakenna usean signaalin perustelu sille, miksi se on tärkeää.

**Julkishallinto.** Sen osoittaminen, että ohjelmistoinvestointi tuotti todellisia tuloksia, ei vain toimitettuja artefakteja, on usein keskeinen kysymys, jonka valvontaelin esittää. Usean signaalin suorituskyvyn mittaus, joka on sidottu eksplisiittisesti tulosmittareihin (aihe 5.3) pelkkien toimitukseen perustuvien sijaismittarien sijaan, antaa paljon vahvemman ja puolustettavamman vastauksen kuin pelkkä aktiivisuus- tai toimituslukumäärä.

## Esimerkit

**Suuryritys.** Vähittäiskauppateknologiayrityksen johto oli epävirallisesti asettanut ohjelmistotiimit paremmuusjärjestykseen sprintissä valmistuneiden tarinapisteiden mukaan ja käsitellyt tätä suorituskyvyn sijaismittarina. Otettuaan käyttöön usean signaalin lähestymistavan, joka yhdisti toimitusdatan, muutosten epäonnistumisprosentin ja julkaisun jälkeisen ominaisuuksien käyttöönoton, johto havaitsi, että tiimillä, jolla oli korkein tarinapisteiden valmistumisaste, oli yrityksen matalin ominaisuuksien käyttöönottoaste: ne julkaisivat nopeasti mutta rakensivat asioita, joita asiakkaat eivät käyttäneet. Kun tuon tiimin tiekartan painopisteet kohdennettiin uudelleen kattavamman suorituskykykuvan pohjalta, eikä harhaanjohtavan yhden luvun paremmuusjärjestyksen, merkittävä määrä ohjelmistokehityskapasiteettia ohjautui vaikuttavampaan työhön yhdessä neljänneksessä.

**Julkishallinto.** Kansallisen verohallinnon kehitysohjelman piti osoittaa valvontavaliokunnalle, että merkittävä järjestelmäinvestointi oli parantanut suorituskykyä, ei vain toimittanut sopimuksen mukaista laajuutta. Pelkän tarinapisteiden tai välietappien valmistumisen raportoinnin sijaan ohjelma esitti toisiaan tukevan signaalijoukon: pienentynyt käsittelyvirheiden osuus, lyhentynyt käsittelyajan mediaani ja kasvanut onnistuneiden itsepalvelusuoritusten osuus, kaikki sidottuina toimitettuihin järjestelmäkomponentteihin. Usean signaalin, tuloksiin sidottu esitys täytti valiokunnan tarkastelun tavalla, johon edellisen ohjelman yksinkertainen raportti "toimitettu aikataulussa" ei ollut pystynyt edellisenä vuonna.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Suorituskyvyn mittaamisen tuotto toisiaan tukevilla, tuloksiin sidotuilla signaaleilla näennäisen tarkan yhden luvun sijaan on parempia resursointipäätöksiä: organisaatio, joka näkee, minkä tiimien työ todella liikuttaa tuloksia, voi investoida lisää siihen, mikä on tärkeää, ja tutkia sitä, mikä ei toimi, sen sijaan että palkitsisi sitä tiimiä, joka sattuu näyttämään kiireisimmältä. Yllä oleva vähittäiskauppaesimerkki on tyypillinen: harhaanjohtava yhden luvun paremmuusjärjestys oli ohjannut investointihuomion pois sieltä, missä se olisi todella auttanut.

Omistamisen kokonaiskustannukset ovat korkeammat kuin yhden mittarin lähestymistavassa, koska se vaatii datan yhdistämistä useista lähteistä (toimitus, laatu, tulos) ja organisaation paineen vastustamista, joka pyrkii supistamaan kuvan takaisin yhdeksi vertailukelpoiseksi luvuksi. Tuo kustannus kannattaa maksaa, koska vaihtoehto, väärin tarkka yksi piste, johtaa aktiivisesti harhaan resursointipäätöksissä, joita suorituskykydatan on tarkoitus tukea.

## Antimallit ja sudenkuopat

- **Aktiivisuuden sekoittaminen suorituskykyyn:** yleisin virhe, jonka estämiseksi tämä ulottuvuus on nimenomaan suunniteltu.
- **Yksilön suorituskyvyn osoittaminen ansioksi yhteistyöhön perustuvissa, tiimien välisissä tuloksissa:** yleensä näennäistä tarkkuutta, joka heikentää yhteistyötä.
- **Laadun rajaaminen pois suorituskyvyn määritelmästä:** palkitsee työtä, joka julkaistaan mutta rikkoo jotain muuta.
- **Suoran tulosmittarin pakottaminen alusta- tai mahdollistaville tiimeille:** mittaa väärää asiaa työssä, joka on luonteeltaan epäsuoraa.
- **Useiden toisiaan tukevien signaalien supistaminen takaisin yhdeksi väärin tarkaksi luvuksi organisaation paineen alla:** menettää rehellisyyden, jonka tuottamiseksi usean signaalin lähestymistapa rakennettiin.
- **Suorituskykydatan käyttö yksilöiden kilpailulliseen paremmuusjärjestykseen:** vahingoittaa sekä datan rehellisyyttä että tiimin yhteistyötä.

## Kypsyysmalli

- **Taso 1, Aloittava:** Suorituskyky sekoitetaan aktiivisuuteen tai tuotosmäärään ja sitä mitataan yhdellä, tarkastelemattomalla luvulla.
- **Taso 2, Kehittyvä:** Joitakin laatusignaaleja otetaan huomioon tuotoksen rinnalla, mutta johdonmukaista usean signaalin lähestymistapaa ei ole ja yksilön ansioksi lukemista tapahtuu yhä epävirallisesti.
- **Taso 3, Vakioitu:** Suorituskykyä mitataan tiimitasolla useilla, toisiaan tukevilla signaaleilla, laatu mukaan lukien, johdonmukaisesti koko organisaatiossa.
- **Taso 4, Hallittu:** Toisiaan tukevien signaalien välistä erimielisyyttä tutkitaan aktiivisesti. Alusta- ja mahdollistavilla tiimeillä on asianmukaisen epäsuorat, niiden todelliseen työhön sopivat suorituskykymittarit.
- **Taso 5, Orkestroitu:** Suorituskykydata ohjaa suoraan resursointi- ja investointipäätöksiä, ja organisaatio voi osoittaa tiettyjä uudelleenkohdennuspäätöksiä, jotka usean signaalin näkymä mahdollisti ja yhden luvun näkymä olisi missannut.

## Keskusteluideoita

1. Mistä yhdestä luvusta, jota nyt käytämme suorituskyvyn sijaismittarina, meidän pitäisi luopua toisiaan tukevan joukon hyväksi?
2. Olemmeko koskaan antaneet tuloksen ansion väärälle tiimille tai henkilölle, koska osoittaminen oli epäselvää?
3. Miten mittaamme tällä hetkellä alusta- tai mahdollistavan tiimin suorituskykyä?
4. Miltä näyttäisi, jos toisiaan tukevat signaalimme olisivat ensi neljänneksellä keskenään eri mieltä?
5. Missä tarinapisteisiin tai toimitusmääriin perustuva paremmuusjärjestys on ohjannut investointihuomiomme väärään paikkaan?

## Keskeiset opit

- Suorituskyky mittaa, tuottiko työ **hyvän tuloksen**, ei sitä, kuinka paljon liikettä tapahtui. Älä sekoita sitä aktiivisuuteen (aihe 3.4).
- Käytä **useita, toisiaan tukevia signaaleja**, älä koskaan yhtä suorituskykylukua, ja suhtaudu epäillen näennäiseen tarkkuuteen.
- Mittaa **tiimi- tai järjestelmätasolla**. Tuloksen osoittaminen yksilön ansioksi on yleensä epäluotettavaa ja vahingoittaa yhteistyötä.
- **Laatu on osa suorituskykyä**, ei erillinen, irrallinen huoli.
- Anna alusta- ja mahdollistaville tiimeille **asianmukaisen epäsuorat** suorituskykymittarit sen sijaan, että pakottaisit niiden työhön huonosti sopivan suoran tulosmittarin.

## Lähteet ja lisälukemista

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren, Jez Humble, and Gene Kim (tulosperustainen suorituskyvyn mittaus).
- *Team Topologies*, by Matthew Skelton and Manuel Pais (alusta- ja mahdollistavien tiimien rakenteet ja niiden panoksen mittaaminen).
- *Measuring and Managing Performance in Organizations*, by Robert D. Austin (näennäisen tarkkojen suorituskykymittarien riskit).
