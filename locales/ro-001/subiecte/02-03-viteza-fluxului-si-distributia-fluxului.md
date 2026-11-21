# 2.3 Viteza fluxului și distribuția fluxului

## Prezentare generală și motivație

**Viteza fluxului** este numărul de elemente de flux (subiectul 2.2) finalizate
într-o perioadă dată, măsura Flow Framework pentru
[debit](https://en.wikipedia.org/wiki/Throughput). **Distribuția fluxului** este
proporția fiecărui tip de element de flux, funcționalități, defecte, risc și
datorie, dintre elementele finalizate în aceeași perioadă. Cele două metrici sunt
proiectate să fie citite împreună: viteza singură răspunde la „cât am livrat”, iar
distribuția singură răspunde la „ce fel de muncă a fost”, dar niciuna dintre
întrebări nu înseamnă mult fără cealaltă. O echipă își poate crește viteza în timp
ce distribuția ei alunecă discret de la funcționalități spre refacerea defectelor,
ceea ce arată ca o accelerare pe un grafic de viteză și este de fapt un simptom al
scăderii calității.

Această asociere este aceeași disciplină pe care o cere subiectul 1.2 fiecărei
familii de metrici din carte: nu raporta niciodată un număr de viteză fără garda de
protecție care arată ce a costat acea viteză. Viteza fluxului este cea mai directă
generalizare din această parte a unei metrici de debit, mai apropiată ca spirit de
frecvența implementărilor (subiectul 2.10) decât de orice alt număr din carte, dar
conștientă de tipul elementului într-un fel în care frecvența implementărilor nu a
fost niciodată. Frecvența implementărilor îți spune cât de des ajunge codul în
producție; viteza fluxului, asociată cu distribuția, îți spune cât de des ajunge
valoarea în producție și ce fel de valoare este.

Pentru echipele mari care conduc multe fluxuri de valoare concurente, această
asociere scoate la iveală un tipar pe care un singur număr de debit îl ascunde
complet: un flux de valoare a cărui viteză pare sănătoasă în timp ce distribuția sa
a alunecat discret spre muncă aproape pur de funcționalități, înfometând pe tăcute
capacitatea de datorie și de risc despre care subiectul 2.2 a avertizat că are
nevoie de protecție deliberată. Organizațiile mari care compară debitul între linii
de produse și agențiile guvernamentale care raportează producția de livrare către
organele de supraveghere au nevoie amândouă de această asociere ca să nu confunde
producția brută cu un progres autentic și sustenabil.

## Principii-cheie

- **Viteza fără distribuție ascunde ce s-a livrat de fapt.** Un număr de elemente
  în creștere nu spune nimic despre dacă acel număr este sănătos, manipulat sau
  înclinat discret spre cea mai ușoară muncă disponibilă.
- **Distribuția fără viteză ascunde scara.** O împărțire procentuală care arată
  bine înseamnă puțin dacă nu știi și cât de multă muncă totală reprezintă.
- **Cele două metrici trebuie raportate împreună, întotdeauna.** Aceasta este o
  aplicare directă a principiului asocierii cu o gardă din subiectul 1.2 la datele
  de flux în mod specific.
- **Viteza este expusă aceleiași manipulări prin substituție ca orice metrică de
  numărare a elementelor.** Împărțirea muncii grele în multe elemente mici și ușoare
  umflă numărătoarea fără a livra proporțional mai multă valoare.
- **O distribuție sănătoasă depinde de context, nu este o țintă fixă.** Subiectul
  2.2 tratează asta în profunzime; viteza și distribuția ar trebui interpretate
  mereu față de ținta pe care o implică contextul.

## Recomandări

### Raportează viteza fluxului ca linie de tendință, niciodată ca număr dintr-o singură perioadă

Numărul de elemente dintr-o singură perioadă este zgomotos și ușor de citit greșit.
Reprezintă viteza fluxului pe mai multe perioade consecutive și uită-te la
tendință, nu la un singur punct de date, aceeași disciplină pe care o recomandă
subiectul 1.6 pentru orice metrică de serie temporală predispusă la variație
naturală.

### Nu prezenta niciodată viteza fluxului fără distribuția ei alături

Tratează asta ca pe o regulă strictă pentru orice tablou de bord sau raport, nu ca
pe un lucru plăcut. Un grafic de viteză arătat singur invită exact la citirea
greșită cu care începe acest subiect: un debit în creștere care este de fapt o
pondere crescândă de refacere sau de muncă ușoară de funcționalități ce înlocuiește
capacitatea de datorie și de risc. Pune-le pe amândouă în aceeași vedere, mereu.

### Ponderează viteza după dimensiune sau complexitate când dimensiunile elementelor variază mult

Numărătoarea brută a elementelor tratează o schimbare de configurare dintr-o linie
și o migrare arhitecturală de mai multe săptămâni ca echivalente, ceea ce invită la
aceeași manipulare prin substituție pe care această carte a numit-o deja pentru
frecvența implementărilor (subiectul 2.10): împărțirea muncii grele în multe
elemente mici umflă numărătoarea fără a livra proporțional mai mult. Unde
dimensiunile elementelor variază mult, ponderează viteza după o estimare grosieră a
dimensiunii sau a complexității, sau urmărește dimensiunea medie a elementelor
alături de numărătoarea brută, astfel încât o dimensiune medie în scădere lângă o
numărătoare în creștere să fie vizibilă, nu ascunsă.

### Urmărește deriva distribuției fluxului, nu doar instantaneul ei curent

Cel mai util semnal din distribuția fluxului este rareori procentajul exact al
acestei perioade; este direcția schimbării pe mai multe perioade. O alunecare
constantă, funcționalitățile urcând în timp ce datoria și riscul scad discret,
merită ridicată în fața părților interesate cu mult înainte să devină genul de
problemă de calitate sau de securitate despre care subiectul 2.2 avertizează că se
acumulează invizibil sub un tipar de fabrică de funcționalități.

### Compară viteza fluxului între fluxuri de valoare doar cu o grijă reală

Două fluxuri de valoare cu granularitate diferită a elementelor, dimensiuni
diferite ale echipelor sau faze diferite ale produsului nu sunt direct comparabile
doar pe viteza brută, aceeași problemă de corectitudine pe care subiectul 2.10 o
numește pentru frecvența implementărilor între echipe. Folosește viteza mai întâi
pentru tendința proprie a unui flux de valoare și încearcă comparația între fluxuri
de valoare abia după ce confirmi definiții și granularitate de elemente cu adevărat
comparabile.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Doar viteza brută a numărului de elemente | Simplă de calculat și de explicat | Expusă manipulării prin substituție; ascunde ce fel de valoare s-a livrat |
| Viteza asociată cu distribuția | Arată împreună scara și amestecul de valoare | Cere clasificare disciplinată a elementelor de flux (subiectul 2.2) ca să fie semnificativă |
| Viteza ponderată după dimensiune | Rezistă manipulării prin substituție din împărțirea elementelor | Cere o metodă de estimare a dimensiunii consecventă și convenită în echipă |
| Compararea vitezei între fluxuri de valoare | Utilă pentru decizii de investiții la nivel de portofoliu | Ușor nedreaptă fără confirmarea unor definiții de elemente cu adevărat comparabile |

Tensiunea centrală este **simplitate versus rezistență la manipulare**.
Numărătoarea brută a elementelor este cel mai ușor număr de calculat și de explicat,
dar este și cel mai ușor de umflat împărțind munca grea în multe bucăți mici.
Rezolvă tensiunea păstrând metrica principală simplă, viteza brută asociată cu
distribuția, și rezervând ponderarea după dimensiune pentru fluxurile de valoare în
care dimensiunile elementelor sunt cunoscute ca variind destul de mult încât
numărătoarea simplă a devenit activ înșelătoare.

## Întrebări de discutat cu echipa ta

1. **Când raportăm viteza fluxului, este distribuția fluxului arătată mereu alături
   sau stă uneori viteza singură?** Un număr de viteză fără distribuția lui este un
   tablou incomplet după propriul principiu central al acestui subiect. Verifică
   tablourile de bord și rapoartele reale pentru această lacună.

2. **S-a schimbat dimensiunea medie a elementelor odată cu o viteză în creștere și
   am ști dacă s-ar fi schimbat?** O dimensiune medie în scădere lângă o numărătoare
   în urcare este semnătura specifică a manipulării prin substituție aplicată
   elementelor de flux. Extrage datele reale, în loc să presupui că tiparul lipsește.

3. **Ne-am comparat vreodată viteza cu cea a altei echipe fără a confirma că
   definițiile și granularitatea elementelor noastre se potrivesc de fapt?** O
   comparație nedreaptă aici poate împinge o echipă spre manipularea propriilor
   numere doar ca să pară comparabilă, repetând același risc pe care această carte
   l-a numit deja pentru frecvența implementărilor.

4. **A alunecat distribuția fluxului nostru într-o direcție în ultimele perioade și
   a decis cineva asta deliberat?** O alunecare lentă este ușor de ratat perioadă cu
   perioadă. Reprezintă mai multe perioade împreună și caută sincer o tendință înainte
   de a presupune că împărțirea curentă este stabilă.

5. **Dacă cineva ar vrea să ne umfle viteza fluxului fără a face mai multă muncă
   reală, care este cea mai ușoară cale prin care ar putea-o face și ar prinde
   raportarea noastră actuală acest lucru?** Parcurge mecanica specifică a împărțirii
   elementelor grele în unele ușoare și discută dacă tabloul tău de bord ar dezvălui
   de fapt acest tipar.

6. **Ajung numerele noastre de viteză și de distribuție vreodată împreună la
   părțile interesate din business sau urcă doar titlul cu viteza?** Principiul
   asocierii protejează împotriva citirii greșite doar dacă ambele jumătăți sunt
   văzute de fapt de cei care iau decizii pe baza datelor.

## Perspectiva sectorială

**Startup.** Viteza fluxului este de obicei ușor de urmărit informal la această
scară, pentru că întreaga echipă are deja o idee grosieră despre debit. Disciplina
utilă este asocierea ei cu distribuția chiar și informal, astfel încât un fondator
să nu confunde un număr în creștere de tichete închise cu progres real al
funcționalităților, când numărul este de fapt dominat de remedierea defectelor din
faza timpurie.

**Afacere mică.** Urmărește viteza și distribuția împreună din orice unealtă ușoară
folosești deja pentru clasificarea elementelor de flux (subiectul 2.2); nu este
nevoie de o platformă dedicată de analiză la această scară. Obiceiul de a le vedea
mereu una lângă alta contează mai mult decât orice sofisticare a uneltelor.

**Companie mare.** Compararea vitezei între fluxuri de valoare este tentantă la
această scară pentru prioritizarea la nivel de portofoliu și tot aici este cel mai
mare riscul de corectitudine, pentru că liniile de produse diferite au legitim o
granularitate foarte diferită a elementelor. Investește în confirmarea unor definiții
comparabile înainte de a folosi comparațiile de viteză ca să justifici decizii de
investiții între echipe.

**Administrație publică.** Viteza fluxului asociată cu distribuția oferă unui lider
de tehnologie din sectorul public o bază de dovezi mult mai puternică pentru
raportarea producției de livrare către organele de supraveghere decât debitul brut
singur, pentru că poate arăta nu doar cât s-a livrat, ci și că amestecul reflectă o
alocare deliberată și apărabilă între funcționalitate nouă, remedierea defectelor și
gestionarea riscurilor.

## Exemple

**Companie mare.** Echipa de platformă a unui furnizor de software a raportat trei
trimestre consecutive o viteză a fluxului în creștere constantă, o tendință
sărbătorită de conducere ca accelerare a livrării. O privire mai atentă asupra
distribuției fluxului, cerută abia după o escaladare a unui client despre defecte
recurente, a arătat că ponderea „funcționalităților” din acea viteză în creștere
scăzuse de fapt de la 70% la 45% în aceeași perioadă, elementele de remediere a
defectelor umplând golul. Echipa livra mai multe elemente, dar o proporție tot mai
mică dintre ele erau valoare nouă; restul era refacere pe care graficul de viteză
singur o ascunsese complet.

**Administrație publică.** Echipa platformei de date a unei agenții naționale de
statistică a urmărit viteza fluxului ca metrică principală de livrare pentru un
raport anual către consiliul ei de supraveghere. Când un membru al consiliului a
întrebat ce proporție din acea viteză reprezenta capabilitate nouă orientată spre
public, echipa a descoperit că nu descompusese niciodată numărul pe tipuri de
elemente de flux și nu putea răspunde direct. Agenția a adoptat ulterior raportarea
asociată viteză-și-distribuție, care a arătat că munca de risc și de conformitate,
determinată de o nouă reglementare de protecție a datelor, consumase legitim o pondere
tot mai mare din capacitate, o alocare apărabilă pe care consiliul a acceptat-o
imediat odată ce i-a fost arătată explicit, în loc să fie lăsată implicită într-o
scădere neexplicată de viteză.

## Argumentul de business: motivații, ROI și TCO

Randamentul asocierii vitezei cu distribuția este o relatare mai onestă și mai
apărabilă a producției de livrare decât oferă fiecare număr separat. Exemplul
furnizorului de software de mai sus, care a descoperit că viteza în creștere
reflecta de fapt o producție de funcționalități în scădere, este exact genul de
citire greșită pe care o previne această asociere, iar prinderea timpurie a acestui
tipar este mult mai ieftină decât descoperirea lui abia după ce o problemă de
calitate vizibilă clienților forțează întrebarea.

Costul total de proprietate este minim odată ce clasificarea elementelor de flux
(subiectul 2.2) este deja în vigoare: distribuția este o agregare directă a
elementelor deja clasificate, iar disciplina afișării ambelor metrici împreună este
o convenție de raportare, nu o investiție tehnică. Cea mai mare parte din costul
recomandărilor acestui subiect a fost deja plătită când organizația a adoptat, de la
început, clasificarea onestă a elementelor de flux.

## Anti-modele și capcane

- **Raportarea vitezei fluxului fără distribuție:** vectorul de manipulare din
  centrul acestui subiect. O echipă aflată sub presiunea livrării poate crește
  numărul de elemente preferând muncă mică și ușoară de funcționalități și evitând
  elementele mai grele de datorie, de risc sau de defecte, sau împărțind elementele
  mari în multe mici, iar un grafic de viteză arătat singur va fi citit ca
  accelerare, nu ca schimbarea reală în ce se livrează. Garda de protecție este
  aceeași disciplină de asociere pe care o cere subiectul 1.2 în toată cartea: nu
  arăta niciodată viteza fără distribuție și verifică periodic dimensiunea medie a
  elementelor alături de numărătoare, ca să prinzi în special împărțirea.
- **Compararea vitezei între fluxuri de valoare cu granularitate diferită a
  elementelor:** produce o comparație nedreaptă și înșelătoare.
- **A trata distribuția dintr-o singură perioadă ca stabilă:** ratează o alunecare
  lentă și semnificativă pe care o dezvăluie doar o vedere de tendință.
- **A lăsa doar titlul cu viteza să ajungă la părțile interesate din business:**
  pierde întreaga valoare protectoare a principiului asocierii.
- **Ignorarea dimensiunii medii a elementelor în timp ce sărbătorești o viteză în
  creștere:** ratează semnătura specifică a manipulării prin substituție.
- **Stabilirea unei ținte de viteză fără referire la distribuție:** invită exact
  manipularea împotriva căreia avertizează acest subiect pe nume.

## Model de maturitate

- **Nivelul 1, Inițiere:** Viteza fluxului, dacă este urmărită, este raportată singură,
  fără date de distribuție, iar nimeni nu a verificat manipularea prin substituție.
- **Nivelul 2, Dezvoltare:** Unele echipe urmăresc distribuția, dar ea nu este asociată
  consecvent cu viteza în raportare și nici revizuită ca tendință.
- **Nivelul 3, Standardizare:** Viteza și distribuția sunt raportate mereu împreună,
  văzute ca tendințe, cu dimensiunea medie a elementelor monitorizată pentru a prinde
  manipularea prin substituție.
- **Nivelul 4, Gestionare:** Deriva distribuției este investigată proactiv înainte să
  devină o problemă de calitate sau de securitate, iar comparațiile de viteză între
  fluxuri de valoare se fac doar după confirmarea unor definiții de elemente cu
  adevărat comparabile.
- **Nivelul 5, Orchestrare:** Viteza și distribuția informează direct deciziile de
  investiții la nivel de portofoliu, iar organizația poate indica cazuri concrete în
  care deriva distribuției a fost prinsă și corectată înainte să cauzeze o defecțiune
  vizibilă.

## Idei de discuție

1. Include raportarea vitezei fluxului nostru mereu distribuția sau am arătat vreodată una fără cealaltă?
2. S-a schimbat recent dimensiunea medie a elementelor noastre de flux odată cu o schimbare a vitezei?
3. Am ști dacă distribuția fluxului nostru a alunecat constant în ultimele trimestre?
4. Ce ar trebui ca cineva să ne umfle viteza fără a livra mai multă valoare reală și am observa?

## Concluzii principale

- **Viteza fluxului** măsoară debitul; **distribuția fluxului** măsoară ce fel de
  muncă reprezintă acel debit. Raportează-le împreună, întotdeauna.
- Această asociere este o aplicare directă a **principiului gărzii de protecție** din
  subiectul 1.2: nu arăta niciodată un număr de viteză fără contextul a ce a costat.
- Vectorul central de manipulare al subiectului este **raportarea vitezei singure**,
  care poate ascunde o schimbare spre muncă ușoară de funcționalități sau spre
  împărțirea elementelor, ce umflă numărătoarea fără a livra valoare proporțională.
- **Deriva distribuției** este cel mai vizibilă ca tendință pe mai multe perioade,
  nu în instantaneul unei singure perioade.
- **Comparațiile de viteză între fluxuri de valoare** au nevoie de definiții de
  elemente cu adevărat comparabile ca să fie corecte; fără ele, induc în eroare mai
  mult decât informează.

## Referințe și lecturi suplimentare

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
