# 3.4 Metrici de activitate și limitele lor

## Prezentare generală și motivație

**Activitatea**, litera A din SPACE (subiectul 3.1), numără volumul de muncă
de inginerie observabil din telemetria sistemelor: commituri, pull requesturi
deschise, linii de cod modificate, comentarii de revizuire a codului lăsate.
Este cea mai ușor de măsurat dimensiune SPACE, pentru că fiecare dintre aceste
evenimente este deja înregistrat automat de uneltele pe care echipele de
inginerie le folosesc zilnic, iar tocmai această ușurință a măsurării face din
ea cea mai periculoasă dimensiune de supraponderat. Activitatea este un
semnal real, legitim, dacă e folosit cu grijă. Folosită ca indicator indirect
unic al productivității, este familia de metrici cea mai manipulată și cea mai
înșelătoare din toată istoria măsurării [ingineriei
software](https://en.wikipedia.org/wiki/Software_engineering).

Problema de fond este că activitatea măsoară mișcarea, nu valoarea. Un număr
de commituri nu face deosebirea între un commit care a rezolvat elegant o
problemă grea și un commit care a împărțit o schimbare semnificativă în cinci
ca să pară mai productiv (manipularea prin substituție din subiectul 1.2,
aplicată direct acestei familii de metrici). Liniile de cod modificate
recompensează verbozitatea în detrimentul abilității mult mai valoroase de a
șterge cod inutil. Un inginer care petrece o zi întreagă în gândire profundă,
neîntreruptă, înainte să scrie zece rânduri elegante și bine testate, pare
mai puțin „activ” după aceste metrici decât unul care face commituri
superficiale, nerevizuite, la fiecare douăzeci de minute, deși primul produce
foarte adesea mult mai multă valoare reală.

Pentru echipele mari, tentația de a folosi metricile de activitate pentru
evaluarea individuală este constantă și bine documentată, pentru că
activitatea e ușor de atribuit unei persoane anume și ușor de calculat
automat, spre deosebire de semnalele mai grele și mai oneste din celelalte
dimensiuni SPACE. Acest subiect există tocmai ca să numească acea tentație
și să le ofere echipelor limbajul și dovezile cu care să-i reziste, pentru că
odată ce o organizație începe să clasifice inginerii individual după numărul
de commituri sau liniile de cod, paguba adusă colaborării, calității codului
și moralului este bine documentată și greu de inversat.

## Principii-cheie

- **Activitatea măsoară mișcarea, nu valoarea.** Este un semnal contextual
  legitim, niciodată un indicator indirect unic al productivității.
- **Aceasta este familia de metrici cel mai des folosită abuziv din istoria
  măsurării ingineriei software.** Tratează acea istorie ca pe un avertisment,
  nu ca pe o coincidență.
- **Clasificarea individuală după activitate este aproape întotdeauna
  dăunătoare.** Deteriorează colaborarea, recompensează munca de umplutură
  vizibilă și invită la manipulare aproape imediat.
- **Datele de activitate sunt cele mai utile agregat, ca context pentru
  celelalte dimensiuni,** nu ca semnal independent despre o persoană sau o
  echipă anume.
- **Munca profundă și valoroasă pare adesea liniștită pe un tablou de bord de
  activitate.** Familia de metrici este structural părtinitoare împotriva
  exact felului de gândire care produce cele mai bune rezultate de inginerie.

## Recomandări

### Nu clasifica și nu evalua niciodată indivizii după numărătorile brute de activitate

Aceasta este cea mai grea și cea mai importantă regulă a acestui subiect.
Numărul de commituri, liniile de cod și numărul de pull requesturi nu ar
trebui să apară niciodată într-o evaluare individuală a performanței, într-un
clasament comparativ sau în orice context în care compensația, poziția sau
reputația unui inginer depind de acel număr. Asta decurge direct din principiul
expunerii la stimulente din subiectul 1.2: în clipa în care activitatea devine
o metrică individuală stimulată, manipularea urmează aproape imediat, iar
comportamentul rezultat, umflarea commiturilor, fragmentarea trivială a
schimbărilor, evitarea muncii profunde și neglamuroase care produce puține
evenimente vizibile, dăunează activ organizației.

### Folosește datele de activitate agregat, ca context, nu ca verdict

Datele de activitate devin cu adevărat utile când sunt agregate la nivel de
echipă și citite alături de celelalte dimensiuni SPACE: o scădere bruscă a
activității de commit la nivel de echipă, care coincide cu o creștere a
satisfacției, ar putea indica faptul că echipa a avut în sfârșit răgaz să
gândească profund și să plătească din datoria tehnică, un tipar pozitiv, nu
unul negativ. Citită izolat, aceeași scădere pare alarmantă. Contextul din
celelalte dimensiuni este ceea ce face datele de activitate interpretabile, nu
înșelătoare.

### Preferă semnalele de activitate apropiate de calitate în locul volumului brut

Acolo unde datele de activitate sunt deloc utile, preferă semnale ajustate
pentru calitate în locul numărătorilor brute: dimensiunea pull requestului
raportată la profunzimea revizuirii (subiectul 2.9) sau raportul dintre codul
nou și codul eliminat, care poate arăta dacă o echipă acumulează complexitate
sau simplifică activ. Aceste semnale ajustate sunt tot date ale dimensiunii
activitate, dar rezistă celei mai grosolane manipulări pe care o invită
numărătorile brute.

### Urmărește în mod special tiparul manipulării prin substituție în datele de activitate

Cel mai frecvent mod în care metricile de activitate sunt manipulate este exact
tiparul de substituție din subiectul 1.2: împărțirea unei munci cu adevărat
semnificative în multe evenimente mici, banale, pentru a umfla o numărătoare.
Dacă frecvența commiturilor sau a pull requesturilor crește în timp ce
complexitatea sau dimensiunea de fond a schimbărilor scade brusc, investighează
înainte să atribui o îmbunătățire reală a productivității, folosind aceeași
disciplină de diagnostic pe care subiectul 2.10 o recomandă pentru frecvența
implementărilor.

### Numește explicit și descurajează teatrul activității

**Teatrul activității** este munca făcută, conștient sau nu, în primul rând
pentru că este vizibilă și numărabilă, nu pentru că este valoroasă: commituri
mici și dese, activitate ostentativă la ore târzii sau aglomerație vizibilă în
canalele comune. Numirea explicită a acestui tipar în fața echipei și
transparența că conducerea nu folosește activitatea brută pentru a judeca
contribuția elimină o mare parte din stimulentul ca el să apară de la bun
început.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Clasament individual după activitate | Simplu, ușor de calculat, pare direct acționabil | Manipulat aproape imediat; dăunează colaborării și moralului; măsoară lucrul greșit |
| Nicio măsurare a activității | Evită complet riscul de utilizare abuzivă | Pierde un semnal contextual cu adevărat util pentru depistarea tiparelor la nivel de echipă |
| Activitate agregată la nivel de echipă, citită în context | Oferă context util fără risc individual | Cere disciplină pentru interpretare alături de celelalte dimensiuni, nu izolat |
| Semnale de activitate ajustate pentru calitate | Rezistă celei mai grosolane manipulări a numărătorilor brute | Mai complexe de calculat și de explicat decât o simplă numărătoare |

Tensiunea centrală este **utilitate versus risc de utilizare abuzivă**. Datele
de activitate, citite cu grijă, agregat și în context, sunt cu adevărat utile
pentru depistarea unor tipare precum un ritm nesustenabil sau o echipă care
își face în tăcere loc să abordeze datoria tehnică. Aceleași date, folosite ca
fișă de scor individuală, sunt aproape uniform dăunătoare. Rezolvă tensiunea
nu evitând complet datele de activitate, ci construind o regulă
organizațională fermă împotriva folosirii lor individuale, permițând și chiar
încurajând o utilizare atentă, contextualizată, la nivel de echipă.

## Întrebări de discutat cu echipa ta

1. **A fost vreodată cineva din organizația noastră evaluat, formal sau
   informal, folosind o numărătoare brută de activitate precum commiturile sau
   liniile de cod?** Întreabă asta direct și fii pregătit pentru un răspuns
   incomod, dar necesar; această utilizare abuzivă se petrece adesea pe tăcute,
   printr-un comentariu aruncat în treacăt de un manager, fără să devină
   vreodată politică oficială.

2. **Cum ar arăta teatrul activității în echipa noastră în mod specific și am
   văzut semne de așa ceva?** Numirea formei specifice și plauzibile pe care
   acest tipar ar putea-o lua în propria echipă face mult mai ușor de
   recunoscut dacă începe să se întâmple.

3. **Când se mișcă datele noastre de activitate la nivel de echipă, le
   interpretăm alături de celelalte dimensiuni SPACE sau izolat?** O scădere a
   activității citită izolat pare îngrijorătoare; aceeași scădere citită
   alături de o îmbunătățire a satisfacției sau a performanței poate părea un
   tipar cu adevărat pozitiv. Verifică practica ta reală de revizuire față de
   această distincție.

4. **Am văzut vreodată o creștere a frecvenței commiturilor sau pull
   requesturilor însoțită de o dimensiune medie a schimbărilor în scădere, ceea
   ce sugerează fragmentare banală și nu un câștig real de productivitate?**
   Scoate date reale și caută exact acest tipar de manipulare prin substituție.

5. **Cum vorbim acum despre „cine contribuie cel mai mult” în echipa noastră și
   se sprijină implicit conversația pe datele de activitate chiar și fără o
   metrică formală?** O părtinire informală, nemăsurată, spre aglomerația
   vizibilă poate modela percepția și recompensa chiar și fără o politică
   explicită bazată pe activitate; scoate asta la lumină cinstit.

6. **Cum arată în echipa noastră munca cu adevărat valoroasă, dar discretă,
   gândirea profundă, proiectarea atentă, mentoratul, și cum ne asigurăm că
   este recunoscută deși generează puține date vizibile de activitate?**
   Această întrebare este complementul pozitiv al celor dinainte: numirea
   felului în care arată o muncă bună și discretă ajută la protejarea ei de a
   fi trecută cu vederea în favoarea muncii mai zgomotoase și mai ușor de
   numărat.

## Perspectiva sectorială

**Startup.** Într-o echipă mică, care colaborează strâns, datele de activitate
sunt de obicei vizibile fără să ai nevoie de un tablou de bord, iar riscul
clasificării individuale, împotriva căruia avertizează acest subiect, este mai
mic pur și simplu pentru că toată lumea știe deja la ce lucrează ceilalți.
Riscul este în schimb ca un fondator să favorizeze inconștient comportamentul
vizibil „ocupat” când ia deciziile timpurii de angajare sau de acordare de
capital.

**Afacere mică.** Datele de activitate din uneltele pe care le ai deja sunt
bune pentru o privire de ansamblu asupra debitului echipei, dar rezistă
tentației de a le folosi pentru a compara direct contributorii individuali;
valoarea reală a unei echipe mici se concentrează adesea în câțiva oameni care
fac muncă discretă, cu efect de pârghie ridicat, pe care o privire bazată pe
numărul de commituri ar subevalua sistematic.

**Companie mare.** Aici tentația clasificării individuale este cea mai
puternică și mai dăunătoare, pentru că datele de activitate sunt cel mai ușor
semnal de extras pentru un proces de evaluare a performanței care cuprinde mii
de ingineri, iar presiunea de a găsi *o* intrare cuantificabilă este reală.
Construiește o politică explicită, comunicată și aplicată împotriva clasificării
individuale după activitate și auditează periodic practicile de evaluare a
performanței, ca să confirmi că politica este urmată în practică, nu doar
enunțată.

**Administrație publică.** Metricile de activitate pot fi tentante de citat
într-un raport public ca dovadă a productivității („zece mii de commituri în
acest an”), dar un asemenea titlu este aproape lipsit de sens și poate invita
exact controlul nepotrivit, odată ce un evaluator priceput observă că
activitatea brută nu spune nimic despre rezultate. Raportează în schimb date
de rezultat și de performanță (subiectul 3.3) și evită numărătorile de
activitate în orice comunicare externă.

## Exemple

**Companie mare.** Conducerea de inginerie a unei companii de software începuse,
fără o politică formală, să facă referire informală la frecvența commiturilor
individuale în discuțiile despre promovări. O revizuire internă, declanșată de
un proiect fără legătură de analiză a plecărilor, a constatat că inginerii care
lucrau la cele mai complexe și mai valoroase sisteme ale companiei, care
cereau perioade lungi de proiectare atentă înainte să se scrie vreun cod, aveau
sistematic mai puține commituri decât inginerii de pe sisteme mai simple,
dezvoltate mai incremental, și erau subtil dezavantajați în conversațiile
despre promovare din acest motiv. Conducerea a emis o politică explicită,
comunicată, care interzice referirea la numărătorile de activitate în
discuțiile despre performanță și promovare și a mutat dovezile pentru promovare
spre abordarea performanței cu semnale multiple din subiectul 3.3.

**Administrație publică.** O agenție de servicii digitale, sub presiunea de a
demonstra productivitatea unei comisii legislative de control, a propus inițial
raportarea numărului total de commituri și a liniilor de cod scrise în
programul de inginerie ca dovadă a valorii livrate. Un consilier tehnic intern
s-a opus, observând corect că această încadrare invita exact controlul
nepotrivit, întrucât un membru al comisiei cu cunoștințe tehnice putea indica
ușor că volumul brut de cod nu spune nimic despre dacă acel cod a funcționat
sau a contat. Raportul revizuit al agenției a folosit în schimb metrici de
rezultat (subiectul 5.3): reducerea erorilor raportate de cetățeni și
creșterea finalizărilor cu succes ale serviciilor în regim de autoservire, care
au rezistat mult mai bine întrebărilor comisiei decât ar fi rezistat cifrele de
activitate.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea unei utilizări corecte a metricilor de activitate, folosite
contextual și nu ca fișe de scor individuale, este paguba evitată:
organizațiile care clasifică inginerii individual după activitate observă în
mod sigur comportament de manipulare, colaborare redusă (ingineri care își
protejează propria producție vizibilă în loc să ajute un coleg) și o părtinire
sistematică împotriva muncii profunde, cu efect de pârghie ridicat, care
produce adesea cea mai mare valoare generând cea mai puțină activitate
vizibilă. Inversarea acestei pagube, odată înrădăcinată într-o cultură a
evaluării performanței, este cu adevărat dificilă și lentă.

Costul total al evitării acestei capcane este în mare parte disciplină
organizațională: o politică explicită, aplicată consecvent, împotriva
clasificării individuale după activitate și angajamentul de a investi în
măsurarea performanței mai grea și mai onestă descrisă în subiectul 3.3. Acea
disciplină costă mai puțin decât deciziile de promovare greșit direcționate,
colaborarea deteriorată și comportamentul de manipulare pe care metricile
individuale de activitate le produc în mod sigur în timp.

## Anti-modele și capcane

- **Clasificarea individuală după numărul de commituri sau liniile de cod:**
  cea mai dăunătoare și mai frecventă utilizare abuzivă din istorie, din toată
  cartea aceasta.
- **Teatrul activității:** muncă făcută în primul rând pentru vizibilitate, nu
  pentru valoare, un răspuns perfect previzibil la evaluarea bazată pe
  activitate.
- **Interpretarea izolată a unei scăderi de activitate la nivel de echipă, fără
  verificarea celorlalte dimensiuni SPACE:** poate confunda un tipar cu adevărat
  pozitiv cu unul îngrijorător.
- **Citarea numărătorilor brute de activitate în comunicarea externă sau către
  conducere:** invită exact controlul nepotrivit și spune puțin despre valoarea
  reală.
- **Subevaluarea sistematică a muncii profunde, atente, care generează puține
  evenimente vizibile:** o părtinire structurală inclusă în toată această
  familie de metrici.
- **Părtinirea informală, nereglementată, față de activitate, strecurată în
  discuțiile despre promovare sau evaluare:** dăunătoare chiar și fără o metrică
  oficială în spate.

## Model de maturitate

- **Nivelul 1, Inițiere:** Metricile de activitate sunt folosite, formal sau
  informal, pentru a evalua sau clasifica indivizi, fără conștientizarea
  riscului.
- **Nivelul 2, Dezvoltare:** Există o oarecare conștientizare a riscului, dar
  nicio politică explicită nu împiedică datele de activitate să influențeze
  informal evaluările sau discuțiile despre promovare.
- **Nivelul 3, Standardizare:** O politică explicită, comunicată la nivelul
  întregii organizații, interzice clasificarea individuală după activitate, iar
  datele de activitate sunt folosite doar agregat, în context de echipă.
- **Nivelul 4, Gestionare:** Practicile de evaluare a performanței și de
  promovare sunt auditate periodic pentru a confirma că politica este urmată în
  practică, iar semnalele de activitate ajustate pentru calitate înlocuiesc
  numărătorile brute acolo unde datele de activitate sunt folosite deloc.
- **Nivelul 5, Orchestrare:** Organizația a mutat demonstrabil cultura de
  evaluare de la metricile de activitate spre abordarea performanței cu semnale
  multiple din subiectul 3.3, cu o îmbunătățire vizibilă a colaborării și cu
  mai puțin comportament de manipulare ca dovadă că schimbarea a funcționat.

## Idei de discuție

1. A simțit cineva de aici vreodată, chiar și informal, că este evaluat după cât de „ocupată” părea activitatea lui?
2. Cum ar arăta teatrul activității în echipa noastră?
3. Avem o politică explicită, scrisă, împotriva clasificării individuale după activitate și este ea urmată în practică?
4. Ce muncă discretă și de mare valoare din echipa noastră generează în prezent cele mai puține date vizibile de activitate?
5. Cum ne-am reproiecta dovezile pentru evaluarea performanței ca să eliminăm complet numărătorile de activitate?

## Concluzii principale

- Activitatea măsoară **mișcarea, nu valoarea**; este familia de metrici cel mai
  des folosită abuziv din istoria ingineriei software.
- **Nu clasifica și nu evalua niciodată indivizii** după numărători brute de
  activitate; aceasta este cea mai grea și mai importantă regulă a acestui
  subiect.
- Folosește datele de activitate **agregat, ca context** pentru celelalte
  dimensiuni SPACE, niciodată ca verdict de sine stătător.
- Urmărește **teatrul activității** și **tiparul manipulării prin substituție**
  (subiectul 1.2) în mod specific în această familie de metrici.
- Munca profundă și de mare valoare generează adesea **cele mai puține date
  vizibile de activitate**; protejeaz-o să nu fie subevaluată sistematic.

## Referințe și lecturi suplimentare

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck și Jenna Butler, „The SPACE of Developer
  Productivity”, *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, de Tom DeMarco și Timothy
  Lister (pledoaria împotriva măsurării inginerilor după aglomerația vizibilă).
- *Deep Work: Rules for Focused Success in a Distracted World*, de Cal Newport
  (valoarea muncii liniștite, neîntrerupte, pe care metricile de activitate o
  subnumără sistematic).
- *The Tyranny of Metrics*, de Jerry Z. Muller (fixația pe metrici și costurile
  ei, direct aplicabile evaluării bazate pe activitate).
