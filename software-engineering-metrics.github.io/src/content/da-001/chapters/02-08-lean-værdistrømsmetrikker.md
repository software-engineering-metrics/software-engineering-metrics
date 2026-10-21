# 2.8 Lean-værdistrømsmetrikker

## Overblik og motivation

Hver metrik, denne del hidtil har dækket, flowtid, flowbelastning, cyklustid, udnyttelse, nedstammer fra et meget ældre værktøjssæt: de fem grundlæggende målinger i klassisk **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**-værdistrømskortlægning, udviklet hos Toyota og generaliseret på tværs af produktion, drift og serviceleverance længe før software tog dem i brug. **Gennemløbstid (lead time, LT)** er den samlede urtid fra det øjeblik, arbejde anmodes om, til det leveres. **Procestid (process time, PT)** er den faktiske praktiske tid, der bruges på at arbejde på en enkelt enhed. **Cyklustid (cycle time, CT)** er den gennemsnitlige tid, der kræves for at gennemføre en enkelt knude eller fase i strømmen. **Procent færdigt og korrekt (percent complete and accurate, %C/A)** er andelen af enheder, et nedstrøms team kan behandle uden at have brug for omarbejde. **Taktid (takt time)** er den maksimalt acceptable tid til at gennemføre en enhed, så den rent matcher kundens efterspørgsel.

Dette emne findes, fordi softwareudvikling ikke opfandt disse idéer, den lånte dem, og lånet genbrugte undertiden de samme ord til lidt forskellige ting. Denne bogs egen cyklustid (emne 2.6) måler specifikt en ændrings ingeniørtrin, kodning, gennemgang, test, udrulning, mens Leans klassiske CT er den mere generelle "gennemsnitlige tid pr. knude" anvendt på enhver proces. Flowtid (emne 2.4) er denne bogs navn for det, Lean kalder gennemløbstid. At kende afbildningen betyder noget, fordi en læser med baggrund i Lean Six Sigma, almindeligt i produktion, logistik, sundhedsvæsen og offentlig drift, vil bruge netop disse termer med deres oprindelige betydninger, og et softwareteam, der ikke taler det samme sprog, opgiver en nem, belægsbaseret bro til kolleger uden for ingeniørafdelingen.

For store teams er %C/A dette emnes mest underbrugte metrik. Den fanger noget, flowmetrikkerne i emnerne 2.3 og 2.4 ikke gør: hvor meget af det, et trin producerer, der faktisk kan bruges af det næste trin uden at blive sendt tilbage. Rullet op på tværs af en værdistrøm med flere trin, et begreb produktion kalder **rullet gennemløbsudbytte (rolled throughput yield)**, afslører %C/A, hvordan omarbejde ophobes usynligt på tværs af overdragelser, et mønster, store virksomheder med lange pipelines på tværs af mange teams og offentlige programmer med flere godkendelsesporte er særligt tilbøjelige til og sjældent måler direkte.

## Nøgleprincipper

- **Disse fem metrikker er ældre end software og generaliserer ud over det.** De er det fælles ordforråd, en interessent uddannet i Lean Six Sigma, almindeligt i store virksomheder og offentlig drift, allerede taler flydende.
- **Terminologikollision er reel og værd at navngive eksplicit.** Denne bogs cyklustid (emne 2.6) og Leans klassiske CT er beslægtede, men ikke identiske; dokumentér afbildningen, så samtaler på tværs af funktioner ikke i det stille taler forbi hinanden.
- **%C/A skal rulles op på tværs af hvert trin, ikke måles én gang til sidst.** Omarbejde, der indføres tidligt i en strøm og fanges sent, er usynligt for en metrik, der kun måles ved den endelige levering.
- **Taktid omformulerer kapacitetsplanlægning omkring efterspørgsel, ikke indsats.** Spørgsmålet skifter fra "hvor hurtigt kan vi gå" til "hvor hurtigt skal vi gå", hvilket hænger direkte sammen med udnyttelse (emne 2.7) og flowbelastning (emne 2.4).
- **Disse er diagnostiske metrikker, ikke forfængelighedsmetrikker.** Hver enkelt findes for at besvare et specifikt operationelt spørgsmål, ikke for at producere et imponerende tal til et dashboard.

