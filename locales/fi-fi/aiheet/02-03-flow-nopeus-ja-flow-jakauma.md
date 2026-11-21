# 2.3 Flow-nopeus ja flow-jakauma

## Yleiskatsaus ja perustelut

**Flow-nopeus** on tietyllä jaksolla valmistuneiden flow-kohteiden (aihe 2.2) lukumäärä, Flow Frameworkin [läpivirtauksen](https://en.wikipedia.org/wiki/Throughput) mitta. **Flow-jakauma** on kunkin flow-kohdetyypin, ominaisuuksien, virheiden, riskin ja velan, osuus samalla jaksolla valmistuneista kohteista. Nämä kaksi mittaria on suunniteltu luettavaksi yhdessä: nopeus yksin vastaa kysymykseen "kuinka paljon toimitimme" ja jakauma yksin kysymykseen "millaista työ oli", mutta kumpikaan kysymys ei merkitse paljoa ilman toista. Tiimi voi nostaa nopeuttaan samalla kun sen jakauma siirtyy hiljaa pois ominaisuuksista kohti virheiden uudelleentyöstöä, mikä näyttää kiihtyvyydeltä nopeuskaaviossa ja on todellisuudessa laadun heikkenemisen oire.

Tämä pariutus on sama kuri, jota aihe 1.2 vaatii jokaiselta tämän kirjan mittariperheeltä: älä koskaan raportoi nopeuslukua ilman suojakaidetta, joka näyttää, mitä tuo nopeus maksoi. Flow-nopeus on tämän osan suorin läpivirtausmittarin yleistys, hengeltään lähempänä julkaisutiheyttä (aihe 2.10) kuin mitään muuta yksittäistä lukua tässä kirjassa, mutta kohdetyypin huomioiva tavalla, johon julkaisutiheys ei koskaan yltänyt. Julkaisutiheys kertoo, kuinka usein koodi saavuttaa tuotannon. Flow-nopeus yhdessä jakauman kanssa kertoo, kuinka usein arvo saavuttaa tuotannon ja millaista arvoa se on.

Suurille tiimeille, jotka ajavat monta rinnakkaista arvovirtaa, tämä pariutus paljastaa kuvion, jonka yksittäinen läpivirtausluku piilottaa täysin: arvovirran, jonka nopeus näyttää terveeltä samalla kun sen jakauma on hiljaa ajautunut lähes puhtaaseen ominaisuustyöhön ja näivettää hiljaa velka- ja riskikapasiteettia, jonka aihe 2.2 varoitti tarvitsevan tietoista suojelua. Tuotelinjojen läpivirtausta vertailevat suuryritykset ja toimitustuotosta valvontaelimille raportoivat julkishallinnon virastot tarvitsevat molemmat tätä pariutusta, jotta raakatuotosta ei sekoiteta aitoon, kestävään edistykseen.

## Keskeiset periaatteet

- **Nopeus ilman jakaumaa piilottaa sen, mitä todella toimitettiin.** Nouseva kohdemäärä ei kerro mitään siitä, onko tuo määrä terve, pelattu vai hiljaa vinoutunut kohti helpointa saatavilla olevaa työtä.
- **Jakauma ilman nopeutta piilottaa mittakaavan.** Terveeltä näyttävällä prosenttijaolla on vähän merkitystä, jos et tiedä myös, kuinka paljon työtä se kokonaisuudessaan edustaa.
- **Nämä kaksi mittaria on aina raportoitava yhdessä.** Tämä on suora sovellus aiheen 1.2 suojakaiteen pariutuksen periaatteesta nimenomaan flow-dataan.
- **Nopeus on altis samalle korvaamispelaamiselle kuin mikä tahansa kohdemääriin perustuva mittari.** Vaikean työn pilkkominen moneksi pieneksi, helpoksi kohteeksi paisuttaa lukumäärää toimittamatta suhteellisesti enemmän arvoa.
- **Terve jakauma on kontekstisidonnainen, ei kiinteä tavoite.** Aihe 2.2 käsittelee tätä syvällisesti. Nopeus ja jakauma tulee aina tulkita sen tavoitteen valossa, jonka konteksti edellyttää.

## Suositukset

### Raportoi flow-nopeus trendiviivana, älä koskaan yhden jakson lukuna

Yhden jakson kohdemäärä on kohiseva ja helppo lukea väärin. Piirrä flow-nopeus useiden peräkkäisten jaksojen yli ja katso trendiä, ei yhtä datapistettä, sama kuri, jota aihe 1.6 suosittelee jokaiselle luonnolliselle vaihtelulle alttiille aikasarjamittarille.

### Älä koskaan esitä flow-nopeutta ilman jakaumaa sen rinnalla

Kohtele tätä ehdottomana sääntönä jokaiselle mittaristolle tai raportille, ei mukavana lisänä. Yksin esitetty nopeuskaavio kutsuu juuri sitä väärinluentaa, jolla tämä aihe alkoi: nouseva läpivirtaus, joka on todellisuudessa nouseva uudelleentyöstön tai helpon ominaisuustyön osuus, joka syrjäyttää velka- ja riskikapasiteetin. Laita molemmat samaan näkymään, aina.

### Painota nopeutta koolla tai monimutkaisuudella, kun kohteiden koot vaihtelevat paljon

Raaka kohdemäärä kohtelee yhden rivin konfiguraatiomuutosta ja usean viikon arkkitehtuurimigraatiota samanarvoisina, mikä kutsuu samaa korvaamispelaamista, jonka tämä kirja on jo nimennyt julkaisutiheydelle (aihe 2.10): vaikean työn pilkkominen moneksi pieneksi kohteeksi paisuttaa lukumäärää toimittamatta suhteellisesti enemmän. Kun kohteiden koot vaihtelevat paljon, painota nopeutta karkealla koko- tai monimutkaisuusarviolla tai seuraa keskimääräistä kohteen kokoa raakamäärän rinnalla, jotta kutistuva keskikoko nousevan määrän vieressä on näkyvä eikä piilossa.

### Tarkkaile flow-jakauman ajautumista, ei vain sen nykyistä tilannekuvaa

Hyödyllisin signaali flow-jakaumassa ei harvoin ole tämän jakson tarkat prosentit vaan muutoksen suunta usean jakson yli. Tasainen ajautuminen, ominaisuuksien kasvu velan ja riskin hiljaa kutistuessa, kannattaa nostaa sidosryhmien kanssa esiin hyvissä ajoin ennen kuin siitä tulee sellainen laatu- tai tietoturvaongelma, jonka aihe 2.2 varoittaa kasautuvan näkymättömästi feature factory -kuvion alla.

### Vertaa flow-nopeutta arvovirtojen välillä vain aidosti huolellisesti

Kahta arvovirtaa, joilla on eri kohderakeisuus, eri tiimikoot tai eri tuotevaiheet, ei voi suoraan verrata pelkän raa'an nopeuden perusteella, sama reiluusongelma, jonka aihe 2.10 nimeää julkaisutiheydelle tiimien välillä. Käytä nopeutta ensin arvovirran oman trendin tarkasteluun ja yritä arvovirtojen välistä vertailua vasta varmistettuasi aidosti vertailukelpoiset kohdemäärittelyt ja rakeisuus.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Pelkkä raaka kohdemääränopeus | Helppo laskea ja selittää | Altis korvaamispelaamiselle; piilottaa, millaista arvoa toimitettiin |
| Nopeus pariutettuna jakauman kanssa | Näyttää sekä mittakaavan että arvosekoituksen yhdessä | Vaatii kurinalaista flow-kohteiden luokittelua (aihe 2.2) ollakseen merkityksellinen |
| Kokopainotettu nopeus | Vastustaa kohteiden pilkkomisesta johtuvaa korvaamispelaamista | Vaatii johdonmukaisen, sovitun kokoarviointimenetelmän tiimissä |
| Arvovirtojen välinen nopeusvertailu | Hyödyllinen salkkutason investointipäätöksiin | Helposti epäreilu ilman aidosti vertailukelpoisten kohdemäärittelyjen varmistamista |

Keskeinen jännite on **yksinkertaisuus vastaan pelaamisen kestävyys**. Raaka kohdemäärä on helpoin luku laskea ja selittää, mutta myös helpoin paisuttaa pilkkomalla vaikeaa työtä moneksi pieneksi osaksi. Ratkaise jännite pitämällä ensisijainen mittari yksinkertaisena, raaka nopeus pariutettuna jakauman kanssa, ja varaamalla kokopainotus arvovirroille, joissa kohteiden tiedetään vaihtelevan niin paljon, että yksinkertainen määrä on muuttunut aktiivisesti harhaanjohtavaksi.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Kun raportoimme flow-nopeutta, näytetäänkö flow-jakauma aina sen rinnalla, vai seisooko nopeus joskus yksin?** Nopeusluku ilman jakaumaa on tämän aiheen oman keskeisen periaatteen mukaan epätäydellinen kuva. Tarkista varsinaiset mittaristosi ja raporttisi tämän aukon osalta.

2. **Onko keskimääräinen kohteen kokomme muuttunut nousevan nopeuden rinnalla, ja tietäisimmekö, jos se olisi?** Kutistuva keskikoko nousevan määrän vieressä on korvaamispelaamisen erityinen tunnusmerkki flow-kohteisiin sovellettuna. Hae varsinainen data sen sijaan, että oletat kuvion puuttuvan.

3. **Olemmeko koskaan verranneet nopeuttamme toisen tiimin nopeuteen varmistamatta, että kohdemäärittelymme ja rakeisuutemme todella vastaavat toisiaan?** Epäreilu vertailu tässä voi painostaa tiimiä pelaamaan omia lukujaan pelkästään näyttääkseen vertailukelpoiselta, kaikuen samaa riskiä, jonka tämä kirja on jo nimennyt julkaisutiheydelle.

4. **Onko flow-jakaumamme ajautunut yhteen suuntaan viime jaksojen aikana, ja päättikö kukaan sitä tarkoituksella?** Hidas ajautuminen on helppo missata jakso jaksolta. Piirrä useita jaksoja yhdessä ja etsi rehellisesti trendiä ennen kuin oletat nykyisen jaon vakaaksi.

5. **Jos joku haluaisi paisuttaa flow-nopeuttamme tekemättä enemmän todellista työtä, mikä on helpoin tapa, jolla hän voisi sen tehdä, ja saisiko nykyinen raportointimme sen kiinni?** Käy läpi vaikeiden kohteiden pilkkomisen helpoiksi tarkka mekaniikka ja keskustelkaa, paljastaisiko mittaristonne kuvion todella.

6. **Tavoittavatko nopeus- ja jakaumalukumme koskaan liiketoiminnan sidosryhmät yhdessä, vai kulkeeko vain nopeusotsikko ylöspäin?** Pariutuksen periaate suojaa väärinluennalta vain, jos molemmat puolikkaat todella nähdään datan perusteella päätöksiä tekevien ihmisten toimesta.

## Sektorinäkökulma

**Startup-yritys.** Flow-nopeutta on yleensä helppo seurata epävirallisesti tässä mittakaavassa, koska koko tiimillä on jo karkea käsitys läpivirtauksesta. Hyödyllinen kuri on pariuttaa se jakauman kanssa vaikka epävirallisesti, jotta perustaja ei sekoita nousevaa tikettien sulkemismäärää aitoon ominaisuusedistykseen, kun määrää todellisuudessa hallitsee varhaisvaiheen virheiden korjaus.

**Pieni yritys.** Seuraa nopeutta ja jakaumaa yhdessä siitä kevyestä työkalusta, jota jo käytät flow-kohteiden luokitteluun (aihe 2.2). Erillistä analytiikka-alustaa ei tarvita tässä mittakaavassa. Tapa katsoa niitä aina rinnakkain on tärkeämpi kuin mikään työkalujen hienostuneisuus.

**Suuryritys.** Arvovirtojen välinen nopeusvertailu on houkuttelevaa tässä mittakaavassa salkkutason priorisointiin, ja se on myös se kohta, jossa reiluusriski on suurin, koska eri tuotelinjoilla on perustellusti hyvin erilainen kohderakeisuus. Investoi vertailukelpoisten määritelmien varmistamiseen ennen kuin käytät nopeusvertailuja perustelemaan tiimien välisiä investointipäätöksiä.

**Julkishallinto.** Jakauman kanssa pariutettu flow-nopeus antaa julkisen sektorin teknologiajohtajalle paljon vahvemman näyttöpohjan toimitustuotoksen raportointiin valvontaelimille kuin pelkkä raaka läpivirtaus, koska se voi näyttää paitsi kuinka paljon toimitettiin myös että sekoitus heijastaa tietoista, puolustettavaa allokaatiota uuden toiminnallisuuden, virhekorjausten ja riskinhallinnan kesken.

## Esimerkit

**Suuryritys.** Ohjelmistotoimittajan alustatiimi raportoi tasaisesti nousevaa flow-nopeutta kolmen peräkkäisen neljänneksen ajan, trendiä, jota johto juhli toimituksen kiihtymisenä. Tarkempi katsaus flow-jakaumaan, jota pyydettiin vasta toistuvia vikoja koskevan asiakaseskalaation jälkeen, paljasti, että "ominaisuudet"-osuus tuosta nousevasta nopeudesta oli itse asiassa pudonnut 70 %:sta 45 %:iin samalla jaksolla, ja virheenkorjauskohteet täyttivät aukon. Tiimi oli toimittanut enemmän kohteita, mutta kutistuva osa niistä oli uutta arvoa. Loput oli uudelleentyöstöä, jonka pelkkä nopeuskaavio oli täysin peittänyt.

**Julkishallinto.** Kansallisen tilastoviraston dataplatformin tiimi seurasi flow-nopeutta ensisijaisena toimitusmittarinaan vuosiraportissa valvontalautakunnalle. Kun lautakunnan jäsen kysyi, mikä osuus tuosta nopeudesta edusti uutta yleisölle suunnattua kyvykkyyttä, tiimi huomasi, ettei ollut koskaan jakanut lukua flow-kohdetyypeittäin eikä pystynyt vastaamaan suoraan. Virasto otti sen jälkeen käyttöön nopeuden ja jakauman parillisen raportoinnin, joka paljasti, että riski- ja vaatimustenmukaisuustyö, uuden tietosuoja-asetuksen ajamana, oli perustellusti kuluttanut kasvavan osan kapasiteetista, puolustettava allokaatio, jonka lautakunta hyväksyi helposti, kun se näytettiin nimenomaisesti eikä jätetty implisiittiseksi selittämättömään nopeuden notkahdukseen.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Nopeuden pariuttamisen jakauman kanssa tuotto on rehellisempi, puolustettavampi kuvaus toimitustuotoksesta kuin kumpikaan luku yksin tarjoaa. Yllä oleva ohjelmistotoimittajaesimerkki, jossa havaittiin nousevan nopeuden heijastavan todellisuudessa laskevaa ominaisuustuotosta, on juuri sellainen väärinluenta, jonka tämä pariutus estää, ja kuvion varhainen havaitseminen on paljon halvempaa kuin sen löytäminen vasta kun asiakkaille näkyvä laatuongelma pakottaa kysymään.

Omistamisen kokonaiskustannus (TCO) on minimaalinen kun flow-kohteiden luokittelu (aihe 2.2) on jo käytössä: jakauma on suoraviivainen jo luokiteltujen kohteiden koonti, ja molempien mittarien yhdessä näyttämisen kuri on raportointikäytäntö, ei tekninen investointi. Suurin osa tämän aiheen suositusten kustannuksista maksettiin jo, kun organisaatio otti käyttöön rehellisen flow-kohteiden luokittelun.

## Antimallit ja sudenkuopat

- **Flow-nopeuden raportointi ilman jakaumaa:** tämän aiheen ytimessä oleva pelaamisen tapa. Toimituspaineen alla oleva tiimi voi nostaa kohdemäärää suosimalla pientä, helppoa ominaisuustyötä ja välttämällä vaikeampia velka-, riski- tai virhekohteita tai pilkkomalla suuria kohteita moneksi pieneksi, ja yksin esitetty nopeuskaavio näyttää kiihtyvyydeltä eikä todelliselta muutokselta siinä, mitä toimitetaan. Suojakaide on sama pariutuskuri, jota aihe 1.2 pyytää läpi kirjan: älä koskaan näytä nopeutta ilman jakaumaa ja tarkista ajoittain keskimääräinen kohteen koko määrän rinnalla pilkkomisen havaitsemiseksi nimenomaisesti.
- **Nopeuden vertailu arvovirtojen välillä eri kohderakeisuudella:** tuottaa epäreilun, harhaanjohtavan vertailun.
- **Yhden jakson jakauman kohteleminen vakaana:** ohittaa hitaan, merkityksellisen ajautumisen, jonka vain trendinäkymä paljastaa.
- **Vain nopeusotsikon päästäminen liiketoiminnan sidosryhmille:** menettää pariutuksen periaatteen koko suojaavan arvon.
- **Keskimääräisen kohteen koon sivuuttaminen nousevaa nopeutta juhlittaessa:** ohittaa korvaamispelaamisen erityisen tunnusmerkin.
- **Nopeustavoitteen asettaminen ilman viittausta jakaumaan:** kutsuu juuri sitä pelaamista, jota tämä aihe nimeltä varoittaa.

## Kypsyysmalli

- **Taso 1, Aloittava:** Flow-nopeus, jos sitä seurataan, raportoidaan yksin ilman jakaumadataa, eikä kukaan ole tarkistanut korvaamispelaamisen varalta.
- **Taso 2, Kehittyvä:** Jotkin tiimit seuraavat jakaumaa, mutta sitä ei johdonmukaisesti pariuteta nopeuden kanssa raportoinnissa eikä katselmoida trendinä.
- **Taso 3, Vakioitu:** Nopeus ja jakauma raportoidaan aina yhdessä, trendeinä katsottuna, ja keskimääräistä kohteen kokoa seurataan korvaamispelaamisen havaitsemiseksi.
- **Taso 4, Hallittu:** Jakauman ajautumista tutkitaan ennakoivasti ennen kuin siitä tulee laatu- tai tietoturvaongelma, ja arvovirtojen välisiä nopeusvertailuja tehdään vasta aidosti vertailukelpoisten kohdemäärittelyjen varmistamisen jälkeen.
- **Taso 5, Orkestroitu:** Nopeus ja jakauma ohjaavat suoraan salkkutason investointipäätöksiä, ja organisaatio voi osoittaa tiettyjä tapauksia, joissa jakauman ajautuminen huomattiin ja korjattiin ennen kuin se aiheutti näkyvän vian.

## Keskusteluideoita

1. Sisältääkö flow-nopeusraportointimme aina jakauman, vai olemmeko koskaan näyttäneet toista ilman toista?
2. Onko keskimääräinen flow-kohteen kokomme siirtynyt nopeuden muutoksen rinnalla viime aikoina?
3. Tietäisimmekö, jos flow-jakaumamme olisi ajautunut tasaisesti viime neljänneksien aikana?
4. Mitä tarvittaisiin, jotta joku voisi paisuttaa nopeuttamme toimittamatta enemmän todellista arvoa, ja huomaisimmeko sen?

## Keskeiset opit

- **Flow-nopeus** mittaa läpivirtausta. **flow-jakauma** mittaa, millaista työtä tuo läpivirtaus edustaa. Raportoi ne yhdessä, aina.
- Tämä pariutus on suora sovellus aiheen 1.2 **suojakaiteen periaatteesta**: älä koskaan näytä nopeuslukua ilman kontekstia siitä, mitä se maksoi.
- Aiheen keskeinen pelaamisen tapa on **nopeuden raportointi yksin**, mikä voi piilottaa siirtymän kohti helppoa ominaisuustyötä tai kohteiden pilkkomisen, joka paisuttaa määrää toimittamatta suhteellista arvoa.
- **Jakauman ajautuminen** näkyy parhaiten trendinä usean jakson yli, ei minkään yksittäisen jakson tilannekuvassa.
- **Arvovirtojen väliset nopeusvertailut** tarvitsevat aidosti vertailukelpoiset kohdemäärittelyt ollakseen reiluja. Ilman niitä ne johtavat harhaan enemmän kuin kertovat.

## Lähteet ja lisälukemista

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
