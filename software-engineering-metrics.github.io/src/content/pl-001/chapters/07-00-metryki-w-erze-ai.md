# 7.0 Wprowadzenie do części 7: Metryki w erze AI

Każda metryka opisana dotąd w tej książce powstała dla świata, w którym
pisanie kodu było zasobem rzadkim i kosztownym. Narzędzia generatywnej AI
zmieniły to założenie szybciej, niż metryki większości organizacji zdążyły
nadgonić. Gdy narzędzie potrafi w kilka sekund wygenerować wiarygodnie
wyglądający pull request, kilka metryk omówionych w wcześniejszych częściach
przestaje mierzyć to, co mierzyło dotąd. Dotyczy to najwyraźniej zliczania
aktywności (temat 3.4), w dużej mierze surowej częstotliwości wdrożeń
(temat 2.10), a nawet pokrycia testami (temat 4.2), jeśli gonić je
bezmyślnie. Ta część istnieje dlatego, że program metryk, który nie
rozlicza się wprost z tą zmianą, naraża się na raportowanie z pewnością
siebie liczb, które po cichu straciły znaczenie, a w gorszym wypadku
zaczęły działać wbrew celowi.

Cztery tematy tej części układają się w przemyślany łuk. Temat 7.1 nazywa
zmianę wprost i wyjaśnia, dlaczego jest to zmiana paradygmatu, a nie
drobna korekta. Temat 7.2 pokazuje, jak naprawdę mierzyć, czy tworzenie
oprogramowania wspomagane przez AI pomaga, korzystając z zasady
rezultatów ponad produkcją, którą temat 1.3 ustanowił od samego początku
książki. Temat 7.3 nazywa konkretne nowe ryzyka, które ta zmiana niesie:
metryki puchnące bez odpowiadającej im wartości oraz rozmycie jakości,
które wyprzedza obecną zdolność branży do jego wykrywania. Temat 7.4
zamyka część odpowiedzią tej książki na całą zmianę: świadomym zwrotem ku
telemetrii rezultatów jako metrykom, które liczą się najbardziej,
właśnie dlatego, że wolumen produkcji, jak ta część dowodzi od początku do
końca, nigdy nie był właściwym celem optymalizacji, a generatywna AI
sprawiła tylko, że tej prawdy nie da się już ignorować.

Dla dużych zespołów ta część jest pilna, a nie spekulatywna. Duże
przedsiębiorstwa wdrażające asystentów kodowania AI na dużą skalę muszą
szybko wiedzieć, czy ich dotychczasowe metryki wciąż znaczą to, co im się
wydaje. Administracja publiczna, która często podchodzi do AI ostrożniej,
ale podlega tej samej zmianie narzędzi w szerszej branży, z której
rekrutuje i do której się porównuje, potrzebuje wskazówek z tej części,
aby poprawnie interpretować branżowe wartości odniesienia, w miarę jak
same przesuwają się pod tym samym naciskiem.

## Tematy w tej części

- **7.1 Zmiana paradygmatu: generatywna AI:** Dlaczego to fundamentalna
  zmiana tego, co mierzy kilka istniejących metryk, a nie tylko kolejne
  narzędzie do dodania do skrzynki.
- **7.2 Pomiar tworzenia oprogramowania wspomaganego przez AI:** Jak
  mierzyć, czy pomoc AI faktycznie działa, opierając się na danych o
  rezultatach, a nie na wolumenie produkcji.
- **7.3 Inflacja metryk i ryzyko rozmycia jakości:** Konkretne nowe ryzyka
  manipulowania i spadku jakości, które ta zmiana wprowadza, oraz sposoby
  ochrony przed nimi.
- **7.4 Telemetria rezultatów jako nowa gwiazda polarna:** Odpowiedź tej
  książki na całą zmianę: świadomy, trwały zwrot ku metrykom rezultatów,
  skoro produkcja tanieje.

## Jak te tematy się łączą

Temat 7.1 ustala, po co w ogóle istnieje ta część; temat 7.2 daje praktyczne
wskazówki pomiarowe, których wymaga ta zmiana; temat 7.3 nazywa konkretne
sposoby porażki, przed którymi organizacja musi się chronić, wdrażając
tworzenie oprogramowania wspomagane przez AI; a temat 7.4 uogólnia lekcję
w trwałą zasadę, która przetrwa każde konkretne narzędzie i każdego
dostawcę. Ta część jest mniej samodzielną rodziną metryk, jak części od 2
do 6, z których każda obejmuje osobną dziedzinę, a bardziej soczewką
przykładaną z powrotem do całej książki: metryki aktywności, produkcji, a
nawet niektóre metryki rezultatów z każdego wcześniejszego tematu trzeba
ponownie przeanalizować przez pytania tej części, w miarę jak tworzenie
oprogramowania wspomagane przez AI staje się standardem, a nie wyjątkiem.

Ta część łączy się najbardziej bezpośrednio z zasadą rezultatów ponad
produkcją z tematu 1.3 i z ostrzeżeniem przed metrykami aktywności z
tematu 3.4. Obie te zasady okazały się słuszne od zawsze, a teraz pilnie
potwierdza je zmiana technologiczna, która czyni ich przeciwieństwo,
mierzenie wolumenem, aktywnie niebezpiecznym, a nie tylko
nieoptymalnym. Przygotowuje też grunt pod praktyczne wskazówki części 8
o budowaniu programu metryk, ponieważ panel zaprojektowany przed tą zmianą
wymaga świadomego przemyślenia na nowo, a nie tylko drobnych poprawek, w
świetle tego, co omawia ta część.
