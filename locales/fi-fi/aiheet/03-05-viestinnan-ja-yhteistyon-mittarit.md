# 3.5 Viestinnän ja yhteistyön mittarit

## Yleiskatsaus ja perustelut

**Viestintä ja yhteistyö**, SPACEn C (aihe 3.1), mittaa, miten tieto todella virtaa ihmisten ja tiimien välillä: kuinka löydettävää dokumentaatio on, kuinka tasaisesti tieto jakautuu tiimissä, kuinka hyvin tiimien väliset riippuvuudet koordinoidaan ja kuinka uudet tiimin jäsenet perehtyvät yhteisen ymmärryksen virtaan. Tämä ulottuvuus on usein viidestä vähiten instrumentoitu, juuri koska sitä on vaikeampi havaita kuin toimitusdataa ja se on vähemmän henkilökohtaista kuin tyytyväisyysdata. Tuo aukko on virhe, koska täällä tapahtuvat katkokset ovat usein syy ongelmiin, jotka ilmenevät väärin osoitettuina jokaisella muulla ulottuvuudella.

Nouseva muutosten epäonnistumisprosentti (aihe 2.10), joka näyttää testausongelmalta, on joskus todellisuudessa viestintäongelma: tiimi, joka ei tiennyt riippuvuuden muutoksesta ennen kuin se rikkoutui tuotannossa. Laskeva tyytyväisyystrendi (aihe 3.2), joka näyttää työmääräongelmalta, on joskus todellisuudessa eristyneisyysongelma: insinööri, joka on hiljaa suljettu pois keskusteluista, joissa päätökset tehdään. Tämän aiheen keskeinen väite on, että viestintä ja yhteistyö ansaitsevat suoran mittauksen juuri siksi, että niiden epäonnistumiset naamioituvat muiksi ongelmiksi, ja tiimi, joka jahtaa väärää juurisyytä, tuhlaa todellista vaivaa väärän asian korjaamiseen.

Suurille tiimeille tätä ulottuvuutta on rakenteellisesti vaikeampi ylläpitää juuri kun se muuttuu tärkeämmäksi. Viiden hengen tiimin koordinaatio tapahtuu päivittäisen läheisyyden kautta eikä tarvitse juuri lainkaan tietoista mittausta. Viidensadan hengen organisaatio, joka on hajautettu aikavyöhykkeiden ja liiketoimintayksiköiden yli, nojaa dokumentaatioon, löydettävyyteen ja tiimien väliseen koordinaatiomekanismeihin, jotka on suunniteltava tietoisesti ja joita on seurattava aktiivisesti, koska pienessä mittakaavassa toimineet epäviralliset kanavat eivät yksinkertaisesti yllä niin pitkälle.

## Keskeiset periaatteet

- **Viestinnän katkokset naamioituvat usein muiksi ongelmiksi.** Laatu- tai tyytyväisyysongelman juurisyy voi olla yhteistyössä.
- **Tätä ulottuvuutta on vaikein instrumentoida automaattisesti**, ja houkutus on ohittaa se kokonaan. Vastusta tuota houkutusta tietoisesti.
- **Tiedon keskittyminen on mitattavissa oleva riski, ei epämääräinen huoli.** Seuraa, kuinka kapeasti kriittinen tieto on hallussa.
- **Tiimien välinen riippuvuuskitka on usein näkymätöntä mukana oleville tiimeille,** kunnes joku mittaa sen suoraan.
- **Perehdytyksen nopeus on suora, mitattava sijaismittari sille, kuinka hyvin yhteinen ymmärrys todella virtaa** organisaatiossa.

## Suositukset

### Mittaa tiedon keskittyminen suoraan

