# 3.5 Metrici de comunicare și colaborare

## Prezentare generală și motivație

**Comunicarea și colaborarea**, litera C din SPACE (subiectul 3.1), măsoară
cum circulă de fapt informația între oameni și echipe: cât de ușor se găsește
documentația, cât de uniform se răspândesc cunoștințele într-o echipă, cât de
bine sunt coordonate dependențele între echipe și cum se integrează noii
membri în fluxul înțelegerii comune. Această dimensiune este adesea cea mai
puțin instrumentată dintre cele cinci, tocmai pentru că este mai greu de
observat decât datele de livrare și mai puțin personală decât datele de
satisfacție, iar acest gol este o greșeală, pentru că defecțiunile de aici
sunt frecvent cauza de fond a unor probleme care apar, atribuite greșit, în
fiecare altă dimensiune.

O rată de eșec a modificărilor în creștere (subiectul 2.10), care pare o
problemă de testare, este uneori de fapt o problemă de comunicare: o echipă
care nu a aflat de schimbarea unei dependențe până când aceasta s-a stricat în
producție. O tendință descendentă a satisfacției (subiectul 3.2), care pare o
problemă de volum de muncă, este uneori de fapt o problemă de izolare: un
inginer lăsat în tăcere în afara conversațiilor în care se iau deciziile.
Argumentul central al acestui subiect este că comunicarea și colaborarea merită
măsurare directă tocmai pentru că eșecurile lor se deghizează în alte
probleme, iar o echipă care urmărește cauza de fond greșită irosește efort real
reparând lucrul greșit.

Pentru echipele mari, această dimensiune devine structural mai greu de
susținut exact pe măsură ce devine mai importantă. Coordonarea unei echipe de
cinci oameni se petrece prin apropiere zilnică și nu cere aproape nicio
măsurare deliberată; o organizație de cinci sute de oameni, răspândită pe mai
multe fusuri orare și unități de business, depinde de documentație, de
posibilitatea de a găsi informația și de mecanisme de coordonare între echipe
care trebuie proiectate deliberat și monitorizate activ, pentru că
canalele informale care au funcționat la scară mică pur și simplu nu ajung atât
de departe.

## Principii-cheie

- **Defecțiunile de comunicare se deghizează adesea în alte probleme.** O
  problemă de calitate sau de satisfacție poate avea o cauză de fond de
  colaborare.
- **Această dimensiune este cea mai greu de instrumentat automat**, iar
  tentația este să o sari complet; rezistă deliberat acelei tentații.
- **Concentrarea cunoștințelor este un risc măsurabil, nu doar o grijă vagă.**
  Urmărește cât de îngust sunt deținute cunoștințele critice.
- **Frecarea dependențelor între echipe este adesea invizibilă pentru echipele
  implicate** până când cineva o măsoară direct.
- **Viteza de integrare a noilor membri este un indicator indirect direct și
  măsurabil al cât de bine circulă de fapt înțelegerea comună** într-o
  organizație.

## Recomandări

### Măsoară direct concentrarea cunoștințelor

