# 4.2 Acoperirea testelor și eficacitatea testelor

## Prezentare generală și motivație

**[Acoperirea testelor](https://en.wikipedia.org/wiki/Code_coverage)** măsoară
procentul de cod executat de o suită de teste: acoperirea pe linii, acoperirea
pe ramuri sau acoperirea mai strictă pe căi. Este una dintre cele mai urmărite
metrici din toată această carte, ieftină de calculat, ușor de vizualizat ca un
singur procent și, în consecință, una dintre cele mai frecvent manipulate, exact
așa cum prezice subiectul 1.2 pentru orice metrică ce devine țintă. O suită de
teste poate obține o acoperire mare verificând aproape nimic semnificativ,
pentru că acoperirea măsoară dacă codul a fost executat în timpul unei rulări de
teste, nu dacă testul a verificat de fapt că acel cod s-a comportat corect.

Acest decalaj dintre acoperire și eficacitatea reală a testelor nu este o notă
de subsol minoră; este preocuparea centrală a acestui subiect. Un test care
apelează o funcție și nu afirmă nimic despre rezultatul ei crește acoperirea
identic cu un test care verifică temeinic comportamentul funcției în cazurile
limită. Remediul pe care îl recomandă acest subiect, **testarea prin mutații**,
care introduce deliberat mici defecte artificiale în cod și verifică dacă suita
de teste le prinde cu adevărat, este răspunsul direct la acest decalaj, iar
subiectul o tratează ca pe complementul necesar al acoperirii, nu ca pe un
extra opțional.

Pentru echipele mari, țintele de acoperire sunt adesea adoptate la nivelul
întregii organizații ca poartă de calitate, exact genul de metrică stimulată și
foarte vizibilă despre care subiectul 1.2 avertizează că este cea mai expusă
manipulării. Companiile mari și administrațiile publice care stabilesc o cerință
generală de procent de acoperire fără o verificare asociată a eficacității
stimulează, în fapt, exact tiparul de manipulare a pragului descris de această
carte: teste banale scrise doar pentru a atinge un număr, fără nicio îmbunătățire
corespunzătoare în prevenirea reală a defectelor.

## Principii-cheie

- **Acoperirea măsoară execuția, nu verificarea.** O linie rulată de un test nu
  spune nimic despre dacă testul a verificat ceva semnificativ despre ea.
- **O țintă de acoperire fără verificarea eficacității este o construcție clasică
  pentru legea lui Goodhart** (subiectul 1.2): numărul se îmbunătățește, în timp
  ce calitatea reală nu.
- **Testarea prin mutații este complementul necesar al acoperirii**, nu un
  înlocuitor; folosește-le pe amândouă împreună.
- **Acoperirea este mai utilă ca prag minim decât ca țintă de maximizat.** Un
  număr mic dezvăluie cod cu adevărat netestat; goana după 100% produce adesea
  randamente descrescătoare sau negative.
- **Acoperirea căilor critice contează mai mult decât acoperirea uniformă,
  generală.** Nu tot codul poartă același risc dacă eșuează.

## Recomandări

### Folosește acoperirea pentru a găsi codul netestat, nu ca țintă de maximizat

Tratează un raport de acoperire în primul rând ca pe o hartă a ceea ce nu are
deloc test, ceea ce este informație cu adevărat utilă, nu ca pe un scor de împins
spre 100%. Codul cu acoperire zero este un gol real, care merită închis; valoarea
marginală a împingerii acoperirii de la 85% la 95% este de obicei mult mai mică
și adesea nu merită efortul necesar, mai ales dacă acel efort produce teste de
valoare mică doar pentru a atinge numărul mai mare.

### Asociază fiecare țintă de acoperire cu testarea prin mutații

Uneltele de **testare prin mutații** introduc automat mici defecte în codul tău,
inversând un operator de comparare sau schimbând o condiție de limită, apoi rulează
suita de teste împotriva fiecărei versiuni mutate. O suită de teste care
„ucide” (eșuează în fața) majorității mutanților verifică cu adevărat
comportamentul; o suită cu acoperire mare pe linii, dar cu o rată mică de ucidere
a mutanților, execută cod fără să-l verifice semnificativ. Această asociere este
cea mai eficientă gardă de protecție împotriva manipulării țintei de acoperire, iar
cartea aceasta o recomandă ca practică standard, nu ca tehnică avansată sau
opțională.

### Prioritizează mai întâi acoperirea și testarea prin mutații pe căile critice

Nu tot codul poartă același risc. O cale de procesare a plăților, o verificare de
autentificare sau un script de migrare a datelor merită o testare mult mai
riguroasă decât un raport administrativ rar folosit. În loc să urmărești o
acoperire uniformă în toată baza de cod, identifică căile de cod cu cel mai mare
risc și cele mai mari consecințe și concentrează mai întâi acolo atât acoperirea,
cât și efortul de testare prin mutații, acceptând o acoperire mai mică pe codul cu
risc cu adevărat scăzut ca pe un compromis deliberat și informat, nu ca pe o
scăpare.

### Urmărește tiparele specifice de manipulare a acoperirii

Cele mai frecvente moduri în care acoperirea este manipulată, odată ce devine
țintă, includ: teste care apelează o funcție, dar nu afirmă nimic semnificativ
despre rezultat (manipularea pragului din subiectul 1.2 aplicată acestei metrici),
dezactivarea sau ștergerea testelor care eșuează în loc să repare problema de fond
și excluderea din calculul acoperirii a codului greu de testat, în loc să abordezi
de ce este greu de testat. Auditează periodic direct un eșantion de teste,
citindu-le afirmațiile reale, în loc să te încrezi doar în procentul de acoperire.

### Stabilește un prag minim de acoperire, nu un plafon, în pipeline-ul tău CI

Configurează pipeline-ul de build să eșueze dacă acoperirea scade sub un prag
minim agreat pentru codul nou, prevenind regresia, în loc să ceri ca fiecare
schimbare să împingă numărul general mai sus. Distincția contează: un prag minim
protejează împotriva regresiei fără să creeze aceeași presiune neîncetată în sus,
care produce teste de valoare mică scrise doar pentru a urca numărul încă puțin.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Doar procentul de acoperire | Ieftin, simplu, larg susținut de unelte | Ușor de manipulat; măsoară execuția, nu verificarea |
| Acoperire plus testare prin mutații | Verifică dacă testele chiar controlează comportamentul, rezistă manipulării | Mai costisitoare computațional; cere investiție în unelte |
| Țintă uniformă de acoperire în toată baza de cod | Simplu de enunțat și de impus | Irosește efort pe cod cu risc scăzut; investește insuficient față de risc în altă parte |
| Acoperire bazată pe risc, mai întâi căile critice | Concentrează efortul acolo unde contează cel mai mult | Cere judecată pentru identificarea corectă a căilor cu adevărat critice |

Tensiunea centrală este **simplitate versus onestitate**. Un singur procent de
acoperire este ușor de raportat și ușor de stabilit ca țintă, dar tocmai această
simplitate îl face atât de ușor de manipulat odată ce devine un număr stimulat.
Rezolvă tensiunea acceptând complexitatea suplimentară a testării prin mutații și
a prioritizării bazate pe risc ca preț al unui semnal onest și comunicând explicit
echipei de ce un număr general de acoperire mai mic, concentrat corect pe căile
critice și susținut de o rată mare de ucidere a mutanților, este mai valoros decât
unul mai mare, mai uniform distribuit, dar verificat mai puțin eficient.

## Întrebări de discutat cu echipa ta

1. **Care este rata noastră de ucidere a mutanților pe căile de cod cu cel mai
   mare risc și cum se compară cu procentul de acoperire pe același cod?** Un
   decalaj mare între un număr mare de acoperire și o rată mică de ucidere a
   mutanților este cel mai clar semn posibil că acoperirea singură nu îți spune ce
   crezi că îți spune.

2. **Am scris vreodată un test în primul rând pentru a crește un număr de
   acoperire, cu puțină gândire reală despre ce ar trebui să verifice?** Fii
   sincer aici; se întâmplă mai des decât le place echipelor să recunoască, mai
   ales sub presiunea termenelor, când o poartă de acoperire blochează un merge.

3. **Este efortul nostru de acoperire concentrat pe căile de cod cu cel mai mare
   risc sau răspândit uniform, indiferent de consecința eșecului acelui cod?**
   Cartografiază distribuția actuală a acoperirii față de o evaluare onestă a
   riscului bazei tale de cod și caută nepotrivirea.

4. **Am dezactivat sau șters vreodată un test care eșua, în loc să reparăm
   problema de fond pe care a dezvăluit-o?** Aceasta este una dintre cele mai
   dăunătoare forme de manipulare a acoperirii, pentru că elimină activ protecția
   reală, în timp ce numărul raportat de acoperire se poate mișca abia.

5. **Impune pipeline-ul nostru CI un prag minim de acoperire pentru codul nou
   sau împinge spre un plafon tot mai mare, indiferent de randamentele
   descrescătoare?** Discută dacă designul actual al porții creează stimulentul
   potrivit, protecția împotriva regresiei, sau pe cel greșit, o presiune
   neîncetată în sus care recompensează umplerea cu teste de valoare mică.

6. **Ce cod din baza noastră de cod este exclus din calculul acoperirii și este
   acea excludere justificată sau ascunde un gol real de testare?** Revizuiește
   configurația reală de excluderi; este obișnuit ca această listă să crească pe
   tăcute în timp, fără ca cineva să mai verifice dacă fiecare excludere este
   încă justificată.

## Perspectiva sectorială

**Startup.** Țintele formale de acoperire sunt adesea inutile atât de devreme;
concentrează efortul de scriere a testelor direct pe căile de cod cele mai
riscante și mai critice pentru business (de obicei logica plăților sau a fluxului
de bază), în loc să urmărești un procent general într-o bază de cod care încă se
schimbă rapid și poate fi oricum rescrisă substanțial în curând.

**Afacere mică.** Majoritatea platformelor CI raportează acoperirea automat, cu
costuri minime de configurare; folosește-o în primul rând ca să depistezi codul
critic complet netestat, în loc să urmărești un procent-țintă anume, și ia în
calcul testarea prin mutații abia când ai capacitatea de inginerie să acționezi pe
baza a ceea ce dezvăluie.

**Companie mare.** Țintele generale de acoperire, la nivelul organizației, sunt o
greșeală frecventă și cu consecințe la această scară, întrucât stimulează exact
manipularea descrisă de acest subiect, simultan în zeci de echipe. Stabilește
așteptări de acoperire bazate pe risc, care variază în funcție de criticitatea
serviciului, și investește în infrastructură de testare prin mutații special
pentru sistemele cu cel mai mare risc.

**Administrație publică.** Cerințele de acoperire apar uneori în documentația de
achiziții sau de conformitate ca un indicator indirect brut și ușor de specificat
pentru asigurarea calității. Acolo unde se poate, asociază orice procent de
acoperire cerut contractual cu o cerință de eficacitate bazată pe testare prin
mutații sau pe defecte, astfel încât stimulentul contractual să nu recompenseze
din neatenție exact umplerea cu teste de valoare mică împotriva căreia avertizează
acest subiect.

## Exemple

**Companie mare.** Conducerea unei platforme de comerț electronic stabilise o
cerință de acoperire de 95% la nivelul întregii companii pentru tot codul nou,
impusă ca poartă CI rigidă. Un audit făcut doi ani mai târziu, declanșat de un
val de defecte în producție în cod presupus bine testat, a găsit o rată de
ucidere a mutanților sub 40% în mare parte din baza de cod: echipele scriseseră
teste care executau căi de cod fără să afirme semnificativ ceva despre
comportamentul lor, doar pentru a satisface poarta sub presiunea termenelor.
Compania a înlocuit cerința generală de acoperire cu o politică pe niveluri de
risc: acoperire strictă plus testare prin mutații obligatorie, peste un prag de
80% rată de ucidere, pentru codul de plăți și de autentificare, și un prag minim
de acoperire mult mai ușor pentru uneltele interne cu risc scăzut, ceea ce a
redus atât efortul de testare irosit, cât și, măsurabil, ratele de defecte pe căile
cu adevărat critice.

**Administrație publică.** Sistemul de eligibilitate pentru beneficii al unei
agenții de sănătate publică fusese obligat contractual să mențină o acoperire de
90% prin acordul cu furnizorul de dezvoltare. O analiză post-incident, după un
defect semnificativ de calcul al eligibilității care fusese livrat în ciuda
îndeplinirii cerinței de acoperire, a constatat că funcția responsabilă își
obținuse acoperirea în întregime prin teste care o apelau cu intrări valide, dar
nu testau niciodată condițiile limită sau intrările invalide, exact acolo unde
apărea defectul. Contractul revizuit al agenției cu furnizorul cere acum un scor
documentat de testare prin mutații alături de acoperire pentru orice cod de calcul
al eligibilității, închizând golul specific care permisese ca o testare conformă,
dar ineficientă, să satisfacă contractul.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea asocierii acoperirii cu testarea prin mutații este prinderea
decalajului dintre calitatea aparentă și cea reală a testelor înainte ca acesta să
coste un defect în producție. Exemplul cu comerțul electronic de mai sus arată
clar tiparul: o cerință de acoperire singură produsese un fals sentiment de
siguranță, pe care un val de defecte l-a expus în cele din urmă la un cost mult mai
mare decât investiția în testarea prin mutații care ar fi prins golul mai devreme.

Costul total de proprietate include costul computațional al testării prin
mutații, mai scump de rulat decât simpla instrumentare a acoperirii și de aceea
rezervat de obicei codului de pe căile critice, nu întregii baze de cod, plus
timpul de inginerie pentru interpretarea rezultatelor și acțiunea pe baza lor.
Acest cost este justificat în mod specific pentru codul cu cel mai mare risc, unde
costul unui gol nedetectat în eficacitatea testelor este cel mai mare.

## Anti-modele și capcane

- **Tratarea procentului de acoperire ca verdict direct de calitate:** măsoară
  execuția, nu verificarea.
- **Scrierea testelor în primul rând pentru a satisface o poartă de acoperire:**
  produce exact tiparul de teste de valoare mică, de manipulare a pragului,
  împotriva căruia avertizează subiectul 1.2.
- **Dezactivarea sau ștergerea testelor care eșuează în loc să repari problema de
  fond:** elimină protecția reală afectând abia numărul raportat.
- **Aplicarea unei ținte uniforme de acoperire indiferent de riscul codului:**
  irosește efort pe cod cu risc scăzut și investește insuficient în căile cu
  adevărat critice.
- **Creșterea pe tăcute a unei liste de excluderi în timp:** ascunde goluri reale
  de testare în spatele unei cifre de acoperire exacte tehnic, dar înșelătoare.
- **Urmărirea unui plafon de acoperire în loc de un prag minim:** creează o presiune
  neîncetată în sus, care recompensează umplerea cu teste în locul verificării
  reale.

## Model de maturitate

- **Nivelul 1, Inițiere:** Acoperirea nu este măsurată sau este măsurată
  inconsecvent, fără prag minim, țintă sau verificare a eficacității.
- **Nivelul 2, Dezvoltare:** Există și este urmărită o țintă de acoperire, dar nicio
  testare prin mutații sau prioritizare bazată pe risc nu informează cum este
  alocat efortul.
- **Nivelul 3, Standardizare:** Pragurile minime de acoperire sunt impuse
  consecvent în CI, iar prioritizarea bazată pe risc direcționează unde se
  concentrează efortul de acoperire.
- **Nivelul 4, Gestionare:** Testarea prin mutații rulează pe codul căilor critice,
  cu un prag urmărit de rată de ucidere, care trebuie îndeplinit alături de
  acoperire, iar listele de excluderi sunt auditate periodic.
- **Nivelul 5, Orchestrare:** Organizația poate indica reduceri concrete de defecte,
  atribuite prioritizării informate de testarea prin mutații, iar datele de
  acoperire și de eficacitate împreună informează direct deciziile de investiții
  în testare.

## Idei de discuție

1. Care este rata noastră de ucidere a mutanților pe cea mai critică cale de cod a noastră și o cunoaștem măcar?
2. Am scris vreodată un test de valoare mică doar pentru a satisface o poartă de acoperire?
3. Este efortul nostru actual de acoperire concentrat acolo unde riscul e cel mai mare sau răspândit uniform?
4. Ce cod este exclus în prezent din calculul acoperirii și este acea excludere încă justificată?
5. Ar merita o investiție în testarea prin mutații pe sistemul nostru cu cel mai mare risc costul ei computațional?

## Concluzii principale

- Acoperirea testelor măsoară **execuția, nu verificarea**; o linie acoperită nu
  spune nimic despre dacă a fost verificată semnificativ.
- Asociază acoperirea cu **testarea prin mutații**, ca să verifici că testele
  prind efectiv defecte reale, nu doar că rulează codul.
- Concentrează efortul de testare pe **căile critice, cu risc mare**, în loc să
  urmărești o acoperire uniformă în toată baza de cod.
- Folosește acoperirea ca **prag minim care protejează împotriva regresiei**, nu
  ca plafon de maximizat neîncetat.
- Urmărește tiparele specifice de manipulare a acoperirii: **teste de valoare
  mică, teste dezactivate care eșuează și liste de excluderi care cresc pe
  tăcute**.

## Referințe și lecturi suplimentare

- *Working Effectively with Legacy Code*, de Michael Feathers (strategia de
  acoperire cu teste pentru baze de cod existente, greu de testat).
- Jia, Yue, și Mark Harman, „An Analysis and Survey of the Development of
  Mutation Testing”, *IEEE Transactions on Software Engineering* (2011): un
  studiu cuprinzător al tehnicilor de testare prin mutații și al eficacității lor.
- *xUnit Test Patterns*, de Gerard Meszaros (șabloane de proiectare a testelor,
  relevante pentru scrierea unor teste cu adevărat eficace, nu doar care
  satisfac acoperirea).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez
  Humble și Gene Kim (relația dintre practicile de testare și performanța
  livrării).
