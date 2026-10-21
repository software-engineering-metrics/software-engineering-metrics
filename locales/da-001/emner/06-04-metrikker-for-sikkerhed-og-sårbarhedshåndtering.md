# 6.4 Metrikker for sikkerhed og sårbarhedshåndtering

## Overblik og motivation

Dette emne afslutter del 6 ved at udvide den samme pålidelighedsdisciplin, som denne del har bygget, målsætning, parring med værn og ærlig hændelsesrapportering, til en adskilt, men nært beslægtet risiko: ikke om et system fejler af sig selv, men om nogen med vilje får det til at fejle eller udnytter det. Metrikker for **sårbarhedshåndtering (vulnerability management)** måler, hvor godt en organisation finder og retter sikkerhedssvagheder, før de udnyttes: hvor mange sårbarheder der findes, hvor alvorlige de er, og, afgørende, hvor hurtigt de afhjælpes, når de er opdaget, for en kendt, men ikke lappet sårbarhed er en stående, kvantificerbar risiko, som organisationen har valgt at bære, hvad enten det er bevidst eller gennem forsømmelse.

Dette emnes centrale bekymring svarer direkte til emne 4.4's behandling af fund fra statisk analyse: et råt antal sårbarheder er en dårlig metrik, der blander ubetydelige og kritiske problemer, og det er udsat for præcis de samme risici for manipulation, indsnævring af definitioner, undertrykkelse og tærskelmanipulation, som emne 1.2 beskriver generelt. Det specifikke tillæg, sikkerhedsmetrikker kræver, er tid til afhjælpning følgt mod alvorlighed, for en kritisk sårbarhed, der står ulappet i måneder, udgør en fundamentalt anden risiko end den samme sårbarhed fanget og rettet inden for en dag, information et simpelt antal alene ikke kan formidle.

For store teams har sikkerhedsmetrikker konsekvenser ud over den umiddelbare tekniske risiko: store virksomheder står over for kontraktlig og omdømmemæssig eksponering ved et brud, og offentlige organisationer står over for konsekvenser for national sikkerhed, jura og offentlig tillid, der gør sikkerhedsmetrikker til et spørgsmål af reel offentlig interesse, ikke blot en intern ingeniørbekymring. Dette emne behandler sårbarhedshåndtering med den samme stringens og den samme disciplin med at parre værn, som denne bog anvender hele vejen igennem, for sikkerhedsmetrikker er udsat for enhver manipulationsrisiko, denne bog beskriver, med tilsvarende højere indsats, når manipulationen lykkes.

## Nøgleprincipper

- **Tid til afhjælpning efter alvorlighed betyder mere end et råt antal sårbarheder.** Et kritisk problem, der står ulappet i måneder, er en fundamentalt anden risiko end det samme problem fanget og rettet hurtigt.
- **Sikkerhedsmetrikker er udsat for de samme manipulationsrisici som fund fra statisk analyse** (emne 4.4), med højere indsats, når manipulationen lykkes.
- **Alvorlighedsklassificering kræver eksterne, standardiserede kriterier**, hvor det er muligt, ikke rent intern vurdering, der kan glide mod eftergivenhed.
- **En sårbarhed, der er offentliggjort og rettet hurtigt, er tegn på en sund proces, ikke en fejl, der skal skjules.** At straffe offentliggørelse modvirker den rapportering, hele dette system afhænger af.
- **Sikkerhedsgæld er en kategori af teknisk gæld** (emne 4.5) og bør konkurrere om prioriteret afhjælpningskapacitet på samme eksplicitte, kvantificerede grundlag.

## Anbefalinger

### Følg tid til afhjælpning efter alvorlighed som den primære metrik

For hver opdaget sårbarhed registreres dens alvorlighed (ved hjælp af en standardiseret skala som [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System), CVSS, hvor det er relevant), og tiden fra opdagelse til reel afhjælpning følges, ikke til en sag lukkes, eller en rettelse er flettet, men endnu ikke udrullet. Fastsæt eksplicitte mål for afhjælpningstid efter alvorlighed, almindeligvis målt i dage for kritiske problemer og uger for mindre alvorlige, og følg overholdelsen af disse mål som den primære sikkerhedssundhedsmetrik frem for et råt, uvægtet antal sårbarheder.

