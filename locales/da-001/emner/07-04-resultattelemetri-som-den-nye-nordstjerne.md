# 7.4 Resultattelemetri som den nye nordstjerne

## Overblik og motivation

Dette emne afslutter del 7, og afslutter i reel forstand det argument, hele denne bog har bygget siden emne 1.3, med ét direkte udsagn: efterhånden som generativ AI gør rå output billigt, holder **resultat[telemetri](https://en.wikipedia.org/wiki/Telemetry)**, kontinuerlig, instrumenteret måling af reelle resultater frem for aktivitet eller output, op med at være én god praksis blandt flere og bliver det organiserende princip, et metrikprogram skal bygges omkring. Det er ikke en ny idé, der introduceres for første gang her. Det er den idé, emne 1.3 introducerede i bogens indledende del, nu præsenteret som det nødvendige, snarere end blot foretrukne, svar på et teknologiskifte, der har gjort ethvert alternativ farligere, end det plejede at være.

Logikken er ligefrem. Før generativ AI var outputvolumen en ufuldkommen, men ikke værdiløs proxy for indsats og, løst, for værdi; et team, der leverede flere funktioner, havde som minimum udført mere arbejde, selv om det arbejde ikke altid var det rigtige. Generativ AI kapper selv den løse forbindelse: outputvolumen angiver ikke længere pålideligt indsats, da et værktøj kan generere den på sekunder, og den angiver bestemt ikke værdi, da emne 7.3 viste, at oppustet output kan sameksistere med forringet kvalitet. De metrikker, der overlever dette skifte intakte, er netop dem, denne bog har lagt vægt på at bygge mod fra sine indledende emner: rate af undslupne fejl (emne 5.1), funktionsadoption (emne 5.2), kunde- og forretningsresultater (emne 5.3), pålidelighed (del 6) og udvikleres trivsel (del 3). Ingen af dem afhænger af, hvordan den underliggende kode blev produceret; alle måler, hvad der faktisk skete som følge heraf.

For store teams har dette emnes argument direkte, praktiske konsekvenser for, hvordan et metrikprogram bør bygges og genopbygges fremover. Store virksomheder, der redesigner deres ingeniørdashboards i lyset af AI-indførelse, bør vægte investeringen specifikt mod den infrastruktur for resultattelemetri, dette emne beskriver; offentlige organisationer, der evaluerer både AI-værktøjer og de bredere teknologiprogrammer, de er indlejret i, bør holde begge op mod den samme standard for resultattelemetri, som dette emne anbefaler som baseline for enhver troværdig, fremtidssikret evaluering.

## Nøgleprincipper

- **Resultattelemetri bliver nødvendig, ikke blot foretrukken, når output er billigt.** Det er emne 1.3's grundlæggende princip, nu presserende frem for ambitiøst.
- **De metrikker, der overlever dette skifte, er dem, denne bog har bygget mod hele vejen igennem**: undslupne fejl, adoption, forretningsresultater, pålidelighed og trivsel.
- **Et metrikprogram bygget primært omkring outputmetrikker er nu en belastning, ikke blot et suboptimalt valg.** Outputmetrikker kan pustes billigt og hurtigt op i stor skala.
- **Resultattelemetri kræver reel investering**, instrumentering, tålmodighed med langsommere signal og organisatorisk disciplin til at modstå trækket mod hurtigere, billigere, men nu upålidelige outputmetrikker.
- **Dette princip overlever ethvert specifikt AI-værktøj eller enhver leverandør.** Det er et varigt svar på et varigt skifte i, hvad output betyder, ikke en midlertidig justering til en forbigående tendens.

## Anbefalinger

### Revidér forholdet i din metrikinvestering: resultattelemetri versus outputsporing

Beregn nogenlunde, hvor stor en andel af jeres nuværende metrikinfrastruktur, instrumenteringsindsats, plads på dashboards og tid i gennemgangsmøder der går til resultatmetrikker (del 5, del 6, udvikleres trivsel fra del 3) versus output- og aktivitetsmetrikker (antal udrulninger, commit-volumen, pull request-gennemløb). Hvis outputsporing dominerer, er det forhold i sig selv nu en belastning i lyset af dette emnes argument, og at genbalancere det er den enkelte ændring med størst løftestang, dette emne anbefaler.

### Invester bevidst i infrastruktur til resultattelemetri som en førsteklasses ingeniørinvestering

Resultatmåling, sporing af funktionsadoption, korrelation med forretningsresultater (emne 5.3), pålidelighedsinstrumentering (del 6), kræver reel, løbende ingeniørinvestering, som mange organisationer historisk har underressourceret i forhold til de forholdsvis billige og nemme outputmetrikker, der dominerer mange dashboards i dag. Behandl denne infrastrukturinvestering med samme alvor, som denne bog anvender på enhver anden betydelig ingeniørevne, ikke som en sekundær bekymring bag selve investeringen i AI-værktøjer.

### Accepter og kommunikér, at resultattelemetri er langsommere, og byg tålmodighed ind i organisationens forventninger

Resultatmetrikker er, næsten af natur, mere efterslæbende og støjende end outputmetrikker (emne 1.3's skel mellem førende og efterslæbende, emne 1.6's statistiske forsigtighed). En organisation, der er vant til den hurtige, tilfredsstillende feedback ved at se et outputtal stige, har brug for at opbygge reel tålmodighed med det langsommere, mere ærlige signal, resultattelemetri giver, og ledelsen skal aktivt kommunikere og foregå med et godt eksempel med den tålmodighed frem for refleksmæssigt at gribe efter det hurtigere, nu upålidelige alternativ under pres for at vise hurtige resultater.

### Brug dette skifte som anledning til at udfase reelt forældede outputmetrikker, ikke blot til at tilføje resultatmetrikker ved siden af

I tråd med emne 1.1's disciplin om at udfase metrikker, der ikke længere fortjener deres plads, så brug dette øjeblik som en bevidst anledning til at fjerne output- og aktivitetsmetrikker, som dette skifte specifikt har devalueret, frem for blot at lægge resultatmetrikker oven på et uændret eksisterende dashboard. Et dashboard, der beholder alle de gamle outputmetrikker og samtidig skruer nye resultatmetrikker på, bliver oppustet frem for reelt forbedret.

### Behandl investeringen i resultattelemetri som varig, uafhængig af ethvert specifikt AI-værktøj eller leverandørforhold

Byg infrastruktur til resultattelemetri som en permanent organisatorisk evne, ikke som en reaktion specifik for det AI-værktøj, jeres organisation tilfældigvis bruger i år. Dette princip og den infrastruktur, det kalder på, vil overleve ethvert specifikt leverandørforhold eller enhver værktøjsgeneration, og at bygge den som en varig evne beskytter jeres metrikprogram mod det næste teknologiskifte lige så meget som mod det nuværende.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Dashboard domineret af outputmetrikker | Hurtig, billig feedback; velkendt for de fleste organisationer | Nu aktivt upålideligt på grund af generativ AI's virkning på outputomkostninger |
| Dashboard domineret af resultattelemetri | Modstandsdygtigt over for dette skifte; måler det, der reelt betyder noget | Langsommere, mere støjende signal; kræver reel investering i instrumentering |
| At tilføje resultatmetrikker ved siden af uændrede outputmetrikker | Gradvis, mindre forstyrrende | Giver et oppustet dashboard frem for reel forbedring |
| Fuld, bevidst genbalancering mod resultattelemetri | Adresserer skiftet direkte og fuldstændigt | Kræver den mest betydelige organisatoriske og investeringsmæssige ændring |

Den centrale spænding er i reel forstand den samme, som denne bog åbnede med i emne 1.3, nu skærpet til sin mest presserende form: **hurtig, velkendt feedback versus langsommere, ærligt signal**. Outputmetrikker har altid været lettere og hurtigere at frembringe; dette emnes argument er, at generativ AI har flyttet den afvejning fra blot suboptimal til aktivt farlig. Løs spændingen på den måde, denne bog har anbefalet fra sit indledende emne: vægt afgørende mod resultater, accepter den langsommere feedback, der følger med reel værdimåling, og behandl ubehaget ved den langsommere feedback som den ærlige pris for at måle noget reelt frem for noget blot bekvemt.

## Spørgsmål at drøfte med dit team

1. **Hvor stor en andel af vores nuværende metrikinfrastruktur og dashboardopmærksomhed går til resultatmetrikker versus output- og aktivitetsmetrikker?** Beregn forholdet ærligt; de fleste organisationer finder, når de vurderer det for første gang, at det er mere outputtungt, end de ville have gættet.

2. **Hvilken specifik investering i infrastruktur til resultattelemetri har vi udskudt til fordel for hurtigere, billigere outputsporing?** Nævn et konkret eksempel, instrumentering af funktionsadoption, værktøjer til korrelation med forretningsresultater, og drøft, hvad der skal til for faktisk at bygge det.

3. **Har vores organisation opbygget reel tålmodighed med resultattelemetriens langsommere feedback, eller trækker presset for hurtige resultater os hele tiden tilbage mod hurtigere, men nu upålidelige outputmetrikker?** Vær ærlige om dette mønster i jeres egen seneste rapportering og jeres gennemgangsmøder.

4. **Hvilken output- eller aktivitetsmetrik på vores nuværende dashboard er en reel kandidat til udfasning, nu hvor dette emnes argument gælder specifikt for den?** Identificér mindst én, og drøft, hvad der skal erstatte den, frem for blot at efterlade et hul.

5. **Hvis vores leverandør af AI-værktøjer eller den nuværende generation af AI-kodeassistenter ændrede sig dramatisk næste år, ville vores metrikprogram så stadig holde?** Det tester, om jeres investering i resultattelemetri er reelt varig, bygget som en permanent evne, eller blot en reaktion specifik for jeres nuværende værktøjssituation.

6. **Hvordan ville det se ud, hvis vores organisation fuldt ud forpligtede sig til dette emnes argument og genbalancerede sin metrikinvestering afgørende mod resultater frem for gradvist?** Skitsér det konkret frem for at lade det være abstrakt; kløften mellem den nuværende tilstand og denne vision er jeres organisations faktiske køreplan for at svare på dette skifte.

## Sektorperspektiv

**Startup.** At bygge resultattelemetri tidligt, før outputmetrikker har haft chancen for at blive dybt rodfæstede organisatoriske vaner, er reelt lettere end at eftermontere den senere. Et ungt firma, der tager AI-kodeassistance i brug fra start, har en reel mulighed for at bygge sit metrikprogram resultat-først frem for at skulle rulle en eksisterende kultur domineret af outputmetrikker tilbage.

**Mindre virksomhed.** Fokuser investeringen i resultattelemetri på den ene resultatmetrik, der mest direkte afspejler overlevelse og vækst (emne 5.3), frem for at forsøge omfattende instrumentering på tværs af alle resultatkategorier, denne bog dækker. En beskeden, fokuseret investering i resultattelemetri slår et omfattende outputmetrikdashboard, som dette emnes argument nu specifikt har devalueret.

**Stor virksomhed.** Den genbalancering, dette emne anbefaler, er en reel, betydelig organisatorisk forandring i denne skala, der sandsynligvis kræver ledelsessponsorat og en investeringsplan over flere kvartaler. Behandl den med samme alvor som enhver anden større infrastrukturinvestering, denne bog dækker, og brug de specifikke, konkrete eksempler fra emne 7.1 og emne 7.3, metrikinflation og kvalitetsudvanding, som et genbalanceret dashboard ville have fanget tidligere, til at bygge den interne sag for investeringen.

**Offentlig sektor.** Offentlige teknologiprogrammer, der primært evalueres på levering og outputmetrikker (leverede funktioner, til tiden), er i stigende grad sårbare over for netop den skepsis, emne 5.3 beskrev, og dette emnes argument skærper den sårbarhed yderligere, efterhånden som indførelsen af AI-værktøjer spreder sig i den bredere branche, som offentlige myndigheder rekrutterer fra og sammenlignes med. Byg resultattelemetri som det primære grundlag for offentlig rapportering og budgetbegrundelse, og placér jeres organisation foran, frem for bagved, dette skifte.

## Eksempler

**Stor virksomhed.** Ingeniørledelsen i et softwarefirma, foranlediget direkte af den nær-ved-fejl med metrikinflation, der er beskrevet i emne 7.1's eksempel med fintechfirmaet, gennemførte en fuld revision af forholdet i sin metrikinvestering og fandt, at næsten 70 % af dashboardets plads og instrumenteringsindsatsen gik til output- og aktivitetsmetrikker, med kun beskeden, uensartet investering i resultattelemetri. I løbet af det følgende år genbalancerede virksomheden bevidst dette forhold, udfasede flere outputmetrikker, som emne 7.1's revision havde markeret som mest udsatte, og investerede den frigjorte kapacitet i instrumentering af funktionsadoption og forretningsresultater (emne 5.2, 5.3). Det resulterende dashboard, præsenteret på det følgende års bestyrelsesmøde, blev eksplicit krediteret af det samme tidligere skeptiske bestyrelsesmedlem som et meningsfuldt mere pålideligt grundlag for at evaluere ingeniørinvesteringer end den outputtunge version, det erstattede.

**Offentlig sektor.** Et nationalt agentur for digitale tjenester, der byggede et nyt ingeniørmetrikprogram fra bunden specifikt fordi dets tidligere dashboard, domineret af outputmetrikker, havde vakt vedvarende skepsis i lovgivningen, indførte eksplicit dette emnes princip som sin grundlæggende designbeslutning: resultattelemetri, borgernes ventetid, gennemførelsesrate for tjenester, rate af undslupne fejl, ville være det primære grundlag for al offentlig rapportering, med output- og leveringsmetrikker bevaret kun som interne diagnostiske værktøjer, aldrig som overskriftsbelæg præsenteret eksternt. Dette resultat-først-design, bygget bevidst i lyset af det skifte med generativ AI, som denne del beskriver, gav agenturets rapportering en holdbarhed og troværdighed over for dets tilsynsudvalg, som forgængerprogrammet, bygget omkring en tidligere generations antagelser om outputmetrikker, aldrig havde opnået.

## Business case: motiver, ROI og TCO

Afkastet af afgørende at forpligte sig til resultattelemetri er et metrikprogram, der forbliver pålideligt og troværdigt gennem det nuværende teknologiskifte og hvad der end kommer efter, frem for et, der kræver endnu en betydelig overhaling næste gang output bliver billigt gennem en fremtidig teknologiændring. Eksemplet med softwarefirmaet ovenfor viser det konkret: det genbalancerede dashboard reparerede direkte den troværdighed, som den tidligere, outputtunge version havde bragt i reel fare.

De samlede ejeromkostninger er den investering i infrastruktur til resultattelemetri, dette emne anbefaler, reelt betydeligt arbejde over flere kvartaler for en stor organisation, vejet mod den varige, langsigtede risiko ved et metrikprogram, der bliver gradvist mindre pålideligt, efterhånden som output fortsætter med at blive billigere. Det er ikke en omkostning, denne bog beder dig acceptere let; det er den direkte, nødvendige konsekvens af at tage emne 1.3's grundlæggende argument så alvorligt, som denne sidste del af bogen beder dig om.

## Antimønstre og faldgruber

- **At behandle dette skifte som kun krævende gradvis justering frem for reel genbalancering:** undervurderer omfanget af den ændring, generativ AI har indført i, hvad outputmetrikker betyder.
- **At tilføje resultatmetrikker ved siden af et uændret, stadig dominerende sæt af outputmetrikker:** giver et oppustet dashboard frem for den reelle genbalancering, dette emne argumenterer for.
- **At bygge investeringen i resultattelemetri som en reaktion på et specifikt nuværende AI-værktøj frem for som en varig evne:** efterlader organisationen eksponeret over for det næste teknologiskifte på samme måde.
- **At undlade at opbygge organisatorisk tålmodighed med resultattelemetriens langsommere feedback:** risikerer at falde tilbage til hurtigere, men nu upålidelige, outputmetrikker under pres for hurtige resultater.
- **At udfase outputmetrikker uden en reel erstatning i form af resultattelemetri:** efterlader et målehul frem for en reel forbedring.
- **At præsentere dette skifte for interessenter som blot et svar på AI-værktøjer frem for som opfyldelsen af denne bogs grundlæggende princip:** undervurderer argumentets holdbarhed og almengyldighed.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Dashboardet forbliver domineret af outputmetrikker, uden noget bevidst svar på det skifte, denne del beskriver.
- **Niveau 2, Udvikl:** Nogle resultatmetrikker er tilføjet, men det samlede investeringsforhold er fortsat outputtungt, og ingen metrikker er bevidst udfaset.
- **Niveau 3, Standardisér:** En bevidst revision og genbalancering mod resultattelemetri er gennemført, med reelt forældede outputmetrikker udfaset, i hele organisationen.
- **Niveau 4, Styr:** Infrastruktur til resultattelemetri behandles som en førsteklasses, løbende ingeniørinvestering, og organisatorisk tålmodighed med dens langsommere feedback dyrkes og beskyttes aktivt.
- **Niveau 5, Orkestrér:** Organisationens metrikprogram er ledet af resultattelemetri som et varigt, permanent designprincip, bevist modstandsdygtigt gennem det nuværende teknologiskifte og eksplicit bygget til at forblive modstandsdygtigt gennem hvad der end kommer næste gang.

## Idéer til drøftelse

1. Hvad er vores faktiske nuværende forhold mellem investering i resultatmetrikker og i outputmetrikker?
2. Hvilken enkelt outputmetrik bør vi udfase i dette kvartal, og hvilken resultatmetrik bør erstatte den?
3. Hvor har organisatorisk utålmodighed for nylig trukket os tilbage mod hurtigere, men mindre pålidelige outputmetrikker?
4. Er vores investering i resultattelemetri varig, eller knyttet specifikt til vores nuværende situation med AI-værktøjer?
5. Hvad ville der skulle til for fuldt ud at forpligte sig til dette emnes argument frem for at justere gradvist?

## Vigtigste pointer

- Resultattelemetri bliver **nødvendig, ikke blot foretrukken**, når generativ AI gør output billigt; det er emne 1.3's grundlæggende princip, nu presserende.
- De metrikker, der **overlever dette skifte**, er dem, denne bog bygger mod hele vejen igennem: undslupne fejl, adoption, forretningsresultater, pålidelighed og trivsel.
- **Revidér og genbalancér forholdet i din metrikinvestering** bevidst, og udfas reelt forældede outputmetrikker frem for kun at tilføje resultatmetrikker ved siden af dem.
- Opbyg organisatorisk **tålmodighed med resultattelemetriens langsommere feedback**, og modstå trækket tilbage mod hurtigere, men nu upålidelige outputmetrikker under pres.
- Byg denne investering som en **varig evne**, uafhængig af ethvert specifikt AI-værktøj eller enhver leverandør, der beskytter dit metrikprogram mod fremtidige teknologiskift såvel som det nuværende.

## Kilder og videre læsning

- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (det resultatbaserede målingsgrundlag, som hele denne bog og dette afsluttende emne i del 7 bygger på).
- *Lean Analytics*, af Alistair Croll og Benjamin Yoskovitz (skellet mellem handlingsrettede og forfængelighedsmetrikker, som dette emnes argument udvider til AI-æraen).
- *The Innovator's Dilemma*, af Clayton M. Christensen (det generelle mønster, hvor etablerede metrikker og praksisser bliver en belastning under et disruptivt teknologiskifte).
- *Measure What Matters*, af John Doerr (resultatorienteret målsætning som organiserende princip for et metrikprogram, den model dette emne argumenterer for nu bør være standarden, ikke undtagelsen).
