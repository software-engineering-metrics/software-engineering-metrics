# 7.4 Telemetria rezultatów jako nowa gwiazda polarna

## Przegląd i motywacja

Ten temat zamyka część 7 i w istotnym sensie zamyka argument, który cała
książka buduje od tematu 1.3, jedną prostą tezą: gdy generatywna AI czyni
surową produkcję tanią, **[telemetria](https://en.wikipedia.org/wiki/Telemetry) rezultatów**, czyli ciągły, zinstrumentowany
pomiar realnych rezultatów, a nie aktywności czy produkcji, przestaje być
jedną z kilku dobrych praktyk i staje się zasadą organizującą, wokół której
trzeba zbudować program metryk. To nie jest nowy pomysł, wprowadzony tu po
raz pierwszy. To idea, którą temat 1.3 wprowadził w otwierającej części tej
książki, teraz przedstawiona jako konieczna, a nie tylko pożądana,
odpowiedź na zmianę technologiczną, która uczyniła każdą alternatywę
bardziej niebezpieczną niż dawniej.

Logika jest prosta. Przed generatywną AI wolumen produkcji był niedoskonałym,
ale nie bezwartościowym wskaźnikiem zastępczym wysiłku, a luźno także
wartości; zespół, który dostarczył więcej funkcji, wykonał przynajmniej
więcej pracy, nawet jeśli nie zawsze była to właściwa praca. Generatywna AI
przecina nawet to luźne powiązanie: wolumen produkcji nie wskazuje już
wiarygodnie wysiłku, bo narzędzie potrafi go wygenerować w kilka sekund, i z
pewnością nie wskazuje wartości, bo temat 7.3 pokazał, że napompowana
produkcja może współistnieć z pogarszającą się jakością. Metryki, które
przetrwają tę zmianę w całości, to dokładnie te, ku którym ta książka
kieruje od pierwszych tematów: odsetek uciekających defektów (temat 5.1),
adopcja funkcji (temat 5.2), rezultaty klientów i biznesu (temat 5.3),
niezawodność (część 6) i dobrostan programistów (część 3). Żadna z nich nie
zależy od tego, jak powstał kod; wszystkie mierzą to, co faktycznie się
stało w jego wyniku.

W dużych zespołach argument tego tematu ma bezpośrednie, praktyczne
konsekwencje dla tego, jak program metryk powinien być budowany i
przebudowywany w przyszłości. Duże przedsiębiorstwa przeprojektowujące swoje
panele inżynierskie w świetle przyjęcia AI powinny skierować inwestycje
konkretnie ku infrastrukturze telemetrii rezultatów opisanej w tym temacie.
Administracja publiczna, oceniając zarówno narzędzia AI, jak i szersze
programy technologiczne, w które są wbudowane, powinna stosować wobec obu ten
sam standard telemetrii rezultatów, który ten temat zaleca jako punkt
wyjścia dla każdej wiarygodnej, odpornej na przyszłość oceny.

## Kluczowe zasady

- **Telemetria rezultatów staje się konieczna, a nie tylko pożądana, gdy
  produkcja jest tania.** To założycielska zasada tematu 1.3, teraz pilna, a
  nie aspiracyjna.
- **Metryki, które przetrwają tę zmianę, to te, ku którym ta książka
  zmierza od początku**: uciekające defekty, adopcja, rezultaty biznesowe,
  niezawodność i dobrostan.
- **Program metryk zbudowany głównie wokół metryk produkcji jest teraz
  obciążeniem, a nie tylko suboptymalnym wyborem.** Metryki produkcji można
  tanio i szybko zawyżać na dużą skalę.
- **Telemetria rezultatów wymaga realnej inwestycji**: instrumentacji,
  cierpliwości wobec wolniejszego sygnału i organizacyjnej dyscypliny, by
  oprzeć się pokusie szybszych, tańszych, ale teraz zawodnych metryk
  produkcji.
- **Ta zasada przetrwa każde konkretne narzędzie AI i każdego dostawcę.**
  To trwała odpowiedź na trwałą zmianę w tym, co znaczy produkcja, a nie
  tymczasowe dostosowanie do przemijającego trendu.

## Rekomendacje

### Przeprowadź audyt proporcji swoich inwestycji w metryki: telemetria rezultatów kontra śledzenie produkcji

Oblicz z grubsza, jaka część obecnej infrastruktury metryk, wysiłku
instrumentacji, miejsca na panelu i czasu spotkań przeglądowych idzie na
metryki rezultatów (część 5, część 6, dobrostan programistów z części 3), a
jaka na metryki produkcji i aktywności (liczba wdrożeń, wolumen commitów,
przepustowość pull requestów). Jeśli dominuje śledzenie produkcji, sama ta
proporcja jest teraz obciążeniem w świetle argumentu tego tematu, a jej
przebalansowanie to najbardziej dźwigniowa zmiana, jaką ten temat zaleca.

### Inwestuj w infrastrukturę telemetrii rezultatów świadomie, jako pełnoprawną inwestycję inżynierską

Pomiar rezultatów, czyli śledzenie adopcji funkcji, korelacja z
rezultatami biznesowymi (temat 5.3), instrumentacja niezawodności (część
6), wymaga realnej, ciągłej inwestycji inżynierskiej, którą wiele organizacji
historycznie niedoszacowywało w porównaniu z względnie tanimi i łatwymi
metrykami produkcji, które dominują na wielu dzisiejszych panelach. Traktuj
tę inwestycję w infrastrukturę z taką samą powagą, z jaką ta książka
traktuje każdą inną istotną zdolność inżynierską, a nie jako drugorzędną
sprawę za samą inwestycją w narzędzia AI.

### Zaakceptuj i komunikuj, że telemetria rezultatów jest wolniejsza, i zbuduj w oczekiwaniach organizacji cierpliwość na to

Metryki rezultatów są, niemal z natury, bardziej opóźnione i bardziej
zaszumione niż metryki produkcji (rozróżnienie wskaźników wyprzedzających i
opóźnionych z tematu 1.3, ostrożność statystyczna z tematu 1.6).
Organizacja przyzwyczajona do szybkiego, satysfakcjonującego sprzężenia
zwrotnego przy oglądaniu rosnącej liczby produkcji musi zbudować prawdziwą
cierpliwość wobec wolniejszego, uczciwszego sygnału, który daje telemetria
rezultatów, a kierownictwo musi aktywnie ją komunikować i wzorcowo
okazywać, zamiast odruchowo sięgać po szybszą, a teraz zawodną alternatywę
pod presją pokazania szybkich wyników.

### Wykorzystaj tę zmianę jako okazję do wycofania naprawdę przestarzałych metryk produkcji, a nie tylko do dodawania metryk rezultatów obok nich

Idąc za dyscypliną z tematu 1.1, by wycofywać metryki, które nie zarabiają
już na swoje utrzymanie, wykorzystaj ten moment jako świadomą okazję do
usunięcia metryk produkcji i aktywności, które ta zmiana konkretnie
zdewaluowała, zamiast po prostu dokładać metryki rezultatów na wierzch
niezmienionego panelu. Panel, który zachowuje wszystkie stare metryki
produkcji, dokręcając nowe metryki rezultatów, puchnie, a nie realnie się
poprawia.

### Traktuj inwestycję w telemetrię rezultatów jako trwałą, niezależną od konkretnego narzędzia AI czy relacji z dostawcą

Buduj infrastrukturę telemetrii rezultatów jako trwałą zdolność
organizacyjną, a nie reakcję specyficzną dla tego narzędzia AI, którego
twoja organizacja akurat używa w tym roku. Ta zasada i infrastruktura, której
wymaga, przetrwają każdą konkretną relację z dostawcą i każdą generację
narzędzi, a zbudowanie jej jako trwałej zdolności chroni twój program
metryk przed kolejną zmianą technologiczną tak samo jak przed obecną.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Panel zdominowany przez metryki produkcji | Szybkie, tanie sprzężenie zwrotne; znajome większości organizacji | Teraz aktywnie zawodny przez wpływ generatywnej AI na koszt produkcji |
| Panel zdominowany przez telemetrię rezultatów | Odporny na tę zmianę; mierzy to, co naprawdę ważne | Wolniejszy, bardziej zaszumiony sygnał; wymaga realnej inwestycji w instrumentację |
| Dodawanie metryk rezultatów obok niezmienionych metryk produkcji | Stopniowe, mniej zakłócające | Daje rozdęty panel, a nie realną poprawę |
| Pełne, świadome przebalansowanie ku telemetrii rezultatów | Odpowiada na zmianę bezpośrednio i w całości | Wymaga największej zmiany organizacyjnej i inwestycyjnej |

Główne napięcie jest w istotnym sensie tym samym, od którego ta książka
zaczęła w temacie 1.3, teraz wyostrzonym do najpilniejszej postaci:
**szybkie, znajome sprzężenie zwrotne kontra wolniejszy, uczciwy sygnał**.
Metryki produkcji zawsze były łatwiejsze i szybsze do wytworzenia;
argument tego tematu głosi, że generatywna AI przesunęła ten kompromis z
poziomu zaledwie suboptymalnego na aktywnie niebezpieczny. Rozwiąż to
napięcie tak, jak ta książka zaleca od pierwszego tematu: waż zdecydowanie
na rzecz rezultatów, zaakceptuj wolniejsze sprzężenie zwrotne, które
towarzyszy prawdziwemu pomiarowi wartości, i traktuj dyskomfort tego
wolniejszego sprzężenia jako uczciwy koszt mierzenia czegoś realnego, a nie
czegoś tylko wygodnego.

## Pytania do omówienia z zespołem

1. **Jaka część naszej obecnej infrastruktury metryk i uwagi na panelu idzie
   na metryki rezultatów, a jaka na metryki produkcji i aktywności?**
   Policz tę proporcję uczciwie; większość organizacji, oceniając ją po raz
   pierwszy, stwierdza, że jest bardziej nastawiona na produkcję, niż
   zgadywały.

2. **Jaką konkretną inwestycję w infrastrukturę telemetrii rezultatów
   odkładamy na rzecz szybszego, tańszego śledzenia produkcji?** Nazwij
   konkretny przykład, instrumentację adopcji funkcji, narzędzia do
   korelacji z rezultatami biznesowymi, i omówcie, co byłoby potrzebne, by
   to faktycznie zbudować.

3. **Czy nasza organizacja zbudowała prawdziwą cierpliwość wobec wolniejszego
   sprzężenia zwrotnego telemetrii rezultatów, czy presja szybkich wyników
   ciągle wciąga nas z powrotem ku szybszym, ale teraz zawodnym metrykom
   produkcji?** Bądź szczery co do tego wzorca w swoim niedawnym
   raportowaniu i spotkaniach przeglądowych.

4. **Która metryka produkcji lub aktywności na naszym obecnym panelu jest
   realnym kandydatem do wycofania, skoro argument tego tematu dotyczy jej
   konkretnie?** Wskaż przynajmniej jedną i omówcie, co musiałoby ją
   zastąpić, zamiast zostawiać lukę.

5. **Gdyby nasz dostawca narzędzi AI albo obecna generacja asystentów
   kodowania AI zmieniły się radykalnie w przyszłym roku, czy nasz program
   metryk nadal by się trzymał?** To sprawdza, czy twoja inwestycja w
   telemetrię rezultatów jest naprawdę trwała, zbudowana jako stała
   zdolność, czy tylko reakcją specyficzną dla obecnej sytuacji z
   narzędziami.

6. **Jak wyglądałoby pełne zaangażowanie naszej organizacji w argument
   tego tematu, z zdecydowanym przebalansowaniem inwestycji w metryki ku
   rezultatom, a nie stopniowym?** Naszkicuj to konkretnie, zamiast
   zostawiać abstrakcyjnie; luka między obecnym stanem a tą wizją to
   faktyczna mapa drogowa twojej organizacji na odpowiedź na tę zmianę.

## Perspektywa sektorowa

**Startup.** Zbudowanie telemetrii rezultatów wcześnie, zanim metryki
produkcji zdążą stać się głęboko zakorzenionym nawykiem organizacyjnym, jest
naprawdę łatwiejsze niż doposażanie później. Młoda firma przyjmująca
asystenta kodowania AI od początku ma realną okazję zbudować program metryk
najpierw wokół rezultatów, zamiast rozplątywać istniejącą kulturę
zdominowaną przez metryki produkcji.

**Mała firma.** Skup inwestycję w telemetrię rezultatów na jednej metryce
rezultatu, która najbardziej bezpośrednio odzwierciedla przetrwanie i wzrost
(temat 5.3), zamiast próbować kompleksowej instrumentacji każdej kategorii
rezultatów omówionej w tej książce. Skromna, skupiona inwestycja w
telemetrię rezultatów jest lepsza niż kompleksowy panel metryk produkcji,
który argument tego tematu konkretnie zdewaluował.

**Duże przedsiębiorstwo.** Przebalansowanie zalecane w tym temacie to w tej
skali prawdziwa, znacząca zmiana organizacyjna, zapewne wymagająca
sponsoringu kadry zarządzającej i wieloprzedziałowego planu inwestycyjnego.
Traktuj ją z taką samą powagą jak każdą inną dużą inwestycję w
infrastrukturę omówioną w tej książce i użyj konkretnych przykładów z tematów
7.1 i 7.3, inflacji metryk i rozmycia jakości, które przebalansowany panel
wychwyciłby wcześniej, by zbudować wewnętrzne uzasadnienie inwestycji.

**Administracja publiczna.** Rządowe programy technologiczne oceniane
głównie metrykami dostarczania i produkcji (dostarczone funkcje, zgodnie z
harmonogramem) są coraz bardziej podatne na dokładnie ten sceptycyzm, który
opisał temat 5.3, a argument tego tematu wyostrza tę podatność jeszcze
bardziej, w miarę jak przyjmowanie narzędzi AI rozprzestrzenia się w
szerszej branży, z której agencje rządowe rekrutują i z którą są
porównywane. Zbuduj telemetrię rezultatów jako główną podstawę raportowania
publicznego i uzasadniania budżetu, ustawiając swoją organizację przed tą
zmianą, a nie za nią.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo inżynierii firmy programistycznej,
zmotywowane bezpośrednio niemal-wpadką z inflacją metryk opisaną w
przykładzie z technologii finansowych z tematu 7.1, przeprowadziło pełny
audyt proporcji swoich inwestycji w metryki i stwierdziło, że prawie 70%
miejsca na panelu i wysiłku instrumentacji poświęcono metrykom produkcji i
aktywności, a tylko skromną, niespójną inwestycję w telemetrię rezultatów. W
ciągu następnego roku firma świadomie przebalansowała tę proporcję,
wycofując kilka metryk produkcji, które audyt z tematu 7.1 oznaczył jako
najbardziej narażone, a uwolnione moce zainwestowała w instrumentację
adopcji funkcji i rezultatów biznesowych (tematy 5.2, 5.3). Powstały panel,
przedstawiony na posiedzeniu zarządu w następnym roku, został wprost uznany
przez tego samego, wcześniej sceptycznego członka zarządu za znacząco
bardziej wiarygodną podstawę oceny inwestycji inżynierskich niż wersja
nastawiona na produkcję, którą zastąpił.

**Administracja publiczna.** Krajowa agencja usług cyfrowych, budując nowy
program metryk inżynierskich od zera właśnie dlatego, że jej poprzedni
panel, zdominowany przez metryki produkcji, wzbudził trwały sceptycyzm
legislatury, przyjęła zasadę tego tematu wprost jako założycielską decyzję
projektową: telemetria rezultatów, czyli czas oczekiwania obywatela,
odsetek ukończonych usług, odsetek uciekających defektów, miała być główną
podstawą całego raportowania publicznego, a metryki produkcji i dostarczania
zachowano tylko jako wewnętrzne narzędzia diagnostyczne, nigdy jako
główny dowód przedstawiany na zewnątrz. Ten projekt zaczynający od
rezultatów, zbudowany świadomie w świetle zmiany generatywnej AI opisanej w
tej części, dał raportowaniu agencji trwałość i wiarygodność wobec komisji
nadzorczej, jakiej nigdy nie osiągnął program poprzedni, zbudowany wokół
założeń o metrykach produkcji z wcześniejszej generacji.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z zdecydowanego zaangażowania w telemetrię rezultatów jest program
metryk, który pozostaje wiarygodny i godny zaufania przez obecną zmianę
technologiczną i cokolwiek po niej nastąpi, zamiast takiego, który wymaga
kolejnego poważnego remontu następnym razem, gdy produkcja stanie się
tania przez jakąś przyszłą zmianę technologiczną. Przykład firmy
programistycznej powyżej pokazuje to konkretnie: przebalansowany panel
bezpośrednio naprawił wiarygodność, którą wcześniejsza wersja nastawiona na
produkcję naraziła na realne ryzyko.

Całkowity koszt posiadania to inwestycja w infrastrukturę telemetrii
rezultatów zalecana w tym temacie, naprawdę znacząca, wieloprzedziałowa
praca dla dużej organizacji, zestawiona z trwałym, długoterminowym ryzykiem
programu metryk, który staje się coraz mniej wiarygodny, w miarę jak
produkcja dalej tanieje. To nie jest koszt, który ta książka prosi cię
przyjąć lekką ręką; to bezpośrednia, konieczna konsekwencja potraktowania
założycielskiego argumentu z tematu 1.3 tak poważnie, jak prosi o to ta
ostatnia część książki.

## Antywzorce i pułapki

- **Traktowanie tej zmiany jako wymagającej tylko stopniowej korekty, a nie
  prawdziwego przebalansowania:** nie docenia skali zmiany, jaką generatywna
  AI wprowadziła w tym, co znaczą metryki produkcji.
- **Dodawanie metryk rezultatów obok niezmienionego, wciąż dominującego
  zestawu metryk produkcji:** daje rozdęty panel zamiast prawdziwego
  przebalansowania, za którym opowiada się ten temat.
- **Budowanie inwestycji w telemetrię rezultatów jako reakcji na konkretne
  obecne narzędzie AI, a nie jako trwałej zdolności:** zostawia organizację
  narażoną na kolejną zmianę technologiczną w ten sam sposób.
- **Brak zbudowania organizacyjnej cierpliwości wobec wolniejszego
  sprzężenia zwrotnego telemetrii rezultatów:** grozi powrotem do szybszych,
  ale teraz zawodnych metryk produkcji pod presją szybkich wyników.
- **Wycofanie metryk produkcji bez prawdziwego zastępstwa w postaci
  telemetrii rezultatów:** zostawia lukę pomiarową zamiast prawdziwej
  poprawy.
- **Przedstawianie tej zmiany interesariuszom jako zaledwie odpowiedzi na
  narzędzia AI, a nie jako spełnienia założycielskiej zasady tej książki:**
  zaniża trwałość i ogólność argumentu.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Panel pozostaje zdominowany przez metryki
  produkcji, bez świadomej odpowiedzi na zmianę opisaną w tej części.
- **Poziom 2, Rozwój:** Dodano niektóre metryki rezultatów, ale ogólna
  proporcja inwestycji pozostaje nastawiona na produkcję i żadnych metryk
  świadomie nie wycofano.
- **Poziom 3, Standaryzacja:** Przeprowadzono świadomy audyt i przebalansowanie
  ku telemetrii rezultatów, z wycofaniem naprawdę przestarzałych metryk
  produkcji, w całej organizacji.
- **Poziom 4, Zarządzanie:** Infrastruktura telemetrii rezultatów jest
  traktowana jako pełnoprawna, ciągła inwestycja inżynierska, a
  organizacyjna cierpliwość wobec jej wolniejszego sprzężenia zwrotnego jest
  aktywnie pielęgnowana i chroniona.
- **Poziom 5, Orkiestracja:** Program metryk organizacji jest oparty na
  telemetrii rezultatów jako trwałej, stałej zasadzie projektowej,
  sprawdzonej jako odporna przez obecną zmianę technologiczną i jawnie
  zbudowanej tak, by pozostać odporną przez cokolwiek, co nadejdzie.

## Pomysły do dyskusji

1. Jaka jest nasza faktyczna obecna proporcja inwestycji w metryki rezultatów do metryk produkcji?
2. Którą jedną metrykę produkcji powinniśmy wycofać w tym kwartale i jaka metryka rezultatu powinna ją zastąpić?
3. Gdzie ostatnio organizacyjna niecierpliwość wciągnęła nas z powrotem ku szybszym, ale mniej wiarygodnym metrykom produkcji?
4. Czy nasza inwestycja w telemetrię rezultatów jest trwała, czy związana konkretnie z obecną sytuacją z narzędziami AI?
5. Co byłoby potrzebne, by w pełni zaangażować się w argument tego tematu, zamiast dostosowywać się stopniowo?

## Kluczowe wnioski

- Telemetria rezultatów staje się **konieczna, a nie tylko pożądana**, gdy
  generatywna AI czyni produkcję tanią; to założycielska zasada tematu 1.3,
  teraz pilna.
- Metryki, które **przetrwają tę zmianę**, to te, ku którym ta książka
  zmierza od początku: uciekające defekty, adopcja, rezultaty biznesowe,
  niezawodność i dobrostan.
- **Audytuj i przebalansuj proporcje swoich inwestycji w metryki** świadomie,
  wycofując naprawdę przestarzałe metryki produkcji, a nie tylko dodając
  metryki rezultatów obok nich.
- Buduj organizacyjną **cierpliwość wobec wolniejszego sprzężenia zwrotnego
  telemetrii rezultatów** i opieraj się pokusie powrotu do szybszych, ale
  teraz zawodnych metryk produkcji pod presją.
- Buduj tę inwestycję jako **trwałą zdolność**, niezależną od konkretnego
  narzędzia AI czy dostawcy, chroniącą twój program metryk przed przyszłymi
  zmianami technologicznymi tak samo jak przed obecną.

## Bibliografia i dalsza lektura

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (oparty na rezultatach fundament pomiaru, na którym
  budują całą tę książkę i ten zamykający temat części 7).
- *Lean Analytics*, Alistair Croll i Benjamin Yoskovitz (rozróżnienie
  metryk użytecznych i próżnych, które argument tego tematu rozszerza na
  erę AI).
- *The Innovator's Dilemma*, Clayton M. Christensen (ogólny wzorzec
  utrwalonych metryk i praktyk, które pod wpływem przełomowej zmiany
  technologicznej stają się obciążeniem).
- *Measure What Matters*, John Doerr (wyznaczanie celów zorientowanych na
  rezultaty jako zasada organizująca program metryk, model, który według
  tego tematu powinien teraz być regułą, a nie wyjątkiem).