### Brug standardiseret alvorlighedsscoring frem for rent intern vurdering

Hvor et standardiseret eksternt scoringssystem som CVSS er tilgængeligt, så brug det som det primære grundlag for alvorlighedsklassificering frem for udelukkende at stole på intern, potentielt uensartet vurdering. Det spejler emne 5.1's disciplin for klassificering af undslupne fejl og emne 6.2's disciplin for hændelsesklassificering, her anvendt specifikt på sikkerhed, og det modstår den samme risiko for glidning mod eftergivenhed, som de emner advarer mod, da en eksternt forankret score er sværere stille at omdefinere nedad end en rent intern.

### Byg en reelt ikke-straffende kultur for offentliggørelse og intern rapportering af sårbarheder

Anvend emne 6.2's princip om skyldfri postmortem direkte på sikkerhed: en ingeniør, der opdager og rapporterer en sårbarhed, vedkommende selv har indført, eller en forsker, der ansvarligt offentliggør en, der er fundet udefra, bør behandles som en, der yder en værdifuld tjeneste, ikke som en, der tilstår en fejl. At straffe offentliggørelse, internt eller fra eksterne forskere, modvirker pålideligt netop den rapportering, hele sårbarhedshåndteringssystemet afhænger af, og driver reel risiko under jorden frem for ind i en styret afhjælpningsproces.

### Behandl sikkerhedsgæld som en kategori i din bagloggen over teknisk gæld

Fold kendte sårbarheder med accepteret risiko, dem der bevidst ikke endnu er afhjulpet på grund af konkurrerende prioriteter, ind i den samme synlige, kvantificerede baglog over teknisk gæld, der er beskrevet i emne 4.5, med den samme ramme om omkostning ved at rette versus omkostning ved at bære. Det forhindrer, at sikkerhedsrisiko enten forsvinder ind i en usynlig, udokumenteret status som "vi ved godt om det" eller konkurrerer uretfærdigt mod funktionsarbejde uden et eksplicit, kvantificeret argument for sin prioritet.

### Kombinér sårbarhedsmetrikker med kontekst om eksponering og udnyttelighed

Ikke enhver sårbarhed med den samme nominelle alvorlighedsscore indebærer den samme faktiske risiko: en kritisk sårbarhed i et internt værktøj uden ekstern netværkseksponering er en anden risiko end den samme nominelle alvorlighed i en internetvendt tjeneste, der håndterer kundedata. Vægt, hvor det er muligt, prioriteringen efter faktisk eksponering og udnyttelighed, ikke alene alvorlighedsscore, så afhjælpningskapaciteten koncentreres om de reelt højest risikable punkter først.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Råt antal sårbarheder | Enkelt at rapportere | Blander ubetydelige og kritiske problemer; let at manipulere gennem undertrykkelse |
| Alvorlighedsvægtet sporing af tid til afhjælpning | Afspejler den faktiske risikoeksponering over tid | Kræver disciplineret, konsekvent klassificering og sporing |
| Rent intern alvorlighedsvurdering | Fleksibel, tilpasset konteksten | Tilbøjelig til glidning mod eftergivenhed og uensartethed på tværs af teams |
| Standardiseret ekstern scoring (f.eks. CVSS) plus kontekstvægtning | Konsekvent, eksternt forankret, modstår manipulation | Kræver yderligere kontekstanalyse for reelt nøjagtig prioritering |

