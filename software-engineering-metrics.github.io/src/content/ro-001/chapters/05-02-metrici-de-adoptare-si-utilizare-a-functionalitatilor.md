# 5.2 Metrici de adoptare și utilizare a funcționalităților

## Prezentare generală și motivație

**Adoptarea unei funcționalități** măsoară dacă oamenii pentru care a fost
construită funcționalitatea o folosesc cu adevărat, în ce proporție și dacă
folosirea persistă în timp. Este, într-un sens foarte direct, verificarea de
realitate a tot ce măsoară Părțile 2–4 ale cărții: o organizație poate livra
des, poate menține o experiență excelentă a dezvoltatorilor și poate trimite
în producție cod impecabil testat, și totuși poate construi lucruri pe care
nu le vrea nimeni. Datele de adoptare sunt locul unde o organizație de
inginerie afla dacă producția ei s-a legat de vreun rezultat real, adică exact
distincția intrare-producție-rezultat introdusă în subiectul 1.3, aplicată
celui mai concret caz din această carte: o funcționalitate anume, livrată.

Preocuparea centrală a acestui subiect este că datele de adoptare, mai mult
decât aproape orice altă familie de metrici din carte, se măsoară ușor într-un
fel care flatează în loc să informeze. O funcționalitate poate arăta o
adoptare inițială impresionantă doar din curiozitate sau din expunere forțată
(o fereastră modală care apare indiferent dacă utilizatorul o vrea sau nu),
în timp ce livrarea autentică și susținută de valoare, măsurată prin faptul că
oamenii continuă să o folosească după ce se risipește noutatea, spune o poveste
complet diferită. Deosebirea adoptării autentice de un vârf trecător este
provocarea tehnică centrală a acestui subiect, iar greșeala de aici duce
curent la organizații care sărbătoresc funcționalități ce eșuează în tăcere și
le abandonează pe cele care abia începeau să-și găsească publicul.

Pentru echipele mari, datele de adoptare sunt cele care fac prioritizarea
foii de parcurs să se bazeze pe dovezi, nu pe cine pledează cel mai convingător
pentru munca propriei echipe. Companiile mari care gestionează portofolii mari
de produse au nevoie de date de adoptare ca să vadă care investiții își
merită banii; organizațiile guvernamentale care construiesc servicii digitale
pentru cetățeni au nevoie de ele ca să demonstreze că investiția publică a
produs servicii pe care oamenii chiar le folosesc, nu doar servicii care
există tehnic.

## Principii-cheie

- **Adoptarea inițială și adoptarea susținută sunt semnale diferite.** Un vârf
  din curiozitate sau din expunere forțată nu este același lucru cu o livrare
  autentică și durabilă de valoare.
- **Adoptarea trebuie măsurată față de publicul pentru care a fost construită
  funcționalitatea**, nu față de întreaga bază de utilizatori, fără
  discernământ.
- **O funcționalitate cu adoptare scăzută nu este automat un eșec.** Poate fi
  descoperită prost, țintită prost sau pur și simplu nouă; investighează
  înainte de a concluziona.
- **Retenția utilizării contează mai mult decât un singur instantaneu al
  adoptării.** Urmărește dacă oamenii care au încercat o funcționalitate
  continuă să revină la ea.
- **Datele de adoptare sunt expuse manipulării prin expunere forțată sau
  tipare întunecate.** Un număr umflat prin faptul că funcționalitatea este
  greu de evitat nu este un semnal autentic.

## Recomandări

### Deosebește încercarea inițială de retenția susținută

Urmărește două numere separate: procentul din publicul tău țintă care
încearcă o funcționalitate cel puțin o dată (adoptarea inițială) și procentul
care încă o folosește după o perioadă semnificativă, de exemplu patru sau opt
săptămâni (adoptarea reținută). O funcționalitate cu încercare inițială mare
și retenție mică sugerează că descoperirea a funcționat, dar funcționalitatea
în sine nu a oferit destulă valoare ca oamenii să revină, un diagnostic foarte
diferit, și o reparație foarte diferită, față de încercarea inițială mică cu
retenție mare, care sugerează o funcționalitate cu adevărat valoroasă, despre
care nu știu destui oameni.

### Definește precis publicul țintă înainte de a măsura adoptarea

Adoptarea măsurată față de întreaga ta bază de utilizatori poate induce în
eroare dacă o funcționalitate a fost gândită doar pentru un segment anume: o
funcționalitate pentru administratori de companii mari, măsurată față de o
bază formată mai ales din utilizatori individuali, va părea mereu că are o
adoptare groaznică, indiferent cât de bine îi servește pe cei pentru care a
fost construită. Definește explicit publicul vizat înainte de lansare și
măsoară adoptarea față de acel numitor, nu față de numărul total de
utilizatori.

