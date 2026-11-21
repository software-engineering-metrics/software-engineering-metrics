# 8.5 Przyrostowa mapa drogowa wdrożenia

## Przegląd i motywacja

Ten temat zamyka część 8 i merytoryczną treść tej książki pytaniem, które
zapewne zadaje sobie każdy czytelnik, który dotarł tak daleko: skoro
książka obejmuje czterdzieści pięć tematów, od dostarczania, przez
doświadczenie programisty, jakość kodu, rezultaty biznesowe, niezawodność i
bezpieczeństwo po zmianę ery AI, od czego organizacja ma faktycznie zacząć.
Uczciwa odpowiedź tego tematu brzmi: nie od wszystkiego naraz. Wdrożenie
[wielkim wybuchem](https://en.wikipedia.org/wiki/Big_bang_adoption) całego
zakresu tej książki, próbowane naraz, wprost narusza główne wskazówki
tematu 8.3, ponieważ rozległy, kompleksowy program metryk wprowadzony z dnia
na dzień to dokładnie ten rodzaj zmiany, który wywołuje strach i
manipulowanie zamiast zaufania.

Zamiast tego ten temat daje konkretną, etapową sekwencję, opartą na prostej,
konsekwentnej zasadzie powtarzanej w całej książce: zacznij od fundamentów,
udowodnij wartość w wąskim zakresie, a potem rozszerzaj świadomie, nigdy nie
pomijając pracy nad nadzorem i zaufaniem kulturowym z tematów 1.4 i 8.3 na
rzecz skoku prosto do wyrafinowanych, kompleksowych metryk. Ta kolejność nie
jest dowolna; wynika ze struktury zależności, którą ustalają same części tej
książki: fundamenty z części 1 naprawdę muszą być pierwsze, bo każda
późniejsza część zakłada nadzór, orientację na rezultaty i kompetencje
statystyczne ustalone w tematach od 1.1 do 1.6.

W dużych zespołach etapowa mapa drogowa sprawia, że pełny zakres tej książki
jest osiągalny, a nie przytłaczający. Duże przedsiębiorstwa mogą użyć
kolejności z tego tematu do zaplanowania naprawdę wielokwartalnego lub
wieloletniego wdrażania programu metryk z realistycznymi kamieniami milowymi.
Administracja publiczna, która często musi uzasadniać inwestycje w metryki
przed procesem budżetowym lub nadzorczym przyrostowo, a nie jednym dużym
wnioskiem, może użyć etapów z tego tematu jako naturalnych punktów kontrolnych
do wykazania wartości i występowania o dalsze inwestycje.

## Kluczowe zasady

- **Zawsze fundamenty najpierw.** Nadzoru (temat 1.4), orientacji na rezultaty
  (temat 1.3) i budowania zaufania kulturowego (temat 8.3) nie można
  pominąć na rzecz skoku prosto do wyrafinowanych metryk.
- **Udowodnij wartość w wąskim zakresie, zanim rozszerzysz.** Pojedynczy
  zespół lub pojedyncza rodzina metryk, zrobione dobrze i cieszące się
  zaufaniem, to mocniejszy fundament niż kompleksowe wdrożenie zrobione słabo.
- **Układaj kolejność według zależności, a nie postrzeganej ważności.**
  Niektóre rodziny metryk w tej książce zależą od fundamentów, które inne
  tematy ustanawiają najpierw.
- **Każdy etap powinien dać wykazalny, raportowalny rezultat**, który
  uzasadnia dalszą inwestycję w następny etap.
- **To mapa drogowa do dostosowania, a nie sztywna, uniwersalna recepta.**
  Konkretny punkt wyjścia i priorytety twojej organizacji powinny kształtować
  faktyczne tempo.

## Rekomendacje

### Etap 1: Fundamenty i nadzór (część 1)

Zanim zinstrumentujesz choćby jedną rodzinę metryk, ustanów dyscyplinę
nadzoru opisaną w temacie 1.4: szablon karty metryk, jasną politykę
diagnostyczne kontra oceniające (temat 1.1) i podstawy kompetencji
statystycznych z tematu 1.6, wspólne dla wszystkich, którzy będą
interpretować dane. Ten etap nie daje jeszcze żadnych paneli; daje
organizacyjny grunt, od którego zależy każdy późniejszy etap. Pominięcie
tego etapu, by iść szybciej, to najczęstszy sposób, w jaki wskazówki tej
książki są podważane w praktyce, ponieważ każda późniejsza metryka dziedziczy
jakość nadzoru, lub jej brak, którą ten etap ustalił.

### Etap 2: Jeden zespół pilotażowy, metryki DORA, tylko diagnostycznie (część 2)

Wybierz jeden zespół, najlepiej chętny i zaangażowany, a nie wyznaczony
odgórnie, i zinstrumentuj metryki DORA z części 2, korzystając ze
zautomatyzowanej instrumentacji (temat 1.5), a nie samooceny, w czysto
diagnostycznym trybie, wprost zgodnie ze wskazówkami budowania zaufania z
tematu 8.3. Prowadź to przez co najmniej jeden pełny kwartał przed
rozszerzeniem i użyj jako poligonu do sprawdzenia swojego szablonu karty
nadzoru i podejścia do projektowania paneli (temat 8.1), zanim zobowiążesz
się do któregokolwiek na szerszą skalę.

### Etap 3: Rozszerz metryki dostarczania na całą organizację, dodaj doświadczenie programisty (części 2, 3)

Gdy pilotaż wykaże prawdziwą wartość i, co kluczowe, trwałe zaufanie (brak
incydentów złego użycia albo jeden dobrze obsłużony według wskazówek tematu
8.3), rozszerz instrumentację DORA na kolejne zespoły i wprowadź pierwszą
ankietę o doświadczeniu programisty (temat 3.7) w całej organizacji. Ten
etap to miejsce, w którym dyscyplina diagnostyczne kontra oceniające staje
przed pierwszym prawdziwym testem w dużej skali, a staranne jej utrzymanie
tutaj nadaje ton wszystkiemu, co nastąpi później.

### Etap 4: Jakość kodu i metryki rezultatów (części 4, 5)

Gdy fundamenty dostarczania i doświadczenia programisty są ustanowione i
cieszą się zaufaniem, dodaj metryki jakości kodu z części 4, zaczynając od
analizy punktów zapalnych (temat 4.3) i śledzenia długu technicznego
(temat 4.5) jako najbardziej dźwigniowych punktów startowych, i zacznij
budować infrastrukturę telemetrii rezultatów, którą temat 7.4 uznaje za
docelowy środek ciężkości twojego programu, zaczynając od odsetka
uciekających defektów (temat 5.1) i adopcji funkcji (temat 5.2) jako
najłatwiejszych do zinstrumentowania na początek metryk rezultatów.

### Etap 5: Niezawodność, bezpieczeństwo i rekalibracja pod erę AI (części 6, 7)

Ustanów formalne SLO i budżety błędów (temat 6.1) dla swoich najbardziej
krytycznych usług, zbuduj praktykę metryk incydentów bez obwiniania
(temat 6.2) i przeprowadź audyt metryk pod erę AI zalecany w temacie 7.1,
jeśli twoja organizacja przyjęła lub przyjmuje narzędzia do tworzenia
wspomaganego przez AI. Ten etap często biegnie częściowo równolegle z
etapem 4, a nie ściśle po nim, ponieważ praca nad niezawodnością i
bezpieczeństwem często ma własną, niezależną pilność.

### Stale: skonsolidowana ocena dojrzałości i ciągła inwestycja

Gdy podstawowe etapy są ustanowione, przyjmij skonsolidowaną ocenę
dojrzałości z tematu 8.4 jako powtarzalną, coroczną praktykę, używając jej
ustaleń do kierowania dalszą inwestycją, zamiast traktować mapę drogową
jako ukończoną, gdy każdego etapu formalnie dotknięto. Program metryk to
trwała zdolność organizacyjna, a nie projekt z określoną datą zakończenia, i
ten stały etap odzwierciedla tę rzeczywistość wprost.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Wdrożenie wielkim wybuchem, kompleksowe | Szybkie, kompleksowe pokrycie od początku | Duże ryzyko wywołania strachu i manipulowania (temat 8.3); brak sprawdzonych fundamentów nadzoru |
| Wdrożenie etapowe, fundamenty najpierw | Buduje zaufanie i nadzór przed poszerzeniem zakresu; każdy etap sam się dowodzi | Wolniej osiąga pełne pokrycie; wymaga trwałego, wielokwartalnego zaangażowania |
| Wdrożenie etapowe, metryki najpierw (z pominięciem nadzoru) | Szybsze początkowe wyniki panelu | Dziedziczy słaby nadzór w każdy późniejszy etap; większe ryzyko długoterminowe |
| Doraźne, okazjonalne wdrażanie bez mapy drogowej | Elastyczne, reaguje na bieżące potrzeby | Daje niespójne, trudne do nadzorowania pokrycie i powtarza błędy etap po etapie |

Główne napięcie to **szybkość dojścia do kompleksowego pokrycia kontra
kolejność z fundamentami na początku**. Organizacje pod presją szybkiego
pokazania wyników kuszą się, by pominąć pracę nad nadzorem z etapu 1 i
skoczyć prosto do instrumentacji metryk, ale skumulowany argument tej
książki, od dyscypliny nadzoru z tematu 1.4 po wskazówki budowania zaufania z
tematu 8.3, brzmi: pominięcie fundamentu daje program szybszy, ale
zasadniczo słabszy. Rozwiąż to napięcie, zobowiązując się do etapowej
kolejności i używając wykazalnego rezultatu każdego etapu (kluczowa
rekomendacja tematu 8.5) do uzasadniania dalszych inwestycji, zamiast
próbować pokazywać kompleksowe wyniki, zanim fundament będzie w stanie je
udźwignąć.

## Pytania do omówienia z zespołem

1. **Gdzie nasza organizacja faktycznie stoi w tej etapowej sekwencji w tej
   chwili, oceniona uczciwie?** Odwzoruj obecny stan na pięć etapów wprost;
   wiele organizacji, ocenionych uczciwie, stwierdza, że ma zinstrumentowane
   metryki z późniejszego etapu, nie ukończywszy naprawdę wcześniejszych
   fundamentalnych.

2. **Czy pominęliśmy fundament nadzoru z etapu 1 na rzecz przejścia prosto do
   instrumentacji i jeśli tak, ile nas to kosztowało?** To łączy się wprost z
   oceną dojrzałości z tematu 8.4; słaby fundament nadzoru odkryty późno jest
   drogi do doposażenia.

3. **Jak wyglądałby dla nas prawdziwy, chętny zespół pilotażowy, jeśli
   jeszcze go nie prowadziliśmy?** Wskaż konkretny, realny zespół
   kandydujący, zamiast zostawiać to abstrakcyjnie, i omówcie, co czyniłoby
   go dobrym kandydatem.

4. **Jaki wykazalny rezultat faktycznie dał każdy ukończony przez nas etap i
   czy użyliśmy go do uzasadnienia inwestycji w następny?** Jeśli nie
   potrafisz wskazać konkretnego, zakomunikowanego rezultatu ukończonego
   etapu, warto tę lukę nazwać.

5. **Czy etapy 4 i 5 biegną u nas we właściwej równoległości, czy jeden jest
   zaniedbywany na rzecz drugiego?** Omówcie, czy konkretny profil ryzyka
   waszej organizacji, bardziej nastawiony na dostarczanie lub na
   niezawodność, powinien kształtować tę równoległość inaczej niż domyślna
   kolejność opisana w tym temacie.

6. **Czy ustanowiliśmy stałą, powtarzalną praktykę oceny dojrzałości z
   tematu 8.4, czy nasza mapa drogowa faktycznie kończy się, gdy początkowe
   etapy są formalnie ukończone?** Mapa drogowa bez tego stałego etapu grozi
   traktowaniem programu metryk jako zakończonego projektu, a nie trwałej
   zdolności, jaką według tej książki musi być.

## Perspektywa sektorowa

**Startup.** Tę pełną, wieloetapową mapę drogową można zapewne znacząco
skompresować, bo mała organizacja może przejść przez fundamentalny nadzór i
etapy pilotażowe w tygodnie, a nie kwartały. Nie pomijaj etapu 1 całkowicie
nawet w małej skali, ponieważ nawyki nadzoru ustanowione wcześnie są
znacznie łatwiejsze do utrzymania niż do doposażenia, gdy organizacja rośnie.

**Mała firma.** Dostosuj tempo mapy drogowej do swoich faktycznych
możliwości, zamiast próbować każdego etapu z sekwencji opisanej w tym
temacie; mała firma może rozsądnie zatrzymać się po etapie 2 lub 3, z
metrykami dostarczania i doświadczenia programisty, i odłożyć bardziej
wyrafinowaną pracę nad rezultatami i niezawodnością z części od 4 do 6, aż
organizacja urośnie na tyle, by naprawdę tego potrzebować i to udźwignąć.

**Duże przedsiębiorstwo.** Zaplanuj tę mapę drogową jawnie jako program
wielokwartalny lub wieloletni z realistycznymi kamieniami milowymi i użyj
wykazalnego rezultatu każdego etapu jako formalnego punktu kontrolnego do
zabezpieczenia dalszego sponsoringu kadry zarządzającej i budżetu, zamiast
próbować uzasadnić cały zakres z góry w jednym uzasadnieniu biznesowym.

**Administracja publiczna.** Użyj etapów z tego tematu jako naturalnych,
przyrostowych punktów kontrolnych w raportowaniu do budżetu lub organu
nadzoru, występując o dalsze inwestycje na granicy każdego etapu w oparciu o
wykazany, udokumentowany rezultat poprzedniego etapu, a nie jako jeden duży
wniosek z góry, który może napotkać większy sceptycyzm lub trudności
zamówieniowe.

## Przykłady

**Przedsiębiorstwo.** Firma z branży technologii medycznych przyjęła tę mapę
drogową jawnie jako ramy strukturyzujące swój program metryk, ukończyła
fundament nadzoru z etapu 1 w sześć tygodni, prowadziła jednozespołowy
pilotaż DORA przez jeden pełny kwartał i dopiero wtedy rozszerzyła się na
pełne organizacyjne pokrycie metrykami dostarczania w etapie 3, mniej więcej
pięć miesięcy po starcie. Dzięki takiemu świadomemu tempu firma uniknęła
wzorca manipulowania napędzanego strachem, który temat 8.3 opisuje jako
ryzyko szybszych, mniej zdyscyplinowanych wdrożeń, a zespół pilotażowy z
etapu 2 stał się nieformalnymi wewnętrznymi orędownikami rozszerzenia
programu, bo na własnej skórze przekonał się, że zobowiązanie do użycia
wyłącznie diagnostycznego było naprawdę dotrzymywane przez cały kwartał
pilotażu.

**Administracja publiczna.** Agencja technologiczna rządu stanowego użyła
etapowej struktury z tego tematu jawnie do uporządkowania wniosków
budżetowych do swojej komisji nadzorczej, występując o finansowanie etapów 1 i
2 jako początkowej, skromnej inwestycji pilotażowej, a potem wracając do
komisji z udokumentowanymi rezultatami etapu 2, czyli poprawioną
częstotliwością wdrożeń i stabilnym odsetkiem nieudanych zmian zespołu
pilotażowego, jako konkretnym dowodem na rzecz większego wniosku o
finansowanie etapów 3 i 4 w następnym cyklu budżetowym. To przyrostowe
finansowanie oparte na dowodach powiodło się tam, gdzie wcześniejszy, bardziej
kompleksowy wniosek z góry na cały zakres programu metryk agencji został
odrzucony jako zbyt duży i niewystarczająco uzasadniony wykazanymi
rezultatami.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z etapowej mapy drogowej z fundamentami na początku jest program
metryk, który naprawdę działa, jest godny zaufania, dobrze zarządzany i
faktycznie używany do podejmowania decyzji, a nie wyglądający na kompletny,
ale zepsuty strachem lub słabo zarządzany program, jaki może wyprodukować
szybsze wdrożenie. Powyższy przykład firmy z branży technologii medycznych
pokazuje to wprost: świadome tempo dało prawdziwe zaufanie i wewnętrzne
poparcie, które szybsze wdrożenie prawdopodobnie by podważyło.

Całkowity koszt posiadania to czas: ta mapa drogowa naprawdę dłużej dochodzi
do pełnego zakresu niż wdrożenie wielkim wybuchem. Ten koszt czasu to
bezpośrednia, konieczna cena fundamentu zaufania i nadzoru, za którym ta
cała książka opowiada się od pierwszych tematów, a powyższy przykład z
administracji publicznej pokazuje realną, praktyczną korzyść uboczną:
przyrostowe etapy oparte na dowodach są często łatwiejsze do sfinansowania i
uzasadnienia niż jeden duży, niesprawdzony wniosek z góry.

## Antywzorce i pułapki

- **Wdrożenie wielkim wybuchem, kompleksowe, próbowane naraz:** narusza
  główne wskazówki tematu 8.3 i grozi wywołaniem strachu i manipulowania od
  początku.
- **Pomijanie fundamentu nadzoru z etapu 1, by iść szybciej:** dziedziczy
  słaby nadzór w każdy późniejszy etap, drogi do doposażenia później.
- **Wybór niechętnego lub wyznaczonego odgórnie zespołu pilotażowego dla
  etapu 2:** podważa cel budowania zaufania, któremu ma służyć prawdziwy
  pilotaż.
- **Brak wytworzenia lub zakomunikowania wykazalnego rezultatu z każdego
  etapu:** traci bazę dowodową potrzebną do uzasadnienia dalszych inwestycji
  w następny etap.
- **Traktowanie mapy drogowej jako ukończonej, gdy każdego etapu formalnie
  dotknięto:** pomija stałą praktykę oceny dojrzałości, którą temat 8.4
  zaleca jako trwałą, a nie jednorazową dyscyplinę.
- **Sztywne trzymanie się domyślnej kolejności z tego tematu niezależnie od
  faktycznego profilu ryzyka organizacji:** tę mapę drogową należy
  dostosować, a nie stosować mechanicznie bez osądu.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Nie istnieje mapa drogowa; wdrażanie metryk, o ile
  w ogóle zachodzi, jest doraźne i nieuporządkowane.
- **Poziom 2, Rozwój:** Próbowano niektórych etapów, ale fundamentalną pracę
  nad nadzorem pominięto lub wykonano niekompletnie, a rezultaty etapów nie
  są systematycznie dokumentowane.
- **Poziom 3, Standaryzacja:** Etapowa mapa drogowa zgodna z kolejnością
  fundamentów na początku z tego tematu jest udokumentowana i aktywnie
  realizowana, a każdy etap daje wykazalny rezultat.
- **Poziom 4, Zarządzanie:** Rezultaty etapów są systematycznie używane do
  uzasadniania dalszych inwestycji, a mapa drogowa jest świadomie dostosowana
  do konkretnego profilu ryzyka i priorytetów organizacji.
- **Poziom 5, Orkiestracja:** Organizacja ukończyła pełną mapę drogową i
  utrzymuje stałą praktykę oceny dojrzałości z tematu 8.4 jako trwałą
  zdolność, z wykazanym, wieloletnim dorobkiem etapowych, budujących zaufanie
  inwestycji w metryki.

## Pomysły do dyskusji

1. Gdzie nasza organizacja faktycznie stoi w tej etapowej sekwencji w tej chwili?
2. Czy pominęliśmy lub skróciliśmy fundamentalny etap nadzoru i ile nas to kosztowało?
3. Jak wyglądałby prawdziwy, chętny zespół pilotażowy dla naszego następnego rozszerzenia?
4. Jaki wykazalny rezultat z naszego ostatniego etapu mógłby uzasadnić nasz następny wniosek inwestycyjny?
5. Czy ustanowiliśmy stałą praktykę oceny dojrzałości, czy nasza mapa drogowa faktycznie się kończy?

## Kluczowe wnioski

- Przyjmuj wskazówki tej książki **etapami, fundamenty najpierw**, nigdy jako
  wdrożenie wielkim wybuchem, które grozi wywołaniem strachu i manipulowania.
- **Etapu 1 (nadzór) nie wolno pominąć**; każdy późniejszy etap dziedziczy
  jakość nadzoru, którą ten etap ustanawia.
- Użyj **prawdziwego, chętnego zespołu pilotażowego**, by udowodnić wartość i
  zbudować zaufanie, zanim rozszerzysz zakres na całą organizację.
- Każdy etap powinien dać **wykazalny, raportowalny rezultat**, który
  uzasadnia dalszą inwestycję w następny etap.
- Traktuj ukończenie mapy drogowej jako początek **stałej, trwałej praktyki**
  (powtarzalna ocena dojrzałości z tematu 8.4), a nie zakończonego projektu.

## Bibliografia i dalsza lektura

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (baza dowodowa rodzin metryk, które ta mapa drogowa
  porządkuje w kolejności).
- *Leading Change*, John P. Kotter (zasady zarządzania zmianą
  organizacyjną przydatne przy etapowym wdrażaniu programu metryk).
- *The Lean Startup*, Eric Ries (cykl buduj-mierz-ucz-się, na którym opiera
  się etapowe podejście tego tematu: udowodnij wartość, potem rozszerzaj).
- Wskazówki amerykańskiego Government Accountability Office (GAO) o pomiarze
  wyników i ustawie GPRA Modernization Act: praktyka przyrostowego,
  opartego na dowodach finansowania programów w sektorze publicznym.
