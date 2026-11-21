# 2.8 Lean-arvovirran mittarit

## Yleiskatsaus ja perustelut

Jokainen tähän mennessä tässä osassa käsitelty mittari, flow-aika, flow-kuorma, sykliaika ja käyttöaste, polveutuu paljon vanhemmasta työkalupakista: klassisen **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**-arvovirtakuvauksen viidestä perusmittauksesta, jotka kehitettiin Toyotalla ja yleistettiin valmistukseen, operaatioihin ja palvelutoimitukseen kauan ennen kuin ohjelmistoala otti ne käyttöön. **Läpimenoaika (LT)** on kokonaiskellonaika siitä, kun työtä pyydetään, siihen, kun se toimitetaan. **Prosessiaika (PT)** on yhden yksikön parissa käytetty varsinainen käsityöaika. **Sykliaika (CT)** on keskimääräinen aika, joka tarvitaan yhden solmun tai vaiheen valmistumiseen virrassa. **Täydellisten ja oikeiden osuus (%C/A)** on niiden yksiköiden prosenttiosuus, jotka alavirran tiimi voi käsitellä ilman uudelleentyöstöä. **Taktiaika** on enimmäisaika, joka yksikön valmistumiseen saa kulua, jotta se vastaa siististi asiakaskysyntää.

Tämä aihe on olemassa, koska ohjelmistotuotanto ei keksinyt näitä ajatuksia vaan lainasi ne, ja lainaaminen käytti joskus samoja sanoja hieman eri asioille. Tämän kirjan oma sykliaika (aihe 2.6) mittaa muutoksen ohjelmistotuotannon vaiheita erityisesti, koodaus, katselmointi, testaus, julkaisu, kun taas Leanin klassinen CT on yleisempi "keskimääräinen aika solmua kohti" mihin tahansa prosessiin sovellettuna. Flow-aika (aihe 2.4) on tämän kirjan nimi sille, mitä Lean kutsuu läpimenoajaksi. Vastaavuuden tunteminen on tärkeää, koska Lean Six Sigma -taustainen lukija, yleinen valmistuksessa, logistiikassa, terveydenhuollossa ja julkishallinnon operaatioissa, käyttää juuri näitä termejä niiden alkuperäisissä merkityksissä, ja ohjelmistotiimi, joka ei puhu samaa kieltä, menettää helpon, näyttöön perustuvan sillan ohjelmistotuotannon ulkopuolisiin kollegoihin.

Suurille tiimeille %C/A on tämän aiheen vähiten hyödynnetty mittari. Se tavoittaa jotain, mitä aiheiden 2.3 ja 2.4 flow-mittarit eivät: kuinka suuri osa siitä, mitä vaihe tuottaa, on seuraavan vaiheen käytettävissä ilman palauttamista. Koko monivaiheisen arvovirran yli koostettuna, käsite, jota valmistus kutsuu **läpäisykelpoisuuden tuloksi (rolled throughput yield)**, %C/A paljastaa, miten uudelleentyöstö kasautuu näkymättömästi luovutusten yli, kuvio, jolle pitkiä, usean tiimin putkia ajavat suuryritykset ja useita hyväksyntäportteja sisältävät julkishallinnon ohjelmat ovat erityisen alttiita ja jota ne harvoin mittaavat suoraan.

## Keskeiset periaatteet

- **Nämä viisi mittaria edeltävät ohjelmistoalaa ja yleistyvät sen ulkopuolelle.** Ne ovat yhteinen sanasto, jota Lean Six Sigma -koulutuksen saanut sidosryhmä, yleinen suuryrityksissä ja julkishallinnon operaatioissa, jo puhuu sujuvasti.
- **Terminologian törmäys on todellinen ja se kannattaa nimetä nimenomaisesti.** Tämän kirjan sykliaika (aihe 2.6) ja Leanin klassinen CT ovat toisiinsa liittyviä mutta eivät identtisiä. Dokumentoi vastaavuus, jotta toiminnallisten rajojen yli käytävät keskustelut eivät hiljaa puhu toistensa ohi.
- **%C/A pitää koostaa jokaisen vaiheen yli, ei mitata kerran lopussa.** Virran alussa syntynyt ja myöhään havaittu uudelleentyöstö on näkymätöntä mittarille, joka mitataan vain lopullisessa toimituksessa.
- **Taktiaika kehystää kapasiteettisuunnittelun kysynnän, ei vaivan ympärille.** Kysymys siirtyy kohdasta "kuinka nopeasti voimme mennä" kohtaan "kuinka nopeasti meidän täytyy mennä", mikä liittyy suoraan käyttöasteeseen (aihe 2.7) ja flow-kuormaan (aihe 2.4).
- **Nämä ovat diagnostisia mittareita, eivät kulissimittareita.** Jokainen on olemassa vastatakseen tiettyyn operatiiviseen kysymykseen, ei tuottaakseen vaikuttavan luvun mittaristoon.

