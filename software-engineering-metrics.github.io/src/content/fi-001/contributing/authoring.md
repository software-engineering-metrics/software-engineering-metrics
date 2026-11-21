# Kirjoittaminen: aiheiden kirjoittaminen ja muokkaaminen

## Ennen kuin kirjoitat

- Lue [tyylisäännöt](style-rules.md) ja repositorion juuren
  `spec/conventions.md`.
- Katso repositorion juuren `spec/structure.md`, niin näet, mihin aihe sopii ja
  millä numerolla.

## Uuden aiheen kirjoittaminen

1. Valitse osa ja sen seuraava vapaa desimaaliluku. Numerointi on yhtenäinen,
   joten uusi aihe saa yleensä osansa viimeistä seuraavan numeron.
2. Luo `locales/en-gb-oxendict/topics/PP-CC-slug.md` (nollilla täytetty,
   viivalla erotettu etuliite, esimerkiksi `02-01-...`)
   [aihepohjasta](chapter-template.md). Kirjoita Oxford-oikeinkirjoituksella (katso
   `spec/oxford-spelling.md`); älä koskaan muokkaa muita kolmea kielialuetta
   suoraan.
3. Kirjoita pohjan mukaan. Jokainen sisältöaihe tarvitsee kaikki osionsa:
   yleiskatsaus, keskeiset periaatteet, suositukset, kompromissit (taulukon
   kanssa), keskustelukysymykset, sektorinäkökulma (startup, pieni yritys,
   suuryritys, julkishallinto), esimerkit (yksi suuryritys ja yksi
   julkishallinto), liiketoimintaperustelu, antimallit, viisitasoinen
   kypsyysmalli, keskusteluideat, keskeiset opit ja lähteet.
4. Nimeä pelaamisen tapa. Jokainen mittariperhe tarvitsee selkeän vastauksen
   kysymykseen "miten tiimi saa tämän luvun näyttämään hyvältä parantamatta
   sitä, mitä se mittaa, ja mikä suojakaide sen pysäyttää" (katso aihe 1.2).
5. Määrittele termit ensimmäisellä käyttökerralla. Lisää Wikipedia-linkit
   keskeisiin käsitteisiin ensimmäisellä maininnalla, vain leipätekstiin.
6. Viittaa muihin aiheisiin desimaalinumerolla, esimerkiksi "(aihe 2.1)".
7. Lisää aihe tiedostoon `spec/structure.md`.
8. Jos osan johdanto (N.0) luettelee sen aiheet, lisää sinne luetelmakohta.
9. Aja `python3 tools/localize.py`, jotta aihe johdetaan kielialueille
   `en-001`, `en-gb` ja `en-us`.
10. Aja `just nav` ja sitten `just test`.

## Olemassa olevan aiheen muokkaaminen

- Säilytä osioiden järjestys ja otsikot ennallaan. Testit tarkistavat, että
  sisältöaiheissa on edelleen kaikki vaaditut osiot.
- Säilytä sisäiset määritelmät, Wikipedia-linkit, taulukot ja lähdeluettelo,
  ellei muokkaus koske nimenomaan niitä.
- Älä tuo mukaan em-viivoja tai kiellettyjä fraaseja. Jos muotoilet uudelleen,
  kirjoita lause uusiksi sen sijaan, että pudottaisit väliin viivan.
- Aja jälkeenpäin `python3 tools/localize.py`, jotta `en-001`, `en-gb` ja
  `en-us` johdetaan uudelleen muokatusta `en-gb-oxendict`-lähteestä.

## Uudelleennimeäminen tai uudelleennumerointi

- Nimeä tiedosto uudelleen hakemistossa `locales/en-gb-oxendict/`, päivitä sen
  `# N.M Otsikko` -otsikko, päivitä `spec/structure.md` ja päivitä jokainen
  ristiviittaus, joka osoittaa vanhaan numeroon.
- Aja `python3 tools/localize.py`, jotta tiedosto nimetään uudelleen myös muilla
  kolmella kielialueella (se johtaa kaikki neljä samoista suhteellisista
  poluista).
- Aja `just nav` ja `just test`. Testit huomauttavat, jos H1 ja tiedostonimi
  eivät täsmää, numeroinnissa on aukko, kielialue on ajautunut lähteestä tai
  linkki on rikki.

## Sävymuistutus

Kirjoita kuin kokenut kollega, joka haluaa lukijan onnistuvan. Lämpimästi,
selkeästi, suoraan ja hyödyllisesti. Lyhyitä virkkeitä. Ei täytettä.
