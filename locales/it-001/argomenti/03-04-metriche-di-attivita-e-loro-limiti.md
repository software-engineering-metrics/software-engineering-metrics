# 3.4 Metriche di attività e loro limiti

## Panoramica e motivazione

L'**attività** (activity), la A di SPACE (argomento 3.1), conta il volume del lavoro
di ingegneria osservabile dalla telemetria di sistema: commit, pull request aperte,
righe di codice modificate, commenti di revisione del codice lasciati. È la
dimensione SPACE più facile da misurare, perché ognuno di questi eventi è già
registrato automaticamente dagli strumenti che i team di ingegneria usano ogni
giorno, e quella facilità di misurazione è proprio ciò che rende questa dimensione
la più pericolosa da sovrappesare. L'attività è un segnale reale e legittimo se
usata con cautela. Usata come proxy autonomo della produttività, è la famiglia di
metriche più manipolata e più fuorviante dell'intera storia della misurazione
dell'[ingegneria del software](https://en.wikipedia.org/wiki/Software_engineering).

Il problema di fondo è che l'attività misura il movimento, non il valore. Un
conteggio di commit non distingue un commit che ha risolto con eleganza un problema
difficile da un commit che ha spezzato un cambiamento significativo in cinque per
apparire più produttivo (la manipolazione per sostituzione dell'argomento 1.2,
applicata direttamente a questa famiglia di metriche). Le righe di codice
modificate premiano la verbosità rispetto alla competenza molto più preziosa di
eliminare il codice superfluo. Un ingegnere che passa un'intera giornata in
pensiero profondo e ininterrotto prima di scrivere dieci righe eleganti e ben
testate appare meno «attivo» con queste metriche di uno che committa ogni venti
minuti cambiamenti superficiali e non rivisti, anche se il primo sta molto spesso
producendo molto più valore reale.

Per i team grandi, la tentazione di usare le metriche di attività per la
valutazione individuale è costante e ben documentata, perché l'attività è facile da
attribuire a una persona specifica e facile da calcolare automaticamente, a
differenza dei segnali più difficili e più onesti delle altre dimensioni SPACE.
Questo argomento esiste proprio per nominare quella tentazione e dare ai team
linguaggio e prove per resisterle, perché una volta che un'organizzazione comincia
a classificare individualmente gli ingegneri per numero di commit o righe di
codice, il danno a collaborazione, qualità del codice e morale è ben documentato e
difficile da invertire.

## Principi chiave

- **L'attività misura il movimento, non il valore.** È un segnale contestuale
  legittimo, mai un proxy autonomo della produttività.
- **È la famiglia di metriche più usata male nella storia della misurazione
  dell'ingegneria del software.** Tratta quella storia come un avvertimento, non
  come una coincidenza.
- **La classificazione individuale per attività è quasi sempre dannosa.** Danneggia
  la collaborazione, premia un'operosità superflua e visibile e invita alla
  manipolazione quasi subito.
- **I dati di attività sono più utili in aggregato, come contesto per le altre
  dimensioni,** non come segnale indipendente su una singola persona o su un team.
- **Il lavoro profondo e prezioso appare spesso silenzioso su una dashboard di
  attività.** La famiglia di metriche è strutturalmente sbilanciata contro proprio
  il tipo di pensiero che produce i migliori risultati di ingegneria.

## Raccomandazioni

### Non classificare né valutare mai gli individui in base ai conteggi grezzi di attività

È la regola più dura e più importante di questo argomento. Numero di commit, righe
di codice e numero di pull request non dovrebbero mai comparire in una valutazione
individuale delle prestazioni, in una classifica comparativa o in qualsiasi contesto
in cui la retribuzione, la posizione o la reputazione di un ingegnere dipendano dal
numero. Segue direttamente dal principio di esposizione agli incentivi dell'argomento
1.2: nel momento in cui l'attività diventa una metrica individuale incentivata, la
manipolazione segue quasi subito, e il comportamento che ne risulta, gonfiare i
commit, spezzare i cambiamenti in modo banale, evitare il lavoro profondo e poco
appariscente che produce pochi eventi visibili, danneggia attivamente
l'organizzazione.

### Usa i dati di attività in aggregato, come contesto, non come verdetto

I dati di attività diventano davvero utili quando sono aggregati a livello di team
e letti accanto alle altre dimensioni SPACE: un forte calo dell'attività di commit
a livello di team che coincide con un aumento della soddisfazione potrebbe indicare
che il team ha finalmente avuto respiro per pensare in profondità e ripagare debito
tecnico, uno schema positivo, non negativo. Letto in isolamento, lo stesso calo
appare allarmante. Il contesto delle altre dimensioni è ciò che rende i dati di
attività interpretabili anziché fuorvianti.

### Preferisci segnali di attività vicini alla qualità al puro volume

