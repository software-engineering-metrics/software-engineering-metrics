# 7.3 Rischi di gonfiatura delle metriche e di diluizione della qualità

## Panoramica e motivazione

Questo argomento nomina, in modo diretto e specifico, le due modalità di fallimento da
cui l'argomento 7.1 avvertiva che l'intero framework di questo libro debba difendersi
man mano che lo sviluppo assistito dall'IA diventa pratica standard: la **gonfiatura
delle metriche** (metric inflation), numeri che salgono senza un valore reale
corrispondente, e la **diluizione della qualità** (quality dilution), un'erosione
graduale della qualità del codice che supera l'attuale capacità del settore di
rilevarla con le pratiche esistenti di revisione e collaudo. Non sono nuove categorie
di rischio che questo libro non abbia già nominato: la gonfiatura delle metriche è la
legge di Goodhart dell'argomento 1.2 e la sua manipolazione per sostituzione applicate
su larga scala, e la diluizione della qualità è il divario tra copertura ed efficacia
dell'argomento 4.2 e la preoccupazione sui difetti sfuggiti dell'argomento 5.1,
entrambi intensificati. Ciò che è nuovo è la velocità e la scala con cui l'IA generativa
può produrre entrambe le modalità di fallimento contemporaneamente, più in fretta di
quanto i guardrail esistenti di gran parte delle organizzazioni fossero progettati per
cogliere.

Il meccanismo specifico di cui si occupa questo argomento è sottile: il codice generato
dall'IA molto spesso sembra corretto. Segue idiomi familiari, usa nomi di variabili
plausibili e supera una lettura superficiale molto più affidabilmente di quanto faccia
tipicamente il codice scritto da persone in modo davvero trascurato, proprio perché è
stato addestrato su un vasto corpus di codice che sembrava corretto. Questo rende i
difetti generati dall'IA più difficili da cogliere per un revisore umano con il tipo
di revisione per riconoscimento di schemi, «questo sembra giusto?», che coglie molti
bug introdotti da persone, perché la versione generata dall'IA è ottimizzata
specificamente, in senso statistico, per sembrare giusta che lo sia davvero o no.

Per i team grandi, i rischi di questo argomento si compongono con la scala in un modo
che dovrebbe preoccupare in particolare le organizzazioni enterprise e governative: la
gonfiatura delle metriche su decine di team contemporaneamente può produrre un falso
segnale a livello di organizzazione di produttività migliorata che richiede tempo e
analisi significativi per essere disfatto, esattamente come mostrava l'esempio della
tecnologia finanziaria dell'argomento 7.1. La diluizione della qualità che supera la
capacità di rilevamento è ancora più grave nei contesti regolamentati, critici per la
sicurezza o di fiducia del pubblico, dove il costo di un difetto non rilevato che
raggiunge la produzione comporta conseguenze ben oltre la preoccupazione ingegneristica
immediata.

## Principi chiave

- **Gonfiatura delle metriche e diluizione della qualità sono versioni intensificate
  di rischi che questo libro ha già nominato**, non categorie del tutto nuove; i
  guardrail esistenti valgono ancora, ma devono lavorare di più.
- **La qualità di «sembrare corretto» del codice generato dall'IA rende specificamente
  più difficile per una revisione umana basata sul riconoscimento di schemi cogliere
  difetti sottili.** È un rischio distinto dal normale errore umano.
- **La velocità di questo cambiamento può superare la capacità di un'organizzazione di
  adattare i propri guardrail**, creando una finestra di esposizione genuina e limitata
  nel tempo.
- **Le metriche di qualità esistenti (Parte 4) restano preziose ma possono richiedere
  una ricalibrazione**, non una sostituzione, alla luce di questo nuovo profilo di
  rischio.
- **Anche la capacità di rilevamento richiede un investimento deliberato**, dato che
  le pratiche di revisione e di collaudo che questo libro tratta sono state progettate
  prima che questo rischio specifico esistesse a questa scala.

## Raccomandazioni

### Ricalibra le soglie del tasso di fallimento dei cambiamenti e dei difetti sfuggiti per il lavoro ad alta intensità di IA

Dove un team o un'area di codice ha adottato in modo intenso l'assistenza dell'IA,
applica il tracciamento pesato per gravità degli argomenti 2.4 e 5.1 con maggiore
sensibilità, almeno finché la tua organizzazione non avrà costruito prove sufficienti
(argomento 7.2) per sapere se il rapporto storico tra queste metriche e il rischio
genuino valga ancora invariato per il lavoro assistito dall'IA in particolare. Tratta
questa ricalibrazione come una postura temporanea di raccolta di prove, non come
un'assunzione permanente e non esaminata in una direzione o nell'altra.

