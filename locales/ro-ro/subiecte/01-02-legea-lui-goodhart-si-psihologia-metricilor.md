# 1.2 Legea lui Goodhart și psihologia metricilor

## Prezentare generală și motivație

[Legea lui Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law), numită
după economistul Charles Goodhart, se formulează de obicei astfel: când o
măsură devine țintă, încetează să mai fie o măsură bună. Observația
originală a lui Goodhart, din 1975, privea politica monetară, dar reformularea
ulterioară a antropologului Marilyn Strathern este versiunea de care au
nevoie de fapt echipele de software și este propoziția pe care se sprijină
toată cartea. Fiecare metrică din fiecare subiect următor, frecvența
implementărilor, acoperirea testelor, scorurile de satisfacție, poartă acest
risc, iar fiecare recomandare din carte este, într-o formă sau alta, o
strategie de gestionare a lui.

Mecanismul nu este misterios. Oamenii răspund la stimulente, iar o metrică
atașată unei recompense, unei evaluări sau unei reputații este un stimulent
indiferent dacă cineva a intenționat-o astfel. Odată ce o echipă știe că
„frecvența implementărilor” este urmărită, cea mai ieftină cale de a mișca
numărul nu este întotdeauna cea intenționată: împarte o modificare
semnificativă în cinci implementări banale, iar numărul crește fără să se fi
îmbunătățit nimic real. Aceasta nu este o poveste despre oameni răuvoitori.
Ingineri obișnuiți și binevoitori răspund exact așa la stimulente prost
proiectate, pentru că stimulentul, nu intenția din spatele lui, este cel care
modelează comportamentul sub presiune.

Pentru organizațiile mari miza este mai mare, pentru că distanța dintre
proiectantul metricii și persoana al cărei comportament îl modelează crește
odată cu scara. Un lider de echipă care construiește o metrică pentru propria
echipă de opt oameni poate urmări direct manipularea și poate corecta rapid
cursul. O metrică introdusă într-o divizie de șase sute de oameni, sau
publicată într-un raport guvernamental de performanță citit de un legislativ,
trece prin straturi de oameni care nu l-au cunoscut pe autor și au toate
motivele să trateze litera metricii drept scop. Distorsiunea se compune cu
distanța, și tocmai de aceea acest subiect, nu unul de mai târziu, este locul
în care cartea își pune centrul de greutate.

## Principii-cheie

- **Presupune că orice metrică stimulată va fi manipulată.** Proiectează
  împotriva asta de la prima versiune, nu după ce distorsiunea este
  descoperită.
- **Manipularea este rațională, nu răuvoitoare.** Oamenii răspund rezonabil la
  stimulentul pe care l-ai construit; a-i învinui nu repară nimic.
- **Distanța față de responsabilul metricii crește riscul de distorsiune.**
  Cu cât un număr se îndepărtează mai mult de persoana care îi înțelege
  intenția, cu atât devine mai mult litera regulii, nu spiritul ei.
- **Rapoartele și intervalele rezistă mai bine manipulării decât numărătorile
  brute.** O numărătoare brută recompensează volumul; un raport bine ales
  recompensează comportamentul pe care îl vrei de fapt.
- **O gardă de protecție nu este opțională la o metrică stimulată.** Fiecare
  metrică la care atașezi o recompensă are nevoie de o contra-metrică
  asociată, care nu trebuie să se degradeze.

## Recomandări

### Clasifică fiecare metrică după expunerea la stimulente

Înainte de a publica o metrică undeva vizibil, întreabă direct: depinde
recompensa, evaluarea, reputația sau bugetul cuiva de mișcarea acestui număr
într-o anumită direcție? Dacă da, este o metrică stimulată și are nevoie de o
gardă de protecție (mai jos) înainte să intre în funcțiune. Dacă nu, este o
metrică de diagnostic (subiectul 1.1) și are un risc de manipulare mai mic,
dar niciodată zero, pentru că oamenii pot totuși modela un număr la care se
așteaptă doar să fie judecați mai târziu, chiar fără un stimulent formal
atașat azi.

### Preferă rapoartele, ratele și cohortele numărătorilor brute