## Suositukset

### Kartoita arvovirtasi kaikilla viidellä Lean-mittarilla ennen ohjelmistokohtaisen viitekehyksen käyttöönottoa

Laske läpimenoaika, prosessiaika, sykliaika, %C/A ja taktiaika edustavalle otokselle arvovirtasi läpi liikkuvaa työtä ennen kuin kerrostat Flow Frameworkin omat mittarit (aiheet 2.3 ja 2.4) niiden päälle. Tämä antaa lähtötason, jonka mikä tahansa Lean Six Sigma -osaava sidosryhmä ymmärtää välittömästi, ja se tuo usein esiin saman odotusajan hallitsevuuden, jonka aihe 2.5 kuvaa, ilmaistuna sanastolla, joka edeltää ja ylittää minkä tahansa tietyn ohjelmistoviitekehyksen.

### Koosta täydellisten ja oikeiden osuus kertolaskulla jokaisen vaiheen yli

Mittaa %C/A kussakin vaiheessa erikseen ja kerro sitten vaihetason prosentit yhteen saadaksesi arvovirran läpäisykelpoisuuden tulon. Kolme vaihetta, joista kukin on yksittäin 90 % täydellisiä ja oikeita, kasautuvat noin 73 %:iin kokonaisuutena, luku, joka ei muistuta lainkaan minkään yksittäisen vaiheen omaa raporttia ja on yleensä rehellisempi. Tämä yksittäinen laskelma on nopein tapa paljastaa, kuinka paljon uudelleentyöstöä monivaiheinen putki todella absorboi.

### Aseta taktiaika nimenomaisesti todellisesta asiakaskysyntädatasta, älä kapasiteetista

Laske taktiaika käytettävissä olevana työaikana jaettuna asiakaskysynnällä kyseisellä jaksolla, tietoisesti riippumatta siitä, kuinka nopeasti tiimisi sattuu tänään pystymään työskentelemään. Vertaa mitattua prosessiaikaasi ja sykliaikaasi tähän lukuun: taktiaikaa mukavasti alle jäävä prosessiaika osoittaa terveen joustovaran, kun taas taktiajan ylittävä sykliaika on konkreettinen, kvantifioitu näyttö kapasiteettivajeesta, ei vain tunne siitä, että asiat ovat jäljessä.

### Dokumentoi vastaavuus Lean-termien ja tämän kirjan oman sanaston välillä

Siellä, missä organisaatiossasi jo pyörii Lean Six Sigma -ohjelma ohjelmistoalan ulkopuolella tai missä ohjelmistotuotanto raportoi johdolle, joka puhuu tuota sanastoa sujuvasti, kirjoita vastaavuus nimenomaisesti mittarien peruskirjaasi (aihe 1.4): tämän kirjan flow-aika on Leanin läpimenoaika, tämän kirjan sykliaika (aihe 2.6) on Leanin yleisemmän CT:n erityinen sovellus, ja tämän kirjan aktiivinen aika (aihe 2.5) on Leanin prosessiaika. Tämä yksittäinen dokumentti estää toistuvan, vähäarvoisen väittelyn siitä, kenen luvut ovat "oikeita".

### Käytä %C/A:ta suojakaiteena flow-nopeuden rinnalla, älä sen korvikkeena

