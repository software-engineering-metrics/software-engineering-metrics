# 1.1 Hvorfor måle softwareudvikling

## Overblik og motivation

Softwareudvikling modsætter sig måling på en måde, som industriel produktion ikke gør. En fabrikslinje producerer identiske enheder, så at tælle dem fortæller noget reelt. Softwarearbejde producerer unikke artefakter under konstant skiftende krav, så en naiv optælling, af commits, af linjer, af lukkede tickets, fortæller næsten intet om den leverede værdi. Det hul mellem vanskeligheden ved at måle softwarearbejde og det meget reelle behov for at vide, om det går godt, er der, hvor hele denne bog lever. Dette emne handler om at lukke det hul ærligt: ikke ved at lade, som om softwarearbejde kan tælles lige så let som standardvarer, men ved at være præcis om, hvad måling kan og ikke kan gøre for en ingeniørorganisation.

Måling findes for at besvare spørgsmål, som en organisation ellers ikke kan besvare med sikkerhed: bliver vores levering hurtigere eller langsommere, forbedres kvaliteten eller forringes den, brænder ingeniørerne ud, betaler denne investering sig. Uden metrikker besvares de spørgsmål af den, der taler mest selvsikkert i lokalet, som regel den mest senior eller mest overbevisende person til stede, og det svar er ofte forkert. [Softwareudviklings](https://en.wikipedia.org/wiki/Software_engineering)teams, der springer måling over, undgår ikke at foretage vurderinger af deres egen præstation. De foretager blot de vurderinger på mavefornemmelse, anekdoter og nyhedsbias i stedet for belæg.

For store teams holder dette op med at være rart at have og bliver strukturelt. Et team på seks kan dele en mental model af, hvordan det går, gennem daglig samtale. En afdeling på seks hundrede, spredt over tidszoner og forretningsenheder, kan ikke. I den skala er et fælles, betroet sæt tal det eneste praktiske erstatning for den uformelle bevidsthed, et lille team får gratis. Ledelsen i store virksomheder har brug for metrikker til at fordele investeringer mellem snesevis af teams, der konkurrerer om det samme budget. Offentlige ingeniørorganisationer har brug for metrikker til at påvise over for lovgivere og offentligheden, at bevilgede midler skabte reel kapacitet og ikke blot aktivitet. I begge miljøer er "vi arbejdede hårdt" ikke belæg; et forsvarligt tal er.

## Nøgleprincipper

- **Mål for at lære, ikke for at dømme.** Den primære hensigt med en ingeniørmetrik er at informere en beslutning, ikke at give en person eller et team karakter.
- **Et tal uden en tilknyttet beslutning er pynt.** Hvis ingen aflæsning af en metrik ville ændre, hvad du gør næste gang, hører den ikke hjemme på et dashboard.
- **Måling er et middel, ikke målet.** Målet er bedre software, leveret mere pålideligt, af et bæredygtigt team. Metrikker findes kun for at tjene det mål.
- **Hver metrik har en pris.** Instrumentering, gennemgangstid og den risiko for adfærdsforvridning, der behandles i emne 1.2, koster alle noget. En metrik skal tjene den pris ind igen.
- **Tavshed er også en beslutning.** At vælge ikke at måle noget er et valg med konsekvenser, ikke en neutral standard.

## Anbefalinger

### Start fra beslutningen, ikke fra dashboardet

Før du instrumenterer noget, så navngiv den beslutning, metrikken skal informere. "Vi vil vide, om vores nye udrulningspipeline reducerede antallet af hændelser" er et beslutningsformet spørgsmål; "lad os følge alt, hvad værktøjet kan eksportere" er det ikke. At arbejde baglæns fra en beslutning holder metriksættet lille og holder hver flise forsvarlig, når nogen spørger, hvorfor den findes. Hvis du ikke kan navngive den beslutning, en metrik ville informere, så byg den ikke endnu. Emne 1.3 går dybere ind i resultat-frem-for-output-udgaven af denne disciplin.

### Adskil diagnostisk brug fra evaluerende brug

En metrik, der bruges til at diagnosticere et systemproblem (hvorfor kryber vores gennemløbstid op), opfører sig helt anderledes end den samme metrik brugt til at vurdere en person eller et team (hvis gennemløbstid er værst). Det første inviterer til undersøgelse og forbedring. Det andet inviterer til skjulning og manipulation, fordi tallet nu har en omdømmemæssig eller økonomisk konsekvens knyttet til sig. Beslut eksplicit, skriftligt, hvilken brug en metrik er til, og lad aldrig en diagnostisk metrik glide over i evaluerende brug uden bevidst at gentænke risikoen. Dette skel vender konstant tilbage gennem hele bogen og er formaliseret i afsnittet om ikke-mål i det metrikcharter, der beskrives i emne 1.4.

### Behandl måling som en hypotese, ikke et faktum

En metrik er en stedfortræder for noget, du faktisk interesserer dig for, ikke selve tingen. Udrulningsfrekvens er en stedfortræder for leveringsevne, ikke selve leveringsevnen. Behandl hver metrik som en hypotese under løbende afprøvning: følger dette tal stadig det, vi bekymrer os om, eller er verden rykket videre og har efterladt stedfortræderen? Vend tilbage til det spørgsmål med en fast rytme, i stedet for at antage, at en metrik, der var godt valgt for to år siden, stadig er godt valgt i dag, især når værktøjer, teamstruktur eller (se del 7) selve arbejdets karakter ændrer sig.

### Gør fraværet af måling synligt

I store organisationer er det farligste hul ikke en dårlig metrik, men et område, ingen måler overhovedet, fordi det er svært at instrumentere: udvikleroplevelse, friktion i afhængigheder mellem teams, erosion af institutionel viden. Navngiv disse huller eksplicit i dit metrikcharter, i stedet for at lade dem forblive usynlige som standard. En organisation, der ved, hvad den ikke måler, og hvorfor, står langt stærkere end en, der i det stille har glemt, at de områder findes.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Kraftig instrumentering, mange metrikker | Bred synlighed, færre blinde vinkler | Dashboardtræthed, større manipulationsflade, højere vedligeholdelsesomkostning |
| Minimale, beslutningsdrevne metrikker | Fokus, lav overhead, hver metrik er forsvarlig | Risiko for at overse et opdukkende problem uden for det valgte sæt |
| Metrikker kun til diagnose | Opmuntrer til ærlig rapportering og undersøgelse | Ledelsen kan stadig uformelt bruge dem evaluerende |
| Metrikker knyttet til individuel vurdering | Føles ansvarligt, nemt at forklare for direktionen | Stærkt incitament til manipulation; skader tilliden; måler som regel det forkerte |

Den centrale spænding er **dækning versus fokus**, og den skærpes af **diagnose versus dom**. For få metrikker, og du udvikler blinde vinkler, der først viser sig som en krise; for mange, og ingen kan handle på nogen af dem, mens hver eneste, du lægger evaluerende vægt på, inviterer til forvridning. Løs det ved at starte minimalt og beslutningsdrevet, kun tilføje en metrik, når en specifik, navngiven beslutning har brug for den, og ved eksplicit at forsvare den rent diagnostiske grænse i styringsarbejdet i emne 1.4 i stedet for at lade den erodere som standard.

## Spørgsmål at drøfte med dit team

1. **For hver metrik på vores nuværende dashboard: hvilken beslutning ville en god aflæsning og en dårlig aflæsning hver især udløse?** Hvis begge aflæsninger fører til den samme handling, eller slet ingen handling, er metrikken pynt. Gennemgå dit dashboard flise for flise, og kræv et ærligt svar for hver. Denne øvelse halverer rutinemæssigt et oppustet dashboard i ét møde, fordi det meste af vildtvæksten ophobes af metrikker, ingen nogensinde fjerner, snarere end metrikker, nogen bevidst har tilføjet af en grund, der stadig holder.

2. **Hvilke af vores metrikker bruges diagnostisk, og hvilke er i det stille blevet evaluerende?** En metrik bygget til at forstå en systembegrænsning kan glide over i at blive brugt til at rangordne teams eller enkeltpersoner, uden at nogen har besluttet det med vilje, ofte gennem en henkastet bemærkning på et gennemgangsmøde, der bliver til vane. Når den glidning er sket, holder tallet op med at være troværdigt, fordi folk nu har en grund til at få det til at se godt ud frem for at få det til at være nøjagtigt. Navngiv hver metriks tilsigtede brug skriftligt, og kontrollér den nuværende praksis mod den.

3. **Hvad måler vi ikke, fordi det er svært at instrumentere, og hvad koster det hul os?** De farligste blinde vinkler er dem, der aldrig når et dashboard netop fordi de modstår nem måling: friktion i afhængigheder mellem teams, erosion af institutionel viden eller den stille ophobning af skrøbelige midlertidige løsninger. Medbring en liste over de ting, alle privat bekymrer sig om, men ingen følger, og vær ærlig om hvorfor.

4. **Hvis vi slettede denne metrik i morgen, hvem ville mærke det, og hvad ville de miste?** En metrik, ingen ville savne, er en metrik, der ikke informerer nogen beslutning. Spørgsmålet afslører forfængelighedsfliser, der overlever udelukkende på inerti. For en stor organisation med snesevis af teamdashboards er denne beskæringsdisciplin lige så vigtig som disciplinen i at tilføje nye metrikker i første omgang.

5. **Hvad koster hver metrik på vores dashboard faktisk at producere og vedligeholde, inklusive den ingeniørtid, der ligger bag instrumenteringen?** Metrikker er ikke gratis. Pipelines, dashboards og den gennemgangstid, der bruges på at diskutere et tal, har alle en tilbagevendende pris, der er let at undervurdere, fordi den er fordelt over mange små opgaver frem for én synlig budgetpost. Medbring den faktiske indsats til instrumentering og vedligeholdelse, og vej den mod beslutningsværdien fra spørgsmål 1.

6. **Hvor er måling blevet en erstatning for dømmekraft, og hvor er dømmekraft blevet en erstatning for måling?** Begge fejltilstande er reelle. Et team, der outsourcer enhver beslutning til et dashboard, mister den kontekstuelle dømmekraft, der fanger det, tallet overser; et team, der ignorerer tilgængelige data til fordel for den højeste stemme i lokalet, gentager netop det problem, som dette emne åbner med. Målet er metrikker, der informerer dømmekraften, ikke metrikker, der erstatter den.

## Sektorperspektiv

**Startup.** Med en håndfuld ingeniører er det meste af det, dette emne advarer imod, drift mod evaluerende brug, blinde vinkler, oppustede dashboards, let at undgå, simpelthen fordi alle taler sammen dagligt. Risikoen er den modsatte: at springe måling helt over, fordi den føles som en overhead, teamet ikke har råd til. Vælg to eller tre beslutningsformede spørgsmål (leverer vi hurtigt nok, holder kvaliteten) og instrumentér kun dem.

**Mindre virksomhed.** Uden et dedikeret platforms- eller datateam, så læn dig op ad det, dine eksisterende værktøjer allerede rapporterer, i stedet for at bygge tilpasset instrumentering. En betalingsudbyders dashboard, et supportværktøjs svarmetrikker og din CI-udbyders byggehistorik dækker som regel de beslutninger, der betyder mest. Stå imod fristelsen til at købe en dedikeret analyseplatform for ingeniørarbejde, før du har bevist, at du vil handle på det, den fortæller dig.

**Stor virksomhed.** Den centrale risiko er metrikker, der i det stille glider fra diagnostisk til evaluerende brug, efterhånden som de ruller op gennem ledelseslagene, og dashboards, der vokser ved tilvækst, fordi ingen ejer opgaven at beskære dem. Styring (emne 1.4) er ikke valgfrit i denne skala. Standardisér definitioner på tværs af forretningsenheder, og byg en regelmæssig pensioneringsgennemgang ind i selve metrikprogrammet.

**Offentlig sektor.** Her har metrikker ofte lovbestemt eller budgetmæssig vægt, hvilket øger både værdien af at få dem rigtige og prisen for at få dem forkerte. Et tal, der rapporteres til et lovgivende organ eller et tilsynsorgan, har brug for en dokumenteret metode, en stabil definition på tværs af rapporteringsperioder og ærlighed om sine begrænsninger. Behandl "det måler vi ikke i øjeblikket" som et svar, du måske skal forsvare, ikke en privat fejl, der skal skjules.

## Eksempler

**Stor virksomhed.** Et globalt forsikringsselskabs ingeniørorganisation var vokset til over tres scrum-teams, hver med sit eget uformelle dashboard, ingen sammenlignelige med noget andet. Ledelsen kunne ikke besvare et grundlæggende spørgsmål: hvilken af vores ti strategiske platformsinvesteringer leverer faktisk hurtigere software. Løsningen var ikke flere metrikker, men færre, bedre: organisationen definerede en fælles, beslutningsdrevet kerne af DORA-metrikker (emne 2.10), beregnet ens overalt ud fra de samme pipelinedata, pensionerede fyrre teamspecifikke dashboards og kunne endelig sammenligne investeringsområder på et fælles grundlag inden for to kvartaler.

**Offentlig sektor.** En national skattemyndigheds digitale serviceteam var blevet bedt af et tilsynsudvalg om at påvise afkastet af et flerårigt moderniseringsprogram. Teamets eksisterende metrikker var udelukkende interne og aktivitetsbaserede: gennemførte story points, lukkede sprints. Intet af det besvarede udvalgets egentlige spørgsmål. Teamet byggede i stedet et lille sæt resultatmetrikker, mediantid til at løse en borgers indberetningsproblem, adoptionsgrad for den digitale kanal og andel af undslupne fejl i det nye system, og rapporterede dem kvartalsvis med en dokumenteret metode. Udvalgets spørgsmål skiftede fra "bevis, at I arbejder" til "hvordan gentager vi det i den næste myndighed", hvilket er det resultat, et godt valgt metriksæt skal give.

## Business case: motiver, ROI og TCO

Afkastet af bevidst måling er beslutningskvalitet. En organisation, der med belæg kan sige "vores gennemløbstid blev forbedret med 30 % efter platformsinvesteringen", kan forsvare den investering, gentage det, der virkede, og stoppe det, der ikke gjorde. En organisation, der støtter sig til anekdoter, kan ikke gøre noget af det med sikkerhed og ender med at føre de samme diskussioner om hver budgetrunde, fordi ingen kan pege på et tal, begge sider stoler på.

Prisen for måling er ikke dashboardet. Det er den løbende disciplin: instrumentering, vedligeholdelse af definitioner og den periodiske beskæring, dette emne anbefaler. Disse samlede ejeromkostninger er reelle, men beskedne sammenlignet med prisen for alternativet, som er en stor organisation, der træffer teknologibeslutninger for millioner af dollars på grundlag af den, der argumenterede mest overbevisende i lokalet. Afkastet af et metrikprogram er ikke metrikkerne selv; det er de beslutninger, der blev bedre på grund af dem.

## Antimønstre og faldgruber

- **At måle alt, hvad værktøjet eksporterer:** gør et dashboard til støj og inviterer til manipulation over en enorm flade uden tilsvarende beslutningsværdi.
- **Metrikker uden en navngiven beslutning:** pynt, der koster vedligeholdelsesindsats og ikke fortæller nogen noget, der kan handles på.
- **Stille glidning fra diagnostisk til evaluerende brug:** den hurtigste enkeltvej til at ødelægge tilliden til et tal.
- **At behandle en metrik som fakta frem for hypotese:** en stedfortræder, der var rigtig for to år siden, kan være forkert i dag, og ingen kontrollerer det.
- **At forveksle fraværet af et dårligt tal med tilstedeværelsen af et godt:** en metrik, du aldrig kigger på, kan ikke fortælle dig, at noget er galt.
- **At bygge målekapacitet, før man har besluttet, hvad man skal beslutte:** instrumentering på jagt efter et spørgsmål spilder reel ingeniørtid.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Metrikker, hvis de overhovedet findes, er ad hoc, personlige for den, der byggede dem, og ingen kan sige, hvilken beslutning nogen af dem informerer.
- **Niveau 2, Udvikl:** Et grundlæggende sæt metrikker findes for nogle teams, mest kopieret fra et framework eller et værktøjs standardindstillinger, uden en klar forbindelse tilbage til en beslutning.
- **Niveau 3, Standardisér:** Hver fulgt metrik har et dokumenteret formål og en eksplicit klassifikation som diagnostisk eller evaluerende, anvendt konsekvent i hele organisationen.
- **Niveau 4, Styr:** Metrikker gennemgås med en fast rytme mod de beslutninger, de informerer; metrikker, der holder op med at fortjene deres plads, pensioneres, og hele sættet måles på pris såvel som værdi.
- **Niveau 5, Orkestrér:** Måling er en levende kapacitet: organisationen identificerer rutinemæssigt sine egne blinde vinkler, afprøver, om dens stedfortrædere stadig følger virkeligheden, og behandler selve metrikprogrammet som noget, der skal forbedres, ikke blot vedligeholdes.

## Idéer til drøftelse

1. Hvilken metrik på vores dashboard ville vi have sværest ved at begrunde at beholde, hvis vi blev spurgt i dag?
2. Hvilken beslutning har vi truffet i det seneste kvartal ved hjælp af en metrik frem for en mening?
3. Hvor i vores organisation er en diagnostisk metrik i det stille blevet evaluerende?
4. Hvad er vi bange for at måle, og hvorfor?
5. Hvis vores metrikprogram forsvandt i morgen, hvilke beslutninger ville blive dårligere?

## Vigtigste pointer

- Måling findes for at tjene **beslutninger**, ikke for sin egen skyld; en metrik uden en tilknyttet beslutning er pynt.
- Hold **diagnostisk** brug adskilt fra **evaluerende** brug, skriftligt, og hold øje med stille glidning mellem dem.
- Behandl hver metrik som en **hypotese** om, hvad den repræsenterer, ikke et afgjort faktum, og vend tilbage til den hypotese med en rytme.
- Tavshed, at vælge ikke at måle noget, er selv en beslutning med konsekvenser; gør blinde vinkler synlige i stedet for at lade dem forblive usynlige som standard.
- De samlede omkostninger ved et metrikprogram er reelle; vej dem eksplicit mod den beslutningsværdi, hver metrik giver.

## Kilder og videre læsning

- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (forskningsgrundlaget for resultatbaseret måling af ingeniørarbejde).
- *How to Measure Anything*, af Douglas W. Hubbard (et generelt framework til at kvantificere ting, der synes umulige at måle).
- *Measuring and Managing Performance in Organizations*, af Robert D. Austin (den grundlæggende analyse af den dysfunktion, måling kan indføre i en organisation).
- *Thinking, Fast and Slow*, af Daniel Kahneman (de kognitive bias, der gør uhjulpet dømmekraft til en upålidelig erstatning for måling).
- Googles program DevOps Research and Assessment (DORA), [dora.dev](https://dora.dev/) (den løbende State of DevOps-forskning, denne bog støtter sig til hele vejen igennem).
