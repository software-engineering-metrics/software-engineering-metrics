# 8.1 Ohjelmistotuotannon mittariston suunnittelu

## Yleiskatsaus ja perustelut

Jokaisen kirjassa käsitellyn mittarin on lopulta asuttava jossain, mitä
oikeat ihmiset oikeasti katsovat, ja huonosti suunniteltu [mittaristo](https://en.wikipedia.org/wiki/Dashboard_(business))
voi purkaa jokaisen aiemman aiheen huolellisen työn: rehelliset, hyvin
hallitut, suojakaiteella paritetut mittarit, jotka esitetään epärehellisesti,
sotkuisesti tai väärälle yleisölle, tuottavat täsmälleen sen sekaannuksen ja
epäluottamuksen, jonka estämiseksi kirja on tehnyt työtä. Tämä aihe käsittelee
mittariston suunnittelun käsityötä: valitaan, mitä näytetään kenelle,
visualisoidaan se rehellisesti ja jäsennetään koko tuotos niin, että sitä
oikeasti käytetään päätösten tekoon eikä sitä sivuuteta tai, pahempaa,
tulkita väärin.

Keskeinen kuri, jota aihe suosittelee, on yleisökohtainen suunnittelu.
Yksittäisen kehitystiimin päivittäiseen standupiin tehty mittaristo tarvitsee
eri mittarit, eri tarkkuuden ja eri visuaalisen tiheyden kuin neljännesvuosittaiseen
johdon katselmointiin tehty. Yksi kaikille sopiva mittaristo, joka yrittää
palvella molempia yleisöjä, palvelee yleensä kumpaakaan huonosti. Aihe käsittelee
mittariston suunnittelua aitona suunnittelualana eikä vain raportoinnin
jälkiajatuksena, ja nojaa kauttaaltaan aiheen 1.6 tilastollisen rehellisyyden
periaatteisiin: jokainen visualisointivalinta joko auttaa tai estää lukijaa
tekemästä datasta oikeaa johtopäätöstä.

Suurille tiimeille mittariston suunnittelu on paikka, jossa kirjan monet
yksittäiset mittaritason suojakaiteet joko säilyvät käytännössä tai
katoavat. Suuryritykset, jotka ylläpitävät kymmeniä tiimimittaristoja,
tarvitsevat yhdenmukaisuutta jäykkyyttä lisäämättä: yhteisiä standardeja,
jotka silti sallivat kunkin yleisön erityistarpeiden täyttämisen.
Julkishallinnon mittaristot voivat joutua julkisen tarkastelun kohteeksi tai
toimia valvontaraportoinnin pohjana, ja siksi ne tarvitsevat tämän aiheen
suosittelemia rehellisen visualisoinnin standardeja erityisen tarkasti
sovellettuina. Ulkopuolisen tarkastajan löytämä harhaanjohtava kaavio vahingoittaa
uskottavuutta paljon yksittäistä mittaria laajemmin.

## Keskeiset periaatteet

- **Suunnittele tietylle yleisölle ja päätökselle, ei kattavuuden vuoksi.**
  Mittaristo, joka yrittää palvella kaikkia, ei yleensä palvele ketään
  hyvin.
- **Jokainen visualisointivalinta joko auttaa tai johtaa aktiivisesti harhaan.**
  Sovella aiheen 1.6 tilastollista rehellisyyttä tiukasti: todellinen
  trendi, rehelliset akselit, näkyvä epävarmuus.
- **Harvat, hyvin valitut mittarit voittavat kattavan kattavuuden.** Kirjan
  läpi kulkeva periaate aiheesta 1.1 alkaen pätee suoraan mittariston
  suunnitteluun.
- **Mittaristo tarvitsee omistajan ja katselmointirytmin**, aivan kuten
  mikä tahansa muu hallittu mittari (aihe 1.4), tai se rapistuu
  ylläpitämättömäksi, epäluotetuksi tuotokseksi.
- **Suojakaideparit kuuluvat samaan näkymään.** Älä koskaan erota
  kannustettua mittaria sen suojakaiteesta eri mittaristoihin tai eri osioihin.

## Suositukset

### Suunnittele erilliset mittaristot erillisille yleisöille ja päätöksille

Rakenna erilliset, tarkoitukseen sopivat näkymät yhden kaikkia yleisöjä
palvelevan mittariston sijaan: tiimitason operatiivinen mittaristo (päivittäinen
tai viikoittainen rytmi, tarkat toimitus- ja laatumittarit tiimin omaan
käyttöön), johdon mittaristo (kuukausittainen tai neljännesvuosittainen
rytmi, tulospainotteinen aiheen 7.4 mukaan, vähemmän mittareita, enemmän
kontekstia) ja tarvittaessa ulkoinen mittaristo (asiakkaille, valvontaelimille
tai yleisölle, huolellisesti hallittu aiheen 1.4 seurausten mukaan skaalatulla
tarkkuudella). Jokainen palvelee eri päätöstä, ja se tulee suunnitella
nimenomaan tuota päätöstä varten, ei yhden pääasiallisen mittariston
suodatettuna näkymänä.

### Sovella rehellisen visualisoinnin standardeja johdonmukaisesti

Noudata aiheen 1.6 tilastollisen rehellisyyden periaatteita kovina
suunnitteluvaatimuksina, ei vapaaehtoisena viimeistelynä: aloita arvoakselit
nollasta, ellei näkyvää, dokumentoitua poikkeusta ole ilmoitettu, näytä
trendi ajan yli yksittäisen tilannekuvan sijaan, käytä mediaaneja ja
persentiilejä keskiarvojen sijaan vinolle datalle ja merkitse konteksti
(julkaisut, häiriöt, organisaatiomuutokset), jotta lukija voi erottaa aidon
muutoksen kohinasta. Vältä erityiset kaaviomanipulaatiot, jotka aihe 1.6
nimesi suoraan: kaksoisakselit, jotka vihjaavat väärää korrelaatiota,
poimitut päivämääräalueet ja 3D-efektit, jotka vääristävät suhteita.

### Älä koskaan erota mittaria sen paritetusta suojakaiteesta eri näkymiin

Aiheen 1.2 suojakaideparituksen periaatteen mukaisesti kovana mittariston
suunnittelusääntönä: julkaisutiheys ja muutosten epäonnistumisprosentti
(aihe 2.10) kuuluvat samaan näkymään, aina yhdessä näkyvillä, ei koskaan
jaettuina "nopeus"-mittaristoon ja erilliseen "laatu"-mittaristoon, joita eri
yleisöt saattavat katsoa erillään. Tämä ei ole vähäpätöinen asettelumieltymys.
Mittarin erottaminen suojakaiteestaan eri mittaristoihin luo uudelleen
täsmälleen sen kannustinaltistuksen riskin, josta aihe 1.2 varoittaa, vaikka
molempia lukuja seurattaisiin teknisesti jossain.

### Nimeä jokaiselle mittaristolle omistaja ja katselmointirytmi

Sovella aiheen 1.4 hallintakuria suoraan itse mittaristoon, ei vain sen
näyttämiin yksittäisiin mittareihin: nimeä omistaja, joka vastaa mittariston
jatkuvasta tarkkuudesta ja relevanssista, ja aseta katselmointirytmi, jolla
mittareita lisätään, poistetaan tai harkitaan uudelleen. Mittaristo, jolla ei
ole omistajaa, rapistuu täsmälleen kuten omistajaton mittari (aihe 1.4)
keräten vanhentuneita ruutuja, joita kenelläkään ei ole valtuuksia tai
vastuuta karsia.

### Sisällytä selkeä, näkyvä ilmoitus siitä, mihin mittaristoa ei ole tarkoitettu

Aiheen 1.1 diagnostisen ja arvioivan erottelun mukaisesti ilmoita suoraan ja
näkyvästi jokaisessa mittaristossa, jonka mittareita voitaisiin uskottavasti
väärinkäyttää yksilöiden arviointiin, mihin mittaristoa ei ole tarkoitettu:
"nämä mittarit kuvaavat tiimin ja järjestelmän terveyttä, eikä niitä käytetä
yksilöiden suorituskeskusteluissa." Tämä selkeä ilmoitus, erityisesti kaikissa
aktiivisuusdataa (aihe 3.4) tai päivystyskuormadataa (aihe 6.3) sisältävissä
mittaristoissa, on pieni suunnitteluvalinta, jolla on suhteettoman suuri
vaikutus juuri sen arvioivan ajautumisen estämiseen, josta kirja varoittaa
kauttaaltaan.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Yksi kattava mittaristo kaikille yleisöille | Yksinkertainen rakentaa ja ylläpitää yksi tuotos | Ei palvele hyvin yhtäkään yleisöä; ylivoimainen toisille, riittämätön toisille |
| Yleisökohtaiset mittaristot | Jokainen palvelee todellista päätöstään hyvin | Enemmän tuotoksia rakennettavaksi, ylläpidettäväksi ja pidettäväksi yhdenmukaisina |
| Kattava mittarikattavuus jokaisessa näkymässä | Mikään ei jää pois | Mittaristoväsymys; hautaa mittarit, jotka oikeasti ratkaisevat kyseisen yleisön päätöksen |
| Minimaalinen, päätöslähtöinen mittarivalinta mittaristoa kohden | Kohdennettu, toimintaan johtava, helpompi luottaa | Vaatii harkittua kuratointikuria ja riskeeraa jonkin olennaisen pois jättämisen |

Keskeinen jännite on **kattavuus versus kohdennus**, aiheen 1.1 perusjännite
sovellettuna erityisesti mittariston suunnitteluun. Kattava mittaristo tuntuu
turvallisemmalta, mitään ei jätetä pois, mutta se palvelee todellista
yleisöään yleensä huonommin kuin kohdennettu, joka on rakennettu nimenomaan
niiden päätösten ympärille, joita yleisön on tehtävä. Ratkaise jännite
rakentamalla useita tarkoitukseen sopivia mittaristoja yhden kattavan
sijaan. Hyväksy useamman kohdennetun tuotoksen vaatimaton lisäylläpitokustannus
vastineeksi siitä, että jokainen on oikeasti hyödyllinen
tarkoitetulle yleisölleen.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Yrittääkö nykyinen mittaristomme palvella useita yleisöjä
   samanaikaisesti, ja jos yrittää, ketä se oikeasti palvelee hyvin?** Käy
   nykyinen mittaristosi läpi ja tunnista sen todellinen ensisijainen yleisö
   suhteessa aiottuun yleisöön. Epäsuhta on yleinen ja kannattaa nimetä
   suoraan.

2. **Erottaako jokin mittaristoistamme kannustetun mittarin sen paritetusta
   suojakaiteesta eri näkymiin?** Auditoi nykyiset mittaristosi
   erityisesti tämän mallin varalta aloittaen osan 2 DORA-mittareista ja
   niiden pareista.

3. **Läpäisisivätkö mittaristomme visualisoinnit aiheen 1.6 rehellisen
   visualisoinnin standardit: nollasta alkavat akselit, trendi tilannekuvan
   sijaan, mediaanit keskiarvojen sijaan vinolle datalle?** Käy nykyiset
   kaaviosi läpi tätä tarkistuslistaa vasten suoraan.

4. **Onko jokaisella ylläpitämällämme mittaristolla nimetty omistaja ja
   katselmointirytmi, vai onko joitakin, jotka vain ovat olemassa ilman, että
   kukaan vastaa niiden tarkkuudesta ja relevanssista?** Jos jollakin
   mittaristolla ei ole nimettyä omistajaa, tämä aukko kannattaa sulkea
   heti, sillä omistajaton mittaristo rapistuu täsmälleen kuten omistajaton
   mittari.

5. **Ilmoittaako jokin mittaristo, jonka mittareita voitaisiin uskottavasti
   väärinkäyttää yksilöiden arviointiin, nimenomaisesti, mihin sitä ei ole
   tarkoitettu?** Tarkista erityisesti aktiivisuus- tai päivystyskuormadataa
   sisältävät mittaristot tämän selkeän ilmoituksen varalta.

6. **Jos suunnittelisimme mittaristomme tänään uudelleen alusta, yleisö
   kerrallaan, lähtien päätöksestä, jonka kunkin yleisön on tehtävä, kuinka
   erilaiselta tulos näyttäisi verrattuna nykyiseen?** Tämä ajatuskoe paljastaa
   usein, kuinka suuri osa mittariston rakenteesta on kertynyt hitaudesta
   eikä harkitusta suunnittelusta.

## Sektorinäkökulma

**Startup-yritys.** Yksi, yksinkertainen mittaristo on tässä mittakaavassa
yleensä sopiva, sillä koko tiimi ja johto ovat usein sama pieni ihmisjoukko,
joka tekee pitkälti samoja päätöksiä. Keskity rehellisen visualisoinnin
standardeihin ja selkeään ilmoitukseen ei-arviointikäytöstä jo pienessä
mittakaavassa, sillä nämä tavat on paljon helpompi vakiinnuttaa varhain kuin
lisätä jälkikäteen.

**Pieni yritys.** Useimmat valmiit työkalut tarjoavat kohtuulliset
oletusmittaristot. Päätyö on karsia ne muutamaan mittariin, jotka oikeasti
ohjaavat todellista päätöstä juuri sinun liiketoiminnassasi, sen sijaan että
näyttäisit jokaisen mittarin, jonka työkalu sattuu oletuksena laskemaan.

**Suuryritys.** Yhdenmukaisuus jäykkyyttä lisäämättä on tässä keskeinen haaste:
kymmenet tiimimittaristot tarvitsevat riittävästi yhteistä standardia
(rehellisen visualisoinnin säännöt, suojakaideparitus, omistajuuskuri),
jotta ne ovat luotettavia ja vertailukelpoisia, ja silti kunkin tiimin
erityiset operatiiviset tarpeet saavat muokata omaa näkymäänsä. Investoi
yhteiseen mittariston suunnittelustandardiin, joka pannaan täytäntöön
hallinnan (aihe 1.4) kautta, jäykän, kaikille sopivan mallipohjan tai täysin
jäsentymättömien, epäyhtenäisten paikallisten mittaristojen sijaan.

**Julkishallinto.** Ulkoisen tai valvonnan tarkastelun kohteena olevat
mittaristot tarvitsevat erityistä tarkkuutta rehellisessä visualisoinnissa ja
selkeää hallintadokumentaatiota, sillä ulkopuolisen tarkastajan löytämä
harhaanjohtava kaavio vahingoittaa laitoksen uskottavuutta yksittäistä
mittaria laajemmin. Sovella tämän aiheen suositusten korkeinta standardia
erityisesti kaikkiin ulospäin näkyviin mittaristoihin.

## Esimerkit

**Suuryritys.** Logistiikkateknologiayritys oli vuosia ylläpitänyt yhtä
"insinöörityön terveys" -mittaristoa, jota katsoivat sekä yksittäiset
kehitystiimit että johtoryhmä. Siinä oli yli neljäkymmentä ruutua, jotka
kattoivat kaiken yksittäisistä commit-määristä neljännesvuosittaisiin
liiketoimintatuloksiin. Kumpikaan yleisö ei pitänyt sitä aidosti hyödyllisenä:
insinöörit ohittivat liiketoimintatulosruudut päivittäiselle työlleen
epärelevantteina, ja johtajat hukkuivat tarkkoihin toimitusmittareihin ilman
tulkintakontekstia. Jakaminen kohdennettuun, kuuden ruudun tiimin
operatiiviseen mittaristoon ja erilliseen, kahdeksan ruudun johdon
mittaristoon, jotka molemmat noudattivat tämän aiheen suojakaideparitusta
ja rehellisen visualisoinnin standardeja, tuotti mitattavasti suuremman
käytön. Ratkaisevaa oli, että johtajat kertoivat ensimmäistä kertaa pystyvänsä
selittämään, mitä luvut tarkoittivat, kun heidän oma johtonsa kysyi.

**Julkishallinto.** Osavaltion hallinnon julkisen digitaalisten palvelujen
mittaristoa oli kritisoitu julkisesti kaaviosta, joka näytti "keskimääräisen"
käsittelyajan katkaistulla y-akselilla, mikä liioitteli visuaalisesti
vaatimatonta parannusta. Se rikkoi aiheen 1.6 rehellisen visualisoinnin
standardeja, ja ulkopuolinen teknologiatoimittaja oli huomannut ja kirjoittanut
siitä. Viraston uudistettu mittaristo, joka rakennettiin nimenomaisesti tämän
aiheen standardien mukaan, nollasta alkavin akselein, keskiarvon sijaan
mediaanilla oikealle vinolle käsittelyaikadatalle ja selkeästi merkityin
kontekstein jokaiselle merkittävälle muutokselle, sai jatkoartikkelissa
erityistä kiitosta avoimen julkisen sektorin datan esittämisen malliesimerkkinä.
Se korjasi suoraan uskottavuuden, jonka aiempi harhaanjohtava kaavio oli
vahingoittanut.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Harkittujen, yleisökohtaisten, rehellisesti suunniteltujen mittaristojen
tuotto on todellinen käyttö ja todellinen luottamus. Yllä oleva
logistiikkayritysesimerkki näyttää huonosti suunnitellun yksittäisen
mittariston suoran kustannuksen, eli vähäisen käytön molemmissa aiotuissa
yleisöissä, ja uudistuksen suoran hyödyn, eli mitattavasti suuremman käytön,
kun kukin yleisö sai näkymän, joka oli rakennettu sen omia päätöksiä varten.

Omistamisen kokonaiskustannukset (TCO) ovat useiden, tarkoitukseen sopivien
mittaristojen suunnittelu- ja ylläpitotyö yhden kattavan tuotoksen sijaan
sekä tämän aiheen suosittelema jatkuva hallintakuri (nimetty omistajuus,
katselmointirytmi). Kustannus on vaatimaton verrattuna riskiin, että
mittaristo jää käyttämättä tai, pahempaa, johtaa aktiivisesti yleisönsä
harhaan ja vahingoittaa uskottavuutta, kuten yllä oleva julkishallinnon
esimerkki näyttää konkreettisesti.

## Antimallit ja sudenkuopat

- **Yksi mittaristo, joka yrittää palvella jokaista yleisöä:** ei yleensä
  palvele ketään hyvin.
- **Kannustetun mittarin erottaminen suojakaiteestaan eri näkymiin:** luo
  uudelleen aiheen 1.2 varoittaman kannustinaltistuksen riskin.
- **Epärehelliset visualisointivalinnat:** katkaistut akselit, poimitut
  päivämääräalueet ja kaksoisakselit johtavat lukijoita harhaan, joskus
  todellisin maineseurauksin.
- **Ei nimettyä omistajaa tai katselmointirytmiä itse mittaristolle:**
  tuotos rapistuu täsmälleen kuten omistajaton mittari.
- **Ei selkeää ilmoitusta siitä, mihin mittaristoa ei ole tarkoitettu:**
  kutsuu arvioivaan ajautumiseen, josta kirja varoittaa kauttaaltaan.
- **Kattava ruutukattavuus kohdennetun, päätöslähtöisen kuratoinnin
  sijaan:** tuottaa mittaristoväsymystä ja hautaa sen, mikä oikeasti on
  tärkeää.

## Kypsyysmalli

- **Taso 1, Aloittava:** Yksi, kuratoimaton mittaristo, jos sitäkään,
  palvelee kaikkia yleisöjä huonosti, ilman rehellisen visualisoinnin
  standardia tai suojakaideparitusta.
- **Taso 2, Kehittyvä:** Joitakin yleisökohtaisia näkymiä on, mutta
  visualisointistandardit ovat epäyhtenäisiä ja omistajuus on epäselvää.
- **Taso 3, Vakioitu:** Yleisökohtaiset mittaristot, joissa on johdonmukaiset,
  rehelliset visualisointistandardit ja suojakaideparitus, on otettu käyttöön
  organisaation laajuisesti, ja jokaisella on nimetty omistaja.
- **Taso 4, Hallittu:** Mittaristoja katselmoidaan säännöllisessä rytmissä,
  ilmoitukset ei-arviointikäytöstä ovat paikoillaan tarvittaessa, ja
  vanhentuneita ruutuja karsitaan aktiivisesti.
- **Taso 5, Orkestroitu:** Organisaation mittaristosuunnittelun käytäntö on
  luotettu, hyvin hallittu kyky, ja organisaatio voi osoittaa tiettyjä
  tapauksia, joissa rehelliset, hyvin suunnitellut mittaristot korjasivat tai
  rakensivat sidosryhmien luottamusta.

## Keskusteluideoita

1. Kuka on nykyisen mittaristomme todellinen ensisijainen yleisö verrattuna sen aiottuun yleisöön?
2. Erottaako jokin mittaristoistamme mittarin sen suojakaiteesta?
3. Läpäisisivätkö nykyiset kaaviomme rehellisen visualisoinnin auditoinnin?
4. Onko jokaisella ylläpitämällämme mittaristolla selkeästi nimetty, vastuullinen omistaja?
5. Miltä mittaristojemme alusta tehty, yleisö edellä -uudelleensuunnittelu näyttäisi?

## Keskeiset opit

- Suunnittele **yleisökohtaisia mittaristoja** tietyille päätöksille, ei yhtä
  kattavaa tuotosta, joka yrittää palvella kaikkia.
- Sovella **rehellisen visualisoinnin standardeja** (aihe 1.6) kovina
  vaatimuksina: nollasta alkavat akselit, trendi tilannekuvan sijaan,
  mediaanit keskiarvojen sijaan vinolle datalle.
- **Älä koskaan erota kannustettua mittaria sen suojakaiteesta** eri
  näkymiin. Pidä suojakaideparit samassa mittaristossa.
- Nimeä jokaiselle mittaristolle **omistaja ja katselmointirytmi**, täsmälleen
  kuten aihe 1.4 vaatii mille tahansa hallitulle mittarille.
- Ilmoita selkeästi, **mihin mittaristoa ei ole tarkoitettu**, erityisesti
  siellä, missä aktiivisuus- tai operatiivista kuormadataa voitaisiin
  väärinkäyttää yksilöiden arviointiin.

## Lähteet ja lisälukemista

- *The Visual Display of Quantitative Information*, by Edward R. Tufte
  (rehellisen, eheän datavisualisoinnin perusteos).
- *Storytelling with Data*, by Cole Nussbaumer Knaflic (käytännöllinen
  mittariston ja kaavioiden suunnittelu liiketoimintayleisöille).
- *Information Dashboard Design*, by Stephen Few (mittaristokohtaiset
  suunnitteluperiaatteet tehokkaaseen, rehelliseen viestintään).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (mittariparituksen kuri, jota tämä aihe soveltaa
  suoraan mittariston asetteluun).