### Investighează adoptarea scăzută înainte de a concluziona că funcționalitatea a eșuat

Un număr scăzut de adoptare are mai multe cauze posibile, care cer răspunsuri
foarte diferite: funcționalitatea chiar nu e valoroasă; funcționalitatea e
valoroasă, dar greu de descoperit (utilizatorii nu știu că există);
funcționalitatea e valoroasă, dar slab explicată (utilizatorii o văd, dar nu
îi înțeleg rostul); sau fereastra de măsurare e pur și simplu prea scurtă
pentru ca o funcționalitate cu adoptare mai lentă să-și fi găsit încă publicul.
Investighează care dintre ele se aplică înainte să decizi dacă investești
în continuare, reproiectezi sau retragi funcționalitatea.

### Fii atent la adoptarea umflată prin expunere forțată sau [tipare întunecate](https://en.wikipedia.org/wiki/Dark_pattern)

Un număr de adoptare generat de faptul că o funcționalitate e greu de evitat,
un flux de integrare intruziv, o fereastră modală pe care utilizatorul trebuie
s-o închidă, o setare implicită greu de schimbat, nu măsoară livrarea
autentică de valoare, iar sărbătorirea lui ca și cum ar fi autentic repetă, în
versiune de produs, tiparul de manipulare prin substituție din subiectul 1.2.
Asociază numerele brute de adoptare cu un semnal de satisfacție sau de tip Net
Promoter pentru funcționalitatea respectivă, acolo unde e fezabil, astfel încât
expunerea forțată care nu se traduce în satisfacție autentică să fie prinsă,
nu sărbătorită.

### Leagă tendințele de adoptare de decizii concrete de produs și de inginerie

Când adoptarea crește sau scade pe neașteptate, urmărește schimbarea până la o
decizie anume, o modificare de interfață, o schimbare a setărilor implicite, o
campanie de marketing, o îmbunătățire sau o regresie de performanță, în loc să
tratezi mișcarea ca pe un mister neexplicat. Astfel datele de adoptare se
leagă de învățare concretă de produs și de inginerie, închizând bucla dintre
o schimbare anume și efectul ei măsurat asupra utilizării reale.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Măsurare față de întreaga bază de utilizatori | Simplă, un singur numitor | Înșelătoare pentru funcționalități vizând un segment anume |
| Măsurare față de un public țintă definit | Reflectare corectă și exactă a acoperirii dorite | Cere definirea deliberată a publicului înainte de lansare |
| Doar încercarea inițială | Semnal rapid, disponibil imediat după lansare | Ratează dacă funcționalitatea oferă valoare durabilă |
| Încercare inițială plus retenție | Deosebește curiozitatea de valoarea autentică | Cere mai mult timp (săptămâni) până apare imaginea completă |

Tensiunea centrală este **viteza față de onestitate**. Datele despre
încercarea inițială sunt disponibile aproape imediat după lansare și răspund
presiunii organizaționale de a raporta rezultate timpurii, dar nu pot, singure,
să deosebească curiozitatea sau expunerea forțată de valoarea autentică și
durabilă. Rezolvă tensiunea raportând datele de încercare inițială devreme și
etichetate clar drept preliminare, angajându-te totodată public la o citire de
retenție ulterioară, la un interval fix, stabilit dinainte, ca entuziasmul
timpuriu să nu se osifice într-o poveste de succes neexaminată înainte ca
semnalul real să aibă timp să apară.

## Întrebări de discutat cu echipa ta

1. **Pentru cea mai recentă funcționalitate livrată, cunoaștem separat
   încercarea inițială și utilizarea reținută sau doar un singur număr
   combinat?** Dacă există doar un număr combinat, lacuna ascunde exact
   distincția dintre curiozitate și valoare pe care acest subiect o consideră
   centrală.

2. **Publicul țintă pentru această funcționalitate a fost definit explicit
   înainte de lansare și măsurăm adoptarea față de acel grup anume?**
   Verifică dacă numitorul tău actual de adoptare corespunde celor pentru care
   a fost construită funcționalitatea sau este diluat prin măsurarea față de o
   populație mai largă, irelevantă.

3. **Pentru o funcționalitate cu adoptare scăzută, am investigat care dintre
   mai multele cauze posibile, valoare mică, descoperire slabă, explicație
   slabă, timp insuficient, se aplică de fapt?** Parcurge această listă de
   diagnostic pentru o funcționalitate reală, actuală, cu adoptare scăzută, în
   loc să te oprești la „probabil nu e valoroasă”.

4. **Este vreo parte din numărul nostru raportat de adoptare umflată prin
   expunere forțată, o setare implicită intruzivă sau o fereastră modală ce
   trebuie închisă, în loc de utilizare autentică, voluntară?** Fii sincer
   aici; este un tipar comun și ușor de căzut în el, mai ales sub presiunea de a
   arăta rezultate pozitive timpurii.

