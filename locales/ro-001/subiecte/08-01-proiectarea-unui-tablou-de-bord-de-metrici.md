# 8.1 Proiectarea unui tablou de bord pentru metricile ingineriei

## Prezentare generală și motivație

Fiecare metrică tratată în această carte trebuie, până la urmă, să trăiască
undeva unde oamenii reali se uită cu adevărat, iar un [tablou de bord](https://en.wikipedia.org/wiki/Dashboard_(business)) prost proiectat poate
desface munca atentă a fiecărui subiect anterior: metrici oneste, bine
guvernate, asociate cu gărzi de protecție, prezentate necinstit, încărcat sau
audienței nepotrivite, produc exact confuzia și neîncrederea pe care cartea s-a
străduit să le prevină. Acest subiect este despre meșteșugul specific al
proiectării tabloului de bord: alegerea a ce să arăți și cui, vizualizarea
onestă și structurarea întregului artefact astfel încât să fie folosit efectiv
pentru decizii, nu ignorat sau, mai rău, citit greșit.

Disciplina centrală recomandată de acest subiect este proiectarea specifică
audienței. Un tablou de bord construit pentru standup-ul zilnic al unei echipe
de inginerie are nevoie de metrici diferite, de altă granularitate și de altă
densitate vizuală decât unul construit pentru o revizuire executivă
trimestrială, iar un singur tablou de bord universal, care încearcă să
servească ambele audiențe, de obicei nu o servește bine pe niciuna. Subiectul
tratează proiectarea tabloului de bord ca pe o disciplină reală de design, nu ca
pe o completare tardivă de raportare, bazându-se peste tot pe principiile de
onestitate statistică din subiectul 1.6: fiecare alegere de vizualizare fie
ajută, fie încurcă capacitatea cititorului de a trage concluzia corectă din
date.

Pentru echipele mari, proiectarea tabloului de bord este locul unde multele
gărzi de protecție ale cărții, la nivel de metrică, fie supraviețuiesc în
practică, fie se pierd. Organizațiile mari care conduc zeci de tablouri de bord
de echipă au nevoie de consecvență fără rigiditate, standarde comune care
permit totuși satisfacerea nevoilor specifice ale fiecărei audiențe;
administrațiile publice, ale căror tablouri de bord pot fi expuse controlului
public sau pot servi drept bază pentru raportarea de supraveghere, au nevoie de
standardele de vizualizare onestă recomandate aici, aplicate cu rigoare
deosebită, deoarece un grafic înșelător descoperit de un evaluator extern
dăunează credibilității mult dincolo de metrica în cauză.

## Principii-cheie

- **Proiectează pentru o audiență și o decizie specifice, nu pentru acoperire
  cuprinzătoare.** Un tablou de bord care încearcă să servească pe toată lumea
  de obicei nu servește bine pe nimeni.
- **Fiecare alegere de vizualizare fie ajută, fie induce activ în eroare.**
  Aplică riguros onestitatea statistică din subiectul 1.6: tendință reală, axe
  oneste, incertitudine vizibilă.
- **Puține metrici, bine alese, bat acoperirea cuprinzătoare.** Principiul
  călăuzitor al cărții, începând cu subiectul 1.1, se aplică direct
  proiectării tabloului de bord.
- **Un tablou de bord are nevoie de un responsabil și de un ritm de
  revizuire**, exact ca orice altă metrică guvernată (subiectul 1.4), altfel
  decade într-un artefact neîntreținut și lipsit de încredere.
- **Perechile metrică-gardă de protecție aparțin aceleiași vizualizări.**
  Nu separa niciodată o metrică stimulată de garda ei de protecție pe
  tablouri de bord sau în secțiuni diferite.

## Recomandări

### Proiectează tablouri de bord distincte pentru audiențe și decizii distincte

Construiește vizualizări separate, cu scop specific, în loc de un singur tablou
de bord care servește fiecare audiență: un tablou de bord operațional la nivel
de echipă (ritm zilnic sau săptămânal, metrici granulare de livrare și calitate
pentru uzul propriu al echipei), un tablou de bord pentru conducere (ritm lunar
sau trimestrial, ponderat spre rezultate conform subiectului 7.4, cu mai puține
metrici și mai mult context) și, acolo unde este relevant, un tablou de bord
orientat spre exterior (pentru clienți, organe de supraveghere sau public,
guvernat atent conform rigorii proporționale cu consecințele din subiectul
1.4). Fiecare servește o altă decizie și ar trebui proiectat special pentru
ea, nu ca o vedere filtrată a unui singur tablou de bord principal.

### Aplică consecvent standarde de vizualizare onestă

Urmează principiile de onestitate statistică din subiectul 1.6 ca cerințe
ferme de design, nu ca finisaj opțional: începe axele de valori de la zero,
cu excepția cazului în care o excepție declarată și vizibilă este documentată,
arată tendința în timp, nu un singur instantaneu, folosește mediane și
percentile în loc de medii pentru datele asimetrice și adnotează contextul
(implementări, incidente, schimbări organizaționale), ca un cititor să poată
distinge o schimbare reală de zgomot. Evită manipulările specifice de grafice
numite direct de subiectul 1.6: axe duble care sugerează o corelație falsă,
intervale de date alese selectiv și efecte 3-D care distorsionează
proporțiile.

### Nu separa niciodată o metrică de garda ei de protecție asociată în vizualizări diferite

Urmând principiul asocierii cu gărzi de protecție din subiectul 1.2 ca regulă
fermă de proiectare a tabloului de bord: frecvența implementărilor și rata de
eșec a modificărilor (subiectul 2.10) aparțin aceleiași vizualizări, mereu
vizibile împreună, niciodată împărțite între un tablou de bord de „viteză” și
unul separat de „calitate”, pe care audiențe diferite le-ar putea vedea izolat.
Nu este o simplă preferință de aranjare; separarea unei metrici de garda ei
pe tablouri de bord diferite recreează exact riscul de expunere la stimulente
despre care avertizează subiectul 1.2, chiar dacă ambele cifre sunt tehnic
urmărite undeva.

### Atribuie un responsabil numit și un ritm de revizuire fiecărui tablou de bord

Aplică direct disciplina de guvernanță din subiectul 1.4 artefactului-tablou
de bord în sine, nu doar metricilor individuale pe care le afișează: numește un
responsabil pentru acuratețea și relevanța continuă a tabloului de bord și
stabilește un ritm de revizuire la care metricile sunt adăugate, retrase sau
reconsiderate. Un tablou de bord fără responsabil decade exact cum decade o
metrică fără responsabil (subiectul 1.4), acumulând tile perimate pe care
nimeni nu are autoritatea sau responsabilitatea să le curețe.

### Include o declarație explicită și vizibilă despre ce nu este tabloul de bord

Urmând distincția dintre diagnostic și evaluativ din subiectul 1.1, afirmă
direct și vizibil, pe orice tablou de bord ale cărui metrici ar putea fi
plauzibil folosite abuziv pentru evaluarea individuală, exact ce nu este el:
„aceste metrici descriu sănătatea echipei și a sistemului; nu sunt folosite în
evaluările individuale de performanță”. Această declarație explicită, aplicată
mai ales oricărui tablou de bord ce conține date de activitate (subiectul 3.4)
sau date despre sarcina de gardă (subiectul 6.3), este o alegere mică de design
cu un efect disproporționat în prevenirea exact a derivei evaluative despre
care cartea avertizează de la un capăt la altul.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Un singur tablou de bord cuprinzător pentru toate audiențele | Simplu de construit și întreținut, un singur artefact | Nu servește bine nicio audiență anume; copleșitor pentru unii, insuficient pentru alții |
| Tablouri de bord specifice audienței | Fiecare servește bine decizia sa reală | Mai multe artefacte de construit, întreținut și ținut consecvente |
| Acoperire cuprinzătoare a metricilor pe fiecare vizualizare | Nimic nu este omis | Oboseală de tablou de bord; îngroapă metricile care contează de fapt pentru decizia acelei audiențe |
| Selecție minimă de metrici, ghidată de decizie, pentru fiecare tablou de bord | Concentrat, acționabil, mai ușor de avut încredere | Cere disciplină de selecție deliberată și riscă omiterea a ceva relevant |

Tensiunea centrală este **cuprinderea versus concentrarea**, tensiunea
fundamentală din subiectul 1.1 aplicată special proiectării tabloului de bord.
Un tablou de bord cuprinzător pare mai sigur, nimic nu este lăsat deoparte, dar
de obicei își servește audiența reală mai prost decât unul concentrat, construit
special în jurul deciziilor pe care le are de luat acea audiență. Rezolvă
tensiunea construind mai multe tablouri de bord cu scop specific, nu unul
cuprinzător, acceptând costul modest suplimentar de întreținere al mai multor
artefacte concentrate în schimbul faptului că fiecare chiar este util audienței
vizate.

## Întrebări de discutat cu echipa ta

1. **Încearcă tabloul nostru de bord actual să servească mai multe audiențe
   deodată și, dacă da, pe cine servește de fapt bine?** Parcurge tabloul de
   bord existent și identifică audiența lui principală reală față de cea
   intenționată; o nepotrivire aici este frecventă și merită numită direct.

2. **Separă vreunul dintre tablourile noastre de bord o metrică stimulată de
   garda ei de protecție asociată pe vizualizări diferite?** Auditează tablourile
   de bord actuale special pentru acest tipar, verificând ca punct de plecare
   fiecare metrică DORA din Partea 2 și asocierile ei.

3. **Ar trece vizualizările tabloului nostru de bord standardele de
   vizualizare onestă din subiectul 1.6: axe de la zero, tendință în loc de
   instantaneu, mediane în loc de medii pentru date asimetrice?** Revizuiește
   graficele tale actuale direct în raport cu această listă.

4. **Are fiecare tablou de bord pe care îl întreținem un responsabil numit și
   un ritm de revizuire sau unele există pur și simplu, fără nimeni responsabil
   să le țină exacte și relevante?** Dacă vreun tablou de bord nu are responsabil
   numit, merită să închizi imediat acest decalaj, deoarece un tablou de bord
   fără responsabil decade exact cum decade o metrică fără responsabil.

5. **Declară explicit ce nu este vreun tablou de bord ale cărui metrici ar putea
   fi plauzibil folosite abuziv pentru evaluarea individuală?** Verifică special
   orice tablou de bord ce conține date de activitate sau de sarcină de gardă
   pentru această declarație explicită.

6. **Dacă ne-am reproiecta azi tablourile de bord de la zero, audiență cu
   audiență, pornind de la decizia pe care trebuie s-o ia fiecare, cât de
   diferit ar arăta rezultatul față de ce există acum?** Acest experiment
   mental dezvăluie adesea cât din structura tabloului de bord s-a acumulat din
   inerție, nu din design deliberat.

## Perspectiva sectorială

**Startup.** Un singur tablou de bord simplu este de obicei potrivit la această
scară, deoarece întreaga echipă și conducerea sunt adesea același grup mic de
oameni, care iau în mare parte aceleași decizii. Concentrează-te pe standardele
de vizualizare onestă și pe declarația explicită de non-evaluare chiar și la
scară mică, deoarece aceste obiceiuri sunt mult mai ușor de stabilit devreme
decât de adaptat ulterior.

**Afacere mică.** Majoritatea instrumentelor gata de folosit oferă tablouri de
bord implicite rezonabile; disciplina principală este să le reduci prin
selecție la puținele metrici care informează o decizie reală pentru afacerea ta
specifică, în loc să afișezi fiecare metrică pe care instrumentul o calculează
implicit.

**Companie mare.** Consecvența fără rigiditate este provocarea centrală aici:
zecile de tablouri de bord de echipă au nevoie de suficient standard comun
(reguli de vizualizare onestă, asociere cu gărzi de protecție, disciplina
responsabilității) ca să fie demne de încredere și comparabile, lăsând totuși
nevoile operaționale specifice ale fiecărei echipe să-și modeleze propria
vizualizare. Investește într-un standard comun de proiectare a tablourilor de
bord, impus prin guvernanță (subiectul 1.4), nu într-un șablon rigid și
universal, nici în tablouri de bord locale complet nestructurate și
inconsecvente.

**Administrație publică.** Tablourile de bord expuse controlului extern sau de
supraveghere au nevoie de rigoare deosebită în vizualizarea onestă și în
documentația explicită de guvernanță, deoarece un grafic înșelător descoperit
de un evaluator extern dăunează credibilității instituționale mult dincolo de
metrica în cauză. Aplică cel mai înalt standard al recomandărilor acestui
subiect oricărui tablou de bord orientat spre exterior.

## Exemple

**Companie mare.** O companie de tehnologie pentru logistică întreținuse ani la
rând un singur tablou de bord de „sănătate a ingineriei”, urmărit atât de
echipele individuale de inginerie, cât și de echipa executivă de conducere, cu
peste patruzeci de tile, de la numărul de commituri individuale până la
rezultatele de business trimestriale. Niciuna dintre audiențe nu l-a găsit cu
adevărat util: inginerii ignorau tilele de rezultate de business ca fiind
irelevante pentru munca lor zilnică, iar directorii erau copleșiți de metrici
granulare de livrare fără context de interpretare. Împărțirea lui într-un
tablou de bord operațional concentrat al echipei, cu șase tile, și un tablou de
bord separat pentru conducere, cu opt tile, ambele urmând asocierea cu gărzi de
protecție și standardele de vizualizare onestă ale acestui subiect, a produs o
implicare măsurabil mai mare și, esențial, directorii au raportat pentru prima
oară că pot explica ce înseamnă cifrele atunci când sunt întrebați de propria
conducere.

**Administrație publică.** Tabloul de bord public al serviciilor digitale al
unui guvern de stat fusese criticat public pentru un grafic care arăta timpul
„mediu” de procesare, cu o axă y trunchiată care exagera vizual o îmbunătățire
modestă, o încălcare a standardelor de vizualizare onestă din subiectul 1.6, pe
care un jurnalist de tehnologie extern o prinsese și o raportase. Tabloul de
bord reproiectat al agenției, construit explicit după standardele acestui
subiect, axe de la zero, mediană în loc de medie pentru datele de timp de
procesare asimetrice la dreapta și context clar adnotat pentru orice schimbare
notabilă, a fost lăudat special într-un articol ulterior ca model de
prezentare transparentă a datelor din sectorul public, reparând direct
credibilitatea pe care o dăunase graficul anterior, înșelător.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea unor tablouri de bord deliberate, specifice audienței și
proiectate onest este utilizarea reală și încrederea reală: exemplul companiei
de logistică de mai sus arată costul direct al unui singur tablou de bord prost
proiectat, implicare scăzută din partea ambelor audiențe vizate, și beneficiul
direct al reproiectării, o implicare măsurabil mai mare odată ce fiecare
audiență a primit o vizualizare construită cu adevărat pentru propriile decizii.

Costul total de proprietate este efortul de proiectare și întreținere pentru
mai multe tablouri de bord cu scop specific, în loc de un singur artefact
cuprinzător, plus disciplina continuă de guvernanță (responsabil numit, ritm de
revizuire) recomandată de acest subiect. Costul este modest în comparație cu
riscul unui tablou de bord nefolosit sau, mai rău, care induce activ în eroare
audiența și dăunează credibilității, așa cum arată concret exemplul
guvernamental de mai sus.

## Anti-modele și capcane

- **Un singur tablou de bord care încearcă să servească fiecare audiență:**
  de obicei nu servește bine pe nimeni.
- **Separarea unei metrici stimulate de garda ei de protecție pe vizualizări
  diferite:** recreează riscul de expunere la stimulente despre care
  avertizează subiectul 1.2.
- **Alegeri nesincere de vizualizare:** axe trunchiate, intervale de date alese
  selectiv și axe duble induc în eroare cititorii, uneori cu consecințe
  reputaționale reale.
- **Lipsa unui responsabil numit sau a unui ritm de revizuire pentru tabloul
  de bord însuși:** artefactul decade exact cum decade o metrică fără
  responsabil.
- **Lipsa unei declarații explicite despre ce nu este un tablou de bord:**
  invită la deriva evaluativă despre care cartea avertizează peste tot.
- **Acoperire cuprinzătoare de tile în locul unei selecții concentrate,
  ghidate de decizie:** produce oboseală de tablou de bord și îngroapă ce
  contează cu adevărat.

## Model de maturitate

- **Nivelul 1, Inițiere:** Un singur tablou de bord necurățat, dacă există,
  servește prost toate audiențele, fără standard de vizualizare onestă sau
  asociere cu gărzi de protecție.
- **Nivelul 2, Dezvoltare:** Există unele vizualizări specifice audienței, dar
  standardele de vizualizare sunt inconsecvente și responsabilitatea este
  neclară.
- **Nivelul 3, Standardizare:** Tablourile de bord specifice audienței, cu
  standarde consecvente de vizualizare onestă și asociere cu gărzi de
  protecție, sunt stabilite în toată organizația, fiecare cu un responsabil
  numit.
- **Nivelul 4, Gestionare:** Tablourile de bord sunt revizuite într-un ritm
  regulat, cu declarații explicite de non-evaluare acolo unde este relevant, iar
  tilele perimate sunt curățate activ.
- **Nivelul 5, Orchestrare:** Practica de proiectare a tablourilor de bord a
  organizației este o capacitate de încredere, bine guvernată, iar organizația
  poate indica situații concrete în care tablouri de bord oneste și bine
  proiectate au reparat sau au construit încrederea părților interesate.

## Idei de discuție

1. Care este audiența principală reală a tabloului nostru de bord actual, față de cea intenționată?
2. Separă vreunul dintre tablourile noastre de bord o metrică de garda ei de protecție?
3. Ar trece graficele noastre actuale un audit de vizualizare onestă?
4. Are fiecare tablou de bord pe care îl întreținem un responsabil numit clar și care răspunde?
5. Cum ar arăta o reproiectare de la zero a tablourilor noastre de bord, pornind de la audiență?

## Concluzii principale

- Proiectează **tablouri de bord specifice audienței**, pentru decizii
  specifice, nu un singur artefact cuprinzător care încearcă să servească pe
  toată lumea.
- Aplică **standarde de vizualizare onestă** (subiectul 1.6) ca cerințe ferme:
  axe de la zero, tendință în loc de instantaneu, mediane în loc de medii
  pentru date asimetrice.
- **Nu separa niciodată o metrică stimulată de garda ei de protecție** pe
  vizualizări diferite; ține perechile metrică-gardă pe același tablou de bord.
- Atribuie un **responsabil numit și un ritm de revizuire** fiecărui tablou de
  bord, exact cum cere subiectul 1.4 pentru orice metrică guvernată.
- Declară explicit **ce nu este un tablou de bord**, mai ales acolo unde datele
  de activitate sau de sarcină operațională ar putea fi folosite abuziv pentru
  evaluarea individuală.

## Referințe și lecturi suplimentare

- *The Visual Display of Quantitative Information*, de Edward R. Tufte
  (textul fundamental despre vizualizarea onestă și integră a datelor).
- *Storytelling with Data*, de Cole Nussbaumer Knaflic (proiectare practică de
  tablouri de bord și grafice pentru audiențe de business).
- *Information Dashboard Design*, de Stephen Few (principii de proiectare
  specifice tablourilor de bord pentru o comunicare eficientă și onestă).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (disciplina asocierii metricilor pe care acest subiect
  o aplică direct aranjării tabloului de bord).
