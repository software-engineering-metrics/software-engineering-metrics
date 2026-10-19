# 3.5 Metriche di comunicazione e collaborazione

## Panoramica e motivazione

**Comunicazione e collaborazione**, la C di SPACE (argomento 3.1), misura come
l'informazione fluisce davvero tra persone e team: quanto sia reperibile la
documentazione, quanto uniformemente si diffonda la conoscenza in un team, quanto
bene si coordinino le dipendenze tra team e come i nuovi membri si inseriscano nel
flusso della comprensione condivisa. Questa dimensione è spesso la meno
strumentata delle cinque, proprio perché è più difficile da osservare dei dati di
consegna e meno personale dei dati di soddisfazione, e quella lacuna è un errore,
perché i guasti qui sono spesso la causa radice di problemi che compaiono,
attribuiti male, in ogni altra dimensione.

Un tasso di fallimento dei cambiamenti in crescita (argomento 2.10) che sembra un
problema di test è a volte in realtà un problema di comunicazione: un team che non
sapeva del cambiamento di una dipendenza finché non si è rotto in produzione. Un
trend di soddisfazione in calo (argomento 3.2) che sembra un problema di carico di
lavoro è a volte in realtà un problema di isolamento: un ingegnere che è stato
escluso in silenzio dalle conversazioni in cui si prendono le decisioni. La tesi
centrale di questo argomento è che comunicazione e collaborazione meritano una
misurazione diretta proprio perché i loro guasti si camuffano da altri problemi, e
un team che insegue la causa radice sbagliata spreca sforzo reale a correggere la
cosa sbagliata.

Per i team grandi, questa dimensione diventa strutturalmente più difficile da
sostenere proprio mentre diventa più importante. Il coordinamento di un team di
cinque persone avviene attraverso la vicinanza quotidiana e non richiede quasi
alcuna misurazione deliberata; un'organizzazione di cinquecento persone sparse tra
fusi orari e unità di business dipende da documentazione, reperibilità e
meccanismi di coordinamento tra team che vanno progettati deliberatamente e
monitorati attivamente, perché i canali informali che funzionavano su piccola scala
semplicemente non arrivano così lontano.

## Principi chiave

- **I guasti di comunicazione si camuffano spesso da altri problemi.** Un problema
  di qualità o di soddisfazione può avere una causa radice di collaborazione.
- **Questa dimensione è la più difficile da strumentare automaticamente**, e la
  tentazione è di saltarla del tutto; resisti a quella tentazione deliberatamente.
- **La concentrazione della conoscenza è un rischio misurabile, non una vaga
  preoccupazione.** Traccia quanto sia ristretto il gruppo che detiene la
  conoscenza critica.
- **L'attrito delle dipendenze tra team è spesso invisibile ai team coinvolti**
  finché qualcuno non lo misura direttamente.
- **La velocità di inserimento è un proxy diretto e misurabile di quanto bene la
  comprensione condivisa fluisca davvero** in un'organizzazione.

## Raccomandazioni

### Misura direttamente la concentrazione della conoscenza

