# 1.6 Tilastollinen lukutaito ohjelmistotuotannon mittareissa

## Yleiskatsaus ja perustelut

Et tarvitse tilastotieteen tutkintoa johtaaksesi mittariohjelmaa hyvin, mutta sinun täytyy välttää pieni joukko tiettyjä, yleisiä virheitä, jotka tekevät muuten hyvin hallituista ja hyvin instrumentoiduista mittareista aktiivisesti harhaanjohtavia. Tiimi voi tehdä kaiken oikein: nimetä selvän päätöksen, välttää Goodhartin lain, painottaa tuloksiin, hallita omistajuutta ja instrumentoida luotettavasti, ja silti tehdä väärän johtopäätöksen, koska se luki keskiarvon siellä, missä tarvittiin persentiili, luuli kohinaa trendiksi tai lankesi sattumaan, joka oli puettu syyksi. Tämä aihe on se tilastollisen arvostelukyvyn vähimmäismäärä, jonka tämä kirja olettaa jokaisen myöhemmän aiheen lukijalla jo olevan.

Ydinongelma on, että ohjelmistotuotannon mittarit ovat yleensä kohisevia, vinoja ja pieniotoksisia muodollisen tilastotieteen mittapuulla. Yksittäisen tiimin viikoittainen julkaisumäärä ei ole sileä kellokäyrä. Se on kourallinen datapisteitä, joissa on satunnaisia suuria poikkeavia havaintoja (iso julkaisu, häiriön ajama takaisinrullausryöppy). Suurille, hyvin käyttäytyville aineistoille rakennettujen naiivien intuitioiden soveltaminen tällaiseen dataan tuottaa säännöllisesti varmoja, vääriä johtopäätöksiä. Sen oppiminen, milloin luku on liian kohiseva luotettavaksi, milloin keskiarvo valehtelee sinulle ja milloin kahden yhdessä liikkuvan asian yhteisliike ei kerro kausaalisuudesta mitään, ei ole valinnaista tarkkuutta. Se erottaa mittariohjelman, joka opettaa organisaatiolle jotain totta, ohjelmasta, joka opettaa sille jotain kuulostavan uskottavaa ja väärää.

Suuryrityksen ja julkishallinnon mittakaavassa tilastolliset virheet kasautuvat, koska harhaanjohtava johtopäätös, kun johto sen hyväksyy, toteutetaan monissa tiimeissä ennen kuin kukaan ajattelee tarkastella taustalla olevaa analyysia uudelleen. Tilastollisesti naiivi vertailu kahden divisioonan välillä tai ennen ja jälkeen suuren uudelleenjärjestelyn voi muokata resursointipäätöksiä vuosia pelkän kohinan tai kenenkään hallitsemattoman sekoittavan tekijän perusteella. Tämä aihe on olemassa tekemään tuosta virheestä epätodennäköisemmän.

## Keskeiset periaatteet

