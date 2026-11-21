# 8.5 O foaie de parcurs pentru adoptare incrementală

## Prezentare generală și motivație

Acest subiect încheie Partea 8 și conținutul substanțial al cărții cu întrebarea
pe care și-o pune probabil fiecare cititor ajuns până aici: dat fiind tot ce
tratează cartea, patruzeci și cinci de subiecte care acoperă livrarea,
experiența dezvoltatorilor, calitatea codului, rezultatele de business,
fiabilitatea, securitatea și schimbarea din era IA, de unde începe de fapt o
organizație. Răspunsul onest pe care îl dă acest subiect este: nu peste tot
deodată. O introducere [big-bang](https://en.wikipedia.org/wiki/Big_bang_adoption)
a întregului domeniu al cărții, încercată dintr-o dată, încalcă direct
îndrumările centrale ale subiectului 8.3, deoarece un program de metrici
cuprinzător și de amploare, introdus peste noapte, este exact genul de schimbare
care provoacă frică și manipulare, nu încredere.

În schimb, acest subiect oferă o succesiune concretă, în faze, construită pe un
principiu simplu și consecvent, repetat de-a lungul cărții: începe cu
fundamentele, dovedește valoarea într-un domeniu restrâns, apoi extinde
deliberat, fără să sari niciodată peste munca de guvernanță și de încredere
culturală din subiectele 1.4 și 8.3, în favoarea trecerii directe la metrici
sofisticate și cuprinzătoare. Succesiunea nu este arbitrară; urmează structura
de dependențe pe care o stabilesc părțile cărții înseși: fundamentele Părții 1
trebuie într-adevăr să vină primele, deoarece fiecare parte ulterioară
presupune guvernanța, orientarea spre rezultate și cultura statistică pe care
le stabilesc subiectele 1.1–1.6.

Pentru echipele mari, o foaie de parcurs în faze este ceea ce face ca întregul
domeniu al cărții să fie realizabil, nu copleșitor. Organizațiile mari pot
folosi succesiunea acestui subiect ca să planifice o introducere cu adevărat pe
mai multe trimestre sau ani a unui program de metrici, cu jaloane realiste;
administrațiile publice, care au adesea nevoie să justifice investiția în metrici
în fața unui proces bugetar sau de supraveghere incremental, nu printr-o singură
cerere mare, pot folosi fazele acestui subiect ca puncte naturale de control
pentru a demonstra valoarea și a cere continuarea investiției.

## Principii-cheie

- **Fundamentele întâi, mereu.** Guvernanța (subiectul 1.4), orientarea spre
  rezultate (subiectul 1.3) și construirea încrederii culturale (subiectul 8.3)
  nu pot fi sărite în favoarea trecerii directe la metrici sofisticate.
- **Dovedește valoarea într-un domeniu restrâns înainte să extinzi.** O singură
  echipă sau o singură familie de metrici, făcută bine și de încredere, este o
  fundație mai puternică decât o introducere cuprinzătoare făcută prost.
- **Secvențiază după dependență, nu după importanța percepută.** Unele familii
  de metrici din carte depind de o muncă de bază pe care o stabilesc mai întâi
  alte subiecte.
- **Fiecare fază ar trebui să producă un rezultat demonstrabil și raportabil**,
  care justifică continuarea investiției în faza următoare.
- **Este o foaie de parcurs de adaptat, nu o prescripție rigidă și universală.**
  Punctul de pornire și prioritățile specifice ale organizației tale ar trebui
  să modeleze ritmul real.

## Recomandări

### Faza 1: Fundamente și guvernanță (Partea 1)

Înainte de a instrumenta o singură familie de metrici, stabilește disciplina de
guvernanță descrisă de subiectul 1.4: un șablon de cartă a metricilor, o
politică clară diagnostic versus evaluativ (subiectul 1.1) și noțiunile de bază
de cultură statistică din subiectul 1.6, împărtășite tuturor celor care vor
interpreta datele. Această fază nu produce încă tablouri de bord; produce baza
organizațională de care depinde fiecare fază ulterioară. Sărirea peste această
fază, pentru a merge mai repede, este cea mai frecventă cale prin care
îndrumările cărții sunt subminate în practică, deoarece fiecare metrică
ulterioară moștenește calitatea guvernanței, sau lipsa ei, pe care a stabilit-o
această fază.

### Faza 2: O singură echipă-pilot, metrici DORA, exclusiv diagnostic (Partea 2)

Alege o echipă, de preferat una dispusă și implicată, nu una obligată, și
instrumentează metricile DORA din Partea 2, folosind instrumentare automată
(subiectul 1.5) în locul autoraportării, în mod pur diagnostic, urmând direct
îndrumările de construire a încrederii din subiectul 8.3. Rulează asta cel puțin
un trimestru întreg înainte de extindere și folosește-o ca teren de probă pentru
șablonul tău de cartă de guvernanță și pentru abordarea ta de proiectare a
tabloului de bord (subiectul 8.1), înainte de a te angaja la oricare dintre ele
la scară mai largă.

### Faza 3: Extinde metricile de livrare în toată organizația, adaugă experiența dezvoltatorilor (Părțile 2, 3)

Odată ce pilotul a demonstrat valoare reală și, esențial, încredere susținută
(niciun incident de folosire abuzivă sau unul gestionat bine, conform
îndrumărilor din subiectul 8.3), extinde instrumentarea DORA la echipe
suplimentare și introdu primul sondaj despre experiența dezvoltatorilor
(subiectul 3.7) la nivelul întregii organizații. În această fază disciplina
diagnostic versus evaluativ trece prima dată un test real la scară, iar
menținerea ei atentă aici dă tonul pentru tot ce urmează.

### Faza 4: Metrici de calitate a codului și de rezultat (Părțile 4, 5)

Cu fundamentele livrării și ale experienței dezvoltatorilor stabilite și de
încredere, adaugă metricile de calitate a codului din Partea 4, prioritizând
analiza punctelor fierbinți (subiectul 4.3) și urmărirea datoriei tehnice
(subiectul 4.5) ca punctele de plecare cu cea mai mare pârghie, și începe să
construiești infrastructura de telemetrie a rezultatelor despre care subiectul
7.4 susține că ar trebui să fie în cele din urmă centrul de greutate al
programului tău, începând cu rata defectelor scăpate (subiectul 5.1) și cu
adoptarea funcționalităților (subiectul 5.2), cele mai ușor de instrumentat
dintre metricile de rezultat.

### Faza 5: Fiabilitate, securitate și recalibrare pentru era IA (Părțile 6, 7)

Stabilește SLO-uri formale și bugete de erori (subiectul 6.1) pentru serviciile
tale cele mai critice, construiește o practică a metricilor de incident fără
vinovați (subiectul 6.2) și realizează auditul metricilor pentru era IA
recomandat de subiectul 7.1, dacă organizația ta a adoptat, sau adoptă,
instrumente de dezvoltare asistată de IA. Această fază rulează adesea parțial
în paralel cu Faza 4, nu strict secvențial, deoarece munca de fiabilitate și
securitate are frecvent urgența ei independentă.

### Continuu: evaluare consolidată a maturității și investiție continuă

Odată ce fazele de bază sunt stabilite, adoptă evaluarea consolidată a
maturității din subiectul 8.4 ca practică recurentă, anuală, folosindu-i
constatările pentru a direcționa investiția continuă, în loc să tratezi foaia de
parcurs ca încheiată odată ce fiecare fază a fost atinsă tehnic. Un program de
metrici este o capacitate organizațională susținută, nu un proiect cu o dată de
încheiere definită, iar această fază continuă reflectă direct realitatea
aceasta.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Introducere big-bang, cuprinzătoare | Rapidă, acoperire cuprinzătoare de la început | Risc ridicat de a provoca frică și manipulare (subiectul 8.3); fără o fundație de guvernanță dovedită |
| Introducere în faze, fundamentele întâi | Construiește încredere și guvernanță înainte de extinderea domeniului; fiecare fază se dovedește singură | Mai lentă până la acoperirea completă; cere un angajament susținut, pe mai multe trimestre |
| Introducere în faze, metricile întâi (sărind peste guvernanță) | Rezultate inițiale mai rapide pe tabloul de bord | Moștenește o guvernanță slabă în fiecare fază ulterioară; risc mai mare pe termen lung |
| Adoptare ad-hoc, oportunistă, fără foaie de parcurs | Flexibilă, receptivă la nevoile imediate | Produce o acoperire inconsecventă, greu de guvernat, și repetă greșelile fază cu fază |

Tensiunea centrală este **viteza spre acoperirea cuprinzătoare versus
succesiunea cu fundamentele întâi**. Organizațiile aflate sub presiunea de a
arăta rapid rezultate sunt tentate să sară peste munca de guvernanță a Fazei 1
și să treacă direct la instrumentarea metricilor, dar argumentul cumulat al
cărții, de la disciplina de guvernanță din subiectul 1.4 până la îndrumările de
construire a încrederii din subiectul 8.3, este că sărirea peste fundație
produce un program mai rapid, dar fundamental mai slab. Rezolvă tensiunea
angajându-te la succesiunea în faze și folosind rezultatul demonstrabil al
fiecărei faze (recomandarea-cheie a subiectului 8.5) pentru a justifica
continuarea investiției, nu încercând să arăți rezultate cuprinzătoare înainte
ca fundația să le poată susține.

## Întrebări de discutat cu echipa ta

1. **Unde se află de fapt organizația noastră în această succesiune în faze,
   evaluată onest?** Compară starea ta actuală direct cu cele cinci faze;
   multe organizații, evaluate onest, descoperă că au metrici instrumentate
   dintr-o fază ulterioară fără să fi încheiat cu adevărat fazele
   fundamentale anterioare.

2. **Am sărit peste fundația de guvernanță din Faza 1 în favoarea trecerii
   directe la instrumentare și, dacă da, ce ne-a costat asta?** Se leagă
   direct de evaluarea maturității din subiectul 8.4; o fundație de guvernanță
   slabă, descoperită târziu, este scumpă de remediat.

3. **Cum ar arăta pentru noi o echipă-pilot autentică și dispusă, dacă încă nu
   am avut una?** Identifică o echipă candidată concretă, reală, în loc să lași
   abstract, și discută ce ar face-o o bună candidată în mod special.

4. **Ce rezultat demonstrabil a produs de fapt fiecare fază încheiată de noi și
   l-am folosit pentru a justifica investiția fazei următoare?** Dacă nu poți
   indica un rezultat specific, comunicat, dintr-o fază încheiată, acest
   decalaj merită numit.

5. **Rulează Faza 4 și Faza 5 în paralelul potrivit pentru noi sau una este
   neglijată în favoarea celeilalte?** Discută dacă profilul specific de risc
   al organizației tale, mai orientat spre livrare sau mai orientat spre
   fiabilitate, ar trebui să modeleze această secvențiere paralelă diferit de
   cea implicită descrisă de acest subiect.

6. **Am stabilit practica recurentă și continuă de evaluare a maturității din
   subiectul 8.4 sau foaia noastră de parcurs se termină practic odată ce
   fazele inițiale sunt încheiate tehnic?** O foaie de parcurs fără această fază
   continuă riscă să trateze programul de metrici ca pe un proiect încheiat, nu
   ca pe capacitatea susținută pe care cartea susține că trebuie să fie.

## Perspectiva sectorială

**Startup.** Această foaie de parcurs completă, în mai multe faze, poate fi
probabil comprimată semnificativ, deoarece o organizație mică poate trece prin
fazele de guvernanță fundamentală și de pilot în săptămâni, nu în trimestre. Nu
sări complet peste Faza 1 nici la scară mică, deoarece obiceiurile de
guvernanță stabilite devreme sunt mult mai ușor de susținut decât de adaptat
ulterior, pe măsură ce organizația crește.

**Afacere mică.** Potrivește ritmul foii de parcurs cu capacitatea ta reală, în
loc să încerci fiecare fază din succesiunea descrisă de acest subiect; o afacere
mică s-ar putea opri rezonabil după Faza 2 sau 3, cu metrici de livrare și de
experiență a dezvoltatorilor, și ar putea amâna munca mai sofisticată de
rezultate și fiabilitate din Părțile 4–6 până când organizația a crescut
suficient ca să aibă cu adevărat nevoie de ea și să o poată susține.

**Companie mare.** Planifică această foaie de parcurs explicit ca program pe mai
multe trimestre sau ani, cu jaloane realiste, și folosește rezultatul
demonstrabil al fiecărei faze ca punct formal de control pentru a asigura
continuarea sponsorizării executive și a bugetului, în loc să încerci să
justifici întregul domeniu dintr-o dată, într-un singur argument de business.

**Administrație publică.** Folosește fazele acestui subiect ca puncte naturale și
incrementale de control pentru raportarea către buget sau organ de supraveghere,
cerând continuarea investiției la fiecare graniță de fază pe baza rezultatului
demonstrat și documentat al fazei anterioare, nu printr-o singură cerere mare,
inițială, care se poate lovi de mai mult scepticism sau de dificultăți în
achiziții.

## Exemple

**Companie mare.** O companie de tehnologie pentru sănătate a adoptat explicit
această foaie de parcurs drept cadru de structurare a programului său de
metrici, încheind în șase săptămâni fundația de guvernanță din Faza 1, rulând un
pilot DORA cu o singură echipă timp de un trimestru întreg și abia apoi
extinzându-se la acoperirea completă, la nivelul organizației, cu metrici de
livrare în Faza 3, la aproximativ cinci luni de la început. Prin ritmul
deliberat al introducerii, compania a evitat tiparul de manipulare născută din
frică pe care subiectul 8.3 îl descrie ca risc al introducerilor mai rapide și
mai puțin disciplinate, iar echipa-pilot din Faza 2 a devenit în mod special un
susținător intern informal al extinderii programului, fiind convinsă din
experiență directă că angajamentul exclusiv diagnostic a fost respectat cu
adevărat pe tot parcursul trimestrului de pilot.

**Administrație publică.** O agenție guvernamentală de tehnologie a unui stat a
folosit explicit structura în faze a acestui subiect pentru a secvenția
cererile de buget către comitetul său de supraveghere, cerând finanțare pentru
Faza 1 și Faza 2 ca investiție-pilot inițială și modestă, apoi revenind la
comitet cu rezultatele documentate ale Fazei 2, frecvență îmbunătățită a
implementărilor și rată de eșec a modificărilor stabilă pentru echipa-pilot,
drept dovadă concretă în sprijinul unei cereri de finanțare mai mari pentru
Faza 3 și Faza 4, în ciclul bugetar următor. Această abordare incrementală de
finanțare, bazată pe dovezi, a reușit acolo unde o cerere anterioară, mai
cuprinzătoare, făcută dintr-o dată pentru întregul domeniu al programului de
metrici al agenției fusese respinsă ca prea mare și insuficient justificată prin
rezultate demonstrate.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea unei foi de parcurs în faze, cu fundamentele întâi, este un
program de metrici care chiar funcționează, de încredere, bine guvernat, folosit
cu adevărat pentru decizii, nu unul cu aspect cuprinzător, dar corupt de frică
sau prost guvernat, pe care îl riscă o introducere mai rapidă. Exemplul din
tehnologia pentru sănătate de mai sus o arată direct: ritmul deliberat a produs
încredere reală și susținere internă pe care o introducere mai rapidă le-ar fi
subminat probabil.

Costul total de proprietate este timpul: această foaie de parcurs durează cu
adevărat mai mult până la domeniul complet decât o introducere big-bang. Costul
în timp este prețul direct și necesar al fundației de încredere și guvernanță
pentru care pledează întreaga carte încă de la primele subiecte, iar exemplul
guvernamental de mai sus arată un beneficiu secundar real și practic: fazele
incrementale, bazate pe dovezi, sunt adesea mai ușor de finanțat și de justificat
decât o singură cerere mare, inițială și nedovedită.

## Anti-modele și capcane

- **O introducere big-bang, cuprinzătoare, încercată dintr-o dată:** încalcă
  îndrumările centrale ale subiectului 8.3 și riscă să provoace frică și
  manipulare de la început.
- **Sărirea peste fundația de guvernanță din Faza 1 pentru a merge mai
  repede:** moștenește o guvernanță slabă în fiecare fază ulterioară, scumpă de
  remediat mai târziu.
- **Alegerea unei echipe-pilot nedispuse sau obligate pentru Faza 2:**
  subminează scopul de construire a încrederii pe care trebuie să-l servească un
  pilot autentic.
- **Neproducerea sau necomunicarea unui rezultat demonstrabil din fiecare
  fază:** pierde baza de dovezi necesară pentru a justifica continuarea
  investiției în faza următoare.
- **Tratarea foii de parcurs ca încheiată odată ce fiecare fază a fost atinsă
  tehnic:** ratează practica continuă de evaluare a maturității pe care
  subiectul 8.4 o recomandă ca disciplină permanentă, nu unică.
- **Urmarea rigidă a succesiunii implicite a acestui subiect, indiferent de
  profilul real de risc al organizației tale:** foaia de parcurs ar trebui
  adaptată, nu aplicată mecanic, fără judecată.

## Model de maturitate

- **Nivelul 1, Inițiere:** Nu există nicio foaie de parcurs; adoptarea metricilor,
  acolo unde are loc, este ad-hoc și nesecvențiată.
- **Nivelul 2, Dezvoltare:** Unele faze au fost încercate, dar munca fundamentală
  de guvernanță a fost sărită sau incompletă, iar rezultatele fazelor nu sunt
  documentate sistematic.
- **Nivelul 3, Standardizare:** O foaie de parcurs în faze, care urmează
  succesiunea cu fundamentele întâi a acestui subiect, este documentată și
  urmată activ, fiecare fază producând un rezultat demonstrabil.
- **Nivelul 4, Gestionare:** Rezultatele fazelor sunt folosite sistematic pentru
  a justifica continuarea investiției, iar foaia de parcurs este adaptată
  deliberat la profilul de risc și la prioritățile specifice ale organizației.
- **Nivelul 5, Orchestrare:** Organizația a parcurs întreaga foaie de parcurs și
  susține practica continuă de evaluare a maturității din subiectul 8.4 ca
  pe o capacitate permanentă, cu un istoric demonstrat, pe mai mulți ani, de
  investiție în metrici în faze, care construiește încredere.

## Idei de discuție

1. Unde se află de fapt organizația noastră în această succesiune în faze, chiar acum?
2. Am sărit peste sau am scurtat faza fundamentală de guvernanță și ce ne-a costat asta?
3. Cum ar arăta o echipă-pilot autentică și dispusă pentru următoarea noastră extindere?
4. Ce rezultat demonstrabil din cea mai recentă fază a noastră ar putea justifica următoarea cerere de investiție?
5. Am stabilit practica continuă de evaluare a maturității sau foaia noastră de parcurs se termină practic?

## Concluzii principale

- Adoptă îndrumările cărții **în faze, cu fundamentele întâi**, niciodată ca o
  introducere big-bang care riscă să provoace frică și manipulare.
- **Faza 1 (guvernanța) nu poate fi sărită**; fiecare fază ulterioară moștenește
  calitatea guvernanței pe care o stabilește această fază.
- Folosește o **echipă-pilot autentică și dispusă** ca să dovedești valoarea și
  să construiești încredere înainte de a extinde domeniul la nivelul întregii
  organizații.
- Fiecare fază ar trebui să producă un **rezultat demonstrabil și raportabil**
  care justifică continuarea investiției în faza următoare.
- Tratează încheierea foii de parcurs ca începutul unei **practici continue și
  susținute** (evaluarea recurentă a maturității din subiectul 8.4), nu ca pe un
  proiect încheiat.

## Referințe și lecturi suplimentare

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (baza de dovezi pentru familiile de metrici pe care le
  secvențiază această foaie de parcurs).
- *Leading Change*, de John P. Kotter (principii de gestionare a schimbării
  organizaționale aplicabile introducerii în faze a unui program de metrici).
- *The Lean Startup*, de Eric Ries (ciclul construiește-măsoară-învață pe care
  se sprijină abordarea în faze a acestui subiect, cu dovedirea valorii înainte
  de extindere).
- U.S. Government Accountability Office (GAO), îndrumări privind măsurarea
  performanței și GPRA Modernization Act: practică de finanțare incrementală,
  bazată pe dovezi, a programelor din sectorul public.