Pariuta läpäisykelpoisuuden tulo flow-nopeuden (aihe 2.3) kanssa samalla tavalla kuin tämä kirja pariuttaa jokaisen nopeusmittarin vakaussuojakaiteen kanssa. Nouseva kohdemäärä laskevan koostetun %C/A:n kanssa tarkoittaa, että arvovirta toimittaa yhä enemmän yksiköitä, jotka tarvitsevat yhä useammin uudelleentyöstöä myöhemmin, juuri sitä nopeus ilman laatua -kuviota, jota vastaan aihe 1.2 varoittaa jokaisen mittariperheen suojautumaan.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Vain klassiset Lean-mittarit (LT, PT, CT, %C/A, taktiaika) | Universaali sanasto; toimii ohjelmisto- ja ei-ohjelmistotiimeille | Ei ohjelmistokohtainen; vaatii käännöstä ohjelmistotuotannon erityisvaiheisiin |
| Vain Flow Frameworkin mittarit (aiheet 2.3, 2.4) | Rakennettu ohjelmistoarvovirroille ja kohdetyyppien näkyvyydelle | Tuntematon ohjelmistotuotannon ulkopuolisille Lean Six Sigma -koulutuksen saaneille sidosryhmille |
| Molemmat, dokumentoidulla nimenomaisella vastaavuudella | Puhuu molempia sanastoja; vahvin toiminnallisten rajojen ylittävä silta | Vaatii etukäteiskurin kirjata vastaavuus ylös ja pitää se ajan tasalla |
| %C/A mitattuna vain lopullisessa toimituksessa | Yksinkertainen, yksi luku | Piilottaa aiemmin virrassa syntyneen ja havaitun uudelleentyöstön |

Keskeinen jännite on **universaalisuus vastaan erityisyys**. Klassiset Lean-mittarit ovat välittömästi luettavissa kenelle tahansa, jolla on valmistuksen, operaatioiden tai Six Sigman kokemusta, mutta niitä ei suunniteltu ohjelmistotuotannon erityisvaiheita, koodikatselmointia, automaattista testausta ja julkaisuhyväksyntää, silmällä pitäen. Ratkaise jännite käyttämällä Lean-mittareita jaettuna lähtötasosanastona toiminnallisten rajojen ja johdon keskusteluissa ja Flow Frameworkin omia mittareita (aiheet 2.3 ja 2.4) ohjelmistokohtaiseen diagnostiseen työhön, jota ohjelmistotuotannon tiimit tekevät päivittäin.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Pystyisimmekö laskemaan kaikki viisi klassista Lean-mittaria arvovirrallemme tänään, vai onko meillä vain osa niistä?** Useimmilla ohjelmistotiimeillä on flow-aika ja sykliajan vastineet mutta ne eivät ole koskaan laskeneet prosessiaikaa, %C/A:ta tai taktiaikaa nimenomaisesti. Tunnista, mitkä viidestä oikeasti puuttuvat, ennen kuin oletat aukon olevan pieni.

2. **Olemmeko koskaan koostaneet %C/A:ta arvovirtamme jokaisen vaiheen yli, vai olemmeko mitanneet sitä vain lopullisessa toimituksessa?** Yksittäinen virran lopun mittaus piilottaa juuri sen kasautuvan uudelleentyöstön, jonka paljastamiseksi tämän aiheen läpäisykelpoisuuden tulon laskelma on suunniteltu. Kokeile koostelaskelmaa todellisella datalla.

3. **Tiedämmekö taktiaikamme, laskettuna todellisesta asiakaskysynnästä, ja miten mitattu sykliaikamme vertautuu siihen?** Useimmat tiimit eivät ole koskaan tehneet tätä vertailua nimenomaiseksi, mikä tarkoittaa, että kapasiteettikeskustelut pysyvät anekdoottisina eivätkä kvantifioiduina.

4. **Jos ohjelmistotuotannon ulkopuolinen Lean Six Sigma -koulutuksen saanut sidosryhmä kysyisi sykliajastamme, olisimmeko varmoja, että tarkoitamme samaa kuin hän?** Tämän kirjan sykliaika (aihe 2.6) ja Leanin klassinen CT ovat toisiinsa liittyviä mutta eivät identtisiä. Keskustelkaa, onko tämä ero koskaan aiheuttanut todellista väärinkäsitystä organisaatiossanne.

