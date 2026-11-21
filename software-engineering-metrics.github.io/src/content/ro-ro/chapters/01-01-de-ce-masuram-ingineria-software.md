# 1.1 De ce măsurăm ingineria software

## Prezentare generală și motivație

Ingineria software se opune măsurării într-un fel în care producția
industrială nu o face. O linie de fabrică produce unități identice, deci
numărarea lor îți spune ceva real. Munca de software produce artefacte unicat
sub cerințe în continuă schimbare, așa că o numărătoare naivă, de commituri,
de linii, de tichete închise, nu spune aproape nimic despre valoarea livrată.
Diferența dintre dificultatea de a măsura munca de software și nevoia foarte
reală de a ști dacă merge bine este locul în care se află toată cartea asta.
Acest subiect este despre închiderea acelei diferențe cu onestitate: nu
prefăcându-ne că munca de software se poate număra ca niște piese, ci fiind
precișii asupra a ceea ce poate și a ceea ce nu poate face măsurarea pentru o
organizație de inginerie.

Măsurarea există ca să răspundă la întrebări la care o organizație nu poate
răspunde altfel cu încredere: livrăm mai repede sau mai încet, se îmbunătățește
calitatea sau se degradează, se epuizează inginerii, se întoarce această
investiție. Fără metrici, la aceste întrebări răspunde cine vorbește cu cea mai
multă siguranță în încăpere, de obicei persoana cea mai senioră sau cea mai
convingătoare, iar răspunsul ei este adesea greșit. Echipele de
[ingineria software](https://en.wikipedia.org/wiki/Software_engineering) care
sar peste măsurare nu evită să judece propria performanță. Doar că judecă pe
baza impresiilor, a anecdotelor și a prejudecății ultimului eveniment, în loc
de dovezi.

Pentru echipele mari, asta încetează să fie un lucru plăcut și devine
structural. O echipă de șase oameni poate împărtăși un model mental despre cum
merg lucrurile prin conversația de zi cu zi. Un departament de șase sute,
răspândit pe fusuri orare și unități de business, nu poate. La această scară,
un set comun și de încredere de numere este singurul substitut practic pentru
conștientizarea informală pe care o echipă mică o primește gratis. Conducerea
unei companii mari are nevoie de metrici ca să aloce investițiile între zeci
de echipe care concurează pentru același buget. Organizațiile de inginerie din
administrația publică au nevoie de metrici ca să demonstreze legislativului și
publicului că fondurile alocate au produs capacitate reală, nu doar
activitate. În ambele situații, „am muncit din greu” nu este o dovadă; un
număr care poate fi apărat este.

## Principii-cheie

- **Măsoară ca să înveți, nu ca să judeci.** Scopul principal al unei metrici
  de inginerie este să informeze o decizie, nu să noteze o persoană sau o
  echipă.
- **Un număr fără o decizie atașată este decor.** Dacă nicio valoare a unei
  metrici nu ar schimba ce faci mai departe, ea nu are loc pe un tablou de
  bord.
- **Măsurarea este un mijloc, nu scopul.** Scopul este un software mai bun,
  livrat mai fiabil, de o echipă sustenabilă. Metricile există doar ca să
  servească acest scop.
- **Fiecare metrică are un cost.** Instrumentarea, timpul de revizuire și
  riscul de distorsionare a comportamentului tratat în subiectul 1.2 costă
  toate ceva. O metrică trebuie să-și câștige acest cost înapoi.
- **Tăcerea este tot o decizie.** A alege să nu măsori ceva este o alegere cu
  consecințe, nu o valoare implicită neutră.

## Recomandări

### Pornește de la decizie, nu de la tabloul de bord

Înainte să instrumentezi ceva, numește decizia pe care o va informa metrica.
„Vrem să știm dacă noul nostru flux de implementare a redus rata
incidentelor” este o întrebare în formă de decizie; „hai să urmărim tot ce
poate exporta unealta” nu este. Lucrul de la decizie înapoi ține setul de
metrici mic și face fiecare tilă apărabilă atunci când cineva întreabă de ce
există. Dacă nu poți numi decizia pe care ar informa-o o metrică, nu o
construi încă. Subiectul 1.3 merge mai adânc în versiunea „rezultate înaintea
producției” a acestei discipline.

### Separă folosirea de diagnostic de folosirea de evaluare

O metrică folosită pentru a diagnostica o problemă de sistem (de ce crește
timpul nostru de livrare) se comportă complet diferit de aceeași metrică
folosită pentru a evalua o persoană sau o echipă (al cui timp de livrare este
cel mai slab). Prima invită la investigare și îmbunătățire. A doua invită la
ascundere și manipulare, pentru că acum numărul are atașată o consecință de
reputație sau financiară. Hotărăște explicit, în scris, pentru ce folosire
este o metrică și nu lăsa niciodată o metrică de diagnostic să alunece în
folosire evaluativă fără să reconsideri deliberat riscul. Această distincție
revine constant în carte și este formalizată în secțiunea de non-obiective a
cartei metricilor descrisă în subiectul 1.4.

### Tratează măsurarea ca pe o ipoteză, nu ca pe un fapt

O metrică este un indicator indirect pentru ceva la care ții cu adevărat, nu
lucrul în sine. Frecvența implementărilor este un indicator indirect pentru
capacitatea de livrare, nu capacitatea de livrare în sine. Tratează fiecare
metrică drept o ipoteză aflată în testare continuă: mai urmărește acest număr
lucrul la care ținem, sau lumea s-a mișcat și a lăsat indicatorul în urmă?
Reia această întrebare la o cadență fixă, în loc să presupui că o metrică bine
aleasă acum doi ani este bine aleasă și azi, mai ales când se schimbă
uneltele, structura echipelor sau (vezi Partea 7) natura muncii înseși.

### Fă absența măsurării vizibilă

În organizațiile mari, cea mai riscantă lacună nu este o metrică proastă, ci o
zonă pe care nu o măsoară nimeni pentru că este greu de instrumentat:
experiența dezvoltatorilor, frecarea dintre dependențele între echipe,
erodarea cunoașterii instituționale. Numește explicit aceste lacune în carta
metricilor tale, în loc să le lași invizibile implicit. O organizație care
știe ce nu măsoară, și de ce, este într-o poziție mult mai solidă decât una
care a uitat pe tăcute că aceste zone există.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Instrumentare intensă, multe metrici | Vizibilitate largă, mai puține puncte oarbe | Oboseală de tablou de bord, suprafață mai mare de manipulare, cost mai mare de întreținere |
| Metrici minimale, conduse de decizii | Concentrare, cost redus, fiecare metrică poate fi apărată | Risc de a rata o problemă emergentă din afara setului ales |
| Metrici doar pentru diagnostic | Încurajează raportarea onestă și investigarea | Conducerea le poate folosi totuși informal evaluativ |
| Metrici legate de evaluarea individuală | Pare responsabil, ușor de explicat directorilor | Stimulent puternic de manipulare; dăunează încrederii; de obicei măsoară lucrul greșit |

Tensiunea centrală este **acoperire versus concentrare**, iar ea este
accentuată de **diagnostic versus judecată**. Prea puține metrici și
dezvolți puncte oarbe care ies la iveală doar ca o criză; prea multe și nimeni
nu poate acționa pe baza niciuneia, în timp ce fiecare căreia îi atașezi
greutate evaluativă invită la distorsiune. Rezolvă asta pornind minimal și
condus de decizii, adăugând o metrică doar când o decizie specifică și
numită are nevoie de ea, și apărând explicit granița „doar diagnostic” în
munca de guvernanță din subiectul 1.4, în loc să o lași să se erodeze
implicit.

## Întrebări de discutat cu echipa ta

1. **Pentru fiecare metrică de pe tabloul nostru de bord actual, ce decizie ar
   declanșa o valoare bună și ce decizie una proastă?** Dacă ambele valori
   duc la aceeași acțiune, sau la nicio acțiune, metrica este decor. Parcurge
   tabloul de bord tilă cu tilă și forțează un răspuns sincer pentru fiecare.
   Acest exercițiu înjumătățește de obicei un tablou de bord umflat într-o
   singură ședință, pentru că cea mai mare parte a harababurii se adună din
   metrici pe care nu le scoate nimeni, nu din metrici adăugate deliberat
   dintr-un motiv care mai ține.

2. **Care dintre metricile noastre sunt folosite pentru diagnostic și care au
   devenit pe tăcute evaluative?** O metrică făcută ca să înțelegem o
   constrângere a sistemului poate aluneca spre a fi folosită ca să clasăm
   echipe sau persoane fără ca cineva să fi hotărât asta intenționat, adesea
   printr-o remarcă în treacăt într-o ședință de revizuire care devine
   obicei. Odată ce alunecarea are loc, numărul nu mai este de încredere,
   pentru că oamenii au acum un motiv să-l facă să arate bine, nu să-l facă
   exact. Notează în scris folosirea intenționată a fiecărei metrici și
   verifică practica curentă față de ea.

3. **Ce nu măsurăm pentru că este greu de instrumentat și cât ne costă
   această lacună?** Cele mai periculoase puncte oarbe sunt cele care nu ajung
   niciodată pe un tablou de bord tocmai pentru că rezistă măsurării ușoare:
   frecarea dintre dependențele între echipe, erodarea cunoașterii
   instituționale sau acumularea discretă de soluții fragile. Adu o listă cu
   lucrurile care îi neliniștesc pe toți în privat, dar pe care nu le
   urmărește nimeni, și fii sincer în privința motivului.

4. **Dacă am șterge mâine această metrică, cine ar observa și ce ar pierde?**
   O metrică de care nimeni nu ar simți lipsa este o metrică ce nu informează
   nicio decizie. Întrebarea scoate la iveală tilele de paradă care supraviețuiesc
   doar din inerție. Pentru o organizație mare, cu zeci de tablouri de bord
   ale echipelor, disciplina curățării contează tot atât cât disciplina
   adăugării de metrici noi.

5. **Cât costă de fapt fiecare metrică de pe tabloul nostru de bord să fie
   produsă și întreținută, inclusiv timpul de inginerie din spatele
   instrumentării?** Metricile nu sunt gratuite. Fluxurile de date, tablourile
   de bord și timpul de revizuire petrecut discutând un număr poartă toate un
   cost recurent, ușor de subestimat pentru că este împărțit între multe
   sarcini mici, nu într-o singură linie vizibilă. Adu efortul real de
   instrumentare și întreținere și cântărește-l față de valoarea de decizie
   din întrebarea 1.

6. **Unde a devenit măsurarea un substitut pentru judecată și unde a devenit
   judecata un substitut pentru măsurare?** Ambele eșecuri sunt reale. O
   echipă care externalizează fiecare decizie unui tablou de bord pierde
   judecata contextuală care prinde ce scapă numărului; o echipă care ignoră
   datele disponibile în favoarea celei mai tare voci din încăpere repetă
   exact problema cu care începe acest subiect. Scopul sunt metrici care
   informează judecata, nu metrici care o înlocuiesc.

## Perspectiva sectorială

**Startup.** Cu o mână de ingineri, cea mai mare parte din ce avertizează
acest subiect, alunecarea spre folosire evaluativă, punctele oarbe, umflarea
tablourilor de bord, se evită ușor pur și simplu pentru că toată lumea vorbește
zilnic. Riscul este opusul: să sari complet peste măsurare pentru că pare un
cost pe care echipa nu și-l poate permite. Alege două sau trei întrebări în
formă de decizie (livrăm destul de repede, se menține calitatea) și
instrumentează doar pe acestea.

**Afacere mică.** Fără o echipă dedicată de platformă sau de date, sprijină-te
pe ce raportează deja uneltele existente, în loc să construiești instrumentare
proprie. Tabloul de bord al unui procesator de plăți, metricile de răspuns ale
unei unelte de suport și istoricul de build al furnizorului tău de CI acoperă
de obicei deciziile care contează cel mai mult. Rezistă tentației de a
cumpăra o platformă dedicată de analiză a ingineriei înainte să fi dovedit că
vei acționa pe baza a ce îți spune.

**Companie mare.** Riscul central este ca metricile să alunece pe tăcute de la
folosirea de diagnostic la cea evaluativă pe măsură ce urcă prin straturile de
management, iar tablourile de bord să crească prin acumulare pentru că nimeni
nu are sarcina să le curețe. Guvernanța (subiectul 1.4) nu este opțională la
această scară. Standardizează definițiile între unitățile de business și
include o revizuire periodică de retragere chiar în programul de metrici.

**Administrație publică.** Metricile de aici poartă adesea greutate legală sau
bugetară, ceea ce ridică atât valoarea faptului de a le face bine, cât și
costul de a le face greșit. Un număr raportat unui legislativ sau unui organ
de supraveghere are nevoie de o metodologie documentată, de o definiție stabilă
de la o perioadă de raportare la alta și de sinceritate despre limitele sale.
Tratează „nu măsurăm asta în prezent” ca pe un răspuns pe care poate va trebui
să-l aperi, nu ca pe un eșec privat de ascuns.

## Exemple

**Companie mare.** Organizația de inginerie a unei companii globale de
asigurări crescuse la peste șaizeci de echipe scrum, fiecare cu propriul tablou
de bord informal, niciunul comparabil cu altul. Conducerea nu putea răspunde la
o întrebare de bază: care dintre cele zece investiții strategice în platformă
livrează de fapt software mai rapid. Soluția nu a fost mai multe metrici, ci
mai puține și mai bune: organizația a definit un nucleu comun, condus de
decizii, de metrici DORA (subiectul 2.10), calculate identic peste tot din
aceleași date de pipeline, a retras patruzeci de tablouri de bord specifice
echipelor și a putut în sfârșit să compare ariile de investiții pe o bază
comună în două trimestre.

**Administrație publică.** Echipa de servicii digitale a unei agenții fiscale
naționale fusese rugată de o comisie de supraveghere să demonstreze
rentabilitatea unui program de modernizare pe mai mulți ani. Metricile
existente ale echipei erau în întregime interne și bazate pe activitate: story
points finalizate, sprinturi închise. Nimic din ele nu răspundea la întrebarea
reală a comisiei. Echipa a construit în schimb un set mic de metrici de
rezultat, mediana timpului de rezolvare a unei probleme de depunere a unui
cetățean, rata de adoptare a canalului digital și rata defectelor scăpate în
noul sistem, și le-a raportat trimestrial cu o metodologie documentată.
Întrebările comisiei s-au schimbat din „dovediți că lucrați” în „cum
replicăm asta în următoarea agenție”, care este exact rezultatul pe care un
set bine ales de metrici trebuie să-l producă.

## Argumentul de business: motivații, ROI și TCO

Randamentul măsurării deliberate este calitatea deciziilor. O organizație care
poate spune, cu dovezi, „timpul nostru de livrare s-a îmbunătățit cu 30% după
investiția în platformă” poate apăra acea investiție, poate repeta ce a mers
și poate opri ce nu a mers. O organizație care se bazează pe anecdote nu poate
face nimic din toate astea cu încredere și ajunge să reia aceleași dispute la
fiecare ciclu bugetar, pentru că nimeni nu poate indica un număr în care să
aibă încredere ambele părți.

Costul măsurării nu este tabloul de bord. Este disciplina continuă:
instrumentarea, întreținerea definițiilor și curățarea periodică pe care o
recomandă acest subiect. Acest cost total de proprietate este real, dar modest
în comparație cu costul alternativei, adică o organizație mare care ia decizii
tehnologice de milioane de dolari pe baza celui care a argumentat cel mai
convingător în încăpere. Randamentul unui program de metrici nu sunt metricile
în sine; sunt deciziile făcute mai bine datorită lor.

## Anti-modele și capcane

- **A măsura tot ce exportă unealta:** transformă un tablou de bord în zgomot
  și invită la manipulare pe o suprafață uriașă, fără o valoare de decizie
  corespunzătoare.
- **Metrici fără o decizie numită:** decor care costă efort de întreținere și
  nu spune nimănui nimic acționabil.
- **Alunecarea tăcută de la folosirea de diagnostic la cea evaluativă:** cea
  mai rapidă cale de a distruge încrederea într-un număr.
- **A trata o metrică drept fapt, nu drept ipoteză:** un indicator indirect
  care era corect acum doi ani poate fi greșit azi, iar nimeni nu verifică.
- **A confunda absența unui număr prost cu prezența unuia bun:** o metrică la
  care nu te uiți niciodată nu poate spune că ceva e în neregulă.
- **A construi capacitate de măsurare înainte de a decide ce trebuie decis:**
  instrumentarea în căutarea unei întrebări irosește timp real de inginerie.

## Model de maturitate

- **Nivelul 1, Inițiere:** Metricile, dacă există, sunt făcute pe loc,
  personale celui care le-a construit, iar nimeni nu poate spune ce decizie
  informează vreuna dintre ele.
- **Nivelul 2, Dezvoltare:** Există un set de bază de metrici pentru unele
  echipe, copiat mai ales dintr-un cadru sau din valorile implicite ale unei
  unelte, fără o legătură clară înapoi la o decizie.
- **Nivelul 3, Standardizare:** Fiecare metrică urmărită are un scop
  documentat și o clasificare explicită diagnostic versus evaluativ, aplicată
  consecvent în organizație.
- **Nivelul 4, Gestionare:** Metricile sunt revizuite la o cadență fixă față
  de deciziile pe care le informează; metricile care nu-și mai merită locul
  sunt retrase, iar întregul set este măsurat atât ca cost, cât și ca valoare.
- **Nivelul 5, Orchestrare:** Măsurarea este o capacitate vie: organizația își
  identifică de rutină propriile puncte oarbe, testează dacă indicatorii ei
  indirecți încă urmăresc realitatea și tratează programul de metrici ca pe
  ceva de îmbunătățit, nu doar de întreținut.

## Idei de discuție

1. Pe care metrică de pe tabloul nostru de bord ne-ar fi cel mai greu să o justificăm dacă am fi întrebați azi?
2. Ce decizie am luat în ultimul trimestru folosind o metrică, nu o opinie?
3. Unde în organizația noastră a devenit pe tăcute evaluativă o metrică de diagnostic?
4. De ce ne temem să măsurăm și de ce?
5. Dacă programul nostru de metrici ar dispărea mâine, ce decizii ar ieși mai prost?

## Concluzii principale

- Măsurarea există ca să servească **deciziile**, nu ca să existe de dragul ei;
  o metrică fără decizie atașată este decor.
- Păstrează folosirea de **diagnostic** separată de cea **evaluativă**, în
  scris, și urmărește alunecarea tăcută dintre ele.
- Tratează fiecare metrică drept o **ipoteză** despre ceea ce reprezintă, nu
  drept un fapt stabilit, și reia acea ipoteză la o cadență fixă.
- Tăcerea, alegerea de a nu măsura ceva, este ea însăși o decizie cu
  consecințe; fă punctele oarbe vizibile, în loc să le lași invizibile
  implicit.
- Costul total al unui program de metrici este real; cântărește-l explicit față
  de valoarea de decizie pe care o aduce fiecare metrică.

## Referințe și lecturi suplimentare

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (fundamentul de cercetare al măsurării ingineriei
  bazate pe rezultate).
- *How to Measure Anything*, de Douglas W. Hubbard (un cadru general pentru
  cuantificarea lucrurilor care par nemăsurabile).
- *Measuring and Managing Performance in Organizations*, de Robert D. Austin
  (analiza fundamentală a disfuncțiilor pe care măsurarea le poate introduce
  într-o organizație).
- *Thinking, Fast and Slow*, de Daniel Kahneman (prejudecățile cognitive care
  fac din judecata neajutată un substitut nesigur pentru măsurare).
- Programul DevOps Research and Assessment (DORA) al Google, [dora.dev](https://dora.dev/)
  (cercetarea continuă State of DevOps pe care se sprijină această carte de-a
  lungul ei).
