# 4.6 Metrikker for dokumentation og viden

## Overblik og motivation

Dette emne afslutter del 4 ved at måle, om den viden, der skal til for sikkert at vedligeholde en kodebase, faktisk er dokumenteret og kan findes, ikke blot om dokumentation teknisk set findes et sted. Emne 3.5 dækkede kommunikation og samarbejde som en bekymring for udvikleroplevelsen; dette emne dækker det samme underliggende spørgsmål, tilgængelighed af viden, fra kodens side: har en ny ingeniør, eller en eksisterende, der arbejder på ukendt kode, det, vedkommende har brug for til at foretage en sikker ændring, eller bor den viden kun i hovedet på et skrumpende antal erfarne medarbejdere.

Udfordringen ved målingen er her reelt svær, sværere end de fleste andre metrikker i denne bog, fordi dokumentationens kvalitet og brugbarhed er iboende mere subjektive end en dækningsprocent eller en kompleksitetsscore. Dette emnes tilgang er at måle stedfortrædere for brugbarhed frem for eksistens: hvor ofte dokumentation faktisk tilgås, hvor ofte det samme spørgsmål stilles gentagne gange, selv om et dokumenteret svar findes, og hvor lang tid det tager for en, der er ukendt med et system, at blive produktiv i det. Ingen af disse stedfortrædere er perfekt alene, men sammen giver de et langt mere ærligt billede end at tælle antallet af wikisider eller README-filer, en kodebase indeholder.

For store teams forværres dette emnes bekymringer med organisatorisk ansættelsesperiode og udskiftning på måder, der er lette at undervurdere, indtil en krise tvinger sagen: et system, der i årevis er vedligeholdt af de samme to ingeniører, kan fungere helt fint med næsten ingen skriftlig dokumentation, lige indtil begge de ingeniører forlader virksomheden inden for samme år, hvorefter organisationen opdager, at viden aldrig reelt blev fanget nogen steder af varig karakter. Store virksomheder og offentlige organisationer, med typisk længere levetid for systemer og mindre sikker kontinuitet i personalet end en startup, bærer denne risiko mere akut end de fleste.

## Nøgleprincipper

- **Dokumentationens eksistens er ikke det samme som dokumentationens brugbarhed.** Mål, om den faktisk hjælper, ikke blot om den er til stede.
- **Gentagne spørgsmål trods dokumenterede svar afslører et problem med findbarhed, ikke et problem med dokumentationsindsats.** Mere indhold er ikke altid løsningen.
- **Onboardingtid til produktivt bidrag er en stærk, praktisk stedfortræder** for den samlede videns sundhed, der hænger direkte sammen med emne 3.5's samarbejdsmetrikker.
- **Viden, der kun lever i folks hoveder, er en risiko for varigheden,** ikke en stabil, bæredygtig tilstand, uanset hvor godt den i øjeblikket fungerer.
- **Dokumentation forfalder.** En side, der var nøjagtig for et år siden, kan nu være aktivt vildledende, og selve forældelsen skal følges.

## Anbefalinger

### Følg adgang til og forældelse af dokumentation, ikke blot eksistens

Hvor din dokumentationsplatform understøtter det, så følg, hvor ofte sider faktisk ses, og separat, hvor lang tid der er gået, siden en side sidst blev opdateret, i forhold til hvor ofte det underliggende system, den beskriver, har ændret sig (krydshenvisning til data om omsætning fra emne 4.3 er direkte nyttig her). En side, der beskriver et system, der har ændret sig væsentligt, siden siden sidst blev redigeret, er en stærk kandidat til at være aktivt vildledende frem for blot uhjælpsom, og det forældelsessignal fortjener mindst lige så meget opmærksomhed som at følge, om dokumentation overhovedet findes.

### Hold øje med gentagne spørgsmål som et signal om findbarhed

Hvis det samme spørgsmål stilles gentagne gange i en chatkanal i teamet eller under onboarding, selv om et dokumenteret svar teknisk set findes et sted, afslører det mønster et problem med findbarhed, svaret er ikke, hvor folk naturligt leder efter det, frem for et problem med dokumentationsindsats, som mere skrivning ville løse. Følg tilbagevendende spørgsmål eksplicit, og brug dem til at prioritere at omorganisere eller bedre fremhæve eksisterende indhold frem for at skrive mere af det.

### Mål onboardingtid til første meningsfulde, selvstændige bidrag

