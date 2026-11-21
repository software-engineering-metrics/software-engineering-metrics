# 2.0 Úvod do části 2: Metriky toku

Pokud je část 1 filozofií měření, část 2 je místem, kde se tato filozofie
setkává se samotným dodáváním: s metrikami, které popisují nejen to, jak rychle
a jak bezpečně tým přesouvá kód od nápadu k běžícímu systému, ale také jaký
druh hodnoty tímto potrubím vůbec proudí. Tato část je organizována kolem
**Flow Frameworku**, modelu, který vytvořil Mik Kersten ve své knize *Project to
Product* z roku 2018 a který pojímá dodávání softwaru jako hodnotový proud a dává
tomuto hodnotovému proudu společnou slovní zásobu: čtyři typy položek toku a
pět metrik toku, které spojují inženýrskou aktivitu s obchodní strategií tak,
jak to dokáže skutečně využít netechnická zainteresovaná strana.

Tato volba organizačního rámce je záměrná. Metriky DORA, frekvence nasazení, lead
time, míra selhání změn a doba obnovy, jsou skutečně výzkumem ověřené a zůstávají
jedním z nejlépe podložených dodacích rámců, které jsou k dispozici, ale měří
mechaniku pipeline, nikoli to, co jí protéká. Tým může vykazovat vynikající čísla
DORA, zatímco jeho skutečně dodaná hodnota tiše sklouzla k předělávkám nebo
pryč od práce na dluhu a rizicích, která chrání budoucnost systému. Tato část
pokrývá DORA v plném rozsahu, ale jako jediné konsolidované referenční téma na
konci (téma 2.10), protože naléhavější a častěji chybějící otázka u většiny
organizací nezní „jak rychlá je naše pipeline“, ale „co naše pipeline
skutečně dodává“. Každé téma v této části přesto dodržuje stejnou disciplínu
zavedenou v části 1: uveďte metriku, pojmenujte, jak se s ní manipuluje, a
spárujte ji s pojistkou, která tuto manipulaci zachytí.

U velkých týmů jsou metriky toku tím, co umožňuje srovnání mezi týmy, aniž by se
ztratila z očí hodnota. Platformní tým, mobilní tým a datový tým mohou mít ve
své každodenní práci téměř nic společného, ale rychlost toku a rozložení toku,
počítané konzistentně, dovolují vedení položit férovou otázku napříč všemi
třemi: dodává tento tým takový druh hodnoty, jaký jeho současná fáze skutečně
vyžaduje. Velké podniky a státní správa se na metriky této části spoléhají, aby
zdůvodnily investice do platformy, srovnaly návratnost konkurujících
modernizačních snah a prokázaly, s důkazy místo historek, že inženýrská
kapacita je rozdělena tak, jak vedení věří.

## Témata v této části

- **2.1 Rámec Flow Framework:** Původ rámce, jeho model hodnotového proudu a
  proč tato kniha používá ke strukturování metrik dodávání a toku jej, a ne
  samotné DORA.
- **2.2 Položky toku: funkce, vady, rizika a dluh:** Čtyřtypová taxonomie
  rámce, jeho hra s nulovým součtem při přidělování kapacity a jak se s
  klasifikací manipuluje, je-li uplatněna zpětně.
- **2.3 Rychlost toku a rozložení toku:** Kolik se dodalo a jaký druh hodnoty to
  byl, vždy čteno společně.
- **2.4 Doba toku a zatížení toku:** Jak Littleův zákon dokazuje, že přetížený
  hodnotový proud se matematicky zpomaluje, nejen pravděpodobně.
- **2.5 Efektivita toku a rozpracovaná práce:** Proč zaneprázdněný neznamená
  rychlý a jak omezení rozpracované práce paradoxně zlepšuje propustnost.
- **2.6 Cycle time a jeho složky:** Rozklad inženýrského času změny na její
  jednotlivé fáze, aby tým přesně věděl, kam čas ve skutečnosti odchází.
- **2.7 Teorie front:** Matematika pod zatížením toku, dobou toku, cycle time a
  rozpracovanou prací a proč čekací čas na sdíleném zdroji exploduje, jakmile se
  vytížení blíží svému limitu.
- **2.8 Metriky hodnotového proudu podle Lean:** Klasická sada nástrojů Lean,
  lead time, procesní čas, cycle time, podíl úplných a správných vstupů a takt,
  od níž se odvozují softwarově specifické metriky této části, a jak propojit
  obě slovní zásoby.
- **2.9 Metriky pull requestů a revizí kódu:** Metriky, které žijí uvnitř jedné
  fáze dodací pipeline, a jak mohou zkreslit kvalitu revizí, jsou-li používány
  bezstarostně.
- **2.10 Rámec metrik DORA:** Čtyři metriky DORA v plném rozsahu, záměrně
  zařazené na konec, protože měří pipeline, nikoli hodnotu, která jí proudí.

## Jak spolu témata souvisejí

Téma 2.1 uvádí Flow Framework jako celek; téma 2.2 přináší jeho taxonomii
položek toku a témata 2.3 a 2.4 mezi sebou pokrývají jeho pět metrik toku,
rychlost a rozložení společně, pak dobu a zatížení společně, přičemž zatížení a
doba jsou přímo svázány s Littleovým zákonem. Témata 2.5 až 2.7 přibližují
mechaniku pod dobou toku a cycle time: efektivita toku a rozpracovaná práce
vysvětlují, proč jsou inženýrské fáze často pomalejší, než vypadají, cycle time
rozkládá tuto inženýrskou část na její fáze a teorie front formalizuje, v
dokazatelných matematických pojmech, proč jsou všechna tvrzení předchozích
témat o zatížení, čekacím čase a vytížení pravdivá. Téma 2.8 ustupuje a
vystopuje vše až k původu v klasickém mapování hodnotového proudu podle Lean,
společné slovní zásobě, z níž se softwarově specifické metriky této části
zobecňují. Téma 2.9 pokrývá jedinou fázi pipeline, kterou většina týmů dokáže
zlepšit nejrychleji. Téma 2.10 část uzavírá metrikami DORA v plném rozsahu,
prezentovanými jako dobře podložená, ale užší referenční vrstva poté, co je
širší obraz zaměřený na byznys z předchozích témat už na očích.

Disciplína pojistek v této části přímo navazuje na téma 1.2: rychlost toku se
nikdy nehlásí bez rozložení toku po boku a rychlostní metriky DORA zůstávají
spárovány se svými metrikami stability, aby tým nemohl zlepšit rychlostní číslo
tím, že tiše dodává rizikovější kód nebo užší mix hodnoty. Toto párování není
pro žádný z rámců vedlejší; je to jejich ústřední poznatek a metriky
spolehlivosti v části 6 rozšiřují stejnou stabilizační polovinu tohoto párování
do produkčního provozu poté, co kód už byl dodán.