## Anbefalinger

### Kortlæg din værdistrøm med alle fem Lean-metrikker, før du indfører et softwarespecifikt framework

Beregn gennemløbstid, procestid, cyklustid, %C/A og taktid for en repræsentativ stikprøve af arbejde, der bevæger sig gennem din værdistrøm, før du lægger Flow Frameworks egne metrikker (emnerne 2.3 og 2.4) ovenpå. Det giver dig en baseline, enhver interessent med kendskab til Lean Six Sigma straks kan forstå, og det afslører ofte den samme dominans af ventetid, emne 2.5 beskriver, udtrykt i et ordforråd, der er ældre end og overlever ethvert bestemt softwareframework.

### Rul procent færdigt og korrekt op multiplikativt på tværs af hvert trin

Mål %C/A for hvert trin individuelt, og gang derefter procenterne på trinniveau sammen for at få værdistrømmens rullede gennemløbsudbytte. Tre trin, der hver især kører med 90 % færdigt og korrekt, giver tilsammen cirka 73 % samlet, et tal, der ikke ligner noget enkelt trins egen rapport, og som som regel er det mere ærlige. Denne ene beregning er den hurtigste måde at afsløre, hvor meget omarbejde en pipeline med flere trin reelt absorberer.

### Sæt taktid eksplicit ud fra reelle kundeefterspørgselsdata, ikke ud fra kapacitet

Beregn taktid som tilgængelig arbejdstid divideret med kundeefterspørgslen i den periode, bevidst uafhængigt af, hvor hurtigt dit team tilfældigvis kan arbejde i dag. Sammenlign din målte procestid og cyklustid med det tal: en procestid komfortabelt under taktid indikerer sund slack, mens en cyklustid, der overstiger taktid, er konkret, kvantificeret belæg for en kapacitetsmangel, ikke blot en fornemmelse af, at tingene er bagud.

### Dokumentér afbildningen mellem Lean-termer og denne bogs eget ordforråd

Hvor din organisation allerede kører et Lean Six Sigma-program uden for software, eller hvor ingeniørafdelingen rapporterer til en ledelse, der er flydende i det ordforråd, så skriv afbildningen ned eksplicit i dit metrikcharter (emne 1.4): denne bogs flowtid er Leans gennemløbstid, denne bogs cyklustid (emne 2.6) er en specifik anvendelse af Leans mere generelle CT, og denne bogs aktive tid (emne 2.5) er Leans procestid. Dette ene dokument forhindrer en tilbagevendende, værdiløs diskussion om, hvis tal der er "rigtige".

### Brug %C/A som et værn ved siden af flowhastighed, ikke som en erstatning for den

Par rullet gennemløbsudbytte med flowhastighed (emne 2.3) på samme måde, som denne bog parrer hver hastighedsmetrik med et stabilitetsværn. Et stigende antal elementer med et faldende rullet %C/A betyder, at værdistrømmen leverer flere enheder, der i stigende grad har brug for omarbejde senere, netop den slags hastighed uden kvalitet, emne 1.2 advarer hver metrikfamilie om at værne imod.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Kun klassiske Lean-metrikker (LT, PT, CT, %C/A, taktid) | Universelt ordforråd; virker på tværs af både software- og ikke-softwareteams | Ikke softwarespecifikke; kræver oversættelse til ingeniørspecifikke trin |
| Kun metrikker fra Flow Framework (emnerne 2.3, 2.4) | Specialbygget til softwareværdistrømme og synlighed af elementtyper | Ukendte for interessenter uddannet i Lean Six Sigma uden for ingeniørafdelingen |
| Begge, med en eksplicit dokumenteret afbildning | Taler begge ordforråd; den stærkeste bro på tværs af funktioner | Kræver forhåndsdisciplinen at skrive afbildningen ned og holde den aktuel |
| %C/A målt kun ved endelig levering | Enkel, ét tal | Skjuler omarbejde, der indføres og fanges tidligere i strømmen |