Denne metrik, introduceret i emne 3.5 som et samarbejdssignal, er lige så meget et signal om dokumentation og videns sundhed fra kodens side. En konsekvent kort, forudsigelig onboardingtid tyder på reelt tilgængelig, nøjagtig viden; en lang, meget varierende tid, især en, der afhænger kraftigt af, hvilken specifik person der tilfældigvis onboarder et nyt teammedlem, tyder på viden, der bor farligt koncentreret i individuel hukommelse frem for i varig, skriftlig form.

### Identificér og prioritér eksplicit udokumenterede områder med kritisk viden

Krydshenvis dine data om koncentration af viden (emne 3.5's analyse af [bus factor](https://en.wikipedia.org/wiki/Bus_factor)) med dækning af dokumentation: et system med en bus factor på én og ingen meningsfuld dokumentation er en alvorlig, ophobende risiko, der fortjener prioriteret opmærksomhed frem for et veldokumenteret system med den samme lave bus factor, da dokumentationen i det mindste giver en delvis afbødning, mens en dedikeret efterfølger uddannes.

### Behandl dokumentationsgæld som en kategori i din backlog for teknisk gæld

I stedet for at følge huller i dokumentationen separat og uformelt, så fold væsentlige huller i dokumentationen ind i den samme synlige, kvantificerede backlog, der er beskrevet i emne 4.5, især for kritiske systemer med lav bus factor, så dokumentationsarbejde konkurrerer retfærdigt om prioriteret kapacitet frem for vedvarende at blive udskudt som en opgave med lavere status sammenlignet med afhjælpning af gæld, der er fokuseret på kode.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Ingen måling af dokumentation | Lav overhead | Risikoen for viden forbliver usynlig, indtil en krise tvinger opdagelsen |
| At tælle dokumentationens eksistens (antal sider, tilstedeværelse af README) | Enkelt, let at rapportere | Siger intet om brugbarhed, nøjagtighed eller findbarhed |
| Følge adgang og forældelse | Afslører faktisk brugbarhed og forfald | Kræver analyser fra dokumentationsplatformen og løbende disciplin i gennemgang |
| Onboardingtid som stedfortræder | Praktisk, konkret, hænger direkte sammen med reel forretningsmæssig effekt | Indirekte; andre faktorer end dokumentation påvirker også onboardinghastigheden |

Den centrale spænding er **målbarhed versus mening**. Dokumentationens eksistens er trivielt let at tælle og fortæller dig næsten intet nyttigt; reel brugbarhed, om nogen faktisk kan finde og stole på dokumenteret viden, når de har brug for den, er det, der faktisk betyder noget, men er sværere at måle direkte. Løs spændingen ved at bruge de stedfortrædere, dette emne anbefaler, adgangsmønstre, forældelse i forhold til omsætning, gentagne spørgsmål og onboardingtid, i kombination, med accept af, at ingen enkelt er perfekt, men at deres konvergens er langt mere meningsfuld end et antal af eksistens alene.

## Spørgsmål at drøfte med dit team

1. **For vores mest kritiske system med lavest bus factor: findes der faktisk meningsfuld, nøjagtig dokumentation, eller ville en afgående ekspert tage det meste af den reelle viden med sig?** Det er den skarpeste, mest konkrete udgave af dette emnes centrale bekymring; besvar det ærligt for jeres enkelt mest risikable system først.

2. **Hvilket spørgsmål stilles gentagne gange i vores teamchat, selv om et dokumenteret svar findes et sted?** Hvis I straks kan navngive et, er det et problem med findbarhed, der er værd at rette direkte, sandsynligvis ved at omorganisere eller bedre fremhæve eksisterende indhold frem for at skrive mere.

3. **Hvor lang tid tog vores seneste nye teammedlem om at yde sit første meningsfulde, selvstændige bidrag, og hvordan sammenlignede det sig med teammedlemmet før vedkommende?** En stor, uforklaret variation mellem enkeltpersoner peger ofte på viden, der afhænger kraftigt af, hvem der tilfældigvis onboarder nogen, frem for varig, tilgængelig dokumentation.

4. **Hvornår tjekkede vi sidst, om et stykke dokumentation stadig var nøjagtigt, i forhold til hvor meget det underliggende system har ændret sig, siden det blev skrevet?** Hvis det ærlige svar er "det tjekker vi ikke systematisk", er den risiko for forældelse sandsynligvis større, end nogen i øjeblikket antager.

5. **Indeholder vores backlog for teknisk gæld (emne 4.5) huller i dokumentationen, eller bliver dokumentationsarbejde vedvarende udskudt som en opgave med lavere status sammenlignet med kodeændringer?** Kontrollér jeres faktiske backlog, og se, om dokumentationsgæld er synlig og konkurrerer om prioriteret kapacitet eller reelt er usynlig.

6. **Hvad ville det koste os, hvis den eller de to personer, der forstår vores mest kritiske, mindst dokumenterede system, forlod virksomheden inden for samme år?** Dette konkrete, ubehagelige spørgsmål er værd at besvare ærligt frem for at behandle risikoen som abstrakt eller usandsynlig.

## Sektorperspektiv

**Startup.** Formelle metrikker for dokumentation er som regel unødvendige med et lille team, hvor viden spredes gennem konstant, direkte samtale. Den risiko, man skal holde øje med, er den samme koncentration af bus factor, som emne 3.5 advarer om, her anvendt specifikt på dokumentation: når teamet vokser ud over den størrelse, hvor alle taler sammen dagligt, bliver udokumenteret viden, der fungerede fint uformelt, en reel forpligtelse.

**Mindre virksomhed.** Prioritér at dokumentere dit enkelt mest kritiske, mindst redundante system først, selv uformelt, frem for at forsøge udtømmende dokumentation af alt. Et kort, nøjagtigt dokument, der dækker dit mest risikable enkelte single point of failure, leverer mere reel værdi end bred, men overfladisk dækning overalt.

**Stor virksomhed.** Forældelse og findbarhed af dokumentation skalerer begge dårligt her, da en stor organisation ophober dokumentation på tværs af mange teams og platforme hurtigere, end nogen kan holde den aktuel eller konsekvent organiseret. Invester i analyser fra dokumentationsplatformen for at følge adgang og forældelse i skala, og behandl dokumentationsgæld som en førsteklasses kategori i jeres backlog for gæld i hele organisationen.

**Offentlig sektor.** Lang ansættelsesperiode, almindelig i offentlige organisationer, kan maskere alvorlig risiko ved udokumenteret viden bag tilsyneladende stabilitet, da et system, der i femten år er vedligeholdt af den samme person, kan fungere helt fint, lige indtil den person går på pension. Behandl dokumentationens sundhed eksplicit som en bekymring om driftskontinuitet, forbundet direkte til arbejdsstyrke- og successionsplanlægning, ikke blot en ingeniørmæssig finesse.

## Eksempler

**Stor virksomhed.** Et finansielt servicefirma opdagede, under en uafhængig omorganisering, at dets centrale motor til beregning af risiko ingen meningsfuld dokumentation havde ud over nogle få forældede kodekommentarer, og at de to ingeniører, der forstod den bedst, begge samtidigt blev omplaceret til et nyt initiativ. En nødindsats til dokumentation, gennemført under betydeligt tidspres, udtrak og optog den kritiske viden, før omplaceringen trådte i kraft, men processen tog flere uger af dedikeret tid fra seniorer, der kunne have været spredt mere gradvist og billigere, hvis dokumentationens sundhed var blevet fulgt og prioriteret proaktivt frem for opdaget som en nødsituation.

**Offentlig sektor.** En delstatsregerings årtier gamle sagsbehandlingssystem havde ophobet betydelig dokumentation gennem årene, men en revision af findbarhed fandt, at nye teammedlemmer konsekvent ikke kunne finde relevant eksisterende dokumentation og gentagne gange stillede den samme håndfuld spørgsmål i teamkanaler, spørgsmål, der faktisk allerede var besvaret et sted i myndighedens vildtvoksende, dårligt organiserede dokumentationsplatform. I stedet for at skrive mere indhold investerede myndigheden i at omorganisere og forbedre søgning og navigationsstruktur i sin eksisterende dokumentation, og en opfølgende undersøgelse viste en målbar reduktion i gentagne spørgsmål og en meningsfuldt hurtigere rapporteret onboardingoplevelse for nyt personale, uden at tilføje en eneste ny side indhold.

## Business case: motiver, ROI og TCO

Afkastet af bevidst at måle og styre dokumentationens sundhed er undgået krisepris: eksemplet med det finansielle servicefirma ovenfor viser forskellen mellem proaktiv, gradvis indfangning af viden og en dyr, sammenpresset nødindsats, fremtvunget af uplanlagte personalebevægelser. Udokumenteret kritisk viden er en stående forpligtelse, der ikke koster noget synligt, indtil det øjeblik, den på én gang bliver meget dyr.

De samlede ejeromkostninger er for det meste disciplinen i at følge de stedfortrædere, dette emne anbefaler, adgangsmønstre, forældelse, gentagne spørgsmål, onboardingtid, og villigheden til at folde huller i dokumentationen ind i en prioriteret backlog frem for at behandle dem som vedvarende lavere i status end kodefokuseret arbejde. Den disciplin koster langt mindre end den udtrækning af viden i krisetilstand, som eksemplet med det finansielle servicefirma viser som alternativet.

## Antimønstre og faldgruber

- **At tælle dokumentationens eksistens frem for dens brugbarhed:** fortæller dig næsten intet om, hvorvidt viden faktisk er tilgængelig, når den er nødvendig.
- **At skrive mere indhold som svar på gentagne spørgsmål uden først at kontrollere findbarhed:** adresserer ofte helt det forkerte problem.
- **Aldrig at kontrollere forældelse af dokumentation i forhold til, hvor meget systemet har ændret sig:** risikerer aktivt vildledende, forældet indhold.
- **At behandle dokumentationsgæld som vedvarende lavere i status end kodegæld:** efterlader den kronisk nedprioriteret og usynlig på backloggen.
- **At forveksle tilsyneladende stabilitet, et system, der ikke har ændret sig i årevis, med lav risiko:** kan maskere et alvorligt, udokumenteret problem med bus factor bag et system, der blot endnu ikke har haft brug for sin eneste ekspert.
- **At opdage kritisk udokumenteret viden først under en nødudskiftning af personale:** den dyre, undgåelige fejltilstand, dette emne er bygget til at forhindre.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Dokumentationens sundhed måles ikke; koncentration af viden og risiko for forældelse opdages kun gennem krise.
- **Niveau 2, Udvikl:** Der findes noget dokumentation, men ingen systematisk sporing af adgang, forældelse eller findbarhed.
- **Niveau 3, Standardisér:** Adgang og forældelse følges for kritiske systemer, og onboardingtid måles som en stedfortræder for videns sundhed i hele organisationen.
- **Niveau 4, Styr:** Huller i dokumentationen foldes ind i den prioriterede backlog for teknisk gæld, krydshenvist med risiko for bus factor for at identificere de mest alvorlige kombinerede risici.
- **Niveau 5, Orkestrér:** Organisationen identificerer og adresserer proaktivt risiko ved udokumenteret kritisk viden, før en personaleudskiftning tvinger sagen, og kan pege på specifikke, målbare forbedringer af onboarding eller hændelsesrespons, der kan spores til investering i dokumentation.

## Idéer til drøftelse

1. Hvad er vores enkelt mest alvorlige kombination af lav bus factor og dårlig dokumentation lige nu?
2. Hvilket spørgsmål stilles gentagne gange, selv om et dokumenteret svar findes?
3. Hvordan ville vi vide, om et stykke kritisk dokumentation var blevet forældet og vildledende?
4. Indeholder vores backlog for teknisk gæld huller i dokumentationen, eller er de usynlige?
5. Hvad ville det koste os, hvis den eneste ekspert på vores mest underdokumenterede system forlod virksomheden i år?

## Vigtigste pointer

- Mål **brugbarhed, ikke eksistens**: om dokumentation faktisk hjælper, ved hjælp af stedfortrædere som adgangsmønstre, forældelse og gentagne spørgsmål.
- **Gentagne spørgsmål trods dokumenterede svar** afslører et problem med findbarhed, ikke nødvendigvis et problem med indholdsindsats.
- **Onboardingtid til produktivt bidrag** er en stærk, praktisk stedfortræder for den samlede videns sundhed.
- **Udokumenteret kritisk viden er en ophobende risiko**, især kombineret med en lav bus factor (emne 3.5); den koster intet synligt, indtil den på én gang koster meget.
- Fold **huller i dokumentationen ind i din backlog for teknisk gæld** (emne 4.5), så de konkurrerer retfærdigt om prioriteret kapacitet.

## Kilder og videre læsning

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, af Jared Bhatti, Zachariah Goldberg, Ted Kubaska og Sarah Moir (praktisk praksis for dokumentation til ingeniørteams).
- *A Philosophy of Software Design*, af John Ousterhout (forholdet mellem dokumentation, kompleksitet og vedligeholdelighed).
- *Team Topologies*, af Matthew Skelton og Manuel Pais (organisatoriske designkonsekvenser af koncentreret versus fordelt viden).
- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (dokumentation som en af de kapabiliteter, der korrelerer med leveringspræstation).
