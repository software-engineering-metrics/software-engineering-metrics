# 1.5 Źródła danych i instrumentacja

## Przegląd i motywacja

Metryka jest tak godna zaufania jak dane pod nią, a większość programów metryk
wkłada znacznie więcej wysiłku w projektowanie paneli niż w weryfikację potoku,
który je zasila. To postawienie sprawy na głowie. Pięknie zaprojektowany
wykres zbudowany na niespójnej, zgłaszanej samodzielnie albo po cichu
zepsutej instrumentacji jest gorszy niż brak wykresu, bo wygląda autorytatywnie,
a jest błędny. Ten temat dotyczy mało efektownego fundamentu, który zakłada
reszta książki: skąd naprawdę pochodzą dane inżynierskie, kiedy ufać
zautomatyzowanej instrumentacji bardziej niż samoocenie i jakie błędy jakości
danych po cichu unieważniają metrykę, zanim ktokolwiek to zauważy.

Dane z inżynierii oprogramowania pochodzą z garstki typów źródeł, z których
każdy ma inną charakterystykę niezawodności. System kontroli wersji i potoki
[CI/CD](https://en.wikipedia.org/wiki/CI/CD) generują obiektywne, opatrzone
znacznikami czasu, trudne do sfałszowania zapisy tego, co faktycznie się
wydarzyło. Narzędzia do śledzenia zgłoszeń i zarządzania projektami generują
zapisy zależne od tego, czy ludzie poprawnie i szybko aktualizują stan, co
często robią niespójnie. Ankiety generują dane zgłaszane samodzielnie, które są
bezcenne dla rzeczy, jakich żaden system nie zaobserwuje, jak satysfakcja, ale
podlegają błędowi pamięci i efektom pożądania społecznego. Platformy
obserwowalności generują telemetrię na poziomie systemu, obiektywną, ale
obejmującą tylko to, co zostało zinstrumentowane. Wiedza, z której kategorii
pochodzą dane danej metryki, mówi, jak bardzo jej ufać i na jakie tryby awarii
uważać.

W skali przedsiębiorstwa i administracji problemy z jakością danych się
kumulują, bo dystans między źródłem danych a ich końcowym użyciem na panelu
rośnie przez wiele systemów, integracji i transformacji. Pole, które w systemie
źródłowym znaczy jedno, może znaczyć coś subtelnie innego, zanim dotrze do
warstwy raportowej, i nikt dalej tego nie zauważa, bo liczba nadal wygląda
wiarygodnie. Dobra instrumentacja jest mniej ekscytująca niż dobre ramy, ale to
fundament, na którym stoi wszystko inne w tej książce.

## Kluczowe zasady

- **Preferuj instrumentację nad samoocenę wszędzie, gdzie system może
  zaobserwować zdarzenie bezpośrednio.** Znacznik czasu wdrożenia z potoku jest
  bardziej godny zaufania niż zgłoszona przez zespół liczba wdrożeń.
- **Używaj samooceny tylko do tego, czego nie da się zaobserwować
  bezpośrednio.** Satysfakcja, odczuwane tarcie i dobrostan nie mają
  zamiennika w systemie ewidencji; pytaj wprost i dobrze zaprojektuj ankietę
  (temat 3.7). Zarezerwuj samoocenę właśnie dla tej kategorii.
- **Dane każdej metryki mają system źródłowy, metodę zbierania i znany tryb
  awarii.** Udokumentuj wszystkie trzy, nie tylko definicję.
- **Jakość danych zanika po cichu.** Potok, który rok temu działał poprawnie,
  dziś może być po cichu zepsuty, a panel będzie dalej bez skargi
  wyświetlał błędną liczbę.
- **Instrumentuj w punkcie prawdy, a nie za tłumaczeniem.** Każdy przeskok
  między zdarzeniem a panelem to okazja do dryfu znaczenia.

## Rekomendacje

### Zmapuj każdą metrykę do jej faktycznego systemu źródłowego, zanim jej zaufasz

Dla każdej metryki na panelu nazwij konkretny system generujący zdarzenie
źródłowe: potok CI/CD dla zdarzeń wdrożenia, host kontroli wersji dla
zdarzeń commitów i scaleń, system śledzenia incydentów dla zapisów awarii,
platformę ankiet dla zgłaszanej satysfakcji. Jeśli nie potrafisz nazwać
dokładnego systemu, nie wiesz naprawdę, skąd bierze się liczba, i nie możesz
ocenić jej niezawodności. To mapowanie jest warunkiem wstępnym karty nadzoru z
tematu 1.4, a nie osobnym ćwiczeniem.

### Instrumentuj przy zdarzeniu, a nie przy raporcie

Najbardziej niezawodne dane rejestrują zdarzenie automatycznie w chwili, gdy
ono zachodzi: potok zapisuje wdrożenie w momencie jego zakończenia, system
kontroli wersji zapisuje scalenie w momencie jego wylądowania. Dane zależne od
tego, że człowiek pamięta o późniejszej aktualizacji pola statusu, oznaczeniu
zgłoszenia jako "gotowe", ręcznym zalogowaniu wdrożenia w arkuszu, tracą
dokładność, im dalej są od faktycznego zdarzenia i im bardziej zajęta jest
odpowiedzialna osoba. Wszędzie tam, gdzie istnieje zautomatyzowane zdarzenie,
preferuj je zamiast zgłaszanego przez człowieka wskaźnika zastępczego tego
samego faktu.

### Zarezerwuj ankiety dla tego, co może powiedzieć tylko człowiek

Pewnych rzeczy naprawdę nie da się zaobserwować w telemetrii systemu: czy
inżynier czuje, że jego praca ma sens, czy proces wydaje się frustrujący, czy
rośnie ryzyko wypalenia. Wymagają one zapytania wprost, a dobrze zaprojektowana
ankieta (temat 3.7 omawia mechanikę) jest właściwym narzędziem. Błędem jest
używanie samooceny do rzeczy, które system mógłby zaobserwować bezpośrednio,
czyli proszenie inżynierów o oszacowanie własnej częstotliwości wdrożeń zamiast
pobrania jej z potoku, co wprowadza zbędny szum i błąd do danych, które mogły być
obiektywne.

### Wbuduj kontrole jakości danych w sam potok

Traktuj potoki metryk z takim samym rygorem jak kod produkcyjny: dodaj
zautomatyzowane kontrole, które sygnalizują, gdy źródło przestaje wysyłać dane,
gdy rozkład pola nieoczekiwanie się przesuwa albo gdy liczba nieoczekiwanie
spada do zera. Panel, który po cichu wyświetla przeterminowane lub zepsute dane
jak aktualne, jest gorszy niż panel, który widocznie pokazuje "dane
niedostępne", bo pierwszy niewidocznie nadszarpuje zaufanie, a drugi przynajmniej
mówi prawdę o własnych ograniczeniach.

### Dokumentuj metodę zbierania obok definicji

Definicja metryki ("czas realizacji zmiany") nie jest kompletna bez metody
zbierania (mierzony od znacznika czasu pierwszego commita w kontroli wersji do
znacznika czasu wdrożenia produkcyjnego w potoku, z wyłączeniem gałęzi
hotfixów). Dwa zespoły z tą samą definicją, ale różnymi metodami zbierania,
nadal wytworzą liczby nieporównywalne. Zapisz oba w karcie metryk z tematu 1.4 i
traktuj zmianę któregokolwiek jako zmianę wymagającą tego samego udokumentowanego
przeglądu.

## Kompromisy: zalety i wady

| Typ źródła | Zalety | Wady |
| --- | --- | --- |
| Zautomatyzowana instrumentacja potoku (CI/CD, kontrola wersji) | Obiektywna, ze znacznikami czasu, trudna do sfałszowania, niski bieżący wysiłek | Wymaga początkowej inwestycji inżynierskiej w budowę i utrzymanie |
| Dane z narzędzi do zgłoszeń i zarządzania projektami | Szeroko dostępne, znane zespołom | Zależą od staranności ludzi; często niespójne między zespołami |
| Ankiety i samoocena | Jedyne źródło dla doświadczenia subiektywnego (satysfakcja, dobrostan) | Błąd pamięci, błąd pożądania społecznego, zmęczenie odpowiadaniem |
| Platformy obserwowalności i telemetrii | Bogaty sygnał na poziomie systemu, w czasie rzeczywistym | Obejmuje tylko to, co jawnie zinstrumentowano; w dużej skali może być kosztowna |

Centralne napięcie to **obiektywność kontra zakres**. Zautomatyzowana
instrumentacja jest najbardziej godnym zaufania źródłem, ale w ogóle nie
obserwuje doświadczenia subiektywnego, podczas gdy ankiety sięgają dokładnie
tego, czego automatyzacja nie, ale niosą realne ryzyko błędu. Rozwiąż to
napięcie, używając zautomatyzowanej instrumentacji wszędzie, gdzie zdarzenie da
się zaobserwować bezpośrednio, i rezerwując samoocenę konkretnie i wyłącznie dla
tego, co naprawdę wymaga zapytania człowieka, nigdy jako leniwy zamiennik
danych, które mógłby dostarczyć system.

## Pytania do omówienia z zespołem

1. **Czy dla naszych pięciu najważniejszych metryk potrafimy nazwać dokładny
   system źródłowy i metodę zbierania każdej, czy zakładamy definicję, nie
   wiedząc, skąd faktycznie pochodzą dane?** To zaskakująco częsta luka:
   metryka zostaje przejęta z ram albo domyślnego panelu dostawcy i nikt w
   obecnym zespole nie wie, który system generuje dane źródłowe ani jak. Wyśledźcie
   każdą z nich do źródła jako ćwiczenie grupowe.

2. **Które z naszych metryk opierają się na samoocenie dla czegoś, co system
   mógłby zaobserwować bezpośrednio, i co byłoby potrzebne, by zastąpić tę
   samoocenę prawdziwą instrumentacją?** Zgłaszane samodzielnie liczby wdrożeń,
   zgłaszane samodzielnie przepracowane godziny i szacowany przez zespół czas
   cyklu to częste przykłady użycia złego źródła danych dla czegoś, co
   automatyzacja mogłaby uchwycić bardziej niezawodnie. Zidentyfikuj je i
   priorytetyzuj zastąpienie tych o najwyższej stawce.

3. **Skąd byśmy wiedzieli, że któryś z naszych potoków danych po cichu się
   zepsuł?** Większość organizacji odkrywa zepsuty potok metryk dopiero wtedy,
   gdy ktoś zauważy, że liczba wygląda nieprawdopodobnie, co może zająć
   miesiące. Omówcie, czy któryś z waszych potoków ma dziś zautomatyzowane
   kontrole stanu, a jeśli nie, które najbardziej ich potrzebują w pierwszej
   kolejności.

4. **Gdzie tłumaczenie między systemami zmieniło znaczenie metryki, choć nikt
   tak nie zdecydował?** Pole, które w systemie źródłowym znaczy jedno, po
   integracji lub migracji może znaczyć coś subtelnie innego, a wynikowa liczba
   może wyglądać wiarygodnie, będąc błędną. Przejdźcie całą ścieżkę danych
   swojej najbardziej doniosłej metryki i szukajcie punktów tłumaczenia.

5. **Czy dokumentujemy w karcie metryk metody zbierania, a nie tylko
   definicje?** Dwa zespoły mogą dzielić nazwę i definicję metryki, licząc ją
   różnymi metodami zbierania, i wytwarzać liczby, które faktycznie nie są
   porównywalne. Zbadaj próbkę swoich kart pod kątem tej konkretnej luki.

6. **Jak odróżniamy prawdziwy trend od artefaktu jakości danych, gdy liczba
   nieoczekiwanie się porusza?** Nagła zmiana metryki jest często pierwszym
   znakiem albo realnej zmiany, albo zepsutego potoku, a odróżnienie ich wymaga
   znajomości źródła danych na tyle dobrej, by szybko zbadać sprawę. Omówcie
   rzeczywisty proces swojego zespołu przy ostatniej niewyjaśnionej zmianie
   metryki, na jaką się natknęliście.

## Perspektywa sektorowa

**Startup.** Przy małym stosie większość metryk może pochodzić bezpośrednio od
dostawcy CI/CD, hosta kontroli wersji i lekkiego narzędzia ankietowego, bez
budowania własnych potoków. Ryzyko to pominięcie nawet podstawowych kontroli
stanu, bo zespół pędzi; pięciominutowa zautomatyzowana kontrola, że źródło
danych nadal wysyła zdarzenia, to tanie ubezpieczenie od cichego latania na
ślepo.

**Mała firma.** Opieraj się na wbudowanym raportowaniu swoich obecnych narzędzi,
zamiast budować własne potoki danych, których nie masz zdolności utrzymać. Bądź
jawny, które liczby pochodzą z systemów zautomatyzowanych, a które to szacunki
wpisywane przez kogoś do arkusza, bo oba rodzaje mają bardzo różną
niezawodność, nawet jeśli trafiają na tę samą stronę.

**Duże przedsiębiorstwo.** Problemy z jakością danych kumulują się w
integracjach, migracjach i na granicach jednostek biznesowych. Zainwestuj w
scentralizowane, dobrze monitorowane potoki danych dla swoich najbardziej
doniosłych metryk, wbuduj zautomatyzowane kontrole jakości danych jako standard i
audytuj metody zbierania, nie tylko definicje, ilekroć porównujesz metryki
między jednostkami biznesowymi.

**Administracja publiczna.** Pochodzenie danych może mieć wagę prawną i
audytową: opublikowany wskaźnik wyników może musieć przetrwać zewnętrzny audyt
nie tylko swojej wartości, ale całego łańcucha zbierania. Dokumentuj jawnie
linię pochodzenia danych, zachowuj historyczne zapisy metod zbierania nawet po
zmianie metodologii i bądź gotów wykazać dokładnie, jak liczbę wytworzono, a nie
tylko, co obecnie wskazuje.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo inżynierii firmy z sektora usług
finansowych śledziło "czas realizacji zmiany" przez dwa lata, zanim odkryło, że
migracja potoku danych osiemnaście miesięcy wcześniej po cichu zmieniła
źródło znacznika czasu z pierwszego commita na utworzenie pull requesta,
skracając pozorny czas realizacji średnio o kilka godzin we wszystkich zespołach,
bez niczyjego zauważenia ani zatwierdzenia tej zmiany. Rozwiązanie wprowadziło
kontrolę jakości danych porównującą rozkład każdej metryki tydzień do tygodnia i
oznaczającą statystycznie nietypowe przesunięcia do przeglądu przez człowieka, co
w następnym roku wychwyciło jeszcze dwa ciche problemy z potokami.

**Administracja publiczna.** Publiczny panel niezawodności usług agencji
transportowej opierał się na mieszance zautomatyzowanej telemetrii z
czujników i ręcznie wprowadzanych zgłoszeń incydentów z biur regionalnych.
Audyt wykazał, że regiony o mniejszej obsadzie systematycznie niedoraportowywały
drobne incydenty, nie z nieuczciwości, lecz po prostu dlatego, że ręczne
wprowadzanie konkurowało o czas z pilniejszymi zadaniami, co oznaczało, że
opublikowany wskaźnik niezawodności był lepszy niż rzeczywistość właśnie w tych
regionach, które najmniej mogły pozwolić sobie na niezauważone zaniedbania
konserwacji. Rozwiązanie agencji zastąpiło ręczne wprowadzanie incydentów
automatycznym logowaniem wyzwalanym czujnikami tam, gdzie to możliwe, i dodało
udokumentowane oszacowanie pokrycia zgłoszeń ręcznych obok opublikowanego
wskaźnika.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z solidnej instrumentacji jest pewność: kierownictwo, które ufa swoim
danym, może działać na ich podstawie zdecydowanie, a zespół, który został
oparzony cicho zepsutym potokiem, zaczyna kwestionować każdą liczbę, co
spowalnia każdą decyzję zależną od metryk. Ta utrata pewności jest kosztowna i
trudna do naprawienia, często odbudowa trwa znacznie dłużej, niż kosztowałaby
pierwotna inwestycja w instrumentację.

Całkowity koszt posiadania (TCO) dobrej instrumentacji obejmuje początkową pracę
inżynierską nad budową niezawodnych potoków i bieżący koszt monitorowania
jakości danych, a w oba łatwo niedoinwestować, bo żadne nie wytwarza własnego
widocznego kafla na panelu. To niedoinwestowanie jest fałszywą oszczędnością:
koszt odkrycia cicho zepsutego potoku po miesiącach decyzji podejmowanych na
złych danych jest znacznie wyższy niż koszt zbudowania kontroli stanu, która
wychwyciłaby to pierwszego dnia.

## Antywzorce i pułapki

- **Ufanie liczbie bez znajomości jej systemu źródłowego:** metryka przejęta z
  ram lub domyślnych ustawień dostawcy, bez nikogo, kto by prześledził, skąd
  faktycznie pochodzą dane.
- **Samoocena tego, co system mógłby zaobserwować bezpośrednio:** wprowadza
  zbędny szum i błąd do danych, które mogły być obiektywne.
- **Brak zautomatyzowanych kontroli jakości danych w potoku metryk:** cicho
  zepsuty potok może przez miesiące wyświetlać błędne liczby niewykryty.
- **Dokumentowanie tylko definicji, bez metody zbierania:** dwa zespoły z tą samą
  nazwą metryki nadal mogą liczyć nieporównywalne liczby.
- **Panel wyświetlający "0" albo przeterminowane dane jak aktualne, bez
  wskazania awarii źródła:** gorszy niż widoczny komunikat "dane niedostępne".
- **Regiony lub zespoły o zbyt małych zasobach systematycznie niedoraportowujące
  z powodu obciążenia ręcznym wprowadzaniem:** luka jakości danych korelująca
  dokładnie z obszarami wymagającymi największej uwagi.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Nikt nie potrafi rzetelnie wyśledzić metryki do jej
  systemu źródłowego; potoki nie mają kontroli stanu, a awarie przechodzą
  niezauważone.
- **Poziom 2, Rozwój:** Niektóre metryki mają udokumentowane źródła, ale metody
  zbierania są niespójne, a kontrole jakości danych w najlepszym razie doraźne.
- **Poziom 3, Standaryzacja:** Każda objęta nadzorem metryka dokumentuje swój
  system źródłowy i metodę zbierania; zautomatyzowane potoki są preferowane nad
  samoocenę wszędzie, gdzie zdarzenie da się zaobserwować bezpośrednio.
- **Poziom 4, Zarządzanie:** Zautomatyzowane kontrole jakości danych monitorują
  każdy ważny potok, sygnalizują anomalie do przeglądu, a linia pochodzenia
  danych jest udokumentowana i audytowalna.
- **Poziom 5, Orkiestracja:** Organizacja traktuje jakość danych jako
  pełnoprawną dyscyplinę inżynierską z własnym monitorowaniem i reagowaniem na
  incydenty i potrafi na żądanie wykazać pełne pochodzenie każdej opublikowanej
  metryki.

## Pomysły do dyskusji

1. Czy potrafilibyśmy wyśledzić nasze trzy najważniejsze metryki do ich dokładnego systemu źródłowego teraz, na żywo, na tym spotkaniu?
2. Które z naszych obecnych metryk opierają się na samoocenie dla czegoś, co system mógłby zmierzyć bezpośrednio?
3. Czy któryś z naszych potoków metryk ma dziś zautomatyzowane kontrole stanu?
4. Kiedy ostatnio odkryliśmy cicho zepsuty potok danych i jak długo był błędny?
5. Gdzie ręczne wprowadzanie danych tworzy lukę między raportowaną a faktyczną rzeczywistością?

## Kluczowe wnioski

- Preferuj **zautomatyzowaną instrumentację** nad samoocenę wszędzie, gdzie system
  może zaobserwować zdarzenie bezpośrednio; samoocenę zarezerwuj dla
  prawdziwie subiektywnego doświadczenia.
- Każda metryka potrzebuje udokumentowanego **systemu źródłowego i metody
  zbierania**, a nie tylko definicji.
- Jakość danych **zanika po cichu**; wbuduj zautomatyzowane kontrole w sam potok,
  zamiast odkrywać awarię przypadkiem.
- Instrumentuj **przy zdarzeniu**, a nie za tłumaczeniem, by zminimalizować dryf
  między tym, co się wydarzyło, a tym, co pokazuje panel.
- Koszt cicho zepsutego potoku, miesięcy decyzji podjętych na złych danych,
  znacznie przewyższa koszt kontroli stanu, która by to wychwyciła.

## Bibliografia i dalsza lektura

- *Observability Engineering*, Charity Majors, Liz Fong-Jones i George Miranda
  (zasady projektowania instrumentacji i telemetrii).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (podejście do instrumentacji stojące za metrykami DORA).
- *Data Quality: The Accuracy Dimension*, Jack E. Olson (pojęcia jakości
  danych stosowalne do potoków metryk).
- *How to Measure Anything*, Douglas W. Hubbard (metody pomiaru wielkości, które
  wydają się trudne do bezpośredniej obserwacji).
