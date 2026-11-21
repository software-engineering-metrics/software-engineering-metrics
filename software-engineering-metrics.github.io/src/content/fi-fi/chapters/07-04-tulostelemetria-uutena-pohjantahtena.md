# 7.4 Tulostelemetria uutena pohjantähtenä

## Yleiskatsaus ja perustelut

Tämä aihe päättää osan 7 ja jossain mielessä päättää koko sen väitteen,
jota tämä kirja on rakentanut aiheesta 1.3 alkaen. Väite on yksinkertainen:
kun generatiivinen tekoäly tekee raa'an tuotoksen halvaksi, **tulos[telemetria](https://en.wikipedia.org/wiki/Telemetry)**,
todellisten tulosten jatkuva, instrumentoitu mittaus aktiivisuuden tai
tuotoksen sijaan, lakkaa olemasta yksi hyvä käytäntö muiden joukossa ja
muuttuu periaatteeksi, jonka ympärille mittariohjelma on rakennettava. Tämä ei
ole uusi ajatus, joka esiteltäisiin tässä ensimmäistä kertaa. Se on sama ajatus,
jonka aihe 1.3 esitteli kirjan avausosassa, nyt esitettynä välttämättömänä eikä
vain suotavana vastauksena teknologiamuutokseen, joka on tehnyt jokaisesta
vaihtoehdosta aiempaa vaarallisemman.

Logiikka on suoraviivainen. Ennen generatiivista tekoälyä tuotosten määrä oli
epätäydellinen mutta ei arvoton sijaismittari vaivalle ja löyhästi arvolle.
Tiimi, joka julkaisi enemmän ominaisuuksia, oli ainakin tehnyt enemmän työtä,
vaikka työ ei aina ollut oikeaa työtä. Generatiivinen tekoäly katkaisee jopa
tämän löyhän yhteyden: tuotosten määrä ei enää luotettavasti kerro vaivasta,
koska työkalu voi tuottaa sen sekunneissa, eikä se varmasti kerro arvosta,
sillä aihe 7.3 osoitti, että paisutettu tuotos voi elää rinnakkain heikkenevän
laadun kanssa. Mittarit, jotka selviävät tästä muutoksesta ehjinä, ovat
täsmälleen ne, joiden suuntaan kirja on korostanut rakentamista alkuaiheistaan
asti: karanneiden virheiden osuus (aihe 5.1), ominaisuuksien käyttöönotto
(aihe 5.2), asiakas- ja liiketoimintatulokset (aihe 5.3), luotettavuus
(osa 6) ja kehittäjien hyvinvointi (osa 3). Mikään näistä ei riipu siitä,
miten taustalla oleva koodi tuotettiin. Kaikki mittaavat sitä, mitä
todella tapahtui seurauksena.

Suurille tiimeille tämän aiheen argumentilla on suoria, käytännön seurauksia
siihen, miten mittariohjelma tulee rakentaa ja rakentaa uudelleen
jatkossa. Suuryritysten, jotka suunnittelevat ohjelmistotuotannon
mittaristojaan uudelleen tekoälyn käyttöönoton valossa, tulisi painottaa
investointeja erityisesti tässä kuvattuun tulostelemetrian infrastruktuuriin.
Julkishallinnon, joka arvioi sekä tekoälytyökaluja että laajempia teknologiaohjelmia,
joihin ne on upotettu, tulisi vaatia molemmilta samaa tulostelemetrian
standardia, jota tämä aihe suosittelee lähtökohdaksi mille tahansa uskottavalle,
tulevaisuutta kestävälle arvioinnille.

## Keskeiset periaatteet

- **Tulostelemetriasta tulee välttämätön, ei vain suotava, kun tuotos on
  halpaa.** Tämä on aiheen 1.3 perusperiaate, nyt kiireellinen eikä
  tavoitteellinen.
- **Muutoksen kestävät mittarit ovat ne, joiden suuntaan kirja on rakentanut
  alusta asti**: karanneet virheet, käyttöönotto, liiketoimintatulokset,
  luotettavuus ja hyvinvointi.
- **Ensisijaisesti tuotosmittareiden varaan rakennettu mittariohjelma on nyt
  rasite, ei vain epäoptimaalinen valinta.** Tuotosmittareita voi paisuttaa
  halvalla ja nopeasti suuressa mittakaavassa.
