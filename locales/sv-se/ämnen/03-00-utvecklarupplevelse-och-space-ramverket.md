# 3.0 Introduktion till del 3: Utvecklarupplevelse och SPACE-ramverket

Del 2 mätte leverans från utsidan: hur snabbt och hur säkert kod rör sig genom en pipeline. Den här delen mäter upplevelsen hos människorna som producerar den koden, och den existerar eftersom en leveransmätetalsuppsättning ensam kan se utmärkt ut medan människorna bakom den bränner ut sig, dränks i avbrott, eller tyst kopplar av. En organisation som bara bevakar DORA-mätetal kan förbättra dem i ett år eller två genom att pressa ett team hårdare, ända tills attrition, kvalitetskollaps, eller utbrändhet raderar vinsten på en gång. Den här delen är motvikten.

Centralstycket är **[SPACE-ramverket](https://queue.acm.org/detail.cfm?id=3454124)**, utvecklat av forskare från Microsoft, GitHub, och University of Victoria specifikt som en korrigering till industrins vana att mäta utvecklarproduktivitet genom en enda, lätt manipulerad proxy som rader kod eller commit-antal. SPACE sträcker sig över fem dimensioner: nöjdhet och välbefinnande, prestation, aktivitet, kommunikation och samarbete, och effektivitet och flöde. Ramverkets centrala disciplin, och anledningen till att den här delen behandlar det med samma rigör del 2 tillämpar på sina egna flödesmätetal, är att ingen enskild dimension i sig är tillförlitlig; värdet kommer specifikt från att hålla alla fem i sikte tillsammans, så att ett team inte kan se bra ut på en axel genom att tyst skada en annan.

För stora team besvarar mätetal för utvecklarupplevelse en fråga DORA inte kan: är den här leveransprestationen hållbar, och behåller organisationen människorna som producerar den. Stora företag som ignorerar den här delen tenderar att upptäcka kostnaden genom attritionsdata och avgångsintervjuer, väl efter att skadan är gjord; myndigheter, som ofta driver under offentlig sektors lönebegränsningar som begränsar deras förmåga att konkurrera rent på kompensation, har särskilt starka anledningar att behandla utvecklarupplevelse som en förstklassig, aktivt hanterad angelägenhet snarare än en eftertanke.

## Kapitel i denna del

- **3.1 SPACE-ramverket:** de fem dimensionerna tillsammans, varför ingen enskild är tillförlitlig ensam, och hur man bygger en genuint balanserad mätetalsuppsättning från dem.
- **3.2 Mätetal för nöjdhet och välbefinnande:** att mäta tillfredsställelse, frustration, och utbrändhetsrisk, dimensionen ingen systemtelemetri kan observera direkt.
- **3.3 Prestationsmätetal och utfallsrepresentanter:** dimensionen mest lätt förväxlad med aktivitet, och hur man istället mäter genuint utfallsbidrag.
- **3.4 Aktivitetsmätetal och deras begränsningar:** commit-antal, rader kod, och varför det här är den farligaste dimensionen att övervikta.
- **3.5 Mätetal för kommunikation och samarbete:** hur information faktiskt flödar mellan människor och team, och hur ett sunt mönster ser ut.
- **3.6 Effektivitet och flöde: djuparbete och avbrott:** att skydda den ostörda tiden verkligt ingenjörsarbete kräver, och mäta friktionen som eroderar den.
- **3.7 Utvecklarupplevelseenkäter och DevEx-mätetal:** hur man kör en enkät som producerar tillförlitlig signal snarare än en popularitetstävling, och hur man kombinerar den med objektiv data.

## Hur dessa kapitel hänger ihop

Kapitel 3.1 introducerar alla fem SPACE-dimensioner tillsammans, och kapitel 3.2 till 3.6 tar sedan varje dimension i tur på verkligt djup, i den ordning SPACE-forskarna presenterar dem. Kapitel 3.7 avslutar delen med den praktiska mekaniken för enkätdesign, eftersom nöjdhet, prestation, och samarbete alla delvis förlitar sig på självrapporterad data (kapitel 1.5:s distinktion mellan instrumentering och självrapportering är direkt relevant genom hela den här delen) och en dåligt designad enkät undergräver varje ett av de föregående kapitlen.

Den här delens centrala disciplin, balans över dimensioner snarare än styrka i en, är den här bokens tydligaste arbetsexempel på kapitel 1.3:s resultat-före-produktion-princip tillämpad på människor snarare än på en leveranspipeline. Aktivitet (kapitel 3.4) är SPACE-dimensionen mest analog till ett rent outputmätetal, och den här delen behandlar den därefter: användbar som en insats bland fem, farlig som en fristående signal. Läst vid sidan av del 2 kompletterar den här delen bilden DORA ensam inte kan ge: inte bara om mjukvara levereras snabbt och säkert, utan om människorna som levererar den kan upprätthålla det tempot.
