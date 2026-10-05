# 3.4 Aktivitetsmätetal och deras begränsningar

## Översikt och motivation

**Aktivitet**, A:et i SPACE (ämne 3.1), räknar volymen av ingenjörsarbete observerbart från systemtelemetri: commits, pull requests öppnade, rader kod ändrade, kodgranskningskommentarer lämnade. Det är den enklaste SPACE-dimensionen att mäta, eftersom varje ett av dessa events redan loggas automatiskt av verktyg ingenjörsteam använder dagligen, och den mätlätthet är exakt vad som gör den här dimensionen den farligaste att övervikta. Aktivitet är en verklig, legitim signal använd noggrant. Använd som en fristående produktivitetsrepresentant är det den enskilt mest manipulerade, mest missvisande mätetalsfamiljen i hela historien av [mjukvarutekniks](https://en.wikipedia.org/wiki/Software_engineering) mätning.

Kärnproblemet är att aktivitet mäter rörelse, inte värde. Ett commit-antal skiljer inte mellan en commit som löste ett svårt problem elegant och en commit som delade upp en meningsfull ändring i fem för att se mer produktiv ut (ämne 1.2:s substitutionsmanipulation, tillämpad direkt på den här mätetalsfamiljen). Rader kod ändrade belönar ordrikedom över den mycket mer värdefulla förmågan att radera onödig kod. En ingenjör som spenderar en hel dag i djup, ostörd tanke innan de skriver tio eleganta, väl testade rader ser mindre "aktiv" ut enligt dessa mätetal än en som committar ytliga, ogranskade ändringar var tjugo minuter, även om den förste mycket ofta producerar betydligt mer verkligt värde.

För stora team är frestelsen att använda aktivitetsmätetal för individuell utvärdering konstant och väldokumenterad, eftersom aktivitet är lätt att tillskriva en specifik person och lätt att beräkna automatiskt, till skillnad från de svårare, mer ärliga signalerna i de andra SPACE-dimensionerna. Det här ämnet existerar specifikt för att namnge den frestelsen och ge team språk och bevis för att motstå den, eftersom i det ögonblick en organisation börjar individuellt rangordna ingenjörer efter commit-antal eller rader kod, är skadan på samarbete, kodkvalitet, och moral väldokumenterad och svår att vända.

## Nyckelprinciper

- **Aktivitet mäter rörelse, inte värde.** Det är en legitim kontextuell signal, aldrig en fristående produktivitetsrepresentant.
- **Det här är den enskilt mest historiskt missbrukade mätetalsfamiljen i mjukvaruteknikmätning.** Behandla den historien som en varning, inte en slump.
- **Individuell aktivitetsrangordning är nästan alltid skadlig.** Den skadar samarbete, belönar synligt upptagandearbete, och inbjuder manipulation nästan omedelbart.
- **Aktivitetsdata är mest användbar i aggregat, som kontext för andra dimensioner,** inte som en oberoende signal om en enskild person eller team.
- **Djupt, värdefullt arbete ser ofta tyst ut på en aktivitetsinstrumentpanel.** Mätetalsfamiljen är strukturellt partisk mot exakt den typ av tänkande som producerar de bästa ingenjörsutfallen.

## Rekommendationer

### Rangordna eller utvärdera aldrig individer efter rå aktivitetsantal

Det här är den enskilt svåraste, viktigaste regeln i det här ämnet. Commit-antal, rader kod, och pull-request-antal borde aldrig dyka upp i en individuell prestationsgranskning, en jämförande rangordning, eller något sammanhang där en ingenjörs kompensation, ställning, eller rykte beror på talet. Det här följer direkt ämne 1.2:s incitamentsexponeringsprincip: i det ögonblick aktivitet blir ett incitamentsbelagt individuellt mätetal följer manipulation nästan omedelbart, och det resulterande beteendet, att stoppa upp commits, dela ändringar trivialt, undvika djupt, oglamoröst arbete som producerar få synliga events, skadar organisationen aktivt.

### Använd aktivitetsdata i aggregat, som kontext, inte som en dom

Aktivitetsdata blir genuint användbar när aggregerad på teamnivå och läst vid sidan av de andra SPACE-dimensionerna: en skarp nedgång i teamnivå-commit-aktivitet som sammanfaller med en höjning i nöjdhet kan indikera att teamet äntligen fick andningsrum att tänka djupt och betala ner teknisk skuld, ett positivt mönster, inte ett negativt. Läst isolerat ser samma nedgång oroande ut. Kontext från de andra dimensionerna är vad som gör aktivitetsdata tolkningsbar snarare än missvisande.

### Föredra kvalitetsnära aktivitetssignaler över rå volym

Där aktivitetsdata är användbar alls, föredra signaler justerade för kvalitet över råa antal: pull-request-storlek relativt granskningsdjup (ämne 2.9), eller förhållandet mellan ny kod och borttagen kod, som kan avslöja om ett team ackumulerar komplexitet eller aktivt förenklar. De här justerade signalerna är fortfarande aktivitetsdimension-data men motstår den grövsta manipulation råa antal inbjuder.

### Bevaka specifikt efter substitutionsmanipulationsmönstret i aktivitetsdata

Det vanligaste sättet aktivitetsmätetal manipuleras är exakt ämne 1.2:s substitutionsmönster: att dela upp genuint meningsfullt arbete i många små, triviala events för att blåsa upp ett antal. Om commit- eller pull-request-frekvens stiger medan den underliggande komplexiteten eller storleken av ändringar faller kraftigt, undersök innan ni krediterar en verklig produktivitetsförbättring, med samma diagnostiska disciplin ämne 2.10 rekommenderar för driftsättningsfrekvens.

### Namnge och motverka aktivitetsteater explicit

**Aktivitetsteater** är arbete utfört, medvetet eller inte, primärt eftersom det är synligt och räkningsbart snarare än eftersom det är värdefullt: frekventa små commits, påfallande sent-på-natten-aktivitet, eller synlig upptagenhet i delade kanaler. Att namnge det här mönstret explicit för ert team, och vara transparent att ledningen inte använder rå aktivitet för att bedöma bidrag, tar bort mycket av incitamentet för det att uppstå i första hand.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Individuell aktivitetsrangordning | Enkel, lätt att beräkna, känns direkt handlingsbar | Manipuleras nästan omedelbart; skadar samarbete och moral; mäter fel sak |
| Ingen aktivitetsmätning alls | Undviker missbruksrisken helt | Förlorar genuint användbar kontextuell signal för teamnivå-mönsterupptäckt |
| Teamnivå-aggregerad aktivitet, läst i kontext | Ger användbar kontext utan individuell risk | Kräver disciplin att tolka vid sidan av andra dimensioner snarare än isolerat |
| Kvalitetsjusterade aktivitetssignaler | Motstår den grövsta rå-antal-manipulationen | Mer komplext att beräkna och förklara än ett enkelt antal |

Den centrala spänningen är **användbarhet kontra missbruksrisk**. Aktivitetsdata, läst noggrant i aggregat och i kontext, är genuint användbar för att upptäcka mönster som ohållbart tempo eller ett team som tyst hittar utrymme att adressera teknisk skuld. Samma data, använd som ett individuellt resultatkort, är nästan enhetligt skadlig. Lös spänningen inte genom att undvika aktivitetsdata helt utan genom att bygga en hård organisatorisk regel mot individuell användning, medan ni tillåter och till och med uppmuntrar eftertänksam, kontextualiserad teamnivåanvändning.

## Frågor att diskutera med ditt team

1. **Har någon i vår organisation någonsin blivit utvärderad, formellt eller informellt, med ett rått aktivitetsantal som commits eller rader kod?** Fråga det här direkt och var beredd på ett obekvämt men nödvändigt svar; det här missbruket sker ofta tyst, genom en nonchalant kommentar från en chef, utan att någonsin bli officiell policy.

2. **Hur skulle aktivitetsteater se ut på vårt team specifikt, och har vi sett tecken på det?** Att namnge den specifika, troliga form det här mönstret kunde ta på ert eget team gör det mycket lättare att känna igen om det börjar hända.

3. **När vår teamnivå-aktivitetsdata rör sig, tolkar vi den vid sidan av de andra SPACE-dimensionerna, eller isolerat?** En nedgång i aktivitet läst isolerat ser oroande ut; samma nedgång läst vid sidan av en nöjdhets- eller prestationsförbättring kan se ut som ett genuint positivt mönster. Kontrollera er faktiska granskningspraxis mot den här distinktionen.

4. **Har vi någonsin sett en höjning i commit- eller pull-request-frekvens åtföljd av en krympande genomsnittlig ändringsstorlek, antydande trivial uppdelning snarare än genuin produktivitetsvinst?** Dra verklig data och kontrollera för det här specifika substitutionsmanipulationsmönstret.

5. **Hur pratar vi för närvarande om "vem bidrar mest" i vårt team, och lutar den konversationen implicit på aktivitetsdata även utan ett formellt mätetal?** Informell, omätt partiskhet mot synlig upptagenhet kan forma uppfattning och belöning även utan en explicit aktivitetsbaserad policy; synliggör det ärligt.

6. **Hur ser genuint värdefullt men tyst arbete, djupt tänkande, noggrann design, mentorskap, ut i vårt team, och hur säkerställer vi att det erkänns trots att det genererar lite synlig aktivitetsdata?** Den här frågan är den positiva motsvarigheten till de föregående: att namnge hur bra, tyst arbete ser ut hjälper att skydda det från att förbises till förmån för högljuddare, mer räkningsbart arbete.

## Sektorperspektiv

**Startup.** Med ett litet, tätt samarbetande team är aktivitetsdata vanligtvis synlig utan att behöva en instrumentpanel alls, och individuell-rangordning-risken det här ämnet varnar mot är mindre trolig helt enkelt eftersom alla redan vet vad alla andra jobbar med. Risken är istället en grundare som omedvetet gynnar synligt "upptaget" beteende när de fattar tidiga anställnings- eller andelsbeslut.

**Litet företag.** Aktivitetsdata från era befintliga verktyg är fine att kasta en blick på för en allmän känsla av teamgenomströmning, men motstå att använda den för att jämföra individuella bidragsgivare direkt; ett litet teams verkliga värde koncentreras ofta i ett par personer som gör tyst, högt inflytelserikt arbete som en commit-antal-vy systematiskt skulle undervärdera.

**Stort företag.** Det här är där individuell-rangordning-frestelsen är starkast och mest skadlig, eftersom aktivitetsdata är den enklaste signalen att dra för en prestationsgranskningsprocess som spänner tusentals ingenjörer, och trycket att hitta *någon* kvantifierbar insats är verkligt. Bygg en explicit, kommunicerad, upprätthållen policy mot individuell aktivitetsrangordning, och granska prestationsgranskningspraxis periodiskt för att bekräfta att policyn faktiskt följs i praktiken, inte bara uttalad.

**Myndighet.** Aktivitetsmätetal kan vara lockande att citera i en offentlig rapport som bevis på produktivitet ("tio tusen commits detta år"), men den här typen av rubrik är nästan meningslös och kan inbjuda exakt den fel granskningen när en kunnig granskare påpekar att rå aktivitet säger ingenting om utfall. Rapportera utfalls- och prestationsdata (ämne 3.3) istället, och undvik aktivitetsantal i all externt vänd kommunikation.

## Exempel

**Stort företag.** Ett mjukvarubolags ingenjörsledning hade, utan formell policy, börjat informellt referera individuell commit-frekvensdata i befordringsdiskussioner. En intern granskning, föranledd av ett orelaterat attritionsanalysprojekt, fann att ingenjörer som jobbade på företagets mest komplexa, högst-värde-system, krävande långa perioder av noggrant designarbete innan någon kod skrevs, hade systematiskt lägre commit-antal än ingenjörer på enklare, mer inkrementellt utvecklade system, och blev subtilt missgynnade i befordringskonversationer som resultat. Ledningen utfärdade en explicit, kommunicerad policy som förbjöd aktivitetsantal-referenser i prestations- och befordringsdiskussioner, och skiftade befordringsbevis mot flersignal-prestationsmetoden från ämne 3.3.

**Myndighet.** En digital tjänstmyndighet, under tryck att visa produktivitet för en lagstiftande tillsynskommitté, föreslog initialt att rapportera totala commits och rader kod skrivna över sitt ingenjörsprogram som bevis på levererat värde. En intern teknisk rådgivare motsatte sig, korrekt noterande att den här inramningen inbjöd exakt den fel granskningen, eftersom en tekniskt litterat kommittémedlem lätt kunde påpeka att rå kodvolym säger ingenting om huruvida koden fungerade eller spelade någon roll. Myndighetens reviderade rapport använde istället utfallsmätetal (ämne 5.3): minskning i medborgarrapporterade fel och ökning i framgångsrik självbetjäningsslutförande, som höll upp mycket bättre under kommitténs granskning än aktivitetstalen skulle ha gjort.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på att få aktivitetsmätetal rätt, använda dem kontextuellt snarare än som individuella resultatkort, är undviken skada: organisationer som individuellt rangordnar ingenjörer efter aktivitet ser tillförlitligt manipulationsbeteende, minskat samarbete (ingenjörer som skyddar sin egen synliga output snarare än att hjälpa en lagkamrat), och en systematisk partiskhet mot det djupa, högt inflytelserika arbetet som ofta producerar mest värde medan det genererar minst synlig aktivitet. Att vända den skadan, väl inrotad i en prestationsgranskningskultur, är genuint svårt och långsamt.

Den totala kostnaden för att undvika den här fällan är mestadels organisatorisk disciplin: en explicit policy, konsekvent upprätthållen, mot individuell aktivitetsrangordning, och ett åtagande att investera i den svårare, mer ärliga prestationsmätningen beskriven i ämne 3.3 istället. Den disciplinen kostar mindre än de felriktade befordringsbesluten, skadade samarbetet, och manipulationsbeteendet individuella aktivitetsmätetal tillförlitligt producerar över tid.

## Antimönster och fallgropar

- **Individuell rangordning efter commit-antal eller rader kod:** det enskilt mest skadliga, mest historiskt vanliga missbruket i hela den här boken.
- **Aktivitetsteater:** arbete utfört primärt för synlighet snarare än värde, ett helt förutsägbart svar på aktivitetsbaserad utvärdering.
- **Att tolka en teamnivå-aktivitetsnedgång isolerat, utan att kontrollera de andra SPACE-dimensionerna:** kan misstaga ett genuint positivt mönster för ett oroande.
- **Att citera råa aktivitetsantal i extern eller ledningsvänd kommunikation:** inbjuder exakt den fel granskningen och säger lite om faktiskt värde.
- **Att systematiskt undervärdera djupt, noggrant arbete som genererar få synliga events:** en strukturell partiskhet inbakad i hela den här mätetalsfamiljen.
- **Informell, opolicerad aktivitetspartiskhet som smyger sig in i befordrings- eller granskningskonversationer:** skadlig även utan ett officiellt mätetal bakom den.

## Mognadsmodell

- **Nivå 1, Initiera:** Aktivitetsmätetal används, formellt eller informellt, för att utvärdera eller rangordna individer, utan medvetenhet om risken.
- **Nivå 2, Utveckla:** Viss medvetenhet om risken existerar, men ingen explicit policy förhindrar aktivitetsdata från att informellt påverka granskningar eller befordringsdiskussioner.
- **Nivå 3, Standardisera:** En explicit, kommunicerad organisationsövergripande policy förbjuder individuell aktivitetsrangordning, och aktivitetsdata används bara i aggregerad, teamnivå-kontext.
- **Nivå 4, Hantera:** Prestationsgranskning- och befordringspraxis granskas periodiskt för att bekräfta att policyn följs i praktiken, och kvalitetsjusterade aktivitetssignaler ersätter råa antal där aktivitetsdata används alls.
- **Nivå 5, Orkestrera:** Organisationen har demonstrerbart skiftat utvärderingskultur bort från aktivitetsmätetal mot flersignal-prestationsmetoden i ämne 3.3, med synlig förbättring i samarbete och minskat manipulationsbeteende som bevis att skiftet fungerade.

## Diskussionsidéer

1. Har någon här någonsin känt sig utvärderad, även informellt, efter hur "upptagen" deras aktivitet såg ut?
2. Hur skulle aktivitetsteater se ut specifikt på vårt team?
3. Har vi en explicit, skriven policy mot individuell aktivitetsrangordning, och följs den faktiskt?
4. Vilket tyst, högvärdigt arbete i vårt team genererar för närvarande minst synlig aktivitetsdata?
5. Hur skulle vi omdesigna vårt prestationsgranskningsbevis för att ta bort aktivitetsantal helt?

## Viktiga slutsatser

- Aktivitet mäter **rörelse, inte värde**; det är den enskilt mest historiskt missbrukade mätetalsfamiljen i mjukvaruteknik.
- **Rangordna eller utvärdera aldrig individer** efter råa aktivitetsantal; det här är den svåraste och viktigaste regeln i det här ämnet.
- Använd aktivitetsdata **i aggregat, som kontext** för de andra SPACE-dimensionerna, aldrig som en fristående dom.
- Bevaka efter **aktivitetsteater** och **substitutionsmanipulationsmönstret** (ämne 1.2) specifikt inom den här mätetalsfamiljen.
- Djupt, högvärdigt arbete genererar ofta **minst synlig aktivitetsdata**; skydda det från att systematiskt undervärderas.

## Källor och vidare läsning

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, av Tom DeMarco och Timothy Lister (fallet mot att mäta ingenjörer efter synlig upptagenhet).
- *Deep Work: Rules for Focused Success in a Distracted World*, av Cal Newport (värdet av tyst, ostört arbete som aktivitetsmätetal systematiskt underräknar).
- *The Tyranny of Metrics*, av Jerry Z. Muller (mätetalsfixering och dess kostnader, direkt tillämpligt på aktivitetsbaserad utvärdering).