- **Tulostelemetria vaatii todellista investointia**: instrumentointia,
  kärsivällisyyttä hitaampaa signaalia kohtaan ja organisaation kuria, jolla
  vastustetaan vetoa kohti nopeampia, halvempia mutta nyt epäluotettavia
  tuotosmittareita.
- **Tämä periaate kestää minkä tahansa yksittäisen tekoälytyökalun tai
  toimittajan.** Se on pysyvä vastaus pysyvään muutokseen siinä, mitä tuotos
  tarkoittaa, ei väliaikainen säätö ohimenevään trendiin.

## Suositukset

### Auditoi mittariinvestointiesi suhde: tulostelemetria versus tuotosten seuranta

Laske suunnilleen, kuinka suuri osa nykyisestä mittausinfrastruktuuristasi,
instrumentointityöstä, mittariston tilasta ja katselmointipalaverien ajasta
kohdistuu tulosmittareihin (osa 5, osa 6, kehittäjien hyvinvointi osasta 3)
verrattuna tuotos- ja aktiivisuusmittareihin (julkaisujen määrä,
commit-määrä, pull requestien läpivirtaus). Jos tuotosten seuranta
hallitsee, suhde itsessään on nyt tämän aiheen argumentin valossa rasite, ja
sen tasapainottaminen uudelleen on aiheen suositteleman muutoksista
vaikuttavin.

### Investoi tulostelemetrian infrastruktuuriin harkiten, ensiluokkaisena insinöörityön investointina

Tulosten mittaus, ominaisuuksien käyttöönoton seuranta, liiketoimintatulosten
korrelaatio (aihe 5.3) ja luotettavuuden instrumentointi (osa 6) vaativat
todellista, jatkuvaa insinöörityön investointia. Moni organisaatio on
historiallisesti resursoinut ne liian niukasti verrattuna suhteellisen
halpoihin ja helppoihin tuotosmittareihin, jotka hallitsevat monia nykyisiä
mittaristoja. Kohtele tätä infrastruktuuri-investointia samalla vakavuudella,
jolla kirja suhtautuu mihin tahansa muuhun merkittävään insinöörikykyyn, ei
toissijaisena huolena itse tekoälytyökaluinvestoinnin takana.

### Hyväksy ja kommunikoi, että tulostelemetria on hitaampaa, ja rakenna kärsivällisyys osaksi organisaation odotuksia

Tulosmittarit ovat lähes luonteensa vuoksi jälkijättöisempiä ja kohinaisempia
kuin tuotosmittarit (aiheen 1.3 ennakoivien ja jälkikäteisten indikaattorien
ero, aiheen 1.6 tilastollinen varovaisuus). Organisaation, joka on tottunut
tuotosluvun nousun nopeaan, tyydyttävään palautteeseen, on rakennettava
aitoa kärsivällisyyttä tulostelemetrian tarjoamaa hitaampaa, rehellisempää
signaalia kohtaan. Johdon on aktiivisesti viestittävä ja osoitettava tuota
kärsivällisyyttä esimerkillään sen sijaan, että se tarttuisi refleksinomaisesti
nopeampaan, nyt epäluotettavaan vaihtoehtoon paineessa näyttää nopeita tuloksia.

### Käytä muutosta tilaisuutena poistaa aidosti vanhentuneet tuotosmittarit, älä vain lisää tulosmittareita niiden rinnalle

Aiheen 1.1 kurin mukaisesti, jossa poistetaan mittarit, jotka eivät enää
ansaitse paikkaansa, käytä tätä hetkeä harkittuna tilaisuutena poistaa
tuotos- ja aktiivisuusmittarit, joiden arvon tämä muutos on erityisesti
heikentänyt. Älä vain lisää tulosmittareita muuttumattoman nykyisen
mittariston päälle. Mittaristo, joka säilyttää jokaisen vanhan tuotosmittarin
ja lisää uusia tulosmittareita, paisuu eikä parane.

### Kohtele tulostelemetrian investointia pysyvänä, riippumattomana mistään yksittäisestä tekoälytyökalusta tai toimittajasuhteesta

