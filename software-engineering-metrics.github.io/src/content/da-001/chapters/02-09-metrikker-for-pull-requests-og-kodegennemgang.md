# 2.9 Metrikker for pull requests og kodegennemgang

## Overblik og motivation

[Kodegennemgang](https://en.wikipedia.org/wiki/Code_review) er som regel det enkeltstående største bidrag til ventetid i opdelingen af cyklustid fra emne 2.6, og det er også det trin, der mest direkte ligger under et teams egen kontrol at forbedre, i modsætning til en delt platformsflaskehals eller en ekstern afhængighed. Dette emne dækker de specifikke metrikker, der lever inde i gennemgangstrinnet: tid til første gennemgang, størrelse på pull requests, antal gennemgangsrunder og fordelingen af gennemgangsbelastning, og hvordan man bruger dem til at forbedre gennemgangshastigheden uden at ofre den faktiske kvalitetsgevinst, gennemgang skal give.

Den risiko, dette emne er mest opmærksom på, er en, denne bog endnu ikke har dækket direkte: at optimere gennemgangshastighed kan i det stille udhule gennemgangskvaliteten, hvis det gøres skødesløst. Et team, der halverer sin tid til første gennemgang ved at godkende alt med en gummistempel, har forbedret en metrik, mens det ødelægger praksissens faktiske værdi. Hver anbefaling i dette emne er skrevet med den afvejning for øje, fordi metrikker for pull requests er blandt de letteste i denne bog at manipulere på en måde, der ser godt ud på et dashboard, mens det gør den underliggende kodebase målbart værre.

For store teams afslører gennemgangsmetrikker problemer med belastningsfordeling, der ellers er usynlige: et lille antal seniore ingeniører, der absorberer en uforholdsmæssig stor andel af gennemgangsbelastningen, et specifikt team eller kodeområde, hvor gennemgange konsekvent går i stå, eller et mønster af for store pull requests, der gør grundig gennemgang praktisk talt umulig uanset de gennemgåendes flid. Disse mønstre forværres i skala langt mere end i et lille team, hvor alle direkte kan se ubalancen uden at have brug for en metrik til at afsløre den.

## Nøgleprincipper

- **Tid til første gennemgang er som regel det største håndtag, ikke selve gennemgangens grundighed.** Det meste af forsinkelsen kommer af, at en pull request venter på at blive set på, ikke af at gennemgangssamtalen tager lang tid, når den først er begyndt.
- **Mindre pull requests bliver gennemgået hurtigere og mere grundigt, ikke blot hurtigere.** Størrelse er et løftepunkt for både hastighed og kvalitet samtidigt.
- **Gennemgangshastighed og gennemgangskvalitet er ikke automatisk i spænding, men de kan byttes skødesløst.** Værn eksplicit mod den byttehandel.
- **Ubalance i gennemgangsbelastning er almindelig og som regel usynlig uden en metrik.** Et lille antal personer absorberer ofte en uforholdsmæssig andel.
- **Disse metrikker er udsat for risikoen for manipulation med gummistempel.** En hurtig godkendelse uden reel granskning underminerer hele formålet med gennemgang.

## Anbefalinger

### Følg tid til første gennemgang som den primære hastighedsmetrik

Mål intervallet fra en pull request åbnes til en gennemgåendes første substantielle kommentar eller godkendelse, instrumenteret automatisk fra din versionsstyringsplatform. Det er som regel det dominerende bidrag til ventetid inden for gennemgangstrinnet (emne 2.5, emne 2.6), og at forbedre det, gennem klarere normer for tildeling af gennemgang, notifikationspraksis eller dedikerede tidsblokke til gennemgang, giver typisk den største enkeltstående forbedring af den samlede cyklustid, der er tilgængelig for et team.

### Følg størrelsen på pull requests, og tilskynd aktivt til mindre ændringer

Mål ændrede linjer eller berørte filer pr. pull request, og behandl en vedvarende stor medianstørrelse som et signal, der er værd at adressere direkte. Mindre pull requests bliver gennemgået hurtigere, gennemgået mere grundigt (en gennemgående kan faktisk holde hele ændringen i hovedet) og er lettere at rulle tilbage, hvis noget går galt, hvilket hænger direkte sammen med princippet om batchstørrelse bag udrulningsfrekvens i emne 2.10. Tilskynd til at dele store ændringer op i en sekvens af mindre, uafhængigt gennemgåelige pull requests, hvor arbejdet tillader det.

### Overvåg fordelingen af gennemgangsbelastning eksplicit

Følg antallet af gennemførte gennemgange pr. person over et rullende vindue, og hold specifikt øje med, at et lille antal personer absorberer en uforholdsmæssig andel. Det mønster er almindeligt, falder ofte på de mest seniore eller mest betroede ingeniører og skaber både en flaskehals (deres tilgængelighed begrænser hele teamets gennemgangsgennemstrømning) og en risiko for udbrændthed (emne 3.2 dækker trivselsmetrikker i større dybde). Roter gennemgangsansvaret bevidst frem for at lade det koncentrere sig som standard omkring den, der er hurtigst til at svare.

### Værn eksplicit mod risikoen for manipulation med gummistempel

Par tid til første gennemgang med et kvalitetssignal: andelen af fejl eller hændelser, der kan spores tilbage til ændringer, der blev godkendt uden gennemgangskommentarer, eller andelen af rettelser efter fletning, der er nødvendige for nyligt gennemgået kode. Et team, der forbedrer gennemgangshastigheden ved at godkende uden reel granskning, bør se dette værn forringes, hvilket netop er parringsprincippet fra emne 1.2 anvendt på denne specifikke metrikfamilie. Jagt aldrig gennemgangshastighed uden denne modmetrik i sigte.

### Brug antallet af gennemgangsrunder til at opdage friktion, ikke til at dømme enkeltpersoner

Antallet af gennemgangsrunder, en pull request gennemgår, før den flettes, kan signalere reel friktion, uklare krav, uenighed om tilgang, uensartede forventninger til stil, der er værd at undersøge på procesniveau. Undgå at bruge dette tal til direkte at dømme individuelle forfattere eller gennemgående; et højt antal runder er oftere et system- eller kommunikationssignal end et personligt, og at behandle det som et individuelt scorecard risikerer netop den evaluerende afdrift, emne 1.1 advarer imod.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Rent at optimere for tid til første gennemgang | Hurtigt, klart signal, let at instrumentere | Kan give incitament til overfladisk gennemgang med gummistempel, hvis det ikke værnes |
| Rent at optimere for mindre pull requests | Forbedrer både hastighed og grundighed samtidigt | Ikke alt arbejde lader sig dele rent op i små trin |
| At rotere gennemgangsbelastning jævnt | Reducerer flaskehals og risiko for udbrændthed | Kan sinke gennemgang af specialiseret, svært gennemgåelig kode, der kræver særlig ekspertise |
| At koncentrere gennemgang hos seniore ingeniører | Dyb domæneekspertise anvendt konsekvent | Skaber en flaskehals og risiko for udbrændthed over tid |

Den centrale spænding er **hastighed versus dybde i granskning**. Hver teknik i dette emne til at speede gennemgang op, hurtigere første svar, mindre pull requests, mere fordelt gennemgangsbelastning, bærer en vis risiko for at bytte reel granskning væk, hvis de forfølges uden det kvalitetsværn, dette emne anbefaler. Løs spændingen ved at parre hver hastighedsmetrik med et kvalitetssignal, fulgt over samme periode, så et team kan skelne reel procesforbedring fra en i det stille eroderende gennemgangsstandard.

## Spørgsmål at drøfte med dit team

1. **Hvad er vores faktiske tid til første gennemgang, og hvor stor en del af vores samlede cyklustid optager gennemgangstrinnet?** Træk det reelle tal frem i stedet for at støtte dig til indtryk; ventetid på gennemgang er ofte større, end teams antager, netop fordi det er let at undervurdere tid brugt på at vente frem for aktivt at arbejde.

2. **Hvad er vores mediane størrelse på pull requests, og hvor meget af vores gennemgangsforsinkelse ville skrumpe, hvis den størrelse kom ned?** Store pull requests er både langsommere at gennemgå og mere tilbøjelige til at få overfladisk gennemgang, simpelthen fordi en gennemgående ikke kan holde det hele i hovedet på én gang. Se på jeres faktiske størrelsesfordeling, ikke kun medianen.

3. **Er gennemgangsbelastningen koncentreret hos et lille antal personer, og hvad ville der ske med vores gennemgangsgennemstrømning, hvis en af dem var utilgængelig i to uger?** Spørgsmålet afslører både en risiko for flaskehals og en risiko for udbrændthed på samme tid. Træk faktiske data om gennemgangsbelastning frem i stedet for at støtte dig til indtryk.

4. **Har vi nogensinde forbedret en metrik for gennemgangshastighed på en måde, der, ved nærmere eftertanke, reducerede den faktiske granskning?** Vær ærlig her; det er netop den risiko med gummistempel, dette emne navngiver, og det er let at glide ind i uden nogen bevidst beslutning om det.

5. **Hvad signalerer et højt antal gennemgangsrunder som regel på vores team: reel uenighed, uklare krav eller uensartede forventninger til stil?** Se på en stikprøve af pull requests med usædvanligt højt antal runder, og diagnosticér det faktiske mønster, i stedet for at antage, at det afspejler dårligt på enten forfatteren eller den gennemgående.

6. **Har vi et kvalitetsværn parret med vores metrikker for gennemgangshastighed, eller følger vi hastighed isoleret?** Hvis det ærlige svar er, at der ikke findes noget sådant værn, er det et hul, der er værd at lukke, før gennemgangshastigheden presses yderligere, efter emne 1.2's parringsprincip.

## Sektorperspektiv

**Startup.** Gennemgang er ofte hurtig som standard med et lille team, undertiden næsten for hurtig, gennemgang med en enkelt godkender og minimal granskning, fordi alle stoler på alle. Den risiko, man skal holde øje med, når teamet vokser, er, at gennemgangskvaliteten ikke skalerer med teamstørrelsen, da uformel tillid, der virkede for fem ingeniører, ikke automatisk virker for halvtreds.

**Mindre virksomhed.** De fleste versionsstyringsplatforme rapporterer statistik om tid til fletning og antal gennemgange fra start; brug dem frem for at bygge tilpasset instrumentering. Den vigtigste disciplin, der er værd at indføre, er blot at bemærke, hvis gennemgangsbelastningen i det stille har koncentreret sig om en eller to personer, efterhånden som teamet er vokset.

**Stor virksomhed.** Ubalance i gennemgangsbelastning og flaskehalse i specialviden er især almindelige her, hvor dyb domæneekspertise i et kritisk system kan koncentrere gennemgangsansvaret hos en lille gruppe uanset teamstørrelse. Investér i bevidst vidensdeling og rotation af gennemgang for at sprede ekspertisen og reducere både flaskehalsen og bus-faktor-risikoen ved, at ekspertisen bor i for få mennesker.

**Offentlig sektor.** Gennemgangsprocesser har her ofte compliancevægt ved siden af kvalitetsmål, hvilket kan gøre pull requests større og gennemgange langsommere af design. Hvor reelle compliancekrav kræver grundig gennemgang, så fokusér forbedringsindsatsen på at reducere ventetid (hurtigere tildeling af gennemgang, klarere triage) frem for at gå på kompromis med gennemgangens faktiske dybde, og dokumentér afvejningen eksplicit, hvis granskningen af regulatoriske årsager skal forblive tung.

## Eksempler

**Stor virksomhed.** Et cybersikkerhedsfirmas ingeniørorganisation fandt, at en håndfuld principal-ingeniører gennemførte over 40 % af alle kodegennemgange i en organisation på to hundrede personer, en ubalance ingen havde målt direkte, før data om gennemgangsbelastning blev trukket. Koncentrationen var både en flaskehals, da de ingeniørers tilgængelighed begrænsede gennemgangsgennemstrømningen for hele organisationen, og en risiko for udbrændthed, flagget separat af en engagementsundersøgelse (emne 3.2). Organisationen indførte et struktureret program for rotation af gennemgang parret med målrettede vidensdelingssessioner, og inden for to kvartaler havde gennemgangsbelastningen spredt sig til en langt bredere gruppe, hvor tid til første gennemgang forbedredes som en direkte sidegevinst af den reducerede flaskehals.

**Offentlig sektor.** En skattemyndigheds ingeniørteam, under pres for at forbedre leveringshastigheden, satte et mål om at halvere tid til første gennemgang. Inden for ét kvartal blev målet nået, men en efterfølgende kvalitetsrevision fandt en kraftig stigning i pull requests til rettelse af fejl efter fletning, koncentreret i ændringer, der var blevet godkendt med en enkelt, kort kommentar. Teamets løsning parrede hastighedsmålet med et eksplicit kvalitetsværn, andelen af rettelser efter fletning, der var nødvendige inden for to uger efter en gennemgang, og genuddannede teamet i, hvad en substantiel gennemgang faktisk krævede, hvilket genoprettede reel granskning, mens det meste af hastighedsforbedringen blev bevaret, som var kommet af bedre tildeling af gennemgang og mindre pull requests.

## Business case: motiver, ROI og TCO

Afkastet af velstyrede gennemgangsmetrikker er hurtigere levering uden at ofre kvaliteten, hvilket er en sjælden kombination: de fleste leveringsforbedringer bytter hastighed mod risiko et sted, men forbedringer i gennemgangstrinnet, mindre pull requests, bedre belastningsfordeling, hurtigere første svar, forbedrer reelt begge dele samtidigt, når de forfølges med det kvalitetsværn, dette emne anbefaler. Eksemplet med cybersikkerhedsfirmaet ovenfor er typisk: at rette en flaskehals forbedrede hastigheden, mens den underliggende gennemgangskvalitet, om noget, blev bedre, efterhånden som ekspertisen spredtes bredere.

De samlede ejeromkostninger er lave: de fleste af disse metrikker kommer direkte fra eksisterende data på versionsstyringsplatformen med minimal yderligere instrumentering, og de procesændringer, de peger mod, rotation af gennemgang, tilskyndelse til mindre pull requests, koster for det meste disciplin frem for værktøjsinvestering.

## Antimønstre og faldgruber

- **At optimere tid til første gennemgang uden et parret kvalitetsværn:** inviterer til godkendelse med gummistempel, der underminerer gennemgangens formål.
- **At ignorere koncentration af gennemgangsbelastning:** skaber både en flaskehals og en risiko for udbrændthed, der forbliver usynlig, indtil den måles.
- **At behandle antallet af gennemgangsrunder som et individuelt scorecard:** oftere et system- eller kommunikationssignal end et personligt.
- **At acceptere vedvarende store pull requests som uundgåelige:** de fleste store ændringer kan deles længere op, end teams oprindeligt antager.
- **At anvende ensartet gennemgangsdybde uanset ændringens risiko:** spilder granskning på ændringer med lav risiko, mens højrisikoændringer potentielt granskes for lidt.
- **At måle gennemgangshastighed, men aldrig kontrollere, om den reelle granskning faldt sammen med den:** den enkeltstående mest almindelige måde, denne metrikfamilie bliver manipuleret utilsigtet.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Gennemgangsmetrikker følges ikke; fordelingen af gennemgangsbelastning og størrelsen på pull requests er usynlige.
- **Niveau 2, Udvikl:** Nogle data om gennemgangshastighed findes fra platformens standardindstillinger, men der er intet kvalitetsværn og ingen aktiv styring af gennemgangsbelastning.
- **Niveau 3, Standardisér:** Tid til første gennemgang, størrelse på pull requests og gennemgangsbelastning følges konsekvent, med et eksplicit kvalitetsværn parret mod hastighedsforbedringer.
- **Niveau 4, Styr:** Gennemgangsbelastningen genbalanceres aktivt gennem rotation og vidensdeling; mønstre i antal runder undersøges på procesniveau frem for individniveau.
- **Niveau 5, Orkestrér:** Metrikker for gennemgangstrinnet informerer direkte procesinvesteringer, og organisationen kan påvise samtidig forbedring af både gennemgangshastighed og gennemgangsrelaterede kvalitetsresultater over en vedvarende periode.

## Idéer til drøftelse

1. Hvad er vores nuværende mediane tid til første gennemgang, og hvor går den tid faktisk hen?
2. Er vores gennemgangsbelastning koncentreret hos et lille antal personer, og hvad er risikoen, hvis én er utilgængelig?
3. Har vi nogensinde forbedret gennemgangshastigheden på bekostning af reel granskning, selv utilsigtet?
4. Hvad er vores mediane størrelse på pull requests, og hvor meget mindre kunne de fleste ændringer realistisk være?
5. Behandler vi et højt antal gennemgangsrunder som et systemsignal eller en individuel dom?

## Vigtigste pointer

- **Tid til første gennemgang** er som regel det største enkeltstående håndtag i gennemgangstrinnet, mere end selve gennemgangssamtalens længde.
- **Mindre pull requests** forbedrer både gennemgangshastighed og gennemgangens grundighed samtidigt.
- **Ubalance i gennemgangsbelastning** er almindelig og som regel usynlig uden direkte måling; den skaber både en flaskehals og en risiko for udbrændthed.
- Par hver metrik for gennemgangshastighed med et eksplicit **kvalitetsværn** for at fange den risiko for manipulation med gummistempel, denne metrikfamilie er særligt udsat for.
- Brug **antallet af gennemgangsrunder** til at diagnosticere friktion på systemniveau, ikke til at dømme individuelle forfattere eller gennemgående.

## Kilder og videre læsning

- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (praksis for kodegennemgang og deres forhold til leveringspræstation).
- *Modern Code Review*-forskning af Alberto Bacchelli og Christian Bird (empirisk undersøgelse af praksis for kodegennemgang i skala).
- *Peer Reviews in Software: A Practical Guide*, af Karl E. Wiegers (design af gennemgangsprocesser og deres afvejninger).
- *The Principles of Product Development Flow*, af Donald G. Reinertsen (ræsonnement om batchstørrelse anvendt på størrelsen af pull requests).
