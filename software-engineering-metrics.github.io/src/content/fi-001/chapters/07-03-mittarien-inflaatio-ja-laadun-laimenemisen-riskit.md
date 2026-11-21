# 7.3 Mittarien inflaatio ja laadun laimenemisen riskit

## Yleiskatsaus ja perustelut

Tämä aihe nimeää suoraan ja täsmällisesti ne kaksi epäonnistumisen tapaa,
joilta aihe 7.1 varoitti kirjan koko viitekehyksen olevan suojattava, kun
tekoälyavusteisesta kehityksestä tulee vakiokäytäntö. **Mittarien inflaatiossa**
luvut nousevat ilman vastaavaa todellista arvoa. **Laadun laimenemisessa**
koodin laatu rapautuu vähitellen nopeammin kuin alan nykyinen kyky havaita se
olemassa olevilla katselmointi- ja testauskäytännöillä. Nämä eivät ole
uusia riskiluokkia, joita kirja ei olisi jo nimennyt. Mittarien inflaatio on
aiheen 1.2 Goodhartin laki ja korvaamispelaaminen laajassa mittakaavassa, ja
laadun laimeneminen on aiheen 4.2 kattavuuden tehokkuuden aukko ja aiheen 5.1
karanneiden virheiden huoli, molemmat voimistuneina. Uutta on nopeus ja
mittakaava, jolla generatiivinen tekoäly voi tuottaa molemmat
epäonnistumisen tavat samanaikaisesti, nopeammin kuin useimpien organisaatioiden
nykyiset suojakaiteet on suunniteltu pysäyttämään.

Aiheen erityinen mekanismi on hienovarainen: tekoälyn tuottama koodi näyttää
hyvin usein oikealta. Se noudattaa tuttuja idiomeja, käyttää uskottavia
muuttujanimiä ja läpäisee pintapuolisen luennan paljon luotettavammin kuin
aidosti huolimaton ihmisen kirjoittama koodi tyypillisesti, juuri koska se on
koulutettu valtavalla koodikorpuksella, joka näytti oikealta. Tämän vuoksi
tekoälyn tuottamat virheet on ihmiskatselmoijan vaikeampi löytää sellaisella
hahmontunnistuksella, näyttääkö tämä oikealta -katselmoinnilla, joka löytää
monta ihmisen tekemää vikaa. Tekoälyn tuottama versio on tilastollisessa
mielessä optimoitu näyttämään oikealta riippumatta siitä, onko se oikea.

Suurille tiimeille tämän aiheen riskit kasautuvat mittakaavan mukana tavalla,
jonka pitäisi huolestuttaa erityisesti suuryrityksiä ja julkishallintoa.
Mittarien inflaatio kymmenissä tiimeissä samanaikaisesti voi tuottaa
koko organisaation laajuisen väärän signaalin tuottavuuden paranemisesta,
jonka purkaminen vie merkittävästi aikaa ja analyysiä, kuten aiheen 7.1
finanssiteknologiaesimerkki osoitti. Havaitsemiskykyä nopeammin etenevä laadun
laimeneminen on vielä vakavampaa säännellyissä, turvallisuuskriittisissä tai
julkisen luottamuksen ympäristöissä, joissa tuotantoon päässeen havaitsemattoman
virheen kustannus ulottuu paljon välitöntä insinöörihuolta pidemmälle.

## Keskeiset periaatteet

- **Mittarien inflaatio ja laadun laimeneminen ovat voimistuneita versioita
  riskeistä, jotka kirja on jo nimennyt**, ei täysin uusia luokkia.
  Nykyiset suojakaiteet pätevät edelleen, mutta niiden on tehtävä enemmän työtä.
- **Tekoälyn tuottaman koodin "näyttää oikealta" -ominaisuus tekee siitä
  erityisen vaikean ihmisen hahmontunnistukseen perustuvalle katselmoinnille
  hienovaraisten virheiden löytämisessä.** Tämä on erillinen riski tavallisesta
  ihmisen virheestä.
- **Tämän muutoksen nopeus voi ylittää organisaation kyvyn mukauttaa
  suojakaiteitaan**, mikä luo aidon, ajallisesti rajatun altistumisikkunan.
- **Nykyiset laatumittarit (osa 4) säilyttävät arvonsa, mutta ne voivat
  tarvita uudelleenkalibrointia**, ei korvaamista, tämän uuden riskiprofiilin
  valossa.
