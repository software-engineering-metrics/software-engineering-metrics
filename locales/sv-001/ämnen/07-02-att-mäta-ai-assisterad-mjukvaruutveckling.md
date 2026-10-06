# 7.2 Att mäta AI-assisterad mjukvaruutveckling

## Översikt och motivation

Ämne 7.1 etablerade varför flera befintliga mätetal inte längre pålitligt mäter vad de brukade under AI-assisterad utveckling. Det här ämnet handlar om vad man ska mäta istället: hur man vet, med verkligt bevis snarare än intryck eller leverantörsmarknadsföring, om AI-kodassistans faktiskt hjälper er organisation, och med hur mycket. Det här är en genuint viktig fråga med verkliga budgetkonsekvenser, AI-verktygslicenser representerar en verklig, löpande kostnad, ämne 5.4:s enhetsekonomidisciplin tillämpas direkt, och en organisation som inte kan besvara den med bevis överbetalar antingen för ett verktyg som inte hjälper eller underinvesterar i ett som genuint gör det.

Det här ämnets tillvägagångssätt bygger direkt på ämne 1.3:s utfall-före-output-princip, nu tillämpad specifikt på AI-verktygsutvärdering. Det naiva, vanligaste tillvägagångssättet mäter AI-assisterad utveckling efter outputvolym, rader kod genererade, förslag accepterade, tid sparad per uppgift som självrapporterad av utvecklare, exakt de mätetal ämne 7.1 varnade är mest exponerade för det här skiftet. Det mer rigorösa tillvägagångssättet det här ämnet rekommenderar mäter utfall: minskade AI-assistans genuint cykeltid utan att försämra kvalitet, minskade den tid spenderad på genuint lågvärt, repetitivt arbete, frigörande kapacitet för mer högvärt arbete, och påverkade den mätbart affärs- och produktutfallen från del 5.

För stora team avgör att få den här mätningen rätt om AI-verktygsinvesteringsbeslut fattas på bevis eller på leverantörspåståenden och organisatorisk tröghet. Stora företag som förhandlar storskaliga AI-verktygskontrakt behöver genuint bevis på värde för att motivera utgiften och för att jämföra konkurrerande verktyg rättvist; myndigheter, ofta under särskild granskning för teknikutgifter, behöver en rigorös, försvarbar utvärderingsmetodologi innan de åtar sig offentliga medel till AI-verktygsantagande i skala.

## Nyckelprinciper

