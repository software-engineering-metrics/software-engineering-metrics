# 3.4 Aktiivisuusmittarit ja niiden rajat

## Yleiskatsaus ja perustelut

**Aktiivisuus**, SPACEn A (aihe 3.1), laskee järjestelmätelemetriasta havaittavan ohjelmistotyön määrän: commitit, avatut pull requestit, muutetut koodirivit ja jätetyt koodikatselmoinnin kommentit. Se on helpoin SPACE-ulottuvuus mitata, koska jokainen näistä tapahtumista kirjautuu jo automaattisesti työkaluihin, joita tiimit käyttävät päivittäin, ja juuri tämä mittaamisen helppous tekee ulottuvuudesta vaarallisimman yliarvostaa. Aktiivisuus on todellinen, oikeutettu signaali, kun sitä käyttää huolella. Yksinäisenä tuottavuuden sijaismittarina käytettynä se on [ohjelmistotuotannon](https://en.wikipedia.org/wiki/Software_engineering) mittaamisen koko historian pelatuin ja harhaanjohtavin mittariperhe.

Perusongelma on, että aktiivisuus mittaa liikettä, ei arvoa. Commitien määrä ei erota commitia, joka ratkaisi vaikean ongelman tyylikkäästi, commitista, joka jakoi yhden merkityksellisen muutoksen viiteen näyttääkseen tuottavammalta (aiheen 1.2 korvaamispelaaminen sovellettuna suoraan tähän mittariperheeseen). Muutetut koodirivit palkitsevat sanaakkuutta paljon arvokkaamman taidon, tarpeettoman koodin poistamisen, kustannuksella. Insinööri, joka käyttää kokonaisen päivän syvään, keskeytyksettömään ajatteluun ennen kuin kirjoittaa kymmenen tyylikästä, hyvin testattua riviä, näyttää näillä mittareilla vähemmän "aktiiviselta" kuin se, joka commitoi pinnallisia, katselmoimattomia muutoksia parinkymmenen minuutin välein, vaikka ensimmäinen tuottaa hyvin usein paljon enemmän todellista arvoa.

Suurissa tiimeissä houkutus käyttää aktiivisuusmittareita yksilöiden arviointiin on jatkuva ja hyvin dokumentoitu, koska aktiivisuus on helppo osoittaa tietylle henkilölle ja helppo laskea automaattisesti, toisin kuin muiden SPACE-ulottuvuuksien vaikeammat, rehellisemmät signaalit. Tämä aihe on olemassa nimenomaan nimeämään tuon houkutuksen ja antamaan tiimeille kieltä ja näyttöä sen vastustamiseen, koska kun organisaatio alkaa asettaa insinöörejä yksilöllisesti paremmuusjärjestykseen commitien tai koodirivien mukaan, vahinko yhteistyölle, koodin laadulle ja moraalille on hyvin dokumentoitu ja vaikea perua.

## Keskeiset periaatteet

- **Aktiivisuus mittaa liikettä, ei arvoa.** Se on oikeutettu kontekstuaalinen signaali, ei koskaan yksinäinen tuottavuuden sijaismittari.
- **Tämä on historiallisesti ohjelmistotuotannon mittaamisen väärinkäytetyin mittariperhe.** Kohtele tuota historiaa varoituksena, ei sattumana.
- **Yksilöiden aktiivisuusjärjestys on lähes aina haitallinen.** Se vahingoittaa yhteistyötä, palkitsee näkyvää touhua ja kutsuu pelaamista lähes heti.
- **Aktiivisuusdata on hyödyllisintä koosteena, kontekstina muille ulottuvuuksille,** ei itsenäisenä signaalina yhdestä ihmisestä tai tiimistä.
- **Syvä, arvokas työ näyttää usein hiljaiselta aktiivisuusmittaristossa.** Mittariperhe on rakenteellisesti vinoutunut juuri sitä ajattelua vastaan, joka tuottaa parhaat ohjelmistotulokset.

## Suositukset

### Älä koskaan aseta yksilöitä paremmuusjärjestykseen tai arvioi heitä raakojen aktiivisuuslukujen perusteella

Tämä on tämän aiheen vaikein ja tärkein sääntö. Commitien määrä, koodirivit ja pull requestien määrä eivät saa koskaan esiintyä yksilön suoritusarvioinnissa, vertailevassa paremmuusjärjestyksessä tai missään yhteydessä, jossa insinöörin palkka, asema tai maine riippuu luvusta. Tämä seuraa suoraan aiheen 1.2 kannustealtistuksen periaatteesta: heti kun aktiivisuudesta tulee kannustettu yksilömittari, pelaaminen seuraa lähes heti, ja siitä seuraava käytös, commitien paisuttaminen, muutosten triviaali pilkkominen ja syvän, vähäpätöiseltä näyttävän työn välttäminen, joka tuottaa vähän näkyviä tapahtumia, vahingoittaa aktiivisesti organisaatiota.

### Käytä aktiivisuusdataa koosteena, kontekstina, älä tuomiona

Aktiivisuusdata muuttuu aidosti hyödylliseksi, kun se koostetaan tiimitasolla ja luetaan muiden SPACE-ulottuvuuksien rinnalla: tiimitason commit-aktiivisuuden jyrkkä lasku, joka osuu yhteen tyytyväisyyden nousun kanssa, voi tarkoittaa, että tiimillä oli vihdoin hengitystilaa ajatella syvästi ja maksaa teknistä velkaa pois, mikä on positiivinen kuvio, ei negatiivinen. Erillään luettuna sama lasku näyttää hälyttävältä. Muiden ulottuvuuksien konteksti tekee aktiivisuusdatasta tulkittavaa harhaanjohtavan sijaan.

### Suosi laatuun liittyviä aktiivisuussignaaleja raakamäärien sijaan

Jos aktiivisuusdata on ylipäätään hyödyllistä, suosi laadulla oikaistuja signaaleja raakamäärien sijaan: pull requestin koko suhteessa katselmoinnin syvyyteen (aihe 2.9) tai uuden koodin suhde poistettuun koodiin, mikä voi paljastaa, kerääkö tiimi monimutkaisuutta vai yksinkertaistaako se aktiivisesti. Nämä oikaistut signaalit ovat yhä aktiivisuusulottuvuuden dataa, mutta vastustavat raakamäärien kutsuvaa karkeinta pelaamista.

### Tarkkaile erityisesti korvaamispelaamisen kuviota aktiivisuusdatassa

Yleisin tapa, jolla aktiivisuusmittareita pelataan, on täsmälleen aiheen 1.2 korvaamiskuvio: aidosti merkityksellisen työn pilkkominen moniin pieniin, triviaaleihin tapahtumiin luvun paisuttamiseksi. Jos commitien tai pull requestien tiheys nousee samalla kun muutosten taustalla oleva monimutkaisuus tai koko laskee jyrkästi, tutki asiaa ennen kuin hyväksyt sen todelliseksi tuottavuuden paranemiseksi, käyttäen samaa diagnostista kuria, jota aihe 2.10 suosittelee julkaisutiheydelle.

### Nimeä aktiivisuusteatteri eksplisiittisesti ja ehkäise sitä

**Aktiivisuusteatteri** on työtä, jota tehdään, tietoisesti tai ei, ensisijaisesti siksi, että se on näkyvää ja laskettavaa, ei siksi, että se on arvokasta: tiheät pienet commitit, näyttävä myöhäisillan aktiivisuus tai näkyvä kiireisyys yhteisillä kanavilla. Tämän kuvion nimeäminen eksplisiittisesti tiimille ja avoimuus siitä, ettei johto käytä raakaa aktiivisuutta panoksen arviointiin, poistaa suuren osan kannustimesta sen ilmenemiseen alun perinkään.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Yksilöiden aktiivisuusjärjestys | Yksinkertainen, helppo laskea, tuntuu suoraan toimintaan johtavalta | Pelataan lähes heti, vahingoittaa yhteistyötä ja moraalia, mittaa väärää asiaa |
| Ei aktiivisuuden mittausta lainkaan | Välttää väärinkäytön riskin kokonaan | Menettää aidosti hyödyllisen kontekstisignaalin tiimitason kuvioiden havaitsemiseen |
| Tiimitason koostettu aktiivisuus, luettuna kontekstissa | Antaa hyödyllistä kontekstia ilman yksilöriskiä | Vaatii kuria tulkita muiden ulottuvuuksien rinnalla erillään lukemisen sijaan |
| Laadulla oikaistut aktiivisuussignaalit | Vastustaa karkeinta raakamäärien pelaamista | Monimutkaisempi laskea ja selittää kuin yksinkertainen määrä |

Keskeinen jännite on **hyödyllisyys versus väärinkäytön riski**. Aktiivisuusdata, luettuna huolellisesti koosteena ja kontekstissa, on aidosti hyödyllistä sellaisten kuvioiden havaitsemiseen kuin kestämätön tahti tai tiimi, joka hiljaa löytää tilaa teknisen velan käsittelyyn. Sama data yksilön tuloskorttina on lähes poikkeuksetta haitallista. Ratkaise jännite ei välttämällä aktiivisuusdataa kokonaan, vaan rakentamalla organisaation kova sääntö yksilökäyttöä vastaan ja sallimalla ja jopa kannustamalla harkittua, kontekstualisoitua tiimitason käyttöä.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Onko ketään organisaatiossamme koskaan arvioitu, muodollisesti tai epävirallisesti, raa'an aktiivisuusluvun, kuten commitien tai koodirivien, perusteella?** Kysy tämä suoraan ja varaudu epämukavaan mutta tarpeelliseen vastaukseen. Tämä väärinkäyttö tapahtuu usein hiljaa, esihenkilön ohimenevän kommentin kautta, ilman että siitä tulee koskaan virallista linjausta.

2. **Miltä aktiivisuusteatteri näyttäisi nimenomaan meidän tiimissämme, ja olemmeko nähneet siitä merkkejä?** Sen tietyn, uskottavan muodon nimeäminen, jonka tämä kuvio voisi omassa tiimissäsi ottaa, tekee sen tunnistamisesta paljon helpompaa, jos se alkaa tapahtua.

3. **Kun tiimitason aktiivisuusdatamme liikkuu, tulkitsemmeko sitä muiden SPACE-ulottuvuuksien rinnalla vai erillään?** Erillään luettuna aktiivisuuden lasku näyttää huolestuttavalta. Sama lasku luettuna tyytyväisyyden tai suorituskyvyn paranemisen rinnalla voi näyttää aidosti positiiviselta kuviolta. Tarkista todellinen katselmointikäytäntösi tätä eroa vasten.

4. **Olemmeko koskaan nähneet commitien tai pull requestien tiheyden nousun yhdessä pienenevän keskimääräisen muutoskoon kanssa, mikä viittaa triviaaliin pilkkomiseen eikä aitoon tuottavuuden kasvuun?** Hae todellista dataa ja tarkista tämä nimenomainen korvaamispelaamisen kuvio.

5. **Miten puhumme tällä hetkellä siitä, "kuka tekee eniten", ja nojaako tuo keskustelu implisiittisesti aktiivisuusdataan, vaikka muodollista mittaria ei olisikaan?** Epävirallinen, mittaamaton vinouma näkyvään touhuun voi muokata käsityksiä ja palkitsemista ilman eksplisiittistä aktiivisuuteen perustuvaa linjaustakin. Tuo tämä rehellisesti esiin.

6. **Miltä aidosti arvokas mutta hiljainen työ, syvä ajattelu, huolellinen suunnittelu ja mentorointi, näyttää tiimissämme, ja miten varmistamme sen tunnustamisen, vaikka se tuottaa vähän näkyvää aktiivisuusdataa?** Tämä kysymys on myönteinen täydennys edellisille: sen nimeäminen, miltä hyvä, hiljainen työ näyttää, auttaa suojaamaan sitä jäämästä huomaamatta äänekkäämmän, paremmin laskettavan työn varjoon.

## Sektorinäkökulma

**Startup-yritys.** Pienessä, tiiviisti yhteistyötä tekevässä tiimissä aktiivisuusdata on yleensä näkyvissä ilman mittaristoakin, ja tämän aiheen varoittama yksilöiden paremmuusjärjestyksen riski on pienempi pelkästään siksi, että kaikki tietävät jo, mitä muut tekevät. Riski on sen sijaan perustaja, joka tiedostamattaan suosii näkyvästi "kiireistä" käytöstä tehdessään varhaisia palkkaus- tai omistuspäätöksiä.

**Pieni yritys.** Olemassa olevien työkalujen aktiivisuusdataan voi vilkaista yleiskäsityksen saamiseksi tiimin läpivirtauksesta, mutta vastusta sen käyttöä yksittäisten tekijöiden suoraan vertailuun. Pienen tiimin todellinen arvo keskittyy usein muutamaan ihmiseen, jotka tekevät hiljaista, vipuvaikutukseltaan suurta työtä, jonka commit-määrään perustuva näkymä aliarvostaisi järjestelmällisesti.

**Suuryritys.** Täällä yksilöiden paremmuusjärjestyksen houkutus on voimakkain ja vahingollisin, koska aktiivisuusdata on helpoin signaali poimia tuhansia insinöörejä kattavaan suoritusarviointiprosessiin, ja paine löytää *jokin* kvantifioitava syöte on todellinen. Rakenna eksplisiittinen, viestitty, valvottu linjaus yksilöiden aktiivisuusjärjestystä vastaan ja auditoi suoritusarviointikäytäntöjä säännöllisesti varmistaaksesi, että linjausta noudatetaan käytännössä, ei vain ilmoiteta.

**Julkishallinto.** Aktiivisuusmittareihin voi houkutella viitata julkisessa raportissa tuottavuuden todisteena ("kymmenentuhatta commitia tänä vuonna"), mutta tällainen otsikko on lähes merkityksetön ja voi kutsua juuri väärää tarkastelua, kun asiantunteva tarkastaja huomauttaa, ettei raaka aktiivisuus kerro mitään tuloksista. Raportoi sen sijaan tulos- ja suorituskykydataa (aihe 3.3) ja vältä aktiivisuuslukuja kaikessa ulkoisessa viestinnässä.

## Esimerkit

**Suuryritys.** Ohjelmistoyrityksen kehitysjohto oli ilman muodollista linjausta alkanut epävirallisesti viitata yksilöiden commit-tiheysdataan ylennyskeskusteluissa. Sisäinen katsaus, jonka sai liikkeelle aiheeseen liittymätön henkilöstövaihtuvuuden analyysiprojekti, havaitsi, että yrityksen monimutkaisimpien, arvokkaimpien järjestelmien parissa työskentelevillä insinööreillä, jotka tarvitsivat pitkiä jaksoja huolellista suunnittelutyötä ennen kuin koodia kirjoitettiin, oli järjestelmällisesti matalammat commit-määrät kuin yksinkertaisempien, inkrementaalisemmin kehitettyjen järjestelmien insinööreillä, ja heitä kohdeltiin siksi hienovaraisesti epäedullisesti ylennyskeskusteluissa. Johto antoi eksplisiittisen, viestityn linjauksen, joka kielsi aktiivisuuslukuihin viittaamisen suoritus- ja ylennyskeskusteluissa, ja siirsi ylennysnäytön aiheen 3.3 usean signaalin suorituskykylähestymistapaan.

**Julkishallinto.** Digitaalisten palvelujen virasto, jonka piti osoittaa tuottavuutta lainsäädännölliselle valvontavaliokunnalle, ehdotti aluksi raportoivansa kehitysohjelmansa yhteenlasketut commitit ja kirjoitetut koodirivit todisteena toimitetusta arvosta. Sisäinen tekninen neuvonantaja vastusti ja huomautti oikein, että tämä kehystys kutsui juuri väärää tarkastelua, koska teknisesti perehtynyt valiokunnan jäsen voisi helposti osoittaa, ettei raaka koodimäärä kerro mitään siitä, toimiko koodi tai oliko sillä merkitystä. Viraston muokattu raportti käytti sen sijaan tulosmittareita (aihe 5.3): kansalaisten raportoimien virheiden väheneminen ja onnistuneiden itsepalvelusuoritusten kasvu, jotka kestivät valiokunnan kuulemisessa paljon paremmin kuin aktiivisuusluvut olisivat kestäneet.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Aktiivisuusmittarien oikean käytön, kontekstuaalisen yksilöiden tuloskorttien sijaan, tuotto on vältetty vahinko: organisaatiot, jotka asettavat insinöörejä yksilöllisesti paremmuusjärjestykseen aktiivisuuden mukaan, näkevät luotettavasti pelaamista, heikentynyttä yhteistyötä (insinöörit suojelevat omaa näkyvää tuotostaan sen sijaan, että auttaisivat tiimikaveria) ja järjestelmällistä vinoumaa syvää, vipuvaikutukseltaan suurta työtä vastaan, joka tuottaa usein eniten arvoa mutta vähiten näkyvää aktiivisuutta. Tuon vahingon kumoaminen, kun se on juurtunut suoritusarviointikulttuuriin, on aidosti vaikeaa ja hidasta.

Tämän ansan välttämisen omistamisen kokonaiskustannus on enimmäkseen organisaation kuria: eksplisiittinen, johdonmukaisesti valvottu linjaus yksilöiden aktiivisuusjärjestystä vastaan ja sitoutuminen panostaa vaikeampaan, rehellisempään suorituskyvyn mittaukseen, joka on kuvattu aiheessa 3.3. Tuo kuri maksaa vähemmän kuin väärin kohdennetut ylennyspäätökset, vahingoittunut yhteistyö ja pelaaminen, joita yksilöiden aktiivisuusmittarit tuottavat luotettavasti ajan myötä.

## Antimallit ja sudenkuopat

- **Yksilöiden paremmuusjärjestys commitien tai koodirivien mukaan:** koko tämän kirjan vahingollisin ja historiallisesti yleisin väärinkäyttö.
- **Aktiivisuusteatteri:** työ, jota tehdään ensisijaisesti näkyvyyden eikä arvon vuoksi, täysin ennustettava reaktio aktiivisuuteen perustuvaan arviointiin.
- **Tiimitason aktiivisuuden laskun tulkinta erillään tarkistamatta muita SPACE-ulottuvuuksia:** voi sekoittaa aidosti positiivisen kuvion huolestuttavaan.
- **Raakojen aktiivisuuslukujen esittäminen ulkoisessa tai johdolle suunnatussa viestinnässä:** kutsuu juuri väärää tarkastelua ja kertoo vähän todellisesta arvosta.
- **Syvän, huolellisen työn järjestelmällinen aliarvostaminen, kun se tuottaa vähän näkyviä tapahtumia:** rakenteellinen vinouma, joka on rakennettu koko tähän mittariperheeseen.
- **Epävirallinen, linjaamaton aktiivisuusvinouma hiipii ylennys- tai arviointikeskusteluihin:** vahingollista ilman virallista mittaria sen takanakin.

## Kypsyysmalli

- **Taso 1, Aloittava:** Aktiivisuusmittareita käytetään, muodollisesti tai epävirallisesti, yksilöiden arviointiin tai paremmuusjärjestykseen ilman tietoisuutta riskistä.
- **Taso 2, Kehittyvä:** Riskistä on jonkin verran tietoisuutta, mutta mikään eksplisiittinen linjaus ei estä aktiivisuusdataa vaikuttamasta epävirallisesti arviointeihin tai ylennyskeskusteluihin.
- **Taso 3, Vakioitu:** Eksplisiittinen, viestitty koko organisaation linjaus kieltää yksilöiden aktiivisuusjärjestyksen, ja aktiivisuusdataa käytetään vain koosteena, tiimitason kontekstissa.
- **Taso 4, Hallittu:** Suoritusarviointi- ja ylennyskäytäntöjä auditoidaan säännöllisesti sen varmistamiseksi, että linjausta noudatetaan käytännössä, ja laadulla oikaistut aktiivisuussignaalit korvaavat raakamäärät, kun aktiivisuusdataa ylipäätään käytetään.
- **Taso 5, Orkestroitu:** Organisaatio on osoitettavasti siirtänyt arviointikulttuurin pois aktiivisuusmittareista aiheen 3.3 usean signaalin suorituskykylähestymistapaan, ja yhteistyön näkyvä paraneminen ja pelaamisen väheneminen ovat näyttönä siirtymän onnistumisesta.

## Keskusteluideoita

1. Onko kukaan täällä koskaan tuntenut itseään arvioiduksi, edes epävirallisesti, sen perusteella, kuinka "kiireiseltä" hänen aktiivisuutensa näytti?
2. Miltä aktiivisuusteatteri näyttäisi nimenomaan meidän tiimissämme?
3. Onko meillä eksplisiittinen, kirjallinen linjaus yksilöiden aktiivisuusjärjestystä vastaan, ja noudatetaanko sitä oikeasti?
4. Mikä hiljainen, arvokas työ tiimissämme tuottaa tällä hetkellä vähiten näkyvää aktiivisuusdataa?
5. Miten suunnittelisimme suoritusarvioinnin näytön uudelleen poistaaksemme aktiivisuusluvut kokonaan?

## Keskeiset opit

- Aktiivisuus mittaa **liikettä, ei arvoa**. Se on historiallisesti ohjelmistotuotannon väärinkäytetyin mittariperhe.
- **Älä koskaan aseta yksilöitä paremmuusjärjestykseen tai arvioi heitä** raakojen aktiivisuuslukujen perusteella. Tämä on tämän aiheen vaikein ja tärkein sääntö.
- Käytä aktiivisuusdataa **koosteena, kontekstina** muille SPACE-ulottuvuuksille, älä koskaan yksinäisenä tuomiona.
- Tarkkaile **aktiivisuusteatteria** ja **korvaamispelaamisen kuviota** (aihe 1.2) nimenomaan tässä mittariperheessä.
- Syvä, arvokas työ tuottaa usein **vähiten näkyvää aktiivisuusdataa**. Suojaa se järjestelmälliseltä aliarvostamiselta.

## Lähteet ja lisälukemista

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, by Tom DeMarco and Timothy Lister (perustelu sille, miksi insinöörejä ei pidä mitata näkyvällä kiireisyydellä).
- *Deep Work: Rules for Focused Success in a Distracted World*, by Cal Newport (hiljaisen, keskeytyksettömän työn arvo, jonka aktiivisuusmittarit systemaattisesti laskevat liian vähäiseksi).
- *The Tyranny of Metrics*, by Jerry Z. Muller (mittarifiksaatio ja sen kustannukset, suoraan sovellettavissa aktiivisuuteen perustuvaan arviointiin).
