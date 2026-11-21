# 4.2 Pokrytí testy a účinnost testů

## Přehled a motivace

**[Pokrytí testy](https://en.wikipedia.org/wiki/Code_coverage)** (test
coverage) měří procento kódu, které sada testů provede: pokrytí řádků,
pokrytí větví nebo přísnější pokrytí cest. Je to jedna z nejčastěji sledovaných
metrik v celé této knize, levná na výpočet, snadno zobrazitelná jako jediné
procento, a proto také jedna z nejčastěji zmanipulovaných, přesně tak, jak téma
1.2 předpovídá u každé metriky, která se stane cílem. Sada testů může dosáhnout
vysokého pokrytí a přitom neověřovat téměř nic smysluplného, protože pokrytí
měří, zda se kód během běhu testu provedl, ne zda test skutečně zkontroloval,
že se kód choval správně.

Tato mezera mezi pokrytím a skutečnou účinností testů není drobná poznámka pod
čarou; je ústřední starostí tohoto tématu. Test, který zavolá funkci a nic o
jejím výsledku neověřuje, zvýší pokrytí stejně jako test, který důkladně
ověřuje chování funkce napříč okrajovými případy. Náprava, kterou toto téma
doporučuje, **mutační testování** (mutation testing), které záměrně zavádí do
kódu malé, umělé vady a kontroluje, zda je sada testů skutečně zachytí, je
přímou odpovědí na tuto mezeru a toto téma ho bere jako nezbytný doplněk
pokrytí, ne volitelný nadstandard.

U velkých týmů se cíle pokrytí často přijímají v celé organizaci jako brána
kvality, přesně ten druh motivované, vysoce viditelné metriky, o níž téma 1.2
varuje, že je manipulaci nejvíc vystavena. Velké podniky a státní správa, které
stanoví plošný požadavek na procento pokrytí bez spárované kontroly účinnosti,
tím fakticky motivují přesně vzorec manipulace s prahem, který tato kniha
popisuje: triviální testy psané čistě proto, aby se dosáhlo čísla, bez
odpovídajícího zlepšení skutečné prevence vad.

## Klíčové zásady

- **Pokrytí měří provedení, ne ověření.** Že test řádek spustil, nevypovídá nic
  o tom, zda o něm test zkontroloval něco smysluplného.
- **Cíl pokrytí bez kontroly účinnosti je učebnicové uspořádání pro Goodhartův
  zákon** (téma 1.2): číslo se zlepšuje, zatímco skutečná kvalita ne.
- **Mutační testování je nezbytný doplněk pokrytí**, ne náhrada; používejte
  obojí společně.
- **Pokrytí je užitečnější jako spodní hranice než jako cíl k maximalizaci.**
  Nízké číslo odhalí skutečně netestovaný kód; honba za 100 % často vede k
  klesajícím nebo záporným výnosům.
- **Pokrytí kritických cest má větší váhu než jednotné, plošné pokrytí.**
  Ne všechen kód nese stejné riziko, když selže.

## Doporučení

### Používejte pokrytí k hledání netestovaného kódu, ne jako cíl k maximalizaci

Berte zprávu o pokrytí především jako mapu toho, co nemá žádný test, což je
skutečně užitečná informace, ne jako skóre, které se má tlačit ke 100 %. Kód s
nulovým pokrytím je skutečná mezera, kterou stojí za to zaplnit. Mezní hodnota
zvyšování pokrytí z 85 % na 95 % je obvykle mnohem nižší a často nestojí za úsilí,
které to vyžaduje, zvlášť pokud toto úsilí produkuje nízkohodnotné testy jen
kvůli dosažení vyššího čísla.

### Spárujte každý cíl pokrytí s mutačním testováním

Nástroje **mutačního testování** automaticky zavádějí do kódu malé vady,
převrácení operátoru porovnání nebo změnu hraniční podmínky, a pak spouštějí
vaši sadu testů proti každé zmutované verzi. Sada testů, která „zabije“ (selže
proti) většinu mutantů, skutečně ověřuje chování. Sada testů s vysokým
pokrytím řádků, ale nízkou mírou zabití mutantů kód provádí, aniž by ho
smysluplně kontrolovala. Toto spárování je jednou z nejúčinnějších pojistek proti
manipulaci s cílem pokrytí a tato kniha ho doporučuje jako standardní praxi,
ne jako pokročilou nebo volitelnou techniku.

### Prioritizujte pokrytí a mutační testování nejdřív na kritických cestách

