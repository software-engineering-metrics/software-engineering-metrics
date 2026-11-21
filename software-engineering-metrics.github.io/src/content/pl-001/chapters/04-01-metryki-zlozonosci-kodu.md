# 4.1 Metryki złożoności kodu

## Przegląd i motywacja

**[Złożoność cyklomatyczna](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**,
wprowadzona przez Thomasa J. McCabe'a w 1976 roku, liczy niezależne ścieżki w
przepływie sterowania fragmentu kodu: każdy `if`, pętla i rozgałęzienie
zwiększa wynik. Pozostaje najszerzej używaną metryką złożoności kodu niemal
pięćdziesiąt lat później, obok krewnych takich jak złożoność poznawcza (która
mocniej waży zagnieżdżony i trudny do śledzenia przepływ sterowania niż
oryginalne liniowe zliczanie McCabe'a) i głębokość zagnieżdżenia. Metryki te
dzielą prawdziwe, zwalidowane spostrzeżenie: kod z większą liczbą niezależnych
ścieżek jest trudniejszy do pełnego przetestowania, trudniejszy do
zrozumienia i, według dekad badań empirycznych, mierzalnie częściej zawiera
defekty.

Ten temat traktuje to spostrzeżenie z prawdziwym szacunkiem, a jego granice z
równą powagą. Metryki złożoności mierzą jedną konkretną właściwość kodu, a
baza kodu może być prosta według każdej metryki złożoności i jednocześnie źle
zaprojektowana, źle nazwana albo koncepcyjnie niespójna w sposób, którego
żaden algorytm zliczania rozgałęzień nie wykryje. I odwrotnie, niektóre
nieredukowalnie złożone problemy naprawdę wymagają złożonego kodu, by
rozwiązać je poprawnie, a zespół pod presją minimalizowania wyniku złożoności
może wytworzyć kod, który dobrze punktuje, a faktycznie jest trudniejszy do
zrozumienia, rozpraszając istotną złożoność po większej liczbie plików i
warstw pośrednictwa zamiast ją redukować.

W dużych zespołach metryki złożoności zarabiają na siebie jako narzędzie
selekcji: sposób na znalezienie, wśród tysięcy plików, niewielkiego
podzbioru, który najprawdopodobniej nagrodzi bliższe spojrzenie, a nie jako
samodzielny wyrok o jakości kodu. Duże przedsiębiorstwa i administracja
publiczna utrzymujące bazy kodu zbyt duże, by jakakolwiek osoba mogła
przeczytać je w całości, polegają na tej funkcji selekcji, by skierować
skąpy wysiłek refaktoryzacji i przeglądu tam, gdzie przyniesie najwięcej
dobrego.

## Kluczowe zasady

- **Metryki złożoności przewidują trudność testowania i defektów, ale nie
  mierzą jakości bezpośrednio.** Traktuj je jako jedno z wejść, a nie wyrok.
- **Wynik złożoności jest narażony na manipulowanie przez zaciemnianie, a
  nie tylko przez prawdziwe uproszczenie.** Rozproszenie złożoności po
  większej liczbie plików może obniżyć wynik, nie ułatwiając faktycznie
  zrozumienia kodu.
- **Część złożoności jest istotna, a nie przypadkowa.** Naprawdę trudny
  problem może wymagać naprawdę złożonego kodu. Celem jest minimalizowanie
  złożoności przypadkowej, a nie eliminowanie wszelkiej złożoności bez
  rozróżnienia.
- **Używaj metryk złożoności do selekcji, a nie jako karty wyników osób czy
  zespołów.** Wskazują, gdzie patrzeć, a nie kogo winić.
- **Trend i wartości odstające liczą się bardziej niż jakikolwiek
  bezwzględny próg.** Rosnący trend lub skrajna wartość odstająca są
  bardziej użyteczne niż pojedyncza średnia dla całego zespołu.

## Rekomendacje

### Używaj metryk złożoności do selekcji wysiłku przeglądu i refaktoryzacji

Uruchom analizę złożoności w całej bazie kodu i wykorzystaj wyniki, by
ustalić priorytety tam, gdzie bliższy przegląd ludzki lub inwestycja w
refaktoryzację zwróci się najbardziej: funkcje lub pliki punktujące daleko
powyżej typowego zakresu własnej bazy kodu to najcenniejsze miejsca do
obejrzenia w pierwszej kolejności. To użycie selekcyjne, znajdowanie, gdzie
patrzeć, jest najbardziej obronnym i wartościowym zastosowaniem metryk
złożoności, znacznie bardziej niż używanie ich jako bezwzględnej bramki
zaliczone-niezaliczone.

### Ustalaj progi względem własnej bazy kodu, a nie uniwersalnej liczby

Bezwzględne progi złożoności zapożyczone bezkrytycznie z branżowej
konwencji (wynik złożoności dziesięć to często przytaczana reguła kciuka)
mogą być zbyt łagodne albo zbyt surowe w zależności od domeny: parser lub
silnik reguł może mieć zasadnie wyższą bazową złożoność niż typowa
usługa CRUD. Skalibruj własne progi względem faktycznego rozkładu w swojej
bazie kodu i traktuj przekroczenie progu jako sygnał, by przyjrzeć się
bliżej, a nie automatyczną porażkę buildu, chyba że zespół świadomie wybrał
tę surowszą politykę, w pełni znając jej kompromisy.

### Wypatruj manipulowania przez dekompozycję bez prawdziwego uproszczenia

Najczęstszy sposób manipulowania wynikami złożoności to wzorzec podstawienia
z tematu 1.2 zastosowany do tej konkretnej metryki: podział jednej naprawdę
złożonej funkcji na kilka mniejszych, które osobno dobrze punktują, podczas
gdy cały system pozostaje równie trudny do zrozumienia, a czasem staje się
trudniejszy, bo logika jest teraz rozproszona po większej liczbie plików z
większym pośrednictwem między nimi. Zestawiaj metryki złożoności z jakościową
oceną, czy dekompozycja naprawdę rozjaśniła kod, czy tylko przeniosła
złożoność w miejsce, którego metryka już nie widzi.

### Odróżniaj złożoność istotną od przypadkowej, zanim zareagujesz

Zanim potraktujesz wysoki wynik złożoności jako problem do naprawy, zapytaj,
czy leżący u podstaw problem naprawdę wymaga tylu niezależnych ścieżek, na
przykład logika obliczania podatków zasadnie ma wiele rozgałęzień, czy
złożoność pochodzi z przyczyn możliwych do uniknięcia: głęboko zagnieżdżonych
warunków, które można spłaszczyć, zduplikowanej logiki, którą można
skonsolidować, albo niejasnych granic odpowiedzialności, które można
przerysować. Tylko druga kategoria jest prawdziwym problemem jakości, który ta
metryka powinna skłonić cię do naprawy.

### Śledź trend i wartości odstające, a nie tylko średnią z migawki

Lekki ruch średniego wyniku złożoności w całej bazie kodu rzadko jest sam w
sobie użyteczny. Gwałtownie rosnąca w kilku zmianach złożoność konkretnego
pliku albo niewielka liczba skrajnych wartości odstających w skądinąd
poprawnie zachowującej się bazie kodu to znacznie bardziej użyteczne sygnały.
Śledź zarówno trend w czasie, jak i ogon wartości odstających i używaj ich do
wywołania konkretnego, celowanego dochodzenia, a nie szerokiej, nieskupionej
inicjatywy redukcji złożoności.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Bezwzględny uniwersalny próg | Prosty, spójny, łatwy do automatyzacji | Ignoruje zasadne różnice domenowe; można go zmanipulować dekompozycją |
| Próg względny wobec bazy kodu | Lepiej skalibrowany do faktycznego kontekstu | Wymaga więcej przygotowań i okresowej rekalibracji |
| Złożoność jako automatyczna bramka buildu | Wymusza spójność bez narzutu przeglądu ludzkiego | Może blokować zasadnie złożony, ale dobrze zaprojektowany kod albo nagradzać zaciemnioną dekompozycję |
| Złożoność jako sygnał selekcji do przeglądu ludzkiego | Wychwytuje prawdziwe problemy jakości, które sama dekompozycja by przeoczyła | Wymaga więcej czasu przeglądu ludzkiego niż w pełni zautomatyzowana bramka |

Główne napięcie to **automatyzacja kontra osąd**. W pełni zautomatyzowana
bramka złożoności jest tania w egzekwowaniu i spójna, ale może zarówno
blokować zasadnie złożony, dobrze zaprojektowany kod, jak i nagradzać
powierzchowną dekompozycję, która manipuluje wynikiem, niczego faktycznie
nie upraszczając. Rozwiąż to napięcie, używając zautomatyzowanej analizy
złożoności do wskazywania kandydatów do przeglądu i zostawiając sam osąd, czy
ta złożoność jest istotna, czy przypadkowa, i czy ta refaktoryzacja naprawdę
rozjaśniła, czy tylko przeniosła złożoność, ludzkiemu recenzentowi, a nie
samej twardej automatycznej bramce.

## Pytania do omówienia z zespołem

1. **Czy nasze progi złożoności są skalibrowane do faktycznego rozkładu w
   naszej bazie kodu, czy zapożyczone bezkrytycznie z ogólnej konwencji
   branżowej?** Wyciągnij prawdziwy rozkład złożoności w swojej bazie kodu i
   sprawdź, czy obecne progi mają względem niego sens, zamiast zakładać, że
   często przytaczana liczba stosuje się uniwersalnie do twojej domeny.

2. **Czy kiedykolwiek widzieliśmy funkcję podzieloną na kilka mniejszych bez
   tego, by wynikowy kod stał się faktycznie łatwiejszy do zrozumienia?** To
   najwyraźniejszy znak wzorca manipulowania przez dekompozycję, przed którym
   ostrzega ten temat. Spójrz na niedawną refaktoryzację motywowaną głównie
   wynikiem złożoności i oceń uczciwie, czy poprawiła prawdziwą
   zrozumiałość.

3. **Gdzie w naszej bazie kodu złożoność jest istotna dla problemu, a gdzie
   przypadkowa i do naprawienia?** Przejdź przez swoje wartości odstające o
   najwyższej złożoności i jawnie posortuj je do tych dwóch kategorii, bo
   tylko druga stanowi prawdziwy, możliwy do działania problem jakości.

4. **Czy używamy metryk złożoności do selekcji wysiłku przeglądu, czy jako
   twardej zautomatyzowanej bramki bez udziału ludzkiego osądu?** Omów, czy
   obecne podejście do egzekwowania zostawia miejsce na rozróżnienie
   istotne-kontra-przypadkowe zalecane w tym temacie, czy traktuje każde
   przekroczenie identycznie bez względu na kontekst.

5. **Czy wynik złożoności kiedykolwiek posłużył, nawet nieformalnie, do oceny
   jakości pracy konkretnego inżyniera?** To grozi tą samą pułapką oceny
   jednostek, przed którą temat 3.4 ostrzega w odniesieniu do metryk
   aktywności, zastosowaną tu do metryk kodu, i zaprasza tę samą reakcję
   manipulacyjną.

6. **Jak wygląda nasz trend złożoności w ostatnim roku dla najbardziej
   krytycznych, najczęściej zmienianych plików?** Połącz to z analizą
   rotacji kodu i punktów zapalnych z tematu 4.3, bo plik, który jest
   zarówno bardzo złożony, jak i często zmieniany, zasługuje na uwagę znacznie
   wcześniej niż taki, który jest złożony, ale rzadko dotykany.

## Perspektywa sektorowa

**Startup.** Metryki złożoności są w tej skali zwykle mniej pilne. Baza kodu
jest dość mała, by nieformalna znajomość często zastępowała formalny pomiar.
Nawyk wart wczesnego przyjęcia to po prostu okazjonalne uruchamianie skanu
złożoności, by wychwycić konkretny plik po cichu stający się niemożliwym do
ogarnięcia, zanim zespół urośnie za bardzo, by zauważyć to nieformalnie.

**Mała firma.** Większość nowoczesnych narzędzi analizy statycznej raportuje
metryki złożoności w ramach szerszej, darmowej lub taniej konfiguracji
lintowania. Używaj wyniku jako okresowego sygnału selekcji, zamiast inwestować
w dedykowane narzędzia. Najpierw skup uwagę na najczęściej modyfikowanych
plikach.

**Duże przedsiębiorstwo.** Metryki złożoności w skali są najcenniejsze w
połączeniu z danymi o rotacji (temat 4.3), by ustalać priorytety inwestycji w
refaktoryzację w bazie kodu zbyt dużej, by jakakolwiek osoba mogła ją
przejrzeć ręcznie. Kalibruj progi na usługę lub domenę zamiast stosować jedną
liczbę dla całej organizacji, bo zasadna złożoność znacząco różni się
między rodzajami systemów.

**Administracja publiczna.** Długowieczne systemy rządowe często kumulują
złożoność stopniowo przez lata lub dekady przyrostowych zmian wymagań, a audyt
złożoności może być przekonującym, konkretnym narzędziem do uzasadniania
inwestycji w modernizację lub refaktoryzację wobec interesariuszy, którzy
inaczej widzieliby system po prostu jako "działający" i niewart inwestycji.

## Przykłady

**Przedsiębiorstwo.** Firma przetwarzająca płatności po raz pierwszy
przeprowadziła audyt złożoności w całej bazie kodu i znalazła jedną funkcję
walidacji transakcji z wynikiem złożoności cyklomatycznej ponad dziesięć razy
wyższym niż mediana bazy kodu. Dochodzenie wykazało, że złożoność była niemal
w całości przypadkowa: lata przyrostowo dodawanej obsługi przypadków
szczególnych dla konkretnych dostawców płatności nagromadziły się w głęboko
zagnieżdżone warunki, które można było przebudować na czystszy wzorzec
strategii oddzielający logikę specyficzną dla dostawców. Refaktoryzacja,
nadana priorytet wprost dlatego, że audyt złożoności wskazał ją jako
pojedynczy najcenniejszy cel w bazie kodu, obniżyła wynik złożoności funkcji o
ponad 80% i, co ważniejsze, mierzalnie obniżyła odsetek defektów w tej
konkretnej ścieżce kodu w ciągu kolejnych dwóch kwartałów.

**Administracja publiczna.** Wieloletni silnik obliczania świadczeń urzędu
skarbowego punktował skrajnie wysoko w metrykach złożoności w niemal każdej
funkcji, co wywołało początkowe założenie, że cały system wymaga przepisania
od zera. Bliższy przegląd funkcja po funkcji, odróżniający złożoność istotną
od przypadkowej, wykazał, że większość złożoności naprawdę odzwierciedlała
leżące u podstaw przepisy prawne, które faktycznie miały tyle zasadnych
rozgałęzień i przypadków szczególnych narzuconych ustawą, podczas gdy mniejszy
podzbiór pochodził z możliwej do uniknięcia duplikacji w podobnych ścieżkach
obliczeń. Zespół wybrał do refaktoryzacji tylko podzbiór złożoności
przypadkowej, unikając kosztownego, ryzykownego pełnego przepisania, a
mimo to znacząco poprawiając najbardziej problematyczne obszary systemu.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z dobrego używania metryk złożoności to celowana, wartościowa inwestycja
w refaktoryzację: przykład firmy płatniczej powyżej pokazuje pojedynczą,
dobrze wycelowaną poprawkę, zidentyfikowaną dzięki analizie złożoności, która
mierzalnie zmniejszyła defekty dokładnie w najbardziej ryzykownej ścieżce
kodu, za ułamek kosztu, jakiego wymagałaby szeroka, niecelowana inicjatywa
refaktoryzacji.

Całkowity koszt posiadania jest niski: większość nowoczesnych łańcuchów
narzędzi programistycznych oblicza metryki złożoności automatycznie w ramach
analizy statycznej (temat 4.4), a prawdziwą inwestycją jest czas ludzkiego
osądu na poprawną interpretację wyników, odróżnianie złożoności istotnej od
przypadkowej i wychwytywanie manipulowania przez dekompozycję, a nie znaczący
nowy koszt narzędzi.

## Antywzorce i pułapki

- **Traktowanie wyniku złożoności jako bezpośredniego wyroku o jakości:**
  mierzy jedną konkretną właściwość, a nie ogólną jakość kodu.
- **Dzielenie funkcji, by zmanipulować wynik bez prawdziwego uproszczenia:**
  wzorzec manipulowania przez dekompozycję, który ten temat nazywa wprost.
- **Stosowanie uniwersalnego progu bez kalibracji do własnej bazy kodu:**
  daje zbyt łagodne albo zbyt surowe egzekwowanie w zależności od domeny.
- **Używanie metryk złożoności do indywidualnej oceny inżynierów:** zaprasza
  do manipulowania i nadużywa metryki przeznaczonej do selekcji, a nie
  osądu.
- **Traktowanie całej złożoności jako równie możliwej do naprawy:** istotna
  złożoność naprawdę trudnego problemu nie jest defektem do wyeliminowania.
- **Ignorowanie trendu i wartości odstających na rzecz płaskiej średniej dla
  całej bazy kodu:** przeocza najbardziej użyteczny sygnał, jaki daje ta
  rodzina metryk.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Złożoności nie mierzy się albo mierzy się ją
  niezbadanym, ogólnym uniwersalnym progiem stosowanym bezkrytycznie.
- **Poziom 2, Rozwój:** Metryki złożoności są zbierane, ale rzadko się na ich
  podstawie działa, i nie odróżnia się złożoności istotnej od przypadkowej.
- **Poziom 3, Standaryzacja:** Progi są skalibrowane do własnego rozkładu bazy
  kodu, a metryki złożoności spójnie napędzają selekcję przeglądu i
  refaktoryzacji w całej organizacji.
- **Poziom 4, Zarządzanie:** Trend złożoności i wartości odstające są aktywnie
  monitorowane i łączone z danymi o rotacji (temat 4.3), by ustalać priorytety
  inwestycji w refaktoryzację. Manipulowanie przez dekompozycję jest aktywnie
  wypatrywane.
- **Poziom 5, Orkiestracja:** Organizacja potrafi wskazać konkretne,
  mierzalne poprawy odsetka defektów wprost wynikające z inwestycji w
  refaktoryzację opartej na złożoności, a dane o złożoności to rutynowe,
  zaufane wejście do decyzji inwestycyjnych w inżynierii.

## Pomysły do dyskusji

1. Jaka jest nasza najbardziej złożona funkcja lub plik i czy jej złożoność jest istotna, czy przypadkowa?
2. Czy kiedykolwiek zmanipulowaliśmy wynik złożoności dekompozycją bez prawdziwego uproszczenia?
3. Czy nasze progi są skalibrowane do własnej bazy kodu, czy zapożyczone bezkrytycznie?
4. Gdzie w naszej bazie kodu wysoka złożoność nakłada się dziś na wysoką rotację?
5. Czy dane o złożoności kiedykolwiek wpłynęły na decyzję o inwestycji w refaktoryzację, czy leżą bez użytku?

## Kluczowe wnioski

- Metryki złożoności, takie jak **złożoność cyklomatyczna**, przewidują
  trudność testowania i defektów, ale nie mierzą ogólnej jakości kodu
  bezpośrednio.
- Odróżniaj **złożoność istotną** (z naprawdę trudnego problemu) od
  **złożoności przypadkowej** (możliwej do uniknięcia lepszym projektem),
  zanim zareagujesz na wysoki wynik.
- Wypatruj **manipulowania przez dekompozycję**: dzielenia kodu, by obniżyć
  wynik, bez faktycznego uproszczenia czegokolwiek.
- Używaj metryk złożoności do **selekcji**, kierując wysiłek przeglądu
  ludzkiego i refaktoryzacji, a nie jako indywidualnej karty wyników czy
  sztywnej automatycznej bramki.
- Kalibruj progi do **rozkładu własnej bazy kodu** i śledź **trend oraz
  wartości odstające**, a nie tylko płaską średnią.

## Bibliografia i dalsza lektura

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software
  Engineering* (1976): oryginalny artykuł o złożoności cyklomatycznej.
- *Code Complete*, Steve McConnell (praktyczne wskazówki dotyczące
  zarządzania złożonością w konstruowaniu oprogramowania).
- *Working Effectively with Legacy Code*, Michael Feathers (techniki
  bezpiecznego zmniejszania złożoności w istniejącym, trudnym do zmiany
  kodzie).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring
  Understandability" (SonarSource, 2018): metryka złożoności poznawczej i jej
  odróżnienie od złożoności cyklomatycznej.
