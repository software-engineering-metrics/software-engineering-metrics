# 9.1 Słownik pojęć

Definicje terminów i akronimów używanych w całej książce. Każde hasło wskazuje
temat, w którym termin jest wprowadzony dogłębnie. Hasła są ułożone według
angielskiej nazwy, pod którą występują w oryginale książki; polski termin
podano jako pierwszy, a angielski w nawiasie.

**Metryka aktywności (activity metric).** Zliczenie ruchu inżynierskiego
(commity, pull requesty, linie kodu), które mierzy wolumen, a nie wartość.
Zobacz temat 3.4.

**Współczynnik autobusowy (bus factor).** Liczba osób, które musiałyby stać
się niedostępne, zanim system lub fragment wiedzy stanie się niemożliwy do
utrzymania. Współczynnik autobusowy równy jeden to poważne ryzyko. Zobacz
temat 3.5.

**Odsetek nieudanych zmian (change failure rate).** Odsetek wdrożeń, które
powodują awarię na produkcji wymagającą naprawy. Jedna z czterech metryk
DORA. Zobacz temat 2.10.

**Karta kontrolna (control chart).** Wykres pokazujący normalny zakres
zmienności metryki w czasie, używany do odróżnienia prawdziwej zmiany od
zwykłego szumu. Zobacz temat 1.6.

**Czas cyklu (cycle time).** Wewnętrzny podział czasu realizacji na etapy:
kodowanie, przegląd, testowanie i wdrożenie. Zobacz temat 2.6.

**CVSS (Common Vulnerability Scoring System).** Ustandaryzowana skala oceny
wagi podatności w zabezpieczeniach. Zobacz temat 6.4.

**Złożoność cyklomatyczna (cyclomatic complexity).** Zliczenie niezależnych
ścieżek w przepływie sterowania fragmentu kodu, wprowadzone przez Thomasa J.
McCabe'a w 1976 roku. Zobacz temat 4.1.

**DevEx (doświadczenie programisty).** Szersze, pokrewne ujęcie wobec SPACE,
zorganizowane wokół pętli sprzężenia zwrotnego, obciążenia poznawczego i
stanu flow. Zobacz temat 3.7.

**Częstotliwość wdrożeń (deployment frequency).** Jak często zespół z
powodzeniem wydaje zmiany na produkcję. Jedna z czterech metryk DORA. Zobacz
temat 2.10.

**Metryki DORA (DORA metrics).** Cztery metryki z programu DevOps Research
and Assessment: częstotliwość wdrożeń, czas realizacji zmiany, odsetek
nieudanych zmian i czas przywrócenia po nieudanym wdrożeniu. Zobacz temat
2.10.

**Budżet błędów (error budget).** Dopuszczalna luka między celem poziomu
usługi a 100% niezawodności, traktowana jako zasób do wydania. Zobacz temat
6.1.

**Uciekający defekt (escaped defect).** Defekt, który trafia na produkcję i
dotyka realnego użytkownika, w odróżnieniu od wychwyconego w przeglądzie lub
testach. Zobacz temat 5.1.

**FinOps.** Dyscyplina wprowadzania odpowiedzialności finansowej do
zmiennych wydatków na infrastrukturę chmurową. Zobacz temat 5.4.

**Rozkład przepływu (flow distribution).** Proporcja ukończonych elementów
przepływu należących do każdego typu elementu przepływu w danym okresie.
Zobacz temat 2.3.

**Efektywność przepływu (flow efficiency).** Stosunek czasu aktywnej pracy do
całkowitego upłyniętego czasu dla pracy przechodzącej przez potok
dostarczania. Zobacz temat 2.5.

**Flow Framework.** Model zarządczy stworzony przez Mika Kerstena, który
traktuje dostarczanie oprogramowania jako strumień wartości i mierzy je
czterema typami elementów przepływu oraz pięcioma metrykami przepływu.
Zobacz temat 2.1.