Den centrale spænding er **konsistens versus kontekst**. En rent standardiseret scoringstilgang er konsekvent og modstandsdygtig over for manipulation, men kan overse reel kontekst, eksponering og udnyttelighed, der afgør den faktiske risiko; en rent kontekstuel, internt vurderet tilgang fanger nuancer, men er tilbøjelig til den samme risiko for glidning mod eftergivenhed, som denne bog advarer mod for enhver anden klassificeringsafhængig metrik. Løs spændingen ved at forankre i standardiseret scoring som det konsekvente grundlag og derefter anvende dokumenteret, reviderbar kontekstvægtning ovenpå, frem for et af yderpunkterne alene.

## Spørgsmål at drøfte med dit team

1. **Følger vi tid til afhjælpning efter alvorlighed, eller kun et råt antal sårbarheder?** Hent jeres faktiske nuværende metrik, og tjek, om den skelner mellem et kritisk problem, der står ulappet i måneder, og et, der rettes inden for en dag, for et råt antal behandler disse meget forskelligt risikable situationer ens.

2. **Bruger vi et standardiseret eksternt system til alvorlighedsscoring, eller bygger klassificeringen på rent intern, potentielt uensartet vurdering?** Hvis den er rent intern, så drøft, hvad indførelsen af en standard som CVSS ville ændre ved jeres nuværende klassificeringspraksis.

3. **Ville en ingeniør, der indførte og derefter rapporterede en sårbarhed, føle sig tryg ved det, eller ville vedkommende frygte straf?** Det er den direkte, sikkerhedsspecifikke version af emne 6.2's spørgsmål om skyldfri kultur, og et ærligt svar her betyder enormt meget for, om jeres sårbarhedsdata overhovedet kan stoles på.

4. **Har vi en synlig, kvantificeret baglog over kendte sårbarheder med accepteret risiko, eller bliver status som "vi ved godt om det" stille usynlig og uadresseret over tid?** Tjek, om jeres sikkerhedsgæld følges med samme stringens som jeres generelle baglog over teknisk gæld (emne 4.5).

5. **Tager vores prioritering af afhjælpning højde for faktisk eksponering og udnyttelighed, eller bygger den rent på en nominel alvorlighedsscore uanset kontekst?** Vælg et reelt eksempel, hvor to sårbarheder med lignende nominel alvorlighed indebar meget forskellig faktisk risiko, og drøft, om jeres nuværende proces ville have prioriteret dem korrekt.

6. **Er en sårbarheds alvorlighedsklassificering nogensinde gledet nedad over tid uden klar begrundelse?** Det spejler mønstret med manipulation af definitioner, som emne 1.2 og emne 6.2 begge advarer mod; revidér en stikprøve af jeres seneste klassificeringer for netop denne risiko.

## Sektorperspektiv

**Startup.** Formelle processer for sårbarhedshåndtering er ofte unødvendige meget tidligt, men at indføre grundlæggende automatiseret scanning af afhængigheder og en enkel, ærlig intern rapporteringsnorm fra start koster lidt og forhindrer, at sikkerhedsgæld hober sig usynligt op, før teamet har kapacitet til at tage fat på den systematisk.

**Mindre virksomhed.** De fleste moderne udviklingsplatforme har gratis eller billig automatiseret scanning af afhængigheder for sårbarheder; aktivér den tidligt, og følg tid til afhjælpning for alt, der markeres som kritisk, selv uden en dedikeret sikkerhedsfunktion eller sofistikerede værktøjer.

**Stor virksomhed.** Konsekvent, standardiseret alvorlighedsscoring og en reelt ikke-straffende kultur for offentliggørelse er begge afgørende og begge sværere at opretholde i stor skala, hvor uensartethed på tværs af dusinvis af teams og kulturel afdrift mod skyldsøgning efter en alvorlig hændelse er konstante risici. Invester i en dedikeret sikkerhedsstyringsfunktion til at opretholde klassificeringskonsistens og aktivt beskytte kulturen for offentliggørelse.

