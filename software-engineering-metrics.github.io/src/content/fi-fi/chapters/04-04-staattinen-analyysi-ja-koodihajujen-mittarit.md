# 4.4 Staattinen analyysi ja koodihajujen mittarit

## Yleiskatsaus ja perustelut

**[Staattisen analyysin](https://en.wikipedia.org/wiki/Static_program_analysis)** työkalut skannaavat lähdekoodin suorittamatta sitä ja liputtavat kuvioita, joiden tiedetään korreloivan virheiden, tietoturvahaavoittuvuuksien tai ylläpidettävyysongelmien kanssa: tavoittamaton koodi, sulkemattomat resurssit, epäilyttävät tyyppimuunnokset, päällekkäinen logiikka sekä laajempi **koodihajujen** (code smell) luokka, rakenteelliset kuviot, jotka eivät välttämättä ole vikoja mutta tekevät koodista yleensä vaikeampaa ymmärtää, testata tai muuttaa turvallisesti. Staattinen analyysi on automaattinen, jatkuva kerros tämän osan muiden aiheiden kohdennetumpien mittarien alla. Se ajetaan jokaisella commitilla ja tuo ongelmat esiin niiden syntyhetkellä sen sijaan, että odotettaisiin määräaikaista auditointia.

Tämän aiheen keskeinen huoli on aukko sen välillä, mitä staattisen analyysin työkalut raportoivat ja mitä todella on tärkeää. Työkalu voi liputtaa tuhansia havaintoja suuressa koodikannassa, ja pelkkä havaintojen määrä on huono mittari, koska se sulauttaa yhteen triviaalit tyylimieltymykset ja aidon, vakavan riskin, ja sitä voi painaa alas tukahduttamalla yhtä helposti kuin todellisilla korjauksilla. Staattisen analyysin arvo ei synny raa'asta havaintomäärästä vaan siitä, kuinka hyvin organisaatio lajittelee vakavuuden mukaan, estää taantumisen ja vastustaa houkutusta kohdella työkalun harkintaa ihmiskatselmoinnin korvikkeena sen täydennyksen sijaan.

Suurille tiimeille staattinen analyysi on ainoa käytännöllinen tapa pakottaa koodin laadun ja tietoturvahygienian perustaso koodikannassa, joka on suurempi kuin mikään tiimi voi käydä käsin kokonaan läpi. Suuryritykset ja julkishallinto, joilla on usein turvallista koodausta koskevia vaatimustenmukaisuusvaatimuksia, nojaavat staattiseen analyysiin dokumentoituna, auditoitavana näyttönä siitä, että perustason tarkastelua sovellettiin johdonmukaisesti, ei vain silloin, kun ihmiskatselmoija sattui huomaamaan ongelman.

## Keskeiset periaatteet

- **Raaka havaintomäärä on yksinään huono mittari.** Se sulauttaa triviaalit ja vakavat ongelmat, ja sitä voi pelata tukahduttamalla aidon korjaamisen sijaan.
- **Vakavuuden lajittelu on tärkeämpää kuin määrä.** Pieni määrä kriittisiä havaintoja ansaitsee enemmän huomiota kuin suuri määrä triviaaleja.
- **Staattinen analyysi täydentää ihmiskatselmointia, ei korvaa sitä.** Työkalut havaitsevat kuvioita. Ne eivät ymmärrä aikomusta tai liiketoimintakontekstia.
- **"Uusia ongelmia tuotu" -trendi on toimintaan johtavampi kuin kokonaisjonon koko.** Se kertoo, paraneeko vai heikkeneekö nykyinen käytäntö.
- **Virheelliset positiiviset havainnot rapauttavat luottamusta työkaluun.** Hallitsematon virheellisten positiivisten osuus saa tiimit sivuuttamaan havainnot kokonaan, myös aidot.

## Suositukset

### Seuraa vakavuudella painotettuja havaintoja, älä raakaa määrää

Konfiguroi staattisen analyysin työkalusi luokittelemaan havainnot vakavuuden mukaan (kriittinen, korkea, keskitaso, matala tai vastaava asteikko) ja seuraa vakavuudella painotettua trendiä tasaisen kokonaismäärän sijaan. Koodikanta, jossa on nolla kriittistä havaintoa ja viisisataa matalan vakavuuden tyylisuositusta, on aivan eri tilassa kuin se, jossa on viisikymmentä kriittistä havaintoa eikä lainkaan tyyliongelmia, ja raakamäärä kohtelee näitä suunnilleen vastaavina, vaikka ne eivät ole.

### Aseta portti tuotuihin uusiin havaintoihin, älä koko historialliseen jonoon

Useimmilla vakiintuneilla koodikannoilla on perintönä havaintojen jono, joka edeltää nykyistä käytäntöä ja jonka korjaaminen kaikki kerralla olisi kohtuuttoman kallista. Sen sijaan, että estäisit kaiken työn kunnes koko jono on selvitetty, aseta CI:n portti sille, tuoko tietty muutos uusia havaintoja sovitun vakavuuskynnyksen yli, ja anna jonon pienentyä vähitellen tavallisen ylläpidon kautta estäen samalla lisäkertymän. Tämä ero heijastaa aiheen 4.2 kattavuuslattiasuositusta: suojaa taantumiselta sen sijaan, että vaadittaisiin epärealistinen, kerralla tehtävä korjaus.

### Hallitse virheellisten positiivisten osuutta aktiivisesti

Katselmoi määräajoin otos havainnoista, erityisesti kaikista suuren volyymin luokista, ja tarkista, kuinka moni on aidosti virheellinen positiivinen: tapaus, jossa työkalu liputti kuvion, joka ei kontekstissa ole todellisuudessa ongelmallinen. Säädä sääntökonfiguraatiota tukahduttamaan nimenomaan aidosti kohinaiset, vähäarvoiset sääntöluokat sen sijaan, että annat tiimien kehittää tavan sivuuttaa työkalun tuloste kokonaan, koska liian suuri osa siitä on kohinaa. Korkea, hallitsematon virheellisten positiivisten osuus on yksittäisistä tekijöistä nopein tapa tuhota staattisen analyysin ohjelman uskottavuus.

### Käytä staattisen analyysin havaintoja katselmoinnin kehotteena, ei automaattisena tuomiona

Edes oikeutettu, ei-virheellinen positiivinen havainto ei aina oikeuta automaattista, pakollista korjausta. Jotkin liputetut kuviot ovat hyväksyttäviä tietyssä kontekstissa, jota työkalu ei näe. Rakenna kevyt prosessi, jossa ihminen katselmoi ja joko korjaa tai eksplisiittisesti, näkyvästi vapauttaa havainnon dokumentoidulla perusteella, sen sijaan että joko pakottaisit sokeasti jokaisen havainnon pakolliseksi tai sallisit hiljaisen, dokumentoimattoman tukahduttamisen, joka rapauttaa työkalun arvoa ajan myötä.

### Yhdistä staattinen analyysi tämän osan muihin koodin laadun mittareihin

Staattisen analyysin havainnot, monimutkaisuuspisteet (aihe 4.1) ja kuumien pisteiden data (aihe 4.3) ovat toisiaan täydentävää näyttöä, eivät kilpailevia mittareita. Tiedosto, jossa on suuri keskittymä ratkaisemattomia staattisen analyysin havaintoja ja joka on myös muuttuvuus-monimutkaisuuskuuma piste, on erityisen vahva ehdokas priorisoituun huomioon, koska useat riippumattomat signaalit konvergoivat samaan johtopäätökseen.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Raaka havaintomäärä mittarina | Yksinkertainen raportoida | Sulauttaa triviaalit ja vakavat ongelmat, helposti pelattavissa tukahduttamalla |
| Vakavuudella painotettu trendi | Heijastaa todellista riskiä tarkemmin | Vaatii jatkuvaa vakavuusluokituksen ylläpitoa |
| Portti koko historialliselle jonolle | Maksimoi lopullisen koodin puhtauden | Usein epäkäytännöllinen vakiintuneille koodikannoille, voi pysäyttää kaiken työn |
| Portti vain uusille havainnoille | Käytännöllinen, estää taantuman, antaa jonon pienentyä vähitellen | Perintöongelmat säilyvät pidempään ilman tietoista korjaussuunnitelmaa |

Keskeinen jännite on **perusteellisuus versus käytännöllisyys**. Staattisen analyysin linjaus, joka vaatii koko historiallisen jonon selvittämistä ennen kuin mitään uutta työtä voi edetä, on perusteellinen mutta yleensä epäkäytännöllinen mille tahansa koodikannalle, jolla on todellista historiaa, ja tällaisen paineen alla tiimit tukahduttavat havaintoja kokonaan sen sijaan, että korjaisivat niitä aidosti. Ratkaise jännite asettamalla portti tiukasti uusiin havaintoihin ja ajamalla erillistä, tietoisesti tahdistettua korjaustyötä perintöjonoa vastaan, priorisoituna tämän aiheen ja aiheen 4.3 suosittelemilla vakavuus- ja vertailutekniikoilla.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Seuraammeko vakavuudella painotettua trendiä vai vain raakaa havaintojen kokonaismäärää?** Avaa todellinen mittaristosi ja tarkista. Raakamäärä on monissa työkaluissa oletus ja vaatii usein tietoista konfigurointia, jotta vakavuus saadaan näkyviin kunnolla.

2. **Mikä on ratkaisemattomien havaintojen nykyinen perintöjonomme, ja onko meillä tietoinen, tahdistettu suunnitelma sen pienentämiseksi, vai kertyykö se vain loputtomasti?** Käsittelemätön, hiljaa kasvava jono on yleinen ja ansaitsee rehellisen nimeämisen tarkastelematta jättämisen sijaan.

3. **Mikä on arvioitu virheellisten positiivisten osuus suurimman volyymin havaintoluokissamme, ja olemmeko säätäneet sääntökonfiguraatiota vastauksena?** Jos et ole koskaan tarkistanut tätä, ota otos kohinaisimman luokkasi havainnoista ja arvioi rehellisesti, kuinka moni on aidosti toimintaan johtava.

4. **Luottavatko tiimimme insinöörit staattisen analyysin havaintoihin, vai ovatko he oppineet sivuuttamaan ne, koska liian suuri osa tulosteesta on kohinaa?** Tämä on suora, rehellinen vaistotarkistuskysymys, jonka tiimiltä kannattaa kysyä, koska työkalu, joka sivuutetaan, ei tuota todellista arvoa teoreettisesta kyvykkyydestään riippumatta.

5. **Miten käsittelemme tällä hetkellä oikeutettua havaintoa, jonka tiimi uskoo pitäisi vapauttaa tietyn kontekstin vuoksi?** Tarkista, tekeekö prosessisi tästä näkyvän, dokumentoidun päätöksen, vai tapahtuuko se hiljaisen, dokumentoimattoman tukahduttamisen kautta, joka rapauttaa työkalun signaalia ajan myötä.

6. **Missä staattisen analyysin havainnot, monimutkaisuuspisteet ja kuumien pisteiden data konvergoivat samaan tiedostoon tai moduuliin?** Vertaa näitä kolmea signaalia eksplisiittisesti. Konvergenssi useiden riippumattomien mittarien yli on vahvempi priorisointisignaali kuin mikään yksittäinen yksin.

## Sektorinäkökulma

**Startup-yritys.** Kevyt, ilmainen staattisen analyysin työkalu, joka on integroitu CI:hin alusta alkaen, on halpa vakuutus ja havaitsee aitoja ongelmia varhain, ennen kuin perintöjonolla on mitään mahdollisuutta kertyä. Pidä sääntöjoukko keskittyneenä aidosti arvokkaisiin, vähäkohinaisiin luokkiin sen sijaan, että ottaisit heti käyttöön jokaisen saatavilla olevan säännön.

**Pieni yritys.** Useimmat nykyaikaiset kieliekosysteemit sisältävät kyvykkäitä ilmaisia staattisen analyysin työkaluja. Niiden käyttöönotto CI:ssä järkevällä oletussääntöjoukolla vaatii vähän investointia. Keskity uusien havaintojen portittamiseen sen sijaan, että yrittäisit ratkaista mitään olemassa olevaa jonoa kaikkea kerralla.

**Suuryritys.** Virheellisten positiivisten osuuden ja vakavuuslajittelun tietoinen hallinta muuttuu olennaiseksi tässä mittakaavassa, koska huonosti säädetty työkalu, joka tuottaa liikaa kohinaa kymmenissä tiimeissä, sivuutetaan koko organisaatiossa. Panosta staattisen analyysin työkalujen konfiguraation omaan, nimettyyn omistajaan ja kohtele sääntöjen säätämistä jatkuvana kurina, ei kertaluonteisena käyttöönottotehtävänä.

**Julkishallinto.** Staattisen analyysin havainnot, erityisesti tietoturvaan liittyvät, ovat usein suoraan olennaisia vaatimustenmukaisuus- ja auditointivaatimuksille. Ylläpidä dokumentoitua, auditoitavaa prosessia sille, miten havainnot lajitellaan, korjataan tai vapautetaan muodollisesti kirjatulla perustelulla, koska juuri tätä dokumentaatiota ulkoinen auditoija usein haluaa nähdä.

## Esimerkit

**Suuryritys.** Ohjelmistoyrityksen staattisen analyysin mittaristoon oli kertynyt yli neljäkymmentätuhatta ratkaisematonta havaintoa koodikannassa useiden vuosien ajan ilman vakavuudella painotettua lajittelua, niin suuri luku, että insinöörit olivat lakanneet katsomasta mittaristoa lähes kokonaan. Uudistettu lähestymistapa luokitteli havainnot vakavuuden mukaan, havaitsi alle kaksisataa aidosti kriittiseksi ja asetti CI:n portin nimenomaan uusille kriittisille ja korkean vakavuuden havainnoille jättäen matalan vakavuuden jonon pienenemään vähitellen tavallisen koodin ylläpidon kautta. Kuudessa kuukaudessa kriittiset havainnot olivat pudonneet yksinumeroisiksi, ja, mikä tärkeämpää, insinöörikyselydata osoitti uudistunutta luottamusta työkalun tulosteeseen, nyt kun se tuotti hallittavan, aidosti toimintaan johtavan signaalin ylivoimaisen, sivuutetun jonon sijaan.

**Julkishallinto.** Puolustusviraston ohjelmistotoimitusketjun tietoturvalinjaus edellytti staattisen analyysin skannausta ilman yhtään ratkaisematonta havaintoa ennen jokaista julkaisua, linjaus, joka oli käytännössä johtanut siihen, että kehitystiimit tukahduttivat suuria määriä havaintoja, joukossa aitojakin tietoturvaongelmia, pelkästään täyttääkseen julkaisuaikataulut toimimattoman kaikki tai ei mitään -portin alla. Uudistettu linjaus edellytti nolla uutta kriittistä tai korkean vakavuuden havaintoa jokaisessa julkaisussa, yhdistettynä dokumentoituun, seurattuun korjaussuunnitelmaan ja aikatauluun perintöjonolle, jota tietoturvan hallintalautakunta katselmoi neljännesvuosittain. Tämä käytännöllinen, vaiheittainen lähestymistapa sekä palautti aidon tietoturvatarkastelun uuteen koodiin että edistyi todellisesti, mitattavasti perintöjonon suhteen kahdeksantoista kuukauden aikana, toisin kuin toimimaton aiempi linjaus, joka oli tuottanut enimmäkseen tukahduttamista aitojen korjausten sijaan.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Hyvin hallitun staattisen analyysin tuotto on todellisten virheiden ja tietoturvahaavoittuvuuksien havaitseminen ennen tuotantoa kustannuksella, joka on paljon alhaisempi kuin vastaava ihmiskatselmointityö samalle kattavuudelle vaatisi. Yllä oleva puolustusvirasto-esimerkki osoittaa tämän väärin tekemisen hinnan: toimimaton, kaikki tai ei mitään -linjaus oli itse asiassa vähentänyt aitoa tietoturvatarkastelua ajamalla tukahduttamiseen, mikä oli sen tarkoituksen vastakohta.

Omistamisen kokonaiskustannukseen kuuluu itse työkalut, jotka ovat usein ilmaisia tai edullisia yleisille kieliekosysteemeille, sekä vakavuuslajittelun, virheellisten positiivisten hallinnan ja perintöjonon korjaussuunnittelun jatkuva kuri. Tuo jatkuva kuri, enemmän kuin itse työkalu, ratkaisee, tuottaako staattisen analyysin ohjelma aitoa, luotettua arvoa vai rappeutuuko se sivuutetuksi kohinaksi.

## Antimallit ja sudenkuopat

- **Raa'an havaintomäärän käsittely mittarina:** sulauttaa triviaalit ja vakavat ongelmat ja on helposti pelattavissa tukahduttamalla.
- **Koko historiallisen jonon selvittämisen vaatiminen ennen kuin uusi työ voi edetä:** yleensä epäkäytännöllistä ja ajaa tukahduttamiseen aitojen korjausten sijaan.
- **Virheellisten positiivisten osuuden sivuuttaminen:** hallitsematon kohinataso saa tiimit sivuuttamaan työkalun tulosteen kokonaan, aidot havainnot mukaan lukien.
- **Oikeutettujen havaintojen hiljainen, dokumentoimaton tukahduttaminen:** rapauttaa työkalun signaalia eikä jätä auditointijälkeä vaatimustenmukaisuutta varten.
- **Staattisen analyysin havainnon käsittely automaattisena tuomiona ilman ihmiskatselmointia:** missaa kontekstin, jota työkalu ei näe.
- **Havaintojen vertaamatta jättäminen monimutkaisuus- ja kuumien pisteiden dataan:** missaa vahvemman priorisointisignaalin, jonka konvergoiva näyttö tarjoaa.

## Kypsyysmalli

- **Taso 1, Aloittava:** Staattista analyysiä ei ajeta tai havainnot kertyvät hallitsemattomasti ilman vakavuuslajittelua tai trendin seurantaa.
- **Taso 2, Kehittyvä:** Jonkin verran staattista analyysiä ajetaan CI:ssä, mutta vakavuuslajittelu on epäjohdonmukaista ja virheellisten positiivisten osuus hallitsematon.
- **Taso 3, Vakioitu:** Havainnot painotetaan vakavuudella ja CI asettaa portin uusille kriittisille ja korkean vakavuuden havainnoille koko organisaatiossa.
- **Taso 4, Hallittu:** Virheellisten positiivisten osuutta säädetään aktiivisesti, perintöjonolla on dokumentoitu, tahdistettu korjaussuunnitelma ja vapautukset ovat näkyviä ja dokumentoituja.
- **Taso 5, Orkestroitu:** Staattisen analyysin havaintoja, monimutkaisuusdataa ja kuumien pisteiden dataa verrataan rutiininomaisesti investoinnin priorisoimiseksi, ja organisaatio voi osoittaa tiettyjä, mitattavia virhe- tai tietoturvaparannuksia, jotka voi jäljittää ohjelmaan.

## Keskusteluideoita

1. Mikä on nykyinen vakavuudella painotettu trendimme, ja paraneeko vai pahenevatko se?
2. Kuinka suuri on perintöhavaintojonomme, ja onko meillä tietoinen suunnitelma sen pienentämiseksi?
3. Mikä on arvioitu virheellisten positiivisten osuus kohinaisimmassa havaintoluokassamme?
4. Luottavatko tiimimme insinöörit nykyisin staattisen analyysin tulosteeseen vai sivuuttavatko he sen?
5. Missä staattisen analyysin havainnot konvergoivat monimutkaisuus- tai kuumien pisteiden datan kanssa koodikannassamme?

## Keskeiset opit

- Seuraa **vakavuudella painotettua trendiä**, ei raakaa havaintomäärää, joka sulauttaa triviaalit ja vakavat ongelmat.
- Aseta CI:n portti **tuotuihin uusiin havaintoihin**, ei koko historialliseen jonoon, estääksesi taantuman vaatimatta epäkäytännöllistä, kerralla tehtävää korjausta.
- Hallitse aktiivisesti **virheellisten positiivisten osuutta**. Hallitsematon kohina tuhoaa luottamuksen työkaluun ja johtaa havaintojen sivuuttamiseen kokonaan.
- Kohtele havaintoja **ihmiskatselmoinnin kehotteena**, näkyvin, dokumentoiduin vapautuksin, ei automaattisena tuomiona tai hiljaisena tukahduttamisena.
- Vertaa staattista analyysiä **monimutkaisuus- ja kuumien pisteiden dataan** (aiheet 4.1, 4.3) konvergoivan, vahvemman priorisointinäytön saamiseksi.

## Lähteet ja lisälukemista

- *Static Program Analysis*, by Anders Møller and Michael I. Schwartzbach (staattisen analyysin tekniikoiden teoreettinen ja käytännöllinen perusta).
- OWASP's guidance on static application security testing (SAST), osa OWASP Foundationin laajempia resursseja turvallisista ohjelmistokehityskäytännöistä.
- *Refactoring: Improving the Design of Existing Code*, by Martin Fowler (koodihajukatalogi, johon moni staattisen analyysin työkalu perustuu).
- *Working Effectively with Legacy Code*, by Michael Feathers (laatuongelmien perintöjonon hallinta vakiintuneessa koodikannassa).