Ne všechen kód nese stejné riziko. Cesta zpracování plateb, kontrola
autentizace nebo skript migrace dat zaslouží mnohem přísnější testování než
zřídka používaný administrativní report. Místo honby za jednotným pokrytím
napříč celou kódovou bází určete své cesty kódu s nejvyšším rizikem a
nejvážnějšími následky a soustřeďte na ně nejdřív úsilí o pokrytí i mutační
testování, a přijměte nižší pokrytí u skutečně málo rizikového kódu jako
záměrný, informovaný kompromis, ne jako přehlédnutí.

### Hlídejte konkrétní vzorce manipulace s pokrytím

Mezi nejčastější způsoby manipulace s pokrytím, jakmile se stane cílem, patří:
testy, které zavolají funkci, ale o výsledku neověřují nic smysluplného
(manipulace s prahem z tématu 1.2 uplatněná na tuto metriku), vypínání nebo
mazání testů, které selhávají, místo opravy podkladového problému, a úplné
vyřazení těžko testovatelného kódu z výpočtu pokrytí místo řešení, proč se
těžko testuje. Pravidelně přímo auditujte vzorek testů a čtěte jejich skutečná
tvrzení (assertions), místo abyste důvěřovali samotnému procentu pokrytí.

### Nastavte v CI pipeline spodní hranici pokrytí, ne strop

Nakonfigurujte build pipeline tak, aby selhala, pokud pokrytí nového kódu
klesne pod dohodnutou spodní hranici, a bránila tak zhoršení, místo aby
vyžadovala, aby každá změna posunula celkové číslo výš. Rozdíl je důležitý:
spodní hranice chrání před sklouznutím, aniž by vytvářela stejný neúprosný tlak
nahoru, který plodí nízkohodnotné testy psané čistě proto, aby se číslo
posunulo o kousek výš.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Samotné procento pokrytí | Levné, jednoduché, široce podporované nástroji | Snadno se zmanipuluje; měří provedení, ne ověření |
| Pokrytí plus mutační testování | Ověřuje, že testy skutečně kontrolují chování, odolné proti manipulaci | Výpočetně dražší; vyžaduje investici do nástrojů |
| Jednotný cíl pokrytí napříč kódovou bází | Jednoduchý na formulaci a vynucení | Plýtvá úsilím na málo rizikový kód; jinde investuje méně, než odpovídá riziku |
| Pokrytí podle rizika, kritické cesty napřed | Soustředí úsilí tam, kde záleží nejvíc | Vyžaduje úsudek, aby se správně určily skutečně kritické cesty |

Ústředním napětím je **jednoduchost versus upřímnost**. Jediné procento pokrytí
se snadno hlásí a snadno stanoví jako cíl, ale právě tato jednoduchost z něj
dělá něco, s čím se tak snadno manipuluje, jakmile se stane motivovaným
číslem. Napětí řešte tím, že přijmete přidanou složitost mutačního testování a
prioritizace podle rizika jako cenu za upřímný signál a že výslovně sdělíte
svému týmu, proč je nižší celkové číslo pokrytí, správně soustředěné na
kritické cesty a podložené vysokou mírou zabití mutantů, cennější než vyšší,
rovnoměrněji rozložené, ale hůře ověřené.

## Otázky k diskusi s vaším týmem

1. **Jaká je naše míra zabití mutantů u našich cest kódu s nejvyšším rizikem a
   jak se srovnává s naším procentem pokrytí u téhož kódu?** Velký rozdíl mezi
   vysokým číslem pokrytí a nízkou mírou zabití mutantů je nejjasnějším
   možným znamením, že samotné pokrytí neříká to, co si myslíte.

2. **Napsali jsme někdy test primárně proto, abychom zvýšili číslo pokrytí, s
   malým skutečným přemýšlením o tom, co by měl ověřovat?** Buďte upřímní;
   děje se to častěji, než týmy rády přiznávají, zvlášť pod časovým tlakem,
   když brána pokrytí blokuje sloučení.

3. **Je naše úsilí o pokrytí soustředěno na cesty kódu s nejvyšším rizikem,
   nebo rozloženo rovnoměrně bez ohledu na následky, když tento kód selže?**
   Zmapujte své současné rozložení pokrytí proti upřímnému posouzení rizika
   své kódové báze a hledejte nesoulad.

4. **Vypnuli nebo smazali jsme někdy selhávající test místo opravy
   podkladového problému, který odhalil?** Je to jedna z nejškodlivějších
   forem manipulace s pokrytím, protože aktivně odstraňuje skutečnou ochranu,
   zatímco hlášené číslo pokrytí se sotva pohne.

