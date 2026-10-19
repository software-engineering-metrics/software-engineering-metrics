# 6.4 Metriche di sicurezza e di gestione delle vulnerabilità

## Panoramica e motivazione

Questo argomento chiude la Parte 6 estendendo la stessa disciplina di affidabilità che
questa parte ha costruito, definizione degli obiettivi, abbinamento ai guardrail,
segnalazione onesta degli incidenti, a un rischio distinto ma strettamente correlato:
non se un sistema si guasta da solo, ma se qualcuno lo fa guastare, o lo sfrutta,
deliberatamente. Le metriche di **gestione delle vulnerabilità** misurano quanto bene
un'organizzazione trovi e corregga le debolezze di sicurezza prima che vengano
sfruttate: quante vulnerabilità esistono, quanto sono gravi e, cosa critica, con quale
rapidità vengano rimediate una volta scoperte, dato che una vulnerabilità nota ma non
corretta è un rischio permanente e quantificabile che l'organizzazione ha scelto di
portare, deliberatamente o per trascuratezza.

La preoccupazione centrale di questo argomento è parallela al trattamento dei rilievi
dell'analisi statica dell'argomento 4.4: un conteggio grezzo delle vulnerabilità è una
metrica povera, che confonde problemi banali e critici, ed è esposto agli stessi
identici rischi di manipolazione, restringimento della definizione, soppressione e
manipolazione della soglia, che l'argomento 1.2 descrive in generale. L'aggiunta
specifica che le metriche di sicurezza richiedono è il tempo di rimediazione tracciato
rispetto alla gravità, dato che una vulnerabilità critica non corretta per mesi
rappresenta un rischio fondamentalmente diverso dalla stessa vulnerabilità colta e
corretta in un giorno, un'informazione che un semplice conteggio da solo non può
trasmettere.

Per i team grandi, le metriche di sicurezza portano conseguenze oltre il rischio
tecnico immediato: le organizzazioni enterprise affrontano un'esposizione contrattuale
e di reputazione dovuta a una violazione, e le organizzazioni governative affrontano
conseguenze di sicurezza nazionale, legali e di fiducia del pubblico che fanno delle
metriche di sicurezza una questione di genuino interesse pubblico, non solo una
preoccupazione ingegneristica interna. Questo argomento tratta la gestione delle
vulnerabilità con lo stesso rigore e la stessa disciplina di abbinamento ai guardrail
che questo libro applica ovunque, perché le metriche di sicurezza sono esposte a ogni
rischio di manipolazione che questo libro descrive, con una posta corrispondentemente
più alta quando quella manipolazione riesce.

## Principi chiave

- **Il tempo di rimediazione per gravità conta più di un conteggio grezzo delle
  vulnerabilità.** Un problema critico non corretto per mesi è un rischio
  fondamentalmente diverso dallo stesso problema colto e corretto in fretta.
- **Le metriche di sicurezza sono esposte agli stessi rischi di manipolazione dei
  rilievi dell'analisi statica** (argomento 4.4), con una posta più alta quando la
  manipolazione riesce.
- **La classificazione della gravità richiede criteri esterni e standardizzati**
  ovunque possibile, non un giudizio puramente interno che può derivare verso
  l'indulgenza.
- **Una vulnerabilità segnalata e corretta in fretta è il segno di un processo sano,
  non un fallimento da nascondere.** Punire la segnalazione scoraggia proprio le
  segnalazioni da cui dipende l'intero sistema.
- **Il debito di sicurezza è una categoria di debito tecnico** (argomento 4.5) e
  dovrebbe competere per la capacità prioritaria di rimediazione sulla stessa base
  esplicita e quantificata.

## Raccomandazioni

### Traccia il tempo di rimediazione per gravità come metrica primaria

Per ogni vulnerabilità scoperta, registra la sua gravità (usando una scala
standardizzata come il [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System),
CVSS, dove applicabile) e traccia il tempo dalla scoperta alla vera rimediazione, non
alla chiusura di un ticket o a una correzione integrata ma non ancora rilasciata. Fissa
obiettivi espliciti di tempo di rimediazione per gravità, comunemente misurati in
giorni per i problemi critici e in settimane per quelli di gravità inferiore, e
traccia il rispetto di quegli obiettivi come metrica primaria della salute della
sicurezza, anziché un conteggio grezzo e non pesato delle vulnerabilità.

