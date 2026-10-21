# 2.2 Flowelementer: funktioner, fejl, risici og gæld

## Overblik og motivation

Et **flowelement** er Flow Frameworks arbejdsenhed, og hvert flowelement tilhører præcis én af fire typer: **funktioner**, ny forretningsværdi eller kapacitet leveret til en kunde; **fejl**, kvalitetsrettelser af fejl fundet af brugere eller test; **risici**, sikkerheds-, compliance-, privatlivs- og styringsarbejde, der beskytter virksomheden; og **gæld**, [teknisk gæld](https://en.wikipedia.org/wiki/Technical_debt), arkitekturforbedringer og infrastrukturarbejde, der muliggør fremtidig hastighed. Emne 2.1 introducerede det framework, disse fire kategorier hører til; dette emne går i dybden med selve taksonomien, fordi kategorierne kun giver værdi, hvis et team klassificerer sit arbejde i dem ærligt og konsekvent.

Flowelementers definerende egenskab er, at fordelingen på tværs af de fire typer er et **nulsumsspil**: der findes en fast mængde ingeniørkapacitet i en given periode, og hver time brugt på en funktion er en time, der ikke er brugt på gæld, risiko eller fejlarbejde. Det er ikke en ny kendsgerning om softwarelevering, enhver ingeniørleder ved allerede, at kapaciteten er begrænset, men de fleste organisationer har ingen konsekvent, ærlig måde at se den faktiske fordeling på. Sprinthastighed tæller story points uanset type; en nedbrændt backlog ser identisk ud, uanset om arbejdet bag den var et nyt betalingsflow eller tre måneders uglamourøs sikkerhedsafhjælpning. Flowelementer findes specifikt for at gøre den usynlige fordeling synlig.

For store teams ændrer denne synlighed karakteren af en ressourcesamtale. I stedet for at en ingeniørleder fremfører et ukvantificeret argument om, at "vi har brug for mere tid til teknisk gæld", producerer klassifikation af flowelementer et faktisk tal, gæld opslugte 30 % af sidste kvartals kapacitet, som kan drøftes, forsvares og justeres bevidst med forretningsinteressenter. Store virksomheder med mange samtidige produktlinjer og offentlige myndigheder, der afbalancerer ny borgervendt funktionalitet mod risikoen i ældre systemer, er begge langt mere afhængige af den slags forsvarlig, kvantificeret afvejning end af en privat, uformel fornemmelse af, at "vi bruger for meget tid på vedligeholdelse".

## Nøgleprincipper

- **Hvert flowelement tilhører præcis én type.** At gennemtvinge en enkelt klassifikation, frem for at tillade en blandet eller tvetydig, er det, der gør taksonomien brugbar til samlet rapportering.
- **Fordelingen er nulsum, ikke additiv.** Mere kapacitet til funktioner er nødvendigvis mindre kapacitet til fejl, risiko og gæld i den samme periode.
- **Der findes ingen universelt sund fordeling.** Et ungt produkt i en vækstfase bør legitimt hælde mod funktioner; et modent system med reel teknisk risiko bør legitimt hælde mod gælds- og risikoarbejde.
- **Gælds- og risikoarbejde underrapporteres kronisk uden denne disciplin.** Det har tendens til at ske i det stille, absorberet i generiske "ingeniøropgaver", indtil klassifikation af flowelementer tvinger det frem i lyset.
- **Klassifikationens kvalitet afgør hele taksonomiens værdi.** En taksonomi, der anvendes uensartet eller manipuleres bagefter, producerer tal, der aktivt vildleder frem for at informere.

## Anbefalinger

### Klassificér hvert element ved modtagelsen med en skriftlig definition for hver type

Bliv enige om en kortfattet, skriftlig definition af, hvad der tæller som en funktion, en fejl, en risiko og gæld i din specifikke kontekst, og kræv, at hvert nyt stykke arbejde klassificeres mod den definition i det øjeblik, det kommer ind i værdistrømmen, ikke efter det er afsluttet. En definition aftalt på forhånd modstår fristelsen til at klassificere bagudrettet ud fra, hvordan et stykke arbejde endte med at se ud, hvilket er netop den manipulationsrisiko, dette emne navngiver direkte nedenfor.

### Rapportér flowfordelingen som en tendens, ikke et enkelt øjebliksbillede

En enkelt periodes fordeling fortæller dig mindre end tendensen på tværs af flere perioder. En stabil afdrift mod én elementtype, funktioner stiger, mens gæld i det stille skrumper kvartal efter kvartal, er et langt stærkere signal end en enkelt periodes tal, og det er som regel det mønster, der er værd at rejse over for interessenter, før det bliver en krise frem for bagefter.

### Sæt en bevidst målfordeling sammen med forretningsinteressenter, ikke kun ingeniører

Beslut sammen med produkt- og forretningsledelsen, hvordan en sund fordeling ser ud for din specifikke værdistrøms nuværende fase, og gennemgå det mål periodisk i stedet for at lade det drive som standard. Et ungt produkt i vækstfasen og et modent system i stabilitetsfasen har legitimt forskellige sunde mål, og selve målet bør være en forhandlet forretningsbeslutning, ikke noget, ingeniørafdelingen i det stille beslutter alene.

### Krydstjek klassifikationen af flowelementer mod uafhængigt belæg

Sammenlign periodisk din flowfordeling med metrikker, der ikke afhænger af selvklassifikation: andel af undslupne fejl (emne 5.1), måling af teknisk gæld (emne 4.5) og metrikker for håndtering af sårbarheder (emne 6.4). Hvis fejl eller sårbarheder stiger, mens andelene af "fejl" og "risiko" blandt flowelementerne forbliver flade eller skrumper, er den uoverensstemmelse det klareste tilgængelige signal om, at klassifikationen er drevet væk fra virkeligheden.

### Hold specifikt øje med feature factory-mønstret

Når flowfordelingen viser, at funktioner konsekvent opsluger næsten al kapacitet, kvartal efter kvartal, uden at gælds- og risikoarbejde nogensinde stiger over en symbolsk andel, betyder det mønster (undertiden kaldet en "feature factory") som regel, at gæld og risiko sultes for kapacitet, ikke at systemet reelt ikke har brug for vedligeholdelse. Mønstret er behageligt på kort sigt og dyrt senere og viser sig til sidst som en kvalitets- eller sikkerhedskrise, der kommer uden varsel i flowfordelingsdiagrammet, fordi den underliggende ophobning aldrig var synlig.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Ingen formel klassifikation (generisk backlog) | Ingen procesoverhead | Gælds-, risiko- og fejlarbejde forbliver usynligt; svært at forsvare ressourcebeslutninger |
| Klassifikation af flowelementer i fire typer | Gør kapacitetsfordelingen synlig og til forhandling med interessenter | Kræver disciplin ved modtagelsen og en skriftlig, aftalt definition pr. type |
| Finere klassifikation (mange undertyper) | Flere diagnostiske detaljer | Mere klassifikationsindsats; flere tal at forklare for interessenter |
| Bagudrettet klassifikation | Nemmere at anvende, ingen procesændring på forhånd | Meget udsat for manipulation; klassifikationen driver mod det, der ser bedst ud |

Den centrale spænding er **klassifikationsdisciplin versus procesoverhead**. En taksonomi med fire typer er bevidst grov, grov nok til, at det tager sekunder at klassificere et element, ikke en debat, men den grovhed holder kun, hvis disciplinen med at klassificere ved modtagelsen mod en skriftlig definition reelt opretholdes. Løs spændingen ved at holde taksonomien præcis så enkel, fire typer, ikke flere, og ved at investere ekstra strenghed i revisionstrinnet (krydstjek mod uafhængigt belæg) frem for i et mere omstændeligt klassifikationsskema, der eroderer under reel arbejdsbelastning.

## Spørgsmål at drøfte med dit team

1. **Hvis vi klassificerede alt, hvad vores team leverede sidste kvartal, hvordan ville den faktiske fordeling på funktioner, fejl, risiko og gæld så se ud, og ville det overraske vores interessenter?** De fleste teams har aldrig gennemført denne øvelse ærligt. Forsøg den med reelle data, før du antager, at du allerede kender svaret.

2. **Har vi en skriftlig, aftalt definition af, hvad der tæller som en funktion versus gæld versus risiko i vores specifikke kontekst, eller afhænger klassifikationen af, hvem der tilfældigvis mærker ticketen?** En uformel, uensartet definition producerer tal, der ser præcise ud, men ikke reelt er sammenlignelige fra periode til periode.

3. **Er vores flowfordeling nogensinde drevet støt mod én elementtype, uden at nogen besluttede det bevidst?** En langsom afdrift er let at overse periode for periode, men indlysende, når den plottes som en tendens. Træk flere perioder af data, hvis du har dem, og led ærligt efter dette mønster.

4. **Hvordan ville en sund flowfordeling se ud for vores produkts nuværende fase, og har vi faktisk aftalt det mål med forretningsinteressenter?** De fleste organisationer har aldrig gjort det mål eksplicit, hvilket betyder, at der ikke er noget fælles grundlag for at bemærke, når den faktiske fordeling driver væk fra det.

5. **Passer vores flowfordeling til uafhængigt belæg som andel af undslupne fejl eller antal åbne sårbarheder, eller er der en uoverensstemmelse, der er værd at undersøge?** En uoverensstemmelse her er det klareste tilgængelige tegn på, at klassifikationen er drevet væk fra, hvad arbejdet faktisk er.

6. **Kunne nogen på vores team i det stille omdøbe et gælds- eller risikoelement til en funktion under leveringspres, og ville vi i dag bemærke det, hvis de gjorde?** Det er emnets centrale manipulationsrisiko udtrykt direkte. Drøft, om jeres nuværende proces faktisk ville fange det, ikke blot om nogen bevidst ville gøre det.

## Sektorperspektiv

**Startup.** Formel klassifikation føles ofte som overhead, når hele teamet allerede ved, hvad alle arbejder på. Det nyttige minimum i denne skala er blot at sige de fire kategorier højt under planlægning, så gælds- og risikoarbejde ikke i det stille nedprioriteres, hver gang en funktionsdeadline skaber pres, et mønster, der forværres slemt, når både kodebasen og teamet vokser.

**Mindre virksomhed.** Et enkelt tilpasset felt eller en etiket i dit eksisterende sporingsværktøj er nok til at fange typen af flowelement uden nogen dedikeret værktøjsinvestering. Disciplinen med at klassificere konsekvent ved modtagelsen betyder langt mere end nogen værktøjssofistikering.

**Stor virksomhed.** Klassifikation af flowelementer er der, hvor dette framework fortjener sin værdi i skala, fordi en stor organisation, der kører mange samtidige værdistrømme, ikke har nogen anden pålidelig, samlet måde at se, hvordan kapaciteten faktisk fordeles på funktioner, fejl, risiko og gæld. Investér i værktøjsintegreret klassifikation og periodiske krydstjek mod uafhængigt belæg; manuel, ad hoc-klassifikation overlever ikke reel organisatorisk skala.

**Offentlig sektor.** Flowfordelingen giver en offentlig teknologileder et forsvarligt, kvantificeret svar, når der spørges, hvorfor der ikke leveres flere nye borgervendte funktioner, når det ærlige svar er, at et ældre systems risiko- og gældsbyrde opslugte en reel, berettiget del af kapaciteten. At gøre den afvejning eksplicit og forhandlet, frem for at absorbere den i stilhed, har tendens til at skabe mere tillid hos tilsynsorganer end en ukvantificeret henvisning til "teknisk nødvendighed".

## Eksempler

**Stor virksomhed.** Et stort detailfirmas team for e-handelsplatformen mente, baseret på sprinthastighed, at det leverede en stabil funktionsproduktion. En første ærlig øvelse i klassifikation af flowelementer fandt, at "funktioner" faktisk kun udgjorde 40 % af det gennemførte arbejde, mens gæld, meget af den knyttet til et aldrende betalingssystem, opslugte næsten en tredjedel af kapaciteten uden nogensinde at være blevet navngivet som sådan i nogen tidligere rapport. At præsentere denne opdeling for produktledelsen, sammen med en stigende andel af undslupne fejl, der bekræftede gældsbyrden, skaffede et dedikeret moderniseringsbudget, som teamet uden held havde anmodet om i to år ved kun at bruge kvalitative argumenter.

**Offentlig sektor.** En delstatlig køretøjsmyndigheds team for digital kørekortudstedelse klassificerede for første gang sin backlog, efter et offentligt udfald havde rettet opmærksomheden mod det underliggende systems stabilitet. Øvelsen afslørede, at "risiko"-arbejde, primært sikkerhedsopdateringer, der gentagne gange var blevet nedprioriteret til fordel for synlige borgervendte funktioner, var skrumpet til under 5 % af kapaciteten i løbet af det foregående år, et mønster, der aldrig havde været synligt i teamets standardrapportering. Myndighedens ledelse brugte fundet til at pålægge en minimumsallokering til risikoarbejde fremover, understøttet af flowfordelingsdata frem for en generel politikerklæring alene.

## Business case: motiver, ROI og TCO

Afkastet af klassifikation af flowelementer er et forsvarligt, kvantificeret grundlag for ressourcebeslutninger, der tidligere blev argumenteret kvalitativt og ofte tabt til det arbejde, der var mest synligt for interessenter. Detaileksemplet ovenfor, der skaffede et moderniseringsbudget med faktiske kapacitetsdata frem for en generel henvendelse, er det mønster, denne disciplin pålideligt producerer: et specifikt tal er langt sværere at afvise end et generelt indtryk af, at "vi har brug for mere tid til vedligeholdelse".

De samlede ejeromkostninger er lave, når først taksonomien og dens definitioner er aftalt: klassifikation tilføjer sekunder til modtagelsen, ikke en meningsfuld procesbyrde, og den værktøjsintegration, der skal til for at spore den, er som regel et enkelt tilpasset felt eller en etiket. Den reelle, løbende omkostning er disciplinen i at opretholde ærlig klassifikation under leveringspres, hvilket er grunden til, at det periodiske krydstjek mod uafhængigt belæg betyder lige så meget som den indledende indførelse.

## Antimønstre og faldgruber

- **At klassificere arbejde bagudrettet, når resultatet er kendt:** manipulationsvektoren i hjertet af dette emne. Under leveringspres kan et team i det stille mærke gælds- eller risikoarbejde som en funktion bagefter eller runde et tvetydigt element mod den type, der ser bedst ud i fordelingsdiagrammet, uden at en enkelt beslutning nogensinde ser uærlig ud i sig selv. Værnet er klassifikation ved modtagelsen mod en skriftlig definition, kombineret med periodiske revisioner, der sammenligner flowfordelingen med uafhængigt belæg som andel af undslupne fejl (emne 5.1) og sårbarhedsmetrikker (emne 6.4), den samme disciplin med revision mod uafhængigt belæg, som emne 1.2 beder om for hver metrik i denne bog.
- **At lade funktioner konsekvent opsluge næsten al kapacitet (feature factory-mønstret):** sulter i det stille gælds- og risikoarbejde, indtil det viser sig som en krise.
- **At behandle en enkelt periodes fordeling som hele billedet:** overser den langsomme, kumulative afdrift, som en tendensvisning afslører tydeligt.
- **At sætte en målfordeling uden forretningsinteressenter:** opgiver frameworkets hovedværdi, en fælles, forhandlet forståelse af afvejningen.
- **At bruge en uensartet eller udokumenteret definition pr. type:** producerer tal, der ser præcise ud, men ikke reelt er sammenlignelige over tid.
- **At overkonstruere taksonomien med mange undertyper:** tilføjer klassifikationsoverhead, der eroderer disciplinen uden at tilføje forholdsmæssig indsigt.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Arbejde spores generisk uden klassifikation af flowelementer; gælds- og risikoarbejde er usynligt i rapporteringen.
- **Niveau 2, Udvikl:** Nogle teams klassificerer flowelementer uformelt, men definitionerne er uensartede, og klassifikationen sker ofte bagudrettet.
- **Niveau 3, Standardisér:** Alle teams klassificerer ved modtagelsen mod en fælles, skriftlig definition, og flowfordelingen følges som en tendens.
- **Niveau 4, Styr:** Flowfordelingen krydstjekkes periodisk mod uafhængigt belæg, og målfordelinger sættes bevidst sammen med forretningsinteressenter.
- **Niveau 5, Orkestrér:** Data om flowelementer informerer direkte ressource- og investeringsbeslutninger i hele organisationen, og ledelsen kan pege på specifikke beslutninger truffet, fordi klassifikation gjorde en tidligere usynlig afvejning eksplicit.

## Idéer til drøftelse

1. Hvad ville en ærlig opdeling i flowelementer af sidste kvartals arbejde vise, og ville det overraske nogen?
2. Har vi en skriftlig definition af hver af de fire typer flowelementer, eller afhænger klassifikationen af, hvem der mærker arbejdet?
3. Er vores flowfordeling nogensinde drevet mod én elementtype uden en bevidst beslutning bag?
4. Hvilket uafhængigt belæg kunne vi krydstjekke vores flowfordeling mod i dag?

## Vigtigste pointer

- Et **flowelement** tilhører præcis én af fire typer, funktioner, fejl, risici eller gæld, og kapacitetsfordelingen på tværs af dem er **nulsum**.
- Der findes **ingen universelt sund fordeling**; den rette blanding afhænger af et produkts fase og bør være et bevidst, forhandlet mål med forretningsinteressenter.
- Emnets centrale manipulationsvektor er **bagudrettet klassifikation**, i det stille at omdøbe gælds- eller risikoarbejde til en funktion bagefter; værnet er klassifikation ved modtagelsen plus periodiske revisioner mod uafhængigt belæg.
- Hold specifikt øje med **feature factory-mønstret**, funktioner, der konsekvent opsluger næsten al kapacitet, som sulter gælds- og risikoarbejde, indtil det viser sig som en krise.
- Flowfordelingen er mest værdifuld som en **tendens**, og dens største gevinst kommer af at dele den direkte med forretningsinteressenter.

## Kilder og videre læsning

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr og George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
