# 2.5 Efektywność przepływu i praca w toku

## Przegląd i motywacja

**Efektywność przepływu** to stosunek czasu aktywnej pracy do czasu całkowitego
dla porcji pracy: jeśli zmiana spędza dziesięć godzin na aktywnym kodowaniu,
przeglądzie i testowaniu, ale czeka bezczynnie w kolejkach łącznie dziewięćdziesiąt
godzin podczas całej swojej drogi, efektywność przepływu wynosi 10%. Większość
potoków dostarczania oprogramowania, mierzona uczciwie, ląduje gdzieś między 10% a
25% efektywności przepływu, co zaskakuje ludzi spodziewających się, że dominować
będzie wysiłek. Dominującym kosztem w większości systemów dostarczania nie jest to,
jak długo praca trwa, lecz to, jak długo czeka na rozpoczęcie.

**[Praca w toku](https://en.wikipedia.org/wiki/Work_in_process)** (WIP) to liczba
elementów, nad którymi aktywnie się pracuje w danym momencie, w zespole lub
systemie, ta sama wielkość, którą temat 2.4 nazywa "obciążeniem przepływu".
Sprzeczne z intuicją odkrycie stojące za tym tematem, poparte dziesiątkami lat
badań w zarządzaniu operacjami i sformalizowane dla dostarczania oprogramowania
przez kanban i teorię kolejek, głosi, że ograniczanie WIP zwykle *zwiększa*
przepustowość, a nie ją zmniejsza, bo mniej pracy w locie naraz oznacza mniej
przełączania kontekstu, krótsze kolejki i szybsze ukończenie każdego elementu,
choć wydaje się, że robienie mniej pracy jednocześnie powinno dawać mniej
produkcji w sumie.

Dla dużych zespołów zrozumienie efektywności przepływu przeformułowuje niemal
każdy problem dostarczania z "ludzie muszą pracować szybciej" na "praca musi
czekać krócej". To przeformułowanie ma znaczenie, bo pierwsze ujęcie zaprasza do
nacisku na jednostki, dokładnie w pułapkę, przed którą ostrzega temat 2.6, podczas
gdy drugie zaprasza do zbadania struktury kolejek, zdolności przeglądu i tego, ile
pracy jest rozpoczynane jednocześnie, tam, gdzie zwykle leży realna, trwała
poprawa. Duże przedsiębiorstwa żonglujące wieloma równoległymi inicjatywami we
wspólnych zespołach są szczególnie podatne na wysokie WIP i niską efektywność
przepływu, bo rozpoczynanie nowej pracy zawsze wydaje się postępem, nawet gdy po
cichu spowalnia wszystko, co już jest w locie.

## Kluczowe zasady

- **Czas oczekiwania, a nie aktywny wysiłek, dominuje w większości potoków
  dostarczania.** Efektywność przepływu poniżej 25% jest typowa, a nie znakiem
  zepsutego zespołu.
- **Ograniczanie pracy w toku zwykle zwiększa przepustowość,** a nie ją
  zmniejsza, przez redukcję przełączania kontekstu i skracanie kolejek.
- **Rozpoczynanie nowej pracy wydaje się postępem; kończenie pracy to to, co
  faktycznie dostarcza wartość.** To nie to samo i organizacje rutynowo je mylą.
- **Wysokie WIP jest często niewidoczne, dopóki go nie zmierzysz.** Zespół może
  żonglować znacznie większą ilością równoległej pracy, niż ktokolwiek z osobna
  zdaje sobie sprawę.
- **To metryka na poziomie systemu, a nie indywidualna.** Stosowanie limitów WIP
  do karania jednostek źle odczytuje cały sens tej techniki.

## Rekomendacje

### Zmierz efektywność przepływu, zanim założysz, że wąskim gardłem jest wysiłek

Oblicz stosunek czasu aktywnego do całkowitego czasu, który upłynął, dla
reprezentatywnej próby niedawnych zmian, używając danych o etapach czasu cyklu z
tematu 2.6. Większość zespołów mierzących to po raz pierwszy jest zaskoczona, jak
niska jest ta liczba, a to zaskoczenie samo w sobie jest cenne: przekierowuje
uwagę z "pracujcie ciężej" na "zmniejszcie kolejkowanie", co jest niemal zawsze
bardziej produktywną dźwignią.

### Ustal jawny limit pracy w toku i egzekwuj go widocznie

Ogranicz liczbę elementów, nad którymi zespół lub jednostka może aktywnie pracować
naraz, widoczną na wspólnej tablicy (fizyczna lub cyfrowa tablica kanban to
klasyczna implementacja). Gdy limit zostanie osiągnięty, następnym działaniem
zespołu jest pomoc w ukończeniu czegoś, co już jest w locie, a nie rozpoczęcie
czegoś nowego. Ta pojedyncza praktyka, zapożyczona z produkcji szczupłej i
sformalizowana w kanbanie, jest jedną z najbardziej konsekwentnie skutecznych
poprawek przepływu dostępnych dla zespołu programistycznego i kosztuje prawie nic
we wdrożeniu.

### Traktuj limit WIP jak ograniczenie systemu, a nie indywidualny przydział

Limit WIP reguluje, ile pracy *system* (zespół, wspólna kolejka przeglądu, wspólne
środowisko) ma w locie jednocześnie, a nie ile może dotknąć jedna osoba. Stosowanie
limitu jako indywidualnej normy wydajności, "możesz mieć otwarte tylko dwa
zgłoszenia", źle stosuje technikę i grozi dokładnie tym rodzajem manipulowania na
poziomie jednostek, przed którym ta książka ostrzega w całości. Limit istnieje, by
chronić przepływ przez cały system, a jego egzekwowanie powinno być normą
zespołową, a nie osobistym pułapem.

### Badaj, dlaczego praca stoi bezczynnie, a nie tylko jak długo

Gdy analiza efektywności przepływu ujawnia długie czasy oczekiwania, zapytaj
konkretnie dlaczego: czy praca czeka, bo recenzent jest niedostępny, bo wspólne
środowisko testowe jest zarezerwowane, bo zależność od innego zespołu jeszcze nie
wylądowała. Każda z tych przyczyn ma inną naprawę. Ogólna dyrektywa "skróćcie czas
oczekiwania" bez tego konkretnego badania zwykle daje ogólne, nieskuteczne
reakcje.

### Pilnuj, czy WIP nie rośnie z powrotem po początkowej poprawie

Zespoły, które z powodzeniem przyjmują limit WIP, często widzą, jak z czasem eroduje, gdy wraca presja rozpoczynania nowych inicjatyw, "tylko tym razem, musimy
zacząć jeszcze tę pilną rzecz". Traktuj każdy wyjątek od limitu WIP jako celową,
widoczną decyzję z podanym powodem, a nie ciche, rutynowe obejście, aby dyscyplina
limitu nie zanikła po cichu do stanu pierwotnego.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak limitu WIP | Wydaje się elastyczne; brak tarcia przy rozpoczynaniu nowej pracy | Przełączanie kontekstu i kolejkowanie po cichu spowalniają wszystko |
| Limit WIP na poziomie zespołu | Mierzalnie poprawia przepustowość i efektywność przepływu | Wymaga dyscypliny w egzekwowaniu, zwłaszcza pod presją terminów |
| Indywidualna norma WIP | Prosta do sformułowania | Źle stosuje technikę; grozi manipulowaniem na poziomie jednostek |
| Ścisły, niezginany limit WIP | Maksymalna korzyść dla efektywności przepływu | Może wydawać się sztywny w naprawdę pilnych, wyjątkowych sytuacjach |

Centralne napięcie to **elastyczność kontra przepływ**. Rozpoczynanie nowej pracy,
gdy tylko wydaje się pilna, daje poczucie responsywności, ale badania nad
efektywnością przepływu i WIP konsekwentnie pokazują, że ta elastyczność kosztuje
szybkie kończenie czegokolwiek, bo więcej pracy równoległej oznacza dłuższe kolejki
i więcej przełączania kontekstu dla wszystkiego, co już jest w locie. Rozwiąż to
napięcie, przyjmując limit WIP na poziomie zespołu jako domyślny, z celowym,
widocznym i rzadkim procesem wyjątków dla prawdziwych sytuacji kryzysowych, zamiast
sztywnej reguły bez wyjątków albo nieograniczonej, elastycznej samowoli.

## Pytania do omówienia z zespołem

1. **Jaka jest nasza faktyczna efektywność przepływu, zmierzona z prawdziwych
   danych o czasie cyklu i czy ta liczba nas zaskakuje?** Większość zespołów nigdy
   tego nie obliczyła i zakłada, że jest znacznie wyższa, niż się okazuje.
   Weźcie próbkę niedawnych zmian i uczciwie obliczcie stosunek, zanim omówicie
   cokolwiek innego w tym temacie.

2. **Ile pracy w toku mamy faktycznie teraz, w całym zespole, i czy ktokolwiek
   znał tę liczbę przed zliczeniem?** Wysokie WIP jest często niewidoczne, dopóki
   nie zostanie jawnie zmierzone, bo każda osoba widzi tylko własny kawałek.
   Zliczcie wszystko, co jest obecnie w toku, włącznie z pracą, której nikt dziś
   aktywnie nie dotyka.

3. **Gdybyśmy przyjęli limit WIP, co musiałoby się zmienić w sposobie, w jaki
   reagujemy na nową pilną prośbę?** To pytanie wydobywa prawdziwy nawyk
   organizacyjny, odruchowe rozpoczynanie nowej pracy, który limit WIP ma
   przerwać, i warto je omówić przed, a nie po próbie egzekwowania limitu.

4. **Gdy praca stoi bezczynnie w naszym potoku, jaki jest konkretny powód i czy
   za każdym razem ten sam?** Ogólne poczucie, że "rzeczy czekają", jest mniej
   użyteczne niż konkretna, powtarzająca się przyczyna: niedostępny recenzent,
   zarezerwowane wspólne środowisko, zależność między zespołami. Nazwijcie
   faktyczny wzorzec na prawdziwych, niedawnych przykładach.

5. **Czy kiedykolwiek przyjęliśmy limit WIP, a potem patrzyliśmy, jak po cichu
   erodował przez wyjątki?** To niezwykle częste i warto o tym uczciwie
   porozmawiać: jaka presja wywołała pierwszy wyjątek i czy wyjątki stały się
   nową normą bez jawnej decyzji.

6. **Czy limit WIP w naszym kontekście powinien być stosowany na poziomie
   jednostki, zespołu czy wspólnego zasobu (jak kolejka przeglądu lub środowisko
   testowe)?** Różne wąskie gardła wymagają limitów na różnych poziomach, a
   zastosowanie limitu na złym poziomie, indywidualne normy zamiast pułapu
   wspólnej kolejki, może źle zastosować całą technikę.

## Perspektywa sektorowa

**Startup.** Przy niewielu osobach WIP jest często naturalnie niskie po prostu
dlatego, że nie ma dość inżynierów, by rozpocząć dużo pracy jednocześnie. Ryzyko
jest odwrotne: założyciel lub główny inżynier osobiście żonglujący znacznie
większą liczbą równoległych inicjatyw, niż zdaje sobie sprawę, co warto mierzyć
nawet bez formalnych narzędzi kanban.

**Mała firma.** Prosta widoczna tablica, fizyczna lub podstawowe narzędzie
cyfrowe, z jawnym limitem kolumny wystarcza, by uzyskać większość korzyści bez
inwestowania w wyrafinowane narzędzia do metryk przepływu. Zacznij od hojnego
limitu i zaciskaj go stopniowo, gdy zespół oswaja się z dyscypliną.

**Duże przedsiębiorstwo.** Wysokie WIP jest tu szczególnie częste i szczególnie
kosztowne, bo wiele równoległych inicjatyw strategicznych konkuruje o tę samą
wspólną zdolność inżynierską, a rozpoczęcie nowej zawsze wygląda jak postęp dla
tego, kto ją sponsorował. Uczyń WIP widocznym na poziomie portfela, a nie tylko
zespołu, aby kierownictwo mogło zobaczyć koszt rozpoczęcia kolejnej inicjatywy
przed ukończeniem obecnych.

**Administracja publiczna.** Programy wieloletnie często gromadzą ogromne
niejawne WIP w wielu strumieniach prac, z których każdy z osobna jest uzasadniony,
bez ogólnoorganizacyjnej widoczności sumy. Wprowadzenie widoczności WIP na
poziomie portfela, nawet nieformalnie, jest często najbardziej przekonującym
pojedynczym argumentem za szeregowaniem pracy zamiast prowadzenia wszystkiego
równolegle, bo koszt wysokiego WIP dla efektywności przepływu staje się widocznie
złożony po zmierzeniu.

## Przykłady

**Przedsiębiorstwo.** Zespół platformy firmy z sektora usług finansowych
żonglował osiemnastoma równoległymi inicjatywami przy zaledwie dwunastu
inżynierach, stosunek WIP do zdolności, którego nikt faktycznie nie obliczył,
dopóki nowy dyrektor inżynierii nie poprosił o niego wprost. Efektywność przepływu
w pracy zespołu wyniosła poniżej 12%. Zespół przyjął jawny limit WIP jednej
aktywnej inicjatywy na dwóch inżynierów, celowo wstrzymując kilka inicjatyw o
niższym priorytecie zamiast dalej rozpraszać zdolność. Przepustowość, mierzona
jako liczba faktycznie ukończonych inicjatyw na kwartał, ponad dwukrotnie wzrosła
w ciągu dwóch kwartałów, choć zespół widocznie "robił mniej" w danym momencie.

**Administracja publiczna.** Program transformacji cyfrowej krajowej agencji
infrastruktury zgromadził ponad czterdzieści równoległych strumieni prac w swoim
portfelu, każdy z własnym sponsorem i uzasadnieniem, bez jednego widoku całkowitej
pracy w toku. Przegląd efektywności przepływu na poziomie programu wykazał, że
mediana strumienia prac spędzała mniej niż 15% upływającego czasu na aktywnym
rozwoju, resztę na czekaniu na wspólne zasoby: mały centralny zespół przeglądu
architektury, wspólne środowisko testowe i zatwierdzenie międzyagencyjne.
Program wprowadził jawne limity WIP na poziomie portfela, szeregując strumienie
prac zamiast prowadzić wszystkie czterdzieści równolegle, a własne śledzenie
agencji pokazało mierzalnie szybsze ukończenie dla strumieni, które pozostały
aktywne, choć łączna liczba działających jednocześnie gwałtownie spadła.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z celowego zarządzania efektywnością przepływu i WIP jest sprzeczny z
intuicją, ale dobrze udokumentowany: przepustowość zwykle rośnie, a nie spada,
gdy organizacja robi mniej naraz, bo mniej przełączania kontekstu i krótsze
kolejki oznaczają, że każda porcja pracy kończy się szybciej. Powyższy przykład z
usługami finansowymi, podwojona przepustowość dzięki celowemu zmniejszeniu pracy
równoległej, to częsty wzorzec, gdy organizacje faktycznie mierzą efektywność
przepływu i działają na tej podstawie, zamiast zakładać, że więcej pracy
równoległej zawsze oznacza więcej postępu.

Całkowity koszt posiadania (TCO) przyjęcia tej dyscypliny jest głównie
organizacyjny, a nie techniczny: widoczna tablica, uzgodniony limit WIP i
dyscyplina odmawiania rozpoczęcia nowej pracy, gdy limit zostanie osiągnięty. Tę
dyscyplinę trudniej utrzymać niż przyjąć, dlatego rekomendacja "pilnuj, czy WIP nie
rośnie z powrotem" powyżej ma takie samo znaczenie jak samo początkowe wdrożenie.

## Antywzorce i pułapki

- **Zakładanie, że aktywny wysiłek dominuje w czasie dostarczania, bez mierzenia
  efektywności przepływu:** zwykle błędne i kieruje wysiłek poprawy na złą dźwignię.
- **Stosowanie limitu WIP jako indywidualnej normy zamiast ograniczenia systemu:**
  źle stosuje technikę i grozi manipulowaniem na poziomie jednostek.
- **Odruchowe rozpoczynanie nowej pracy, bo wydaje się postępem:** podstawowy
  nawyk, który efektywność przepływu i limity WIP mają przerwać.
- **Pozwalanie, by wyjątki od limitu WIP stały się rutynowe i niewidoczne:** eroduje
  dyscyplinę z powrotem do stanu pierwotnego bez niczyjej celowej decyzji.
- **Mierzenie WIP tylko na poziomie zespołu, z pominięciem przeciążenia na
  poziomie portfela:** częste w dużych organizacjach prowadzących wiele
  równoległych inicjatyw strategicznych.
- **Traktowanie niskiej liczby efektywności przepływu jak znaku złego zespołu:**
  jest typowa dla większości potoków dostarczania i jest punktem wyjścia do
  badania, a nie wyrokiem.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Praca w toku nie jest śledzona; zespoły rozpoczynają
  nową pracę odruchowo, bez widoczności całkowitego obciążenia równoległego.
- **Poziom 2, Rozwój:** Niektóre zespoły używają nieformalnej tablicy, ale limity
  WIP nie są egzekwowane konsekwentnie, a efektywność przepływu nigdy nie jest
  obliczana.
- **Poziom 3, Standaryzacja:** Zespoły mają jawne, widoczne limity WIP na poziomie
  systemu, a efektywność przepływu jest mierzona okresowo z prawdziwych danych o
  czasie cyklu.
- **Poziom 4, Zarządzanie:** Wyjątki od limitu WIP są śledzone jako celowe,
  widoczne decyzje; efektywność przepływu jest monitorowana pod kątem erozji w
  czasie i badana, gdy spada.
- **Poziom 5, Orkiestracja:** WIP jest widoczne i zarządzane na poziomie
  portfela, a nie tylko zespołu, a organizacja potrafi wskazać konkretne poprawy
  przepustowości, które wynikły z celowego zmniejszenia pracy równoległej.

## Pomysły do dyskusji

1. Jaka jest nasza faktyczna efektywność przepływu, obliczona uczciwie z prawdziwych danych?
2. Ile pracy w toku mamy obecnie, której nikt nie zliczył przed tą dyskusją?
3. Czemu musielibyśmy powiedzieć nie, żeby egzekwować prawdziwy limit WIP?
4. Jaki jest najczęstszy pojedynczy powód, dla którego praca stoi bezczynnie w naszym potoku?
5. Gdzie w naszej organizacji WIP na poziomie portfela jest niewidoczne i prawdopodobnie zbyt wysokie?

## Kluczowe wnioski

- **Efektywność przepływu**, stosunek czasu aktywnego do całkowitego, jest zwykle
  poniżej 25% w prawdziwych potokach dostarczania; dominuje czas oczekiwania, a
  nie wysiłek.
- **Ograniczanie pracy w toku zwykle zwiększa przepustowość**, a nie ją zmniejsza,
  przez redukcję przełączania kontekstu i skracanie kolejek.
- Stosuj **limit WIP jako ograniczenie systemu**, nigdy jako indywidualną normę.
- Badaj **konkretny powód**, dla którego praca stoi bezczynnie, zamiast wydawać
  ogólną dyrektywę "skróćcie czas oczekiwania".
- Pilnuj **erozji limitów WIP przez rutynowe wyjątki**; traktuj każdy wyjątek jak
  celową, widoczną decyzję.
- Temat 2.4 nazywa tę wielkość **obciążeniem przepływu**, a temat 2.7 formalizuje
  związek jako prawo Little'a: praca w toku równa się tempu napływu razy czas
  cyklu, dla każdej stabilnej kolejki.

## Bibliografia i dalsza lektura

- *The Principles of Product Development Flow*, Donald G. Reinertsen (teoria
  kolejek, wielkość partii i limity WIP w rozwoju produktu).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, David J.
  Anderson (fundamentalny tekst o limitach WIP i przepływie dla zespołów
  programistycznych).
- *Actionable Agile Metrics for Predictability*, Daniel S. Vacanti (pomiar
  efektywności przepływu i prognozowanie oparte na przepływie).
- *The Goal*, Eliyahu M. Goldratt (teoria ograniczeń i sprzeczny z intuicją
  związek między lokalnym zajęciem a przepustowością systemu).
