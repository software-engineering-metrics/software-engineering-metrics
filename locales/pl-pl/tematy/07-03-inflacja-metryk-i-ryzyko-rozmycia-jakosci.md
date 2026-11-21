# 7.3 Inflacja metryk i ryzyko rozmycia jakości

## Przegląd i motywacja

Ten temat nazywa wprost i konkretnie dwa sposoby porażki, przed którymi
według tematu 7.1 musi chronić się cała koncepcja tej książki, gdy
tworzenie wspomagane przez AI staje się standardem: **inflację metryk**,
czyli liczby rosnące bez odpowiadającej im realnej wartości, oraz
**rozmycie jakości**, czyli stopniową erozję jakości kodu, która wyprzedza
obecną zdolność branży do jej wykrycia istniejącymi praktykami przeglądu i
testowania. To nie są nowe kategorie ryzyka, których ta książka jeszcze nie
nazwała. Inflacja metryk to prawo Goodharta z tematu 1.2 i manipulowanie
przez podstawianie z tematu 1.2, zastosowane na dużą skalę, a rozmycie
jakości to luka między pokryciem a skutecznością testów z tematu 4.2 i
troska o uciekające defekty z tematu 5.1, obie nasilone. Nowa jest prędkość
i skala, w jakiej generatywna AI potrafi wytworzyć oba sposoby porażki
jednocześnie, szybciej, niż zaprojektowano istniejące bariery większości
organizacji, by je wychwycić.

Konkretny mechanizm, którym zajmuje się ten temat, jest subtelny: kod
generowany przez AI bardzo często wygląda poprawnie. Stosuje znajome
idiomy, używa wiarygodnych nazw zmiennych i przechodzi powierzchowne
przeczytanie znacznie pewniej niż zwykle przechodzi naprawdę niedbały kod
pisany przez ludzi, właśnie dlatego, że uczył się na ogromnym korpusie kodu,
który wyglądał poprawnie. To utrudnia recenzentowi wychwycenie defektów
generowanych przez AI przez rodzaj dopasowywania wzorców, przegląd w stylu
„czy to wygląda dobrze", który wyłapuje wiele błędów wprowadzonych przez
ludzi, bo wersja wygenerowana przez AI jest optymalizowana, w sensie
statystycznym, by wyglądać dobrze, niezależnie od tego, czy faktycznie jest.

W dużych zespołach ryzyka tego tematu rosną ze skalą w sposób, który
powinien niepokoić szczególnie duże przedsiębiorstwa i administrację
publiczną: inflacja metryk w dziesiątkach zespołów jednocześnie może
wytworzyć ogólnoorganizacyjny fałszywy sygnał poprawy produktywności,
którego rozplątanie wymaga sporo czasu i analiz, dokładnie jak pokazał
przykład z technologii finansowych z tematu 7.1. Rozmycie jakości
wyprzedzające zdolność wykrywania jest jeszcze poważniejsze w kontekstach
regulowanych, krytycznych dla bezpieczeństwa lub opartych na zaufaniu
publicznym, gdzie koszt niewykrytego defektu, który trafia na produkcję,
niesie konsekwencje daleko wykraczające poza bezpośredni problem
inżynierski.

## Kluczowe zasady

- **Inflacja metryk i rozmycie jakości to nasilone wersje ryzyk, które ta
  książka już nazwała**, a nie zupełnie nowe kategorie; istniejące bariery
  nadal obowiązują, ale muszą pracować ciężej.
- **Cecha „wygląda poprawnie" kodu generowanego przez AI sprawia, że
  recenzentowi dopasowującemu wzorce wyjątkowo trudno wychwycić subtelne
  defekty.** To ryzyko odrębne od zwykłego błędu ludzkiego.
- **Tempo tej zmiany może wyprzedzić zdolność organizacji do dostosowania
  barier**, tworząc realne, ograniczone w czasie okno narażenia.
- **Istniejące metryki jakości (część 4) pozostają wartościowe, ale mogą
  wymagać rekalibracji**, a nie zastąpienia, w świetle tego nowego profilu
  ryzyka.
