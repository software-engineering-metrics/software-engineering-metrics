# 5.1 Karanneiden virheiden osuus ja laatuvuodot

## Yleiskatsaus ja perustelut

**Karanneiden virheiden osuus** mittaa virheitä, jotka pääsevät tuotantoon ja
vaikuttavat oikeisiin käyttäjiin. Se eroaa virheistä, jotka jäävät kiinni
aiemmin testauksessa, koodikatselmoinnissa tai staattisessa analyysissa,
joista kaikista kerrotaan kirjan osassa 4. Ero on valtavan tärkeä:
koodikatselmoinnissa kiinni jäänyt virhe maksaa korjata minuutteja, eikä
yksikään käyttäjä näe sitä. Sama virhe voi tuotantoon karatessaan maksaa
tunteja häiriöiden hoitoa, aitoa haittaa asiakkaille ja mitattavan kolhun
luottamukseen. Tämä mittari on aidosti osan 4 kaiken sisällön lopullinen
tuloskortti: jos karanneiden virheiden osuus kasvaa vahvoista sisäisistä
laatumittareista (monimutkaisuus, kattavuus, staattinen analyysi)
huolimatta, nuo sisäiset signaalit eivät yleensä havaitse niitä
virhetapoja, joilla on merkitystä oikeille käyttäjille.

Tässä aiheessa karanneet virheet otetaan vakavasti, kuten niiden hinta
ansaitsee, mutta vastustetaan kiusausta kohdella raakalukumäärää
yksinkertaisena tulostauluna. Kaikki virheet eivät ole samanarvoisia:
kirjoitusvirhe harvoin luetussa ohjetekstissä ja tietoja turmeleva vika
rahansiirtojärjestelmässä ovat molemmat teknisesti karanneita virheitä, ja
niiden kohtelu samanlaisina tuottaa mittarin, joka on joko liian kohinainen
toimittavaksi tai, mikä pahempaa, aktiivisesti harhaanjohtava sen suhteen,
missä todellinen riski on. Aiheen keskeinen suositus, vakavuudella painotettu
seuranta ja huolellinen huomio siihen, miten virheet luokitellaan, kohdistuu
suoraan tähän ongelmaan.

Suurille tiimeille karanneiden virheiden osuus on yksi selkeimmistä silloista
kirjan sisäisten ohjelmistotuotannon mittarien ja koko osan 5 käsittelemän
asiakasrajapinnan välillä. Suuryritykset käyttävät sitä perustelemaan
investointeja osan 4 testaus- ja katselmointikäytäntöihin.
Julkishallinnossa, jossa karannut virhe voi tarkoittaa virheellistä
etuuslaskentaa tai epäonnistunutta julkisen palvelun asiointia, se on suora
julkisen luottamuksen ja oikeudellisen alttiuden mitta, ei pelkkä sisäinen
ohjelmistotuotannon tilasto.

## Keskeiset periaatteet

- **Karanneiden virheiden osuus on sisäisten laatukäytäntöjen lopullinen
  tuloskortti.** Kasvava osuus vahvoista osan 4 mittareista huolimatta
  tarkoittaa, etteivät nuo mittarit havaitse sitä, mikä on tärkeää.
- **Vakavuus painaa enemmän kuin raakalukumäärä.** Paina virheitä
  todellisella asiakas- tai liiketoimintavaikutuksella äläkä kohtele jokaista
  karannutta virhettä samalla tavalla.
- **Luokittelun yhdenmukaisuus on välttämätöntä.** Kaksi tiimiä, jotka
  luokittelevat vakavuuden eri tavoin, tuottavat lukuja, joita ei voi
  vertailla oikeudenmukaisesti.
- **Tämä mittari on alttiina määritelmillä pelaamiselle**, aivan kuten
  muutosten epäonnistumisprosentti (aihe 2.10): se, mitä "virheeksi" lasketaan,
  voidaan kaventaa, jolloin luku näyttää paremmalta vähentämättä todellista
  asiakkaille koituvaa haittaa.
- **Juurisyiden luokittelu tekee lukumäärästä diagnostiikkatyökalun.**
  Sen tietäminen, *miksi* virheet karkaavat, on hyödyllisempää kuin pelkän
  lukumäärän tunteminen.

## Suositukset

### Paina karanneita virheitä vakavuudella käyttäen yhdenmukaista, dokumentoitua asteikkoa

