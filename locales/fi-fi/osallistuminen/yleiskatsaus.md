# Osallistuminen

Kiitos, että autat parantamaan tätä kirjaa. Kaikenkokoiset panokset ovat
tervetulleita kirjoitusvirheen korjaamisesta uuden aiheen kirjoittamiseen.

## Perussäännöt

Kirjaa ohjaa tiukka talon tyyli. Olennaiset kohdat:

- Ei em-viivoja. Käytä pilkkua, kaksoispistettä, sulkeita tai kahta virkettä.
- Ei vakiofraaseja (englanniksi "not only ... but also", "load-bearing" ja
  vastaavat).
- Lämmintä, selkeää, suoraa kirjoittamista. Puhuttele lukijaa. Lyhyitä virkkeitä.
- Määrittele termit ensimmäisellä käyttökerralla. Linkitä keskeiset käsitteet
  Wikipediaan ensimmäisellä maininnalla.
- Vain oikeita lähteitä.
- Jokainen mittariperheen aihe nimeää pelaamisen tapansa ja suojakaiteensa.

Täydet säännöt ovat repositorion juuren tiedostossa `spec/conventions.md`, ja
lyhyt versio on [tyylisäännöt](tyylisaannot.md). Testit valvovat mekaanisia
osia.

## Käyttöönotto

Tarvitset Python 3:n ja [justin](https://github.com/casey/just). Tämä
repositorio sisältää kirjan sisällön ja määrittelyn sekä SvelteKit-sivuston
(`software-engineering-metrics.github.io/`), joka renderöi ne julkaistuksi
verkkosivustoksi.

```sh
just         # listaa tehtävät
just test    # aja tarkistussarja
just nav     # generoi navigointitiedostot uudelleen
just stats   # aihe- ja sanamäärät
```

## Muutoksen tekeminen

1. Lue sopiva opas: [kirjoittaminen](kirjoittaminen.md) aiheille,
   [navigointi](navigointi.md) generoiduille tiedostoille, [testaus](testaus.md)
   testeille.
2. Tee pienin muutos, joka hoitaa asian.
3. Jos lisäsit, poistit, nimesit uudelleen tai numeroit uudelleen aiheen, päivitä
   `spec/structure.md` repositorion juuressa ja aja `just nav`.
4. Aja `just test`. Sen on mentävä läpi.
5. Lisää yksirivinen merkintä [muutoshistoriaan](../projekti/muutoshistoria.md)
   kohtaan **Unreleased**.

## Mitä voit tehdä

- Korjaa virheitä, epäselviä kohtia tai vanhentuneita lähteitä.
- Paranna esimerkkejä, erityisesti konkreettisia suuryritys- ja
  julkishallintoesimerkkejä.
- Tarkista viittaukset oikeista lähteistä.
- Täytä aukkoja aiheen kattavuudessa rikkomatta pohjaa.

## Mitä välttää

- Älä muokkaa generoituja tiedostoja käsin (`README.md`, kunkin kielialueen
  `index.md`, `front-matter/table-of-contents.md` ja
  `topics/09-07-index.md`). Muuta aiheita ja aja sen sijaan `just nav`.
- Älä muokkaa `en-001`-, `en-gb`- tai `en-us`-kielialuetta suoraan; ne johdetaan
  `en-gb-oxendict`-kielialueesta työkalulla `tools/localize.py`.
- Älä lisää aihetta päivittämättä samalla `spec/structure.md`:tä.
- Älä tuo mukaan em-viivoja tai kiellettyjä fraaseja; testit kaatuvat.

## Ongelmien ilmoittaminen

Avaa issue, joka kuvaa ongelman, tiedoston ja aiheen ja tarvittaessa oikean
lähteen tai viittauksen. Pienet, täsmälliset ilmoitukset on helpoin hoitaa.
