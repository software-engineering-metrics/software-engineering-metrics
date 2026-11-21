# 7.4 Telemetria rezultatelor ca nouă stea polară

## Prezentare generală și motivație

Acest subiect încheie Partea 7 și, într-un sens real, încheie argumentul pe care
întreaga carte îl construiește de la subiectul 1.3, cu o singură afirmație
directă: pe măsură ce IA generativă face producția brută ieftină, **telemetria
rezultatelor** ([telemetry](https://en.wikipedia.org/wiki/Telemetry)), adică măsurarea continuă, instrumentată, a rezultatelor
reale, nu a activității sau a producției, încetează să fie o practică bună
printre altele și devine principiul organizator în jurul căruia trebuie
construit un program de metrici. Nu este o idee nouă, introdusă aici pentru
prima oară. Este ideea introdusă de subiectul 1.3 în prima parte a cărții,
prezentată acum ca răspuns necesar, nu doar preferabil, la o schimbare
tehnologică care a făcut orice alternativă mai periculoasă decât era.

Logica este directă. Înainte de IA generativă, volumul producției era un
indicator indirect imperfect, dar nu fără valoare, al efortului și, vag, al
valorii; o echipă care livra mai multe funcționalități făcuse, cel puțin, mai
multă muncă, chiar dacă nu era întotdeauna munca potrivită. IA generativă
taie chiar și această legătură vagă: volumul producției nu mai indică fiabil
efortul, deoarece un instrument îl poate genera în câteva secunde, și cu
siguranță nu indică valoarea, deoarece subiectul 7.3 a arătat că o producție
umflată poate coexista cu o calitate în degradare. Metricile care supraviețuiesc
intacte acestei schimbări sunt tocmai cele către care a insistat cartea să
construiești încă de la primele subiecte: rata defectelor scăpate (subiectul
5.1), adoptarea funcționalităților (subiectul 5.2), rezultatele clienților și
ale afacerii (subiectul 5.3), fiabilitatea (Partea 6) și bunăstarea
dezvoltatorilor (Partea 3). Niciuna nu depinde de cum a fost produs codul de
dedesubt; toate măsoară ce s-a întâmplat de fapt ca rezultat.

Pentru echipele mari, argumentul acestui subiect are consecințe practice
directe pentru felul în care ar trebui construit și reconstruit de acum încolo
un program de metrici. Organizațiile mari care își reproiectează tablourile de
bord de inginerie în lumina adoptării IA ar trebui să orienteze investiția în
mod special spre infrastructura de telemetrie a rezultatelor descrisă aici;
administrațiile publice, care evaluează atât instrumentele de IA, cât și
programele tehnologice mai largi în care sunt integrate, ar trebui să le supună
pe amândouă aceluiași standard de telemetrie a rezultatelor recomandat aici ca
bază pentru orice evaluare credibilă și rezistentă în timp.

## Principii-cheie

- **Telemetria rezultatelor devine necesară, nu doar preferabilă, odată ce
  producția este ieftină.** Este principiul fondator al subiectului 1.3, acum
  urgent, nu aspirațional.
- **Metricile care supraviețuiesc acestei schimbări sunt cele către care a
  construit cartea de la început**: defecte scăpate, adoptare, rezultate de
  business, fiabilitate și bunăstare.
- **Un program de metrici construit în principal în jurul metricilor de
  producție este acum o vulnerabilitate, nu doar o alegere suboptimă.**
  Metricile de producție pot fi umflate ieftin și rapid, la scară.
- **Telemetria rezultatelor cere investiție reală**: instrumentare, răbdare
  pentru un semnal mai lent și disciplină organizațională ca să reziste
  tentației metricilor de producție mai rapide, mai ieftine, dar acum
  nefiabile.
- **Acest principiu supraviețuiește oricărui instrument sau furnizor de IA.**
  Este un răspuns durabil la o schimbare durabilă a sensului producției, nu un
  ajustaj temporar la o tendință trecătoare.

## Recomandări

### Auditează raportul investiției tale în metrici: telemetria rezultatelor versus urmărirea producției

Calculează aproximativ ce parte din infrastructura ta de metrici, din efortul
de instrumentare, din spațiul tabloului de bord și din timpul ședințelor de
revizuire merge spre metricile de rezultat (Partea 5, Partea 6, bunăstarea
dezvoltatorilor din Partea 3), față de metricile de producție și de activitate
(numărul implementărilor, volumul commiturilor, debitul pull requesturilor).
Dacă urmărirea producției domină, raportul în sine este acum o vulnerabilitate,
dat fiind argumentul acestui subiect, iar reechilibrarea lui este schimbarea
cu cea mai mare pârghie pe care o recomandă subiectul.

### Investește deliberat în infrastructura de telemetrie a rezultatelor, ca într-o investiție de inginerie de prim rang

Măsurarea rezultatelor, urmărirea adoptării funcționalităților, corelarea
rezultatelor de business (subiectul 5.3), instrumentarea fiabilității (Partea
6), cere o investiție de inginerie reală și continuă, pe care multe organizații
au subresursat-o istoric în raport cu metricile de producție comparativ ieftine
și ușoare, care domină multe tablouri de bord de azi. Tratează această
investiție în infrastructură cu aceeași seriozitate cu care cartea o aplică
oricărei alte capacități de inginerie importante, nu ca pe o preocupare
secundară în spatele investiției în instrumentele de IA propriu-zise.

### Acceptă și comunică faptul că telemetria rezultatelor este mai lentă și construiește răbdarea necesară în așteptările organizației

Metricile de rezultat sunt, aproape prin natura lor, mai întârziate și mai
zgomotoase decât metricile de producție (distincția dintre indicatori
anticipativi și întârziați din subiectul 1.3, prudența statistică din
subiectul 1.6). O organizație obișnuită cu feedbackul rapid și satisfăcător al
unei cifre de producție care crește trebuie să-și construiască răbdare reală
pentru semnalul mai lent și mai onest al telemetriei rezultatelor, iar
conducerea trebuie să comunice și să modeleze activ această răbdare, în loc să
caute din reflex alternativa mai rapidă, dar acum nefiabilă, sub presiunea de a
arăta rezultate rapide.

### Folosește această schimbare ca prilej de a retrage metricile de producție cu adevărat perimate, nu doar de a adăuga metrici de rezultat alături de ele

Urmând disciplina subiectului 1.1 de a retrage metricile care nu își mai
justifică existența, folosește momentul ca prilej deliberat de a elimina
metricile de producție și de activitate pe care această schimbare le-a
devalorizat în mod special, în loc să adaugi pur și simplu metrici de rezultat
peste un tablou de bord existent, neschimbat. Un tablou de bord care păstrează
toate vechile metrici de producție, adăugând pe deasupra altele noi de
rezultat, se umflă, nu se îmbunătățește cu adevărat.

### Tratează investiția în telemetria rezultatelor ca pe una durabilă, independentă de orice instrument sau relație cu un furnizor de IA

Construiește infrastructura de telemetrie a rezultatelor ca pe o capacitate
organizațională permanentă, nu ca pe o reacție specifică oricărui instrument de
IA pe care îl folosește organizația ta anul acesta. Acest principiu și
infrastructura pe care o cere vor supraviețui oricărei relații cu un furnizor
sau oricărei generații de instrumente, iar construirea ei ca o capacitate
durabilă îți protejează programul de metrici împotriva următoarei schimbări
tehnologice la fel ca împotriva celei actuale.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Tablou de bord dominat de metrici de producție | Feedback rapid și ieftin; familiar pentru majoritatea organizațiilor | Acum activ nefiabil, dat fiind efectul IA generative asupra costului producției |
| Tablou de bord dominat de telemetria rezultatelor | Rezistent la această schimbare; măsoară ce contează cu adevărat | Semnal mai lent și mai zgomotos; cere investiție reală în instrumentare |
| Adăugarea metricilor de rezultat alături de metrici de producție neschimbate | Incremental, mai puțin perturbator | Produce umflarea tabloului de bord, nu o îmbunătățire reală |
| Reechilibrare completă și deliberată spre telemetria rezultatelor | Abordează schimbarea direct și complet | Cere cea mai semnificativă schimbare organizațională și de investiție |

Tensiunea centrală, într-un sens real, este aceeași cu care cartea s-a deschis
în subiectul 1.3, acum ascuțită în forma ei cea mai urgentă: **feedback rapid
și familiar versus semnal mai lent și onest**. Metricile de producție au fost
mereu mai ușor și mai repede de produs; argumentul acestui subiect este că IA
generativă a mutat acest compromis de la simplu suboptim la activ periculos.
Rezolvă tensiunea așa cum recomandă cartea încă de la primul subiect: dă
ponderea decisivă rezultatelor, acceptă feedbackul mai lent care vine odată cu
măsurarea valorii reale și tratează disconfortul acelui feedback mai lent ca
costul onest al măsurării a ceva real, nu a ceva doar convenabil.

## Întrebări de discutat cu echipa ta

1. **Ce parte din infrastructura noastră actuală de metrici și din atenția
   acordată tabloului de bord merge spre metricile de rezultat față de cele de
   producție și de activitate?** Calculează onest acest raport; majoritatea
   organizațiilor, evaluate pentru prima oară, îl găsesc mai înclinat spre
   producție decât ar fi crezut.

2. **Ce investiție concretă în infrastructura de telemetrie a rezultatelor am
   amânat în favoarea unei urmăriri a producției mai rapide și mai ieftine?**
   Numește un exemplu concret, instrumentarea adoptării funcționalităților,
   instrumente de corelare a rezultatelor de business, și discută ce ar
   trebui ca să-l construiești de fapt.

3. **Și-a construit organizația noastră o răbdare reală pentru feedbackul mai
   lent al telemetriei rezultatelor sau presiunea rezultatelor rapide ne
   trage mereu înapoi spre metrici de producție mai rapide, dar acum
   nefiabile?** Fii sincer cu privire la acest tipar în raportările și
   ședințele tale de revizuire recente.

4. **Ce metrică de producție sau de activitate de pe tabloul nostru de bord
   actual este candidată reală la retragere, acum că argumentul acestui
   subiect i se aplică în mod special?** Identifică cel puțin una și discută
   ce ar trebui să o înlocuiască, în loc să lași pur și simplu un gol.

5. **Dacă furnizorul nostru de instrumente de IA sau generația actuală de
   asistenți de programare bazați pe IA s-ar schimba dramatic anul viitor, ar
   rezista programul nostru de metrici?** Testează dacă investiția ta în
   telemetria rezultatelor este cu adevărat durabilă, construită ca o
   capacitate permanentă, sau doar o reacție specifică situației tale actuale
   de instrumente.

6. **Cum ar arăta ca organizația noastră să se angajeze pe deplin față de
   argumentul acestui subiect, reechilibrând decisiv investiția în metrici
   spre rezultate, nu incremental?** Schițează concret, în loc să lași
   abstract; distanța dintre starea actuală și această viziune este foaia de
   parcurs reală a organizației tale pentru a răspunde acestei schimbări.

## Perspectiva sectorială

**Startup.** Construirea timpurie a telemetriei rezultatelor, înainte ca
metricile de producție să apuce să devină obicei organizațional adânc înrădăcinat,
este cu adevărat mai ușoară decât adaptarea ulterioară. O companie tânără care
adoptă de la început asistența IA în programare are o oportunitate reală de a-și
construi programul de metrici întâi pe rezultate, fără a fi nevoită să desfacă
o cultură existentă dominată de metrici de producție.

**Afacere mică.** Concentrează investiția în telemetria rezultatelor pe singura
metrică de rezultat care reflectă cel mai direct supraviețuirea și creșterea
(subiectul 5.3), în loc să încerci o instrumentare cuprinzătoare a fiecărei
categorii de rezultate tratate în carte. O investiție modestă și țintită în
telemetria rezultatelor bate un tablou de bord cuprinzător de metrici de
producție, pe care argumentul acestui subiect l-a devalorizat acum în mod
special.

**Companie mare.** Reechilibrarea recomandată aici este o schimbare
organizațională reală și semnificativă la această scară, care cere probabil
sponsorizare executivă și un plan de investiție pe mai multe trimestre. Tratează-o
cu aceeași seriozitate ca orice altă investiție majoră în infrastructură
tratată de carte și folosește exemplele concrete din subiectele 7.1 și 7.3,
inflația metricilor și diluarea calității pe care un tablou de bord
reechilibrat le-ar fi prins mai devreme, ca să construiești argumentul intern
pentru investiție.

**Administrație publică.** Programele tehnologice guvernamentale evaluate în
principal după metrici de livrare și de producție (funcționalități livrate, la
termen) sunt tot mai vulnerabile la exact scepticismul descris în subiectul
5.3, iar argumentul acestui subiect ascute și mai mult această vulnerabilitate
pe măsură ce adoptarea instrumentelor de IA se răspândește în industria mai
largă din care agențiile guvernamentale își recrutează oameni și cu care sunt
comparate. Construiește telemetria rezultatelor ca bază principală pentru
raportarea publică și pentru justificarea bugetului, poziționându-ți
organizația înaintea acestei schimbări, nu în urma ei.

## Exemple

**Companie mare.** Conducerea de inginerie a unei companii de software, pornind
direct de la aproape-incidentul de inflație a metricilor descris în exemplul din
tehnologia financiară al subiectului 7.1, a făcut un audit complet al
raportului investiției în metrici și a constatat că aproape 70% din spațiul
tabloului de bord și din efortul de instrumentare mergea spre metrici de
producție și de activitate, cu o investiție doar modestă și inconsecventă în
telemetria rezultatelor. În anul următor, compania a reechilibrat deliberat
acest raport, retrăgând mai multe metrici de producție semnalate de auditul din
subiectul 7.1 ca fiind cele mai expuse și investind capacitatea eliberată în
instrumentarea adoptării funcționalităților și a rezultatelor de business
(subiectele 5.2, 5.3). Tabloul de bord rezultat, prezentat la ședința
consiliului din anul următor, a fost creditat explicit de același membru al
consiliului, anterior sceptic, ca o bază semnificativ mai demnă de încredere
pentru evaluarea investiției în inginerie decât versiunea încărcată de metrici
de producție pe care o înlocuise.

**Administrație publică.** O agenție națională de servicii digitale, care
construia de la zero un nou program de metrici de inginerie tocmai pentru că
fostul său tablou de bord, dominat de metrici de producție, atrăsese un
scepticism legislativ susținut, a adoptat explicit principiul acestui subiect
ca decizie fondatoare de proiectare: telemetria rezultatelor, timpul de
așteptare al cetățenilor, rata de finalizare a serviciilor, rata defectelor
scăpate, avea să fie baza principală a întregii raportări publice, metricile de
producție și de livrare fiind păstrate doar ca instrumente interne de
diagnostic, niciodată ca dovadă principală prezentată în exterior. Acest design
cu rezultatele pe primul loc, construit deliberat în lumina schimbării
generate de IA generativă descrise în această parte, a dat raportării agenției
o durabilitate și o credibilitate în fața comitetului său de supraveghere pe
care programul precedent, construit în jurul presupunerilor despre metricile de
producție ale unei generații anterioare, nu le-a atins niciodată.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea angajării decisive față de telemetria rezultatelor este un
program de metrici care rămâne demn de încredere și credibil prin schimbarea
tehnologică actuală și prin orice vine după ea, nu unul care cere încă o
reformă majoră data viitoare când producția devine ieftină printr-o schimbare
tehnologică viitoare. Exemplul companiei de software de mai sus o arată
concret: tabloul de bord reechilibrat a reparat direct credibilitatea pe care
versiunea anterioară, încărcată de metrici de producție, o pusese serios în
pericol.

Costul total de proprietate este investiția în infrastructura de telemetrie a
rezultatelor recomandată de acest subiect, o muncă cu adevărat semnificativă,
pe mai multe trimestre, pentru o organizație mare, cântărită față de riscul
durabil, pe termen lung, al unui program de metrici tot mai puțin demn de
încredere pe măsură ce producția continuă să se ieftinească. Nu este un cost
pe care cartea îți cere să-l accepți ușor; este consecința directă și necesară a
luării argumentului fondator din subiectul 1.3 la fel de în serios pe cât te
roagă această ultimă parte a cărții.

## Anti-modele și capcane

- **Tratarea acestei schimbări ca pe una care cere doar ajustări incrementale,
  nu o reechilibrare autentică:** subestimează amploarea schimbării pe care IA
  generativă a adus-o în sensul metricilor de producție.
- **Adăugarea metricilor de rezultat alături de un set neschimbat și încă
  dominant de metrici de producție:** produce umflarea tabloului de bord, nu
  reechilibrarea autentică pentru care pledează acest subiect.
- **Construirea investiției în telemetria rezultatelor ca reacție la un
  anumit instrument de IA actual, nu ca o capacitate durabilă:** lasă
  organizația expusă la fel următoarei schimbări tehnologice.
- **Neconstruirea răbdării organizaționale pentru feedbackul mai lent al
  telemetriei rezultatelor:** riscă revenirea la metrici de producție mai
  rapide, dar acum nefiabile, sub presiunea rezultatelor rapide.
- **Retragerea metricilor de producție fără un înlocuitor autentic în
  telemetria rezultatelor:** lasă un gol de măsurare, nu o îmbunătățire reală.
- **Prezentarea acestei schimbări părților interesate doar ca răspuns la
  instrumentele de IA, nu ca împlinire a principiului fondator al cărții:**
  subestimează durabilitatea și generalitatea argumentului.

## Model de maturitate

- **Nivelul 1, Inițiere:** Tabloul de bord rămâne dominat de metrici de
  producție, fără niciun răspuns deliberat la schimbarea descrisă de această
  parte.
- **Nivelul 2, Dezvoltare:** S-au adăugat unele metrici de rezultat, dar
  raportul general al investiției rămâne înclinat spre producție și nicio
  metrică nu a fost retrasă deliberat.
- **Nivelul 3, Standardizare:** S-a făcut un audit deliberat și o reechilibrare
  spre telemetria rezultatelor, cu metricile de producție cu adevărat perimate
  retrase, la nivelul întregii organizații.
- **Nivelul 4, Gestionare:** Infrastructura de telemetrie a rezultatelor este
  tratată ca o investiție de inginerie continuă, de prim rang, iar răbdarea
  organizațională pentru feedbackul ei mai lent este cultivată și protejată
  activ.
- **Nivelul 5, Orchestrare:** Programul de metrici al organizației este
  condus de telemetria rezultatelor ca principiu de proiectare durabil și
  permanent, dovedit rezistent prin schimbarea tehnologică actuală și construit
  explicit să rămână rezistent prin orice va urma.

## Idei de discuție

1. Care este raportul nostru actual real dintre investiția în metrici de rezultat și cea în metrici de producție?
2. Ce singură metrică de producție ar trebui să retragem în acest trimestru și ce metrică de rezultat ar trebui să o înlocuiască?
3. Unde ne-a tras recent înapoi nerăbdarea organizațională spre metrici de producție mai rapide, dar mai puțin demne de încredere?
4. Este investiția noastră în telemetria rezultatelor durabilă sau legată special de situația noastră actuală de instrumente de IA?
5. Ce ar trebui ca să ne angajăm pe deplin față de argumentul acestui subiect, în loc să ajustăm incremental?

## Concluzii principale

- Telemetria rezultatelor devine **necesară, nu doar preferabilă**, odată ce IA
  generativă face producția ieftină; este principiul fondator al subiectului
  1.3, acum urgent.
- Metricile care **supraviețuiesc acestei schimbări** sunt cele către care
  construiește cartea de la un capăt la altul: defecte scăpate, adoptare,
  rezultate de business, fiabilitate și bunăstare.
- **Auditează și reechilibrează raportul investiției tale în metrici**
  deliberat, retrăgând metricile de producție cu adevărat perimate, nu doar
  adăugând metrici de rezultat alături de ele.
- Construiește **răbdare organizațională pentru feedbackul mai lent al
  telemetriei rezultatelor** și rezistă tentației de a reveni la metrici de
  producție mai rapide, dar acum nefiabile, sub presiune.
- Construiește această investiție ca pe o **capacitate durabilă**, independentă
  de orice instrument sau furnizor de IA, protejându-ți programul de metrici
  împotriva schimbărilor tehnologice viitoare, ca și împotriva celei actuale.

## Referințe și lecturi suplimentare

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (fundamentul măsurării bazate pe rezultate, pe care se
  sprijină întreaga carte și acest subiect de închidere al Părții 7).
- *Lean Analytics*, de Alistair Croll și Benjamin Yoskovitz (distincția dintre
  metricile acționabile și cele de vanitate, pe care argumentul acestui subiect
  o extinde în era IA).
- *The Innovator's Dilemma*, de Clayton M. Christensen (tiparul general prin
  care metricile și practicile consacrate devin vulnerabilități sub o schimbare
  tehnologică perturbatoare).
- *Measure What Matters*, de John Doerr (stabilirea obiectivelor orientată pe
  rezultate ca principiu organizator al unui program de metrici, modelul care,
  susține acest subiect, ar trebui să fie acum regula, nu excepția).
