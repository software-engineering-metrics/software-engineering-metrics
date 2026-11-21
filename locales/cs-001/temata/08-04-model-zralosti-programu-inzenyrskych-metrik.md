# 8.4 Model zralosti programů inženýrských metrik

## Přehled a motivace

Každé téma v částech 1 až 7 této knihy končí vlastním pětiúrovňovým
[modelem zralosti](https://en.wikipedia.org/wiki/Capability_Maturity_Model),
vymezeným pro konkrétní rodinu metrik daného tématu. Toto téma dělá něco
jiného: ustupuje o krok a ptá se, jak vypadá zralost *programu* metrik jako
celku, tedy organizační schopnosti, která všechny ty jednotlivé metriky společně
vytváří, spravuje a jedná podle nich. Organizace může být na úrovni 4 ve
zralosti jednotlivých metrik DORA a přitom na úrovni 1 ve zralosti programu
jako celku, pokud má například vynikající instrumentaci, ale žádnou správu
(téma 1.4), nebo vynikající jednotlivé metriky, ale zavedení řízené strachem
(téma 8.3), které zkazilo podkladová data bez ohledu na to, jak dobře byla
každá metrika navržena.

Model tohoto tématu je postaven na pěti dimenzích, které protínají každou
jednotlivou rodinu metrik pokrytou touto knihou: správa a vlastnictví
(téma 1.4), kvalita instrumentace (téma 1.5), rovnováha mezi výsledky a výstupy
(téma 1.3, téma 7.4), kulturní důvěra (téma 8.3) a trvalé zlepšování
(disciplína vyřazování a revize, kterou téma 1.1 stanovilo hned na začátku
knihy). Celková zralost programu je realisticky minimum, nikoli průměr těchto
pěti dimenzí, protože vážná slabina v kterékoli z nich, zejména v kulturní
důvěře, může podkopat hodnotu síly ve všech ostatních, přesně jak přímo
argumentovalo téma 8.3.

Pro velké týmy dává tento sjednocený model vedení jediný, poctivý nástroj
organizačního sebehodnocení, odlišný od témat po tématech kontrol zralosti,
které kniha poskytuje po celou dobu, a doplňující je. Velké podniky, které
porovnávají zralost metrik napříč obchodními jednotkami, a státní správa, která
vykazuje zralost programu kontrolním orgánům, mají oba prospěch z tohoto
jediného, průřezového hodnocení, místo aby musely samy syntetizovat pětačtyřicet
samostatných odečtů zralosti na úrovni témat do soudržného celkového obrazu.

## Klíčové zásady

- **Zralost programu je minimum jeho dimenzí, nikoli průměr.** Vážná slabina
  v kulturní důvěře podkopává sílu všude jinde.
- **Pět průřezových dimenzí je správa, instrumentace, rovnováha výsledků,
  kulturní důvěra a trvalé zlepšování.** Každá dimenze spojuje vlákna z mnoha
  jednotlivých témat.
- **Tento model doplňuje, nenahrazuje modely zralosti na úrovni jednotlivých
  témat.** Používejte obojí společně pro úplný obraz.
- **Sebehodnocení by mělo být poctivé a konkrétní, ne aspirační.** Hodnoťte,
  kde skutečně jste, s konkrétními důkazy, nikoli kde hodláte být.
- **Přechod mezi úrovněmi vyžaduje záměrnou investici**, ne jen plynutí času;
  zralost se nehromadí automaticky.

## Doporučení

### Hodnoťte každou z pěti dimenzí nezávisle, s konkrétními důkazy

U správy zkontrolujte, zda má každá významná metrika jmenovaného vlastníka a
zdokumentovanou chartu (téma 1.4). U instrumentace zkontrolujte, zda metriky,
kde je to jen možné, pocházejí z automatizovaných zdrojů místo vlastního
hlášení (téma 1.5). U rovnováhy výsledků spočítejte skutečný poměr metrik
s převahou výsledků k metrikám s převahou výstupů na svých hlavních
dashboardech (téma 7.4). U kulturní důvěry poctivě posuďte, zda historie vašeho
zavádění nezahrnovala někdy zpackané, trestající použití metriky a jak bylo
řešeno (téma 8.3). U trvalého zlepšování zkontrolujte, zda má vaše
organizace zdokumentovanou historii vyřazování metrik, které přestaly stát za
svou existenci (téma 1.1). Každou dimenzi ohodnoťte nezávisle, než je
spojíte.

### Jako svůj poctivý celkový výsledek vezměte minimum napříč dimenzemi

Odolejte pokušení zprůměrovat pět skóre dimenzí do jediného, lichotivějšího
souhrnu. Program s vynikající instrumentací (úroveň 4), ale slabou kulturní
důvěrou (úroveň 1), není v žádném smysluplném smyslu programem úrovně 2 nebo 3;
slabá dimenze aktivně podkopává hodnotu silných, protože nedůvěryhodná data
zkažená manipulací z důvodu strachu se nezachrání tím, že byla sebrána
vynikající instrumentací. Vykazujte minimum poctivě, i když dává méně
lichotivý celkový obraz než průměr.

### Používejte tento model vedle, nikoli místo modelů na úrovni témat

Tento sjednocený model odpovídá na otázku „jak zralý je náš program celkově“;
jednotlivé modely na úrovni témat v částech 2 až 8 odpovídají na otázku „jak
zralá je naše praxe pro tuto konkrétní metriku“. Používejte obojí společně:
sjednocený model k určení, která průřezová dimenze nejvíc potřebuje investici,
a modely na úrovni témat k určení, které konkrétní rodiny metrik v rámci této
dimenze potřebují největší pozornost.

### Vracejte se k hodnocení v pevném rytmu, nikoli jen když to vyvolá krize

V souladu s důslednou disciplínou správy této knihy (téma 1.4) hodnoťte zralost
programu znovu v pravidelném rytmu, běžně ročně, a ne jen poté, co otázku
vynutí krize (odhalený incident manipulace, veřejná zpráva poškozující
důvěryhodnost). Program, který zkoumá svou zralost jen reaktivně, přichází o
šanci zachytit a řešit slábnoucí dimenzi dřív, než způsobí skutečný, nákladný
incident.

### Berte nízké skóre poctivě jako výchozí bod investice, nikoli jako propadlou známku

V souladu s diagnostickým, nikoli hodnoticím rámováním, které téma 1.1
stanovilo pro celou knihu, berte nízké skóre zralosti, v kterékoli dimenzi,
jako výchozí bod záměrného investičního plánu (adopční cesta tématu 8.5 je
přímým dalším krokem), ne jako verdikt, za který se stydět. Většina organizací
při poctivém hodnocení najde v tomto modelu někde skutečné slabiny; produktivní
reakcí je cílená investice, ne obranný postoj k číslu.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Průměrování pěti skóre dimenzí | Dává jediné, jednoduché, lichotivější číslo | Skrývá kritickou slabinu jedné dimenze, která podkopává ostatní |
| Vzetí minima napříč dimenzemi | Poctivé, použitelné, správně určuje skutečné omezení | Může působit odrazujícím dojmem, pokud jedna dimenze výrazně zaostává |
| Používání jen modelů na úrovni témat | Podrobné pokyny specifické pro metriky | Míjí průřezový pohled na celkové zdraví programu |
| Používání jen tohoto sjednoceného modelu | Jednoduché, na vysoké úrovni | Míjí konkrétní, použitelné detaily, které poskytují modely na úrovni témat |

Hlavní napětí je **jednoduchost versus poctivost**, což ozvěnou připomíná
varování tématu 5.5 před falešně přesným jediným číslem. Zprůměrované skóre
je jednodušší a pohodlnější k vykázání, ale aktivně skrývá skutečné omezení
důvěryhodnosti a hodnoty vašeho programu jako celku. Napětí vyřešte ve
prospěch poctivosti: vykazujte minimum a používejte společně tento sjednocený
model i jednotlivé modely na úrovni témat pro úplný, přesný a použitelný
obraz.

## Otázky k diskusi s vaším týmem

1. **Na jaké úrovni skutečně skórují při poctivém a nezávislém hodnocení naše
   pět dimenzí, tedy správa, instrumentace, rovnováha výsledků, kulturní
   důvěra a trvalé zlepšování?** Projděte každou dimenzi výslovně, s
   konkrétními důkazy místo dojmu, než je spojíte do celkového hodnocení.

2. **Která dimenze je naše nejslabší a odpovídá to naší intuici o celkovém
   zdraví programu, nebo to odhaluje něco, co jsme dosud přímo nepojmenovali?**
   Nízké skóre konkrétně v kulturní důvěře může například podkopat důvěru v
   data, která jinak vypadají technicky vynikající.

3. **Zprůměrovali jsme dosud své silné a slabé stránky do lichotivějšího
   celkového obrazu, místo abychom poctivě vykazovali svou nejslabší dimenzi
   jako skutečné omezení?** Buďte upřímní v tom, jak vaše organizace dosud
   mluvila o vlastní zralosti metrik.

4. **Kdy jsme naposledy formálně znovu posoudili zralost celého programu a
   vyvolala to krize, nebo záměrný pravidelný rytmus?** Pokud jen krize,
   probraťte, jak by vypadal pravidelný rytmus hodnocení do budoucna.

5. **Jak by konkrétně vypadala cílená investice do naší nejslabší dimenze na
   příští čtvrtletí?** Přejděte přímo od hodnocení k činu a propojte
   diagnostiku tohoto tématu s adopční cestou tématu 8.5.

6. **Jak by naše sebehodnocení vyšlo ve srovnání s poctivým externím
   posouzením někým mimo naši organizaci?** Tato otázka ověřuje, zda vaše
   interní hodnocení samo nepodléhá části téhož optimistického zkreslení, před
   nímž kniha varuje po celou dobu, a stojí za to ho pravidelně ověřovat
   skutečně vnějším pohledem.

## Pohled podle sektorů

**Startup.** Formální hodnocení v pěti dimenzích je při velmi malém měřítku
pravděpodobně zbytečné, protože neformální povědomí obvykle pokryje většinu
toho, co by model odhalil. Návyk, který stojí za brzké přijetí, je prostě
poctivost zejména o kulturní důvěře, protože raná kultura metrik mladé firmy
klade základ, který se po výrazném růstu organizace mění mnohem hůř.

**Malá firma.** Jednoduchý, poctivý, neformální průchod pěti dimenzemi jednou
ročně, i bez formálního bodování, zachytí většinu hodnoty tohoto tématu, aniž by
v tomto měřítku potřeboval strukturovaný proces hodnocení.

**Velký podnik.** Tento sjednocený model je zvlášť cenný pro spravedlivé
srovnání zralosti metrik napříč mnoha obchodními jednotkami, protože srovnání
téma po tématu napříč desítkami týmů by bylo nepraktické. Použijte ho k
určení priorit investic v celé organizaci směrem k dimenzi, která ukazuje
nejrozšířenější slabinu napříč jednotkami.

**Státní správa.** Zdokumentované, poctivé sebehodnocení zralosti podle tohoto
sjednoceného modelu je skutečně užitečným artefaktem pro prokázání důslednosti
programu kontrolnímu orgánu, pokud je hodnocení vedeno poctivě, nikoli
aspirativně. Zvažte pravidelné externí posouzení samotného sebehodnocení,
zejména u dimenze kulturní důvěry, kterou je nejtěžší přesně posoudit z čistě
vnitřního pohledu.

## Příklady

**Velký podnik.** První sebehodnocení jedné logistické technologické
společnosti ohodnotilo dimenzi instrumentace úrovní 4 (automatizovaný,
komplexní sběr dat z pipeline a systémů), ale dimenzi kulturní důvěry úrovní
1, v návaznosti na neřešený incident zneužití metriky před dvěma lety, který
nebyl nikdy přímo uznán ani napraven (což přímo ozvěnou připomíná příklad státní
správy z tématu 8.3). Prvním pudem vedení bylo zprůměrovat to na slušný celkový
obraz úrovně 2 nebo 3; poctivější použití hodnocení podle minima, jaké toto
téma doporučuje, správně určilo kulturní důvěru jako skutečné omezení hodnoty
celého programu, protože i vynikající instrumentace vytvářela data, jimž
inženýři, kteří o minulém incidentu věděli, stále plně nedůvěřovali a
neřekli do nich poctivě. Cílená investice konkrétně do nápravy kulturní důvěry,
přímo podle pokynů tématu 8.3, měla v důsledku tohoto poctivého hodnocení podle
minima přednost před další investicí do instrumentace.

**Státní správa.** Národní statistický úřad, který provedl své první formální
sebehodnocení zralosti podle tohoto sjednoceného modelu v rámci širší revize
technologické správy, zjistil, že jeho dimenze správy dopadla dobře (jasné
vlastnictví, zdokumentované charty), ale dimenze rovnováhy výsledků špatně, se
zdrcující většinou sledovaných metrik založených na výstupu a aktivitě, přestože
argument části 7 pro převahu výsledků technické vedení úřadu intelektuálně
dobře chápalo. Toto poctivé, konkrétní zjištění, místo vágního obecného pocitu,
že „bychom měli víc měřit výsledky“, dalo následnému investičnímu plánu úřadu
(téma 8.5) konkrétní výchozí bod založený na důkazech a následné vykazování
dozorčí radě úřadu toto hodnocení zralosti výslovně uvedlo jako základ
přesměrované strategie investic do metrik.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratnost poctivého sebehodnocení zralosti podle minima spočívá v tom, že
správně určí skutečné omezení hodnoty programu metrik, místo aby se dál
investovalo do už silné dimenze, zatímco slabá dál podkopává
důvěryhodnost celého programu, přesně podle vzorce, který ilustrují oba
příklady výše. Tento cílící účinek je hlavní hodnotou modelu: směruje omezenou
investici do zlepšení tam, kde skutečně pohne celkovou zralostí programu, místo
tam, kde je investice právě nejsnazší nebo nejznámější.

Celkové náklady vlastnictví (TCO) tvoří samotné úsilí o hodnocení, mírné a
periodické, vážené proti riziku, že se bude dál investovat do už silné
dimenze, zatímco neřešená slabá, zejména kulturní důvěra, dál tiše kazí hodnotu
všeho ostatního, co program vybudoval.

## Antivzory a úskalí

- **Průměrování skóre dimenzí do lichotivějšího souhrnu:** skrývá skutečné
  omezení celkové hodnoty programu.
- **Hodnocení jen aspirativně, podle deklarované politiky místo skutečné
  praxe:** vytváří nepřesný, příliš optimistický obraz.
- **Používání tohoto sjednoceného modelu jako náhrady, nikoli doplňku modelů
  na úrovni témat:** ztrácí konkrétní, použitelné detaily, které tyto
  jednotlivé modely poskytují.
- **Přehodnocování jen poté, co otázku vynutí krize:** míjí šanci zachytit a
  proaktivně řešit slábnoucí dimenzi.
- **Brát nízké skóre jako propadlou známku místo výchozího bodu investice:**
  zve k obranným postojům místo produktivní, diagnostické reakce, kterou kniha
  doporučuje po celou dobu.
- **Nikdy nehledat poctivý externí pohled na sebehodnocení:** riskuje, že
  stejné optimistické zkreslení, před nímž kniha po celou dobu varuje, ovlivní
  i samotné hodnocení.

## Model zralosti

- **Úroveň 1, Zahájení:** Neexistuje formální průřezové hodnocení;
  jednotlivé rodiny metrik mohou být hodnoceny samostatně, ale celkové zdraví
  programu zůstává neprozkoumáno.
- **Úroveň 2, Rozvoj:** Existuje určité neformální povědomí o celkových
  silných a slabých stránkách programu, ale nebylo provedeno strukturované
  hodnocení v pěti dimenzích.
- **Úroveň 3, Standardizace:** Strukturované, poctivé hodnocení v pěti
  dimenzích podle minima se provádí s konkrétními důkazy v celé organizaci.
- **Úroveň 4, Řízení:** Hodnocení se opakuje v pravidelném rytmu a jeho
  zjištění přímo a důsledně určují priority cílených investic.
- **Úroveň 5, Orchestrace:** Organizace má prokázanou, trvalou praxi poctivého
  sebehodnocení, včetně pravidelného externího posouzení, a umí ukázat
  konkrétní investiční rozhodnutí, která zjištění hodnocení přímo vyvolala.

## Náměty k diskusi

1. Jaké je naše poctivé skóre založené na důkazech v každé z pěti dimenzí právě teď?
2. Která dimenze je naše skutečné omezení a odpovídá to naší intuici?
3. Zprůměrovali jsme někdy své skóre do lichotivějšího obrazu, než by ukázalo minimum?
4. Kdy jsme naposledy formálně znovu hodnotili a bylo to proaktivní, nebo vynucené krizí?
5. Co by poctivé externí posouzení našeho sebehodnocení pravděpodobně odhalilo?

## Hlavní poznatky

- Zralost programu zahrnuje pět průřezových dimenzí: **správu, instrumentaci,
  rovnováhu výsledků, kulturní důvěru a trvalé zlepšování**.
- Celková zralost je **minimum napříč dimenzemi, nikoli průměr**; slabina v
  kulturní důvěře podkopává sílu všude jinde.
- Používejte tento sjednocený model **vedle, nikoli místo** jednotlivých modelů
  zralosti na úrovni témat v celé této knize.
- **Hodnoťte znovu v pravidelném rytmu**, místo čekání, až otázku vynutí
  krize.
- Berte nízké skóre jako **poctivý výchozí bod investice**, nikoli propadlou
  známku, v souladu s diagnostickým rámováním knihy po celou dobu.

## Odkazy a další četba

- *Capability Maturity Model Integration (CMMI)*, Software Engineering
  Institute (obecná metodika modelu zralosti, z níž přístup tohoto tématu
  čerpá strukturální inspiraci).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (výzkumný základ jednotlivých modelů zralosti na
  úrovni témat, které tento sjednocený model spojuje).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (organizační hodnocení zdraví a dysfunkcí programu metrik).
- *The Fifth Discipline: The Art and Practice of the Learning Organization*,
  Peter M. Senge (organizační sebehodnocení a trvalé zlepšování na úrovni
  systémů).
