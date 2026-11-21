# 2.5 Flow-tehokkuus ja keskeneräinen työ

## Yleiskatsaus ja perustelut

**Flow-tehokkuus** on työn aktiivisen ajan suhde kokonaisaikaan: jos muutos viettää kymmenen tuntia aktiivisesti koodattuna, katselmoituna ja testattuna mutta seisoo joutilaana jonoissa yhteensä yhdeksänkymmentä tuntia koko matkansa aikana, flow-tehokkuus on 10 %. Useimmat ohjelmistotoimitusputket asettuvat rehellisesti mitattuina johonkin 10 %:n ja 25 %:n välille, mikä yllättää ihmiset, jotka odottavat vaivan hallitsevan. Useimpien toimitusjärjestelmien hallitseva kustannus ei ole se, kuinka kauan työn tekeminen kestää, vaan se, kuinka kauan työ odottaa aloittamista.

**[Keskeneräinen työ](https://en.wikipedia.org/wiki/Work_in_process)** (WIP) on yhtä aikaa aktiivisesti työn alla olevien kohteiden lukumäärä tiimin tai järjestelmän yli, sama suure, jota aihe 2.4 kutsuu "flow-kuormaksi". Tämän aiheen taustalla oleva vastaintuitiivinen havainto, jota tukevat vuosikymmenten tutkimus operatiivisessa johtamisessa ja joka on formalisoitu ohjelmistotoimitukseen kanbanin ja jonoteorian kautta, on, että WIP:n rajoittaminen yleensä *lisää* läpivirtausta eikä vähennä sitä, koska vähemmän työtä yhtä aikaa käynnissä tarkoittaa vähemmän kontekstinvaihtoa, lyhyempiä jonoja ja nopeampaa valmistumista kohdetta kohti, vaikka tuntuu siltä, että vähemmän yhtä aikaa tehtävää työtä pitäisi tuottaa vähemmän tuotosta kokonaisuudessaan.

Suurille tiimeille flow-tehokkuuden ymmärtäminen kehystää lähes jokaisen toimitusongelman uudelleen muodosta "ihmisten täytyy työskennellä nopeammin" muotoon "työn täytyy odottaa vähemmän". Tuo uudelleenkehystys on tärkeä, koska ensimmäinen kehys kutsuu painostamaan yksilöitä, juuri sitä ansaa, josta aihe 2.6 varoittaa, kun taas toinen kutsuu tutkimaan jonorakennetta, katselmointikapasiteettia ja sitä, kuinka paljon työtä aloitetaan samanaikaisesti, mikä on yleensä se paikka, jossa todellinen, kestävä parannus on. Suuryritykset, jotka tasapainottelevat monien rinnakkaisten hankkeiden kanssa jaettujen tiimien yli, ovat erityisen alttiita korkealle WIP:lle ja matalalle flow-tehokkuudelle, koska uuden työn aloittaminen tuntuu aina edistymiseltä silloinkin, kun se hiljaa hidastaa kaikkea jo käynnissä olevaa.

## Keskeiset periaatteet

- **Odotusaika, ei aktiivinen vaiva, hallitsee useimpia toimitusputkia.** Alle 25 %:n flow-tehokkuus on tyypillistä, ei merkki rikkinäisestä tiimistä.
- **Keskeneräisen työn rajoittaminen yleensä lisää läpivirtausta**, ei vähennä sitä, vähentämällä kontekstinvaihtoa ja lyhentämällä jonoja.
- **Uuden työn aloittaminen tuntuu edistymiseltä. Työn valmiiksi saattaminen tuottaa arvoa.** Nämä eivät ole sama asia, ja organisaatiot sekoittavat ne rutiininomaisesti.
- **Korkea WIP on usein näkymätön kunnes se mitataan.** Tiimi voi tasapainotella paljon useamman rinnakkaisen työn kanssa kuin kukaan yksilönä tajuaa.
- **Tämä on järjestelmätason mittari, ei yksilön.** WIP-rajojen soveltaminen yksilöiden rankaisemiseen ymmärtää väärin koko tekniikan pointin.

## Suositukset

### Mittaa flow-tehokkuus ennen kuin oletat vaivan olevan pullonkaula

Laske aktiivisen ajan suhde kokonaiskuluneeseen aikaan edustavalle otokselle viimeaikaisia muutoksia käyttäen aiheen 2.6 sykliaikavaihedataa. Useimmat tiimit, jotka mittaavat tätä ensimmäistä kertaa, yllättyvät, kuinka matala luku on, ja tuo yllätys on itsessään arvokas: se ohjaa huomion kohdasta "tee kovemmin töitä" kohtaan "vähennä jonotusta", mikä on lähes aina tuottavampi vipu.

### Aseta nimenomainen keskeneräisen työn raja ja valvo sitä näkyvästi

Rajoita kohteiden määrä, jonka tiimillä tai yksilöllä voi olla aktiivisesti työn alla kerralla, näkyvästi jaetulla taululla (fyysinen tai digitaalinen kanban-taulu on klassinen toteutus). Kun raja saavutetaan, tiimin seuraava toimi on auttaa saattamaan valmiiksi jotain jo käynnissä olevaa, ei aloittaa jotain uutta. Tämä yksittäinen käytäntö, lainattu lean-valmistuksesta ja formalisoitu kanbanissa, on yksi ohjelmistotiimin saatavilla olevista johdonmukaisimmin tehokkaista flow-parannuksista, ja sen toteuttaminen maksaa lähes ei mitään.

### Kohtele WIP-rajaa järjestelmän rajoitteena, älä yksilön kiintiönä

WIP-raja säätelee, kuinka paljon työtä *järjestelmällä* (tiimillä, jaetulla katselmointijonolla, jaetulla ympäristöllä) on kerralla käynnissä, ei sitä, kuinka paljon kukin yksittäinen henkilö saa koskea. Rajan soveltaminen yksilön suorituskiintiönä, "sinulla saa olla vain kaksi tikettiä auki", soveltaa tekniikkaa väärin ja riskeeraa juuri sellaisen yksilötason pelaamisen, josta tämä kirja varoittaa läpi kirjan. Raja on olemassa suojelemaan virtausta koko järjestelmän läpi, ja sen valvonnan pitäisi olla tiimin normi, ei henkilökohtainen katto.

### Tutki, miksi työ seisoo joutilaana, ei vain kuinka kauan

Kun flow-tehokkuusanalyysi paljastaa pitkiä odotusaikoja, kysy erityisesti miksi: odottaako työ, koska katselmoija ei ole saatavilla, koska jaettu testiympäristö on varattu tai koska riippuvuus toiseen tiimiin ei ole vielä valmistunut. Jokaisella näistä on eri korjaus. Yleinen "vähennä odotusaikaa" -ohje ilman tätä erityistä tutkimusta tuottaa yleensä yleisiä, tehottomia vastauksia.

### Tarkkaile WIP:n hiipimistä takaisin ylös alkuperäisen parannuksen jälkeen

Tiimit, jotka onnistuneesti ottavat WIP-rajan käyttöön, näkevät usein sen rapautuvan ajan myötä, kun paine aloittaa uusia hankkeita palaa, "vain tämän kerran, meidän täytyy aloittaa tämä kiireellinen asiakin". Kohtele jokaista WIP-rajan poikkeusta tietoisena, näkyvänä päätöksenä, jolla on ilmoitettu syy, ei hiljaisena, rutiinina ohituksena, jotta rajan kuri ei hiljaa rapaudu takaisin alkuperäiseen tilaansa.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei WIP-rajaa | Tuntuu joustavalta; ei kitkaa uuden työn aloittamisessa | Kontekstinvaihto ja jonotus hidastavat hiljaa kaikkea |
| Tiimitason WIP-raja | Parantaa läpivirtausta ja flow-tehokkuutta mitattavasti | Vaatii kuria valvoa, erityisesti määräaikapaineessa |
| Yksilötason WIP-kiintiö | Yksinkertainen ilmaista | Soveltaa tekniikkaa väärin; riskeeraa yksilön pelaamisen |
| Tiukka, taipumaton WIP-raja | Suurin flow-tehokkuushyöty | Voi tuntua jäykältä aidosti kiireellisissä, poikkeuksellisissa tilanteissa |

Keskeinen jännite on **joustavuus vastaan virtaus**. Uuden työn aloittaminen aina kun se vaikuttaa kiireelliseltä tuntuu vastaanottavaiselta, mutta flow-tehokkuus- ja WIP-tutkimus osoittaa johdonmukaisesti, että tämä joustavuus tulee sen hinnalla, ettei mitään saada valmiiksi nopeasti, koska enemmän rinnakkaista työtä tarkoittaa pidempiä jonoja ja enemmän kontekstinvaihtoa kaikelle jo käynnissä olevalle. Ratkaise jännite ottamalla tiimitason WIP-raja oletukseksi, tietoisella, näkyvällä ja harvinaisella poikkeusprosessilla aidoille hätätilanteille, jäykän, ei-poikkeuksia-sääntöjen tai rajoittamattoman, joustavan sekasorron sijaan.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Mikä on todellinen flow-tehokkuutemme, mitattuna todellisesta sykliaikadatasta, ja yllättääkö luku meidät?** Useimmat tiimit eivät ole koskaan laskeneet tätä ja olettavat sen olevan paljon korkeampi kuin se osoittautuu. Hae otos viimeaikaisia muutoksia ja laske suhde rehellisesti ennen kuin keskustelette mistään muusta tässä aiheessa.

2. **Kuinka paljon keskeneräistä työtä meillä todella on juuri nyt koko tiimin yli, ja tiesikö kukaan tuon luvun ennen laskemista?** Korkea WIP on usein näkymätön kunnes se mitataan nimenomaisesti, koska jokainen yksilö näkee vain oman osansa siitä. Laske kaikki tällä hetkellä työn alla oleva, mukaan lukien työ, jota kukaan ei tänään aktiivisesti koske.

3. **Jos ottaisimme käyttöön WIP-rajan, mitä meidän pitäisi muuttaa siinä, miten reagoimme uuteen kiireelliseen pyyntöön?** Tämä kysymys tuo esiin todellisen organisaation tavan, uuden työn refleksinomaisen aloittamisen, jonka keskeyttämiseksi WIP-raja on suunniteltu, ja siitä kannattaa keskustella ennen rajan valvonnan yrittämistä, ei sen jälkeen.

4. **Kun työ seisoo joutilaana putkessamme, mikä on tarkka syy, ja onko se joka kerta sama syy?** Yleinen tunne, että "asiat odottavat", on vähemmän hyödyllinen kuin tietty, toistuva syy: käytettävissä oleva katselmoija, varattu jaettu ympäristö, tiimien välinen riippuvuus. Nimeä todellinen kuvio todellisista viimeaikaisista esimerkeistä.

5. **Olemmeko koskaan ottaneet WIP-rajan käyttöön ja katsoneet sen hiljaa rapautuvan poikkeusten kautta?** Tämä on erittäin yleistä ja siitä kannattaa keskustella rehellisesti: mikä paine aiheutti ensimmäisen poikkeuksen, ja muuttuivatko poikkeukset uudeksi normaaliksi ilman että kukaan päätti sitä nimenomaisesti.

6. **Pitäisikö WIP-rajan meidän kontekstissamme soveltua yksilön, tiimin vai jaetun resurssin tasolla (kuten katselmointijono tai testiympäristö)?** Eri pullonkaulat vaativat rajoja eri tasoilla, ja rajan soveltaminen väärällä tasolla, yksilökiintiöt jaetun jonon katon sijaan, voi soveltaa koko tekniikkaa väärin.

## Sektorinäkökulma

**Startup-yritys.** Pienellä ihmismäärällä WIP on usein luonnostaan matala yksinkertaisesti siksi, ettei ole tarpeeksi kehittäjiä aloittamaan paljon työtä samanaikaisesti. Riski on päinvastainen: perustaja tai johtava kehittäjä, joka henkilökohtaisesti tasapainottelee paljon useamman rinnakkaisen hankkeen kanssa kuin tajuaa, minkä mittaamista kannattaa harkita ilman muodollisia kanban-työkaluja.

**Pieni yritys.** Yksinkertainen näkyvä taulu, fyysinen tai perustason digitaalinen työkalu, nimenomaisella sarakerajalla riittää suurimman hyödyn saamiseen ilman investointia hienostuneisiin flow-mittaristotyökaluihin. Aloita runsaalla rajalla ja kiristä sitä vähitellen tiimin tottuessa kuriin.

**Suuryritys.** Korkea WIP on tässä erityisen yleinen ja erityisen kallis, koska monet rinnakkaiset strategiset hankkeet kilpailevat samasta jaetusta ohjelmistotuotannon kapasiteetista, ja uuden aloittaminen näyttää aina edistymiseltä sille, joka sen sponsoroi. Tee WIP näkyväksi salkkutasolla, ei vain tiimitasolla, jotta johto näkee vielä yhden hankkeen aloittamisen kustannuksen ennen nykyisten valmiiksi saattamista.

**Julkishallinto.** Monivuotiset ohjelmat kasaavat usein valtavan implisiittisen WIP:n monien työvirtojen yli, joista kukin on yksittäin perusteltu, ilman organisaation laajuista näkyvyyttä kokonaisuuteen. Salkkutason WIP-näkyvyyden käyttöönotto, vaikka epävirallisesti, on usein vakuuttavin yksittäinen argumentti työn jaksottamiselle kaiken rinnakkaisajon sijaan, koska korkean WIP:n flow-tehokkuuskustannus kasautuu näkyvästi kun se mitataan.

## Esimerkit

**Suuryritys.** Rahoituspalveluyrityksen alustatiimi tasapainotteli kahdeksantoista rinnakkaisen hankkeen kanssa vain kahdentoista kehittäjän voimin, WIP-kapasiteettisuhde, jota kukaan ei ollut oikeasti laskenut ennen kuin uusi ohjelmistotuotannon johtaja pyysi sitä suoraan. Flow-tehokkuus tiimin työssä mitattiin alle 12 %:ksi. Tiimi otti käyttöön nimenomaisen WIP-rajan, yksi aktiivinen hanke kahta kehittäjää kohti, ja keskeytti tietoisesti useita matalamman prioriteetin hankkeita sen sijaan, että olisi jatkanut kapasiteetin levittämistä ohueksi. Läpivirtaus, mitattuna neljännestä kohti aidosti valmistuneina hankkeina, yli kaksinkertaistui kahdessa vuosineljänneksessä, vaikka tiimi näkyvästi "teki vähemmän" mihin tahansa hetkeen.

**Julkishallinto.** Kansallisen infrastruktuuriviraston digitaalisen muutoksen ohjelma oli kasannut yli neljäkymmentä rinnakkaista työvirtaa salkkunsa yli, joilla kullakin oli oma sponsorinsa ja oma perustelunsa, ilman yhtä näkymää keskeneräisen työn kokonaismäärään. Ohjelmatason flow-tehokkuuskatselmointi havaitsi, että mediaanityövirta vietti alle 15 % kuluneesta ajastaan aktiivisessa kehityksessä, ja loput odottivat jaettuja resursseja: pientä keskitettyä arkkitehtuurikatselmointitiimiä, jaettua testiympäristöä ja virastojen välistä hyväksyntää. Ohjelma otti käyttöön nimenomaiset salkkutason WIP-rajat, jaksottaen työvirrat sen sijaan, että olisi ajanut kaikkia neljääkymmentä rinnakkain, ja viraston oma seuranta osoitti mitattavasti nopeamman valmistumisen aktiivisina pysyneille työvirroille, vaikka rinnakkain käynnissä olevien kokonaismäärä laski jyrkästi.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Flow-tehokkuuden ja WIP:n tietoisen hallinnan tuotto on vastaintuitiivinen mutta hyvin dokumentoitu: läpivirtaus yleensä nousee, ei laske, kun organisaatio tekee vähemmän kerralla, koska vähemmän kontekstinvaihtoa ja lyhyemmät jonot tarkoittavat, että jokainen yksittäinen työ valmistuu nopeammin. Yllä oleva rahoituspalveluesimerkki, kaksinkertaistunut läpivirtaus rinnakkaisen työn tietoisesta vähentämisestä, on yleinen kuvio, kun organisaatiot todella mittaavat ja toimivat flow-tehokkuuden perusteella sen sijaan, että olettaisivat enemmän rinnakkaista työtä aina tarkoittavan enemmän edistystä.

Tämän kurin käyttöönoton kokonaiskustannus (TCO) on enimmäkseen organisatorinen, ei tekninen: näkyvä taulu, sovittu WIP-raja ja kuri sanoa ei uuden työn aloittamiselle kun raja saavutetaan. Tuota kuria on vaikeampi ylläpitää kuin ottaa käyttöön, minkä vuoksi yllä oleva suositus "tarkkaile WIP:n hiipimistä takaisin ylös" on yhtä tärkeä kuin itse alkuperäinen käyttöönotto.

## Antimallit ja sudenkuopat

- **Olettamus, että aktiivinen vaiva hallitsee toimitusaikaa ilman flow-tehokkuuden mittaamista:** yleensä väärä, ja se ohjaa parannusvaivan väärään vipuun.
- **WIP-rajan soveltaminen yksilökiintiönä järjestelmän rajoitteen sijaan:** soveltaa tekniikkaa väärin ja riskeeraa yksilön pelaamisen.
- **Uuden työn aloittaminen refleksinomaisesti, koska se tuntuu edistymiseltä:** ydintapa, jonka keskeyttämiseksi flow-tehokkuus ja WIP-rajat on suunniteltu.
- **WIP-rajan poikkeusten salliminen muuttua rutiiniksi ja näkymättömiksi:** rapauttaa kurin takaisin alkuperäiseen tilaansa ilman että kukaan päätti sitä tarkoituksella.
- **WIP:n mittaaminen vain tiimitasolla, salkkutason ylikuorman ohittaen:** yleistä suurissa organisaatioissa, jotka ajavat monia rinnakkaisia strategisia hankkeita.
- **Matalan flow-tehokkuusluvun kohteleminen merkkinä huonosta tiimistä:** se on tyypillistä useimmille toimitusputkille ja on lähtökohta tutkimiselle, ei tuomio.

## Kypsyysmalli

- **Taso 1, Aloittava:** Keskeneräistä työtä ei seurata. Tiimit aloittavat uutta työtä refleksinomaisesti ilman näkyvyyttä rinnakkaisen kuorman kokonaismäärään.
- **Taso 2, Kehittyvä:** Jotkin tiimit käyttävät epävirallista taulua, mutta WIP-rajoja ei valvota johdonmukaisesti eikä flow-tehokkuutta koskaan lasketa.
- **Taso 3, Vakioitu:** Tiimeillä on nimenomaiset, näkyvät WIP-rajat järjestelmätasolla, ja flow-tehokkuus mitataan ajoittain todellisesta sykliaikadatasta.
- **Taso 4, Hallittu:** WIP-rajan poikkeuksia seurataan tietoisina, näkyvinä päätöksinä. Flow-tehokkuutta valvotaan rapautumisen varalta ajan yli ja tutkitaan, kun se laskee.
- **Taso 5, Orkestroitu:** WIP on näkyvä ja hallittu salkkutasolla, ei vain tiimitasolla, ja organisaatio voi osoittaa tiettyjä läpivirtauksen parannuksia, jotka seurasivat rinnakkaisen työn tietoisesta vähentämisestä.

## Keskusteluideoita

1. Mikä on todellinen flow-tehokkuutemme, laskettuna rehellisesti todellisesta datasta?
2. Kuinka paljon keskeneräistä työtä meillä tällä hetkellä on, jota kukaan ei ollut laskenut ennen tätä keskustelua?
3. Mille meidän täytyisi sanoa ei, jotta voisimme valvoa todellista WIP-rajaa?
4. Mikä on yleisin yksittäinen syy sille, että työ seisoo joutilaana putkessamme?
5. Missä organisaatiossamme salkkutason WIP on näkymätön ja todennäköisesti liian korkea?

## Keskeiset opit

- **Flow-tehokkuus**, aktiivisen ajan suhde kokonaisaikaan, on tyypillisesti alle 25 % todellisissa toimitusputkissa. Odotusaika, ei vaiva, hallitsee.
- **Keskeneräisen työn rajoittaminen yleensä lisää läpivirtausta**, ei vähennä sitä, vähentämällä kontekstinvaihtoa ja lyhentämällä jonoja.
- Käytä **WIP-rajaa järjestelmän rajoitteena**, älä koskaan yksilön kiintiönä.
- Tutki **tarkka syy**, miksi työ seisoo joutilaana, sen sijaan että antaisit yleisen "vähennä odotusaikaa" -ohjeen.
- Tarkkaile WIP-rajojen **rapautumista rutiinipoikkeusten kautta**. Kohtele jokaista poikkeusta tietoisena, näkyvänä päätöksenä.
- Aihe 2.4 nimeää tämän suureen **flow-kuormaksi** ja aihe 2.7 formalisoi suhteen Littlen laiksi: keskeneräinen työ on yhtä suuri kuin saapumisnopeus kertaa sykliaika, mille tahansa vakaalle jonolle.

## Lähteet ja lisälukemista

- *The Principles of Product Development Flow*, tekijä Donald G. Reinertsen (jonoteoria, eräkoko ja WIP-rajat tuotekehityksessä).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, tekijä David J. Anderson (perustava teksti WIP-rajoista ja virtauksesta ohjelmistotiimeille).
- *Actionable Agile Metrics for Predictability*, tekijä Daniel S. Vacanti (flow-tehokkuuden mittaus ja virtauspohjainen ennustaminen).
- *The Goal*, tekijä Eliyahu M. Goldratt (rajoitteiden teoria ja paikallisen kiireen ja järjestelmän läpivirtauksen vastaintuitiivinen suhde).
