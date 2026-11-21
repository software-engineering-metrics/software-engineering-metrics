# 1.3 Rezultatele înaintea producției: alegerea a ceea ce măsurăm

## Prezentare generală și motivație

Fiecare metrică de inginerie cade într-una din trei categorii, iar confuzia
dintre ele este al doilea cel mai frecvent mod de eșec din această carte, după
ignorarea totală a [legii lui Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
O **metrică de intrare** măsoară efortul cheltuit: ore de inginer, dolari
investiți, story points angajate. O **metrică de producție** măsoară ce a
produs sistemul: funcționalități livrate, pull requesturi integrate, tichete
închise. O **metrică de rezultat** măsoară schimbarea care a contat cu
adevărat: venit păstrat, incidente evitate, timp economisit pentru un
utilizator. Echipele gravitează spre intrări și producție pentru că sunt ușor
de numărat și se află complet sub controlul echipei. Valoarea, aproape
întotdeauna, se află în rezultate, care apar mai lent, sunt mai zgomotoase de
măsurat și mai greu de atribuit muncii unei singure echipe.

Acest subiect este despre rezistența deliberată la această gravitație. Un
tablou de bord construit în întregime din intrări și producție poate arăta
impresionant de ocupat fără să producă nicio valoare reală: o echipă poate
livra zeci de funcționalități pe care nu le folosește nimeni, poate închide
sute de tichete care se redeschid peste o săptămână sau poate respecta fiecare
estimare în story points în timp ce rezultatele reale ale produsului, retenția,
satisfacția, veniturile, rămân plate sau scad. Nimic din această agitație nu
apare ca problemă pe un tablou de bord doar cu producție, pentru că astfel de
tablouri nu sunt făcute să o vadă.

La scara unei companii mari sau a administrației publice, această distincție
determină dacă conducerea poate deosebi o echipă productivă de una doar
activă. O divizie poate afișa ani la rând numere excelente de producție,
funcționalități livrate, sprinturi închise, în timp ce rezultatul care contează
cu adevărat pentru un finanțator sau un legislativ, venitul păstrat, timpii de
așteptare ai cetățenilor reduși, se erodează pe tăcute dedesubt. „Am livrat
foaia de parcurs” nu este aceeași afirmație ca „foaia de parcurs a făcut
lucrurile mai bune”, iar doar un set de metrici înclinat spre rezultate poate
face diferența între cele două.

## Principii-cheie

- **Intrările și producția sunt indicatori indirecți; rezultatele sunt
  lucrul în sine.** Înclină setul de metrici spre rezultate oriunde le poți
  atinge.
- **Ușurința măsurării nu este un motiv de a măsura ceva.** Lucrurile cel mai
  ușor de numărat sunt de obicei intrările și producția, nu pentru că ar conta
  cel mai mult, ci pentru că sunt simple mecanic de captat.
- **Atribuirea devine mai grea pe măsură ce te apropii de rezultate.**
  Acceptă deliberat acest compromis, în loc să te retragi spre producție
  pentru că rezultatele sunt mai greu de atribuit.
- **O echipă își poate controla intrările și producția, dar poate doar
  influența rezultatele.** Proiectează responsabilitatea în consecință: cere
  echipelor socoteală pentru ce pot controla cu adevărat și urmărește
  rezultatele ca semnale comune, între echipe.
- **Un singur rezultat-stea polară, cu un set mic de factori, bate un perete
  de tile de producție.** Acoperirea trebuie să vină din structură, nu din
  volumul brut al tabloului de bord.

## Recomandări

### Clasifică fiecare metrică înainte de a o adopta

Pentru orice metrică candidată, întreabă în care dintre cele trei categorii
cade. „Pull requesturi integrate pe săptămână” este producție. „Procentul de
pull requesturi integrate care au cauzat un incident în producție în decurs de
o săptămână” este mai aproape de un rezultat, pentru că măsoară o consecință,
nu un volum. Această clasificare durează treizeci de secunde și ar trebui să fie
obligatorie înainte ca o metrică să fie adăugată pe orice tablou de bord al
unei echipe sau al organizației, pentru că este cea mai rapidă cale de a prinde
un tablou de bord care se umple pe tăcute cu producție ușor de numărat în timp
ce crede că măsoară valoare.

### Construiește un arbore de metrici sub un singur rezultat

Nu urmări o listă plată. Aranjează metricile ca un **arbore de metrici**
(numit uneori arbore de KPI): o metrică de rezultat de la vârf, descompusă în
factorii care o alimentează cauzal sau matematic, până la măsurile operaționale
de producție și de intrare pe care echipele le dețin efectiv. Când rezultatul
de sus se mișcă, arborele îți spune ce factor de nivel inferior să investighezi,
transformând „numărul a scăzut” în „acest pas anume din flux este cauza”.
Numește o singură **metrică stea polară** în vârf oriunde domeniul tău permite
una: măsura care surprinde cel mai bine valoarea livrată, frecvența
implementărilor asociată cu rata de eșec a modificărilor pentru o echipă de
platformă sau utilizarea activă săptămânală a unei funcționalități de bază
pentru o echipă de produs.

### Dă greutate rezultatelor în revizuiri, nu doar pe tabloul de bord

Un arbore de metrici valorează cât valorează felul în care este folosit în
practică. În revizuirile de sprint, în revizuirile trimestriale de business și
în actualizările către conducere, deschide cu numărul de la nivelul
rezultatului și folosește metricile de producție și de intrare de sub el doar
ca să explici mișcarea, nu ca să-l înlocuiești. O echipă care raportează „am
închis 40 de tichete în acest sprint” fără niciun context de rezultat nu ți-a
spus nimic despre dacă munca a contat; o echipă care raportează „defectele
scăpate au scăzut cu 30% și iată investiția în testare care a dus la asta” ți-a
spus ceva real.

### Acceptă un feedback mai lent pentru metricile de rezultat și asociază-le cu indicatori anticipativi mai rapizi

Metricile de rezultat sunt adesea întârziate: confirmă un rezultat după ce a
trecut destul timp ca să fii sigur. Această întârziere este un cost real, pentru
că amână învățarea. Asociază fiecare metrică de rezultat cu cel puțin un
indicator anticipativ, o metrică ce se mișcă mai devreme și prezice rezultatul,
astfel încât o echipă să poată corecta cursul înainte să aterizeze numărul lent
și autoritar. Frecvența implementărilor este un indicator anticipativ pentru
rezultatele de livrare; o tendință ascendentă a defectelor scăpate este un
indicator anticipativ pentru un rezultat viitor de fiabilitate. Folosește
indicatorii anticipativi ca să acționezi devreme și metricile de rezultat
întârziate ca să confirmi că ai avut dreptate.

## Compromisuri: avantaje și dezavantaje

| Categorie | Avantaje | Dezavantaje |
| --- | --- | --- |
| Metrici de intrare | Complet sub controlul echipei, ușor de numărat | Cea mai slabă legătură cu valoarea reală; ușor de manipulat prin volum |
| Metrici de producție | Ușor de numărat, responsabilitate clară, feedback rapid | Recompensează activitatea în loc de impact; pot crește în timp ce valoarea scade |
| Metrici de rezultat | Reflectă direct ce contează; greu de manipulat ieftin | Lente, zgomotoase și greu de atribuit unei singure echipe |
| Structură de arbore de metrici | Leagă munca zilnică de valoarea strategică; ajută la diagnostic | Cere muncă analitică reală pentru a fi construită și întreținută corect |

Tensiunea centrală este **controlabilitate versus valoare**. Intrările și
producția sunt complet sub controlul unei echipe, ceea ce le face tentante ca
temei de responsabilizare; rezultatele poartă valoarea, dar se află doar
parțial sub influența oricărei echipe, pentru că o funcționalitate bună poate
totuși eșua din motive complet din afara ingineriei. Rezolvă asta cerând
echipelor socoteală pentru intrările și producția pe care le controlează
complet, urmărind în același timp rezultatele ca semnale comune pe care întreaga
organizație le deține împreună, legate printr-un arbore explicit de metrici, nu
lăsate ca o lacună neexplicată între „am făcut munca” și „a ajutat?”.

## Întrebări de discutat cu echipa ta

1. **Pentru fiecare metrică de pe tabloul nostru de bord actual, este o
   intrare, o producție sau un rezultat, și spune echilibrul dintre cele trei o
   poveste onestă?** Majoritatea tablourilor de bord, auditate sincer, se
   dovedesc a fi aproape în întregime intrări și producție, pentru că asta
   raportează uneltele implicit. Clasifică fiecare tilă și numără împărțirea;
   un tablou de bord fără nicio tilă de rezultat măsoară activitate și o
   prezintă drept performanță.

2. **Care este singura noastră metrică de rezultat stea polară și o putem urmări
   în jos, printr-un arbore de metrici, până la ceva ce fiecare echipă deține
   efectiv?** Fără această structură de legătură, un număr de sus care se
   mișcă nu dă nicio indicație unde să cauți, iar echipele nu văd cum metricile
   lor zilnice de producție se leagă de ceva ce contează. Adu metrica ta
   curentă de vârf, dacă ai una, și încearcă să construiești arborele pe loc.

3. **Unde cerem unei echipe socoteală pentru un rezultat pe care îl poate doar
   influența, nu controla?** Aceasta este o sursă frecventă de frustrare și de
   manipulare discretă, pentru că o echipă pedepsită pentru un rezultat
   modelat de factori din afara controlului ei are tot interesul să se
   protejeze, nu să îmbunătățească sistemul real. Identifică aceste
   nepotriviri și fie ajustează responsabilitatea, fie adaugă pârghiile
   lipsă.

4. **Ce indicator anticipativ avem pentru fiecare dintre metricile noastre de
   rezultat întârziate și cu cât timp înainte le prezice?** Un set de metrici
   pur întârziat înseamnă că afli că ai greșit abia după ce e prea târziu ca
   să schimbi cursul ieftin. Adu metricile de rezultat și verifică dacă există
   un indicator anticipativ autentic pentru fiecare, sau dacă zbori pe
   nevăzute între perioadele de raportare.

5. **Cât din ce celebrăm în revizuiri și retrospective este producție („am
   livrat X”) față de rezultat („X a schimbat Y în bine”)?** Limbajul cu care
   echipele sărbătoresc munca modelează în timp ce optimizează, adesea mai
   mult decât o face tabloul de bord. Ascultă-ți propriile ședințe de
   revizuire pe durata unui sprint și numără sincer împărțirea.

6. **Dacă principalele noastre metrici de producție s-ar dubla peste noapte, ar
   trebui neapărat să se îmbunătățească metricile noastre de rezultat sau ar
   putea să se înrăutățească?** Acest experiment mental scoate la iveală
   metricile de producție care s-au deconectat de rezultatele pe care trebuiau
   să le servească, sau chiar li se opun activ, cum ar fi un volum de
   funcționalități care mărește povara de întreținere mai repede decât mărește
   adoptarea.

## Perspectiva sectorială

**Startup.** Alege un singur rezultat, de obicei un indicator indirect pentru
faptul că clienții continuă să primească valoare, cum ar fi retenția
săptămânală sau activarea, și tratează-l ca stea polară din prima zi. Rezistă
atracției metricilor de paradă de producție, precum numărul cumulat de
funcționalități, tentante de raportat investitorilor, dar care nu spun nimic
despre dacă produsul funcționează cu adevărat pentru cineva.

**Afacere mică.** Uneltele tale existente, casa de marcat, biroul de suport,
analitica, raportează de obicei deja un număr apropiat de rezultat, rata de
recumpărare, rata de redeschidere a tichetelor. Folosește-le pe acestea, în
loc să construiești instrumentare proprie de rezultate pe care nu ai
capacitatea să o întreții, și rezistă tentației de a reveni la numărători
brute de activitate doar pentru că sunt vizualizarea implicită.

**Companie mare.** Modul dominant de eșec este un portofoliu de echipe care
optimizează fiecare metrici locale de producție ce nu se adună într-un rezultat
organizațional coerent. Construiește arborele de metrici deliberat,
standardizează definițiile de rezultat între unitățile de business și cere
fiecărei inițiative majore să-și declare ipoteza de rezultat înainte de
finanțare, nu doar planul de producție.

**Administrație publică.** Organele de supraveghere și publicul disting tot mai
bine între „am livrat caietul de sarcini” și „am îmbunătățit rezultatul”, iar un
raport doar cu producție invită exact acel control. Definește succesul ca pe un
rezultat vizibil pentru cetățean (timp de așteptare, rată de erori,
satisfacție) oriunde este posibil legal și practic și fii explicit când este
disponibilă doar o metrică de producție și de ce.

## Exemple

**Companie mare.** Divizia de inginerie a unei companii de logistică a raportat
doi ani o creștere constantă a numărului de „funcționalități livrate pe
trimestru”, în timp ce scorul de satisfacție al clienților de bază stagna pe
tăcute. Un nou VP de inginerie a construit un arbore de metrici cu rădăcina în
rata livrărilor la timp, rezultatul real de business, descompus prin timpul de
staționare în hub și succesul pe ultimul kilometru până la producția la nivel
de echipă. Într-un singur ciclu de raportare s-a văzut că mai multe echipe cu
producție mare livrau funcționalități în zone fără niciun efect măsurabil
asupra metricii stea polară, iar investiția s-a mutat spre factorii pe care
arborele i-a arătat ca fiind cu adevărat importanți.

**Administrație publică.** Echipa digitală a unui serviciu național de sănătate
raportase „module livrate față de caietul de sarcini” pentru un program de
modernizare a dosarelor pacienților pe mai mulți ani. O comisie de supraveghere
a pus altă întrebare: petrec clinicienii mai puțin timp cu introducerea
administrativă a datelor? Echipa a adăugat retroactiv o metrică de rezultat,
mediana minutelor de timp administrativ pe consultație, și a descoperit că
primele module crescuseră de fapt acest timp din cauza frecării din fluxul de
lucru, deși atinseseră toate jaloanele de livrare. Modulele ulterioare au fost
reproiectate direct în jurul metricii de rezultat, iar raportarea publică a
programului a trecut de la o listă de verificare a livrării la o comparație
rezultat înainte și după.

## Argumentul de business: motivații, ROI și TCO

Randamentul dării de greutate rezultatelor este risipa evitată: o organizație
care poate vedea, aproape în timp real, că un flux de producție nu mișcă niciun
rezultat poate redirecționa acea investiție înainte să cheltuiască un ciclu
bugetar întreg ca să afle pe calea grea. Costul ascuns dominant din organizațiile
mari de inginerie nu este subinvestirea, ci munca bine executată care n-ar fi
trebuit niciodată finanțată pentru că era deconectată de orice rezultat real,
iar un tablou de bord doar cu producție nu poate vedea deloc această
deconectare.

Costul total de proprietate al măsurării rezultatelor este mai mare decât al
măsurării producției, pentru că rezultatele sunt cu adevărat mai greu de
definit, de atribuit și de instrumentat, iar construirea unui arbore real de
metrici cere efort analitic deliberat, nu acceptarea a ce exportă implicit o
unealtă. Acest cost merită plătit pentru orice inițiativă peste o dimensiune
modestă, pentru că alternativa, descoperirea după fapt că un an de producție
raportată cu încredere nu a creat nicio valoare reală, costă mult mai mult
decât analiza făcută din timp.

## Anti-modele și capcane

- **Un tablou de bord format doar din tile de producție:** măsoară activitate
  și o prezintă drept performanță.
- **A cere unei echipe socoteală deplină pentru un rezultat pe care nu-l
  poate controla:** crește frustrarea și invită la manipulare pentru
  protecție împotriva unei vinovății nedrepte.
- **Niciun indicator anticipativ pentru un rezultat întârziat:** echipa
  află că a greșit abia după ce e prea scump de reparat.
- **Sărbătorirea limbajului de producție în revizuiri în timp ce se pretinde
  că se prețuiesc rezultatele:** prioritatea declarată și stimulentul trăit
  diverg, iar stimulentul trăit câștigă.
- **O listă plată de metrici fără structură de arbore:** un număr de sus care
  se mișcă nu dă nicio indicație unde să cauți.
- **A trata măsurarea rezultatelor ca prea grea pentru a fi încercată:** readuce
  permanent organizația la intrări și producție ușor de numărat.

## Model de maturitate

- **Nivelul 1, Inițiere:** Metricile sunt aproape în întregime intrări și
  producție; nimeni nu poate numi metricile de rezultat ale organizației sau
  trasa o linie spre ele.
- **Nivelul 2, Dezvoltare:** Unele echipe au identificat informal metrici de
  rezultat, dar nu există un arbore comun de metrici și nici indicatori
  anticipativi consecvenți.
- **Nivelul 3, Standardizare:** Un arbore documentat de metrici leagă un
  rezultat comun stea polară de producția deținută de echipe, aplicat
  consecvent în organizație.
- **Nivelul 4, Gestionare:** Indicatorii anticipativi și cei întârziați sunt
  urmăriți și revizuiți împreună; echipelor li se cere socoteală doar pentru
  ce controlează, iar măsurarea rezultatelor are resurse alocate activ.
- **Nivelul 5, Orchestrare:** Măsurarea rezultatelor este integrată direct în
  deciziile de finanțare și de prioritizare; organizația redirecționează de
  rutină investițiile de la munca cu producție mare și rezultat mic înainte să
  treacă un ciclu bugetar întreg.

## Idei de discuție

1. Numește cea mai importantă metrică de rezultat a organizației noastre. Putem cădea cu toții de acord asupra ei?
2. Care este cea mai mare investiție actuală în producție pe care încă nu o putem urmări până la vreun rezultat?
3. Unde pedepsește structura noastră de responsabilitate o echipă pentru un rezultat pe care nu-l poate controla?
4. Cum ar arăta tabloul nostru de bord dacă am șterge fiecare tilă de producție pură?
5. Cât durează acum să aflăm dacă o funcționalitate livrată a ajutat cu adevărat?

## Concluzii principale

- Clasifică fiecare metrică drept **intrare, producție sau rezultat** și
  înclină deliberat setul spre rezultate.
- Construiește un **arbore de metrici** sub o singură **metrică stea polară**,
  astfel încât un număr de sus care se mișcă să indice o cauză.
- Cere echipelor socoteală pentru ce **controlează** (intrări, producție);
  urmărește rezultatele ca semnale comune pe care întreaga organizație le
  influențează împreună.
- Asociază fiecare **metrică de rezultat** întârziată cu un **indicator
  anticipativ** mai rapid, ca să poți corecta cursul înainte ca numărul lent să
  confirme că ai greșit.
- Un tablou de bord doar cu producție măsoară activitate și o numește
  performanță; tratează asta ca pe un semnal de alarmă, nu ca pe o consolare.

## Referințe și lecturi suplimentare

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (măsurarea livrării bazată pe rezultate).
- *Lean Analytics*, de Alistair Croll și Benjamin Yoskovitz (One Metric That
  Matters și distincția intrare/producție/rezultat în context de startup).
- *Measure What Matters*, de John Doerr (stabilirea de obiective orientate pe
  rezultate și accentul cadrului OKR pe rezultate în loc de activitate).
- *The Lean Startup*, de Eric Ries (metrici acționabile versus metrici de
  paradă și validarea rezultatelor).
- *Key Performance Indicators*, de David Parmenter (construirea unei structuri
  de arbore de KPI sau de metrici sub o măsură stea polară).