- **Mät AI-assistans efter utfall, inte efter outputvolym eller leverantörsrapporterad användningsstatistik.** Ämne 1.3:s disciplin tillämpas med full kraft här.
- **Använd en genuin [jämförelsegrupp](https://en.wikipedia.org/wiki/Treatment_and_control_groups) där möjligt**, inte bara en före-och-efter-jämförelse som en stigande branschomfattande baslinje kunde förvirra.
- **Självrapporterade tidsbesparingar är en svag signal på egen hand.** Para dem med objektiv cykeltids- och kvalitetsdata.
- **Mät den fulla kostnaden, inklusive gransknings- och korrigeringstid**, inte bara genereringshastigheten.
- **Olika uppgifter och olika ingenjörer kan se mycket olika AI-assistansvärde.** Undvik ett enda, blandat organisationsövergripande tal som döljer den här variationen.

## Rekommendationer

### Bygg en genuin jämförelse, inte bara ett före-och-efter-ögonblicksfoto

Där möjligt, jämför utfall mellan en grupp som använder AI-assistans och en jämförbar grupp som inte använder den, över samma period, snarare än att bara jämföra er egen organisations före-och-efter-tal, vilket inte kan skilja AI-assistans effekt från någon annan samtidig ändring (ämne 1.6:s störvariabelförsiktighet tillämpas direkt). Där en verklig jämförelsegrupp är opraktisk, jämför åtminstone mot en längre historisk baslinje (ett styrdiagram, enligt ämne 1.6) snarare än ett enda före-och-efter-ögonblicksfoto sårbart för regression mot medelvärdet eller orelaterade samtidiga ändringar.

### Mät cykeltid och kvalitet tillsammans, aldrig AI-assistans hastighetspåstående ensamt

Tillämpa ämne 2.6:s och ämne 2.10:s disciplin direkt: spåra om AI-assisterat arbete rör sig snabbare genom cykeltidsstadierna, och samtidigt om ändringsfelfrekvens eller läckt-defektfrekvens (ämne 5.1) för det arbetet rör sig i fel riktning. En genuin produktivitetsvinst visar snabbare cykeltid med stabil eller förbättrad kvalitet; en falsk vinst visar snabbare cykeltid med försämrad kvalitet, exakt bytet ämne 7.1 varnade mot, upptäckt här genom samma parade-mätetal-disciplin den här boken tillämpar genomgående.

### Inkludera gransknings- och korrigeringstid i den fulla kostnadsredovisningen

AI-genererad kod som är snabbare att producera men långsammare att granska, eller som kräver mer korrigering och omarbete efter initial generering, kan visa ingen nettocykeltidsförbättring när hela pipelinen mäts, även om det initiala kodgenereringssteget kändes dramatiskt snabbare för den enskilda ingenjören. Mät hela cykeltidskedjan (ämne 2.6), inte bara kodningssteget, för att fånga det här ärligt snarare än att kreditera AI-assistans baserat på en känd, men inkomplett, känsla av hastighet.

### Behandla självrapporterade tidsbesparingar som en startande hypotes, inte en slutsats

Utvecklarens självrapportering av "det här sparade mig en timme" är användbar som en initial signal och som kvalitativ kontext (ämne 5.3:s kombinerade kvantitativ-kvalitativa tillvägagångssätt tillämpas också här), men den är föremål för samma minnes- och önskvärdhetsförspänningar ämne 1.5 varnar om för all självrapporterad data, och den säger ingenting om nedströms gransknings- eller korrigeringskostnad. Använd självrapportering för att generera hypoteser om var AI-assistans hjälper mest, sedan validera de hypoteserna mot objektiv cykeltids- och kvalitetsdata innan ni drar en fast slutsats.

### Segmentera mätning efter uppgiftstyp och undvik ett enda blandat tal

AI-kodassistans ger troligen mycket olika värde för standardiserade, väl förstådda uppgifter än för genuint nya, komplexa problemlösning. Mät och rapportera efter uppgiftskategori snarare än ett enda, blandat organisationsövergripande genomsnitt, vilket kan dölja faktumet att assistans ger starkt värde i en kategori medan den ger lite eller till och med negativt värde i en annan, information ett blandat tal helt skulle dölja.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Bara självrapporterade tidsbesparingar | Snabb, lätt att samla in | Svag signal; föremål för förspänning; ignorerar nedströms granskningskostnad |
| Bara före-och-efter-jämförelse | Enkel att sätta upp | Förvirrad av annan samtidig ändring eller branschomfattande trend |
| Genuin jämförelsegrupp | Starkaste, mest försvarbara bevis | Svårare att ordna; kan inte vara möjlig för en fullständig-antagande-utrullning |
| Uppgiftssegmenterad utfallsmätning | Avslöjar var värde genuint koncentreras | Kräver mer granulär spårning och kategoriseringsinsats |

Den centrala spänningen är **mätningsrigör kontra praktisk genomförbarhet**. En genuin, kontrollerad jämförelsegrupp är det starkaste beviset men är ofta opraktiskt när ett verktyg har rullats ut organisationsövergripande utan en innehållen kontrollgrupp; självrapporterade intryck är snabba och lätta men svaga på egen hand. Lös spänningen genom att använda den starkaste jämförelsedesignen er faktiska utrullning tillåter, en genuin kontrollgrupp under en tidig pilotfas om möjligt, en historisk baslinje-styrdiagram om inte, och behandla självrapportering som ett hypotesgenererande verktyg snarare än det slutliga ordet, oavsett vilken jämförelsedesign ni slutar använda.

## Frågor att diskutera med ditt team

1. **Hade vi, eller kunde vi fortfarande konstruera, en genuin jämförelsegrupp för att utvärdera vårt AI-verktygsantagande, eller förlitar vi oss helt på en före-och-efter-jämförelse?** Om en verklig jämförelsegrupp aldrig etablerades, diskutera om ett historiskt baslinje-styrdiagram fortfarande kunde ge ett rimligt rigoröst alternativ.

2. **Har vi mätt cykeltid och kvalitet tillsammans för AI-assisterat arbete, eller har vi bara ett hastighetspåstående utan en motsvarande kvalitetskontroll?** Dra vilken data som existerar och kontrollera för den här specifika paringen; om den inte existerar är det gapet det här ämnets enskilt högst-prioriterade fix.

3. **Inkluderar vår cykeltidsmätning för AI-assisterat arbete gransknings- och korrigeringstid, eller bara det initiala genereringssteget?** Ett hastighetspåstående baserat bara på genereringstid, ignorerande nedströms granskningskostnad, riskerar den inkompletta-redovisning-fällan det här ämnet varnar direkt mot.

4. **Vilka självrapporterade tidsbesparingspåståenden har vi samlat in, och har vi validerat något av dem mot objektiv data?** Välj ett specifikt, vanligt upprepat påstående och kontrollera om den objektiva datan faktiskt stödjer det.

5. **Blandar vår nuvarande mätning alla uppgiftstyper till ett tal, eller vet vi vilka specifika kategorier av arbete som ser det starkaste AI-assistansvärdet?** Om blandat, diskutera vad en uppgiftssegmenterad nedbrytning kunde avslöja som det nuvarande talet döljer.

6. **Om vi behövde försvara vår AI-verktygsinvestering för en skeptisk finansintressent idag, med bevis snarare än intryck, vad skulle vi faktiskt kunna visa dem?** Det här konkreta testet synliggör gapet mellan vad er organisation för närvarande tror om AI-assistansvärde och vad den faktiskt kan demonstrera med bevis.

## Sektorperspektiv

**Startup.** En formell jämförelsegruppstudie är vanligtvis opraktisk i liten skala, men även en enkel, ärlig före-och-efter-titt på cykeltid och defektfrekvens, snarare än att förlita sig rent på hur mycket snabbare arbetet känns, ger en meningsfullt mer pålitlig signal än intryck ensamt.

**Litet företag.** Fokusera mätinsats på er högst-värda, mest repetitiva uppgiftskategori först, där AI-assistansvärde är mest troligt att vara tydligt och mätbart, snarare än att försöka en heltäckande utvärdering över varje typ av arbete ert lilla team gör.

**Stort företag.** En genuin, kontrollerad jämförelse under en tidig pilotfas, innan full organisationsövergripande utrullning, är ofta uppnåelig här och är värd den medvetna insatsen att ordna, eftersom den producerar mycket mer försvarbart bevis för det storskaliga verktygsinvesteringsbeslut som typiskt följer en framgångsrik pilot.

**Myndighet.** Offentliga teknikutgiftsbeslut, inklusive AI-verktygsupphandling, möter ofta särskild granskning och kan kräva formell kostnads-nytta-motivering (ämne 5.5). Bygg mätningsdisciplinen det här ämnet rekommenderar in i varje pilotfas från start, eftersom en rigorös, dokumenterad utvärderingsmetodologi stärker det eventuella finansierings- eller upphandlingsfallet betydligt.

## Exempel

**Stort företag.** Ett mjukvarubolag rullade ut en AI-kodassistent till hälften av sina ingenjörsteam som en medveten pilot, hållande den andra hälften som en jämförelsegrupp under ett kvartal innan full utrullning. Pilotgruppen visade en genuin, statistiskt meningsfull cykeltidsförbättring för väldefinierade, standardiserade-tunga uppgifter, men visade ingen mätbar förbättring, och ett lätt förhöjt granskningsiterationsantal (ämne 2.9), för komplext, nytt arkitektoniskt arbete. Det här uppgiftssegmenterade fyndet, bara synligt på grund av den genuina jämförelsedesignen och uppgiftskategorinedbrytningen, ledde företaget att specifikt rikta AI-assistansutrullningsbudskap och träning mot de uppgiftskategorierna där den demonstrerbart hjälpte, snarare än att presentera den som en enhetlig produktivitetsökning över allt arbete.

**Myndighet.** En federal myndighet som pilottestade AI-kodassistans för en delmängd av sina moderniseringsprogramteam förlitade sig initialt på självrapporterade tidsbesparingsenkäter, som visade entusiastiska, enhetligt positiva svar. En uppföljande objektiv analys, jämförande cykeltid och läckt-defektfrekvens mellan pilotteamen och en jämförbar icke-pilot-kohort som jobbade på liknande systemkomponenter, fann att den objektiva cykeltidsförbättringen var verklig men märkbart mindre än de självrapporterade uppskattningarna antydde, och identifierade en blygsam men verklig ökning i granskningstid som hade uppvägt en del av genereringshastighetsvinsten, ett fynd självrapporteringsdatan ensam helt hade missat. Den här mer korrekta, evidensbaserade bilden informerade direkt ett mer blygsamt och mer försvarbart verksamhetsfall för verktygets fortsatta, utökade upphandling.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på att mäta AI-assisterad utveckling rigoröst är säkra, evidensbaserade investeringsbeslut: en organisation som vet exakt var AI-assistans genuint hjälper kan investera i att utöka den där och undvika att överbetala för licenser i uppgiftskategorier där den ger lite värde, exakt uppgiftssegmenteringsinsikten mjukvarubolagsexemplet ovan demonstrerar. Det här kopplar direkt till ämne 5.4:s enhetsekonomi och ämne 5.5:s ROI-disciplin, eftersom AI-verktygskostnad, ofta licensierad per plats, behöver samma rigorösa kostnad-nytta-behandling den här boken tillämpar på varje annan större ingenjörsinvestering.

Den totala ägandekostnaden är den analytiska insatsen att bygga genuina jämförelser, mäta full cykeltid inklusive granskning och korrigering, och segmentera efter uppgiftstyp, vilket är mer arbete än att acceptera leverantörsrapporterad användningsstatistik eller självrapporterade intryck till nominellt värde. Den insatsen är motiverad direkt av skalan av AI-verktygslicenskostnad över en stor organisation och risken av ett dåligt underbyggt, dyrt, organisationsövergripande åtagande baserat på intryck snarare än data.

## Antimönster och fallgropar

- **Att mäta AI-assistans efter outputvolym eller leverantörsanvändningsstatistik ensamt:** upprepar ämne 7.1:s centrala varning direkt.
- **Att förlita sig helt på självrapporterade tidsbesparingar:** en svag signal sårbar för förspänning, och blind för nedströms gransknings- och korrigeringskostnad.
- **Att bara mäta genereringshastighetssteget, ignorerande full cykeltid:** producerar en inkomplett, potentiellt vilseledande redovisning av faktisk produktivitetseffekt.
- **Att rapportera ett enda, blandat organisationsövergripande tal:** döljer verklig variation i värde över olika uppgiftskategorier.
- **Ingen jämförelsegrupp eller historisk baslinje:** kan inte skilja AI-assistans faktiska effekt från någon annan samtidig ändring.
- **Att behandla ett entusiastiskt självrapporterat enkätresultat som tillräckligt bevis för ett storskaligt investeringsbeslut:** riskerar exakt gapet den federala myndighetsexemplet ovan upptäckte bara efter att bygga en mer rigorös jämförelse.

## Mognadsmodell

- **Nivå 1, Initiera:** AI-assisterad utvecklingsvärde bedöms, om alls, genom självrapporterat intryck och leverantörsanvändningsstatistik ensamt.
- **Nivå 2, Utveckla:** Viss cykeltids- eller kvalitetsdata existerar, men det finns ingen genuin jämförelsegrupp eller historisk baslinje och ingen uppgiftssegmenterad analys.
- **Nivå 3, Standardisera:** En genuin jämförelsedesign (kontrollgrupp eller historisk baslinje) med parad cykeltids- och kvalitetsmätning tillämpas konsekvent, segmenterad efter uppgiftstyp.
- **Nivå 4, Hantera:** Full cykeltidsredovisning, inklusive gransknings- och korrigeringstid, spåras; självrapporterade påståenden valideras systematiskt mot objektiv data.
- **Nivå 5, Orkestrera:** Organisationen har en mogen, evidensbaserad förståelse av exakt var AI-assistans genuint hjälper, informerande riktad utrullning, träningsinvestering, och upphandlingsbeslut med demonstrerad, försvarbar ROI.

## Diskussionsidéer

1. Vilken genuin jämförelse, om någon, har vi för vårt nuvarande AI-verktygsantagande?
2. Har vi mätt cykeltid och kvalitet tillsammans, eller bara ett hastighetspåstående?
3. Vilket självrapporterat AI-assistanspåstående borde vi validera mot objektiv data?
4. Vilken specifik uppgiftskategori visar starkast bevis på genuint AI-assistansvärde för oss?
5. Kunde vi för närvarande försvara vår AI-verktygsinvestering för en skeptisk finansintressent med bevis?

## Viktiga slutsatser

- Mät AI-assisterad utveckling efter **utfall**, inte outputvolym eller leverantörsrapporterad användningsstatistik.
- Använd en **genuin jämförelsegrupp eller historisk baslinje**, inte bara ett före-och-efter-ögonblicksfoto sårbart för störvariabler.
- Mät **cykeltid och kvalitet tillsammans**, inklusive hela pipelinen, gransknings- och korrigeringstid, inte bara genereringshastighet.
- Behandla **självrapporterade tidsbesparingar som en hypotes**, inte en slutsats, och validera den mot objektiv data.
- **Segmentera efter uppgiftstyp**; ett enda blandat tal döljer var värde genuint koncentreras och var det inte gör det.

## Källor och vidare läsning

- *Accelerate: The Science of Lean Software and DevOps*, av Nicole Forsgren, Jez Humble, och Gene Kim (utfallsmätningsdisciplinen det här ämnet tillämpar på AI-verktygsutvärdering).
- GitHubs forskning om AI-par-programmering och utvecklarproduktivitet (branschskalig empirisk forskning om AI-assisterad utvecklings utfall).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, och Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021) (den flerdimensionella mätningsdisciplinen det här ämnet tillämpar på en specifik ny verktygskategori).
- *How to Measure Anything*, av Douglas W. Hubbard (att konstruera försvarbara jämförelser och kvantifiera värde under genuin osäkerhet).
