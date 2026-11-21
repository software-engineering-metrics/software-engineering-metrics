# 6.2 Metryki incydentów: wykrywanie, reakcja i przywracanie

## Przegląd i motywacja

Ten temat mierzy, co się dzieje, gdy budżet błędów z tematu 6.1 zostaje wydany
przez faktyczną awarię: **incydent**, nieplanowane zdarzenie, które pogarsza lub
przerywa działanie usługi. Cztery metryki tworzą standardowe słownictwo do
mierzenia, jak dobrze organizacja sobie z tym radzi: **średni czas wykrycia
(MTTD)**, czyli jak długo trwa, zanim organizacja zauważy, że coś jest nie tak;
**średni czas potwierdzenia (MTTA)**, jak długo trwa, zanim ktoś weźmie na siebie
odpowiedzialność za reakcję; **średni czas rozwiązania** lub **przywrócenia
(MTTR)**, jak długo trwa przywrócenie usługi, to samo pojęcie, które temat 2.10
omawiał konkretnie dla awarii spowodowanych wdrożeniem, teraz uogólnione na
dowolny incydent niezależnie od przyczyny; oraz **częstość incydentów**, po
prostu jak często incydenty w ogóle się zdarzają.

Główna troska tego tematu, powtarzająca ujęcie odsetka nieudanych zmian z tematu
2.10, jest taka, że te liczby są tak wiarygodne, jak kultura organizacji wokół
uczciwego zgłaszania i klasyfikowania incydentów. Zespół, który boi się
obwiniania za incydent, ma każdą zachętę, by zgłaszać mniej, opóźniać
potwierdzenie, aby nie „odliczać czasu", albo klasyfikować poważne zdarzenie
jako drobne, by chronić własne metryki. **Analiza poawaryjna [bez szukania
winnych](https://en.wikipedia.org/wiki/Just_culture)**, zapoczątkowana w
organizacjach takich jak Etsy i sformalizowana w literaturze SRE Google, istnieje
właśnie po to, by tę zachętę usunąć, a ten temat traktuje ją jako warunek
wstępny wiarygodnych danych o incydentach, a nie opcjonalną kulturową
uprzejmość nałożoną na metryki.

W dużych zespołach metryki incydentów ujawniają, czy zdolność organizacji do
wykrywania i reagowania, między innymi narzędzia wycofania zmian z tematu 2.10,
faktycznie działa w realnych, różnorodnych warunkach, a nie tylko w konkretnym
scenariuszu awarii spowodowanej wdrożeniem, który ten temat omawiał. Duże
przedsiębiorstwa i organizacje publiczne prowadzące krytyczną infrastrukturę
zależą od tych metryk zarówno wewnętrznie, by napędzać prawdziwą poprawę
operacyjną, jak i zewnętrznie, by wykazać klientom, regulatorom lub opinii
publicznej, że incydenty są obsługiwane kompetentnie i z czasem coraz lepiej.

## Kluczowe zasady

- **Kultura bez szukania winnych jest warunkiem wstępnym wiarygodnych danych o
  incydentach**, a nie opcjonalnym dodatkiem; strach przed obwinianiem psuje
  jednakowo zgłaszanie, szybkość potwierdzenia i klasyfikację dotkliwości.
- **Wykrycie, potwierdzenie i rozwiązanie to odrębne fazy z odrębnymi
  poprawkami.** Wolny całkowity czas przywrócenia może ukrywać bardzo różne
  problemy, zależnie od tego, która faza faktycznie jest wolna.
- **Częstość incydentów i MTTR to sparowany sygnał**, podobnie jak odsetek
  nieudanych zmian i czas przywrócenia z DORA (temat 2.10): żaden z nich sam nie
  opowiada całej historii.
- **Klasyfikacja dotkliwości wymaga tego samego rygoru co klasyfikacja
  uciekających defektów** (temat 5.1): spójne, udokumentowane kryteria, a nie
  doraźny osąd.
- **Wartość analizy poawaryjnej tkwi w systemowej nauce, a nie w wytworzeniu
  liczby.** Metryka jest produktem ubocznym dobrej praktyki, a nie jej celem.

## Rekomendacje

### Rozłóż czas reakcji na incydent na jego odrębne fazy

Mierz i raportuj osobno czas wykrycia (od faktycznego początku awarii do
zauważenia jej przez kogoś), czas potwierdzenia (od powiadomienia do
przejęcia odpowiedzialności przez kogoś) i czas rozwiązania (od przejęcia
odpowiedzialności do prawdziwego przywrócenia), zamiast tylko jednej, zmieszanej
sumy. Każda faza wskazuje inną poprawkę: wolne wykrycie wskazuje na lukę w
monitorowaniu i alertach, wolne potwierdzenie na problem z procesem dyżurów lub
eskalacją, a wolne rozwiązanie na lukę w narzędziach, runbookach lub zdolności
diagnostycznej (temat 2.10 omawia to konkretnie dla awarii spowodowanych
wdrożeniem).

### Zbuduj i chroń naprawdę pozbawiony szukania winnych proces analizy poawaryjnej

**Analiza poawaryjna bez szukania winnych** bada, co się stało i dlaczego system
na to pozwolił, jawnie unikając przypisywania winy osobie za błąd, który mógłby
rozsądnie popełnić każdy rozsądny człowiek w tych samych okolicznościach, z tymi
samymi informacjami. Chroń tę dyscyplinę aktywnie: kierownictwo dające przykład
nieukarających reakcji na incydenty, jawna pisemna polityka i nawyk pytania „co w
naszym systemie na to pozwoliło", a nie „kto to zrobił", to wszystko konieczne,
ciągłe inwestycje, a nie jednorazowe oświadczenie polityczne.

### Klasyfikuj dotkliwość spójnymi, udokumentowanymi, audytowanymi kryteriami

Zastosuj do klasyfikacji dotkliwości incydentów tę samą dyscyplinę, którą temat
5.1 zaleca dla uciekających defektów: stała, udokumentowana skala oparta na
rzeczywistym wpływie na klienta lub biznes, stosowana spójnie w zespołach i
okresowo audytowana pod kątem dryfu. Niespójna klasyfikacja, niektóre zespoły
hojne, inne surowe, czyni dane o incydentach w całej organizacji równie
niewiarygodnymi do porównań, jak niespójnie sklasyfikowane dane o defektach.

### Śledź częstość incydentów i MTTR razem, nigdy osobno

Poprawiający się MTTR przy rosnącej częstości incydentów może wskazywać na
zespół coraz lepiej gaszący pożary, podczas gdy niezawodność systemu u podstaw
faktycznie się pogarsza; spadająca częstość incydentów przy pogarszającym się
MTTR może wskazywać na rzadsze, ale poważniejsze, trudniejsze do zdiagnozowania
awarie zastępujące częste drobne. Przeglądaj oba razem, dokładnie odzwierciedlając
dyscyplinę parowania tempa i stabilności z metryk DORA z części 2, by uzyskać
uczciwy łączny obraz.

### Wydobywaj i śledź systemowe zadania z analiz poawaryjnych, a nie tylko
metryki

Prawdziwa wartość procesu analizy poawaryjnej to konkretne, systemowe zadania,
które z niego wynikają: dodany brakujący alert, poprawiony runbook, usunięty
pojedynczy punkt awarii. Śledź te zadania do ukończenia z taką samą dyscypliną
jak backlog długu technicznego z tematu 4.5, bo analiza poawaryjna, która daje
wgląd, ale nie daje dalszych działań, marnuje organizacyjną naukę, którą ten
proces ma uchwycić.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Zmieszana, pojedyncza metryka czasu reakcji na incydent | Łatwa do raportowania | Ukrywa, która konkretna faza, wykrycie, potwierdzenie, rozwiązanie, jest faktycznym problemem |
| Metryki incydentów rozłożone na fazy | Diagnostyczne, wskazują wprost właściwą poprawkę | Wymagają staranniejszej instrumentacji każdego przejścia między fazami |
| Przegląd incydentów nastawiony na obwinianie | Wydaje się rozliczalny, zaspokaja chęć przypisania odpowiedzialności | Psuje uczciwość przyszłego zgłaszania i rzadko naprawia rzeczywistą przyczynę systemową |
| Praktyka analizy poawaryjnej bez szukania winnych | Daje uczciwe dane i prawdziwe poprawki systemowe | Wymaga trwałej inwestycji kulturowej i dyscypliny kierownictwa, by ją utrzymać |

Główne napięcie to **urok indywidualnej rozliczalności kontra praktyczna
potrzeba uczciwego zgłaszania**. Obwinienie osoby po incydencie może dawać
satysfakcję i wyglądać na zdecydowane przywództwo, ale niezawodnie psuje dane
każdego przyszłego incydentu, bo ludzie zgłaszają mniej, opóźniają potwierdzenie
albo błędnie klasyfikują dotkliwość, gdy tylko obawiają się osobistych
konsekwencji. Rozwiąż to napięcie na korzyść praktyki bez szukania winnych,
świadomie i konsekwentnie, rozumiejąc, że prawdziwa rozliczalność wynika z
naprawy systemu, który pozwolił na awarię, a nie z ukarania osoby, która
akurat była obecna, gdy do niej doszło.

## Pytania do omówienia z zespołem

1. **Czy rozkładamy czas reakcji na incydent na fazy wykrycia, potwierdzenia i
   rozwiązania, czy śledzimy tylko jedną zmieszaną liczbę?** Jeśli istnieje
   tylko liczba zmieszana, wybierz niedawny istotny incydent i spróbuj
   zrekonstruować podział na fazy wstecz, by zobaczyć, co by ujawnił.

2. **Czy nasz zespół naprawdę wierzyłby, że nasz proces analizy poawaryjnej jest
   wolny od szukania winnych, czy strach przed konsekwencjami nadal kształtuje
   to, jak incydenty są zgłaszane i omawiane?** Zapytaj o to wprost i uczciwie;
   deklarowana polityka bez szukania winnych, której nie stosuje się naprawdę, nie
   daje wiarygodnych danych.

3. **Czy dwa różne zespoły sklasyfikowałyby dotkliwość tego samego incydentu tak
   samo?** Wybierz prawdziwy, niejednoznaczny incydent z przeszłości i poproś
   przedstawicieli różnych zespołów, by sklasyfikowali go niezależnie, potem
   porównajcie wyniki.

4. **Czy przeglądamy częstość incydentów i MTTR razem, czy jedno dostaje więcej
   uwagi niż drugie?** Sprawdź swoją faktyczną praktykę raportowania i przeglądów
   pod kątem tego parowania, odzwierciedlającego tę samą dyscyplinę, którą temat
   2.10 zaleca dla metryk stabilności DORA.

5. **Jaki odsetek zadań z naszych analiz poawaryjnych z ostatnich sześciu
   miesięcy został faktycznie ukończony?** Jeśli obecnie tego nie śledzisz, ta
   luka warta jest nazwania; proces analiz poawaryjnych z niskim odsetkiem
   ukończonych zadań daje wgląd bez dalszych działań.

6. **Czy strach przed obwinianiem kiedykolwiek spowodował, że ktoś opóźnił
   zgłoszenie lub potwierdzenie incydentu?** To niewygodne, ale ważne pytanie;
   uczciwe „tak, i oto co się stało" jest znacznie cenniejsze dla zdrowia twojego
   procesu incydentów niż odruchowe „nie".

## Perspektywa sektorowa

**Startup.** Reagowanie na incydenty jest przy małym zespole często
nieformalne z konieczności, a formalny rozkład na fazy może być z początku
zbędny. Nawykiem wartym wczesnego przyjęcia są normy dyskusji bez szukania
winnych od pierwszego incydentu, bo nawyki kulturowe ustalone wcześnie są
znacznie łatwiejsze do utrzymania niż do dorabiania po tym, jak utrwalił się
wzorzec skłonny do obwiniania.

**Mała firma.** Prosty, wspólny dziennik incydentów, nawet nieformalny, z
podstawową klasyfikacją dotkliwości i krótką retrospektywą bez szukania winnych
dla wszystkiego, co istotne, daje większość wartości tego tematu bez
wyrafinowanych narzędzi i dedykowanej platformy do zarządzania incydentami.

**Duże przedsiębiorstwo.** Spójna klasyfikacja dotkliwości i prawdziwa, trwała
kultura bez szukania winnych są w skali trudniejsze do utrzymania i obie są
niezbędne dla wiarygodnych, porównywalnych danych o incydentach w dziesiątkach
zespołów. Zainwestuj w udokumentowane kryteria klasyfikacji, okresowe audyty i
aktywne dawanie przykładu przez kierownictwo w reakcji bez szukania winnych, bo
dryf kulturowy ku obwinianiu zwykle wkrada się stopniowo bez świadomego, stałego
przeciwdziałania.

**Administracja publiczna.** Incydenty dotykające usług publicznych lub
krytycznej infrastruktury często podlegają zewnętrznej kontroli, uwadze mediów
albo formalnemu postępowaniu, co tworzy silną presję ku szukaniu winnych, która
może bezpośrednio podkopać wewnętrzną praktykę bez szukania winnych, jeśli nie
jest aktywnie zarządzana. Utrzymuj jasną wewnętrzną dyscyplinę bez szukania
winnych dla prawdziwej nauki systemowej, odrębną od każdego zewnętrznego procesu
rozliczania, który może nastąpić po poważnym incydencie, i jasno komunikuj to
rozróżnienie pracownikom.

## Przykłady

**Przedsiębiorstwo.** Kultura inżynierska firmy płatniczej przez lata
nieformalnie traktowała incydenty jako coś, co należy jak najszybciej
przestać potwierdzać, by nie wyglądać na odpowiedzialnego, co prowadziło do
konsekwentnie słabych czasów wykrycia i potwierdzenia, które kierownictwo
początkowo przypisywało niedostatecznym narzędziom monitorowania. Zmiana
kulturowa ku naprawdę wolnym od szukania winnych analizom poawaryjnym, w tym
publiczne i konkretne chwalenie przez kierownictwo szybkiego, uczciwego
potwierdzania incydentów, a nie tylko szybkiego rozwiązania, dała mierzalną
poprawę zarówno czasu wykrycia, jak i potwierdzenia w ciągu dwóch kwartałów,
ujawniając, że pierwotne wąskie gardło było kulturowe, strach przed
obwinianiem, a nie techniczne, niedostateczne narzędzia, jak początkowo
zakładano.

**Administracja publiczna.** Centrum operacyjne agencji transportu publicznego
historycznie klasyfikowało niemal każde zakłócenie usług jako „drobne" w swoim
wewnętrznym dzienniku incydentów, co nowy dyrektor ds. bezpieczeństwa uznał za
podejrzane wobec uporczywych, nieformalnych skarg pracowników w terenie na
poważne, powtarzające się problemy. Śledztwo ujawniło, że klasyfikacja „drobne"
pozwalała uniknąć uciążliwego formalnego procesu zgłaszania wymaganego dla
wyższych dotkliwości, tworząc niezamierzoną zachętę do zaniżania klasyfikacji.
Agencja uprościła formalne wymogi zgłaszania dla wszystkich dotkliwości i jawnie
ochroniła pracowników przed obwinianiem za uczciwe zgłaszanie dotkliwości, a
późniejsze dane o incydentach pokazały dokładniejszy, i znacznie wyższy,
odsetek naprawdę istotnych zakłóceń, dając wreszcie kierownictwu uczciwy obraz,
względem którego można ustalać priorytety inwestycji w infrastrukturę.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z naprawdę wolnych od szukania winnych, dobrze sklasyfikowanych,
rozłożonych na fazy metryk incydentów są uczciwe dane, które faktycznie napędzają
poprawę systemową, a nie pocieszający, ale fałszywy obraz wytworzony przez
napędzane strachem niedoraportowanie lub błędną klasyfikację. Przykład firmy
płatniczej pokazuje to konkretnie: poprawka kulturowa, a nie inwestycja w
narzędzia, rozwiązała to, co kierownictwo błędnie zdiagnozowało jako techniczny
problem wykrywania.

Całkowity koszt posiadania to głównie inwestycja kulturowa i procesowa: trwałe
zaangażowanie kierownictwa w praktykę bez szukania winnych, udokumentowane i
audytowane kryteria klasyfikacji dotkliwości oraz dyscyplina śledzenia zadań z
analiz poawaryjnych do ukończenia. Ta inwestycja kosztuje mniej niż alternatywa,
program metryk incydentów, który daje pewnie błędne dane, bo strach zepsuł każde
jego wejście.

## Antywzorce i pułapki

- **Przegląd incydentów nastawiony na obwinianie:** psuje uczciwość zgłaszania,
  szybkość potwierdzenia i klasyfikację dotkliwości dla każdego przyszłego
  incydentu.
- **Śledzenie tylko zmieszanej liczby czasu reakcji:** ukrywa, która konkretna
  faza, wykrycie, potwierdzenie, rozwiązanie, jest faktycznym problemem.
- **Niespójna klasyfikacja dotkliwości w zespołach:** czyni dane o incydentach w
  całej organizacji niewiarygodnymi do porównań.
- **Przeglądanie częstości incydentów i MTTR osobno:** pomija łączny, uczciwy
  obraz, jaki daje sparowany sygnał.
- **Proces analiz poawaryjnych, który daje wgląd, ale nie ukończone zadania:**
  marnuje organizacyjną naukę, którą ten proces ma uchwycić.
- **Deklarowana polityka bez szukania winnych, której kierownictwo nie stosuje
  naprawdę:** daje takie samo napędzane strachem psucie danych jak jawnie
  skłonna do obwiniania kultura.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Reagowanie na incydenty jest nieformalne, zgłaszanie
  niespójne, a kultura skłonna do obwiniania aktywnie zniechęca do uczciwego
  zgłaszania.
- **Poziom 2, Rozwój:** Istnieje pewne śledzenie incydentów, ale klasyfikacja
  dotkliwości jest niespójna, a praktyka bez szukania winnych jest deklarowana,
  lecz nie konsekwentnie stosowana.
- **Poziom 3, Standaryzacja:** Metryki incydentów rozłożone na fazy, ze spójną,
  udokumentowaną klasyfikacją dotkliwości, są śledzone w całej organizacji, z
  naprawdę wolną od szukania winnych praktyką analiz poawaryjnych.
- **Poziom 4, Zarządzanie:** Częstość incydentów i MTTR są przeglądane razem,
  zadania z analiz poawaryjnych są śledzone do ukończenia, a klasyfikacja jest
  okresowo audytowana pod kątem spójności.
- **Poziom 5, Orkiestracja:** Organizacja ma wykazaną, trwałą historię praktyki
  bez szukania winnych dającej uczciwe dane i prawdziwe poprawki systemowe, a
  metryki incydentów bezpośrednio i niezawodnie wpływają na decyzje
  inwestycyjne w niezawodność.

## Pomysły do dyskusji

1. Czy nasz proces analiz poawaryjnych przeszedłby uczciwy test, czy jest naprawdę wolny od szukania winnych?
2. Jaki jest podział na fazy, wykrycie, potwierdzenie, rozwiązanie, naszego najwolniejszego niedawnego incydentu?
3. Czy dwa zespoły sklasyfikowałyby dotkliwość naszego ostatniego istotnego incydentu tak samo?
4. Jaki odsetek zadań z naszych niedawnych analiz poawaryjnych został faktycznie ukończony?
5. Czy strach przed obwinianiem kiedykolwiek ukształtował to, jak incydent był zgłaszany lub omawiany w naszym zespole?

## Kluczowe wnioski

- **Kultura analiz poawaryjnych bez szukania winnych jest warunkiem wstępnym**
  wiarygodnych danych o incydentach; strach przed obwinianiem psuje jednakowo
  zgłaszanie, szybkość potwierdzenia i klasyfikację.
- Rozłóż czas reakcji na fazy **wykrycia, potwierdzenia i rozwiązania**, z
  których każda wskazuje inną poprawkę.
- Klasyfikuj dotkliwość **spójnymi, udokumentowanymi, audytowanymi kryteriami**,
  odzwierciedlając dyscyplinę uciekających defektów z tematu 5.1.
- Przeglądaj **częstość incydentów i MTTR razem**, nigdy osobno, według tej samej
  dyscypliny parowania co metryki stabilności DORA.
- Śledź **zadania z analiz poawaryjnych do ukończenia**; metryka jest produktem
  ubocznym dobrej praktyki, a nie jej celem.

## Bibliografia i dalsza lektura

- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy
  Beyer, Chris Jones, Jennifer Petoff i Niall Richard Murphy (red.) (praktyka
  analizy poawaryjnej bez szukania winnych i metryki incydentów).
- *The Site Reliability Workbook*, Betsy Beyer, Niall Richard Murphy, David K.
  Rensin, Kent Kawahara i Stephen Thorne (red.) (praktyczne wskazówki dotyczące
  reagowania na incydenty i analiz poawaryjnych).
- *The Field Guide to Understanding Human Error*, Sidney Dekker (podstawowe
  uzasadnienie systemowego badania awarii bez szukania winnych).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy Engineering
  Blog (2012): wczesne, wpływowe sformułowanie praktyki bez szukania winnych w
  operacjach oprogramowania.
