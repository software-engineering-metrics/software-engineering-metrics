# 5.4 Koszty i ekonomia jednostkowa inżynierii

## Przegląd i motywacja

Ten temat nadaje części 5 wprost wymiar finansowy: jak wyrazić koszt inżynierii
w kategoriach, z których interesariusz finansowy może korzystać bezpośrednio, i
jak zbudować **ekonomię jednostkową**, czyli koszt wyrażony na znaczącą jednostkę
produkcji lub użycia, zamiast nieprzejrzystej, zagregowanej pozycji budżetu
działu. Koszt inżynierii jest zwykle największą kontrolowalną pozycją wydatków w
organizacji napędzanej oprogramowaniem, a jednocześnie bywa najsłabiej
rozumiany przez funkcję finansową, raportowany jako jedna duża liczba z
niewielką widocznością tego, co go napędza i jak skaluje się ze wzrostem. Ten
temat istnieje, by zamknąć tę lukę, bo lider inżynierski, który nie potrafi
odpowiedzieć konkretnie, w kategoriach finansowych, na pytania „ile kosztuje nas
utrzymanie tego systemu" albo „jak nasz koszt skaluje się wraz ze wzrostem",
jest w każdej rozmowie budżetowej w realnie gorszej pozycji.

Konkretna dyscyplina, którą zaleca ten temat, ekonomia jednostkowa, oznacza
wyrażanie kosztu na wdrożenie, na obsłużonego klienta, na przetworzoną
transakcję albo na inną jednostkę, która faktycznie ma znaczenie dla biznesu,
a nie tylko jako całkowitego kosztu etatów czy całkowitych wydatków na chmurę.
To przeformułowanie łączy się bezpośrednio z zasadą rezultatów ponad produkcją z
tematu 1.3: spadająca całkowita liczba kosztów nie jest automatycznie dobra,
jeśli wynika z obsługi mniejszej liczby klientów, a rosnąca całkowita liczba
kosztów nie jest automatycznie zła, jeśli wynika z obsługi proporcjonalnie
znacznie większej ich liczby. Ekonomia jednostkowa sprawia, że trendy kosztów
dają się interpretować, a nie tylko widzieć.

W dużych zespołach dyscyplina tego tematu zamienia finanse inżynierii z czarnej
skrzynki w czytelny, zarządzalny system. Duże przedsiębiorstwa używają ekonomii
jednostkowej, by uczciwie porównywać efektywność kosztową różnych produktów,
platform czy zespołów; organizacje publiczne stosują tę samą dyscyplinę, by
wykazać odpowiedzialność fiskalną i oprzeć na dowodach uzasadnienie inwestycji w
infrastrukturę, która z czasem zmniejszy koszt na obsłużonego obywatela.

## Kluczowe zasady

- **Sam całkowity koszt nie daje się interpretować bez mianownika.** Ekonomia
  jednostkowa, koszt na znaczącą jednostkę, zamienia nieprzejrzystą liczbę w
  użyteczny trend.
- **Wybierz jednostkę, która odzwierciedla prawdziwą wartość biznesową lub
  misyjną**, a nie arbitralny albo łatwy do zmanipulowania mianownik.
- **Koszt ma wiele składników: ludzie, infrastruktura i narzędzia.** Śledź je
  osobno, bo każdy ma inny czynnik napędzający i inną dźwignię.
- **Praktyki FinOps wnoszą do kosztów chmury ten sam rygor, który ta książka
  wnosi do metryk dostarczania i jakości.** Traktuj koszt jako mierzalny i
  zarządzalny, a nie jako nieuniknioną, nieprzejrzystą daność.
- **Spadający całkowity koszt nie jest automatycznie dobry, a rosnący nie jest
  automatycznie zły**, bez sprawdzenia, co w tym samym czasie stało się z miarą
  jednostkową.

## Rekomendacje

### Wybierz jednostkę odzwierciedlającą realnie dostarczoną wartość, a nie
arbitralny mianownik

Wybierz do obliczeń ekonomii jednostkowej jednostkę, która naprawdę śledzi
wartość biznesową lub misyjną: koszt na obsłużonego klienta, koszt na
przetworzoną transakcję, koszt na wdrożenie albo koszt na obsłużoną interakcję
obywatela w usłudze publicznej. Unikaj mianownika, który zbyt łatwo zawyżyć, by
poprawić wskaźnik, takiego jak wewnętrzna, w dużej mierze uznaniowa liczba, która
nie odpowiada żadnej prawdziwej zewnętrznej jednostce dostarczonej wartości.

