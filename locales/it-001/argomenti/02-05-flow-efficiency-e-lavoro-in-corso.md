# 2.5 Flow Efficiency e lavoro in corso

## Panoramica e motivazione

La **Flow Efficiency** è il rapporto tra tempo attivo e tempo totale per un pezzo
di lavoro: se un cambiamento passa dieci ore a essere attivamente scritto,
rivisto e testato, ma resta fermo in code per novanta ore complessive lungo tutto
il suo percorso, la Flow Efficiency è del 10%. La maggior parte delle pipeline di
consegna del software, misurate con onestà, si colloca tra il 10% e il 25% di
Flow Efficiency, il che sorprende chi si aspetta che sia lo sforzo a dominare. Il
costo dominante nella maggior parte dei sistemi di consegna non è quanto ci vuole
per fare il lavoro, è quanto il lavoro aspetta di essere iniziato.

Il **[lavoro in corso](https://en.wikipedia.org/wiki/Work_in_process)** (WIP,
work in process) è il numero di item su cui si lavora attivamente in un dato
momento, in un team o in un sistema, la stessa quantità che l'argomento 2.4 chiama
«Flow Load». La scoperta controintuitiva alla base di questo argomento, sostenuta
da decenni di ricerca nella gestione delle operazioni e formalizzata per la
consegna del software attraverso il kanban e la teoria delle code, è che limitare
il WIP tende ad *aumentare* il throughput, non a diminuirlo, perché meno lavoro
in volo contemporaneamente significa meno cambi di contesto, code più brevi e
completamento più rapido per ogni item, anche se sembra che fare meno lavoro in
parallelo dovrebbe produrre meno output complessivo.

Per i team grandi, capire la Flow Efficiency riformula quasi ogni problema di
consegna da «le persone devono lavorare più in fretta» a «il lavoro deve
aspettare meno». Quella riformulazione conta perché la prima impostazione invita
a fare pressione sui singoli, esattamente la trappola da cui l'argomento 2.6
mette in guardia, mentre la seconda invita a indagare la struttura delle code, la
capacità di revisione e quanto lavoro venga avviato contemporaneamente, dove di
solito vive il miglioramento reale e sostenibile. Le organizzazioni enterprise che
destreggiano molte iniziative concorrenti su team condivisi sono particolarmente
inclini a un WIP alto e a una bassa Flow Efficiency, perché avviare nuovo lavoro
sembra sempre un progresso anche quando sta rallentando in silenzio tutto ciò che
è già in volo.

## Principi chiave

- **Il tempo di attesa, non lo sforzo attivo, domina la maggior parte delle
  pipeline di consegna.** Una Flow Efficiency inferiore al 25% è tipica, non il
  segno di un team rotto.
- **Limitare il lavoro in corso tende ad aumentare il throughput,** non a
  diminuirlo, riducendo i cambi di contesto e accorciando le code.
- **Avviare nuovo lavoro sembra un progresso; finire il lavoro è ciò che
  consegna davvero valore.** Non sono la stessa cosa, e le organizzazioni le
  confondono di routine.
- **Un WIP alto è spesso invisibile finché non viene misurato.** Un team può
  destreggiarsi tra molto più lavoro simultaneo di quanto ciascuno individualmente
  si renda conto.
- **È una metrica a livello di sistema, non individuale.** Applicare limiti di WIP
  per punire i singoli fraintende l'intero scopo della tecnica.

## Raccomandazioni

### Misura la Flow Efficiency prima di presumere che lo sforzo sia il collo di bottiglia

Calcola il rapporto tra tempo attivo e tempo totale trascorso per un campione
rappresentativo di cambiamenti recenti, usando i dati sulle fasi del cycle time
dell'argomento 2.6. La maggior parte dei team che lo misura per la prima volta è
sorpresa da quanto sia basso il numero, e quella sorpresa è essa stessa preziosa:
reindirizza l'attenzione da «lavorare di più» verso «ridurre l'accodamento», che è
quasi sempre la leva più produttiva.

### Fissa un limite esplicito al lavoro in corso e applicalo in modo visibile

