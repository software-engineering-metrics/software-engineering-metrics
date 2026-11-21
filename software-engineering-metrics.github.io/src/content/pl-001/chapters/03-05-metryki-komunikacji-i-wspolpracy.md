# 3.5 Metryki komunikacji i współpracy

## Przegląd i motywacja

**Komunikacja i współpraca**, czyli litera C w SPACE (temat 3.1), mierzy, jak
informacja faktycznie płynie między ludźmi i zespołami: jak łatwo znaleźć
dokumentację, jak równomiernie wiedza rozchodzi się w zespole, jak dobrze
koordynowane są zależności między zespołami i jak nowe osoby wchodzą w nurt
wspólnego rozumienia. Ten wymiar jest często najsłabiej zinstrumentowanym z
pięciu, właśnie dlatego, że trudniej go obserwować niż dane o dostarczaniu i
jest mniej osobisty niż dane o satysfakcji. Ta luka to błąd, bo załamania tu
bywają przyczyną źródłową problemów, które pojawiają się, błędnie
przypisane, w każdym innym wymiarze.

Rosnący odsetek nieudanych zmian (temat 2.10), który wygląda na problem
testowania, bywa w istocie problemem komunikacji: zespół nie wiedział o
zmianie w zależności, dopóki nie zepsuła się na produkcji. Spadający trend
satysfakcji (temat 3.2), który wygląda na problem obciążenia, bywa w istocie
problemem izolacji: inżynier po cichu wykluczony z rozmów, w których zapadają
decyzje. Główny argument tego tematu jest taki, że komunikacja i współpraca
zasługują na bezpośredni pomiar właśnie dlatego, że ich porażki udają inne
problemy, a zespół ścigający złą przyczynę źródłową marnuje realny wysiłek na
naprawianie nie tego, co trzeba.

W dużych zespołach ten wymiar staje się strukturalnie trudniejszy do
utrzymania dokładnie wtedy, gdy staje się ważniejszy. Koordynacja
pięcioosobowego zespołu odbywa się dzięki codziennej bliskości i prawie nie
wymaga celowego pomiaru. Organizacja pięciuset osób rozproszona po strefach
czasowych i jednostkach biznesowych zależy od dokumentacji, możliwości jej
znalezienia i mechanizmów koordynacji między zespołami, które trzeba świadomie
zaprojektować i aktywnie monitorować, bo nieformalne kanały, które działały w
małej skali, po prostu nie sięgają tak daleko.

## Kluczowe zasady

- **Załamania komunikacji często udają inne problemy.** Problem jakości lub
  satysfakcji może mieć przyczynę źródłową we współpracy.
- **Ten wymiar jest najtrudniejszy do automatycznej instrumentacji**, a
  pokusa, by go całkiem pominąć, jest silna. Oprzyj się jej świadomie.
- **Koncentracja wiedzy to mierzalne ryzyko, a nie mglista obawa.** Śledź,
  jak wąsko trzymana jest krytyczna wiedza.
- **Tarcie w zależnościach między zespołami jest często niewidoczne dla
  zespołów, których dotyczy**, dopóki ktoś nie zmierzy go bezpośrednio.
- **Szybkość wdrażania nowych osób to bezpośredni, mierzalny wskaźnik
  zastępczy tego, jak dobrze wspólne rozumienie faktycznie płynie** w
  organizacji.

## Rekomendacje

### Mierz koncentrację wiedzy bezpośrednio

