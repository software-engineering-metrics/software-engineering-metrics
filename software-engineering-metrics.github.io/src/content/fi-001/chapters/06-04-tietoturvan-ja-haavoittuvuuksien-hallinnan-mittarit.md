# 6.4 Tietoturvan ja haavoittuvuuksien hallinnan mittarit

## Yleiskatsaus ja perustelut

Tämä aihe päättää osan 6 laajentamalla saman luotettavuuskurin, jonka osa on
rakentanut, tavoitteenasetannan, suojakaiteiden parituksen ja rehellisen
häiriöraportoinnin, erilliseen mutta läheisesti liittyvään riskiin: ei
siihen, pettääkö järjestelmä itsestään, vaan siihen, saako joku sen pettämään
tai hyödyntääkö sitä tarkoituksella. **Haavoittuvuuksien hallinnan** mittarit
mittaavat, kuinka hyvin organisaatio löytää ja korjaa tietoturvaheikkoudet
ennen kuin niitä hyödynnetään: kuinka monta haavoittuvuutta on olemassa,
kuinka vakavia ne ovat ja ratkaisevasti, kuinka nopeasti ne korjataan
löytämisen jälkeen, koska tunnettu mutta korjaamaton haavoittuvuus on
pysyvä, kvantifioitavissa oleva riski, jonka organisaatio on valinnut
kantaa, joko tietoisesti tai laiminlyönnin kautta.

Aiheen keskeinen huoli rinnastuu suoraan aiheen 4.4 käsittelyyn staattisen
analyysin löydöksistä: haavoittuvuuksien raakalukumäärä on huono mittari,
joka sekoittaa vähäpätöiset ja kriittiset ongelmat, ja se on alttiina
täsmälleen samoille pelaamisen riskeille, määritelmän kaventamiselle,
vaientamiselle ja kynnysarvojen pelaamiselle, jotka aihe 1.2 kuvaa
yleisesti. Tietoturvamittarit vaativat tähän erityisenä lisänä
korjausajan seurannan vakavuuden mukaan, koska kuukausia korjaamattomana
oleva kriittinen haavoittuvuus on olennaisesti eri riski kuin sama
haavoittuvuus, joka on havaittu ja korjattu vuorokaudessa, ja pelkkä
lukumäärä ei kerro tätä.

Suurille tiimeille tietoturvamittareilla on seurauksia välitöntä teknistä
riskiä laajemmin: suuryritykset kohtaavat tietomurron sopimuksellisen ja
maineeseen liittyvän altistuksen, ja julkishallinnon organisaatiot kohtaavat
kansallisen turvallisuuden, oikeudelliset ja julkisen luottamuksen
seuraukset, jotka tekevät tietoturvamittareista aidosti yleisen edun asian,
ei pelkästään sisäisen ohjelmistotuotannon huolen. Tämä aihe käsittelee
haavoittuvuuksien hallintaa samalla tarkkuudella ja samalla suojakaiteiden
parituksen kurilla, jota kirja soveltaa alusta loppuun, koska tietoturvamittarit
ovat alttiina jokaiselle kirjan kuvaamalle pelaamisen riskille, ja panokset
ovat vastaavasti korkeammat, kun pelaaminen onnistuu.

## Keskeiset periaatteet

- **Korjausaika vakavuuden mukaan painaa enemmän kuin haavoittuvuuksien
  raakalukumäärä.** Kuukausia korjaamattomana oleva kriittinen ongelma on
  olennaisesti eri riski kuin sama ongelma, joka on havaittu ja korjattu
  nopeasti.
- **Tietoturvamittarit ovat alttiina samoille pelaamisen riskeille kuin
  staattisen analyysin löydökset** (aihe 4.4), ja panokset ovat korkeammat,
  kun pelaaminen onnistuu.
- **Vakavuusluokittelu tarvitsee ulkoiset, standardoidut kriteerit**
  aina kun mahdollista, ei pelkkää sisäistä arviota, joka voi ajautua
  sallivuuteen.
