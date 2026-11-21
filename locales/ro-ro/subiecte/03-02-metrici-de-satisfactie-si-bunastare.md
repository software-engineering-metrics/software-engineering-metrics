# 3.2 Metrici de satisfacție și bunăstare

## Prezentare generală și motivație

**Satisfacția și bunăstarea**, litera S din SPACE (subiectul 3.1), este
dimensiunea pe care nicio telemetrie de sistem nu o poate observa direct.
Dacă un inginer consideră că munca lui are sens, dacă se simte sprijinit de
echipă, dacă se îndreaptă spre epuizare, nimic din toate acestea nu lasă
urme într-un jurnal de control al versiunilor sau într-un pipeline CI. Trebuie
întrebat. Acest subiect este despre cum să întrebi bine: cum proiectezi o
măsurare care produce un semnal de încredere despre o stare cu adevărat
subiectivă și cu adevărat importantă, în loc de un număr care pare precis
deși nu măsoară aproape nimic real.

Dimensiunea contează pentru că este indicatorul anticipativ al unor costuri
care apar în altă parte, mult mai târziu și mult mai scump. Satisfacția în
scădere prezice plecările înaintea unui interviu de ieșire. Riscul crescut de
epuizare prezice o prăbușire a calității înainte să o arate rata de defecte.
O organizație care se uită doar la metricile de livrare și de activitate
află despre o problemă de bunăstare abia după ce aceasta a devenit o plecare,
un incident sau un declin tăcut și susținut al producției, care cere luni
întregi ca să fie diagnosticat. Măsurarea directă a satisfacției și
bunăstării cumpără organizației timpul de reacție necesar înainte să se
întâmple asta.

Pentru echipele mari, această dimensiune este și locul în care distincția
dintre diagnostic și evaluare din subiectul 1.1 contează cel mai acut. Datele
de satisfacție folosite pentru a înțelege și a îmbunătăți condițiile
echipei sunt valoroase și cu risc scăzut. Aceleași date folosite pentru a
clasifica echipe sau, mai rău, indivizi unii față de alții corup
instrumentul de sondaj aproape imediat, pentru că oamenii nu mai răspund
sincer din clipa în care bănuiesc că răspunsul va fi folosit împotriva lor
sau a echipei lor. Companiile mari și administrațiile publice, cu ciclurile
lor formale de evaluare a performanței, sunt deosebit de predispuse la
această alunecare și trebuie să se ferească explicit de ea.

## Principii-cheie

- **Satisfacția și bunăstarea nu pot fi observate din telemetria de
  sistem.** Această dimensiune trebuie întrebată, deliberat și bine.
- **Anonimatul nu este opțional.** Orice legătură percepută între un răspuns
  sincer și o consecință personală distruge semnalul.
- **Această dimensiune este un indicator anticipativ, nu unul întârziat.**
  Prezice problemele de fluctuație de personal și de calitate înainte să apară
  în altă parte.
- **Epuizarea este un tipar specific, recognoscibil, nu doar nemulțumire
  generică.** Măsoar-o explicit, în loc să te bazezi doar pe un scor vag de
  satisfacție.
- **Tendința contează mai mult decât orice citire izolată.** Un singur scor de
  satisfacție este un instantaneu; tendința de-a lungul sondajelor succesive
  este semnalul real.

## Recomandări

### Folosește instrumente de sondaj validate, în loc să-ți inventezi propriile întrebări

