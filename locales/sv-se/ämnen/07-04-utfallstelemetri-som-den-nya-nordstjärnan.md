# 7.4 Utfallstelemetri som den nya nordstjärnan

## Översikt och motivation

Det här kapitlet avslutar del 7, och i en verklig mening avslutar argumentet den här hela boken har byggt sedan kapitel 1.3, med ett enda, direkt påstående: när generativ AI gör rå output billig, slutar **utfalls[telemetri](https://en.wikipedia.org/wiki/Telemetry)**, kontinuerlig, instrumenterad mätning av verkliga utfall snarare än aktivitet eller output, vara en god praxis bland flera och blir den organiserande principen ett mätetalsprogram måste byggas runt. Det här är inte en ny idé introducerad för första gången här. Det är idén kapitel 1.3 introducerade i den här bokens öppnande del, nu presenterad som det nödvändiga, snarare än bara föredragna, svaret på ett teknikskifte som har gjort varje alternativ farligare än det brukade vara.

Logiken är direkt. Innan generativ AI var outputvolym en ofullkomlig men inte värdelös representant för insats och, löst, för värde; ett team som levererade fler funktioner hade, minst, gjort mer arbete, även om det arbetet inte alltid var rätt arbete. Generativ AI skär av även den lösa kopplingen: outputvolym indikerar inte längre pålitligt insats, eftersom ett verktyg kan generera den på sekunder, och den indikerar absolut inte värde, eftersom kapitel 7.3 visade att uppblåst output kan samexistera med försämrad kvalitet. Mätetalen som överlever det här skiftet intakta är precis de som den här boken har betonat att bygga mot från sina öppnande kapitel: läckt-defektfrekvens (kapitel 5.1), funktionsadoption (kapitel 5.2), kund- och affärsutfall (kapitel 5.3), tillförlitlighet (del 6), och utvecklarvälbefinnande (del 3). Inget av dessa beror på hur den underliggande koden producerades; alla mäter vad som faktiskt hände som resultat.

För stora team har det här kapitlets argument direkta, praktiska konsekvenser för hur ett mätetalsprogram borde byggas och ombyggas framåt. Stora företag som omdesignar sina ingenjörsinstrumentpaneler i ljuset av AI-antagande borde vikta investering specifikt mot utfallstelemetriinfrastrukturen det här kapitlet beskriver; myndigheter, som utvärderar både AI-verktyg och de bredare teknikprogrammen den är inbäddad i, borde hålla båda till samma utfallstelemetristandard det här kapitlet rekommenderar som baslinjen för varje trovärdig, framtidssäker utvärdering.

## Nyckelprinciper

- **Utfallstelemetri blir nödvändig, inte bara föredragen, när output blir billig.** Det här är kapitel 1.3:s grundprincip, nu brådskande snarare än aspirationell.
- **Mätetalen som överlever det här skiftet är de den här boken har byggt mot genomgående**: läckta defekter, adoption, affärsutfall, tillförlitlighet, och välbefinnande.
- **Ett mätetalsprogram byggt primärt runt outputmätetal är nu en belastning, inte bara ett suboptimalt val.** Outputmätetal kan blåsas upp billigt och snabbt i skala.
- **Utfallstelemetri kräver verklig investering**, instrumentering, tålamod för långsammare signal, och organisatorisk disciplin att motstå dragningen mot snabbare, billigare, men nu-opålitliga outputmätetal.
- **Den här principen överlever varje specifikt AI-verktyg eller leverantör.** Det är ett varaktigt svar på ett varaktigt skifte i vad output betyder, inte en tillfällig justering till en förbigående trend.

## Rekommendationer

### Granska er mätetalsinvesteringskvot: utfallstelemetri kontra outputspårning

Beräkna ungefär vilken andel av er nuvarande mätetalsinfrastruktur, instrumenteringsinsats, instrumentpanelsutrymme, granskningsmötestid, går mot utfallsmätetal (del 5, del 6, utvecklarvälbefinnande från del 3) kontra output- och aktivitetsmätetal (driftsättningsantal, commit-volym, pull-request-genomströmning). Om outputspårning dominerar är den kvoten själv nu en belastning givet det här kapitlets argument, och att ombalansera den är den enskilt högst-inflytelserika ändringen det här kapitlet rekommenderar.

### Investera i utfallstelemetriinfrastruktur medvetet, som en förstklassig ingenjörsinvestering

Utfallsmätning, funktionsadoptionsspårning, affärsutfallskorrelation (kapitel 5.3), tillförlitlighetsinstrumentering (del 6), kräver verklig, löpande ingenjörsinvestering som många organisationer historiskt har underresurserat relativt de jämförelsevis billiga och enkla outputmätetalen som dominerar många instrumentpaneler idag. Behandla den här infrastrukturinvesteringen med samma allvar den här boken tillämpar på varje annan betydande ingenjörsförmåga, inte som en sekundär angelägenhet bakom själva AI-verktygsinvesteringen.

### Acceptera och kommunicera att utfallstelemetri är långsammare, och bygg tålamod för det in i er organisations förväntningar

Utfallsmätetal är, nästan av sin natur, mer eftersläpande och bullrigare än outputmätetal (kapitel 1.3:s ledande-kontra-eftersläpande-distinktion, kapitel 1.6:s statistiska försiktighet). En organisation van vid den snabba, tillfredsställande återkopplingen av att se ett outputtal stiga behöver bygga genuint tålamod för den långsammare, mer ärliga signalen utfallstelemetri ger, och ledning behöver aktivt kommunicera och modellera det tålamodet snarare än att reflexmässigt sträcka sig efter det snabbare, nu-opålitliga alternativet under tryck att visa snabba resultat.

### Använd det här skiftet som tillfället att pensionera genuint föråldrade outputmätetal, inte bara att lägga till utfallsmätetal vid sidan av dem

Följande kapitel 1.1:s disciplin att pensionera mätetal som inte längre förtjänar sin plats, använd det här ögonblicket som ett medvetet tillfälle att ta bort output- och aktivitetsmätetal det här skiftet specifikt har devärderat, snarare än att helt enkelt lägga till utfallsmätetal ovanpå en oförändrad befintlig instrumentpanel. En instrumentpanel som håller varje gammalt outputmätetal medan den fäster på nya utfallsmätetal växer uppsvälld snarare än genuint förbättrad.

### Behandla utfallstelemetriinvestering som varaktig, oberoende av något specifikt AI-verktyg eller leverantörsförhållande

Bygg utfallstelemetriinfrastruktur som en permanent organisatorisk förmåga, inte som en reaktion specifik till vilket AI-verktyg er organisation råkar använda det här året. Den här principen, och infrastrukturen den kallar på, kommer överleva varje specifikt leverantörsförhållande eller verktygsgeneration, och att bygga den som en varaktig förmåga skyddar ert mätetalsprogram mot nästa teknikskifte lika mycket som det nuvarande.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Outputmätetal-dominerad instrumentpanel | Snabb, billig återkoppling; bekant för de flesta organisationer | Nu aktivt opålitlig givet generativ AIs effekt på outputkostnad |
| Utfallstelemetri-dominerad instrumentpanel | Motståndskraftig mot det här skiftet; mäter vad som faktiskt spelar roll | Långsammare, bullrigare signal; kräver verklig instrumenteringsinvestering |
| Att lägga till utfallsmätetal vid sidan av oförändrade outputmätetal | Inkrementellt, mindre disruptivt | Producerar instrumentpanelsuppsvälldhet snarare än genuin förbättring |
| Full, medveten ombalansering mot utfallstelemetri | Adresserar skiftet direkt och fullständigt | Kräver den mest betydande organisatoriska och investeringsändringen |

Den centrala spänningen är, i en verklig mening, samma en den här boken öppnade med i kapitel 1.3, nu skärpt till sin mest brådskande form: **snabb, bekant återkoppling kontra långsammare, ärlig signal**. Outputmätetal har alltid varit lättare och snabbare att producera; det här kapitlets argument är att generativ AI har flyttat den avvägningen från bara suboptimal till aktivt farlig. Lös spänningen på sättet den här boken har rekommenderat från sitt öppnande kapitel: vikta avgörande mot utfall, acceptera den långsammare återkopplingen som kommer med genuin värdemätning, och behandla obekvämligheten av den långsammare återkopplingen som den ärliga kostnaden av att mäta något verkligt snarare än något bara bekvämt.

## Frågor att diskutera med ditt team

1. **Vilken andel av vår nuvarande mätetalsinfrastruktur och instrumentpanelsuppmärksamhet går mot utfallsmätetal kontra output- och aktivitetsmätetal?** Beräkna den här kvoten ärligt; de flesta organisationer, bedömda för första gången, finner den mer outputviktad än de skulle ha gissat.

2. **Vilken specifik utfallstelemetriinfrastrukturinvestering har vi skjutit upp till förmån för snabbare, billigare outputspårning?** Namnge ett konkret exempel, funktionsadoptionsinstrumentering, affärsutfallskorrelationsverktyg, och diskutera vad det skulle krävas att faktiskt bygga det.

3. **Har vår organisation byggt genuint tålamod för utfallstelemetris långsammare återkoppling, eller fortsätter tryck för snabba resultat att dra oss tillbaka mot snabbare men nu-opålitliga outputmätetal?** Var ärliga om det här mönstret i era egna nyliga rapporterings- och granskningsmöten.

4. **Vilket output- eller aktivitetsmätetal på vår nuvarande instrumentpanel är en genuin kandidat för pensionering, nu när det här kapitlets argument tillämpas på det specifikt?** Identifiera minst en, och diskutera vad som skulle behöva ersätta det snarare än att helt enkelt lämna ett gap.

5. **Om vår AI-verktygsleverantör eller den nuvarande generationen av AI-kodassistenter ändrades dramatiskt nästa år, skulle vårt mätetalsprogram fortfarande hålla?** Det här testar om er utfallstelemetriinvestering är genuint varaktig, byggd som en permanent förmåga, eller bara en reaktion specifik till er nuvarande verktygssituation.

6. **Hur skulle det se ut för vår organisation att fullt åta sig till det här kapitlets argument, ombalanserande vår mätetalsinvestering avgörande mot utfall snarare än inkrementellt?** Skissera det här konkret snarare än att lämna det abstrakt; gapet mellan det nuvarande tillståndet och den här visionen är er organisations faktiska färdplan för att svara på det här skiftet.

## Sektorperspektiv

**Startup.** Att bygga utfallstelemetri tidigt, innan outputmätetal har haft en chans att bli djupt inrotad organisatorisk vana, är genuint lättare än att retroaktivt anpassa den senare. Ett ungt företag som antar AI-kodassistans från start har en verklig möjlighet att bygga sitt mätetalsprogram utfall-först snarare än att behöva vrida tillbaka en befintlig outputmätetal-dominerad kultur.

**Litet företag.** Fokusera utfallstelemetriinvestering på det enskilda utfallsmätetalet som mest direkt reflekterar överlevnad och tillväxt (kapitel 5.3), snarare än att försöka heltäckande instrumentering över varje utfallskategori den här boken täcker. En blygsam, fokuserad utfallstelemetriinvestering slår en heltäckande outputmätetal-instrumentpanel det här kapitlets argument nu specifikt har devärderat.

**Stort företag.** Ombalanseringen det här kapitlet rekommenderar är en genuin, betydande organisatorisk ändring på den här skalan, troligen krävande chefsponsring och en flerkvartals investeringsplan. Behandla det med samma allvar som varje annan större infrastrukturinvestering den här boken täcker, och använd de specifika, konkreta exemplen från kapitel 7.1 och kapitel 7.3, mätetalsinflation och kvalitetsutspädning en ombalanserad instrumentpanel skulle ha fångat tidigare, för att bygga det interna fallet för investeringen.

**Myndighet.** Myndighetsteknikprogram utvärderade primärt på leverans- och outputmätetal (funktioner levererade, i tid) är alltmer sårbara för exakt den skepticism kapitel 5.3 beskrev, och det här kapitlets argument skärper den sårbarheten ytterligare när AI-verktygsantagande sprids genom den bredare branschen myndigheter rekryterar från och jämförs mot. Bygg utfallstelemetri som den primära grunden för offentlig rapportering och budgetmotivering, positionerande er organisation före, snarare än bakom, det här skiftet.

## Exempel

**Stort företag.** Ett mjukvarubolags ingenjörsledning, föranledd direkt av mätetalsinflationsnärmissen beskriven i kapitel 7.1:s finansteknikexempel, genomförde en full revision av sin mätetalsinvesteringskvot och fann att nästan 70 % av dess instrumentpanelsutrymme och instrumenteringsinsats var ägnad output- och aktivitetsmätetal, med bara blygsam, inkonsekvent investering i utfallstelemetri. Under det följande året ombalanserade företaget medvetet den här kvoten, pensionerande flera outputmätetal kapitel 7.1:s revision hade flaggat som mest exponerade och investerande den frigjorda kapaciteten i funktionsadoptions- och affärsutfallsinstrumentering (kapitel 5.2, 5.3). Den resulterande instrumentpanelen, presenterad vid följande års styrelsemöte, krediterades explicit av samma tidigare skeptiska styrelsemedlem som en meningsfullt mer trovärdig grund för att utvärdera ingenjörsinvestering än den outputtunga versionen den ersatte.

**Myndighet.** En nationell digitaltjänstmyndighet, som byggde ett nytt ingenjörsmätetalsprogram från grunden specifikt eftersom dess tidigare, outputmätetal-dominerade instrumentpanel hade dragit upprätthållen lagstiftande skepticism, antog det här kapitlets princip explicit som sitt grundläggande designbeslut: utfallstelemetri, medborgarväntetid, tjänsteslutförandefrekvens, läckt-defektfrekvens, skulle vara den primära grunden för all offentlig rapportering, med output- och leveransmätetal behållna bara som interna diagnostiska verktyg, aldrig som det rubrikbevis presenterat externt. Den här utfall-först-designen, byggd medvetet i ljuset av det generativa AI-skiftet den här delen beskriver, gav myndighetens rapportering en varaktighet och trovärdighet med dess tillsynskommitté dess föregångarprogram, byggt runt en tidigare generations outputmätetalsantaganden, aldrig hade uppnått.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på att åta sig avgörande till utfallstelemetri är ett mätetalsprogram som förblir trovärdigt och pålitligt genom det nuvarande teknikskiftet och vad som kommer efter det, snarare än ett som kräver en annan betydande ombyggnad nästa gång output blir billig genom någon framtida teknikändring. Mjukvarubolagsexemplet ovan visar det här konkret: den ombalanserade instrumentpanelen reparerade direkt trovärdighet den tidigare, outputtunga versionen hade satt i genuin risk.

Den totala ägandekostnaden är utfallstelemetriinfrastrukturinvesteringen det här kapitlet rekommenderar, genuint betydande, flerkvartals arbete för en stor organisation, vägd mot den varaktiga, långsiktiga risken av ett mätetalsprogram som blir progressivt mindre trovärdigt när output fortsätter bli billigare. Det här är inte en kostnad den här boken ber er acceptera lättvindigt; det är den direkta, nödvändiga konsekvensen av att ta kapitel 1.3:s grundargument på det allvar den här bokens sista del ber er om.

## Antimönster och fallgropar

- **Att behandla det här skiftet som att det bara kräver inkrementell justering snarare än genuin ombalansering:** underskattar skalan av ändring generativ AI har introducerat till vad outputmätetal betyder.
- **Att lägga till utfallsmätetal vid sidan av en oförändrad, fortfarande dominerande uppsättning outputmätetal:** producerar instrumentpanelsuppsvälldhet snarare än den genuina ombalanseringen det här kapitlet argumenterar för.
- **Att bygga utfallstelemetriinvestering som en reaktion till ett specifikt nuvarande AI-verktyg snarare än som en varaktig förmåga:** lämnar organisationen exponerad för nästa teknikskifte på samma sätt.
- **Att misslyckas med att bygga organisatoriskt tålamod för utfallstelemetris långsammare återkoppling:** riskerar att återgå till snabbare, men nu-opålitliga, outputmätetal under tryck för snabba resultat.
- **Att pensionera outputmätetal utan en genuin utfallstelemetriersättning:** lämnar ett mätningsgap snarare än en genuin förbättring.
- **Att presentera det här skiftet för intressenter som bara en respons på AI-verktyg snarare än som uppfyllandet av den här bokens grundprincip:** underskattar argumentets varaktighet och generalitet.

## Mognadsmodell

- **Nivå 1, Initiera:** Instrumentpanelen förblir outputmätetal-dominerad, utan medveten respons till skiftet den här delen beskriver.
- **Nivå 2, Utveckla:** Vissa utfallsmätetal har lagts till, men den övergripande investeringskvoten förblir outputtung och inga mätetal har medvetet pensionerats.
- **Nivå 3, Standardisera:** En medveten revision och ombalansering mot utfallstelemetri har genomförts, med genuint föråldrade outputmätetal pensionerade, organisationsövergripande.
- **Nivå 4, Hantera:** Utfallstelemetriinfrastruktur behandlas som en förstklassig, löpande ingenjörsinvestering, och organisatoriskt tålamod för dess långsammare återkoppling odlas och skyddas aktivt.
- **Nivå 5, Orkestrera:** Organisationens mätetalsprogram är utfallstelemetri-lett som en varaktig, permanent designprincip, bevisad motståndskraftig genom det nuvarande teknikskiftet och explicit byggd att förbli motståndskraftig genom vad som kommer härnäst.

## Diskussionsidéer

1. Vad är vår faktiska nuvarande kvot av utfallsmätetal-till-outputmätetal-investering?
2. Vilket enskilt outputmätetal borde vi pensionera det här kvartalet, och vilket utfallsmätetal borde ersätta det?
3. Var har organisatorisk otålighet dragit oss tillbaka mot snabbare men mindre trovärdiga outputmätetal nyligen?
4. Är vår utfallstelemetriinvestering varaktig, eller bunden specifikt till vår nuvarande AI-verktygssituation?
5. Vad skulle det krävas att fullt åta sig till det här kapitlets argument, snarare än att justera inkrementellt?

## Viktiga slutsatser

- Utfallstelemetri blir **nödvändig, inte bara föredragen**, när generativ AI gör output billig; det här är kapitel 1.3:s grundprincip, nu brådskande.
- Mätetalen som **överlever det här skiftet** är de den här boken bygger mot genomgående: läckta defekter, adoption, affärsutfall, tillförlitlighet, och välbefinnande.
- **Granska och ombalansera er mätetalsinvesteringskvot** medvetet, pensionerande genuint föråldrade outputmätetal snarare än bara lägga till utfallsmätetal vid sidan av dem.
- Bygg organisatoriskt **tålamod för utfallstelemetris långsammare återkoppling**, och motstå dragningen tillbaka mot snabbare men nu-opålitliga outputmätetal under tryck.
- Bygg den här investeringen som en **varaktig förmåga**, oberoende av något specifikt AI-verktyg eller leverantör, skyddande ert mätetalsprogram mot framtida teknikskiften lika väl som det nuvarande.

## Källor och vidare läsning

- *Accelerate: The Science of Lean Software and DevOps*, av Nicole Forsgren, Jez Humble, och Gene Kim (den utfallsbaserade mätningsgrunden hela den här boken, och det här avslutande kapitlet av del 7, bygger på).
- *Lean Analytics*, av Alistair Croll och Benjamin Yoskovitz (den handlingsbara-kontra-vanitetsmätetal-distinktionen det här kapitlets argument utökar till AI-eran).
- *The Innovator's Dilemma*, av Clayton M. Christensen (det allmänna mönstret av etablerade mätetal och praxiser som blir belastningar under ett disruptivt teknikskifte).
- *Measure What Matters*, av John Doerr (utfallsorienterad målsättning som en organiserande princip för ett mätetalsprogram, modellen det här kapitlet argumenterar nu borde vara standarden, inte undantaget).
