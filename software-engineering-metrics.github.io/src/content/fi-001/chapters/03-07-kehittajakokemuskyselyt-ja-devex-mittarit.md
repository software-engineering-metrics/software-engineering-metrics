# 3.7 Kehittäjäkokemuskyselyt ja DevEx-mittarit

## Yleiskatsaus ja perustelut

Tämä aihe päättää osan 3 käytännön mekaniikkaan, joka tekee jokaisen edeltävän aiheen itseraportoidusta datasta luotettavaa: miten suunnittelet kehittäjäkokemuskyselyn (DevEx), joka tuottaa aidon signaalin suosiokilpailun sijaan, ja miten yhdistät kyselydatan objektiiviseen instrumentointiin mittarijoukoksi, jonka perusteella organisaatio voi todella toimia. Jokainen tämän osan aihe nojaa jonkinlaiseen itseraportointiin, tyytyväisyys ja hyvinvointi (aihe 3.2) suorimmin, mutta myös suorituskyky, viestintä ja flow hyötyvät hyvin suunnitellusta kyselystä, ja huonosti suunniteltu kysely heikentää kaikkien arvoa kerralla.

**Kehittäjäkokemus (DevEx)** on laajempi, tuoreempi kehys, joka on noussut saman ydinajatuksen ympärille, jonka SPACE muodollisti: insinöörien todellinen, päivittäinen kokemus työn tekemisestä, kitka, työkalut, kognitiivinen kuorma ja palautesilmukat, on itsessään mitattavissa oleva, parannettavissa oleva asia, ei vain pehmeä kulttuurihuoli. DevEx-tutkimus, erityisesti Abi Nodan, Margaret-Anne Storeyn, Nicole Forsgrenin ja Michaela Greilerin ehdottama viitekehys, jäsentää tämän kokemuksen kolmen ulottuvuuden ympärille: palautesilmukat, kognitiivinen kuorma ja flow-tila, jotka vastaavat läheisesti ja laajentavat tässä osassa jo syvästi käsiteltyjä SPACE-ulottuvuuksia.

Suurille tiimeille ero luotettavan signaalin tuottavan kyselyn ja kohinaa tai pahempaa, aktiivisesti harhaanjohtavaa dataa tuottavan kyselyn välillä on kokonaan tässä aiheessa käsiteltävissä suunnittelun yksityiskohdissa: kysymysten sanamuodossa, vastausasteikon valinnassa, otannassa ja rytmissä sekä siinä, miten tulokset viestitään takaisin vastaajille. Suuryritykset ja julkishallinto, jotka ajavat näitä kyselyitä laajassa mittakaavassa tuhansien insinöörien kesken, eivät voi sallia itselleen virhettä, koska virheellinen instrumentti tässä mittakaavassa tuottaa varmoja mutta vääriä johtopäätöksiä, jotka muokkaavat todellisia resursointipäätöksiä.

## Keskeiset periaatteet

- **Kyselyn suunnittelun laatu määrää datan luotettavuuden paljon enemmän kuin kyselyn pituus tai hienostuneisuus.** Lyhyt, hyvin suunniteltu kysely voittaa pitkän, huonosti suunnitellun joka kerta.
- **Vastausprosentti on itsessään signaali**, ei vain datankeruun mittari. Laskeva prosentti kertoo usein prosessiin kohdistuvan luottamuksen rapautumisesta.
- **Yhdistä kyselydata objektiiviseen instrumentointiin** aina kun mahdollista, aiheen 1.5 instrumentointiperiaatteen mukaisesti. Käytä kyselydataa nimenomaan siihen, mitä objektiivinen data ei voi tavoittaa.
- **Sulje silmukka vastaajien kanssa.** Kysely, joka ei koskaan näkyvästi johda mihinkään muutokseen, opettaa ihmiset lakkaamaan ottamasta sitä vakavasti.
- **DevEx ja SPACE ovat saman taustalla olevan huolen toisiaan täydentäviä kehyksiä**, eivät kilpailevia viitekehyksiä, joista pitäisi valita.

## Suositukset

### Suunnittele kysymykset selkeiksi ja vältä johdattelevaa tai kaksiosaista sanamuotoa

