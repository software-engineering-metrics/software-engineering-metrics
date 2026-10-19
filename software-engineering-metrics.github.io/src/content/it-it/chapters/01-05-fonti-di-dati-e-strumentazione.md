# 1.5 Fonti di dati e strumentazione

## Panoramica e motivazione

Una metrica è affidabile quanto i dati che ha sotto, e la maggior parte dei
programmi di metriche spende molto più impegno nel progettare le dashboard che
nel verificare la pipeline che le alimenta. È al contrario. Un grafico
splendidamente progettato su una strumentazione incoerente, autodichiarata o
rotta in silenzio è peggio di nessun grafico, perché sembra autorevole pur
essendo sbagliato. Questo argomento riguarda le fondamenta poco appariscenti che
il resto del libro dà per scontate: da dove arrivano davvero i dati di
ingegneria, quando fidarsi della strumentazione automatica più che
dell'autodichiarazione e i difetti di qualità dei dati che invalidano in
silenzio una metrica prima che qualcuno se ne accorga.

I dati dell'ingegneria del software provengono da un manipolo di tipi di fonte,
ciascuno con diverse caratteristiche di affidabilità. Il controllo di versione e
le pipeline di [CI/CD](https://en.wikipedia.org/wiki/CI/CD) generano registrazioni
oggettive, con marca temporale, difficili da falsificare, di ciò che è
effettivamente accaduto. Gli issue tracker e gli strumenti di gestione dei
progetti generano registrazioni che dipendono da persone che aggiornano lo stato
correttamente e con tempestività, cosa che spesso fanno in modo incoerente. I
sondaggi generano dati autodichiarati, preziosi per ciò che nessun sistema può
osservare, come la soddisfazione, ma soggetti a distorsione del ricordo e a
effetti di desiderabilità sociale. Le piattaforme di osservabilità generano
telemetria a livello di sistema, oggettiva ma che copre solo ciò che è stato
strumentato. Sapere da quale categoria provengono i dati di una data metrica
ti dice quanto fidarti e quali modalità di guasto tenere d'occhio.

Alla scala enterprise e governativa i problemi di qualità dei dati si compongono
perché la distanza tra l'origine dei dati e il loro uso finale in una dashboard
cresce attraverso più sistemi, integrazioni e trasformazioni. Un campo che
significa una cosa nel sistema sorgente può significare qualcosa di
sottilmente diverso quando arriva a un livello di reportistica, e nessuno a
valle se ne accorge perché il numero sembra ancora plausibile. Fare bene la
strumentazione è meno emozionante che fare bene i framework, ma è la base su cui
poggia tutto il resto di questo libro.

## Principi chiave

- **Preferisci la strumentazione all'autodichiarazione ovunque il sistema possa
  osservare direttamente l'evento.** Una marca temporale di rilascio dalla
  pipeline è più affidabile del conteggio dei rilasci dichiarato da un team.
- **Usa l'autodichiarazione solo per ciò che non si può osservare
  direttamente.** Soddisfazione, attrito percepito e benessere non hanno un
  sostituto in un sistema di registrazione; chiedi direttamente e progetta bene
  il sondaggio (argomento 3.7). Riserva l'autodichiarazione specificamente a
  quella categoria.
- **I dati di ogni metrica hanno un sistema sorgente, un metodo di raccolta e
  una modalità di guasto nota.** Documenta tutti e tre, non solo la
  definizione.
- **La qualità dei dati decade in silenzio.** Una pipeline che funzionava
  correttamente un anno fa può essere rotta oggi senza che nessuno lo noti, e
  una dashboard continuerà a mostrare un numero sbagliato senza lamentarsi.
- **Strumenta nel punto di verità, non a valle di una traduzione.** Ogni
  passaggio tra l'evento e la dashboard è un'occasione perché il significato
  derivi.

## Raccomandazioni

### Associa ogni metrica al suo reale sistema sorgente prima di fidartene

Per ogni metrica di una dashboard, indica il sistema specifico che genera
l'evento sottostante: la pipeline di CI/CD per gli eventi di rilascio, l'host del
controllo di versione per gli eventi di commit e merge, l'incident tracker per
le registrazioni delle interruzioni, la piattaforma di sondaggi per la
soddisfazione autodichiarata. Se non riesci a indicare il sistema esatto, non sai
davvero da dove viene il numero e non puoi valutarne l'affidabilità. Questa
mappatura è un prerequisito della carta di governance dell'argomento 1.4, non un
esercizio separato.

### Strumenta all'evento, non al rapporto

I dati più affidabili catturano un evento in modo automatico nel momento in cui
accade: una pipeline registra un rilascio nell'istante in cui si completa, un
sistema di controllo di versione registra un merge nell'istante in cui avviene. I
dati che dipendono dal fatto che una persona si ricordi di aggiornare un campo di
stato in seguito, segnare un ticket come «fatto», registrare a mano un rilascio
in un foglio di calcolo, perdono accuratezza quanto più sono lontani dall'evento
reale e quanto più la persona responsabile è impegnata. Ovunque esista un evento
automatico, preferiscilo a un proxy dichiarato da una persona per lo stesso
fatto.

### Riserva i sondaggi a ciò che solo una persona può dirti

Alcune cose non si possono davvero osservare dalla telemetria di sistema: se un
ingegnere sente che il suo lavoro ha senso, se un processo risulta frustrante, se
il rischio di burnout sta salendo. Richiedono di chiedere direttamente, e un
sondaggio ben progettato (l'argomento 3.7 ne tratta i meccanismi) è lo strumento
giusto. L'errore è usare l'autodichiarazione per cose che un sistema potrebbe
osservare direttamente, chiedere agli ingegneri di stimare la propria frequenza di
rilascio anziché prenderla dalla pipeline, il che introduce rumore e distorsione
inutili in dati che avrebbero potuto essere oggettivi.

### Inserisci controlli di qualità dei dati nella pipeline stessa

Tratta le pipeline delle metriche con lo stesso rigore del codice di produzione:
aggiungi controlli automatici che segnalino quando una fonte smette di inviare
dati, quando la distribuzione di un campo cambia in modo inatteso o quando un
conteggio scende a zero senza motivo. Una dashboard che mostra in silenzio dati
obsoleti o rotti come se fossero attuali è peggio di una che mostra visibilmente
«dati non disponibili», perché la prima erode la fiducia in modo invisibile
mentre la seconda almeno dice la verità sui propri limiti.

### Documenta il metodo di raccolta insieme alla definizione

La definizione di una metrica («lead time dei cambiamenti») non è completa senza
il suo metodo di raccolta (misurato dalla marca temporale del primo commit nel
controllo di versione alla marca temporale del rilascio in produzione nella
pipeline, escludendo i branch di hotfix). Due team con la stessa definizione ma
metodi di raccolta diversi produrranno comunque numeri non confrontabili.
Registra entrambi nella carta delle metriche dell'argomento 1.4, e tratta una
modifica a uno dei due come una modifica che richiede la stessa revisione
documentata.

## Compromessi: pro e contro

| Tipo di fonte | Pro | Contro |
| --- | --- | --- |
| Strumentazione automatica della pipeline (CI/CD, controllo di versione) | Oggettiva, con marca temporale, difficile da falsificare, poco sforzo continuo | Richiede un investimento ingegneristico iniziale per costruirla e mantenerla |
| Dati di issue tracker e gestione progetti | Ampiamente disponibili, familiari ai team | Dipende dalla diligenza delle persone; spesso incoerente tra i team |
| Sondaggi e autodichiarazione | Unica fonte per l'esperienza soggettiva (soddisfazione, benessere) | Distorsione del ricordo, distorsione da desiderabilità sociale, affaticamento da risposta |
| Piattaforme di osservabilità e telemetria | Segnale ricco, in tempo reale, a livello di sistema | Copre solo ciò che è stato strumentato esplicitamente; può essere costosa su larga scala |

La tensione centrale è **oggettività contro copertura**. La strumentazione
automatica è la fonte più affidabile ma non può osservare affatto l'esperienza
soggettiva, mentre i sondaggi raggiungono proprio ciò che l'automazione non può
ma comportano un reale rischio di distorsione. Si risolve la tensione usando la
strumentazione automatica ovunque un evento possa essere osservato direttamente,
e riservando l'autodichiarazione in modo specifico e solo a ciò che richiede
davvero di chiedere a una persona, mai come pigro sostituto di dati che un
sistema avrebbe potuto fornire.

## Domande da discutere con il vostro team

1. **Per le nostre cinque metriche più importanti, sappiamo indicare il sistema
   sorgente esatto e il metodo di raccolta di ciascuna, o stiamo dando per
   buona una definizione senza sapere da dove vengono davvero i dati?** È una
   lacuna sorprendentemente comune: una metrica viene adottata da un framework o
   dalla dashboard predefinita di un fornitore, e nessuno nel team attuale sa
   quale sistema generi i dati sottostanti né come. Ricostruite l'origine di
   ciascuna come esercizio di gruppo.

2. **Quali delle nostre metriche si basano sull'autodichiarazione per qualcosa
   che un sistema potrebbe osservare direttamente, e che cosa servirebbe per
   sostituirla con una vera strumentazione?** Conteggi di rilascio
   autodichiarati, ore lavorate autodichiarate e cycle time autostimato sono
   tutti esempi comuni di fonte di dati sbagliata per qualcosa che
   l'automazione potrebbe catturare in modo più affidabile. Individuateli e
   date priorità alla sostituzione di quelli a posta più alta.

3. **Come ci accorgeremmo che una delle nostre pipeline di dati si è rotta in
   silenzio?** La maggior parte delle organizzazioni scopre una pipeline di
   metriche rotta solo quando qualcuno nota che un numero sembra implausibile,
   il che può richiedere mesi. Discutete se qualcuna delle vostre pipeline abbia
   oggi controlli automatici di salute e, in caso contrario, quali ne abbiano
   più bisogno per prime.

4. **Dove una traduzione tra sistemi ha cambiato il significato di una metrica
   senza che nessuno lo decidesse di proposito?** Un campo che significa una cosa
   in un sistema sorgente può significare qualcosa di sottilmente diverso dopo
   un'integrazione o una migrazione, e il numero risultante può sembrare
   plausibile pur essendo sbagliato. Percorrete l'intero percorso dei dati della
   vostra metrica più rilevante e cercate i punti di traduzione.

5. **Documentiamo i metodi di raccolta, non solo le definizioni, nella nostra
   carta delle metriche?** Due team possono condividere nome e definizione di una
   metrica calcolandola da metodi di raccolta diversi, producendo numeri non
   davvero confrontabili. Verificate un campione delle vostre carte rispetto a
   questa specifica lacuna.

6. **Come distinguiamo un trend genuino da un artefatto di qualità dei dati
   quando un numero si muove in modo inatteso?** Un cambiamento improvviso in una
   metrica è spesso il primo segno di un cambiamento reale o di una pipeline
   rotta, e distinguere i due casi richiede di conoscere abbastanza bene la fonte
   dei dati da indagare in fretta. Discutete il processo effettivo del vostro team
   per l'ultimo spostamento inspiegato di una metrica che avete incontrato.

## Prospettiva settoriale

**Startup.** Con uno stack piccolo, la maggior parte delle metriche può venire
direttamente dal fornitore di CI/CD, dall'host del controllo di versione e da
uno strumento di sondaggio leggero, senza costruire pipeline su misura. Il
rischio è saltare anche i controlli di salute più elementari perché il team
corre; un controllo automatico di cinque minuti che verifichi che una fonte di
dati stia ancora inviando eventi è un'assicurazione economica contro il volare
alla cieca senza accorgersene.

**Piccola impresa.** Appoggiatevi alla reportistica integrata dei vostri
strumenti esistenti anziché costruire pipeline di dati su misura che non avete la
capacità di mantenere. Siate espliciti su quali numeri vengono da sistemi
automatici e quali sono stime che qualcuno digita in un foglio di calcolo, perché
i due hanno un'affidabilità molto diversa, anche se finiscono sulla stessa
pagina.

**Enterprise.** I problemi di qualità dei dati si compongono attraverso
integrazioni, migrazioni e confini tra unità di business. Investite in pipeline
di dati centralizzate e ben monitorate per le vostre metriche più rilevanti,
costruite controlli automatici di qualità dei dati come pratica standard e
verificate i metodi di raccolta, non solo le definizioni, ogni volta che
confrontate metriche tra unità di business.

**Settore pubblico.** La provenienza dei dati può avere un peso legale e di
audit: una cifra di prestazione pubblicata può dover superare un audit esterno
non solo del suo valore ma dell'intera catena di raccolta. Documentate
esplicitamente la discendenza dei dati (data lineage), conservate le
registrazioni storiche dei metodi di raccolta anche dopo che una metodologia
cambia, e siate pronti a dimostrare esattamente come è stato prodotto un numero,
non solo che cosa indica oggi.

## Esempi

**Enterprise.** La dirigenza di ingegneria di una società di servizi finanziari
monitorava il «lead time dei cambiamenti» da due anni quando scoprì che una
migrazione della pipeline di dati, diciotto mesi prima, aveva cambiato in
silenzio la fonte della marca temporale dal primo commit alla creazione della
pull request, accorciando il lead time apparente di diverse ore in media per ogni
team senza che nessuno se ne accorgesse o approvasse il cambiamento. La
correzione istituì un controllo di qualità dei dati che confronta la
distribuzione di ogni metrica settimana su settimana e segnala per la revisione
umana gli spostamenti statisticamente insoliti, intercettando altri due problemi
silenziosi di pipeline nell'anno successivo.

**Settore pubblico.** La dashboard pubblica sull'affidabilità del servizio di
un'agenzia dei trasporti si basava su un mix di telemetria automatica dei
sensori e di segnalazioni di incidenti inserite a mano dagli uffici regionali.
Un audit scoprì che le regioni con meno capacità di personale sottostimavano
sistematicamente gli incidenti minori, non per disonestà ma semplicemente perché
l'inserimento manuale competeva per il tempo con lavori più urgenti, il che
significava che la cifra di affidabilità pubblicata era migliore della realtà
proprio nelle regioni che potevano permettersi meno di lasciare inosservata una
manutenzione carente di risorse. La correzione dell'agenzia sostituì
l'inserimento manuale degli incidenti con la registrazione automatica
innescata dai sensori ovunque fattibile e aggiunse una stima documentata della
copertura delle segnalazioni manuali accanto alla cifra pubblicata.

## Business case: motivazioni, ROI e TCO

Il ritorno di una strumentazione solida è la fiducia: una dirigenza che si fida
dei propri dati può agire con decisione, mentre un team che si è scottato con una
pipeline rotta in silenzio comincia a dubitare di ogni numero, il che rallenta
ogni decisione che dipende dalle metriche. Quella perdita di fiducia è costosa e
difficile da riparare, e spesso richiede molto più tempo per essere ricostruita di
quanto sarebbe costato l'investimento originale in strumentazione.

Il costo totale di proprietà di una buona strumentazione comprende il lavoro
ingegneristico iniziale per costruire pipeline affidabili e il costo continuo del
monitoraggio della qualità dei dati, entrambi facili da sottofinanziare perché
nessuno dei due produce un riquadro visibile di dashboard. Quel sottoinvestimento
è una falsa economia: il costo di scoprire una pipeline rotta in silenzio dopo
mesi di decisioni prese su dati sbagliati è molto più alto del costo di costruire
i controlli di salute che l'avrebbero intercettata il primo giorno.

## Antipattern e insidie

- **Fidarsi di un numero senza conoscere il suo sistema sorgente:** una metrica
  adottata da un framework o da un'impostazione predefinita del fornitore senza
  che nessuno ricostruisca da dove vengano davvero i dati.
- **Autodichiarare ciò che un sistema potrebbe osservare direttamente:**
  introduce rumore e distorsione inutili in dati che avrebbero potuto essere
  oggettivi.
- **Nessun controllo automatico di qualità dei dati su una pipeline di
  metriche:** una pipeline rotta in silenzio può mostrare numeri sbagliati per
  mesi senza essere rilevata.
- **Documentare solo la definizione, non il metodo di raccolta:** due team con lo
  stesso nome di metrica possono comunque calcolare numeri non confrontabili.
- **Una dashboard che mostra «0» o dati obsoleti come se fossero attuali, senza
  alcuna indicazione di un guasto della fonte:** peggio di un messaggio visibile
  «dati non disponibili».
- **Regioni o team con poche risorse che sottostimano sistematicamente a causa
  dell'onere dell'inserimento manuale:** una lacuna di qualità dei dati che
  correla proprio con le aree che hanno più bisogno di attenzione.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Nessuno sa ricondurre in modo affidabile una
  metrica al suo sistema sorgente; le pipeline non hanno controlli di salute e i
  guasti passano inosservati.
- **Livello 2, Sviluppo (Develop):** Alcune metriche hanno fonti documentate, ma i
  metodi di raccolta sono incoerenti e i controlli di qualità dei dati sono, al
  meglio, estemporanei.
- **Livello 3, Standardizzazione (Standardize):** Ogni metrica governata documenta
  il proprio sistema sorgente e il metodo di raccolta; le pipeline automatiche
  sono preferite all'autodichiarazione ovunque un evento possa essere osservato
  direttamente.
- **Livello 4, Gestione (Manage):** Controlli automatici di qualità dei dati
  monitorano ogni pipeline rilevante, segnalano le anomalie per la revisione, e
  la discendenza dei dati è documentata e verificabile.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione tratta la qualità
  dei dati come una disciplina ingegneristica di prima classe, con monitoraggio e
  risposta agli incidenti propri, e sa dimostrare a richiesta la piena
  provenienza di qualsiasi metrica pubblicata.

## Spunti di discussione

1. Potremmo ricondurre le nostre tre metriche principali al loro sistema sorgente esatto subito, dal vivo, in questa riunione?
2. Quali delle nostre metriche attuali si basano sull'autodichiarazione per qualcosa che un sistema potrebbe misurare direttamente?
3. Qualcuna delle nostre pipeline di metriche ha oggi controlli automatici di salute?
4. Quando abbiamo scoperto l'ultima volta una pipeline di dati rotta in silenzio, e da quanto tempo era sbagliata?
5. Dove l'inserimento manuale dei dati crea un divario tra la realtà riportata e quella effettiva?

## Punti chiave

- Preferisci la **strumentazione automatica** all'autodichiarazione ovunque un
  sistema possa osservare direttamente l'evento; riserva l'autodichiarazione
  all'esperienza davvero soggettiva.
- Ogni metrica ha bisogno di un **sistema sorgente e un metodo di raccolta**
  documentati, non solo di una definizione.
- La qualità dei dati **decade in silenzio**; costruisci controlli automatici
  nella pipeline stessa anziché scoprire i guasti per caso.
- Strumenta **all'evento**, non a valle di una traduzione, per ridurre al minimo
  la deriva tra ciò che è accaduto e ciò che mostra la dashboard.
- Il costo di una pipeline rotta in silenzio, mesi di decisioni prese su dati
  sbagliati, supera di gran lunga il costo dei controlli di salute che
  l'avrebbero intercettata.

## Riferimenti e letture di approfondimento

- *Observability Engineering*, di Charity Majors, Liz Fong-Jones e George
  Miranda (principi di progettazione della strumentazione e della telemetria).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren,
  Jez Humble e Gene Kim (l'approccio di strumentazione dietro le metriche DORA).
- *Data Quality: The Accuracy Dimension*, di Jack E. Olson (concetti di qualità
  dei dati applicabili alle pipeline di metriche).
- *How to Measure Anything*, di Douglas W. Hubbard (metodi di misurazione per
  grandezze che sembrano difficili da osservare direttamente).
