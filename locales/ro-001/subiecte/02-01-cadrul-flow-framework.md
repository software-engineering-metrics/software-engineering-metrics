# 2.1 Flow Framework

## Prezentare generală și motivație

**Flow Framework** este un model managerial și structural creat de Mik Kersten și
publicat în cartea sa din 2018 *Project to Product*. Există ca să răspundă unei
întrebări la care metricile pure de flux de livrare nu pot răspunde: nu doar cât
de repede și cât de sigur se mișcă codul de la commit la producție, ci ce fel de
valoare circulă prin acest flux și dacă acel amestec reflectă strategia reală a
afacerii. Cadrul tratează livrarea de software ca pe un **[flux de
valoare](https://en.wikipedia.org/wiki/Value_stream)**, secvența de la un capăt
la altul de activități care transformă o idee în valoare primită de un client,
împrumutând direct din tradiția cartografierii fluxului de valoare din producția
lean.

Această carte folosește Flow Framework ca structură organizatoare a Părții 2.
Subiectul 2.2 introduce cele patru elemente de flux ale sale, subiectele 2.3 și
2.4 introduc cele cinci metrici de flux, subiectul 2.8 urmărește acele metrici
înapoi până la originea lor în cartografierea clasică a fluxului de valoare din
Lean, iar subiectul 2.10 acoperă metricile DORA ca un cadru de referință mai
îngust, centrat pe fluxul de livrare, cu care această parte nu mai deschide. Este
o alegere deliberată, nu o respingere a cercetării DORA. DORA măsoară debitul și
stabilitatea sistemului cu o rigoare statistică autentică, dar tace în privința
întrebării care îi pasă cel mai mult unui lider de business: din tot ce a livrat
organizația de inginerie în acest trimestru, cât a fost valoare nouă pentru
client și cât a fost consumat pe tăcute remediind defecte, gestionând riscuri sau
plătind datorii. Flow Framework există tocmai ca să facă vizibil acest amestec.

Pentru echipele mari, această distincție nu este academică. O organizație de
platformă care conduce zeci de fluxuri de valoare poate avea numere DORA
excelente, implementări rapide, frecvente și stabile, în timp ce producția ei
reală de produs a alunecat pe tăcute spre muncă aproape pur de întreținere, un
tipar invizibil pentru un tablou de bord care măsoară doar mecanica fluxului de
livrare. Organizațiile mari și administrația publică, care trebuie să justifice
investiția în inginerie în fața unor părți interesate care gândesc în termeni de
business, nu de flux de livrare, au nevoie de un vocabular care leagă activitatea
de livrare de intenția strategică. Asta oferă acest cadru.

## Principii-cheie

- **Un flux de valoare este unitatea de măsură, nu o echipă sau un flux de
  livrare.** Se întinde de la o nevoie a clientului sau a afacerii până la
  rezultatul livrat, traversând orice granițe de echipă traversează munca de fapt.
- **Elementele de flux fac vizibil „ce”, nu doar „cât de repede”.** Cele patru
  categorii din subiectul 2.2, funcționalități, defecte, riscuri și datorie,
  transformă o decizie implicită de prioritizare într-una explicită și măsurabilă.
- **Alocarea capacității între elementele de flux este cu sumă nulă.** Mai multă
  capacitate cheltuită pe un tip de element înseamnă mai puțină capacitate
  disponibilă pentru celelalte; cadrul face acest compromis vizibil, în loc să-l
  lase implicit.
- **Cele cinci metrici de flux răspund la întrebări de business, nu doar de
  inginerie.** Sunt proiectate să fie prezentate unei părți interesate
  netehnice, nu păstrate în interiorul unei echipe de inginerie.
- **Gestionarea fluxului de valoare ar trebui să fie continuă, nu un exercițiu
  de cartografiere unic.** Hărțile statice ale fluxului de valoare se învechesc;
  cadrul este construit să fie instrumentat din uneltele pe care echipele le
  folosesc deja.

## Recomandări

### Cartografiază fluxul de valoare înainte de a instrumenta ceva

Înainte de a adopta orice metrică de flux, parcurge traseul real pe care îl
urmează o bucată de muncă de la identificarea unei nevoi de business până la
primirea valorii de către un client, numind fiecare etapă și fiecare predare
între echipe. Acesta este exercițiul clasic de [cartografiere a fluxului de
valoare](https://en.wikipedia.org/wiki/Value_stream_mapping), adaptat din
producția lean, iar omiterea lui este cel mai frecvent motiv pentru care o
adoptare a Flow Framework produce numere în care nu se încrede nimeni: metricile
calculate pe un proces neexaminat, înțeles informal, rareori corespund cu ce se
întâmplă de fapt.

### Leagă metricile de flux de uneltele pe care echipele tale le folosesc deja

Flow Framework este construit pentru gestionarea continuă și automată a fluxului
de valoare, nu pentru un exercițiu periodic manual de cartografiere. Integrează
urmărirea elementelor de flux direct în uneltele prin care curge deja munca,
Jira, Azure DevOps, GitHub, în loc să construiești un sistem paralel de urmărire
pe care echipele să-l actualizeze de mână. Starea unui element de flux ar trebui
să se actualizeze singură pe măsură ce se mișcă tichetul sau pull requestul de
dedesubt, aceeași disciplină de instrumentare în loc de autoraportare pe care o
recomandă subiectul 1.5 pentru fiecare metrică din această carte.

### Prezintă distribuția fluxului direct părților interesate din business, nu doar conducerii de inginerie

Cea mai mare oportunitate ratată cu acest cadru este tratarea lui ca pe o unealtă
internă de inginerie. Distribuția fluxului, proporția muncii care merge spre
funcționalități față de defecte, riscuri și datorie (subiectul 2.3), este
proiectată special ca o conversație pe care o porți cu conducerea de produs și de
business, pentru că face explicită și negociabilă, în loc de presupusă, o decizie
implicită de prioritizare: cât din capacitate merge spre valoare nouă față de
menținerea luminilor aprinse.

### Tratează cele patru elemente de flux ca pe o taxonomie reală, nu ca pe o formalitate

Cere ca fiecare unitate de muncă să fie clasificată în exact unul dintre cele
patru tipuri de elemente de flux la intrare, nu retroactiv. O clasificare
aplicată după fapt, sau aplicată vag pentru că „e practic o funcționalitate”,
erodează toată valoarea taxonomiei, pentru că scopul întreg este o evidență
onestă și consecventă a locului unde s-a dus capacitatea de fapt.

### Reia harta fluxului de valoare când se schimbă organizația, nu după un program fix

O hartă a fluxului de valoare se învechește în clipa în care se schimbă
semnificativ granițele echipelor, uneltele sau produsul însuși, nu după o
cadență anuală arbitrară. Tratează o reorganizare, o migrare majoră de unelte
sau o schimbare semnificativă de direcție a produsului ca pe un declanșator
pentru a parcurge din nou fluxul de valoare, pentru că o metrică de flux
calculată pe o hartă învechită măsoară pe tăcute lucrul greșit.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Doar metrici de flux de livrare (DORA, subiectul 2.10) | Simple, bine validate, ieftin de instrumentat din datele CI/CD existente | Tăcute asupra tipului de valoare livrată |
| Adoptarea completă a Flow Framework | Leagă livrarea de strategia de business; face amestecul de valoare vizibil și negociabil | Cere o hartă onestă a fluxului de valoare și disciplină consecventă de clasificare a elementelor de flux |
| Cartografierea statică, unică, a fluxului de valoare | Ieftină, rapid de făcut ca exercițiu de atelier | Se învechește repede; produce un instantaneu, nu o metrică vie |
| Gestionarea continuă a fluxului de valoare, integrată în unelte | Date vii, mereu actuale; scalează peste multe fluxuri de valoare | Cere muncă reală de integrare a uneltelor de la început |

Tensiunea centrală este **lizibilitatea pentru business versus efortul de
instrumentare**. Metricile fluxului de livrare sunt ieftine pentru că fluxul
produce deja datele; metricile fluxului de valoare cer o hartă onestă a întregului
proces și un obicei disciplinat de clasificare la intrare, pe care metricile
fluxului de livrare nu l-au cerut niciodată. Rezolvă tensiunea pornind cu un
singur flux de valoare, nu cu întreaga organizație deodată, cartografiindu-l
corect și abia apoi integrând urmărirea elementelor de flux în uneltele
existente, în loc să încerci o introducere bruscă în toate echipele simultan.

## Întrebări de discutat cu echipa ta

1. **Am putea desena chiar acum o hartă corectă a fluxului de valoare pentru cel
   mai important produs al nostru sau am ghici câteva dintre predări?** Cele mai
   multe organizații nu au parcurs niciodată cu adevărat acest traseu de la un
   capăt la altul. Încearcă exercițiul sincer și notează fiecare loc în care
   grupul nu cade de acord asupra a ce se întâmplă de fapt, pentru că acel
   dezacord este el însuși diagnostic.

2. **Dacă am clasifica tot ce a livrat echipa noastră trimestrul trecut în
   funcționalități, defecte, risc și datorie, ar surprinde rezultatul conducerea
   de produs?** Cele mai multe echipe nu au făcut niciodată explicită această
   împărțire, iar răspunsul dezvăluie adesea o povară de întreținere sau o
   problemă de datorie care era invizibilă înainte într-o simplă numărătoare de
   „story points livrate”.

3. **Avem o modalitate reală, integrată în unelte, de a urmări elementele de
   flux sau ar cere ca cineva să clasifice și să reclasifice munca de mână?** Un
   sistem manual se degradează repede sub o încărcare reală; unul integrat în
   unelte nu. Evaluează sincer pe care ești de fapt pregătit să-l susții.

4. **Când s-a schimbat ultima oară harta fluxului nostru de valoare și ne-am
   actualizat metricile ca să reflecte asta?** Reorganizările și migrările de
   unelte invalidează pe tăcute o hartă a fluxului de valoare, iar puține
   organizații își amintesc să o reia când se întâmplă asta.

5. **Sunt metricile noastre de flux prezentate vreodată direct părților
   interesate din business sau de produs sau rămân în interiorul ingineriei?**
   Cel mai mare avantaj al cadrului față de metricile doar de flux de livrare este
   exact această conversație, iar omiterea ei pierde cea mai mare parte din
   valoarea cadrului.

6. **Ce ar trebui ca cineva să poată manipula clasificarea noastră a elementelor
   de flux fără a face ceva necinstit pe hârtie?** Parcurge cum ar putea o echipă
   aflată sub presiunea livrării să reetichetezi discret munca de datorie sau de
   risc drept funcționalități ca să pară mai productivă și discută dacă ați
   observa asta acum.

## Perspectiva sectorială

**Startup.** O hartă completă a fluxului de valoare este de obicei exagerată
pentru o echipă de cinci oameni în care toată lumea știe deja tot procesul pe
de rost. Obiceiul util la această scară este pur și simplu numirea cu voce tare a
celor patru tipuri de elemente de flux în conversațiile de planificare, astfel
încât munca de datorie și de risc să nu dispară pe tăcute din vedere în clipa în
care se apropie un termen pentru o funcționalitate.

**Afacere mică.** Adoptă clasificarea elementelor de flux în orice unealtă ușoară
de urmărire folosești deja, o coloană etichetată sau un câmp personalizat, în loc
de vreun produs dedicat de gestionare a fluxului de valoare. Disciplina
clasificării consecvente contează mult mai mult decât sofisticarea uneltelor din
spatele ei.

**Companie mare.** Aici cadrul își câștigă pâinea, pentru că o organizație mare
care conduce zeci de fluxuri de valoare peste multe linii de produse nu are altă
cale fiabilă de a vedea, într-un singur loc, cum este alocată de fapt capacitatea
de inginerie între funcționalități, defecte, risc și datorie. Investește în
integrarea uneltelor; alternativa manuală nu supraviețuiește contactului cu
scara reală.

**Administrație publică.** Distribuția fluxului oferă unei organizații de
inginerie din sectorul public un răspuns apărabil și lizibil pentru business la
întrebarea „de ce nu se livrează mai multă funcționalitate nouă”, când răspunsul
onest este o pondere în creștere a capacității care merge spre remedierea
securității sau spre datoria moștenită. A face acest compromis vizibil și
explicit, în loc să absorbi presiunea în tăcere, este adesea cel mai util lucru
pe care îl oferă acest cadru unui lider de tehnologie din administrație.

## Exemple

**Companie mare.** Organizația platformei de dosare de daune a unui mare asigurător
credea că livrează în principal funcționalități noi, pe baza rapoartelor sale de
viteză pe sprint. Un prim exercițiu de cartografiere a fluxului de valoare și de
clasificare a elementelor de flux a arătat că munca de datorie și de risc, în mare
parte datorie tehnică nedocumentată dintr-un sistem central vechi de un deceniu,
consuma de fapt aproape jumătate din capacitatea totală de inginerie, un fapt pe
care nicio raportare anterioară nu-l scosese la iveală pentru că acea muncă fusese
mereu înglobată în „sarcini de inginerie” generice. Prezentarea acestei împărțiri
comitetului executiv a obținut pentru prima dată în istoria platformei un buget
dedicat reducerii datoriei, în loc ca munca de datorie să continue să concureze
tăcut cu fiecare cerere de funcționalitate.

**Administrație publică.** Divizia de servicii digitale a unei autorități fiscale
naționale a folosit cartografierea fluxului de valoare ca să diagnosticheze de ce
o funcționalitate emblematică pentru cetățeni era „în curs” de peste un an, în
ciuda finalizării constante a sprinturilor. Harta a arătat că fluxul de valoare
cuprindea de fapt cinci echipe separate, cu trei predări pe care organigrama nu
le reflecta, iar clasificarea elementelor de flux a arătat că timpul real de
inginerie al funcționalității era o mică fracțiune din timpul ei total de flux,
restul fiind consumat de întârzierile de predare între echipe, pe care nicio
metrică proprie a unei singure echipe nu le putea vedea. Divizia s-a restructurat
în jurul fluxului de valoare, nu al organigramei, pentru acea linie de produs,
reducând substanțial timpul fluxului în două trimestre.

## Argumentul de business: motivații, ROI și TCO

Randamentul adoptării Flow Framework este un răspuns apărabil și lizibil pentru
business la o întrebare la care metricile fluxului de livrare nu pot răspunde: este
capacitatea de inginerie alocată așa cum crede conducerea că este. Exemplul cu
asigurătorul de mai sus, care a scos la iveală aproape jumătate din capacitate
mergând spre muncă de datorie anterior invizibilă, este un tipar comun odată ce o
organizație își clasifică sincer munca, iar acea vizibilitate deblochează de
rutină investiții pe care o cerere vagă de tipul „avem nevoie de mai mult timp
pentru datoria tehnică” nu le-ar fi deblocat niciodată.

Costul total de proprietate este concentrat în două locuri: exercițiul inițial de
cartografiere a fluxului de valoare, care cere timp real de facilitare ca să fie
făcut onest, și integrarea uneltelor necesară ca să țină datele elementelor de
flux la zi fără întreținere manuală. Ambele costuri sunt unice sau cu întreținere
redusă odată făcute bine, ceea ce face cadrul considerabil mai ieftin de susținut
decât de adoptat.

## Anti-modele și capcane

- **A trata cartografierea fluxului de valoare ca pe un atelier unic, niciodată
  reluat:** harta se învechește în clipa în care se schimbă organizația, iar o
  metrică calculată pe o hartă învechită măsoară lucrul greșit.
- **Construirea unui sistem paralel de urmărire a elementelor de flux, întreținut
  manual:** se degradează repede sub o încărcare reală; integrează-l în uneltele
  existente.
- **Clasificarea retroactivă a elementelor de flux, nu la intrare:** vectorul de
  manipulare din centrul acestui subiect. Sub presiunea livrării, o echipă poate
  reeticheta discret, după fapt, munca de datorie sau de risc drept funcționalități
  ca să pară mai productivă în fața părților interesate care văd doar graficul
  distribuției fluxului, fără ca cineva să ia vreodată o decizie explicită și
  vizibilă în acest sens. Garda de protecție este să ceri clasificarea la intrare,
  înainte ca rezultatul să fie cunoscut, și să auditezi periodic un eșantion de
  elemente clasificate față de ce a făcut de fapt modificarea de dedesubt, aceeași
  disciplină de audit pe care o cere subiectul 1.2 pentru fiecare metrică din
  această carte.
- **Păstrarea metricilor de flux doar în interiorul ingineriei:** pierde
  principalul avantaj al cadrului, un vocabular comun cu părțile interesate din
  business.
- **Cartografierea organigramei în loc de fluxul real de valoare:** ascunde
  predările între echipe, care sunt adesea cea mai mare sursă de întârziere.
- **Adoptarea cadrului în întreaga organizație înainte de a-l valida pe un
  singur flux de valoare:** riscă o investiție mare în metrici în care nu se
  încrede nimeni, pentru că harta de dedesubt nu a fost niciodată confirmată ca
  exactă.

## Model de maturitate

- **Nivelul 1, Inițiere:** Nu există o hartă a fluxului de valoare; munca este
  urmărită ca tichete generice, fără clasificarea elementelor de flux.
- **Nivelul 2, Dezvoltare:** Un flux de valoare a fost cartografiat, iar
  elementele de flux sunt clasificate informal, dar urmărirea este manuală și
  aplicată inconsecvent.
- **Nivelul 3, Standardizare:** Clasificarea elementelor de flux este integrată în
  uneltele existente și aplicată consecvent la intrare în fluxurile de valoare
  principale.
- **Nivelul 4, Gestionare:** Distribuția fluxului este revizuită regulat cu
  părțile interesate din business, iar hărțile fluxului de valoare sunt ținute
  activ la zi pe măsură ce organizația se schimbă.
- **Nivelul 5, Orchestrare:** Organizația alocă deliberat investiția de inginerie
  între fluxurile de valoare folosind datele de flux și poate indica decizii
  strategice concrete, un buget de reducere a datoriei, o restructurare de
  echipă, luate pentru că cadrul a făcut vizibil un compromis anterior invizibil.

## Idei de discuție

1. Am putea desena azi o hartă corectă a fluxului de valoare pentru produsul nostru principal, fără să ghicim?
2. Ce procent din capacitatea trimestrului trecut ar dezvălui o clasificare onestă a elementelor de flux că a mers spre datorie și risc, față de funcționalități?
3. Ajung metricile noastre de flux la părțile interesate din business sau rămân în interiorul ingineriei?
4. Care este cea mai mare predare între echipe din fluxul nostru de valoare pe care organigrama noastră nu o reflectă?

## Concluzii principale

- **Flow Framework**, din *Project to Product* de Mik Kersten, măsoară ce fel de
  valoare circulă printr-un flux de livrare, nu doar cât de repede rulează fluxul
  însuși.
- Un **flux de valoare**, nu o echipă sau un flux de livrare, este unitatea de
  măsură a cadrului, iar cartografierea lui onestă vine înainte de a instrumenta
  ceva.
- **Clasificarea elementelor de flux la intrare, nu după fapt**, este garda de
  protecție împotriva vectorului central de manipulare al acestui subiect:
  reetichetarea discretă a muncii de datorie sau de risc drept funcționalități
  pentru a părea mai productiv.
- **Leagă metricile de flux de uneltele existente**, Jira, Azure DevOps, GitHub,
  nu de un sistem manual paralel de urmărire care nu va supraviețui unei
  încărcări reale.
- Prezintă datele de flux **direct părților interesate din business**; acea
  conversație, nu un tablou de bord intern de inginerie, este principalul
  avantaj al cadrului față de metricile doar de flux de livrare.

## Referințe și lecturi suplimentare

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