- **Havaitsemiskykyyn itseensä on investoitava harkiten**, sillä kirjan
  käsittelemät katselmointi- ja testauskäytännöt suunniteltiin ennen kuin tämä
  riski oli olemassa tässä mittakaavassa.

## Suositukset

### Kalibroi muutosten epäonnistumisprosentin ja karanneiden virheiden kynnysarvot uudelleen tekoälyvaltaiselle työlle

Kun tiimi tai koodialue on ottanut tekoälyavustuksen voimakkaasti käyttöön,
sovella aiheiden 2.4 ja 5.1 vakavuuspainotettua seurantaa tavallista
herkemmin, ainakin kunnes organisaatiosi on kerännyt riittävästi näyttöä
(aihe 7.2) tietääkseen, pätevätkö näiden mittarien ja todellisen riskin
historiallinen suhde edelleen muuttumattomana nimenomaan tekoälyavusteiseen
työhön. Kohtele tätä uudelleenkalibrointia tilapäisenä, näyttöä keräävänä
asenteena, ei pysyvänä, tarkastelemattomana oletuksena kumpaankaan suuntaan.

### Investoi erityisesti havaitsemiskykyyn, joka kestää "näyttää oikealta" -ongelman

Perinteinen koodikatselmointi nojaa vahvasti katselmoijan hahmontunnistukseen
siitä, mikä näyttää oikealta, ja se on erityisesti heikentynyt uskottavan
näköistä mutta hienovaraisesti virheellistä tekoälyn tuottamaa koodia vastaan.
Investoi vastaavasti enemmän havaitsemismenetelmiin, jotka eivät nojaa
visuaaliseen hahmontunnistukseen. [Mutaatiotestaus](https://en.wikipedia.org/wiki/Mutation_testing) (aihe 4.2) testaa
todellista käyttäytymistä eikä ulkonäköä, ja ominaisuus- tai
invarianttipohjainen testaus varmistaa loogisen oikeellisuuden eikä
pintauskottavuutta. Molemmista tulee suhteettoman arvokkaita juuri tämän
muutoksen vuoksi.

### Seuraa mittarien inflaatiota koko toimitusputkessa, ei vain koodin generointikohdassa

Tekoälyavusteisen kehityksen aiheuttama mittarien inflaatio ei rajoitu
koodausvaiheeseen. Se voi levitä koko sykliaikaketjuun (aihe 2.6): suurempi
määrä tekoälyn tuottamia pull requesteja voi paisuttaa pull requestien
läpivirtausmittareita (aihe 2.9), vaikka hyödyllinen signaali, jonka
tallentamiseen mittari alun perin suunniteltiin, eli tiimin todellinen
läpivirtaus, pysyy ennallaan tai jopa laskee, kun katselmointikuorma ja
korjauskustannus lasketaan oikein mukaan. Auditoi koko mittarijoukkosi tämän
leviämismallin varalta, ei vain ilmeisimpiä, suoraan tekoälyyn liittyviä
mittareita.

### Rakenna selkeä, ajallisesti rajattu uudelleenkalibrointisuunnitelma pysyvän epäluulon sijaan

Tämän aiheen suosittelema tavallista tarkempi seuranta on perusteltua
aktiivisen käyttöönoton ja epävarmuuden aikana, mutta siitä ei pidä tulla
pysyvää, tarkastelematonta veroa tekoälyavusteiselle työlle ikuisesti. Kun
organisaatiosi kerää todellista näyttöä aiheen 7.2 mittauskurin avulla,
tarkista kynnysarvot ja suojakaiteet sen perusteella, mitä näyttö oikeasti
osoittaa: kiristä lisää, missä riski vahvistuu, ja höllennä, missä ei. Älä
sivuuta riskiä kokonaan äläkä kohtele jokaista tekoälyavusteista koodinpalaa
pysyvällä, erottelemattomalla epäluulolla kertyvästä näytöstä riippumatta.

### Kommunikoi riski avoimesti sen sijaan, että käytät sitä syynä vastustaa tekoälyn käyttöönottoa

Esitä tämän aiheen ohjeistus aidosti arvokkaan uuden kyvyn riskienhallintana,
ei argumenttina tekoälyavusteista kehitystä vastaan yleisesti. Organisaatio,
joka kommunikoi nämä erityiset, nimetyt riskit selkeästi ja rakentaa niitä
vastaan oikeasuhteiset suojakaiteet, täsmälleen kuten kirja suosittelee
jokaiselle muulle käsittelemälleen mittarille ja tekniikalle, ottaa
tekoälyavustuksen käyttöön turvallisemmin ja kestävämmin kuin organisaatio,
joka joko sivuuttaa riskin tai kohtelee sitä syynä yleiselle vastustukselle
aidosti hyödyllistä työkalujoukkoa kohtaan.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei uudelleenkalibrointia, tekoälyavusteista työtä kohdellaan kuin ihmisen kirjoittamaa koodia | Yksinkertainen, ei prosessimuutosta | Ohittaa erityisen, näytön perusteella koholla olevan riskiprofiilin |
| Yleinen, pysyvä tehostettu tarkastelu kaikelle tekoälyavusteiselle koodille | Maksimoi lyhyen aikavälin riskin vähenemisen | Kestämätön vero aidosti arvokkaalle kyvylle; sivuuttaa kertyvän näytön |
| Ajallisesti rajattu, näyttöön perustuva uudelleenkalibrointi | Tasapainottaa riskienhallinnan ja kestävän käyttöönoton | Vaatii jatkuvaa mittauskuria (aihe 7.2), jotta tiedetään, milloin tarkastelua voi höllentää |
| Investointi havaitsemismenetelmiin, jotka kestävät "näyttää oikealta" -virheet | Puuttuu uuteen riskiin suoraan ja pysyvästi | Vaatii etukäteisinvestoinnin mutaatio- ja ominaisuuspohjaisen testauksen infrastruktuuriin |

Keskeinen jännite on **varovaisuus versus käyttöönoton nopeus**. Liiallinen,
pysyvä varovaisuus haaskaa suuren osan tekoälyavusteisen kehityksen aidosta
arvosta. Riittämätön varovaisuus riskeeraa tämän aiheen nimeämän mittarien
inflaation ja laadun laimenemisen, mahdollisesti merkittävässä mittakaavassa
ennen havaitsemista. Ratkaise jännite tämän aiheen suosittelemalla ajallisesti
rajatulla, näyttöön perustuvalla tavalla: tehostettu tarkastelu nyt, säädettynä
alas tai ylös sitä mukaa kuin aiheen 7.2 mittauskurin tuottama todellinen näyttö
kertyy. Vaihtoehtona ei ole pysyvä yleinen linjaus eikä tarkastelematon oletus,
ettei mikään ole muuttunut.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Olemmeko kalibroineet muutosten epäonnistumisprosentin tai karanneiden
   virheiden kynnysarvot uudelleen tekoälyvaltaiselle työlle, vai
   sovellammeko tekoälyä edeltävän ajan kynnysarvoja muuttamattomina?**
   Jos ne ovat ennallaan, keskustelkaa siitä, heijastaako se harkittua,
   näyttöön perustuvaa päätöstä vai pelkästään sitä, ettei kysymykseen ole
   kiinnitetty huomiota.

2. **Onko meillä havaitsemismenetelmiä, kuten mutaatiotestausta, jotka eivät
   nojaa katselmoijan visuaaliseen hahmontunnistukseen, vai riippuuko
   katselmointiprosessimme kokonaan ihmissilmistä, jotka arvioivat, "näyttääkö
   koodi oikealta"?** Tämä on se erityinen haavoittuvuus, jonka aihe
   tunnistaa. Arvioi nykyistä havaitsemiskykyäsi sitä vasten rehellisesti.

3. **Onko mittarien inflaatio levinnyt koodausvaiheen ulkopuolelle pull
   request- tai julkaisumittareihimme, ja huomaisimmeko sen tällä hetkellä?**
   Käy koko sykliaikaketju läpi tätä leviämismallia etsien, ei vain
   ilmeisintä lähtökohtaa.

4. **Perustuuko nykyinen tehostettu tarkastelumme tekoälyavusteiseen
   koodiin, jos sellaista on, kertyneeseen näyttöön, vai onko se
   tarkastelematon, määräämätön oletus, jota ei ole koskaan harkittu
   uudelleen?** Keskustelkaa siitä, mitä näyttöä pitäisi kertyä, ennen kuin
   harkitsisitte nykyisten suojakaiteiden höllentämistä tai lisäkiristämistä.

5. **Miten kommunikoimme tämän aiheen riskit sisäisesti: syynä varovaisuuteen
   ja oikeasuhteisiin suojakaiteisiin vai epäsuorana argumenttina tekoälyn
   käyttöönottoa vastaan yleisesti?** Ole rehellinen siitä, miten tämä
   keskustelu todella laskeutuu tiimiisi, sillä yleisenä vastustuksena
   vastaanotettu viesti tuottaa harvoin sen oikeasuhteisen, näyttöön
   perustuvan vastauksen, jota tämä aihe suosittelee.

6. **Miltä näyttäisi, jos organisaatiomme huomaisi vasta merkittävässä
   mittakaavassa, että sekä mittarien inflaatio että laadun laimeneminen
   olivat tapahtuneet samanaikaisesti ja havaitsematta?** Tämä konkreettinen,
   jokseenkin epämukava skenaario kannattaa nimetä erikseen, sillä se on
   juuri se epäonnistuminen, jonka estämiseksi aiheen suojakaiteet on
   rakennettu.

## Sektorinäkökulma

**Startup-yritys.** Nopea käyttöönotto ja rajallinen katselmointikapasiteetti
tekevät tämän aiheen riskeistä erityisen akuutteja pienelle tiimille.
"Näyttää oikealta" -havaitsemisongelma on vaikeampi huomata, kun katselmoijia
on vähemmän ja he ovat vähemmän erikoistuneita. Investoi varhain
vähintään kevyeen mutaatiotestaukseen kriittisimmillä koodipoluillasi, vaikka
kattava testikattavuus ei vielä olisi mahdollista.

**Pieni yritys.** Muodolliset uudelleenkalibrointiprosessit ovat tässä
mittakaavassa todennäköisesti tarpeettomia, mutta yksinkertainen, selkeä
tietoisuus siitä, että tekoälyn tuottama koodi ansaitsee tavallista
epäilevämmän luennan, juuri koska se näyttää varmemmin oikealta kuin se
todellisuudessa ehkä on, ei maksa mitään ja vastaa suoraan tämän aiheen
ydinhuoleen.

**Suuryritys.** Sekä mittarien inflaatio että laadun laimeneminen kasautuvat
merkittävästi mittakaavassa, sillä väärä signaali tai havaitsematon
laatuongelma kymmenissä tiimeissä samanaikaisesti on paljon seurauksellisempi
ja paljon vaikeampi purkaa kuin sama ongelma yhdessä tiimissä. Investoi
harkiten koko organisaation havaitsemiskyvyn parannuksiin
(mutaatiotestauksen infrastruktuuri, ominaisuuspohjaisen testauksen
käyttöönotto) ja tämän aiheen suosittelemaan ajallisesti rajattuun
uudelleenkalibrointikuriin, jota seurataan keskitetysti.

**Julkishallinto.** Havaitsemattoman laadun laimenemisen seuraukset ovat
erityisen vakavia säännellyissä, turvallisuuskriittisissä tai julkisen luottamuksen
ympäristöissä, jotka ovat yleisiä julkishallinnon järjestelmissä. Sovella
tehostettua, näyttöön perustuvaa tarkastelua erityisesti tekoälyavusteisiin
muutoksiin suuren seurauksen koodipoluilla (aiheen 6.4 altistumisen ja
hyödynnettävyyden painotuslogiikka pätee tässä samankaltaisesti), ja ole
valmis osoittamaan tarkastajalle tai valvontaelimelle täsmälleen, mikä
havaitsemiskyky tätä erityistä riskiä vastaan on olemassa.

## Esimerkit

**Suuryritys.** Vakuutusyhtiön korvauskäsittelyn kehitystiimi otti tekoälyn
koodausavustuksen laajaan käyttöön ja huomasi kuusi kuukautta myöhemmin
vähittäisen mutta mitattavan nousun karanneissa virheissä nimenomaan
monimutkaisessa ehtologiikassa. Siinä koodissa hienovaraisesti väärä
reunatapausten käsittely on sekä tekoälytyökalujen helpoin tuottaa
uskottavasti että katselmoijan vaikein havaita pelkällä tarkastelulla.
Tutkimus vahvisti tämän aiheen kuvaaman "näyttää oikealta" -mallin:
virheellinen koodi oli johdonmukaisesti käyttänyt idiomaattisia, tutun
näköisiä kaavoja, jotka läpäisivät katselmoinnin herättämättä sitä
tarkastelua, jonka ilmeisen epätavallinen tai kömpelö ihmisen kirjoittama
koodinpala olisi saattanut saada. Tiimin vastaus kohdisti mutaatiotestauksen
koko yrityksessä erityisesti monimutkaiseen ehtologiikkaan, havaitsemismenetelmään,
joka kestää pintauskottavuusongelman, ja mittasi tämän virheluokan
merkittävän vähenemisen kahdessa vuosineljänneksessä.

**Julkishallinto.** Veroviranomainen, joka pilotoi tekoälyavusteista kehitystä
osassa laskentamoottorinsa ylläpitotyötä, rakensi tämän aiheen suosittelemaan
ajallisesti rajatun uudelleenkalibrointikurin mukaan alusta asti. Se asetti
selkeän kuuden kuukauden näytönkeruujakson, jossa tekoälyavusteisille
laskentalogiikan muutoksille asetettiin tehostetut katselmointivaatimukset.
Kerätty näyttö ei osoittanut tilastollisesti merkitsevää eroa virheosuudessa
hyvin rajatuissa, kapeissa muutoksissa, mutta vahvisti koholla olevan riskin
laajemmille, arkkitehtuurisesti merkittävämmille tekoälyavusteisille
muutoksille. Viraston tuloksena syntynyt politiikka höllensi tehostettua
tarkastelua kapeiden muutosten luokassa ja ylläpiti ja jopa vahvisti sitä
arkkitehtuurisesti merkittäville muutoksille. Tämä oikeasuhteinen, näyttöön
perustuva lopputulos ei olisi syntynyt kummastakaan ääripäästä, ei
"ei uudelleenkalibrointia" eikä "yleinen pysyvä tarkastelu".

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Mittarien inflaatiolta ja laadun laimenemiselta harkiten suojautumisen tuotto
on täsmälleen sen tilanteen välttäminen, jonka yllä oleva
vakuutusyhtiöesimerkki näyttää: havaitsematon, vähitellen kasautuva
laatuongelma, jonka löytäminen ja korjaaminen jälkikäteen maksaa paljon
enemmän kuin havaitsemisinvestointi, eli korkeimman riskin koodiin kohdennettu
mutaatiotestauksen infrastruktuuri, olisi maksanut ennakoivasti.

Omistamisen kokonaiskustannukset (TCO) sisältävät tämän aiheen suosittelemat
investoinnit havaitsemiskykyyn ja näyttöön perustuvan uudelleenkalibroinnin
jatkuvan kurin, ei kumpaakaan ääripäätä, pysyvää epäluuloa tai pysyvää
huomiotta jättämistä. Kustannus on vaatimaton ja ajallisesti rajattu verrattuna
riskiin, että merkittävä, laajamittainen laatuongelma jää havaitsematta
nimenomaan siksi, että se syntyi näiden työkalujen koodin tuottamistavan
vuoksi näyttämään oikealta organisaation jo käytössä oleville
katselmointiprosesseille.

## Antimallit ja sudenkuopat

- **Tekoälyä edeltävän ajan kynnysarvojen ja havaitsemismenetelmien
  soveltaminen muuttamattomina:** ohittaa erityisen, näytön perusteella
  koholla olevan riskiprofiilin.
- **Täysin ihmisen hahmontunnistukseen perustuvan katselmoinnin varassa
  oleminen tekoälyn tuottamalle koodille:** erityisen altis tämän aiheen
  tunnistamalle "näyttää oikealta" -ongelmalle.
- **Mittarien inflaation leviämisen huomaamatta jättäminen koodin
  generointikohdan ulkopuolella:** väärä signaali voi levitä koko
  toimitusputkeen havaitsematta.
- **Pysyvä, tarkastelematon yleinen epäluulo ilman näyttöön perustuvaa
  uudelleenkalibrointia:** haaskaa kestämättömästi suuren osan
  tekoälyavusteisen kehityksen aidosta arvosta.
- **Aiheen riskien kommunikointi yleisenä vastustuksena tekoälyn
  käyttöönottoa kohtaan oikeasuhteisen riskienhallinnan sijaan:** heikentää
  sekä turvallisuutta että käyttöönottoa.
- **Ei erityisesti tähän uuteen riskiprofiiliin kohdennettua investointia
  havaitsemiskykyyn:** jättää organisaation riippuvaiseksi katselmointimenetelmistä,
  joiden tämä aihe on osoittanut olevan erityisen heikkoja sitä vastaan.

## Kypsyysmalli

- **Taso 1, Aloittava:** Ei tietoisuutta tekoälyavusteiseen kehitykseen
  liittyvästä mittarien inflaation tai laadun laimenemisen riskistä.
  Nykyisiä suojakaiteita ja havaitsemismenetelmiä sovelletaan muuttamattomina.
- **Taso 2, Kehittyvä:** Jonkin verran tietoisuutta on, mutta
  uudelleenkalibrointi on tapauskohtaista, eikä tähän riskiin kohdennettua
  investointia havaitsemiskykyyn ole tehty.
- **Taso 3, Vakioitu:** Uudelleenkalibroituja kynnysarvoja ja "näyttää
  oikealta" -ongelman kestäviä havaitsemismenetelmiä (mutaatio- ja
  ominaisuuspohjainen testaus) sovelletaan yhdenmukaisesti tekoälyavusteiseen
  työhön.
