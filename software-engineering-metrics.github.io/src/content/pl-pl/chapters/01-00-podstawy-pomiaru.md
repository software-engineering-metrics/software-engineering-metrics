# 1.0 Wprowadzenie do części 1: Podstawy pomiaru

Zanim ta książka nazwie choć jedną metrykę, musi odpowiedzieć na trudniejsze
pytanie: do czego służy pomiar? Każdy zespół, który zbudował panel metryk,
prędzej czy później patrzył, jak liczba się poprawia, podczas gdy to, co miała
przedstawiać, się pogarsza. To nie jest porażka narzędzi. To przewidywalny
skutek pominięcia podstaw, które omawia ta część: po co w ogóle mierzysz, co
dzieje się z metryką, gdy ludzie wiedzą, że ktoś ją obserwuje, jak przesunąć
wagę z aktywności na rezultaty, kto jest właścicielem liczby i jej definicji,
skąd naprawdę pochodzą dane i jak czytać zaszumiony sygnał, nie dając się
oszukać samemu sobie.

Dla dużych zespołów te podstawy przestają być opcjonalne. Pojedynczy zespół
może poprzestać na doraźnej liczbie, na którą kierownik zerka raz w tygodniu.
Organizacja z setkami inżynierów, dziesiątkami paneli i kierownictwem, które
raportuje wyżej, już nie może. W takiej skali metryka bez właściciela albo źle
zdefiniowana myli nie tylko jeden zespół, lecz wszystkich dalej w łańcuchu,
którzy ufają liczbie, nie sprawdzając, jak ją zbudowano. Do tego trudno ją
naprawić, gdy zachowania zdążyły już dostosować się do jej manipulowania.

Duże przedsiębiorstwa i administracja publiczna odczuwają to najmocniej,
ponieważ ich metryki często niosą konsekwencje wykraczające poza zespół, który
je wytwarza: decyzje budżetowe, publiczne raporty o wynikach, ustalenia
audytu i umowy z dostawcami. Metryka, która wygląda na wewnętrzną wygodę
inżynierów, może po cichu stać się kluczowym, niekwestionowanym wsadem do
decyzji podejmowanych przez ludzi, którzy nigdy nie widzą potoku, jaki ją
wygenerował. Solidne podstawy sprawiają, że ten ciężar da się unieść.

## Tematy w tej części

- **1.1 Po co mierzyć inżynierię oprogramowania:** Argumenty za samym
  pomiarem, to, co ma on osiągnąć, oraz różnica między mierzeniem po to, by
  się uczyć, a mierzeniem po to, by oceniać.
- **1.2 Prawo Goodharta i psychologia metryk:** Jedna idea, która rządzi
  każdym innym tematem w tej książce: miara, która staje się celem, przestaje
  być dobrą miarą, oraz mechanizmy psychologiczne, które sprawiają, że
  manipulowanie metrykami jest niemal nieuniknione, gdy ludzie wiedzą, że są
  obserwowani.
- **1.3 Rezultaty ponad produkcję: wybór tego, co mierzyć:** Jak przesunąć
  zestaw metryk w stronę rezultatów zamiast aktywności, korzystając z
  klasycznego rozróżnienia nakłady/produkcja/rezultaty i wzorca gwiazdy
  polarnej.
- **1.4 Nadzór nad metrykami i ich własność:** Kto decyduje, co się mierzy,
  kto jest właścicielem definicji i jak karta metryk chroni rosnący panel
  przed przekształceniem się w bezpańskie rumowisko.
- **1.5 Źródła danych i instrumentacja:** Skąd naprawdę biorą się metryki
  inżynierskie, instrumentacja kontra samoocena oraz problemy z jakością
  danych, które po cichu unieważniają panel, zanim ktokolwiek to zauważy.
- **1.6 Kompetencje statystyczne dla metryk inżynierskich:** Minimum osądu
  statystycznego, jakiego zespół potrzebuje, by czytać metrykę uczciwie:
  percentyle kontra średnie, wielkość próby, regresja do średniej i zmienne
  zakłócające.

## Jak te tematy się łączą

Te sześć tematów buduje się w ścisłej kolejności. Temat 1.1 pyta, po co w
ogóle mierzyć, co ma znaczenie, bo zespół, który nie odpowiedział na to
pytanie, będzie zbierał liczby, na podstawie których nikt nic nie robi. Temat
1.2 jest osią, wokół której obraca się reszta książki: gdy przyjmiesz, że
każda miara może stać się celem i zostać zmanipulowana, rekomendacje każdego
kolejnego tematu wynikają z projektowania przeciw temu ryzyku. Temat 1.3
zamienia tę ostrożność w regułę pozytywną: przesuwaj wagę w stronę
rezultatów, bo to kategoria, którą najtrudniej tanio zmanipulować. Temat 1.4
urealnia nadzór, temat 1.5 urealnia dane, a temat 1.6 daje ci osąd
statystyczny, który chroni przed pomyleniem się przez szum, nawet gdy nadzór i
instrumentacja są już w porządku.

Wszystko, co dalej, zależy od tej części. Metryki przepływu i metryki DORA z
części 2 oraz ramy SPACE z części 3 są w gruncie rzeczy praktycznymi
przykładami zasad ważenia rezultatów i parowania z barierami ochronnymi,
wyłożonych w tematach 1.2 i 1.3. Wskazówki dotyczące projektowania paneli w
temacie 8.1 zakładają model nadzoru z tematu 1.4. A model dojrzałości, który
zamyka każdy temat w tej książce, jest pod swoimi pięcioma poziomami modelem
dojrzałości właśnie tej dyscypliny, którą wprowadza ta część: mierzenia na
serio i sprawdzania własnej pracy.