- **Nopeasti ilmoitettu ja korjattu haavoittuvuus on terveen prosessin merkki,
  ei piilotettava epäonnistuminen.** Ilmoittamisen rankaiseminen lannistaa
  raportoinnin, johon koko tämä järjestelmä nojaa.
- **Tietoturvavelka on teknisen velan laji** (aihe 4.5), ja sen tulee
  kilpailla priorisoidusta korjauskapasiteetista samalla nimenomaisella,
  kvantifioidulla perusteella.

## Suositukset

### Seuraa korjausaikaa vakavuuden mukaan ensisijaisena mittarina

Kirjaa jokaisesta löydetystä haavoittuvuudesta sen vakavuus (käyttäen
standardoitua asteikkoa, kuten [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System)
-pisteytystä, CVSS, missä se soveltuu) ja seuraa aikaa löytämisestä aitoon
korjaukseen, ei siihen, että tiketti suljetaan tai korjaus yhdistetään mutta
ei ole vielä julkaistu. Aseta nimenomaiset korjausaikatavoitteet
vakavuuden mukaan, yleensä päivinä kriittisille ongelmille ja viikkoina
vähemmän vakaville, ja seuraa tavoitteiden täyttymistä ensisijaisena
tietoturvan terveyden mittarina haavoittuvuuksien painottamattoman
raakalukumäärän sijaan.

### Käytä standardoitua vakavuuspisteytystä pelkän sisäisen arvion sijaan

Kun standardoitu ulkoinen pisteytysjärjestelmä kuten CVSS on saatavilla, käytä
sitä vakavuusluokittelun ensisijaisena perustana sen sijaan, että luottaisit
kokonaan sisäiseen, mahdollisesti epäyhtenäiseen arvioon. Tämä peilaa aiheen
5.1 karanneiden virheiden luokittelukuria ja aiheen 6.2 häiriöiden
luokittelukuria sovellettuna tässä erityisesti tietoturvaan, ja se vastustaa
samaa sallivaan ajautumiseen liittyvää riskiä, josta nuo aiheet varoittavat,
koska ulkoisesti ankkuroitua pistemäärää on vaikeampi hiljaa määritellä
uudelleen alaspäin kuin pelkästään sisäistä.

### Rakenna aidosti rankaisematon haavoittuvuuksien ilmoitus- ja sisäinen raportointikulttuuri

Sovella aiheen 6.2 syyllistämättömän jälkikatselmoinnin periaatetta suoraan
tietoturvaan: kehittäjää, joka löytää ja ilmoittaa itse aiheuttamansa
haavoittuvuuden, tai tutkijaa, joka ilmoittaa vastuullisesti ulkoisesti
löydetyn haavoittuvuuden, tulee kohdella arvokkaan palvelun tarjoajana, ei
epäonnistumista tunnustavana. Ilmoittamisen rankaiseminen, sisäisesti tai
ulkoisilta tutkijoilta, lannistaa luotettavasti juuri sen raportoinnin, johon
koko haavoittuvuuksien hallintajärjestelmä nojaa, ja ajaa todellisen riskin
maan alle hallitun korjausprosessin sijaan.

### Kohtele tietoturvavelkaa teknisen velan listan lajina

Sisällytä tunnetut, hyväksytyn riskin haavoittuvuudet, joita ei ole
tietoisesti vielä korjattu kilpailevien prioriteettien vuoksi, samaan näkyvään,
kvantifioituun tekniseen velkalistaan, joka on kuvattu aiheessa 4.5, samalla
korjauskustannuksen ja kantokustannuksen vertailun kehystyksellä. Tämä estää
tietoturvariskiä joko katoamasta näkymättömään, dokumentoimattomaan
"tiedämme siitä" -tilaan tai kilpailemasta epäreilusti ominaisuustyötä vastaan
ilman nimenomaista, kvantifioitua perustelua prioriteetilleen.

### Yhdistä haavoittuvuusmittarit altistuksen ja hyödynnettävyyden kontekstiin

