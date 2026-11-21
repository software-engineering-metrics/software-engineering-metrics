# Psaní a úprava témat

## Než začnete psát

- Přečtěte si [pravidla stylu](pravidla-stylu.md) a `spec/conventions.md`
  v kořeni repozitáře.
- V `spec/structure.md` v kořeni repozitáře zjistěte, kam téma patří a jaké má
  mít číslo.

## Psaní nového tématu

1. Vyberte část a další volné desetinné číslo v ní. Číslování je souvislé, takže
   nové téma obvykle dostane číslo po posledním v části.
2. Vytvořte `locales/en-gb-oxendict/topics/PP-CC-slug.md` (předpona s nulami
   a pomlčkami, například `02-01-...`) ze [šablony tématu](sablona-tematu.md).
   Pište oxfordským pravopisem (viz `spec/oxford-spelling.md`); ostatní tři
   lokality nikdy neupravujte přímo.
3. Pište podle šablony. Každé obsahové téma potřebuje všechny své sekce: přehled,
   klíčové zásady, doporučení, kompromisy (s tabulkou), otázky k diskusi, pohled
   podle sektorů (startup, malá firma, velký podnik, státní správa), příklady
   (jeden z velkého podniku a jeden ze státní správy), obchodní odůvodnění,
   antivzory, pětiúrovňový model zralosti, náměty k diskusi, hlavní poznatky
   a odkazy.
4. Pojmenujte způsob manipulace. Každá rodina metrik potřebuje výslovnou odpověď
   na otázku „jak může tým zlepšit toto číslo, aniž by zlepšil to, co měří,
   a jaká pojistka to zachytí“ (viz téma 1.2).
5. Při prvním použití definujte pojmy. Odkazy na Wikipedii přidejte ke klíčovým
   pojmům při prvním zmínění, jen v próze.
6. Odkazujte na související témata desetinným číslem, například „(téma 2.1)“.
7. Přidejte téma do `spec/structure.md`.
8. Pokud úvod části (N.0) vypisuje její témata, přidejte tam odrážku.
9. Spusťte `python3 tools/localize.py`, aby se téma odvodilo do `en-001`,
   `en-gb` a `en-us`.
10. Spusťte `just nav` a poté `just test`.

## Úprava existujícího tématu

- Zachovejte pořadí sekcí a nadpisy. Testy kontrolují, že obsahová témata mají
  stále všechny požadované sekce.
- Zachovejte vložené definice, odkazy na Wikipedii, tabulky a seznam odkazů,
  pokud se úprava netýká přímo jich.
- Nezavádějte dlouhé pomlčky ani zakázané fráze. Při přeformulování větu
  přepište, ne jen vložte pomlčku.
- Poté spusťte `python3 tools/localize.py`, aby se `en-001`, `en-gb` a `en-us`
  znovu odvodily z upraveného zdroje `en-gb-oxendict`.

## Přejmenování nebo přečíslování

- Přejmenujte soubor v `locales/en-gb-oxendict/`, aktualizujte jeho nadpis
  `# N.M Název`, aktualizujte `spec/structure.md` a aktualizujte každý křížový
  odkaz, který míří na staré číslo.
- Spusťte `python3 tools/localize.py`, aby se soubor přejmenoval i v ostatních
  třech lokalitách (odvozuje všechny čtyři ze stejných relativních cest).
- Spusťte `just nav` a `just test`. Testy označí nesoulad mezi H1 a názvem
  souboru, mezeru v číslování, odchýlenou lokalitu od zdroje nebo rozbitý odkaz.

## Připomínka tónu

Pište jako zkušený kolega, který chce, aby čtenář uspěl. Vřele, prostě, přímo
a užitečně. Krátké věty. Žádná vata.
