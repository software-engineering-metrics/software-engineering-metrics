# 7.1 Det generativa AI-paradigmskiftet

## Översikt och motivation

För det mesta av mjukvaruteknikens historia var att skriva kod långsamt och arbetskrävande nog att rå outputvolym, rader skrivna, commits gjorda, funktioner levererade, korrelerade åtminstone löst med verklig insats och, ofullständigt, med verkligt värde. Den korrelationen var aldrig perfekt, ämne 3.4 ägnade ett helt ämne åt varför aktivitetsmätetal vilseleder även i en för-AI-värld, men den var stark nog att många organisationer byggde mätetalsprogram på det implicita antagandet att mer kod generellt betydde mer arbete gjort. [Generativa AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)-kodassistenter har brutit det antagandet avgörande: ett verktyg kan nu producera en stor, plausibelt-utseende volym kod på sekunder, till en bråkdel av den tidigare kostnaden, och den volymen berättar nästan ingenting i sig om huruvida den resulterande koden fungerar, är underhållbar, eller tjänar något verkligt syfte.

Det här ämnets kärnpåstående är att det här är ett paradigmskifte, inte en inkrementell verktygsändring. Ett paradigmskifte ändrar vad era befintliga instrument faktiskt mäter, inte bara vilka värden de rapporterar. En hastighetsmätare mäter fortfarande hastighet efter att ni byter en bils motor; flera av den här bokens mätetal överlever inte den här övergången lika rent. Driftsättningsfrekvens (ämne 2.10) kan stiga eftersom AI accelererade genuint värdefullt arbete, eller eftersom AI gjorde det trivialt lätt att generera många små, lågvärda ändringar; talet ensamt kan inte längre skilja de två, på ett sätt det mestadels kunde, med lämplig försiktighet, tidigare. Samma logik gäller med ännu mer kraft för råa commit-antal, rader kod, och pull-request-volym, allt vilket ämne 3.4 redan varnade mot som individuella mätetal, nu förstärkt till en risk relevant på team- och organisationsnivå också.

För stora team anlände det här skiftet snabbare än de flesta organisationers mätningspraxis kunde anpassa sig till det, och gapet mellan antagandehastighet och mätningsanpassning är där den verkliga risken i den här delen bor. Stora företag som fortsätter rapportera för-AI-era-aktivitetsmätetal utan justering riskerar att fira ett mätetal som tyst har slutat korrelera med värde; myndigheter som utvärderar AI-verktygsinvestering behöver en klarsynt förståelse av exakt vilka mätetal som förblir pålitliga och vilka som inte längre är det, innan de åtar sig till upphandlings- eller policybeslut byggda på föråldrade mätningsantaganden.

## Nyckelprinciper

- **Det här är ett paradigmskifte i vad mätetal mäter, inte en inkrementell ändring.** Vissa befintliga mätetal har tyst slutat betyda vad de brukade betyda.
- **Outputvolym var aldrig en pålitlig representant för värde, och den har blivit aktivt opålitlig nu.** Ämne 3.4:s varning var alltid korrekt; det här skiftet gör att ignorera det mycket dyrare.
- **Gapet mellan AI-antagandehastighet och mätningsanpassningshastighet är den verkliga risken.** Organisationer antar verktygen snabbare än de omprövar sina mätetal.
- **Inte varje mätetal i den här boken är påverkat lika.** Utfallsmätetal (del 5) är mycket mer motståndskraftiga mot det här skiftet än aktivitets- och rå outputmätetal.
- **Det här skiftet är branschomfattande och pågående, inte en engångsjustering.** Förvänta er fortsatt ändring när verktygen och deras antagandemönster fortsätter utvecklas.

## Rekommendationer

### Granska er befintliga mätetalsuppsättning explicit för AI-era-giltighet

