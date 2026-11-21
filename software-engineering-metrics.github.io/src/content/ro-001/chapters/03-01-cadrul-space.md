# 3.1 Cadrul SPACE

## Prezentare generală și motivație

[Cadrul SPACE](https://queue.acm.org/detail.cfm?id=3454124), publicat în 2021
de cercetătorii Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila,
Thomas Zimmermann, Brian Houck și Jenna Butler, a fost construit pentru a
răspunde unei probleme precise: metricile de [productivitate a
dezvoltatorilor](https://en.wikipedia.org/wiki/Productivity) reduse la un
singur număr (liniile de cod, numărul de commituri, story points) sunt
manipulate cu ușurință și induc de rutină în eroare. SPACE propune în schimb
măsurarea pe cinci dimensiuni: **Satisfacție și bunăstare** (Satisfaction and
well-being), **Performanță** (Performance), **Activitate** (Activity),
**Comunicare și colaborare** (Communication and collaboration) și
**Eficiență și flux** (Efficiency and flow). Nicio literă nu e menită să
stea singură; contribuția reală a cadrului este disciplina de a le ține pe
toate cinci în vedere împreună, astfel încât o echipă să nu poată părea
productivă pe o axă în timp ce o strică în tăcere pe alta.

Contează pentru că productivitatea dezvoltatorilor nu este un singur lucru.
O echipă poate fi foarte activă (multe commituri, multe pull requesturi) și
totuși să performeze slab (munca nu mișcă rezultatele care contează). O
echipă poate performa bine pe termen scurt în timp ce satisfacția se
prăbușește, un indicator anticipativ al fluctuației de personal și al
prăbușirii calității care apar luni mai târziu. Ideea SPACE, construită
direct pe subiectele 1.2 și 1.3 ale acestei cărți, este că oricare dintre
aceste dimensiuni, urmărită ca țintă de sine stătătoare, va fi manipulată pe
seama celorlalte, iar cadrul există tocmai pentru a face vizibil acest
compromis înainte să producă pagube reale.

Pentru echipele mari, SPACE oferă conducerii un vocabular comun pentru o
conversație care altfel alunecă spre dimensiunea cel mai ușor de măsurat,
aproape întotdeauna activitatea. Companiile mari care compară productivitatea
între multe echipe au nevoie de un cadru care rezistă tentației de a număra
commituri; administrațiile publice, aflate sub presiunea recrutării și
reținerii pe o piață a muncii competitivă, au nevoie de date despre
satisfacție și bunăstare la fel de serios cum au nevoie de date despre
livrare, pentru că pierderea unui inginer experimentat din cauza epuizării
costă mult mai mult decât a economisit vreodată producția unui singur sprint.

## Principii-cheie

- **Nicio dimensiune SPACE nu este demnă de încredere izolat.** Valoarea
  cadrului vine tocmai din măsurarea mai multor dimensiuni împreună.
- **Cel puțin o metrică din cel puțin trei dimensiuni, amestecând surse
  subiective și obiective, este minimul pentru o imagine echilibrată.** Un set
  de metrici extras în întregime dintr-o dimensiune sau dintr-un singur tip de
  date nu folosește de fapt SPACE.
- **Activitatea este dimensiunea cel mai predispusă la folosirea abuzivă ca
  indicator indirect unic.** Este cea mai ușor de măsurat și cea mai puțin
  reprezentativă pentru valoarea reală, luată singură.
- **Măsurarea la nivel de echipă și la nivel individual cer tratamente
  diferite.** SPACE a fost conceput în primul rând pentru perspective la nivel
  de echipă și de sistem, nu pentru fișe de scor individuale.
- **Cele cinci dimensiuni interacționează.** O schimbare care o îmbunătățește
  pe una o poate degrada pe alta, iar cadrul există ca să prindă acest
  compromis.

## Recomandări

### Construiește-ți setul de metrici din cel puțin trei dimensiuni înainte să te încrezi în el

Nu adopta SPACE alegându-ți o singură dimensiune favorită, de obicei
activitatea sau performanța, și declarând treaba încheiată. Alege deliberat
cel puțin o metrică din cel puțin trei dintre cele cinci dimensiuni,
amestecând instrumentarea obiectivă (subiectul 1.5) cu date subiective din
sondaje (subiectul 3.7), înainte de a prezenta orice concluzie despre
productivitatea echipei. Această compoziție minimă împiedică SPACE să
degenereze înapoi în problema indicatorului unic pe care a fost conceput s-o
rezolve.

### Tratează metricile de activitate ca pe context, niciodată ca pe titlu

Numărul de commituri, liniile de cod și numărul de pull requesturi sunt date
legitime ale dimensiunii activitate din SPACE, dar nu ar trebui să fie
niciodată metrica principală sau singură prezentată despre productivitatea
unei echipe. Folosește datele de activitate ca să oferi context pentru
celelalte dimensiuni, de exemplu observând că o scădere a activității a
coincis cu o creștere a satisfacției pentru că echipa a avut în sfârșit loc
să plătească din datoria tehnică, și nu ca verdict independent. Subiectul 3.4
tratează în profunzime riscurile specifice ale acestei dimensiuni.

### Aplică SPACE la nivel de echipă și de sistem, nu la nivel individual

Cercetarea originală SPACE și adoptarea ei ulterioară în industrie tratează
cadrul ca pe o lentilă pentru înțelegerea productivității echipelor și a
organizațiilor, nu ca pe o fișă de scor a performanței individuale. Aplicarea
dimensiunilor SPACE pentru a clasifica indivizi, mai ales a dimensiunii
activitate, recreează exact riscul de manipulare împotriva căruia avertizează
subiectul 1.2 și folosește greșit un cadru care nu a fost niciodată validat
pentru o asemenea utilizare.

### Urmărește compromisurile dintre dimensiuni, nu doar mișcarea în interiorul uneia

Adevărata putere de diagnostic a cadrului vine din observarea felului în care
dimensiunile se mișcă una față de alta. O metrică de performanță în creștere
alături de o satisfacție în scădere este un semn de alarmă care merită
investigat imediat, putând indica un ritm nesustenabil. O metrică de
activitate în creștere alături de o performanță constantă sau în scădere
sugerează muncă de umplutură, nu progres autentic. Revizuiește toate cele
cinci dimensiuni împreună, la o cadență fixă, tocmai ca să prinzi aceste
tipare între dimensiuni, nu doar ca să verifici fiecare număr izolat.

### Amestecă cadențele în mod potrivit între dimensiuni

Unele dimensiuni SPACE se schimbă lent și se măsoară cel mai bine periodic
(satisfacția, de obicei în cicluri trimestriale de sondaj); altele se schimbă
repede și beneficiază de urmărire automată, mai frecventă (activitatea,
eficiența și fluxul, ambele în mare parte instrumentabile din sistemele
existente). Potrivește cadența de măsurare cu ritmul natural de schimbare al
fiecărei dimensiuni, în loc să forțezi fiecare metrică pe același calendar de
raportare.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Set de metrici dintr-o singură dimensiune (de obicei activitatea) | Simplu, ieftin, familiar | Ușor de manipulat, ratează costul uman al practicilor nesustenabile |
| Adoptarea completă a SPACE pe cinci dimensiuni | Echilibrat, rezistă manipulării pe o singură axă, prinde compromisurile | Cere mai multă instrumentare și mai multă investiție în sondaje |
| Aplicarea SPACE la nivel de echipă | Corespunde utilizării validate a cadrului, protejează indivizii de aplicarea greșită | Nu poate răspunde la întrebările la nivel individual pe care conducerea le dorește uneori |
| Aplicarea SPACE la nivel individual | Pare mai direct acționabilă pentru unii manageri | Folosește greșit cadrul; risc mare de manipulare și de scădere a moralului |

Tensiunea centrală este **completitudinea măsurării versus cost și
complexitate**. O implementare SPACE completă și echilibrată cere mai multă
instrumentare, mai mult efort de proiectare a sondajelor și mai multă
disciplină pentru a revizui împreună toate cele cinci dimensiuni decât un
simplu tablou de bord de activitate. Rezolvă tensiunea începând cu un set cu
adevărat minim, dar echilibrat, cel puțin o metrică din cel puțin trei
dimensiuni, în loc să renunți complet la disciplina cadrului sau să încerci o
versiune copleșitoare, complet instrumentată, a tuturor celor cinci
dimensiuni din prima zi.

## Întrebări de discutat cu echipa ta

1. **Setul nostru actual de metrici de productivitate se bazează pe cel puțin
   trei dimensiuni SPACE sau este dominat doar de date de activitate?**
   Auditează-ți tabloul de bord explicit față de cele cinci dimensiuni; cele
   mai multe organizații, evaluate cinstit, sunt mult mai încărcate cu
   activitate decât își dau seama.

2. **Am văzut vreodată o dimensiune SPACE îmbunătățindu-se în timp ce alta se
   degrada în tăcere și am observat asta atunci?** Acest compromis între
   dimensiuni este exact ce a fost conceput cadrul să prindă. Uită-te în
   urmă, pe ultimul an, după o perioadă în care metricile de livrare s-au
   îmbunătățit și întreabă ce arătau datele despre satisfacție sau bunăstare
   în aceeași fereastră.

3. **Sunt datele SPACE folosite vreodată, chiar și informal, pentru a evalua
   sau compara indivizi în loc de echipe?** Asta folosește greșit cadrul și
   invită la manipulare. Fii sincer despre cum sunt discutate de fapt aceste
   metrici în practică, nu doar despre cum spune politica că ar trebui
   folosite.

4. **Cum am observa dacă o echipă și-a îmbunătățit metricile de performanță
   cu prețul unui ritm nesustenabil?** Fără date despre satisfacție și
   bunăstare revizuite alături de datele de performanță, acest fel de
   compromis rămâne invizibil până apare sub forma fluctuației de personal sau
   a unei prăbușiri a calității, luni mai târziu.

5. **Care este cadența noastră de măsurare pentru fiecare dintre cele cinci
   dimensiuni și se potrivește cu cât de repede se schimbă fiecare?** Un
   sondaj trimestrial de satisfacție asociat cu date de activitate în timp
   real este o nepotrivire rezonabilă de cadență; aceeași cadență aplicată
   fără gândire tuturor celor cinci nu este.

6. **Dacă un nou manager de inginerie ar începe mâine și s-ar uita doar la
   tabloul nostru de bord, ar obține o imagine echilibrată a productivității
   echipei sau una deformată?** Este un test practic dacă setul nostru de
   metrici a atins cu adevărat echilibrul SPACE sau doar face semne spre cadru
   rămânând, în practică, dominat de activitate.

## Perspectiva sectorială

**Startup.** O implementare completă pe cinci dimensiuni este de obicei
exagerată pentru o mână de ingineri care vorbesc zilnic și pot simți direct
sănătatea satisfacției și a colaborării. Singurul obicei care merită adoptat
devreme este rezistența la tentația metricilor doar de activitate, pe măsură
ce echipa crește peste dimensiunea la care conștientizarea informală acoperă
totul.

**Afacere mică.** Fără o funcție dedicată de analiză a datelor despre oameni,
păstrează simplitatea: asociază datele de livrare pe care le ai deja
(subiectul 2.10) cu o verificare scurtă, informală și regulată a satisfacției,
chiar și un simplu sondaj-puls cu o singură întrebare. Această asociere
minimă captează deja disciplina de bază a cadrului mult mai bine decât un
tablou de bord doar de activitate.

**Companie mare.** Aici cadrul complet își merită complexitatea.
Standardizează un set echilibrat de metrici SPACE între echipe, ca
conducerea să poată compara productivitatea corect, în loc să alunece spre
echipa cu cel mai impresionant grafic de commituri, și investește în
infrastructura de sondaje pe care o tratează subiectul 3.7, pentru ca datele
despre satisfacție și colaborare să fie la fel de fiabile ca instrumentarea
obiectivă.

**Administrație publică.** Presiunea recrutării și reținerii, mai ales acolo
unde salariile din sectorul public nu pot concura mereu cu ofertele din
sectorul privat, face din datele despre satisfacție și bunăstare o
preocupare cu adevărat strategică, nu un adaos secundar. Tratează SPACE la fel
de serios ca metricile de livrare în planificarea forței de muncă și în
justificarea bugetului, deoarece costul pierderii unui inginer experimentat
din cauza epuizării se măsoară în luni de cunoștințe instituționale pe care un
înlocuitor nu le poate furniza imediat.

## Exemple

**Companie mare.** Conducerea de inginerie a unei companii de software
urmărise ani de zile numărul de commituri și story points finalizate ca
principal semnal de productivitate. După adoptarea unui set SPACE mai complet,
incluzând un sondaj trimestrial de satisfacție și o analiză a rețelei de
colaborare (subiectul 3.5), conducerea a descoperit că echipa cu cele mai
mari cifre de activitate avea și cele mai mici scoruri de satisfacție și cea
mai mare rată de plecări voluntare în anul următor. Cifrele de activitate
singure fuseseră activ înșelătoare; imaginea mai completă a dus la o reducere
deliberată a volumului de lucru simultan al acelei echipe (principiul WIP din
subiectul 2.5 aplicat la nivel uman) și la o recuperare măsurabilă atât a
satisfacției, cât și, în cele din urmă, a performanței sustenabile.

**Administrație publică.** O agenție națională de servicii digitale, care
concura pentru talente de inginerie cu salarii din sectorul privat pe care nu
le putea egala, a adoptat un set echilibrat de metrici SPACE tocmai pentru a
susține investiții nemonetare în retenție: unelte mai bune, timp de
concentrare protejat și mai puțină frecare în procese. Datele sondajului de
satisfacție, combinate cu metricile de eficiență și flux (subiectul 3.6), au
arătat că frecvența întreruperilor, nu compensația, era cel mai puternic
predictor al intenției de plecare în datele din interviurile de ieșire.
Investiția ulterioară a agenției într-o politică de timp de concentrare
protejat, justificată direct de aceste date SPACE, a fost corelată cu o
îmbunătățire măsurabilă a retenției în următoarele optsprezece luni.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea adoptării complete a SPACE înseamnă fluctuație de personal
evitată și prăbușiri de calitate cauzate de epuizare evitate, ambele mult mai
scumpe decât costul de instrumentare al cadrului. Un set de metrici doar de
activitate poate arăta excelent un an sau doi, exact până când costul uman
ajunge din urmă deodată, moment în care costul înlocuirii expertizei pierdute
și al reconstruirii sănătății echipei depășește cu mult orice câștig de
productivitate pe care setul îngust de metrici părea vreodată să-l arate.

Costul total de proprietate include infrastructura de sondaje (subiectul 3.7)
și disciplina de a revizui împreună toate cele cinci dimensiuni, în loc să
alegi implicit pe cea mai ușoară. Merită cu adevărat să plătești acest cost:
exemplul de companie mare de mai sus arată un tipar real, descoperibil,
activitate ridicată care maschează risc ridicat de plecări, pe care un set
mai îngust de metrici nu l-ar fi scos la iveală până când paguba era deja
făcută.

## Anti-modele și capcane

- **Adoptarea SPACE doar cu numele, rămânând în practică dominat de
  activitate:** cel mai frecvent mod de eșec, care anulează întregul scop al
  cadrului.
- **Aplicarea dimensiunilor SPACE la fișe de scor individuale:** folosește
  greșit un cadru validat pentru perspective la nivel de echipă și de sistem.
- **Revizuirea dimensiunilor izolat, în loc să urmărești compromisurile
  dintre ele:** ratează tiparul pe care SPACE este conceput special să-l
  prindă.
- **Forțarea tuturor dimensiunilor pe aceeași cadență de măsurare:** risipește
  efort pe dimensiunile care se schimbă lent și măsoară insuficient pe cele
  care se schimbă repede.
- **Tratarea unui singur scor de sondaj de satisfacție drept suficient, fără
  date obiective:** pierde echilibrul dintre sursele subiective și obiective
  pe care îl cere cadrul.
- **Ignorarea unei tendințe în înrăutățire pe o dimensiune pentru că alta
  arată bine:** exact eșecul pe care disciplina cadrului între dimensiuni
  există ca să-l prevină.

## Model de maturitate

- **Nivelul 1, Inițiere:** Productivitatea se măsoară doar prin metrici de
  activitate, fără date despre satisfacție, colaborare sau eficiență.
- **Nivelul 2, Dezvoltare:** Unele dimensiuni suplimentare sunt măsurate
  informal, dar nu există o revizuire consecventă între dimensiuni și niciun
  standard minim de compoziție.
- **Nivelul 3, Standardizare:** Un set echilibrat de metrici, din cel puțin
  trei dimensiuni SPACE, este aplicat consecvent la nivel de echipă în toată
  organizația.
- **Nivelul 4, Gestionare:** Toate cele cinci dimensiuni sunt revizuite
  împreună la o cadență regulată, compromisurile dintre dimensiuni sunt
  investigate activ, iar cadrul informează decizii reale de dotare cu
  personal și de proces.
- **Nivelul 5, Orchestrare:** Datele SPACE modelează direct planificarea forței
  de muncă și investițiile în retenție, iar organizația poate indica
  intervenții concrete, informate de tiparele dintre dimensiuni, care au
  îmbunătățit măsurabil împreună atât livrarea, cât și bunăstarea
  dezvoltatorilor.

## Idei de discuție

1. Care dimensiune SPACE este cel mai puțin măsurată în setul nostru actual de metrici?
2. Am văzut vreodată activitatea unei echipe crescând în timp ce satisfacția scădea în tăcere?
3. Cum am prinde astăzi o echipă care sacrifică sustenabilitatea pe termen lung pentru producție pe termen scurt?
4. Sunt folosite date apropiate de SPACE pentru a evalua indivizi în loc de echipe?
5. Cum ar arăta, concret, un tablou de bord al productivității cu adevărat echilibrat pentru noi?

## Concluzii principale

- SPACE acoperă cinci dimensiuni, **Satisfacție și bunăstare, Performanță,
  Activitate, Comunicare și colaborare, Eficiență și flux**, iar niciuna nu
  este demnă de încredere singură.
- Construiește un set de metrici din **cel puțin trei dimensiuni**,
  amestecând surse de date obiective și subiective.
- Tratează **metricile de activitate ca pe context**, niciodată ca pe
  semnalul principal de productivitate (subiectul 3.4).
- Aplică SPACE la **nivel de echipă și de sistem**, nu ca fișă de scor
  individuală.
- Revizuiește dimensiunile împreună, urmărind **compromisurile dintre
  dimensiuni**, nu doar mișcarea în interiorul uneia singure.

## Referințe și lecturi suplimentare

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck și Jenna Butler, „The SPACE of Developer
  Productivity”, *ACM Queue* (2021): lucrarea originală despre cadrul SPACE.
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (fundamentul de cercetare comun cu metricile DORA).
- *Peopleware: Productive Projects and Teams*, de Tom DeMarco și Timothy
  Lister (pledoaria clasică pentru tratarea productivității dezvoltatorilor ca
  o problemă umană, nu pur mecanică).
- *Drive: The Surprising Truth About What Motivates Us*, de Daniel H. Pink
  (cercetare despre motivație, relevantă pentru măsurarea satisfacției și a
  bunăstării).
