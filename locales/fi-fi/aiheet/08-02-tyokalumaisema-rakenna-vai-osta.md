# 8.2 Työkalumaisema: rakenna vai osta

## Yleiskatsaus ja perustelut

Jokainen kirjan ohjeita toteuttava organisaatio kohtaa lopulta käytännön
infrastruktuuripäätöksen: rakentaa mittaustyökalut itse, ostaa kaupallinen
ohjelmistotuotannon analytiikka-alusta tai, käytännössä useimmiten, yhdistää
molempia. Aihe käsittelee tätä päätöstä samalla tarkkuudella, jolla aihe 5.5
käsittelee mitä tahansa muuta insinöörityön investointia: rehellinen
kustannus-hyötyanalyysi, joka on tehty juuri sinun organisaatiosi koon,
nykyisten tietolähteiden ja niiden kirjan mittarien mukaan, joita aiot
oikeasti seurata. Oletusvastausta, joka pätisi yhtenäisesti kontekstista
riippumatta, ei ole.

Kaupallisten ohjelmistotuotannon analytiikkatyökalujen markkina on kypsynyt
huomattavasti, ja monet alustat tarjoavat nyt luotettavan, pitkälti
automatisoidun instrumentoinnin DORA-mittareille (osa 2), pull request- ja
katselmointidatalle (aihe 2.9) ja yhä useammin kehittäjäkokemuskyselyjen
infrastruktuurille (aihe 3.7). Tämä kypsyys on siirtänyt monen organisaation
laskelmaa kohti ainakin perustason ostamista. Se ei ole kuitenkaan poistanut
rakentamisvaihtoehdon aitoja etuja erityisissä, räätälöidyissä tarpeissa,
erityisesti aiheen 7.4 tulostelemetriassa, jonka aihe väittää olevan nyt
mittariohjelman välttämätön keskus ja joka on usein kirjan käsittelemistä
mittausluokista vähiten standardoitu ja organisaatiokohtaisin.

Suurille tiimeille päätöksellä on todellisia, jatkuvia seurauksia budjetille
ja insinöörikapasiteetille. Suuryritysten on usein integroitava mittaustyökalut
aidosti heterogeenisen vanhojen ja uusien järjestelmien maiseman yli, mikä
muokkaa rakenna vai osta -laskelmaa merkittävästi. Julkishallinto kohtaa usein
hankintarajoitteita sekä datan suvereniteetti- tai tietoturvavaatimuksia, jotka
vaikuttavat olennaisesti siihen, mitkä kaupalliset vaihtoehdot ovat edes
mahdollisia. Joskus ne kallistavat päätöstä rakentamisen tai tiettyjen,
tarkastettujen toimittajien suuntaan riippumatta siitä, mitä pelkkä
kustannus-hyötyanalyysi ehdottaisi.

## Keskeiset periaatteet

- **Tämä on harvoin kaikki tai ei mitään -päätös.** Useimmat kypsät
  mittariohjelmat yhdistävät ostettuja työkaluja hyvin standardoiduille
  mittareille ja rakennettuja työkaluja organisaatiokohtaiselle
  tulostelemetrialle.
- **Osta hyvin standardoiduille, laajasti tarvituille mittareille; rakenna
  aidosti organisaatiokohtaisille.** DORA-mittarit ja pull requestien
  analytiikka ovat hyödykealuetta. Oma liiketoimintatulosten korrelaatiosi
  (aihe 5.3) yleensä ei ole.
- **Datan omistajuus ja siirrettävyys ovat yhtä tärkeitä kuin
  ominaisuusvertailu.** Työkalu, joka lukitsee mittaridatasi, on pysyvä
  riski, ei vain epämukavuus.
- **Integrointikustannus aliarvioidaan usein** rakenna vai osta -analyysissä
  kummassakin vaihtoehdossa.
- **Hankinta-, tietoturva- ja datan suvereniteettirajoitteet voivat ohittaa
  puhtaan kustannus-hyötylaskelman**, erityisesti julkishallinnon
  organisaatioilla.

