# 4.5 Teknisen velan mittaaminen

## Yleiskatsaus ja perustelut

**[Tekninen velka](https://en.wikipedia.org/wiki/Technical_debt)** on Ward Cunninghamin lanseeraama vertauskuva. Se kuvaa menneiden oikoteiden kertynyttä hintaa: pikaratkaisuja, joiden ansiosta jokin saatiin julki nopeammin mutta jotka jättivät koodikannan jälkikäteen vaikeammaksi muuttaa. Vertaus pitää paikkansa myös rahoitusvelan kanssa, joka antaa käyttää rahaa nyt ja periä koron myöhemmin. Jokaisella koodikannalla on jonkin verran teknistä velkaa, eikä se ole automaattisesti epäonnistumista. Vertauskuvan todellinen arvo on siinä, että se kehystää velan hallittavissa olevaksi kompromissiksi eikä häpeälliseksi salaisuudeksi tai väistämättömäksi, pysyväksi taakaksi. Tämä aihe käsittelee sitä, miten kompromissi tehdään näkyväksi ja hallittavaksi mittaamalla, sen sijaan että se jäisi epämääräiseksi, ikuisesti jälkeen jätetyksi huoleksi, jonka jokainen kehittäjä aistii mutta jonka pohjalta kukaan ei voi toimia näyttöön nojaten.

Tätä aihetta edeltävät aiheet, monimutkaisuus (4.1), kattavuus (4.2), muuttuvuus ja kuumat pisteet (4.3) sekä staattinen analyysi (4.4), tuovat kukin esiin yhden teknisen velan puolen. Tämän aiheen tehtävä on synteesi: nämä erilliset signaalit sekä asiat, jotka eivät koskaan näy missään automaattisessa skannauksessa (dokumentoimaton arkkitehtuurioikotie, tarkoituksella lykätty migraatio) yhdistetään yhdeksi priorisoiduksi ja näkyväksi jonoksi, joka kilpailee investoinneista reilusti ominaisuustyön kanssa. Muuten velka häviää kilpailun oletuksena pelkästään siksi, ettei sillä ole mittaria eikä puolestapuhujaa suunnittelupalavereissa.

Suurille tiimeille hallitsematon tekninen velka kasautuu tavalla, joka on aidosti vaarallinen ja jonka helposti aliarvioi: jokainen uusi oikotie tekee seuraavasta muutoksesta hieman vaikeamman, mikä luo painetta uusiin oikoteihin, mikä kasvattaa kasautumista edelleen. Vuosien ajan järjestelmiä ylläpitävät suuryritykset ja julkishallinto ovat tälle kasautumisvaikutukselle erityisen alttiita. Tämän aiheen keskeinen suositus, näkyvä, kvantifioitu ja priorisoitu velkajono, on mekanismi, jonka avulla organisaatio voi hallita kompromissia tietoisesti sen sijaan, että ajautuisi kriisiin.

## Keskeiset periaatteet

- **Tekninen velka on tarkoituksellinen vertauskuva hallittavissa olevasta kompromissista, ei häpeällinen salaisuus.** Jokin velka, joka otetaan tietoisesti, on perusteltu liiketoimintapäätös.
- **Mittaamaton velka häviää priorisointikilpailun ominaisuustyölle oletuksena,** ei siksi, että se olisi vähemmän tärkeää, vaan siksi, ettei sillä ole näkyvää puolestapuhujaa.
- **Kvantifioi velka sellaisin termein, joita päätöksentekijät voivat punnita: korjauskustannus verrattuna kantamiskustannukseen.** Epämääräinen väite "koodi on sotkuista" kilpailee harvoin hyvin konkreettista ominaisuuspyyntöä vastaan.
- **Velka kasautuu.** Jokainen uusi oikotie tekee tulevista muutoksista hieman vaikeampia, ja vaikutus kiihtyy, jos sitä ei hallita.
- **Kaikkea velkaa ei kannata maksaa pois.** Osaa kannattaa kantaa loputtomasti, jos korjaaminen maksaa enemmän kuin sen kanssa eläminen.

## Suositukset

### Rakenna näkyvä, yksi tekninen velkajono

Kokoa tämän osan aiempien aiheiden signaalit, monimutkaisuuden poikkeamat, alueet joilla mutaatioiden tappoprosentti on matala, kuumat pisteet ja ratkaisemattomat staattisen analyysin havainnot, yhteen sellaisten velkakohteiden kanssa, jotka vain ihminen voi tunnistaa (arkkitehtuurioikotie, lykätty riippuvuuspäivitys, dokumentoimaton kiertotie). Pidä tämä yksi näkyvä jono samalla tarkkuudella ja näkyvyydellä kuin ominaisuusjonosi. Velka, joka elää vain yksittäisten kehittäjien muistissa tai hajallaan koodikommenteissa, ei käytännössä ole olemassa priorisoinnin kannalta.

### Kvantifioi kunkin velkakohteen kustannus ja kantamiskustannus

Arvioi kustakin kohteesta kaksi lukua: korjauskustannus (kehittäjän työaika, itse korjauksen riski) ja kantamiskustannus korjaamattomana (kuinka paljon hitaampaa siihen liittyvä työ on, kuinka paljon lisävirheriskiä se tuo, kuinka paljon se estää muuta työtä). Tämä kehystys, lainattu suoraan rahoitusvelan vertauskuvan omasta logiikasta, antaa päätöksentekijöille todellisen vertailuperustan ominaisuustyön kustannukseen ja odotettuun arvoon nähden abstraktin, kvantifioimattoman valituksen sijaan.

### Priorisoi vaikutuksen mukaan, älä iän tai äänekkäimmän puolestapuhujan mukaan

Järjestä velkakohteet kantamiskustannuksen ja sen mukaan, kuinka usein kyseiseen koodiin kosketaan (aiheen 4.3 muuttuvuusdata on tässä suoraan hyödyllistä). Koodikannan harvoin muokattu nurkka, olipa se kuinka epämiellyttävä tahansa, merkitsee paljon vähemmän kuin kohde, joka on suoraan aktiivisimman kehityksesi tiellä. Vastusta kiusausta priorisoida sen mukaan, mikä kohde on ollut jonossa pisimpään tai mitä kehittäjä ajaa sinnikkäimmin. Kumpikaan ei luotettavasti korreloi todellisen liiketoimintavaikutuksen kanssa.

### Varaa velan korjaamiseen oma, suojattu kapasiteetti

Velkajono, jonka täytyy kilpailla kohde kerrallaan jokaista saapuvaa ominaisuuspyyntöä vastaan jokaisella suunnittelukierroksella, häviää yleensä johdonmukaisesti, koska ominaisuustyöllä on tavallisesti selkeämpi ja välittömämpi liiketoiminnan puolestapuhuja. Varaa suojattu osuus kehityskapasiteetista, yleinen käytäntö on jotain 10 %:n ja 20 %:n väliltä, nimenomaan velan korjaamiseen. Päätä osuus etukäteen sen sijaan, että neuvottelet siitä uudestaan joka sprintissä, jolloin velan lyhentäminen tapahtuu rutiinina eikä vasta kriisin jälkeen.

### Hyväksy osa velasta pysyväksi ja sano se ääneen

Kaikki kohteet eivät kuulu aktiiviseen korjaussuunnitelmaan. Kun korjauskustannus aidosti ylittää kohteen loputtoman kantamisen kustannuksen, erityisesti vakaassa, harvoin kosketussa, pian poistuvassa järjestelmässä olevan koodin kohdalla, dokumentoi päätös eksplisiittisesti ja siirrä kohde tietoisesti matalan prioriteetin luokkaan sen sijaan, että annat sen istua loputtomiin aktiivisessa jonossa, jossa sen jatkuva läsnäolo hiljaa vihjaa työstä, jota ei tulla koskaan tekemään.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei muodollista velan seurantaa | Ei lisätyötä | Velka häviää priorisointikilpailun oletuksena; kasautuu huomaamatta |
| Epämuodollinen, tapauskohtainen velkatietoisuus | Vähän lisätyötä, jonkin verran näkyvyyttä | Epäjohdonmukaista; nojaa yksittäisten ihmisten muistiin ja puolestapuhumiseen |
| Muodollinen, kvantifioitu velkajono | Kilpailee investoinneista reilusti; mahdollistaa perustellut kompromissit | Vaatii jatkuvaa ylläpitoa ja kvantifioinnin kurinalaisuutta |
| Suojattu, oma korjauskapasiteetti | Varmistaa, että velan lyhentäminen tapahtuu johdonmukaisesti, ei vain reaktiivisesti | Vähentää lyhyellä aikavälillä ominaisuustyöhön käytettävissä olevaa kapasiteettia |

Keskeinen jännite on **välitön toimituspaine verrattuna pitkän aikavälin ylläpidettävyyteen**. Ominaisuustyöllä on lähes aina selkeämpi ja välittömämpi liiketoiminnan puolestapuhuja kuin velan korjaamisella, mikä luo rakenteellista painetta sille, että velka häviää jokaisen yksittäisen priorisointipäätöksen, vaikka sen kumulatiivinen kustannus olisi korkea. Ratkaise jännite poistamalla velan korjaaminen kohde kerrallaan käytävästä kilpailusta kokonaan suojatun, ennalta varatun kapasiteetin avulla. Näin kompromissi ratkaistaan tietoisesti ja etukäteen sen sijaan, että se käytäisiin uudelleen läpi ja yleensä hävittäisiin jokaisella suunnittelukierroksella.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Onko meillä yksi, näkyvä tekninen velkajono, vai elääkö velkatietoisuus enimmäkseen yksittäisten kehittäjien päissä?** Jos rehellinen vastaus on jälkimmäinen, se on suurin yksittäinen aukko, jonka tämä aihe suosittelee sulkemaan ensimmäisenä.

2. **Voimmeko kertoa suurimman velkakohteemme korjauskustannuksen ja kantamiskustannuksen niin täsmällisesti, että niitä voi verrata reilusti ominaisuuspyyntöön?** Jos emme, harjoitelkaa kvantifiointia yhdessä ryhmäharjoituksena käyttäen oikeaa, ajankohtaista kohdetta.

3. **Kuinka suuri osa kehityskapasiteetistamme todella menee velan korjaamiseen, ja päätettiinkö osuus tietoisesti vai onko se vain se, mikä jää jäljelle ominaisuustyön jälkeen?** Katsokaa todellisia viimeaikaisia sprinttejä ja laskekaa oikea luku mielikuvaan luottamisen sijaan.

4. **Onko velkajonomme priorisoitu todellisen liiketoimintavaikutuksen mukaan vai sen mukaan, mitä kohdetta on nostettu esiin sinnikkäimmin tai mikä on istunut jonossa pisimpään?** Vertaa nykyistä priorisointia muuttuvuusdataan (aihe 4.3) ja katso, osuvatko ne yhteen.

5. **Mitkä velkakohteet pitäisi eksplisiittisesti hyväksyä pysyviksi sen sijaan, että annamme niiden istua loputtomiin aktiivisessa jonossa?** Tunnista ainakin yksi todellinen kohde, jonka korjauskustannus aidosti ylittää kantamiskustannuksen, ja keskustelkaa sen siirtämisestä eksplisiittisesti matalan prioriteetin tilaan.

6. **Miten velkajonomme on muuttunut viimeisen vuoden aikana: kasvanut, pienentynyt vai pysynyt ennallaan, ja vastaako trendi tuntumaamme?** Seuraa tätä ajassa sen sijaan, että katsot aina vain yhtä tilannekuvaa. Trendi kertoo usein enemmän kuin absoluuttinen koko tietyllä hetkellä.

## Sektorinäkökulma

**Startup-yritys.** Tietoinen, harkittu velka on tässä vaiheessa usein järkevä strategia: nopea toimitus hypoteesin validoimiseksi sekä selkeä suunnitelma palata tiettyihin oikoteihin, jos tuote osoittautuu toimivaksi, on oikeutettu kompromissi, ei epäonnistuminen. Riski on siinä, että unohtuu, mitkä oikotiet olivat tietoisia ja peruttavissa ja mistä on koodikannan kasvaessa hiljaa tullut pysyviä, tarkastelemattomia vastuita.

**Pieni yritys.** Yksinkertainen, jaettu lista, vaikka epämuodollinenkin, joka nimeää tunnetut oikotiet ja niiden likimääräisen korjauskustannuksen, riittää tässä mittakaavassa yleensä. Tärkein omaksuttava kuri on palata listaan säännöllisesti sen sijaan, että annat sen kertyä hiljaa ja muuttua tuttuuden vuoksi näkymättömäksi.

**Suuryritys.** Suojattu, ennalta varattu korjauskapasiteetti on tässä tärkeintä, koska yksittäinen priorisointikilpailu velan ja ominaisuustyön välillä suosii luotettavasti ominaisuuksia kymmenissä tiimeissä yhtä aikaa ilman rakenteellista vastapainoa. Standardoi velan kvantifiointikäytäntö koko organisaatiossa, jotta velkakohteita voi verrata reilusti tiimien kesken salkkutason investointipäätöksiä varten.

**Julkishallinto.** Pitkäikäiset järjestelmät keräävät velkaa vuosien tai vuosikymmenten aikana vaatimusten asteittaisista, yksitellen perustelluista muutoksista, usein ilman mitään muodollista velan seurantaa, kunnes kriisi pakottaa asian esiin. Kvantifioitu, näkyvä velkajono on aidosti vakuuttava työkalu perusteltaessa uudistamisbudjettia valvontaelimille, koska se muuttaa epämääräisen väitteen "järjestelmä on vanha" täsmälliseksi, kustannetuksi investointiperusteluksi.

## Esimerkit

**Suuryritys.** Telekommunikaatioyrityksen laskutusalusta oli kerännyt yli vuosikymmenen verran epämuodollisesti tunnustettua mutta koskaan muodollisesti seuraamatonta teknistä velkaa, ja kehittäjät totesivat retrospektiiveissa rutiininomaisesti, että "laskutusmoottori on sekasotku", ilman jatkotoimia. Uusi kehitysjohtaja vaati jokaista tiimiä rakentamaan kvantifioidun velkajonon, jossa kustakin kohteesta arvioitiin korjauskustannus ja kantamiskustannus, ja varasi jatkossa kiinteän 15 % kehityskapasiteetista velan korjaamiseen. Vuoden sisällä viisi suurimman kantamiskustannuksen kohdetta, jotka olivat lukumääräisesti pieni osa koko jonosta, oli ratkaistu, ja laskutukseen liittyvien julkaisujen muutosten epäonnistumisprosentti (aihe 2.10) parani mitattavasti. Tämä osoitti, kuinka suuri vaikutus on sillä, että kohdistetaan työ ensin suurimman kantamiskustannuksen kohteisiin sen sijaan, että jonoa käytäisiin läpi mielivaltaisessa järjestyksessä.

**Julkishallinto.** Kansallisen tilastoviraston keskeinen tiedonkäsittelyjärjestelmä oli alun perin rakennettu yli kaksikymmentä vuotta aiemmin, eikä sille ollut koskaan tehty muodollista velka-arviota, vaikka henkilöstö tunnusti epämuodollisesti laajalti, että merkittävät osat olivat hauraita ja huonosti ymmärrettyjä. Jäsennelty velka-arvio, jossa yhdistettiin staattisen analyysin havaintoja, kuumien pisteiden dataa ja haastatteluja harvojen jäljellä olevien kehittäjien kanssa, jotka ymmärsivät vanhimmat komponentit, tuotti kvantifioidun, priorisoidun jonon, joka tuki suoraan monivuotista uudistamisbudjettiesitystä. Ratkaisevaa oli, että arvio tunnisti eksplisiittisesti myös useita vakaita, harvoin kosketettuja vanhoja komponentteja, jotka oli perusteltua jättää ennalleen. Näin vältettiin tarpeettoman laaja ja kallis koko järjestelmän uudelleenkirjoitus ja päädyttiin kohdennettuun investointiin niille alueille, joiden data osoitti kantavan suurimman jatkuvan kustannuksen.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Teknisen velan tietoisen hallinnan tuotto on vältetty kasautuva kustannus: jokainen käsittelemätön oikotie tekee tulevista muutoksista hieman vaikeampia, ja vaikutus kiihtyy ilman väliintuloa, kunnes koodikanta on niin hauras, että yksinkertaisetkin muutokset ovat hitaita ja riskialttiita. Telekommunikaatioesimerkki yllä näyttää tuoton konkreettisesti: pienen määrän suurimman kantamiskustannuksen kohteita kohdentaminen toi mitattavan toimitus- ja laatuparannuksen, joka oli suhteettoman suuri verrattuna siihen vaatimattomaan osuuteen koko jonosta, jonka nämä kohteet muodostivat.

Omistamisen kokonaiskustannukset (TCO) ovat korjaamiseen varattu suojattu kapasiteetti, tyypillisesti 10–20 % kehitysajasta. Se on todellinen, näkyvä kustannus, joka kilpailee lyhyellä aikavälillä ominaisuuksien toimitusnopeuden kanssa. Kustannus kannattaa maksaa, koska vaihtoehto, hallitsematon, kasautuva velka, maksaa lopulta paljon enemmän hidastuneena toimituksena ja korkeampana virhetasona koko koodikannassa, ei vain niissä yksittäisissä kohteissa, jotka jäivät käsittelemättä.

## Antimallit ja sudenkuopat

- **Ei näkyvää, seurattua velkajonoa:** velka häviää priorisointikilpailun oletuksena ja kasautuu huomaamatta.
- **Epämääräiset, kvantifioimattomat velkaväitteet:** kilpailevat harvoin hyvin konkreettisia, kvantifioituja ominaisuuspyyntöjä vastaan suunnittelussa.
- **Velan priorisointi iän tai äänekkyyden mukaan vaikutuksen sijaan:** ohjaa rajallisen korjauskapasiteetin väärään paikkaan.
- **Ei suojattua kapasiteettia korjaamiseen:** velan lyhentäminen tapahtuu vain reaktiivisesti kriisin jälkeen eikä rutiininomaisena, tietoisena käytäntönä.
- **Kaiken velan kohtelu yhtä korjaamisen arvoisena:** tuhlaa työtä vähäarvoisiin kohteisiin, kun suuren kantamiskustannuksen kohteet jäävät käsittelemättä.
- **Velan antaminen istua loputtomiin aktiivisessa jonossa päättämättä koskaan, että se on pysyvää:** vihjaa tulevasta työstä, jota ei tulla koskaan tekemään, ja sotkee todellisen priorisoinnin.

## Kypsyysmalli

- **Taso 1, Aloittava:** Teknisestä velasta keskustellaan epämuodollisesti, ilman seurattua jonoa ja kvantifiointia; se häviää johdonmukaisesti ominaisuustyölle.
- **Taso 2, Kehittyvä:** Jotkin tiimit seuraavat velkaa epämuodollisesti, mutta johdonmukaista kvantifiointia, tiimirajat ylittävää näkyvyyttä tai suojattua korjauskapasiteettia ei ole.
- **Taso 3, Vakioitu:** Näkyvä, kvantifioitu velkajono on olemassa koko organisaatiossa, ja suojattua korjauskapasiteettia varataan johdonmukaisesti.
- **Taso 4, Hallittu:** Velkakohteet priorisoidaan mitatun vaikutuksen mukaan (kantamiskustannus yhdistettynä muuttuvuuteen), ja pysyvästi hyväksytty velka dokumentoidaan eksplisiittisesti eikä jätetä epäselväksi.
- **Taso 5, Orkestroitu:** Organisaatio voi osoittaa tiettyjä, mitattavia toimitus- tai laatuparannuksia, jotka johtuvat kohdennetusta velan korjaamisesta, ja velanhallinta on rutiininomainen, luotettu syöte kehitysinvestointipäätöksiin ominaisuustyön rinnalla.

## Keskusteluideoita

1. Mikä on tällä hetkellä suurimman kantamiskustannuksen velkakohteemme, ja voisimmeko kvantifioida sen?
2. Kuinka suuri osa kapasiteetistamme menee tänään velan korjaamiseen?
3. Minkä velkakohteen pitäisi eksplisiittisesti hyväksyä pysyväksi sen sijaan, että jätämme sen epäselvästi jonoon?
4. Onko velkajonomme kasvanut, pienentynyt vai pysynyt ennallaan viimeisen vuoden aikana?
5. Mitä kvantifioitu velka-arvio paljastaisi, mikä nykyiseltä epämuodolliselta tietoisuudeltamme jää huomaamatta?

## Keskeiset opit

- Tekninen velka on **hallittavissa oleva kompromissi, ei häpeällinen salaisuus**; kvantifioi se sen sijaan, että jättäisit sen epämääräiseksi, ikuisesti jälkeen jätetyksi huoleksi.
- **Kvantifioi korjauskustannus ja kantamiskustannus** kustakin kohteesta, jotta se kilpailee reilusti ominaisuustyön kanssa.
- **Priorisoi vaikutuksen mukaan** (kantamiskustannus yhdistettynä muuttuvuuteen), ei iän tai äänekkyyden mukaan.
- Varaa **suojattu, oma korjauskapasiteetti**, päätettynä etukäteen, koska velka muuten häviää luotettavasti kohde kerrallaan käytävän kilpailun ominaisuustyölle.
- **Hyväksy osa velasta eksplisiittisesti pysyväksi**, kun korjauskustannus ylittää kantamiskustannuksen, sen sijaan että jätät sen epäselvästi aktiiviseen jonoon.

## Lähteet ja lisälukemista

- Cunningham, Ward, "The WyCash Portfolio Management System" (OOPSLA
  experience report, 1992): teknisen velan vertauskuvan alkuperä.
- *Managing Technical Debt: Reducing Friction in Software Development*,
  Philippe Kruchten, Robert Nord ja Ipek Ozkaya (kattava esitys teknisen
  velan mittaamisesta ja hallinnasta).
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler
  (korjaustekniikat, joihin velkajono lopulta nojaa).
- *Your Code as a Crime Scene*, Adam Tornhill (kuumien pisteiden analyysi
  velan priorisoinnin syötteenä, aihe 4.3).
