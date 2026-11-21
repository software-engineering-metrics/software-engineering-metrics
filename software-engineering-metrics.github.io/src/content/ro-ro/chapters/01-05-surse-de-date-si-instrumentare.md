# 1.5 Surse de date și instrumentare

## Prezentare generală și motivație

O metrică este de încredere doar cât sunt datele de dedesubt, iar majoritatea
programelor de metrici cheltuie mult mai mult efort proiectând tablouri de
bord decât verificând fluxul care le alimentează. Este pe dos. Un grafic
frumos proiectat, construit pe o instrumentare inconsecventă, autoraportată
sau stricată pe tăcute, este mai rău decât niciun grafic, pentru că arată
autoritar în timp ce greșește. Acest subiect este despre fundația
neglamuroasă pe care o presupune restul cărții: de unde vin de fapt datele de
inginerie, când să ai mai multă încredere în instrumentarea automată decât în
autoraportare și eșecurile de calitate a datelor care invalidează pe tăcute o
metrică înainte ca cineva să observe.

Datele ingineriei software vin dintr-o mână de tipuri de surse, fiecare cu
caracteristici diferite de fiabilitate. Controlul versiunilor și fluxurile
[CI/CD](https://en.wikipedia.org/wiki/CI/CD) generează înregistrări obiective,
cu marcaj de timp și greu de falsificat despre ce s-a întâmplat de fapt.
Sistemele de urmărire a problemelor și uneltele de management de proiect
generează înregistrări care depind de oameni care actualizează starea corect și
prompt, ceea ce fac adesea inconsecvent. Sondajele generează date autoraportate,
de neprețuit pentru lucruri pe care niciun sistem nu le poate observa, precum
satisfacția, dar supuse prejudecății de reamintire și efectelor de dezirabilitate
socială. Platformele de observabilitate generează telemetrie la nivel de sistem,
obiectivă, dar care acoperă doar ce a fost instrumentat. A ști din ce categorie
vin datele unei metrici îți spune cât să te încrezi în ea și ce moduri de eșec să
urmărești.

La scara unei companii mari sau a administrației publice, problemele de calitate
a datelor se compun, pentru că distanța dintre originea datelor și folosirea lor
finală într-un tablou de bord crește prin mai multe sisteme, integrări și
transformări. Un câmp care înseamnă un lucru în sistemul sursă poate însemna
ceva subtil diferit până ajunge la un strat de raportare, iar nimeni din aval
nu observă pentru că numărul încă pare plauzibil. A face instrumentarea corect
este mai puțin captivant decât a face cadrele corect, dar este fundația pe care
stă tot restul cărții.

## Principii-cheie

- **Preferă instrumentarea autoraportării oriunde sistemul poate observa
  direct evenimentul.** Un marcaj de timp al unei implementări din flux este mai
  de încredere decât numărul de implementări autoraportat de o echipă.
- **Folosește autoraportarea doar pentru ce nu poate fi observat direct.**
  Satisfacția, frecarea percepută și bunăstarea nu au un substitut într-un
  sistem de evidență; întreabă direct și proiectează bine sondajul (subiectul
  3.7). Rezervă autoraportarea special pentru această categorie.
- **Datele fiecărei metrici au un sistem sursă, o metodă de colectare și un mod
  de eșec cunoscut.** Documentează-le pe toate trei, nu doar definiția.
- **Calitatea datelor se degradează pe tăcute.** Un flux care funcționa corect
  acum un an poate fi stricat azi pe tăcute, iar un tablou de bord va continua
  să afișeze un număr greșit fără să se plângă.
- **Instrumentează în punctul de adevăr, nu în aval de o traducere.** Fiecare
  salt între eveniment și tabloul de bord este o ocazie ca sensul să derive.

## Recomandări

### Asociază fiecare metrică cu sistemul ei sursă real înainte de a avea încredere în ea

Pentru fiecare metrică de pe un tablou de bord, numește sistemul specific care
generează evenimentul de dedesubt: fluxul CI/CD pentru evenimentele de
implementare, gazda de control al versiunilor pentru evenimentele de commit și
de integrare, sistemul de urmărire a incidentelor pentru înregistrările de
întreruperi, platforma de sondaje pentru satisfacția autoraportată. Dacă nu
poți numi sistemul exact, nu știi de fapt de unde vine numărul și nu-i poți
evalua fiabilitatea. Această asociere este o condiție prealabilă pentru carta
de guvernanță din subiectul 1.4, nu un exercițiu separat.

### Instrumentează la eveniment, nu la raport

Cele mai fiabile date captează un eveniment automat în momentul în care se
petrece: un flux înregistrează o implementare în clipa în care se termină, un
sistem de control al versiunilor înregistrează o integrare în clipa în care
aterizează. Datele care depind de un om care își amintește să actualizeze
ulterior un câmp de stare, marcând un tichet „terminat”, înregistrând manual o
implementare într-o foaie de calcul, își pierd acuratețea cu cât se află mai
departe de evenimentul real și cu cât persoana responsabilă este mai ocupată.
Oriunde există un eveniment automat, preferă-l unui indicator indirect
raportat de om pentru același fapt.

### Rezervă sondajele pentru ce poate spune doar o persoană

Unele lucruri nu pot fi observate din telemetria sistemului: dacă un inginer
simte că munca lui are sens, dacă un proces i se pare frustrant, dacă riscul de
epuizare crește. Acestea cer să întrebi direct, iar un sondaj bine proiectat
(subiectul 3.7 acoperă mecanica) este unealta potrivită. Greșeala este să
folosești autoraportarea pentru lucruri pe care un sistem le-ar putea observa
direct, cerând inginerilor să-și estimeze propria frecvență a implementărilor,
în loc s-o extragi din flux, ceea ce introduce zgomot și prejudecăți inutile în
date care ar fi putut fi obiective.

### Încorporează verificări ale calității datelor în fluxul însuși

Tratează fluxurile de metrici cu aceeași rigoare ca pe codul de producție:
adaugă verificări automate care semnalează când o sursă încetează să mai trimită
date, când distribuția unui câmp se schimbă pe neașteptate sau când o numărătoare
scade la zero fără motiv. Un tablou de bord care afișează pe tăcute date
învechite sau stricate ca și cum ar fi curente este mai rău decât unul care
arată vizibil „date indisponibile”, pentru că primul erodează încrederea
invizibil, în timp ce al doilea măcar spune adevărul despre propriile limite.

### Documentează metoda de colectare alături de definiție

Definiția unei metrici („timpul de livrare al modificărilor”) nu este completă
fără metoda ei de colectare (măsurat de la marcajul de timp al primului commit
din controlul versiunilor până la marcajul de timp al implementării în
producție din flux, excluzând ramurile de hotfix). Două echipe cu aceeași
definiție, dar cu metode de colectare diferite, vor produce totuși numere
incomparabile. Înregistrează-le pe ambele în carta metricilor din subiectul 1.4
și tratează schimbarea oricăreia drept o schimbare ce cere aceeași revizuire
documentată.

## Compromisuri: avantaje și dezavantaje

| Tip de sursă | Avantaje | Dezavantaje |
| --- | --- | --- |
| Instrumentare automată a fluxurilor (CI/CD, control al versiunilor) | Obiectivă, cu marcaj de timp, greu de falsificat, efort continuu redus | Cere o investiție inițială de inginerie pentru construire și întreținere |
| Date din sisteme de urmărire a problemelor și de management de proiect | Larg disponibile, familiare echipelor | Depind de sârguința oamenilor; adesea inconsecvente între echipe |
| Sondaje și autoraportare | Singura sursă pentru experiența subiectivă (satisfacție, bunăstare) | Prejudecata de reamintire, prejudecata de dezirabilitate socială, oboseala la răspuns |
| Platforme de observabilitate și telemetrie | Semnal bogat, în timp real, la nivel de sistem | Acoperă doar ce a fost instrumentat explicit; poate fi scump la scară |

Tensiunea centrală este **obiectivitate versus acoperire**. Instrumentarea
automată este sursa cea mai demnă de încredere, dar nu poate observa deloc
experiența subiectivă, în timp ce sondajele pot ajunge exact unde automatizarea
nu poate, dar poartă un risc real de prejudecată. Rezolvă tensiunea folosind
instrumentarea automată oriunde un eveniment poate fi observat direct și
rezervând autoraportarea special și doar pentru ce cere cu adevărat să întrebi
o persoană, niciodată ca substitut leneș pentru date pe care un sistem le-ar fi
putut furniza.

## Întrebări de discutat cu echipa ta

1. **Pentru cele mai importante cinci metrici ale noastre, putem numi sistemul
   sursă exact și metoda de colectare pentru fiecare, sau presupunem o
   definiție fără să știm de unde vin de fapt datele?** Este o lacună
   surprinzător de frecventă: o metrică este adoptată dintr-un cadru sau din
   tabloul de bord implicit al unui furnizor, iar nimeni din echipa actuală nu
   știe ce sistem generează datele de dedesubt sau cum. Urmărește fiecare
   metrică înapoi până la origine ca exercițiu de grup.

2. **Care dintre metricile noastre se bazează pe autoraportare pentru ceva ce un
   sistem ar putea observa direct și ce ar fi nevoie ca să înlocuim acea
   autoraportare cu instrumentare reală?** Numărul de implementări
   autoraportat, orele lucrate autoraportate și timpul de ciclu autoestimat
   sunt exemple frecvente de folosire a sursei greșite de date pentru ceva ce
   automatizarea ar putea capta mai fiabil. Identifică-le și prioritizează
   înlocuirea celor cu miza cea mai mare.

3. **Cum am ști dacă unul dintre fluxurile noastre de date s-a stricat pe
   tăcute?** Cele mai multe organizații descoperă un flux de metrici stricat doar
   când cineva observă că un număr pare implauzibil, ceea ce poate dura luni.
   Discută dacă vreunul dintre fluxurile voastre are azi verificări automate de
   sănătate și, dacă nu, care au cea mai mare nevoie de ele mai întâi.

4. **Unde a schimbat o traducere între sisteme sensul unei metrici fără ca
   cineva să hotărască asta intenționat?** Un câmp care înseamnă un lucru într-un
   sistem sursă poate însemna ceva subtil diferit după o integrare sau o
   migrare, iar numărul rezultat poate părea plauzibil fiind greșit. Parcurge
   traseul complet al datelor pentru cea mai importantă metrică a ta și caută
   punctele de traducere.

5. **Documentăm în cartă metodele de colectare, nu doar definițiile
   metricilor?** Două echipe pot împărtăși numele și definiția unei metrici
   calculând-o din metode de colectare diferite, producând numere care nu sunt
   de fapt comparabile. Auditează un eșantion de carte față de această lacună
   anume.

6. **Cum deosebim o tendință autentică de un artefact de calitate a datelor
   când un număr se mișcă pe neașteptate?** O schimbare bruscă a unei metrici
   este adesea primul semn fie al unei schimbări reale, fie al unui flux
   stricat, iar deosebirea lor cere să cunoști sursa datelor suficient de bine
   ca să investighezi rapid. Discută procesul real al echipei tale pentru
   ultima schimbare neexplicată a unei metrici pe care ați întâlnit-o.

## Perspectiva sectorială

**Startup.** Cu o stivă mică, cele mai multe metrici pot veni direct de la
furnizorul tău de CI/CD, de la gazda de control al versiunilor și de la o
unealtă ușoară de sondaje, fără a construi fluxuri proprii. Riscul este să
sari peste chiar și verificările de sănătate de bază pentru că echipa se mișcă
repede; o verificare automată de cinci minute că o sursă de date încă trimite
evenimente este o asigurare ieftină împotriva zborului orb pe tăcute.

**Afacere mică.** Sprijină-te pe raportarea integrată a uneltelor existente, în
loc să construiești fluxuri proprii de date pe care nu ai capacitatea să le
întreții. Fii explicit despre care numere vin din sisteme automate și care sunt
estimări pe care cineva le scrie într-o foaie de calcul, pentru că cele două au
o fiabilitate foarte diferită, chiar dacă ajung pe aceeași pagină.

**Companie mare.** Problemele de calitate a datelor se compun peste integrări,
migrări și granițele unităților de business. Investește în fluxuri de date
centralizate și bine monitorizate pentru cele mai importante metrici ale tale,
introdu verificările automate de calitate a datelor ca practică standard și
auditează metodele de colectare, nu doar definițiile, ori de câte ori compari
metrici între unitățile de business.

**Administrație publică.** Proveniența datelor poate avea greutate legală și de
audit: o cifră publicată de performanță poate trebui să reziste unui audit
extern nu doar al valorii ei, ci al întregului ei lanț de colectare. Documentează
explicit linia de proveniență a datelor, păstrează înregistrările istorice ale
metodelor de colectare chiar și după ce o metodologie se schimbă și fii gata să
demonstrezi exact cum a fost produs un număr, nu doar ce arată în prezent.

## Exemple

**Companie mare.** Conducerea de inginerie a unei companii de servicii
financiare urmărea „timpul de livrare al modificărilor” de doi ani când a
descoperit că o migrare a fluxului de date de acum optsprezece luni schimbase
pe tăcute sursa marcajului de timp de la primul commit la crearea pull
requestului, scurtând timpul de livrare aparent cu câteva ore în medie la
fiecare echipă, fără ca cineva să observe sau să aprobe schimbarea. Remediul a
instituit o verificare de calitate a datelor care compară săptămână de
săptămână distribuția fiecărei metrici și semnalează schimbările statistic
neobișnuite pentru revizuire umană, prinzând alte două probleme tăcute de flux
în anul următor.

**Administrație publică.** Tabloul de bord public al fiabilității serviciilor
unei agenții de transport se baza pe un amestec de telemetrie automată de la
senzori și rapoarte de incidente introduse manual de birourile regionale. Un
audit a constatat că regiunile cu mai puțină capacitate de personal raportau
sistematic prea puțin incidentele minore, nu din necinste, ci pur și simplu
pentru că introducerea manuală concura pentru timp cu munca mai urgentă, ceea ce
însemna că cifra publicată a fiabilității era mai bună decât realitatea tocmai
în regiunile care își permiteau cel mai puțin ca o întreținere subdimensionată
să treacă neobservată. Remediul agenției a înlocuit introducerea manuală a
incidentelor cu înregistrare automată declanșată de senzori oriunde era
fezabil și a adăugat o estimare documentată a acoperirii raportării manuale
alături de cifra publicată.

## Argumentul de business: motivații, ROI și TCO

Randamentul unei instrumentări solide este încrederea: o conducere care are
încredere în datele ei poate acționa decisiv, în timp ce o echipă arsă de un
flux stricat pe tăcute începe să se îndoiască de fiecare număr, ceea ce încetinește
fiecare decizie care depinde de metrici. Acea pierdere a încrederii este
scumpă și greu de reparat, adesea durând mult mai mult să fie reconstruită decât
ar fi costat investiția inițială în instrumentare.

Costul total de proprietate al unei bune instrumentări include munca inițială
de inginerie pentru construirea unor fluxuri fiabile și costul continuu al
monitorizării calității datelor, ambele ușor de subinvestit pentru că niciuna
nu produce o tilă vizibilă de tablou de bord. Acea subinvestire este o falsă
economie: costul descoperirii unui flux stricat pe tăcute după luni de decizii
luate pe date proaste este mult mai mare decât costul construirii verificărilor
de sănătate care l-ar fi prins din prima zi.

## Anti-modele și capcane

- **A avea încredere într-un număr fără a-i cunoaște sistemul sursă:** o
  metrică adoptată dintr-un cadru sau dintr-o valoare implicită a unui furnizor,
  fără ca cineva să urmărească de unde vin de fapt datele.
- **A autoraporta ce un sistem ar putea observa direct:** introduce zgomot și
  prejudecăți inutile în date care ar fi putut fi obiective.
- **Fără verificări automate de calitate a datelor pe un flux de metrici:** un
  flux stricat pe tăcute poate afișa numere greșite luni întregi, nedetectat.
- **A documenta doar definiția, nu și metoda de colectare:** două echipe cu
  același nume de metrică pot calcula totuși numere incomparabile.
- **Un tablou de bord care afișează „0” sau date învechite ca și cum ar fi
  curente, fără nicio indicație a unui eșec al sursei:** mai rău decât un mesaj
  vizibil „date indisponibile”.
- **Regiuni sau echipe subdimensionate care raportează sistematic prea puțin
  din cauza poverii introducerii manuale:** o lacună de calitate a datelor care
  se corelează cu exact zonele care au nevoie de cea mai multă atenție.

## Model de maturitate

- **Nivelul 1, Inițiere:** Nimeni nu poate urmări fiabil o metrică înapoi până
  la sistemul ei sursă; fluxurile nu au verificări de sănătate, iar defecțiunile
  trec neobservate.
- **Nivelul 2, Dezvoltare:** Unele metrici au surse documentate, dar metodele de
  colectare sunt inconsecvente, iar verificările de calitate a datelor sunt, în
  cel mai bun caz, făcute pe loc.
- **Nivelul 3, Standardizare:** Fiecare metrică guvernată își documentează
  sistemul sursă și metoda de colectare; fluxurile automate sunt preferate
  autoraportării oriunde un eveniment poate fi observat direct.
- **Nivelul 4, Gestionare:** Verificări automate de calitate a datelor
  monitorizează fiecare flux important, semnalează anomaliile pentru revizuire,
  iar linia de proveniență a datelor este documentată și auditabilă.
- **Nivelul 5, Orchestrare:** Organizația tratează calitatea datelor ca pe o
  disciplină de inginerie de prim rang, cu monitorizare și răspuns la incidente
  proprii, și poate demonstra proveniența completă a oricărei metrici publicate,
  la cerere.

## Idei de discuție

1. Am putea urmări cele mai importante trei metrici ale noastre până la sistemul sursă exact chiar acum, în direct, în această ședință?
2. Care dintre metricile noastre actuale se bazează pe autoraportare pentru ceva ce un sistem ar putea măsura direct?
3. Au vreun flux de metrici verificări automate de sănătate astăzi?
4. Când am descoperit ultima oară un flux de date stricat pe tăcute și de cât timp era greșit?
5. Unde creează introducerea manuală de date o lacună între realitatea raportată și cea reală?

## Concluzii principale

- Preferă **instrumentarea automată** autoraportării oriunde un sistem poate
  observa direct evenimentul; rezervă autoraportarea pentru experiența cu
  adevărat subiectivă.
- Fiecare metrică are nevoie de un **sistem sursă și o metodă de colectare**
  documentate, nu doar de o definiție.
- Calitatea datelor se **degradează pe tăcute**; încorporează verificări
  automate în fluxul însuși, în loc să descoperi defecțiunea din întâmplare.
- Instrumentează **la eveniment**, nu în aval de o traducere, ca să minimizezi
  deriva dintre ce s-a întâmplat și ce arată tabloul de bord.
- Costul unui flux stricat pe tăcute, luni de decizii luate pe date proaste,
  depășește cu mult costul verificărilor de sănătate care l-ar fi prins.

## Referințe și lecturi suplimentare

- *Observability Engineering*, de Charity Majors, Liz Fong-Jones și George
  Miranda (principii de proiectare a instrumentării și telemetriei).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (abordarea de instrumentare din spatele metricilor
  DORA).
- *Data Quality: The Accuracy Dimension*, de Jack E. Olson (concepte de
  calitate a datelor aplicabile fluxurilor de metrici).
- *How to Measure Anything*, de Douglas W. Hubbard (metode de măsurare pentru
  mărimi care par greu de observat direct).