- **Taso 4, Hallittu:** Ajallisesti rajattu, näyttöön perustuva
  uudelleenkalibrointikuri säätää tarkastelua aktiivisesti kertyneen datan
  perusteella, ja mittarien inflaation leviämistä seurataan aktiivisesti koko
  putkessa.
- **Taso 5, Orkestroitu:** Organisaatiolla on kypsä, oikeasuhteinen, jatkuvasti
  kehittyvä riskienhallinnan asenne tekoälyavusteista kehitystä kohtaan,
  kommunikoituna avoimesti. Se ei haaskaa arvoa liiallisella varovaisuudella
  eikä altista organisaatiota havaitsemattomalle laadun laimenemiselle.

## Keskusteluideoita

1. Olemmeko nähneet varhaista näyttöä "näyttää oikealta" -virhemallista omassa tekoälyavusteisessa koodissamme?
2. Mikä havaitsemismenetelmä vastaisi suoraan tämän aiheen erityiseen riskiin meillä?
3. Onko tekoälyavustuksen aiheuttama mittarien inflaatio levinnyt johonkin putkemme alavirran mittareista?
4. Perustuuko nykyinen tekoälyavusteisen koodin tarkastelumme näyttöön vai tarkastelemattomaan oletukseen?
5. Miten tiimimme todella vastaanottaa tämän aiheen ohjeistuksen: riskienhallintana vai tekoälyn käyttöönoton vastustuksena?

