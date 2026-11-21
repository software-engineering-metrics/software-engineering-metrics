# 5.4 Ohjelmistotuotannon kustannukset ja yksikkötaloudellisuus

## Yleiskatsaus ja perustelut

Tämä aihe tekee osasta 5 nimenomaisesti taloudellisen: miten
ohjelmistotuotannon kustannukset ilmaistaan tavalla, jota talousväki voi
käyttää suoraan, ja miten rakennetaan **yksikkötaloudellisuus**, eli
kustannus ilmaistuna merkityksellistä tuotos- tai käyttöyksikköä kohti
läpinäkymättömän, koko osaston budjettirivin sijaan.
Ohjelmistotuotannon kustannus on yleensä suurin hallittavissa oleva
menoerä ohjelmistovetoisessa organisaatiossa, ja silti talousfunktio
ymmärtää sitä usein heikoiten: se raportoidaan yhtenä suurena lukuna, jonka
taustatekijöistä tai kasvun mukana skaalautumisesta on vähän näkyvyyttä.
Tämä aihe on olemassa tämän aukon sulkemiseksi, koska
ohjelmistotuotannon johtaja, joka ei osaa vastata kysymykseen "mitä tämän
järjestelmän pyörittäminen meille maksaa" tai "miten kustannuksemme
skaalautuvat kasvun myötä" konkreettisin taloudellisin termein, on
todellisessa epäedussa jokaisessa budjettikeskustelussa.

Aiheen suosittelema kuri, yksikkötaloudellisuus, tarkoittaa kustannuksen
ilmaisemista julkaisua, palveltua asiakasta, käsiteltyä tapahtumaa tai muuta
liiketoiminnalle todella tärkeää yksikköä kohti, ei pelkästään
henkilöstökustannusten tai pilvimenojen kokonaissummana. Tämä uudelleenkehystys
liittyy suoraan aiheen 1.3 tulokset tuotosten edelle -periaatteeseen:
laskeva kokonaiskustannus ei ole automaattisesti hyvä, jos se johtuu
harvempien asiakkaiden palvelemisesta, ja nouseva kokonaiskustannus ei ole
automaattisesti huono, jos se johtuu verrannollisesti paljon useampien
palvelemisesta. Yksikkötaloudellisuus tekee kustannustrendeistä
tulkittavia eikä vain näkyviä.

Suurille tiimeille tämän aiheen kuri muuttaa ohjelmistotuotannon talouden
mustasta laatikosta luettavaksi, hallittavaksi järjestelmäksi.
Suuryritykset käyttävät yksikkötaloudellisuutta vertaillakseen eri tuotteiden,
alustojen tai tiimien kustannustehokkuutta oikeudenmukaisella pohjalla.
Julkishallinnon organisaatiot käyttävät samaa kuria osoittaakseen
varainhoidon vastuullisuutta ja perustellakseen näyttöön perustuen
infrastruktuuri-investointeja, jotka laskevat palveltua kansalaista kohti
laskettua kustannusta ajan myötä.

## Keskeiset periaatteet

- **Kokonaiskustannus yksin ei ole tulkittavissa ilman nimittäjää.**
  Yksikkötaloudellisuus, kustannus merkityksellistä yksikköä kohti, muuttaa
  läpinäkymättömän luvun toimeenpantavaksi trendiksi.
- **Valitse yksikkö, joka heijastaa aitoa liiketoiminta- tai
  tehtäväarvoa**, ei mielivaltaista tai helposti pelattavaa nimittäjää.
- **Kustannuksella on useita osia: ihmiset, infrastruktuuri ja työkalut.**
  Seuraa niitä erikseen, koska jokaisella on eri kustannustekijä ja eri vipu.
- **FinOps-käytännöt tuovat pilvikustannuksiin saman tarkkuuden, jonka tämä
  kirja tuo toimitus- ja laatumittareihin.** Kohtele kustannusta
  mitattavana ja hallittavana, älä väistämättömänä, läpinäkymättömänä
  lähtötietona.
