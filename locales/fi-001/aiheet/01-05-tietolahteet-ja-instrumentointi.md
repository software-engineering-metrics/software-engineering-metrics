# 1.5 Tietolähteet ja instrumentointi

## Yleiskatsaus ja perustelut

Mittari on yhtä luotettava kuin sen alla oleva data, ja useimmat mittariohjelmat käyttävät paljon enemmän vaivaa mittaristojen suunnitteluun kuin niitä syöttävän putken todentamiseen. Se on takaperin. Kauniisti suunniteltu kaavio, joka on rakennettu epäjohdonmukaisen, itse raportoidun tai hiljaa rikkoutuneen instrumentoinnin varaan, on huonompi kuin ei kaaviota lainkaan, koska se näyttää arvovaltaiselta ollessaan väärä. Tämä aihe käsittelee sitä vähemmän hohdokasta perustaa, jonka varaan loput kirjasta rakentuu: mistä ohjelmistotuotannon data oikeasti tulee, milloin automaattiseen instrumentointiin kannattaa luottaa itse raportoinnin sijaan, ja datan laatuvirheet, jotka mitätöivät mittarin hiljaa ennen kuin kukaan huomaa.

Ohjelmistotuotannon data tulee muutamasta lähdetyypistä, joilla kullakin on erilaiset luotettavuusominaisuudet. Versionhallinta ja [CI/CD](https://en.wikipedia.org/wiki/CI/CD)-putket tuottavat objektiivisia, aikaleimattuja ja vaikeasti väärennettäviä tietueita siitä, mitä todella tapahtui. Tikettijärjestelmät ja projektinhallintatyökalut tuottavat tietueita, jotka riippuvat siitä, että ihmiset päivittävät tilan oikein ja ajoissa, mitä he tekevät usein epäjohdonmukaisesti. Kyselyt tuottavat itse raportoitua dataa, joka on korvaamatonta asioille, joita mikään järjestelmä ei voi havaita, kuten tyytyväisyys, mutta johon vaikuttavat muistiharha ja sosiaalisen suotavuuden vaikutukset. Havaittavuusalustat tuottavat järjestelmätason telemetriaa, joka on objektiivista mutta kattaa vain sen, mikä on instrumentoitu. Kun tiedät, mihin luokkaan tietyn mittarin data kuuluu, tiedät, kuinka paljon siihen kannattaa luottaa ja mitä epäonnistumistapoja tarkkailla.

Suuryrityksen ja julkishallinnon mittakaavassa datan laatuongelmat kasautuvat, koska etäisyys datan alkuperän ja sen lopullisen mittaristokäytön välillä kasvaa useiden järjestelmien, integraatioiden ja muunnosten kautta. Kenttä, joka tarkoittaa yhtä asiaa lähdejärjestelmässä, voi tarkoittaa hienovaraisesti jotain muuta ehdittyään raportointikerrokseen, eikä kukaan jatkokäsittelyssä huomaa, koska luku näyttää yhä uskottavalta. Instrumentoinnin saaminen kuntoon on vähemmän jännittävää kuin viitekehysten saaminen kuntoon, mutta se on perusta, jonka varassa kaikki muu tässä kirjassa seisoo.

## Keskeiset periaatteet

- **Suosi instrumentointia itse raportoinnin sijaan aina kun järjestelmä voi havaita tapahtuman suoraan.** Putken julkaisuaikaleima on luotettavampi kuin tiimin itse raportoima julkaisumäärä.
- **Käytä itse raportointia vain siihen, mitä ei voi havaita suoraan.** Tyytyväisyydelle, koetulle kitkalle ja hyvinvoinnille ei ole tietojärjestelmäkorviketta. Kysy suoraan ja suunnittele kysely hyvin (aihe 3.7). Varaa itse raportointi nimenomaan tähän luokkaan.
- **Jokaisen mittarin datalla on lähdejärjestelmä, keruumenetelmä ja tunnettu epäonnistumistapa.** Dokumentoi kaikki kolme, älä vain määritelmää.
- **Datan laatu rapautuu hiljaa.** Putki, joka toimi oikein vuosi sitten, voi olla hiljaa rikki tänään, ja mittaristo jatkaa väärän luvun näyttämistä valittamatta.
- **Instrumentoi totuuden pisteessä, älä käännöksen jälkeen.** Jokainen siirtymä tapahtuman ja mittariston välillä on mahdollisuus merkityksen ajautumiselle.

## Suositukset

### Yhdistä jokainen mittari todelliseen lähdejärjestelmäänsä ennen kuin luotat siihen

Nimeä jokaiselle mittariston mittarille tietty järjestelmä, joka tuottaa taustalla olevan tapahtuman: CI/CD-putki julkaisutapahtumille, versionhallintapalvelu commit- ja yhdistämistapahtumille, häiriöseuranta katkosten tietueille, kyselyalusta itse raportoidulle tyytyväisyydelle. Jos et osaa nimetä tarkkaa järjestelmää, et oikeasti tiedä, mistä luku tulee, etkä voi arvioida sen luotettavuutta. Tämä kartoitus on aiheen 1.4 hallinnan peruskirjan edellytys, ei erillinen harjoitus.

### Instrumentoi tapahtumassa, älä raportissa

Luotettavin data kerätään automaattisesti tapahtuman hetkellä: putki kirjaa julkaisun heti sen valmistuttua, versionhallinta kirjaa yhdistämisen heti sen toteutuessa. Data, joka riippuu siitä, että ihminen muistaa päivittää tilakentän jälkikäteen, merkitä tiketin "valmiiksi" tai kirjata julkaisun käsin taulukkoon, heikkenee tarkkuudessa sitä enemmän, mitä kauempana se on varsinaisesta tapahtumasta ja mitä kiireisemmäksi vastuuhenkilö tulee. Aina kun automaattinen tapahtuma on olemassa, suosi sitä saman asian ihmisen raportoiman sijaismittarin sijaan.

### Varaa kyselyt siihen, minkä vain ihminen voi kertoa

Jotkin asiat eivät todella ole havaittavissa järjestelmätelemetriasta: kokeeko kehittäjä työnsä merkitykselliseksi, tuntuuko prosessi turhauttavalta, kasvaako uupumisen riski. Nämä vaativat suoraa kysymistä, ja hyvin suunniteltu kysely (aihe 3.7 käsittelee mekaniikan) on oikea työkalu. Virhe on käyttää itse raportointia asioihin, jotka järjestelmä voisi havaita suoraan: pyytää kehittäjiä arvioimaan oma julkaisutiheytensä sen sijaan, että se haettaisiin putkesta, mikä tuo tarpeetonta kohinaa ja vinoumaa dataan, joka olisi voinut olla objektiivista.

### Rakenna datan laadun tarkistukset itse putkeen

Kohtele mittariputkia samalla ankaruudella kuin tuotantokoodia: lisää automaattisia tarkistuksia, jotka hälyttävät, kun lähde lakkaa lähettämästä dataa, kun kentän jakauma siirtyy odottamattomasti tai kun määrä putoaa odottamatta nollaan. Mittaristo, joka hiljaa näyttää vanhentunutta tai rikkinäistä dataa ajantasaisena, on huonompi kuin mittaristo, joka näkyvästi näyttää "data ei saatavilla", koska ensimmäinen rapauttaa luottamusta näkymättömästi kun taas jälkimmäinen kertoo ainakin totuuden omista rajoituksistaan.

### Dokumentoi keruumenetelmä määritelmän rinnalle

Mittarin määritelmä ("muutosten läpimenoaika") ei ole täydellinen ilman sen keruumenetelmää (mitattuna versionhallinnan ensimmäisen commitin aikaleimasta putken tuotantojulkaisun aikaleimaan, hotfix-haarat pois lukien). Kaksi tiimiä, joilla on sama määritelmä mutta eri keruumenetelmät, tuottavat silti vertailukelvottomia lukuja. Kirjaa molemmat aiheen 1.4 mittarien peruskirjaan ja kohtele kummankin muutosta muutoksena, joka vaatii saman dokumentoidun katselmoinnin.

## Kompromissit: edut ja haitat

| Lähdetyyppi | Edut | Haitat |
| --- | --- | --- |
| Automaattinen putki-instrumentointi (CI/CD, versionhallinta) | Objektiivinen, aikaleimattu, vaikea väärentää, vähän jatkuvaa vaivaa | Vaatii etukäteistä kehitysinvestointia rakentaa ja ylläpitää |
| Tikettijärjestelmän ja projektinhallinnan data | Laajasti saatavilla, tiimeille tuttu | Riippuu ihmisten huolellisuudesta; usein epäjohdonmukainen tiimien välillä |
| Kyselyt ja itse raportointi | Ainoa lähde subjektiiviselle kokemukselle (tyytyväisyys, hyvinvointi) | Muistiharha, sosiaalisen suotavuuden harha, vastausväsymys |
| Havaittavuus- ja telemetria-alustat | Rikas, reaaliaikainen, järjestelmätason signaali | Kattaa vain nimenomaisesti instrumentoidun; voi olla kallis mittakaavassa |

Keskeinen jännite on **objektiivisuus vastaan kattavuus**. Automaattinen instrumentointi on luotettavin lähde mutta ei voi havaita subjektiivista kokemusta lainkaan, kun taas kyselyt tavoittavat juuri sen, mihin automaatio ei yllä, mutta kantavat todellisen vinoumariskin. Ratkaise jännite käyttämällä automaattista instrumentointia aina kun tapahtuma voidaan havaita suoraan ja varaamalla itse raportointi nimenomaan ja vain siihen, mikä todella vaatii ihmiseltä kysymistä, ei koskaan laiskana korvikkeena datalle, jonka järjestelmä olisi voinut tarjota.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Voimmeko nimetä viiden tärkeimmän mittarimme kohdalla tarkan lähdejärjestelmän ja keruumenetelmän, vai oletammeko määritelmän tietämättä, mistä data oikeasti tulee?** Tämä on yllättävän yleinen aukko: mittari otetaan käyttöön viitekehyksestä tai toimittajan oletusmittaristosta, eikä kukaan nykyisessä tiimissä oikeasti tiedä, mikä järjestelmä tuottaa taustalla olevan datan tai miten. Jäljitä jokainen alkuperään ryhmäharjoituksena.

2. **Mitkä mittareistamme nojaavat itse raportointiin asiassa, jonka järjestelmä voisi havaita suoraan, ja mitä tarvittaisiin korvaamaan tuo itse raportointi todellisella instrumentoinnilla?** Itse raportoidut julkaisumäärät, itse raportoidut työtunnit ja itse arvioitu sykliaika ovat kaikki yleisiä esimerkkejä väärän datalähteen käytöstä asiassa, jonka automaatio voisi tavoittaa luotettavammin. Tunnista nämä ja priorisoi korkeimman panoksen korvaaminen.

3. **Miten tietäisimme, jos jokin datavirroistamme hajoaisi hiljaa?** Useimmat organisaatiot huomaavat rikkinäisen mittariputken vasta kun joku huomaa luvun näyttävän epäuskottavalta, mikä voi kestää kuukausia. Keskustelkaa, onko millään putkellanne tänään automaattisia terveystarkistuksia, ja jos ei, mitkä niitä tarvitsevat ensimmäisenä.

4. **Missä järjestelmien välinen käännös on muuttanut mittarin merkitystä ilman että kukaan päätti sitä tarkoituksella?** Kenttä, joka tarkoittaa yhtä asiaa lähdejärjestelmässä, voi tarkoittaa hienovaraisesti jotain muuta integraation tai migraation jälkeen, ja syntyvä luku voi näyttää uskottavalta ollessaan väärä. Käy läpi tärkeimmän mittarisi koko datapolku ja etsi käännöskohdat.

5. **Dokumentoimmeko mittarien peruskirjoissa keruumenetelmät, emme vain määritelmiä?** Kaksi tiimiä voi jakaa mittarin nimen ja määritelmän laskien sen eri keruumenetelmistä, mikä tuottaa lukuja, jotka eivät oikeasti ole vertailukelpoisia. Auditoi otos peruskirjoistasi tätä nimenomaista aukkoa vasten.

6. **Miten erotamme aidon trendin datan laatuartefaktista, kun luku liikkuu odottamatta?** Mittarin äkillinen siirtymä on usein ensimmäinen merkki joko todellisesta muutoksesta tai rikkinäisestä putkesta, ja kahden erottaminen vaatii datalähteen tuntemista riittävän hyvin tutkiakseen nopeasti. Keskustelkaa tiiminne todellisesta prosessista viimeisen kohtaamanne selittämättömän mittarisiirtymän osalta.

## Sektorinäkökulma

**Startup-yritys.** Pienellä pinolla suurin osa mittareistasi voi tulla suoraan CI/CD-palveluntarjoajaltasi, versionhallintapalvelustasi ja kevyestä kyselytyökalusta ilman mukautettujen putkien rakentamista. Riski on jättää väliin jopa perustason terveystarkistukset, koska tiimi liikkuu nopeasti. Viiden minuutin automaattinen tarkistus, että datalähde yhä lähettää tapahtumia, on halpa vakuutus hiljaista sokkona lentämistä vastaan.

**Pieni yritys.** Nojaa nykyisten työkalujesi sisäänrakennettuun raportointiin sen sijaan, että rakentaisit mukautettuja datavirtoja, joita et pysty ylläpitämään. Ole selvä siitä, mitkä luvut tulevat automaattisista järjestelmistä ja mitkä ovat arvioita, jotka joku kirjoittaa taulukkoon, koska nämä kaksi kantavat hyvin erilaista luotettavuutta, vaikka päätyisivät samalle sivulle.

**Suuryritys.** Datan laatuongelmat kasautuvat integraatioiden, migraatioiden ja liiketoimintayksikköjen rajojen yli. Investoi keskitettyihin, hyvin valvottuihin datavirtoihin tärkeimmille mittareillesi, rakenna automaattiset datan laadun tarkistukset vakiokäytännöksi ja auditoi keruumenetelmiä, ei vain määritelmiä, aina kun vertaat mittareita liiketoimintayksiköiden välillä.

**Julkishallinto.** Datan alkuperällä voi olla lakisääteistä ja auditointipainoa: julkaistun suoritusluvun täytyy ehkä kestää ulkoinen auditointi paitsi arvonsa myös koko keruuketjunsa osalta. Dokumentoi datan sukulinja nimenomaisesti, säilytä historialliset keruumenetelmätietueet menetelmän muuttumisen jälkeenkin ja ole valmis osoittamaan täsmälleen, miten luku tuotettiin, ei vain mitä se nyt näyttää.

## Esimerkit

**Suuryritys.** Rahoituspalveluyrityksen ohjelmistojohto oli seurannut "muutosten läpimenoaikaa" kaksi vuotta ennen kuin se havaitsi, että kahdeksantoista kuukautta aiemmin tehty datavirran migraatio oli hiljaa vaihtanut aikaleimalähteen ensimmäisestä commitista pull requestin luontiin, lyhentäen näennäistä läpimenoaikaa keskimäärin useilla tunneilla jokaisessa tiimissä kenenkään huomaamatta tai hyväksymättä muutosta. Korjaus otti käyttöön datan laadun tarkistuksen, joka vertasi jokaisen mittarin jakaumaa viikosta viikkoon ja merkitsi tilastollisesti epätavalliset siirtymät ihmisen katselmoitavaksi, ja se löysi kaksi muuta hiljaista putkiongelmaa seuraavan vuoden aikana.

**Julkishallinto.** Liikennevirastolle kuuluvan, yleisölle näkyvän palvelun luotettavuusmittariston taustalla oli sekoitus automaattista anturitelemetriaa ja alueellisten toimistojen käsin syöttämiä häiriöraportteja. Auditointi paljasti, että alueilla, joilla oli vähemmän henkilöstökapasiteettia, vähäisiä häiriöitä raportoitiin järjestelmällisesti liian vähän, ei epärehellisyydestä vaan yksinkertaisesti siksi, että käsin syöttäminen kilpaili ajasta kiireellisemmän työn kanssa. Tämä tarkoitti, että julkaistu luotettavuusluku oli todellisuutta parempi juuri niillä alueilla, joilla alimitoitetun ylläpidon huomaamatta jääminen oli kaikkein vähiten varaa. Viraston korjaus korvasi käsin tehtävän häiriösyötön automaattisella anturilaukaisulla kirjaamisella missä mahdollista ja lisäsi julkaistun luvun rinnalle dokumentoidun arvion käsin raportoinnin kattavuudesta.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Vankan instrumentoinnin tuotto on luottamus: johtoryhmä, joka luottaa dataansa, voi toimia sen perusteella päättäväisesti, kun taas tiimi, jota on polttanut hiljaa rikkoutunut putki, alkaa epäillä jokaista lukua, mikä hidastaa jokaista mittareista riippuvaa päätöstä. Tuo luottamuksen menetys on kallis ja vaikea korjata, ja sen jälleenrakentaminen kestää usein paljon kauemmin kuin alkuperäinen instrumentointi-investointi olisi maksanut.

Hyvän instrumentoinnin omistamisen kokonaiskustannus (TCO) sisältää etukäteisen kehitystyön luotettavien putkien rakentamiseksi ja datan laadun valvonnan jatkuvan kustannuksen. Kumpaankin on helppo investoida liian vähän, koska kumpikaan ei tuota omaa näkyvää mittaristoruutuaan. Tuo alikustannus on näennäissäästö: hiljaa rikkoutuneen putken löytämisen kustannus sen jälkeen, kun kuukausien päätökset on tehty huonon datan varassa, on paljon korkeampi kuin sellaisten terveystarkistusten rakentamisen kustannus, jotka olisivat huomanneet sen ensimmäisenä päivänä.

## Antimallit ja sudenkuopat

- **Luvun luotettavaksi katsominen tuntematta sen lähdejärjestelmää:** mittari on otettu viitekehyksestä tai toimittajan oletuksesta eikä kukaan ole jäljittänyt, mistä data oikeasti tulee.
- **Sen itse raportointi, minkä järjestelmä voisi havaita suoraan:** tuo tarpeetonta kohinaa ja vinoumaa dataan, joka olisi voinut olla objektiivista.
- **Ei automaattisia datan laadun tarkistuksia mittariputkessa:** hiljaa rikkoutunut putki voi näyttää vääriä lukuja kuukausia huomaamatta.
- **Vain määritelmän dokumentointi, ei keruumenetelmää:** kaksi samannimistä mittaria käyttävää tiimiä voi silti laskea vertailukelvottomia lukuja.
- **Mittaristo, joka näyttää "0" tai vanhentunutta dataa ajantasaisena ilman merkkiä lähteen vikaantumisesta:** huonompi kuin näkyvä "data ei saatavilla" -viesti.
- **Alimitoitetut alueet tai tiimit raportoivat järjestelmällisesti liian vähän käsin syöttämisen taakan vuoksi:** datan laatuaukko, joka korreloi juuri niiden alueiden kanssa, jotka tarvitsevat eniten huomiota.

## Kypsyysmalli

- **Taso 1, Aloittava:** Kukaan ei pysty luotettavasti jäljittämään mittaria lähdejärjestelmäänsä. Putkilla ei ole terveystarkistuksia, ja viat jäävät huomaamatta.
- **Taso 2, Kehittyvä:** Joillakin mittareilla on dokumentoidut lähteet, mutta keruumenetelmät ovat epäjohdonmukaisia ja datan laadun tarkistukset parhaimmillaankin ad hoc -luonteisia.
- **Taso 3, Vakioitu:** Jokainen hallittu mittari dokumentoi lähdejärjestelmänsä ja keruumenetelmänsä. Automaattisia putkia suositaan itse raportoinnin sijaan aina kun tapahtuma voidaan havaita suoraan.
- **Taso 4, Hallittu:** Automaattiset datan laadun tarkistukset valvovat jokaista merkittävää putkea ja merkitsevät poikkeamat katselmoitaviksi, ja datan sukulinja on dokumentoitu ja auditoitavissa.
- **Taso 5, Orkestroitu:** Organisaatio kohtelee datan laatua ensiluokkaisena ohjelmistotuotannon kurina, jolla on oma valvontansa ja häiriövasteensa, ja voi pyydettäessä osoittaa minkä tahansa julkaistun mittarin täyden alkuperän.

## Keskusteluideoita

1. Pystyisimmekö jäljittämään kolme tärkeintä mittariamme tarkkaan lähdejärjestelmäänsä juuri nyt, livenä, tässä palaverissa?
2. Mitkä nykyisistä mittareistamme nojaavat itse raportointiin asiassa, jonka järjestelmä voisi mitata suoraan?
3. Onko millään mittariputkellamme tänään automaattisia terveystarkistuksia?
4. Milloin viimeksi löysimme hiljaa rikkoutuneen datavirran, ja kuinka kauan se oli ollut väärässä?
5. Missä käsin tehtävä tiedonsyöttö luo aukon raportoidun ja todellisen todellisuuden välille?

## Keskeiset opit

- Suosi **automaattista instrumentointia** itse raportoinnin sijaan aina kun järjestelmä voi havaita tapahtuman suoraan. Varaa itse raportointi aidosti subjektiiviselle kokemukselle.
- Jokainen mittari tarvitsee dokumentoidun **lähdejärjestelmän ja keruumenetelmän**, ei vain määritelmää.
- Datan laatu **rapautuu hiljaa**. Rakenna automaattiset tarkistukset itse putkeen sen sijaan, että löydät rikkoutumisen sattumalta.
- Instrumentoi **tapahtumassa**, älä käännöksen jälkeen, jotta tapahtuneen ja mittariston näyttämän välinen ajautuma pysyy pienenä.
- Hiljaa rikkoutuneen putken kustannus, kuukausien päätökset huonon datan varassa, ylittää reilusti sen olisi huomanneiden terveystarkistusten kustannuksen.

## Lähteet ja lisälukemista

- *Observability Engineering*, tekijät Charity Majors, Liz Fong-Jones ja George Miranda (instrumentoinnin ja telemetrian suunnitteluperiaatteet).
- *Accelerate: The Science of Lean Software and DevOps*, tekijät Nicole Forsgren, Jez Humble ja Gene Kim (DORA-mittarien taustalla oleva instrumentointitapa).
- *Data Quality: The Accuracy Dimension*, tekijä Jack E. Olson (mittariputkiin soveltuvat datan laadun käsitteet).
- *How to Measure Anything*, tekijä Douglas W. Hubbard (mittausmenetelmät suureille, joita on vaikea havaita suoraan).
