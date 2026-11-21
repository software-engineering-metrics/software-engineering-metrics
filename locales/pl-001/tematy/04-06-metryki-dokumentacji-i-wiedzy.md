# 4.6 Metryki dokumentacji i wiedzy

## Przegląd i motywacja

Ten temat zamyka część 4, mierząc, czy wiedza potrzebna do bezpiecznego
utrzymania bazy kodu jest faktycznie udokumentowana i możliwa do znalezienia,
a nie tylko czy dokumentacja technicznie gdzieś istnieje. Temat 3.5 omawiał
komunikację i współpracę jako troskę doświadczenia programisty. Ten temat
omawia tę samą podstawową sprawę, dostępność wiedzy, od strony kodu: czy
nowy inżynier, albo obecny pracujący nad nieznanym kodem, ma to, czego
potrzebuje, by bezpiecznie wprowadzić zmianę, czy ta wiedza żyje wyłącznie w
głowach kurczącej się liczby ludzi o długim stażu.

Wyzwanie pomiarowe jest tu naprawdę trudne, trudniejsze niż w większości
pozostałych metryk tej książki, bo jakość i użyteczność dokumentacji są z
natury bardziej subiektywne niż procent pokrycia czy wynik złożoności.
Podejście tego tematu polega na mierzeniu wskaźników zastępczych użyteczności,
a nie istnienia: jak często dokumentację faktycznie otwierano, jak często to
samo pytanie powtarza się mimo istnienia udokumentowanej odpowiedzi i ile
czasu zajmuje komuś nieznającemu systemu, by stać się w nim produktywnym.
Żaden z tych wskaźników sam nie jest doskonały, ale razem dają znacznie
uczciwszy obraz niż liczenie stron wiki czy plików README w bazie kodu.

W dużych zespołach troski tego tematu kumulują się ze stażem i rotacją w
organizacji w sposób łatwy do niedoszacowania, dopóki kryzys nie wymusi
sprawy: system utrzymywany latami przez tych samych dwóch inżynierów może
działać doskonale niemal bez dokumentacji pisemnej, aż do chwili, gdy obaj
odejdą w tym samym roku, a wtedy organizacja odkrywa, że wiedza nigdy nie
została utrwalona w żadnym trwałym miejscu. Duże przedsiębiorstwa i
administracja publiczna, z zazwyczaj dłuższym życiem systemów i mniej pewną
ciągłością kadr niż w startupie, niosą to ryzyko dotkliwiej niż większość.

## Kluczowe zasady

- **Istnienie dokumentacji to nie to samo co jej użyteczność.** Mierz, czy
  faktycznie pomaga, a nie tylko czy jest obecna.
- **Powtarzające się pytania mimo udokumentowanych odpowiedzi ujawniają
  problem z możliwością znalezienia, a nie z wysiłkiem dokumentowania.**
  Więcej treści nie zawsze jest lekarstwem.
- **Czas wdrożenia do produktywnego wkładu to mocny, praktyczny wskaźnik
  zastępczy** ogólnego zdrowia wiedzy, wiążący się wprost z metrykami
  współpracy z tematu 3.5.
- **Wiedza, która żyje tylko w głowach ludzi, to ryzyko trwałości**, a nie
  stabilny, zrównoważony stan, jak dobrze by obecnie nie działał.
- **Dokumentacja się starzeje.** Strona, która rok temu była dokładna, może
  dziś aktywnie wprowadzać w błąd, a samą nieaktualność trzeba śledzić.

## Rekomendacje

### Śledź dostęp do dokumentacji i jej nieaktualność, a nie tylko istnienie

Tam, gdzie twoja platforma dokumentacji to wspiera, śledź, jak często strony
faktycznie się wyświetla, i osobno, ile czasu minęło od ostatniej
aktualizacji strony w stosunku do tego, jak często zmieniał się opisywany
przez nią system (zestawienie z danymi o rotacji z tematu 4.3 jest tu wprost
użyteczne). Strona opisująca system, który znacząco się zmienił od ostatniej
edycji strony, jest mocnym kandydatem na aktywnie wprowadzającą w błąd, a nie
tylko nieprzydatną, i ten sygnał nieaktualności zasługuje na co najmniej tyle
uwagi, co śledzenie, czy dokumentacja w ogóle istnieje.