Kaikki haavoittuvuudet, joilla on sama nimellinen vakavuuspistemäärä, eivät
kanna samaa todellista riskiä: kriittinen haavoittuvuus sisäisessä työkalussa,
jolla ei ole ulkoista verkkoaltistusta, on eri riski kuin sama nimellinen
vakavuus internetiin avoimessa palvelussa, joka käsittelee asiakasdataa.
Painota priorisointia mahdollisuuksien mukaan todellisella altistuksella ja
hyödynnettävyyden kontekstilla, ei pelkällä vakavuuspistemäärällä, jotta
korjauskapasiteetti keskittyy aidosti suurimman riskin kohteisiin ensin.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Haavoittuvuuksien raakalukumäärä | Yksinkertainen raportoida | Sekoittaa vähäpätöiset ja kriittiset ongelmat, helposti pelattavissa vaientamalla |
| Vakavuudella painotettu korjausajan seuranta | Heijastaa todellista riskialtistusta ajan yli | Vaatii kurinalaista, yhdenmukaista luokittelua ja seurantaa |
| Pelkkä sisäinen vakavuusarvio | Joustava, kontekstiin räätälöity | Altis sallivalle ajautumiselle ja epäyhtenäisyydelle tiimien välillä |
| Standardoitu ulkoinen pisteytys (esim. CVSS) ja kontekstipainotus | Yhdenmukainen, ulkoisesti ankkuroitu, kestää pelaamista | Vaatii lisäkontekstianalyysia aidosti tarkkaan priorisointiin |

Keskeinen jännite on **yhdenmukaisuus versus konteksti**. Puhtaasti
standardoitu pisteytys on yhdenmukainen ja pelaamista kestävä, mutta voi
ohittaa aidon kontekstin, altistuksen ja hyödynnettävyyden, joka ratkaisee
todellisen riskin. Puhtaasti kontekstuaalinen, sisäisesti arvioitu lähestymistapa
tavoittaa vivahteet mutta on altis samalle sallivan ajautumisen riskille, josta
kirja varoittaa jokaisen muun luokittelusta riippuvan mittarin kohdalla.
Ratkaise jännite ankkuroimalla standardoituun pisteytykseen yhdenmukaisena
lähtötasona ja soveltamalla sen päälle dokumentoitua, auditoitavaa
kontekstipainotusta, ei kumpaakaan ääripäätä yksin.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Seuraammeko korjausaikaa vakavuuden mukaan vai vain haavoittuvuuksien
   raakalukumäärää?** Avaa todellinen nykyinen mittarisi ja tarkista, erottaako
   se kuukausia korjaamattomana olleen kriittisen ongelman vuorokaudessa
   korjatusta, koska raakaluku kohtelee näitä hyvin eri tavoin riskialttiita
   tilanteita samoin.

2. **Käytämmekö standardoitua ulkoista vakavuuspisteytysjärjestelmää, vai
   perustuuko luokittelu pelkkään sisäiseen, mahdollisesti epäyhtenäiseen
   arvioon?** Jos pelkkään sisäiseen, pohdi, mitä CVSS:n kaltaisen
   standardin käyttöönotto muuttaisi nykyisessä luokittelukäytännössäsi.

3. **Tuntisiko kehittäjä, joka toi haavoittuvuuden ja ilmoitti siitä
   itse, olonsa turvalliseksi ilmoittaessaan, vai pelkäisikö hän rangaistusta?**
   Tämä on aiheen 6.2 syyllistämättömän kulttuurin kysymyksen suora
   tietoturvaversio, ja rehellisellä vastauksella on valtava merkitys sille,
   voiko haavoittuvuusdataasi ylipäätään luottaa.

4. **Onko meillä näkyvä, kvantifioitu lista tunnetuista, hyväksytyn riskin
   haavoittuvuuksista, vai muuttuuko "tiedämme siitä" -tila hiljaa
   näkymättömäksi ja käsittelemättömäksi ajan myötä?** Tarkista, seurataanko
   tietoturvavelkaasi samalla tarkkuudella kuin yleistä teknistä velkalistaasi
   (aihe 4.5).

