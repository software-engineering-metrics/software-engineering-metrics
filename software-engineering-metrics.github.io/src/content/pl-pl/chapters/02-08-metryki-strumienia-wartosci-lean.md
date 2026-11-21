# 2.8 Metryki strumienia wartości w Lean

## Przegląd i motywacja

Każda metryka, którą ta część dotąd omówiła, czas przepływu, obciążenie
przepływu, czas cyklu, wykorzystanie, wywodzi się ze znacznie starszego zestawu
narzędzi: pięciu bazowych pomiarów klasycznego mapowania strumienia wartości w
**[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**, opracowanych w
Toyocie i uogólnionych na produkcję, operacje i dostarczanie usług na długo,
zanim oprogramowanie je przyjęło. **Czas realizacji (LT)** to całkowity czas
zegarowy od zgłoszenia pracy do jej dostarczenia. **Czas przetwarzania (PT)** to
faktyczny czas pracy własnej poświęcony pojedynczej jednostce. **Czas cyklu (CT)**
to średni czas potrzebny na ukończenie pojedynczego węzła lub fazy w strumieniu.
**Odsetek kompletnych i dokładnych (%C/A)** to procent jednostek, które zespół
w dalszej części strumienia może przetworzyć bez potrzeby poprawek. **Takt time**
to maksymalny akceptowalny czas ukończenia jednostki, by czysto dopasować się do
popytu klientów.

Ten temat istnieje, bo inżynieria oprogramowania nie wymyśliła tych idei, tylko
je zapożyczyła, a zapożyczenie czasem wykorzystało te same słowa dla nieco innych
rzeczy. Czas cyklu w tej książce (temat 2.6) mierzy konkretnie etapy
inżynierskie zmiany, kodowanie, przegląd, test, wdrożenie, podczas gdy klasyczny CT
w Lean to bardziej ogólny "średni czas na węzeł" stosowany do dowolnego procesu.
Czas przepływu (temat 2.4) to nazwa tej książki dla tego, co Lean nazywa czasem
realizacji. Znajomość tego odwzorowania ma znaczenie, bo czytelnik z
doświadczeniem w Lean Six Sigma, częstym w produkcji, logistyce, ochronie zdrowia i
operacjach administracji, będzie używał dokładnie tych terminów w ich pierwotnych
znaczeniach, a zespół programistyczny, który nie mówi tym samym językiem, traci
łatwy, poparty dowodami most do kolegów spoza inżynierii.

Dla dużych zespołów %C/A jest najmniej wykorzystaną metryką tego tematu. Uchwytuje
coś, czego nie uchwytują metryki przepływu z tematów 2.3 i 2.4: jaka część tego,
co wytwarza etap, jest faktycznie użyteczna dla następnego etapu bez odesłania
wstecz. Zsumowany przez wieloetapowy strumień wartości, w pojęciu, które produkcja
nazywa **skumulowaną wydajnością przepustową (rolled throughput yield)**, %C/A
ujawnia, jak poprawki niewidocznie się kumulują przez przekazania, wzorzec, na
który duże przedsiębiorstwa z długimi, wielozespołowymi potokami i programy
rządowe z wieloma bramkami zatwierdzającymi są szczególnie podatne i rzadko
mierzą go bezpośrednio.

## Kluczowe zasady

- **Te pięć metryk poprzedza oprogramowanie i uogólnia się poza nie.** To
  wspólny słownik, którym interesariusz wyszkolony w Lean Six Sigma, częsty w
  dużych przedsiębiorstwach i operacjach administracji, już biegle się posługuje.
- **Kolizja terminologiczna jest realna i warto ją nazwać jawnie.** Czas cyklu w
  tej książce (temat 2.6) i klasyczny CT w Lean są powiązane, ale nie identyczne;
  udokumentuj odwzorowanie, aby rozmowy między funkcjami po cichu nie mijały się.
- **%C/A trzeba sumować przez każdy etap, a nie mierzyć raz na końcu.** Poprawki
  wprowadzone wcześnie w strumieniu i wychwycone późno są niewidoczne dla metryki
  mierzonej tylko przy końcowym dostarczeniu.
- **Takt time przeformułowuje planowanie zdolności wokół popytu, a nie wysiłku.**
  Pytanie przesuwa się z "jak szybko możemy iść" na "jak szybko musimy iść", co
  łączy się bezpośrednio z wykorzystaniem (temat 2.7) i obciążeniem przepływu
  (temat 2.4).
- **To metryki diagnostyczne, a nie metryki próżności.** Każda z nich istnieje, by
  odpowiedzieć na konkretne pytanie operacyjne, a nie by wytworzyć imponującą
  liczbę na panel.

## Rekomendacje

### Zmapuj swój strumień wartości wszystkimi pięcioma metrykami Lean, zanim przyjmiesz ramy specyficzne dla oprogramowania

Oblicz czas realizacji, czas przetwarzania, czas cyklu, %C/A i takt time dla
reprezentatywnej próby pracy przechodzącej przez twój strumień wartości, zanim
nałożysz na to własne metryki Flow Framework (tematy 2.3 i 2.4). Daje to
wartość odniesienia, którą każdy interesariusz biegły w Lean Six Sigma może od
razu zrozumieć, i często wydobywa tę samą dominację czasu oczekiwania, którą opisuje
temat 2.5, wyrażoną w słowniku, który poprzedza i przeżyje każde konkretne ramy
programistyczne.

### Sumuj odsetek kompletnych i dokładnych multiplikatywnie przez każdy etap

Zmierz %C/A na każdym etapie z osobna, a potem pomnóż procenty z poszczególnych
etapów, by otrzymać skumulowaną wydajność przepustową strumienia wartości. Trzy
etapy, z których każdy z osobna działa na 90% kompletnych i dokładnych, kumulują
się do około 73% ogółem, liczby, która nie przypomina raportu żadnego pojedynczego
etapu i zwykle jest tą uczciwszą. To jedno obliczenie jest najszybszym sposobem
ujawnienia, ile poprawek wieloetapowy potok faktycznie pochłania.

### Ustal takt time jawnie z danych o realnym popycie klientów, a nie ze zdolności

Oblicz takt time jako dostępny czas pracy podzielony przez popyt klientów w tym
okresie, celowo niezależnie od tego, jak szybko twój zespół akurat potrafi dziś
pracować. Porównaj swój zmierzony czas przetwarzania i czas cyklu z tą liczbą:
czas przetwarzania wyraźnie poniżej taktu wskazuje zdrowy zapas, a czas cyklu
przekraczający takt jest konkretnym, kwantyfikowanym dowodem niedoboru zdolności,
a nie tylko poczuciem, że jest się do tyłu.

### Udokumentuj odwzorowanie między terminami Lean a własnym słownikiem tej książki

Tam, gdzie twoja organizacja prowadzi już program Lean Six Sigma poza
oprogramowaniem albo gdzie inżynieria raportuje do kierownictwa biegłego w tym
słowniku, zapisz odwzorowanie jawnie w karcie metryk (temat 1.4): czas przepływu
w tej książce to czas realizacji w Lean, czas cyklu w tej książce (temat 2.6) to
konkretne zastosowanie bardziej ogólnego CT w Lean, a czas aktywny w tej książce
(temat 2.5) to czas przetwarzania w Lean. Ten pojedynczy dokument zapobiega
powracającemu, mało wartościowemu sporowi o to, czyje liczby są "prawdziwe".

### Używaj %C/A jako bariery ochronnej obok tempa przepływu, a nie zamiast niego

Paruj skumulowaną wydajność przepustową z tempem przepływu (temat 2.3) tak, jak ta
książka paruje każdą metrykę szybkości z barierą stabilności. Rosnąca liczba
elementów przy spadającym skumulowanym %C/A oznacza, że strumień wartości dostarcza
więcej jednostek, które coraz częściej wymagają późniejszych poprawek, dokładnie
ten wzorzec szybkości bez jakości, przed którym temat 1.2 ostrzega każdą rodzinę
metryk.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Tylko klasyczne metryki Lean (LT, PT, CT, %C/A, takt time) | Uniwersalny słownik; działa zarówno w zespołach programistycznych, jak i poza nimi | Nie jest specyficzne dla oprogramowania; wymaga tłumaczenia dla etapów specyficznych dla inżynierii |
| Tylko metryki Flow Framework (tematy 2.3, 2.4) | Zbudowane specjalnie dla strumieni wartości w oprogramowaniu i widoczności typów elementów | Nieznane interesariuszom wyszkolonym w Lean Six Sigma poza inżynierią |
| Oba, z udokumentowanym jawnym odwzorowaniem | Mówi oboma słownikami; najsilniejszy most między funkcjami | Wymaga początkowej dyscypliny zapisania odwzorowania i utrzymywania go w aktualności |
| %C/A mierzone tylko przy końcowym dostarczeniu | Proste, jedna liczba | Ukrywa poprawki wprowadzone i wychwycone wcześniej w strumieniu |

Centralne napięcie to **uniwersalność kontra specyficzność**. Klasyczne metryki
Lean są natychmiast czytelne dla każdego z doświadczeniem w produkcji, operacjach
lub Six Sigma, ale nie były projektowane z myślą o konkretnych etapach
oprogramowania, przeglądzie kodu, automatycznym testowaniu, zatwierdzaniu wdrożeń.
Rozwiąż to napięcie, używając metryk Lean jako wspólnego bazowego słownika dla
rozmów międzyfunkcyjnych i zarządczych, a własnych metryk Flow Framework (tematy
2.3 i 2.4) do specyficznej dla oprogramowania pracy diagnostycznej, którą zespoły
inżynierskie wykonują na co dzień.

## Pytania do omówienia z zespołem

1. **Czy potrafilibyśmy dziś obliczyć wszystkie pięć klasycznych metryk Lean dla
   naszego strumienia wartości, czy mamy tylko niektóre?** Większość zespołów
   programistycznych ma odpowiedniki czasu przepływu i czasu cyklu, ale nigdy
   jawnie nie obliczyła czasu przetwarzania, %C/A ani taktu. Zidentyfikujcie,
   których z pięciu faktycznie brakuje, zanim założycie, że luka jest mała.

2. **Czy kiedykolwiek zsumowaliśmy %C/A przez każdy etap naszego strumienia
   wartości, czy mierzyliśmy je tylko przy końcowym dostarczeniu?** Pojedynczy
   pomiar na końcu strumienia ukrywa dokładnie tę kumulację poprawek, którą ma
   ujawnić obliczenie skumulowanej wydajności przepustowej z tego tematu.
   Spróbujcie obliczenia sumy na prawdziwych danych.

3. **Czy znamy nasz takt time, obliczony z faktycznego popytu klientów i jak nasz
   zmierzony czas cyklu się do niego ma?** Większość zespołów nigdy nie
   uczyniła tego porównania jawnym, co oznacza, że rozmowy o zdolności pozostają
   anegdotyczne, a nie kwantyfikowane.

4. **Gdyby interesariusz wyszkolony w Lean Six Sigma spoza inżynierii zapytał o
   nasz czas cyklu, czy bylibyśmy pewni, że mamy na myśli to samo co on?** Czas
   cyklu w tej książce (temat 2.6) i klasyczny CT w Lean są powiązane, ale nie
   identyczne. Omówcie, czy to rozróżnienie kiedykolwiek spowodowało realne
   nieporozumienie w waszej organizacji.

5. **Czy nasza skumulowana wydajność przepustowa była kiedykolwiek znacząco
   niższa niż raportowane %C/A któregokolwiek pojedynczego etapu?** Jeśli nigdy
   nie obliczyliście sumy, omówcie, czego byście się spodziewali, a potem sprawdźcie
   to na prawdziwych danych.

6. **Czy nasza organizacja prowadzi już poza oprogramowaniem program Lean lub Six
   Sigma, z którym moglibyśmy się wyrównać, zamiast utrzymywać osobny,
   odłączony słownik?** Wiele przedsiębiorstw i agencji rządowych ma już tę
   infrastrukturę; sprawdźcie, czy inżynieria kiedykolwiek faktycznie się z nią
   połączyła.

## Perspektywa sektorowa

**Startup.** Pełne mapowanie strumienia wartości w Lean rzadko jest warte
ceremonii w tej skali, ale takt time warto rozumieć nieformalnie: wiedza, jak
szybko zespół faktycznie musi się poruszać, by sprostać realnemu popytowi
klientów, a nie arbitralnemu tempu wewnętrznemu, zapobiega zarówno zbyt
wczesnemu przebudowaniu zdolności, jak i jej niedobudowaniu, gdy nadejdzie wzrost.

**Mała firma.** %C/A jest tu najbardziej natychmiast użyteczną z pięciu metryk, bo
odpowiada wprost na pytanie "ile z tego, co dostarczamy, trzeba przerobić", które
właściciele i małe zespoły odczuwają dotkliwie, nie zawsze mając do tego liczbę.
Śledź ją nieformalnie dla swoich jednego lub dwóch krytycznych procesów, zanim
zainwestujesz w cokolwiek bardziej rozbudowanego.

**Duże przedsiębiorstwo.** Tu klasyczny słownik Lean zarabia na siebie, bo duże
przedsiębiorstwa bardzo często prowadzą już program Lean Six Sigma w operacjach,
działach sąsiadujących z produkcją lub usługach wspólnych, a inżynieria mówiąca tym
samym językiem zyskuje natychmiastowy, wiarygodny most do tych funkcji, zamiast
musieć od zera uzasadniać osobny zestaw metryk wyłącznie dla oprogramowania.

**Administracja publiczna.** Agencje rządowe, zwłaszcza te z korzeniami w funkcjach
regulacyjnych, sąsiadujących z produkcją lub logistycznych, często mają
istniejące mandaty Lean lub doskonalenia procesów. Ujęcie strumienia wartości
usługi cyfrowej w tych samych klasycznych terminach, czas realizacji, czas
przetwarzania, %C/A, takt time, których używa już biuro doskonalenia procesów
agencji, jest często najszybszym sposobem na zdobycie prawdziwego wsparcia
instytucjonalnego dla modernizacji oprogramowania.

## Przykłady

**Przedsiębiorstwo.** Wewnętrzny dział oprogramowania firmy produkcyjnej od lat
miał trudności z tym, by jego metryki inżynierskie były traktowane poważnie przez
kierownictwo operacji biegłe w Lean Six Sigma z hali fabrycznej. Ujęcie potoku
dostarczania działu tymi samymi pięcioma klasycznymi metrykami, obliczenie czasu
realizacji, czasu przetwarzania, czasu cyklu, %C/A i taktu dla jego strumienia
wartości w oprogramowaniu, po raz pierwszy natychmiast uczyniło liczby działu
czytelnymi dla kierownictwa operacji. Obliczenie skumulowanej wydajności
przepustowej przez cztery etapy potoku ujawniło faktyczne %C/A na poziomie 61%,
daleko poniżej raportowanej liczby któregokolwiek pojedynczego etapu, co stało się
bazą dowodową dla inicjatywy redukcji poprawek, którą kierownictwo operacji
sfinansowało w tym samym kwartale.

**Administracja publiczna.** Zespół cyfrowego wydawania pozwoleń stanowego
departamentu transportu, raportujący do agencji z wieloletnim biurem doskonalenia
procesów Lean, nigdy nie nawiązał współpracy z tym biurem, bo jego własne metryki
używały języka specyficznego dla oprogramowania, którego biuro nie rozpoznawało.
Po przetłumaczeniu strumienia wartości wydawania pozwoleń na czas realizacji, czas
przetwarzania i %C/A biuro doskonalenia procesów zidentyfikowało, że prawdziwym
ograniczeniem zespołu nie była szybkość inżynierii, lecz późniejszy etap przeglądu
prawnego, pracujący daleko poniżej własnego efektywnego taktu względem popytu na
pozwolenia, ustalenie, na którym biuro mogło działać natychmiast, bo zostało
przedstawione w znajomych terminach.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z przyjęcia klasycznego słownika Lean obok własnych, specyficznych dla
oprogramowania metryk tej książki jest wiarygodny, natychmiastowy most do
wiedzy z doskonalenia procesów i finansowania, które często już istnieją gdzie
indziej w dużej organizacji. Powyższy przykład z firmą produkcyjną, zdobycie
finansowania redukcji poprawek w tym samym kwartale, w którym przeformułowanie
uczyniło sprawę czytelną, to wzorzec, który podejście tego tematu niezawodnie
wytwarza: wgląd nie był nowy, ale słownik, który uczynił go użytecznym dla
właściwych odbiorców, tak.

Całkowity koszt posiadania (TCO) jest niski: te pięć metryk nie wymaga nowej
instrumentacji poza tym, co tematy od 2.4 do 2.6 już zbierają, plus klasyfikacja
poprawek dla %C/A, zwykle prosty dodatek do istniejącego śledzenia defektów i
elementów przepływu (temat 2.2). Główną inwestycją jest tłumaczenie, zapisanie
odwzorowania między terminami tej książki a klasycznymi terminami Lean, co zwraca
się za pierwszym razem, gdy zapobiega nieporozumieniu między funkcjami.

## Antywzorce i pułapki

- **Mierzenie %C/A tylko przy końcowym dostarczeniu:** sposób manipulowania
  leżący w sercu tego tematu. Zespół może raportować wysokie %C/A na końcowym
  etapie, podczas gdy wcześniejsze etapy po cichu wytwarzają poprawki naprawiane,
  zanim ktokolwiek zmierzy, co sprawia, że cały strumień wartości wygląda zdrowiej,
  niż jest. Bariera ochronna to sumowanie %C/A multiplikatywnie przez każdy etap,
  czyli obliczenie skumulowanej wydajności przepustowej, i okresowy audyt
  definicji "kompletne i dokładne" każdego etapu, aby nie mogła się po cichu
  zawężać z czasem.
- **Zakładanie, że czas cyklu w tej książce i klasyczny CT w Lean znaczą dokładnie
  to samo:** powoduje realne zamieszanie między funkcjami, gdy oba słowniki
  spotykają się bez udokumentowanego odwzorowania.
- **Ustalanie taktu na podstawie obecnej zdolności zamiast realnego popytu
  klientów:** niweczy cel metryki, którym jest ujawnienie luki między popytem a
  zdolnością, a nie potwierdzanie dowolnego już istniejącego tempa.
- **Traktowanie klasycznych metryk Lean jak przestarzałych po przyjęciu ram
  specyficznych dla oprogramowania:** odrzuca wiarygodny, poparty dowodami most do
  wiedzy z doskonalenia procesów, która może już istnieć w organizacji.
- **Ignorowanie istniejącego programu Lean Six Sigma gdzie indziej w
  organizacji:** traci finansowanie, wiedzę i instytucjonalną wiarygodność, które
  mogłoby odblokować przeformułowanie metryk dostarczania we wspólnym języku.
- **Raportowanie %C/A bez parowania z tempem przepływu:** pozwala rosnącej liczbie
  przepustowości ukryć spadający odsetek poprawek, ta sama luka w barierze
  ochronnej, przed którą ta książka ostrzega w całości.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Żadna z pięciu klasycznych metryk Lean nie jest
  obliczana; o dostarczaniu rozmawia się bez odniesienia do czasu realizacji,
  czasu przetwarzania czy %C/A.
- **Poziom 2, Rozwój:** Czas realizacji i czas cyklu są śledzone nieformalnie, ale
  czas przetwarzania, %C/A i takt nie są obliczane, a odwzorowanie na własny
  słownik tej książki nie istnieje.
- **Poziom 3, Standaryzacja:** Wszystkie pięć klasycznych metryk jest obliczanych
  spójnie, a odwzorowanie na słownik przepływu i czasu cyklu tej książki jest
  udokumentowane we wspólnej karcie metryk.
- **Poziom 4, Zarządzanie:** Skumulowana wydajność przepustowa jest obliczana przez
  każdy etap strumienia wartości, a takt time jest porównywany ze zmierzonym czasem
  cyklu, by jawnie kwantyfikować luki zdolności.
- **Poziom 5, Orkiestracja:** Organizacja połączyła swoje metryki dostarczania
  oprogramowania z istniejącym programem Lean lub Six Sigma gdzie indziej w
  biznesie i potrafi wskazać konkretne decyzje inwestycyjne lub procesowe
  podjęte, bo wspólny słownik uczynił wgląd użytecznym dla odbiorców spoza
  inżynierii.

## Pomysły do dyskusji

1. Czy potrafilibyśmy dziś obliczyć czas realizacji, czas przetwarzania, czas cyklu, %C/A i takt time dla naszego strumienia wartości?
2. Jaka byłaby nasza skumulowana wydajność przepustowa, gdybyśmy pomnożyli %C/A każdego etapu?
3. Czy nasza organizacja prowadzi już program Lean lub Six Sigma, z którym nigdy nie połączyliśmy metryk inżynierskich?
4. Jak nasz zmierzony czas cyklu ma się do naszego taktu, obliczonego z realnego popytu klientów?

## Kluczowe wnioski

- Pięć klasycznych metryk Lean, **czas realizacji, czas przetwarzania, czas cyklu,
  odsetek kompletnych i dokładnych oraz takt time**, poprzedza oprogramowanie i
  pozostaje wspólnym słownikiem interesariuszy wyszkolonych w Lean Six Sigma.
- **Czas przepływu i czas cyklu z tej książki odpowiadają, ale nie są identyczne**
  z czasem realizacji i klasycznym CT w Lean; udokumentuj odwzorowanie jawnie, by
  uniknąć zamieszania między funkcjami.
- Centralnym sposobem manipulowania w tym temacie jest **mierzenie %C/A tylko przy
  końcowym dostarczeniu**; bariera ochronna to sumowanie go multiplikatywnie przez
  każdy etap jako skumulowanej wydajności przepustowej.
- **Takt time przeformułowuje zdolność wokół realnego popytu klientów**, a nie
  istniejącego tempa, i łączy się bezpośrednio z wykorzystaniem (temat 2.7) i
  obciążeniem przepływu (temat 2.4).
- Ujęcie dostarczania oprogramowania w klasycznych terminach Lean jest często
  najszybszym sposobem połączenia się z **istniejącą wiedzą z doskonalenia
  procesów i finansowaniem** obecnymi już w dużej organizacji.

## Bibliografia i dalsza lektura

- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., and Daniel T. Jones. *Lean Thinking: Banish Waste and
  Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, and Daniel Roos. *The Machine That
  Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and
  Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill,
  2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*.
  Productivity Press, 1988.
