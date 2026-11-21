# 2.9 Pull requestien ja koodikatselmoinnin mittarit

## Yleiskatsaus ja perustelut

[Koodikatselmointi](https://en.wikipedia.org/wiki/Code_review) on yleensä suurin yksittäinen odotusajan aiheuttaja aiheen 2.6 sykliaikaerittelyssä, ja se on myös vaihe, jota tiimi voi suoremmin itse parantaa, toisin kuin jaettua alustan pullonkaulaa tai ulkoista riippuvuutta. Tämä aihe käsittelee katselmointivaiheen sisällä eläviä mittareita: aika ensimmäiseen katselmointiin, pull requestin koko, katselmointikierrosten määrä ja katselmoijakuorman jakautuminen, sekä sitä, miten niitä käytetään katselmoinnin nopeuttamiseen uhraamatta sitä todellista laatuetua, jonka katselmoinnin on tarkoitus tuottaa.

Riski, jolle tämä aihe on erityisen valpas, on sellainen, jota tämä kirja ei ole vielä käsitellyt suoraan: katselmoinnin nopeuden optimointi voi hiljaa rapauttaa katselmoinnin laatua, jos sitä tavoitellaan huolimattomasti. Tiimi, joka puolittaa ajan ensimmäiseen katselmointiin hyväksymällä kaiken leimasimella, on parantanut mittaria tuhoten käytännön todellisen arvon. Jokainen tämän aiheen suositus on kirjoitettu tämä kompromissi mielessä, koska pull requestien mittarit ovat tämän kirjan helpoimpia pelata tavalla, joka näyttää hyvältä mittaristossa samalla kun se heikentää taustalla olevaa koodikantaa mitattavasti.

Suurille tiimeille katselmointimittarit paljastavat kuormantasausongelmia, jotka muuten ovat näkymättömiä: pieni määrä senioreita kehittäjiä, jotka absorboivat suhteettoman osan katselmointikuormasta, tietty tiimi tai koodikannan alue, jossa katselmoinnit johdonmukaisesti seisahtuvat, tai kuvio ylisuuria pull requesteja, jotka tekevät perusteellisen katselmoinnin käytännössä mahdottomaksi katselmoijan huolellisuudesta riippumatta. Nämä kuviot kasautuvat mittakaavassa paljon enemmän kuin pienellä tiimillä, jossa kaikki näkevät epätasapainon suoraan ilman mittaria sen esiin tuomiseksi.

## Keskeiset periaatteet

- **Aika ensimmäiseen katselmointiin on yleensä suurin vipu, ei katselmoinnin perusteellisuus itsessään.** Suurin osa viiveestä tulee pull requestin odottamisesta, että sitä katsotaan, ei katselmointikeskustelun kestosta kun se on alkanut.
- **Pienemmät pull requestit katselmoidaan nopeammin ja perusteellisemmin, ei vain nopeammin.** Koko on vipukohta sekä nopeudelle että laadulle samanaikaisesti.
- **Katselmoinnin nopeus ja laatu eivät ole automaattisesti jännitteessä, mutta niitä voi vaihtaa huolimattomasti keskenään.** Suojaudu tältä vaihtokaupalta nimenomaisesti.
- **Katselmoijakuorman epätasapaino on yleistä ja yleensä näkymätöntä ilman mittaria.** Pieni joukko ihmisiä absorboi usein suhteettoman osan.
- **Nämä mittarit ovat alttiita leimasinpelaamisen riskille.** Nopea hyväksyntä ilman todellista tarkastelua romuttaa koko katselmoinnin tarkoituksen.

## Suositukset

### Seuraa aikaa ensimmäiseen katselmointiin ensisijaisena nopeusmittarina

Mittaa aikaväli pull requestin avaamisesta katselmoijan ensimmäiseen sisältöä koskevaan kommenttiin tai hyväksyntään, instrumentoituna automaattisesti versionhallinta-alustaltasi. Tämä on yleensä hallitseva odotusajan aiheuttaja katselmointivaiheen sisällä (aihe 2.5, aihe 2.6), ja sen parantaminen selkeämmillä katselmoinnin osoittamisen normeilla, ilmoituskäytännöillä tai omistetuilla katselmointiaikablokeilla tuottaa tyypillisesti suurimman yksittäisen tiimin saatavilla olevan sykliajan parannuksen.

### Seuraa pull requestin kokoa ja kannusta aktiivisesti pienempiin muutoksiin

Mittaa muutettuja rivejä tai kosketettuja tiedostoja pull requestia kohti ja kohtele pysyvästi suurta mediaanikokoa signaalina, joka kannattaa käsitellä suoraan. Pienemmät pull requestit katselmoidaan nopeammin, katselmoidaan perusteellisemmin (katselmoija voi todella pitää koko muutoksen mielessään) ja ne on helpompi perua, jos jokin menee pieleen, mikä liittyy suoraan eräkoon periaatteeseen julkaisutiheyden taustalla aiheessa 2.10. Kannusta suurten muutosten pilkkomiseen sarjaksi pienempiä, itsenäisesti katselmoitavia pull requesteja aina kun työ sen sallii.

### Seuraa katselmoijakuorman jakautumista nimenomaisesti

Seuraa suoritettujen katselmointien määrää henkilöä kohti liukuvan ikkunan yli ja tarkkaile erityisesti pientä joukkoa ihmisiä, jotka absorboivat suhteettoman osan. Tämä kuvio on yleinen, osuu usein kokeneimpiin tai luotetuimpiin kehittäjiin ja luo sekä pullonkaulan (heidän saatavuutensa rajoittaa koko tiimin katselmointiläpivirtausta) että uupumisen riskin (aihe 3.2 käsittelee hyvinvointimittareita syvemmin). Kierrätä katselmointivastuuta tietoisesti sen sijaan, että annat sen keskittyä oletuksena nopeimmin vastaavan ympärille.

### Suojaudu leimasinpelaamisen riskiltä nimenomaisesti

Pariuta aika ensimmäiseen katselmointiin laatusignaalin kanssa: virheiden tai häiriöiden osuus, jotka jäljittyvät muutoksiin, jotka hyväksyttiin ilman yhtään katselmointikommenttia, tai äskettäin katselmoidun koodin vaatimien yhdistämisen jälkeisten korjausten osuus. Tiimin, joka parantaa katselmoinnin nopeutta hyväksymällä ilman todellista tarkastelua, pitäisi nähdä tämän suojakaiteen heikkenevän, mikä on täsmälleen aiheen 1.2 pariutusperiaate sovellettuna tähän tiettyyn mittariperheeseen. Älä koskaan tavoittele katselmoinnin nopeutta ilman tätä vastamittaria näkyvissä.

### Käytä katselmointikierrosten määrää kitkan havaitsemiseen, älä yksilöiden arvioimiseen

Katselmointikierrosten määrä, jonka pull request käy läpi ennen yhdistämistä, voi viestiä todellisesta kitkasta, epäselvistä vaatimuksista, erimielisyydestä lähestymistavasta tai epäjohdonmukaisista tyyliodotuksista, jotka kannattaa tutkia prosessitasolla. Vältä tämän luvun käyttöä yksittäisten tekijöiden tai katselmoijien suoraan arvioimiseen. Korkea kierrosmäärä on useammin järjestelmän tai viestinnän signaali kuin henkilökohtainen, ja sen kohteleminen yksilön tuloskorttina riskeeraa juuri sen arvioivan ajautumisen, josta aihe 1.1 varoittaa.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Optimointi pelkästään ajalle ensimmäiseen katselmointiin | Nopea, selkeä signaali, helppo instrumentoida | Voi kannustaa pinnalliseen leimasinkatselmointiin ilman suojakaidetta |
| Optimointi pelkästään pull requestin koon pienentämiselle | Parantaa sekä nopeutta että perusteellisuutta samanaikaisesti | Kaikki työ ei jakaudu siististi pieniin lisäyksiin |
| Katselmointikuorman tasainen kierrätys | Vähentää pullonkaulan ja uupumisen riskiä | Voi hidastaa katselmointia erikoistuneelle, vaikeasti katselmoitavalle koodille, joka tarvitsee tiettyä asiantuntemusta |
| Katselmoinnin keskittäminen senioreille kehittäjille | Syvä toimialaosaaminen sovellettuna johdonmukaisesti | Luo pullonkaulan ja uupumisen riskin ajan myötä |

Keskeinen jännite on **nopeus vastaan tarkastelun syvyys**. Jokainen tämän aiheen tekniikka katselmoinnin nopeuttamiseksi, nopeampi ensimmäinen vastaus, pienemmät pull requestit, tasaisemmin jakautunut katselmoijakuorma, kantaa jonkin riskin todellisen tarkastelun vaihtamisesta pois, jos sitä tavoitellaan ilman tämän aiheen suosittelemaa laatusuojakaidetta. Ratkaise jännite pariuttamalla jokainen nopeusmittari laatusignaalin kanssa, jota seurataan samalla jaksolla, jotta tiimi voi erottaa todellisen prosessiparannuksen hiljaa rapautuvasta katselmointistandardista.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Mikä on todellinen aika ensimmäiseen katselmointiin, ja kuinka suuren osan kokonaissykliajastamme katselmointivaihe kuluttaa?** Hae todellinen luku vaikutelman varaan jättämisen sijaan. Katselmoinnin odotusaika on usein suurempi kuin tiimit olettavat, juuri koska odottamiseen kuluneen ajan aliarvioi helposti verrattuna aktiiviseen työhön.

2. **Mikä on mediaani pull requestin koko, ja kuinka suuri osa katselmointiviiveestämme kutistuisi, jos se pienenisi?** Suuret pull requestit ovat sekä hitaampia katselmoida että todennäköisemmin pinnallisesti katselmoituja yksinkertaisesti siksi, ettei katselmoija voi pitää koko asiaa mielessään kerralla. Katso todellista kokojakaumaasi, ei vain mediaania.

3. **Onko katselmointikuorma keskittynyt pienelle joukolle ihmisiä, ja mitä katselmointiläpivirtaukselle tapahtuisi, jos yksi heistä ei olisi saatavilla kahteen viikkoon?** Tämä kysymys paljastaa sekä pullonkaulariskin että uupumisriskin samanaikaisesti. Hae todellista katselmoijakuormadataa vaikutelman varaan jättämisen sijaan.

4. **Olemmeko koskaan parantaneet katselmoinnin nopeusmittaria tavalla, joka jälkikäteen ajatellen vähensi todellista tarkastelua?** Ole tässä rehellinen. Tämä on täsmälleen tämän aiheen nimeämä leimasinriski, ja siihen on helppo liukua ilman että kukaan tekee tietoisen päätöksen.

5. **Mitä korkea katselmointikierrosten määrä yleensä merkitsee tiimissämme: aitoa erimielisyyttä, epäselviä vaatimuksia vai epäjohdonmukaisia tyyliodotuksia?** Katso otosta pull requesteja, joiden kierrosmäärät ovat epätavallisen korkeita, ja diagnosoi todellinen kuvio sen sijaan, että oletat sen heijastavan huonosti joko tekijää tai katselmoijaa.

6. **Onko meillä katselmoinnin nopeusmittarien rinnalle pariutettu laatusuojakaide, vai seuraammeko nopeutta eristyksissä?** Jos rehellinen vastaus on, ettei tällaista suojakaidetta ole, tuo aukko kannattaa sulkea ennen kuin katselmoinnin nopeutta työnnetään pidemmälle aiheen 1.2 pariutusperiaatteen mukaisesti.

## Sektorinäkökulma

**Startup-yritys.** Katselmointi on usein nopeaa oletuksena pienellä tiimillä, joskus melkein liian nopeaa, yhden hyväksyjän katselmointi minimaalisella tarkastelulla, koska kaikki luottavat kaikkiin. Riski, jota kannattaa tarkkailla tiimin kasvaessa, on katselmoinnin laadun skaalautumattomuus tiimin koon mukana, koska epävirallinen luottamus, joka toimi viidelle kehittäjälle, ei automaattisesti toimi viidellekymmenelle.

**Pieni yritys.** Useimmat versionhallinta-alustat raportoivat valmiina aika yhdistämiseen ja katselmointimäärätilastot. Käytä niitä mukautetun instrumentoinnin rakentamisen sijaan. Pääasiallinen kuri, jonka kannattaa ottaa käyttöön, on yksinkertaisesti sen huomaaminen, onko katselmointikuorma tiimin kasvaessa hiljaa keskittynyt yhdelle tai kahdelle ihmiselle.

**Suuryritys.** Katselmoijakuorman epätasapaino ja erikoisosaamisen pullonkaulat ovat tässä erityisen yleisiä, kun syvä toimialaosaaminen kriittisestä järjestelmästä voi keskittää katselmointivastuun pienelle ryhmälle tiimin koosta riippumatta. Investoi tietoiseen tiedon jakamiseen ja katselmoinnin kiertoon osaamisen levittämiseksi, mikä vähentää sekä pullonkaulaa että bussikertoimen (bus factor) riskiä, että tuo osaaminen asuu liian harvoissa ihmisissä.

**Julkishallinto.** Katselmointiprosessit kantavat täällä usein vaatimustenmukaisuuspainoa laatutavoitteiden rinnalla, mikä voi tehdä pull requesteista suurempia ja katselmoinneista hitaampia suunnittelun seurauksena. Kun aidot vaatimustenmukaisuusvaatimukset edellyttävät perusteellista katselmointia, keskitä parannusvaiva odotusajan vähentämiseen (nopeampi katselmoinnin osoittaminen, selkeämpi triage) katselmoinnin todellisen syvyyden vaarantamisen sijaan, ja dokumentoi kompromissi nimenomaisesti, jos tarkastelun täytyy säilyä raskaana sääntelysyistä.

## Esimerkit

**Suuryritys.** Tietoturvayrityksen ohjelmistoorganisaatio havaitsi, että kourallinen ylikehittäjiä (principal engineers) suoritti yli 40 % kaikista koodikatselmoinneista kahdensadan hengen organisaatiossa, epätasapaino, jota kukaan ei ollut mitannut suoraan ennen kuin katselmoijakuormadata haettiin. Tämä keskittyminen oli sekä pullonkaula, koska noiden kehittäjien saatavuus rajoitti katselmointiläpivirtausta koko organisaatiolle, että uupumisriski, jonka työtyytyväisyyskysely nosti erikseen esiin (aihe 3.2). Organisaatio otti käyttöön jäsennellyn katselmoinnin kiertoohjelman yhdistettynä kohdennettuihin tiedonjakoistuntoihin, ja kahdessa vuosineljänneksessä katselmointikuorma oli levinnyt paljon laajemmalle ryhmälle, ja aika ensimmäiseen katselmointiin parani suorana sivuvaikutuksena vähentyneestä pullonkaulasta.

**Julkishallinto.** Verohallinnon ohjelmistotiimi, toimituksen nopeuden parantamisen paineen alla, asetti tavoitteeksi puolittaa aika ensimmäiseen katselmointiin. Yhdessä vuosineljänneksessä tavoite saavutettiin, mutta myöhempi laatuauditointi havaitsi jyrkän nousun yhdistämisen jälkeisissä virheenkorjaus-pull requesteissa, keskittyen muutoksiin, jotka oli hyväksytty yhdellä, lyhyellä kommentilla. Tiimin korjaus pariutti nopeustavoitteen nimenomaisen laatusuojakaiteen kanssa, kahden viikon sisällä katselmoinnista tarvittavien yhdistämisen jälkeisten korjausten osuus, ja koulutti tiimin uudelleen siitä, mitä sisällöllinen katselmointi todella vaati, palauttaen todellisen tarkastelun säilyttäen suurimman osan nopeusparannuksesta, joka oli tullut paremmasta katselmoinnin osoittamisesta ja pienemmistä pull requesteista.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Hyvin hallittujen katselmointimittarien tuotto on nopeampi toimitus uhraamatta laatua, mikä on harvinainen yhdistelmä: useimmat toimitusparannukset vaihtavat nopeutta riskiin jossain kohtaa, mutta katselmointivaiheen parannukset, pienemmät pull requestit, parempi kuorman jakautuminen, nopeampi ensimmäinen vastaus, parantavat aidosti molempia samanaikaisesti, kun niitä tavoitellaan tämän aiheen suosittelemalla laatusuojakaiteella. Yllä oleva tietoturvayritysesimerkki on tyypillinen: pullonkaulan korjaaminen paransi nopeutta samalla kun taustalla oleva katselmoinnin laatu pikemminkin parani osaamisen levitessä laajemmalle.

Omistamisen kokonaiskustannus (TCO) on matala: useimmat näistä mittareista tulevat suoraan olemassa olevasta versionhallinta-alustan datasta minimaalisella lisäinstrumentoinnilla, ja prosessimuutokset, joihin ne osoittavat, katselmoinnin kierto ja pienempien pull requestien kannustaminen, maksavat enimmäkseen kuria eivätkä työkaluinvestointia.

## Antimallit ja sudenkuopat

- **Ajan ensimmäiseen katselmointiin optimointi ilman pariutettua laatusuojakaidetta:** kutsuu leimasinhyväksyntää, joka romuttaa katselmoinnin tarkoituksen.
- **Katselmoijakuorman keskittymisen sivuuttaminen:** luo sekä pullonkaulan että uupumisriskin, joka pysyy näkymättömänä kunnes se mitataan.
- **Katselmointikierrosten määrän kohteleminen yksilön tuloskorttina:** useammin järjestelmän tai viestinnän signaali kuin henkilökohtainen.
- **Pysyvästi suurten pull requestien hyväksyminen väistämättöminä:** useimmat suuret muutokset voi pilkkoa pidemmälle kuin tiimit alun perin olettavat.
- **Yhdenmukaisen katselmoinnin syvyyden soveltaminen muutoksen riskistä riippumatta:** haaskaa tarkastelua matalan riskin muutoksiin samalla kun suuririskiset voivat jäädä liian vähälle tarkastelulle.
- **Katselmoinnin nopeuden mittaaminen mutta ei koskaan sen tarkistaminen, laskiko todellinen tarkastelu sen mukana:** yleisin yksittäinen tapa, jolla tätä mittariperhettä pelataan tahattomasti.

## Kypsyysmalli

- **Taso 1, Aloittava:** Katselmointimittareita ei seurata. Katselmointikuorman jakautuminen ja pull requestin koko ovat näkymättömiä.
- **Taso 2, Kehittyvä:** Jotain katselmoinnin nopeusdataa on alustan oletuksista, mutta laatusuojakaidetta ei ole eikä katselmoijakuormaa hallita aktiivisesti.
- **Taso 3, Vakioitu:** Aika ensimmäiseen katselmointiin, pull requestin koko ja katselmoijakuorma seurataan johdonmukaisesti, nimenomainen laatusuojakaide pariutettuna nopeusparannuksia vasten.
- **Taso 4, Hallittu:** Katselmoijakuormaa tasapainotetaan aktiivisesti kierrolla ja tiedon jakamisella. Kierrosmäärän kuvioita tutkitaan prosessitasolla eikä yksilötasolla.
- **Taso 5, Orkestroitu:** Katselmointivaiheen mittarit ohjaavat suoraan prosessi-investointeja, ja organisaatio voi osoittaa samanaikaisen parannuksen sekä katselmoinnin nopeudessa että katselmointiin liittyvissä laatutuloksissa pitkällä aikavälillä.

## Keskusteluideoita

1. Mikä on nykyinen mediaaniaikamme ensimmäiseen katselmointiin, ja minne tuo aika todella menee?
2. Onko katselmointikuormamme keskittynyt pienelle joukolle ihmisiä, ja mikä on riski, jos yksi heistä ei ole saatavilla?
3. Olemmeko koskaan parantaneet katselmoinnin nopeutta todellisen tarkastelun kustannuksella, edes tahattomasti?
4. Mikä on mediaani pull requestin kokomme, ja kuinka paljon pienempiä useimmat muutokset realistisesti voisivat olla?
5. Kohtelemmeko korkeaa katselmointikierrosten määrää järjestelmän signaalina vai yksilön arviona?

## Keskeiset opit

- **Aika ensimmäiseen katselmointiin** on yleensä katselmointivaiheen suurin yksittäinen vipu, enemmän kuin itse katselmointikeskustelun pituus.
- **Pienemmät pull requestit** parantavat sekä katselmoinnin nopeutta että perusteellisuutta samanaikaisesti.
- **Katselmoijakuorman epätasapaino** on yleistä ja yleensä näkymätöntä ilman suoraa mittausta. Se luo sekä pullonkaulan että uupumisriskin.
- Pariuta jokainen katselmoinnin nopeusmittari nimenomaisen **laatusuojakaiteen** kanssa saadaksesi kiinni leimasinpelaamisen riskin, jolle tämä mittariperhe on erityisen altis.
- Käytä **katselmointikierrosten määrää** järjestelmätason kitkan diagnosointiin, ei yksittäisten tekijöiden tai katselmoijien arvioimiseen.

## Lähteet ja lisälukemista

- *Accelerate: The Science of Lean Software and DevOps*, tekijät Nicole Forsgren, Jez Humble ja Gene Kim (koodikatselmoinnin käytännöt ja niiden suhde toimitussuorituskykyyn).
- *Modern Code Review* -tutkimus, tekijät Alberto Bacchelli ja Christian Bird (empiirinen tutkimus koodikatselmoinnin käytännöistä mittakaavassa).
- *Peer Reviews in Software: A Practical Guide*, tekijä Karl E. Wiegers (katselmointiprosessin suunnittelu ja sen kompromissit).
- *The Principles of Product Development Flow*, tekijä Donald G. Reinertsen (eräkoon päättely sovellettuna pull requestin mitoitukseen).