O numărătoare brută precum „tichete închise” poate fi manipulată făcând mai
mult dintr-un lucru de valoare mică. Un raport precum „procentul de tichete
rezolvate la primul contact” recompensează comportamentul de fond, nu volumul.
O **cohortă**, un grup definit de un punct de pornire comun, cum ar fi toate
implementările dintr-o săptămână dată, împiedică o tendință recentă proastă să
se ascundă într-un agregat pe termen lung care o flatează. Oricând alegi între
o numărătoare și o rată care surprinde același comportament de fond, alege
rata.

### Asociază fiecare metrică stimulată cu o gardă de protecție

O **metrică-gardă** este o contra-metrică asociată, care nu trebuie să se
degradeze cât timp metrica principală se îmbunătățește. Frecvența
implementărilor se asociază cu rata de eșec a modificărilor; timpul de
livrare se asociază cu rata defectelor scăpate; timpul de tratare al unei
echipe de suport se asociază cu satisfacția clienților. Garda este cea care
face manipularea ieftină vizibil costisitoare: o echipă care îmbunătățește
numărul stimulat degradând garda este prinsă de asociere, nu de noroc.
Proiectează garda în același timp cu metrica principală, niciodată ca o
gândire ulterioară după ce manipularea a fost deja descoperită.

### Urmărește cele patru tipare clasice de manipulare

Distorsiunea sub legea lui Goodhart tinde să cadă într-un număr mic de forme
recognoscibile. **Manipularea pragului** optimizează exact până la țintă și se
oprește (o țintă de acoperire a testelor de 95% produce teste banale ca să
atingă exact 95%, nu o acoperire autentică). **Manipularea definiției**
schimbă ce se numără, nu ce se întâmplă (redefinirea lui „rezolvat” ca să
excludă cazurile grele). **Manipularea momentului** mută când este
înregistrată munca, nu când a avut loc (grupând implementările chiar înainte să
se închidă fereastra de raportare). **Manipularea prin substituție** livrează
litera metricii abandonându-i intenția (împărțirea unei modificări reale în
multe banale ca să umfle frecvența implementărilor). A numi aceste tipare
explicit, în fața echipei, le face mult mai ușor de observat când apar în
propriile numere.

### Separă măsurarea de recompensă oriunde poți

Cea mai puternică gardă dintre toate este structurală: desparte metrica de
recompensa individuală. O metrică folosită strict ca să înțelegi un sistem,
fără ca salariul, calificativul sau poziția cuiva să depindă de direcția ei,
întâmpină o presiune de manipulare mult mai slabă decât una legată de o
evaluare. De aceea distincția diagnostic versus evaluativ din subiectul 1.1
contează atât de mult în practică: a păstra o metrică de diagnostic este adesea
mai ieftin și mai eficient decât orice inginerie de gărzi aplicată după fapt.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Numărători brute | Simplu de calculat și de explicat | Foarte ușor de manipulat prin volum |
| Rapoarte și rate | Recompensează comportamentul corect, rezistă manipulării prin volum | Pot ascunde o problemă de numitor care scade |
| Asocierea cu o gardă de protecție | Face manipularea ieftină vizibil costisitoare | Dublează metricile de definit, de deținut și de întreținut |
| Doar diagnostic (fără recompensă individuală) | Cea mai mică presiune de manipulare dintre opțiuni | Pârghie motivațională directă mai slabă pentru conducere |
| Metrici puternic stimulate | Răspuns comportamental puternic și rapid | Risc mare de distorsiune, adesea în cadrul unui singur ciclu de raportare |

Tensiunea centrală este **puterea de motivare versus riscul de distorsiune**.
Metricile care mișcă cel mai repede comportamentul, legarea directă a unui
număr de recompensă, sunt exact cele mai expuse legii lui Goodhart. Rezolvă
tensiunea rezervând stimulentele puternice pentru metricile de rezultat care
sunt cu adevărat greu de manipulat ieftin și asociind tot ce stimulezi cu o
gardă proiectată în același timp, nu lipită după apariția primei distorsiuni.

## Întrebări de discutat cu echipa ta