Śledź, ile osób potrafi kompetentnie zrecenzować, zmodyfikować lub obsługiwać
każdy krytyczny komponent systemu: komponent z tylko jedną wykwalifikowaną
osobą ma **[współczynnik autobusowy (bus factor)](https://en.wikipedia.org/wiki/Bus_factor)**
równy jeden, co jest poważnym i często niewidocznym ryzykiem (omawia to
głębiej temat o utrzymywaniu długowiecznych systemów w siostrzanej książce
`software-engineering-guide`). Dane blame z systemu kontroli wersji, połączone
z zapisami rotacji dyżurów, mogą automatycznie ujawnić tę koncentrację:
szukaj komponentów, w których jeden autor lub jedna osoba reagująca na
dyżurze odpowiada za nieproporcjonalnie dużą część zmian lub reakcji na
incydenty w istotnym okresie.

### Mierz tarcie w zależnościach między zespołami bezpośrednim sygnałem

Śledź, ile czasu zajmuje prośba międzyzespołowa, potrzebna zmiana API,
aktualizacja wspólnej biblioteki czy skoordynowane wydanie, od zgłoszenia do
rozwiązania, w duchu podobnie do rozkładu czasu cyklu z tematu 2.6, ale
zastosowanego konkretnie do koordynacji między zespołami, a nie wewnątrz
zespołu. Zespół, który konsekwentnie czeka tygodniami na zależność należącą
do innego zespołu, ma problem współpracy, który nie ujawni się czysto w
wewnętrznych metrykach dostarczania żadnego z nich.

### Jako sygnału używaj możliwości znalezienia dokumentacji, a nie samego jej istnienia

Wiki pełne nieaktualnych lub niemożliwych do znalezienia stron nie jest
dowodem dobrej komunikacji tylko dlatego, że treść technicznie gdzieś
istnieje. Tam, gdzie to możliwe, śledź, jak często dokumentację faktycznie
otwierano, jak często nowa osoba zgłasza, że nie mogła znaleźć potrzebnej
odpowiedzi, albo jak często to samo pytanie powtarza się na kanale czatu,
bo odpowiedź, choć udokumentowana, nie była możliwa do znalezienia. To
wprost łączy jakość dokumentacji (temat 4.6) z troskami współpracy tego
wymiaru.

### Śledź czas wdrożenia do produktywnego wkładu jako bezpośredni wskaźnik zastępczy

Czas od dołączenia nowej osoby do jej pierwszego znaczącego, samodzielnego
wkładu to mocny, praktyczny wskaźnik zastępczy tego, jak dobrze wspólne
rozumienie faktycznie płynie w organizacji: zespół, w którym wiedza żyje
wyłącznie w głowach ludzi, wdraża nowe osoby powoli i nieprzewidywalnie.
Zespół z naprawdę dobrą dokumentacją, jasną własnością i dostępnym
mentoringiem wdraża szybciej i bardziej powtarzalnie. Śledź tę metrykę jawnie
i traktuj długi lub bardzo zmienny czas wdrożenia jako sygnał dotyczący
współpracy, a nie tylko sprawę działu kadr.

### Okresowo mapuj faktyczne sieci komunikacji, a nie tylko schematy organizacyjne

Schemat organizacyjny opisuje, kto ma komu podlegać, a rzadko opisuje, kto
faktycznie z kim rozmawia, by wykonać pracę. Okresowa, lekka analiza wzorców
komunikacji, sieci przeglądów kodu (kto przegląda czyją pracę) czy nakładania
się obecności na spotkaniach może ujawnić realną strukturę współpracy, która
znacząco różni się od formalnego schematu, często odsłaniając nieformalne
wąskie gardło (jedną osobę, przez którą wszyscy się kierują) albo odizolowaną
enklawę (podzespół, który wypadł z szerszego obiegu informacji), które
inaczej pozostałyby niewidoczne.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak bezpośredniego pomiaru współpracy | Niskie koszty | Przyczyny źródłowe są błędnie przypisywane innym wymiarom; ryzyka pozostają niewidoczne |
| Śledzenie koncentracji wiedzy | Wprost ujawnia realne, poważne ryzyko (bus factor) | Wymaga łączenia danych z wielu systemów (kontrola wersji, dyżury) |
| Śledzenie tarcia w zależnościach między zespołami | Odsłania problemy koordynacji niewidoczne wewnątrz któregokolwiek zespołu | Wymaga celowej instrumentacji; nie jest automatyczne z istniejących narzędzi |
| Mapowanie sieci komunikacji | Odsłania realną, nieformalną strukturę stojącą za schematem organizacyjnym | Może wydawać się inwazyjne, jeśli nie potraktuje się go z taką troską jak danych o satysfakcji |

Główne napięcie to **trudność instrumentacji kontra wartość diagnostyczna**.
Ten wymiar jest naprawdę trudniejszy do zmierzenia automatycznie niż dane o
dostarczaniu czy aktywności i ta trudność jest właśnie powodem, dla którego
wiele organizacji go pomija, mimo że jego porażki są często ukrytą przyczyną
źródłową problemów przypisywanych innym wymiarom. Rozwiąż to napięcie,
zaczynając od najcenniejszych, najłatwiejszych sygnałów, koncentracji wiedzy i
tarcia w zależnościach między zespołami, które w dużej mierze da się wyprowadzić
z istniejących danych z kontroli wersji i systemów zgłoszeń, zanim sięgniesz po
ambitniejszą analizę sieci komunikacji.

## Pytania do omówienia z zespołem

1. **Czy znamy nasz bus factor dla każdego krytycznego komponentu systemu,
   czy dowiemy się o nim dopiero po złej stronie, gdy jedyna osoba, która go
   rozumie, będzie niedostępna?** Wyciągnij dane z kontroli wersji i dyżurów
   dla najważniejszych systemów i uczciwie sprawdź, jak skoncentrowana jest
   wiedza.

2. **Ile zwykle trwa rozwiązanie prośby o zależność między zespołami i czy
   któryś z zaangażowanych zespołów zauważyłby to tarcie bez celowego
   pomiaru?** Weź niedawną zależność międzyzespołową i prześledź jej
   faktyczną oś czasu. Odpowiedź jest często dłuższa i mniej widoczna dla
   zaangażowanych, niż któryś z zespołów zakładał.

3. **Gdy niedawno mieliśmy problem z jakością lub satysfakcją, czy
   załamanie komunikacji lub współpracy mogło być częścią prawdziwej
   przyczyny źródłowej?** Spójrz wstecz na niedawny incydent lub spadek
   satysfakcji i zadaj to pytanie konkretnie, zamiast przyjmować pierwsze,
   bardziej oczywiste wyjaśnienie.

4. **Ile czasu zajmuje nowej osobie pierwszy znaczący, samodzielny wkład i
   jak bardzo ten czas różni się między osobami?** Długi lub bardzo zmienny
   czas wdrożenia to bezpośredni, mierzalny objaw tego, jak dobrze wspólne
   rozumienie faktycznie płynie w twoim zespole.

5. **Czy nasza nieformalna sieć komunikacji odpowiada formalnemu schematowi
   organizacyjnemu, czy rozwinęło się ukryte wąskie gardło lub odizolowana
   enklawa, której nikt nie nazwał?** Jeśli nigdy nie patrzyłeś na to
   bezpośrednio, ta nieobecność sama warta jest omówienia.

6. **Czy nasza dokumentacja jest faktycznie możliwa do znalezienia, czy tylko
   istnieje gdzieś, gdzie trudno ją znaleźć?** Zapytaj niedawno dołączoną
   osobę albo celowo spróbuj odpowiedzieć na prawdziwe pytanie, używając
   wyłącznie udokumentowanych zasobów, i zobacz, jak to faktycznie wygląda.

## Perspektywa sektorowa

**Startup.** W małym zespole komunikacja odbywa się naturalnie dzięki
bliskości i codziennym rozmowom, a formalny pomiar jest zwykle zbędny.
Ryzyko, na które trzeba uważać, to niebezpieczna koncentracja bus factora, gdy
zespół wyrasta z rozmiaru, przy którym nieformalna osmoza jeszcze sięga
wszystkich, często około ośmiu do dwunastu osób.

**Mała firma.** Prosta, okresowa, szczera rozmowa, "kto jest jedyną osobą,
która rozumie ten system", często odsłania najbardziej krytyczne ryzyka
koncentracji wiedzy bez formalnej instrumentacji. Najpierw udokumentuj dwa
lub trzy najbardziej kruche, najbardziej skoncentrowane obszary wiedzy.

**Duże przedsiębiorstwo.** Tarcie w zależnościach między zespołami i
koncentracja wiedzy skalują się tu źle, bo więcej zespołów to większa
powierzchnia koordynacji i więcej krytycznych systemów, które mogą trafić w
ręce kurczącej się puli doświadczonych weteranów. Zainwestuj świadomie w
instrumentację, którą zaleca ten temat, bo nieformalna orientacja po prostu
nie obejmie organizacji tej skali.

**Administracja publiczna.** Długowieczne systemy i długi staż pracowników,
częste w sektorze publicznym, mogą tworzyć poważne ryzyko bus factora
ukryte za pozorną stabilnością, bo system, który od dekady nie zmieniał
rąk, może zależeć wyłącznie od jednej lub dwóch osób bliskich emerytury.
Traktuj pomiar koncentracji wiedzy jako sprawę ciągłości działania, a nie
tylko inżynierską ciekawostkę.

## Przykłady

**Przedsiębiorstwo.** Zespół platformowy firmy logistycznej odkrył, dopiero po
krytycznym incydencie podczas urlopu kluczowego inżyniera, że rdzeniowy
algorytm routingu miał faktyczny bus factor równy jeden: historia kontroli
wersji pokazała, że jedna osoba była autorem ponad 90% niedawnych zmian
komponentu, a zapis rotacji dyżurów pokazał, że ta sama osoba osobiście
rozwiązała każdy powiązany incydent w ciągu dwóch poprzednich lat. Zespół
wprowadził świadomy program rozpraszania wiedzy, sesje programowania w
parach i rotację własności powiązanych incydentów, a analiza kontrolna osiem
miesięcy później pokazała, że bus factor wzrósł do czterech, a pierwotny
inżynier został uwolniony do nowej pracy o większej dźwigni, zamiast
pozostawać stałym pojedynczym punktem awarii.

**Administracja publiczna.** Zespół inżynierski stanowej agencji świadczeń
zmierzył po raz pierwszy tarcie w zależnościach między zespołami, po
powtarzających się, nieformalnie zauważanych opóźnieniach we wspólnej usłudze
weryfikacji uprawnień. Dane pokazały, że mediana oczekiwania na zmianę
zależności od zespołu usługi wspólnej wynosiła jedenaście dni, znacznie
więcej, niż zakładał którykolwiek zespół zapytany nieformalnie, a przyczyną
źródłową okazał się niejasny, nieudokumentowany proces zgłoszeń, a nie
brak mocy przerobowych. Opublikowanie jasnego, prostego procesu zgłoszeń i
zobowiązującego celu czasu odpowiedzi dla usługi wspólnej obniżyło medianę
oczekiwania poniżej dwóch dni w ciągu jednego kwartału, bez dodatkowego
zatrudnienia.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z bezpośredniego mierzenia komunikacji i współpracy to wychwytywanie
przyczyn źródłowych, które inne wymiary błędnie przypisują: problem jakości,
który wygląda na lukę w testach, a faktycznie jest załamaniem komunikacji,
marnuje wysiłek, gdy zespół próbuje go naprawić dodawaniem testów zamiast
naprawy leżącej u podstaw porażki koordynacji. Przykład bus factora powyżej
pokazuje najjaskrawszą wersję tego zwrotu: organizacja, która odkrywa i
naprawia poważne ryzyko koncentracji wiedzy proaktywnie, unika katastrofalnego
kosztu odkrycia go w prawdziwym kryzysie, gdy jedyna osoba rozumiejąca
krytyczny system jest naprawdę niedostępna.

Całkowity koszt posiadania to głównie wysiłek instrumentacji, łączenie danych
z kontroli wersji, dyżurów i systemów zgłoszeń w sposób, który nie jest
automatyczny od razu po wyjęciu z pudełka, plus okresowa dyscyplina jawnego
przeglądania koncentracji wiedzy i tarcia w zależnościach. Ten koszt jest
skromny w porównaniu z kosztem prawdziwego kryzysu bus factora albo
chronicznej, nierozwiązanej porażki koordynacji między zespołami.

## Antywzorce i pułapki

- **Pomijanie tego wymiaru, bo trudno go automatycznie zinstrumentować:**
  zostawia przyczyny źródłowe błędnie przypisane innym, łatwiejszym do
  zmierzenia wymiarom.
- **Traktowanie schematu organizacyjnego jak dokładnego obrazu faktycznych
  wzorców komunikacji:** często błędne, a luka to dokładnie miejsce, gdzie
  żyją ukryte wąskie gardła.
- **Ignorowanie bus factora, dopóki kryzys nie wymusi odkrycia:** najbardziej
  szkodliwy tryb porażki, przed którym ostrzega ten temat.
- **Zakładanie, że istnienie dokumentacji oznacza jej użyteczność:**
  nieaktualna lub niemożliwa do znalezienia treść daje niewiele realnej
  wartości komunikacyjnej.
- **Mierzenie tarcia między zespołami bez działania, gdy znaleziono jasną,
  możliwą do naprawy przyczynę źródłową:** marnuje inwestycję diagnostyczną.
- **Traktowanie powolnego, zmiennego wdrażania jako wyłącznie sprawy działu
  kadr, a nie sygnału współpracy inżynierskiej:** pomija naprawdę użyteczny,
  mierzalny wskaźnik zastępczy.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Komunikacji i współpracy nie mierzy się wcale. Bus
  factor i tarcie między zespołami wychodzą na jaw dopiero w kryzysie.
- **Poziom 2, Rozwój:** Istnieje pewna nieformalna świadomość koncentracji
  wiedzy, ale brakuje spójnego pomiaru i proaktywnego badania.
- **Poziom 3, Standaryzacja:** Bus factor i tarcie w zależnościach między
  zespołami są spójnie mierzone dla krytycznych systemów i usług wspólnych w
  całej organizacji.
- **Poziom 4, Zarządzanie:** Mapowanie sieci komunikacji okresowo odsłania
  ukryte wąskie gardła i odizolowane enklawy, a czas wdrożenia nowych osób
  jest śledzony jako bezpośredni wskaźnik zastępczy zdrowia wspólnego
  rozumienia.
- **Poziom 5, Orkiestracja:** Organizacja proaktywnie zmniejsza ryzyko
  koncentracji wiedzy i tarcie między zespołami, zanim wywołają incydenty, i
  potrafi wskazać konkretne interwencje, świadome rozpraszanie wiedzy i
  wyjaśnione procesy zależności, które mierzalnie poprawiły ten wymiar.

## Pomysły do dyskusji

1. Jaki jest, uczciwie, bus factor naszego najważniejszego systemu?
2. Jaka zależność między zespołami powodowała najwięcej tarcia w ostatnim kwartale i czy ją zmierzyliśmy?
3. Czy nowa osoba znalazłaby naszą dokumentację, czy tylko stwierdziła, że technicznie gdzieś istnieje?
4. Czy nasza nieformalna sieć komunikacji odpowiada schematowi organizacyjnemu?
5. Jaki problem jakości lub satysfakcji może w rzeczywistości mieć przyczynę źródłową we współpracy, której nie zbadaliśmy?

## Kluczowe wnioski

- Porażki komunikacji i współpracy często **udają inne problemy**. Przyczyna
  źródłowa błędnie przypisana niewłaściwemu wymiarowi marnuje wysiłek.
- Śledź **koncentrację wiedzy (bus factor)** bezpośrednio na danych z kontroli
  wersji i dyżurów, zamiast czekać, aż ujawni ją kryzys.
- Mierz **tarcie w zależnościach między zespołami** jawnie. Jest zwykle
  niewidoczne dla zaangażowanych zespołów, dopóki go nie zmierzysz.
- Używaj **czasu wdrożenia do produktywnego wkładu** jako bezpośredniego,
  praktycznego wskaźnika zastępczego tego, jak dobrze płynie wspólne
  rozumienie.
- Okresowo mapuj **faktyczne sieci komunikacji**, bo często znacząco różnią
  się od formalnego schematu organizacyjnego.

## Bibliografia i dalsza lektura

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck i Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Team Topologies*, Matthew Skelton i Manuel Pais (tryby interakcji
  zespołów i projektowanie zależności między zespołami).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco i Timothy Lister
  (nieformalne struktury komunikacji i ich wpływ na produktywność).
- Conway, Melvin E., "How Do Committees Invent?" (1968): źródło prawa
  Conwaya, o związku między strukturą komunikacji a strukturą systemu.
