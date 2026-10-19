# 3.2 Metriche di soddisfazione e benessere

## Panoramica e motivazione

**Soddisfazione e benessere**, la S di SPACE (argomento 3.1), è la dimensione che
nessuna telemetria di sistema può osservare direttamente. Se un ingegnere trova il
proprio lavoro significativo, se si sente sostenuto dal proprio team, se sta
andando verso il burnout, nulla di tutto questo lascia traccia in un registro del
controllo di versione o in una pipeline di CI. Va chiesto. Questo argomento riguarda
il chiedere bene: progettare una misurazione che produca un segnale affidabile su
uno stato genuinamente soggettivo e genuinamente importante, anziché un numero che
sembra preciso mentre non misura quasi nulla di reale.

Questa dimensione conta perché è l'indicatore anticipatore di costi che compaiono
altrove, molto più tardi e molto più cari. Una soddisfazione in calo predice il
turnover prima di un colloquio di uscita. Un rischio di burnout in crescita predice
un crollo di qualità prima che lo mostri il tasso di difetti. Un'organizzazione che
guarda solo le metriche di consegna e di attività scopre un problema di benessere
solo quando è già diventato una dimissione, un incidente o un calo silenzioso e
prolungato dell'output che richiede mesi per essere diagnosticato. Misurare
direttamente soddisfazione e benessere è ciò che compra all'organizzazione il tempo
di anticipo per agire prima che accada.

Per i team grandi, questa dimensione è anche quella in cui la distinzione tra
diagnostico e valutativo dell'argomento 1.1 conta più nettamente. I dati di
soddisfazione usati per capire e migliorare le condizioni di un team sono preziosi
e a basso rischio. Gli stessi dati usati per classificare team o, peggio, individui
l'uno contro l'altro corrompono lo strumento di sondaggio quasi subito, perché le
persone smettono di rispondere con onestà nel momento in cui sospettano che la
risposta verrà usata contro di loro o contro il loro team. Le organizzazioni
enterprise e governative, con i loro cicli formali di valutazione delle
prestazioni, sono particolarmente inclini a questa deriva e devono difendersene
esplicitamente.

## Principi chiave

- **Soddisfazione e benessere non si possono osservare dalla telemetria di
  sistema.** Questa dimensione va chiesta, in modo deliberato e fatto bene.
- **L'anonimato non è facoltativo.** Qualsiasi legame percepito tra una risposta
  onesta e una conseguenza personale distrugge il segnale.
- **Questa dimensione è un indicatore anticipatore, non ritardato.** Predice
  turnover e problemi di qualità prima che compaiano altrove.
- **Il burnout è uno schema specifico e riconoscibile, non una generica
  infelicità.** Misuralo esplicitamente anziché affidarti a un vago punteggio di
  soddisfazione.
- **Il trend conta più di una singola lettura.** Un singolo punteggio di
  soddisfazione è un'istantanea; il trend su sondaggi successivi è il vero segnale.

## Raccomandazioni

### Usa strumenti di sondaggio convalidati anziché inventare i tuoi

