# 5.1 Wskaźnik uciekających defektów i ucieczki jakości

## Przegląd i motywacja

**Wskaźnik uciekających defektów** mierzy defekty, które docierają na produkcję
i dotykają prawdziwych użytkowników, w odróżnieniu od defektów wyłapanych
wcześniej dzięki testom, przeglądowi kodu czy analizie statycznej, opisanym w
części 4 tej książki. To rozróżnienie ma ogromne znaczenie: defekt wyłapany w
przeglądzie kodu kosztuje minuty naprawy i żaden użytkownik go nie zobaczy;
ten sam defekt, jeśli ucieknie na produkcję, może kosztować godziny reagowania
na incydent, realną szkodę dla klientów i wymierne naruszenie zaufania. Ta
metryka jest w istotnym sensie ostateczną kartą wyników dla wszystkiego, co
opisuje część 4, bo rosnący wskaźnik uciekających defektów mimo dobrych
wewnętrznych metryk jakości (złożoność, pokrycie, analiza statyczna) zwykle
oznacza, że te wewnętrzne sygnały nie wyłapują rodzajów awarii, które mają
znaczenie dla prawdziwych użytkowników.

Ten temat traktuje uciekające defekty z powagą, na jaką zasługuje ich koszt,
a jednocześnie opiera się pokusie traktowania surowej liczby jak prostej tablicy
wyników. Nie wszystkie defekty są sobie równe: literówka w rzadko oglądanym
tekście pomocy i błąd uszkadzający dane w systemie transakcji finansowych to
technicznie oba uciekające defekty, a traktowanie ich identycznie daje metrykę,
która jest albo zbyt zaszumiona, by na jej podstawie działać, albo, co gorsza,
aktywnie wprowadza w błąd co do tego, gdzie naprawdę leży ryzyko. Główna
rekomendacja tego tematu, śledzenie ważone dotkliwością z uważną dbałością o
to, jak klasyfikuje się defekty, jest wymierzona właśnie w ten problem.

W dużych zespołach wskaźnik uciekających defektów jest jednym z
najwyraźniejszych mostów między wewnętrznymi metrykami inżynierskimi tej książki
a światem zorientowanym na klienta, którym zajmuje się cała część 5. Duże
przedsiębiorstwa używają go do uzasadnienia inwestycji w praktyki testowania i
przeglądu z części 4; organizacje publiczne, w których uciekający defekt może
oznaczać błędne wyliczenie świadczenia albo nieudaną interakcję z usługą
publiczną, traktują go jako bezpośrednią miarę zaufania publicznego i
narażenia prawnego, a nie tylko wewnętrzną statystykę inżynierską.

## Kluczowe zasady

- **Wskaźnik uciekających defektów jest ostateczną kartą wyników wewnętrznych
  praktyk jakości.** Rosnący wskaźnik mimo dobrych metryk z części 4 oznacza, że
  te metryki nie wyłapują tego, co ważne.
- **Dotkliwość liczy się bardziej niż surowa liczba.** Ważąc defekty, kieruj się
  rzeczywistym wpływem na klienta lub biznes, a nie traktuj każdej ucieczki tak
  samo.
- **Spójność klasyfikacji jest niezbędna.** Dwa zespoły klasyfikujące
  dotkliwość inaczej dają liczby, których nie da się uczciwie porównać.
- **Ta metryka jest narażona na manipulowanie definicją**, dokładnie jak odsetek
  nieudanych zmian (temat 2.10): zawężenie tego, co liczy się jako „defekt",
  poprawia liczbę, nie zmniejszając realnej szkody klientów.
- **Kategoryzacja przyczyn źródłowych zamienia liczbę w narzędzie
  diagnostyczne.** Wiedza o tym, *dlaczego* defekty uciekają, jest bardziej
  użyteczna niż wiedza tylko o tym, ile ich było.

## Rekomendacje

### Waż uciekające defekty dotkliwością, używając spójnej, udokumentowanej
skali

