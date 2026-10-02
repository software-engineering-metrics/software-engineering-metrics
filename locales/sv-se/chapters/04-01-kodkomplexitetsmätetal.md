# 4.1 Kodkomplexitetsmätetal

## Översikt och motivation

**[Cyklomatisk komplexitet](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, introducerad av Thomas J. McCabe 1976, räknar antalet oberoende vägar genom en kodbits kontrollflöde: varje `if`, loop, och förgrening adderar till antalet. Det förblir det mest använda kodkomplexitetsmätetalet nästan femtio år senare, vid sidan av släktingar som kognitiv komplexitet (som viktar nästlad och svårföljd kontrollflöde tyngre än McCabes ursprungliga linjära räkning) och nästlingsdjup. De här mätetalen delar en genuin, validerad insikt: kod med fler oberoende vägar genom den är svårare att fullt testa, svårare att resonera om, och, i decennier av empirisk forskning, mätbart mer trolig att innehålla defekter.

Det här kapitlet behandlar den insikten med verklig respekt medan det också behandlar dess begränsningar med lika allvar. Komplexitetsmätetal mäter en specifik egenskap hos kod, och en kodbas kan vara enkel enligt varje komplexitetsmätetal medan den fortfarande är dåligt designad, dåligt namngiven, eller konceptuellt osammanhängande på sätt ingen förgreningsräknande algoritm kan upptäcka. Omvänt kräver vissa oreducerbart komplexa problem genuint komplex kod för att lösas korrekt, och ett team pressat att minimera en komplexitetspoäng kan producera kod som poängsätter bra medan den faktiskt är svårare att förstå, spridande väsentlig komplexitet över fler filer och lager av indirektion snarare än att minska den.

För stora team förtjänar komplexitetsmätetal sin plats som ett triageverktyg: ett sätt att hitta, bland tusentals filer, den lilla delmängden mest trolig att belöna en närmare titt, inte som en fristående dom om kodkvalitet. Stora företag och myndigheter som underhåller kodbaser för stora för någon individ att ha läst i sin helhet beror på den här triagefunktionen för att rikta knapp omstrukturerings- och granskningsinsats dit den kommer göra mest nytta.

## Nyckelprinciper

- **Komplexitetsmätetal förutsäger test- och defektsvårighet; de mäter inte kvalitet direkt.** Behandla dem som en insats, inte en dom.
- **En komplexitetspoäng är exponerad för manipulation genom förvirring, inte bara genuin förenkling.** Att dela komplexitet över fler filer kan sänka poängen utan att faktiskt göra koden lättare att förstå.
- **Viss komplexitet är väsentlig, inte oavsiktlig.** Ett genuint svårt problem kan kräva genuint komplex kod; målet är att minimera oavsiktlig komplexitet, inte eliminera all komplexitet urskillningslöst.
- **Använd komplexitetsmätetal för triage, inte som ett individ- eller teamresultatkort.** De pekar på var man ska titta, inte på vem man ska skylla.
- **Trend och avvikare spelar mer roll än något absolut tröskelvärde.** En stigande trend eller en extrem avvikare är mer handlingsbar än ett enda teamomfattande genomsnitt.

## Rekommendationer

### Använd komplexitetsmätetal för att triagera gransknings- och omstruktureringsinsats

Kör komplexitetsanalys över kodbasen och använd resultaten för att prioritera var en närmare mänsklig granskning eller en omstruktureringsinvestering skulle löna sig mest: funktioner eller filer som poängsätter långt över kodbasens egna typiska intervall är de högst-värda platserna att titta på först. Den här triageanvändningen, att hitta var man ska titta, är komplexitetsmätetalens mest försvarbara och värdefulla tillämpning, mycket mer så än att använda dem som en absolut godkänd/underkänd-grind.

### Sätt tröskelvärden relativa till er egen kodbas, inte ett universellt tal

Absoluta komplexitetströskelvärden lånade okritiskt från branschkonvention (en komplexitetspoäng på tio är en vanligt citerad tumregel) kan vara antingen för generösa eller för strikta beroende på er domän: en parser eller en regelmotor kan ha legitimt högre baslinjekomplexitet än en typisk CRUD-tjänst. Kalibrera era egna tröskelvärden mot er kodbas faktiska fördelning, och behandla ett tröskelbrott som en uppmaning att titta närmare, inte ett automatiskt byggfel, om inte ert team medvetet har valt den strängare policyn med full medvetenhet om dess avvägningar.

### Bevaka manipulation genom nedbrytning utan genuin förenkling

Det vanligaste sättet komplexitetspoäng manipuleras är kapitel 1.2:s substitutionsmönster tillämpat på det här specifika mätetalet: att dela upp en genuint komplex funktion i flera mindre funktioner som individuellt poängsätter bra, medan det övergripande systemet förblir lika svårt att förstå, eller ibland blir svårare, eftersom logiken nu är spridd över fler filer med mer indirektion mellan dem. Para komplexitetsmätetal med en kvalitativ granskning av om nedbrytningen genuint klargjorde koden, eller om den bara flyttade komplexiteten någonstans mätetalet inte längre kunde se den.

### Skilj väsentlig komplexitet från oavsiktlig komplexitet innan ni reagerar

Innan ni behandlar en hög komplexitetspoäng som ett problem att fixa, fråga om det underliggande problemet genuint kräver så många oberoende vägar, skatteberäkningslogik har legitimt många förgreningar, till exempel, eller om komplexiteten kommer från undvikbara orsaker: djupt nästlade villkor som kunde plattas till, duplicerad logik som kunde konsolideras, eller oklara ansvarsgränser som kunde ritas om. Bara den andra kategorin är ett genuint kvalitetsproblem det här mätetalet borde driva er att fixa.

### Spåra trend och avvikare, inte bara ett ögonblicksgenomsnitt

En kodbasomfattande genomsnittlig komplexitetspoäng som rör sig lite är sällan handlingsbar på egen hand; en specifik fils komplexitet som stiger kraftigt över flera ändringar, eller ett litet antal extrema avvikare i en annars välfungerande kodbas, är mycket mer användbara signaler. Spåra både trenden över tid och avvikarsvansen, och använd dem för att utlösa en specifik, riktad undersökning snarare än ett brett, ofokuserat komplexitetsreduktionsinitiativ.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Absolut universellt tröskelvärde | Enkelt, konsekvent, lätt att automatisera | Ignorerar legitima domänskillnader; kan manipuleras genom nedbrytning |
| Kodbas-relativt tröskelvärde | Bättre kalibrerat till faktisk kontext | Kräver mer uppsättning och periodisk omkalibrering |
| Komplexitet som en automatiserad byggrind | Upprätthåller konsekvens utan mänsklig granskningsoverhead | Kan blockera legitimt komplex men väldesignad kod, eller belöna förvirrad nedbrytning |
| Komplexitet som en triagesignal för mänsklig granskning | Fångar genuina kvalitetsproblem nedbrytning ensam skulle missa | Kräver mer mänsklig granskningstid än en helt automatiserad grind |

Den centrala spänningen är **automation kontra omdöme**. En helt automatiserad komplexitetsgrind är billig att upprätthålla och konsekvent, men den kan både blockera legitimt komplex, väldesignad kod och belöna ytlig nedbrytning som manipulerar poängen utan att genuint förenkla något. Lös spänningen genom att använda automatiserad komplexitetsanalys för att synliggöra kandidater för granskning, och reservera det faktiska omdömet, är den här komplexiteten väsentlig eller oavsiktlig, klargjorde den här omstruktureringen genuint eller bara flyttade den komplexiteten, för en mänsklig granskare snarare än en hård automatiserad grind ensam.

## Frågor att diskutera med ditt team

1. **Är våra komplexitetströskelvärden kalibrerade till vår egen kodbas faktiska fördelning, eller lånade okritiskt från en generisk branschkonvention?** Dra er kodbas verkliga komplexitetsfördelning och kontrollera om era nuvarande tröskelvärden är rimliga mot den, snarare än att anta att ett vanligt citerat tal gäller universellt för er domän.

2. **Har vi någonsin sett en funktion delas upp i flera mindre utan att den resulterande koden faktiskt blev lättare att förstå?** Det här är det tydligaste tecknet på nedbrytningsmanipulationsmönstret det här kapitlet varnar om. Titta på en nylig omstrukturering motiverad primärt av en komplexitetspoäng och bedöm ärligt om den förbättrade genuin förståelighet.

3. **Var i vår kodbas är komplexitet väsentlig för problemet, och var är den oavsiktlig och fixbar?** Gå igenom era högst-komplexitet-avvikare och sortera dem i de här två kategorierna explicit, eftersom bara den andra kategorin representerar ett genuint, handlingsbart kvalitetsproblem.

4. **Använder vi komplexitetsmätetal för att triagera granskningsinsats, eller som en hård automatiserad grind utan mänskligt omdöme inblandat?** Diskutera om ert nuvarande upprätthållningstillvägagångssätt lämnar utrymme för väsentlig-kontra-oavsiktlig-distinktionen det här kapitlet rekommenderar, eller om det behandlar varje brott identiskt oavsett kontext.

5. **Har en komplexitetspoäng någonsin använts, även informellt, för att döma en enskild ingenjörs arbetskvalitet?** Det här riskerar samma individuell-utvärdering-fälla kapitel 3.4 varnar mot för aktivitetsmätetal, tillämpad här på kodmätetal istället, och det inbjuder samma manipulationsrespons.

6. **Hur ser vår komplexitetstrend ut under det senaste året för våra mest kritiska, mest frekvent ändrade filer?** Kombinera det här med churn- och hotspot-analysen från kapitel 4.3, eftersom en fil som är både högt komplex och frekvent ändrad förtjänar uppmärksamhet långt före en som är komplex men sällan rörd.

## Sektorperspektiv

**Startup.** Komplexitetsmätetal är vanligtvis mindre brådskande på den här skalan; kodbasstorlek är tillräckligt liten att informell förtrogenhet ofta ersätter formell mätning. Vanan värd att anta tidigt är helt enkelt att köra en komplexitetsskanning tillfälligt för att fånga en specifik fil som tyst blir ohanterlig innan teamet har vuxit för stort för att märka det informellt.

**Litet företag.** De flesta moderna statiska analysverktyg rapporterar komplexitetsmätetal som en del av en bredare, gratis eller lågkostnads-lintuppsättning; använd outputen som en periodisk triagesignal snarare än att investera i dedikerade verktyg. Fokusera uppmärksamhet på era mest frekvent modifierade filer först.

**Stort företag.** Komplexitetsmätetal i skala är mest värdefulla kombinerade med churn-data (kapitel 4.3) för att prioritera omstruktureringsinvestering över en kodbas för stor för någon individ att undersöka manuellt. Kalibrera tröskelvärden per tjänst eller domän snarare än att tillämpa ett organisationsövergripande tal, eftersom legitim komplexitet varierar betydligt över olika typer av system.

**Myndighet.** Långlivade myndighetssystem ackumulerar ofta komplexitet gradvis över år eller decennier av inkrementella kravändringar, och en komplexitetsrevision kan vara ett övertygande, konkret verktyg för att motivera moderniserings- eller omstruktureringsinvestering för intressenter som annars kan se systemet som helt enkelt "fungerande" och därför inte värt att investera i.

## Exempel

**Stort företag.** Ett betalningsbehandlingsbolag körde en kodbasomfattande komplexitetsrevision för första gången och fann en enda transaktionsvalideringsfunktion med en cyklomatisk komplexitetspoäng mer än tio gånger kodbasens median. Undersökning fann att komplexiteten var nästan helt oavsiktlig: år av inkrementellt tillagd specialfallshantering för specifika betalningsleverantörer hade ackumulerats till djupt nästlade villkor som kunde omstruktureras till ett renare strategimönster som separerade leverantörsspecifik logik. Omstruktureringen, prioriterad direkt eftersom komplexitetsrevisionen identifierade den som det enskilt högst-värda målet i kodbasen, minskade funktionens komplexitetspoäng med mer än 80 % och, viktigare, minskade defektfrekvensen i den specifika kodvägen mätbart under de följande två kvartalen.

**Myndighet.** En skattemyndighets decennier-gamla förmånsberäkningsmotor poängsatte extremt högt på komplexitetsmätetal över nästan varje funktion, vilket föranledde ett initialt antagande att hela systemet behövde en grund-upp-omskrivning. En närmare, funktion-för-funktion-granskning som skilde väsentlig från oavsiktlig komplexitet fann att det mesta av komplexiteten genuint reflekterade de underliggande juridiska reglerna, som verkligen hade så många legitima förgreningar och specialfall mandaterade av lag, medan en mindre delmängd kom från undvikbar duplicering över liknande beräkningsvägar. Teamet riktade bara den oavsiktlig-komplexitet-delmängden för omstrukturering, undvikande en kostsam, riskabel full omskrivning medan de fortfarande meningsfullt förbättrade systemets genuint mest problematiska områden.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på att använda komplexitetsmätetal väl är riktad, högvärdig omstruktureringsinvestering: betalningsbolagsexemplet ovan visar en enda, väl riktad fix, identifierad genom komplexitetsanalys, som mätbart minskade defekter i exakt den högst-risk-kodvägen, till en bråkdel av kostnaden ett brett, oriktat omstruktureringsinitiativ skulle ha krävt.

Den totala ägandekostnaden är låg: de flesta moderna utvecklingsverktygskedjor beräknar komplexitetsmätetal automatiskt som en del av statisk analys (kapitel 4.4), och den verkliga investeringen är den mänskliga omdömestiden att tolka resultat korrekt, skiljande väsentlig från oavsiktlig komplexitet och fångande nedbrytningsmanipulation, snarare än någon betydande ny verktygskostnad.

## Antimönster och fallgropar

- **Att behandla en komplexitetspoäng som en direkt kvalitetsdom:** den mäter en specifik egenskap, inte övergripande kodkvalitet.
- **Att dela upp en funktion för att manipulera poängen utan genuin förenkling:** nedbrytningsmanipulationsmönstret det här kapitlet specifikt namnger.
- **Att tillämpa ett universellt tröskelvärde utan att kalibrera till er egen kodbas:** producerar antingen för generöst eller för strikt upprätthållande beroende på domän.
- **Att använda komplexitetsmätetal för att individuellt utvärdera ingenjörer:** inbjuder manipulation och misstillämpar ett mätetal menat för triage, inte dom.
- **Att behandla all komplexitet som lika fixbar:** väsentlig komplexitet från ett genuint svårt problem är inte en defekt att eliminera.
- **Att ignorera trend och avvikare till förmån för ett platt, kodbasomfattande genomsnitt:** missar den mest handlingsbara signalen den här mätetalsfamiljen ger.

## Mognadsmodell

- **Nivå 1, Initiera:** Komplexitet mäts inte, eller mäts med ett oundersökt, generiskt universellt tröskelvärde tillämpat okritiskt.
- **Nivå 2, Utveckla:** Komplexitetsmätetal samlas in men agerar man sällan på, och ingen distinktion görs mellan väsentlig och oavsiktlig komplexitet.
- **Nivå 3, Standardisera:** Tröskelvärden kalibreras till kodbasens egen fördelning, och komplexitetsmätetal driver konsekvent gransknings- och omstruktureringstriage organisationsövergripande.
- **Nivå 4, Hantera:** Komplexitetstrend och avvikare övervakas aktivt och kombineras med churn-data (kapitel 4.3) för att prioritera omstruktureringsinvestering; nedbrytningsmanipulation bevakas aktivt.
- **Nivå 5, Orkestrera:** Organisationen kan peka på specifika, mätbara defektfrekvensförbättringar spårade direkt till komplexitetsinformerad omstruktureringsinvestering, och komplexitetsdata är en rutinmässig, betrodd insats till ingenjörsinvesteringsbeslut.

## Diskussionsidéer

1. Vad är vår enskilt mest komplexa funktion eller fil, och är dess komplexitet väsentlig eller oavsiktlig?
2. Har vi någonsin manipulerat en komplexitetspoäng genom nedbrytning utan verklig förenkling?
3. Är våra tröskelvärden kalibrerade till vår egen kodbas, eller lånade okritiskt?
4. Var överlappar hög komplexitet med hög churn i vår kodbas just nu?
5. Har komplexitetsdata någonsin informerat ett omstruktureringsinvesteringsbeslut, eller sitter den oanvänd?

## Viktiga slutsatser

- Komplexitetsmätetal som **cyklomatisk komplexitet** förutsäger test- och defektsvårighet; de mäter inte övergripande kodkvalitet direkt.
- Skilj **väsentlig komplexitet** (från ett genuint svårt problem) från **oavsiktlig komplexitet** (undvikbar genom bättre design) innan ni reagerar på en hög poäng.
- Bevaka **nedbrytningsmanipulation**: att dela upp kod för att sänka en poäng utan att genuint förenkla något.
- Använd komplexitetsmätetal för **triage**, riktande mänsklig granskning och omstruktureringsinsats, inte som ett individuellt resultatkort eller en rigid automatiserad grind.
- Kalibrera tröskelvärden till **er egen kodbas fördelning**, och spåra **trend och avvikare**, inte bara ett platt genomsnitt.

## Källor och vidare läsning

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976): originaluppsatsen om cyklomatisk komplexitet.
- *Code Complete*, av Steve McConnell (praktisk vägledning om att hantera komplexitet i mjukvarukonstruktion).
- *Working Effectively with Legacy Code*, av Michael Feathers (tekniker för att säkert minska komplexitet i befintlig, svårändrad kod).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018): det kognitiva komplexitetsmätetalet och dess distinktion från cyklomatisk komplexitet.
