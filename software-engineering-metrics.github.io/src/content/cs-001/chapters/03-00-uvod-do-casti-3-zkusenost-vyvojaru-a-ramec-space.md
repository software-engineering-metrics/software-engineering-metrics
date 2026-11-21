# 3.0 Úvod do části 3: Zkušenost vývojářů a rámec SPACE

Část 2 měřila dodávku zvenčí: jak rychle a jak bezpečně se kód pohybuje
pipeline. Tato část měří zkušenost lidí, kteří ten kód vytvářejí. Existuje
proto, že samotná sada metrik dodávky může vypadat skvěle, zatímco lidé za ní
vyhořívají, tonou ve vyrušování nebo se tiše odpojují. Organizace, která
sleduje jen metriky DORA, je může rok nebo dva zlepšovat tím, že tým tlačí
víc a víc, a to až do chvíle, kdy odchody lidí, zhroucení kvality nebo
vyhoření celý zisk najednou smažou. Tato část je protiváhou.

Středobodem je [rámec SPACE](https://queue.acm.org/detail.cfm?id=3454124),
který vyvinuli výzkumníci z Microsoftu, GitHubu a University of Victoria
právě jako nápravu průmyslového zvyku měřit produktivitu vývojářů jediným,
snadno zmanipulovatelným zástupným ukazatelem, jako je počet řádků kódu nebo
počet commitů. SPACE zahrnuje pět dimenzí: spokojenost a pohodu, výkon,
aktivitu, komunikaci a spolupráci a efektivitu a plynulost. Ústřední
disciplínou rámce, a důvodem, proč s ním tato část zachází stejně přísně,
jako část 2 zachází se svými metrikami toku, je, že žádná jednotlivá
dimenze sama o sobě není důvěryhodná. Hodnota vzniká právě tím, že máte na
očích všech pět najednou, takže tým nemůže vypadat dobře v jedné ose tím,
že tiše poškozuje jinou.

U velkých týmů odpovídají metriky zkušenosti vývojářů na otázku, na kterou
DORA odpovědět nedokáže: je tento výkon dodávky udržitelný a udržuje si
organizace lidi, kteří ho vytvářejí? Velké podniky, které tuto část
ignorují, to obvykle zjistí z dat o odchodech a z výstupních rozhovorů, tedy
dlouho po vzniku škody. Státní správa, která často pracuje pod platovými
omezeními veřejného sektoru a nemůže soutěžit jen výší odměny, má obzvlášť
silné důvody brát zkušenost vývojářů jako plnohodnotnou, aktivně řízenou
oblast, a ne jako dodatek.

## Témata v této části

- **3.1 Rámec SPACE:** Všech pět dimenzí dohromady, proč žádná z nich sama o
  sobě není důvěryhodná a jak z nich sestavit skutečně vyváženou sadu metrik.
- **3.2 Metriky spokojenosti a pohody:** Měření naplnění, frustrace a rizika
  vyhoření, tedy dimenze, kterou žádná systémová telemetrie přímo nepozoruje.
- **3.3 Metriky výkonu a zástupné ukazatele výsledků:** Dimenze, která se
  nejsnáze zaměňuje s aktivitou, a jak místo toho měřit skutečný příspěvek k
  výsledkům.
- **3.4 Metriky aktivity a jejich meze:** Počty commitů, řádky kódu a proč je
  to dimenze, u které je nejnebezpečnější dávat jí příliš velkou váhu.
- **3.5 Metriky komunikace a spolupráce:** Jak informace skutečně proudí mezi
  lidmi a týmy a jak vypadá zdravý vzorec.
- **3.6 Efektivita a plynulost: hluboká práce a vyrušování:** Ochrana
  nepřerušovaného času, který skutečná inženýrská práce potřebuje, a měření
  tření, které ho narušuje.
- **3.7 Průzkumy zkušenosti vývojářů a metriky DevEx:** Jak vést průzkum, který
  přináší důvěryhodný signál, a ne soutěž popularity, a jak ho kombinovat s
  objektivními daty.

## Jak spolu témata souvisejí

Téma 3.1 představuje všech pět dimenzí SPACE najednou a témata 3.2 až 3.6
pak procházejí každou dimenzi do skutečné hloubky, v pořadí, v jakém je
výzkumníci SPACE představují. Téma 3.7 uzavírá část praktickou mechanikou
návrhu průzkumů, protože spokojenost, výkon i spolupráce se zčásti opírají o
data z vlastního hlášení (rozlišení mezi instrumentací a vlastním hlášením z
tématu 1.5 je v této části přímo relevantní) a špatně navržený průzkum
podkopává každé z předchozích témat.

Ústřední disciplína této části, vyváženost napříč dimenzemi místo síly v
jedné, je nejjasnějším pracovním příkladem zásady výsledků před výstupy z
tématu 1.3 aplikované na lidi, a ne na dodávací pipeline. Aktivita (téma 3.4)
je dimenze SPACE, která nejvíce odpovídá čistě výstupní metrice, a tato část
s ní tak zachází: je užitečná jako jeden vstup z pěti, ale nebezpečná jako
samostatný signál. Spolu s částí 2 tato část dokresluje obraz, který DORA
sama poskytnout nedokáže: nejen zda se software dodává rychle a bezpečně, ale
zda lidé, kteří ho dodávají, dokážou toto tempo udržet.