Kirjoita kyselykysymykset, jotka kysyvät täsmälleen yhtä asiaa, selkeällä kielellä, ilman että kysymykseen upotetaan oletusta. "Kuinka tyytyväinen olet työkaluihimme ja dokumentaatioomme?" on kaksiosainen kysymys, joka sulauttaa kaksi mahdollisesti hyvin erilaista vastausta yhdeksi sekavaksi vastaukseksi. Jaa se kahdeksi erilliseksi kysymykseksi. Vältä johdattelevia muotoiluja, kuten "kuinka paljon tuore investointimme työkaluihin on parantanut kokemustasi?", joka olettaa parannuksen tapahtuneen sen sijaan, että kysyisi neutraalisti, tapahtuiko se.

### Käytä johdonmukaisia vastausasteikkoja ja pilotoi uudet kysymykset ennen laajaa käyttöönottoa

Vakioi kyselyinstrumenttisi johdonmukaiseen vastausasteikkoon (viisi- tai seitsenportainen [Likertin](https://en.wikipedia.org/wiki/Likert_scale) asteikko on yleinen ja hyvin tutkittu), jotta vastaukset ovat vertailukelpoisia kysymysten välillä ja ajan yli. Pilotoi jokainen uusi kysymys pienellä ryhmällä ennen koko organisaation käyttöönottoa, jotta epäselvä sanamuoto tai odottamaton tulkinta havaitaan ennen kuin se turmelee koko aineiston.

### Kohtele vastausprosenttia diagnostisena signaalina sinänsä

Seuraa kyselyn vastausprosenttia peräkkäisten kierrosten yli ja kohtele laskevaa prosenttia varoitusmerkkinä, joka kannattaa tutkia suoraan, samankaltaisesti kuin aiheessa 3.2 käsitelty luottamussignaali. Laskeva vastausprosentti viittaa usein kyselyväsymykseen, rapautuvaan luottamukseen siitä, että tulokset johtavat toimintaan, tai kasvavaan epäilyyn, ettei anonymiteettiä aidosti suojata. Jokainen näistä ansaitsee suoran tutkimuksen sen sijaan, että se ohitettaisiin pelkkänä datankeruun harmina.

### Yhdistä kyselydata objektiiviseen DevEx-instrumentointiin

Yhdistä subjektiiviset kyselyvastaukset objektiivisiin signaaleihin, kun niitä on: käännösaika, testisarjan ajoaika, paikallisen kehitysympäristön pystytysaika sekä aiheen 3.6 flow-aika ja keskeytysdata. Kyselyvastaus "käännöksemme on liian hidas" muuttuu paljon toimintaan johtavammaksi, kun se yhdistetään todelliseen mitattuun käännösaikatrendiin, ja yhdistelmä havaitsee tapaukset, joissa käsitys ja objektiivinen todellisuus eroavat kumpaan suuntaan tahansa, mikä on itsessään tutkimisen arvoista.

### Sulje silmukka: julkaise tulokset ja näkyvä jatkotoimi

Julkaise jokaisen kyselykierroksen jälkeen rehellinen yhteenveto tuloksista, mukaan lukien tulokset, joita johto mieluummin ei korostaisi, ja sitoudu julkisesti vähintään yhteen konkreettiseen toimenpiteeseen vastauksena. Kysely, joka ei tuota näkyvää jatkotoimea, opettaa vastaajille, ettei heidän rehellisellä panoksellaan ole väliä, mikä heikentää sekä vastausprosenttia että vastausten rehellisyyttä jokaisella seuraavalla kierroksella. Tämä silmukan sulkemisen kuri on usein yksittäisistä tekijöistä tärkein sille, pysyykö DevEx-kyselyohjelma hyödyllisenä usean vuoden ajan vai rappeutuuko se hitaasti ruksien kuittaamisen harjoitukseksi.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Pitkä, kattava kysely | Rikas, yksityiskohtainen data monista aiheista | Matalampi vastausprosentti, enemmän väsymystä, enemmän tilaa huonosti suunnitelluille kysymyksille |
| Lyhyt, kohdennettu kysely | Korkeampi vastausprosentti, helpompi suunnitella hyvin | Vähemmän kattavuutta, voi missata esiin nousevan ongelman valitun painopisteen ulkopuolelta |
| Pelkkä kyselydata | Tavoittaa subjektiivisen kokemuksen suoraan | Altis vinoumalle, eikä sitä voi verrata objektiiviseen todellisuuteen |
| Kysely yhdistettynä objektiiviseen instrumentointiin | Havaitsee käsityksen ja todellisuuden eron, toimintaan johtavampi | Vaatii enemmän datan integrointityötä |

Keskeinen jännite on **kattavuus versus vastausten laatu**. Pidempi, kattavampi kysely tavoittaa enemmän alaa mutta heikentää vastausprosenttia ja lisää riskiä, että huonosti suunniteltuja kysymyksiä pääsee läpi. Lyhyt, kohdennettu kysely saa laadukkaampia vastauksia mutta riskinä on, että se missaa jotain tärkeää laajuutensa ulkopuolelta. Ratkaise jännite pitämällä ydinkysely, joka toistuu, lyhyenä ja hyvin pilotoituna ja käyttämällä satunnaisia, selvästi nimettyjä syventäviä kyselyitä tietyille aiheille, jotka tarvitsevat yksityiskohtaisempaa tarkastelua, sen sijaan että yrittäisit kattaa kaiken jokaisella kierroksella.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Olemmeko koskaan pilotoineet uutta kyselykysymystä pienellä ryhmällä ennen laajaa käyttöönottoa, vai menevätkö uudet kysymykset suoraan koko kyselyyn?** Pilottivaiheen ohittaminen on yleinen tapa, jolla epäselvät tai kaksiosaiset kysymykset päätyvät turmelemaan koko aineiston ennen kuin kukaan huomaa sanamuodon olleen epäselvä.

2. **Mitä vastausprosenttimme on tehnyt viimeisten kyselykierrosten aikana, ja olemmeko tutkineet laskua, jos sellainen tapahtui?** Kohtele tätä trendiä aitona signaalina, joka ansaitsee keskustelun, ei vain datankeruun harmina, joka mainitaan ohimennen.

3. **Yhdistämmekö kyselydataa mihinkään objektiiviseen instrumentointiin, vai seisooko subjektiivinen käsitys raportoinnissamme kokonaan yksin?** Tunnista vähintään yksi paikka, jossa kyselykysymyksen yhdistäminen objektiiviseen dataan, käännösaikaan tai julkaisutiheyteen, voisi tehdä tuloksesta toimintaan johtavamman.

4. **Minkä konkreettisen toimenpiteen olemme tehneet suorana, näkyvänä seurauksena viime kyselykierroksestamme, ja viestimmekö tuon toimenpiteen takaisin vastaajille?** Jos rehellinen vastaus on "ei mitään näkyvää", tuo aukko todennäköisesti jo rapauttaa luottamusta instrumenttiin, olipa se jo näkynyt vastausprosentissa tai ei.

5. **Ovatko jotkin nykyisistä kyselykysymyksistämme johdattelevia tai kaksiosaisia, ja huomaisimmeko, jos olisivat?** Katso todellisia nykyisiä kysymyksiäsi tätä nimenomaista testiä vasten ryhmäharjoituksena.

6. **Miten DevEx- tai SPACE-kyselydatamme vertautuu objektiivisiin signaaleihin, kun ne näyttävät olevan eri mieltä, ja mitä tuo erimielisyys kertoo meille?** Tapaus, jossa käsitys ja objektiivinen data eroavat, on usein diagnostisesti arvokkaampi kuin tapaus, jossa ne ovat samaa mieltä, koska itse aukko on informatiivinen.

## Sektorinäkökulma

**Startup-yritys.** Yksinkertainen, hyvin lyhyt pulssikysely, joskus vain yksi tai kaksi kysymystä, ajettuna epävirallisesti ja usein, riittää tässä mittakaavassa yleensä, ja muodollisen instrumentin suunnittelun tarkkuus merkitsee vähemmän, kun perustaja voi yhä käydä suoran keskustelun lähes kaikkien kanssa säännöllisesti.

**Pieni yritys.** Ilmainen tai edullinen kyselytyökalu lyhyellä, mukautetulla kysymysjoukolla, ajettuna neljännesvuosittain, tavoittaa suurimman osan arvosta ilman omaa kyselysuunnittelun asiantuntemusta. Priorisoi silmukan sulkemisen kuri hienostuneisuuden edelle. Jopa pieni tiimi hyötyy siitä, että se toimii näkyvästi lyhyen kyselyn paljastaman perusteella.

**Suuryritys.** Kyselysuunnittelun laatu on valtavan tärkeää suuressa mittakaavassa, koska virheellinen kysymys tai rikkoutunut anonymiteettitakuu turmelee dataa tuhansien vastaajien yli kerralla, ja tuloksena olevat varmat mutta väärät johtopäätökset voivat ohjata merkittäviä resursointipäätöksiä väärin. Panosta todelliseen kyselysuunnittelun asiantuntemukseen tai tee yhteistyötä vakiintuneen DevEx-mittausalustan kanssa sen sijaan, että rakentaisit ad hoc -instrumentin sisäisesti.

**Julkishallinto.** Vastausprosentti ja luottamus ovat erityisen hauraita organisaatioissa, joissa henkilöstö voi jo olla varovainen sen suhteen, miten dataa käytetään sisäisesti. Panosta liikaa läpinäkyviin anonymiteettitakuisiin ja näkyvään jatkotoimeen nimenomaan rakentaaksesi luottamuksen, joka tekee rehellisestä vastausprosentista saavutettavan ympäristössä, jossa epäilys datan käyttöä kohtaan voi jo olla korkeampi kuin tyypillisessä yksityisen sektorin ympäristössä.

## Esimerkit

**Suuryritys.** Ohjelmistoyrityksen ensimmäinen DevEx-kysely sisälsi kysymyksen, jossa insinöörejä pyydettiin arvioimaan "tyytyväisyys työkaluihin ja prosessiin", kaksiosaisen kysymyksen, joka sulautti yhteen kaksi hyvin erilaista huolta. Kun yhdistetty pistemäärä palasi keskinkertaisena, johto ei osannut sanoa, oliko ongelma työkaluissa, prosessissa vai molemmissa, ja ensimmäiset korjaustoimet kohdistuivat väärälle alueelle kahden neljänneksen ajan. Kysymyksen jakaminen seuraavassa versiossa paljasti, että työkalupistemäärä oli todellisuudessa vahva ja prosessipistemäärä huono, mikä ohjasi investoinnin hankalan julkaisuhyväksyntäprosessin yksinkertaistamiseen. Se tuotti mitattavan tyytyväisyysparannuksen yhdessä neljänneksessä, toisin kuin aiempi työkaluihin keskittynyt yritys, joka oli osoittanut vain vähän vaikutusta.

**Julkishallinto.** Kansallisen digitaaliviraston ensimmäisen DevEx-kyselyn vastausprosentti oli alle 30 %, ja sisäinen katsaus havaitsi, että henkilöstö uskoi laajalti, oikein kuten kävi ilmi, että yksittäiset esihenkilöt näkivät, kuka oli vastannut ja kuka ei, vaikka koostetulosten oli tarkoitus olla anonyymejä. Virasto siirtyi aidosti riippumattomaan, kolmannen osapuolen kyselyalustaan, jonka anonymiteetti oli todennettu, viesti muutoksesta eksplisiittisesti ja toistuvasti ja julkaisi selkeän yhteenvedon edellisen kierroksen tuloksista yhdessä kolmen konkreettisen vastatoimen kanssa. Vastausprosentti nousi yli 70 %:iin kahdessa kierroksessa, ja viraston johto piti aidon anonymiteetin ja näkyvän jatkotoimen yhdistelmää nimenomaan syynä siihen, että luottamus instrumenttiin palautui.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Hyvin suunnitellun DevEx-kyselyohjelman tuotto on luotettavaa, toimintaan johtavaa dataa ulottuvuudesta, kehittäjäkokemuksesta, joka muuten pysyy näkymättömänä, kunnes se tulee esiin henkilöstövaihtuvuutena tai toimituksen hidastumisena. Yllä oleva ohjelmistoyritysesimerkki osoittaa suunnittelun epäonnistumisen hinnan: kaksi neljännestä väärin kohdennettua korjaustyötä, koska yksi huonosti sanottu kysymys sulautti yhteen kaksi erillistä huolta.

Omistamisen kokonaiskustannukseen kuuluu kyselytyökalut, tämän aiheen suosittelema suunnittelun ja pilotoinnin kuri sekä jatkuva sitoutuminen sulkea silmukka näkyvällä jatkotoimella joka kierroksella. Tämä sitoutuminen, enemmän kuin mikään työkalukustannus, ratkaisee, pysyykö kyselyohjelma hyödyllisenä vuosia vai rappeutuuko se ruksien kuittaamisen harjoitukseksi, joka tuottaa ajan myötä tasaisesti vähemmän luotettavaa dataa.

## Antimallit ja sudenkuopat

- **Kaksiosaiset tai johdattelevat kysymykset:** sulauttavat erilliset huolet yhteen tai vinouttavat vastauksia, ja jäävät usein pilotoimatta huomaamatta.
- **Pilottivaiheen ohittaminen uusille kysymyksille:** antaa epäselvän sanamuodon turmella täysimittaisen aineiston.
- **Laskevan vastausprosentin sivuuttaminen:** missaa tärkeän luottamussignaalin sinänsä.
- **Silmukan sulkematta jättäminen näkyvällä jatkotoimella:** opettaa vastaajille, ettei rehellisellä panoksella ole väliä, ja heikentää tulevan datan laatua.
- **Kyselydatan käsittely riittävänä yksinään, ilman objektiivista tukea:** missaa tapaukset, joissa käsitys ja todellisuus eroavat kumpaan suuntaan tahansa.
- **Heikot tai todentamattomat anonymiteettitakuut:** nopein tapa romahduttaa sekä vastausprosentti että vastausten rehellisyys.

## Kypsyysmalli

- **Taso 1, Aloittava:** Kyselykysymykset ovat ad hoc -tyyppisiä ja pilotoimattomia, vastausprosenttia ei seurata signaalina ja tulokset johtavat harvoin näkyvään toimintaan.
- **Taso 2, Kehittyvä:** Jonkin verran kyselysuunnittelun kuria on, mutta pilotointi on epäjohdonmukaista eikä silmukkaa suljeta luotettavasti vastaajien kanssa.
- **Taso 3, Vakioitu:** Kysymykset pilotoidaan ennen käyttöönottoa, vastausprosenttia seurataan ja tutkitaan sen laskiessa, ja tulokset julkaistaan johdonmukaisesti vähintään yhden konkreettisen jatkotoimen kanssa.
- **Taso 4, Hallittu:** Kyselydata yhdistetään systemaattisesti objektiiviseen instrumentointiin, ja näiden välistä eroa tutkitaan aktiivisesti diagnostisena signaalina.
- **Taso 5, Orkestroitu:** Organisaatiolla on kypsä, luotettu, usean vuoden kyselyohjelma johdonmukaisen korkeilla vastausprosenteilla, osoitettavissa oleva näkyvä toiminta jokaiselta kierrokselta sekä kokemusta huonosti suunniteltujen kysymysten havaitsemisesta ja korjaamisesta ennen kuin ne turmelevat dataa.

## Keskusteluideoita

1. Onko jokin instrumenttimme nykyinen kyselykysymys koskaan hämmentänyt tai johtanut harhaan vastaajaa?
2. Mikä oli viimeinen konkreettinen toimenpide, jonka teimme suorana seurauksena kyselydatasta?
3. Mistä tietäisimme, jos anonymiteettitakuumme olisi rikkoutunut, vaikka vahingossa?
4. Missä kyselydatamme on samaa mieltä objektiivisen instrumentoinnin kanssa ja missä eri mieltä, ja mitä se kertoo meille?
5. Mitä vaadittaisiin nykyisen vastausprosenttimme kaksinkertaistamiseen?

## Keskeiset opit

- Kyselyn **suunnittelun laatu**, selkeät, yhden käsitteen, vinoutumattomat kysymykset, merkitsee enemmän kuin pituus tai hienostuneisuus.
- **Vastausprosentti on itsessään signaali.** Tutki laskua sen sijaan, että kohtelisit sitä pelkkänä harmina.
- **Yhdistä kyselydata objektiiviseen instrumentointiin** havaitaksesi käsityksen ja todellisuuden eron.
- **Sulje silmukka**: julkaise tulokset ja näkyvä jatkotoimi joka kierroksella, tai luottamus instrumenttiin rapautuu.
- **DevEx ja SPACE ovat toisiaan täydentäviä**, eivät kilpailevia, kehyksiä saman kehittäjäkokemusta koskevan huolen ympärillä.

## Lähteet ja lisälukemista

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren, and Michaela Greiler, "DevEx: What Actually Drives Productivity," *ACM Queue* (2023): DevEx-viitekehys palautesilmukoista, kognitiivisesta kuormasta ja flow-tilasta.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and Win in the 21st Century*, by Jeff Lawson (organisaation investoinnit kehittäjäkokemukseen).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, by Louis M. Rea and Richard A. Parker (yleinen kyselysuunnittelun metodologia, sovellettavissa DevEx-instrumentteihin).
