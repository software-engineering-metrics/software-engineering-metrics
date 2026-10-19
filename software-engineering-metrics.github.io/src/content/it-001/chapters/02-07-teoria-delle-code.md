# 2.7 Teoria delle code

## Panoramica e motivazione

La **[teoria delle code](https://en.wikipedia.org/wiki/Queueing_theory)** è lo
studio matematico delle file d'attesa. Sembra un accostamento strano per un libro
sulle metriche dell'ingegneria del software finché non si nota quanto di una
pipeline di consegna sia in effetti una coda: una pull request che aspetta un
revisore, un commit che aspetta un runner di CI, un ticket che aspetta di essere
preso in carico, un messaggio al supporto clienti che aspetta una risposta.
L'argomento 2.4 ha già introdotto Flow Load e Flow Time e ha mostrato che
sovraccaricare un flusso di valore fa rallentare nettamente la consegna, e gli
argomenti 2.5 e 2.6 hanno mostrato che la maggior parte del tempo di consegna è
tempo di attesa, non tempo di lavoro. La teoria delle code è la matematica
sottostante che spiega perché tutto questo è vero, non solo uno schema osservato.

Il risultato più utile è la **[legge di Little](https://en.wikipedia.org/wiki/Little%27s_law)**,
un teorema dimostrato dal ricercatore operativo John Little nel 1961: il numero
medio di elementi in un sistema stabile è uguale al tasso medio con cui gli
elementi arrivano, moltiplicato per il tempo medio che ciascun elemento trascorre
nel sistema. L'argomento 2.4 ha già usato questo risultato con i nomi propri del
Flow Framework, il Flow Load è uguale al tasso di arrivo per il Flow Time. Nel
vocabolario più ampio di questo libro si legge anche come lavoro in corso
(argomento 2.5) uguale al tasso di arrivo del nuovo lavoro moltiplicato per il
cycle time (argomento 2.6). Non è una regola empirica né una correlazione osservata
in qualche studio. È una dimostrazione che vale per qualsiasi coda stabile, a
prescindere da ciò che la coda sta elaborando o da come decide che cosa lavorare
dopo.

Per un team grande, quella generalità è il punto. La legge di Little ti dà un
controllo di coerenza che funziona in modo identico sia che la coda sia una
lavagna kanban, un message broker o una pipeline di CI condivisa. Se il lavoro in
corso, il tasso di arrivo e il cycle time misurati non soddisfano all'incirca
l'equazione, uno dei tre numeri è sbagliato, di solito per una definizione
incoerente di che cosa conti come «in corso» o «arrivato». Le organizzazioni
enterprise e governative gestiscono decine di tali code contemporaneamente, pool
condivisi di revisione del codice, ambienti di test condivisi, comitati di
approvazione condivisi, e la legge di Little è lo strumento disponibile più
economico per intercettare una cattiva definizione di metrica prima che guidi una
cattiva decisione sul personale o sul processo.

## Principi chiave

- **La legge di Little è una dimostrazione, non un'euristica.** Il lavoro in corso
  è uguale al tasso di arrivo per il cycle time, per qualsiasi coda stabile, ed è
  un controllo rapido sul fatto che le vostre metriche di consegna siano
  internamente coerenti.
- **L'utilizzo non scala in modo lineare con il tempo di attesa.** Quando una
  risorsa condivisa si avvicina al pieno utilizzo, il ritardo di accodamento
  cresce bruscamente, non gradualmente. Una risorsa occupata al 95% aspetta spesso
  molte volte più a lungo di una occupata all'80%, non solo «un po' peggio».
- **La media di una coda nasconde il suo caso peggiore.** Riportare solo il tempo
  di attesa medio nasconde la lunga e penosa coda vicino alla capacità, proprio ciò
  da cui l'argomento 1.6 mette in guardia quando si tratta di usare percentili
  anziché medie.
- **Il modo in cui una coda è definita può essere manipolato quanto qualsiasi
  altra metrica.** Se qualcosa conti come «arrivato», «in corso» o «servito» è una
  scelta, e può essere regolata per lusingare una dashboard senza cambiare ciò che
  accade davvero al lavoro.
- **Una pipeline è di solito una coda di code.** Una pipeline di consegna concatena
  più fasi, e la fase più lenta fissa il ritmo dell'intera catena a prescindere da
  quanto veloci siano le altre.

## Raccomandazioni

### Usa la legge di Little per controllare i tuoi stessi numeri prima di fidartene

Prendi il lavoro in corso medio misurato dal tuo team, il suo tasso medio di arrivo
di nuovi item a settimana e il suo cycle time medio, e verifica se il lavoro in
corso è all'incirca uguale al tasso di arrivo moltiplicato per il cycle time.
Quando non lo è, non presumere che la teoria sia sbagliata. Cerca la causa
effettiva: un confine di fase contato in modo incoerente, lavoro che sta
«bloccato» ma è ancora contato come in corso, o un tasso di arrivo misurato su una
finestra diversa dal cycle time. Questo singolo controllo intercetta più
strumentazione errata di quanta la maggior parte dei team ne trovi in altro modo.

### Traccia direttamente l'utilizzo di ogni risorsa condivisa a capacità limitata

Individua le risorse che la tua pipeline di consegna condivide tra molti team, un
pool di revisione del codice, un cluster di CI, un ambiente di staging, e misura
quanto è occupata ciascuna come proporzione della sua capacità disponibile, prima
di pianificare di farla funzionare vicino al limite. Un gruppo condiviso di
revisori che funziona vicino alla piena capacità produce tempi di attesa nella
coda di revisione che crescono molto più in fretta del modesto aumento di domanda
che li ha causati, esattamente la dinamica dietro il consiglio dell'argomento 2.9
di osservare il tempo alla prima revisione come indicatore anticipatore.

### Separa tasso di arrivo, tasso di successo, tasso di fallimento e tasso di salto

Resisti alla tentazione di comprimere tutto ciò che esce da una coda in un unico
numero di «throughput» o «tasso di servizio». Traccia separatamente quattro cose:
quanto in fretta arriva il lavoro, quanto di esso finisce con successo, quanto
fallisce e richiede rifacimento e quanto viene abbandonato o scartato in silenzio
prima che qualcuno lo finisca. Una pipeline che sembra veloce perché il suo tasso
di salto è salito in silenzio non sta davvero consegnando di più, e solo tracciare
questi quattro tassi separatamente te lo mostrerà.

### Modella le pipeline a più fasi come una coda di code

Tratta una pipeline di consegna, o qualsiasi processo a più fasi, un ciclo di vita
di un incidente, una pipeline di assunzione, come una catena di code anziché come
un unico blocco indifferenziato di «tempo». Il tasso di arrivo complessivo è
fissato dalla prima fase, il tasso di completamento complessivo dall'ultima, e i
conteggi totali di errori e salti della pipeline sono la somma di quelli di ogni
fase. Questa impostazione ti dice subito in quale fase vale la pena investire:
quella con la peggiore combinazione di alto utilizzo e alto tasso di fallimento o
di salto, non quella che capita di essere la più facile da strumentare.

### Fissa personale e limiti di WIP tenendo conto dell'utilizzo, non solo del throughput

Quando decidi di quanti revisori o runner di CI abbia bisogno un team, non
dimensionare la capacità per eguagliare esattamente il tasso medio di arrivo. Una
coda che funziona al 100% di utilizzo in media ha di fatto un tempo di attesa
infinito nella pratica, perché gli arrivi reali sono irregolari, non perfettamente
uniformi. Pianifica deliberatamente un margine, e tratta «i nostri revisori sono
quasi sempre occupati» come un segnale d'allarme su tempi di attesa a venire, non
come prova di un impiego efficiente delle risorse.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessun modello formale di code, dimensionamento a sentimento | Rapido da avviare; nessun nuovo vocabolario per il team | Sottostima in modo costante quanto il tempo di attesa esploda vicino alla piena capacità |
| Legge di Little come controllo di coerenza sulle metriche esistenti | Economica, non richiede nuovi strumenti, intercetta rapidamente le cattive definizioni | Verifica solo la coerenza, non diagnostica da sola la causa |
| Simulazione completa delle code (distribuzioni di arrivo, più server) | Previsione più accurata del comportamento del tempo di attesa sotto carico | Richiede una vera competenza statistica e una manutenzione che la maggior parte dei team non sosterrà |
| Tracciamento dell'utilizzo sulle risorse condivise senza modelli più profondi | Semplice, azionabile, intercetta la singola maggiore causa di tempi di attesa fuori controllo | Non dice nulla sul perché l'utilizzo sia alto né su cosa fare per la causa sottostante |

La tensione centrale è **rigore contro adozione**. Una simulazione completa delle
code dà la risposta più accurata, ma quasi nessun team di ingegneria ne costruirà
e manterrà una, e un modello di cui nessuno si fida o che nessuno aggiorna è
peggio di nessun modello. La legge di Little e il tracciamento di base
dell'utilizzo rinunciano a un po' di precisione ma non richiedono competenze
statistiche specializzate e si inseriscono direttamente nelle metriche che un team
già raccoglie per gli argomenti dal 2.4 al 2.6. Scegli per impostazione
predefinita quei controlli economici e adottabili, e riserva la simulazione
completa al raro caso in cui una singola risorsa condivisa, una grande flotta di
CI, un pool specializzato di revisione, sia abbastanza costosa da giustificare
l'investimento.

## Domande da discutere con il vostro team

1. **Il nostro lavoro in corso, il tasso di arrivo e il cycle time misurati
   soddisfano davvero la legge di Little, e se no, perché?** È la diagnostica più
   rapida disponibile per una cattiva definizione di metrica. Ripercorrete insieme
   i numeri effettivi, e se l'equazione non regge all'incirca, ricondurre la
   discrepanza a una specifica incoerenza di definizione anziché liquidare il
   controllo.

2. **Quali risorse condivise nella nostra pipeline di consegna funzionano vicino
   al pieno utilizzo, e conosciamo davvero il loro numero di utilizzo?** La maggior
   parte dei team sa nominare una risorsa che «sembra sempre occupata» ma non ne
   ha mai misurato direttamente l'utilizzo. Individuate le due o tre risorse
   condivise più vincolate e ottenete un numero reale per ciascuna.

3. **Stiamo fondendo successo, fallimento e salto in un unico numero di
   throughput, e che cosa vedremmo se li separassimo?** Un singolo conteggio di
   «item completati» può salire anche mentre la qualità cala o il lavoro viene
   abbandonato in silenzio. Ricalcolate il throughput di un periodo recente come
   tre numeri separati e discutete che cosa la suddivisione rivela che il numero
   fuso nascondeva.

4. **Dove nella nostra pipeline sta il vero collo di bottiglia, la fase più lenta
   che fissa il ritmo di tutto ciò che sta a valle?** I team investono spesso per
   velocizzare la fase più facile da migliorare anziché quella che vincola
   davvero il throughput totale. Individuate la fase con la peggiore combinazione
   di alto utilizzo e alto tasso di fallimento o di salto.

5. **Se aggiungessimo capacità alla nostra risorsa condivisa più vincolata, il
   tempo di attesa migliorerebbe davvero, o la domanda si espanderebbe
   semplicemente per riempirla?** Questa domanda separa un vero deficit di
   capacità da un problema di domanda, e la risposta cambia se la correzione
   giusta sia più personale, un limite di WIP o un cambiamento nel modo in cui il
   lavoro viene prioritizzato prima di entrare nella coda.

6. **Abbiamo mai ridefinito che cosa conti come «in corso» o «arrivato» in un
   modo che ha fatto apparire meglio una dashboard senza cambiare ciò che accadeva
   davvero al lavoro?** Vale la pena chiederselo con onestà e in modo specifico,
   con esempi reali dell'ultimo anno, anziché trattarlo come una preoccupazione
   ipotetica.

## Prospettiva settoriale

**Startup.** Con una manciata di ingegneri, la maggior parte delle code è
abbastanza breve da rendere eccessiva un'analisi formale delle code. L'abitudine
utile è più piccola: accorgersi di quando una persona, spesso l'ingegnere più
anziano, è diventata di fatto una risorsa condivisa da cui tutto il resto dipende,
e trattarlo come un problema di utilizzo che merita di essere nominato anche senza
alcun modello formale alle spalle.

**Piccola impresa.** Un team di una piccola impresa ha raramente bisogno di
qualcosa di più sofisticato del tracciamento dell'utilizzo delle sue una o due
risorse davvero condivise, spesso un singolo revisore o una singola pipeline di
rilascio, e dell'osservare il punto in cui «di solito disponibile» diventa in
silenzio «di solito il collo di bottiglia». Un foglio di calcolo basta; a questa
scala non servono strumenti dedicati.

**Enterprise.** Le risorse condivise si moltiplicano in fretta alla scala
enterprise: un team di piattaforma centrale, un comitato condiviso di revisione
della sicurezza, una flotta di CI condivisa al servizio di decine di team di
prodotto. Sono esattamente le risorse in cui il tracciamento dell'utilizzo si
guadagna il pane, perché una singola risorsa condivisa sovraccarica può degradare
in silenzio il tempo di consegna di ogni team che ne dipende, e le metriche di
nessun singolo team riveleranno una causa che vive fuori dalla propria pipeline.

**Settore pubblico.** I programmi di consegna multi-agenzia e multi-fornitore
instradano spesso il lavoro attraverso comitati di approvazione condivisi,
processi di accreditamento di sicurezza condivisi e ambienti di test condivisi che
nessun team controlla né può ridimensionare da solo. L'analisi delle code di questi
varchi condivisi, tasso di arrivo, capacità, utilizzo, è spesso la prova più chiara
disponibile per un business case volto ad aggiungere capacità o a cambiare il modo
in cui il lavoro viene raggruppato prima di arrivare al varco.

## Esempi

**Enterprise.** Il team di piattaforma interna di un fornitore di infrastrutture
cloud notò che il lead time dei cambiamenti (argomento 2.10) era salito in modo
costante in ogni team di prodotto che dipendeva dalla sua flotta di CI condivisa,
anche se nessun singolo team aveva cambiato il proprio modo di lavorare. Un'analisi
dell'utilizzo scoprì che la flotta funzionava occupata oltre il 90% durante le ore
centrali, ben oltre il punto in cui la teoria delle code prevede che il tempo di
attesa cresca bruscamente anziché gradualmente. Il team di piattaforma aggiunse
capacità di CI e introdusse una politica di pianificazione equa (fair-share) perché
nessun singolo picco di attività di un team potesse monopolizzare la coda. Il
tempo di attesa mediano della CI scese di oltre la metà in un mese, prova che il
collo di bottiglia era sempre stato una coda condivisa e invisibile.

**Settore pubblico.** Il team del servizio digitale di un'agenzia nazionale per i
permessi monitorò per due anni l'elaborazione delle domande come un unico numero di
throughput di «pratiche chiuse a settimana», e il numero sembrava stabile. Un'analisi
più attenta, che suddivideva quel numero in pratiche approvate, respinte e
abbandonate dai richiedenti dopo lunghi ritardi, scoprì che il tasso di abbandono
era quasi triplicato nello stesso periodo mentre le approvazioni restavano piatte.
La legge di Little, applicata alla coda degli addetti alle pratiche, mostrò che il
lavoro in corso era cresciuto ben oltre ciò che il tempo medio di elaborazione
dichiarato dal team implicava, il che significava che le pratiche si accumulavano
in silenzio in uno stato non contato come «in attesa». L'agenzia ristrutturò le
definizioni di tracciamento delle pratiche per contare onestamente ogni pratica
aperta e aggiunse capacità di addetti dimensionata per mantenere l'utilizzo sotto
l'85%, ora tracciato come obiettivo operativo permanente accanto al numero di
throughput.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'applicare un'analisi di base delle code è che trasforma «la
pipeline sembra lenta» in una decisione specifica e difendibile, aggiungere margine
a questa risorsa condivisa, scomporre questa metrica fusa nei suoi componenti
reali, anziché in una vaga spinta a «lavorare più in fretta» che manca la causa
effettiva. L'esempio del fornitore di infrastrutture cloud qui sopra, tempo di
attesa dimezzato grazie a una correzione di capacità e pianificazione anziché a un
qualsiasi cambiamento del comportamento dei singoli team, è lo schema che questa
analisi produce in modo affidabile: la correzione è quasi sempre più economica del
chiedere a ogni team a valle di muoversi più in fretta attorno a un collo di
bottiglia che non vede.

Il costo totale di adozione è davvero basso. La legge di Little e il tracciamento
dell'utilizzo non richiedono nuovi strumenti oltre a ciò che gli argomenti dal 2.4
al 2.6 già chiedono di raccogliere: tasso di arrivo, lavoro in corso e cycle time.
L'investimento è per lo più disciplina analitica, controllare i numeri l'uno
rispetto all'altro e rivedere periodicamente l'utilizzo sulle risorse condivise
prima che diventino la prossima regressione inspiegata del lead time
dell'organizzazione.

## Antipattern e insidie

- **Dimensionare la capacità di una risorsa condivisa per eguagliare esattamente il
  suo tasso medio di arrivo:** garantisce un alto utilizzo e tempi di attesa fuori
  controllo ogni volta che la domanda è anche solo brevemente irregolare.
- **Riportare solo il tempo di attesa medio, mai un percentile:** nasconde la
  lunga coda che conta di più per le persone che vi aspettano dentro.
- **Fondere successo, fallimento e salto in un unico numero di throughput:** il
  vettore di manipolazione al centro di questo argomento. Un team sotto pressione
  può far apparire sano il throughput lasciando salire in silenzio il tasso di
  salto, ticket abbandonati, richieste scartate in silenzio, lavoro che non viene
  mai contato come fallimento. Il guardrail è tracciare tasso di arrivo, successo,
  fallimento e salto come quattro numeri separati e visibili, la stessa disciplina
  che l'argomento 1.2 richiede per ogni metrica di questo libro, così che un tasso
  di salto in crescita non possa nascondersi dietro un grafico piatto del
  throughput.
- **Trattare «le nostre persone sono sempre occupate» come un complimento:** è il
  sintomo di un alto utilizzo, la causa principale di tempi di attesa lunghi e
  imprevedibili.
- **Ridefinire «in corso» per ridurre in silenzio il lavoro in corso:** sposta il
  lavoro in uno stato non contato, «bloccato», «in sospeso», senza cambiare quanto
  ci vuole per finirlo, e rompe il controllo della legge di Little che l'avrebbe
  altrimenti intercettato.
- **Presumere che un modello di code non richieda manutenzione una volta costruito:**
  gli schemi di arrivo e la capacità cambiano di continuo, e un modello obsoleto
  produce previsioni sbagliate con sicurezza.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Nessuna coda è misurata esplicitamente; il tempo
  di attesa è discusso in modo aneddotico come «le cose sembrano lente».
- **Livello 2, Sviluppo (Develop):** Tasso di arrivo, lavoro in corso e cycle time
  sono tracciati per almeno una pipeline, ma mai confrontati con la legge di
  Little né con l'utilizzo delle risorse condivise.
- **Livello 3, Standardizzazione (Standardize):** La legge di Little è un controllo
  di coerenza di routine nelle pipeline di consegna, e l'utilizzo è tracciato
  esplicitamente per le risorse condivise più significative.
- **Livello 4, Gestione (Manage):** Tasso di successo, fallimento e salto sono
  tracciati separatamente per ogni coda significativa, e le decisioni sulla
  capacità usano obiettivi di utilizzo, non solo la domanda media.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione modella le proprie
  pipeline principali come code di code, individua sistematicamente i veri colli
  di bottiglia e sa indicare cambiamenti specifici di capacità o di processo fatti
  grazie all'analisi delle code, con un miglioramento misurato del tempo di attesa
  da mostrare.

## Spunti di discussione

1. Scegliete una delle nostre pipeline di consegna e verificate se oggi i suoi numeri soddisfano la legge di Little.
2. Nominate la singola risorsa condivisa della nostra organizzazione che la maggior parte delle persone concorderebbe essere «sempre occupata», e trovate il suo numero di utilizzo effettivo.
3. Che aspetto avrebbe il nostro grafico del throughput se lo suddividessimo in tassi di successo, fallimento e salto per l'ultimo trimestre?
4. Se dovessimo aggiungere capacità a esattamente una risorsa condivisa quest'anno, quale, e quali prove lo giustificherebbero?

## Punti chiave

- La **legge di Little**, il lavoro in corso è uguale al tasso di arrivo per il
  cycle time, è una dimostrazione, non un'euristica, ed è il controllo disponibile
  più economico sul fatto che le vostre metriche di consegna siano internamente
  coerenti.
- **Il tempo di attesa cresce bruscamente, non gradualmente, man mano che
  l'utilizzo si avvicina alla piena capacità.** Tratta «sempre occupati» come un
  segnale d'allarme, non come un complimento.
- Traccia **tasso di arrivo, di successo, di fallimento e di salto**
  separatamente; fonderli in un unico numero di throughput è il vettore di
  manipolazione centrale di questo argomento.
- Modella una pipeline a più fasi come una **coda di code**, e investi nella fase
  con la peggiore combinazione di alto utilizzo e alto tasso di fallimento o di
  salto, non nella fase più facile da migliorare.
- Preferisci controlli economici e adottabili, **legge di Little e tracciamento
  dell'utilizzo**, a una simulazione completa delle code che pochi team
  sosterranno.

## Riferimenti e letture di approfondimento

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience,
  1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve
  Performance Problems on the Computer Systems You Work With*. CreateSpace
  Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second
  Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable
  Agile Press, 2015.
