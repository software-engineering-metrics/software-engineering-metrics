# Testaus: tarkistussarja

## Aja se

```sh
just test
# tai
python3 tests/validate.py
```

Se toimii mistä tahansa ja tarvitsee vain Python 3:n (ei kolmannen osapuolen
paketteja, ei verkkoa). Se tulostaa yhden rivin tarkistusta kohti ja päättyy
nollasta poikkeavaan koodiin, jos jokin tarkistus epäonnistuu, joten se toimii
CI:ssä ja pre-commit-koukkuna.

## Mitä se tarkistaa

- **Odotettu aiheiden määrä** (skriptin alussa oleva vakio).
- **Yhtenäinen numerointi** kussakin osassa alkaen kohdasta N.0.
- **H1 vastaa tiedostonimen** desimaalilukua jokaisessa aiheessa.
- **H1-otsikot vastaavat `spec/structure.md`:tä** merkki merkiltä, ei vain
  alkavaa desimaalilukua.
- **Vaaditut osiot** löytyvät jokaisesta sisältöaiheesta (osat 1–8, aihe N.1
  ja siitä ylöspäin) **täsmälleen pohjan järjestyksessä**.
- **Vähimmäissanamäärä** jokaiselle sisältöaiheelle (1 500 sanaa), ja
  skriptissä on sallittujen poikkeusten lista tarkoituksellisille
  poikkeuksille.
- **Ei em-viivoja** missään Markdown-tiedostossa.
- **En-viivat vain numeroiden välissä**, joten "2.1–2.8" menee läpi ja kaikki
  muu ei.
- **Ei kiellettyjä fraaseja** ("not only", "but also", "load-bearing").
- **Kaikki sisäiset `.md`-linkit ratkeavat.**
- **Leipätekstin ristiviittaukset osoittavat oikeisiin aiheisiin**: viittaus
  aiheen numeroon, jolle ei löydy tiedostoa levyltä, epäonnistuu käyttäen samaa
  viittauskaavaa, jota julkaistun sivuston aiheiden automaattinen linkitys käyttää.
- **Wikipedia-linkit ovat oikeassa muodossa** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` vastaa levyn tiedostoja** molempiin suuntiin.
- **README, etusivu ja sisällyssivu linkittävät jokaisen aiheen.**

## Kun tarkistus epäonnistuu

Epäonnistunut rivi nimeää tiedoston ja ongelman. Yleisiä korjauksia:

- Em-viiva löytyi: kirjoita lause uusiksi niin, että em-viiva poistuu. Älä vain
  poista sitä.
- Osio puuttuu: lisää puuttuva `##`-osio aihepohjasta.
- Rakenne ei täsmää: lisäsit tai nimesit uudelleen aiheen päivittämättä
  `spec/structure.md`:tä tai päinvastoin. Palauta ne linjaan.
- Rikkinäinen linkki: korjaa polku tai päivitä se uudelleennimeämisen jälkeen.
- Numerointiaukko: numeroi uudelleen niin, että osa on yhtenäinen alkaen N.0:sta.

## Tarkistussarjan ulkopuolella

- `just spell` ajaa [codespellin](https://github.com/codespell-project/codespell)
  koko repositoriolle. Asetukset ja virhehälytysten ohituslista ovat
  `pyproject.toml`-tiedoston `[tool.codespell]`-osiossa.
- `just stats` tulostaa Markdown-raportin (aihekohtaiset sanamäärät, ohuet
  aiheet, Wikipedia-linkit, lähdemerkinnät) työkalulla `tools/stats.py`.

## Jatkuva integraatio

- `.github/workflows/test.yml` ajetaan jokaisessa pull requestissa ja
  pushauksessa muille haaroille kuin main: tarkistussarja ja codespell. Tämä
  repositorio ei rakenna tai julkaise sivustoa; renderöinti tapahtuu erillisessä
  `software-engineering-metrics.github.io`-repositoriossa.
- `.github/workflows/links.yml` tarkistaa ulkoiset linkit viikoittain
  [lychee](https://github.com/lycheeverse/lychee)-työkalulla (ohitusmallit
  tiedostossa `.lycheeignore`) ja pitää tulokset yhdessä "Link checker
  report" -tiketissä. Ulkoiset linkit pidetään tarkoituksella pull request
  -polun ulkopuolella.

## Mitä testit eivät kata

Sarja tarkistaa rakenteen ja tyylin, ei totuutta. Se ei voi tietää, onko lähde
oikea tai onko teksti täsmällistä. Tarkista lähteet ja faktat käsin tai
tutkimuskierroksella. Wikipedia-linkin olemassaolo (toisin kuin linkin muoto)
vaatii myös verkkotarkistuksen, jonka sarja jättää tarkoituksella pois, jotta se
toimii offline-tilassa.