Gå igenom er nuvarande instrumentpanel och, för varje mätetal, fråga direkt: skulle ett team som använder AI-assistans tungt men producerar inte mer verkligt värde än tidigare visa en förbättrad avläsning på det här mätetalet. Aktivitetsantal, commit-frekvens, och rå driftsättningsfrekvens (utan en parat stabilitetsskyddsmätetal, ämne 2.10) är de mest exponerade. Utfallsmätetal från del 5, läckt-defektfrekvens, funktionsadoption, affärsutfall, är jämförelsevis motståndskraftiga, eftersom de mäter det faktiska resultatet snarare än volymen av aktivitet som producerade det.

### Omgranska driftsättningsfrekvens och ledtid specifikt, med höjd skyddsmätetaluppmärksamhet

Ämne 2.10 varnade redan om substitutionsmanipulation, att dela upp meningsfullt arbete i triviala driftsättningar för att blåsa upp antalet. Generativ AI gör det här specifika manipulationsmönstret dramatiskt billigare och lättare att producera, även oavsiktligt, eftersom AI-assisterade triviala ändringar nu är nästan gratis att generera. Stram åt er ändringsfelfrekvensskyddsmätetal (ämne 2.10) specifikt i proportion till hur tungt ett team har antagit AI-assisterad utveckling, och bevaka driftsättningsstorlekstrender ännu närmare än tidigare.

### Behandla kodgranskningskapacitet som en ny, kritisk flaskhals

Om AI-assistans dramatiskt ökar volymen kod föreslagen för granskning, blir granskningssteget (ämne 2.9), redan ofta den största väntetidsbidragaren i leveranspipelinen, en ännu skarpare begränsning. En granskare ombedd att utvärdera en mycket högre volym AI-genererad kod i samma takt som tidigare kommer oundvikligen antingen sakta ner pipelinen eller minska granskningsdjup, exakt gummistämpelrisken ämne 2.9 redan varnade om, nu under betydligt större tryck. Övervaka granskningsdjup- och kvalitetsskyddsmätetal med höjd uppmärksamhet när AI-genererad kodvolym stiger.

### Anta inte att AI-genererad kod bär samma defektprofil som mänskligt skriven kod

Tidiga bevis och praktikererfarenhet antyder att AI-genererad kod kan ha en annan defektprofil än mänskligt skriven kod: plausibelt-utseende men subtilt fel logik, självsäkert genererad men felaktig kantfallshantering, eller kod som passerar ytlig granskning eftersom den ser idiomatisk och rimlig ut, men inte faktiskt resonerades igenom med genuin förståelse av systemets specifika kontext. Behandla det här som en hypotes värd att aktivt testa mot er egen läckt-defekt-data (ämne 5.1), taggande defekter efter om den ursprungliga koden var substantiellt AI-genererad, snarare än att anta att de historiska defektfrekvensförhållandena er organisation har byggt sina kvalitetspraxiser runt fortfarande håller oförändrade.

### Uppdatera er metrikstadga och styrningsprocess explicit för det här skiftet

Följande ämne 1.4:s styrningsdisciplin, låt inte det här skiftet hända för ert mätetalsprogram passivt. Återbesök explicit er metrikstadga, namnge vilka mätetal som behöver nya skyddsmätetal, vilka som behöver pensioneras, och vilka som förblir pålitliga, som ett medvetet styrningsbeslut snarare än en oundersökt drift. Dokumentera resonemanget, eftersom det här är exakt den typen av definitionellt och kontextuellt skifte ämne 1.4 varnar annars kan hända tyst och upptäckas bara mycket senare.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Fortsätt rapportera för-AI-mätetal oförändrade | Ingen disruption, bekant rapportering | Riskerar att fira mätetal som tyst har slutat korrelera med värde |
| Full mätetalsuppsättningsrevision och medveten revision | Återställer pålitlig mätning | Kräver verklig analytisk insats och organisatorisk förändringshantering |
| Överge aktivitets- och outputmätetal helt | Tar bort den mest exponerade risken direkt | Förlorar viss legitimt användbar kontextuell signal (ämne 3.4:s förbehåll) |
| Stram åt skyddsmätetal utan full revision | Snabbare att implementera | Kan missa mätetal vars exponering är mindre uppenbar än de tydligaste fallen |