Klasyfikuj każdy uciekający defekt według stałej skali dotkliwości (zwykle
krytyczny, poważny, drobny albo ich numerowany odpowiednik) opartej na
rzeczywistym wpływie na klienta lub biznes: utrata lub uszkodzenie danych,
narażenie bezpieczeństwa i całkowita niedostępność funkcji znajdują się
na szczycie; kosmetyczna usterka bez wpływu na działanie na dole. Śledź trend
ważony dotkliwością, a nie samą surową liczbę, aby skok drobnych usterek nie
przysłonił wizualnie mniejszego, ale znacznie poważniejszego wzrostu usterek
krytycznych.

### Ujednolić kryteria klasyfikacji w zespołach

Różne zespoły klasyfikujące dotkliwość niezależnie będą dryfować ku różnym
standardom, jedne ostrożnym, inne pobłażliwym, co czyni porównania między
zespołami bezsensownymi i, co gorsza, tworzy zachętę do hojnego obniżania
klasyfikacji, by własne liczby zespołu wyglądały lepiej (wariant manipulowania
definicją z tematu 1.2). Opublikuj jasne kryteria klasyfikacji oparte na
przykładach i okresowo sprawdzaj próbkę klasyfikacji w różnych zespołach pod
kątem spójności.

### Śledź [przyczynę źródłową](https://en.wikipedia.org/wiki/Root_cause_analysis), a nie tylko liczbę i dotkliwość

Dla każdego uciekającego defektu zapisz, dlaczego uciekł: luka w testach,
pominięty przypadek brzegowy w wymaganiach, różnica środowisk między stagingiem
a produkcją, przegląd, który przeoczył problem. Agreguj te dane o przyczynach
źródłowych w czasie, by znaleźć wzorce systemowe: jeśli jedna kategoria (na
przykład defekty z różnic środowisk) dominuje wśród ucieczek, wskazuje to
wprost na konkretną, możliwą do naprawy lukę w procesie, a nie na mgliste
ogólne wezwanie, by „testować więcej".

### Połącz uciekające defekty z wewnętrznymi sygnałami jakości, z których
pochodzą

Tam, gdzie to możliwe, prześledź uciekający defekt do obszaru kodu, z którego
pochodzi, i sprawdź, czy ten obszar pokazywał sygnały ostrzegawcze w metrykach
z części 4: czy był punktem zapalnym złożoności (temat 4.1, temat 4.3), czy miał
niski wskaźnik zabijania mutantów (temat 4.2), czy analiza statyczna oznaczyła
coś w pobliżu (temat 4.4). To połączenie weryfikuje, czy twoje wewnętrzne
metryki jakości faktycznie przewidują prawdziwe defekty widoczne dla klientów,
czy też mierzą coś, co w twoim konkretnym kontekście nie koreluje z tym, czego
klienci faktycznie doświadczają.

### Pilnuj, by klasyfikacja defektów nie stała się ćwiczeniem w szukaniu winnych

Ujmuj analizę przyczyn źródłowych defektów wprost jako pytanie o system, zgodnie
z diagnostycznym ujęciem z tematu 1.1, a nie jako ćwiczenie w obwinianiu osób.
Zespół, który boi się obwiniania za uciekający defekt, ma silną zachętę, by
zgłaszać mniej, klasyfikować defekty niżej albo opierać się dokładnej analizie
przyczyn źródłowych, a to wszystko psuje dane, od których ten temat zależy.
Praktyka analizy poawaryjnej bez szukania winnych, omówiona szerzej w temacie
6.2, ma tu bezpośrednie zastosowanie.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Surowa liczba uciekających defektów | Łatwa do raportowania | Traktuje literówkę i błąd uszkadzający dane jednakowo; zaszumiona i myląca |
| Śledzenie ważone dotkliwością | Dokładniej odzwierciedla rzeczywisty wpływ na klienta | Wymaga spójnej, zdyscyplinowanej klasyfikacji |
| Niezależne standardy klasyfikacji w zespołach | Elastyczne, niski koszt koordynacji | Daje liczby nieporównywalne między zespołami; zachęca do pobłażliwego dryfu |
| Ujednolicona, audytowana klasyfikacja | Uczciwa, porównywalna, odporna na manipulacje | Wymaga stałego nadzoru i okresowego wysiłku audytowego |

