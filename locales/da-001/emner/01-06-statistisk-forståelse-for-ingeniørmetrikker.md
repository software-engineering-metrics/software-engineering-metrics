# 1.6 Statistisk forståelse for ingeniørmetrikker

## Overblik og motivation

Du behøver ikke en statistikuddannelse for at drive et metrikprogram godt, men du skal undgå et lille antal specifikke, almindelige fejl, der gør ellers velstyrede, velinstrumenterede metrikker aktivt vildledende. Et team kan gøre alt rigtigt, navngive en klar beslutning, undgå Goodharts lov, vægte mod resultater, styre ejerskabet, instrumentere pålideligt, og stadig drage den forkerte konklusion, fordi det læste et gennemsnit, hvor det havde brug for en percentil, forvekslede støj med en tendens eller faldt for en tilfældighed forklædt som en årsag. Dette emne er den mindste statistiske dømmekraft, som denne bog antager, at læseren af hvert senere emne allerede har.

Kerneproblemet er, at ingeniørmetrikker som regel er støjende, skæve og baseret på små stikprøver målt med formel statistiks målestok. Et enkelt teams ugentlige antal udrulninger er ikke en jævn klokkekurve; det er en håndfuld datapunkter med lejlighedsvise store outliers (en stor udgivelse, en hændelsesdrevet tilbagerulningsbølge). At anvende naive intuitioner bygget til store, velopdragne datasæt på den slags data producerer jævnligt selvsikre, forkerte konklusioner. At lære at opdage, hvornår et tal er for støjende til at stole på, hvornår et gennemsnit lyver for dig, og hvornår to ting, der bevæger sig sammen, intet siger om årsagssammenhæng, er ikke valgfri strenghed, det er det, der adskiller et metrikprogram, der lærer en organisation noget sandt, fra et, der lærer den noget plausibelt lydende og falsk.

I store virksomheder og i det offentlige forværres statistiske fejl, fordi en vildledende konklusion, når den først er accepteret af ledelsen, bliver handlet på i mange teams, før nogen tænker på at gentage den underliggende analyse. En statistisk naiv sammenligning mellem to divisioner, eller mellem før og efter en større omorganisering, kan forme ressourcebeslutninger i årevis på baggrund af ikke andet end støj eller en forstyrrende faktor, ingen kontrollerede for. Dette emne findes for at gøre den fejl mindre sandsynlig.

## Nøgleprincipper

