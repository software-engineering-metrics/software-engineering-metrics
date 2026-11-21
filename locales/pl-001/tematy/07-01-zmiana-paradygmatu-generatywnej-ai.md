# 7.1 Zmiana paradygmatu: generatywna AI

## Przegląd i motywacja

Przez większość historii inżynierii oprogramowania pisanie kodu było na tyle
wolne i pracochłonne, że surowy wolumen produkcji, czyli napisane linie,
wykonane commity, dostarczone funkcje, korelował przynajmniej luźno z
rzeczywistym wysiłkiem, a niedoskonale także z rzeczywistą wartością. Ta
korelacja nigdy nie była idealna (temat 3.4 poświęcił cały temat na
wyjaśnienie, dlaczego metryki aktywności wprowadzają w błąd nawet w świecie
sprzed AI), ale była dość silna, by wiele organizacji zbudowało programy
metryk na milczącym założeniu, że więcej wytworzonego kodu zwykle oznacza
więcej wykonanej pracy. Asystenci kodowania oparci na [generatywnej AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
przełamali to założenie ostatecznie: narzędzie potrafi dziś w kilka sekund
wytworzyć dużą, wiarygodnie wyglądającą ilość kodu, za ułamek dawnego
kosztu, a sama ta ilość mówi prawie nic o tym, czy powstały kod działa, da
się go utrzymać i czy służy jakiemukolwiek realnemu celowi.

Główna teza tego tematu brzmi: to zmiana paradygmatu, a nie drobna zmiana
narzędzi. Zmiana paradygmatu zmienia to, co twoje dotychczasowe przyrządy
faktycznie mierzą, a nie tylko to, jakie wartości pokazują. Prędkościomierz
nadal mierzy prędkość po wymianie silnika w samochodzie; kilka metryk z tej
książki nie przechodzi tego przejścia tak gładko. Częstotliwość wdrożeń
(temat 2.10) może rosnąć, bo AI przyspieszyła naprawdę wartościową pracę,
albo dlatego, że AI uczyniła banalnie łatwym generowanie wielu drobnych,
mało wartościowych zmian. Sama liczba nie odróżnia już jednego od drugiego,
a wcześniej, przy odpowiedniej ostrożności, zwykle to potrafiła. Ta sama
logika dotyczy ze zwiększoną siłą surowej liczby commitów, liczby linii kodu
i wolumenu pull requestów. Temat 3.4 ostrzegał już przed nimi jako
metrykami indywidualnymi, a teraz ryzyko rozlewa się także na poziom
zespołu i organizacji.

W dużych zespołach ta zmiana nadeszła szybciej, niż praktyka pomiarowa
większości organizacji zdołała się dostosować, a luka między tempem
wdrażania a tempem adaptacji pomiaru to miejsce, w którym leży prawdziwe
ryzyko tej części. Duże przedsiębiorstwa, które nadal raportują metryki
aktywności z ery sprzed AI bez korekt, ryzykują świętowanie metryki, która
po cichu przestała korelować z wartością. Administracja publiczna oceniająca
inwestycje w narzędzia AI potrzebuje trzeźwego rozeznania, które metryki
pozostają wiarygodne, a które już nie, zanim podejmie decyzje zakupowe lub
polityczne oparte na przestarzałych założeniach pomiarowych.

## Kluczowe zasady

- **To zmiana paradygmatu w tym, co metryki mierzą, a nie zmiana
  stopniowa.** Niektóre istniejące metryki po cichu przestały znaczyć to,
  co dawniej.
- **Wolumen produkcji nigdy nie był wiarygodnym wskaźnikiem zastępczym
  wartości, a teraz stał się aktywnie niewiarygodny.** Ostrzeżenie z
  tematu 3.4 zawsze było słuszne; ta zmiana sprawia, że jego ignorowanie
  kosztuje znacznie więcej.
- **Luka między tempem wdrażania AI a tempem adaptacji pomiaru to
  prawdziwe ryzyko.** Organizacje przyjmują narzędzia szybciej, niż
  przemyślają swoje metryki.
- **Nie każda metryka z tej książki jest dotknięta w równym stopniu.**
  Metryki rezultatów (część 5) są znacznie odporniejsze na tę zmianę niż
  metryki aktywności i surowej produkcji.
- **Ta zmiana dotyczy całej branży i trwa, a nie jest jednorazową
  korektą.** Spodziewaj się dalszych zmian, w miarę jak narzędzia i wzorce
  ich przyjmowania będą się rozwijać.

## Rekomendacje

### Przeprowadź jawny audyt obecnego zestawu metryk pod kątem ważności w erze AI

Przejrzyj swój obecny panel i dla każdej metryki zapytaj wprost: czy zespół
intensywnie korzystający z pomocy AI, ale nietworzący więcej realnej
wartości niż wcześniej, pokazałby na tej metryce lepszy odczyt. Najbardziej
narażone są zliczenia aktywności, częstotliwość commitów i surowa
częstotliwość wdrożeń (bez sparowanej bariery stabilności, temat 2.10).
Metryki rezultatów z części 5, czyli odsetek uciekających defektów,
adopcja funkcji i rezultaty biznesowe, są stosunkowo odporne, ponieważ
mierzą faktyczny wynik, a nie wolumen aktywności, która go wytworzyła.

### Przyjrzyj się szczególnie częstotliwości wdrożeń i czasowi realizacji, ze wzmożoną uwagą na bariery ochronne

Temat 2.10 ostrzegał już przed manipulowaniem przez podstawianie, czyli
dzieleniem znaczącej pracy na trywialne wdrożenia, by zawyżyć licznik.
Generatywna AI czyni ten konkretny wzorzec manipulacji dramatycznie
tańszym i łatwiejszym do wytworzenia, nawet nieumyślnie, bo trywialne
zmiany wspomagane przez AI są dziś niemal darmowe. Zaostrz barierę
ochronną w postaci odsetka nieudanych zmian (temat 2.10) proporcjonalnie
do tego, jak intensywnie zespół przyjął tworzenie wspomagane przez AI, i
śledź trendy wielkości wdrożeń uważniej niż dotąd.

### Traktuj przepustowość przeglądu kodu jako nowe, krytyczne wąskie gardło

Jeśli pomoc AI dramatycznie zwiększa wolumen kodu kierowanego do przeglądu,
etap przeglądu (temat 2.9), już teraz często największy składnik czasu
oczekiwania w potoku dostarczania, staje się jeszcze ostrzejszym
ograniczeniem. Recenzent proszony o ocenę znacznie większej ilości kodu
wygenerowanego przez AI w takim samym tempie jak dawniej nieuchronnie albo
spowolni potok, albo ograniczy głębokość przeglądu, czyli wpadnie w ryzyko
bezmyślnego zatwierdzania, przed którym temat 2.9 już ostrzegał, tyle że
pod znacznie większą presją. Monitoruj głębokość przeglądu i bariery
jakości ze szczególną uwagą, gdy rośnie wolumen kodu generowanego przez AI.

### Nie zakładaj, że kod generowany przez AI ma ten sam profil defektów co kod pisany przez ludzi

Wczesne dowody i doświadczenia praktyków sugerują, że kod generowany przez
AI może mieć inny profil defektów niż kod pisany przez ludzi: logikę
wiarygodnie wyglądającą, ale subtelnie błędną, obsługę przypadków
brzegowych wygenerowaną z pewnością siebie, lecz niepoprawną, albo kod,
który przechodzi powierzchowny przegląd, bo wygląda idiomatycznie i
rozsądnie, a nie został faktycznie przemyślany z prawdziwym zrozumieniem
kontekstu konkretnego systemu. Traktuj to jako hipotezę, którą warto
aktywnie sprawdzać na własnych danych o uciekających defektach (temat 5.1),
oznaczając defekty tym, czy kod źródłowy był w znacznej mierze
wygenerowany przez AI, zamiast zakładać, że historyczne zależności
częstości defektów, wokół których organizacja zbudowała praktyki jakości,
nadal obowiązują bez zmian.

### Zaktualizuj jawnie kartę metryk i proces nadzoru pod kątem tej zmiany

Zgodnie z dyscypliną nadzoru z tematu 1.4 nie pozwól, by ta zmiana
przytrafiła się twojemu programowi metryk biernie. Wróć jawnie do swojej
karty metryk, wskazując, które metryki potrzebują nowych barier, które
trzeba wycofać, a które pozostają wiarygodne, jako świadomą decyzję
nadzorczą, a nie nieprzeanalizowany dryf. Udokumentuj uzasadnienie, bo
właśnie przed takim definicyjnym i kontekstowym przesunięciem ostrzega
temat 1.4: może ono nastąpić po cichu i zostać odkryte dopiero dużo później.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Dalsze raportowanie metryk sprzed ery AI bez zmian | Brak zakłóceń, znajome raportowanie | Ryzyko świętowania metryk, które po cichu przestały korelować z wartością |
| Pełny audyt zestawu metryk i świadoma rewizja | Przywraca wiarygodny pomiar | Wymaga realnego wysiłku analitycznego i zarządzania zmianą w organizacji |
| Całkowite porzucenie metryk aktywności i produkcji | Usuwa najbardziej narażone ryzyko wprost | Traci nieco zasadnie użytecznego sygnału kontekstowego (zastrzeżenie z tematu 3.4) |
| Zaostrzenie barier bez pełnego audytu | Szybsze we wdrożeniu | Może pominąć metryki, których narażenie jest mniej oczywiste niż w najjaskrawszych przypadkach |

Główne napięcie to **ciągłość pomiaru kontra ważność pomiaru**. Organizacje
zrozumiale wolą raportować znajome metryki w znajomy sposób, bo zmiana
programu metryk ma realny koszt organizacyjny i powoduje zakłócenia. Ale
dalsze raportowanie metryki, która po cichu przestała mierzyć to, co
dawniej, jest gorsze niż zakłócenie: to aktywne wprowadzanie w błąd.
Rozwiąż to napięcie, traktując sprawę jako dokładnie ten rodzaj
świadomej, udokumentowanej zmiany nadzorczej, który opisuje temat 1.4.
Jest uciążliwa w krótkim okresie, ale konieczna, by metryki organizacji
pozostały uczciwe.

## Pytania do omówienia z zespołem

1. **Czy dla każdej metryki na naszym panelu zespół intensywnie korzystający
   z pomocy AI, ale nietworzący więcej realnej wartości, pokazałby lepszy
   odczyt?** Przejdź po swoich metrykach jawnie z tym testem; te, które go
   nie przechodzą, są twoimi najpilniejszymi kandydatami do zmienionych
   barier lub wycofania.

2. **Czy nasza częstotliwość wdrożeń lub wolumen commitów wzrosły od
   przyjęcia asystenta kodowania AI i czy sprawdziliśmy, czy odsetek
   nieudanych zmian lub częstość defektów zmieniły się odpowiednio?**
   Wyciągnij faktyczne sparowane dane, zamiast zakładać wynik pozytywny
   lub negatywny.

3. **Czy nasza przepustowość przeglądu kodu dotrzymuje kroku wzrostowi
   wolumenu kodu wspomaganego przez AI, czy głębokość przeglądu po cichu
   erodowała pod rosnącą presją?** Sprawdź metryki etapu przeglądu
   (temat 2.9) pod kątem oznak nasilającego się ryzyka bezmyślnego
   zatwierdzania.

4. **Czy oznaczamy defekty tym, czy kod źródłowy był w znacznej mierze
   wygenerowany przez AI, a jeśli tak, co pokazują dotychczasowe dane?**
   Jeśli obecnie tego nie oznaczasz, omówcie, co byłoby potrzebne, by
   zacząć, bo te dane bezpośrednio wpływają na to, czy nasze historyczne
   założenia o jakości nadal obowiązują.

5. **Czy świadomie wróciliśmy do naszej karty metryk (temat 1.4) w świetle
   tej zmiany, czy nasza praktyka pomiarowa po prostu trwała bez zmian?**
   Jeśli uczciwa odpowiedź brzmi: to drugie, właśnie tę lukę ten temat
   zaleca zamknąć w pierwszej kolejności.

6. **Jak wyglądałoby, gdyby naszą organizację ta zmiana zaskoczyła, a my
   świętowalibyśmy metrykę, która już przestała znaczyć to, co myśleliśmy?**
   To konkretne, nieco niewygodne ćwiczenie myślowe pomaga uzasadnić
   audyt zalecany w tym temacie, zanim ten scenariusz faktycznie się
   zdarzy, a nie po fakcie.

## Perspektywa sektorowa

**Startup.** Szybkie przyjmowanie narzędzi AI jest powszechne i często
stanowi realną przewagę konkurencyjną, ale ta sama szybkość, która czyni
przyjęcie atrakcyjnym, zwiększa prawdopodobieństwo nieprzeanalizowanego
dryfu metryk. Wyrób nawyk sprawdzania metryk rezultatów (część 5) obok
wszelkich zysków efektywności, które raportujesz po wdrożeniu AI, zamiast
raportować same poprawy tempa.

**Mała firma.** Asystent kodowania AI może znacząco zwiększyć możliwości
małego zespołu, ale oprzyj się pokusie raportowania wzrostu surowej
produkcji jako bezsprzecznego sukcesu bez sprawdzenia barier jakości.
Mały zespół ma mniej możliwości wchłonięcia niewykrytego problemu z
jakością niż większa organizacja z większą redundancją.

**Duże przedsiębiorstwo.** Skala tego ryzyka rośnie tu znacząco, bo
przyjęcie AI w dziesiątkach lub setkach zespołów jednocześnie może
przesunąć ważność metryk w całej organizacji, zanim którykolwiek zespół
zauważy wzorzec lokalnie. Przeprowadź audyt zestawu metryk zalecany w tym
temacie na poziomie całej organizacji, a nie tylko zespół po zespole, i
zaktualizuj nadzór (temat 1.4) centralnie i jawnie.

**Administracja publiczna.** Sektor publiczny często przyjmuje nowe
technologie ostrożniej, ale metryki i wartości odniesienia używane do
oceny rządowych programów technologicznych są często zaczerpnięte z danych
branżowych sektora prywatnego lub z nimi porównywane, a te same dane
przesuwają się pod tym samym naciskiem. Zrozum jawnie, które branżowe
wartości odniesienia, z którymi się porównujesz, zostały dotknięte tą
zmianą, zanim użyjesz ich do ustalania oczekiwań lub oceny wyników.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo inżynierii firmy z sektora technologii
finansowych zauważyło, że częstotliwość wdrożeń wzrosła o prawie 40% w ciągu
dwóch kwartałów po szerokim wdrożeniu asystenta kodowania AI, i początkowo
przedstawiło to w prezentacji dla zarządu jako jednoznaczny sukces
produktywności. Staranniejsza analiza uzupełniająca, wywołana pytaniem
sceptycznego członka zarządu o to, czy sprawdzono jakość, wykazała, że
odsetek nieudanych zmian wzrósł niemal równolegle z częstotliwością
wdrożeń, całkowicie niwelując pozorny zysk, gdy faktycznie przyjrzano się
sparowanej metryce stabilności. Zrewidowane raportowanie firmy przedstawia
teraz częstotliwość wdrożeń i odsetek nieudanych zmian razem, jawnie,
zawsze gdy pojawiają się twierdzenia o produktywności dzięki AI, co
pozwala uniknąć wcześniejszego, niemal publicznego, mylącego twierdzenia.

**Administracja publiczna.** Departament IT rządu stanowego, który
pilotował asystenta kodowania AI w części swoich zespołów inżynierskich,
stwierdził, że surowa produkcja kodu na inżyniera znacząco wzrosła, a tę
liczbę początkowo przytoczono przychylnie w wewnętrznym przeglądzie
pilotażu. Dokładniejsza analiza, wywołana włączeniem wskazówek tej książki
do ram oceny departamentu, zbadała odsetek uciekających defektów
konkretnie dla pracy wspomaganej i niewspomaganej przez AI i wykazała
umiarkowanie podwyższoną częstość defektów w kohorcie wspomaganej przez AI,
skoncentrowaną w obsłudze przypadków brzegowych dla nietypowych sytuacji
obywateli, z którymi narzędzia AI nie miały styczności podczas treningu.
To ustalenie nie wstrzymało pilotażu, ale doprowadziło do konkretnego,
ukierunkowanego zaostrzenia przeglądu zmian wspomaganych przez AI, które
dotykają logiki przypadków brzegowych uprawnień, odpowiadając na realne
ryzyko, którego sama metryka surowej produkcji nigdy by nie ujawniła.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z proaktywnego przeprowadzenia tego audytu jest uniknięcie
publicznego lub zarządowego zakłopotania wynikającego z raportowania
metryki, która pod lupą okazuje się nie mierzyć niczego realnego, dokładnie
tego scenariusza, który niemal wywołał powyższy przykład z technologii
finansowych. Organizacja, która wyprzedza tę zmianę, zachowuje
wiarygodność wobec interesariuszy; ta, która zostanie przyłapana na
raportowaniu pustej metryki, ponosi realny i w dużej mierze możliwy do
uniknięcia koszt wizerunkowy.

Całkowity koszt posiadania to wysiłek analityczny potrzebny do audytu
istniejącego zestawu metryk, zaostrzenia barier i aktualizacji dokumentacji
nadzoru, czyli jednorazowa, umiarkowana inwestycja w porównaniu z ciągłym
ryzykiem dalszego raportowania metryk, które po cichu przestały mierzyć to,
co deklarują. Ten koszt powraca też na niższym poziomie, ponieważ zmiana
trwa, a nie jest zdarzeniem jednorazowym, więc okresowy ponowny audyt, w
miarę jak narzędzia i wzorce ich przyjmowania ewoluują, jest rozsądnym,
trwałym elementem rytmu nadzoru nad metrykami.

## Antywzorce i pułapki

- **Dalsze raportowanie metryk aktywności z ery sprzed AI bez zmian i bez
  krytycyzmu:** ryzyko świętowania metryki, która po cichu przestała
  korelować z realną wartością.
- **Raportowanie wzrostu częstotliwości wdrożeń lub wolumenu produkcji bez
  sparowanej bariery stabilności:** powtarza ostrzeżenie z tematu 2.10 przy
  znacznie wyższej stawce w tworzeniu wspomaganym przez AI.
- **Zakładanie, że kod generowany przez AI ma ten sam profil defektów co
  kod pisany przez ludzi, bez sprawdzenia:** nieprzetestowane założenie,
  które może być aktywnie błędne.
- **Pozwalanie, by głębokość przeglądu po cichu erodowała pod rosnącym
  wolumenem kodu generowanego przez AI:** ryzyko bezmyślnego zatwierdzania
  z tematu 2.9, nasilone.
- **Traktowanie tej zmiany jako jednorazowej korekty, a nie stałego
  problemu:** narzędzia i wzorce ich przyjmowania wciąż ewoluują, a
  praktyka pomiarowa musi dotrzymywać kroku.
- **Porównywanie z branżowymi wartościami odniesienia bez zrozumienia, czy
  one same nie przesunęły się pod tym samym naciskiem:** grozi fałszywym
  poczuciem względnej wydajności.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryki z ery sprzed AI są raportowane bez zmian,
  bez świadomości, że przyjęcie AI mogło wpłynąć na ich ważność.
- **Poziom 2, Rozwój:** Istnieje pewna świadomość zmiany, ale nie
  przeprowadzono systematycznego audytu istniejącego zestawu metryk.
- **Poziom 3, Standaryzacja:** Przeprowadzono pełny audyt zestawu metryk,
  zaostrzono bariery, a metryki udokumentowano jako dotknięte lub odporne,
  w całej organizacji.
- **Poziom 4, Zarządzanie:** Defekty i rezultaty jakości są aktywnie
  oznaczane i śledzone według poziomu pomocy AI, aby sprawdzać, a nie
  zakładać, że historyczne zależności jakościowe organizacji nadal
  obowiązują.
- **Poziom 5, Orkiestracja:** Organizacja ma dojrzałą, ciągłą praktykę
  ponownego przeglądu swoich metryk, w miarę jak narzędzia AI i wzorce ich
  przyjmowania wciąż ewoluują, i potrafi wskazać konkretne decyzje
  nadzorcze podjęte proaktywnie w odpowiedzi na tę zmianę, a nie
  reaktywnie po ujawnieniu się problemu.

## Pomysły do dyskusji

1. Które z naszych obecnych metryk najbardziej pochlebiałyby zespołowi intensywnie korzystającemu z pomocy AI, ale nietworzącemu więcej realnej wartości?
2. Czy nasza częstotliwość wdrożeń wzrosła od przyjęcia AI i czy odsetek nieudanych zmian poruszył się razem z nią?
3. Czy oznaczamy rezultaty jakości według poziomu pomocy AI i co pokazałyby te dane?
4. Czy nasza przepustowość przeglądu dotrzymuje kroku wzrostowi wolumenu kodu generowanego przez AI?
5. Z jaką branżową wartością odniesienia obecnie się porównujemy i czy ona sama przesunęła się pod tym naciskiem?

## Kluczowe wnioski

- Generatywna AI to **zmiana paradygmatu w tym, co mierzy kilka istniejących
  metryk**, a nie drobna zmiana narzędzi; niektóre metryki po cichu
  przestały znaczyć to, co dawniej.
- **Metryki aktywności i surowej produkcji są najbardziej narażone**;
  metryki rezultatów (część 5) są stosunkowo odporne.
- **Zaostrz bariery, zwłaszcza odsetek nieudanych zmian**, proporcjonalnie
  do przyjęcia tworzenia wspomaganego przez AI.
- **Sprawdzaj, a nie zakładaj, czy kod generowany przez AI ma inny profil
  defektów** niż kod pisany przez ludzi, korzystając z oznaczonych danych o
  uciekających defektach.
- Traktuj to jako **stały, a nie jednorazowy problem nadzoru**
  (temat 1.4), ponieważ narzędzia i wzorce ich przyjmowania wciąż ewoluują.

## Bibliografia i dalsza lektura

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (fundament pomiaru opartego na rezultatach, który
  według tego tematu zyskuje, a nie traci na znaczeniu przy tej zmianie).
- Badania GitHub nad programowaniem w parze z AI i produktywnością
  programistów (branżowe badania mierzalnych skutków tworzenia wspomaganego
  przez AI).
- Program DevOps Research and Assessment firmy Google Cloud, [dora.dev](https://dora.dev/)
  (ciągłe badania State of DevOps, które w ostatnich latach uwzględniają
  ustalenia o przyjmowaniu AI).
- *The Tyranny of Metrics*, Jerry Z. Muller (ogólne uzasadnienie
  sceptycyzmu wobec metryk opartych na wolumenie, wprost istotne, gdy
  wolumen produkcji tanieje).
