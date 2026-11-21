# 6.2 Häiriömittarit: havaitseminen, reagointi ja palautuminen

## Yleiskatsaus ja perustelut

Tämä aihe mittaa, mitä tapahtuu, kun aiheen 6.1 virhebudjetti kulutetaan
todellisessa vikatilanteessa: **häiriössä**, suunnittelemattomassa
tapahtumassa, joka heikentää tai keskeyttää palvelun. Neljä mittaria muodostaa
vakiosanaston sen mittaamiseen, kuinka hyvin organisaatio hoitaa tällaisen
tilanteen: **havaitsemisen keskimääräinen aika (MTTD)**, kuinka kauan
kestää, ennen kuin organisaatio huomaa jonkin olevan vialla;
**kuittaamisen keskimääräinen aika (MTTA)**, kuinka kauan kestää, ennen kuin
joku ottaa vastuun reagoinnista; **ratkaisun** tai **palautumisen
keskimääräinen aika (MTTR)**, kuinka kauan kestää, ennen kuin palvelu on
palautettu, sama käsite, jonka aihe 2.10 käsitteli erityisesti julkaisujen
aiheuttamille vioille, nyt yleistettynä mihin tahansa häiriöön syystä
riippumatta; sekä **häiriötiheys**, yksinkertaisesti se, kuinka usein
häiriöitä ylipäätään tapahtuu.

