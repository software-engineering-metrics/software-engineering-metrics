# 3.4 Aktivitetsmetrikker og deres grænser

## Overblik og motivation

**Aktivitet (activity)**, A'et i SPACE (emne 3.1), tæller volumen af ingeniørarbejde, der kan observeres fra systemtelemetri: commits, åbnede pull requests, ændrede kodelinjer, efterladte kommentarer i kodegennemgang. Det er den letteste SPACE-dimension at måle, fordi hver eneste af disse begivenheder allerede logges automatisk af de værktøjer, ingeniørteams bruger dagligt, og netop den lethed ved måling er det, der gør denne dimension til den farligste at overvægte. Aktivitet er et reelt, legitimt signal, når den bruges med omhu. Brugt som en selvstændig produktivitetsstedfortræder er den den mest manipulerede, mest vildledende metrikfamilie i hele historien om måling af [softwareudvikling](https://en.wikipedia.org/wiki/Software_engineering).

Kerneproblemet er, at aktivitet måler bevægelse, ikke værdi. Et antal commits skelner ikke mellem en commit, der løste et svært problem elegant, og en commit, der delte én meningsfuld ændring op i fem for at se mere produktiv ud (emne 1.2's substitutionsmanipulation, anvendt direkte på denne metrikfamilie). Ændrede kodelinjer belønner ordrigdom frem for den langt mere værdifulde evne til at slette unødvendig kode. En ingeniør, der bruger en hel dag på dyb, uafbrudt tænkning, før vedkommende skriver ti elegante, velafprøvede linjer, ser mindre "aktiv" ud efter disse metrikker end en, der hvert tyvende minut committer overfladiske, ugennemgåede ændringer, selv om den første meget ofte producerer langt mere reel værdi.

For store teams er fristelsen til at bruge aktivitetsmetrikker til individuel vurdering konstant og veldokumenteret, fordi aktivitet er let at tilskrive en bestemt person og let at beregne automatisk, i modsætning til de sværere, mere ærlige signaler i de andre SPACE-dimensioner. Dette emne findes specifikt for at navngive den fristelse og give teams sprog og belæg til at modstå den, for når en organisation først begynder individuelt at rangordne ingeniører efter antal commits eller kodelinjer, er skaden på samarbejde, kodekvalitet og moral veldokumenteret og svær at vende.

## Nøgleprincipper

- **Aktivitet måler bevægelse, ikke værdi.** Det er et legitimt kontekstuelt signal, aldrig en selvstændig produktivitetsstedfortræder.
- **Det er den historisk mest misbrugte metrikfamilie i måling af softwareudvikling.** Behandl den historie som en advarsel, ikke en tilfældighed.
- **Individuel rangering efter aktivitet er næsten altid skadelig.** Den skader samarbejdet, belønner synlig travlhed og inviterer til manipulation næsten med det samme.
- **Aktivitetsdata er mest nyttige samlet, som kontekst for andre dimensioner,** ikke som et selvstændigt signal om en enkelt person eller et enkelt team.
- **Dybt, værdifuldt arbejde ser ofte stille ud på et aktivitetsdashboard.** Metrikfamilien er strukturelt skæv over for netop den slags tænkning, der producerer de bedste ingeniørresultater.

## Anbefalinger

### Rangordn eller vurder aldrig enkeltpersoner efter rå aktivitetstal

Det er den enkeltstående sværeste, vigtigste regel i dette emne. Antal commits, kodelinjer og antal pull requests bør aldrig optræde i en individuel præstationssamtale, en sammenlignende rangering eller nogen kontekst, hvor en ingeniørs løn, position eller omdømme afhænger af tallet. Det følger direkte af emne 1.2's princip om eksponering for incitamenter: i det øjeblik aktivitet bliver en individuel metrik med incitament, følger manipulation næsten med det samme, og den resulterende adfærd, at pumpe commits op, dele ændringer trivielt op, undgå dybt, uglamourøst arbejde, der producerer få synlige begivenheder, skader aktivt organisationen.

### Brug aktivitetsdata samlet, som kontekst, ikke som en dom

Aktivitetsdata bliver reelt nyttige, når de aggregeres på teamniveau og læses sammen med de andre SPACE-dimensioner: et kraftigt fald i aktivitet i antal commits på teamniveau, der falder sammen med en stigning i tilfredshed, kan indikere, at teamet endelig havde luft til at tænke dybt og betale teknisk gæld af, et positivt mønster, ikke et negativt. Læst isoleret ser det samme fald alarmerende ud. Kontekst fra de andre dimensioner er det, der gør aktivitetsdata fortolkelige frem for vildledende.

### Foretræk kvalitetsnære aktivitetssignaler frem for rå volumen

Hvor aktivitetsdata overhovedet er nyttige, så foretræk signaler justeret for kvalitet frem for rå optællinger: størrelsen på pull requests i forhold til gennemgangens dybde (emne 2.9), eller forholdet mellem ny kode og fjernet kode, som kan afsløre, om et team ophober kompleksitet eller aktivt forenkler. Disse justerede signaler er stadig data i aktivitetsdimensionen, men modstår den groveste manipulation, som rå optællinger inviterer til.

### Hold specifikt øje med mønstret substitutionsmanipulation i aktivitetsdata

Den mest almindelige måde, aktivitetsmetrikker bliver manipuleret på, er netop emne 1.2's substitutionsmønster: at dele reelt meningsfuldt arbejde op i mange små, trivielle begivenheder for at pumpe et antal op. Hvis hyppigheden af commits eller pull requests stiger, mens ændringernes underliggende kompleksitet eller størrelse falder kraftigt, så undersøg det, før du krediterer en reel produktivitetsforbedring, med den samme diagnostiske disciplin, emne 2.10 anbefaler for udrulningsfrekvens.

### Navngiv og modvirk eksplicit aktivitetsteater

**Aktivitetsteater (activity theater)** er arbejde udført, bevidst eller ubevidst, primært fordi det er synligt og tællbart frem for fordi det er værdifuldt: hyppige små commits, iøjnefaldende aktivitet sent om natten eller synlig travlhed i delte kanaler. At navngive dette mønster eksplicit over for dit team, og at være åben om, at ledelsen ikke bruger rå aktivitet til at bedømme bidrag, fjerner meget af incitamentet til, at det overhovedet opstår.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Individuel rangering efter aktivitet | Enkel, let at beregne, føles direkte handlingsrettet | Manipuleres næsten med det samme; skader samarbejde og moral; måler det forkerte |
| Ingen aktivitetsmåling overhovedet | Undgår risikoen for misbrug helt | Mister et reelt nyttigt kontekstuelt signal til at opdage mønstre på teamniveau |
| Samlet aktivitet på teamniveau, læst i kontekst | Giver nyttig kontekst uden individuel risiko | Kræver disciplin at fortolke sammen med andre dimensioner frem for isoleret |
| Kvalitetsjusterede aktivitetssignaler | Modstår den groveste manipulation af rå optællinger | Mere komplekse at beregne og forklare end en simpel optælling |

Den centrale spænding er **nytteværdi versus risiko for misbrug**. Aktivitetsdata, læst omhyggeligt samlet og i kontekst, er reelt nyttige til at opdage mønstre som et uholdbart tempo eller et team, der i det stille finder plads til at tage fat på teknisk gæld. De samme data, brugt som et individuelt scorecard, er næsten ensartet skadelige. Løs spændingen ikke ved helt at undgå aktivitetsdata, men ved at bygge en hård organisatorisk regel mod individuel brug, mens man tillader og endda tilskynder til gennemtænkt, kontekstualiseret brug på teamniveau.

## Spørgsmål at drøfte med dit team

1. **Er nogen i vores organisation nogensinde blevet vurderet, formelt eller uformelt, ved hjælp af et rå aktivitetstal som commits eller kodelinjer?** Spørg direkte, og vær forberedt på et ubehageligt, men nødvendigt svar; dette misbrug sker ofte i det stille, gennem en henkastet bemærkning fra en leder, uden nogensinde at blive officiel politik.

2. **Hvordan ville aktivitetsteater specifikt se ud på vores team, og har vi set tegn på det?** At navngive den specifikke, plausible form, dette mønster kunne tage på dit eget team, gør det langt lettere at genkende, hvis det begynder at ske.

3. **Når vores aktivitetsdata på teamniveau bevæger sig, fortolker vi dem så sammen med de andre SPACE-dimensioner eller isoleret?** Et fald i aktivitet læst isoleret ser bekymrende ud; det samme fald læst sammen med en forbedring af tilfredshed eller præstation kan ligne et reelt positivt mønster. Kontrollér jeres faktiske gennemgangspraksis mod dette skel.

4. **Har vi nogensinde set en stigning i hyppigheden af commits eller pull requests ledsaget af en skrumpende gennemsnitlig ændringsstørrelse, hvilket tyder på triviel opdeling frem for reel produktivitetsgevinst?** Træk reelle data, og kontrollér for netop dette mønster af substitutionsmanipulation.

5. **Hvordan taler vi i øjeblikket om "hvem der bidrager mest" på vores team, og læner den samtale sig implicit op ad aktivitetsdata selv uden en formel metrik?** Uformel, ikke målt bias mod synlig travlhed kan forme opfattelse og belønning selv uden en eksplicit aktivitetsbaseret politik; bring det ærligt frem.

6. **Hvordan ser reelt værdifuldt, men stille arbejde, dyb tænkning, omhyggeligt design, mentoring, ud på vores team, og hvordan sikrer vi, at det anerkendes, selv om det genererer få synlige aktivitetsdata?** Spørgsmålet er den positive modpart til de foregående: at navngive, hvordan godt, stille arbejde ser ud, hjælper med at beskytte det mod at blive overset til fordel for mere højlydt, mere tællbart arbejde.

## Sektorperspektiv

**Startup.** Med et lille, tæt samarbejdende team er aktivitetsdata som regel synlige uden at have brug for et dashboard overhovedet, og risikoen for individuel rangering, dette emne advarer imod, er mindre sandsynlig, simpelthen fordi alle allerede ved, hvad alle andre arbejder på. Risikoen er i stedet en stifter, der ubevidst favoriserer synligt "travl" adfærd, når vedkommende træffer tidlige beslutninger om ansættelser eller aktier.

**Mindre virksomhed.** Aktivitetsdata fra dine eksisterende værktøjer er fine at kaste et blik på for en generel fornemmelse af teamets gennemstrømning, men stå imod at bruge dem til direkte at sammenligne individuelle bidragydere; et lille teams reelle værdi koncentrerer sig ofte hos få personer, der udfører stille arbejde med høj løftestang, som et syn baseret på antal commits systematisk ville undervurdere.

**Stor virksomhed.** Det er her, fristelsen til individuel rangering er stærkest og mest skadelig, fordi aktivitetsdata er det letteste signal at trække til en præstationsvurderingsproces, der spænder over tusindvis af ingeniører, og presset for at finde *et eller andet* kvantificerbart input er reelt. Byg en eksplicit, kommunikeret, håndhævet politik mod individuel rangering efter aktivitet, og revidér periodisk præstationsvurderingspraksis for at bekræfte, at politikken faktisk følges i praksis, ikke blot er angivet.

**Offentlig sektor.** Aktivitetsmetrikker kan være fristende at citere i en offentlig rapport som belæg for produktivitet ("ti tusind commits i år"), men den slags overskrift er næsten meningsløs og kan invitere netop den forkerte granskning, når en kyndig bedømmer påpeger, at rå aktivitet intet siger om resultater. Rapportér i stedet resultat- og præstationsdata (emne 3.3), og undgå aktivitetstal i enhver eksternt vendt kommunikation.

## Eksempler

**Stor virksomhed.** En softwarevirksomheds ingeniørledelse var, uden formel politik, begyndt uformelt at henvise til individuelle data om commit-hyppighed i drøftelser om forfremmelser. En intern gennemgang, foranlediget af et uafhængigt projekt om analyse af afgang, fandt, at ingeniører, der arbejdede på virksomhedens mest komplekse systemer med højest værdi, og som krævede lange perioder med omhyggeligt designarbejde, før nogen kode blev skrevet, systematisk havde lavere antal commits end ingeniører på simplere, mere inkrementelt udviklede systemer, og i forfremmelsessamtaler subtilt blev stillet ringere som følge heraf. Ledelsen udstedte en eksplicit, kommunikeret politik, der forbød henvisninger til aktivitetstal i præstations- og forfremmelsesdrøftelser, og flyttede forfremmelsesbelægget mod tilgangen med flere signaler for præstation fra emne 3.3.

**Offentlig sektor.** En myndighed for digitale tjenester, under pres for at påvise produktivitet over for et lovgivende tilsynsudvalg, foreslog først at rapportere det samlede antal commits og skrevne kodelinjer på tværs af sit ingeniørprogram som belæg for leveret værdi. En intern teknisk rådgiver gjorde indsigelse og bemærkede med rette, at den ramme inviterede til netop den forkerte granskning, da et teknisk kyndigt udvalgsmedlem let kunne påpege, at rå kodevolumen intet siger om, hvorvidt koden virkede eller betød noget. Myndighedens reviderede rapport brugte i stedet resultatmetrikker (emne 5.3): reduktion af fejl rapporteret af borgere og stigning i vellykket selvbetjening, som holdt langt bedre under udvalgets spørgsmål, end aktivitetstallene ville have gjort.

## Business case: motiver, ROI og TCO

Afkastet af at få aktivitetsmetrikker rigtige, ved at bruge dem kontekstuelt frem for som individuelle scorecards, er undgået skade: organisationer, der individuelt rangordner ingeniører efter aktivitet, ser pålideligt manipulationsadfærd, reduceret samarbejde (ingeniører, der beskytter deres eget synlige output frem for at hjælpe en kollega) og en systematisk bias mod det dybe arbejde med høj løftestang, som ofte producerer mest værdi, mens det genererer mindst synlig aktivitet. At vende den skade, når den først er indgroet i en præstationsvurderingskultur, er reelt svært og langsomt.

De samlede omkostninger ved at undgå denne fælde er for det meste organisatorisk disciplin: en eksplicit politik, konsekvent håndhævet, mod individuel rangering efter aktivitet og en forpligtelse til i stedet at investere i den sværere, mere ærlige præstationsmåling, der er beskrevet i emne 3.3. Den disciplin koster mindre end de fejlrettede forfremmelsesbeslutninger, det skadede samarbejde og den manipulationsadfærd, individuelle aktivitetsmetrikker pålideligt producerer over tid.

## Antimønstre og faldgruber

- **Individuel rangering efter antal commits eller kodelinjer:** det enkeltstående mest skadelige, historisk mest almindelige misbrug i hele denne bog.
- **Aktivitetsteater:** arbejde udført primært for synlighed frem for værdi, et helt forudsigeligt svar på aktivitetsbaseret vurdering.
- **At fortolke et fald i aktivitet på teamniveau isoleret uden at kontrollere de andre SPACE-dimensioner:** kan forveksle et reelt positivt mønster med et bekymrende.
- **At citere rå aktivitetstal i ekstern kommunikation eller kommunikation vendt mod ledelsen:** inviterer til netop den forkerte granskning og siger lidt om faktisk værdi.
- **Systematisk at undervurdere dybt, omhyggeligt arbejde, der genererer få synlige begivenheder:** en strukturel bias, der er indbygget i hele denne metrikfamilie.
- **Uformel bias for aktivitet uden en politik, der kryber ind i samtaler om forfremmelse eller vurdering:** skadelig selv uden en officiel metrik bag.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Aktivitetsmetrikker bruges, formelt eller uformelt, til at vurdere eller rangordne enkeltpersoner, uden bevidsthed om risikoen.
- **Niveau 2, Udvikl:** Der findes en vis bevidsthed om risikoen, men ingen eksplicit politik forhindrer aktivitetsdata i uformelt at påvirke vurderinger eller forfremmelsesdrøftelser.
- **Niveau 3, Standardisér:** En eksplicit, kommunikeret politik for hele organisationen forbyder individuel rangering efter aktivitet, og aktivitetsdata bruges kun samlet, i kontekst på teamniveau.
- **Niveau 4, Styr:** Praksis for præstationsvurdering og forfremmelse revideres periodisk for at bekræfte, at politikken følges i praksis, og kvalitetsjusterede aktivitetssignaler erstatter rå optællinger, hvor aktivitetsdata overhovedet bruges.
- **Niveau 5, Orkestrér:** Organisationen har påviseligt flyttet vurderingskulturen væk fra aktivitetsmetrikker mod tilgangen med flere signaler for præstation fra emne 3.3, med synlig forbedring af samarbejdet og reduceret manipulationsadfærd som belæg for, at skiftet virkede.

## Idéer til drøftelse

1. Har nogen her nogensinde følt sig vurderet, selv uformelt, efter hvor "travl" deres aktivitet så ud?
2. Hvordan ville aktivitetsteater specifikt se ud på vores team?
3. Har vi en eksplicit, skriftlig politik mod individuel rangering efter aktivitet, og følges den faktisk?
4. Hvilket stille arbejde med høj værdi på vores team genererer i øjeblikket de færreste synlige aktivitetsdata?
5. Hvordan ville vi redesigne belægget i vores præstationsvurderinger for helt at fjerne aktivitetstal?

## Vigtigste pointer

- Aktivitet måler **bevægelse, ikke værdi**; det er den historisk mest misbrugte metrikfamilie i softwareudvikling.
- **Rangordn eller vurder aldrig enkeltpersoner** efter rå aktivitetstal; det er den sværeste og vigtigste regel i dette emne.
- Brug aktivitetsdata **samlet, som kontekst** for de andre SPACE-dimensioner, aldrig som en selvstændig dom.
- Hold øje med **aktivitetsteater** og **mønstret substitutionsmanipulation** (emne 1.2) specifikt inden for denne metrikfamilie.
- Dybt arbejde med høj værdi genererer ofte de **færreste synlige aktivitetsdata**; beskyt det mod systematisk at blive undervurderet.

## Kilder og videre læsning

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck og Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, af Tom DeMarco og Timothy Lister (argumentet imod at måle ingeniører efter synlig travlhed).
- *Deep Work: Rules for Focused Success in a Distracted World*, af Cal Newport (værdien af stille, uafbrudt arbejde, som aktivitetsmetrikker systematisk undertæller).
- *The Tyranny of Metrics*, af Jerry Z. Muller (metrikfiksering og dens omkostninger, direkte anvendelig på aktivitetsbaseret vurdering).
