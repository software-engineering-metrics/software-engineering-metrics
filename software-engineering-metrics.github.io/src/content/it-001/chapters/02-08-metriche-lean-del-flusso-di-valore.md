# 2.8 Metriche Lean del flusso di valore

## Panoramica e motivazione

Ogni metrica che questa parte ha trattato finora, Flow Time, Flow Load, cycle
time, utilizzo, discende da uno strumentario molto più antico: le cinque misure di
base della classica mappatura del flusso di valore **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**,
sviluppata alla Toyota e generalizzata in produzione, operazioni ed erogazione di
servizi molto prima che il software le adottasse. Il **lead time (LT)** è il tempo
totale d'orologio da quando il lavoro viene richiesto a quando viene consegnato. Il
**process time (PT)** è il tempo effettivo di lavoro manuale speso su una singola
unità. Il **cycle time (CT)** è il tempo medio richiesto per completare un singolo
nodo o fase all'interno del flusso. La **percentuale completa e accurata (%C/A)** è
la percentuale di unità che un team a valle può elaborare senza bisogno di
rifacimento. Il **takt time** è il tempo massimo accettabile per completare
un'unità in modo da corrispondere correttamente alla domanda dei clienti.

Questo argomento esiste perché l'ingegneria del software non ha inventato queste
idee, le ha prese in prestito, e il prestito ha talvolta riusato le stesse parole
per cose leggermente diverse. Il cycle time di questo libro (argomento 2.6) misura
specificamente le fasi di ingegneria di un cambiamento, scrittura del codice,
revisione, test, rilascio, mentre il CT classico del Lean è il più generale
«tempo medio per nodo» applicato a qualsiasi processo. Il Flow Time (argomento 2.4)
è il nome che questo libro dà a ciò che il Lean chiama lead time. Conoscere la
corrispondenza conta perché un lettore con un background di Lean Six Sigma, comune
in produzione, logistica, sanità e operazioni governative, userà questi termini
esatti con i loro significati originali, e un team di software che non parla la
stessa lingua rinuncia a un ponte facile e documentato verso i colleghi fuori
dall'ingegneria.

Per i team grandi, la %C/A è la metrica meno sfruttata di questo argomento. Cattura
qualcosa che le metriche di flusso degli argomenti 2.3 e 2.4 non catturano: quanto
di ciò che una fase produce è effettivamente utilizzabile dalla fase successiva
senza essere rimandato indietro. Aggregata su un flusso di valore a più fasi, un
concetto che la produzione chiama **rolled throughput yield** (resa cumulativa di
processo), la %C/A rivela come il rifacimento si componga in modo invisibile
attraverso i passaggi di consegna, uno schema a cui sono particolarmente inclini
le organizzazioni enterprise con pipeline lunghe e multi-team e i programmi
governativi con più varchi di approvazione, e che raramente misurano direttamente.

## Principi chiave

- **Queste cinque metriche precedono il software e si generalizzano oltre di esso.**
  Sono il vocabolario comune che uno stakeholder formato in Lean Six Sigma, comune
  nelle grandi imprese e nelle operazioni governative, parla già con fluidità.
- **La collisione terminologica è reale e vale la pena nominarla esplicitamente.**
  Il cycle time di questo libro (argomento 2.6) e il CT classico del Lean sono
  collegati ma non identici; documenta la corrispondenza perché le conversazioni
  interfunzionali non parlino in silenzio a vuoto.
- **La %C/A va aggregata su ogni fase, non misurata una sola volta alla fine.** Il
  rifacimento introdotto presto in un flusso e intercettato tardi è invisibile a una
  metrica misurata solo alla consegna finale.
- **Il takt time reimposta la pianificazione della capacità attorno alla domanda,
  non allo sforzo.** La domanda passa da «quanto in fretta possiamo andare» a
  «quanto in fretta dobbiamo andare», il che si collega direttamente all'utilizzo
  (argomento 2.7) e al Flow Load (argomento 2.4).
- **Sono metriche diagnostiche, non metriche di vanità.** Ciascuna esiste per
  rispondere a una specifica domanda operativa, non per produrre un numero
  impressionante per una dashboard.

