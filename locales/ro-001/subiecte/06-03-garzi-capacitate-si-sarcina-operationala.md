# 6.3 Metrici pentru gărzi, capacitate și sarcină operațională

## Prezentare generală și motivație

Fiabilitatea introdusă în subiectul 6.1 și răspunsul la incidente măsurat în
subiectul 6.2 depind amândouă de un sistem uman pe care acest subiect îl
măsoară direct: rotația de gardă, adică inginerii care poartă un pager și
răspund când ceva se strică, și capacitatea infrastructurii, care determină câtă
încărcare poate absorbi un sistem înainte să înceapă să cedeze. O organizație
poate avea SLO-uri excelente, bugete de erori bine proiectate și o cultură a
incidentelor cu adevărat fără vinovați și totuși își poate epuiza inginerii de
gardă printr-o sarcină nesustenabilă, care în cele din urmă degradează chiar
fiabilitatea pe care celelalte practici au fost construite s-o protejeze.

Acest subiect tratează sarcina operațională ca pe o familie de metrici de sine
stătătoare, legată direct de măsurarea bunăstării și a [epuizării profesionale](https://en.wikipedia.org/wiki/Occupational_burnout)
din subiectul 3.2, dar specifică stresului acut și aparte de a purta un pager:
somnul întrerupt, costul psihologic al faptului de a fi de gardă chiar și când
nu se întâmplă nimic și povara cumulată a unei sarcini de incidente frecvente și
prost distribuite. O organizație care își măsoară meticulos fiabilitatea
sistemelor, dar nu măsoară niciodată sustenabilitatea oamenilor care mențin
acele sisteme fiabile, măsoară doar jumătate din imagine, iar jumătatea
nemăsurată tinde să iasă la suprafață până la urmă ca fluctuație de personal,
ca o calitate degradată a răspunsului la incidente din partea unor responsabili
epuizați sau ambele.

Pentru echipele mari, metricile de gardă și de capacitate dezvăluie probleme de
echilibrare a încărcării care oglindesc preocupările de concentrare a
cunoașterii din subiectul 3.5: un număr mic de ingineri absorb o parte
disproporționată din alerte, adesea cei mai experimentați tocmai pentru că pot
rezolva incidentele cel mai repede, ceea ce creează simultan un risc de epuizare
și un risc de bus factor. Companiile mari și organizațiile guvernamentale care
rulează servicii critice non-stop depind de metricile acestui subiect ca să
dimensioneze rotațiile de gardă sustenabil, în loc să descopere costul real
doar prin fluctuație de personal.

## Principii-cheie

- **Sarcina de gardă este o resursă măsurabilă și gestionabilă**, nu o povară
  inevitabilă și nelimitată pe care inginerii pur și simplu trebuie s-o
  absoarbă.
- **Frecvența alertelor și distribuția lor sunt amândouă importante.** O medie
  la nivel de echipă poate ascunde o concentrare severă pe un număr mic de
  persoane.
- **Întreruperea în timpul gărzii are un cost chiar și când nu apare niciun
  incident**, greutatea psihologică de a fi accesibil și responsabil.
- **Planificarea capacității și sarcina de gardă sunt legate.** Infrastructura
  subdimensionată generează mai multe alerte, crescând direct povara gărzii.
- **Un sistem de gardă sustenabil protejează însăși fiabilitatea**, pentru că
  responsabilii epuizați iau decizii mai lente și mai predispuse la erori în
  timpul incidentelor.

## Recomandări

### Urmărește frecvența și distribuția alertelor, nu doar o medie la nivel de echipă

Măsoară câte alerte primește fiecare inginer de gardă în parte, nu doar o medie
la nivel de echipă care poate ascunde o concentrare severă. Ca în cazul
preocupărilor despre bus factor din subiectul 3.5 și despre încărcarea
revizorilor din subiectul 2.9, sarcina de gardă se concentrează adesea pe un
număr mic de oameni experimentați, care pot rezolva incidentele cel mai repede,
tocmai tiparul care creează atât risc de epuizare, cât și un punct unic de
eșec periculos. Reechilibrează rotațiile în mod deliberat atunci când apare
această concentrare.

### Măsoară costul psihologic al gărzii, nu doar timpul activ de incident

Faptul de a fi de gardă are un cost real chiar și într-un schimb cu zero alerte
efective: somn de calitate mai slabă din cauza anticipării unei posibile
întreruperi, activități personale constrânse și stresul de fond al
responsabilității continue. Acolo unde se poate, surprinde asta prin date de
sondaj (subiectul 3.7) despre experiența gărzii în mod specific, separat de
satisfacția generală, pentru că o echipă poate raporta o satisfacție generală
rezonabilă, în timp ce garda, în particular, erodează în tăcere bunăstarea.

### Stabilește limite explicite pentru frecvența sustenabilă a gărzii

Stabilește o frecvență maximă rezonabilă cu care un individ ar trebui să fie de
gardă, de obicei nu mai mult de o săptămână din patru sau cinci, și urmărește
frecvența reală a rotației față de acea limită. O rotație care tehnic are destui
oameni pe listă, dar se bazează de fapt pe doi sau trei dintre ei din cauza
lacunelor de competențe sau a constrângerilor de disponibilitate, nu respectă
de fapt limita, indiferent ce arată programul nominal.

### Leagă planificarea capacității direct de sarcina de gardă

Infrastructura subdimensionată, marja insuficientă pentru vârfuri de trafic,
configurarea inadecvată a scalării automate, generează prin definiție mai
multe alerte, crescând direct povara gărzii. Urmărește utilizarea capacității
infrastructurii și corelează-o cu frecvența alertelor: un serviciu care rulează
în mod regulat aproape de plafonul capacității și generează o parte
disproporționată din alerte este un argument direct și cuantificabil pentru
investiția în capacitate, nu o simplă plângere operațională vagă.

### Folosește metricile de gardă pentru deciziile de dimensionare și de angajare, nu pentru evaluarea individuală

Agregă datele despre sarcina de gardă la nivel de echipă, ca să susții
argumentul pentru personal suplimentar, unelte mai bune care reduc alertele
fals-pozitive sau investiții de arhitectură care reduc frecvența reală a
incidentelor. Urmând îndrumarea constantă a cărții pentru orice metrică ce
atinge direct indivizii (subiectul 1.2, subiectul 3.4), nu folosi niciodată
metricile individuale de răspuns la alerte pentru a evalua performanța unui
inginer anume; scopul este dimensionarea sustenabilă și proiectarea
sistemului, nu ținerea scorului individual.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Fără urmărire formală a sarcinii de gardă | Fără efort suplimentar | Riscul de epuizare și concentrarea bus factor rămân invizibile până apar ca fluctuație de personal |
| Doar frecvența medie a alertelor la nivel de echipă | Simplu de calculat | Ascunde concentrarea individuală severă |
| Urmărirea distribuției alertelor la nivel individual | Dezvăluie direct concentrarea și riscul de epuizare | Cere grijă ca să fie folosită doar agregat, niciodată pentru evaluare individuală |
| Investiție în capacitate pentru reducerea volumului de alerte la sursă | Abordează cauza de fond, reduce povara în mod sustenabil | Cere investiție inițială în infrastructură |

Tensiunea centrală este **acceptarea față de investiție**. Este ușor să tratezi
un volum mare de alerte ca pe simplul cost inevitabil al rulării unui serviciu
fiabil și să ceri inginerilor de gardă să îl absoarbă, dar acea acceptare costă
în cele din urmă organizația prin fluctuație de personal și prin calitatea
degradată a răspunsului la incidente din partea unor responsabili epuizați.
Rezolvă tensiunea tratând sarcina de gardă ridicată ca pe un semnal care cere
investiție reală, îmbunătățiri de capacitate, alertare mai bună care reduce
fals-pozitivele, personal extins în rotație, nu ca pe o povară inevitabilă, de
îndurat la nesfârșit.

## Întrebări de discutat cu echipa ta

1. **Cum arată distribuția reală a alertelor pe indivizii din rotație, nu doar
   media echipei?** Scoate datele reale, la nivel individual; o medie de echipă
   cu aspect rezonabil poate ascunde unul sau doi oameni care absorb o parte
   dramatic disproporționată.

2. **Am măsurat vreodată costul psihologic al gărzii separat de satisfacția
   generală?** Dacă nu, discută dacă o întrebare scurtă, dedicată, de sondaj,
   despre experiența gărzii în mod specific, ar scoate la iveală ceva ce
   sondajul vostru general de satisfacție (subiectul 3.2) ratează în prezent.

3. **Programul nostru nominal de rotație de gardă reflectă realitatea sau se
   bazează de fapt pe doar doi sau trei oameni, din cauza lacunelor de
   competențe sau a disponibilității?** Fii onest în privința asta; un program
   care listează opt nume, dar depinde efectiv de doi, nu respectă nicio limită
   rezonabilă de sustenabilitate.

4. **Care dintre serviciile noastre generează o parte disproporționată din
   alerte în raport cu marja sa de capacitate și ar reduce direct acea sarcină
   o investiție suplimentară în infrastructură?** Încrucișează explicit
   frecvența alertelor cu datele de utilizare a capacității, ca să construiești
   acest argument cu dovezi reale.

5. **Au fost vreodată folosite datele despre sarcina de gardă, chiar și
   informal, ca să evalueze performanța unui individ, nu ca să informeze
   deciziile de dimensionare și de arhitectură?** Aceasta riscă aceeași
   capcană a evaluării individuale despre care avertizează subiectul 3.4 pentru
   datele de activitate, aplicată aici sarcinii operaționale.

6. **Cât ne-ar costa să pierdem cel mai solicitat inginer de gardă din cauza
   epuizării sau a plecării și cum se compară asta cu costul reechilibrării
   rotației sau al investiției acum în remedieri ale cauzei de fond?** Această
   comparație concretă face adesea un argument mai puternic pentru investiția
   proactivă decât un simplu apel abstract la sustenabilitate.

## Perspectiva sectorială

**Startup.** Garda este adesea informală și concentrată, din necesitate, pe
fondatori sau pe o mică echipă de inginerie de la început. Riscul este
normalizarea timpurie a unui ritm nesustenabil, înainte să se fi luat vreodată
în considerare un design deliberat al rotației, ceea ce devine mult mai greu de
desfăcut odată ce a devenit așteptarea implicită pentru noii angajați care vin
mai târziu.

**Afacere mică.** Un program simplu și explicit de rotație, cu o limită clară de
sustenabilitate (de exemplu, nu mai mult de o săptămână din patru), este
realizabil chiar și fără unelte dedicate de gardă. Disciplina principală este
pur și simplu ca rotația și corectitudinea ei să fie vizibile și explicite, nu
lăsate ca o înțelegere informală și nespusă.

**Companie mare.** Concentrarea distribuției alertelor și riscurile asociate de
epuizare și de bus factor scalează prost aici, pentru că mai multe servicii și
mai multă complexitate înseamnă în general mai multe alerte potențiale, iar
concentrarea expertizei agravează problema. Investește în urmărirea încărcării
la nivel individual (folosită doar agregat, pentru decizii de dimensionare), în
investiții de capacitate care reduc volumul de alerte la sursă și în
reechilibrarea deliberată a rotațiilor.

**Administrație publică.** Infrastructura publică critică cere adesea acoperire
de gardă non-stop, cu consecințe reale dacă răspunsul întârzie, ceea ce ridică
atât importanța unei dimensionări sustenabile, cât și dificultatea de a o
obține sub constrângerile tipice de personal din sectorul public. Folosește
explicit și direct datele despre sarcina de gardă ca să justifici cererile de
personal, încadrând capacitatea sustenabilă de gardă ca o cerință directă și
cuantificabilă de fiabilitate, nu ca o preferință discreționară de personal.

## Exemple

**Companie mare.** O companie de infrastructură în cloud a descoperit, după ce a
scos pentru prima dată datele de alerte la nivel individual, că doi ingineri
seniori dintr-o rotație de gardă de cincisprezece persoane gestionaseră
personal peste 60% din toate alertele din anul anterior, atât pentru că erau cei
mai rapizi în rezolvarea incidentelor complexe, cât și pentru că ceilalți membri
ai rotației învățaseră să se amâne informal la ei, în loc să încerce ei înșiși
rezolvarea. Ambii ingineri raportaseră simptome semnificative de epuizare în
sondajul de bunăstare al companiei (subiectul 3.2), fără ca conducerea să fi
legat vreodată acel semnal din sondaj de datele concrete și cuantificabile
despre concentrarea gărzii. Un efort deliberat de reechilibrare, incluzând
instruire țintită pentru a construi încrederea în rezolvare în întreaga
rotație și un plafon formal pentru câte alerte consecutive putea primi un
individ, a redus partea celor doi ingineri sub 25% în șase luni, cu o
îmbunătățire corespunzătoare a bunăstării lor raportate.

**Administrație publică.** Echipa de inginerie de gardă a unei companii regionale
de apă lucra cu o rotație nominală de patru persoane pentru monitorizarea
infrastructurii critice, dar datele de utilizare a capacității au arătat că o
anumită stație de pompare, îmbătrânită, care rula constant aproape de plafonul
ei operațional, genera aproape jumătate din toate alertele întregii rotații. O
modernizare a capacității doar a acelei stații, finanțată folosind direct
corelația dintre frecvența alertelor și capacitate ca dovadă concretă în
cererea de buget, a redus volumul total de alerte la nivelul întregii
organizații cu aproximativ 40% în anul următor, demonstrând că povara gărzii
fusese în mare parte o problemă de capacitate deghizată, nu doar o problemă de
personal sau de proces.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea gestionării deliberate a sarcinii de gardă și de capacitate este
fluctuația de personal evitată și degradarea fiabilității evitată, cauzată de
responsabili epuizați care iau decizii mai lente și mai predispuse la erori.
Exemplul companiei de infrastructură în cloud de mai sus arată direct riscul
cumulat: concentrarea negestionată a creat simultan expunere la epuizare și la
bus factor, pe care un efort simplu și informat de date de reechilibrare le-a
rezolvat la un cost modest, în comparație cu riscul de a pierde oricare dintre
cei doi ingineri seniori prin plecare.

Costul total de proprietate include instrumentarea pentru urmărirea distribuției
alertelor la nivel individual (folosită cu grijă, doar agregat) și, acolo unde
este indicat, investiție reală în capacitate pentru reducerea volumului de
alerte la sursă. Exemplul companiei de apă arată că investiția se poate
amortiza direct și măsurabil, pentru că o singură reparație de capacitate, bine
țintită, a redus substanțial povara operațională la nivelul întregii
organizații.

## Anti-modele și capcane

- **Urmărirea doar a unui număr mediu de alerte la nivel de echipă:** ascunde
  concentrarea individuală severă care alimentează atât riscul de epuizare, cât
  și pe cel de bus factor.
- **Tratarea unui program nominal de rotație ca reflectând realitatea:** un
  program care depinde efectiv de doi sau trei oameni nu este sustenabil,
  indiferent câte nume sunt listate.
- **Folosirea datelor individuale de răspuns la alerte pentru evaluarea
  performanței:** repetă capcana evaluării individuale despre care avertizează
  cartea de la un capăt la altul, aplicată aici sarcinii operaționale.
- **Acceptarea volumului mare de alerte ca cost inevitabil al fiabilității, în
  loc să investighezi capacitatea drept cauză de fond:** ratează o remediere
  directă și frecvent disponibilă.
- **Nelegarea datelor despre sarcina de gardă de datele din sondajele de
  bunăstare:** ratează șansa de a identifica și a acționa asupra unui risc
  cumulat de epuizare înainte să apară ca fluctuație de personal.
- **Ignorarea costului psihologic al gărzii cu zero alerte efective:** subestimează
  povara reală a unei rotații.

## Model de maturitate

- **Nivelul 1, Inițiere:** Sarcina de gardă nu este urmărită deloc sau este
  urmărită doar ca medie la nivel de echipă, care ascunde concentrarea
  individuală.
- **Nivelul 2, Dezvoltare:** Există unele date de alerte la nivel individual,
  dar nu sunt legate de datele din sondajele de bunăstare sau de deciziile de
  investiții în capacitate.
- **Nivelul 3, Standardizare:** Distribuția alertelor la nivel individual și
  corelația cu utilizarea capacității sunt urmărite consecvent, cu limite
  explicite de sustenabilitate pentru frecvența rotației.
- **Nivelul 4, Gestionare:** Datele despre sarcina de gardă sunt folosite activ
  pentru a conduce investițiile în capacitate și reechilibrarea rotației, legate
  explicit de semnalele din sondajele de bunăstare.
- **Nivelul 5, Orchestrare:** Organizația poate indica îmbunătățiri concrete și
  măsurabile atât ale sarcinii operaționale, cât și ale bunăstării, datorate
  investițiilor țintite în capacitate și reproiectării rotației, iar
  dimensionarea sustenabilă a gărzii este o intrare de rutină, bine justificată,
  în planificarea personalului și a infrastructurii.

## Idei de discuție

1. Cum arată acum distribuția noastră reală a alertelor, la nivel individual?
2. Reflectă programul nostru nominal de rotație cine rezolvă de fapt cele mai multe incidente?
3. Care singură investiție de capacitate ar reduce cel mai mult volumul nostru actual de alerte?
4. Am legat vreodată datele despre sarcina de gardă de semnalele din sondajele de bunăstare?
5. Cât ne-ar costa să pierdem din cauza epuizării inginerul cel mai solicitat cu alerte?

## Concluzii principale

- Sarcina de gardă este o **resursă măsurabilă și gestionabilă**; urmărește
  distribuția la nivel individual, nu doar o medie la nivel de echipă care poate
  ascunde o concentrare severă.
- Faptul de a fi de gardă are un **cost psihologic chiar și cu zero alerte
  efective**; măsoară-l separat de satisfacția generală.
- **Planificarea capacității și sarcina de gardă sunt direct legate**;
  infrastructura subdimensionată generează mai multe alerte și mai multă
  povară.
- Folosește datele de gardă pentru **deciziile de dimensionare și de
  capacitate**, niciodată pentru evaluarea performanței individuale.
- Un sistem de gardă sustenabil **protejează însăși fiabilitatea**, pentru că
  responsabilii epuizați iau decizii mai lente și mai predispuse la erori.

## Referințe și lecturi suplimentare

- *Site Reliability Engineering: How Google Runs Production Systems*, de Betsy
  Beyer, Chris Jones, Jennifer Petoff și Niall Richard Murphy, eds. (practica
  gărzii și sarcina operațională sustenabilă).
- *The Site Reliability Workbook*, de Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara și Stephen Thorne, eds. (îndrumări practice
  pentru proiectarea rotațiilor de gardă).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, de Christina Maslach și Michael P. Leiter (cauze organizaționale
  și intervenții pentru epuizare, aplicabile stresului gărzii).
- *Seeking SRE: Conversations About Running Production Systems at Scale*,
  editată de David N. Blank-Edelman (perspective ale practicienilor asupra
  practicii operaționale sustenabile).
