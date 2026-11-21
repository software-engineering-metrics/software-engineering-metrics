# 2.8 Metrici Lean ale fluxului de valoare

## Prezentare generală și motivație

Fiecare metrică acoperită până acum în această parte, timpul fluxului, încărcarea
fluxului, timpul de ciclu, utilizarea, descinde dintr-o trusă mult mai veche: cele
cinci măsurători de bază ale cartografierii clasice a fluxului de valoare din
**[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**, dezvoltate la Toyota și
generalizate în producție, operațiuni și livrarea de servicii cu mult înainte ca
software-ul să le adopte. **Timpul de livrare (lead time, LT)** este timpul total de
ceas din momentul în care munca este cerută până când este livrată. **Timpul de
procesare (PT)** este timpul real de lucru efectiv petrecut pe o singură unitate.
**Timpul de ciclu (CT)** este timpul mediu necesar pentru a termina un singur nod sau o
singură fază din flux. **Procentul complet și corect (%C/A)** este procentul de unități
pe care o echipă din aval le poate procesa fără a avea nevoie de refacere. **Timpul
takt** este timpul maxim acceptabil pentru a termina o unitate astfel încât să se
potrivească curat cu cererea clienților.

Acest subiect există pentru că ingineria software nu a inventat aceste idei, ci le-a
împrumutat, iar împrumutul a refolosit uneori aceleași cuvinte pentru lucruri ușor
diferite. Timpul de ciclu al acestei cărți (subiectul 2.6) măsoară specific etapele de
inginerie ale unei modificări, codare, revizuire, testare, implementare, în timp ce CT
clasic din Lean este mai generalul „timp mediu pe nod”, aplicat oricărui proces. Timpul
fluxului (subiectul 2.4) este numele pe care îl dă această carte pentru ceea ce Lean
numește lead time. Cunoașterea corespondenței contează pentru că un cititor venit dintr-un
mediu Lean Six Sigma, frecvent în producție, logistică, sănătate și operațiuni
guvernamentale, va folosi exact acești termeni cu sensul lor original, iar o echipă de
software care nu vorbește aceeași limbă pierde o punte ușoară și susținută de dovezi
către colegii din afara ingineriei.

Pentru echipele mari, %C/A este metrica cel mai puțin folosită a acestui subiect.
Surprinde ceva ce metricile de flux din subiectele 2.3 și 2.4 nu surprind: cât din ce
produce o etapă este de fapt utilizabil de etapa următoare fără a fi trimis înapoi.
Agregat peste un flux de valoare cu mai multe etape, un concept pe care producția îl
numește **randament cumulat al debitului (rolled throughput yield)**, %C/A dezvăluie cum
se compune invizibil refacerea peste predări, un tipar spre care sunt deosebit de
predispuse organizațiile mari cu fluxuri lungi, între mai multe echipe, și programele
guvernamentale cu mai multe porți de aprobare, și pe care rareori îl măsoară direct.

## Principii-cheie

- **Aceste cinci metrici preced software-ul și se generalizează dincolo de el.**
  Sunt vocabularul comun pe care o parte interesată formată în Lean Six Sigma,
  frecventă în marile companii și în operațiunile guvernamentale, îl vorbește deja
  fluent.
- **Coliziunea terminologică este reală și merită numită explicit.** Timpul de ciclu al
  acestei cărți (subiectul 2.6) și CT clasic din Lean sunt înrudite, dar nu identice;
  documentează corespondența ca discuțiile între funcții să nu vorbească discret pe
  lângă.
- **%C/A trebuie agregat peste fiecare etapă, nu măsurat o singură dată la sfârșit.**
  Refacerea introdusă devreme într-un flux și prinsă târziu este invizibilă pentru o
  metrică măsurată doar la livrarea finală.
- **Timpul takt reîncadrează planificarea capacității în jurul cererii, nu al
  efortului.** Întrebarea se mută de la „cât de repede putem merge” la „cât de repede
  trebuie să mergem”, ceea ce se leagă direct de utilizare (subiectul 2.7) și de
  încărcarea fluxului (subiectul 2.4).
- **Acestea sunt metrici de diagnostic, nu metrici de paradă.** Fiecare există ca să
  răspundă la o întrebare operațională specifică, nu ca să producă un număr
  impresionant pentru un tablou de bord.

## Recomandări

### Cartografiază fluxul de valoare cu toate cele cinci metrici Lean înainte de a adopta un cadru specific software-ului

Calculează timpul de livrare, timpul de procesare, timpul de ciclu, %C/A și timpul takt
pentru un eșantion reprezentativ de muncă ce se mișcă prin fluxul tău de valoare înainte
de a suprapune metricile proprii ale Flow Framework (subiectele 2.3 și 2.4). Asta îți
dă o valoare de referință pe care orice parte interesată familiarizată cu Lean Six Sigma
o poate înțelege imediat și scoate adesea la iveală aceeași dominanță a timpului de
așteptare pe care o descrie subiectul 2.5, exprimată într-un vocabular care precede și
supraviețuiește oricărui cadru specific de software.

### Agregă procentul complet și corect multiplicativ peste fiecare etapă

Măsoară %C/A la fiecare etapă individual, apoi înmulțește procentele la nivel de etapă
ca să obții randamentul cumulat al debitului fluxului de valoare. Trei etape, fiecare
rulând individual la 90% complet și corect, se compun la aproximativ 73% în total, un
număr care nu seamănă deloc cu raportul propriu al vreunei etape singulare și care este de
obicei cel mai onest. Acest calcul unic este cea mai rapidă cale de a dezvălui cât de
multă refacere absoarbe cu adevărat un flux cu mai multe etape.

### Stabilește explicit timpul takt din datele reale ale cererii clienților, nu din capacitate

Calculează timpul takt ca timp de lucru disponibil împărțit la cererea clienților în
acea perioadă, deliberat independent de cât de repede se întâmplă să poată lucra echipa
ta azi. Compară timpul de procesare și timpul de ciclu măsurate cu acest număr: un timp
de procesare confortabil sub timpul takt indică o marjă sănătoasă, în timp ce un timp de
ciclu care depășește timpul takt este o dovadă concretă și cuantificată a unui deficit
de capacitate, nu doar o senzație că lucrurile sunt în urmă.

### Documentează corespondența dintre termenii Lean și vocabularul propriu al acestei cărți

Unde organizația ta rulează deja un program Lean Six Sigma în afara software-ului, sau
unde ingineria raportează unei conduceri care vorbește fluent acel vocabular, scrie
explicit corespondența în cartă a metricilor (subiectul 1.4): timpul fluxului din această
carte este timpul de livrare din Lean, timpul de ciclu din această carte (subiectul 2.6)
este o aplicare specifică a CT mai general din Lean, iar timpul activ din această carte
(subiectul 2.5) este timpul de procesare din Lean. Acest document unic previne o ceartă
recurentă și fără valoare despre ale cui numere sunt „reale”.

### Folosește %C/A ca gardă alături de viteza fluxului, nu ca înlocuitor al ei

Asociază randamentul cumulat al debitului cu viteza fluxului (subiectul 2.3) în același
fel în care această carte asociază fiecare metrică de viteză cu o gardă de stabilitate. Un
număr de elemente în creștere cu un %C/A cumulat în scădere înseamnă că fluxul de valoare
livrează mai multe unități care au nevoie tot mai mult de refacere mai târziu, exact
tiparul viteză-fără-calitate de care subiectul 1.2 avertizează fiecare familie de metrici
să se apere.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Doar metrici Lean clasice (LT, PT, CT, %C/A, timp takt) | Vocabular universal; funcționează deopotrivă în echipe de software și în afara software-ului | Nu sunt specifice software-ului; cer traducere pentru etapele specifice ingineriei |
| Doar metrici Flow Framework (subiectele 2.3, 2.4) | Construite special pentru fluxuri de valoare software și vizibilitatea tipului de element | Necunoscute părților interesate formate în Lean Six Sigma din afara ingineriei |
| Ambele, cu o corespondență explicită documentată | Vorbește ambele vocabulare; cea mai puternică punte între funcții | Cere disciplina inițială de a scrie corespondența și de a o ține la zi |
| %C/A măsurat doar la livrarea finală | Simplu, un singur număr | Ascunde refacerea introdusă și prinsă mai devreme în flux |

Tensiunea centrală este **universalitate versus specificitate**. Metricile Lean clasice
sunt imediat lizibile pentru oricine are experiență în producție, operațiuni sau Six
Sigma, dar nu au fost proiectate având în minte etapele specifice software-ului,
revizuirea codului, testarea automată, aprobarea implementării. Rezolvă tensiunea
folosind metricile Lean ca vocabular de referință comun pentru conversațiile între funcții
și cu conducerea executivă, iar metricile proprii ale Flow Framework (subiectele 2.3 și
2.4) pentru munca de diagnostic specifică software-ului pe care o fac zilnic echipele de
inginerie.

## Întrebări de discutat cu echipa ta

1. **Am putea calcula azi toate cele cinci metrici Lean clasice pentru fluxul nostru de
   valoare sau avem doar unele dintre ele?** Cele mai multe echipe de software au
   echivalente pentru timpul fluxului și timpul de ciclu, dar nu au calculat niciodată
   explicit timpul de procesare, %C/A sau timpul takt. Identifică care dintre cele cinci
   lipsesc cu adevărat înainte de a presupune că lacuna este mică.

2. **Am agregat vreodată %C/A peste fiecare etapă a fluxului nostru de valoare sau l-am
   măsurat doar la livrarea finală?** O singură măsurătoare la sfârșitul fluxului ascunde
   exact refacerea compusă pe care calculul randamentului cumulat al debitului din acest
   subiect este proiectat să o dezvăluie. Încearcă calculul de agregare cu date reale.

3. **Ne cunoaștem timpul takt, calculat din cererea reală a clienților, și cum se
   compară timpul de ciclu măsurat cu el?** Cele mai multe echipe nu au făcut niciodată
   explicită această comparație, ceea ce înseamnă că discuțiile despre capacitate rămân
   anecdotice, nu cuantificate.

4. **Dacă o parte interesată formată în Lean Six Sigma din afara ingineriei ne-ar întreba
   despre timpul nostru de ciclu, am fi siguri că ne referim la același lucru ca ea?**
   Timpul de ciclu al acestei cărți (subiectul 2.6) și CT clasic din Lean sunt înrudite,
   dar nu identice. Discută dacă această distincție a cauzat vreodată o neînțelegere reală
   în organizația voastră.

5. **A fost vreodată randamentul nostru cumulat al debitului semnificativ mai mic decât
   %C/A raportat de oricare etapă singulară?** Dacă nu ai calculat niciodată agregarea,
   discută ce te-ai aștepta să găsești și apoi verifică față de date reale.

6. **Rulează organizația noastră deja un program Lean sau Six Sigma în afara software-ului
   cu care ne-am putea alinia, în loc să menținem un vocabular separat și deconectat?**
   Multe companii mari și agenții guvernamentale au deja această infrastructură; verifică
   dacă ingineria s-a conectat vreodată de fapt la ea.

## Perspectiva sectorială

**Startup.** Cartografierea completă Lean a fluxului de valoare rareori merită ceremonia
la această scară, dar timpul takt merită înțeles informal: a ști aproximativ cât de
repede trebuie cu adevărat să se miște echipa ca să se potrivească cererii reale a
clienților, nu unui ritm intern arbitrar, previne atât supradimensionarea capacității
prea devreme, cât și subdimensionarea ei odată ce vine creșterea.

**Afacere mică.** %C/A este cea mai imediat utilă dintre cele cinci metrici de aici,
pentru că răspunde direct la „cât din ce livrăm trebuie refăcut”, o întrebare pe care
proprietarii și echipele mici o simt acut fără a avea mereu un număr atașat. Urmărește-l
informal pentru unul sau două procese critice înainte de a investi în ceva mai elaborat.

**Companie mare.** Aici vocabularul Lean clasic își câștigă pâinea, pentru că marile
companii rulează foarte des deja un program Lean Six Sigma în operațiuni, în divizii
apropiate de producție sau în servicii partajate, iar o inginerie care vorbește aceeași
limbă câștigă o punte imediată și credibilă către acele funcții, în loc să fie nevoită să
justifice de la zero un set separat de metrici doar pentru software.

**Administrație publică.** Agențiile guvernamentale, în special cele cu rădăcini în
funcții de reglementare, apropiate de producție sau de logistică, au frecvent mandate
existente de Lean sau de îmbunătățire a proceselor. Încadrarea fluxului de valoare al unui
serviciu digital în aceiași termeni clasici, timp de livrare, timp de procesare, %C/A,
timp takt, pe care îi folosește deja biroul de îmbunătățire a proceselor al agenției este
adesea cea mai rapidă cale de a obține sprijin instituțional real pentru un efort de
modernizare software.

## Exemple

**Companie mare.** Divizia internă de software a unei companii de producție se luptase ani
de zile să-și facă metricile de inginerie luate în serios de o conducere de operațiuni
care vorbea fluent Lean Six Sigma încă de pe podeaua fabricii. Reîncadrarea fluxului de
livrare al diviziei folosind aceleași cinci metrici clasice, calculând timpul de livrare,
timpul de procesare, timpul de ciclu, %C/A și timpul takt pentru fluxul ei de valoare
software, a făcut imediat, pentru prima oară, numerele diviziei lizibile pentru conducerea
de operațiuni. Un calcul al randamentului cumulat al debitului peste cele patru etape ale
fluxului a dezvăluit un %C/A real de 61%, mult sub numărul raportat de oricare etapă în
parte, care a devenit baza de dovezi pentru o inițiativă de reducere a refacerii pe care
conducerea de operațiuni a finanțat-o în același trimestru.

**Administrație publică.** Echipa de autorizări digitale a unui departament de transport
al unui stat, care raporta unei agenții cu un birou vechi de îmbunătățire a proceselor
Lean, nu se implicase niciodată cu acel birou pentru că propriile metrici foloseau un
limbaj specific software-ului pe care biroul nu-l recunoștea. După traducerea fluxului de
valoare al autorizărilor în timp de livrare, timp de procesare și %C/A, biroul de
îmbunătățire a proceselor a identificat că adevărata constrângere a echipei nu era viteza
ingineriei, ci o etapă juridică de revizuire din aval, care rula mult sub propriul timp
takt efectiv în raport cu cererea de autorizări, o constatare pe care biroul era pregătit
să o abordeze imediat pentru că fusese încadrată în termeni familiari.

## Argumentul de business: motivații, ROI și TCO

Randamentul adoptării vocabularului Lean clasic alături de metricile specifice
software-ului ale acestei cărți este o punte credibilă și imediată către expertiza și
finanțarea pentru îmbunătățirea proceselor care există adesea deja în altă parte a unei
organizații mari. Exemplul companiei de producție de mai sus, care a obținut finanțare
pentru reducerea refacerii în același trimestru în care reîncadrarea a făcut cazul
lizibil, este tiparul pe care îl produce fiabil abordarea acestui subiect: intuiția nu
era nouă, dar vocabularul care a făcut-o acționabilă pentru publicul potrivit era.

Costul total de proprietate este mic: aceste cinci metrici nu cer nicio instrumentare
nouă dincolo de ce colectează deja subiectele 2.4 până la 2.6, plus o clasificare a
refacerii pentru %C/A care este de obicei o simplă adăugire la urmărirea existentă a
defectelor și a elementelor de flux (subiectul 2.2). Investiția principală este traducerea,
scrierea corespondenței dintre termenii acestei cărți și cei clasici din Lean, care se
amortizează prima dată când previne o neînțelegere între funcții.

## Anti-modele și capcane

- **Măsurarea %C/A doar la livrarea finală:** vectorul de manipulare din centrul acestui
  subiect. O echipă poate raporta un %C/A ridicat la etapa finală în timp ce etapele
  anterioare produc discret refacere care este reparată înainte să o măsoare cineva,
  făcând întregul flux de valoare să pară mai sănătos decât este. Garda de protecție este
  agregarea %C/A multiplicativ peste fiecare etapă, calculul randamentului cumulat al
  debitului, și auditarea periodică a definiției lui „complet și corect” a fiecărei etape,
  astfel încât să nu se îngusteze discret în timp.
- **A presupune că timpul de ciclu al acestei cărți și CT clasic din Lean înseamnă exact
  același lucru:** produce confuzie reală între funcții când cele două vocabulare se
  întâlnesc fără o corespondență documentată.
- **Stabilirea timpului takt din capacitatea curentă în loc de cererea reală a
  clienților:** anulează scopul metricii, care este să dezvăluie o diferență între cerere și
  capacitate, nu să confirme orice ritm există deja.
- **Tratarea metricilor Lean clasice ca depășite odată ce un cadru specific software-ului
  este adoptat:** aruncă o punte credibilă și susținută de dovezi către expertiza de
  îmbunătățire a proceselor care poate exista deja în organizație.
- **Ignorarea unui program Lean Six Sigma existent în altă parte a organizației:** pierde
  finanțare, expertiză și credibilitate instituțională pe care reîncadrarea metricilor de
  livrare într-un limbaj comun le-ar putea debloca.
- **Raportarea %C/A fără a-l asocia cu viteza fluxului:** lasă un număr de debit în
  creștere să ascundă o rată de refacere în creștere, aceeași lacună de gardă împotriva
  căreia avertizează această carte pe tot parcursul ei.

## Model de maturitate

- **Nivelul 1, Inițiere:** Niciuna dintre cele cinci metrici Lean clasice nu este
  calculată; livrarea este discutată fără referire la timpul de livrare, timpul de
  procesare sau %C/A.
- **Nivelul 2, Dezvoltare:** Timpul de livrare și timpul de ciclu sunt urmărite informal,
  dar timpul de procesare, %C/A și timpul takt nu sunt calculate, și nu există o
  corespondență cu vocabularul propriu al acestei cărți.
- **Nivelul 3, Standardizare:** Toate cele cinci metrici clasice sunt calculate
  consecvent, iar corespondența cu vocabularul de flux și de timp de ciclu al acestei cărți
  este documentată într-o cartă comună a metricilor.
- **Nivelul 4, Gestionare:** Randamentul cumulat al debitului este calculat peste fiecare
  etapă a fluxului de valoare, iar timpul takt este comparat cu timpul de ciclu măsurat
  pentru a cuantifica explicit deficitele de capacitate.
- **Nivelul 5, Orchestrare:** Organizația și-a conectat metricile de livrare software la un
  program Lean sau Six Sigma existent în altă parte a afacerii și poate indica decizii
  concrete de investiții sau de proces luate pentru că vocabularul comun a făcut o
  intuiție acționabilă pentru un public din afara ingineriei.

## Idei de discuție

1. Am putea calcula azi timpul de livrare, timpul de procesare, timpul de ciclu, %C/A și timpul takt pentru fluxul nostru de valoare?
2. Care ar fi randamentul nostru cumulat al debitului dacă am înmulți %C/A al fiecărei etape?
3. Rulează organizația noastră deja un program Lean sau Six Sigma la care nu am conectat niciodată metricile de inginerie?
4. Cum se compară timpul nostru de ciclu măsurat cu timpul takt, calculat din cererea reală a clienților?

## Concluzii principale

- Cele cinci metrici Lean clasice, **timpul de livrare, timpul de procesare, timpul de
  ciclu, procentul complet și corect și timpul takt**, preced software-ul și rămân
  vocabularul comun al părților interesate formate în Lean Six Sigma.
- **Timpul fluxului și timpul de ciclu** din această carte **se mapează pe, dar nu sunt
  identice cu**, timpul de livrare și CT clasic din Lean; documentează explicit
  corespondența ca să eviți confuzia între funcții.
- Vectorul central de manipulare al subiectului este **măsurarea %C/A doar la livrarea
  finală**; garda de protecție este agregarea lui multiplicativ peste fiecare etapă, ca
  randament cumulat al debitului.
- **Timpul takt reîncadrează capacitatea în jurul cererii reale a clienților**, nu al
  ritmului existent, și se asociază direct cu utilizarea (subiectul 2.7) și cu încărcarea
  fluxului (subiectul 2.4).
- Reîncadrarea livrării de software în termeni Lean clasici este adesea cea mai rapidă
  cale de a te conecta la **expertiza și finanțarea existente pentru îmbunătățirea
  proceselor**, prezente deja într-o organizație mare.

## Referințe și lecturi suplimentare

- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., and Daniel T. Jones. *Lean Thinking: Banish Waste and
  Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, and Daniel Roos. *The Machine That
  Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and
  Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill,
  2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*.
  Productivity Press, 1988.
