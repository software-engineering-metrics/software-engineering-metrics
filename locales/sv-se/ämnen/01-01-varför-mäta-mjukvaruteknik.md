# 1.1 Varför mäta mjukvaruteknik

## Översikt och motivation

Mjukvaruteknik motstår mätning på ett sätt som tillverkningsindustrin inte gör. En fabrikslinje producerar identiska enheter, så att räkna dem säger något verkligt. Mjukvaruarbete producerar unika artefakter under ständigt föränderliga krav, så ett naivt antal, av commits, av rader, av stängda ärenden, säger nästan ingenting om levererat värde. Det glappet mellan svårigheten att mäta mjukvaruarbete och det mycket verkliga behovet av att veta om det går bra är där hela den här boken lever. Det här kapitlet handlar om att stänga det glappet ärligt: inte genom att låtsas att mjukvaruarbete är lika räknebart som prylar, utan genom att vara precis om vad mätning kan och inte kan göra för en ingenjörsorganisation.

Mätning finns för att besvara frågor en organisation annars inte kan besvara med säkerhet: blir vår leverans snabbare eller långsammare, förbättras kvaliteten eller försämras den, bränner ingenjörer ut sig, betalar den här investeringen sig. Utan mätetal besvaras de frågorna av den som talar mest självsäkert i rummet, oftast den mest seniora eller mest övertygande personen närvarande, och det svaret är ofta fel. [Mjukvaruteknik](https://en.wikipedia.org/wiki/Software_engineering)-team som hoppar över mätning undviker inte att göra bedömningar om sin egen prestation. De gör bara de bedömningarna på magkänsla, anekdoter och nyhetsbias istället för belägg.

För stora team slutar detta vara trevligt att ha och blir strukturellt. Ett team på sex personer kan dela en mental modell av hur det går genom daglig konversation. En avdelning på sexhundra, utspridd över tidszoner och affärsenheter, kan inte det. På den skalan är en delad, betrodd uppsättning tal det enda praktiska substitutet för den informella medvetenhet ett litet team får gratis. Ledningen i stora företag behöver mätetal för att fördela investeringar mellan dussintals team som konkurrerar om samma budget. Myndigheters ingenjörsorganisationer behöver mätetal för att visa lagstiftaren och allmänheten att anslagna medel producerade verklig förmåga, inte bara aktivitet. I båda miljöerna är "vi arbetade hårt" inte bevis; ett försvarbart tal är det.

## Nyckelprinciper

- **Mät för att lära, inte för att döma.** Det primära syftet med ett ingenjörsmätetal är att informera ett beslut, inte att betygsätta en person eller ett team.
- **Ett tal utan ett kopplat beslut är dekoration.** Om ingen avläsning av ett mätetal skulle ändra vad du gör härnäst hör det inte hemma på en instrumentpanel.
- **Mätning är ett medel, inte målet.** Målet är bättre mjukvara, levererad mer tillförlitligt, av ett hållbart team. Mätetal finns bara för att tjäna det målet.
- **Varje mätetal har en kostnad.** Instrumentering, granskningstid och den beteendemässiga snedvridningsrisk som täcks i kapitel 1.2 kostar alla något. Ett mätetal måste tjäna tillbaka den kostnaden.
- **Tystnad är också ett beslut.** Att välja att inte mäta något är ett val med konsekvenser, inte ett neutralt standardläge.

## Rekommendationer

### Utgå från beslutet, inte instrumentpanelen

Innan du instrumenterar något, namnge det beslut mätetalet ska informera. "Vi vill veta om vår nya driftsättningspipeline minskade incidentfrekvensen" är en beslutsformad fråga; "låt oss spåra allt verktyget kan exportera" är det inte. Att arbeta bakåt från ett beslut håller uppsättningen mätetal liten och gör varje ruta försvarbar när någon frågar varför den finns. Om du inte kan namnge det beslut ett mätetal skulle informera, bygg det inte än. Kapitel 1.3 går djupare in på utfall-före-output-versionen av den här disciplinen.

### Skilj diagnostisk användning från utvärderande användning

Ett mätetal som används för att diagnostisera ett systemproblem (varför kryper vår ledtid uppåt) beter sig helt annorlunda än samma mätetal använt för att utvärdera en person eller ett team (vems ledtid är sämst). Det första bjuder in till utredning och förbättring. Det andra bjuder in till döljande och manipulation, eftersom talet nu har en konsekvens för rykte eller ekonomi kopplad till sig. Bestäm explicit, skriftligt, vilken användning ett mätetal är till för, och låt aldrig ett diagnostiskt mätetal glida in i utvärderande användning utan att medvetet ompröva risken. Den här distinktionen återkommer ständigt genom boken och formaliseras i avsnittet om icke-mål i metrikstadgan som beskrivs i kapitel 1.4.

### Behandla mätning som en hypotes, inte ett faktum

Ett mätetal är en proxy för något du faktiskt bryr dig om, inte själva saken. Driftsättningsfrekvens är en proxy för leveransförmåga, inte leveransförmåga i sig. Behandla varje mätetal som en hypotes under pågående testning: spårar det här talet fortfarande det vi bryr oss om, eller har världen rört sig och lämnat proxyn kvar? Återkom till den frågan med jämna mellanrum istället för att anta att ett mätetal som var välvalt för två år sedan fortfarande är välvalt idag, särskilt när verktyg, teamstruktur eller (se del 7) själva arbetets natur förändras.

### Gör frånvaron av mätning synlig

I stora organisationer är det riskfyllda glappet inte ett dåligt mätetal, det är ett område ingen mäter alls eftersom det är svårt att instrumentera: utvecklarupplevelse, friktion i beroenden mellan team, erosionen av institutionell kunskap. Namnge de här glappen explicit i din metrikstadga istället för att låta dem förbli osynliga som standard. En organisation som vet vad den inte mäter, och varför, är i en mycket starkare position än en som tyst har glömt att de områdena existerar.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Tung instrumentering, många mätetal | Bred synlighet, färre blinda fläckar | Panelutmattning, större manipuleringsyta, högre underhållskostnad |
| Minimala, beslutsdrivna mätetal | Fokus, lågt omkostnad, varje mätetal försvarbart | Risk att missa ett framväxande problem utanför den valda uppsättningen |
| Mätetal endast för diagnos | Uppmuntrar ärlig rapportering och utredning | Ledningen kan ändå använda dem utvärderande informellt |
| Mätetal kopplade till individuell utvärdering | Känns ansvarsutkrävande, lätt att förklara för chefer | Starkt manipuleringsincitament; skadar förtroende; mäter oftast fel sak |

Den centrala spänningen är **täckning kontra fokus**, och den skärps av **diagnos kontra bedömning**. För få mätetal och du utvecklar blinda fläckar som bara syns som en kris; för många och ingen kan agera på något av dem, medan varje mätetal du kopplar utvärderande vikt till bjuder in snedvridning. Lös det genom att börja minimalt och beslutsdrivet, lägg bara till ett mätetal när ett specifikt, namngivet beslut behöver det, och genom att försvara den rent diagnostiska gränsen explicit i styrningsarbetet i kapitel 1.4 istället för att låta den eroderas som standard.

## Frågor att diskutera med ditt team

1. **För varje mätetal på vår nuvarande instrumentpanel, vilket beslut skulle en bra respektive dålig avläsning utlösa?** Om båda avläsningarna leder till samma åtgärd, eller till ingen åtgärd alls, är mätetalet dekoration. Gå igenom instrumentpanelen ruta för ruta och tvinga fram ett ärligt svar för var och en. Den här övningen halverar rutinmässigt en uppsvälld instrumentpanel på ett enda möte, eftersom det mesta av svällningen ackumuleras från mätetal ingen någonsin tar bort snarare än mätetal någon medvetet lade till av en anledning som fortfarande håller.

2. **Vilka av våra mätetal används diagnostiskt, och vilka har tyst blivit utvärderande?** Ett mätetal byggt för att förstå en systembegränsning kan glida in i att användas för att rangordna team eller individer utan att någon bestämmer det med avsikt, ofta genom en lättvindig kommentar på ett granskningsmöte som blir vana. När den glidningen väl sker slutar talet vara tillförlitligt, eftersom människor nu har en anledning att få det att se bra ut snarare än att göra det korrekt. Namnge varje mätetals avsedda användning skriftligt och kontrollera nuvarande praxis mot det.

3. **Vad mäter vi inte eftersom det är svårt att instrumentera, och vad kostar det glappet oss?** De farligaste blinda fläckarna är de som aldrig hamnar på en instrumentpanel just eftersom de motstår enkel mätning: friktion i beroenden mellan team, erosionen av institutionell kunskap, eller den tysta ackumuleringen av sköra lösningar. Ta fram en lista över det alla privat oroar sig för men ingen spårar, och var ärlig om varför.

4. **Om vi raderade det här mätetalet imorgon, vem skulle märka det, och vad skulle de förlora?** Ett mätetal ingen skulle sakna är ett mätetal som inte informerar något beslut. Den här frågan avslöjar skenmått som överlever enbart genom tröghet. För en stor organisation med dussintals teaminstrumentpaneler är den här utgallringsdisciplinen lika viktig som disciplinen att lägga till nya mätetal över huvud taget.

5. **Hur mycket kostar varje mätetal på vår instrumentpanel faktiskt att producera och underhålla, inklusive ingenjörstiden bakom instrumenteringen?** Mätetal är inte gratis. Pipelines, instrumentpaneler och granskningstiden som spenderas på att diskutera ett tal bär alla en återkommande kostnad som är lätt att underskatta eftersom den är utspridd över många små uppgifter snarare än en synlig radpost. Ta fram din faktiska instrumenterings- och underhållsinsats och väg den mot beslutsvärdet från fråga 1.

6. **Var har mätning blivit ett substitut för bedömning, och var har bedömning blivit ett substitut för mätning?** Båda misslyckandeformerna är verkliga. Ett team som lägger ut varje beslut på en instrumentpanel förlorar den kontextuella bedömning som fångar det talet missar; ett team som ignorerar tillgänglig data till förmån för den högsta rösten i rummet upprepar just det problem det här kapitlet öppnar med. Målet är mätetal som informerar bedömning, inte mätetal som ersätter den.

## Sektorperspektiv

**Startup.** Med en handfull ingenjörer är det mesta det här kapitlet varnar för, glidning mot utvärderande användning, blinda fläckar, uppsvälld instrumentpanel, lätt att undvika helt enkelt för att alla pratar dagligen. Risken är den motsatta: att hoppa över mätning helt eftersom det känns som en omkostnad teamet inte har råd med. Välj två eller tre beslutsformade frågor (levererar vi tillräckligt snabbt, håller kvaliteten) och instrumentera bara dem.

**Litet företag.** Utan en dedikerad plattform eller dataavdelning, luta dig mot vad dina befintliga verktyg redan rapporterar istället för att bygga anpassad instrumentering. En betalningsleverantörs instrumentpanel, ett supportverktygs responsmätetal, och din CI-leverantörs byggd historik täcker vanligtvis de beslut som betyder mest. Motstå frestelsen att köpa en dedikerad plattform för ingenjörsanalys innan du har bevisat att du kommer agera på vad den berättar.

**Stort företag.** Kärnrisken är mätetal som tyst glider från diagnostisk till utvärderande användning när de rullas upp genom ledningslager, och instrumentpaneler som växer genom tillökning eftersom ingen äger jobbet att gallra dem. Styrning (kapitel 1.4) är inte valfritt på den här skalan. Standardisera definitioner mellan affärsenheter, och bygg en regelbunden utfasningsgranskning in i själva metrikprogrammet.

**Myndighet.** Mätetal här bär ofta lagstadgad eller budgetmässig tyngd, vilket höjer både värdet av att få dem rätt och kostnaden för att få dem fel. Ett tal rapporterat till en lagstiftare eller en tillsynsnämnd behöver en dokumenterad metodik, en stabil definition mellan rapporteringsperioder, och ärlighet om sina begränsningar. Behandla "vi mäter för närvarande inte det här" som ett svar du kan behöva försvara, inte en privat brist att dölja.

## Exempel

**Stort företag.** Ett globalt försäkringsbolags ingenjörsorganisation hade växt till över sextio scrumteam, vart och ett med sin egen informella instrumentpanel, ingen jämförbar med någon annan. Ledningen kunde inte besvara en grundläggande fråga: vilken av våra tio strategiska plattformsinvesteringar levererar faktiskt snabbare mjukvara. Lösningen var inte fler mätetal, det var färre, bättre: organisationen definierade en delad, beslutsdriven kärna av DORA-mätetal (kapitel 2.10) beräknade identiskt överallt från samma pipelinedata, fasade ut fyrtio teamspecifika instrumentpaneler, och kunde äntligen jämföra investeringsområden på en gemensam grund inom två kvartal.

**Myndighet.** En nationell skattemyndighets digitala serviceteam hade blivit ombett av en tillsynsnämnd att visa avkastningen på ett flerårigt moderniseringsprogram. Teamets befintliga mätetal var helt interna och aktivitetsbaserade: avklarade storypoäng, avslutade sprintar. Inget av det besvarade nämndens faktiska fråga. Teamet byggde istället en liten uppsättning utfallsmätetal, medianvärdet för tiden att lösa ett medborgarärende, adoptionsgrad för den digitala kanalen, och andel läckta defekter i det nya systemet, och rapporterade de kvartalsvis med en dokumenterad metodik. Nämndens frågor skiftade från "bevisa att ni arbetar" till "hur replikerar vi det här på nästa myndighet," vilket är det utfall en välvald uppsättning mätetal är tänkt att producera.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på medveten mätning är beslutskvalitet. En organisation som kan säga, med belägg, "vår ledtid förbättrades 30 % efter plattformsinvesteringen" kan försvara den investeringen, upprepa vad som fungerade, och sluta med vad som inte gjorde det. En organisation som förlitar sig på anekdoter kan inte göra något av det med säkerhet, och hamnar i att omförhandla samma argument varje budgetcykel eftersom ingen kan peka på ett tal båda sidor litar på.

Kostnaden för mätning är inte instrumentpanelen. Det är den pågående disciplinen: instrumentering, definitionsunderhåll, och den periodiska utgallring det här kapitlet rekommenderar. Den totala ägandekostnaden är verklig men blygsam jämfört med kostnaden för alternativet, som är en stor organisation som fattar beslut värda miljontals dollar på grundval av vem som argumenterade mest övertygande i rummet. Avkastningen på ett metrikprogram är inte mätetalen själva; det är besluten som blir bättre på grund av dem.

## Antimönster och fallgropar

- **Att mäta allt verktyget exporterar:** förvandlar en instrumentpanel till brus och bjuder in manipulation över en enorm yta med inget motsvarande beslutsvärde.
- **Mätetal utan namngivet beslut:** dekoration som kostar underhållsinsats och berättar inget handlingsbart för någon.
- **Tyst glidning från diagnostisk till utvärderande användning:** det enskilt snabbaste sättet att förstöra förtroendet för ett tal.
- **Att behandla ett mätetal som faktum snarare än hypotes:** en proxy som var rätt för två år sedan kan vara fel idag, och ingen kontrollerar.
- **Att förväxla frånvaron av ett dåligt tal med närvaron av ett bra:** ett mätetal du aldrig tittar på kan inte berätta att något är fel.
- **Att bygga mätningsförmåga innan man bestämt vad som ska beslutas:** instrumentering på jakt efter en fråga slösar verklig ingenjörstid.

## Mognadsmodell

- **Nivå 1, Initiera:** Mätetal, om de alls finns, är ad hoc, personliga för den som byggde dem, och ingen kan säga vilket beslut något av dem informerar.
- **Nivå 2, Utveckla:** En grundläggande uppsättning mätetal finns för vissa team, mestadels kopierad från ett ramverk eller ett verktygs standardinställningar, utan en tydlig koppling tillbaka till ett beslut.
- **Nivå 3, Standardisera:** Varje spårat mätetal har ett dokumenterat syfte och en explicit klassificering som diagnostisk eller utvärderande, konsekvent tillämpad genom organisationen.
- **Nivå 4, Hantera:** Mätetal granskas med jämna mellanrum mot de beslut de informerar; mätetal som slutar tjäna sin plats fasas ut, och hela uppsättningen mäts för kostnad lika väl som värde.
- **Nivå 5, Orkestrera:** Mätning är en levande förmåga: organisationen identifierar rutinmässigt sina egna blinda fläckar, testar om dess proxyer fortfarande spårar verkligheten, och behandlar själva metrikprogrammet som något att förbättra, inte bara underhålla.

## Diskussionsidéer

1. Vilket mätetal på vår instrumentpanel skulle vi ha svårast att försvara att behålla om vi fick frågan idag?
2. Vilket beslut har vi fattat det senaste kvartalet med hjälp av ett mätetal, snarare än en åsikt?
3. Var i vår organisation har ett diagnostiskt mätetal tyst blivit utvärderande?
4. Vad är vi rädda för att mäta, och varför?
5. Om vårt metrikprogram försvann imorgon, vilka beslut skulle bli sämre?

## Viktiga slutsatser

- Mätning finns för att tjäna **beslut**, inte för att existera för sin egen skull; ett mätetal utan kopplat beslut är dekoration.
- Håll **diagnostisk** användning separat från **utvärderande** användning, skriftligt, och vaka över tyst glidning mellan dem.
- Behandla varje mätetal som en **hypotes** om vad det representerar, inte ett fastslaget faktum, och återkom till den hypotesen med jämna mellanrum.
- Tystnad, att välja att inte mäta något, är i sig ett beslut med konsekvenser; gör blinda fläckar synliga istället för att låta dem förbli osynliga som standard.
- Den totala kostnaden för ett metrikprogram är verklig; väg den explicit mot beslutsvärdet varje mätetal ger.

## Källor och vidare läsning

- *Accelerate: The Science of Lean Software and DevOps*, av Nicole Forsgren, Jez Humble och Gene Kim (forskningsgrunden för utfallsbaserad ingenjörsmätning).
- *How to Measure Anything*, av Douglas W. Hubbard (ett generellt ramverk för att kvantifiera saker som verkar omätbara).
- *Measuring and Managing Performance in Organizations*, av Robert D. Austin (den grundläggande analysen av dysfunktion mätning kan introducera i en organisation).
- *Thinking, Fast and Slow*, av Daniel Kahneman (de kognitiva snedvridningar som gör obiträdd bedömning till ett opålitligt substitut för mätning).
- Googles DevOps Research and Assessment-program (DORA), [dora.dev](https://dora.dev/) (den pågående State of DevOps-forskning den här boken bygger på genomgående).