### Wypatruj powtarzających się pytań jako sygnału możliwości znalezienia

Jeśli to samo pytanie zadaje się wielokrotnie na kanale czatu zespołu albo
podczas wdrażania, mimo że udokumentowana odpowiedź technicznie gdzieś
istnieje, ten wzorzec ujawnia problem z możliwością znalezienia, odpowiedzi
nie ma tam, gdzie ludzie naturalnie jej szukają, a nie problem z wysiłkiem
dokumentowania, który dodatkowe pisanie by naprawiło. Śledź powtarzające się
pytania jawnie i używaj ich do ustalania priorytetów reorganizacji lub
lepszego udostępnienia istniejącej treści, zamiast pisania kolejnej.

### Mierz czas wdrożenia do pierwszego znaczącego, samodzielnego wkładu

Ta metryka, wprowadzona w temacie 3.5 jako sygnał współpracy, jest w równym
stopniu sygnałem dokumentacji i zdrowia wiedzy od strony kodu. Konsekwentnie
krótki, przewidywalny czas wdrożenia sugeruje naprawdę dostępną, dokładną
wiedzę. Długi, bardzo zmienny czas, zwłaszcza silnie zależny od tego, która
konkretna osoba akurat wdraża nowego członka zespołu, sugeruje wiedzę
niebezpiecznie skoncentrowaną w pamięci jednostek, a nie w trwałej, pisemnej
formie.

### Jawnie identyfikuj i priorytetyzuj nieudokumentowane obszary wiedzy krytycznej

