# 1.2 Prawo Goodharta i psychologia metryk

## Przegląd i motywacja

[Prawo Goodharta](https://en.wikipedia.org/wiki/Goodhart%27s_law), nazwane od
ekonomisty Charlesa Goodharta, formułuje się zwykle tak: gdy miara staje się
celem, przestaje być dobrą miarą. Oryginalna obserwacja Goodharta z 1975 roku
dotyczyła polityki pieniężnej, ale późniejsze sformułowanie antropolożki
Marilyn Strathern jest wersją, której faktycznie potrzebują zespoły
programistyczne, i to ono jest zdaniem, na którym zbudowana jest cała ta
książka. Każda metryka w każdym dalszym temacie, częstotliwość wdrożeń,
pokrycie testami, wyniki satysfakcji, niesie to ryzyko, a każda rekomendacja w
tej książce jest w jakiejś formie strategią zarządzania nim.

Mechanizm nie jest tajemniczy. Ludzie reagują na zachęty, a metryka powiązana z
nagrodą, oceną lub reputacją jest zachętą, niezależnie od tego, czy ktokolwiek
tak ją zamierzał. Gdy zespół wie, że "częstotliwość wdrożeń" jest obserwowana,
najtańszy sposób poruszenia tej liczby nie zawsze jest tym zamierzonym:
podziel jedną znaczącą zmianę na pięć trywialnych wdrożeń, a liczba rośnie,
podczas gdy nic realnego się nie poprawiło. To nie jest opowieść o złych
aktorach. Zwykli, życzliwi inżynierowie reagują dokładnie tak na źle
zaprojektowane zachęty, bo to zachęta, a nie stojąca za nią intencja,
kształtuje zachowanie pod presją.

W dużych organizacjach stawka jest wyższa, bo dystans między projektantem
metryki a osobą, której zachowanie ona kształtuje, rośnie wraz ze skalą. Lider
zespołu, który buduje metrykę dla własnego ośmioosobowego zespołu, może sam
obserwować manipulacje i szybko korygować kurs. Metryka wdrożona w
sześćsetosobowym pionie albo opublikowana w rządowym raporcie o wynikach,
czytanym przez parlament, przechodzi przez warstwy ludzi, którzy nigdy nie
poznali jej autora i mają wszelkie powody, by traktować literę metryki jak
cel. Zniekształcenie narasta z dystansem, i właśnie dlatego ten temat, a nie
późniejszy, jest miejscem, w którym książka umieszcza swój środek ciężkości.

## Kluczowe zasady

- **Zakładaj, że każda metryka objęta zachętą będzie manipulowana.**
  Projektuj przeciw temu od pierwszej wersji, a nie po odkryciu zniekształcenia.
- **Manipulowanie jest racjonalne, a nie złośliwe.** Ludzie reagują rozsądnie
  na zachętę, którą zbudowałeś; obwinianie ich niczego nie naprawia.
- **Dystans od właściciela metryki zwiększa ryzyko zniekształcenia.** Im dalej
  liczba wędruje od osoby, która rozumie jej intencję, tym bardziej staje się
  literą reguły, a nie jej duchem.
- **Wskaźniki i zakresy opierają się manipulacji lepiej niż surowe liczby.**
  Surowa liczba nagradza wolumen; dobrze dobrany wskaźnik nagradza faktyczne
  zachowanie, o które ci chodzi.
- **Bariera ochronna nie jest opcjonalna dla metryki objętej zachętą.** Każda
  metryka, do której przypinasz nagrodę, potrzebuje sparowanej metryki
  równoważącej, która nie może się pogorszyć.

## Rekomendacje

### Klasyfikuj każdą metrykę według narażenia na zachętę

Zanim opublikujesz metrykę gdziekolwiek na widoku, zapytaj wprost: czy czyjaś
nagroda, ocena, reputacja lub budżet zależy od tego, że ta liczba poruszy się w
określonym kierunku? Jeśli tak, jest to metryka objęta zachętą i potrzebuje
bariery ochronnej (niżej), zanim ruszy. Jeśli nie, jest to metryka
diagnostyczna (temat 1.1) i niesie niższe ryzyko manipulacji, choć nigdy zerowe,
bo ludzie nadal mogą kształtować liczbę, o której tylko oczekują, że będą nią
później oceniani, nawet bez formalnej zachęty dziś.

### Preferuj wskaźniki, stopy i kohorty zamiast surowych liczb

Surową liczbę, jak "zamknięte zgłoszenia", można zmanipulować, robiąc więcej
czegoś o niskiej wartości. Wskaźnik, jak "odsetek zgłoszeń rozwiązanych przy
pierwszym kontakcie", nagradza zachowanie leżące u podstaw, a nie wolumen.
**Kohorta**, czyli grupa zdefiniowana wspólnym punktem startu, na przykład
wszystkie wdrożenia w danym tygodniu, zapobiega ukryciu złego, niedawnego
trendu w pochlebnym agregacie z długiego okresu. Wszędzie tam, gdzie wybierasz
między liczbą a stopą, które oddają to samo zachowanie, wybierz stopę.

### Paruj każdą metrykę objętą zachętą z barierą ochronną

**Metryka-bariera** to sparowana metryka równoważąca, która nie może się
pogorszyć, gdy metryka główna się poprawia. Częstotliwość wdrożeń paruje się z
odsetkiem nieudanych zmian; czas realizacji z odsetkiem uciekających defektów;
czas obsługi zespołu wsparcia z satysfakcją klientów. Bariera sprawia, że
tanie manipulowanie staje się widocznie drogie: zespół, który poprawia liczbę
objętą zachętą, pogarszając barierę, zostaje przyłapany dzięki parowaniu, a nie
szczęściu. Projektuj barierę jednocześnie z metryką główną, nigdy jako
domysł po fakcie, gdy manipulowanie zostało już odkryte.

### Wypatruj czterech klasycznych wzorców manipulowania

Zniekształcenia w świetle prawa Goodharta układają się w niewielką liczbę
rozpoznawalnych kształtów. **Manipulowanie progiem** optymalizuje dokładnie do
celu i staje (cel 95% pokrycia testami daje trywialne testy, które mają dobić
do równych 95%, a nie rzeczywiste pokrycie). **Manipulowanie definicją** zmienia
to, co się liczy, a nie to, co się dzieje (przedefiniowanie "rozwiązane", by
wykluczyć trudne przypadki). **Manipulowanie czasem** przesuwa moment
zapisania pracy, a nie moment jej wykonania (grupowanie wdrożeń tuż przed
zamknięciem okna raportowego). **Manipulowanie przez podstawienie** dostarcza
literę metryki, porzucając jej intencję (rozbicie jednej realnej zmiany na
wiele trywialnych, by napompować częstotliwość wdrożeń). Jawne nazwanie tych
wzorców przed zespołem znacznie ułatwia ich dostrzeżenie we własnych liczbach.

### Oddzielaj pomiar od nagrody, gdzie tylko możesz

Najsilniejsza bariera ze wszystkich jest strukturalna: oddziel metrykę od
indywidualnej nagrody. Metryka używana wyłącznie do zrozumienia systemu, bez
płacy, oceny czy pozycji żadnej osoby zależnej od jej kierunku, podlega
znacznie słabszej presji manipulowania niż ta powiązana z oceną. Dlatego
rozróżnienie diagnostyczne-kontra-oceniające z tematu 1.1 ma tak duże znaczenie
w praktyce: utrzymanie metryki diagnostycznej jest często tańsze i skuteczniejsze
niż jakakolwiek inżynieria barier stosowana po fakcie.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Surowe liczby | Proste do obliczenia i wyjaśnienia | Silnie podatne na manipulowanie wolumenem |
| Wskaźniki i stopy | Nagradzają właściwe zachowanie, opierają się manipulowaniu wolumenem | Mogą ukrywać problem kurczącego się mianownika |
| Parowanie z barierą | Czyni tanie manipulowanie widocznie drogim | Podwaja liczbę metryk do zdefiniowania, posiadania i utrzymania |
| Tylko diagnostyczne (bez indywidualnej nagrody) | Najniższa presja manipulowania spośród opcji | Słabsza bezpośrednia dźwignia motywacyjna dla kierownictwa |
| Silnie obłożone zachętami | Silna, szybka reakcja behawioralna | Wysokie ryzyko zniekształcenia, często w ciągu jednego cyklu raportowania |

Centralne napięcie to **siła motywacyjna kontra ryzyko zniekształcenia**.
Metryki, które poruszają zachowania najszybciej, czyli te z liczbą wprost
powiązaną z nagrodą, są dokładnie tymi najbardziej narażonymi na prawo
Goodharta. Rozwiąż to napięcie, rezerwując silne zachęty dla metryk rezultatu,
które naprawdę trudno tanio zmanipulować, i parując wszystko, co obłożysz
zachętą, z barierą zaprojektowaną jednocześnie, a nie dokręconą po pierwszym
zniekształceniu.

## Pytania do omówienia z zespołem

1. **Dla każdej metryki, od której zależy czyjaś nagroda: jaki jest
   najtańszy sposób jej zmanipulowania i czy dziś byśmy to wychwycili?**
   Usiądźcie i celowo zaprojektujcie exploit dla każdej liczby objętej zachętą
   na waszym panelu: jak racjonalny, życzliwy zespół sprawiłby, by to wyglądało
   dobrze, nie wykonując stojącej za tym pracy? Jeśli nie umiesz nazwać sposobu,
   w jaki byś to wychwycił, nie jesteś jeszcze gotów obłożyć metryki zachętą. To
   ćwiczenie jest niewygodne i ten dyskomfort jest jego sensem.

2. **Które z naszych obecnych metryk już zdryfowały w jeden z czterech wzorców
   manipulowania, czyli próg, definicję, czas lub podstawienie, bez
   wytknięcia tego przez kogokolwiek?** Zniekształcenie rzadko się ogłasza;
   pojawia się jako liczba, która wygląda świetnie, podczas gdy skargi leżące
   u podstaw, incydenty lub opinie klientów opowiadają inną historię.
   Przejdźcie panel przez każdy wzorzec po nazwie i bądźcie szczerzy co do
   dopasowań.

3. **Czy każda metryka objęta zachętą na naszym panelu ma sparowaną barierę i
   czy ta bariera została zaprojektowana jednocześnie z metryką?** Bariera
   dodana dopiero po odkryciu manipulowania to naprawa, a nie decyzja
   projektowa, i zwykle przychodzi za późno, by zapobiec pierwszej rundzie
   szkód dla zaufania. Zbadaj w audycie swoje metryki objęte zachętą pod tym
   konkretnym kątem.

4. **Jak daleko ta metryka wędruje od osoby, która rozumie jej intencję, zanim
   dotrze do osoby, której zachowanie kształtuje?** Metryka zbudowana przez
   zespół platformowy i konsumowana trzy warstwy zarządzania dalej, lub
   opublikowana w raporcie publicznym czytanym przez ludzi, którzy nigdy nie
   widzieli instrumentacji, jest znacznie bardziej narażona na manipulowanie
   literą, a nie duchem, niż ta, którą zespół zaprojektował dla siebie.
   Zmapujcie ten dystans dla swoich najbardziej doniosłych metryk.

5. **Czy kiedykolwiek usunęliśmy zachętę z metryki po odkryciu, że jest
   manipulowana, i ile zaufania kosztowała nas ta naprawa?** Organizacje często
   odkrywają prawo Goodharta w trudny sposób, po kwartale lub roku
   zniekształconych zachowań, a naprawa kosztuje więcej, niż kosztowałaby
   profilaktyka. Przynieś prawdziwy incydent, jeśli go masz, i wyciągnij z niego
   lekcję jawnie, zamiast po cichu iść dalej.

6. **Gdzie założyliśmy, że manipulowanie jest problemem osobistej uczciwości, a
   nie racjonalną reakcją na źle zaprojektowaną zachętę?** Obwinianie jednostek
   za przewidywalną reakcję na zachętę, którą sami zbudowaliśmy, rzadko cokolwiek
   naprawia i często dodatkowo szkodzi zaufaniu. Przeformułuj każdy incydent
   manipulowania, jaki pamiętasz, jako problem projektu metryki, a nie
   charakteru osoby, i zapytaj, jaki redesign by mu zapobiegł.

## Perspektywa sektorowa

**Startup.** W maleńkim zespole najszybszą barierą jest bezpośrednia rozmowa:
każdy widzi liczbę i od razu pyta "czekaj, dlaczego to skoczyło". Realnym
ryzykiem jest założyciel, który przypina metrykę do narracji dla
inwestorów (wzrost za wszelką cenę) bez sparowanej bariery, bo zewnętrzni
inwestorzy wywierają dokładnie tę odległą, wysokostawkową presję, która czyni
manipulowanie atrakcyjnym.

**Mała firma.** Gotowe narzędzia często dostarczają domyślne panele zbudowane
wokół liczb (zamknięte zgłoszenia, obsłużone połączenia), bo liczby łatwo
obliczyć. Aktywnie zamieniaj je na stopy wszędzie, gdzie narzędzie na to
pozwala, i oprzyj się powiązaniu jakiejkolwiek pojedynczej liczby z premią lub
oceną bez uprzedniego wskazania jej bariery.

**Duże przedsiębiorstwo.** Dominującym ryzykiem jest dystans: metryka
zaprojektowana przez zespół platformowy do wewnętrznej diagnozy trafia trzy
warstwy zarządzania dalej i staje się KPI, którego nikt z jej budowniczych by
nie rozpoznał. Rozstrzygnij to jawnie w nadzorze (temat 1.4): wymagaj
udokumentowanej bariery, zanim jakakolwiek metryka zostanie zatwierdzona do
użycia w ocenie okresowej lub kartach wyników zarządu.

**Administracja publiczna.** Publikowane miary wyników podlegają najsilniejszej
presji manipulowania ze wszystkich kategorii w tej książce, bo niespełniony cel
może nieść konsekwencje budżetowe lub polityczne. Badaj w audycie samą
definicję w stałym rytmie, nie tylko liczbę, bo klasyczny wzorzec manipulacji w
sektorze publicznym to ciche przedefiniowywanie, kto się liczy (lista
oczekujących "rozwiązana" przez przeklasyfikowanie, kto czeka), zamiast
poprawiania usługi leżącej u podstaw.

## Przykłady

**Przedsiębiorstwo.** Firma technologiczna z branży handlu detalicznego ustaliła
cel 99% automatycznego pokrycia testami we wszystkich usługach, powiązany z
zespołową oceną jakości używaną w przeglądach kwartalnych. W ciągu dwóch
kwartałów pokrycie osiągnęło 99%, a liczba incydentów wzrosła. Audyt
wykazał, że zespoły pisały trywialne testy, sprawdzające tylko, że funkcja
zwraca wartość bez wyrzucenia wyjątku, wyłącznie po to, by zadowolić narzędzie
pokrycia, podczas gdy rzeczywiste testowanie przypadków brzegowych w ogóle się nie
poprawiło. Rozwiązanie zastąpiło surowy cel pokrycia metryką sparowaną:
pokrycie plus wynik testowania mutacyjnego (temat 4.2), który mierzy, czy
testy faktycznie wychwytują wstrzyknięte błędy, co jest znacznie trudniejsze
do zmanipulowania tanim kosztem.

**Administracja publiczna.** Stanowa agencja ubezpieczeń od bezrobocia była
oceniana według mediany liczby dni do pierwszej wypłaty, publikowanej
parlamentowi. Pod presją osiągnięcia celu jedno regionalne biuro zaczęło po
cichu przeklasyfikowywać trudniejsze do obsługi wnioski jako "niekompletne" i
wykluczać je z mianownika, co sprawiło, że opublikowana mediana wyglądała
znakomicie, podczas gdy niektórzy wnioskodawcy czekali znacznie dłużej, niż
sugerował raport. Niezależny audyt samej definicji, nie tylko liczby, odkrył tę
praktykę. Rozwiązanie agencji zamroziło definicję, publicznie opublikowało
kryteria wykluczeń i dodało metrykę-barierę śledzącą sam odsetek wniosków
niekompletnych, tak by skok przeklasyfikowań był teraz widoczny, a nie ukryty.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z poważnego potraktowania prawa Goodharta jest uniknięta poprawka
pracy. Organizacja, która projektuje bariery z góry, wydaje skromną ilość
dodatkowego wysiłku na zdefiniowanie drugiej metryki obok pierwszej.
Organizacja, która pomija ten krok, często traci cały kwartał lub więcej na
źle ukierunkowany wysiłek, zanim zniekształcenie wyjdzie na jaw, a potem
ponosi znacznie trudniejszy koszt cofania zmanipulowanych zachowań i odbudowy
zaufania do liczby. Powyższy przykład z handlu detalicznego jest typowy: tani
w zapobieganiu, drogi w naprawie.

Całkowity koszt posiadania (TCO) bariery nie jest zerowy: to druga metryka do
zdefiniowania, zinstrumentowania i przeglądania. Ale ten koszt jest mały i stały
w porównaniu z nieograniczonym kosztem zachęty, która po cichu nagradza złe
zachowanie przez miesiące, zanim ktokolwiek to zauważy. Każdy temat po tym
wlicza ten kompromis do ceny, dlatego parowanie z barierą pojawia się jako
rekomendacja w reszcie książki, a nie tylko tutaj.

## Antywzorce i pułapki

- **Publikowanie metryki objętej zachętą bez bariery:** najczęstsza pojedyncza
  przyczyna źródłowa zniekształconego panelu w tej książce.
- **Traktowanie manipulowania jak osobistej wady:** obwinia jednostki za
  racjonalną reakcję na źle zaprojektowaną zachętę i niczego nie naprawia.
- **Audytowanie liczby, ale nigdy definicji:** klasyczny tryb porażki w
  sektorze publicznym, gdzie metryka wygląda dobrze, bo po cichu zmieniło się,
  kto się liczy.
- **Zakładanie, że metryka, która działała jako diagnostyczna, pozostanie
  bezpieczna, gdy stanie się oceniająca:** narażenie zmienia się w chwili
  przypięcia nagrody, nawet jeśli nic innego w metryce się nie zmieniło.
- **Projektowanie bariery dopiero po pierwszym incydencie manipulowania:**
  naprawa, która przychodzi, gdy szkoda dla zaufania jest już wyrządzona.
- **Ignorowanie dystansu:** zakładanie, że metryka będzie czytana tak, jak
  zamierzał jej projektant, gdy przejdzie kilka warstw zarządzania lub trafi do
  raportu publicznego daleko od niego.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryki są obkładane zachętami doraźnie, bez
  uwzględnienia ryzyka manipulowania, a zniekształcenie jest odkrywane dopiero,
  gdy jakość lub zaufanie wyraźnie ucierpią.
- **Poziom 2, Rozwój:** Niektóre zespoły rozpoznają manipulowanie po fakcie i
  korygują nieformalnie, ale brakuje spójnej praktyki projektowania barier z
  wyprzedzeniem.
- **Poziom 3, Standaryzacja:** Każda metryka objęta zachętą w całej
  organizacji wymaga udokumentowanej bariery przed zatwierdzeniem, a cztery
  wzorce manipulowania są nazwane i nauczane.
- **Poziom 4, Zarządzanie:** Ryzyko manipulowania jest aktywnie monitorowane:
  definicje są okresowo audytowane, pary barier są przeglądane pod kątem tego,
  czy nadal wychwytują zniekształcenia, a incydenty manipulowania są śledzone
  jako osobna metryka.
- **Poziom 5, Orkiestracja:** Organizacja traktuje prawo Goodharta jako stałe
  ograniczenie projektowe, przeglądane automatycznie przy każdej proponowanej
  nowej metryce, i potrafi wskazać konkretne redesigny, które zapobiegły
  zniekształceniu, zanim do niego doszło, a nie tylko po fakcie.

## Pomysły do dyskusji

1. Jaka jest najdoniosłejsza metryka w naszej organizacji, która dziś nie ma bariery?
2. Czy kiedykolwiek widzieliśmy liczbę, która się poprawiała, podczas gdy rzeczywistość się pogarszała?
3. Kto by zauważył, gdyby definicja jednej z naszych publicznych metryk po cichu się zmieniła?
4. Na który z czterech wzorców manipulowania (próg, definicja, czas, podstawienie) nasza organizacja jest najbardziej podatna?
5. Ile zaufania by nas kosztowało odkrycie, że ważna metryka była manipulowana przez rok?

## Kluczowe wnioski

- **Prawo Goodharta:** miara, która staje się celem, przestaje być dobrą miarą, i
  to rządzi każdą metryką w tej książce.
- Manipulowanie jest **racjonalną reakcją na zachętę**, a nie wadą charakteru;
  napraw projekt zachęty, a nie ludzi.
- Preferuj **wskaźniki, stopy i kohorty** zamiast surowych liczb wszędzie tam,
  gdzie oddają to samo zachowanie.
- Każda metryka objęta zachętą potrzebuje **bariery**, zaprojektowanej
  jednocześnie, a nie dodanej po odkryciu zniekształcenia.
- Wypatruj czterech wzorców manipulowania po nazwie: **próg, definicja, czas i
  podstawienie**.
- **Dystans** między projektantem metryki a osobą, której zachowanie ona
  kształtuje, zwiększa ryzyko zniekształcenia; skracaj go tam, gdzie możesz.

## Bibliografia i dalsza lektura

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience"
  (1975): źródło prawa Goodharta.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University
  System" (1997): szeroko cytowane sformułowanie, "when a measure becomes a
  target, it ceases to be a good measure."
- *Seeing Like a State*, James C. Scott (jak czytelne metryki zniekształcają
  systemy, które mierzą, w skali państw).
- *The Tyranny of Metrics*, Jerry Z. Muller (całościowe omówienie fiksacji na
  metrykach i jej kosztów w wielu zawodach).
- *Lean Analytics*, Alistair Croll i Benjamin Yoskovitz (metryki próżności
  kontra użyteczne oraz projektowanie barier w kontekście startupu).
- Wytyczne U.S. Government Accountability Office (GAO) dotyczące pomiaru wyników
  i ustawy GPRA Modernization Act: raportowanie wyników w sektorze publicznym i
  ryzyko manipulowania.