5. **Onko läpäisykelpoisuuden tulomme koskaan ollut merkittävästi matalampi kuin minkä tahansa yksittäisen vaiheen oma raportoitu %C/A?** Jos et ole koskaan laskenut koostetta, keskustelkaa siitä, mitä odottaisitte löytäväsi, ja tarkistakaa se sitten todellista dataa vasten.

6. **Pyöriikö organisaatiossamme jo Lean- tai Six Sigma -ohjelma ohjelmistoalan ulkopuolella, johon voisimme yhdenmukaistua sen sijaan, että ylläpitäisimme erillistä, irrallista sanastoa?** Monilla suuryrityksillä ja julkishallinnon virastoilla on jo tämä infrastruktuuri. Tarkista, onko ohjelmistotuotanto koskaan oikeasti yhdistänyt siihen.

## Sektorinäkökulma

**Startup-yritys.** Täysi Lean-arvovirtakuvaus on harvoin seremonian arvoinen tässä mittakaavassa, mutta taktiaika kannattaa ymmärtää epävirallisesti: sen tietäminen karkeasti, kuinka nopeasti tiimin todella täytyy liikkua vastatakseen todelliseen asiakaskysyntään mielivaltaisen sisäisen tahdin sijaan, estää sekä kapasiteetin ylirakentamisen liian aikaisin että alirakentamisen kasvun saapuessa.

**Pieni yritys.** %C/A on näistä viidestä mittarista välittömimmin hyödyllinen, koska se vastaa suoraan kysymykseen "kuinka suuri osa toimittamastamme täytyy tehdä uudelleen", kysymykseen, jonka omistajat ja pienet tiimit tuntevat kipeästi ilman että siihen aina liittyy lukua. Seuraa sitä epävirallisesti yhdelle tai kahdelle kriittiselle prosessille ennen kuin investoit mihinkään monimutkaisempaan.

**Suuryritys.** Tässä klassinen Lean-sanasto ansaitsee paikkansa, koska suuryrityksillä on hyvin usein jo Lean Six Sigma -ohjelma operaatioissa, valmistukseen liittyvissä divisioonissa tai jaetuissa palveluissa, ja ohjelmistotuotanto, joka puhuu samaa kieltä, saa välittömän, uskottavan sillan noihin toimintoihin sen sijaan, että sen täytyisi perustella erillistä, vain ohjelmistoa koskevaa mittarisarjaa alusta alkaen.

**Julkishallinto.** Julkishallinnon virastoilla, erityisesti niillä, joilla on juuret sääntely-, valmistukseen liittyvissä tai logistiikkatoiminnoissa, on usein olemassa Lean- tai prosessiparannusmandaatteja. Digitaalisen palvelun arvovirran kehystäminen samoilla klassisilla termeillä, läpimenoaika, prosessiaika, %C/A, taktiaika, joita viraston prosessiparannustoimisto jo käyttää, on usein nopein tapa varmistaa aito institutionaalinen tuki ohjelmiston uudistushankkeelle.

## Esimerkit

**Suuryritys.** Valmistusyrityksen sisäinen ohjelmistodivisioona oli vuosia kamppaillut saadakseen ohjelmistotuotannon mittarinsa otettua vakavasti tehtaan lattialta Lean Six Sigma -sujuvasti puhuvan operaatiojohdon keskuudessa. Divisioonan toimitusputken uudelleenkehystäminen samoilla viidellä klassisella mittarilla, läpimenoajan, prosessiajan, sykliajan, %C/A:n ja taktiajan laskeminen sen ohjelmistoarvovirralle, teki divisioonan luvut luettaviksi operaatiojohdolle ensimmäistä kertaa. Putken neljän vaiheen läpäisykelpoisuuden tulon laskelma paljasti todelliseksi %C/A:ksi 61 %, selvästi minkä tahansa yksittäisen vaiheen oman raportoidun luvun alapuolella, mikä muodostui näyttöpohjaksi uudelleentyöstön vähentämishankkeelle, jonka operaatiojohto rahoitti samalla vuosineljänneksellä.