## Raccomandazioni

### Mappa il tuo flusso di valore con tutte e cinque le metriche Lean prima di adottare un framework specifico per il software

Calcola lead time, process time, cycle time, %C/A e takt time per un campione
rappresentativo di lavoro che attraversa il tuo flusso di valore prima di
sovrapporre le metriche proprie del Flow Framework (argomenti 2.3 e 2.4). Questo ti
dà una linea di base che qualsiasi stakeholder esperto di Lean Six Sigma capisce
subito, e spesso fa emergere la stessa dominanza del tempo di attesa che descrive
l'argomento 2.5, espressa in un vocabolario che precede e sopravvive a qualsiasi
particolare framework di software.

### Aggrega la percentuale completa e accurata in modo moltiplicativo su ogni fase

Misura la %C/A in ogni fase individualmente, poi moltiplica tra loro le percentuali
a livello di fase per ottenere il rolled throughput yield del flusso di valore. Tre
fasi che funzionano ciascuna al 90% di completezza e accuratezza si compongono in
circa il 73% complessivo, un numero che non assomiglia affatto al rapporto di
nessuna singola fase ed è di solito il più onesto. Questo singolo calcolo è il modo
più rapido per rivelare quanto rifacimento una pipeline a più fasi stia davvero
assorbendo.

### Fissa il takt time esplicitamente da dati reali di domanda dei clienti, non dalla capacità

Calcola il takt time come tempo di lavoro disponibile diviso per la domanda dei
clienti in quel periodo, in modo deliberatamente indipendente da quanto in fretta
il tuo team riesce a lavorare oggi. Confronta il tuo process time e cycle time
misurati con questo numero: un process time ampiamente sotto il takt time indica
un margine sano, mentre un cycle time che supera il takt time è una prova concreta
e quantificata di un deficit di capacità, non solo la sensazione di essere in
ritardo.

### Documenta la corrispondenza tra i termini Lean e il vocabolario proprio di questo libro

Dove la tua organizzazione già conduce un programma di Lean Six Sigma fuori dal
software, o dove l'ingegneria risponde a una dirigenza fluente in quel vocabolario,
scrivi la corrispondenza esplicitamente nella tua carta delle metriche (argomento
1.4): il Flow Time di questo libro è il lead time del Lean, il cycle time di questo
libro (argomento 2.6) è un'applicazione specifica del CT più generale del Lean, e il
tempo attivo di questo libro (argomento 2.5) è il process time del Lean. Questo
singolo documento previene una discussione ricorrente e di poco valore su quali
numeri siano «veri».

### Usa la %C/A come guardrail accanto alla Flow Velocity, non in sua sostituzione

Abbina il rolled throughput yield alla Flow Velocity (argomento 2.3) nello stesso
modo in cui questo libro abbina ogni metrica di velocità a un guardrail di
stabilità. Un conteggio di item in crescita con una %C/A aggregata in calo
significa che il flusso di valore consegna più unità che richiedono sempre più
rifacimento in seguito, esattamente il tipo di schema di velocità senza qualità da
cui l'argomento 1.2 mette in guardia ogni famiglia di metriche.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Solo metriche Lean classiche (LT, PT, CT, %C/A, takt time) | Vocabolario universale; funziona sia per team di software sia non | Non specifico per il software; richiede traduzione per le fasi specifiche dell'ingegneria |
| Solo metriche del Flow Framework (argomenti 2.3, 2.4) | Costruite apposta per i flussi di valore del software e la visibilità dei tipi di item | Poco familiari agli stakeholder formati in Lean Six Sigma fuori dall'ingegneria |
| Entrambe, con una corrispondenza esplicita documentata | Parla entrambi i vocabolari; il ponte interfunzionale più forte | Richiede la disciplina iniziale di scrivere la corrispondenza e tenerla aggiornata |
| %C/A misurata solo alla consegna finale | Semplice, un solo numero | Nasconde il rifacimento introdotto e intercettato prima nel flusso |

