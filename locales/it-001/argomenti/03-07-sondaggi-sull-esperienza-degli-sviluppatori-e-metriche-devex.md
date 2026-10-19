# 3.7 Sondaggi sull'esperienza degli sviluppatori e metriche DevEx

## Panoramica e motivazione

Questo argomento chiude la Parte 3 con la meccanica pratica che rende affidabili i
dati autodichiarati di ogni argomento precedente: come progettare un sondaggio
sull'esperienza degli sviluppatori (DevEx) che produca un segnale genuino anziché un
concorso di popolarità, e come combinare i dati del sondaggio con la strumentazione
oggettiva in un insieme di metriche su cui un'organizzazione possa davvero agire.
Ogni argomento di questa parte si basa su una qualche forma di autodichiarazione,
soddisfazione e benessere (argomento 3.2) nel modo più diretto, ma anche
prestazioni, comunicazione e flusso traggono vantaggio da un sondaggio ben
progettato, e un sondaggio progettato male mina il valore di tutti insieme.

L'**esperienza degli sviluppatori (DevEx, developer experience)** è l'impostazione
più ampia e recente emersa attorno alla stessa idea di fondo che SPACE ha
formalizzato: l'esperienza effettiva, quotidiana, degli ingegneri nel portare a
termine il lavoro, attrito, strumenti, carico cognitivo, cicli di feedback, è essa
stessa qualcosa di misurabile e migliorabile, non solo una questione culturale
morbida. La ricerca sulla DevEx, in particolare il framework proposto da Abi Noda,
Margaret-Anne Storey, Nicole Forsgren e Michaela Greiler, organizza questa
esperienza attorno a tre dimensioni: cicli di feedback, carico cognitivo e stato di
flusso, che corrispondono da vicino ed estendono le dimensioni SPACE già trattate in
profondità in questa parte.

Per i team grandi, la differenza tra un sondaggio che produce un segnale affidabile
e uno che produce rumore o, peggio, dati attivamente fuorvianti sta interamente nei
dettagli di progettazione che questo argomento tratta: formulazione delle domande,
scelta della scala di risposta, campionamento e cadenza, e come i risultati vengono
comunicati a chi ha risposto. Le organizzazioni enterprise e governative che
conducono questi sondaggi su larga scala, su migliaia di ingegneri, non possono
permettersi di sbagliare, perché uno strumento difettoso a quella scala produce
conclusioni sbagliate con sicurezza che plasmano decisioni reali sulle risorse.

## Principi chiave

- **La qualità della progettazione del sondaggio determina l'affidabilità dei dati
  molto più della lunghezza o della sofisticazione del sondaggio.** Un sondaggio
  breve e ben progettato batte sempre uno lungo e progettato male.
- **Il tasso di risposta è esso stesso un segnale**, non solo una metrica di
  raccolta dati; un tasso in calo indica spesso una fiducia che si erode nel
  processo.
- **Combina i dati del sondaggio con la strumentazione oggettiva** ovunque
  possibile, seguendo il principio di strumentazione dell'argomento 1.5; usa i dati
  del sondaggio specificamente per ciò che i dati oggettivi non possono catturare.
- **Chiudi il cerchio con chi ha risposto.** Un sondaggio che non porta mai a un
  cambiamento visibile addestra le persone a non prenderlo più sul serio.
- **DevEx e SPACE sono impostazioni complementari della stessa preoccupazione di
  fondo**, non framework concorrenti tra cui scegliere.

## Raccomandazioni

### Progetta le domande per chiarezza ed evita formulazioni suggestive o a doppio oggetto

Scrivi domande di sondaggio che chiedano esattamente una cosa, in linguaggio
semplice, senza incorporare un'assunzione nella domanda stessa. «Quanto sei
soddisfatto dei nostri strumenti e della nostra documentazione?» è una domanda a
doppio oggetto che fonde in un'unica risposta confusa due risposte potenzialmente
molto diverse. Dividila in due domande separate. Evita formulazioni suggestive come
«quanto il nostro recente investimento negli strumenti ha migliorato la tua
esperienza?», che presume che il miglioramento ci sia stato anziché chiedere in
modo neutrale se ci sia stato.

### Usa scale di risposta coerenti e fai una prova pilota delle nuove domande prima del lancio esteso

