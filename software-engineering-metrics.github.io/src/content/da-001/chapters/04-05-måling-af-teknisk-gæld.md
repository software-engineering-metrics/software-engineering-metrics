# 4.5 Måling af teknisk gæld

## Overblik og motivation

**[Teknisk gæld](https://en.wikipedia.org/wiki/Technical_debt)**, en metafor opfundet af Ward Cunningham, beskriver den ophobede pris for tidligere genveje, hensigtsmæssige beslutninger, der leverede noget hurtigere, men efterlod kodebasen sværere at ændre bagefter, på samme måde som økonomisk gæld lader dig bruge nu på bekostning af renter senere. Hver kodebase bærer en vis teknisk gæld, og det er ikke automatisk en fiasko; metaforens reelle værdi er, at den indrammer gæld som en håndterbar afvejning frem for enten en skamfuld hemmelighed eller en uundgåelig, permanent byrde. Dette emne handler om at gøre den afvejning synlig og håndterbar gennem måling, frem for at efterlade den som en vag, vedvarende nedprioriteret bekymring, som hver ingeniør fornemmer, men ingen kan handle på med belæg.

De emner, der går forud for dette, kompleksitet (4.1), dækning (4.2), omsætning og hotspots (4.3) og statisk analyse (4.4), afdækker hvert en facet af teknisk gæld. Dette emnes opgave er syntese: at omsætte de separate signaler, plus elementer, der aldrig dukker op i nogen automatiseret scanning (en udokumenteret arkitekturgenvej, en bevidst udskudt migrering), til én enkelt, prioriteret, synlig backlog, der konkurrerer retfærdigt om investering mod funktionsarbejde, frem for som standard at tabe den konkurrence, simpelthen fordi den ingen metrik har knyttet til sig og ingen fortaler i planlægningsmøder.

For store teams ophobes uhåndteret teknisk gæld på en måde, der er reelt farlig og let at undervurdere: hver ny genvej gør den næste ændring lidt sværere, hvilket skaber pres for flere genveje, som forværrer yderligere. Store virksomheder og offentlige organisationer, der vedligeholder systemer over mange år, er især udsat for den ophobende effekt, og dette emnes centrale anbefaling, en synlig, kvantificeret, prioriteret gældsbacklog, er den mekanisme, der lader en organisation faktisk styre afvejningen bevidst i stedet for at drive ind i krise.

## Nøgleprincipper

- **Teknisk gæld er en bevidst metafor for en håndterbar afvejning, ikke en skamfuld hemmelighed.** Noget gæld, taget på sig med vilje, er en rimelig forretningsbeslutning.
- **Umålt gæld taber som standard konkurrencen om prioritering mod funktionsarbejde,** ikke fordi den betyder mindre, men fordi den ikke har nogen synlig fortaler.
- **Kvantificér gæld i termer, beslutningstagere kan veje: pris for at rette versus pris for at bære den.** En vag påstand om, at "koden er rodet", konkurrerer sjældent godt mod en konkret funktionsanmodning.
- **Gæld ophobes.** Hver ny genvej gør fremtidige ændringer marginalt sværere, og den effekt accelererer, hvis den ikke styres.
- **Ikke al gæld bør betales af.** Noget er værd at bære på ubestemt tid, hvis prisen for at rette den overstiger prisen for at leve med den.

## Anbefalinger

### Byg én synlig, samlet backlog for teknisk gæld

Konsolidér signalerne fra denne dels tidligere emner, outliers i kompleksitet, områder med lav andel af dræbte mutanter, hotspots, uløste fund fra statisk analyse, ved siden af gældselementer, kun et menneske kan identificere (en arkitekturgenvej, en udskudt opgradering af en afhængighed, en udokumenteret midlertidig løsning), til én synlig backlog, fulgt med samme strenghed og synlighed som din funktionsbacklog. Gæld, der kun lever i individuelle ingeniørers hukommelse eller i spredte kodekommentarer, findes reelt ikke i forhold til prioritering.

### Kvantificér hvert gældselements pris og dets bæreomkostning

For hvert element, estimér to tal: prisen for at rette det (ingeniørtid, risikoen ved selve rettelsen) og prisen for at bære det uden at rette det (hvor meget langsommere går relateret arbejde, hvor meget yderligere risiko for fejl bærer det, hvor meget blokerer det andet arbejde). Den ramme, lånt direkte fra den økonomiske gældsmetafors egen logik, giver beslutningstagere et reelt grundlag for sammenligning med funktionsarbejdets pris og forventede værdi, frem for en abstrakt, ukvantificeret klage.

### Prioritér efter effekt, ikke alder eller højeste fortaler

Rangordn gældselementer efter kombinationen af bæreomkostning og, hvor ofte den berørte kode røres (emne 4.3's data om omsætning er direkte nyttige her): et element i et sjældent ændret hjørne af kodebasen, hvor ubehageligt det end er, betyder langt mindre end et, der sidder direkte i vejen for din mest aktive udvikling. Stå imod at prioritere efter, hvilket element der har stået længst på backloggen, eller hvilken ingeniør der mest vedholdende går ind for det, hvoraf ingen pålideligt korrelerer med faktisk forretningsmæssig effekt.

### Afsæt dedikeret, beskyttet kapacitet til afhjælpning af gæld

En gældsbacklog, der element for element skal konkurrere mod hver indkommende funktionsanmodning i hver planlægningscyklus, har tendens til at tabe konsekvent, fordi funktionsarbejde som regel har en klarere, mere umiddelbar forretningsmæssig fortaler. Afsæt en beskyttet procentdel af ingeniørkapaciteten, et almindeligt mønster er et sted mellem 10 % og 20 %, specifikt til afhjælpning af gæld, besluttet på forhånd frem for forhandlet på ny hver sprint, så betaling af gæld sker som en selvfølge frem for kun i kølvandet på en krise.

### Accepter noget gæld som permanent, og sig det eksplicit

Ikke hvert element hører hjemme på en aktiv plan for afhjælpning. Hvor prisen for at rette reelt overstiger prisen for at bære et element på ubestemt tid, især for kode i et stabilt, sjældent berørt, snart udfaset system, så dokumentér den beslutning eksplicit, og flyt elementet til en bevidst nedprioriteret kategori frem for at lade det stå på ubestemt tid på en aktiv backlog, hvor dets fortsatte tilstedeværelse i det stille antyder arbejde, der aldrig faktisk vil ske.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Ingen formel sporing af gæld | Ingen overhead | Gæld taber som standard konkurrencen om prioritering; ophobes usynligt |
| Uformel, ad hoc bevidsthed om gæld | Lav overhead, en vis synlighed | Uensartet; afhænger af individuel hukommelse og fortalervirksomhed |
| Formel, kvantificeret gældsbacklog | Konkurrerer retfærdigt om investering; muliggør informerede afvejninger | Kræver løbende vedligeholdelse og disciplin i kvantificering |
| Beskyttet, dedikeret kapacitet til afhjælpning | Sikrer, at betaling af gæld sker konsekvent, ikke kun reaktivt | Reducerer kapaciteten til funktionsarbejde på kort sigt |

Den centrale spænding er **umiddelbart leveringspres versus langsigtet vedligeholdelighed**. Funktionsarbejde har næsten altid en klarere, mere umiddelbar forretningsmæssig fortaler end afhjælpning af gæld, hvilket skaber strukturelt pres for, at gæld taber hver enkelt prioriteringsbeslutning, selv når dens kumulative pris er høj. Løs spændingen ved helt at tage afhjælpning af gæld ud af konkurrencen element for element gennem beskyttet, forhåndsafsat kapacitet, så afvejningen afgøres bevidst og på forhånd frem for at blive genforhandlet, og som regel tabt, i hver eneste planlægningscyklus.

## Spørgsmål at drøfte med dit team

1. **Har vi én enkelt, synlig backlog for teknisk gæld, eller lever bevidstheden om gæld mest i individuelle ingeniørers hoveder?** Hvis det ærlige svar er det sidste, er det det enkeltstående største hul, dette emne anbefaler at lukke først.

2. **For vores øverste gældselement: kunne vi angive dets pris for at rette og dets pris for at bære i termer, der er specifikke nok til at sammenligne retfærdigt med en funktionsanmodning?** Hvis ikke, så øv denne kvantificering sammen som en gruppeøvelse ved hjælp af et reelt, aktuelt element.

3. **Hvilken procentdel af vores ingeniørkapacitet går faktisk til afhjælpning af gæld, og blev den procentdel besluttet bevidst, eller er det blot det, der overlever, efter funktionsarbejde er allokeret?** Se på jeres faktiske seneste sprinter, og beregn det reelle tal frem for at støtte jer til indtryk.

4. **Er vores gældsbacklog prioriteret efter reel forretningsmæssig effekt, eller efter det element, der er blevet rejst mest vedholdende eller har stået længst?** Krydshenvis jeres nuværende prioritering mod data om omsætning (emne 4.3), og se, om de to stemmer overens.

5. **Hvilke gældselementer bør vi eksplicit acceptere som permanente i stedet for at lade dem stå på ubestemt tid på en aktiv backlog?** Identificér mindst ét reelt element, hvor prisen for at rette reelt overstiger prisen for at bære, og drøft at flytte det til en eksplicit nedprioriteret status.

6. **Hvordan har vores gældsbacklog ændret sig over det seneste år, voksende, skrumpende eller flad, og matcher den tendens vores intuition?** Følg det over tid frem for kun at se på et enkelt øjebliksbillede; tendensen er ofte mere informativ end den absolutte størrelse på et givet tidspunkt.

## Sektorperspektiv

**Startup.** Bevidst, informeret gæld er ofte en rimelig strategi på dette stadie: at levere hurtigt for at validere en hypotese, med en klar plan om at gense specifikke genveje, hvis produktet slår an, er en legitim afvejning, ikke en fiasko. Risikoen er at miste overblikket over, hvilke genveje der var bevidste og reversible, versus hvilke der i det stille er blevet permanente, uundersøgte forpligtelser, efterhånden som kodebasen vokser.

**Mindre virksomhed.** En simpel, delt liste, selv en uformel, der navngiver jeres kendte genveje og deres omtrentlige pris for at rette, er som regel tilstrækkelig i denne skala. Den vigtigste disciplin, der er værd at indføre, er periodisk at gense den liste frem for at lade den ophobe sig i det stille og blive usynlig gennem fortrolighed.

**Stor virksomhed.** Beskyttet, forhåndsafsat kapacitet til afhjælpning betyder mest her, da konkurrencen om prioritering mellem gæld og funktionsarbejde element for element pålideligt favoriserer funktioner på tværs af snesevis af teams samtidigt uden en strukturel modvægt. Standardisér praksis for kvantificering af gæld i hele organisationen, så gældselementer kan sammenlignes retfærdigt på tværs af teams til investeringsbeslutninger på porteføljeniveau.

**Offentlig sektor.** Langlivede systemer ophober gæld over år eller årtier af inkrementelle, hver for sig rimelige kravændringer, ofte uden nogen formel sporing af gæld overhovedet, indtil en krise tvinger sagen. En kvantificeret, synlig gældsbacklog er et reelt overbevisende værktøj til at begrunde moderniseringsbudget over for tilsynsorganer, da den omsætter en vag påstand om, at "systemet er gammelt", til en specifik, prissat sag for investering.

## Eksempler

**Stor virksomhed.** Et telekommunikationsfirmas faktureringsplatform havde ophobet over et årti af uformelt anerkendt, men aldrig formelt fulgt teknisk gæld, hvor ingeniører rutinemæssigt nævnte "faktureringsmotoren er noget rod" i retrospektiver uden nogen opfølgning. En ny ingeniørdirektør krævede, at hvert team byggede en kvantificeret gældsbacklog, der estimerede pris for at rette og bæreomkostning for hvert element, og afsatte fremover fast 15 % af ingeniørkapaciteten til afhjælpning af gæld. Inden for et år var de fem elementer med højest bæreomkostning, som udgjorde en lille brøkdel af den samlede backlog efter antal, blevet løst, og andelen af ændringer, der fejler (emne 2.10), for faktureringsrelaterede udrulninger var målbart forbedret, hvilket påviste den uforholdsmæssigt store effekt af at målrette de elementer med højest bæreomkostning først frem for at arbejde sig gennem backloggen i vilkårlig rækkefølge.

**Offentlig sektor.** En national statistikmyndigheds centrale databehandlingssystem, oprindeligt bygget over tyve år tidligere, havde aldrig haft en formel vurdering af gæld, trods udbredt uformel anerkendelse blandt medarbejdere af, at betydelige dele var skrøbelige og dårligt forstået. En struktureret vurdering af gæld, der kombinerede fund fra statisk analyse, hotspotdata og interviews med de få tilbageværende ingeniører, der forstod de ældste komponenter, producerede en kvantificeret, prioriteret backlog, der direkte understøttede en flerårig budgetanmodning om modernisering. Afgørende var det, at vurderingen også eksplicit identificerede flere stabile, sjældent berørte arvede komponenter som rimelige at lade være uændrede, hvilket undgik en unødigt bred og dyr omskrivning af hele systemet til fordel for en målrettet investering i de specifikke områder, dataene viste bærer den højeste løbende pris.

## Business case: motiver, ROI og TCO

Afkastet af at styre teknisk gæld bevidst er undgået ophobende pris: hver uadresseret genvej gør fremtidige ændringer marginalt sværere, og den effekt accelererer uden indgriben og producerer til sidst en kodebase så skrøbelig, at selv simple ændringer bliver langsomme og risikable. Eksemplet med telekommunikation ovenfor viser afkastet konkret: at målrette et lille antal af de elementer med højest bæreomkostning producerede en målbar forbedring af levering og kvalitet, uforholdsmæssig i forhold til den beskedne brøkdel af den samlede backlog, disse elementer udgjorde.

De samlede ejeromkostninger er den beskyttede kapacitet, der afsættes til afhjælpning, typisk 10 % til 20 % af ingeniørtiden, hvilket er en reel, synlig omkostning, der konkurrerer med funktionshastigheden på kort sigt. Den omkostning er umagen værd, fordi alternativet, uhåndteret, ophobende gæld, til sidst koster langt mere i langsommere levering og forhøjede fejlrater på tværs af hele kodebasen, ikke blot de specifikke elementer, der blev efterladt uadresseret.

## Antimønstre og faldgruber

- **Ingen synlig, fulgt backlog for gæld:** gæld taber som standard konkurrencen om prioritering og ophobes usynligt.
- **Vage, ukvantificerede påstande om gæld:** konkurrerer sjældent godt mod konkrete, kvantificerede funktionsanmodninger i planlægningen.
- **At prioritere gæld efter alder eller mængden af fortalervirksomhed frem for effekt:** leder begrænset kapacitet til afhjælpning forkert.
- **Ingen beskyttet kapacitet til afhjælpning:** betaling af gæld sker kun reaktivt, efter en krise, frem for som rutinemæssig, bevidst praksis.
- **At behandle al gæld som lige værd at rette:** spilder indsats på elementer med lav effekt, mens elementer med høj bæreomkostning forbliver uadresseret.
- **At lade gæld stå på ubestemt tid på en aktiv backlog uden nogensinde at beslutte, at den er permanent:** antyder fremtidigt arbejde, der aldrig faktisk vil ske, og roder i den reelle prioritering.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Teknisk gæld drøftes uformelt, uden fulgt backlog og uden kvantificering; den taber konsekvent til funktionsarbejde.
- **Niveau 2, Udvikl:** Nogle teams følger gæld uformelt, men der er ingen konsekvent kvantificering, synlighed på tværs af teams eller beskyttet kapacitet til afhjælpning.
- **Niveau 3, Standardisér:** En synlig, kvantificeret gældsbacklog findes i hele organisationen, med beskyttet kapacitet til afhjælpning afsat konsekvent.
- **Niveau 4, Styr:** Gældselementer prioriteres efter målt effekt (bæreomkostning kombineret med omsætning), og permanent accepteret gæld dokumenteres eksplicit frem for at blive efterladt uklar.
- **Niveau 5, Orkestrér:** Organisationen kan pege på specifikke, målbare forbedringer af levering eller kvalitet, der kan spores til målrettet afhjælpning af gæld, og styring af gæld er et rutinemæssigt, betroet input til beslutninger om ingeniørinvesteringer ved siden af funktionsarbejde.

## Idéer til drøftelse

1. Hvad er vores enkelt gældselement med højest bæreomkostning lige nu, og kunne vi kvantificere det?
2. Hvilken procentdel af vores kapacitet går i dag faktisk til afhjælpning af gæld?
3. Hvilket gældselement bør vi eksplicit acceptere som permanent frem for at lade det stå uklart på vores backlog?
4. Er vores gældsbacklog vokset, skrumpet eller forblevet flad over det seneste år?
5. Hvad ville en kvantificeret vurdering af gæld afsløre, som vores nuværende uformelle bevidsthed overser?

## Vigtigste pointer

- Teknisk gæld er en **håndterbar afvejning, ikke en skamfuld hemmelighed**; kvantificér den frem for at efterlade den som en vag, vedvarende nedprioriteret bekymring.
- **Kvantificér pris for at rette versus pris for at bære** for hvert element, så det konkurrerer retfærdigt mod funktionsarbejde.
- **Prioritér efter effekt** (bæreomkostning kombineret med omsætning), ikke efter alder eller mængden af fortalervirksomhed.
- Afsæt **beskyttet, dedikeret kapacitet til afhjælpning**, besluttet på forhånd, da gæld ellers pålideligt taber konkurrencen element for element mod funktionsarbejde.
- **Accepter eksplicit noget gæld som permanent**, hvor prisen for at rette overstiger prisen for at bære, frem for at efterlade den uklart på en aktiv backlog.

## Kilder og videre læsning

- Cunningham, Ward, "The WyCash Portfolio Management System" (OOPSLA-erfaringsrapport, 1992): oprindelsen til metaforen om teknisk gæld.
- *Managing Technical Debt: Reducing Friction in Software Development*, af Philippe Kruchten, Robert Nord og Ipek Ozkaya (en omfattende behandling af måling og styring af teknisk gæld).
- *Refactoring: Improving the Design of Existing Code*, af Martin Fowler (de teknikker til afhjælpning, en gældsbacklog i sidste ende trækker på).
- *Your Code as a Crime Scene*, af Adam Tornhill (hotspotanalyse som input til prioritering af gæld, emne 4.3).