Limita il numero di item che un team o un individuo può avere in corso
contemporaneamente, in modo visibile su una lavagna condivisa (una lavagna kanban
fisica o digitale è l'implementazione classica). Quando il limite è raggiunto, la
prossima azione del team è aiutare a finire qualcosa già in volo, non avviare
qualcosa di nuovo. Questa singola pratica, presa dalla produzione snella e
formalizzata nel kanban, è uno dei miglioramenti del flusso più costantemente
efficaci a disposizione di un team di software, e costa quasi nulla da
implementare.

### Tratta un limite di WIP come un vincolo di sistema, non come una quota individuale

Un limite di WIP regola quanto lavoro il *sistema* (un team, una coda di revisione
condivisa, un ambiente condiviso) ha in volo contemporaneamente, non quanto ogni
singola persona può toccare. Applicare il limite come quota di prestazione
individuale, «puoi avere aperti solo due ticket», applica male la tecnica e
rischia proprio quel tipo di manipolazione a livello individuale da cui questo
libro mette in guardia ovunque. Il limite esiste per proteggere il flusso
nell'intero sistema, e la sua applicazione dovrebbe essere una norma del team, non
un tetto personale.

### Indaga perché il lavoro resta fermo, non solo per quanto

Quando l'analisi della Flow Efficiency rivela lunghi tempi di attesa, chiedi
specificamente perché: il lavoro aspetta perché un revisore non è disponibile,
perché un ambiente di test condiviso è prenotato, perché una dipendenza da un
altro team non è ancora arrivata. Ognuna di queste ha una correzione diversa. Una
direttiva generica del tipo «riducete il tempo di attesa» senza questa indagine
specifica tende a produrre risposte generiche e inefficaci.

### Fai attenzione al WIP che risale dopo un miglioramento iniziale

I team che adottano con successo un limite di WIP lo vedono spesso erodersi nel
tempo man mano che torna la pressione ad avviare nuove iniziative, «solo questa
volta, dobbiamo avviare anche questa cosa urgente». Tratta ogni eccezione al
limite di WIP come una decisione deliberata e visibile con una motivazione
dichiarata, non come una deroga silenziosa e di routine, così che la disciplina
del limite non decada in silenzio fino allo stato originale.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessun limite di WIP | Sembra flessibile; nessun attrito nell'avviare nuovo lavoro | I cambi di contesto e l'accodamento rallentano tutto in silenzio |
| Limite di WIP a livello di team | Migliora in modo misurabile throughput e Flow Efficiency | Richiede disciplina per essere applicato, soprattutto sotto pressione di scadenze |
| Quota di WIP a livello individuale | Semplice da enunciare | Applica male la tecnica; rischia la manipolazione individuale |
| Limite di WIP rigido e inflessibile | Massimo beneficio in Flow Efficiency | Può sembrare rigido in situazioni davvero urgenti ed eccezionali |

La tensione centrale è **flessibilità contro flusso**. Avviare nuovo lavoro ogni
volta che sembra urgente dà l'idea di reattività, ma la ricerca su Flow Efficiency
e WIP mostra in modo costante che questa flessibilità si paga con la capacità di
finire qualcosa in fretta, dato che più lavoro simultaneo significa code più lunghe
e più cambi di contesto per tutto ciò che è già in volo. Si risolve la tensione
adottando per impostazione predefinita un limite di WIP a livello di team, con un
processo di eccezione deliberato, visibile e raro per le vere emergenze, anziché
una regola rigida senza eccezioni o un libero tutti flessibile e illimitato.

## Domande da discutere con il vostro team

1. **Qual è la nostra Flow Efficiency effettiva, misurata da dati reali di cycle
   time, e quel numero ci sorprende?** La maggior parte dei team non l'ha mai
   calcolata e presume che sia molto più alta di quanto risulti. Prendete un
   campione di cambiamenti recenti e calcolate il rapporto con onestà prima di
   discutere qualsiasi altra cosa di questo argomento.

2. **Quanto lavoro in corso abbiamo davvero in questo momento, in tutto il team,
   e qualcuno conosceva quel numero prima di contarlo?** Un WIP alto è spesso
   invisibile finché non viene misurato esplicitamente, perché ogni individuo vede
   solo la propria fetta. Contate tutto ciò che è attualmente in corso, incluso il
   lavoro che oggi nessuno sta toccando.

3. **Se adottassimo un limite di WIP, che cosa dovrebbe cambiare nel modo in cui
   rispondiamo a una nuova richiesta urgente?** Questa domanda fa emergere la vera
   abitudine organizzativa, avviare nuovo lavoro in modo riflesso, che un limite di
   WIP è progettato per interrompere, e vale la pena discuterne prima, non dopo,
   di provare a far rispettare un limite.

4. **Quando il lavoro resta fermo nella nostra pipeline, qual è il motivo
   specifico, ed è lo stesso ogni volta?** Una sensazione generica che «le cose
   aspettino» è meno utile di una causa specifica e ricorrente: un revisore non
   disponibile, un ambiente condiviso prenotato, una dipendenza tra team. Nominate
   lo schema effettivo da esempi recenti reali.

5. **Abbiamo mai adottato un limite di WIP per poi vederlo erodersi in silenzio
   attraverso le eccezioni?** È estremamente comune e vale la pena discuterne con
   onestà: quale pressione ha causato la prima eccezione, e le eccezioni sono
   diventate la nuova normalità senza che nessuno lo decidesse esplicitamente?

6. **Un limite di WIP nel nostro contesto dovrebbe essere applicato a livello
   individuale, di team o di risorsa condivisa (come una coda di revisione o un
   ambiente di test)?** Colli di bottiglia diversi richiedono limiti a livelli
   diversi, e applicare un limite al livello sbagliato, quote individuali anziché
   un tetto sulla coda condivisa, può applicare male l'intera tecnica.

## Prospettiva settoriale

**Startup.** Con poche persone, il WIP è spesso naturalmente basso semplicemente
perché non ci sono abbastanza ingegneri per avviare molto lavoro in parallelo. Il
rischio è l'opposto: un fondatore o un ingegnere senior che personalmente si
destreggia tra molte più iniziative simultanee di quanto si renda conto, cosa che
vale la pena misurare anche senza strumenti kanban formali.

**Piccola impresa.** Una semplice lavagna visibile, fisica o un basico strumento
digitale, con un limite esplicito per colonna basta per ottenere la maggior parte
del beneficio senza investire in sofisticati strumenti di metriche di flusso.
Cominciate con un limite generoso e stringetelo gradualmente man mano che il team
prende confidenza con la disciplina.

**Enterprise.** Un WIP alto è particolarmente comune e particolarmente costoso
qui, perché molte iniziative strategiche simultanee competono per la stessa
capacità di ingegneria condivisa, e avviarne una nuova sembra sempre un progresso
a chi l'ha sponsorizzata. Rendete visibile il WIP a livello di portafoglio, non
solo di team, così che la dirigenza possa vedere il costo di avviare un'altra
iniziativa prima di aver finito quelle in corso.

**Settore pubblico.** I programmi pluriennali accumulano spesso un enorme WIP
implicito su molti filoni di lavoro, ciascuno giustificato individualmente, senza
alcuna visibilità a livello organizzativo del totale. Introdurre la visibilità del
WIP a livello di portafoglio, anche in modo informale, è spesso l'argomento più
persuasivo per sequenziare il lavoro anziché eseguire tutto in parallelo, dato che
il costo in Flow Efficiency di un WIP alto si compone in modo visibile una volta
misurato.

## Esempi

**Enterprise.** Il team di piattaforma di una società di servizi finanziari
destreggiava diciotto iniziative simultanee con soli dodici ingegneri, un
rapporto tra WIP e capacità che nessuno aveva davvero calcolato finché un nuovo
direttore di ingegneria non lo chiese direttamente. La Flow Efficiency del lavoro
del team risultò inferiore al 12%. Il team adottò un limite esplicito di WIP di
un'iniziativa attiva ogni due ingegneri, mettendo deliberatamente in pausa diverse
iniziative a priorità più bassa anziché continuare a distribuire la capacità in
modo sottile. Il throughput, misurato come iniziative davvero completate per
trimestre, più che raddoppiò entro due trimestri, anche se il team «faceva meno»
in modo visibile in un dato momento.

**Settore pubblico.** Il programma di trasformazione digitale di un'agenzia
nazionale per le infrastrutture aveva accumulato oltre quaranta filoni di lavoro
simultanei nel suo portafoglio, ciascuno con il proprio sponsor e la propria
giustificazione, senza alcuna vista unica del lavoro in corso totale. Una
revisione della Flow Efficiency a livello di programma scoprì che il filone
mediano passava meno del 15% del tempo trascorso in sviluppo attivo, mentre il
resto aspettava risorse condivise: un piccolo team centrale di revisione
architetturale, un ambiente di test condiviso e l'approvazione tra agenzie. Il
programma introdusse limiti espliciti di WIP a livello di portafoglio,
sequenziando i filoni anziché eseguirne quaranta in parallelo, e il tracciamento
dell'agenzia stessa mostrò un completamento misurabilmente più rapido per i
filoni rimasti attivi, anche se il numero totale in esecuzione contemporanea
scendeva bruscamente.

## Business case: motivazioni, ROI e TCO

Il ritorno del gestire deliberatamente Flow Efficiency e WIP è controintuitivo ma
ben documentato: il throughput tende a salire, non a scendere, quando
un'organizzazione fa meno cose contemporaneamente, perché meno cambi di contesto e
code più brevi significano che ogni singolo pezzo di lavoro finisce più in fretta.
L'esempio della società di servizi finanziari qui sopra, throughput raddoppiato
riducendo deliberatamente il lavoro simultaneo, è uno schema comune una volta che
le organizzazioni misurano e agiscono davvero sulla Flow Efficiency anziché
presumere che più lavoro parallelo significhi sempre più progresso.

Il costo totale di adozione di questa disciplina è per lo più organizzativo, non
tecnico: una lavagna visibile, un limite di WIP concordato e la disciplina di dire
di no all'avvio di nuovo lavoro quando il limite è raggiunto. Quella disciplina è
più difficile da sostenere che da adottare, ed è per questo che la
raccomandazione «fai attenzione al WIP che risale» qui sopra conta quanto
l'adozione iniziale stessa.

## Antipattern e insidie

- **Presumere che lo sforzo attivo domini il tempo di consegna senza misurare la
  Flow Efficiency:** di solito sbagliato, e indirizza lo sforzo di miglioramento
  verso la leva sbagliata.
- **Applicare un limite di WIP come quota individuale anziché come vincolo di
  sistema:** applica male la tecnica e rischia la manipolazione individuale.
- **Avviare nuovo lavoro in modo riflesso perché sembra un progresso:** l'abitudine
  di fondo che Flow Efficiency e limiti di WIP sono progettati per interrompere.
- **Lasciare che le eccezioni al limite di WIP diventino routine e invisibili:**
  erode la disciplina fino allo stato originale senza che nessuno lo decida di
  proposito.
- **Misurare il WIP solo a livello di team, perdendo il sovraccarico a livello di
  portafoglio:** comune nelle grandi organizzazioni che gestiscono molte
  iniziative strategiche simultanee.
- **Trattare un numero basso di Flow Efficiency come il segno di un cattivo
  team:** è tipico della maggior parte delle pipeline di consegna ed è un punto
  di partenza per l'indagine, non un verdetto.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Il lavoro in corso non è tracciato; i team
  avviano nuovo lavoro in modo riflesso senza alcuna visibilità sul carico
  simultaneo totale.
- **Livello 2, Sviluppo (Develop):** Alcuni team usano una lavagna informale, ma i
  limiti di WIP non sono applicati in modo coerente e la Flow Efficiency non viene
  mai calcolata.
- **Livello 3, Standardizzazione (Standardize):** I team hanno limiti di WIP
  espliciti e visibili a livello di sistema, e la Flow Efficiency è misurata
  periodicamente da dati reali di cycle time.
- **Livello 4, Gestione (Manage):** Le eccezioni ai limiti di WIP sono tracciate
  come decisioni deliberate e visibili; la Flow Efficiency è monitorata per
  rilevarne l'erosione nel tempo e indagata quando cala.
- **Livello 5, Orchestrazione (Orchestrate):** Il WIP è visibile e gestito a
  livello di portafoglio, non solo di team, e l'organizzazione sa indicare
  miglioramenti specifici del throughput derivati dalla riduzione deliberata del
  lavoro simultaneo.

## Spunti di discussione

1. Qual è la nostra Flow Efficiency effettiva, calcolata con onestà da dati reali?
2. Quanto lavoro in corso abbiamo attualmente che nessuno aveva contato prima di questa discussione?
3. A che cosa dovremmo dire di no per far rispettare un vero limite di WIP?
4. Qual è il motivo più comune per cui il lavoro resta fermo nella nostra pipeline?
5. Dove nella nostra organizzazione il WIP a livello di portafoglio è invisibile e probabilmente troppo alto?

## Punti chiave

- La **Flow Efficiency**, il rapporto tra tempo attivo e tempo totale, è di solito
  inferiore al 25% nelle pipeline di consegna reali; è il tempo di attesa, non lo
  sforzo, a dominare.
- **Limitare il lavoro in corso tende ad aumentare il throughput**, non a
  diminuirlo, riducendo i cambi di contesto e accorciando le code.
- Applica un **limite di WIP come vincolo di sistema**, mai come quota
  individuale.
- Indaga il **motivo specifico** per cui il lavoro resta fermo anziché emanare una
  generica direttiva «riducete il tempo di attesa».
- Fai attenzione ai limiti di WIP che si **erodono con eccezioni di routine**;
  tratta ogni eccezione come una decisione deliberata e visibile.
- L'argomento 2.4 chiama questa quantità **Flow Load** e l'argomento 2.7
  formalizza la relazione come legge di Little: il lavoro in corso è uguale al
  tasso di arrivo per il cycle time, per qualsiasi coda stabile.

## Riferimenti e letture di approfondimento

- *The Principles of Product Development Flow*, di Donald G. Reinertsen (teoria
  delle code, dimensione dei lotti e limiti di WIP nello sviluppo di prodotto).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, di
  David J. Anderson (il testo fondativo sui limiti di WIP e sul flusso per i
  team di software).
- *Actionable Agile Metrics for Predictability*, di Daniel S. Vacanti
  (misurazione della Flow Efficiency e previsione basata sul flusso).
- *The Goal*, di Eliyahu M. Goldratt (teoria dei vincoli e la relazione
  controintuitiva tra operosità locale e throughput del sistema).
