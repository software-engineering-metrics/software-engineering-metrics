# 6.1 Indicatori di livello di servizio, obiettivi ed error budget

## Panoramica e motivazione

L'**[ingegneria dell'affidabilità dei siti](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(SRE)**, la disciplina nata a Google e documentata nel libro *Site Reliability
Engineering*, ha fornito un vocabolario su cui questo argomento si basa direttamente:
un **indicatore di livello di servizio (SLI, service level indicator)** è un segnale
misurato direttamente dello stato di salute di un servizio, latenza delle richieste,
tasso di errore, disponibilità. Un **obiettivo di livello di servizio (SLO, service
level objective)** è l'intervallo obiettivo per quell'indicatore, il 99,9% delle
richieste riesce entro 200 millisecondi, per esempio. E un **error budget** è il
margine di scostamento consentito, lo 0,1% di richieste a cui è permesso fallire,
trattato non come un difetto da eliminare ma come una risorsa spendibile che può essere
usata deliberatamente per assumersi un rischio: rilasciare una modifica rischiosa,
condurre un esperimento o semplicemente accettare che un'affidabilità perfetta non sia
né raggiungibile né, oltre un certo punto, degna del suo costo.

Quest'ultima idea, l'error budget come risorsa spendibile anziché come numero da
minimizzare verso lo zero, è il concetto singolarmente più importante di questo
argomento e probabilmente dell'intera parte. Risolve una tensione che affligge molte
organizzazioni: l'ingegneria vuole rilasciare funzionalità e assumersi rischi
ragionevoli; le operazioni vogliono la massima stabilità. Senza un error budget
condiviso e quantificato, questa diventa una trattativa senza fine e carica di
politica. Con uno, diventa una regola semplice e oggettiva: spendere liberamente finché
il budget resta, rallentare e dare priorità automaticamente al lavoro sulla stabilità
una volta esaurito. Questo trasforma un disaccordo filosofico in uno aritmetico.

Per i team grandi, SLO ed error budget sono ciò che rende l'affidabilità misurabile e
negoziabile anziché un assoluto irraggiungibile e non dichiarato che ogni team manca in
silenzio sentendosi vagamente in colpa. Le organizzazioni enterprise usano gli SLO per
fissare aspettative chiare e contrattuali tra team e con i clienti; le organizzazioni
governative che gestiscono infrastrutture pubbliche critiche li usano per fissare
obiettivi di affidabilità difendibili e giustificabili pubblicamente anziché uno
standard impossibile di perfezione che nessun sistema reale può sostenere.

## Principi chiave

- **L'affidabilità al 100% è l'obiettivo sbagliato per quasi ogni sistema.** È di
  solito irraggiungibile, e perseguirla oltre un certo punto sacrifica attivamente la
  velocità senza alcun beneficio significativo per l'utente.
- **Un SLO dovrebbe riflettere ciò che gli utenti notano e a cui tengono davvero**,
  non un numero tondo arbitrario scelto perché suona rassicurante.
- **L'error budget trasforma l'affidabilità in una risorsa spendibile**, dando a
  ingegneria e operazioni una regola condivisa e oggettiva su quando rilasciare in
  fretta e quando rallentare.
- **Gli SLI devono essere misurati dall'esperienza effettiva dell'utente** ovunque
  possibile, non solo dallo stato di salute autodichiarato di un sistema interno.
- **L'esaurimento dell'error budget innesca una risposta predeterminata e concordata**,
  non una discussione improvvisata ogni volta che accade.

## Raccomandazioni

### Scegli SLI che riflettano la genuina esperienza dell'utente

Seleziona indicatori misurati il più vicino possibile all'esperienza effettiva
dell'utente: tasso di successo e latenza delle richieste misurati al bordo o al load
balancer, non solo controlli interni di stato del servizio che possono riportare
«sano» mentre gli utenti incontrano problemi reali. Un SLI che misura qualcosa che
l'utente non nota mai, un componente interno tecnicamente attivo mentre la richiesta
complessiva fallisce comunque, misura la cosa sbagliata per quanto facile possa essere
da strumentare.

### Fissa l'obiettivo SLO in base a ciò di cui gli utenti hanno davvero bisogno, non a un numero tondo arbitrario

Resisti al riflesso di fissare un obiettivo come «99,99% di uptime» solo perché suona
impressionantemente rigoroso. Indaga invece quale livello di affidabilità gli utenti
notino e curino davvero, informato dai dati storici sugli incidenti, dalla ricerca
sugli utenti e dal costo dimostrato di raggiungere ogni incremento aggiuntivo di
affidabilità, dato che passare dal 99,9% al 99,99% costa spesso molto più sforzo di
ingegneria di quanto sia costato passare dal 99% al 99,9%, per un beneficio
percepibile dall'utente decrescente e infine trascurabile.

### Tratta l'error budget come una risorsa spendibile con una risposta predeterminata all'esaurimento

Calcola l'error budget direttamente dall'SLO (un obiettivo di disponibilità del 99,9%
su 30 giorni consente circa 43 minuti di inattività ammessa) e traccia la spesa
rispetto ad esso in modo continuo. Concorda, in anticipo e prima di qualsiasi
incidente specifico, che cosa accade quando il budget si esaurisce: una politica
comune ed efficace è che il lavoro sulle funzionalità si fermi e la priorità del team
si sposti automaticamente sul lavoro di affidabilità finché il budget non si ricostituisce.
Questa regola predeterminata elimina la necessità di riargomentare il compromesso sotto
pressione durante ogni singolo incidente.

### Usa l'error budget per prendere decisioni di rischio deliberate e informate

Un error budget sano e non speso non è qualcosa da accumulare; è il permesso di
assumersi rischi ragionevoli, rilasciare una modifica con un rischio elevato ma
accettabile, condurre un esperimento di chaos engineering (l'argomento sul chaos
engineering del libro gemello `software-engineering-guide` lo tratta direttamente), o
accettare un cambiamento architetturale più rischioso, perché il budget esiste
specificamente per essere speso deliberatamente anziché preservato intatto. Un error
budget che non viene mai speso suggerisce o un team eccessivamente prudente o un SLO
fissato in modo troppo largo rispetto all'affidabilità effettivamente raggiunta, due
cose che meritano indagine.

### Rivedi e aggiorna gli SLO periodicamente, sulla base delle prove, non dell'inerzia

Un SLO fissato anni fa può non riflettere più le attuali aspettative degli utenti,
l'architettura del sistema o le priorità di business. Rivedi gli SLO con cadenza
regolare, controllando l'affidabilità storica raggiunta, il feedback degli utenti e se
l'obiettivo rappresenti ancora un punto di compromesso significativo anziché un
obiettivo facilmente raggiunto che potrebbe essere stretto per consentire più velocità
altrove, o uno irrealistico che il team ha di fatto rinunciato a rispettare.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessun SLO formale (implicito «il più affidabile possibile») | Nessun overhead di impostazione | Trattativa senza fine e senza fondamento tra velocità e stabilità; nessuna regola condivisa |
| SLO aspirazionale e molto alto (99,99%+) | Segnala serietà sull'affidabilità | Spesso costo inutile; rendimenti decrescenti oltre ciò che gli utenti notano davvero |
| SLO basato sulle prove e fondato sull'esperienza dell'utente | Riflette un valore genuino; difendibile e raggiungibile | Richiede dati e analisi reali per essere fissato correttamente |
| Error budget con risposta predeterminata all'esaurimento | Elimina la trattativa improvvisata; decisioni oggettive e rapide | Richiede consenso organizzativo e disciplina per rispettare davvero la regola predeterminata |

La tensione centrale è **aspirazione contro raggiungibilità**. Un SLO alto e
aspirazionale sembra segnalare serietà sulla qualità, ma perseguire l'affidabilità
oltre ciò che gli utenti notano davvero sacrifica velocità reale senza alcun beneficio
genuino, e un obiettivo irrealistico che il team non raggiunge mai insegna a tutti a
smettere del tutto di prendere sul serio l'SLO. Si risolve la tensione fondando l'SLO su
prove effettive, che cosa notano gli utenti, che cosa ha storicamente raggiunto il
sistema, quanto costa ogni incremento aggiuntivo, anziché su un'aspirazione o sul
desiderio di apparire rigorosi su uno scorecard.

## Domande da discutere con il vostro team

1. **Il nostro SLO attuale è fondato su prove di ciò che gli utenti notano davvero, o
   è stato fissato in modo aspirazionale perché un numero alto sembrava
   opportunamente serio?** Ricostruite l'origine del vostro obiettivo attuale, se
   potete, e valutate con onestà se rifletta una vera ricerca sugli utenti o la sola
   intuizione ingegneristica.

2. **Abbiamo una risposta predeterminata e concordata all'esaurimento dell'error
   budget, o il compromesso viene riargomentato ogni volta che accade?** Se la
   risposta onesta è la seconda, quella lacuna merita di essere colmata prima che il
   prossimo incidente forzi la discussione sotto pressione.

3. **Il nostro error budget viene mai speso deliberatamente, su una modifica a rischio
   calcolato o su un esperimento, o viene consumato solo accidentalmente dagli
   incidenti?** Un budget mai speso deliberatamente può indicare un team troppo
   prudente che perde opportunità legittime che il budget esiste per abilitare.

4. **I nostri SLI sono misurati dalla genuina esperienza dell'utente, o dallo stato di
   salute interno del sistema che potrebbe non riflettere ciò che gli utenti
   incontrano davvero?** Confrontate la vostra strumentazione attuale con questa
   distinzione specifica; è una lacuna comune anche in programmi di affidabilità per
   il resto maturi.

5. **Quando abbiamo rivisto l'ultima volta il nostro SLO rispetto alle prove attuali, ed
   è cambiato qualcosa, aspettative degli utenti, architettura del sistema, priorità
   di business, che giustifichi una revisione?** Se non riuscite a ricordare una
   revisione recente, quell'assenza merita già una discussione.

6. **Quanto ci costerebbe, in sforzo di ingegneria, alzare il nostro SLO attuale di
   un ulteriore «nove» di affidabilità, e quel costo sarebbe giustificato da un reale
   beneficio per l'utente?** Questa impostazione concreta di costi e benefici aiuta a
   ancorare a numeri reali la tensione tra aspirazione e raggiungibilità anziché a una
   preferenza astratta.

## Prospettiva settoriale

**Startup.** Gli SLO formali sono spesso superflui molto presto, quando il team può
rispondere ai problemi di affidabilità direttamente e in modo informale. Adottate
almeno un SLO approssimativo e informale appena avete clienti paganti reali che
dipendono dall'uptime, dato che la disciplina di un obiettivo esplicito, anche
tracciato in modo approssimativo, aiuta a dare priorità al lavoro di affidabilità
rispetto alla pressione delle funzionalità prima di quanto la maggior parte delle
aziende giovani pensi di fare.

**Piccola impresa.** La maggior parte delle moderne piattaforme di hosting e di
osservabilità riporta dati di base su uptime e latenza con una configurazione minima;
usateli per fissare un SLO semplice e raggiungibile anziché uno aspirazionale che non
potete realisticamente tracciare né su cui agire con una capacità operativa limitata.

**Enterprise.** Gli SLO a questa scala sostengono spesso accordi contrattuali sul
livello di servizio con conseguenze finanziarie reali, il che rende particolarmente
importanti una definizione degli obiettivi basata sulle prove e una gestione
disciplinata dell'error budget. Investite in SLI fondati sulla genuina esperienza
dell'utente anziché su comodi controlli di stato interni, e stabilite formalmente, con
il consenso della dirigenza, la politica di risposta predeterminata all'esaurimento
prima che serva sotto pressione.

**Settore pubblico.** Gli obiettivi di affidabilità del settore pubblico per
l'infrastruttura critica hanno a volte un peso legale o normativo, e un obiettivo
irrealistico e non raggiunto scoperto durante un audit o un incidente pubblico danneggia
in modo significativo la credibilità istituzionale. Fissate gli obiettivi sulla base di
genuine e documentate esigenze degli utenti e della missione, e siate trasparenti
pubblicamente sul compromesso deliberato che un error budget rappresenta, anziché
lasciar intendere uno standard irraggiungibile di perfezione.

## Esempi

**Enterprise.** Un'azienda di archiviazione cloud aveva per anni puntato alla «massima
disponibilità» senza un SLO formale, provocando una tensione cronica e irrisolta tra il
team di prodotto (che voleva rilasciare in fretta le funzionalità) e il team di
infrastruttura (che voleva la massima cautela), riargomentata ex novo in ogni riunione
di pianificazione dei rilasci. Adottare un SLO formale di disponibilità del 99,95% con
un error budget esplicito e una politica predeterminata, il lavoro sulle funzionalità
si ferma automaticamente quando il budget è esaurito, risolse del tutto la trattativa
ricorrente: entrambi i team potevano vedere lo stesso numero e concordare sulla stessa
regola, e l'azienda riportò un aumento misurabile di funzionalità rilasciate nei
periodi di budget sano, insieme a un rallentamento deliberato e misurabile nei due
periodi dell'anno successivo in cui il budget fu davvero esaurito, esattamente come la
politica intendeva.

**Settore pubblico.** Il sistema pubblico di allerta di un servizio meteorologico
nazionale operava da anni sotto un'aspettativa informale di «sempre disponibile», senza
alcun obiettivo documentato e con un significativo stress operativo non affrontato sul
team di reperibilità che cercava di soddisfare uno standard non dichiarato e di fatto
impossibile. Un SLO formale adottato di recente, 99,9% di disponibilità con una
spiegazione pubblica e chiaramente comunicata dell'error budget, diede al team
operativo il permesso esplicito e difendibile di pianificare finestre di manutenzione
programmata entro il budget, cosa che la precedente aspettativa non dichiarata di
«sempre disponibile» aveva reso politicamente difficile da fare anche quando davvero
necessaria per la salute a lungo termine del sistema. Spiegare pubblicamente e
direttamente il concetto di error budget, anziché nasconderlo, fu accolto
favorevolmente come segno di una pratica operativa onesta e matura anziché come un
indebolimento dell'impegno per la qualità del servizio.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'adottare formalmente SLO ed error budget è risolvere con un'unica
regola condivisa e oggettiva una trattativa altrimenti senza fine e politicamente
costosa tra velocità e stabilità. L'esempio dell'archiviazione cloud qui sopra lo
mostra in concreto: anni di tensione ricorrente e irrisolta tra due team sono stati
risolti da un unico obiettivo formale e da una politica predeterminata, liberando una
notevole energia organizzativa che prima andava nel riargomentare ripetutamente lo
stesso compromesso.

Il costo totale di proprietà comprende lo sforzo di analisi per fissare correttamente
un obiettivo basato sulle prove e la disciplina di rispettare la risposta
predeterminata all'esaurimento anche sotto pressione di rilasciare comunque una
funzionalità particolarmente desiderata. Quel costo di disciplina è reale, ma è molto
inferiore al costo continuo di una trattativa cronica e irrisolta che consuma energia
organizzativa in ogni ciclo di pianificazione a tempo indeterminato.

## Antipattern e insidie

- **Fissare un SLO aspirazionale senza alcuna prova alle spalle:** produce un
  obiettivo irrealistico che il team smette di prendere sul serio, o uno
  inutilmente costoso che insegue un beneficio che gli utenti non notano.
- **Nessuna risposta predeterminata all'esaurimento dell'error budget:** costringe a
  ripetere sotto pressione la stessa difficile discussione sul compromesso ogni
  volta che accade.
- **Misurare gli SLI dallo stato di salute interno del sistema anziché dalla genuina
  esperienza dell'utente:** può riportare «sano» mentre gli utenti incontrano
  problemi reali.
- **Non spendere mai deliberatamente un error budget sano:** può indicare eccessiva
  prudenza e opportunità legittime perse.
- **Fissare un obiettivo una volta sola e non rivederlo mai:** un SLO può diventare
  obsoleto man mano che cambiano aspettative degli utenti, architettura e priorità.
- **Trattare la politica dell'error budget come facoltativa sotto pressione:** una
  regola predeterminata che viene scavalcata ogni volta che è scomoda non offre alcun
  valore reale nel prendere decisioni.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Gli obiettivi di affidabilità sono impliciti o
  aspirazionali, senza SLO, SLI o error budget formali definiti.
- **Livello 2, Sviluppo (Develop):** Alcuni servizi hanno un SLO informale, ma gli SLI
  possono non riflettere la genuina esperienza dell'utente e non c'è una politica
  predeterminata di esaurimento.
- **Livello 3, Standardizzazione (Standardize):** SLO basati sulle prove con SLI
  genuinamente fondati sull'esperienza dell'utente e una politica predeterminata di
  esaurimento dell'error budget sono stabiliti in modo coerente sui servizi critici.
- **Livello 4, Gestione (Manage):** Gli error budget sono spesi attivamente e
  deliberatamente in assunzioni di rischio calcolate, e gli SLO sono rivisti e
  rivisitati con una cadenza regolare e basata sulle prove.
- **Livello 5, Orchestrazione (Orchestrate):** SLO ed error budget sono integrati in
  tutta l'organizzazione come meccanismo condiviso e oggettivo per bilanciare
  velocità e stabilità, e l'organizzazione sa indicare decisioni specifiche che il
  framework ha reso possibili e che una trattativa senza fondamento non avrebbe
  risolto con la stessa efficacia.

## Spunti di discussione

1. Il nostro SLO attuale è fondato su prove o su aspirazioni?
2. Abbiamo una risposta predeterminata all'esaurimento dell'error budget che rispetteremmo davvero sotto pressione?
3. Quando abbiamo speso per l'ultima volta deliberatamente un error budget sano su un rischio calcolato?
4. I nostri SLI misurano la genuina esperienza dell'utente o comodi controlli di stato interni?
5. Quanto ci costerebbe alzare il nostro SLO di un ulteriore «nove», e quel costo sarebbe giustificato?

## Punti chiave

- Un **indicatore di livello di servizio (SLI)** misura la genuina esperienza
  dell'utente; un **obiettivo di livello di servizio (SLO)** è il suo obiettivo basato
  sulle prove; un **error budget** è il margine consentito deliberatamente spendibile.
- **L'affidabilità al 100% è di solito l'obiettivo sbagliato**; fonda il tuo SLO su ciò
  che gli utenti notano davvero e su quanto costi davvero ogni incremento aggiuntivo.
- Tratta l'error budget come una **risorsa spendibile con una risposta predeterminata
  all'esaurimento**, eliminando la necessità di riargomentare ogni volta, sotto
  pressione, velocità contro stabilità.
- Misura gli SLI dalla **genuina esperienza dell'utente**, non solo da comodi controlli
  di stato interni.
- **Rivedi e rivisita periodicamente gli SLO**, sulla base delle prove, dato che un
  obiettivo obsoleto perde utilità man mano che il sistema e i suoi utenti cambiano.

## Riferimenti e letture di approfondimento

- *Site Reliability Engineering: How Google Runs Production Systems*, a cura di Betsy
  Beyer, Chris Jones, Jennifer Petoff e Niall Richard Murphy (il testo fondativo che
  definisce SLI, SLO ed error budget).
- *The Site Reliability Workbook*, a cura di Betsy Beyer, Niall Richard Murphy, David
  K. Rensin, Kent Kawahara e Stephen Thorne (indicazioni pratiche sull'attuazione di
  SLO ed error budget).
- *Implementing Service Level Objectives*, di Alex Hidalgo (una guida completa e
  orientata ai professionisti per progettare e rendere operativi gli SLO).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (il rapporto tra pratica di affidabilità e prestazioni di
  consegna).