**Offentlig sektor.** Sikkerhedsmetrikker skærer her ofte direkte ind i national sikkerhed, regulatorisk overholdelse og offentlig tillid, og en alvorlig, fejlhåndteret sårbarhed kan have konsekvenser langt ud over et typisk brud i den private sektor. Oprethold stringent, eksternt forankret alvorlighedsklassificering, beskyt aktivt kulturen for intern og ekstern offentliggørelse, og behandl sikkerhedsgæld med den gennemsigtighed og prioriteringsstringens, dette emne anbefaler, for en udokumenteret, stille accepteret kritisk sårbarhed i offentlig infrastruktur er en reelt alvorlig, reviderbar risiko.

## Eksempler

**Stor virksomhed.** Sikkerhedsteamet i et softwarefirma havde i årevis rapporteret kun et råt antal sårbarheder til ledelsen, et tal der havde været fladt, hvilket gav en falsk følelse af stabilitet. En revideret alvorlighedsvægtet analyse af tid til afhjælpning afslørede, at selv om det samlede antal var fladt, tog kritiske sårbarheder i gennemsnit over halvfems dage at afhjælpe, langt over ethvert rimeligt mål, fordi de uden held konkurrerede mod funktionsarbejde i hver planlægningscyklus uden dedikeret, beskyttet kapacitet. Indførelsen af et fast mål på 7 dage for afhjælpning af kritiske sårbarheder, bakket op af beskyttet kapacitet til afhjælpning af sikkerhedsgæld efter model af emne 4.5's allokering for teknisk gæld, bragte den gennemsnitlige tid til afhjælpning af kritiske sårbarheder ned under fem dage inden for to kvartaler.

**Offentlig sektor.** En national infrastrukturmyndighed opdagede efter en ekstern sikkerhedsrevision, at interne ingeniører uformelt havde undgået at rapportere sårbarheder, de opdagede i deres egen kode, af frygt for, at det ville tage sig dårligt ud i deres præstationsvurderinger, en tydelig parallel til emne 6.2's mønster med skyldfri-drevet underrapportering af hændelser. Myndigheden indførte en eksplicit, offentligt kommunikeret politik, der beskyttede interne rapportører af sårbarheder mod enhver konsekvens for præstationsvurderingen, modelleret direkte på skyldfri hændelsesrespons, og interne sårbarhedsrapporter steg væsentligt i det følgende år, et resultat som myndighedens ledelse med rette fortolkede som tegn på forbedret opdagelse og ærlig rapportering, ikke som tegn på faldende kodekvalitet, og undgik dermed den naturlige, men fejlagtige konklusion, at et stigende tal måtte betyde, at tingene var blevet værre.

## Business case: motiver, ROI og TCO

Afkastet af stringent, velklassificeret, ærligt rapporteret sårbarhedshåndtering er undgåede brudomkostninger, som ved en alvorlig sikkerhedshændelse ofte overstiger omkostningerne ved proaktiv afhjælpning mange gange, sammen med undgået regulatorisk, kontraktlig og omdømmemæssig skade. Eksemplet med softwarefirmaet ovenfor viser den specifikke mekanisme: sikkerhedsgæld havde i årevis stille tabt prioriteringskonkurrencen mod funktionsarbejde, præcis det mønster, emne 4.5 advarer mod for teknisk gæld generelt, indtil beskyttet afhjælpningskapacitet løste det direkte.

De samlede ejeromkostninger omfatter automatiserede scanningsværktøjer, den beskyttede afhjælpningskapacitet, dette emne anbefaler at afsætte, og den vedvarende kulturelle investering i ikke-straffende praksis for offentliggørelse. Den omkostning er beskeden sammenlignet med omkostningen ved en alvorlig, med held udnyttet sårbarhed, som proaktiv, velprioriteret afhjælpning ville have fanget og rettet længe, før den kunne udnyttes.

## Antimønstre og faldgruber

