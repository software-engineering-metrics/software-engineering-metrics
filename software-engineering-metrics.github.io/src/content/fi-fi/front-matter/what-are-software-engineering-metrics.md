# Mitä ovat ohjelmistotuotannon mittarit?

[Ohjelmistotuotannon mittarit](https://en.wikipedia.org/wiki/Software_metric)
ovat määrällisiä lukuja, joilla arvioidaan, seurataan ja parannetaan
ohjelmistokehityksen prosessien, tuotteiden ja tiimien laatua, tehokkuutta ja
vaikutusta. Hyvin tehtyinä ne toimivat järjestelmän diagnostiikkatyökaluina:
ne paljastavat toiminnan pullonkaulat, perustelevat teknisen velan
purkamisen ja kytkevät kehitystyön konkreettisiin liiketoimintatuloksiin.
Huonosti tehtyinä ne vääristävät käyttäytymistä, rapauttavat luottamusta ja
palkitsevat täsmälleen vääriä asioita.

Tämä kirja on olemassa, koska useimmat tiimit tarttuvat mittareihin ennen kuin
ovat päättäneet, mitä varten mittari on. Mittaristo täyttyy kaikesta, mikä on
helppo laskea, johtoryhmä alkaa kysyä "onko tämä luku noussut vai laskenut", ja
neljänneksessä tiimi optimoi lukua sen tuloksen sijaan, jota luvun piti kuvata.
Tälle ilmiölle on nimi, [Goodhartin laki](https://en.wikipedia.org/wiki/Goodhart%27s_law):
kun mittarista tulee tavoite, se lakkaa olemasta hyvä mittari. Jokainen
tämän kirjan aihe on kirjoitettu niin, että tämä laki seisoo sen takana.

## Kaksi perusviitekehystä

Ala on pitkälti päätynyt kahteen tutkimukseen perustuvaan viitekehykseen,
joilla mitataan toimitusta ja tiimin hyvinvointia.

**[DORA-mittarit](https://dora.dev/guides/dora-metrics/)** (DevOps Research and
Assessment -ohjelmasta) mittaavat järjestelmän läpivirtausta ja vakautta:
julkaisutiheyttä, muutosten läpimenoaikaa, muutosten epäonnistumisprosenttia
ja epäonnistuneen julkaisun palautumisaikaa. Kirjan osa 2 käsittelee kaikki
neljä omassa viiteaiheessaan yhdessä Flow Frameworkin kanssa, jolla toimituksen
ja virtauksen mittarit jäsennetään laajemmin. DORA mittaa putken mekaniikkaa
hyvin, mutta ei kerro mitään siitä, millaista arvoa putkessa liikkuu.

**[SPACE-viitekehys](https://queue.acm.org/detail.cfm?id=3454124)**, jonka
tekivät tutkijat Microsoftilta, GitHubilta ja Victorian yliopistosta, tasapainottaa
pelkän läpivirtauksen kehittäjäkokemuksella viidellä ulottuvuudella:
tyytyväisyys ja hyvinvointi, suorituskyky, aktiivisuus, viestintä ja yhteistyö
sekä tehokkuus ja flow. Osa 3 käsittelee sitä perusteellisesti.

Näiden kahden lisäksi tiimit seuraavat alueittain ryhmiteltyjä paikallisia
mittareita: koodin ja laadun mittareita (osa 4), tuote- ja liiketoimintamittareita
(osa 5) sekä luotettavuuden, käytön ja tietoturvan mittareita (osa 6). Osa 7
käsittelee jo käynnissä olevaa muutosta: generatiivisen tekoälyn työkalut ovat
tehneet raa'asta koodituotoksesta lähes ilmaista, minkä vuoksi useat alan
vuosikymmenen käyttämät mittarit eivät enää tarkoita sitä, mitä ennen.

## Kenelle tämä on tarkoitettu

Ensisijainen lukija on se, joka päättää, mitä tiimi mittaa ja miksi:
ohjelmistotuotannon johtajat, staff- ja principal-tason insinöörit, alusta- ja
DevOps-tiimit sekä ohjelma- ja tuotepäälliköt, jotka rakentavat mittaristoa
tai tuloskorttia ensimmäistä kertaa tai korjaavat sellaista, joka on alkanut
vääristää käyttäytymistä. Toissijainen lukija on jokainen kehittäjä, joka
haluaa ymmärtää, miksi hänen organisaationsa seuraa sitä mitä seuraa ja miten
voi vastustaa mittaria, jota käytetään väärin.

## Näin luet tätä kirjaa

Aloita tästä ja lue sitten [johdanto](introduction.md), jossa kerrotaan kirjan
rakenne, tai hyppää suoraan [sisällysluetteloon](table-of-contents.md).
Jokainen aihe on itsenäinen: se esittää periaatteensa ensin, antaa konkreettisia
suosituksia, kertoo miten käsitelty mittari pelataan ja päättyy kypsyysmalliin,
keskustelukysymyksiin ja lähteisiin. Kirjaa ei tarvitse lukea kannesta kanteen,
jotta siitä on hyötyä.