5. **Huomioiko korjauksen priorisointimme todellisen altistuksen ja
   hyödynnettävyyden, vai nojaako se pelkästään nimelliseen
   vakavuuspistemäärään kontekstista riippumatta?** Valitse todellinen
   esimerkki, jossa kahdella nimellisesti samanvakavuisella haavoittuvuudella
   oli hyvin erilainen todellinen riski, ja pohdi, olisiko nykyinen
   prosessisi priorisoinut ne oikein.

6. **Onko haavoittuvuuden vakavuusluokitus koskaan ajautunut alaspäin ajan
   myötä ilman selvää perustetta?** Tämä peilaa määritelmillä pelaamisen
   kuviota, josta sekä aihe 1.2 että aihe 6.2 varoittavat. Auditoi otos
   viimeaikaisista luokitteluistasi tämän riskin osalta.

## Sektorinäkökulma

**Startup-yritys.** Muodolliset haavoittuvuuksien hallintaprosessit ovat usein
tarpeettomia hyvin varhain, mutta perustason automaattisen riippuvuusskannauksen
ja yksinkertaisen, rehellisen sisäisen raportointinormin omaksuminen alusta
alkaen maksaa vähän ja estää tietoturvavelan kertymisen näkymättömästi ennen
kuin tiimillä on kapasiteettia käsitellä sitä järjestelmällisesti.

**Pieni yritys.** Useimmat nykyaikaiset kehitysalustat sisältävät ilmaisen tai
edullisen automaattisen haavoittuvuusskannauksen riippuvuuksille. Ota se
käyttöön varhain ja seuraa korjausaikaa kaikelle kriittiseksi merkitylle,
vaikka ilman erillistä tietoturvatoimintoa tai hienostunutta työkalutusta.

**Suuryritys.** Yhdenmukainen, standardoitu vakavuuspisteytys ja aidosti
rankaisematon ilmoituskulttuuri ovat molemmat välttämättömiä ja molempien
ylläpito on vaikeampaa mittakaavassa, jossa epäyhtenäisyys kymmenien tiimien
välillä ja kulttuurin ajautuminen syyllisten etsintään vakavan häiriön jälkeen
ovat jatkuvia riskejä. Investoi erilliseen tietoturvan hallintotoimintoon
luokittelun yhdenmukaisuuden ylläpitämiseksi ja ilmoituskulttuurin
aktiiviseksi suojelemiseksi.

**Julkishallinto.** Tietoturvamittarit risteävät täällä usein suoraan
kansallisen turvallisuuden, sääntelyn vaatimustenmukaisuuden ja julkisen
luottamuksen kanssa, ja vakava, väärin hoidettu haavoittuvuus voi aiheuttaa
seurauksia tyypillistä yksityisen sektorin tietomurtoa kauas laajemmin.
Ylläpidä tarkkaa, ulkoisesti ankkuroitua vakavuusluokittelua, suojele
sisäistä ja ulkoista ilmoituskulttuuria aktiivisesti ja kohtele
tietoturvavelkaa tämän aiheen suosittelemalla avoimuudella ja
priorisointitarkkuudella, koska dokumentoimaton, hiljaa hyväksytty kriittinen
haavoittuvuus julkisessa infrastruktuurissa on aidosti vakava, auditoitavissa
oleva riski.

## Esimerkit

**Suuryritys.** Ohjelmistoyrityksen tietoturvatiimi oli vuosia raportoinut
johdolle vain haavoittuvuuksien raakalukumäärää, lukua, joka oli pysynyt
tasaisena ja antoi väärän vakauden tunteen. Tarkistettu vakavuudella
painotettu korjausaika-analyysi paljasti, että vaikka kokonaismäärä oli
tasainen, kriittisten haavoittuvuuksien korjaus kesti keskimäärin yli
yhdeksänkymmentä päivää, selvästi yli minkään kohtuullisen tavoitteen, koska
ne hävisivät joka suunnittelusyklissä ominaisuustyölle ilman omaa, suojattua
kapasiteettia. Tiukka seitsemän päivän korjaustavoite kriittisille
haavoittuvuuksille yhdessä suojatun tietoturvavelan korjauskapasiteetin
kanssa, joka peilasi aiheen 4.5 teknisen velan kohdennusmallia, laski
kriittisten haavoittuvuuksien keskimääräisen korjausajan alle viiteen
päivään kahdessa neljänneksessä.

