# 9.1 Glossarium

Definitioner av termer och akronymer använda genom boken. Varje post namnger kapitlet där termen introduceras på djupet.

**Aktivitetsmätetal.** Ett antal av ingenjörsrörelse (commits, pull requests, rader kod) som mäter volym, inte värde. Se kapitel 3.4.

**Andel komplett och korrekt (%K/K).** Procentandelen enheter ett nedströms team kan behandla utan att behöva omarbete, från klassisk Lean-värdeflödeskartläggning. Se kapitel 2.8.

**Bussfaktor.** Antalet personer som skulle behöva bli otillgängliga innan ett system eller en kunskapsbit blir ohanterbar. En bussfaktor på ett är en allvarlig risk. Se kapitel 3.5.

**CVSS (Common Vulnerability Scoring System).** En standardiserad skala för att poängsätta allvarlighetsgraden av en säkerhetssårbarhet. Se kapitel 6.4.

**Cykeltid.** Den interna nedbrytningen av ledtid i stadier: kodning, granskning, testning, och driftsättning. Se kapitel 2.6.

**Cyklomatisk komplexitet.** Ett antal av de oberoende vägarna genom en kodbits kontrollflöde, introducerad av Thomas J. McCabe 1976. Se kapitel 4.1.

**DevEx (utvecklarupplevelse).** Den bredare, besläktade inramningen till SPACE, organiserad runt återkopplingsslingor, kognitiv belastning, och flödestillstånd. Se kapitel 3.7.

**DORA-mätetal.** Fyra mätetal från DevOps Research and Assessment-programmet: driftsättningsfrekvens, ledtid för ändringar, ändringsfelfrekvens, och misslyckad-driftsättning-återställningstid. Se kapitel 2.10.

**Driftsättningsfrekvens.** Hur ofta ett team framgångsrikt levererar till produktion. Ett av de fyra DORA-mätetalen. Se kapitel 2.10.

**Enhetsekonomi.** Kostnad uttryckt per meningsfull enhet av levererat värde (per kund, per transaktion), snarare än som en opak total. Se kapitel 5.4.

**Felbudget.** Den tillåtna bristen mellan ett tjänstnivåmål och 100 % tillförlitlighet, behandlad som en spenderbar resurs. Se kapitel 6.1.

**FinOps.** Disciplinen att föra finansiell ansvarsskyldighet till varierande molninfrastrukturutgift. Se kapitel 5.4.

**Flow Framework.** En ledningsmodell, skapad av Mik Kersten, som behandlar mjukvaruleverans som ett värdeflöde och mäter det med fyra flödesobjekttyper och fem flödesmätetal. Se kapitel 2.1.

**Flödesbelastning.** Det totala antalet flödesobjekt för närvarande aktiva eller väntande i ett värdeflöde, Flow Frameworks namn för pågående arbete. Se kapitel 2.4.

**Flödeseffektivitet.** Förhållandet mellan aktiv arbetstid och total förfluten tid för en arbetsbit som rör sig genom en leveranspipeline. Se kapitel 2.5.

**Flödesfördelning.** Proportionen av slutförda flödesobjekt som hör till varje flödesobjekttyp under en given period. Se kapitel 2.3.

**Flödeshastighet.** Antalet flödesobjekt slutförda över en given period, Flow Frameworks mått på genomströmning. Se kapitel 2.3.

**Flödesobjekt.** Flow Frameworks enhet av arbete: en funktion, defekt, risk, eller skuldpost, klassificerad vid intag. Se kapitel 2.2.

**Flödestid.** Den totala förflutna tiden från ett flödesobjekts ingång i värdeflödet till dess leverans, spännande hela värdeflödet snarare än bara ingenjörskonst. Se kapitel 2.4.

**Goodharts lag.** Principen att när ett mått blir ett mål slutar det vara ett gott mått. Den här bokens centrala, styrande idé. Se kapitel 1.2.

**Hotspot.** En fil eller modul som är både frekvent ändrad (hög churn) och högt komplex, identifierad genom hotspot-analys. Se kapitel 4.3.

**Könteori.** Den matematiska studien av väntelinjer, tillämpad på leveranspipelines för att förklara hur pågående arbete, ankomsttakt, och utnyttjande driver väntetid. Se kapitel 2.7.

**Ledtid för ändringar.** Tiden från en kodändrings första commit till dess framgångsrika driftsättning i produktion. Ett av de fyra DORA-mätetalen. Se kapitel 2.10.

**Littles lag.** Beviset att det genomsnittliga antalet objekt i en stabil kö är lika med den genomsnittliga ankomsttakten multiplicerad med den genomsnittliga tiden ett objekt spenderar i systemet. Tillämpad på leverans, pågående arbete är lika med ankomsttakt gånger cykeltid. Se kapitel 2.7.

