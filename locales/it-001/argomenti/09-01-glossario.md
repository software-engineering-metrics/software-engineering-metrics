# 9.1 Glossario

Definizioni dei termini e degli acronimi usati nel libro. Ogni voce indica l'argomento
in cui il termine è introdotto in profondità.

**Albero delle metriche (metric tree).** Una struttura che collega una metrica di
risultato di livello superiore, attraverso i suoi driver, alle metriche operative di
cui sono responsabili i singoli team. Vedi l'argomento 1.3.

**Bus factor.** Il numero di persone che dovrebbero diventare indisponibili prima che un
sistema o un pezzo di conoscenza diventi impossibile da mantenere. Un bus factor pari a
uno è un rischio grave. Vedi l'argomento 3.5.

**Complessità ciclomatica.** Un conteggio dei percorsi indipendenti nel flusso di
controllo di un pezzo di codice, introdotto da Thomas J. McCabe nel 1976. Vedi
l'argomento 4.1.

**CVSS (Common Vulnerability Scoring System).** Una scala standardizzata per valutare
la gravità di una vulnerabilità di sicurezza. Vedi l'argomento 6.4.

**Cycle time.** La scomposizione interna del lead time in fasi: scrittura del codice,
revisione, test e rilascio. Vedi l'argomento 2.6.

**Debito tecnico.** Il costo accumulato di scorciatoie passate in una base di codice,
una metafora di un compromesso gestibile, non di un segreto vergognoso. Vedi
l'argomento 4.5.

**DevEx (developer experience, esperienza degli sviluppatori).** L'impostazione più
ampia e correlata a SPACE, organizzata attorno a cicli di feedback, carico cognitivo e
stato di flusso. Vedi l'argomento 3.7.

**Difetto sfuggito (escaped defect).** Un difetto che raggiunge la produzione e colpisce
un utente reale, distinto da uno intercettato in revisione o nei test. Vedi l'argomento
5.1.

**Economia unitaria (unit economics).** Il costo espresso per unità significativa di
valore consegnato (per cliente, per transazione), anziché come totale opaco. Vedi
l'argomento 5.4.

**Error budget.** Il margine di scostamento consentito tra un obiettivo di livello di
servizio e l'affidabilità al 100%, trattato come risorsa spendibile. Vedi l'argomento
6.1.

**FinOps.** La disciplina di portare responsabilità finanziaria alla spesa variabile
per l'infrastruttura cloud. Vedi l'argomento 5.4.

**Flow Distribution.** La proporzione dei flow item completati appartenenti a ciascun
tipo di flow item in un dato periodo. Vedi l'argomento 2.3.

**Flow Efficiency.** Il rapporto tra tempo di lavoro attivo e tempo totale trascorso
per un pezzo di lavoro che attraversa una pipeline di consegna. Vedi l'argomento 2.5.

**Flow Framework.** Un modello gestionale, creato da Mik Kersten, che tratta la
consegna del software come un flusso di valore e la misura con quattro tipi di flow
item e cinque metriche di flusso. Vedi l'argomento 2.1.

**Flow item.** L'unità di lavoro del Flow Framework: una funzionalità, un difetto, un
rischio o una voce di debito, classificata all'ingresso. Vedi l'argomento 2.2.

**Flow Load.** Il numero totale di flow item attualmente attivi o in attesa in un
flusso di valore, il nome che il Flow Framework dà al lavoro in corso. Vedi
l'argomento 2.4.

**Flow Time.** Il tempo totale trascorso da quando un flow item entra nel flusso di
valore alla sua consegna, che copre l'intero flusso di valore e non solo l'ingegneria.
Vedi l'argomento 2.4.

**Flow Velocity.** Il numero di flow item completati in un dato periodo, la misura del
Flow Framework per il throughput. Vedi l'argomento 2.3.

**Flusso di valore (value stream).** La sequenza completa di attività che trasforma
un'idea in un valore che un cliente riceve, l'unità di misura del Flow Framework. Vedi
l'argomento 2.1.

**Frequenza di rilascio (deployment frequency).** Con quale frequenza un team rilascia
con successo in produzione. Una delle quattro metriche DORA. Vedi l'argomento 2.10.

**Grafico di controllo (control chart).** Un grafico che mostra l'intervallo normale di
variazione di una metrica nel tempo, usato per distinguere uno spostamento genuino dal
normale rumore. Vedi l'argomento 1.6.

**Guardrail.** Una contro-metrica abbinata che non deve peggiorare mentre una metrica
incentivata migliora, progettata per intercettare la manipolazione. Vedi l'argomento
1.2.

**Hotspot.** Un file o un modulo che è sia modificato di frequente (alto churn) sia
molto complesso, individuato attraverso l'analisi degli hotspot. Vedi l'argomento 4.3.

**Lavoro in corso (work in process, WIP).** Il numero di item su cui si lavora
attivamente in un dato momento in un team o in un sistema. Vedi l'argomento 2.5.

**Lead time dei cambiamenti (lead time for changes).** Il tempo dal primo commit di una
modifica al codice al suo rilascio riuscito in produzione. Una delle quattro metriche
DORA. Vedi l'argomento 2.10.

**Legge di Goodhart.** Il principio secondo cui, quando una misura diventa un obiettivo,
cessa di essere una buona misura. L'idea centrale e guida di questo libro. Vedi
l'argomento 1.2.