**Julkishallinto.** Kansallinen infrastruktuurivirasto havaitsi ulkoisen
tietoturva-auditoinnin jälkeen, että sisäiset kehittäjät olivat
epävirallisesti välttäneet omasta koodistaan löytämiensä haavoittuvuuksien
ilmoittamista pelätessään sen näyttävän huonolta suorituskykyarvioinneissa,
selkeä rinnakkaisilmiö aiheen 6.2 syyllistämisen ajamaan häiriöiden liian
vähäiseen raportointiin. Virasto otti käyttöön nimenomaisen, julkisesti
viestityn käytännön, joka suojasi sisäisiä haavoittuvuuksien ilmoittajia
kaikilta suorituskykyseuraamuksilta ja jonka esikuvana oli suoraan
syyllistämätön häiriöihin reagoinnin käytäntö. Sisäiset haavoittuvuusilmoitukset
nousivat merkittävästi seuraavan vuoden aikana, tuloksen, jonka viraston
johto tulkitsi oikein todisteeksi parantuneesta havaitsemisesta ja
rehellisestä raportoinnista, ei koodin laadun heikkenemisestä, ja vältti
luonnollisen mutta virheellisen johtopäätöksen, että nouseva luku täytyy
tarkoittaa asioiden huonontuneen.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Tarkan, hyvin luokitellun ja rehellisesti raportoidun haavoittuvuuksien
hallinnan tuotto on vältetty tietomurtokustannus, joka vakavassa
tietoturvahäiriössä ylittää usein ennakoivan korjauksen kustannuksen monin
kerroin, sekä vältetty sääntelyyn, sopimuksiin ja maineeseen kohdistuva
vahinko. Edellä oleva ohjelmistoyritysesimerkki osoittaa täsmällisen
mekanismin: tietoturvavelka oli vuosia hiljaa hävinnyt priorisointikilpailun
ominaisuustyölle, juuri sillä tavalla, josta aihe 4.5 varoittaa teknisen
velan kohdalla yleisesti, kunnes suojattu korjauskapasiteetti korjasi sen
suoraan.

Omistamisen kokonaiskustannuksiin kuuluvat automaattiset skannaustyökalut,
tämän aiheen suosittelema suojattu korjauskapasiteetti ja kestävä
kulttuuri-investointi rankaisemattomaan ilmoituskäytäntöön. Tämä kustannus
on vaatimaton verrattuna vakavan, onnistuneesti hyödynnetyn haavoittuvuuden
kustannukseen, jonka ennakoiva, hyvin priorisoitu korjaus olisi havainnut ja
korjannut hyvissä ajoin ennen hyödyntämistä.

## Antimallit ja sudenkuopat

- **Vain haavoittuvuuksien raakalukumäärän seuranta:** sekoittaa
  vähäpätöiset ja kriittiset ongelmat ja antaa väärän vakauden tai kriisin
  tunteen todellisesta riskistä riippumatta.
- **Pelkkä sisäinen, standardoimaton vakavuusluokittelu:** altis sallivalle
  ajautumiselle ja epäyhtenäisyydelle tiimien välillä.
- **Haavoittuvuuksien ilmoittamisen rankaiseminen, sisäisen tai ulkoisen:**
  ajaa todellisen riskin maan alle hallitun korjausprosessin sijaan.
- **Tietoturvavelka ilman näkyvää, kvantifioitua listaa:** häviää
  priorisointikilpailun ominaisuustyölle oletuksena.
- **Priorisointi pelkän nimellisen vakavuuspistemäärän mukaan altistuksen ja
  hyödynnettävyyden kontekstia ohittaen:** ohjaa rajallisen korjauskapasiteetin
  väärin.
