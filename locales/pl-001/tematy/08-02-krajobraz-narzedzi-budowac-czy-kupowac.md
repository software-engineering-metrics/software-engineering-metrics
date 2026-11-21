# 8.2 Krajobraz narzędzi: budować czy kupować

## Przegląd i motywacja

Każda organizacja wdrażająca wskazówki tej książki staje w końcu przed
praktyczną decyzją infrastrukturalną: zbudować narzędzia do metryk we
własnym zakresie, kupić komercyjną platformę analityki inżynierskiej albo,
co w praktyce najczęstsze, połączyć jedno z drugim. Ten temat traktuje tę
decyzję z takim samym rygorem, z jakim temat 5.5 podchodzi do każdej innej
inwestycji inżynierskiej: uczciwa analiza kosztów i korzyści, właściwa dla
skali twojej organizacji, istniejących źródeł danych i konkretnych metryk z
tej książki, które faktycznie zamierzasz śledzić, a nie domyślna odpowiedź
stosowana jednakowo bez względu na kontekst.

Rynek komercyjnych narzędzi analityki inżynierskiej znacząco dojrzał i
wiele platform oferuje dziś solidną, w dużej mierze zautomatyzowaną
instrumentację metryk DORA (część 2), danych o pull requestach i
przeglądach (temat 2.9), a coraz częściej także infrastrukturę ankiet o
doświadczeniu programisty (temat 3.7). Ta dojrzałość przesunęła rachunek wielu
organizacji ku kupowaniu przynajmniej warstwy fundamentalnej, ale nie
wyeliminowała realnych zalet opcji budowania dla specyficznych,
dostosowanych potrzeb, szczególnie wokół telemetrii rezultatów, którą temat
7.4 uznaje za konieczne centrum programu metryk, a która jest często
najmniej ustandaryzowaną, najbardziej specyficzną dla organizacji kategorią
pomiaru omówioną w tej książce.

W dużych zespołach ta decyzja ma realne, ciągłe konsekwencje budżetowe i dla
mocy inżynierskich. Duże przedsiębiorstwa często muszą integrować narzędzia
do metryk w naprawdę heterogenicznym krajobrazie systemów starszych i
nowoczesnych, co znacząco kształtuje rachunek „budować czy kupować".
Administracja publiczna często napotyka ograniczenia zamówień publicznych
oraz wymogi suwerenności danych lub bezpieczeństwa, które istotnie wpływają
na to, które opcje komercyjne w ogóle wchodzą w grę, czasem przechylając
decyzję ku budowaniu albo ku konkretnym, sprawdzonym dostawcom, niezależnie od
tego, co sugerowałaby sama analiza kosztów i korzyści.

## Kluczowe zasady

- **To rzadko decyzja „wszystko albo nic".** Większość dojrzałych programów
  metryk łączy kupione narzędzia dla dobrze ustandaryzowanych metryk ze
  zbudowanymi narzędziami dla telemetrii rezultatów specyficznej dla
  organizacji.
- **Kupuj dla dobrze ustandaryzowanych, szeroko potrzebnych metryk; buduj
  dla naprawdę specyficznych dla organizacji.** Metryki DORA i analityka
  pull requestów to terytorium towarowe; twoja konkretna korelacja z
  rezultatami biznesowymi (temat 5.3) zwykle nim nie jest.
- **Własność danych i ich przenośność są tak samo ważne jak porównanie
  funkcji.** Narzędzie, które uwięzi twoje dane o metrykach, to trwałe
  ryzyko, a nie tylko niedogodność.
- **Koszt integracji jest często niedoszacowany** w analizie „budować czy
  kupować", dla obu opcji.
- **Ograniczenia zamówień, bezpieczeństwa i suwerenności danych mogą
  przesądzić nad czystym rachunkiem kosztów i korzyści**, szczególnie w
  administracji publicznej.

## Rekomendacje

### Kupuj dla warstwy towarowej: DORA, przeglądy i infrastruktura ankiet

Dla rodzin metryk z dojrzałymi, szeroko dostępnymi narzędziami
komercyjnymi, czyli instrumentacji metryk DORA (część 2), analityki pull
requestów i przeglądów kodu (temat 2.9) oraz platform ankiet o doświadczeniu
programisty (temat 3.7), kupowanie jest zwykle lepszym wyborem ekonomicznym
dla większości organizacji poniżej pewnej skali, ponieważ budowanie
równoważnej infrastruktury powiela wysiłek inżynierski, w który wielu
dostawców już mocno zainwestowało, a budowa własnej wersji daje niewiele
realnej różnicy.

