# 8.3 Wdrażanie metryk bez zasiewania strachu

## Przegląd i motywacja

Ten temat jest w istotnym sensie praktycznym ukoronowaniem wszystkiego, co
ta książka głosi od momentu, gdy temat 1.2 wprowadził prawo Goodharta:
program metryk wdrożony źle, w sposób wywołujący strach zamiast zaufania,
gwarantuje dokładnie to zachowanie polegające na manipulowaniu, przed którym
ostrzegał każdy kolejny temat, niezależnie od tego, jak starannie
zaprojektowano każdą pojedynczą metrykę. Organizacja może dopracować każdy
szczegół techniczny, uczciwą wizualizację, parowanie barier, staranny nadzór,
a mimo to stworzyć zepsuty, niegodny zaufania program metryk, jeśli samo
wdrożenie uczy inżynierów, że te liczby istnieją po to, by ich osądzać, a
nie by im pomagać.

Mechanizm jest prosty i dobrze udokumentowany w badaniach nad zachowaniami
organizacyjnymi, które ta książka cytuje od początku do końca: ludzie, którzy
boją się, że metryka zostanie użyta przeciwko nim, co podważa
[bezpieczeństwo psychologiczne](https://en.wikipedia.org/wiki/Psychological_safety),
reagują dokładnie tak, jak przewiduje temat 1.2: optymalizują liczbę, a nie
leżącą pod nią rzeczywistość, ponieważ zachęta do ochrony siebie jest
natychmiastowa i osobista, a szkoda dla uczenia się organizacji jest
rozproszona i opóźniona. To nie jest wada charakteru jednostki; to racjonalna
reakcja na realne zagrożenie, a jedyną trwałą naprawą jest usunięcie
zagrożenia, a nie proszenie ludzi, by mimo niego zachowywali się uczciwiej.

W dużych zespołach wskazówki tego tematu mają największe znaczenie w
momencie początkowego wdrożenia, gdy zaufanie nie zostało jeszcze ustanowione
w żadną stronę, a pierwsze wrażenia ustalają trwałe oczekiwania. Duże
przedsiębiorstwa wprowadzające nowy, ogólnoorganizacyjny program metryk
ryzykują, że jeden źle obsłużony wczesny incydent, użycie metryk jednego
zespołu karząco, zatruje zaufanie w całym wdrożeniu. Administracja publiczna,
często wprowadzająca programy metryk w kontekście istniejącej ochrony
związkowej, kultury służby cywilnej lub historycznej nieufności wobec
inicjatyw pomiarowych, potrzebuje wskazówek tego tematu stosowanych ze
szczególną starannością i cierpliwością.

## Kluczowe zasady

- **Strach psuje dane szybciej i dokładniej niż jakakolwiek wada techniczna
  w projekcie metryki.** Doskonale zaprojektowana metryka wdrożona źle i tak
  zostanie zmanipulowana.
- **Zaufanie buduje się wykazanym, konsekwentnym użyciem bez karania, a nie
  samym oświadczeniem polityki.** Czyny przez wiele cykli budują zaufanie;
  same słowa nie.
- **Wczesne incydenty wdrożenia ustalają trwałe oczekiwania.** To, jak
  pierwsze kilka razy metryka dotknie czegoś istotnego, decyduje o tym, jak
  cały program będzie postrzegany w przyszłości.
- **Przejrzystość co do celu i procesu zmniejsza strach bardziej niż samo
  uspokajanie.** Ludzie ufają temu, co widzą i rozumieją, a nie tylko temu,
  co im powiedziano.
- **To trwała dyscyplina organizacyjna, a nie jednorazowe ogłoszenie
  wdrożenia.** Strach może wracać stopniowo nawet po naprawdę wiarygodnym
  początku.

## Rekomendacje

### Komunikuj cel i jawne niecele jawnie, przed wdrożeniem, a nie gdy pojawią się obawy

Idąc za dyscypliną karty metryk z tematu 1.4, komunikuj cel nowego programu
metryk i, co kluczowe, jego jawne niecele (nigdy nieużywany do indywidualnej
oceny wyników bez osobnej, wyraźnie ujawnionej polityki, zgodnie z tematem
1.1) przed uruchomieniem, a nie reaktywnie po tym, jak inżynierowie już
zaczęli się martwić. Proaktywna, wstępna przejrzystość co do tego, do czego
metryka nie służy, zapobiega lękliwym domysłom, które w przeciwnym razie
wypełniają próżnię i kształtują wczesne, trudne do odwrócenia wrażenia.

### Zaangażuj mierzonych w proces projektowania

Inżynierowie, którzy pomagają projektować metryki opisujące ich własną pracę,
znacznie rzadziej się ich boją lub nimi irytują niż ci, którym narzucono
system bez udziału. Zaangażuj przedstawicieli zespołów bezpośrednio w wybór
tego, jakie metryki śledzić, jak je wizualizować i jakie bariery stosować,
zgodnie ze stałym naciskiem tej książki na własność na poziomie zespołu
(temat 1.4), a nie czysto odgórny mandat.

### Zacznij od użycia wyłącznie diagnostycznego i udowadniaj je przez wiele cykli, zanim w ogóle rozważysz użycie oceniające

Idąc wprost za rozróżnieniem diagnostyczne kontra oceniające z tematu 1.1:
zacznij nowy program metryk w czysto diagnostycznym trybie, używanym tylko do
zrozumienia i poprawy systemów, bez żadnego związku z oceną jednostek czy
zespołów, i utrzymuj tę dyscyplinę widocznie przez kilka cykli
raportowania, zanim rozpocznie się jakakolwiek rozmowa o szerszym użyciu.
Zaufanie zbudowane w ten sposób, przez wykazaną powściągliwość w czasie, jest
znacznie trwalsze niż zaufanie deklarowane samym dokumentem polityki.

### Odpowiedz na pierwszy źle obsłużony incydent natychmiast i widocznie

Jeśli metryka zostanie użyta karząco, nawet raz, nawet nieformalnie, zajmij
się tym natychmiast, widocznie i bezpośrednio, zamiast pozwalać, by sprawa
przeszła po cichu. Reakcja organizacji na pierwszy incydent złego użycia ma
nieproporcjonalnie duże znaczenie dla kształtowania zaufania całego zespołu
lub organizacji do całego programu w przyszłości; szybka, przejrzysta
korekta sygnalizuje prawdziwe zaangażowanie w deklarowany cel bez karania, a
milczenie albo cichy, niezaadresowany wyjątek potwierdza dokładnie ten
strach, który napędza manipulowanie od początku.

### Uczyń ryzyko manipulowania wspólną, przejrzystą rozmową, a nie ukrytym zmartwieniem zarządzających

Zamiast traktować ryzyko manipulowania jako coś, o co kierownictwo martwi się
prywatnie, podziel się logiką parowania barier z tematu 1.2 otwarcie z
mierzonymi zespołami: wyjaśnij wprost, dlaczego dana bariera istnieje, jaki
wzorzec manipulacji ma wychwytywać, i zaproś zespół do własnej oceny, czy
bariera jest dobrze zaprojektowana. Ta przejrzystość, traktująca cały
zespół jako partnerów w zapobieganiu manipulowaniu, a nie podmioty, które
się obserwuje pod tym kątem, buduje zasadniczo inną relację z programem
metryk niż system, który po cichu patroluje manipulacje z góry, nigdy nie
omawiając ryzyka otwarcie.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Odgórny mandat z minimalnym udziałem zespołów | Szybkie wdrożenie, spójny projekt | Duże ryzyko manipulowania napędzanego strachem i niskie zaufanie od początku |
| Wdrożenie z udziałem zespołów, współprojektowane | Buduje prawdziwe zaufanie i poparcie, niższe ryzyko manipulowania | Wolniejsze wdrożenie, wymaga więcej koordynacji |
| Natychmiastowe użycie oceniające od pierwszego dnia | Wydaje się efektywne, szybko łączy metryki z konsekwencjami | Wywołuje maksymalny strach i ryzyko manipulowania, zanim ustanowiono jakiekolwiek zaufanie |
| Wydłużony okres sprawdzania wyłącznie diagnostycznego przed jakimkolwiek użyciem oceniającym | Buduje trwałe, oparte na dowodach zaufanie | Wolniej realizuje przypadek użycia oceniającego, którego kierownictwo może ostatecznie chcieć |

Główne napięcie to **tempo wdrożenia kontra budowanie zaufania**. Szybkie,
odgórne wdrożenie szybko uruchamia program metryk, ale z realnym ryzykiem
wywołania dokładnie tego strachu i manipulowania, przed którym ta książka
ostrzega od pierwszego tematu; wolniejsze wdrożenie z udziałem zespołów,
zaczynające od diagnostyki, trwa dłużej, ale buduje trwałe zaufanie, dzięki
któremu zbierane dane w ogóle są warte zbierania. Rozstrzygnij to napięcie
stanowczo na korzyść budowania zaufania, ponieważ program metryk, który
startuje szybko, ale produkuje zmanipulowane, niegodne zaufania dane, w
istotnym sensie nie osiągnął niczego, za czym ta książka się opowiada,
niezależnie od tego, jak szybko go wdrożono.

## Pytania do omówienia z zespołem

1. **Czy cel i jawne niecele naszego obecnego programu metryk zostały
   zakomunikowane przed wdrożeniem, czy inżynierowie dowiedzieli się o nim
   najpierw, a uspokajające słowa o sposobie jego użycia usłyszeli dopiero
   później?** Jeśli uspokajanie przyszło reaktywnie, a nie proaktywnie, sama ta
   kolejność mogła już negatywnie ukształtować wczesne zaufanie, co warto
   uczciwie nazwać.

2. **Czy mierzeni byli zaangażowani w projektowanie metryk opisujących ich
   własną pracę, czy system narzucono bez udziału?** Oceń swój faktyczny
   proces wdrożenia według tego konkretnego testu, bo zaangażowanie ma
   znaczenie niezależnie od tego, jak dobry okazał się projekt metryk.

3. **Czy nasz program metryk utrzymał naprawdę wyłącznie diagnostyczne
   użycie przez wiele cykli raportowania, czy użycie oceniające wkradło się
   wcześniej, niż zaleciłoby wdrożenie budujące zaufanie?** Prześledź faktyczną
   historię uczciwie; dryf często zachodzi stopniowo i nieformalnie, a nie
   przez jedną jawną zmianę polityki.

4. **Czy metryka kiedykolwiek została użyta karząco, nawet raz, nawet
   nieformalnie, i jak organizacja zareagowała?** Jeśli tak się stało, oceń
   uczciwie, czy reakcja była szybka i widoczna, czy cicha i niezaadresowana,
   bo ta reakcja kształtowała zaufanie do całego programu znacznie
   bardziej niż sam pierwotny incydent.

5. **Czy mierzone zespoły rozumieją, dlaczego istnieje każda bariera, czy
   logika zapobiegania manipulowaniu pozostaje prywatnym zmartwieniem
   zarządzających, o którym nigdy im się wprost nie mówi?** Omówcie, czy
   rozumowanie o barierach (temat 1.2) w twojej organizacji faktycznie
   zostało przejrzyście udostępnione, czy pozostało niewypowiedzianą,
   zakulisową decyzją projektową.

6. **Gdybyśmy dziś zaczęli wdrażanie metryk od nowa, stosując w pełni
   wskazówki tego tematu, jak bardzo proces różniłby się od tego, co
   faktycznie się stało?** To retrospektywne ćwiczenie myślowe często
   ujawnia konkretne, nazywalne miejsca, w których budowanie zaufania
   skrócono pod presją czasu, co warto wykorzystać do nauki, nawet jeśli
   pierwotnego wdrożenia nie da się cofnąć.

## Perspektywa sektorowa

**Startup.** Zaufanie jest w tej skali często łatwiejsze do ustanowienia, bo
bezpośrednia codzienna rozmowa naturalnie zapewnia przejrzystość zalecaną w
tym temacie. Ryzyko polega na pominięciu świadomej komunikacji celu i
nieceli tylko dlatego, że wydaje się zbędna w małym, zżytym zespole, a to
założenie może po cichu się załamać, gdy zespół rośnie i dołączają nowe
osoby bez tego samego wspólnego kontekstu.

**Mała firma.** Prosta, bezpośrednia rozmowa o tym, dlaczego wprowadzana jest
nowa metryka i do czego będzie, a do czego nie będzie używana, przeprowadzona
przed wdrożeniem, a nie po ujawnieniu się obaw, chwyta większość wartości
tego tematu bez potrzeby formalnego procesu w tej skali.

**Duże przedsiębiorstwo.** Skala i bezosobowość dużej organizacji sprawiają,
że wskazówki tego tematu są zarazem trudniejsze do dobrego wykonania i
bardziej krytyczne dla właściwego wykonania, bo jeden źle obsłużony incydent
może zatruć zaufanie w dziesiątkach zespołów, które słyszą o nim z drugiej
ręki, zamiast doświadczyć go bezpośrednio. Zainwestuj świadomie w
wydłużony okres sprawdzania zaczynający od diagnostyki, zalecany w tym
temacie, i ustanów jasny, szybki, widoczny protokół reakcji na każdy incydent
złego użycia metryk, zanim jakiś wystąpi.

**Administracja publiczna.** Organizacje sektora publicznego często
wprowadzają programy metryk w kontekście istniejącej ochrony związkowej,
ugruntowanej kultury służby cywilnej, a w niektórych przypadkach historycznej
nieufności wobec inicjatyw pomiarowych związanych z dawnymi kontrowersjami
wokół zarządzania wynikami. Stosuj wskazówki tego tematu ze szczególną
cierpliwością i formalnością, potencjalnie angażując bezpośrednio
przedstawicieli związków lub pracowników w proces projektowania, i oczekuj,
że oś czasu budowania zaufania będzie naprawdę dłuższa niż w typowym
kontekście sektora prywatnego.

## Przykłady

**Przedsiębiorstwo.** Początkowe wdrożenie kompleksowego panelu metryk
inżynierskich w firmie programistycznej, zaprojektowanego w całości przez
centralny zespół platformowy bez udziału zespołów, spotkało się z
powszechnym, cichym oporem: inżynierowie w całej organizacji w ciągu kilku
tygodni zaczęli nieformalnie manipulować własnymi raportowanymi liczbami,
dokładnie tak, jak temat 1.2 przewiduje dla systemu metryk nieufanego i
narzuconego z góry. Ponowne uruchomienie sześć miesięcy później, tym razem z
bezpośrednim udziałem przedstawicieli zespołów w wyborze metryk i
projektowaniu barier oraz jawnym zobowiązaniem do sześciomiesięcznego okresu
wyłącznie diagnostycznego, a następnie jego prawdziwym dotrzymaniem, przed
jakąkolwiek rozmową o szerszym użyciu, dało mierzalnie wiarygodniejsze dane w
ciągu roku: wewnętrzny audyt porównujący zgłaszane samodzielnie i
instrumentowane przez potok liczby wdrożeń wykazał, że różnica między nimi
zmniejszyła się znacząco w porównaniu z pierwszymi miesiącami pierwotnego
wdrożenia.

**Administracja publiczna.** Pierwsza próba wprowadzenia metryk inżynierskich
w agencji rządu stanowego została całkowicie porzucona dwa lata wcześniej po
jednym incydencie, w którym menedżer nieformalnie odwołał się do danych o
aktywności jednej osoby w rozmowie o wynikach, izolowanym, ale
niezaadresowanym incydencie, który zatruł zaufanie do całej inicjatywy w
agencji na lata, a pracownicy nadal z widocznym sceptycyzmem wspominali „tę
sprawę z metrykami" długo po tym, jak pierwotny program po cichu odłożono
na półkę. Nowy, świadomie ponownie uruchomiony program odniósł się do tej
historii wprost i publicznie, uznając dawne źle obsłużenie sprawy,
zobowiązując się do konkretnej, opublikowanej polityki użycia bez karania z
nazwanym, odpowiedzialnym sponsorem z kadry zarządzającej i ustanawiając
szybki, przejrzysty protokół reakcji na każde przyszłe zgłoszenie złego
użycia. To jawne uznanie dawnej porażki, zamiast po prostu ponownego
uruchomienia tak, jakby historii nie było, zostało przez przedstawicieli
pracowników wprost wskazane jako powód, dla którego druga próba zyskała
prawdziwe zaufanie tam, gdzie pierwsza nie zyskała.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z wdrożenia budującego zaufanie i unikającego strachu są po prostu
wiarygodne dane, bez których cała staranna praca projektowa nad metrykami z
każdego innego tematu tej książki nie daje niczego realnie wartościowego.
Powyższy przykład przedsiębiorstwa pokazuje to konkretnie i mierzalnie: dane
ponownie uruchomionego programu były wyraźnie dokładniejsze niż dane
pierwotnego wdrożenia napędzanego strachem, co stanowi bezpośredni, mierzalny
zwrot z dodatkowej inwestycji w budowanie zaufania.

Całkowity koszt posiadania to przede wszystkim czas i organizacyjna
cierpliwość: wydłużony okres sprawdzania zaczynający od diagnostyki, wysiłek
angażowania zespołów w projektowanie i trwała dyscyplina szybkiej i widocznej
reakcji na każdy incydent złego użycia. Ten koszt jest znaczący, ale to
konieczna, nieunikniona cena wiarygodnych danych, od których zależy każdy
inny temat tej książki; szybkie wdrożenie, które pomija tę inwestycję, daje
program metryk, który wygląda na kompletny, ale jest po cichu bezwartościowy,
zepsuty dokładnie tym manipulowaniem, przed którym ta książka ostrzega od
pierwszego merytorycznego tematu.

## Antywzorce i pułapki

- **Odgórne wdrożenie bez udziału zespołów w projekcie metryk:** wywołuje
  strach i manipulowanie od początku, niezależnie od tego, jak dobrze
  zaprojektowano same metryki.
- **Reaktywna, a nie proaktywna komunikacja celu i nieceli:** pozwala, by
  lękliwe domysły wypełniły próżnię i ukształtowały wczesne, trudne do
  odwrócenia wrażenia.
- **Pośpiech w stronę użycia oceniającego, zanim minął prawdziwy
  wyłącznie diagnostyczny okres zaufania:** najczęstszy sposób, w jaki nowy
  program metryk natychmiast wywołuje zachowania manipulacyjne.
- **Cicha, niezaadresowana reakcja na incydent złego użycia metryk:**
  potwierdza dokładnie ten strach, który napędza manipulowanie, i trwale
  szkodzi zaufaniu do całego programu.
- **Utrzymywanie logiki barier i zapobiegania manipulowaniu jako prywatnego
  zmartwienia zarządzających:** pomija szansę budowania zaufania przez
  przejrzyste, wspólne rozumowanie z mierzonymi zespołami.
- **Ponowne uruchamianie wcześniej źle obsłużonego programu metryk bez
  bezpośredniego uznania dawnej porażki:** powtarza pierwotny błąd
  niewystarczającej przejrzystości, tym razem spotęgowany niezaadresowaną
  historią.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryki są wdrażane odgórnie bez udziału zespołów,
  a cel i niecele komunikowane są reaktywnie, o ile w ogóle.
- **Poziom 2, Rozwój:** Zdarza się nieco komunikacji i udziału zespołów, ale
  brak trwałego wyłącznie diagnostycznego okresu sprawdzania i jasnego
  protokołu reakcji na złe użycie.
- **Poziom 3, Standaryzacja:** Nowe programy metryk są konsekwentnie
  wdrażane z proaktywną komunikacją, udziałem zespołów w projekcie i
  zobowiązanym wyłącznie diagnostycznym okresem sprawdzania w całej
  organizacji.
- **Poziom 4, Zarządzanie:** Istnieje szybki, przejrzysty, przetestowany
  protokół reakcji na złe użycie, który był wykorzystany w praktyce, a
  rozumowanie o barierach jest otwarcie dzielone z mierzonymi zespołami jako
  standardowa praktyka.
- **Poziom 5, Orkiestracja:** Organizacja ma wykazany, trwały dorobek
  wiarygodnych danych o metrykach z niskim poziomem manipulowania,
  bezpośrednio przypisywalny zdyscyplinowanej, budującej zaufanie praktyce
  wdrażania, a ten dorobek jest aktywnie chroniony i wzmacniany z każdą nową
  wprowadzaną metryką.

## Pomysły do dyskusji

1. Czy cel naszego obecnego programu metryk zakomunikowano przed, czy po pojawieniu się obaw?
2. Czy mierzeni byli naprawdę zaangażowani w projektowanie naszych metryk, czy system narzucono?
3. Czy nasza organizacja kiedykolwiek źle obsłużyła metrykę karząco i jak zareagowaliśmy?
4. Czy mierzone zespoły rozumieją, dlaczego istnieją nasze bariery, czy to rozumowanie jest utrzymywane w prywatności?
5. Gdybyśmy dziś ponownie uruchomili nasz program metryk z pełną uwagą na ten temat, co zrobilibyśmy inaczej?

## Kluczowe wnioski

- **Strach psuje dane szybciej i dokładniej niż jakakolwiek wada techniczna**
  w projekcie metryki; doskonale zaprojektowana metryka wdrożona źle i tak
  zostanie zmanipulowana.
- **Angażuj mierzone zespoły bezpośrednio w projekt metryk** i komunikuj
  cel oraz jawne niecele proaktywnie, przed wdrożeniem.
- **Zacznij od użycia wyłącznie diagnostycznego i udowadniaj je przez wiele
  cykli**, zanim w ogóle rozważysz użycie oceniające.
- **Odpowiedz na pierwszy źle obsłużony incydent natychmiast i widocznie**;
  milczenie potwierdza dokładnie ten strach, który napędza manipulowanie.
- **Dziel się rozumowaniem o barierach i zapobieganiu manipulowaniu
  przejrzyście** z mierzonymi zespołami, budując partnerstwo, a nie relację
  nadzoru.

## Bibliografia i dalsza lektura

- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink
  (motywacja wewnętrzna kontra zewnętrzna, wprost istotna dla tego,
  dlaczego strach psuje zachowania sterowane metrykami).
- *The Tyranny of Metrics*, Jerry Z. Muller (organizacyjne i kulturowe koszty
  źle wdrożonych programów metryk).
- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy
  Beyer, Chris Jones, Jennifer Petoff i Niall Richard Murphy (red.) (zasady
  kultury bez obwiniania, które ten temat rozszerza z reagowania na
  incydenty na wdrażanie programu metryk w ogóle).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (badania kultury organizacyjnej leżące u podstaw
  wiarygodnej, wysokowydajnej praktyki metryk inżynierskich).
