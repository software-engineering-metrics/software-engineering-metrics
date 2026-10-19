# 4.1 Metriche di complessità del codice

## Panoramica e motivazione

La **[complessità ciclomatica](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**,
introdotta da Thomas J. McCabe nel 1976, conta il numero di percorsi indipendenti
nel flusso di controllo di un pezzo di codice: ogni `if`, ciclo e diramazione
aumenta il conteggio. Resta la metrica di complessità del codice più usata a quasi
cinquant'anni di distanza, accanto a parenti come la complessità cognitiva (che
pesa più della semplice conta lineare originale di McCabe il flusso di controllo
annidato e difficile da seguire) e la profondità di annidamento. Queste metriche
condividono un'intuizione genuina e convalidata: il codice con più percorsi
indipendenti è più difficile da testare per intero, più difficile da comprendere e,
in decenni di ricerca empirica, misurabilmente più probabile che contenga difetti.

Questo argomento tratta quell'intuizione con vero rispetto trattandone allo stesso
tempo i limiti con pari serietà. Le metriche di complessità misurano una proprietà
specifica del codice, e una base di codice può essere semplice per ogni metrica di
complessità pur essendo mal progettata, mal nominata o concettualmente incoerente in
modi che nessun algoritmo di conteggio dei rami può rilevare. Viceversa, alcuni
problemi irriducibilmente complessi richiedono davvero codice complesso per essere
risolti correttamente, e un team sotto pressione per minimizzare un punteggio di
complessità può produrre codice che ottiene un buon punteggio pur essendo più
difficile da capire, diffondendo la complessità essenziale su più file e strati di
indirezione anziché ridurla.

Per i team grandi, le metriche di complessità si guadagnano il posto come strumento
di triage: un modo per trovare, tra migliaia di file, il piccolo sottoinsieme che ha
più probabilità di ripagare uno sguardo più attento, non come verdetto autonomo sulla
qualità del codice. Le organizzazioni enterprise e governative che mantengono basi di
codice troppo grandi perché una singola persona le abbia lette per intero dipendono
da questa funzione di triage per dirigere lo scarso sforzo di refactoring e di
revisione dove farà più bene.

## Principi chiave

- **Le metriche di complessità prevedono la difficoltà di test e di difetti; non
  misurano direttamente la qualità.** Trattale come un input, non come un verdetto.
- **Un punteggio di complessità è esposto alla manipolazione tramite offuscamento,
  non solo tramite semplificazione genuina.** Distribuire la complessità su più file
  può abbassare il punteggio senza rendere davvero il codice più facile da capire.
- **Una parte della complessità è essenziale, non accidentale.** Un problema
  genuinamente difficile può richiedere codice genuinamente complesso; l'obiettivo è
  minimizzare la complessità accidentale, non eliminare ogni complessità in modo
  indiscriminato.
- **Usa le metriche di complessità per il triage, non come scheda di valutazione
  individuale o di team.** Indicano dove guardare, non chi incolpare.
- **Il trend e i valori anomali contano più di qualsiasi soglia assoluta.** Un trend
  in crescita o un valore anomalo estremo è più azionabile di una singola media a
  livello di team.

## Raccomandazioni

### Usa le metriche di complessità per fare il triage dello sforzo di revisione e di refactoring

Esegui l'analisi della complessità su tutta la base di codice e usa i risultati per
dare priorità a dove una revisione umana più attenta o un investimento di refactoring
renderebbe di più: funzioni o file con punteggi molto superiori all'intervallo tipico
della stessa base di codice sono i posti di maggior valore da guardare per primi.
Questo uso di triage, trovare dove guardare, è l'applicazione più difendibile e
preziosa delle metriche di complessità, molto più che usarle come barriera assoluta
di superamento o fallimento.

### Fissa soglie relative alla tua base di codice, non un numero universale

Le soglie assolute di complessità prese acriticamente dalla convenzione del settore
(un punteggio di complessità di dieci è una regola empirica comunemente citata)
possono essere troppo indulgenti o troppo severe a seconda del dominio: un parser o
un motore di regole può avere legittimamente una complessità di base più alta di un
tipico servizio CRUD. Calibra le tue soglie sulla distribuzione effettiva della tua
base di codice, e tratta il superamento di una soglia come uno stimolo a guardare più
da vicino, non come un fallimento automatico della build, a meno che il tuo team
abbia scelto deliberatamente quella politica più severa con piena consapevolezza dei
suoi compromessi.

### Fai attenzione alla manipolazione tramite scomposizione senza semplificazione genuina