Rakenna tulostelemetrian infrastruktuuri pysyväksi organisaation kyvyksi, ei
reaktioksi siihen tekoälytyökaluun, jota organisaatiosi sattuu käyttämään
tänä vuonna. Tämä periaate ja sen vaatima infrastruktuuri kestävät minkä
tahansa yksittäisen toimittajasuhteen tai työkalusukupolven, ja pysyvänä
kykynä rakennettuna se suojaa mittariohjelmaasi seuraavalta teknologiamuutokselta
yhtä hyvin kuin nykyiseltä.

## Kompromissit: edut ja haitat

| Lähestymistapa | Edut | Haitat |
| --- | --- | --- |
| Tuotosmittareiden hallitsema mittaristo | Nopea, halpa palaute; tuttu useimmille organisaatioille | Nyt aktiivisesti epäluotettava generatiivisen tekoälyn tuotoksen kustannukseen vaikuttavan muutoksen vuoksi |
| Tulostelemetrian hallitsema mittaristo | Kestää muutoksen; mittaa sitä, mikä oikeasti on tärkeää | Hitaampi, kohinaisempi signaali; vaatii todellista instrumentointi-investointia |
| Tulosmittarien lisääminen muuttumattomien tuotosmittarien rinnalle | Vähittäinen, vähemmän häiritsevä | Tuottaa mittariston paisumista aidon parannuksen sijaan |
| Täysi, harkittu tasapainotus kohti tulostelemetriaa | Puuttuu muutokseen suoraan ja täydellisesti | Vaatii merkittävimmän organisaatio- ja investointimuutoksen |

Keskeinen jännite on jossain mielessä sama, jolla kirja avattiin aiheessa 1.3,
nyt terävimmässä kiireellisessä muodossaan: **nopea, tuttu palaute versus
hitaampi, rehellinen signaali**. Tuotosmittareita on aina ollut helpompi ja
nopeampi tuottaa. Tämän aiheen väite on, että generatiivinen tekoäly on
siirtänyt tuon vaihtokaupan pelkästä epäoptimaalisuudesta aktiivisesti
vaaralliseksi. Ratkaise jännite kuten kirja on suositellut avausaiheestaan
alkaen: painota ratkaisevasti tuloksia, hyväksy hitaampi palaute, joka kuuluu
aidon arvon mittaamiseen, ja kohtele tuon hitaamman palautteen epämukavuutta
rehellisenä hintana siitä, että mittaat jotain todellista etkä jotain vain
kätevää.

## Keskusteltavia kysymyksiä tiimin kanssa

1. **Kuinka suuri osa nykyisestä mittausinfrastruktuuristamme ja mittariston
   huomiosta kohdistuu tulosmittareihin verrattuna tuotos- ja
   aktiivisuusmittareihin?** Laske tämä suhde rehellisesti. Useimmat
   organisaatiot huomaavat ensimmäistä kertaa arvioidessaan, että se on
   enemmän tuotospainotteinen kuin ne olisivat arvanneet.

2. **Mitä erityistä tulostelemetrian infrastruktuuri-investointia olemme
   lykänneet nopeamman ja halvemman tuotosten seurannan hyväksi?** Nimeä
   konkreettinen esimerkki, ominaisuuksien käyttöönoton instrumentointi tai
   liiketoimintatulosten korrelaatiotyökalut, ja keskustelkaa siitä, mitä
   sen rakentaminen oikeasti vaatisi.

3. **Onko organisaatiomme rakentanut aitoa kärsivällisyyttä tulostelemetrian
   hitaampaa palautetta kohtaan, vai vetääkö paine nopeisiin tuloksiin meitä
   takaisin nopeampien mutta nyt epäluotettavien tuotosmittarien suuntaan?**
   Ole rehellinen tästä mallista omassa viimeaikaisessa raportoinnissasi ja
   katselmointipalavereissasi.

4. **Mikä tuotos- tai aktiivisuusmittari nykyisessä mittaristossamme on aito
   poistoehdokas, nyt kun tämän aiheen argumentti koskee sitä erityisesti?**
   Tunnista vähintään yksi ja keskustelkaa siitä, mikä sen pitäisi korvata
   sen sijaan, että jätettäisiin vain aukko.

5. **Jos tekoälytoimittajamme tai nykyinen tekoälyn koodausassistenttien
   sukupolvi muuttuisi dramaattisesti ensi vuonna, kestäisikö
   mittariohjelmamme edelleen?** Tämä testaa, onko
   tulostelemetria-investointisi aidosti pysyvä, rakennettu pysyväksi kyvyksi,
   vai pelkkä nykyiseen työkalutilanteeseen sidottu reaktio.

