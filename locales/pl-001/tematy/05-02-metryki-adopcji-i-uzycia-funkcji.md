# 5.2 Metryki adopcji i użycia funkcji

## Przegląd i motywacja

**Adopcja funkcji** mierzy, czy ludzie, dla których funkcję zbudowano,
faktycznie jej używają, w jakim tempie i czy to użycie utrzymuje się w czasie.
Jest, w bardzo bezpośrednim sensie, sprawdzianem rzeczywistości dla wszystkiego,
co mierzą części od 2 do 4 tej książki: organizacja może wdrażać często,
utrzymywać znakomite doświadczenie programistów i wypuszczać nieskazitelnie
przetestowany kod, a mimo to budować rzeczy, których nikt nie chce. Dane o
adopcji to miejsce, w którym organizacja inżynierska dowiaduje się, czy jej
produkcja w ogóle połączyła się z jakimkolwiek realnym rezultatem, czyli
dokładnie rozróżnienie wkład-produkcja-rezultat wprowadzone w temacie 1.3,
zastosowane do najbardziej konkretnego przypadku w tej książce: wypuszczonej,
określonej funkcji.

Główna troska tego tematu jest taka, że dane o adopcji, bardziej niż niemal
jakakolwiek inna rodzina metryk w tej książce, łatwo zmierzyć w sposób, który
pochlebia zamiast informować. Funkcja może wykazać imponującą początkową adopcję
wyłącznie z ciekawości albo przez wymuszoną ekspozycję (okno modalne, które
pojawia się, czy użytkownik chce, czy nie), podczas gdy prawdziwe, trwałe
dostarczanie wartości, mierzone tym, czy ludzie nadal z niej korzystają, gdy
mija nowość, opowiada zupełnie inną historię. Odróżnienie prawdziwej adopcji od
chwilowego skoku to główne wyzwanie techniczne tego tematu, a pomyłka w tym
miejscu rutynowo prowadzi organizacje do świętowania funkcji, które po cichu
zawodzą, i porzucania takich, które dopiero zaczynały znajdować swoich
odbiorców.

W dużych zespołach dane o adopcji funkcji sprawiają, że priorytetyzacja mapy
drogowej opiera się na dowodach, a nie na tym, kto najbardziej przekonująco
wstawia się za pracą własnego zespołu. Duże przedsiębiorstwa zarządzające
rozległymi portfelami produktów potrzebują danych o adopcji, by ustalić, które
inwestycje zarabiają na siebie; organizacje publiczne budujące cyfrowe usługi dla
obywateli potrzebują ich, by wykazać, że publiczna inwestycja dała usługi, z
których ludzie faktycznie korzystają, a nie tylko usługi, które technicznie
istnieją.

## Kluczowe zasady

- **Adopcja początkowa i adopcja trwała to różne sygnały.** Skok z ciekawości
  albo wymuszonej ekspozycji to nie to samo, co prawdziwe, trwałe dostarczanie
  wartości.
- **Adopcję należy mierzyć względem odbiorców, dla których funkcję
  zbudowano**, a nie bez rozróżnienia względem całej bazy użytkowników.
- **Funkcja z niską adopcją nie jest automatycznie porażką.** Może być słabo
  odkrywalna, źle wycelowana albo po prostu nowa; zbadaj sprawę, zanim wyciągniesz
  wniosek.
- **Retencja użycia liczy się bardziej niż pojedyncze ujęcie adopcji.**
  Śledź, czy ludzie, którzy wypróbowali funkcję, do niej wracają.
- **Dane o adopcji są narażone na manipulację przez wymuszoną ekspozycję lub
  ciemne wzorce.** Liczba nadmuchana przez utrudnienie ominięcia funkcji nie jest
  prawdziwym sygnałem.

## Rekomendacje

### Odróżniaj początkowe wypróbowanie od trwałej retencji

Śledź dwie osobne liczby: odsetek docelowych odbiorców, którzy wypróbowali
funkcję przynajmniej raz (adopcja początkowa), i odsetek tych, którzy nadal jej
używają po istotnym okresie, na przykład czterech lub ośmiu tygodniach (adopcja
utrzymana). Funkcja z wysokim początkowym wypróbowaniem i niską retencją
sugeruje, że odkrywalność zadziałała, ale sama funkcja nie dostarczyła dość
wartości, by ludzie do niej wracali. To zupełnie inna diagnoza i zupełnie inna
naprawa niż przy niskim początkowym wypróbowaniu z wysoką retencją, co
sugeruje naprawdę wartościową funkcję, o której zbyt mało osób wie.

