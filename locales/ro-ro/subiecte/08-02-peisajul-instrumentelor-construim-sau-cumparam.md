# 8.2 Peisajul instrumentelor: construim sau cumpărăm

## Prezentare generală și motivație

Fiecare organizație care pune în practică îndrumările acestei cărți se
confruntă, la un moment dat, cu o decizie practică de infrastructură: construiește
intern instrumente de metrici, cumpără o platformă comercială de analiză a
ingineriei sau, cel mai des în practică, o combinație a ambelor. Subiectul
tratează această decizie cu aceeași rigoare cu care subiectul 5.5 o aplică
oricărei alte investiții în inginerie: o analiză cost-beneficiu onestă, specifică
scării organizației tale, surselor de date existente și metricilor din carte pe
care intenționezi cu adevărat să le urmărești, nu un răspuns implicit valabil
uniform indiferent de context.

Piața instrumentelor comerciale de analiză a ingineriei s-a maturizat
considerabil, iar multe platforme oferă acum instrumentare solidă, în mare parte
automatizată, pentru metricile DORA (Partea 2), pentru datele despre pull
requesturi și revizuire (subiectul 2.9) și, tot mai mult, pentru infrastructura
de sondaje privind experiența dezvoltatorilor (subiectul 3.7). Această
maturitate a mutat calculul multor organizații spre cumpărarea cel puțin a
stratului fundamental, dar nu a eliminat avantajele reale ale opțiunii de a
construi pentru nevoi specifice și personalizate, în special în jurul
telemetriei rezultatelor, despre care subiectul 7.4 susține că este acum
centrul necesar al unui program de metrici și care este frecvent categoria cea
mai puțin standardizată și cea mai specifică organizației dintre cele tratate
în carte.

Pentru echipele mari, această decizie are consecințe reale și continue asupra
bugetului și a capacității de inginerie. Organizațiile mari trebuie adesea să
integreze instrumentele de metrici într-un peisaj cu adevărat eterogen de
sisteme vechi și moderne, ceea ce modelează semnificativ calculul construire
versus cumpărare; administrațiile publice se confruntă frecvent cu constrângeri
de achiziții publice și cu cerințe de suveranitate a datelor sau de securitate
care afectează material ce opțiuni comerciale sunt măcar viabile, înclinând
uneori decizia spre construire sau spre anumiți furnizori verificați, indiferent
de ce ar sugera o analiză cost-beneficiu pură.

## Principii-cheie

- **Rareori este o decizie de tipul totul sau nimic.** Majoritatea programelor
  de metrici mature combină instrumente cumpărate pentru metricile bine
  standardizate cu instrumente construite pentru telemetria rezultatelor
  specifică organizației.
- **Cumpără pentru metricile bine standardizate și larg necesare; construiește
  pentru cele cu adevărat specifice organizației.** Metricile DORA și analiza
  pull requesturilor sunt teritoriu de marfă; corelarea ta specifică a
  rezultatelor de business (subiectul 5.3) de obicei nu este.
- **Proprietatea și portabilitatea datelor contează la fel de mult ca
  compararea funcționalităților.** Un instrument care îți blochează datele de
  metrici este un risc durabil, nu doar o neplăcere.
- **Costul integrării este frecvent subestimat** într-o analiză de construire
  versus cumpărare, pentru ambele opțiuni.
- **Constrângerile de achiziții, securitate și suveranitate a datelor pot
  depăși un calcul cost-beneficiu pur**, în special pentru administrațiile
  publice.

## Recomandări

### Cumpără pentru stratul de marfă: infrastructura DORA, de revizuire și de sondaje

Pentru familiile de metrici cu instrumente comerciale mature și larg
disponibile, instrumentarea metricilor DORA (Partea 2), analiza pull
requesturilor și a revizuirii codului (subiectul 2.9) și platformele de sondaje
privind experiența dezvoltatorilor (subiectul 3.7), cumpărarea este de obicei
alegerea economică mai bună pentru majoritatea organizațiilor sub o anumită
scară, deoarece construirea unei infrastructuri echivalente dublează un efort
de inginerie în care mulți furnizori au investit deja masiv, cu diferențiere
reală limitată disponibilă prin construirea propriei versiuni.

