# 4.4 Analiza statică și metrici de mirosuri de cod

## Prezentare generală și motivație

Uneltele de **[analiză statică](https://en.wikipedia.org/wiki/Static_program_analysis)**
scanează codul sursă fără să-l execute, semnalând tipare despre care se știe că
corelează cu defecte, vulnerabilități de securitate sau probleme de
mentenabilitate: cod inaccesibil, resurse neînchise, conversii de tip suspecte,
logică duplicată și categoria mai largă a **mirosurilor de cod** (code smells),
tipare structurale care nu sunt neapărat defecte, dar tind să facă codul mai greu
de înțeles, de testat sau de schimbat în siguranță. Analiza statică este stratul
automat și continuu aflat sub metricile mai țintite din celelalte subiecte ale
acestei părți, rulând la fiecare commit și scoțând la iveală problemele chiar în
momentul în care sunt introduse, în loc să aștepte un audit periodic.

Preocuparea centrală a acestui subiect este decalajul dintre ce raportează uneltele
de analiză statică și ce contează de fapt. O unealtă poate semnala mii de
constatări într-o bază de cod mare, iar numărul constatărilor singur este o metrică
slabă, pentru că amestecă preferințele banale de stil cu riscul real și sever și
poate fi coborât prin suprimare la fel de ușor ca prin remedieri reale. Valoarea
analizei statice nu vine din numărul brut de constatări, ci din cât de bine
face o organizație triajul severității, previne regresia și rezistă tentației de a
trata judecata uneltei ca pe un substitut pentru revizuirea umană, nu ca pe un
complement al ei.

Pentru echipele mari, analiza statică este singura modalitate practică de a impune
un nivel de bază de igienă a calității codului și a securității într-o bază de cod
mai mare decât poate revizui manual în întregime orice echipă. Companiile mari și
administrațiile publice, care se confruntă adesea cu cerințe de conformitate
privind practicile de codare sigură, depind de analiza statică drept dovadă
documentată și auditabilă că un nivel de bază de control a fost aplicat consecvent,
nu doar când un revizuitor uman a observat din întâmplare o problemă.

## Principii-cheie

- **Numărul brut de constatări este o metrică slabă singură.** Amestecă problemele
  banale cu cele severe și poate fi manipulat prin suprimare, nu prin remedieri
  reale.
- **Triajul severității contează mai mult decât volumul.** Un număr mic de
  constatări critice merită mai multă atenție decât un număr mare de constatări
  banale.
- **Analiza statică completează revizuirea umană; nu o înlocuiește.** Uneltele
  prind tipare; nu înțeleg intenția sau contextul de business.
- **O tendință a „problemelor noi introduse” este mai acționabilă decât un număr
  total al restanței.** Îți spune dacă practica actuală se îmbunătățește sau
  regresează.
- **Fals-pozitivele erodează încrederea în unealtă.** O rată negestionată de
  fals-pozitive îi face pe oameni să ignore constatările pe ansamblu, inclusiv pe
  cele reale.

## Recomandări

### Urmărește constatările ponderate după severitate, nu numărul brut

Configurează uneltele de analiză statică să clasifice constatările după severitate
(critică, mare, medie, mică sau o scală echivalentă) și urmărește o tendință
ponderată după severitate, nu un total plat. O bază de cod cu zero constatări
critice și cinci sute de sugestii de stil cu severitate mică se află într-o stare
foarte diferită de una cu cincizeci de constatări critice și nicio problemă de
stil, iar un număr brut le tratează ca aproximativ echivalente când nu sunt.

### Condiționează poarta de constatările noi introduse, nu de restanța istorică totală

Majoritatea bazelor de cod consacrate poartă o restanță moștenită de constatări
care precedă practica actuală și ar fi prohibitiv de scump de reparat dintr-o dată.
În loc să blochezi toată munca până când întreaga restanță este eliminată,
condiționează CI de faptul că o anumită schimbare introduce constatări noi peste
un prag convenit de severitate, lăsând restanța să se micșoreze treptat prin
mentenanța obișnuită și prevenind totodată acumularea ulterioară. Această
distincție oglindește recomandarea pragului minim de acoperire din subiectul 4.2:
protejează împotriva regresiei, în loc să ceri o remediere nerealistă, dintr-o
dată.

### Gestionează activ rata de fals-pozitive

Revizuiește periodic un eșantion de constatări, în special orice categorie cu
volum mare, și verifică câte sunt fals-pozitive reale, cazuri în care unealta a
semnalat un tipar care nu este de fapt problematic în context. Reglează
configurația regulilor ca să suprimi în mod specific categoriile de reguli cu
adevărat zgomotoase și de valoare mică, în loc să lași echipele să-și formeze
obiceiul de a ignora în bloc rezultatul uneltei pentru că prea mult din el este
zgomot. O rată mare și negestionată de fals-pozitive este cel mai rapid mod de a
distruge credibilitatea unui program de analiză statică.

### Folosește constatările analizei statice ca îndemn la revizuire, nu ca verdict automat

Chiar și o constatare legitimă, care nu este fals-pozitiv, nu justifică mereu o
remediere automată și obligatorie; unele tipare semnalate sunt acceptabile având în
vedere un context specific pe care o unealtă nu îl poate vedea. Construiește un
proces ușor prin care un om revizuiește și fie remediază, fie renunță explicit și
vizibil la o constatare, cu un motiv documentat, în loc fie să impui orbește
fiecare constatare ca obligatorie, fie să permiți o suprimare tăcută și
nedocumentată, care erodează în timp valoarea uneltei.

### Combină analiza statică cu celelalte metrici de calitate a codului din această parte

Constatările analizei statice, scorurile de complexitate (subiectul 4.1) și datele
despre puncte fierbinți (subiectul 4.3) sunt dovezi complementare, nu metrici
concurente. Un fișier cu o concentrare mare de constatări nerezolvate ale analizei
statice, care este și punct fierbinte de volatilitate-complexitate, este un
candidat deosebit de puternic pentru atenție prioritară, întrucât mai multe
semnale independente converg spre aceeași concluzie.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Numărul brut de constatări ca metrică | Simplu de raportat | Amestecă problemele banale cu cele severe; ușor de manipulat prin suprimare |
| Tendință ponderată după severitate | Reflectă mai exact riscul real | Cere întreținerea continuă a clasificării severității |
| Poartă pe întreaga restanță istorică | Maximizează curățenia finală a codului | Adesea nepractică pentru bazele de cod consacrate; poate opri toată munca |
| Poartă doar pe constatările noi | Practică, previne regresia, lasă restanța să se micșoreze treptat | Problemele moștenite persistă mai mult fără un plan deliberat de remediere |

Tensiunea centrală este **minuțiozitate versus practicitate**. O politică de
analiză statică care cere rezolvarea întregii restanțe istorice înainte să
avanseze orice muncă nouă este minuțioasă, dar de obicei nepractică pentru orice
bază de cod cu istorie reală, iar echipele sub această presiune tind să suprime
constatările în bloc, în loc să le remedieze cu adevărat. Rezolvă tensiunea
condiționând strict poarta de constatările noi, în timp ce rulezi un efort separat,
deliberat ritmat, de remediere a restanței moștenite, prioritizat folosind
tehnicile de severitate și de raportare încrucișată pe care le recomandă acest
subiect și subiectul 4.3.

## Întrebări de discutat cu echipa ta

1. **Urmărim o tendință ponderată după severitate sau doar un total brut al
   constatărilor?** Deschide tabloul tău de bord real și verifică; un număr brut
   este frecvent implicit în multe unelte și cere adesea configurare deliberată
   pentru a scoate corect la iveală severitatea.

2. **Care este restanța noastră moștenită actuală de constatări nerezolvate și
   avem un plan deliberat, ritmat, pentru reducerea ei sau doar se acumulează la
   nesfârșit?** O restanță neabordată, în creștere tăcută, este frecventă și merită
   numită sincer, nu lăsată neexaminată.

3. **Care este rata noastră estimată de fals-pozitive pentru categoriile de
   constatări cu cel mai mare volum și am reglat configurația regulilor ca
   răspuns?** Dacă nu ai verificat niciodată, eșantionează un lot de constatări din
   cea mai zgomotoasă categorie și evaluează sincer câte sunt cu adevărat
   acționabile.

4. **Au încredere inginerii din echipa noastră în constatările analizei statice
   sau au învățat să le ignore pentru că prea mult din rezultat este zgomot?**
   Aceasta este o întrebare directă, sinceră, de verificat din instinct, care
   merită pusă echipei, pentru că o unealtă ignorată nu oferă nicio valoare reală,
   indiferent de capacitatea ei teoretică.

5. **Cum tratăm acum o constatare legitimă la care o echipă crede că ar trebui să
   se renunțe, dat fiind un context specific?** Verifică dacă procesul tău face din
   asta o decizie vizibilă, documentată, sau dacă se petrece prin suprimare
   tăcută, nedocumentată, care erodează în timp semnalul uneltei.

6. **Unde converg constatările analizei statice, scorurile de complexitate și
   datele despre puncte fierbinți pe același fișier sau modul?** Raportează
   explicit aceste trei semnale unul la celălalt; convergența mai multor metrici
   independente este un semnal de prioritizare mai puternic decât oricare dintre ele
   singură.

## Perspectiva sectorială

**Startup.** O unealtă ușoară și gratuită de analiză statică, integrată în CI de
la început, este o asigurare ieftină și prinde problemele reale devreme, înainte
ca o restanță moștenită să aibă vreo șansă să se acumuleze. Păstrează setul de
reguli concentrat pe categorii cu adevărat valoroase și cu zgomot redus, în loc să
activezi imediat toate regulile disponibile.

**Afacere mică.** Majoritatea ecosistemelor moderne de limbaje includ unelte
gratuite și capabile de analiză statică; activarea lor în CI cu un set rezonabil
de reguli implicite cere puțină investiție. Concentrează-te pe condiționarea porții
de constatările noi, în loc să încerci rezolvarea dintr-o dată a oricărei restanțe
preexistente.

**Companie mare.** Gestionarea deliberată a ratei de fals-pozitive și a triajului
severității devine esențială la această scară, deoarece o unealtă prost reglată,
care generează zgomot excesiv în zeci de echipe, va fi ignorată la nivelul întregii
organizații. Investește într-un responsabil dedicat pentru configurarea însăși a
uneltelor de analiză statică, tratând reglarea regulilor ca pe o disciplină
continuă, nu ca pe o sarcină unică de configurare.

**Administrație publică.** Constatările analizei statice, în special cele legate de
securitate, sunt adesea direct relevante pentru cerințele de conformitate și de
audit. Menține un proces documentat și auditabil al felului în care constatările
sunt triate, remediate sau abandonate formal cu o justificare înregistrată, întrucât
tocmai această documentație este frecvent ceea ce va vrea să vadă un auditor extern.

## Exemple

**Companie mare.** Tabloul de bord de analiză statică al unei companii de software
acumulase peste patruzeci de mii de constatări nerezolvate în baza de cod, după mai
mulți ani fără triaj ponderat după severitate, un număr atât de mare încât
inginerii aproape încetaseră să se mai uite la tablou. O abordare revizuită a
clasificat constatările după severitate, a găsit că mai puțin de două sute erau cu
adevărat critice și a condiționat CI în mod specific de constatările noi critice și
de severitate mare, lăsând restanța de severitate mică să se micșoreze treptat prin
mentenanța obișnuită a codului. În șase luni, constatările critice au scăzut la o
singură cifră și, mai important, datele din sondajul inginerilor au arătat
încredere reînnoită în rezultatul uneltei, acum că scotea la iveală un semnal
gestionabil și cu adevărat acționabil, în loc de o restanță copleșitoare și
ignorată.

**Administrație publică.** Politica de securitate a lanțului de aprovizionare cu
software al unei agenții de apărare cerea o scanare de analiză statică cu zero
constatări nerezolvate înaintea oricărei lansări, o politică ce, în practică,
dusese echipele de dezvoltare să suprime un număr mare de constatări, inclusiv
unele probleme reale de securitate, doar ca să respecte termenele de lansare sub o
poartă imposibil de respectat, de tip totul-sau-nimic. O politică revizuită a cerut
zero constatări noi critice sau de severitate mare introduse de orice lansare,
combinat cu un plan de remediere documentat și urmărit, cu calendar, pentru
restanța moștenită, revizuit trimestrial de un consiliu de guvernanță a
securității. Această abordare practică, în etape, a readus controlul real de
securitate asupra codului nou și a făcut progres real și măsurabil față de
restanța moștenită în optsprezece luni, spre deosebire de politica anterioară,
imposibil de respectat, care produsese mai ales suprimare, nu remedieri reale.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea unei analize statice bine gestionate este prinderea defectelor
reale și a vulnerabilităților de securitate înainte să ajungă în producție, la un
cost mult mai mic decât ar cere efortul echivalent de revizuire umană pentru
aceeași acoperire. Exemplul cu agenția de apărare de mai sus arată costul greșelii:
o politică imposibil de respectat, de tip totul-sau-nimic, redusese de fapt
controlul real de securitate, împingând spre suprimare, opusul intenției ei.

Costul total de proprietate include uneltele în sine, adesea gratuite sau ieftine
pentru ecosistemele comune de limbaje, și disciplina continuă a triajului
severității, a gestionării fals-pozitivelor și a planificării remedierii restanței
moștenite. Această disciplină continuă, mai mult decât unealta în sine, determină
dacă un program de analiză statică oferă valoare reală și de încredere sau se
degradează în zgomot ignorat.

## Anti-modele și capcane

- **Tratarea numărului brut de constatări ca metrică:** amestecă problemele banale
  cu cele severe și este ușor de manipulat prin suprimare.
- **Cerința ca întreaga restanță istorică să fie rezolvată înainte să avanseze
  orice muncă nouă:** de obicei nepractică și împinge spre suprimare, nu spre
  remedieri reale.
- **Ignorarea ratei de fals-pozitive:** un nivel de zgomot negestionat face
  echipele să ignore complet rezultatul uneltei, inclusiv constatările reale.
- **Suprimarea tăcută și nedocumentată a constatărilor legitime:** erodează
  semnalul uneltei și nu lasă nicio urmă de audit pentru conformitate.
- **Tratarea unei constatări a analizei statice ca verdict automat, fără
  revizuire umană:** ratează contextul pe care o unealtă nu îl poate vedea.
- **Nicio raportare vreodată a constatărilor la datele de complexitate și de puncte
  fierbinți:** ratează semnalul mai puternic de prioritizare pe care îl oferă
  dovezile convergente.

## Model de maturitate

- **Nivelul 1, Inițiere:** Analiza statică nu rulează sau constatările se acumulează
  negestionate, fără triaj al severității sau urmărirea tendinței.
- **Nivelul 2, Dezvoltare:** O parte din analiza statică rulează în CI, dar triajul
  severității este inconsecvent, iar rata de fals-pozitive este negestionată.
- **Nivelul 3, Standardizare:** Constatările sunt ponderate după severitate, iar CI
  condiționează poarta de constatările noi critice și de severitate mare, în toată
  organizația.
- **Nivelul 4, Gestionare:** Rata de fals-pozitive este reglată activ, restanța
  moștenită are un plan documentat și ritmat de remediere, iar derogările sunt
  vizibile și documentate.
- **Nivelul 5, Orchestrare:** Constatările analizei statice, datele de complexitate
  și cele despre puncte fierbinți sunt raportate de rutină unele la altele pentru a
  prioritiza investițiile, iar organizația poate indica îmbunătățiri concrete și
  măsurabile ale defectelor sau securității, atribuite programului.

## Idei de discuție

1. Care este tendința noastră actuală ponderată după severitate și se îmbunătățește sau se înrăutățește?
2. Cât de mare este restanța noastră moștenită de constatări și avem un plan deliberat pentru reducerea ei?
3. Care este rata noastră estimată de fals-pozitive pentru cea mai zgomotoasă categorie de constatări?
4. Au încredere sau ignoră inginerii din echipa noastră, în prezent, rezultatul analizei statice?
5. Unde converg în baza noastră de cod constatările analizei statice cu datele de complexitate sau de puncte fierbinți?

## Concluzii principale

- Urmărește o **tendință ponderată după severitate**, nu un număr brut de
  constatări, care amestecă problemele banale cu cele severe.
- Condiționează CI de **constatările noi introduse**, nu de întreaga restanță
  istorică, pentru a preveni regresia fără a cere o remediere nepractică, dintr-o
  dată.
- Gestionează activ **rata de fals-pozitive**; zgomotul negestionat distruge
  încrederea în unealtă și duce la ignorarea în bloc a constatărilor.
- Tratează constatările ca **îndemn la revizuire umană**, cu derogări vizibile și
  documentate, nu ca verdict automat sau suprimare tăcută.
- Raportează analiza statică la **datele de complexitate și de puncte fierbinți**
  (subiectele 4.1, 4.3) pentru dovezi convergente, mai puternice, de prioritizare.

## Referințe și lecturi suplimentare

- *Static Program Analysis*, de Anders Møller și Michael I. Schwartzbach
  (fundamentele teoretice și practice ale tehnicilor de analiză statică).
- Îndrumările OWASP despre testarea statică a securității aplicațiilor (SAST),
  parte din resursele mai largi ale OWASP Foundation despre practicile de
  dezvoltare software sigură.
- *Refactoring: Improving the Design of Existing Code*, de Martin Fowler
  (catalogul de mirosuri de cod pe care se sprijină o mare parte din uneltele de
  analiză statică).
- *Working Effectively with Legacy Code*, de Michael Feathers (gestionarea unei
  restanțe moștenite de probleme de calitate într-o bază de cod consacrată).