### Zdefiniuj precyzyjnie docelowych odbiorców przed pomiarem adopcji

Adopcja mierzona względem całej bazy użytkowników może wprowadzać w błąd, jeśli
funkcja miała służyć tylko konkretnemu segmentowi: funkcja dla administratorów
korporacyjnych mierzona względem bazy złożonej głównie z użytkowników
indywidualnych zawsze będzie wyglądać na fatalnie przyjętą, niezależnie od tego,
jak dobrze faktycznie służy ludziom, dla których ją zbudowano. Zdefiniuj
zamierzonych odbiorców wprost przed premierą i mierz adopcję względem tego
konkretnego mianownika, a nie względem łącznej liczby użytkowników.

### Zbadaj niską adopcję, zanim uznasz, że funkcja zawiodła

Niska liczba adopcji ma kilka możliwych przyczyn, które wymagają bardzo
różnych reakcji: funkcja naprawdę nie jest wartościowa; funkcja jest
wartościowa, ale słabo odkrywalna (użytkownicy nie wiedzą, że istnieje); funkcja
jest wartościowa, ale słabo wyjaśniona (użytkownicy ją widzą, ale nie rozumieją
jej celu); albo okno pomiaru jest po prostu zbyt krótkie, by wolniej
adoptowana funkcja zdążyła znaleźć swoich odbiorców. Ustal, która z tych
przyczyn ma zastosowanie, zanim zdecydujesz o dalszej inwestycji, przeprojektowaniu
albo wycofaniu.

### Uważaj na adopcję nadmuchaną przez wymuszoną ekspozycję lub [ciemne wzorce](https://en.wikipedia.org/wiki/Dark_pattern)

Liczba adopcji napędzana tym, że funkcji trudno uniknąć, natarczywym
wdrożeniem nowych użytkowników, oknem modalnym, które trzeba zamknąć, domyślnym
ustawieniem trudnym do zmiany, nie mierzy prawdziwego dostarczania wartości, a
świętowanie jej, jakby mierzyła, powtarza wzorzec manipulacji przez podstawianie
z tematu 1.2 w wersji produktowej. Tam, gdzie to możliwe, zestawiaj surowe liczby
adopcji z sygnałem satysfakcji lub typu NPS dla konkretnej funkcji, aby wymuszona
ekspozycja, która nie przekłada się na prawdziwą satysfakcję, została
wychwycona, a nie uczczona.

### Łącz trendy adopcji z konkretnymi decyzjami produktowymi i inżynierskimi

Gdy adopcja nieoczekiwanie rośnie lub spada, prześledź zmianę do konkretnej
decyzji: zmiany w interfejsie, zmiany ustawień domyślnych, kampanii
marketingowej, poprawy lub regresji wydajności, zamiast traktować to ruch jak
niewyjaśnioną tajemnicę. To łączy dane o adopcji z użyteczną nauką produktową i
inżynierską, zamykając pętlę między konkretną zmianą a jej zmierzonym wpływem na
realne użycie.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Pomiar względem całej bazy użytkowników | Prosty, jeden mianownik | Wprowadza w błąd dla funkcji skierowanych do konkretnego segmentu |
| Pomiar względem zdefiniowanych docelowych odbiorców | Uczciwe, dokładne odzwierciedlenie zamierzonego zasięgu | Wymaga świadomego zdefiniowania odbiorców przed premierą |
| Samo początkowe wypróbowanie | Szybki sygnał, dostępny wkrótce po premierze | Pomija to, czy funkcja dostarcza trwałej wartości |
| Początkowe wypróbowanie plus retencja | Odróżnia ciekawość od prawdziwej wartości | Wymaga dłuższego czekania (tygodnie), zanim pojawi się pełny obraz |

