# 2.6 Cycle time e le sue componenti

## Panoramica e motivazione

Il **cycle time** è la scomposizione interna del Flow Time di un cambiamento
(argomento 2.4) nelle fasi di ingegneria che lo compongono: tempo di scrittura del
codice, tempo di revisione, tempo di test e tempo di rilascio, a volte ulteriormente
suddiviso in tempo di presa in carico (quanto un cambiamento aspetta prima che
qualcuno cominci a lavorarci) e tempo attivo (quanto ci vuole una volta che
qualcuno lo fa). Dove il Flow Time ti dà un singolo numero per quanto ci mette un
cambiamento da un capo all'altro dell'intero flusso di valore, il
[cycle time](https://en.wikipedia.org/wiki/Cycle_time) ti dice dove quel tempo va a
finire davvero una volta che arriva all'ingegneria, che è lo strato diagnostico che
l'argomento 2.4 prometteva stesse sotto il proprio numero di sintesi.

Questa distinzione conta perché «il lead time è troppo lungo» non è azionabile di
per sé. Un team il cui lead time è dominato dal tempo di scrittura del codice ha
bisogno di un intervento diverso da un team il cui lead time è dominato da una
coda di revisione di tre giorni, che ha bisogno a sua volta di un intervento
diverso da un team che perde la maggior parte del tempo in una suite di test lenta
e instabile. Senza la scomposizione del cycle time, i team tendono a tirare a
indovinare il collo di bottiglia, e l'ipotesi è sbagliata abbastanza spesso che
correggere la fase sbagliata spreca sforzo reale mentre il vincolo effettivo resta
intatto.

Per i team grandi, la scomposizione del cycle time è ciò che trasforma una
regressione del lead time a livello di organizzazione da mistero a problema
specifico e affrontabile. Quando decine di team condividono un'infrastruttura
comune, un collo di bottiglia condiviso nella revisione o una pipeline di CI lenta
e condivisa possono trascinare giù allo stesso modo il lead time di ogni team, e
solo un confronto del cycle time tra team rivela quella causa radice condivisa,
anziché far ipotizzare a ciascun team in modo indipendente la propria spiegazione
locale.

## Principi chiave

- **Il cycle time spiega il lead time; non lo sostituisce.** Riporta entrambi
  insieme, con il cycle time come diagnostica e il lead time come sintesi.
- **Il tempo di attesa di solito domina il tempo attivo.** La maggior parte del
  ritardo nella consegna del software viene da lavoro fermo in una coda, non da
  sforzo attivo (l'argomento 2.5 lo tratta direttamente attraverso la Flow
  Efficiency).
- **Scomponi per fase prima di proporre una correzione.** Una correzione mirata
  alla fase sbagliata spreca sforzo e può demoralizzare un team a cui si chiede di
  «lavorare più in fretta» quando il vero collo di bottiglia era altrove.
- **Un collo di bottiglia condiviso tra molti team è un'opportunità di
  investimento di piattaforma,** non solo una serie di problemi dei singoli team.
- **I dati di cycle time sono esposti agli stessi rischi di manipolazione del Flow
  Time** (argomento 2.4): fai attenzione ai confini di fase che si spostano in
  silenzio per lusingare un numero.

## Raccomandazioni

### Strumenta esplicitamente ogni confine di fase

Scomponi il percorso di un cambiamento in fasi nominate con confini chiari e
strumentabili: scrittura del codice (dal primo commit all'apertura della pull
request), presa in carico (dall'apertura della pull request alla prima revisione),
revisione (dalla prima revisione all'approvazione) e rilascio (dall'approvazione
alla produzione). Cattura automaticamente le marche temporali di ogni transizione
dagli eventi di controllo di versione e CI/CD, non da un tracciamento delle fasi
autodichiarato, applicando lo stesso principio di strumentazione anziché
autodichiarazione dell'argomento 1.5.

### Separa il tempo di attesa dal tempo attivo all'interno di ogni fase

All'interno della revisione, per esempio, distingui il tempo in cui una pull
request resta intoccata in attesa che un revisore cominci (tempo di attesa) dal
tempo che richiede una conversazione di revisione attiva una volta iniziata
(tempo attivo). Questa distinzione rivela di solito che il costo dominante è
l'accodamento, non lo sforzo, il che indica una correzione molto diversa (più
capacità di revisori, notifiche migliori, pull request più piccole da rivedere)
rispetto a una correzione mirata a rendere più rapide le conversazioni di
revisione stesse.

### Cerca un collo di bottiglia condiviso prima di diagnosticare team per team

Quando più team mostrano la stessa fase come ritardo dominante, una pipeline di CI
condivisa e lenta, un pool di revisori condiviso sovraccarico, un rilascio
condiviso poco frequente, quella causa condivisa è un'opportunità di investimento a
livello di piattaforma, non una serie di problemi locali non correlati. Aggrega i
dati di cycle time tra i team specificamente per cercare questo schema prima di
presumere che il collo di bottiglia di ogni team sia peculiare a quel team.

### Usa il cycle time per fissare obiettivi di miglioramento realistici e specifici per fase

Anziché un unico obiettivo «ridurre il lead time del 20%», che non dà al team
alcuna indicazione su dove concentrarsi, usa la scomposizione del cycle time per
fissare un obiettivo specifico per fase: «ridurre il tempo mediano di attesa della
revisione da due giorni a quattro ore». Un obiettivo specifico e mirato a una fase
è sia più facile da perseguire per un team sia più facile da verificare come
effettivamente raggiunto grazie a un vero cambiamento di processo anziché a uno
spostamento non correlato altrove.

### Fai attenzione alla manipolazione dei confini di fase

Proprio come il punto di partenza e di arrivo del Flow Time possono derivare
(argomento 2.4), i singoli confini di fase del cycle time possono spostarsi in
modi che lusingano il numero di una fase specifica senza alcun miglioramento reale,
per esempio segnare una revisione come «iniziata» nel momento in cui viene
assegnato un revisore anziché quando comincia davvero a leggere il cambiamento.
Verifica periodicamente la strumentazione dei confini di fase rispetto alla sua
definizione documentata.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Cycle time a grana grossa (due o tre fasi) | Semplice da strumentare e spiegare | Può non individuare il collo di bottiglia reale con precisione sufficiente per agire |
| Cycle time a grana fine (molte fasi, divisione attesa/attivo) | Diagnosi precisa, obiettivi azionabili specifici per fase | Più sforzo di strumentazione; più numeri da mantenere e spiegare |
| Revisione del cycle time team per team | Su misura per il flusso di lavoro effettivo di ciascun team | Può perdere un collo di bottiglia condiviso tra team nascosto dietro numeri locali simili |
| Revisione aggregata del cycle time tra team | Rivela colli di bottiglia condivisi a livello di piattaforma | Richiede definizioni di fase standardizzate tra i team per essere significativa |

La tensione centrale è **precisione diagnostica contro costo di strumentazione**.
Un tracciamento del cycle time a grana più fine dà una diagnosi più azionabile ma
costa di più da costruire e mantenere, e aggiunge più numeri che un team deve
capire e di cui deve fidarsi. Si risolve la tensione partendo a grana grossa
(scrittura del codice, revisione, rilascio) e aggiungendo suddivisioni più fini,
attesa contro tempo attivo all'interno di una fase specifica, solo quando quella
fase è confermata come collo di bottiglia reale e ricorrente che giustifica
l'investimento aggiuntivo in strumentazione.

## Domande da discutere con il vostro team

1. **Se oggi il lead time peggiorasse, sapremmo dire entro un'ora quale fase
   specifica ne è responsabile, usando dati anziché congetture?** È la prova
   fondamentale per capire se la vostra strumentazione del cycle time serve
   davvero al suo scopo diagnostico. Se la risposta onesta è no, vale la pena
   colmare quella lacuna prima della prossima regressione.

2. **All'interno della nostra fase di collo di bottiglia dominante, quanto del
   ritardo è tempo di attesa e quanto tempo attivo?** La maggior parte dei team
   presume che il vincolo sia lo sforzo attivo prima di controllare, quando di
   solito il costo maggiore è l'accodamento. Prendete la ripartizione effettiva
   della vostra fase più lenta e verificate se l'ipotesi regge.

3. **Più team condividono la stessa fase di collo di bottiglia dominante, il che
   suggerisce una correzione a livello di piattaforma anziché di team?** Aggregate
   i vostri dati di cycle time tra i team e cercate esplicitamente questo schema
   prima di presumere che la lentezza di ogni team abbia una causa locale.

4. **Abbiamo fissato obiettivi di miglioramento specifici per fase, o solo un
   unico obiettivo complessivo di lead time senza indicazioni su dove
   concentrarsi?** Un obiettivo vago lascia un team a indovinare dove investire lo
   sforzo; uno specifico per fase no. Confrontate i vostri obiettivi attuali con
   questa distinzione.

5. **Qualche confine di fase del cycle time nella nostra strumentazione è
   derivato nel tempo dalla sua definizione documentata?** I confini di fase sono
   esposti alla stessa deriva definitoria del Flow Time stesso (argomento 2.4).
   Verificate un campione di eventi recenti di transizione di fase rispetto alla
   definizione scritta.

6. **In che modo una cultura ricca di revisioni e una ricca di fiducia appaiono
   diversamente nei nostri dati di cycle time?** Un team con una revisione molto
   approfondita e a più round mostrerà un tempo di fase di revisione più lungo di
   uno che si fida di merge con approvazione singola; discutete se il vostro
   equilibrio attuale rifletta una scelta deliberata o un'impostazione non
   esaminata.

## Prospettiva settoriale

**Startup.** Il cycle time è di solito dominato dal tempo di scrittura del codice
più che dalle fasi di revisione o di rilascio, semplicemente perché il processo è
minimo. Quando il team cresce oltre una manciata di ingegneri, cominciate a
osservare in particolare il tempo di attesa della revisione, dato che di solito è
la prima fase a rallentare quando il lavoro di più persone deve passare attraverso
meno revisori disponibili.

**Piccola impresa.** Le analisi di base della piattaforma di controllo di versione
espongono di solito abbastanza tempi a livello di fase (tempo alla prima revisione,
tempo al merge) senza strumentazione su misura. Concentratevi prima sulla fase di
revisione, dato che è il collo di bottiglia iniziale più comune e il più facile da
correggere con un piccolo cambio di processo come una rotazione dei revisori.

**Enterprise.** I colli di bottiglia condivisi tra decine di team sono comuni e ad
alta leva da trovare: una singola coda di CI condivisa sovraccarica o un passo di
revisione centrale obbligatorio possono tassare in silenzio il lead time in tutta
l'organizzazione. Investite specificamente nell'aggregazione del cycle time tra
team per far emergere questi vincoli condivisi anziché lasciare che ogni team
diagnostichi in modo indipendente.

**Settore pubblico.** I dati di cycle time sono uno strumento concreto e forte per
giustificare la modernizzazione dei processi presso stakeholder scettici, dato che
«il tempo di attesa della revisione è in media di quattro giorni a causa di un
singolo ruolo di approvazione in strozzatura» è un argomento d'investimento molto
più persuasivo e specifico di un'astratta affermazione «il nostro processo è
lento».

## Esempi

**Enterprise.** La dirigenza di ingegneria di un'azienda di infrastrutture cloud
notò che il lead time saliva quasi contemporaneamente in quasi tutti i team.
L'aggregazione del cycle time tra team rivelò che il tempo di attesa della
revisione, non il tempo di revisione attiva, era la causa dominante e condivisa:
un piccolo team centralizzato di revisione della sicurezza era diventato un collo
di bottiglia perché il numero di team che richiedevano la sua approvazione era
cresciuto più in fretta del team stesso. Ampliare e formare un pool più ampio di
revisori certificati per la sicurezza, anziché chiedere ai singoli team di
scrivere o testare in qualche modo più in fretta, risolse il collo di bottiglia
condiviso e riportò il lead time in calo su tutta la linea entro un trimestre.

**Settore pubblico.** Il team dei servizi digitali di un governo statale era sotto
pressione per ridurre il lead time, e inizialmente rispose chiedendo agli
ingegneri di lavorare più in fretta, un istinto naturale ma alla fine inutile. La
scomposizione del cycle time mostrò che il tempo attivo di scrittura del codice
era cambiato a malapena anno su anno; quasi tutta la regressione veniva da una
coda crescente in una fase obbligatoria di revisione architetturale introdotta
diciotto mesi prima come misura di conformità. Il team riprogettò quella revisione
in un processo più leggero e articolato per livelli di rischio per i cambiamenti a
basso rischio, riducendo in modo sostanziale il tempo di attesa della revisione e
preservando il pieno rigore della revisione per i cambiamenti davvero ad alto
rischio.

## Business case: motivazioni, ROI e TCO

Il ritorno della scomposizione del cycle time è un investimento mirato ed
efficace: un'organizzazione che sa esattamente quale fase è il collo di bottiglia
può correggere quella fase specifica anziché distribuire lo sforzo in modo sottile
su un intero processo nella speranza che qualcosa aiuti. L'esempio della revisione
di sicurezza qui sopra è tipico: una correzione precisamente mirata, l'espansione
di una specifica risorsa in strozzatura, ha risolto un problema a livello di
organizzazione molto più a buon mercato di quanto avrebbe fatto un'ampia e poco
focalizzata iniziativa «velocizziamo la consegna».

Il costo totale di proprietà è lo sforzo di strumentazione per catturare in modo
affidabile le marche temporali a livello di fase e la disciplina continua di
verificare periodicamente la deriva dei confini di fase. Quel costo vale la pena
perché l'alternativa, indovinare i colli di bottiglia e correggere la fase
sbagliata, spreca nel tempo molto più sforzo di ingegneria di quanto costi la
strumentazione stessa.

## Antipattern e insidie

- **Reagire a una regressione del lead time senza una diagnosi del cycle time:**
  porta di frequente a correggere la fase sbagliata.
- **Presumere che il costo dominante sia lo sforzo attivo, non il tempo di
  attesa:** di solito sbagliato; l'accodamento domina nella maggior parte delle
  pipeline di consegna reali (argomento 2.5).
- **Perdere un collo di bottiglia condiviso tra team esaminando il cycle time solo
  team per team:** lascia non scoperta una correzione di piattaforma ad alta leva.
- **Fissare un vago obiettivo complessivo di lead time senza indicazioni
  specifiche per fase:** lascia i team a indovinare dove concentrare lo sforzo.
- **Deriva definitoria dei confini di fase:** lusinga il numero di una fase
  specifica senza un miglioramento reale.
- **Strumentare ogni possibile fase a grana fine prima di confermare che una
  qualsiasi sia un vero collo di bottiglia:** spreca sforzo di strumentazione su
  un dettaglio che non informa ancora alcuna decisione.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Il cycle time non è affatto scomposto; i team
  tirano a indovinare i colli di bottiglia quando il lead time peggiora.
- **Livello 2, Sviluppo (Develop):** Alcuni team tracciano in modo informale i tempi
  di fase a grana grossa, ma non c'è una strumentazione coerente né un confronto
  tra team.
- **Livello 3, Standardizzazione (Standardize):** I confini di fase sono
  strumentati in modo coerente in tutta l'organizzazione, con il tempo di attesa
  separato dal tempo attivo nelle fasi di collo di bottiglia dominanti.
- **Livello 4, Gestione (Manage):** L'aggregazione del cycle time tra team fa
  emergere attivamente i colli di bottiglia condivisi; obiettivi di miglioramento
  specifici per fase sostituiscono i vaghi obiettivi complessivi di lead time.
- **Livello 5, Orchestrazione (Orchestrate):** I dati di cycle time guidano
  direttamente la prioritizzazione degli investimenti di piattaforma, e
  l'organizzazione sa indicare correzioni mirate e specifiche, un pool di
  revisione ampliato, una pipeline condivisa più veloce, che hanno migliorato in
  modo misurabile il lead time su molti team contemporaneamente.

## Spunti di discussione

1. Qual è oggi la nostra fase di collo di bottiglia dominante, e quanto siamo sicuri di questa risposta?
2. Quanto del tempo di quella fase è tempo di attesa rispetto a tempo attivo?
3. Qualcuno dei nostri team condivide lo stesso collo di bottiglia, il che suggerirebbe una correzione a livello di piattaforma?
4. Quando abbiamo fissato l'ultima volta un obiettivo di miglioramento della consegna specifico per fase, anziché complessivo?
5. La definizione di un confine di fase nei nostri strumenti è mai cambiata senza documentazione?

## Punti chiave

- Il cycle time **scompone il Flow Time** in fasi di ingegneria, scrittura del
  codice, revisione, test, rilascio, ed è lo strato diagnostico sotto quel numero
  di sintesi.
- Separa il **tempo di attesa dal tempo attivo** all'interno di ogni fase;
  l'accodamento di solito domina lo sforzo attivo (argomento 2.5).
- Cerca **colli di bottiglia condivisi tra team** prima di presumere che un
  rallentamento sia specifico di un team; una causa condivisa è spesso
  un'opportunità di investimento di piattaforma.
- Fissa **obiettivi di miglioramento specifici per fase**, non vaghi obiettivi
  complessivi, così che i team sappiano esattamente dove concentrarsi.
- I confini di fase sono esposti allo stesso rischio di **deriva definitoria** del
  Flow Time stesso; verificali periodicamente.
- L'argomento 2.7 dà la matematica sottostante, la legge di Little, del perché
  lavoro in corso e cycle time si muovano insieme.

## Riferimenti e letture di approfondimento

- *The Principles of Product Development Flow*, di Donald G. Reinertsen (teoria
  delle code e ragionamento sulla dimensione dei lotti alla base dell'analisi del
  cycle time).
- *Actionable Agile Metrics for Predictability*, di Daniel S. Vacanti (misurazione
  basata su cycle time e flusso per la consegna del software).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (il lead time e il suo rapporto con le prestazioni di
  consegna).
- *The Goal*, di Eliyahu M. Goldratt (teoria dei vincoli, e il principio di
  trovare e correggere il vero collo di bottiglia anziché ottimizzare ovunque).