### Usa una valutazione standardizzata della gravità anziché un giudizio puramente interno

Dove è disponibile un sistema esterno standardizzato di valutazione come il CVSS, usalo
come base primaria della classificazione della gravità anziché affidarti interamente a
un giudizio interno e potenzialmente incoerente. Rispecchia la disciplina di
classificazione dei difetti sfuggiti dell'argomento 5.1 e quella di classificazione
degli incidenti dell'argomento 6.2, applicata qui alla sicurezza in particolare, e
resiste allo stesso rischio di deriva indulgente da cui quegli argomenti mettono in
guardia, dato che un punteggio ancorato all'esterno è più difficile da ridefinire in
silenzio verso il basso di uno puramente interno.

### Costruisci una cultura davvero non punitiva della divulgazione delle vulnerabilità e della segnalazione interna

Applica direttamente alla sicurezza il principio del postmortem senza colpa
dell'argomento 6.2: un ingegnere che scopre e segnala una vulnerabilità che ha
introdotto, o un ricercatore che ne divulga responsabilmente una trovata
dall'esterno, dovrebbe essere trattato come chi rende un servizio prezioso, non come
chi confessa un fallimento. Punire la divulgazione, internamente o da parte di
ricercatori esterni, scoraggia in modo affidabile proprio le segnalazioni da cui
dipende l'intero sistema di gestione delle vulnerabilità, spingendo il rischio reale
nella clandestinità anziché in un processo gestito di rimediazione.

### Tratta il debito di sicurezza come una categoria dentro il tuo arretrato di debito tecnico

Integra le vulnerabilità note e a rischio accettato, quelle deliberatamente non ancora
rimediate per priorità concorrenti, nello stesso arretrato visibile e quantificato di
debito tecnico descritto nell'argomento 4.5, con la stessa impostazione di costo per
correggere contro costo per portare. Questo impedisce che il rischio di sicurezza
scompaia in uno stato invisibile e non documentato del tipo «lo sappiamo» o che
competa in modo iniquo con il lavoro sulle funzionalità senza un caso esplicito e
quantificato per la sua priorità.

### Combina le metriche di vulnerabilità con il contesto di esposizione e sfruttabilità

Non ogni vulnerabilità con lo stesso punteggio nominale di gravità porta lo stesso
rischio effettivo: una vulnerabilità critica in uno strumento interno senza esposizione
a una rete esterna è un rischio diverso della stessa gravità nominale in un servizio
esposto a internet che gestisce dati dei clienti. Dove fattibile, pesa la
prioritizzazione in base al contesto reale di esposizione e sfruttabilità, non solo al
punteggio di gravità, così che la capacità di rimediazione si concentri per prima sugli
elementi davvero a più alto rischio.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Conteggio grezzo delle vulnerabilità | Semplice da riportare | Confonde problemi banali e critici; facilmente manipolabile tramite soppressione |
| Tracciamento pesato per gravità e per tempo di rimediazione | Riflette l'esposizione effettiva al rischio nel tempo | Richiede classificazione e tracciamento disciplinati e coerenti |
| Giudizio di gravità puramente interno | Flessibile, adattato al contesto | Incline a deriva indulgente e a incoerenza tra i team |
| Valutazione esterna standardizzata (per esempio CVSS) più pesatura del contesto | Coerente, ancorata all'esterno, resiste alla manipolazione | Richiede un'analisi aggiuntiva del contesto per una prioritizzazione davvero accurata |