Il modo più comune in cui i punteggi di complessità vengono manipolati è lo schema di
sostituzione dell'argomento 1.2 applicato a questa metrica specifica: spezzare una
funzione genuinamente complessa in diverse funzioni più piccole che individualmente
ottengono un buon punteggio, mentre il sistema complessivo resta altrettanto difficile
da capire, o talvolta diventa più difficile, perché la logica è ora sparpagliata su
più file con più indirezione tra loro. Abbina le metriche di complessità a una
revisione qualitativa del fatto che la scomposizione abbia davvero chiarito il
codice, o che abbia solo spostato la complessità dove la metrica non poteva più
vederla.

### Distingui la complessità essenziale da quella accidentale prima di reagire

Prima di trattare un punteggio di complessità alto come un problema da correggere,
chiediti se il problema sottostante richieda davvero così tanti percorsi
indipendenti, la logica di calcolo del codice fiscale ha legittimamente molti rami,
per esempio, o se la complessità derivi da cause evitabili: condizionali profondamente
annidati che potrebbero essere appiattiti, logica duplicata che potrebbe essere
consolidata, o confini di responsabilità poco chiari che potrebbero essere ridisegnati.
Solo la seconda categoria è un vero problema di qualità che questa metrica dovrebbe
spingerti a correggere.

### Traccia il trend e i valori anomali, non solo una media istantanea

La media di complessità di tutta la base di codice che si sposta di poco è raramente
azionabile da sola; la complessità di un file specifico che sale bruscamente in
diversi cambiamenti, o un piccolo numero di valori anomali estremi in una base di
codice per il resto ben comportata, sono segnali molto più utili. Traccia sia il
trend nel tempo sia la coda dei valori anomali, e usali per innescare un'indagine
specifica e mirata anziché un'ampia e poco focalizzata iniziativa di riduzione della
complessità.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Soglia universale assoluta | Semplice, coerente, facile da automatizzare | Ignora legittime differenze di dominio; manipolabile tramite scomposizione |
| Soglia relativa alla base di codice | Meglio calibrata sul contesto effettivo | Richiede più impostazione e una ricalibrazione periodica |
| Complessità come barriera automatica nella build | Impone coerenza senza overhead di revisione umana | Può bloccare codice legittimamente complesso ma ben progettato, o premiare una scomposizione offuscata |
| Complessità come segnale di triage per la revisione umana | Coglie veri problemi di qualità che la sola scomposizione perderebbe | Richiede più tempo di revisione umana di una barriera completamente automatica |

La tensione centrale è **automazione contro giudizio**. Una barriera di complessità
completamente automatica è economica da applicare e coerente, ma può sia bloccare
codice legittimamente complesso e ben progettato sia premiare una scomposizione
superficiale che manipola il punteggio senza semplificare davvero nulla. Si risolve
la tensione usando l'analisi automatica della complessità per far emergere candidati
alla revisione, e riservando il giudizio vero e proprio, questa complessità è
essenziale o accidentale, questo refactoring ha davvero chiarito o ha solo spostato
la complessità, a un revisore umano anziché alla sola barriera automatica.

## Domande da discutere con il vostro team

1. **Le nostre soglie di complessità sono calibrate sulla distribuzione effettiva
   della nostra base di codice, o prese acriticamente da una convenzione generica del
   settore?** Prendete la distribuzione reale di complessità della vostra base di
   codice e verificate se le soglie attuali abbiano senso rispetto ad essa, anziché
   presumere che un numero comunemente citato valga universalmente per il vostro
   dominio.

2. **Abbiamo mai visto una funzione spezzata in diverse più piccole senza che il
   codice risultante diventasse davvero più facile da capire?** È il segno più
   chiaro dello schema di manipolazione per scomposizione da cui questo argomento
   mette in guardia. Guardate un refactoring recente motivato principalmente da un
   punteggio di complessità e valutate con onestà se abbia migliorato la reale
   comprensibilità.

3. **Dove nella nostra base di codice la complessità è essenziale al problema, e
   dove è accidentale e correggibile?** Ripercorrete i vostri valori anomali di
   complessità più alti e ordinateli esplicitamente in queste due categorie, dato che
   solo la seconda rappresenta un vero problema di qualità su cui si può agire.

4. **Usiamo le metriche di complessità per fare il triage dello sforzo di revisione,
   o come barriera automatica rigida senza alcun giudizio umano?** Discutete se il
   vostro attuale approccio di applicazione lasci spazio alla distinzione
   essenziale-accidentale che questo argomento raccomanda, o se tratti ogni
   superamento in modo identico a prescindere dal contesto.

