# 3.2 Metriky spokojenosti a pohody

## Přehled a motivace

**Spokojenost a pohoda**, písmeno S ve SPACE (téma 3.1), je dimenze, kterou
žádná systémová telemetrie přímo nepozoruje. Zda inženýr považuje svou práci
za smysluplnou, zda se cítí podporován týmem, zda směřuje k vyhoření, nic z
toho nezanechá stopu v logu verzovacího systému ani v CI pipeline. Je nutné se
zeptat. Toto téma je o tom, jak se ptát dobře: jak navrhnout měření, které
přináší důvěryhodný signál o skutečně subjektivním a skutečně důležitém
stavu, a ne číslo, které vypadá přesně, ale měří téměř nic skutečného.

Tato dimenze je důležitá, protože je předstihovým ukazatelem nákladů, které
se projeví jinde, mnohem později a mnohem dráž. Klesající spokojenost
předpovídá odchody dřív než výstupní rozhovor. Rostoucí riziko vyhoření
předpovídá zhroucení kvality dřív, než ho ukáže míra vad. Organizace, která
sleduje jen metriky dodávky a aktivity, se o problému s pohodou dozví, až když
se z něj stane odchod, incident nebo tichý, setrvalý pokles výstupu, jehož
diagnostika trvá měsíce. Přímé měření spokojenosti a pohody organizaci
kupuje čas, aby mohla jednat dřív, než se to stane.

U velkých týmů je tato dimenze také místem, kde nejostřeji platí rozdíl mezi
diagnostickým a hodnoticím použitím z tématu 1.1. Data o spokojenosti
použitá k pochopení a zlepšení podmínek týmu jsou cenná a málo riziková.
Stejná data použitá k řazení týmů, nebo ještě hůř jednotlivců, do pořadí
téměř okamžitě poškodí samotný průzkum, protože lidé přestanou odpovídat
upřímně ve chvíli, kdy tuší, že odpověď bude použita proti nim nebo jejich
týmu. Velké podniky a státní správa se svými formálními cykly hodnocení
výkonu tomuto sklouznutí zvlášť podléhají a musí se proti němu výslovně
chránit.

## Klíčové zásady

- **Spokojenost a pohodu nelze pozorovat ze systémové telemetrie.** Tuto
  dimenzi je třeba zjišťovat dotazem, záměrně a dobře.
- **Anonymita není volitelná.** Jakákoli vnímaná souvislost mezi upřímnou
  odpovědí a osobním následkem ničí signál.
- **Tato dimenze je předstihový, ne zpožděný ukazatel.** Předpovídá odchody a
  problémy s kvalitou dřív, než se projeví jinde.
- **Vyhoření je specifický, rozpoznatelný vzorec, ne jen obecná nespokojenost.**
  Měřte ho výslovně a nespoléhejte jen na vágní skóre spokojenosti.
- **Trend má větší váhu než jakékoli jednotlivé měření.** Jediné skóre
  spokojenosti je snímek; skutečným signálem je trend napříč po sobě jdoucími
  průzkumy.

## Doporučení

### Používejte ověřené nástroje průzkumu místo vymýšlení vlastních

