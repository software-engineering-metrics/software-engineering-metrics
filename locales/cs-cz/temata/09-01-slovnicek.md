# 9.1 Slovníček

Definice pojmů a zkratek používaných v celé knize. Každé heslo uvádí téma, kde
je pojem zaveden do hloubky.

**Metrika aktivity (activity metric).** Počet inženýrských pohybů (commity,
pull requesty, řádky kódu), který měří objem, nikoli hodnotu. Viz téma 3.4.

**Bus factor.** Počet lidí, kteří by museli být nedostupní, než se systém nebo
část znalostí stane neudržovatelnou. Bus factor jedna je vážné riziko. Viz
téma 3.5.

**Míra selhání změn (change failure rate).** Procento nasazení, která
způsobí selhání v produkci vyžadující nápravu. Jedna ze čtyř metrik DORA. Viz
téma 2.10.

**Regulační diagram (control chart).** Graf ukazující běžný rozsah kolísání
metriky v čase, který slouží k odlišení skutečného posunu od běžného šumu. Viz
téma 1.6.

**Cycle time (doba cyklu).** Vnitřní rozpad průběžné doby na fáze: kódování,
revize, testování a nasazení. Viz téma 2.6.

**CVSS (Common Vulnerability Scoring System).** Standardizovaná stupnice pro
hodnocení závažnosti bezpečnostní zranitelnosti. Viz téma 6.4.

**Cyklomatická složitost.** Počet nezávislých cest řídicím tokem části kódu,
zavedený Thomasem J. McCabem v roce 1976. Viz téma 4.1.

**DevEx (zkušenost vývojářů, developer experience).** Širší, příbuzné
rámování k SPACE, uspořádané kolem zpětnovazebních smyček, kognitivní zátěže a
stavu plynulosti. Viz téma 3.7.

**Frekvence nasazení (deployment frequency).** Jak často tým úspěšně vydává do
produkce. Jedna ze čtyř metrik DORA. Viz téma 2.10.

**Metriky DORA.** Čtyři metriky z programu DevOps Research and Assessment:
frekvence nasazení, průběžná doba změn, míra selhání změn a doba obnovy po
selhaném nasazení. Viz téma 2.10.

**Rozpočet chyb (error budget).** Povolený rozdíl mezi cílem úrovně služby a
100% spolehlivostí, pojímaný jako zdroj, který se dá utrácet. Viz téma 6.1.

**Uniklá vada (escaped defect).** Vada, která se dostane do produkce a ovlivní
skutečného uživatele, na rozdíl od vady zachycené při revizi nebo testování.
Viz téma 5.1.

**FinOps.** Disciplína zavádění finanční odpovědnosti do proměnných výdajů na
cloudovou infrastrukturu. Viz téma 5.4.

**Rozložení toku (flow distribution).** Podíl dokončených položek toku
patřících ke každému typu položky toku v daném období. Viz téma 2.3.

**Efektivita toku (flow efficiency).** Poměr času aktivní práce k celkovému
uplynulému času u práce procházející dodávkovou pipeline. Viz téma 2.5.

**Flow Framework.** Řídicí model, který vytvořil Mik Kersten, jenž pojímá
dodávku softwaru jako hodnotový proud a měří ji čtyřmi typy položek toku a
pěti metrikami toku. Viz téma 2.1.

**Položka toku (flow item).** Jednotka práce ve Flow Framework: funkce, vada,
riziko nebo položka dluhu, klasifikovaná při příjmu. Viz téma 2.2.

**Zatížení toku (flow load).** Celkový počet položek toku, které jsou v
hodnotovém proudu právě aktivní nebo čekají, název rozpracované práce ve Flow
Framework. Viz téma 2.4.

**Doba toku (flow time).** Celkový uplynulý čas od vstupu položky toku do
hodnotového proudu po její dodání, zahrnující celý hodnotový proud, nejen
inženýrství. Viz téma 2.4.

**Rychlost toku (flow velocity).** Počet položek toku dokončených za dané
období, míra propustnosti ve Flow Framework. Viz téma 2.3.

**Goodhartův zákon.** Zásada, že když se míra stane cílem, přestává být dobrou
mírou. Ústřední, řídicí myšlenka této knihy. Viz téma 1.2.

**Pojistka (guardrail metric).** Spárovaná protiměrná metrika, která se nesmí
zhoršit, zatímco se zlepšuje metrika s pobídkou, navržená k zachycení
manipulace. Viz téma 1.2.

**Hotspot.** Soubor nebo modul, který se zároveň často mění (vysoká změnovost)
a je vysoce složitý, určený analýzou hotspotů. Viz téma 4.3.

**Průběžná doba změn (lead time for changes).** Doba od prvního commitu změny
kódu po její úspěšné nasazení do produkce. Jedna ze čtyř metrik DORA. Viz
téma 2.10.

**Littleův zákon.** Důkaz, že průměrný počet položek ve stabilní frontě se
rovná průměrné rychlosti příchodu vynásobené průměrnou dobou, kterou položka
stráví v systému. Při použití na dodávku se rozpracovaná práce rovná rychlosti
příchodu krát cycle time. Viz téma 2.7.