### Investi in particolare in una capacità di rilevamento che resista al problema del «sembra corretto»

La tradizionale revisione del codice, che si affida molto al riconoscimento di schemi
da parte del revisore per ciò che sembra giusto, è specificamente indebolita contro
codice generato dall'IA dall'aspetto plausibile ma sottilmente scorretto. Investi di
conseguenza di più in metodi di rilevamento che non si affidino al riconoscimento
visivo di schemi: il [mutation testing](https://en.wikipedia.org/wiki/Mutation_testing)
(argomento 4.2), che verifica il comportamento effettivo anziché l'aspetto, e il
collaudo basato su proprietà o su invarianti, che verifica la correttezza logica
anziché la plausibilità superficiale, diventano entrambi sproporzionatamente più
preziosi proprio a causa di questo cambiamento.

### Fai attenzione alla gonfiatura delle metriche lungo l'intera pipeline di consegna, non solo nel punto di generazione del codice

La gonfiatura delle metriche dovuta allo sviluppo assistito dall'IA non si limita alla
fase di scrittura del codice; può propagarsi lungo l'intera catena del cycle time
(argomento 2.6): un volume maggiore di pull request generate dall'IA può gonfiare le
metriche di throughput delle pull request (argomento 2.9) anche mentre il segnale utile
che quella metrica era stata progettata per catturare, il genuino throughput del team,
resta piatto o addirittura cala una volta contati correttamente l'onere di revisione e
il costo di correzione. Verifica l'intero insieme di metriche per questo schema di
propagazione, non solo le metriche più ovvie e direttamente affini all'IA.

### Costruisci un piano di ricalibrazione esplicito e limitato nel tempo anziché una postura permanente di sospetto

L'esame rafforzato che questo argomento raccomanda è appropriato durante un periodo
attivo di adozione e di incertezza, ma non dovrebbe diventare una tassa permanente e non
esaminata sul lavoro assistito dall'IA a tempo indeterminato. Man mano che la tua
organizzazione costruisce prove reali attraverso la disciplina di misurazione
dell'argomento 7.2, rivedi soglie e guardrail in base a ciò che quelle prove mostrano
davvero, stringendo ulteriormente dove il rischio è confermato, allentando dove non lo
è, anziché ignorare del tutto il rischio o trattare ogni pezzo di codice assistito
dall'IA con un sospetto permanente e indifferenziato a prescindere dalle prove che si
accumulano.

### Comunica questo rischio in modo trasparente anziché trattarlo come ragione per resistere all'adozione dell'IA

Imposta le indicazioni di questo argomento come gestione del rischio per una nuova
capacità davvero preziosa, non come argomento contro lo sviluppo assistito dall'IA in
generale. Un'organizzazione che comunica chiaramente questi rischi specifici e
nominati e costruisce guardrail proporzionati contro di essi, esattamente come questo
libro raccomanda per ogni altra metrica e tecnica che tratta, adotta l'assistenza
dell'IA in modo più sicuro e più sostenibile di una che ignora il rischio o lo tratta
come ragione di resistenza generalizzata a un insieme di strumenti davvero utili.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessuna ricalibrazione, trattare il lavoro assistito dall'IA in modo identico al codice scritto da persone | Semplice, nessun cambiamento di processo | Perde un profilo di rischio elevato suggerito dalle prove |
| Esame rafforzato, permanente e generalizzato di tutto il codice assistito dall'IA | Massimizza la riduzione del rischio nel breve periodo | Tassa insostenibile su una capacità davvero preziosa; ignora le prove che si accumulano |
| Ricalibrazione limitata nel tempo e guidata dalle prove | Bilancia gestione del rischio e adozione sostenibile | Richiede una disciplina di misurazione continua (argomento 7.2) per sapere quando allentare l'esame |
| Investimento in metodi di rilevamento resistenti ai difetti del tipo «sembra corretto» | Affronta direttamente e in modo duraturo il nuovo rischio specifico | Richiede un investimento iniziale in infrastruttura di mutation testing e di collaudo basato su proprietà |

La tensione centrale è **cautela contro velocità di adozione**. Una cautela eccessiva e
permanente spreca gran parte del valore genuino dello sviluppo assistito dall'IA; una
cautela insufficiente rischia la gonfiatura delle metriche e la diluizione della
qualità che questo argomento nomina, potenzialmente su scala significativa prima del
rilevamento. Si risolve la tensione con l'approccio limitato nel tempo e guidato dalle
prove che questo argomento raccomanda: esame rafforzato ora, tarato verso il basso o
verso l'alto man mano che si accumulano prove reali dalla disciplina di misurazione
dell'argomento 7.2, anziché una politica generalizzata e permanente o un'assunzione non
esaminata che nulla sia cambiato.

## Domande da discutere con il vostro team

1. **Abbiamo ricalibrato le soglie del tasso di fallimento dei cambiamenti o dei
   difetti sfuggiti per il lavoro ad alta intensità di IA, o stiamo applicando
   invariate le soglie dell'era pre-IA?** Se invariate, discutete se rifletta una
   decisione deliberata e basata sulle prove o semplicemente un'assenza di attenzione
   alla questione.

2. **Abbiamo metodi di rilevamento, come il mutation testing, che non si affidano al
   riconoscimento visivo di schemi del revisore, o il nostro processo di revisione
   dipende interamente da occhi umani che valutano se il codice «sembra giusto»?** È
   la vulnerabilità specifica che questo argomento individua; valutate con onestà la
   vostra attuale capacità di rilevamento rispetto ad essa.

3. **La gonfiatura delle metriche si è propagata oltre la fase di scrittura del codice
   nelle nostre metriche di pull request o di rilascio, e ce ne accorgeremmo oggi se
   fosse successo?** Percorrete l'intera catena del cycle time cercando questo schema
   di propagazione, non solo il punto di origine più ovvio.

4. **Il nostro attuale esame rafforzato del codice assistito dall'IA, se c'è, si basa su
   prove accumulate, o è un'impostazione predefinita indefinita e non esaminata che non
   è mai stata riconsiderata?** Discutete quali prove dovrebbero accumularsi prima di
   considerare di allentare o stringere ulteriormente i guardrail attuali.

5. **Come comunichiamo internamente i rischi di questo argomento: come ragione di
   cautela e di guardrail proporzionati, o come argomento implicito contro l'adozione
   dell'IA in generale?** Siate onesti su come questa conversazione venga davvero
   recepita dal vostro team, dato che un messaggio ricevuto come resistenza
   generalizzata produce raramente la risposta proporzionata e basata sulle prove che
   questo argomento raccomanda.

6. **Che aspetto avrebbe per la nostra organizzazione scoprire, solo a scala
   significativa, che gonfiatura delle metriche e diluizione della qualità si erano
   verificate contemporaneamente e senza essere rilevate?** Questo scenario concreto e
   piuttosto scomodo merita di essere nominato esplicitamente come il fallimento
   specifico che i guardrail di questo argomento sono costruiti per prevenire.

## Prospettiva settoriale

**Startup.** Un'adozione rapida con una capacità di revisione limitata rende i rischi di
questo argomento particolarmente acuti per un team piccolo; il problema di rilevamento
del «sembra corretto» è più difficile da cogliere con meno revisori, meno
specializzati. Investite presto in almeno un mutation testing leggero sui vostri
percorsi di codice più critici, anche se una copertura completa non è ancora fattibile.

**Piccola impresa.** I processi formali di ricalibrazione sono probabilmente superflui a
questa scala, ma una semplice ed esplicita consapevolezza che il codice generato
dall'IA merita una lettura un po' più scettica del solito, proprio perché tende a
sembrare più sicuramente corretto di quanto possa essere davvero, non costa nulla e
affronta direttamente la preoccupazione centrale di questo argomento.

**Enterprise.** Gonfiatura delle metriche e diluizione della qualità si compongono
entrambe in modo significativo a scala, dato che un falso segnale o un problema di
qualità non rilevato su decine di team contemporaneamente è molto più rilevante e molto
più difficile da disfare dello stesso problema su un singolo team. Investite in modo
deliberato in potenziamenti della capacità di rilevamento a livello di organizzazione
(infrastruttura di mutation testing, adozione del collaudo basato su proprietà) e nella
disciplina di ricalibrazione limitata nel tempo che questo argomento raccomanda,
tracciata in modo centrale.

**Settore pubblico.** Le conseguenze di una diluizione della qualità non rilevata sono
particolarmente gravi nei contesti regolamentati, critici per la sicurezza o di fiducia
del pubblico comuni nei sistemi governativi. Applicate un esame rafforzato e guidato
dalle prove specificamente ai cambiamenti assistiti dall'IA nei percorsi di codice ad
alta conseguenza (la logica di pesatura per esposizione e sfruttabilità dell'argomento
6.4 si applica in modo simile qui), e siate pronti a dimostrare a un revisore o a un
organo di controllo quale capacità di rilevamento esista esattamente contro questo
rischio specifico.

## Esempi

**Enterprise.** Il team di ingegneria dell'elaborazione dei sinistri di una compagnia
assicurativa adottò ampiamente l'assistenza di codifica basata sull'IA e, sei mesi
dopo, notò un aumento graduale ma misurabile dei difetti sfuggiti specificamente nella
logica condizionale complessa, il tipo di codice in cui la gestione sottilmente errata
dei casi limite è sia più facile da generare in modo plausibile per gli strumenti di IA
sia più difficile da cogliere per un revisore con la sola ispezione. Un'indagine
confermò lo schema del «sembra corretto» che questo argomento descrive: il codice
difettoso aveva usato costantemente schemi idiomatici e dall'aspetto familiare che
superavano la revisione senza innescare il tipo di esame che un pezzo di codice scritto
da persone dall'aspetto ovviamente insolito o goffo avrebbe potuto ricevere. La risposta
del team puntò il mutation testing specificamente sulla logica condizionale complessa in
tutta l'azienda, un metodo di rilevamento resistente al problema della plausibilità
superficiale, e misurò una riduzione significativa di questa specifica categoria di
difetti in due trimestri.

**Settore pubblico.** Un'autorità fiscale che sperimentava lo sviluppo assistito dall'IA
per un sottoinsieme del lavoro di manutenzione del proprio motore di calcolo introdusse
fin dall'inizio la disciplina di ricalibrazione limitata nel tempo che questo argomento
raccomanda, fissando un periodo esplicito di sei mesi di raccolta di prove con requisiti
di revisione rafforzati per i cambiamenti assistiti dall'IA alla logica di calcolo in
particolare. Le prove raccolte non mostrarono alcuna differenza statisticamente
significativa nel tasso di difetti per i cambiamenti ben circoscritti e limitati, ma
confermarono un rischio elevato per i cambiamenti assistiti dall'IA più ampi e
architetturalmente significativi. La politica risultante dell'agenzia allentò l'esame
rafforzato per la categoria dei cambiamenti limitati mantenendolo e anzi rafforzandolo
per i cambiamenti architetturalmente significativi, un esito proporzionato e basato
sulle prove che né l'estremo «nessuna ricalibrazione» né quello dell'«esame generalizzato
e permanente» avrebbe prodotto.

## Business case: motivazioni, ROI e TCO

Il ritorno del difendersi deliberatamente dalla gonfiatura delle metriche e dalla
diluizione della qualità è evitare esattamente lo scenario che l'esempio dell'azienda
assicurativa qui sopra mostra: un problema di qualità non rilevato che si compone
gradualmente e costa molto di più da scoprire e rimediare a posteriori di quanto
sarebbe costato in anticipo l'investimento di rilevamento, un'infrastruttura di
mutation testing mirata specificamente al codice a più alto rischio.

Il costo totale di proprietà comprende l'investimento nella capacità di rilevamento che
questo argomento raccomanda e la disciplina continua di una ricalibrazione basata sulle
prove anziché l'uno o l'altro estremo, sospetto permanente o disattenzione permanente.
Quel costo è modesto e limitato nel tempo rispetto al rischio che un problema di
qualità significativo e su scala non venga rilevato proprio perché è stato progettato,
per via di come questi strumenti generano il codice, per sembrare corretto ai processi
di revisione che un'organizzazione aveva già in atto.

## Antipattern e insidie

- **Applicare invariati soglie e metodi di rilevamento dell'era pre-IA:** perde un
  profilo di rischio elevato specifico e suggerito dalle prove.
- **Affidarsi interamente a una revisione per riconoscimento umano di schemi per il
  codice generato dall'IA:** specificamente vulnerabile al problema del «sembra
  corretto» che questo argomento individua.
- **Perdere la propagazione della gonfiatura delle metriche oltre il punto di
  generazione del codice:** un falso segnale può diffondersi non rilevato lungo
  l'intera pipeline di consegna.
- **Esame generalizzato, permanente e non esaminato senza ricalibrazione basata sulle
  prove:** spreca in modo insostenibile gran parte del valore genuino dello sviluppo
  assistito dall'IA.
- **Comunicare i rischi di questo argomento come resistenza generalizzata
  all'adozione dell'IA anziché come gestione proporzionata del rischio:** mina sia la
  sicurezza sia l'adozione.
- **Nessun investimento nella capacità di rilevamento mirato a questo nuovo profilo di
  rischio:** lascia l'organizzazione dipendente da metodi di revisione che questo
  argomento ha mostrato essere specificamente indeboliti contro di esso.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Nessuna consapevolezza del rischio di gonfiatura
  delle metriche o di diluizione della qualità specifico dello sviluppo assistito
  dall'IA; guardrail e metodi di rilevamento esistenti sono applicati invariati.
- **Livello 2, Sviluppo (Develop):** Esiste una certa consapevolezza, ma la
  ricalibrazione è estemporanea e non è stato fatto alcun investimento nella capacità
  di rilevamento specifico per questo rischio.
- **Livello 3, Standardizzazione (Standardize):** Soglie ricalibrate e metodi di
  rilevamento resistenti al problema del «sembra corretto» (mutation testing e
  collaudo basato su proprietà) sono applicati in modo coerente al lavoro assistito
  dall'IA.
- **Livello 4, Gestione (Manage):** Una disciplina di ricalibrazione limitata nel
  tempo e guidata dalle prove regola attivamente l'esame in base ai dati accumulati, e
  la propagazione della gonfiatura delle metriche è monitorata attivamente lungo
  l'intera pipeline.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha una postura di
  gestione del rischio matura, proporzionata e in continua evoluzione verso lo sviluppo
  assistito dall'IA, comunicata in modo trasparente, che né sprechi il suo valore con
  eccessiva cautela né esponga l'organizzazione a una diluizione della qualità non
  rilevata.

## Spunti di discussione

1. Abbiamo visto qualche prima prova dello schema di difetti del tipo «sembra corretto» nel nostro codice assistito dall'IA?
2. Quale metodo di rilevamento affronterebbe più direttamente per noi il rischio specifico di questo argomento?
3. La gonfiatura delle metriche dovuta all'assistenza dell'IA si è propagata in qualcuna delle nostre metriche di pipeline a valle?
4. Il nostro attuale esame del codice assistito dall'IA è basato sulle prove o è un'impostazione predefinita non esaminata?
5. Come viene effettivamente recepita dal nostro team l'indicazione di questo argomento: come gestione del rischio o come resistenza all'adozione dell'IA?

## Punti chiave

- Gonfiatura delle metriche e diluizione della qualità sono **versioni intensificate
  di rischi che questo libro nomina già**, che richiedono ai guardrail esistenti di
  lavorare di più, non framework del tutto nuovi.
- La tendenza del codice generato dall'IA a **«sembrare corretto»** indebolisce
  specificamente la tradizionale revisione umana basata sul riconoscimento di schemi.
- Investi in **metodi di rilevamento resistenti alla plausibilità superficiale**, in
  particolare mutation testing e collaudo basato su proprietà.
- Applica una **ricalibrazione limitata nel tempo e guidata dalle prove**, non un
  sospetto generalizzato e permanente né una fiducia permanente e non esaminata.
- **Comunica questo rischio come gestione proporzionata del rischio**, non come
  argomento contro l'adozione dell'IA, per sostenere sia la sicurezza sia un uso
  sostenibile.

## Riferimenti e letture di approfondimento

- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (la disciplina abbinata di velocità e stabilità che questo argomento
  applica a una nuova categoria di rischio).
- Jia, Yue, e Mark Harman, "An Analysis and Survey of the Development of Mutation
  Testing," *IEEE Transactions on Software Engineering* (2011): il metodo di
  rilevamento che questo argomento sostiene diventare sproporzionatamente prezioso.
- La ricerca di GitHub sulla programmazione in coppia con l'IA e sulla produttività
  degli sviluppatori (dati di settore sui risultati e sul rischio dello sviluppo
  assistito dall'IA).
- *The Tyranny of Metrics*, di Jerry Z. Muller (la fissazione per le metriche e il
  rischio di manipolazione, direttamente rilevanti per la preoccupazione sulla
  gonfiatura delle metriche che questo argomento nomina).