Główne napięcie to **szybkość kontra uczciwość**. Dane o początkowym
wypróbowaniu są dostępne niemal natychmiast po premierze i zaspokajają
organizacyjną presję, by raportować wczesne wyniki, ale same nie odróżnią ciekawości
ani wymuszonej ekspozycji od prawdziwej, trwałej wartości. Rozwiąż to napięcie,
raportując dane o początkowym wypróbowaniu wcześnie i wyraźnie oznaczone jako
wstępne, a jednocześnie zobowiązując się publicznie do kolejnego odczytu retencji
w ustalonym z góry odstępie, by wczesny entuzjazm nie zastygł w niezbadaną
historię sukcesu, zanim prawdziwy sygnał zdąży się pojawić.

## Pytania do omówienia z zespołem

1. **Czy dla naszej ostatnio wypuszczonej funkcji znamy początkowe wypróbowanie i
   utrzymane użycie osobno, czy tylko jedną połączoną liczbę?** Jeśli istnieje
   tylko liczba połączona, ta luka ukrywa dokładnie to rozróżnienie ciekawości i
   wartości, które ten temat uważa za kluczowe.

2. **Czy odbiorcy docelowi tej funkcji zostali zdefiniowani wprost przed
   premierą i czy mierzymy adopcję względem tej konkretnej grupy?** Sprawdź, czy
   obecny mianownik adopcji odpowiada temu, dla kogo funkcję faktycznie
   zbudowano, czy też jest rozcieńczony pomiarem względem nieistotnej, szerszej
   populacji.

3. **Czy dla funkcji o niskiej adopcji zbadaliśmy, która z kilku możliwych
   przyczyn, niska wartość, słaba odkrywalność, słabe wyjaśnienie, zbyt mało
   czasu, faktycznie ma zastosowanie?** Przejdź przez tę konkretną listę
   diagnostyczną dla prawdziwej, obecnej funkcji o niskiej adopcji, zamiast
   domyślnie zakładać, że „pewnie nie jest wartościowa".

4. **Czy jakaś część naszej raportowanej adopcji jest nadmuchana przez wymuszoną
   ekspozycję, natarczywe ustawienie domyślne albo okno modalne wymagające
   zamknięcia, a nie przez prawdziwe, dobrowolne użycie?** Bądź tu szczery; to
   częsty i łatwy do wpadnięcia wzorzec, zwłaszcza pod presją pokazania
   wczesnych pozytywnych wyników.

5. **Gdy adopcja funkcji istotnie się zmieniła, czy potrafiliśmy prześledzić tę
   zmianę do konkretnej naszej zmiany?** Jeśli odpowiedź brzmi zwykle „nie
   jesteśmy pewni", ta luka ogranicza to, ile organizacja może się nauczyć z
   własnych danych o adopcji w czasie.

6. **Czy zestawiamy liczby adopcji z jakimkolwiek sygnałem satysfakcji dla tej
   samej funkcji, czy śledzimy tylko surowe użycie?** Wysoka adopcja przy niskiej
   satysfakcji to sygnał ostrzegawczy, który samo surowe użycie całkowicie
   przeoczy.

## Perspektywa sektorowa

**Startup.** Adopcja funkcji jest często najważniejszym pojedynczym sygnałem,
jaki ma młoda firma, ściśle związanym z samym dopasowaniem produktu do rynku.
Śledź konkretnie retencję, a nie tylko początkowe wypróbowanie, już od
pierwszej premiery funkcji, bo odróżnienie prawdziwej wartości od wczesnej
ciekawości jest krytyczne, gdy przetrwanie firmy może zależeć od trafnej
diagnozy.

**Mała firma.** Większość platform analitycznych raportuje podstawowe dane o
użyciu przy minimalnej konfiguracji; główną dyscypliną jest jasne zdefiniowanie
docelowych odbiorców przed pomiarem, zamiast raportowania adopcji względem całej
bazy klientów bez względu na to, dla kogo konkretna funkcja została zbudowana.

**Duże przedsiębiorstwo.** Dane o adopcji w tej skali są niezbędne do uczciwej,
opartej na dowodach priorytetyzacji mapy drogowej w dużym portfelu produktów, a
dyscyplina odróżniania początkowego wypróbowania od trwałej retencji liczy się
tu jeszcze bardziej, bo dostatecznie duża baza użytkowników może dać
imponująco wyglądający skok początkowy niemal przy każdej premierze, bez względu
na realną wartość.