6. **Miltä näyttäisi, jos organisaatiomme sitoutuisi täysin tämän aiheen
   argumenttiin ja tasapainottaisi mittariinvestointinsa ratkaisevasti kohti
   tuloksia vähittäisen sijaan?** Hahmottele tämä konkreettisesti sen sijaan,
   että jättäisit sen abstraktiksi. Nykytilan ja tämän vision välinen aukko
   on organisaatiosi todellinen tiekartta vastaukseksi tähän muutokseen.

## Sektorinäkökulma

**Startup-yritys.** Tulostelemetrian rakentaminen varhain, ennen kuin
tuotosmittarit ovat ehtineet juurtua syväksi organisaation tavaksi, on
aidosti helpompaa kuin sen jälkiasennus myöhemmin. Nuorella yrityksellä, joka
ottaa tekoälyn koodausavustuksen käyttöön alusta asti, on todellinen
tilaisuus rakentaa mittariohjelmansa tulokset edellä, sen sijaan että sen
tarvitsisi purkaa olemassa oleva tuotosmittarien hallitsema kulttuuri.

**Pieni yritys.** Keskitä tulostelemetria-investointi siihen yhteen
tulosmittariin, joka heijastaa suorimmin selviytymistä ja kasvua (aihe 5.3),
sen sijaan että yrittäisit kattavaa instrumentointia jokaisessa kirjan
käsittelemässä tulosluokassa. Vaatimaton, kohdennettu tulostelemetria-investointi
voittaa kattavan tuotosmittaristoin, jonka arvon tämän aiheen argumentti on nyt
erityisesti heikentänyt.

**Suuryritys.** Tämän aiheen suosittelema tasapainotus on tässä mittakaavassa
aito, merkittävä organisaatiomuutos, joka vaatii todennäköisesti johdon
sponsoroinnin ja usean vuosineljänneksen investointisuunnitelman. Kohtele sitä
samalla vakavuudella kuin mitä tahansa muuta kirjan käsittelemää suurta
infrastruktuuri-investointia, ja käytä aiheiden 7.1 ja 7.3 konkreettisia
esimerkkejä, mittarien inflaatiota ja laadun laimenemista, jonka
tasapainotettu mittaristo olisi havainnut aiemmin, rakentaessasi sisäistä
perustelua investoinnille.

**Julkishallinto.** Julkishallinnon teknologiaohjelmat, joita arvioidaan
ensisijaisesti toimitus- ja tuotosmittareilla (julkaistut ominaisuudet,
aikataulussa pysyminen), ovat yhä alttiimpia juuri sille epäilylle, jota
aihe 5.3 kuvasi. Tämän aiheen argumentti terävöittää tuota alttiutta
entisestään, kun tekoälytyökalujen käyttöönotto leviää koko alalle, josta
virastot rekrytoivat ja johon niitä verrataan. Rakenna tulostelemetria
julkisen raportoinnin ja budjettiperustelun ensisijaiseksi pohjaksi ja aseta
organisaatiosi tämän muutoksen edelle eikä sen perään.

## Esimerkit

**Suuryritys.** Ohjelmistoyrityksen kehitysjohto, jonka aiheen 7.1
finanssiteknologiaesimerkissä kuvattu mittarien inflaation läheltä piti
-tilanne suoraan käynnisti, teki täyden auditoinnin mittariinvestointiensa
suhteesta ja havaitsi, että lähes 70 % mittariston tilasta ja
instrumentointityöstä oli omistettu tuotos- ja aktiivisuusmittareille ja
vain vaatimaton, epäyhtenäinen investointi tulostelemetriaan. Seuraavan
vuoden aikana yritys tasapainotti suhdetta harkiten: se poisti useita
tuotosmittareita, jotka aiheen 7.1 auditointi oli merkinnyt alttiimmiksi, ja
investoi vapautuneen kapasiteetin ominaisuuksien käyttöönoton ja
liiketoimintatulosten instrumentointiin (aiheet 5.2, 5.3). Sama aiemmin
epäillyt hallituksen jäsen kiitti seuraavan vuoden hallituksen kokouksessa
esiteltyä mittaristoa selvästi luotettavammaksi pohjaksi
insinööri-investointien arvioinnille kuin sen korvaamaa tuotospainotteista
versiota.