### Construiește pentru telemetria rezultatelor cu adevărat specifică organizației

Pentru metricile de rezultat pe care subiectul 7.4 susține că ar trebui să fie
centrul de greutate al programului tău de metrici, corelarea rezultatelor de
business (subiectul 5.3), adoptarea funcționalităților legată de produsul tău
specific (subiectul 5.2), economia unitară legată de structura ta specifică de
costuri (subiectul 5.4), instrumentele comerciale sunt mult mai puțin
standardizate și adesea nu pot capta logica de business și modelul de date
specifice organizației tale fără personalizare extensivă și scumpă, care poate
ajunge să coste mai mult decât construirea internă a capacității echivalente,
cu control deplin asupra rezultatului.

### Evaluează proprietatea și portabilitatea datelor înainte de a te angaja cu un furnizor

Înainte de a semna un contract comercial, confirmă că îți poți exporta întregul
istoric al datelor de metrici într-un format standard, utilizabil, și înțelege
ce se întâmplă cu acele date și cu istoricul lor dacă schimbi furnizorul sau
întrerupi serviciul. O relație cu un furnizor din care este greu să ieși din
cauza [blocării](https://en.wikipedia.org/wiki/Vendor_lock-in) datelor este un risc organizațional durabil, nu doar o neplăcere, iar
această evaluare merită aceeași seriozitate ca orice alt angajament
important de infrastructură pe mai mulți ani.

### Bugetează realist costul integrării de ambele părți ale deciziei

Fie că construiești, fie că cumperi, costul integrării, conectarea
instrumentului la controlul versiunilor, CI/CD, urmărirea incidentelor și
sistemele de business reale, este frecvent subestimat în planificarea inițială
pentru oricare dintre căi. Bugetează explicit acest efort de integrare ca pe o
linie distinctă și semnificativă în analiza ta de construire versus cumpărare,
în loc să presupui că un instrument comercial va funcționa din prima cu
configurare minimă sau că un cost de integrare al unei soluții proprii este o
adăugire minoră la costul ei de dezvoltare.

### Ia în calcul explicit și devreme constrângerile de achiziții, securitate și suveranitate

Pentru administrațiile publice și organizațiile mari reglementate, cerințele de
suveranitate a datelor, nevoile de certificare de securitate și procesele de
achiziții pot îngusta sau elimina material anumite opțiuni comerciale,
indiferent de calitatea funcționalităților lor, înclinând uneori decizia spre
construire sau spre un set mai mic de furnizori verificați special.
Identifică aceste constrângeri explicit și devreme în procesul de evaluare, în
loc să le descoperi abia după ce un efort semnificativ de evaluare a fost deja
investit într-o opțiune care se dovedește neviabilă din motive fără legătură cu
capacitatea ei reală.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Cumperi instrumente comerciale | Rapid de pus în funcțiune, set matur de funcționalități, întreținut de furnizor | Mai puțin personalizabil pentru metrici de rezultat specifice organizației; posibilă blocare |
| Construiești instrumente interne | Personalizare completă, proprietate și control deplin asupra datelor | Investiție de inginerie semnificativă și continuă; dublează efortul pentru metrici de marfă |
| Hibrid: cumperi stratul de marfă, construiești stratul de rezultate | Echilibrează eficiența costurilor cu personalizarea reală acolo unde contează cel mai mult | Cere muncă de integrare pentru a lega coerent componentele cumpărate și cele construite |
| Cumperi totul, inclusiv telemetria rezultatelor, prin personalizare extensivă la furnizor | O singură relație cu furnizorul, achiziții potențial mai simple | Poate ajunge la fel de scump ca construirea, cu mai puțin control final asupra rezultatului |

Tensiunea centrală este **nevoia de personalizare versus costul de
dezvoltare**. Metricile care beneficiază cel mai mult de personalizare,
telemetria rezultatelor legată special de afacerea ta, sunt și cele mai scumpe
de construit bine; metricile cele mai ieftine de cumpărat, DORA și analiza
revizuirii, sunt și cele la care personalizarea reală contează cel mai puțin.
Rezolvă tensiunea potrivind direct decizia cu acest tipar: cumpără unde te
servește bine standardizarea, construiește unde contextul tău specific o cere
cu adevărat și bugetează realist costul integrării de ambele părți ale acestei
împărțiri.

## Întrebări de discutat cu echipa ta

1. **Pentru fiecare familie de metrici tratată în carte, am beneficia cu
   adevărat de personalizare sau un instrument comercial standardizat ne-ar
   servi la fel de bine?** Parcurge explicit Părțile 2–6 și așază fiecare
   familie de metrici în coloana „cumpărăm” sau „construim”, pe baza acestui
   test specific.

2. **Am evaluat opțiunile de export și portabilitate a datelor la furnizorul
   nostru actual sau potențial sau presupunem că am putea pleca ușor dacă ar fi
   nevoie?** Verifică direct, în loc să presupui; blocarea datelor este adesea
   descoperită abia când o organizație încearcă efectiv să schimbe furnizorul.

3. **A luat analiza noastră inițială de construire versus cumpărare în calcul
   realist costul integrării sau s-a concentrat mai ales pe taxele de licență
   față de orele de dezvoltare?** Reia o decizie recentă privind instrumentele
   și verifică dacă costul integrării a fost cu adevărat estimat sau
   semnificativ subestimat.

4. **Ne confruntăm cu constrângeri de achiziții, securitate sau suveranitate a
   datelor care ar elimina anumite opțiuni comerciale indiferent de calitatea
   funcționalităților?** Identifică explicit aceste constrângeri înainte, nu
   după, ce investești efort semnificativ de evaluare în opțiuni care s-ar
   putea dovedi neviabile.

5. **Este peisajul nostru actual de instrumente un hibrid deliberat, care
   potrivește construirea și cumpărarea acolo unde fiecare are sens, sau s-a
   acumulat prin decizii ad-hoc, fiecare rezonabilă în parte, de-a lungul
   timpului?** Fii sincer cu privire la tiparul care descrie de fapt situația
   ta actuală.

6. **Cât ne-ar costa, în efort și risc, să schimbăm azi furnizorul nostru
   actual de instrumente de metrici, dacă ar fi nevoie?** Această întrebare
   concretă testează expunerea ta reală la riscul de blocare a datelor, dincolo
   de ce promit nominal termenii contractuali ai furnizorului.

## Perspectiva sectorială

**Startup.** Cumpără implicit instrumente de marfă la această scară; construirea
unei infrastructuri proprii de metrici este rareori o bună folosire a
capacității de inginerie timpurii, rare, când există opțiuni comerciale mature
și ieftine pentru metricile DORA și de revizuire în special. Rezervă orice efort
de construire pentru singura metrică de rezultat (subiectul 5.3) care reflectă
cel mai direct valoarea de bază a produsului tău.

**Afacere mică.** Majoritatea opțiunilor comerciale se adaptează rezonabil de
bine la scară mică și au prețuri accesibile organizațiilor mici; cumpărarea
stratului de marfă este aproape întotdeauna alegerea potrivită, iar construirea
a ceva personalizat este rareori justificată până când organizația ta a crescut
considerabil și a dezvoltat nevoi cu adevărat specifice.

**Companie mare.** Abordarea hibridă recomandată de acest subiect își merită
complexitatea aici: cumpără stratul de marfă la scară (adesea cu o pârghie
semnificativă de negociere pentru condiții favorabile) și investește deliberat
în construirea stratului de telemetrie a rezultatelor specific organizației,
deoarece logica ta de business și complexitatea modelului de date la această
scară depășesc de obicei ce poate găzdui instrumentele comerciale generice fără
personalizare extensivă și scumpă.

**Administrație publică.** Procesele de achiziții, cerințele de certificare de
securitate și constrângerile de suveranitate a datelor domină frecvent această
decizie mai mult decât ar sugera o comparație pură de funcționalități sau
costuri. Implică din timp părțile interesate din achiziții și securitate în
procesul de evaluare și fii pregătit ca opțiunea de a construi să fie cu
adevărat mai atractivă aici decât într-un context comparabil din sectorul
privat, special din cauza acestor constrângeri, nu pentru că a construi ar fi
în sine mai bine.

## Exemple

**Companie mare.** O companie de software a încercat inițial să construiască o
platformă de metrici complet personalizată, care să acopere fiecare familie de
metrici din Partea 2 până în Partea 6, un efort pe mai mulți ani, care a
consumat capacitate de inginerie semnificativă și tot a rămas în urma ofertelor
comerciale mature pentru metricile standardizate DORA și de revizuire. O
strategie revizuită a adoptat o platformă comercială pentru aceste metrici de
marfă, eliberând echipa internă de platformă să se concentreze exclusiv pe
construirea telemetriei de corelare a rezultatelor de business și de economie
unitară (subiectele 5.3, 5.4), cu adevărat specifică modelului de afaceri al
companiei, pe care niciun instrument comercial nu l-ar fi oferit din prima.
Această abordare hibridă a livrat într-un singur an un program de metrici mai
complet și mai util decât strategia de a construi totul obținuse după doi.

**Administrație publică.** Evaluarea inițială a platformelor comerciale de
analiză a ingineriei, făcută de o agenție federală, a constatat că niciunul
dintre furnizorii disponibili nu putea îndeplini cerințele agenției privind
suveranitatea datelor, care impuneau ca toate datele de metrici de inginerie să
rămână în anumite centre de date guvernamentale certificate. În loc să
abandoneze complet opțiunea de a cumpăra, agenția a identificat un subset mai
mic de furnizori care ofereau variante de implementare în cloud suveran,
certificate guvernamental, la un cost suplimentar modest față de prețul
comercial standard, și a pus cu succes în practică un program hibrid: instrumente
cumpărate pentru stratul de metrici de marfă în interiorul limitei de
suveranitate cerute și instrumente interne construite pentru nevoile specifice
ale agenției de telemetrie a rezultatelor pentru cetățeni, pe care niciun
furnizor comercial disponibil nu le acoperea, indiferent de considerentele de
suveranitate.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea unei strategii hibride deliberate de construire versus cumpărare
este evitarea ambelor moduri de eșec ilustrate de exemplele subiectului:
investiția irosită, pe mai mulți ani, de inginerie în construirea unei
capacități de marfă care există deja ieftin pe piață și frustrarea, apoi costul
final de personalizare, al forțării unei nevoi cu adevărat specifice
organizației într-un instrument comercial nepotrivit. Exemplul din companie
mare de mai sus o arată concret: abordarea hibridă a livrat mai multă valoare
reală într-un an decât strategia de a construi totul în doi.

Costul total de proprietate pentru oricare cale include costul integrării, adesea
subestimat și, pentru instrumentele cumpărate în mod special, costul de risc
continuu al unei posibile blocări la furnizor, dacă portabilitatea datelor nu
este confirmată și protejată contractual de la început. Bugetarea realistă a
ambelor, în loc de o concentrare îngustă doar pe taxele de licență sau pe orele
de dezvoltare, produce o imagine a costului total mult mai exactă pentru
oricare dintre opțiuni.

## Anti-modele și capcane

- **Construirea de instrumente personalizate pentru metrici de marfă, bine
  standardizate:** dublează un efort de inginerie în care mulți furnizori au
  investit deja masiv.
- **Cumpărarea de instrumente comerciale pentru telemetria rezultatelor cu
  adevărat specifică organizației, fără verificarea prealabilă a potrivirii:**
  riscă personalizare scumpă și nepotrivită sau o nevoie neacoperită.
- **Lipsa evaluării exportului și portabilității datelor înainte de angajarea
  cu un furnizor:** riscă o blocare durabilă și scumpă, descoperită abia când
  încerci să pleci.
- **Subestimarea costului integrării de ambele părți ale deciziei:** produce o
  comparație inexactă a costului total și termene nerealiste.
- **Ignorarea constrângerilor de achiziții, securitate sau suveranitate până
  târziu în procesul de evaluare:** irosește efortul de evaluare pe opțiuni
  care se dovedesc neviabile din motive fără legătură cu capacitatea.
- **Tratarea deciziei ca una singură, de tipul totul sau nimic:** ratează
  abordarea hibridă, care se potrivește cel mai bine nevoilor reale, mixte,
  ale majorității organizațiilor.

## Model de maturitate

- **Nivelul 1, Inițiere:** Deciziile privind instrumentele se iau ad-hoc, fără
  o analiză deliberată de construire versus cumpărare sau o luare în calcul a
  portabilității datelor.
- **Nivelul 2, Dezvoltare:** Are loc o anumită analiză, dar costul integrării
  este subestimat de rutină, iar abordarea hibridă nu este luată în calcul
  deliberat.
- **Nivelul 3, Standardizare:** O strategie hibridă deliberată de construire
  versus cumpărare potrivește consecvent metricile de marfă cu instrumente
  cumpărate și telemetria rezultatelor specifică organizației cu instrumente
  construite.
- **Nivelul 4, Gestionare:** Portabilitatea datelor este confirmată și protejată
  contractual pentru toate instrumentele cumpărate, iar constrângerile de
  achiziții, securitate și suveranitate sunt luate în calcul explicit și
  devreme.
- **Nivelul 5, Orchestrare:** Peisajul de instrumente al organizației reflectă o
  strategie hibridă matură și deliberată, revizuită regulat pe măsură ce
  ofertele comerciale și nevoile organizației evoluează, cu valoare
  demonstrată atât din componentele cumpărate, cât și din cele construite.

## Idei de discuție

1. Care dintre metricile noastre actuale ar beneficia cel mai mult de o personalizare pe care acum nu o primim?
2. Am confirmat că ne-am putea exporta întregul istoric al datelor de metrici dacă ar trebui să schimbăm furnizorul?
3. A luat ultima noastră decizie privind instrumentele în calcul realist costul integrării?
4. Ce constrângere de achiziții, securitate sau suveranitate am putea subestima?
5. Cum ar arăta o strategie hibridă deliberată pentru setul nostru specific de metrici?

## Concluzii principale

- Rareori este totul sau nimic; majoritatea programelor mature **combină
  instrumente cumpărate pentru metricile de marfă cu instrumente construite
  pentru telemetria rezultatelor specifică organizației**.
- **Cumpără pentru metricile standardizate** (DORA, analiza revizuirii,
  infrastructura de sondaje); **construiește pentru măsurarea rezultatelor cu
  adevărat specifică organizației**.
- Evaluează **proprietatea și portabilitatea datelor** înainte de a te angaja
  cu un furnizor; blocarea este un risc durabil, nu doar o neplăcere.
- **Bugetează realist costul integrării** de ambele părți ale deciziei; este
  frecvent subestimat.
- **Constrângerile de achiziții, securitate și suveranitate** pot depăși un
  calcul cost-beneficiu pur, în special pentru administrațiile publice.

## Referințe și lecturi suplimentare

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (familiile de metrici cărora li se aplică analiza de
  construire versus cumpărare a acestui subiect).
- *Cloud FinOps*, de J.R. Storment și Mike Fuller (principii de analiză a
  costurilor aplicabile deciziilor de investiție în instrumente).
- FinOps Framework al FinOps Foundation, [finops.org](https://www.finops.org/)
  (îndrumări practice pentru evaluarea și gestionarea costurilor instrumentelor
  cloud și SaaS).
- Documentația programului american Federal Risk and Authorization Management
  Program (FedRAMP): îndrumări autorizate privind securitatea și cerințele de
  suveranitate pentru instrumentele cloud guvernamentale.
