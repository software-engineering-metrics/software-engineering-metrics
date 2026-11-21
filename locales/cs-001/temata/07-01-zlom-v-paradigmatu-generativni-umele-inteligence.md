# 7.1 Zlom v paradigmatu generativní umělé inteligence

## Přehled a motivace

Po většinu historie softwarového inženýrství bylo psaní kódu natolik pomalé a
namáhavé, že surový objem výstupu, tedy napsané řádky, commity a dodané
funkce, alespoň zhruba souvisel se skutečným úsilím a nedokonale i se
skutečnou hodnotou. Ta souvislost nikdy nebyla dokonalá: téma 3.4 věnovalo
celé téma tomu, proč metriky aktivity zavádějí i ve světě před AI. Přesto byla
dost silná na to, aby mnoho organizací postavilo programy metrik na tichém
předpokladu, že více vyrobeného kódu obvykle znamená více vykonané práce.
Asistenti pro programování založení na [generativní umělé inteligenci](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
tento předpoklad rozhodně zlomili: nástroj dnes za pár sekund vyrobí velký
objem věrohodně vypadajícího kódu za zlomek dřívějších nákladů, a tento objem
sám o sobě říká téměř nic o tom, zda výsledný kód funguje, je udržovatelný
nebo slouží nějakému skutečnému účelu.

Hlavní teze tohoto tématu zní, že jde o zlom v paradigmatu, nikoli o
postupnou změnu nástrojů. Zlom v paradigmatu mění to, co vaše stávající
přístroje skutečně měří, nikoli jen hodnoty, které ukazují. Tachometr měří
rychlost i poté, co vyměníte motor. Několik metrik této knihy takový přechod
tak čistě nepřežije. Frekvence nasazení (téma 2.10) může vzrůst proto, že AI
urychlila skutečně cennou práci, nebo proto, že AI učinila triviálně snadným
generovat mnoho malých změn s nízkou hodnotou. Samotné číslo už tyto dva
případy nerozliší, což dříve, při náležité opatrnosti, většinou šlo. Stejná
logika platí s ještě větší silou pro holé počty commitů, řádky kódu a objem
pull requestů, před nimiž téma 3.4 už varovalo jako před metrikami
jednotlivců. Nyní se riziko zesílilo a týká se i úrovně týmů a organizace.

Pro velké týmy tato změna přišla rychleji, než se mohla přizpůsobit praxe
měření, a právě v mezeře mezi rychlostí zavádění a rychlostí přizpůsobení
metrik leží skutečné riziko této části. Velké podniky, které dál vykazují
metriky aktivity z doby před AI bez úprav, riskují, že budou oslavovat
metriku, jež se tiše přestala shodovat s hodnotou. Státní správa, která
hodnotí investice do nástrojů AI, potřebuje střízlivě chápat, které metriky
zůstávají důvěryhodné a které už ne, dříve než se zaváže k nákupu nebo
politickému rozhodnutí postavenému na zastaralých předpokladech o měření.

## Klíčové zásady

- **Jde o zlom v paradigmatu toho, co metriky měří, nikoli o postupnou
  změnu.** Některé stávající metriky tiše přestaly znamenat to, co dříve.
- **Objem výstupu nikdy nebyl spolehlivým zástupným ukazatelem hodnoty a
  nyní se stal přímo nespolehlivým.** Varování tématu 3.4 bylo vždy správné;
  tato změna činí jeho ignorování mnohem dražším.
- **Skutečným rizikem je mezera mezi rychlostí zavádění AI a rychlostí
  přizpůsobení měření.** Organizace nasazují nástroje rychleji, než
  přehodnotí své metriky.
- **Ne každá metrika této knihy je dotčena stejně.** Metriky výsledků
  (část 5) jsou vůči této změně mnohem odolnější než metriky aktivity a
  surového výstupu.
- **Tato změna se týká celého odvětví a stále probíhá, není to jednorázová
  úprava.** Čekejte další změny, jak se nástroje i vzorce jejich přijímání
  vyvíjejí.

## Doporučení

### Výslovně prověřte svou stávající sadu metrik z hlediska platnosti ve věku AI

Projděte svůj současný dashboard a u každé metriky se přímo zeptejte: ukázal
by tým, který AI podporu silně využívá, ale nevytváří o nic víc skutečné
hodnoty než dřív, na této metrice zlepšenou hodnotu? Nejvíce vystaveny jsou
počty aktivit, frekvence commitů a holá frekvence nasazení (bez spárované
pojistky stability, téma 2.10). Metriky výsledků z části 5, tedy míra
uniklých vad, přijetí funkcí a obchodní výsledky, jsou srovnatelně odolné,
protože měří skutečný výsledek, nikoli objem aktivity, která ho vytvořila.

### Znovu prověřte zvlášť frekvenci nasazení a lead time se zvýšenou pozorností k pojistkám

Téma 2.10 už varovalo před manipulací záměnou, tedy dělením smysluplné práce
na triviální nasazení, aby se zvýšil počet. Generativní AI činí tento konkrétní
vzorec manipulace dramaticky levnějším a snazším, i nechtěně, protože
triviální změny podporované AI jsou dnes téměř zadarmo. Zpřísněte pojistku
míry selhání změn (téma 2.10) přesně v poměru k tomu, jak silně tým přijal
vývoj s podporou AI, a ještě pozorněji než dříve sledujte trendy velikosti
nasazení.

### Zacházejte s kapacitou revize kódu jako s novým kritickým úzkým hrdlem

Pokud podpora AI dramaticky zvýší objem kódu předkládaného k revizi, stane se
fáze revize (téma 2.9), která už bývá největším přispěvatelem k čekacímu
času v dodávkovém řetězci, ještě ostřejším omezením. Recenzent, od něhož se
žádá, aby posoudil mnohem větší objem kódu generovaného AI stejným tempem
jako dříve, buď nutně zpomalí pipeline, nebo sníží hloubku revize, tedy
přesně riziko razítkování, před kterým téma 2.9 už varovalo, nyní pod
výrazně větším tlakem. Sledujte hloubku revize a pojistky kvality se zvýšenou
pozorností, jak roste objem kódu generovaného AI.

### Nepředpokládejte, že kód generovaný AI má stejný profil vad jako kód psaný lidmi

První důkazy a zkušenosti praktiků naznačují, že kód generovaný AI může mít
jiný profil vad než kód psaný lidmi: věrohodně vypadající, ale nenápadně
chybnou logiku, sebejistě vygenerované, ale nesprávné ošetření okrajových
případů nebo kód, který projde povrchní revizí, protože vypadá idiomaticky a
rozumně, ale nebyl skutečně promyšlen s pochopením konkrétního kontextu
systému. Berte to jako hypotézu, kterou stojí za to aktivně ověřit na vlastních
datech o uniklých vadách (téma 5.1): označujte vady podle toho, zda původní
kód vznikl převážně generováním AI, a nepředpokládejte, že historické vztahy
mezi mírou vad, na nichž vaše organizace postavila své postupy kvality, platí
beze změny dál.

### Výslovně aktualizujte chartu metrik a proces správy pro tuto změnu

V duchu disciplíny správy z tématu 1.4 nenechte tuto změnu na program metrik
jen dopadnout pasivně. Výslovně znovu projděte svou chartu metrik, pojmenujte,
které metriky potřebují nové pojistky, které je třeba vyřadit a které zůstávají
důvěryhodné, a udělejte z toho záměrné rozhodnutí správy, nikoli
neprozkoumaný drift. Zdokumentujte důvody, protože právě o takový posun
definic a kontextu jde, před nímž téma 1.4 varuje, že se jinak může odehrát
tiše a objevit se až mnohem později.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Dál vykazovat metriky z doby před AI beze změny | Žádné narušení, známé vykazování | Riziko oslavování metrik, které se tiše přestaly shodovat s hodnotou |
| Úplný audit sady metrik a záměrná revize | Obnovuje důvěryhodné měření | Vyžaduje skutečné analytické úsilí a řízení změny v organizaci |
| Úplně opustit metriky aktivity a výstupu | Přímo odstraňuje nejvíce vystavené riziko | Ztrácí část legitimně užitečného kontextového signálu (výhrada tématu 3.4) |
| Zpřísnit pojistky bez úplného auditu | Rychlejší zavedení | Může minout metriky, jejichž vystavení je méně zřejmé než v nejjasnějších případech |

Hlavní napětí je mezi **kontinuitou měření a platností měření**. Organizace
pochopitelně dávají přednost tomu, aby dál vykazovaly známé metriky známým
způsobem, protože změna programu metrik má skutečné organizační náklady a
způsobuje rozruch. Ale dál vykazovat metriku, která se tiše přestala měřit to,
co dříve, je horší než rozruch, je to aktivní uvádění v omyl. Napětí
vyřešíte tím, že to budete brát jako přesně ten druh záměrné, zdokumentované
změny správy, jaký popisuje téma 1.4: krátkodobě rušivé, ale nutné, aby
metriky organizace zůstaly poctivé.

## Otázky k diskusi s vaším týmem

1. **Ukázal by u každé metriky na našem dashboardu tým, který silně využívá
   podporu AI, ale nevytváří o nic víc skutečné hodnoty, zlepšenou hodnotu?**
   Projděte své metriky výslovně s tímto testem; ty, které neobstojí, jsou
   vaši nejprioritnější kandidáti na upravené pojistky nebo vyřazení.

2. **Vzrostla naše frekvence nasazení nebo objem commitů od zavedení
   asistentů pro programování s AI a ověřili jsme, zda se odpovídajícím
   způsobem změnila míra selhání změn nebo míra vad?** Vytáhněte skutečná
   spárovaná data, a nepředpokládejte kladný ani záporný výsledek.

3. **Drží kapacita naší revize kódu krok s případným nárůstem objemu kódu
   s podporou AI, nebo se hloubka revize pod rostoucím tlakem tiše
   vytrácí?** Zkontrolujte metriky fáze revize (téma 2.9) konkrétně na
   příznaky stupňujícího se rizika razítkování.

4. **Označujeme vady podle toho, zda původní kód vznikl převážně generováním
   AI, a pokud ano, co tato data zatím ukazují?** Pokud to dosud neoznačujete,
   promluvte si o tom, co by bylo třeba k zahájení, protože tato data přímo
   souvisejí s tím, zda vaše historické předpoklady o kvalitě stále platí.

5. **Přehodnotili jsme záměrně svou chartu metrik (téma 1.4) ve světle této
   změny, nebo naše praxe měření prostě pokračovala beze změny?** Pokud je
   upřímná odpověď to druhé, právě tuto mezeru toto téma doporučuje uzavřít
   jako první.

6. **Jak by vypadalo, kdyby nás tato změna zastihla nepřipravené a my
   oslavovali metriku, která už přestala znamenat to, co jsme si mysleli?**
   Tento konkrétní, mírně nepříjemný myšlenkový pokus pomáhá motivovat audit,
   který toto téma doporučuje, dříve, nikoli až poté, co se takový scénář
   skutečně stane.

## Pohled podle sektorů

**Startup.** Rychlé přijetí nástrojů AI je běžné a často představuje skutečnou
konkurenční výhodu, ale stejná rychlost, která činí přijetí lákavým, činí
pravděpodobnějším neprozkoumaný drift metrik. Vypěstujte si návyk kontrolovat
metriky výsledků (část 5) vedle jakýchkoli zisků efektivity, které z přijetí
AI vykazujete, a nevykazujte jen zlepšení velocity.

**Malá firma.** Podpora AI při programování může smysluplně rozšířit kapacitu
malého týmu, ale odolejte pokušení vykazovat surový nárůst výstupu jako
jednoznačný úspěch bez kontroly pojistek kvality. Malý tým má menší kapacitu
pohltit nezjištěný problém s kvalitou než větší organizace s větší redundancí.

**Velký podnik.** Rozsah tohoto rizika se tu výrazně kumuluje, protože
přijetí AI v desítkách či stovkách týmů současně může posunout platnost metrik
v celé organizaci dřív, než si vzorce lokálně všimne kterýkoli jednotlivý tým.
Proveďte audit sady metrik, který toto téma doporučuje, na úrovni organizace,
ne jen tým po týmu, a aktualizujte správu (téma 1.4) centrálně a výslovně.

**Státní správa.** Organizace veřejného sektoru často přijímají nové technologie
opatrněji, ale metriky a srovnávací hodnoty používané k hodnocení vládních
technologických programů se často čerpají z dat soukromého sektoru nebo se s
nimi srovnávají, a tato data se pod týmž tlakem sama posouvají. Výslovně
pochopte, které odvětvové srovnávací hodnoty, s nimiž se srovnáváte, byly touto
změnou ovlivněny, než je použijete ke stanovení očekávání nebo hodnocení
výkonu.

## Příklady

**Velký podnik.** Vedení inženýrství jedné fintech společnosti si všimlo, že
frekvence nasazení vzrostla téměř o 40 % ve dvou čtvrtletích po širokém
zavedení asistentů pro programování s AI, a zprvu to na zasedání správní rady
ohlásilo jako přímočarý produktivní úspěch. Pečlivější následná analýza,
vyvolaná otázkou skeptického člena rady, zda byla zkontrolována kvalita,
zjistila, že míra selhání změn vzrostla téměř ve stejném kroku jako frekvence
nasazení, a po skutečném prověření spárované metriky stability tak zcela
zrušila zdánlivý zisk. Přepracované vykazování společnosti nyní uvádí
frekvenci nasazení a míru selhání změn výslovně společně, kdykoli se činí
tvrzení o produktivitě s podporou AI, čímž se předchází dřívějšímu, téměř
veřejnému, zavádějícímu tvrzení.

**Státní správa.** IT oddělení jedné státní vlády, které pilotovalo podporu AI
při programování pro část svých inženýrských týmů, zjistilo, že surový
výstup kódu na inženýra podstatně vzrostl, což bylo zprvu příznivě
citováno v interním hodnocení pilotu. Důkladnější analýza, vyvolaná začleněním
pokynů této knihy do hodnoticího rámce oddělení, zkoumala konkrétně míru
uniklých vad u práce s podporou AI oproti práci bez ní a zjistila mírně
zvýšenou míru vad v kohortě s podporou AI, soustředěnou v ošetření okrajových
případů pro neobvyklé situace občanů, s nimiž nástroje AI při trénování
nepřišly do styku. Toto zjištění pilot nezastavilo, ale vedlo ke konkrétnímu,
cílenému zpřísnění revizí u změn s podporou AI zasahujících logiku
okrajových případů nároku, čímž se řešilo skutečné riziko, které by samotná
metrika surového výstupu nikdy neodhalila.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratnost proaktivního provedení tohoto auditu spočívá v tom, že se vyhnete
veřejnému nebo před správní radou trapnému vykazování metriky, která se při
bližším zkoumání ukáže jako neměřící nic skutečného, přesně jak to téměř
způsobil výše uvedený příklad z fintech společnosti. Organizace, která tuto
změnu předběhne, si zachová důvěryhodnost u zainteresovaných stran, ta, která
je přistižena při vykazování prázdné metriky, platí skutečnou a z velké části
odvratitelnou cenu za pověst.

Celkové náklady vlastnictví (TCO) tvoří analytické úsilí na audit stávající
sady metrik, zpřísnění pojistek a aktualizaci dokumentace správy, což je
jednorázová, mírná investice ve srovnání s trvalým rizikem dalšího vykazování
metrik, které se tiše přestaly měřit to, co tvrdí. Tyto náklady se také v
menší míře opakují, protože změna probíhá stále a není jednorázová, a
pravidelný nový audit, jak se nástroje a vzorce jejich přijímání vyvíjejí, je
rozumným trvalým doplněním rytmu správy metrik.

## Antivzory a úskalí

- **Dál vykazovat metriky aktivity z doby před AI beze změn a bez kritického
  pohledu:** riziko oslavování metriky, která se tiše přestala shodovat se
  skutečnou hodnotou.
- **Vykazovat nárůst frekvence nasazení nebo objemu výstupu bez spárované
  pojistky stability:** opakuje varování tématu 2.10 s výrazně vyššími sázkami
  při vývoji s podporou AI.
- **Předpokládat bez ověření, že kód generovaný AI má stejný profil vad jako
  kód psaný lidmi:** neověřený předpoklad, který může být zcela mylný.
- **Nechat hloubku revize tiše erodovat pod rostoucím objemem kódu generovaného
  AI:** riziko razítkování z tématu 2.9, zesílené.
- **Zacházet s touto změnou jako s jednorázovou úpravou místo trvalého
  zájmu:** nástroje a vzorce jejich přijímání se dál vyvíjejí a praxe měření
  musí držet krok.
- **Srovnávat se s odvětvovými srovnávacími hodnotami, aniž by se pochopilo,
  zda se samy pod stejným tlakem neposunuly:** riziko falešného pocitu
  relativního výkonu.

## Model zralosti

- **Úroveň 1, Zahájení:** Metriky z doby před AI se vykazují beze změn, bez
  povědomí, že přijetí AI mohlo ovlivnit jejich platnost.
- **Úroveň 2, Rozvoj:** Určité povědomí o změně existuje, ale nebyl proveden
  systematický audit stávající sady metrik.
- **Úroveň 3, Standardizace:** Byl proveden úplný audit sady metrik, pojistky
  jsou zpřísněny a metriky zdokumentovány jako dotčené nebo odolné, v celé
  organizaci.
- **Úroveň 4, Řízení:** Vady a výsledky kvality se aktivně označují a sledují
  podle úrovně podpory AI, aby se ověřovalo, a nepředpokládalo, že historické
  vztahy kvality organizace stále platí.
- **Úroveň 5, Orchestrace:** Organizace má vyspělou, trvalou praxi opakovaného
  přezkoumávání svých metrik, jak se nástroje AI a vzorce jejich přijímání
  vyvíjejí, a umí ukázat konkrétní rozhodnutí správy učiněná proaktivně v
  reakci na tuto změnu, nikoli reaktivně poté, co se objevil problém.

## Náměty k diskusi

1. Které z našich současných metrik by nejvíc lichotily týmu, který silně využívá podporu AI, ale nevytváří o nic víc skutečné hodnoty?
2. Vzrostla naše frekvence nasazení od přijetí AI a pohnula se s ní i míra selhání změn?
3. Označujeme výsledky kvality podle úrovně podpory AI a co by tato data ukázala?
4. Drží naše kapacita revize krok s případným nárůstem objemu kódu generovaného AI?
5. S jakou odvětvovou srovnávací hodnotou se dnes srovnáváme a posunula se sama pod tímto tlakem?

## Hlavní poznatky

- Generativní AI je **zlom v paradigmatu toho, co několik stávajících metrik
  měří**, nikoli postupná změna nástrojů; některé metriky tiše přestaly
  znamenat to, co dříve.
- **Metriky aktivity a surového výstupu jsou nejvíce vystavené**; metriky
  výsledků (část 5) jsou srovnatelně odolné.
- **Zpřísněte pojistky, zejména míru selhání změn**, v poměru k přijetí
  vývoje s podporou AI.
- **Ověřujte, nepředpokládejte, zda kód generovaný AI má jiný profil vad**
  než kód psaný lidmi, pomocí označených dat o uniklých vadách.
- Berte to jako **trvalou, nikoli jednorázovou záležitost správy**
  (téma 1.4), protože nástroje a vzorce jejich přijímání se dál vyvíjejí.

## Odkazy a další četba

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (základ měření založeného na výsledcích, který podle
  tohoto tématu v důsledku této změny nabývá, nikoli ztrácí, na významu).
- Výzkum GitHubu o programování ve dvojici s AI a produktivitě vývojářů
  (odvětvový výzkum měřitelných účinků vývoje s podporou AI).
- Program Google Cloud DevOps Research and Assessment, [dora.dev](https://dora.dev/)
  (průběžný výzkum State of DevOps, který v posledních letech zahrnuje
  zjištění o přijímání AI).
- *The Tyranny of Metrics*, Jerry Z. Muller (obecný argument pro skepsi vůči
  metrikám založeným na objemu, přímo relevantní, jakmile se objem výstupu
  stává levným).