Benessere e burnout hanno strumenti di misurazione consolidati e convalidati, in
particolare il [Maslach Burnout Inventory](https://en.wikipedia.org/wiki/Maslach_Burnout_Inventory),
che misura il burnout su tre dimensioni riconosciute: esaurimento emotivo,
spersonalizzazione o cinismo, e ridotto senso di realizzazione personale. Attingere
a uno strumento consolidato e convalidato, anche in una versione breve adattata,
produce dati più affidabili di una serie di domande improvvisate internamente,
perché gli strumenti convalidati sono già stati verificati sul fatto di misurare
davvero ciò che dichiarano.

### Garantisci un anonimato genuino, e sii trasparente su come l'hai ottenuto

Dichiara esplicitamente, e intendilo davvero, che le singole risposte non possono
essere ricondotte a una persona, soprattutto nei team piccoli dove gli schemi di
risposta potrebbero altrimenti essere dedotti. Usa uno strumento di sondaggio di
terze parti che l'organizzazione stessa non può de-anonimizzare, pubblica i
risultati aggregati solo sopra una dimensione minima di gruppo (comunemente cinque
o più rispondenti) per evitare deduzioni nei team piccoli, e comunica chiaramente
questa policy prima di chiedere a chiunque di partecipare. Un solo episodio in cui
l'anonimato viene violato, anche per caso, distrugge la fiducia in ogni sondaggio
futuro.

### Traccia il trend nel tempo, non una singola lettura isolata

Un singolo punteggio di soddisfazione ha un valore diagnostico limitato da solo; un
trend in calo su tre cicli consecutivi di sondaggio è un segnale molto più forte e
azionabile. Conduci il sondaggio con una cadenza coerente e moderata, quella
trimestrale è comune, e presenta sempre i risultati accanto alla linea di tendenza
storica anziché come numero isolato, così che sia chi legge sia chi risponde possa
tarare il confronto su un cambiamento genuino anziché su rumore occasionale.

### Distingui la soddisfazione generica dal rischio specifico di burnout

Una domanda generale di soddisfazione («quanto sei soddisfatto del tuo lavoro?») e
una domanda specifica sul burnout («ti senti emotivamente esaurito dal tuo
lavoro?») misurano cose correlate ma distinte, e un team può ottenere punteggi
ragionevoli sulla prima mostrando segnali di allarme reali sulla seconda. Includi
entrambe nel disegno del sondaggio, e tratta un segnale di allarme specifico sul
burnout come bisognoso di un seguito più rapido e diretto di un calo di
soddisfazione generale.

### Abbina i dati del sondaggio a segnali oggettivi di conferma, con cautela

Dove possibile, conferma i trend di soddisfazione con segnali oggettivi
plausibilmente legati al benessere: tasso di dimissioni volontarie, schemi
prolungati di lavoro fuori orario, o un tasso crescente di ferie non godute. Usali
come conferma, mai come sostituto del chiedere direttamente, e fai attenzione che
questa conferma non diventi un meccanismo di sorveglianza che a sua volta danneggia
la fiducia e, ironicamente, la soddisfazione.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Domande di sondaggio interne improvvisate | Rapide da costruire, adattate al contesto | Non convalidate; non è chiaro se misurino davvero ciò che dichiarano |
| Strumento convalidato (per esempio Maslach Burnout Inventory, adattato) | Verificato, confrontabile, segnale più affidabile | Richiede più impostazione e può richiedere adattamento al contesto dell'ingegneria |
| Sondaggi lampo brevi e frequenti | Poca fatica dei rispondenti, segnale quasi in tempo reale | Meno profondità per sondaggio; rischio di rumore se sovrainterpretati |
| Sondaggi rari e approfonditi | Segnale ricco e dettagliato | Più lenti nel cogliere un problema in rapido sviluppo come il burnout acuto |

La tensione centrale è **profondità contro frequenza**. Un sondaggio approfondito e
convalidato condotto ogni trimestre dà un quadro affidabile e dettagliato ma può
perdere un problema in rapido sviluppo tra un ciclo e l'altro; sondaggi lampo brevi
e frequenti colgono i problemi più in fretta ma rischiano dati più superficiali e
rumorosi e fatica dei rispondenti se abusati. Si risolve la tensione conducendo un
sondaggio più approfondito e convalidato con cadenza trimestrale come strumento
primario, integrato da un controllo lampo molto breve e facoltativo (una o due
domande) più frequente per un allarme precoce, senza chiedere ogni volta la stessa
profondità di impegno.

## Domande da discutere con il vostro team

1. **Usiamo uno strumento di sondaggio convalidato, o domande inventate da noi
   senza alcuna prova che misurino davvero soddisfazione o burnout?** Se il vostro
   sondaggio attuale è stato costruito in modo improvvisato, valutate se adattare
   uno strumento consolidato come il Maslach Burnout Inventory produrrebbe dati più
   affidabili.

2. **Possiamo garantire onestamente l'anonimato, anche nei team piccoli dove gli
   schemi di risposta potrebbero altrimenti essere deducibili?** Ripercorrete i
   vostri strumenti di sondaggio e la pratica di aggregazione effettivi e
   verificate se un manager determinato potrebbe, in pratica, dedurre le risposte
   di un individuo, anche se la policy dice che non dovrebbe poterlo fare.

3. **Abbiamo mai visto i dati di soddisfazione preannunciare un picco di dimissioni
   o un problema di qualità comparso più tardi in altre metriche?** Riguardate lo
   storico dei sondaggi rispetto ai dati su dimissioni e incidenti e verificate se
   uno schema da indicatore anticipatore sia visibile a posteriori. Se non lo avete
   mai controllato, anche questo merita una discussione.

4. **Distinguiamo nel sondaggio la soddisfazione generale dal rischio specifico di
   burnout, o ci affidiamo a un'unica domanda mista?** Un team può apparire a posto
   sulla soddisfazione generale mostrando sotto segnali reali di burnout; verificate
   se il vostro strumento attuale potrebbe davvero cogliere quella differenza.

5. **I dati di soddisfazione sono mai stati usati, anche informalmente, per
   confrontare o classificare i team l'uno contro l'altro?** Questa deriva verso
   l'uso valutativo corrompe lo strumento di sondaggio quasi subito, perché i
   rispondenti cambiano le risposte appena sospettano una conseguenza competitiva.

6. **Qual è il nostro tasso di risposta effettivo, e che cosa ci direbbe un tasso di
   risposta in calo?** Un tasso di risposta che scende su sondaggi successivi è esso
   stesso un segnale, spesso di fiducia che si erode nel processo o di stanchezza da
   sondaggio, e merita di essere indagato di per sé anziché liquidato come fastidio
   di raccolta dati.

## Prospettiva settoriale

**Startup.** Con una manciata di persone, i sondaggi anonimi formali possono
sembrare superflui, e la conversazione diretta fa spesso emergere i problemi di
soddisfazione più in fretta di uno strumento trimestrale. Il rischio è che un
fondatore scambi l'assenza di lamentele per l'assenza di un problema; introducete
anche un controllo leggero e anonimo non appena il team supera la dimensione in cui
tutti si parlano ogni giorno.

**Piccola impresa.** Un semplice strumento di sondaggio anonimo, gratuito o a basso
costo, usato ogni trimestre con una serie breve e adattata di domande convalidate,
è alla portata senza una funzione dedicata di people analytics. Resistete alla
tentazione di saltare le garanzie di anonimato perché il team si sente unito; è
proprio quella vicinanza a rendere più difficile dare direttamente un feedback
negativo onesto.

**Enterprise.** L'infrastruttura di sondaggio a questa scala richiede un vero
investimento: uno strumento di terze parti adeguato, una policy di aggregazione con
dimensione minima di gruppo e una policy chiara, comunicata in modo coerente, di non
uso valutativo. Anche il ritorno è proporzionalmente maggiore, dato che cogliere
un trend di burnout in un'organizzazione con molto personale prima che provochi
dimissioni protegge una quantità molto maggiore di conoscenza istituzionale.

**Settore pubblico.** La pressione sulla fidelizzazione dovuta ai vincoli
retributivi del pubblico rende questa dimensione strategicamente importante, non
facoltativa. I dati sul benessere possono giustificare direttamente richieste di
budget per investimenti di fidelizzazione non monetari (strumenti, tempo protetto,
gestione del carico di lavoro) che i soli vincoli retributivi non permettono di
affrontare, a patto che la raccolta dei dati sia abbastanza affidabile da poter
essere citata con fiducia.

## Esempi

**Enterprise.** Il team di piattaforma di un'azienda di infrastrutture cloud ottenne
buoni punteggi di soddisfazione generale per oltre un anno mentre una domanda
specifica sul burnout, adattata dalla sottoscala di esaurimento emotivo del Maslach
Burnout Inventory, mostrava un calo costante su quattro trimestri consecutivi. La
dirigenza, inizialmente incline a liquidare la preoccupazione perché il numero di
soddisfazione generale sembrava a posto, indagò ulteriormente dopo un secondo
trimestre consecutivo di calo e scoprì che il team assorbiva da quasi un anno un
carico di reperibilità insostenibile (argomento 6.3) dopo un blocco delle
assunzioni. Ripristinare un organico adeguato di reperibilità invertì il trend di
burnout in due trimestri, ben prima che si convertisse nel picco di dimissioni che i
dati dell'azienda indicavano come tipica conseguenza a valle di questo schema.

**Settore pubblico.** Un'agenzia IT di un governo statale, con una cronica difficoltà
a competere sugli stipendi con i datori di lavoro privati, usò i dati del sondaggio
sul benessere specificamente per costruire un business case a favore di una policy
di tempo di concentrazione protetto anziché di un aumento salariale che non poteva
ottenere. Il sondaggio mostrò frequenza delle interruzioni e carico di riunioni, non
la retribuzione, come i predittori più forti dell'intenzione di andarsene tra i
rispondenti che indicavano di cercare attivamente lavoro. La policy risultante,
che bloccava due pomeriggi ininterrotti a settimana per il lavoro di ingegneria
concentrato, si accompagnò a un miglioramento misurabile sia dei punteggi di
soddisfazione sia della fidelizzazione volontaria nell'anno successivo, a una
frazione del costo che un aumento salariale competitivo avrebbe richiesto.

## Business case: motivazioni, ROI e TCO

Il ritorno del misurare direttamente soddisfazione e benessere è l'allarme precoce:
un'organizzazione che coglie un trend di burnout un anno intero prima che si
converta in dimissioni può intervenire a una frazione del costo di reclutare e
inserire un sostituto, che richiede tipicamente mesi per raggiungere la piena
produttività anche una volta assunto. Le dimissioni volontarie di un ingegnere
esperto costano a un'organizzazione molto più dell'infrastruttura di sondaggio che
avrebbe potuto fornire l'allarme.

Il costo totale di proprietà comprende gli strumenti di sondaggio, la disciplina di
garantire e mantenere un anonimato genuino e l'impegno organizzativo ad agire su
ciò che i dati mostrano anziché raccoglierli e ignorare i risultati scomodi.
Quest'ultimo costo, la volontà di agire, è spesso il vero collo di bottiglia, non la
misurazione in sé; un sondaggio che rivela un problema di cui nessuno si occupa
erode la fiducia nello strumento tanto quanto una garanzia di anonimato violata.

## Antipattern e insidie

- **Domande di sondaggio improvvisate e non convalidate:** producono dati di
  affidabilità incerta.
- **Garanzie di anonimato deboli o violate:** distruggono la risposta onesta e la
  fiducia nello strumento, spesso in modo permanente.
- **Reagire a una singola lettura anziché tracciare il trend:** reagisce in modo
  eccessivo al rumore o perde un genuino calo lento.
- **Mescolare soddisfazione generale e domande specifiche sul burnout:** può
  mascherare un vero segnale di allarme dentro una media che sembra a posto.
- **Usare i dati di soddisfazione per classificare o confrontare i team:** la
  deriva valutativa che corrompe le risposte oneste.
- **Raccogliere i dati senza mai agire su un risultato scomodo:** erode la fiducia
  nel sondaggio tanto quanto una promessa di anonimato violata.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Soddisfazione e benessere non sono affatto
  misurati, o solo attraverso conversazioni informali e non strutturate.
- **Livello 2, Sviluppo (Develop):** Esiste un sondaggio improvvisato ma privo di
  convalida, di una cadenza coerente o di una forte garanzia di anonimato.
- **Livello 3, Standardizzazione (Standardize):** Uno strumento di sondaggio
  convalidato o adattato è condotto con cadenza coerente e con una forte garanzia
  di anonimato comunicata, in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** I trend sono tracciati attivamente su cicli
  successivi, i segnali specifici di burnout sono distinti dalla soddisfazione
  generale e l'organizzazione ha un processo documentato per agire sui segnali di
  allarme.
- **Livello 5, Orchestrazione (Orchestrate):** I dati sul benessere informano
  direttamente la pianificazione della forza lavoro e l'investimento nella
  fidelizzazione, confermati con cautela da segnali oggettivi, e l'organizzazione
  sa indicare interventi specifici che hanno invertito un calo misurato prima che
  diventasse turnover o un problema di qualità.

## Spunti di discussione

1. Il nostro attuale strumento di sondaggio reggerebbe a un esame come davvero anonimo?
2. Un trend di soddisfazione o di burnout ha mai predetto un problema comparso poi altrove?
3. Qual è il nostro processo per agire su un risultato di sondaggio che non vorremmo sentire?
4. Distinguiamo oggi nella misurazione il rischio di burnout dalla soddisfazione generale?
5. Quale investimento non monetario i nostri dati sul benessere giustificherebbero meglio in questo momento?

## Punti chiave

- Soddisfazione e benessere vanno **chiesti direttamente**; nessuna telemetria di
  sistema può osservare questa dimensione.
- Usa uno **strumento convalidato** dove possibile, e garantisci un **anonimato**
  genuino e ben comunicato.
- Questa dimensione è un **indicatore anticipatore** di turnover e problemi di
  qualità che altrimenti emergerebbero molto più tardi e più costosamente.
- Distingui la **soddisfazione generale dal rischio specifico di burnout**, e
  traccia il **trend nel tempo**, non una singola lettura.
- Non usare mai questi dati per **classificare o confrontare i team**; quella
  deriva corrompe la risposta onesta quasi subito.

## Riferimenti e letture di approfondimento

- Maslach, Christina, e Susan E. Jackson, *Maslach Burnout Inventory* (lo
  strumento convalidato e ampiamente usato per misurare il burnout su tre
  dimensioni).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann,
  Brian Houck e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue*
  (2021).
- *Drive: The Surprising Truth About What Motivates Us*, di Daniel H. Pink
  (ricerca su motivazione e soddisfazione rilevante per la progettazione dei
  sondaggi).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve Wellbeing*,
  di Christina Maslach e Michael P. Leiter (cause organizzative e interventi per il
  burnout).
