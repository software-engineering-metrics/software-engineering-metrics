# 5.0 Wprowadzenie do części 5: Metryki produktowe i biznesowe

Pierwsze cztery części tej książki mierzą wewnętrzny świat inżynierii:
dostarczanie, doświadczenie programistów i jakość kodu. Ta część wychodzi poza
tę granicę i zadaje pytanie, któremu każda metryka inżynierska służy w
ostatecznym rozrachunku, bezpośrednio lub po kilku krokach: czy ta praca
rzeczywiście pomogła biznesowi i ludziom, którzy korzystają z tego, co powstaje.
Temat 1.3 ustanowił wcześniej w tej książce zasadę nadrzędną: rezultaty ponad
produkcją. Tutaj ta zasada przechodzi najostrzejszy sprawdzian, bo rezultaty
produktowe i biznesowe są najdalej od kontroli pojedynczego inżyniera i
najtrudniej je czysto przypisać wysiłkowi inżynierskiemu.

Właśnie ta trudność sprawia, że ta część ma znaczenie. Organizacja, która nigdy
nie łączy swoich metryk dostarczania i jakości z rezultatami produktowymi i
biznesowymi, ryzykuje, że będzie pięknie optymalizować nie to, co trzeba:
szybko wypuszczać funkcję, której nikt nie używa, i to przy znakomitym pokryciu
testami, albo utrzymywać nieskazitelną jakość kodu w systemie, którego główna
propozycja wartości po cichu przestała obchodzić klientów. Pięć tematów tej
części, czyli uciekające defekty, adopcja funkcji, rezultaty dla klientów i
biznesu, ekonomia jednostkowa oraz zwrot z inwestycji, daje kierownictwu
inżynierskiemu słownik do opisania tego połączenia, a kierownictwu biznesowemu
sposób oceny inwestycji inżynierskich w kategoriach, które naprawdę go
obchodzą.

W dużych zespołach to właśnie w tej części często wygrywa się albo przegrywa
wiarygodność całego programu metryk u interesariuszy z kadry zarządzającej.
Kierownictwo dużego przedsiębiorstwa zatwierdzające wielomilionowe inwestycje
platformowe i organy nadzorcze administracji publicznej zatwierdzające budżety
technologiczne państwa potrzebują odpowiedzi wyrażonych w kategoriach
rezultatów biznesowych lub obywatelskich, a nie częstotliwości wdrożeń czy
pokrycia testami, choćby te wewnętrzne metryki były prowadzone wzorowo. Ta część
łączy wreszcie staranne, chronione barierami metryki z reszty książki z tą
zewnętrzną rozmową o rezultatach.

## Tematy w tej części

- **5.1 Wskaźnik uciekających defektów i ucieczki jakości:** Metryka jakości,
  która najbezpośredniej odzwierciedla to, czego klienci faktycznie
  doświadczają, w odróżnieniu od wewnętrznych metryk jakości z części 4.
- **5.2 Metryki adopcji i użycia funkcji:** Czy to, co zbudowała inżynieria,
  jest rzeczywiście używane, oraz konkretne sposoby, na jakie dane o adopcji
  bywają błędnie interpretowane.
- **5.3 Metryki rezultatów dla klientów i biznesu:** Łączenie pracy inżynierskiej
  z rezultatami, na których zależy biznesowi lub misji publicznej.
- **5.4 Koszty i ekonomia jednostkowa inżynierii:** Wyrażanie kosztów inżynierii
  w kategoriach, z których interesariusz finansowy może korzystać bezpośrednio.
- **5.5 Zwrot z inwestycji w inicjatywy inżynierskie:** Budowanie rzetelnego,
  dającego się obronić uzasadnienia ROI dla dużej inwestycji inżynierskiej oraz
  równie uczciwe przyznanie, gdy to uzasadnienie się nie broni.

## Jak te tematy się łączą

Temat 5.1 zaczyna najbliżej domu: od jakości w takiej postaci, w jakiej klienci
doświadczają jej bezpośrednio, i jest naturalnym mostem od wewnętrznych metryk
jakości z części 4. Temat 5.2 zadaje kolejne pytanie, gdy jakość jest już
rozliczona: czy ktokolwiek faktycznie używa tego, co zbudowano. Temat 5.3
poszerza obiektyw jeszcze bardziej, na pełen zakres rezultatów dla klientów i
biznesu, które obchodzą organizację, a z których użycie jest tylko jednym
sygnałem spośród kilku. Tematy 5.4 i 5.5 nadają potem całej części wymiar
finansowy: wyrażają koszt i zwrot z inżynierii w kategoriach powiązanych
bezpośrednio z decyzjami budżetowymi i inwestycyjnymi, zamykając pętlę
otwartą na początku tej części pytaniem, czy wysiłek inżynierski faktycznie
pomógł.

Tematy tej części opierają się szczególnie mocno na kompetencjach
statystycznych z tematu 1.6, ponieważ rezultaty produktowe i biznesowe są często
zaszumione, zakłócone przez warunki rynkowe i wolno się potwierdzają, czyli w
dokładnie tych warunkach, w których błędy ostrzegane w temacie 1.6 najchętniej
prowadzą do pewnego siebie, błędnego wniosku. Czytaj tę część razem z częścią 7,
gdzie przejście na generatywną AI podnosi stawkę za poprawny pomiar rezultatów
właśnie dlatego, że wolumen produkcji, jak konsekwentnie argumentują tematy
tej części, nigdy nie był właściwą rzeczą do optymalizowania.