Urmărește câți oameni pot revizui, modifica sau opera competent fiecare
componentă critică a sistemului: o componentă cu o singură persoană calificată
are un **[bus factor](https://en.wikipedia.org/wiki/Bus_factor)** egal cu unu,
un risc sever și adesea invizibil (subiectul din cartea-soră
`software-engineering-guide` despre susținerea sistemelor de lungă durată îl
tratează mai în profunzime). Datele de „blame” din controlul versiunilor,
combinate cu evidența rotației de gardă, pot scoate automat la iveală această
concentrare: caută componentele la care un singur autor sau un singur
responsabil de gardă reprezintă o pondere disproporționată a schimbărilor sau
a răspunsurilor la incidente pe o perioadă semnificativă.

### Măsoară frecarea dependențelor între echipe cu un semnal direct

Urmărește cât durează o cerere între echipe (o schimbare necesară de API, o
actualizare a unei biblioteci comune, o lansare coordonată) de la ridicare
până la rezolvare, în spiritul descompunerii timpului de ciclu din subiectul
2.6, dar aplicată în mod specific coordonării între echipe, nu în interiorul
unei echipe. O echipă care așteaptă constant săptămâni o dependență deținută
de altă echipă are o problemă de colaborare care nu va apărea limpede în
metricile interne de livrare ale niciuneia dintre echipe.

### Folosește ca semnal posibilitatea de a găsi documentația, nu doar existența ei

Un wiki plin de pagini depășite sau de negăsit nu este dovadă de comunicare
bună doar pentru că conținutul există tehnic undeva. Acolo unde se poate,
urmărește cât de des este accesată documentația, cât de des un nou membru al
echipei raportează că nu a putut găsi un răspuns de care avea nevoie sau cât de
des aceeași întrebare este pusă repetat pe un canal de chat pentru că
răspunsul, deși documentat, nu putea fi găsit. Asta leagă direct calitatea
documentației (subiectul 4.6) de preocupările de colaborare ale acestei
dimensiuni.

### Urmărește timpul de integrare până la contribuție productivă ca indicator indirect direct

Timpul de la sosirea unui nou membru în echipă până la prima lui contribuție
semnificativă și independentă este un indicator indirect puternic și practic
al cât de bine circulă de fapt înțelegerea comună într-o organizație: o
echipă în care cunoștințele trăiesc în întregime în capetele oamenilor își
integrează membrii lent și imprevizibil; o echipă cu documentație cu adevărat
bună, responsabilități clare și mentorat accesibil îi integrează mai repede și
mai consecvent. Urmărește explicit această metrică și tratează un timp de
integrare lung sau foarte variabil ca pe un semnal de colaborare, nu doar ca
pe o preocupare de resurse umane.

### Cartografiază periodic rețelele reale de comunicare, nu doar organigramele

O organigramă descrie cine ar trebui să raporteze cui; rareori descrie cine
vorbește de fapt cu cine ca să se facă treaba. O analiză periodică, ușoară, a
tiparelor de comunicare, a rețelelor de revizuire a codului (cine
revizuiește munca cui) sau a suprapunerii participării la ședințe poate
dezvălui o structură reală de colaborare care diferă substanțial de
organigrama formală, expunând adesea un blocaj informal (o persoană prin care
trece toată lumea) sau un buzunar izolat (o subechipă care a ieșit din fluxul
mai larg de informații), care altfel ar rămâne invizibile.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Nicio măsurare directă a colaborării | Cost redus | Cauzele de fond sunt atribuite greșit altor dimensiuni; riscurile rămân invizibile |
| Urmărirea concentrării cunoștințelor | Scoate direct la iveală un risc real, sever (bus factor) | Cere combinarea datelor din mai multe sisteme (controlul versiunilor, garda) |
| Urmărirea frecării dependențelor între echipe | Dezvăluie probleme de coordonare invizibile în interiorul oricărei echipe | Cere instrumentare deliberată; nu vine automat din uneltele existente |
| Cartografierea rețelelor de comunicare | Dezvăluie structura informală reală din spatele organigramei | Poate părea intruzivă dacă nu e tratată cu aceeași grijă ca datele de satisfacție |

Tensiunea centrală este **dificultatea instrumentării versus valoarea de
diagnostic**. Această dimensiune este cu adevărat mai greu de măsurat automat
decât datele de livrare sau de activitate, iar această dificultate este exact
motivul pentru care multe organizații o sar, deși eșecurile ei sunt frecvent
cauza de fond ascunsă a unor probleme atribuite altor dimensiuni. Rezolvă
tensiunea începând cu cele mai valoroase și mai ușor de realizat semnale,
concentrarea cunoștințelor și frecarea dependențelor între echipe, ambele
derivabile în mare parte din datele existente ale controlului versiunilor și
ale urmăririi problemelor, înainte de a încerca o analiză mai ambițioasă a
rețelelor de comunicare.

## Întrebări de discutat cu echipa ta

1. **Cunoaștem bus factorul fiecărei componente critice a sistemului sau am
   afla doar pe cale grea, când singura persoană care o înțelege nu este
   disponibilă?** Extrage datele din controlul versiunilor și din gardă pentru
   cele mai critice sisteme și verifică sincer cât de concentrate sunt de fapt
   cunoștințele.

2. **Cât durează în mod obișnuit rezolvarea unei cereri de dependență între
   echipe și ar fi observat vreuna dintre echipe acea frecare fără să o
   măsoare deliberat?** Alege o dependență recentă între echipe și urmărește
   cronologia ei reală; răspunsul este adesea mai lung și mai puțin vizibil
   celor implicați decât au presupus ambele echipe.

3. **Când am avut recent o problemă de calitate sau de satisfacție, ar fi
   putut o defecțiune de comunicare sau de colaborare să facă parte din cauza
   reală de fond?** Privește înapoi la un incident recent sau la o scădere a
   satisfacției și pune această întrebare în mod specific, în loc să accepți
   prima explicație, mai evidentă.

4. **Cât durează până când un nou membru al echipei face prima lui
   contribuție semnificativă și independentă și cât variază acest timp de la
   o persoană la alta?** Un timp de integrare lung sau foarte variabil este un
   simptom direct, măsurabil, al cât de bine circulă de fapt înțelegerea comună
   în echipa ta.

5. **Se potrivește rețeaua noastră informală de comunicare cu organigrama
   formală sau s-a dezvoltat un blocaj ascuns ori un buzunar izolat pe care
   nimeni nu l-a numit?** Dacă nu te-ai uitat niciodată direct la asta,
   această absență merită ea însăși discutată.

6. **Este documentația noastră cu adevărat ușor de găsit sau doar există
   undeva unde e greu de găsit?** Întreabă un nou membru recent al echipei sau
   încearcă deliberat să răspunzi la o întrebare reală folosind doar resursele
   tale documentate și vezi cum decurge experiența.

## Perspectiva sectorială

**Startup.** Comunicarea se petrece firesc, prin apropiere și conversație
zilnică, într-o echipă mică, iar măsurarea formală este de obicei inutilă.
Riscul de urmărit este concentrarea periculoasă a bus factorului pe măsură ce
echipa crește peste dimensiunea la care osmoza informală mai ajunge la toți,
adesea în jurul a opt până la doisprezece oameni.

**Afacere mică.** O conversație simplă, periodică și sinceră, „cine este
singura persoană care înțelege acest sistem”, scoate adesea la iveală cele
mai critice riscuri de concentrare a cunoștințelor fără instrumentare
formală. Prioritizează mai întâi documentarea celor două sau trei zone de
cunoștințe cele mai fragile și mai concentrate.

**Companie mare.** Frecarea dependențelor între echipe și concentrarea
cunoștințelor se scalează prost aici, pentru că mai multe echipe înseamnă mai
multă suprafață de coordonare și mai multe sisteme critice care pot ajunge în
proprietatea unui grup tot mai mic de experți cu vechime. Investește deliberat
în instrumentarea recomandată de acest subiect, pentru că conștientizarea
informală nu poate acoperi cu adevărat o organizație la această scară.

**Administrație publică.** Sistemele de lungă durată și vechimea mare a
angajaților, frecvente în organizațiile din sectorul public, pot crea un risc
sever de bus factor ascuns în spatele unei stabilități aparente, deoarece un
sistem care nu a schimbat mâinile într-un deceniu poate depinde în întregime
de una sau două persoane apropiate de pensionare. Tratează măsurarea
concentrării cunoștințelor ca pe o preocupare de continuitate a operațiunilor,
nu doar ca pe un moft de inginerie.

## Exemple

**Companie mare.** Echipa de platformă a unei companii de logistică a
descoperit, abia după un incident critic petrecut în timpul concediului unui
inginer-cheie, că un algoritm central de rutare avea un bus factor efectiv de
unu: istoricul controlului versiunilor arăta că o singură persoană scrisese
peste 90% din schimbările recente ale componentei, iar evidența rotației de
gardă arăta că aceeași persoană rezolvase personal fiecare incident conex în
ultimii doi ani. Echipa a instituit un program deliberat de răspândire a
cunoștințelor, cu sesiuni de lucru în pereche și rotirea responsabilității
pentru incidentele conexe, iar o analiză de urmărire făcută opt luni mai târziu
a arătat că bus factorul crescuse la patru, iar inginerul inițial fusese
eliberat să preia muncă nouă, cu efect de pârghie mai mare, în loc să rămână un
punct unic de eșec permanent.

**Administrație publică.** Echipa de inginerie a unei agenții de stat pentru
beneficii a măsurat pentru prima dată frecarea dependențelor între echipe,
după întârzieri repetate, remarcate informal, într-un serviciu comun de
verificare a eligibilității. Datele au arătat că așteptarea mediană pentru o
schimbare de dependență de la echipa serviciului comun era de unsprezece zile,
mult mai lungă decât presupuseseră ambele echipe când fuseseră întrebate
informal, iar cauza de fond s-a dovedit a fi un proces de cerere neclar și
nedocumentat, nu vreo lipsă de capacitate. Publicarea unui proces de cerere
clar și simplu și a unei ținte angajate de timp de răspuns pentru serviciul
comun a coborât mediana așteptării sub două zile într-un singur trimestru, fără
personal suplimentar.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea măsurării directe a comunicării și colaborării este prinderea
cauzelor de fond pe care celelalte dimensiuni le atribuie greșit: o problemă
de calitate care pare un gol de testare, dar este de fapt o defecțiune de
comunicare, irosește efort atunci când echipa încearcă s-o repare adăugând
mai multe teste în loc să repare eșecul de coordonare de fond. Exemplul cu bus
factorul de mai sus arată cea mai crudă versiune a acestei rentabilități: o
organizație care descoperă și remediază proactiv un risc sever de concentrare a
cunoștințelor evită costul catastrofal al descoperirii lui în timpul unei
crize reale, când singura persoană care înțelegea un sistem critic nu este
efectiv disponibilă.

Costul total de proprietate este în mare parte efortul de instrumentare,
combinarea datelor din controlul versiunilor, din gardă și din urmărirea
problemelor în moduri care nu sunt automate din start, plus disciplina
periodică de a revizui explicit concentrarea cunoștințelor și frecarea
dependențelor. Acest cost este modest în comparație cu costul unei crize reale
de bus factor sau al unui eșec cronic, neabordat, de coordonare între echipe.

## Anti-modele și capcane

- **Săritul peste această dimensiune pentru că e greu de instrumentat
  automat:** lasă cauzele de fond atribuite greșit altor dimensiuni, mai ușor
  de măsurat.
- **Tratarea organigramei ca imagine exactă a tiparelor reale de comunicare:**
  frecvent greșită, iar decalajul este exact locul în care trăiesc blocajele
  ascunse.
- **Ignorarea bus factorului până când o criză forțează descoperirea:** cel
  mai dăunător mod de eșec împotriva căruia avertizează acest subiect.
- **Presupunerea că existența documentației înseamnă utilitatea ei:** conținutul
  depășit sau de negăsit oferă puțină valoare reală de comunicare.
- **Măsurarea frecării între echipe fără a acționa asupra unei cauze de fond
  clare și remediabile, odată găsite:** irosește investiția de diagnostic.
- **Tratarea integrării lente și variabile ca pe o problemă strict de resurse
  umane, nu ca pe un semnal de colaborare în inginerie:** ratează un indicator
  indirect cu adevărat util și măsurabil.

## Model de maturitate

- **Nivelul 1, Inițiere:** Comunicarea și colaborarea nu sunt măsurate deloc;
  bus factorul și frecarea între echipe sunt descoperite doar prin criză.
- **Nivelul 2, Dezvoltare:** Există o oarecare conștientizare informală a
  concentrării cunoștințelor, dar nicio măsurare consecventă sau investigare
  proactivă.
- **Nivelul 3, Standardizare:** Bus factorul și frecarea dependențelor între
  echipe sunt măsurate consecvent pentru sistemele critice și serviciile comune
  din întreaga organizație.
- **Nivelul 4, Gestionare:** Cartografierea rețelelor de comunicare dezvăluie
  periodic blocaje ascunse și buzunare izolate, iar timpul de integrare este
  urmărit ca indicator indirect direct al sănătății înțelegerii comune.
- **Nivelul 5, Orchestrare:** Organizația reduce proactiv riscul concentrării
  cunoștințelor și frecarea între echipe înainte să provoace incidente și poate
  indica intervenții concrete, răspândirea deliberată a cunoștințelor, procese
  de dependență clarificate, care au îmbunătățit măsurabil această dimensiune.

## Idei de discuție

1. Care este, sincer, bus factorul sistemului nostru cel mai critic?
2. Ce dependență între echipe a provocat cea mai mare frecare în ultimul trimestru și am măsurat-o?
3. Ar găsi un nou membru al echipei documentația noastră sau ar constata doar că există tehnic undeva?
4. Se potrivește rețeaua noastră informală de comunicare cu organigrama?
5. Ce problemă de calitate sau de satisfacție ar putea avea de fapt o cauză de fond de colaborare pe care nu am investigat-o?

## Concluzii principale

- Eșecurile de comunicare și colaborare se **deghizează adesea în alte
  probleme**; o cauză de fond atribuită dimensiunii greșite irosește efort.
- Urmărește direct **concentrarea cunoștințelor (bus factor)** folosind datele
  din controlul versiunilor și din gardă, în loc să aștepți ca o criză s-o
  dezvăluie.
- Măsoară explicit **frecarea dependențelor între echipe**; este de obicei
  invizibilă pentru echipele implicate până când este măsurată.
- Folosește **timpul de integrare până la contribuție productivă** ca indicator
  indirect direct și practic al cât de bine circulă înțelegerea comună.
- Cartografiază periodic **rețelele reale de comunicare**, pentru că ele diferă
  adesea substanțial de organigrama formală.

## Referințe și lecturi suplimentare

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck și Jenna Butler, „The SPACE of Developer
  Productivity”, *ACM Queue* (2021).
- *Team Topologies*, de Matthew Skelton și Manuel Pais (moduri de interacțiune
  între echipe și proiectarea dependențelor între echipe).
- *Peopleware: Productive Projects and Teams*, de Tom DeMarco și Timothy
  Lister (structuri informale de comunicare și efectul lor asupra
  productivității).
- Conway, Melvin E., „How Do Committees Invent?” (1968): originea legii lui
  Conway, despre relația dintre structura comunicării și structura sistemului.