La tensione centrale è **universalità contro specificità**. Le metriche Lean
classiche sono immediatamente leggibili da chiunque abbia esperienza di
produzione, operazioni o Six Sigma, ma non sono state progettate pensando alle
fasi specifiche del software, revisione del codice, test automatici, approvazione
dei rilasci. Si risolve la tensione usando le metriche Lean come vocabolario di
base condiviso per le conversazioni interfunzionali e dirigenziali, e le metriche
proprie del Flow Framework (argomenti 2.3 e 2.4) per il lavoro diagnostico
specifico del software che i team di ingegneria svolgono ogni giorno.

## Domande da discutere con il vostro team

1. **Potremmo calcolare oggi tutte e cinque le metriche Lean classiche per il
   nostro flusso di valore, o ne abbiamo solo alcune?** La maggior parte dei team
   di software ha equivalenti di Flow Time e cycle time ma non ha mai calcolato
   esplicitamente process time, %C/A o takt time. Individuate quali delle cinque
   mancano davvero prima di presumere che la lacuna sia piccola.

2. **Abbiamo mai aggregato la %C/A su ogni fase del nostro flusso di valore, o
   l'abbiamo misurata solo alla consegna finale?** Una singola misura a fine
   flusso nasconde esattamente il rifacimento che si compone e che il calcolo del
   rolled throughput yield di questo argomento è progettato per rivelare. Tentate
   il calcolo di aggregazione con dati reali.

3. **Conosciamo il nostro takt time, calcolato dalla domanda effettiva dei clienti,
   e come si confronta il nostro cycle time misurato con esso?** La maggior parte
   dei team non ha mai reso esplicito questo confronto, il che significa che le
   conversazioni sulla capacità restano aneddotiche anziché quantificate.

4. **Se uno stakeholder formato in Lean Six Sigma da fuori dall'ingegneria ci
   chiedesse del nostro cycle time, saremmo sicuri di intendere la stessa cosa
   che intende lui?** Il cycle time di questo libro (argomento 2.6) e il CT classico
   del Lean sono collegati ma non identici. Discutete se quella distinzione abbia
   mai causato un vero malinteso nella vostra organizzazione.

5. **Il nostro rolled throughput yield è mai stato in modo significativo più basso
   della %C/A riportata da una qualsiasi singola fase?** Se non avete mai calcolato
   l'aggregazione, discutete che cosa vi aspettereste di trovare e poi verificatelo
   con dati reali.

6. **La nostra organizzazione già conduce un programma Lean o Six Sigma fuori dal
   software con cui potremmo allinearci invece di mantenere un vocabolario separato
   e scollegato?** Molte imprese e agenzie governative hanno già questa
   infrastruttura; controllate se l'ingegneria vi si sia mai davvero collegata.

## Prospettiva settoriale

**Startup.** La mappatura completa del flusso di valore Lean raramente vale la
cerimonia a questa scala, ma il takt time vale la pena di essere compreso in modo
informale: sapere all'incirca quanto in fretta il team deve davvero muoversi per
corrispondere alla domanda reale dei clienti, anziché a un ritmo interno
arbitrario, previene sia il sovradimensionare la capacità troppo presto sia il
sottodimensionarla quando arriva la crescita.

**Piccola impresa.** La %C/A è la più immediatamente utile delle cinque metriche
qui, dato che risponde direttamente a «quanto di ciò che rilasciamo va rifatto»,
una domanda che i titolari e i piccoli team sentono acutamente senza avere sempre
un numero da associarvi. Tracciatela in modo informale per i vostri uno o due
processi critici prima di investire in qualcosa di più elaborato.

**Enterprise.** È qui che il vocabolario Lean classico si guadagna il pane, perché
le grandi imprese conducono molto spesso già un programma di Lean Six Sigma nelle
operazioni, nelle divisioni affini alla produzione o nei servizi condivisi, e
un'ingegneria che parla la stessa lingua guadagna un ponte immediato e credibile
verso quelle funzioni anziché dover giustificare da zero un insieme separato di
metriche solo per il software.

