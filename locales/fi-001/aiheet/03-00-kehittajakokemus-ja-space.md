# 3.0 Johdanto osaan 3: Kehittäjäkokemus ja SPACE-viitekehys

Osa 2 mittasi toimitusta ulkoapäin: kuinka nopeasti ja turvallisesti koodi liikkuu putkessa. Tämä osa mittaa koodia tuottavien ihmisten kokemusta. Se on olemassa, koska pelkkä toimitusmittarien joukko voi näyttää erinomaiselta, vaikka sen takana olevat ihmiset uupuvat, hukkuvat keskeytyksiin tai irtautuvat hiljaa työstään. Organisaatio, joka seuraa vain DORA-mittareita, voi parantaa niitä vuoden tai kaksi painamalla tiimiä kovempaa, kunnes henkilöstövaihtuvuus, laadun romahdus tai uupuminen pyyhkii hyödyn pois kerralla. Tämä osa on vastapaino.

Keskiössä on [SPACE-viitekehys](https://queue.acm.org/detail.cfm?id=3454124), jonka Microsoftin, GitHubin ja Victorian yliopiston tutkijat kehittivät nimenomaan korjaukseksi alan tapaan mitata kehittäjien tuottavuutta yhdellä, helposti pelattavalla sijaismittarilla, kuten koodirivien tai commitien määrällä. SPACE kattaa viisi ulottuvuutta: tyytyväisyys ja hyvinvointi, suorituskyky, aktiivisuus, viestintä ja yhteistyö sekä tehokkuus ja flow. Viitekehyksen keskeinen kuri, ja syy siihen, miksi tämä osa käsittelee sitä yhtä tiukasti kuin osa 2 omia flow-mittareitaan, on se, ettei mikään yksittäinen ulottuvuus yksin ole luotettava. Arvo syntyy nimenomaan siitä, että kaikki viisi pidetään näkyvillä yhdessä, jolloin tiimi ei voi näyttää hyvältä yhdellä akselilla vahingoittamalla hiljaa toista.

Suurille tiimeille kehittäjäkokemuksen mittarit vastaavat kysymykseen, johon DORA ei pysty: onko tämä toimituskyky kestävä, ja pitääkö organisaatio kiinni ihmisistä, jotka sen tuottavat. Suuryritykset, jotka sivuuttavat tämän osan, huomaavat hinnan yleensä henkilöstövaihtuvuuden tiedoista ja lähtöhaastatteluista, vasta kun vahinko on jo tapahtunut. Julkishallinnolla on usein palkkarajoitteita, jotka estävät kilpailemasta pelkällä palkalla, ja siksi sillä on erityisen vahvat syyt kohdella kehittäjäkokemusta ensisijaisena, aktiivisesti johdettuna asiana eikä jälkikäteen mieleen tulevana lisänä.

## Aiheet tässä osassa

- **3.1 SPACE-viitekehys:** Viisi ulottuvuutta yhdessä, miksi mikään niistä ei yksin ole luotettava ja miten niistä rakennetaan aidosti tasapainoinen mittarijoukko.
- **3.2 Tyytyväisyyden ja hyvinvoinnin mittarit:** Tyydytyksen, turhautumisen ja uupumisriskin mittaaminen, eli ulottuvuus, jota mikään järjestelmätelemetria ei voi suoraan havaita.
- **3.3 Suorituskykymittarit ja tulosten sijaismittarit:** Ulottuvuus, joka sekoitetaan helpoimmin aktiivisuuteen, ja miten aito tulosvaikutus mitataan sen sijaan.
- **3.4 Aktiivisuusmittarit ja niiden rajat:** Commitien määrät, koodirivit ja syy siihen, miksi tämän ulottuvuuden yliarvostaminen on vaarallisinta.
- **3.5 Viestinnän ja yhteistyön mittarit:** Miten tieto todella virtaa ihmisten ja tiimien välillä ja miltä terve kuvio näyttää.
- **3.6 Tehokkuus ja flow: syväkeskittyminen ja keskeytykset:** Keskeytyksettömän ajan suojaaminen, jota todellinen ohjelmistotyö vaatii, ja sitä kuluttavan kitkan mittaaminen.
- **3.7 Kehittäjäkokemuskyselyt ja DevEx-mittarit:** Miten ajat kyselyn, joka tuottaa luotettavaa signaalia suosiokilpailun sijaan, ja miten yhdistät sen objektiiviseen dataan.

## Miten nämä aiheet liittyvät toisiinsa

Aihe 3.1 esittelee kaikki viisi SPACE-ulottuvuutta yhdessä, ja aiheet 3.2–3.6 käsittelevät kutakin ulottuvuutta vuorollaan todellisessa syvyydessä siinä järjestyksessä, jossa SPACEn tutkijat ne esittävät. Aihe 3.7 päättää osan kyselysuunnittelun käytännön mekaniikkaan, koska tyytyväisyys, suorituskyky ja yhteistyö nojaavat osittain itseraportoituun dataan (aiheen 1.5 erottelu instrumentoinnin ja itseraportoinnin välillä on suoraan olennainen koko tämän osan ajan), ja huonosti suunniteltu kysely heikentää jokaista edeltävää aihetta.

Tämän osan keskeinen kuri, tasapaino ulottuvuuksien välillä eikä vahvuus yhdessä, on kirjan selkein käytännön esimerkki aiheen 1.3 periaatteesta, jonka mukaan tulokset ovat tuotoksia tärkeämpiä, sovellettuna ihmisiin toimitusputken sijaan. Aktiivisuus (aihe 3.4) on SPACE-ulottuvuus, joka muistuttaa eniten puhdasta tuotosmittaria, ja osa kohtelee sitä sen mukaisesti: hyödyllinen yhtenä syötteenä viidestä, vaarallinen yksinään signaalina. Osan 2 rinnalla luettuna tämä osa täydentää kuvan, jota DORA yksin ei voi antaa. Se kertoo toimitetaanko ohjelmisto nopeasti ja turvallisesti, ja jaksavatko sen toimittavat ihmiset ylläpitää tahdin.
