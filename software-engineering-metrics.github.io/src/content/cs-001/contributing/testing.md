# Testování: validační sada

## Spuštění

```sh
just test
# or
python3 tests/validate.py
```

Spouští se odkudkoli a potřebuje jen Python 3 (žádné balíčky třetích stran,
žádnou síť). Vypíše jeden řádek na kontrolu a skončí nenulovým kódem, pokud
některá kontrola selže, takže funguje v CI i jako pre-commit háček.

## Co kontroluje

- **Očekávaný počet témat** (konstanta na začátku skriptu).
- **Souvislé číslování** v každé části, počínaje N.0.
- **H1 odpovídá desetinnému číslu v názvu souboru** u každého tématu.
- **Názvy H1 odpovídají `spec/structure.md`** znak po znaku, nejen úvodní
  desetinné číslo.
- **Požadované sekce** jsou přítomny v každém obsahovém tématu (části 1 až 8,
  téma N.1 a výše), **přesně v pořadí šablony**.
- **Minimální počet slov** pro každé obsahové téma (1 500 slov), s povolenou
  výjimkou ve skriptu pro záměrné případy.
- **Žádné dlouhé pomlčky** v žádném souboru Markdown.
- **Krátké pomlčky jen mezi číslicemi**, takže „2.1–2.8“ projde a všechno
  ostatní selže.
- **Žádné zakázané fráze** („not only“, „but also“, „load-bearing“).
- **Všechny interní odkazy `.md` vedou na existující soubor.**
- **Křížové odkazy v próze míří na skutečná témata**: odkaz na číslo tématu bez
  odpovídajícího souboru na disku selže, podle stejného vzoru odkazu, který
  používá automatické odkazování témat na publikovaném webu.
- **Odkazy na Wikipedii mají správný tvar** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` odpovídá souborům na disku** v obou směrech.
- **README, domovská stránka a stránka s obsahem odkazují na každé téma.**

## Když kontrola selže

Selhávající řádek jmenuje soubor a problém. Běžné opravy:

- Nalezena dlouhá pomlčka: větu přeformulujte, aby dlouhá pomlčka zmizela. Nestačí ji jen smazat.
- Chybějící sekce: přidejte chybějící sekci `##` ze šablony tématu.
- Nesoulad struktury: přidali jste nebo přejmenovali téma bez aktualizace
  `spec/structure.md`, nebo naopak. Sjednoťte je.
- Rozbitý odkaz: opravte cestu nebo ji po přejmenování aktualizujte.
- Mezera v číslování: přečíslujte, aby část byla souvislá od N.0.

## Nad rámec validační sady

- `just spell` spustí [codespell](https://github.com/codespell-project/codespell)
  nad celým repozitářem. Konfigurace včetně seznamu ignorovaných falešných
  poplachů je sekce `[tool.codespell]` v `pyproject.toml`.
- `just stats` vypíše zprávu v Markdownu (počty slov po tématech, tenká témata,
  odkazy na Wikipedii, položky odkazů) z `tools/stats.py`.

## Průběžná integrace

- `.github/workflows/test.yml` běží při každém pull requestu a při pushích do
  větví jiných než main: validační sada a codespell. Tento repozitář web
  nesestavuje ani nenasazuje; vykreslování probíhá v samostatném repozitáři
  `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` týdně kontroluje externí odkazy pomocí
  [lychee](https://github.com/lycheeverse/lychee) (vzory ignorování v
  `.lycheeignore`) a výsledky drží v jediném issue „Link checker report“.
  Externí odkazy záměrně nejsou v cestě pull requestů.

## Co testy nepokrývají

Sada kontroluje strukturu a styl, ne pravdivost. Nepozná, zda je odkaz skutečný
nebo zda je próza přesná. Citace a fakta ověřte ručně nebo výzkumným průchodem.
Existenci odkazů na Wikipedii (na rozdíl od jejich tvaru) je také třeba ověřit
po síti, což sada záměrně vynechává, aby běžela offline.
