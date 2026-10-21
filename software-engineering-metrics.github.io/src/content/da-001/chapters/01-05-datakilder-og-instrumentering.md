# 1.5 Datakilder og instrumentering

## Overblik og motivation

En metrik er kun så troværdig som de data, der ligger under den, og de fleste metrikprogrammer bruger langt mere indsats på at designe dashboards end på at verificere den pipeline, der fodrer dem. Det er bagvendt. Et smukt designet diagram bygget på uensartet, selvrapporteret eller i det stille ødelagt instrumentering er værre end intet diagram overhovedet, fordi det ser autoritativt ud, mens det er forkert. Dette emne handler om det upåagtede fundament, resten af bogen forudsætter: hvor ingeniørdata faktisk kommer fra, hvornår man skal stole mere på automatiseret instrumentering end på selvrapportering, og de datakvalitetssvigt, der i det stille ugyldiggør en metrik, før nogen opdager det.

Softwareudviklingsdata kommer fra en håndfuld kildetyper, hver med forskellige pålidelighedsegenskaber. Versionsstyring og [CI/CD](https://en.wikipedia.org/wiki/CI/CD)-pipelines genererer objektive, tidsstemplede, svært forfalskelige optegnelser over, hvad der faktisk skete. Sagssystemer og projektstyringsværktøjer genererer optegnelser, der afhænger af, at mennesker opdaterer tilstand korrekt og rettidigt, hvilket de ofte gør uensartet. Spørgeskemaer genererer selvrapporterede data, der er uvurderlige til ting, intet system kan observere, som tilfredshed, men er udsat for erindringsbias og effekter af social ønskelighed. Observerbarhedsplatforme genererer telemetri på systemniveau, der er objektiv, men kun dækker det, der blev instrumenteret. At vide, hvilken kategori en given metriks data kommer fra, fortæller dig, hvor meget du kan stole på den, og hvilke fejltilstande du skal holde øje med.

I store virksomheder og i det offentlige forværres datakvalitetsproblemer, fordi afstanden mellem dataenes oprindelse og deres endelige brug i et dashboard vokser gennem flere systemer, integrationer og transformationer. Et felt, der betyder én ting i kildesystemet, kan betyde noget subtilt anderledes, når det når et rapporteringslag, og ingen nedstrøms bemærker det, fordi tallet stadig ser plausibelt ud. At få instrumenteringen rigtig er mindre spændende end at få frameworks rigtige, men det er det fundament, alt andet i denne bog står på.

## Nøgleprincipper

- **Foretræk instrumentering frem for selvrapportering, hvor systemet kan observere begivenheden direkte.** Et udrulningstidsstempel fra pipelinen er mere troværdigt end et teams selvrapporterede antal udrulninger.
- **Brug kun selvrapportering til det, der ikke kan observeres direkte.** Tilfredshed, oplevet friktion og trivsel har ingen erstatning i et autoritativt system; spørg direkte, og design spørgeskemaet godt (emne 3.7). Reservér selvrapportering specifikt til den kategori.
- **Hver metriks data har et kildesystem, en indsamlingsmetode og en kendt fejltilstand.** Dokumentér alle tre, ikke kun definitionen.
- **Datakvalitet forfalder i det stille.** En pipeline, der virkede korrekt for et år siden, kan i det stille være ødelagt i dag, og et dashboard vil blive ved med at vise et forkert tal uden at klage.
- **Instrumentér ved sandhedens kilde, ikke nedstrøms for en oversættelse.** Hvert led mellem begivenheden og dashboardet er en chance for, at betydningen driver.

## Anbefalinger

### Kortlæg hver metrik til dens faktiske kildesystem, før du stoler på den

For hver metrik på et dashboard, så navngiv det specifikke system, der genererer den underliggende begivenhed: CI/CD-pipelinen for udrulningsbegivenheder, versionsstyringsværten for commit- og fletningsbegivenheder, hændelsessystemet for nedbrudsoptegnelser, spørgeskemaplatformen for selvrapporteret tilfredshed. Hvis du ikke kan navngive det præcise system, ved du ikke faktisk, hvor tallet kommer fra, og du kan ikke vurdere dets pålidelighed. Denne kortlægning er en forudsætning for styringscharteret i emne 1.4, ikke en separat øvelse.

### Instrumentér ved begivenheden, ikke ved rapporten

De mest pålidelige data fanger en begivenhed automatisk i det øjeblik, den sker: en pipeline registrerer en udrulning i det øjeblik, den er færdig, et versionsstyringssystem registrerer en fletning i det øjeblik, den lander. Data, der afhænger af, at et menneske husker at opdatere et statusfelt bagefter, at markere en ticket "færdig", at logge en udrulning manuelt i et regneark, forringes i nøjagtighed, jo længere de ligger fra den faktiske begivenhed, og jo travlere den ansvarlige person bliver. Hvor der findes en automatiseret begivenhed, så foretræk den frem for en menneskerapporteret stedfortræder for det samme faktum.

### Reservér spørgeskemaer til det, kun et menneske kan fortælle dig

Nogle ting kan reelt ikke observeres fra systemtelemetri: om en ingeniør oplever, at arbejdet er meningsfuldt, om en proces føles frustrerende, om risikoen for udbrændthed stiger. Det kræver, at man spørger direkte, og et velindrettet spørgeskema (emne 3.7 dækker mekanikken) er det rette værktøj. Fejlen er at bruge selvrapportering til ting, et system kunne observere direkte, at bede ingeniører om at estimere deres egen udrulningsfrekvens i stedet for at hente den fra pipelinen, hvilket indfører unødvendig støj og bias i data, der kunne have været objektive.

### Byg datakvalitetskontroller ind i selve pipelinen

Behandl metrikpipelines med samme strenghed som produktionskode: tilføj automatiserede kontroller, der flager, når en kilde holder op med at sende data, når et felts fordeling uventet skifter, eller når en optælling uventet falder til nul. Et dashboard, der i det stille viser forældede eller ødelagte data, som var de aktuelle, er værre end et dashboard, der synligt viser "data utilgængelige", fordi det første eroderer tilliden usynligt, mens det andet i det mindste fortæller sandheden om sine egne begrænsninger.

### Dokumentér indsamlingsmetoden ved siden af definitionen

En metriks definition ("gennemløbstid for ændringer") er ikke fuldstændig uden dens indsamlingsmetode (målt fra første commit-tidsstempel i versionsstyring til udrulningstidsstempel i produktion i pipelinen, ekskl. hotfix-grene). To teams med den samme definition, men forskellige indsamlingsmetoder, vil stadig producere usammenlignelige tal. Optag begge i metrikcharteret fra emne 1.4, og behandl en ændring af en af dem som en ændring, der kræver den samme dokumenterede gennemgang.

## Afvejninger: fordele og ulemper

| Kildetype | Fordele | Ulemper |
| --- | --- | --- |
| Automatiseret pipelineinstrumentering (CI/CD, versionsstyring) | Objektiv, tidsstemplet, svær at forfalske, lav løbende indsats | Kræver teknisk investering på forhånd at bygge og vedligeholde |
| Data fra sagssystem og projektstyring | Bredt tilgængelige, velkendte for teams | Afhænger af menneskelig omhu; ofte uensartede på tværs af teams |
| Spørgeskemaer og selvrapportering | Eneste kilde til subjektiv oplevelse (tilfredshed, trivsel) | Erindringsbias, bias for social ønskelighed, svartræthed |
| Observerbarheds- og telemetriplatforme | Rigt signal i realtid på systemniveau | Dækker kun det, der eksplicit blev instrumenteret; kan være dyrt i skala |

Den centrale spænding er **objektivitet versus dækning**. Automatiseret instrumentering er den mest troværdige kilde, men kan slet ikke observere subjektiv oplevelse, mens spørgeskemaer kan nå netop det, automatisering ikke kan, men bærer en reel risiko for bias. Løs spændingen ved at bruge automatiseret instrumentering, hvor en begivenhed kan observeres direkte, og ved at reservere selvrapportering specifikt og kun til det, der reelt kræver, at man spørger et menneske, aldrig som en doven erstatning for data, et system kunne have leveret.

## Spørgsmål at drøfte med dit team

1. **For vores fem vigtigste metrikker: kan vi navngive det præcise kildesystem og den præcise indsamlingsmetode for hver, eller antager vi en definition uden at vide, hvor dataene faktisk kommer fra?** Det er et overraskende almindeligt hul: en metrik overtages fra et framework eller en leverandørs standarddashboard, og ingen på det nuværende team ved faktisk, hvilket system der genererer de underliggende data, eller hvordan. Spor hver enkelt tilbage til dens oprindelse som en gruppeøvelse.

2. **Hvilke af vores metrikker er afhængige af selvrapportering for noget, et system kunne observere direkte, og hvad skal der til for at erstatte den selvrapportering med reel instrumentering?** Selvrapporterede udrulningsantal, selvrapporterede arbejdstimer og selvestimeret cyklustid er alle almindelige eksempler på at bruge den forkerte datakilde til noget, automatisering kunne fange mere pålideligt. Identificér dem, og prioritér at erstatte dem med de højeste indsatser først.

3. **Hvordan ville vi vide, om en af vores datapipelines i det stille gik i stykker?** De fleste organisationer opdager en ødelagt metrikpipeline først, når nogen bemærker, at et tal ser usandsynligt ud, hvilket kan tage måneder. Drøft, om nogen af jeres pipelines har automatiserede sundhedstjek i dag, og hvis ikke, hvilke der mest har brug for dem først.

4. **Hvor har en oversættelse mellem systemer ændret en metriks betydning, uden at nogen har besluttet det med vilje?** Et felt, der betyder én ting i et kildesystem, kan betyde noget subtilt anderledes efter en integration eller migrering, og det resulterende tal kan se plausibelt ud, mens det er forkert. Gennemgå din mest konsekvensrige metriks fulde datavej, og led efter oversættelsespunkter.

5. **Dokumenterer vi indsamlingsmetoder, ikke kun definitioner, i vores metrikcharter?** To teams kan dele en metriks navn og definition, mens de beregner den ud fra forskellige indsamlingsmetoder, hvilket giver tal, der ikke reelt er sammenlignelige. Gennemgå en stikprøve af dine charters for netop dette hul.

6. **Hvordan skelner vi mellem en reel tendens og en datakvalitetsartefakt, når et tal uventet bevæger sig?** Et pludseligt skift i en metrik er ofte det første tegn på enten en reel ændring eller en ødelagt pipeline, og at skelne de to kræver, at man kender datakilden godt nok til at undersøge hurtigt. Drøft dit teams faktiske proces for det seneste uforklarede metrikskift, I stødte på.

## Sektorperspektiv

**Startup.** Med en lille stak kan de fleste af dine metrikker komme direkte fra din CI/CD-udbyder, din versionsstyringsvært og et let spørgeskemaværktøj uden at bygge tilpassede pipelines. Risikoen er at springe selv grundlæggende sundhedstjek over, fordi teamet bevæger sig hurtigt; en automatiseret kontrol på fem minutter af, at en datakilde stadig sender begivenheder, er billig forsikring mod i det stille at flyve i blinde.

**Mindre virksomhed.** Læn dig op ad den indbyggede rapportering i dine eksisterende værktøjer frem for at bygge tilpassede datapipelines, du mangler kapacitet til at vedligeholde. Vær eksplicit om, hvilke tal der kommer fra automatiserede systemer, og hvilke der er estimater, nogen taster ind i et regneark, fordi de to har meget forskellig pålidelighed, selv hvis de ender på den samme side.

**Stor virksomhed.** Datakvalitetsproblemer forværres på tværs af integrationer, migreringer og forretningsenhedsgrænser. Investér i centraliserede, velovervågede datapipelines for dine mest konsekvensrige metrikker, byg automatiserede datakvalitetskontroller ind som standardpraksis, og revidér indsamlingsmetoder, ikke kun definitioner, hver gang metrikker sammenlignes på tværs af forretningsenheder.

**Offentlig sektor.** Dataproveniens kan have juridisk og revisionsmæssig vægt: et offentliggjort præstationstal skal måske overleve en ekstern revision ikke blot af dets værdi, men af hele dets indsamlingskæde. Dokumentér datalinje eksplicit, bevar historiske optegnelser over indsamlingsmetoder, selv efter en metode ændres, og vær parat til at påvise præcis, hvordan et tal blev produceret, ikke kun hvad det aktuelt viser.

## Eksempler

**Stor virksomhed.** Et finansielt servicefirmas ingeniørledelse havde fulgt "gennemløbstid for ændringer" i to år, før den opdagede, at en migrering af en datapipeline atten måneder tidligere i det stille havde skiftet tidsstempelkilden fra første commit til oprettelse af pull request, hvilket forkortede den tilsyneladende gennemløbstid med i gennemsnit flere timer for hvert team uden at nogen bemærkede eller godkendte ændringen. Løsningen indførte en datakvalitetskontrol, der sammenlignede hver metriks fordeling uge for uge og flagede statistisk usædvanlige skift til menneskelig gennemgang, og den fangede yderligere to stille pipelineproblemer inden for det følgende år.

**Offentlig sektor.** En transportmyndigheds offentligt vendte dashboard for tjenestens driftssikkerhed støttede sig til en blanding af automatiseret sensortelemetri og manuelt indtastede hændelsesrapporter fra regionale kontorer. En revision fandt, at regioner med mindre personalekapacitet systematisk underrapporterede mindre hændelser, ikke af uærlighed, men blot fordi manuel indtastning konkurrerede om tid med mere presserende arbejde, hvilket betød, at det offentliggjorte driftssikkerhedstal var bedre end virkeligheden netop i de regioner, der mindst havde råd til, at underbemandet vedligeholdelse gik ubemærket hen. Myndighedens løsning erstattede manuel hændelsesindtastning med automatiseret sensorudløst logning, hvor det var muligt, og tilføjede et dokumenteret estimat af dækningen af manuel rapportering ved siden af det offentliggjorte tal.

## Business case: motiver, ROI og TCO

Afkastet af solid instrumentering er tillid: en ledelse, der stoler på sine data, kan handle på dem beslutsomt, mens et team, der er blevet brændt af en i det stille ødelagt pipeline, begynder at sætte spørgsmålstegn ved hvert tal, hvilket sinker enhver beslutning, der afhænger af metrikker. Det tab af tillid er dyrt og svært at reparere og tager ofte langt længere at genopbygge, end den oprindelige instrumenteringsinvestering ville have kostet.

De samlede ejeromkostninger ved god instrumentering omfatter det tekniske forarbejde med at bygge pålidelige pipelines og den løbende pris for datakvalitetsovervågning, hvoraf begge er lette at underinvestere i, fordi ingen af dem producerer en synlig dashboardflise i sig selv. Den underinvestering er en falsk økonomi: prisen for at opdage en i det stille ødelagt pipeline, efter at der i månedsvis er truffet beslutninger på dårlige data, er langt højere end prisen for at bygge de sundhedstjek, der ville have fanget det på dag ét.

## Antimønstre og faldgruber

- **At stole på et tal uden at kende dets kildesystem:** en metrik overtaget fra et framework eller en leverandørstandard, hvor ingen har sporet, hvor dataene faktisk kommer fra.
- **At selvrapportere det, et system kunne observere direkte:** indfører unødvendig støj og bias i data, der kunne have været objektive.
- **Ingen automatiserede datakvalitetskontroller på en metrikpipeline:** en i det stille ødelagt pipeline kan vise forkerte tal i månedsvis uopdaget.
- **At dokumentere kun definitionen, ikke indsamlingsmetoden:** to teams med samme metriknavn kan stadig beregne usammenlignelige tal.
- **Et dashboard, der viser "0" eller forældede data, som var de aktuelle, uden nogen indikation af en kildefejl:** værre end en synlig besked om "data utilgængelige".
- **Underbemandede regioner eller teams, der systematisk underrapporterer på grund af byrden ved manuel indtastning:** et datakvalitetshul, der korrelerer med netop de områder, der har mest brug for opmærksomhed.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Ingen kan pålideligt spore en metrik tilbage til dens kildesystem; pipelines har ingen sundhedstjek, og fejl går ubemærket hen.
- **Niveau 2, Udvikl:** Nogle metrikker har dokumenterede kilder, men indsamlingsmetoderne er uensartede, og datakvalitetskontroller er i bedste fald ad hoc.
- **Niveau 3, Standardisér:** Hver styret metrik dokumenterer sit kildesystem og sin indsamlingsmetode; automatiserede pipelines foretrækkes frem for selvrapportering, hvor en begivenhed kan observeres direkte.
- **Niveau 4, Styr:** Automatiserede datakvalitetskontroller overvåger hver konsekvensrig pipeline, flager anomalier til gennemgang, og datalinje er dokumenteret og kan revideres.
- **Niveau 5, Orkestrér:** Organisationen behandler datakvalitet som en førsteklasses ingeniørdisciplin med sin egen overvågning og hændelsesrespons og kan på forlangende påvise fuld proveniens for enhver offentliggjort metrik.

## Idéer til drøftelse

1. Kunne vi spore vores tre øverste metrikker tilbage til deres præcise kildesystem lige nu, live, i dette møde?
2. Hvilke af vores nuværende metrikker er afhængige af selvrapportering for noget, et system kunne måle direkte?
3. Har nogen af vores metrikpipelines automatiserede sundhedstjek i dag?
4. Hvornår opdagede vi sidst en i det stille ødelagt datapipeline, og hvor længe havde den været forkert?
5. Hvor skaber manuel dataindtastning et hul mellem rapporteret og faktisk virkelighed?

## Vigtigste pointer

- Foretræk **automatiseret instrumentering** frem for selvrapportering, hvor et system kan observere begivenheden direkte; reservér selvrapportering til reelt subjektiv oplevelse.
- Hver metrik har brug for et dokumenteret **kildesystem og en indsamlingsmetode**, ikke kun en definition.
- Datakvalitet **forfalder i det stille**; byg automatiserede kontroller ind i selve pipelinen i stedet for at opdage brud ved et tilfælde.
- Instrumentér **ved begivenheden**, ikke nedstrøms for en oversættelse, for at minimere afdrift mellem det, der skete, og det, dashboardet viser.
- Prisen for en i det stille ødelagt pipeline, måneders beslutninger truffet på dårlige data, overstiger langt prisen for de sundhedstjek, der ville have fanget den.

## Kilder og videre læsning

- *Observability Engineering*, af Charity Majors, Liz Fong-Jones og George Miranda (designprincipper for instrumentering og telemetri).
- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (instrumenteringstilgangen bag DORA-metrikkerne).
- *Data Quality: The Accuracy Dimension*, af Jack E. Olson (datakvalitetsbegreber, der kan anvendes på metrikpipelines).
- *How to Measure Anything*, af Douglas W. Hubbard (målemetoder for størrelser, der synes svære at observere direkte).