Pohoda a vyhoření mají zavedené, ověřené měřicí nástroje, nejznámější je
[Maslach Burnout Inventory](https://en.wikipedia.org/wiki/Maslach_Burnout_Inventory),
který měří vyhoření ve třech uznávaných dimenzích: emoční vyčerpání,
depersonalizace nebo cynismus a snížený pocit osobního naplnění. Převzetí z
zavedeného, ověřeného nástroje, i v krátké upravené verzi, přináší
důvěryhodnější data než ad hoc sada otázek vymyšlená uvnitř firmy, protože
ověřené nástroje už byly testovány, zda skutečně měří to, co tvrdí.

### Zaručte skutečnou anonymitu a buďte otevření v tom, jak jste to udělali

Výslovně uveďte, a myslete to vážně, že individuální odpovědi nelze vystopovat
k člověku, zejména v malých týmech, kde by se vzorce odpovědí jinak daly
odvodit. Použijte nástroj třetí strany, který organizace sama nemůže
deanonymizovat, zveřejňujte agregované výsledky jen nad minimální velikostí
skupiny (běžně pět a více respondentů), aby se v malých týmech nedalo nic
odvodit, a tuto politiku jasně sdělte, než někoho požádáte o účast. Jediný
případ, kdy se anonymita poruší, i nedopatřením, zničí důvěru ve všechny
budoucí průzkumy.

### Sledujte trend v čase, ne jedno izolované měření

Jediné skóre spokojenosti má samo o sobě omezenou diagnostickou hodnotu.
Klesající trend napříč třemi po sobě jdoucími cykly průzkumu je mnohem
silnější a použitelnější signál. Provádějte průzkum v konzistentním,
umírněném rytmu, běžně čtvrtletně, a výsledky vždy prezentujte spolu s
historickou trendovou čárou, ne jako izolované číslo, aby čtenáři i
respondenti mohli posuzovat skutečnou změnu, a ne jednorázový šum.

### Odlišujte obecnou spokojenost od specifického rizika vyhoření

Obecná otázka na spokojenost („jak jste spokojeni se svou prací?“) a otázka
specifická pro vyhoření („cítíte se kvůli své práci emočně vyčerpaní?“) měří
příbuzné, ale odlišné věci a tým může v první dosahovat rozumných hodnot,
zatímco ve druhé ukazuje skutečné varovné signály. Zařaďte do návrhu průzkumu
obojí a varovný signál vyhoření berte jako důvod k rychlejšímu a přímějšímu
navázání než obecný pokles spokojenosti.

### Doplňte data z průzkumů objektivními potvrzujícími signály, opatrně

Tam, kde je to možné, potvrzujte trendy spokojenosti objektivními signály,
které s pohodou věrohodně souvisejí: míra dobrovolných odchodů, trvalé
vzorce práce mimo pracovní dobu nebo rostoucí podíl nevyčerpané dovolené.
Používejte je jako potvrzení, nikdy jako náhradu za přímé ptaní, a dbejte na
to, aby se toto potvrzování nezměnilo v mechanismus sledování, který sám
poškozuje důvěru a ironicky i spokojenost.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Ad hoc interní otázky v průzkumu | Rychlé sestavení, přizpůsobené kontextu | Neověřené; není jasné, zda skutečně měří to, co tvrdí |
| Ověřený nástroj (např. Maslach Burnout Inventory, upravený) | Otestovaný, srovnatelný, důvěryhodnější signál | Vyžaduje víc přípravy a může potřebovat úpravu pro inženýrský kontext |
| Časté krátké rychlé průzkumy | Nízká únava respondentů, signál téměř v reálném čase | Menší hloubka každého průzkumu; riziko šumu při přehnané interpretaci |
| Řídké, hluboké průzkumy | Bohatý, podrobný signál | Pomalejší zachycení rychle se rozvíjejícího problému, jako je akutní vyhoření |

Ústředním napětím je **hloubka versus frekvence**. Hluboký, ověřený průzkum
prováděný čtvrtletně dává důvěryhodný, podrobný obraz, ale může minout
rychle se rozvíjející problém mezi cykly. Časté krátké rychlé průzkumy
zachytí problémy dřív, ale hrozí mělčí, hlučnější data a únava respondentů,
pokud se jich používá příliš. Napětí řešte tak, že jako hlavní nástroj
použijete hlubší, ověřený průzkum ve čtvrtletním rytmu, doplněný častější
velmi krátkou, nepovinnou kontrolou (jedna nebo dvě otázky) pro včasné
varování, aniž byste pokaždé žádali o stejnou hloubku zapojení.

## Otázky k diskusi s vaším týmem

1. **Používáme ověřený nástroj průzkumu, nebo otázky, které jsme si vymysleli
   sami bez důkazu, že skutečně měří spokojenost nebo vyhoření?** Pokud byl
   váš současný průzkum sestaven ad hoc, zvažte, zda by úprava podle
   zavedeného nástroje, jako je Maslach Burnout Inventory, přinesla
   důvěryhodnější data.

2. **Dokážeme upřímně zaručit anonymitu, včetně malých týmů, kde by se vzorce
   odpovědí jinak daly odvodit?** Projděte skutečné nástroje a praxi
   agregace a ověřte, zda by odhodlaný manažer v praxi mohl odvodit
   odpovědi jednotlivce, i když to podle směrnice nemá být možné.

3. **Viděli jsme někdy, že data o spokojenosti předznamenala nárůst odchodů
   nebo problém s kvalitou, který se projevil později v jiných metrikách?**
   Podívejte se na historii průzkumů proti datům o odchodech a incidentech a
   zjistěte, zda je zpětně viditelný vzorec předstihového ukazatele. Pokud
   jste to nikdy neověřovali, i to stojí za diskusi.

4. **Rozlišujeme v průzkumu obecnou spokojenost od specifického rizika
   vyhoření, nebo se spoléháme na jednu smíšenou otázku?** Tým může vypadat
   dobře v obecné spokojenosti, zatímco pod povrchem ukazuje skutečné
   varovné signály vyhoření. Ověřte, zda by váš současný nástroj tento rozdíl
   vůbec zachytil.

5. **Byla data o spokojenosti někdy použita, i neformálně, k porovnávání nebo
   řazení týmů?** Toto sklouznutí k hodnoticímu použití téměř okamžitě
   poškodí průzkum, protože respondenti změní odpovědi, jakmile tuší
   soutěžní následek.

6. **Jaká je naše skutečná míra odpovědí a co by nám sama klesající míra
   odpovědí říkala?** Klesající míra odpovědí v po sobě jdoucích průzkumech
   je sama signálem, často narušené důvěry v proces nebo únavy z průzkumů, a
   zaslouží vlastní prošetření, ne odbytí jako obtíž při sběru dat.

## Pohled podle sektorů

**Startup.** U hrstky lidí se formální anonymní průzkumy mohou zdát zbytečné a
přímý rozhovor často odhalí problémy se spokojeností rychleji než čtvrtletní
nástroj. Rizikem je zakladatel, který zaměňuje absenci stížností za absenci
problému. Zaveďte aspoň jednoduchou anonymní kontrolu, jakmile tým vyroste
za velikost, kdy spolu všichni mluví denně.

**Malá firma.** Jednoduchý, bezplatný nebo levný nástroj pro anonymní průzkumy,
spouštěný čtvrtletně s krátkou upravenou sadou ověřených otázek, je
dosažitelný i bez specializované funkce pro analýzu lidských dat. Odolejte
pokušení vynechat záruky anonymity proto, že tým působí jako jedna rodina.
Právě ta blízkost totiž ztěžuje přímé sdělení upřímné negativní zpětné vazby.

**Velký podnik.** Infrastruktura průzkumů v tomto měřítku vyžaduje skutečnou
investici: řádný nástroj třetí strany, politiku agregace s minimální
velikostí skupiny a jasnou, důsledně sdělovanou politiku zákazu hodnoticího
použití. Odměna je také úměrně větší, protože zachycení trendu vyhoření v
organizaci s velkým počtem lidí dřív, než vyvolá odchody, chrání mnohem
větší objem institucionální znalosti.

**Státní správa.** Tlak na udržení lidí vyplývající z platových omezení ve
veřejném sektoru dělá z této dimenze strategickou, nikoli volitelnou
záležitost. Data o pohodě mohou přímo odůvodnit rozpočtové požadavky na
nepeněžní investice do udržení lidí (nástroje, chráněný čas, řízení zátěže),
které platová omezení sama vyřešit nedokážou, pokud je sběr dat sám
dostatečně důvěryhodný, aby se na něj dalo s jistotou odvolávat.

## Příklady

**Velký podnik.** Platformní tým jedné firmy poskytující cloudovou
infrastrukturu dosahoval přes rok dobrého skóre obecné spokojenosti, zatímco
otázka specifická pro vyhoření, převzatá z podškály emočního vyčerpání z
Maslach Burnout Inventory, ukazovala stálý pokles ve čtyřech po sobě
jdoucích čtvrtletích. Vedení, zprvu nakloněné obavu odbýt, protože číslo
obecné spokojenosti vypadalo dobře, věc prošetřilo po druhém čtvrtletí
poklesu a zjistilo, že tým po zmrazení počtu míst téměř rok pohlcoval
neudržitelnou zátěž pohotovosti (téma 6.3). Obnovení dostatečného obsazení
pohotovosti obrátilo trend vyhoření během dvou čtvrtletí, dlouho předtím,
než se přeměnil v nárůst odchodů, který data firmy ukazovala jako typický
následek tohoto vzorce.

**Státní správa.** IT agentura jedné státní vlády, která dlouhodobě nemohla v
platech konkurovat soukromým zaměstnavatelům, použila data z průzkumu pohody
právě k vybudování rozpočtového argumentu pro politiku chráněného času na
soustředění místo zvýšení platů, které nemohla prosadit. Průzkum ukázal, že
frekvence vyrušování a zátěž schůzkami, a ne odměna, byly nejsilnějšími
prediktory úmyslu odejít mezi respondenty, kteří uvedli, že aktivně hledají
práci. Výsledná politika, která blokovala dvě nepřerušované odpolední okna
týdně pro soustředěnou inženýrskou práci, se časově shodovala s
měřitelným zlepšením skóre spokojenosti i dobrovolného udržení lidí v
následujícím roce, za zlomek nákladů, které by si vyžádalo konkurenceschopné
zvýšení platů.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností přímého měření spokojenosti a pohody je včasné varování:
organizace, která zachytí trend vyhoření celý rok předtím, než se přemění v
odchody, může zasáhnout za zlomek nákladů na nábor a zaškolení náhrady, jejíž
plná produktivita se obvykle dostaví až za měsíce od nástupu. Dobrovolný
odchod zkušeného inženýra stojí organizaci mnohem víc než infrastruktura
průzkumů, která mohla varování poskytnout.

Celkové náklady vlastnictví (TCO) zahrnují nástroje pro průzkumy, disciplínu
zaručení a udržení skutečné anonymity a závazek organizace jednat podle toho,
co data ukazují, místo aby je sbírala a nepříjemné výsledky ignorovala.
Poslední náklad, ochota jednat, bývá skutečným úzkým hrdlem, ne samotné
měření. Průzkum, který odhalí problém, jejž nikdo neřeší, podkopává důvěru v
nástroj stejně jistě jako porušená záruka anonymity.

## Antivzory a úskalí

- **Ad hoc, neověřené otázky v průzkumu:** dává data nejasné spolehlivosti.
- **Slabé nebo porušené záruky anonymity:** ničí upřímné odpovědi a důvěru v
  nástroj, často trvale.
- **Reakce na jediné měření místo sledování trendu:** přehnaně reaguje na šum
  nebo přehlédne skutečný pomalý pokles.
- **Míchání obecné spokojenosti s otázkami specifickými pro vyhoření:** může
  zakrýt skutečný varovný signál v průměru, který vypadá dobře.
- **Používání dat o spokojenosti k řazení nebo porovnávání týmů:** hodnoticí
  sklouznutí, které poškozuje upřímné odpovědi.
- **Sběr dat bez jednání podle nepříjemného výsledku:** podkopává důvěru v
  průzkum stejně důkladně jako porušený slib anonymity.

## Model zralosti

- **Úroveň 1, Zahájení:** Spokojenost a pohoda se neměří vůbec, nebo jen
  neformálním, nestrukturovaným rozhovorem.
- **Úroveň 2, Rozvoj:** Existuje ad hoc průzkum, ale chybí mu ověření,
  konzistentní rytmus nebo silná záruka anonymity.
- **Úroveň 3, Standardizace:** Ověřený nebo upravený nástroj průzkumu běží v
  konzistentním rytmu se silnou, sdělenou zárukou anonymity, v celé
  organizaci.
- **Úroveň 4, Řízení:** Trendy se aktivně sledují napříč po sobě jdoucími
  cykly, signály specifické pro vyhoření se odlišují od obecné spokojenosti a
  organizace má zdokumentovaný postup, jak jednat při varovných signálech.
- **Úroveň 5, Orchestrace:** Data o pohodě přímo ovlivňují plánování
  pracovních sil a investice do udržení lidí, opatrně potvrzovaná objektivními
  signály, a organizace dokáže ukázat konkrétní zásahy, které obrátily
  naměřený pokles dřív, než se z něj stal odchod nebo problém s kvalitou.

## Náměty k diskusi

1. Obstál by náš současný nástroj průzkumu při zkoumání, zda je skutečně anonymní?
2. Předpověděl někdy trend spokojenosti nebo vyhoření problém, který se později projevil jinde?
3. Jaký je náš postup, když se objeví výsledek průzkumu, který slyšet nechceme?
4. Rozlišujeme v našem měření riziko vyhoření od obecné spokojenosti?
5. Jakou nepeněžní investici by naše data o pohodě nejlépe odůvodnila právě teď?

## Hlavní poznatky

- Spokojenost a pohodu je třeba **zjišťovat přímým dotazem**; žádná systémová
  telemetrie tuto dimenzi nepozoruje.
- Používejte **ověřený nástroj**, kde je to možné, a zaručte skutečnou,
  dobře sdělenou **anonymitu**.
- Tato dimenze je **předstihový ukazatel** odchodů a problémů s kvalitou, které
  by se jinak projevily mnohem později a mnohem dráž.
- Odlišujte **obecnou spokojenost od specifického rizika vyhoření** a sledujte
  **trend v čase**, ne jediné měření.
- Nikdy tato data nepoužívejte k **řazení nebo porovnávání týmů**; takové
  sklouznutí téměř okamžitě poškodí upřímné odpovědi.

## Odkazy a další četba

- Maslach, Christina, a Susan E. Jackson, *Maslach Burnout Inventory*
  (ověřený, široce používaný nástroj pro měření vyhoření ve třech
  dimenzích).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck a Jenna Butler, „The SPACE of Developer
  Productivity“, *ACM Queue* (2021).
- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink
  (výzkum motivace a spokojenosti relevantní pro návrh průzkumů).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, Christina Maslach a Michael P. Leiter (organizační příčiny a
  zásahy proti vyhoření).