La tensione centrale è **coerenza contro contesto**. Un approccio puramente
standardizzato alla valutazione è coerente e resistente alla manipolazione ma può
perdere il contesto genuino, esposizione e sfruttabilità, che determina il rischio
effettivo; un approccio puramente contestuale e giudicato internamente cattura le
sfumature ma è incline allo stesso rischio di deriva indulgente da cui questo libro
mette in guardia per ogni altra metrica dipendente dalla classificazione. Si risolve
la tensione ancorandosi alla valutazione standardizzata come base coerente, per poi
applicarvi sopra una pesatura del contesto documentata e verificabile, anziché
all'uno o all'altro estremo da soli.

## Domande da discutere con il vostro team

1. **Tracciamo il tempo di rimediazione per gravità, o solo un conteggio grezzo delle
   vulnerabilità?** Prendete la vostra metrica attuale effettiva e controllate se
   distingua un problema critico non corretto per mesi da uno risolto in un giorno,
   dato che un conteggio grezzo tratta in modo identico queste due situazioni di
   rischio molto diverse.

2. **Usiamo un sistema esterno standardizzato di valutazione della gravità, o la
   classificazione si affida a un giudizio puramente interno e potenzialmente
   incoerente?** Se puramente interno, discutete che cosa cambierebbe nella vostra
   pratica di classificazione attuale adottando uno standard come il CVSS.

3. **Un ingegnere che ha introdotto e poi segnalato una vulnerabilità si sentirebbe
   al sicuro nel farlo, o temerebbe una punizione?** È la versione specifica per la
   sicurezza della domanda sulla cultura senza colpa dell'argomento 6.2, e una
   risposta onesta qui conta enormemente per capire se i vostri dati sulle
   vulnerabilità possano essere considerati affidabili.

4. **Abbiamo un arretrato visibile e quantificato di vulnerabilità note e a rischio
   accettato, o lo stato «lo sappiamo» diventa in silenzio invisibile e non
   affrontato nel tempo?** Controllate se il vostro debito di sicurezza sia tracciato
   con lo stesso rigore del vostro arretrato generale di debito tecnico (argomento 4.5).

5. **La nostra prioritizzazione della rimediazione tiene conto dell'esposizione e
   della sfruttabilità effettive, o si affida puramente a un punteggio nominale di
   gravità a prescindere dal contesto?** Scegliete un esempio reale in cui due
   vulnerabilità con gravità nominale simile portavano un rischio effettivo molto
   diverso e discutete se il vostro processo attuale le avrebbe prioritizzate
   correttamente.

6. **La classificazione della gravità di una vulnerabilità è mai derivata verso il
   basso nel tempo senza una chiara giustificazione?** Rispecchia lo schema di
   manipolazione della definizione da cui gli argomenti 1.2 e 6.2 mettono in guardia;
   verificate un campione delle vostre classificazioni recenti per questo rischio
   specifico.

## Prospettiva settoriale

**Startup.** I processi formali di gestione delle vulnerabilità sono spesso superflui
molto presto, ma adottare fin dall'inizio una scansione automatica di base delle
dipendenze e una semplice e onesta norma di segnalazione interna costa poco e impedisce
al debito di sicurezza di accumularsi in modo invisibile prima che il team abbia la
capacità di affrontarlo in modo sistematico.

**Piccola impresa.** La maggior parte delle moderne piattaforme di sviluppo include una
scansione automatica gratuita o a basso costo delle vulnerabilità delle dipendenze;
attivatela presto e traccia il tempo di rimediazione di tutto ciò che è segnalato come
critico, anche senza una funzione di sicurezza dedicata né strumenti sofisticati.

**Enterprise.** Una valutazione della gravità coerente e standardizzata e una cultura
della divulgazione davvero non punitiva sono entrambe essenziali ed entrambe più
difficili da mantenere a scala, dove l'incoerenza tra decine di team e la deriva
culturale verso la ricerca del colpevole dopo un incidente grave sono rischi costanti.
Investite in una funzione dedicata di governance della sicurezza per mantenere la
coerenza della classificazione e proteggere attivamente la cultura della divulgazione.