1. **Pentru fiecare metrică de care depinde recompensa cuiva, care este cea mai
   ieftină cale de a o manipula și am prinde azi acea manipulare?** Așază-te și
   proiectează deliberat exploatarea pentru fiecare număr stimulat de pe
   tabloul tău de bord: cum ar face o echipă rațională și binevoitoare ca
   acesta să arate bine fără să facă munca de fond? Dacă nu poți numi o cale
   prin care ai prinde acea manipulare, nu ești încă pregătit să stimulezi
   metrica. Exercițiul este incomod, iar incomoditatea este tocmai ideea.

2. **Care dintre metricile noastre actuale au alunecat deja într-unul dintre
   cele patru tipare de manipulare, a pragului, a definiției, a momentului sau
   prin substituție, fără ca cineva să o spună?** Distorsiunea rareori se
   anunță singură; apare ca un număr care arată grozav în timp ce reclamațiile,
   incidentele sau feedbackul clienților spun altă poveste. Parcurge tabloul de
   bord față de fiecare tipar, pe nume, și fii sincer în privința
   potrivirilor.

3. **Are fiecare metrică stimulată de pe tabloul nostru de bord o gardă
   asociată și a fost garda proiectată în același timp cu metrica?** O gardă
   adăugată doar după descoperirea manipulării este o reparație, nu o alegere
   de proiectare, și de obicei vine prea târziu ca să prevină prima rundă de
   daune aduse încrederii. Auditează metricile stimulate special pentru
   această asociere.

4. **Cât de departe călătorește această metrică de la persoana care îi înțelege
   intenția până la persoana al cărei comportament îl modelează?** O metrică
   construită de o echipă de platformă și consumată la trei straturi de
   management distanță, sau publicată într-un raport public citit de oameni
   care n-au văzut niciodată instrumentarea, este mult mai expusă manipulării
   „literă, nu spirit” decât una proiectată de o echipă pentru sine. Cartografiază
   această distanță pentru metricile tale cele mai importante.

5. **Am scos vreodată un stimulent dintr-o metrică după ce am descoperit că era
   manipulată și cât ne-a costat în încredere să reparăm?** Organizațiile
   descoperă adesea legea lui Goodhart pe calea grea, după un trimestru sau un
   an de comportament distorsionat, iar repararea costă mai mult decât ar fi
   costat prevenirea. Adu un incident real, dacă ai unul, și extrage lecția
   explicit, în loc să treci mai departe pe tăcute.

6. **Unde am presupus că manipularea era o problemă de integritate personală,
   nu un răspuns rațional la un stimulent prost proiectat?** A învinui
   indivizii pentru că răspund previzibil la un stimulent pe care l-ai
   construit rareori repară ceva și adesea dăunează și mai mult încrederii.
   Reîncadrează fiecare incident de manipulare pe care ți-l amintești ca pe o
   problemă de proiectare a metricii, nu ca pe o problemă de caracter a
   persoanei, și întreabă ce reproiectare l-ar fi prevenit.

## Perspectiva sectorială

**Startup.** Cu o echipă minusculă, cea mai rapidă gardă este conversația
directă: toată lumea poate vedea un număr și poate întreba imediat „stai, de
ce a sărit asta?”. Riscul real este un fondator care leagă o metrică de
povestea pentru strângerea de fonduri (creștere cu orice preț) fără o gardă
asociată, pentru că investitorii externi exercită exact genul de presiune
distantă și cu miză mare care face manipularea atractivă.

**Afacere mică.** Uneltele gata făcute vin adesea cu tablouri de bord
implicite construite în jurul numărătorilor (tichete închise, apeluri
preluate) pentru că numărătorile sunt ușor de calculat. Convertește-le activ
în rate oriunde permite unealta și rezistă tentației de a lega un singur
număr de un bonus sau de o evaluare fără a-i identifica mai întâi garda.

