# 5.2 Metriche di adozione e utilizzo delle funzionalità

## Panoramica e motivazione

L'**adozione delle funzionalità** (feature adoption) misura se le persone per cui una
funzionalità è stata costruita la usano davvero, con quale tasso e se quell'uso
persiste nel tempo. È, in senso molto diretto, la verifica di realtà su tutto ciò che
le Parti dalla 2 alla 4 di questo libro misurano: un'organizzazione può rilasciare di
frequente, mantenere un'ottima esperienza degli sviluppatori e consegnare codice
impeccabilmente testato, e costruire comunque cose che nessuno vuole. I dati di
adozione sono dove un'organizzazione di ingegneria scopre se il proprio output si sia
collegato a un qualche risultato reale, che è esattamente la distinzione tra input,
output e risultato introdotta dall'argomento 1.3 applicata al caso più concreto di
questo libro: una funzionalità specifica, già rilasciata.

La preoccupazione centrale di questo argomento è che i dati di adozione, più di quasi
ogni altra famiglia di metriche di questo libro, sono facili da misurare in un modo
che lusinga anziché informare. Una funzionalità può mostrare un'adozione iniziale
impressionante puramente per curiosità o per esposizione forzata (un modale che compare
che l'utente lo voglia o no) mentre la genuina consegna di valore sostenuta, misurata
da se le persone continuino a usarla una volta svanita la novità, racconta una storia
completamente diversa. Distinguere l'adozione genuina da un picco temporaneo è la sfida
tecnica centrale di questo argomento, e sbagliarla porta di routine le organizzazioni a
festeggiare funzionalità che falliscono in silenzio e ad abbandonarne altre che stavano
appena cominciando a trovare il proprio pubblico.

Per i team grandi, i dati di adozione delle funzionalità sono ciò che rende la
prioritizzazione della roadmap basata sulle prove anziché guidata da chi sostiene con
più persuasione il lavoro del proprio team. Le organizzazioni enterprise che gestiscono
grandi portafogli di prodotti hanno bisogno dei dati di adozione per individuare quali
investimenti si guadagnano il posto; le organizzazioni governative che costruiscono
servizi digitali rivolti ai cittadini ne hanno bisogno per dimostrare che
l'investimento pubblico ha prodotto servizi che le persone usano davvero, non solo
servizi che esistono tecnicamente.

## Principi chiave

- **Adozione iniziale e adozione sostenuta sono segnali diversi.** Un picco dovuto a
  curiosità o a esposizione forzata non è la stessa cosa di una consegna di valore
  genuina e duratura.
- **L'adozione va misurata rispetto al pubblico per cui è stata costruita**, non
  rispetto all'intera base di utenti in modo indiscriminato.
- **Una funzionalità con bassa adozione non è automaticamente un fallimento.**
  Potrebbe essere scoperta male, mirata male o semplicemente nuova; indaga prima di
  concludere.
- **La fidelizzazione dell'utilizzo conta più di una singola istantanea di
  adozione.** Traccia se chi ha provato una funzionalità continua a tornarci.
- **I dati di adozione sono esposti alla manipolazione tramite esposizione forzata o
  dark pattern.** Un numero gonfiato rendendo una funzionalità difficile da evitare
  non è un segnale genuino.

## Raccomandazioni

### Distingui la prova iniziale dalla fidelizzazione sostenuta

Traccia due numeri separati: la percentuale del tuo pubblico di destinazione che
prova una funzionalità almeno una volta (adozione iniziale) e la percentuale che la
sta ancora usando dopo un periodo significativo, come quattro o otto settimane
(adozione trattenuta). Una funzionalità con alta prova iniziale e bassa
fidelizzazione suggerisce che la reperibilità ha funzionato ma la funzionalità stessa
non ha consegnato abbastanza valore da far tornare le persone, una diagnosi molto
diversa, e una correzione molto diversa, rispetto a una bassa prova iniziale con alta
fidelizzazione, che suggerisce una funzionalità davvero preziosa che troppe poche
persone conoscono.

### Definisci con precisione il pubblico di destinazione prima di misurare l'adozione

L'adozione misurata rispetto all'intera base di utenti può essere fuorviante se una
funzionalità era destinata solo a un segmento specifico: una funzionalità per
amministratori aziendali misurata rispetto a una base composta per lo più da utenti
individuali apparirà sempre con una pessima adozione, a prescindere da quanto bene
serva davvero le persone per cui è stata costruita. Definisci esplicitamente il
pubblico previsto prima del lancio e misura l'adozione rispetto a quel denominatore
specifico, non al tuo conteggio totale di utenti.

### Indaga la bassa adozione prima di concludere che una funzionalità è fallita

Un numero di adozione basso ha diverse cause possibili che richiedono risposte molto
diverse: la funzionalità non è davvero preziosa, la funzionalità è preziosa ma poco
reperibile (gli utenti non sanno che esiste), la funzionalità è preziosa ma spiegata
male (gli utenti la vedono ma non ne capiscono lo scopo), oppure la finestra di
misurazione è semplicemente troppo breve perché una funzionalità a adozione più lenta
abbia trovato il proprio pubblico. Indaga quale di queste si applichi prima di decidere
se investire ancora, riprogettare o ritirare.

### Fai attenzione all'adozione gonfiata da esposizione forzata o [dark pattern](https://en.wikipedia.org/wiki/Dark_pattern)

Un numero di adozione guidato dal fatto che una funzionalità sia difficile da evitare,
un flusso di inserimento invadente, un modale che l'utente deve chiudere, un valore
predefinito difficile da cambiare, non misura una consegna di valore genuina, e
festeggiarlo come se lo fosse ripete in forma di prodotto lo schema di manipolazione
per sostituzione dell'argomento 1.2. Abbina i numeri grezzi di adozione a un segnale
di soddisfazione o in stile Net Promoter per la specifica funzionalità dove fattibile,
così che l'esposizione forzata che non si traduce in genuina soddisfazione venga
intercettata anziché festeggiata.

### Ricollega i trend di adozione a decisioni specifiche di prodotto e di ingegneria

Quando l'adozione sale o scende in modo inatteso, ricostruisci il cambiamento fino a
una decisione specifica, una modifica dell'interfaccia, un cambio di impostazioni
predefinite, una spinta di marketing, un miglioramento o un peggioramento di
prestazioni, anziché trattare il movimento come un mistero inspiegato. Questo collega
i dati di adozione a un apprendimento azionabile di prodotto e di ingegneria,
chiudendo il cerchio tra un cambiamento specifico e il suo effetto misurato
sull'utilizzo reale.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Misurare rispetto all'intera base di utenti | Semplice, un solo denominatore | Fuorviante per funzionalità rivolte a un segmento specifico |
| Misurare rispetto a un pubblico di destinazione definito | Equo, riflette con accuratezza la portata prevista | Richiede una definizione deliberata del pubblico prima del lancio |
| Solo prova iniziale | Segnale rapido, disponibile subito dopo il lancio | Perde se la funzionalità consegni valore duraturo |
| Prova iniziale più fidelizzazione | Distingue la curiosità dal valore genuino | Richiede di aspettare di più (settimane) prima che emerga un quadro completo |

La tensione centrale è **velocità contro onestà**. I dati di prova iniziale sono
disponibili quasi subito dopo il lancio e soddisfano la pressione organizzativa a
riportare risultati precoci, ma da soli non sanno distinguere la curiosità o
l'esposizione forzata dal valore genuino e duraturo. Si risolve la tensione
riportando presto i dati di prova iniziale, chiaramente etichettati come preliminari,
e impegnandosi pubblicamente a una lettura successiva della fidelizzazione a un
intervallo fisso e predeterminato, così che l'entusiasmo iniziale non si cristallizzi
in una storia di successo non esaminata prima che il segnale reale abbia avuto il
tempo di emergere.

## Domande da discutere con il vostro team

1. **Per la funzionalità rilasciata più di recente, conosciamo separatamente la prova
   iniziale e l'utilizzo trattenuto, o solo un singolo numero combinato?** Se esiste
   solo un numero combinato, quella lacuna nasconde esattamente la distinzione
   tra curiosità e valore che questo argomento tratta come centrale.

2. **Il pubblico di destinazione di questa funzionalità è stato definito
   esplicitamente prima del lancio, e stiamo misurando l'adozione rispetto a quel
   gruppo specifico?** Controllate se il vostro attuale denominatore di adozione
   corrisponda a chi la funzionalità era davvero destinata, o se sia diluito dalla
   misurazione rispetto a una popolazione più ampia e irrilevante.

3. **Per una funzionalità con bassa adozione, abbiamo indagato quale delle diverse
   cause possibili, poco valore, scarsa reperibilità, spiegazione insufficiente,
   tempo insufficiente, si applichi davvero?** Ripercorrete questo specifico elenco
   diagnostico per una funzionalità reale e attuale a bassa adozione anziché ripiegare
   su «non deve essere preziosa».

4. **Una parte del nostro numero di adozione riportato è gonfiata da esposizione
   forzata, un valore predefinito invadente o un modale da chiudere, anziché da uso
   genuino e volontario?** Siate onesti qui; è uno schema comune e facile in cui
   cadere, soprattutto sotto pressione di mostrare risultati positivi precoci.

5. **Quando l'adozione di una funzionalità si è mossa in modo significativo,
   abbiamo potuto ricondurre quel movimento a un cambiamento specifico che
   avevamo fatto?** Se la risposta è di solito «non ne siamo sicuri», quella lacuna
   limita quanto la vostra organizzazione possa davvero imparare nel tempo dai propri
   dati di adozione.

6. **Abbiniamo i numeri di adozione a un qualche segnale di soddisfazione per la
   stessa funzionalità, o tracciamo solo l'utilizzo grezzo?** Un numero di adozione
   alto abbinato a una bassa soddisfazione è un segnale d'allarme che il solo
   utilizzo grezzo perderebbe del tutto.

## Prospettiva settoriale

**Startup.** L'adozione delle funzionalità è spesso il singolo segnale più importante
che un'azienda giovane ha, strettamente legato al product-market fit stesso. Traccia
la fidelizzazione in particolare, non solo la prova iniziale, fin dal primo lancio di
funzionalità, dato che distinguere il valore genuino dalla curiosità precoce è
cruciale quando la sopravvivenza dell'azienda può dipendere dal fare bene questa
diagnosi.

**Piccola impresa.** La maggior parte delle piattaforme di analytics riporta dati
d'uso di base con una configurazione minima; la disciplina principale è definire con
chiarezza il pubblico di destinazione prima di misurare, anziché riportare l'adozione
rispetto all'intera base clienti a prescindere da chi una funzionalità specifica fosse
davvero destinata.

**Enterprise.** I dati di adozione a questa scala sono essenziali per una
prioritizzazione equa e basata sulle prove della roadmap in un grande portafoglio di
prodotti, e la disciplina di distinguere prova iniziale da fidelizzazione sostenuta
conta ancora di più qui, dato che una base di utenti abbastanza grande può produrre
un picco iniziale dall'aspetto impressionante per quasi qualsiasi lancio a prescindere
dal valore reale.

**Settore pubblico.** L'adozione di un servizio digitale rivolto ai cittadini è una
misura diretta e concreta del fatto che l'investimento pubblico si sia tradotto in un
beneficio reale per il pubblico, ed è spesso una metrica molto più persuasiva per un
organo di controllo di un conteggio di consegne o di attività. Misurate l'adozione
rispetto alla popolazione che il servizio era davvero destinato a servire, e siate
onesti sulle barriere (alfabetizzazione digitale, accesso, consapevolezza) che
possono spiegare una bassa adozione al di là del progetto del servizio stesso.

## Esempi

**Enterprise.** Un'azienda di software di gestione dei progetti lanciò una nuova
funzionalità di modifica collaborativa e festeggiò un impressionante tasso di prova
iniziale del 60% nelle prime due settimane. Una lettura successiva della
fidelizzazione a otto settimane mostrò che solo l'8% di quegli iniziali sperimentatori
usava ancora la funzionalità con regolarità, rivelando che l'alto tasso di prova era
stato guidato quasi interamente da un tooltip di inserimento vistoso e difficile da
chiudere anziché da un interesse genuino e sostenuto. L'indagine sul feedback
qualitativo di chi l'aveva provata e poi smesso di usare la funzionalità rivelò uno
specifico problema di usabilità correggibile, uno schema di interazione poco
intuitivo, che una riprogettazione mirata risolse, e l'utilizzo trattenuto quasi
triplicò dopo la correzione, anche se non si avvicinò mai al numero di prova iniziale
fuorviantemente alto.

**Settore pubblico.** Un servizio nazionale per l'impiego lanciò un nuovo strumento
online di abbinamento ai lavori, riportando inizialmente l'adozione rispetto all'intera
base di utenti registrati dell'agenzia, ottenendo una percentuale scoraggiantemente
bassa che minacciava il proseguimento del finanziamento del programma. Un'analisi
rivista, che misurava l'adozione specificamente rispetto al sottoinsieme di utenti
registrati che cercavano attivamente lavoro nei settori di destinazione dello
strumento, il pubblico effettivamente previsto, mostrò un tasso di adozione
sostanzialmente più alto e più accurato. Combinata con una campagna mirata di
sensibilizzazione specificamente rivolta a quel pubblico definito, e con una lettura
successiva della fidelizzazione che mostrava un uso sostenuto forte tra chi aveva
adottato, il programma ottenne la continuazione del finanziamento sulla base della
metrica corretta e onestamente mirata anziché della cifra originale fuorviantemente
diluita.

## Business case: motivazioni, ROI e TCO

Il ritorno di una misurazione rigorosa dell'adozione delle funzionalità è un
investimento in roadmap basato sulle prove: un'organizzazione che sa distinguere il
valore genuino e trattenuto dalla prova iniziale guidata dalla curiosità può
investire ancora con fiducia nelle funzionalità che funzionano davvero e reindirizzare
lo sforzo lontano da quelle che non funzionano, anziché inseguire un picco iniziale
fuorviante o abbandonare prematuramente una funzionalità davvero preziosa ma lenta da
scoprire.

Il costo totale di proprietà è per lo più strumentazione di analytics, di solito già
disponibile nella maggior parte delle moderne piattaforme di analytics di prodotto,
più la disciplina di definire esplicitamente i pubblici di destinazione e di impegnarsi
in letture successive della fidelizzazione anziché fermarsi a un segnale precoce e
incompleto. Quella disciplina costa poco e previene l'errore molto più costoso di
leggere male un falso successo o un falso fallimento.

## Antipattern e insidie

- **Riportare solo la prova iniziale, mai la fidelizzazione:** non sa distinguere
  curiosità o esposizione forzata dal valore genuino e duraturo.
- **Misurare l'adozione rispetto al denominatore sbagliato:** diluisce o gonfia il
  segnale per funzionalità rivolte a un segmento specifico di pubblico.
- **Concludere che una funzionalità è fallita senza indagare la causa specifica**
  della bassa adozione: rischia di abbandonare una funzionalità davvero preziosa ma
  scoperta male o lanciata nel momento sbagliato.
- **Festeggiare un'adozione gonfiata da esposizione forzata o dark pattern:** un
  caso, lato prodotto, della manipolazione per sostituzione dell'argomento 1.2.
- **Non ricondurre mai il movimento dell'adozione a decisioni specifiche:** limita
  l'apprendimento organizzativo dai dati dell'organizzazione stessa.
- **Tracciare l'utilizzo senza alcun segnale di soddisfazione abbinato:** perde il
  caso in cui un alto utilizzo convive con basso valore genuino o bassa
  soddisfazione.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** L'adozione non è misurata, oppure viene riportato
  solo un singolo numero di prova iniziale, precoce e non trattenuto.
- **Livello 2, Sviluppo (Develop):** Esiste un certo tracciamento dell'adozione, ma
  i pubblici di destinazione non sono definiti con precisione e la fidelizzazione è
  misurata in modo incoerente.
- **Livello 3, Standardizzazione (Standardize):** Prova iniziale e adozione trattenuta
  sono entrambe tracciate in modo coerente rispetto a un pubblico di destinazione
  definito con precisione per ogni funzionalità importante.
- **Livello 4, Gestione (Manage):** Le funzionalità a bassa adozione sono indagate
  sistematicamente per la causa radice specifica prima di decidere di riprogettare o
  ritirare; l'adozione è abbinata ai dati di soddisfazione.
- **Livello 5, Orchestrazione (Orchestrate):** I dati di adozione informano
  direttamente e di routine la prioritizzazione della roadmap e le decisioni di
  investimento, e l'organizzazione sa ricondurre con fiducia specifici movimenti di
  adozione a specifiche decisioni di prodotto e di ingegneria.

## Spunti di discussione

1. Qual è una funzionalità recente in cui prova iniziale e adozione trattenuta hanno raccontato storie molto diverse?
2. Il pubblico di destinazione della nostra ultima funzionalità è stato definito con precisione prima del lancio, o solo dopo?
3. Quale funzionalità a bassa adozione merita un'indagine onesta sulla causa radice prima di decidere il suo destino?
4. Una parte della nostra attuale reportistica sull'adozione è gonfiata da esposizione forzata?
5. Che cosa rivelerebbe l'abbinare i dati di adozione ai dati di soddisfazione per la nostra funzionalità più usata?

## Punti chiave

- Distingui la **prova iniziale dalla fidelizzazione sostenuta**; un picco dovuto a
  curiosità o a esposizione forzata non è valore genuino e duraturo.
- Misura l'adozione rispetto a un **pubblico di destinazione definito con
  precisione**, non a una base di utenti più ampia e irrilevante.
- **Indaga la causa specifica** della bassa adozione prima di concludere che una
  funzionalità è fallita; cause molto diverse richiedono risposte molto diverse.
- Fai attenzione all'adozione **gonfiata da esposizione forzata o dark pattern**, e
  abbina l'adozione a un **segnale di soddisfazione** per intercettarla.
- **Ricollega il movimento dell'adozione a decisioni specifiche** per trasformare i
  dati in genuino apprendimento organizzativo.

## Riferimenti e letture di approfondimento

- *Lean Analytics*, di Alistair Croll e Benjamin Yoskovitz (metriche azionabili
  contro metriche di vanità applicate ai dati d'uso del prodotto).
- *Continuous Discovery Habits*, di Teresa Torres (collegare le decisioni di
  prodotto alle prove sui risultati per i clienti, inclusi i dati di adozione).
- *Hooked: How to Build Habit-Forming Products*, di Nir Eyal (fidelizzazione e
  formazione di abitudini, e il confine etico tra valore genuino e dark pattern).
- *Measure What Matters*, di John Doerr (definizione degli obiettivi orientata ai
  risultati applicabile alla definizione degli obiettivi di adozione).