Dove i dati di attività sono comunque utili, preferisci segnali corretti per la
qualità rispetto ai conteggi grezzi: la dimensione delle pull request rispetto alla
profondità della revisione (argomento 2.9), o il rapporto tra codice nuovo e codice
rimosso, che può rivelare se un team sta accumulando complessità o semplificando
attivamente. Questi segnali corretti sono ancora dati della dimensione attività ma
resistono alla manipolazione più grossolana che i conteggi grezzi invitano.

### Fai attenzione in particolare allo schema di manipolazione per sostituzione nei dati di attività

Il modo più comune in cui le metriche di attività vengono manipolate è proprio lo
schema di sostituzione dell'argomento 1.2: spezzare un lavoro genuinamente
significativo in molti piccoli eventi banali per gonfiare un conteggio. Se la
frequenza di commit o di pull request sale mentre la complessità o la dimensione
sottostante dei cambiamenti cala bruscamente, indaga prima di attribuire un vero
miglioramento di produttività, usando la stessa disciplina diagnostica che
l'argomento 2.10 raccomanda per la frequenza di rilascio.

### Nomina esplicitamente e scoraggia il teatro dell'attività

Il **teatro dell'attività** (activity theater) è il lavoro svolto, consciamente o
no, principalmente perché è visibile e contabile anziché perché è prezioso:
frequenti commit piccoli, attività vistosa a tarda notte o operosità visibile nei
canali condivisi. Nominare esplicitamente questo schema al tuo team, ed essere
trasparenti sul fatto che la dirigenza non usa l'attività grezza per giudicare il
contributo, toglie gran parte dell'incentivo a che accada.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Classifica individuale per attività | Semplice, facile da calcolare, sembra direttamente azionabile | Manipolata quasi subito; danneggia collaborazione e morale; misura la cosa sbagliata |
| Nessuna misurazione dell'attività | Evita del tutto il rischio di uso improprio | Perde un segnale contestuale davvero utile per individuare schemi a livello di team |
| Attività aggregata a livello di team, letta nel contesto | Fornisce contesto utile senza rischio individuale | Richiede disciplina per essere interpretata accanto alle altre dimensioni anziché in isolamento |
| Segnali di attività corretti per la qualità | Resistono alla manipolazione più grossolana dei conteggi grezzi | Più complessi da calcolare e spiegare di un semplice conteggio |

La tensione centrale è **utilità contro rischio di uso improprio**. I dati di
attività, letti con attenzione in aggregato e nel contesto, sono davvero utili per
individuare schemi come un ritmo insostenibile o un team che trova in silenzio lo
spazio per affrontare il debito tecnico. Gli stessi dati, usati come scheda di
valutazione individuale, sono quasi uniformemente dannosi. Si risolve la tensione
non evitando del tutto i dati di attività ma costruendo una regola organizzativa
ferrea contro l'uso individuale, permettendo e anzi incoraggiando un uso
ponderato e contestualizzato a livello di team.

## Domande da discutere con il vostro team

1. **Qualcuno nella nostra organizzazione è mai stato valutato, formalmente o
   informalmente, usando un conteggio grezzo di attività come commit o righe di
   codice?** Chiedetelo direttamente e siate pronti a una risposta scomoda ma
   necessaria; questo uso improprio avviene spesso in silenzio, attraverso un
   commento buttato lì da un manager, senza mai diventare policy ufficiale.

2. **Che aspetto avrebbe il teatro dell'attività nel nostro team in particolare, e
   ne abbiamo visto segni?** Nominare la forma specifica e plausibile che questo
   schema potrebbe assumere nel vostro team lo rende molto più facile da
   riconoscere se comincia a succedere.

3. **Quando i dati di attività a livello di team si muovono, li interpretiamo
   accanto alle altre dimensioni SPACE o in isolamento?** Un calo dell'attività
   letto in isolamento appare preoccupante; lo stesso calo letto accanto a un
   miglioramento di soddisfazione o di prestazioni può apparire uno schema
   genuinamente positivo. Confrontate la vostra pratica di revisione effettiva con
   questa distinzione.

4. **Abbiamo mai visto un aumento della frequenza di commit o pull request
   accompagnato da una dimensione media dei cambiamenti in calo, che suggerisce una
   frammentazione banale anziché un genuino guadagno di produttività?** Prendete
   dati reali e cercate questo specifico schema di manipolazione per sostituzione.

5. **Come parliamo oggi di «chi contribuisce di più» nel nostro team, e quella
   conversazione si appoggia implicitamente ai dati di attività anche senza una
   metrica formale?** Una distorsione informale e non misurata verso l'operosità
   visibile può plasmare percezione e ricompensa anche senza una policy esplicita
   basata sull'attività; fatela emergere con onestà.