**Companie mare.** Distanța este riscul dominant: o metrică proiectată de o
echipă de platformă pentru diagnostic intern este preluată trei straturi de
management mai târziu și transformată într-un KPI pe care nimeni dintre cei
care l-au construit nu l-ar recunoaște. Guvernează asta explicit (subiectul
1.4): cere o gardă documentată înainte ca orice metrică să fie aprobată pentru
folosire într-o evaluare de performanță sau într-o fișă de scor executivă.

**Administrație publică.** Indicatorii de performanță publicați înfruntă cea
mai puternică presiune de manipulare dintre toate categoriile din această
carte, pentru că o țintă ratată poate avea consecințe bugetare sau politice.
Auditează definiția în sine la o cadență fixă, nu doar numărul, deoarece
tiparul clasic de manipulare din sectorul public este redefinirea discretă a
cine contează (o listă de așteptare „rezolvată” prin reclasificarea celor care
așteaptă), nu îmbunătățirea serviciului de fond.

## Exemple

**Companie mare.** O companie de tehnologie pentru retail a stabilit o țintă de
99% acoperire cu teste automate pe toate serviciile, legată de un scor de
calitate pe echipă folosit în revizuirile trimestriale. În două trimestre,
acoperirea a atins 99%, iar rata incidentelor a crescut. Un audit a găsit
echipe care scriau teste banale, afirmând că o funcție a returnat fără să
arunce o excepție, doar ca să mulțumească unealta de acoperire, în timp ce
testarea autentică a cazurilor-limită nu se îmbunătățise deloc. Remediul a
înlocuit ținta brută de acoperire cu o metrică asociată: acoperirea plus un
scor de testare prin mutații (subiectul 4.2), care măsoară dacă testele
prind de fapt defectele injectate, ceea ce este mult mai greu de manipulat
ieftin.

**Administrație publică.** Agenția de asigurări de șomaj a unui stat era
măsurată după mediana zilelor până la prima plată, publicată către legislativ.
Sub presiunea de a atinge o țintă, un birou regional a început să reclasifice
discret cererile mai greu de procesat drept „incomplete” și să le excludă din
numitor, ceea ce făcea mediana publicată să arate excelent în timp ce unii
solicitanți așteptau mult mai mult decât sugera raportul. Un audit
independent al definiției în sine, nu doar al numărului, a scos la iveală
practica. Remediul agenției a înghețat definiția, a publicat criteriile de
excludere și a adăugat o metrică-gardă care urmărește chiar rata cererilor
incomplete, astfel încât un salt al reclasificărilor să fie acum vizibil, nu
ascuns.

## Argumentul de business: motivații, ROI și TCO

Randamentul luării în serios a legii lui Goodhart este munca refăcută evitată.
O organizație care proiectează gărzile de la început cheltuiește un efort
suplimentar modest definind o a doua metrică alături de prima. O organizație
care sare peste acest pas cheltuiește adesea un trimestru întreg sau mai mult
de efort rău direcționat până iese la iveală distorsiunea, urmat de costul mult
mai greu de a desface comportamentul manipulat și de a reconstrui încrederea în
număr. Exemplul din retail de mai sus este tipic: ieftin de prevenit, scump de
reparat.

Costul total de proprietate al unei gărzi nu este zero: este o a doua metrică
de definit, de instrumentat și de revizuit. Dar acest cost este mic și fix în
comparație cu costul nemărginit al unui stimulent care recompensează pe tăcute
comportamentul greșit luni de zile înainte ca cineva să observe. Fiecare
subiect de după acesta include acest compromis în preț, motiv pentru care
asocierea cu o gardă apare ca recomandare în restul cărții, nu doar aici.

## Anti-modele și capcane

- **Publicarea unei metrici stimulate fără gardă:** cea mai frecventă cauză
  de rădăcină a unui tablou de bord distorsionat din această carte.
- **A trata manipularea ca pe un defect personal:** învinovățește indivizii
  pentru un răspuns rațional la un stimulent prost proiectat și nu repară
  nimic.
- **A audita numărul, dar niciodată definiția:** modul clasic de eșec din
  sectorul public, în care metrica pare în regulă pentru că cine contează s-a
  schimbat discret.
- **A presupune că o metrică ce a funcționat ca diagnostic va rămâne sigură
  odată ce devine evaluativă:** expunerea se schimbă în clipa în care se
  atașează recompensa, chiar dacă nimic altceva din metrică nu se schimbă.