5. **Vynucuje naše CI pipeline spodní hranici pokrytí nového kódu, nebo tlačí
   na stále vyšší strop bez ohledu na klesající výnosy?** Probereme, zda
   návrh vaší brány vytváří správnou motivaci, ochranu před zhoršením, nebo
   špatnou, neúprosný tlak nahoru, který odměňuje vycpávání nízkohodnotnými
   testy.

6. **Jaký kód v naší kódové bázi je vyňat z výpočtu pokrytí a je to vynětí
   oprávněné, nebo skrývá skutečnou mezeru v testování?** Projděte skutečnou
   konfiguraci výjimek; je běžné, že tento seznam tiše roste, aniž by kdo
   znovu posoudil, zda je každá výjimka stále oprávněná.

## Pohled podle sektorů

**Startup.** Formální cíle pokrytí jsou takhle brzy často zbytečné; soustřeďte
úsilí o psaní testů přímo na své nejrizikovější, obchodně nejkritičtější cesty
kódu (obvykle platby nebo logika hlavního pracovního postupu), místo honby za
plošným procentem napříč kódovou bází, která se stále rychle mění a stejně
může být brzy podstatně přepsána.

**Malá firma.** Většina CI platforem hlásí pokrytí automaticky s minimálními
náklady na nastavení. Používejte ho především k nalezení zcela netestovaného
kritického kódu, ne k honbě za konkrétním cílovým procentem, a mutační
testování zvažte až tehdy, až budete mít inženýrskou kapacitu jednat podle
toho, co odhalí.

**Velký podnik.** Plošné cíle pokrytí v celé organizaci jsou v tomto měřítku
častou a důsledkově závažnou chybou, protože motivují přesně tu manipulaci,
kterou toto téma popisuje, napříč desítkami týmů najednou. Stanovte očekávání
pokrytí podle rizika, která se liší podle kritičnosti služby, a investujte do
infrastruktury mutačního testování konkrétně pro své systémy s nejvyšším
rizikem.

**Státní správa.** Požadavky na pokrytí se někdy objevují v dokumentaci
zadávacích řízení nebo souladu jako tupý, snadno specifikovatelný zástupný
ukazatel zajištění kvality. Kde je to možné, spárujte každé smluvně požadované
procento pokrytí s požadavkem na mutační testování nebo účinnost založenou na
vadách, aby smluvní motivace nechtěně neodměňovala přesně to nízkohodnotné
vycpávání testy, před nímž toto téma varuje.

## Příklady

**Velký podnik.** Vedení jedné e-commerce platformy stanovilo celofiremní
požadavek na 95% pokrytí veškerého nového kódu, vynucovaný jako tvrdá brána CI.
Audit o dva roky později, vyvolaný vlnou produkčních vad v údajně dobře
otestovaném kódu, zjistil míru zabití mutantů pod 40 % ve velké části kódové
báze: týmy psaly testy, které provedly cesty kódu, aniž by smysluplně ověřovaly
jejich chování, čistě aby pod časovým tlakem vyhověly bráně. Firma nahradila
plošný požadavek na pokrytí politikou odstupňovanou podle rizika: přísné
pokrytí plus povinné mutační testování nad prahem 80 % zabití u kódu plateb a
autentizace a mnohem mírnější spodní hranice pokrytí u málo rizikových interních
nástrojů, což zároveň snížilo plýtvání testovacím úsilím a měřitelně zlepšilo
míru vad ve skutečně kritických cestách.

**Státní správa.** Systému pro ověřování nároku na dávky jedné agentury
veřejného zdraví se ve smlouvě s dodavatelem vývoje ukládalo udržovat 90%
pokrytí testy. Revize po incidentu, po významné vadě ve výpočtu nároku, která
byla dodána, přestože požadavek na pokrytí byl splněn, zjistila, že
odpovědná funkce dosáhla pokrytí výhradně testy, které funkci volaly s platnými
vstupy, ale nikdy netestovaly okrajové podmínky ani neplatné vstupy, právě tam,
kde se vada objevila. Revidovaná smlouva s dodavatelem agentury nyní u kódu
výpočtu nároku vyžaduje vedle pokrytí zdokumentované skóre mutačního testování
a uzavírá tak konkrétní mezeru, která umožnila, aby smlouvu uspokojilo
vyhovující, ale neúčinné testování.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností spárování pokrytí s mutačním testováním je zachycení mezery mezi
zdánlivou a skutečnou kvalitou testů dřív, než stojí produkční vadu. Příklad
e-commerce výše ukazuje vzorec jasně: samotný požadavek na pokrytí vytvořil falešný
pocit bezpečí, který nakonec odhalila vlna vad za mnohem vyšší cenu, než
jakou by stála investice do mutačního testování, která by mezeru zachytila
dřív.

