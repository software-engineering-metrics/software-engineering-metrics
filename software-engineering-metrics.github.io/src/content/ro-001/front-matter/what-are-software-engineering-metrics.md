# Ce sunt metricile ingineriei software?

[Metricile ingineriei software](https://en.wikipedia.org/wiki/Software_metric) sunt măsuri cantitative folosite pentru a evalua, urmări și îmbunătăți calitatea, eficiența și impactul proceselor, produselor și echipelor de dezvoltare software. Bine făcute, ele sunt instrumente de diagnostic sistemic: scot la iveală blocajele operaționale, justifică remedierea datoriei tehnice și aliniază activitatea de inginerie la rezultate concrete de business. Prost făcute, ele distorsionează comportamentul, strică încrederea și recompensează exact lucrurile greșite.

Cartea aceasta există pentru că majoritatea echipelor ajung la metrici înainte să decidă *pentru ce* e o metrică. Un tablou de bord se umple cu tot ce e ușor de numărat, conducerea începe să întrebe „numărul ăsta a crescut sau a scăzut?”, iar în mai puțin de un trimestru echipa optimizează numărul în loc de rezultatul pe care trebuia să-l reprezinte. Eșecul acesta are un nume, [legea lui Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): când o măsură devine țintă, încetează să mai fie o măsură bună. Fiecare subiect din această carte este scris cu legea aceasta în spate.

## Cele două cadre fundamentale

Industria a convergit în mare parte spre două cadre sprijinite pe cercetare pentru a măsura livrarea în inginerie și sănătatea echipei.

**[Metricile DORA](https://dora.dev/guides/dora-metrics/)** (din programul DevOps Research and Assessment) măsoară debitul și stabilitatea sistemului: frecvența implementărilor, timpul de livrare al modificărilor, rata de eșec a modificărilor și timpul de recuperare după o implementare eșuată. Partea 2 a cărții le tratează pe toate patru într-un subiect de referință dedicat, alături de Flow Framework, pe care îl folosește pentru a organiza mai larg metricile de livrare și de flux, deoarece DORA măsoară bine mecanica pipeline-ului, dar nu spune nimic despre ce fel de valoare se mișcă prin pipeline.

**[Cadrul SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, creat de cercetători de la Microsoft, GitHub și University of Victoria, echilibrează debitul brut cu experiența dezvoltatorilor pe cinci dimensiuni: satisfacție și bunăstare, performanță, activitate, comunicare și colaborare, eficiență și flux. Partea 3 îl tratează în profunzime.

Dincolo de aceste două cadre, echipele urmăresc metrici localizate, grupate pe domenii: metrici de cod și calitate (Partea 4), metrici de produs și de business (Partea 5) și metrici de fiabilitate, operațiuni și securitate (Partea 6). Partea 7 se ocupă de o schimbare deja în curs: instrumentele de IA generativă au făcut producția brută de cod aproape gratuită, ceea ce înseamnă că mai multe metrici pe care industria s-a bazat un deceniu nu mai înseamnă ce însemnau.

## Pentru cine este

Publicul principal sunt oamenii care aleg ce măsoară o echipă și de ce: lideri de inginerie, ingineri staff și principali, echipe de platformă și DevOps, manageri de program și de produs care construiesc pentru prima dată un tablou de bord sau o fișă de scor, ori repară unul care a început să distorsioneze comportamentul. Publicul secundar este orice inginer care vrea să înțeleagă de ce organizația lui urmărește ce urmărește și cum poate riposta când o metrică este folosită greșit.

## Cum se citește

Începe de aici, apoi citește [introducerea](introduction.md) ca să vezi cum e organizată cartea, sau sari direct la [cuprins](table-of-contents.md). Fiecare subiect se susține singur: își enunță întâi principiile, dă recomandări concrete, spune cum este manipulată metrica pe care o tratează și se încheie cu un model de maturitate, întrebări de discuție și referințe. Nu trebuie să citești cartea de la un capăt la altul ca s-o folosești.
