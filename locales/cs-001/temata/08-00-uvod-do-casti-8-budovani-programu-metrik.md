# 8.0 Úvod do části 8: Budování programu metrik

Každá předchozí část této knihy pokrývala jednu rodinu metrik do hloubky: co
měřit, jak se s ní manipuluje a jaká pojistka tuto manipulaci zachytí. Tato
poslední věcná část se obrací od otázky *co* měřit k otázce *jak* vybudovat a
provozovat organizační program, který to všechno uvede do praxe. Organizace,
která přečetla každé téma této knihy, ale nikdy nepostaví dashboard, nerozhodne
o nástrojích, nesestaví plán zavedení a cestu ke zralosti, které tato část
pokrývá, má vynikající znalosti a žádný fungující program metrik. Tato část
existuje, aby tuto mezeru zacelila.

Pět témat zde sleduje přirozené pořadí skutečného budování programu metrik od
nuly nebo nápravy programu, který se odchýlil od zásad této knihy. Téma 8.1
pokrývá konkrétně návrh dashboardu: převádí mnoho metrik z částí 1 až 7 na
soudržnou, poctivou a použitelnou sadu pohledů. Téma 8.2 pokrývá rozhodnutí
„postavit, nebo koupit“, před nímž dříve či později stojí každá organizace u
svých nástrojů pro metriky. Téma 8.3 je nejvíce lidské téma této knihy; řeší
přímo strach, který zavádění metrik může vyvolat, a jak zabránit tomu, aby tento
strach kazil samotná data, na nichž program závisí, což ozvěnou opakuje
varování tématu 1.2 napříč celou knihou. Téma 8.4 sjednocuje pětiúrovňový
model zralosti každého tématu do jediného soudržného rámce pro organizační
sebehodnocení. Téma 8.5 uzavírá věcný obsah knihy konkrétní, postupnou adopční
cestou.

Pro velké týmy je tato část místem, kde se myšlenky této knihy buď stanou
trvalou organizační praxí, nebo zůstanou intelektuálně uspokojivým dokumentem,
který nikdo skutečně neprovede. Velké podniky a státní správa, s jejich
rozsahem a skutečným rizikem, že poloviční opatření přinesou horší výsledky
než žádný program metrik (hlavní varování tématu 8.3), se spoléhají na praktické
pokyny této části, aby převedly zásady knihy do zavedení, které skutečně
funguje, místo takového, které vyvolá strach, vytvoří zmanipulovaná data a
potvrdí nejhorší předpoklady každého skeptika o tom, co program metrik s týmem
dělá.

## Témata v této části

- **8.1 Návrh dashboardu inženýrských metrik:** Převedení mnoha metrik této
  knihy na soudržnou, poctivou, použitelnou sadu pohledů pro různé publikum.
- **8.2 Krajina nástrojů: postavit, nebo koupit:** Skutečné kompromisy při
  výběru nebo budování nástrojů pro metriky a jak se rozhodnout.
- **8.3 Zavádění metrik bez pěstování strachu:** Nejdůležitější praktické téma
  této části, o tom, jak zabránit programu metrik, aby vyvolal přesně to
  chování manipulace, před nímž kniha varuje od začátku do konce.
- **8.4 Model zralosti programů inženýrských metrik:** Sjednocený pětiúrovňový
  rámec zralosti, který spojuje individuální modely všech témat.
- **8.5 Postupná adopční cesta:** Konkrétní, etapová, postupná cesta od
  současného stavu vaší organizace ke zralému programu metrik.

## Jak spolu témata souvisejí

Téma 8.1 je místem, kde se abstraktní rodiny metrik z částí 1 až 7 stávají
konkrétním artefaktem, dashboardem, na který se skuteční lidé skutečně dívají.
Téma 8.2 pokrývá rozhodnutí o nástrojích, na kterém dashboard závisí. Téma
8.3 je pantovým tématem této části: řeší lidskou a organizační dynamiku, která
určuje, zda všechno, co kniha doporučila, skutečně vytváří důvěryhodná data,
nebo je tiše kazí strach, a přímo navazuje na varování před Goodhartovým
zákonem z tématu 1.2, jímž kniha celá začala. Téma 8.4 sjednocuje rámec
hodnocení, který už nabídlo každé předchozí téma samostatně, a téma 8.5
promění toto sjednocené hodnocení ve skutečný, postupný plán.

Zároveň je to část, kde se přílohy této knihy (část 9) stávají nejpříměji
užitečnými: šablony (téma 9.4) a kontrolní seznamy (téma 9.3), které kniha
poskytuje, jsou vytvořeny právě na podporu zavádění popsaného v této části a
sjednocené sebehodnocení zralosti (téma 9.5) je přímým společníkem rámce tématu
8.4. Čtěte tuto část jako odpověď knihy na otázku, kterou implicitně nastolila
každá dřívější část: když už víte, co měřit a jak to měřit poctivě, jak
skutečně vybudovat organizaci, která to dělá, udržitelně a ve velkém, aniž by
se celé úsilí zhroutilo pod právě tím tlakem k manipulaci, před nímž varovalo
téma 1.2 hned od první stránky.
