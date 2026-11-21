# 4.2 Pokrycie testami i skuteczność testów

## Przegląd i motywacja

**[Pokrycie testami](https://en.wikipedia.org/wiki/Code_coverage)** mierzy
procent kodu wykonanego przez zestaw testów: pokrycie linii, pokrycie
gałęzi lub surowsze pokrycie ścieżek. To jedna z najszerzej śledzonych metryk
w całej tej książce, tania w obliczeniu, łatwa do zwizualizowania jako jeden
procent, i w konsekwencji jedna z najczęściej manipulowanych, dokładnie tak,
jak temat 1.2 przewiduje dla każdej metryki, która staje się celem. Zestaw
testów może osiągnąć wysokie pokrycie, nie weryfikując prawie niczego
istotnego, bo pokrycie mierzy, czy kod został wykonany podczas przebiegu
testów, a nie czy test faktycznie sprawdził, że kod zachował się poprawnie.

Ta luka między pokryciem a prawdziwą skutecznością testów to nie drobna
przypisek. To główna troska tego tematu. Test, który wywołuje funkcję i nie
asertuje niczego o jej wyniku, zwiększa pokrycie identycznie jak test, który
dokładnie weryfikuje zachowanie funkcji w przypadkach brzegowych. Lekarstwo
zalecane w tym temacie, **testowanie mutacyjne**, które celowo wprowadza do
kodu drobne, sztuczne usterki i sprawdza, czy zestaw testów faktycznie je
wychwytuje, jest bezpośrednią odpowiedzią na tę lukę, a ten temat traktuje je
jako konieczne dopełnienie pokrycia, a nie opcjonalny dodatek.

W dużych zespołach cele pokrycia są często przyjmowane w całej organizacji
jako bramka jakości, dokładnie taka premiowana, bardzo widoczna metryka, o
której temat 1.2 ostrzega, że jest najbardziej narażona na manipulowanie.
Duże przedsiębiorstwa i administracja publiczna, które ustalają ogólny
wymagany procent pokrycia bez sparowanej kontroli skuteczności, w istocie
premiują dokładnie wzorzec manipulowania progiem opisany w tej książce:
trywialne testy pisane wyłącznie po to, by dobić do liczby, bez
odpowiedniej poprawy faktycznego zapobiegania defektom.

## Kluczowe zasady

- **Pokrycie mierzy wykonanie, a nie weryfikację.** To, że test uruchomił
  linię, nic nie mówi o tym, czy sprawdził o niej cokolwiek istotnego.
- **Cel pokrycia bez kontroli skuteczności to podręcznikowa konfiguracja
  prawa Goodharta** (temat 1.2): liczba się poprawia, a prawdziwa jakość nie.
- **Testowanie mutacyjne jest koniecznym dopełnieniem pokrycia**, a nie jego
  zamiennikiem. Używaj obu razem.
- **Pokrycie jest użyteczniejsze jako dolna granica niż jako cel do
  maksymalizacji.** Niska liczba ujawnia naprawdę nietestowany kod. Ściganie
  100% często daje malejące lub ujemne zwroty.
- **Pokrycie krytycznych ścieżek liczy się bardziej niż jednolite, ogólne
  pokrycie.** Nie każdy kod niesie takie samo ryzyko, jeśli zawiedzie.

## Rekomendacje

### Używaj pokrycia do znajdowania nietestowanego kodu, a nie jako celu do maksymalizacji

Traktuj raport pokrycia przede wszystkim jako mapę tego, co nie ma żadnego
testu, co jest naprawdę użyteczną informacją, a nie jako wynik do pchania ku
100%. Kod z zerowym pokryciem to realna luka warta zamknięcia. Krańcowa
wartość podniesienia pokrycia z 85% do 95% jest zwykle znacznie niższa i
często niewarta wysiłku, jaki to kosztuje, zwłaszcza jeśli ten wysiłek daje
testy o niskiej wartości, napisane tylko po to, by dobić do wyższej liczby.

### Zestawiaj każdy cel pokrycia z testowaniem mutacyjnym

Narzędzia do **testowania mutacyjnego** automatycznie wprowadzają do kodu
drobne usterki, odwracając operator porównania, zmieniając warunek brzegowy,
a następnie uruchamiają twój zestaw testów na każdej zmutowanej wersji.
Zestaw testów, który "zabija" (zawodzi na) większości mutantów, naprawdę
weryfikuje zachowanie. Zestaw testów z wysokim pokryciem linii, ale niskim
odsetkiem zabitych mutantów, wykonuje kod bez sensownego jego sprawdzania.
To zestawienie jest najskuteczniejszą pojedynczą barierą ochronną przed
manipulowaniem celem pokrycia, a ta książka zaleca je jako standardową
praktykę, a nie zaawansowaną czy opcjonalną technikę.

### Najpierw priorytetyzuj pokrycie i testowanie mutacyjne na krytycznych ścieżkach

Nie każdy kod niesie takie samo ryzyko. Ścieżka przetwarzania płatności,
sprawdzenie uwierzytelnienia czy skrypt migracji danych zasługują na
znacznie bardziej rygorystyczne testowanie niż rzadko używany raport
administracyjny. Zamiast dążyć do jednolitego pokrycia w całej bazie kodu,
zidentyfikuj swoje najbardziej ryzykowne ścieżki kodu o największych
konsekwencjach i najpierw tam skoncentruj wysiłek zarówno pokrycia, jak i
testowania mutacyjnego, akceptując niższe pokrycie dla kodu naprawdę
niskiego ryzyka jako świadomy, poinformowany kompromis, a nie przeoczenie.

### Wypatruj konkretnych wzorców manipulowania pokryciem

Najczęstsze sposoby manipulowania pokryciem, gdy staje się celem, to: testy,
które wywołują funkcję, ale nie asertują niczego sensownego o wyniku
(manipulowanie progiem z tematu 1.2 zastosowane do tej metryki), wyłączanie
lub usuwanie testów, które zawodzą, zamiast naprawiania leżącego u podstaw
problemu, oraz całkowite wykluczanie trudnego do przetestowania kodu z
obliczeń pokrycia, zamiast zajęcia się tym, dlaczego jest trudny do
przetestowania. Okresowo audytuj próbkę testów bezpośrednio, czytając ich
faktyczne asercje, zamiast ufać samemu procentowi pokrycia.

### Ustaw dolną granicę pokrycia, a nie górny pułap, w potoku CI

Skonfiguruj potok budowania tak, by zawodził, jeśli pokrycie nowego kodu
spadnie poniżej uzgodnionej dolnej granicy, zapobiegając regresji, zamiast
wymagać, by każda zmiana podnosiła ogólną liczbę. To rozróżnienie ma
znaczenie: dolna granica chroni przed osuwaniem się bez tworzenia tej samej
nieustępliwej presji w górę, która rodzi testy o niskiej wartości pisane
wyłącznie po to, by podciągnąć liczbę jeszcze trochę wyżej.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Sam procent pokrycia | Tani, prosty, szeroko wspierany przez narzędzia | Łatwy do zmanipulowania; mierzy wykonanie, nie weryfikację |
| Pokrycie plus testowanie mutacyjne | Weryfikuje, że testy faktycznie sprawdzają zachowanie, odporne na manipulowanie | Bardziej kosztowne obliczeniowo; wymaga inwestycji w narzędzia |
| Jednolity cel pokrycia w całej bazie kodu | Prosty do sformułowania i egzekwowania | Marnuje wysiłek na kodzie niskiego ryzyka; niedoinwestowuje gdzie indziej względem ryzyka |
| Pokrycie oparte na ryzyku, najpierw krytyczne ścieżki | Koncentruje wysiłek tam, gdzie liczy się najbardziej | Wymaga osądu, by poprawnie zidentyfikować naprawdę krytyczne ścieżki |

Główne napięcie to **prostota kontra uczciwość**. Pojedynczy procent pokrycia
łatwo zaraportować i łatwo ustawić jako cel, ale ta prostota jest właśnie tym,
co sprawia, że tak łatwo go zmanipulować, gdy staje się premiowaną liczbą.
Rozwiąż to napięcie, akceptując dodatkową złożoność testowania mutacyjnego i
priorytetyzacji opartej na ryzyku jako koszt uczciwego sygnału oraz jawnie
tłumacząc zespołowi, dlaczego niższa ogólna liczba pokrycia, skoncentrowana
poprawnie na krytycznych ścieżkach i poparta wysokim odsetkiem zabitych
mutantów, jest cenniejsza niż wyższa, bardziej równomiernie rozłożona, ale
mniej skutecznie weryfikowana.

## Pytania do omówienia z zespołem

1. **Jaki jest nasz odsetek zabitych mutantów na najbardziej ryzykownych
   ścieżkach kodu i jak ma się do procentu pokrycia tego samego kodu?** Duża
   różnica między wysoką liczbą pokrycia a niskim odsetkiem zabitych
   mutantów to najwyraźniejszy możliwy znak, że samo pokrycie nie mówi ci
   tego, co myślisz, że ci mówi.

2. **Czy kiedykolwiek napisaliśmy test głównie po to, by zwiększyć liczbę
   pokrycia, bez większego zastanowienia, co ma weryfikować?** Bądź tu
   szczery. Zdarza się to częściej, niż zespoły lubią przyznać, zwłaszcza pod
   presją terminu, gdy bramka pokrycia blokuje scalenie.

3. **Czy nasz wysiłek pokrycia jest skoncentrowany na najbardziej
   ryzykownych ścieżkach kodu, czy rozłożony równomiernie bez względu na
   konsekwencje awarii tego kodu?** Zestaw swój obecny rozkład pokrycia z
   uczciwą oceną ryzyka w bazie kodu i poszukaj niedopasowania.

4. **Czy kiedykolwiek wyłączyliśmy lub usunęliśmy zawodzący test zamiast
   naprawić problem, który ujawnił?** To jedna z najbardziej szkodliwych form
   manipulowania pokryciem, bo aktywnie usuwa realną ochronę, podczas gdy
   raportowana liczba pokrycia może ledwo drgnąć.

5. **Czy nasz potok CI wymusza dolną granicę pokrycia dla nowego kodu, czy
   naciska na coraz wyższy pułap mimo malejących zwrotów?** Omów, czy obecny
   projekt bramki tworzy właściwą zachętę, ochronę przed regresją, czy
   niewłaściwą, nieustępliwą presję w górę, która nagradza wypychanie testów o
   niskiej wartości.

6. **Jaki kod w naszej bazie jest wykluczony z obliczeń pokrycia i czy to
   wykluczenie jest uzasadnione, czy ukrywa realną lukę w testowaniu?**
   Przejrzyj swoją faktyczną konfigurację wykluczeń. Często ta lista cicho
   rośnie z czasem, a nikt nie sprawdza, czy każde wykluczenie nadal jest
   uzasadnione.

## Perspektywa sektorowa

**Startup.** Formalne cele pokrycia są w tej wczesnej fazie często zbędne.
Skup wysiłek pisania testów bezpośrednio na najbardziej ryzykownych,
krytycznych dla biznesu ścieżkach kodu (zwykle logice płatności lub
głównego przepływu), zamiast gonić za ogólnym procentem w bazie kodu, która
nadal szybko się zmienia i i tak może wkrótce zostać w dużej mierze
przepisana.

**Mała firma.** Większość platform CI raportuje pokrycie automatycznie przy
minimalnym koszcie konfiguracji. Używaj go głównie do wypatrywania całkiem
nietestowanego krytycznego kodu, zamiast gonić za konkretnym procentem, i
rozważ testowanie mutacyjne dopiero, gdy będziesz mieć moc inżynierską, by
działać na podstawie tego, co ujawni.

**Duże przedsiębiorstwo.** Ogólne, obejmujące całą organizację cele pokrycia
to częsty i brzemienny w skutki błąd w tej skali, bo premiują dokładnie to
manipulowanie, które opisuje ten temat, w dziesiątkach zespołów jednocześnie.
Ustal oczekiwania pokrycia oparte na ryzyku, różniące się według krytyczności
usługi, i zainwestuj w infrastrukturę testowania mutacyjnego konkretnie dla
swoich najbardziej ryzykownych systemów.

**Administracja publiczna.** Wymagania pokrycia pojawiają się czasem w
dokumentacji zamówień publicznych lub zgodności jako tępy, łatwy do
sprecyzowania wskaźnik zastępczy zapewnienia jakości. Tam, gdzie to możliwe,
zestaw każdy umownie wymagany procent pokrycia z wymaganiem skuteczności
opartej na testowaniu mutacyjnym lub defektach, aby zachęta umowna nie
nagradzała niechcący dokładnie tego wypychania testów o niskiej wartości,
przed którym ostrzega ten temat.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo platformy e-commerce ustaliło w całej
firmie wymóg 95% pokrycia dla całego nowego kodu, egzekwowany jako twarda
bramka CI. Audyt dwa lata później, wywołany falą defektów produkcyjnych w
rzekomo dobrze przetestowanym kodzie, wykazał odsetek zabitych mutantów poniżej
40% w dużej części bazy kodu: zespoły pisały testy, które wykonywały ścieżki
kodu bez sensownego asertowania ich zachowania, wyłącznie po to, by spełnić
bramkę pod presją terminów. Firma zastąpiła ogólny wymóg pokrycia polityką
opartą na poziomach ryzyka: surowe pokrycie plus obowiązkowe testowanie
mutacyjne z progiem 80% zabitych mutantów dla kodu płatności i
uwierzytelniania oraz znacznie lżejsza dolna granica pokrycia dla
niskoryzykownych narzędzi wewnętrznych, co zarówno zmniejszyło zmarnowany
wysiłek testowania, jak i mierzalnie poprawiło odsetek defektów na naprawdę
krytycznych ścieżkach.

**Administracja publiczna.** System kwalifikowania do świadczeń agencji
zdrowia publicznego miał umownie wymagane utrzymanie 90% pokrycia testami w
umowie z dostawcą rozwoju. Przegląd poawaryjny, po znaczącym defekcie w
obliczaniu uprawnień, który trafił na produkcję mimo spełnienia wymogu
pokrycia, wykazał, że odpowiedzialna za niego funkcja osiągnęła pokrycie w
całości przez testy wywołujące funkcję z poprawnymi danymi wejściowymi, ale
nigdy niesprawdzające warunków brzegowych ani niepoprawnych danych, czyli
dokładnie tam, gdzie wystąpił defekt. Poprawiona umowa agencji z dostawcą
wymaga teraz udokumentowanego wyniku testowania mutacyjnego obok pokrycia dla
każdego kodu obliczającego uprawnienia, zamykając konkretną lukę, która
pozwoliła, by zgodne, ale nieskuteczne testowanie spełniało umowę.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z zestawiania pokrycia z testowaniem mutacyjnym to wychwycenie luki
między pozorną a faktyczną jakością testów, zanim kosztuje defekt
produkcyjny. Przykład e-commerce powyżej pokazuje ten wzorzec wyraźnie: sam
wymóg pokrycia wytworzył fałszywe poczucie bezpieczeństwa, które fala
defektów w końcu obnażyła, ze znacznie większym kosztem niż inwestycja w
testowanie mutacyjne, która wychwyciłaby lukę wcześniej.

Całkowity koszt posiadania obejmuje koszt obliczeniowy testowania
mutacyjnego, które jest droższe w uruchomieniu niż prosta instrumentacja
pokrycia i dlatego zwykle zarezerwowane dla kodu krytycznych ścieżek, a nie
całej bazy kodu, plus czas inżynierski na interpretację wyników i działanie
na ich podstawie. Ten koszt jest uzasadniony właśnie dla kodu najwyższego
ryzyka, gdzie koszt niewykrytej luki w skuteczności testów jest najwyższy.

## Antywzorce i pułapki

- **Traktowanie procentu pokrycia jako bezpośredniego wyroku o jakości:**
  mierzy wykonanie, a nie weryfikację.
- **Pisanie testów głównie po to, by spełnić bramkę pokrycia:** daje
  dokładnie ten wzorzec testów o niskiej wartości i manipulowania progiem,
  przed którym ostrzega temat 1.2.
- **Wyłączanie lub usuwanie zawodzących testów zamiast naprawiania
  problemu:** usuwa realną ochronę, ledwo wpływając na raportowaną liczbę.
- **Stosowanie jednolitego celu pokrycia bez względu na ryzyko kodu:**
  marnuje wysiłek na kodzie niskiego ryzyka i niedoinwestowuje naprawdę
  krytyczne ścieżki.
- **Cicho rosnąca z czasem lista wykluczeń:** ukrywa realne luki w
  testowaniu za technicznie dokładną, ale mylącą liczbą pokrycia.
- **Dążenie do górnego pułapu pokrycia zamiast dolnej granicy:** tworzy
  nieustępliwą presję w górę, która nagradza wypychanie testów ponad prawdziwą
  weryfikację.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Pokrycia nie mierzy się albo mierzy się je
  niespójnie, bez dolnej granicy, celu ani kontroli skuteczności.
- **Poziom 2, Rozwój:** Cel pokrycia istnieje i jest śledzony, ale ani
  testowanie mutacyjne, ani priorytetyzacja oparta na ryzyku nie wpływają na
  alokację wysiłku.
- **Poziom 3, Standaryzacja:** Dolne granice pokrycia są spójnie egzekwowane w
  CI, a priorytetyzacja oparta na ryzyku kieruje, gdzie koncentruje się
  wysiłek pokrycia.
- **Poziom 4, Zarządzanie:** Testowanie mutacyjne działa na kodzie krytycznych
  ścieżek, ze śledzonym progiem odsetka zabitych mutantów, który trzeba
  spełnić obok pokrycia, a listy wykluczeń są okresowo audytowane.
- **Poziom 5, Orkiestracja:** Organizacja potrafi wskazać konkretne redukcje
  defektów wynikające z priorytetyzacji opartej na testowaniu mutacyjnym, a
  dane o pokryciu i skuteczności razem bezpośrednio wpływają na decyzje
  inwestycyjne w testowanie.

## Pomysły do dyskusji

1. Jaki jest nasz odsetek zabitych mutantów na najważniejszej ścieżce kodu i czy w ogóle go znamy?
2. Czy kiedykolwiek napisaliśmy test o niskiej wartości wyłącznie po to, by spełnić bramkę pokrycia?
3. Czy nasz obecny wysiłek pokrycia jest skoncentrowany tam, gdzie ryzyko jest najwyższe, czy rozłożony równomiernie?
4. Jaki kod jest dziś wykluczony z obliczeń pokrycia i czy to wykluczenie nadal jest uzasadnione?
5. Czy inwestycja w testowanie mutacyjne w naszym najbardziej ryzykownym systemie byłaby warta swojego kosztu obliczeniowego?

## Kluczowe wnioski

- Pokrycie testami mierzy **wykonanie, a nie weryfikację**. Pokryta linia nic
  nie mówi o tym, czy została sensownie sprawdzona.
- Zestawiaj pokrycie z **testowaniem mutacyjnym**, by zweryfikować, że testy
  faktycznie wychwytują realne usterki, a nie tylko uruchamiają kod.
- Koncentruj wysiłek testowania na **krytycznych, wysokoryzykownych
  ścieżkach**, zamiast dążyć do jednolitego pokrycia w całej bazie kodu.
- Używaj pokrycia jako **dolnej granicy chroniącej przed regresją**, a nie
  pułapu do nieustępliwej maksymalizacji.
- Wypatruj konkretnych wzorców manipulowania pokryciem: **testów o niskiej
  wartości, wyłączonych zawodzących testów i cicho rosnących list
  wykluczeń**.

## Bibliografia i dalsza lektura

- *Working Effectively with Legacy Code*, Michael Feathers (strategia
  pokrycia testami dla istniejących, trudnych do testowania baz kodu).
- Jia, Yue, i Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering* (2011):
  kompleksowy przegląd technik testowania mutacyjnego i ich skuteczności.
- *xUnit Test Patterns*, Gerard Meszaros (wzorce projektowania testów
  istotne dla pisania testów naprawdę skutecznych, a nie tylko spełniających
  wymóg pokrycia).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (związek między praktykami testowymi a wydajnością
  dostarczania).
