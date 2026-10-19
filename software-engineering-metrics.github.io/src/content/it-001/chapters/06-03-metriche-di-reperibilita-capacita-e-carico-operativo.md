# 6.3 Metriche di reperibilità, capacità e carico operativo

## Panoramica e motivazione

L'affidabilità introdotta dall'argomento 6.1 e la risposta agli incidenti misurata
dall'argomento 6.2 dipendono entrambe da un sistema umano che questo argomento misura
direttamente: la rotazione di reperibilità (on-call), gli ingegneri che portano un
cercapersone e rispondono quando qualcosa si rompe, e la capacità dell'infrastruttura
che determina quanto carico un sistema possa assorbire prima ancora di cominciare a
rompersi. Un'organizzazione può avere SLO eccellenti, error budget ben progettati e
una cultura degli incidenti davvero senza colpa, e consumare comunque i propri
ingegneri di reperibilità con un carico insostenibile che alla fine degrada proprio
l'affidabilità che quelle altre pratiche erano state costruite per proteggere.

Questo argomento tratta il carico operativo come una famiglia di metriche a sé,
collegata direttamente alla misurazione di benessere e di
[burnout](https://en.wikipedia.org/wiki/Occupational_burnout) dell'argomento 3.2 ma specifica per lo
stress particolare e acuto di portare un cercapersone: sonno interrotto, il costo
psicologico dell'essere reperibili anche quando non accade nulla, e il peso cumulativo di
un carico di incidenti frequente e mal distribuito. Un'organizzazione che misura con
meticolosità l'affidabilità dei propri sistemi senza mai misurare la sostenibilità
delle persone che quei sistemi mantengono affidabili sta misurando solo metà del
quadro, e la metà non misurata tende a emergere alla fine come turnover, qualità
degradata della risposta agli incidenti da parte di soccorritori esausti, o entrambi.

Per i team grandi, le metriche di reperibilità e capacità rivelano problemi di
bilanciamento del carico che rispecchiano le preoccupazioni di concentrazione della
conoscenza dell'argomento 3.5: un piccolo numero di ingegneri che assorbe una quota
sproporzionata di chiamate, spesso le persone più esperte proprio perché risolvono gli
incidenti più in fretta, il che crea contemporaneamente un rischio di burnout e un
rischio di bus factor. Le organizzazioni enterprise e governative che gestiscono servizi
critici attivi giorno e notte dipendono dalle metriche di questo argomento per dotare di
personale le rotazioni di reperibilità in modo sostenibile anziché scoprirne il vero
costo solo attraverso il turnover.

## Principi chiave

- **Il carico di reperibilità è una risorsa misurabile e gestibile**, non un onere
  inevitabile e illimitato che gli ingegneri devono semplicemente assorbire.
- **Frequenza e distribuzione delle chiamate sono entrambe importanti.** Una media a
  livello di team può nascondere una grave concentrazione su un piccolo numero di
  individui.
- **L'interruzione durante la reperibilità ha un costo anche quando non si verifica
  alcun incidente**, il peso psicologico dell'essere raggiungibili e responsabili.
- **Pianificazione della capacità e carico di reperibilità sono collegati.** Un'infrastruttura
  sottodimensionata genera più chiamate, aumentando direttamente l'onere di
  reperibilità.
- **Un sistema di reperibilità sostenibile protegge l'affidabilità stessa**, dato che
  soccorritori esausti prendono decisioni più lente e più soggette a errori durante gli
  incidenti.

## Raccomandazioni

### Traccia frequenza e distribuzione delle chiamate, non solo una media a livello di team

Misura quante chiamate riceve ogni singolo ingegnere di reperibilità, non solo una
media di tutto il team che può nascondere una grave concentrazione. In modo simile al
bus factor dell'argomento 3.5 e alle preoccupazioni sul carico dei revisori
dell'argomento 2.9, il carico di reperibilità si concentra spesso su un piccolo numero
di persone esperte che possono risolvere gli incidenti più in fretta, proprio lo
schema che crea sia un rischio di burnout sia un pericoloso punto singolo di guasto.
Riequilibra le rotazioni deliberatamente quando compare questa concentrazione.

### Misura il costo psicologico dell'essere reperibili, non solo il tempo di incidente attivo

Essere reperibili ha un costo reale anche durante un turno senza nessuna chiamata
effettiva: qualità del sonno ridotta per l'attesa di una possibile interruzione,
attività personali limitate e lo stress sottile della responsabilità continua. Dove
fattibile, cattura questo attraverso i dati di sondaggio (argomento 3.7) specificamente
sull'esperienza di reperibilità, separati dalla soddisfazione generale, dato che un
team può riportare una soddisfazione generale ragionevole mentre la reperibilità in
particolare sta erodendo in silenzio il benessere.

### Fissa limiti espliciti alla frequenza sostenibile di reperibilità

Stabilisci un massimo ragionevole per la frequenza con cui un individuo dovrebbe essere
reperibile, comunemente non più di una settimana su quattro o cinque, e traccia la
frequenza effettiva di rotazione rispetto a quel limite. Una rotazione che nominalmente
elenca abbastanza persone ma di fatto si affida a due o tre di esse per lacune di
competenze o vincoli di disponibilità non rispetta in realtà il limite, a prescindere
da ciò che mostra il calendario nominale.

### Collega direttamente la pianificazione della capacità al carico di reperibilità

Un'infrastruttura sottodimensionata, margine insufficiente per i picchi di traffico,
configurazione di auto-scaling inadeguata, genera per definizione più chiamate,
aumentando direttamente l'onere di reperibilità. Traccia l'utilizzo della capacità
dell'infrastruttura e correlalo con la frequenza delle chiamate: un servizio che
funziona regolarmente vicino al proprio tetto di capacità e genera una quota
sproporzionata di chiamate è un argomento diretto e quantificabile a favore
dell'investimento in capacità, non una vaga lamentela operativa.

### Usa le metriche di reperibilità per informare le decisioni su personale e assunzioni, non la valutazione individuale

Aggrega i dati sul carico di reperibilità a livello di team per sostenere la richiesta
di personale aggiuntivo, di strumenti migliori per ridurre le chiamate falsi positivi o
di un investimento architetturale per ridurre la frequenza reale degli incidenti.
Seguendo l'indicazione costante di questo libro per qualsiasi metrica che tocchi
direttamente gli individui (argomento 1.2, argomento 3.4), non usare mai le metriche
individuali di risposta alle chiamate per valutare le prestazioni di uno specifico
ingegnere; l'obiettivo è un organico e un progetto di sistema sostenibili, non un
conteggio dei punti individuale.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessun tracciamento formale del carico di reperibilità | Nessun overhead | Rischio di burnout e concentrazione del bus factor restano invisibili finché non emergono come turnover |
| Solo frequenza media delle chiamate del team | Semplice da calcolare | Nasconde una grave concentrazione individuale |
| Tracciamento della distribuzione delle chiamate a livello individuale | Rivela direttamente concentrazione e rischio di burnout | Richiede cura nell'usarlo solo in aggregato, mai per la valutazione individuale |
| Investimento in capacità per ridurre alla fonte il volume di chiamate | Affronta la causa radice, riduce l'onere in modo sostenibile | Richiede un investimento infrastrutturale iniziale |

La tensione centrale è **accettazione contro investimento**. È facile trattare un alto
volume di chiamate come il semplice costo inevitabile di far funzionare un servizio
affidabile e chiedere agli ingegneri di reperibilità di assorbirlo, ma quell'accettazione
costa infine all'organizzazione in turnover e in qualità degradata della risposta agli
incidenti da parte di soccorritori esausti. Si risolve la tensione trattando un carico
di reperibilità elevato come un segnale che richiede un investimento genuino,
miglioramenti di capacità, allerte migliori per ridurre i falsi positivi, organico
ampliato della rotazione, anziché un onere inevitabile da sopportare indefinitamente.

## Domande da discutere con il vostro team

1. **Qual è la nostra effettiva distribuzione delle chiamate tra gli individui della
   rotazione, non solo la media del team?** Prendete i dati reali a livello individuale;
   una media di team dall'aspetto ragionevole può nascondere una o due persone che
   assorbono una quota drasticamente sproporzionata.

2. **Abbiamo mai misurato il costo psicologico dell'essere reperibili separatamente
   dalla soddisfazione generale?** In caso contrario, discutete se una breve domanda
   di sondaggio dedicata specificamente all'esperienza di reperibilità farebbe emergere
   qualcosa che il vostro sondaggio generale di soddisfazione (argomento 3.2) sta
   perdendo.

3. **Il calendario nominale della nostra rotazione di reperibilità riflette la realtà,
   o si affida di fatto solo a due o tre persone per lacune di competenze o di
   disponibilità?** Siate onesti su questo; un calendario che elenca otto nomi ma
   dipende di fatto da due non rispetta alcun limite ragionevole di sostenibilità.

4. **Quale dei nostri servizi genera una quota sproporzionata di chiamate rispetto al
   proprio margine di capacità, e un investimento infrastrutturale aggiuntivo
   ridurrebbe direttamente quel carico?** Confrontate esplicitamente la frequenza delle
   chiamate con i dati di utilizzo della capacità per costruire questo caso con prove
   reali.

5. **I dati sul carico di reperibilità sono mai stati usati, anche informalmente, per
   valutare le prestazioni di un individuo anziché per informare decisioni su
   personale e architettura?** Rischia la stessa trappola della valutazione
   individuale da cui l'argomento 3.4 mette in guardia per i dati di attività,
   applicata qui al carico operativo.

6. **Quanto ci costerebbe perdere per burnout o turnover il nostro ingegnere di
   reperibilità più chiamato, e come si confronta con il costo di riequilibrare la
   rotazione o di investire ora in correzioni alla radice?** Questo confronto concreto
   sostiene spesso meglio l'investimento proattivo di un astratto appello alla
   sostenibilità.

## Prospettiva settoriale

**Startup.** La reperibilità è spesso informale e concentrata sui fondatori o su un
piccolo team di ingegneria iniziale per necessità. Il rischio è normalizzare presto un
ritmo insostenibile, prima che si sia mai considerata una progettazione deliberata
della rotazione, il che diventa molto più difficile da disfare una volta diventato
l'aspettativa predefinita per i nuovi assunti che arrivano dopo.

**Piccola impresa.** Un calendario di rotazione semplice ed esplicito con un chiaro
limite di sostenibilità (non più di una settimana su quattro, per esempio) è alla
portata anche senza strumenti dedicati di reperibilità. La disciplina principale è
semplicemente rendere visibili ed espliciti la rotazione e la sua equità anziché
lasciarla come un accordo informale e non dichiarato.

**Enterprise.** La concentrazione nella distribuzione delle chiamate e i rischi
associati di burnout e di bus factor scalano male qui, dato che più servizi e più
complessità significano in genere più chiamate potenziali, e la concentrazione della
competenza aggrava il problema. Investite nel tracciamento del carico a livello
individuale (usato solo in aggregato per le decisioni di personale), in
un investimento di capacità per ridurre alla fonte il volume di chiamate e in un
riequilibrio deliberato delle rotazioni.

**Settore pubblico.** L'infrastruttura pubblica critica richiede spesso una copertura di
reperibilità attiva giorno e notte con conseguenze reali se la risposta è ritardata, il
che aumenta sia l'importanza di un organico sostenibile sia la difficoltà di ottenerlo
con i tipici vincoli di organico del settore pubblico. Usate i dati sul carico di
reperibilità in modo esplicito e diretto per giustificare le richieste di personale,
inquadrando una capacità di reperibilità sostenibile come un requisito di affidabilità
diretto e quantificabile anziché come una preferenza discrezionale di organico.

## Esempi

**Enterprise.** Un'azienda di infrastrutture cloud scoprì, estraendo per la prima volta
i dati sulle chiamate a livello individuale, che due ingegneri senior su una rotazione
di reperibilità di quindici persone avevano gestito personalmente oltre il 60% di tutte
le chiamate dell'anno precedente, sia perché erano i più rapidi a risolvere incidenti
complessi sia perché gli altri membri della rotazione avevano imparato a rimettersi in
modo informale a loro anziché tentare personalmente la risoluzione. Entrambi gli
ingegneri riportarono sintomi significativi di burnout nel sondaggio sul benessere
dell'azienda (argomento 3.2) senza che la dirigenza avesse in precedenza collegato quel
segnale di sondaggio agli specifici dati quantificabili sulla concentrazione della
reperibilità. Uno sforzo deliberato di riequilibrio, inclusa una formazione mirata per
costruire fiducia nella risoluzione tra l'intera rotazione e un tetto formale al numero
di chiamate consecutive assegnabili a un individuo, ridusse la quota dei due ingegneri
sotto il 25% in sei mesi, con un corrispondente miglioramento del loro benessere
dichiarato.

**Settore pubblico.** Il team di ingegneria di reperibilità di un'azienda idrica
regionale operava con una rotazione nominale di quattro persone per il monitoraggio
dell'infrastruttura critica, ma i dati sull'utilizzo della capacità rivelarono che una
specifica stazione di pompaggio invecchiata, che funzionava costantemente vicino al
proprio tetto operativo, generava quasi metà di tutte le chiamate dell'intera
rotazione. Un potenziamento di capacità di quella singola stazione di pompaggio,
finanziato usando direttamente la correlazione tra frequenza delle chiamate e capacità
come prova concreta a sostegno della richiesta di budget, ridusse il volume totale di
chiamate dell'intera organizzazione di circa il 40% nell'anno successivo, dimostrando
che l'onere di reperibilità era stato in buona parte un problema di capacità sotto
mentite spoglie anziché un puro problema di organico o di processo.

## Business case: motivazioni, ROI e TCO

Il ritorno del gestire deliberatamente il carico di reperibilità e di capacità è il
turnover evitato e il degrado dell'affidabilità evitato a causa di soccorritori
esausti che prendono decisioni più lente e più soggette a errori. L'esempio
dell'azienda di infrastrutture cloud qui sopra mostra direttamente il rischio che si
compone: la concentrazione non gestita creava una simultanea esposizione a burnout e a
bus factor che un semplice sforzo di riequilibrio basato sui dati ha risolto a un costo
modesto rispetto al rischio di perdere per turnover uno dei due ingegneri senior.

Il costo totale di proprietà comprende la strumentazione per tracciare la distribuzione
delle chiamate a livello individuale (usata con cura, solo in aggregato) e, dove
indicato, un genuino investimento in capacità per ridurre alla fonte il volume di
chiamate. L'esempio dell'azienda idrica mostra che questo investimento può ripagarsi
direttamente e in modo misurabile, dato che una singola correzione di capacità ben
mirata ha ridotto sostanzialmente l'onere operativo dell'intera organizzazione.

## Antipattern e insidie

- **Tracciare solo un conteggio medio di chiamate a livello di team:** nasconde una
  grave concentrazione individuale che guida sia il burnout sia il rischio di bus
  factor.
- **Trattare un calendario nominale di rotazione come se riflettesse la realtà:** un
  calendario che di fatto dipende da due o tre persone non è sostenibile a prescindere
  da quanti nomi siano elencati.
- **Usare i dati individuali di risposta alle chiamate per valutare le prestazioni:**
  ripete la trappola della valutazione individuale da cui questo libro mette in guardia
  ovunque, applicata qui al carico operativo.
- **Accettare un alto volume di chiamate come costo inevitabile dell'affidabilità
  anziché indagare la capacità come causa radice:** perde una correzione diretta e
  spesso disponibile.
- **Non collegare mai i dati sul carico di reperibilità ai dati dei sondaggi sul
  benessere:** perde l'occasione di individuare e affrontare un rischio composto di
  burnout prima che emerga come turnover.
- **Ignorare il costo psicologico dell'essere reperibili con zero chiamate effettive:**
  sottostima il vero onere di una rotazione.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Il carico di reperibilità non è affatto tracciato,
  oppure è tracciato solo come media di tutto il team che nasconde la concentrazione
  individuale.
- **Livello 2, Sviluppo (Develop):** Esistono alcuni dati sulle chiamate a livello
  individuale, ma non sono collegati ai dati dei sondaggi sul benessere né alle
  decisioni di investimento in capacità.
- **Livello 3, Standardizzazione (Standardize):** La distribuzione delle chiamate a
  livello individuale e la correlazione con l'utilizzo della capacità sono tracciate
  in modo coerente, con limiti espliciti di sostenibilità sulla frequenza di rotazione.
- **Livello 4, Gestione (Manage):** I dati sul carico di reperibilità sono usati
  attivamente per guidare l'investimento in capacità e il riequilibrio delle rotazioni,
  collegati esplicitamente ai segnali dei sondaggi sul benessere.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione sa indicare
  miglioramenti specifici e misurabili sia del carico operativo sia del benessere
  derivanti da un investimento mirato in capacità e da una riprogettazione delle
  rotazioni, e un organico di reperibilità sostenibile è un input di routine e ben
  giustificato per la pianificazione di organico e infrastrutture.

## Spunti di discussione

1. Che aspetto ha oggi la nostra effettiva distribuzione delle chiamate a livello individuale?
2. Il calendario nominale della nostra rotazione riflette chi risolve davvero la maggior parte degli incidenti?
3. Quale singolo investimento in capacità ridurrebbe di più il nostro attuale volume di chiamate?
4. Abbiamo mai collegato i dati sul carico di reperibilità ai segnali dei sondaggi sul benessere?
5. Quanto ci costerebbe perdere per burnout il nostro ingegnere più chiamato?

## Punti chiave

- Il carico di reperibilità è una **risorsa misurabile e gestibile**; traccia la
  distribuzione a livello individuale, non solo una media di tutto il team che può
  nascondere una grave concentrazione.
- Essere reperibili ha un **costo psicologico anche con zero chiamate effettive**;
  misuralo separatamente dalla soddisfazione generale.
- **Pianificazione della capacità e carico di reperibilità sono direttamente
  collegati**; un'infrastruttura sottodimensionata genera più chiamate e più onere.
- Usa i dati di reperibilità per **decisioni su personale e capacità**, mai per la
  valutazione delle prestazioni individuali.
- Un sistema di reperibilità sostenibile **protegge l'affidabilità stessa**, dato che
  soccorritori esausti prendono decisioni più lente e più soggette a errori.

## Riferimenti e letture di approfondimento

- *Site Reliability Engineering: How Google Runs Production Systems*, a cura di Betsy
  Beyer, Chris Jones, Jennifer Petoff e Niall Richard Murphy (pratica di reperibilità e
  carico operativo sostenibile).
- *The Site Reliability Workbook*, a cura di Betsy Beyer, Niall Richard Murphy, David
  K. Rensin, Kent Kawahara e Stephen Thorne (indicazioni pratiche sulla progettazione
  delle rotazioni di reperibilità).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve Wellbeing*,
  di Christina Maslach e Michael P. Leiter (cause organizzative e interventi per il
  burnout, applicabili allo stress da reperibilità).
- *Seeking SRE: Conversations About Running Production Systems at Scale*, a cura di
  David N. Blank-Edelman (prospettive di professionisti su una pratica operativa
  sostenibile).