**Settore pubblico.** Le metriche di sicurezza qui si intrecciano spesso direttamente
con la sicurezza nazionale, la conformità normativa e la fiducia del pubblico, e una
vulnerabilità seria gestita male può avere conseguenze ben oltre una tipica violazione
nel settore privato. Mantenete una classificazione della gravità rigorosa e ancorata
all'esterno, proteggete attivamente la cultura della divulgazione interna ed esterna e
trattate il debito di sicurezza con la trasparenza e il rigore di prioritizzazione che
questo argomento raccomanda, dato che una vulnerabilità critica non documentata e
accettata in silenzio in un'infrastruttura pubblica è un rischio davvero serio e
verificabile.

## Esempi

**Enterprise.** Il team di sicurezza di un'azienda software aveva per anni riportato
alla dirigenza solo un conteggio grezzo delle vulnerabilità, un numero rimasto piatto
nel tempo, dando un falso senso di stabilità. Un'analisi rivista, pesata per gravità e
per tempo di rimediazione, rivelò che, pur essendo piatto il conteggio totale, le
vulnerabilità critiche richiedevano in media oltre novanta giorni per essere rimediate,
ben oltre qualsiasi obiettivo ragionevole, perché perdevano senza successo in ogni
ciclo di pianificazione contro il lavoro sulle funzionalità, senza alcuna capacità
dedicata e protetta. Stabilire un obiettivo rigido di rimediazione di 7 giorni per le
vulnerabilità critiche, sostenuto da una capacità protetta di rimediazione del debito di
sicurezza che rispecchiava il modello di allocazione del debito tecnico dell'argomento
4.5, portò il tempo medio di rimediazione dei problemi critici sotto i cinque giorni in
due trimestri.

**Settore pubblico.** Un'agenzia nazionale per le infrastrutture scoprì, dopo un audit
di sicurezza esterno, che gli ingegneri interni evitavano in modo informale di
segnalare le vulnerabilità scoperte nel proprio codice, temendo che ciò si riflettesse
male sulle loro valutazioni delle prestazioni, un chiaro parallelo con lo schema di
sottostima degli incidenti dettato dalla colpa dell'argomento 6.2. L'agenzia istituì
una policy esplicita e comunicata pubblicamente che proteggeva da qualsiasi
conseguenza sulle prestazioni chi segnalava vulnerabilità internamente, modellata
direttamente sulla pratica di risposta agli incidenti senza colpa, e le segnalazioni
interne di vulnerabilità salirono sensibilmente nell'anno successivo, un risultato che
la dirigenza dell'agenzia interpretò correttamente come prova di un rilevamento
migliorato e di una segnalazione onesta, non di una qualità del codice in calo, evitando
la conclusione naturale ma sbagliata che un numero in crescita dovesse significare che
le cose fossero peggiorate.

## Business case: motivazioni, ROI e TCO

Il ritorno di una gestione delle vulnerabilità rigorosa, ben classificata e segnalata
con onestà è il costo di una violazione evitato, che per un grave incidente di
sicurezza supera spesso molte volte il costo della rimediazione proattiva, insieme al
danno normativo, contrattuale e di reputazione evitato. L'esempio dell'azienda
software qui sopra mostra il meccanismo specifico: il debito di sicurezza perdeva in
silenzio da anni la competizione di prioritizzazione contro il lavoro sulle
funzionalità, esattamente lo schema da cui l'argomento 4.5 mette in guardia per il
debito tecnico in generale, finché una capacità protetta di rimediazione non lo ha
risolto direttamente.

Il costo totale di proprietà comprende gli strumenti di scansione automatica, la
capacità protetta di rimediazione che questo argomento raccomanda di allocare e
l'investimento culturale sostenuto in una pratica di divulgazione non punitiva. Quel
costo è modesto rispetto al costo di una vulnerabilità seria e sfruttata con successo
che una rimediazione proattiva e ben prioritizzata avrebbe colto e corretto ben prima
che potesse essere sfruttata.

## Antipattern e insidie

- **Tracciare solo un conteggio grezzo delle vulnerabilità:** confonde problemi
  banali e critici e dà un falso senso di stabilità o di crisi a prescindere dal
  rischio effettivo.
- **Classificazione della gravità puramente interna e non standardizzata:** incline a
  deriva indulgente e a incoerenza tra i team.