Den centrala spänningen är **mätningskontinuitet kontra mätningsgiltighet**. Organisationer föredrar förståeligt att fortsätta rapportera bekanta mätetal på bekanta sätt, eftersom att ändra ett mätetalsprogram har verklig organisatorisk kostnad och disruption. Men att fortsätta rapportera ett mätetal som tyst har slutat mäta vad det brukade mäta är värre än disruption, det är aktiv felriktning. Lös spänningen genom att behandla det här som exakt den typen av medveten, dokumenterad styrningsändring ämne 1.4 beskriver, disruptiv på kort sikt men nödvändig för att hålla organisationens mätetal ärliga.

## Frågor att diskutera med ditt team

1. **Skulle ett team som använder AI-assistans tungt men producerar inte mer verkligt värde visa en förbättrad avläsning på vart och ett av mätetalen på vår instrumentpanel?** Gå igenom era mätetal explicit med det här testet; de som misslyckas är era högst-prioriterade kandidater för reviderade skyddsmätetal eller pensionering.

2. **Har vår driftsättningsfrekvens eller commit-volym stigit sedan vi antog AI-kodassistans, och har vi kontrollerat om ändringsfelfrekvens eller defektfrekvens rörde sig motsvarande?** Dra den faktiska parade datan snarare än att anta antingen ett positivt eller negativt utfall.

3. **Håller vår kodgranskningskapacitet jämna steg med någon ökning i AI-assisterad kodvolym, eller eroderar granskningsdjup tyst under ökat tryck?** Kontrollera granskningssteg-mätetal (ämne 2.9) specifikt för tecken på att gummistämpelrisken intensifieras.

4. **Taggar vi defekter efter om den ursprungliga koden var substantiellt AI-genererad, och om så, vad visar den datan hittills?** Om ni för närvarande inte taggar det här, diskutera vad det skulle krävas att börja, eftersom den här datan är direkt relevant för om era historiska kvalitetsantaganden fortfarande håller.

5. **Har vi medvetet återbesökt vår metrikstadga (ämne 1.4) i ljuset av det här skiftet, eller har vår mätningspraxis helt enkelt fortsatt oförändrad?** Om det ärliga svaret är det senare är det gapet exakt vad det här ämnet rekommenderar att stänga först.

6. **Hur skulle det se ut för vår organisation att bli tagen på sängen av det här skiftet, firande ett mätetal som redan hade slutat betyda vad vi trodde det betydde?** Det här konkreta, något obekväma tankeexperimentet hjälper motivera revisionen det här ämnet rekommenderar innan, snarare än efter, det scenariot faktiskt händer.

## Sektorperspektiv

**Startup.** Snabbt AI-verktygsantagande är vanligt och ofta en genuin konkurrensfördel, men samma hastighet som gör antagande attraktivt gör oundersökt mätetalsdrift mer trolig. Bygg vanan att kontrollera utfallsmätetal (del 5) vid sidan av varje effektivitetsvinst ni rapporterar från AI-antagande, snarare än att rapportera hastighetsförbättringar ensamma.

**Litet företag.** AI-kodassistans kan meningsfullt utöka ett litet teams kapacitet, men motstå frestelsen att rapportera rå outputökningar som odubbel framgång utan att kontrollera kvalitetsskyddsmätetal; ett litet team har mindre kapacitet att absorbera ett oupptäckt kvalitetsproblem än en större organisation med mer redundans.

**Stort företag.** Skalan av den här risken ackumuleras betydligt här, eftersom AI-antagande över dussintals eller hundratals team samtidigt kan skifta mätetalsgiltighet organisationsövergripande innan något enskilt team märker mönstret lokalt. Genomför mätetalsuppsättningsrevisionen det här ämnet rekommenderar på organisationsnivå, inte bara team för team, och uppdatera styrning (ämne 1.4) centralt och explicit.

