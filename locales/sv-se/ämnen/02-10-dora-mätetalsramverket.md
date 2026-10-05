# 2.10 DORA-mätetalsramverket

## Översikt och motivation

**[DORA-mätetalen](https://dora.dev/guides/dora-metrics/)** kommer från [DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment-programmet, en flerårig forskningsinsats, senare publicerad som boken *Accelerate* av Nicole Forsgren, Jez Humble, och Gene Kim, som undersökte tiotusentals ingenjörsprofessionella för att hitta vilka leveranspraxis som korrelerar med organisatorisk prestation. Resultatet var fyra mätetal, parade två och två: driftsättningsfrekvens och ledtid för ändringar mäter hastighet; ändringsfelfrekvens och tid för återställning av misslyckad driftsättning, ofta förkortat till genomsnittlig återställningstid (MTTR), mäter stabilitet. Forskningsfyndet som gjorde ramverket betydelsefullt var att eliten presterade snabbt och stabilt samtidigt, och kullkastade antagandet att hastighet och säkerhet avvägs mot varandra, och det fyndet är fortfarande det tydligaste genomarbetade exemplet den här boken har på kapitel 1.2:s skyddsparningsprincip: ett incitamentskopplat hastighetsmätetal, parat med ett stabilitetsskydd, är vad de bäst presterande organisationerna faktiskt gör.

Den här boken täcker DORA sist i den här delen, medvetet, snarare än som delens organiserande ramverk. Den placeringen är inte ett förkastande av forskningen, som förblir genuint rigorös och värd att använda. Den återspeglar en specifik, verklig begränsning: DORA mäter hur snabbt och hur säkert en pipeline rör sig, men den tiger om vad som rör sig genom pipelinen. Ett team kan posta utmärkta DORA-tal medan dess faktiska output tyst har drivit mot defektomarbete eller har svält teknisk skuld och säkerhetsarbete på kapacitet, ett mönster kapitel 2.1 till 2.4:s Flow Framework är specifikt byggt för att avslöja och DORA inte kan se. Använd DORA som det här kapitlet presenterar det: ett väl validerat, smalare referensmått för pipelinemekanik, inte hela bilden av leveranshälsa.

För stora team är DORA:s återstående, genuina värde jämförbarhet. Ett mätetal beräknat konsekvent från pipeline- och incidentdata låter en organisation jämföra leveransförmåga över många team som arbetar inom olika domäner utan äpplen-mot-apelsiner-problemet som plågar de flesta jämförelser mellan team. Stora företag använder det fortfarande för att prioritera plattformsinvestering; myndigheter använder det fortfarande för att demonstrera, med belägg, att ett moderniseringsprogram mätbart förbättrade leveransmekanik. Behandla det som DORA:s rätta, avgränsade jobb, och använd Flow Framework-kapitlen tidigare i den här delen för den bredare frågan om de rätta sakerna levereras över huvud taget.

## Nyckelprinciper

- **DORA mäter pipelinen, inte värdet som flödar genom den.** Kapitel 2.1 namnger det här gapet direkt; använd flödesfördelning (kapitel 2.3) för att se vad DORA inte kan.
- **Hastighet och stabilitet mäts tillsammans, aldrig separat.** En DORA-informerad instrumentpanel utan båda halvorna använder inte riktigt ramverket.
- **Definitionskonsekvens betyder mer än det råa talet.** Ett team som rör sig från "medel" till "hög" prestation på ett konsekvent definierat mätetal är en verklig signal; att jämföra två team beräknade olika är det inte.
- **DORA mäter systemet, inte individer.** Att tillämpa de här mätetalen på enskilda ingenjörer bryter ramverkets statistiska grund och bjuder in exakt den manipulation kapitel 1.2 varnar mot.
- **Alla fyra mätetal är proxyer, inte mål.** De korrelerar med organisatorisk prestation; att jaga själva talet, frikopplat från genuin leveransförbättring, besegrar ramverkets syfte.

## Rekommendationer

### Instrumentera driftsättningsfrekvens från pipelinen, räkna bara produktionsutgivningar

**Driftsättningsfrekvens** mäter hur ofta ett team framgångsrikt publicerar till produktion. Räkna bara lyckade produktionsdriftsättningar, instrumenterade automatiskt från CI/CD-pipelinedata, aldrig självrapporterade. Vaka specifikt för substitutionsmanipulation, att dela en meningsfull ändring i flera triviala driftsättningar rent för att blåsa upp antalet, genom att spåra driftsättningsstorlek vid sidan av frekvens: en krympande genomsnittsstorlek bredvid ett stigande antal är det tydligaste tecknet att det här händer.

### Instrumentera ledtid för ändringar från första commit till produktion

**Ledtid för ändringar** mäter tiden från en kodändrings första commit till dess framgångsrika driftsättning i produktion. Rapportera både medianen och en hög percentil, inte bara ett medelvärde, enligt kapitel 1.6:s vägledning om skev tidbaserad data, och vaka för definitionsdrift vid endera ändpunkten, vilket smickrar talet utan någon genuin förbättring.

### Definiera ändringsfelfrekvens skriftligt innan ni jämför mellan team

**Ändringsfelfrekvens** mäter procentandelen driftsättningar som orsakar ett misslyckande som kräver åtgärd, en återställning, en snabbrättning, eller en incident. Det här är den svåraste av de fyra att definiera konsekvent, eftersom "misslyckande" inte är självklart objektivt. Enas om en skriftlig definition innan ni jämför team; utan den kan en till synes rättvis jämförelse vilseleda illa. Vaka för misstänkt snabb förbättring utan underliggande processändring bakom den, det tydligaste tecknet på definitionsmanipulation snarare än genuint framsteg.

### Mät återställningstid från detektering, inte från driftsättningshändelsen

**Tid för återställning av misslyckad driftsättning** mäter hur lång tid det tar att återställa tjänsten när en driftsättning orsakar ett misslyckande. Starta klockan vid detektering, inte vid själva driftsättningshändelsen, så att talet återspeglar genuin återställningsfördröjning snarare än ett övervakningsgap. Investera specifikt i automatiserad återställningsförmåga, den enskilt vanligaste spaken för att genuint förbättra det här mätetalet snarare än genom att förklara en incident löst förtidigt.

### Använd flödesmätetal, inte DORA, för att diagnostisera varför ett tal rörde sig

När ett DORA-mätetal skiftar förklarar de fyra talen ensamma sällan varför. Använd cykeltidsnedbrytning (kapitel 2.6), flödesbelastning (kapitel 2.4), och flödesfördelning (kapitel 2.3) som det diagnostiska lagret under DORA:s sammanfattningstal, och använd aldrig ett DORA-mätetal i en individuell prestationsbedömning, det enskilt mest skadliga missbruket det här ramverket är exponerat för.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Fullt DORA-ramverk, alla fyra mätetal parade | Forskningsvaliderat, motstår manipulation genom parning, möjliggör rättvis jämförelse mellan team | Tiger om vilken sorts värde som levereras; behöver Flow Framework vid sidan av för den bilden |
| DORA som den här delens enda organiserande mätetalsuppsättning | Enkelt, bekant för de flesta ingenjörsledare | Missar värdeblandningsfrågan helt, den här bokens anledning att deprioritera det här |
| DORA plus Flow Framework tillsammans | Pipelinemekanik och värdeblandning båda synliga | Kräver att underhålla två mätetalsvokabulär istället för ett |
| DORA tillämpat på individnivå | Känns direkt handlingsbart för vissa chefer | Bryter ramverkets statistiska validitet; stark Goodhart-lag-exponering |

Den centrala spänningen är **mekanisk rigör kontra affärsläsbarhet**. DORA:s fyra mätetal är precist definierade och forskningsvaliderade, vilket gör dem utmärkta för att jämföra pipelineprestanda mellan team, men samma precision är smalt avgränsad till själva pipelinen och säger ingenting om huruvida det rätta arbetet flödar genom den. Lös spänningen genom att hålla DORA som ett referenslager för pipelinehälsa, kapitel 2.10:s rätta plats i den här bokens struktur, medan Flow Framework-kapitlen tidigare i den här delen används för den affärsvända frågan om värdeblandning, snarare än att försöka få DORA att besvara en fråga den aldrig designades för.

## Frågor att diskutera med ditt team

1. **Instrumenterar vi alla fyra DORA-mätetal från pipelinen, eller är några av dem självrapporterade uppskattningar?** Ett ramverk byggt på objektiv, forskningsvaliderad mätning förlorar mycket av sitt värde i det ögonblick ett tal blir en bästa gissning. Granska varje mätetals faktiska datakälla (kapitel 1.5).

2. **Delar alla team vi jämför med DORA-mätetal samma definitioner av driftsättning, ändring, och misslyckande?** En jämförelse mellan team som använder olika definitioner är inte riktigt en jämförelse, och kan producera orättvisa bedömningar om relativ prestation.

3. **Har någon i vår organisation använt ett DORA-mätetal i en individuell prestationsbedömning, formellt eller informellt?** Det här är det enskilt mest skadliga missbruket av ramverket och sker ofta tyst. Fråga direkt och var beredda på ett obekvämt men nödvändigt svar.

4. **Skulle våra DORA-tal kunna vara utmärkta medan vår flödesfördelning (kapitel 2.3) tyst har drivit mot omarbete eller bort från funktioner?** Det här är precis gapet DORA ensam inte kan se. Ta fram båda uppsättningarna tal tillsammans och kontrollera om de berättar en konsekvent historia.

5. **När ett av våra DORA-mätetal rör sig, har vi flödesmätetalsdiagnostiken för att förklara varför?** Ett DORA-tal ensamt berättar att något förändrades, inte vad. Kontrollera om era team kan svara på "varför ökade ledtid den här månaden" med data, eller bara med spekulation.

6. **Hur skulle våra fyra DORA-tal förändras om vi medvetet försökte manipulera vart och ett, och skulle vi märka det?** Gå igenom driftsättningsfrekvens, ledtid, ändringsfelfrekvens, och återställningstid en i taget, den praktiska tillämpningen av kapitel 1.2:s kärndisciplin på det här specifika ramverket.

## Sektorperspektiv

**Startup.** DORA:s hastighetsmätetal kommer vanligtvis naturligt för ett litet team som redan driftsätter frekvent; den svårare disciplinen är att instrumentera ändringsfelfrekvens och återställningstid ärligt snarare än att anta stabilitet eftersom ingenting gått sönder illa ännu. Att para DORA med även en informell flödesobjektsuppdelning (kapitel 2.2) tidigt undviker att bygga ett falskt sken av leveranshälsa kring bara pipelinehastighet.

**Litet företag.** De flesta moderna CI/CD- och versionskontrollplattformar exporterar driftsättningsfrekvens- och ledtidsdata med minimal konfiguration; att koppla driftsättningar till incidenter för ändringsfelfrekvens behöver typiskt mer manuell ansträngning. Börja med de två hastighetsmätetalen och lägg till stabilitetsspårning så snart en informell incidentlogg existerar att koppla mot.

**Stort företag.** DORA:s största kvarvarande värde på den här skalan är rättvis, konsekvent jämförelse mellan team för plattformsinvesteringsbeslut. Standardisera definitioner organisationsövergripande (kapitel 1.4), automatisera instrumentering centralt, och para varje DORA-rapport med en flödesfördelningsvy så att ledningen ser både pipelinehastighet och värdeblandning tillsammans, inte en utan den andra.

**Myndighet.** DORA-mätetal ger fortfarande ett moderniseringsprogram ett försvarbart, forskningsstött sätt att demonstrera förbättring av leveransmekanik för tillsynsorgan. Rapportera alla fyra mätetal tillsammans, plocka aldrig bara den smickrande halvan, och para dem med flödesfördelning så att rapporten också besvarar den svårare, viktigare frågan om vad den snabbare pipelinen faktiskt levererar.

## Exempel

**Stort företag.** Ett stort telekommunikationsbolags plattformsmoderniseringsprogram instrumenterade alla fyra DORA-mätetal konsekvent över fyrtio produktteam och visade en genuin rörelse från lågpresterare till högpresterare-band över arton månader, driftsättningsfrekvens upp ungefär tiofaldigt, ledtid ner från veckor till dagar, ändringsfelfrekvens hölls platt. En styrelsemedlem, som granskade presentationen, ställde en fråga DORA-talen ensamma inte kunde besvara: hur mycket av den snabbare leveransen var nytt kundvärde kontra omarbete. Ingenjörsorganisationen hade inget svar förrän den antog flödesobjektsklassificering nästa kvartal, vilket visade att funktionsarbete faktiskt hade fallit som en andel av total output även när DORA:s hastighetstal förbättrades, ett fynd som omformade programmets prioriteringar för nästa år.

**Myndighet.** Ett delstatligt IT-moderniseringskontor antog DORA-mätetal som ett kontraktsvillkor för att jämföra leveransförmågan hos flera konkurrerande leverantörsteam, en effektiv användning av ramverkets jämförbarhet. En leverantörs höga driftsättningsfrekvens avslöjades, när ändringsfelfrekvens krävdes vid sidan av den, korrelera med en felfrekvens nästan tre gånger högre än sina kollegor, information som direkt informerade kontorets kontraktsförnyelsebeslut. Kontoret lade senare till ett flödesfördelningskrav i samma kontrakt efter att ha upptäckt att leverantören med de bästa DORA-talen också var den som spenderade den minsta andelen kapacitet på det säkerhetsrättningsarbete kontraktet specifikt krävde.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på att anta DORA väl, inom dess rätta omfattning, är ett försvarbart, evidensbaserat svar på "blir vår leveranspipeline snabbare och säkrare," vilket förblir en av de mer tractabla frågorna inom ingenjörsavdelningen att besvara med säkerhet. Det svaret motiverar plattforms- och verktygsinvestering med verkliga tal, och låter ledningen jämföra konkurrerande investeringar på en rättvis, konsekvent grund, exakt som det alltid har gjort.

Den totala ägandekostnaden är integrationsarbetet att koppla driftsättningshändelser till incidentregister för ändringsfelfrekvens och återställningstid, icke-trivialt över ett stort, heterogent verktygslandskap. Den extra kostnaden för att para DORA med Flow Framework-kapitlen tidigare i den här delen är jämförelsevis liten, eftersom flödesobjektsklassificering är en rapporteringskonvention lagd på befintligt arbete, inte ett parallellt mätsystem, och avkastningen, att fånga exakt den värdeblandningsblinda fläck telekommunikationsexemplet ovan illustrerar, är väl värd den blygsamma extra investeringen.

## Antimönster och fallgropar

- **Att behandla DORA som hela bilden av leveranshälsa:** manipuleringsvektorn det här kapitlets placering är designad för att motverka. En organisation kan presentera genuint utmärkta DORA-tal, snabba, frekventa, stabila driftsättningar, medan dess faktiskt levererade värde tyst har skiftat mot omarbete eller bort från funktioner, och DORA:s fyra mätetal ensamma kommer aldrig avslöja det skiftet eftersom de aldrig designades för att mäta det. Skyddet är att para varje DORA-rapport med flödesfördelning (kapitel 2.3), så att en snabb, stabil pipeline som levererar fel blandning av arbete är synlig snarare än misstagen för genuin leveranshälsa.
- **Att bara rapportera hastighetshalvan av DORA:** besegrar ramverkets centrala fynd att hastighet och stabilitet rör sig tillsammans hos höga presterare.
- **Att använda DORA-mätetal i individuella prestationsbedömningar:** bryter ramverkets statistiska validitet och bjuder in stark manipulation.
- **Att jämföra team med inkonsekventa definitioner:** producerar jämförelser som ser rättvisa ut men inte är det.
- **Självrapporterade DORA-tal istället för pipelineinstrumenterade:** introducerar exakt den bias ramverket designades för att eliminera.
- **Att behandla DORA som diagnostiskt snarare än sammanfattande:** lämnar ett team oförmöget att förklara varför ett tal rörde sig utan flödesmätetalslagret under det.

## Mognadsmodell

- **Nivå 1, Initiera:** DORA-mätetal, om de alls spåras, är självrapporterade, inkonsekvent definierade, och aldrig parade med flödesdata.
- **Nivå 2, Utveckla:** Vissa team instrumenterar DORA från pipelinen, men definitioner varierar och det finns ingen flödesfördelningsmotpart att kontrollera mot.
- **Nivå 3, Standardisera:** Alla fyra DORA-mätetal instrumenteras konsekvent från pipeline- och incidentdata, med delade definitioner, och visas rutinmässigt vid sidan av flödesfördelning.
- **Nivå 4, Hantera:** DORA- och flödesmätetal granskas tillsammans som en standardparning på varje nivå av organisationen, och DORA används aldrig för individuell utvärdering.
- **Nivå 5, Orkestrera:** Organisationen kan peka på specifika fall där flödesfördelning fångade ett värdeblandningsproblem som utmärkta DORA-tal ensamma hade dolt, och använder båda ramverken medvetet för de distinkta frågorna var och en besvarar.

## Diskussionsidéer

1. Var placerar våra fyra DORA-mätetal oss för närvarande på prestationsnivåspektrumet, ärligt?
2. Skulle våra DORA-tal kunna se utmärkta ut medan vår flödesfördelning tyst har drivit? Har vi någonsin kontrollerat?
3. Har någon någonsin använt ett DORA-tal för att döma en individ, även informellt?
4. Om en konkurrent publicerade sina DORA-tal, skulle våra jämföras gynnsamt, och skulle den jämförelsen faktiskt berätta för oss vem som levererar mer verkligt värde?

## Viktiga slutsatser

- DORA:s fyra mätetal, **driftsättningsfrekvens, ledtid, ändringsfelfrekvens, och återställningstid**, parar hastighet med stabilitet per design och förblir genuint forskningsvaliderade.
- Den här boken placerar DORA **sist i den här delen** eftersom den mäter pipelinen, inte värdet som flödar genom den; para den med flödesfördelning (kapitel 2.3) för den fullare bilden.
- Kapitlets centrala manipuleringsvektor är **att misstaga utmärkta DORA-tal för komplett leveranshälsa**; skyddet är att alltid rapportera DORA vid sidan av flödesfördelning.
- **Använd aldrig DORA-mätetal i individuella prestationsbedömningar**; ramverkets validitet beror på systemnivå, inte individuell, mätning.
- Använd **flödesmätetal som det diagnostiska lagret** under DORA:s sammanfattningstal när ett av dem rör sig.

## Källor och vidare läsning

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
