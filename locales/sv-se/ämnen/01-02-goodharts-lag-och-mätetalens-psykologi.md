# 1.2 Goodharts lag och mätetalens psykologi

## Översikt och motivation

[Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law), uppkallad efter ekonomen Charles Goodhart, uttrycks vanligtvis som: när ett mått blir ett mål slutar det vara ett bra mått. Goodharts ursprungliga observation från 1975 handlade om penningpolitik, men antropologen Marilyn Stratherns senare omformulering är den version mjukvaruteam faktiskt behöver, och det är meningen hela den här boken är byggd på. Varje mätetal i varje senare kapitel, driftsättningsfrekvens, testtäckning, nöjdhetspoäng, bär den här risken, och varje rekommendation i den här boken är, i någon form, en strategi för att hantera den.

Mekanismen är inte mystisk. Människor svarar på incitament, och ett mätetal kopplat till en belöning, en bedömning, eller ett rykte är ett incitament oavsett om någon menade det som ett. När ett team väl vet att "driftsättningsfrekvens" observeras är det billigaste sättet att flytta det talet inte alltid det avsedda: dela en meningsfull ändring i fem triviala driftsättningar, och talet går upp medan ingenting verkligt förbättrades. Det här är inte en historia om illvilliga aktörer. Vanliga, välmenande ingenjörer svarar exakt så här på dåligt utformade incitament, eftersom incitamentet, inte avsikten bakom det, är det som formar beteende under press.

För stora organisationer är insatserna högre eftersom avståndet mellan mätetalets utformare och personen vars beteende det formar växer med skalan. En teamledare som bygger ett mätetal för sitt eget åttapersonersteam kan bevaka manipulation direkt och korrigera kursen snabbt. Ett mätetal som rullas ut över en division med sexhundra personer, eller publiceras i en myndighetsrapport som läses av en lagstiftare, färdas genom lager av människor som aldrig träffat dess upphovsperson och har all anledning att behandla mätetalets bokstav som målet. Snedvridningen förstärks med avstånd, vilket är exakt varför det här kapitlet, inte ett senare, är där boken lägger sin tyngdpunkt.

## Nyckelprinciper

- **Anta att varje incitamentskopplat mätetal kommer manipuleras.** Designa mot det från första versionen, inte efter att snedvridningen upptäckts.
- **Manipulationen är rationell, inte illvillig.** Människor svarar förnuftigt på incitamentet du byggde; att skylla på dem för det löser ingenting.
- **Avstånd från mätetalets ägare ökar snedvridningsrisken.** Ju längre ett tal färdas från personen som förstår dess avsikt, desto mer blir det regelns bokstav snarare än dess anda.
- **Kvoter och intervall motstår manipulation bättre än råa antal.** Ett rått antal belönar volym; en välvald kvot belönar det faktiska beteende du vill ha.
- **Ett skydd är inte valfritt på ett incitamentskopplat mätetal.** Varje mätetal du kopplar en belöning till behöver ett parat motmätetal som inte får försämras.

## Rekommendationer

### Klassificera varje mätetal efter incitamentsexponering

Innan du publicerar ett mätetal någonstans synligt, fråga direkt: beror någons belöning, bedömning, rykte, eller budget på att det här talet rör sig i en viss riktning? Om ja, är det ett incitamentskopplat mätetal och behöver ett skydd (nedan) innan det går live. Om nej, är det ett diagnostiskt mätetal (kapitel 1.1) och bär lägre manipulationsrisk, dock aldrig noll, eftersom människor fortfarande kan forma ett tal de bara förväntar sig bli bedömda på senare även utan ett formellt incitament kopplat idag.

### Föredra kvoter, frekvenser och kohorter framför råa antal

Ett rått antal som "stängda ärenden" går att manipulera genom att göra mer av något lågvärdigt. En kvot som "andel ärenden lösta vid första kontakt" belönar det underliggande beteendet istället för volymen. En **kohort**, en grupp definierad av en delad startpunkt som alla driftsättningar en given vecka, förhindrar en dålig trend den senaste tiden från att gömma sig i ett smickrande långsiktigt aggregat. Varhelst du väljer mellan ett antal och en frekvens som fångar samma underliggande beteende, välj frekvensen.

### Para varje incitamentskopplat mätetal med ett skydd

Ett **skyddsmätetal** är ett parat motmätetal som inte får försämras medan det primära mätetalet förbättras. Driftsättningsfrekvens paras med ändringsfelfrekvens; ledtid paras med andel läckta defekter; en supportavdelnings handläggningstid paras med kundnöjdhet. Skyddet är det som gör billig manipulation synligt dyr: ett team som förbättrar det incitamentskopplade talet genom att försämra skyddet avslöjas av parningen, inte av tur. Designa skyddet samtidigt som det primära mätetalet, aldrig som en eftertanke när manipulation redan upptäckts.