Główne napięcie to **lokalna elastyczność kontra porównywalność między
zespołami**. Pozwolenie każdemu zespołowi na klasyfikowanie dotkliwości defektów
po swojemu jest prostsze we wdrożeniu, ale daje liczby, których nie da się
uczciwie porównać ani zagregować na poziomie organizacji, i tworzy ciche
zachęty, by zespół klasyfikował hojnie dla ochrony własnych metryk. Rozwiąż to
napięcie, inwestując w ujednolicone, udokumentowane kryteria klasyfikacji i
okresowe audyty między zespołami, traktując to jako pracę nadzorczą (temat 1.4)
wartą inwestycji, skoro ta metryka tak bezpośrednio łączy się z realnym wpływem
na klientów.

## Pytania do omówienia z zespołem

1. **Czy śledzimy uciekające defekty według dotkliwości, czy surowa liczba
   traktuje drobną usterkę kosmetyczną tak samo jak krytyczny problem z
   danymi?** Wyciągnij swój faktyczny panel i sprawdź; jeśli ważenie
   dotkliwością jeszcze nie działa, to jest jedna najcenniejsza zmiana, jaką
   zaleca ten temat.

2. **Czy dwa różne zespoły sklasyfikowałyby dotkliwość tego samego defektu tak
   samo, czy klasyfikacja rozjechała się w organizacji?** Wybierz prawdziwy,
   niejednoznaczny defekt z przeszłości i poproś przedstawicieli dwóch różnych
   zespołów, by sklasyfikowali go niezależnie; porównaj wyniki uczciwie.

3. **Jaka jest nasza najczęstsza przyczyna źródłowa uciekających defektów i czy
   obecny proces faktycznie się nią zajmuje, czy po prostu wciąż reagujemy na
   pojedyncze incydenty w miarę ich występowania?** Zagreguj dane o przyczynach
   źródłowych z ostatnich kilku miesięcy i poszukaj dominującego wzorca.

4. **Czy nasze uciekające defekty wracały do obszarów, które wewnętrzne metryki
   jakości (złożoność, pokrycie, analiza statyczna) już oznaczyły jako
   ryzykowne?** To połączenie weryfikuje, czy twoje metryki z części 4 faktycznie
   przewidują w twoim konkretnym kontekście, czy też pomijają rodzaje awarii,
   które naprawdę mają znaczenie.

5. **Czy nasz proces klasyfikacji defektów jest bezpieczny, czy inżynierowie
   obawiają się obwiniania, gdy zgłaszają lub klasyfikują defekt, z którym są
   związani?** Kultura skłonna do obwiniania systematycznie psuje te dane przez
   niedoraportowanie i pobłażliwą klasyfikację; bądź szczery co do obecnej
   kultury.

6. **Czy nasz wskaźnik uciekających defektów kiedykolwiek poprawił się
   podejrzanie szybko bez odpowiedniej zmiany w praktykach testowania lub
   przeglądu?** Podobnie jak przy odsetku nieudanych zmian (temat 2.10), to
   najwyraźniejszy znak, że przesunęły się kryteria klasyfikacji, a nie realne
   ryzyko.

## Perspektywa sektorowa

**Startup.** Formalna klasyfikacja dotkliwości jest często zbędna przy małej
liczbie defektów i małym zespole, który może omówić każdy z nich bezpośrednio.
Nawyk wart wczesnego przyjęcia to po prostu spójne śledzenie defektów od
początku, nawet nieformalne, by dane historyczne istniały, gdy zespół urośnie na
tyle, że będzie potrzebował bardziej formalnej analizy.

**Mała firma.** Prosta, wspólna skala dotkliwości, nawet trzypoziomowa
(krytyczny, poważny, drobny), stosowana spójnie przez osobę zajmującą się
wsparciem i triażem błędów, daje większość wartości tego tematu bez
wyrafinowanych narzędzi i bez dedykowanej funkcji jakości.

**Duże przedsiębiorstwo.** Spójność klasyfikacji między zespołami to tutaj
inwestycja o największej dźwigni, bo niespójne standardy w dziesiątkach
zespołów czynią porównanie jakości w całej organizacji bezsensownym. Zainwestuj
w udokumentowane kryteria klasyfikacji oparte na przykładach i okresowe audyty
oraz systematycznie łącz uciekające defekty z wewnętrznymi sygnałami jakości z
części 4, by zweryfikować, które z nich faktycznie przewidują w twojej
organizacji.

