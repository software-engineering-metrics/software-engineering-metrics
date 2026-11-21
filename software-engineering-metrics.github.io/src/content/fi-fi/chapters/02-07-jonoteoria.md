# 2.7 Jonoteoria

## Yleiskatsaus ja perustelut

**[Jonoteoria](https://en.wikipedia.org/wiki/Queueing_theory)** on odotusjonojen matemaattinen tutkimus. Se kuulostaa oudolta sopivuudelta kirjaan ohjelmistotuotannon mittareista, kunnes huomaa, kuinka suuri osa toimitusputkesta on todellisuudessa jonoa: katselmoijaa odottava pull request, CI-ajajaa odottava commit, noutoa odottava tiketti, vastausta odottava asiakastukiviesti. Aihe 2.4 esitteli jo flow-kuorman ja flow-ajan ja osoitti, että arvovirran ylikuormittaminen hidastaa toimitusta jyrkästi, ja aiheet 2.5 ja 2.6 osoittivat, että suurin osa toimitusajasta on odotusaikaa, ei työaikaa. Jonoteoria on se taustalla oleva matematiikka, joka selittää, miksi kaikki tämä on totta, ei vain havaittu kuvio.

Hyödyllisin yksittäinen tulos on **[Littlen laki](https://en.wikipedia.org/wiki/Little%27s_law)**, operaatiotutkija John Littlen vuonna 1961 todistama lause: vakaassa järjestelmässä olevien kohteiden keskimääräinen lukumäärä on yhtä suuri kuin keskimääräinen kohteiden saapumisnopeus kerrottuna kunkin kohteen järjestelmässä viettämällä keskimääräisellä ajalla. Aihe 2.4 käytti jo tätä tulosta Flow Frameworkin omilla nimillä: flow-kuorma on yhtä suuri kuin saapumisnopeus kertaa flow-aika. Tämän kirjan laajemmassa sanastossa se luetaan myös niin, että keskeneräinen työ (aihe 2.5) on yhtä suuri kuin uuden työn saapumisnopeus kerrottuna sykliajalla (aihe 2.6). Tämä ei ole nyrkkisääntö tai joissain tutkimuksissa havaittu korrelaatio. Se on todistus, joka pätee mihin tahansa vakaaseen jonoon riippumatta siitä, mitä jono käsittelee tai miten se päättää, mitä työstää seuraavaksi.

Suurelle tiimille tuo yleisyys on koko pointti. Littlen laki antaa järkevyystarkistuksen, joka toimii samalla tavalla riippumatta siitä, onko jono kanban-taulu, viestinvälittäjä vai jaettu CI-putki. Jos mitattu keskeneräinen työsi, saapumisnopeutesi ja sykliaikasi eivät suunnilleen täytä yhtälöä, yksi kolmesta luvusta on väärä, yleensä koska sen määritelmä, mikä lasketaan "työn alla olevaksi" tai "saapuneeksi", on epäjohdonmukainen. Suuryritykset ja julkishallinto ajavat kymmeniä tällaisia jonoja yhtä aikaa, jaettuja koodikatselmointipooleja, jaettuja testiympäristöjä ja jaettuja hyväksyntälautakuntia, ja Littlen laki on halvin saatavilla oleva työkalu huonon mittarimääritelmän havaitsemiseen ennen kuin se ajaa huonoon henkilöstö- tai prosessipäätökseen.

## Keskeiset periaatteet

- **Littlen laki on todistus, ei heuristiikka.** Keskeneräinen työ on yhtä suuri kuin saapumisnopeus kertaa sykliaika, mille tahansa vakaalle jonolle, ja se on nopea tarkistus siitä, ovatko toimitusmittarisi sisäisesti johdonmukaisia.
- **Käyttöaste ei skaalaudu lineaarisesti odotusajan kanssa.** Kun jaettu resurssi lähestyy täyttä käyttöastetta, jonotusviive kasvaa jyrkästi, ei vähitellen. 95 % kiireinen resurssi odottaa usein moninkertaisesti kauemmin kuin 80 % kiireinen, ei vain "hieman huonommin".
- **Jonon keskiarvo piilottaa sen pahimman tapauksen.** Pelkän keskimääräisen odotusajan raportointi peittää pitkän, tuskallisen hännän kapasiteetin rajalla, juuri sitä, mitä aihe 1.6 varoittaa, kun puhutaan persentiilien käytöstä keskiarvojen sijaan.
- **Jonon määritelmää voi pelata yhtä helposti kuin mitä tahansa muuta mittaria.** Se, lasketaanko jokin "saapuneeksi", "työn alla olevaksi" vai "palvelluksi", on valinta, ja sitä voi säätää mittariston imartelemiseksi muuttamatta sitä, mitä työlle todella tapahtuu.
- **Putki on yleensä jonojen jono.** Toimitusputki ketjuttaa useita vaiheita yhteen, ja hitain vaihe asettaa koko ketjun tahdin riippumatta siitä, kuinka nopeasti muut toimivat.

## Suositukset

### Käytä Littlen lakia omien lukujesi tarkistamiseen ennen kuin luotat niihin

Ota tiimisi mitattu keskimääräinen keskeneräinen työ, sen keskimääräinen uusien kohteiden saapumisnopeus viikossa ja sen keskimääräinen sykliaika, ja tarkista, onko keskeneräinen työ suunnilleen yhtä suuri kuin saapumisnopeus kerrottuna sykliajalla. Kun se ei ole, älä oleta teorian olevan väärä. Etsi todellinen syy: epäjohdonmukaisesti laskettu vaiheen raja, "estetty" työ, joka silti lasketaan keskeneräiseksi, tai eri aikaikkunalla kuin sykliaika mitattu saapumisnopeus. Tämä yksittäinen tarkistus havaitsee enemmän huonoa instrumentointia kuin useimmat tiimit löytävät millään muulla tavalla.

### Seuraa käyttöastetta suoraan jokaiselle jaetulle, kapasiteettirajoitteiselle resurssille

Tunnista resurssit, joita toimitusputkesi jakaa monien tiimien kesken, katselmointipooli, CI-klusteri, testausympäristö, ja mittaa, kuinka kiireisenä kukin toimii osuutena käytettävissä olevasta kapasiteetistaan, ennen kuin suunnittelet ajavasi sitä lähellä sen rajaa. Jaettu katselmoijaryhmä, joka toimii lähellä täyttä kapasiteettia, tuottaa katselmointijonon odotusaikoja, jotka kasvavat paljon nopeammin kuin ne aiheuttanut vaatimaton kysynnän kasvu, juuri se dynamiikka, jonka vuoksi aihe 2.9 neuvoo tarkkailemaan aikaa ensimmäiseen katselmointiin ennakoivana indikaattorina.

### Erota saapumisnopeus, onnistumisprosentti, epäonnistumisprosentti ja ohitusprosentti

Vastusta kaiken jonosta poistuvan kutistamista yhdeksi "läpivirtaus"- tai "palvelunopeus"-luvuksi. Seuraa neljää asiaa erikseen: kuinka nopeasti työ saapuu, kuinka suuri osa siitä valmistuu onnistuneesti, kuinka suuri osa epäonnistuu ja tarvitsee uudelleentyöstöä ja kuinka suuri osa hylätään tai pudotetaan hiljaa ennen kuin kukaan saa sen valmiiksi. Putki, joka näyttää nopealta, koska sen ohitusprosentti on hiljaa noussut, ei oikeasti toimita enempää, ja vain näiden neljän osuuden erillinen seuranta näyttää sen.

### Mallinna monivaiheiset putket jonojen jonona

Kohtele toimitusputkea tai mitä tahansa monivaiheista prosessia, häiriön elinkaarta, rekrytointiputkea, jonojen ketjuna yhden erottelemattoman "ajan" möykyn sijaan. Kokonaissaapumisnopeuden asettaa ensimmäinen vaihe, kokonaisvalmistumisnopeuden viimeinen vaihe, ja putken kokonaisvirhe- ja ohitusmäärät ovat jokaisen vaiheen omien summa. Tämä kehystys kertoo heti, mihin vaiheeseen kannattaa investoida: sille, jolla on huonoin yhdistelmä korkeaa käyttöastetta ja korkeaa epäonnistumis- tai ohitusprosenttia, ei sille, jonka sattuu olemaan helpoin instrumentoida.

### Aseta henkilöstö- ja WIP-rajat käyttöaste mielessä, ei vain läpivirtausta

Kun päätät, kuinka monta katselmoijaa tai CI-ajajaa tiimi tarvitsee, älä mitoita kapasiteettia vastaamaan täsmälleen keskimääräistä saapumisnopeutta. Jono, joka toimii keskimäärin 100 % käyttöasteella, kokee käytännössä äärettömän odotusajan, koska todelliset saapumiset ovat epätasaisia, eivät täysin sileitä. Suunnittele tietoisesti liikkumavaraa ja kohtele sanontaa "katselmoijamme ovat lähes aina kiireisiä" varoitusmerkkinä tulevista odotusajoista, ei näyttönä tehokkaasta resursoinnista.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei muodollista jonomallia, vaistonvarainen henkilöstömitoitus | Nopea aloittaa; ei uutta sanastoa tiimille | Aliarvioi johdonmukaisesti, miten odotusaika räjähtää lähellä täyttä kapasiteettia |
| Littlen laki järkevyystarkistuksena olemassa oleville mittareille | Halpa, ei vaadi uusia työkaluja, havaitsee huonot määritelmät nopeasti | Tarkistaa vain johdonmukaisuuden, ei yksinään diagnosoi syytä |
| Täysi jonosimulaatio (saapumisjakaumat, useita palvelimia) | Tarkin ennuste odotusaikakäyttäytymisestä kuormituksen alla | Vaatii todellista tilastotaitoa ja ylläpitoa, jota useimmat tiimit eivät ylläpidä |
| Käyttöasteen seuranta jaetuille resursseille ilman syvempää mallinnusta | Yksinkertainen, toimintaan johtava, havaitsee yksittäisen suurimman karanneiden odotusaikojen syyn | Ei kerro mitään siitä, miksi käyttöaste on korkea tai mitä taustalla olevalle syylle pitäisi tehdä |

Keskeinen jännite on **ankaruus vastaan omaksuminen**. Täysi jonosimulaatio antaa tarkimman vastauksen, mutta lähes mikään ohjelmistotiimi ei rakenna ja ylläpidä sellaista, ja malli, johon kukaan ei luota tai jota kukaan ei päivitä, on huonompi kuin ei mallia. Littlen laki ja perustason käyttöasteen seuranta luopuvat osasta tarkkuutta mutta eivät vaadi erikoistunutta tilastotaitoa ja sopivat suoraan mittareihin, joita tiimi jo kerää aiheita 2.4–2.6 varten. Käytä oletuksena noita halpoja, omaksuttavia tarkistuksia ja varaa täysi simulaatio harvinaiselle tapaukselle, jossa yksittäinen jaettu resurssi, suuri CI-laivasto tai erikoistunut katselmointipooli, on riittävän kallis oikeuttamaan investoinnin.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Täyttävätkö mitattu keskeneräinen työmme, saapumisnopeutemme ja sykliaikamme todella Littlen lain, ja jos eivät, miksi eivät?** Tämä on nopein saatavilla oleva diagnostiikka huonolle mittarimäärittelylle. Käykää todelliset luvut läpi yhdessä, ja jos yhtälö ei suunnilleen päde, jäljittäkää epäsuhta tiettyyn määritelmälliseen epäjohdonmukaisuuteen sen sijaan, että sivuuttaisitte tarkistuksen.

2. **Mitkä toimitusputkemme jaetuista resursseista toimivat lähellä täyttä käyttöastetta, ja tiedämmekö oikeasti niiden käyttöasteluvun?** Useimmat tiimit osaavat nimetä resurssin, joka "tuntuu aina kiireiseltä", mutta eivät ole koskaan mitanneet sen käyttöastetta suoraan. Tunnista kaksi tai kolme eniten rajoitettua jaettua resurssia ja hanki todellinen luku kullekin.

3. **Sekoitammeko onnistumisen, epäonnistumisen ja ohituksen yhdeksi läpivirtausluvuksi, ja mitä näkisimme, jos jakaisimme ne erilleen?** Yksittäinen "valmistuneet kohteet" -määrä voi nousta vaikka laatu laskee tai työ hylätään hiljaa. Laske viimeaikaisen jakson läpivirtaus uudelleen kolmena erillisenä lukuna ja keskustelkaa, mitä jako paljastaa, minkä sekoitettu luku piilotti.

4. **Missä putkessamme on todellinen pullonkaula, hitain vaihe, joka asettaa tahdin kaikelle sen jälkeiselle?** Tiimit investoivat usein vaiheen nopeuttamiseen, joka on helpoin parantaa, sen sijaan, mikä todella rajoittaa kokonaisläpivirtausta. Tunnista vaihe, jolla on huonoin yhdistelmä korkeaa käyttöastetta ja korkeaa epäonnistumis- tai ohitusprosenttia.

5. **Jos lisäisimme kapasiteettia eniten rajoitettuun jaettuun resurssiimme, paranisiko odotusaika todella, vai laajenisiko kysyntä yksinkertaisesti täyttämään sen?** Tämä kysymys erottaa aidon kapasiteettivajeen kysyntäongelmasta, ja vastaus muuttaa sen, onko oikea korjaus lisää henkilöstöä, WIP-raja vai muutos siinä, miten työ priorisoidaan ennen jonoon tuloa.

6. **Olemmeko koskaan määritelleet uudelleen, mikä lasketaan "työn alla olevaksi" tai "saapuneeksi" tavalla, joka sai mittariston näyttämään paremmalta muuttamatta sitä, mitä työlle todella tapahtui?** Tätä kannattaa kysyä rehellisesti ja täsmällisesti, todellisilla esimerkeillä viime vuodelta, sen sijaan että kohdeltaisiin sitä hypoteettisena huolena.

## Sektorinäkökulma

**Startup-yritys.** Kourallisella kehittäjiä useimmat jonot ovat niin lyhyitä, että muodollinen jonoanalyysi on liioittelua. Hyödyllinen tapa on pienempi: huomaa, kun yksi henkilö, usein kokenein kehittäjä, on muuttunut tosiasialliseksi jaetuksi resurssiksi, jota kaikki muu odottaa, ja kohtele sitä käyttöasteongelmana, joka kannattaa nimetä vaikka ilman muodollista mallia sen takana.

**Pieni yritys.** Pieni yritystiimi tarvitsee harvoin mitään hienostuneempaa kuin käyttöasteen seurannan sen yhdelle tai kahdelle aidosti jaetulle resurssille, usein yksittäinen katselmoija tai yksittäinen julkaisuputki, ja tarkkailee kohtaa, jossa "yleensä saatavilla" muuttuu hiljaa "yleensä pullonkaulaksi". Taulukkolaskenta riittää. Erillisiä työkaluja ei tarvita tässä mittakaavassa.

**Suuryritys.** Jaetut resurssit lisääntyvät nopeasti suuryrityksen mittakaavassa: keskitetty alustatiimi, jaettu tietoturvakatselmointilautakunta, kymmeniä tuotetiimejä palveleva jaettu CI-laivasto. Nämä ovat juuri ne resurssit, joissa käyttöasteen seuranta ansaitsee paikkansa, koska yksittäinen ylikuormitettu jaettu resurssi voi hiljaa heikentää toimitusaikaa jokaiselle sitä käyttävälle tiimille, eikä minkään yksittäisen tiimin omat mittarit paljasta syytä, joka on heidän oman putkensa ulkopuolella.

**Julkishallinto.** Usean viraston ja usean toimittajan toimitusohjelmat ohjaavat usein työn jaettujen hyväksyntälautakuntien, jaettujen tietoturvan akkreditointiprosessien ja jaettujen testausympäristöjen kautta, joita mikään yksittäinen tiimi ei hallitse tai voi mitoittaa itse uudelleen. Näiden jaettujen porttien jonoanalyysi, saapumisnopeus, kapasiteetti, käyttöaste, on usein selvin saatavilla oleva näyttö liiketoimintaperustelulle kapasiteetin lisäämiseksi tai sen muuttamiseksi, miten työ koostetaan ennen portille saapumista.

## Esimerkit

**Suuryritys.** Pilvi-infrastruktuuritoimittajan sisäinen alustatiimi huomasi, että muutosten läpimenoaika (aihe 2.10) oli hiipinyt ylöspäin jokaisessa sen jaettua CI-laivastoa käyttävässä tuotetiimissä, vaikka yksikään yksittäinen tiimi ei ollut muuttanut toimintatapaansa. Käyttöasteanalyysi osoitti laivaston toimivan yli 90 % kiireisenä ydintyöaikoina, selvästi sen pisteen yli, jossa jonoteoria ennustaa odotusajan kasvavan jyrkästi eikä vähitellen. Alustatiimi lisäsi CI-kapasiteettia ja otti käyttöön reilun jaon ajoituskäytännön, jotta mikään yksittäinen tiimin aktiivisuuspiikki ei voisi monopolisoida jonoa. Mediaani CI-odotusaika laski yli puoleen kuukaudessa, näyttö siitä, että pullonkaula oli ollut jaettu, näkymätön jono koko ajan.

**Julkishallinto.** Kansallisen lupaviraston digitaalisen palvelun tiimi seurasi hakemusten käsittelyä yhtenä "viikossa suljetut tapaukset" -läpivirtauslukuna kaksi vuotta, ja luku näytti vakaalta. Tarkempi analyysi, joka jakoi luvun hyväksyttyihin, hylättyihin ja hakijoiden pitkien viiveiden jälkeen hylkäämiin tapauksiin, havaitsi hylkäämisosuuden lähes kolminkertaistuneen samalla jaksolla hyväksyntöjen pysyessä tasaisina. Littlen laki, sovellettuna käsittelijäjonoon, osoitti keskeneräisen työn kasvaneen paljon yli sen, mitä tiimin ilmoittama keskimääräinen käsittelyaika antoi ymmärtää, eli tapauksia kasautui hiljaa tilaan, jota ei laskettu "odottavaksi". Virasto muotoili tapausseurannan määritelmät uudelleen laskemaan jokaisen avoimen tapauksen rehellisesti ja lisäsi käsittelijäkapasiteettia mitoitettuna pitämään käyttöaste alle 85 %:n, jota seurataan nyt pysyvänä operatiivisena tavoitteena läpivirtausluvun rinnalla.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Perustason jonoanalyysin soveltamisen tuotto on, että se muuttaa "putki tuntuu hitaalta" tietyksi, puolustettavaksi päätökseksi, lisää liikkumavaraa tälle jaetulle resurssille, jaa tämä sekoitettu mittari todellisiin osiinsa, sen sijaan että epämääräinen painostus "työskennellä nopeammin" ohittaisi todellisen syyn. Yllä oleva pilvi-infrastruktuuriesimerkki, puolittunut odotusaika kapasiteetti- ja ajoituskorjauksesta eikä minkään yksittäisen tiimin käyttäytymisen muutoksesta, on kuvio, jonka tämä analyysi luotettavasti tuottaa: korjaus on lähes aina halvempi kuin pyytää jokaista alavirran tiimiä liikkumaan nopeammin sellaisen pullonkaulan ympäri, jota ne eivät näe.

Käyttöönoton omistamisen kokonaiskustannus (TCO) on aidosti matala. Littlen laki ja käyttöasteen seuranta eivät tarvitse uusia työkaluja sen lisäksi, mitä aiheet 2.4–2.6 jo pyytävät keräämään: saapumisnopeus, keskeneräinen työ ja sykliaika. Investointi on enimmäkseen analyyttinen kuri, lukujen tarkistaminen toisiaan vasten ja käyttöasteen ajoittainen katselmointi jaetuille resursseille ennen kuin niistä tulee organisaation seuraava selittämätön läpimenoajan heikkeneminen.

## Antimallit ja sudenkuopat

- **Jaetun resurssin kapasiteetin mitoittaminen vastaamaan täsmälleen sen keskimääräistä saapumisnopeutta:** takaa korkean käyttöasteen ja karanneet odotusajat aina kun kysyntä on edes hetkellisesti epätasaista.
- **Vain keskimääräisen odotusajan raportointi, ei koskaan persentiiliä:** piilottaa pitkän hännän, joka on tärkein siinä odottaville ihmisille.
- **Onnistumisen, epäonnistumisen ja ohituksen sekoittaminen yhdeksi läpivirtausluvuksi:** tämän aiheen ytimessä oleva pelaamisen tapa. Paineen alla oleva tiimi voi saada läpivirtauksen näyttämään terveeltä antamalla ohitusprosentin hiljaa nousta: hylätyt tiketit, hiljaa pudotetut pyynnöt, työ, jota ei koskaan lasketa epäonnistumiseksi. Suojakaide on seurata saapumis-, onnistumis-, epäonnistumis- ja ohitusprosenttia neljänä erillisenä, näkyvänä lukuna, sama kuri, jota aihe 1.2 pyytää jokaiselle tämän kirjan mittarille, jotta nouseva ohitusprosentti ei voi piiloutua tasaisen läpivirtauskaavion taakse.
- **Lauseen "väkemme on aina kiireistä" kohteleminen kohteliaisuutena:** se on korkean käyttöasteen oire, pitkien, ennakoimattomien odotusaikojen johtava syy.
- **"Työn alla olevan" uudelleenmäärittely keskeneräisen työn hiljaiseksi kutistamiseksi:** siirtää työn laskemattomaan tilaan, "estetty", "pidossa", muuttamatta sitä, kuinka kauan sen valmistuminen kestää, ja rikkoo Littlen lain tarkistuksen, joka olisi muuten havainnut sen.
- **Olettamus, ettei jonomalli tarvitse ylläpitoa kun se on rakennettu:** saapumiskuviot ja kapasiteetti muuttuvat jatkuvasti, ja vanhentunut malli tuottaa varmasti vääriä ennusteita.

## Kypsyysmalli

- **Taso 1, Aloittava:** Mitään jonoa ei mitata nimenomaisesti. Odotusajasta keskustellaan anekdoottisesti "asiat tuntuvat hitailta".
- **Taso 2, Kehittyvä:** Saapumisnopeutta, keskeneräistä työtä ja sykliaikaa seurataan vähintään yhdelle putkelle, mutta niitä ei koskaan tarkisteta Littlen lakia vasten eikä jaettujen resurssien käyttöastetta vasten.
- **Taso 3, Vakioitu:** Littlen laki on rutiininomainen johdonmukaisuustarkistus toimitusputkien yli, ja käyttöastetta seurataan nimenomaisesti merkittävimmille jaetuille resursseille.
- **Taso 4, Hallittu:** Onnistumis-, epäonnistumis- ja ohitusprosenttia seurataan erikseen jokaiselle merkittävälle jonolle, ja kapasiteettipäätökset käyttävät käyttöastetavoitteita, ei vain keskimääräistä kysyntää.
- **Taso 5, Orkestroitu:** Organisaatio mallintaa tärkeimmät putkensa jonojen jonoina, tunnistaa todelliset pullonkaulat järjestelmällisesti ja voi osoittaa tiettyjä kapasiteetti- tai prosessimuutoksia, jotka tehtiin jonoanalyysin perusteella, mitatulla odotusajan parannuksella todistettuna.

## Keskusteluideoita

1. Valitse yksi toimitusputkistamme ja tarkista, täyttävätkö sen luvut Littlen lain tänään.
2. Nimeä organisaatiomme yksittäinen jaettu resurssi, jonka useimmat sopisivat olevan "aina kiireinen", ja selvitä sen todellinen käyttöasteluku.
3. Miltä läpivirtauskaaviomme näyttäisi, jos jakaisimme sen onnistumis-, epäonnistumis- ja ohitusprosentteihin viimeiseltä neljännekseltä?
4. Jos meidän täytyisi lisätä kapasiteettia täsmälleen yhteen jaettuun resurssiin tänä vuonna, mihin, ja mikä näyttö sen oikeuttaisi?

## Keskeiset opit

- **Littlen laki**, keskeneräinen työ on yhtä suuri kuin saapumisnopeus kertaa sykliaika, on todistus, ei heuristiikka, ja se on halvin saatavilla oleva tarkistus siitä, ovatko toimitusmittarisi sisäisesti johdonmukaisia.
- **Odotusaika kasvaa jyrkästi, ei vähitellen, kun käyttöaste lähestyy täyttä kapasiteettia.** Kohtele "aina kiireistä" varoitusmerkkinä, ei kohteliaisuutena.
- Seuraa **saapumisnopeutta, onnistumisprosenttia, epäonnistumisprosenttia ja ohitusprosenttia** erikseen. Niiden sekoittaminen yhdeksi läpivirtausluvuksi on tämän aiheen keskeinen pelaamisen tapa.
- Mallinna monivaiheinen putki **jonojen jonona** ja investoi vaiheeseen, jolla on huonoin yhdistelmä korkeaa käyttöastetta ja korkeaa epäonnistumis- tai ohitusprosenttia, ei vaiheeseen, jota on helpoin parantaa.
- Suosi halpoja, omaksuttavia tarkistuksia, **Littlen lakia ja käyttöasteen seurantaa**, täyden jonosimulaation sijaan, jota harva tiimi ylläpitää.

## Lähteet ja lisälukemista

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve Performance Problems on the Computer Systems You Work With*. CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
