# 4.3 Kodeomsætning og hotspotanalyse

## Overblik og motivation

**Kodeomsætning (code churn)** måler, hvor hyppigt en fil eller et modul ændrer sig over tid, linjer tilføjet, ændret og slettet på tværs af successive commits. Alene er omsætning et temmelig svagt signal: nogle filer ændrer sig ofte, fordi de er under aktiv, sund udvikling, og nogle ændrer sig sjældent, fordi de er stabile og korrekte, ikke fordi de er forsømt. Den reelle diagnostiske kraft i dette emnes tilgang kommer af at kombinere omsætning med kompleksitet (emne 4.1): en fil, der både er hyppigt ændret og meget kompleks, et **hotspot**, er uforholdsmæssigt tilbøjelig til at være en kilde til fejl og en bremse for teamets hastighed, og empirisk forskning bekræfter det konsekvent på tværs af mange kodebaser og organisationer.

**Hotspotanalyse**, populariseret af Adam Tornhills arbejde med softwareanalyse, er specifikt værdifuld, fordi den ikke kræver nogen manuel undersøgelse eller subjektiv dømmekraft for at finde sine mål. [Versionsstyringens](https://en.wikipedia.org/wiki/Version_control) historik indeholder allerede alt, hvad der skal til for at beregne både omsætning og, kombineret med værktøj til statisk analyse, kompleksitet, for hver fil i en kodebase automatisk. Det lader et team eller en organisation identificere, med reelt belæg frem for anekdoter eller den højeste klage i et retrospektiv, præcis hvilken lille brøkdel af kodebasen der fortjener opmærksomhed til refaktorering først.

For store teams løser hotspotanalyse et reelt allokeringsproblem: en kodebase med hundredtusindvis af linjer har langt mere kode, end noget team har råd til at refaktorere udtømmende, og intuition om, hvor de værste problemer bor, er ofte forkert, skævvredet af den, der klagede senest, eller den fil, en senior ingeniør tilfældigvis ikke bryder sig om. Store virksomheder og offentlige organisationer, der styrer store, langlivede kodebaser, er afhængige af denne datadrevne prioritering til at rette reelt knappe budgetter til refaktorering mod den kode, der vil give det største afkast.

## Nøgleprincipper

- **Omsætning alene er et svagt signal; omsætning kombineret med kompleksitet er stærkt.** Kombinationen, ikke nogen af metrikkerne alene, er det, der identificerer et reelt hotspot.
- **Hotspotanalyse kræver ingen manuel undersøgelse.** Versionsstyringens historik indeholder allerede alt, hvad der skal til for at beregne den automatisk.
- **Et hotspot er et prioriteringssignal, ikke en automatisk dom.** Menneskelig dømmekraft er stadig nødvendig for at afgøre, hvilken handling et specifikt hotspot kalder på.
- **Hyppig ændring er ikke i sig selv dårlig.** Noget omsætning afspejler sund, aktiv udvikling frem for et kvalitetsproblem.
- **Denne analyse skalerer netop, hvor intuitionen fejler**: i store kodebaser, der er for store til, at nogen enkeltperson kan overskue og prioritere ud fra fornemmelse alene.

## Anbefalinger

### Beregn omsætning og kompleksitet sammen, og rangordn efter deres kombination

Udtræk ændringshyppighed pr. fil fra versionsstyringens historik over et meningsfuldt vindue, typisk seks måneder til et år, og par den med et mål for kompleksitet (emne 4.1) for de samme filer. Rangordn filer efter kombinationen, almindeligvis produktet af omsætning og kompleksitet, frem for efter nogen af metrikkerne alene, da denne kombination er det, den underliggende forskning konsekvent forbinder med forhøjede fejlrater og vedligeholdelsesomkostninger.

### Undersøg de øverste hotspots med menneskelig dømmekraft, før du handler

En rangordnet hotspotliste identificerer kandidater til opmærksomhed, ikke en automatisk handlingsliste. For hver af dine øverste hotspots, undersøg med et menneskeligt øje: er det reelt dårligt designet kode, der har brug for refaktorering, eller er det en fil, der legitimt har brug for hyppig ændring, fordi den ligger i centrum af aktiv, udviklende forretningslogik, i hvilket tilfælde prioriteten måske hellere bør være bedre tests eller klarere dokumentation end en strukturel omskrivning. Det afspejler emne 4.1's skel mellem væsentlig og tilfældig kompleksitet, her anvendt på det kombinerede signal fra omsætning og kompleksitet.

### Krydshenvis hotspots med data om hændelser og fejl

Hvor det er muligt, så kontrollér, om dine identificerede hotspots korrelerer med faktiske produktionshændelser (emne 6.2) eller data om undslupne fejl (emne 5.1). En stærk korrelation validerer hotspotanalysen som reelt forudsigende for din specifikke kodebase og styrker business casen for at handle på den; en svag eller fraværende korrelation tyder enten på et problem med datakvaliteten eller på, at omsætning og kompleksitet ikke, i din specifikke kontekst, er den rette kombination af signaler at prioritere efter.

### Følg tendensen for hotspots over successive analyser, ikke blot ét øjebliksbillede

Kør hotspotanalysen igen periodisk, kvartalsvis er almindeligt, og følg, om tidligere identificerede hotspots bliver bedre, forværres eller er løst, og om nye opstår. Et hotspot, der bliver ved på tværs af flere analysecyklusser, selv om det gentagne gange er flagget, indikerer enten, at indsatsen til afhjælpning faktisk ikke er blevet iværksat, eller at et tidligere forsøg på afhjælpning ikke adresserede det reelle underliggende problem.

### Brug hotspotdata til at informere, ikke erstatte, drøftelser om prioritering på teamniveau

Præsentér hotspotanalyse som belæg i en prioriteringsdrøftelse, ikke som et automatisk mandat, der tilsidesætter et teams egen kontekstuelle dømmekraft om, hvad der betyder mest lige nu. Et team kan have gode, legitime grunde til midlertidigt at nedprioritere et kendt hotspot, en kommende planlagt omskrivning gør inkrementel refaktorering til spildt indsats, for eksempel, og analysen bør informere den samtale, ikke træde i stedet for den.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Intuitionsbaseret prioritering | Hurtig, intet værktøj nødvendigt, udnytter teamets kontekstuelle viden | Skævvredet af nylighed, personlig præference og den, der klager højest |
| Omsætning alene | Enkel at beregne | Svagt signal alene; hyppig ændring er ikke i sig selv dårlig |
| Omsætning kombineret med kompleksitet (hotspotanalyse) | Stærk, belægsbaseret, automatisk ud fra eksisterende data | Kræver kombination af to datakilder og fortolkning af resultater med dømmekraft |
| Hotspotanalyse krydshenvist med data om hændelser | Valideret, stærkeste belæg for prioritering | Kræver pålidelig kobling mellem hændelse og kode, som ikke alle organisationer har |

Den centrale spænding er **belæg versus kontekst**. Hotspotanalyse giver objektivt, skalerbart belæg, som intuitionsbaseret prioritering ikke kan matche i størrelsen af en stor, uvant eller langlivet kodebase, men den mangler den kontekstuelle dømmekraft, et team har om, hvorfor et givet hotspot betyder noget, eller ikke gør, lige nu. Løs spændingen ved at behandle hotspotanalyse som belægsgrundlaget for en prioriteringsdrøftelse, kombineret med, aldrig som erstatning for, teamets egen kontekstuelle dømmekraft om timing og afvejninger.

## Spørgsmål at drøfte med dit team

1. **Hvad er vores fem øverste hotspots, rangordnet efter omsætning og kompleksitet kombineret, og ville den rangering matche vores teams intuition om, hvor vores værste problemer bor?** Kør analysen, og sammenlign resultatet med, hvad jeres team ville have gættet, før I så dataene; uoverensstemmelser er ofte det mest værdifulde fund.

2. **Korrelerer vores identificerede hotspots med faktiske produktionshændelser eller data om undslupne fejl?** Hvis I har dataene til at kontrollere det, så gør det direkte; hvis I ikke har, er det hul i sig selv værd at navngive som noget at bygge mod.

3. **For vores øverste hotspot lige nu: er det underliggende problem væsentlig kompleksitet, der legitimt kræver hyppig ændring, eller tilfældig kompleksitet, som en refaktorering reelt kunne rette?** Gennemgå filen sammen, og foretag denne vurdering eksplicit frem for at antage nogen af svarene.

4. **Har et tidligere identificeret hotspot bevaret sig på tværs af flere analysecyklusser, selv om det blev flagget?** Hvis ja, så undersøg ærligt hvorfor: afhjælpning blev aldrig faktisk forsøgt, eller et tidligere forsøg adresserede ikke den reelle underliggende årsag.

5. **Prioriterer vi i øjeblikket arbejde med refaktorering ud fra belæg eller ud fra den, der klagede senest eller højest?** Vær ærlig om jeres teams faktiske nuværende prioriteringsproces, og hvordan den sammenligner sig med det, en belægsbaseret hotspotanalyse ville foreslå.

6. **Hvad ville det koste os, i fejlrate eller opbremsning af leveringen, at lade vores nuværende øverste hotspot være uadresseret et år mere?** Spørgsmålet fremtvinger et konkret omkostningsestimat, der kan forankre en prioriteringsbeslutning, frem for at efterlade hotspottet som en abstrakt, let nedprioriteret bekymring.

## Sektorperspektiv

**Startup.** Formel hotspotanalyse er som regel unødvendig med en lille, ung kodebase, som hele teamet stadig kollektivt har i hovedet. Teknikken bliver værdifuld specifikt, når kodebasen er vokset ud over den størrelse, hvor nogen enkeltperson pålideligt kan identificere de værste områder ud fra hukommelsen alene, ofte et sted i det første eller andet år med vedvarende vækst.

**Mindre virksomhed.** Gratis eller billigt værktøj kan udtrække data om omsætning direkte fra din eksisterende versionsstyringshistorik med minimal opsætning; kombinér det med de kompleksitetsdata, din eksisterende linter eller dit værktøj til statisk analyse allerede rapporterer, frem for at investere i dedikeret kommerciel software til hotspotanalyse i denne skala.

**Stor virksomhed.** Hotspotanalyse er der, hvor belægsbaseret prioritering giver det største afkast, da intuitionen reelt fejler i skalaen af en kodebase, der spænder over hundredvis af tjenester og tusindvis af filer. Invester i at køre denne analyse regelmæssigt på tværs af hele kodebasen og krydshenvise mod data om hændelser for at bygge en valideret, forsvarlig sag for investering i refaktorering.

**Offentlig sektor.** Langlivede systemer, undertiden årtier gamle, passer naturligt til hotspotanalyse, da den ophobede versionsstyringshistorik giver et rigt, langsigtet signal om, hvilke dele af systemet der reelt har vist sig problematiske over tid. Den belægsbaserede tilgang er også et overbevisende, konkret værktøj til at begrunde investering i modernisering over for interessenter, der har brug for mere end en ingeniørs uformelle mening for at godkende finansiering.

## Eksempler

**Stor virksomhed.** Et forsikringsselskabs platform til behandling af skader, der spændte over mere end to millioner kodelinjer på tværs af snesevis af tjenester, havde ophobet år med uformelle klager over, at "modulet til validering af skader" var besværligt, men ingen formel prioritering var nogensinde fulgt af disse klager. En hotspotanalyse, der kombinerede seks måneders data om omsætning med kompleksitetsscorer, identificerede en helt anden fil, et delt værktøj til valutaomregning begravet dybt i en sjældent drøftet afhængighed, som det faktiske øverste hotspot, en der aldrig var kommet op i nogen klage i et retrospektiv. Krydshenvisning mod data om hændelser bekræftede, at værktøjet var impliceret i en uforholdsmæssig stor andel af fejl i finansielle beregninger det foregående år, og en målrettet refaktorering af netop det værktøj, frem for det modul, alle uformelt havde skyldt, producerede en målbar reduktion i relaterede hændelser inden for det følgende kvartal.

**Offentlig sektor.** En delstatlig køretøjsmyndigheds årtier gamle kørekortsystem blev underkastet en hotspotanalyse som led i en business case for modernisering. Analysen identificerede en lille klynge af filer, der udgjorde under 3 % af den samlede kodebase, og som var ansvarlige for en uforholdsmæssig stor andel af både omsætning og kompleksitet, og krydshenvisning mod myndighedens hændelseslog viste, at den samme klynge stod for næsten 40 % af alle rapporterede systemfejl i de foregående tre år. Det konkrete, belægsbaserede fund, langt mere overbevisende end en generel påstand om, at "systemet er gammelt og skal moderniseres", blev hjørnestenen i en vellykket budgetanmodning om en målrettet, inkrementel moderniseringsindsats fokuseret specifikt på den klynge frem for en langt dyrere fuld udskiftning af systemet.

## Business case: motiver, ROI og TCO

Afkastet af hotspotanalyse er målrettet, belægsbaseret investering: begge eksempler ovenfor viser et tilfælde, hvor formel analyse omdirigerede opmærksomheden til refaktorering væk fra, hvor uformel klage havde fokuseret den, og mod, hvor dataene faktisk viste, at problemet boede, hvilket producerede et målbart bedre afkast, end en umålrettet eller intuitionsdrevet investering ville have gjort.

De samlede ejeromkostninger er lave, da data om omsætning kommer direkte fra eksisterende versionsstyringshistorik, og kompleksitetsdata som regel allerede er tilgængelige fra værktøj til statisk analyse (emne 4.4); hovedinvesteringen er den periodiske analyseindsats og den menneskelige dømmekrafts tid til at fortolke resultater og afgøre, hvilken handling hvert identificeret hotspot kalder på.

## Antimønstre og faldgruber

- **At bruge omsætning alene uden kompleksitet:** et svagt signal alene, der kan flage sund, aktivt udviklet kode som et falsk positivt.
- **At behandle en hotspotrangering som en automatisk handlingsliste uden menneskelig dømmekraft:** overser skellet mellem væsentlig og tilfældig, der afgør det rette svar.
- **At prioritere refaktorering ud fra den højeste klage frem for belæg:** leder ofte indsatsen væk fra, hvor dataene faktisk viser, at problemet bor.
- **Aldrig at krydshenvise hotspots mod data om hændelser eller fejl:** overser valideringstrinnet, der styrker sagen for at handle på analysen.
- **At køre analysen én gang og aldrig gentage den:** overser, om indsatsen til afhjælpning faktisk virker over tid.
- **At ignorere et vedvarende flagget hotspot uden at undersøge, hvorfor afhjælpning ikke er slået igennem:** spilder den diagnostiske værdi af gentagen analyse.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Prioriteter for refaktorering sættes ud fra intuition eller mængden af klager, uden at data om omsætning eller kompleksitet informerer beslutningen.
- **Niveau 2, Udvikl:** Nogle teams tjekker uformelt data om omsætning eller kompleksitet, men der er ingen konsekvent hotspotanalyse i hele organisationen.
- **Niveau 3, Standardisér:** Hotspotanalyse, der kombinerer omsætning og kompleksitet, kører regelmæssigt og informerer konsekvent prioritering af refaktorering i hele organisationen.
- **Niveau 4, Styr:** Hotspots krydshenvises mod data om hændelser og fejl for at validere analysen, og tendensen på tværs af successive cyklusser følges aktivt.
- **Niveau 5, Orkestrér:** Organisationen kan pege på specifikke, målbare forbedringer af fejlraten eller leveringen fra investering i refaktorering informeret af hotspots, og analysen er et rutinemæssigt, betroet input til beslutninger om ingeniørinvesteringer.

## Idéer til drøftelse

1. Hvordan ville vores liste over øverste hotspots se ud, hvis vi kørte denne analyse i dag?
2. Ville den liste matche eller modsige vores teams nuværende uformelle fornemmelse af vores værste problemområder?
3. Har vi dataene til at krydshenvise hotspots mod faktiske hændelser?
4. Har et kendt problemområde bevaret sig trods tidligere forsøg på at rette det, og hvorfor?
5. Hvad ville det koste os at lade vores nuværende øverste hotspot være uadresseret et år mere?

## Vigtigste pointer

- **Omsætning kombineret med kompleksitet** identificerer reelle hotspots langt mere pålideligt end nogen af metrikkerne alene.
- Hotspotanalyse kræver **ingen manuel undersøgelse**; den kan beregnes automatisk ud fra eksisterende data fra versionsstyring og statisk analyse.
- Behandl en hotspotrangering som **belæg for prioritering**, ikke en automatisk dom; menneskelig dømmekraft er stadig nødvendig.
- **Krydshenvis hotspots mod data om hændelser og fejl** for at validere analysen og styrke sagen for at handle på den.
- Følg hotspots **på tværs af successive analysecyklusser** for at bekræfte, at afhjælpning faktisk virker, ikke blot én gang som et øjebliksbillede.

## Kilder og videre læsning

- *Your Code as a Crime Scene*, af Adam Tornhill (den grundlæggende tekst om hotspotanalyse, der kombinerer omsætning og kompleksitet ud fra data fra versionsstyring).
- *Software Design X-Rays*, af Adam Tornhill (yderligere teknikker til adfærdsbaseret kodeanalyse ved hjælp af versionsstyringens historik).
- Nagappan, Nachiappan, og Thomas Ball, "Use of Relative Code Churn Measures to Predict System Defect Density," *ICSE* (2005): empirisk forskning i forholdet mellem omsætning og fejltæthed.
- *Refactoring: Improving the Design of Existing Code*, af Martin Fowler (teknikker til at adressere tilfældig kompleksitet, når den er identificeret).
