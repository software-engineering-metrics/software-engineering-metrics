# 3.3 Præstationsmetrikker og resultatproxyer

## Overblik og motivation

**Præstation (performance)**, P'et i SPACE (emne 3.1), er den dimension, der oftest forveksles med aktivitet, og netop den forveksling findes dette emne for at forhindre. Præstation spørger, om en ingeniørs eller et teams arbejde faktisk producerede et godt [resultat](https://en.wikipedia.org/wiki/Outcome_(probability)): en funktion, der blev leveret og virkede, et system, der forblev driftssikkert, en ændring, der flyttede en forretnings- eller brugermetrik i den rette retning. Aktivitet (emne 3.4) spørger kun, hvor meget bevægelse der fandt sted. Et team kan være meget aktivt og præstere lavt, levere konstante små ændringer, der aldrig flytter et resultat, og det modsatte er lige så muligt: et team, der sjældent leverer, men hvis ændringer pålideligt lander præcis rigtigt.

Vanskeligheden ved denne dimension er, at resultater ofte ikke kan tilskrives en enkelt person eller endda et enkelt team; softwareresultater opstår af samarbejde, af beslutninger truffet måneder tidligere af folk, der siden er flyttet til andre projekter, af markedsforhold, ingen ingeniør kontrollerer. SPACE-forskerne var eksplicitte om dette: præstation bør måles på system- eller teamniveau ved hjælp af flere, konvergerende signaler, ikke reduceres til et enkelt tal og slet ikke tilskrives en enkelt ingeniør isoleret. Dette emne tager den vejledning alvorligt og behandler tilskrivning af individuel præstation som en fælde, der aktivt skal undgås, ikke en genvej, der tages, når det passer.

For store teams er det at få præstationsmåling rigtig det, der adskiller et metrikprogram, der faktisk forbedrer resultater, fra et, der blot belønner synlig travlhed. Store virksomheder, der sammenligner præstation på tværs af mange teams, har brug for signaler, der modstår manipulation gennem rå outputvolumen; offentlige organisationer, der begrunder teknologiinvesteringer over for tilsynsorganer, skal påvise, at ingeniørindsatsen producerede reelle resultater, ikke blot leverede artefakter, hvilket netop er emne 1.3's princip om resultater frem for output anvendt på denne specifikke dimension.

## Nøgleprincipper

- **Præstation måler, om arbejdet producerede et godt resultat, ikke hvor meget arbejde der fandt sted.** Det er det centrale skel fra aktivitetsdimensionen.
- **Brug flere, konvergerende signaler, aldrig et enkelt præstationstal.** Ingen enkelt stedfortræder er pålidelig nok til at stå alene.
- **Mål på team- eller systemniveau.** Tilskrivning af individuelle resultater er som regel upålidelig og inviterer til netop den manipulation, denne bog advarer imod hele vejen igennem.
- **Kvalitet er en del af præstation, ikke en separat bekymring.** Arbejde, der leveres, men ødelægger noget andet, præsterede ikke reelt godt.
- **Et præstationssignal uden en tilknyttet beslutning er pynt**, præcis efter emne 1.1's generelle princip anvendt på denne dimension.

## Anbefalinger

### Kombinér flere konvergerende signaler frem for én præstationsscore

Træk præstationsbelæg fra flere kilder: andel af ændringer, der fejler (emne 2.10), og andel af undslupne fejl (emne 5.1) for kvalitet, udrulningsresultater knyttet til faktisk adoption af funktioner (emne 5.2) for, om arbejdet betød noget, og kvalitativ vurdering fra kolleger eller leder af et teams bidrag til strategiske mål for kontekst, en ren metrik ikke kan fange. Ingen enkelt af disse er pålidelig alene; sammen, når de konvergerer mod den samme konklusion, er de langt mere troværdige, end noget enkelt tal kunne være.

### Mål på teamniveau, stå imod individuel tilskrivning

Softwareresultater er sjældent produktet af én persons arbejde alene; de opstår af designbeslutninger, feedback fra gennemgang, tidligere arbejde udført af folk, der måske siden har forladt teamet, og samarbejde på tværs af grænser. At tilskrive et resultat til en enkelt ingeniør er som regel en falsk præcision, der ignorerer den virkelighed og skaber et stærkt incitament for enkeltpersoner til at beskytte æren frem for at samarbejde frit, netop den slags incitamentsforvridning, emne 1.2 advarer imod.