Den centrale spænding er **universalitet versus specificitet**. Klassiske Lean-metrikker er øjeblikkeligt læsbare for enhver med erfaring fra produktion, drift eller Six Sigma, men de blev ikke designet med softwares specifikke trin, kodegennemgang, automatiseret test, udrulningsgodkendelse, for øje. Løs spændingen ved at bruge Lean-metrikkerne som det fælles baseline-ordforråd til samtaler på tværs af funktioner og med direktionen, og Flow Frameworks egne metrikker (emnerne 2.3 og 2.4) til det softwarespecifikke diagnostiske arbejde, ingeniørteams udfører til daglig.

## Spørgsmål at drøfte med dit team

1. **Kunne vi i dag beregne alle fem klassiske Lean-metrikker for vores værdistrøm, eller har vi kun nogle af dem?** De fleste softwareteams har ækvivalenter til flowtid og cyklustid, men har aldrig beregnet procestid, %C/A eller taktid eksplicit. Identificér, hvilke af de fem der reelt mangler, før du antager, at hullet er lille.

2. **Har vi nogensinde rullet %C/A op på tværs af hvert trin i vores værdistrøm, eller kun målt det ved den endelige levering?** En enkelt måling til sidst i strømmen skjuler netop det ophobede omarbejde, dette emnes beregning af rullet gennemløbsudbytte er designet til at afsløre. Forsøg opruldningen med reelle data.

3. **Kender vi vores taktid, beregnet ud fra faktisk kundeefterspørgsel, og hvordan sammenligner vores målte cyklustid sig med den?** De fleste teams har aldrig gjort den sammenligning eksplicit, hvilket betyder, at kapacitetssamtaler forbliver anekdotiske frem for kvantificerede.

4. **Hvis en interessent uddannet i Lean Six Sigma uden for ingeniørafdelingen spurgte om vores cyklustid, ville vi så være sikre på, at vi mener det samme som vedkommende?** Denne bogs cyklustid (emne 2.6) og Leans klassiske CT er beslægtede, men ikke identiske. Drøft, om det skel nogensinde har forårsaget en reel misforståelse i jeres organisation.

5. **Har vores rullede gennemløbsudbytte nogensinde været meningsfuldt lavere end noget enkelt trins egen rapporterede %C/A?** Hvis du aldrig har beregnet opruldningen, så drøft, hvad du ville forvente at finde, og kontrollér det derefter mod reelle data.

6. **Kører vores organisation allerede et Lean- eller Six Sigma-program uden for software, som vi kunne tilpasse os i stedet for at vedligeholde et separat, afkoblet ordforråd?** Mange store virksomheder og offentlige myndigheder har allerede den infrastruktur; kontrollér, om ingeniørafdelingen nogensinde faktisk har forbundet sig til den.

## Sektorperspektiv

**Startup.** Fuld Lean-værdistrømskortlægning er sjældent ceremonien værd i denne skala, men taktid er værd at forstå uformelt: at vide nogenlunde, hvor hurtigt teamet reelt skal bevæge sig for at matche den virkelige kundeefterspørgsel, frem for et vilkårligt internt tempo, forhindrer både at overbygge kapacitet for tidligt og at underbygge den, når væksten kommer.

**Mindre virksomhed.** %C/A er den mest umiddelbart nyttige af de fem metrikker her, da den direkte besvarer "hvor meget af det, vi leverer, skal gøres om", et spørgsmål, ejere og små teams mærker akut uden altid at have et tal knyttet til det. Følg den uformelt for dine en eller to kritiske processer, før du investerer i noget mere omstændeligt.

**Stor virksomhed.** Det er her, det klassiske Lean-ordforråd fortjener sin plads, fordi store virksomheder meget ofte allerede kører et Lean Six Sigma-program i driften, i produktionsnære divisioner eller i fælles services, og ingeniørarbejde, der taler det samme sprog, får en øjeblikkelig, troværdig bro til de funktioner i stedet for at skulle begrunde et separat metriksæt kun for software fra bunden.