### Vaka över de fyra klassiska manipulationsmönstren

Snedvridning enligt Goodharts lag tenderar att falla in i ett litet antal igenkännbara former. **Tröskelmanipulation** optimerar precis upp till ett mål och stannar (ett testtäckningsmål på 95 % producerar triviala tester för att nå exakt 95 %, inte genuin täckning). **Definitionsmanipulation** ändrar vad som räknas snarare än vad som händer (att omdefiniera "löst" för att exkludera svåra fall). **Tidsmanipulation** flyttar när arbete registreras snarare än när det inträffade (att samla driftsättningar strax innan ett rapporteringsfönster stängs). **Substitutionsmanipulation** levererar mätetalets bokstav medan dess avsikt överges (att dela en verklig ändring i många triviala för att blåsa upp driftsättningsfrekvensen). Att namnge de här mönstren för ditt team, explicit, gör dem mycket lättare att upptäcka när de dyker upp i dina egna tal.

### Separera mätning från belöning där du kan

Det starkaste skyddet av alla är strukturellt: koppla loss mätetalet från individuell belöning. Ett mätetal som används rent för att förstå ett system, utan att någons lön, betyg, eller ställning hänger på dess riktning, möter mycket svagare manipulationstryck än ett kopplat till en utvärdering. Det är därför distinktionen mellan diagnostisk och utvärderande användning i kapitel 1.1 betyder så mycket i praktiken: att hålla ett mätetal diagnostiskt är ofta billigare och mer effektivt än hur mycket skyddskonstruktion som helst tillämpad i efterhand.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Råa antal | Enkla att beräkna och förklara | Starkt manipulerbara genom volym |
| Kvoter och frekvenser | Belönar rätt beteende, motstår volymmanipulation | Kan dölja ett krympande nämnarproblem |
| Skyddsparning | Gör billig manipulation synligt dyr | Fördubblar mätetalen att definiera, äga och underhålla |
| Enbart diagnostiskt (ingen individuell belöning) | Lägst manipulationstryck av alla alternativ | Svagare direkt motivationsspak för ledningen att dra i |
| Starkt incitamentskopplade mätetal | Starkt, snabbt beteendemässigt svar | Hög snedvridningsrisk, ofta inom en enda rapporteringscykel |

Den centrala spänningen är **motivationskraft kontra snedvridningsrisk**. De mätetal som flyttar beteende snabbast, genom att koppla ett tal direkt till belöning, är exakt de som är mest exponerade för Goodharts lag. Lös spänningen genom att reservera starka incitament för utfallsmätetal som är genuint svåra att manipulera billigt, och genom att para allt du väljer att incitamentskoppla med ett skydd designat samtidigt, inte fastbultat efter att den första snedvridningen dyker upp.

## Frågor att diskutera med ditt team

1. **För varje mätetal någons belöning beror på, vad är det billigaste sättet att manipulera det, och skulle vi upptäcka den manipulationen idag?** Sätt er ner och designa medvetet exploateringen för varje incitamentskopplat tal på er instrumentpanel: hur skulle ett rationellt, välmenande team få det här att se bra ut utan att göra det underliggande arbetet? Om ni inte kan namnge ett sätt ni skulle upptäcka den manipulationen är ni inte redo att incitamentskoppla mätetalet än. Den här övningen är obekväm och det obehaget är poängen.

2. **Vilka av våra nuvarande mätetal har redan glidit in i ett av de fyra manipulationsmönstren, tröskel-, definitions-, tids-, eller substitutionsmanipulation, utan att någon påpekat det?** Snedvridning tillkännager sällan sig själv; den visar sig som ett tal som ser utmärkt ut medan de underliggande klagomålen, incidenterna, eller kundåterkopplingen berättar en annan historia. Gå igenom er instrumentpanel mot varje mönster vid namn och var ärliga om träffar.

3. **Har varje incitamentskopplat mätetal på vår instrumentpanel ett parat skydd, och designades det skyddet samtidigt som mätetalet?** Ett skydd som läggs till först efter att manipulation upptäckts är en reparation, inte ett designval, och det kommer vanligtvis för sent för att förhindra den första omgången skada på förtroendet. Granska era incitamentskopplade mätetal specifikt för den här parningen.

4. **Hur långt färdas det här mätetalet från personen som förstår dess avsikt innan det når personen vars beteende det formar?** Ett mätetal byggt av ett plattformsteam och konsumerat tre ledningslager bort, eller publicerat i en offentlig rapport läst av människor som aldrig såg instrumenteringen, är mycket mer exponerat för bokstav-inte-anda-manipulation än ett ett team designade för sig självt. Kartlägg det avståndet för era mest betydelsefulla mätetal.