5. **Când adoptarea unei funcționalități s-a mișcat semnificativ, am putut
   urmări mișcarea până la o schimbare anume pe care am făcut-o?** Dacă
   răspunsul e de obicei „nu suntem siguri”, lacuna limitează cât poate învăța
   organizația ta, în timp, din propriile date de adoptare.

6. **Asociem numerele de adoptare cu vreun semnal de satisfacție pentru aceeași
   funcționalitate sau urmărim doar utilizarea brută?** Un număr mare de
   adoptare asociat cu satisfacție scăzută este un semn de alarmă pe care
   utilizarea brută singură l-ar rata complet.

## Perspectiva sectorială

**Startup.** Adoptarea funcționalităților este adesea cel mai important semnal
pe care îl are o companie tânără, strâns legat de potrivirea produs-piață în
sine. Urmărește retenția în mod special, nu doar încercarea inițială, încă de
la prima lansare de funcționalitate, pentru că deosebirea valorii autentice de
curiozitatea timpurie este critică atunci când supraviețuirea companiei poate
depinde de acest diagnostic corect.

**Afacere mică.** Majoritatea platformelor de analiză raportează date de bază
despre utilizare cu o configurare minimă; disciplina principală este să îți
definești clar publicul țintă înainte de măsurare, nu să raportezi adoptarea
față de întreaga ta bază de clienți, indiferent pentru cine a fost construită
efectiv o funcționalitate.

**Companie mare.** Datele de adoptare la această scară sunt esențiale pentru
prioritizarea corectă, bazată pe dovezi, a foii de parcurs într-un portofoliu
mare de produse, iar disciplina de a deosebi încercarea inițială de retenția
susținută contează și mai mult aici, pentru că o bază de utilizatori destul de
mare poate produce un vârf inițial impresionant pentru aproape orice lansare,
indiferent de valoarea reală.

**Administrație publică.** Adoptarea unui serviciu digital pentru cetățeni este
o măsură directă și concretă a faptului că investiția publică s-a tradus în
beneficiu public real și este adesea o metrică mult mai convingătoare pentru un
organism de supraveghere decât un număr de livrări sau de activitate. Măsoară
adoptarea față de populația pe care serviciul a fost construit să o servească
și fii sincer cu privire la barierele (cultură digitală, acces, conștientizare)
care ar putea explica adoptarea scăzută dincolo de designul serviciului însuși.

## Exemple

**Companie mare.** O companie de software de management de proiecte a lansat o
nouă funcționalitate de editare colaborativă și a sărbătorit o impresionantă
rată de 60% de încercare inițială în primele două săptămâni. O citire de
retenție la opt săptămâni a arătat că doar 8% dintre acești încercători
inițiali mai foloseau funcționalitatea în mod regulat, relevând că rata mare de
încercare fusese generată aproape în întregime de un tooltip de integrare
proeminent și greu de închis, nu de un interes autentic și susținut. Analiza
feedbackului calitativ de la încercătorii timpurii care încetaseră să o
folosească a scos la iveală o problemă concretă și reparabilă de
utilizabilitate, un tipar de interacțiune neintuitiv, pe care o reproiectare
țintită a rezolvat-o, iar utilizarea reținută aproape s-a triplat după
corecție, deși nu s-a apropiat niciodată de numărul înșelător de mare al
încercării inițiale.

**Administrație publică.** Un serviciu național de ocupare a forței de muncă a
lansat un nou instrument online de potrivire a locurilor de muncă și a raportat
inițial adoptarea față de întreaga bază de utilizatori înregistrați ai
agenției, obținând un procent descurajant de mic, care amenința continuarea
finanțării programului. O analiză revizuită, măsurând adoptarea special față
de subsetul utilizatorilor înregistrați care căutau activ un loc de muncă în
industriile țintă ale instrumentului, adică publicul real vizat, a arătat o
rată de adoptare substanțial mai mare și mai exactă. Combinat cu o campanie de
informare țintită, special pentru acel public definit, și cu o citire ulterioară
a retenției care arăta o utilizare susținută puternică în rândul celor care au
adoptat instrumentul, programul și-a asigurat continuarea finanțării pe baza
metricii corectate și onest țintite, nu pe baza cifrei originale, diluată în
mod înșelător.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea măsurării riguroase a adoptării funcționalităților este
investiția în foaia de parcurs bazată pe dovezi: o organizație care poate
deosebi valoarea autentică și reținută de încercarea inițială, generată de
curiozitate, poate investi cu încredere mai departe în funcționalitățile care
funcționează cu adevărat și poate redirecționa efortul de la cele care nu
funcționează, în loc să alerge după un vârf inițial înșelător sau să
abandoneze prematur o funcționalitate cu adevărat valoroasă, dar lentă la
descoperit.