**Administracja publiczna.** Adopcja cyfrowej usługi dla obywateli jest
bezpośrednią, konkretną miarą tego, czy publiczna inwestycja przełożyła się na
realną korzyść publiczną, i dla organu nadzorczego bywa znacznie bardziej
przekonującą metryką niż liczba dostaw czy aktywności. Mierz adopcję względem
populacji, której usługa miała faktycznie służyć, i bądź szczery co do barier
(kompetencje cyfrowe, dostęp, świadomość), które mogą tłumaczyć niską adopcję
poza samym projektem usługi.

## Przykłady

**Przedsiębiorstwo.** Firma oferująca oprogramowanie do zarządzania projektami
wypuściła nową funkcję współdzielonej edycji i świętowała imponujący 60-procentowy
wskaźnik początkowego wypróbowania w ciągu pierwszych dwóch tygodni. Kolejny
odczyt retencji po ośmiu tygodniach pokazał, że tylko 8% tych pierwotnych
użytkowników nadal regularnie korzysta z funkcji, co ujawniło, że wysoki wskaźnik
wypróbowania wynikał niemal wyłącznie z rzucającej się w oczy, trudnej do
zamknięcia podpowiedzi we wdrożeniu nowych użytkowników, a nie z prawdziwego,
trwałego zainteresowania. Badanie jakościowych opinii osób, które wypróbowały
funkcję i przestały jej używać, ujawniło konkretny, możliwy do naprawienia
problem z użytecznością, nieintuicyjny wzorzec interakcji, który celowe
przeprojektowanie rozwiązało; utrzymane użycie wzrosło po poprawce niemal
trzykrotnie, choć nigdy nie zbliżyło się do wprowadzającej w błąd wysokiej liczby
początkowego wypróbowania.

**Administracja publiczna.** Krajowa służba zatrudnienia uruchomiła nowe
internetowe narzędzie do dopasowywania ofert pracy, początkowo raportując
adopcję względem całej bazy zarejestrowanych użytkowników agencji, co dało
zniechęcająco niski odsetek zagrażający dalszemu finansowaniu programu.
Zrewidowana analiza, mierząca adopcję konkretnie względem podzbioru
zarejestrowanych użytkowników aktywnie szukających pracy w branżach docelowych
narzędzia, czyli rzeczywistych zamierzonych odbiorców, wykazała znacznie wyższy i
dokładniejszy wskaźnik adopcji. W połączeniu z celową kampanią informacyjną
skierowaną właśnie do tych zdefiniowanych odbiorców oraz późniejszym odczytem
retencji pokazującym silne trwałe użycie wśród osób, które przyjęły narzędzie,
program zabezpieczył dalsze finansowanie na podstawie skorygowanej, uczciwie
ukierunkowanej metryki, a nie wprowadzająco w błąd rozcieńczonej pierwotnej
liczby.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z rygorystycznego pomiaru adopcji funkcji jest inwestowanie w mapę
drogową oparte na dowodach: organizacja, która potrafi odróżnić prawdziwą,
utrzymaną wartość od początkowego wypróbowania napędzanego ciekawością, może
pewnie inwestować dalej w funkcje, które naprawdę działają, i przekierować
wysiłek od tych, które nie działają, zamiast gonić za wprowadzającym w błąd
początkowym skokiem albo przedwcześnie porzucać naprawdę wartościową, ale wolno
odkrywaną funkcję.

Całkowity koszt posiadania to głównie instrumentacja analityczna, zwykle już
dostępna w większości nowoczesnych platform analityki produktowej, plus
dyscyplina jawnego definiowania odbiorców docelowych i zobowiązania się do
kolejnych odczytów retencji, zamiast zatrzymywania się na wczesnym, niepełnym
sygnale. Ta dyscyplina kosztuje niewiele i zapobiega znacznie droższemu błędowi
błędnego odczytania fałszywego sukcesu albo fałszywej porażki.

## Antywzorce i pułapki

- **Raportowanie samego początkowego wypróbowania, nigdy retencji:** nie
  odróżnia ciekawości ani wymuszonej ekspozycji od prawdziwej, trwałej wartości.
- **Pomiar adopcji względem złego mianownika:** rozcieńcza lub zawyża sygnał
  dla funkcji skierowanych do konkretnego segmentu odbiorców.
