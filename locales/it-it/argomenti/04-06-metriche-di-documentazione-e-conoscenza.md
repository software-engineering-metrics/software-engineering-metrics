# 4.6 Metriche di documentazione e conoscenza

## Panoramica e motivazione

Questo argomento chiude la Parte 4 misurando se la conoscenza necessaria per
mantenere in sicurezza una base di codice sia davvero documentata e reperibile, non
solo se la documentazione esista tecnicamente da qualche parte. L'argomento 3.5 ha
trattato comunicazione e collaborazione come questione di esperienza degli
sviluppatori; questo argomento tratta la stessa questione di fondo, la disponibilità
della conoscenza, dal lato del codice: un nuovo ingegnere, o uno esistente che lavora
su codice poco familiare, ha ciò che gli serve per fare un cambiamento sicuro, o
quella conoscenza vive solo nella testa di un numero sempre minore di persone di
lungo corso?

La sfida di misurazione qui è davvero difficile, più difficile di gran parte delle
altre metriche di questo libro, perché la qualità e l'utilità della documentazione
sono intrinsecamente più soggettive di una percentuale di copertura o di un punteggio
di complessità. L'approccio di questo argomento è misurare proxy dell'utilità anziché
dell'esistenza: con quale frequenza la documentazione viene effettivamente consultata,
con quale frequenza la stessa domanda viene posta ripetutamente nonostante esista una
risposta documentata e quanto tempo ci mette chi non conosce un sistema a diventarvi
produttivo. Nessuno di questi proxy è perfetto da solo, ma insieme danno un quadro
molto più onesto del contare il numero di pagine wiki o di file README che una base
di codice contiene.

Per i team grandi, le preoccupazioni di questo argomento si compongono con l'anzianità
organizzativa e il ricambio in modi facili da sottostimare finché una crisi non forza
la questione: un sistema mantenuto per anni dagli stessi due ingegneri può funzionare
perfettamente con quasi nessuna documentazione scritta, fino al momento in cui
entrambi se ne vanno nello stesso anno, e a quel punto l'organizzazione scopre che la
conoscenza non è mai stata catturata in nessun posto durevole. Le organizzazioni
enterprise e governative, con cicli di vita dei sistemi tipicamente più lunghi e una
continuità del personale meno certa di una startup, portano questo rischio più
acutamente della maggior parte.

## Principi chiave

- **L'esistenza della documentazione non è la stessa cosa della sua utilità.**
  Misura se aiuta davvero, non solo se è presente.
- **Le domande ripetute nonostante risposte documentate rivelano un problema di
  reperibilità, non di sforzo di documentazione.** Più contenuto non è sempre la
  soluzione.
- **Il tempo di inserimento fino a un contributo produttivo è un proxy forte e
  pratico** della salute complessiva della conoscenza, e si collega direttamente
  alle metriche di collaborazione dell'argomento 3.5.
- **La conoscenza che vive solo nella testa delle persone è un rischio di
  durabilità,** non uno stato stabile e sostenibile, per quanto bene funzioni oggi.
- **La documentazione decade.** Una pagina che era accurata un anno fa può ora
  essere attivamente fuorviante, e l'obsolescenza stessa va tracciata.

## Raccomandazioni

### Traccia accesso e obsolescenza della documentazione, non solo l'esistenza