- **Zdolność wykrywania sama wymaga świadomej inwestycji**, ponieważ
  praktyki przeglądu i testowania omówione w tej książce zaprojektowano,
  zanim to konkretne ryzyko istniało na taką skalę.

## Rekomendacje

### Rekalibruj progi odsetka nieudanych zmian i uciekających defektów dla pracy intensywnie wspomaganej przez AI

Tam, gdzie zespół lub obszar kodu intensywnie przyjął pomoc AI, stosuj
śledzenie ważone dotkliwością z tematów 2.4 i 5.1 ze zwiększoną
czułością, przynajmniej dopóki organizacja nie zbierze dość dowodów
(temat 7.2), by wiedzieć, czy historyczna zależność między tymi metrykami
a realnym ryzykiem nadal obowiązuje bez zmian dla pracy wspomaganej przez
AI. Traktuj tę rekalibrację jako tymczasową postawę zbierania dowodów, a nie
trwałe, nieprzeanalizowane założenie w żadną stronę.

### Zainwestuj konkretnie w zdolność wykrywania odporną na problem „wygląda poprawnie"

Tradycyjny przegląd kodu, który w dużej mierze opiera się na rozpoznawaniu
wzorców przez recenzenta, czyli na tym, co wygląda dobrze, jest szczególnie
osłabiony wobec wiarygodnie wyglądającego, ale subtelnie błędnego kodu
generowanego przez AI. Inwestuj odpowiednio więcej w metody wykrywania, które
nie polegają na wizualnym dopasowywaniu wzorców: [testowanie mutacyjne](https://en.wikipedia.org/wiki/Mutation_testing)
(temat 4.2), które sprawdza faktyczne zachowanie, a nie wygląd, oraz
testowanie oparte na właściwościach lub niezmiennikach, które weryfikuje
poprawność logiczną, a nie powierzchowną wiarygodność. Obie metody stają
się nieproporcjonalnie bardziej wartościowe właśnie z powodu tej zmiany.

### Obserwuj inflację metryk w całym potoku dostarczania, a nie tylko w punkcie generowania kodu

Inflacja metryk wynikająca z tworzenia wspomaganego przez AI nie ogranicza
się do etapu kodowania; może się rozchodzić przez cały łańcuch czasu cyklu
(temat 2.6): większy wolumen pull requestów generowanych przez AI może
zawyżać metryki przepustowości pull requestów (temat 2.9), nawet gdy
użyteczny sygnał, który ta metryka miała pierwotnie uchwycić, czyli
prawdziwa przepustowość zespołu, pozostaje płaski, a nawet maleje, gdy
poprawnie uwzględni się obciążenie przeglądem i koszt poprawek. Przeprowadź
audyt całego zestawu metryk pod kątem tego wzorca rozchodzenia się, a nie
tylko najbardziej oczywistych, bezpośrednio związanych z AI metryk.

### Zbuduj jawny, ograniczony w czasie plan rekalibracji zamiast trwałej postawy podejrzliwości

Wzmożona kontrola zalecana w tym temacie jest właściwa w aktywnym okresie
wdrażania i niepewności, ale nie powinna stać się trwałym, nieprzeanalizowanym
podatkiem od pracy wspomaganej przez AI na czas nieokreślony. W miarę jak
organizacja buduje realne dowody dzięki dyscyplinie pomiarowej z tematu 7.2,
rewiduj progi i bariery na podstawie tego, co dowody faktycznie pokazują:
zaostrzaj dalej tam, gdzie ryzyko się potwierdza, luzuj tam, gdzie nie,
zamiast ignorować ryzyko całkowicie albo traktować każdy fragment kodu
wspomaganego przez AI z trwałą, niezróżnicowaną podejrzliwością niezależnie
od narastających dowodów.

### Komunikuj to ryzyko przejrzyście, zamiast traktować je jako powód oporu wobec AI

Przedstaw wskazówki z tego tematu jako zarządzanie ryzykiem dla naprawdę
wartościowej nowej możliwości, a nie jako argument przeciwko tworzeniu
wspomaganemu przez AI w ogóle. Organizacja, która jasno komunikuje te
konkretne, nazwane ryzyka i buduje wobec nich proporcjonalne bariery,
dokładnie tak, jak ta książka zaleca dla każdej innej metryki i techniki,
przyjmuje pomoc AI bezpieczniej i trwalej niż ta, która albo ignoruje
ryzyko, albo traktuje je jako powód do powszechnego oporu wobec naprawdę
użytecznego zestawu narzędzi.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak rekalibracji, praca wspomagana przez AI traktowana tak samo jak kod pisany przez ludzi | Proste, bez zmian w procesie | Pomija konkretny, sugerowany dowodami podwyższony profil ryzyka |
| Powszechna, trwała wzmożona kontrola całego kodu wspomaganego przez AI | Maksymalizuje krótkoterminowe ograniczenie ryzyka | Niemożliwy do utrzymania podatek od naprawdę wartościowej możliwości; ignoruje narastające dowody |
| Ograniczona w czasie rekalibracja oparta na dowodach | Równoważy zarządzanie ryzykiem z trwałym wdrażaniem | Wymaga ciągłej dyscypliny pomiarowej (temat 7.2), by wiedzieć, kiedy poluzować kontrolę |
| Inwestycja w metody wykrywania odporne na defekty „wygląda poprawnie" | Odpowiada na konkretne nowe ryzyko wprost i trwale | Wymaga początkowej inwestycji w infrastrukturę testowania mutacyjnego i opartego na właściwościach |

Główne napięcie to **ostrożność kontra tempo wdrażania**. Nadmierna, trwała
ostrożność marnuje dużą część realnej wartości tworzenia wspomaganego przez
AI; niewystarczająca ostrożność naraża na inflację metryk i rozmycie
jakości opisane w tym temacie, potencjalnie na dużą skalę, zanim je
wykryjesz. Rozwiąż to napięcie podejściem ograniczonym w czasie i opartym na
dowodach, które zaleca ten temat: wzmożona kontrola teraz, kalibrowana w
dół lub w górę w miarę gromadzenia realnych dowodów dzięki dyscyplinie
pomiarowej z tematu 7.2, zamiast trwałej polityki powszechnej albo
nieprzeanalizowanego założenia, że nic się nie zmieniło.

## Pytania do omówienia z zespołem

1. **Czy zrekalibrowaliśmy nasze progi odsetka nieudanych zmian lub
   uciekających defektów dla pracy intensywnie wspomaganej przez AI, czy
   stosujemy progi z ery sprzed AI bez zmian?** Jeśli bez zmian, omówcie,
   czy to odzwierciedla świadomą decyzję opartą na dowodach, czy po prostu
   brak uwagi poświęconej tej kwestii.

2. **Czy mamy metody wykrywania, jak testowanie mutacyjne, które nie
   polegają na wizualnym dopasowywaniu wzorców przez recenzenta, czy nasz
   proces przeglądu zależy całkowicie od ludzkich oczu oceniających, czy
   kod „wygląda dobrze"?** To konkretna podatność, którą identyfikuje ten
   temat; oceń uczciwie swoją obecną zdolność wykrywania pod tym kątem.

3. **Czy inflacja metryk rozeszła się poza etap kodowania do naszych
   metryk pull requestów lub wdrożeń i czy zauważylibyśmy to teraz?**
   Przejdź cały łańcuch czasu cyklu, szukając tego wzorca
   rozchodzenia się, a nie tylko najbardziej oczywistego punktu początku.

4. **Czy nasza obecna wzmożona kontrola kodu wspomaganego przez AI, jeśli
   w ogóle jest, opiera się na zgromadzonych dowodach, czy to
   nieprzeanalizowana, bezterminowa wartość domyślna, której nigdy nie
   przemyślano ponownie?** Omówcie, jakie dowody musiałyby się zgromadzić,
   zanim rozważylibyście poluzowanie lub dalsze zaostrzenie obecnych barier.

5. **Jak komunikujemy ryzyka z tego tematu wewnętrznie: jako powód do
   ostrożności i proporcjonalnych barier, czy jako domyślny argument
   przeciwko przyjmowaniu AI w ogóle?** Bądź szczery co do tego, jak ta
   rozmowa faktycznie trafia do zespołu, bo komunikat odebrany jako
   powszechny opór rzadko wywołuje proporcjonalną, opartą na dowodach
   reakcję, którą zaleca ten temat.

6. **Jak by wyglądało, gdyby nasza organizacja odkryła dopiero przy dużej
   skali, że inflacja metryk i rozmycie jakości występowały jednocześnie i
   niewykryte?** Ten konkretny, nieco niewygodny scenariusz warto nazwać
   jawnie jako dokładnie tę porażkę, której zapobiegać mają bariery z tego
   tematu.

## Perspektywa sektorowa

**Startup.** Szybkie wdrażanie przy ograniczonej przepustowości przeglądu
sprawia, że ryzyka tego tematu są szczególnie ostre dla małego zespołu;
problem wykrywania „wygląda poprawnie" trudniej wychwycić przy mniejszej
liczbie, mniej wyspecjalizowanych recenzentów. Zainwestuj wcześnie
przynajmniej w lekkie testowanie mutacyjne na swoich najbardziej
krytycznych ścieżkach kodu, nawet jeśli pełne pokrycie nie jest jeszcze
możliwe.

**Mała firma.** Formalne procesy rekalibracji są w tej skali zapewne zbędne,
ale prosta, jawna świadomość, że kod generowany przez AI zasługuje na nieco
bardziej sceptyczne czytanie niż zwykle, właśnie dlatego, że zwykle wygląda
na bardziej pewnie poprawny, niż może być, nic nie kosztuje i wprost
odpowiada na główną troskę tego tematu.

**Duże przedsiębiorstwo.** Inflacja metryk i rozmycie jakości znacząco
rosną ze skalą, ponieważ fałszywy sygnał lub niewykryty problem jakości w
dziesiątkach zespołów jednocześnie jest znacznie poważniejszy w skutkach i
znacznie trudniejszy do rozplątania niż ten sam problem w jednym zespole.
Inwestuj świadomie w ulepszenia zdolności wykrywania w całej organizacji
(infrastruktura testowania mutacyjnego, przyjęcie testowania opartego na
właściwościach) oraz w ograniczoną w czasie dyscyplinę rekalibracji
zalecaną w tym temacie, śledzoną centralnie.

**Administracja publiczna.** Konsekwencje niewykrytego rozmycia jakości są
szczególnie poważne w kontekstach regulowanych, krytycznych dla
bezpieczeństwa lub opartych na zaufaniu publicznym, typowych dla systemów
rządowych. Stosuj wzmożoną, opartą na dowodach kontrolę konkretnie do zmian
wspomaganych przez AI w ścieżkach kodu o wysokich konsekwencjach (logika
ważenia ekspozycji i możliwości wykorzystania z tematu 6.4 stosuje się tu
podobnie) i bądź gotów wykazać audytorowi lub organowi nadzoru, jaka
dokładnie zdolność wykrywania istnieje wobec tego konkretnego ryzyka.

## Przykłady

**Przedsiębiorstwo.** Zespół inżynierski ds. obsługi roszczeń w firmie
ubezpieczeniowej szeroko przyjął pomoc AI w kodowaniu i sześć miesięcy
później zauważył stopniowy, ale mierzalny wzrost uciekających defektów
konkretnie w złożonej logice warunkowej, czyli w kodzie, w którym subtelnie
błędna obsługa przypadków brzegowych jest dla narzędzi AI najłatwiejsza do
wiarygodnego wygenerowania, a dla recenzenta najtrudniejsza do wychwycenia
samą inspekcją. Dochodzenie potwierdziło wzorzec „wygląda poprawnie"
opisany w tym temacie: wadliwy kod konsekwentnie używał idiomatycznych,
znajomo wyglądających wzorców, które przechodziły przegląd bez wywołania
tej kontroli, jaką mógłby wywołać wyraźnie nietypowy lub niezgrabny
fragment kodu pisanego przez ludzi. Odpowiedzią zespołu było skierowanie
testowania mutacyjnego konkretnie na złożoną logikę warunkową w całej
firmie, czyli metody wykrywania odpornej na problem powierzchownej
wiarygodności, i w ciągu dwóch kwartałów zmierzył znaczące zmniejszenie
tej konkretnej kategorii defektów.

**Administracja publiczna.** Urząd skarbowy pilotujący tworzenie wspomagane
przez AI w części prac utrzymaniowych nad silnikiem obliczeniowym od
początku wbudował ograniczoną w czasie dyscyplinę rekalibracji zalecaną w
tym temacie, ustalając jawny sześciomiesięczny okres zbierania dowodów ze
wzmożonymi wymaganiami przeglądu dla zmian wspomaganych przez AI w logice
obliczeń. Zebrane dowody nie wykazały statystycznie istotnej różnicy w
częstości defektów dla dobrze zakreślonych, wąskich zmian, ale potwierdziły
podwyższone ryzyko dla szerszych, architektonicznie istotniejszych zmian
wspomaganych przez AI. Wynikająca z tego polityka agencji poluzowała
wzmożoną kontrolę dla kategorii wąskich zmian, a utrzymała, a nawet
wzmocniła ją dla zmian istotnych architektonicznie, czyli proporcjonalny
rezultat oparty na dowodach, którego nie dałaby żadna z krańcowości: ani
„brak rekalibracji", ani „powszechna trwała kontrola".

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem ze świadomej ochrony przed inflacją metryk i rozmyciem jakości jest
uniknięcie dokładnie scenariusza, który pokazuje przykład firmy
ubezpieczeniowej: niewykrytego, stopniowo narastającego problemu jakości,
którego odkrycie i naprawa po fakcie kosztują znacznie więcej, niż
kosztowałaby proaktywnie inwestycja w wykrywanie, czyli infrastruktura
testowania mutacyjnego skierowana na kod o najwyższym ryzyku.

Całkowity koszt posiadania obejmuje inwestycję w zdolność wykrywania
zalecaną w tym temacie oraz ciągłą dyscyplinę rekalibracji opartej na
dowodach zamiast którejkolwiek krańcowości, trwałej podejrzliwości lub
trwałej nieuwagi. Ten koszt jest skromny i ograniczony w czasie w
porównaniu z ryzykiem, że poważny, wielkoskalowy problem jakości pozostanie
niewykryty właśnie dlatego, że z natury sposobu generowania kodu przez te
narzędzia został ukształtowany tak, by wyglądać poprawnie dla procesów
przeglądu, które organizacja już miała.

## Antywzorce i pułapki

- **Stosowanie progów i metod wykrywania z ery sprzed AI bez zmian:** pomija
  konkretny, sugerowany dowodami podwyższony profil ryzyka.
- **Poleganie wyłącznie na przeglądzie opartym na ludzkim dopasowywaniu
  wzorców dla kodu generowanego przez AI:** szczególnie podatne na problem
  „wygląda poprawnie" identyfikowany w tym temacie.
- **Przeoczenie rozchodzenia się inflacji metryk poza punkt generowania
  kodu:** fałszywy sygnał może rozprzestrzeniać się niezauważony przez cały
  potok dostarczania.
- **Trwała, nieprzeanalizowana powszechna kontrola bez rekalibracji opartej
  na dowodach:** niemożliwie do utrzymania marnuje dużą część realnej
  wartości tworzenia wspomaganego przez AI.
- **Komunikowanie ryzyk z tego tematu jako powszechnego oporu wobec
  przyjmowania AI zamiast proporcjonalnego zarządzania ryzykiem:**
  podważa zarówno bezpieczeństwo, jak i wdrażanie.
- **Brak inwestycji w zdolność wykrywania ukierunkowanej na ten nowy profil
  ryzyka:** pozostawia organizację zależną od metod przeglądu, które ten
  temat wykazał jako szczególnie osłabione wobec niego.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Brak świadomości ryzyka inflacji metryk i
  rozmycia jakości specyficznego dla tworzenia wspomaganego przez AI;
  istniejące bariery i metody wykrywania stosowane bez zmian.
- **Poziom 2, Rozwój:** Istnieje pewna świadomość, ale rekalibracja jest
  doraźna i nie dokonano inwestycji w zdolność wykrywania specyficzną dla
  tego ryzyka.
- **Poziom 3, Standaryzacja:** Zrekalibrowane progi i metody wykrywania
  odporne na problem „wygląda poprawnie" (testowanie mutacyjne i oparte na
  właściwościach) są stosowane konsekwentnie do pracy wspomaganej przez AI.
