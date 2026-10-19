# 8.5 Una tabella di marcia per l'adozione incrementale

## Panoramica e motivazione

Questo argomento chiude la Parte 8, e il contenuto sostanziale di questo libro, con la
domanda che ogni lettore arrivato fin qui si sta probabilmente ponendo: dato tutto ciò
che questo libro tratta, quarantacinque argomenti su consegna, esperienza degli
sviluppatori, qualità del codice, risultati di business, affidabilità, sicurezza e
cambiamento dell'era dell'IA, da dove comincia davvero un'organizzazione? La risposta
onesta che questo argomento dà è: non da tutte le parti insieme. Una diffusione
[big-bang](https://en.wikipedia.org/wiki/Big_bang_adoption) dell'intero ambito di
questo libro, tentata tutta in una volta, viola direttamente l'indicazione centrale
dell'argomento 8.3, dato che un programma di metriche vasto e completo introdotto da un
giorno all'altro è esattamente il tipo di cambiamento che provoca paura e
manipolazione anziché fiducia.

Questo argomento offre invece una sequenza concreta e a fasi, costruita su un principio
semplice e coerente ripetuto in tutto questo libro: partire dalle fondamenta, dimostrare
il valore in un ambito ristretto, poi espandere in modo deliberato, senza mai saltare il
lavoro di governance e di fiducia culturale trattato negli argomenti 1.4 e 8.3 per
passare direttamente a metriche sofisticate e complete. Questa sequenza non è
arbitraria; segue la struttura di dipendenze che le parti stesse di questo libro
stabiliscono, le fondamenta della Parte 1 devono davvero venire per prime, perché ogni
parte successiva presuppone la governance, l'orientamento ai risultati e
l'alfabetizzazione statistica che gli argomenti dall'1.1 all'1.6 stabiliscono.

Per i team grandi, una tabella di marcia a fasi è ciò che rende l'intero ambito di
questo libro raggiungibile anziché schiacciante. Le organizzazioni enterprise possono
usare la sequenza di questo argomento per pianificare una diffusione davvero
pluritrimestrale o pluriennale di un programma di metriche con traguardi realistici; le
organizzazioni governative, che devono spesso giustificare l'investimento in metriche a
un processo di bilancio o di controllo in modo incrementale anziché come un'unica grande
richiesta, possono usare le fasi di questo argomento come naturali punti di verifica
per dimostrare il valore e chiedere un investimento continuato.

## Principi chiave

- **Prima le fondamenta, sempre.** Governance (argomento 1.4), orientamento ai
  risultati (argomento 1.3) e costruzione della fiducia culturale (argomento 8.3) non
  possono essere saltati per passare direttamente a metriche sofisticate.
- **Dimostra il valore in un ambito ristretto prima di espandere.** Un singolo team o
  una singola famiglia di metriche, fatti bene e affidabili, sono una fondazione più
  solida di una diffusione completa fatta male.
- **Sequenzia per dipendenza, non per importanza percepita.** Alcune famiglie di
  metriche di questo libro dipendono da un lavoro preliminare che altri argomenti
  stabiliscono per primi.
- **Ogni fase dovrebbe produrre un risultato dimostrabile e riportabile** che giustifichi
  l'investimento continuato nella fase successiva.
- **È una tabella di marcia da adattare, non una prescrizione rigida e universale.** Il
  punto di partenza specifico e le priorità della vostra organizzazione dovrebbero
  plasmare il ritmo effettivo.

## Raccomandazioni

### Fase 1: Fondamenta e governance (Parte 1)

Prima di strumentare una sola famiglia di metriche, stabilisci la disciplina di
governance che l'argomento 1.4 descrive: un modello di carta delle metriche, una chiara
policy diagnostica contro valutativa (argomento 1.1) e le basi di alfabetizzazione
statistica dell'argomento 1.6 condivise da chiunque interpreterà i dati. Questa fase non
produce ancora dashboard; produce il lavoro organizzativo preliminare da cui ogni fase
successiva dipende. Saltare questa fase per andare più in fretta è il modo singolarmente
più comune in cui le indicazioni di questo libro vengono minate nella pratica, dato che
ogni metrica successiva eredita qualunque qualità di governance, o la sua mancanza,
questa fase abbia stabilito.

### Fase 2: Un singolo team pilota, metriche DORA, solo diagnostica (Parte 2)

Scegli un team, idealmente uno volonteroso e coinvolto anziché imposto, e strumenta le
metriche DORA della Parte 2, usando una strumentazione automatica (argomento 1.5)
anziché l'autodichiarazione, in modalità puramente diagnostica, seguendo direttamente
le indicazioni di costruzione della fiducia dell'argomento 8.3. Conduci questo per
almeno un intero trimestre prima di espandere, e usalo come banco di prova per il tuo
modello di carta di governance e per il tuo approccio alla progettazione delle dashboard
(argomento 8.1) prima di impegnarti in uno dei due su scala più ampia.

### Fase 3: Estendi le metriche di consegna a tutta l'organizzazione, aggiungi l'esperienza degli sviluppatori (Parti 2, 3)

Una volta che il pilota ha dimostrato un valore genuino e, cosa critica, una fiducia
sostenuta (nessun episodio di uso improprio, oppure uno ben gestito secondo le
indicazioni dell'argomento 8.3), estendi la strumentazione DORA ad altri team e
introduci in tutta l'organizzazione il primo sondaggio sull'esperienza degli sviluppatori
(argomento 3.7). Questa fase è dove la disciplina diagnostico-valutativa affronta la sua
prima vera prova a scala, e mantenerla con cura qui fissa il tono per tutto ciò che
segue.

### Fase 4: Metriche di qualità del codice e di risultato (Parti 4, 5)

Con le fondamenta di consegna e di esperienza degli sviluppatori stabilite e affidabili,
aggiungi le metriche di qualità del codice della Parte 4, dando priorità all'analisi
degli hotspot (argomento 4.3) e al tracciamento del debito tecnico (argomento 4.5) come
punti di partenza a più alta leva, e comincia a costruire l'infrastruttura di
telemetria dei risultati che l'argomento 7.4 sostiene dovrebbe diventare alla fine il
baricentro del vostro programma, a partire dal tasso di difetti sfuggiti (argomento 5.1)
e dall'adozione delle funzionalità (argomento 5.2) come metriche di risultato più
trattabili da strumentare per prime.

### Fase 5: Affidabilità, sicurezza e ricalibrazione per l'era dell'IA (Parti 6, 7)

Stabilisci SLO ed error budget formali (argomento 6.1) per i tuoi servizi più critici,
costruisci una pratica di metriche degli incidenti senza colpa (argomento 6.2) e
conduci la verifica delle metriche per l'era dell'IA che l'argomento 7.1 raccomanda se
la tua organizzazione ha adottato, o sta adottando, strumenti di sviluppo assistiti
dall'IA. Questa fase procede spesso in parallelo parziale con la Fase 4 anziché in
stretta sequenza, dato che il lavoro su affidabilità e sicurezza ha spesso una propria
urgenza indipendente.

### In corso: valutazione consolidata della maturità e investimento continuo

Una volta stabilite le fasi centrali, adotta la valutazione consolidata della maturità
dell'argomento 8.4 come pratica ricorrente annuale, usandone i risultati per dirigere
l'investimento continuo anziché trattare la tabella di marcia come completa una volta
che ogni fase è stata tecnicamente toccata. Un programma di metriche è una capacità
organizzativa sostenuta, non un progetto con una data di fine definita, e questa fase
continua riflette direttamente quella realtà.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Diffusione big-bang e completa | Rapida, copertura completa fin dall'inizio | Alto rischio di provocare paura e manipolazione (argomento 8.3); nessuna fondazione di governance dimostrata |
| Diffusione a fasi, prima le fondamenta | Costruisce fiducia e governance prima di ampliare l'ambito; ogni fase dimostra il proprio valore | Più lenta nel raggiungere la copertura completa; richiede un impegno pluritrimestrale sostenuto |
| Diffusione a fasi, prima le metriche (saltando la governance) | Risultati iniziali sulle dashboard più rapidi | Eredita una governance debole in ogni fase successiva; rischio più alto a lungo termine |
| Adozione estemporanea e opportunistica senza tabella di marcia | Flessibile, reattiva ai bisogni immediati | Produce una copertura incoerente e difficile da governare e ripete gli errori fase dopo fase |

La tensione centrale è **velocità verso la copertura completa contro sequenza che parte
dalle fondamenta**. Le organizzazioni sotto pressione di mostrare risultati in fretta
sono tentate di saltare il lavoro di governance della Fase 1 e di passare direttamente a
strumentare le metriche, ma l'argomentazione cumulativa di questo libro, dalla
disciplina di governance dell'argomento 1.4 alle indicazioni di costruzione della
fiducia dell'argomento 8.3, è che saltare le fondamenta produce un programma più veloce
ma fondamentalmente più debole. Si risolve la tensione impegnandosi alla sequenza a
fasi, e usando il risultato dimostrabile di ciascuna fase (la raccomandazione chiave
dell'argomento 8.5) per giustificare l'investimento continuato anziché cercare di
mostrare risultati completi prima che le fondamenta possano sostenerli.

## Domande da discutere con il vostro team

1. **A che punto di questa sequenza a fasi si trova davvero oggi la nostra
   organizzazione, valutata con onestà?** Mappate il vostro stato attuale rispetto alle
   cinque fasi; molte organizzazioni, valutate con onestà, scoprono di avere metriche
   strumentate di una fase successiva senza aver davvero completato le fasi
   fondamentali precedenti.

2. **Abbiamo saltato le fondamenta di governance della Fase 1 per passare direttamente
   alla strumentazione, e in tal caso quanto ci è costato?** Si collega direttamente
   alla valutazione di maturità dell'argomento 8.4; una fondazione di governance debole
   scoperta tardi è costosa da correggere a posteriori.

3. **Che aspetto avrebbe per noi un team pilota genuino e volonteroso, se non ne
   abbiamo ancora condotto uno?** Individuate un candidato reale e specifico anziché
   lasciare la questione astratta, e discutete che cosa lo renderebbe in particolare un
   buon candidato.

4. **Quale risultato dimostrabile ha prodotto davvero ciascuna fase che abbiamo
   completato, e lo abbiamo usato per giustificare l'investimento della fase
   successiva?** Se non sapete indicare un risultato specifico e comunicato di una fase
   completata, quella lacuna merita di essere nominata.

5. **Le Fasi 4 e 5 procedono in un parallelo appropriato per noi, o una viene
   trascurata a favore dell'altra?** Discutete se il profilo di rischio specifico della
   vostra organizzazione, più orientata alla consegna o più all'affidabilità, debba
   plasmare questa sequenza parallela in modo diverso dall'impostazione predefinita che
   questo argomento descrive.

6. **Abbiamo stabilito la pratica ricorrente di valutazione della maturità
   dell'argomento 8.4, o la nostra tabella di marcia di fatto finisce una volta
   completate tecnicamente le fasi iniziali?** Una tabella di marcia senza questa fase
   continua rischia di trattare il programma di metriche come un progetto concluso
   anziché come la capacità sostenuta che questo libro sostiene debba essere.

## Prospettiva settoriale

**Startup.** Questa tabella di marcia completa e a più fasi può probabilmente essere
compressa in modo significativo, dato che una piccola organizzazione può percorrere le
fasi fondamentali di governance e di pilota in settimane anziché in trimestri. Non
saltate del tutto la Fase 1 nemmeno su piccola scala, dato che le abitudini di
governance stabilite presto sono molto più facili da sostenere che da introdurre in
seguito man mano che l'organizzazione cresce.

**Piccola impresa.** Adattate il ritmo della tabella di marcia alla vostra capacità
effettiva anziché tentare ogni fase della sequenza che questo argomento descrive; una
piccola impresa potrebbe ragionevolmente fermarsi dopo la Fase 2 o 3, con metriche di
consegna e di esperienza degli sviluppatori, e rinviare il lavoro più sofisticato su
risultati e affidabilità delle Parti dalla 4 alla 6 finché l'organizzazione non sia
cresciuta abbastanza da averne davvero bisogno e da poterlo sostenere.

**Enterprise.** Pianificate questa tabella di marcia esplicitamente come programma
pluritrimestrale o pluriennale con traguardi realistici, e usate il risultato
dimostrabile di ciascuna fase come punto di verifica formale per assicurarvi il
sostegno e il budget continuati della dirigenza, anziché tentare di giustificare l'intero
ambito in anticipo in un unico business case.

**Settore pubblico.** Usate le fasi di questo argomento come naturali punti di verifica
incrementali per la rendicontazione al bilancio o all'organo di controllo, chiedendo il
proseguimento dell'investimento a ogni confine di fase sulla base del risultato
dimostrato e documentato della fase precedente anziché come un'unica grande richiesta
anticipata che può incontrare più scetticismo o difficoltà di acquisto.

## Esempi

**Enterprise.** Un'azienda di tecnologia sanitaria adottò esplicitamente questa tabella
di marcia come framework strutturante del proprio programma di metriche, completando le
fondamenta di governance della Fase 1 in sei settimane, conducendo un pilota DORA su un
singolo team per un intero trimestre e solo allora estendendosi alla copertura completa
delle metriche di consegna dell'organizzazione nella Fase 3, circa cinque mesi dopo
l'inizio. Mantenendo deliberatamente questo ritmo, l'azienda evitò lo schema di
manipolazione dettata dalla paura che l'argomento 8.3 descrive come rischio di
diffusioni più rapide e meno disciplinate, e il team pilota della Fase 2 divenne in modo
specifico sostenitore interno informale dell'espansione del programma, avendo
sperimentato in prima persona che l'impegno alla sola diagnostica era stato davvero
onorato per tutto il trimestre del pilota.

**Settore pubblico.** L'agenzia tecnologica di un governo statale usò esplicitamente la
struttura a fasi di questo argomento per sequenziare le richieste di budget alla propria
commissione di controllo, chiedendo i fondi per le Fasi 1 e 2 come investimento pilota
iniziale e modesto, poi tornando alla commissione con i risultati documentati della
Fase 2, frequenza di rilascio migliorata e tasso di fallimento dei cambiamenti stabile
per il team pilota, come prova concreta a sostegno di una più ampia richiesta di fondi
per le Fasi 3 e 4 nel ciclo di bilancio successivo. Questo approccio di finanziamento
incrementale e basato sulle prove ebbe successo dove una precedente richiesta anticipata
più completa, per l'intero ambito del programma di metriche dell'agenzia, era stata
respinta come troppo grande e insufficientemente giustificata da risultati dimostrati.

## Business case: motivazioni, ROI e TCO

Il ritorno di una tabella di marcia a fasi e basata sulle fondamenta è un programma di
metriche che funziona davvero, affidabile, ben governato, usato davvero per prendere
decisioni, anziché un programma dall'aspetto completo ma corrotto dalla paura o
governato male che una diffusione più rapida rischia di produrre. L'esempio dell'azienda
di tecnologia sanitaria qui sopra lo mostra direttamente: il ritmo deliberato ha prodotto
una fiducia genuina e un sostegno interno che una diffusione più rapida avrebbe
probabilmente minato.

Il costo totale di proprietà è il tempo: questa tabella di marcia richiede davvero più
tempo per raggiungere l'ambito completo di una diffusione big-bang. Quel costo di
tempo è il prezzo diretto e necessario della fondazione di fiducia e di governance che
l'intero libro ha sostenuto fin dai suoi argomenti d'apertura, e l'esempio del settore
pubblico qui sopra mostra un vero beneficio secondario e pratico: fasi incrementali e
basate sulle prove sono spesso più facili da finanziare e da giustificare di un'unica,
grande richiesta anticipata e non dimostrata.

## Antipattern e insidie

- **Una diffusione big-bang e completa tentata tutta in una volta:** viola
  l'indicazione centrale dell'argomento 8.3 e rischia di provocare paura e
  manipolazione fin dall'inizio.
- **Saltare le fondamenta di governance della Fase 1 per andare più in fretta:** eredita
  una governance debole in ogni fase successiva, costosa da correggere in seguito.
- **Scegliere per la Fase 2 un team pilota riluttante o imposto:** mina lo scopo di
  costruzione della fiducia che un vero pilota dovrebbe servire.
- **Non produrre né comunicare un risultato dimostrabile da ciascuna fase:** perde la
  base di prove necessaria per giustificare l'investimento continuato nella fase
  successiva.
- **Trattare la tabella di marcia come completa una volta che ogni fase è stata
  tecnicamente toccata:** perde la pratica continua di valutazione della maturità che
  l'argomento 8.4 raccomanda come disciplina permanente e non una tantum.
- **Seguire rigidamente la sequenza predefinita di questo argomento a prescindere dal
  profilo di rischio effettivo della propria organizzazione:** questa tabella di marcia
  va adattata, non applicata meccanicamente senza giudizio.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Non esiste una tabella di marcia; l'adozione delle
  metriche, dove avviene, è estemporanea e non sequenziata.
- **Livello 2, Sviluppo (Develop):** Alcune fasi sono state tentate, ma il lavoro
  fondamentale di governance è stato saltato o è incompleto, e i risultati delle fasi
  non sono documentati in modo sistematico.
- **Livello 3, Standardizzazione (Standardize):** Una tabella di marcia a fasi che segue
  la sequenza di questo argomento, che parte dalle fondamenta, è documentata e seguita
  attivamente, con ciascuna fase che produce un risultato dimostrabile.
- **Livello 4, Gestione (Manage):** I risultati delle fasi sono usati in modo
  sistematico per giustificare l'investimento continuato, e la tabella di marcia è
  adattata deliberatamente al profilo di rischio e alle priorità specifici
  dell'organizzazione.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha completato l'intera
  tabella di marcia e sostiene la pratica continua di valutazione della maturità
  dell'argomento 8.4 come capacità permanente, con una storia dimostrata e pluriennale
  di investimento in metriche a fasi e costruttore di fiducia.

## Spunti di discussione

1. A che punto di questa sequenza a fasi si trova davvero oggi la nostra organizzazione?
2. Abbiamo saltato o accorciato la fase fondamentale di governance, e quanto ci è costato?
3. Che aspetto avrebbe un team pilota genuino e volonteroso per la nostra prossima espansione?
4. Quale risultato dimostrabile della nostra fase più recente potrebbe giustificare la nostra prossima richiesta di investimento?
5. Abbiamo stabilito la pratica continua di valutazione della maturità, o la nostra tabella di marcia di fatto finisce?

## Punti chiave

- Adotta le indicazioni di questo libro **a fasi, partendo dalle fondamenta**, mai con
  una diffusione big-bang che rischia di provocare paura e manipolazione.
- **La Fase 1 (governance) non si può saltare**; ogni fase successiva eredita
  qualunque qualità di governance questa fase stabilisca.
- Usa un **team pilota genuino e volonteroso** per dimostrare il valore e costruire
  fiducia prima di ampliare l'ambito a tutta l'organizzazione.
- Ogni fase dovrebbe produrre un **risultato dimostrabile e riportabile** che
  giustifichi l'investimento continuato nella fase successiva.
- Tratta il completamento della tabella di marcia come l'inizio di una **pratica
  continua e sostenuta** (la valutazione ricorrente della maturità dell'argomento 8.4),
  non di un progetto concluso.

## Riferimenti e letture di approfondimento

- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (la base di prove delle famiglie di metriche che questa tabella di
  marcia sequenzia).
- *Leading Change*, di John P. Kotter (principi di gestione del cambiamento
  organizzativo applicabili alla diffusione a fasi di un programma di metriche).
- *The Lean Startup*, di Eric Ries (il ciclo costruisci-misura-impara su cui si basa
  l'approccio a fasi di questo argomento, dimostra il valore e poi espandi).
- Linee guida del U.S. Government Accountability Office (GAO) sulla misurazione delle
  prestazioni e sul GPRA Modernization Act: pratica di finanziamento incrementale e
  basato sulle prove dei programmi del settore pubblico.
