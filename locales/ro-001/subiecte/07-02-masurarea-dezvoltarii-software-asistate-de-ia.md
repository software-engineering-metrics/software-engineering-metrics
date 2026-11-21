# 7.2 Măsurarea dezvoltării software asistate de IA

## Prezentare generală și motivație

Subiectul 7.1 a arătat de ce mai multe metrici existente nu mai măsoară
fiabil, în dezvoltarea asistată de IA, ceea ce măsurau înainte. Subiectul de
față este despre ce să măsori în schimb: cum afli, cu dovezi reale, nu cu
impresii sau marketing de furnizor, dacă asistența IA în programare ajută cu
adevărat organizația ta și cu cât. Este o întrebare cu adevărat importantă,
cu consecințe bugetare reale: licențele pentru instrumentele de IA sunt un
cost real și continuu, iar disciplina economiei unitare din subiectul 5.4 se
aplică direct. O organizație care nu poate răspunde cu dovezi fie plătește
prea mult pentru un instrument care nu ajută, fie investește prea puțin în
unul care chiar ajută.

Abordarea acestui subiect se sprijină direct pe principiul rezultatelor în
locul producției din subiectul 1.3, aplicat acum evaluării instrumentelor de
IA. Abordarea naivă și cea mai frecventă măsoară dezvoltarea asistată de IA
după volumul producției: linii de cod generate, sugestii acceptate, timp
economisit per sarcină raportat de dezvoltatori înșiși, exact metricile pe
care subiectul 7.1 le-a avertizat ca fiind cele mai expuse acestei schimbări.
Abordarea mai riguroasă recomandată aici măsoară rezultate: a redus asistența
IA cu adevărat timpul de ciclu fără a degrada calitatea, a redus timpul
petrecut pe muncă repetitivă cu adevărat puțin valoroasă, eliberând capacitate
pentru muncă de valoare mai mare, și a afectat măsurabil rezultatele de produs
și de business din Partea 5?

Pentru echipele mari, a face bine această măsurare determină dacă deciziile
de investiție în instrumente de IA se iau pe bază de dovezi sau pe bază de
afirmații ale furnizorilor și de inerție organizațională. Organizațiile mari
care negociază contracte de amploare pentru instrumente de IA au nevoie de
dovezi autentice de valoare, pentru a justifica cheltuiala și a compara
corect instrumentele concurente; administrațiile publice, adesea sub o
supraveghere deosebită a cheltuielilor pentru tehnologie, au nevoie de o
metodologie de evaluare riguroasă și apărabilă înainte de a angaja fonduri
publice în adoptarea la scară largă a instrumentelor de IA.

## Principii-cheie

- **Măsoară asistența IA după rezultat, nu după volumul producției sau după
  statisticile de utilizare raportate de furnizor.** Disciplina din subiectul
  1.3 se aplică aici în plină forță.