5. **Har vi någonsin tagit bort ett incitament från ett mätetal efter att ha upptäckt att det manipulerades, och vad kostade det oss i förtroende att åtgärda?** Organisationer upptäcker ofta Goodharts lag på det hårda sättet, efter ett kvartal eller ett år av snedvridet beteende, och reparationen kostar mer än förebyggande skulle ha gjort. Ta med en verklig incident, om ni har en, och extrahera lärdomen explicit istället för att tyst gå vidare.

6. **Var har vi antagit att manipulation var ett personligt integritetsproblem snarare än ett rationellt svar på ett dåligt designat incitament?** Att skylla individer för att förutsägbart svara på ett incitament ni byggde löser sällan något och skadar ofta förtroendet ytterligare. Omformulera varje manipulationsincident ni kan minnas som ett designproblem i mätetalet, inte ett karaktärsproblem hos personen, och fråga vilken omdesign som skulle ha förhindrat det.

## Sektorperspektiv

**Startup.** Med ett litet team är det snabbaste skyddet direkt konversation: alla kan se ett tal och omedelbart fråga "vänta, varför hoppade det där." Den verkliga risken är en grundare som kopplar ett mätetal till en finansieringsberättelse (tillväxt till varje pris) utan ett parat skydd, eftersom externa investerare utövar exakt den sortens avlägsna, högriskpress som gör manipulation attraktiv.

**Litet företag.** Standardverktyg levererar ofta förvalda instrumentpaneler byggda kring antal (stängda ärenden, hanterade samtal) eftersom antal är enkla att beräkna. Konvertera aktivt dessa till frekvenser där verktyget tillåter det, och motstå att koppla något enskilt tal till en bonus eller bedömning utan att först identifiera dess skydd.

**Stort företag.** Avstånd är den dominerande risken: ett mätetal designat av ett plattformsteam för intern diagnos plockas upp tre ledningslager senare och förvandlas till en KPI ingen som byggde det skulle känna igen. Styr det här explicit (kapitel 1.4): kräv ett dokumenterat skydd innan något mätetal godkänns för användning i en prestationsbedömning eller ett ledningsresultatkort.

**Myndighet.** Publicerade prestationsmått möter det starkaste manipulationstrycket av någon kategori i den här boken, eftersom ett missat mål kan bära budget- eller politiska konsekvenser. Granska själva definitionen med jämna mellanrum, inte bara talet, eftersom det klassiska manipulationsmönstret i offentlig sektor är att tyst omdefiniera vem som räknas (en väntelista "löst" genom att omklassificera vem som väntar) snarare än att förbättra den underliggande tjänsten.

## Exempel

**Stort företag.** Ett detaljhandelsteknikbolag satte ett mål på 99 % automatiserad testtäckning över alla tjänster, kopplat till ett teambaserat kvalitetsbetyg använt i kvartalsgranskningar. Inom två kvartal nådde täckningen 99 %, och incidentfrekvensen steg. En granskning fann team som skrev triviala tester, som bara bekräftade att en funktion returnerade utan att kasta ett fel, rent för att tillfredsställa täckningsverktyget, medan genuin testning av kantfall inte hade förbättrats alls. Lösningen ersatte det råa täckningsmålet med ett parat mätetal: täckning plus ett mutationstestningsresultat (kapitel 4.2) som mäter om tester faktiskt fångar injicerade fel, vilket är mycket svårare att manipulera billigt.

**Myndighet.** En delstats arbetslöshetsförsäkringsmyndighet mättes på medianantal dagar till första utbetalning, publicerat till dess lagstiftare. Under press att nå ett mål började ett regionalt kontor tyst omklassificera svårare-att-behandla ärenden som "ofullständiga" och exkludera dem från nämnaren, vilket fick den publicerade medianen att se utmärkt ut medan vissa sökande väntade mycket längre än rapporten antydde. En oberoende granskning av själva definitionen, inte bara talet, avslöjade praktiken. Myndighetens lösning frös definitionen, publicerade exkluderingskriterierna offentligt, och lade till ett skyddsmätetal som spårade andelen ofullständiga ärenden i sig, så att en topp i omklassificering nu skulle vara synlig istället för dold.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på att ta Goodharts lag på allvar är undviket omarbete. En organisation som designar skydd i förväg spenderar en blygsam mängd extra ansträngning på att definiera ett andra mätetal vid sidan av det första. En organisation som hoppar över det här steget spenderar ofta ett helt kvartal eller mer av felriktad ansträngning innan snedvridningen syns, följt av den mycket svårare kostnaden att riva upp manipulerat beteende och återuppbygga förtroendet för talet efteråt. Detaljhandelsexemplet ovan är typiskt: billigt att förebygga, dyrt att reparera.

