# 4.2 Copertura dei test ed efficacia dei test

## Panoramica e motivazione

La **[copertura dei test](https://en.wikipedia.org/wiki/Code_coverage)** misura la
percentuale di codice eseguita da una suite di test: copertura delle righe, copertura
dei rami o la più rigorosa copertura dei percorsi. È una delle metriche più
tracciate di tutto questo libro, economica da calcolare, facile da visualizzare come
singola percentuale e, di conseguenza, una delle più frequentemente manipolate,
esattamente nel modo che l'argomento 1.2 prevede per qualsiasi metrica che diventa un
obiettivo. Una suite di test può raggiungere un'alta copertura verificando quasi
nulla di significativo, perché la copertura misura se il codice è stato eseguito
durante un'esecuzione di test, non se il test ha effettivamente controllato che il
codice si comportasse correttamente.

Questo divario tra copertura e genuina efficacia dei test non è una nota a piè di
pagina secondaria; è la preoccupazione centrale di questo argomento. Un test che
chiama una funzione e non asserisce nulla sul suo risultato aumenta la copertura in
modo identico a un test che verifica a fondo il comportamento della funzione sui casi
limite. La correzione che questo argomento raccomanda, il **mutation testing**, che
introduce deliberatamente piccoli difetti artificiali nel codice e controlla se la
suite di test li intercetta davvero, è la risposta diretta a questo divario, e questo
argomento la tratta come il complemento necessario della copertura, non come un extra
facoltativo.

Per i team grandi, gli obiettivi di copertura sono spesso adottati in tutta
l'organizzazione come barriera di qualità, proprio il tipo di metrica incentivata e
molto visibile che l'argomento 1.2 avverte essere più esposta alla manipolazione. Le
organizzazioni enterprise e governative che fissano un requisito generalizzato di
percentuale di copertura senza un controllo abbinato di efficacia stanno, di fatto,
incentivando esattamente lo schema di manipolazione della soglia che questo libro
descrive: test banali scritti puramente per raggiungere un numero, senza alcun
corrispondente miglioramento nella prevenzione effettiva dei difetti.

## Principi chiave

- **La copertura misura l'esecuzione, non la verifica.** Una riga eseguita da un test
  non dice nulla sul fatto che il test abbia controllato qualcosa di significativo
  su di essa.
- **Un obiettivo di copertura senza un controllo di efficacia è un esempio da manuale
  della legge di Goodhart** (argomento 1.2): il numero migliora mentre la qualità
  genuina no.
- **Il mutation testing è il complemento necessario della copertura**, non una
  sostituzione; usa entrambi insieme.
- **La copertura è più utile come soglia minima che come obiettivo da massimizzare.**
  Un numero basso rivela codice davvero non testato; inseguire il 100% produce spesso
  rendimenti decrescenti o negativi.
- **La copertura dei percorsi critici conta più di una copertura uniforme e
  generalizzata.** Non tutto il codice comporta lo stesso rischio se fallisce.

## Raccomandazioni

### Usa la copertura per trovare il codice non testato, non come obiettivo da massimizzare

Tratta un rapporto di copertura principalmente come una mappa di ciò che non ha alcun
test, informazione davvero utile, anziché come un punteggio da spingere verso il
100%. Il codice con copertura zero è una lacuna reale da colmare; il valore
marginale di portare la copertura dall'85% al 95% è di solito molto più basso e
spesso non vale lo sforzo che richiede, soprattutto se quello sforzo produce test di
poco valore solo per raggiungere il numero più alto.

### Abbina ogni obiettivo di copertura al mutation testing

Gli strumenti di **mutation testing** introducono automaticamente piccoli difetti nel
tuo codice, invertendo un operatore di confronto, cambiando una condizione al
contorno, e poi eseguono la tua suite di test su ciascuna versione mutata. Una suite
di test che «uccide» (fallisce contro) la maggior parte dei mutanti verifica davvero
il comportamento; una suite con alta copertura delle righe ma un basso tasso di
uccisione dei mutanti esegue il codice senza controllarlo in modo significativo. Questo
abbinamento è il guardrail singolarmente più efficace contro la manipolazione degli
obiettivi di copertura, e questo libro lo raccomanda come pratica standard, non come
tecnica avanzata o facoltativa.

### Dai priorità prima a copertura e mutation testing sui percorsi critici

Non tutto il codice comporta lo stesso rischio. Un percorso di elaborazione dei
pagamenti, un controllo di autenticazione o uno script di migrazione dei dati merita
un collaudo molto più rigoroso di un rapporto amministrativo usato di rado. Anziché
perseguire una copertura uniforme su un'intera base di codice, individua i percorsi
di codice a più alto rischio e conseguenza e concentra lì per prima sia l'impegno di
copertura sia quello di mutation testing, accettando una copertura più bassa sul
codice davvero a basso rischio come compromesso deliberato e informato anziché come
svista.

### Fai attenzione agli specifici schemi di manipolazione della copertura

I modi più comuni in cui la copertura viene manipolata, una volta diventata un
obiettivo, includono: test che chiamano una funzione ma non asseriscono nulla di
significativo sul risultato (la manipolazione della soglia dell'argomento 1.2
applicata a questa metrica), disattivare o cancellare i test che falliscono anziché
correggere il problema sottostante, ed escludere del tutto dal calcolo della copertura
il codice difficile da testare anziché affrontare il perché sia difficile da testare.
Verifica periodicamente direttamente un campione di test, leggendone le asserzioni
effettive, anziché fidarti della sola percentuale di copertura.

### Fissa una soglia minima di copertura, non un tetto, nella tua pipeline di CI

Configura la tua pipeline di build perché fallisca se la copertura scende sotto una
soglia minima concordata per il codice nuovo, prevenendo la regressione, anziché
richiedere che ogni cambiamento spinga più in alto il numero complessivo. La
distinzione conta: una soglia minima protegge dal tornare indietro senza creare la
stessa pressione incessante verso l'alto che produce test di poco valore scritti
solo per far salire ancora un po' il numero.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Solo percentuale di copertura | Economica, semplice, ampiamente supportata dagli strumenti | Facilmente manipolabile; misura l'esecuzione, non la verifica |
| Copertura più mutation testing | Verifica che i test controllino davvero il comportamento, resiste alla manipolazione | Computazionalmente più costoso; richiede un investimento in strumenti |
| Obiettivo di copertura uniforme su tutta la base di codice | Semplice da enunciare e applicare | Spreca sforzo su codice a basso rischio; investe poco rispetto al rischio altrove |
| Copertura basata sul rischio, prima i percorsi critici | Concentra lo sforzo dove conta di più | Richiede giudizio per individuare correttamente i percorsi davvero critici |

La tensione centrale è **semplicità contro onestà**. Una singola percentuale di
copertura è facile da riportare e facile da fissare come obiettivo, ma quella
semplicità è esattamente ciò che la rende così facile da manipolare una volta
diventata un numero incentivato. Si risolve la tensione accettando la complessità
aggiuntiva del mutation testing e della prioritizzazione basata sul rischio come
costo di un segnale onesto, e comunicando esplicitamente al tuo team perché un numero
di copertura complessivo più basso, concentrato correttamente sui percorsi critici e
sostenuto da un forte tasso di uccisione dei mutanti, vale più di uno più alto, più
uniformemente distribuito ma verificato in modo meno efficace.

## Domande da discutere con il vostro team

1. **Qual è il nostro tasso di uccisione dei mutanti sui percorsi di codice a più
   alto rischio, e come si confronta con la nostra percentuale di copertura sullo
   stesso codice?** Un grande divario tra un'alta copertura e un basso tasso di
   uccisione dei mutanti è il segno più chiaro possibile che la sola copertura non
   vi dice ciò che pensate vi dica.

2. **Abbiamo mai scritto un test principalmente per far salire un numero di
   copertura, con poco pensiero reale su cosa dovesse verificare?** Siate onesti
   qui; succede più spesso di quanto i team amino ammettere, soprattutto sotto
   pressione di scadenza quando una barriera di copertura blocca un merge.

3. **Il nostro sforzo di copertura è concentrato sui percorsi di codice a più alto
   rischio, o distribuito in modo uniforme a prescindere dalla conseguenza se quel
   codice fallisce?** Mappate la distribuzione attuale della copertura rispetto a una
   valutazione onesta del rischio della vostra base di codice e cercate la
   discrepanza.

4. **Abbiamo mai disattivato o cancellato un test che falliva anziché correggere il
   problema sottostante che rivelava?** È una delle forme più dannose di
   manipolazione della copertura, perché rimuove attivamente una protezione reale
   mentre il numero di copertura riportato può muoversi appena.

5. **La nostra pipeline di CI impone una soglia minima di copertura per il codice
   nuovo, o spinge verso un tetto sempre più alto a prescindere dai rendimenti
   decrescenti?** Discutete se il disegno attuale della vostra barriera crei
   l'incentivo giusto, proteggere dalla regressione, o quello sbagliato, una
   pressione incessante verso l'alto che premia l'imbottitura di test di poco
   valore.

6. **Quale codice della nostra base di codice è escluso dal calcolo della copertura,
   e quell'esclusione è giustificata o nasconde una vera lacuna di test?** Rivedete
   la configurazione effettiva delle esclusioni; è comune che questo elenco cresca in
   silenzio nel tempo senza che nessuno riesamini se ogni esclusione sia ancora
   giustificata.

## Prospettiva settoriale

**Startup.** Gli obiettivi formali di copertura sono spesso superflui così presto;
concentrate lo sforzo di scrittura dei test direttamente sui percorsi di codice più
rischiosi e più critici per il business (di solito la logica di pagamento o del flusso
centrale) anziché perseguire una percentuale generalizzata su una base di codice che
sta ancora cambiando rapidamente e potrebbe comunque essere sostanzialmente
riscritta presto.

**Piccola impresa.** La maggior parte delle piattaforme di CI riporta la copertura in
automatico con un costo di impostazione minimo; usatela principalmente per individuare
codice critico del tutto non testato anziché inseguire una specifica percentuale
obiettivo, e considerate il mutation testing solo quando avete la capacità di
ingegneria di agire su ciò che rivela.

**Enterprise.** Gli obiettivi di copertura generalizzati, validi per tutta
l'organizzazione, sono un errore comune e di conseguenze rilevanti a questa scala,
dato che incentivano esattamente la manipolazione che questo argomento descrive su
decine di team contemporaneamente. Stabilite aspettative di copertura basate sul
rischio che varino in base alla criticità del servizio, e investite in
un'infrastruttura di mutation testing specificamente per i vostri sistemi a più alto
rischio.

**Settore pubblico.** I requisiti di copertura compaiono a volte nella
documentazione di appalto o di conformità come proxy grossolano e facile da
specificare dell'assicurazione di qualità. Dove possibile, abbinate qualsiasi
percentuale di copertura imposta contrattualmente a un requisito di mutation testing
o di efficacia basata sui difetti, così che l'incentivo contrattuale non premi
inavvertitamente proprio l'imbottitura di test di poco valore da cui questo argomento
mette in guardia.

## Esempi

**Enterprise.** La dirigenza di una piattaforma di e-commerce aveva fissato un
requisito di copertura del 95% a livello aziendale per tutto il codice nuovo,
imposto come barriera rigida di CI. Un audit due anni dopo, avviato da un'ondata di
difetti in produzione in codice presumibilmente ben testato, scoprì un tasso di
uccisione dei mutanti inferiore al 40% in gran parte della base di codice: i team
avevano scritto test che eseguivano percorsi di codice senza asserire in modo
significativo sul loro comportamento, puramente per soddisfare la barriera sotto
pressione di scadenza. L'azienda sostituì il requisito generalizzato di copertura con
una politica a livelli di rischio: copertura rigorosa più mutation testing
obbligatorio sopra una soglia di uccisione dell'80% per il codice di pagamento e di
autenticazione, e una soglia minima di copertura molto più leggera per gli strumenti
interni a basso rischio, il che ridusse lo sforzo di collaudo sprecato e migliorò in
modo misurabile i tassi di difetti nei percorsi davvero critici.

**Settore pubblico.** Il sistema di idoneità alle prestazioni di un'agenzia di sanità
pubblica era contrattualmente tenuto a mantenere il 90% di copertura dei test in base
all'accordo con il fornitore di sviluppo. Una revisione post-incidente, dopo un
significativo difetto nel calcolo dell'idoneità che era stato rilasciato nonostante il
requisito di copertura fosse soddisfatto, scoprì che la funzione specifica
responsabile aveva raggiunto la propria copertura interamente con test che chiamavano
la funzione con input validi ma non verificavano mai le condizioni al contorno né gli
input non validi, proprio dove si era verificato il difetto. Il contratto rivisto
dell'agenzia con il fornitore richiede ora un punteggio documentato di mutation
testing accanto alla copertura per qualsiasi codice di calcolo dell'idoneità,
chiudendo la lacuna specifica che aveva permesso a un collaudo conforme ma inefficace
di soddisfare il contratto.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'abbinare copertura e mutation testing è intercettare il divario tra
qualità apparente ed effettiva dei test prima che costi un difetto in produzione.
L'esempio dell'e-commerce qui sopra mostra chiaramente lo schema: il solo requisito
di copertura aveva prodotto un falso senso di sicurezza che un'ondata di difetti ha
infine rivelato a un costo molto maggiore dell'investimento in mutation testing che
avrebbe colto prima la lacuna.

Il costo totale di proprietà comprende il costo computazionale del mutation testing,
più costoso da eseguire della semplice strumentazione di copertura e perciò di solito
riservato al codice dei percorsi critici anziché a un'intera base di codice, più il
tempo di ingegneria per interpretare i risultati e agire su di essi. Quel costo è
giustificato specificamente per il codice a più alto rischio, dove il costo di una
lacuna non rilevata nell'efficacia dei test è massimo.

## Antipattern e insidie

- **Trattare la percentuale di copertura come un verdetto diretto sulla qualità:**
  misura l'esecuzione, non la verifica.
- **Scrivere test principalmente per soddisfare una barriera di copertura:** produce
  esattamente lo schema di manipolazione della soglia, di poco valore, da cui
  l'argomento 1.2 mette in guardia.
- **Disattivare o cancellare i test che falliscono invece di correggere il problema
  sottostante:** rimuove una protezione reale lasciando appena toccato il numero
  riportato.
- **Applicare un obiettivo di copertura uniforme a prescindere dal rischio del
  codice:** spreca sforzo su codice a basso rischio e investe poco sui percorsi
  davvero critici.
- **Far crescere in silenzio un elenco di esclusioni nel tempo:** nasconde vere
  lacune di test dietro una cifra di copertura tecnicamente accurata ma fuorviante.
- **Perseguire un tetto di copertura invece di una soglia minima:** crea una
  pressione incessante verso l'alto che premia l'imbottitura di test rispetto alla
  verifica genuina.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** La copertura non è misurata, o è misurata in modo
  incoerente senza soglia minima, obiettivo o controllo di efficacia.
- **Livello 2, Sviluppo (Develop):** Esiste un obiettivo di copertura che viene
  tracciato, ma nessun mutation testing né prioritizzazione basata sul rischio
  informa come viene allocato lo sforzo.
- **Livello 3, Standardizzazione (Standardize):** Le soglie minime di copertura sono
  imposte in modo coerente nella CI, con una prioritizzazione basata sul rischio che
  dirige dove si concentra lo sforzo di copertura.
- **Livello 4, Gestione (Manage):** Il mutation testing viene eseguito sul codice dei
  percorsi critici, con una soglia tracciata di tasso di uccisione che deve essere
  rispettata accanto alla copertura, e gli elenchi di esclusione sono verificati
  periodicamente.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione sa indicare riduzioni
  specifiche dei difetti ricondotte alla prioritizzazione informata dal mutation
  testing, e i dati di copertura ed efficacia insieme informano direttamente le
  decisioni di investimento nel collaudo.

## Spunti di discussione

1. Qual è il nostro tasso di uccisione dei mutanti sul nostro singolo percorso di codice più critico, e lo conosciamo davvero?
2. Abbiamo mai scritto un test di poco valore puramente per soddisfare una barriera di copertura?
3. Il nostro attuale sforzo di copertura è concentrato dove il rischio è più alto, o distribuito in modo uniforme?
4. Quale codice è attualmente escluso dal calcolo della copertura, e quell'esclusione è ancora giustificata?
5. Un investimento in mutation testing sul nostro sistema a più alto rischio varrebbe il suo costo computazionale?

## Punti chiave

- La copertura dei test misura **l'esecuzione, non la verifica**; una riga coperta
  non dice nulla sul fatto che sia stata controllata in modo significativo.
- Abbina la copertura al **mutation testing** per verificare che i test intercettino
  davvero difetti reali, non solo che eseguano il codice.
- Concentra lo sforzo di collaudo sui **percorsi critici e ad alto rischio** anziché
  perseguire una copertura uniforme su un'intera base di codice.
- Usa la copertura come **soglia minima per proteggere dalla regressione**, non come
  tetto da massimizzare senza sosta.
- Fai attenzione agli specifici schemi di manipolazione della copertura: **test di
  poco valore, test che falliscono disattivati ed elenchi di esclusione che crescono
  in silenzio**.

## Riferimenti e letture di approfondimento

- *Working Effectively with Legacy Code*, di Michael Feathers (strategia di copertura
  dei test per basi di codice esistenti e difficili da testare).
- Jia, Yue, e Mark Harman, "An Analysis and Survey of the Development of Mutation
  Testing," *IEEE Transactions on Software Engineering* (2011): una rassegna
  completa delle tecniche di mutation testing e della loro efficacia.
- *xUnit Test Patterns*, di Gerard Meszaros (schemi di progettazione dei test
  rilevanti per scrivere test davvero efficaci e non solo che soddisfino la
  copertura).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (il rapporto tra pratiche di test e prestazioni di consegna).
