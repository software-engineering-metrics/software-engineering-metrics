# 4.5 Pomiar długu technicznego

## Przegląd i motywacja

**[Dług techniczny](https://en.wikipedia.org/wiki/Technical_debt)**,
metafora ukuta przez Warda Cunninghama, opisuje skumulowany koszt dawnych
skrótów, doraźnych decyzji, które pozwoliły coś wydać szybciej, ale
zostawiły bazę kodu trudniejszą do późniejszej zmiany, tak jak dług finansowy
pozwala wydać teraz kosztem odsetek później. Każda baza kodu niesie jakiś
dług techniczny i nie jest to automatycznie porażka. Prawdziwa wartość
metafory polega na tym, że ujmuje dług jako kompromis, którym można
zarządzać, a nie wstydliwy sekret ani nieunikniony, trwały ciężar. Ten temat
dotyczy uczynienia tego kompromisu widocznym i możliwym do zarządzania dzięki
pomiarowi, zamiast zostawiać go jako mglistą, wiecznie spychaną na dalszy
plan obawę, którą czuje każdy inżynier, ale nikt nie może na jej podstawie
działać z dowodami w ręku.

Tematy poprzedzające ten, złożoność (4.1), pokrycie (4.2), rotacja i punkty
zapalne (4.3) oraz analiza statyczna (4.4), każdy ujawnia jedną stronę
długu technicznego. Zadaniem tego tematu jest synteza: zamiana tych osobnych
sygnałów, plus pozycji, które nigdy nie pojawiają się w żadnym
zautomatyzowanym skanie (nieudokumentowany skrót architektoniczny, celowo
odłożona migracja), w jeden, priorytetyzowany, widoczny backlog, który
konkuruje uczciwie o inwestycje z pracą nad funkcjami, zamiast przegrywać tę
konkurencję domyślnie tylko dlatego, że nie ma przypisanej metryki ani
orędownika na spotkaniach planistycznych.

W dużych zespołach niezarządzany dług techniczny kumuluje się w sposób
naprawdę niebezpieczny i łatwy do niedoszacowania: każdy nowy skrót utrudnia
następną zmianę, co tworzy presję na kolejne skróty, co kumuluje się dalej.
Duże przedsiębiorstwa i administracja publiczna utrzymujące systemy przez
wiele lat są szczególnie narażone na ten efekt kumulacji, a główna
rekomendacja tego tematu, widoczny, skwantyfikowany, priorytetyzowany backlog
długu, to mechanizm pozwalający organizacji faktycznie zarządzać tym
kompromisem świadomie, zamiast dryfować ku kryzysowi.

## Kluczowe zasady

- **Dług techniczny to świadoma metafora kompromisu, którym można zarządzać,
  a nie wstydliwy sekret.** Pewien dług zaciągnięty świadomie jest rozsądną
  decyzją biznesową.
- **Niezmierzony dług domyślnie przegrywa konkurencję priorytetów z pracą nad
  funkcjami**, nie dlatego, że znaczy mniej, lecz dlatego, że nie ma
  widocznego orędownika.
- **Kwantyfikuj dług w kategoriach, które decydenci mogą zważyć: koszt
  naprawy kontra koszt jego dźwigania.** Mglista teza "kod jest
  bałaganiarski" rzadko dobrze konkuruje z konkretną prośbą o funkcję.
- **Dług się kumuluje.** Każdy nowy skrót nieznacznie utrudnia przyszłe zmiany,
  a ten efekt przyspiesza, jeśli nie jest zarządzany.
- **Nie cały dług należy spłacać.** Część warto nosić w nieskończoność, jeśli
  koszt naprawy przewyższa koszt życia z nim.

## Rekomendacje

### Zbuduj widoczny, jeden backlog długu technicznego

Skonsoliduj sygnały z wcześniejszych tematów tej części, wartości odstające
złożoności, obszary o niskim odsetku zabitych mutantów, punkty zapalne,
nierozwiązane ustalenia analizy statycznej, wraz z pozycjami długu, które może
zidentyfikować tylko człowiek (skrót architektoniczny, odłożona aktualizacja
zależności, nieudokumentowane obejście), w jeden widoczny backlog,
prowadzony z tym samym rygorem i widocznością co backlog funkcji. Dług, który
żyje tylko w pamięci poszczególnych inżynierów albo w rozproszonych
komentarzach w kodzie, praktycznie nie istnieje do celów priorytetyzacji.

### Kwantyfikuj koszt każdej pozycji długu i koszt jej dźwigania

Dla każdej pozycji oszacuj dwie liczby: koszt naprawy (czas inżynierski,
ryzyko samej naprawy) i koszt dźwigania jej niezałatanej (o ile wolniej idzie
powiązana praca, ile dodatkowego ryzyka defektów niesie, ile innej pracy
blokuje). To ujęcie, zapożyczone wprost z logiki metafory długu finansowego,
daje decydentom realną podstawę porównania z kosztem i oczekiwaną wartością
pracy nad funkcjami, zamiast abstrakcyjnej, niezkwantyfikowanej skargi.

### Priorytetyzuj według wpływu, a nie wieku czy najgłośniejszego orędownika

Szereguj pozycje długu według połączenia kosztu dźwigania i tego, jak często
dotyka się dotknięty kod (dane o rotacji z tematu 4.3 są tu wprost użyteczne):
pozycja w rzadko modyfikowanym zakątku bazy kodu, jakkolwiek nieprzyjemna,
liczy się znacznie mniej niż ta leżąca wprost na drodze twojego najbardziej
aktywnego rozwoju. Oprzyj się priorytetyzacji według tego, która pozycja
leży w backlogu najdłużej albo który inżynier najbardziej uporczywie jej
broni, bo żadne z tego nie koreluje niezawodnie z faktycznym wpływem
biznesowym.

### Przydziel dedykowaną, chronioną zdolność na naprawę długu

Backlog długu, który musi konkurować pozycja po pozycji z każdą przychodzącą
prośbą o funkcję w każdym cyklu planowania, zwykle przegrywa konsekwentnie,
bo praca nad funkcjami ma zazwyczaj wyraźniejszego, bardziej bezpośredniego
orędownika biznesowego. Przydziel chroniony procent zdolności inżynierskiej,
częsty wzorzec to gdzieś między 10% a 20%, konkretnie na naprawę długu,
ustalony z góry, a nie negocjowany od nowa w każdym sprincie, aby spłata długu
odbywała się rutynowo, a nie dopiero po kryzysie.

### Zaakceptuj część długu jako trwałą i powiedz to jawnie

Nie każda pozycja należy do aktywnego planu naprawy. Tam, gdzie koszt naprawy
naprawdę przewyższa koszt dźwigania pozycji w nieskończoność, szczególnie dla
kodu w stabilnym, rzadko dotykanym, wkrótce wycofywanym systemie,
udokumentuj tę decyzję jawnie i przenieś pozycję do celowo odsuniętej
kategorii, zamiast pozwalać jej leżeć w nieskończoność w aktywnym backlogu,
gdzie jej dalsza obecność cicho sugeruje pracę, która nigdy się nie wydarzy.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak formalnego śledzenia długu | Brak narzutu | Dług domyślnie przegrywa konkurencję priorytetów; kumuluje się niewidocznie |
| Nieformalna, doraźna świadomość długu | Niski narzut, pewna widoczność | Niespójna; opiera się na pamięci i orędownictwie jednostek |
| Formalny, skwantyfikowany backlog długu | Konkuruje uczciwie o inwestycje; umożliwia świadome kompromisy | Wymaga stałego utrzymania i dyscypliny kwantyfikacji |
| Chroniona, dedykowana zdolność naprawcza | Zapewnia spójną spłatę, nie tylko reaktywną | Zmniejsza w krótkim terminie zdolność dostępną dla pracy nad funkcjami |

Główne napięcie to **presja natychmiastowego dostarczania kontra
długoterminowa łatwość utrzymania**. Praca nad funkcjami ma niemal zawsze
wyraźniejszego, bardziej bezpośredniego orędownika biznesowego niż naprawa
długu, co tworzy strukturalną presję, by dług przegrywał każdą pojedynczą
decyzję priorytetyzacyjną, nawet gdy jego łączny koszt jest wysoki. Rozwiąż to
napięcie, całkowicie usuwając naprawę długu z konkurencji pozycja po pozycji
przez chronioną, wcześniej przydzieloną zdolność, tak aby kompromis był
rozstrzygany świadomie i z góry, a nie rozpatrywany od nowa, i zwykle
przegrywany, w każdym cyklu planowania.

## Pytania do omówienia z zespołem

1. **Czy mamy jeden, widoczny backlog długu technicznego, czy świadomość długu
   żyje głównie w głowach poszczególnych inżynierów?** Jeśli uczciwa
   odpowiedź brzmi, że to drugie, to największa luka, którą ten temat zaleca
   zamknąć jako pierwszą.

2. **Czy dla naszej najważniejszej pozycji długu potrafimy podać koszt naprawy
   i koszt dźwigania na tyle konkretnie, by uczciwie porównać go z prośbą o
   funkcję?** Jeśli nie, przećwiczcie tę kwantyfikację razem jako ćwiczenie
   grupowe na prawdziwej, bieżącej pozycji.

3. **Jaki procent naszej zdolności inżynierskiej faktycznie idzie na naprawę
   długu i czy ten procent został ustalony świadomie, czy jest po prostu tym,
   co zostaje po przydzieleniu pracy nad funkcjami?** Spójrz na swoje
   faktyczne ostatnie sprinty i policz prawdziwą liczbę, zamiast polegać na
   wrażeniu.

4. **Czy nasz backlog długu jest priorytetyzowany według prawdziwego wpływu
   biznesowego, czy według pozycji, która była podnoszona najuporczywiej albo
   leży tam najdłużej?** Zestaw swoją obecną priorytetyzację z danymi o
   rotacji (temat 4.3) i sprawdź, czy się zgadzają.

5. **Które pozycje długu powinniśmy jawnie zaakceptować jako trwałe, zamiast
   pozwalać im leżeć w nieskończoność w aktywnym backlogu?** Wskaż co najmniej
   jedną realną pozycję, w której koszt naprawy naprawdę przewyższa koszt
   dźwigania, i omów przeniesienie jej do jawnie odsuniętego statusu.

6. **Jak zmienił się nasz backlog długu w ostatnim roku, rósł, malał czy
   stał w miejscu, i czy ten trend zgadza się z naszą intuicją?** Śledź to w
   czasie, a nie tylko patrz na pojedynczą migawkę. Trend jest często
   bardziej pouczający niż bezwzględny rozmiar w danej chwili.

## Perspektywa sektorowa

**Startup.** Świadomy, poinformowany dług jest na tym etapie często rozsądną
strategią: szybkie wydawanie, by zweryfikować hipotezę, z jasnym planem
powrotu do konkretnych skrótów, jeśli produkt się sprawdzi, to zasadna
wymiana, a nie porażka. Ryzyko to utrata rozeznania, które skróty były
świadome i odwracalne, a które po cichu stały się trwałymi, nieprzebadanymi
zobowiązaniami w miarę wzrostu bazy kodu.

**Mała firma.** Prosta, wspólna lista, nawet nieformalna, nazywająca znane
skróty i ich przybliżony koszt naprawy jest w tej skali zwykle wystarczająca.
Główna dyscyplina warta przyjęcia to okresowe wracanie do tej listy, zamiast
pozwalać jej cicho się kumulować i stać się niewidoczną przez przyzwyczajenie.

**Duże przedsiębiorstwo.** Chroniona, wcześniej przydzielona zdolność naprawcza
ma tu największe znaczenie, bo pojedyncza konkurencja priorytetów między
długiem a pracą nad funkcjami niezawodnie faworyzuje funkcje w dziesiątkach
zespołów jednocześnie, jeśli nie ma strukturalnej przeciwwagi. Ustandaryzuj
praktykę kwantyfikacji długu w całej organizacji, aby pozycje długu można było
uczciwie porównywać między zespołami przy decyzjach inwestycyjnych na poziomie
portfela.

**Administracja publiczna.** Długowieczne systemy kumulują dług przez lata lub
dekady przyrostowych, pojedynczo rozsądnych zmian wymagań, często bez
jakiegokolwiek formalnego śledzenia długu, dopóki kryzys nie wymusi sprawy.
Skwantyfikowany, widoczny backlog długu to naprawdę przekonujące narzędzie do
uzasadniania budżetu modernizacji wobec organów nadzoru, bo zamienia mglistą
tezę "system jest stary" w konkretne, wycenione uzasadnienie inwestycji.

## Przykłady

**Przedsiębiorstwo.** Platforma rozliczeń firmy telekomunikacyjnej
nagromadziła ponad dekadę nieformalnie uznawanego, ale nigdy formalnie
nieśledzonego długu technicznego, a inżynierowie rutynowo mówili na
retrospektywach "silnik rozliczeń to bałagan" bez żadnej konsekwencji. Nowy
dyrektor inżynierii zażądał od każdego zespołu zbudowania skwantyfikowanego
backlogu długu z szacunkiem kosztu naprawy i kosztu dźwigania dla każdej
pozycji i przydzielił stałe 15% zdolności inżynierskiej na naprawę długu
na przyszłość. W ciągu roku pięć pozycji o najwyższym koszcie dźwigania,
stanowiących niewielki ułamek całego backlogu liczbowo, zostało
rozwiązanych, a odsetek nieudanych zmian (temat 2.10) dla wdrożeń związanych
z rozliczeniami mierzalnie się poprawił, co pokazało nieproporcjonalny wpływ
celowania najpierw w pozycje o najwyższym koszcie dźwigania, zamiast
przechodzenia przez backlog w dowolnej kolejności.

**Administracja publiczna.** Główny system przetwarzania danych krajowej
agencji statystycznej, zbudowany ponad dwadzieścia lat wcześniej, nigdy nie
miał formalnej oceny długu, mimo powszechnego nieformalnego uznania wśród
pracowników, że znaczne jego części są kruche i słabo rozumiane. Ustrukturyzowana
ocena długu, łącząca ustalenia analizy statycznej, dane o punktach zapalnych i
rozmowy z nielicznymi pozostałymi inżynierami, którzy rozumieli najstarsze
komponenty, dała skwantyfikowany, priorytetyzowany backlog, który wprost
poparł wieloletni wniosek budżetowy na modernizację. Co kluczowe, ocena
jawnie wskazała też kilka stabilnych, rzadko dotykanych starych komponentów
jako zasadnie pozostawialnych bez zmian, unikając niepotrzebnie szerokiego i
drogiego pełnego przepisania systemu na rzecz celowanej inwestycji w
konkretne obszary, które według danych niosły najwyższy bieżący koszt.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot ze świadomego zarządzania długiem technicznym to uniknięty koszt
kumulacji: każdy nieobsłużony skrót nieznacznie utrudnia przyszłe zmiany, a
ten efekt przyspiesza bez interwencji, w końcu dając bazę kodu tak kruchą, że
nawet proste zmiany stają się powolne i ryzykowne. Przykład telekomunikacyjny
powyżej pokazuje ten zwrot konkretnie: celowanie w niewielką liczbę pozycji
o najwyższym koszcie dźwigania dało mierzalną poprawę dostarczania i jakości,
nieproporcjonalną do skromnego ułamka całego backlogu, jaki te pozycje
stanowiły.

Całkowity koszt posiadania to chroniona zdolność przydzielona na naprawę,
zwykle 10% do 20% czasu inżynierskiego, co jest realnym, widocznym kosztem,
który w krótkim terminie konkuruje z tempem dostarczania funkcji. Warto ten
koszt ponieść, bo alternatywa, niezarządzany, kumulujący się dług, w końcu
kosztuje znacznie więcej w postaci spowolnionego dostarczania i podwyższonego
odsetka defektów w całej bazie kodu, a nie tylko w konkretnych pozycjach
pozostawionych bez obsługi.

## Antywzorce i pułapki

- **Brak widocznego, śledzonego backlogu długu:** dług domyślnie przegrywa
  konkurencję priorytetów i kumuluje się niewidocznie.
- **Mgliste, niezkwantyfikowane tezy o długu:** rzadko dobrze konkurują z
  konkretnymi, skwantyfikowanymi prośbami o funkcje w planowaniu.
- **Priorytetyzowanie długu według wieku lub głośności orędownictwa zamiast
  wpływu:** kieruje ograniczoną zdolność naprawczą w złą stronę.
- **Brak chronionej zdolności na naprawę:** spłata długu dzieje się tylko
  reaktywnie, po kryzysie, a nie jako rutynowa, świadoma praktyka.
- **Traktowanie całego długu jako równie wartego naprawy:** marnuje wysiłek na
  pozycje o niskim wpływie, podczas gdy pozycje o wysokim koszcie dźwigania
  pozostają bez obsługi.
- **Pozwalanie, by dług leżał w nieskończoność w aktywnym backlogu bez
  decyzji, że jest trwały:** sugeruje przyszłą pracę, która nigdy się nie
  wydarzy, i zaśmieca prawdziwą priorytetyzację.

## Model dojrzałości

- **Poziom 1, Inicjacja:** O długu technicznym mówi się nieformalnie, bez
  śledzonego backlogu i kwantyfikacji. Konsekwentnie przegrywa z pracą nad
  funkcjami.
- **Poziom 2, Rozwój:** Niektóre zespoły śledzą dług nieformalnie, ale brakuje
  spójnej kwantyfikacji, widoczności między zespołami lub chronionej zdolności
  naprawczej.
- **Poziom 3, Standaryzacja:** Widoczny, skwantyfikowany backlog długu istnieje
  w całej organizacji, ze spójnie przydzieloną chronioną zdolnością naprawczą.
- **Poziom 4, Zarządzanie:** Pozycje długu są priorytetyzowane według
  zmierzonego wpływu (koszt dźwigania połączony z rotacją), a dług zaakceptowany
  jako trwały jest jawnie udokumentowany, a nie pozostawiony niejednoznaczny.
- **Poziom 5, Orkiestracja:** Organizacja potrafi wskazać konkretne,
  mierzalne poprawy dostarczania lub jakości wynikające z celowanej naprawy
  długu, a zarządzanie długiem jest rutynowym, zaufanym wejściem do decyzji
  inwestycyjnych w inżynierii obok pracy nad funkcjami.

## Pomysły do dyskusji

1. Jaka jest nasza obecna pozycja długu o najwyższym koszcie dźwigania i czy potrafilibyśmy ją skwantyfikować?
2. Jaki procent naszej zdolności faktycznie idzie dziś na naprawę długu?
3. Którą pozycję długu powinniśmy jawnie zaakceptować jako trwałą, zamiast zostawiać niejednoznacznie w backlogu?
4. Czy nasz backlog długu urósł, zmalał czy stał w miejscu w ostatnim roku?
5. Co ujawniłaby skwantyfikowana ocena długu, czego brakuje naszej obecnej nieformalnej świadomości?

## Kluczowe wnioski

- Dług techniczny to **kompromis, którym można zarządzać, a nie wstydliwy
  sekret**. Kwantyfikuj go, zamiast zostawiać jako mglistą, wiecznie spychaną
  na dalszy plan troskę.
- **Kwantyfikuj koszt naprawy kontra koszt dźwigania** dla każdej pozycji,
  aby konkurowała uczciwie z pracą nad funkcjami.
- **Priorytetyzuj według wpływu** (koszt dźwigania połączony z rotacją), a nie
  według wieku czy głośności orędownictwa.
- Przydziel **chronioną, dedykowaną zdolność naprawczą**, ustaloną z góry, bo
  dług inaczej niezawodnie przegrywa konkurencję pozycja po pozycji z pracą
  nad funkcjami.
- **Jawnie zaakceptuj część długu jako trwałą**, gdy koszt naprawy przewyższa
  koszt dźwigania, zamiast zostawiać go niejednoznacznie w aktywnym backlogu.

## Bibliografia i dalsza lektura

- Cunningham, Ward, "The WyCash Portfolio Management System" (raport z
  doświadczeń OOPSLA, 1992): źródło metafory długu technicznego.
- *Managing Technical Debt: Reducing Friction in Software Development*,
  Philippe Kruchten, Robert Nord i Ipek Ozkaya (kompleksowe ujęcie pomiaru i
  zarządzania długiem technicznym).
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler
  (techniki naprawy, na których ostatecznie opiera się backlog długu).
- *Your Code as a Crime Scene*, Adam Tornhill (analiza punktów zapalnych jako
  wejście do priorytetyzacji długu, temat 4.3).