Den totala ägandekostnaden för ett skydd är inte gratis: det är ett andra mätetal att definiera, instrumentera och granska. Men den kostnaden är liten och fast jämfört med den obegränsade kostnaden för ett incitament som tyst belönar fel beteende i månader innan någon märker det. Varje kapitel efter det här prissätter den avvägningen, vilket är varför skyddsparning dyker upp som en rekommendation genom resten av den här boken och inte bara här.

## Antimönster och fallgropar

- **Att publicera ett incitamentskopplat mätetal utan skydd:** den enskilt vanligaste grundorsaken till en snedvriden instrumentpanel i den här boken.
- **Att behandla manipulation som en personlig brist:** skyller individer för ett rationellt svar på ett dåligt designat incitament, och löser ingenting.
- **Att granska talet men aldrig definitionen:** det klassiska misslyckandemönstret i offentlig sektor, där mätetalet ser fint ut eftersom vem som räknas tyst ändrades.
- **Att anta att ett mätetal som fungerade som diagnostiskt förblir säkert när det blir utvärderande:** exponeringen ändras i det ögonblick belöningen kopplas på, även om inget annat om mätetalet ändras.
- **Att designa skyddet först efter den första manipulationsincidenten:** en reparation som kommer efter att skadan på förtroendet redan är gjord.
- **Att ignorera avstånd:** att anta att ett mätetal kommer läsas på det sätt dess utformare avsåg efter att det färdats flera ledningslager eller en offentlig rapport bort från dem.

## Mognadsmodell

- **Nivå 1, Initiera:** Mätetal incitamentskopplas ad hoc, utan hänsyn till manipulationsrisk, och snedvridning upptäcks bara efter att kvalitet eller förtroende synligt lider.
- **Nivå 2, Utveckla:** Vissa team känner igen manipulation i efterhand och justerar informellt, men det finns ingen konsekvent praxis att designa skydd i förväg.
- **Nivå 3, Standardisera:** Varje incitamentskopplat mätetal i hela organisationen kräver ett dokumenterat skydd innan godkännande, och de fyra manipulationsmönstren namnges och undervisas.
- **Nivå 4, Hantera:** Manipulationsrisk övervakas aktivt: definitioner granskas periodiskt, skyddsparen granskas för om de fortfarande fångar snedvridning, och manipulationsincidenter spåras som ett mätetal i sin egen rätt.
- **Nivå 5, Orkestrera:** Organisationen behandlar Goodharts lag som en stående designbegränsning, granskad automatiskt när ett nytt mätetal föreslås, och den kan peka på specifika omdesigner som förhindrade snedvridning innan den hände snarare än bara efteråt.

## Diskussionsidéer

1. Vilket är det mest betydelsefulla mätetalet i vår organisation som inte har något skydd idag?
2. Har vi någonsin sett ett tal förbättras medan den underliggande verkligheten blev sämre?
3. Vem skulle märka om en definition bakom ett av våra offentliga mätetal tyst ändrades?
4. Vilket av de fyra manipulationsmönstren (tröskel, definition, tid, substitution) är vår organisation mest benägen till?
5. Vad skulle det kosta oss, i förtroende, att upptäcka att ett viktigt mätetal hade manipulerats under ett år?

## Viktiga slutsatser

- **Goodharts lag:** ett mått som blir ett mål slutar vara ett bra mått, och detta styr varje mätetal i den här boken.
- Manipulation är ett **rationellt svar på incitament**, inte en karaktärsbrist; fixa incitamentsdesignen, inte människorna.
- Föredra **kvoter, frekvenser och kohorter** framför råa antal varhelst de fångar samma beteende.
- Varje incitamentskopplat mätetal behöver ett **skydd**, designat samtidigt, inte tillagt efter att snedvridning upptäckts.
- Vaka över de fyra manipulationsmönstren vid namn: **tröskel-, definitions-, tids-, och substitutionsmanipulation**.
- **Avstånd** mellan ett mätetals utformare och personen vars beteende det formar ökar snedvridningsrisken; håll det avståndet kort där ni kan.

## Källor och vidare läsning

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience" (1975): ursprunget till Goodharts lag.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University System" (1997): den vida citerade omformuleringen, "när ett mått blir ett mål slutar det vara ett bra mått."
- *Seeing Like a State*, av James C. Scott (hur läsbara mätetal snedvrider systemen de mäter, på nationers skala).
- *The Tyranny of Metrics*, av Jerry Z. Muller (en bokslång behandling av mätetalsfixering och dess kostnader i många yrken).
- *Lean Analytics*, av Alistair Croll och Benjamin Yoskovitz (skenmått kontra handlingsbara mätetal, och skyddsdesign i en startupkontext).
- U.S. Government Accountability Office (GAO):s vägledning om prestationsmätning och GPRA Modernization Act: prestationsrapportering i offentlig sektor och manipulationsrisk.