**Läckt defekt.** En defekt som når produktion och påverkar en verklig användare, som distinkt från en fångad i granskning eller testning. Se kapitel 5.1.

**Mutationstestning.** En teknik som medvetet introducerar små, artificiella fel i kod för att kontrollera om en testsvit faktiskt fångar dem, som ett komplement till täckning. Se kapitel 4.2.

**Mätetalsträd.** En struktur som kopplar ett toppnivå-utfallsmätetal ner genom dess drivare till de operativa mätetalen enskilda team äger. Se kapitel 1.3.

**MTTA (genomsnittlig tid till bekräftelse).** Tiden från en incidents notifiering till någon tar ägarskap för att svara. Se kapitel 6.2.

**MTTD (genomsnittlig tid till upptäckt).** Tiden från en incidents faktiska start till någon märker att den inträffade. Se kapitel 6.2.

**MTTR (genomsnittlig tid till återställning / genomsnittlig tid till lösning).** Tiden att fullt återställa tjänst efter ett fel. Använd både för driftsättningsorsakade fel (kapitel 2.10) och allmänna incidenter (kapitel 6.2).

**Nordstjärnemätetal.** Det enskilda måttet som bäst fångar kärnvärdet en organisation levererar, sittande i toppen av ett mätetalsträd. Se kapitel 1.3.

**Processtid (PT).** Den faktiska handgripliga tiden spenderad på att arbeta på en enskild enhet, distinkt från tid spenderad väntande, från klassisk Lean-värdeflödeskartläggning. Se kapitel 2.8.

**Pågående arbete (PÅA).** Antalet objekt aktivt arbetade på vid något givet tillfälle över ett team eller system. Se kapitel 2.5.

**ROI (avkastning på investering).** Den finansiella avkastningen av ett initiativ relativt dess kostnad, byggd här från dokumenterat kostnads- och utfallsbevis snarare än antagande. Se kapitel 5.5.

**Rullande genomströmningsutbyte.** Andel-komplett-och-korrekt-siffrorna för varje stadium i ett värdeflöde multiplicerade tillsammans, avslöjande hur omarbete ackumuleras över en flerstadiepipeline. Se kapitel 2.8.

**Skyddsmätetal.** Ett parat motmätetal som inte får försämras medan ett incitamentsbelagt mätetal förbättras, designat för att fånga manipulation. Se kapitel 1.2.

**SLI (tjänstnivåindikator).** En direkt uppmätt signal om en tjänsts hälsa, som latens eller felfrekvens. Se kapitel 6.1.

**SLO (tjänstnivåmål).** Målintervallet för en tjänstnivåindikator. Se kapitel 6.1.

**SPACE-ramverket.** Ett femdimensionellt ramverk för utvecklarproduktivitet: Nöjdhet och välbefinnande, Prestation, Aktivitet, Kommunikation och samarbete, och Effektivitet och flöde. Se kapitel 3.1.

**SRE (tillförlitlighetsingenjörskonst).** Disciplinen, pionjärad på Google, av att tillämpa mjukvaruteknikmetoder på drift och tillförlitlighet. Se kapitel 6.1.

**Styrdiagram.** Ett diagram som visar ett mätetals normala variationsintervall över tid, använt för att skilja en genuin förskjutning från vanligt brus. Se kapitel 1.6.

**Takttid.** Den maximala acceptabla tiden att slutföra en arbetsenhet för att rent matcha kundbehov, från klassisk Lean-värdeflödeskartläggning. Se kapitel 2.8.

**TCO (total ägandekostnad).** Den fulla kostnaden av ett initiativ eller system över dess livstid, inklusive löpande underhåll och infrastruktur, inte bara förhandskostnad. Se kapitel 5.5.

**Teknisk skuld.** Den ackumulerade kostnaden av tidigare genvägar i en kodbas, en metafor för en hanterbar avvägning, inte en skamlig hemlighet. Se kapitel 4.5.

**Utfallstelemetri.** Kontinuerlig, instrumenterad mätning av verkliga utfall snarare än aktivitet eller output. Se kapitel 7.4.

**Utnyttjande.** Proportionen av en resurs tillgängliga kapacitet som är upptagen, beräknad som ankomsttakt dividerad med servicetakt. Väntetid växer kraftigt, inte gradvis, när utnyttjande närmar sig full kapacitet. Se kapitel 2.7.

**Vanitetsmätetal.** Ett mätetal som tillförlitligt stiger, ser imponerande ut, och ändrar inget beslut. Se kapitel 1.1.

**Värdeflöde.** Den ände-till-ände-sekvens av aktiviteter som vänder en idé till värde en kund mottar, Flow Frameworks mätenhet. Se kapitel 2.1.

**Ändringsfelfrekvens.** Procentandelen driftsättningar som orsakar ett produktionsfel som kräver åtgärd. Ett av de fyra DORA-mätetalen. Se kapitel 2.10.