**Settore pubblico.** Le agenzie governative, soprattutto quelle con radici in
funzioni di regolamentazione, affini alla produzione o logistiche, hanno spesso
mandati esistenti di Lean o di miglioramento dei processi. Inquadrare il flusso di
valore di un servizio digitale negli stessi termini classici, lead time, process
time, %C/A, takt time, che l'ufficio di miglioramento dei processi di un'agenzia
già usa è spesso il modo più rapido per ottenere un reale sostegno istituzionale a
uno sforzo di modernizzazione del software.

## Esempi

**Enterprise.** La divisione software interna di un'azienda manifatturiera aveva
faticato per anni per far prendere sul serio le proprie metriche di ingegneria da
una dirigenza operativa fluente in Lean Six Sigma dal reparto produttivo.
Reinquadrare la pipeline di consegna della divisione con le stesse cinque metriche
classiche, calcolando lead time, process time, cycle time, %C/A e takt time per il
suo flusso di valore software, rese immediatamente leggibili per la prima volta i
numeri della divisione alla dirigenza operativa. Un calcolo del rolled throughput
yield sulle quattro fasi della pipeline rivelò una %C/A effettiva del 61%, ben al
di sotto del numero riportato da qualsiasi singola fase, che divenne la base di
prove per un'iniziativa di riduzione del rifacimento che la dirigenza operativa
finanziò nello stesso trimestre.

**Settore pubblico.** Il team dei permessi digitali di un dipartimento statale dei
trasporti, che rispondeva a un'agenzia con un ufficio di miglioramento dei processi
Lean di lunga data, non aveva mai coinvolto quell'ufficio perché le proprie metriche
usavano un linguaggio specifico del software che l'ufficio non riconosceva. Dopo
aver tradotto il flusso di valore dei permessi in lead time, process time e %C/A,
l'ufficio di miglioramento dei processi individuò che il vero vincolo del team non
era la velocità dell'ingegneria ma una fase di revisione legale a valle che
funzionava ben al di sotto del proprio takt time effettivo rispetto alla domanda di
permessi, una scoperta su cui l'ufficio era attrezzato per agire subito perché
inquadrata in termini familiari.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'adottare il vocabolario Lean classico accanto alle metriche
specifiche del software di questo libro è un ponte credibile e immediato verso
competenze e finanziamenti per il miglioramento dei processi che spesso esistono
già altrove in una grande organizzazione. L'esempio dell'azienda manifatturiera qui
sopra, che ottiene fondi per la riduzione del rifacimento nello stesso trimestre in
cui il reinquadramento ha reso leggibile il caso, è lo schema che l'approccio di
questo argomento produce in modo affidabile: l'intuizione non era nuova, ma lo era
il vocabolario che l'ha resa azionabile per il pubblico giusto.

Il costo totale di proprietà è basso: queste cinque metriche non richiedono nuova
strumentazione oltre a ciò che gli argomenti dal 2.4 al 2.6 già raccolgono, più una
classificazione del rifacimento per la %C/A che è di solito una semplice aggiunta
al tracciamento esistente di difetti e flow item (argomento 2.2). L'investimento
principale è la traduzione, scrivere la corrispondenza tra i termini di questo libro
e quelli classici del Lean, che si ripaga la prima volta che previene un malinteso
interfunzionale.

## Antipattern e insidie

- **Misurare la %C/A solo alla consegna finale:** il vettore di manipolazione al
  centro di questo argomento. Un team può riportare un'alta %C/A nella fase finale
  mentre le fasi precedenti producono in silenzio rifacimento che viene corretto
  prima che qualcuno misuri, facendo apparire l'intero flusso di valore più sano di
  quanto sia. Il guardrail è aggregare la %C/A in modo moltiplicativo su ogni fase,
  il calcolo del rolled throughput yield, e verificare periodicamente la definizione
  di «completo e accurato» di ogni fase perché non si restringa in silenzio nel
  tempo.
- **Presumere che il cycle time di questo libro e il CT classico del Lean
  significhino esattamente la stessa cosa:** produce reale confusione
  interfunzionale quando i due vocabolari si incontrano senza una corrispondenza
  documentata.
