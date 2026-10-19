# 3.6 Efficienza e flusso: lavoro profondo e interruzioni

## Panoramica e motivazione

**Efficienza e flusso** (efficiency and flow), l'ultima dimensione di SPACE
(argomento 3.1), misura l'assenza di attrito e la capacità di sostenere un lavoro
concentrato e ininterrotto. Questa dimensione sta al confine tra le metriche di
flusso della consegna della Parte 2 (la Flow Efficiency dell'argomento 2.5 misura
come il lavoro si muove attraverso il sistema di un team) e qualcosa di più
personale: l'esperienza cognitiva individuale del lavoro di ingegneria profondo e
concentrato, e con quale frequenza quell'esperienza viene frammentata da
interruzioni. L'ingegneria del software, più della maggior parte del lavoro di
conoscenza, dipende dal tenere molto contesto nella memoria di lavoro in una volta,
il che la rende insolitamente vulnerabile al costo dell'interruzione.

La ricerca su questo costo è coerente e sobria: rimettersi a fuoco dopo
un'interruzione di un lavoro profondo e complesso non richiede secondi, richiede di
routine molti minuti, a volte quasi mezz'ora, per ricostruire per intero la
[memoria di lavoro](https://en.wikipedia.org/wiki/Working_memory) che un
ingegnere stava tenendo prima dell'interruzione. Un ingegnere la cui giornata è
frammentata in blocchi da quindici minuti da riunioni, notifiche e cambi di
contesto può mostrare molta attività (argomento 3.4) pur portando a termine
molto meno lavoro davvero difficile di quanto farebbe lo stesso ingegnere con due
ore protette e ininterrotte. Questa dimensione esiste proprio per rendere visibile
quel costo invisibile.

Per i team grandi, il costo delle interruzioni si compone in modo strutturale: più
riunioni, più overhead di coordinamento tra team, più canali Slack e notifiche, più
punti di controllo di processo, tutti individualmente ragionevoli ma che insieme
frammentano gravemente la giornata. Le organizzazioni enterprise e governative, con
le loro maggiori esigenze di governance e coordinamento, sono particolarmente
inclini a questa frammentazione, e questa dimensione dà alla dirigenza un modo
concreto di misurarla e difendersene, anziché trattare il «tempo di concentrazione»
come una vaga aspirazione culturale che nessuno protegge davvero.

## Principi chiave

- **Il cambio di contesto ha un costo reale e misurabile, non solo percepito.**
  Rimettersi a fuoco dopo un'interruzione richiede di routine molti minuti, non
  secondi.
- **Il carico di riunioni e la frequenza delle interruzioni sono misurabili, non
  solo aneddotici.** I dati di calendario e degli strumenti possono far emergere
  entrambi direttamente.
- **Il tempo protetto e ininterrotto è una risorsa scarsa che va difesa
  deliberatamente,** non una che sopravvive per impostazione predefinita man mano
  che un'organizzazione cresce.
- **Questa dimensione spiega spesso un divario tra attività e prestazioni**
  (argomenti 3.3 e 3.4): un'alta attività con basse prestazioni risale a volte a
  giornate frammentate e piene di interruzioni.
- **La variazione individuale nelle esigenze di concentrazione è reale,** e questa
  dimensione dovrebbe informare le norme del team, non imporre a tutti un orario
  rigido e identico.

## Raccomandazioni

### Misura carico di riunioni e frammentazione direttamente dai dati di calendario

Calcola il numero e la durata dei blocchi ininterrotti di due ore o più disponibili
nella settimana tipica di un ingegnere, usando i dati di calendario. Questo singolo
numero, a volte chiamato **tempo di concentrazione** (focus time) o **maker time**,
è un proxy diretto e strumentabile di questa dimensione, ed è comune scoprire che
un ingegnere nominalmente a tempo pieno non ha quasi nessuno di questi blocchi
disponibili in una settimana tipica una volta contate le riunioni, una scoperta che
di solito sorprende la dirigenza più degli ingegneri stessi.

### Traccia la frequenza delle interruzioni dai dati degli strumenti dove disponibili

Il volume di notifiche, la frequenza dei messaggi in arrivo durante l'orario di
lavoro e il tasso di cambi di contesto tra compiti possono essere tutti
approssimati dagli strumenti di collaborazione esistenti. Usa questi dati in
aggregato, a livello di team, seguendo lo stesso principio dei dati di attività
(argomento 3.4): mai come meccanismo di sorveglianza individuale, sempre come
segnale a livello di team sul fatto che l'overhead di coordinamento
dell'organizzazione sia cresciuto oltre ciò che protegge la vera concentrazione.

### Proteggi blocchi espliciti di tempo di concentrazione come norma del team o dell'organizzazione

L'intervento più efficace verso cui punta questa dimensione è semplice e a basso
costo: designare blocchi di tempo specifici e protetti, comunemente una mattina o
un pomeriggio in giorni specifici, durante i quali le riunioni non vengono
fissate per impostazione predefinita. Richiede un consenso organizzativo che va oltre
il controllo di un singolo team, dato che le riunioni sono spesso fissate
attraverso i confini dei team, ma dove viene attuato in modo coerente è uno degli
interventi a più alto ritorno e minor costo di tutto questo libro.

### Correla i dati di flusso con il divario tra attività e prestazioni

Quando un team mostra alta attività (argomento 3.4) ma prestazioni piatte o in calo
(argomento 3.3), controlla i dati di flusso e di interruzione prima di presumere che
il divario rifletta un problema di capacità individuale o del team. Un orario
fortemente frammentato può produrre esattamente questo schema: molto movimento
visibile, poco lavoro davvero difficile completato, perché il lavoro difficile
richiede specificamente la concentrazione sostenuta che la frammentazione distrugge.

### Rispetta la variazione individuale anziché imporre un unico orario rigido

Non tutti gli ingegneri hanno bisogno, o lavorano meglio, con schemi identici di
tempo di concentrazione; alcuni pensano davvero meglio in brevi sprint, altri hanno
bisogno di lunghi tratti ininterrotti. Usa i dati di questa dimensione per
informare norme e impostazioni predefinite a livello di team, blocchi protetti da cui
si può uscire anziché obbligatori, e non un unico orario imposto che presuppone
esigenze uniformi per tutti.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessuna protezione del tempo di concentrazione | Massima flessibilità di pianificazione delle riunioni | Le giornate frammentate riducono la capacità per il lavoro davvero difficile |
| Blocchi di concentrazione protetti a livello di team | Basso costo, alto ritorno, difende direttamente il lavoro profondo | Richiede consenso di coordinamento oltre un singolo team |
| Periodi senza riunioni a livello di organizzazione | La protezione più forte, la più difficile da erodere | Richiede un ampio impegno organizzativo e può sembrare rigida per ruoli che hanno bisogno di più coordinamento |
| Pianificazione della concentrazione su base volontaria individuale | Rispetta la variazione individuale nello stile di lavoro | Protezione predefinita più debole; facile da erodere sotto pressione di pianificazione |

La tensione centrale è **esigenza di coordinamento contro protezione della
concentrazione**. Le grandi organizzazioni hanno davvero bisogno di riunioni e
coordinamento tra team per funzionare, e quell'esigenza tira direttamente contro il
tempo ininterrotto che il lavoro di ingegneria profondo richiede. Si risolve la
tensione non eliminando il coordinamento ma rendendo il tempo di concentrazione
un'impostazione predefinita esplicita e protetta anziché qualunque tempo capiti di
avanzare dopo aver accolto ogni richiesta di riunione, trattando la protezione della
concentrazione come una risorsa da difendere deliberatamente e non come un residuo.

## Domande da discutere con il vostro team

1. **Quanti blocchi ininterrotti di due ore ha in una settimana un ingegnere tipico
   del nostro team, misurati da dati di calendario reali?** La maggior parte dei
   team non l'ha mai controllato direttamente, e la risposta, una volta misurata, è
   di solito più bassa di quanto chiunque avrebbe indovinato dalla sola impressione.

2. **Abbiamo mai visto un divario tra attività e prestazioni che i dati di flusso
   potrebbero spiegare?** Guardate un periodo in cui un team sembrava indaffarato ma
   ha consegnato poco sul lavoro davvero difficile, e verificate se il carico di
   riunioni o la frammentazione possano spiegare il divario.

3. **Che cosa servirebbe per stabilire un blocco di concentrazione protetto e senza
   riunioni per il nostro team, e che cosa lo ostacola oggi?** Nominate l'ostacolo
   specifico, abitudini di pianificazione tra team, un'aspettativa della dirigenza
   di disponibilità costante, e discutete se sia davvero fisso quanto sembra.

4. **Rispettiamo la variazione individuale nelle esigenze di concentrazione, o il
   nostro orario attuale presuppone che tutti lavorino allo stesso modo?** Chiedete
   direttamente ai membri del team come preferiscono davvero strutturare il lavoro
   concentrato, anziché presumere uno schema unico per tutti.

5. **Come è cambiato il nostro carico di riunioni nell'ultimo anno, e qualcuno ha
   notato il trend prima di questa discussione?** La frammentazione si insinua
   spesso gradualmente, una riunione ricorrente dall'aspetto ragionevole alla volta,
   e raramente è il risultato di un'unica decisione deliberata.

6. **Se proteggessimo due pomeriggi pieni a settimana per il lavoro profondo in
   tutta l'organizzazione, a che cosa dovremmo dire di no, e ne varrebbe la
   pena?** Questa domanda concreta sul compromesso porta allo scoperto la tensione
   tra coordinamento e concentrazione anziché lasciarla come aspirazione astratta.

## Prospettiva settoriale

**Startup.** Il carico di riunioni è di solito naturalmente basso con un team
piccolo, e il rischio è invece il cambio di contesto dovuto al portare molti
cappelli contemporaneamente più che alle riunioni pianificate in sé. Proteggete
deliberatamente il tempo di concentrazione anche su piccola scala, dato che
l'abitudine è più facile da stabilire presto che da introdurre in seguito.

**Piccola impresa.** Una semplice norma informale, nessuna riunione interna prima di
mezzogiorno, per esempio, può catturare la maggior parte del beneficio di questa
dimensione senza bisogno di strumenti di analisi dei calendari. A questa scala la
disciplina conta più della misurazione.

**Enterprise.** Il carico di riunioni e l'overhead di coordinamento tra team
scalano male qui, e la frammentazione si insinua spesso attraverso molte riunioni
ricorrenti individualmente ragionevoli che nessuno ha mai guardato in aggregato.
Misurate direttamente la disponibilità di tempo di concentrazione usando i dati di
calendario di tutta l'organizzazione, e trattate i blocchi di concentrazione
protetti come policy di organizzazione, non come opzione team per team che le
abitudini di pianificazione tra team scavalcano.

**Settore pubblico.** I pesanti requisiti di governance e coordinamento comuni nelle
organizzazioni del settore pubblico rendono questa dimensione particolarmente
importante da proteggere deliberatamente, dato che l'attrazione naturale verso più
processo e più riunioni di revisione è forte. Presentate esplicitamente la
protezione del tempo di concentrazione come un investimento di produttività quando
sostenete la causa presso stakeholder che possono vedere la riduzione delle
riunioni come riduzione della supervisione anziché come protezione della vera
capacità di ingegneria.

## Esempi

**Enterprise.** La dirigenza di ingegneria di un'azienda di tecnologia finanziaria
notò un divario persistente tra attività di commit e capacità del team di
rilasciare in tempo funzionalità davvero complesse. L'analisi dei calendari scoprì
che l'ingegnere mediano aveva meno di tre ore di blocchi ininterrotti da due ore
disponibili a settimana, frammentate in un calendario di riunioni di stato
ricorrenti, molte delle quali aggiunte in modo incrementale in due anni senza
nessuna decisione singola di aggiungere un carico di riunioni così grande.
L'azienda istituì due pomeriggi a settimana obbligatori e senza riunioni in tutta
l'organizzazione, e un sondaggio di controllo con una revisione delle metriche di
consegna sei mesi dopo mostrò sia punteggi di soddisfazione migliorati sia una
riduzione misurabile del cycle time (argomento 2.6) specificamente per le
funzionalità complesse di più giorni.

**Settore pubblico.** Il team di ingegneria di un'agenzia federale, operando sotto
pesanti requisiti di governance, scoprì che gli ingegneri passavano quasi il 40%
delle ore di lavoro in riunioni di stato e di revisione della conformità, sulla
base di un audit dei calendari condotto dopo che diversi ingegneri avevano espresso
preoccupazioni nei colloqui di uscita. Anziché eliminare i requisiti di governance,
che servivano a scopi autentici di supervisione, il team consolidò le riunioni di
stato ridondanti in un'unica revisione settimanale e spostò i controlli di
conformità di routine su una revisione asincrona della documentazione anziché su
riunioni dal vivo, riducendo il carico di riunioni di quasi la metà e preservando
la funzione di supervisione sottostante, e i dati dei sondaggi successivi
mostrarono un miglioramento significativo del tempo di concentrazione dichiarato.

## Business case: motivazioni, ROI e TCO

Il ritorno del proteggere il tempo di concentrazione è sproporzionato rispetto al
suo costo: l'esempio dell'azienda di tecnologia finanziaria qui sopra mostra un
miglioramento misurabile della consegna da un cambiamento che non è costato nulla
oltre alla disciplina di pianificazione, due pomeriggi a settimana senza riunioni.
Poiché il lavoro profondo e complesso dipende specificamente da un'attenzione
sostenuta e ininterrotta, anche un modesto aumento della disponibilità effettiva di
tempo di concentrazione può produrre un miglioramento sproporzionato della capacità
dell'organizzazione per il suo lavoro più difficile e di maggior valore.

Il costo totale di proprietà è quasi interamente disciplina organizzativa anziché
investimento in strumenti: i dati di calendario sono di solito già disponibili, e
l'intervento stesso, proteggere blocchi specifici, non costa nulla da attuare oltre
alla volontà di dire di no alla pianificazione di riunioni durante di essi. Il
principale costo continuo è difendere il tempo protetto dall'erosione graduale man
mano che nuove esigenze di coordinamento sorgono inevitabilmente.

## Antipattern e insidie

- **Trattare le giornate frammentate come un costo inevitabile della scala:** si
  compone gradualmente e raramente è il risultato di un'unica decisione deliberata,
  il che lo rende facile da lasciare senza risposta.
- **Confondere alta attività con alte prestazioni senza controllare i dati di
  flusso:** un orario frammentato può produrre esattamente questo schema
  fuorviante.
- **Imporre a tutti un unico orario rigido di tempo di concentrazione:** ignora la
  genuina variazione individuale nel modo in cui le persone lavorano meglio.
- **Usare i dati di interruzioni o notifiche come sorveglianza individuale:**
  ripete il rischio di uso improprio da cui l'argomento 3.4 mette in guardia per i
  dati di attività.
- **Lasciare che il tempo di concentrazione protetto si eroda gradualmente con le
  eccezioni:** lo stesso rischio di erosione da cui l'argomento 2.5 mette in guardia
  per i limiti di WIP, applicato alla protezione del tempo di concentrazione.
- **Aggiungere requisiti di governance o coordinamento senza mai misurare il loro
  costo cumulativo in carico di riunioni:** la frammentazione si insinua un'aggiunta
  dall'aspetto ragionevole alla volta.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Il tempo di concentrazione e il costo delle
  interruzioni non sono misurati né protetti; il carico di riunioni cresce senza
  che nessuno tracci il suo effetto cumulativo.
- **Livello 2, Sviluppo (Develop):** Esiste una certa consapevolezza informale della
  frammentazione, ma non si analizzano dati di calendario né si stabilisce
  formalmente alcun tempo protetto.
- **Livello 3, Standardizzazione (Standardize):** La disponibilità di tempo di
  concentrazione è misurata dai dati di calendario, e blocchi protetti e senza
  riunioni sono stabiliti come norma del team o dell'organizzazione.
- **Livello 4, Gestione (Manage):** I dati di flusso sono correlati attivamente con
  i divari tra attività e prestazioni per diagnosticare le prestazioni inferiori
  dovute alla frammentazione, e il tempo protetto è monitorato per rilevarne
  l'erosione.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione tratta la
  protezione del tempo di concentrazione come un investimento di produttività di
  prima classe, sa indicare miglioramenti specifici di consegna e soddisfazione
  riconducibili ad essa, e la difende in modo proattivo dalla pressione graduale e
  incrementale che altrimenti la eroderebbe.

## Spunti di discussione

1. Quante ore davvero ininterrotte ha avuto ciascuno di noi la settimana scorsa?
2. Il nostro carico di riunioni è cresciuto gradualmente senza che nessuno lo decidesse di proposito?
3. Dove un recente divario tra attività e prestazioni potrebbe essere in realtà un problema di flusso?
4. Quale singola riunione ricorrente taglieremmo per prima se ci venisse chiesto di ridurre la frammentazione?
5. Quanto ci costerebbe davvero stabilire due pomeriggi protetti e senza riunioni a settimana?

## Punti chiave

- Efficienza e flusso misura l'**assenza di attrito** e la capacità di sostenere un
  **lavoro concentrato e ininterrotto**, da cui l'ingegneria del software dipende in
  modo insolitamente forte.
- **Il cambio di contesto ha un costo reale e misurabile**, spesso molti minuti per
  rimettersi a fuoco, non secondi.
- Misura la **disponibilità di tempo di concentrazione direttamente dai dati di
  calendario**; il risultato di solito sorprende la dirigenza.
- Questa dimensione **spiega spesso un divario tra attività e prestazioni** che
  altrimenti verrebbe diagnosticato male.
- I **blocchi protetti di tempo di concentrazione** sono un intervento a basso costo
  e alto ritorno, ma richiedono una difesa deliberata dall'erosione graduale.

## Riferimenti e letture di approfondimento

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann,
  Brian Houck e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue*
  (2021).
- *Deep Work: Rules for Focused Success in a Distracted World*, di Cal Newport (il
  costo del cambio di contesto e il valore del tempo di concentrazione protetto).
- *Peopleware: Productive Projects and Teams*, di Tom DeMarco e Timothy Lister
  (costo delle interruzioni e progettazione di ambienti che proteggono la
  concentrazione).
- Mark, Gloria, Daniela Gudith e Ulrich Klocke, "The Cost of Interrupted Work:
  More Speed and Stress" (2008): ricerca empirica sul tempo di recupero dopo le
  interruzioni.