5. **Un punteggio di complessità è mai stato usato, anche informalmente, per
   giudicare la qualità del lavoro di un singolo ingegnere?** Rischia la stessa
   trappola della valutazione individuale da cui l'argomento 3.4 mette in guardia per
   le metriche di attività, applicata qui alle metriche di codice, e invita alla
   stessa risposta di manipolazione.

6. **Che aspetto ha il nostro trend di complessità nell'ultimo anno per i nostri file
   più critici e modificati più di frequente?** Combinatelo con l'analisi di churn e
   hotspot dell'argomento 4.3, dato che un file sia molto complesso sia modificato di
   frequente merita attenzione ben prima di uno complesso ma raramente toccato.

## Prospettiva settoriale

**Startup.** Le metriche di complessità sono di solito meno urgenti a questa scala; la
base di codice è abbastanza piccola da far sì che la familiarità informale sostituisca
spesso la misurazione formale. L'abitudine da adottare presto è semplicemente
eseguire ogni tanto una scansione di complessità per cogliere un file specifico che
diventa in silenzio ingestibile prima che il team sia cresciuto troppo per
accorgersene in modo informale.

**Piccola impresa.** La maggior parte dei moderni strumenti di analisi statica
riporta le metriche di complessità nell'ambito di una più ampia configurazione di
linting gratuita o a basso costo; usate l'output come segnale periodico di triage
anziché investire in strumenti dedicati. Concentrate l'attenzione prima sui file
modificati più di frequente.

**Enterprise.** Le metriche di complessità a scala sono più preziose combinate con i
dati di churn (argomento 4.3) per dare priorità all'investimento di refactoring in
una base di codice troppo grande perché una singola persona la esamini
manualmente. Calibrate le soglie per servizio o dominio anziché applicare un solo
numero per tutta l'organizzazione, dato che la complessità legittima varia
sensibilmente tra tipi diversi di sistemi.

**Settore pubblico.** I sistemi governativi longevi accumulano spesso complessità
gradualmente in anni o decenni di modifiche incrementali ai requisiti, e un audit di
complessità può essere uno strumento persuasivo e concreto per giustificare
l'investimento in modernizzazione o refactoring presso stakeholder che altrimenti
potrebbero vedere il sistema semplicemente come «funzionante» e quindi non meritevole
di investimento.

## Esempi

**Enterprise.** Un'azienda di elaborazione dei pagamenti eseguì per la prima volta un
audit di complessità su tutta la base di codice e trovò una singola funzione di
validazione delle transazioni con un punteggio di complessità ciclomatica più di dieci
volte superiore alla mediana della base di codice. L'indagine scoprì che la
complessità era quasi interamente accidentale: anni di gestione di casi speciali
aggiunti in modo incrementale per specifici fornitori di pagamento si erano
accumulati in condizionali profondamente annidati che potevano essere ristrutturati in
un più pulito schema strategy che separasse la logica specifica di ciascun fornitore.
Il refactoring, messo in priorità direttamente perché l'audit di complessità lo aveva
individuato come obiettivo singolarmente di maggior valore della base di codice,
ridusse il punteggio di complessità della funzione di oltre l'80% e, cosa più
importante, ridusse in modo misurabile il tasso di difetti in quel percorso di codice
nei due trimestri successivi.

**Settore pubblico.** Il motore di calcolo delle prestazioni, vecchio di decenni, di
un'autorità fiscale ottenne punteggi estremamente alti nelle metriche di complessità
in quasi ogni funzione, spingendo a un'assunzione iniziale secondo cui l'intero
sistema avesse bisogno di una riscrittura da zero. Una revisione più attenta,
funzione per funzione, che distingueva complessità essenziale e accidentale, scoprì
che la maggior parte della complessità rifletteva davvero le norme di legge
sottostanti, che avevano effettivamente così tanti rami e casi speciali legittimi
imposti dalla legge, mentre un sottoinsieme più piccolo derivava da duplicazioni
evitabili tra percorsi di calcolo simili. Il team mirò al refactoring solo del
sottoinsieme di complessità accidentale, evitando una riscrittura completa costosa e
rischiosa e migliorando comunque in modo significativo le aree più davvero
problematiche del sistema.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'usare bene le metriche di complessità è un investimento di
refactoring mirato e di alto valore: l'esempio dell'azienda di pagamenti qui sopra
mostra una singola correzione ben mirata, individuata attraverso l'analisi della
complessità, che ha ridotto in modo misurabile i difetti esattamente nel percorso di
codice a più alto rischio, a una frazione del costo che avrebbe richiesto
un'iniziativa di refactoring ampia e non mirata.

