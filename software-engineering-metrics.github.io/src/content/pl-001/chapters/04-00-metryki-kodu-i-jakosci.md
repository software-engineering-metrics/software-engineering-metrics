# 4.0 Wprowadzenie do części 4: Metryki kodu i jakości

Części 2 i 3 mierzyły, jak porusza się praca i jak miewają się ludzie, którzy
ją wykonują. Ta część zwraca się ku samemu artefaktowi: kodowi i temu, co
metryka może, a czego nie może powiedzieć o jego jakości. Metryki jakości
kodu mają najdłuższą historię spośród wszystkich rodzin metryk w tej
książce, złożoność cyklomatyczna sięga 1976 roku, i odpowiednio najdłuższą
historię nadużyć. Ta część traktuje tę historię poważnie: każdy temat
nazywa naprawdę użyteczny sygnał obok konkretnego, dobrze udokumentowanego
sposobu, w jaki ten sygnał bywa manipulowany, gdy tylko stanie się celem.

Wspólny wątek łączący te sześć tematów jest taki, że żadna pojedyncza metryka
kodu sama nie oddaje jakości, a kilka z najpopularniejszych aktywnie wprowadza
w błąd, gdy ściga się je w izolacji. Wysoki procent pokrycia testami może
współistnieć z testami, które nie weryfikują niczego istotnego. Niski wynik
złożoności może współistnieć z kodem technicznie prostym, ale koncepcyjnie
niespójnym. Każdy temat tej części zestawia swoją główną metrykę z
uzupełniającą kontrolą, która wyłapuje jej konkretną ślepą plamę: złożoność
z kontekstem łatwości utrzymania, pokrycie z testowaniem mutacyjnym, rotację
kodu z analizą punktów zapalnych, analizę statyczną z ludzkim osądem, a dług
techniczny z priorytetyzowaną naprawą zamiast stale rosnącego, niekochanego
backlogu.

W dużych zespołach metryki kodu i jakości umożliwiają zarządzanie bazą kodu
zbyt dużą, by jakakolwiek jedna osoba mogła ją mieć w głowie. Pięcioosobowy
zespół może polegać na wspólnej wiedzy milczącej o tym, które części systemu
są kruche. Organizacja pięciuset inżynierów obejmująca dziesiątki usług
potrzebuje zinstrumentowanych sygnałów, by tę kruchość znajdować
systematycznie. Duże przedsiębiorstwa i administracja publiczna, często
utrzymujące bazy kodu liczone w dekadach, a nie latach, polegają na metrykach
tej części, by ustalić, gdzie ograniczone inwestycje w utrzymanie przyniosą
najwięcej dobrego.

## Tematy w tej części

- **4.1 Metryki złożoności kodu:** Złożoność cyklomatyczna i jej krewni, co
  faktycznie przewidują i ich dobrze udokumentowane ryzyko manipulowania.
- **4.2 Pokrycie testami i skuteczność testów:** Dlaczego sam procent pokrycia
  mówi mniej, niż się wydaje, i jak testowanie mutacyjne zamyka tę lukę.
- **4.3 Rotacja kodu i analiza punktów zapalnych:** Znajdowanie konkretnego,
  niewielkiego ułamka bazy kodu odpowiadającego za nieproporcjonalną część
  defektów i kosztów utrzymania.
- **4.4 Analiza statyczna i metryki zapachów kodu:** Zautomatyzowane sygnały
  jakości kodu, ich realna wartość i granice wobec ludzkiego osądu.
- **4.5 Pomiar długu technicznego:** Zamiana niewidocznego, nieformalnie
  omawianego zobowiązania w widoczny, priorytetyzowany, możliwy do
  zarządzania portfel.
- **4.6 Metryki dokumentacji i wiedzy:** Mierzenie, czy dokumentacja
  faktycznie pomaga, a nie tylko czy istnieje.

## Jak te tematy się ze sobą wiążą

Te sześć tematów buduje od najmniejszej jednostki kodu na zewnątrz. Temat 4.1
zaczyna na poziomie pojedynczej funkcji lub metody. Temat 4.2 pyta, czy testy
faktycznie weryfikują zachowanie tej jednostki. Temat 4.3 oddala widok, by
znaleźć, które pliki i moduły w całej bazie kodu zasługują na uwagę w
pierwszej kolejności. Temat 4.4 dodaje warstwę zautomatyzowanych narzędzi,
które nieustannie skanują całość. Temat 4.5 zamienia nagromadzone ustalenia z
wszystkich czterech w zarządzany, priorytetyzowany backlog zamiast
rozproszonej, nieadresowanej obawy. Temat 4.6 zamyka część, mierząc, czy
wiedza potrzebna do bezpiecznego utrzymania tego wszystkiego jest faktycznie
udokumentowana i możliwa do znalezienia.

Ta część łączy się wprost z powrotem z metrykami stabilności z części 2:
odsetek nieudanych zmian (temat 2.10) jest w dużej mierze następstwem jakości
kodu, którą ta część mierzy wcześniej w strumieniu. Łączy się też naprzód z
metrykami produktowymi z części 5, bo defekty, które uciekły na produkcję
(temat 5.1), bardzo często da się wyśledzić do dokładnie tych punktów
zapalnych złożoności i luk w pokryciu, które ta część ma ujawniać, zanim w
ogóle trafią na produkcję.
