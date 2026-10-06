# Bidra

Tack för att du hjälper till att förbättra den här boken. Bidrag av alla storlekar är välkomna, från att rätta ett stavfel till att skriva ett nytt ämne.

## Grundregler

Den här boken följer en strikt husstil. Kärnan:

- Inga långa tankstreck. Använd kommatecken, kolon, parenteser eller två meningar.
- Inga klichéer ("not only ... but also", "load-bearing" och liknande).
- Varm, enkel, rak prosa. Tilltala läsaren direkt. Korta meningar.
- Definiera termer vid första användningen. Länka nyckelbegrepp till Wikipedia vid första omnämnandet.
- Endast verkliga referenser.
- Varje ämne om en mätetalsfamilj anger manipulationsvägen och skyddet.

De fullständiga reglerna finns i `spec/conventions.md` i repositoryts rot, och den korta versionen är [stilreglerna](stilregler.md). Testerna upprätthåller den mekaniska delen.

## Förberedelser

Du behöver Python 3 och [just](https://github.com/casey/just). Det här repositoryt innehåller bokens innehåll och specifikation, plus SvelteKit-webbplatsen
(`software-engineering-metrics.github.io/`) som renderar den till den publicerade webbplatsen.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Göra en ändring

1. Läs den relevanta guiden: [författande](författande.md) för ämnen, [navigering](navigering.md) för genererade filer, [testning](testning.md) för testerna.
2. Gör den minsta ändring som löser uppgiften.
3. Om du lägger till, tar bort, byter namn på eller numrerar om ett ämne, uppdatera `spec/structure.md` i repositoryts rot och kör `just nav`.
4. Kör `just test`. Det måste gå igenom.
5. Lägg till en enradspost i [ändringsloggen](../projekt/ändringslogg.md) under **Unreleased**.

## Vad du kan arbeta med

- Rätta fel, oklara avsnitt eller föråldrade referenser.
- Förbättra exempel, särskilt konkreta exempel från företag och offentlig sektor.
- Verifiera citat mot verkliga källor.
- Fylla luckor i täckningen av ett ämne utan att bryta mallen.

## Vad du bör undvika

- Redigera inte genererade filer (`README.md`, varje lokals `index.md`, `front-matter/table-of-contents.md` och `topics/09-07-index.md`) för hand.
  Ändra ämnena och kör `just nav` i stället.
- Redigera inte `en-001`, `en-gb` eller `en-us` direkt; de härleds ur `en-gb-oxendict` av `tools/localize.py`.
- Lägg inte till ett ämne utan att också uppdatera `spec/structure.md`.
- För inte in långa tankstreck eller förbjudna fraser; testerna kommer att misslyckas.

## Rapportera problem

Öppna ett ärende som beskriver problemet, filen och ämnet och, där det är relevant, den rätta källan eller referensen. Små, specifika rapporter är lättast att agera på.
