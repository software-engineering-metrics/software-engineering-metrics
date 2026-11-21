# 2.10 DORA-mittarien viitekehys

## Yleiskatsaus ja perustelut

**[DORA-mittarit](https://dora.dev/guides/dora-metrics/)** tulevat [DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment -ohjelmasta, monivuotisesta tutkimushankkeesta, joka myöhemmin julkaistiin Nicole Forsgrenin, Jez Humblen ja Gene Kimin kirjana *Accelerate* ja jossa kyselytutkimukseen osallistui kymmeniä tuhansia ohjelmistoalan ammattilaisia selvittämään, mitkä toimituskäytännöt korreloivat organisaation suorituskyvyn kanssa. Tuloksena oli neljä mittaria, jotka on pariutettu kaksi ja kaksi: julkaisutiheys ja muutosten läpimenoaika mittaavat nopeutta. Muutosten epäonnistumisprosentti ja epäonnistuneen julkaisun palautumisaika, usein lyhennettynä palautumisen keskimääräiseksi ajaksi (MTTR), mittaavat vakautta. Tutkimushavainto, joka teki viitekehyksestä merkittävän, oli, että huippusuorittajat olivat yhtä aikaa nopeita ja vakaita, mikä kumosi oletuksen, että nopeus ja turvallisuus vaihtavat paikkaa keskenään. Tuo havainto on yhä selvin läpikäyty esimerkki tässä kirjassa aiheen 1.2 suojakaiteen pariutuksen periaatteesta: kannustettu nopeusmittari yhdistettynä vakaussuojakaiteeseen on se, mitä parhaiten suoriutuvat organisaatiot todella tekevät.

Tämä kirja käsittelee DORA:n tämän osan viimeisenä, tarkoituksella, eikä osan jäsentävänä viitekehyksenä. Tuo sijoitus ei ole tutkimuksen hylkäämistä, joka pysyy aidosti ankarana ja käyttämisen arvoisena. Se heijastaa tiettyä, todellista rajoitetta: DORA mittaa kuinka nopeasti ja turvallisesti putki liikkuu, mutta on hiljaa siitä, mikä putken läpi liikkuu. Tiimi voi esittää erinomaisia DORA-lukuja samalla kun sen todellinen tuotos on hiljaa ajautunut virheiden uudelleentyöstöön tai se on näivettänyt teknisen velan ja tietoturvatyön kapasiteettia, kuvio, jonka aiheiden 2.1–2.4 Flow Framework on rakennettu nimenomaan tuomaan esiin ja jota DORA ei näe. Käytä DORA:a niin kuin tämä aihe sen esittää: hyvin validoituna, kapeampana viitemittana putken mekaniikalle, ei toimituksen terveyden koko kuvana.

Suurille tiimeille DORA:n jäljellä oleva aito arvo on vertailukelpoisuus. Johdonmukaisesti putki- ja häiriödatasta laskettu mittari antaa organisaation verrata toimituskyvykkyyttä monien eri toimialoilla työskentelevien tiimien kesken ilman omenat ja appelsiinit -ongelmaa, joka vaivaa useimpia tiimien välisiä vertailuja. Suuryritykset käyttävät sitä yhä alustainvestointien priorisointiin. Julkishallinnon organisaatiot käyttävät sitä yhä osoittaakseen todisteilla, että uudistusohjelma paransi mitattavasti toimituksen mekaniikkaa. Kohtele sitä DORA:n asianmukaisena, rajattuna tehtävänä, ja käytä tämän osan aiempia Flow Framework -aiheita laajempaan kysymykseen siitä, toimitetaanko ylipäätään oikeita asioita.

## Keskeiset periaatteet

- **DORA mittaa putkea, ei sen läpi virtaavaa arvoa.** Aihe 2.1 nimeää tämän aukon suoraan. Käytä flow-jakaumaa (aihe 2.3) nähdäksesi sen, mitä DORA ei voi.
- **Nopeutta ja vakautta mitataan yhdessä, ei koskaan erikseen.** DORA-pohjainen mittaristo ilman molempia puolikkaita ei oikeasti käytä viitekehystä.
- **Määritelmän johdonmukaisuus on tärkeämpää kuin raaka luku.** Tiimin siirtyminen "keskitasoisesta" "korkeaan" suorituskykyyn johdonmukaisesti määritellyllä mittarilla on todellinen signaali. Kahden eri tavoin laskettujen tiimien vertaaminen ei ole.
- **DORA mittaa järjestelmää, ei yksilöitä.** Näiden mittarien soveltaminen yksittäisiin kehittäjiin rikkoo viitekehyksen tilastollisen perustan ja kutsuu juuri sitä pelaamista, josta aihe 1.2 varoittaa.
- **Kaikki neljä mittaria ovat sijaismittareita, eivät tavoitteita.** Ne korreloivat organisaation suorituskyvyn kanssa. Itse luvun jahtaaminen, irrallaan aidosta toimituksen parantamisesta, romuttaa viitekehyksen tarkoituksen.

## Suositukset

### Instrumentoi julkaisutiheys putkesta ja laske vain tuotantoversiot

**Julkaisutiheys** mittaa, kuinka usein tiimi onnistuneesti julkaisee tuotantoon. Laske vain onnistuneet tuotantojulkaisut, automaattisesti CI/CD-putkidatasta instrumentoituna, ei koskaan itse raportoituna. Tarkkaile erityisesti korvaamispelaamista, yhden merkityksellisen muutoksen pilkkomista useaksi triviaaliksi julkaisuksi pelkästään lukumäärän paisuttamiseksi, seuraamalla julkaisun kokoa tiheyden rinnalla: kutistuva keskikoko nousevan määrän vieressä on selvin merkki siitä, että näin tapahtuu.

### Instrumentoi muutosten läpimenoaika ensimmäisestä commitista tuotantoon

**Muutosten läpimenoaika** mittaa ajan koodimuutoksen ensimmäisestä commitista sen onnistuneeseen julkaisuun tuotannossa. Raportoi sekä mediaani että korkea persentiili, ei vain keskiarvoa, noudattaen aiheen 1.6 ohjeistusta vinolle ajalliselle datalle, ja tarkkaile määritelmän ajautumista kummassakin päässä, mikä imartelee lukua ilman mitään aitoa parannusta.

### Määrittele muutosten epäonnistumisprosentti kirjallisesti ennen kuin vertaat tiimien välillä

**Muutosten epäonnistumisprosentti** mittaa niiden julkaisujen prosenttiosuuden, jotka aiheuttavat korjausta vaativan vian, takaisinrullauksen, kiireellisen korjauksen tai häiriön. Tämä on neljästä vaikein määritellä johdonmukaisesti, koska "epäonnistuminen" ei ole itsestään selvästi objektiivinen. Sovi kirjallisesta määritelmästä ennen tiimien vertaamista. Ilman sitä näennäisen reilu vertailu voi johtaa pahasti harhaan. Tarkkaile epäilyttävän nopeaa parannusta ilman taustalla olevaa prosessimuutosta, selvintä merkkiä määritelmäpelaamisesta aidon edistyksen sijaan.

### Mittaa palautumisaika havaitsemisesta, ei julkaisutapahtumasta

**Epäonnistuneen julkaisun palautumisaika** mittaa, kuinka kauan palvelun palauttaminen kestää, kun julkaisu aiheuttaa vian. Aloita kello havaitsemisesta, ei itse julkaisutapahtumasta, jotta luku heijastaa aitoa palautumisviivettä eikä valvonta-aukkoa. Investoi nimenomaan automaattiseen takaisinrullauskykyyn, yleisimpään vipuun tämän mittarin aidolle parantamiselle sen sijaan, että häiriö julistettaisiin ratkaistuksi ennenaikaisesti.

### Käytä flow-mittareita, ei DORA:a, diagnosoidaksesi miksi luku liikkui

Kun DORA-mittari siirtyy, pelkät neljä lukua harvoin selittävät miksi. Käytä sykliajan erittelyä (aihe 2.6), flow-kuormaa (aihe 2.4) ja flow-jakaumaa (aihe 2.3) DORA:n yhteenvetolukujen alla olevana diagnostisena kerroksena, äläkä koskaan käytä DORA-mittaria yksilön suoritusarvioinnissa, viitekehyksen alttiina olevassa vahingollisimmassa väärinkäytössä.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Täysi DORA-viitekehys, kaikki neljä mittaria pariutettuna | Tutkimuksella validoitu, vastustaa pelaamista pariutuksen kautta, mahdollistaa reilun tiimien välisen vertailun | Hiljainen siitä, millaista arvoa toimitetaan; tarvitsee Flow Frameworkin rinnalleen tuon kuvan saamiseksi |
| DORA tämän osan ainoana jäsentävänä mittarisarjana | Yksinkertainen, tuttu useimmille ohjelmistotuotannon johtajille | Ohittaa arvosekoituskysymyksen kokonaan, tämän kirjan syy asettaa se tässä vähemmän tärkeäksi |
| DORA ja Flow Framework yhdessä | Sekä putken mekaniikka että arvosekoitus näkyvät | Vaatii kahden mittarisanaston ylläpitoa yhden sijaan |
| DORA sovellettuna yksilötasolla | Tuntuu suoraan toimintaan johtavalta joillekin esihenkilöille | Rikkoo viitekehyksen tilastollisen pätevyyden; vahva altistus Goodhartin laille |

Keskeinen jännite on **mekaaninen ankaruus vastaan liiketoiminnan luettavuus**. DORA:n neljä mittaria on määritelty tarkasti ja tutkimuksella validoitu, mikä tekee niistä erinomaisia putken suorituskyvyn vertailuun tiimien välillä, mutta sama tarkkuus on rajattu kapeasti itse putkeen eikä kerro mitään siitä, virtaako sen läpi oikeanlaista työtä. Ratkaise jännite pitämällä DORA viitekerroksena putken terveydelle, aiheen 2.10 asianmukaisena paikkana tämän kirjan rakenteessa, ja käyttämällä tämän osan aiempia Flow Framework -aiheita liiketoimintaan suuntautuneeseen arvosekoituskysymykseen sen sijaan, että yritettäisiin saada DORA vastaamaan kysymykseen, jota varten sitä ei koskaan suunniteltu.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Instrumentoimmeko kaikki neljä DORA-mittaria putkesta, vai ovatko jotkin niistä itse raportoituja arvioita?** Objektiiviseen, tutkimuksella validoituun mittaukseen perustuva viitekehys menettää suuren osan arvostaan heti kun luku on paras arvaus. Auditoi kunkin mittarin todellinen datalähde (aihe 1.5).

2. **Jakavatko kaikki tiimit, joita vertaamme DORA-mittareilla, samat määritelmät julkaisulle, muutokselle ja epäonnistumiselle?** Eri määritelmiä käyttävien tiimien vertailu ei oikeasti ole vertailu, ja se voi tuottaa epäreiluja arvioita suhteellisesta suorituskyvystä.

3. **Onko kukaan organisaatiossamme käyttänyt DORA-mittaria yksilön suoritusarvioinnissa, muodollisesti tai epävirallisesti?** Tämä on viitekehyksen vahingollisin yksittäinen väärinkäyttö ja tapahtuu usein hiljaa. Kysy suoraan ja ole valmis epämukavaan mutta välttämättömään vastaukseen.

4. **Voisivatko DORA-lukumme olla erinomaisia samalla kun flow-jakaumamme (aihe 2.3) on hiljaa ajautunut kohti uudelleentyöstöä tai pois ominaisuuksista?** Tämä on juuri se aukko, jota DORA yksin ei näe. Hae molemmat lukusarjat yhteen ja tarkista, kertovatko ne johdonmukaisen tarinan.

5. **Kun jokin DORA-mittareistamme liikkuu, onko meillä flow-mittarien diagnostiikka selittämään miksi?** Pelkkä DORA-luku kertoo, että jokin muuttui, ei mikä. Tarkista, voivatko tiimisi vastata kysymykseen "miksi läpimenoaika kasvoi tässä kuussa" datalla, vai vain arvailulla.

6. **Miten neljä DORA-lukuamme muuttuisivat, jos tarkoituksella yrittäisimme pelata jokaista, ja huomaisimmeko?** Käy läpi julkaisutiheys, läpimenoaika, muutosten epäonnistumisprosentti ja palautumisaika yksi kerrallaan, aiheen 1.2 ydinkurin käytännön soveltaminen tähän tiettyyn viitekehykseen.

## Sektorinäkökulma

**Startup-yritys.** DORA:n nopeusmittarit tulevat yleensä luonnostaan pienelle tiimille, joka jo julkaisee tiheästi. Vaikeampi kuri on muutosten epäonnistumisprosentin ja palautumisajan instrumentointi rehellisesti sen sijaan, että oletetaan vakaus, koska mikään ei ole vielä mennyt pahasti rikki. DORA:n pariuttaminen jopa epävirallisen flow-kohdejaon kanssa (aihe 2.2) varhain välttää väärän toimituksen terveyden tunteen rakentamisen pelkän putken nopeuden varaan.

**Pieni yritys.** Useimmat nykyaikaiset CI/CD- ja versionhallinta-alustat vievät julkaisutiheyden ja läpimenoajan datan minimaalisella käyttöönotolla. Julkaisujen yhdistäminen häiriöihin muutosten epäonnistumisprosenttia varten vaatii tyypillisesti enemmän käsityötä. Aloita kahdella nopeusmittarilla ja lisää vakauden seuranta heti kun epävirallinen häiriöloki on olemassa, johon linkittää.

**Suuryritys.** DORA:n suurin jäljellä oleva arvo tässä mittakaavassa on reilu, johdonmukainen tiimien välinen vertailu alustainvestointipäätöksiin. Yhdenmukaista määritelmät koko organisaatiossa (aihe 1.4), automatisoi instrumentointi keskitetysti ja pariuta jokainen DORA-raportti flow-jakaumanäkymän kanssa, jotta johto näkee sekä putken nopeuden että arvosekoituksen yhdessä, ei toista ilman toista.

**Julkishallinto.** DORA-mittarit antavat yhä uudistusohjelmalle puolustettavan, tutkimukseen perustuvan tavan osoittaa toimituksen mekaniikan parantuminen valvontaelimille. Raportoi kaikki neljä mittaria yhdessä, älä koskaan poimi imartelevaa puolikasta, ja pariuta ne flow-jakauman kanssa, jotta raportti vastaa myös vaikeampaan, tärkeämpään kysymykseen siitä, mitä nopeampi putki oikeasti toimittaa.

## Esimerkit

**Suuryritys.** Suuren telekommunikaatioyrityksen alustauudistusohjelma instrumentoi kaikki neljä DORA-mittaria johdonmukaisesti neljänkymmenen tuotetiimin yli ja osoitti aidon siirtymän matalan suorituskyvyn kaistoilta korkean suorituskyvyn kaistoille kahdeksantoista kuukauden aikana: julkaisutiheys noin kymmenkertaistui, läpimenoaika laski viikoista päiviin ja muutosten epäonnistumisprosentti pysyi tasaisena. Hallituksen jäsen, esitystä katselmoidessaan, esitti kysymyksen, johon pelkät DORA-luvut eivät voineet vastata: kuinka suuri osa tuosta nopeammasta toimituksesta oli uutta asiakasarvoa verrattuna uudelleentyöstöön. Ohjelmistoorganisaatiolla ei ollut vastausta ennen kuin se otti käyttöön flow-kohteiden luokittelun seuraavalla vuosineljänneksellä, mikä osoitti ominaisuustyön osuuden kokonaistuotoksesta itse asiassa pienentyneen DORA:n nopeuslukujen parantuessa, havainto, joka muokkasi ohjelman seuraavan vuoden prioriteetit.

**Julkishallinto.** Osavaltion hallituksen IT-uudistustoimisto otti DORA-mittarit sopimusehdoksi vertaillakseen useiden kilpailevien toimittajatiimien toimituskykyä, tehokas käyttö viitekehyksen vertailukelpoisuudelle. Yhden toimittajan korkean julkaisutiheyden paljastettiin, kun muutosten epäonnistumisprosentti vaadittiin sen rinnalle, korreloivan lähes kolme kertaa verrokkeja korkeamman epäonnistumisprosentin kanssa, tieto, joka vaikutti suoraan toimiston sopimuksen uusimispäätökseen. Toimisto lisäsi myöhemmin samoihin sopimuksiin flow-jakaumavaatimuksen havaittuaan, että toimittaja, jolla oli parhaat DORA-luvut, oli myös se, joka käytti pienimmän osuuden kapasiteetista juuri niihin tietoturvakorjaustöihin, joita sopimus nimenomaisesti vaati.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

DORA:n hyvän käyttöönoton tuotto sen asianmukaisessa laajuudessa on puolustettava, näyttöön perustuva vastaus kysymykseen "onko toimitusputkemme nopeutumassa ja turvallistumassa", joka on yhä yksi ohjelmistotuotannon helpommin varmuudella vastattavista kysymyksistä. Tuo vastaus perustelee alusta- ja työkaluinvestoinnit todellisilla luvuilla ja antaa johdon verrata kilpailevia investointeja reilulla, johdonmukaisella pohjalla, aivan kuten se on aina tehnyt.

Omistamisen kokonaiskustannus (TCO) on integraatiotyö, joka linkittää julkaisutapahtumat häiriötietueisiin muutosten epäonnistumisprosenttia ja palautumisaikaa varten, mikä ei ole triviaalia suuren, heterogeenisen työkalumaiseman yli. Lisäkustannus DORA:n pariuttamisesta tämän osan aiempien Flow Framework -aiheiden kanssa on suhteellisen pieni, koska flow-kohteiden luokittelu on olemassa olevan työn päälle kerrostettu raportointikäytäntö, ei rinnakkainen mittausjärjestelmä, ja tuotto, juuri sen arvosekoituksen sokean pisteen havaitseminen, jota yllä oleva telekommunikaatioesimerkki havainnollistaa, on tämän vaatimattoman lisäinvestoinnin arvoinen.

## Antimallit ja sudenkuopat

- **DORA:n kohteleminen toimituksen terveyden koko kuvana:** pelaamisen tapa, jota vastaan tämän aiheen sijoitus on suunniteltu. Organisaatio voi esittää aidosti erinomaisia DORA-lukuja, nopeita, tiheitä, vakaita julkaisuja, samalla kun sen todellinen toimitettu arvo on hiljaa siirtynyt kohti uudelleentyöstöä tai pois ominaisuuksista, eivätkä DORA:n neljä mittaria yksin koskaan paljasta tuota siirtymää, koska niitä ei koskaan suunniteltu mittaamaan sitä. Suojakaide on pariuttaa jokainen DORA-raportti flow-jakauman kanssa (aihe 2.3), jotta nopea, vakaa putki, joka toimittaa väärää työn sekoitusta, on näkyvä eikä sekoiteta aitoon toimituksen terveyteen.
- **Vain DORA:n nopeuspuolikkaan raportointi:** romuttaa viitekehyksen keskeisen havainnon, että nopeus ja vakaus liikkuvat yhdessä huippusuorittajilla.
- **DORA-mittarien käyttö yksilöiden suoritusarvioinneissa:** rikkoo viitekehyksen tilastollisen pätevyyden ja kutsuu voimakasta pelaamista.
- **Tiimien vertaaminen epäjohdonmukaisilla määritelmillä:** tuottaa vertailuja, jotka näyttävät reiluilta mutta eivät ole.
- **Itse raportoidut DORA-luvut putki-instrumentoitujen sijaan:** tuo juuri sen vinouman, jonka poistamiseksi viitekehys suunniteltiin.
- **DORA:n kohteleminen diagnostisena eikä yhteenvetona:** jättää tiimin kykenemättömäksi selittämään, miksi luku liikkui, ilman sen alla olevaa flow-mittarien kerrosta.

## Kypsyysmalli

- **Taso 1, Aloittava:** DORA-mittarit, jos niitä seurataan lainkaan, ovat itse raportoituja, epäjohdonmukaisesti määriteltyjä eikä niitä koskaan pariuteta flow-datan kanssa.
- **Taso 2, Kehittyvä:** Jotkin tiimit instrumentoivat DORA:n putkesta, mutta määritelmät vaihtelevat eikä flow-jakauman vastinetta ole tarkistuksen tueksi.
- **Taso 3, Vakioitu:** Kaikki neljä DORA-mittaria instrumentoidaan johdonmukaisesti putki- ja häiriödatasta jaetuilla määritelmillä, ja ne esitetään rutiininomaisesti flow-jakauman rinnalla.
- **Taso 4, Hallittu:** DORA ja flow-mittarit katselmoidaan yhdessä vakioparina organisaation jokaisella tasolla, eikä DORA:a koskaan käytetä yksilön arviointiin.
- **Taso 5, Orkestroitu:** Organisaatio voi osoittaa tiettyjä tapauksia, joissa flow-jakauma havaitsi arvosekoitusongelman, jonka erinomaiset DORA-luvut yksin olivat peittäneet, ja käyttää molempia viitekehyksiä tietoisesti niiden kunkin vastaamiin eri kysymyksiin.

## Keskusteluideoita

1. Mihin neljä DORA-mittariamme asettavat meidät suorituskykyluokkien kirjossa, rehellisesti?
2. Voisivatko DORA-lukumme näyttää erinomaisilta samalla kun flow-jakaumamme on hiljaa ajautunut? Olemmeko koskaan tarkistaneet?
3. Onko kukaan koskaan käyttänyt DORA-lukua yksilön arvioimiseen, edes epävirallisesti?
4. Jos kilpailija julkaisisi DORA-lukunsa, vertautuisivatko omamme edullisesti, ja kertoisiko tuo vertailu todella, kuka toimittaa enemmän todellista arvoa?

## Keskeiset opit

- DORA:n neljä mittaria, **julkaisutiheys, läpimenoaika, muutosten epäonnistumisprosentti ja palautumisaika**, pariuttavat nopeuden vakauden kanssa suunnitelmallisesti ja pysyvät aidosti tutkimuksella validoituina.
- Tämä kirja asettaa DORA:n **tämän osan viimeiseksi**, koska se mittaa putkea, ei sen läpi virtaavaa arvoa. Pariuta se flow-jakauman (aihe 2.3) kanssa täydemmän kuvan saamiseksi.
- Aiheen keskeinen pelaamisen tapa on **erinomaisten DORA-lukujen sekoittaminen täydelliseen toimituksen terveyteen**. Suojakaide on raportoida DORA aina flow-jakauman rinnalla.
- **Älä koskaan käytä DORA-mittareita yksilöiden suoritusarvioinneissa.** Viitekehyksen pätevyys riippuu järjestelmätason, ei yksilötason, mittauksesta.
- Käytä **flow-mittareita diagnostisena kerroksena** DORA:n yhteenvetolukujen alla, kun jokin niistä liikkuu.

## Lähteet ja lisälukemista

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