**Element przepływu (flow item).** Jednostka pracy w Flow Framework: funkcja,
defekt, ryzyko lub element długu, sklasyfikowany przy przyjęciu. Zobacz
temat 2.2.

**Obciążenie przepływu (flow load).** Łączna liczba elementów przepływu
aktualnie aktywnych lub oczekujących w strumieniu wartości, nazwa pracy w
toku w Flow Framework. Zobacz temat 2.4.

**Czas przepływu (flow time).** Łączny upłynięty czas od wejścia elementu
przepływu do strumienia wartości do jego dostarczenia, obejmujący cały
strumień wartości, a nie tylko inżynierię. Zobacz temat 2.4.

**Tempo przepływu (flow velocity).** Liczba elementów przepływu ukończonych w
danym okresie, miara przepustowości w Flow Framework. Zobacz temat 2.3.

**Prawo Goodharta (Goodhart's law).** Zasada, że gdy miara staje się celem,
przestaje być dobrą miarą. Centralna, nadrzędna idea tej książki. Zobacz
temat 1.2.

**Metryka-bariera (guardrail metric).** Sparowana metryka równoważąca, która
nie może się pogorszyć, gdy metryka, do której dąży się zachętami, się
poprawia, zaprojektowana do wychwytywania manipulowania. Zobacz temat 1.2.

**Punkt zapalny (hotspot).** Plik lub moduł, który jest zarazem często
zmieniany (duża rotacja kodu) i bardzo złożony, zidentyfikowany przez analizę
punktów zapalnych. Zobacz temat 4.3.

**Czas realizacji zmiany (lead time for changes).** Czas od pierwszego
commita zmiany w kodzie do jej udanego wdrożenia na produkcję. Jedna z
czterech metryk DORA. Zobacz temat 2.10.

**Prawo Little'a (Little's law).** Dowód, że średnia liczba elementów w
stabilnej kolejce równa się średniemu tempu napływu pomnożonemu przez
średni czas, jaki element spędza w systemie. Zastosowane do dostarczania:
praca w toku równa się tempu napływu razy czas cyklu. Zobacz temat 2.7.

**Drzewo metryk (metric tree).** Struktura łącząca metrykę rezultatu na
najwyższym poziomie, przez jej czynniki, z metrykami operacyjnymi, które
posiadają poszczególne zespoły. Zobacz temat 1.3.

**MTTA (średni czas potwierdzenia, mean time to acknowledge).** Czas od
powiadomienia o incydencie do przejęcia przez kogoś odpowiedzialności za
reakcję. Zobacz temat 6.2.

**MTTD (średni czas wykrycia, mean time to detect).** Czas od faktycznego
początku incydentu do zauważenia go przez kogoś. Zobacz temat 6.2.

**MTTR (średni czas przywracania / średni czas rozwiązania, mean time to
recovery / mean time to resolve).** Czas pełnego przywrócenia usługi po
awarii. Używany zarówno dla awarii spowodowanych wdrożeniem (temat 2.10), jak
i ogólnych incydentów (temat 6.2).

**Testowanie mutacyjne (mutation testing).** Technika, która celowo wprowadza
do kodu drobne, sztuczne błędy, by sprawdzić, czy zestaw testów faktycznie je
wychwytuje, jako uzupełnienie pokrycia. Zobacz temat 4.2.

**Metryka gwiazdy polarnej (north-star metric).** Pojedyncza miara, która
najlepiej oddaje podstawową wartość dostarczaną przez organizację, na szczycie
drzewa metryk. Zobacz temat 1.3.

**Telemetria rezultatów (outcome telemetry).** Ciągły, zinstrumentowany pomiar
realnych rezultatów, a nie aktywności czy produkcji. Zobacz temat 7.4.

**Odsetek kompletnych i dokładnych (percent complete and accurate, %C/A).**
Odsetek jednostek, które zespół następny w kolejności może przetworzyć bez
konieczności poprawek, z klasycznego mapowania strumienia wartości w Lean.
Zobacz temat 2.8.

