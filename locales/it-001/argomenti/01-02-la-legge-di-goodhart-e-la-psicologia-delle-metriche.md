# 1.2 La legge di Goodhart e la psicologia delle metriche

## Panoramica e motivazione

La [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law), dal
nome dell'economista Charles Goodhart, si enuncia di solito così: quando una
misura diventa un obiettivo, cessa di essere una buona misura. L'osservazione
originale di Goodhart, del 1975, riguardava la politica monetaria, ma la
riformulazione successiva dell'antropologa Marilyn Strathern è la versione di
cui i team di software hanno davvero bisogno, ed è la frase su cui si regge
l'intero libro. Ogni metrica di ogni argomento successivo (frequenza di
rilascio, copertura dei test, punteggi di soddisfazione) porta con sé questo
rischio, e ogni raccomandazione di questo libro è, in una forma o nell'altra,
una strategia per gestirlo.

Il meccanismo non è misterioso. Le persone rispondono agli incentivi, e una
metrica legata a una ricompensa, a una valutazione o a una reputazione è un
incentivo a prescindere dal fatto che qualcuno lo abbia voluto tale. Appena un
team sa che la «frequenza di rilascio» è osservata, il modo più economico di
muovere quel numero non è sempre quello previsto: si spezza un cambiamento
significativo in cinque rilasci banali, e il numero sale mentre nulla di reale
è migliorato. Non è una storia di malintenzionati. Ingegneri normali e in buona
fede rispondono esattamente così a incentivi progettati male, perché è
l'incentivo, non l'intenzione che sta dietro, a plasmare il comportamento
sotto pressione.

Per le grandi organizzazioni la posta in gioco è più alta perché la distanza
tra chi progetta la metrica e chi ne subisce l'effetto sul comportamento cresce
con la scala. Un responsabile di team che costruisce una metrica per il proprio
gruppo di otto persone può cercare direttamente la manipolazione e correggere
la rotta in fretta. Una metrica diffusa in una divisione di seicento persone, o
pubblicata in un rapporto governativo sulle prestazioni letto da un parlamento,
attraversa strati di persone che non hanno mai conosciuto il suo autore e hanno
ogni ragione di trattare la lettera della metrica come l'obiettivo. La
distorsione si compone con la distanza, ed è esattamente per questo che il
libro mette il suo baricentro in questo argomento e non in uno successivo.

## Principi chiave

- **Presumi che ogni metrica incentivata sarà manipolata.** Progetta contro
  questo fin dalla prima versione, non dopo aver scoperto la distorsione.
- **La manipolazione è razionale, non dolosa.** Le persone rispondono in modo
  sensato all'incentivo che hai costruito; dare loro la colpa non risolve nulla.
- **La distanza dal responsabile della metrica aumenta il rischio di
  distorsione.** Quanto più un numero si allontana da chi ne comprende
  l'intento, tanto più diventa la lettera della regola anziché il suo spirito.
- **Rapporti e intervalli resistono alla manipolazione meglio dei conteggi
  grezzi.** Un conteggio grezzo premia il volume; un rapporto ben scelto premia
  il comportamento effettivamente voluto.
- **Un guardrail non è facoltativo su una metrica incentivata.** Ogni metrica a
  cui leghi una ricompensa ha bisogno di una contro-metrica abbinata che non
  deve peggiorare.

## Raccomandazioni

### Classifica ogni metrica in base all'esposizione agli incentivi

Prima di pubblicare una metrica in un luogo visibile, chiediti direttamente: la
ricompensa, la valutazione, la reputazione o il budget di qualcuno dipende dal
fatto che questo numero si muova in una certa direzione? Se sì, è una metrica
incentivata e ha bisogno di un guardrail (vedi sotto) prima di andare in
produzione. Se no, è una metrica diagnostica (argomento 1.1) e comporta un
rischio di manipolazione più basso, ma mai nullo, perché le persone possono
comunque plasmare un numero sul quale si aspettano soltanto di essere giudicate
in futuro, anche senza un incentivo formale oggi.

### Preferisci rapporti, tassi e coorti ai conteggi grezzi

