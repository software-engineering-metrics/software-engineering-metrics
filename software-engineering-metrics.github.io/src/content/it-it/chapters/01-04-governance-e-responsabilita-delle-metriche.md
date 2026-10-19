# 1.4 Governance e responsabilità delle metriche

## Panoramica e motivazione

Una metrica senza un responsabile è una discussione in attesa di accadere. Due
team calcolano gli «utenti attivi» in modo diverso e passano una riunione a
riconciliare i numeri invece di gestire l'andamento; un riquadro di dashboard
che nessuno mantiene diventa obsoleto in silenzio per mesi prima che qualcuno
se ne accorga; una metrica costruita in origine per la diagnosi di un team viene
adottata da un altro team per uno scopo che la sua definizione originale non è
mai stata pensata per sostenere. Niente di tutto questo è un problema di
misurazione in senso statistico. È un problema di governance, ed è risolvibile
con la stessa disciplina che le organizzazioni già applicano al codice:
responsabilità esplicita, una [fonte di verità](https://en.wikipedia.org/wiki/Single_source_of_truth)
documentata e un processo di revisione.

La governance non è burocrazia fine a se stessa. È ciò che permette a un
programma di metriche di sopravvivere al contatto con la scala organizzativa.
Un singolo team può tenere le definizioni delle sue metriche nella testa di
qualcuno e correggere la deriva con la conversazione quotidiana. Un'organizzazione
con decine di team, ognuno dei quali produce e consuma metriche, non può. Senza
governance, le definizioni derivano in silenzio, le metriche si moltiplicano
senza che nessuno le sfoltisca, e quando la dirigenza si accorge che due
rapporti non concordano, il costo di riconciliarli è già stato pagato molte
volte in riunioni sprecate e fiducia erosa.

Per le organizzazioni enterprise e governative la governance ha un peso
ulteriore perché le metriche alimentano sempre più decisioni con conseguenze
reali (allocazione del budget, rendicontazione pubblica delle prestazioni,
contratti con i fornitori) che sopravvivono a qualsiasi singola persona abbia
costruito la dashboard originale. Una carta delle metriche che sopravvive al
ricambio del personale, che ogni nuovo membro del team può leggere e capire, è
ciò che fa sì che i numeri di un'organizzazione significhino la stessa cosa tra
cinque anni come oggi.

## Principi chiave

- **Ogni metrica ha esattamente un responsabile.** La responsabilità condivisa è
  nessuna responsabilità; quando tutti possiedono una definizione, nessuno la
  mantiene.
- **Una metrica ha una sola fonte di verità.** Due sistemi che calcolano la
  stessa metrica in modo diverso sono un fallimento di governance in attesa di
  emergere.
- **La governance è scritta, non è conoscenza tribale.** Una carta delle metriche
  che vive solo nella memoria di qualcuno non sopravvive alla sua partenza.
- **Il ritiro è importante quanto l'adozione.** Un programma di metriche sano
  sfoltisce con la stessa deliberatezza con cui cresce.
- **La governance scala con la conseguenza, non con il numero di metriche.** Una
  metrica che alimenta un rapporto pubblico richiede una governance più
  pesante di una che un singolo team usa per fare il debug del proprio sprint.

## Raccomandazioni

### Scrivi una carta delle metriche per ogni insieme di metriche che attraversa il confine di un team

Una **carta delle metriche** (metrics charter) è un documento breve e vivo che
dichiara lo scopo di un insieme di metriche, i suoi non-obiettivi espliciti (la
distinzione diagnostico-valutativo dell'argomento 1.1 va qui), il responsabile e
la fonte di verità di ciascuna metrica, e una cadenza di revisione. Tienila a
una pagina. Il file docs/examples/metrics-charter-example.md del repository
di accompagnamento di questo libro ne mostra la forma. Una carta così breve
viene letta; una che si dilata in un documento di policy no.

### Assegna a ogni metrica un responsabile con nome, non un team

«Il team di piattaforma possiede questa metrica» diffonde la responsabilità
finché nessuno la mantiene davvero. Indica una persona o un ruolo specifico e
responsabile. Quel responsabile risponde del fatto che la definizione della
metrica resti accurata, che la sua strumentazione resti sana e di rispondere
alla domanda «perché questo numero sembra sbagliato» quando inevitabilmente
arriva. La responsabilità può e deve ruotare quando le persone cambiano ruolo,
ma la carta dovrebbe sempre indicare un responsabile attuale, senza mai lasciare
il campo vuoto.

### Stabilisci una sola fonte di verità per metrica e vieta il calcolo parallelo

Quando due sistemi calcolano in modo diverso la stessa metrica nominalmente
identica, per esempio gli «utenti attivi» che un team conta sui login e un
altro sulle chiamate API, il disaccordo risultante costa molto più in riunioni
di riconciliazione di quanto sarebbe costato accordarsi in anticipo su una sola
fonte di verità. Indica nella carta il sistema autorevole per ciascuna metrica, e
tratta qualsiasi altro calcolo della stessa metrica come un bug da correggere o
come una metrica con altro nome da rinominare.

### Inserisci una revisione di ritiro nella cadenza di governance

Un programma di metriche che si limita ad aggiungere metriche accumula una
proliferazione di dashboard su cui nessuno può agire (argomento 1.1). A ogni
revisione di governance, oltre a proporre nuove metriche, chiedi quali di quelle
esistenti non hanno informato alcuna decisione negli ultimi due cicli e sono
candidate al ritiro. Il ritiro non è un fallimento; è la stessa disciplina che
una base di codice sana applica al codice morto.

### Proporziona il rigore della governance alla conseguenza, non al volume

Non tutte le metriche richiedono lo stesso processo. Una metrica che un singolo
team inventa per fare il debug del proprio sprint non richiede quasi alcuna
governance oltre al fatto che il team sappia che cosa significa. Una metrica che
alimenta uno scorecard dirigenziale, un rapporto pubblico sulle prestazioni o la
retribuzione di un individuo richiede una definizione documentata, un
responsabile con nome, una traccia di audit e un'approvazione prima di andare in
produzione. Adegua il peso del processo alla conseguenza di una metrica
sbagliata, non a quante metriche esistono.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessuna governance formale | Rapido, poco overhead per i piccoli team | Le definizioni derivano; la responsabilità si diffonde; le dashboard proliferano senza controllo |
| Carta leggera per insieme di metriche | Economica, leggibile, scala con l'organizzazione | Richiede disciplina per restare aggiornata; può essere saltata sotto la pressione delle scadenze |
| Comitato centrale di governance delle metriche, pesante | Forte coerenza, forte traccia di audit | Lento nell'approvare nuove metriche; può diventare un collo di bottiglia che i team aggirano |
| Governance proporzionata alla conseguenza | Adegua lo sforzo al rischio effettivo | Richiede giudizio per classificare correttamente la conseguenza; può essere aggirata sottostimando la posta in gioco |

La tensione centrale è **coerenza contro velocità**. Una governance centrale
pesante produce metriche affidabili e coerenti ma rallenta un team proprio
quando vuole strumentare in fretta qualcosa per rispondere a una domanda
urgente. Si risolve la tensione proporzionando il peso della governance alla
conseguenza: lasciate che i team strumentino liberamente per il proprio uso
diagnostico e richiedete la piena disciplina di carta, responsabilità e
approvazione solo quando una metrica attraversa il confine di un team o
alimenta un uso valutativo o pubblico.

## Domande da discutere con il vostro team

1. **Ogni metrica che attraversa il confine di un team ha un responsabile con
   nome, e quel responsabile si riconoscerebbe come tale se glielo chiedessimo
   oggi?** «Il team di piattaforma la possiede» non è una risposta; una persona
   o un ruolo specifico lo è. Verificate le vostre metriche tra team e
   controllate se il responsabile indicato, ammesso che ce ne sia uno, sa
   davvero di detenere quella responsabilità.

2. **Dove calcoliamo oggi la stessa metrica nominalmente identica in due modi
   diversi, e quanto tempo abbiamo speso per riconciliare il disaccordo?** È uno
   dei fallimenti di governance più costosi e più comuni nelle grandi
   organizzazioni, ed è del tutto evitabile con una singola fonte di verità
   documentata. Portate un esempio reale, se lo avete, e tracciatene il costo.

3. **Quando abbiamo ritirato l'ultima metrica, e che cosa ha innescato quella
   decisione?** Un'organizzazione che sa descrivere solo come aggiunge metriche,
   mai come le rimuove, sta accumulando debito di dashboard. Se non riuscite a
   ricordare un ritiro, quell'assenza è essa stessa la risposta.

4. **Il nostro processo di governance è proporzionato alla conseguenza, o ogni
   metrica passa attraverso lo stesso peso di revisione a prescindere dalla
   posta in gioco?** Una governance troppo pesante su una metrica di team a bassa
   posta rallenta il lavoro senza alcun beneficio di sicurezza; una governance
   troppo leggera su una metrica che alimenta un rapporto pubblico o una
   decisione retributiva è un rischio reale. Mappate le vostre metriche in base
   alla conseguenza e confrontate onestamente con essa il peso del processo.

5. **Che cosa accade alla responsabilità di una metrica quando la persona che
   l'ha costruita cambia ruolo o se ne va?** Una carta delle metriche che esiste
   solo nella testa di una persona scompare con lei. Verificatelo scegliendo una
   metrica e chiedendovi se un neoassunto potrebbe, dalla sola documentazione
   scritta, capire la sua definizione, la fonte di verità e lo scopo.

6. **Come ci accorgeremmo che la definizione di una metrica è cambiata in
   silenzio?** Un cambiamento nel modo di calcolare un numero, senza un cambio di
   nome né una nota nella sua storia, è quasi invisibile finché qualcuno non
   confronta dati vecchi e nuovi e trova una discontinuità che non sa spiegare.
   Discutete se le vostre metriche abbiano oggi una qualche forma di registro
   delle modifiche.

## Prospettiva settoriale

**Startup.** Una governance formale è di solito eccessiva per un team di cinque
persone in cui tutti sanno già che cosa significa ogni numero. L'unica
disciplina che vale la pena adottare comunque presto è indicare per iscritto un
unico responsabile per metrica, perché costa quasi nulla e previene la
confusione quando arrivano le prime assunzioni e iniziano a chiedere che cosa
significhi un numero.

**Piccola impresa.** La governance qui significa soprattutto scegliere, e
mantenere, un solo strumento come fonte di verità per ciascuna metrica invece di
lasciare che i fogli di calcolo e la dashboard integrata di una piattaforma
divergano in silenzio. Scrivete la carta come un unico documento condiviso, anche
informale, così che un nuovo dipendente possa scoprire che cosa significa un
numero senza chiedere in giro.

**Enterprise.** È qui che la governance si guadagna il pane. Standardizzate le
definizioni tra le unità di business, richiedete una carta per tutto ciò che
alimenta uno scorecard dirigenziale e inserite la revisione di ritiro in una
cadenza di governance ricorrente, perché a questa scala la proliferazione delle
dashboard diventa rapidamente costosa, sia nel costo di manutenzione sia nella
perdita di credibilità quando due divisioni riportano numeri contraddittori
per la stessa cosa.

**Settore pubblico.** La governance qui ha spesso una dimensione legale o di
audit: le misure di prestazione pubblicate possono dover soddisfare requisiti
normativi di rendicontazione, e un cambio di definizione può avere conseguenze
politiche reali. Documentate la metodologia in modo pubblico, congelate le
definizioni tra i periodi di rendicontazione a meno che il cambiamento non sia
esso stesso giustificato pubblicamente, e trattate un audit indipendente della
definizione della metrica, non solo del suo valore attuale, come pratica
permanente di governance.

## Esempi

**Enterprise.** Un'azienda software multinazionale scoprì, durante
l'integrazione dopo un'acquisizione, che le sue due maggiori unità di business
definivano la «frequenza di rilascio» in modo diverso: una contava ogni push su
un ambiente di staging, l'altra solo i rilasci in produzione. La dirigenza
confrontava da oltre un anno le prestazioni di consegna delle due unità con
numeri che non erano davvero confrontabili. La soluzione fu un comitato di
governance delle metriche a livello aziendale che pubblicò un unico glossario di
definizioni delle metriche (riprodotto nell'argomento 9.2 di questo libro),
richiese a ogni team di certificare la conformità e ritirò le definizioni locali
ambigue entro un trimestre.

**Settore pubblico.** Un ufficio statistico nazionale responsabile della
pubblicazione di una dashboard sulle prestazioni dei servizi digitali scoprì che
una modifica al calcolo di «risolto entro lo SLA», fatta in silenzio da un team
di ingegneria che correggeva quello che vedeva come un bug, aveva spostato di
diversi punti percentuali una cifra di conformità in primo piano senza alcuna
documentazione pubblica del cambiamento. L'ufficio istituì un processo formale
di controllo delle modifiche per qualsiasi definizione di metrica che alimenti
un rapporto pubblico: le modifiche proposte richiedono una motivazione
documentata, un confronto prima-dopo pubblicato insieme alla modifica e
l'approvazione di un funzionario responsabile con nome, chiudendo la lacuna che
aveva lasciato passare inosservata la modifica precedente.

## Business case: motivazioni, ROI e TCO

Il ritorno della governance è il costo di riconciliazione evitato. Ogni ora
passata in una riunione in cui due team litigano su quale numero sia giusto è
un'ora che una governance disciplinata, una sola fonte di verità, un
responsabile con nome, avrebbe evitato del tutto. Alla scala enterprise questo
costo si compone su decine di team e può consumare una quota davvero
significativa dell'attenzione della dirigenza su un problema che una carta di
una pagina per ogni insieme di metriche avrebbe evitato.

Il costo totale di proprietà di una pratica di governance leggera, una carta, un
responsabile con nome, una revisione periodica, è modesto e per lo più
anticipato. L'alternativa, scoprire a un anno da un'iniziativa importante che i
numeri di cui la dirigenza si fidava non erano mai stati davvero confrontabili,
costa enormemente di più, sia in analisi sprecata sia nel danno di credibilità
di correggere il registro pubblico o interno a cose fatte.

## Antipattern e insidie

- **Responsabilità del team anziché di una persona con nome:** diffonde la
  responsabilità finché nessuno mantiene davvero la definizione.
- **Calcolo parallelo della stessa metrica nominale:** garantisce un eventuale
  disaccordo e una costosa riconciliazione.
- **Una carta che esiste solo nella testa di qualcuno:** scompare nel momento in
  cui quella persona cambia ruolo.
- **Un programma di metriche che aggiunge sempre e non ritira mai:** produce una
  proliferazione di dashboard su cui nessuno può agire.
- **Peso di governance uniforme a prescindere dalla conseguenza:** rallenta il
  lavoro a bassa posta mentre protegge poco le metriche pubbliche o legate alla
  retribuzione, ad alta posta.
- **Modifiche silenziose alla definizione:** il significato di una metrica cambia
  senza registro delle modifiche, e i confronti storici diventano in silenzio
  non validi.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche non hanno responsabili formali; le
  definizioni vivono nella memoria dei singoli e derivano in silenzio tra i team.
- **Livello 2, Sviluppo (Develop):** Alcuni team scrivono documentazione
  informale per le proprie metriche, ma non c'è un formato di carta condiviso né
  coerenza tra i team.
- **Livello 3, Standardizzazione (Standardize):** Ogni metrica che attraversa il
  confine di un team ha una carta documentata, un responsabile con nome e una
  sola fonte di verità concordata, applicate in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Una cadenza di governance ricorrente riesamina
  la perdurante rilevanza delle metriche, ritira quelle che non si guadagnano
  più il posto e tiene traccia delle modifiche alle definizioni con una storia
  visibile.
- **Livello 5, Orchestrazione (Orchestrate):** La governance è proporzionata alla
  conseguenza, automatizzata dove possibile (un catalogo delle metriche che
  segnala quelle non documentate o senza responsabile), e l'organizzazione sa
  dimostrare, a richiesta, la provenienza completa di qualsiasi numero
  pubblicato.

## Spunti di discussione

1. Un neoassunto potrebbe scoprire, dalla sola documentazione, che cosa significano davvero le nostre tre metriche più importanti?
2. Quali delle nostre metriche sono oggi calcolate in modo diverso da due sistemi diversi?
3. Quando abbiamo ritirato l'ultima metrica, e come abbiamo deciso di farlo?
4. Il nostro processo di governance è più pesante dove la conseguenza è maggiore, o è uniforme?
5. Chi, per nome, è il responsabile della metrica pubblica più rilevante della nostra organizzazione?

## Punti chiave

- Ogni metrica ha bisogno di **un responsabile con nome**, non di un team, e di
  **una sola fonte di verità**, non di un calcolo parallelo.
- Scrivi una **carta delle metriche** breve e viva per ogni insieme di metriche
  che attraversa il confine di un team, indicando scopo, non-obiettivi,
  responsabilità e cadenza di revisione.
- Il **ritiro** è una disciplina di governance importante quanto l'adozione;
  sfoltisci deliberatamente.
- Proporziona il rigore della governance alla **conseguenza**, non al numero di
  metriche: processo più pesante per le metriche pubbliche, valutative o legate
  alla retribuzione.
- La definizione di una metrica può derivare in silenzio; tieni traccia delle
  modifiche con una storia visibile, così che la fiducia in un numero
  sopravviva al ricambio del personale.

## Riferimenti e letture di approfondimento

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, di John Ladley (strutture di governance applicabili ai
  programmi di metriche).
- *Measuring and Managing Performance in Organizations*, di Robert D. Austin
  (disfunzioni organizzative attorno alla responsabilità e all'uso delle
  metriche).
- *Key Performance Indicators*, di David Parmenter (responsabilità delle
  metriche, disciplina delle definizioni e cadenza di revisione).
- Linee guida del U.S. Government Accountability Office (GAO) sulla misurazione
  delle prestazioni e sul GPRA Modernization Act: governance e controllo delle
  modifiche delle metriche nel settore pubblico.
