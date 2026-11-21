# 6.2 Metrici de incidente: detectare, răspuns și recuperare

## Prezentare generală și motivație

Acest subiect măsoară ce se întâmplă când bugetul de erori din subiectul 6.1 se
cheltuiește printr-o defecțiune reală: un **incident**, un eveniment
neplanificat care degradează sau întrerupe un serviciu. Patru metrici formează
vocabularul standard pentru a măsura cât de bine gestionează o organizație
situația: **timpul mediu de detectare (MTTD)**, cât durează până când
organizația observă că ceva nu e în regulă; **timpul mediu de confirmare
(MTTA)**, cât durează până când cineva își asumă răspunsul; **timpul mediu de
rezolvare** sau **de recuperare (MTTR)**, cât durează până la restabilirea
serviciului, același concept pe care subiectul 2.10 l-a tratat special pentru
defecțiunile provocate de implementări, acum generalizat la orice incident,
indiferent de cauză; și **frecvența incidentelor**, pur și simplu cât de des
apar incidente.

Preocuparea centrală a acestui subiect, ecou al tratării ratei de eșec a
modificărilor din subiectul 2.10, este că aceste numere sunt la fel de demne de
încredere ca și cultura organizațională din jurul raportării și clasificării
oneste a incidentelor. O echipă care se teme de vină pentru un incident are
toate motivele să raporteze mai puțin, să întârzie confirmarea ca să nu fie „la
ceas" sau să clasifice un eveniment grav drept minor, ca să-și protejeze
metricile. Practica **analizei post-incident [fără vinovați](https://en.wikipedia.org/wiki/Just_culture)
(blameless postmortem)**, inițiată în organizații precum Etsy și formalizată în
literatura SRE de la Google, există tocmai ca să elimine acel stimulent, iar
acest subiect o tratează ca pe o condiție prealabilă pentru date de încredere
despre incidente, nu ca pe o amabilitate culturală opțională, așezată peste
metrici.

Pentru echipele mari, metricile de incidente arată dacă capacitatea de detectare
și de răspuns a unei organizații, uneltele de rollback din subiectul 2.10
printre alte investiții, funcționează efectiv în condiții reale și variate, nu
doar în scenariul specific al defecțiunilor provocate de implementări, pe care
l-a tratat acel subiect. Companiile mari și organizațiile guvernamentale care
operează infrastructură critică depind de aceste metrici atât intern, ca să
genereze o îmbunătățire operațională reală, cât și extern, ca să demonstreze
clienților, autorităților de reglementare sau publicului că incidentele sunt
gestionate competent și că situația se îmbunătățește în timp.

## Principii-cheie

- **Cultura fără vinovați este o condiție prealabilă pentru date de încredere
  despre incidente**, nu un adaos opțional; frica de vină strică deopotrivă
  raportarea, viteza de confirmare și clasificarea severității.
- **Detectarea, confirmarea și rezolvarea sunt faze distincte, cu remedii
  distincte.** Un timp general lent de recuperare poate ascunde probleme de
  fond foarte diferite, în funcție de faza care este de fapt lentă.
- **Frecvența incidentelor și MTTR sunt un semnal pereche**, similar cu rata de
  eșec a modificărilor și timpul de recuperare din DORA (subiectul 2.10):
  niciunul singur nu spune întreaga poveste.
- **Clasificarea severității cere aceeași rigoare ca clasificarea defectelor
  scăpate** (subiectul 5.1): criterii consecvente și documentate, nu decizii ad
  hoc.
- **Valoarea unei analize post-incident stă în învățarea sistemică, nu în
  producerea unui număr.** Metrica este un produs secundar al practicii bune, nu
  scopul ei.

## Recomandări

### Descompune timpul de răspuns la incident în fazele lui distincte

Măsoară și raportează separat timpul de detectare (de la debutul real al
defecțiunii până când cineva observă), timpul de confirmare (de la notificare
până când cineva își asumă responsabilitatea) și timpul de rezolvare (de la
asumare până la recuperarea reală), nu doar un singur total amestecat. Fiecare
fază indică o remediere diferită: detectarea lentă indică o lacună de monitorizare
și de alertare, confirmarea lentă indică o problemă de proces de gardă sau de
escaladare, iar rezolvarea lentă indică o lacună de unelte, de runbook sau de
capacitate de diagnostic (subiectul 2.10 tratează aceasta special pentru
defecțiunile provocate de implementări).

### Construiește și protejează un proces de analiză post-incident cu adevărat fără vinovați

O **analiză post-incident fără vinovați** investighează ce s-a întâmplat și de ce
a permis sistemul să se întâmple, evitând explicit să atribuie vina unui individ
pentru o greșeală pe care orice persoană rezonabilă, în aceleași circumstanțe și
cu aceleași informații, ar fi putut-o face plauzibil. Protejează activ această
disciplină: conducerea care modelează răspunsuri non-punitive la incidente, o
politică scrisă explicită și obiceiul de a întreba „ce din sistemul nostru a
permis asta", nu „cine a făcut asta”, sunt toate investiții necesare și
continue, nu o declarație de politică făcută o singură dată.

### Clasifică severitatea cu criterii consecvente, documentate și auditate

Aplică clasificării severității incidentelor aceeași disciplină pe care o
recomandă subiectul 5.1 pentru defectele scăpate: o scară fixă și documentată,
bazată pe impactul real asupra clientului sau asupra afacerii, aplicată
consecvent între echipe și auditată periodic pentru derapaje. O clasificare
inconsecventă, unele echipe generoase, altele stricte, face datele despre
incidente la nivelul întregii organizații la fel de nesigure pentru comparație
cum ar fi datele despre defecte clasificate inconsecvent.

### Urmărește împreună frecvența incidentelor și MTTR, niciodată izolat

Un MTTR în îmbunătățire, alături de o frecvență crescândă a incidentelor, poate
indica o echipă tot mai bună la stins focuri, în timp ce fiabilitatea de bază a
sistemului se degradează de fapt; o frecvență a incidentelor în scădere, alături
de un MTTR în înrăutățire, poate indica defecțiuni mai rare, dar mai grave și
mai greu de diagnosticat, care le înlocuiesc pe cele minore și frecvente.
Revizuiește-le împreună, oglindind exact disciplina de asociere viteză-stabilitate
din metricile DORA ale Părții 2, ca să obții o imagine combinată onestă.

### Extrage și urmărește elemente de acțiune sistemice din analizele post-incident, nu doar metrici

Adevărata valoare a procesului de analiză post-incident este setul de elemente
de acțiune concrete și sistemice pe care îl produce: o alertă lipsă adăugată, un
runbook îmbunătățit, un punct unic de eșec eliminat. Urmărește aceste elemente
până la finalizare cu aceeași disciplină ca restanța de datorie tehnică din
subiectul 4.5, pentru că o analiză post-incident care produce înțelegere, dar
nicio continuare, irosește învățarea organizațională pe care procesul trebuie
s-o capteze.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Metrică unică, amestecată, a timpului de răspuns la incident | Simplu de raportat | Ascunde care fază anume, detectare, confirmare, rezolvare, este problema reală |
| Metrici de incident descompuse pe faze | Diagnostice, indică direct remedierea potrivită | Cer o instrumentare mai atentă a fiecărei tranziții de fază |
| Revizuire a incidentelor orientată spre vină | Pare responsabilă, satisface dorința de a atribui răspunderea | Strică onestitatea raportărilor viitoare și rareori repară cauza sistemică reală |
| Practică de analiză post-incident fără vinovați | Produce date oneste și remedii sistemice autentice | Cere investiție culturală susținută și disciplină a conducerii pentru a fi menținută |

Tensiunea centrală este **atracția responsabilității individuale față de nevoia
practică de raportare onestă**. A da vina pe un individ după un incident poate
părea satisfăcător și poate arăta ca o conducere decisivă, dar strică în mod
sigur datele fiecărui incident viitor, pentru că oamenii raportează mai puțin,
întârzie confirmarea sau clasifică greșit severitatea de îndată ce se tem de
consecințe personale. Rezolvă tensiunea în favoarea practicii fără vinovați, în
mod deliberat și consecvent, înțelegând că responsabilitatea autentică vine din
repararea sistemului care a permis defecțiunea, nu din pedepsirea individului
care s-a nimerit să fie de față când s-a produs.

## Întrebări de discutat cu echipa ta

1. **Descompunem timpul de răspuns la incident în faze de detectare, confirmare
   și rezolvare sau urmărim doar un singur număr amestecat?** Dacă există doar
   un număr amestecat, alege un incident recent semnificativ și încearcă să
   reconstitui retroactiv defalcarea pe faze, ca să vezi ce ar fi dezvăluit.

2. **Ar crede cu adevărat echipa noastră că procesul nostru de analiză
   post-incident este fără vinovați sau frica de consecințe încă modelează felul
   în care sunt raportate și discutate incidentele?** Întreabă direct și onest;
   o politică declarată fără vinovați, dar netrăită de fapt, nu produce date de
   încredere.

3. **Ar clasifica două echipe diferite severitatea aceluiași incident în același
   fel?** Alege un incident real din trecut, ambiguu, și cere reprezentanților
   unor echipe diferite să îl clasifice independent, apoi compară rezultatele.

4. **Revizuim împreună frecvența incidentelor și MTTR sau una primește mai
   multă atenție decât cealaltă?** Verifică practica ta reală de raportare și
   de revizuire în privința acestei asocieri, oglindind aceeași disciplină pe
   care o recomandă subiectul 2.10 pentru metricile de stabilitate DORA.

5. **Ce procent din elementele de acțiune ale analizelor noastre post-incident
   din ultimele șase luni au fost efectiv finalizate?** Dacă nu urmărești
   asta în prezent, lacuna merită numită; un proces de analiză post-incident cu
   rată mică de finalizare a elementelor de acțiune produce înțelegere fără
   continuare.

6. **A făcut vreodată frica de vină pe cineva să întârzie raportarea sau
   confirmarea unui incident?** Este o întrebare incomodă, dar importantă; un
   „da, iar iată ce s-a întâmplat” sincer este mult mai valoros pentru sănătatea
   procesului tău de incidente decât un „nu” reflex.

## Perspectiva sectorială

**Startup.** Răspunsul la incidente este adesea informal, din necesitate, într-o
echipă mică, iar descompunerea formală pe faze poate fi inutilă la început.
Obiceiul de adoptat devreme este normele de discuție fără vinovați încă de la
primul incident, pentru că obiceiurile culturale stabilite devreme sunt mult mai
ușor de susținut decât de montat ulterior, după ce s-a instalat un tipar
înclinat spre vină.

**Afacere mică.** Un jurnal simplu și comun de incidente, chiar informal, cu o
clasificare de bază a severității și o scurtă retrospectivă fără vinovați
pentru orice incident semnificativ, surprinde cea mai mare parte din valoarea
acestui subiect fără unelte sofisticate sau o platformă dedicată de gestionare a
incidentelor.

**Companie mare.** Atât clasificarea consecventă a severității, cât și o
cultură fără vinovați autentică și susținută sunt mai greu de menținut la scară
mare și amândouă sunt esențiale pentru date de încredere și comparabile despre
incidente la zeci de echipe. Investește în criterii documentate de clasificare,
în audit periodic și în modelarea activă, de către conducere, a unui răspuns
fără vinovați, pentru că derapajul cultural spre vină tinde să se strecoare
treptat, fără o contrapresiune deliberată și continuă.

**Administrație publică.** Incidentele care afectează serviciile publice sau
infrastructura critică se confruntă adesea cu examinare externă, atenție
mediatică sau anchete formale, ceea ce creează o puternică presiune spre
căutarea vinovaților, care poate submina direct practica internă fără
vinovați, dacă nu este gestionată activ. Menține o disciplină internă clară,
fără vinovați, pentru învățare sistemică autentică, separată de orice proces
extern de răspundere care ar putea urma unui incident grav, și comunică limpede
personalului această distincție.

## Exemple

**Companie mare.** Cultura de inginerie a unei companii de plăți tratase ani la
rând, informal, incidentele ca pe ceva pe care e mai bine să nu îl confirmi
repede, ca să nu pari responsabil, ceea ce ducea la timpi constant slabi de
detectare și de confirmare, pe care conducerea i-a atribuit inițial unor unelte
de monitorizare inadecvate. O schimbare culturală spre analize post-incident cu
adevărat fără vinovați, inclusiv conducerea lăudând public și specific
confirmarea rapidă și onestă a incidentelor, nu doar rezolvarea rapidă, a
produs o îmbunătățire măsurabilă atât a timpului de detectare, cât și a celui de
confirmare în două trimestre, relevând că blocajul inițial fusese cultural,
frica de vină, nu tehnic, unelte inadecvate, cum se presupusese la început.

**Administrație publică.** Centrul de operațiuni al unei agenții de transport
public clasificase istoric aproape fiecare perturbare a serviciului drept
„minoră” în jurnalul intern de incidente, tipar pe care un nou director de
siguranță l-a găsit suspect, având în vedere plângerile persistente, informale,
ale personalului din teren despre probleme grave și recurente. O investigație a
arătat că încadrarea „minoră” ocolea un proces formal de raportare greoi, cerut
pentru severitățile mai mari, creând un stimulent neintenționat de a clasifica
în jos. Agenția a simplificat cerințele formale de raportare pentru toate
severitățile și a protejat explicit personalul de vină pentru raportarea onestă a
severității, iar datele ulterioare despre incidente au arătat o rată mai
exactă, și substanțial mai mare, de perturbări cu adevărat semnificative,
oferind în sfârșit conducerii o imagine onestă față de care să prioritizeze
investițiile în infrastructură.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea metricilor de incidente cu adevărat fără vinovați, bine
clasificate și descompuse pe faze este datele oneste care chiar generează
îmbunătățire sistemică, în loc de o imagine liniștitoare, dar falsă, produsă de
raportarea insuficientă sau de clasificarea greșită, generate de frică.
Exemplul companiei de plăți de mai sus arată asta concret: o reparație
culturală, nu o investiție în unelte, a rezolvat ce conducerea diagnosticase
greșit ca problemă tehnică de detectare.

Costul total de proprietate este în mare parte o investiție culturală și de
proces: angajamentul susținut al conducerii față de practica fără vinovați,
criterii documentate și auditate de clasificare a severității și disciplina de a
urmări elementele de acțiune ale analizelor post-incident până la finalizare.
Investiția costă mai puțin decât alternativa, un program de metrici de incidente
care produce date greșite cu încredere, pentru că frica a stricat fiecare
intrare din el.

## Anti-modele și capcane

- **Revizuirea incidentelor orientată spre vină:** strică onestitatea raportării,
  viteza de confirmare și clasificarea severității pentru fiecare incident
  viitor.
- **Urmărirea doar a unui număr amestecat al timpului de răspuns:** ascunde care
  fază anume, detectare, confirmare, rezolvare, este de fapt problema.
- **Clasificare inconsecventă a severității între echipe:** face datele despre
  incidente la nivelul întregii organizații nesigure pentru comparație.
- **Revizuirea izolată a frecvenței incidentelor și a MTTR:** ratează imaginea
  combinată și onestă pe care o oferă semnalul pereche.
- **Un proces de analiză post-incident care produce înțelegere, dar niciun
  element de acțiune finalizat:** irosește învățarea organizațională pe care
  procesul trebuie s-o capteze.
- **O politică declarată fără vinovați, netrăită de fapt de conducere:** produce
  aceeași corupere a datelor generată de frică, ca o cultură deschis orientată
  spre vină.

## Model de maturitate

- **Nivelul 1, Inițiere:** Răspunsul la incidente este informal, raportarea este
  inconsecventă, iar o cultură înclinată spre vină descurajează activ raportarea
  onestă.
- **Nivelul 2, Dezvoltare:** Există o oarecare urmărire a incidentelor, dar
  clasificarea severității este inconsecventă, iar practica fără vinovați este
  declarată, dar nu consecvent trăită.
- **Nivelul 3, Standardizare:** Metricile de incident descompuse pe faze, cu
  clasificare consecventă și documentată a severității, sunt urmărite la nivelul
  întregii organizații, cu o practică de analiză post-incident cu adevărat fără
  vinovați.
- **Nivelul 4, Gestionare:** Frecvența incidentelor și MTTR sunt revizuite
  împreună, elementele de acțiune ale analizelor post-incident sunt urmărite
  până la finalizare, iar clasificarea este auditată periodic pentru
  consecvență.
- **Nivelul 5, Orchestrare:** Organizația are un istoric demonstrat și susținut
  în care practica fără vinovați produce date oneste și remedii sistemice
  autentice, iar metricile de incident informează direct și fiabil deciziile de
  investiții în fiabilitate.

## Idei de discuție

1. Ar rezista procesul nostru de analiză post-incident unui test onest privind dacă este cu adevărat fără vinovați?
2. Care este defalcarea pe faze, detectare, confirmare, rezolvare, a celui mai lent incident recent al nostru?
3. Ar clasifica două echipe în același fel severitatea ultimului nostru incident semnificativ?
4. Ce procent din elementele de acțiune recente ale analizelor noastre post-incident au fost efectiv finalizate?
5. A modelat vreodată frica de vină felul în care a fost raportat sau discutat un incident în echipa noastră?

## Concluzii principale

- **Cultura analizei post-incident fără vinovați este o condiție prealabilă**
  pentru date de încredere despre incidente; frica de vină strică deopotrivă
  raportarea, viteza de confirmare și clasificarea.
- Descompune timpul de răspuns în faze de **detectare, confirmare și
  rezolvare**, fiecare indicând o remediere diferită.
- Clasifică severitatea cu **criterii consecvente, documentate și auditate**,
  oglindind disciplina subiectului 5.1 pentru defectele scăpate.
- Revizuiește **împreună frecvența incidentelor și MTTR**, niciodată izolat,
  aceeași disciplină de asociere ca la metricile de stabilitate DORA.
- Urmărește **elementele de acțiune ale analizelor post-incident până la
  finalizare**; metrica este un produs secundar al practicii bune, nu scopul ei.

## Referințe și lecturi suplimentare

- *Site Reliability Engineering: How Google Runs Production Systems*, de Betsy
  Beyer, Chris Jones, Jennifer Petoff și Niall Richard Murphy, eds. (practica
  analizei post-incident fără vinovați și metricile de incident).
- *The Site Reliability Workbook*, de Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara și Stephen Thorne, eds. (îndrumări practice
  pentru răspunsul la incidente și analiza post-incident).
- *The Field Guide to Understanding Human Error*, de Sidney Dekker (argumentul
  fundamental pentru investigarea sistemică, fără vinovați, a eșecurilor).
- Allspaw, John, „Blameless PostMortems and a Just Culture”, Etsy Engineering
  Blog (2012): o formulare timpurie și influentă a practicii fără vinovați în
  operațiunile software.
