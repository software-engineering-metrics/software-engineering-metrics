# 9.2 Přehled definic a vzorců metrik

Každý vzorec z knihy shromážděný na jednom místě. Každé heslo uvádí téma s
úplným výkladem, včetně rizika manipulace a pojistky. Berte to jako rychlé
vyhledávání, nikoli náhradu samotného tématu.

## Metriky toku (část 2)

| Metrika | Vzorec | Téma |
| --- | --- | --- |
| Rychlost toku | Počet položek toku dokončených za jednotku času | 2.3 |
| Rozložení toku | (Dokončené položky jednoho typu položky toku) / (Celkem dokončených položek) x 100 % | 2.3 |
| Doba toku | Doba od vstupu položky toku do hodnotového proudu po její dodání | 2.4 |
| Zatížení toku | Počet položek toku, které jsou v hodnotovém proudu právě aktivní nebo čekají | 2.4 |
| Littleův zákon | Zatížení toku (rozpracovaná práce) = Rychlost příchodu x Doba toku (cycle time) | 2.4, 2.7 |
| Efektivita toku | Čas aktivní práce / Celkový uplynulý čas x 100 % | 2.5 |
| Cycle time | Součet délek fází: kódování + převzetí + revize + test + nasazení | 2.6 |
| Vytížení | Rychlost příchodu / Rychlost obsluhy | 2.7 |
| Podíl úplných a správných vstupů (%C/A) | (Jednotky použitelné navazujícím krokem bez přepracování) / (Celkem jednotek) x 100 % | 2.8 |
| Kumulovaný výtěžek | %C/A fáze 1 x %C/A fáze 2 x ... x %C/A fáze N | 2.8 |
| Takt | Dostupný pracovní čas / Poptávka zákazníků za dané období | 2.8 |
| Čas do první revize | Doba od otevření pull requestu po první věcnou reakci recenzenta | 2.9 |
| Frekvence nasazení | Počet úspěšných nasazení do produkce za jednotku času | 2.10 |
| Průběžná doba změn | Doba od prvního commitu po úspěšné nasazení do produkce (uvádějte medián a 90. percentil) | 2.10 |
| Míra selhání změn | (Nasazení způsobující selhání) / (Celkem nasazení) x 100 % | 2.10 |
| Doba obnovy po selhaném nasazení | Doba od detekce selhání po skutečnou obnovu služby | 2.10 |

## Zkušenost vývojářů (část 3)

| Metrika | Vzorec | Téma |
| --- | --- | --- |
| Čas soustředění | Počet a délka nepřerušených bloků o délce dvě a více hodin za týden, z dat kalendáře | 3.6 |
| Míra odpovědí | (Přijaté odpovědi průzkumu) / (Odeslané pozvánky k průzkumu) x 100 % | 3.7 |

## Kód a kvalita (část 4)

| Metrika | Vzorec | Téma |
| --- | --- | --- |
| Cyklomatická složitost | Nezávislé cesty řídicím tokem (hrany − uzly + 2, podle McCabea) | 4.1 |
| Pokrytí testy | (Řádky/větve provedené testy) / (Celkem řádků/větví) x 100 % | 4.2 |
| Míra zabitých mutantů | (Mutanti zabití sadou testů) / (Celkem zavedených mutantů) x 100 % | 4.2 |
| Změnovost kódu | Přidané + upravené + smazané řádky na soubor za časové okno | 4.3 |
| Skóre hotspotu | Změnovost x Složitost, řazeno podle souboru | 4.3 |
| Průběžné náklady dluhu | Odhadované průběžné náklady neopravení položky (pomalejší související práce, zvýšené riziko vad) | 4.5 |

## Produkt a obchod (část 5)

| Metrika | Vzorec | Téma |
| --- | --- | --- |
| Míra uniklých vad | (Uniklé vady vážené závažností) / (Jednotka dodávky nebo času) | 5.1 |
| Počáteční přijetí | (Uživatelé, kteří funkci alespoň jednou vyzkoušeli) / (Cílové publikum) x 100 % | 5.2 |
| Udržené přijetí | (Uživatelé, kteří funkci stále používají po N týdnech) / (Uživatelé, kteří ji původně vyzkoušeli) x 100 % | 5.2 |
| Jednotkové náklady | Celkové náklady (lidé + infrastruktura + nástroje) / Smysluplná jednotka (zákazník, transakce) | 5.4 |
| ROI | (Celkový přínos − Celkové náklady vlastnictví) / Celkové náklady vlastnictví, uváděné jako rozpětí | 5.5 |

## Spolehlivost, provoz a bezpečnost (část 6)

| Metrika | Vzorec | Téma |
| --- | --- | --- |
| Rozpočet chyb | (1 − cíl SLO) x Časové okno (např. 0,1 % z 30 dnů ≈ 43 minut) | 6.1 |
| Rychlost čerpání rozpočtu chyb | Spotřebovaný rozpočet chyb / Přidělený rozpočet chyb, za dané okno | 6.1 |
| MTTD | Doba od začátku incidentu po detekci | 6.2 |
| MTTA | Doba od upozornění na incident po potvrzení | 6.2 |
| MTTR (incident) | Doba od potvrzení po skutečnou obnovu služby | 6.2 |
| Rozložení pohotovostních upozornění | Upozornění přijatá na jednotlivce za klouzavé okno (ne průměr týmu) | 6.3 |
| Doba nápravy zranitelnosti | Doba od objevení po skutečnou nápravu, sledovaná podle závažnosti | 6.4 |

## Poznámky k používání těchto vzorců

- **Vzorec rychlosti nebo výstupu vždy spárujte s jeho pojistkou** (téma
  1.2): míru selhání změn s frekvencí nasazení a průběžnou dobou; míru
  uniklých vad s rychlostí dodávky; čerpání rozpočtu chyb s aktivitou
  nasazení.
- **U vzorců založených na čase používejte mediány a percentily, ne průměry**
  (téma 1.6), pokud vzorec výslovně nevyžaduje průměr.
- **Každý vzorec potřebuje zdokumentovaný zdrojový systém a způsob sběru**
  (téma 1.5) vedle své matematické definice; dva týmy, které počítají stejný
  vzorec z různých zdrojů, nevytvoří srovnatelná čísla.
- **Vážení podle závažnosti není výslovně uvedeno v každém z výše uvedených
  vzorců**, ale platí všude, kde stojí „vážené závažností“; úplné schéma
  klasifikace najdete v příslušném tématu.