Zestaw dane o koncentracji wiedzy (analiza [bus factora](https://en.wikipedia.org/wiki/Bus_factor)
z tematu 3.5) z pokryciem dokumentacją: system z bus factorem równym jeden
i bez sensownej dokumentacji to poważne, kumulujące się ryzyko zasługujące na
priorytetową uwagę przed dobrze udokumentowanym systemem z tym samym niskim
bus factorem, bo dokumentacja przynajmniej daje częściową ochronę, dopóki
szkolony jest dedykowany następca.

### Traktuj dług dokumentacyjny jako kategorię w backlogu długu technicznego

Zamiast śledzić luki w dokumentacji osobno i nieformalnie, włącz istotne luki
w dokumentacji do tego samego widocznego, skwantyfikowanego backlogu opisanego
w temacie 4.5, szczególnie dla krytycznych systemów o niskim bus factorze, aby
praca nad dokumentacją konkurowała uczciwie o priorytetową zdolność, zamiast
być wiecznie odkładana jako zadanie o niższym statusie w porównaniu z
naprawą długu skupioną na kodzie.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak pomiaru dokumentacji | Niski narzut | Ryzyko wiedzy pozostaje niewidoczne, aż kryzys wymusi odkrycie |
| Liczenie istnienia dokumentacji (liczba stron, obecność README) | Proste, łatwe do raportowania | Nic nie mówi o użyteczności, dokładności ani możliwości znalezienia |
| Śledzenie dostępu i nieaktualności | Ujawnia faktyczną użyteczność i starzenie | Wymaga analityki platformy dokumentacji i dyscypliny stałego przeglądu |
| Czas wdrożenia jako wskaźnik zastępczy | Praktyczny, konkretny, wiąże się wprost z realnym wpływem biznesowym | Pośredni. Na szybkość wdrożenia wpływają też inne czynniki niż dokumentacja |

Główne napięcie to **mierzalność kontra sens**. Istnienie dokumentacji jest
banalnie łatwe do policzenia i mówi prawie nic użytecznego. Prawdziwa
użyteczność, czy ktoś faktycznie potrafi znaleźć udokumentowaną wiedzę i na
niej polegać, gdy jej potrzebuje, jest tym, co naprawdę się liczy, ale jest
trudniejsza do bezpośredniego zmierzenia. Rozwiąż to napięcie, używając
wskaźników zastępczych zalecanych w tym temacie, wzorców dostępu,
nieaktualności względem rotacji, powtarzających się pytań i czasu wdrożenia,
łącznie, akceptując, że żaden z nich sam nie jest doskonały, ale ich
zbieżność jest znacznie bardziej znacząca niż sama liczba istniejących
dokumentów.

## Pytania do omówienia z zespołem

1. **Czy dla naszego najbardziej krytycznego systemu o najniższym bus factorze
   istnieje sensowna, dokładna dokumentacja, czy odchodzący ekspert zabrałby
   ze sobą większość prawdziwej wiedzy?** To najostrzejsza, najbardziej
   konkretna wersja głównej troski tego tematu. Odpowiedz na nią uczciwie
   najpierw dla swojego najbardziej ryzykownego systemu.

2. **Jakie pytanie powtarza się w czacie zespołu mimo istnienia
   udokumentowanej odpowiedzi gdzieś w systemach?** Jeśli potrafisz od razu
   jedno nazwać, to problem z możliwością znalezienia wart bezpośredniej
   naprawy, prawdopodobnie przez reorganizację lub lepsze udostępnienie
   istniejącej treści, a nie pisanie kolejnej.

3. **Ile czasu zajął naszej ostatniej nowej osobie pierwszy znaczący,
   samodzielny wkład i jak to wypadło w porównaniu z osobą przed nią?** Duża,
   niewyjaśniona różnica między osobami często wskazuje na wiedzę silnie
   zależną od tego, kto akurat kogoś wdraża, a nie na trwałą, dostępną
   dokumentację.

4. **Kiedy ostatnio sprawdziliśmy, czy dany fragment dokumentacji jest nadal
   dokładny, w stosunku do tego, jak bardzo zmienił się opisywany system od
   jego napisania?** Jeśli uczciwa odpowiedź brzmi "nie sprawdzamy tego
   systematycznie", to ryzyko nieaktualności jest prawdopodobnie większe, niż
   ktokolwiek obecnie zakłada.

5. **Czy nasz backlog długu technicznego (temat 4.5) obejmuje luki w
   dokumentacji, czy praca nad dokumentacją jest wiecznie odkładana jako
   zadanie o niższym statusie niż poprawki w kodzie?** Sprawdź swój faktyczny
   backlog i zobacz, czy dług dokumentacyjny jest widoczny i konkuruje o
   priorytetową zdolność, czy jest praktycznie niewidoczny.

6. **Ile by nas kosztowało, gdyby jedna lub dwie osoby rozumiejące nasz
   najbardziej krytyczny, najsłabiej udokumentowany system odeszły w tym
   samym roku?** Na to konkretne, niewygodne pytanie warto odpowiedzieć
   uczciwie, zamiast traktować ryzyko jako abstrakcyjne lub mało
   prawdopodobne.

## Perspektywa sektorowa

**Startup.** Formalne metryki dokumentacji są zwykle zbędne w małym zespole,
w którym wiedza rozchodzi się przez stałe, bezpośrednie rozmowy. Ryzyko, na
które trzeba uważać, to ta sama koncentracja bus factora, przed którą ostrzega
temat 3.5, zastosowana teraz do dokumentacji: gdy zespół wyrasta z rozmiaru,
przy którym wszyscy rozmawiają codziennie, nieudokumentowana wiedza, która
nieformalnie działała dobrze, staje się realnym zobowiązaniem.

**Mała firma.** Najpierw udokumentuj swój pojedynczy najbardziej krytyczny,
najmniej zdublowany system, choćby nieformalnie, zamiast próbować
kompleksowej dokumentacji wszystkiego. Krótki, dokładny dokument obejmujący
twój najbardziej ryzykowny pojedynczy punkt awarii daje więcej realnej
wartości niż szerokie, ale płytkie pokrycie wszędzie.

**Duże przedsiębiorstwo.** Nieaktualność i możliwość znalezienia dokumentacji
skalują się tu źle, bo duża organizacja kumuluje dokumentację w wielu
zespołach i na wielu platformach szybciej, niż ktokolwiek może ją aktualizować
lub spójnie porządkować. Zainwestuj w analitykę platformy dokumentacji, by
śledzić dostęp i nieaktualność w skali, i traktuj dług dokumentacyjny jako
pełnoprawną kategorię w ogólnoorganizacyjnym backlogu długu.

**Administracja publiczna.** Długi staż pracowników, częsty w sektorze
publicznym, może maskować poważne ryzyko nieudokumentowanej wiedzy za pozorną
stabilnością, bo system utrzymywany przez tę samą osobę przez piętnaście lat
może działać doskonale aż do jej przejścia na emeryturę. Traktuj zdrowie
dokumentacji jawnie jako sprawę ciągłości działania, powiązaną wprost z
planowaniem kadr i sukcesji, a nie tylko inżynierską ciekawostkę.

## Przykłady

**Przedsiębiorstwo.** Firma z sektora usług finansowych odkryła, podczas
niezwiązanej reorganizacji, że jej rdzeniowy silnik obliczania ryzyka nie ma
sensownej dokumentacji poza kilkoma nieaktualnymi komentarzami w kodzie, a
dwóch inżynierów, którzy rozumieli go najlepiej, miało zostać jednocześnie
przeniesionych do nowej inicjatywy. Awaryjny wysiłek dokumentacyjny,
prowadzony pod dużą presją czasu, wydobył i zapisał krytyczną wiedzę, zanim
przeniesienie weszło w życie, ale proces zajął kilka tygodni dedykowanego
czasu starszych inżynierów, który można by rozłożyć bardziej stopniowo i
taniej, gdyby zdrowie dokumentacji było śledzone i priorytetyzowane
proaktywnie, a nie odkryte jako sytuacja awaryjna.

**Administracja publiczna.** Wieloletni system zarządzania sprawami rządu
stanowego nagromadził z biegiem lat sporą dokumentację, ale audyt możliwości
znalezienia wykazał, że nowi członkowie zespołu konsekwentnie nie mogli
znaleźć istniejącej, istotnej dokumentacji i wielokrotnie zadawali na
kanałach zespołu te same kilka pytań, na które odpowiedzi faktycznie już
istniały gdzieś w rozległej, kiepsko zorganizowanej platformie dokumentacji
agencji. Zamiast pisać więcej treści, agencja zainwestowała w reorganizację i
poprawę wyszukiwania i struktury nawigacji istniejącej dokumentacji, a
ankieta kontrolna pokazała mierzalne zmniejszenie liczby powtarzanych pytań i
wyraźnie szybsze, zgłaszane doświadczenie wdrożenia nowych pracowników, bez
dodania ani jednej nowej strony treści.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot ze świadomego mierzenia i zarządzania zdrowiem dokumentacji to uniknięty
koszt kryzysu: przykład z usług finansowych powyżej pokazuje różnicę między
proaktywnym, stopniowym utrwalaniem wiedzy a drogim, skompresowanym
wysiłkiem awaryjnym wymuszonym nieplanowanym przesunięciem pracowników.
Nieudokumentowana wiedza krytyczna to stałe zobowiązanie, które nie kosztuje
nic widocznego, aż do chwili, gdy nagle staje się bardzo drogie naraz.

Całkowity koszt posiadania to głównie dyscyplina śledzenia wskaźników
zastępczych zalecanych w tym temacie, wzorców dostępu, nieaktualności,
powtarzających się pytań, czasu wdrożenia, i gotowość włączania luk w
dokumentacji do priorytetyzowanego backlogu zamiast traktowania ich jako
wiecznie mniej ważnych od pracy skupionej na kodzie. Ta dyscyplina kosztuje
znacznie mniej niż awaryjne wydobywanie wiedzy, które przykład z usług
finansowych pokazuje jako alternatywę.

## Antywzorce i pułapki

- **Liczenie istnienia dokumentacji zamiast użyteczności:** mówi prawie nic o
  tym, czy wiedza jest faktycznie dostępna, gdy jest potrzebna.
- **Pisanie większej ilości treści w odpowiedzi na powtarzające się pytania
  bez wcześniejszego sprawdzenia możliwości znalezienia:** często dotyczy
  całkiem złego problemu.
- **Nigdy nie sprawdzanie nieaktualności dokumentacji względem tego, jak
  bardzo zmienił się system:** ryzykuje aktywnie wprowadzającą w błąd,
  przestarzałą treść.
- **Traktowanie długu dokumentacyjnego jako wiecznie mniej ważnego niż dług
  w kodzie:** zostawia go chronicznie odsuniętym i niewidocznym w backlogu.
- **Mylenie pozornej stabilności, systemu, który nie zmieniał się latami, z
  niskim ryzykiem:** może maskować poważny, nieudokumentowany problem bus
  factora za systemem, który po prostu jeszcze nie potrzebował swojego
  jedynego eksperta.
- **Odkrywanie krytycznej, nieudokumentowanej wiedzy dopiero podczas awaryjnej
  zmiany kadr:** kosztowny, możliwy do uniknięcia tryb porażki, któremu ten
  temat ma zapobiegać.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Zdrowia dokumentacji się nie mierzy. Koncentrację
  wiedzy i ryzyko nieaktualności odkrywa się dopiero w kryzysie.
- **Poziom 2, Rozwój:** Jakaś dokumentacja istnieje, ale brakuje
  systematycznego śledzenia dostępu, nieaktualności i możliwości znalezienia.
- **Poziom 3, Standaryzacja:** Dostęp i nieaktualność są śledzone dla
  krytycznych systemów, a czas wdrożenia jest mierzony jako wskaźnik
  zastępczy zdrowia wiedzy w całej organizacji.
- **Poziom 4, Zarządzanie:** Luki w dokumentacji są włączone do
  priorytetyzowanego backlogu długu technicznego, zestawione z ryzykiem bus
  factora, by zidentyfikować najpoważniejsze ryzyka łączne.
- **Poziom 5, Orkiestracja:** Organizacja proaktywnie identyfikuje i
  adresuje ryzyko nieudokumentowanej wiedzy krytycznej, zanim wymusi je zmiana
  kadr, i potrafi wskazać konkretne, mierzalne poprawy wdrożeń lub reagowania
  na incydenty wynikające z inwestycji w dokumentację.

## Pomysły do dyskusji

1. Jaka jest nasza obecna najpoważniejsza kombinacja niskiego bus factora i słabej dokumentacji?
2. Jakie pytanie powtarza się mimo istnienia udokumentowanej odpowiedzi?
3. Skąd wiedzielibyśmy, że fragment krytycznej dokumentacji stał się nieaktualny i wprowadza w błąd?
4. Czy nasz backlog długu technicznego obejmuje luki w dokumentacji, czy są niewidoczne?
5. Ile by nas kosztowało, gdyby jedyny ekspert naszego najsłabiej udokumentowanego systemu odszedł w tym roku?

## Kluczowe wnioski

- Mierz **użyteczność, a nie istnienie**: czy dokumentacja faktycznie pomaga,
  używając wskaźników zastępczych takich jak wzorce dostępu, nieaktualność i
  powtarzające się pytania.
- **Powtarzające się pytania mimo udokumentowanych odpowiedzi** ujawniają
  problem z możliwością znalezienia, niekoniecznie z wysiłkiem tworzenia
  treści.
- **Czas wdrożenia do produktywnego wkładu** to mocny, praktyczny wskaźnik
  zastępczy ogólnego zdrowia wiedzy.
- **Nieudokumentowana wiedza krytyczna to kumulujące się ryzyko**, zwłaszcza w
  połączeniu z niskim bus factorem (temat 3.5). Nie kosztuje nic widocznego,
  aż nagle kosztuje bardzo dużo naraz.
- Włącz **luki w dokumentacji do backlogu długu technicznego** (temat 4.5),
  aby konkurowały uczciwie o priorytetową zdolność.

## Bibliografia i dalsza lektura

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*,
  Jared Bhatti, Zachariah Goldberg, Ted Kubaska i Sarah Moir (praktyczne
  praktyki dokumentacyjne dla zespołów inżynierskich).
- *A Philosophy of Software Design*, John Ousterhout (związek między
  dokumentacją, złożonością i łatwością utrzymania).
- *Team Topologies*, Matthew Skelton i Manuel Pais (implikacje projektu
  organizacyjnego skoncentrowanej kontra rozproszonej wiedzy).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (dokumentacja jako jedna ze zdolności korelujących z
  wydajnością dostarczania).