Luokittele jokainen karannut virhe kiinteällä vakavuusasteikolla (yleensä
kriittinen, merkittävä, vähäinen tai numeroitu vastine) todellisen asiakas-
tai liiketoimintavaikutuksen perusteella. Tietojen menetys tai turmeltuminen,
tietoturva-altistus ja ominaisuuden täydellinen poissaolo ovat asteikon
yläpäässä, ja toiminnallisesti merkityksetön ulkoasuvirhe alapäässä. Seuraa
vakavuudella painotettua trendiä, älä pelkkää raakalukumäärää, jotta
vähäisten ongelmien piikki ei peitä näkyvistä pienempää mutta paljon
seurauksellisempaa kriittisten virheiden kasvua.

### Yhdenmukaista luokittelukriteerit tiimien välillä

Kun eri tiimit luokittelevat vakavuuden itsenäisesti, ne ajautuvat eri
standardeihin, osa varovaisiin ja osa salliviin. Tämä tekee tiimien välisestä
vertailusta merkityksetöntä ja, mikä pahempaa, luo kannustimen luokitella
anteliaasti alaspäin, jotta oman tiimin luvut näyttävät paremmilta (muunnelma
aiheen 1.2 määritelmillä pelaamisesta). Julkaise selkeät, esimerkkeihin
perustuvat luokittelukriteerit ja auditoi säännöllisesti otos luokitteluista
tiimien välillä yhdenmukaisuuden tarkistamiseksi.

### Seuraa [juurisyytä](https://en.wikipedia.org/wiki/Root_cause_analysis), älä vain lukumäärää ja vakavuutta

Kirjaa jokaisesta karanneesta virheestä, miksi se pääsi karkaamaan:
testauksen aukko, vaatimusten reunatapaus, jota ei huomattu, ero testi- ja
tuotantoympäristön välillä, katselmointi, joka ei huomannut ongelmaa. Kokoa
juurisyydata ajan mittaan järjestelmällisten kuvioiden löytämiseksi. Jos
jokin luokka (sanotaan ympäristöerot) hallitsee karanneita virheitäsi, se
osoittaa suoraan tiettyyn, korjattavissa olevaan prosessiaukkoon eikä
epämääräiseen yleiseen kehotukseen "testaa enemmän".

### Yhdistä karanneet virheet takaisin niitä edeltäneisiin sisäisiin laatusignaaleihin

Jäljitä karannut virhe mahdollisuuksien mukaan takaisin koodialueelle, josta
se tuli, ja tarkista, näyttikö alue varoitusmerkkejä osan 4 mittareissa: oliko
se monimutkaisuuden kuuma piste (aihe 4.1, aihe 4.3), oliko sen
mutaatioiden tappoaste matala (aihe 4.2), merkitsikö staattinen analyysi
jotain läheltä (aihe 4.4). Tämä yhteys osoittaa, ennustavatko sisäiset
laatumittarisi todella asiakkaiden kohtaamia virheitä vai mittaavatko ne
jotain, mikä ei omassa kontekstissasi korreloi sen kanssa, mitä asiakkaat
todella kokevat.

### Varo, ettei virheiden luokittelusta tule syyllistämisharjoitus

Kehystä virheiden juurisyyanalyysi nimenomaisesti järjestelmäkysymykseksi
aiheen 1.1 diagnostisen kehystyksen mukaisesti, ei yksilön
syyllistämisharjoitukseksi. Tiimillä, joka pelkää syytöksiä karanneesta
virheestä, on vahva kannustin raportoida liian vähän, luokitella virheitä
alaspäin tai vastustaa perusteellista juurisyyanalyysia. Kaikki nämä
turmelevat juuri sen datan, johon tämä aihe nojaa. Syyllistämätön
jälkikatselmointi, josta kerrotaan syvemmin aiheessa 6.2, pätee tässä
suoraan.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Karanneiden virheiden raakalukumäärä | Yksinkertainen raportoida | Kohtelee kirjoitusvirhettä ja tietoja turmelevaa vikaa samalla tavalla, on kohinainen ja harhaanjohtava |
| Vakavuudella painotettu seuranta | Heijastaa todellista asiakasvaikutusta tarkemmin | Vaatii yhdenmukaista, kurinalaista luokittelua |
| Tiimikohtaiset luokittelustandardit | Joustava, vähäinen koordinaatiotarve | Tuottaa vertailukelvottomia lukuja tiimien välillä ja houkuttelee sallivaan ajautumiseen |
| Yhdenmukaistettu, auditoitu luokittelu | Oikeudenmukainen, vertailukelpoinen, kestää pelaamista | Vaatii jatkuvaa hallintaa ja säännöllistä auditointityötä |

