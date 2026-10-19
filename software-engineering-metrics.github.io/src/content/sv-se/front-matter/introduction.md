# Introduktion

Den här boken är en praktisk guide till att mäta [programvaruutveckling](https://en.wikipedia.org/wiki/Software_engineering) väl, för vilket team som helst, från en startup på fem personer
till ett företag med tusentals ingenjörer eller en myndighet som rapporterar mot ett lagstadgat resultatramverk. Den finns eftersom de flesta råd om mätetal antingen är en sammanfattning
av ett ramverk utan operativa detaljer, eller en funktionslista från en verktygsleverantör. Den här boken försöker vara ingetdera: den är bestämd om vad som ska mätas,
uttrycklig om hur varje mätetal manipuleras och praktisk om hur du driver ett mätetalsprogram som teamen litar på i stället för att frukta.

## Vem boken är för

De främsta läsarna är de som väljer vad en organisation mäter: utvecklingschefer, staff- och principal-ingenjörer, plattforms- och DevOps-team samt program-
och produktchefer. Sekundära läsare är alla ingenjörer som vill förstå logiken bakom en instrumentpanel de ombeds få att röra sig, eller som vill utmana
ett mätetal som slutat tjäna sitt syfte. Du behöver inte läsa den från pärm till pärm. Varje ämne står för sig självt, anger först principen och slutar med praktiska slutsatser,
en mognadsmodell och referenser.

## Hur boken är uppbyggd

Boken är indelad i **delar** (heltal) och **ämnen** (decimaltal). Ämne **N.0** introducerar varje del och förklarar hur dess ämnen hänger ihop;
ämnena **N.1, N.2, …** behandlar de enskilda ämnena på djupet.

- **Del 1, Mätningens grunder:** varför mäta över huvud taget, Goodharts lag och manipulationens psykologi, att välja utfall framför output, styrning och ägarskap,
  datakällor och den statistiska läskunnighet som varje mätetalsprogram behöver.
- **Del 2, Flödesmätetal:** Flow Framework, flödesobjekt och de fem flödesmätetalen, cykeltid, köteori, klassiska lean-värdeflödesmätetal,
  mätetal för pull requests och kodgranskning samt DORA-ramverket som referensämne.
- **Del 3, Utvecklarupplevelse och SPACE-ramverket:** SPACE-ramverket och dess fem dimensioner samt hur du kör enkäter om utvecklarupplevelse utan att
  göra dem till en popularitetstävling.
- **Del 4, Kod- och kvalitetsmätetal:** komplexitet, testtäckning och testeffektivitet, churn och hotspots, statisk analys, teknisk skuld och dokumentation.
- **Del 5, Produkt- och affärsmätetal:** sluppna defekter, funktionsanvändning, kund- och affärsresultat, enhetsekonomi och avkastning på investering.
- **Del 6, Mätetal för tillförlitlighet, drift och säkerhet:** SLI:er, SLO:er och felbudgetar, incidentmätetal, jour och kapacitet samt säkerhets- och sårbarhetsmätetal.
- **Del 7, Mätetal i AI-eran:** det paradigmskifte som generativ AI innebär, hur du mäter AI-assisterad utveckling, risken för mätetalsinflation
  och varför utfallstelemetri blir polstjärnan när output är billig.
- **Del 8, Att bygga ett mätetalsprogram:** att utforma instrumentpaneler, bygga eller köpa, lansera mätetal utan att skapa rädsla, mognadsmodeller
  och en stegvis färdplan för införande.
- **Del 9, Bilagor:** ordlista, referens för mätetalsdefinitioner och formler, checklistor, mallar, självbedömning av mognad, referenser och sakregister.

## Vägledande principer

Åtta principer utgör bokens ryggrad:

1. **Ett mått som blir ett mål upphör att vara ett bra mått.** Utforma mot Goodharts lag från början, inte efter att förvrängningen dykt upp.
2. **Utfall framför output framför aktivitet.** Väg varje uppsättning mätetal mot det som förändras för kunden eller verksamheten, inte det teamet har producerat
   eller hur upptaget det varit.
3. **Varje mätetal med ett incitament behöver ett skydd.** Para hastighet med kvalitet och genomströmning med stabilitet, och jaga aldrig en enda siffra isolerat.
4. **Mät system, inte människor.** Mätetal som individualiserar skuld undergräver förtroende och bjuder in till manipulation; mätetal som blottlägger systembegränsningar
   bjuder in till förbättring.
5. **Föredra instrumentering framför självrapportering där du kan, och självrapportering där du inte kan.** Antal driftsättningar kommer från pipelinen; tillfredsställelse kommer av att fråga.
6. **Ett mätetal förtjänar sin plats eller pensioneras.** Varje ruta på en instrumentpanel kostar uppmärksamhet. Beskär medvetet.
7. **Definitioner är viktigare än instrumentpaneler.** Två team som räknar "ledtid" olika lägger mer tid på att bråka om siffran än på att agera på den.
8. **Generativ AI är en anledning att undersöka på nytt, inte bara att nollställa baslinjen.** När output blir billig behöver mätetal som byggts kring outputvolym
   inte bara nya mål utan nya skydd.

## Genomgående teman

[Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) är ett tema som löper genom varje del av den här boken, inte bara ämne 1.2. Varje ämne om en mätetalsfamilj
anger hur det behandlade mätetalet manipuleras och vilket skydd som fångar det. Rapporteringsskyldigheter för myndigheter och företag, där ett mätetal kan ha rättslig eller avtalsmässig
tyngd, behandlas genom hela boken som indata till utformningen, inte som en eftertanke begränsad till ett enda ämne.

## Hur du använder den

Inför det stegvis; släpp inte en instrumentpanel på ett team som aldrig haft en. Börja där smärtan är störst, använd varje ämnes mognadsmodell
för att ärligt placera dig själv och låt färdplanen för införande (ämne 8.5) styra arbetets ordning. Målet är inte en vägg av diagram. Målet är en organisation som kan säga,
med belägg, om det den gör fungerar, och som litar tillräckligt på sina egna siffror för att agera på dem.
