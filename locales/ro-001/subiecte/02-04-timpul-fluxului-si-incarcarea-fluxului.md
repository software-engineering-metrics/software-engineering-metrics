# 2.4 Timpul fluxului și încărcarea fluxului

## Prezentare generală și motivație

**Timpul fluxului** este timpul total scurs din momentul în care un element de flux
(subiectul 2.2) intră în fluxul de valoare până când este livrat, măsurând
reactivitatea pe întregul traseu, de la identificarea unei nevoi de business până la
primirea valorii de către un client. **Încărcarea fluxului** este numărul total de
elemente de flux active sau aflate în așteptare în fluxul de valoare la un moment
dat, numele din Flow Framework pentru ceea ce subiectul 2.5 numește muncă în curs.
Împreună, acestea sunt cele două metrici Flow Framework care se leagă cel mai direct
de matematica cozilor, pentru că încărcarea fluxului nu doar se corelează cu timpul
fluxului, ci îl dictează matematic.

Această relație este **[legea lui Little](https://en.wikipedia.org/wiki/Little%27s_law)**,
o demonstrație din teoria cozilor (subiectul 2.7 o tratează în întregime) care
afirmă că numărul mediu de elemente dintr-un sistem stabil este egal cu rata medie de
sosire înmulțită cu timpul mediu pe care îl petrece fiecare element în sistem.
Aplicată aici: încărcarea fluxului este egală cu rata de sosire înmulțită cu timpul
fluxului. Acesta este cel mai util fapt din acest subiect, pentru că transformă un
argument care era calitativ, „suntem prea supraîncărcați, lucrurile durează prea
mult”, într-unul cantitativ și demonstrabil pe care un lider de business nu-l poate
respinge ușor: dacă încărcarea fluxului continuă să crească în timp ce rata de
sosire rămâne plată, timpul fluxului este garantat matematic să crească și el, nu
doar probabil.

Pentru echipele mari, acesta este adesea cel mai convingător număr din întregul
cadru. Un lider de business care rezistă ideii de a spune nu muncii noi, pentru că
fiecare cerere pare justificată în parte, va accepta adesea că supraîncărcarea unui
flux de valoare încetinește demonstrabil fiecare element deja aflat în el, odată ce
încărcarea fluxului este urmărită și relația cu timpul fluxului este arătată direct,
nu argumentată abstract. Organizațiile mari care jonglează cu multe inițiative
strategice concurente și programele guvernamentale care conduc zeci de fluxuri de
lucru paralele depind amândouă de această demonstrație, nu doar de intuiția din
spatele ei, ca să justifice refuzul de a porni mai multă muncă deodată.

## Principii-cheie

- **Încărcarea fluxului dictează matematic timpul fluxului, prin legea lui
  Little.** Nu este corelație; este o demonstrație valabilă pentru orice flux de
  valoare stabil.
- **Timpul fluxului cuprinde întregul flux de valoare, nu doar ingineria.** Începe
  când este identificată o nevoie de business, nu când ingineria preia munca,
  lucru pe care timpul de ciclu din subiectul 2.6 îl descompune apoi mai departe.
- **Încărcarea fluxului în creștere este cel mai timpuriu semn de avertizare al
  unui timp al fluxului în creștere.** Pentru că relația este demonstrabilă,
  încărcarea fluxului poate fi urmărită ca indicator anticipativ, nu doar
  descoperită după ce timpul fluxului s-a degradat deja.
- **Punctul de intrare al fluxului de valoare trebuie fixat și documentat.** Locul
  unde pornește ceasul timpului fluxului este o alegere de definiție expusă aceluiași
  risc de manipulare ca orice altă graniță de metrică din această carte.
- **Un lider de business poate acționa direct asupra încărcării fluxului.** Spre
  deosebire de timpul fluxului, care este o măsurătoare întârziată, încărcarea
  fluxului este o pârghie: a spune nu începerii de muncă nouă este o acțiune
  disponibilă azi.

## Recomandări

### Fixează și documentează punctul de intrare al fluxului de valoare înainte de a măsura timpul fluxului

Decide explicit dacă timpul fluxului începe când este identificată prima dată o
nevoie de business, când este aprobată formal sau când ingineria începe munca și
documentează această alegere în felul în care subiectul 1.4 o recomandă pentru orice
cartă a metricilor. Această singură decizie determină dacă timpul fluxului măsoară
reactivitatea autentică de la un capăt la altul sau doar felia mai îngustă pe care o
controlează ingineria, iar schimbarea ulterioară a definiției fără dezvăluire este
riscul central de manipulare al acestui subiect.

### Urmărește încărcarea fluxului continuu, nu periodic

Pentru că încărcarea fluxului este, prin legea lui Little, un indicator anticipativ
al timpului fluxului care va urma, urmărește-o ca pe un număr viu, actualizat continuu,
nu ca pe un instantaneu periodic. O încărcare a fluxului care a urcat deja săptămâni
întregi până când se uită cineva la ea a prelungit deja discret timpul fluxului tot
atât de mult, invizibil, înainte ca metrica să ajungă din urmă.

### Folosește explicit legea lui Little când argumentezi pentru o limită de WIP sau o creștere de capacitate

Când susții începerea a mai puțină muncă simultană, sau adăugarea de capacitate,
prezintă ecuația reală, nu doar recomandarea: încărcarea fluxului este egală cu rata
de sosire înmulțită cu timpul fluxului, deci dacă rata de sosire este aproximativ
fixă, reducerea încărcării fluxului este garantată matematic să reducă timpul
fluxului. Este un argument substanțial mai puternic pentru o parte interesată
sceptică decât o afirmație necuantificată că „suntem prea ocupați”, pentru că este
demonstrabil, nu doar afirmat.

### Separă cauzele de fond ale încărcării fluxului înainte de a propune un remediu

Când încărcarea fluxului este mare, investighează ce tip de element de flux
(subiectul 2.2) o determină de fapt: prea multe funcționalități concurente pornite
deodată, o restanță de defecte netratate sau muncă de risc blocată în așteptarea unei
aprobări comune. Fiecare cauză implică un remediu diferit, iar tratarea lui „încărcarea
fluxului este mare” ca pe o singură problemă nediferențiată tinde să producă un
răspuns generic și ineficient.

### Verifică încrucișat timpul fluxului cu timpul de ciclu ca să izolezi unde apare de fapt întârzierea

Pentru că timpul fluxului cuprinde întregul flux de valoare, iar timpul de ciclu
(subiectul 2.6) acoperă doar porțiunea de inginerie, compară-le direct. O diferență
mare între timpul fluxului și timpul de ciclu înseamnă că cea mai mare parte a
întârzierii apare înainte ca ingineria să vadă munca, în cozi de aprobare, restanțe
de prioritizare sau predări între echipe, ceea ce indică un remediu foarte diferit
de o diferență concentrată în interiorul ingineriei însăși.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Măsurarea timpului fluxului doar de la preluarea de către inginerie | Simplă, se potrivește cu instrumentarea existentă a timpului de ciclu | Ratează întârzierea dinaintea ingineriei, subestimează reactivitatea reală |
| Măsurarea timpului fluxului de la identificarea reală a nevoii de business | Surprinde reactivitatea reală de la un capăt la altul | Cere instrumentarea unor etape din afara controlului direct al ingineriei |
| Instantanee periodice ale încărcării fluxului | Ieftine de calculat ocazional | Ratează valoarea de indicator anticipativ; o încărcare în creștere trece neobservată prea mult timp |
| Urmărirea continuă a încărcării fluxului | Indicator anticipativ viu și acționabil | Cere integrare continuă a uneltelor, nu doar un raport ocazional |

Tensiunea centrală este **sfera de acoperire versus raza de instrumentare**.
Măsurarea timpului fluxului doar de la preluarea de către inginerie este mult mai
ușor de instrumentat, pentru că refolosește datele de timp de ciclu pe care subiectul
2.6 le colectează deja, dar subestimează discret reactivitatea reală ignorând tot ce
se întâmplă înainte ca ingineria să vadă munca. Rezolvă tensiunea pornind cu
măsurătoarea mai îngustă, limitată la inginerie, dacă asta este tot ce poți
instrumenta azi, dar tratează extinderea punctului de start al timpului fluxului în
amonte, spre identificarea nevoii de business și prioritizare, ca pe o prioritate pe
termen scurt, nu ca pe o limitare permanentă.

## Întrebări de discutat cu echipa ta

1. **Unde pornește de fapt azi ceasul timpului nostru al fluxului și cade toată
   organizația de acord că este punctul de pornire corect?** O nepotrivire între
   locul unde părțile interesate presupun că pornește ceasul și locul unde pornește
   de fapt este o sursă frecventă și discretă de neîncredere în metrică. Confirmă că
   definiția documentată se potrivește cu înțelegerea comună.

2. **Am verificat vreodată dacă încărcarea fluxului, rata de sosire și timpul
   fluxului pe care le măsurăm satisfac de fapt legea lui Little?** Dacă nu se
   echilibrează aproximativ, unul dintre cele trei numere este măsurat inconsecvent.
   Parcurge împreună numerele reale, în loc să presupui că verificarea ar trece.

3. **Este încărcarea fluxului urmărită continuu sau ar trece neobservată o creștere
   constantă săptămâni întregi înainte să se uite cineva?** Un indicator anticipativ
   te protejează doar dacă îl urmărește cineva aproape în timp real, nu doar îl
   revizuiește într-un raport trimestrial.

4. **Când crește încărcarea fluxului, putem spune ce tip de element de flux o
   determină de fapt sau se citește ca un singur număr nediferențiat?** Un diagnostic
   generic de tipul „suntem supraîncărcați” produce un răspuns generic, adesea
   ineficient. Verifică dacă instrumentarea ta actuală poate atribui de fapt o
   încărcare în creștere unei cauze specifice.

5. **Cât de mare este diferența dintre timpul fluxului și timpul nostru de ciclu și
   sugerează ea că cea mai mare parte a întârzierii apare înainte sau după ce
   ingineria vede munca?** Această comparație dezvăluie adesea că cea mai mare
   oportunitate de îmbunătățire se află în întregime în afara controlului propriu al
   ingineriei.

6. **A îngustat cineva vreodată discret punctul de start al timpului fluxului ca să
   facă numărul să arate mai bine, fără ca schimbarea să fie documentată sau
   dezvăluită?** Acesta este riscul central de manipulare al subiectului, formulat
   direct. Întreabă-te sincer dacă definiția voastră a alunecat vreodată așa.

## Perspectiva sectorială

**Startup.** Încărcarea fluxului este de obicei mică pur și simplu pentru că nu sunt
destui oameni ca să pornească multă muncă simultan, dar aceeași relație matematică se
aplică în clipa în care un fondator sau un inginer șef devine blocaj personal pentru
multe inițiative concurente. Urmărește informal încărcarea fluxului chiar și fără
unelte dedicate, pentru că legea lui Little se aplică indiferent de scară.

**Afacere mică.** O listă simplă și comună cu tot ce este activ în prezent este de
obicei suficientă ca să calculezi încărcarea fluxului fără software dedicat de
gestionare a fluxului de valoare. Obiceiul util este să o verifici suficient de des
ca o creștere să fie prinsă devreme, nu descoperită abia după ce timpul fluxului s-a
degradat vizibil.

**Companie mare.** Aici legea lui Little își câștigă pâinea ca argument, nu doar ca
metrică: o organizație mare care jonglează cu zeci de inițiative strategice
concurente poate folosi relația demonstrabilă dintre încărcarea fluxului și timpul
fluxului ca să facă un caz bazat pe dovezi pentru secvențierea muncii, ceva ce un
argument pur calitativ de tipul „suntem prea ocupați” rareori obține în fața unei
presiuni hotărâte a părților interesate.

**Administrație publică.** Programele pe mai mulți ani acumulează de rutină o
încărcare a fluxului mare și implicită peste multe fluxuri de lucru, fiecare
justificat în parte, fără vizibilitate la nivelul întregii organizații asupra
totalului. Prezentarea directă a legii lui Little, arătând că propria creștere a
timpului fluxului din program este explicată matematic de propria încărcare a
fluxului în creștere, este adesea cea mai clară și mai convingătoare dovadă
disponibilă pentru secvențierea fluxurilor de lucru în loc să le conduci pe toate în
paralel la nesfârșit.

## Exemple

**Companie mare.** Organizația de platformă a unei companii de tehnologie media
conducea douăzeci și două de inițiative strategice concurente, cu o capacitate
realistă pentru aproximativ douăsprezece, o nepotrivire pe care nimeni nu o
cuantificase până când un nou VP de inginerie a cerut direct încărcarea fluxului.
Timpul fluxului pentru inițiativa mediană crescuse cu 40% în anul precedent, o
tendință pe care conducerea o atribuise faptului că „munca devine mai grea”.
Prezentarea legii lui Little alături de numerele reale ale încărcării fluxului și ale
ratei de sosire a arătat că creșterea era explicată complet de încărcarea fluxului în
creștere singură, fără ca o schimbare a dificultății de fond a muncii să fie necesară
pentru a o explica. Organizația a secvențiat inițiativele până la o încărcare
sustenabilă a fluxului, iar timpul fluxului median a scăzut cu aproape o treime în
două trimestre.

**Administrație publică.** Programul de modernizare al unei agenții federale de
gestionare a granturilor acumulase încărcare a fluxului peste zeci de fluxuri de
lucru paralele fără un total urmărit, fiecare sponsor de flux de lucru crezând că
propria inițiativă are resurse adecvate luată izolat. O analiză a biroului de program
folosind legea lui Little a arătat că timpul fluxului agregat al programului, timpul
de la aprobarea unui flux de lucru până la livrarea lui, putea fi prezis aproape
exact doar din încărcarea fluxului agregată, o constatare care i-a convins pe
sponsorii ce rezistaseră de peste un an argumentelor de depriorizare. Programul a
adoptat un plafon explicit al încărcării fluxului, iar fluxurile de lucru noi intră
acum într-o coadă, în loc să înceapă imediat indiferent de încărcarea curentă.

## Argumentul de business: motivații, ROI și TCO

Randamentul urmăririi împreună a încărcării fluxului și a timpului fluxului este un
argument demonstrabil, nu doar convingător, pentru secvențierea muncii în loc de a
conduce totul în paralel. Exemplul companiei de tehnologie media de mai sus, care a
explicat o regresie întreagă a timpului fluxului doar prin încărcarea fluxului, este
tiparul pe care această combinație îl produce fiabil: un argument specific și
cantitativ reușește acolo unde un apel calitativ la a fi „prea ocupat” eșuase
înainte în fața presiunii organizaționale reale de a porni mai multă muncă.

Costul total de proprietate este mic față de puterea ei de convingere: încărcarea
fluxului cere doar o numărătoare vie a elementelor active și în așteptare, iar timpul
fluxului cere instrumentarea punctului de intrare al fluxului de valoare, muncă ce se
amortizează prima dată când împiedică o organizație să se angajeze în mai multe
inițiative concurente decât poate susține capacitatea ei reală.

## Anti-modele și capcane

- **Îngustarea discretă a punctului de start al timpului fluxului ca să flatezi
  numărul:** vectorul de manipulare din centrul acestui subiect. Mutarea startului
  ceasului de la identificarea reală a nevoii de business la un punct mai târziu,
  preluarea de către inginerie, aprobarea formală, micșorează timpul fluxului fără a
  schimba deloc reactivitatea reală și se poate întâmpla suficient de treptat încât
  nicio schimbare singulară să nu pară o manipulare deliberată. Garda de protecție
  este documentarea explicită a punctului de intrare într-o cartă a metricilor
  (subiectul 1.4) și auditarea lui periodică față de definiția documentată, aceeași
  disciplină pe care această carte o cere pentru fiecare graniță de metrică.
- **Măsurarea încărcării fluxului doar periodic:** pierde valoarea ei de indicator
  anticipativ, pentru că o creștere constantă poate trece neobservată săptămâni
  întregi.
- **Tratarea încărcării fluxului ca un singur număr nediferențiat:** ratează ce tip de
  element de flux determină de fapt o supraîncărcare, producând un răspuns generic, nu
  țintit.
- **Ignorarea diferenței dintre timpul fluxului și timpul de ciclu:** ratează dacă
  întârzierea este concentrată înainte sau după inginerie, ceea ce implică remedii
  foarte diferite.
- **Argumentarea pentru mai puțină muncă simultană fără a prezenta explicit legea lui
  Little:** un apel calitativ este mult mai ușor de respins de o parte interesată
  decât o relație cantitativă și demonstrabilă.
- **Presupunerea că legea lui Little se aplică doar la scară mare:** este valabilă
  pentru orice sistem stabil indiferent de mărime, inclusiv pentru o singură persoană
  supraîncărcată.

## Model de maturitate

- **Nivelul 1, Inițiere:** Nici timpul fluxului, nici încărcarea fluxului nu sunt
  urmărite; întârzierea este discutată anecdotic, fără date de susținere.
- **Nivelul 2, Dezvoltare:** Timpul fluxului este urmărit doar de la preluarea de
  către inginerie, iar încărcarea fluxului este verificată periodic, nu continuu.
- **Nivelul 3, Standardizare:** Timpul fluxului este măsurat de la un punct de intrare
  documentat al fluxului de valoare, valabil în toată organizația, iar încărcarea
  fluxului este urmărită continuu ca indicator anticipativ.
- **Nivelul 4, Gestionare:** Legea lui Little este folosită explicit pentru a
  justifica deciziile de capacitate și de secvențiere, iar o încărcare a fluxului în
  creștere este atribuită unui tip specific de element de flux înainte de a propune un
  remediu.
- **Nivelul 5, Orchestrare:** Organizația stabilește plafoane explicite ale încărcării
  fluxului în fluxurile ei de valoare și poate indica decizii concrete de secvențiere,
  sprijinite pe legea lui Little, care au îmbunătățit măsurabil timpul fluxului.

## Idei de discuție

1. Unde pornește de fapt ceasul timpului nostru al fluxului și a alunecat vreodată acea definiție fără documentare?
2. Satisfac aproximativ încărcarea fluxului, rata de sosire și timpul fluxului pe care le măsurăm legea lui Little?
3. Este încărcarea fluxului urmărită destul de continuu încât o creștere constantă să fie prinsă în zile, nu în luni?
4. Care este diferența dintre timpul nostru al fluxului și timpul nostru de ciclu și ce ne spune ea despre unde apare de fapt întârzierea?

## Concluzii principale

- **Încărcarea fluxului dictează matematic timpul fluxului**, prin legea lui Little:
  încărcarea fluxului este egală cu rata de sosire înmulțită cu timpul fluxului,
  pentru orice flux de valoare stabil.
- **Timpul fluxului cuprinde întregul flux de valoare**, de la identificarea nevoii de
  business până la livrare, mai larg decât sfera doar de inginerie a timpului de ciclu
  (subiectul 2.6).
- Vectorul central de manipulare al subiectului este **îngustarea discretă a punctului
  de start al timpului fluxului**; garda de protecție este o definiție documentată și
  auditată a punctului de intrare.
- **Urmărește încărcarea fluxului continuu**, nu periodic, ca să funcționeze drept un
  indicator anticipativ autentic, nu o descoperire întârziată.
- Folosește legea lui Little **explicit**, nu doar ca intuiție, când argumentezi
  pentru o limită de WIP, o creștere de capacitate sau secvențierea muncii
  concurente.

## Referințe și lecturi suplimentare

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