Seuraa, kuinka moni pystyy pätevästi katselmoimaan, muokkaamaan tai operoimaan kutakin kriittistä järjestelmäkomponenttia: komponentti, jolla on vain yksi pätevä henkilö, on **[bussikerroin](https://en.wikipedia.org/wiki/Bus_factor)** (bus factor) yksi, vakava ja usein näkymätön riski (sisarkirjan `software-engineering-guide` pitkäikäisten järjestelmien ylläpitoa käsittelevä aihe käsittelee tätä syvemmin). Versionhallinnan blame-data yhdistettynä päivystysvuorojen tietueisiin voi tuoda tämän keskittymisen esiin automaattisesti: etsi komponentteja, joissa yksi tekijä tai yksi päivystäjä vastaa suhteettomasta osasta muutoksia tai häiriövasteita mielekkäällä ajanjaksolla.

### Mittaa tiimien välistä riippuvuuskitkaa suoralla signaalilla

Seuraa, kuinka kauan tiimien välinen pyyntö, tarvittava API-muutos, jaetun kirjaston päivitys tai koordinoitu julkaisu, kestää esittämisestä ratkaisuun. Tämä on hengeltään samanlaista kuin aiheen 2.6 sykliajan jakaminen osiin, mutta sovellettuna nimenomaan tiimien väliseen, ei tiimin sisäiseen koordinaatioon. Tiimi, joka odottaa johdonmukaisesti viikkoja toisen tiimin omistamaa riippuvuutta, kärsii yhteistyöongelmasta, joka ei näy selvästi kummankaan tiimin omissa sisäisissä toimitusmittareissa.

### Käytä signaalina dokumentaation löydettävyyttä, älä pelkkää dokumentaation olemassaoloa

Wiki täynnä vanhentuneita tai löytymättömiä sivuja ei ole todiste hyvästä viestinnästä sillä perusteella, että sisältöä teknisesti on jossain. Seuraa mahdollisuuksien mukaan, kuinka usein dokumentaatiota todella luetaan, kuinka usein uusi tiimin jäsen raportoi, ettei löytänyt tarvitsemaansa vastausta, tai kuinka usein sama kysymys esitetään toistuvasti keskustelukanavalla, koska vastaus, vaikka dokumentoitu, ei ollut löydettävissä. Tämä yhdistää suoraan dokumentaation laadun (aihe 4.6) tämän ulottuvuuden yhteistyöhuoliin.

### Seuraa perehdytysaikaa tuottavaan panokseen suorana sijaismittarina

Aika siitä, kun uusi tiimin jäsen aloittaa, hänen ensimmäiseen mielekkääseen, itsenäiseen panokseensa on vahva, käytännöllinen sijaismittari sille, kuinka hyvin yhteinen ymmärrys todella virtaa organisaatiossa: tiimi, jossa tieto elää kokonaan ihmisten päissä, perehdyttää hitaasti ja ennustamattomasti. Tiimi, jolla on aidosti hyvä dokumentaatio, selkeä omistajuus ja saatavilla oleva mentorointi, perehdyttää nopeammin ja johdonmukaisemmin. Seuraa tätä mittaria eksplisiittisesti ja kohtele pitkää tai hyvin vaihtelevaa perehdytysaikaa yhteistyösignaalina, ei vain HR-huolena.

### Kartoita todelliset viestintäverkostot säännöllisesti, älä vain organisaatiokaavioita

Organisaatiokaavio kuvaa, kuka raportoi kenelle. Se kuvaa harvoin, kuka todella puhuu kenelle työn tekemiseksi. Viestintäkuvioiden, koodikatselmointiverkostojen (kuka katselmoi kenen työtä) tai palaverien osallistujapäällekkäisyyden säännöllinen, kevyt analyysi voi paljastaa todellisen yhteistyörakenteen, joka eroaa merkittävästi viralliselta organisaatiokaaviolta. Se paljastaa usein epävirallisen pullonkaulan (yksi henkilö, jonka kautta kaikki kulkevat) tai eristäytyneen taskun (alitiimi, joka on ajautunut pois laajemmasta tiedonkulusta), jotka muuten pysyisivät näkymättöminä.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei suoraa yhteistyön mittausta | Vähäinen kuormitus | Juurisyyt osoitetaan väärin muille ulottuvuuksille, riskit pysyvät näkymättöminä |
| Tiedon keskittymisen seuranta | Tuo suoraan esiin todellisen, vakavan riskin (bussikerroin) | Vaatii datan yhdistämistä useista järjestelmistä (versionhallinta, päivystys) |
| Tiimien välisen riippuvuuskitkan seuranta | Paljastaa koordinaatio-ongelmia, jotka ovat näkymättömiä kummankin tiimin sisällä | Vaatii tietoista instrumentointia, ei tule automaattisesti olemassa olevista työkaluista |
| Viestintäverkoston kartoitus | Paljastaa todellisen, epävirallisen rakenteen organisaatiokaavion takana | Voi tuntua tunkeilevalta, ellei sitä käsitellä samalla huolella kuin tyytyväisyysdataa |

Keskeinen jännite on **instrumentoinnin vaikeus versus diagnostinen arvo**. Tätä ulottuvuutta on aidosti vaikeampi mitata automaattisesti kuin toimitus- tai aktiivisuusdataa, ja juuri tämä vaikeus on syy siihen, että moni organisaatio jättää sen väliin, vaikka sen epäonnistumiset ovat usein piilotettu juurisyy muille ulottuvuuksille osoitetuille ongelmille. Ratkaise jännite aloittamalla arvokkaimmista, helpoimmin hallittavista signaaleista, tiedon keskittymisestä ja tiimien välisestä riippuvuuskitkasta, jotka molemmat voi johtaa pitkälti olemassa olevasta versionhallinta- ja tiketöintidatasta, ennen kuin yrität kunnianhimoisempaa viestintäverkostoanalyysiä.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Tiedämmekö bussikertoimemme jokaiselle kriittiselle järjestelmäkomponentille, vai saisimmeko tietää sen vasta kantapään kautta, kun ainoa sen ymmärtävä henkilö ei ole tavoitettavissa?** Hae versionhallinta- ja päivystysdata kriittisimmistä järjestelmistäsi ja tarkista rehellisesti, kuinka keskittynyttä tieto todella on.

2. **Kuinka kauan tyypillisen tiimien välisen riippuvuuspyynnön ratkaiseminen kestää, ja olisiko kumpikaan mukana oleva tiimi huomannut tuon kitkan ilman tietoista mittaamista?** Valitse tuore tiimien välinen riippuvuus ja jäljitä sen todellinen aikajana. Vastaus on usein pidempi ja mukana oleville vähemmän näkyvä kuin kumpikaan tiimi oletti.

3. **Kun meillä on viime aikoina ollut laatu- tai tyytyväisyysongelma, olisiko viestinnän tai yhteistyön katkos voinut olla osa todellista juurisyytä?** Katso taaksepäin tuoretta häiriötä tai tyytyväisyyden laskua ja kysy tämä kysymys nimenomaan sen sijaan, että hyväksyisit ensimmäisen, ilmeisemmän selityksen.

4. **Kuinka kauan uudella tiimin jäsenellä kestää tehdä ensimmäinen mielekäs, itsenäinen panos, ja kuinka paljon tuo aika vaihtelee henkilöstä toiseen?** Pitkä tai hyvin vaihteleva perehdytysaika on suora, mitattava oire siitä, kuinka hyvin yhteinen ymmärrys todella virtaa tiimissäsi.

5. **Vastaako epävirallinen viestintäverkostomme muodollista organisaatiokaaviotamme, vai onko kehittynyt piilotettu pullonkaula tai eristäytynyt tasku, jota kukaan ei ole nimennyt?** Jos et ole koskaan katsonut tätä suoraan, sekin puute on keskustelun arvoinen.

6. **Onko dokumentaatiomme todella löydettävissä, vai onko se vain olemassa jossain, mistä sitä on vaikea löytää?** Kysy tuoreelta uudelta tiimin jäseneltä tai yritä tietoisesti vastata todelliseen kysymykseen vain dokumentoitujen resurssiesi avulla ja katso, miltä kokemus todella tuntuu.

## Sektorinäkökulma

**Startup-yritys.** Viestintä tapahtuu pienessä tiimissä luontevasti läheisyyden ja päivittäisen keskustelun kautta, ja muodollinen mittaus on yleensä tarpeetonta. Seurattava riski on bussikertoimen vaarallinen keskittyminen, kun tiimi kasvaa yli koon, jossa epävirallinen osmoosi yltää vielä kaikkiin, usein noin kahdeksan-kahdentoista hengen kohdalla.

**Pieni yritys.** Yksinkertainen, säännöllinen, rehellinen keskustelu, "kuka on ainoa tämän järjestelmän ymmärtävä henkilö", tuo usein esiin kriittisimmät tiedon keskittymisen riskit ilman muodollista instrumentointia. Priorisoi ensin kahden tai kolmen hauraimman, keskittyneimmän tietoalueen dokumentointi.

**Suuryritys.** Tiimien välinen riippuvuuskitka ja tiedon keskittyminen skaalautuvat täällä kumpikin huonosti, koska useampi tiimi tarkoittaa enemmän koordinaatiopinta-alaa ja enemmän kriittisiä järjestelmiä, jotka voivat päätyä kutistuvan, pitkään talossa olleiden asiantuntijoiden joukon omistukseen. Investoi tämän aiheen suosittelemaan instrumentointiin tietoisesti, koska epävirallinen tietoisuus ei aidosti kata organisaatiota tässä mittakaavassa.

**Julkishallinto.** Julkisen sektorin organisaatioissa yleiset pitkäikäiset järjestelmät ja pitkät työsuhteet voivat luoda vakavan bussikerroinriskin, joka piiloutuu näennäisen vakauden taakse, koska järjestelmä, joka ei ole vaihtanut käsiä vuosikymmeneen, voi riippua kokonaan yhdestä tai kahdesta eläkkeelle lähestyvästä henkilöstä. Kohtele tiedon keskittymisen mittausta toiminnan jatkuvuuden huolena, ei vain insinöörien hienoutena.

## Esimerkit

**Suuryritys.** Logistiikkayrityksen alustatiimi havaitsi vasta kriittisen häiriön jälkeen avaininsinöörin loman aikana, että ydinreititysalgoritmin tehollinen bussikerroin oli yksi: versionhallinnan historia osoitti, että yksi henkilö oli kirjoittanut yli 90 % komponentin tuoreista muutoksista, ja päivystysrotaation tietue osoitti saman henkilön ratkaisseen henkilökohtaisesti jokaisen siihen liittyvän häiriön kahden edellisen vuoden ajan. Tiimi aloitti tietoisen tiedonlevitysohjelman, pariohjelmointisessioita ja liittyvien häiriöiden omistajuuden kierrätystä, ja kahdeksan kuukautta myöhemmin tehty seuranta-analyysi osoitti bussikertoimen nousseen neljään, ja alkuperäinen insinööri vapautui tarttumaan uuteen, vipuvaikutukseltaan suurempaan työhön sen sijaan, että olisi pysynyt pysyvänä yksittäisenä vikaantumispisteenä.

**Julkishallinto.** Osavaltion etuusviraston ohjelmistotiimi mittasi tiimien välistä riippuvuuskitkaa ensimmäistä kertaa sen jälkeen, kun jaetussa kelpoisuuden varmennuspalvelussa oli toistuvasti havaittu epävirallisesti viiveitä. Data osoitti, että odotuksen mediaani riippuvuusmuutokselle jaetun palvelun tiimiltä oli yksitoista päivää, paljon pidempi kuin kumpikaan tiimi oli epävirallisesti kysyttäessä olettanut, ja juurisyyksi paljastui epäselvä, dokumentoimaton pyyntöprosessi eikä mikään kapasiteettipula. Selkeän, yksinkertaisen pyyntöprosessin ja sitoutuneen vasteaikatavoitteen julkaiseminen jaetulle palvelulle laski odotuksen mediaanin alle kahteen päivään yhdessä neljänneksessä, ilman lisähenkilöstöä.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Viestinnän ja yhteistyön suoran mittaamisen tuotto on sellaisten juurisyiden löytäminen, jotka muut ulottuvuudet osoittavat väärin: laatuongelma, joka näyttää testausaukolta mutta on todellisuudessa viestinnän katkos, tuhlaa vaivaa, kun tiimi yrittää korjata sen lisäämällä testejä sen sijaan, että korjaisi taustalla olevan koordinaatiovirheen. Yllä oleva bussikerroinesimerkki näyttää tämän tuoton jyrkimmän muodon: organisaatio, joka löytää ja korjaa vakavan tiedon keskittymisen riskin ennakoivasti, välttää katastrofaalisen kustannuksen, joka syntyy sen löytämisestä todellisessa kriisissä, kun ainoa kriittisen järjestelmän ymmärtävä henkilö ei ole aidosti tavoitettavissa.

Omistamisen kokonaiskustannus on enimmäkseen instrumentointityötä: versionhallinta-, päivystys- ja tiketöintidatan yhdistämistä tavoilla, jotka eivät ole valmiina laatikosta, sekä tiedon keskittymisen ja riippuvuuskitkan eksplisiittisen katselmoinnin säännöllistä kuria. Tuo kustannus on vaatimaton verrattuna todellisen bussikerroinkriisin tai kroonisen, korjaamattoman tiimien välisen koordinaatiovirheen kustannukseen.

## Antimallit ja sudenkuopat

- **Tämän ulottuvuuden ohittaminen, koska sitä on vaikea instrumentoida automaattisesti:** jättää juurisyyt osoitetuiksi väärin muille, helpommin mitattaville ulottuvuuksille.
- **Organisaatiokaavion käsittely tarkkana kuvana todellisista viestintäkuvioista:** usein väärä, ja kuilu on täsmälleen se paikka, jossa piilotetut pullonkaulat elävät.
- **Bussikertoimen sivuuttaminen, kunnes kriisi pakottaa löytämään sen:** vahingollisin virhe, josta tämä aihe varoittaa.
- **Oletus, että dokumentaation olemassaolo tarkoittaa dokumentaation hyödyllisyyttä:** vanhentunut tai löytymätön sisältö antaa vähän todellista viestintäarvoa.
- **Tiimien välisen kitkan mittaaminen mutta selvän, korjattavissa olevan juurisyyn jättäminen korjaamatta sen löydyttyä:** tuhlaa diagnostisen investoinnin.
- **Hitaan, vaihtelevan perehdytyksen käsittely pelkkänä HR-asiana eikä ohjelmistotyön yhteistyösignaalina:** missaa aidosti hyödyllisen, mitattavan sijaismittarin.

## Kypsyysmalli

- **Taso 1, Aloittava:** Viestintää ja yhteistyötä ei mitata lainkaan. Bussikerroin ja tiimien välinen kitka löydetään vain kriisin kautta.
- **Taso 2, Kehittyvä:** Tiedon keskittymisestä on jonkin verran epävirallista tietoisuutta, mutta johdonmukaista mittausta tai ennakoivaa tutkimista ei ole.
- **Taso 3, Vakioitu:** Bussikerrointa ja tiimien välistä riippuvuuskitkaa mitataan johdonmukaisesti kriittisille järjestelmille ja jaetuille palveluille koko organisaatiossa.
- **Taso 4, Hallittu:** Viestintäverkoston kartoitus paljastaa säännöllisesti piilotettuja pullonkauloja ja eristäytyneitä taskuja, ja perehdytysaikaa seurataan suorana sijaismittarina yhteisen ymmärryksen terveydelle.
- **Taso 5, Orkestroitu:** Organisaatio vähentää ennakoivasti tiedon keskittymisen riskiä ja tiimien välistä kitkaa ennen kuin ne aiheuttavat häiriöitä, ja voi osoittaa tiettyjä toimenpiteitä, tietoista tiedonlevitystä ja selkeytettyjä riippuvuusprosesseja, jotka mitattavasti paransivat tätä ulottuvuutta.

## Keskusteluideoita

1. Mikä on rehellisesti bussikertoimemme yksittäiselle kriittisimmälle järjestelmällemme?
2. Mikä tiimien välinen riippuvuus on aiheuttanut eniten kitkaa viime neljänneksellä, ja mittasimmeko sen?
3. Löytäisikö uusi tiimin jäsen dokumentaatiomme, vai löytäisikö hän vain, että sitä teknisesti on jossain?
4. Vastaako epävirallinen viestintäverkostomme organisaatiokaaviotamme?
5. Minkä laatu- tai tyytyväisyysongelman juurisyy voisi todellisuudessa olla yhteistyössä, jota emme ole tutkineet?

## Keskeiset opit

- Viestinnän ja yhteistyön epäonnistumiset **naamioituvat usein muiksi ongelmiksi**. Väärälle ulottuvuudelle osoitettu juurisyy tuhlaa vaivaa.
- Seuraa **tiedon keskittymistä (bussikerroin)** suoraan versionhallinta- ja päivystysdatalla sen sijaan, että odottaisit kriisin paljastavan sen.
- Mittaa **tiimien välistä riippuvuuskitkaa** eksplisiittisesti. Se on yleensä näkymätöntä mukana oleville tiimeille, kunnes se mitataan.
- Käytä **perehdytysaikaa tuottavaan panokseen** suorana, käytännöllisenä sijaismittarina sille, kuinka hyvin yhteinen ymmärrys virtaa.
- Kartoita **todelliset viestintäverkostot** säännöllisesti, koska ne eroavat usein merkittävästi muodollisesta organisaatiokaaviosta.

## Lähteet ja lisälukemista

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Team Topologies*, by Matthew Skelton and Manuel Pais (tiimien vuorovaikutustavat ja tiimien välisten riippuvuuksien suunnittelu).
- *Peopleware: Productive Projects and Teams*, by Tom DeMarco and Timothy Lister (epäviralliset viestintärakenteet ja niiden vaikutus tuottavuuteen).
- Conway, Melvin E., "How Do Committees Invent?" (1968): Conwayn lain alkuperä, viestintärakenteen ja järjestelmärakenteen välisestä suhteesta.