**Myndighet.** Organisationer inom offentlig sektor antar ofta ny teknik mer försiktigt, men mätetalen och riktmärkena använda för att utvärdera myndighetsteknikprogram dras ofta från eller jämförs mot privat-sektor-branschdata som själv skiftar under samma tryck. Förstå explicit vilka branschriktmärken ni jämför mot som har påverkats av det här skiftet innan ni använder dem för att sätta förväntningar eller utvärdera prestation.

## Exempel

**Stort företag.** Ett finansteknikbolags ingenjörsledning märkte att driftsättningsfrekvens hade stigit nästan 40 % under de två kvartalen efter brett antagande av AI-kodassistent, och rapporterade initialt det här som en okomplicerad produktivitetsvinst i en styrelsepresentation. En mer noggrann uppföljningsanalys, föranledd av en skeptisk styrelsemedlems fråga om kvalitet hade kontrollerats, fann att ändringsfelfrekvens hade stigit nästan i takt med driftsättningsfrekvens, helt uppvägande den skenbara vinsten när den parade stabilitetsmätetalet faktiskt undersöktes. Företagets reviderade rapportering presenterar nu driftsättningsfrekvens och ändringsfelfrekvens tillsammans explicit närhelst AI-assisterade produktivitetspåståenden görs, undvikande det tidigare, nästan offentliga, missvisande påståendet.

**Myndighet.** En delstatsregerings IT-avdelning som pilottestade AI-kodassistans för en delmängd av sina ingenjörsteam fann att rå kodoutput per ingenjör hade ökat substantiellt, en siffra initialt citerad gynnsamt i en intern pilotgranskning. En närmare analys, föranledd av att den här bokens vägledning inkorporerades i avdelningens utvärderingsramverk, undersökte läckt-defektfrekvens för AI-assisterat kontra icke-AI-assisterat arbete specifikt och fann en måttligt förhöjd defektfrekvens i den AI-assisterade kohorten, koncentrerad i kantfallshantering för ovanliga medborgarförhållanden AI-verktyget inte hade exponerats för under träning. Det här fyndet stoppade inte piloten men ledde till en specifik, riktad ökning i granskningsrigör för AI-assisterade ändringar som rörde berättigande-kantfallslogik, adresserande den faktiska risken rå outputmätetalet ensamt aldrig skulle ha avslöjat.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på att genomföra den här revisionen proaktivt är att undvika en offentlig eller styrelsenivå-pinsamhet från att rapportera ett mätetal som visar sig, under granskning, inte ha mätt något verkligt, exakt scenariot finansteknikexemplet ovan nästan producerade. En organisation som ligger före det här skiftet upprätthåller trovärdighet med sina intressenter; en som blir fångad rapporterande ett ihåligt mätetal betalar en verklig, och till stor del undvikbar, ryktesrelaterad kostnad.

Den totala ägandekostnaden är den analytiska insatsen att granska den befintliga mätetalsuppsättningen, strama åt skyddsmätetal, och uppdatera styrningsdokumentation, en engångs-, måttlig investering relativt den löpande risken att fortsätta rapportera mätetal som tyst har slutat mäta vad de påstår att mäta. Den här kostnaden är också återkommande på en lägre nivå, eftersom det här skiftet är pågående, inte en engångsevent, och periodisk omrevision när verktyg och antagandemönster fortsätter utvecklas är ett rimligt, permanent tillägg till en mätetalsstyrningscadens.

## Antimönster och fallgropar