**Administracja publiczna.** Uciekający defekt w systemie dla obywateli lub
systemie wyliczającym świadczenia niesie ciężar prawny i zaufania publicznego
wykraczający poza koszt inżynierski. Traktuj klasyfikację dotkliwości z
szczególnym rygorem dla defektów dotykających usług dla obywateli i bądź
gotów na to, że decyzje klasyfikacyjne zostaną poddane zewnętrznej kontroli, co
jest mocnym argumentem za udokumentowanymi, audytowanymi, spójnymi kryteriami,
a nie doraźnymi osądami.

## Przykłady

**Przedsiębiorstwo.** W firmie oferującej oprogramowanie w subskrypcji liczba
uciekających defektów rosła przez dwa kwartały, a początkowe zaniepokojenie
skupiało się na surowej liczbie. Analiza ważona dotkliwością pokazała, że
wzrost dotyczył niemal wyłącznie drobnych usterek kosmetycznych, zbiegając się z
niedawnym redesignem interfejsu, podczas gdy defekty krytyczne i poważne w tym
samym okresie nieco zmalały. Analiza przyczyn źródłowych skoku drobnych usterek
wskazała lukę w testach regresji wizualnej, właśnie dla nowych komponentów
interfejsu: celowa, tania naprawa, którą zespół by całkowicie przeoczył,
gdyby zareagował na surową, nieważoną liczbę jak na niezróżnicowany kryzys
jakości.

**Administracja publiczna.** W systemie wyliczania świadczeń stanowej agencji
ds. bezrobocia uciekający defekt przez kilka miesięcy przed wykryciem błędnie
odrzucał niewielki odsetek wniosków od osób uprawnionych. Śledztwo w sprawie
przyczyny źródłowej wykazało, że defekt pochodził z obszaru kodu oznaczonego
osiemnaście miesięcy wcześniej w wewnętrznym przeglądzie jakości jako punkt
zapalny złożoności (temat 4.1, temat 4.3), ale nigdy nie nadano mu priorytetu
naprawy, bo nie wystąpił jeszcze żaden defekt, który uczyniłby to ryzyko
konkretnym. Zmieniony proces agencji wyraźnie przyznaje obszarom oznaczonym jako
punkty zapalne wyższy priorytet w testowaniu i przeglądzie właśnie z powodu tego
wykazanego, zweryfikowanego związku między wewnętrznymi sygnałami złożoności a
realnym ryzykiem uciekających defektów.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem ze skrupulatnego śledzenia wskaźnika uciekających defektów, z ważeniem
dotkliwością i analizą przyczyn źródłowych, jest możliwość kierowania inwestycji
w jakość tam, gdzie faktycznie zmniejszą szkodę dla klientów, zamiast reagować
na niezróżnicowaną liczbę, która wrzuca do jednego worka drobne i poważne
problemy. Przykład firmy z oprogramowaniem w subskrypcji pokazuje to wyraźnie:
reakcja na surową liczbę uruchomiłaby szeroką, nieukierunkowaną inicjatywę
jakościową, a odpowiedź ważona dotkliwością i oparta na przyczynach źródłowych
wskazała konkretną, tanią, celową naprawę.

Całkowity koszt posiadania obejmuje dyscyplinę klasyfikacji (spójne kryteria,
okresowe audyty) i wysiłek śledzenia przyczyn źródłowych, a oba są przede
wszystkim inwestycjami w proces, a nie kosztami narzędzi. Ta inwestycja zwraca
się bezpośrednio w kosztach szkód dla klientów i reagowania na incydenty, których
udało się uniknąć dzięki skierowaniu wysiłku jakościowego na rzeczywiste,
zweryfikowane źródła ryzyka uciekających defektów.

## Antywzorce i pułapki

- **Traktowanie surowej liczby defektów jako metryki:** zlewa drobne i poważne
  problemy i zaciemnia prawdziwy sygnał.
- **Niespójna klasyfikacja dotkliwości w zespołach:** czyni porównania między
  zespołami bezsensownymi i zachęca do pobłażliwego dryfu klasyfikacji.
