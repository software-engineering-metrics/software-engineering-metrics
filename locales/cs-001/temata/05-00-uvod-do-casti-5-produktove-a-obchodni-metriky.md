# 5.0 Úvod do části 5: Produktové a obchodní metriky

První čtyři části této knihy měří vnitřní svět inženýrství: dodávání, zkušenost
vývojářů a kvalitu kódu. Tato část vystupuje za tuto hranici a klade otázku, jíž
každá inženýrská metrika nakonec slouží, ať přímo, nebo o několik kroků dál:
pomohla tato práce skutečně byznysu a lidem, kteří používají to, co se vytváří.
Téma 1.3 na začátku knihy stanovilo výsledky před výstupy jako řídicí zásadu;
právě tady se tato zásada setkává se svou nejostřejší zkouškou, protože
produktové a obchodní výsledky jsou nejdál od přímé kontroly kteréhokoli
jednotlivého inženýra a nejhůř se čistě přičítají inženýrskému úsilí.

Právě kvůli této obtížnosti na této části záleží. Organizace, která nikdy
nepropojí své metriky dodávání a kvality s produktovými a obchodními výsledky,
riskuje, že se krásně optimalizuje na špatnou věc: rychle dodává, s výborným
pokrytím testy, funkci, kterou nikdo nepoužívá, nebo udržuje dokonalou kvalitu
kódu v systému, jehož základní hodnotová nabídka zákazníky tiše přestala
zajímat. Pět témat této části, uniklé vady, přijetí funkcí, výsledky pro
zákazníky a byznys, jednotková ekonomika a návratnost investic, dává vedení
inženýrství slovník pro toto propojení a vedení byznysu způsob, jak hodnotit
investice do inženýrství v termínech, na kterých mu skutečně záleží.

U velkých týmů se právě v této části často vyhrává nebo prohrává důvěryhodnost
celého programu metrik u výkonných zainteresovaných stran. Vedení velkého
podniku, které schvaluje platformní investice za miliony, i orgány dohledu ve
státní správě, které schvalují veřejné technologické rozpočty, potřebují
odpovědi formulované v termínech obchodních výsledků nebo výsledků pro občany,
ne frekvence nasazení či pokrytí testy, ať jsou tyto vnitřní metriky řízeny
sebelépe. Tato část je místem, kde se pečlivé, pojistkami chráněné metriky
zbytku knihy konečně napojují na tuto vnější konverzaci zaměřenou na výsledky.

## Témata v této části

- **5.1 Míra uniklých vad a úniky kvality:** Metrika kvality, která nejpřímněji
  odráží to, co zákazníci skutečně zažívají, na rozdíl od vnitřních metrik
  kvality z části 4.
- **5.2 Přijetí funkcí a metriky používání:** Zda se to, co inženýrství
  vytvořilo, skutečně používá, a konkrétní způsoby, jak se data o přijetí
  špatně interpretují.
- **5.3 Metriky zákaznických a obchodních výsledků:** Propojení inženýrské práce
  s výsledky, na kterých skutečně záleží byznysu nebo veřejnému poslání.
- **5.4 Náklady a jednotková ekonomika inženýrství:** Vyjádření inženýrských
  nákladů v termínech, které může finanční zainteresovaná strana použít přímo.
- **5.5 Návratnost investic do inženýrských iniciativ:** Sestavení obhajitelného,
  poctivého případu ROI pro velkou inženýrskou investici a stejná poctivost,
  když případ neobstojí.

## Jak spolu témata souvisejí

Téma 5.1 začíná nejblíže domovu, kvalitou tak, jak ji zákazníci zažívají přímo,
a je přirozeným mostem od vnitřních metrik kvality z části 4. Téma 5.2 klade
další otázku, jakmile je kvalita zohledněna: používá někdo vůbec to, co bylo
postaveno. Téma 5.3 rozšiřuje čočku ještě dál na celou škálu zákaznických a
obchodních výsledků, na kterých organizaci záleží a jejichž jedním signálem
z několika je používání. Témata 5.4 a 5.5 pak celou část obracejí k financím:
vyjadřují inženýrské náklady a návratnost v termínech, které se přímo napojují
na rozpočtová a investiční rozhodnutí, a uzavírají smyčku, kterou tato část
otevřela otázkou, zda inženýrské úsilí skutečně pomohlo.

Témata této části se obzvlášť silně opírají o statistickou gramotnost z tématu
1.6, protože byznysové a produktové výsledky jsou často zašuměné, zkreslené
tržními podmínkami a pomalu se potvrzují, tedy přesně za podmínek, kdy chyby,
před nimiž téma 1.6 varuje, nejspíš vyrobí sebevědomý, ale chybný závěr. Čtěte
tuto část spolu s částí 7, kde přechod ke generativní umělé inteligenci zvyšuje
sázky na správné měření výsledků právě proto, že objem výstupu, jak témata této
části opakovaně tvrdí, nikdy nebyl tím správným, co optimalizovat.