**Julkishallinto.** Osavaltion liikenneviraston digitaalisen lupapalvelun tiimi, joka raportoi virastolle, jolla oli pitkäaikainen Lean-prosessiparannustoimisto, ei ollut koskaan ottanut tuohon toimistoon yhteyttä, koska sen omat mittarit käyttivät ohjelmistokohtaista kieltä, jota toimisto ei tunnistanut. Kun lupa-arvovirta oli käännetty läpimenoajaksi, prosessiajaksi ja %C/A:ksi, prosessiparannustoimisto tunnisti, että tiimin todellinen rajoite ei ollut ohjelmistotuotannon nopeus vaan alavirran oikeudellinen katselmointivaihe, joka toimi selvästi omaa tehollista taktiaikaansa hitaammin suhteessa lupakysyntään, havainto, jonka perusteella toimisto pystyi toimimaan välittömästi, koska se oli kehystetty tutuin termein.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Klassisen Lean-sanaston käyttöönoton tämän kirjan ohjelmistokohtaisten mittarien rinnalla tuotto on uskottava, välitön silta prosessiparannusosaamiseen ja -rahoitukseen, jota usein jo on muualla suuressa organisaatiossa. Yllä oleva valmistusyritysesimerkki, uudelleentyöstön vähentämisrahoituksen varmistaminen samalla vuosineljänneksellä kun uudelleenkehystäminen teki perustelun luettavaksi, on kuvio, jonka tämän aiheen lähestymistapa luotettavasti tuottaa: oivallus ei ollut uusi, mutta sanasto, joka teki sen toimintaan johtavaksi oikealle yleisölle, oli.

Omistamisen kokonaiskustannus (TCO) on matala: nämä viisi mittaria eivät vaadi uutta instrumentointia sen lisäksi, mitä aiheet 2.4–2.6 jo keräävät, sekä %C/A:n uudelleentyöstöluokittelua, joka on yleensä yksinkertainen lisäys olemassa olevaan virhe- ja flow-kohdeseurantaan (aihe 2.2). Pääinvestointi on käännös, tämän kirjan termien ja Leanin klassisten termien välisen vastaavuuden kirjaaminen, joka maksaa itsensä takaisin ensimmäisellä kerralla kun se estää toiminnallisten rajojen ylittävän väärinkäsityksen.

## Antimallit ja sudenkuopat

- **%C/A:n mittaaminen vain lopullisessa toimituksessa:** tämän aiheen ytimessä oleva pelaamisen tapa. Tiimi voi raportoida korkean lopullisen vaiheen %C/A:n samalla kun aiemmat vaiheet tuottavat hiljaa uudelleentyöstöä, joka korjataan ennen kuin kukaan mittaa sitä, mikä saa koko arvovirran näyttämään terveemmältä kuin se on. Suojakaide on %C/A:n koostaminen kertolaskulla jokaisen vaiheen yli, läpäisykelpoisuuden tulon laskelma, ja kunkin vaiheen "täydellinen ja oikea" -määritelmän auditointi ajoittain, jotta se ei voi hiljaa kaventua ajan myötä.
- **Olettamus, että tämän kirjan sykliaika ja Leanin klassinen CT tarkoittavat täsmälleen samaa:** tuottaa todellista toiminnallisten rajojen ylittävää sekaannusta, kun kaksi sanastoa kohtaavat ilman dokumentoitua vastaavuutta.
- **Taktiajan asettaminen nykykapasiteetista todellisen asiakaskysynnän sijaan:** romuttaa mittarin tarkoituksen, joka on paljastaa kuilu kysynnän ja kapasiteetin välillä, ei vahvistaa jo olemassa olevaa tahtia.
- **Klassisten Lean-mittarien kohteleminen vanhentuneina kun ohjelmistokohtainen viitekehys on otettu käyttöön:** hylkää uskottavan, näyttöön perustuvan sillan prosessiparannusosaamiseen, joka voi jo olla organisaatiossa.
- **Organisaation muualla olevan Lean Six Sigma -ohjelman sivuuttaminen:** menettää rahoituksen, osaamisen ja institutionaalisen uskottavuuden, jonka toimitusmittarien uudelleenkehystäminen jaetulla kielellä voisi avata.
- **%C/A:n raportointi ilman pariutusta flow-nopeuden kanssa:** antaa nousevan läpivirtausluvun piilottaa laskevan uudelleentyöstöosuuden, sama suojakaideaukko, jota tämä kirja varoittaa läpi kirjan.