- **Fissare il takt time dalla capacità attuale anziché dalla domanda reale dei
  clienti:** vanifica lo scopo della metrica, che è rivelare un divario tra domanda
  e capacità, non confermare qualsiasi ritmo già esistente.
- **Trattare le metriche Lean classiche come obsolete una volta adottato un
  framework specifico per il software:** scarta un ponte credibile e documentato
  verso competenze di miglioramento dei processi che possono già esistere
  nell'organizzazione.
- **Ignorare un programma Lean Six Sigma esistente altrove nell'organizzazione:**
  fa perdere finanziamenti, competenze e credibilità istituzionale che il
  reinquadrare le metriche di consegna in un linguaggio condiviso potrebbe sbloccare.
- **Riportare la %C/A senza abbinarla alla Flow Velocity:** permette a un numero di
  throughput in crescita di nascondere un tasso di rifacimento in calo, la stessa
  lacuna di guardrail da cui questo libro mette in guardia ovunque.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Nessuna delle cinque metriche Lean classiche è
  calcolata; la consegna è discussa senza riferimento a lead time, process time o
  %C/A.
- **Livello 2, Sviluppo (Develop):** Lead time e cycle time sono tracciati in modo
  informale, ma process time, %C/A e takt time non sono calcolati, e non esiste una
  corrispondenza con il vocabolario proprio di questo libro.
- **Livello 3, Standardizzazione (Standardize):** Tutte e cinque le metriche
  classiche sono calcolate in modo coerente, e la corrispondenza con il vocabolario
  di flusso e cycle time di questo libro è documentata in una carta delle metriche
  condivisa.
- **Livello 4, Gestione (Manage):** Il rolled throughput yield è calcolato su ogni
  fase del flusso di valore, e il takt time è confrontato con il cycle time
  misurato per quantificare esplicitamente i divari di capacità.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha collegato le
  proprie metriche di consegna del software a un programma Lean o Six Sigma
  esistente altrove nell'azienda, e sa indicare decisioni specifiche di
  investimento o di processo prese perché il vocabolario condiviso ha reso
  un'intuizione azionabile per un pubblico non ingegneristico.

## Spunti di discussione

1. Potremmo calcolare oggi lead time, process time, cycle time, %C/A e takt time per il nostro flusso di valore?
2. Quale sarebbe il nostro rolled throughput yield se moltiplicassimo tra loro la %C/A di ogni fase?
3. La nostra organizzazione conduce già un programma Lean o Six Sigma a cui non abbiamo mai collegato le metriche di ingegneria?
4. Come si confronta il nostro cycle time misurato con il nostro takt time, calcolato dalla domanda reale dei clienti?

## Punti chiave

- Le cinque metriche Lean classiche, **lead time, process time, cycle time,
  percentuale completa e accurata e takt time**, precedono il software e restano
  il vocabolario comune degli stakeholder formati in Lean Six Sigma.
- Il **Flow Time e il cycle time di questo libro corrispondono, ma non sono
  identici**, al lead time e al CT classico del Lean; documenta esplicitamente la
  corrispondenza per evitare confusione interfunzionale.
- Il vettore di manipolazione centrale dell'argomento è **misurare la %C/A solo
  alla consegna finale**; il guardrail è aggregarla in modo moltiplicativo su ogni
  fase come rolled throughput yield.
- Il **takt time reimposta la capacità attorno alla domanda reale dei clienti**,
  non al ritmo esistente, e si abbina direttamente all'utilizzo (argomento 2.7) e
  al Flow Load (argomento 2.4).
- Reinquadrare la consegna del software in termini Lean classici è spesso il modo
  più rapido per collegarsi a **competenze e finanziamenti di miglioramento dei
  processi** già presenti in una grande organizzazione.

## Riferimenti e letture di approfondimento

- Rother, Mike, e John Shook. *Learning to See: Value Stream Mapping to Create
  Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., e Daniel T. Jones. *Lean Thinking: Banish Waste and Create
  Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones e Daniel Roos. *The Machine That Changed the
  World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and Six
  Sigma Quality to Improve Services and Transactions*. McGraw-Hill, 2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*.
  Productivity Press, 1988.
