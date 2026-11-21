# Tyylisäännöt (yhteiset, pakolliset)

Talon tyyli yhdessä paikassa. Kohdat, joissa lukee "(testi)", tarkistaa
`tests/validate.py`, ja rikkomus kaataa koonnin. Kokonainen selittävä versio on
repositorion juuren tiedostossa `spec/conventions.md`.

## Kovat säännöt

- **Ei em-viivoja.** Älä koskaan käytä merkkiä em-viiva (U+2014). Käytä pilkkua,
  kaksoispistettä, sulkeita tai kahta virkettä. En-viivat "-" sallitaan vain
  lukuväleissä, kuten `1–9` tai `2.1–2.8`. (testi)
- **Ei vakiofraaseja.** Älä käytä englanninkielisiä "not only ... but also",
  "but also" tai "load-bearing" -rakenteita tai niiden suoria vastineita. Vältä
  "on tärkeää huomata", "nykypäivän kiireisessä maailmassa", "on ratkaisevan
  tärkeää ottaa huomioon", "vaikuttaa siltä, että", "voisi väittää" ja kaavaa
  "ei vain X, vaan Y". (testi englanninkielisille)
- **Määrittele termit ensimmäisellä käyttökerralla.** Avaa lyhenteet ja
  määrittele ammattisanasto, kun aihe käyttää niitä ensimmäisen kerran,
  esimerkiksi "palautumisen keskimääräinen aika (MTTR)".
- **Linkitä keskeiset käsitteet Wikipediaan** ensimmäisellä maininnalla,
  kerran aihetta kohti, vain leipätekstissä. Muoto:
  `[termi](https://en.wikipedia.org/wiki/Article_Title)`. Ei koskaan otsikoissa,
  taulukoissa, koodissa eikä lähdeluettelossa. (linkin muoto on testi)
- **Vain oikeita lähteitä.** Tekijä ja nimi aidoista teoksista. Ei keksittyjä
  nimiä, tekijöitä eikä URL-osoitteita.
- **Nimeä pelaamisen tapa.** Mittariperheen aihe kertoo, miten mittaria
  pelataan ja mikä suojakaide sen pysäyttää (aihe 1.2).

## Äänensävy

- Lämmin, suora, kannustava. Puhuttele lukijaa. Lyhyitä virkkeitä, selkeitä
  sanoja. Aloita asialla.
- Jyrkkä ja käytännöllinen. Toimittajaneutraali. Mainitse tuotteita vain
  tosiasiaesimerkkeinä.

## Rakenne (testi)

- Sisältöaiheet käyttävät täsmälleen [aihepohjan](aihepohja.md) osiojärjestystä.
- Ensimmäinen otsikko on `# N.M Otsikko` (pisteellinen aiheen numero), ja se
  vastaa tiedoston nollilla täytettyä `PP-CC`-etuliitettä.
- Numerointi kussakin osassa on yhtenäinen ja alkaa kohdasta N.0.

## Muokkauksen jälkeen

- Jos muutit aiheiden joukkoa, päivitä `spec/structure.md` ja aja
  `just nav`.
- Aja aina `just test`.
