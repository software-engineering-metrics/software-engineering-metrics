# Test: valideringssuiten

## Kør den

```sh
just test
# or
python3 tests/validate.py
```

Den kører hvor som helst og kræver kun Python 3 (ingen tredjepartspakker, intet netværk). Den udskriver én linje pr. kontrol og afslutter med en fejlkode, hvis en kontrol fejler, så den virker i CI og som pre-commit-hook.

## Hvad den kontrollerer

- **Det forventede antal emner** (konstanten øverst i scriptet).
- **Sammenhængende nummerering** i hver del, startende ved N.0.
- **H1 svarer til filnavnet** med hensyn til decimaltallet for hvert emne.
- **H1-titler svarer til `spec/structure.md`** tegn for tegn, ikke blot det indledende decimaltal.
- **Krævede afsnit** findes i hvert indholdsemne (del 1 til og med 8, emne N.1 og opefter), **i nøjagtigt skabelonens rækkefølge**.
- **Et minimum af ord** for hvert indholdsemne (1.500 ord), med en tilladelsesliste i scriptet til tilsigtede undtagelser.
- **Ingen tankestreger (em-dashes)** i nogen Markdown-fil.
- **Tankestreger af typen en-dash kun mellem cifre**, så "2.1–2.8" består, og alt andet fejler.
- **Ingen forbudte vendinger** ("not only", "but also", "load-bearing").
- **Alle interne `.md`-links kan løses.**
- **Krydshenvisninger i brødtekst peger på rigtige emner**: en henvisning til et emnenummer uden en tilsvarende fil på disken fejler, med samme henvisningsmønster som det udgivne sites automatiske emnelinking bruger.
- **Wikipedia-links er velformede** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` svarer til filerne på disken**, i begge retninger.
- **README, forsiden og indholdssiden linker til hvert emne.**

## Når en kontrol fejler

Den fejlende linje angiver filen og problemet. Almindelige rettelser:

- Tankestreg fundet: omformulér sætningen, så tankestregen (U+2014) fjernes. Slet den ikke bare.
- Manglende afsnit: tilføj det manglende `##`-afsnit fra emneskabelonen.
- Strukturuoverensstemmelse: du har tilføjet eller omdøbt et emne uden at opdatere `spec/structure.md`, eller omvendt. Bring dem i overensstemmelse igen.
- Brudt link: ret stien, eller opdatér den efter en omdøbning.
- Hul i nummereringen: omnummerér, så delen er sammenhængende fra N.0.

## Ud over valideringssuiten

- `just spell` kører [codespell](https://github.com/codespell-project/codespell) over repositoriet. Konfigurationen, inklusive listen over falske positiver, er afsnittet `[tool.codespell]` i `pyproject.toml`.
- `just stats` udskriver en Markdown-rapport (ordantal pr. emne, tynde emner, Wikipedia-links, kildeposter) fra `tools/stats.py`.

## Kontinuerlig integration

- `.github/workflows/test.yml` kører ved hver pull request og ved push til grene, der ikke er main: valideringssuiten og codespell. Dette repositorium bygger eller udruller ikke et site; gengivelsen sker i det separate repositorium `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` kontrollerer eksterne links hver uge med [lychee](https://github.com/lycheeverse/lychee) (ignoreringsmønstre i `.lycheeignore`) og samler resultaterne i én enkelt sag, "Link checker report". Eksterne links holdes bevidst ude af PR-forløbet.

## Dækkes ikke af testene

Suiten kontrollerer struktur og stil, ikke sandhed. Den kan ikke afgøre, om en kilde er ægte, eller om brødteksten er korrekt. Kontrollér citater og fakta i hånden eller med en researchrunde. At et Wikipedia-link findes (i modsætning til linkformen) kræver også en netværkskontrol, som suiten bevidst udelader, så den kan køre offline.