**Legge di Little.** La dimostrazione che il numero medio di elementi in una coda stabile
è uguale al tasso medio di arrivo moltiplicato per il tempo medio che un elemento
trascorre nel sistema. Applicata alla consegna, il lavoro in corso è uguale al tasso di
arrivo per il cycle time. Vedi l'argomento 2.7.

**Metrica di attività (activity metric).** Un conteggio del movimento dell'ingegneria
(commit, pull request, righe di codice) che misura il volume, non il valore. Vedi
l'argomento 3.4.

**Metrica di vanità (vanity metric).** Una metrica che sale in modo affidabile, appare
impressionante e non cambia alcuna decisione. Vedi l'argomento 1.1.

**Metrica stella polare (north-star metric).** La singola misura che meglio cattura il
valore centrale che un'organizzazione consegna, collocata in cima a un albero delle
metriche. Vedi l'argomento 1.3.

**Metriche DORA.** Quattro metriche del programma DevOps Research and Assessment:
frequenza di rilascio, lead time dei cambiamenti, tasso di fallimento dei cambiamenti e
tempo di ripristino dopo un rilascio fallito. Vedi l'argomento 2.10.

**MTTA (mean time to acknowledge, tempo medio di presa in carico).** Il tempo dalla
notifica di un incidente a quando qualcuno si assume la responsabilità di rispondere.
Vedi l'argomento 6.2.

**MTTD (mean time to detect, tempo medio di rilevamento).** Il tempo dall'effettivo
inizio di un incidente a quando qualcuno si accorge che è avvenuto. Vedi l'argomento
6.2.

**MTTR (mean time to recovery / mean time to resolve, tempo medio di ripristino o di
risoluzione).** Il tempo per ripristinare per intero il servizio dopo un guasto. Usato
sia per i guasti causati dai rilasci (argomento 2.10) sia per gli incidenti in generale
(argomento 6.2).

**Mutation testing.** Una tecnica che introduce deliberatamente piccoli difetti
artificiali nel codice per verificare se una suite di test li intercetti davvero, come
complemento della copertura. Vedi l'argomento 4.2.

**Percentuale completa e accurata (%C/A, percent complete and accurate).** La
percentuale di unità che un team a valle può elaborare senza bisogno di rifacimento,
dalla classica mappatura del flusso di valore Lean. Vedi l'argomento 2.8.

**Process time (PT).** Il tempo effettivo di lavoro manuale speso su una singola unità,
distinto dal tempo di attesa, dalla classica mappatura del flusso di valore Lean. Vedi
l'argomento 2.8.

**ROI (return on investment, ritorno sull'investimento).** Il ritorno finanziario di
un'iniziativa rispetto al suo costo, costruito qui da prove documentate di costo e di
risultato anziché da ipotesi. Vedi l'argomento 5.5.

**Rolled throughput yield (resa cumulativa di processo).** Le percentuali complete e
accurate di ogni fase di un flusso di valore moltiplicate tra loro, che rivelano come il
rifacimento si componga in una pipeline a più fasi. Vedi l'argomento 2.8.

**SLI (service level indicator, indicatore di livello di servizio).** Un segnale
misurato direttamente dello stato di salute di un servizio, come la latenza o il tasso
di errore. Vedi l'argomento 6.1.

**SLO (service level objective, obiettivo di livello di servizio).** L'intervallo
obiettivo per un indicatore di livello di servizio. Vedi l'argomento 6.1.

**SPACE, framework.** Un framework a cinque dimensioni per la produttività degli
sviluppatori: Satisfaction and well-being (soddisfazione e benessere), Performance
(prestazioni), Activity (attività), Communication and collaboration (comunicazione e
collaborazione) ed Efficiency and flow (efficienza e flusso). Vedi l'argomento 3.1.

**SRE (site reliability engineering, ingegneria dell'affidabilità dei siti).** La
disciplina, nata a Google, di applicare approcci di ingegneria del software alle
operazioni e all'affidabilità. Vedi l'argomento 6.1.

**Takt time.** Il tempo massimo accettabile per completare un'unità di lavoro in modo da
corrispondere correttamente alla domanda dei clienti, dalla classica mappatura del
flusso di valore Lean. Vedi l'argomento 2.8.

**Tasso di fallimento dei cambiamenti (change failure rate).** La percentuale di
rilasci che causano un guasto in produzione che richiede rimedio. Una delle quattro
metriche DORA. Vedi l'argomento 2.10.

**TCO (total cost of ownership, costo totale di proprietà).** Il costo pieno di
un'iniziativa o di un sistema nell'arco della sua vita, incluse manutenzione continua e
infrastruttura, non solo il costo iniziale. Vedi l'argomento 5.5.

**Telemetria dei risultati (outcome telemetry).** La misurazione continua e
strumentata dei risultati reali anziché dell'attività o dell'output. Vedi l'argomento
7.4.

**Teoria delle code (queueing theory).** Lo studio matematico delle file d'attesa,
applicato alle pipeline di consegna per spiegare come lavoro in corso, tasso di arrivo e
utilizzo guidino il tempo di attesa. Vedi l'argomento 2.7.

**Utilizzo (utilization).** La proporzione della capacità disponibile di una risorsa
che è occupata, calcolata come tasso di arrivo diviso per tasso di servizio. Il tempo di
attesa cresce bruscamente, non gradualmente, man mano che l'utilizzo si avvicina alla
piena capacità. Vedi l'argomento 2.7.
