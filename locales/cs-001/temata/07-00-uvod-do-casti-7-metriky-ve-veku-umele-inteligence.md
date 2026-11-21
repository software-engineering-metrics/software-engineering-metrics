# 7.0 Úvod do části 7: Metriky ve věku umělé inteligence

Každá metrika v této knize dosud vznikla pro svět, v němž byl vzácným a
namáhavým zdrojem samotný zápis kódu. Nástroje generativní umělé inteligence
(AI) tento předpoklad změnily rychleji, než stačily metriky většiny
organizací. Když nástroj vyrobí věrohodně vypadající pull request za pár
sekund, přestane několik metrik z dřívějších částí knihy měřit to, co dříve
měřily: nejpříměji počty aktivit (téma 3.4), do značné míry i holá frekvence
nasazení (téma 2.10) a při bezstarostném pojetí dokonce pokrytí testy
(téma 4.2). Tato část existuje proto, že program metrik, který s touto změnou
výslovně nepočítá, riskuje sebejisté vykazování čísel, jež se tiše stala
bezvýznamnými, nebo hůř, přímo škodlivými.

Čtyři témata této části sledují promyšlený oblouk. Téma 7.1 pojmenovává
změnu přímo a vysvětluje, proč jde o změnu paradigmatu, nikoli o drobnou
úpravu. Téma 7.2 ukazuje, jak skutečně měřit, zda vývoj s podporou AI pomáhá,
a drží se disciplíny „výsledky před výstupy“, kterou téma 1.3 stanovilo hned
na začátku knihy. Téma 7.3 pojmenovává konkrétní nová rizika, která tato
změna přináší: metriky, které rostou bez odpovídající hodnoty, a ředění
kvality, které předbíhá dnešní schopnost odvětví ho odhalit. Téma 7.4 část
uzavírá odpovědí této knihy na celou změnu: záměrným obratem k telemetrii
výsledků jako k metrikám, na kterých záleží nejvíc. Objem výstupu, jak
tato část opakovaně dokládá, nikdy nebyl správnou veličinou k optimalizaci a
generativní AI jen způsobila, že už tuto pravdu nelze přehlížet.

Pro velké týmy je tato část naléhavá, nikoli spekulativní. Velké podniky,
které nasazují asistenty pro programování v širokém měřítku, potřebují rychle
vědět, zda jejich stávající metriky stále znamenají to, co si myslí. Státní
správa, která s AI často zachází opatrněji, ale čelí téže změně nástrojů v
širším odvětví, odkud získává lidi a s nímž se srovnává, potřebuje
doporučení této části, aby správně vykládala odvětvová srovnání, jež se pod
stejným tlakem sama posouvají.

## Témata v této části

- **7.1 Zlom v paradigmatu generativní umělé inteligence:** Proč jde o
  zásadní změnu toho, co několik stávajících metrik měří, a ne jen o další
  nástroj do sady.
- **7.2 Měření vývoje softwaru s podporou umělé inteligence:** Jak měřit, zda
  podpora AI skutečně pomáhá, na základě dat o výsledcích, ne objemu výstupu.
- **7.3 Inflace metrik a rizika ředění kvality:** Konkrétní nová rizika
  manipulace a kvality, která tato změna přináší, a jak se proti nim chránit.
- **7.4 Telemetrie výsledků jako nová Polárka:** Odpověď této knihy na celou
  změnu: záměrný a trvalý obrat k metrikám výsledků, protože výstup zlevňuje.

## Jak spolu témata souvisejí

Téma 7.1 zakládá, proč tato část vůbec existuje. Téma 7.2 podává praktické
pokyny k měření, které změna vyžaduje. Téma 7.3 pojmenovává konkrétní způsoby
selhání, před nimiž se musí organizace při přijímání vývoje s podporou AI
chránit. Téma 7.4 zobecňuje poučení do trvalé zásady, která přežije každý
konkrétní nástroj i dodavatele. Tato část není samostatná rodina metrik jako
části 2 až 6, z nichž každá pokrývá jednu oblast. Je to spíš optika
přiložená zpětně na celou knihu: aktivity, výstupy a dokonce i některé
metriky výsledků z každého dřívějšího tématu je třeba znovu prověřit
otázkami této části, jakmile se vývoj s podporou AI stane běžnou, nikoli
výjimečnou praxí.

Nejpříměji tato část navazuje na zásadu výsledků před výstupy z tématu 1.3 a
na varování před metrikami aktivity z tématu 3.4. Obojí se ukazuje jako
správné od počátku, a technologická změna, která činí opak, tedy měření podle
objemu, přímo nebezpečným a ne pouze neoptimálním, to teď naléhavě potvrzuje.
Část zároveň připravuje půdu pro praktické pokyny části 8 o budování programu
metrik, protože dashboard navržený před touto změnou je třeba záměrně
přehodnotit, nikoli jen postupně upravit, ve světle toho, co tato část
pokrývá.