Un conteggio grezzo come «ticket chiusi» si manipola facendo di più di qualcosa
di poco valore. Un rapporto come «percentuale di ticket risolti al primo
contatto» premia il comportamento di fondo anziché il volume. Una **coorte**, un
gruppo definito da un punto di partenza comune come tutti i rilasci di una data
settimana, impedisce a un cattivo andamento recente di nascondersi dentro un
aggregato di lungo periodo lusinghiero. Ogni volta che devi scegliere tra un
conteggio e un tasso che cattura lo stesso comportamento di fondo, scegli il
tasso.

### Abbina ogni metrica incentivata a un guardrail

Un **guardrail** è una contro-metrica abbinata che non deve peggiorare mentre la
metrica primaria migliora. La frequenza di rilascio si abbina al tasso di
fallimento dei cambiamenti; il lead time al tasso di difetti sfuggiti; il tempo
di gestione di un team di assistenza alla soddisfazione dei clienti. Il
guardrail è ciò che rende visibilmente costosa la manipolazione a buon mercato:
un team che migliora il numero incentivato degradando il guardrail viene
scoperto dall'abbinamento, non dalla fortuna. Progetta il guardrail
contemporaneamente alla metrica primaria, mai come ripensamento quando la
manipolazione è già stata scoperta.

### Fai attenzione ai quattro schemi classici di manipolazione

La distorsione sotto la legge di Goodhart tende a ricadere in un piccolo numero
di forme riconoscibili. La **manipolazione della soglia** ottimizza fino a un
obiettivo e si ferma (un obiettivo di copertura dei test del 95% produce test
banali per raggiungere esattamente il 95%, non una copertura genuina). La
**manipolazione della definizione** cambia ciò che conta anziché ciò che
accade (ridefinire «risolto» per escludere i casi difficili). La
**manipolazione dei tempi** sposta il momento in cui il lavoro viene registrato
anziché il momento in cui è avvenuto (accumulare rilasci poco prima che si
chiuda la finestra di rendicontazione). La **manipolazione per sostituzione**
consegna la lettera della metrica abbandonandone l'intento (spezzare un cambio
reale in molti cambi banali per gonfiare la frequenza di rilascio). Nominare
esplicitamente questi schemi al tuo team li rende molto più facili da
riconoscere quando compaiono nei tuoi stessi numeri.

### Separa misurazione e ricompensa dove puoi

Il guardrail più forte di tutti è strutturale: disaccoppiare la metrica dalla
ricompensa individuale. Una metrica usata solo per comprendere un sistema, senza
che la retribuzione, la valutazione o la posizione di nessuno dipendano dalla
sua direzione, subisce una pressione alla manipolazione molto più debole di una
legata a una valutazione. È per questo che la distinzione tra diagnostico e
valutativo dell'argomento 1.1 conta tanto nella pratica: mantenere diagnostica
una metrica è spesso più economico e più efficace di qualsiasi ingegneria dei
guardrail applicata a posteriori.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Conteggi grezzi | Semplici da calcolare e spiegare | Molto manipolabili tramite il volume |
| Rapporti e tassi | Premiano il comportamento giusto, resistono alla manipolazione per volume | Possono nascondere il problema di un denominatore che si restringe |
| Abbinamento con guardrail | Rende visibilmente costosa la manipolazione a buon mercato | Raddoppia le metriche da definire, gestire e mantenere |
| Solo diagnostica (nessuna ricompensa individuale) | La pressione alla manipolazione più bassa tra tutte le opzioni | Leva motivazionale diretta più debole per la dirigenza |
| Metriche fortemente incentivate | Risposta comportamentale forte e rapida | Alto rischio di distorsione, spesso entro un ciclo di rendicontazione |

La tensione centrale è **potere motivazionale contro rischio di distorsione**.
Le metriche che muovono il comportamento più in fretta, legando un numero
direttamente alla ricompensa, sono esattamente quelle più esposte alla legge di
Goodhart. Si risolve la tensione riservando gli incentivi forti alle metriche di
risultato davvero difficili da manipolare a basso costo, e abbinando tutto ciò
che si incentiva a un guardrail progettato nello stesso momento, non
aggiunto dopo la prima distorsione.

