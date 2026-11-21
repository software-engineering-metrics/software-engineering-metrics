# 4.2 Testikattavuus ja testien tehokkuus

## Yleiskatsaus ja perustelut

**[Testikattavuus](https://en.wikipedia.org/wiki/Code_coverage)** mittaa sen koodin prosenttiosuuden, jonka testisarja suorittaa: rivikattavuus, haarakattavuus tai tiukempi polkukattavuus. Se on yksi tämän koko kirjan laajimmin seuratuista mittareista, halpa laskea, helppo visualisoida yhtenä prosenttilukuna ja siksi yksi useimmin pelatuista, täsmälleen niin kuin aihe 1.2 ennustaa mittarille, josta tulee tavoite. Testisarja voi saavuttaa korkean kattavuuden varmistamatta juuri mitään merkityksellistä, koska kattavuus mittaa sitä, suoritettiinko koodi testiajon aikana, ei sitä, tarkistiko testi todella, että koodi käyttäytyi oikein.

Tämä kattavuuden ja aidon testien tehokkuuden välinen aukko ei ole pieni alaviite. Se on tämän aiheen keskeinen huoli. Testi, joka kutsuu funktiota eikä väitä mitään sen tuloksesta, nostaa kattavuutta täsmälleen samoin kuin testi, joka varmistaa perusteellisesti funktion käyttäytymisen reunatapauksissa. Tämän aiheen suosittelema korjaus, **mutaatiotestaus**, joka tuo koodiin tarkoituksella pieniä, keinotekoisia virheitä ja tarkistaa, havaitseeko testisarja ne todella, on suora vastaus tähän aukkoon, ja tämä aihe kohtelee sitä kattavuuden välttämättömänä täydennyksenä, ei valinnaisena lisänä.

Suurissa tiimeissä kattavuustavoitteet otetaan usein käyttöön koko organisaation laatuporttina, juuri sellaisena kannustettuna, hyvin näkyvänä mittarina, jonka aihe 1.2 varoittaa olevan alttiimpia pelaamiselle. Suuryritykset ja julkishallinto, jotka asettavat yleisen kattavuusprosenttivaatimuksen ilman paritettua tehokkuustarkistusta, kannustavat käytännössä täsmälleen sitä kynnysarvon pelaamisen kuviota, jonka tämä kirja kuvaa: triviaaleja testejä, jotka kirjoitetaan puhtaasti luvun saavuttamiseksi ilman vastaavaa parannusta todelliseen virheiden ehkäisyyn.

## Keskeiset periaatteet

- **Kattavuus mittaa suoritusta, ei varmistusta.** Se, että testi suorittaa rivin, ei kerro mitään siitä, tarkistiko testi sen suhteen mitään merkityksellistä.
- **Kattavuustavoite ilman tehokkuustarkistusta on oppikirjaesimerkki Goodhartin lain asetelmasta** (aihe 1.2): luku paranee, mutta aito laatu ei.
- **Mutaatiotestaus on kattavuuden välttämätön täydennys**, ei korvike. Käytä molempia yhdessä.
- **Kattavuus on hyödyllisempi lattiana kuin maksimoitavana tavoitteena.** Matala luku paljastaa aidosti testaamatonta koodia. 100 %:n jahtaaminen tuottaa usein vähenevää tai negatiivista tuottoa.
- **Kriittisten polkujen kattavuus on tärkeämpää kuin tasainen, kattava peitto.** Kaikella koodilla ei ole yhtä suurta riskiä epäonnistuessaan.

## Suositukset

### Käytä kattavuutta testaamattoman koodin löytämiseen, älä maksimoitavana tavoitteena

Kohtele kattavuusraporttia ensisijaisesti karttana siitä, millä ei ole testiä lainkaan, mikä on aidosti hyödyllistä tietoa, sen sijaan että se olisi pistemäärä, jota työnnetään kohti 100 %:a. Koodi, jonka kattavuus on nolla, on todellinen aukko, jonka sulkeminen kannattaa. Kattavuuden nostamisen 85 %:sta 95 %:iin rajahyöty on yleensä paljon pienempi eikä usein ole vaivan arvoinen, erityisesti jos vaiva tuottaa vähäarvoisia testejä pelkästään korkeamman luvun saavuttamiseksi.

### Pariuta jokainen kattavuustavoite mutaatiotestauksen kanssa

**Mutaatiotestauksen** työkalut tuovat koodiisi automaattisesti pieniä virheitä, kääntävät vertailuoperaattorin, muuttavat raja-ehtoa, ja ajavat sitten testisarjasi jokaista mutatoitua versiota vastaan. Testisarja, joka "tappaa" (epäonnistuu vastaan) useimmat mutantit, varmistaa käyttäytymistä aidosti. Testisarja, jolla on korkea rivikattavuus mutta matala mutanttien tappoaste, suorittaa koodia tarkistamatta sitä mielekkäästi. Tämä pariutus on yksittäinen tehokkain suojakaide kattavuustavoitteen pelaamista vastaan, ja tämä kirja suosittelee sitä vakiokäytännöksi, ei edistyneeksi tai valinnaiseksi tekniikaksi.

### Priorisoi kattavuus ja mutaatiotestaus ensin kriittisille poluille

Kaikella koodilla ei ole yhtä suurta riskiä. Maksujenkäsittelypolku, todennustarkistus tai datamigraatioskripti ansaitsee paljon perusteellisemman testauksen kuin harvoin käytetty hallinnollinen raportti. Sen sijaan, että tavoittelisit tasaista kattavuutta koko koodikannassa, tunnista suuririskisimmät, seurauksiltaan vakavimmat koodipolut ja keskitä sekä kattavuus- että mutaatiotestaustyö niihin ensin, hyväksyen matalamman kattavuuden aidosti vähäriskisessä koodissa tietoisena, harkittuna kompromissina eikä laiminlyöntinä.

### Tarkkaile erityisiä kattavuuden pelaamisen kuvioita

Yleisimpiä tapoja, joilla kattavuutta pelataan, kun siitä tulee tavoite, ovat: testit, jotka kutsuvat funktiota mutta eivät väitä mitään merkityksellistä tuloksesta (aiheen 1.2 kynnysarvon pelaaminen sovellettuna tähän mittariin), epäonnistuvien testien poistaminen käytöstä tai poistaminen taustalla olevan ongelman korjaamisen sijaan sekä vaikeasti testattavan koodin sulkeminen kokonaan pois kattavuuslaskennasta sen sijaan, että käsiteltäisiin, miksi sitä on vaikea testata. Auditoi säännöllisesti otos testeistä suoraan lukemalla niiden todelliset väittämät, sen sijaan että luottaisit pelkkään kattavuusprosenttiin.

### Aseta kattavuuden lattia, ei katto, CI-putkeesi

Konfiguroi käännösputkesi epäonnistumaan, jos uuden koodin kattavuus putoaa sovitun lattian alle, mikä estää taantumisen, sen sijaan että vaadittaisiin jokaisen muutoksen nostavan kokonaislukua. Ero on tärkeä: lattia suojaa taaksepäin liukumiselta luomatta samaa väsymätöntä ylöspäin suuntautuvaa painetta, joka tuottaa vähäarvoisia testejä, jotka kirjoitetaan pelkästään luvun hivuttamiseksi vielä ylemmäs.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Pelkkä kattavuusprosentti | Halpa, yksinkertainen, työkalujen laajasti tukema | Helposti pelattavissa, mittaa suoritusta, ei varmistusta |
| Kattavuus ja mutaatiotestaus | Varmistaa, että testit todella tarkistavat käyttäytymistä, vastustaa pelaamista | Laskennallisesti kalliimpi, vaatii työkaluinvestointia |
| Tasainen kattavuustavoite koko koodikannassa | Yksinkertainen sanoa ja pakottaa | Tuhlaa vaivaa vähäriskiseen koodiin, investoi liian vähän riskiin nähden muualle |
| Riskiperusteinen, kriittiset polut ensin -kattavuus | Keskittää vaivan sinne, missä sillä on eniten väliä | Vaatii harkintaa aidosti kriittisten polkujen tunnistamiseen |

Keskeinen jännite on **yksinkertaisuus versus rehellisyys**. Yksi kattavuusprosentti on helppo raportoida ja helppo asettaa tavoitteeksi, mutta juuri tämä yksinkertaisuus tekee siitä niin helposti pelattavan, kun siitä tulee kannustettu luku. Ratkaise jännite hyväksymällä mutaatiotestauksen ja riskiperusteisen priorisoinnin lisäämä monimutkaisuus rehellisen signaalin hintana ja viestimällä tiimillesi eksplisiittisesti, miksi matalampi kokonaiskattavuusluku, joka on kohdennettu oikein kriittisille poluille ja jonka tukena on vahva mutanttien tappoaste, on arvokkaampi kuin korkeampi, tasaisemmin jakautunut mutta heikommin varmistettu luku.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Mikä on mutanttien tappoasteemme suuririskisimmillä koodipoluillamme, ja miten se vertautuu kattavuusprosenttiimme samassa koodissa?** Suuri ero korkean kattavuusluvun ja matalan mutanttien tappoasteen välillä on selkein mahdollinen merkki siitä, ettei pelkkä kattavuus kerro sitä, mitä luulet sen kertovan.

2. **Olemmeko koskaan kirjoittaneet testin ensisijaisesti kattavuusluvun nostamiseksi, vähällä todellisella ajatuksella siitä, mitä sen pitäisi varmistaa?** Ole tässä rehellinen. Näin käy useammin kuin tiimit haluavat myöntää, erityisesti aikapaineessa, kun kattavuusportti estää yhdistämisen.

3. **Onko kattavuusvaivamme keskittynyt suuririskisimmille koodipoluillemme, vai levitetty tasaisesti riippumatta siitä, mikä seuraus on, jos koodi epäonnistuu?** Kartoita nykyinen kattavuusjakaumasi rehellistä koodikantasi riskiarviota vasten ja etsi epäsuhta.

4. **Olemmeko koskaan poistaneet käytöstä tai poistaneet epäonnistuvan testin sen paljastaman taustalla olevan ongelman korjaamisen sijaan?** Tämä on yksi vahingollisimmista kattavuuden pelaamisen muodoista, koska se poistaa aktiivisesti todellista suojaa, kun raportoitu kattavuusluku voi tuskin liikahtaa.

5. **Pakottaako CI-putkemme uuden koodin kattavuuden lattian, vai työntääkö se yhä korkeampaa kattoa riippumatta vähenevästä tuotosta?** Keskustelkaa siitä, luoko nykyinen porttisuunnittelumme oikean kannustimen, taantuman estämisen, vai väärän, väsymättömän ylöspäin suuntautuvan paineen, joka palkitsee vähäarvoista testien täyttämistä.

6. **Mikä koodi koodikannassamme on suljettu pois kattavuuslaskennasta, ja onko tuo poissulkeminen perusteltu vai piilottaako se todellisen testausaukon?** Katso todellista poissulkemiskonfiguraatiotasi. On yleistä, että tämä lista kasvaa hiljaa ajan myötä ilman että kukaan tarkistaa, onko kukin poissulkeminen yhä perusteltu.

## Sektorinäkökulma

**Startup-yritys.** Muodolliset kattavuustavoitteet ovat usein tarpeettomia näin varhain. Kohdista testinkirjoitusvaiva suoraan riskialttiimpiin, liiketoimintakriittisimpiin koodipolkuihisi (yleensä maksu- tai ydintyönkulkulogiikka) sen sijaan, että tavoittelisit kattavaa prosenttilukua koodikannassa, joka yhä muuttuu nopeasti ja jonka voi joka tapauksessa kirjoittaa pian merkittävästi uusiksi.

**Pieni yritys.** Useimmat CI-alustat raportoivat kattavuuden automaattisesti vähäisellä käyttöönottokustannuksella. Käytä sitä ensisijaisesti kokonaan testaamattoman kriittisen koodin havaitsemiseen sen sijaan, että jahtaisit tiettyä tavoiteprosenttia, ja harkitse mutaatiotestausta vasta kun sinulla on ohjelmistokapasiteettia toimia sen paljastamien asioiden pohjalta.

**Suuryritys.** Yleiset, koko organisaation kattavuustavoitteet ovat tässä mittakaavassa yleinen ja merkittävä virhe, koska ne kannustavat täsmälleen tämän aiheen kuvaamaa pelaamista kymmenissä tiimeissä samanaikaisesti. Aseta riskiperusteiset kattavuusodotukset, jotka vaihtelevat palvelun kriittisyyden mukaan, ja investoi mutaatiotestausinfrastruktuuriin nimenomaan suuririskisimmille järjestelmillesi.

**Julkishallinto.** Kattavuusvaatimukset esiintyvät joskus hankinta- tai vaatimustenmukaisuusdokumentaatiossa tylppänä, helposti määriteltävänä laadunvarmistuksen sijaismittarina. Pariuta mahdollisuuksien mukaan sopimuksessa vaadittu kattavuusprosentti mutaatiotestaus- tai virhepohjaiseen tehokkuusvaatimukseen, jotta sopimuksellinen kannustin ei vahingossa palkitse täsmälleen sitä vähäarvoista testien täyttämistä, josta tämä aihe varoittaa.

## Esimerkit

**Suuryritys.** Verkkokauppa-alustan johto oli asettanut yrityksen laajuisen 95 %:n kattavuusvaatimuksen kaikelle uudelle koodille, pakotettuna kovana CI-porttina. Kaksi vuotta myöhemmin tehty auditointi, jonka laukaisi aalto tuotantovirheitä muka hyvin testatussa koodissa, havaitsi alle 40 %:n mutanttien tappoasteen suuressa osassa koodikantaa: tiimit olivat kirjoittaneet testejä, jotka suorittivat koodipolkuja väittämättä mitään mielekästä niiden käyttäytymisestä, pelkästään portin täyttämiseksi aikapaineessa. Yritys korvasi yleisen kattavuusvaatimuksen riskiportaisella linjauksella: tiukka kattavuus sekä pakollinen mutaatiotestaus yli 80 %:n tappoasteen kynnyksen maksu- ja todennuskoodille ja paljon kevyempi kattavuuden lattia vähäriskisille sisäisille työkaluille, mikä sekä vähensi hukattua testausvaivaa että paransi mitattavasti virheprosentteja aidosti kriittisillä poluilla.

**Julkishallinto.** Kansanterveysviraston etuuskelpoisuusjärjestelmältä oli kehittäjätoimittajan sopimuksessa vaadittu sopimuksellisesti 90 %:n testikattavuuden ylläpitoa. Tapahtuman jälkikatselmus merkittävästä kelpoisuuslaskennan virheestä, joka oli päässyt tuotantoon kattavuusvaatimuksen täyttymisestä huolimatta, havaitsi, että virheestä vastuussa oleva funktio oli saavuttanut kattavuutensa kokonaan testeillä, jotka kutsuivat funktiota kelvollisilla syötteillä mutta eivät koskaan testanneet raja-ehtoja tai virheellisiä syötteitä, juuri siellä, missä virhe esiintyi. Viraston uudistettu toimittajasopimus vaatii nyt dokumentoidun mutaatiotestauspisteen kattavuuden rinnalla kaikelle kelpoisuuslaskentakoodille, mikä sulkee täsmällisen aukon, joka oli antanut vaatimustenmukaisen mutta tehottoman testauksen täyttää sopimuksen.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Kattavuuden ja mutaatiotestauksen pariuttamisen tuotto on näennäisen ja todellisen testilaadun välisen aukon havaitseminen ennen kuin se maksaa tuotantovirheen. Yllä oleva verkkokauppaesimerkki näyttää kuvion selvästi: pelkkä kattavuusvaatimus oli tuottanut väärän turvallisuuden tunteen, jonka virheiden aalto lopulta paljasti paljon suuremmalla kustannuksella kuin mutaatiotestausinvestointi, joka olisi havainnut aukon aiemmin.

Omistamisen kokonaiskustannukseen kuuluu mutaatiotestauksen laskennallinen kustannus, joka on kalliimpi ajaa kuin yksinkertainen kattavuusinstrumentointi ja varataan siksi yleensä kriittisen polun koodille koko koodikannan sijaan, sekä ohjelmistoajan tulosten tulkintaan ja niiden pohjalta toimimiseen. Tuo kustannus on perusteltu nimenomaan suuririskisimmälle koodille, jossa havaitsemattoman testien tehokkuusaukon kustannus on suurin.

## Antimallit ja sudenkuopat

- **Kattavuusprosentin käsittely suorana laatutuomiona:** se mittaa suoritusta, ei varmistusta.
- **Testien kirjoittaminen ensisijaisesti kattavuusportin täyttämiseksi:** tuottaa täsmälleen sen vähäarvoisen kynnysarvon pelaamisen kuvion, josta aihe 1.2 varoittaa.
- **Epäonnistuvien testien poistaminen käytöstä tai poistaminen taustalla olevan ongelman korjaamisen sijaan:** poistaa todellista suojaa vaikuttamatta juuri raportoituun lukuun.
- **Tasaisen kattavuustavoitteen soveltaminen koodin riskistä riippumatta:** tuhlaa vaivaa vähäriskiseen koodiin ja investoi liian vähän aidosti kriittisiin polkuihin.
- **Poissulkemislistan hiljainen kasvattaminen ajan myötä:** piilottaa todelliset testausaukot teknisesti tarkan mutta harhaanjohtavan kattavuusluvun taakse.
- **Kattavuuden katon tavoittelu lattian sijaan:** luo väsymätöntä ylöspäin suuntautuvaa painetta, joka palkitsee testien täyttämistä aidon varmistuksen sijaan.

## Kypsyysmalli

- **Taso 1, Aloittava:** Kattavuutta ei mitata tai sitä mitataan epäjohdonmukaisesti ilman lattiaa, tavoitetta tai tehokkuustarkistusta.
- **Taso 2, Kehittyvä:** Kattavuustavoite on olemassa ja sitä seurataan, mutta mikään mutaatiotestaus tai riskiperusteinen priorisointi ei ohjaa vaivan kohdentamista.
- **Taso 3, Vakioitu:** Kattavuuden lattiat pakotetaan johdonmukaisesti CI:ssä, ja riskiperusteinen priorisointi ohjaa, mihin kattavuusvaiva keskittyy.
- **Taso 4, Hallittu:** Mutaatiotestaus ajetaan kriittisen polun koodille, ja seurattu tappoasteen kynnys on täytettävä kattavuuden rinnalla. Poissulkemislistoja auditoidaan määräajoin.
- **Taso 5, Orkestroitu:** Organisaatio voi osoittaa tiettyjä virheiden vähenemisiä, jotka voi jäljittää mutaatiotestauksen ohjaamaan priorisointiin, ja kattavuus- ja tehokkuusdata yhdessä ohjaavat suoraan testausinvestointipäätöksiä.

## Keskusteluideoita

1. Mikä on mutanttien tappoasteemme yksittäisellä kriittisimmällä koodipolullamme, ja tiedämmekö sitä edes?
2. Olemmeko koskaan kirjoittaneet vähäarvoisen testin pelkästään kattavuusportin täyttämiseksi?
3. Onko nykyinen kattavuusvaivamme keskittynyt sinne, missä riski on suurin, vai levitetty tasaisesti?
4. Mikä koodi on tällä hetkellä suljettu pois kattavuuslaskennasta, ja onko poissulkeminen yhä perusteltu?
5. Olisiko mutaatiotestausinvestointi suuririskisimpään järjestelmäämme laskennallisen kustannuksensa arvoinen?

## Keskeiset opit

- Testikattavuus mittaa **suoritusta, ei varmistusta**. Katettu rivi ei kerro mitään siitä, tarkistettiinko sitä mielekkäästi.
- Pariuta kattavuus **mutaatiotestauksen** kanssa varmistaaksesi, että testit havaitsevat todellisia virheitä, eivät vain että ne suorittavat koodin.
- Keskitä testausvaiva **kriittisille, suuririskisille poluille** sen sijaan, että tavoittelisit tasaista kattavuutta koko koodikannassa.
- Käytä kattavuutta **lattiana taantuman estämiseen**, älä katona, jota maksimoidaan väsymättä.
- Tarkkaile erityisiä kattavuuden pelaamisen kuvioita: **vähäarvoiset testit, käytöstä poistetut epäonnistuvat testit ja hiljaa kasvavat poissulkemislistat**.

## Lähteet ja lisälukemista

- *Working Effectively with Legacy Code*, by Michael Feathers (testikattavuusstrategia olemassa oleville, vaikeasti testattaville koodikannoille).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011): kattava katsaus mutaatiotestauksen tekniikoihin ja niiden tehokkuuteen.
- *xUnit Test Patterns*, by Gerard Meszaros (testisuunnittelumalleja, jotka ovat olennaisia aidosti tehokkaiden, ei vain kattavuuden täyttävien, testien kirjoittamiseen).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren, Jez Humble, and Gene Kim (testauskäytäntöjen ja toimituksen suorituskyvyn välinen suhde).
