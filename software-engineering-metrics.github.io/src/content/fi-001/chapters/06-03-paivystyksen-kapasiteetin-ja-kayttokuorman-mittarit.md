# 6.3 Päivystyksen, kapasiteetin ja käyttökuorman mittarit

## Yleiskatsaus ja perustelut

Aiheen 6.1 esittelemä luotettavuus ja aiheen 6.2 mittaama häiriöihin
reagointi riippuvat molemmat ihmisjärjestelmästä, jota tämä aihe mittaa
suoraan: päivystysvuorosta, kehittäjistä, jotka kantavat hälytyslaitetta ja
reagoivat, kun jokin menee rikki, sekä infrastruktuurin kapasiteetista, joka
ratkaisee, kuinka paljon kuormaa järjestelmä kestää ennen kuin se alkaa
mennä rikki. Organisaatiolla voi olla erinomaiset SLO:t, hyvin suunnitellut
virhebudjetit ja aidosti syyllistämätön häiriökulttuuri, ja silti se voi
polttaa päivystäjänsä loppuun kestämättömällä kuormalla, joka lopulta
heikentää juuri sitä luotettavuutta, jota nuo muut käytännöt on rakennettu
suojelemaan.

Tämä aihe käsittelee käyttökuormaa omana mittariperheenään, joka liittyy
suoraan aiheen 3.2 hyvinvoinnin ja [uupumisen](https://en.wikipedia.org/wiki/Occupational_burnout)
mittaamiseen mutta on erityinen hälytyslaitteen kantamisen akuutille
rasitukselle: katkonainen uni, päivystämisen psykologinen hinta silloinkin,
kun mitään ei tapahdu, ja tiheän, huonosti jakautuneen häiriökuorman
kumuloituva vaikutus. Organisaatio, joka mittaa järjestelmiensä luotettavuutta
huolellisesti mutta ei koskaan mittaa niitä luotettavina pitävien ihmisten
jaksamista, mittaa vain puolta kuvasta, ja mittaamaton puoli nousee yleensä
lopulta esiin henkilöstövaihtuvuutena, uupuneiden päivystäjien heikentyneenä
häiriöihin reagoinnin laatuna tai molempina.

Suurille tiimeille päivystys- ja kapasiteettimittarit paljastavat
kuormantasausongelmia, jotka heijastavat aiheen 3.5 tiedon keskittymisen
huolia: pieni joukko kehittäjiä kantaa suhteettoman osan hälytyksistä, usein
kokeneimmat ihmiset juuri siksi, että he ratkaisevat häiriöt nopeimmin, mikä
luo samanaikaisesti sekä uupumisen riskin että bussikertoimen riskin.
Ympärivuorokautisia kriittisiä palveluja pyörittävät suuryritykset ja
julkishallinnon organisaatiot tarvitsevat tämän aiheen mittareita
päivystysvuorojen kestävään miehittämiseen sen sijaan, että todellinen hinta
paljastuisi vasta henkilöstövaihtuvuuden kautta.

## Keskeiset periaatteet

- **Päivystyskuorma on mitattavissa oleva, hallittava resurssi**, ei
  väistämätön, rajaton taakka, jonka kehittäjien täytyy vain kestää.
- **Sekä hälytystiheys että hälytysten jakautuminen ovat tärkeitä.**
  Tiimin laajuinen keskiarvo voi kätkeä vakavan keskittymisen pienelle
  joukolle yksilöitä.
- **Keskeytyminen päivystyksen aikana maksaa, vaikka mitään häiriötä ei
  todellisuudessa tapahtuisi**: tavoitettavissa olemisen ja vastuun
  psykologinen paino.
- **Kapasiteettisuunnittelu ja päivystyskuorma liittyvät toisiinsa.**
  Alimitoitettu infrastruktuuri tuottaa enemmän hälytyksiä ja kasvattaa
  suoraan päivystystaakkaa.
- **Kestävä päivystysjärjestelmä suojaa itse luotettavuutta**, koska
  uupuneet päivystäjät tekevät hitaampia, virhealttiimpia päätöksiä
  häiriöiden aikana.

## Suositukset

### Seuraa hälytystiheyttä ja jakautumista, ei vain tiimin keskiarvoa

Mittaa, kuinka monta hälytystä kukin yksittäinen päivystäjä saa, ei vain
tiimin laajuista keskiarvoa, joka voi kätkeä vakavan keskittymisen.
Kuten aiheen 3.5 bussikerroin ja aiheen 2.9 katselmoijakuorman huolet,
päivystyskuorma keskittyy usein pienelle joukolle kokeneita ihmisiä, jotka
ratkaisevat häiriöt nopeimmin, ja juuri tämä kuvio luo sekä uupumisen riskin
että vaarallisen yksittäisen vikaantumispisteen. Tasapainota vuorot
tietoisesti, kun tällainen keskittyminen ilmenee.

### Mittaa päivystämisen psykologinen hinta, ei vain aktiivista häiriöaikaa

Päivystäminen maksaa todellisen hinnan vuorollakin, jolla ei tule yhtään
hälytystä: heikentynyt unen laatu mahdollisen keskeytyksen odotuksesta,
rajoitetut henkilökohtaiset toiminnot ja jatkuvan vastuun matala-asteinen
stressi. Tallenna tämä mahdollisuuksien mukaan kyselydatan avulla (aihe 3.7)
nimenomaan päivystyskokemuksesta, erillään yleisestä tyytyväisyydestä, koska
tiimi voi raportoida kohtuullista yleistä tyytyväisyyttä samalla kun
päivystäminen nimenomaan hiljaa kuluttaa hyvinvointia.

### Aseta nimenomaiset rajat kestävälle päivystystiheydelle

Määritä kohtuullinen enimmäistiheys sille, kuinka usein kukin yksittäinen
henkilö saa olla päivystämässä, yleensä enintään yksi viikko neljästä tai
viidestä, ja seuraa todellista vuorotiheyttä tätä rajaa vasten. Vuoro, jossa
nimellisesti on tarpeeksi ihmisiä listattuna mutta joka käytännössä nojaa
kahteen tai kolmeen heistä osaamisaukkojen tai saatavuusrajoitteiden vuoksi,
ei täytä rajaa, vaikka nimellinen aikataulu näyttäisi mitä.

### Yhdistä kapasiteettisuunnittelu suoraan päivystyskuormaan

Alimitoitettu infrastruktuuri, riittämätön varakapasiteetti liikennepiikeille
tai puutteellinen automaattinen skaalaus tuottaa määritelmän mukaan enemmän
hälytyksiä ja kasvattaa suoraan päivystystaakkaa. Seuraa infrastruktuurin
kapasiteetin käyttöastetta ja korreloi se hälytystiheyden kanssa: palvelu,
joka ajaa säännöllisesti lähellä kapasiteettikattoaan ja tuottaa
suhteettoman osan hälytyksistä, on suora, kvantifioitavissa oleva peruste
kapasiteetti-investoinnille, ei pelkkä epämääräinen toiminnallinen valitus.

### Käytä päivystysmittareita miehitys- ja rekrytointipäätösten tueksi, älä yksilön arviointiin

Kokoa päivystyskuormadata tiimitasolla perustellaksesi lisähenkilöstöä,
parempia työkaluja virhehälytysten vähentämiseen tai arkkitehtuuri-investointeja
aitojen häiriöiden tiheyden pienentämiseksi. Kirjan johdonmukaista ohjetta
mille tahansa yksilöihin suoraan liittyvälle mittarille (aihe 1.2, aihe 3.4)
noudattaen älä koskaan käytä yksilön hälytyksiin vastaamisen mittareita
tietyn kehittäjän suorituskyvyn arviointiin. Tavoitteena on kestävä
miehitys ja järjestelmäsuunnittelu, ei yksilöiden pistelasku.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei muodollista päivystyskuorman seurantaa | Ei lisävaivaa | Uupumisen ja bussikertoimen riskin keskittyminen pysyvät näkymättöminä, kunnes ne paljastuvat henkilöstövaihtuvuutena |
| Vain tiimin keskimääräinen hälytystiheys | Yksinkertainen laskea | Kätkee vakavan yksilökohtaisen keskittymisen |
| Yksilötason hälytysjakauman seuranta | Paljastaa keskittymisen ja uupumisen riskin suoraan | Vaatii huolellisuutta, jotta sitä käytetään vain koottuna, ei koskaan yksilön arviointiin |
| Kapasiteetti-investointi hälytysmäärän vähentämiseksi lähteellä | Käsittelee perimmäistä syytä, vähentää taakkaa kestävästi | Vaatii etukäteisinfrastruktuuri-investoinnin |

Keskeinen jännite on **hyväksyminen versus investointi**. On helppoa kohdella
suurta hälytysmäärää luotettavan palvelun pyörittämisen väistämättömänä
hintana ja pyytää päivystäjiä kestämään se, mutta tämä hyväksyminen maksaa
organisaatiolle lopulta henkilöstövaihtuvuutena ja uupuneiden päivystäjien
heikentyneenä häiriöihin reagoinnin laatuna. Ratkaise jännite kohtelemalla
kohonnutta päivystyskuormaa signaalina, joka vaatii aitoa investointia,
kapasiteetin parannuksia, parempaa hälyttämistä virhehälytysten
vähentämiseksi tai laajennettua vuoromiehitystä, eikä väistämättömänä
taakkana, jota vain kestetään loputtomiin.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Mikä on todellinen hälytysjakaumamme vuoron yksilöiden välillä, ei
   vain tiimin keskiarvo?** Hae todellinen, yksilötason data. Kohtuulliselta
   näyttävä tiimin keskiarvo voi kätkeä yhden tai kaksi ihmistä, jotka
   kantavat dramaattisen suhteettoman osan.

2. **Olemmeko koskaan mitanneet päivystämisen psykologista hintaa erillään
   yleisestä tyytyväisyydestä?** Jos emme, pohdi, toisiko erillinen, lyhyt
   kyselykysymys nimenomaan päivystyskokemuksesta esiin jotain, minkä
   yleinen tyytyväisyyskyselymme (aihe 3.2) tällä hetkellä ohittaa.

3. **Heijastaako nimellinen päivystysvuoroaikataulumme todellisuutta, vai
   nojaako se käytännössä vain kahteen tai kolmeen ihmiseen osaamisaukkojen
   tai saatavuuden vuoksi?** Ole rehellinen. Aikataulu, jossa on kahdeksan
   nimeä mutta joka riippuu käytännössä kahdesta, ei täytä mitään
   kohtuullista kestävyysrajaa.

4. **Mikä palveluistamme tuottaa suhteettoman osan hälytyksistä
   kapasiteettivaraansa nähden, ja vähentäisikö lisäinfrastruktuuri-investointi
   tuota kuormaa suoraan?** Vertaa hälytystiheyttä kapasiteetin
   käyttöastedataan nimenomaisesti rakentaaksesi tämän perustelun
   todellisella näytöllä.

5. **Onko päivystyskuormadataa koskaan käytetty, edes epävirallisesti,
   yksilön suorituskyvyn arviointiin miehitys- ja arkkitehtuuripäätösten
   tueksi sen sijaan?** Tämä riskeeraa saman yksilön arvioinnin ansan, josta
   aihe 3.4 varoittaa aktiivisuusdatan kohdalla, nyt sovellettuna
   käyttökuormaan.

6. **Mitä meille maksaisi menettää eniten hälytyksiä saanut päivystäjämme
   uupumuksen tai henkilöstövaihtuvuuden vuoksi, ja miten se vertautuu
   vuoron tasapainottamisen tai perimmäisten syiden korjaamiseen nyt?** Tämä
   konkreettinen vertailu tekee usein vahvemman perustelun ennakoivalle
   investoinnille kuin abstrakti vetoomus kestävyyteen yksin.

## Sektorinäkökulma

**Startup-yritys.** Päivystys on usein epämuodollista ja keskittynyt
perustajiin tai pieneen varhaiseen ohjelmistotuotantotiimiin pakosta. Riskinä
on kestämättömän tahdin normalisoituminen varhain, ennen kuin vuorojen
tietoista suunnittelua on koskaan harkittu, minkä purkaminen on paljon
vaikeampaa, kun siitä on tullut oletusodotus myöhemmin liittyville uusille
työntekijöille.

**Pieni yritys.** Yksinkertainen, nimenomainen vuoroaikataulu selkeällä
kestävyysrajalla (esimerkiksi enintään yksi viikko neljästä) on saavutettavissa
ilman erillistä päivystystyökalutusta. Tärkein kuri on yksinkertaisesti tehdä
vuoro ja sen oikeudenmukaisuus näkyväksi ja nimenomaiseksi sen sijaan, että
se jäisi epämuodolliseksi, lausumattomaksi järjestelyksi.

**Suuryritys.** Hälytysten jakautumisen keskittyminen ja siihen liittyvät
uupumisen ja bussikertoimen riskit skaalautuvat tässä huonosti, koska
useampi palvelu ja suurempi monimutkaisuus tarkoittavat yleensä enemmän
mahdollisia hälytyksiä, ja osaamisen keskittyminen pahentaa ongelmaa.
Investoi yksilötason kuormaseurantaan (käytettynä vain koottuna miehityspäätöksiin),
kapasiteetti-investointiin hälytysmäärän vähentämiseksi lähteellä ja
tietoiseen vuorojen uudelleentasapainotukseen.

**Julkishallinto.** Kriittinen julkinen infrastruktuuri vaatii usein
ympärivuorokautista päivystyskattavuutta, jossa vasteen viivästymisellä on
todellisia seurauksia. Tämä nostaa sekä kestävän miehityksen tärkeyttä että
sen saavuttamisen vaikeutta julkisen sektorin tyypillisten henkilöstörajoitteiden
alla. Käytä päivystyskuormadataa nimenomaisesti ja suoraan miehityspyyntöjen
perusteluun ja kehystä kestävä päivystyskapasiteetti suoraksi, kvantifioitavaksi
luotettavuusvaatimukseksi eikä harkinnanvaraiseksi miehitysmieltymykseksi.

## Esimerkit

**Suuryritys.** Pilvi-infrastruktuuriyritys havaitsi, kun se haki
yksilötason hälytysdatan ensimmäistä kertaa, että kaksi seniorikehittäjää
viidentoista hengen päivystysvuorosta oli henkilökohtaisesti käsitellyt yli
60 % kaikista edellisen vuoden hälytyksistä, sekä siksi, että he olivat
nopeimpia monimutkaisten häiriöiden ratkaisussa, että siksi, että muut
vuoron jäsenet olivat oppineet epävirallisesti luovuttamaan heille sen
sijaan, että yrittäisivät ratkaista itse. Molemmat kehittäjät raportoivat
merkittäviä uupumisoireita yrityksen hyvinvointikyselyssä (aihe 3.2), ilman
että johto oli aiemmin yhdistänyt tuota kyselysignaalia tiettyyn,
kvantifioitavissa olevaan päivystyskeskittymädataan. Tietoinen
tasapainotustyö, johon kuului kohdennettua koulutusta ratkaisuluottamuksen
rakentamiseksi laajemmassa vuorossa ja muodollinen yläraja sille, kuinka
monta peräkkäistä hälytystä yksittäiselle henkilölle voitiin osoittaa,
pienensi kahden kehittäjän osuuden alle 25 %:iin kuudessa kuukaudessa, ja
heidän raportoimansa hyvinvointi parani vastaavasti.

**Julkishallinto.** Alueellisen vesilaitoksen päivystävä tekninen tiimi oli
toiminut nimellisellä nelihenkisellä vuorolla kriittisen infrastruktuurin
valvonnassa, mutta kapasiteetin käyttöastedata paljasti, että yksi tietty
ikääntyvä pumppuasema, joka ajoi jatkuvasti lähellä toiminnallista kattoaan,
tuotti lähes puolet kaikista koko vuoron hälytyksistä. Kapasiteetin
päivitys tuolle yhdelle pumppuasemalle, rahoitettuna käyttäen suoraan
hälytystiheyden ja kapasiteetin korrelaatiota konkreettisena tukinäyttönä
budjettipyynnössä, vähensi koko organisaation hälytysmäärää noin 40 %
seuraavan vuoden aikana. Se osoitti, että päivystystaakka oli ollut
huomattavalta osin naamioitu kapasiteettiongelma eikä pelkästään miehitys-
tai prosessiongelma.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Päivystys- ja kapasiteettikuorman tietoisen hallinnan tuotto on vältetty
henkilöstövaihtuvuus ja vältetty luotettavuuden heikkeneminen, jota
aiheuttaisivat uupuneet päivystäjät tekemässä hitaampia, virhealttiimpia
päätöksiä. Edellä oleva pilvi-infrastruktuuriesimerkki osoittaa kasautuvan
riskin suoraan: hallitsematon keskittyminen loi samanaikaisen uupumisen ja
bussikertoimen altistuksen, jonka suoraviivainen, dataan perustuva
tasapainotustyö ratkaisi vaatimattomalla kustannuksella verrattuna riskiin
menettää jompikumpi seniorikehittäjä henkilöstövaihtuvuuden vuoksi.

Omistamisen kokonaiskustannuksiin kuuluu yksilötason hälytysjakauman
seurannan instrumentointi (käytettynä huolellisesti, vain koottuna) ja
tarvittaessa aito kapasiteetti-investointi hälytysmäärän vähentämiseksi
lähteellä. Vesilaitosesimerkki osoittaa, että tämä investointi voi maksaa
itsensä takaisin suoraan ja mitattavasti, koska yksi hyvin kohdennettu
kapasiteettikorjaus vähensi koko organisaation käyttötaakkaa huomattavasti.

## Antimallit ja sudenkuopat

- **Vain tiimitason keskimääräisen hälytysmäärän seuranta:** kätkee vakavan
  yksilökohtaisen keskittymisen, joka ajaa sekä uupumisen että bussikertoimen
  riskiä.
- **Nimellisen vuoroaikataulun kohteleminen todellisuuden heijastajana:**
  aikataulu, joka käytännössä riippuu kahdesta tai kolmesta ihmisestä, ei ole
  kestävä riippumatta siitä, kuinka monta nimeä on listattu.
- **Yksilön hälytyksiin vastaamisen datan käyttö suorituskyvyn arviointiin:**
  toistaa yksilön arvioinnin ansan, josta kirja varoittaa alusta loppuun,
  sovellettuna käyttökuormaan.
- **Suuren hälytysmäärän hyväksyminen luotettavuuden väistämättömänä hintana
  kapasiteetin perimmäisenä syynä tutkimisen sijaan:** ohittaa usein
  saatavilla olevan, suoran korjauksen.
- **Päivystyskuormadatan yhdistämättä jättäminen hyvinvointikyselydataan:**
  menettää tilaisuuden tunnistaa ja toimia kasautuvaan uupumisriskiin ennen
  kuin se paljastuu henkilöstövaihtuvuutena.
- **Päivystämisen psykologisen hinnan sivuuttaminen, kun hälytyksiä ei tule
  lainkaan:** aliarvioi vuoron todellisen taakan.

## Kypsyysmalli

- **Taso 1, Aloittava:** Päivystyskuormaa ei seurata lainkaan tai sitä
  seurataan vain tiimin laajuisena keskiarvona, joka kätkee yksilökohtaisen
  keskittymisen.
- **Taso 2, Kehittyvä:** Jotakin yksilötason hälytysdataa on, mutta sitä ei
  ole yhdistetty hyvinvointikyselydataan tai kapasiteetti-investointipäätöksiin.
- **Taso 3, Vakioitu:** Yksilötason hälytysjakaumaa ja kapasiteetin
  käyttöasteen korrelaatiota seurataan yhdenmukaisesti, ja vuorotiheydelle on
  nimenomaiset kestävyysrajat.
- **Taso 4, Hallittu:** Päivystyskuormadataa käytetään aktiivisesti
  kapasiteetti-investointien ja vuorojen tasapainotuksen ohjaamiseen, ja se
  on yhdistetty nimenomaisesti hyvinvointikyselysignaaleihin.
- **Taso 5, Orkestroitu:** Organisaatio voi osoittaa konkreettisia,
  mitattavia parannuksia sekä käyttökuormassa että hyvinvoinnissa
  kohdennetusta kapasiteetti-investoinnista ja vuorojen uudelleensuunnittelusta,
  ja kestävä päivystysmiehitys on rutiininomainen, hyvin perusteltu syöte
  henkilöstö- ja infrastruktuurisuunnitteluun.

## Keskusteluideoita

1. Miltä todellinen, yksilötason hälytysjakaumamme näyttää juuri nyt?
2. Heijastaako nimellinen vuoroaikataulumme sitä, kuka todella ratkaisee suurimman osan häiriöistä?
3. Mikä yksittäinen kapasiteetti-investointi vähentäisi nykyistä hälytysmäärää eniten?
4. Olemmeko koskaan yhdistäneet päivystyskuormadataa hyvinvointikyselysignaaleihin?
5. Mitä meille maksaisi menettää eniten hälytyksiä saanut kehittäjämme uupumukselle?

## Keskeiset opit

- Päivystyskuorma on **mitattavissa oleva, hallittava resurssi**. Seuraa
  yksilötason jakaumaa, ei vain tiimin laajuista keskiarvoa, joka voi kätkeä
  vakavan keskittymisen.
- Päivystäminen maksaa **psykologisen hinnan, vaikka hälytyksiä ei tulisi
  lainkaan**. Mittaa tämä erikseen yleisestä tyytyväisyydestä.
- **Kapasiteettisuunnittelu ja päivystyskuorma liittyvät suoraan toisiinsa.**
  Alimitoitettu infrastruktuuri tuottaa enemmän hälytyksiä ja enemmän taakkaa.
- Käytä päivystysdataa **miehitys- ja kapasiteettipäätöksiin**, älä koskaan
  yksilön suorituskyvyn arviointiin.
- Kestävä päivystysjärjestelmä **suojaa itse luotettavuutta**, koska uupuneet
  päivystäjät tekevät hitaampia, virhealttiimpia päätöksiä.

## Lähteet ja lisälukemista

- *Site Reliability Engineering: How Google Runs Production Systems*,
  toimittaneet Betsy Beyer, Chris Jones, Jennifer Petoff ja Niall Richard
  Murphy (päivystyskäytäntö ja kestävä käyttökuorma).
- *The Site Reliability Workbook*, toimittaneet Betsy Beyer, Niall Richard
  Murphy, David K. Rensin, Kent Kawahara ja Stephen Thorne (käytännön ohjeita
  päivystysvuorojen suunnitteluun).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, kirjoittaneet Christina Maslach ja Michael P. Leiter
  (uupumisen organisatoriset syyt ja interventiot, sovellettavissa
  päivystysstressiin).
- *Seeking SRE: Conversations About Running Production Systems at Scale*,
  toimittanut David N. Blank-Edelman (käytännön tekijöiden näkökulmia
  kestävään käyttökäytäntöön).