6. **Che aspetto ha nel nostro team il lavoro davvero prezioso ma silenzioso,
   pensiero profondo, progettazione accurata, mentoring, e come ci assicuriamo che
   sia riconosciuto nonostante generi pochi dati visibili di attività?** Questa
   domanda è il complemento positivo delle precedenti: nominare come appare il buon
   lavoro silenzioso aiuta a proteggerlo dall'essere trascurato a favore di un
   lavoro più rumoroso e più contabile.

## Prospettiva settoriale

**Startup.** Con un team piccolo e strettamente collaborativo, i dati di attività
sono di solito visibili direttamente senza bisogno di una dashboard, e il rischio
della classifica individuale da cui questo argomento mette in guardia è meno
probabile semplicemente perché tutti sanno già su che cosa lavora ciascuno. Il
rischio è piuttosto un fondatore che favorisce inconsciamente un comportamento
visibilmente «indaffarato» quando prende le prime decisioni di assunzione o di
equity.

**Piccola impresa.** I dati di attività dei vostri strumenti esistenti vanno bene
per dare un'occhiata e farsi un'idea generale del throughput del team, ma resistete
a usarli per confrontare direttamente i singoli collaboratori; il vero valore di un
piccolo team si concentra spesso in poche persone che svolgono un lavoro silenzioso
e ad alta leva che una vista basata sui commit sottovaluterebbe sistematicamente.

**Enterprise.** È qui che la tentazione della classifica individuale è più forte e
più dannosa, perché i dati di attività sono il segnale più facile da estrarre per un
processo di valutazione delle prestazioni che copre migliaia di ingegneri, e la
pressione a trovare *qualche* input quantificabile è reale. Costruite una policy
esplicita, comunicata e applicata contro la classifica individuale per attività, e
verificate periodicamente le pratiche di valutazione delle prestazioni per
confermare che la policy sia davvero seguita nella pratica, non solo dichiarata.

