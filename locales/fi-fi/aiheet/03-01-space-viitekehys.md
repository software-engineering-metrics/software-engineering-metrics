# 3.1 SPACE-viitekehys

## Yleiskatsaus ja perustelut

[SPACE-viitekehys](https://queue.acm.org/detail.cfm?id=3454124), jonka tutkijat Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck ja Jenna Butler julkaisivat vuonna 2021, rakennettiin vastaamaan tiettyyn ongelmaan: yhden luvun [kehittäjän tuottavuuden](https://en.wikipedia.org/wiki/Productivity) mittarit, kuten koodirivit, commitien määrä ja tarinapisteet, ovat triviaalisti pelattavissa ja johtavat rutiininomaisesti harhaan. SPACE ehdottaa sen sijaan mittaamista viidellä ulottuvuudella: **tyytyväisyys ja hyvinvointi** (Satisfaction and well-being), **suorituskyky** (Performance), **aktiivisuus** (Activity), **viestintä ja yhteistyö** (Communication and collaboration) sekä **tehokkuus ja flow** (Efficiency and flow). Mikään kirjain ei ole tarkoitettu seisomaan yksin. Viitekehyksen varsinainen anti on kuri pitää kaikki viisi näkyvillä yhdessä, jotta tiimi ei voi näyttää tuottavalta yhdellä akselilla vahingoittamalla hiljaa toista.

Tällä on merkitystä, koska kehittäjän tuottavuus ei ole yksi asia. Tiimi voi olla erittäin aktiivinen (paljon commiteja, paljon pull requesteja) ja silti suoriutua huonosti, koska työ ei liikuta tuloksia, joilla on merkitystä. Tiimi voi suoriutua lyhyellä aikavälillä hyvin, vaikka tyytyväisyys romahtaa, ja se on ennakoiva indikaattori henkilöstövaihtuvuudelle ja laadun romahdukselle, jotka näkyvät kuukausia myöhemmin. SPACEn oivallus, joka rakentuu suoraan tämän kirjan aiheiden 1.2 ja 1.3 varaan, on se, että mitä tahansa näistä ulottuvuuksista yksinään tavoitteena tavoiteltaessa pelataan muiden kustannuksella. Viitekehys on olemassa nimenomaan tekemään tämän kompromissin näkyväksi ennen kuin siitä seuraa todellista vahinkoa.

Suurille tiimeille SPACE antaa johdolle yhteisen sanaston keskusteluun, joka muuten ajautuu sen ulottuvuuden varaan, jota on helpoin mitata, melkein aina aktiivisuuteen. Suuryritykset, jotka vertaavat tuottavuutta monien tiimien välillä, tarvitsevat viitekehyksen, joka vastustaa houkutusta laskea commiteja. Julkishallinnon organisaatiot, jotka kohtaavat rekrytointi- ja pysyvyyspaineita kilpaillulla työmarkkinalla, tarvitsevat tyytyväisyys- ja hyvinvointidataa yhtä vakavasti kuin toimitusdataa, koska kokeneen insinöörin menettäminen uupumukselle maksaa paljon enemmän kuin yksikään sprintin tuotos koskaan säästi.

## Keskeiset periaatteet

- **Mikään yksittäinen SPACE-ulottuvuus ei ole luotettava yksinään.** Viitekehyksen arvo syntyy nimenomaan usean ulottuvuuden mittaamisesta yhdessä.
- **Vähintään yksi mittari vähintään kolmelta ulottuvuudelta, subjektiivisia ja objektiivisia lähteitä yhdistäen, on tasapainoisen kuvan minimi.** Mittarijoukko, joka on otettu kokonaan yhdeltä ulottuvuudelta tai yhdestä datatyypistä, ei oikeastaan käytä SPACEa.
- **Aktiivisuus on ulottuvuus, jota käytetään todennäköisimmin väärin yksinäisenä sijaismittarina.** Se on helpoin mitata ja yksinään vähiten edustava todellisen arvon suhteen.
- **Tiimitason ja yksilötason mittaus vaativat erilaista kohtelua.** SPACE suunniteltiin ensisijaisesti tiimi- ja järjestelmätason ymmärrykseen, ei yksilöiden tuloskortteihin.
- **Viisi ulottuvuutta vaikuttavat toisiinsa.** Muutos, joka parantaa yhtä, voi heikentää toista, ja viitekehys on olemassa tämän kompromissin havaitsemiseksi.

## Suositukset

### Rakenna mittarijoukko vähintään kolmesta ulottuvuudesta ennen kuin luotat siihen

Älä ota SPACEa käyttöön valitsemalla yhtä lempiulottuvuutta, yleensä aktiivisuutta tai suorituskykyä, ja julistamalla työtä valmiiksi. Valitse tietoisesti vähintään yksi mittari vähintään kolmelta viidestä ulottuvuudesta ja yhdistä objektiivinen instrumentointi (aihe 1.5) subjektiiviseen kyselydataan (aihe 3.7), ennen kuin esität mitään johtopäätöksiä tiimin tuottavuudesta. Tämä vähimmäiskoostumus estää SPACEa luisumasta takaisin yhden sijaismittarin ongelmaan, jonka ratkaisemiseksi se suunniteltiin.

### Kohtele aktiivisuusmittareita taustatietona, älä koskaan pääotsikkona

Commitien määrät, koodirivit ja pull requestien määrät ovat laillista SPACEn aktiivisuusulottuvuuden dataa, mutta niitä ei pitäisi koskaan esittää tiimin tuottavuuden ensisijaisena tai ainoana mittarina. Käytä aktiivisuusdataa taustan antamiseen muille ulottuvuuksille, esimerkiksi huomaamalla, että aktiivisuuden lasku osui yhteen tyytyväisyyden nousun kanssa, koska tiimillä oli vihdoin tilaa maksaa teknistä velkaa pois, äläkä itsenäisenä tuomiona. Aihe 3.4 käsittelee tämän ulottuvuuden erityisriskit perusteellisesti.

### Käytä SPACEa tiimi- ja järjestelmätasolla, älä yksilötasolla

SPACEn alkuperäinen tutkimus ja sen myöhempi käyttöönotto alalla kohtelevat viitekehystä linssinä tiimin ja organisaation tuottavuuden ymmärtämiseen, ei yksilön suorituskyvyn tuloskorttina. SPACE-ulottuvuuksien soveltaminen yksilöiden järjestämiseen, erityisesti aktiivisuusulottuvuuden, luo uudelleen juuri sen pelaamisriskin, josta aihe 1.2 varoittaa, ja käyttää väärin viitekehystä, jota ei koskaan validoitu siihen tarkoitukseen.

### Seuraa ulottuvuuksien välisiä kompromisseja, älä vain yhden sisäistä liikettä

Viitekehyksen todellinen diagnostinen voima syntyy siitä, että katsot, miten ulottuvuudet liikkuvat suhteessa toisiinsa. Nouseva suorituskykymittari yhdessä laskevan tyytyväisyyden kanssa on varoitusmerkki, joka kannattaa tutkia heti, ja se voi viitata kestämättömään tahtiin. Nouseva aktiivisuusmittari yhdessä tasaisen tai laskevan suorituskyvyn kanssa viittaa täytetyöhön aidon edistyksen sijaan. Katsauta kaikki viisi ulottuvuutta yhdessä kiinteällä rytmillä nimenomaan näiden ulottuvuuksien välisten kuvioiden havaitsemiseksi, ei vain jokaisen luvun tarkistamiseksi erikseen.

### Sekoita rytmit sopivasti ulottuvuuksien kesken

Jotkin SPACE-ulottuvuudet muuttuvat hitaasti ja ne mitataan parhaiten määräajoin (tyytyväisyys, tyypillisesti neljännesvuosittaisilla kyselykierroksilla). Toiset muuttuvat nopeasti ja hyötyvät tiheämmästä, automatisoidusta seurannasta (aktiivisuus sekä tehokkuus ja flow, jotka molemmat voi pitkälti instrumentoida olemassa olevista järjestelmistä). Sovita mittausrytmi kunkin ulottuvuuden luontaiseen muutosnopeuteen sen sijaan, että pakotat jokaisen mittarin samaan raportointiaikatauluun.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Yhden ulottuvuuden mittarijoukko (yleensä aktiivisuus) | Yksinkertainen, halpa, tuttu | Helposti pelattavissa, ei näe kestämättömien käytäntöjen inhimillistä hintaa |
| Täysi viiden ulottuvuuden SPACE-käyttöönotto | Tasapainoinen, vastustaa yhden akselin pelaamista, havaitsee kompromissit | Vaatii enemmän instrumentointia ja kyselyinvestointia |
| SPACEn soveltaminen tiimitasolla | Vastaa viitekehyksen validoitua käyttöä, suojaa yksilöitä väärinkäytöltä | Ei voi vastata yksilötason kysymyksiin, joita johto joskus haluaa |
| SPACEn soveltaminen yksilötasolla | Tuntuu joistakin esihenkilöistä suoremmin toimintaan johtavalta | Käyttää viitekehystä väärin, vahva pelaamis- ja moraaliriski |

Keskeinen jännite on **mittauksen kattavuus versus kustannus ja monimutkaisuus**. Täysi, tasapainoinen SPACE-toteutus vaatii enemmän instrumentointia, enemmän kyselysuunnittelua ja enemmän kuria katsoa kaikkia viittä ulottuvuutta yhdessä kuin yksinkertainen aktiivisuusmittaristo. Ratkaise jännite aloittamalla aidosti minimaalisesta mutta tasapainoisesta joukosta, vähintään yksi mittari vähintään kolmelta ulottuvuudelta, sen sijaan että jättäisit viitekehyksen kurin kokonaan väliin tai yrittäisit ylivoimaista, täysin instrumentoitua versiota kaikista viidestä ulottuvuudesta ensimmäisestä päivästä alkaen.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Perustuuko nykyinen tuottavuusmittarijoukkomme vähintään kolmeen SPACE-ulottuvuuteen, vai hallitseeko sitä pelkkä aktiivisuusdata?** Auditoi mittaristosi viittä ulottuvuutta vasten eksplisiittisesti. Useimmat organisaatiot ovat rehellisesti arvioituina paljon aktiivisuuspainotteisempia kuin tajuavat.

2. **Olemmeko koskaan nähneet yhden SPACE-ulottuvuuden paranevan, kun toinen heikkeni hiljaa, ja huomasimmeko sen silloin?** Juuri tämän ulottuvuuksien välisen kompromissin havaitsemiseksi viitekehys on suunniteltu. Katso viime vuotta taaksepäin ajanjaksoon, jolloin toimitusmittarit paranivat, ja kysy, mitä tyytyväisyys- tai hyvinvointidata näytti samalla ajanjaksolla.

3. **Käytetäänkö SPACE-dataa koskaan, edes epävirallisesti, yksilöiden arviointiin tai vertailuun tiimien sijaan?** Se käyttää viitekehystä väärin ja kutsuu pelaamista. Ole rehellinen siitä, miten näistä mittareista oikeasti puhutaan käytännössä, älä vain siitä, miten linjaus sanoo niitä käytettävän.

4. **Miten huomaisimme, jos tiimi paransi suorituskykymittareitaan kestämättömän tahdin hinnalla?** Ilman tyytyväisyys- ja hyvinvointidataa, jota katsotaan suorituskykydatan rinnalla, tällainen kompromissi on näkymätön, kunnes se tulee esiin henkilöstövaihtuvuutena tai laadun romahduksena kuukausia myöhemmin.

5. **Mikä on mittausrytmimme kullekin viidelle ulottuvuudelle, ja vastaako se sitä, kuinka nopeasti kukin ulottuvuus todella muuttuu?** Neljännesvuosittainen tyytyväisyyskysely yhdistettynä reaaliaikaiseen aktiivisuusdataan on perusteltu rytmien ero. Sama rytmi kaikille viidelle ajattelematta ei ole.

6. **Jos uusi kehitysjohtaja aloittaisi huomenna ja katsoisi vain mittaristoamme, saisiko hän tasapainoisen kuvan tiimin tuottavuudesta vai vinoutuneen?** Tämä on käytännön testi siitä, onko mittarijoukkomme todella saavuttanut SPACEn tasapainon, vai vihjaako se viitekehykseen vain, vaikka on käytännössä aktiivisuusvaltainen.

## Sektorinäkökulma

**Startup-yritys.** Täysi viiden ulottuvuuden toteutus on yleensä liioittelua kourallisella insinöörejä, jotka puhuvat päivittäin ja aistivat tyytyväisyyden ja yhteistyön terveyden suoraan. Yksi tapa, jonka kannattaa omaksua varhain, on vastustaa vetoa pelkkiin aktiivisuusmittareihin, kun tiimi alkaa kasvaa yli koon, jossa epävirallinen tietoisuus kattaa kaiken.

**Pieni yritys.** Ilman omaa henkilöstöanalytiikan toimintoa pidä asiat yksinkertaisina: yhdistä jo olemassa oleva toimitusdata (aihe 2.10) lyhyeen, epäviralliseen ja säännölliseen tyytyväisyystarkistukseen, vaikka yhden kysymyksen pulssikyselyyn. Tämä minimiyhdistelmä saavuttaa viitekehyksen ydinkurin jo paljon paremmin kuin pelkkä aktiivisuusmittaristo.

**Suuryritys.** Täällä täysi viitekehys ansaitsee monimutkaisuutensa. Vakioi tasapainoinen SPACE-mittarijoukko tiimien kesken, jotta johto voi vertailla tuottavuutta reilusti sen sijaan, että turvautuisi siihen tiimiin, jolla on vaikuttavimman näköinen commit-kuvaaja, ja panosta aiheessa 3.7 käsiteltyyn kyselyinfrastruktuuriin, jotta tyytyväisyys- ja yhteistyödata on yhtä luotettavaa kuin objektiivinen instrumentointi.

**Julkishallinto.** Rekrytointi- ja pysyvyyspaine, erityisesti kun julkisen sektorin palkka ei aina pärjää yksityisen sektorin tarjouksille, tekee tyytyväisyys- ja hyvinvointidatasta aidosti strategisen huolenaiheen, ei pehmeää lisäosaa. Kohtele SPACEa yhtä vakavasti kuin toimitusmittareita työvoimasuunnittelussa ja budjettiperusteluissa, koska kokeneen insinöörin menettämisen hinta mitataan kuukausina institutionaalista tietoa, jota seuraaja ei heti pysty korvaamaan.

## Esimerkit

**Suuryritys.** Ohjelmistoyrityksen kehitysjohto oli seurannut commitien määrää ja valmistuneita tarinapisteitä ensisijaisena tuottavuussignaalinaan vuosien ajan. Otettuaan käyttöön kattavamman SPACE-mittarijoukon, johon kuului neljännesvuosittainen tyytyväisyyskysely ja yhteistyöverkostoanalyysi (aihe 3.5), johto havaitsi, että tiimillä, jolla oli korkeimmat aktiivisuusluvut, oli myös matalimmat tyytyväisyyspisteet ja korkein vapaaehtoinen henkilöstövaihtuvuus seuraavan vuoden aikana. Pelkät aktiivisuusluvut olivat johtaneet aktiivisesti harhaan. Kattavampi kuva johti tämän tiimin samanaikaisen työmäärän tietoiseen vähentämiseen (aiheen 2.5 WIP-periaate sovellettuna inhimilliselle tasolle) ja mitattavaan toipumiseen sekä tyytyväisyydessä että lopulta kestävässä suorituskyvyssä.

**Julkishallinto.** Kansallinen digitaalipalveluvirasto kilpaili insinööritaidoista yksityisen sektorin palkkoja vastaan, joihin se ei pystynyt vastaamaan, ja otti käyttöön tasapainoisen SPACE-mittarijoukon nimenomaan perustellakseen ei-rahalliset pysyvyysinvestoinnit: paremmat työkalut, suojattu keskittymisaika ja vähäisempi prosessikitka. Tyytyväisyyskyselydata yhdistettynä tehokkuus- ja flow-mittareihin (aihe 3.6) osoitti, että keskeytysten tiheys, ei palkkaus, oli vahvin lähtöaikeen ennustaja lähtöhaastatteludatassa. Viraston myöhempi investointi suojattua keskittymisaikaa koskevaan linjaukseen, jonka tämä SPACE-data suoraan perusteli, korreloi mitattavan pysyvyyden paranemisen kanssa seuraavien kahdeksantoista kuukauden aikana.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

SPACEn täyden käyttöönoton tuotto on vältetty henkilöstövaihtuvuus ja vältetty uupumuksen aiheuttama laadun romahdus, jotka molemmat ovat paljon kalliimpia kuin viitekehyksen instrumentoinnin kustannus. Pelkkä aktiivisuusmittarijoukko voi näyttää erinomaiselta vuoden tai kaksi, kunnes inhimillinen hinta tulee kerralla perintään. Silloin menetetyn asiantuntemuksen korvaamisen ja tiimin terveyden uudelleenrakentamisen kustannus ylittää moninkertaisesti kaiken tuottavuushyödyn, jonka kapea mittarijoukko koskaan näytti tuottavan.

Omistamisen kokonaiskustannuksiin kuuluu kyselyinfrastruktuuri (aihe 3.7) ja kuri katsoa kaikkia viittä ulottuvuutta yhdessä sen sijaan, että turvauduttaisiin siihen, mikä on helpointa. Tuo kustannus kannattaa aidosti maksaa: yllä oleva suuryritysesimerkki osoittaa todellisen, löydettävissä olevan kuvion, jossa korkea aktiivisuus peitti korkean henkilöstövaihtuvuusriskin, jota kapeampi mittarijoukko ei olisi koskaan tuonut esiin ennen kuin vahinko oli jo tapahtunut.

## Antimallit ja sudenkuopat

- **SPACEn käyttöönotto vain nimellisesti, kun käytäntö pysyy aktiivisuusvaltaisena:** yleisin epäonnistumisen tapa, ja se kumoaa viitekehyksen koko tarkoituksen.
- **SPACE-ulottuvuuksien soveltaminen yksilöiden tuloskortteihin:** käyttää väärin viitekehystä, joka on validoitu tiimi- ja järjestelmätason ymmärrykseen.
- **Ulottuvuuksien katsominen erillään sen sijaan, että seurattaisiin niiden välisiä kompromisseja:** missaa kuvion, jonka havaitsemiseen SPACE on nimenomaan suunniteltu.
- **Kaikkien ulottuvuuksien pakottaminen samaan mittausrytmiin:** tuhlaa vaivaa hitaasti muuttuviin ulottuvuuksiin ja mittaa liian vähän nopeasti muuttuvia.
- **Yhden tyytyväisyyskyselyn pisteen käsitteleminen riittävänä ilman objektiivista dataa:** menettää tasapainon subjektiivisten ja objektiivisten lähteiden välillä, jota viitekehys edellyttää.
- **Yhden ulottuvuuden heikkenevän trendin sivuuttaminen, koska toinen näyttää hyvältä:** juuri se epäonnistuminen, jonka estämiseksi viitekehyksen ulottuvuuksien välinen kuri on olemassa.

## Kypsyysmalli

- **Taso 1, Aloittava:** Tuottavuutta mitataan pelkillä aktiivisuusmittareilla, eikä tyytyväisyys-, yhteistyö- tai tehokkuusdataa kerätä.
- **Taso 2, Kehittyvä:** Joitakin lisäulottuvuuksia mitataan epävirallisesti, mutta johdonmukaista ulottuvuuksien välistä katselmointia ja vähimmäiskoostumusstandardia ei ole.
- **Taso 3, Vakioitu:** Vähintään kolmesta SPACE-ulottuvuudesta koostuvaa tasapainoista mittarijoukkoa sovelletaan johdonmukaisesti tiimitasolla koko organisaatiossa.
- **Taso 4, Hallittu:** Kaikkia viittä ulottuvuutta katsotaan yhdessä säännöllisellä rytmillä, ulottuvuuksien välisiä kompromisseja tutkitaan aktiivisesti ja viitekehys ohjaa todellisia henkilöstö- ja prosessipäätöksiä.
- **Taso 5, Orkestroitu:** SPACE-data muokkaa suoraan työvoimasuunnittelua ja pysyvyysinvestointeja, ja organisaatio voi osoittaa tiettyjä toimenpiteitä, joita ulottuvuuksien väliset kuviot ohjasivat ja jotka mitattavasti paransivat sekä toimitusta että kehittäjien hyvinvointia yhdessä.

## Keskusteluideoita

1. Mikä SPACE-ulottuvuus on aliedustettuna nykyisessä mittarijoukossamme?
2. Olemmeko koskaan nähneet tiimin aktiivisuuden nousevan tyytyväisyyden hiljaa laskiessa?
3. Miten havaitsisimme tänään tiimin, joka vaihtaa pitkän aikavälin kestävyyden lyhyen aikavälin tuotokseen?
4. Käytetäänkö jotakin SPACEn lähellä olevaa dataa tällä hetkellä yksilöiden arviointiin tiimien sijaan?
5. Miltä aidosti tasapainoinen tuottavuusmittaristo näyttäisi meille konkreettisesti?

## Keskeiset opit

- SPACE kattaa viisi ulottuvuutta, **tyytyväisyys ja hyvinvointi, suorituskyky, aktiivisuus, viestintä ja yhteistyö sekä tehokkuus ja flow**, eikä mikään niistä ole luotettava yksin.
- Rakenna mittarijoukko **vähintään kolmesta ulottuvuudesta** yhdistäen objektiivisia ja subjektiivisia tietolähteitä.
- Kohtele **aktiivisuusmittareita taustatietona**, älä koskaan tuottavuussignaalin pääotsikkona (aihe 3.4).
- Käytä SPACEa **tiimi- ja järjestelmätasolla**, älä yksilön tuloskorttina.
- Katso ulottuvuuksia yhdessä ja seuraa **ulottuvuuksien välisiä kompromisseja**, älä vain yksittäisen ulottuvuuden sisäistä liikettä.

## Lähteet ja lisälukemista

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021): alkuperäinen SPACE-viitekehyksen artikkeli.
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren, Jez Humble, and Gene Kim (DORA-mittareiden kanssa jaettu tutkimuspohja).
- *Peopleware: Productive Projects and Teams*, by Tom DeMarco and Timothy Lister (klassinen perustelu sille, että kehittäjän tuottavuus on inhimillinen, ei pelkästään mekaaninen kysymys).
- *Drive: The Surprising Truth About What Motivates Us*, by Daniel H. Pink (motivaatiotutkimus, joka on olennaista tyytyväisyyden ja hyvinvoinnin mittaamiselle).