**Strom metrik (metric tree).** Struktura propojující metriku výsledku na
nejvyšší úrovni skrze její hnací síly s provozními metrikami, které vlastní
jednotlivé týmy. Viz téma 1.3.

**MTTA (střední doba potvrzení).** Doba od upozornění na incident do chvíle,
kdy někdo převezme odpovědnost za reakci. Viz téma 6.2.

**MTTD (střední doba detekce).** Doba od skutečného začátku incidentu do
chvíle, kdy si někdo všimne, že nastal. Viz téma 6.2.

**MTTR (střední doba obnovy / střední doba vyřešení).** Doba úplné obnovy
služby po selhání. Používá se jak pro selhání způsobená nasazením (téma 2.10),
tak pro obecné incidenty (téma 6.2).

**Mutační testování (mutation testing).** Technika, která záměrně vnáší do kódu
malé umělé chyby, aby ověřila, zda je sada testů skutečně zachytí, jako
doplněk pokrytí. Viz téma 4.2.

**Polárka (north-star metric).** Jediná míra, která nejlépe zachycuje hlavní
hodnotu, kterou organizace dodává, umístěná na vrcholu stromu metrik. Viz
téma 1.3.

**Telemetrie výsledků (outcome telemetry).** Nepřetržité, instrumentované
měření skutečných výsledků místo aktivity nebo výstupu. Viz téma 7.4.

**Podíl úplných a správných vstupů (%C/A).** Procento jednotek, které navazující
tým dokáže zpracovat bez nutnosti přepracování, z klasického mapování
hodnotového proudu podle Lean. Viz téma 2.8.

**Procesní čas (PT).** Skutečný čas praktické práce na jedné jednotce,
odlišný od času čekání, z klasického mapování hodnotového proudu podle Lean.
Viz téma 2.8.

**Teorie front (queueing theory).** Matematické studium čekacích front,
použité na dodávkové pipeline k vysvětlení, jak rozpracovaná práce, rychlost
příchodu a vytížení určují čekací čas. Viz téma 2.7.

**ROI (návratnost investic).** Finanční návratnost iniciativy vzhledem k jejím
nákladům, zde sestavená z dokumentovaných důkazů o nákladech a výsledcích,
nikoli z předpokladu. Viz téma 5.5.

**Kumulovaný výtěžek (rolled throughput yield).** Podíly úplných a správných
vstupů každé fáze hodnotového proudu vynásobené dohromady, odhalující, jak se
přepracování sčítá napříč vícefázovou pipeline. Viz téma 2.8.

**SLI (ukazatel úrovně služby).** Přímo měřený signál zdraví služby, například
latence nebo míra chyb. Viz téma 6.1.

**SLO (cíl úrovně služby).** Cílový rozsah ukazatele úrovně služby. Viz
téma 6.1.

**Rámec SPACE.** Pětirozměrný rámec produktivity vývojářů: spokojenost a
pohoda (Satisfaction and well-being), výkon (Performance), aktivita
(Activity), komunikace a spolupráce (Communication and collaboration) a
efektivita a plynulost (Efficiency and flow). Viz téma 3.1.

**SRE (site reliability engineering).** Disciplína, kterou prosadil Google,
spočívající v uplatňování přístupů softwarového inženýrství na provoz a
spolehlivost. Viz téma 6.1.

**Takt (takt time).** Maximální přijatelná doba dokončení jednotky práce, aby
čistě odpovídala poptávce zákazníků, z klasického mapování hodnotového proudu
podle Lean. Viz téma 2.8.

**Technický dluh.** Nahromaděné náklady minulých zkratek v kódové základně,
metafora pro zvládnutelný kompromis, nikoli ostudné tajemství. Viz téma 4.5.

**TCO (celkové náklady vlastnictví).** Plné náklady iniciativy nebo systému za
celou jeho životnost, včetně průběžné údržby a infrastruktury, nejen úvodních
nákladů. Viz téma 5.5.

**Jednotková ekonomika (unit economics).** Náklady vyjádřené na smysluplnou
jednotku dodané hodnoty (na zákazníka, na transakci) místo neprůhledného
součtu. Viz téma 5.4.

**Vytížení (utilization).** Podíl dostupné kapacity zdroje, který je zaneprázdněn,
vypočtený jako rychlost příchodu dělená rychlostí obsluhy. Čekací čas roste
prudce, nikoli postupně, jak se vytížení blíží plné kapacitě. Viz téma 2.7.

**Hodnotový proud (value stream).** Úplná posloupnost činností, která mění
nápad v hodnotu, již zákazník obdrží, jednotka měření ve Flow Framework. Viz
téma 2.1.

**Metrika pro parádu (vanity metric).** Metrika, která spolehlivě roste, vypadá
působivě a nemění žádné rozhodnutí. Viz téma 1.1.

**Rozpracovaná práce (WIP).** Počet položek, na nichž se v jednu chvíli
aktivně pracuje napříč týmem nebo systémem. Viz téma 2.5.