- **Folosește un [grup de comparație](https://en.wikipedia.org/wiki/Treatment_and_control_groups) autentic oriunde este fezabil**, nu doar o
  comparație înainte-și-după, pe care o valoare de referință în creștere la
  nivelul întregii industrii o poate confunda.
- **Economiile de timp raportate de oameni înșiși sunt, singure, un semnal
  slab.** Asociază-le cu date obiective despre timpul de ciclu și calitate.
- **Măsoară costul complet, inclusiv timpul de revizuire și de corectare**,
  nu doar viteza de generare.
- **Sarcini diferite și ingineri diferiți pot vedea valori foarte diferite
  ale asistenței IA.** Evită o singură cifră agregată la nivelul întregii
  organizații, care ascunde această variație.

## Recomandări

### Construiește o comparație autentică, nu doar un instantaneu înainte-și-după

Acolo unde este fezabil, compară rezultatele dintre un grup care folosește
asistența IA și un grup comparabil care nu o folosește, în aceeași perioadă,
în loc să compari doar cifrele de dinainte și de după ale propriei organizații,
care nu pot distinge efectul asistenței IA de orice altă schimbare simultană
(avertismentul despre variabilele de confuzie din subiectul 1.6 se aplică
direct). Acolo unde un grup de comparație adevărat nu este practic, compară
cel puțin cu o valoare de referință istorică mai lungă (o diagramă de control,
conform subiectului 1.6), nu cu un singur instantaneu înainte-și-după,
vulnerabil la regresia spre medie sau la schimbări simultane fără legătură.

### Măsoară timpul de ciclu și calitatea împreună, niciodată doar afirmația de viteză a asistenței IA

Aplică direct disciplina subiectelor 2.6 și 2.10: urmărește dacă munca asistată
de IA se mișcă mai repede prin etapele timpului de ciclu și, simultan, dacă
rata de eșec a modificărilor sau rata defectelor scăpate (subiectul 5.1) pentru
acea muncă se mișcă în direcția greșită. Un câștig real de productivitate
arată un timp de ciclu mai rapid cu o calitate stabilă sau îmbunătățită; un
câștig fals arată un timp de ciclu mai rapid cu o calitate în degradare, exact
compromisul de care a avertizat subiectul 7.1, descoperit aici prin aceeași
disciplină a metricilor asociate pe care o aplică această carte peste tot.

### Include timpul de revizuire și de corectare în contabilitatea costului complet

Codul generat de IA care se produce mai repede, dar se revizuiește mai încet,
sau care cere mai multă corectare și refacere după generarea inițială, poate să
nu arate nicio îmbunătățire netă a timpului de ciclu odată ce se măsoară
întregul flux, chiar dacă pasul inițial de generare a părut dramatic mai rapid
inginerului individual. Măsoară întregul lanț al timpului de ciclu (subiectul
2.6), nu doar etapa de programare, ca să surprinzi onest situația, în loc să
creditezi asistența IA pe baza unui sentiment de viteză, real, dar incomplet.

### Tratează economiile de timp raportate de oameni drept ipoteză de pornire, nu drept concluzie

Afirmația unui dezvoltator, „asta mi-a economisit o oră”, este utilă ca semnal
inițial și ca context calitativ (abordarea combinată cantitativ-calitativă din
subiectul 5.3 se aplică și aici), dar este supusă acelorași prejudecăți de
memorie și de dezirabilitate despre care subiectul 1.5 avertizează pentru
orice date autoraportate și nu spune nimic despre costul de revizuire sau de
corectare din aval. Folosește autoraportarea ca să generezi ipoteze despre
unde ajută cel mai mult asistența IA, apoi validează acele ipoteze cu date
obiective despre timpul de ciclu și calitate, înainte de a trage o concluzie
fermă.

### Segmentează măsurarea după tipul de sarcină și evită o singură cifră agregată

Asistența IA în programare oferă probabil valori foarte diferite pentru
sarcini standard, bine înțelese, față de rezolvarea de probleme cu adevărat
noi și complexe. Măsoară și raportează pe categorii de sarcini, nu printr-o
singură medie agregată la nivel de organizație, care poate ascunde faptul că
asistența oferă o valoare puternică într-o categorie și puțină sau chiar
negativă în alta, informație pe care o cifră agregată o ascunde complet.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Doar economiile de timp raportate de oameni | Rapid, ușor de colectat | Semnal slab; supus prejudecăților; ignoră costul de revizuire din aval |
| Doar comparație înainte-și-după | Simplu de pus în practică | Confundată de orice altă schimbare simultană sau tendință din industrie |
| Grup de comparație autentic | Cele mai puternice și mai apărabile dovezi | Mai greu de organizat; poate să nu fie fezabil la o introducere cu adoptare completă |
| Măsurarea rezultatelor segmentată pe tipuri de sarcini | Arată unde se concentrează cu adevărat valoarea | Cere urmărire mai granulară și efort de categorisire |

Tensiunea centrală este **rigoarea măsurării versus fezabilitatea practică**.
Un grup de comparație autentic, controlat, oferă cele mai puternice dovezi, dar
adesea nu mai este practic după ce un instrument a fost introdus în toată
organizația, fără un grup de control păstrat deoparte; impresiile
autoraportate sunt rapide și ușoare, dar slabe singure. Rezolvă tensiunea
folosind cel mai puternic design de comparație pe care îl permite introducerea
ta reală, un grup de control autentic în faza timpurie de pilot, dacă se
poate, o diagramă de control cu valoare de referință istorică, dacă nu, și
tratând autoraportarea ca instrument de generare de ipoteze, nu ca ultimul
cuvânt, indiferent de designul de comparație ales.

## Întrebări de discutat cu echipa ta

1. **Am avut sau am putea construi încă un grup de comparație autentic pentru
   evaluarea adoptării instrumentelor noastre de IA sau ne bazăm integral pe o
   comparație înainte-și-după?** Dacă nu s-a stabilit niciodată un grup de
   comparație adevărat, discută dacă o diagramă de control cu valoare de
   referință istorică ar putea oferi totuși o alternativă rezonabil de
   riguroasă.

2. **Am măsurat împreună timpul de ciclu și calitatea pentru munca asistată de
   IA sau avem doar o afirmație de viteză, fără o verificare corespunzătoare a
   calității?** Adună datele existente și caută exact această asociere; dacă nu
   există, acest decalaj este cea mai prioritară remediere a subiectului.

3. **Include măsurarea noastră a timpului de ciclu pentru munca asistată de IA
   timpul de revizuire și de corectare sau doar pasul inițial de generare?** O
   afirmație de viteză bazată doar pe timpul de generare, ignorând costul de
   revizuire din aval, riscă tocmai capcana contabilității incomplete de care
   avertizează direct acest subiect.

4. **Ce afirmații despre economii de timp raportate de oameni am colectat și am
   validat vreuna dintre ele cu date obiective?** Alege o afirmație specifică,
   des repetată, și verifică dacă datele obiective o susțin cu adevărat.

5. **Amestecă măsurarea noastră actuală toate tipurile de sarcini într-o
   singură cifră sau știm ce categorii specifice de muncă văd cea mai mare
   valoare din asistența IA?** Dacă sunt amestecate, discută ce ar putea
   dezvălui o defalcare pe tipuri de sarcini și ascunde cifra actuală.

6. **Dacă ar trebui să ne apărăm azi investiția în instrumente de IA în fața
   unei părți interesate financiare sceptice, cu dovezi, nu cu impresii, ce am
   putea arăta de fapt?** Acest test concret scoate la iveală decalajul dintre
   ce crede organizația ta acum despre valoarea asistenței IA și ce poate
   demonstra cu dovezi.

## Perspectiva sectorială

**Startup.** Un studiu formal cu grup de comparație este de obicei
nepractic la scară mică, dar chiar și o privire simplă și onestă înainte-și-după
asupra timpului de ciclu și a ratei defectelor, în loc de a te baza doar pe cât
de repede pare munca, oferă un semnal mult mai fiabil decât impresia singură.

**Afacere mică.** Concentrează efortul de măsurare mai întâi pe categoria de
sarcini cu cea mai mare valoare și cea mai repetitivă, unde valoarea
asistenței IA este cel mai probabil clară și măsurabilă, în loc să încerci o
evaluare cuprinzătoare a fiecărui fel de muncă pe care îl face echipa ta mică.

**Companie mare.** Aici este adesea realizabilă o comparație autentică,
controlată, în faza timpurie de pilot, înainte de introducerea în toată
organizația, și merită efortul deliberat de a o organiza, deoarece produce
dovezi mult mai apărabile pentru decizia de investiție la scară largă care
urmează de obicei unui pilot reușit.

**Administrație publică.** Deciziile de cheltuieli publice pentru tehnologie,
inclusiv achizițiile de instrumente de IA, se confruntă adesea cu o
supraveghere deosebită și pot cere o justificare formală cost-beneficiu
(subiectul 5.5). Integrează de la început disciplina de măsurare recomandată
aici în orice fază de pilot, deoarece o metodologie de evaluare riguroasă și
documentată întărește considerabil argumentul final de finanțare sau de
achiziție.

## Exemple

**Companie mare.** O companie de software a introdus un asistent de programare
bazat pe IA la jumătate din echipele sale de inginerie, ca pilot deliberat,
păstrând cealaltă jumătate drept grup de comparație timp de un trimestru,
înainte de introducerea completă. Grupul-pilot a arătat o îmbunătățire reală,
semnificativă statistic, a timpului de ciclu la sarcinile bine definite, pline
de cod standard, dar nicio îmbunătățire măsurabilă și un număr ușor mai mare
de iterații de revizuire (subiectul 2.9) la munca arhitecturală complexă și
nouă. Această constatare segmentată pe sarcini, vizibilă doar datorită
designului de comparație autentic și defalcării pe categorii de sarcini, a
determinat compania să țintească mesajele și instruirea pentru introducerea
asistenței IA spre categoriile de sarcini în care a ajutat demonstrabil, în
loc să o prezinte ca pe o creștere uniformă de productivitate la toată munca.

**Administrație publică.** O agenție federală care testa asistența IA în
programare pe un subset al echipelor sale de modernizare s-a bazat inițial pe
sondaje de economii de timp autoraportate, care au arătat răspunsuri
entuziaste și uniform pozitive. O analiză obiectivă ulterioară, comparând
timpul de ciclu și rata defectelor scăpate între echipele-pilot și o cohortă
non-pilot comparabilă, care lucra la componente similare ale sistemului, a
constatat că îmbunătățirea obiectivă a timpului de ciclu era reală, dar
vizibil mai mică decât sugerau estimările autoraportate, și a identificat o
creștere modestă, dar reală, a timpului de revizuire, care anulase o parte din
câștigul de viteză la generare, constatare pe care datele autoraportate singure
o rataseră complet. Această imagine mai exactă, bazată pe dovezi, a informat
direct un argument de business mai modest și mai apărabil pentru continuarea și
extinderea achiziției instrumentului.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea măsurării riguroase a dezvoltării asistate de IA este luarea
unor decizii de investiție sigure, bazate pe dovezi: o organizație care știe
exact unde ajută cu adevărat asistența IA poate investi în extinderea ei acolo
și poate evita să plătească în plus licențe în categoriile de sarcini unde
oferă puțină valoare, exact perspectiva segmentării pe sarcini demonstrată de
exemplul companiei de software de mai sus. Aceasta se leagă direct de economia
unitară din subiectul 5.4 și de disciplina ROI din subiectul 5.5, deoarece
costul instrumentelor de IA, adesea licențiat per loc, cere același tratament
riguros cost-beneficiu pe care această carte îl aplică oricărei alte investiții
majore în inginerie.

Costul total de proprietate este efortul analitic de a construi comparații
autentice, de a măsura timpul de ciclu complet, inclusiv revizuirea și
corectarea, și de a segmenta pe tipuri de sarcini, ceea ce înseamnă mai multă
muncă decât acceptarea ca atare a statisticilor de utilizare raportate de
furnizor sau a impresiilor autoraportate. Acest efort este justificat direct de
amploarea costului licențelor de IA într-o organizație mare și de riscul unui
angajament costisitor, la nivelul întregii organizații, slab susținut de
dovezi, luat pe baza impresiei, nu a datelor.

## Anti-modele și capcane

- **Măsurarea asistenței IA doar după volumul producției sau după statisticile
  de utilizare ale furnizorului:** repetă direct avertismentul central al
  subiectului 7.1.
- **Bazarea integrală pe economiile de timp autoraportate:** un semnal slab,
  vulnerabil la prejudecăți și orb la costul de revizuire și de corectare din
  aval.
- **Măsurarea doar a pasului de viteză la generare, ignorând timpul de ciclu
  complet:** produce o contabilitate incompletă, potențial înșelătoare, a
  efectului real asupra productivității.
- **Raportarea unei singure cifre agregate la nivel de organizație:** ascunde
  variația reală a valorii între categoriile de sarcini.
- **Lipsa unui grup de comparație sau a unei valori de referință istorice:**
  nu poate distinge efectul real al asistenței IA de orice altă schimbare
  simultană.
- **Tratarea unui rezultat entuziast de sondaj autoraportat ca dovadă
  suficientă pentru o decizie de investiție la scară largă:** riscă tocmai
  decalajul pe care exemplul agenției federale de mai sus l-a descoperit abia
  după construirea unei comparații mai riguroase.

## Model de maturitate

- **Nivelul 1, Inițiere:** Valoarea dezvoltării asistate de IA este evaluată,
  dacă este evaluată, doar prin impresii autoraportate și statistici de
  utilizare ale furnizorului.
- **Nivelul 2, Dezvoltare:** Există unele date despre timpul de ciclu sau
  calitate, dar nu există grup de comparație autentic sau valoare de referință
  istorică și nici analiză segmentată pe sarcini.
- **Nivelul 3, Standardizare:** Un design de comparație autentic (grup de
  control sau valoare de referință istorică), cu măsurare asociată a timpului
  de ciclu și a calității, este aplicat consecvent, segmentat pe tipuri de
  sarcini.
- **Nivelul 4, Gestionare:** Se urmărește contabilitatea completă a timpului de
  ciclu, inclusiv timpul de revizuire și de corectare; afirmațiile
  autoraportate sunt validate sistematic cu date obiective.
- **Nivelul 5, Orchestrare:** Organizația are o înțelegere matură, bazată pe
  dovezi, a locurilor exacte în care asistența IA ajută cu adevărat, care
  informează introducerea țintită, investițiile în instruire și deciziile de
  achiziție, cu un ROI demonstrat și apărabil.

## Idei de discuție

1. Ce comparație autentică, dacă există, avem pentru adoptarea actuală a instrumentelor noastre de IA?
2. Am măsurat împreună timpul de ciclu și calitatea sau avem doar o afirmație de viteză?
3. Ce afirmație autoraportată despre asistența IA ar trebui să validăm cu date obiective?
4. Ce categorie specifică de sarcini arată cele mai puternice dovezi ale valorii reale a asistenței IA pentru noi?
5. Ne-am putea apăra acum investiția în instrumente de IA în fața unei părți interesate financiare sceptice, cu dovezi?

## Concluzii principale

- Măsoară dezvoltarea asistată de IA după **rezultat**, nu după volumul
  producției sau statisticile de utilizare raportate de furnizor.
- Folosește un **grup de comparație autentic sau o valoare de referință
  istorică**, nu doar un instantaneu înainte-și-după, vulnerabil la factori de
  confuzie.
- Măsoară **timpul de ciclu și calitatea împreună**, incluzând întregul flux,
  timpul de revizuire și de corectare, nu doar viteza de generare.
- Tratează **economiile de timp autoraportate drept ipoteză**, nu drept
  concluzie, și validează-le cu date obiective.
- **Segmentează după tipul de sarcină**; o singură cifră agregată ascunde unde
  se concentrează cu adevărat valoarea și unde nu.

## Referințe și lecturi suplimentare

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (disciplina măsurării rezultatelor pe care acest
  subiect o aplică evaluării instrumentelor de IA).
- Cercetările GitHub despre programarea în pereche cu IA și productivitatea
  dezvoltatorilor (cercetare empirică la scară industrială despre rezultatele
  dezvoltării asistate de IA).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck și Jenna Butler, „The SPACE of Developer
  Productivity”, *ACM Queue* (2021) (disciplina de măsurare
  multidimensională pe care acest subiect o aplică unei noi categorii de
  instrumente).
- *How to Measure Anything*, de Douglas W. Hubbard (construirea unor comparații
  apărabile și cuantificarea valorii în condiții de incertitudine reală).
