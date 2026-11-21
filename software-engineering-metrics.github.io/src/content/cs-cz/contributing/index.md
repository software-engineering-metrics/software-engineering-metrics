# Přispívání

Děkujeme, že pomáháte zlepšovat tuto knihu. Vítáme příspěvky všech velikostí,
od opravy překlepu po napsání nového tématu.

## Základní pravidla

Kniha se řídí přísným stylem. Podstatné:

- Žádné dlouhé pomlčky (em-dash). Použijte čárku, dvojtečku, závorky nebo dvě věty.
- Žádné ošumělé fráze („not only ... but also“, „load-bearing“ a podobné).
- Psaní vřelé, prosté, přímé. Oslovujte čtenáře přímo. Krátké věty.
- Při prvním použití definujte pojmy. Klíčové pojmy při prvním zmínění
  odkazujte na Wikipedii.
- Jen skutečné odkazy.
- Každé téma o rodině metrik pojmenuje svůj způsob manipulace a svou pojistku.

Úplná pravidla jsou v `spec/conventions.md` v kořeni repozitáře a stručná
verze jsou [pravidla stylu](style-rules.md). Mechanické části vynucují testy.

## Příprava

Potřebujete Python 3 a [just](https://github.com/casey/just). Tento repozitář
obsahuje obsah knihy a její specifikaci a také web v SvelteKitu
(`software-engineering-metrics.github.io/`), který ji vykresluje do
publikovaného webu.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Provedení změny

1. Přečtěte si příslušnou příručku: [psaní](authoring.md) pro
   témata, [navigace](navigation.md) pro generované soubory,
   [testování](testing.md) pro testy.
2. Udělejte nejmenší změnu, která úkol splní.
3. Pokud jste téma přidali, odstranili, přejmenovali nebo přečíslovali,
   aktualizujte `spec/structure.md` v kořeni repozitáře a spusťte `just nav`.
4. Spusťte `just test`. Musí projít.
5. Přidejte jednořádkový záznam do [seznamu změn](../project/changelog.md) pod **Unreleased**.

## Na čem pracovat

- Opravujte chyby, nejasné pasáže nebo zastaralé odkazy.
- Zlepšujte příklady, zejména konkrétní příklady z velkých podniků a státní správy.
- Ověřujte citace proti skutečným zdrojům.
- Doplňujte mezery v pokrytí tématu, aniž byste porušili šablonu.

## Čemu se vyhnout

- Neupravujte ručně generované soubory (`README.md`, `index.md` každé lokality,
  `front-matter/table-of-contents.md` a `topics/09-07-index.md`). Změňte
  témata a spusťte místo toho `just nav`.
- Neupravujte přímo `en-001`, `en-gb` ani `en-us`; odvozuje je z `en-gb-oxendict`
  nástroj `tools/localize.py`.
- Nepřidávejte téma, aniž byste aktualizovali `spec/structure.md`.
- Nezavádějte dlouhé pomlčky ani zakázané fráze; testy selžou.

## Hlášení problémů

Otevřete issue s popisem problému, souboru a tématu a, kde je to relevantní,
správného zdroje či odkazu. Malá, konkrétní hlášení se vyřizují nejsnáz.