Keskeinen jännite on **paikallinen joustavuus versus tiimien välinen
vertailtavuus**. Kun jokainen tiimi saa luokitella virheiden vakavuuden
oman kontekstinsa mukaan, toteutus on helpompi, mutta luvut eivät ole
oikeudenmukaisesti vertailtavissa tai koottavissa organisaatiotasolla, ja
tiimille syntyy hiljainen kannustin luokitella anteliaasti omien mittariensa
suojaamiseksi. Ratkaise jännite investoimalla yhdenmukaistettuihin,
dokumentoituihin luokittelukriteereihin ja säännöllisiin tiimien välisiin
auditointeihin. Kohtele tätä hallintatyönä (aihe 1.4), jonka investointi
kannattaa, koska tämä mittari liittyy niin suoraan todelliseen
asiakasvaikutukseen.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Seuraammeko karanneita virheitä vakavuuden mukaan, vai kohteleeko
   raakalukumäärä vähäistä ulkoasuvikaa samoin kuin kriittistä
   tietoongelmaa?** Avaa oma mittaristosi ja tarkista. Jos vakavuuspainotusta
   ei vielä ole, tämä on aiheen suosittelemista muutoksista arvokkain.

2. **Luokittelisivatko kaksi eri tiimiä saman virheen vakavuuden samalla
   tavalla, vai onko luokittelu ajautunut erilleen organisaatiossa?** Valitse
   oikea, tulkinnanvarainen menneisyyden virhe ja pyydä kahden eri tiimin
   edustajia luokittelemaan se itsenäisesti. Vertaa tuloksia rehellisesti.

3. **Mikä on yleisin karanneiden virheiden juurisyymme, ja vastaako nykyinen
   prosessimme siihen todella, vai reagoimmeko vain yksittäisiin häiriöihin
   sitä mukaa kun niitä tulee?** Kokoa juurisyydata viime kuukausilta ja etsi
   vallitseva kuvio.

4. **Ovatko karanneet virheemme jäljittyneet alueille, jotka sisäiset
   laatumittarimme (monimutkaisuus, kattavuus, staattinen analyysi) olivat
   jo merkinneet riskialttiiksi?** Tämä yhteys osoittaa, ovatko osan 4
   mittarit omassa kontekstissasi aidosti ennustavia vai jäävätkö niiltä
   huomaamatta ne virhetavat, joilla todella on merkitystä.

5. **Tuntuuko virheiden luokittelu turvalliselta, vai pelkäävätkö
   kehittäjät syyllistämistä, kun he raportoivat tai luokittelevat virheen,
   johon he liittyvät?** Syyllistävä kulttuuri turmelee tämän datan
   järjestelmällisesti vajaalla raportoinnilla ja sallivalla luokittelulla.
   Ole rehellinen nykyisestä kulttuuristasi.

6. **Onko karanneiden virheiden osuutemme koskaan parantunut
   epäilyttävän nopeasti ilman vastaavaa muutosta testaus- tai
   katselmointikäytännöissä?** Kuten muutosten epäonnistumisprosentissa
   (aihe 2.10), tämä on selkein merkki siitä, että luokittelukriteerit, ei
   todellinen riski, ovat muuttuneet.

## Sektorinäkökulma

**Startup-yritys.** Muodollinen vakavuusluokittelu on usein tarpeetonta, kun
virheitä on vähän ja pieni tiimi voi keskustella jokaisesta suoraan.
Kannattava tapa omaksua varhain on yksinkertaisesti seurata virheitä
yhdenmukaisesti alusta alkaen, vaikka epämuodollisesti, jotta historiadata
on olemassa, kun tiimi kasvaa tarpeeksi suureksi muodollisempaan analyysiin.

**Pieni yritys.** Yksinkertainen yhteinen vakavuusasteikko, vaikka vain
kolmitasoinen (kriittinen, merkittävä, vähäinen), jota soveltaa yhdenmukaisesti
se, joka hoitaa tuen ja vikojen priorisoinnin, tuo suurimman osan tämän aiheen
hyödystä ilman hienostunutta työkalutusta tai erillistä laatutoimintoa.

**Suuryritys.** Luokittelun yhdenmukaisuus tiimien välillä on tässä
vaikuttavin investointi, koska epäyhtenäiset standardit kymmenissä tiimeissä
tekevät koko organisaation laatuvertailusta merkityksettömän. Investoi
dokumentoituihin, esimerkkeihin perustuviin luokittelukriteereihin ja
säännölliseen auditointiin, ja yhdistä karanneet virheet järjestelmällisesti
osan 4 sisäisiin laatusignaaleihin sen selvittämiseksi, mitkä niistä ovat
organisaatiollesi todella ennustavia.

