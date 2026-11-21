# 4.1 Metrici de complexitate a codului

## Prezentare generală și motivație

**[Complexitatea ciclomatică](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**,
introdusă de Thomas J. McCabe în 1976, numără căile independente prin fluxul
de control al unei bucăți de cod: fiecare `if`, buclă și ramificație adaugă la
numărătoare. Rămâne cea mai larg folosită metrică de complexitate a codului la
aproape cincizeci de ani distanță, alături de rude precum complexitatea
cognitivă (care ponderează mai greu fluxul de control imbricat și greu de
urmărit decât numărătoarea liniară originală a lui McCabe) și adâncimea de
imbricare. Aceste metrici împărtășesc o intuiție reală, validată: codul cu mai
multe căi independente prin el este mai greu de testat complet, mai greu de
înțeles și, în decenii de cercetare empirică, măsurabil mai probabil să
conțină defecte.

Acest subiect tratează acea intuiție cu respect real, tratând în același timp
cu aceeași seriozitate limitele ei. Metricile de complexitate măsoară o
singură proprietate specifică a codului, iar o bază de cod poate fi simplă după
orice metrică de complexitate și totuși prost proiectată, prost denumită sau
incoerentă conceptual, în moduri pe care niciun algoritm de numărare a
ramificațiilor nu le poate detecta. Invers, unele probleme ireductibil
complexe cer cu adevărat cod complex pentru a fi rezolvate corect, iar o
echipă presată să minimizeze un scor de complexitate poate produce cod care
scorează bine fiind de fapt mai greu de înțeles, împrăștiind complexitatea
esențială peste mai multe fișiere și straturi de indirectare, în loc s-o
reducă.

Pentru echipele mari, metricile de complexitate își câștigă locul ca unealtă de
triaj: o modalitate de a găsi, printre mii de fișiere, mica submulțime cu cele
mai mari șanse să merite o privire mai atentă, nu ca verdict de sine stătător
asupra calității codului. Companiile mari și administrațiile publice care
întrețin baze de cod prea mari pentru ca vreo persoană să le fi citit în
întregime depind de această funcție de triaj pentru a direcționa efortul rar de
refactorizare și de revizuire acolo unde va face cel mai mult bine.

## Principii-cheie

- **Metricile de complexitate prezic dificultatea testării și a defectelor; nu
  măsoară direct calitatea.** Tratează-le ca pe o intrare, nu ca pe un verdict.
- **Un scor de complexitate este expus manipulării prin ofuscare, nu doar prin
  simplificare reală.** Împărțirea complexității în mai multe fișiere poate
  scădea scorul fără ca să facă efectiv codul mai ușor de înțeles.
- **O parte din complexitate este esențială, nu accidentală.** O problemă cu
  adevărat grea poate cere cod cu adevărat complex; scopul este minimizarea
  complexității accidentale, nu eliminarea fără discernământ a oricărei
  complexități.
- **Folosește metricile de complexitate pentru triaj, nu ca fișă de scor
  individuală sau de echipă.** Ele arată unde să te uiți, nu pe cine să dai
  vina.
- **Tendința și valorile extreme contează mai mult decât orice prag absolut.** O
  tendință în creștere sau o valoare extremă este mai acționabilă decât o medie
  unică la nivel de echipă.

## Recomandări

### Folosește metricile de complexitate pentru a face triajul efortului de revizuire și refactorizare

Rulează analiza de complexitate pe toată baza de cod și folosește rezultatele
pentru a prioritiza unde o revizuire umană mai atentă sau o investiție în
refactorizare ar aduce cel mai mult: funcțiile sau fișierele cu scoruri mult
peste intervalul tipic al propriei baze de cod sunt locurile cu cea mai mare
valoare în care să te uiți mai întâi. Această utilizare de triaj, găsirea
locului unde să te uiți, este aplicarea cea mai ușor de apărat și cea mai
valoroasă a metricilor de complexitate, cu mult mai mult decât folosirea lor ca
poartă absolută de tip trece/nu trece.

### Stabilește pragurile relativ la propria bază de cod, nu la un număr universal

Pragurile absolute de complexitate, împrumutate necritic din convenția
industriei (un scor de complexitate de zece este o regulă empirică citată des),
pot fi fie prea îngăduitoare, fie prea stricte, în funcție de domeniul tău: un
parser sau un motor de reguli poate avea în mod legitim o complexitate de bază
mai mare decât un serviciu CRUD tipic. Calibrează-ți propriile praguri față de
distribuția reală a bazei tale de cod și tratează o depășire de prag ca pe un
îndemn să te uiți mai atent, nu ca pe un eșec automat al build-ului, cu excepția
cazului în care echipa ta a ales deliberat acea politică mai strictă, cu
deplină conștientizare a compromisurilor ei.

### Urmărește manipularea prin descompunere fără simplificare reală

Cel mai frecvent mod în care scorurile de complexitate sunt manipulate este
tiparul de substituție din subiectul 1.2, aplicat acestei metrici specifice:
împărțirea unei funcții cu adevărat complexe în mai multe funcții mai mici, care
scorează bine individual, în timp ce sistemul în ansamblu rămâne la fel de greu
de înțeles sau devine uneori mai greu, pentru că logica este acum împrăștiată
în mai multe fișiere, cu mai multă indirectare între ele. Asociază metricile de
complexitate cu o revizuire calitativă a faptului dacă descompunerea a clarificat
cu adevărat codul sau doar a mutat complexitatea într-un loc pe care metrica nu
îl mai putea vedea.

### Distinge complexitatea esențială de cea accidentală înainte să reacționezi

Înainte să tratezi un scor mare de complexitate ca pe o problemă de reparat,
întreabă-te dacă problema de fond cere cu adevărat atât de multe căi
independente, logica de calcul fiscal are în mod legitim multe ramificații, de
exemplu, sau dacă complexitatea vine din cauze evitabile: condiționale imbricate
adânc, care ar putea fi aplatizate, logică duplicată care ar putea fi
consolidată sau granițe neclare de responsabilitate care ar putea fi retrasate.
Doar a doua categorie este o problemă reală de calitate pe care această metrică
ar trebui să te determine s-o repari.

### Urmărește tendința și valorile extreme, nu doar o medie instantanee

O medie a complexității la nivelul întregii baze de cod care se mișcă ușor este
rareori acționabilă singură; complexitatea unui anumit fișier crescând brusc
pe parcursul mai multor schimbări sau un număr mic de valori extreme într-o
bază de cod altfel bine comportată sunt semnale mult mai utile. Urmărește atât
tendința în timp, cât și coada valorilor extreme și folosește-le pentru a declanșa
o investigație specifică și țintită, nu o inițiativă largă și nefocalizată de
reducere a complexității.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Prag universal absolut | Simplu, consecvent, ușor de automatizat | Ignoră diferențele legitime de domeniu; poate fi manipulat prin descompunere |
| Prag relativ la baza de cod | Mai bine calibrat la contextul real | Cere mai multă pregătire și recalibrare periodică |
| Complexitatea ca poartă automată de build | Impune consecvență fără efort de revizuire umană | Poate bloca cod legitim complex, dar bine proiectat, sau poate recompensa descompunerea ofuscată |
| Complexitatea ca semnal de triaj pentru revizuirea umană | Prinde probleme reale de calitate pe care descompunerea singură le-ar rata | Cere mai mult timp de revizuire umană decât o poartă complet automată |

Tensiunea centrală este **automatizare versus judecată**. O poartă automată de
complexitate este ieftin de impus și consecventă, dar poate atât să blocheze cod
legitim complex și bine proiectat, cât și să recompenseze descompunerea
superficială care manipulează scorul fără să simplifice cu adevărat ceva.
Rezolvă tensiunea folosind analiza automată a complexității pentru a scoate la
iveală candidați la revizuire și rezervând judecata propriu-zisă, este această
complexitate esențială sau accidentală, a clarificat această refactorizare cu
adevărat sau doar a mutat complexitatea, pentru un revizuitor uman, nu doar
pentru o poartă automată rigidă.

## Întrebări de discutat cu echipa ta

1. **Sunt pragurile noastre de complexitate calibrate la distribuția reală a
   propriei baze de cod sau împrumutate necritic dintr-o convenție generică a
   industriei?** Extrage distribuția reală a complexității din baza ta de cod și
   verifică dacă pragurile actuale au sens față de ea, în loc să presupui că un
   număr citat des se aplică universal domeniului tău.

2. **Am văzut vreodată o funcție împărțită în mai multe funcții mai mici fără ca
   codul rezultat să devină efectiv mai ușor de înțeles?** Acesta este cel mai
   clar semn al tiparului de manipulare prin descompunere împotriva căruia
   avertizează acest subiect. Privește o refactorizare recentă motivată în
   principal de un scor de complexitate și evaluează sincer dacă a îmbunătățit
   cu adevărat inteligibilitatea.

3. **Unde în baza noastră de cod este complexitatea esențială pentru problemă și
   unde este accidentală și remediabilă?** Parcurge cele mai complexe valori
   extreme și sortează-le explicit în aceste două categorii, deoarece doar a
   doua categorie reprezintă o problemă reală și acționabilă de calitate.

4. **Folosim metricile de complexitate pentru triajul efortului de revizuire sau
   ca poartă automată rigidă, fără nicio judecată umană?** Discută dacă
   abordarea actuală de aplicare lasă loc distincției esențial-versus-accidental
   pe care o recomandă acest subiect sau dacă tratează fiecare depășire identic,
   indiferent de context.

5. **A fost vreodată un scor de complexitate folosit, chiar și informal, pentru
   a judeca calitatea muncii unui inginer?** Asta riscă aceeași capcană a
   evaluării individuale împotriva căreia avertizează subiectul 3.4 pentru
   metricile de activitate, aplicată aici metricilor de cod, și invită la același
   răspuns de manipulare.

6. **Cum arată tendința noastră de complexitate în ultimul an pentru cele mai
   critice fișiere, cele mai des modificate?** Combină-o cu analiza volatilității
   și a punctelor fierbinți din subiectul 4.3, deoarece un fișier care este atât
   foarte complex, cât și modificat frecvent merită atenție cu mult înaintea unuia
   complex, dar rareori atins.

## Perspectiva sectorială

**Startup.** Metricile de complexitate sunt de obicei mai puțin urgente la
această scară; baza de cod este suficient de mică încât familiaritatea informală
înlocuiește adesea măsurarea formală. Obiceiul care merită adoptat devreme este
pur și simplu să rulezi ocazional o scanare de complexitate, ca să prinzi un
anumit fișier devenind în tăcere de negestionat înainte ca echipa să fi crescut
prea mult ca să observe informal.

**Afacere mică.** Majoritatea uneltelor moderne de analiză statică raportează
metrici de complexitate ca parte dintr-o configurare mai largă de linting,
gratuită sau ieftină; folosește rezultatul ca semnal periodic de triaj, în loc
să investești în unelte dedicate. Concentrează atenția mai întâi pe fișierele
modificate cel mai des.

**Companie mare.** Metricile de complexitate la scară sunt cele mai valoroase
combinate cu datele de volatilitate (subiectul 4.3), pentru a prioritiza
investiția în refactorizare într-o bază de cod prea mare pentru ca vreo persoană
s-o cerceteze manual. Calibrează pragurile per serviciu sau per domeniu, în loc
să aplici un singur număr la nivelul organizației, deoarece complexitatea
legitimă variază semnificativ între tipuri diferite de sisteme.

**Administrație publică.** Sistemele guvernamentale de lungă durată acumulează
adesea complexitate treptat, de-a lungul anilor sau deceniilor de schimbări
incrementale ale cerințelor, iar un audit de complexitate poate fi o unealtă
concretă și convingătoare pentru a justifica investițiile în modernizare sau
refactorizare în fața părților interesate care altfel ar vedea sistemul pur și
simplu ca „funcționând” și deci nevrednic de investiții.

## Exemple

**Companie mare.** O companie de procesare a plăților a rulat pentru prima dată
un audit de complexitate la nivelul întregii baze de cod și a găsit o singură
funcție de validare a tranzacțiilor cu un scor de complexitate ciclomatică de
peste zece ori mediana bazei de cod. Investigația a arătat că
complexitatea era aproape în întregime accidentală: ani de tratare a cazurilor
speciale adăugate incremental pentru anumiți furnizori de plăți se acumulaseră
în condiționale imbricate adânc, care puteau fi restructurate într-un șablon
strategy mai curat, separând logica specifică furnizorilor. Refactorizarea,
prioritizată direct pentru că auditul de complexitate o identificase drept
ținta cu cea mai mare valoare din baza de cod, a redus scorul de complexitate al
funcției cu peste 80% și, mai important, a redus măsurabil rata defectelor din
acea cale de cod în următoarele două trimestre.

**Administrație publică.** Motorul de calcul al beneficiilor, vechi de decenii,
al unei autorități fiscale a obținut scoruri extrem de ridicate la metricile de
complexitate la aproape fiecare funcție, ceea ce a stârnit presupunerea inițială
că întregul sistem cerea o rescriere de la zero. O revizuire mai atentă, funcție
cu funcție, care distingea complexitatea esențială de cea accidentală, a
constatat că cea mai mare parte a complexității reflecta cu adevărat regulile
legale de fond, care chiar aveau atâtea ramificații legitime și cazuri speciale
impuse prin lege, în timp ce o submulțime mai mică provenea din duplicare
evitabilă între căi similare de calcul. Echipa a vizat pentru refactorizare doar
submulțimea de complexitate accidentală, evitând o rescriere completă, costisitoare și
riscantă, dar îmbunătățind totuși semnificativ zonele cu adevărat problematice
ale sistemului.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea folosirii bune a metricilor de complexitate este investiția
țintită și de mare valoare în refactorizare: exemplul cu compania de plăți de mai
sus arată o singură remediere bine țintită, identificată prin analiza
complexității, care a redus măsurabil defectele exact în calea de cod cu cel mai
mare risc, la o fracțiune din costul pe care l-ar fi cerut o inițiativă largă și
netintită de refactorizare.

Costul total de proprietate este scăzut: majoritatea lanțurilor moderne de unelte
de dezvoltare calculează automat metricile de complexitate ca parte a analizei
statice (subiectul 4.4), iar investiția reală este timpul de judecată umană
pentru interpretarea corectă a rezultatelor, distingerea complexității esențiale
de cea accidentală și prinderea manipulării prin descompunere, nu vreun cost
semnificativ nou de unelte.

## Anti-modele și capcane

- **Tratarea unui scor de complexitate ca verdict direct de calitate:** măsoară o
  singură proprietate specifică, nu calitatea generală a codului.
- **Împărțirea unei funcții pentru a manipula scorul fără simplificare reală:**
  tiparul manipulării prin descompunere pe care îl numește specific acest subiect.
- **Aplicarea unui prag universal fără calibrare la propria bază de cod:** produce
  o aplicare fie prea îngăduitoare, fie prea strictă, în funcție de domeniu.
- **Folosirea metricilor de complexitate pentru evaluarea individuală a
  inginerilor:** invită la manipulare și folosește greșit o metrică menită
  triajului, nu judecății.
- **Tratarea oricărei complexități ca la fel de remediabilă:** complexitatea
  esențială dintr-o problemă cu adevărat grea nu este un defect de eliminat.
- **Ignorarea tendinței și a valorilor extreme în favoarea unei medii plate la
  nivelul întregii baze de cod:** ratează cel mai acționabil semnal pe care îl
  oferă această familie de metrici.

## Model de maturitate

- **Nivelul 1, Inițiere:** Complexitatea nu este măsurată sau este măsurată cu un
  prag universal generic, neexaminat, aplicat necritic.
- **Nivelul 2, Dezvoltare:** Metricile de complexitate sunt colectate, dar rareori
  se acționează pe baza lor și nu se face nicio distincție între complexitatea
  esențială și cea accidentală.
- **Nivelul 3, Standardizare:** Pragurile sunt calibrate la distribuția proprie a
  bazei de cod, iar metricile de complexitate ghidează consecvent triajul
  revizuirilor și al refactorizărilor în toată organizația.
- **Nivelul 4, Gestionare:** Tendința complexității și valorile extreme sunt
  monitorizate activ și combinate cu datele de volatilitate (subiectul 4.3)
  pentru a prioritiza investiția în refactorizare; manipularea prin descompunere
  este urmărită activ.
- **Nivelul 5, Orchestrare:** Organizația poate indica îmbunătățiri măsurabile și
  concrete ale ratei defectelor, atribuite direct investiției în refactorizare
  informate de complexitate, iar datele de complexitate sunt o intrare de rutină
  și de încredere în deciziile de investiții în inginerie.

## Idei de discuție

1. Care este cea mai complexă funcție sau fișier al nostru și este complexitatea lui esențială sau accidentală?
2. Am manipulat vreodată un scor de complexitate prin descompunere fără simplificare reală?
3. Sunt pragurile noastre calibrate la propria bază de cod sau împrumutate necritic?
4. Unde se suprapune acum, în baza noastră de cod, complexitatea ridicată cu volatilitatea ridicată?
5. A informat vreodată un set de date de complexitate o decizie de investiție în refactorizare sau stă nefolosit?

## Concluzii principale

- Metricile de complexitate precum **complexitatea ciclomatică** prezic
  dificultatea testării și a defectelor; nu măsoară direct calitatea generală a
  codului.
- Distinge **complexitatea esențială** (dintr-o problemă cu adevărat grea) de
  **complexitatea accidentală** (evitabilă printr-o proiectare mai bună) înainte
  să reacționezi la un scor mare.
- Urmărește **manipularea prin descompunere**: împărțirea codului pentru a scădea
  un scor fără a simplifica cu adevărat ceva.
- Folosește metricile de complexitate pentru **triaj**, direcționând efortul de
  revizuire și refactorizare umană, nu ca fișă de scor individuală sau poartă
  automată rigidă.
- Calibrează pragurile la **distribuția propriei baze de cod** și urmărește
  **tendința și valorile extreme**, nu doar o medie plată.

## Referințe și lecturi suplimentare

- McCabe, Thomas J., „A Complexity Measure”, *IEEE Transactions on Software
  Engineering* (1976): lucrarea originală despre complexitatea ciclomatică.
- *Code Complete*, de Steve McConnell (îndrumări practice pentru gestionarea
  complexității în construirea software-ului).
- *Working Effectively with Legacy Code*, de Michael Feathers (tehnici pentru
  reducerea în siguranță a complexității în cod existent, greu de schimbat).
- Campbell, G. Ann, „Cognitive Complexity: A New Way of Measuring
  Understandability” (SonarSource, 2018): metrica complexității cognitive și
  deosebirea ei de complexitatea ciclomatică.
