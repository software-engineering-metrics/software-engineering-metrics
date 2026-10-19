# Författande: att skriva och redigera ämnen

## Innan du skriver

- Läs [stilreglerna](style-rules.md) och `spec/conventions.md` i repositoryts rot.
- Kontrollera `spec/structure.md` i repositoryts rot för att se var ämnet passar in och vilket nummer det ska ha.

## Skriva ett nytt ämne

1. Välj del och nästa lediga decimalnummer i den delen. Numreringen är sammanhängande, så ett nytt ämne får vanligtvis numret efter det sista ämnet i sin del.
2. Skapa `locales/en-gb-oxendict/topics/PP-CC-slug.md` (prefix med inledande nollor och bindestreck, till exempel `02-01-...`) utifrån
   [ämnesmallen](chapter-template.md). Skriv med Oxford-stavning (se `spec/oxford-spelling.md`); redigera aldrig de andra tre lokalerna direkt.
3. Skriv enligt mallen. Ett innehållsämne behöver alla avsnitt: översikt, nyckelprinciper, rekommendationer, avvägningar (med en tabell), diskussionsfrågor,
   branschperspektiv (startup, småföretag, storföretag, offentlig sektor), exempel (ett från företag och ett från offentlig sektor), affärsnytta, antimönster, en mognadsmodell
   med fem nivåer, diskussionsidéer, viktiga slutsatser och referenser.
4. Namnge manipulationsvägen. Varje mätetalsfamilj behöver ett uttryckligt svar på "hur får ett team den här siffran att se bra ut utan att förbättra det den mäter, och vilket
   skydd fångar det" (se ämne 1.2).
5. Definiera termer vid första användningen. Lägg till en Wikipedia-länk för nyckelbegrepp vid första omnämnandet, endast i prosan.
6. Korsreferera relaterade ämnen med deras decimalnummer, till exempel "(ämne 2.1)".
7. Lägg till ämnet i `spec/structure.md`.
8. Om delens introduktion (N.0) räknar upp dess ämnen, lägg till en punkt.
9. Kör `python3 tools/localize.py` för att härleda ämnet till `en-001`, `en-gb` och `en-us`.
10. Kör `just nav`, sedan `just test`.

## Redigera ett befintligt ämne

- Behåll avsnittens ordning och rubriker. Testerna kontrollerar att innehållsämnen fortfarande har varje obligatoriskt avsnitt.
- Behåll inbäddade definitioner, Wikipedia-länkar, tabeller och referenslistor om inte redigeringen handlar om just dem.
- För inte in långa tankstreck eller förbjudna fraser. Om du omformulerar, skriv om i stället för att stoppa in ett tankstreck.
- Kör sedan `python3 tools/localize.py` för att härleda `en-001`, `en-gb` och `en-us` på nytt ur den redigerade källan `en-gb-oxendict`.

## Byta namn eller numrera om

- Byt namn på filen i `locales/en-gb-oxendict/`, uppdatera rubriken `# N.M Title`, uppdatera `spec/structure.md` och uppdatera varje korsreferens som pekar på det gamla numret.
- Kör `python3 tools/localize.py` för att byta namn på filerna i de andra tre lokalerna också (den härleder alla fyra ur samma relativa sökväg).
- Kör `just nav` och `just test`. Testerna flaggar en avvikelse mellan H1 och filnamn, en lucka i numreringen, en lokal som glidit från källan eller en trasig länk.

## Påminnelse om tonen

Skriv som en erfaren kollega som vill att läsaren ska lyckas. Varm, enkel, rak och användbar. Korta meningar. Ingen utfyllnad.