**Offentlig sektor.** Offentlige myndigheder, især dem med rødder i regulerende, produktionsnære eller logistiske funktioner, har ofte eksisterende mandater om Lean eller procesforbedring. At indramme en digital tjenestes værdistrøm i de samme klassiske termer, gennemløbstid, procestid, %C/A, taktid, som en myndigheds kontor for procesforbedring allerede bruger, er ofte den hurtigste måde at sikre reel institutionel opbakning til en softwaremoderniseringsindsats.

## Eksempler

**Stor virksomhed.** En produktionsvirksomheds interne softwaredivision havde i årevis kæmpet for at få sine ingeniørmetrikker taget alvorligt af en driftsledelse, der var flydende i Lean Six Sigma fra fabriksgulvet. At omforme divisionens leveringspipeline ved hjælp af de samme fem klassiske metrikker, ved at beregne gennemløbstid, procestid, cyklustid, %C/A og taktid for dens softwareværdistrøm, gjorde med det samme divisionens tal læsbare for driftsledelsen for første gang. En beregning af rullet gennemløbsudbytte på tværs af pipelinens fire trin afslørede et faktisk %C/A på 61 %, langt under noget enkelt trins eget rapporterede tal, hvilket blev belægsgrundlaget for et initiativ til reduktion af omarbejde, som driftsledelsen finansierede inden for samme kvartal.

**Offentlig sektor.** En delstatlig transportafdelings team for digitale tilladelser, der rapporterede til en myndighed med et mangeårigt kontor for Lean-procesforbedring, havde aldrig inddraget det kontor, fordi dets egne metrikker brugte softwarespecifikt sprog, kontoret ikke genkendte. Efter at have oversat tilladelsesværdistrømmen til gennemløbstid, procestid og %C/A identificerede procesforbedringskontoret, at teamets reelle begrænsning ikke var ingeniørhastighed, men et nedstrøms juridisk gennemgangstrin, der kørte langt under sin egen effektive taktid i forhold til efterspørgslen efter tilladelser, et fund kontoret var rustet til at handle på med det samme, fordi det var indrammet i velkendte termer.

## Business case: motiver, ROI og TCO

Afkastet af at indføre klassisk Lean-ordforråd ved siden af denne bogs softwarespecifikke metrikker er en troværdig, umiddelbar bro til procesforbedringsekspertise og -finansiering, der ofte allerede findes et andet sted i en stor organisation. Eksemplet med produktionsvirksomheden ovenfor, der sikrede finansiering til reduktion af omarbejde i samme kvartal, som omformuleringen gjorde sagen læsbar, er det mønster, dette emnes tilgang pålideligt producerer: indsigten var ikke ny, men det ordforråd, der gjorde den handlingsrettet for den rette målgruppe, var.

De samlede ejeromkostninger er lave: disse fem metrikker kræver ingen ny instrumentering ud over det, emnerne 2.4 til 2.6 allerede indsamler, plus en klassifikation af omarbejde for %C/A, som som regel er en simpel tilføjelse til eksisterende sporing af fejl og flowelementer (emne 2.2). Hovedinvesteringen er oversættelse, at skrive afbildningen ned mellem denne bogs termer og Leans klassiske, hvilket betaler sig selv første gang, det forhindrer en misforståelse på tværs af funktioner.

## Antimønstre og faldgruber

