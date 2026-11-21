# Introducere

Această carte este un ghid de lucru pentru a măsura bine [ingineria software](https://en.wikipedia.org/wiki/Software_engineering), pentru echipe de la un startup de cinci oameni până la o companie cu mii de ingineri sau o agenție guvernamentală care raportează în raport cu un cadru statutar de performanță. Există pentru că cea mai mare parte a sfaturilor despre metrici este fie un rezumat de cadru fără detalii operaționale, fie lista de funcții a unui furnizor de instrumente. Cartea aceasta încearcă să nu fie niciuna: are păreri clare despre ce merită măsurat, spune explicit cum este manipulată fiecare metrică și e practică în privința felului de a conduce un program de metrici în care echipa are încredere, în loc să se teamă de el.

## Pentru cine este

Publicul principal sunt oamenii care aleg ce măsoară o organizație: lideri de inginerie, ingineri staff și principali, echipe de platformă și DevOps, manageri de program și de produs. Publicul secundar este orice inginer care vrea să înțeleagă raționamentul din spatele unui tablou de bord pe care i se cere să-l miște și cum poate contesta o metrică ce nu-și mai servește scopul. Nu trebuie să citești cartea de la un capăt la altul. Fiecare subiect se susține singur, își enunță întâi principiile și se încheie cu concluzii practice, un model de maturitate și referințe.

## Cum este organizată cartea

Cartea este împărțită în **părți** (numere întregi) și **subiecte** (numere zecimale). Subiectul **N.0** introduce fiecare parte și explică legăturile dintre subiectele ei; subiectele **N.1, N.2, …** tratează subiectele în profunzime.

- **Partea 1, Bazele măsurării:** de ce măsurăm, legea lui Goodhart și psihologia manipulării, alegerea rezultatelor în locul producției, guvernanța și responsabilitatea, sursele de date și cultura statistică de care are nevoie orice program de metrici.
- **Partea 2, Metrici de flux:** Flow Framework, elementele lui de flux și cele cinci metrici de flux, timpul de ciclu, teoria cozilor, metricile clasice Lean ale fluxului de valoare, metricile pentru pull request și revizuirea codului și cadrul DORA ca subiect de referință.
- **Partea 3, Experiența dezvoltatorilor și cadrul SPACE:** cadrul SPACE și cele cinci dimensiuni ale sale, precum și cum conduci un sondaj despre experiența dezvoltatorilor fără ca el să devină un concurs de popularitate.
- **Partea 4, Metrici de cod și calitate:** complexitatea, acoperirea și eficacitatea testelor, volatilitatea și punctele fierbinți, analiza statică, datoria tehnică și documentația.
- **Partea 5, Metrici de produs și de business:** defecte scăpate, adoptarea funcționalităților, rezultate pentru clienți și business, economia unitară și rentabilitatea investiției.
- **Partea 6, Metrici de fiabilitate, operațiuni și securitate:** SLI, SLO și bugete de erori, metrici de incidente, gărzi și capacitate, metrici de securitate și vulnerabilități.
- **Partea 7, Metrici în era IA:** schimbarea de paradigmă a IA generative, cum măsori dezvoltarea asistată de IA, riscul inflației metricilor și de ce telemetria rezultatelor devine steaua polară pe măsură ce producția devine ieftină.
- **Partea 8, Construirea unui program de metrici:** proiectarea unui tablou de bord, construim sau cumpărăm, introducerea metricilor fără a stârni frică, un model de maturitate și o foaie de parcurs pentru adoptare incrementală.
- **Partea 9, Anexe:** glosar, o referință de definiții de metrici și formule, liste de verificare, șabloane, autoevaluarea maturității, referințe și index.

## Principii călăuzitoare

Opt principii formează coloana vertebrală a cărții:

1. **O măsură care devine țintă încetează să mai fie o măsură bună.** Proiectează împotriva legii lui Goodhart de la început, nu după ce apare distorsiunea.
2. **Rezultate peste producție peste activitate.** Înclină fiecare set de metrici spre ceea ce s-a schimbat pentru client sau pentru business, nu spre ceea ce a produs echipa sau cât de ocupată a fost.
3. **Orice metrică stimulată are nevoie de o gardă de protecție.** Asociază viteza cu calitatea, debitul cu stabilitatea și nu urmări niciodată un singur număr izolat.
4. **Măsoară sisteme, nu oameni.** O metrică ce individualizează vina strică încrederea și invită la manipulare; o metrică ce scoate la iveală o constrângere a sistemului invită la îmbunătățire.
5. **Preferă instrumentarea în locul autoraportării acolo unde o poți obține, și autoraportarea acolo unde nu.** Numărul de implementări vine din pipeline; satisfacția vine din a întreba.
6. **O metrică își merită locul sau este retrasă.** Fiecare tilă dintr-un tablou de bord costă atenție. Curăță cu intenție.
7. **Definițiile contează mai mult decât tablourile de bord.** Două echipe care calculează diferit „timpul de livrare” vor petrece mai mult timp certându-se pe număr decât acționând.
8. **IA generativă este un motiv de a reexamina, nu doar de a reface valorile de referință.** Când producția devine ieftină, metricile construite în jurul volumului produs au nevoie de gărzi noi, nu doar de ținte noi.

## Teme transversale

[Legea lui Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) este tema care străbate fiecare parte a cărții, nu doar subiectul 1.2. Fiecare subiect despre o familie de metrici spune cum este manipulată metrica pe care o tratează și ce gardă de protecție prinde manipularea. Obligațiile de raportare din administrația publică și din companiile mari, unde o metrică poate avea greutate statutară sau contractuală, sunt tratate pretutindeni ca date de intrare ale proiectării, nu ca un gând de după, limitat la un singur subiect.

## Cum o folosești

Adoptă treptat; nu impune un tablou de bord dintr-o dată unei echipe care nu a avut niciodată unul. Începe acolo unde durerea e cea mai mare, folosește modelul de maturitate al fiecărui subiect ca să te poziționezi sincer și lasă foaia de parcurs pentru adoptare (subiectul 8.5) să ordoneze munca. Scopul nu este un perete de grafice. Este o organizație care poate spune, cu dovezi, dacă ceea ce face funcționează și care are destulă încredere în propriile cifre ca să acționeze pe baza lor.
