# 4.0 Introduktion till del 4: Kod- och kvalitetsmätetal

Del 2 och 3 mätte hur arbete rör sig och hur människorna som producerar det mår. Den här delen vänder sig till själva artefakten: koden, och vad ett mätetal kan och inte kan berätta om dess kvalitet. Kodkvalitetsmätetal har den längsta historien av någon mätetalsfamilj i den här boken, cyklomatisk komplexitet går tillbaka till 1976, och den längsta historien av missbruk att matcha. Den här delen behandlar den historien på allvar: varje ämne namnger en genuint användbar signal vid sidan av det specifika, väldokumenterade sättet den signalen manipuleras när den blir ett mål.

Den röda tråden som förbinder de här sex ämnena är att inget enskilt kodmätetal fångar kvalitet på egen hand, och flera av de mest populära aktivt vilseleder när de jagas isolerat. En hög testtäckningsprocent kan samexistera med tester som inte verifierar något meningsfullt. En låg komplexitetspoäng kan samexistera med kod som är tekniskt enkel men konceptuellt osammanhängande. Den här delens ämnen parar var och en sitt rubrikmätetal med den kompletterande kontrollen som fångar dess specifika blinda fläck: komplexitet med underhållbarhetskontext, täckning med mutationstestning, churn med hotspot-analys, statisk analys med mänskligt omdöme, och teknisk skuld med prioriterad åtgärd snarare än en ständigt växande, oälskad backlogg.

För stora team är kod- och kvalitetsmätetal vad som gör det möjligt att hantera en kodbas för stor för en enda person att hålla i huvudet. Ett femmannateam kan förlita sig på delad tyst kunskap om vilka delar av systemet som är ömtåliga; en femhundraingenjörs organisation spridd över dussintals tjänster behöver instrumenterade signaler för att hitta den ömtåligheten systematiskt. Stora företag och myndigheter, som ofta bär kodbaser mätta i decennier snarare än år, beror på den här delens mätetal för att prioritera var begränsad underhållsinvestering kommer göra mest nytta.

## Ämnen i denna del

- **4.1 Kodkomplexitetsmätetal:** Cyklomatisk komplexitet och dess släktingar, vad de faktiskt förutsäger, och deras väldokumenterade manipulationsrisk.
- **4.2 Testtäckning och testeffektivitet:** Varför en täckningsprocent ensam berättar mindre än den verkar, och hur mutationstestning sluter gapet.
- **4.3 Kodchurn och hotspot-analys:** Att hitta den specifika, lilla andelen av en kodbas ansvarig för en oproportionerlig andel av defekter och underhållskostnad.
- **4.4 Statisk analys och kodlukt-mätetal:** Automatiserade kodkvalitetssignaler, deras verkliga värde, och deras begränsningar mot mänskligt omdöme.
- **4.5 Mätning av teknisk skuld:** Att göra en osynlig, informellt diskuterad skuld till en synlig, prioriterad, hanterbar portfölj.
- **4.6 Dokumentations- och kunskapsmätetal:** Att mäta om dokumentation faktiskt hjälper, inte bara om den existerar.

## Hur dessa ämnen hänger ihop

De här sex ämnena bygger från den minsta kodenheten och utåt. Ämne 4.1 börjar på nivån av en enskild funktion eller metod; ämne 4.2 frågar om tester faktiskt verifierar den enhetens beteende; ämne 4.3 zoomar ut för att hitta vilka filer och moduler över hela kodbasen som förtjänar uppmärksamhet först; ämne 4.4 lägger till det automatiserade verktygslagret som skannar över allt det kontinuerligt; ämne 4.5 vänder de ackumulerade fynden från alla fyra till en hanterad, prioriterad backlogg snarare än en diffus, oadresserad oro; och ämne 4.6 avslutar delen genom att mäta om kunskapen som behövs för att underhålla allt det här säkert faktiskt är dokumenterad och sökbar.

Den här delen kopplar direkt tillbaka till del 2:s stabilitetsmätetal: ändringsfelfrekvens (ämne 2.10) är, till stor del, en nedströmskonsekvens av kodkvaliteten den här delen mäter uppströms. Den kopplar också framåt till del 5:s produktmätetal, eftersom läckta defekter (ämne 5.1) ofta är spårbara till exakt de komplexitetshotspots och täckningsgap den här delen är byggd att synliggöra innan de når produktion alls.
