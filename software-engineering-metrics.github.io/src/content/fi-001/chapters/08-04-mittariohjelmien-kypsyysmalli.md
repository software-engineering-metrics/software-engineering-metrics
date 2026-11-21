# 8.4 Mittariohjelmien kypsyysmalli

## Yleiskatsaus ja perustelut

Jokainen kirjan osien 1–7 aihe päättyy omaan viisitasoiseen
[kypsyysmalliinsa](https://en.wikipedia.org/wiki/Capability_Maturity_Model),
joka on rajattu kyseisen aiheen mittariperheeseen.
Tämä aihe tekee jotain muuta: se astuu askeleen taaksepäin ja kysyy, miltä
kypsyys näyttää mittariohjelmassa kokonaisuutena, eli organisaation kyvyssä,
joka tuottaa, hallitsee ja toimii kaikkien näiden yksittäisten mittarien
perusteella yhdessä. Organisaatio voi olla tasolla 4 yksittäisten
DORA-mittarien kypsyydessä ja silti tasolla 1 ohjelman kokonaiskypsyydessä,
jos sillä on esimerkiksi erinomainen instrumentointi mutta ei hallintaa
(aihe 1.4), tai erinomaiset yksittäiset mittarit mutta pelon ajama
käyttöönotto (aihe 8.3), joka on turmellut taustalla olevan datan riippumatta
siitä, kuinka hyvin kukin mittari suunniteltiin.

Tämän aiheen malli rakentuu viiden ulottuvuuden varaan, jotka leikkaavat
jokaisen kirjan käsittelemän yksittäisen mittariperheen läpi: hallinta ja
omistajuus (aihe 1.4), instrumentoinnin laatu (aihe 1.5), tulosten ja
tuotosten tasapaino (aihe 1.3, aihe 7.4), kulttuurinen luottamus (aihe 8.3) ja
jatkuva parantaminen (kirjan alussa aiheessa 1.1 vahvistettu poisto- ja
uudistuskuri). Organisaation ohjelman kokonaiskypsyys on realistisesti näiden
viiden ulottuvuuden minimi, ei keskiarvo, sillä vakava heikkous missä tahansa
yhdessä, erityisesti kulttuurisessa luottamuksessa, voi heikentää kaikkien
muiden vahvuuksien arvoa, täsmälleen kuten aihe 8.3 suoraan väitti.

Suurille tiimeille tämä koottu malli antaa johdolle yhden, rehellisen
välineen organisaation itsearviointiin, joka on erillinen mutta täydentää
kirjan aihe kerrallaan tarjoamia kypsyystarkistuksia. Suuryritykset, jotka
vertailevat mittarien kypsyyttä liiketoimintayksiköiden välillä, ja
julkishallinto, joka raportoi ohjelman kypsyyttä valvontaelimille, hyötyvät
molemmat tästä yhdestä, läpileikkaavasta arvioinnista sen sijaan, että niiden
pitäisi itse yhdistää neljäkymmentäviisi erillistä aihetason kypsyyslukemaa
johdonmukaiseksi kokonaiskuvaksi.

## Keskeiset periaatteet

- **Ohjelman kypsyys on ulottuvuuksien minimi, ei keskiarvo.** Vakava heikkous
  kulttuurisessa luottamuksessa heikentää vahvuutta kaikkialla muualla.
- **Viisi läpileikkaavaa ulottuvuutta ovat hallinta, instrumentointi,
  tulostasapaino, kulttuurinen luottamus ja jatkuva parantaminen.** Jokainen
  ulottuvuus kokoaa yhteen langat monesta yksittäisestä aiheesta.
- **Tämä malli täydentää eikä korvaa yksittäisiä aihetason
  kypsyysmalleja.** Käytä molempia yhdessä täydellisen kuvan saamiseksi.
- **Itsearvioinnin tulee olla rehellinen ja täsmällinen, ei tavoitteellinen.**
  Pisteytä, missä todella olet, konkreettisen näytön perusteella, ei sitä,
  missä aiot olla.
- **Tasolta toiselle siirtyminen vaatii harkittua investointia**, ei pelkkää
  ajan kulumista. Kypsyys ei kerry automaattisesti.

## Suositukset

### Arvioi jokainen viidestä ulottuvuudesta erikseen konkreettisen näytön perusteella

Hallinnan osalta tarkista, onko jokaisella seurauksellisella mittarilla
nimetty omistaja ja dokumentoitu peruskirja (aihe 1.4). Instrumentoinnin
osalta tarkista, tulevatko mittarit mahdollisuuksien mukaan automatisoiduista
lähteistä itseraportoinnin sijaan (aihe 1.5). Tulostasapainon osalta laske
tulospainotteisten ja tuotospainotteisten mittarien todellinen suhde
ensisijaisissa mittaristoissasi (aihe 7.4). Kulttuurisen luottamuksen
osalta arvioi rehellisesti, onko käyttöönottohistoriaasi koskaan kuulunut
mittarin väärin hoidettu, rankaiseva käyttö ja miten siihen puututtiin
(aihe 8.3). Jatkuvan parantamisen osalta tarkista, onko organisaatiollasi
dokumentoitu historia sellaisten mittarien poistamisesta, jotka eivät enää
ansainneet paikkaansa (aihe 1.1). Pisteytä jokainen ulottuvuus erikseen ennen
niiden yhdistämistä.

### Ota ulottuvuuksien minimi rehelliseksi kokonaispisteeksesi

Vastusta kiusausta laskea viiden ulottuvuuden pisteiden keskiarvoa
yhdeksi, imartelevammaksi yhdistelmäpisteeksi. Ohjelma, jolla on erinomainen
instrumentointi (taso 4) mutta heikko kulttuurinen luottamus (taso 1), ei ole
missään mielekkäässä mielessä tason 2 tai 3 ohjelma. Heikko ulottuvuus
heikentää aktiivisesti vahvojen arvoa, sillä epäluotettavaa, pelon ajaman
pelaamisen turmelemaa dataa ei pelasta se, että se on kerätty erinomaisella
instrumentoinnilla. Raportoi minimi rehellisesti, vaikka se tuottaa
vähemmän imartelevan kokonaiskuvan kuin keskiarvo.

### Käytä tätä mallia aihetason mallien rinnalla, älä niiden sijaan

Tämä koottu malli vastaa kysymykseen "kuinka kypsä kokonaisohjelmamme on".
Osien 2–8 yksittäiset aihetason mallit vastaavat kysymykseen "kuinka kypsä
käytäntömme on tämän tietyn mittarin osalta". Käytä molempia yhdessä:
koottua mallia sen priorisointiin, mikä läpileikkaava ulottuvuus tarvitsee
eniten investointia, ja aihetason malleja sen tunnistamiseen, mitkä
yksittäiset mittariperheet tarvitsevat eniten huomiota kyseisen ulottuvuuden
sisällä.

### Palaa arviointiin kiinteällä rytmillä, ei vain kriisin laukaisemana

Kirjan johdonmukaisen hallintakurin (aihe 1.4) mukaisesti arvioi ohjelman
kypsyys uudelleen säännöllisellä rytmillä, vuosittain on yleistä, eikä vain
silloin, kun kriisi (havaittu pelaamistapaus, uskottavuutta vahingoittava
julkinen raportti) pakottaa kysymyksen esiin. Ohjelma, joka tarkastelee omaa
kypsyyttään vain reaktiivisesti, menettää tilaisuuden havaita ja korjata
heikkenevä ulottuvuus ennen kuin se tuottaa todellisen, kalliin tapauksen.

### Kohtele matalaa pistemäärää rehellisesti investoinnin lähtökohtana, ei hylkäävänä arvosanana

Aiheen 1.1 koko kirjalle vahvistaman diagnostisen, ei arvioivan, kehystyksen
mukaisesti käytä matalaa kypsyyspistettä missä tahansa ulottuvuudessa
harkitun investointisuunnitelman lähtökohtana (aiheen 8.5
käyttöönottotiekartta on suora seuraava askel), ei tuomiona, jota pitäisi
hävetä. Useimmat organisaatiot löytävät rehellisesti arvioituna todellisia
heikkouksia jostain tästä mallista. Tuottava vastaus on kohdennettu
investointi, ei puolustautuminen pistemäärää vastaan.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Viiden ulottuvuuden pisteiden keskiarvo | Tuottaa yhden, yksinkertaisen, imartelevamman luvun | Kätkee kriittisen heikkouden yhdessä ulottuvuudessa, joka heikentää muita |
| Ulottuvuuksien minimin käyttö | Rehellinen, toimintaan johtava, tunnistaa oikein todellisen rajoitteen | Voi tuntua lannistavalta, jos yksi ulottuvuus jää selvästi muista jälkeen |
| Vain aihetason mallien käyttö | Yksityiskohtainen, mittarikohtainen ohjeistus | Ohittaa ohjelman kokonaisterveyden läpileikkaavan näkymän |
| Vain tämän kootun mallin käyttö | Yksinkertainen, korkean tason | Ohittaa täsmällisen, toimintaan johtavan yksityiskohdan, jonka aihetason mallit tarjoavat |

Keskeinen jännite on **yksinkertaisuus versus rehellisyys**, joka toistaa aiheen
5.5 varoituksen valheellisen tarkasta yksittäisestä luvusta. Keskiarvoistettu
pistemäärä on yksinkertaisempi ja mukavampi raportoida, mutta se kätkee
aktiivisesti ohjelmasi kokonaisluotettavuuden ja arvon todellisen rajoitteen.
Ratkaise jännite rehellisyyden hyväksi: raportoi minimi ja käytä sekä tätä
koottua mallia että yksittäisiä aihetason malleja yhdessä saadaksesi
täydellisen, tarkan ja toimintaan johtavan kuvan.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Mihin tasoon kukin viidestä ulottuvuudestamme, hallinta,
   instrumentointi, tulostasapaino, kulttuurinen luottamus ja jatkuva
   parantaminen, pisteytyy rehellisesti ja erikseen arvioituna?** Käy jokainen
   ulottuvuus läpi nimenomaisesti konkreettisen näytön eikä vaikutelman
   perusteella, ennen kuin yhdistät ne kokonaisarvioksi.

2. **Mikä on heikoin ulottuvuutemme, ja vastaako se käsitystämme ohjelmamme
   kokonaisterveydestä, vai paljastaako se jotain, mitä emme olleet aiemmin
   nimenneet suoraan?** Matala pistemäärä esimerkiksi kulttuurisessa
   luottamuksessa voi heikentää luottamusta dataan, joka muuten näyttää
   teknisesti erinomaiselta.

3. **Olemmeko keskiarvoistaneet vahvuutemme ja heikkoutemme imartelevammaksi
   kokonaiskuvaksi sen sijaan, että raportoisimme heikoimman ulottuvuutemme
   todellisena rajoitteena?** Ole rehellinen siitä, miten organisaatiosi on
   aiemmin puhunut omasta mittarikypsyydestään.

4. **Milloin arvioimme viimeksi kokonaisohjelmamme kypsyyden muodollisesti
   uudelleen, ja laukaisiko sen kriisi vai harkittu, säännöllinen rytmi?**
   Jos vain kriisi, keskustelkaa siitä, miltä säännöllinen arviointirytmi
   näyttäisi jatkossa.

5. **Miltä kohdennettu investointi heikoimpaan ulottuvuuteemme näyttäisi
   konkreettisesti seuraavalla vuosineljänneksellä?** Siirry suoraan
   arvioinnista toimintaan ja yhdistä tämän aiheen diagnostiikka aiheen 8.5
   käyttöönottotiekarttaan.

6. **Miten itsearviomme vertautuisi organisaatiomme ulkopuolisen henkilön
   rehelliseen ulkoiseen arvioon?** Tämä kysymys testaa, voisiko sisäinen
   arviomme itse olla altis osalle samasta optimistisesta vinoumasta,
   josta kirja on varoittanut kauttaaltaan. Sitä kannattaa tarkistaa
   ajoittain aidosti ulkopuolisella näkökulmalla.

## Sektorinäkökulma

**Startup-yritys.** Muodollinen viiden ulottuvuuden arviointi on todennäköisesti
tarpeeton hyvin pienessä mittakaavassa, jossa epävirallinen tietoisuus
kattaa yleensä suurimman osan siitä, mitä tämä malli paljastaisi.
Varhain omaksuttava tapa on yksinkertaisesti olla rehellinen erityisesti
kulttuurisesta luottamuksesta, sillä nuoren yrityksen varhainen
mittarikulttuuri luo perustan, jota on paljon vaikeampi muuttaa, kun
organisaatio on kasvanut merkittävästi.

**Pieni yritys.** Yksinkertainen, rehellinen, epävirallinen läpikäynti
viidestä ulottuvuudesta kerran vuodessa, vaikka ilman muodollista
pisteytystä, tavoittaa suurimman osan aiheen arvosta tarvitsematta
jäsenneltyä arviointiprosessia tässä mittakaavassa.

**Suuryritys.** Tämä koottu malli on erityisen arvokas mittarikypsyyden
vertailuun reilusti monen liiketoimintayksikön välillä, sillä aihe kerrallaan
tehtävä vertailu kymmenien tiimien yli olisi kömpelö. Käytä sitä
priorisoimaan organisaation laajuista investointia siihen ulottuvuuteen,
jossa heikkous on laajimmin yksiköiden yli.

**Julkishallinto.** Dokumentoitu, rehellinen kypsyyden itsearviointi tällä
koottulla mallilla on aidosti hyödyllinen tuotos ohjelman tarkkuuden
osoittamiseen valvontaelimelle, edellyttäen että arviointi tehdään rehellisesti
eikä tavoitteellisesti. Harkitse itsearvioinnin määräajoin tehtävää ulkoista
katselmointia, erityisesti kulttuurisen luottamuksen ulottuvuudelle, jota on
vaikeinta arvioida tarkasti puhtaasti sisäisestä näkökulmasta.

## Esimerkit

**Suuryritys.** Logistiikkateknologiayrityksen alkuperäinen itsearviointi
pisteytti sen instrumentointiulottuvuuden tasolle 4 (automatisoitu, kattava
datan hankinta putkista ja järjestelmistä) mutta kulttuurisen luottamuksen
ulottuvuuden tasolle 1. Syynä oli kaksi vuotta aiemmin tapahtunut
käsittelemätön mittarin väärinkäyttötapaus, jota ei ollut koskaan suoraan
tunnustettu tai korjattu (toistaa suoraan aiheen 8.3 julkishallinnon
esimerkin). Johdon alkuperäinen vaisto oli keskiarvoistaa nämä kunnioitettavaksi
tason 2 tai 3 kokonaiskuvaksi. Tämän aiheen minimiin perustuvan pisteytyksen
rehellisempi soveltaminen tunnisti oikein kulttuurisen luottamuksen koko
ohjelman arvon todellisena rajoitteena, sillä jopa erinomainen
instrumentointi tuotti dataa, johon insinöörit, jotka tiesivät aiemmasta
tapauksesta, eivät edelleenkään täysin luottaneet tai raportoineet
rehellisesti. Kohdennettu investointi nimenomaan kulttuurisen luottamuksen
korjaamiseen aiheen 8.3 ohjeiden mukaisesti asetettiin etusijalle lisäinstrumentoinnin
investoinnin edelle suoraan tämän rehellisen, minimiin perustuvan arvioinnin
seurauksena.

**Julkishallinto.** Kansallinen tilastovirasto, joka teki ensimmäisen
muodollisen kypsyyden itsearviointinsa tällä kootulla mallilla osana laajempaa
teknologian hallinnan katselmusta, havaitsi hallintaulottuvuutensa
pisteytyvän hyvin (selkeä omistajuus, dokumentoidut peruskirjat) mutta
tulostasapainoulottuvuutensa huonosti. Valtaosa seuratuista mittareista oli
tuotos- ja aktiivisuuspohjaisia, vaikka osan 7 argumentti tulospainotuksesta
oli ymmärretty hyvin älyllisesti viraston teknisessä johdossa. Tämä
rehellinen, täsmällinen löydös, epämääräisen yleisen tunteen "meidän pitäisi
mitata enemmän tuloksia" sijaan, antoi viraston seuraavalle
investointisuunnitelmalle (aihe 8.5) konkreettisen, näyttöön perustuvan
lähtökohdan, ja viraston valvontalautakunnalle tehdyssä jatkoraportoinnissa
viitattiin nimenomaisesti tähän kypsyysarviointiin uudelleen suunnatun
mittari-investointistrategian perusteena.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Rehellisen, minimiin perustuvan kypsyyden itsearvioinnin tuotto on
mittariohjelman arvon todellisen rajoitteen oikea tunnistaminen sen sijaan,
että investoidaan lisää jo vahvaan ulottuvuuteen, kun heikko jatkaa koko
ohjelman luotettavuuden heikentämistä. Täsmälleen tätä mallia molemmat yllä
olevat esimerkit havainnollistavat. Tämä kohdentava vaikutus on mallin
ensisijainen arvo: se ohjaa rajalliset parannusinvestoinnit sinne, missä ne
aidosti siirtävät koko ohjelman kypsyyttä, sen sijaan että ne menisivät sinne,
missä investointi sattuu olemaan helpointa tai tutuinta.

Omistamisen kokonaiskustannukset (TCO) ovat itse arviointityö, vaatimaton ja
määräaikainen. Sitä punnitaan sitä riskiä vastaan, että jatketaan
investointia jo vahvaan ulottuvuuteen, kun käsittelemätön heikko ulottuvuus,
erityisesti kulttuurinen luottamus, jatkaa hiljaa kaiken muun ohjelman
rakentaman arvon turmelemista.

## Antimallit ja sudenkuopat

- **Ulottuvuuspisteiden keskiarvoistaminen imartelevammaksi yhdistelmäksi:**
  kätkee ohjelman kokonaisarvon todellisen rajoitteen.
- **Pelkästään tavoitteellinen arviointi, joka perustuu ilmoitettuun
  linjaukseen todellisen käytännön sijaan:** tuottaa epätarkan, liian
  optimistisen kuvan.
- **Tämän kootun mallin käyttö aihetason mallien korvikkeena niiden
  täydentäjän sijaan:** menettää täsmällisen, toimintaan johtavan
  yksityiskohdan, jonka nuo yksittäiset mallit tarjoavat.
- **Uudelleenarviointi vain silloin, kun kriisi pakottaa kysymyksen esiin:**
  menettää tilaisuuden havaita ja korjata heikkenevä ulottuvuus ennakoivasti.
- **Matalan pistemäärän kohtelu hylkäävänä arvosanana investoinnin
  lähtökohdan sijaan:** kutsuu puolustautumiseen kirjan kauttaaltaan
  suosittelemaa tuottavaa, diagnostista vastausta sen sijaan.
- **Aidon ulkopuolisen näkökulman hakematta jättäminen itsearvioinnista:**
  riskinä, että sama optimistinen vinouma, josta kirja varoittaa kauttaaltaan,
  vaikuttaa itse arviointiin.

## Kypsyysmalli

- **Taso 1, Aloittava:** Muodollista läpileikkaavaa arviointia ei ole.
  Yksittäisiä mittariperheitä voidaan arvioida erikseen, mutta ohjelman
  kokonaisterveyttä ei tarkastella.
- **Taso 2, Kehittyvä:** Ohjelman vahvuuksista ja heikkouksista on jonkin
  verran epävirallista tietoisuutta, mutta jäsenneltyä viiden ulottuvuuden
  arviointia ei ole tehty.
- **Taso 3, Vakioitu:** Jäsennelty, rehellinen, minimiin perustuva viiden
  ulottuvuuden arviointi tehdään konkreettisen näytön perusteella
  organisaation laajuisesti.
- **Taso 4, Hallittu:** Arviointi toistetaan säännöllisellä rytmillä, ja sen
  löydökset ohjaavat suoraan ja johdonmukaisesti kohdennettuja
  investointiprioriteetteja.
- **Taso 5, Orkestroitu:** Organisaatiolla on osoitettu, pitkäaikainen
  rehellisen itsearvioinnin käytäntö ulkoinen määräaikainen katselmointi
  mukaan lukien, ja se voi osoittaa tiettyjä investointipäätöksiä, joita
  arvioinnin löydökset suoraan ohjasivat.

## Keskusteluideoita

1. Mikä on rehellinen, näyttöön perustuva pisteemme jokaisessa viidessä ulottuvuudessa juuri nyt?
2. Mikä ulottuvuus on todellinen rajoitteemme, ja vastaako se vaistoamme?
3. Olemmeko koskaan keskiarvoistaneet pisteemme imartelevammaksi kuvaksi kuin minimi näyttäisi?
4. Milloin arvioimme viimeksi muodollisesti uudelleen, ja oliko se ennakoivaa vai kriisilähtöistä?
5. Mitä rehellinen ulkoinen katselmointi itsearvioinnistamme todennäköisesti paljastaisi?

## Keskeiset opit

- Ohjelman kypsyys kattaa viisi läpileikkaavaa ulottuvuutta: **hallinta,
  instrumentointi, tulostasapaino, kulttuurinen luottamus ja jatkuva
  parantaminen**.
- Kokonaiskypsyys on **ulottuvuuksien minimi, ei keskiarvo**. Heikkous
  kulttuurisessa luottamuksessa heikentää vahvuutta kaikkialla muualla.
- Käytä tätä koottua mallia **kirjan yksittäisten aihetason kypsyysmallien
  rinnalla, älä niiden sijaan**.
- **Arvioi uudelleen säännöllisellä rytmillä** sen sijaan, että odotat, kunnes
  kriisi pakottaa kysymyksen esiin.
- Kohtele matalaa pistemäärää **rehellisenä investoinnin lähtökohtana**, ei
  hylkäävänä arvosanana, kirjan diagnostisen kehystyksen mukaisesti.

## Lähteet ja lisälukemista

- *Capability Maturity Model Integration (CMMI)*, Software Engineering
  Institute (yleinen kypsyysmallimenetelmä, josta tämän aiheen
  lähestymistapa ammentaa rakenteellista inspiraatiota).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (tutkimuspohja yksittäisille aihetason
  kypsyysmalleille, jotka tämä koottu malli kokoaa yhteen).
- *Measuring and Managing Performance in Organizations*, by Robert D.
  Austin (mittariohjelman terveyden ja toimintahäiriöiden organisaatioarviointi).
- *The Fifth Discipline: The Art and Practice of the Learning
  Organization*, by Peter M. Senge (järjestelmätason organisaation
  itsearviointi ja jatkuva parantaminen).
