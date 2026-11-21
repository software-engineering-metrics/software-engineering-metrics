# 2.2 Elemente de flux: funcționalități, defecte, riscuri și datorie

## Prezentare generală și motivație

Un **element de flux** este unitatea de muncă a Flow Framework, iar fiecare
element de flux aparține exact unuia dintre patru tipuri: **funcționalități**,
valoare nouă de business sau capabilitate livrată unui client; **defecte**,
remedieri de calitate pentru defecte găsite de utilizatori sau la testare;
**riscuri**, muncă de securitate, conformitate, confidențialitate și guvernanță
care protejează afacerea; și **datorie**, [datorie
tehnică](https://en.wikipedia.org/wiki/Technical_debt), îmbunătățiri de
arhitectură și muncă de infrastructură care permit viteză viitoare. Subiectul 2.1
a introdus cadrul din care fac parte aceste patru categorii; acest subiect
merge în profunzime în taxonomia însăși, pentru că ea aduce valoare doar dacă o
echipă își clasifică munca în ea onest și consecvent.

Proprietatea definitorie a elementelor de flux este că alocarea între cele patru
tipuri este un **joc cu sumă nulă**: într-o perioadă dată există o cantitate fixă
de capacitate de inginerie, iar fiecare oră cheltuită pe o funcționalitate este o
oră necheltuită pe datorie, risc sau defecte. Nu este un fapt nou despre livrarea
de software, fiecare lider de inginerie știe deja că capacitatea este finită, dar
cele mai multe organizații nu au o cale consecventă și onestă de a vedea împărțirea
reală. Viteza pe sprint numără story points indiferent de tip; o restanță consumată
arată identic indiferent dacă munca din spate a fost un nou flux de plată sau trei
luni de remediere de securitate lipsită de glamour. Elementele de flux există
tocmai ca să facă vizibilă această împărțire invizibilă.

Pentru echipele mari, această vizibilitate schimbă natura unei conversații despre
resurse. În loc ca un lider de inginerie să facă un argument necuantificat că
„avem nevoie de mai mult timp pentru datoria tehnică”, clasificarea elementelor
de flux produce un număr real, datoria a consumat 30% din capacitatea trimestrului
trecut, care poate fi discutat, apărat și ajustat deliberat cu părțile interesate
din business. Organizațiile mari care conduc multe linii de produse concurente și
agențiile guvernamentale care echilibrează funcționalitatea nouă pentru cetățeni
față de riscul sistemelor moștenite depind amândouă de acest gen de compromis
apărabil și cuantificat, mult mai mult decât de o senzație privată și informală
că „petrecem prea mult timp cu întreținerea”.

## Principii-cheie

- **Fiecare element de flux aparține exact unui tip.** Forțarea unei clasificări
  unice, în loc să permiți una mixtă sau ambiguă, este ceea ce face taxonomia
  utilizabilă pentru raportarea agregată.
- **Alocarea este cu sumă nulă, nu aditivă.** Mai multă capacitate pentru
  funcționalități înseamnă obligatoriu mai puțină pentru defecte, risc și datorie
  în aceeași perioadă.
- **Nu există o distribuție sănătoasă universală.** Un produs tânăr, în faza de
  creștere, ar trebui legitim să se încline spre funcționalități; un sistem matur
  care poartă risc tehnic real ar trebui legitim să se încline spre munca de
  datorie și de risc.
- **Munca de datorie și de risc este raportată cronic insuficient fără această
  disciplină.** Tinde să se întâmple în liniște, absorbită în „sarcini de
  inginerie” generice, până când clasificarea elementelor de flux o scoate la
  lumină.
- **Calitatea clasificării determină întreaga valoare a taxonomiei.** O taxonomie
  aplicată inconsecvent sau manipulată după fapt produce numere care induc activ în
  eroare, în loc să informeze.

## Recomandări

### Clasifică fiecare element la intrare, folosind o definiție scrisă pentru fiecare tip

Convine asupra unei definiții concise și scrise pentru ce înseamnă o
funcționalitate, un defect, un risc și o datorie în contextul tău specific și
cere ca fiecare bucată nouă de muncă să fie clasificată față de acea definiție în
clipa în care intră în fluxul de valoare, nu după ce este terminată. O definiție
convenită dinainte rezistă tentației de a clasifica retroactiv după cum a ajuns să
arate o bucată de muncă, exact riscul de manipulare pe care îl numește acest
subiect direct mai jos.

### Raportează distribuția fluxului ca tendință, nu ca instantaneu unic

Distribuția dintr-o singură perioadă îți spune mai puțin decât tendința pe mai
multe perioade. O alunecare constantă spre un tip de element, funcționalitățile
urcând în timp ce datoria scade discret trimestru după trimestru, este un semnal
mult mai puternic decât numărul oricărei perioade singulare și este de obicei
tiparul care merită ridicat în fața părților interesate înainte să devină o criză,
nu după.

### Stabilește o distribuție țintă deliberată cu părțile interesate din business, nu doar cu ingineria

Decide, împreună cu conducerea de produs și de business, cum arată o distribuție
sănătoasă pentru faza actuală a fluxului tău de valoare specific și reia periodic
acea țintă, în loc să o lași să alunece implicit. Un produs tânăr, în faza de
creștere, și un sistem matur, în faza de stabilitate, au ținte sănătoase diferite
în mod legitim, iar ținta însăși ar trebui să fie o decizie de business negociată,
nu ceva ce ingineria hotărăște singură în liniște.

### Verifică încrucișat clasificarea elementelor de flux cu dovezi independente

Compară periodic distribuția fluxului cu metrici care nu depind de
autoclasificare: rata defectelor scăpate (subiectul 5.1), măsurarea datoriei
tehnice (subiectul 4.5) și metricile de gestionare a vulnerabilităților (subiectul
6.4). Dacă defectele sau vulnerabilitățile cresc în timp ce ponderile elementelor
de flux „defecte” și „risc” rămân plate sau scad, această nepotrivire este cel mai
clar semnal disponibil că clasificarea a alunecat departe de realitate.

### Urmărește în special tiparul fabricii de funcționalități

Când distribuția fluxului arată funcționalități care absorb constant aproape toată
capacitatea, trimestru după trimestru, cu munca de datorie și de risc niciodată
peste o pondere simbolică, acel tipar (numit uneori „fabrică de funcționalități”)
înseamnă de obicei că datoria și riscul sunt înfometate de capacitate, nu că
sistemul chiar nu are nevoie de întreținere. Tiparul este confortabil pe termen
scurt și scump mai târziu, apărând în cele din urmă ca o criză de calitate sau de
securitate care sosește fără avertisment în graficul distribuției fluxului, pentru
că acumularea de dedesubt nu a fost niciodată vizibilă.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Fără clasificare formală (restanță generică) | Fără povară de proces | Munca de datorie, de risc și de defecte rămâne invizibilă; greu de apărat deciziile de resurse |
| Clasificarea elementelor de flux în patru tipuri | Face alocarea capacității vizibilă și negociabilă cu părțile interesate | Cere disciplină la intrare și o definiție scrisă, convenită, pentru fiecare tip |
| Clasificare mai fină (multe subtipuri) | Mai multe detalii de diagnostic | Mai mult efort de clasificare; mai multe numere de explicat părților interesate |
| Clasificare retroactivă | Mai ușor de aplicat, fără schimbare inițială de proces | Foarte expusă manipulării; clasificarea alunecă spre ce arată mai bine |

Tensiunea centrală este **disciplina clasificării versus povara procesului**. O
taxonomie cu patru tipuri este grosieră în mod deliberat, destul de grosieră ca să
clasifici un element în secunde, nu într-o dezbatere, dar această grosime ține doar
dacă disciplina clasificării la intrare, față de o definiție scrisă, este susținută
cu adevărat. Rezolvă tensiunea păstrând taxonomia exact atât de simplă, patru
tipuri, nu mai multe, și investind orice rigoare suplimentară în pasul de audit
(verificarea încrucișată cu dovezi independente), nu într-o schemă de clasificare
mai elaborată care se erodează sub o încărcare reală.

## Întrebări de discutat cu echipa ta

1. **Dacă am clasifica tot ce a livrat echipa noastră trimestrul trecut, cum ar
   arăta împărțirea reală între funcționalități, defecte, risc și datorie și ar
   surprinde părțile noastre interesate?** Cele mai multe echipe nu au făcut
   niciodată acest exercițiu onest. Încearcă-l cu date reale înainte să presupui că
   știi deja răspunsul.

2. **Avem o definiție scrisă și convenită pentru ce înseamnă o funcționalitate
   față de datorie față de risc în contextul nostru specific sau depinde
   clasificarea de cine etichetează tichetul?** O definiție informală și
   inconsecventă produce numere care par precise, dar nu sunt de fapt comparabile
   de la o perioadă la alta.

3. **A alunecat vreodată distribuția fluxului nostru constant spre un tip de
   element fără ca cineva să fi decis deliberat asta?** O alunecare lentă este
   ușor de ratat perioadă cu perioadă, dar evidentă când este reprezentată ca
   tendință. Extrage datele mai multor perioade, dacă le ai, și caută sincer acest
   tipar.

4. **Cum ar arăta o distribuție sănătoasă a fluxului pentru faza actuală a
   produsului nostru și am convenit de fapt acea țintă cu părțile interesate din
   business?** Cele mai multe organizații nu au făcut niciodată explicită această
   țintă, ceea ce înseamnă că nu există o bază comună pentru a observa când
   distribuția reală alunecă departe de ea.

5. **Se potrivește distribuția fluxului nostru cu dovezi independente, precum rata
   defectelor scăpate sau numărul de vulnerabilități deschise, sau există o
   nepotrivire care merită investigată?** O nepotrivire aici este cel mai clar
   semn că clasificarea a alunecat de la ceea ce este de fapt munca.

6. **Ar putea cineva din echipa noastră să reeticheteze discret un element de
   datorie sau de risc drept funcționalitate sub presiunea livrării și am observa
   acum dacă ar face-o?** Acesta este riscul central de manipulare al subiectului,
   formulat direct. Discută dacă procesul vostru actual ar prinde asta de fapt, nu
   doar dacă cineva ar face-o deliberat.

## Perspectiva sectorială

**Startup.** Clasificarea formală pare adesea o povară când toată echipa știe deja
la ce lucrează fiecare. Minimul util la această scară este pur și simplu numirea cu
voce tare a celor patru categorii în timpul planificării, astfel încât munca de
datorie și de risc să nu fie depriorizată pe tăcute de fiecare dată când un termen
pentru o funcționalitate creează presiune, un tipar care se agravează când cresc și
codul, și echipa.

**Afacere mică.** Un singur câmp personalizat sau o etichetă în unealta ta de
urmărire existentă este suficient pentru a surprinde tipul elementului de flux, fără
nicio investiție dedicată în unelte. Disciplina clasificării consecvente la intrare
contează mult mai mult decât orice sofisticare a uneltelor.

**Companie mare.** Clasificarea elementelor de flux este locul unde acest cadru își
aduce valoarea la scară, pentru că o organizație mare care conduce multe fluxuri de
valoare concurente nu are altă cale fiabilă și agregată de a vedea cum este
împărțită capacitatea între funcționalități, defecte, risc și datorie. Investește
în clasificare integrată în unelte și în verificări încrucișate periodice cu dovezi
independente; clasificarea manuală și făcută pe loc nu supraviețuiește scării reale
a unei organizații.

**Administrație publică.** Distribuția fluxului oferă unui lider de tehnologie din
sectorul public un răspuns apărabil și cuantificat atunci când este întrebat de ce
nu se livrează mai multe funcționalități noi pentru cetățeni, când răspunsul onest
este că povara de risc și de datorie a unui sistem moștenit consumă o parte reală și
justificabilă din capacitate. A face acest compromis explicit și negociat, în loc să
fie absorbit în tăcere, tinde să construiască mai multă încredere cu organele de
supraveghere decât un apel necuantificat la „necesitate tehnică”.

## Exemple

**Companie mare.** Echipa platformei de comerț electronic a unei mari companii de
retail credea, pe baza vitezei pe sprint, că livrează o producție constantă de
funcționalități. Un prim exercițiu onest de clasificare a elementelor de flux a
constatat că „funcționalitățile” reprezentau de fapt doar 40% din munca finalizată,
datoria, în mare parte legată de un sistem de plată îmbătrânit, consumând aproape o
treime din capacitate fără să fi fost vreodată numită astfel în vreun raport
anterior. Prezentarea acestei împărțiri conducerii de produs, alături de o rată
crescândă a defectelor scăpate care confirma povara datoriei, a obținut un buget
dedicat de modernizare pe care echipa îl ceruse fără succes doi ani folosind doar
argumente calitative.

**Administrație publică.** Echipa de licențiere digitală a unei agenții statale de
vehicule și-a clasificat restanța pentru prima dată după ce o întrerupere publică a
atras atenția asupra stabilității sistemului de dedesubt. Exercițiul a arătat că
munca de „risc”, în principal aplicarea de patch-uri de securitate depriorizate
repetat în favoarea unor funcționalități vizibile pentru cetățeni, scăzuse sub 5%
din capacitate în anul precedent, un tipar care nu fusese niciodată vizibil în
raportarea standard a echipei. Conducerea agenției a folosit constatarea ca să
impună o alocare minimă pentru munca de risc de acum încolo, sprijinită pe datele
distribuției fluxului, nu doar pe o declarație generală de politică.

## Argumentul de business: motivații, ROI și TCO

Randamentul clasificării elementelor de flux este o bază apărabilă și cuantificată
pentru decizii de resurse care înainte erau argumentate calitativ și adesea pierdeau
în fața muncii celei mai vizibile pentru părțile interesate. Exemplul din retail de
mai sus, care a obținut un buget de modernizare cu date reale de capacitate, nu cu
un apel general, este tiparul pe care această disciplină îl produce fiabil: un
număr specific este mult mai greu de respins decât impresia generală că „avem nevoie
de mai mult timp pentru întreținere”.

Costul total de proprietate este redus odată ce taxonomia și definițiile ei sunt
convenite: clasificarea adaugă secunde la intrare, nu o povară de proces
semnificativă, iar integrarea uneltelor necesară pentru urmărirea ei este de obicei
un singur câmp personalizat sau o etichetă. Costul real și continuu este disciplina
susținerii unei clasificări oneste sub presiunea livrării, motiv pentru care
verificarea încrucișată periodică cu dovezi independente contează tot atât cât
adoptarea inițială.

## Anti-modele și capcane

- **Clasificarea muncii retroactiv, după ce rezultatul este cunoscut:** vectorul de
  manipulare din centrul acestui subiect. Sub presiunea livrării, o echipă poate
  eticheta discret munca de datorie sau de risc drept funcționalitate după fapt sau
  poate rotunji un element ambiguu spre tipul care arată mai bine pe graficul
  distribuției, fără ca vreo decizie singulară să pară necinstită în sine. Garda de
  protecție este clasificarea la intrare față de o definiție scrisă, combinată cu
  audituri periodice care compară distribuția fluxului cu dovezi independente, cum
  ar fi rata defectelor scăpate (subiectul 5.1) și metricile de vulnerabilitate
  (subiectul 6.4), aceeași disciplină de audit față de dovezi independente pe care o
  cere subiectul 1.2 pentru fiecare metrică din această carte.
- **A lăsa funcționalitățile să absorbă constant aproape toată capacitatea (tiparul
  fabricii de funcționalități):** înfometează discret munca de datorie și de risc
  până iese la iveală ca o criză.
- **A trata distribuția unei singure perioade drept întreg tabloul:** ratează
  alunecarea lentă și cumulativă pe care o vedere de tendință o arată limpede.
- **Stabilirea unei distribuții țintă fără părțile interesate din business:**
  pierde valoarea principală a cadrului, o înțelegere comună și negociată a
  compromisului.
- **Folosirea unei definiții inconsecvente sau nedocumentate pentru fiecare tip:**
  produce numere care par precise, dar nu sunt de fapt comparabile în timp.
- **Supra-proiectarea taxonomiei cu multe subtipuri:** adaugă o povară de
  clasificare care erodează disciplina fără a adăuga o înțelegere proporțională.

## Model de maturitate

- **Nivelul 1, Inițiere:** Munca este urmărită generic, fără clasificarea
  elementelor de flux; munca de datorie și de risc este invizibilă în raportare.
- **Nivelul 2, Dezvoltare:** Unele echipe clasifică informal elementele de flux, dar
  definițiile sunt inconsecvente, iar clasificarea se face adesea retroactiv.
- **Nivelul 3, Standardizare:** Toate echipele clasifică la intrare față de o
  definiție comună și scrisă, iar distribuția fluxului este urmărită ca tendință.
- **Nivelul 4, Gestionare:** Distribuția fluxului este verificată periodic încrucișat
  cu dovezi independente, iar distribuțiile țintă sunt stabilite deliberat cu
  părțile interesate din business.
- **Nivelul 5, Orchestrare:** Datele elementelor de flux informează direct deciziile
  de resurse și de investiții din întreaga organizație, iar conducerea poate indica
  decizii concrete luate pentru că clasificarea a făcut explicit un compromis
  anterior invizibil.

## Idei de discuție

1. Ce ar arăta o împărțire onestă pe elemente de flux a muncii trimestrului trecut și ar surprinde pe cineva?
2. Avem o definiție scrisă pentru fiecare dintre cele patru tipuri de elemente de flux sau depinde clasificarea de cine etichetează munca?
3. A alunecat vreodată distribuția fluxului nostru spre un tip de element fără o decizie deliberată în spate?
4. Cu ce dovezi independente ne-am putea verifica astăzi încrucișat distribuția fluxului?

## Concluzii principale

- Un **element de flux** aparține exact unuia dintre patru tipuri, funcționalități,
  defecte, riscuri sau datorie, iar alocarea capacității între ele este **cu sumă
  nulă**.
- **Nu există o distribuție sănătoasă universală**; amestecul potrivit depinde de
  faza produsului și ar trebui să fie o țintă deliberată, negociată cu părțile
  interesate din business.
- Vectorul central de manipulare al subiectului este **clasificarea retroactivă**,
  reetichetarea discretă a muncii de datorie sau de risc drept funcționalitate după
  fapt; garda de protecție este clasificarea la intrare plus audituri periodice
  față de dovezi independente.
- Urmărește în special **tiparul fabricii de funcționalități**, funcționalitățile
  care absorb constant aproape toată capacitatea, care înfometează munca de datorie
  și de risc până iese la iveală ca o criză.
- Distribuția fluxului este cea mai valoroasă ca **tendință**, iar cel mai mare
  câștig vine din împărtășirea ei direct cu părțile interesate din business.

## Referințe și lecturi suplimentare

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
