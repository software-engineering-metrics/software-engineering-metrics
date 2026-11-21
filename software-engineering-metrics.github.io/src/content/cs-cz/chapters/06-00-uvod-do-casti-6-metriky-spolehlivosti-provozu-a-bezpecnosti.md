# 6.0 Úvod do části 6: Metriky spolehlivosti, provozu a bezpečnosti

Část 2 pokryla, jak se změna dostane z commitu do produkce; tato část pokrývá, co
se děje, když tam běží, donekonečna, za skutečných podmínek, které tým nemůže
plně ovládat. Metriky spolehlivosti, provozu a bezpečnosti jsou místem, kde se
sliby softwarového inženýrství setkávají s trvalou realitou: nejde o to, „zda se
nasazení povedlo“, ale „zda systém dál funguje, noc co noc, pod zátěží, pod
útokem a pod tíhou rotace pohotovosti, která musí být udržitelná roky, ne jen do
dalšího incidentu“.

Čtyři témata této části sledují záměrný oblouk. Ukazatele a cíle úrovně služby
(téma 6.1) stanovují slovník a disciplínu určování cílů, na nichž závisí všechno
ostatní v této části. Metriky incidentů (téma 6.2) měří, co se stane, když se
cíl nesplní. Metriky pohotovosti a kapacity (téma 6.3) měří lidskou a
infrastrukturní cenu udržení splněného cíle. Metriky bezpečnosti a zranitelností
(téma 6.4) rozšiřují stejnou disciplínu spolehlivosti na odlišné, ale úzce
související riziko: ne „selže to samo“, ale „způsobí to někdo záměrně“. Všechna
čtyři témata sdílejí ústřední disciplínu této knihy: pojmenujte metriku,
pojmenujte, jak se s ní manipuluje, a spárujte ji s pojistkou, která tuto
manipulaci zachytí.

U velkých týmů jsou metriky této části místem, kde se sliby inženýrství stávají
smluvními a, v kontextu státní správy, někdy právními. Velké podniky píší dohody
o úrovni služby (SLA) proti metrikám, které zavádí téma 6.1, se skutečnými
finančními pokutami za jejich nesplnění; státní správa provozuje kritickou
veřejnou infrastrukturu, kde selhání spolehlivosti nebo bezpečnosti nese důsledky
daleko za rozvahou jedné společnosti. Tato část bere tuto váhu vážně v celém
rozsahu.

## Témata v této části

- **6.1 Ukazatele úrovně služby, cíle a rozpočty chyb:** Slovník a disciplína
  určování cílů, na nichž stojí veškeré site reliability engineering, a jak
  rozpočet chyb mění spolehlivost ve zdroj, který lze utrácet a řídit, místo
  nedosažitelného absolutna.
- **6.2 Metriky incidentů: detekce, reakce a obnova:** Měření, jak rychle
  organizace selhání zaznamená, zareaguje na něj a vyřeší ho, a disciplína bez
  obviňování, která toto měření udržuje poctivé.
- **6.3 Metriky pohotovosti, kapacity a provozní zátěže:** Lidská a
  infrastrukturní cena udržování spolehlivosti a proč se neudržitelná zátěž
  pohotovosti nakonec sama projeví jako problém spolehlivosti.
- **6.4 Metriky bezpečnosti a správy zranitelností:** Rozšíření stejného
  disciplinovaného přístupu spárovaného s pojistkami na bezpečnostní riziko, od
  objevení zranitelnosti po její nápravu.

## Jak spolu témata souvisejí

Téma 6.1 klade základ, na němž staví každé další téma této části: bez jasného
cíle úrovně služby nemají otázky „jak špatný byl tento incident“ (téma 6.2) a „je
naše zátěž pohotovosti udržitelná“ (téma 6.3) žádný společný referenční bod, proti
kterému by se měřilo. Metriky incidentů z tématu 6.2 jsou v pravém slova smyslu
záznamem čerpání rozpočtu chyb, který zavádí téma 6.1; téma 6.3 měří udržitelnost
lidského systému odpovědného za udržení tohoto čerpání v rámci rozpočtu; a téma
6.4 uplatňuje stejné myšlení cílů a rozpočtů na bezpečnostní postoj, který, když
se neměří, tíhne k tomu, že dostává pozornost jen reaktivně, po incidentu, a ne
proaktivně.

Tato část se přímo napojuje zpět na část 2: míra selhání změn a doba obnovy po
selhaném nasazení podle DORA (obě pokryté v tématu 2.10) jsou, v tomto pořadí,
předstihovým ukazatelem a příkladem metrik incidentů této části. Napojuje se také
dopředu na část 8, kde pokyny k dashboardům a zralosti programu hojně čerpají z
modelu rozpočtu chyb této části jako z propracovaného příkladu toho, jak
abstraktní cíl (spolehlivost, bezpečnost) proměnit v konkrétní, sledovatelný,
neabsolutní cíl, který tým dokáže řídit den za dnem.
