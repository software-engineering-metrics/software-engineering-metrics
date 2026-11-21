# 7.1 Generatiivisen tekoälyn paradigmanmuutos

## Yleiskatsaus ja perustelut

Suurimman osan ohjelmistotuotannon historiasta koodin kirjoittaminen oli
niin hidasta ja vaivalloista, että raaka tuotosten määrä, kirjoitetut rivit,
tehdyt commitit ja julkaistut ominaisuudet, korreloi ainakin löyhästi
todellisen vaivan ja epätäydellisesti todellisen arvon kanssa. Korrelaatio ei
ollut koskaan täydellinen. Aiheessa 3.4 on kokonainen aihe siitä, miksi
aktiivisuusmittarit johtavat harhaan jo tekoälyä edeltävässä maailmassa.
Korrelaatio oli silti riittävän vahva, jotta moni organisaatio rakensi
mittariohjelmansa kätkettyyn oletukseen, että enemmän tuotettua koodia
tarkoittaa yleensä enemmän tehtyä työtä. [Generatiivisen tekoälyn](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
koodausassistentit ovat murtaneet tämän oletuksen ratkaisevasti: työkalu
tuottaa nyt sekunneissa suuren, uskottavan näköisen koodimäärän murto-osalla
aiemmista kustannuksista, eikä tuo määrä kerro yksinään juuri mitään siitä,
toimiiko koodi, onko se ylläpidettävää tai palveleeko se mitään todellista
tarkoitusta.

Tämän aiheen keskeinen väite on, että kyse on paradigmanmuutoksesta eikä
vähittäisestä työkalumuutoksesta. Paradigmanmuutos muuttaa sen, mitä nykyiset
mittavälineesi oikeasti mittaavat, ei vain sitä, mitä arvoja ne raportoivat.
Nopeusmittari mittaa nopeutta edelleen, vaikka auton moottori vaihdetaan.
Useat kirjan mittarit eivät selviä tästä siirtymästä yhtä siististi.
Julkaisutiheys (aihe 2.10) voi nousta, koska tekoäly nopeutti aidosti
arvokasta työtä tai koska tekoäly teki triviaalin helpoksi tuottaa paljon
pieniä, vähäarvoisia muutoksia. Luku yksin ei enää erota näitä kahta,
vaikka se osasi tehdä niin suurimmaksi osaksi, varovaisuutta noudattaen,
ennen. Sama logiikka pätee vielä voimakkaammin raakoihin commit-määriin,
koodiriveihin ja pull requestien määrään. Aihe 3.4 varoitti jo kaikista
näistä yksittäisinä mittareina, ja nyt riski vahvistuu koskemaan myös tiimi-
ja organisaatiotasoa.

Suurille tiimeille muutos tuli nopeammin kuin useimpien organisaatioiden
mittauskäytännöt ehtivät mukautua, ja käyttöönoton nopeuden sekä mittauksen
mukautumisen välinen kuilu on se, missä tämän osan todellinen riski on.
Suuryritykset, jotka jatkavat tekoälyä edeltävän ajan aktiivisuusmittarien
raportointia ilman muutoksia, saattavat juhlia mittaria, joka on huomaamatta
lakannut korreloimasta arvon kanssa. Julkishallinnon, joka arvioi tekoälytyökalujen
investointeja, tarvitsee selkeän käsityksen siitä, mitkä mittarit pysyvät
luotettavina ja mitkä eivät, ennen kuin se tekee hankinta- tai
politiikkapäätöksiä vanhentuneiden mittausoletusten varassa.

## Keskeiset periaatteet

- **Tämä on paradigmanmuutos siinä, mitä mittarit mittaavat, ei vähittäinen
  muutos.** Jotkin nykyiset mittarit ovat huomaamatta lakanneet tarkoittamasta
  sitä, mitä ne ennen tarkoittivat.
- **Tuotosten määrä ei ollut koskaan luotettava arvon sijaismittari, ja nyt
  se on käynyt aktiivisesti epäluotettavaksi.** Aiheen 3.4 varoitus oli aina
  oikea, ja tämä muutos tekee sen sivuuttamisesta paljon kalliimpaa.
- **Tekoälyn käyttöönoton nopeuden ja mittauksen mukautumisen nopeuden välinen
  kuilu on todellinen riski.** Organisaatiot ottavat työkalut käyttöön
  nopeammin kuin ne harkitsevat mittarinsa uudelleen.
- **Muutos ei vaikuta kaikkiin kirjan mittareihin yhtä paljon.** Tulosmittarit
  (osa 5) kestävät muutoksen paljon paremmin kuin aktiivisuus- ja raa'at
  tuotosmittarit.
- **Muutos on alan laajuinen ja jatkuva, ei kertaluonteinen säätö.** Varaudu
  jatkuvaan muutokseen työkalujen ja niiden käyttöönoton mallien kehittyessä.

## Suositukset

### Auditoi nykyinen mittarijoukko erikseen tekoälyajan pätevyyden kannalta

Käy läpi nykyinen mittaristosi ja kysy jokaisesta mittarista suoraan: näyttäisikö
tekoälyavustusta paljon käyttävä tiimi, joka ei tuota todellista arvoa
aiempaa enempää, parantunutta lukemaa tällä mittarilla. Aktiivisuuslaskurit,
commit-tiheys ja raaka julkaisutiheys (ilman paritettua vakausta valvovaa
suojakaidetta, aihe 2.10) ovat alttiimpia kuin muut. Osan 5 tulosmittarit,
karanneiden virheiden osuus, ominaisuuksien käyttöönotto ja liiketoimintatulokset,
kestävät muutoksen suhteellisen hyvin, sillä ne mittaavat todellista tulosta
eivätkä sen tuottaneen toiminnan määrää.

### Tarkastele erityisesti julkaisutiheyttä ja läpimenoaikaa, ja kiinnitä suojakaiteisiin tavallista enemmän huomiota

Aihe 2.10 varoitti jo korvaamispelaamisesta, jossa merkityksellinen työ
pilkotaan triviaaleiksi julkaisuiksi lukumäärän paisuttamiseksi. Generatiivinen
tekoäly tekee juuri tästä pelaamisen tavasta dramaattisesti halvemman ja
helpomman tuottaa, jopa tahattomasti, koska tekoälyavusteiset triviaalit
muutokset ovat nyt lähes ilmaisia luoda. Kiristä muutosten
epäonnistumisprosentin suojakaidetta (aihe 2.10) suhteessa siihen, kuinka
voimakkaasti tiimi on ottanut tekoälyavusteisen kehityksen käyttöön, ja seuraa
julkaisujen kokotrendejä entistä tarkemmin.

### Kohtele koodikatselmoinnin kapasiteettia uutena, kriittisenä pullonkaulana

Jos tekoälyavustus kasvattaa dramaattisesti katselmoitavaksi ehdotetun koodin
määrää, katselmointivaihe (aihe 2.9), joka on jo usein toimitusputken suurin
odotusajan lähde, muuttuu entistä terävämmäksi rajoitteeksi. Katselmoija, jota
pyydetään arvioimaan paljon suurempi määrä tekoälyn tuottamaa koodia entiseen
tahtiin, joko hidastaa putkea tai heikentää katselmoinnin syvyyttä. Tämä on
täsmälleen aiheen 2.9 varoittama leimasinriski, nyt huomattavasti suuremman
paineen alla. Seuraa katselmoinnin syvyyttä ja laadun suojakaiteita erityisen
tarkasti, kun tekoälyn tuottaman koodin määrä kasvaa.

### Älä oleta, että tekoälyn tuottamalla koodilla on sama virheprofiili kuin ihmisen kirjoittamalla

Varhaiset todisteet ja ammattilaisten kokemukset viittaavat siihen, että
tekoälyn tuottamalla koodilla voi olla eri virheprofiili kuin ihmisen
kirjoittamalla: uskottavan näköistä mutta hienovaraisesti virheellistä
logiikkaa, itsevarmasti tuotettua mutta väärää reunatapausten käsittelyä tai
koodia, joka läpäisee pintapuolisen katselmoinnin, koska se näyttää
idiomaattiselta ja järkevältä, mutta jota ei ole oikeasti pohdittu ymmärtäen
järjestelmän erityistä kontekstia. Kohtele tätä hypoteesina, joka kannattaa
testata aktiivisesti omaa karanneiden virheiden dataasi vastaan (aihe 5.1)
merkitsemällä virheet sen mukaan, oliko lähtökoodi pääosin tekoälyn
tuottamaa. Älä oleta, että historialliset virheosuuksien suhteet, joiden
varaan organisaatiosi on rakentanut laatukäytäntönsä, pätevät edelleen
sellaisinaan.

### Päivitä mittarien peruskirja ja hallintaprosessi erikseen tätä muutosta varten

Aiheen 1.4 hallintakurin mukaisesti älä anna muutoksen tapahtua
mittariohjelmallesi passiivisesti. Palaa mittarien peruskirjaan
tietoisesti ja nimeä, mitkä mittarit tarvitsevat uusia suojakaiteita, mitkä
on poistettava käytöstä ja mitkä pysyvät luotettavina. Tee tämä harkittuna
hallintapäätöksenä eikä tarkastelemattomana ajautumisena. Dokumentoi
perustelut, sillä juuri tällaisesta määritelmällisestä ja kontekstuaalisesta
muutoksesta aihe 1.4 varoittaa, että se voi muuten tapahtua äänettömästi ja
paljastua vasta paljon myöhemmin.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Raportoi tekoälyä edeltäviä mittareita muuttamatta | Ei häiriötä, tuttu raportointi | Riskinä juhlia mittareita, jotka ovat huomaamatta lakanneet korreloimasta arvon kanssa |
| Koko mittarijoukon auditointi ja harkittu uudistus | Palauttaa luotettavan mittauksen | Vaatii todellista analyyttistä työtä ja organisaatiomuutoksen hallintaa |
| Aktiivisuus- ja tuotosmittarien täysi hylkääminen | Poistaa alttiimman riskin suoraan | Menettää osan perustellusti hyödyllisestä kontekstisignaalista (aiheen 3.4 varaus) |
| Suojakaiteiden kiristäminen ilman täyttä auditointia | Nopeampi toteuttaa | Voi ohittaa mittarit, joiden alttius on vähemmän ilmeinen kuin selvimmissä tapauksissa |

Keskeinen jännite on **mittauksen jatkuvuus versus mittauksen pätevyys**.
Organisaatiot haluavat ymmärrettävästi jatkaa tuttujen mittarien raportointia
tutuilla tavoilla, koska mittariohjelman muuttaminen aiheuttaa todellisia
organisaatiokustannuksia ja häiriötä. Mutta sellaisen mittarin raportoinnin
jatkaminen, joka on huomaamatta lakannut mittaamasta sitä, mitä se ennen
mittasi, on häiriötä pahempaa: se on aktiivista harhaanjohtamista. Ratkaise
jännite kohtelemalla tätä juuri sellaisena harkittuna, dokumentoituna
hallintamuutoksena, jota aihe 1.4 kuvaa. Se on lyhyellä aikavälillä
häiritsevä mutta välttämätön, jotta organisaation mittarit pysyvät
rehellisinä.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Näyttäisikö tekoälyavustusta paljon käyttävä tiimi, joka ei tuota
   todellista arvoa enempää, parantunutta lukemaa jokaisella mittaristomme
   mittarilla?** Käy mittarit läpi tällä testillä. Testin
   epäonnistuvat mittarit ovat tärkeimmät ehdokkaat uusille suojakaiteille
   tai käytöstä poistolle.

2. **Onko julkaisutiheytemme tai commit-määrämme noussut tekoälyn
   koodausavustuksen käyttöönoton jälkeen, ja onko muutosten
   epäonnistumisprosentti tai virheosuus liikkunut vastaavasti?** Hae oikea
   paritettu data sen sijaan, että oletat joko myönteisen tai kielteisen
   tuloksen.

3. **Pysyykö koodikatselmoinnin kapasiteettimme tekoälyavusteisen koodimäärän
   kasvun tahdissa vai heikkeneekö katselmoinnin syvyys hiljaa lisääntyvän
   paineen alla?** Tarkista erityisesti katselmointivaiheen mittareista
   (aihe 2.9), onko leimasinriski voimistumassa.

4. **Merkitsemmekö virheet sen mukaan, oliko lähtökoodi pääosin tekoälyn
   tuottamaa, ja jos merkitsemme, mitä data on toistaiseksi näyttänyt?**
   Jos et tällä hetkellä merkitse tätä, keskustelkaa siitä, mitä
   aloittaminen vaatisi, sillä tämä data on suoraan relevanttia sen kannalta,
   pätevätkö historialliset laatuoletuksemme edelleen.

5. **Olemmeko tietoisesti käyneet mittarien peruskirjamme (aihe 1.4) uudelleen
   läpi tämän muutoksen valossa, vai onko mittauskäytäntömme yksinkertaisesti
   jatkunut muuttumattomana?** Jos rehellinen vastaus on jälkimmäinen,
   juuri tämä aukko on se, jonka sulkemista tämä aihe suosittelee
   ensimmäisenä.

6. **Miltä näyttäisi, jos organisaatiomme jäisi tämän muutoksen jalkoihin ja
   juhlisi mittaria, joka oli jo lakannut tarkoittamasta sitä, mitä
   luulimme?** Tämä konkreettinen, hieman epämukava ajatuskoe auttaa
   perustelemaan aiheen suosittelemaa auditointia ennen eikä jälkeen sen, kun
   tilanne oikeasti toteutuu.

## Sektorinäkökulma

**Startup-yritys.** Tekoälytyökalujen nopea käyttöönotto on yleistä ja usein
aito kilpailuetu, mutta sama nopeus, joka tekee käyttöönotosta
houkuttelevaa, tekee tarkastelemattoman mittarien ajautumisen
todennäköisemmäksi. Rakenna tapa tarkistaa tulosmittareita (osa 5)
tekoälyn käyttöönotosta raportoimiesi tehokkuushyötyjen rinnalla sen
sijaan, että raportoisit pelkkiä nopeuden parannuksia.

**Pieni yritys.** Tekoälyn koodausavustus voi laajentaa pienen tiimin
kapasiteettia merkittävästi, mutta vastusta kiusausta raportoida raaka
tuotosten kasvu yksiselitteisenä onnistumisena tarkistamatta laadun
suojakaiteita. Pienellä tiimillä on vähemmän kapasiteettia sietää
havaitsematon laatuongelma kuin suuremmalla organisaatiolla, jolla on
enemmän varakapasiteettia.

**Suuryritys.** Riski kasvaa tässä merkittävästi, sillä tekoälyn käyttöönotto
kymmenissä tai sadoissa tiimeissä samanaikaisesti voi muuttaa mittarien
pätevyyttä koko organisaatiossa ennen kuin yksikään tiimi huomaa ilmiötä
paikallisesti. Tee aiheen suosittelema mittarijoukon auditointi
organisaatiotasolla, ei vain tiimi kerrallaan, ja päivitä hallintaa
(aihe 1.4) keskitetysti ja tietoisesti.

**Julkishallinto.** Julkisen sektorin organisaatiot ottavat uutta teknologiaa
usein käyttöön varovaisemmin, mutta julkishallinnon teknologiaohjelmien
arviointiin käytetyt mittarit ja vertailuarvot on usein otettu yksityisen
sektorin alan datasta tai niitä verrataan siihen, ja tuo data itse muuttuu
saman paineen alla. Selvitä erikseen, mihin vertailuarvoihin
vertaat ja mihin tämä muutos on vaikuttanut, ennen kuin käytät niitä
odotusten asettamiseen tai suorituskyvyn arviointiin.

## Esimerkit

**Suuryritys.** Finanssiteknologiayrityksen kehitysjohto huomasi
julkaisutiheyden nousseen lähes 40 % kahden vuosineljänneksen aikana
tekoälyn koodausassistenttien laajan käyttöönoton jälkeen, ja raportoi tämän
aluksi suoraviivaisena tuottavuusvoittona hallituksen esityksessä. Huolellisempi
jatkoanalyysi, jonka laukaisi epäilevän hallituksen jäsenen kysymys siitä,
oliko laatu tarkistettu, osoitti, että muutosten epäonnistumisprosentti oli
noussut lähes samassa tahdissa julkaisutiheyden kanssa, mikä kumosi
näennäisen hyödyn kokonaan, kun paritettu vakausmittari lopulta
tarkasteltiin. Yrityksen uudistetussa raportoinnissa julkaisutiheys ja
muutosten epäonnistumisprosentti esitetään nyt yhdessä aina, kun tehdään
tekoälyavusteisia tuottavuusväitteitä. Näin vältetään aiempi, lähes
julkiseksi tullut harhaanjohtava väite.

**Julkishallinto.** Osavaltion hallinnon IT-osasto pilotoi tekoälyn
koodausavustusta osalla kehitystiimeistään ja havaitsi, että insinööriä
kohden tuotetun koodin raaka määrä oli kasvanut merkittävästi. Luku mainittiin
aluksi myönteisesti pilotin sisäisessä katselmuksessa. Tarkempi analyysi,
jonka käynnisti tämän kirjan ohjeiden sisällyttäminen osaston
arviointiviitekehykseen, tarkasteli karanneiden virheiden osuutta tekoälyavusteisen
ja ei-tekoälyavusteisen työn välillä erikseen. Se havaitsi hieman koholla
olevan virheosuuden tekoälyavusteisessa ryhmässä, keskittyneenä
reunatapausten käsittelyyn epätavallisissa kansalaistilanteissa, joita
tekoälytyökalu ei ollut kohdannut koulutuksensa aikana. Löydös ei
pysäyttänyt pilottia, mutta johti täsmälliseen, kohdennettuun katselmoinnin
tiukentamiseen tekoälyavusteisille muutoksille, jotka koskivat oikeutettavuuden
reunatapauslogiikkaa. Näin puututtiin todelliseen riskiin, jota pelkkä raaka
tuotosmittari ei olisi koskaan paljastanut.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Auditoinnin tekemisen ennakoivasti tuottama hyöty on välttää julkinen tai
hallitustason noloustilanne, jossa raportoitu mittari osoittautuu tarkemmassa
tarkastelussa mittaamattomaksi mitään todellista. Täsmälleen tähän
tilanteeseen yllä oleva finanssiteknologiaesimerkki lähes päätyi. Organisaatio,
joka ennakoi muutosta, säilyttää uskottavuutensa sidosryhmien silmissä.
Organisaatio, joka jää kiinni onttoa mittaria raportoimasta, maksaa todellisen
ja suurelta osin vältettävissä olevan mainehaitan.

Omistamisen kokonaiskustannukset (TCO) ovat analyyttinen työ, joka
tarvitaan nykyisen mittarijoukon auditointiin, suojakaiteiden kiristämiseen ja
hallintadokumentaation päivittämiseen. Se on kertaluonteinen, kohtuullinen
investointi verrattuna jatkuvaan riskiin raportoida mittareita, jotka ovat
huomaamatta lakanneet mittaamasta sitä, mitä ne väittävät mittaavansa.
Kustannus toistuu myös pienempänä, sillä muutos on jatkuva eikä kertaluonteinen
tapahtuma, ja määräajoin toistettava auditointi työkalujen ja käyttöönoton
mallien kehittyessä on perusteltu, pysyvä lisä mittarien hallinnan rytmiin.

## Antimallit ja sudenkuopat

- **Tekoälyä edeltävän ajan aktiivisuusmittarien raportointi muuttamatta ja
  kritiikittömästi:** riskinä juhlia mittaria, joka on huomaamatta lakannut
  korreloimasta todellisen arvon kanssa.
- **Julkaisutiheyden tai tuotosmäärän kasvun raportointi ilman paritettua
  vakauden suojakaidetta:** toistaa aiheen 2.10 varoituksen huomattavasti
  suuremmilla panoksilla tekoälyavusteisessa kehityksessä.
- **Oletus, että tekoälyn tuottamalla koodilla on sama virheprofiili kuin
  ihmisen kirjoittamalla, tarkistamatta:** testaamaton oletus, joka voi olla
  aktiivisesti väärä.
- **Katselmoinnin syvyyden hiljainen rapautuminen tekoälyn tuottaman koodin
  määrän kasvaessa:** aiheen 2.9 leimasinriski voimistuneena.
- **Muutoksen kohtelu kertaluonteisena säätönä jatkuvan huolenaiheen sijaan:**
  työkalut ja niiden käyttöönoton mallit kehittyvät edelleen, ja
  mittauskäytännön on pysyttävä mukana.
- **Vertailu alan vertailuarvoihin ymmärtämättä, ovatko ne itse muuttuneet
  saman paineen alla:** riskinä väärä käsitys suhteellisesta suorituskyvystä.

## Kypsyysmalli

- **Taso 1, Aloittava:** Tekoälyä edeltävän ajan mittareita raportoidaan
  muuttamatta, eikä ole tietoa siitä, että tekoälyn käyttöönotto on voinut
  vaikuttaa niiden pätevyyteen.
- **Taso 2, Kehittyvä:** Muutoksesta on jonkin verran tietoisuutta, mutta
  nykyistä mittarijoukkoa ei ole auditoitu järjestelmällisesti.
- **Taso 3, Vakioitu:** Koko mittarijoukko on auditoitu, suojakaiteita on
  kiristetty ja mittarit on dokumentoitu alttiiksi tai kestäviksi
  organisaation laajuisesti.
- **Taso 4, Hallittu:** Virheet ja laatutulokset merkitään ja niitä
  seurataan aktiivisesti tekoälyavustuksen tason mukaan, jotta
  organisaation historiallisten laatusuhteiden pätevyys testataan eikä
  oleteta.
- **Taso 5, Orkestroitu:** Organisaatiolla on kypsä, jatkuva käytäntö
  tarkastella mittareitaan uudelleen tekoälytyökalujen ja käyttöönoton
  mallien kehittyessä, ja se voi osoittaa tähän muutokseen ennakoivasti
  tehtyjä hallintapäätöksiä eikä vasta ongelman ilmaannuttua reagoiden tehtyjä.

## Keskusteluideoita

1. Mitkä nykyisistä mittareistamme imartelisivat eniten tekoälyavustusta paljon käyttävää tiimiä, joka ei tuota todellista arvoa enempää?
2. Onko julkaisutiheytemme noussut tekoälyn käyttöönoton jälkeen, ja onko muutosten epäonnistumisprosentti liikkunut sen mukana?
3. Merkitsemmekö laatutulokset tekoälyavustuksen tason mukaan, ja mitä tuo data näyttäisi?
4. Pysyykö katselmointikapasiteettimme tekoälyn tuottaman koodin määrän kasvun tahdissa?
5. Mihin alan vertailuarvoon vertaamme itseämme tällä hetkellä, ja onko se itse muuttunut tämän paineen alla?

## Keskeiset opit

- Generatiivinen tekoäly on **paradigmanmuutos siinä, mitä useat nykyiset
  mittarit mittaavat**, ei vähittäinen työkalumuutos. Jotkin mittarit ovat
  huomaamatta lakanneet tarkoittamasta sitä, mitä ne ennen tarkoittivat.
- **Aktiivisuus- ja raa'at tuotosmittarit ovat alttiimpia**; tulosmittarit
  (osa 5) kestävät suhteellisen hyvin.
- **Kiristä suojakaiteita, erityisesti muutosten epäonnistumisprosenttia**,
  suhteessa tekoälyavusteisen kehityksen käyttöönottoon.
- **Testaa, älä oleta, onko tekoälyn tuottamalla koodilla eri virheprofiili**
  kuin ihmisen kirjoittamalla, merkityn karanneiden virheiden datan avulla.
- Kohtele tätä **jatkuvana, ei kertaluonteisena, hallintahuolena**
  (aihe 1.4), koska työkalut ja niiden käyttöönoton mallit kehittyvät
  edelleen.

## Lähteet ja lisälukemista

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (tulospohjaisen mittauksen perusta, jonka tämä
  aihe väittää käyvän tämän muutoksen myötä entistä tärkeämmäksi).
- GitHub's research on AI pair programming and developer productivity
  (alan tutkimus tekoälyavusteisen kehityksen mitattavista vaikutuksista).
- Google Cloud's DevOps Research and Assessment programme, [dora.dev](https://dora.dev/) (jatkuva
  State of DevOps -tutkimus, joka on viime vuosina sisältänyt tekoälyn käyttöönoton
  löydöksiä).
- *The Tyranny of Metrics*, by Jerry Z. Muller (yleinen peruste epäillä
  määrään perustuvia mittareita, suoraan relevantti nyt kun tuotosten määrä
  halpenee).