**Julkishallinto.** Kansallinen digitaalisten palvelujen virasto rakensi uutta
ohjelmistotuotannon mittariohjelmaa alusta asti, koska sen edellinen
tuotosmittareiden hallitsema mittaristo oli herättänyt jatkuvaa epäilyä
lainsäätäjissä. Virasto otti tämän aiheen periaatteen nimenomaiseksi
perustavaksi suunnitteluratkaisuksi: tulostelemetria, kansalaisen
odotusaika, palvelun läpivientiprosentti ja karanneiden virheiden osuus,
olisi kaiken julkisen raportoinnin ensisijainen pohja, ja tuotos- ja
toimitusmittarit säilyisivät vain sisäisinä diagnostiikkatyökaluina, ei
koskaan ulkoisesti esitettynä pääasiallisena näyttönä. Tämä tulokset edellä
-suunnittelu, joka rakennettiin harkiten tämän osan kuvaaman
generatiivisen tekoälyn muutoksen valossa, antoi viraston raportoinnille
pysyvyyttä ja uskottavuutta sen valvontavaliokunnan silmissä. Edeltävä
ohjelma, joka oli rakennettu aiemman sukupolven tuotosmittarioletusten
ympärille, ei ollut koskaan saavuttanut sitä.

## Liiketoimintaperustelu: motiivit, ROI ja TCO

Tulostelemetriaan päättäväisesti sitoutumisen tuotto on mittariohjelma, joka
pysyy luotettavana ja uskottavana nykyisen teknologiamuutoksen läpi ja
sen jälkeenkin. Se ei tarvitse toista merkittävää uudistusta seuraavalla
kerralla, kun tuotos halpenee jonkin tulevan teknologiamuutoksen myötä. Yllä
oleva ohjelmistoyritysesimerkki näyttää tämän konkreettisesti: tasapainotettu
mittaristo korjasi suoraan uskottavuuden, jonka aiempi tuotospainotteinen
versio oli asettanut todelliseen vaaraan.

Omistamisen kokonaiskustannukset (TCO) ovat tämän aiheen suosittelema
tulostelemetrian infrastruktuuri-investointi, suurelle organisaatiolle aidosti
merkittävää, usean vuosineljänneksen työtä. Sitä punnitaan sen pysyvää,
pitkän aikavälin riskiä vastaan, että mittariohjelma muuttuu
asteittain epäluotettavammaksi, kun tuotos halpenee edelleen. Kirja ei
pyydä sinua hyväksymään tätä kustannusta kevyesti. Se on suora, välttämätön
seuraus siitä, että aiheen 1.3 perusargumenttia otetaan niin vakavasti kuin
kirjan tämä viimeinen osa sitä pyytää.

## Antimallit ja sudenkuopat

- **Muutoksen kohtelu vain vähittäistä säätöä vaativana aidon tasapainotuksen
  sijaan:** aliarvioi muutoksen mittakaavan, jonka generatiivinen tekoäly on
  tuonut siihen, mitä tuotosmittarit tarkoittavat.
- **Tulosmittarien lisääminen muuttumattoman, edelleen hallitsevan
  tuotosmittarijoukon rinnalle:** tuottaa mittariston paisumista aiheen
  puolustaman aidon tasapainotuksen sijaan.
- **Tulostelemetria-investoinnin rakentaminen reaktiona tiettyyn nykyiseen
  tekoälytyökaluun pysyvän kyvyn sijaan:** jättää organisaation yhtä lailla
  alttiiksi seuraavalle teknologiamuutokselle.
- **Organisaation kärsivällisyyden rakentamatta jättäminen tulostelemetrian
  hitaampaa palautetta kohtaan:** riskinä palata nopeampiin mutta nyt
  epäluotettaviin tuotosmittareihin paineessa saada nopeita tuloksia.
- **Tuotosmittarien poistaminen ilman aitoa tulostelemetriakorviketta:**
  jättää mittausaukon aidon parannuksen sijaan.
- **Muutoksen esittäminen sidosryhmille pelkkänä vastauksena tekoälytyökaluihin
  eikä kirjan perusperiaatteen toteutumisena:** aliarvioi argumentin
  pysyvyyttä ja yleisyyttä.

