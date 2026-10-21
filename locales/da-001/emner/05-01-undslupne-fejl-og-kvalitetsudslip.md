# 5.1 Undslupne fejl og kvalitetsudslip

## Overblik og motivation

**Andel af undslupne fejl (escaped defect rate)** måler de fejl, der når produktion og påvirker rigtige brugere, i modsætning til de fejl, der fanges tidligere gennem test, kodegennemgang eller statisk analyse, alt sammen dækket i del 4 af denne bog. Skellet betyder enormt meget: en fejl, der fanges i kodegennemgang, koster minutter at rette, og ingen bruger ser den nogensinde; den samme fejl, hvis den undslipper til produktion, kan koste timers hændelsesrespons, reel skade for kunder og et målbart knæk i tilliden. Denne metrik er i reel forstand det endelige scorecard for alt, hvad del 4 dækker, da en stigende andel af undslupne fejl trods stærke interne kvalitetsmetrikker (kompleksitet, dækning, statisk analyse) som regel betyder, at de interne signaler ikke faktisk fanger de fejltilstande, der betyder noget for rigtige brugere.

Dette emne behandler undslupne fejl med den alvor, deres pris fortjener, mens det står imod fristelsen til at behandle det rå antal som en simpel resultattavle. Ikke alle fejl er ens: en tastefejl i sjældent set hjælpetekst og en fejl, der korrumperer data i et system til finansielle transaktioner, er begge, teknisk set, undslupne fejl, og at behandle dem ens producerer en metrik, der enten er for støjende til at handle på eller, værre, aktivt vildledende om, hvor den reelle risiko bor. Dette emnes kerneanbefaling, sporing vægtet efter alvorlighed med omhyggelig opmærksomhed på, hvordan fejl klassificeres, er rettet direkte mod det problem.

For store teams er andel af undslupne fejl en af de klareste broer mellem denne bogs interne ingeniørmetrikker og den kundevendte verden, del 5 som helhed beskæftiger sig med. Store virksomheder bruger den til at begrunde investering i test- og gennemgangspraksis fra del 4; offentlige organisationer, hvor en undsluppen fejl kan betyde en forkert beregning af en ydelse eller en mislykket offentlig serviceinteraktion, behandler den som et direkte mål for offentlig tillid og juridisk eksponering, ikke blot en intern ingeniørstatistik.

## Nøgleprincipper

- **Andel af undslupne fejl er det endelige scorecard for intern kvalitetspraksis.** En stigende andel trods stærke metrikker fra del 4 betyder, at de metrikker ikke fanger det, der betyder noget.
- **Alvorlighed betyder mere end rå antal.** Vægt fejl efter faktisk effekt for kunder eller virksomhed, ikke ved at behandle hvert udslip ens.
- **Konsistens i klassifikation er afgørende.** To teams, der klassificerer alvorlighed forskelligt, producerer tal, der ikke kan sammenlignes retfærdigt.
- **Denne metrik er udsat for manipulation af definitionen**, præcis som andel af ændringer, der fejler (emne 2.10): at indsnævre, hvad der tæller som en "fejl", pynter på tallet uden at reducere reel skade for kunder.
- **Kategorisering af grundårsag gør et antal til et diagnostisk værktøj.** At vide, *hvorfor* fejl undslipper, er mere handlingsrettet end kun at vide, hvor mange der gjorde.

## Anbefalinger

### Vægt undslupne fejl efter alvorlighed, ved hjælp af en konsekvent, dokumenteret skala

Klassificér hver undsluppen fejl ved hjælp af en fast skala for alvorlighed (almindeligvis kritisk, større, mindre eller en nummereret ækvivalent) baseret på faktisk effekt for kunder eller virksomhed: tab eller korruption af data, sikkerhedseksponering og fuldstændig utilgængelighed af en funktion ligger øverst; et kosmetisk problem uden funktionel effekt ligger nederst. Følg en tendens vægtet efter alvorlighed, ikke blot et råt antal, så en stigning i mindre problemer ikke visuelt druknede en mindre, men langt mere konsekvensrig stigning i kritiske.

### Standardisér kriterierne for klassifikation på tværs af teams