**Settore pubblico.** Le metriche di attività possono essere allettanti da citare in
un rapporto pubblico come prova di produttività («diecimila commit quest'anno»),
ma questo tipo di titolo è quasi privo di significato e può invitare proprio
l'esame sbagliato non appena un revisore competente fa notare che l'attività grezza
non dice nulla sui risultati. Riportate invece dati di risultato e di prestazione
(argomento 3.3), ed evitate i conteggi di attività in qualsiasi comunicazione
rivolta all'esterno.

## Esempi

**Enterprise.** La dirigenza di ingegneria di un'azienda software aveva cominciato,
senza una policy formale, a fare riferimento in modo informale ai dati sulla
frequenza di commit individuale nelle discussioni sulle promozioni. Una revisione
interna, avviata da un progetto non correlato di analisi del turnover, scoprì che
gli ingegneri che lavoravano sui sistemi più complessi e di maggior valore
dell'azienda, che richiedevano lunghi periodi di attenta progettazione prima che
venisse scritto codice, avevano sistematicamente conteggi di commit più bassi
rispetto agli ingegneri su sistemi più semplici e sviluppati in modo più
incrementale, ed erano di conseguenza sottilmente svantaggiati nelle conversazioni
di promozione. La dirigenza emanò una policy esplicita e comunicata che vietava i
riferimenti ai conteggi di attività nelle discussioni su prestazioni e promozioni, e
spostò le prove per le promozioni verso l'approccio di prestazione a più segnali
dell'argomento 3.3.

**Settore pubblico.** Un'agenzia di servizi digitali, sotto pressione per dimostrare
la produttività a una commissione legislativa di controllo, propose inizialmente di
riportare il totale di commit e di righe di codice scritte nel suo programma di
ingegneria come prova del valore consegnato. Un consulente tecnico interno si
oppose, osservando correttamente che quell'impostazione invitava proprio l'esame
sbagliato, dato che un membro della commissione tecnicamente competente avrebbe
potuto facilmente far notare che il puro volume di codice non dice nulla sul fatto
che il codice funzionasse o contasse. Il rapporto rivisto dell'agenzia usò invece
metriche di risultato (argomento 5.3): riduzione degli errori segnalati dai
cittadini e aumento del completamento in autoservizio, che reggevano molto meglio
alle domande della commissione di quanto avrebbero fatto i numeri di attività.

## Business case: motivazioni, ROI e TCO

Il ritorno del trattare bene le metriche di attività, usandole nel contesto anziché
come schede di valutazione individuali, è il danno evitato: le organizzazioni che
classificano individualmente gli ingegneri per attività vedono in modo affidabile
comportamenti di manipolazione, collaborazione ridotta (ingegneri che proteggono il
proprio output visibile anziché aiutare un collega) e una distorsione sistematica
contro il lavoro profondo e ad alta leva che spesso produce il maggior valore
generando la minor attività visibile. Invertire quel danno, una volta radicato in
una cultura di valutazione delle prestazioni, è davvero difficile e lento.

Il costo totale per evitare questa trappola è per lo più disciplina organizzativa:
una policy esplicita, applicata in modo coerente, contro la classifica individuale
per attività, e l'impegno a investire invece nella misurazione delle prestazioni più
difficile e più onesta descritta nell'argomento 3.3. Quella disciplina costa meno
delle decisioni di promozione mal dirette, della collaborazione danneggiata e dei
comportamenti di manipolazione che le metriche di attività individuali producono in
modo affidabile nel tempo.

## Antipattern e insidie

- **Classifica individuale per numero di commit o righe di codice:** l'uso
  improprio singolarmente più dannoso e storicamente più comune dell'intero libro.
- **Teatro dell'attività:** lavoro svolto principalmente per visibilità anziché per
  valore, una risposta del tutto prevedibile alla valutazione basata sull'attività.
- **Interpretare in isolamento un calo dell'attività a livello di team, senza
  controllare le altre dimensioni SPACE:** può scambiare uno schema genuinamente
  positivo per uno preoccupante.
- **Citare conteggi grezzi di attività nelle comunicazioni esterne o rivolte alla
  dirigenza:** invita proprio l'esame sbagliato e dice poco sul valore effettivo.
- **Sottovalutare sistematicamente il lavoro profondo e accurato che genera pochi
  eventi visibili:** una distorsione strutturale incorporata in tutta questa
  famiglia di metriche.
- **Una distorsione informale e senza policy verso l'attività che si insinua nelle
  conversazioni di promozione o di valutazione:** dannosa anche senza una metrica
  ufficiale alle spalle.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche di attività sono usate, formalmente
  o informalmente, per valutare o classificare gli individui, senza alcuna
  consapevolezza del rischio.
- **Livello 2, Sviluppo (Develop):** Esiste una certa consapevolezza del rischio, ma
  nessuna policy esplicita impedisce che i dati di attività influenzino in modo
  informale le valutazioni o le discussioni sulle promozioni.
- **Livello 3, Standardizzazione (Standardize):** Una policy esplicita e comunicata
  in tutta l'organizzazione vieta la classifica individuale per attività, e i dati
  di attività sono usati solo in un contesto aggregato, a livello di team.
- **Livello 4, Gestione (Manage):** Le pratiche di valutazione delle prestazioni e
  di promozione sono verificate periodicamente per confermare che la policy sia
  seguita nella pratica, e i segnali di attività corretti per la qualità sostituiscono
  i conteggi grezzi dove i dati di attività sono comunque usati.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha spostato in modo
  dimostrabile la cultura della valutazione dalle metriche di attività verso
  l'approccio di prestazione a più segnali dell'argomento 3.3, con un miglioramento
  visibile della collaborazione e una riduzione dei comportamenti di manipolazione
  come prova che lo spostamento ha funzionato.

## Spunti di discussione

1. Qualcuno qui si è mai sentito valutato, anche informalmente, da quanto «indaffarata» apparisse la propria attività?
2. Che aspetto avrebbe il teatro dell'attività specificamente nel nostro team?
3. Abbiamo una policy esplicita e scritta contro la classifica individuale per attività, ed è davvero seguita?
4. Quale lavoro silenzioso e di alto valore nel nostro team genera oggi meno dati visibili di attività?
5. Come riprogetteremmo le prove per la valutazione delle prestazioni per eliminare del tutto i conteggi di attività?

## Punti chiave

- L'attività misura il **movimento, non il valore**; è la famiglia di metriche più
  usata male nella storia dell'ingegneria del software.
- **Non classificare né valutare mai gli individui** in base ai conteggi grezzi di
  attività; è la regola più dura e più importante di questo argomento.
- Usa i dati di attività **in aggregato, come contesto** per le altre dimensioni
  SPACE, mai come verdetto autonomo.
- Fai attenzione al **teatro dell'attività** e allo **schema di manipolazione per
  sostituzione** (argomento 1.2) specificamente in questa famiglia di metriche.
- Il lavoro profondo e di alto valore genera spesso **meno dati visibili di
  attività**; proteggilo dall'essere sottovalutato in modo sistematico.

## Riferimenti e letture di approfondimento

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann,
  Brian Houck e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue*
  (2021).
- *Peopleware: Productive Projects and Teams*, di Tom DeMarco e Timothy Lister (le
  ragioni contro il misurare gli ingegneri dall'operosità visibile).
- *Deep Work: Rules for Focused Success in a Distracted World*, di Cal Newport (il
  valore del lavoro silenzioso e ininterrotto che le metriche di attività
  sottostimano sistematicamente).
- *The Tyranny of Metrics*, di Jerry Z. Muller (la fissazione per le metriche e i
  suoi costi, direttamente applicabili alla valutazione basata sull'attività).
