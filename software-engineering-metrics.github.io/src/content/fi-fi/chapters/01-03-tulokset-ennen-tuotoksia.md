# 1.3 Tulokset ennen tuotoksia: mitä valitaan mitattavaksi

## Yleiskatsaus ja perustelut

Jokainen ohjelmistotuotannon mittari kuuluu yhteen kolmesta luokasta, ja niiden sekoittaminen on tämän kirjan toiseksi yleisin virhe sen jälkeen, kun [Goodhartin laki](https://en.wikipedia.org/wiki/Goodhart%27s_law) on kokonaan sivuutettu. **Panosmittari** mittaa käytettyä vaivaa: kehittäjätunteja, käytettyjä dollareita, sitoutuneita tarinapisteitä. **Tuotosmittari** mittaa sitä, mitä järjestelmä tuotti: toimitettuja ominaisuuksia, yhdistettyjä pull requesteja, suljettuja tikettejä. **Tulosmittari** mittaa muutosta, jolla oli todella merkitystä: säilytettyä liikevaihtoa, vältettyjä häiriöitä, käyttäjälle säästynyttä aikaa. Tiimit vetäytyvät kohti panoksia ja tuotoksia, koska ne on helppo laskea ja ne ovat täysin tiimin hallinnassa. Arvo on lähes aina tuloksissa, jotka ilmaantuvat hitaammin, joita on kohisevampaa mitata ja joita on vaikeampi kohdistaa yhden tiimin työhön.

Tämä aihe käsittelee tuon vetovoiman tietoista vastustamista. Kokonaan panoksista ja tuotoksista rakennettu mittaristo voi näyttää vaikuttavan kiireiseltä tuottamatta lainkaan todellista arvoa: tiimi voi toimittaa kymmeniä ominaisuuksia, joita kukaan ei käytä, sulkea satoja tikettejä, jotka avautuvat uudelleen viikon kuluttua, tai osua jokaiseen tarinapisteestimaattiin samalla kun tuotteen todelliset tulokset, asiakaspysyvyys, tyytyväisyys ja liikevaihto, pysyvät ennallaan tai laskevat. Mikään tästä kiireestä ei näy ongelmana pelkkiin tuotoksiin perustuvassa mittaristossa, koska sellaisia ei ole rakennettu näkemään sitä.

Suuryrityksen ja julkishallinnon mittakaavassa tämä ero ratkaisee, pystyykö johto erottamaan tuottavan tiimin pelkästään aktiivisesta tiimistä. Divisioona voi esittää erinomaisia tuotosnumeroita vuosia, toimitettuja ominaisuuksia ja suljettuja sprinttejä, samalla kun tulos, josta rahoittaja tai lainsäätäjä oikeasti välittää, säilytetty liikevaihto tai lyhentyneet kansalaisten odotusajat, rapautuu hiljaa pinnan alla. "Toimitimme tiekartan" ei ole sama väite kuin "tiekartta paransi asioita", ja vain tuloksiin painotettu mittarisarja erottaa nämä toisistaan.

## Keskeiset periaatteet

- **Panokset ja tuotokset ovat sijaismittareita. Tulokset ovat itse asia.** Painota mittarisarjasi tuloksiin aina kun pääset niihin käsiksi.
- **Mittaamisen helppous ei ole syy mitata jotain.** Helpoimmin laskettavat asiat ovat yleensä panoksia ja tuotoksia, ei siksi että ne olisivat tärkeimpiä vaan koska ne on mekaanisesti yksinkertaista kerätä.
- **Kohdistaminen vaikeutuu siirryttäessä kohti tuloksia.** Hyväksy tämä kompromissi tietoisesti sen sijaan, että vetäytyisit tuotoksiin siksi, että tuloksia on vaikeampi kohdistaa.
- **Tiimi voi hallita panoksiaan ja tuotoksiaan mutta vain vaikuttaa tuloksiin.** Suunnittele vastuullisuus sen mukaan: pidä tiimit vastuussa siitä, mitä ne todella voivat hallita, ja seuraa tuloksia jaettuina, tiimirajat ylittävinä signaaleina.
- **Yksi pohjantähti-tulos pienellä ajurijoukolla päihittää tuotosruutujen seinän.** Kattavuuden pitäisi tulla rakenteesta, ei mittariston pelkästä volyymista.

## Suositukset

### Luokittele jokainen mittari ennen käyttöönottoa

Kysy jokaisesta ehdokasmittarista, mihin kolmesta luokasta se kuuluu. "Viikossa yhdistetyt pull requestit" on tuotos. "Niiden yhdistettyjen pull requestien prosenttiosuus, jotka aiheuttivat tuotantohäiriön viikon sisällä" on lähempänä tulosta, koska se mittaa seurausta eikä volyymia. Tämä luokittelu vie kolmekymmentä sekuntia, ja sen pitäisi olla pakollinen ennen kuin mittari lisätään mihinkään tiimin tai organisaation mittaristoon, koska se on nopein tapa huomata, että mittaristo täyttyy hiljaa helposti laskettavista tuotoksista samalla kun se uskoo mittaavansa arvoa.

### Rakenna mittaripuu yhden tuloksen alle

Älä seuraa litteää listaa. Järjestä mittarit **mittaripuuksi** (kutsutaan joskus KPI-puuksi): ylin tulosmittari jaettuna ajureihin, jotka syöttävät sitä kausaalisesti tai matemaattisesti, aina operatiivisiin tuotos- ja panosmittareihin, joita yksittäiset tiimit todella omistavat. Kun ylin tulos liikkuu, puu kertoo, mitä alemman tason ajuria tutkia, ja muuttaa lauseen "luku on laskenut" lauseeksi "tämä tietty vaihe putkessa on syy". Nimeä yksi **pohjantähti-mittari** huipulle aina kun alueesi sellaisen tukee: mitta, joka parhaiten tavoittaa toimitetun arvon, esimerkiksi julkaisutiheys yhdistettynä muutosten epäonnistumisprosenttiin alustatiimille tai ydinominaisuuden viikoittainen aktiivinen käyttö tuotetiimille.

### Painota tuloksia katselmoinneissa, ei vain mittaristossa

Mittaripuu on yhtä hyvä kuin se, miten sitä käytännössä käytetään. Sprinttikatselmoinneissa, neljännesvuosittaisissa liiketoimintakatselmoinneissa ja johdon päivityksissä aloita tulostason luvulla ja käytä sen alla olevia tuotos- ja panosmittareita vain selittämään liikettä, älä korvaamaan sitä. Tiimi, joka raportoi "suljimme 40 tikettiä tässä sprintissä" ilman mitään tulosyhteyttä, ei ole kertonut mitään siitä, oliko työllä merkitystä. Tiimi, joka raportoi "karanneet virheet vähenivät 30 % ja tässä on testausinvestointi, joka sen ajoi", on kertonut jotain todellista.

### Hyväksy hitaampi palaute tulosmittareille ja pariuta ne nopeampien ennakoivien indikaattorien kanssa

Tulosmittarit ovat usein jälkikäteisiä: ne vahvistavat tuloksen vasta kun on kulunut riittävästi aikaa varmuuden saamiseksi. Tuo viive on todellinen kustannus, koska se hidastaa oppimista. Pariuta jokainen tulosmittari vähintään yhden ennakoivan indikaattorin kanssa, eli mittarin, joka liikkuu aiemmin ja ennustaa tulosta, jotta tiimi voi ohjata ennen kuin hidas, auktoritatiivinen luku vihdoin saapuu. Julkaisutiheys on ennakoiva indikaattori toimitustuloksille. Nouseva karanneiden virheiden trendi on ennakoiva indikaattori tulevalle luotettavuustulokselle. Käytä ennakoivia indikaattoreita toimiaksesi ajoissa ja jälkikäteisiä tulosmittareita vahvistaaksesi olleesi oikeassa.

## Kompromissit: edut ja haitat

| Luokka | Edut | Haitat |
| --- | --- | --- |
| Panosmittarit | Täysin tiimin hallinnassa, helppo laskea | Heikoin yhteys todelliseen arvoon; helppo pelata volyymilla |
| Tuotosmittarit | Helppo laskea, selkeä omistajuus, nopea palaute | Palkitsee aktiivisuutta vaikutuksen sijaan; voi nousta arvon laskiessa |
| Tulosmittarit | Heijastavat suoraan sitä, mikä on tärkeää; vaikea pelata halvalla | Hitaita, kohisevia ja vaikea kohdistaa yhdelle tiimille |
| Mittaripuurakenne | Yhdistää päivittäisen työn strategiseen arvoon; auttaa diagnoosissa | Vaatii todellista analyyttistä työtä rakentaa ja ylläpitää oikein |

Keskeinen jännite on **hallittavuus vastaan arvo**. Panokset ja tuotokset ovat täysin tiimin hallinnassa, mikä tekee houkuttelevaksi pitää tiimit vastuussa niistä. Tulokset kantavat arvon mutta ovat vain osittain minkä tahansa yksittäisen tiimin vaikutuspiirissä, koska hyvä ominaisuus voi silti epäonnistua syistä, jotka ovat kokonaan ohjelmistotuotannon ulkopuolella. Ratkaise tämä pitämällä tiimit vastuussa panoksista ja tuotoksista, jotka ne täysin hallitsevat, ja seuraamalla tuloksia jaettuina signaaleina, jotka koko organisaatio omistaa yhdessä, yhdistettyinä nimenomaisen mittaripuun kautta sen sijaan, että jätettäisiin selittämätön aukko kohtien "teimme työn" ja "auttoiko se" väliin.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Onko jokainen nykyisen mittaristomme mittari panos, tuotos vai tulos, ja kertooko näiden kolmen välinen tasapaino rehellisen tarinan?** Useimmat mittaristot osoittautuvat rehellisesti auditoituina lähes kokonaan panoksiksi ja tuotoksiksi, koska työkalut raportoivat niitä oletuksena. Luokittele jokainen ruutu ja laske jakauma. Mittaristo, jossa ei ole yhtään tulosruutua, mittaa aktiivisuutta ja esittää sen suorituskykynä.

2. **Mikä on ainoa pohjantähti-tulosmittarimme, ja pystymmekö jäljittämään sen mittaripuun kautta alas johonkin, jonka kukin tiimi todella omistaa?** Ilman tätä yhdistävää rakennetta liikkuva huipputaso antaa vihjeen siitä, mistä etsiä, eivätkä tiimit näe, miten niiden päivittäiset tuotosmittarit liittyvät mihinkään tärkeään. Tuo nykyinen huippumittarisi, jos sinulla on sellainen, ja yritä rakentaa puu paikan päällä.

3. **Missä pidämme tiimiä vastuussa tuloksesta, johon se voi vain vaikuttaa, ei hallita sitä?** Tämä on yleinen turhautumisen ja hiljaisen pelaamisen lähde, koska tiimillä, jota rangaistaan tuloksesta, jonka muokkaa sen hallinnan ulkopuoliset tekijät, on kaikki kannustimet suojella itseään todellisen järjestelmän parantamisen sijaan. Tunnista nämä epäsuhdat ja joko säädä vastuullisuutta tai lisää puuttuvat vivut.

4. **Mikä ennakoiva indikaattori meillä on jokaiselle jälkikäteiselle tulosmittarille, ja kuinka paljon etukäteen se ennustaa niitä?** Puhtaasti jälkikäteinen mittarisarja tarkoittaa, että saat tietää olleesi väärässä vasta kun on liian myöhäistä muuttaa suuntaa halvalla. Tuo tulosmittarisi ja tarkista, onko jokaiselle olemassa aito ennakoiva indikaattori vai lennätkö sokkona raportointijaksojen välillä.

5. **Kuinka suuri osa siitä, mitä juhlimme katselmoinneissa ja retrospektiiveissä, on tuotosta ("toimitimme X") ja kuinka suuri tulosta ("X muutti Y:tä parempaan")?** Kieli, jolla tiimit juhlivat työtä, muokkaa sitä, mitä ne optimoivat ajan myötä, usein enemmän kuin mittaristo. Kuuntele omia katselmointipalavereitasi yhden sprintin ajan ja laske jakauma rehellisesti.

6. **Jos tärkeimmät tuotosmittarimme kaksinkertaistuisivat yön yli, paranisivatko tulosmittarimme välttämättä, vai voisivatko ne huonontua?** Tämä ajatuskoe paljastaa tuotosmittarit, jotka ovat irtautuneet palvelemistaan tuloksista tai jopa vastustavat niitä aktiivisesti, kuten ominaisuuksien volyymin, joka kasvattaa ylläpitotaakkaa nopeammin kuin käyttöönottoa.

## Sektorinäkökulma

**Startup-yritys.** Valitse yksi tulos, tyypillisesti sijaismittari sille, saavatko asiakkaat jatkuvasti arvoa, kuten viikoittainen pysyvyys tai aktivoituminen, ja kohtele sitä pohjantähtenäsi ensimmäisestä päivästä. Vastusta vetoa tuotoskulissimittareihin, kuten ominaisuuksien kumulatiiviseen määrään, joita on houkuttelevaa raportoida sijoittajille mutta jotka eivät kerro mitään siitä, toimiiko tuote kenellekään.

**Pieni yritys.** Nykyiset työkalusi, kassajärjestelmä, tukipalvelu ja analytiikka, raportoivat yleensä jo tulokseen läheisen luvun, kuten uusintaostojen osuuden tai tikettien uudelleenavausosuuden. Käytä niitä sen sijaan, että rakentaisit mukautettua tulosinstrumentointia, jota et pysty ylläpitämään, ja vastusta kiusausta turvautua raakoihin aktiivisuusmääriin pelkästään siksi, että ne ovat oletusnäkymä.

**Suuryritys.** Hallitseva epäonnistumistapa on tiimien salkku, joista jokainen optimoi paikallisia tuotosmittareita, jotka eivät summaudu miksikään johdonmukaiseksi organisaation tulokseksi. Rakenna mittaripuu tietoisesti, yhdenmukaista tulosmäärittelyt liiketoimintayksiköiden välillä ja vaadi jokaista merkittävää hanketta ilmoittamaan tulushypoteesinsa ennen rahoitusta, ei vain tuotossuunnitelmaansa.

**Julkishallinto.** Valvontaelimet ja yleisö tuntevat yhä paremmin eron kohtien "toimitti työselosteen" ja "paransi tulosta" välillä, ja pelkkä tuotosraportti kutsuu juuri tuota tarkastelua. Määritä onnistuminen kansalaisille näkyvänä tuloksena (odotusaika, virheprosentti, tyytyväisyys) aina kun se on laillisesti ja käytännössä mahdollista, ja kerro selvästi, kun vain tuotosmittari on saatavilla ja miksi.

## Esimerkit

**Suuryritys.** Logistiikkayrityksen ohjelmistodivisioona raportoi "neljänneksessä toimitettujen ominaisuuksien" johdonmukaisesti nousevaa määrää kahden vuoden ajan, samalla kun yrityksen keskeinen asiakastyytyväisyyspiste tasaantui hiljaa. Uusi ohjelmistotuotannon varapresidentti rakensi mittaripuun, jonka juurena oli ajallaan toimitettujen osuus, varsinainen liiketoimintatulos, jaoteltuna terminaalien viipymäaikaan ja viimeisen kilometrin onnistumiseen asti tiimitason ohjelmistotuotoksiin. Yhden raportointikierroksen sisällä kävi selväksi, että useat paljon tuottavat tiimit toimittivat ominaisuuksia alueilla, joilla ei ollut mitattavaa vaikutusta pohjantähti-mittariin, ja investoinnit siirtyivät niihin ajureihin, joilla puu osoitti olevan oikeasti merkitystä.

**Julkishallinto.** Kansallisen terveyspalvelun digitaalinen tiimi oli raportoinut "työselosteen mukaan toimitetuista moduuleista" monivuotisessa potilastietojen uudistusohjelmassa. Valvontavaliokunta esitti toisenlaisen kysymyksen: vähensikö kliinikoiden hallinnollinen tiedonsyöttöaika. Tiimi lisäsi jälkikäteen tulosmittarin, hallinnollisen ajan mediaaniminuutit potilaskontaktia kohden, ja havaitsi, että varhaiset moduulit olivat itse asiassa kasvattaneet tätä aikaa työnkulun kitkan vuoksi, vaikka jokainen toimitusetappi oli saavutettu. Myöhemmät moduulit suunniteltiin uudelleen suoraan tulosmittarin ympärille, ja ohjelman julkinen raportointi siirtyi toimitustarkistuslistasta ennen ja jälkeen -tulosvertailuun.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Tuloksiin painottamisen tuotto on vältetty hukka: organisaatio, joka näkee lähes reaaliajassa, ettei tuotosvirta liikuta mitään tulosta, voi ohjata tuon investoinnin uudelleen ennen kuin kokonaisen budjettikierroksen verran aikaa on käytetty asian selvittämiseen kantapään kautta. Suurten ohjelmistoorganisaatioiden hallitseva piilokustannus ei ole alirahoitus vaan hyvin toteutettu työ, jota ei olisi koskaan pitänyt rahoittaa, koska se oli irrallaan mistään todellisesta tuloksesta, eikä pelkkä tuotosmittaristo näe tuota irtautumista lainkaan.

Tulosmittaamisen omistamisen kokonaiskustannus (TCO) on korkeampi kuin tuotosmittaamisen, koska tulokset on aidosti vaikeampi määritellä, kohdistaa ja instrumentoida, ja todellisen mittaripuun rakentaminen vaatii tietoista analyyttistä työtä sen sijaan, että hyväksyttäisiin se, mitä työkalu viennissä oletuksena antaa. Tuo kustannus kannattaa maksaa jokaisesta vaatimatonta kokoa suuremmasta hankkeesta, koska vaihtoehto, eli sen jälkikäteen havaitseminen, ettei vuoden varmasti raportoitu tuotos tuottanut todellista arvoa, maksaa paljon enemmän kuin etukäteinen analyysi.

## Antimallit ja sudenkuopat

- **Mittaristo, joka koostuu kokonaan tuotosruuduista:** mittaa aktiivisuutta ja esittää sen suorituskykynä.
- **Tiimin pitäminen täysin vastuussa tuloksesta, jota se ei voi hallita:** synnyttää turhautumista ja kutsuu pelaamaan suojautuakseen kohtuuttomalta syyllistämiseltä.
- **Ei ennakoivaa indikaattoria jälkikäteiselle tulokselle:** tiimi oppii olleensa väärässä vasta kun korjaaminen on liian kallista.
- **Tuotoskielen juhliminen katselmoinneissa samalla kun väitetään arvostavan tuloksia:** ilmoitettu prioriteetti ja eletty kannustin eroavat, ja eletty kannustin voittaa.
- **Litteä mittarilista ilman puurakennetta:** liikkuva huipputaso ei anna vihjettä siitä, mistä etsiä.
- **Tulosmittaamisen kohtelu liian vaikeana yritettäväksi:** palauttaa organisaation pysyvästi helposti laskettaviin panoksiin ja tuotoksiin.

## Kypsyysmalli

- **Taso 1, Aloittava:** Mittarit ovat lähes kokonaan panoksia ja tuotoksia. Kukaan ei osaa nimetä organisaation tulosmittareita tai jäljittää linjaa niihin.
- **Taso 2, Kehittyvä:** Jotkin tiimit ovat tunnistaneet tulosmittareita epävirallisesti, mutta jaettua mittaripuuta ja johdonmukaisia ennakoivia indikaattoreita ei ole.
- **Taso 3, Vakioitu:** Dokumentoitu mittaripuu yhdistää jaetun pohjantähti-tuloksen tiimien omistamiin tuotoksiin, ja sitä sovelletaan johdonmukaisesti koko organisaatiossa.
- **Taso 4, Hallittu:** Sekä ennakoivia että jälkikäteisiä indikaattoreita seurataan ja katselmoidaan yhdessä. Tiimit ovat vastuussa vain siitä, mitä ne hallitsevat, ja tulosmittaamiseen on aktiivisesti osoitettu resursseja.
- **Taso 5, Orkestroitu:** Tulosmittaaminen on integroitu suoraan rahoitus- ja priorisointipäätöksiin. Organisaatio ohjaa rutiininomaisesti investointeja pois paljon tuottavasta mutta vähän tuloksia tuottavasta työstä ennen kuin kokonainen budjettikierros on kulunut.

## Keskusteluideoita

1. Nimeä organisaatiomme tärkein yksittäinen tulosmittari. Voivatko kaikki sopia siitä?
2. Mikä on suurin nykyinen tuotosinvestointimme, jota emme vielä pysty jäljittämään mihinkään tulokseen?
3. Missä vastuurakenteemme rankaisee tiimiä tuloksesta, jota se ei voi hallita?
4. Miltä mittaristomme näyttäisi, jos poistaisimme jokaisen puhtaan tuotosruudun?
5. Kuinka kauan meiltä nykyisin kestää oppia, auttoiko toimitettu ominaisuus oikeasti?

## Keskeiset opit

- Luokittele jokainen mittari **panokseksi, tuotokseksi tai tulokseksi** ja painota mittarisarjasi tietoisesti tuloksiin.
- Rakenna **mittaripuu** yhden **pohjantähti-mittarin** alle, jotta liikkuva huipputaso osoittaa syyhyn.
- Pidä tiimit vastuussa siitä, mitä ne **hallitsevat** (panokset, tuotokset). Seuraa tuloksia jaettuina signaaleina, joihin koko organisaatio vaikuttaa yhdessä.
- Pariuta jokainen jälkikäteinen **tulosmittari** nopeamman **ennakoivan indikaattorin** kanssa, jotta voit ohjata ennen kuin hidas luku vahvistaa olleesi väärässä.
- Pelkkä tuotosmittaristo mittaa aktiivisuutta ja kutsuu sitä suorituskyvyksi. Kohtele sitä varoitusmerkkinä, älä lohtuna.

## Lähteet ja lisälukemista

- *Accelerate: The Science of Lean Software and DevOps*, tekijät Nicole Forsgren, Jez Humble ja Gene Kim (tulospohjainen toimituksen mittaaminen).
- *Lean Analytics*, tekijät Alistair Croll ja Benjamin Yoskovitz (One Metric That Matters ja panos-, tuotos- ja tulosjaottelu startup-yrityksen yhteydessä).
- *Measure What Matters*, tekijä John Doerr (tulosorientoitunut tavoitteenasettelu ja OKR-viitekehyksen painotus tuloksiin aktiivisuuden sijaan).
- *The Lean Startup*, tekijä Eric Ries (toiminnalliset vastaan kulissimittarit ja tulosten validointi).
- *Key Performance Indicators*, tekijä David Parmenter (KPI- tai mittaripuurakenteen rakentaminen pohjantähti-mitan alle).