## Suositukset

### Osta hyödykekerros: DORA-, katselmointi- ja kyselyinfrastruktuuri

Mittariperheille, joille on olemassa kypsiä, laajasti saatavilla olevia
kaupallisia työkaluja, eli DORA-mittarien instrumentoinnille (osa 2), pull
requestien ja koodikatselmoinnin analytiikalle (aihe 2.9) ja kehittäjäkokemuskyselyalustoille
(aihe 3.7), ostaminen on yleensä parempi taloudellinen valinta useimmille
organisaatioille tiettyyn kokoon asti. Vastaavan infrastruktuurin
rakentaminen kaksinkertaistaa insinöörityön, johon monet toimittajat ovat
jo investoineet voimakkaasti, ja oman version rakentamisesta on saatavissa
vain rajallinen aito erottautuminen.

### Rakenna aidosti organisaatiokohtainen tulostelemetria

Tulosmittareille, joiden aihe 7.4 väittää olevan mittariohjelmasi
painopiste, eli liiketoimintatulosten korrelaatiolle (aihe 5.3), juuri sinun
tuotteeseesi sidotulle ominaisuuksien käyttöönotolle (aihe 5.2) ja juuri
sinun kustannusrakenteeseesi sidotulle yksikkötaloudellisuudelle
(aihe 5.4), kaupalliset työkalut ovat paljon vähemmän standardoituja eivätkä
usein pysty kattamaan organisaatiosi erityistä liiketoimintalogiikkaa ja
datamallia ilman laajaa, kallista räätälöintiä. Räätälöinti voi päätyä
maksamaan enemmän kuin vastaavan kyvyn rakentaminen itse täydellä hallinnalla
lopputulokseen.

### Arvioi datan omistajuus ja siirrettävyys ennen sitoutumista toimittajaan

