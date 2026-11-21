# 2.5 Eficiența fluxului și munca în curs

## Prezentare generală și motivație

**Eficiența fluxului** este raportul dintre timpul activ și timpul total pentru o
bucată de muncă: dacă o modificare petrece zece ore fiind activ codată, revizuită și
testată, dar stă inactivă în cozi nouăzeci de ore în total pe tot parcursul
călătoriei ei, eficiența fluxului este de 10%. Cele mai multe fluxuri de livrare a
software-ului, măsurate onest, ajung undeva între 10% și 25% eficiență a fluxului,
ceea ce îi surprinde pe cei care se așteaptă ca efortul să domine. Costul dominant în
cele mai multe sisteme de livrare nu este cât durează să faci munca, ci cât așteaptă
munca până să fie începută.

**[Munca în curs](https://en.wikipedia.org/wiki/Work_in_process)** (WIP) este
numărul de elemente la care se lucrează activ la un moment dat, într-o echipă sau
într-un sistem, aceeași mărime pe care subiectul 2.4 o numește „încărcarea fluxului”.
Constatarea contraintuitivă din spatele acestui subiect, susținută de decenii de
cercetare în managementul operațiunilor și formalizată pentru livrarea de software
prin kanban și teoria cozilor, este că limitarea WIP tinde să *crească* debitul, nu
să-l scadă, pentru că mai puțină muncă în desfășurare simultană înseamnă mai puține
schimbări de context, cozi mai scurte și finalizare mai rapidă pe element, chiar dacă
se simte că a lucra la mai puține lucruri simultan ar trebui să producă mai puțin în
total.

Pentru echipele mari, înțelegerea eficienței fluxului reîncadrează aproape fiecare
problemă de livrare de la „oamenii trebuie să lucreze mai repede” la „munca trebuie
să aștepte mai puțin”. Această reîncadrare contează pentru că prima formulare invită
la presiune asupra indivizilor, exact capcana împotriva căreia avertizează subiectul
2.6, în timp ce a doua invită la investigarea structurii cozilor, a capacității de
revizuire și a cât de multă muncă este pornită simultan, unde se află de obicei
îmbunătățirea reală și sustenabilă. Organizațiile mari care jonglează cu multe
inițiative concurente peste echipe comune sunt deosebit de predispuse la WIP mare și
eficiență scăzută a fluxului, pentru că pornirea de muncă nouă pare mereu progres,
chiar când încetinește discret tot ce este deja în desfășurare.

## Principii-cheie

- **Timpul de așteptare, nu efortul activ, domină cele mai multe fluxuri de
  livrare.** O eficiență a fluxului sub 25% este tipică, nu un semn de echipă
  stricată.
- **Limitarea muncii în curs tinde să crească debitul,** nu să-l scadă, reducând
  schimbările de context și scurtând cozile.
- **Pornirea de muncă nouă pare progres; finalizarea muncii este ceea ce livrează
  de fapt valoare.** Nu sunt același lucru, iar organizațiile le confundă de rutină.
- **WIP mare este adesea invizibil până este măsurat.** O echipă poate jongla cu mult
  mai multă muncă simultană decât își dă seama oricare individ în parte.
- **Aceasta este o metrică la nivel de sistem, nu individuală.** Aplicarea limitelor
  de WIP ca să pedepsești indivizi înțelege greșit întregul sens al tehnicii.

## Recomandări

### Măsoară eficiența fluxului înainte de a presupune că efortul este blocajul

Calculează raportul dintre timpul activ și timpul total scurs pentru un eșantion
reprezentativ de modificări recente, folosind datele pe etape ale timpului de ciclu
din subiectul 2.6. Cele mai multe echipe care măsoară asta pentru prima oară sunt
surprinse cât de scăzut este numărul, iar acea surpriză este ea însăși valoroasă:
redirecționează atenția de la „muncește mai mult” spre „reduce așteptarea în cozi”,
care este aproape întotdeauna pârghia mai productivă.

### Stabilește o limită explicită a muncii în curs și impune-o vizibil

Plafonează numărul de elemente pe care o echipă sau un individ le poate avea în curs
activ simultan, vizibil pe o tablă comună (o tablă kanban fizică sau digitală este
implementarea clasică). Când limita este atinsă, următoarea acțiune a echipei este
să ajute la finalizarea a ceva deja în desfășurare, nu să înceapă ceva nou. Această
singură practică, împrumutată din producția lean și formalizată în kanban, este una
dintre cele mai constant eficiente îmbunătățiri de flux disponibile unei echipe de
software și costă aproape nimic de implementat.

### Tratează o limită de WIP ca pe o constrângere de sistem, nu ca pe o cotă individuală

O limită de WIP guvernează cât de multă muncă are *sistemul* (o echipă, o coadă comună
de revizuire, un mediu comun) în desfășurare simultană, nu cât are voie să atingă o
anumită persoană. Aplicarea limitei ca cotă de performanță individuală, „ai voie să ai
doar două tichete deschise”, folosește greșit tehnica și riscă exact genul de
manipulare la nivel individual împotriva căreia avertizează această carte pe tot
parcursul ei. Limita există ca să protejeze fluxul prin întregul sistem, iar impunerea
ei ar trebui să fie o normă de echipă, nu un plafon personal.

### Investighează de ce stă munca inactivă, nu doar cât de mult

Când analiza eficienței fluxului dezvăluie timpi lungi de așteptare, întreabă specific
de ce: așteaptă munca pentru că un revizor nu este disponibil, pentru că un mediu
comun de testare este rezervat, pentru că o dependență de altă echipă nu a aterizat
încă. Fiecare are un remediu diferit. O directivă generică „reduceți timpul de
așteptare”, fără această investigare specifică, tinde să producă răspunsuri generice
și ineficiente.

### Urmărește dacă WIP urcă la loc după o îmbunătățire inițială

Echipele care adoptă cu succes o limită de WIP o văd adesea erodându-se în timp, pe
măsură ce revine presiunea de a porni noi inițiative, „doar de data asta, trebuie să
pornim și chestia asta urgentă”. Tratează fiecare excepție de la limita de WIP ca pe o
decizie deliberată și vizibilă, cu un motiv declarat, nu ca pe o suprascriere discretă
și de rutină, astfel încât disciplina limitei să nu se degradeze pe tăcute înapoi la
starea inițială.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Fără limită de WIP | Se simte flexibil; fără frecare la pornirea muncii noi | Schimbările de context și așteptarea în cozi încetinesc discret tot |
| Limită de WIP la nivel de echipă | Îmbunătățește măsurabil debitul și eficiența fluxului | Cere disciplină de impunere, mai ales sub presiunea termenelor |
| Cotă de WIP la nivel individual | Simplu de enunțat | Folosește greșit tehnica; riscă manipulare individuală |
| Limită de WIP strictă, fără abateri | Beneficiu maxim pentru eficiența fluxului | Poate părea rigidă în situații cu adevărat urgente, excepționale |

Tensiunea centrală este **flexibilitate versus flux**. Pornirea de muncă nouă ori de
câte ori pare urgentă se simte ca reactivitate, dar cercetarea despre eficiența
fluxului și WIP arată constant că această flexibilitate vine în detrimentul
finalizării rapide a oricărui lucru, pentru că mai multă muncă simultană înseamnă
cozi mai lungi și mai multe schimbări de context pentru tot ce este deja în
desfășurare. Rezolvă tensiunea adoptând implicit o limită de WIP la nivel de echipă,
cu un proces de excepție deliberat, vizibil și rar pentru urgențe reale, în loc de o
regulă rigidă, fără excepții, sau de o libertate nelimitată și flexibilă.

## Întrebări de discutat cu echipa ta

1. **Care este eficiența noastră reală a fluxului, măsurată din date reale de timp de
   ciclu, și ne surprinde numărul?** Cele mai multe echipe nu au calculat-o niciodată
   și presupun că este mult mai mare decât se dovedește. Extrage un eșantion de
   modificări recente și calculează onest raportul înainte de a discuta orice altceva
   din acest subiect.

2. **Câtă muncă în curs avem de fapt chiar acum, în toată echipa, și știa cineva
   numărul înainte de a număra?** WIP mare este adesea invizibil până este măsurat
   explicit, pentru că fiecare individ vede doar felia lui. Numără tot ce este în curs
   în prezent, inclusiv munca la care nu lucrează nimeni activ azi.

3. **Dacă am adopta o limită de WIP, ce ar trebui să se schimbe în felul în care
   răspundem la o cerere urgentă nouă?** Întrebarea scoate la iveală obiceiul
   organizațional real, pornirea reflexă a muncii noi, pe care o limită de WIP este
   proiectată să-l întrerupă, și merită discutată înainte, nu după, de a încerca să
   impui o limită.

4. **Când munca stă inactivă în fluxul nostru, care este motivul specific și este
   același motiv de fiecare dată?** O senzație generică că „lucrurile așteaptă” este
   mai puțin utilă decât o cauză specifică și recurentă: un revizor indisponibil, un
   mediu comun rezervat, o dependență între echipe. Numește tiparul real din exemple
   recente reale.

5. **Am adoptat vreodată o limită de WIP și apoi am văzut-o erodându-se discret prin
   excepții?** Este extrem de frecvent și merită discutat onest: ce presiune a cauzat
   prima excepție și au devenit excepțiile noua normalitate fără ca cineva să decidă
   explicit asta.

6. **Ar trebui o limită de WIP în contextul nostru să fie aplicată la nivel individual,
   de echipă sau de resursă comună (precum o coadă de revizuire sau un mediu de
   testare)?** Blocaje diferite cer limite la niveluri diferite, iar aplicarea unei
   limite la nivelul greșit, cote individuale în loc de un plafon pe coada comună,
   poate folosi greșit întreaga tehnică.

## Perspectiva sectorială

**Startup.** Cu puțini oameni, WIP este adesea natural mic pur și simplu pentru că nu
sunt destui ingineri ca să pornească multă muncă simultan. Riscul este opusul: un
fondator sau un inginer șef care jonglează personal cu mult mai multe inițiative
concurente decât își dă seama, ceea ce merită măsurat chiar și fără unelte kanban
formale.

**Afacere mică.** O tablă vizibilă simplă, fizică sau o unealtă digitală de bază, cu o
limită explicită pe coloană este suficientă ca să obții cea mai mare parte din
beneficiu fără a investi în unelte sofisticate de metrici de flux. Începe cu o limită
generoasă și strânge-o treptat pe măsură ce echipa se obișnuiește cu disciplina.

**Companie mare.** WIP mare este aici deosebit de frecvent și deosebit de costisitor,
pentru că multe inițiative strategice concurente se luptă pentru aceeași capacitate
comună de inginerie, iar pornirea uneia noi pare mereu progres pentru cine a
sponsorizat-o. Fă WIP vizibil la nivel de portofoliu, nu doar de echipă, astfel încât
conducerea să vadă costul pornirii încă unei inițiative înainte de a termina pe cele
curente.

**Administrație publică.** Programele pe mai mulți ani acumulează adesea un WIP
implicit enorm peste multe fluxuri de lucru, fiecare justificat în parte, fără
vizibilitate la nivelul întregii organizații asupra totalului. Introducerea vizibilității
WIP la nivel de portofoliu, chiar și informal, este adesea cel mai convingător
argument pentru secvențierea muncii în loc de a conduce totul în paralel, pentru că
costul în eficiența fluxului al unui WIP mare se compune vizibil odată ce este măsurat.

## Exemple

**Companie mare.** Echipa de platformă a unei companii de servicii financiare jongla
cu optsprezece inițiative concurente cu doar doisprezece ingineri, un raport WIP-
capacitate pe care nimeni nu-l calculase de fapt până când un nou director de
inginerie l-a cerut direct. Eficiența fluxului pe munca echipei s-a măsurat sub 12%.
Echipa a adoptat o limită explicită de WIP de o inițiativă activă la doi ingineri,
punând deliberat în pauză mai multe inițiative cu prioritate mai mică în loc să
continue să împrăștie capacitatea. Debitul, măsurat ca inițiative cu adevărat
finalizate pe trimestru, s-a mai mult decât dublat în două trimestre, deși echipa
„făcea mai puțin” vizibil la un moment dat.

**Administrație publică.** Programul de transformare digitală al unei agenții
naționale de infrastructură acumulase peste patruzeci de fluxuri de lucru concurente
în portofoliul său, fiecare cu propriul sponsor și propria justificare, fără o vedere
unică asupra muncii totale în curs. O revizuire a eficienței fluxului la nivel de
program a constatat că fluxul de lucru median petrecea sub 15% din timpul său scurs în
dezvoltare activă, restul așteptând resurse comune: o mică echipă centrală de
revizuire a arhitecturii, un mediu comun de testare și aprobări între agenții.
Programul a introdus limite explicite de WIP la nivel de portofoliu, secvențiind
fluxurile de lucru în loc să le conducă pe toate patruzeci în paralel, iar propria
urmărire a agenției a arătat o finalizare măsurabil mai rapidă pentru fluxurile de
lucru rămase active, chiar dacă numărul total aflat în desfășurare simultană a scăzut
brusc.

## Argumentul de business: motivații, ROI și TCO

Randamentul gestionării deliberate a eficienței fluxului și a WIP este contraintuitiv,
dar bine documentat: debitul tinde să crească, nu să scadă, când o organizație face mai
puțin simultan, pentru că mai puține schimbări de context și cozi mai scurte
înseamnă că fiecare bucată de muncă se termină mai repede. Exemplul serviciilor
financiare de mai sus, debit dublat prin reducerea deliberată a muncii concurente,
este un tipar comun odată ce organizațiile chiar măsoară eficiența fluxului și
acționează pe baza ei, în loc să presupună că mai multă muncă paralelă înseamnă
mereu mai mult progres.

Costul total al adoptării acestei discipline este mai ales organizațional, nu tehnic:
o tablă vizibilă, o limită de WIP convenită și disciplina de a spune nu pornirii de
muncă nouă când limita este atinsă. Disciplina aceasta este mai greu de susținut decât
de adoptat, motiv pentru care recomandarea de mai sus „urmărește dacă WIP urcă la loc”
contează tot atât cât adoptarea inițială.

## Anti-modele și capcane

- **A presupune că efortul activ domină timpul de livrare fără a măsura eficiența
  fluxului:** de obicei greșit, și direcționează efortul de îmbunătățire spre pârghia
  greșită.
- **Aplicarea unei limite de WIP ca cotă individuală, nu ca constrângere de sistem:**
  folosește greșit tehnica și riscă manipulare individuală.
- **Pornirea reflexă de muncă nouă pentru că pare progres:** obiceiul de bază pe care
  eficiența fluxului și limitele de WIP sunt proiectate să-l întrerupă.
- **A lăsa excepțiile de la limita de WIP să devină rutină și invizibile:** erodează
  disciplina înapoi la starea inițială fără ca cineva să decidă asta intenționat.
- **Măsurarea WIP doar la nivel de echipă, ratând supraîncărcarea la nivel de
  portofoliu:** frecventă în organizațiile mari care conduc multe inițiative
  strategice concurente.
- **Tratarea unui număr scăzut al eficienței fluxului ca semn de echipă proastă:**
  este tipic pentru cele mai multe fluxuri de livrare și este un punct de pornire
  pentru investigare, nu un verdict.

## Model de maturitate

- **Nivelul 1, Inițiere:** Munca în curs nu este urmărită; echipele pornesc reflex
  muncă nouă, fără vizibilitate asupra încărcării totale simultane.
- **Nivelul 2, Dezvoltare:** Unele echipe folosesc o tablă informală, dar limitele de
  WIP nu sunt impuse consecvent, iar eficiența fluxului nu este niciodată calculată.
- **Nivelul 3, Standardizare:** Echipele au limite explicite și vizibile de WIP la nivel
  de sistem, iar eficiența fluxului este măsurată periodic din date reale de timp de
  ciclu.
- **Nivelul 4, Gestionare:** Excepțiile de la limita de WIP sunt urmărite ca decizii
  deliberate și vizibile; eficiența fluxului este monitorizată pentru eroziune în timp
  și investigată când scade.
- **Nivelul 5, Orchestrare:** WIP este vizibil și gestionat la nivel de portofoliu, nu
  doar de echipă, iar organizația poate indica îmbunătățiri concrete de debit rezultate
  din reducerea deliberată a muncii concurente.

## Idei de discuție

1. Care este eficiența noastră reală a fluxului, calculată onest din date reale?
2. Câtă muncă în curs avem acum pe care nimeni n-o numărase înainte de această discuție?
3. Cărui lucru ar trebui să-i spunem nu ca să impunem o limită reală de WIP?
4. Care este cel mai frecvent motiv pentru care munca stă inactivă în fluxul nostru?
5. Unde în organizația noastră este WIP la nivel de portofoliu invizibil și probabil prea mare?

## Concluzii principale

- **Eficiența fluxului**, raportul dintre timpul activ și timpul total, este de obicei
  sub 25% în fluxurile reale de livrare; timpul de așteptare, nu efortul, domină.
- **Limitarea muncii în curs tinde să crească debitul**, nu să-l scadă, reducând
  schimbările de context și scurtând cozile.
- Aplică o **limită de WIP ca pe o constrângere de sistem**, niciodată ca pe o cotă
  individuală.
- Investighează **motivul specific** pentru care munca stă inactivă, în loc să emiți o
  directivă generică „reduceți timpul de așteptare”.
- Urmărește limitele de WIP care se **erodează prin excepții de rutină**; tratează
  fiecare excepție ca pe o decizie deliberată și vizibilă.
- Subiectul 2.4 numește această mărime **încărcarea fluxului**, iar subiectul 2.7
  formalizează relația ca legea lui Little: munca în curs este egală cu rata de
  sosire înmulțită cu timpul de ciclu, pentru orice coadă stabilă.

## Referințe și lecturi suplimentare

- *The Principles of Product Development Flow*, de Donald G. Reinertsen (teoria
  cozilor, dimensiunea loturilor și limitele de WIP în dezvoltarea de produse).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, de David J.
  Anderson (textul fundamental despre limitele de WIP și fluxul pentru echipele de
  software).
- *Actionable Agile Metrics for Predictability*, de Daniel S. Vacanti (măsurarea
  eficienței fluxului și prognoza bazată pe flux).
- *The Goal*, de Eliyahu M. Goldratt (teoria constrângerilor și relația contraintuitivă
  dintre ocuparea locală și debitul sistemului).