- **Punire la divulgazione delle vulnerabilità, interna o esterna:** spinge il rischio
  reale nella clandestinità anziché in un processo gestito di rimediazione.
- **Debito di sicurezza senza un arretrato visibile e quantificato:** perde per
  impostazione predefinita la competizione di prioritizzazione contro il lavoro sulle
  funzionalità.
- **Dare priorità solo in base al punteggio nominale di gravità, ignorando il contesto
  di esposizione e sfruttabilità:** devia la limitata capacità di rimediazione.
- **Interpretare un numero crescente di segnalazioni di vulnerabilità come prova di
  qualità in calo senza controllare se la segnalazione stessa sia migliorata:** un
  caso specifico della trappola della variabile di confondimento dell'argomento 1.6.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le vulnerabilità sono tracciate, se lo sono, come
  conteggio grezzo senza pesatura per gravità, senza tracciamento del tempo di
  rimediazione e con una cultura punitiva della divulgazione.
- **Livello 2, Sviluppo (Develop):** Esiste una certa classificazione della gravità,
  ma gli standard sono incoerenti e il tempo di rimediazione non è tracciato rispetto a
  obiettivi espliciti.
- **Livello 3, Standardizzazione (Standardize):** Una valutazione della gravità
  standardizzata e ancorata all'esterno e obiettivi espliciti di tempo di rimediazione
  per gravità sono applicati in modo coerente, con una cultura della divulgazione
  davvero non punitiva.
- **Livello 4, Gestione (Manage):** Il debito di sicurezza è tracciato in un arretrato
  visibile e quantificato con capacità protetta di rimediazione; la prioritizzazione
  tiene conto del contesto di esposizione e sfruttabilità, non solo della gravità.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione sa indicare riduzioni
  specifiche e misurabili del tempo di rimediazione dei problemi critici e può
  dimostrare una cultura della divulgazione sostenuta e affidabile che produce dati
  onesti e completi sulle vulnerabilità.

## Spunti di discussione

1. Qual è il nostro attuale tempo medio di rimediazione delle vulnerabilità critiche, e rispetta un obiettivo esplicito?
2. Un ingegnere che ha introdotto una vulnerabilità si sentirebbe al sicuro nel segnalarla di persona?
3. Abbiamo un arretrato visibile e quantificato di debito di sicurezza noto e a rischio accettato?
4. La nostra prioritizzazione della rimediazione tiene conto dell'esposizione effettiva, o solo della gravità nominale?
5. La classificazione della gravità è mai derivata verso il basso nel tempo senza una chiara giustificazione?

## Punti chiave

- Traccia il **tempo di rimediazione per gravità**, non un conteggio grezzo delle
  vulnerabilità, come metrica primaria della salute della sicurezza.
- Usa una **valutazione esterna standardizzata della gravità** (come il CVSS) come
  base coerente, resistente al rischio di deriva indulgente che il giudizio puramente
  interno invita.
- Costruisci una cultura della divulgazione davvero **non punitiva**; punire la
  segnalazione spinge il rischio reale nella clandestinità.
- Tratta il **debito di sicurezza come categoria di debito tecnico** (argomento 4.5),
  che compete equamente per la capacità protetta di rimediazione.
- Pesa la prioritizzazione in base a **esposizione e sfruttabilità effettive**, non al
  solo punteggio di gravità.

## Riferimenti e letture di approfondimento

- La specifica del Common Vulnerability Scoring System (CVSS) di FIRST.org: il
  framework standardizzato di valutazione della gravità a cui questo argomento fa
  riferimento.
- Le risorse della OWASP Foundation sulla gestione delle vulnerabilità e sulla
  pratica del ciclo di vita di sviluppo software sicuro.
- *Site Reliability Engineering: How Google Runs Production Systems*, a cura di Betsy
  Beyer, Chris Jones, Jennifer Petoff e Niall Richard Murphy (i principi di cultura
  senza colpa che questo argomento applica alla divulgazione in ambito sicurezza).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management Planning*:
  indicazioni autorevoli sulla pratica di rimediazione delle vulnerabilità.