### Fold kvalitet direkte ind i definitionen af præstation

En funktion, der leveres til tiden, men forårsager en bølge af produktionshændelser, præsterede ikke godt, selv om et naivt syn kun på output ville tælle den som leveret. Byg andel af ændringer, der fejler, andel af undslupne fejl og data om hændelser efter udgivelse direkte ind i, hvordan du vurderer præstation, frem for at behandle kvalitet som en separat, afkoblet bekymring, der kun måles i del 4 og del 6 af denne bog.

### Brug præstationsdata til at informere investerings- og procesbeslutninger, ikke individuelle rangeringer

Den produktive brug af præstationsdata er at beslutte, hvor man skal investere yderligere (et team, der konsekvent leverer stærke resultater, fortjener flere ressourcer og mere autonomi), og hvor man skal undersøge (et team, hvis arbejde konsekvent ikke lander, fortjener hjælp, ikke skyld, efter emne 1.1's diagnostiske ramme). At rangordne enkeltpersoner eller teams konkurrencemæssigt mod hinanden på præstationsdata inviterer til netop den manipulation og skade på moralen, denne bog advarer imod, og giver sjældent bedre resultater end den diagnostiske brug.

### Vær ærlig om grænserne for tilskrivning, især for platforms- og understøttende teams

Teams, der bygger delt infrastruktur, interne værktøjer eller platformskapaciteter (emnet om platformsudvikling i søsterbogen `software-engineering-guide` dækker dette direkte), har ofte deres bidrag til resultater flere skridt fjernet fra en enkelt kundevendt metrik. Mål disse teams' præstation gennem deres effekt på de teams, de understøtter, adoption af deres platform, reduktion af friktion rapporteret af brugende teams, frem for at tvinge en dårligt passende metrik for direkte resultater ned over arbejde, der af natur er indirekte.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Én præstationsscore pr. team | Enkel at præsentere og sammenligne | Falsk præcision; skjuler, hvilket underliggende signal der faktisk drev scoren |
| Flere konvergerende signaler | Mere troværdig, modstår manipulation af en enkelt metrik | Sværere at sammenfatte i ét tal; kræver mere kontekst at fortolke |
| Præstationsmåling på teamniveau | Matcher, hvordan softwareresultater faktisk opstår | Kan ikke direkte besvare spørgsmål om individuelt bidrag |
| Tilskrivning af præstation på individniveau | Føles mere direkte handlingsrettet til vurderinger | Som regel en falsk præcision; stærk risiko for manipulation og beskyttelse af æren |

Den centrale spænding er **præcision versus ærlighed**. Ét præstationstal pr. team, eller værre, pr. enkeltperson, er let at sammenligne og rangordne, men den præcision er som regel falsk og skjuler reel usikkerhed om tilskrivning og kvalitet bag et rent udseende tal. Løs spændingen ved at acceptere et mindre ryddeligt billede med flere signaler som det ærlige, og ved at stå imod pres fra ledelsen eller fra præstationsvurderingsprocesser for at kollapse det tilbage til en enkelt, falsk præcis score.

## Spørgsmål at drøfte med dit team

1. **Kombinerer vores nuværende præstationsmåling flere konvergerende signaler, eller støtter den sig til ét tal, der føles mere præcist, end det faktisk er?** Gennemgå, hvad end I i øjeblikket kalder en "præstationsmetrik", og kontrollér, hvor mange uafhængige, konvergerende signaler der faktisk fodrer den.

2. **Har vi nogensinde tilskrevet et teams eller en enkeltpersons præstation uden at tage højde for den samarbejdsprægede, tværgående karakter af, hvordan resultatet faktisk opstod?** Vælg en nylig succeshistorie, og spor, hvor meget af den der afhang af mennesker, beslutninger eller tidligere arbejde uden for det team eller den person, der fik æren.

3. **Inkluderer vores præstationsmåling kvalitet, eller kun leveringshastighed og outputvolumen?** En leveret funktion, der senere forårsagede betydelige produktionshændelser, bør ikke score som høj præstation; kontrollér, om jeres nuværende måling faktisk ville fange dette tilfælde.

4. **Hvordan måler vi præstationen hos platforms- eller understøttende teams, hvis bidrag til resultater er indirekte?** Hvis det ærlige svar er "det gør vi ikke, rigtigt", er det hul værd at navngive og adressere direkte frem for at lade de teams reelt være umålte eller uretfærdigt målt mod kundevendte resultatmetrikker, der ikke passer til deres arbejde.

5. **Er præstationsdata nogensinde blevet brugt til at rangordne enkeltpersoner konkurrencemæssigt mod hinanden, formelt eller uformelt?** Den afdrift, i lighed med risikoen ved tilfredshedsdata i emne 3.2, skader både dataenes ærlighed og teamets villighed til at samarbejde åbent.

6. **Når vores konvergerende signaler er uenige, høj leveringshastighed, men stigende fejlrate, for eksempel, hvad konkluderer vi så, og håndterer vores proces den uenighed godt?** Uenighed mellem signaler er i sig selv værdifuld information; drøft, om jeres team i øjeblikket behandler det som støj, der skal ignoreres, eller som et reelt fund, der er værd at undersøge.

## Sektorperspektiv

**Startup.** Præstation er som regel direkte synlig: virkede funktionen, tog kunderne den i brug, flyttede metrikken sig. Formel måling med flere signaler er ofte unødvendig i denne skala; risikoen er i stedet at tilskrive succes eller fiasko for hurtigt til én person i et hurtigt bevægeligt, meget samarbejdsorienteret lille team, hvor ære og skyld sjældent tilhører kun én enkeltperson.

**Mindre virksomhed.** Kombinér de leverings- og kvalitetsdata, du allerede har (emne 2.10, emne 5.1), med direkte, ærlig samtale om, hvorvidt det seneste arbejde faktisk hjalp virksomheden, frem for at bygge formel instrumentering med flere signaler, du mangler kapacitet til at vedligeholde.

**Stor virksomhed.** Det er her, disciplinen med måling på teamniveau og med flere signaler fortjener sin investering, da presset for at reducere præstation til ét sammenligneligt tal på tværs af snesevis af teams er stærkest her, og skaden fra falsk præcision forværres på tværs af hele organisationens ressourcebeslutninger. Stå imod det pres eksplicit, og byg argumentet for flere signaler op for, hvorfor det betyder noget.

**Offentlig sektor.** At påvise, at ingeniørinvesteringer producerede reelle resultater, ikke blot leverede artefakter, er ofte det centrale spørgsmål, et tilsynsorgan stiller. Præstationsmåling med flere signaler, knyttet eksplicit til resultatmetrikker (emne 5.3) frem for stedfortrædere kun for levering, giver et langt stærkere, mere forsvarligt svar end en aktivitets- eller leveringsoptælling alene.

## Eksempler

**Stor virksomhed.** Et detailteknologifirmas ledelse havde uformelt rangordnet ingeniørteams efter gennemførte story points pr. sprint og behandlet det som en præstationsstedfortræder. Efter at have indført en tilgang med flere signaler, der kombinerede leveringsdata, andel af ændringer, der fejler, og adoption af funktioner efter udgivelse, fandt ledelsen, at det team med den højeste gennemførelsesgrad for story points havde den laveste adoptionsrate for funktioner i virksomheden: de leverede hurtigt, men byggede ting, kunderne ikke brugte. At omfordele det teams køreplansprioriteter ud fra det fuldere præstationsbillede, frem for den vildledende rangering med ét tal, omdirigerede betydelig ingeniørkapacitet mod arbejde med højere effekt inden for ét kvartal.

**Offentlig sektor.** En national skattemyndigheds ingeniørprogram skulle påvise over for et tilsynsudvalg, at en større systeminvestering havde forbedret præstationen og ikke blot leveret det kontraherede omfang. I stedet for kun at rapportere gennemførelse af story points eller milepæle fremlagde programmet et konvergerende sæt signaler: reduceret fejlrate i behandlingen, reduceret mediantid for behandling og øget andel af vellykket selvbetjening, alle knyttet til de specifikke systemkomponenter, der blev leveret. Fremlæggelsen med flere signaler og knyttet til resultater tilfredsstillede udvalgets granskning på en måde, som en simpel "leveret til tiden"-rapport fra et tidligere program ikke havde formået året før.

## Business case: motiver, ROI og TCO

Afkastet af at måle præstation gennem konvergerende, resultatknyttede signaler frem for et tal med falsk præcision er bedre ressourcebeslutninger: en organisation, der kan se, hvilke teams' arbejde reelt flytter resultater, kan investere yderligere, hvor det betyder noget, og undersøge, hvor det ikke gør, frem for at belønne det team, der tilfældigvis ser mest travlt ud. Detaileksemplet ovenfor er typisk: en vildledende rangering med ét tal havde ledt investeringsopmærksomheden væk fra, hvor den faktisk ville have hjulpet.

De samlede ejeromkostninger er højere end ved en tilgang med én metrik, fordi det kræver at kombinere data fra flere kilder (levering, kvalitet, resultat) og at stå imod organisatorisk pres for at kollapse billedet tilbage til ét sammenligneligt tal. Den pris er umagen værd, fordi alternativet, en falsk præcis enkeltscore, aktivt vildleder de ressourcebeslutninger, præstationsdata skal informere.

## Antimønstre og faldgruber

- **At forveksle aktivitet med præstation:** den mest almindelige fejl, denne dimension specifikt er designet til at forhindre.
- **Tilskrivning af individuel præstation for samarbejdsprægede, tværgående resultater:** som regel en falsk præcision, der modvirker samarbejde.
- **At udelukke kvalitet fra definitionen af præstation:** belønner arbejde, der leveres, men ødelægger noget andet.
- **At tvinge en metrik for direkte resultater ned over platforms- eller understøttende teams:** måler det forkerte for arbejde, der af natur er indirekte.
- **At kollapse flere konvergerende signaler tilbage til ét falsk præcist tal under organisatorisk pres:** mister den ærlighed, tilgangen med flere signaler blev bygget til at give.
- **At bruge præstationsdata til at rangordne enkeltpersoner konkurrencemæssigt:** skader både dataenes ærlighed og teamets samarbejde.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Præstation sammenblandes med aktivitet eller outputvolumen, målt med ét enkelt, uundersøgt tal.
- **Niveau 2, Udvikl:** Nogle kvalitetssignaler overvejes ved siden af output, men der er ingen konsekvent tilgang med flere signaler, og individuel tilskrivning sker stadig uformelt.
- **Niveau 3, Standardisér:** Præstation måles på teamniveau ved hjælp af flere, konvergerende signaler, herunder kvalitet, konsekvent i hele organisationen.
- **Niveau 4, Styr:** Uenighed mellem konvergerende signaler undersøges aktivt; platforms- og understøttende teams har passende indirekte præstationsmål, der passer til deres faktiske arbejde.
- **Niveau 5, Orkestrér:** Præstationsdata informerer direkte ressource- og investeringsbeslutninger, og organisationen kan pege på specifikke omfordelinger, som et syn med flere signaler gjorde mulige, og et syn med ét tal ville have overset.

## Idéer til drøftelse

1. Hvilket enkelt tal bruger vi i øjeblikket som præstationsstedfortræder, som vi bør pensionere til fordel for et konvergerende sæt?
2. Har vi nogensinde krediteret et resultat til det forkerte team eller den forkerte person, fordi tilskrivningen var uklar?
3. Hvordan måler vi i øjeblikket præstationen hos et platforms- eller understøttende team?
4. Hvordan ville det se ud, hvis vores konvergerende signaler var uenige med hinanden næste kvartal?
5. Hvor har en rangering efter story points eller leveringsantal ledt vores investeringsopmærksomhed forkert?

## Vigtigste pointer

- Præstation måler, om arbejdet producerede et **godt resultat**, ikke hvor meget bevægelse der fandt sted; forveksl det ikke med aktivitet (emne 3.4).
- Brug **flere, konvergerende signaler**, aldrig ét præstationstal, og vær mistænksom over for falsk præcision.
- Mål på **team- eller systemniveau**; tilskrivning af individuelle resultater er som regel upålidelig og skader samarbejdet.
- **Kvalitet er en del af præstation**, ikke en separat, afkoblet bekymring.
- Giv platforms- og understøttende teams **passende indirekte** præstationsmål frem for at tvinge en dårligt passende metrik for direkte resultater ned over deres arbejde.

## Kilder og videre læsning

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck og Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (resultatbaseret præstationsmåling).
- *Team Topologies*, af Matthew Skelton og Manuel Pais (strukturer for platforms- og understøttende teams, og hvordan man måler deres bidrag).
- *Measuring and Managing Performance in Organizations*, af Robert D. Austin (risiciene ved præstationsmetrikker med falsk præcision).