- **Kun at følge et råt antal sårbarheder:** blander ubetydelige og kritiske problemer og giver en falsk følelse af stabilitet eller krise uanset faktisk risiko.
- **Rent intern, ustandardiseret alvorlighedsklassificering:** tilbøjelig til glidning mod eftergivenhed og uensartethed på tværs af teams.
- **At straffe offentliggørelse af sårbarheder, intern eller ekstern:** driver reel risiko under jorden frem for ind i en styret afhjælpningsproces.
- **Sikkerhedsgæld uden synlig, kvantificeret baglog:** taber som standard prioriteringskonkurrencen mod funktionsarbejde.
- **Prioritering alene efter nominel alvorlighedsscore, uden hensyn til kontekst om eksponering og udnyttelighed:** misdirigerer begrænset afhjælpningskapacitet.
- **At tolke et stigende antal sårbarhedsrapporter som tegn på faldende kvalitet uden at tjekke, om selve rapporteringen blev bedre:** en specifik instans af emne 1.6's faldgrube med forstyrrende variabler.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Sårbarheder følges, hvis overhovedet, som et råt antal uden alvorlighedsvægtning, uden sporing af afhjælpningstid og med en straffende kultur for offentliggørelse.
- **Niveau 2, Udvikl:** Der findes en vis alvorlighedsklassificering, men standarderne er uensartede, og afhjælpningstiden følges ikke mod eksplicitte mål.
- **Niveau 3, Standardisér:** Standardiseret, eksternt forankret alvorlighedsscoring og eksplicitte mål for afhjælpningstid efter alvorlighed anvendes konsekvent, med en reelt ikke-straffende kultur for offentliggørelse.
- **Niveau 4, Styr:** Sikkerhedsgæld følges i en synlig, kvantificeret baglog med beskyttet afhjælpningskapacitet; prioriteringen tager højde for kontekst om eksponering og udnyttelighed, ikke alvorlighed alene.
- **Niveau 5, Orkestrér:** Organisationen kan pege på specifikke, målbare reduktioner i tid til afhjælpning af kritiske sårbarheder og kan påvise en vedvarende, betroet kultur for offentliggørelse, der giver ærlige, omfattende sårbarhedsdata.

## Idéer til drøftelse

1. Hvad er vores nuværende gennemsnitlige tid til afhjælpning af kritiske sårbarheder, og lever den op til et eksplicit mål?
2. Ville en ingeniør, der indførte en sårbarhed, føle sig tryg ved selv at rapportere den?
3. Har vi en synlig, kvantificeret baglog over kendt sikkerhedsgæld med accepteret risiko?
4. Tager vores prioritering af afhjælpning højde for faktisk eksponering eller kun nominel alvorlighed?
5. Er en alvorlighedsklassificering nogensinde gledet nedad over tid uden klar begrundelse?

## Vigtigste pointer

- Følg **tid til afhjælpning efter alvorlighed**, ikke et råt antal sårbarheder, som den primære sikkerhedssundhedsmetrik.
- Brug **standardiseret ekstern alvorlighedsscoring** (såsom CVSS) som et konsekvent grundlag, modstandsdygtigt over for den risiko for glidning mod eftergivenhed, som rent intern vurdering inviterer til.
- Byg en reelt **ikke-straffende kultur for offentliggørelse**; at straffe rapportering driver reel risiko under jorden.
- Behandl **sikkerhedsgæld som en kategori af teknisk gæld** (emne 4.5), der konkurrerer fair om beskyttet afhjælpningskapacitet.
- Vægt prioriteringen efter **faktisk eksponering og udnyttelighed**, ikke alvorlighedsscore alene.

## Kilder og videre læsning

- FIRST.org's specifikation af Common Vulnerability Scoring System (CVSS): det standardiserede ramme for alvorlighedsscoring, der henvises til i hele dette emne.
- OWASP Foundations ressourcer om sårbarhedshåndtering og praksis for sikker softwareudviklingslivscyklus.
- *Site Reliability Engineering: How Google Runs Production Systems*, redigeret af Betsy Beyer, Chris Jones, Jennifer Petoff og Niall Richard Murphy (de principper for skyldfri kultur, som dette emne anvender på offentliggørelse af sikkerhedsproblemer).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management Planning*: autoritativ vejledning om praksis for afhjælpning af sårbarheder.
