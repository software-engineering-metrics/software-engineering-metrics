# Testning: valideringssviten

## Köra den

```sh
just test
# or
python3 tests/validate.py
```

Den körs varifrån som helst och behöver bara Python 3 (inga tredjepartspaket, inget nätverk). Den skriver ut en rad per kontroll och avslutar med
en nollskild kod om någon kontroll misslyckas, så den passar i CI och som pre-commit-hook.

## Vad den kontrollerar

- **Förväntat antal ämnen** (en konstant överst i skriptet).
- **Sammanhängande numrering** inom varje del, med start vid N.0.
- **H1 stämmer med decimalen i filnamnet** för varje ämne.
- **H1-rubriken stämmer med `spec/structure.md`** tecken för tecken, inte bara den inledande decimalen.
- **Obligatoriska avsnitt** finns i varje innehållsämne (del 1 till 8, ämnen N.1 och uppåt), **i exakt mallens ordning**.
- **Minsta antal ord** för varje innehållsämne (1 500 ord), med en tillåtelselista i skriptet för avsiktliga undantag.
- **Inga långa tankstreck** i någon Markdown-fil.
- **Korta tankstreck endast mellan siffror**, så "2.1–2.8" går igenom och andra misslyckas.
- **Inga förbjudna fraser** ("not only", "but also", "load-bearing").
- **Alla interna `.md`-länkar går att lösa.**
- **Korsreferenser i prosan pekar på verkliga ämnen**: en hänvisning till ett ämnesnummer utan motsvarande fil på disk misslyckas, med samma hänvisningsmönster
  som den publicerade webbplatsens automatiska ämneslänkning.
- **Wikipedia-länkar har rätt form** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` stämmer med filerna på disk**, i båda riktningarna.
- **README, startsidan och innehållssidorna länkar till varje ämne.**

## När en kontroll misslyckas

Den misslyckade raden anger filen och problemet. Vanliga åtgärder:

- Långt tankstreck hittat: skriv om meningen så att "—" försvinner. Ta inte bara bort det.
- Avsnitt saknas: lägg till det saknade `##`-avsnittet från ämnesmallen.
- Strukturavvikelse: du lade till eller bytte namn på ett ämne utan att uppdatera `spec/structure.md`, eller tvärtom. Räta upp dem.
- Trasig länk: rätta sökvägen eller uppdatera den efter ett namnbyte.
- Lucka i numreringen: numrera om så att delen blir sammanhängande från N.0.

## Utöver valideringssviten

- `just spell` kör [codespell](https://github.com/codespell-project/codespell) över repositoryt. Konfigurationen, inklusive en ignoreringslista för falska positiva,
  är avsnittet `[tool.codespell]` i `pyproject.toml`.
- `just stats` skriver ut en Markdown-rapport (ordantal per ämne, tunna ämnen, Wikipedia-länkar, referensposter) från `tools/stats.py`.

## Kontinuerlig integration

- `.github/workflows/test.yml` körs på varje pull request och på push till grenar som inte är main: valideringssviten och codespell. Det här repositoryt bygger eller
  driftsätter inte webbplatsen; renderingen sker i det separata repositoryt `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` kontrollerar externa länkar varje vecka med [lychee](https://github.com/lycheeverse/lychee) (ignoreringsmönster i `.lycheeignore`) och håller resultatet
  i ett enda ärende, "Link checker report". Externa länkar hålls medvetet utanför PR-vägen.

## Inte täckt av testerna

Sviten kontrollerar struktur och stil, inte sanning. Den kan inte veta om en referens är verklig eller om prosan är korrekt. Verifiera citat och fakta för hand eller med en forskningsrunda.
Att en Wikipedia-länk finns (skilt från dess form) kräver också en nätverkskontroll, som sviten medvetet utelämnar så att den kan köras offline.