Il costo totale di proprietà è basso: la maggior parte delle moderne toolchain di
sviluppo calcola le metriche di complessità automaticamente come parte dell'analisi
statica (argomento 4.4), e il vero investimento è il tempo di giudizio umano per
interpretare correttamente i risultati, distinguere complessità essenziale e
accidentale e individuare la manipolazione per scomposizione, più che qualsiasi
significativo costo di nuovi strumenti.

## Antipattern e insidie

- **Trattare un punteggio di complessità come un verdetto diretto sulla qualità:**
  misura una proprietà specifica, non la qualità complessiva del codice.
- **Spezzare una funzione per manipolare il punteggio senza semplificazione
  genuina:** lo schema di manipolazione per scomposizione che questo argomento nomina
  specificamente.
- **Applicare una soglia universale senza calibrarla sulla propria base di codice:**
  produce un'applicazione troppo indulgente o troppo severa a seconda del dominio.
- **Usare le metriche di complessità per valutare individualmente gli ingegneri:**
  invita alla manipolazione e applica male una metrica pensata per il triage, non per
  il giudizio.
- **Trattare ogni complessità come ugualmente correggibile:** la complessità
  essenziale di un problema davvero difficile non è un difetto da eliminare.
- **Ignorare trend e valori anomali a favore di una media piatta di tutta la base di
  codice:** perde il segnale più azionabile che questa famiglia di metriche offre.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** La complessità non è misurata, oppure è misurata
  con una soglia universale generica non esaminata applicata acriticamente.
- **Livello 2, Sviluppo (Develop):** Le metriche di complessità sono raccolte ma
  raramente usate per agire, e non si distingue tra complessità essenziale e
  accidentale.
- **Livello 3, Standardizzazione (Standardize):** Le soglie sono calibrate sulla
  distribuzione della base di codice stessa, e le metriche di complessità guidano in
  modo coerente il triage di revisione e refactoring in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Trend e valori anomali di complessità sono
  monitorati attivamente e combinati con i dati di churn (argomento 4.3) per dare
  priorità all'investimento di refactoring; la manipolazione per scomposizione è
  osservata attivamente.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione sa indicare
  miglioramenti specifici e misurabili del tasso di difetti ricondotti direttamente
  a un investimento di refactoring informato dalla complessità, e i dati di
  complessità sono un input di routine e affidabile per le decisioni di investimento
  in ingegneria.

## Spunti di discussione

1. Qual è la nostra singola funzione o file più complesso, e la sua complessità è essenziale o accidentale?
2. Abbiamo mai manipolato un punteggio di complessità tramite scomposizione senza una reale semplificazione?
3. Le nostre soglie sono calibrate sulla nostra base di codice, o prese acriticamente?
4. Dove l'alta complessità si sovrappone oggi all'alto churn nella nostra base di codice?
5. I dati di complessità hanno mai informato una decisione di investimento in refactoring, o restano inutilizzati?

## Punti chiave

- Le metriche di complessità come la **complessità ciclomatica** prevedono la
  difficoltà di test e di difetti; non misurano direttamente la qualità complessiva
  del codice.
- Distingui la **complessità essenziale** (da un problema davvero difficile) dalla
  **complessità accidentale** (evitabile con un progetto migliore) prima di reagire a
  un punteggio alto.
- Fai attenzione alla **manipolazione per scomposizione**: spezzare il codice per
  abbassare un punteggio senza semplificare davvero nulla.
- Usa le metriche di complessità per il **triage**, dirigendo lo sforzo di revisione
  umana e di refactoring, non come scheda di valutazione individuale né come barriera
  automatica rigida.
- Calibra le soglie sulla **distribuzione della tua base di codice**, e traccia
  **trend e valori anomali**, non solo una media piatta.

## Riferimenti e letture di approfondimento

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software
  Engineering* (1976): l'articolo originale sulla complessità ciclomatica.
- *Code Complete*, di Steve McConnell (indicazioni pratiche per gestire la
  complessità nella costruzione del software).
- *Working Effectively with Legacy Code*, di Michael Feathers (tecniche per ridurre
  in sicurezza la complessità del codice esistente e difficile da modificare).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring
  Understandability" (SonarSource, 2018): la metrica di complessità cognitiva e la
  sua distinzione dalla complessità ciclomatica.
