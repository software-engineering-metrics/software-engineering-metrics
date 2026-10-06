# Stilregler (delade, upprätthållna)

Husstilen på ett ställe. Punkter markerade med "(test)" upprätthålls av `tests/validate.py`; ett brott får bygget att misslyckas. Den fullständiga berättande versionen är
`spec/conventions.md` i repositoryts rot.

## Hårda regler

- **Inga långa tankstreck.** Använd aldrig "—" (U+2014). Använd kommatecken, kolon, parenteser eller två meningar. Det korta tankstrecket "–" är endast tillåtet i numeriska intervall
  som `1–9` eller `2.1–2.8`. (test)
- **Inga klichéer.** Använd inte "not only ... but also", "but also" eller "load-bearing". Undvik "It's important to note", "In today's fast-paced world",
  "It's crucial to consider", "It appears that", "One could argue" och formeln "it's not just X, it's Y". (test, för de tre första)
- **Definiera termer vid första användningen.** Skriv ut förkortningar och definiera jargong första gången varje ämne använder dem, till exempel "mean time to recovery (MTTR)".
- **Länka nyckelbegrepp till Wikipedia** vid första omnämnandet, en gång per ämne, endast i prosan. Form: `[term](https://en.wikipedia.org/wiki/Article_Title)`.
  Aldrig i rubriker, tabeller, kod eller referensavsnittet. (länkformen är ett test)
- **Endast verkliga referenser.** Författare och titlar på verkliga verk. Inga påhittade titlar, författare eller URL:er.
- **Namnge manipulationsvägen.** Ämnen om mätetalsfamiljer anger hur mätetalet manipuleras och vilket skydd som fångar det (ämne 1.2).

## Röst

- Varm, rak, uppmuntrande. Tilltala läsaren direkt. Korta meningar, enkla ord. Börja med poängen.
- Bestämd och praktisk. Leverantörsneutral. Nämn produkter endast som sakliga exempel.

## Struktur (test)

- Innehållsämnen använder exakt avsnittsordningen i [`chapter-template.md`](ämnesmall.md).
- Den första rubriken är `# N.M Title` (punktseparerat ämnesnummer) och motsvarar filens `PP-CC`-prefix med inledande nollor.
- Numreringen inom varje del är sammanhängande och börjar vid N.0.

## Efter redigering

- Om du ändrade uppsättningen ämnen, uppdatera `spec/structure.md` och kör `just nav`.
- Kör alltid `just test`.
