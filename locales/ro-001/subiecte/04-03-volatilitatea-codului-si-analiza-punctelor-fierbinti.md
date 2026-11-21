# 4.3 Volatilitatea codului și analiza punctelor fierbinți

## Prezentare generală și motivație

**Volatilitatea codului** (code churn) măsoară cât de des se schimbă un fișier
sau un modul în timp: linii adăugate, modificate și șterse în commituri
succesive. Singură, volatilitatea este un semnal destul de slab: unele fișiere se
schimbă des pentru că sunt în dezvoltare activă și sănătoasă, iar altele se
schimbă rar pentru că sunt stabile și corecte, nu pentru că ar fi neglijate.
Adevărata putere de diagnostic a abordării din acest subiect vine din combinarea
volatilității cu complexitatea (subiectul 4.1): un fișier care este și modificat
frecvent, și foarte complex, un **punct fierbinte** (hotspot), este
disproporționat de probabil să fie o sursă de defecte și o frână pentru viteza
echipei, iar cercetarea empirică confirmă asta consecvent în multe baze de cod și
organizații.

**Analiza punctelor fierbinți**, popularizată de munca lui Adam Tornhill în
analiza software, este deosebit de valoroasă pentru că nu cere nicio anchetă
manuală sau judecată subiectivă pentru a-și găsi țintele. Istoricul [controlului
versiunilor](https://en.wikipedia.org/wiki/Version_control) conține deja tot ce
trebuie pentru a calcula atât volatilitatea, cât și, combinat cu uneltele de
analiză statică, complexitatea, pentru fiecare fișier dintr-o bază de cod, în
mod automat. Asta permite unei echipe sau unei organizații să identifice, cu
dovezi reale în loc de anecdote sau de plângerea cea mai zgomotoasă dintr-o
retrospectivă, exact ce mică fracțiune din baza de cod merită prima dată atenția
de refactorizare.

Pentru echipele mari, analiza punctelor fierbinți rezolvă o problemă reală de
alocare: o bază de cod cu sute de mii de linii are mult mai mult cod decât își
poate permite orice echipă să refactorizeze complet, iar intuiția despre unde
locuiesc cele mai grave probleme este frecvent greșită, deformată de cine s-a
plâns cel mai recent sau de ce fișier nu-i place unui inginer senior. Companiile
mari și administrațiile publice care gestionează baze de cod mari și de lungă
durată depind de această prioritizare bazată pe date pentru a direcționa un buget
de refactorizare cu adevărat rar spre codul care va produce cea mai mare
rentabilitate.

## Principii-cheie

- **Volatilitatea singură este un semnal slab; volatilitatea combinată cu
  complexitatea este unul puternic.** Combinația, nu vreuna dintre metrici
  singură, identifică un punct fierbinte real.
- **Analiza punctelor fierbinți nu cere nicio anchetă manuală.** Istoricul
  controlului versiunilor conține deja tot ce trebuie pentru a o calcula automat.
- **Un punct fierbinte este un semnal de prioritizare, nu un verdict automat.**
  Judecata umană este în continuare necesară pentru a decide ce acțiune merită un
  anumit punct fierbinte.
- **Schimbarea frecventă nu este rea în sine.** O parte din volatilitate reflectă
  dezvoltare sănătoasă și activă, nu o problemă de calitate.
- **Această analiză se scalează exact unde intuiția eșuează**: în bazele de cod
  mari, prea mari pentru ca vreo persoană să le cerceteze și să le prioritizeze
  doar din instinct.

## Recomandări

### Calculează împreună volatilitatea și complexitatea și clasifică după combinația lor

Extrage frecvența schimbărilor pe fișier din istoricul controlului versiunilor,
pe o fereastră semnificativă, de obicei șase luni până la un an, și asociază-o cu o
măsură de complexitate (subiectul 4.1) pentru aceleași fișiere. Clasifică
fișierele după combinație, de obicei produsul dintre volatilitate și
complexitate, nu după vreuna dintre metrici singură, pentru că această combinație
este ceea ce cercetarea de fond asociază consecvent cu rate crescute de defecte și
cu costuri de mentenanță.

### Investighează cu judecată umană primele puncte fierbinți înainte să acționezi

O listă clasificată de puncte fierbinți identifică candidați pentru atenție, nu o
listă automată de acțiuni. Pentru fiecare dintre primele tale puncte fierbinți,
investighează cu ochi de om: este cod cu adevărat prost proiectat, care cere
refactorizare, sau este un fișier care are în mod legitim nevoie de schimbări
frecvente pentru că se află în centrul unei logici de business active și în
evoluție, caz în care prioritatea ar putea fi mai degrabă teste mai bune sau o
documentație mai clară, nu o rescriere structurală. Asta oglindește distincția
dintre complexitatea esențială și cea accidentală din subiectul 4.1, aplicată aici
semnalului combinat volatilitate-complexitate.

### Raportează punctele fierbinți la datele despre incidente și defecte

Acolo unde sunt disponibile, verifică dacă punctele fierbinți identificate
corelează cu incidente reale din producție (subiectul 6.2) sau cu date despre
defecte scăpate (subiectul 5.1). O corelație puternică validează analiza
punctelor fierbinți ca fiind cu adevărat predictivă pentru baza ta de cod
specifică și întărește argumentul de business pentru a acționa; o corelație slabă
sau absentă sugerează fie o problemă de calitate a datelor, fie că volatilitatea
și complexitatea nu sunt, în contextul tău anume, combinația potrivită de
semnale după care să prioritizezi.

### Urmărește tendința punctelor fierbinți pe analize succesive, nu doar un instantaneu

Rulează din nou periodic analiza punctelor fierbinți, trimestrial fiind
obișnuit, și urmărește dacă punctele fierbinți identificate anterior se
îmbunătățesc, se înrăutățesc sau sunt rezolvate și dacă apar altele noi. Un punct
fierbinte care persistă pe mai multe cicluri de analiză, în ciuda semnalărilor
repetate, indică fie că efortul de remediere nu a fost de fapt aplicat, fie că o
încercare anterioară de remediere nu a abordat problema reală de fond.

### Folosește datele despre puncte fierbinți pentru a informa, nu a înlocui, conversațiile de prioritizare ale echipei

Prezintă analiza punctelor fierbinți ca dovadă într-o discuție de prioritizare, nu
ca mandat automat care suprascrie judecata contextuală a unei echipe despre ce
contează cel mai mult acum. O echipă poate avea motive bune și legitime să
despriorizeze temporar un punct fierbinte cunoscut, o rescriere planificată care
urmează face ca refactorizarea incrementală să fie efort irosit, de exemplu, iar
analiza ar trebui să informeze acea conversație, nu să o înlocuiască.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Prioritizare bazată pe intuiție | Rapidă, fără unelte, folosește cunoștințele contextuale ale echipei | Deformată de recență, preferințe personale și de cine se plânge cel mai tare |
| Doar volatilitatea | Simplu de calculat | Semnal slab singură; schimbarea frecventă nu este rea în sine |
| Volatilitate combinată cu complexitate (analiza punctelor fierbinți) | Puternică, bazată pe dovezi, automată din datele existente | Cere combinarea a două surse de date și interpretarea rezultatelor cu judecată |
| Analiza punctelor fierbinți raportată la datele despre incidente | Validată, cea mai puternică dovadă pentru prioritizare | Cere o legătură fiabilă între incident și cod, pe care nu o are orice organizație |

Tensiunea centrală este **dovezi versus context**. Analiza punctelor fierbinți
oferă dovezi obiective și scalabile pe care prioritizarea bazată pe intuiție nu le
poate egala la dimensiunea unei baze de cod mari, necunoscute sau de lungă
durată, dar îi lipsește judecata contextuală pe care o are echipa despre de ce
contează sau nu un anumit punct fierbinte în acest moment. Rezolvă tensiunea
tratând analiza punctelor fierbinți ca bază de dovezi pentru o conversație de
prioritizare, combinată cu, niciodată în locul, judecății contextuale proprii a
echipei despre momentul potrivit și compromisuri.

## Întrebări de discutat cu echipa ta

1. **Care sunt primele noastre cinci puncte fierbinți, clasificate după
   volatilitate și complexitate combinate, și s-ar potrivi acel clasament cu
   intuiția echipei despre unde locuiesc cele mai grave probleme ale noastre?**
   Rulează analiza și compară rezultatul cu ce ar fi ghicit echipa înainte să vadă
   datele; discrepanțele sunt adesea cea mai valoroasă constatare.

2. **Corelează punctele noastre fierbinți identificate cu incidente reale din
   producție sau cu date despre defecte scăpate?** Dacă ai datele ca să verifici
   asta, fă-o direct; dacă nu, acel gol merită numit ca ceva spre care să
   construiești.

3. **Pentru primul nostru punct fierbinte de acum, problema de fond este
   complexitate esențială, care cere în mod legitim schimbări frecvente, sau
   complexitate accidentală, pe care o refactorizare ar putea-o repara cu adevărat?**
   Parcurgeți fișierul împreună și faceți explicit această judecată, în loc să
   presupuneți vreunul dintre răspunsuri.

4. **A persistat un punct fierbinte identificat anterior pe mai multe cicluri de
   analiză, în ciuda semnalării lui?** Dacă da, investighează sincer de ce:
   remedierea nu a fost niciodată încercată de fapt sau o încercare anterioară nu
   a abordat cauza reală de fond.

5. **Prioritizăm acum munca de refactorizare pe baza dovezilor sau pe baza
   celui care s-a plâns cel mai recent sau cel mai tare?** Fii sincer despre
   procesul real de prioritizare al echipei tale și despre cum se compară cu ce ar
   sugera o analiză a punctelor fierbinți bazată pe dovezi.

6. **Ce ne-ar costa, în rată de defecte sau încetinire a livrării, să lăsăm
   primul nostru punct fierbinte neabordat încă un an?** Această întrebare
   obligă la o estimare concretă a costului, care poate ancora o decizie de
   prioritizare, în loc să lase punctul fierbinte o preocupare abstractă,
   ușor de despriorizat.

## Perspectiva sectorială

**Startup.** Analiza formală a punctelor fierbinți este de obicei inutilă la o
bază de cod mică și tânără, pe care întreaga echipă o ține încă, colectiv, în
cap. Tehnica devine valoroasă tocmai când baza de cod a crescut peste
dimensiunea la care vreo persoană poate identifica fiabil zonele cele mai rele
doar din memorie, adesea cândva în primul an sau doi de creștere susținută.

**Afacere mică.** Uneltele gratuite sau ieftine pot extrage datele de
volatilitate direct din istoricul controlului versiunilor existent, cu configurare
minimă; combină-le cu datele de complexitate pe care le raportează deja linterul
sau unealta ta de analiză statică, în loc să investești în software comercial
dedicat de analiză a punctelor fierbinți la această scară.

**Companie mare.** Analiza punctelor fierbinți este locul în care prioritizarea
bazată pe dovezi aduce cea mai mare rentabilitate, întrucât intuiția eșuează cu
adevărat la scara unei baze de cod care cuprinde sute de servicii și mii de
fișiere. Investește în rularea regulată a acestei analize pe toată baza de cod și
în raportarea ei la datele despre incidente, pentru a construi un argument
validat și ușor de apărat pentru investiția în refactorizare.

**Administrație publică.** Sistemele de lungă durată, uneori vechi de decenii,
sunt o potrivire naturală pentru analiza punctelor fierbinți, deoarece istoricul
acumulat al controlului versiunilor oferă un semnal bogat, pe termen lung, despre
care părți ale sistemului s-au dovedit cu adevărat problematice în timp. Această
abordare bazată pe dovezi este și o unealtă concretă și convingătoare pentru a
justifica investițiile în modernizare în fața părților interesate care au nevoie
de mai mult decât opinia informală a unui inginer ca să aprobe finanțarea.

## Exemple

**Companie mare.** Platforma de procesare a daunelor a unei companii de asigurări,
cu peste două milioane de linii de cod în zeci de servicii, acumulase ani de
plângeri informale că „modulul de validare a daunelor” ar fi problematic, dar
din aceste plângeri nu urmase niciodată vreo prioritizare formală. O analiză a
punctelor fierbinți, care combina șase luni de date de volatilitate cu scoruri
de complexitate, a identificat un cu totul alt fișier, un utilitar comun de
conversie valutară, îngropat adânc într-o dependență rar discutată, drept
adevăratul prim punct fierbinte, unul care nu apăruse niciodată într-o plângere
din vreo retrospectivă. Raportarea la datele despre incidente a confirmat că acest
utilitar era implicat într-o pondere disproporționată a defectelor de calcul
financiar din anul precedent, iar o refactorizare țintită a acelui utilitar anume,
și nu a modulului pe care îl acuzase toată lumea informal, a produs o reducere
măsurabilă a incidentelor conexe în trimestrul următor.

**Administrație publică.** Sistemul de licențiere, vechi de decenii, al unei
agenții de stat pentru vehicule a trecut printr-o analiză a punctelor fierbinți
ca parte a unui argument de business pentru modernizare. Analiza a identificat un
mic grup de fișiere, sub 3% din totalul bazei de cod, responsabil pentru o pondere
disproporționată atât a volatilității, cât și a complexității, iar raportarea la
jurnalul de incidente al agenției a arătat că acest grup reprezenta aproape 40%
din toate defectele raportate ale sistemului în ultimii trei ani. Această
constatare concretă, bazată pe dovezi, mult mai convingătoare decât afirmația
generală că „sistemul e vechi și trebuie modernizat”, a devenit piesa centrală a
unei cereri bugetare reușite pentru un efort țintit, incremental, de modernizare,
axat în mod specific pe acel grup, în locul unei înlocuiri complete a sistemului,
mult mai scumpă.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea analizei punctelor fierbinți este investiția țintită, bazată pe
dovezi: ambele exemple de mai sus arată un caz în care analiza formală a
redirecționat atenția de refactorizare de acolo unde o concentrase plângerea
informală spre locul în care datele arătau că se află de fapt problema, produând o
rentabilitate măsurabil mai bună decât ar fi produs o investiție netintită sau
ghidată de intuiție.

Costul total de proprietate este scăzut, deoarece datele de volatilitate vin direct
din istoricul controlului versiunilor existent, iar datele de complexitate sunt de
obicei deja disponibile din uneltele de analiză statică (subiectul 4.4); investiția
principală este efortul periodic de analiză și timpul de judecată umană pentru
interpretarea rezultatelor și decizia ce acțiune merită fiecare punct fierbinte
identificat.

## Anti-modele și capcane

- **Folosirea doar a volatilității, fără complexitate:** un semnal slab singur, care
  poate semnala drept fals pozitiv cod sănătos, dezvoltat activ.
- **Tratarea unui clasament de puncte fierbinți ca listă automată de acțiuni, fără
  judecată umană:** ratează distincția esențial-versus-accidental care determină
  răspunsul potrivit.
- **Prioritizarea refactorizării pe baza celei mai zgomotoase plângeri, nu a
  dovezilor:** direcționează frecvent greșit efortul, departe de locul unde datele
  arată de fapt problema.
- **Nicio raportare vreodată a punctelor fierbinți la datele despre incidente sau
  defecte:** ratează pasul de validare care întărește argumentul pentru a acționa
  pe baza analizei.
- **Rularea analizei o singură dată și niciodată repetarea ei:** ratează dacă efortul
  de remediere funcționează de fapt în timp.
- **Ignorarea unui punct fierbinte semnalat persistent, fără investigarea motivului
  pentru care remedierea nu s-a menținut:** irosește valoarea de diagnostic a
  analizei repetate.

## Model de maturitate

- **Nivelul 1, Inițiere:** Prioritățile de refactorizare sunt stabilite prin
  intuiție sau prin volumul plângerilor, fără ca date de volatilitate sau de
  complexitate să informeze decizia.
- **Nivelul 2, Dezvoltare:** Unele echipe verifică informal date de volatilitate
  sau de complexitate, dar nu există o practică consecventă de analiză a
  punctelor fierbinți la nivelul organizației.
- **Nivelul 3, Standardizare:** Analiza punctelor fierbinți, care combină
  volatilitatea și complexitatea, rulează regulat și informează consecvent
  prioritizarea refactorizărilor în toată organizația.
- **Nivelul 4, Gestionare:** Punctele fierbinți sunt raportate la datele despre
  incidente și defecte pentru a valida analiza, iar tendința pe cicluri succesive
  este urmărită activ.
- **Nivelul 5, Orchestrare:** Organizația poate indica îmbunătățiri concrete și
  măsurabile ale ratei defectelor sau ale livrării, provenite din investiția în
  refactorizare informată de puncte fierbinți, iar analiza este o intrare de
  rutină și de încredere în deciziile de investiții în inginerie.

## Idei de discuție

1. Cum ar arăta lista noastră de top al punctelor fierbinți dacă am rula această analiză astăzi?
2. S-ar potrivi lista aceea cu sau ar contrazice senzația informală actuală a echipei despre cele mai grave zone-problemă ale noastre?
3. Avem datele necesare pentru a raporta punctele fierbinți la incidente reale?
4. A persistat o zonă-problemă cunoscută în ciuda încercărilor anterioare de a o repara și de ce?
5. Ce ne-ar costa să lăsăm primul nostru punct fierbinte actual neabordat încă un an?

## Concluzii principale

- **Volatilitatea combinată cu complexitatea** identifică punctele fierbinți reale
  mult mai fiabil decât oricare dintre metrici singură.
- Analiza punctelor fierbinți nu cere **nicio anchetă manuală**; se poate calcula
  automat din datele existente ale controlului versiunilor și ale analizei statice.
- Tratează un clasament de puncte fierbinți ca **dovadă pentru prioritizare**, nu
  ca verdict automat; judecata umană este în continuare necesară.
- **Raportează punctele fierbinți la datele despre incidente și defecte** pentru a
  valida analiza și a întări argumentul pentru a acționa pe baza ei.
- Urmărește punctele fierbinți **pe cicluri succesive de analiză**, ca să confirmi
  că remedierea funcționează de fapt, nu doar o dată, ca instantaneu.

## Referințe și lecturi suplimentare

- *Your Code as a Crime Scene*, de Adam Tornhill (textul fondator despre analiza
  punctelor fierbinți, care combină volatilitatea și complexitatea din datele
  controlului versiunilor).
- *Software Design X-Rays*, de Adam Tornhill (tehnici suplimentare pentru analiza
  comportamentală a codului folosind istoricul controlului versiunilor).
- Nagappan, Nachiappan, și Thomas Ball, „Use of Relative Code Churn Measures to
  Predict System Defect Density”, *ICSE* (2005): cercetare empirică despre
  relația dintre volatilitate și densitatea defectelor.
- *Refactoring: Improving the Design of Existing Code*, de Martin Fowler (tehnici
  pentru abordarea complexității accidentale odată identificate).
