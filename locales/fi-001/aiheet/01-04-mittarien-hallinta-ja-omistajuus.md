# 1.4 Mittarien hallinta ja omistajuus

## Yleiskatsaus ja perustelut

Mittari ilman omistajaa on riita, joka odottaa syntymistään. Kaksi tiimiä laskee "aktiiviset käyttäjät" eri tavoin ja käyttää palaverin lukujen sovitteluun trendin hallinnan sijaan. Mittaristoruutu, jota kukaan ei ylläpidä, vanhenee hiljaa kuukausia ennen kuin kukaan huomaa. Alun perin yhden tiimin diagnoosiin rakennettu mittari otetaan toisen tiimin käyttöön tarkoitukseen, jota sen alkuperäistä määritelmää ei koskaan suunniteltu tukemaan. Mikään tästä ei ole mittausongelma tilastollisessa mielessä. Se on hallintaongelma, ja se on ratkaistavissa samalla kurilla, jota organisaatiot jo soveltavat koodiin: nimenomainen omistajuus, dokumentoitu [totuuden lähde](https://en.wikipedia.org/wiki/Single_source_of_truth) ja katselmointiprosessi.

Hallinta ei ole byrokratiaa byrokratian vuoksi. Se saa mittariohjelman selviämään kohtaamisesta organisaation mittakaavan kanssa. Yksittäinen tiimi voi pitää mittarimääritelmänsä jonkun päässä ja korjata ajautumaa päivittäisellä keskustelulla. Kymmeniä tiimejä käsittävä organisaatio, jossa jokainen tuottaa ja käyttää mittareita, ei voi. Ilman hallintaa määritelmät ajautuvat hiljaa, mittarit lisääntyvät ilman että kukaan karsii niitä, ja kun johto huomaa kahden raportin olevan ristiriidassa, niiden sovittamisen hinta on jo maksettu moneen kertaan hukatuissa palavereissa ja rapautuneessa luottamuksessa.

Suuryrityksille ja julkishallinnolle hallinta kantaa lisäpainoa, koska mittarit ohjaavat yhä useammin päätöksiä, joilla on todellisia seurauksia: budjetin jakoa, julkista suoritusraportointia, toimittajasopimuksia, ja jotka elävät pidempään kuin yksikään alkuperäisen mittariston rakentanut henkilö. Mittarien peruskirja, joka selviää henkilöstövaihdoksista ja jonka jokainen uusi tiimin jäsen voi lukea ja ymmärtää, pitää organisaation luvut merkitsemässä samaa viiden vuoden kuluttua kuin tänään.

## Keskeiset periaatteet

- **Jokaisella mittarilla on täsmälleen yksi omistaja.** Jaettu omistajuus on omistajuuden puuttumista: kun kaikki omistavat määritelmän, kukaan ei ylläpidä sitä.
- **Mittarilla on yksi totuuden lähde.** Kaksi järjestelmää, jotka laskevat saman mittarin eri tavoin, on hallintavirhe, joka odottaa paljastumistaan.
- **Hallinta on kirjattu ylös, ei hiljaista tietoa.** Mittarien peruskirja, joka elää vain jonkun muistissa, ei selviä hänen lähtemisestään.
- **Poistaminen on yhtä tärkeää kuin käyttöönotto.** Terve mittariohjelma karsii yhtä tietoisesti kuin se kasvaa.
- **Hallinta skaalautuu seurauksen mukaan, ei mittarien määrän.** Julkiseen raporttiin syöttävä mittari tarvitsee raskaampaa hallintaa kuin sellainen, jota yksi tiimi käyttää oman sprinttinsä vianetsintään.

## Suositukset

### Kirjoita mittarien peruskirja jokaiselle mittarisarjalle, joka ylittää tiimirajan

**Mittarien peruskirja** on lyhyt, elävä dokumentti, joka kertoo mittarisarjan tarkoituksen, sen nimenomaiset ei-tavoitteet (aiheen 1.1 ero diagnostisen ja arvioivan välillä kuuluu tänne), kunkin mittarin omistajan ja totuuden lähteen sekä katselmointirytmin. Pidä se yhdellä sivulla. Tämän kirjan oheisarkiston tiedosto docs/examples/metrics-charter-example.md näyttää muodon. Näin lyhyt peruskirja luetaan. Poliittiseksi dokumentiksi rönsyilevää ei lueta.

### Nimeä jokaiselle mittarille omistaja henkilönä, älä tiimi

"Alustatiimi omistaa tämän mittarin" hajauttaa vastuun, kunnes kukaan ei todellisuudessa ylläpidä sitä. Nimeä henkilö tai tietty vastuullinen rooli. Tämä omistaja vastaa siitä, että mittarin määritelmä pysyy täsmällisenä ja instrumentointi terveenä, sekä kysymykseen "miksi tämä luku näyttää väärältä" vastaamisesta, kun se väistämättä tulee eteen. Omistajuuden voi ja pitää kiertää ihmisten vaihtaessa rooleja, mutta peruskirjassa pitää aina olla nimetty nykyinen omistaja. Kenttää ei koskaan jätetä tyhjäksi.

### Määritä yksi totuuden lähde mittaria kohti ja kiellä rinnakkaislaskenta

Kun kaksi järjestelmää laskee saman nimellisen mittarin eri tavoin, esimerkiksi yhden tiimin "aktiiviset käyttäjät" laskee kirjautumisia ja toisen API-kutsuja, syntyvä ristiriita maksaa sovittelupalavereissa paljon enemmän kuin yhdestä totuuden lähteestä sopiminen etukäteen olisi maksanut. Nimeä peruskirjassa kunkin mittarin ensisijainen järjestelmä ja kohtele saman mittarin kaikkea muuta laskentaa joko korjattavana virheenä tai eri nimellä kutsuttavana mittarina, joka pitää nimetä uudelleen.

### Rakenna poistokatselmointi osaksi hallintarytmiä

Mittariohjelma, joka vain lisää mittareita, kerryttää mittaristorönsyilyä, jonka perusteella kukaan ei voi toimia (aihe 1.1). Jokaisessa hallintakatselmoinnissa uusien mittarien ehdottamisen rinnalla kysy, mitkä olemassa olevat eivät ole tukeneet päätöstä kahden viime kierroksen aikana ja ovat poistoehdokkaita. Poistaminen ei ole epäonnistumista. Se on sama kuri, jota terve koodikanta soveltaa kuolleeseen koodiin.

### Skaalaa hallinnan tiukkuus seurauksen mukaan, ei volyymin

Kaikki mittarit eivät tarvitse samaa prosessia. Mittari, jonka yksittäinen tiimi keksii oman sprinttinsä vianetsintään, ei tarvitse juuri mitään hallintaa sen lisäksi, että tiimi tietää, mitä se tarkoittaa. Mittari, joka syöttää johdon tuloskorttia, julkista suoritusraporttia tai yksilön palkkaa, tarvitsee dokumentoidun määritelmän, nimetyn omistajan, jäljityspolun ja hyväksynnän ennen käyttöönottoa. Sovita prosessisi paino siihen, mitä mittarin väärin oleminen maksaisi, ei siihen, kuinka monta mittaria on olemassa.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Ei muodollista hallintaa | Nopea, matala kuormitus pienille tiimeille | Määritelmät ajautuvat, omistajuus hajoaa, mittaristot rönsyilevät valvomatta |
| Kevyt peruskirja mittarisarjaa kohti | Halpa, luettava, skaalautuu organisaation mukana | Vaatii kuria pitää ajan tasalla; voidaan ohittaa määräaikapaineessa |
| Raskas keskitetty mittarien hallintalautakunta | Vahva johdonmukaisuus, vahva jäljityspolku | Hidas hyväksymään uusia mittareita; voi muuttua pullonkaulaksi, jonka ohi tiimit kulkevat |
| Seurauksen mukaan skaalattu hallinta | Sovittaa vaivan todelliseen riskiin | Vaatii harkintaa seurauksen oikeaan luokitteluun; voidaan pelata vähättelemällä panoksia |

Keskeinen jännite on **johdonmukaisuus vastaan nopeus**. Raskas keskitetty hallinta tuottaa luotettavia ja johdonmukaisia mittareita mutta hidastaa tiimiä juuri silloin, kun se haluaa instrumentoida jotain nopeasti vastatakseen kiireelliseen kysymykseen. Ratkaise jännite skaalaamalla hallinnan paino seurauksen mukaan: anna tiimien instrumentoida vapaasti omaan diagnostiseen käyttöönsä ja vaadi täysi peruskirja, omistajuus ja hyväksyntäkuri vasta kun mittari ylittää tiimirajan tai syöttää arvioivaa tai julkista käyttöä.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Onko jokaisella tiimirajan ylittävällä mittarilla nimetty omistaja, ja tunnistaisiko omistaja itsensä vastuulliseksi, jos kysyttäisiin tänään?** "Alustatiimi omistaa sen" ei ole vastaus. Tietty henkilö tai rooli on. Auditoi tiimirajat ylittävät mittarisi ja tarkista, tietääkö nimetty omistaja, jos sellainen ylipäätään on, todella kantavansa tuon vastuun.

2. **Missä laskemme tällä hetkellä saman nimellisen mittarin kahdella eri tavalla, ja kuinka paljon aikaa olemme käyttäneet ristiriidan sovitteluun?** Tämä on yksi suurten organisaatioiden kalleimmista ja yleisimmistä hallintavirheistä, ja se on täysin ehkäistävissä dokumentoidulla yhdellä totuuden lähteellä. Tuo mukanasi todellinen esimerkki, jos sinulla on sellainen, ja jäljitä sen kustannus.

3. **Milloin viimeksi poistimme mittarin, ja mikä sen päätöksen laukaisi?** Organisaatio, joka osaa kuvata vain miten se lisää mittareita, ei koskaan miten se poistaa niitä, kerryttää mittaristovelkaa. Jos et muista poistoa, tuo puute on itsessään vastaus tähän kysymykseen.

4. **Onko hallintaprosessimme suhteessa seurauksiin, vai kulkeeko jokainen mittari saman painoisen katselmoinnin läpi panoksista riippumatta?** Liian raskas hallinta matalan panoksen tiimimittarilla hidastaa työtä ilman turvallisuushyötyä. Liian kevyt hallinta mittarilla, joka syöttää julkista raporttia tai palkkapäätöstä, on todellinen riski. Kartoita nykyiset mittarisi seurauksen mukaan ja tarkista prosessin paino sitä vasten rehellisesti.

5. **Mitä mittarin omistajuudelle tapahtuu, kun sen rakentanut henkilö vaihtaa roolia tai lähtee?** Mittarien peruskirja, joka on vain yhden ihmisen päässä, katoaa hänen mukanaan. Testaa tämä valitsemalla mittari ja kysymällä, voisiko uusi työntekijä pelkän kirjallisen dokumentaation perusteella ymmärtää sen määritelmän, totuuden lähteen ja tarkoituksen.

6. **Miten tietäisimme, jos mittarin määritelmä olisi muuttunut hiljaa?** Muutos siihen, miten luku lasketaan, ilman muutosta sen nimeen tai merkintää sen historiassa, on lähes näkymätön kunnes joku vertaa vanhaa ja uutta dataa ja löytää epäjatkuvuuden, jota ei osaa selittää. Keskustelkaa, onko mittareillanne tänään minkäänlaista muutoslokia.

## Sektorinäkökulma

**Startup-yritys.** Muodollinen hallinta on yleensä liioittelua viiden hengen tiimille, jossa kaikki jo tietävät, mitä jokainen luku tarkoittaa. Yksi kuri kannattaa silti ottaa käyttöön varhain: yhden omistajan nimeäminen mittaria kohti kirjallisesti, koska se maksaa lähes ei mitään ja estää sekaannusta, kun ensimmäiset palkattavat liittyvät ja alkavat kysyä, mitä luku tarkoittaa.

**Pieni yritys.** Hallinta tarkoittaa tässä enimmäkseen yhden työkalun valitsemista totuuden lähteeksi kullekin mittarille ja siinä pysymistä sen sijaan, että taulukkolaskennat ja alustan sisäänrakennettu mittaristo antaisivat ajautua hiljaa erilleen. Kirjoita peruskirja yhtenä jaettuna dokumenttina, vaikka epävirallisena, jotta uusi työntekijä voi selvittää luvun merkityksen kyselemättä ympäriinsä.

**Suuryritys.** Tässä hallinta ansaitsee paikkansa. Yhdenmukaista määritelmät liiketoimintayksiköiden välillä, vaadi peruskirja kaikelle, mikä syöttää johdon tuloskorttia, ja rakenna poistokatselmointi toistuvaan hallintarytmiin, koska mittaristorönsyily tässä mittakaavassa muuttuu nopeasti kalliiksi sekä ylläpitokustannuksina että uskottavuuden menetyksenä, kun kaksi divisioonaa raportoi ristiriitaisia lukuja samasta asiasta.

**Julkishallinto.** Hallinnalla on täällä usein lakisääteinen tai auditointiulottuvuus: julkaistujen suoritusmittarien täytyy ehkä täyttää lakisääteiset raportointivaatimukset, ja määritelmän muutoksella voi olla todellisia poliittisia seurauksia. Dokumentoi menetelmä julkisesti, jäädytä määritelmät raportointijaksojen yli ellei muutosta itseään perustella julkisesti, ja kohtele mittarin määritelmän, ei vain sen nykyarvon, riippumatonta auditointia pysyvänä hallintakäytäntönä.

## Esimerkit

**Suuryritys.** Monikansallinen ohjelmistoyritys havaitsi yrityskaupan jälkeisessä integraatiossa, että sen kaksi suurinta liiketoimintayksikköä määrittelivät "julkaisutiheyden" eri tavoin: toinen laski jokaisen pushin testiympäristöön, toinen vain tuotantoversiot. Johto oli vertaillut kahden yksikön toimitussuoritusta yli vuoden ajan luvuilla, jotka eivät todellisuudessa olleet vertailukelpoisia. Ratkaisu oli yrityksen laajuinen mittarien hallintalautakunta, joka julkaisi yhden sanaston mittarimääritelmistä (peilattuna tämän kirjan aiheessa 9.2), vaati jokaista tiimiä todistamaan vaatimustenmukaisuuden ja poisti epäselvät paikalliset määritelmät yhdessä vuosineljänneksessä.

**Julkishallinto.** Kansallinen tilastovirasto, joka vastasi digitaalisten palvelujen suoritusmittariston julkaisemisesta, havaitsi, että muutos siinä, miten "ratkaistu palvelutasosopimuksen puitteissa" laskettiin, jonka ohjelmistotiimi oli tehnyt hiljaa korjatessaan sitä, minkä he näkivät virheenä, oli siirtänyt keskeistä vaatimustenmukaisuuslukua usealla prosenttiyksiköllä ilman julkista dokumentaatiota muutoksesta. Virasto perusti muodollisen muutoksenhallintaprosessin jokaiselle julkista raporttia syöttävälle mittarimääritelmälle: ehdotetut muutokset vaativat dokumentoidun perustelun, muutoksen rinnalla julkaistun ennen ja jälkeen -vertailun sekä nimetyn vastuullisen virkamiehen hyväksynnän, ja sulki aukon, joka oli antanut aiemman muutoksen mennä ohi huomaamatta.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Hallinnan tuotto on vältetty sovittelukustannus. Jokainen tunti palaverissa, jossa kaksi tiimiä kiistelee siitä, kenen luku on oikea, on tunti, jonka kurinalainen hallinta, yksi totuuden lähde ja nimetty omistaja, olisi estänyt kokonaan. Suuryrityksen mittakaavassa tämä kustannus kertautuu kymmenien tiimien yli ja voi viedä aidosti merkittävän osan johdon huomiosta ongelmaan, jonka yhden sivun peruskirja mittarisarjaa kohti olisi välttänyt.

Kevyen hallintakäytännön, peruskirjan, nimetyn omistajan ja ajoittaisen katselmoinnin, omistamisen kokonaiskustannus (TCO) on vaatimaton ja enimmäkseen etupainotteinen. Vaihtoehto, eli sen havaitseminen vuoden kuluttua suuren hankkeen alusta, etteivät johdon luottamat luvut koskaan olleetkaan vertailukelpoisia, maksaa dramaattisesti enemmän, sekä hukattuna analyysinä että uskottavuuden vahingoittumisena, kun julkista tai sisäistä kirjaa korjataan jälkikäteen.

## Antimallit ja sudenkuopat

- **Tiimiomistajuus nimetyn henkilön omistajuuden sijaan:** hajauttaa vastuun, kunnes kukaan ei todellisuudessa ylläpidä määritelmää.
- **Saman nimellisen mittarin rinnakkaislaskenta:** takaa lopulta ristiriidan ja kalliin sovittelun.
- **Peruskirja, joka on vain jonkun päässä:** katoaa heti kun kyseinen henkilö vaihtaa roolia.
- **Mittariohjelma, joka vain lisää eikä koskaan poista:** tuottaa mittaristorönsyilyä, jonka perusteella kukaan ei voi toimia.
- **Yhtenäinen hallinnan paino seurauksesta riippumatta:** hidastaa matalan panoksen työtä samalla kun suojaa heikosti korkean panoksen julkisia tai palkkaan sidottuja mittareita.
- **Hiljaiset määritelmämuutokset:** mittarin merkitys muuttuu ilman muutoslokia, ja historialliset vertailut mitätöityvät huomaamatta.

## Kypsyysmalli

- **Taso 1, Aloittava:** Mittareilla ei ole muodollisia omistajia. Määritelmät elävät yksittäisten ihmisten muistissa ja ajautuvat hiljaa tiimien välillä.
- **Taso 2, Kehittyvä:** Jotkin tiimit kirjoittavat epävirallista dokumentaatiota omille mittareilleen, mutta jaettua peruskirjamuotoa tai tiimien välistä johdonmukaisuutta ei ole.
- **Taso 3, Vakioitu:** Jokaisella tiimirajan ylittävällä mittarilla on dokumentoitu peruskirja, nimetty omistaja ja yksi sovittu totuuden lähde, joita valvotaan koko organisaatiossa.
- **Taso 4, Hallittu:** Toistuva hallintarytmi katselmoi mittarien jatkuvaa relevanssia, poistaa ne, jotka eivät enää ansaitse paikkaansa, ja seuraa määritelmämuutoksia näkyvällä historialla.
- **Taso 5, Orkestroitu:** Hallinta on suhteessa seurauksiin, automatisoitu missä mahdollista (mittarikatalogi, joka merkitsee dokumentoimattomat tai omistajattomat mittarit), ja organisaatio voi pyydettäessä osoittaa minkä tahansa julkaistun luvun täyden alkuperän.

## Keskusteluideoita

1. Voisiko uusi työntekijä selvittää pelkästä dokumentaatiosta, mitä kolme tärkeintä mittariamme oikeasti tarkoittavat?
2. Minkä mittariemme kohdalla kaksi eri järjestelmää laskee tällä hetkellä eri tavoin?
3. Milloin viimeksi poistimme mittarin, ja miten päätimme siitä?
4. Onko hallintaprosessimme raskaampi siellä, missä seuraus on suurin, vai onko se yhtenäinen?
5. Kuka omistaa organisaatiomme merkittävimmän julkisen mittarin, nimeltä?

## Keskeiset opit

- Jokainen mittari tarvitsee **yhden nimetyn omistajan**, ei tiimiä, ja **yhden totuuden lähteen**, ei rinnakkaislaskentaa.
- Kirjoita lyhyt, elävä **mittarien peruskirja** jokaiselle tiimirajan ylittävälle mittarisarjalle, joka kertoo tarkoituksen, ei-tavoitteet, omistajuuden ja katselmointirytmin.
- **Poistaminen** on yhtä tärkeä hallintakuri kuin käyttöönotto. Karsi tietoisesti.
- Skaalaa hallinnan tiukkuus **seurauksen** mukaan, ei mittarien määrän: raskaampi prosessi julkisille, arvioiville tai palkkaan sidotuille mittareille.
- Mittarin määritelmä voi ajautua hiljaa. Seuraa muutoksia näkyvällä historialla, jotta luottamus lukuun selviää henkilöstövaihdoksista.

## Lähteet ja lisälukemista

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program*, tekijä John Ladley (mittariohjelmiin soveltuvat hallintarakenteet).
- *Measuring and Managing Performance in Organizations*, tekijä Robert D. Austin (organisaation toimintahäiriöt mittarien omistajuuden ja käytön ympärillä).
- *Key Performance Indicators*, tekijä David Parmenter (mittarien omistajuus, määritelmäkuri ja katselmointirytmi).
- U.S. Government Accountability Office (GAO) -ohjeistus suoritusmittauksesta ja GPRA Modernization Act: julkisen sektorin mittarien hallinta ja muutoksenhallinta.