Costul total de proprietate este în mare parte instrumentarea analitică, de
obicei deja disponibilă în majoritatea platformelor moderne de analiză de
produs, plus disciplina de a defini explicit publicurile țintă și de a se
angaja la citiri ulterioare de retenție, în loc să se oprească la un semnal
timpuriu și incomplet. Disciplina aceasta costă puțin și previne greșeala mult
mai scumpă de a interpreta greșit fie un succes fals, fie un eșec fals.

## Anti-modele și capcane

- **Raportarea doar a încercării inițiale, niciodată a retenției:** nu poate
  deosebi curiozitatea sau expunerea forțată de valoarea autentică și durabilă.
- **Măsurarea adoptării față de numitorul greșit:** diluează sau umflă semnalul
  pentru funcționalitățile vizând un segment anume de public.
- **Concluzia că o funcționalitate a eșuat fără investigarea cauzei concrete**
  a adoptării scăzute: riscă abandonarea unei funcționalități cu adevărat
  valoroase, dar descoperite prost sau lansate la un moment nepotrivit.
- **Sărbătorirea adoptării umflate prin expunere forțată sau tipare
  întunecate:** o instanță, pe partea de produs, a manipulării prin substituție
  din subiectul 1.2.
- **Netrasarea mișcării adoptării până la decizii concrete:** limitează
  învățarea organizației din propriile date.
- **Urmărirea utilizării fără niciun semnal asociat de satisfacție:** ratează
  cazul în care utilizarea mare coexistă cu valoare autentică sau satisfacție
  scăzută.

## Model de maturitate

- **Nivelul 1, Inițiere:** Adoptarea nu este măsurată sau se raportează doar un
  singur număr timpuriu, de încercare, fără retenție.
- **Nivelul 2, Dezvoltare:** Există o oarecare urmărire a adoptării, dar
  publicurile țintă nu sunt definite precis, iar retenția este măsurată
  inconsecvent.
- **Nivelul 3, Standardizare:** Atât încercarea inițială, cât și adoptarea
  reținută sunt urmărite consecvent față de un public țintă definit precis,
  pentru fiecare funcționalitate majoră.
- **Nivelul 4, Gestionare:** Funcționalitățile cu adoptare scăzută sunt
  investigate sistematic pentru cauza concretă înainte de decizia de a
  reproiecta sau a retrage; adoptarea este asociată cu date de satisfacție.
- **Nivelul 5, Orchestrare:** Datele de adoptare informează direct și curent
  prioritizarea foii de parcurs și deciziile de investiții, iar organizația
  poate urmări cu încredere mișcări concrete ale adoptării până la decizii
  concrete de produs și de inginerie.

## Idei de discuție

1. Care este o funcționalitate recentă la care încercarea inițială și adoptarea reținută au spus povești foarte diferite?
2. Publicul țintă al ultimei noastre funcționalități a fost definit precis înainte de lansare sau abia după?
3. Ce funcționalitate cu adoptare scăzută merită o investigație onestă a cauzei rădăcină înainte să-i decidem soarta?
4. Este vreo parte din raportarea noastră actuală de adoptare umflată prin expunere forțată?
5. Ce ar dezvălui asocierea datelor de adoptare cu date de satisfacție despre cea mai folosită funcționalitate a noastră?

## Concluzii principale

- Deosebește **încercarea inițială de retenția susținută**; un vârf din
  curiozitate sau din expunere forțată nu este valoare autentică și durabilă.
- Măsoară adoptarea față de un **public țintă definit precis**, nu față de o
  bază mai largă de utilizatori, irelevantă.
- **Investighează cauza concretă** a adoptării scăzute înainte de a concluziona
  că o funcționalitate a eșuat; mai multe cauze foarte diferite cer răspunsuri
  foarte diferite.
- Fii atent la adoptarea **umflată prin expunere forțată sau tipare
  întunecate** și asociază adoptarea cu un **semnal de satisfacție** ca să o
  prinzi.
- **Urmărește mișcarea adoptării până la decizii concrete**, ca să transformi
  datele în învățare organizațională autentică.

## Referințe și lecturi suplimentare

- *Lean Analytics*, de Alistair Croll și Benjamin Yoskovitz (metrici
  acționabile față de metrici de vanitate, aplicate datelor de utilizare a
  produsului).
- *Continuous Discovery Habits*, de Teresa Torres (legarea deciziilor de
  produs de dovezile despre rezultatele clienților, inclusiv datele de
  adoptare).
- *Hooked: How to Build Habit-Forming Products*, de Nir Eyal (retenția și
  formarea obiceiurilor, și granița etică dintre valoarea autentică și
  tiparele întunecate).
- *Measure What Matters*, de John Doerr (stabilirea de obiective orientate spre
  rezultate, aplicabilă fixării țintelor de adoptare).