Varmista ennen kaupallisen sopimuksen allekirjoittamista, että voit viedä
koko historiallisen mittaridatasi käyttökelpoisessa, standardimuodossa, ja
ymmärrä, mitä tälle datalle ja sen historialle tapahtuu, jos vaihdat
toimittajaa tai lopetat palvelun. Toimittajasuhde, josta on vaikea irtautua
datan [lukkiutumisen](https://en.wikipedia.org/wiki/Vendor_lock-in) vuoksi, on pysyvä organisaatioriski eikä vain
epämukavuus. Tämä arviointi ansaitsee saman vakavuuden kuin mikä tahansa muu
merkittävä, monivuotinen infrastruktuurisitoumus.

### Budjetoi integrointikustannus realistisesti päätöksen molemmilla puolilla

Rakennatpa tai ostatpa, integrointikustannus, eli työkalun kytkeminen
todelliseen versionhallintaasi, CI/CD-putkeesi, häiriöseurantaasi ja
liiketoimintajärjestelmiisi, aliarvioidaan usein alkuvaiheen
suunnittelussa kummassakin vaihtoehdossa. Budjetoi tämä integrointityö
erillisenä, merkittävänä eränä rakenna vai osta -analyysissäsi sen sijaan,
että olettaisit kaupallisen työkalun toimivan heti käyttövalmiina
vähäisellä asennuksella tai että oman ratkaisun integrointikustannus olisi
vähäinen lisä sen kehityskustannukseen.

### Huomioi hankinta-, tietoturva- ja suvereniteettirajoitteet nimenomaisesti ja ajoissa

Julkishallinnon ja säännellyn suuryritysten organisaatioissa datan
suvereniteettivaatimukset, tietoturvasertifiointitarpeet ja hankintaprosessit
voivat olennaisesti kaventaa tai poistaa tiettyjä kaupallisia vaihtoehtoja
niiden ominaisuuksien laadusta riippumatta. Joskus ne kallistavat päätöstä
rakentamisen tai pienemmän, erikseen tarkastettujen toimittajien joukon
suuntaan. Tunnista nämä rajoitteet nimenomaisesti ja arviointiprosessin
alkuvaiheessa sen sijaan, että löydät ne vasta, kun merkittävä arviointityö
on jo mennyt vaihtoehtoon, joka osoittautuu mahdottomaksi syistä, jotka
eivät liity sen todelliseen kykyyn.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Osta kaupallinen työkalu | Nopea ottaa käyttöön, kypsä ominaisuusjoukko, toimittajan ylläpitämä | Vähemmän räätälöitävissä organisaatiokohtaisille tulosmittareille; mahdollinen lukkiutuminen |
| Rakenna sisäinen työkalu | Täysin räätälöity, täysi datan omistajuus ja hallinta | Merkittävä, jatkuva insinöörityön investointi; kaksinkertaistaa työn hyödykemittareille |
| Hybridi: osta hyödykekerros, rakenna tuloskerros | Tasapainottaa kustannustehokkuuden ja aidon räätälöinnin siellä, missä sillä on eniten väliä | Vaatii integrointityötä ostettujen ja rakennettujen osien yhdistämiseksi johdonmukaisesti |
| Osta kaikki, tulostelemetria mukaan lukien, laajalla toimittajan räätälöinnillä | Yksi toimittajasuhde, mahdollisesti yksinkertaisempi hankinta | Voi tulla yhtä kalliiksi kuin rakentaminen, ja lopputuloksen hallinta on heikompaa |

Keskeinen jännite on **räätälöintitarve versus kehityskustannus**. Mittarit,
jotka hyötyvät räätälöinnistä eniten, eli juuri sinun liiketoimintaasi sidottu
tulostelemetria, ovat myös kalleimpia rakentaa hyvin. Mittarit, jotka ovat
halvimpia ostaa, DORA ja katselmointianalytiikka, ovat samalla niitä, joissa
aidolla räätälöinnillä on vähiten merkitystä. Ratkaise jännite sovittamalla
päätös suoraan tähän malliin: osta siellä, missä standardointi palvelee
sinua hyvin, rakenna siellä, missä erityinen kontekstisi aidosti vaatii sitä,
ja budjetoi integrointikustannus realistisesti jaon molemmin puolin.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Hyötyisimmekö jokaisen kirjan käsittelemän mittariperheen kohdalla
   aidosti räätälöinnistä, vai palvelisiko standardoitu kaupallinen työkalu
   meitä yhtä hyvin?** Käy osat 2–6 läpi nimenomaisesti ja lajittele
   jokainen mittariperhe osta- tai rakenna-sarakkeeseen tämän erityisen
   testin perusteella.

2. **Olemmeko arvioineet nykyisen tai mahdollisen toimittajamme datan
   vienti- ja siirrettävyysvaihtoehdot, vai oletammeko, että pääsisimme
   helposti pois, jos tarve tulisi?** Tarkista tämä suoraan oletuksen
   sijaan. Datan lukkiutuminen huomataan usein vasta, kun organisaatio
   oikeasti yrittää vaihtaa.

3. **Huomioiko alkuperäinen rakenna vai osta -analyysimme integrointikustannuksen
   realistisesti, vai keskittyikö se ensisijaisesti lisenssimaksuihin
   verrattuna kehitystunteihin?** Palaa viimeaikaiseen työkalupäätökseen ja
   tarkista, arvioitiinko integrointikustannus aidosti vai aliarvioitiinko
   se merkittävästi.

4. **Kohtaammeko hankinta-, tietoturva- tai datan suvereniteettirajoitteita,
   jotka poistaisivat tietyt kaupalliset vaihtoehdot niiden
   ominaisuuksien laadusta riippumatta?** Tunnista nämä rajoitteet
   nimenomaisesti ennen, ei jälkeen, merkittävän arviointityön investoimista
   vaihtoehtoihin, jotka voivat osoittautua mahdottomiksi.

5. **Onko nykyinen työkalumaisemamme harkittu hybridi, joka sovittaa
   rakentamisen ja ostamisen sinne, missä kumpikin on järkevää, vai
   kertyikö se ajan myötä tapauskohtaisista, yksittäin järkevistä
   päätöksistä?** Ole rehellinen siitä, kumpi malli kuvaa nykytilannettasi
   oikeasti.

6. **Mitä meille maksaisi, työnä ja riskinä, vaihtaa nykyisen
   mittaustyökalun toimittaja tänään, jos meidän pitäisi?** Tämä konkreettinen
   kysymys testaa todellista nykyistä altistumistasi datan lukkiutumisen
   riskille, sen yli, mitä toimittajan sopimusehdot nimellisesti lupaavat.

## Sektorinäkökulma

**Startup-yritys.** Osta hyödyketyökalut oletuksena tässä mittakaavassa.
Räätälöidyn mittausinfrastruktuurin rakentaminen on harvoin hyvä käyttö
niukalle varhaiselle insinöörikapasiteetille, kun DORA- ja katselmointimittareille
on olemassa kypsiä, edullisia kaupallisia vaihtoehtoja. Varaa kaikki
rakennustyö sille yhdelle tulosmittarille (aihe 5.3), joka heijastaa
suorimmin tuotteesi ydinarvoa.

**Pieni yritys.** Useimmat kaupalliset työkalut skaalautuvat kohtuullisesti
alaspäin ja ovat hinnoiteltu edullisesti pienemmille organisaatioille.
Hyödykekerroksen ostaminen on lähes aina oikea valinta, ja minkään
räätälöidyn rakentaminen on harvoin perusteltua, ennen kuin organisaatiosi on
kasvanut huomattavasti ja kehittänyt aidosti erityisiä tarpeita.

**Suuryritys.** Tämän aiheen suosittelema hybridimalli ansaitsee
monimutkaisuutensa tässä: osta hyödykekerros mittakaavassa (usein merkittävällä
neuvotteluvoimalla edullisiin ehtoihin) ja investoi harkiten
organisaatiokohtaisen tulostelemetriakerroksen rakentamiseen, sillä
liiketoimintalogiikkasi ja datamallisi monimutkaisuus tässä mittakaavassa
ylittää yleensä sen, mitä yleinen kaupallinen työkalu voi sisältää ilman
laajaa, kallista räätälöintiä.

**Julkishallinto.** Hankintaprosessit, tietoturvasertifiointivaatimukset ja
datan suvereniteettirajoitteet hallitsevat usein tätä päätöstä enemmän kuin
pelkkä ominaisuus- tai kustannusvertailu antaisi ymmärtää. Ota hankinnan ja
tietoturvan sidosryhmät mukaan arviointiprosessiin ajoissa ja ole valmis
siihen, että rakennusvaihtoehto on täällä aidosti houkuttelevampi kuin
vastaavassa yksityisen sektorin kontekstissa, nimenomaan näiden rajoitteiden
vuoksi eikä siksi, että rakentaminen olisi luonnostaan parempaa.

## Esimerkit

**Suuryritys.** Ohjelmistoyritys yritti aluksi rakentaa täysin räätälöidyn
mittausalustan, joka kattoi jokaisen mittariperheen osista 2–6. Monivuotinen
hanke kulutti merkittävästi insinöörikapasiteettia ja jäi silti jälkeen
kypsistä kaupallisista tuotteista nimenomaan standardoitujen DORA- ja
katselmointimittarien osalta. Uudistettu strategia otti käyttöön
kaupallisen alustan näille hyödykemittareille, mikä vapautti sisäisen
alustatiimin keskittymään yksinomaan liiketoimintatulosten korrelaation
ja yksikkötaloudellisuuden telemetrian (aiheet 5.3, 5.4) rakentamiseen. Ne
olivat aidosti yrityksen liiketoimintamallille ominaisia, eikä mikään
kaupallinen työkalu olisi voinut tarjota niitä käyttövalmiina. Tämä hybridi
tuotti täydellisemmän, aidosti hyödyllisemmän mittariohjelman yhdessä vuodessa
kuin kaiken rakentamisen strategia oli saavuttanut kahdessa.

**Julkishallinto.** Liittovaltion viraston alkuperäinen kaupallisten
ohjelmistotuotannon analytiikka-alustojen arviointi havaitsi, ettei yksikään
saatavilla olevista toimittajista voinut täyttää viraston datan
suvereniteettivaatimuksia, jotka edellyttivät, että kaikki ohjelmistotuotannon
mittaridata pysyy tietyissä, sertifioiduissa valtion datakeskuksissa. Sen sijaan
että virasto olisi hylännyt osto-vaihtoehdon kokonaan, se tunnisti pienemmän
joukon toimittajia, jotka tarjosivat valtion sertifioimia, suvereenin pilven
käyttöönottovaihtoehtoja vaatimattomalla hintalisällä tavalliseen kaupalliseen
hinnoitteluun verrattuna. Se otti onnistuneesti käyttöön hybridiohjelman:
ostetut työkalut hyödykemittarikerrokselle vaaditun suvereniteettirajan
sisällä ja rakennetut sisäiset työkalut viraston erityisiin
kansalaistulosten telemetriatarpeisiin, joihin mikään saatavilla oleva
kaupallinen toimittaja ei vastannut suvereniteettinäkökohdista riippumatta.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Harkitun, hybridimallisen rakenna vai osta -strategian tuotto on välttää
molemmat epäonnistumisen tavat, jotka aiheen esimerkit havainnollistavat:
monivuotinen, hukkaan mennyt insinöörityön investointi sellaisen
hyödykekyvyn rakentamiseen, joka on jo halpana markkinoilla, ja turhautuminen
sekä lopulta räätälöintikustannus, kun aidosti organisaatiokohtainen tarve
pakotetaan huonosti sopivaan kaupalliseen työkaluun. Yllä oleva
suuryritysesimerkki näyttää tämän konkreettisesti: hybridimalli tuotti
enemmän aitoa arvoa yhdessä vuodessa kuin kaiken rakentamisen strategia
kahdessa.

Omistamisen kokonaiskustannukset (TCO) kummallekin vaihtoehdolle sisältävät
integrointikustannuksen, joka usein aliarvioidaan, ja ostetuille työkaluille
erityisesti mahdollisen toimittajalukkiutumisen jatkuvan riskikustannuksen,
ellei datan siirrettävyyttä vahvisteta ja suojata sopimuksella etukäteen.
Molempien realistinen budjetointi, sen sijaan että keskityttäisiin kapeasti
pelkkiin lisenssimaksuihin tai kehitystunteihin, tuottaa paljon tarkemman
kokonaiskustannuskuvan kummallekin vaihtoehdolle.

## Antimallit ja sudenkuopat

- **Räätälöityjen työkalujen rakentaminen hyvin standardoiduille
  hyödykemittareille:** kaksinkertaistaa insinöörityön, johon monet
  toimittajat ovat jo investoineet voimakkaasti.
- **Kaupallisten työkalujen ostaminen aidosti organisaatiokohtaiselle
  tulostelemetrialle tarkistamatta sopivuutta ensin:** riskinä kallis,
  huonosti sopiva räätälöinti tai täyttämätön tarve.
- **Ei datan vienti- ja siirrettävyysarviointia ennen sitoutumista
  toimittajaan:** riskinä pysyvä, kallis lukkiutuminen, joka huomataan vasta
  poistumista yritettäessä.
- **Integrointikustannuksen aliarvioiminen päätöksen kummallakin puolella:**
  tuottaa epätarkan kokonaiskustannusvertailun ja epärealistiset aikataulut.
- **Hankinta-, tietoturva- tai suvereniteettirajoitteiden sivuuttaminen
  myöhäiseen arviointivaiheeseen asti:** haaskaa arviointityötä
  vaihtoehtoihin, jotka osoittautuvat mahdottomiksi kyvystä
  riippumattomista syistä.
- **Päätöksen kohtelu yhtenä, kaikki tai ei mitään -valintana:** ohittaa
  hybridimallin, joka parhaiten vastaa useimpien organisaatioiden todellisia,
  sekoittuneita tarpeita.

## Kypsyysmalli

- **Taso 1, Aloittava:** Työkalupäätökset tehdään tapauskohtaisesti, ilman
  harkittua rakenna vai osta -analyysiä tai datan siirrettävyyden
  huomiointia.
- **Taso 2, Kehittyvä:** Jonkin verran analyysiä tehdään, mutta
  integrointikustannus aliarvioidaan rutiininomaisesti, eikä hybridimallia
  harkita tietoisesti.
- **Taso 3, Vakioitu:** Harkittu, hybridimallinen rakenna vai osta -strategia
  yhdistää hyödykemittarit ostettuihin työkaluihin ja organisaatiokohtaisen
  tulostelemetrian rakennettuihin työkaluihin johdonmukaisesti.
- **Taso 4, Hallittu:** Datan siirrettävyys on vahvistettu ja suojattu
  sopimuksella kaikille ostetuille työkaluille, ja hankinta-, tietoturva- ja
  suvereniteettirajoitteet huomioidaan nimenomaisesti ja ajoissa.
- **Taso 5, Orkestroitu:** Organisaation työkalumaisema heijastaa kypsää,
  harkittua hybridistrategiaa, jota katselmoidaan säännöllisesti kaupallisten
  tuotteiden ja organisaation tarpeiden kehittyessä, ja jonka sekä ostetuista
  että rakennetuista osista on osoitettu arvoa.

## Keskusteluideoita

1. Mitkä nykyisistä mittareistamme hyötyisivät eniten räätälöinnistä, jota emme tällä hetkellä saa?
2. Olemmeko varmistaneet, että voisimme viedä koko historiallisen mittaridatamme, jos meidän pitäisi vaihtaa toimittajaa?
3. Huomioiko viimeisin työkalupäätöksemme integrointikustannuksen realistisesti?
4. Minkä hankinta-, tietoturva- tai suvereniteettirajoitteen voisimme aliarvioida?
5. Miltä harkittu hybridistrategia näyttäisi juuri meidän mittarijoukollemme?

## Keskeiset opit

- Tämä on harvoin kaikki tai ei mitään. Useimmat kypsät ohjelmat **yhdistävät
  ostetut työkalut hyödykemittareille ja rakennetut työkalut
  organisaatiokohtaiselle tulostelemetrialle**.
- **Osta standardoiduille mittareille** (DORA, katselmointianalytiikka,
  kyselyinfrastruktuuri). **Rakenna aidosti organisaatiokohtaiselle**
  tulosmittaukselle.
- Arvioi **datan omistajuus ja siirrettävyys** ennen sitoutumista
  toimittajaan. Lukkiutuminen on pysyvä riski, ei vain epämukavuus.
- **Budjetoi integrointikustannus realistisesti** päätöksen molemmilla
  puolilla. Se aliarvioidaan usein.
- **Hankinta-, tietoturva- ja suvereniteettirajoitteet** voivat ohittaa
  puhtaan kustannus-hyötylaskelman, erityisesti julkishallinnon
  organisaatioilla.

## Lähteet ja lisälukemista

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (mittariperheet, joihin tämän aiheen rakenna vai
  osta -analyysi sovelletaan).
- *Cloud FinOps*, by J.R. Storment and Mike Fuller (kustannusanalyysin
  periaatteet, joita voi soveltaa työkaluinvestointipäätöksiin).
- The FinOps Foundation's FinOps Framework, [finops.org](https://www.finops.org/) (käytännön
  ohjeistus pilvi- ja SaaS-työkalukustannusten arviointiin ja hallintaan).
- U.S. Federal Risk and Authorization Management Program (FedRAMP)
  documentation: luotettava ohjeistus valtion pilvityökalujen tietoturva- ja
  suvereniteettivaatimuksista.