Traccia quante persone possono rivedere, modificare o far funzionare con
competenza ciascun componente critico del sistema: un componente con una sola
persona qualificata ha un **[bus factor](https://en.wikipedia.org/wiki/Bus_factor)**
pari a uno, un rischio grave e spesso invisibile (l'argomento sul mantenere sistemi
longevi del libro gemello `software-engineering-guide` lo tratta più in
profondità). I dati di blame del controllo di versione, combinati con i registri di
rotazione della reperibilità, possono far emergere questa concentrazione in modo
automatico: cerca i componenti in cui un solo autore o un solo addetto alla
reperibilità rappresenta una quota sproporzionata di cambiamenti o di risposte agli
incidenti in un periodo significativo.

### Misura l'attrito delle dipendenze tra team con un segnale diretto

Traccia quanto tempo passa da quando viene sollevata a quando viene risolta una
richiesta tra team, una modifica API necessaria, un aggiornamento di una libreria
condivisa, un rilascio coordinato, in modo simile nello spirito alla scomposizione
del cycle time dell'argomento 2.6 ma applicata specificamente al coordinamento tra
team anziché dentro un team. Un team che aspetta costantemente settimane per una
dipendenza di cui è responsabile un altro team ha un problema di collaborazione che
non apparirà in modo netto nelle metriche di consegna interne di nessuno dei due
team.

### Usa la reperibilità della documentazione, non la sua sola esistenza, come segnale

Un wiki pieno di pagine obsolete o introvabili non è prova di buona comunicazione
solo perché il contenuto esiste tecnicamente da qualche parte. Dove possibile,
traccia con quale frequenza la documentazione viene effettivamente consultata, con
quale frequenza un nuovo membro del team riferisce di non riuscire a trovare una
risposta di cui aveva bisogno, o con quale frequenza la stessa domanda viene posta
ripetutamente in un canale di chat perché la risposta, benché documentata, non era
reperibile. Questo collega direttamente la qualità della documentazione (argomento
4.6) alle preoccupazioni di collaborazione di questa dimensione.

### Traccia il tempo di inserimento fino a un contributo produttivo come proxy diretto

Il tempo da quando un nuovo membro entra nel team al suo primo contributo
significativo e indipendente è un proxy forte e pratico di quanto bene la
comprensione condivisa fluisca davvero in un'organizzazione: un team in cui la
conoscenza vive interamente nella testa delle persone inserisce lentamente e in
modo imprevedibile; un team con documentazione davvero buona, responsabilità
chiare e mentoring accessibile inserisce più in fretta e in modo più coerente.
Traccia esplicitamente questa metrica e tratta un tempo di inserimento lungo o molto
variabile come un segnale di collaborazione, non solo come una questione di risorse
umane.

### Mappa periodicamente le reti di comunicazione effettive, non solo gli organigrammi

Un organigramma descrive chi dovrebbe riferire a chi; raramente descrive chi parla
davvero con chi per portare a termine il lavoro. Un'analisi periodica e leggera dei
modelli di comunicazione, delle reti di revisione del codice (chi rivede il lavoro
di chi) o della sovrapposizione nella partecipazione alle riunioni può rivelare una
struttura di collaborazione reale che differisce sostanzialmente dall'organigramma
formale, esponendo spesso un collo di bottiglia informale (una persona attraverso
cui tutti passano) o una sacca isolata (un sottoteam che è uscito dal flusso
informativo più ampio) che altrimenti resterebbe invisibile.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessuna misurazione diretta della collaborazione | Poco overhead | Le cause radice vengono attribuite male ad altre dimensioni; i rischi restano invisibili |
| Tracciamento della concentrazione della conoscenza | Fa emergere direttamente un rischio reale e grave (bus factor) | Richiede di combinare dati di più sistemi (controllo di versione, reperibilità) |
| Tracciamento dell'attrito delle dipendenze tra team | Rivela problemi di coordinamento invisibili all'interno di entrambi i team | Richiede strumentazione deliberata; non è automatico dagli strumenti esistenti |
| Mappatura della rete di comunicazione | Rivela la struttura informale reale dietro l'organigramma | Può sembrare invasiva se non gestita con la stessa cura dei dati di soddisfazione |

La tensione centrale è **difficoltà di strumentazione contro valore diagnostico**.
Questa dimensione è davvero più difficile da misurare automaticamente dei dati di
consegna o di attività, e quella difficoltà è proprio il motivo per cui molte
organizzazioni la saltano, anche se i suoi guasti sono spesso la causa radice
nascosta di problemi attribuiti ad altre dimensioni. Si risolve la tensione
partendo dai segnali di maggior valore e più trattabili, concentrazione della
conoscenza e attrito delle dipendenze tra team, entrambi ricavabili in gran parte
da dati esistenti di controllo di versione e di issue tracking, prima di tentare
un'analisi più ambiziosa della rete di comunicazione.

## Domande da discutere con il vostro team

1. **Conosciamo il nostro bus factor per ciascun componente critico del sistema, o
   lo scopriremmo solo a nostre spese quando l'unica persona che lo comprende non
   fosse disponibile?** Prendete i dati di controllo di versione e di reperibilità
   per i vostri sistemi più critici e verificate con onestà quanto sia concentrata
   la conoscenza.

2. **Quanto tempo richiede in genere risolvere una richiesta di dipendenza tra
   team, e uno dei due team coinvolti si sarebbe accorto di quell'attrito senza
   misurarlo deliberatamente?** Scegliete una dipendenza recente tra team e
   ricostruite la sua cronologia effettiva; la risposta è spesso più lunga, e meno
   visibile a chi è coinvolto, di quanto uno dei due team presumesse.

3. **Quando abbiamo avuto di recente un problema di qualità o di soddisfazione, un
   guasto di comunicazione o di collaborazione potrebbe essere stato parte della
   vera causa radice?** Riguardate un incidente recente o un calo di soddisfazione e
   ponetevi questa domanda in modo specifico, anziché accettare la prima
   spiegazione, più ovvia.

4. **Quanto tempo ci mette un nuovo membro del team a dare il suo primo contributo
   significativo e indipendente, e quanto varia quel tempo da persona a persona?**
   Un tempo di inserimento lungo o molto variabile è un sintomo diretto e
   misurabile di quanto bene la comprensione condivisa fluisca nel vostro team.

5. **La nostra rete di comunicazione informale corrisponde al nostro organigramma
   formale, o si è sviluppato un collo di bottiglia nascosto o una sacca isolata
   che nessuno ha nominato?** Se non lo avete mai guardato direttamente, quella
   assenza merita già una discussione.

6. **La nostra documentazione è davvero reperibile, o esiste semplicemente da
   qualche parte dove è difficile trovarla?** Chiedetelo a un nuovo membro recente
   del team, oppure provate deliberatamente a rispondere a una domanda reale usando
   solo le vostre risorse documentate, e osservate come va davvero l'esperienza.

## Prospettiva settoriale

**Startup.** La comunicazione avviene in modo naturale attraverso la vicinanza e la
conversazione quotidiana in un team piccolo, e la misurazione formale è di solito
superflua. Il rischio da osservare è che il bus factor si concentri in modo
pericoloso man mano che il team cresce oltre la dimensione in cui l'osmosi
informale raggiunge ancora tutti, spesso attorno a otto-dodici persone.

**Piccola impresa.** Una semplice conversazione periodica e onesta, «chi è l'unica
persona che capisce questo sistema», fa spesso emergere i rischi più critici di
concentrazione della conoscenza senza bisogno di strumentazione formale. Date
priorità prima alla documentazione delle due o tre aree di conoscenza più fragili
e più concentrate.

**Enterprise.** L'attrito delle dipendenze tra team e la concentrazione della
conoscenza scalano entrambi male qui, dato che più team significano più superficie
di coordinamento e più sistemi critici che possono finire in carico a un gruppo
sempre più ristretto di esperti di lungo corso. Investite deliberatamente nella
strumentazione che questo argomento raccomanda, dato che la consapevolezza informale
non può davvero coprire un'organizzazione di questa scala.

**Settore pubblico.** I sistemi longevi e le lunghe permanenze dei dipendenti,
comuni nelle organizzazioni del settore pubblico, possono creare un grave rischio di
bus factor nascosto dietro un'apparente stabilità, dato che un sistema che non è
passato di mano in dieci anni può dipendere interamente da una o due persone vicine
alla pensione. Trattate la misurazione della concentrazione della conoscenza come
una questione di continuità operativa, non come un semplice vezzo ingegneristico.

## Esempi

**Enterprise.** Il team di piattaforma di un'azienda di logistica scoprì, solo dopo
un incidente critico durante le ferie di un ingegnere chiave, che un algoritmo
centrale di instradamento aveva un bus factor effettivo pari a uno: la storia del
controllo di versione mostrava che una sola persona aveva scritto oltre il 90% dei
cambiamenti recenti del componente, e il registro della rotazione di reperibilità
mostrava che la stessa persona aveva risolto personalmente ogni incidente
collegato nei due anni precedenti. Il team istituì un programma deliberato di
diffusione della conoscenza, sessioni di pairing e rotazione della responsabilità
sugli incidenti correlati, e un'analisi di controllo otto mesi dopo mostrò che il
bus factor era salito a quattro, con l'ingegnere originale liberato per dedicarsi a
un lavoro nuovo e a maggiore leva anziché restare un permanente punto singolo di
guasto.

**Settore pubblico.** Il team di ingegneria di un'agenzia statale per le
prestazioni sociali misurò per la prima volta l'attrito delle dipendenze tra team
dopo ritardi ripetuti, notati in modo informale, in un servizio condiviso di verifica
dell'idoneità. I dati mostrarono che l'attesa mediana per una modifica di
dipendenza dal team del servizio condiviso era di undici giorni, molto più lunga di
quanto uno dei due team avesse presunto quando glielo si chiedeva in modo
informale, e la causa radice risultò essere un processo di richiesta poco chiaro e
non documentato piuttosto che una carenza di capacità. Pubblicare un processo di
richiesta chiaro e semplice e un obiettivo di tempo di risposta impegnativo per il
servizio condiviso portò l'attesa mediana sotto i due giorni entro un trimestre,
senza alcun personale aggiuntivo.

## Business case: motivazioni, ROI e TCO

Il ritorno del misurare direttamente comunicazione e collaborazione è intercettare
cause radice che le altre dimensioni attribuiscono male: un problema di qualità che
sembra una lacuna di test ma è in realtà un guasto di comunicazione fa sprecare
sforzo quando un team cerca di correggerlo aggiungendo più test anziché sistemando
il difetto di coordinamento sottostante. L'esempio del bus factor qui sopra mostra
la versione più netta di questo ritorno: un'organizzazione che scopre e corregge in
modo proattivo un grave rischio di concentrazione della conoscenza evita il costo
catastrofico di scoprirlo durante una crisi vera, quando l'unica persona che
capiva un sistema critico è davvero indisponibile.

Il costo totale di proprietà è per lo più sforzo di strumentazione, combinare dati
di controllo di versione, reperibilità e issue tracking in modi che non sono
automatici di serie, più la disciplina periodica di riesaminare esplicitamente
concentrazione della conoscenza e attrito delle dipendenze. Quel costo è modesto
rispetto al costo di una vera crisi di bus factor o di un cronico difetto di
coordinamento tra team non affrontato.

## Antipattern e insidie

- **Saltare questa dimensione perché difficile da strumentare automaticamente:**
  lascia le cause radice attribuite male ad altre dimensioni più facili da
  misurare.
- **Trattare un organigramma come un quadro accurato dei modelli di comunicazione
  reali:** spesso sbagliato, e il divario è esattamente dove vivono i colli di
  bottiglia nascosti.
- **Ignorare il bus factor finché una crisi non forza la scoperta:** il modo di
  fallire singolarmente più dannoso di cui questo argomento mette in guardia.
- **Presumere che l'esistenza della documentazione equivalga alla sua utilità:**
  contenuti obsoleti o introvabili offrono poco valore reale di comunicazione.
- **Misurare l'attrito tra team senza agire su una causa radice chiara e
  correggibile una volta trovata:** spreca l'investimento diagnostico.
- **Trattare un inserimento lento e variabile come una pura questione di risorse
  umane anziché un segnale di collaborazione ingegneristica:** perde un proxy
  davvero utile e misurabile.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Comunicazione e collaborazione non sono affatto
  misurate; bus factor e attrito tra team sono scoperti solo attraverso una crisi.
- **Livello 2, Sviluppo (Develop):** Esiste una certa consapevolezza informale della
  concentrazione della conoscenza, ma non c'è una misurazione coerente né
  un'indagine proattiva.
- **Livello 3, Standardizzazione (Standardize):** Bus factor e attrito delle
  dipendenze tra team sono misurati in modo coerente per i sistemi critici e i
  servizi condivisi in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** La mappatura della rete di comunicazione rivela
  periodicamente colli di bottiglia nascosti e sacche isolate, e il tempo di
  inserimento è tracciato come proxy diretto della salute della comprensione
  condivisa.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione riduce in modo
  proattivo il rischio di concentrazione della conoscenza e l'attrito tra team prima
  che causino incidenti, e sa indicare interventi specifici, diffusione deliberata
  della conoscenza, processi di dipendenza chiariti, che hanno migliorato in modo
  misurabile questa dimensione.

## Spunti di discussione

1. Qual è, onestamente, il bus factor del nostro singolo sistema più critico?
2. Quale dipendenza tra team ha causato più attrito nell'ultimo trimestre, e l'abbiamo misurata?
3. Un nuovo membro del team troverebbe la nostra documentazione, o scoprirebbe soltanto che esiste tecnicamente da qualche parte?
4. La nostra rete di comunicazione informale corrisponde al nostro organigramma?
5. Quale problema di qualità o di soddisfazione potrebbe avere in realtà una causa radice di collaborazione che non abbiamo indagato?

## Punti chiave

- I guasti di comunicazione e collaborazione si **camuffano spesso da altri
  problemi**; una causa radice attribuita alla dimensione sbagliata spreca sforzo.
- Traccia direttamente la **concentrazione della conoscenza (bus factor)** usando
  dati di controllo di versione e di reperibilità, anziché aspettare che una crisi
  la riveli.
- Misura esplicitamente l'**attrito delle dipendenze tra team**; è di solito
  invisibile ai team coinvolti finché non viene misurato.
- Usa il **tempo di inserimento fino a un contributo produttivo** come proxy
  diretto e pratico di quanto bene fluisca la comprensione condivisa.
- Mappa periodicamente le **reti di comunicazione reali**, dato che spesso
  differiscono sostanzialmente dall'organigramma formale.

## Riferimenti e letture di approfondimento

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann,
  Brian Houck e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue*
  (2021).
- *Team Topologies*, di Matthew Skelton e Manuel Pais (modalità di interazione tra
  team e progettazione delle dipendenze tra team).
- *Peopleware: Productive Projects and Teams*, di Tom DeMarco e Timothy Lister
  (strutture informali di comunicazione e loro effetto sulla produttività).
- Conway, Melvin E., "How Do Committees Invent?" (1968): l'origine della legge di
  Conway, sul rapporto tra struttura della comunicazione e struttura del sistema.