- **En median eller percentil fortæller som regel mere end et gennemsnit.** Ingeniørdata er rutinemæssigt skæve på grund af outliers, som gennemsnit opsluger, og percentiler ikke gør.
- **Små stikprøver producerer støjende tal.** En procentdel beregnet ud fra en håndfuld begivenheder svinger vildt af grunde, der intet har med reel ændring at gøre.
- **Regression mod middelværdien snyder folk konstant.** En usædvanligt god eller dårlig aflæsning bliver som regel fulgt af en mere normal, med eller uden nogen indgriben.
- **Korrelation er ikke kausalitet, og forstyrrende variabler er overalt.** To metrikker, der bevæger sig sammen, kan dele en skjult tredje årsag i stedet for, at den ene driver den anden.
- **Et [kontroldiagram](https://en.wikipedia.org/wiki/Control_chart) slår en enkelt sammenligning før og efter.** At se det normale udsving er det, der lader dig skelne et reelt skift fra støj.

## Anbefalinger

### Brug som standard medianer og percentiler til skæve data

Tidsbaserede ingeniørmetrikker, gennemløbstid, genoprettelsestid efter hændelser, svarlatenstid, er næsten altid højreskæve: de fleste værdier klumper sig lavt med en lang hale af lejlighedsvise store outliers. Et gennemsnit, der trækkes af den hale, kan tegne et billede, intet typisk tilfælde ligner. Rapportér **medianen** (den midterste værdi, hvor halvdelen af observationerne ligger over og halvdelen under) sammen med den **90.** eller **95. percentil** (den værdi, under hvilken 90 % eller 95 % af observationerne falder), som tilsammen viser både det typiske tilfælde og den værste hale, et team faktisk oplever. Emnet om KPI'er i søsterbogen `software-engineering-guide` og hvert leveringsmetrikemne i del 2 af denne bog forudsætter denne vane hele vejen igennem.

### Vid, hvornår en stikprøve er for lille til at stole på

En andel af ændringer, der fejler, beregnet ud fra tre udrulninger i en stille uge, er ikke et meningsfuldt signal; en enkelt fejl flytter procentdelen fra 0 % til 33 % natten over af grunde, der intet har at gøre med den underliggende risiko. Før du reagerer på en procentbaseret metrik, så kontrollér det underliggende antal. Som en praktisk tommelfingerregel skal en rate beregnet ud fra færre end cirka tyve til tredive underliggende begivenheder behandles som støjende og kræve et længere observationsvindue, før der drages en konklusion, og det skal siges eksplicit på dashboardet, i stedet for at præsentere en ustabil procentdel fra en lille stikprøve med samme selvtillid som en stabil fra en stor.

### Vær opmærksom på regression mod middelværdien, før du tilskriver en indgriben æren

Hvis et teams værste uge nogensinde med hændelser efterfølges af ledelsens opmærksomhed og en efterfølgende forbedring, er det fristende at kreditere indgrebet. Ofte ville noget af den forbedring være sket alligevel, fordi en usædvanligt ekstrem aflæsning som regel følges af en mere typisk udelukkende som en statistisk artefakt, et fænomen kaldet **regression mod middelværdien**. Værn mod det ved at sammenligne med en længere historisk baseline frem for det enkelte ekstreme datapunkt, der udløste opmærksomheden, og ved at være passende ydmyg over, hvor meget af en observeret forbedring der skal tilskrives en specifik handling.

### Led efter forstyrrende variabler, før du hævder, at en metrik forårsagede et resultat

Når to metrikker bevæger sig sammen, udrulningsfrekvens stiger sammen med kundetilfredshed, så stå imod refleksen til at hævde, at den ene forårsagede den anden, før du har overvejet en **forstyrrende variabel**: en skjult tredje faktor, der driver begge. En ny funktionslancering kan uafhængigt øge både udrulningsfrekvens (flere opfølgende rettelser) og tilfredshed (selve funktionen), uden nogen kausal forbindelse mellem de to metrikker overhovedet. Før du præsenterer en korrelation som belæg for kausalitet, så spørg aktivt, hvad der ellers ændrede sig samtidig, og som kunne forklare begge bevægelser.

### Brug et kontroldiagram, ikke et enkelt øjebliksbillede før og efter

Et **kontroldiagram** plotter en metrik over tid med dens normale udsving vist eksplicit, typisk som bånd omkring et centralt gennemsnit. Det lader dig skelne et reelt skift, et datapunkt eller en vedvarende række uden for det normale område, fra almindelig støj, som en enkelt sammenligning før og efter ikke kan skelne. Før du erklærer "tallet blev bedre efter ændringen", så plot nok historiske data til at se, hvordan normalt udsving ser ud, og kontrollér, om aflæsningen efter ændringen faktisk falder uden for det.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Gennemsnit | Enkle, velkendte, nemme at beregne | Forvrænges af outliers på skæve ingeniørdata |
| Medianer og percentiler | Robuste over for outliers, viser det typiske tilfælde og halen sammen | Lidt mindre velkendte for ikke-tekniske målgrupper |
| Enkelt sammenligning før og efter | Hurtig, intuitiv, nem at præsentere | Sårbar over for regression mod middelværdien og støj |
| Kontroldiagrammer og længere baselines | Skelner pålideligt reelle skift fra støj | Kræver flere historiske data og mere forklaring over for en ikke-teknisk målgruppe |

Den centrale spænding er **enkelhed versus strenghed**. Gennemsnit og enkelte sammenligninger før og efter er nemmere at beregne og forklare, hvilket netop er grunden til, at de dominerer uformel rapportering, men de er også de to teknikker, der mest sandsynligt producerer en selvsikker, forkert konklusion på den slags støjende, skæve data, denne bogs metrikker genererer. Løs spændingen ved som standard at bruge de mere strenge teknikker, medianer, percentiler og kontroldiagrammer, til enhver beslutning med reel konsekvens, og ved at reservere de enklere teknikker til udforskende blikke med lav indsats, hvor en fejlagtig aflæsning koster lidt.

## Spørgsmål at drøfte med dit team

1. **Hvilke af vores dashboardfliser rapporterer et gennemsnit, hvor en median eller percentil ville fortælle en sandere historie?** Tidsbaserede ingeniørmetrikker er næsten altid skæve, og et gennemsnit på skæve data kan se fint ud, mens det typiske tilfælde, eller den værste hale, fortæller en helt anden historie. Gennemgå specifikt dine tidsbaserede fliser for denne substitution.

2. **Hvor lille er den underliggende stikprøve bag vores procentbaserede metrikker, og behandler vi en metrik fra ti begivenheder med samme selvtillid som en fra tusind?** En ustabil rate fra en lille stikprøve, præsenteret uden sit underliggende antal, inviterer til overreaktion på støj. Kontrollér din andel af ændringer, der fejler, og lignende procentfliser for dette hul.

3. **Har vi nogensinde givet en indgriben æren for en forbedring, som regression mod middelværdien alligevel ville have givet?** Det er en af de nemmeste statistiske fejl at begå og en af de sværeste at bemærke bagefter, fordi indgrebet og forbedringen reelt skete i den rækkefølge. Se tilbage på en nylig "vi rettede det"-historie, og spørg ærligt, om baselinesammenligningen var lang nok til at udelukke dette.

4. **Hvor har vi antaget, at én metrik forårsagede en anden, uden at tjekke for en forstyrrende variabel?** At to ting bevæger sig sammen er almindeligt; at den ene forårsager den anden er en stærkere påstand, der kræver mere belæg. Vælg en korrelation, dit team i øjeblikket tror på, og forsøg at navngive en plausibel forstyrrende faktor, der ville forklare den uden nogen kausal forbindelse overhovedet.

5. **Har vi nok historiske data til at vide, hvordan normalt udsving ser ud for vores vigtigste metrikker, eller sammenligner vi enkelte punkter?** Uden en fornemmelse for det normale område ser enhver enkelt aflæsning alarmerende eller betryggende ud afhængigt af humøret frem for belæg. Drøft, om din mest overvågede metrik nogensinde er blevet plottet som et kontroldiagram frem for et enkelt tal.

6. **Hvordan kommunikerer vi i øjeblikket usikkerhed til ikke-tekniske interessenter, og antyder vores dashboard mere præcision, end dataene faktisk understøtter?** Et diagram uden nogen angivelse af normalt udsving eller stikprøvestørrelse kan få en ledelse til at overreagere på støj eller, lige så ofte, afvise et reelt signal som støj. Drøft, hvordan din rapportering kunne kommunikere dette ærligt uden at blive ulæselig.

## Sektorperspektiv

**Startup.** Små teams genererer små stikprøver næsten alle vegne, hvilket betyder, at advarslen om små stikprøver i dette emne betyder noget konstant. Stå imod at drage stærke konklusioner af en enkelt dårlig uge eller en enkelt fantastisk; med blot en håndfuld datapunkter er det ærlige svar på "er det en tendens" ofte "det ved vi ikke endnu".

**Mindre virksomhed.** Indbyggede dashboards fra færdige værktøjer er ofte som standard indstillet til gennemsnit og sammenligninger af enkelte perioder, fordi det er enklest at beregne og vise. Skift til medianer for tidsbaserede metrikker, hvor værktøjet tillader det, og vær skeptisk over for enhver overskrift som "op 40 % denne måned" beregnet ud fra et lille underliggende antal.

**Stor virksomhed.** Statistiske fejl i denne skala bliver bagt ind i ressource- og omorganiseringsbeslutninger, der påvirker hundredvis af mennesker. Investér i analytikere eller indlejrede datapraktikere, der kan bygge ordentlige kontroldiagrammer og tjekke for forstyrrende faktorer, før en sammenligning mellem forretningsenheder eller før og efter en større ændring bliver præsenteret for ledelsen som afgjort faktum.

**Offentlig sektor.** En statistisk naiv sammenligning, der fodrer en offentlig rapport eller en budgetbegrundelse, kan have uforholdsmæssigt store konsekvenser i den virkelige verden og inviterer netop til den slags granskning, der offentligt afslører sjusket analyse. Anvend de mere strenge teknikker, kontroldiagrammer, dokumenterede stikprøvestørrelser, kontrol for forstyrrende faktorer, som en stående praksis for alt, der offentliggøres eksternt, ikke blot som en lejlighedsvis bedste indsats.

## Eksempler

**Stor virksomhed.** En softwarevirksomheds ledelse fejrede en forbedring på 25 % i andelen af ændringer, der fejler, måneden efter udrulningen af en ny politik for kodegennemgang, og krediterede politikken direkte. Et nærmere kig viste, at "før"-måneden havde været usædvanligt dårlig, drevet af ét teams migrering, der gik galt, og at den underliggende stikprøvestørrelse i begge måneder var under tredive udrulninger i hele virksomheden. Et kontroldiagram med tolv måneders historik viste, at den nye aflæsning lå godt inden for normalt udsving og ikke var et reelt trinskift, og at politikkens faktiske effekt, selv om den var reel, var langt mindre end overskriftstallet antydede.

**Offentlig sektor.** En offentlig transportmyndighed rapporterede en stor forbedring i punktlighed år for år for et nydigitaliseret planlægningssystem ved at sammenligne et enkelt "før"-kvartal med et enkelt "efter"-kvartal. En uafhængig gennemgang fandt, at "før"-kvartalet havde sammenfaldt med en uafhængig anlægslukning, der havde trykket præstationen på hele netværket, og en længere baseline viste, at punktligheden allerede havde været i bedring, før det nye system blev lanceret. Myndighedens reviderede rapport brugte et fuldt flerårigt kontroldiagram og tilskrev en mere beskeden, men mere forsvarlig, forbedring til selve det nye system.

## Business case: motiver, ROI og TCO

Afkastet af statistisk forståelse er undgået fejlstyring: en organisation, der korrekt tilskriver en forbedring, eller korrekt genkender støj som støj, bruger sin næste investering, hvor den faktisk vil hjælpe, i stedet for at jagte en fantomeffekt. Virksomhedseksemplet ovenfor er typisk: en virksomhed, der troede, at dens gennemgangspolitik alene drev en forbedring på 25 %, kunne underinvestere i andre reelle bidragydere eller overdrive politikkens værdi på en måde, der vildleder fremtidige beslutninger.

De samlede omkostninger ved statistisk strenghed er for det meste et skift i vane frem for nyt værktøj: at vælge en median frem for et gennemsnit, at kontrollere en stikprøvestørrelse, før man reagerer, at plotte en længere baseline, før man erklærer sejr. Disse vaner koster lidt at indføre og forebygger den meget større, sværere at opdage pris for beslutninger truffet på selvsikre, forkerte konklusioner.

## Antimønstre og faldgruber

- **At rapportere et gennemsnit på skæve tidsbaserede data:** skjuler det typiske tilfælde og halen bag ét enkelt vildledende tal.
- **At reagere på en procentdel uden synlig stikprøvestørrelse:** behandler støj fra en håndfuld begivenheder, som var det en stabil, meningsfuld tendens.
- **At give en indgriben æren uden at udelukke regression mod middelværdien:** en almindelig, let at begå, svær at bemærke fejl.
- **At hævde kausalitet ud fra korrelation uden at overveje forstyrrende faktorer:** overdriver, hvad dataene faktisk understøtter.
- **At sammenligne et enkelt øjebliksbillede før og efter i stedet for at plotte en længere baseline:** kan ikke skelne et reelt skift fra almindeligt udsving.
- **At antyde mere præcision, end dataene understøtter, i rapportering til ledelsen:** inviterer til overreaktion på støj eller afvisning af et reelt signal.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Metrikker rapporteres som rå gennemsnit og enkelte øjebliksbilleder før og efter uden opmærksomhed på stikprøvestørrelse, skævhed eller udsving i baseline.
- **Niveau 2, Udvikl:** Nogle analytikere anvender uformelt medianer eller percentiler, men der er ingen konsekvent organisatorisk praksis, og forstyrrende faktorer kontrolleres sjældent.
- **Niveau 3, Standardisér:** Medianer og percentiler er standard for skæve tidsbaserede metrikker; stikprøvestørrelser vises sammen med procentbaserede metrikker i hele organisationen.
- **Niveau 4, Styr:** Kontroldiagrammer med historiske baselines er standardpraksis for enhver påstand om et reelt skift; forstyrrende variabler overvejes aktivt, før der fremsættes kausale påstande i rapportering.
- **Niveau 5, Orkestrér:** Statistisk strenghed er indbygget i selve værktøjet, dashboards viser som standard percentiler og kontrolbånd, og organisationen kan påvise, at en specifik tidligere beslutning blev rettet, fordi en statistisk naiv aflæsning blev fanget, før den formede strategien.

## Idéer til drøftelse

1. Hvilke af vores nuværende dashboardoverskrifter ville se anderledes ud, hvis vi erstattede et gennemsnit med en median?
2. Har vi nogensinde ændret en beslutning, fordi en procentdel viste sig at være baseret på en meget mindre stikprøve, end vi antog?
3. Hvilken nylig "vi forbedrede denne metrik"-historie bør vi gentage med henblik på regression mod middelværdien?
4. Hvor kunne to af vores metrikker være korrelerede gennem en skjult tredje årsag frem for, at den ene driver den anden?
5. Viser vores vigtigste diagrammer et normalt udsving eller blot en enkelt tendenslinje?

## Vigtigste pointer

- Foretræk **medianer og percentiler** frem for gennemsnit for skæve, tidsbaserede ingeniørmetrikker.
- Behandl en **procentdel fra en lille stikprøve** som støjende, og sig det eksplicit i stedet for at reagere på den som på en stabil tendens.
- Vær opmærksom på **regression mod middelværdien**, før du giver en indgriben æren for en forbedring, der fulgte efter en usædvanligt dårlig aflæsning.
- **Korrelation er ikke kausalitet**; led aktivt efter forstyrrende variabler, før du fremsætter en kausal påstand.
- Brug et **kontroldiagram med en reel historisk baseline**, ikke et enkelt øjebliksbillede før og efter, til at skelne et reelt skift fra almindelig støj.

## Kilder og videre læsning

- *The Signal and the Noise*, af Nate Silver (at skelne reelt signal fra støj i ufuldkomne data).
- *How to Measure Anything*, af Douglas W. Hubbard (statistisk ræsonnement til organisatorisk måling).
- *Understanding Variation: The Key to Managing Chaos*, af Donald J. Wheeler (kontroldiagrammer og skellet mellem almindelig og særlig variation).
- *Thinking, Fast and Slow*, af Daniel Kahneman (kognitive bias, herunder regression mod middelværdien og illusionen om den kausale fortælling).
- *The Visual Display of Quantitative Information*, af Edward R. Tufte (ærlig, integer præsentation af kvantitative data).