- **Nousevan haavoittuvuusilmoitusten määrän tulkitseminen laadun
  heikkenemisen todisteeksi tarkistamatta, parani ehkä raportointi
  itse:** aiheen 1.6 sekoittavan muuttujan ansan erityistapaus.

## Kypsyysmalli

- **Taso 1, Aloittava:** Haavoittuvuuksia seurataan, jos lainkaan,
  raakalukuna ilman vakavuuspainotusta, korjausajan seurantaa ja
  rankaisevalla ilmoituskulttuurilla.
- **Taso 2, Kehittyvä:** Jonkinlainen vakavuusluokittelu on olemassa, mutta
  standardit ovat epäyhtenäisiä eikä korjausaikaa seurata nimenomaisia
  tavoitteita vasten.
- **Taso 3, Vakioitu:** Standardoitua, ulkoisesti ankkuroitua
  vakavuuspisteytystä ja nimenomaisia korjausaikatavoitteita vakavuuden
  mukaan sovelletaan yhdenmukaisesti, aidosti rankaisemattomalla
  ilmoituskulttuurilla.
- **Taso 4, Hallittu:** Tietoturvavelkaa seurataan näkyvällä, kvantifioidulla
  listalla suojatulla korjauskapasiteetilla. Priorisointi huomioi altistuksen
  ja hyödynnettävyyden kontekstin, ei pelkkää vakavuutta.
- **Taso 5, Orkestroitu:** Organisaatio voi osoittaa konkreettisia,
  mitattavia vähennyksiä kriittisten haavoittuvuuksien korjausajassa ja voi
  osoittaa kestävän, luotetun ilmoituskulttuurin, joka tuottaa rehellistä,
  kattavaa haavoittuvuusdataa.

## Keskusteluideoita

1. Mikä on kriittisten haavoittuvuuksien nykyinen keskimääräinen korjausaikamme, ja täyttääkö se nimenomaisen tavoitteen?
2. Tuntisiko haavoittuvuuden tuonut kehittäjä olonsa turvalliseksi ilmoittaessaan siitä itse?
3. Onko meillä näkyvä, kvantifioitu lista tunnetusta, hyväksytyn riskin tietoturvavelasta?
4. Huomioiko korjausten priorisointimme todellisen altistuksen vai vain nimellisen vakavuuden?
5. Onko vakavuusluokitus koskaan ajautunut alaspäin ajan myötä ilman selvää perustetta?

## Keskeiset opit

- Seuraa **korjausaikaa vakavuuden mukaan**, ei haavoittuvuuksien
  raakalukumäärää, ensisijaisena tietoturvan terveyden mittarina.
- Käytä **standardoitua ulkoista vakavuuspisteytystä** (kuten CVSS)
  yhdenmukaisena lähtötasona, joka kestää pelkän sisäisen arvion
  houkuttelemaa sallivaa ajautumista.
- Rakenna aidosti **rankaisematon ilmoituskulttuuri**. Raportoinnin
  rankaiseminen ajaa todellisen riskin maan alle.
- Kohtele **tietoturvavelkaa teknisen velan lajina** (aihe 4.5), joka
  kilpailee reilusti suojatusta korjauskapasiteetista.
- Painota priorisointia **todellisella altistuksella ja hyödynnettävyydellä**,
  ei pelkällä vakavuuspistemäärällä.

## Lähteet ja lisälukemista

- FIRST.org's Common Vulnerability Scoring System (CVSS) specification: the
  standardized severity scoring framework referenced throughout this
  topic.
- OWASP Foundation resources on vulnerability management and secure
  software development lifecycle practice.
- *Site Reliability Engineering: How Google Runs Production Systems*,
  toimittaneet Betsy Beyer, Chris Jones, Jennifer Petoff ja Niall Richard
  Murphy (syyllistämättömän kulttuurin periaatteet, joita tämä aihe soveltaa
  tietoturvailmoituksiin).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management
  Planning*: authoritative guidance on vulnerability remediation practice.
