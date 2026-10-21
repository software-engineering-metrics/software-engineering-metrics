# 2.1 Flow Framework

## Overblik og motivation

**Flow Framework** er en ledelsesmæssig og strukturel model skabt af Mik Kersten og udgivet i hans bog fra 2018, *Project to Product*. Det findes for at besvare et spørgsmål, som rene pipelinemetrikker ikke kan: ikke blot hvor hurtigt og hvor sikkert kode bevæger sig fra commit til produktion, men hvilken slags værdi der overhovedet bevæger sig gennem pipelinen, og om den blanding afspejler virksomhedens faktiske strategi. Frameworket behandler softwarelevering som en **[værdistrøm](https://en.wikipedia.org/wiki/Value_stream)**, den ende-til-ende-sekvens af aktiviteter, der forvandler en idé til værdi, en kunde modtager, lånt direkte fra traditionen med værdistrømskortlægning i lean-produktion.

Denne bog bruger Flow Framework som del 2's organiserende struktur. Emne 2.2 introducerer dets fire flowelementer, emnerne 2.3 og 2.4 introducerer dets fem flowmetrikker, emne 2.8 sporer disse metrikker tilbage til deres oprindelse i klassisk lean-værdistrømskortlægning, og emne 2.10 dækker DORA-metrikkerne som et snævrere, pipelinefokuseret referenceframework, denne del ikke længere indleder med. Det er et bevidst valg, ikke en afvisning af DORAs forskning. DORA måler systemets gennemstrømning og stabilitet med ægte statistisk strenghed, men er tavs om det spørgsmål, en forretningsleder mest interesserer sig for: af alt det, ingeniørorganisationen leverede i dette kvartal, hvor meget var ny kundeværdi, og hvor meget blev i det stille opslugt af at rette fejl, håndtere risiko eller betale gæld af. Flow Framework findes netop for at gøre den blanding synlig.

For store teams er dette skel ikke akademisk. En platformsorganisation, der kører snesevis af værdistrømme, kan have fremragende DORA-tal, hurtige, hyppige, stabile udrulninger, mens dens faktiske produktoutput i det stille er drevet mod næsten ren vedligeholdelse, et mønster, der er usynligt for et dashboard, som kun måler pipelinens mekanik. Store virksomheder og offentlige organisationer, der skal begrunde ingeniørinvesteringer over for interessenter, som tænker i forretningstermer og ikke i pipelinetermer, har brug for et ordforråd, der forbinder leveringsaktivitet med strategisk hensigt. Det er det, dette framework giver.

## Nøgleprincipper

- **En værdistrøm er måleenheden, ikke et team eller en pipeline.** Den spænder fra et kunde- eller forretningsbehov til det leverede resultat og krydser de teamgrænser, arbejdet faktisk krydser.
- **Flowelementer gør "hvad" synligt, ikke blot "hvor hurtigt".** Emne 2.2's fire kategorier, funktioner, fejl, risici og gæld, forvandler en implicit prioriteringsbeslutning til en eksplicit, målbar.
- **Kapacitetsfordelingen på tværs af flowelementer er et nulsumsspil.** Mere kapacitet brugt på én elementtype er mindre kapacitet til de andre; frameworket gør den afvejning synlig i stedet for at lade den være implicit.
- **De fem flowmetrikker besvarer forretningsspørgsmål, ikke kun ingeniørspørgsmål.** De er designet til at blive præsenteret for en ikke-teknisk interessent, ikke holdt inde i et ingeniørteam.
- **Værdistrømsstyring bør være kontinuerlig, ikke en engangskortlægningsøvelse.** Statiske værdistrømskort bliver forældede; frameworket er bygget til at blive instrumenteret fra de værktøjer, teams allerede bruger.

## Anbefalinger

### Kortlæg din værdistrøm, før du instrumenterer noget

Før du indfører nogen flowmetrik, så gå den faktiske vej, et stykke arbejde tager fra et forretningsbehov, der identificeres, til en kunde, der modtager værdi, og navngiv hvert trin og hver overdragelse mellem teams. Det er den klassiske øvelse i [værdistrømskortlægning](https://en.wikipedia.org/wiki/Value_stream_mapping), tilpasset fra lean-produktion, og at springe den over er den mest almindelige grund til, at en indførelse af Flow Framework producerer tal, ingen stoler på: metrikker beregnet mod en uundersøgt, uformelt forstået proces matcher sjældent det, der faktisk sker.

### Forbind flowmetrikker til de værktøjer, dine teams allerede bruger

Flow Framework er bygget til kontinuerlig, automatiseret værdistrømsstyring, ikke en periodisk manuel kortlægningsøvelse. Integrér sporing af flowelementer direkte i de værktøjer, arbejdet allerede flyder igennem, Jira, Azure DevOps, GitHub, i stedet for at bygge et parallelt sporingssystem, teams skal opdatere i hånden. Et flowelements tilstand bør opdatere sig selv, efterhånden som den underliggende ticket eller pull request bevæger sig, den samme disciplin med instrumentering frem for selvrapportering, som emne 1.5 anbefaler for hver metrik i denne bog.

### Præsentér flowfordelingen direkte for forretningsinteressenter, ikke kun for ingeniørledelsen

Den største forpassede mulighed med dette framework er at behandle det som et internt ingeniørværktøj. Flowfordelingen, andelen af arbejde, der går til funktioner versus fejl, risiko og gæld (emne 2.3), er specifikt designet til at være en samtale, du har med produkt- og forretningsledelsen, fordi den gør en implicit prioriteringsbeslutning, hvor meget kapacitet der går til ny værdi versus at holde lyset tændt, eksplicit og til forhandling i stedet for antaget.

### Behandl de fire flowelementer som en ægte taksonomi, ikke en formalitet

Kræv, at hver arbejdsenhed klassificeres i præcis én af de fire flowelementtyper ved modtagelsen, ikke bagudrettet. En klassifikation, der anvendes bagefter, eller anvendes løst, fordi "det er stort set en funktion", udhuler hele taksonomiens værdi, fordi hele pointen er en ærlig, konsekvent optegnelse over, hvor kapaciteten faktisk gik hen.

### Gennemgå dit værdistrømskort igen, når organisationen ændrer sig, ikke efter en fast tidsplan

Et værdistrømskort bliver forældet i det øjeblik, teamgrænser, værktøjer eller selve produktet ændrer sig væsentligt, ikke efter en vilkårlig årlig rytme. Behandl en omorganisering, en større værktøjsmigrering eller en betydelig produktomlægning som en udløser for at gå værdistrømmen igennem igen, fordi en flowmetrik beregnet mod et forældet kort i det stille måler det forkerte.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Kun pipelinemetrikker (DORA, emne 2.10) | Enkle, veldokumenterede, billige at instrumentere fra eksisterende CI/CD-data | Tavse om, hvilken slags værdi der leveres |
| Fuld indførelse af Flow Framework | Forbinder levering med forretningsstrategi; gør værdiblandingen synlig og til forhandling | Kræver et ærligt værdistrømskort og konsekvent disciplin i klassifikation af flowelementer |
| Statisk værdistrømskortlægning som engangsøvelse | Billig, hurtig at afvikle som workshop | Bliver hurtigt forældet; giver et øjebliksbillede, ikke en levende metrik |
| Kontinuerlig, værktøjsintegreret værdistrømsstyring | Levende, altid aktuelle data; skalerer på tværs af mange værdistrømme | Kræver reelt integrationsarbejde i værktøjerne på forhånd |

Den centrale spænding er **forretningslæsbarhed versus instrumenteringsindsats**. Pipelinemetrikker er billige, fordi pipelinen allerede producerer dataene; værdistrømsmetrikker kræver et ærligt kort over hele processen og en disciplineret vane med klassifikation ved modtagelsen, som pipelinemetrikker aldrig krævede. Løs spændingen ved at starte med én værdistrøm, ikke hele organisationen på én gang, kortlægge den ordentligt og først derefter integrere sporing af flowelementer i eksisterende værktøjer, frem for at forsøge en udrulning med ét stort brag på tværs af alle teams samtidig.

## Spørgsmål at drøfte med dit team

1. **Kunne vi tegne et nøjagtigt værdistrømskort for vores vigtigste produkt lige nu, eller ville vi gætte på flere af overdragelserne?** De fleste organisationer har aldrig faktisk gået den vej ende til anden. Forsøg øvelsen ærligt, og notér hvert sted, hvor gruppen er uenig om, hvad der faktisk sker, fordi den uenighed i sig selv er diagnostisk.

2. **Hvis vi klassificerede alt, hvad vores team leverede sidste kvartal, i funktioner, fejl, risiko og gæld, ville resultatet så overraske vores produktledelse?** De fleste teams har aldrig gjort den opdeling eksplicit, og svaret afslører ofte en vedligeholdelsesbyrde eller et gældsproblem, der tidligere var usynligt i en simpel optælling af "leverede story points".

3. **Har vi en ægte, værktøjsintegreret måde at spore flowelementer på, eller ville det kræve, at nogen manuelt klassificerer og omklassificerer arbejde i hånden?** Et manuelt system forfalder hurtigt under reel arbejdsbelastning; et værktøjsintegreret gør ikke. Vurdér ærligt, hvilket af de to I faktisk er parate til at opretholde.

4. **Hvornår ændrede vores værdistrømskort sig sidst, og har vi opdateret vores metrikker, så de afspejler det?** Omorganiseringer og værktøjsmigreringer ugyldiggør i det stille et værdistrømskort, og få organisationer husker at gennemgå det igen, når det sker.

5. **Præsenteres vores flowmetrikker nogensinde direkte for forretnings- eller produktinteressenter, eller bliver de inde i ingeniørafdelingen?** Frameworkets største fordel i forhold til metrikker kun fra pipelinen er netop denne samtale, og at springe den over opgiver det meste af frameworkets værdi.

6. **Hvad skal der til for, at nogen kunne manipulere vores klassifikation af flowelementer uden at gøre noget uærligt på papiret?** Gennemgå, hvordan et team under leveringspres i det stille kunne omdøbe gælds- eller risikoarbejde til funktioner for at se mere produktivt ud, og drøft, om I i øjeblikket ville bemærke det.

## Sektorperspektiv

**Startup.** Et fuldt værdistrømskort er som regel overkill for et team på fem, hvor alle allerede kender hele processen udenad. Den nyttige vane i denne skala er blot at sige de fire typer flowelementer højt i planlægningssamtaler, så gælds- og risikoarbejde ikke i det stille forsvinder af syne, i det øjeblik en funktionsdeadline truer.

**Mindre virksomhed.** Indfør klassifikation af flowelementer i det lette sporingsværktøj, du allerede bruger, en mærket kolonne eller et tilpasset felt, frem for noget dedikeret produkt til værdistrømsstyring. Disciplinen med konsekvent klassifikation betyder langt mere end sofistikeringen af det værktøj, der ligger bag.

**Stor virksomhed.** Det er her, frameworket fortjener sin plads, fordi en stor organisation, der kører snesevis af værdistrømme på tværs af mange produktlinjer, ikke har nogen anden pålidelig måde at se, ét sted, hvordan ingeniørkapaciteten faktisk fordeles på funktioner, fejl, risiko og gæld. Investér i værktøjsintegrationen; det manuelle alternativ overlever ikke mødet med reel skala.

**Offentlig sektor.** Flowfordelingen giver en offentlig ingeniørorganisation et forsvarligt, forretningslæsbart svar på "hvorfor leveres der ikke mere ny funktionalitet", når det ærlige svar er en voksende andel af kapaciteten, der går til sikkerhedsafhjælpning eller arvet gæld. At gøre den afvejning synlig og eksplicit, i stedet for at absorbere presset i stilhed, er ofte det enkeltstående mest nyttige, dette framework tilbyder en offentlig teknologileder.

## Eksempler

**Stor virksomhed.** Et stort forsikringsselskabs organisation for skadesplatformen mente, at den primært leverede nye funktioner, baseret på sine sprinthastighedsrapporter. En første øvelse i værdistrømskortlægning og klassifikation af flowelementer afslørede, at gælds- og risikoarbejde, meget af det udokumenteret teknisk gæld fra et årti gammelt kernesystem, faktisk opslugte tæt på halvdelen af den samlede ingeniørkapacitet, et faktum ingen tidligere rapportering havde bragt frem, fordi det arbejde altid var blevet slået sammen med generiske "ingeniøropgaver". At præsentere denne opdeling for direktionsudvalget skaffede for første gang i platformens historie et dedikeret budget til gældsreduktion, i stedet for at gældsarbejdet fortsatte med i det stille at konkurrere mod hver eneste funktionsanmodning.

**Offentlig sektor.** En national skattemyndigheds division for digitale tjenester brugte værdistrømskortlægning til at diagnosticere, hvorfor en flagskibsfunktion til borgerne havde været "i gang" i over et år trods stabil gennemførelse af sprinter. Kortet afslørede, at værdistrømmen faktisk spændte over fem separate teams med tre overdragelser, organisationsdiagrammet ikke afspejlede, og klassifikation af flowelementer viste, at funktionens faktiske ingeniørtid var en lille brøkdel af dens samlede flowtid, resten opslugt af ventetid ved overdragelser mellem teams, som intet enkelt teams egne metrikker kunne se. Divisionen omstrukturerede omkring værdistrømmen frem for organisationsdiagrammet for netop den produktlinje og skar flowtiden betydeligt inden for to kvartaler.

## Business case: motiver, ROI og TCO

Afkastet af at indføre Flow Framework er et forsvarligt, forretningslæsbart svar på et spørgsmål, pipelinemetrikker ikke kan besvare: er ingeniørkapaciteten fordelt, som ledelsen tror. Forsikringseksemplet ovenfor, der bragte næsten halvdelen af kapaciteten til det tidligere usynlige gældsarbejde frem, er et almindeligt mønster, når en organisation faktisk klassificerer sit arbejde ærligt, og den synlighed låser rutinemæssigt op for investeringer, som en vag anmodning om "vi har brug for mere tid til teknisk gæld" aldrig kunne.

De samlede ejeromkostninger er koncentreret to steder: den indledende værdistrømskortlægning, som tager reel facilitatortid at gøre ærligt, og den værktøjsintegration, der skal til for at holde data om flowelementer aktuelle uden manuel vedligeholdelse. Begge omkostninger er engangs- eller lavvedligeholdelse, når de er gjort godt, hvilket gør frameworket betydeligt billigere at opretholde, end det er at indføre.

## Antimønstre og faldgruber

- **At behandle værdistrømskortlægning som en engangsworkshop, aldrig gennemgået igen:** kortet bliver forældet i det øjeblik, organisationen ændrer sig, og en metrik beregnet mod et forældet kort måler det forkerte.
- **At bygge et parallelt, manuelt vedligeholdt sporingssystem for flowelementer:** forfalder hurtigt under reel arbejdsbelastning; integrér i stedet i eksisterende værktøjer.
- **At klassificere flowelementer bagudrettet frem for ved modtagelsen:** manipulationsvektoren i hjertet af dette emne. Under leveringspres kan et team i det stille omdøbe gælds- eller risikoarbejde til funktioner bagefter for at se mere produktivt ud over for interessenter, der kun ser diagrammet over flowfordelingen, uden at nogen nogensinde træffer en eksplicit, synlig beslutning om at gøre det. Værnet er at kræve klassifikation ved modtagelsen, før resultatet er kendt, og periodisk at revidere en stikprøve af klassificerede elementer mod det, den underliggende ændring faktisk gjorde, den samme revisionsdisciplin, emne 1.2 beder om for hver metrik i denne bog.
- **At holde flowmetrikker kun inde i ingeniørafdelingen:** opgiver frameworkets hovedfordel, et fælles ordforråd med forretningsinteressenter.
- **At kortlægge organisationsdiagrammet i stedet for den faktiske værdistrøm:** skjuler overdragelser mellem teams, der ofte er den største kilde til forsinkelse.
- **At indføre frameworket i hele organisationen, før det er valideret på én værdistrøm:** risikerer en stor investering i metrikker, ingen stoler på, fordi det underliggende kort aldrig blev bekræftet som nøjagtigt.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Der findes intet værdistrømskort; arbejde spores som generiske tickets uden klassifikation af flowelementer.
- **Niveau 2, Udvikl:** Én værdistrøm er kortlagt, og flowelementer klassificeres uformelt, men sporingen er manuel og anvendes uensartet.
- **Niveau 3, Standardisér:** Klassifikation af flowelementer er integreret i eksisterende værktøjer og anvendes konsekvent ved modtagelsen på tværs af større værdistrømme.
- **Niveau 4, Styr:** Flowfordelingen gennemgås regelmæssigt med forretningsinteressenter, og værdistrømskort holdes aktivt opdaterede, efterhånden som organisationen ændrer sig.
- **Niveau 5, Orkestrér:** Organisationen fordeler bevidst ingeniørinvesteringer på tværs af værdistrømme ved hjælp af flowdata og kan pege på specifikke strategiske beslutninger, et budget til gældsreduktion, en teamomstrukturering, truffet fordi frameworket gjorde en tidligere usynlig afvejning synlig.

## Idéer til drøftelse

1. Kunne vi tegne et nøjagtigt værdistrømskort for vores flagskibsprodukt i dag uden at gætte?
2. Hvilken procentdel af sidste kvartals kapacitet ville en ærlig klassifikation af flowelementer afsløre gik til gæld og risiko versus funktioner?
3. Bliver vores flowmetrikker i dag delt med forretningsinteressenter, eller bliver de inde i ingeniørafdelingen?
4. Hvad er den største overdragelse mellem teams i vores værdistrøm, som vores organisationsdiagram ikke afspejler?

## Vigtigste pointer

- **Flow Framework**, fra Mik Kerstens *Project to Product*, måler, hvilken slags værdi der bevæger sig gennem en leveringspipeline, ikke blot hvor hurtigt selve pipelinen kører.
- En **værdistrøm**, ikke et team eller en pipeline, er frameworkets måleenhed, og at kortlægge den ærligt kommer før at instrumentere noget.
- **Klassifikation af flowelementer ved modtagelsen, ikke bagefter**, er værnet mod dette emnes centrale manipulationsvektor: i det stille at omdøbe gælds- eller risikoarbejde til funktioner for at se mere produktivt ud.
- **Forbind flowmetrikker til eksisterende værktøjer**, Jira, Azure DevOps, GitHub, frem for et parallelt manuelt sporingssystem, der ikke overlever reel arbejdsbelastning.
- Præsentér flowdata **direkte for forretningsinteressenter**; den samtale, ikke et internt ingeniørdashboard, er frameworkets hovedfordel i forhold til metrikker kun fra pipelinen.

## Kilder og videre læsning

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, og John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr og George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois og John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