### Rozdziel koszty ludzi, infrastruktury i narzędzi

Koszt inżynierii ma co najmniej trzy odrębne składniki o różnych czynnikach
napędzających i różnych dźwigniach: koszt ludzi (wynagrodzenia, świadczenia,
w krótkim okresie w dużej mierze stałe), koszt infrastruktury (wydatki na chmurę,
w dużej mierze zmienne wraz z użyciem i bezpośrednio optymalizowalne praktyką
inżynierską) oraz koszt narzędzi i licencji (często stałe koszty za stanowisko
lub za próg użycia). Śledź je osobno, a nie jako jedną zmieszaną sumę, bo
rosnący całkowity koszt napędzany infrastrukturą skalującą się z prawdziwym
wzrostem wymaga bardzo innej reakcji niż ten sam wzrost napędzany niezarządzanym
rozrostem narzędzi.

### Stosuj dyscyplinę FinOps szczególnie do kosztów infrastruktury chmurowej

**[FinOps](https://en.wikipedia.org/wiki/FinOps)** to dyscyplina wprowadzania
odpowiedzialności finansowej do zmiennych wydatków na chmurę przez
międzyfunkcyjną współpracę zespołów inżynierii, finansów i biznesu. Stosuj jej
podstawowe praktyki wprost: taguj zasoby chmurowe według zespołu i usługi, by
przypisywać koszty, regularnie przeglądaj wydatki względem budżetu i traktuj
efektywność kosztową infrastruktury (koszt na jednostkę faktycznego użycia) jako
metrykę inżynierską wartą świadomej optymalizacji, a nie jako nieunikniony, stały
narzut, który należy po prostu zaakceptować.

### Śledź trend kosztu jednostkowego w czasie i jawnie badaj jego zmiany

Pojedyncze ujęcie kosztu jednostkowego jest mniej użyteczne niż jego trend: czy
koszt na obsłużonego klienta spada, gdy platforma dojrzewa i się skaluje (znak
prawdziwych zysków efektywności), czy rośnie (znak narastającej nieefektywności,
długu technicznego podnoszącego koszt utrzymania albo przesunięcia struktury
obsługiwanych klientów ku segmentom bardziej zasobochłonnym). Badaj jawnie
istotną zmianę trendu kosztu jednostkowego, zamiast raportować liczbę bez
wyjaśnienia.

### Połącz dane o kosztach z metrykami długu technicznego i jakości z innych
części książki

Rosnący koszt infrastruktury lub utrzymania na jednostkę jest czasem
bezpośrednim, mierzalnym skutkiem nagromadzonego długu technicznego (temat 4.5)
albo mnożenia się punktów zapalnych złożoności (temat 4.1, temat 4.3):
nieefektywne ścieżki kodu, redundantna infrastruktura i słabo zoptymalizowane
zapytania ostatecznie wszystkie wychodzą jako podwyższony koszt jednostkowy.
Używaj rosnącego kosztu jednostkowego jako jednego z danych wejściowych, obok
sygnałów rotacji i złożoności z części 4, do dyskusji o priorytetach spłaty
długu, bo pozycja długu z wykazanym, mierzalnym wpływem na koszt jest mocniejszym
argumentem za inwestycją w naprawę niż samo niepoliczone narzekanie na
jakość.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Raportowanie samego całkowitego kosztu | Proste, zgodne ze sposobem, w jaki zwykle przydziela się budżety | Nie da się interpretować bez mianownika; ukrywa trendy efektywności |
| Ekonomia jednostkowa z dobrze dobranym mianownikiem | Interpretowalna, użyteczna, porównywalna w czasie i między zespołami | Wymaga staranności w doborze naprawdę znaczącej, trudnej do zmanipulowania jednostki |
| Raportowanie kosztów zmieszanych (ludzie, infrastruktura, narzędzia razem) | Prosta pojedyncza liczba | Zaciemnia, który konkretny czynnik kosztowy się zmienia i dlaczego |
| Rozdzielone składniki kosztów | Ujawnia właściwą dźwignię dla danego trendu kosztów | Wymaga bardziej szczegółowego przypisywania kosztów i infrastruktury śledzenia |

Główne napięcie to **prostota kontra użyteczność**. Pojedyncza liczba kosztu
całkowitego jest łatwa do raportowania i zgadza się ze sposobem, w jaki wiele
organizacji już przydziela budżet, ale zaciemnia zarówno to, co napędza zmiany
kosztów, jak i to, czy te zmiany odzwierciedlają prawdziwą efektywność, czy
prawdziwy wzrost. Rozwiąż to napięcie, inwestując w nieco bardziej złożoną
ekonomię jednostkową i raportowanie z rozdzielonymi składnikami, które zaleca ten
temat, bo wynikająca stąd użyteczność, wiedza, którą dźwignią pociągnąć, gdy
koszt się porusza, jest warta skromnego dodatkowego wysiłku śledzenia w każdej
organizacji większej niż najmniejsza.

## Pytania do omówienia z zespołem

1. **Czy śledzimy koszt inżynierii na znaczącą jednostkę (klient, transakcja,
   wdrożenie), czy tylko jako nieprzejrzystą sumę?** Jeśli istnieje tylko suma,
   wskaż, jaka jednostka uczyniłaby twój trend kosztów naprawdę
   interpretowalnym, i omówcie, co byłoby potrzebne, by zacząć ją śledzić.

2. **Czy potrafimy rozdzielić nasz obecny koszt na składniki ludzi,
   infrastruktury i narzędzi i czy wiemy, który napędza niedawną zmianę?**
   Wyciągnij swój faktyczny podział kosztów, jeśli istnieje, i sprawdź, czy jest
   dość szczegółowy, by z pewnością odpowiedzieć na to pytanie.

3. **Czy zastosowaliśmy praktyki tagowania i przypisywania FinOps do kosztów
   naszej infrastruktury chmurowej, czy to jedna, nieprzypisana pozycja?** Jeśli
   wydatków nie da się przypisać do konkretnych zespołów lub usług, omówcie, jak
   wyglądałby pierwszy krok do prawdziwego przypisania.

4. **Czy nasz trend kosztu jednostkowego niedawno istotnie się zmienił w którąś
   stronę i czy wiemy dlaczego?** Zbadaj prawdziwą, niedawną zmianę, jeśli
   taka jest, i zobacz, czy potrafisz ją z pewnością wyjaśnić, czy pozostaje
   tajemnicą.

5. **Czy nasz obecny trend kosztów infrastruktury koreluje z którymś z naszych
   sygnałów długu technicznego lub punktów zapalnych złożoności z części 4?**
   Skrzyżuj te źródła danych jawnie i zobacz, czy wyłoni się związek, który
   mógłby wzmocnić uzasadnienie biznesowe spłaty długu.

6. **Gdyby interesariusz finansowy zapytał jutro „ile kosztuje nas obsłużenie
   jeszcze jednego klienta", czy potrafilibyśmy odpowiedzieć z pewnością?** To
   konkretne, praktyczne pytanie sprawdza, czy twoja ekonomia jednostkowa jest
   faktycznie zbudowana i gotowa, czy tylko teoretyczną aspiracją.

## Perspektywa sektorowa

**Startup.** Ekonomia jednostkowa liczy się ogromnie już na wczesnym etapie, bo
zarówno inwestorzy, jak i założyciele muszą wiedzieć, czy koszt obsłużenia
każdego kolejnego klienta zmierza ku zrównoważeniu, czy ku modelowi biznesowemu,
który się nie skaluje. Śledź to od bardzo wczesnego etapu, nawet na zgrubnych
szacunkach, zamiast czekać, aż firma urośnie na tyle, by uzasadnić formalne
narzędzia FinOps.

**Mała firma.** Panele rozliczeń dostawców chmury zwykle zapewniają dość
podstawowej widoczności kosztów bez dedykowanych narzędzi FinOps; główną
dyscypliną jest wybór sensownej jednostki (koszt na klienta albo na transakcję)
i okresowe sprawdzanie trendu, zamiast patrzenia wyłącznie na całkowity
rachunek w izolacji.

**Duże przedsiębiorstwo.** Praktyka FinOps i śledzenie rozdzielonych składników
kosztów są w tej skali niezbędne, gdy wydatki na chmurę mogą stanowić bardzo
dużą, często niedostatecznie badaną pozycję budżetu rozproszoną po wielu
zespołach. Zainwestuj w odpowiednie tagowanie do przypisywania kosztów i
dedykowany rytm przeglądów kosztów oraz używaj ekonomii jednostkowej do uczciwego
porównywania efektywności kosztowej różnych linii produktów czy platform.

**Administracja publiczna.** Odpowiedzialność fiskalna i wykazywalna
efektywność kosztowa mają bezpośrednie znaczenie dla uzasadnienia budżetu i
rozliczalności publicznej. Ekonomia jednostkowa wyrażona jako koszt na
obsłużonego obywatela albo na przetworzoną transakcję jest często znacznie
bardziej przekonującą i łatwiejszą do interpretacji metryką dla komisji
budżetowych niż surowa liczba wydatków całkowitych i bezpośrednio wspiera
uzasadnienie biznesowe inwestycji w infrastrukturę, która z czasem obniża koszt
na jednostkę.

## Przykłady

**Przedsiębiorstwo.** Zespół finansowy firmy oferującej oprogramowanie jako
usługę był zaniepokojony rosnącymi przez kilka kolejnych kwartałów całkowitymi
wydatkami na infrastrukturę chmurową, początkowo zakładając nieefektywność lub
marnotrawstwo. Analiza ekonomii jednostkowej, koszt na aktywnego klienta,
pokazała, że koszt jednostkowy faktycznie stale spadał, mimo wzrostu wydatków
całkowitych, bo liczba klientów rosła szybciej niż koszt infrastruktury:
prawdziwa poprawa efektywności, zamaskowana przez samo patrzenie na wydatki
całkowite. To przeformułowanie przesunęło rozmowę w finansach z „dlaczego
inżynieria wydaje więcej" na „jak utrzymać to efektywne skalowanie", co było
rozmową istotnie bardziej produktywną i pozwoliło uniknąć niepotrzebnego i
potencjalnie szkodliwego nakazu cięcia kosztów, który uderzyłby w zdrowe,
napędzane wzrostem wydatki.

**Administracja publiczna.** Agencja usług cyfrowych rządu stanowego miała
uzasadnić dalsze inwestycje w infrastrukturę chmurową przed komisją budżetową
porównującą koszty ze starszym systemem lokalnym, który ta infrastruktura
zastępowała. Analiza ekonomii jednostkowej, koszt na przetworzoną transakcję
obywatela, pokazała, że koszt jednostkowy nowego systemu chmurowego był
istotnie niższy niż starszego, mimo wyższych nominalnych wydatków całkowitych,
bo nowy system obsługiwał znacznie większy wolumen transakcji przy takim samym
lub niższym całkowitym budżecie infrastruktury. To porównanie kosztów
jednostkowych, a nie trudniejsze do interpretacji porównanie wydatków całkowitych,
stało się głównym dowodem w udanym uzasadnieniu dalszych i większych inwestycji w
chmurę.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z rygorystycznej ekonomii jednostkowej jest dająca się obronić,
interpretowalna odpowiedź na pytanie, które w końcu zadaje każdy interesariusz
finansowy: czy te wydatki są efektywne i czy skalują się w sposób zrównoważony.
Powyższy przykład z przedsiębiorstwa pokazuje ryzyko błędu: widok oparty tylko na
wydatkach całkowitych niemal uruchomił niepotrzebny i szkodliwy nakaz cięcia
kosztów wobec wydatków, które w ujęciu jednostkowym stawały się bardziej, a nie
mniej efektywne.

Całkowity koszt posiadania obejmuje narzędzia do przypisywania kosztów (praktyki
tagowania FinOps) oraz dyscyplinę analityczną do rozdzielania składników kosztów
i śledzenia trendów jednostkowych w czasie. Ta inwestycja jest skromna w
porównaniu z ryzykiem podjęcia znaczącej decyzji budżetowej, cięcia wydatków,
które faktycznie były efektywne, albo niewychwycenia wydatków, które naprawdę
stawały się nieefektywne, wyłącznie na podstawie niedoinformowanego widoku
kosztów całkowitych.

## Antywzorce i pułapki

- **Raportowanie kosztu całkowitego bez mianownika:** nie da się go
  interpretować i ukrywa, czy koszt skaluje się efektywnie, czy nieefektywnie.
- **Wybór łatwej do zmanipulowania lub arbitralnej jednostki do obliczeń
  kosztów:** daje wskaźnik, który pochlebia zamiast informować.
- **Mieszanie kosztów ludzi, infrastruktury i narzędzi w jedną liczbę:**
  zaciemnia, który konkretny czynnik się zmienia i jaka dźwignia go adresuje.
- **Brak przypisywania kosztów chmury (tagowania FinOps):** pozostawia wydatki
  na infrastrukturę faktycznie niezarządzane i nierozliczane na poziomie
  zespołu lub usługi.
- **Reagowanie na zmianę kosztu całkowitego bez sprawdzenia trendu
  jednostkowego:** może wywołać niepotrzebny nakaz cięcia kosztów wobec
  naprawdę efektywnych, napędzanych wzrostem wydatków.
- **Brak łączenia trendów kosztów z danymi o długu technicznym lub
  złożoności:** pomija policzalne, wzmocnione uzasadnienie inwestycji w spłatę
  długu.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Koszt inżynierii jest raportowany tylko jako
  nieprzejrzysta suma, bez ekonomii jednostkowej i rozdziału składników.
- **Poziom 2, Rozwój:** Istnieje pewien podział kosztów, ale ekonomia
  jednostkowa jest niespójna, a przypisywanie kosztów chmury w dużej mierze
  nieobecne.
- **Poziom 3, Standaryzacja:** Ekonomia jednostkowa z dobrze dobranym
  mianownikiem jest śledzona spójnie, a koszt rozdzielony na składniki ludzi,
  infrastruktury i narzędzi w całej organizacji.
- **Poziom 4, Zarządzanie:** Praktyki przypisywania i przeglądu FinOps są
  ustanowione, a trendy kosztu jednostkowego aktywnie badane i łączone z
  sygnałami długu technicznego i jakości.
- **Poziom 5, Orkiestracja:** Organizacja potrafi z pewnością odpowiadać na
  szczegółowe pytania o koszt jednostkowy od interesariuszy finansowych, a dane o
  kosztach bezpośrednio wpływają zarówno na decyzje inwestycyjne inżynierii, jak
  i na uzasadnienie budżetu na najwyższym szczeblu.

## Pomysły do dyskusji

1. Jaka jednostka uczyniłaby nasz trend kosztów naprawdę interpretowalnym i czy ją śledzimy?
2. Czy potrafilibyśmy rozdzielić niedawną zmianę kosztów na składniki ludzi, infrastruktury i narzędzi?
3. Czy jakaś część naszych wydatków na infrastrukturę jest obecnie nieprzypisana do konkretnego zespołu lub usługi?
4. Czy nasz trend kosztu jednostkowego niedawno się zmienił i czy wiemy dlaczego?
5. Gdzie rosnący koszt jednostkowy może być objawem nieobsłużonego długu technicznego?

## Kluczowe wnioski

- **Ekonomia jednostkowa**, koszt na znaczącą jednostkę wartości, zamienia
  nieprzejrzystą liczbę kosztu całkowitego w interpretowalny, użyteczny trend.
- Wybierz jednostkę odzwierciedlającą **prawdziwą wartość biznesową lub
  misyjną** i unikaj łatwego do zmanipulowania lub arbitralnego mianownika.
- Rozdziel koszt na składniki **ludzi, infrastruktury i narzędzi**, bo każdy ma
  inny czynnik napędzający i inną dźwignię.
- Stosuj **dyscyplinę FinOps** szczególnie do kosztów infrastruktury chmurowej,
  w tym tagowanie do przypisywania i regularne przeglądy.
- Spadający koszt całkowity **nie jest automatycznie dobry**, a rosnący **nie
  jest automatycznie zły**, bez sprawdzenia obok niego trendu jednostkowego.

## Bibliografia i dalsza lektura

- *Cloud FinOps*, J.R. Storment i Mike Fuller (podstawowy tekst o praktykach
  FinOps w zarządzaniu kosztami chmury).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble i Gene Kim (związek między efektywnością dostarczania a kosztem).
- *Site Reliability Engineering*, Betsy Beyer, Chris Jones, Jennifer Petoff i
  Niall Richard Murphy (red.) (koszt jako jawny kompromis inżynierii
  niezawodności).
- FinOps Framework organizacji FinOps Foundation, [finops.org](https://www.finops.org/) (wskazówki dla
  praktyków i model dojrzałości zarządzania finansami chmury).