**Julkishallinto.** Karannut virhe julkisessa tai etuuksia laskevassa
järjestelmässä kantaa oikeudellista ja julkisen luottamuksen painoa
ohjelmistotuotannon kustannusta enemmän. Kohtele vakavuusluokittelua erityisen
tarkasti kansalaisten palveluihin vaikuttavissa virheissä ja varaudu siihen,
että luokittelupäätökset joutuvat ulkopuoliseen tarkasteluun. Se on vahva
peruste dokumentoiduille, auditoiduille ja yhdenmukaisille kriteereille
tapauskohtaisten arvioiden sijaan.

## Esimerkit

**Suuryritys.** Tilausohjelmistoyrityksen karanneiden virheiden määrä oli
kasvanut kaksi neljännestä, ja alkuhuoli kohdistui raakalukuun.
Vakavuudella painotettu analyysi paljasti, että kasvu koostui lähes
kokonaan vähäisistä, ulkoasuun liittyvistä ongelmista, jotka osuivat
yhteen käyttöliittymäuudistuksen kanssa, kun taas kriittiset ja merkittävät
virheet olivat samalla ajanjaksolla vähentyneet hieman. Vähäisten ongelmien
piikin juurisyyanalyysi osoitti aukon visuaalisessa regressiotestauksessa
nimenomaan uusille käyttöliittymäkomponenteille. Kohdennettu, edullinen
korjaus olisi jäänyt kokonaan huomaamatta, jos tiimi olisi reagoinut
painottamattomaan raakalukuun erittelemättömänä laatukriisinä.

**Julkishallinto.** Osavaltion työttömyysviraston etuuksien
laskentajärjestelmässä oli karannut virhe, jonka vuoksi pieneltä osalta muuten
oikeutettuja hakemuksia evättiin virheellisesti useiden kuukausien ajan ennen
havaitsemista. Juurisyytutkinta osoitti virheen
syntyneen koodialueella, joka oli merkitty monimutkaisuuden kuumaksi pisteeksi
(aihe 4.1, aihe 4.3) sisäisessä laatukatselmuksessa kahdeksantoista kuukautta
aiemmin. Kuumaa pistettä ei ollut koskaan priorisoitu korjattavaksi, koska
mitään virhettä ei ollut vielä sattunut tekemään riskistä konkreettista.
Viraston uudistettu prosessi painottaa nyt kuumiksi pisteiksi merkittyjä
alueita korkeammalle testaus- ja katselmointijärjestyksessä juuri tämän
osoitetun, validoidun yhteyden vuoksi sisäisten monimutkaisuussignaalien ja
todellisen karanneiden virheiden riskin välillä.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Karanneiden virheiden osuuden tarkan seurannan, vakavuuspainotuksen ja
juurisyyanalyysin tuotto on kyky kohdentaa laatuinvestointi sinne, missä se
todella vähentää asiakkaille koituvaa haittaa, sen sijaan että reagoitaisiin
erittelemättömään lukuun, joka sekoittaa vähäpätöiset ja vakavat ongelmat
umpimähkään. Edellä oleva tilausohjelmistoesimerkki osoittaa tämän selvästi:
raakalukuun reagointi olisi käynnistänyt laajan, kohdentamattoman
laatuhankkeen, kun taas vakavuuspainotettu, juurisyyanalyysiin perustuva
vastaus löysi tietyn, halvan ja kohdennetun korjauksen.

Omistamisen kokonaiskustannuksiin kuuluvat luokittelukuri (yhdenmukaiset
kriteerit, säännölliset auditoinnit) ja juurisyiden seurannan työ, jotka ovat
molemmat ensisijaisesti prosessi-investointeja eivätkä työkalukustannuksia.
Investointi maksaa itsensä takaisin suoraan vältettynä asiakashaittana ja
häiriöiden hoidon kustannuksina, kun laatutyö kohdennetaan karanneiden
virheiden todellisiin, validoituihin riskilähteisiin.

## Antimallit ja sudenkuopat

- **Raakavirhemäärän kohteleminen mittarina:** sekoittaa vähäpätöiset ja
  vakavat ongelmat ja hämärtää todellisen signaalin.
- **Epäyhtenäinen vakavuusluokittelu tiimien välillä:** tekee tiimien
  välisestä vertailusta merkityksetöntä ja houkuttelee sallivaan
  luokitteluun ajautumiseen.
- **Ei juurisyiden seurantaa:** muuttaa lukumäärän luvuksi, jolla ei ole
  diagnostista arvoa, ja jättää järjestelmälliset kuviot näkymättömiin.
