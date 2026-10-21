# 3.5 Metrikker for kommunikation og samarbejde

## Overblik og motivation

**Kommunikation og samarbejde (communication and collaboration)**, C'et i SPACE (emne 3.1), måler, hvordan information faktisk flyder mellem mennesker og teams: hvor let dokumentation kan findes, hvor jævnt viden spredes i et team, hvor godt afhængigheder på tværs af teams koordineres, og hvordan nye teammedlemmer integreres i strømmen af fælles forståelse. Denne dimension er ofte den mindst instrumenterede af de fem, netop fordi den er sværere at observere end leveringsdata og mindre personlig end tilfredshedsdata, og det hul er en fejl, fordi sammenbrud her ofte er grundårsagen til problemer, der viser sig, fejlagtigt tilskrevet, i alle andre dimensioner.

En stigende andel af ændringer, der fejler (emne 2.10), som ligner et testproblem, er undertiden i virkeligheden et kommunikationsproblem: et team, der ikke vidste om en afhængigheds ændring, før den gik i stykker i produktion. En faldende tendens i tilfredshed (emne 3.2), der ligner et arbejdsbyrdeproblem, er undertiden i virkeligheden et isolationsproblem: en ingeniør, der i det stille er blevet holdt uden for de samtaler, hvor beslutninger træffes. Dette emnes centrale argument er, at kommunikation og samarbejde fortjener direkte måling netop fordi deres svigt optræder forklædt som andre problemer, og et team, der jagter den forkerte grundårsag, spilder reel indsats på at rette det forkerte.

For store teams bliver denne dimension strukturelt sværere at opretholde netop efterhånden som den bliver vigtigere. Et teams koordinering på fem personer sker gennem daglig nærhed og kræver næsten ingen bevidst måling; en organisation på femhundrede spredt over tidszoner og forretningsenheder afhænger af dokumentation, findbarhed og mekanismer til koordinering på tværs af teams, der skal designes bevidst og overvåges aktivt, fordi de uformelle kanaler, der virkede i lille skala, simpelthen ikke rækker så langt.

## Nøgleprincipper

- **Kommunikationssammenbrud optræder ofte forklædt som andre problemer.** Et kvalitets- eller tilfredshedsproblem kan have en samarbejdsrelateret grundårsag.
- **Denne dimension er den sværeste at instrumentere automatisk**, og fristelsen er at springe den helt over; stå bevidst imod den fristelse.
- **Koncentration af viden er en målbar risiko, ikke blot en vag bekymring.** Følg, hvor snævert kritisk viden er samlet.
- **Friktion i afhængigheder mellem teams er ofte usynlig for de involverede teams,** indtil nogen måler den direkte.
- **Hastigheden af onboarding er en direkte, målbar stedfortræder for, hvor godt fælles forståelse faktisk flyder** i en organisation.

## Anbefalinger

### Mål koncentrationen af viden direkte

