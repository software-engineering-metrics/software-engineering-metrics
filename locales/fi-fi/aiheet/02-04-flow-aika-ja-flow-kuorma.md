# 2.4 Flow-aika ja flow-kuorma

## Yleiskatsaus ja perustelut

**Flow-aika** on kokonaiskulunut aika siitä, kun flow-kohde (aihe 2.2) astuu arvovirtaan, siihen, kun se toimitetaan, ja se mittaa vasteisuutta koko polun yli liiketoiminnan tarpeen tunnistamisesta siihen, että asiakas saa arvoa. **Flow-kuorma** on arvovirrassa tiettynä hetkenä aktiivisten tai odottavien flow-kohteiden kokonaismäärä, Flow Frameworkin nimitys sille, mitä aihe 2.5 kutsuu keskeneräiseksi työksi. Yhdessä nämä ovat kaksi Flow Frameworkin mittaria, jotka liittyvät suorimmin jonojen matematiikkaan, koska flow-kuorma ei vain korreloi flow-ajan kanssa vaan sanelee sen matemaattisesti.

Tuo suhde on **[Littlen laki](https://en.wikipedia.org/wiki/Little%27s_law)**, jonoteorian todistus (aihe 2.7 käsittelee sen kokonaisuudessaan), joka toteaa, että vakaassa järjestelmässä olevien kohteiden keskimääräinen lukumäärä on yhtä suuri kuin keskimääräinen saapumisnopeus kerrottuna kunkin kohteen järjestelmässä viettämällä keskimääräisellä ajalla. Tähän soveltaen: flow-kuorma on yhtä suuri kuin saapumisnopeus kerrottuna flow-ajalla. Tämä on tämän aiheen hyödyllisin yksittäinen tosiasia, koska se muuttaa ennen laadullisen väitteen, "olemme liian ylikuormitettuja, asiat kestävät liian kauan", todistettavaksi, kvantitatiiviseksi väitteeksi, jota liiketoimintajohtaja ei voi helposti sivuuttaa: jos flow-kuorma jatkaa nousuaan saapumisnopeuden pysyessä tasaisena, flow-ajan nousu on matemaattisesti taattu, ei vain todennäköinen.

Suurille tiimeille tämä on usein koko viitekehyksen vakuuttavin yksittäinen luku. Liiketoimintajohtaja, joka vastustaa ajatusta kieltäytyä uudesta työstä, koska jokainen pyyntö tuntuu yksittäin perustellulta, hyväksyy usein, että arvovirran ylikuormittaminen todistettavasti hidastaa jokaista siinä jo olevaa kohdetta, kun flow-kuormaa seurataan ja suhde flow-aikaan näytetään suoraan abstraktin väittelyn sijaan. Suuryritykset, jotka tasapainottelevat monien rinnakkaisten strategisten hankkeiden kanssa, ja julkishallinnon ohjelmat, joissa ajetaan kymmeniä rinnakkaisia työvirtoja, nojaavat molemmat tähän todistukseen, ei vain sen taustalla olevaan intuitioon, perustellakseen kieltäytymistä useamman työn aloittamisesta yhtä aikaa.

## Keskeiset periaatteet

- **Flow-kuorma sanelee flow-ajan matemaattisesti Littlen lain kautta.** Tämä ei ole korrelaatiota. Se on todistus, joka pätee mihin tahansa vakaaseen arvovirtaan.
- **Flow-aika ulottuu koko arvovirran yli, ei vain ohjelmistotuotantoon.** Se alkaa, kun liiketoiminnan tarve tunnistetaan, ei kun ohjelmistotuotanto tarttuu työhön, jonka aiheen 2.6 sykliaika sitten purkaa edelleen.
- **Nouseva flow-kuorma on varhaisin varoitusmerkki nousevasta flow-ajasta.** Koska suhde on todistettavissa, flow-kuormaa voi seurata ennakoivana indikaattorina, ei vain löytää sen jälkeen kun flow-aika on jo heikentynyt.
- **Arvovirran sisääntulopiste on kiinnitettävä ja dokumentoitava.** Se, mistä flow-ajan kello alkaa, on määritelmällinen valinta, joka on altis samalle pelaamisen riskille kuin mikä tahansa muu mittarin raja tässä kirjassa.
- **Liiketoimintajohtaja voi toimia suoraan flow-kuorman perusteella.** Toisin kuin flow-aika, joka on jälkikäteinen mittaus, flow-kuorma on vipu: uuden työn aloittamisesta kieltäytyminen on toimi, joka on käytettävissä tänään.

## Suositukset

### Kiinnitä ja dokumentoi arvovirran sisääntulopiste ennen flow-ajan mittaamista

Päätä nimenomaisesti, alkaako flow-aika kun liiketoiminnan tarve ensimmäisen kerran tunnistetaan, kun se virallisesti hyväksytään vai kun ohjelmistotuotanto aloittaa työn, ja dokumentoi valinta samalla tavalla kuin aihe 1.4 suosittelee mille tahansa mittarien peruskirjalle. Tämä yksittäinen päätös määrää, mittaako flow-aika aitoa päästä päähän -vasteisuutta vai vain sitä kapeampaa osaa siitä, jota ohjelmistotuotanto hallitsee, ja määritelmän muuttaminen myöhemmin ilmoittamatta on tämän aiheen keskeinen pelaamisen riski.

### Seuraa flow-kuormaa jatkuvasti, ei ajoittain

Koska flow-kuorma on Littlen lain kautta tulevan flow-ajan ennakoiva indikaattori, seuraa sitä elävänä, jatkuvasti päivittyvänä lukuna eikä ajoittaisena tilannekuvana. Flow-kuorma, joka on jo noussut viikkoja siihen mennessä, kun kukaan tarkistaa sen, on jo yhtä kauan hiljaa pidentänyt flow-aikaa, näkymättömästi, ennen kuin mittari ehti perässä.

### Käytä Littlen lakia nimenomaisesti perustellessasi WIP-rajaa tai kapasiteetin lisäystä

Kun perustelet vähemmän rinnakkaisen työn aloittamista tai kapasiteetin lisäämistä, esitä varsinainen yhtälö, älä vain suositusta: flow-kuorma on yhtä suuri kuin saapumisnopeus kertaa flow-aika, joten jos saapumisnopeus on suunnilleen kiinteä, flow-kuorman vähentäminen on matemaattisesti taatusti flow-ajan vähentämistä. Tämä on olennaisesti vahvempi argumentti epäilevälle sidosryhmälle kuin kvantifioimaton väite "olemme liian kiireisiä", koska se on todistettavissa eikä pelkästään väitetty.

### Erota flow-aika flow-kuorman taustalla olevista syistä ennen korjauksen ehdottamista

Kun flow-kuorma on korkea, tutki, mikä flow-kohdetyyppi (aihe 2.2) sitä todella ajaa: liian monta yhtä aikaa aloitettua ominaisuutta, käsittelemättömien virheiden jono tai jaettua hyväksyntää odottava jumittunut riskityö. Jokainen syy edellyttää eri korjausta, ja "flow-kuorma on korkea" -tilan kohtelu yhtenä, erottelemattomana ongelmana tuottaa yleensä yleisen, tehottoman vastauksen.

### Vertaa flow-aikaa sykliaikaan eristääksesi, missä viive todella syntyy

Koska flow-aika ulottuu koko arvovirran yli ja sykliaika (aihe 2.6) kattaa vain sen ohjelmistotuotannon osuuden, vertaa näitä kahta suoraan. Suuri kuilu flow-ajan ja sykliajan välillä tarkoittaa, että suurin osa viiveestä syntyy ennen kuin ohjelmistotuotanto näkee työn, hyväksyntäjonoissa, priorisointijonoissa tai tiimien välisissä luovutuksissa, mikä osoittaa aivan toisenlaiseen korjaukseen kuin ohjelmistotuotannon sisälle keskittynyt kuilu.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Flow-ajan mittaaminen vain ohjelmistotuotannon aloituksesta | Yksinkertainen, vastaa nykyistä sykliaikainstrumentointia | Ohittaa viiveen ennen ohjelmistotuotantoa, aliarvioi todellista vasteisuutta |
| Flow-ajan mittaaminen aidosta liiketoiminnan tarpeen tunnistamisesta | Tavoittaa todellisen päästä päähän -vasteisuuden | Vaatii instrumentoimaan vaiheita, jotka ovat ohjelmistotuotannon suoran hallinnan ulkopuolella |
| Ajoittaiset flow-kuorman tilannekuvat | Halpa laskea silloin tällöin | Menettää ennakoivan indikaattorin arvon; nouseva kuorma jää huomaamatta liian pitkään |
| Jatkuva flow-kuorman seuranta | Elävä, toimintaan johtava ennakoiva indikaattori | Vaatii jatkuvaa työkaluintegraatiota, ei vain satunnaista raporttia |

Keskeinen jännite on **laajuus vastaan instrumentoinnin ulottuvuus**. Flow-ajan mittaaminen vain ohjelmistotuotannon aloituksesta on paljon helpompaa instrumentoida, koska se käyttää uudelleen sykliaikadataa, jota aihe 2.6 jo kerää, mutta se aliarvioi hiljaa todellista vasteisuutta ohittamalla kaiken, mitä tapahtuu ennen kuin ohjelmistotuotanto näkee työn. Ratkaise jännite aloittamalla kapeammasta, ohjelmistotuotantoon rajatusta mittauksesta, jos se on kaikki, mitä voit tänään instrumentoida, mutta kohtele flow-ajan aloituspisteen laajentamista ylävirtaan, liiketoiminnan tarpeen tunnistamiseen ja priorisointiin, lähiajan prioriteettina eikä pysyvänä rajoitteena.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Mistä flow-aikamme kello todella alkaa tänään, ja ovatko kaikki organisaatiossa samaa mieltä siitä, että se on oikea alkupiste?** Epäsuhta sen välillä, mistä sidosryhmät olettavat kellon alkavan ja mistä se todella alkaa, on yleinen, hiljainen epäluottamuksen lähde mittariin. Varmista, että dokumentoitu määritelmä vastaa jaettua ymmärrystä.

2. **Olemmeko koskaan tarkistaneet, täyttävätkö mitattu flow-kuormamme, saapumisnopeutemme ja flow-aikamme todella Littlen lain?** Jos ne eivät suunnilleen tasapainota, yksi kolmesta luvusta mitataan epäjohdonmukaisesti. Käykää todelliset luvut läpi yhdessä sen sijaan, että oletatte tarkistuksen menevän läpi.

3. **Seurataanko flow-kuormaa jatkuvasti, vai jäisikö tasainen nousu huomaamatta viikkoja ennen kuin kukaan tarkistaisi?** Ennakoiva indikaattori suojaa sinua vain, jos joku todella seuraa sitä lähes reaaliajassa, ei vain katselmoi sitä neljännesvuosiraportissa.

4. **Kun flow-kuorma nousee, voimmeko sanoa, mikä flow-kohdetyyppi sitä todella ajaa, vai näyttääkö se yhdeltä erottelemattomalta luvulta?** Yleinen "olemme ylikuormitettuja" -diagnoosi tuottaa yleisen, usein tehottoman vastauksen. Tarkista, pystyykö nykyinen instrumentointisi todella kohdistamaan nousevan kuorman tiettyyn syyhyn.

5. **Kuinka suuri on kuilu flow-aikamme ja sykliaikamme välillä, ja viittaako tuo kuilu siihen, että suurin osa viiveestä syntyy ennen vai jälkeen sen, kun ohjelmistotuotanto näkee työn?** Tämä vertailu paljastaa usein, että suurin parannusmahdollisuus on kokonaan ohjelmistotuotannon oman hallinnan ulkopuolella.

6. **Onko kukaan koskaan hiljaa kaventanut flow-aikamme aloituspistettä saadakseen luvun näyttämään paremmalta ilman että muutos on dokumentoitu tai ilmoitettu?** Tämä on aiheen keskeinen pelaamisen riski sanottuna suoraan. Kysy rehellisesti, onko määritelmäsi koskaan ajautunut näin.

## Sektorinäkökulma

**Startup-yritys.** Flow-kuorma on yleensä matala yksinkertaisesti siksi, ettei ole tarpeeksi ihmisiä aloittamaan paljon työtä samanaikaisesti, mutta sama matemaattinen suhde pätee heti, kun perustajasta tai johtavasta kehittäjästä tulee henkilökohtainen pullonkaula monille rinnakkaisille hankkeille. Seuraa flow-kuormaa epävirallisesti ilman erillisiä työkaluja, koska Littlen laki pätee mittakaavasta riippumatta.

**Pieni yritys.** Yksinkertainen, jaettu lista kaikesta tällä hetkellä aktiivisesta riittää yleensä flow-kuorman laskemiseen ilman erillistä arvovirranhallintaohjelmistoa. Hyödyllinen tapa on tarkistaa se riittävän säännöllisesti, jotta nouseva luku huomataan ajoissa eikä vasta kun flow-aika on jo näkyvästi heikentynyt.

**Suuryritys.** Tässä Littlen laki ansaitsee paikkansa argumenttina, ei vain mittarina: suuri organisaatio, joka tasapainottelee kymmenien rinnakkaisten strategisten hankkeiden kanssa, voi käyttää flow-kuorman ja flow-ajan todistettavaa suhdetta tehdäkseen näyttöön perustuvan perustelun työn jaksottamiselle, mihin puhtaasti laadullinen "olemme liian kiireisiä" -argumentti harvoin yltää sitkeää sidosryhmäpainetta vastaan.

**Julkishallinto.** Monivuotiset ohjelmat kasaavat rutiininomaisesti suuren, implisiittisen flow-kuorman monien työvirtojen yli, joista kukin on yksittäin perusteltu, ilman organisaation laajuista näkyvyyttä kokonaisuuteen. Littlen lain esittäminen suoraan, osoittaen, että ohjelman oma flow-ajan kasvu selittyy matemaattisesti sen oman nousevan flow-kuorman kautta, on usein selvin ja vakuuttavin saatavilla oleva näyttö työvirtojen jaksottamiselle sen sijaan, että kaikkia ajettaisiin rinnakkain loputtomiin.

## Esimerkit

**Suuryritys.** Mediateknologiayrityksen alustaorganisaatio ajoi kahtakymmentäkahta rinnakkaista strategista hanketta kapasiteetilla, joka oli realistinen noin kahdelletoista, epäsuhta, jota kukaan ei ollut kvantifioinut ennen kuin uusi ohjelmistotuotannon varapresidentti pyysi flow-kuormaa suoraan. Mediaanihankkeen flow-aika oli kasvanut 40 % edellisen vuoden aikana, trendi, jonka johto oli selittänyt "työn vaikeutumisella". Littlen lain esittäminen varsinaisten flow-kuorma- ja saapumisnopeuslukujen rinnalla osoitti, että kasvu selittyi kokonaan pelkällä nousevalla flow-kuormalla, ilman että taustalla olevan työn vaikeuden muutosta tarvittiin sen selittämiseen. Organisaatio jaksotti hankkeet kestävälle flow-kuormalle, ja mediaanin flow-aika laski lähes kolmanneksella kahdessa vuosineljänneksessä.

**Julkishallinto.** Liittovaltion avustushallintoviraston uudistusohjelma oli kasannut flow-kuormaa kymmenien rinnakkaisten työvirtojen yli ilman yhtään seurattua kokonaissummaa, ja jokainen työvirran sponsori uskoi oman hankkeensa olevan asianmukaisesti resursoitu erillään. Ohjelmatoimiston analyysi Littlen lain avulla osoitti, että ohjelman koostettu flow-aika, aika työvirran hyväksynnästä sen toimitukseen, voitiin ennustaa lähes täsmälleen sen koostetusta flow-kuormasta yksin, havainto, joka vakuutti sponsorit, jotka olivat vastustaneet priorisoinnin alentamisen perusteluja yli vuoden. Ohjelma otti käyttöön nimenomaisen flow-kuorman katon, ja uudet työvirrat menevät nyt jonoon sen sijaan, että ne alkaisivat heti nykyisestä kuormasta riippumatta.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Flow-kuorman ja flow-ajan yhdessä seuraamisen tuotto on todistettavissa oleva, ei vain suostutteleva, peruste työn jaksottamiselle kaiken rinnakkaisajon sijaan. Yllä oleva mediateknologiaesimerkki, joka selitti koko flow-ajan heikkenemisen pelkällä flow-kuormalla, on kuvio, jonka tämä yhdistelmä luotettavasti tuottaa: tietty, kvantitatiivinen argumentti onnistuu siellä, missä laadullinen vetoaminen olevansa "liian kiireinen" aiemmin epäonnistui todellista organisaation painetta vastaan aloittaa lisää työtä.

Omistamisen kokonaiskustannus (TCO) on matala suhteessa sen suostuttelevuuteen: flow-kuorma vaatii vain elävän laskennan aktiivisista ja odottavista kohteista, ja flow-aika vaatii arvovirran sisääntulopisteen instrumentointia, työ, joka maksaa itsensä takaisin ensimmäisellä kerralla kun se estää organisaatiota sitoutumasta useampaan rinnakkaiseen hankkeeseen kuin sen todellinen kapasiteetti tukee.

## Antimallit ja sudenkuopat

- **Flow-ajan aloituspisteen hiljainen kaventaminen luvun imartelemiseksi:** tämän aiheen ytimessä oleva pelaamisen tapa. Kellon aloituksen siirtäminen aidosta liiketoiminnan tarpeen tunnistamisesta myöhempään pisteeseen, ohjelmistotuotannon aloitukseen tai viralliseen hyväksyntään, lyhentää flow-aikaa muuttamatta aitoa vasteisuutta lainkaan, ja se voi tapahtua riittävän vähitellen, ettei mikään yksittäinen muutos näytä tahalliselta manipuloinnilta. Suojakaide on sisääntulopisteen nimenomainen dokumentointi mittarien peruskirjaan (aihe 1.4) ja sen ajoittainen auditointi dokumentoitua määritelmää vasten, sama kuri, jota tämä kirja vaatii jokaiselta mittarin rajalta.
- **Flow-kuorman mittaaminen vain ajoittain:** menettää sen arvon ennakoivana indikaattorina, koska tasainen nousu voi jäädä huomaamatta viikkoja.
- **Flow-kuorman kohteleminen yhtenä erottelemattomana lukuna:** ohittaa, mikä flow-kohdetyyppi todella ajaa ylikuormaa, tuottaen yleisen eikä kohdennetun vastauksen.
- **Flow-ajan ja sykliajan välisen kuilun sivuuttaminen:** ohittaa, keskittyykö viive ennen vai jälkeen ohjelmistotuotannon, mikä viittaa hyvin erilaisiin korjauksiin.
- **Rinnakkaisen työn vähentämisen perustelu ilman Littlen lain nimenomaista esittämistä:** laadullinen vetoomus on sidosryhmän paljon helpompi sivuuttaa kuin kvantitatiivinen, todistettavissa oleva suhde.
- **Olettamus, että Littlen laki pätee vain suuressa mittakaavassa:** se pätee mihin tahansa vakaaseen järjestelmään koosta riippumatta, yksittäinen ylikuormitettu henkilö mukaan lukien.

## Kypsyysmalli

- **Taso 1, Aloittava:** Flow-aikaa tai flow-kuormaa ei seurata. Viiveestä keskustellaan anekdoottisesti ilman tukevaa dataa.
- **Taso 2, Kehittyvä:** Flow-aikaa seurataan vain ohjelmistotuotannon aloituksesta, ja flow-kuormaa tarkistetaan ajoittain eikä jatkuvasti.
- **Taso 3, Vakioitu:** Flow-aika mitataan dokumentoidusta, organisaation laajuisesta arvovirran sisääntulopisteestä, ja flow-kuormaa seurataan jatkuvasti ennakoivana indikaattorina.
- **Taso 4, Hallittu:** Littlen lakia käytetään nimenomaisesti perustelemaan kapasiteetti- ja jaksotuspäätöksiä, ja nouseva flow-kuorma kohdistetaan tiettyyn flow-kohdetyyppiin ennen korjauksen ehdottamista.
- **Taso 5, Orkestroitu:** Organisaatio asettaa nimenomaiset flow-kuorman katot arvovirtojensa yli ja voi osoittaa tiettyjä jaksotuspäätöksiä, Littlen lain tukemina, jotka mitattavasti paransivat flow-aikaa.

## Keskusteluideoita

1. Mistä flow-aikamme kello todella alkaa, ja onko tuo määritelmä koskaan ajautunut dokumentoimatta?
2. Täyttävätkö mitattu flow-kuormamme, saapumisnopeutemme ja flow-aikamme suunnilleen Littlen lain?
3. Seurataanko flow-kuormaa riittävän jatkuvasti, jotta tasainen nousu huomattaisiin päivissä eikä kuukausissa?
4. Mikä on kuilu flow-aikamme ja sykliaikamme välillä, ja mitä tuo kuilu kertoo siitä, missä viive todella syntyy?

## Keskeiset opit

- **Flow-kuorma sanelee flow-ajan matemaattisesti** Littlen lain kautta: flow-kuorma on yhtä suuri kuin saapumisnopeus kertaa flow-aika, mille tahansa vakaalle arvovirralle.
- **Flow-aika ulottuu koko arvovirran yli**, liiketoiminnan tarpeen tunnistamisesta toimitukseen, laajempana kuin sykliajan pelkästään ohjelmistotuotantoon rajattu laajuus (aihe 2.6).
- Aiheen keskeinen pelaamisen tapa on **flow-ajan aloituspisteen hiljainen kaventaminen**. Suojakaide on dokumentoitu, auditoitu sisääntulopisteen määritelmä.
- **Seuraa flow-kuormaa jatkuvasti**, ei ajoittain, jotta se toimii aitona ennakoivana indikaattorina eikä jälkikäteisenä löytönä.
- Käytä Littlen lakia **nimenomaisesti**, ei vain intuitiona, kun perustelet WIP-rajaa, kapasiteetin lisäystä tai rinnakkaisen työn jaksottamista.

## Lähteet ja lisälukemista

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
