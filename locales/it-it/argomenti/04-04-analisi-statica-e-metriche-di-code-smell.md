# 4.4 Analisi statica e metriche di code smell

## Panoramica e motivazione

Gli strumenti di **[analisi statica](https://en.wikipedia.org/wiki/Static_program_analysis)**
scandagliano il codice sorgente senza eseguirlo, segnalando schemi noti per
correlare con difetti, vulnerabilità di sicurezza o problemi di manutenibilità:
codice irraggiungibile, risorse non chiuse, conversioni di tipo sospette, logica
duplicata e la categoria più ampia dei **code smell**, schemi strutturali che non
sono necessariamente bug ma tendono a rendere il codice più difficile da capire,
testare o modificare in sicurezza. L'analisi statica è lo strato automatico e
continuo sotto le metriche più mirate degli altri argomenti di questa parte, eseguita
a ogni commit e capace di far emergere i problemi nel momento in cui vengono
introdotti anziché aspettare un audit periodico.

La preoccupazione centrale di questo argomento è il divario tra ciò che gli strumenti
di analisi statica riportano e ciò che conta davvero. Uno strumento può segnalare
migliaia di rilievi in una grande base di codice, e il solo numero di rilievi è una
metrica povera, dato che confonde preferenze banali di stile con rischi genuini e
gravi, e può essere fatto scendere con la soppressione tanto facilmente quanto con
correzioni vere. Il valore dell'analisi statica non viene dal conteggio grezzo dei
rilievi ma da quanto bene un'organizzazione fa il triage della gravità, previene la
regressione e resiste alla tentazione di trattare il giudizio dello strumento come
sostituto della revisione umana anziché come suo complemento.

Per i team grandi, l'analisi statica è l'unico modo pratico di imporre una base di
qualità del codice e di igiene della sicurezza su una base di codice più grande di
quanto qualsiasi team possa rivedere manualmente per intero. Le organizzazioni
enterprise e governative, che affrontano spesso requisiti di conformità sulle
pratiche di codifica sicura, dipendono dall'analisi statica come prova documentata e
verificabile che un livello di base di esame sia stato applicato in modo coerente, non
solo quando un revisore umano capitava di notare un problema.

## Principi chiave

- **Il conteggio grezzo dei rilievi è una metrica povera da solo.** Confonde
  problemi banali e gravi, e può essere manipolato tramite soppressione anziché
  tramite correzioni genuine.
- **Il triage per gravità conta più del volume.** Un piccolo numero di rilievi
  critici merita più attenzione di un grande numero di banali.
- **L'analisi statica integra la revisione umana; non la sostituisce.** Gli
  strumenti colgono schemi; non capiscono l'intento né il contesto di business.
- **Un trend di «nuovi problemi introdotti» è più azionabile di un conteggio totale
  dell'arretrato.** Dice se la pratica attuale sta migliorando o regredendo.
- **I falsi positivi erodono la fiducia nello strumento.** Un tasso di falsi
  positivi non gestito porta i team a ignorare i rilievi in blocco, inclusi quelli
  veri.

## Raccomandazioni

### Traccia i rilievi pesati per gravità, non il conteggio grezzo

Configura i tuoi strumenti di analisi statica perché classifichino i rilievi per
gravità (critica, alta, media, bassa o una scala equivalente), e traccia un trend
pesato per gravità anziché un conteggio totale piatto. Una base di codice con zero
rilievi critici e cinquecento suggerimenti di stile a bassa gravità è in uno stato
molto diverso da una con cinquanta rilievi critici e nessun problema di stile, e un
conteggio grezzo li tratta come all'incirca equivalenti quando non lo sono.

### Applica la barriera sui nuovi rilievi introdotti, non sull'intero arretrato storico

La maggior parte delle basi di codice consolidate porta un arretrato storico di
rilievi che precede la pratica attuale e sarebbe proibitivamente costoso da correggere
tutto in una volta. Anziché bloccare tutto il lavoro finché l'intero arretrato non è
smaltito, applica la barriera nella CI in base al fatto che un cambiamento specifico
introduca nuovi rilievi oltre una soglia di gravità concordata, lasciando che
l'arretrato si riduca gradualmente con la normale manutenzione e impedendo ulteriori
accumuli. Questa distinzione rispecchia la raccomandazione sulla soglia minima di
copertura dell'argomento 4.2: proteggere dalla regressione anziché pretendere una
correzione irrealistica e tutta in una volta.

### Gestisci attivamente il tasso di falsi positivi

Rivedi periodicamente un campione di rilievi, in particolare di qualunque categoria
ad alto volume, e controlla quanti siano veri falsi positivi, casi in cui lo
strumento ha segnalato uno schema che nel contesto non è davvero problematico.
Regola la configurazione delle regole per sopprimere specificamente le categorie di
regole davvero rumorose e di poco valore, anziché lasciare che i team prendano
l'abitudine di ignorare in blocco l'output dello strumento perché troppo di esso è
rumore. Un tasso di falsi positivi alto e non gestito è il modo più rapido in assoluto
di distruggere la credibilità di un programma di analisi statica.

### Usa i rilievi dell'analisi statica come stimolo alla revisione, non come verdetto automatico

Anche un rilievo legittimo, non falso positivo, non richiede sempre una correzione
automatica e obbligatoria; alcuni schemi segnalati sono accettabili dato un contesto
specifico che uno strumento non vede. Costruisci un processo leggero perché una
persona riveda e corregga oppure derogando esplicitamente e in modo visibile un
rilievo con una motivazione documentata, anziché imporre ciecamente ogni rilievo come
obbligatorio o permettere una soppressione silenziosa e non documentata che erode nel
tempo il valore dello strumento.

### Combina l'analisi statica con le altre metriche di qualità del codice di questa parte

I rilievi dell'analisi statica, i punteggi di complessità (argomento 4.1) e i dati
sugli hotspot (argomento 4.3) sono prove complementari, non metriche concorrenti. Un
file con un'alta concentrazione di rilievi di analisi statica non risolti che è anche
un hotspot di churn e complessità è un candidato particolarmente forte per
un'attenzione prioritaria, dato che più segnali indipendenti convergono sulla stessa
conclusione.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Conteggio grezzo dei rilievi come metrica | Semplice da riportare | Confonde problemi banali e gravi; facilmente manipolabile tramite soppressione |
| Trend pesato per gravità | Riflette il rischio effettivo con maggiore accuratezza | Richiede la manutenzione continua della classificazione della gravità |
| Barriera sull'intero arretrato storico | Massimizza la pulizia finale del codice | Spesso impraticabile per le basi di codice consolidate; può fermare tutto il lavoro |
| Barriera solo sui nuovi rilievi | Pratica, previene la regressione, lascia ridurre l'arretrato gradualmente | I problemi ereditati persistono più a lungo senza un piano di rimedio deliberato |

La tensione centrale è **completezza contro praticità**. Una politica di analisi
statica che esige che l'intero arretrato storico sia risolto prima che qualsiasi nuovo
lavoro prosegua è completa ma di solito impraticabile per qualsiasi base di codice con
una storia vera, e i team sotto quella pressione tendono a sopprimere i rilievi in
blocco anziché correggerli davvero. Si risolve la tensione applicando la barriera
rigorosamente sui nuovi rilievi mentre si conduce uno sforzo di rimedio separato e
deliberatamente cadenzato sull'arretrato ereditato, prioritizzato con le tecniche di
gravità e di confronto incrociato che questo argomento e l'argomento 4.3 raccomandano.

## Domande da discutere con il vostro team

1. **Tracciamo un trend pesato per gravità, o solo un conteggio totale grezzo dei
   rilievi?** Guardate la vostra dashboard effettiva e controllate; un conteggio
   grezzo è comune per impostazione predefinita in molti strumenti e richiede spesso
   una configurazione deliberata per far emergere invece correttamente la gravità.

2. **Qual è il nostro attuale arretrato ereditato di rilievi non risolti, e
   abbiamo un piano deliberato e cadenzato per ridurlo, o si accumula
   semplicemente a tempo indeterminato?** Un arretrato non affrontato e in crescita
   silenziosa è comune e merita di essere nominato con onestà anziché lasciato
   senza esame.

3. **Qual è il nostro tasso stimato di falsi positivi per le categorie di rilievi a
   volume più alto, e abbiamo regolato di conseguenza la configurazione delle
   regole?** Se non l'avete mai controllato, campionate un lotto di rilievi dalla
   vostra categoria più rumorosa e valutate con onestà quanti siano davvero
   azionabili.

4. **Gli ingegneri del nostro team si fidano dei rilievi dell'analisi statica, o
   hanno imparato a ignorarli perché troppo dell'output è rumore?** È una domanda
   diretta e onesta di verifica di sensazione che vale la pena fare al team, dato che
   uno strumento che viene ignorato non fornisce alcun valore reale a prescindere
   dalla sua capacità teorica.

5. **Come gestiamo oggi un rilievo legittimo che un team ritiene vada derogato dato
   un contesto specifico?** Controllate se il vostro processo ne faccia una decisione
   visibile e documentata, o se avvenga attraverso una soppressione silenziosa e non
   documentata che erode nel tempo il segnale dello strumento.

6. **Dove i rilievi dell'analisi statica, i punteggi di complessità e i dati sugli
   hotspot convergono sullo stesso file o modulo?** Confrontate esplicitamente questi
   tre segnali; la convergenza tra più metriche indipendenti è un segnale di
   prioritizzazione più forte di qualsiasi singolo da solo.

## Prospettiva settoriale

**Startup.** Uno strumento di analisi statica leggero e gratuito integrato nella CI
fin dall'inizio è un'assicurazione economica e coglie presto i problemi genuini,
prima che un arretrato ereditato abbia qualsiasi possibilità di accumularsi.
Mantenete l'insieme di regole concentrato su categorie davvero di alto valore e basso
rumore anziché attivare subito ogni regola disponibile.

**Piccola impresa.** La maggior parte degli ecosistemi di linguaggi moderni include
strumenti capaci e gratuiti di analisi statica; attivarli nella CI con un insieme
ragionevole di regole predefinite richiede poco investimento. Concentratevi sulla
barriera ai nuovi rilievi anziché tentare di risolvere in una volta qualsiasi
arretrato preesistente.

**Enterprise.** Gestire in modo deliberato il tasso di falsi positivi e il triage per
gravità diventa essenziale a questa scala, dato che uno strumento tarato male che
genera rumore eccessivo su decine di team verrà ignorato in tutta l'organizzazione.
Investite in un responsabile dedicato della configurazione degli strumenti di analisi
statica stessa, trattando la regolazione delle regole come una disciplina continua
anziché un'attività di impostazione una tantum.

**Settore pubblico.** I rilievi dell'analisi statica, in particolare quelli relativi
alla sicurezza, sono spesso direttamente rilevanti per i requisiti di conformità e di
audit. Mantenete un processo documentato e verificabile su come i rilievi vengono
sottoposti a triage, corretti o derogati formalmente con una giustificazione
registrata, dato che quella documentazione è spesso proprio ciò che un revisore
esterno vorrà vedere.

## Esempi

**Enterprise.** La dashboard di analisi statica di un'azienda software aveva
accumulato oltre quarantamila rilievi non risolti nella propria base di codice dopo
diversi anni senza triage pesato per gravità, un numero così grande che gli ingegneri
avevano in gran parte smesso di guardare del tutto la dashboard. Un approccio rivisto
classificò i rilievi per gravità, scoprì che meno di duecento erano davvero critici, e
applicò la barriera nella CI specificamente sui nuovi rilievi critici e ad alta
gravità lasciando che l'arretrato a bassa gravità si riducesse gradualmente con la
normale manutenzione del codice. In sei mesi i rilievi critici erano scesi a una
singola cifra e, cosa più importante, i dati dei sondaggi tra gli ingegneri mostrarono
una rinnovata fiducia nell'output dello strumento ora che faceva emergere un segnale
gestibile e davvero azionabile anziché un arretrato schiacciante e ignorato.

**Settore pubblico.** La politica di sicurezza della catena di fornitura software di
un'agenzia della difesa richiedeva una scansione di analisi statica con zero rilievi
non risolti prima di qualsiasi rilascio, una politica che nella pratica aveva portato
i team di sviluppo a sopprimere un gran numero di rilievi, inclusi alcuni problemi di
sicurezza genuini, al solo scopo di rispettare le scadenze di rilascio sotto una
barriera tutto-o-niente inapplicabile. Una politica rivista richiese zero nuovi
rilievi critici o ad alta gravità introdotti da qualsiasi rilascio, combinati con un
piano di rimedio documentato e tracciato, con tempistiche, per l'arretrato ereditato,
rivisto ogni trimestre da un comitato di governance della sicurezza. Questo approccio
pratico e graduale ripristinò un esame di sicurezza genuino sul codice nuovo e fece
progressi reali e misurabili sull'arretrato ereditato in diciotto mesi, a differenza
della precedente politica inapplicabile che aveva prodotto soprattutto soppressione
anziché correzioni genuine.

## Business case: motivazioni, ROI e TCO

Il ritorno di un'analisi statica ben gestita è intercettare difetti reali e
vulnerabilità di sicurezza prima che raggiungano la produzione, a un costo molto
inferiore a quello che richiederebbe lo sforzo equivalente di revisione umana per la
stessa copertura. L'esempio dell'agenzia della difesa qui sopra mostra il costo di
sbagliare: una politica inapplicabile e tutto-o-niente aveva in realtà ridotto
l'esame di sicurezza genuino provocando soppressione, l'opposto del suo intento.

Il costo totale di proprietà comprende gli strumenti stessi, spesso gratuiti o a basso
costo per gli ecosistemi di linguaggi comuni, e la disciplina continua del triage per
gravità, della gestione dei falsi positivi e della pianificazione del rimedio
dell'arretrato ereditato. Quella disciplina continua, più dello strumento in sé, è ciò
che determina se un programma di analisi statica offra valore genuino e affidabile o
degradi in rumore ignorato.

## Antipattern e insidie

- **Trattare il conteggio grezzo dei rilievi come la metrica:** confonde problemi
  banali e gravi ed è facilmente manipolabile tramite soppressione.
- **Richiedere che l'intero arretrato storico sia risolto prima che qualsiasi nuovo
  lavoro prosegua:** di solito impraticabile e spinge alla soppressione anziché alle
  correzioni genuine.
- **Ignorare il tasso di falsi positivi:** un livello di rumore non gestito porta i
  team a ignorare del tutto l'output dello strumento, inclusi i rilievi veri.
- **Soppressione silenziosa e non documentata di rilievi legittimi:** erode il
  segnale dello strumento e non lascia alcuna traccia di audit a fini di conformità.
- **Trattare un rilievo dell'analisi statica come verdetto automatico senza revisione
  umana:** perde un contesto che uno strumento non può vedere.
- **Non confrontare mai i rilievi con i dati di complessità e di hotspot:** perde il
  segnale di prioritizzazione più forte che la prova convergente fornisce.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** L'analisi statica non viene eseguita, oppure i
  rilievi si accumulano senza gestione, senza triage per gravità né tracciamento del
  trend.
- **Livello 2, Sviluppo (Develop):** Una parte dell'analisi statica viene eseguita
  nella CI, ma il triage per gravità è incoerente e il tasso di falsi positivi non è
  gestito.
- **Livello 3, Standardizzazione (Standardize):** I rilievi sono pesati per gravità e
  la CI applica la barriera sui nuovi rilievi critici e ad alta gravità in tutta
  l'organizzazione.
- **Livello 4, Gestione (Manage):** Il tasso di falsi positivi è regolato
  attivamente, l'arretrato ereditato ha un piano di rimedio documentato e cadenzato,
  e le deroghe sono visibili e documentate.
- **Livello 5, Orchestrazione (Orchestrate):** I rilievi dell'analisi statica, i dati
  di complessità e quelli sugli hotspot sono confrontati di routine per
  prioritizzare gli investimenti, e l'organizzazione sa indicare miglioramenti
  specifici e misurabili dei difetti o della sicurezza ricondotti al programma.

## Spunti di discussione

1. Qual è il nostro attuale trend pesato per gravità, e sta migliorando o peggiorando?
2. Quanto è grande il nostro arretrato ereditato di rilievi, e abbiamo un piano deliberato per ridurlo?
3. Qual è il nostro tasso stimato di falsi positivi per la categoria di rilievi più rumorosa?
4. Gli ingegneri del nostro team si fidano oggi o ignorano l'output della nostra analisi statica?
5. Dove i rilievi dell'analisi statica convergono con i dati di complessità o di hotspot nella nostra base di codice?

## Punti chiave

- Traccia un **trend pesato per gravità**, non un conteggio grezzo dei rilievi, che
  confonde problemi banali e gravi.
- Applica la barriera nella CI sui **nuovi rilievi introdotti**, non sull'intero
  arretrato storico, per prevenire la regressione senza pretendere una correzione
  impraticabile e tutta in una volta.
- Gestisci attivamente il **tasso di falsi positivi**; il rumore non gestito
  distrugge la fiducia nello strumento e porta a ignorare i rilievi in blocco.
- Tratta i rilievi come **stimolo alla revisione umana**, con deroghe visibili e
  documentate, non come verdetto automatico né come soppressione silenziosa.
- Confronta l'analisi statica con i **dati di complessità e di hotspot** (argomenti
  4.1, 4.3) per una prova convergente e più forte per la prioritizzazione.

## Riferimenti e letture di approfondimento

- *Static Program Analysis*, di Anders Møller e Michael I. Schwartzbach (i
  fondamenti teorici e pratici delle tecniche di analisi statica).
- Le linee guida dell'OWASP sul static application security testing (SAST), parte
  delle più ampie risorse della OWASP Foundation sulle pratiche di sviluppo
  software sicuro.
- *Refactoring: Improving the Design of Existing Code*, di Martin Fowler (il
  catalogo dei code smell a cui attinge gran parte degli strumenti di analisi
  statica).
- *Working Effectively with Legacy Code*, di Michael Feathers (gestire un arretrato
  ereditato di problemi di qualità in una base di codice consolidata).