- **Laskeva kokonaiskustannus ei ole automaattisesti hyvä eikä nouseva
  automaattisesti huono**, ennen kuin on tarkistettu, mitä yksikkömitalle
  tapahtui samaan aikaan.

## Suositukset

### Valitse yksikkö, joka heijastaa todellista tuotettua arvoa, ei mielivaltaista nimittäjää

Valitse yksikkötaloudellisuuslaskelmaasi yksikkö, joka seuraa aidosti
liiketoiminta- tai tehtäväarvoa: kustannus palveltua asiakasta kohti,
kustannus käsiteltyä tapahtumaa kohti, kustannus julkaisua kohti tai julkisen
sektorin palvelussa kustannus käsiteltyä kansalaisasiointia kohti. Vältä
nimittäjää, jota on liian helppo paisuttaa suhdeluvun mairittelemiseksi,
kuten sisäistä, pitkälti harkinnanvaraista lukumäärää, joka ei vastaa mitään
aitoa ulkoista tuotettua arvoyksikköä.

### Erota ihmis-, infrastruktuuri- ja työkalukustannukset

Ohjelmistotuotannon kustannuksella on vähintään kolme erillistä osaa, joilla
on eri taustatekijät ja eri vivut: henkilöstökustannus (palkat, edut, lyhyellä
aikavälillä pitkälti kiinteä), infrastruktuurikustannus (pilvimenot, pitkälti
käytön mukana vaihtelevat ja suoraan optimoitavissa ohjelmistotuotannon
käytännöillä) sekä työkalu- ja lisenssikustannus (usein kiinteitä käyttäjäpaikka-
tai käyttötasokohtaisia kustannuksia). Seuraa näitä erikseen yhden
sekoitetun kokonaissumman sijaan, koska aidon kasvun mukana skaalautuvan
infrastruktuurin ajama kokonaiskustannuksen nousu vaatii hyvin erilaisen
vastauksen kuin sama nousu hallitsemattoman työkalusirpaleisuuden ajamana.

### Sovella FinOps-kuria erityisesti pilvi-infrastruktuurin kustannuksiin