## Domande da discutere con il vostro team

1. **Per ciascuna metrica da cui dipende la ricompensa di qualcuno, qual è il
   modo più economico di manipolarla, e oggi ci accorgeremmo della
   manipolazione?** Sedetevi e progettate deliberatamente l'exploit per ogni
   numero incentivato della dashboard: come farebbe un team razionale e in buona
   fede a far apparire bene questo numero senza fare il lavoro sottostante? Se
   non riuscite a indicare un modo in cui scoprireste quella manipolazione, non
   siete ancora pronti a incentivare la metrica. L'esercizio è scomodo e quel
   disagio è lo scopo.

2. **Quali delle nostre metriche attuali sono già scivolate in uno dei quattro
   schemi di manipolazione (soglia, definizione, tempi o sostituzione) senza che
   nessuno lo segnalasse?** La distorsione raramente si annuncia; si presenta
   come un numero ottimo mentre i reclami, gli incidenti o i feedback dei clienti
   raccontano un'altra storia. Passate la dashboard al vaglio di ciascuno schema
   per nome e siate onesti sulle corrispondenze.

3. **Ogni metrica incentivata della nostra dashboard ha un guardrail abbinato, e
   quel guardrail è stato progettato insieme alla metrica?** Un guardrail
   aggiunto solo dopo che la manipolazione è stata scoperta è una riparazione,
   non una scelta di progetto, e di solito arriva troppo tardi per evitare il
   primo round di danni alla fiducia. Verificate le vostre metriche incentivate
   proprio su questo abbinamento.

4. **Quanta strada fa questa metrica dalla persona che ne capisce l'intento
   alla persona il cui comportamento essa plasma?** Una metrica costruita da un
   team di piattaforma e consumata tre livelli di gestione più in là, o
   pubblicata in un rapporto pubblico letto da persone che non hanno mai visto
   la strumentazione, è molto più esposta alla manipolazione della lettera
   contro lo spirito di una che un team ha progettato per sé. Mappate quella
   distanza per le vostre metriche più rilevanti.

5. **Abbiamo mai tolto un incentivo da una metrica dopo aver scoperto che veniva
   manipolata, e quanta fiducia ci è costato rimediare?** Le organizzazioni
   scoprono spesso la legge di Goodhart a proprie spese, dopo un trimestre o un
   anno di comportamenti distorti, e la riparazione costa più della prevenzione.
   Portate un incidente reale, se ne avete uno, ed estraetene esplicitamente la
   lezione invece di passare oltre in silenzio.

6. **Dove abbiamo ritenuto la manipolazione un problema di integrità personale
   anziché una risposta razionale a un incentivo progettato male?** Dare la
   colpa alle persone per aver risposto in modo prevedibile a un incentivo che
   avete costruito raramente risolve qualcosa e spesso danneggia ulteriormente
   la fiducia. Riformulate ogni episodio di manipolazione che ricordate come un
   problema di progetto della metrica, non di carattere della persona, e
   chiedetevi quale riprogettazione lo avrebbe evitato.

## Prospettiva settoriale

**Startup.** Con un team minuscolo, il guardrail più rapido è la conversazione
diretta: tutti vedono un numero e chiedono subito «aspetta, perché è salito
così». Il rischio reale è un fondatore che lega una metrica alla narrazione per
la raccolta fondi (crescita a ogni costo) senza un guardrail abbinato, perché
gli investitori esterni esercitano proprio quel tipo di pressione distante e ad
alta posta che rende attraente la manipolazione.

**Piccola impresa.** Gli strumenti pronti all'uso spesso arrivano con dashboard
predefinite costruite attorno ai conteggi (ticket chiusi, chiamate gestite)
perché i conteggi sono facili da calcolare. Convertitele attivamente in tassi
ovunque lo strumento lo consenta, e resistete alla tentazione di legare un
singolo numero a un bonus o a una valutazione senza aver prima individuato il
suo guardrail.