Forskellige teams, der selv får lov at klassificere alvorlighed, vil drive mod forskellige standarder, nogle konservative, nogle lempelige, hvilket gør sammenligning på tværs af teams meningsløs og, værre, skaber et incitament til at klassificere generøst nedad for at få et teams egne tal til at se bedre ud (en variant af emne 1.2's manipulation af definitioner). Offentliggør klare, eksempelbaserede kriterier for klassifikation, og revidér periodisk en stikprøve af klassifikationer på tværs af teams for at kontrollere konsistens.

### Følg [grundårsagen](https://en.wikipedia.org/wiki/Root_cause_analysis), ikke blot antal og alvorlighed

For hver undsluppen fejl, registrér hvorfor den undslap: et hul i testene, et overset grænsetilfælde i kravene, en forskel i miljø mellem staging og produktion, en gennemgang, der missede problemet. Aggregér disse data om grundårsager over tid for at finde systemiske mønstre, hvis en bestemt kategori (lad os sige fejl pga. forskel i miljø) dominerer jeres udslip, peger det direkte på et specifikt hul i processen, der kan rettes, frem for en vag generel opfordring til at "teste mere".

### Forbind undslupne fejl tilbage til de interne kvalitetssignaler, de stammede fra

Hvor det er muligt, så spor en undsluppen fejl tilbage til det kodeområde, den kom fra, og kontrollér, om det område viste advarselstegn i del 4's metrikker: var det et hotspot for kompleksitet (emne 4.1, emne 4.3), havde det en lav andel af dræbte mutanter (emne 4.2), flagede statisk analyse noget i nærheden (emne 4.4). Den forbindelse er det, der validerer, om jeres interne kvalitetsmetrikker faktisk forudsiger reelle fejl, kunderne oplever, eller om de måler noget, der i jeres specifikke kontekst ikke korrelerer med det, kunderne faktisk oplever.

### Værn mod, at klassifikation af fejl bliver en øvelse i at give skyld

Indram analyse af grundårsager til fejl eksplicit som et spørgsmål om systemer, efter emne 1.1's diagnostiske ramme, ikke en øvelse i at give enkeltpersoner skylden. Et team, der frygter skyld for en undsluppen fejl, har et stærkt incitament til at underrapportere, klassificere nedad eller modsætte sig grundig analyse af grundårsager, hvilket alt sammen korrumperer netop de data, dette emne afhænger af. Praksis med skyldfri post mortem, dækket i større dybde i emne 6.2, gælder direkte her.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Rå antal undslupne fejl | Enkel at rapportere | Behandler en tastefejl og en fejl, der korrumperer data, ens; støjende og vildledende |
| Sporing vægtet efter alvorlighed | Afspejler den faktiske effekt for kunder mere nøjagtigt | Kræver konsekvent, disciplineret klassifikation |
| Standarder for klassifikation, uafhængige pr. team | Fleksibel, lav overhead til koordinering | Producerer usammenlignelige tal på tværs af teams; inviterer til lempelig afdrift |
| Standardiseret, revideret klassifikation | Retfærdig, sammenlignelig, modstår manipulation | Kræver løbende styring og periodisk revisionsindsats |

Den centrale spænding er **lokal fleksibilitet versus sammenlignelighed på tværs af teams**. At lade hvert team klassificere fejlens alvorlighed på den måde, der passer til dets egen kontekst, er enklere at implementere, men producerer tal, der ikke kan sammenlignes retfærdigt eller aggregeres på organisationsniveau, og skaber et stille incitament for et team til at klassificere generøst for at beskytte sine egne metrikker. Løs spændingen ved at investere i standardiserede, dokumenterede kriterier for klassifikation og periodiske revisioner på tværs af teams og ved at behandle det som styringsarbejde (emne 1.4), der er investeringen værd i betragtning af, hvor direkte denne metrik hænger sammen med reel effekt for kunder.

## Spørgsmål at drøfte med dit team

1. **Følger vi undslupne fejl efter alvorlighed, eller behandler et råt antal et mindre kosmetisk problem på samme måde som et kritisk dataproblem?** Træk jeres faktiske dashboard frem, og kontrollér; hvis vægtning efter alvorlighed ikke allerede er på plads, er det den enkeltstående mest værdifulde ændring, dette emne anbefaler.

2. **Ville to forskellige teams klassificere den samme fejls alvorlighed på samme måde, eller er klassifikationen drevet fra hinanden i organisationen?** Vælg en reel, tvetydig tidligere fejl, og lad repræsentanter fra to forskellige teams klassificere den uafhængigt; sammenlign resultaterne ærligt.

3. **Hvad er vores mest almindelige grundårsag til undslupne fejl, og adresserer vores nuværende proces den faktisk, eller bliver vi blot ved med at reagere på individuelle hændelser, efterhånden som de opstår?** Aggregér jeres data om grundårsager over de seneste måneder, og led efter det dominerende mønster.

4. **Er vores undslupne fejl blevet sporet tilbage til områder, som vores interne kvalitetsmetrikker (kompleksitet, dækning, statisk analyse) allerede flagede som risikable?** Den forbindelse validerer, om jeres metrikker fra del 4 reelt er forudsigende i jeres specifikke kontekst, eller om de misser de fejltilstande, der faktisk betyder noget.

5. **Føles vores proces for klassifikation af fejl tryg, eller frygter ingeniører skyld, når de rapporterer eller klassificerer en fejl, de er forbundet med?** En kultur, der er tilbøjelig til at give skyld, korrumperer systematisk disse data gennem underrapportering og lempelig klassifikation; vær ærlig om jeres nuværende kultur her.

6. **Er vores andel af undslupne fejl nogensinde blevet forbedret mistænkeligt hurtigt uden en tilsvarende ændring i test- eller gennemgangspraksis?** Som med andel af ændringer, der fejler (emne 2.10), er det det klareste tegn på, at kriterierne for klassifikation, ikke den reelle risiko, flyttede sig.

## Sektorperspektiv

**Startup.** Formel klassifikation af alvorlighed er ofte unødvendig med et lille antal fejl og et lille team, der kan drøfte hver enkelt direkte. Den vane, der er værd at indføre tidligt, er blot at følge fejl konsekvent fra start, selv uformelt, så de historiske data findes, når teamet vokser sig stort nok til at have brug for mere formel analyse.

**Mindre virksomhed.** En simpel, delt skala for alvorlighed, selv tre niveauer (kritisk, større, mindre), anvendt konsekvent af den, der håndterer support og triage af fejl, fanger det meste af dette emnes værdi uden at have brug for sofistikeret værktøj eller en dedikeret kvalitetsfunktion.

**Stor virksomhed.** Konsistens i klassifikation på tværs af teams er den investering med højest løftestang her, da uensartede standarder på tværs af snesevis af teams gør sammenligning af kvalitet i hele organisationen meningsløs. Invester i dokumenterede, eksempelbaserede kriterier for klassifikation og periodisk revision, og forbind systematisk undslupne fejl tilbage til del 4's interne kvalitetssignaler for at validere, hvilke af de signaler der faktisk er forudsigende for jeres organisation.

**Offentlig sektor.** En undsluppen fejl i et offentligt vendt system eller et system til beregning af ydelser bærer juridisk vægt og vægt for offentlig tillid ud over sin ingeniørmæssige pris. Behandl klassifikation af alvorlighed med særlig strenghed for fejl, der påvirker borgervendte tjenester, og vær forberedt på, at beslutninger om klassifikation møder ekstern granskning, hvilket er et stærkt argument for dokumenterede, reviderede, konsekvente kriterier frem for ad hoc-vurderinger.

## Eksempler

**Stor virksomhed.** Et softwarefirma med abonnementer havde set sit antal undslupne fejl stige i to kvartaler, og den indledende bekymring fokuserede på det rå tal. Analyse vægtet efter alvorlighed afslørede, at stigningen næsten udelukkende var i mindre, kosmetiske problemer, sammenfaldende med et nyligt redesign af brugerfladen, mens kritiske og større fejl faktisk var faldet lidt i samme periode. Analyse af grundårsager til stigningen i mindre problemer pegede på et hul i visuel regressionstest specifikt for de nye komponenter i brugerfladen, en målrettet, billig løsning, der ville være blevet overset helt, hvis teamet havde reageret på det rå, ikke vægtede antal som en udifferentieret kvalitetskrise.

**Offentlig sektor.** En delstatlig arbejdsløshedsmyndigheds system til beregning af ydelser havde en undsluppen fejl, der i flere måneder, før den blev opdaget, fejlagtigt afviste en lille procentdel af ellers berettigede ansøgninger. En undersøgelse af grundårsagen fandt, at fejlen stammede fra et kodeområde, der atten måneder tidligere var blevet flagget som et hotspot for kompleksitet (emne 4.1, emne 4.3) i en intern kvalitetsgennemgang, men hotspottet var aldrig blevet prioriteret til afhjælpning, fordi ingen fejl endnu var opstået for at gøre risikoen konkret. Myndighedens reviderede proces vægter nu eksplicit områder flagget som hotspots højere i prioriteringen af test og gennemgang specifikt på grund af denne påviste, validerede forbindelse mellem interne kompleksitetssignaler og reel risiko for undslupne fejl.

## Business case: motiver, ROI og TCO

Afkastet af at følge andel af undslupne fejl strengt, med vægtning efter alvorlighed og analyse af grundårsager, er evnen til at rette kvalitetsinvesteringer derhen, hvor de faktisk vil reducere skade for kunder, frem for at reagere på et udifferentieret antal, der blander trivielle og alvorlige problemer vilkårligt. Eksemplet med softwarefirmaet med abonnementer ovenfor viser det tydeligt: en reaktion på det rå antal ville have udløst et bredt, ufokuseret kvalitetsinitiativ, mens svaret vægtet efter alvorlighed og informeret af grundårsager identificerede en specifik, billig, målrettet løsning.

De samlede ejeromkostninger omfatter disciplinen i klassifikation (konsekvente kriterier, periodiske revisioner) og indsatsen til at følge grundårsager, som begge primært er procesinvesteringer frem for værktøjsomkostninger. Den investering betaler sig direkte i form af pris for skade på kunder og hændelsesrespons, der undgås ved at rette kvalitetsindsatsen mod de faktiske, validerede kilder til risiko for undslupne fejl.

## Antimønstre og faldgruber

- **At behandle et råt antal fejl som metrikken:** blander trivielle og alvorlige problemer og slører det reelle signal.
- **Uensartet klassifikation af alvorlighed på tværs af teams:** gør sammenligning på tværs af teams meningsløs og inviterer til lempelig afdrift i klassifikationen.
- **Ingen sporing af grundårsager:** gør et antal til et tal uden diagnostisk værdi og efterlader systemiske mønstre usynlige.
- **En rapporteringskultur, der er tilbøjelig til at give skyld:** korrumperer data gennem underrapportering og lempelig klassifikation, netop den risiko for eksponering for incitamenter, emne 1.2 advarer om.
- **Aldrig at forbinde undslupne fejl tilbage til interne kvalitetssignaler:** misser chancen for at validere, eller afkræfte, del 4's forudsigende metrikker mod reelle resultater.
- **En mistænkeligt hurtig forbedring uden procesændring bag:** det klareste tegn på, at kriterierne for klassifikation, ikke den reelle risiko, flyttede sig.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Undslupne fejl følges, hvis overhovedet, som et råt antal uden vægtning efter alvorlighed eller analyse af grundårsager.
- **Niveau 2, Udvikl:** Der findes en vis klassifikation af alvorlighed, men standarderne varierer på tværs af teams, og sporing af grundårsager er uensartet.
- **Niveau 3, Standardisér:** Klassifikation af alvorlighed er standardiseret og dokumenteret i hele organisationen, med kategorisering af grundårsager anvendt konsekvent.
- **Niveau 4, Styr:** Undslupne fejl spores systematisk tilbage til interne kvalitetssignaler for at validere deres forudsigende værdi, og klassifikationen revideres periodisk for konsistens.
- **Niveau 5, Orkestrér:** Organisationen kan pege på specifikke, målbare reduktioner i andelen af undslupne fejl, der kan spores til målrettet, grundårsagsinformeret kvalitetsinvestering, valideret mod interne kvalitetssignaler.

## Idéer til drøftelse

1. Ville vores øverste undslupne fejl fra sidste kvartal være blevet klassificeret på samme måde af et andet team?
2. Hvad er vores mest almindelige grundårsag til undslupne fejl, og adresserer vi den faktisk?
3. Er en undsluppen fejl nogensinde blevet sporet tilbage til et område, vores interne metrikker allerede havde flagget?
4. Føler vores team sig trygge ved at rapportere og ærligt klassificere en fejl, de selv har forårsaget?
5. Hvad ville et syn vægtet efter alvorlighed på vores nuværende antal fejl afsløre, som et råt antal skjuler?

## Vigtigste pointer

- Andel af undslupne fejl er det **endelige scorecard** for intern kvalitetspraksis; en stigende andel trods stærke metrikker fra del 4 betyder, at de metrikker ikke fanger det, der betyder noget.
- **Vægt efter alvorlighed**, ved hjælp af en konsekvent, dokumenteret, revideret skala for klassifikation, aldrig et råt antal alene.
- Følg **grundårsag**, ikke blot antal og alvorlighed, for at gøre metrikken til et reelt diagnostisk værktøj.
- **Forbind undslupne fejl tilbage til interne kvalitetssignaler** (kompleksitet, dækning, statisk analyse) for at validere, om disse signaler faktisk er forudsigende.
- Værn mod en **kultur, der er tilbøjelig til at give skyld**, og som korrumperer rapportering og klassifikation gennem underrapportering og lempelig afdrift.

## Kilder og videre læsning

- *Site Reliability Engineering*, redigeret af Betsy Beyer, Chris Jones, Jennifer Petoff og Niall Richard Murphy (praksis for skyldfri post mortem, der kan anvendes på analyse af grundårsager til fejl).
- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (forholdet mellem leveringspraksis og kvalitetsresultater).
- *Code Complete*, af Steve McConnell (praksis for klassifikation af fejl og analyse af grundårsager).
- *The Field Guide to Understanding Human Error*, af Sidney Dekker (den systemiske, skyldfri indramning af undersøgelse af svigt).