Celkové náklady vlastnictví (TCO) zahrnují výpočetní náklady mutačního
testování, které je dražší spouštět než prostou instrumentaci pokrytí, a proto
se obvykle vyhrazuje pro kód kritických cest a ne pro celou kódovou bázi, a
inženýrský čas na interpretaci výsledků a jednání podle nich. Tyto náklady jsou
oprávněné právě u kódu s nejvyšším rizikem, kde je cena nezjištěné mezery v
účinnosti testů nejvyšší.

## Antivzory a úskalí

- **Brát procento pokrytí jako přímý verdikt o kvalitě:** měří provedení, ne
  ověření.
- **Psaní testů primárně kvůli splnění brány pokrytí:** vytváří přesně
  nízkohodnotný vzorec manipulace s prahem, před nímž varuje téma 1.2.
- **Vypínání nebo mazání selhávajících testů místo opravy podkladového
  problému:** odstraňuje skutečnou ochranu, zatímco hlášené číslo sotva ovlivní.
- **Uplatnění jednotného cíle pokrytí bez ohledu na riziko kódu:** plýtvá úsilím
  na málo rizikový kód a podinvestuje do skutečně kritických cest.
- **Tiché rozšiřování seznamu výjimek v čase:** skrývá skutečné mezery v
  testování za technicky přesným, ale zavádějícím číslem pokrytí.
- **Honba za stropem pokrytí místo spodní hranice:** vytváří neúprosný tlak
  nahoru, který odměňuje vycpávání testy před skutečným ověřováním.

## Model zralosti

- **Úroveň 1, Zahájení:** Pokrytí se neměří, nebo se měří nekonzistentně bez
  spodní hranice, cíle nebo kontroly účinnosti.
- **Úroveň 2, Rozvoj:** Cíl pokrytí existuje a sleduje se, ale žádné mutační
  testování ani prioritizace podle rizika neurčují, jak se rozděluje úsilí.
- **Úroveň 3, Standardizace:** Spodní hranice pokrytí se důsledně vynucují v CI,
  přičemž prioritizace podle rizika řídí, kde se úsilí o pokrytí soustředí.
- **Úroveň 4, Řízení:** Mutační testování běží na kódu kritických cest se
  sledovaným prahem míry zabití, který musí být splněn vedle pokrytí, a seznamy
  výjimek se pravidelně auditují.
- **Úroveň 5, Orchestrace:** Organizace dokáže ukázat konkrétní snížení počtu
  vad vysledované k prioritizaci založené na mutačním testování a data o
  pokrytí a účinnosti společně přímo ovlivňují rozhodnutí o investicích do
  testování.

## Náměty k diskusi

1. Jaká je naše míra zabití mutantů u nejkritičtější cesty kódu a víme to vůbec?
2. Napsali jsme někdy nízkohodnotný test čistě proto, abychom vyhověli bráně pokrytí?
3. Je naše současné úsilí o pokrytí soustředěno tam, kde je riziko nejvyšší, nebo rozloženo rovnoměrně?
4. Jaký kód je dnes vyňat z výpočtu pokrytí a je to vynětí stále oprávněné?
5. Stála by investice do mutačního testování našeho nejrizikovějšího systému za svou výpočetní cenu?

## Hlavní poznatky

- Pokrytí testy měří **provedení, ne ověření**; pokrytý řádek nevypovídá nic o
  tom, zda byl smysluplně zkontrolován.
- Spárujte pokrytí s **mutačním testováním**, abyste ověřili, že testy skutečně
  zachytí reálné vady, a nejen že kód spustí.
- Soustřeďte testovací úsilí na **kritické cesty s vysokým rizikem**, místo
  honby za jednotným pokrytím napříč celou kódovou bází.
- Používejte pokrytí jako **spodní hranici chránící před zhoršením**, ne jako
  strop, který se neúprosně maximalizuje.
- Hlídejte konkrétní vzorce manipulace s pokrytím: **nízkohodnotné testy,
  vypnuté selhávající testy a tiše rostoucí seznamy výjimek**.

## Odkazy a další četba

- *Working Effectively with Legacy Code*, Michael Feathers (strategie pokrytí
  testy pro stávající, těžko testovatelné kódové báze).
- Jia, Yue, a Mark Harman, „An Analysis and Survey of the Development of
  Mutation Testing“, *IEEE Transactions on Software Engineering* (2011):
  komplexní přehled technik mutačního testování a jejich účinnosti.
- *xUnit Test Patterns*, Gerard Meszaros (vzory návrhu testů relevantní pro
  psaní skutečně účinných, a ne jen pokrytí splňujících testů).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (vztah mezi testovacími praktikami a výkonem dodávky).
