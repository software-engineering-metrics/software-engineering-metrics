# 8.4 Modenhedsmodel for ingeniørmetrikprogrammer

## Overblik og motivation

Hvert emne i del 1 til 7 af denne bog slutter med sin egen [modenhedsmodel](https://en.wikipedia.org/wiki/Capability_Maturity_Model) på fem niveauer, afgrænset til det emnes specifikke metrikfamilie. Dette emne gør noget andet: det træder et skridt tilbage og spørger, hvordan modenhed ser ud for metrik*programmet* som helhed, den organisatoriske evne, der producerer, styrer og handler på alle de individuelle metrikker samlet. En organisation kan være på niveau 4 for modenhed i individuelle DORA-metrikker og samtidig være på niveau 1 for programmodenhed overordnet, hvis den f.eks. har fremragende instrumentering, men ingen styring (emne 1.4), eller fremragende individuelle metrikker, men en frygtdrevet udrulning (emne 8.3), der har korrumperet de underliggende data, uanset hvor godt hver metrik blev designet.

Dette emnes model er bygget omkring fem dimensioner, der skærer på tværs af hver individuel metrikfamilie, denne bog dækker: styring og ejerskab (emne 1.4), kvalitet af instrumentering (emne 1.5), balance mellem resultat og output (emne 1.3, emne 7.4), kulturel tillid (emne 8.3) og løbende forbedring (den disciplin med udfasning og revision, som emne 1.1 etablerede helt i starten af bogen). En organisations samlede programmodenhed er realistisk set minimum, ikke gennemsnittet, på tværs af disse fem dimensioner, da en alvorlig svaghed i én, især kulturel tillid, kan underminere værdien af styrke i alle de andre, præcis som emne 8.3 argumenterede direkte for.

For store teams giver denne samlede model ledelsen ét ærligt instrument til organisatorisk selvvurdering, adskilt fra og supplerende til de modenhedstjek emne for emne, som denne bog giver hele vejen igennem. Store virksomheder, der sammenligner metrikmodenhed på tværs af forretningsenheder, og offentlige organisationer, der rapporterer programmodenhed til tilsynsorganer, har begge gavn af denne ene, tværgående vurdering frem for selv at skulle syntetisere femogfyrre separate modenhedsaflæsninger på emneniveau til et sammenhængende samlet billede.

## Nøgleprincipper

- **Programmodenhed er minimum på tværs af dens dimensioner, ikke gennemsnittet.** En alvorlig svaghed i kulturel tillid underminerer styrke alle andre steder.
- **De fem tværgående dimensioner er styring, instrumentering, resultatbalance, kulturel tillid og løbende forbedring.** Hver dimension samler tråde fra mange individuelle emner.
- **Denne model supplerer, erstatter ikke, de individuelle modenhedsmodeller på emneniveau.** Brug begge sammen for et fuldstændigt billede.
- **Selvvurdering bør være ærlig og specifik, ikke ambitiøs.** Scor, hvor I faktisk er, ved hjælp af konkret belæg, ikke hvor I har til hensigt at være.
- **Bevægelse mellem niveauer kræver bevidst investering**, ikke blot tidens gang; modenhed ophobes ikke automatisk.

## Anbefalinger

### Vurdér hver af de fem dimensioner uafhængigt, ved hjælp af konkret belæg

For styring: tjek, om hver væsentlig metrik har en navngiven ejer og et dokumenteret charter (emne 1.4). For instrumentering: tjek, om metrikker kommer fra automatiserede kilder frem for selvrapportering, hvor det er muligt (emne 1.5). For resultatbalance: beregn det faktiske forhold mellem resultatvægtede og outputvægtede metrikker på jeres primære dashboards (emne 7.4). For kulturel tillid: vurdér ærligt, om jeres udrulningshistorik nogensinde har omfattet en fejlhåndteret, straffende brug af en metrik, og hvordan den blev adresseret (emne 8.3). For løbende forbedring: tjek, om jeres organisation har en dokumenteret historik for at udfase metrikker, der holdt op med at fortjene deres plads (emne 1.1). Scor hver dimension uafhængigt, før de kombineres.

### Tag minimum på tværs af dimensionerne som din ærlige samlede score

Modstå fristelsen til at gennemsnitsberegne jeres fem dimensionsscorer til et enkelt, mere flatterende sammensat tal. Et program med fremragende instrumentering (niveau 4), men svag kulturel tillid (niveau 1), er ikke i nogen meningsfuld forstand et program på niveau 2 eller 3; den svage dimension underminerer aktivt værdien af de stærke, da upålidelige data, korrumperet af frygtdreven manipulation, ikke reddes af at være indsamlet med fremragende instrumentering. Rapportér minimum ærligt, selv om det giver et mindre flatterende samlet billede end et gennemsnit ville.

### Brug denne model ved siden af, ikke i stedet for, modellerne på emneniveau

Denne samlede model besvarer "hvor moden er vores samlede program"; de individuelle modeller på emneniveau gennem del 2 til 8 besvarer "hvor moden er vores praksis for netop denne metrik." Brug begge sammen: den samlede model til at prioritere, hvilken tværgående dimension der mest har brug for investering, og modellerne på emneniveau til at identificere, hvilke specifikke metrikfamilier der mest har brug for opmærksomhed inden for den dimension.

### Gentag vurderingen i en fast rytme, ikke blot når en krise udløser den

I tråd med denne bogs konsekvente styringsdisciplin (emne 1.4): revurdér programmodenhed i en fast rytme, årligt er almindeligt, frem for kun efter en krise (en opdaget manipulationshændelse, en rapport offentliggjort til skade for troværdigheden) tvinger spørgsmålet. Et program, der kun undersøger sin egen modenhed reaktivt, går glip af chancen for at fange og adressere en svækket dimension, før den frembringer en reel, dyr hændelse.

### Behandl en lav score ærligt som et udgangspunkt for investering, ikke som en dårlig karakter

I tråd med den diagnostiske, ikke evaluerende, ramme, som emne 1.1 etablerede for hele denne bog, så brug en lav modenhedsscore, på enhver dimension, som udgangspunkt for en bevidst investeringsplan (emne 8.5's køreplan for indførelse er det direkte næste skridt), ikke som en dom, man skal have det dårligt over. De fleste organisationer vil, ærligt vurderet, finde reelle svagheder et sted i denne model; det produktive svar er målrettet investering, ikke defensivitet over scoren.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Gennemsnit af de fem dimensionsscorer | Giver ét enkelt, simpelt, mere flatterende tal | Skjuler en kritisk svaghed i én dimension, der underminerer resten |
| Minimum på tværs af dimensioner | Ærligt, handlingsrettet, identificerer korrekt den reelle begrænsning | Kan virke nedslående, hvis én dimension halter betydeligt efter de andre |
| Kun modeller på emneniveau | Detaljeret, metrikspecifik vejledning | Overser det tværgående syn på programmets samlede sundhed |
| Kun denne samlede model | Enkel, overordnet | Overser den specifikke, handlingsrettede detalje, modellerne på emneniveau giver |

Den centrale spænding er **enkelhed versus ærlighed**, i genklang af emne 5.5's advarsel mod et falsk præcist enkelt tal. En gennemsnitsscore er enklere og mere behagelig at rapportere, men den skjuler aktivt den reelle begrænsning på programmets samlede pålidelighed og værdi. Løs spændingen til fordel for ærlighed: rapportér minimum, og brug både denne samlede model og de individuelle modeller på emneniveau sammen for et fuldstændigt, nøjagtigt og handlingsrettet billede.

## Spørgsmål at drøfte med dit team

1. **Hvilket niveau scorer hver af vores fem dimensioner, styring, instrumentering, resultatbalance, kulturel tillid og løbende forbedring, faktisk, når de vurderes ærligt og uafhængigt?** Gå hver dimension eksplicit igennem med konkret belæg frem for indtryk, før de kombineres til en samlet vurdering.

2. **Hvad er vores svageste dimension, og passer det til vores intuition om programmets samlede sundhed, eller afslører det noget, vi ikke tidligere havde benævnt direkte?** En lav score i netop kulturel tillid kan f.eks. undergrave tilliden til data, der ellers ser teknisk fremragende ud.

3. **Har vi gennemsnitsberegnet vores styrker og svagheder til et mere flatterende samlet billede i stedet for ærligt at rapportere vores svageste dimension som den reelle begrænsning?** Vær ærlige om, hvordan jeres organisation tidligere har talt om sin egen metrikmodenhed.

4. **Hvornår revurderede vi sidst formelt vores samlede programmodenhed, og blev det udløst af en krise eller af en bevidst, fast rytme?** Hvis kun krisedrevet, så drøft, hvordan en fast vurderingsrytme ville se ud fremover.

5. **Hvordan ville målrettet investering i vores svageste dimension konkret se ud i det næste kvartal?** Gå direkte fra vurdering til handling, og forbind dette emnes diagnostik med emne 8.5's køreplan for indførelse.

6. **Hvordan ville vores selvvurdering sammenlignes med en ærlig ekstern gennemgang foretaget af en uden for vores organisation?** Dette spørgsmål tester, om jeres interne vurdering selv kan være underlagt noget af den samme optimistiske bias, som denne bog har advaret mod hele vejen igennem, værd at tjekke jævnligt med et reelt udefrakommende perspektiv.

## Sektorperspektiv

**Startup.** En formel vurdering af fem dimensioner er sandsynligvis unødvendig i meget lille skala, hvor uformel bevidsthed normalt dækker det meste af det, denne model ville afsløre. Den vane, der er værd at indføre tidligt, er blot at være ærlig om netop kulturel tillid, da et ungt firmas tidlige metrikkultur lægger et fundament, der bliver langt sværere at ændre, når organisationen er vokset betydeligt.

**Mindre virksomhed.** En enkel, ærlig, uformel gennemgang af de fem dimensioner én gang om året, selv uden formel scoring, indfanger det meste af dette emnes værdi uden behov for en struktureret vurderingsproces i denne skala.

**Stor virksomhed.** Denne samlede model er særligt værdifuld til fair at sammenligne metrikmodenhed på tværs af mange forretningsenheder, da en sammenligning emne for emne på tværs af dusinvis af teams ville være uhåndterlig. Brug den til at prioritere investeringen i hele organisationen mod den dimension, der viser den mest udbredte svaghed på tværs af enheder.

**Offentlig sektor.** En dokumenteret, ærlig selvvurdering af modenhed ved hjælp af denne samlede model er et reelt nyttigt dokument til at påvise programmets stringens over for et tilsynsorgan, forudsat at vurderingen foretages ærligt frem for ambitiøst. Overvej periodisk ekstern gennemgang af selve selvvurderingen, især af dimensionen kulturel tillid, som er den sværeste at vurdere nøjagtigt fra et rent internt perspektiv.

## Eksempler

**Stor virksomhed.** Et logistikteknologifirmas indledende selvvurdering scorede dets instrumenteringsdimension på niveau 4 (automatiseret, omfattende datasourcing fra pipelines og systemer), men dets dimension for kulturel tillid på niveau 1, efter en uadresseret hændelse med misbrug af en metrik to år tidligere, som aldrig var blevet direkte anerkendt eller repareret (i direkte genklang af emne 8.3's eksempel fra den offentlige sektor). Ledelsens første instinkt var at gennemsnitsberegne det til et respektabelt samlet billede på niveau 2 eller 3; en mere ærlig anvendelse af dette emnes minimumsbaserede scoring identificerede korrekt kulturel tillid som den reelle begrænsning på hele programmets værdi, da selv fremragende instrumentering producerede data, som ingeniørerne, der kendte til den tidligere hændelse, stadig ikke fuldt ud stolede på eller rapporterede ærligt ind i. Målrettet investering specifikt i at reparere den kulturelle tillid, direkte efter emne 8.3's vejledning, blev prioriteret over yderligere investering i instrumentering som direkte følge af denne ærlige, minimumsbaserede vurdering.

**Offentlig sektor.** Et nationalt statistikagentur, der gennemførte sin første formelle selvvurdering af modenhed ved hjælp af denne samlede model som del af en bredere gennemgang af teknologistyring, fandt, at dets styringsdimension scorede godt (klart ejerskab, dokumenterede charters), men dets dimension for resultatbalance scorede dårligt, idet langt de fleste følgede metrikker var output- og aktivitetsbaserede, selv om del 7's argument for resultatvægtning var godt forstået intellektuelt i agenturets tekniske ledelse. Dette ærlige, specifikke fund, frem for en vag generel fornemmelse af, at "vi bør måle resultater mere", gav agenturets efterfølgende investeringsplan (emne 8.5) et konkret, belægsbaseret udgangspunkt, og opfølgende rapportering til agenturets tilsynsråd citerede specifikt denne modenhedsvurdering som grundlag for en omlagt strategi for metrikinvestering.

## Business case: motiver, ROI og TCO

Afkastet af en ærlig, minimumsbaseret selvvurdering af modenhed er korrekt at identificere den faktiske begrænsning på et metrikprograms værdi, frem for at investere yderligere i en allerede stærk dimension, mens en svag fortsætter med at underminere hele programmets pålidelighed, præcis det mønster, begge eksempler ovenfor illustrerer. Denne målrettende effekt er modellens primære værdi: den leder begrænset forbedringsinvestering derhen, hvor den reelt vil flytte programmets samlede modenhed, frem for derhen, hvor investering tilfældigvis er lettest eller mest velkendt.

De samlede ejeromkostninger er selve vurderingsindsatsen, beskeden og periodisk, vejet mod risikoen for at blive ved med at investere i en allerede stærk dimension, mens en uadresseret svag, især kulturel tillid, fortsat stille korrumperer værdien af alt andet, programmet har bygget.

## Antimønstre og faldgruber

- **At gennemsnitsberegne dimensionsscorer til et mere flatterende sammensat tal:** skjuler den reelle begrænsning på programmets samlede værdi.
- **Kun at vurdere ambitiøst, baseret på erklæret politik frem for faktisk praksis:** giver et unøjagtigt, overoptimistisk billede.
- **At bruge denne samlede model som erstatning for, frem for supplement til, modellerne på emneniveau:** mister den specifikke, handlingsrettede detalje, de individuelle modeller giver.
- **Kun at revurdere, efter en krise tvinger spørgsmålet:** går glip af chancen for at fange og adressere en svækket dimension proaktivt.
- **At behandle en lav score som en dårlig karakter frem for et udgangspunkt for investering:** inviterer til defensivitet frem for det produktive, diagnostiske svar, denne bog anbefaler hele vejen igennem.
- **Aldrig at søge et ærligt eksternt perspektiv på selvvurderingen:** risikerer, at den samme optimistiske bias, denne bog advarer mod hele vejen igennem, påvirker selve vurderingen.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Der findes ingen formel tværgående vurdering; individuelle metrikfamilier kan vurderes uafhængigt, men programmets samlede sundhed er ugransket.
- **Niveau 2, Udvikl:** Der er en vis uformel bevidsthed om programmets samlede styrker og svagheder, men ingen struktureret vurdering af fem dimensioner er gennemført.
- **Niveau 3, Standardisér:** En struktureret, ærlig, minimumsbaseret vurdering af fem dimensioner gennemføres med konkret belæg i hele organisationen.
- **Niveau 4, Styr:** Vurderingen gentages i en fast rytme, og dens fund informerer direkte og konsekvent målrettede investeringsprioriteter.
- **Niveau 5, Orkestrér:** Organisationen har en påvist, vedvarende praksis med ærlig selvvurdering, herunder periodisk ekstern gennemgang, og kan pege på specifikke investeringsbeslutninger, som vurderingens fund direkte drev.

## Idéer til drøftelse

1. Hvad er vores ærlige, belægsbaserede score på hver af de fem dimensioner lige nu?
2. Hvilken dimension er vores reelle begrænsning, og passer det til vores intuition?
3. Har vi nogensinde gennemsnitsberegnet vores scorer til et mere flatterende billede, end minimum ville vise?
4. Hvornår revurderede vi sidst formelt, og var det proaktivt eller krisedrevet?
5. Hvad ville en ærlig ekstern gennemgang af vores selvvurdering sandsynligvis afsløre?

## Vigtigste pointer

- Programmodenhed spænder over fem tværgående dimensioner: **styring, instrumentering, resultatbalance, kulturel tillid og løbende forbedring**.
- Samlet modenhed er **minimum på tværs af dimensioner, ikke gennemsnittet**; en svaghed i kulturel tillid underminerer styrke alle andre steder.
- Brug denne samlede model **ved siden af, ikke i stedet for**, de individuelle modenhedsmodeller på emneniveau i hele bogen.
- **Revurdér i en fast rytme**, frem for at vente, til en krise tvinger spørgsmålet.
- Behandl en lav score som et **ærligt udgangspunkt for investering**, ikke en dårlig karakter, i tråd med bogens diagnostiske ramme hele vejen igennem.

## Kilder og videre læsning

- *Capability Maturity Model Integration (CMMI)*, Software Engineering Institute (den generelle metode for modenhedsmodeller, som dette emnes tilgang henter strukturel inspiration fra).
- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (forskningsgrundlaget for de individuelle modenhedsmodeller på emneniveau, som denne samlede model trækker sammen).
- *Measuring and Managing Performance in Organizations*, af Robert D. Austin (organisatorisk vurdering af metrikprogrammers sundhed og dysfunktion).
- *The Fifth Discipline: The Art and Practice of the Learning Organization*, af Peter M. Senge (organisatorisk selvvurdering og løbende forbedring på systemniveau).