- **Poziom 4, Zarządzanie:** Ograniczona w czasie, oparta na dowodach
  dyscyplina rekalibracji aktywnie dostosowuje kontrolę na podstawie
  zgromadzonych danych, a rozchodzenie się inflacji metryk jest aktywnie
  monitorowane w całym potoku.
- **Poziom 5, Orkiestracja:** Organizacja ma dojrzałą, proporcjonalną,
  stale ewoluującą postawę zarządzania ryzykiem wobec tworzenia
  wspomaganego przez AI, komunikowaną przejrzyście, która ani nie marnuje
  jego wartości nadmierną ostrożnością, ani nie naraża organizacji na
  niewykryte rozmycie jakości.

## Pomysły do dyskusji

1. Czy widzieliśmy już wczesne dowody wzorca defektów „wygląda poprawnie" w naszym własnym kodzie wspomaganym przez AI?
2. Jaka metoda wykrywania najbardziej bezpośrednio odpowiedziałaby u nas na konkretne ryzyko z tego tematu?
3. Czy inflacja metryk z pomocy AI rozeszła się do któregoś z naszych dalszych metryk potoku?
4. Czy nasza obecna kontrola kodu wspomaganego przez AI jest oparta na dowodach, czy to nieprzeanalizowana wartość domyślna?
5. Jak wskazówki z tego tematu są faktycznie odbierane przez zespół: jako zarządzanie ryzykiem czy jako opór wobec przyjmowania AI?

