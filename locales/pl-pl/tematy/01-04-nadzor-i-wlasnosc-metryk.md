# 1.4 Nadzór nad metrykami i ich własność

## Przegląd i motywacja

Metryka bez właściciela to spór, który czeka, by się wydarzyć. Dwa zespoły
liczą "aktywnych użytkowników" inaczej i spędzają spotkanie na uzgadnianiu
liczb zamiast zarządzać trendem; kafel panelu, którego nikt nie utrzymuje,
przez miesiące po cichu się przeterminowuje, zanim ktokolwiek zauważy; metryka
zbudowana pierwotnie do diagnozy jednego zespołu zostaje przejęta przez inny
zespół do celu, którego jej pierwotna definicja nigdy nie miała wspierać. Nic z
tego nie jest problemem pomiaru w sensie statystycznym. To problem nadzoru i
da się go rozwiązać tą samą dyscypliną, którą organizacje już stosują wobec
kodu: jawną własnością, udokumentowanym [źródłem prawdy](https://en.wikipedia.org/wiki/Single_source_of_truth)
i procesem przeglądu.

Nadzór nie jest biurokracją dla samej biurokracji. To on sprawia, że program
metryk przetrwa zetknięcie ze skalą organizacji. Pojedynczy zespół może
trzymać definicje metryk w czyjejś głowie i korygować dryf codzienną rozmową.
Organizacja z dziesiątkami zespołów, z których każdy wytwarza i konsumuje
metryki, już nie może. Bez nadzoru definicje dryfują po cichu, metryki mnożą
się bez nikogo, kto by je przycinał, a zanim kierownictwo zauważy, że dwa raporty
się nie zgadzają, koszt ich uzgadniania został już wielokrotnie zapłacony w
zmarnowanych spotkaniach i nadszarpniętym zaufaniu.

W dużych przedsiębiorstwach i administracji publicznej nadzór ma dodatkową
wagę, bo metryki coraz częściej zasilają decyzje z realnymi konsekwencjami,
alokację budżetu, publiczne raportowanie wyników, umowy z dostawcami, które
przeżywają każdą pojedynczą osobę, która zbudowała pierwotny panel. Karta metryk,
która przetrwa rotację pracowników, którą każdy nowy członek zespołu może
przeczytać i zrozumieć, sprawia, że liczby organizacji znaczą to samo za pięć
lat co dziś.

## Kluczowe zasady

- **Każda metryka ma dokładnie jednego właściciela.** Współwłasność to brak
  własności; gdy wszyscy są właścicielami definicji, nikt jej nie utrzymuje.
- **Metryka ma jedno źródło prawdy.** Dwa systemy liczące tę samą metrykę
  inaczej to porażka nadzoru czekająca na ujawnienie.
- **Nadzór jest spisany, a nie jest wiedzą plemienną.** Karta metryk, która
  żyje tylko w czyjejś pamięci, nie przeżyje jej odejścia.
- **Wycofywanie jest tak samo ważne jak przyjmowanie.** Zdrowy program metryk
  przycina tak samo celowo, jak rośnie.
- **Nadzór skaluje się z konsekwencją, a nie z liczbą metryk.** Metryka
  zasilająca raport publiczny wymaga cięższego nadzoru niż ta, której pojedynczy
  zespół używa do debugowania własnego sprintu.

## Rekomendacje

### Napisz kartę metryk dla każdego zestawu metryk przekraczającego granicę zespołu

**Karta metryk** to krótki, żywy dokument, który określa cel zestawu metryk,
jego jawne cele wykluczone (tu należy rozróżnienie diagnostyczne-kontra-oceniające
z tematu 1.1), właściciela i źródło prawdy każdej metryki oraz rytm
przeglądu. Zmieść ją na jednej stronie. Plik docs/examples/metrics-charter-example.md
w repozytorium towarzyszącym tej książce pokazuje jej kształt. Tak krótka
karta jest czytana; karta rozrośnięta w dokument polityki nie jest.

### Przypisz każdej metryce właściciela z nazwiska, a nie zespół

"Własność tej metryki ma zespół platformowy" rozmywa odpowiedzialność, aż nikt
faktycznie jej nie utrzymuje. Nazwij osobę albo konkretną, rozliczalną rolę. Ten
właściciel odpowiada za to, by definicja metryki pozostawała dokładna, jej
instrumentacja zdrowa, i za odpowiadanie na pytanie "dlaczego ta liczba wygląda
źle", gdy nieuchronnie się pojawi. Własność może i powinna rotować, gdy ludzie
zmieniają role, ale karta powinna zawsze wskazywać obecnego właściciela, nigdy
nie zostawiając pustego pola.

### Ustal jedno źródło prawdy na metrykę i zakaż równoległego obliczania

Gdy dwa systemy liczą tę samą, nominalnie nazwaną metrykę inaczej, na przykład
"aktywni użytkownicy" jednego zespołu liczą logowania, a drugiego wywołania API,
powstała niezgodność kosztuje w spotkaniach uzgodnieniowych znacznie więcej,
niż kosztowałoby wcześniejsze uzgodnienie jednego źródła prawdy. Nazwij w
karcie system autorytatywny dla każdej metryki i traktuj każde inne obliczenie
tej samej metryki albo jako błąd do naprawy, albo jako metrykę o innej nazwie,
którą trzeba przemianować.

### Wbuduj przegląd wycofywania w rytm nadzoru

Program metryk, który tylko dodaje metryki, gromadzi rozrost panelu, na
podstawie którego nikt nie może działać (temat 1.1). Przy każdym przeglądzie
nadzoru, obok proponowania nowych metryk, zapytaj, które istniejące nie
poinformowały żadnej decyzji w ostatnich dwóch cyklach i są kandydatami do
wycofania. Wycofanie nie jest porażką; to ta sama dyscyplina, którą zdrowa baza
kodu stosuje wobec martwego kodu.

### Skaluj rygor nadzoru do konsekwencji, a nie do wolumenu

Nie każda metryka potrzebuje tego samego procesu. Metryka, którą pojedynczy
zespół wymyśla do debugowania własnego sprintu, potrzebuje prawie żadnego
nadzoru poza tym, że zespół wie, co znaczy. Metryka zasilająca kartę wyników
zarządu, publiczny raport o wynikach albo czyjeś wynagrodzenie potrzebuje
udokumentowanej definicji, nazwanego właściciela, ścieżki audytu i zatwierdzenia
przed uruchomieniem. Dopasuj wagę procesu do konsekwencji błędu metryki, a nie
do liczby istniejących metryk.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak formalnego nadzoru | Szybko, niski narzut dla małych zespołów | Definicje dryfują; własność się rozmywa; panele rozrastają się bez kontroli |
| Lekka karta na zestaw metryk | Tania, czytelna, skaluje się z organizacją | Wymaga dyscypliny, by była aktualna; można ją pominąć pod presją terminów |
| Ciężka centralna rada nadzoru nad metrykami | Silna spójność, silna ścieżka audytu | Wolne zatwierdzanie nowych metryk; może stać się wąskim gardłem, które zespoły omijają |
| Nadzór skalowany do konsekwencji | Dopasowuje wysiłek do faktycznego ryzyka | Wymaga osądu, by poprawnie sklasyfikować konsekwencję; można go zmanipulować, zaniżając stawkę |

Centralne napięcie to **spójność kontra szybkość**. Ciężki nadzór centralny daje
metryki godne zaufania i spójne, ale spowalnia zespół dokładnie wtedy, gdy chce
szybko coś zinstrumentować, by odpowiedzieć na pilne pytanie. Rozwiąż to
napięcie, skalując wagę nadzoru do konsekwencji: pozwól zespołom instrumentować
swobodnie na własny użytek diagnostyczny, a pełną dyscyplinę karty, własności i
zatwierdzania wymagaj dopiero wtedy, gdy metryka przekracza granicę zespołu lub
zasila użycie oceniające czy publiczne.

## Pytania do omówienia z zespołem

1. **Czy każda metryka przekraczająca granicę zespołu ma wskazanego z nazwiska
   właściciela i czy ten właściciel rozpoznałby siebie jako rozliczalnego,
   gdyby zapytać dziś?** "Własność ma zespół platformowy" nie jest odpowiedzią;
   konkretna osoba lub rola jest. Zbadaj swoje metryki międzyzespołowe i sprawdź,
   czy wskazany właściciel, jeśli w ogóle istnieje, faktycznie wie, że ma tę
   odpowiedzialność.

2. **Gdzie obecnie liczymy tę samą, nominalnie nazwaną metrykę na dwa różne
   sposoby i ile czasu spędziliśmy na uzgadnianiu niezgodności?** To jedna z
   najdroższych i najczęstszych porażek nadzoru w dużych organizacjach, a
   można jej całkowicie zapobiec udokumentowanym jednym źródłem prawdy.
   Przynieś prawdziwy przykład, jeśli go masz, i prześledź jego koszt.

3. **Kiedy ostatnio wycofaliśmy metrykę i co wywołało tę decyzję?**
   Organizacja, która potrafi opisać tylko to, jak dodaje metryki, a nigdy jak
   je usuwa, gromadzi dług panelu. Jeśli nie pamiętasz żadnego wycofania, ten
   brak sam jest odpowiedzią na to pytanie.

4. **Czy nasz proces nadzoru jest proporcjonalny do konsekwencji, czy każda
   metryka przechodzi przez przegląd o tej samej wadze, niezależnie od
   stawki?** Zbyt ciężki nadzór nad zespołową metryką o niskiej stawce spowalnia
   pracę bez korzyści dla bezpieczeństwa; zbyt lekki nadzór nad metryką
   zasilającą raport publiczny lub decyzję o wynagrodzeniu to realne ryzyko.
   Zmapuj swoje obecne metryki według konsekwencji i uczciwie sprawdź wagę
   procesu względem niej.

5. **Co dzieje się z własnością metryki, gdy osoba, która ją zbudowała, zmienia
   rolę lub odchodzi?** Karta metryk istniejąca tylko w jednej głowie znika wraz
   z nią. Sprawdź to, wybierając metrykę i pytając, czy nowa osoba mogłaby,
   wyłącznie na podstawie pisemnej dokumentacji, zrozumieć jej definicję,
   źródło prawdy i cel.

6. **Skąd byśmy wiedzieli, że definicja metryki po cichu się zmieniła?** Zmiana
   sposobu obliczania liczby, bez zmiany jej nazwy ani notatki w historii, jest
   niemal niewidoczna, dopóki ktoś nie porówna starych i nowych danych i nie
   znajdzie nieciągłości, której nie umie wyjaśnić. Omówcie, czy wasze metryki
   mają dziś jakąkolwiek formę dziennika zmian.

## Perspektywa sektorowa

**Startup.** Formalny nadzór to zwykle przesada dla pięcioosobowego zespołu, w
którym każdy już wie, co znaczy każda liczba. Jedna dyscyplina, którą i tak warto
wcześnie przyjąć, to wskazanie z nazwiska jednego właściciela metryki na
piśmie, bo kosztuje prawie nic, a zapobiega zamieszaniu, gdy dołączają pierwsze
osoby i zaczynają pytać, co znaczy dana liczba.

**Mała firma.** Nadzór oznacza tu głównie wybór i trzymanie się jednego
narzędzia jako źródła prawdy dla każdej metryki, zamiast pozwalać, by arkusze
kalkulacyjne i wbudowany panel platformy po cichu się rozjeżdżały. Napisz
kartę jako jeden wspólny dokument, choćby nieformalny, aby nowy pracownik mógł
dowiedzieć się, co znaczy liczba, bez dopytywania wokół.

**Duże przedsiębiorstwo.** Tu nadzór zarabia na siebie. Ujednolić definicje w
jednostkach biznesowych, wymagaj karty dla wszystkiego, co zasila kartę wyników
zarządu, i wbuduj przegląd wycofywania w cykliczny rytm nadzoru, bo rozrost
paneli w tej skali szybko staje się drogi, zarówno w kosztach utrzymania, jak i
w utracie wiarygodności, gdy dwa piony raportują sprzeczne liczby dla tej samej
rzeczy.

**Administracja publiczna.** Nadzór ma tu często wymiar prawny lub audytowy:
publikowane miary wyników mogą musieć spełniać ustawowe wymogi sprawozdawcze, a
zmiana definicji może mieć realne konsekwencje polityczne. Dokumentuj
metodologię publicznie, zamrażaj definicje w kolejnych okresach sprawozdawczych,
chyba że sama zmiana jest publicznie uzasadniona, i traktuj niezależny audyt
definicji metryki, nie tylko jej bieżącej wartości, jako stałą praktykę nadzoru.

## Przykłady

**Przedsiębiorstwo.** Międzynarodowa firma programistyczna odkryła podczas
integracji po przejęciu, że jej dwie największe jednostki biznesowe definiują
"częstotliwość wdrożeń" inaczej: jedna liczyła każdy push do środowiska
stagingowego, druga tylko wydania produkcyjne. Kierownictwo przez ponad rok
porównywało wyniki dostarczania obu jednostek, używając liczb, które faktycznie
nie były porównywalne. Rozwiązaniem była ogólnofirmowa rada nadzoru nad
metrykami, która opublikowała jeden słownik definicji metryk (odzwierciedlony w
temacie 9.2 tej książki), wymagała od każdego zespołu poświadczenia zgodności i
w ciągu jednego kwartału wycofała dwuznaczne lokalne definicje.

**Administracja publiczna.** Krajowy urząd statystyczny odpowiedzialny za
publikowanie panelu wyników usług cyfrowych odkrył, że zmiana sposobu obliczania
wskaźnika "rozwiązane w ramach SLA", wprowadzona po cichu przez zespół
inżynierski naprawiający coś, co uznali za błąd, przesunęła kluczowy wskaźnik
zgodności o kilka punktów procentowych bez publicznej dokumentacji tej zmiany.
Urząd ustanowił formalny proces kontroli zmian dla każdej definicji metryki
zasilającej raport publiczny: proponowane zmiany wymagają udokumentowanego
uzasadnienia, porównania przed i po opublikowanego razem ze zmianą oraz
zatwierdzenia przez wskazanego z nazwiska rozliczalnego urzędnika, zamykając
lukę, która pozwoliła wcześniejszej zmianie przejść niezauważenie.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z nadzoru jest uniknięty koszt uzgadniania. Każda godzina spędzona na
spotkaniu, na którym dwa zespoły spierają się, czyja liczba jest poprawna, to
godzina, której zdyscyplinowany nadzór, jedno źródło prawdy i wskazany
właściciel w ogóle by zapobiegły. W skali przedsiębiorstwa ten koszt
kumuluje się w dziesiątkach zespołów i może pochłaniać naprawdę znaczną część
uwagi kierownictwa na problem, którego uniknęłaby jednostronicowa karta na
zestaw metryk.

Całkowity koszt posiadania (TCO) lekkiej praktyki nadzoru, karty, wskazanego
właściciela i okresowego przeglądu, jest skromny i w większości ponoszony z góry.
Alternatywa, odkrycie rok po starcie dużej inicjatywy, że liczby, którym ufało
kierownictwo, nigdy nie były faktycznie porównywalne, kosztuje dramatycznie
więcej, zarówno w zmarnowanej analizie, jak i w utracie wiarygodności przy
korygowaniu zapisu publicznego lub wewnętrznego po fakcie.

## Antywzorce i pułapki

- **Własność zespołowa zamiast własności osoby wskazanej z nazwiska:** rozmywa
  rozliczalność, aż nikt faktycznie nie utrzymuje definicji.
- **Równoległe obliczanie tej samej nominalnej metryki:** gwarantuje
  ostateczną niezgodność i kosztowne uzgadnianie.
- **Karta, która istnieje tylko w czyjejś głowie:** znika w chwili, gdy ta osoba
  zmienia rolę.
- **Program metryk, który tylko dodaje, a nigdy nie wycofuje:** produkuje
  rozrost panelu, na podstawie którego nikt nie może działać.
- **Jednolita waga nadzoru niezależnie od konsekwencji:** spowalnia pracę o niskiej
  stawce, a niedostatecznie chroni metryki o wysokiej stawce, publiczne lub
  powiązane z wynagrodzeniem.
- **Ciche zmiany definicji:** znaczenie metryki się przesuwa bez dziennika
  zmian, a porównania historyczne po cichu tracą ważność.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryki nie mają formalnych właścicieli; definicje
  żyją w indywidualnej pamięci i po cichu dryfują między zespołami.
- **Poziom 2, Rozwój:** Niektóre zespoły piszą nieformalną dokumentację własnych
  metryk, ale brakuje wspólnego formatu karty i spójności między zespołami.
- **Poziom 3, Standaryzacja:** Każda metryka przekraczająca granicę zespołu ma
  udokumentowaną kartę, wskazanego właściciela i jedno uzgodnione źródło prawdy,
  egzekwowane w całej organizacji.
- **Poziom 4, Zarządzanie:** Cykliczny rytm nadzoru przegląda metryki pod kątem
  dalszej przydatności, wycofuje te, które przestały zarabiać na siebie, i śledzi
  zmiany definicji z widoczną historią.
- **Poziom 5, Orkiestracja:** Nadzór jest proporcjonalny do konsekwencji,
  zautomatyzowany tam, gdzie to możliwe (katalog metryk, który oznacza metryki
  nieudokumentowane lub bez właściciela), a organizacja potrafi na żądanie
  wykazać pełne pochodzenie każdej opublikowanej liczby.

## Pomysły do dyskusji

1. Czy nowa osoba mogłaby dowiedzieć się, wyłącznie z dokumentacji, co faktycznie znaczą nasze trzy najważniejsze metryki?
2. Które z naszych metryk dwa różne systemy liczą obecnie inaczej?
3. Kiedy ostatnio wycofaliśmy metrykę i jak zdecydowaliśmy?
4. Czy nasz proces nadzoru jest cięższy tam, gdzie konsekwencja jest najwyższa, czy jest jednolity?
5. Kto z nazwiska jest właścicielem najbardziej doniosłej publicznej metryki naszej organizacji?

## Kluczowe wnioski

- Każda metryka potrzebuje **jednego wskazanego właściciela**, a nie zespołu, i
  **jednego źródła prawdy**, a nie równoległego obliczania.
- Napisz krótką, żywą **kartę metryk** dla każdego zestawu przekraczającego
  granicę zespołu, określającą cel, cele wykluczone, własność i rytm przeglądu.
- **Wycofywanie** jest tak samo ważną dyscypliną nadzoru jak przyjmowanie;
  przycinaj celowo.
- Skaluj rygor nadzoru do **konsekwencji**, a nie liczby metryk: cięższy proces
  dla metryk publicznych, oceniających lub powiązanych z wynagrodzeniem.
- Definicja metryki może dryfować po cichu; śledź zmiany z widoczną historią,
  aby zaufanie do liczby przetrwało rotację pracowników.

## Bibliografia i dalsza lektura

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, John Ladley (struktury nadzoru stosowalne do programów
  metryk).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (dysfunkcje organizacyjne wokół własności i użycia metryk).
- *Key Performance Indicators*, David Parmenter (własność metryk, dyscyplina
  definicji i rytm przeglądu).
- Wytyczne U.S. Government Accountability Office (GAO) dotyczące pomiaru wyników
  i ustawy GPRA Modernization Act: nadzór nad metrykami w sektorze publicznym i
  kontrola zmian.
