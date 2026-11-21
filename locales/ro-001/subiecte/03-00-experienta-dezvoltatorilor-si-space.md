# 3.0 Introducere în Partea 3: Experiența dezvoltatorilor și cadrul SPACE

Partea 2 a măsurat livrarea din exterior: cât de repede și cât de sigur
circulă codul printr-un pipeline. Această parte măsoară experiența oamenilor
care produc acel cod și există pentru că un set de metrici de livrare poate
arăta excelent chiar în timp ce oamenii din spatele lui se epuizează, se
îneacă în întreruperi sau se dezangajează în tăcere. O organizație care se
uită doar la metricile DORA le poate îmbunătăți un an sau doi strângând mai
tare șurubul pe o echipă, exact până când fluctuația de personal, prăbușirea
calității sau epuizarea profesională șterg tot câștigul deodată. Această
parte este contragreutatea.

Piesa centrală este [cadrul SPACE](https://queue.acm.org/detail.cfm?id=3454124),
dezvoltat de cercetători de la Microsoft, GitHub și University of Victoria
tocmai ca un corectiv la obiceiul industriei de a măsura productivitatea
dezvoltatorilor printr-un singur indicator indirect, ușor de manipulat, cum
ar fi liniile de cod sau numărul de commituri. SPACE acoperă cinci
dimensiuni: satisfacție și bunăstare, performanță, activitate, comunicare și
colaborare, eficiență și flux. Disciplina centrală a cadrului, și motivul
pentru care această parte îl tratează cu aceeași rigoare pe care Partea 2 o
aplică propriilor metrici de flux, este că nicio dimensiune luată singură nu
e demnă de încredere; valoarea vine tocmai din a le ține pe toate cinci în
vedere împreună, astfel încât o echipă să nu poată arăta bine pe o axă
stricând în tăcere alta.

Pentru echipele mari, metricile de experiență a dezvoltatorilor răspund la o
întrebare la care DORA nu poate răspunde: este această performanță de livrare
sustenabilă și își păstrează organizația oamenii care o produc? Companiile
mari care ignoră această parte tind să descopere costul prin datele despre
fluctuația de personal și prin interviurile de ieșire, mult după ce paguba
s-a produs; administrațiile publice, care adesea lucrează sub constrângeri
salariale ce le limitează capacitatea de a concura doar prin compensație, au
motive deosebit de puternice să trateze experiența dezvoltatorilor ca pe o
preocupare de prim rang, gestionată activ, nu ca pe o idee de după.

## Subiectele din această parte

- **3.1 Cadrul SPACE:** Cele cinci dimensiuni împreună, de ce niciuna nu e
  demnă de încredere singură și cum construiești din ele un set de metrici
  cu adevărat echilibrat.
- **3.2 Metrici de satisfacție și bunăstare:** Măsurarea împlinirii,
  frustrării și riscului de epuizare, dimensiunea pe care nicio telemetrie de
  sistem nu o poate observa direct.
- **3.3 Metrici de performanță și indicatori indirecți de rezultat:**
  Dimensiunea cel mai ușor confundată cu activitatea și cum măsori în schimb
  contribuția reală la rezultate.
- **3.4 Metrici de activitate și limitele lor:** Numărul de commituri,
  liniile de cod și de ce aceasta este dimensiunea cea mai periculos de
  supraponderat.
- **3.5 Metrici de comunicare și colaborare:** Cum circulă de fapt
  informația între oameni și echipe și cum arată un tipar sănătos.
- **3.6 Eficiență și flux: munca profundă și întreruperile:** Protejarea
  timpului neîntrerupt de care are nevoie munca reală de inginerie și
  măsurarea frecării care îl erodează.
- **3.7 Sondaje despre experiența dezvoltatorilor și metrici DevEx:** Cum
  rulezi un sondaj care produce semnal de încredere, nu un concurs de
  popularitate, și cum îl combini cu date obiective.

## Cum se leagă aceste subiecte între ele

Subiectul 3.1 introduce împreună toate cele cinci dimensiuni SPACE, iar
subiectele 3.2 până la 3.6 iau apoi fiecare dimensiune pe rând, în
profunzime, în ordinea în care o prezintă cercetătorii SPACE. Subiectul 3.7
încheie partea cu mecanica practică a proiectării sondajelor, deoarece
satisfacția, performanța și colaborarea se bazează parțial pe date
autoraportate (distincția dintre instrumentare și autoraportare din
subiectul 1.5 este direct relevantă în toată această parte), iar un sondaj
prost proiectat subminează fiecare dintre subiectele precedente.

Disciplina centrală a acestei părți, echilibrul între dimensiuni în loc de
forță într-una singură, este cel mai clar exemplu de lucru din această carte
pentru principiul rezultate-înaintea-producției din subiectul 1.3, aplicat
oamenilor și nu unui pipeline de livrare. Activitatea (subiectul 3.4) este
dimensiunea SPACE cea mai apropiată de o metrică de producție pură, iar
această parte o tratează în consecință: utilă ca una dintre cinci intrări,
periculoasă ca semnal izolat. Citită împreună cu Partea 2, această parte
completează imaginea pe care DORA singur nu o poate oferi: nu doar dacă
software-ul ajunge repede și sigur la utilizatori, ci dacă oamenii care îl
livrează pot susține acest ritm.