### Buduj dla naprawdę specyficznej dla organizacji telemetrii rezultatów

Dla metryk rezultatów, które według tematu 7.4 powinny być środkiem ciężkości
twojego programu metryk, czyli korelacji z rezultatami biznesowymi (temat
5.3), adopcji funkcji związanej z twoim konkretnym produktem (temat 5.2) i
ekonomii jednostkowej związanej z twoją konkretną strukturą kosztów (temat
5.4), narzędzia komercyjne są znacznie mniej ustandaryzowane i często nie
potrafią uchwycić specyficznej logiki biznesowej i modelu danych twojej
organizacji bez rozległej, drogiej customizacji, która może ostatecznie
kosztować więcej niż zbudowanie równoważnej zdolności we własnym zakresie, z
pełną kontrolą nad wynikiem.

### Oceń własność danych i ich przenośność, zanim zwiążesz się z dostawcą

Zanim podpiszesz umowę komercyjną, upewnij się, że możesz wyeksportować
pełne historyczne dane o metrykach w użytecznym, standardowym formacie, i
zrozum, co stanie się z tymi danymi i ich historią, jeśli zmienisz dostawcę
lub zrezygnujesz z usługi. Relacja z dostawcą, z której trudno wyjść przez
[uwięzienie](https://en.wikipedia.org/wiki/Vendor_lock-in) danych, to trwałe ryzyko organizacyjne, a nie tylko niedogodność, i ta
ocena zasługuje na taką samą powagę jak każde inne znaczące, wieloletnie
zobowiązanie infrastrukturalne.

### Realistycznie zabudżetuj koszt integracji po obu stronach decyzji

Czy budujesz, czy kupujesz, koszt integracji, czyli podłączenia narzędzia do
twojego faktycznego systemu kontroli wersji, CI/CD, śledzenia incydentów i
systemów biznesowych, jest często niedoszacowany we wstępnym planowaniu
każdej ze ścieżek. Zabudżetuj ten wysiłek integracyjny jawnie jako odrębną,
znaczącą pozycję w analizie „budować czy kupować", zamiast zakładać, że
narzędzie komercyjne zadziała od ręki przy minimalnej konfiguracji, albo że
koszt integracji rozwiązania własnego to drobny dodatek do kosztu jego
rozwoju.

### Uwzględnij jawnie i wcześnie ograniczenia zamówień, bezpieczeństwa i suwerenności

W administracji publicznej i regulowanych przedsiębiorstwach wymogi
suwerenności danych, potrzeby certyfikacji bezpieczeństwa i procesy
zamówień mogą istotnie zawęzić lub wyeliminować niektóre opcje komercyjne
niezależnie od jakości ich funkcji, czasem przechylając decyzję ku
budowaniu albo ku mniejszemu zbiorowi konkretnie sprawdzonych dostawców.
Zidentyfikuj te ograniczenia jawnie i wcześnie w procesie oceny, zamiast
odkrywać je dopiero po tym, jak znaczący wysiłek oceny poszedł już na
opcję, która okazuje się niewykonalna z powodów niezwiązanych z jej
faktycznymi możliwościami.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Kupno narzędzi komercyjnych | Szybkie wdrożenie, dojrzały zestaw funkcji, utrzymywane przez dostawcę | Mniej możliwości dostosowania do metryk rezultatów specyficznych dla organizacji; potencjalne uwięzienie |
| Budowa narzędzi wewnętrznych | W pełni dostosowane, pełna własność i kontrola nad danymi | Znacząca, ciągła inwestycja inżynierska; powiela wysiłek dla metryk towarowych |
| Hybryda: kupić warstwę towarową, zbudować warstwę rezultatów | Równoważy efektywność kosztową z prawdziwym dostosowaniem tam, gdzie liczy się najbardziej | Wymaga pracy integracyjnej, by spójnie połączyć kupione i zbudowane komponenty |
| Kupić wszystko, w tym telemetrię rezultatów, przez rozległą customizację u dostawcy | Jedna relacja z dostawcą, potencjalnie prostsze zamówienia | Może stać się równie drogie jak budowa, z mniejszą ostateczną kontrolą nad wynikiem |

Główne napięcie to **potrzeba dostosowania kontra koszt rozwoju**. Metryki,
które najbardziej zyskują na dostosowaniu, czyli telemetria rezultatów
związana konkretnie z twoim biznesem, są też najdroższe do dobrego
zbudowania; metryki najtańsze do kupienia, DORA i analityka przeglądów, to
te, w których prawdziwe dostosowanie ma najmniejsze znaczenie. Rozwiąż to
napięcie, dopasowując decyzję bezpośrednio do tego wzorca: kupuj tam, gdzie
standaryzacja ci służy, buduj tam, gdzie twój konkretny kontekst naprawdę
tego wymaga, i realistycznie budżetuj koszt integracji po obu stronach
tego podziału.

## Pytania do omówienia z zespołem

1. **Czy dla każdej rodziny metryk omówionej w tej książce faktycznie
   skorzystalibyśmy z dostosowania, czy standardowe narzędzie komercyjne
   służyłoby nam równie dobrze?** Przejdź jawnie przez części od 2 do 6 i
   posortuj każdą rodzinę metryk do kolumny „kupić" lub „zbudować" według
   tego konkretnego testu.

2. **Czy oceniliśmy opcje eksportu i przenośności danych naszego obecnego
   lub potencjalnego dostawcy, czy zakładamy, że moglibyśmy łatwo odejść,
   gdyby zaszła potrzeba?** Sprawdź to wprost, zamiast zakładać; uwięzienie
   danych odkrywa się często dopiero wtedy, gdy organizacja faktycznie
   próbuje się przenieść.

3. **Czy nasza pierwotna analiza „budować czy kupować" realistycznie
   uwzględniała koszt integracji, czy skupiała się głównie na opłatach
   licencyjnych kontra godzinach rozwoju?** Wróć do niedawnej decyzji o
   narzędziach i sprawdź, czy koszt integracji był faktycznie szacowany,
   czy znacząco niedoszacowany.

4. **Czy napotykamy ograniczenia zamówień, bezpieczeństwa lub suwerenności
   danych, które wyeliminowałyby niektóre opcje komercyjne niezależnie od
   jakości ich funkcji?** Zidentyfikuj te ograniczenia jawnie przed, a nie
   po zainwestowaniu znaczącego wysiłku oceny w opcje, które mogą okazać się
   niewykonalne.

5. **Czy nasz obecny krajobraz narzędzi to świadoma hybryda, dopasowująca
   budowanie i kupowanie do miejsc, gdzie każde ma sens, czy narósł przez
   doraźne, pojedynczo rozsądne decyzje w czasie?** Bądź szczery, który
   wzorzec faktycznie opisuje twoją obecną sytuację.

6. **Ile by nas kosztowało, w wysiłku i ryzyku, zmienienie dziś dostawcy
   naszych narzędzi do metryk, gdyby zaszła potrzeba?** To konkretne pytanie
   testuje twoje faktyczne obecne narażenie na ryzyko uwięzienia danych,
   ponad to, co umowa z dostawcą nominalnie obiecuje.

## Perspektywa sektorowa

**Startup.** W tej skali kupuj domyślnie narzędzia towarowe; budowanie
własnej infrastruktury metryk rzadko jest dobrym użyciem skromnych wczesnych
mocy inżynierskich, gdy istnieją dojrzałe, niedrogie opcje komercyjne
konkretnie dla metryk DORA i przeglądów. Zarezerwuj wysiłek budowania dla
jednej metryki rezultatu (temat 5.3), która najbardziej bezpośrednio
odzwierciedla podstawową wartość twojego produktu.

**Mała firma.** Większość opcji narzędzi komercyjnych skaluje się w dół
rozsądnie dobrze i ma dostępne ceny dla mniejszych organizacji; kupowanie
warstwy towarowej jest niemal zawsze właściwym wyborem, a budowanie czegokolwiek
własnego rzadko jest uzasadnione, dopóki organizacja znacząco nie urośnie i
nie zyska naprawdę specyficznych potrzeb.

**Duże przedsiębiorstwo.** Hybrydowe podejście zalecane w tym temacie
zasługuje tu na swoją złożoność: kupuj warstwę towarową na dużą skalę (często
ze znaczną siłą negocjacyjną dla korzystnych warunków) i inwestuj świadomie
w budowę warstwy telemetrii rezultatów specyficznej dla organizacji, bo
złożoność logiki biznesowej i modelu danych w tej skali zwykle przekracza to,
co ogólne narzędzia komercyjne potrafią pomieścić bez rozległej, drogiej
customizacji.

**Administracja publiczna.** Procesy zamówień, wymogi certyfikacji
bezpieczeństwa i ograniczenia suwerenności danych często dominują tę
decyzję bardziej, niż sugerowałoby samo porównanie funkcji czy kosztów.
Zaangażuj interesariuszy od zamówień i bezpieczeństwa wcześnie w procesie
oceny i bądź przygotowany na to, że opcja budowania będzie tu naprawdę
atrakcyjniejsza niż w porównywalnym kontekście sektora prywatnego, właśnie z
powodu tych ograniczeń, a nie dlatego, że budowanie jest z natury lepsze.

## Przykłady

**Przedsiębiorstwo.** Firma programistyczna początkowo próbowała zbudować w
pełni własną platformę metryk obejmującą każdą rodzinę metryk od części 2 do
części 6, wieloletni wysiłek, który pochłonął znaczące moce inżynierskie i
nadal pozostawał w tyle za dojrzałymi ofertami komercyjnymi właśnie dla
ustandaryzowanych metryk DORA i przeglądów. Zrewidowana strategia przyjęła
platformę komercyjną dla tych metryk towarowych, uwalniając wewnętrzny
zespół platformowy do skupienia się wyłącznie na budowie telemetrii korelacji
z rezultatami biznesowymi i ekonomii jednostkowej (tematy 5.3, 5.4)
naprawdę specyficznej dla modelu biznesowego firmy, której żadne narzędzie
komercyjne nie dostarczyłoby od ręki. To hybrydowe podejście dało w ciągu
jednego roku bardziej kompletny, naprawdę użyteczny program metryk niż
strategia wszystko-budować po dwóch latach.

**Administracja publiczna.** Wstępna ocena komercyjnych platform analityki
inżynierskiej przez agencję federalną wykazała, że żaden z dostępnych
dostawców nie spełnia wymogów suwerenności danych agencji, które nakazywały,
by wszystkie dane o metrykach inżynierskich pozostawały w konkretnych,
certyfikowanych rządowych centrach danych. Zamiast całkowicie porzucić opcję
kupna, agencja zidentyfikowała mniejszy zbiór dostawców oferujących
certyfikowane rządowo, suwerenne opcje wdrożenia w chmurze, za skromną
dopłatą względem standardowych cen komercyjnych, i z powodzeniem wdrożyła
program hybrydowy: kupione narzędzia dla warstwy metryk towarowych w
wymaganych granicach suwerenności oraz zbudowane wewnętrznie narzędzia dla
specyficznych potrzeb agencji w zakresie telemetrii rezultatów obywateli, na
które żaden dostępny dostawca komercyjny nie odpowiadał, niezależnie od
względów suwerenności.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem ze świadomej, hybrydowej strategii „budować czy kupować" jest
uniknięcie obu sposobów porażki, które ilustrują przykłady tego tematu:
zmarnowanej, wieloletniej inwestycji inżynierskiej w budowanie zdolności
towarowej, która już istnieje tanio na rynku, oraz frustracji i ostatecznego
kosztu customizacji przy wciskaniu naprawdę specyficznej dla organizacji
potrzeby w źle dopasowane narzędzie komercyjne. Powyższy przykład
przedsiębiorstwa pokazuje to konkretnie: podejście hybrydowe dało w jeden
rok więcej prawdziwej wartości niż strategia wszystko-budować w dwa lata.

Całkowity koszt posiadania dla każdej ze ścieżek obejmuje koszt integracji,
często niedoszacowany, a dla kupionych narzędzi konkretnie także ciągły koszt
ryzyka potencjalnego uwięzienia u dostawcy, o ile przenośność danych nie
zostanie potwierdzona i zabezpieczona umownie z góry. Realistyczne
zabudżetowanie obu tych pozycji, zamiast wąskiego skupienia na opłatach
licencyjnych czy samych godzinach rozwoju, daje znacznie dokładniejszy obraz
całkowitego kosztu dla każdej z opcji.

## Antywzorce i pułapki

- **Budowanie własnych narzędzi dla dobrze ustandaryzowanych metryk
  towarowych:** powiela wysiłek inżynierski, w który wielu dostawców już
  mocno zainwestowało.
- **Kupowanie narzędzi komercyjnych dla naprawdę specyficznej dla
  organizacji telemetrii rezultatów bez wcześniejszego sprawdzenia
  dopasowania:** grozi drogą, źle dopasowaną customizacją lub niezaspokojoną
  potrzebą.
- **Brak oceny eksportu i przenośności danych przed związaniem się z
  dostawcą:** grozi trwałym, kosztownym uwięzieniem, odkrytym dopiero przy
  próbie odejścia.
- **Niedoszacowanie kosztu integracji po którejkolwiek stronie decyzji:**
  daje niedokładne porównanie całkowitych kosztów i nierealistyczne
  harmonogramy.
- **Ignorowanie ograniczeń zamówień, bezpieczeństwa lub suwerenności do
  późna w procesie oceny:** marnuje wysiłek oceny na opcje, które okazują
  się niewykonalne z powodów niezwiązanych z możliwościami.
- **Traktowanie tego jako jednej decyzji „wszystko albo nic":** pomija
  podejście hybrydowe, które najlepiej odpowiada faktycznym, mieszanym
  potrzebom większości organizacji.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Decyzje o narzędziach zapadają doraźnie, bez
  świadomej analizy „budować czy kupować" ani uwzględnienia przenośności
  danych.
- **Poziom 2, Rozwój:** Zdarza się jakaś analiza, ale koszt integracji jest
  rutynowo niedoszacowany, a podejście hybrydowe nie jest świadomie
  rozważane.
- **Poziom 3, Standaryzacja:** Świadoma, hybrydowa strategia „budować czy
  kupować" konsekwentnie dopasowuje metryki towarowe do kupionych narzędzi, a
  telemetrię rezultatów specyficzną dla organizacji do zbudowanych.
- **Poziom 4, Zarządzanie:** Przenośność danych jest potwierdzona i
  zabezpieczona umownie dla wszystkich kupionych narzędzi, a ograniczenia
  zamówień, bezpieczeństwa i suwerenności są uwzględniane jawnie i wcześnie.
- **Poziom 5, Orkiestracja:** Krajobraz narzędzi organizacji odzwierciedla
  dojrzałą, świadomą strategię hybrydową, regularnie przeglądaną w miarę
  ewolucji ofert komercyjnych i potrzeb organizacji, z wykazaną wartością
  zarówno z komponentów kupionych, jak i zbudowanych.

## Pomysły do dyskusji

1. Które z naszych obecnych metryk najbardziej skorzystałyby na dostosowaniu, którego obecnie nie dostajemy?
2. Czy potwierdziliśmy, że moglibyśmy wyeksportować pełne historyczne dane o metrykach, gdybyśmy musieli zmienić dostawcę?
3. Czy nasza ostatnia decyzja o narzędziach realistycznie uwzględniała koszt integracji?
4. Jakie ograniczenie zamówień, bezpieczeństwa lub suwerenności możemy niedoszacowywać?
5. Jak wyglądałaby świadoma strategia hybrydowa dla naszego konkretnego zestawu metryk?

## Kluczowe wnioski

- To rzadko „wszystko albo nic"; większość dojrzałych programów **łączy
  kupione narzędzia dla metryk towarowych ze zbudowanymi narzędziami dla
  telemetrii rezultatów specyficznej dla organizacji**.
- **Kupuj dla metryk ustandaryzowanych** (DORA, analityka przeglądów,
  infrastruktura ankiet); **buduj dla naprawdę specyficznego dla
  organizacji** pomiaru rezultatów.
- Oceń **własność danych i ich przenośność** przed związaniem się z
  dostawcą; uwięzienie to trwałe ryzyko, a nie tylko niedogodność.
- **Realistycznie budżetuj koszt integracji** po obu stronach decyzji; jest
  często niedoszacowany.
- **Ograniczenia zamówień, bezpieczeństwa i suwerenności** mogą przesądzić
  nad czystym rachunkiem kosztów i korzyści, szczególnie w administracji
  publicznej.

## Bibliografia i dalsza lektura

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (rodziny metryk, do których analiza „budować czy
  kupować" z tego tematu jest stosowana).
- *Cloud FinOps*, J.R. Storment i Mike Fuller (zasady analizy kosztów
  przydatne przy decyzjach inwestycyjnych dotyczących narzędzi).
- FinOps Framework organizacji FinOps Foundation, [finops.org](https://www.finops.org/)
  (wskazówki praktyków o ocenie i zarządzaniu kosztami narzędzi
  chmurowych i SaaS).
- Dokumentacja amerykańskiego programu Federal Risk and Authorization
  Management Program (FedRAMP): miarodajne wskazówki o bezpieczeństwie i
  wymogach suwerenności dla rządowych narzędzi chmurowych.
