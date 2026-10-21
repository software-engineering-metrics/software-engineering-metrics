# 4.2 Testdækning og testeffektivitet

## Overblik og motivation

**[Testdækning](https://en.wikipedia.org/wiki/Code_coverage)** måler den procentdel af koden, en testsuite udfører: linjedækning, forgreningsdækning eller den strengere stidækning. Det er en af de mest fulgte metrikker i hele denne bog, billig at beregne, let at visualisere som en enkelt procentdel og følgelig en af de hyppigst manipulerede, præcis som emne 1.2 forudsiger for enhver metrik, der bliver til et mål at ramme. En testsuite kan opnå høj dækning, mens den næsten intet meningsfuldt verificerer, fordi dækning måler, om kode blev udført under en testkørsel, ikke om testen faktisk kontrollerede, at koden opførte sig korrekt.

Dette hul mellem dækning og reel testeffektivitet er ikke en mindre fodnote; det er dette emnes centrale bekymring. En test, der kalder en funktion og ikke hævder noget om dens resultat, øger dækningen identisk med en test, der grundigt verificerer funktionens adfærd på tværs af grænsetilfælde. Den løsning, dette emne anbefaler, **mutationstest (mutation testing)**, der bevidst indfører små, kunstige fejl i koden og kontrollerer, om testsuiten faktisk fanger dem, er det direkte svar på det hul, og dette emne behandler den som dækningens nødvendige komplement, ikke et valgfrit ekstra.

For store teams indføres dækningsmål ofte i hele organisationen som en kvalitetsport, præcis den slags højt synlige metrik med incitament, som emne 1.2 advarer er mest udsat for manipulation. Store virksomheder og offentlige organisationer, der sætter et generelt krav om en dækningsprocent uden en parret kontrol af effektivitet, giver i realiteten incitament til netop det mønster af tærskelmanipulation, denne bog beskriver: trivielle tests skrevet udelukkende for at nå et tal, uden en tilsvarende forbedring af den faktiske forebyggelse af fejl.

## Nøgleprincipper

- **Dækning måler udførelse, ikke verifikation.** At en linje køres af en test siger intet om, hvorvidt testen kontrollerede noget meningsfuldt om den.
- **Et dækningsmål uden en kontrol af effektivitet er en lærebogsopsætning til Goodharts lov** (emne 1.2): tallet forbedres, mens den reelle kvalitet ikke gør.
- **Mutationstest er dækningens nødvendige komplement**, ikke en erstatning; brug begge sammen.
- **Dækning er mere nyttig som et gulv end som et mål, der skal maksimeres.** Et lavt tal afslører reelt utestet kode; at jagte 100 % giver ofte aftagende eller negativt afkast.
- **Dækning af kritiske stier betyder mere end ensartet, generel dækning.** Ikke al kode bærer lige stor risiko, hvis den fejler.

## Anbefalinger

### Brug dækning til at finde utestet kode, ikke som et mål, der skal maksimeres

Behandl en dækningsrapport primært som et kort over det, der slet ingen test har, hvilket er reelt nyttig information, frem for som en score, der skal skubbes mod 100 %. Kode med nul dækning er et reelt hul, der er værd at lukke; den marginale værdi af at skubbe dækningen fra 85 % til 95 % er som regel langt lavere og ofte ikke umagen værd, især hvis den indsats producerer tests med lav værdi blot for at nå det højere tal.

### Par hvert dækningsmål med mutationstest

**Værktøjer til mutationstest** indfører automatisk små fejl i din kode, vender en sammenligningsoperator, ændrer en grænsebetingelse, og kører derefter din testsuite mod hver muteret version. En testsuite, der "dræber" (fejler mod) de fleste mutanter, verificerer reelt adfærd; en testsuite med høj linjedækning, men en lav andel af dræbte mutanter, udfører kode uden meningsfuldt at kontrollere den. Denne parring er det enkeltstående mest effektive værn mod manipulation af dækningsmål, og denne bog anbefaler den som standardpraksis, ikke en avanceret eller valgfri teknik.

### Prioritér først dækning og mutationstest på kritiske stier

Ikke al kode bærer lige stor risiko. En sti til behandling af betalinger, en autentificeringskontrol eller et script til datamigrering fortjener langt mere stringent test end en sjældent brugt administrativ rapport. I stedet for at forfølge ensartet dækning på tværs af en hel kodebase, så identificér dine kodestier med højest risiko og størst konsekvens, og koncentrér både dækning og indsats til mutationstest dér først, og accepter lavere dækning på reelt lavrisikokode som en bevidst, informeret afvejning frem for en forglemmelse.

### Hold øje med de specifikke mønstre til manipulation af dækning

De mest almindelige måder, dækning bliver manipuleret på, når den bliver til et mål, omfatter: tests, der kalder en funktion, men ikke hævder noget meningsfuldt om resultatet (emne 1.2's tærskelmanipulation anvendt på denne metrik), deaktivering eller sletning af tests, der fejler, frem for at rette det underliggende problem, og udelukkelse af kode, der er svær at teste, fra dækningsberegningen helt frem for at adressere, hvorfor den er svær at teste. Revidér periodisk en stikprøve af tests direkte ved at læse deres faktiske påstande, frem for kun at stole på dækningsprocenten.

### Sæt et dækningsgulv, ikke et dækningsloft, i din CI-pipeline

Konfigurér din buildpipeline til at fejle, hvis dækningen falder under et aftalt gulv for ny kode, så regression forhindres, frem for at kræve, at hver ændring skubber det samlede tal højere. Det skel betyder noget: et gulv beskytter mod tilbagefald uden at skabe det samme ubarmhjertige opadgående pres, der producerer tests med lav værdi skrevet udelukkende for at nudge tallet lidt længere op.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Dækningsprocent alene | Billig, enkel, bredt understøttet af værktøj | Let at manipulere; måler udførelse, ikke verifikation |
| Dækning plus mutationstest | Verificerer, at tests faktisk kontrollerer adfærd, modstår manipulation | Mere beregningstungt; kræver investering i værktøj |
| Ensartet dækningsmål på tværs af kodebasen | Enkelt at angive og håndhæve | Spilder indsats på lavrisikokode; underinvesterer i forhold til risiko andre steder |
| Risikobaseret dækning, kritiske stier først | Koncentrerer indsatsen, hvor den betyder mest | Kræver dømmekraft at identificere reelt kritiske stier korrekt |

Den centrale spænding er **enkelhed versus ærlighed**. En enkelt dækningsprocent er let at rapportere og let at sætte som mål, men netop den enkelhed er det, der gør den så let at manipulere, når den bliver et tal med incitament. Løs spændingen ved at acceptere den ekstra kompleksitet i mutationstest og risikobaseret prioritering som prisen for et ærligt signal, og ved eksplicit at kommunikere til dit team, hvorfor et lavere samlet dækningstal, koncentreret korrekt på kritiske stier og understøttet af en høj andel af dræbte mutanter, er mere værdifuldt end et højere, mere ensartet fordelt, men mindre effektivt verificeret tal.

## Spørgsmål at drøfte med dit team

1. **Hvad er vores andel af dræbte mutanter på vores kodestier med højest risiko, og hvordan sammenligner den sig med vores dækningsprocent på den samme kode?** Et stort hul mellem et højt dækningstal og en lav andel af dræbte mutanter er det klareste tænkelige tegn på, at dækning alene ikke fortæller dig det, du tror, den fortæller dig.

2. **Har vi nogensinde skrevet en test primært for at øge et dækningstal, med lidt reel tanke på, hvad den skulle verificere?** Vær ærlig her; det sker oftere, end teams gerne vil indrømme, især under deadlinepres, når en dækningsport blokerer en fletning.

3. **Er vores indsats for dækning koncentreret på vores kodestier med højest risiko, eller spredt ensartet uanset konsekvensen, hvis den kode fejler?** Kortlæg jeres nuværende fordeling af dækning mod en ærlig risikovurdering af jeres kodebase, og led efter misforholdet.

4. **Har vi nogensinde deaktiveret eller slettet en fejlende test frem for at rette det underliggende problem, den afslørede?** Det er en af de mest skadelige former for manipulation af dækning, fordi den aktivt fjerner reel beskyttelse, mens det rapporterede dækningstal næppe bevæger sig.

5. **Håndhæver vores CI-pipeline et dækningsgulv for ny kode, eller presser den mod et stadigt højere loft uanset aftagende afkast?** Drøft, om jeres nuværende design af porten skaber det rette incitament, beskyttelse mod regression, eller det forkerte, ubarmhjertigt opadgående pres, der belønner polstring af tests med lav værdi.

6. **Hvilken kode i vores kodebase er udelukket fra dækningsberegningen, og er den udelukkelse berettiget, eller skjuler den et reelt hul i testene?** Gennemgå jeres faktiske konfiguration af udelukkelser; det er almindeligt, at den liste i det stille vokser over tid uden at nogen gennemgår, om hver udelukkelse stadig er berettiget.

## Sektorperspektiv

**Startup.** Formelle dækningsmål er ofte unødvendige så tidligt; fokusér indsatsen med at skrive tests direkte på dine mest risikable, forretningskritiske kodestier (som regel logik for betaling eller kerneforløb) frem for at forfølge en generel procentdel på tværs af en kodebase, der stadig ændrer sig hurtigt og måske alligevel bliver væsentligt omskrevet snart.

**Mindre virksomhed.** De fleste CI-platforme rapporterer dækning automatisk til minimal opsætningsomkostning; brug den primært til at opdage helt utestet kritisk kode frem for at jagte en bestemt målprocent, og overvej først mutationstest, når du har ingeniørkapaciteten til at handle på det, den afslører.

**Stor virksomhed.** Generelle dækningsmål for hele organisationen er en almindelig og konsekvensrig fejl i denne skala, da de giver incitament til netop den manipulation, dette emne beskriver, på tværs af snesevis af teams samtidigt. Etablér risikobaserede forventninger til dækning, der varierer efter tjenestens kritikalitet, og invester i infrastruktur til mutationstest specifikt for jeres systemer med højest risiko.

**Offentlig sektor.** Krav om dækning optræder undertiden i udbuds- eller compliancedokumentation som en sløv, let angivelig stedfortræder for kvalitetssikring. Hvor det er muligt, så par enhver kontraktligt krævet dækningsprocent med et krav om effektivitet baseret på mutationstest eller fejl, så det kontraktlige incitament ikke utilsigtet belønner netop den polstring med tests af lav værdi, dette emne advarer imod.

## Eksempler

**Stor virksomhed.** Ledelsen på en e-handelsplatform havde sat et krav om 95 % dækning for al ny kode i hele virksomheden, håndhævet som en hård CI-port. En revision to år senere, foranlediget af en bølge af produktionsfejl i angiveligt velafprøvet kode, fandt en andel af dræbte mutanter under 40 % i store dele af kodebasen: teams havde skrevet tests, der udførte kodestier uden meningsfuldt at hævde noget om deres adfærd, udelukkende for at tilfredsstille porten under deadlinepres. Virksomheden erstattede det generelle dækningskrav med en risikoopdelt politik: streng dækning plus obligatorisk mutationstest over en tærskel på 80 % dræbte mutanter for kode til betaling og autentificering og et meget lettere dækningsgulv for lavrisikoværktøj internt, hvilket både reducerede spildt testindsats og målbart forbedrede fejlraterne i de reelt kritiske stier.

**Offentlig sektor.** En offentlig sundhedsmyndigheds system til vurdering af berettigelse til ydelser var kontraktligt forpligtet til at opretholde 90 % testdækning under aftalen med dets udviklingsleverandør. En gennemgang efter en hændelse, efter at en betydelig fejl i beregningen af berettigelse var blevet leveret, selv om dækningskravet var opfyldt, fandt, at den specifikke funktion, der var ansvarlig, havde opnået sin dækning udelukkende gennem tests, der kaldte funktionen med gyldige input, men aldrig testede grænsebetingelser eller ugyldige input, præcis hvor fejlen opstod. Myndighedens reviderede leverandørkontrakt kræver nu en dokumenteret score for mutationstest ved siden af dækning for enhver kode til beregning af berettigelse, hvilket lukkede det specifikke hul, der havde ladet kompatibel, men ineffektiv test opfylde kontrakten.

## Business case: motiver, ROI og TCO

Afkastet af at parre dækning med mutationstest er at fange hullet mellem tilsyneladende og faktisk testkvalitet, før det koster en produktionsfejl. Eksemplet med e-handel ovenfor viser mønstret tydeligt: et dækningskrav alene havde produceret en falsk følelse af sikkerhed, som en bølge af fejl til sidst afslørede til en langt højere pris end den investering i mutationstest, der ville have fanget hullet tidligere.

De samlede ejeromkostninger omfatter den beregningsmæssige pris for mutationstest, som er dyrere at køre end simpel instrumentering af dækning og derfor som regel reserveres til kode på kritiske stier frem for en hel kodebase, plus ingeniørtiden til at fortolke og handle på resultater. Den pris er berettiget specifikt for den kode med højest risiko, hvor prisen for et uopdaget hul i testeffektiviteten er højest.

## Antimønstre og faldgruber

- **At behandle dækningsprocent som en direkte dom over kvalitet:** den måler udførelse, ikke verifikation.
- **At skrive tests primært for at tilfredsstille en dækningsport:** producerer netop det mønster af tests med lav værdi og tærskelmanipulation, emne 1.2 advarer imod.
- **At deaktivere eller slette fejlende tests i stedet for at rette det underliggende problem:** fjerner reel beskyttelse, mens det næppe påvirker det rapporterede tal.
- **At anvende et ensartet dækningsmål uanset kodens risiko:** spilder indsats på lavrisikokode og underinvesterer i reelt kritiske stier.
- **At lade en liste over udelukkelser vokse i det stille over tid:** skjuler reelle huller i testene bag et teknisk set nøjagtigt, men vildledende dækningstal.
- **At forfølge et dækningsloft i stedet for et dækningsgulv:** skaber ubarmhjertigt opadgående pres, der belønner polstring af tests frem for reel verifikation.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Dækning måles ikke eller måles uensartet uden gulv, mål eller kontrol af effektivitet.
- **Niveau 2, Udvikl:** Et dækningsmål findes og følges, men ingen mutationstest eller risikobaseret prioritering informerer, hvordan indsatsen fordeles.
- **Niveau 3, Standardisér:** Dækningsgulve håndhæves konsekvent i CI, med risikobaseret prioritering, der styrer, hvor indsatsen for dækning koncentreres.
- **Niveau 4, Styr:** Mutationstest kører på kode på kritiske stier, med en fulgt tærskel for andelen af dræbte mutanter, der skal opfyldes ved siden af dækning, og lister over udelukkelser revideres periodisk.
- **Niveau 5, Orkestrér:** Organisationen kan pege på specifikke reduktioner af fejl, der kan spores til prioritering informeret af mutationstest, og data om dækning og effektivitet informerer sammen direkte beslutninger om investering i test.

## Idéer til drøftelse

1. Hvad er vores andel af dræbte mutanter på vores enkelt mest kritiske kodesti, og ved vi det overhovedet?
2. Har vi nogensinde skrevet en test med lav værdi udelukkende for at tilfredsstille en dækningsport?
3. Er vores nuværende indsats for dækning koncentreret, hvor risikoen er højest, eller spredt ensartet?
4. Hvilken kode er i øjeblikket udelukket fra dækningsberegningen, og er den udelukkelse stadig berettiget?
5. Ville en investering i mutationstest på vores system med højest risiko være dens beregningsmæssige pris værd?

## Vigtigste pointer

- Testdækning måler **udførelse, ikke verifikation**; en dækket linje siger intet om, hvorvidt den blev kontrolleret meningsfuldt.
- Par dækning med **mutationstest** for at verificere, at tests faktisk fanger reelle fejl, ikke blot at de kører koden.
- Koncentrér testindsatsen på **kritiske stier med høj risiko** frem for at forfølge ensartet dækning på tværs af en hel kodebase.
- Brug dækning som et **gulv, der beskytter mod regression**, ikke et loft, der ubarmhjertigt skal maksimeres.
- Hold øje med de specifikke mønstre til manipulation af dækning: **tests med lav værdi, deaktiverede fejlende tests og i det stille voksende lister over udelukkelser**.

## Kilder og videre læsning

- *Working Effectively with Legacy Code*, af Michael Feathers (strategi for testdækning til eksisterende, svært testbare kodebaser).
- Jia, Yue, og Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011): en omfattende undersøgelse af teknikker til mutationstest og deres effektivitet.
- *xUnit Test Patterns*, af Gerard Meszaros (designmønstre for tests, der er relevante for at skrive reelt effektive, ikke blot dækningstilfredsstillende, tests).
- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (forholdet mellem testpraksis og leveringspræstation).
