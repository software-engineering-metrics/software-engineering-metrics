# 8.1 Projektowanie panelu metryk inżynierskich

## Przegląd i motywacja

Każda metryka omówiona w tej książce musi w końcu zamieszkać w miejscu, na
które faktycznie patrzą ludzie, a źle zaprojektowany [panel](https://en.wikipedia.org/wiki/Dashboard_(business)) może
zniweczyć staranną pracę wszystkich wcześniejszych tematów: uczciwe,
dobrze zarządzane metryki sparowane z barierami ochronnymi, przedstawione
nieuczciwie, w bałaganie albo niewłaściwym odbiorcom, wywołują dokładnie
to zamieszanie i nieufność, którym ta książka stara się zapobiec. Ten
temat dotyczy konkretnego rzemiosła projektowania paneli: wyboru, co pokazać
komu, uczciwej wizualizacji i takiego ukształtowania całego artefaktu, by
faktycznie służył do podejmowania decyzji, a nie był ignorowany ani, co
gorsza, źle odczytywany.

Główna dyscyplina, którą zaleca ten temat, to projektowanie pod konkretnego
odbiorcę. Panel zbudowany na codzienny stand-up pojedynczego zespołu
inżynierskiego potrzebuje innych metryk, innej szczegółowości i innej gęstości
wizualnej niż panel na kwartalny przegląd zarządczy, a jeden, uniwersalny
panel, który próbuje obsłużyć obu odbiorców, zwykle żadnego nie obsługuje
dobrze. Ten temat traktuje projektowanie paneli jako prawdziwą dyscyplinę
projektową, a nie dodatek raportowy robiony na koniec, i wszędzie czerpie z
zasad uczciwości statystycznej z tematu 1.6: każdy wybór wizualizacji albo
pomaga, albo utrudnia czytelnikowi wyciągnięcie poprawnego wniosku z danych.

W dużych zespołach projektowanie paneli to miejsce, w którym liczne bariery
ochronne na poziomie pojedynczych metryk z tej książki albo przetrwają do
praktyki, albo się zgubią. Duże przedsiębiorstwa prowadzące dziesiątki paneli
zespołowych potrzebują spójności bez sztywności, wspólnych standardów, które
wciąż pozwalają zaspokoić specyficzne potrzeby każdego odbiorcy.
Administracja publiczna, której panele mogą podlegać publicznej kontroli lub
służyć za podstawę raportowania nadzorczego, potrzebuje zalecanych w tym
temacie standardów uczciwej wizualizacji stosowanych ze szczególnym
rygorem, bo mylący wykres wykryty przez zewnętrznego recenzenta szkodzi
wiarygodności daleko poza konkretną metryką, której dotyczy.

## Kluczowe zasady

- **Projektuj dla konkretnego odbiorcy i decyzji, a nie dla pełnego
  pokrycia.** Panel próbujący obsłużyć wszystkich zwykle nikogo nie obsługuje
  dobrze.
- **Każdy wybór wizualizacji albo pomaga, albo aktywnie wprowadza w błąd.**
  Stosuj rygorystycznie uczciwość statystyczną z tematu 1.6: realny trend,
  uczciwe osie, widoczna niepewność.
- **Mniej, dobrze dobranych metryk jest lepsze niż pełne pokrycie.** Główna
  zasada tej książki, od tematu 1.1 wzwyż, stosuje się wprost do
  projektowania paneli.
- **Panel potrzebuje właściciela i rytmu przeglądów**, dokładnie jak każda
  inna zarządzana metryka (temat 1.4), inaczej zamienia się w
  nieutrzymywany, nieufany artefakt.
- **Pary metryka i bariera ochronna należą do tego samego widoku.** Nigdy nie
  rozdzielaj metryki, do której dąży się zachętami, od jej bariery na różne
  panele czy różne sekcje.

## Rekomendacje

### Projektuj odrębne panele dla odrębnych odbiorców i decyzji

Buduj osobne, celowe widoki zamiast jednego panelu obsługującego każdego
odbiorcę: operacyjny panel na poziomie zespołu (rytm dzienny lub tygodniowy,
szczegółowe metryki dostarczania i jakości na własny użytek zespołu), panel
dla kierownictwa (rytm miesięczny lub kwartalny, z naciskiem na rezultaty
według tematu 7.4, mniej metryk, więcej kontekstu) oraz, gdzie to istotne,
panel skierowany na zewnątrz (dla klientów, organów nadzoru lub opinii
publicznej, starannie zarządzany według rygoru skalowanego do konsekwencji z
tematu 1.4). Każdy służy innej decyzji i powinien być projektowany właśnie
pod tę decyzję, a nie jako przefiltrowany widok jednego panelu głównego.

### Stosuj uczciwe standardy wizualizacji konsekwentnie

Traktuj zasady uczciwości statystycznej z tematu 1.6 jako twarde wymagania
projektowe, a nie opcjonalny szlif: zaczynaj osie wartości od zera, chyba
że udokumentowano jawny, widoczny wyjątek, pokazuj trend w czasie zamiast
pojedynczej migawki, używaj median i percentyli zamiast średnich dla danych
skośnych i opisuj kontekst (wdrożenia, incydenty, zmiany organizacyjne),
aby czytelnik odróżnił prawdziwą zmianę od szumu. Unikaj konkretnych
manipulacji wykresami, które wprost wymienił temat 1.6: podwójnych osi
sugerujących fałszywą korelację, wybiórczo dobranych zakresów dat i efektów
3D zniekształcających proporcje.

### Nigdy nie rozdzielaj metryki od jej sparowanej bariery na różne widoki

Zgodnie z zasadą parowania barier ochronnych z tematu 1.2 jako twardą
regułą projektowania paneli: częstotliwość wdrożeń i odsetek nieudanych
zmian (temat 2.10) należą do tego samego widoku, zawsze widoczne razem, a
nigdy rozdzielone na panel „szybkości" i osobny panel „jakości", które
różni odbiorcy mogliby oglądać w izolacji. To nie jest drobna preferencja
układu; rozdzielenie metryki od jej bariery na różne panele odtwarza
dokładnie to narażenie na zachęty, przed którym ostrzega temat 1.2, nawet
jeśli obie liczby są technicznie gdzieś śledzone.

### Przypisz nazwanego właściciela i rytm przeglądów każdemu panelowi

Zastosuj dyscyplinę nadzoru z tematu 1.4 wprost do samego artefaktu panelu,
a nie tylko do pojedynczych metryk, które wyświetla: wskaż właściciela
odpowiedzialnego za dalszą dokładność i adekwatność panelu i ustal rytm
przeglądów, w którym metryki są dodawane, wycofywane lub ponownie
rozważane. Panel bez właściciela niszczeje dokładnie tak jak metryka bez
właściciela (temat 1.4), gromadząc nieaktualne kafle, których nikt nie ma
władzy ani obowiązku przyciąć.

### Umieść jawne, widoczne oświadczenie, do czego panel nie służy

Idąc za rozróżnieniem diagnostyczne kontra oceniające z tematu 1.1,
oświadcz wprost i widocznie na każdym panelu, którego metryki mogłyby
wiarygodnie zostać użyte do indywidualnej oceny, do czego dokładnie
panel nie służy: „te metryki opisują kondycję zespołu i systemu; nie są
używane w indywidualnych ocenach pracowniczych". To jawne oświadczenie,
stosowane zwłaszcza do każdego panelu zawierającego dane o aktywności
(temat 3.4) lub o obciążeniu dyżurami (temat 6.3), to drobny wybór
projektowy z nieproporcjonalnie dużym skutkiem w zapobieganiu dokładnie
temu dryfowi w stronę oceniania, przed którym ta książka ostrzega od
początku do końca.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Jeden, kompleksowy panel dla wszystkich odbiorców | Prosty w budowie i utrzymaniu jeden artefakt | Nie obsługuje dobrze żadnego konkretnego odbiorcy; przytłaczający dla jednych, niewystarczający dla innych |
| Panele dla konkretnych odbiorców | Każdy dobrze służy swojej faktycznej decyzji | Więcej artefaktów do zbudowania, utrzymania i dopasowania |
| Pełne pokrycie metryk na każdym widoku | Nic nie zostaje pominięte | Zmęczenie panelem; pogrzebanie metryk, które naprawdę mają znaczenie dla decyzji odbiorcy |
| Minimalny, kierowany decyzjami dobór metryk na panel | Skupiony, użyteczny, łatwiejszy do zaufania | Wymaga świadomej dyscypliny doboru i grozi pominięciem czegoś istotnego |

Główne napięcie to **kompleksowość kontra skupienie**, czyli podstawowe
napięcie z tematu 1.1 zastosowane do projektowania paneli. Kompleksowy panel
wydaje się bezpieczniejszy, nic nie jest pominięte, ale zwykle służy swojemu
faktycznemu odbiorcy gorzej niż skupiony, zbudowany wokół decyzji, które ten
odbiorca musi podjąć. Rozwiąż to napięcie, budując wiele celowych paneli
zamiast jednego kompleksowego, akceptując skromny dodatkowy koszt utrzymania
kilku skupionych artefaktów w zamian za to, że każdy z nich faktycznie
przydaje się swojemu odbiorcy.

## Pytania do omówienia z zespołem

1. **Czy nasz obecny panel próbuje obsłużyć kilku odbiorców naraz i jeśli
   tak, kogo faktycznie obsługuje dobrze?** Przejdź po istniejącym panelu i
   wskaż jego faktycznego głównego odbiorcę w porównaniu z zamierzonym;
   niedopasowanie jest tu częste i warto je nazwać wprost.

2. **Czy któryś z naszych paneli rozdziela metrykę, do której dąży się
   zachętami, od jej sparowanej bariery na różne widoki?** Przeprowadź audyt
   obecnych paneli pod kątem tego wzorca, zaczynając od metryk DORA z
   części 2 i ich par.

3. **Czy wizualizacje na naszym panelu przeszłyby standardy uczciwej
   wizualizacji z tematu 1.6: osie od zera, trend zamiast migawki, mediany
   zamiast średnich dla danych skośnych?** Przejrzyj faktyczne obecne
   wykresy według tej listy wprost.

4. **Czy każdy panel, który utrzymujemy, ma nazwanego właściciela i rytm
   przeglądów, czy niektóre po prostu istnieją, a nikt nie odpowiada za ich
   dokładność i adekwatność?** Jeśli któryś panel nie ma nazwanego
   właściciela, tę lukę warto zamknąć natychmiast, bo panel bez właściciela
   niszczeje dokładnie tak jak metryka bez właściciela.

5. **Czy któryś panel, którego metryki mogłyby wiarygodnie zostać użyte do
   indywidualnej oceny, jawnie oświadcza, do czego nie służy?** Sprawdź
   pod kątem tego jawnego oświadczenia każdy panel zawierający dane o
   aktywności lub obciążeniu dyżurami.

6. **Gdybyśmy dziś przeprojektowali nasze panele od zera, odbiorca po
   odbiorcy, zaczynając od decyzji, którą każdy z nich musi podjąć, jak
   bardzo wynik różniłby się od obecnego stanu?** To ćwiczenie myślowe
   często ujawnia, jak duża część struktury panelu narosła z bezwładności, a
   nie ze świadomego projektu.

## Perspektywa sektorowa

**Startup.** Jeden, prosty panel jest w tej skali zwykle właściwy, bo cały
zespół i kierownictwo to często ta sama niewielka grupa ludzi podejmujących
w dużej mierze te same decyzje. Skup się na standardach uczciwej wizualizacji
i jawnym oświadczeniu o nieużywaniu do oceny, nawet w małej skali, bo te
nawyki znacznie łatwiej ustanowić wcześnie niż doposażać później.

**Mała firma.** Większość gotowych narzędzi oferuje rozsądne panele
domyślne; główna dyscyplina polega na przycięciu ich do kilku metryk, które
faktycznie wspierają realną decyzję w twojej konkretnej firmie, zamiast
wyświetlania każdej metryki, którą narzędzie akurat domyślnie liczy.

**Duże przedsiębiorstwo.** Spójność bez sztywności to tu główne wyzwanie:
dziesiątki paneli zespołowych potrzebują dość wspólnego standardu (zasady
uczciwej wizualizacji, parowanie barier, dyscyplina własności), by były
wiarygodne i porównywalne, a jednocześnie pozwalały specyficznym potrzebom
operacyjnym każdego zespołu kształtować własny widok. Zainwestuj we wspólny
standard projektowania paneli, egzekwowany przez nadzór (temat 1.4), zamiast
sztywnego, uniwersalnego szablonu albo zupełnie nieustrukturyzowanych,
niespójnych paneli lokalnych.

**Administracja publiczna.** Panele narażone na kontrolę zewnętrzną lub
nadzorczą potrzebują szczególnego rygoru uczciwej wizualizacji i jawnej
dokumentacji nadzorczej, bo mylący wykres wykryty przez zewnętrznego
recenzenta szkodzi wiarygodności instytucji daleko poza konkretną metryką,
której dotyczy. Zastosuj najwyższy standard zaleceń tego tematu do każdego
panelu skierowanego na zewnątrz.

## Przykłady

**Przedsiębiorstwo.** Firma z branży technologii logistycznych przez lata
utrzymywała jeden panel „kondycji inżynierii", oglądany zarówno przez
pojedyncze zespoły inżynierskie, jak i przez zarząd, z ponad czterdziestoma
kaflami obejmującymi wszystko od liczby commitów poszczególnych osób po
kwartalne rezultaty biznesowe. Żaden odbiorca nie uznał go za naprawdę
użyteczny: inżynierowie ignorowali kafle rezultatów biznesowych jako
nieistotne dla codziennej pracy, a menedżerów przytłaczały szczegółowe
metryki dostarczania bez kontekstu do ich interpretacji. Podział na
skupiony, sześciokaflowy panel operacyjny zespołu i osobny, ośmiokaflowy
panel kierowniczy, oba zgodne z zasadami parowania barier i uczciwej
wizualizacji z tego tematu, przyniósł mierzalnie wyższe zaangażowanie i, co
kluczowe, menedżerowie po raz pierwszy zgłosili, że potrafią wyjaśnić, co
liczby oznaczają, gdy zapyta ich własne kierownictwo.

**Administracja publiczna.** Publiczny panel usług cyfrowych rządu stanowego
był publicznie krytykowany za wykres pokazujący „średni" czas przetwarzania z
ucięciem osi Y, które wizualnie wyolbrzymiało skromną poprawę, czyli
naruszenie standardów uczciwej wizualizacji z tematu 1.6, które zewnętrzny
dziennikarz technologiczny wychwycił i opisał. Przeprojektowany panel
agencji, zbudowany jawnie wobec standardów tego tematu, z osiami od zera,
medianą zamiast średniej dla prawoskośnych danych o czasie przetwarzania i
wyraźnie opisanym kontekstem każdej istotnej zmiany, został w
kolejnym artykule specjalnie pochwalony jako wzór przejrzystej prezentacji
danych w sektorze publicznym, wprost naprawiając wiarygodność, którą
wcześniejszy, mylący wykres naruszył.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem ze świadomie zaprojektowanych, uczciwych paneli dla konkretnych
odbiorców jest realne użycie i realne zaufanie: powyższy przykład firmy
logistycznej pokazuje bezpośredni koszt źle zaprojektowanego pojedynczego
panelu, czyli niskie zaangażowanie obu zamierzonych odbiorców, i
bezpośrednią korzyść z przeprojektowania, czyli mierzalnie wyższe
zaangażowanie, gdy każdy odbiorca dostał widok faktycznie zbudowany pod jego
własne decyzje.

Całkowity koszt posiadania to wysiłek projektowy i utrzymaniowy przy wielu
celowych panelach zamiast jednego kompleksowego artefaktu, plus ciągła
dyscyplina nadzoru (nazwana własność, rytm przeglądów) zalecana w tym
temacie. Ten koszt jest skromny w porównaniu z ryzykiem panelu, którego nikt
nie używa, a co gorsza takiego, który aktywnie wprowadza odbiorców w błąd i
szkodzi wiarygodności, jak konkretnie pokazuje powyższy przykład z
administracji publicznej.

## Antywzorce i pułapki

- **Jeden panel próbujący obsłużyć każdego odbiorcę:** zwykle nikogo nie
  obsługuje dobrze.
- **Rozdzielanie metryki, do której dąży się zachętami, od jej bariery na
  różne widoki:** odtwarza narażenie na zachęty, przed którym ostrzega temat
  1.2.
- **Nieuczciwe wybory wizualizacji:** ucięte osie, wybiórcze zakresy dat i
  podwójne osie wprowadzają czytelników w błąd, czasem z realnymi
  konsekwencjami wizerunkowymi.
- **Brak nazwanego właściciela lub rytmu przeglądów samego panelu:** artefakt
  niszczeje dokładnie tak jak metryka bez właściciela.
- **Brak jawnego oświadczenia, do czego panel nie służy:** zaprasza dryf w
  stronę oceniania, przed którym ta książka ostrzega od początku do końca.
- **Pełne pokrycie kaflami zamiast skupionego doboru kierowanego
  decyzjami:** daje zmęczenie panelem i grzebie to, co naprawdę ważne.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Jeden, niedobrany panel, o ile w ogóle, słabo
  obsługuje wszystkich odbiorców, bez standardu uczciwej wizualizacji ani
  parowania barier.
- **Poziom 2, Rozwój:** Istnieją niektóre widoki dla konkretnych odbiorców,
  ale standardy wizualizacji są niespójne, a własność niejasna.
- **Poziom 3, Standaryzacja:** Panele dla konkretnych odbiorców ze spójnymi,
  uczciwymi standardami wizualizacji i parowaniem barier są ustanowione w
  całej organizacji, każdy z nazwanym właścicielem.
- **Poziom 4, Zarządzanie:** Panele są przeglądane w regularnym rytmie, z
  jawnymi oświadczeniami o nieużywaniu do oceny tam, gdzie to istotne, a
  nieaktualne kafle są aktywnie przycinane.
- **Poziom 5, Orkiestracja:** Praktyka projektowania paneli w organizacji to
  zaufana, dobrze zarządzana zdolność, a organizacja potrafi wskazać
  konkretne przypadki, w których uczciwe, dobrze zaprojektowane panele
  naprawiły lub zbudowały zaufanie interesariuszy.

## Pomysły do dyskusji

1. Kim jest faktyczny główny odbiorca naszego obecnego panelu w porównaniu z zamierzonym?
2. Czy któryś z naszych paneli rozdziela metrykę od jej bariery ochronnej?
3. Czy nasze obecne wykresy przeszłyby audyt uczciwej wizualizacji?
4. Czy każdy panel, który utrzymujemy, ma jasno wskazanego, odpowiedzialnego właściciela?
5. Jak wyglądałoby przeprojektowanie naszych paneli od zera, zaczynając od odbiorcy?

## Kluczowe wnioski

- Projektuj **panele dla konkretnych odbiorców** i konkretnych decyzji, a nie
  jeden kompleksowy artefakt próbujący obsłużyć wszystkich.
- Stosuj **uczciwe standardy wizualizacji** (temat 1.6) jako twarde
  wymagania: osie od zera, trend zamiast migawki, mediany zamiast średnich
  dla danych skośnych.
- **Nigdy nie rozdzielaj metryki, do której dąży się zachętami, od jej
  bariery ochronnej** na różne widoki; trzymaj pary metryka i bariera na tym
  samym panelu.
- Przypisz **nazwanego właściciela i rytm przeglądów** każdemu panelowi,
  dokładnie tak, jak temat 1.4 wymaga dla każdej zarządzanej metryki.
- Oświadcz jawnie, **do czego panel nie służy**, zwłaszcza tam, gdzie dane o
  aktywności lub obciążeniu operacyjnym mogłyby zostać użyte do
  indywidualnej oceny.

## Bibliografia i dalsza lektura

- *The Visual Display of Quantitative Information*, Edward R. Tufte
  (fundamentalna pozycja o uczciwej, rzetelnej wizualizacji danych).
- *Storytelling with Data*, Cole Nussbaumer Knaflic (praktyczne projektowanie
  paneli i wykresów dla odbiorców biznesowych).
- *Information Dashboard Design*, Stephen Few (zasady projektowania paneli
  dla skutecznej, uczciwej komunikacji).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (dyscyplina parowania metryk, którą ten temat
  stosuje wprost do układu panelu).