## Kluczowe wnioski

- Inflacja metryk i rozmycie jakości to **nasilone wersje ryzyk, które ta
  książka już nazywa**, wymagające od istniejących barier cięższej pracy, a
  nie zupełnie nowych ram.
- Skłonność kodu generowanego przez AI do **„wyglądania poprawnie"**
  szczególnie osłabia tradycyjny przegląd kodu oparty na dopasowywaniu
  wzorców przez ludzi.
- Inwestuj w **metody wykrywania odporne na powierzchowną wiarygodność**,
  zwłaszcza testowanie mutacyjne i oparte na właściwościach.
- Stosuj **ograniczoną w czasie, opartą na dowodach rekalibrację**, a nie
  trwałą powszechną podejrzliwość ani trwałe nieprzeanalizowane zaufanie.
- **Komunikuj to ryzyko jako proporcjonalne zarządzanie ryzykiem**, a nie
  argument przeciwko przyjmowaniu AI, by wspierać zarówno bezpieczeństwo,
  jak i trwałe użytkowanie.

## Bibliografia i dalsza lektura

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (dyscyplina sparowanej szybkości i stabilności,
  którą ten temat stosuje do nowej kategorii ryzyka).
- Jia, Yue i Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering* (2011):
  metoda wykrywania, która według tego tematu staje się nieproporcjonalnie
  wartościowa.
- Badania GitHub nad programowaniem w parze z AI i produktywnością
  programistów (dane branżowe o rezultatach i ryzyku tworzenia wspomaganego
  przez AI).
- *The Tyranny of Metrics*, Jerry Z. Muller (fiksacja na metrykach i ryzyko
  manipulowania, wprost istotne dla problemu inflacji metryk nazwanego w
  tym temacie).
