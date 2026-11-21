# 3.3 Metrici de performanță și indicatori indirecți de rezultat

## Prezentare generală și motivație

**Performanța**, litera P din SPACE (subiectul 3.1), este dimensiunea cel mai
des confundată cu activitatea, iar această confuzie este exact ce urmărește
să prevină acest subiect. Performanța întreabă dacă munca unui inginer sau a
unei echipe a produs de fapt un [rezultat](https://en.wikipedia.org/wiki/Outcome_(probability))
bun: o funcționalitate care a fost livrată și a mers, un sistem care a rămas
fiabil, o schimbare care a mișcat o metrică de business sau de utilizator în
direcția corectă. Activitatea (subiectul 3.4) întreabă doar câtă mișcare a
avut loc. O echipă poate fi foarte activă și slab performantă, livrând
constant mici schimbări care nu mișcă niciun rezultat, iar reversul este la
fel de posibil: o echipă care livrează rar, dar ale cărei schimbări aterizează
de fiecare dată exact unde trebuie.

Dificultatea acestei dimensiuni este că rezultatul nu poate fi adesea atribuit
unei singure persoane sau măcar unei singure echipe; rezultatele software
apar din colaborare, din decizii luate cu luni înainte de oameni care între
timp au trecut la alte proiecte, din condiții de piață pe care niciun inginer
nu le controlează. Cercetătorii SPACE au fost expliciți în această privință:
performanța trebuie măsurată la nivel de sistem sau de echipă, folosind
semnale multiple și convergente, nu redusă la un singur număr și cu atât mai
puțin atribuită unui inginer izolat. Acest subiect ia în serios acea
îndrumare și tratează atribuirea performanței individuale ca pe o capcană de
evitat activ, nu ca pe un scurtcircuit de folosit când e comod.

Pentru echipele mari, a măsura corect performanța este ceea ce separă un
program de metrici care chiar îmbunătățește rezultatele de unul care doar
recompensează aglomerația vizibilă. Companiile mari care compară performanța
între multe echipe au nevoie de semnale care rezistă manipulării prin
volumul brut al producției; administrațiile publice care justifică investițiile
în tehnologie în fața organismelor de control trebuie să demonstreze că
efortul de inginerie a produs rezultate reale, nu doar artefacte livrate,
adică exact principiul rezultate-înaintea-producției din subiectul 1.3 aplicat
acestei dimensiuni.

## Principii-cheie

- **Performanța măsoară dacă munca a produs un rezultat bun, nu câtă muncă a
  avut loc.** Aceasta este distincția de bază față de dimensiunea activitate.
- **Folosește semnale multiple, convergente, niciodată un singur număr de
  performanță.** Niciun indicator indirect nu e suficient de fiabil ca să stea
  singur.
- **Măsoară la nivel de echipă sau de sistem.** Atribuirea individuală a
  rezultatelor este de obicei nefiabilă și invită exact manipularea împotriva
  căreia avertizează această carte pe tot parcursul ei.
- **Calitatea face parte din performanță, nu este o preocupare separată.**
  Munca livrată care strică altceva nu a performat cu adevărat bine.
- **Un semnal de performanță fără o decizie atașată este decor**, exact
  conform principiului general din subiectul 1.1 aplicat acestei dimensiuni.

## Recomandări

### Combină mai multe semnale convergente în loc de un singur scor de performanță

Culege dovezile de performanță din surse multiple: rata de eșec a
modificărilor (subiectul 2.10) și rata defectelor scăpate (subiectul 5.1)
pentru calitate, rezultatele implementărilor legate de adoptarea reală a
funcționalităților (subiectul 5.2) pentru a vedea dacă munca a contat și
evaluarea calitativă din partea colegilor sau a managerului asupra
contribuției echipei la obiectivele strategice, pentru contextul pe care o
metrică pură nu îl poate surprinde. Niciunul nu e fiabil singur; împreună,
când converg spre aceeași concluzie, sunt mult mai demne de încredere decât
ar putea fi vreun număr izolat.

### Măsoară la nivel de echipă, rezistă atribuirii individuale

Rezultatele software sunt rareori produsul muncii unei singure persoane; ele
apar din decizii de proiectare, din feedback de revizuire, din munca
anterioară a unor oameni care poate au plecat între timp din echipă și din
colaborarea peste granițe. Atribuirea unui rezultat unui singur inginer este
de obicei o precizie falsă, care ignoră această realitate și creează un
stimulent puternic pentru indivizi să-și protejeze meritele în loc să
colaboreze liber, exact genul de distorsiune a stimulentelor împotriva căreia
avertizează subiectul 1.2.

### Integrează calitatea direct în definiția performanței

O funcționalitate livrată la timp, dar care provoacă un val de incidente în
producție, nu a performat bine, deși o privire naivă, doar asupra producției,
ar socoti-o livrată. Încorporează rata de eșec a modificărilor, rata
defectelor scăpate și datele despre incidentele de după lansare direct în
modul în care evaluezi performanța, în loc să tratezi calitatea ca pe o
preocupare separată, deconectată, măsurată doar în Partea 4 și Partea 6 ale
acestei cărți.

### Folosește datele de performanță pentru a informa deciziile de investiții și de proces, nu clasamentele individuale

Utilizarea productivă a datelor de performanță este să decizi unde să
investești mai departe (o echipă care livrează constant rezultate solide
merită mai multe resurse și mai multă autonomie) și unde să investighezi (o
echipă a cărei muncă nu aterizează constant merită ajutor, nu vină, conform
încadrării diagnostice din subiectul 1.1). Clasificarea competitivă a
indivizilor sau a echipelor pe baza datelor de performanță invită exact
manipularea și afectarea moralului împotriva cărora avertizează această carte
și rareori produce rezultate mai bune decât utilizarea diagnostică.

### Fii cinstit cu limitele atribuirii, mai ales pentru echipele de platformă și cele de sprijin

Echipele care construiesc infrastructură comună, unelte interne sau capabilități
de platformă (subiectul despre ingineria de platformă din cartea-soră
`software-engineering-guide` tratează asta direct) au adesea contribuția la
rezultate la câțiva pași distanță de orice metrică orientată spre client.
Măsoară performanța acestor echipe prin efectul lor asupra echipelor pe care
le sprijină, prin adoptarea platformei lor, prin reducerea frecării raportată
de echipele consumatoare, în loc să forțezi o metrică de rezultat direct,
nepotrivită, asupra unei munci indirecte prin natura ei.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Un singur scor de performanță per echipă | Simplu de prezentat și comparat | Precizie falsă; ascunde care semnal subiacent a determinat de fapt scorul |
| Semnale multiple, convergente | Mai demn de încredere, rezistă manipulării unei singure metrici | Mai greu de rezumat într-un număr; cere mai mult context pentru interpretare |
| Măsurarea performanței la nivel de echipă | Corespunde felului în care apar de fapt rezultatele software | Nu poate răspunde direct la întrebări despre contribuția individuală |
| Atribuirea performanței la nivel individual | Pare mai direct acționabilă pentru evaluări | De obicei o precizie falsă; risc puternic de manipulare și de protejare a meritelor |

Tensiunea centrală este **precizie versus onestitate**. Un singur număr de
performanță per echipă, sau mai rău, per individ, este ușor de comparat și de
clasificat, dar acea precizie este de obicei falsă, ascunzând incertitudinea
reală privind atribuirea și calitatea în spatele unei cifre curate. Rezolvă
tensiunea acceptând ca onestă o imagine mai puțin ordonată, cu mai multe
semnale, și rezistând presiunii conducerii sau proceselor de evaluare a
performanței de a o strânge la loc într-un singur scor fals de precis.

## Întrebări de discutat cu echipa ta

1. **Măsurarea noastră actuală a performanței combină mai multe semnale
   convergente sau se bazează pe un singur număr care pare mai precis decât
   este?** Auditează ce numești acum „metrică de performanță” și verifică câte
   semnale independente, convergente, o alimentează de fapt.

2. **Am atribuit vreodată performanța unei echipe sau a unui individ fără să
   ținem cont de natura colaborativă, între echipe, a felului în care s-a
   produs de fapt rezultatul?** Alege o poveste recentă de succes și urmărește
   cât din ea a depins de oameni, decizii sau muncă anterioară din afara
   echipei sau a individului creditat.

3. **Include măsurarea noastră a performanței calitatea sau doar viteza de
   livrare și volumul producției?** O funcționalitate livrată care a provocat
   ulterior incidente semnificative în producție nu ar trebui să primească un
   scor de performanță ridicată; verifică dacă măsurarea actuală ar prinde cu
   adevărat acest caz.

4. **Cum măsurăm performanța echipelor de platformă sau de sprijin, a căror
   contribuție la rezultate este indirectă?** Dacă răspunsul sincer este
   „nu prea bine”, merită să numești acel gol și să-l abordezi direct, în loc
   să lași acele echipe practic nemăsurate sau măsurate pe nedrept cu metrici
   de rezultat orientate spre client care nu se potrivesc muncii lor.

5. **S-au folosit vreodată datele de performanță pentru a clasifica
   competitiv indivizii între ei, formal sau informal?** Această alunecare,
   similară riscului datelor de satisfacție din subiectul 3.2, dăunează atât
   onestității datelor, cât și dorinței echipei de a colabora deschis.

6. **Când semnalele noastre convergente nu se potrivesc, de exemplu viteză
   mare de livrare, dar rată de defecte în creștere, ce concluzionăm și
   gestionează procesul nostru bine această nepotrivire?** Dezacordul dintre
   semnale este el însuși informație valoroasă; discută dacă echipa tratează
   acum asta ca zgomot de ignorat sau ca o constatare reală care merită
   investigată.

## Perspectiva sectorială

**Startup.** Performanța este de obicei vizibilă direct: a mers funcționalitatea,
au adoptat-o clienții, s-a mișcat metrica. Măsurarea formală cu semnale
multiple e adesea inutilă la această scară; riscul este în schimb să atribui
prea repede succesul sau eșecul unei singure persoane, într-o echipă mică,
rapidă și foarte colaborativă, în care meritul și vina aparțin rareori unui
singur individ.

**Afacere mică.** Combină datele de livrare și de calitate pe care le ai deja
(subiectul 2.10, subiectul 5.1) cu o conversație directă și sinceră despre
dacă munca recentă a ajutat într-adevăr afacerea, în loc să construiești
instrumentare formală cu semnale multiple, pe care nu ai capacitatea s-o
întreții.

**Companie mare.** Aici disciplina măsurării la nivel de echipă, cu semnale
multiple, își merită investiția, pentru că presiunea de a reduce performanța
la un singur număr comparabil între zeci de echipe este cea mai puternică, iar
paguba precizie-falsă se compune în toate deciziile de alocare a resurselor
ale organizației. Rezistă explicit acelei presiuni și construiește argumentul
cu semnale multiple pentru de ce contează.

**Administrație publică.** Demonstrarea faptului că investiția în inginerie a
produs rezultate reale, nu doar artefacte livrate, este adesea întrebarea
centrală a unui organism de control. Măsurarea performanței cu semnale
multiple, legată explicit de metrici de rezultat (subiectul 5.3) și nu de
indicatori indirecți doar de livrare, oferă un răspuns mult mai solid și mai
ușor de apărat decât o simplă numărătoare de activitate sau de livrare.

## Exemple

**Companie mare.** Conducerea unei companii de tehnologie pentru retail
clasificase informal echipele de inginerie după story points finalizate pe
sprint, tratând asta drept indicator indirect de performanță. După adoptarea
unei abordări cu semnale multiple, care combina datele de livrare, rata de
eșec a modificărilor și adoptarea funcționalităților după lansare, conducerea
a constatat că echipa cu cea mai mare rată de finalizare a story points avea
cea mai mică rată de adoptare a funcționalităților din companie: livrau
repede, dar construiau lucruri pe care clienții nu le foloseau. Realocarea
priorităților din foaia de parcurs a acelei echipe pe baza imaginii mai
complete a performanței, în loc de clasamentul înșelător cu un singur număr, a
redirecționat într-un singur trimestru o capacitate semnificativă de inginerie
spre muncă cu impact mai mare.

**Administrație publică.** Programul de inginerie al unei agenții fiscale
naționale trebuia să demonstreze unei comisii de control că o investiție
majoră în sisteme îmbunătățise performanța, nu doar livrase sfera contractată.
În loc să raporteze doar finalizarea story points sau a jaloanelor, programul a
prezentat un set convergent de semnale: rată redusă de erori de procesare,
mediană redusă a timpului de procesare și rată crescută de finalizare cu
succes a serviciilor în regim de autoservire, toate legate de componentele
specifice ale sistemului livrate. Prezentarea cu semnale multiple, legată de
rezultate, a satisfăcut verificarea comisiei într-un mod în care un simplu
raport „livrat conform programului” al unui program anterior eșuase cu un an
înainte.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea măsurării performanței prin semnale convergente, legate de
rezultate, în loc de un singur număr fals de precis, înseamnă decizii mai bune
de alocare a resurselor: o organizație care vede munca căror echipe mișcă
cu adevărat rezultatele poate investi mai mult acolo unde contează și poate
investiga acolo unde nu, în loc să recompenseze echipa care pare cea mai
ocupată. Exemplul din retail de mai sus este tipic: un clasament înșelător cu
un singur număr orientase atenția investițiilor în altă parte decât unde ar fi
ajutat cu adevărat.

Costul total de proprietate este mai mare decât al unei abordări cu o singură
metrică, pentru că cere combinarea datelor din surse multiple (livrare,
calitate, rezultat) și rezistența la presiunea organizațională de a strânge
imaginea la loc într-un singur număr comparabil. Merită să plătești acest cost
pentru că alternativa, un scor unic fals de precis, induce activ în eroare
deciziile de alocare a resurselor pe care datele de performanță trebuie să le
informeze.

## Anti-modele și capcane

- **Confundarea activității cu performanța:** cea mai frecventă greșeală pe
  care această dimensiune este concepută special să o prevină.
- **Atribuirea performanței individuale pentru rezultate colaborative, între
  echipe:** de obicei o precizie falsă care descurajează colaborarea.
- **Excluderea calității din definiția performanței:** recompensează munca
  livrată care strică altceva.
- **Forțarea unei metrici de rezultat direct asupra echipelor de platformă sau
  de sprijin:** măsoară lucrul greșit pentru o muncă indirectă prin natura ei.
- **Strângerea mai multor semnale convergente la loc într-un singur număr fals
  de precis, sub presiune organizațională:** pierde onestitatea pentru care a
  fost construită abordarea cu semnale multiple.
- **Folosirea datelor de performanță pentru clasificarea competitivă a
  indivizilor:** dăunează atât onestității datelor, cât și colaborării în
  echipă.

## Model de maturitate

- **Nivelul 1, Inițiere:** Performanța este confundată cu activitatea sau cu
  volumul producției, măsurată cu un singur număr neexaminat.
- **Nivelul 2, Dezvoltare:** Unele semnale de calitate sunt luate în calcul
  alături de producție, dar nu există o abordare consecventă cu semnale
  multiple, iar atribuirea individuală se mai întâmplă informal.
- **Nivelul 3, Standardizare:** Performanța este măsurată la nivel de echipă,
  folosind semnale multiple, convergente, inclusiv calitatea, în mod
  consecvent în toată organizația.
- **Nivelul 4, Gestionare:** Dezacordul dintre semnalele convergente este
  investigat activ; echipele de platformă și de sprijin au măsuri de
  performanță indirecte în mod adecvat, potrivite muncii lor reale.
- **Nivelul 5, Orchestrare:** Datele de performanță informează direct
  deciziile de alocare a resurselor și de investiții, iar organizația poate
  indica decizii concrete de realocare pe care o privire cu semnale multiple
  le-a făcut posibile și pe care o privire cu un singur număr le-ar fi ratat.

## Idei de discuție

1. Ce număr unic folosim acum ca indicator indirect de performanță și ar trebui să-l retragem în favoarea unui set convergent?
2. Am atribuit vreodată un rezultat echipei sau persoanei greșite pentru că atribuirea era neclară?
3. Cum măsurăm acum performanța unei echipe de platformă sau de sprijin?
4. Cum ar arăta situația dacă semnalele noastre convergente ar intra în dezacord trimestrul viitor?
5. Unde ne-a direcționat greșit atenția investițiilor un clasament pe story points sau pe numărul livrărilor?

## Concluzii principale

- Performanța măsoară dacă munca a produs un **rezultat bun**, nu câtă mișcare
  a avut loc; nu o confunda cu activitatea (subiectul 3.4).
- Folosește **semnale multiple, convergente**, niciodată un singur număr de
  performanță, și fii suspicios față de precizia falsă.
- Măsoară la **nivel de echipă sau de sistem**; atribuirea individuală a
  rezultatelor este de obicei nefiabilă și dăunează colaborării.
- **Calitatea face parte din performanță**, nu este o preocupare separată,
  deconectată.
- Dă echipelor de platformă și de sprijin măsuri de performanță **indirecte în
  mod adecvat**, în loc să le forțezi o metrică de rezultat direct nepotrivită.

## Referințe și lecturi suplimentare

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck și Jenna Butler, „The SPACE of Developer
  Productivity”, *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (măsurarea performanței pe baza rezultatelor).
- *Team Topologies*, de Matthew Skelton și Manuel Pais (structurile echipelor
  de platformă și de sprijin și cum le măsori contribuția).
- *Measuring and Managing Performance in Organizations*, de Robert D. Austin
  (riscurile metricilor de performanță fals de precise).