**Enterprise.** La distanza è il rischio dominante: una metrica progettata da un
team di piattaforma per la diagnosi interna viene ripresa tre livelli di
gestione più avanti e trasformata in un KPI che nessuno di chi l'ha costruita
riconoscerebbe. Governatelo esplicitamente (argomento 1.4): richiedete un
guardrail documentato prima di approvare qualsiasi metrica per l'uso in una
valutazione delle prestazioni o in uno scorecard dirigenziale.

**Settore pubblico.** Le misure di prestazione pubblicate subiscono la pressione
alla manipolazione più forte di qualsiasi categoria di questo libro, perché un
obiettivo mancato può avere conseguenze di bilancio o politiche. Verificate la
definizione stessa con cadenza fissa, non solo il numero, poiché lo schema
classico di manipolazione nel settore pubblico è ridefinire in silenzio chi
conta (una lista d'attesa «risolta» riclassificando chi sta aspettando) anziché
migliorare il servizio sottostante.

## Esempi

**Enterprise.** Un'azienda tecnologica del commercio al dettaglio fissò un
obiettivo di copertura dei test automatici del 99% su tutti i servizi, legato a
un punteggio di qualità di team usato nelle revisioni trimestrali. In due
trimestri la copertura raggiunse il 99% e il tasso di incidenti salì. Un audit
scoprì che i team scrivevano test banali, che verificavano soltanto che una
funzione ritornasse senza sollevare errori, al solo scopo di soddisfare lo
strumento di copertura, mentre il collaudo genuino dei casi limite non era
migliorato affatto. La soluzione sostituì l'obiettivo di copertura grezza con
una metrica abbinata: copertura più un punteggio di mutation testing
(argomento 4.2) che misura se i test intercettano davvero i difetti iniettati,
molto più difficile da manipolare a basso costo.

**Settore pubblico.** L'agenzia statale per l'assicurazione contro la
disoccupazione era misurata sui giorni mediani al primo pagamento, pubblicati
per il suo parlamento. Sotto pressione per raggiungere l'obiettivo, un ufficio
regionale cominciò a riclassificare in silenzio le pratiche più difficili da
elaborare come «incomplete» e a escluderle dal denominatore, il che faceva
apparire ottima la mediana pubblicata mentre alcuni richiedenti aspettavano
molto più di quanto il rapporto suggerisse. Un audit indipendente della
definizione stessa, non solo del numero, scoprì la pratica. La correzione
dell'agenzia congelò la definizione, pubblicò apertamente i criteri di
esclusione e aggiunse una metrica guardrail che monitora il tasso di pratiche
incomplete, così che un picco di riclassificazioni sarebbe stato visibile
anziché nascosto.

## Business case: motivazioni, ROI e TCO

Il ritorno del prendere sul serio la legge di Goodhart è il rifacimento
evitato. Un'organizzazione che progetta i guardrail in anticipo spende un po' di
sforzo in più per definire una seconda metrica accanto alla prima. Un'organizzazione
che salta questo passaggio spende spesso un trimestre intero o più di impegno
mal diretto prima che la distorsione emerga, seguito dal costo molto più
pesante di disfare i comportamenti manipolati e ricostruire dopo la fiducia nel
numero. L'esempio del commercio al dettaglio qui sopra è tipico: economico da
prevenire, costoso da riparare.

Il costo totale di proprietà di un guardrail non è nullo: è una seconda metrica
da definire, strumentare e riesaminare. Ma quel costo è piccolo e fisso rispetto
al costo illimitato di un incentivo che premia in silenzio il comportamento
sbagliato per mesi prima che qualcuno se ne accorga. Ogni argomento successivo
include questo compromesso nel conto, ed è per questo che l'abbinamento ai
guardrail compare come raccomandazione in tutto il resto del libro e non solo
qui.

## Antipattern e insidie

- **Pubblicare una metrica incentivata senza guardrail:** la causa radice più
  comune in assoluto di una dashboard distorta in questo libro.
- **Trattare la manipolazione come una colpa personale:** dà la colpa alle
  persone per una risposta razionale a un incentivo progettato male, e non
  risolve nulla.
- **Verificare il numero ma mai la definizione:** il classico modo di fallire
  del settore pubblico, in cui la metrica sembra a posto perché chi conta è
  cambiato in silenzio.
- **Supporre che una metrica che funzionava come diagnostica resti sicura
  quando diventa valutativa:** l'esposizione cambia nell'istante in cui si
  aggancia una ricompensa, anche se nient'altro della metrica cambia.
- **Progettare il guardrail solo dopo il primo episodio di manipolazione:** una
  riparazione che arriva quando il danno alla fiducia è già fatto.
- **Ignorare la distanza:** supporre che una metrica sarà letta come l'ha
  concepita il suo progettista una volta che viaggia a diversi livelli di
  gestione di distanza, o in un rapporto pubblico.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche sono incentivate in modo
  estemporaneo, senza considerare il rischio di manipolazione, e la distorsione
  si scopre solo dopo che qualità o fiducia ne hanno visibilmente risentito.
- **Livello 2, Sviluppo (Develop):** Alcuni team riconoscono la manipolazione a
  posteriori e si adeguano in modo informale, ma non c'è una pratica coerente di
  progettare i guardrail in anticipo.
- **Livello 3, Standardizzazione (Standardize):** Ogni metrica incentivata in
  tutta l'organizzazione richiede un guardrail documentato prima
  dell'approvazione, e i quattro schemi di manipolazione sono nominati e
  insegnati.
- **Livello 4, Gestione (Manage):** Il rischio di manipolazione è monitorato
  attivamente: le definizioni sono verificate periodicamente, le coppie di
  guardrail sono riesaminate per capire se intercettano ancora la distorsione, e
  gli episodi di manipolazione sono tracciati come metrica a sé.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione tratta la legge
  di Goodhart come un vincolo di progetto permanente, riesaminato in automatico
  ogni volta che si propone una nuova metrica, e sa indicare riprogettazioni
  specifiche che hanno evitato la distorsione prima che avvenisse e non solo
  dopo.

## Spunti di discussione

1. Qual è la metrica più rilevante della nostra organizzazione che oggi non ha un guardrail?
2. Abbiamo mai visto un numero migliorare mentre la realtà sottostante peggiorava?
3. Chi se ne accorgerebbe se la definizione dietro una delle nostre metriche pubbliche cambiasse in silenzio?
4. Quale dei quattro schemi di manipolazione (soglia, definizione, tempi, sostituzione) è più probabile nella nostra organizzazione?
5. Quanta fiducia ci costerebbe scoprire che una metrica importante è stata manipolata per un anno?

## Punti chiave

- **Legge di Goodhart:** una misura che diventa un obiettivo smette di essere una
  buona misura, e questo governa ogni metrica di questo libro.
- La manipolazione è una **risposta razionale all'incentivo**, non un difetto di
  carattere; correggi il progetto dell'incentivo, non le persone.
- Preferisci **rapporti, tassi e coorti** ai conteggi grezzi ovunque catturino lo
  stesso comportamento.
- Ogni metrica incentivata ha bisogno di un **guardrail**, progettato nello
  stesso momento, non aggiunto dopo che la distorsione è stata scoperta.
- Riconosci per nome i quattro schemi di manipolazione: **soglia, definizione,
  tempi e sostituzione**.
- La **distanza** tra chi progetta una metrica e chi ne subisce l'effetto sul
  comportamento aumenta il rischio di distorsione; tienila corta dove puoi.

## Riferimenti e letture di approfondimento

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience"
  (1975): l'origine della legge di Goodhart.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University
  System" (1997): la riformulazione più citata, «when a measure becomes a
  target, it ceases to be a good measure».
- *Seeing Like a State*, di James C. Scott (come le metriche leggibili
  distorcono i sistemi che misurano, alla scala delle nazioni).
- *The Tyranny of Metrics*, di Jerry Z. Muller (un trattamento di un intero
  libro sulla fissazione per le metriche e sui suoi costi in molte professioni).
- *Lean Analytics*, di Alistair Croll e Benjamin Yoskovitz (metriche di vanità
  contro metriche azionabili, e progetto dei guardrail in un contesto startup).
- Linee guida del U.S. Government Accountability Office (GAO) sulla misurazione
  delle prestazioni e sul GPRA Modernization Act: rendicontazione delle
  prestazioni nel settore pubblico e rischio di manipolazione.
