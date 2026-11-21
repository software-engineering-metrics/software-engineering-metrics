# 2.6 Sykliaika ja sen osat

## Yleiskatsaus ja perustelut

**Sykliaika** on muutoksen flow-ajan (aihe 2.4) sisäinen erittely sen ohjelmistotuotannon osavaiheisiin: koodausaika, katselmointiaika, testausaika ja julkaisuaika, joskus edelleen jaettuna noutoaikaan (kuinka kauan muutos odottaa ennen kuin kukaan aloittaa sen parissa) ja aktiiviseen aikaan (kuinka kauan kestää, kun joku aloittaa). Siinä missä flow-aika antaa yhden luvun siitä, kuinka kauan muutos kestää päästä päähän koko arvovirran läpi, [sykliaika](https://en.wikipedia.org/wiki/Cycle_time) kertoo, minne tuo aika todella menee, kun työ saavuttaa ohjelmistotuotannon, mikä on se diagnostinen kerros, jonka aihe 2.4 lupasi olevan oman yhteenvetolukunsa alla.

Tämä ero on tärkeä, koska "läpimenoaika on liian pitkä" ei ole sellaisenaan toimintaan johtava väite. Tiimi, jonka läpimenoaikaa hallitsee koodausaika, tarvitsee eri toimenpiteen kuin tiimi, jonka läpimenoaikaa hallitsee kolmen päivän katselmointijono, joka taas tarvitsee eri toimenpiteen kuin tiimi, joka menettää suurimman osan ajastaan epävakaaseen, hitaaseen testisarjaan. Ilman sykliajan erittelyä tiimit arvailevat pullonkaulaa, ja arvaus on väärä riittävän usein, jotta väärän vaiheen korjaaminen haaskaa todellista vaivaa samalla kun varsinainen rajoite pysyy koskemattomana.

Suurille tiimeille sykliajan erittely muuttaa organisaation laajuisen läpimenoajan heikkenemisen mysteeristä tietyksi, korjattavaksi ongelmaksi. Kun kymmenet tiimit jakavat yhteisen infrastruktuurin, jaettu katselmoinnin pullonkaula tai jaettu hidas CI-putki voi vetää jokaisen tiimin läpimenoaikaa alas samalla tavalla, ja vain tiimien välinen sykliaikavertailu paljastaa tuon jaetun juurisyyn sen sijaan, että jokainen tiimi arvailisi itsenäisesti omaa paikallista selitystään.

## Keskeiset periaatteet

- **Sykliaika selittää läpimenoajan. Se ei korvaa sitä.** Raportoi molemmat yhdessä, sykliaika diagnostiikkana ja läpimenoaika yhteenvetona.
- **Odotusaika yleensä hallitsee aktiivista aikaa.** Suurin osa ohjelmistotoimituksen viiveestä tulee jonossa joutilaana olevasta työstä, ei aktiivisesta vaivasta (aihe 2.5 käsittelee tämän suoraan flow-tehokkuuden kautta).
- **Erittele vaiheittain ennen korjauksen ehdottamista.** Väärään vaiheeseen kohdistettu korjaus haaskaa vaivaa ja voi lannistaa tiimiä, jota pyydetään "työskentelemään nopeammin", kun todellinen pullonkaula oli muualla.
- **Jaettu pullonkaula monien tiimien yli on alustainvestoinnin mahdollisuus**, ei vain sarja yksittäisiä tiimiongelmia.
- **Sykliaikadata on altis samoille pelaamisen riskeille kuin flow-aika** (aihe 2.4): tarkkaile vaiheiden rajoja, jotka siirtyvät hiljaa luvun imartelemiseksi.

## Suositukset

### Instrumentoi jokainen vaiheraja nimenomaisesti

Jaa muutoksen matka nimettyihin vaiheisiin, joilla on selkeät, instrumentoitavat rajat: koodaus (ensimmäisestä commitista avattuun pull requestiin), nouto (avatusta pull requestista ensimmäiseen katselmointiin), katselmointi (ensimmäisestä katselmoinnista hyväksyntään) ja julkaisu (hyväksynnästä tuotantoon). Kerää aikaleimat jokaiselle siirtymälle automaattisesti versionhallinnan ja CI/CD:n tapahtumista, ei itse raportoidusta vaiheseurannasta, soveltaen samaa instrumentointi itse raportoinnin sijaan -periaatetta aiheesta 1.5.

### Erota odotusaika aktiivisesta ajasta kunkin vaiheen sisällä

Katselmoinnin sisällä esimerkiksi erota aika, jonka pull request seisoo koskemattomana odottaen katselmoijan aloittamista (odotusaika), ajasta, jonka aktiivinen katselmointikeskustelu kestää kun se alkaa (aktiivinen aika). Tämä ero paljastaa yleensä, että hallitseva kustannus on jonotus, ei vaiva, mikä viittaa hyvin erilaiseen korjaukseen (enemmän katselmointikapasiteettia, parempi ilmoitus, pienemmät katselmoitavat pull requestit) kuin korjaukseen, jonka tarkoituksena on tehdä itse katselmointikeskusteluista nopeampia.

### Etsi jaettua pullonkaulaa ennen kuin diagnosoit tiimi kerrallaan

Kun useat tiimit osoittavat saman vaiheen hallitsevana viiveenään, hidas jaettu CI-putki, ylikuormitettu jaettu katselmointipooli, harvoin ajettava jaettu julkaisujuna, tuo jaettu syy on alustatason investoinnin mahdollisuus, ei sarja toisiinsa liittymättömiä paikallisia ongelmia. Kokoa sykliaikadata tiimien yli nimenomaan tämän kuvion etsimiseksi ennen kuin oletat jokaisen tiimin pullonkaulan olevan juuri sille tiimille ominainen.

### Käytä sykliaikaa realististen, vaihekohtaisten parannustavoitteiden asettamiseen

Yhden "lyhennä läpimenoaikaa 20 %" -tavoitteen sijaan, joka ei anna tiimille ohjausta siitä, mihin keskittyä, käytä sykliajan erittelyä vaihekohtaisen tavoitteen asettamiseen: "lyhennä katselmoinnin mediaaniodotusaika kahdesta päivästä neljään tuntiin". Täsmällinen, vaiheeseen kohdistettu tavoite on sekä tiimin helpompi toteuttaa että helpompi todentaa saavutetuksi todellisella prosessimuutoksella eikä jonkin muualla tapahtuneen aiheeseen liittymättömän siirtymän kautta.

### Tarkkaile vaiheen rajan pelaamista

Aivan kuten flow-ajan alku- ja loppupisteet voivat ajautua (aihe 2.4), yksittäisen sykliaikavaiheen rajat voivat siirtyä tavoilla, jotka imartelevat tietyn vaiheen lukua ilman todellista parannusta, esimerkiksi merkitsemällä katselmoinnin "alkaneeksi" heti kun katselmoija on määritetty sen sijaan, että hän todella aloittaa muutoksen lukemisen. Auditoi vaiheiden rajojen instrumentointi ajoittain dokumentoitua määritelmää vasten.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Karkea sykliaika (kaksi tai kolme vaihetta) | Yksinkertainen instrumentoida ja selittää | Ei välttämättä paikanna todellista pullonkaulaa riittävän tarkasti toimiakseen sen perusteella |
| Hienojakoinen sykliaika (monta vaihetta, odotus- ja aktiivisen ajan jako) | Tarkka diagnoosi, toimintaan johtavat vaihekohtaiset tavoitteet | Enemmän instrumentointivaivaa; enemmän ylläpidettäviä ja selitettäviä lukuja |
| Tiimi kerrallaan -sykliaikakatselmointi | Räätälöity kunkin tiimin todelliseen työnkulkuun | Voi ohittaa jaetun, tiimien välisen pullonkaulan, joka piilee samankaltaisten paikallisten lukujen takana |
| Tiimien yli koostettu sykliaikakatselmointi | Paljastaa jaetut alustatason pullonkaulat | Vaatii standardoidut vaihemäärittelyt tiimien yli ollakseen merkityksellinen |

Keskeinen jännite on **diagnostinen tarkkuus vastaan instrumentointikustannus**. Hienojakoisempi sykliajan seuranta antaa toimintaan johtavamman diagnoosin mutta maksaa enemmän rakentaa ja ylläpitää, ja lisää lukuja, jotka tiimin täytyy ymmärtää ja joihin sen täytyy luottaa. Ratkaise jännite aloittamalla karkeasti (koodaus, katselmointi, julkaisu) ja lisäämällä hienojakoisempia jakoja, odotus- ja aktiivinen aika tietyn vaiheen sisällä, vasta kun kyseinen vaihe on vahvistettu aidoksi, toistuvaksi pullonkaulaksi, joka ansaitsee ylimääräisen instrumentointi-investoinnin.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Jos läpimenoaika heikkenisi tänään, pystyisimmekö sanomaan tunnin sisällä, mikä tietty vaihe oli vastuussa, datan eikä arvailun perusteella?** Tämä on sykliaikainstrumentointinne diagnostisen tarkoituksen ydintesti. Jos rehellinen vastaus on ei, tuo aukko kannattaa sulkea ennen seuraavaa heikkenemistä.

2. **Kuinka suuri osa hallitsevan pullonkaulavaiheemme viiveestä on odotusaikaa verrattuna aktiiviseen aikaan?** Useimmat tiimit olettavat aktiivisen vaivan olevan rajoite ennen kuin tarkistavat, kun jonotus on yleensä suurempi kustannus. Hae todellinen jako hitaimmalle vaiheellesi ja katso, pitääkö oletus paikkansa.

3. **Jakavatko useat tiimit saman hallitsevan pullonkaulavaiheen, mikä viittaisi alustatason eikä tiimitason korjaukseen?** Kokoa sykliaikadatasi tiimien yli ja etsi nimenomaisesti tätä kuviota ennen kuin oletat jokaisen tiimin hitauden olevan paikallisesti aiheutettua.

4. **Olemmeko asettaneet vaihekohtaisia parannustavoitteita, vai vain yhden yleisen läpimenoaikatavoitteen ilman ohjausta siitä, mihin keskittyä?** Epämääräinen tavoite jättää tiimin arvailemaan, mihin sijoittaa vaivaa. Vaihekohtainen ei jätä. Tarkista nykyiset tavoitteesi tätä eroa vasten.

5. **Onko jokin instrumentoinnissamme oleva sykliaikavaiheen raja ajautunut dokumentoidusta määritelmästään ajan myötä?** Vaiheiden rajat ovat alttiita samalle määritelmälliselle ajautumiselle kuin flow-aika itse (aihe 2.4). Auditoi otos viimeaikaisista vaihesiirtymätapahtumista kirjallista määritelmää vasten.

6. **Miten katselmointipainotteinen kulttuuri verrattuna luottamuspainotteiseen kulttuuriin näkyy eri tavoin sykliaikadatassamme?** Tiimi, jolla on hyvin perusteellinen, usean kierroksen katselmointi, näyttää pidemmän katselmointivaiheen ajan kuin tiimi, joka luottaa yhden hyväksynnän yhdistämisiin. Keskustelkaa, heijastaako nykyinen tasapainonne tietoista valintaa vai tarkastelematonta oletusta.

## Sektorinäkökulma

**Startup-yritys.** Sykliaikaa hallitsee yleensä koodausaika katselmointi- tai julkaisuvaiheiden sijaan yksinkertaisesti siksi, että prosessi on minimaalinen. Kun tiimi kasvaa yli kourallisen kehittäjiä, ala tarkkailla katselmoinnin odotusaikaa erityisesti, koska se on yleensä ensimmäinen hidastuva vaihe, kun useamman ihmisen työn täytyy kulkea harvempien saatavilla olevien katselmoijien läpi.

**Pieni yritys.** Versionhallinta-alustan perusanalytiikka paljastaa yleensä riittävästi vaihetason ajoitusta (aika ensimmäiseen katselmointiin, aika yhdistämiseen) ilman mukautettua instrumentointia. Keskity ensin katselmointivaiheeseen, koska se on yleisin varhainen pullonkaula ja helpoin korjata pienellä prosessimuutoksella, kuten katselmoijien kierrolla.

**Suuryritys.** Jaetut pullonkaulat kymmenien tiimien yli ovat yleisiä ja niiden löytäminen on vipuvaikutukseltaan suurta: yksittäinen ylikuormitettu jaettu CI-jono tai pakollinen keskitetty katselmointivaihe voi hiljaa verottaa läpimenoaikaa koko organisaatiossa. Investoi nimenomaan tiimien väliseen sykliaikojen koostamiseen näiden jaettujen rajoitteiden esiin tuomiseksi sen sijaan, että jättäisit jokaisen tiimin diagnosoimaan itsenäisesti.

**Julkishallinto.** Sykliaikadata on vahva, konkreettinen työkalu prosessin modernisoinnin perustelemiseen epäileville sidosryhmille, koska "katselmoinnin odotusaika on keskimäärin neljä päivää yhden pullonkaulaisen hyväksyjäroolin vuoksi" on paljon vakuuttavampi, täsmällisempi perustelu investoinnille kuin abstrakti "prosessimme on hidas" -väite.

## Esimerkit

**Suuryritys.** Pilvi-infrastruktuuriyrityksen ohjelmistojohto huomasi läpimenoajan kasvavan lähes kaikissa tiimeissä samanaikaisesti. Tiimien välinen sykliaikojen koostaminen paljasti, että katselmoinnin odotusaika, ei aktiivinen katselmointiaika, oli hallitseva ja jaettu syy: pieni, keskitetty tietoturvakatselmointitiimi oli muuttunut pullonkaulaksi, kun heidän hyväksyntäänsä tarvitsevien tiimien määrä kasvoi nopeammin kuin itse tiimi. Laajemman tietoturvasertifioitujen katselmoijien poolin laajentaminen ja kouluttaminen sen sijaan, että yksittäisiä tiimejä olisi pyydetty jotenkin koodaamaan tai testaamaan nopeammin, ratkaisi jaetun pullonkaulan ja toi läpimenoajan takaisin alas koko linjalla yhdessä vuosineljänneksessä.

**Julkishallinto.** Osavaltion hallituksen digitaalisten palvelujen tiimi oli paineen alla lyhentää läpimenoaikaa ja vastasi aluksi pyytämällä kehittäjiä työskentelemään nopeammin, luonnollinen mutta lopulta hyödytön vaisto. Sykliajan erittely osoitti, että aktiivinen koodausaika oli tuskin muuttunut vuodesta toiseen. Lähes koko heikkeneminen tuli kasvavasta jonosta pakollisessa arkkitehtuurikatselmointivaiheessa, joka oli otettu käyttöön kahdeksantoista kuukautta aiemmin vaatimustenmukaisuustoimena. Tiimi suunnitteli katselmoinnin uudelleen kevyemmäksi, riskitasoitetuksi prosessiksi vähäriskisille muutoksille, lyhentäen katselmoinnin odotusaikaa merkittävästi samalla kun täysi katselmointiankaruus säilyi aidosti suuririskisille muutoksille.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Sykliajan erittelyn tuotto on kohdennettu, tehokas investointi: organisaatio, joka tietää täsmälleen, mikä vaihe on pullonkaula, voi korjata juuri sen vaiheen sen sijaan, että levittäisi vaivaa ohuesti koko prosessin yli toivoen jonkin auttavan. Yllä oleva tietoturvakatselmointiesimerkki on tyypillinen: tarkasti kohdennettu korjaus, yhden tietyn pullonkaulaisen resurssin laajentaminen, ratkaisi organisaation laajuisen ongelman paljon halvemmalla kuin laaja, kohdentamaton "nopeuta toimitusta" -aloite olisi tehnyt.

Omistamisen kokonaiskustannus (TCO) on instrumentointivaiva vaihetason aikaleimojen luotettavaksi keräämiseksi ja jatkuva kuri auditoida vaiheiden rajoja ajoittain ajautumisen varalta. Tuo kustannus kannattaa maksaa, koska vaihtoehto, pullonkaulojen arvaaminen ja väärän vaiheen korjaaminen, haaskaa ajan myötä paljon enemmän ohjelmistotuotannon vaivaa kuin itse instrumentointi maksaa.

## Antimallit ja sudenkuopat

- **Reagointi läpimenoajan heikkenemiseen ilman sykliaikadiagnoosia:** johtaa usein väärän vaiheen korjaamiseen.
- **Olettamus, että aktiivinen vaiva, ei odotusaika, on hallitseva kustannus:** yleensä väärä. Jonotus hallitsee useimmissa todellisissa toimitusputkissa (aihe 2.5).
- **Jaetun, tiimien välisen pullonkaulan ohittaminen tarkastelemalla sykliaikaa vain tiimi kerrallaan:** jättää vipuvaikutukseltaan suuren alustakorjauksen löytämättä.
- **Epämääräisen yleisen läpimenoaikatavoitteen asettaminen ilman vaihekohtaista ohjausta:** jättää tiimit arvailemaan, mihin vaiva kohdistetaan.
- **Vaiheen rajan määritelmän ajautuminen:** imartelee tietyn vaiheen lukua ilman todellista parannusta.
- **Jokaisen mahdollisen hienojakoisen vaiheen instrumentointi ennen kuin mikään niistä on vahvistettu aidoksi pullonkaulaksi:** haaskaa instrumentointivaivaa yksityiskohtaan, joka ei vielä tue päätöstä.

## Kypsyysmalli

- **Taso 1, Aloittava:** Sykliaikaa ei eritellä lainkaan. Tiimit arvailevat pullonkaulat läpimenoajan heikentyessä.
- **Taso 2, Kehittyvä:** Jotkin tiimit seuraavat karkeaa vaiheajoitusta epävirallisesti, mutta johdonmukaista instrumentointia tai tiimien välistä vertailua ei ole.
- **Taso 3, Vakioitu:** Vaiheiden rajat instrumentoidaan johdonmukaisesti koko organisaatiossa, ja odotusaika erotetaan aktiivisesta ajasta hallitsevissa pullonkaulavaiheissa.
- **Taso 4, Hallittu:** Tiimien välinen sykliaikojen koostaminen tuo aktiivisesti esiin jaetut pullonkaulat. Vaihekohtaiset parannustavoitteet korvaavat epämääräiset yleiset läpimenoaikatavoitteet.
- **Taso 5, Orkestroitu:** Sykliaikadata ohjaa suoraan alustainvestointien priorisointia, ja organisaatio voi osoittaa tiettyjä, kohdennettuja korjauksia, laajennetun katselmointipoolin tai nopeamman jaetun putken, jotka mitattavasti paransivat läpimenoaikaa monissa tiimeissä kerralla.

## Keskusteluideoita

1. Mikä on nykyinen hallitseva pullonkaulavaiheemme, ja kuinka varmoja olemme tuosta vastauksesta?
2. Kuinka suuri osa tuon pullonkaulavaiheen ajasta on odotusaikaa verrattuna aktiiviseen aikaan?
3. Jakavatko jotkin tiimimme saman pullonkaulan, mikä viittaisi alustatason korjaukseen?
4. Milloin viimeksi asetimme vaihekohtaisen, emme yleisen, toimituksen parannustavoitteen?
5. Onko vaiheen rajan määritelmä työkaluissamme koskaan muuttunut dokumentoimatta?

## Keskeiset opit

- Sykliaika **erittelee flow-ajan** ohjelmistotuotannon vaiheisiin, koodaus, katselmointi, testaus, julkaisu, ja on diagnostinen kerros tuon yhteenvetoluvun alla.
- Erota **odotusaika aktiivisesta ajasta** kunkin vaiheen sisällä. Jonotus yleensä hallitsee aktiivista vaivaa (aihe 2.5).
- Etsi **tiimien välisiä jaettuja pullonkauloja** ennen kuin oletat hidastumisen olevan tiimikohtainen. Jaettu syy on usein alustainvestoinnin mahdollisuus.
- Aseta **vaihekohtaisia parannustavoitteita**, ei epämääräisiä yleisiä tavoitteita, jotta tiimit tietävät täsmälleen, mihin keskittyä.
- Vaiheiden rajat ovat alttiita samalle **määritelmälliselle ajautumiselle** kuin flow-aika itse. Auditoi ne ajoittain.
- Aihe 2.7 antaa taustalla olevan matematiikan, Littlen lain, sille, miksi keskeneräinen työ ja sykliaika liikkuvat yhdessä.

## Lähteet ja lisälukemista

- *The Principles of Product Development Flow*, tekijä Donald G. Reinertsen (sykliaika-analyysin taustalla oleva jonoteoria ja eräkoon päättely).
- *Actionable Agile Metrics for Predictability*, tekijä Daniel S. Vacanti (sykliaika- ja virtauspohjainen mittaus ohjelmistotoimitukseen).
- *Accelerate: The Science of Lean Software and DevOps*, tekijät Nicole Forsgren, Jez Humble ja Gene Kim (läpimenoaika ja sen suhde toimitussuorituskykyyn).
- *The Goal*, tekijä Eliyahu M. Goldratt (rajoitteiden teoria ja periaate todellisen pullonkaulan löytämisestä ja korjaamisesta kaikkialla optimoinnin sijaan).