## Kypsyysmalli

- **Taso 1, Aloittava:** Mitään viidestä klassisesta Lean-mittarista ei lasketa. Toimituksesta keskustellaan ilman viittausta läpimenoaikaan, prosessiaikaan tai %C/A:han.
- **Taso 2, Kehittyvä:** Läpimenoaikaa ja sykliaikaa seurataan epävirallisesti, mutta prosessiaikaa, %C/A:ta ja taktiaikaa ei lasketa, eikä vastaavuutta tämän kirjan omaan sanastoon ole.
- **Taso 3, Vakioitu:** Kaikki viisi klassista mittaria lasketaan johdonmukaisesti, ja vastaavuus tämän kirjan flow- ja sykliaikasanastoon on dokumentoitu jaettuun mittarien peruskirjaan.
- **Taso 4, Hallittu:** Läpäisykelpoisuuden tulo lasketaan arvovirran jokaisen vaiheen yli, ja taktiaikaa verrataan mitattuun sykliaikaan kapasiteettivajeiden kvantifioimiseksi nimenomaisesti.
- **Taso 5, Orkestroitu:** Organisaatio on yhdistänyt ohjelmistotoimituksen mittarinsa olemassa olevaan Lean- tai Six Sigma -ohjelmaan liiketoiminnan muualla ja voi osoittaa tiettyjä investointi- tai prosessipäätöksiä, jotka tehtiin, koska jaettu sanasto teki oivalluksesta toimintaan johtavan ohjelmistotuotannon ulkopuoliselle yleisölle.

## Keskusteluideoita

1. Pystyisimmekö laskemaan läpimenoajan, prosessiajan, sykliajan, %C/A:n ja taktiajan arvovirrallemme tänään?
2. Mikä läpäisykelpoisuuden tulomme olisi, jos kertoisimme yhteen jokaisen vaiheen %C/A:n?
3. Pyöriikö organisaatiossamme Lean- tai Six Sigma -ohjelma, johon emme ole koskaan yhdistäneet ohjelmistotuotannon mittareita?
4. Miten mitattu sykliaikamme vertautuu taktiaikaamme, laskettuna todellisesta asiakaskysynnästä?

## Keskeiset opit

- Viisi klassista Lean-mittaria, **läpimenoaika, prosessiaika, sykliaika, täydellisten ja oikeiden osuus sekä taktiaika**, edeltävät ohjelmistoalaa ja pysyvät Lean Six Sigma -koulutuksen saaneiden sidosryhmien yhteisenä sanastona.
- Tämän kirjan oma **flow-aika ja sykliaika vastaavat Leanin läpimenoaikaa ja klassista CT:tä mutta eivät ole identtisiä niiden kanssa**. Dokumentoi vastaavuus nimenomaisesti toiminnallisten rajojen ylittävän sekaannuksen välttämiseksi.
- Aiheen keskeinen pelaamisen tapa on **%C/A:n mittaaminen vain lopullisessa toimituksessa**. Suojakaide on sen koostaminen kertolaskulla jokaisen vaiheen yli läpäisykelpoisuuden tulona.
- **Taktiaika kehystää kapasiteetin todellisen asiakaskysynnän, ei olemassa olevan tahdin, ympärille** ja pariutuu suoraan käyttöasteen (aihe 2.7) ja flow-kuorman (aihe 2.4) kanssa.
- Ohjelmistotoimituksen kehystäminen klassisilla Lean-termeillä on usein nopein tapa yhdistää **olemassa olevaan prosessiparannusosaamiseen ja -rahoitukseen**, joka on jo suuressa organisaatiossa.

## Lähteet ja lisälukemista

- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., and Daniel T. Jones. *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, and Daniel Roos. *The Machine That Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill, 2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press, 1988.
