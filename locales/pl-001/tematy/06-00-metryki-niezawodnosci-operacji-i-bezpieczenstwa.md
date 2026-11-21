# 6.0 Wprowadzenie do części 6: Metryki niezawodności, operacji i bezpieczeństwa

Część 2 opisywała, jak zmiana przechodzi od commita na produkcję; ta część
opisuje, co dzieje się, gdy zmiana już tam działa, bez końca, w realnych
warunkach, nad którymi zespół nie ma pełnej kontroli. Metryki niezawodności,
operacji i bezpieczeństwa to miejsce, w którym obietnice inżynierii
oprogramowania spotykają się z trwałą rzeczywistością: nie „czy to wdrożenie się
udało", lecz „czy ten system działa dalej, noc po nocy, pod obciążeniem, pod
atakiem i pod presją rotacji dyżurów, która musi być do utrzymania przez lata, a
nie tylko do następnego incydentu".

Cztery tematy tej części układają się w przemyślany łuk. Wskaźniki i cele
poziomu usług (temat 6.1) ustanawiają słownictwo i dyscyplinę wyznaczania celów,
od których zależy wszystko inne w tej części. Metryki incydentów (temat 6.2)
mierzą, co się dzieje, gdy ten cel zostaje nieosiągnięty. Metryki dyżurów i
pojemności (temat 6.3) mierzą ludzki i infrastrukturalny koszt utrzymania celu
na poziomie. Metryki bezpieczeństwa i podatności (temat 6.4) rozszerzają tę samą
dyscyplinę niezawodności na odrębne, ale blisko powiązane ryzyko: nie „czy to
samo się zepsuje", lecz „czy ktoś to celowo zepsuje". Wszystkie cztery tematy
dzielą główną dyscyplinę tej książki: nazwij metrykę, nazwij, jak się ją
manipuluje, i zestaw ją z barierą ochronną, która tę manipulację wychwytuje.

W dużych zespołach metryki tej części to miejsce, w którym obietnice inżynierii
stają się umowne, a w kontekstach administracji publicznej czasem także prawne.
Duże przedsiębiorstwa zapisują umowy o poziomie usług (SLA) względem metryk
wprowadzonych w temacie 6.1, z realnymi karami finansowymi za ich
niedotrzymanie; organizacje publiczne prowadzą krytyczną infrastrukturę
publiczną, w której awaria niezawodności lub bezpieczeństwa niesie skutki
daleko wykraczające poza bilans jednej firmy. Ta część traktuje ten ciężar
poważnie od początku do końca.

## Tematy w tej części

- **6.1 Wskaźniki poziomu usług, cele i budżety błędów:** Słownictwo i
  dyscyplina wyznaczania celów, na których opiera się cała inżynieria
  niezawodności usług (SRE), oraz to, jak budżet błędów zamienia niezawodność w
  zasób, który można wydawać i którym można zarządzać, zamiast w nieosiągalny
  absolut.
- **6.2 Metryki incydentów: wykrywanie, reakcja i przywracanie:** Pomiar tego,
  jak szybko organizacja zauważa awarię, reaguje na nią i ją usuwa, oraz
  dyscyplina analizy bez szukania winnych, która utrzymuje ten pomiar uczciwym.
- **6.3 Metryki dyżurów, pojemności i obciążenia operacyjnego:** Ludzki i
  infrastrukturalny koszt utrzymywania niezawodności oraz to, dlaczego
  niezrównoważone obciążenie dyżurami w końcu samo staje się problemem
  niezawodności.
- **6.4 Metryki bezpieczeństwa i zarządzania podatnościami:** Rozszerzenie tego
  samego zdyscyplinowanego podejścia z barierami ochronnymi na ryzyko
  bezpieczeństwa, od wykrywania podatności po ich usuwanie.

## Jak te tematy się łączą

Temat 6.1 stanowi fundament, na którym opiera się każdy późniejszy temat tej
części: bez jasnego celu poziomu usługi pytania „jak poważny był ten incydent"
(temat 6.2) i „czy nasze obciążenie dyżurami jest do utrzymania" (temat 6.3) nie
mają wspólnego punktu odniesienia, względem którego można mierzyć. Metryki
incydentów z tematu 6.2 są w istotnym sensie zapisem wydawania budżetu błędów
wprowadzonego w temacie 6.1; temat 6.3 mierzy trwałość systemu ludzkiego
odpowiedzialnego za utrzymanie tego wydawania w granicach budżetu; a temat 6.4
stosuje to samo myślenie o celach i budżetach do postawy bezpieczeństwa, która,
niemierzona, zwykle dostaje uwagę tylko reaktywnie, po incydencie, a nie
proaktywnie.

Ta część łączy się bezpośrednio z częścią 2: odsetek nieudanych zmian i czas
przywrócenia po nieudanym wdrożeniu z DORA (oba opisane w temacie 2.10) są
odpowiednio wskaźnikiem wyprzedzającym i przykładem metryk incydentów tej
części. Łączy się też z częścią 8, gdzie wskazówki o panelach i dojrzałości
programu opierają się mocno na modelu budżetu błędów z tej części jako
przepracowanym przykładzie zamiany abstrakcyjnego celu (niezawodność,
bezpieczeństwo) w konkretny, śledzony, nieabsolutny cel, którym zespół może
faktycznie zarządzać na co dzień.
