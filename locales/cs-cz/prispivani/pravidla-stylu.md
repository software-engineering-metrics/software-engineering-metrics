# Pravidla stylu (sdílená, vynutitelná)

Styl domu na jednom místě. Položky označené „(test)“ vynucuje
`tests/validate.py`; porušení shodí sestavení. Úplná popisná verze je
`spec/conventions.md` v kořeni repozitáře.

## Tvrdá pravidla

- **Žádné dlouhé pomlčky.** Nikdy nepoužívejte dlouhou pomlčku (U+2014). Použijte čárku,
  dvojtečku, závorky nebo dvě věty. Krátká pomlčka „–“ je povolena jen v číselných
  rozsazích, například `1–9` nebo `2.1–2.8`. (test)
- **Žádné ošumělé fráze.** Nepoužívejte „not only ... but also“, „but also“
  ani „load-bearing“. Vyhýbejte se „It's important to note“, „In today's
  fast-paced world“, „It's crucial to consider“, „It appears that“, „One could
  argue“ a formuli „it's not just X, it's Y“. (test, u prvních tří)
- **Při prvním použití definujte pojmy.** Rozepište zkratky a definujte žargon
  při prvním použití v každém tématu, například „střední doba obnovy (MTTR)“.
- **Klíčové pojmy odkazujte na Wikipedii** při prvním zmínění, jednou za téma,
  jen v próze. Tvar: `[term](https://en.wikipedia.org/wiki/Article_Title)`.
  Nikdy v nadpisech, tabulkách, kódu ani v seznamu odkazů. (tvar odkazu je test)
- **Jen skutečné odkazy.** Autor a název skutečných děl. Žádné vymyšlené názvy,
  autoři ani URL.
- **Pojmenujte způsob manipulace.** Téma o rodině metrik uvádí, jak se metrika
  zneužívá a jaká pojistka to zachytí (téma 1.2).

## Hlas

- Vřelý, přímý, povzbuzující. Oslovujte čtenáře přímo. Krátké věty, prostá slova.
  Začněte podstatou.
- S názorem a praktický. Neutrální vůči dodavatelům. Produkty jmenujte jen jako
  věcné příklady.

## Struktura (test)

- Obsahová témata používají přesné pořadí sekcí ze
  [šablony tématu](sablona-tematu.md).
- První nadpis je `# N.M Název` (číslo tématu s tečkou) a odpovídá nulami
  doplněné předponě `PP-CC` souboru.
- Číslování v každé části je souvislé a začíná u N.0.

## Po úpravách

- Pokud jste změnili sadu témat, aktualizujte `spec/structure.md` a spusťte
  `just nav`.
- Vždy spusťte `just test`.
