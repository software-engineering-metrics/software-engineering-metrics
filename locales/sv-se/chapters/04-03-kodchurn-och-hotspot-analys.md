# 4.3 Kodchurn och hotspot-analys

## Översikt och motivation

**Kodchurn** mäter hur frekvent en fil eller modul ändras över tid, rader tillagda, modifierade, och raderade över successiva commits. På egen hand är churn en ganska svag signal: vissa filer ändras ofta eftersom de är under aktiv, hälsosam utveckling, och vissa ändras sällan eftersom de är stabila och korrekta, inte eftersom de är försummade. Den verkliga diagnostiska kraften i det här kapitlets tillvägagångssätt kommer från att kombinera churn med komplexitet (kapitel 4.1): en fil som är både frekvent ändrad och högt komplex, en **hotspot**, är oproportionerligt trolig att vara en källa till defekter och en belastning på teamhastighet, och empirisk forskning bekräftar det här konsekvent över många kodbaser och organisationer.

**Hotspot-analys**, populariserad genom Adam Tornhills arbete om mjukvaruanalys, är specifikt värdefull eftersom den inte kräver någon manuell undersökning eller subjektivt omdöme för att hitta sina mål. [Versionskontrollhistorik](https://en.wikipedia.org/wiki/Version_control) innehåller redan allt som behövs för att beräkna både churn och, kombinerat med statisk analysverktyg, komplexitet, för varje fil i en kodbas automatiskt. Det här låter ett team eller en organisation identifiera, med verkliga bevis snarare än anekdot eller det högljuddaste klagomålet i en retrospektiv, exakt vilken liten andel av kodbasen som förtjänar omstruktureringsuppmärksamhet först.

För stora team löser hotspot-analys ett genuint allokeringsproblem: en kodbas med hundratusentals rader har mycket mer kod än något team har råd att omstrukturera heltäckande, och intuition om var de värsta problemen bor är ofta fel, skev av vem som klagade senast eller vilken fil en senior ingenjör råkar ogilla. Stora företag och myndigheter som hanterar stora, långlivade kodbaser beror på den här databaserade prioriteringen för att rikta genuint knapp omstruktureringsbudget mot koden som kommer producera störst avkastning.

## Nyckelprinciper

- **Churn ensam är en svag signal; churn kombinerad med komplexitet är stark.** Kombinationen, inte endera mätetalet ensamt, är vad som identifierar en genuin hotspot.
- **Hotspot-analys kräver ingen manuell undersökning.** Versionskontrollhistorik innehåller redan allt som behövs för att beräkna den automatiskt.
- **En hotspot är en prioriteringssignal, inte en automatisk dom.** Mänskligt omdöme behövs fortfarande för att besluta vilken handling en specifik hotspot motiverar.
- **Frekvent ändring är inte inherent dåligt.** Viss churn reflekterar hälsosam, aktiv utveckling snarare än ett kvalitetsproblem.
- **Den här analysen skalar precis där intuition misslyckas**: i stora kodbaser för stora för någon individ att undersöka och prioritera på känsla ensamt.

## Rekommendationer

### Beräkna churn och komplexitet tillsammans, och rangordna efter deras kombination

Extrahera ändringsfrekvens per fil från versionskontrollhistorik över ett meningsfullt fönster, vanligtvis sex månader till ett år, och para den med ett komplexitetsmått (kapitel 4.1) för samma filer. Rangordna filer efter kombinationen, vanligtvis produkten av churn och komplexitet, snarare än efter endera mätetalet ensamt, eftersom den här kombinationen är vad den underliggande forskningen konsekvent associerar med förhöjda defektfrekvenser och underhållskostnad.

### Undersök de topprankade hotspots med mänskligt omdöme innan ni agerar

En rangordnad hotspotlista identifierar kandidater för uppmärksamhet, inte en automatisk handlingslista. För var och en av era topp-hotspots, undersök med ett mänskligt öga: är det här genuint dåligt designad kod som behöver omstrukturering, eller är det en fil som legitimt behöver frekvent ändring eftersom den sitter i centrum av aktiv, utvecklande affärslogik, i vilket fall prioriteten kanske vore bättre tester eller tydligare dokumentation snarare än en strukturell omskrivning. Det här speglar kapitel 4.1:s väsentlig-kontra-oavsiktlig-komplexitetsdistinktion, tillämpad här på den kombinerade churn-komplexitet-signalen.

### Korsreferensera hotspots mot incident- och defektdata

Där tillgängligt, kontrollera om era identifierade hotspots korrelerar med faktiska produktionsincidenter (kapitel 6.2) eller läckt-defektdata (kapitel 5.1). En stark korrelation validerar hotspot-analysen som genuint förutsägande för er specifika kodbas och stärker verksamhetsfallet för att agera på den; en svag eller frånvarande korrelation antyder antingen ett datakvalitetsproblem eller att churn och komplexitet inte, i ert specifika sammanhang, är rätt kombination av signaler att prioritera efter.

### Spåra hotspot-trend över successiva analyser, inte bara ett enda ögonblicksfoto

Kör hotspot-analys periodiskt igen, kvartalsvis är vanligt, och spåra om tidigare identifierade hotspots förbättras, försämras, eller löses, och om nya framträder. En hotspot som kvarstår över flera analyscykler trots att den flaggats upprepade gånger indikerar antingen att åtgärdsinsats faktiskt inte har tillämpats eller att ett tidigare åtgärdsförsök inte adresserade det verkliga underliggande problemet.

### Använd hotspot-data för att informera, inte ersätta, teamnivå-prioriteringskonversationer

Presentera hotspot-analys som bevis i en prioriteringsdiskussion, inte som ett automatiskt mandat som överrider ett teams egna kontextuella omdöme om vad som spelar mest roll just nu. Ett team kan ha goda, legitima anledningar att tillfälligt nedprioritera en känd hotspot, en kommande planerad omskrivning gör inkrementell omstrukturering till slösad insats, till exempel, och analysen borde informera den konversationen, inte ersätta den.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Intuitionsbaserad prioritering | Snabb, inga verktyg krävs, utnyttjar teamets kontextuella kunskap | Skev av nyhet, personlig preferens, och vem som klagar högljuddast |
| Churn ensam | Enkel att beräkna | Svag signal på egen hand; frekvent ändring är inte inherent dåligt |
| Churn kombinerad med komplexitet (hotspot-analys) | Stark, evidensbaserad, automatisk från befintlig data | Kräver kombinering av två datakällor och att tolka resultat med omdöme |
| Hotspot-analys korsrefererad mot incidentdata | Validerad, starkaste bevis för prioritering | Kräver tillförlitlig incident-till-kod-länkning, vilket inte varje organisation har |

Den centrala spänningen är **bevis kontra kontext**. Hotspot-analys ger objektiva, skalbara bevis som intuitionsbaserad prioritering inte kan matcha i storleken av en stor, obekant, eller långlivad kodbas, men den saknar det kontextuella omdömet ett team har om varför en given hotspot spelar roll, eller inte, just nu. Lös spänningen genom att behandla hotspot-analys som evidensbasen för en prioriteringskonversation, kombinerad med, aldrig ersättande, teamets egna kontextuella omdöme om timing och avvägningar.

## Frågor att diskutera med ditt team

1. **Vad är våra topp fem hotspots, rangordnade efter churn och komplexitet kombinerat, och skulle den rangordningen matcha vårt teams intuition om var våra värsta problem bor?** Kör analysen och jämför resultatet mot vad ert team skulle ha gissat innan ni såg datan; avvikelser är ofta det mest värdefulla fyndet.

2. **Korrelerar våra identifierade hotspots med faktiska produktionsincidenter eller läckt-defektdata?** Om ni har datan för att kontrollera det här, gör det direkt; om ni inte har det är det gapet i sig värt att namnge som något att bygga mot.

3. **För vår topp-hotspot just nu, är det underliggande problemet väsentlig komplexitet som legitimt kräver frekvent ändring, eller oavsiktlig komplexitet som en omstrukturering genuint kunde fixa?** Gå igenom filen tillsammans och gör det här omdömet explicit snarare än att anta endera svaret.

4. **Har en tidigare identifierad hotspot kvarstått över flera analyscykler trots att den flaggats?** Om så, undersök ärligt varför: åtgärd försöktes aldrig faktiskt, eller ett tidigare försök adresserade inte den verkliga underliggande orsaken.

5. **Prioriterar vi för närvarande omstruktureringsarbete baserat på bevis, eller baserat på vem som klagade senast eller högljuddast?** Var ärliga om ert teams faktiska nuvarande prioriteringsprocess och hur den jämför sig med vad en evidensbaserad hotspot-analys skulle föreslå.

6. **Vad skulle det kosta oss, i defektfrekvens eller leveransavmattning, att lämna vår nuvarande topp-hotspot oadresserad för ytterligare ett år?** Den här frågan tvingar fram en konkret kostnadsuppskattning som kan förankra ett prioriteringsbeslut, snarare än att lämna hotspoten som en abstrakt, lätt nedprioriterad angelägenhet.

## Sektorperspektiv

**Startup.** Formell hotspot-analys är vanligtvis onödig med en liten, ung kodbas som hela teamet fortfarande håller i sina huvuden kollektivt. Tekniken blir värdefull specifikt när kodbasen har växt förbi storleken där någon individ pålitligt kan identifiera de värsta områdena av minne ensamt, ofta någonstans under det första året eller två av upprätthållen tillväxt.

**Litet företag.** Gratis eller lågkostnadsverktyg kan extrahera churn-data direkt från er befintliga versionskontrollhistorik med minimal uppsättning; kombinera den med vilken komplexitetsdata er befintliga lintare eller statiska analysverktyg redan rapporterar, snarare än att investera i dedikerad kommersiell hotspot-analysmjukvara på den här skalan.

**Stort företag.** Hotspot-analys är där evidensbaserad prioritering förtjänar mest avkastning, eftersom intuition genuint misslyckas i skalan av en kodbas som spänner hundratals tjänster och tusentals filer. Investera i att köra den här analysen regelbundet över hela kodbasen och korsreferensera mot incidentdata för att bygga ett validerat, försvarbart fall för omstruktureringsinvestering.

**Myndighet.** Långlivade system, ibland decennier gamla, är en naturlig passform för hotspot-analys, eftersom den ackumulerade versionskontrollhistoriken ger en rik, långsiktig signal om vilka delar av systemet som genuint har visat sig besvärliga över tid. Det här evidensbaserade tillvägagångssättet är också ett övertygande, konkret verktyg för att motivera moderniseringsinvestering för intressenter som behöver mer än en ingenjörs informella åsikt för att godkänna finansiering.

## Exempel

**Stort företag.** Ett försäkringsbolags skadereglingsplattform, spännande över två miljoner rader kod över dussintals tjänster, hade ackumulerat år av informella klagomål om att "skadevalideringsmodulen" var besvärlig, men ingen formell prioritering hade någonsin följt från de klagomålen. En hotspot-analys som kombinerade sex månaders churn-data med komplexitetspoäng identifierade en helt annan fil, ett delat valutaomvandlingsverktyg begravt djupt i ett sällan diskuterat beroende, som den faktiska topp-hotspoten, en som aldrig hade kommit upp i något retrospektivt klagomål. Korsreferensering mot incidentdata bekräftade att det här verktyget var inblandat i en oproportionerlig andel av finansiella beräkningsdefekter under föregående år, och en riktad omstrukturering av det specifika verktyget, snarare än modulen alla informellt hade skyllt på, producerade en mätbar minskning i relaterade incidenter inom det följande kvartalet.

**Myndighet.** En delstatlig motorfordonsmyndighets decennier-gamla licenssystem genomgick en hotspot-analys som en del av ett moderniseringsverksamhetsfall. Analysen identifierade ett litet kluster av filer, representerande under 3 % av den totala kodbasen, ansvariga för en oproportionerlig andel av både churn och komplexitet, och korsreferensering mot myndighetens incidentlogg visade att samma kluster stod för nästan 40 % av alla rapporterade systemdefekter under de föregående tre åren. Det här konkreta, evidensbaserade fyndet, mycket mer övertygande än ett allmänt påstående att "systemet är gammalt och behöver moderniseras", blev centrumstycket för en framgångsrik budgetbegäran för en riktad, inkrementell moderniseringsinsats fokuserad specifikt på det klustret snarare än en mycket dyrare fullständig systemersättning.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på hotspot-analys är riktad, evidensbaserad investering: båda exemplen ovan visar ett fall där formell analys omdirigerade omstruktureringsuppmärksamhet bort från där informellt klagomål hade fokuserat den och mot där datan faktiskt visade att problemet bodde, vilket producerade en mätbart bättre avkastning än en oriktad eller intuitionsdriven investering skulle ha gjort.

Den totala ägandekostnaden är låg, eftersom churn-data kommer direkt från befintlig versionskontrollhistorik och komplexitetsdata vanligtvis redan är tillgänglig från statiska analysverktyg (kapitel 4.4); den huvudsakliga investeringen är den periodiska analysinsatsen och den mänskliga omdömestiden att tolka resultat och besluta vilken handling varje identifierad hotspot motiverar.

## Antimönster och fallgropar

- **Att använda churn ensam utan komplexitet:** en svag signal på egen hand som kan flagga hälsosam, aktivt utvecklad kod som en falsk positiv.
- **Att behandla en hotspot-rangordning som en automatisk handlingslista utan mänskligt omdöme:** missar den väsentlig-kontra-oavsiktlig-distinktionen som avgör rätt respons.
- **Att prioritera omstrukturering baserat på det högljuddaste klagomålet snarare än bevis:** feldirigerar ofta insats bort från där datan faktiskt visar att problemet bor.
- **Att aldrig korsreferensera hotspots mot incident- eller defektdata:** missar valideringssteget som stärker fallet för att agera på analysen.
- **Att köra analysen en gång och aldrig upprepa den:** missar om åtgärdsinsats faktiskt fungerar över tid.
- **Att ignorera en ihållande flaggad hotspot utan att undersöka varför åtgärd inte har fastnat:** slösar det diagnostiska värdet av upprepad analys.

## Mognadsmodell

- **Nivå 1, Initiera:** Omstruktureringsprioriteringar sätts av intuition eller klagomålsvolym, utan att churn- eller komplexitetsdata informerar beslutet.
- **Nivå 2, Utveckla:** Vissa team kontrollerar informellt churn- eller komplexitetsdata, men det finns ingen konsekvent, organisationsövergripande hotspot-analyspraxis.
- **Nivå 3, Standardisera:** Hotspot-analys som kombinerar churn och komplexitet körs regelbundet och informerar konsekvent omstruktureringsprioritering organisationsövergripande.
- **Nivå 4, Hantera:** Hotspots korsrefereras mot incident- och defektdata för att validera analysen, och trend över successiva cykler spåras aktivt.
- **Nivå 5, Orkestrera:** Organisationen kan peka på specifika, mätbara defektfrekvens- eller leveransförbättringar från hotspot-informerad omstruktureringsinvestering, och analysen är en rutinmässig, betrodd insats till ingenjörsinvesteringsbeslut.

## Diskussionsidéer

1. Hur skulle vår topp-hotspotlista se ut om vi körde den här analysen idag?
2. Skulle den listan matcha, eller motsäga, vårt teams nuvarande informella känsla för våra värsta problemområden?
3. Har vi datan för att korsreferensera hotspots mot faktiska incidenter?
4. Har ett känt problemområde kvarstått trots tidigare försök att fixa det, och varför?
5. Vad skulle det kosta oss att lämna vår nuvarande topp-hotspot oadresserad för ytterligare ett år?

## Viktiga slutsatser

- **Churn kombinerad med komplexitet** identifierar genuina hotspots mycket mer pålitligt än endera mätetalet ensamt.
- Hotspot-analys kräver **ingen manuell undersökning**; den är automatiskt beräkningsbar från befintlig versionskontroll- och statisk analysdata.
- Behandla en hotspot-rangordning som **bevis för prioritering**, inte en automatisk dom; mänskligt omdöme krävs fortfarande.
- **Korsreferensera hotspots mot incident- och defektdata** för att validera analysen och stärka fallet för att agera på den.
- Spåra hotspots **över successiva analyscykler** för att bekräfta att åtgärd faktiskt fungerar, inte bara en gång som ett ögonblicksfoto.

## Källor och vidare läsning

- *Your Code as a Crime Scene*, av Adam Tornhill (grundtexten om hotspot-analys som kombinerar churn och komplexitet från versionskontrolldata).
- *Software Design X-Rays*, av Adam Tornhill (ytterligare tekniker för beteendemässig kodanalys med versionskontrollhistorik).
- Nagappan, Nachiappan, och Thomas Ball, "Use of Relative Code Churn Measures to Predict System Defect Density," *ICSE* (2005): empirisk forskning om förhållandet mellan churn och defekttäthet.
- *Refactoring: Improving the Design of Existing Code*, av Martin Fowler (tekniker för att adressera oavsiktlig komplexitet när identifierad).