Dove la tua piattaforma di documentazione lo supporta, traccia con quale frequenza le
pagine vengono effettivamente viste e, separatamente, da quanto tempo una pagina non
viene aggiornata rispetto a quanto spesso sia cambiato il sistema sottostante che
descrive (confrontare i dati di churn dell'argomento 4.3 è qui direttamente utile).
Una pagina che descrive un sistema cambiato sostanzialmente dopo l'ultima modifica
della pagina è un forte candidato a essere attivamente fuorviante anziché
semplicemente inutile, e questo segnale di obsolescenza merita almeno la stessa
attenzione del tracciare se la documentazione esista.

### Fai attenzione alle domande ripetute come segnale di reperibilità

Se la stessa domanda viene posta ripetutamente in un canale di chat del team o
durante l'inserimento, nonostante una risposta documentata esista tecnicamente da
qualche parte, quello schema rivela un problema di reperibilità, la risposta non è
dove le persone la cercano naturalmente, anziché un problema di sforzo di
documentazione che scrivere di più risolverebbe. Traccia esplicitamente le domande
ricorrenti e usale per dare priorità al riorganizzare o far emergere meglio i
contenuti esistenti piuttosto che a scriverne di nuovi.

### Misura il tempo di inserimento fino al primo contributo significativo e indipendente

Questa metrica, introdotta nell'argomento 3.5 come segnale di collaborazione, è
altrettanto un segnale di salute della documentazione e della conoscenza dal lato del
codice. Un tempo di inserimento costantemente breve e prevedibile suggerisce una
conoscenza davvero accessibile e accurata; un tempo lungo e molto variabile,
soprattutto se dipende fortemente da chi capita di inserire un nuovo membro del team,
suggerisce una conoscenza che vive in modo pericolosamente concentrato nella memoria
dei singoli anziché in forma scritta e durevole.

### Individua ed elenca esplicitamente per priorità le aree di conoscenza critica non documentate

Confronta i dati di concentrazione della conoscenza (l'analisi del
[bus factor](https://en.wikipedia.org/wiki/Bus_factor) dell'argomento 3.5) con la
copertura documentale: un sistema con bus factor pari a uno e nessuna documentazione
significativa è un rischio grave e composto che merita attenzione prioritaria
rispetto a un sistema ben documentato con lo stesso basso bus factor, dato che la
documentazione offre almeno una mitigazione parziale mentre si forma un successore
dedicato.

### Tratta il debito di documentazione come una categoria dentro il tuo arretrato di debito tecnico

Anziché tracciare le lacune di documentazione separatamente e in modo informale,
integra le lacune significative di documentazione nello stesso arretrato visibile e
quantificato descritto nell'argomento 4.5, in particolare per i sistemi critici a
basso bus factor, così che il lavoro di documentazione competa equamente per la
capacità prioritaria anziché essere perennemente rinviato come compito di status
inferiore rispetto alla rimediazione del debito centrata sul codice.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessuna misurazione della documentazione | Poco overhead | Il rischio di conoscenza resta invisibile finché una crisi non forza la scoperta |
| Contare l'esistenza della documentazione (numero di pagine, presenza di README) | Semplice, facile da riportare | Non dice nulla su utilità, accuratezza o reperibilità |
| Tracciare accesso e obsolescenza | Rivela l'utilità effettiva e il decadimento | Richiede le analitiche della piattaforma di documentazione e disciplina di revisione continua |
| Tempo di inserimento come proxy | Pratico, concreto, legato direttamente all'impatto reale sul business | Indiretto; anche altri fattori oltre alla documentazione influenzano la velocità di inserimento |

La tensione centrale è **misurabilità contro significato**. L'esistenza della
documentazione è banalmente facile da contare e non dice quasi nulla di utile; la
genuina utilità, se qualcuno possa davvero trovare e fidarsi della conoscenza
documentata quando ne ha bisogno, è ciò che conta davvero ma è più difficile da
misurare direttamente. Si risolve la tensione usando in combinazione i proxy che
questo argomento raccomanda, schemi di accesso, obsolescenza rispetto al churn,
domande ripetute e tempo di inserimento, accettando che nessuno sia perfetto da solo
ma che la loro convergenza sia molto più significativa di un conteggio di esistenza.

## Domande da discutere con il vostro team

1. **Per il nostro sistema più critico e con il bus factor più basso, esiste
   davvero una documentazione significativa e accurata, o un esperto in uscita si
   porterebbe via la maggior parte della conoscenza reale?** È la versione più
   acuta e concreta della preoccupazione centrale di questo argomento; rispondete
   con onestà prima per il vostro singolo sistema più rischioso.

2. **Quale domanda viene posta ripetutamente nella chat del nostro team nonostante
   esista da qualche parte una risposta documentata?** Se ne sapete nominare una
   subito, è un problema di reperibilità che vale la pena correggere direttamente,
   probabilmente riorganizzando o facendo emergere meglio i contenuti esistenti
   anziché scriverne di nuovi.

3. **Quanto tempo ha impiegato il nostro più recente nuovo membro del team a dare il
   suo primo contributo significativo e indipendente, e come si confronta con quello
   di chi lo ha preceduto?** Una grande varianza inspiegata tra individui indica
   spesso una conoscenza che dipende fortemente da chi capita di inserire qualcuno,
   anziché da una documentazione durevole e accessibile.

4. **Quando abbiamo controllato per l'ultima volta se un pezzo di documentazione
   fosse ancora accurato, rispetto a quanto sia cambiato il sistema sottostante da
   quando è stato scritto?** Se la risposta onesta è «non lo controlliamo
   sistematicamente», quel rischio di obsolescenza è probabilmente più grande di
   quanto chiunque oggi presuma.

5. **Il nostro arretrato di debito tecnico (argomento 4.5) include le lacune di
   documentazione, o il lavoro di documentazione viene perennemente rinviato come
   compito di status inferiore rispetto alle correzioni del codice?** Controllate il
   vostro arretrato effettivo e verificate se il debito di documentazione sia
   visibile e competa per la capacità prioritaria o sia di fatto invisibile.

6. **Quanto ci costerebbe se le una o due persone che capiscono il nostro sistema
   più critico e meno documentato se ne andassero nello stesso anno?** Questa domanda
   concreta e scomoda merita una risposta onesta anziché trattare il rischio come
   astratto o improbabile.

## Prospettiva settoriale

**Startup.** Le metriche formali di documentazione sono di solito superflue con un
team piccolo in cui la conoscenza si diffonde attraverso una conversazione costante e
diretta. Il rischio da osservare è la stessa concentrazione del bus factor da cui
l'argomento 3.5 mette in guardia, ora applicata specificamente alla documentazione:
man mano che il team cresce oltre la dimensione in cui tutti si parlano ogni giorno,
la conoscenza non documentata che funzionava bene in modo informale diventa una
passività reale.

**Piccola impresa.** Date priorità prima alla documentazione del vostro singolo
sistema più critico e meno ridondante, anche informalmente, anziché tentare una
documentazione completa di tutto. Un documento breve e accurato che copra il vostro
singolo punto di guasto più rischioso dà più valore reale di una copertura ampia ma
superficiale ovunque.

**Enterprise.** Obsolescenza e reperibilità della documentazione scalano entrambe
male qui, dato che una grande organizzazione accumula documentazione su molti team e
piattaforme più in fretta di quanto qualcuno riesca a tenerla aggiornata o
organizzata in modo coerente. Investite nelle analitiche della piattaforma di
documentazione per tracciare accesso e obsolescenza a scala, e trattate il debito di
documentazione come categoria di prima classe nel vostro arretrato di debito a livello
di organizzazione.

**Settore pubblico.** La lunga permanenza dei dipendenti, comune nelle organizzazioni
del settore pubblico, può mascherare un grave rischio di conoscenza non documentata
dietro un'apparente stabilità, dato che un sistema mantenuto dalla stessa persona per
quindici anni può funzionare perfettamente fino al momento in cui quella persona va in
pensione. Trattate esplicitamente la salute della documentazione come una questione
di continuità operativa, collegata direttamente alla pianificazione della forza
lavoro e della successione, non come un semplice vezzo ingegneristico.

## Esempi

**Enterprise.** Un'azienda di servizi finanziari scoprì, durante una riorganizzazione
non correlata, che il suo motore centrale di calcolo del rischio non aveva alcuna
documentazione significativa oltre a pochi commenti di codice obsoleti, e che i due
ingegneri che lo capivano meglio venivano entrambi riassegnati contemporaneamente a una
nuova iniziativa. Uno sforzo di documentazione di emergenza, condotto sotto una
notevole pressione di tempo, estrasse e registrò la conoscenza critica prima che la
riassegnazione avesse effetto, ma il processo richiese diverse settimane di tempo
dedicato di ingegneri senior che avrebbe potuto essere distribuito in modo più
graduale e più economico se la salute della documentazione fosse stata tracciata e
messa in priorità in modo proattivo anziché scoperta come emergenza.

**Settore pubblico.** Il sistema di gestione dei casi, vecchio di decenni, di un
governo statale aveva accumulato nel tempo una documentazione consistente, ma un audit
di reperibilità scoprì che i nuovi membri del team non riuscivano costantemente a
trovare la documentazione esistente pertinente e ponevano ripetutamente nei canali del
team le stesse poche domande, domande che avevano in realtà già una risposta da
qualche parte nella sconfinata e mal organizzata piattaforma di documentazione
dell'agenzia. Anziché scrivere più contenuto, l'agenzia investì nel riorganizzare e
migliorare la struttura di ricerca e di navigazione della documentazione esistente, e
un sondaggio di controllo mostrò una riduzione misurabile delle domande ripetute e
un'esperienza di inserimento dichiarata sensibilmente più rapida per il nuovo
personale, senza aggiungere una sola nuova pagina di contenuto.

## Business case: motivazioni, ROI e TCO

Il ritorno del misurare e gestire deliberatamente la salute della documentazione è il
costo di crisi evitato: l'esempio dei servizi finanziari qui sopra mostra la
differenza tra una cattura proattiva e graduale della conoscenza e uno sforzo di
emergenza costoso e compresso, imposto da spostamenti imprevisti di personale. La
conoscenza critica non documentata è una passività permanente che non costa nulla in
modo visibile fino al momento in cui diventa molto costosa tutta in una volta.

Il costo totale di proprietà è per lo più la disciplina di tracciare i proxy che
questo argomento raccomanda, schemi di accesso, obsolescenza, domande ripetute, tempo
di inserimento, e la volontà di integrare le lacune di documentazione in un arretrato
prioritizzato anziché trattarle come perennemente di status inferiore al lavoro
centrato sul codice. Quella disciplina costa molto meno dell'estrazione di conoscenza
in modalità di crisi che l'esempio dei servizi finanziari mostra come alternativa.

## Antipattern e insidie

- **Contare l'esistenza della documentazione anziché l'utilità:** non dice quasi
  nulla sul fatto che la conoscenza sia davvero accessibile quando serve.
- **Scrivere più contenuto in risposta a domande ripetute, senza prima controllare
  la reperibilità:** spesso affronta del tutto il problema sbagliato.
- **Non controllare mai l'obsolescenza della documentazione rispetto a quanto il
  sistema è cambiato:** rischia contenuti attivamente fuorvianti e superati.
- **Trattare il debito di documentazione come perennemente di status inferiore al
  debito del codice:** lo lascia cronicamente depriorizzato e invisibile
  nell'arretrato.
- **Scambiare la stabilità apparente, un sistema che non cambia da anni, per basso
  rischio:** può mascherare un grave problema di bus factor non documentato dietro un
  sistema che semplicemente non ha ancora avuto bisogno del suo unico esperto.
- **Scoprire la conoscenza critica non documentata solo durante una transizione di
  personale in emergenza:** il modo di fallire costoso ed evitabile che questo
  argomento è costruito per prevenire.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** La salute della documentazione non è misurata; la
  concentrazione della conoscenza e il rischio di obsolescenza si scoprono solo
  attraverso una crisi.
- **Livello 2, Sviluppo (Develop):** Esiste una certa documentazione, ma non c'è un
  tracciamento sistematico di accesso, obsolescenza o reperibilità.
- **Livello 3, Standardizzazione (Standardize):** Accesso e obsolescenza sono
  tracciati per i sistemi critici, e il tempo di inserimento è misurato come proxy
  della salute della conoscenza in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Le lacune di documentazione sono integrate
  nell'arretrato prioritizzato di debito tecnico, confrontate con il rischio di bus
  factor per individuare i rischi combinati più gravi.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione individua e affronta
  in modo proattivo il rischio di conoscenza critica non documentata prima che una
  transizione di personale forzi la questione, e sa indicare miglioramenti
  specifici e misurabili di inserimento o di risposta agli incidenti ricondotti
  all'investimento in documentazione.

## Spunti di discussione

1. Qual è oggi la nostra singola combinazione più grave di basso bus factor e documentazione scarsa?
2. Quale domanda viene posta ripetutamente nonostante esista una risposta documentata?
3. Come ci accorgeremmo che un pezzo di documentazione critica è diventato obsoleto e fuorviante?
4. Il nostro arretrato di debito tecnico include le lacune di documentazione, o sono invisibili?
5. Quanto ci costerebbe se l'unico esperto del nostro sistema meno documentato se ne andasse quest'anno?

## Punti chiave

- Misura **l'utilità, non l'esistenza**: se la documentazione aiuta davvero, usando
  proxy come schemi di accesso, obsolescenza e domande ripetute.
- Le **domande ripetute nonostante risposte documentate** rivelano un problema di
  reperibilità, non necessariamente di sforzo sui contenuti.
- Il **tempo di inserimento fino a un contributo produttivo** è un proxy forte e
  pratico della salute complessiva della conoscenza.
- La **conoscenza critica non documentata è un rischio composto**, soprattutto se
  combinata con un basso bus factor (argomento 3.5); non costa nulla in modo
  visibile finché non costa moltissimo tutta in una volta.
- Integra le **lacune di documentazione nel tuo arretrato di debito tecnico**
  (argomento 4.5) così che competano equamente per la capacità prioritaria.

## Riferimenti e letture di approfondimento

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, di Jared
  Bhatti, Zachariah Goldberg, Ted Kubaska e Sarah Moir (pratiche pratiche di
  documentazione per i team di ingegneria).
- *A Philosophy of Software Design*, di John Ousterhout (il rapporto tra
  documentazione, complessità e manutenibilità).
- *Team Topologies*, di Matthew Skelton e Manuel Pais (implicazioni di progettazione
  organizzativa della conoscenza concentrata contro distribuita).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (la documentazione come una delle capacità correlate alle
  prestazioni di consegna).