Standardizza una scala di risposta coerente (una scala [Likert](https://en.wikipedia.org/wiki/Likert_scale)
a cinque o sette punti è comune e ben studiata) in tutto lo strumento di sondaggio,
così che le risposte siano confrontabili tra domande e nel tempo. Prova ogni nuova
domanda con un piccolo gruppo prima di estenderla a tutta l'organizzazione, per
cogliere formulazioni ambigue o interpretazioni inattese prima che corrompano un
intero insieme di dati.

### Tratta il tasso di risposta come un segnale diagnostico a sé

Traccia il tasso di risposta al sondaggio su cicli successivi, e tratta un tasso in
calo come un segnale d'allarme da indagare direttamente, in modo simile al segnale
di fiducia discusso nell'argomento 3.2. Un tasso di risposta in calo indica spesso
stanchezza da sondaggio, fiducia che si erode sul fatto che i risultati portino ad
azioni, o un crescente sospetto che l'anonimato non sia davvero protetto, tutte
cose che meritano un'indagine diretta anziché essere liquidate come semplice
fastidio di raccolta dati.

### Combina i dati del sondaggio con la strumentazione DevEx oggettiva

Abbina le risposte soggettive del sondaggio a segnali oggettivi dove esistono:
tempo di build, tempo di esecuzione della suite di test, tempo di configurazione
dell'ambiente di sviluppo locale, e i dati di tempo di flusso e di interruzione
dell'argomento 3.6. Una risposta di sondaggio che dice «la nostra build è troppo
lenta» diventa molto più azionabile abbinata al trend effettivo misurato del tempo
di build, e la combinazione coglie i casi in cui percezione e realtà oggettiva
divergono in una direzione o nell'altra, cosa che merita di per sé un'indagine.

### Chiudi il cerchio: pubblica i risultati e un'azione di seguito visibile

Dopo ogni ciclo di sondaggio, pubblica una sintesi onesta dei risultati, inclusi
quelli che la dirigenza preferirebbe non mettere in evidenza, e impegnati
pubblicamente ad almeno un'azione concreta intrapresa in risposta. Un sondaggio che
non produce alcun seguito visibile insegna a chi risponde che il proprio contributo
onesto non conta, il che degrada sia il tasso di risposta sia l'onestà delle
risposte in ogni ciclo successivo. Questa disciplina del chiudere il cerchio è
spesso il fattore singolarmente più determinante per stabilire se un programma di
sondaggi DevEx resti utile per più anni o decada lentamente in un esercizio di
adempimento formale.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Sondaggio lungo e completo | Dati ricchi e dettagliati su molti temi | Tasso di risposta più basso, maggiore stanchezza, più spazio per domande progettate male |
| Sondaggio breve e mirato | Tasso di risposta più alto, più facile da progettare bene | Meno copertura; può perdere un problema emergente fuori dal focus scelto |
| Solo dati di sondaggio | Cattura direttamente l'esperienza soggettiva | Vulnerabile alla distorsione e non verificabile rispetto alla realtà oggettiva |
| Sondaggio combinato con strumentazione oggettiva | Coglie la divergenza tra percezione e realtà, più azionabile | Richiede più sforzo di integrazione dei dati |

La tensione centrale è **copertura contro qualità delle risposte**. Un sondaggio più
lungo e completo copre più terreno ma degrada il tasso di risposta e aumenta il
rischio che passino domande progettate male; un sondaggio breve e mirato ottiene
risposte di qualità migliore ma rischia di perdere qualcosa di importante fuori dal
suo ambito. Si risolve la tensione tenendo breve e ben collaudato il sondaggio
ricorrente di base, e usando occasionali sondaggi di approfondimento
chiaramente etichettati per temi specifici che richiedono un'esplorazione più
dettagliata, anziché cercare di coprire tutto in ogni ciclo.

## Domande da discutere con il vostro team

1. **Abbiamo mai collaudato una nuova domanda di sondaggio con un piccolo gruppo
   prima di estenderla, o le nuove domande vanno dritte nel sondaggio completo?**
   Saltare il passo pilota è un modo comune per cui domande ambigue o a doppio
   oggetto finiscono per corrompere un intero insieme di dati prima che qualcuno
   noti che la formulazione era poco chiara.

2. **Che cosa ha fatto il nostro tasso di risposta negli ultimi cicli di sondaggio,
   e abbiamo indagato un calo se c'è stato?** Trattate questo trend come un segnale
   genuino da discutere, non come un fastidio di raccolta dati da annotare di
   sfuggita.

3. **Combiniamo i dati del sondaggio con qualche strumentazione oggettiva, o la
   percezione soggettiva sta interamente da sola nella nostra reportistica?**
   Individuate almeno un punto in cui abbinare una domanda di sondaggio a dati
   oggettivi, tempo di build, frequenza di rilascio, potrebbe rendere il risultato
   più azionabile.

4. **Quale azione concreta abbiamo intrapreso come risultato diretto e visibile
   dell'ultimo ciclo di sondaggio, e l'abbiamo comunicata a chi ha risposto?** Se la
   risposta onesta è «niente di visibile», quella lacuna sta probabilmente già
   erodendo la fiducia nello strumento, che sia già emersa o no nel tasso di
   risposta.

5. **Alcune delle nostre attuali domande di sondaggio sono suggestive o a doppio
   oggetto, e ce ne accorgeremmo?** Rivedete come esercizio di gruppo le vostre
   domande effettive attuali rispetto a questa specifica verifica.

6. **Come si confrontano i nostri dati di sondaggio DevEx o SPACE con i segnali
   oggettivi quando i due sembrano in disaccordo, e che cosa ci dice quel
   disaccordo?** Un caso in cui percezione e dati oggettivi divergono è spesso più
   prezioso dal punto di vista diagnostico di uno in cui concordano, dato che il
   divario stesso è informativo.

## Prospettiva settoriale

**Startup.** Un semplice sondaggio lampo molto breve, a volte solo una o due
domande, condotto in modo informale e frequente, basta di solito a questa scala, e
il rigore formale nella progettazione dello strumento conta meno quando un
fondatore può ancora avere regolarmente una conversazione diretta con quasi tutti.

**Piccola impresa.** Uno strumento di sondaggio gratuito o a basso costo con una
breve serie adattata di domande, condotto ogni trimestre, cattura qui la maggior
parte del valore senza bisogno di competenze dedicate di progettazione di sondaggi.
Date priorità alla disciplina del chiudere il cerchio rispetto alla sofisticazione;
anche un piccolo team trae vantaggio dall'agire in modo visibile su ciò che un breve
sondaggio rivela.

**Enterprise.** La qualità della progettazione del sondaggio conta enormemente a
scala, perché una domanda difettosa o una garanzia di anonimato violata corrompe i
dati di migliaia di rispondenti in una volta, e le conclusioni sbagliate con
sicurezza che ne derivano possono dirigere male decisioni significative sulle
risorse. Investite in vere competenze di progettazione di sondaggi, o collaborate con
una piattaforma consolidata di misurazione della DevEx, anziché costruire uno
strumento improvvisato internamente.

**Settore pubblico.** Il tasso di risposta e la fiducia sono particolarmente fragili
in organizzazioni dove il personale può già essere diffidente su come i dati vengono
usati internamente. Investite più del necessario in garanzie trasparenti di
anonimato e in azioni di seguito visibili, proprio per costruire la fiducia che
rende raggiungibile un tasso di risposta onesto in un contesto in cui lo scetticismo
sull'uso dei dati può già essere più alto che in un tipico ambiente privato.

## Esempi

**Enterprise.** Il primo sondaggio DevEx di un'azienda software includeva una
domanda che chiedeva agli ingegneri di valutare la «soddisfazione per strumenti e
processo», una domanda a doppio oggetto che fondeva due preoccupazioni molto
diverse. Quando il punteggio combinato tornò mediocre, la dirigenza non seppe dire
se il problema fossero gli strumenti, il processo o entrambi, e i primi sforzi di
rimedio mirarono all'area sbagliata per due trimestri. Dividere la domanda in una
revisione successiva rivelò che il punteggio sugli strumenti era in realtà forte e
quello sul processo scarso, reindirizzando l'investimento verso la semplificazione
di un macchinoso processo di approvazione dei rilasci, che produsse un
miglioramento misurabile della soddisfazione in un trimestre, a differenza dello
sforzo precedente incentrato sugli strumenti che aveva mostrato poco effetto.

**Settore pubblico.** Il primo sondaggio DevEx di un'agenzia digitale nazionale ebbe
un tasso di risposta inferiore al 30%, e una revisione interna scoprì che il
personale riteneva ampiamente, a ragione come si scoprì, che i singoli manager
potessero vedere chi aveva e chi non aveva risposto, anche se i risultati aggregati
dovevano essere anonimi. L'agenzia passò a una piattaforma di sondaggi davvero
indipendente e di terze parti con anonimato verificato, comunicò il cambiamento in
modo esplicito e ripetuto, e pubblicò una sintesi chiara dei risultati del ciclo
precedente insieme a tre azioni concrete intraprese in risposta. Il tasso di
risposta salì oltre il 70% in due cicli, e la dirigenza dell'agenzia attribuì
specificamente alla combinazione di anonimato genuino e azione di seguito visibile
il motivo per cui la fiducia nello strumento si era ripresa.

## Business case: motivazioni, ROI e TCO

Il ritorno di un programma di sondaggi DevEx ben progettato sono dati affidabili e
azionabili su una dimensione, l'esperienza degli sviluppatori, che altrimenti resta
invisibile finché non emerge come turnover o rallentamento della consegna.
L'esempio dell'azienda software qui sopra mostra il costo di sbagliare la
progettazione: due trimestri di sforzo di rimedio mal diretto perché una singola
domanda formulata male fondeva due preoccupazioni distinte.

Il costo totale di proprietà comprende gli strumenti di sondaggio, la disciplina di
progettazione e di prova pilota che questo argomento raccomanda e l'impegno continuo
a chiudere il cerchio con un'azione di seguito visibile a ogni ciclo. Quell'impegno,
più di qualsiasi costo di strumenti, determina se un programma di sondaggi resta
utile per anni o decade in un esercizio di adempimento formale che produce nel tempo
dati sempre meno affidabili.

## Antipattern e insidie

- **Domande a doppio oggetto o suggestive:** fondono preoccupazioni distinte o
  distorcono le risposte, e spesso passano inosservate senza una prova pilota.
- **Saltare il passo pilota per le nuove domande:** lascia che una formulazione
  ambigua corrompa un intero insieme di dati su larga scala.
- **Ignorare un tasso di risposta in calo:** perde un importante segnale di fiducia
  a sé stante.
- **Non chiudere mai il cerchio con un'azione di seguito visibile:** addestra chi
  risponde a pensare che il contributo onesto non conti, degradando la qualità dei
  dati futuri.
- **Trattare i dati del sondaggio come sufficienti da soli, senza conferma
  oggettiva:** perde i casi in cui percezione e realtà divergono in una direzione o
  nell'altra.
- **Garanzie di anonimato deboli o non verificabili:** il modo singolarmente più
  rapido di far crollare sia il tasso di risposta sia l'onestà delle risposte.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le domande del sondaggio sono improvvisate e non
  collaudate, il tasso di risposta non è tracciato come segnale e i risultati
  portano raramente ad azioni visibili.
- **Livello 2, Sviluppo (Develop):** Esiste una certa disciplina di progettazione del
  sondaggio, ma la prova pilota è incoerente e il cerchio non è chiuso in modo
  affidabile con chi risponde.
- **Livello 3, Standardizzazione (Standardize):** Le domande sono collaudate prima
  del lancio, il tasso di risposta è tracciato e indagato quando cala, e i
  risultati sono pubblicati in modo coerente con almeno un'azione concreta di
  seguito.
- **Livello 4, Gestione (Manage):** I dati del sondaggio sono combinati
  sistematicamente con la strumentazione oggettiva, e la divergenza tra i due è
  indagata attivamente come segnale diagnostico.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha un programma di
  sondaggi maturo, affidabile e pluriennale, con tassi di risposta costantemente
  alti, azione visibile dimostrabile a ogni ciclo e una storia di domande
  progettate male individuate e corrette prima che corrompessero i dati.

## Spunti di discussione

1. Qualche domanda attuale del nostro strumento di sondaggio ha mai confuso o fuorviato chi rispondeva?
2. Qual è stata l'ultima azione concreta che abbiamo intrapreso come risultato diretto dei dati di un sondaggio?
3. Come ci accorgeremmo che la nostra garanzia di anonimato è stata violata, anche per caso?
4. Dove i nostri dati di sondaggio concordano o discordano con la strumentazione oggettiva, e che cosa ci dice?
5. Che cosa servirebbe per raddoppiare il nostro attuale tasso di risposta?

## Punti chiave

- La **qualità della progettazione** del sondaggio, domande chiare, a concetto
  singolo e non distorte, conta più della lunghezza o della sofisticazione.
- **Il tasso di risposta è un segnale a sé**; indaga un calo anziché trattarlo come
  un semplice fastidio.
- **Combina i dati del sondaggio con la strumentazione oggettiva** per cogliere la
  divergenza tra percezione e realtà.
- **Chiudi il cerchio**: pubblica risultati e azione di seguito visibile a ogni
  ciclo, o la fiducia nello strumento si eroderà.
- **DevEx e SPACE sono complementari**, non concorrenti, impostazioni della stessa
  preoccupazione di fondo per l'esperienza degli sviluppatori.

## Riferimenti e letture di approfondimento

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren e Michaela Greiler, "DevEx: What
  Actually Drives Productivity," *ACM Queue* (2023): il framework DevEx di cicli di
  feedback, carico cognitivo e stato di flusso.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann,
  Brian Houck e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue*
  (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and Win in
  the 21st Century*, di Jeff Lawson (investimento organizzativo nell'esperienza
  degli sviluppatori).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, di Louis M.
  Rea e Richard A. Parker (metodologia generale di progettazione di sondaggi
  applicabile agli strumenti DevEx).