Bunăstarea și epuizarea au instrumente de măsurare consacrate, validate,
dintre care cel mai cunoscut este [Maslach Burnout
Inventory](https://en.wikipedia.org/wiki/Maslach_Burnout_Inventory), care
măsoară epuizarea pe trei dimensiuni recunoscute: epuizarea emoțională,
depersonalizarea sau cinismul și sentimentul redus de realizare personală.
Să împrumuți dintr-un instrument consacrat și validat, chiar și într-o
versiune scurtă adaptată, produce date mai demne de încredere decât un set
ad hoc de întrebări inventate intern, pentru că instrumentele validate au fost
deja testate în privința faptului că măsoară ce pretind că măsoară.

### Garantează un anonimat real și fii transparent despre cum l-ai asigurat

Spune explicit, și gândește-o serios, că răspunsurile individuale nu pot fi
urmărite înapoi până la o persoană, mai ales în echipele mici, unde tiparele
de răspuns ar putea fi altfel deduse. Folosește un instrument de sondaj
terț, pe care organizația însăși nu îl poate dezanonimiza, publică rezultate
agregate doar peste o dimensiune minimă a grupului (de obicei cinci sau mai
mulți respondenți) pentru a preveni deducerea în echipele mici și comunică
clar această politică înainte să ceri cuiva să participe. Un singur incident
în care anonimatul este încălcat, chiar și accidental, distruge încrederea în
fiecare sondaj viitor.

### Urmărește tendința în timp, nu o singură citire izolată

Un singur scor de satisfacție are o valoare diagnostică limitată; o tendință
descendentă pe trei cicluri consecutive de sondaj este un semnal mult mai
puternic și mai acționabil. Rulează sondajul la o cadență consecventă și
moderată, trimestrial fiind obișnuit, și prezintă întotdeauna rezultatele
alături de linia istorică a tendinței, nu ca pe un număr izolat, ca atât
cititorii, cât și respondenții să se poată calibra față de schimbarea reală,
nu față de zgomotul de moment.

### Distinge satisfacția generică de riscul specific de epuizare

O întrebare generală despre satisfacție („cât de mulțumit ești de munca ta?”)
și una specifică despre epuizare („te simți epuizat emoțional de munca ta?”)
măsoară lucruri înrudite, dar distincte, iar o echipă poate obține scoruri
rezonabile la prima în timp ce arată semne reale de alarmă la a doua.
Include-le pe amândouă în proiectarea sondajului și tratează un semn de
alarmă specific epuizării ca pe unul care cere o urmărire mai rapidă și mai
directă decât o scădere generală a satisfacției.

### Asociază datele din sondaj cu semnale obiective de coroborare, cu prudență

Acolo unde e posibil, coroborează tendințele de satisfacție cu semnale
obiective care se leagă plauzibil de bunăstare: rata plecărilor voluntare,
tipare susținute de muncă în afara orelor de program sau o rată în creștere
a concediului neconsumat. Folosește-le ca pe o coroborare, niciodată ca pe un
substitut pentru întrebarea directă, și ai grijă ca această coroborare să nu
devină un mecanism de supraveghere care, ironic, dăunează încrederii și
satisfacției.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Întrebări de sondaj intern ad hoc | Rapid de construit, adaptat contextului | Nevalidat; neclar dacă măsoară ce pretinde |
| Instrument validat (de exemplu Maslach Burnout Inventory, adaptat) | Testat, comparabil, semnal mai demn de încredere | Cere mai multă pregătire și poate necesita adaptare pentru contextul ingineriei |
| Sondaje-puls scurte și frecvente | Oboseală redusă a respondenților, semnal aproape în timp real | Mai puțină profunzime per sondaj; risc de zgomot dacă sunt interpretate excesiv |
| Sondaje rare și aprofundate | Semnal bogat, detaliat | Mai lente în a prinde o problemă care se dezvoltă repede, precum epuizarea acută |

Tensiunea centrală este **profunzime versus frecvență**. Un sondaj aprofundat,
validat, rulat trimestrial oferă o imagine detaliată și de încredere, dar
poate rata o problemă care se dezvoltă repede între cicluri; sondajele-puls
scurte și frecvente prind problemele mai repede, dar riscă date mai
superficiale și mai zgomotoase, plus oboseala respondenților, dacă sunt
folosite excesiv. Rezolvă tensiunea rulând un sondaj mai aprofundat și validat
la cadență trimestrială ca instrument principal, completat de o verificare-puls
foarte scurtă și opțională (una sau două întrebări) mai frecventă, pentru
avertizare timpurie, fără a cere de fiecare dată aceeași profunzime de
implicare.

## Întrebări de discutat cu echipa ta

1. **Folosim un instrument de sondaj validat sau întrebări inventate de noi,
   fără nicio dovadă că măsoară satisfacția sau epuizarea?** Dacă sondajul
   actual a fost construit ad hoc, ia în calcul dacă adaptarea dintr-un
   instrument consacrat, precum Maslach Burnout Inventory, ar produce date mai
   demne de încredere.

2. **Putem garanta cinstit anonimatul, inclusiv în echipele mici, unde
   tiparele de răspuns ar putea fi altfel deduse?** Parcurge instrumentele
   reale de sondaj și practica de agregare și verifică dacă un manager
   hotărât ar putea, în practică, să deducă răspunsurile unui individ, chiar
   dacă politica spune că nu ar trebui să poată.

3. **Am văzut vreodată datele de satisfacție prevestind un vârf de plecări
   sau o problemă de calitate apărută mai târziu în alte metrici?** Privește
   înapoi istoricul sondajelor în raport cu datele despre plecări și incidente
   și vezi dacă, retrospectiv, se vede un tipar de indicator anticipativ. Dacă
   nu ai verificat niciodată, asta în sine merită discutat.

4. **Distingem în sondaj satisfacția generală de riscul specific de epuizare
   sau ne bazăm pe o singură întrebare amestecată?** O echipă poate arăta bine
   la satisfacția generală în timp ce dedesubt apar semne reale de epuizare;
   verifică dacă instrumentul actual ar putea prinde această diferență.

5. **S-au folosit vreodată datele de satisfacție, chiar și informal, pentru
   a compara sau clasifica echipele între ele?** Această alunecare spre
   utilizare evaluativă corupe instrumentul de sondaj aproape imediat, pentru
   că respondenții își schimbă răspunsurile din clipa în care bănuiesc o
   consecință competitivă.

6. **Care este rata noastră reală de răspuns și ce ne-ar spune, în sine, o
   rată de răspuns în scădere?** O rată de răspuns care scade pe parcursul
   sondajelor succesive este ea însăși un semnal, adesea al încrederii erodate
   în proces sau al oboselii față de sondaje, și merită investigată separat,
   nu respinsă ca un neajuns al colectării datelor.

## Perspectiva sectorială

**Startup.** Cu o mână de oameni, sondajele anonime formale pot părea
inutile, iar conversația directă scoate adesea la iveală problemele de
satisfacție mai repede decât un instrument trimestrial. Riscul este ca un
fondator să confunde absența plângerilor cu absența unei probleme;
introdu măcar o verificare ușoară și anonimă odată ce echipa crește peste
dimensiunea la care toată lumea vorbește zilnic.

**Afacere mică.** Un instrument simplu, gratuit sau ieftin, de sondaj anonim,
rulat trimestrial cu un set scurt și adaptat de întrebări validate, este
realizabil fără o funcție dedicată de analiză a datelor despre oameni.
Rezistă tentației de a sări peste garanțiile de anonimat doar pentru că
echipa pare unită; tocmai această apropiere face mai greu de dat direct un
feedback negativ sincer.

**Companie mare.** Infrastructura de sondaje la această scară cere investiție
reală: un instrument terț adecvat, o politică de agregare cu dimensiune
minimă a grupului și o politică clară, comunicată consecvent, de utilizare
neevaluativă. Câștigul este proporțional mai mare, întrucât prinderea unei
tendințe de epuizare într-o organizație cu mulți angajați, înainte să
declanșeze plecări, protejează o cantitate mult mai mare de cunoștințe
instituționale.

**Administrație publică.** Presiunea reținerii, generată de constrângerile
salariale din sectorul public, face această dimensiune importantă strategic,
nu opțională. Datele despre bunăstare pot justifica direct cereri bugetare
pentru investiții nemonetare în retenție (unelte, timp protejat, gestionarea
volumului de muncă) pe care constrângerile de compensație singure nu le pot
aborda, cu condiția ca însăși colectarea datelor să fie suficient de
fiabilă pentru a fi citată cu încredere.

## Exemple

**Companie mare.** Echipa de platformă a unei companii de infrastructură cloud
a obținut scoruri bune la satisfacția generală timp de peste un an, în timp ce
o întrebare specifică epuizării, adaptată din subscala de epuizare emoțională
a Maslach Burnout Inventory, arăta un declin constant pe patru trimestre
consecutive. Conducerea, inițial înclinată să respingă îngrijorarea pentru că
numărul de satisfacție generală arăta bine, a investigat mai departe după al
doilea trimestru consecutiv de declin și a descoperit că echipa absorbea de
aproape un an o sarcină de gardă nesustenabilă (subiectul 6.3) în urma unui
îngheț al angajărilor. Restabilirea unui număr adecvat de oameni pentru gardă
a inversat tendința de epuizare în două trimestre, cu mult înainte ca ea să se
transforme în vârful de plecări pe care datele companiei îl arătau drept
consecința tipică, mai departe în aval, a acestui tipar.

**Administrație publică.** O agenție IT a unui guvern de stat, cu dificultăți
cronice în a concura pe salariu cu angajatorii din sectorul privat, a folosit
datele sondajului de bunăstare tocmai pentru a construi un argument bugetar în
favoarea unei politici de timp de concentrare protejat, în locul unei majorări
salariale pe care nu o putea obține. Sondajul a arătat frecvența întreruperilor
și volumul de ședințe, nu compensația, drept cei mai puternici predictori ai
intenției de plecare printre respondenții care au indicat că își căutau activ
un loc de muncă. Politica rezultată, care bloca două după-amiezi
neîntrerupte pe săptămână pentru munca de inginerie concentrată, a fost
corelată cu o îmbunătățire măsurabilă atât a scorurilor de satisfacție, cât
și a retenției voluntare în anul următor, la o fracțiune din costul unei
majorări salariale competitive.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea măsurării directe a satisfacției și bunăstării este avertizarea
timpurie: o organizație care prinde o tendință de epuizare cu un an întreg
înainte să se transforme în plecări poate interveni la o fracțiune din costul
recrutării și integrării unui înlocuitor, care de obicei durează luni până să
atingă productivitatea deplină, chiar și după angajare. Plecarea voluntară a
unui inginer experimentat costă o organizație mult mai mult decât
infrastructura de sondaj care ar fi putut oferi avertizarea.

Costul total de proprietate include instrumentele de sondaj, disciplina de a
garanta și menține un anonimat real și angajamentul organizațional de a
acționa pe baza a ceea ce arată datele, în loc să le colectezi și să ignori
rezultatele incomode. Acest ultim cost, disponibilitatea de a acționa, este
adesea adevăratul blocaj, nu măsurarea în sine; un sondaj care dezvăluie o
problemă pe care nimeni nu o abordează erodează încrederea în instrument la
fel de sigur ca o garanție de anonimat încălcată.

## Anti-modele și capcane

- **Întrebări de sondaj ad hoc, nevalidate:** produc date cu fiabilitate
  neclară.
- **Garanții de anonimat slabe sau încălcate:** distrug răspunsul sincer și
  încrederea în instrument, adesea permanent.
- **Reacția la o singură citire în loc de urmărirea tendinței:** reacționează
  exagerat la zgomot sau ratează un declin lent real.
- **Amestecarea satisfacției generale cu întrebări specifice epuizării:** poate
  masca un semn real de alarmă într-o medie care arată bine.
- **Folosirea datelor de satisfacție pentru a clasifica sau compara echipe:**
  alunecarea evaluativă care corupe răspunsurile sincere.
- **Colectarea datelor fără a acționa vreodată asupra unui rezultat
  incomod:** erodează încrederea în sondaj la fel de temeinic ca o promisiune
  de anonimat încălcată.

## Model de maturitate

- **Nivelul 1, Inițiere:** Satisfacția și bunăstarea nu sunt măsurate deloc
  sau doar prin conversație informală, nestructurată.
- **Nivelul 2, Dezvoltare:** Există un sondaj ad hoc, dar îi lipsesc
  validarea, o cadență consecventă sau o garanție solidă de anonimat.
- **Nivelul 3, Standardizare:** Un instrument de sondaj validat sau adaptat
  rulează la o cadență consecventă, cu o garanție solidă și comunicată de
  anonimat, în toată organizația.
- **Nivelul 4, Gestionare:** Tendințele sunt urmărite activ pe cicluri
  succesive, semnalele specifice epuizării sunt distinse de satisfacția
  generală, iar organizația are un proces documentat de acțiune la semnele de
  alarmă.
- **Nivelul 5, Orchestrare:** Datele despre bunăstare informează direct
  planificarea forței de muncă și investițiile în retenție, coroborate cu
  prudență cu semnale obiective, iar organizația poate indica intervenții
  concrete care au inversat un declin măsurat înainte să devină plecări sau o
  problemă de calitate.

## Idei de discuție

1. Ar rezista instrumentul nostru actual de sondaj unui control al anonimatului real?
2. A prezis vreodată o tendință de satisfacție sau de epuizare o problemă apărută mai târziu în altă parte?
3. Care este procesul nostru de acțiune la un rezultat de sondaj pe care nu vrem să îl auzim?
4. Distingem în prezent riscul de epuizare de satisfacția generală în măsurare?
5. Ce investiție nemonetară ar justifica cel mai bine acum datele noastre despre bunăstare?

## Concluzii principale

- Satisfacția și bunăstarea trebuie **întrebate direct**; nicio telemetrie de
  sistem nu poate observa această dimensiune.
- Folosește un **instrument validat** acolo unde se poate și garantează un
  **anonimat** real, bine comunicat.
- Această dimensiune este un **indicator anticipativ** pentru problemele de
  fluctuație de personal și de calitate care altfel ar apărea mult mai târziu
  și mai scump.
- Distinge **satisfacția generală de riscul specific de epuizare** și urmărește
  **tendința în timp**, nu o singură citire.
- Nu folosi niciodată aceste date pentru a **clasifica sau compara echipe**;
  această alunecare corupe răspunsul sincer aproape imediat.

## Referințe și lecturi suplimentare

- Maslach, Christina, și Susan E. Jackson, *Maslach Burnout Inventory*
  (instrumentul validat și larg folosit pentru măsurarea epuizării pe trei
  dimensiuni).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck și Jenna Butler, „The SPACE of Developer
  Productivity”, *ACM Queue* (2021).
- *Drive: The Surprising Truth About What Motivates Us*, de Daniel H. Pink
  (cercetare despre motivație și satisfacție, relevantă pentru proiectarea
  sondajelor).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, de Christina Maslach și Michael P. Leiter (cauzele
  organizaționale ale epuizării și intervenții).
