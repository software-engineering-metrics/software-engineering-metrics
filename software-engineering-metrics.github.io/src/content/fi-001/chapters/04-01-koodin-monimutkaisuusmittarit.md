# 4.1 Koodin monimutkaisuusmittarit

## Yleiskatsaus ja perustelut

**[Syklomaattinen kompleksisuus](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, jonka Thomas J. McCabe esitteli vuonna 1976, laskee koodinpätkän kontrollivirran itsenäisten polkujen määrän: jokainen `if`, silmukka ja haara kasvattaa lukua. Se on yhä laajimmin käytetty koodin monimutkaisuusmittari lähes viisikymmentä vuotta myöhemmin, yhdessä sukulaistensa kanssa, kuten kognitiivinen monimutkaisuus (joka painottaa sisäkkäistä ja vaikeasti seurattavaa kontrollivirtaa voimakkaammin kuin McCaben alkuperäinen lineaarinen laskenta) ja sisäkkäisyyden syvyys. Näillä mittareilla on yhteinen aito, validoitu oivallus: koodi, jonka läpi kulkee enemmän itsenäisiä polkuja, on vaikeampi testata täydellisesti, vaikeampi hahmottaa ja vuosikymmenten empiirisen tutkimuksen mukaan mitattavasti todennäköisemmin virheellistä.

Tämä aihe kohtelee tuota oivallusta todellisella kunnioituksella ja yhtä vakavasti sen rajoja. Monimutkaisuusmittarit mittaavat yhtä koodin tiettyä ominaisuutta, ja koodikanta voi olla yksinkertainen kaikilla monimutkaisuusmittareilla ja silti huonosti suunniteltu, huonosti nimetty tai käsitteellisesti epäjohdonmukainen tavoilla, joita mikään haarojen laskenta-algoritmi ei havaitse. Päinvastoin, jotkin palautumattoman monimutkaiset ongelmat vaativat aidosti monimutkaista koodia ratkaistakseen oikein, ja tiimi, jota painostetaan minimoimaan monimutkaisuuspiste, voi tuottaa koodia, joka saa hyvän pisteen mutta on todellisuudessa vaikeampaa ymmärtää: olennainen monimutkaisuus levitetään useampaan tiedostoon ja epäsuoruuden kerrokseen sen vähentämisen sijaan.

Suurille tiimeille monimutkaisuusmittarit ansaitsevat paikkansa lajittelutyökaluna: tapana löytää tuhansien tiedostojen joukosta pieni osajoukko, joka todennäköisimmin palkitsee tarkemman katsomisen, ei yksinäisenä tuomiona koodin laadusta. Suuryritykset ja julkishallinto, jotka ylläpitävät koodikantoja, joita kukaan ei voi lukea kokonaan, nojaavat tähän lajittelutoimintoon ohjatakseen niukan refaktorointi- ja katselmointityön sinne, missä se tekee eniten hyvää.

## Keskeiset periaatteet

- **Monimutkaisuusmittarit ennustavat testauksen ja virheiden vaikeutta. Ne eivät mittaa laatua suoraan.** Kohtele niitä yhtenä syötteenä, ei tuomiona.
- **Monimutkaisuuspiste on altis pelaamiselle hämäämällä, ei vain aidolla yksinkertaistamisella.** Monimutkaisuuden levittäminen useampaan tiedostoon voi laskea pistettä tekemättä koodista todellisuudessa helpommin ymmärrettävää.
- **Jokin monimutkaisuus on olennaista, ei sattumanvaraista.** Aidosti vaikea ongelma voi vaatia aidosti monimutkaista koodia. Tavoite on minimoida sattumanvarainen monimutkaisuus, ei poistaa kaikkea monimutkaisuutta erottelematta.
- **Käytä monimutkaisuusmittareita lajitteluun, ei yksilön tai tiimin tuloskorttina.** Ne osoittavat, mihin katsoa, eivät ketä syyttää.
- **Trendi ja poikkeavat havainnot ovat tärkeämpiä kuin mikään absoluuttinen kynnysarvo.** Nouseva trendi tai äärimmäinen poikkeava havainto on toimintaan johtavampi kuin yksittäinen tiimin laajuinen keskiarvo.

## Suositukset

### Käytä monimutkaisuusmittareita katselmointi- ja refaktorointityön lajitteluun

Aja monimutkaisuusanalyysi koko koodikannalle ja käytä tuloksia priorisoidaksesi, mihin tarkempi ihmiskatselmointi tai refaktorointi-investointi kannattaa eniten: funktiot tai tiedostot, jotka saavat pisteitä selvästi koodikannan oman tyypillisen vaihteluvälin yläpuolella, ovat arvokkaimmat paikat katsoa ensin. Tämä lajittelukäyttö, sen löytäminen, mihin katsoa, on monimutkaisuusmittarien puolustettavin ja arvokkain sovellus, paljon enemmän kuin niiden käyttö absoluuttisena hyväksytty/hylätty-porttina.

### Aseta kynnysarvot suhteessa omaan koodikantaasi, älä yleiseen lukuun

Alan käytännöstä kritiikittömästi lainatut absoluuttiset monimutkaisuuden kynnysarvot (monimutkaisuuspiste kymmenen on yleisesti siteerattu nyrkkisääntö) voivat olla joko liian löysiä tai liian tiukkoja alueesi mukaan: jäsennin tai sääntömoottori voi perustellusti olla lähtötasoltaan monimutkaisempi kuin tyypillinen CRUD-palvelu. Kalibroi omat kynnysarvosi koodikantasi todellista jakaumaa vasten ja kohtele kynnysarvon ylitystä kehotteena katsoa tarkemmin, ei automaattisena käännösvirheenä, ellei tiimisi ole tietoisesti valinnut tuota tiukempaa linjausta täysin tietoisena sen kompromisseista.

### Tarkkaile pelaamista pilkkomalla ilman aitoa yksinkertaistamista

Yleisin tapa, jolla monimutkaisuuspisteitä pelataan, on aiheen 1.2 korvaamiskuvio sovellettuna tähän nimenomaiseen mittariin: yhden aidosti monimutkaisen funktion pilkkominen useaksi pienemmäksi funktioksi, jotka yksittäin saavat hyvän pisteen, kun kokonaisjärjestelmä on yhtä vaikea ymmärtää tai joskus vaikeampi, koska logiikka on nyt hajallaan useammassa tiedostossa ja niiden välillä on enemmän epäsuoruutta. Yhdistä monimutkaisuusmittarit laadulliseen arvioon siitä, selkeyttikö pilkkominen koodia aidosti vai siirsikö se vain monimutkaisuuden paikkaan, jota mittari ei enää nähnyt.

### Erota olennainen monimutkaisuus sattumanvaraisesta ennen reagoimista

Ennen kuin käsittelet korkeaa monimutkaisuuspistettä korjattavana ongelmana, kysy, vaatiiko taustalla oleva ongelma aidosti niin monta itsenäistä polkua, verolaskennan logiikassa on esimerkiksi perustellusti paljon haaroja, vai johtuuko monimutkaisuus vältettävissä olevista syistä: syvään sisäkkäisistä ehtolauseista, jotka voisi litistää, päällekkäisestä logiikasta, joka voisi yhdistää, tai epäselvistä vastuurajoista, jotka voisi vetää uudelleen. Vain jälkimmäinen luokka on aito laatuongelma, jonka korjaamiseen tämän mittarin pitäisi sinua ohjata.

### Seuraa trendiä ja poikkeavia havaintoja, älä vain hetkellistä keskiarvoa

Koko koodikannan keskimääräisen monimutkaisuuspisteen pieni liike on harvoin yksinään toimintaan johtava. Tietyn tiedoston monimutkaisuuden jyrkkä nousu usean muutoksen aikana tai pieni määrä äärimmäisiä poikkeavia havaintoja muuten hyvin käyttäytyvässä koodikannassa ovat paljon hyödyllisempiä signaaleja. Seuraa sekä trendiä ajan yli että poikkeavien havaintojen häntää ja käytä niitä laukaisemaan tietty, kohdennettu tutkimus laajan, kohdentumattoman monimutkaisuuden vähentämisaloitteen sijaan.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Absoluuttinen yleinen kynnysarvo | Yksinkertainen, johdonmukainen, helppo automatisoida | Sivuuttaa oikeutetut aluekohtaiset erot, pilkkominen voi pelata sitä |
| Koodikantaan suhteutettu kynnysarvo | Paremmin kalibroitu todelliseen kontekstiin | Vaatii enemmän valmistelua ja määräajoin tehtävää uudelleenkalibrointia |
| Monimutkaisuus automaattisena käännösporttina | Pakottaa johdonmukaisuuden ilman ihmiskatselmoinnin kuormaa | Voi estää oikeutetusti monimutkaisen mutta hyvin suunnitellun koodin tai palkita hämärtävää pilkkomista |
| Monimutkaisuus lajittelusignaalina ihmiskatselmoinnille | Havaitsee aidot laatuongelmat, jotka pelkkä pilkkominen missaisi | Vaatii enemmän ihmiskatselmointiaikaa kuin täysin automaattinen portti |

Keskeinen jännite on **automaatio versus harkinta**. Täysin automaattinen monimutkaisuusportti on halpa pakottaa ja johdonmukainen, mutta se voi sekä estää oikeutetusti monimutkaista, hyvin suunniteltua koodia että palkita pinnallista pilkkomista, joka pelaa pistettä yksinkertaistamatta mitään aidosti. Ratkaise jännite käyttämällä automaattista monimutkaisuusanalyysiä katselmoitavien ehdokkaiden esiin tuomiseen ja varaamalla varsinainen harkinta, onko tämä monimutkaisuus olennaista vai sattumanvaraista, selkeyttikö tämä refaktorointi aidosti vai siirsikö se vain monimutkaisuuden, ihmiskatselmoijalle eikä pelkälle kovalle automaattiselle portille.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Onko monimutkaisuuden kynnysarvomme kalibroitu oman koodikantamme todellisen jakauman mukaan, vai lainattu kritiikittömästi yleisestä alan käytännöstä?** Hae koodikantasi todellinen monimutkaisuusjakauma ja tarkista, ovatko nykyiset kynnysarvosi järkeviä sitä vasten, sen sijaan että olettaisit yleisesti siteeratun luvun pätevän yleisesti omalla alueellasi.

2. **Olemmeko koskaan nähneet funktion pilkottavan useaksi pienemmäksi niin, ettei tuloksena oleva koodi tullut todella helpommin ymmärrettäväksi?** Tämä on selkein merkki pilkkomalla pelaamisen kuviosta, josta tämä aihe varoittaa. Katso tuoretta refaktorointia, jonka motiivina oli ensisijaisesti monimutkaisuuspiste, ja arvioi rehellisesti, paransiko se aitoa ymmärrettävyyttä.

3. **Missä koodikannassamme monimutkaisuus on olennaista ongelmalle ja missä se on sattumanvaraista ja korjattavissa?** Käy läpi korkeimman monimutkaisuuden poikkeavat havaintosi ja lajittele ne eksplisiittisesti näihin kahteen luokkaan, koska vain jälkimmäinen luokka edustaa aitoa, toimintaan johtavaa laatuongelmaa.

4. **Käytämmekö monimutkaisuusmittareita katselmointityön lajitteluun vai kovana automaattisena porttina ilman ihmisen harkintaa?** Keskustelkaa siitä, jättääkö nykyinen valvontatapamme tilaa tämän aiheen suosittelemalle erottelulle olennaisen ja sattumanvaraisen välillä, vai kohteleeko se jokaista ylitystä samoin kontekstista riippumatta.

5. **Onko monimutkaisuuspistettä koskaan käytetty, edes epävirallisesti, yksittäisen insinöörin työn laadun arviointiin?** Tämä riskeeraa saman yksilöarvioinnin ansan, josta aihe 3.4 varoittaa aktiivisuusmittareille, sovellettuna tässä koodimittareihin, ja se kutsuu samaa pelaamisreaktiota.

6. **Miltä monimutkaisuustrendimme näyttää viime vuoden ajalta kriittisimpien, useimmin muuttuneiden tiedostojemme osalta?** Yhdistä tämä aiheen 4.3 muuttuvuus- ja kuumien pisteiden analyysiin, koska tiedosto, joka on sekä erittäin monimutkainen että usein muuttuva, ansaitsee huomiota paljon ennen sellaista, joka on monimutkainen mutta harvoin kosketettu.

## Sektorinäkökulma

**Startup-yritys.** Monimutkaisuusmittarit ovat tässä mittakaavassa yleensä vähemmän kiireellisiä. Koodikanta on riittävän pieni, jotta epävirallinen tuttuus korvaa usein muodollisen mittauksen. Varhain omaksuttava tapa on yksinkertaisesti ajaa monimutkaisuusskannaus silloin tällöin havaitakseen tietyn tiedoston muuttuvan hiljaa hallitsemattomaksi, ennen kuin tiimi on kasvanut liian suureksi huomatakseen sen epävirallisesti.

**Pieni yritys.** Useimmat nykyaikaiset staattisen analyysin työkalut raportoivat monimutkaisuusmittarit osana laajempaa, ilmaista tai edullista lint-käyttöönottoa. Käytä tulosta määräajoin tehtävänä lajittelusignaalina sen sijaan, että investoisit omiin työkaluihin. Kohdista huomio ensin useimmin muokattuihin tiedostoihisi.

**Suuryritys.** Monimutkaisuusmittarit ovat mittakaavassa arvokkaimpia yhdistettyinä muuttuvuusdataan (aihe 4.3) refaktorointi-investoinnin priorisoimiseksi koodikannassa, joka on liian suuri kenenkään käsin kartoitettavaksi. Kalibroi kynnysarvot palvelu- tai aluekohtaisesti sen sijaan, että soveltaisit yhtä koko organisaation lukua, koska oikeutettu monimutkaisuus vaihtelee merkittävästi eri järjestelmätyyppien välillä.

**Julkishallinto.** Pitkäikäiset julkishallinnon järjestelmät keräävät usein monimutkaisuutta vähitellen vuosien tai vuosikymmenten asteittaisten vaatimusmuutosten myötä, ja monimutkaisuusauditointi voi olla vakuuttava, konkreettinen työkalu uudistamis- tai refaktorointi-investoinnin perustelemiseen sidosryhmille, jotka muuten voisivat nähdä järjestelmän yksinkertaisesti "toimivana" ja siksi investoinnin arvottomana.

## Esimerkit

**Suuryritys.** Maksujenkäsittelyyritys ajoi ensimmäistä kertaa koko koodikannan kattavan monimutkaisuusauditoinnin ja löysi yhden tapahtumien validointifunktion, jonka syklomaattinen kompleksisuuspiste oli yli kymmenkertainen koodikannan mediaaniin nähden. Tutkimus osoitti monimutkaisuuden olevan lähes kokonaan sattumanvaraista: vuosien aikana vähitellen lisätty erityistapausten käsittely tietyille maksupalveluntarjoajille oli kertynyt syvään sisäkkäisiksi ehtolauseiksi, jotka voitiin rakentaa uudelleen siistimmäksi strategiamalliksi, joka erotti palveluntarjoajakohtaisen logiikan. Refaktorointi, joka priorisoitiin suoraan siksi, että monimutkaisuusauditointi tunnisti sen koodikannan arvokkaimmaksi yksittäiseksi kohteeksi, laski funktion monimutkaisuuspistettä yli 80 % ja, mikä tärkeämpää, vähensi virheprosenttia mitattavasti kyseisellä koodipolulla seuraavien kahden neljänneksen aikana.

**Julkishallinto.** Verohallinnon vuosikymmeniä vanha etuuksien laskentamoottori sai äärimmäisen korkeat monimutkaisuuspisteet lähes jokaisessa funktiossa, mikä sai aluksi olettamaan, että koko järjestelmä tarvitsi kirjoittaa uusiksi alusta. Tarkempi, funktio kerrallaan tehty katselmointi, joka erotteli olennaisen ja sattumanvaraisen monimutkaisuuden, havaitsi, että suurin osa monimutkaisuudesta heijasti aidosti taustalla olevia oikeussääntöjä, joissa todella oli niin paljon laillisesti pakollisia haaroja ja erityistapauksia, kun taas pienempi osajoukko johtui vältettävissä olevasta päällekkäisyydestä samankaltaisten laskentapolkujen välillä. Tiimi kohdisti refaktoroinnin vain sattumanvaraisen monimutkaisuuden osajoukkoon, välttäen kalliin, riskialttiin täyden uudelleenkirjoituksen ja parantaen silti merkittävästi järjestelmän todella ongelmallisimpia alueita.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Monimutkaisuusmittarien hyvän käytön tuotto on kohdennettu, arvokas refaktorointi-investointi: yllä oleva maksuyritysesimerkki osoittaa yhden, hyvin kohdennetun korjauksen, joka tunnistettiin monimutkaisuusanalyysillä ja joka vähensi virheitä mitattavasti täsmälleen suuririskisimmällä koodipolulla, murto-osalla kustannuksesta, jonka laaja, kohdentumaton refaktorointialoite olisi vaatinut.

Omistamisen kokonaiskustannus on matala: useimmat nykyaikaiset kehitystyökaluketjut laskevat monimutkaisuusmittarit automaattisesti osana staattista analyysiä (aihe 4.4), ja todellinen investointi on ihmisen harkinta-aika tulosten oikeaan tulkintaan, olennaisen ja sattumanvaraisen monimutkaisuuden erottamiseen sekä pilkkomalla pelaamisen havaitsemiseen, ei mikään merkittävä uusi työkalukustannus.

## Antimallit ja sudenkuopat

- **Monimutkaisuuspisteen käsittely suorana laatutuomiona:** se mittaa yhtä tiettyä ominaisuutta, ei koodin kokonaislaatua.
- **Funktion pilkkominen pisteen pelaamiseksi ilman aitoa yksinkertaistamista:** tämän aiheen nimeämä pilkkomalla pelaamisen kuvio.
- **Yleisen kynnysarvon soveltaminen kalibroimatta sitä omaan koodikantaan:** tuottaa joko liian löysää tai liian tiukkaa valvontaa alueesta riippuen.
- **Monimutkaisuusmittarien käyttö insinöörien yksilölliseen arviointiin:** kutsuu pelaamista ja käyttää väärin lajitteluun, ei tuomitsemiseen tarkoitettua mittaria.
- **Kaiken monimutkaisuuden käsittely yhtä korjattavana:** aidosti vaikean ongelman olennainen monimutkaisuus ei ole poistettava vika.
- **Trendin ja poikkeavien havaintojen sivuuttaminen tasaisen, koodikannan laajuisen keskiarvon hyväksi:** missaa toimintaan johtavimman signaalin, jonka tämä mittariperhe tarjoaa.

## Kypsyysmalli

- **Taso 1, Aloittava:** Monimutkaisuutta ei mitata tai sitä mitataan tarkastelemattomalla, yleisellä kynnysarvolla, jota sovelletaan kritiikittömästi.
- **Taso 2, Kehittyvä:** Monimutkaisuusmittareita kerätään mutta niiden perusteella toimitaan harvoin, eikä olennaista ja sattumanvaraista monimutkaisuutta erotella.
- **Taso 3, Vakioitu:** Kynnysarvot on kalibroitu koodikannan omaan jakaumaan, ja monimutkaisuusmittarit ohjaavat johdonmukaisesti katselmointi- ja refaktorointilajittelua koko organisaatiossa.
- **Taso 4, Hallittu:** Monimutkaisuustrendiä ja poikkeavia havaintoja seurataan aktiivisesti ja yhdistetään muuttuvuusdataan (aihe 4.3) refaktorointi-investoinnin priorisoimiseksi. Pilkkomalla pelaamista tarkkaillaan aktiivisesti.
- **Taso 5, Orkestroitu:** Organisaatio voi osoittaa tiettyjä, mitattavia virheprosentin parannuksia, jotka voi jäljittää suoraan monimutkaisuustiedon ohjaamaan refaktorointi-investointiin, ja monimutkaisuusdata on rutiininomainen, luotettu syöte ohjelmistotyön investointipäätöksiin.

## Keskusteluideoita

1. Mikä on yksittäinen monimutkaisin funktiomme tai tiedostomme, ja onko sen monimutkaisuus olennaista vai sattumanvaraista?
2. Olemmeko koskaan pelanneet monimutkaisuuspistettä pilkkomalla ilman todellista yksinkertaistamista?
3. Onko kynnysarvomme kalibroitu omaan koodikantaamme vai lainattu kritiikittömästi?
4. Missä korkea monimutkaisuus on tällä hetkellä päällekkäin korkean muuttuvuuden kanssa koodikannassamme?
5. Onko monimutkaisuusdata koskaan ohjannut refaktorointi-investointipäätöstä, vai jääkö se käyttämättä?

## Keskeiset opit

- Monimutkaisuusmittarit, kuten **syklomaattinen kompleksisuus**, ennustavat testauksen ja virheiden vaikeutta. Ne eivät mittaa koodin kokonaislaatua suoraan.
- Erota **olennainen monimutkaisuus** (aidosti vaikeasta ongelmasta) **sattumanvaraisesta monimutkaisuudesta** (vältettävissä paremmalla suunnittelulla) ennen kuin reagoit korkeaan pisteeseen.
- Tarkkaile **pilkkomalla pelaamista**: koodin pilkkomista pisteen laskemiseksi yksinkertaistamatta mitään aidosti.
- Käytä monimutkaisuusmittareita **lajitteluun**, ihmiskatselmoinnin ja refaktorointityön ohjaamiseen, älä yksilön tuloskorttina tai jäykkänä automaattisena porttina.
- Kalibroi kynnysarvot **oman koodikantasi jakaumaan** ja seuraa **trendiä ja poikkeavia havaintoja**, älä vain tasaista keskiarvoa.

## Lähteet ja lisälukemista

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976): alkuperäinen syklomaattisen kompleksisuuden artikkeli.
- *Code Complete*, by Steve McConnell (käytännön ohjeita monimutkaisuuden hallintaan ohjelmistorakentamisessa).
- *Working Effectively with Legacy Code*, by Michael Feathers (tekniikoita monimutkaisuuden turvalliseen vähentämiseen olemassa olevassa, vaikeasti muutettavassa koodissa).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018): kognitiivisen monimutkaisuuden mittari ja sen ero syklomaattiseen kompleksisuuteen.