Aiheen keskeinen huoli, joka toistaa aiheen 2.10 käsittelyä muutosten
epäonnistumisprosentista, on se, että nämä luvut ovat vain niin luotettavia
kuin häiriöiden rehellistä raportointia ja luokittelua ympäröivä
organisaatiokulttuuri. Tiimillä, joka pelkää syytöksiä häiriöstä, on kaikki
kannustimet raportoida liian vähän, viivyttää kuittausta välttääkseen
"kellon käynnistymisen" tai luokitella vakava tapahtuma vähäiseksi omien
mittarien suojaamiseksi. **[Syyllistämätön](https://en.wikipedia.org/wiki/Just_culture)
jälkikatselmointi**, jota uranuurtettiin muun muassa Etsyssä ja joka
muodollistettiin Googlen SRE-kirjallisuudessa, on olemassa nimenomaan tämän
kannustimen poistamiseksi, ja tämä aihe käsittelee sitä luotettavan
häiriödatan edellytyksenä eikä valinnaisena kulttuurisena lisänä
mittarien päällä.

Suurille tiimeille häiriömittarit paljastavat, toimiiko organisaation
havaitsemis- ja reagointikyky, muun muassa aiheen 2.10 palautustyökalut,
todellisissa, vaihtelevissa olosuhteissa eikä vain siinä tietyssä
julkaisun aiheuttaman vian tilanteessa, jonka tuo aihe käsitteli. Kriittistä
infrastruktuuria pyörittävät suuryritykset ja julkishallinnon organisaatiot
tarvitsevat näitä mittareita sekä sisäisesti aidon toiminnan parantamisen
ajamiseksi että ulkoisesti osoittaakseen asiakkaille, sääntelijöille tai
yleisölle, että häiriöt hoidetaan pätevästi ja että tilanne paranee ajan
myötä.

## Keskeiset periaatteet

- **Syyllistämätön kulttuuri on luotettavan häiriödatan edellytys**, ei
  valinnainen lisä. Syytösten pelko turmelee raportoinnin, kuittausnopeuden ja
  vakavuusluokittelun yhtä lailla.
- **Havaitseminen, kuittaus ja ratkaisu ovat erillisiä vaiheita, joilla on
  erilaiset korjaukset.** Hidas kokonaispalautumisaika voi kätkeä hyvin
  erilaisia taustaongelmia sen mukaan, mikä vaihe on todella hidas.
- **Häiriötiheys ja MTTR ovat paritettu signaali**, kuten DORAn muutosten
  epäonnistumisprosentti ja palautumisaika (aihe 2.10): kumpikaan ei yksin
  kerro koko tarinaa.
- **Vakavuusluokittelu vaatii saman tarkkuuden kuin karanneiden virheiden
  luokittelu** (aihe 5.1): yhdenmukaiset, dokumentoidut kriteerit, ei
  tapauskohtaisia arvioita.
- **Jälkikatselmoinnin arvo on järjestelmällisessä oppimisessa, ei luvun
  tuottamisessa.** Mittari on hyvän käytännön sivutuote, ei sen tarkoitus.

## Suositukset

### Pilko häiriöihin reagoinnin aika erillisiin vaiheisiin

Mittaa ja raportoi havaitsemisaika (vian todellisesta alkamisesta siihen,
kun joku huomaa sen), kuittausaika (ilmoituksesta siihen, kun joku ottaa
vastuun) ja ratkaisuaika (vastuun ottamisesta aitoon palautumiseen)
erikseen, älä vain yhtenä, sekoitettuna kokonaissummana. Jokainen vaihe
osoittaa eri korjaukseen: hidas havaitseminen osoittaa valvonnan ja
hälytysten aukkoon, hidas kuittaus päivystysprosessin tai eskalaation
ongelmaan, ja hidas ratkaisu työkalujen, toimintaohjeiden tai
diagnostiikkakyvyn aukkoon (aihe 2.10 käsittelee tätä erityisesti
julkaisun aiheuttamille vioille).

### Rakenna ja suojele aidosti syyllistämätöntä jälkikatselmointiprosessia

**Syyllistämätön jälkikatselmointi** tutkii, mitä tapahtui ja miksi järjestelmä
salli sen tapahtua, ja välttää nimenomaisesti syyn osoittamista yksilölle
virheestä, jonka mikä tahansa kohtuullinen ihminen samoissa olosuhteissa,
samoilla tiedoilla, olisi uskottavasti voinut tehdä. Suojele tätä kuria
aktiivisesti: johdon esimerkki rankaisemattomista vastauksista häiriöihin,
nimenomainen kirjallinen käytäntö ja tapa kysyä "mikä järjestelmässämme
salli tämän" eikä "kuka teki tämän" ovat kaikki tarpeellisia, jatkuvia
investointeja, eivät kertaluonteinen käytäntölausunto.

### Luokittele vakavuus yhdenmukaisilla, dokumentoiduilla ja auditoiduilla kriteereillä

Sovella häiriöiden vakavuusluokitteluun samaa kuria, jota aihe 5.1 suosittelee
karanneille virheille: kiinteä, dokumentoitu asteikko todellisen asiakas- tai
liiketoimintavaikutuksen perusteella, jota sovelletaan yhdenmukaisesti
tiimien välillä ja joka auditoidaan ajoittain ajautumisen varalta.
Epäyhtenäinen luokittelu, jossa jotkut tiimit ovat anteliaita ja jotkut
tiukkoja, tekee koko organisaation häiriödatasta yhtä epäluotettavan
vertailuun kuin epäyhtenäisesti luokiteltu virhedata olisi.

### Seuraa häiriötiheyttä ja MTTR:ää yhdessä, ei koskaan erikseen

Paraneva MTTR yhdessä nousevan häiriötiheyden kanssa voi viitata tiimiin, joka
tulee paremmaksi palojen sammuttamisessa samalla kun järjestelmän
perusluotettavuus todellisuudessa heikkenee. Laskeva häiriötiheys yhdessä
huononevan MTTR:n kanssa voi viitata siihen, että harvinaisemmat mutta
vakavammat ja vaikeammin diagnosoitavat viat korvaavat tiheät vähäiset.
Katselmoi molemmat yhdessä, täsmälleen osan 2 DORA-mittarien nopeuden ja
vakauden parituskurin mukaisesti, rehellisen yhdistetyn kuvan saamiseksi.

### Poimi ja seuraa järjestelmällisiä toimenpiteitä jälkikatselmoinneista, ei vain mittareita

Jälkikatselmointiprosessin todellinen arvo on sen tuottamat konkreettiset,
järjestelmälliset toimenpiteet: puuttuva hälytys lisätty, toimintaohje
parannettu, yksittäinen vikaantumispiste poistettu. Seuraa näitä toimenpiteitä
valmistumiseen asti samalla kurilla kuin aiheen 4.5 teknisen velan listaa,
koska jälkikatselmointi, joka tuottaa oivalluksia mutta ei jatkotoimia,
tuhlaa organisaation oppimisen, jonka talteen ottamiseksi prosessi on
olemassa.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Sekoitettu, yksittäinen häiriöihin reagoinnin ajan mittari | Yksinkertainen raportoida | Kätkee, mikä tietty vaihe, havaitseminen, kuittaus vai ratkaisu, on todellinen ongelma |
| Vaiheisiin pilkotut häiriömittarit | Diagnostinen, osoittaa suoraan oikeaan korjaukseen | Vaatii kunkin vaiheen siirtymän huolellisempaa instrumentointia |
| Syyllistävä häiriökatselmointi | Tuntuu vastuulliselta, tyydyttää halun osoittaa vastuu | Turmelee tulevan raportoinnin rehellisyyden ja korjaa harvoin todellista järjestelmällistä syytä |
| Syyllistämätön jälkikatselmointikäytäntö | Tuottaa rehellistä dataa ja aitoja järjestelmällisiä korjauksia | Vaatii jatkuvaa kulttuuri-investointia ja johdon kuria ylläpitääkseen |

Keskeinen jännite on **yksilön vastuun vetovoima versus rehellisen
raportoinnin käytännön tarve**. Yksilön syyllistäminen häiriön jälkeen voi
tuntua tyydyttävältä ja näyttää päättäväiseltä johtajuudelta, mutta se
turmelee luotettavasti jokaisen tulevan häiriön datan, koska ihmiset
raportoivat liian vähän, viivyttävät kuittausta tai luokittelevat vakavuuden
väärin, kun he pelkäävät henkilökohtaisia seurauksia. Ratkaise jännite
syyllistämättömän käytännön hyväksi tietoisesti ja johdonmukaisesti ja
ymmärrä, että aito vastuu tulee vian sallineen järjestelmän korjaamisesta, ei
sen yksilön rankaisemisesta, joka sattui olemaan paikalla, kun vika tapahtui.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Pilkommeko häiriöihin reagoinnin ajan havaitsemisen, kuittauksen ja
   ratkaisun vaiheisiin, vai seuraammeko vain yhtä sekoitettua lukua?** Jos
   olemassa on vain sekoitettu luku, valitse viimeaikainen merkittävä häiriö
   ja yritä rekonstruoida vaihejakauma jälkikäteen nähdäksesi, mitä se olisi
   paljastanut.

2. **Uskoisiko tiimimme aidosti jälkikatselmointiprosessimme olevan
   syyllistämätön, vai muovaako seurausten pelko yhä sitä, miten häiriöistä
   raportoidaan ja keskustellaan?** Kysy tämä suoraan ja rehellisesti.
   Ilmoitettu syyllistämätön käytäntö, jota ei todella eletä, ei tuota
   luotettavaa dataa.

3. **Luokittelisivatko kaksi eri tiimiä saman häiriön vakavuuden samalla
   tavalla?** Valitse oikea, tulkinnanvarainen menneisyyden häiriö ja pyydä
   eri tiimien edustajia luokittelemaan se itsenäisesti, ja vertaa sitten
   tuloksia.

4. **Katselmoimmeko häiriötiheyttä ja MTTR:ää yhdessä, vai saako toinen
   enemmän huomiota kuin toinen?** Tarkista todellinen raportointikäytäntösi
   ja katselmoinnit tämän parituksen osalta, aivan kuten aihe 2.10 suosittelee
   DORAn vakausmittareille.

5. **Kuinka suuri osa jälkikatselmointien toimenpiteistä viimeisten kuuden
   kuukauden ajalta on todella saatu valmiiksi?** Jos et tällä hetkellä seuraa
   tätä, se aukko kannattaa nimetä. Jälkikatselmointiprosessi, jonka
   toimenpiteiden valmistumisaste on matala, tuottaa oivalluksia ilman
   jatkotoimia.

6. **Onko syytösten pelko koskaan saanut jonkun viivyttämään häiriön
   raportointia tai kuittausta?** Tämä on epämiellyttävä mutta tärkeä
   kysymys. Rehellinen "kyllä, ja tässä on mitä tapahtui" on häiriöprosessisi
   terveydelle paljon arvokkaampi kuin refleksinomainen "ei".

## Sektorinäkökulma

**Startup-yritys.** Häiriöihin reagointi on pienessä tiimissä usein
pakosta epämuodollista, eikä muodollinen vaiheisiin pilkkominen ole alussa
välttämätöntä. Varhain omaksuttava tapa on syyllistämättömät keskustelunormit
ensimmäisestä häiriöstä alkaen, koska varhain syntyneet kulttuuritavat ovat
paljon helpompia ylläpitää kuin jälkikäteen korjata, kun syyllistävä kuvio on
päässyt juurtumaan.

**Pieni yritys.** Yksinkertainen, yhteinen häiriöloki, vaikka epämuodollinen,
perustason vakavuusluokittelulla ja lyhyellä syyllistämättömällä
retrospektiivillä kaikesta merkittävästä, tuo suurimman osan tämän aiheen
hyödystä ilman hienostunutta työkalutusta tai erillistä
häiriönhallinta-alustaa.

**Suuryritys.** Yhdenmukaisen vakavuusluokittelun ja aidon, kestävän
syyllistämättömän kulttuurin ylläpito on molempia vaikeampaa mittakaavassa, ja
molemmat ovat välttämättömiä luotettavalle, vertailukelpoiselle häiriödatalle
kymmenien tiimien välillä. Investoi dokumentoituihin luokittelukriteereihin,
ajoittaiseen auditointiin ja johdon aktiiviseen esimerkkiin syyllistämättömästä
reagoinnista, koska kulttuurin ajautuminen syyllistämiseen hiipii yleensä
vähitellen sisään ilman tietoista, jatkuvaa vastapainetta.

**Julkishallinto.** Julkisiin palveluihin tai kriittiseen infrastruktuuriin
vaikuttavat häiriöt joutuvat usein ulkoisen tarkastelun, median huomion tai
muodollisen tutkinnan kohteeksi, mikä luo vahvan paineen syyllisten etsintään,
ja se voi suoraan heikentää sisäistä syyllistämätöntä käytäntöä, jos sitä ei
hallita aktiivisesti. Ylläpidä selkeää sisäistä syyllistämätöntä kuria
aitoa järjestelmällistä oppimista varten, erillään mistä tahansa ulkoisesta
vastuuprosessista, joka voi seurata vakavaa häiriötä, ja viesti ero selkeästi
henkilöstölle.

## Esimerkit

**Suuryritys.** Maksuyrityksen ohjelmistotuotannon kulttuurissa häiriöt oli
vuosia epävirallisesti nähty asiana, jonka kuittaamista kannatti minimoida,
jotta ei näyttäisi vastuulliselta. Tämä johti johdonmukaisesti huonoihin
havaitsemis- ja kuittausaikoihin, jotka johto aluksi katsoi johtuvan riittämättömästä
valvontatyökalutuksesta. Kulttuurinen muutos kohti aidosti
syyllistämätöntä jälkikatselmointia, mukaan lukien johdon julkinen ja
täsmällinen nopean, rehellisen häiriön kuittauksen kehuminen pelkän nopean
ratkaisun kehumisen sijaan, tuotti mitattavan parannuksen sekä havaitsemis- että
kuittausaikaan kahdessa neljänneksessä. Se paljasti, että alkuperäinen
pullonkaula oli ollut kulttuurinen, syytösten pelko, eikä tekninen,
riittämätön työkalutus, kuten alun perin oletettiin.

**Julkishallinto.** Julkisen liikenteen viraston käyttökeskus oli
historiallisesti luokitellut lähes jokaisen palveluhäiriön sisäisessä
häiriölokissaan "vähäiseksi", kuvio, jonka uusi turvallisuusjohtaja piti
epäilyttävänä, koska kenttähenkilöstö valitti epävirallisesti jatkuvasti
vakavista toistuvista ongelmista. Tutkinta paljasti, että "vähäinen"
luokittelu vältti raskaan muodollisen raportointiprosessin, jota vaadittiin
korkeammista vakavuuksista, ja loi tahattoman kannustimen luokitella liian
alas. Virasto yksinkertaisti muodollisia raportointivaatimuksiaan kaikille
vakavuuksille ja suojasi henkilöstöä nimenomaisesti syytöksiltä rehellisestä
vakavuuden raportoinnista. Myöhemmät häiriötiedot osoittivat tarkemman ja
huomattavasti korkeamman aidosti merkittävien häiriöiden määrän, mikä antoi
johdolle vihdoin rehellisen kuvan infrastruktuuri-investointien
priorisoimiseen.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Aidosti syyllistämättömien, hyvin luokiteltujen ja vaiheisiin pilkottujen
häiriömittarien tuotto on rehellistä dataa, joka todella ajaa
järjestelmällistä parantamista, eikä lohdullista mutta väärää kuvaa, jonka
tuottavat pelon ajama liian vähäinen raportointi tai väärä luokittelu. Edellä
oleva maksuyritysesimerkki osoittaa tämän konkreettisesti: kulttuurinen
korjaus, ei työkaluinvestointi, ratkaisi sen, minkä johto oli virheellisesti
diagnosoinut tekniseksi havaitsemisongelmaksi.

Omistamisen kokonaiskustannukset ovat enimmäkseen kulttuuri- ja
prosessi-investointia: johdon kestävä sitoutuminen syyllistämättömään
käytäntöön, dokumentoidut ja auditoidut vakavuusluokittelukriteerit ja kuri
seurata jälkikatselmoinnin toimenpiteitä valmistumiseen asti. Tämä investointi
maksaa vähemmän kuin vaihtoehto: häiriömittariohjelma, joka tuottaa
varmasti väärää dataa, koska pelko on turmellut jokaisen sen syötteen.

## Antimallit ja sudenkuopat

- **Syyllistävä häiriökatselmointi:** turmelee raportoinnin rehellisyyden,
  kuittausnopeuden ja vakavuusluokittelun jokaisessa tulevassa häiriössä.
- **Vain sekoitetun vasteaikaluvun seuranta:** kätkee, mikä tietty vaihe,
  havaitseminen, kuittaus vai ratkaisu, on todellinen ongelma.
- **Epäyhtenäinen vakavuusluokittelu tiimien välillä:** tekee koko
  organisaation häiriödatasta epäluotettavan vertailuun.
- **Häiriötiheyden ja MTTR:n katselmointi erikseen:** ohittaa yhdistetyn,
  rehellisen kuvan, jonka paritettu signaali antaa.
- **Jälkikatselmointiprosessi, joka tuottaa oivalluksia mutta ei valmistuneita
  toimenpiteitä:** tuhlaa organisaation oppimisen, jonka talteen ottamiseksi
  prosessi on olemassa.
- **Ilmoitettu syyllistämätön käytäntö, jota johto ei todella elä:** tuottaa
  saman pelon ajaman datan turmeltumisen kuin avoimesti syyllistävä kulttuuri.

## Kypsyysmalli

- **Taso 1, Aloittava:** Häiriöihin reagointi on epämuodollista,
  raportointi epäyhtenäistä ja syyllistävä kulttuuri estää aktiivisesti
  rehellisen raportoinnin.
- **Taso 2, Kehittyvä:** Jonkinlaista häiriöiden seurantaa on, mutta
  vakavuusluokittelu on epäyhtenäistä ja syyllistämätön käytäntö on
  ilmoitettu mutta sitä ei eletä yhdenmukaisesti.
- **Taso 3, Vakioitu:** Vaiheisiin pilkottuja häiriömittareita
  yhdenmukaisella, dokumentoidulla vakavuusluokittelulla seurataan koko
  organisaatiossa, ja jälkikatselmointikäytäntö on aidosti syyllistämätön.
- **Taso 4, Hallittu:** Häiriötiheyttä ja MTTR:ää katselmoidaan yhdessä,
  jälkikatselmoinnin toimenpiteitä seurataan valmistumiseen asti ja
  luokittelu auditoidaan ajoittain yhdenmukaisuuden varmistamiseksi.
- **Taso 5, Orkestroitu:** Organisaatiolla on osoitettu, kestävä historia
  syyllistämättömästä käytännöstä, joka tuottaa rehellistä dataa ja aitoja
  järjestelmällisiä korjauksia, ja häiriömittarit ohjaavat suoraan ja
  luotettavasti luotettavuusinvestointien päätöksiä.

## Keskusteluideoita

1. Kestäisikö jälkikatselmointiprosessimme rehellisen kokeen siitä, onko se aidosti syyllistämätön?
2. Mikä on viimeaikaisen hitaimman häiriömme vaihejakauma: havaitseminen, kuittaus, ratkaisu?
3. Luokittelisivatko kaksi tiimiä viimeisimmän merkittävän häiriömme vakavuuden samalla tavalla?
4. Kuinka suuri osa viimeaikaisten jälkikatselmointiemme toimenpiteistä on todella saatu valmiiksi?
5. Onko syytösten pelko koskaan muovannut sitä, miten häiriöstä raportoitiin tai keskusteltiin tiimissämme?

## Keskeiset opit

- **Syyllistämätön jälkikatselmointikulttuuri on edellytys** luotettavalle
  häiriödatalle. Syytösten pelko turmelee raportoinnin, kuittausnopeuden ja
  luokittelun yhtä lailla.
- Pilko vasteaika **havaitsemisen, kuittauksen ja ratkaisun** vaiheisiin, joista
  jokainen osoittaa eri korjaukseen.
- Luokittele vakavuus **yhdenmukaisilla, dokumentoiduilla ja auditoiduilla
  kriteereillä**, aiheen 5.1 karanneiden virheiden kurin mukaisesti.
- Katselmoi **häiriötiheyttä ja MTTR:ää yhdessä**, ei koskaan erikseen, sama
  parituskuri kuin DORAn vakausmittareissa.
- Seuraa **jälkikatselmoinnin toimenpiteitä valmistumiseen asti**. Mittari on
  hyvän käytännön sivutuote, ei sen tarkoitus.

## Lähteet ja lisälukemista

- *Site Reliability Engineering: How Google Runs Production Systems*,
  toimittaneet Betsy Beyer, Chris Jones, Jennifer Petoff ja Niall Richard
  Murphy (syyllistämätön jälkikatselmointikäytäntö ja häiriömittarit).
- *The Site Reliability Workbook*, toimittaneet Betsy Beyer, Niall Richard
  Murphy, David K. Rensin, Kent Kawahara ja Stephen Thorne (käytännön ohjeita
  häiriöihin reagointiin ja jälkikatselmointiin).
- *The Field Guide to Understanding Human Error*, kirjoittanut Sidney Dekker
  (perusteos järjestelmälähtöisen, syyllistämättömän vikatutkinnan puolesta).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy
  Engineering Blog (2012): varhainen, vaikutusvaltainen kuvaus
  syyllistämättömästä käytännöstä ohjelmistojen käytössä.