## Keskeiset opit

- Mittarien inflaatio ja laadun laimeneminen ovat **voimistuneita versioita
  riskeistä, jotka kirja jo nimeää**. Ne vaativat nykyisiltä suojakaiteilta
  enemmän työtä, eivät täysin uusia viitekehyksiä.
- Tekoälyn tuottaman koodin taipumus **"näyttää oikealta"** heikentää
  erityisesti perinteistä, hahmontunnistukseen perustuvaa ihmisen tekemää
  koodikatselmointia.
- Investoi **pintauskottavuuden kestäviin havaitsemismenetelmiin**,
  erityisesti mutaatio- ja ominaisuuspohjaiseen testaukseen.
- Käytä **ajallisesti rajattua, näyttöön perustuvaa uudelleenkalibrointia**,
  ei pysyvää yleistä epäluuloa eikä pysyvää tarkastelematonta luottamusta.
- **Kommunikoi riski oikeasuhteisena riskienhallintana**, ei argumenttina
  tekoälyn käyttöönottoa vastaan, tukeaksesi sekä turvallisuutta että kestävää
  käyttöä.

## Lähteet ja lisälukemista

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (paritetun nopeuden ja vakauden kuri, jota tämä
  aihe soveltaa uuteen riskiluokkaan).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering* (2011):
  havaitsemismenetelmä, jonka tämä aihe väittää tulevan suhteettoman
  arvokkaaksi.
- GitHub's research on AI pair programming and developer productivity
  (alan dataa tekoälyavusteisen kehityksen tuloksista ja riskeistä).
- *The Tyranny of Metrics*, by Jerry Z. Muller (mittarifiksaatio ja
  pelaamisen riski, suoraan relevantti tämän aiheen nimeämälle mittarien
  inflaation huolelle).