- **Mediaani tai persentiili kertoo yleensä enemmän kuin keskiarvo.** Ohjelmistotuotannon data on rutiininomaisesti vino poikkeavien havaintojen vuoksi, jotka keskiarvot imevät itseensä mutta persentiilit eivät.
- **Pienet otokset tuottavat kohisevia lukuja.** Kourallisesta tapahtumia laskettu prosenttiosuus heiluu rajusti syistä, joilla ei ole mitään tekemistä todellisen muutoksen kanssa.
- **Regressio kohti keskiarvoa huijaa ihmisiä jatkuvasti.** Epätavallisen hyvää tai huonoa lukemaa seuraa yleensä normaalimpi, interventiolla tai ilman.
- **Korrelaatio ei ole kausaalisuutta, ja sekoittavia tekijöitä on kaikkialla.** Kaksi yhdessä liikkuvaa mittaria voi jakaa piilotetun kolmannen syyn sen sijaan, että toinen ajaisi toista.
- **[Ohjauskortti](https://en.wikipedia.org/wiki/Control_chart) päihittää yksittäisen ennen ja jälkeen -vertailun.** Normaalin vaihtelualueen näkeminen antaa sinun erottaa todellisen siirtymän kohinasta.

## Suositukset

### Käytä oletuksena mediaaneja ja persentiilejä vinolle datalle

Ajalliset ohjelmistotuotannon mittarit, läpimenoaika, häiriöstä palautumisen aika ja vasteviive, ovat lähes aina oikealle vinoja: useimmat arvot kasautuvat matalalle, ja pitkässä hännässä on satunnaisia suuria poikkeavia havaintoja. Tuon hännän vetämä keskiarvo voi maalata kuvan, jota mikään tyypillinen tapaus ei muistuta. Raportoi **mediaani** (keskimmäinen arvo, jonka yläpuolella on puolet havainnoista ja alapuolella puolet) yhdessä **90. tai 95. persentiilin** kanssa (arvo, jonka alle 90 % tai 95 % havainnoista jää), jotka yhdessä näyttävät sekä tyypillisen tapauksen että pahimman hännän, jonka tiimi todella kokee. Sisarkirjan `software-engineering-guide` KPI-aihe ja jokainen osan 2 toimitusmittariaihe tässä kirjassa olettavat tämän tavan läpi aiheen.

### Tiedä, milloin otos on liian pieni luotettavaksi

Hitaan viikon kolmesta julkaisusta laskettu muutosten epäonnistumisprosentti ei ole merkityksellinen signaali. Yksi epäonnistuminen siirtää prosenttiosuuden 0 %:sta 33 %:iin yön yli syistä, joilla ei välttämättä ole mitään tekemistä taustalla olevan riskin kanssa. Ennen kuin reagoit prosenttipohjaiseen mittariin, tarkista taustalla oleva lukumäärä. Käytännön nyrkkisääntönä kohtele alle noin kahdestakymmenestä kolmeenkymmeneen tapahtumasta laskettua osuutta kohisevana, joka vaatii pidemmän havaintoikkunan ennen johtopäätöksen tekemistä, ja sano se selvästi mittaristossa sen sijaan, että esittäisit vaihtelevan pienen otoksen prosentin samalla varmuudella kuin vakaan ison otoksen.

### Varo regressiota kohti keskiarvoa ennen kuin hyvität interventiota

Jos tiimin kaikkien aikojen pahinta häiriöviikkoa seuraa johdon huomio ja sitä seuraava parannus, on houkuttelevaa hyvittää parannus interventiolle. Usein osa parannuksesta olisi tapahtunut joka tapauksessa, koska epätavallisen äärimmäistä lukemaa seuraa yleensä tyypillisempi pelkkänä tilastollisena artefaktina, ilmiönä nimeltä **regressio kohti keskiarvoa**. Suojaudu tältä vertaamalla pidempää historiallista lähtötasoa yksittäisen äärimmäisen datapisteen sijaan, joka laukaisi huomion, ja olemalla asianmukaisen nöyrä sen suhteen, kuinka suuren osan havaitusta parannuksesta kohdistat tiettyyn toimenpiteeseen.

### Etsi sekoittavia tekijöitä ennen kuin väität mittarin aiheuttaneen tuloksen

Kun kaksi mittaria liikkuu yhdessä, julkaisutiheys nousee asiakastyytyväisyyden rinnalla, vastusta refleksiä väittää toisen aiheuttaneen toisen ennen kuin olet harkinnut **sekoittavaa tekijää**: piilotettua kolmatta tekijää, joka ajaa molempia. Uuden ominaisuuden lanseeraus voi itsenäisesti nostaa sekä julkaisutiheyttä (enemmän jatkokorjauksia) että tyytyväisyyttä (itse ominaisuus) ilman että kahden mittarin välillä on mitään kausaalista yhteyttä. Ennen kuin esität korrelaation todisteena kausaalisuudesta, kysy aktiivisesti, mikä muu muuttui samaan aikaan ja voisi selittää molemmat liikkeet.

### Käytä ohjauskorttia, älä yksittäistä ennen ja jälkeen -tilannekuvaa

**Ohjauskortti** piirtää mittarin ajan funktiona normaali vaihtelualue näkyvästi esitettynä, tyypillisesti keskiarvon ympärillä olevina kaistoina. Tämä antaa sinun erottaa aidon siirtymän, normaalin alueen ulkopuolisen datapisteen tai pysyvän jakson, tavallisesta kohinasta, jota yksittäinen ennen ja jälkeen -vertailu ei pysty erottamaan. Ennen kuin julistat "luku parani muutoksen jälkeen", piirrä riittävästi historiallista dataa nähdäksesi, miltä normaali vaihtelu näyttää, ja tarkista, osuuko muutoksen jälkeinen lukema todella sen ulkopuolelle.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Keskiarvot | Yksinkertaisia, tuttuja, helppo laskea | Poikkeavat havainnot vääristävät niitä vinossa ohjelmistotuotannon datassa |
| Mediaanit ja persentiilit | Kestäviä poikkeaville havainnoille, näyttävät tyypillisen tapauksen ja hännän yhdessä | Hieman vähemmän tuttuja ei-teknisille yleisöille |
| Yksittäinen ennen ja jälkeen -vertailu | Nopea, intuitiivinen, helppo esittää | Altis regressiolle kohti keskiarvoa ja kohinalle |
| Ohjauskortit ja pidemmät lähtötasot | Erottaa todelliset siirtymät kohinasta luotettavasti | Vaatii enemmän historiallista dataa ja enemmän selittämistä ei-tekniselle yleisölle |

Keskeinen jännite on **yksinkertaisuus vastaan ankaruus**. Keskiarvot ja yksittäiset ennen ja jälkeen -vertailut on helpompi laskea ja selittää, minkä vuoksi ne hallitsevat satunnaista raportointia, mutta ne ovat myös kaksi tekniikkaa, jotka todennäköisimmin tuottavat varman, väärän johtopäätöksen sellaisella kohisevalla ja vinolla datalla, jota tämän kirjan mittarit tuottavat. Ratkaise jännite käyttämällä oletuksena ankarampia tekniikoita, mediaaneja, persentiilejä ja ohjauskortteja, jokaiseen päätökseen, jolla on todellisia seurauksia, ja varaamalla yksinkertaisemmat tekniikat matalan panoksen tutkiviin katsauksiin, joissa väärä luenta maksaa vähän.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Mitkä mittaristomme ruuduista raportoivat keskiarvon siellä, missä mediaani tai persentiili kertoisi totuudenmukaisemman tarinan?** Ajalliset ohjelmistotuotannon mittarit ovat lähes aina vinoja, ja vinon datan keskiarvo voi näyttää hyvältä samalla kun tyypillinen tapaus tai pahin häntä kertoo aivan toista. Auditoi ajalliset ruutusi nimenomaan tämän korvaamisen osalta.

2. **Kuinka pieni on prosenttipohjaisten mittareidemme taustalla oleva otos, ja kohtelemmeko kymmenestä tapahtumasta laskettua mittaria samalla luottamuksella kuin tuhannesta laskettua?** Vaihteleva pienen otoksen osuus, joka esitetään ilman taustalla olevaa lukumäärää, kutsuu ylireagoimaan kohinaan. Tarkista muutosten epäonnistumisprosenttisi ja vastaavat prosenttiruudut tämän aukon osalta.

3. **Olemmeko koskaan hyvittäneet interventiota parannuksesta, jonka regressio kohti keskiarvoa olisi tuottanut joka tapauksessa?** Tämä on yksi helpoimmista tilastollisista virheistä tehdä ja yksi vaikeimmista huomata jälkikäteen, koska interventio ja parannus todella tapahtuivat tuossa järjestyksessä. Katso taaksepäin tuoreeseen "korjasimme sen" -tarinaan ja kysy rehellisesti, oliko lähtötasovertailu riittävän pitkä sulkemaan tämän pois.

4. **Missä olemme olettaneet yhden mittarin aiheuttaneen toisen tarkistamatta sekoittavaa tekijää?** Kahden asian liikkuminen yhdessä on yleistä. Toisen aiheuttaminen toiselle on vahvempi väite, joka tarvitsee enemmän todisteita. Valitse korrelaatio, johon tiiminne tällä hetkellä uskoo, ja yritä nimetä uskottava sekoittava tekijä, joka selittäisi sen ilman mitään kausaalista yhteyttä.

5. **Onko meillä riittävästi historiallista dataa tietääksemme, miltä normaali vaihtelu näyttää tärkeimmille mittareillemme, vai vertaammeko yksittäisiä pisteitä?** Ilman käsitystä normaalista alueesta mikä tahansa yksittäinen lukema näyttää hälyttävältä tai rauhoittavalta tunnelman eikä todisteiden perusteella. Keskustelkaa, onko eniten seuraamanne mittari koskaan piirretty ohjauskortiksi yksittäisen luvun sijaan.

6. **Miten viestimme tällä hetkellä epävarmuudesta ei-teknisille sidosryhmille, ja antaako mittaristomme ymmärtää enemmän tarkkuutta kuin data oikeasti tukee?** Kaavio ilman merkintää normaalista vaihtelusta tai otoskoosta voi saada johtoryhmän ylireagoimaan kohinaan tai, yhtä usein, hylkäämään todellisen signaalin kohinana. Keskustelkaa, miten raportointinne voisi viestiä tämän rehellisesti muuttumatta lukukelvottomaksi.

## Sektorinäkökulma

**Startup-yritys.** Pienet tiimit tuottavat pieniä otoksia lähes kaikkialla, mikä tarkoittaa, että tämän aiheen pienen otoksen varovaisuus on tärkeää jatkuvasti. Vastusta voimakkaiden johtopäätösten tekemistä yhdestä huonosta viikosta tai yhdestä loistavasta. Vain kourallisella datapisteitä rehellinen vastaus kysymykseen "onko tämä trendi" on usein "emme vielä tiedä".

**Pieni yritys.** Valmiiden työkalujen sisäänrakennetut mittaristot käyttävät usein oletuksena keskiarvoja ja yksittäisjaksojen vertailuja, koska ne on yksinkertaisinta laskea ja näyttää. Siirry mediaaneihin ajallisissa mittareissa kun työkalu sen sallii, ja ole skeptinen jokaista pienestä taustalukumäärästä laskettua "ylös 40 % tässä kuussa" -otsikkoa kohtaan.

**Suuryritys.** Tilastolliset virheet tässä mittakaavassa leivotaan resursointi- ja uudelleenjärjestelypäätöksiin, jotka vaikuttavat satoihin ihmisiin. Investoi analyytikoihin tai sulautettuihin datan ammattilaisiin, jotka voivat rakentaa kunnolliset ohjauskortit ja tarkistaa sekoittavat tekijät ennen kuin liiketoimintayksiköiden välinen tai suuren muutoksen ennen ja jälkeen -vertailu esitetään johdolle vakiintuneena tosiasiana.

**Julkishallinto.** Tilastollisesti naiivi vertailu, joka syöttää julkista raporttia tai budjettiperustelua, voi aiheuttaa suhteettomia todellisia seurauksia ja kutsuu juuri sellaista tarkastelua, joka paljastaa huolimattoman analyysin julkisesti. Käytä ankarampia tekniikoita, ohjauskortteja, dokumentoituja otoskokoja ja sekoittavien tekijöiden tarkistuksia, pysyvänä käytäntönä kaikelle ulkoisesti julkaistulle, älä vain satunnaisena parhaana yrityksenä.

## Esimerkit

**Suuryritys.** Ohjelmistoyrityksen johtoryhmä juhli 25 %:n parannusta muutosten epäonnistumisprosentissa kuukautta uuden koodikatselmointikäytännön käyttöönoton jälkeen ja hyvitti käytännön suoraan. Tarkempi katsaus paljasti, että "ennen"-kuukausi oli ollut epätavallisen huono yhden tiimin epäonnistuneen migraation vuoksi, ja taustalla oleva otoskoko molempina kuukausina oli alle kolmekymmentä julkaisua yrityksen laajuisesti. Kahdentoista kuukauden historiaa käyttävä ohjauskortti osoitti, että uusi lukema oli selvästi normaalin vaihtelun sisällä, ei aito askelmuutos, ja käytännön todellinen vaikutus, vaikka todellinen, oli paljon pienempi kuin otsikkoluku antoi ymmärtää.

**Julkishallinto.** Julkisen liikenteen virasto raportoi suuren vuosittaisen parannuksen aikataulussa pysymisessä uudelle digitalisoidulle aikataulujärjestelmälle vertaamalla yhtä "ennen"-neljännestä yhteen "jälkeen"-neljännekseen. Riippumaton katsaus havaitsi, että "ennen"-neljännes oli osunut yhteen aiheeseen liittymättömän rakennustyösulun kanssa, joka oli heikentänyt suoritusta koko verkostossa, ja pidempi lähtötaso osoitti aikataulussa pysymisen jo toipuneen ennen uuden järjestelmän käyttöönottoa. Viraston tarkistettu raportti käytti koko monivuotista ohjauskorttia ja kohdisti vaatimattomamman mutta puolustettavamman parannuksen nimenomaan uuteen järjestelmään.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Tilastollisen lukutaidon tuotto on vältetty harhaanjohtaminen: organisaatio, joka kohdistaa parannuksen oikein tai tunnistaa kohinan kohinaksi, käyttää seuraavan investointinsa siellä, missä se oikeasti auttaa, sen sijaan että jahtaisi aavevaikutusta. Yllä oleva yritysesimerkki on tyypillinen: yritys, joka uskoi katselmointikäytännön yksin ajaneen 25 %:n parannuksen, saattaisi investoida liian vähän muihin todellisiin vaikuttajiin tai liioitella käytännön arvoa tavalla, joka johtaa harhaan tulevissa päätöksissä.

Tilastollisen ankaruuden omistamisen kokonaiskustannus (TCO) on enimmäkseen tapojen muutos eikä uusia työkaluja: mediaanin valitseminen keskiarvon sijaan, otoskoon tarkistaminen ennen reagointia, pidemmän lähtötason piirtäminen ennen voitosta julistamista. Nämä tavat maksavat vähän omaksua ja estävät paljon suuremman, vaikeammin havaittavan kustannuksen päätöksistä, jotka on tehty varmojen, väärien johtopäätösten varassa.

## Antimallit ja sudenkuopat

- **Keskiarvon raportointi vinolle ajalliselle datalle:** piilottaa tyypillisen tapauksen ja hännän yhden harhaanjohtavan luvun taakse.
- **Reagointi prosenttiin ilman näkyvää otoskokoa:** kohtelee kourallisesta tapahtumia syntynyttä kohinaa vakaana, merkityksellisenä trendinä.
- **Intervention hyvittäminen sulkematta pois regressiota kohti keskiarvoa:** yleinen, helppo tehdä ja vaikea huomata virhe.
- **Kausaalisuuden väittäminen korrelaatiosta ottamatta huomioon sekoittavia tekijöitä:** liioittelee sitä, mitä data oikeasti tukee.
- **Yksittäisen ennen ja jälkeen -tilannekuvan vertaaminen pidemmän lähtötason piirtämisen sijaan:** ei pysty erottamaan todellista siirtymää tavallisesta vaihtelusta.
- **Enemmän tarkkuutta kuin data tukee johdolle suunnatussa raportoinnissa:** kutsuu ylireagoimaan kohinaan tai hylkäämään todellisen signaalin.

## Kypsyysmalli

- **Taso 1, Aloittava:** Mittarit raportoidaan raakakeskiarvoina ja yksittäisinä ennen ja jälkeen -tilannekuvina ilman huomiota otoskokoon, vinoumaan tai lähtötason vaihteluun.
- **Taso 2, Kehittyvä:** Jotkin analyytikot soveltavat mediaaneja tai persentiilejä epävirallisesti, mutta johdonmukaista organisaation käytäntöä ei ole ja sekoittavia tekijöitä tarkistetaan harvoin.
- **Taso 3, Vakioitu:** Mediaanit ja persentiilit ovat oletus vinoille ajallisille mittareille. Otoskoot näytetään prosenttipohjaisten mittarien rinnalla koko organisaatiossa.
- **Taso 4, Hallittu:** Ohjauskortit historiallisilla lähtötasoilla ovat vakiokäytäntö jokaiselle aidon siirtymän väitteelle. Sekoittavat tekijät otetaan aktiivisesti huomioon ennen kausaalisten väitteiden esittämistä raportoinnissa.
- **Taso 5, Orkestroitu:** Tilastollinen ankaruus on rakennettu itse työkaluihin, mittaristot näyttävät persentiilit ja ohjauskaistat oletuksena, ja organisaatio voi osoittaa, että tietty aiempi päätös korjattiin, koska tilastollisesti naiivi luenta huomattiin ennen kuin se muokkasi strategiaa.

## Keskusteluideoita

1. Mitkä nykyisistä mittaristomme otsikoista näyttäisivät erilaisilta, jos korvaisimme keskiarvon mediaanilla?
2. Olemmeko koskaan muuttaneet päätöstä, koska prosentti osoittautui perustuvan paljon pienempään otokseen kuin oletimme?
3. Mikä tuore "paransimme tätä mittaria" -tarina meidän pitäisi tarkastella uudelleen regression kohti keskiarvoa kannalta?
4. Missä kaksi mittariamme voisi korreloida piilotetun kolmannen syyn kautta sen sijaan, että toinen ajaisi toista?
5. Näyttävätkö tärkeimmät kaaviomme normaalin vaihtelualueen vai vain yksittäisen trendiviivan?

## Keskeiset opit

- Suosi **mediaaneja ja persentiilejä** keskiarvojen sijaan vinoille, ajallisille ohjelmistotuotannon mittareille.
- Kohtele **pienen otoksen prosenttia** kohisevana ja sano se selvästi sen sijaan, että reagoisit siihen vakaana trendinä.
- Varo **regressiota kohti keskiarvoa** ennen kuin hyvität interventiota parannuksesta, joka seurasi epätavallisen huonoa lukemaa.
- **Korrelaatio ei ole kausaalisuutta.** Etsi aktiivisesti sekoittavia tekijöitä ennen kausaalisen väitteen esittämistä.
- Käytä **ohjauskorttia todellisella historiallisella lähtötasolla**, älä yksittäistä ennen ja jälkeen -tilannekuvaa, erottaaksesi aidon siirtymän tavallisesta kohinasta.

## Lähteet ja lisälukemista

- *The Signal and the Noise*, tekijä Nate Silver (todellisen signaalin erottaminen kohinasta epätäydellisessä datassa).
- *How to Measure Anything*, tekijä Douglas W. Hubbard (tilastollinen päättely organisaation mittaamisessa).
- *Understanding Variation: The Key to Managing Chaos*, tekijä Donald J. Wheeler (ohjauskortit ja ero yleisen syyn ja erityisen syyn vaihtelun välillä).
- *Thinking, Fast and Slow*, tekijä Daniel Kahneman (kognitiiviset vinoumat, mukaan lukien regressio kohti keskiarvoa ja kausaalikertomuksen illuusio).
- *The Visual Display of Quantitative Information*, tekijä Edward R. Tufte (kvantitatiivisen datan rehellinen ja eheä esittäminen).
