# 2.0 Wprowadzenie do części 2: Metryki przepływu

Jeśli część 1 jest filozofią pomiaru, to część 2 jest miejscem, w którym ta
filozofia spotyka samo dostarczanie: metryki opisujące nie tylko to, jak
szybko i jak bezpiecznie zespół przenosi kod od pomysłu do działającego
systemu, lecz także to, jaki rodzaj wartości w ogóle płynie przez ten potok.
Część jest zorganizowana wokół **Flow Framework**, modelu stworzonego przez
Mika Kerstena w jego książce *Project to Product* z 2018 roku, który traktuje
dostarczanie oprogramowania jako strumień wartości i daje temu strumieniowi
wspólne słownictwo: cztery typy elementów przepływu i pięć metryk przepływu,
które łączą aktywność inżynierską ze strategią biznesową w terminach
użytecznych dla interesariusza bez wykształcenia technicznego.

Wybór takich ram organizujących jest przemyślany. Metryki DORA, czyli
częstotliwość wdrożeń, czas realizacji, odsetek nieudanych zmian i czas
przywracania, są rzeczywiście potwierdzone badaniami i pozostają jednymi z
najlepiej udokumentowanych ram dostarczania, ale mierzą mechanikę potoku, a
nie to, co przez niego płynie. Zespół może pokazywać znakomite liczby DORA,
podczas gdy faktycznie dostarczana wartość po cichu dryfuje w stronę poprawek
albo oddala się od pracy nad długiem i ryzykiem, która chroni przyszłość
systemu. Ta część omawia DORA w całości, ale jako jeden, skonsolidowany temat
referencyjny na końcu (temat 2.10), bo pilniejsze i częściej brakujące pytanie
dla większości organizacji nie brzmi "jak szybki jest nasz potok", lecz "co
nasz potok faktycznie dostarcza". Każdy temat w tej części nadal stosuje tę
samą dyscyplinę, którą ustaliła część 1: określ metrykę, nazwij sposób jej
manipulowania i sparuj ją z barierą ochronną, która tę manipulację wychwytuje.

Dla dużych zespołów metryki przepływu umożliwiają porównywanie zespołów bez
tracenia wartości z oczu. Zespół platformowy, zespół mobilny i zespół danych
mogą mieć w codziennej pracy niemal niewiele wspólnego, ale tempo przepływu i
rozkład przepływu, liczone spójnie, pozwalają kierownictwu zadać wszystkim
trzem uczciwe pytanie: czy ten zespół dostarcza rodzaj wartości, jakiego
faktycznie wymaga jego obecna faza. Duże przedsiębiorstwa i administracja
publiczna opierają się na metrykach tej części, by uzasadniać inwestycje w
platformy, porównywać zwrot z konkurencyjnych wysiłków modernizacyjnych i
wykazywać, dowodami zamiast anegdotami, że zdolności inżynierskie są
przydzielane tak, jak sądzi kierownictwo.

## Tematy w tej części

- **2.1 Flow Framework:** Pochodzenie ram, ich model strumienia wartości i
  powód, dla którego ta książka używa ich, a nie samego DORA, do organizacji
  metryk dostarczania i przepływu.
- **2.2 Elementy przepływu: funkcje, defekty, ryzyka i dług:** Czterotypowa
  taksonomia ram, jej alokacja zdolności o sumie zerowej i to, jak
  klasyfikacja bywa manipulowana, gdy stosuje się ją wstecznie.
- **2.3 Tempo przepływu i rozkład przepływu:** Ile zostało dostarczone i jakiego
  rodzaju była to wartość, zawsze czytane razem.
- **2.4 Czas przepływu i obciążenie przepływu:** Jak prawo Little'a dowodzi, że
  przeciążony strumień wartości matematycznie zwalnia, a nie tylko
  prawdopodobnie.
- **2.5 Efektywność przepływu i praca w toku:** Dlaczego bycie zajętym nie
  znaczy bycia szybkim i jak ograniczanie pracy w toku, wbrew intuicji,
  poprawia przepustowość.
- **2.6 Czas cyklu i jego składniki:** Rozbicie czasu inżynierskiego zmiany na
  poszczególne etapy, aby zespół wiedział dokładnie, gdzie ucieka czas.
- **2.7 Teoria kolejek:** Matematyka stojąca za obciążeniem przepływu, czasem
  przepływu, czasem cyklu i pracą w toku oraz powód, dla którego czas
  oczekiwania na wspólny zasób gwałtownie rośnie, gdy wykorzystanie zbliża
  się do granicy.
- **2.8 Metryki strumienia wartości w Lean:** Klasyczny zestaw narzędzi Lean,
  czyli czas realizacji, czas przetwarzania, czas cyklu, odsetek pracy
  kompletnej i dokładnej oraz takt time, od którego wywodzą się metryki tej
  części specyficzne dla oprogramowania, i sposób połączenia obu słowników.
- **2.9 Metryki pull requestów i przeglądu kodu:** Metryki, które żyją
  wewnątrz pojedynczego etapu potoku dostarczania, i to, jak mogą
  zniekształcić jakość przeglądu, jeśli używa się ich beztrosko.
- **2.10 Ramy metryk DORA:** Cztery metryki DORA w całości, umieszczone
  celowo na końcu, ponieważ mierzą potok, a nie wartość, która nim płynie.

## Jak te tematy się łączą

Temat 2.1 wprowadza Flow Framework jako całość; temat 2.2 podaje jego
taksonomię elementów przepływu, a tematy 2.3 i 2.4 obejmują razem jego pięć
metryk przepływu: tempo i rozkład razem, potem czas i obciążenie razem, przy
czym obciążenie i czas są związane bezpośrednio z prawem Little'a. Tematy od
2.5 do 2.7 przybliżają mechanikę stojącą za czasem przepływu i czasem cyklu:
efektywność przepływu i praca w toku wyjaśniają, dlaczego etapy inżynierskie
są często wolniejsze, niż się wydaje, czas cyklu rozkłada tę część
inżynierską na etapy, a teoria kolejek formalizuje, w dowodliwych terminach
matematycznych, dlaczego wszystkie twierdzenia wcześniejszych tematów o
obciążeniu, czasie oczekiwania i wykorzystaniu są prawdziwe. Temat 2.8
cofa się, by prześledzić to wszystko do źródła w klasycznym mapowaniu
strumienia wartości w Lean, wspólnym słowniku, z którego uogólniają się
metryki tej części specyficzne dla oprogramowania. Temat 2.9 obejmuje jeden
etap potoku, który większość zespołów potrafi poprawić najszybciej. Temat 2.10
zamyka część metrykami DORA w całości, przedstawionymi jako dobrze
udokumentowana, ale węższa warstwa referencyjna, gdy szerszy, zorientowany na
biznes obraz z wcześniejszych tematów jest już w polu widzenia.

Dyscyplina barier ochronnych w tej części łączy się bezpośrednio z tematem
1.2: tempa przepływu nigdy nie raportuje się bez rozkładu przepływu obok, a
metryki szybkości DORA pozostają sparowane z jego metrykami stabilności, tak
aby zespół nie mógł poprawić liczby dotyczącej szybkości, po cichu
dostarczając bardziej ryzykowny kod lub węższą mieszankę wartości. To
parowanie nie jest dla żadnych z tych ram przypadkowe; jest ich centralnym
wglądem, a metryki niezawodności z części 6 przenoszą tę samą, stabilnościową
połowę pary na eksploatację produkcyjną, gdy kod został już dostarczony.
