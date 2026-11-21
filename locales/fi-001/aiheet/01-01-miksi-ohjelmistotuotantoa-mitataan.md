# 1.1 Miksi ohjelmistotuotantoa mitataan

## Yleiskatsaus ja perustelut

Ohjelmistotuotanto vastustaa mittaamista tavalla, johon valmistus ei samalla tavalla pysty. Tehdaslinja tuottaa identtisiä yksiköitä, joten niiden laskeminen kertoo jotain todellista. Ohjelmistotyö tuottaa ainutkertaisia artefakteja jatkuvasti muuttuvien vaatimusten keskellä, joten yksinkertainen laskenta, kuten commitit, koodirivit tai suljetut tiketit, kertoo toimitetusta arvosta lähes mitään. Juuri tuossa kuilussa ohjelmistotyön mittaamisen vaikeuden ja todellisen tarpeen tietää, sujuuko työ hyvin, elää koko tämä kirja. Tämä aihe käsittelee kuilun umpeen kurottamista rehellisesti: ei teeskentelemällä, että ohjelmistotyö olisi yhtä laskettavaa kuin nuppineulat, vaan olemalla tarkka siitä, mitä mittaaminen voi ja ei voi tehdä ohjelmistoorganisaatiolle.

Mittaaminen on olemassa vastatakseen kysymyksiin, joihin organisaatio ei muuten voi vastata varmuudella: nopeutuuko toimitus vai hidastuuko, paraneeko laatu vai heikkeneekö, uupuvatko kehittäjät, tuottaako tämä investointi. Ilman mittareita näihin kysymyksiin vastaa se, joka puhuu huoneessa varmimmin, yleensä paikalla oleva vanhin tai suostuttelevin henkilö, ja vastaus on usein väärä. [Ohjelmistotuotannon](https://en.wikipedia.org/wiki/Software_engineering) tiimit, jotka jättävät mittaamisen väliin, eivät vältä arvioimasta omaa suoritustaan. Ne tekevät arvionsa tunnelmien, anekdoottien ja tuoreusharhan varassa todisteiden sijaan.

Suurille tiimeille tämä ei ole enää mukava lisä vaan rakenteellinen tarve. Kuuden hengen tiimi voi jakaa yhteisen käsityksen siitä, miten menee, päivittäisen keskustelun kautta. Kuuden sadan hengen osasto, joka on hajautunut aikavyöhykkeille ja liiketoimintayksiköihin, ei voi. Tässä mittakaavassa jaettu ja luotettu lukujen joukko on ainoa käytännöllinen korvike sille epäviralliselle tietoisuudelle, jonka pieni tiimi saa ilmaiseksi. Suuryrityksen johto tarvitsee mittareita jakaakseen investoinnit kymmenille tiimeille, jotka kilpailevat samasta budjetista. Julkishallinnon ohjelmistoorganisaatiot tarvitsevat mittareita osoittaakseen lainsäätäjille ja yleisölle, että myönnetyillä varoilla syntyi todellista kyvykkyyttä eikä pelkkää aktiivisuutta. Kummassakin ympäristössä "teimme kovasti töitä" ei ole todiste, mutta puolustettavissa oleva luku on.

## Keskeiset periaatteet

- **Mittaa oppiaksesi, älä tuomitaksesi.** Ohjelmistotuotannon mittarin ensisijainen tarkoitus on tukea päätöstä, ei pisteyttää henkilöä tai tiimiä.
- **Luku ilman siihen liittyvää päätöstä on koriste.** Jos mikään mittarin lukema ei muuttaisi sitä, mitä teet seuraavaksi, se ei kuulu mittaristoon.
- **Mittaaminen on keino, ei tavoite.** Tavoite on parempi ohjelmisto, toimitettuna luotettavammin kestävän tiimin voimin. Mittarit ovat olemassa vain palvellakseen sitä tavoitetta.
- **Jokaisella mittarilla on hinta.** Instrumentointi, katselmointiaika ja aiheessa 1.2 käsitelty käyttäytymisen vääristymisen riski maksavat kaikki jotain. Mittarin on ansaittava tuo hinta takaisin.
- **Hiljaisuus on myös päätös.** Päätös olla mittaamatta jotain on valinta, jolla on seurauksia, ei neutraali oletus.

## Suositukset

### Lähde päätöksestä, älä mittaristosta

Ennen kuin instrumentoit mitään, nimeä päätös, jota mittari tukee. "Haluamme tietää, vähensikö uusi julkaisuputkemme häiriöiden määrää" on päätöksen muotoinen kysymys. "Seurataan kaikkea, minkä työkalu osaa viedä" ei ole. Taaksepäin päätöksestä työskentely pitää mittarisarjan pienenä ja jokaisen ruudun puolustettavana, kun joku kysyy, miksi se on olemassa. Jos et osaa nimetä päätöstä, jota mittari tukisi, älä rakenna sitä vielä. Aihe 1.3 syventää tämän kurin tulokset ennen tuotoksia -versiota.

### Erota diagnostinen käyttö arvioivasta käytöstä

Järjestelmän ongelman diagnosointiin käytetty mittari (miksi läpimenoaikamme venyy) käyttäytyy täysin eri tavalla kuin sama mittari, kun sillä arvioidaan henkilöä tai tiimiä (kenen läpimenoaika on huonoin). Ensimmäinen kutsuu tutkimaan ja parantamaan. Toinen kutsuu salaamaan ja pelaamaan, koska luvulla on nyt maineellinen tai taloudellinen seuraus. Päätä nimenomaisesti ja kirjallisesti, kumpaan käyttöön mittari on tarkoitettu, äläkä anna diagnostisen mittarin liukua arvioivaan käyttöön harkitsematta riskiä uudelleen. Tämä ero toistuu jatkuvasti läpi kirjan, ja se on muotoiltu aiheessa 1.4 kuvatun mittarien peruskirjan ei-tavoitteet-osioon.

### Kohtele mittaamista hypoteesina, älä tosiasiana

Mittari on sijaismittari jollekin, mistä todella välität, ei se itse. Julkaisutiheys on sijaismittari toimituskyvylle, ei toimituskyky itse. Kohtele jokaista mittaria jatkuvassa testissä olevana hypoteesina: seuraako tämä luku yhä sitä, mistä välitämme, vai onko maailma siirtynyt ja jättänyt sijaismittarin taakseen? Palaa tähän kysymykseen kiinteällä rytmillä sen sijaan, että olettaisit kaksi vuotta sitten hyvin valitun mittarin olevan yhä hyvin valittu, varsinkin kun työkalut, tiimirakenne tai (ks. osa 7) itse työn luonne muuttuvat.

### Tee mittaamattomuus näkyväksi

Suurissa organisaatioissa riskialtein aukko ei ole huono mittari vaan alue, jota kukaan ei mittaa lainkaan, koska sitä on vaikea instrumentoida: kehittäjäkokemus, tiimien välisten riippuvuuksien kitka, organisaation muistin rapautuminen. Nimeä nämä aukot nimenomaisesti mittarien peruskirjassasi sen sijaan, että annat niiden pysyä näkymättömissä oletuksena. Organisaatio, joka tietää, mitä se ei mittaa ja miksi, on paljon vahvemmassa asemassa kuin se, joka on hiljaa unohtanut näiden alueiden olemassaolon.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Raskas instrumentointi, paljon mittareita | Laaja näkyvyys, vähemmän sokeita pisteitä | Mittaristouupumus, suurempi pelattava pinta-ala, korkeammat ylläpitokustannukset |
| Minimaaliset, päätöslähtöiset mittarit | Fokus, matala kuormitus, jokainen mittari puolustettavissa | Riski missata valitun joukon ulkopuolella oleva nouseva ongelma |
| Mittarit vain diagnoosiin | Kannustaa rehelliseen raportointiin ja tutkimiseen | Johto voi silti käyttää niitä epävirallisesti arvioiviin tarkoituksiin |
| Yksilön arviointiin sidotut mittarit | Tuntuu vastuulliselta, helppo selittää johtajille | Voimakas pelaamiskannustin; vahingoittaa luottamusta; mittaa yleensä väärää asiaa |

Keskeinen jännite on **kattavuus vastaan fokus**, ja sitä terävöittää **diagnoosi vastaan tuomitseminen**. Liian vähän mittareita ja kehität sokeita pisteitä, jotka paljastuvat vasta kriisinä. Liian monta, eikä kukaan voi toimia yhdenkään perusteella, ja jokainen mittari, jolle liität arvioivaa painoa, kutsuu vääristymää. Ratkaise tämä aloittamalla minimaalisesti ja päätöslähtöisesti, lisäämällä mittarin vasta, kun tietty nimetty päätös sitä tarvitsee, ja puolustamalla vain diagnostisen käytön rajaa nimenomaisesti aiheen 1.4 hallintatyössä sen sijaan, että annat sen rapautua oletuksena.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Minkä päätöksen hyvä lukema ja huono lukema kumpikin laukaisisivat jokaisen nykyisen mittaristomme mittarin kohdalla?** Jos molemmat lukemat johtavat samaan toimintaan tai ei mihinkään toimintaan, mittari on koriste. Käy mittaristo läpi ruutu ruudulta ja pakota rehellinen vastaus jokaiselle. Tämä harjoitus puolittaa paisuneen mittariston rutiininomaisesti yhdellä istunnolla, koska suurin osa rönsyilystä kertyy mittareista, joita kukaan ei koskaan poista, ei mittareista, jotka joku on lisännyt tarkoituksella ja syyllä, joka yhä pätee.

2. **Mitkä mittareistamme ovat diagnostisessa käytössä ja mitkä ovat hiljaa muuttuneet arvioiviksi?** Järjestelmän rajoitteen ymmärtämiseksi rakennettu mittari voi ajautua tiimien tai yksilöiden asettamiseen järjestykseen kenenkään päättämättä sitä tarkoituksella, usein katselmointipalaverin ohimenevän kommentin kautta, joka muuttuu tavaksi. Kun tuo ajautuma on tapahtunut, luku lakkaa olemasta luotettava, koska ihmisillä on nyt syy saada se näyttämään hyvältä eikä tehdä siitä tarkka. Kirjaa jokaisen mittarin aiottu käyttö ja tarkista nykykäytäntö sitä vasten.

3. **Mitä emme mittaa, koska sitä on vaikea instrumentoida, ja mitä tuo aukko meille maksaa?** Vaarallisimmat sokeat pisteet ovat ne, jotka eivät koskaan päädy mittaristoon juuri siksi, että ne vastustavat helppoa mittaamista: tiimien välisten riippuvuuksien kitka, organisaation muistin rapautuminen tai hauraiden kiertoteiden hiljainen kasautuminen. Tuo mukanasi lista asioista, joista kaikki yksityisesti huolehtivat mutta joita kukaan ei seuraa, ja ole rehellinen siitä, miksi.

4. **Jos poistaisimme tämän mittarin huomenna, kuka huomaisi ja mitä hän menettäisi?** Mittari, jota kukaan ei kaipaisi, ei tue yhtäkään päätöstä. Tämä kysymys paljastaa kulissiruudut, jotka säilyvät pelkästä inertiasta. Suurelle organisaatiolle, jossa on kymmeniä tiimien mittaristoja, tämä karsimisen kuri on yhtä tärkeä kuin uusien mittarien lisäämisen kuri alun perin.

5. **Paljonko jokaisen mittaristomme mittarin tuottaminen ja ylläpito oikeasti maksaa, mukaan lukien instrumentoinnin takana oleva kehitysaika?** Mittarit eivät ole ilmaisia. Putket, mittaristot ja luvusta keskusteluun käytetty katselmointiaika kantavat kaikki toistuvaa kustannusta, jonka aliarvioi helposti, koska se jakautuu moniin pieniin tehtäviin eikä ole yksi näkyvä rivi. Tuo mukanasi todellinen instrumentoinnin ja ylläpidon työmäärä ja punnitse sitä kysymyksen 1 päätösarvoa vasten.

6. **Missä mittaaminen on tullut harkinnan korvikkeeksi ja missä harkinta mittaamisen korvikkeeksi?** Kumpikin epäonnistumistapa on todellinen. Tiimi, joka ulkoistaa jokaisen päätöksen mittaristolle, menettää kontekstuaalisen harkinnan, joka huomaa sen, minkä luku ohittaa. Tiimi, joka sivuuttaa saatavilla olevan datan huoneen äänekkäimmän äänen hyväksi, toistaa juuri sen ongelman, jolla tämä aihe alkoi. Tavoite on mittarit, jotka tukevat harkintaa, ei mittarit, jotka korvaavat sen.

## Sektorinäkökulma

**Startup-yritys.** Kun kehittäjiä on kourallinen, suurin osa siitä, mitä tämä aihe varoittaa, eli ajautuminen arvioivaan käyttöön, sokeat pisteet ja mittariston paisuminen, on helppo välttää jo siksi, että kaikki puhuvat päivittäin. Riski on päinvastainen: mittaamisen jättäminen kokonaan väliin, koska se tuntuu kuormalta, johon tiimillä ei ole varaa. Valitse kaksi tai kolme päätöksen muotoista kysymystä (toimitammeko riittävän nopeasti, pitääkö laatu) ja instrumentoi vain ne.

**Pieni yritys.** Ilman erillistä alusta- tai datatiimiä nojaa siihen, mitä nykyiset työkalusi jo raportoivat, sen sijaan että rakentaisit mukautettua instrumentointia. Maksupalvelun mittaristo, tukityökalun vasteaikamittarit ja CI-palvelusi build-historia kattavat yleensä tärkeimmät päätökset. Vastusta kiusausta ostaa erillinen ohjelmistotuotannon analytiikka-alusta ennen kuin olet osoittanut toimivasi sen kertoman perusteella.

**Suuryritys.** Keskeinen riski on mittarit, jotka ajautuvat hiljaa diagnostisesta arvioivaan käyttöön noustessaan johtoportaiden läpi, sekä mittaristot, jotka kasvavat kerrostumalla, koska kukaan ei omista karsimistehtävää. Hallinta (aihe 1.4) ei ole tässä mittakaavassa valinnaista. Yhdenmukaista määritelmät liiketoimintayksiköiden välillä ja rakenna säännöllinen poistokatselmointi itse mittariohjelmaan.

**Julkishallinto.** Mittareilla on täällä usein lakisääteistä tai budjettipainoa, mikä nostaa sekä niiden oikein tekemisen arvoa että väärin tekemisen hintaa. Lainsäätäjälle tai valvontaelimelle raportoitu luku tarvitsee dokumentoidun menetelmän, raportointijaksojen yli vakaan määritelmän ja rehellisyyttä rajoituksistaan. Kohtele lausetta "emme tällä hetkellä mittaa tätä" vastauksena, jota saatat joutua puolustamaan, älä piilotettavana yksityisenä puutteena.

## Esimerkit

**Suuryritys.** Globaalin vakuutusyhtiön ohjelmistoorganisaatio oli kasvanut yli kuudeksikymmeneksi scrum-tiimiksi, joilla kullakin oli oma epävirallinen mittaristonsa, eikä yksikään ollut vertailukelpoinen minkään toisen kanssa. Johto ei osannut vastata perustavaan kysymykseen: mikä kymmenestä strategisesta alustainvestoinnistamme todella tuottaa nopeampaa ohjelmistoa. Ratkaisu ei ollut lisää mittareita vaan vähemmän ja parempia: organisaatio määritteli jaetun, päätöslähtöisen DORA-mittarien ytimen (aihe 2.10), laski sen kaikkialla samalla tavalla samasta putkidatasta, poisti neljäkymmentä tiimikohtaista mittaristoa ja pystyi vihdoin vertaamaan investointialueita yhteisellä pohjalla kahdessa vuosineljänneksessä.

**Julkishallinto.** Kansallisen verohallinnon digitaalisen palvelun tiimiä oli pyydetty valvontavaliokunnan toimesta osoittamaan monivuotisen uudistusohjelman tuotto. Tiimin olemassa olevat mittarit olivat kokonaan sisäisiä ja aktiivisuuteen perustuvia: valmistuneet tarinapisteet, suljetut sprintit. Mikään niistä ei vastannut valiokunnan todelliseen kysymykseen. Tiimi rakensi sen sijaan pienen joukon tulosmittareita: kansalaisen veroilmoitusongelman ratkaisun mediaaniaika, digitaalisen kanavan käyttöönottoaste ja karanneiden virheiden osuus uudessa järjestelmässä. Tiimi raportoi ne neljännesvuosittain dokumentoidulla menetelmällä. Valiokunnan kysymykset siirtyivät muodosta "todista, että teette töitä" muotoon "miten toistamme tämän seuraavassa virastossa", mikä on juuri se tulos, jonka hyvin valitun mittarisarjan on tarkoitus tuottaa.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Harkitun mittaamisen tuotto on päätösten laatu. Organisaatio, joka voi sanoa todisteiden kanssa "läpimenoaikamme parani 30 % alustainvestoinnin jälkeen", voi puolustaa investointia, toistaa sen, mikä toimi, ja lopettaa sen, mikä ei. Anekdootteihin nojaava organisaatio ei pysty mihinkään tästä varmuudella ja päätyy käymään samat väittelyt uudelleen jokaisella budjettikierroksella, koska kukaan ei voi osoittaa lukua, johon kumpikin osapuoli luottaa.

Mittaamisen kustannus ei ole mittaristo. Se on jatkuva kuri: instrumentointi, määritelmien ylläpito ja tämän aiheen suosittelema ajoittainen karsiminen. Tuo omistamisen kokonaiskustannus (TCO) on todellinen mutta vaatimaton verrattuna vaihtoehdon hintaan, eli suuren organisaation moni miljoonaa maksaviin teknologiapäätöksiin sen perusteella, kuka argumentoi suostuttelevimmin huoneessa. Mittariohjelman tuotto ei ole itse mittarit vaan niiden ansiosta parantuneet päätökset.

## Antimallit ja sudenkuopat

- **Kaiken mittaaminen, minkä työkalu vie:** muuttaa mittariston kohinaksi ja kutsuu pelaamaan valtavalla pinta-alalla ilman vastaavaa päätösarvoa.
- **Mittarit ilman nimettyä päätöstä:** koriste, joka maksaa ylläpitotyötä eikä kerro kenellekään mitään toimittavaa.
- **Hiljainen ajautuminen diagnostisesta arvioivaan käyttöön:** nopein yksittäinen tapa tuhota luottamus lukuun.
- **Mittarin kohteleminen tosiasiana hypoteesin sijaan:** sijaismittari, joka oli oikea kaksi vuotta sitten, voi olla väärä tänään, eikä kukaan tarkista.
- **Huonon luvun puuttumisen sekoittaminen hyvän luvun olemassaoloon:** mittari, jota et koskaan katso, ei voi kertoa, että jokin on pielessä.
- **Mittauskyvyn rakentaminen ennen kuin on päätetty, mitä päätetään:** kysymystä etsivä instrumentointi haaskaa todellista kehitysaikaa.

## Kypsyysmalli

- **Taso 1, Aloittava:** Mittarit, jos niitä on lainkaan, ovat ad hoc -luonteisia, henkilökohtaisia sille, joka ne rakensi, eikä kukaan osaa sanoa, mitä päätöstä mikään niistä tukee.
- **Taso 2, Kehittyvä:** Joillekin tiimeille on perusjoukko mittareita, enimmäkseen kopioituna viitekehyksestä tai työkalun oletuksista, ilman selvää yhteyttä päätökseen.
- **Taso 3, Vakioitu:** Jokaisella seurattavalla mittarilla on dokumentoitu tarkoitus ja nimenomainen luokitus diagnostinen vastaan arvioiva, jota sovelletaan johdonmukaisesti koko organisaatiossa.
- **Taso 4, Hallittu:** Mittareita katselmoidaan kiinteällä rytmillä niiden tukemia päätöksiä vasten. Mittarit, jotka eivät enää ansaitse paikkaansa, poistetaan, ja koko joukon kustannus mitataan arvon rinnalla.
- **Taso 5, Orkestroitu:** Mittaaminen on elävä kyvykkyys: organisaatio tunnistaa rutiininomaisesti omat sokeat pisteensä, testaa seuraavatko sen sijaismittarit yhä todellisuutta ja kohtelee mittariohjelmaa itseään asiana, jota parannetaan eikä vain ylläpidetä.

## Keskusteluideoita

1. Minkä mittaristomme mittarin säilyttämistä olisi vaikeinta perustella, jos sitä kysyttäisiin tänään?
2. Minkä päätöksen olemme tehneet viimeisen vuosineljänneksen aikana mittarin eikä mielipiteen perusteella?
3. Missä organisaatiossamme diagnostinen mittari on hiljaa muuttunut arvioivaksi?
4. Mitä pelkäämme mitata, ja miksi?
5. Jos mittariohjelmamme katoaisi huomenna, mitkä päätökset huononisivat?

## Keskeiset opit

- Mittaaminen palvelee **päätöksiä**, se ei ole olemassa itseään varten. Mittari ilman siihen liittyvää päätöstä on koriste.
- Pidä **diagnostinen** käyttö erillään **arvioivasta** käytöstä kirjallisesti ja varo hiljaista ajautumista niiden välillä.
- Kohtele jokaista mittaria **hypoteesina** siitä, mitä se edustaa, ei vakiintuneena tosiasiana, ja palaa hypoteesiin rytmillä.
- Hiljaisuus eli päätös olla mittaamatta jotain on itsessään päätös, jolla on seurauksia. Tee sokeat pisteet näkyviksi sen sijaan, että annat niiden pysyä näkymättöminä oletuksena.
- Mittariohjelman kokonaiskustannus on todellinen. Punnitse sitä nimenomaisesti jokaisen mittarin tuottamaa päätösarvoa vasten.

## Lähteet ja lisälukemista

- *Accelerate: The Science of Lean Software and DevOps*, tekijät Nicole Forsgren, Jez Humble ja Gene Kim (tulospohjaisen ohjelmistotuotannon mittaamisen tutkimuspohja).
- *How to Measure Anything*, tekijä Douglas W. Hubbard (yleinen viitekehys mitattavuudeltaan mahdottomilta tuntuvien asioiden kvantifiointiin).
- *Measuring and Managing Performance in Organizations*, tekijä Robert D. Austin (perustava analyysi toimintahäiriöistä, joita mittaaminen voi tuoda organisaatioon).
- *Thinking, Fast and Slow*, tekijä Daniel Kahneman (kognitiiviset vinoumat, jotka tekevät avustamattomasta harkinnasta epäluotettavan mittaamisen korvikkeen).
- Googlen DevOps Research and Assessment (DORA) -ohjelma, [dora.dev](https://dora.dev/) (jatkuva State of DevOps -tutkimus, johon tämä kirja nojaa läpi kirjan).