**[FinOps](https://en.wikipedia.org/wiki/FinOps)** on kuri, joka tuo
taloudellisen vastuullisuuden vaihtelevaan pilvikulutukseen
ohjelmistotuotannon, talouden ja liiketoimintatiimien välisen
poikkitoiminnallisen yhteistyön kautta. Sovella sen ydinkäytäntöjä suoraan:
merkitse pilviresurssit tiimin ja palvelun mukaan kustannusten kohdistamista
varten, vertaa kulutusta budjettiin säännöllisessä rytmissä ja kohtele
infrastruktuurin kustannustehokkuutta (kustannus todellista käyttöyksikköä
kohti) ohjelmistotuotannon mittarina, jota kannattaa optimoida tietoisesti,
älä väistämättömänä, kiinteänä yleiskustannuksena, joka vain hyväksytään.

### Seuraa yksikkökustannuksen trendiä ajan myötä ja selvitä liike nimenomaisesti

Yksittäinen yksikkökustannuksen tilannekuva on vähemmän hyödyllinen kuin sen
trendi: laskeeko palveltua asiakasta kohti laskettu kustannus alustan
kypsyessä ja skaalautuessa (merkki aidoista tehokkuushyödyistä) vai nouseeko
se (merkki kertyvästä tehottomuudesta, korkeampaa ylläpitokustannusta ajavasta
teknisestä velasta tai palveltavien asiakkaiden jakauman siirtymästä
resurssivaltaisempiin segmentteihin). Selvitä merkittävä yksikkökustannuksen
trendin muutos nimenomaisesti sen sijaan, että raportoisit luvun ilman
selitystä.

### Yhdistä kustannusdata kirjan muihin teknisen velan ja laadun mittareihin

Nouseva infrastruktuuri- tai ylläpitokustannus yksikköä kohti on joskus suora,
mitattava seuraus kertyneestä teknisestä velasta (aihe 4.5) tai
monimutkaisuuden kuumien pisteiden lisääntymisestä (aihe 4.1, aihe 4.3):
tehottomat koodipolut, ylimääräinen infrastruktuuri ja huonosti optimoidut
kyselyt näkyvät lopulta koholla olevana yksikkökustannuksena. Käytä nousevaa
yksikkökustannusta yhtenä syötteenä, osan 4 koodin muuttuvuus- ja
monimutkaisuussignaalien rinnalla, velan priorisointikeskusteluun, koska
velkakohde, jolla on osoitettu, mitattava kustannusvaikutus, perustelee
korjausinvestoinnin vahvemmin kuin pelkkä määrittelemätön laatuvalitus.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Pelkän kokonaiskustannuksen raportointi | Yksinkertainen, vastaa sitä, miten budjetit yleensä kohdennetaan | Ei tulkittavissa ilman nimittäjää, kätkee tehokkuustrendit |
| Yksikkötaloudellisuus hyvin valitulla nimittäjällä | Tulkittavissa, toimeenpantava, vertailukelpoinen ajan ja tiimien välillä | Vaatii huolellisuutta aidosti merkityksellisen, vaikeasti pelattavan yksikön valinnassa |
| Sekoitettu kustannusraportointi (ihmiset, infrastruktuuri ja työkalut yhdessä) | Yksinkertainen yksi luku | Hämärtää, mikä tietty kustannustekijä muuttuu ja miksi |
| Eroteltu kustannusrakenne | Paljastaa oikean vivun tietylle kustannustrendille | Vaatii yksityiskohtaisempaa kustannusten kohdistamista ja seurantainfrastruktuuria |

Keskeinen jännite on **yksinkertaisuus versus toimeenpantavuus**.
Yksittäinen kokonaiskustannusluku on helppo raportoida ja vastaa sitä, miten
moni organisaatio jo kohdentaa budjettinsa, mutta se hämärtää sekä sen, mikä
ajaa kustannusmuutoksia, että sen, heijastavatko muutokset aitoa tehokkuutta
vai aitoa kasvua. Ratkaise jännite investoimalla tämän aiheen suosittelemaan
hieman monimutkaisempaan yksikkötaloudellisuus- ja osiin eroteltuun
raportointiin, koska tuloksena oleva toimeenpantavuus, tieto siitä, mitä
vipua vedetään kustannuksen liikkuessa, on vaivan arvoinen pienintä
mittakaavaa suuremmille organisaatioille.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Seuraammeko ohjelmistotuotannon kustannusta merkityksellistä yksikköä
   (asiakas, tapahtuma, julkaisu) kohti, vai vain läpinäkymättömänä
   kokonaissummana?** Jos olemassa on vain kokonaissumma, tunnista, mikä
   yksikkö tekisi kustannustrendistäsi aidosti tulkittavan, ja pohdi, mitä sen
   seuraamisen aloittaminen vaatisi.

2. **Pystymmekö erottamaan nykyisen kustannuksemme ihmis-, infrastruktuuri-
   ja työkaluosiin, ja tiedämmekö, mikä ajaa viimeaikaista muutosta?** Avaa
   todellinen kustannusjakauma, jos sellainen on, ja tarkista, onko se
   riittävän yksityiskohtainen vastaamaan tähän varmuudella.

3. **Olemmeko soveltaneet FinOps-merkintää ja kohdistamista
   pilvi-infrastruktuurimme kustannuksiin, vai onko se yksi, kohdistamaton
   rivi?** Jos kulutusta ei voi kohdistaa tiettyihin tiimeihin tai palveluihin,
   pohdi, miltä ensimmäinen askel aitoon kohdistamiseen näyttäisi.

4. **Onko yksikkökustannuksemme trendi liikkunut merkittävästi kumpaankaan
   suuntaan viime aikoina, ja tiedämmekö miksi?** Selvitä todellinen
   viimeaikainen liike, jos sellainen on, ja katso, voitko selittää sen
   varmuudella vai jääkö se arvoitukseksi.

5. **Korreloiko nykyinen infrastruktuurikustannustrendimme minkään osan 4
   teknisen velan tai monimutkaisuuden kuumien pisteiden signaalin kanssa?**
   Vertaa näitä tietolähteitä nimenomaisesti ja katso, ilmeneekö yhteys, joka
   voisi vahvistaa velan korjauksen liiketoimintaperustelua.

6. **Jos talousosaston sidosryhmä kysyisi huomenna "mitä meille maksaa
   palvella yksi lisäasiakas", osaisimmeko vastata varmuudella?** Tämä
   konkreettinen, käytännöllinen kysymys testaa, onko yksikkötaloudellisuutesi
   todella rakennettu ja valmis vai pelkkä teoreettinen tavoite.

## Sektorinäkökulma

**Startup-yritys.** Yksikkötaloudellisuus on erittäin tärkeää varhain, koska
sijoittajat ja perustajat tarvitsevat tietoa siitä, kulkeeko jokaisen
lisäasiakkaan palvelemisen kustannus kohti kestävyyttä vai liiketoimintamallia,
joka ei skaalaudu. Seuraa tätä jo hyvin varhain, vaikka karkeilla arvioilla,
sen sijaan että odottaisit, kunnes yritys on tarpeeksi suuri perustelemaan
muodollisen FinOps-työkalutuksen.

**Pieni yritys.** Pilvipalveluntarjoajan laskutusmittaristot antavat yleensä
riittävän perusnäkyvyyden kustannuksiin ilman erillistä FinOps-työkalutusta.
Tärkein kuri on valita järkevä yksikkö (kustannus asiakasta tai tapahtumaa
kohti) ja tarkistaa trendiä säännöllisesti sen sijaan, että katsoisi vain
kokonaislaskua erillään.

**Suuryritys.** FinOps-käytäntö ja eroteltu kustannusosien seuranta ovat
välttämättömiä tässä mittakaavassa, jossa pilvikulutus voi olla hyvin suuri,
usein liian vähän tarkasteltu budjettirivi, joka on levinnyt monen tiimin
kesken. Investoi asianmukaiseen kustannusten kohdistuksen merkintään ja
omaan kustannusten katselmointirytmiin, ja käytä yksikkötaloudellisuutta
kustannustehokkuuden oikeudenmukaiseen vertailuun eri tuotelinjojen tai
alustojen välillä.

**Julkishallinto.** Varainhoidon vastuullisuus ja osoitettavissa oleva
kustannustehokkuus ovat suoraan olennaisia budjettiperusteluissa ja julkisessa
vastuullisuudessa. Yksikkötaloudellisuus, joka ilmaistaan kustannuksena
palveltua kansalaista tai käsiteltyä tapahtumaa kohti, on budjettivaliokunnille
usein paljon vakuuttavampi ja tulkittavampi mittari kuin raaka
kokonaiskulutusluku, ja se tukee suoraan sellaisen infrastruktuuri-investoinnin
liiketoimintaperustelua, joka laskee yksikkökustannusta ajan myötä.

## Esimerkit

**Suuryritys.** Palveluna toimitettavan ohjelmistoyrityksen talousosasto oli
huolestunut kokonaispilvi-infrastruktuurikulutuksen noususta usean peräkkäisen
neljänneksen ajan ja oletti aluksi tehottomuutta tai hukkaa.
Yksikkötaloudellisuusanalyysi, kustannus aktiivista asiakasta kohti, osoitti
yksikkökustannuksen todellisuudessa laskeneen tasaisesti kokonaiskulutuksen
noususta huolimatta, koska asiakasmäärä kasvoi nopeammin kuin
infrastruktuurikustannus. Aito tehokkuusparannus oli jäänyt piiloon, kun
katsottiin vain kokonaiskulutusta. Uudelleenkehystys siirsi talouskeskustelun
kysymyksestä "miksi ohjelmistotuotanto kuluttaa enemmän" kysymykseen "miten
ylläpidämme tämän tehokkaan skaalautumisen", mikä oli olennaisesti
tuottavampi keskustelu ja vältti tarpeettoman ja mahdollisesti vahingollisen
säästökäskyn, joka olisi kohdistunut aidosti terveeseen, kasvun ajamaan
kulutukseen.

**Julkishallinto.** Osavaltion digitaalisten palveluiden viraston piti
perustella jatkuvaa pilvi-infrastruktuuri-investointia budjettivaliokunnalle,
joka vertasi kustannuksia korvattavaan vanhaan paikalliseen järjestelmään.
Yksikkötaloudellisuusanalyysi, kustannus käsiteltyä kansalaistapahtumaa kohti,
osoitti uuden pilvipohjaisen järjestelmän yksikkökustannuksen olevan
merkittävästi matalampi kuin vanhan järjestelmän oli ollut, vaikka nimellinen
kokonaiskulutus oli korkeampi, koska uusi järjestelmä käsitteli paljon
suuremman tapahtumamäärän samalla tai pienemmällä kokonaisinfrastruktuuri-
budjetilla. Tämä yksikkökustannusvertailu, vaikeammin tulkittavan
kokonaiskulutusvertailun sijaan, tuli keskeiseksi näytöksi onnistuneessa
perustelussa jatkuvalle ja laajenevalle pilvi-investoinnille.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Tarkan yksikkötaloudellisuuden tuotto on puolustettavissa oleva, tulkittava
vastaus kysymykseen, jonka jokainen talousosaston sidosryhmä lopulta esittää:
onko tämä kulutus tehokasta ja skaalautuuko se kestävästi. Edellä oleva
suuryritysesimerkki osoittaa riskin, jos tämä menee väärin: pelkkään
kokonaiskulutukseen perustuva näkymä oli lähellä käynnistää tarpeettoman ja
haitallisen säästökäskyn kulutukselle, joka yksikkökohtaisesti oli muuttumassa
tehokkaammaksi, ei tehottomammaksi.

Omistamisen kokonaiskustannuksiin kuuluvat kustannusten kohdistamisen
työkalut (FinOps-merkintäkäytännöt) ja analyyttinen kuri kustannusosien
erottamiseen ja yksikkötrendien seuraamiseen ajan myötä. Tämä investointi on
vaatimaton verrattuna riskiin tehdä merkittävä budjettipäätös, leikata
kulutusta, joka oli itse asiassa tehokasta, tai jättää havaitsematta kulutus,
josta oli aidosti tulossa tehotonta, pelkän puutteellisesti informoidun
kokonaiskustannusnäkymän perusteella.

## Antimallit ja sudenkuopat

- **Kokonaiskustannuksen raportointi ilman nimittäjää:** ei ole tulkittavissa
  ja kätkee, skaalautuuko kustannus tehokkaasti vai tehottomasti.
- **Helposti pelattavan tai mielivaltaisen yksikön valinta kustannuslaskentaan:**
  tuottaa suhdeluvun, joka mairittelee eikä informoi.
- **Ihmis-, infrastruktuuri- ja työkalukustannusten sekoittaminen yhdeksi
  luvuksi:** hämärtää, mikä tietty tekijä oikeasti muuttuu ja mikä vipu siihen
  vastaa.
- **Ei pilvikustannusten kohdistamista (FinOps-merkintä):** jättää
  infrastruktuurikulutuksen käytännössä hallitsemattomaksi ja vastuuttomaksi
  tiimi- tai palvelutasolla.
- **Reagointi kokonaiskustannuksen muutokseen yksikkötrendiä tarkistamatta:**
  voi käynnistää tarpeettoman säästökäskyn aidosti tehokasta, kasvun ajamaa
  kulutusta vastaan.
- **Kustannustrendien yhdistämättä jättäminen tekniseen velkaan tai
  monimutkaisuusdataan:** menettää kvantifioidun, vahvennetun perustelun velan
  korjausinvestoinnille.

## Kypsyysmalli

- **Taso 1, Aloittava:** Ohjelmistotuotannon kustannus raportoidaan vain
  läpinäkymättömänä kokonaissummana, ilman yksikkötaloudellisuutta tai
  osien erottelua.
- **Taso 2, Kehittyvä:** Jonkinlainen kustannusjakauma on olemassa, mutta
  yksikkötaloudellisuus on epäyhtenäistä ja pilvikustannusten kohdistaminen
  pitkälti puuttuu.
- **Taso 3, Vakioitu:** Yksikkötaloudellisuutta hyvin valitulla nimittäjällä
  seurataan yhdenmukaisesti, ja kustannus on eroteltu ihmis-, infrastruktuuri-
  ja työkaluosiin koko organisaatiossa.
- **Taso 4, Hallittu:** FinOps-kohdistus ja -katselmointikäytännöt on otettu
  käyttöön, ja yksikkökustannustrendejä selvitetään aktiivisesti ja
  yhdistetään tekniseen velkaan ja laatusignaaleihin.
- **Taso 5, Orkestroitu:** Organisaatio voi vastata luottavaisesti
  talousosaston sidosryhmien yksityiskohtaisiin yksikkökustannuskysymyksiin, ja
  kustannusdata ohjaa suoraan sekä ohjelmistotuotannon investointipäätöksiä
  että budjettiperusteluja korkeimmalla tasolla.

## Keskusteluideoita

1. Mikä yksikkö tekisi kustannustrendistämme aidosti tulkittavan, ja seuraammeko sitä?
2. Pystyisimmekö erottamaan viimeaikaisen kustannusmuutoksen ihmis-, infrastruktuuri- ja työkaluosiinsa?
3. Onko osa infrastruktuurikulutuksestamme tällä hetkellä kohdistamatta tiettyyn tiimiin tai palveluun?
4. Onko yksikkökustannuksemme trendi liikkunut viime aikoina, ja tiedämmekö miksi?
5. Missä nouseva yksikkökustannus voisi olla oire käsittelemättömästä teknisestä velasta?

## Keskeiset opit

- **Yksikkötaloudellisuus**, kustannus merkityksellistä arvoyksikköä kohti,
  muuttaa läpinäkymättömän kokonaiskustannusluvun tulkittavaksi,
  toimeenpantavaksi trendiksi.
- Valitse yksikkö, joka heijastaa **aitoa liiketoiminta- tai tehtäväarvoa**,
  ja vältä helposti pelattavaa tai mielivaltaista nimittäjää.
- Erota kustannus **ihmis-, infrastruktuuri- ja työkaluosiin**, koska
  jokaisella on eri tekijä ja eri vipu.
- Sovella **FinOps-kuria** erityisesti pilvi-infrastruktuurin kustannuksiin,
  kohdistusmerkinnät ja säännöllinen katselmointi mukaan lukien.
- Laskeva kokonaiskustannus **ei ole automaattisesti hyvä** eikä nouseva
  **automaattisesti huono**, ennen kuin yksikkötrendi on tarkistettu sen
  rinnalta.

## Lähteet ja lisälukemista

- *Cloud FinOps*, kirjoittaneet J.R. Storment ja Mike Fuller (perusteos
  FinOps-käytännöistä pilvikustannusten hallintaan).
- *Accelerate: The Science of Lean Software and DevOps*, kirjoittaneet Nicole
  Forsgren, Jez Humble ja Gene Kim (toimitustehokkuuden ja kustannuksen
  suhde).
- *Site Reliability Engineering*, toimittaneet Betsy Beyer, Chris Jones,
  Jennifer Petoff ja Niall Richard Murphy (kustannus nimenomaisena
  luotettavuustekniikan kompromissina).
- The FinOps Foundation's FinOps Framework, [finops.org](https://www.finops.org/)
  (käytännön ohjeistus ja kypsyysmalli pilven talousjohtamiseen).
