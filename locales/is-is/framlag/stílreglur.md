# Stílreglur (sameiginlegar, framfylgjanlegar)

Húsastíllinn á einum stað. Atriði merkt „(próf)“ eru framfylgd af `tests/validate.py`; brot fellir bygginguna. Fulla frásagnarútgáfan er `spec/conventions.md` í rót geymslunnar.

## Harðar reglur

- **Engin tankastrik (em-dash).** Notaðu aldrei stafinn U+2014. Notaðu kommu, tvípunkt, svigatexta eða tvær setningar. Hálfstrik (en-dash, U+2013) eru aðeins leyfð í tölusviðum eins og `1–9` eða `2.1–2.8`. (próf)
- **Ekkert staðlað orðalag.** Notaðu ekki „not only ... but also“, „but also“ eða „load-bearing“. Forðastu „It's important to note“, „In today's fast-paced world“, „It's crucial to consider“, „It appears that“, „One could argue“ og „it's not just X, it's Y“ formúluna. (próf, fyrir fyrstu þrjú)
- **Skilgreindu hugtök við fyrstu notkun.** Útskýrðu skammstafanir og orðaforða fyrsta sinn sem hvert viðfangsefni notar þau, til dæmis „meðaltími til bata (MTTR).“
- **Tengdu lykilhugtök við Wikipedia** við fyrstu nefningu, einu sinni í viðfangsefni, eingöngu í texta. Form: `[term](https://en.wikipedia.org/wiki/Article_Title)`. Aldrei í fyrirsögnum, töflum, kóða eða heimildahlutanum. (tengilsform er próf)
- **Aðeins raunverulegar heimildir.** Höfundur og titill ósvikinna verka. Engir uppdiktaðir titlar, höfundar eða slóðir.
- **Nefndu leikvektorinn.** Viðfangsefni um mælikvarðafjölskyldu lýsir hvernig mælikvarðinn er leikinn og hvaða varnarmælikvarði grípur það (viðfangsefni 1.2).

## Rödd

- Hlý, bein, hvetjandi. Ávarpaðu lesandann með „þú“. Stuttar setningar, einföld orð. Leiddu með atriðinu.
- Afdráttarlaus og hagnýt. Óháð söluaðilum. Nefndu vörur aðeins sem staðreyndadæmi.

## Bygging (próf)

- Efnisviðfangsefni nota nákvæma hlutaröð úr [`chapter-template.md`](viðfangsefnissniðmát.md).
- Fyrsta fyrirsögn er `# N.M Title` (tugabrotsnúmer viðfangsefnis), og hún passar við núllfyllt `PP-CC` forskeyti skráarinnar.
- Númerun innan hvers hluta er samfelld og byrjar á N.0.

## Eftir breytingar

- Ef þú breyttir mengi viðfangsefna, uppfærðu `spec/structure.md` og keyrðu `just nav`.
- Keyrðu alltaf `just test`.