**Czas przetwarzania (process time, PT).** Faktyczny czas aktywnej pracy nad
pojedynczą jednostką, odrębny od czasu oczekiwania, z klasycznego mapowania
strumienia wartości w Lean. Zobacz temat 2.8.

**Teoria kolejek (queueing theory).** Matematyczne badanie kolejek
oczekujących, zastosowane do potoków dostarczania, by wyjaśnić, jak praca w
toku, tempo napływu i wykorzystanie wpływają na czas oczekiwania. Zobacz
temat 2.7.

**ROI (zwrot z inwestycji, return on investment).** Finansowy zwrot z
inicjatywy względem jej kosztu, budowany tu na udokumentowanych dowodach
kosztów i rezultatów, a nie na założeniach. Zobacz temat 5.5.

**Skumulowana wydajność przepustowa (rolled throughput yield).** Odsetki
kompletnych i dokładnych ze wszystkich etapów strumienia wartości pomnożone
przez siebie, pokazujące, jak poprawki kumulują się w wieloetapowym potoku.
Zobacz temat 2.8.

**SLI (wskaźnik poziomu usługi, service level indicator).** Bezpośrednio
mierzony sygnał kondycji usługi, taki jak opóźnienie lub odsetek błędów.
Zobacz temat 6.1.

**SLO (cel poziomu usługi, service level objective).** Docelowy zakres dla
wskaźnika poziomu usługi. Zobacz temat 6.1.

**Ramy SPACE (SPACE framework).** Pięciowymiarowe ramy produktywności
programistów: Satysfakcja i dobrostan (Satisfaction and well-being), Wydajność
(Performance), Aktywność (Activity), Komunikacja i współpraca (Communication
and collaboration) oraz Efektywność i flow (Efficiency and flow). Zobacz temat
3.1.

**SRE (inżynieria niezawodności, site reliability engineering).** Dyscyplina,
której pionierem był Google, polegająca na stosowaniu podejść inżynierii
oprogramowania do operacji i niezawodności. Zobacz temat 6.1.

**Takt time.** Maksymalny akceptowalny czas ukończenia jednostki pracy, by
czysto odpowiadać popytowi klientów, z klasycznego mapowania strumienia
wartości w Lean. Zobacz temat 2.8.

**Dług techniczny (technical debt).** Skumulowany koszt dawnych skrótów w
bazie kodu, metafora zarządzalnego kompromisu, a nie wstydliwego sekretu.
Zobacz temat 4.5.

**TCO (całkowity koszt posiadania, total cost of ownership).** Pełny koszt
inicjatywy lub systemu w całym okresie jego życia, w tym bieżące utrzymanie
i infrastruktura, a nie tylko koszt początkowy. Zobacz temat 5.5.

**Ekonomia jednostkowa (unit economics).** Koszt wyrażony na znaczącą
jednostkę dostarczonej wartości (na klienta, na transakcję), a nie jako
nieprzejrzysta suma. Zobacz temat 5.4.

**Wykorzystanie (utilization).** Proporcja dostępnej pojemności zasobu, która
jest zajęta, obliczana jako tempo napływu podzielone przez tempo obsługi. Czas
oczekiwania rośnie gwałtownie, a nie stopniowo, gdy wykorzystanie zbliża się
do pełnej pojemności. Zobacz temat 2.7.

**Strumień wartości (value stream).** Kompletna sekwencja działań, która
zamienia pomysł w wartość otrzymywaną przez klienta, jednostka pomiaru w Flow
Framework. Zobacz temat 2.1.

**Metryka próżności (vanity metric).** Metryka, która niezawodnie rośnie,
wygląda imponująco i nie zmienia żadnej decyzji. Zobacz temat 1.1.

**Praca w toku (work in process, WIP).** Liczba elementów, nad którymi
aktywnie pracuje się w danym momencie w zespole lub systemie. Zobacz temat
2.5.
