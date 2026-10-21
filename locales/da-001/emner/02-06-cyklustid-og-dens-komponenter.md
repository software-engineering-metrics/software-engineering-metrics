# 2.6 Cyklustid og dens komponenter

## Overblik og motivation

**Cyklustid** er den interne opdeling af en ændrings flowtid (emne 2.4) i dens bestanddele af ingeniørtrin: kodningstid, gennemgangstid, testtid og udrulningstid, undertiden yderligere delt i opstartstid (hvor længe en ændring venter, før nogen begynder at arbejde på den) og aktiv tid (hvor lang tid den tager, når nogen gør). Hvor flowtid giver dig ét enkelt tal for, hvor lang tid en ændring tager ende til anden gennem hele værdistrømmen, fortæller [cyklustid](https://en.wikipedia.org/wiki/Cycle_time) dig, hvor tiden faktisk går hen, når den når ingeniørarbejdet, hvilket er det diagnostiske lag, emne 2.4 lovede ligger under dets eget sammenfattende tal.

Dette skel betyder noget, fordi "gennemløbstiden er for lang" ikke i sig selv kan handles på. Et team, hvis gennemløbstid domineres af kodningstid, har brug for en anden indsats end et team, hvis gennemløbstid domineres af en gennemgangskø på tre dage, som igen har brug for en anden indsats end et team, der mister det meste af sin tid til en ustabil, langsom testsuite. Uden opdeling af cyklustid har teams tendens til at gætte på flaskehalsen, og gættet er så ofte forkert, at det at rette det forkerte trin spilder reel indsats, mens den faktiske begrænsning forbliver urørt.

For store teams er opdeling af cyklustid det, der forvandler en regression i gennemløbstid i hele organisationen fra et mysterium til et specifikt, adresserbart problem. Når snesevis af teams deler fælles infrastruktur, kan en delt gennemgangsflaskehals eller en delt langsom CI-pipeline trække hvert teams gennemløbstid ned på identisk vis, og kun en sammenligning af cyklustid på tværs af teams afslører den delte rodårsag, frem for at hvert team uafhængigt gætter på sin egen lokale forklaring.

## Nøgleprincipper

- **Cyklustid forklarer gennemløbstid; den erstatter den ikke.** Rapportér begge sammen, med cyklustid som diagnosen og gennemløbstid som sammenfatningen.
- **Ventetid dominerer som regel aktiv tid.** Det meste af forsinkelsen i softwarelevering kommer af arbejde, der står uvirksomt i en kø, ikke af aktiv indsats (emne 2.5 dækker dette direkte gennem floweffektivitet).
- **Opdel efter trin, før du foreslår en løsning.** En løsning rettet mod det forkerte trin spilder indsats og kan demoralisere et team, der bliver bedt om at "arbejde hurtigere", når den reelle flaskehals var et andet sted.
- **En delt flaskehals på tværs af mange teams er en mulighed for platformsinvestering,** ikke blot en række individuelle teamproblemer.
- **Cyklustidsdata er udsat for de samme manipulationsrisici som flowtid** (emne 2.4): hold øje med tringrænser, der i det stille flytter sig for at pynte på et tal.

## Anbefalinger

### Instrumentér hver tringrænse eksplicit

Opdel en ændrings rejse i navngivne trin med klare, instrumenterbare grænser: kodning (første commit til pull request åbnet), opstart (pull request åbnet til første gennemgang), gennemgang (første gennemgang til godkendelse) og udrulning (godkendelse til produktion). Indfang tidsstempler for hver overgang automatisk fra versionsstyrings- og CI/CD-begivenheder, ikke fra selvrapporteret trinsporing, med samme princip om instrumentering frem for selvrapportering fra emne 1.5.

### Adskil ventetid fra aktiv tid inden for hvert trin

Inden for gennemgang, for eksempel, så skel mellem den tid, en pull request ligger urørt og venter på, at en gennemgående person begynder (ventetid), og den tid, en aktiv gennemgangssamtale tager, når den først er begyndt (aktiv tid). Det skel afslører som regel, at den dominerende omkostning er kødannelse, ikke indsats, hvilket peger mod en meget anden løsning (mere gennemgangskapacitet, bedre notifikation, mindre pull requests at gennemgå) end en løsning rettet mod at gøre selve gennemgangssamtalerne hurtigere.

### Led efter en delt flaskehals, før du diagnosticerer team for team

Når flere teams viser det samme trin som deres dominerende forsinkelse, en langsom delt CI-pipeline, en overbelastet delt gennemgangspulje, et sjældent delt udgivelsestog, er den delte årsag en mulighed for investering på platformsniveau, ikke en række uafhængige lokale problemer. Aggregér cyklustidsdata på tværs af teams specifikt for at lede efter dette mønster, før du antager, at hvert teams flaskehals er unik for det team.

### Brug cyklustid til at sætte realistiske, trinspecifikke forbedringsmål

I stedet for et enkelt mål om at "reducere gennemløbstiden med 20 %", som ikke giver et team nogen vejledning om, hvor det skal fokusere, så brug opdeling af cyklustid til at sætte et trinspecifikt mål: "reducér median ventetid på gennemgang fra to dage til fire timer". Et specifikt, trinmålrettet mål er både lettere for et team at handle på og lettere at verificere, at det faktisk blev nået gennem reel procesændring og ikke et urelateret skift et andet sted.

### Hold øje med manipulation af tringrænser

Ligesom flowtidens start- og slutpunkter kan drive (emne 2.4), kan individuelle tringrænser i cyklustiden flytte sig på måder, der pynter på et specifikt trins tal uden nogen reel forbedring, for eksempel at markere en gennemgang som "startet" i det øjeblik, en gennemgående person tildeles, frem for når vedkommende faktisk begynder at læse ændringen. Revidér periodisk instrumenteringen af tringrænser mod dens dokumenterede definition.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Grovkornet cyklustid (to eller tre trin) | Enkel at instrumentere og forklare | Kan muligvis ikke udpege den faktiske flaskehals præcist nok til at handle på |
| Finkornet cyklustid (mange trin, opdeling i ventetid og aktiv tid) | Præcis diagnose, handlingsrettede trinspecifikke mål | Mere instrumenteringsindsats; flere tal at vedligeholde og forklare |
| Gennemgang af cyklustid team for team | Tilpasset hvert teams faktiske arbejdsgang | Kan overse en delt flaskehals på tværs af teams, der gemmer sig bag lignende lokale tal |
| Aggregeret gennemgang af cyklustid på tværs af teams | Afslører delte flaskehalse på platformsniveau | Kræver standardiserede trindefinitioner på tværs af teams for at være meningsfuld |

Den centrale spænding er **diagnostisk præcision versus instrumenteringsomkostning**. Mere finkornet sporing af cyklustid giver en mere handlingsrettet diagnose, men koster mere at bygge og vedligeholde og tilføjer flere tal, et team skal forstå og stole på. Løs spændingen ved at starte groft (kodning, gennemgang, udrulning) og tilføje finere opdelinger, ventetid versus aktiv tid inden for et specifikt trin, først når det trin er bekræftet som en reel, tilbagevendende flaskehals, der er den ekstra instrumenteringsinvestering værd.

## Spørgsmål at drøfte med dit team

1. **Hvis gennemløbstiden gik tilbage i dag, kunne vi så inden for en time sige, hvilket specifikt trin der var ansvarligt, ved hjælp af data frem for gætværk?** Det er den centrale test af, om jeres instrumentering af cyklustid faktisk tjener sit diagnostiske formål. Hvis det ærlige svar er nej, er det hul værd at lukke, før den næste regression sker.

2. **Hvor stor en del af forsinkelsen i vores dominerende flaskehalstrin er ventetid versus aktiv tid?** De fleste teams antager, at aktiv indsats er begrænsningen, før de tjekker, når kødannelse som regel er den større omkostning. Træk den faktiske opdeling for dit langsomste trin, og se, om antagelsen holder.

3. **Deler flere teams det samme dominerende flaskehalstrin, hvilket tyder på en løsning på platformsniveau frem for teamniveau?** Aggregér dine cyklustidsdata på tværs af teams, og led eksplicit efter dette mønster, før du antager, at hvert teams langsomhed er lokalt forårsaget.

4. **Har vi sat trinspecifikke forbedringsmål, eller kun et enkelt samlet mål for gennemløbstid uden vejledning om, hvor der skal fokuseres?** Et vagt mål lader et team gætte på, hvor det skal investere indsats; et trinspecifikt gør ikke. Kontrollér jeres nuværende mål mod dette skel.

5. **Er nogen tringrænse i vores instrumentering drevet væk fra sin dokumenterede definition over tid?** Tringrænser er udsat for den samme definitionsmæssige afdrift som selve flowtiden (emne 2.4). Revidér en stikprøve af nylige trinovergangsbegivenheder mod den skriftlige definition.

6. **Hvordan viser en gennemgangstung kultur versus en tillidstung kultur sig forskelligt i vores cyklustidsdata?** Et team med meget grundig gennemgang i flere runder vil vise længere tid i gennemgangstrinnet end et team, der stoler på fletninger med enkelt godkendelse; drøft, om jeres nuværende balance afspejler et bevidst valg eller en uundersøgt standard.

## Sektorperspektiv

**Startup.** Cyklustiden domineres som regel af kodningstid frem for gennemgangs- eller udrulningstrin, simpelthen fordi processen er minimal. Når teamet vokser ud over en håndfuld ingeniører, så begynd at holde øje med ventetid på gennemgang specifikt, da det som regel er det første trin, der bliver langsommere, når flere menneskers arbejde skal passere gennem færre tilgængelige gennemgående.

**Mindre virksomhed.** Grundlæggende analyser fra versionsstyringsplatformen afslører som regel tilstrækkelig trinniveau-timing (tid til første gennemgang, tid til fletning) uden tilpasset instrumentering. Fokusér først på gennemgangstrinnet, da det er den mest almindelige tidlige flaskehals og den nemmeste at rette med en lille procesændring som en rotation af gennemgående.

**Stor virksomhed.** Delte flaskehalse på tværs af snesevis af teams er almindelige og har høj løftestang at finde: en enkelt overbelastet delt CI-kø eller et obligatorisk centralt gennemgangstrin kan i det stille beskatte gennemløbstiden i hele organisationen. Investér specifikt i aggregering af cyklustid på tværs af teams for at afdække disse delte begrænsninger i stedet for at lade hvert team diagnosticere uafhængigt.

**Offentlig sektor.** Cyklustidsdata er et stærkt, konkret værktøj til at begrunde procesmodernisering over for skeptiske interessenter, da "ventetiden på gennemgang er i gennemsnit fire dage på grund af én enkelt flaskehalsramt godkendelsesrolle" er en langt mere overbevisende, specifik sag for investering end en abstrakt påstand om, at "vores proces er langsom".

## Eksempler

**Stor virksomhed.** Ingeniørledelsen i et cloudinfrastrukturfirma bemærkede, at gennemløbstiden krøb op i næsten alle teams samtidigt. Aggregering af cyklustid på tværs af teams afslørede, at ventetid på gennemgang, ikke aktiv gennemgangstid, var den dominerende og delte årsag: et lille, centraliseret sikkerhedsgennemgangsteam var blevet en flaskehals, da antallet af teams, der krævede dets godkendelse, voksede hurtigere end selve teamet. At udvide og uddanne en bredere pulje af sikkerhedscertificerede gennemgående, frem for at bede individuelle teams om på en eller anden måde at kode eller teste hurtigere, løste den delte flaskehals og bragte gennemløbstiden ned igen over hele linjen inden for ét kvartal.

**Offentlig sektor.** En delstatsregerings team for digitale tjenester var under pres for at reducere gennemløbstiden og reagerede først ved at bede ingeniørerne om at arbejde hurtigere, en naturlig, men i sidste ende uhjælpsom instinkt. Opdeling af cyklustid viste, at den aktive kodningstid næsten ikke havde ændret sig år for år; næsten hele regressionen kom fra en voksende kø i et obligatorisk arkitekturgennemgangstrin, der var indført atten måneder tidligere som en compliance-foranstaltning. Teamet redesignede den gennemgang til en lettere, risikoopdelt proces for ændringer med lav risiko, hvilket skar ventetiden på gennemgang betydeligt, mens den fulde gennemgangsstrenghed blev bevaret for reelt højrisikoændringer.

## Business case: motiver, ROI og TCO

Afkastet af opdeling af cyklustid er målrettet, effektiv investering: en organisation, der ved præcis, hvilket trin der er flaskehalsen, kan rette netop det trin frem for at sprede indsatsen tyndt over hele en proces i håb om, at noget hjælper. Eksemplet med sikkerhedsgennemgang ovenfor er typisk: en præcist målrettet løsning, at udvide én specifik flaskehalsramt ressource, løste et problem i hele organisationen langt billigere, end et bredt, ufokuseret initiativ om at "speede levering op" ville have gjort.

De samlede ejeromkostninger er instrumenteringsindsatsen for pålideligt at fange tidsstempler på trinniveau og den løbende disciplin i periodisk at revidere tringrænser for afdrift. Den omkostning er umagen værd, fordi alternativet, at gætte på flaskehalse og rette det forkerte trin, spilder langt mere ingeniørindsats over tid, end instrumenteringen selv koster.

## Antimønstre og faldgruber

- **At reagere på en regression i gennemløbstid uden diagnose af cyklustid:** fører ofte til, at man retter det forkerte trin.
- **At antage, at aktiv indsats, ikke ventetid, er den dominerende omkostning:** som regel forkert; kødannelse dominerer i de fleste reelle leveringspipelines (emne 2.5).
- **At overse en delt flaskehals på tværs af teams ved kun at gennemgå cyklustid team for team:** lader en platformsløsning med høj løftestang forblive uopdaget.
- **At sætte et vagt samlet mål for gennemløbstid uden trinspecifik vejledning:** lader teams gætte på, hvor de skal fokusere indsatsen.
- **Definitionsmæssig afdrift af tringrænser:** pynter på et specifikt trins tal uden reel forbedring.
- **At instrumentere hvert tænkeligt finkornet trin, før man har bekræftet, at nogen af dem er en reel flaskehals:** spilder instrumenteringsindsats på detaljer, der endnu ikke informerer en beslutning.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Cyklustid opdeles slet ikke; teams gætter på flaskehalse, når gennemløbstiden går tilbage.
- **Niveau 2, Udvikl:** Nogle teams følger grovkornet trintiming uformelt, men der er ingen konsekvent instrumentering eller sammenligning på tværs af teams.
- **Niveau 3, Standardisér:** Tringrænser instrumenteres konsekvent i hele organisationen, med ventetid adskilt fra aktiv tid i de dominerende flaskehalstrin.
- **Niveau 4, Styr:** Aggregering af cyklustid på tværs af teams afdækker aktivt delte flaskehalse; trinspecifikke forbedringsmål erstatter vage samlede mål for gennemløbstid.
- **Niveau 5, Orkestrér:** Cyklustidsdata driver direkte prioriteringen af platformsinvesteringer, og organisationen kan pege på specifikke, målrettede løsninger, en udvidet gennemgangspulje, en hurtigere delt pipeline, der målbart forbedrede gennemløbstiden på tværs af mange teams på én gang.

## Idéer til drøftelse

1. Hvad er vores nuværende dominerende flaskehalstrin, og hvor sikre er vi på det svar?
2. Hvor stor en del af det flaskehalstrins tid er ventetid versus aktiv tid?
3. Deler nogen af vores teams den samme flaskehals, hvilket tyder på en løsning på platformsniveau?
4. Hvornår satte vi sidst et trinspecifikt, frem for samlet, forbedringsmål for leveringen?
5. Har en trindefinition i vores værktøj nogensinde ændret sig uden dokumentation?

## Vigtigste pointer

- Cyklustid **opdeler flowtid** i ingeniørtrin, kodning, gennemgang, test, udrulning, og er det diagnostiske lag under det sammenfattende tal.
- Adskil **ventetid fra aktiv tid** inden for hvert trin; kødannelse dominerer som regel aktiv indsats (emne 2.5).
- Led efter **delte flaskehalse på tværs af teams**, før du antager, at en opbremsning er teamspecifik; en delt årsag er ofte en mulighed for platformsinvestering.
- Sæt **trinspecifikke forbedringsmål**, ikke vage samlede mål, så teams ved præcis, hvor de skal fokusere.
- Tringrænser er udsat for den samme risiko for **definitionsmæssig afdrift** som selve flowtiden; revidér dem periodisk.
- Emne 2.7 giver den underliggende matematik, Little's lov, for hvorfor igangværende arbejde og cyklustid bevæger sig sammen.

## Kilder og videre læsning

- *The Principles of Product Development Flow*, af Donald G. Reinertsen (køteori og ræsonnement om batchstørrelse, der ligger under analyse af cyklustid).
- *Actionable Agile Metrics for Predictability*, af Daniel S. Vacanti (cyklustid og flowbaseret måling til softwarelevering).
- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (gennemløbstid og dens forhold til leveringspræstation).
- *The Goal*, af Eliyahu M. Goldratt (begrænsningsteori og princippet om at finde og rette den faktiske flaskehals frem for at optimere overalt).