- **Att fortsätta rapportera för-AI-era-aktivitetsmätetal oförändrade och okritiskt:** riskerar att fira ett mätetal som tyst har slutat korrelera med verkligt värde.
- **Att rapportera driftsättningsfrekvens- eller outputvolymökningar utan den parade stabilitetsskyddsmätetal:** upprepar ämne 2.10:s varning med betydligt högre insatser under AI-assisterad utveckling.
- **Att anta att AI-genererad kod bär samma defektprofil som mänskligt skriven kod utan att kontrollera:** ett otestat antagande som kunde vara aktivt fel.
- **Att låta granskningsdjup erodera tyst under ökad AI-genererad kodvolym:** gummistämpelrisken från ämne 2.9, intensifierad.
- **Att behandla det här skiftet som en engångsjustering snarare än en pågående angelägenhet:** verktygen och deras antagandemönster fortsätter utvecklas, och mätningspraxis behöver hålla jämna steg.
- **Att jämföra mot branschriktmärken utan att förstå om de riktmärkena själva har skiftat under samma tryck:** riskerar en falsk känsla av relativ prestation.

## Mognadsmodell

- **Nivå 1, Initiera:** För-AI-era-mätetal rapporteras oförändrade, utan medvetenhet att AI-antagande kan ha påverkat deras giltighet.
- **Nivå 2, Utveckla:** Viss medvetenhet om skiftet existerar, men ingen systematisk revision av den befintliga mätetalsuppsättningen har genomförts.
- **Nivå 3, Standardisera:** En full mätetalsuppsättningsrevision har genomförts, med skyddsmätetal stramade åt och mätetal dokumenterade som påverkade eller motståndskraftiga, organisationsövergripande.
- **Nivå 4, Hantera:** Defekter och kvalitetsutfall taggas och spåras aktivt efter AI-assistansnivå för att testa, inte anta, att organisationens historiska kvalitetsförhållanden fortfarande håller.
- **Nivå 5, Orkestrera:** Organisationen har en mogen, pågående praxis av att omgranska sina mätetal när AI-verktyg och antagandemönster fortsätter utvecklas, och kan peka på specifika styrningsbeslut gjorda proaktivt som respons på det här skiftet snarare än reaktivt efter ett problem framträtt.

## Diskussionsidéer

1. Vilket av våra nuvarande mätetal skulle mest smickra ett team som använder AI-assistans tungt men producerar inte mer verkligt värde?
2. Har vår driftsättningsfrekvens stigit sedan AI-antagande, och har ändringsfelfrekvens rört sig med den?
3. Taggar vi kvalitetsutfall efter AI-assistansnivå, och vad skulle den datan visa?
4. Håller vår granskningskapacitet jämna steg med någon ökning i AI-genererad kodvolym?
5. Vilket branschriktmärke jämför vi oss för närvarande mot, och har det själv skiftat under det här trycket?

## Viktiga slutsatser

- Generativ AI är ett **paradigmskifte i vad flera befintliga mätetal mäter**, inte en inkrementell verktygsändring; vissa mätetal har tyst slutat betyda vad de brukade betyda.
- **Aktivitets- och rå outputmätetal är mest exponerade**; utfallsmätetal (del 5) är jämförelsevis motståndskraftiga.
- **Stram åt skyddsmätetal, särskilt ändringsfelfrekvens**, i proportion till AI-assisterad utvecklingsantagande.
- **Testa, anta inte, om AI-genererad kod bär en annan defektprofil** än mänskligt skriven kod, med hjälp av taggad läckt-defekt-data.
- Behandla det här som en **pågående, inte engångs-, styrningsangelägenhet** (ämne 1.4), eftersom verktygen och deras antagandemönster fortsätter utvecklas.

## Källor och vidare läsning

- *Accelerate: The Science of Lean Software and DevOps*, av Nicole Forsgren, Jez Humble, och Gene Kim (den utfallsbaserade mätningsgrunden det här ämnet argumenterar blir mer, inte mindre, viktig under det här skiftet).
- GitHubs forskning om AI-par-programmering och utvecklarproduktivitet (branschforskning om AI-assisterad utvecklings mätbara effekter).
- Google Clouds DevOps Research and Assessment-program, [dora.dev](https://dora.dev/) (pågående State of DevOps-forskning som inkorporerar AI-antagandefynd på senare år).
- *The Tyranny of Metrics*, av Jerry Z. Muller (det allmänna fallet för skepticism mot volymbaserade mätetal, direkt relevant när outputvolym blir billigt).