- **At måle %C/A kun ved endelig levering:** manipulationsvektoren i hjertet af dette emne. Et team kan rapportere et højt %C/A i det sidste trin, mens tidligere trin i det stille producerer omarbejde, der rettes, før nogen måler det, hvilket får hele værdistrømmen til at se sundere ud, end den er. Værnet er at rulle %C/A op multiplikativt på tværs af hvert trin, beregningen af rullet gennemløbsudbytte, og periodisk at revidere hvert trins definition af "færdigt og korrekt", så den ikke i det stille kan indsnævres over tid.
- **At antage, at denne bogs cyklustid og Leans klassiske CT betyder præcis det samme:** skaber reel forvirring på tværs af funktioner, når de to ordforråd mødes uden en dokumenteret afbildning.
- **At sætte taktid ud fra nuværende kapacitet i stedet for reel kundeefterspørgsel:** underminerer metrikkens formål, som er at afsløre et hul mellem efterspørgsel og kapacitet, ikke at bekræfte det tempo, der allerede findes.
- **At behandle klassiske Lean-metrikker som forældede, når et softwarespecifikt framework er indført:** kasserer en troværdig, belægsbaseret bro til procesforbedringsekspertise, der måske allerede findes i organisationen.
- **At ignorere et eksisterende Lean Six Sigma-program et andet sted i organisationen:** opgiver finansiering, ekspertise og institutionel troværdighed, som en omformulering af leveringsmetrikker på et fælles sprog kunne låse op for.
- **At rapportere %C/A uden at parre det med flowhastighed:** lader et stigende gennemstrømningstal skjule en faldende omarbejdsrate, det samme hul i værnet, denne bog advarer imod hele vejen igennem.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Ingen af de fem klassiske Lean-metrikker beregnes; levering drøftes uden henvisning til gennemløbstid, procestid eller %C/A.
- **Niveau 2, Udvikl:** Gennemløbstid og cyklustid følges uformelt, men procestid, %C/A og taktid beregnes ikke, og der findes ingen afbildning til denne bogs eget ordforråd.
- **Niveau 3, Standardisér:** Alle fem klassiske metrikker beregnes konsekvent, og afbildningen til denne bogs ordforråd for flow og cyklustid er dokumenteret i et fælles metrikcharter.
- **Niveau 4, Styr:** Rullet gennemløbsudbytte beregnes på tværs af hvert trin i værdistrømmen, og taktid sammenlignes med målt cyklustid for eksplicit at kvantificere kapacitetshuller.
- **Niveau 5, Orkestrér:** Organisationen har forbundet sine metrikker for softwarelevering til et eksisterende Lean- eller Six Sigma-program et andet sted i virksomheden og kan pege på specifikke investerings- eller procesbeslutninger truffet, fordi det fælles ordforråd gjorde en indsigt handlingsrettet for en målgruppe uden for ingeniørafdelingen.

## Idéer til drøftelse

1. Kunne vi i dag beregne gennemløbstid, procestid, cyklustid, %C/A og taktid for vores værdistrøm?
2. Hvad ville vores rullede gennemløbsudbytte være, hvis vi ganger hvert trins %C/A sammen?
3. Kører vores organisation allerede et Lean- eller Six Sigma-program, som vi aldrig har forbundet ingeniørmetrikker til?
4. Hvordan sammenligner vores målte cyklustid sig med vores taktid, beregnet ud fra reel kundeefterspørgsel?

## Vigtigste pointer

- De fem klassiske Lean-metrikker, **gennemløbstid, procestid, cyklustid, procent færdigt og korrekt samt taktid**, er ældre end software og er stadig det fælles ordforråd for interessenter uddannet i Lean Six Sigma.
- Denne bogs egen **flowtid og cyklustid svarer til, men er ikke identiske med**, Leans gennemløbstid og klassiske CT; dokumentér afbildningen eksplicit for at undgå forvirring på tværs af funktioner.
- Emnets centrale manipulationsvektor er **at måle %C/A kun ved endelig levering**; værnet er at rulle det op multiplikativt på tværs af hvert trin som rullet gennemløbsudbytte.
- **Taktid omformulerer kapacitet omkring reel kundeefterspørgsel**, ikke eksisterende tempo, og parrer direkte med udnyttelse (emne 2.7) og flowbelastning (emne 2.4).
- At omforme softwarelevering i klassiske Lean-termer er ofte den hurtigste måde at komme i forbindelse med **eksisterende procesforbedringsekspertise og -finansiering**, der allerede findes i en stor organisation.

## Kilder og videre læsning

- Rother, Mike, og John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., og Daniel T. Jones. *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones og Daniel Roos. *The Machine That Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill, 2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press, 1988.