- **Syyllistävä raportointikulttuuri:** turmelee datan vajaalla
  raportoinnilla ja sallivalla luokittelulla, juuri sitä kannustinaltistuksen
  riskiä, josta aihe 1.2 varoittaa.
- **Karanneiden virheiden jättäminen yhdistämättä sisäisiin laatusignaaleihin:**
  menettää tilaisuuden vahvistaa tai kumota osan 4 ennustavat mittarit
  todellisia tuloksia vasten.
- **Epäilyttävän nopea parannus ilman taustalla olevaa prosessimuutosta:**
  selkein merkki siitä, että luokittelukriteerit, ei todellinen riski,
  siirtyivät.

## Kypsyysmalli

- **Taso 1, Aloittava:** Karanneita virheitä seurataan, jos lainkaan,
  raakalukuna ilman vakavuuspainotusta tai juurisyyanalyysia.
- **Taso 2, Kehittyvä:** Jonkinlainen vakavuusluokittelu on olemassa, mutta
  standardit vaihtelevat tiimeittäin ja juurisyiden seuranta on epäyhtenäistä.
- **Taso 3, Vakioitu:** Vakavuusluokittelu on yhdenmukaistettu ja
  dokumentoitu koko organisaatiossa, ja juurisyiden luokittelua sovelletaan
  yhdenmukaisesti.
- **Taso 4, Hallittu:** Karanneet virheet jäljitetään järjestelmällisesti
  sisäisiin laatusignaaleihin niiden ennustearvon vahvistamiseksi, ja
  luokittelu auditoidaan säännöllisesti yhdenmukaisuuden varmistamiseksi.
- **Taso 5, Orkestroitu:** Organisaatio voi osoittaa konkreettisia,
  mitattavia vähennyksiä karanneiden virheiden osuudessa, jotka johtuvat
  kohdennetusta, juurisyihin perustuvasta laatuinvestoinnista ja jotka on
  validoitu sisäisiä laatusignaaleja vasten.

## Keskusteluideoita

1. Olisiko viime neljänneksen suurin karannut virheemme luokiteltu samalla tavalla toisessa tiimissä?
2. Mikä on yleisin karanneiden virheiden juurisyymme, ja korjaammeko sitä todella?
3. Onko karannut virhe koskaan jäljittynyt alueelle, jonka sisäiset mittarimme olivat jo merkinneet?
4. Tuntuuko tiimistämme turvalliselta raportoida ja luokitella rehellisesti virhe, jonka se aiheutti?
5. Mitä vakavuudella painotettu näkymä nykyisestä virhemäärästämme paljastaisi, minkä raakaluku kätkee?

## Keskeiset opit

- Karanneiden virheiden osuus on sisäisten laatukäytäntöjen **lopullinen
  tuloskortti**. Kasvava osuus vahvoista osan 4 mittareista huolimatta
  tarkoittaa, etteivät nuo mittarit havaitse sitä, mikä on tärkeää.
- **Paina vakavuudella** yhdenmukaisella, dokumentoidulla ja auditoidulla
  luokitteluasteikolla, älä koskaan pelkällä raakaluvulla.
- Seuraa **juurisyytä**, älä vain lukumäärää ja vakavuutta, jotta mittarista
  tulee aito diagnostiikkatyökalu.
- **Yhdistä karanneet virheet sisäisiin laatusignaaleihin** (monimutkaisuus,
  kattavuus, staattinen analyysi) sen selvittämiseksi, ovatko nuo signaalit
  todella ennustavia.
- Varo **syyllistävää kulttuuria**, joka turmelee raportoinnin ja
  luokittelun vajaalla raportoinnilla ja sallivalla ajautumisella.

## Lähteet ja lisälukemista

- *Site Reliability Engineering*, toimittaneet Betsy Beyer, Chris Jones,
  Jennifer Petoff ja Niall Richard Murphy (syyllistämätön
  jälkikatselmointikäytäntö, joka soveltuu virheiden juurisyyanalyysiin).
- *Accelerate: The Science of Lean Software and DevOps*, kirjoittaneet Nicole
  Forsgren, Jez Humble ja Gene Kim (toimituskäytäntöjen ja laatutulosten
  suhde).
- *Code Complete*, kirjoittanut Steve McConnell (virheiden luokittelun ja
  juurisyyanalyysin käytännöt).
- *The Field Guide to Understanding Human Error*, kirjoittanut Sidney Dekker
  (epäonnistumisten tutkinnan järjestelmälähtöinen, syyllistämätön kehystys).