## Kypsyysmalli

- **Taso 1, Aloittava:** Mittaristo on edelleen tuotosmittareiden
  hallitsema, eikä tämän osan kuvaamaan muutokseen ole harkittua vastausta.
- **Taso 2, Kehittyvä:** Joitakin tulosmittareita on lisätty, mutta
  investointien kokonaissuhde on edelleen tuotospainotteinen, eikä yhtäkään
  mittaria ole poistettu harkiten.
- **Taso 3, Vakioitu:** Harkittu auditointi ja tasapainotus kohti
  tulostelemetriaa on tehty, ja aidosti vanhentuneet tuotosmittarit on
  poistettu organisaation laajuisesti.
- **Taso 4, Hallittu:** Tulostelemetrian infrastruktuuria kohdellaan
  ensiluokkaisena, jatkuvana insinöörityön investointina, ja organisaation
  kärsivällisyyttä sen hitaampaa palautetta kohtaan viljellään ja suojellaan
  aktiivisesti.
- **Taso 5, Orkestroitu:** Organisaation mittariohjelmaa ohjaa tulostelemetria
  pysyvänä suunnitteluperiaatteena. Se on osoittautunut kestäväksi nykyisen
  teknologiamuutoksen läpi ja on nimenomaisesti rakennettu kestämään sen,
  mitä seuraavaksi tulee.

## Keskusteluideoita

1. Mikä on nykyinen todellinen suhteemme tulosmittari- ja tuotosmittari-investointien välillä?
2. Minkä yhden tuotosmittarin meidän pitäisi poistaa tällä vuosineljänneksellä, ja mikä tulosmittari sen korvaa?
3. Missä organisaation kärsimättömyys on viime aikoina vetänyt meidät takaisin nopeampiin mutta vähemmän luotettaviin tuotosmittareihin?
4. Onko tulostelemetria-investointimme pysyvä vai sidottu erityisesti nykyiseen tekoälytyökalutilanteeseemme?
5. Mitä vaadittaisiin sitoutumaan täysin tämän aiheen argumenttiin vähittäisen säätämisen sijaan?

## Keskeiset opit

- Tulostelemetriasta tulee **välttämätön, ei vain suotava**, kun
  generatiivinen tekoäly tekee tuotoksesta halpaa. Tämä on aiheen 1.3
  perusperiaate, nyt kiireellinen.
- Mittarit, jotka **selviävät tästä muutoksesta**, ovat ne, joiden suuntaan
  kirja rakentaa alusta loppuun: karanneet virheet, käyttöönotto,
  liiketoimintatulokset, luotettavuus ja hyvinvointi.
- **Auditoi ja tasapainota mittariinvestointiesi suhde** harkiten ja poista
  aidosti vanhentuneet tuotosmittarit sen sijaan, että vain lisäät
  tulosmittareita niiden rinnalle.
- Rakenna organisaatiossa **kärsivällisyyttä tulostelemetrian hitaampaa
  palautetta kohtaan** ja vastusta vetoa takaisin nopeampiin mutta nyt
  epäluotettaviin tuotosmittareihin paineen alla.
- Rakenna tämä investointi **pysyväksi kyvyksi**, riippumattomaksi mistään
  yksittäisestä tekoälytyökalusta tai toimittajasta, ja suojaa
  mittariohjelmasi tulevilta teknologiamuutoksilta yhtä hyvin kuin nykyiseltä.

## Lähteet ja lisälukemista

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (tulospohjaisen mittauksen perusta, jonka varaan
  koko kirja ja osan 7 tämä päätösaihe rakentuvat).
- *Lean Analytics*, by Alistair Croll and Benjamin Yoskovitz (toimintaan
  johtavan ja kulissimittarin ero, jonka tämän aiheen argumentti laajentaa
  tekoälyaikaan).
- *The Innovator's Dilemma*, by Clayton M. Christensen (yleinen malli, jossa
  vakiintuneista mittareista ja käytännöistä tulee rasite häiritsevässä
  teknologiamuutoksessa).
- *Measure What Matters*, by John Doerr (tulossuuntautunut tavoiteasetanta
  mittariohjelman organisoivana periaatteena, malli, jonka tämä aihe
  väittää nyt olevan oletus eikä poikkeus).