Følg, hvor mange mennesker der kompetent kan gennemgå, ændre eller drive hver kritisk systemkomponent: en komponent med kun én kvalificeret person har en **[bus factor](https://en.wikipedia.org/wiki/Bus_factor)** på én, en alvorlig og ofte usynlig risiko (emnet om at opretholde langlivede systemer i søsterbogen `software-engineering-guide` dækker dette i større dybde). Blame-data fra versionsstyring, kombineret med optegnelser over vagtrotation, kan afdække denne koncentration automatisk: led efter komponenter, hvor en enkelt forfatter eller en enkelt vagthavende står for en uforholdsmæssig stor andel af ændringer eller hændelsesresponser over en meningsfuld periode.

### Mål friktion i afhængigheder mellem teams med et direkte signal

Følg, hvor lang tid en anmodning på tværs af teams, en nødvendig API-ændring, en opdatering af et delt bibliotek, en koordineret udgivelse, tager fra den rejses til den er løst, i ånden ligesom opdelingen af cyklustid i emne 2.6, men anvendt specifikt på koordinering mellem teams frem for inden for et team. Et team, der konsekvent venter uger på en afhængighed, et andet team ejer, har et samarbejdsproblem, der ikke vil vise sig rent i nogen af de to teams egne interne leveringsmetrikker.

### Brug dokumentationens findbarhed, ikke blot dens eksistens, som signalet

En wiki fuld af forældede eller uopdagelige sider er ikke belæg for god kommunikation blot fordi indhold teknisk set findes et sted. Følg, hvor muligt, hvor ofte dokumentation faktisk tilgås, hvor ofte et nyt teammedlem rapporterer, at vedkommende ikke kunne finde et svar, vedkommende havde brug for, eller hvor ofte det samme spørgsmål stilles gentagne gange i en chatkanal, fordi svaret, selv om det er dokumenteret, ikke kunne findes. Det forbinder direkte dokumentationens kvalitet (emne 4.6) med denne dimensions samarbejdsproblemer.

### Følg onboardingtid til produktivt bidrag som en direkte stedfortræder

Tiden fra et nyt teammedlem begynder til vedkommendes første meningsfulde, selvstændige bidrag er en stærk, praktisk stedfortræder for, hvor godt fælles forståelse faktisk flyder i en organisation: et team, hvor viden udelukkende bor i folks hoveder, onboarder langsomt og uforudsigeligt; et team med reelt god dokumentation, klart ejerskab og tilgængelig mentorordning onboarder hurtigere og mere konsekvent. Følg denne metrik eksplicit, og behandl en lang eller meget varierende onboardingtid som et samarbejdssignal, ikke blot en HR-bekymring.

### Kortlæg de faktiske kommunikationsnetværk periodisk, ikke blot organisationsdiagrammer

Et organisationsdiagram beskriver, hvem der skal rapportere til hvem; det beskriver sjældent, hvem der faktisk taler med hvem for at få arbejdet gjort. Periodisk, let analyse af kommunikationsmønstre, netværk for kodegennemgang (hvem gennemgår hvis arbejde) eller overlap i mødedeltagelse, kan afsløre en reel samarbejdsstruktur, der afviger væsentligt fra det formelle organisationsdiagram, og ofte afslører en uformel flaskehals (én person, alle router igennem) eller en isoleret lomme (et underteam, der er drevet ud af den bredere informationsstrøm), som ellers ville forblive usynlig.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Ingen direkte måling af samarbejde | Lav overhead | Grundårsager tilskrives fejlagtigt andre dimensioner; risici forbliver usynlige |
| Sporing af koncentration af viden | Afdækker direkte en reel, alvorlig risiko (bus factor) | Kræver kombination af data fra flere systemer (versionsstyring, vagtberedskab) |
| Sporing af friktion i afhængigheder mellem teams | Afslører koordineringsproblemer, der er usynlige inden for hvert af de to teams | Kræver bevidst instrumentering; ikke automatisk fra eksisterende værktøjer |
| Kortlægning af kommunikationsnetværk | Afslører den reelle, uformelle struktur bag organisationsdiagrammet | Kan føles invasiv, hvis den ikke håndteres med samme omhu som tilfredshedsdata |

Den centrale spænding er **instrumenteringens vanskelighed versus diagnostisk værdi**. Denne dimension er reelt sværere at måle automatisk end leverings- eller aktivitetsdata, og netop den vanskelighed er grunden til, at mange organisationer springer den over, selv om dens svigt ofte er den skjulte grundårsag til problemer, der tilskrives andre dimensioner. Løs spændingen ved at starte med de mest værdifulde, mest overkommelige signaler, koncentration af viden og friktion i afhængigheder mellem teams, som begge i vid udstrækning kan udledes af eksisterende data fra versionsstyring og sagshåndtering, før du forsøger en mere ambitiøs analyse af kommunikationsnetværk.

## Spørgsmål at drøfte med dit team

1. **Kender vi vores bus factor for hver kritisk systemkomponent, eller ville vi først finde ud af det den hårde vej, når den ene person, der forstår den, er utilgængelig?** Træk data fra versionsstyring og vagtberedskab for jeres mest kritiske systemer, og kontrollér ærligt, hvor koncentreret viden faktisk er.

2. **Hvor lang tid tager en typisk anmodning om en afhængighed på tværs af teams at løse, og ville nogen af de involverede teams have bemærket den friktion uden bevidst at måle den?** Vælg en nylig afhængighed på tværs af teams, og spor dens faktiske tidslinje; svaret er ofte længere, og mindre synligt for de involverede, end begge teams antog.

3. **Når vi for nylig har haft et kvalitets- eller tilfredshedsproblem, kunne et kommunikations- eller samarbejdssammenbrud så have været en del af den reelle grundårsag?** Se tilbage på en nylig hændelse eller et fald i tilfredshed, og stil specifikt dette spørgsmål, frem for at acceptere den første, mere åbenlyse forklaring.

4. **Hvor lang tid tager det for et nyt teammedlem at yde sit første meningsfulde, selvstændige bidrag, og hvor meget varierer den tid fra person til person?** En lang eller meget varierende onboardingtid er et direkte, målbart symptom på, hvor godt fælles forståelse faktisk flyder på dit team.

5. **Matcher vores uformelle kommunikationsnetværk vores formelle organisationsdiagram, eller er der opstået en skjult flaskehals eller en isoleret lomme, som ingen har navngivet?** Hvis I aldrig har set direkte på dette, er den mangel i sig selv værd at drøfte.

6. **Kan vores dokumentation faktisk findes, eller findes den blot et sted, der er svært at finde?** Spørg et nyligt nyt teammedlem, eller forsøg bevidst at besvare et reelt spørgsmål udelukkende ved hjælp af jeres dokumenterede ressourcer, og se, hvordan oplevelsen faktisk går.

## Sektorperspektiv

**Startup.** Kommunikation sker naturligt gennem nærhed og daglig samtale i et lille team, og formel måling er som regel unødvendig. Den risiko, man skal holde øje med, er, at bus factor koncentrerer sig farligt, efterhånden som teamet vokser ud over den størrelse, hvor uformel osmose stadig når alle, ofte omkring otte til tolv personer.

**Mindre virksomhed.** En simpel, periodisk, ærlig samtale, "hvem er den eneste person, der forstår dette system", afslører ofte de mest kritiske risici ved koncentration af viden uden at have brug for formel instrumentering. Prioritér at dokumentere de to eller tre mest skrøbelige, mest koncentrerede vidensområder først.

**Stor virksomhed.** Friktion i afhængigheder mellem teams og koncentration af viden skalerer begge dårligt her, da flere teams betyder mere koordineringsflade og flere kritiske systemer, der kan ende med at være ejet af en skrumpende pulje af erfarne eksperter. Invester bevidst i den instrumentering, dette emne anbefaler, da uformel bevidsthed reelt ikke kan dække en organisation i denne skala.

**Offentlig sektor.** Langlivede systemer og lange ansættelsesperioder, der er almindelige i offentlige organisationer, kan skabe alvorlig bus factor-risiko, der skjuler sig bag tilsyneladende stabilitet, da et system, der ikke har skiftet hænder i et årti, kan afhænge helt af en eller to personer tæt på pensionering. Behandl måling af koncentration af viden som en bekymring om driftskontinuitet, ikke blot en ingeniørmæssig finesse.

## Eksempler

**Stor virksomhed.** Et logistikfirmas platformsteam opdagede, først efter en kritisk hændelse under en nøgleingeniørs ferie, at en central rutealgoritme havde en effektiv bus factor på én: historikken i versionsstyring viste, at en enkelt person havde forfattet over 90 % af komponentens seneste ændringer, og optegnelsen over vagtrotationen viste, at den samme person personligt havde løst hver relateret hændelse de foregående to år. Teamet indførte et bevidst program til at sprede viden, parsessioner og rotation af ejerskabet af relaterede hændelser, og en opfølgende analyse otte måneder senere viste, at bus factor var steget til fire, hvor den oprindelige ingeniør var frigjort til at tage nyt arbejde med højere løftestang på sig i stedet for at forblive et permanent single point of failure.

**Offentlig sektor.** En delstatlig ydelsesmyndigheds ingeniørteam målte for første gang friktion i afhængigheder mellem teams efter gentagne, uformelt bemærkede forsinkelser i en delt tjeneste til verifikation af berettigelse. Dataene viste, at medianventetiden på en afhængighedsændring fra det delte serviceteam var elleve dage, langt længere, end begge teams havde antaget, da de blev spurgt uformelt, og grundårsagen viste sig at være en uklar, udokumenteret anmodningsproces frem for nogen kapacitetsmangel. At offentliggøre en klar, enkel anmodningsproces og et forpligtende mål for svartid for den delte tjeneste bragte medianventetiden ned under to dage inden for ét kvartal, uden at ekstra bemanding var nødvendig.

## Business case: motiver, ROI og TCO

Afkastet af at måle kommunikation og samarbejde direkte er at fange grundårsager, som andre dimensioner tilskriver fejlagtigt: et kvalitetsproblem, der ligner et hul i testene, men i virkeligheden er et kommunikationssammenbrud, spilder indsats, når et team forsøger at rette det ved at tilføje flere tests frem for at rette den underliggende koordineringssvigt. Eksemplet med bus factor ovenfor viser den mest markante udgave af dette afkast: en organisation, der proaktivt opdager og retter en alvorlig risiko ved koncentration af viden, undgår den katastrofale pris ved at opdage den under en faktisk krise, når den ene person, der forstod et kritisk system, reelt er utilgængelig.

De samlede ejeromkostninger er for det meste instrumenteringsindsats, kombination af data fra versionsstyring, vagtberedskab og sagshåndtering på måder, der ikke er automatiske fra start, plus den periodiske disciplin i eksplicit at gennemgå koncentration af viden og friktion i afhængigheder. Den pris er beskeden sammenlignet med prisen for en reel bus factor-krise eller en kronisk, uløst svigt i koordineringen mellem teams.

## Antimønstre og faldgruber

- **At springe denne dimension over, fordi den er svær at instrumentere automatisk:** lader grundårsager forblive fejlagtigt tilskrevet andre, lettere målbare dimensioner.
- **At behandle et organisationsdiagram som et nøjagtigt billede af reelle kommunikationsmønstre:** ofte forkert, og hullet er netop der, hvor skjulte flaskehalse lever.
- **At ignorere bus factor, indtil en krise tvinger opdagelsen frem:** den enkeltstående mest skadelige fejltilstand, dette emne advarer imod.
- **At antage, at dokumentationens eksistens er lig med dens brugbarhed:** forældet eller uopdageligt indhold giver lille reel kommunikationsværdi.
- **At måle friktion mellem teams, men ikke handle på en klar, løselig grundårsag, når den er fundet:** spilder den diagnostiske investering.
- **At behandle langsom, varierende onboarding som udelukkende et HR-spørgsmål frem for et samarbejdssignal i ingeniørarbejdet:** misser en reelt nyttig, målbar stedfortræder.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Kommunikation og samarbejde måles slet ikke; bus factor og friktion mellem teams opdages kun gennem krise.
- **Niveau 2, Udvikl:** Der findes en vis uformel bevidsthed om koncentration af viden, men ingen konsekvent måling eller proaktiv undersøgelse.
- **Niveau 3, Standardisér:** Bus factor og friktion i afhængigheder mellem teams måles konsekvent for kritiske systemer og delte tjenester i hele organisationen.
- **Niveau 4, Styr:** Kortlægning af kommunikationsnetværk afslører periodisk skjulte flaskehalse og isolerede lommer, og onboardingtid følges som en direkte stedfortræder for sundheden i fælles forståelse.
- **Niveau 5, Orkestrér:** Organisationen reducerer proaktivt risikoen ved koncentration af viden og friktion mellem teams, før de forårsager hændelser, og kan pege på specifikke indsatser, bevidst spredning af viden, afklarede processer for afhængigheder, der målbart forbedrede denne dimension.

## Idéer til drøftelse

1. Hvad er vores bus factor for vores enkelte mest kritiske system, ærligt talt?
2. Hvilken afhængighed på tværs af teams har forårsaget mest friktion i det seneste kvartal, og målte vi den?
3. Ville et nyt teammedlem kunne finde vores dokumentation, eller blot opdage, at den teknisk set findes et sted?
4. Matcher vores uformelle kommunikationsnetværk vores organisationsdiagram?
5. Hvilket kvalitets- eller tilfredshedsproblem kunne i virkeligheden have en samarbejdsrelateret grundårsag, vi ikke har undersøgt?

## Vigtigste pointer

- Svigt i kommunikation og samarbejde **optræder ofte forklædt som andre problemer**; en grundårsag, der fejlagtigt tilskrives den forkerte dimension, spilder indsats.
- Følg **koncentration af viden (bus factor)** direkte ved hjælp af data fra versionsstyring og vagtberedskab, frem for at vente på, at en krise afslører den.
- Mål **friktion i afhængigheder mellem teams** eksplicit; den er som regel usynlig for de involverede teams, indtil den måles.
- Brug **onboardingtid til produktivt bidrag** som en direkte, praktisk stedfortræder for, hvor godt fælles forståelse flyder.
- Kortlæg periodisk **reelle kommunikationsnetværk**, da de ofte afviger væsentligt fra det formelle organisationsdiagram.

## Kilder og videre læsning

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck og Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Team Topologies*, af Matthew Skelton og Manuel Pais (interaktionsformer mellem teams og design af afhængigheder mellem teams).
- *Peopleware: Productive Projects and Teams*, af Tom DeMarco og Timothy Lister (uformelle kommunikationsstrukturer og deres indvirkning på produktiviteten).
- Conway, Melvin E., "How Do Committees Invent?" (1968): oprindelsen til Conways lov, om forholdet mellem kommunikationsstruktur og systemstruktur.