- **Brak śledzenia przyczyn źródłowych:** zamienia liczbę w wartość bez
  diagnostycznego sensu, pozostawiając wzorce systemowe niewidoczne.
- **Kultura raportowania skłonna do obwiniania:** psuje dane przez
  niedoraportowanie i pobłażliwą klasyfikację, dokładnie to ryzyko zachęt, przed
  którym ostrzega temat 1.2.
- **Brak łączenia uciekających defektów z wewnętrznymi sygnałami jakości:**
  marnuje okazję, by zweryfikować, albo obalić, przewidującą wartość metryk z
  części 4 na tle realnych rezultatów.
- **Podejrzanie szybka poprawa bez zmiany procesu:** najwyraźniejszy znak, że
  przesunęły się kryteria klasyfikacji, a nie realne ryzyko.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Uciekające defekty są śledzone, jeśli w ogóle, jako
  surowa liczba bez ważenia dotkliwością i bez analizy przyczyn źródłowych.
- **Poziom 2, Rozwój:** Istnieje pewna klasyfikacja dotkliwości, ale standardy
  różnią się między zespołami, a śledzenie przyczyn źródłowych jest
  niespójne.
- **Poziom 3, Standaryzacja:** Klasyfikacja dotkliwości jest ujednolicona i
  udokumentowana w całej organizacji, a kategoryzacja przyczyn źródłowych
  stosowana spójnie.
- **Poziom 4, Zarządzanie:** Uciekające defekty są systematycznie śledzone do
  wewnętrznych sygnałów jakości, by zweryfikować ich wartość przewidującą, a
  klasyfikacja jest okresowo audytowana pod kątem spójności.
- **Poziom 5, Orkiestracja:** Organizacja potrafi wskazać konkretne, mierzalne
  spadki wskaźnika uciekających defektów przypisane celowej, opartej na
  przyczynach źródłowych inwestycji w jakość, zweryfikowanej względem
  wewnętrznych sygnałów jakości.

## Pomysły do dyskusji

1. Czy nasz największy uciekający defekt z zeszłego kwartału sklasyfikowałby w ten sam sposób inny zespół?
2. Jaka jest nasza najczęstsza przyczyna źródłowa uciekających defektów i czy faktycznie się nią zajmujemy?
3. Czy uciekający defekt kiedykolwiek wrócił do obszaru, który nasze wewnętrzne metryki już oznaczyły?
4. Czy nasz zespół czuje się bezpiecznie, zgłaszając i uczciwie klasyfikując defekt, który sam spowodował?
5. Co ujawniłby widok naszej obecnej liczby defektów ważony dotkliwością, czego surowa liczba nie pokazuje?

## Kluczowe wnioski

- Wskaźnik uciekających defektów jest **ostateczną kartą wyników** wewnętrznych
  praktyk jakości; rosnący wskaźnik mimo dobrych metryk z części 4 oznacza, że
  te metryki nie wyłapują tego, co ważne.
- **Waż dotkliwością**, używając spójnej, udokumentowanej, audytowanej skali
  klasyfikacji, nigdy samej surowej liczby.
- Śledź **przyczynę źródłową**, nie tylko liczbę i dotkliwość, by zamienić
  metrykę w prawdziwe narzędzie diagnostyczne.
- **Łącz uciekające defekty z wewnętrznymi sygnałami jakości** (złożoność,
  pokrycie, analiza statyczna), by zweryfikować, czy te sygnały faktycznie
  przewidują.
- Pilnuj się **kultury skłonnej do obwiniania**, która psuje raportowanie i
  klasyfikację przez niedoraportowanie i pobłażliwy dryf.

## Bibliografia i dalsza lektura

- *Site Reliability Engineering*, Betsy Beyer, Chris Jones, Jennifer Petoff i
  Niall Richard Murphy (red.) (praktyka analizy poawaryjnej bez szukania
  winnych, stosowalna do analizy przyczyn źródłowych defektów).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble i Gene Kim (związek między praktykami dostarczania a rezultatami
  jakościowymi).
- *Code Complete*, Steve McConnell (praktyki klasyfikacji defektów i analizy
  przyczyn źródłowych).
- *The Field Guide to Understanding Human Error*, Sidney Dekker (systemowe,
  pozbawione szukania winnych ujęcie badania awarii).
