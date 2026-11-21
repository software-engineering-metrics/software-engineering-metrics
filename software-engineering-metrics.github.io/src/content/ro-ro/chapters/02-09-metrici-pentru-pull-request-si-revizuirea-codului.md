# 2.9 Metrici pentru pull request și revizuirea codului

## Prezentare generală și motivație

[Revizuirea codului](https://en.wikipedia.org/wiki/Code_review) este de obicei cel mai
mare contributor singular la timpul de așteptare din descompunerea timpului de ciclu din
subiectul 2.6 și este, de asemenea, etapa cea mai direct aflată sub controlul propriu al
unei echipe pentru îmbunătățire, spre deosebire de un blocaj comun de platformă sau de o
dependență externă. Acest subiect acoperă metricile specifice care trăiesc în interiorul
etapei de revizuire: timpul până la prima revizuire, dimensiunea pull requestului,
numărul de iterații de revizuire și distribuția încărcării revizorilor, și cum să le
folosești ca să îmbunătățești viteza revizuirii fără a sacrifica beneficiul real de
calitate pe care revizuirea trebuie să-l ofere.

Riscul la care este cel mai atent acest subiect este unul pe care cartea nu l-a
acoperit încă direct: optimizarea vitezei revizuirii poate eroda discret calitatea
revizuirii dacă este urmărită neglijent. O echipă care își înjumătățește timpul până la
prima revizuire aprobând totul cu ștampila a îmbunătățit o metrică distrugând valoarea
reală a practicii. Fiecare recomandare din acest subiect este scrisă având în vedere acest
compromis, pentru că metricile pull requesturilor sunt printre cele mai ușor de manipulat
din această carte într-un fel care arată bine pe un tablou de bord în timp ce face baza de
cod măsurabil mai proastă.

Pentru echipele mari, metricile de revizuire dezvăluie probleme de echilibrare a
încărcării care sunt altfel invizibile: un număr mic de ingineri seniori care absorb o
pondere disproporționată din încărcarea de revizuire, o echipă sau o zonă de cod specifică
unde revizuirile se blochează constant sau un tipar de pull requesturi supradimensionate
care fac revizuirea amănunțită practic imposibilă indiferent de sârguința revizorului.
Aceste tipare se compun la scară mult mai mult decât într-o echipă mică, unde toată lumea
vede dezechilibrul direct fără să aibă nevoie de o metrică care să-l scoată la iveală.

## Principii-cheie

- **Timpul până la prima revizuire este de obicei cea mai mare pârghie, nu amănunțimea
  revizuirii în sine.** Cea mai mare parte a întârzierii vine din faptul că un pull request
  așteaptă să fie privit, nu din durata conversației de revizuire odată începută.
- **Pull requesturile mai mici sunt revizuite mai repede și mai amănunțit, nu doar mai
  repede.** Dimensiunea este un punct de pârghie atât pentru viteză, cât și pentru
  calitate, simultan.
- **Viteza revizuirii și calitatea revizuirii nu sunt automat în tensiune, dar pot fi
  schimbate una pe alta neglijent.** Apără-te explicit de acest schimb.
- **Dezechilibrul încărcării revizorilor este frecvent și de obicei invizibil fără o
  metrică.** Un număr mic de persoane absorb adesea o pondere disproporționată.
- **Aceste metrici sunt expuse riscului de manipulare prin ștampilare.** O aprobare
  rapidă fără examinare reală anulează întregul scop al revizuirii.

## Recomandări

### Urmărește timpul până la prima revizuire ca metrică principală de viteză

Măsoară intervalul de la deschiderea unui pull request până la primul comentariu
substanțial sau la aprobarea unui revizor, instrumentat automat din platforma ta de
control al versiunilor. Acesta este de obicei contributorul dominant la timpul de
așteptare din etapa de revizuire (subiectul 2.5, subiectul 2.6), iar îmbunătățirea lui,
prin norme mai clare de atribuire a revizuirilor, practici de notificare sau blocuri
dedicate de timp pentru revizuire, produce de obicei cea mai mare îmbunătățire singulară a
timpului de ciclu general disponibilă unei echipe.

### Urmărește dimensiunea pull requestului și încurajează activ modificările mai mici

Măsoară liniile modificate sau fișierele atinse pe pull request și tratează o dimensiune
mediană persistent mare ca pe un semnal care merită abordat direct. Pull requesturile mai
mici sunt revizuite mai repede, revizuite mai amănunțit (un revizor poate ține efectiv
întreaga modificare în cap) și sunt mai ușor de anulat dacă ceva merge prost, legându-se
direct de principiul dimensiunii loturilor din spatele frecvenței implementărilor din
subiectul 2.10. Încurajează împărțirea modificărilor mari într-o secvență de pull
requesturi mai mici, revizuibile independent, oriunde munca o permite.

### Monitorizează explicit distribuția încărcării revizorilor

Urmărește numărul de revizuiri finalizate pe persoană pe o fereastră glisantă și urmărește
în special un număr mic de persoane care absorb o pondere disproporționată. Acest tipar
este frecvent, cade adesea pe inginerii cei mai seniori sau cei mai de încredere și creează
atât un blocaj (disponibilitatea lor plafonează debitul de revizuire al întregii echipe),
cât și un risc de epuizare (subiectul 3.2 tratează metricile de bunăstare mai în
profunzime). Rotește deliberat responsabilitatea revizuirii, în loc să o lași să se
concentreze implicit în jurul celui care răspunde cel mai repede.

### Apără-te explicit de riscul de manipulare prin ștampilare

Asociază timpul până la prima revizuire cu un semnal de calitate: rata defectelor sau a
incidentelor urmărite până la modificări aprobate cu zero comentarii de revizuire sau rata
remedierilor după integrare necesare pentru cod revizuit recent. O echipă care își
îmbunătățește viteza revizuirii aprobând fără examinare reală ar trebui să vadă această
gardă degradându-se, exact principiul asocierii din subiectul 1.2 aplicat acestei familii
specifice de metrici. Nu urmări niciodată viteza revizuirii fără această contra-metrică în
vedere.

### Folosește numărul de iterații de revizuire ca să identifici frecarea, nu ca să judeci indivizi

Numărul de runde de revizuire prin care trece un pull request înainte de integrare poate
semnala o frecare reală, cerințe neclare, dezacord asupra abordării, așteptări
inconsecvente de stil, care merită investigată la nivel de proces. Evită folosirea acestui
număr ca să judeci direct autori sau revizori individuali; un număr mare de iterații este mai
des un semnal de sistem sau de comunicare decât unul personal, iar tratarea lui ca fișă de
scor individuală riscă exact deriva evaluativă împotriva căreia avertizează subiectul 1.1.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Optimizare exclusiv pentru timpul până la prima revizuire | Semnal rapid și clar, ușor de instrumentat | Poate stimula o revizuire superficială, cu ștampila, dacă nu este păzită |
| Optimizare exclusiv pentru reducerea dimensiunii pull requestului | Îmbunătățește simultan viteza și amănunțimea | Nu toată munca se împarte curat în incremente mici |
| Rotirea uniformă a încărcării de revizuire | Reduce blocajul și riscul de epuizare | Poate încetini revizuirea codului specializat, greu de revizuit, care cere expertiză anume |
| Concentrarea revizuirii la inginerii seniori | Expertiză profundă de domeniu aplicată consecvent | Creează un blocaj și un risc de epuizare în timp |

Tensiunea centrală este **viteză versus profunzimea examinării**. Fiecare tehnică din acest
subiect pentru accelerarea revizuirii, un prim răspuns mai rapid, pull requesturi mai mici,
încărcare de revizori mai distribuită, poartă un anumit risc de a sacrifica examinarea reală
dacă este urmărită fără garda de calitate pe care o recomandă acest subiect. Rezolvă
tensiunea asociind fiecare metrică de viteză cu un semnal de calitate, urmărit pe aceeași
perioadă, astfel încât o echipă să poată deosebi o îmbunătățire autentică a procesului de un
standard de revizuire care se erodează discret.

## Întrebări de discutat cu echipa ta

1. **Care este timpul nostru real până la prima revizuire și cât din timpul de ciclu general
   consumă etapa de revizuire?** Extrage numărul real, în loc să te bazezi pe impresie;
   timpul de așteptare la revizuire este adesea mai mare decât presupun echipele, tocmai
   pentru că este ușor de subestimat timpul petrecut așteptând, nu lucrând activ.

2. **Care este dimensiunea noastră mediană a pull requestului și cât din întârzierea
   revizuirii s-ar micșora dacă dimensiunea ar scădea?** Pull requesturile mari sunt atât mai
   lente de revizuit, cât și mai predispuse să primească o revizuire superficială, pur și
   simplu pentru că un revizor nu poate ține întregul în cap deodată. Privește distribuția
   reală a dimensiunilor, nu doar mediana.

3. **Este încărcarea de revizuire concentrată la un număr mic de persoane și ce s-ar întâmpla
   cu debitul nostru de revizuire dacă una dintre ele ar fi indisponibilă două săptămâni?**
   Întrebarea scoate la iveală simultan un risc de blocaj și un risc de epuizare. Extrage
   date reale despre încărcarea revizorilor, în loc să te bazezi pe impresie.

4. **Am îmbunătățit vreodată o metrică de viteză a revizuirii într-un fel care, privind
   înapoi, a redus examinarea reală?** Fii onest aici; este exact riscul de ștampilare pe
   care îl numește acest subiect și este ușor să aluneci în el fără nicio decizie
   deliberată.

5. **Ce semnalează de obicei un număr mare de iterații de revizuire în echipa noastră:
   dezacord real, cerințe neclare sau așteptări inconsecvente de stil?** Privește un eșantion
   de pull requesturi cu numere neobișnuit de mari de iterații și diagnostichează tiparul
   real, în loc să presupui că reflectă prost asupra autorului sau a revizorului.

6. **Avem o gardă de calitate asociată metricilor noastre de viteză a revizuirii sau urmărim
   viteza izolat?** Dacă răspunsul onest este că nu există o astfel de gardă, merită să
   închizi această lacună înainte de a împinge mai departe viteza revizuirii, conform
   principiului asocierii din subiectul 1.2.

## Perspectiva sectorială

**Startup.** Revizuirea este adesea rapidă implicit într-o echipă mică, uneori aproape prea
rapidă, revizuire cu un singur aprobator și examinare minimă pentru că toți au încredere în
toți. Riscul de urmărit pe măsură ce echipa crește este ca calitatea revizuirii să nu
crească odată cu dimensiunea echipei, pentru că încrederea informală care a mers pentru
cinci ingineri nu merge automat pentru cincizeci.

**Afacere mică.** Cele mai multe platforme de control al versiunilor raportează din oficiu
statistici de timp până la integrare și de număr de revizuiri; folosește-le în loc să
construiești instrumentare proprie. Principala disciplină care merită adoptată este pur și
simplu observarea dacă încărcarea de revizuire s-a concentrat discret pe una sau două
persoane pe măsură ce echipa a crescut.

**Companie mare.** Dezechilibrul încărcării revizorilor și blocajele de cunoaștere
specializată sunt deosebit de frecvente aici, unde expertiza profundă de domeniu într-un
sistem critic poate concentra responsabilitatea de revizuire pe un grup mic, indiferent de
dimensiunea echipei. Investește în partajare deliberată a cunoașterii și în rotația
revizuirilor ca să răspândești expertiza, reducând atât blocajul, cât și riscul de bus
factor al unei expertize care trăiește în prea puțini oameni.

**Administrație publică.** Procesele de revizuire poartă aici adesea o greutate de
conformitate alături de obiectivele de calitate, ceea ce poate face pull requesturile mai
mari și revizuirile mai lente prin construcție. Unde cerințele reale de conformitate impun
o revizuire amănunțită, concentrează efortul de îmbunătățire pe reducerea timpului de
așteptare (atribuire mai rapidă a revizuirilor, triere mai clară) în loc să compromiți
profunzimea reală a revizuirii, și documentează explicit compromisul dacă examinarea trebuie
să rămână grea din motive de reglementare.

## Exemple

**Companie mare.** Organizația de inginerie a unei companii de securitate cibernetică a
constatat că o mână de ingineri principali finalizau peste 40% din toate revizuirile de cod
dintr-o organizație de două sute de oameni, un dezechilibru pe care nimeni nu-l măsurase
direct până când au fost extrase datele despre încărcarea revizorilor. Această concentrare
era atât un blocaj, pentru că disponibilitatea acelor ingineri plafona debitul de revizuire
al întregii organizații, cât și un risc de epuizare semnalat separat de un sondaj de
implicare (subiectul 3.2). Organizația a introdus un program structurat de rotație a
revizuirilor, asociat cu sesiuni țintite de partajare a cunoașterii, iar în două trimestre
încărcarea de revizuire s-a răspândit pe un grup mult mai larg, timpul până la prima
revizuire îmbunătățindu-se ca efect secundar direct al blocajului redus.

**Administrație publică.** Echipa de inginerie a unei autorități fiscale, sub presiunea de a
îmbunătăți viteza de livrare, a stabilit ținta de a înjumătăți timpul până la prima
revizuire. Într-un trimestru ținta a fost atinsă, dar un audit ulterior de calitate a găsit o
creștere accentuată a pull requesturilor de remediere a defectelor după integrare,
concentrate în modificări aprobate cu un singur comentariu scurt. Remediul echipei a asociat
ținta de viteză cu o gardă explicită de calitate, rata remedierilor după integrare
necesare în două săptămâni de la o revizuire, și a reinstruit echipa asupra a ce cerea de
fapt o revizuire substanțială, restabilind examinarea reală și păstrând cea mai mare parte
din îmbunătățirea de viteză venită din atribuirea mai bună a revizuirilor și din pull
requesturi mai mici.

## Argumentul de business: motivații, ROI și TCO

Randamentul unor metrici de revizuire bine gestionate este o livrare mai rapidă fără
sacrificarea calității, o combinație rară: cele mai multe îmbunătățiri ale livrării schimbă
undeva viteza pe risc, dar îmbunătățirile din etapa de revizuire, pull requesturi mai mici,
distribuție mai bună a încărcării, un prim răspuns mai rapid, îmbunătățesc cu adevărat ambele
simultan când sunt urmărite cu garda de calitate pe care o recomandă acest subiect. Exemplul
securității cibernetice de mai sus este tipic: remedierea unui blocaj a îmbunătățit viteza
în timp ce calitatea de fond a revizuirii s-a îmbunătățit, dacă ceva, pe măsură ce expertiza
s-a răspândit mai larg.

Costul total de proprietate este redus: cele mai multe dintre aceste metrici vin direct din
datele existente ale platformei de control al versiunilor, cu instrumentare suplimentară
minimă, iar schimbările de proces spre care indică, rotația revizuirilor, încurajarea
pull requesturilor mai mici, costă mai ales disciplină, nu investiții în unelte.

## Anti-modele și capcane

- **Optimizarea timpului până la prima revizuire fără o gardă de calitate asociată:** invită
  la aprobare cu ștampila care anulează scopul revizuirii.
- **Ignorarea concentrării încărcării revizorilor:** creează atât un blocaj, cât și un risc
  de epuizare care rămâne invizibil până este măsurat.
- **Tratarea numărului de iterații de revizuire ca fișă de scor individuală:** este mai des
  un semnal de sistem sau de comunicare decât unul personal.
- **Acceptarea pull requesturilor persistent mari ca inevitabile:** cele mai multe
  modificări mari pot fi împărțite mai departe decât presupun inițial echipele.
- **Aplicarea unei profunzimi uniforme a revizuirii indiferent de riscul modificării:**
  irosește examinare pe modificări cu risc mic, subexaminând potențial pe cele cu risc mare.
- **Măsurarea vitezei revizuirii fără a verifica vreodată dacă examinarea reală a scăzut
  odată cu ea:** cea mai frecventă cale prin care această familie de metrici este manipulată
  neintenționat.

## Model de maturitate

- **Nivelul 1, Inițiere:** Metricile de revizuire nu sunt urmărite; distribuția încărcării de
  revizuire și dimensiunea pull requestului sunt invizibile.
- **Nivelul 2, Dezvoltare:** Există unele date de viteză a revizuirii din valorile implicite
  ale platformei, dar nu există gardă de calitate și nici gestionare activă a încărcării
  revizorilor.
- **Nivelul 3, Standardizare:** Timpul până la prima revizuire, dimensiunea pull requestului
  și încărcarea revizorilor sunt urmărite consecvent, cu o gardă explicită de calitate
  asociată îmbunătățirilor de viteză.
- **Nivelul 4, Gestionare:** Încărcarea revizorilor este reechilibrată activ prin rotație și
  partajarea cunoașterii; tiparele numărului de iterații sunt investigate la nivel de
  proces, nu individual.
- **Nivelul 5, Orchestrare:** Metricile etapei de revizuire informează direct investițiile în
  proces, iar organizația poate demonstra o îmbunătățire simultană atât a vitezei revizuirii,
  cât și a rezultatelor de calitate legate de revizuire pe o perioadă susținută.

## Idei de discuție

1. Care este timpul nostru median actual până la prima revizuire și unde se duce de fapt acel timp?
2. Este încărcarea noastră de revizuire concentrată pe un număr mic de persoane și care este riscul dacă una este indisponibilă?
3. Am îmbunătățit vreodată viteza revizuirii în detrimentul examinării reale, chiar și neintenționat?
4. Care este dimensiunea noastră mediană a pull requestului și cu cât mai mici ar putea fi în mod realist cele mai multe modificări?
5. Tratăm un număr mare de iterații de revizuire ca pe un semnal de sistem sau ca pe o judecată individuală?

## Concluzii principale

- **Timpul până la prima revizuire** este de obicei cea mai mare pârghie singulară din
  etapa de revizuire, mai mult decât durata conversației de revizuire în sine.
- **Pull requesturile mai mici** îmbunătățesc simultan viteza și amănunțimea revizuirii.
- **Dezechilibrul încărcării revizorilor** este frecvent și de obicei invizibil fără măsurare
  directă; creează atât un blocaj, cât și un risc de epuizare.
- Asociază fiecare metrică de viteză a revizuirii cu o **gardă explicită de calitate** ca să
  prinzi riscul de manipulare prin ștampilare, spre care este deosebit de predispusă această
  familie de metrici.
- Folosește **numărul de iterații de revizuire** ca să diagnostichezi frecarea la nivel de
  sistem, nu ca să judeci autori sau revizori individuali.

## Referințe și lecturi suplimentare

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (practicile de revizuire a codului și relația lor cu
  performanța livrării).
- Cercetarea *Modern Code Review* a lui Alberto Bacchelli și Christian Bird (studiu
  empiric al practicilor de revizuire a codului la scară largă).
- *Peer Reviews in Software: A Practical Guide*, de Karl E. Wiegers (proiectarea
  procesului de revizuire și compromisurile lui).
- *The Principles of Product Development Flow*, de Donald G. Reinertsen (raționamentul
  despre dimensiunea loturilor aplicat dimensionării pull requesturilor).