- **Uznanie funkcji za nieudaną bez zbadania konkretnej przyczyny** niskiej
  adopcji: grozi porzuceniem naprawdę wartościowej, ale słabo odkrywalnej lub
  źle zgranej w czasie funkcji.
- **Świętowanie adopcji nadmuchanej przez wymuszoną ekspozycję lub ciemne
  wzorce:** produktowy przypadek manipulacji przez podstawianie z tematu 1.2.
- **Nigdy nieprześledzanie ruchów adopcji do konkretnych decyzji:** ogranicza
  uczenie się organizacji z jej własnych danych.
- **Śledzenie użycia bez żadnego sparowanego sygnału satysfakcji:** pomija
  przypadek, w którym wysokie użycie współistnieje z niską prawdziwą wartością
  lub satysfakcją.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Adopcja nie jest mierzona albo raportowana jest
  tylko pojedyncza, wczesna liczba wypróbowania bez retencji.
- **Poziom 2, Rozwój:** Istnieje pewne śledzenie adopcji, ale odbiorcy docelowi
  nie są precyzyjnie zdefiniowani, a retencja jest mierzona niespójnie.
- **Poziom 3, Standaryzacja:** Zarówno początkowe wypróbowanie, jak i adopcja
  utrzymana są śledzone spójnie względem precyzyjnie zdefiniowanych odbiorców
  docelowych dla każdej większej funkcji.
- **Poziom 4, Zarządzanie:** Funkcje o niskiej adopcji są systematycznie badane
  pod kątem konkretnej przyczyny źródłowej, zanim zapadnie decyzja o
  przeprojektowaniu lub wycofaniu; adopcja jest zestawiana z danymi o
  satysfakcji.
- **Poziom 5, Orkiestracja:** Dane o adopcji bezpośrednio i rutynowo wpływają na
  priorytetyzację mapy drogowej i decyzje inwestycyjne, a organizacja potrafi z
  pewnością prześledzić konkretne ruchy adopcji do konkretnych decyzji
  produktowych i inżynierskich.

## Pomysły do dyskusji

1. Jaka niedawna funkcja miała początkowe wypróbowanie i adopcję utrzymaną opowiadające bardzo różne historie?
2. Czy odbiorcy docelowi naszej ostatniej funkcji zostali zdefiniowani precyzyjnie przed premierą, czy dopiero po niej?
3. Która funkcja o niskiej adopcji zasługuje na uczciwe zbadanie przyczyn źródłowych, zanim zdecydujemy o jej losie?
4. Czy jakaś część naszego obecnego raportowania adopcji jest nadmuchana przez wymuszoną ekspozycję?
5. Co ujawniłoby zestawienie danych o adopcji z danymi o satysfakcji dla naszej najczęściej używanej funkcji?

## Kluczowe wnioski

- Odróżniaj **początkowe wypróbowanie od trwałej retencji**; skok z ciekawości
  albo wymuszonej ekspozycji to nie prawdziwa, trwała wartość.
- Mierz adopcję względem **precyzyjnie zdefiniowanych odbiorców docelowych**, a
  nie nieistotnej, szerszej bazy użytkowników.
- **Zbadaj konkretną przyczynę** niskiej adopcji, zanim uznasz, że funkcja
  zawiodła; kilka bardzo różnych przyczyn wymaga bardzo różnych reakcji.
- Uważaj na adopcję **nadmuchaną przez wymuszoną ekspozycję lub ciemne wzorce** i
  zestawiaj adopcję z **sygnałem satysfakcji**, by to wychwycić.
- **Prześledź ruchy adopcji do konkretnych decyzji**, by zamienić dane w
  prawdziwą naukę organizacji.

## Bibliografia i dalsza lektura

- *Lean Analytics*, Alistair Croll i Benjamin Yoskovitz (metryki użyteczne a
  metryki próżności zastosowane do danych o użyciu produktu).
- *Continuous Discovery Habits*, Teresa Torres (łączenie decyzji produktowych z
  dowodami o rezultatach dla klientów, w tym z danymi o adopcji).
- *Hooked: How to Build Habit-Forming Products*, Nir Eyal (retencja i
  kształtowanie nawyków oraz etyczna granica między prawdziwą wartością a
  ciemnymi wzorcami).
- *Measure What Matters*, John Doerr (wyznaczanie celów zorientowane na
  rezultaty, stosowalne do ustalania celów adopcji).