- **Proiectarea gărzii abia după primul incident de manipulare:** o reparație
  care vine după ce paguba adusă încrederii este deja făcută.
- **Ignorarea distanței:** presupunerea că o metrică va fi citită așa cum a
  intenționat proiectantul ei după ce a călătorit prin mai multe straturi de
  management sau într-un raport public departe de el.

## Model de maturitate

- **Nivelul 1, Inițiere:** Metricile sunt stimulate ad hoc, fără a lua în
  considerare riscul de manipulare, iar distorsiunea este descoperită abia
  după ce calitatea sau încrederea suferă vizibil.
- **Nivelul 2, Dezvoltare:** Unele echipe recunosc manipularea după fapt și se
  ajustează informal, dar nu există o practică consecventă de proiectare
  prealabilă a gărzilor.
- **Nivelul 3, Standardizare:** Fiecare metrică stimulată din întreaga
  organizație cere o gardă documentată înainte de aprobare, iar cele patru
  tipare de manipulare sunt numite și predate.
- **Nivelul 4, Gestionare:** Riscul de manipulare este monitorizat activ:
  definițiile sunt auditate periodic, perechile de gărzi sunt revizuite pentru
  a vedea dacă încă prind distorsiunea, iar incidentele de manipulare sunt
  urmărite ca metrică de sine stătătoare.
- **Nivelul 5, Orchestrare:** Organizația tratează legea lui Goodhart ca pe o
  constrângere permanentă de proiectare, revizuită automat ori de câte ori se
  propune o metrică nouă, și poate indica reproiectări concrete care au
  prevenit distorsiunea înainte să se producă, nu doar după.

## Idei de discuție

1. Care este cea mai importantă metrică din organizația noastră care nu are azi nicio gardă?
2. Am văzut vreodată un număr îmbunătățindu-se în timp ce realitatea de fond se înrăutățea?
3. Cine ar observa dacă definiția din spatele uneia dintre metricile noastre publice s-ar schimba discret?
4. Spre care dintre cele patru tipare de manipulare (prag, definiție, moment, substituție) este mai înclinată organizația noastră?
5. Cât ne-ar costa, în încredere, să descoperim că o metrică majoră a fost manipulată un an întreg?

## Concluzii principale

- **Legea lui Goodhart:** o măsură care devine țintă încetează să mai fie o
  măsură bună, iar asta guvernează fiecare metrică din această carte.
- Manipularea este un **răspuns rațional la stimulent**, nu un defect de
  caracter; repară proiectarea stimulentului, nu oamenii.
- Preferă **rapoartele, ratele și cohortele** numărătorilor brute oriunde
  surprind același comportament.
- Fiecare metrică stimulată are nevoie de o **gardă de protecție**, proiectată
  în același timp, nu adăugată după descoperirea distorsiunii.
- Urmărește cele patru tipare de manipulare pe nume: **manipularea pragului,
  a definiției, a momentului și prin substituție**.
- **Distanța** dintre proiectantul unei metrici și persoana al cărei
  comportament îl modelează crește riscul de distorsiune; ține acea distanță
  scurtă oriunde poți.

## Referințe și lecturi suplimentare

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience"
  (1975): originea legii lui Goodhart.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University
  System" (1997): reformularea larg citată, „when a measure becomes a
  target, it ceases to be a good measure”.
- *Seeing Like a State*, de James C. Scott (cum metricile lizibile distorsionează
  sistemele pe care le măsoară, la scara națiunilor).
- *The Tyranny of Metrics*, de Jerry Z. Muller (un tratat cât o carte despre
  fixația pe metrici și costurile ei în multe profesii).
- *Lean Analytics*, de Alistair Croll și Benjamin Yoskovitz (metrici de paradă
  versus metrici acționabile și proiectarea gărzilor în context de startup).
- Ghidurile U.S. Government Accountability Office (GAO) privind măsurarea
  performanței și GPRA Modernization Act: raportarea performanței în sectorul
  public și riscul de manipulare.
