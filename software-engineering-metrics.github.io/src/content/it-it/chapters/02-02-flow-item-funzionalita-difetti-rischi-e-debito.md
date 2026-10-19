# 2.2 Flow item: funzionalità, difetti, rischi e debito

## Panoramica e motivazione

Un **flow item** è l'unità di lavoro del Flow Framework, e ogni flow item
appartiene a esattamente uno di quattro tipi: **funzionalità** (features), nuovo
valore di business o nuova capacità consegnata a un cliente; **difetti**
(defects), correzioni di qualità per bug trovati dagli utenti o dai test;
**rischi** (risks), lavoro di sicurezza, conformità, privacy e governance che
protegge l'azienda; e **debito** (debt), il [debito tecnico](https://en.wikipedia.org/wiki/Technical_debt),
i miglioramenti architetturali e il lavoro sull'infrastruttura che abilitano la
velocità futura. L'argomento 2.1 ha introdotto il framework a cui queste quattro
categorie appartengono; questo argomento approfondisce la tassonomia stessa,
perché le categorie portano valore solo se un team vi classifica il proprio lavoro
con onestà e coerenza.

La proprietà che definisce i flow item è che l'allocazione tra i quattro tipi è
un **gioco a somma zero**: in un dato periodo esiste una quantità fissa di
capacità di ingegneria, e ogni ora spesa su una funzionalità è un'ora non spesa
su debito, rischio o difetti. Non è un fatto nuovo sulla consegna del software,
ogni responsabile di ingegneria sa già che la capacità è finita, ma la maggior
parte delle organizzazioni non ha un modo coerente e onesto di vedere la
ripartizione effettiva. La sprint velocity conta gli story point a prescindere
dal tipo; un backlog che si esaurisce appare identico sia che il lavoro
sottostante fosse un nuovo flusso di checkout sia che fossero tre mesi di poco
glamour bonifica della sicurezza. I flow item esistono specificamente per rendere
visibile quella ripartizione invisibile.

Per i team grandi, questa visibilità cambia la natura di una conversazione sulle
risorse. Invece di un responsabile di ingegneria che sostiene senza quantificare
che «ci serve più tempo per il debito tecnico», la classificazione dei flow item
produce un numero vero, il debito ha consumato il 30% della capacità dell'ultimo
trimestre, che può essere discusso, difeso e aggiustato deliberatamente con gli
stakeholder di business. Le organizzazioni enterprise che gestiscono molte linee
di prodotto in parallelo e le agenzie governative che bilanciano nuove
funzionalità per i cittadini e rischio dei sistemi legacy dipendono entrambe da
questo tipo di compromesso difendibile e quantificato molto più che da una
sensazione privata e informale di «spendere troppo tempo in manutenzione».

## Principi chiave

- **Ogni flow item appartiene a esattamente un tipo.** Imporre una singola
  classificazione, anziché consentirne una mista o ambigua, è ciò che rende la
  tassonomia utilizzabile per la reportistica aggregata.
- **L'allocazione è a somma zero, non additiva.** Più capacità per le
  funzionalità significa necessariamente meno capacità per difetti, rischio e
  debito nello stesso periodo.
- **Non esiste una distribuzione universalmente sana.** Un prodotto giovane in
  fase di crescita dovrebbe legittimamente pendere verso le funzionalità; un
  sistema maturo che porta un rischio tecnico reale dovrebbe legittimamente
  pendere verso il lavoro su debito e rischio.
- **Il lavoro su debito e rischio è cronicamente sottostimato senza questa
  disciplina.** Tende ad avvenire in silenzio, assorbito in generici «compiti di
  ingegneria», finché la classificazione dei flow item non lo porta allo
  scoperto.
- **La qualità della classificazione determina l'intero valore della
  tassonomia.** Una tassonomia applicata in modo incoerente o manipolata a
  posteriori produce numeri che fuorviano attivamente anziché informare.

## Raccomandazioni

### Classifica ogni item all'ingresso, usando una definizione scritta per ciascun tipo

Concordate una definizione concisa e scritta di che cosa conti come
funzionalità, difetto, rischio e debito nel vostro contesto specifico, e
richiedete che ogni nuovo pezzo di lavoro sia classificato rispetto a quella
definizione nel momento in cui entra nel flusso di valore, non dopo il
completamento. Una definizione concordata in anticipo resiste alla tentazione di
classificare a posteriori in base a come un lavoro è risultato, che è
esattamente il rischio di manipolazione che questo argomento nomina
direttamente più sotto.

### Riporta la Flow Distribution come trend, non come singola istantanea

La distribuzione di un singolo periodo dice meno del trend su più periodi. Una
deriva costante verso un tipo di item, le funzionalità che salgono mentre il
debito si riduce in silenzio trimestre dopo trimestre, è un segnale molto più
forte del numero di un singolo periodo, ed è di solito lo schema che vale la pena
sollevare con gli stakeholder prima che diventi una crisi anziché dopo.

### Fissa una distribuzione obiettivo deliberata con gli stakeholder di business, non solo con l'ingegneria

Decidete insieme alla dirigenza di prodotto e di business che aspetto abbia una
distribuzione sana per la fase attuale del vostro specifico flusso di valore, e
riesaminate quell'obiettivo periodicamente anziché lasciarlo derivare per
inerzia. Un prodotto giovane in fase di crescita e un sistema maturo in fase di
stabilità hanno obiettivi sani legittimamente diversi, e l'obiettivo stesso
dovrebbe essere una decisione di business negoziata, non qualcosa che
l'ingegneria decide da sola in silenzio.

### Verifica la classificazione dei flow item rispetto a prove indipendenti

Confronta periodicamente la tua Flow Distribution con metriche che non dipendono
dall'autoclassificazione: il tasso di difetti sfuggiti (argomento 5.1), la
misurazione del debito tecnico (argomento 4.5) e le metriche di gestione delle
vulnerabilità (argomento 6.4). Se difetti o vulnerabilità aumentano mentre le
quote dei flow item «difetti» e «rischi» restano piatte o si riducono, quella
discrepanza è il segnale più chiaro disponibile che la classificazione si è
allontanata dalla realtà.

### Fai attenzione in particolare allo schema della fabbrica di funzionalità

Quando la Flow Distribution mostra funzionalità che assorbono costantemente
quasi tutta la capacità, trimestre dopo trimestre, con il lavoro su debito e
rischio che non supera mai una quota simbolica, quello schema (a volte chiamato
«feature factory») significa di solito che debito e rischio sono privati di
capacità, non che il sistema non abbia davvero bisogno di manutenzione. Questo
schema è comodo nel breve periodo e costoso dopo, e finisce per manifestarsi come
una crisi di qualità o di sicurezza che arriva senza alcun preavviso nel grafico
della Flow Distribution, perché l'accumulo sottostante non è mai stato visibile.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessuna classificazione formale (backlog generico) | Nessun overhead di processo | Il lavoro su debito, rischio e difetti resta invisibile; difficile difendere le decisioni sulle risorse |
| Classificazione dei flow item in quattro tipi | Rende visibile e negoziabile con gli stakeholder l'allocazione della capacità | Richiede disciplina all'ingresso e una definizione scritta e concordata per ciascun tipo |
| Classificazione più granulare (molti sottotipi) | Maggiore dettaglio diagnostico | Più sforzo di classificazione; più numeri da spiegare agli stakeholder |
| Classificazione a posteriori | Più facile da applicare, nessun cambiamento di processo iniziale | Molto esposta alla manipolazione; la classificazione deriva verso ciò che appare meglio |

La tensione centrale è **disciplina di classificazione contro overhead di
processo**. Una tassonomia a quattro tipi è deliberatamente grossolana, abbastanza
grossolana perché classificare un item richieda secondi, non un dibattito, ma
quella grossolanità regge solo se la disciplina di classificare all'ingresso,
rispetto a una definizione scritta, è davvero sostenuta. Si risolve la tensione
mantenendo la tassonomia esattamente così semplice, quattro tipi, non di più, e
investendo ogni rigore aggiuntivo nel passo di verifica (il confronto con prove
indipendenti) anziché in uno schema di classificazione più elaborato che si
erode sotto un carico di lavoro reale.

## Domande da discutere con il vostro team

1. **Se classificassimo tutto ciò che il nostro team ha rilasciato nell'ultimo
   trimestre, che aspetto avrebbe la ripartizione effettiva tra funzionalità,
   difetti, rischi e debito, e sorprenderebbe i nostri stakeholder?** La maggior
   parte dei team non ha mai svolto con onestà questo esercizio. Provatelo con
   dati reali prima di presumere di conoscere già la risposta.

2. **Abbiamo una definizione scritta e concordata di che cosa conti come
   funzionalità rispetto a debito rispetto a rischio nel nostro contesto
   specifico, o la classificazione dipende da chi capita di etichettare il
   ticket?** Una definizione informale e incoerente produce numeri che sembrano
   precisi ma non sono davvero confrontabili da un periodo all'altro.

3. **La nostra Flow Distribution è mai derivata costantemente verso un tipo di
   item senza che nessuno lo decidesse deliberatamente?** Una deriva lenta è
   facile da non vedere periodo per periodo ma evidente una volta tracciata come
   trend. Raccogliete più periodi di dati, se li avete, e cercate con onestà
   questo schema.

4. **Che aspetto avrebbe una Flow Distribution sana per la fase attuale del
   nostro prodotto, e abbiamo davvero concordato quell'obiettivo con gli
   stakeholder di business?** La maggior parte delle organizzazioni non ha mai
   reso esplicito questo obiettivo, il che significa che non esiste una base
   condivisa per accorgersi quando la distribuzione effettiva se ne allontana.

5. **La nostra Flow Distribution corrisponde a prove indipendenti, come il tasso
   di difetti sfuggiti o il numero di vulnerabilità aperte, o c'è una
   discrepanza che vale la pena indagare?** Una discrepanza qui è il segno più
   chiaro disponibile che la classificazione si è allontanata da ciò che il
   lavoro è davvero.

6. **Qualcuno nel nostro team potrebbe riclassificare in silenzio un item di
   debito o di rischio come funzionalità sotto pressione di consegna, e ce ne
   accorgeremmo oggi se lo facesse?** È il rischio di manipolazione centrale di
   questo argomento enunciato direttamente. Discutete se il vostro processo
   attuale lo intercetterebbe davvero, non solo se qualcuno lo farebbe
   deliberatamente.

## Prospettiva settoriale

**Startup.** La classificazione formale sembra spesso un overhead quando l'intero
team sa già su che cosa sta lavorando ciascuno. Il minimo utile a questa scala è
semplicemente nominare ad alta voce le quattro categorie durante la
pianificazione, così che il lavoro su debito e rischio non venga depriorizzato in
silenzio ogni volta che la scadenza di una funzionalità crea pressione, uno
schema che peggiora molto una volta che crescono sia la base di codice sia il
team.

**Piccola impresa.** Un singolo campo personalizzato o un'etichetta nel vostro
strumento di tracciamento esistente basta per catturare il tipo di flow item
senza alcun investimento in strumenti dedicati. La disciplina di classificare in
modo coerente all'ingresso conta molto più di qualsiasi sofisticazione degli
strumenti.

**Enterprise.** La classificazione dei flow item è il punto in cui questo
framework dà il suo valore a scala, perché una grande organizzazione che gestisce
molti flussi di valore in parallelo non ha altro modo affidabile e aggregato di
vedere come la capacità sia effettivamente ripartita tra funzionalità, difetti,
rischio e debito. Investite in una classificazione integrata negli strumenti e in
verifiche periodiche rispetto a prove indipendenti; la classificazione manuale ed
estemporanea non sopravvive alla scala organizzativa reale.

**Settore pubblico.** La Flow Distribution dà a un dirigente tecnologico del
settore pubblico una risposta difendibile e quantificata quando gli si chiede
perché non escano più nuove funzionalità per i cittadini, quando la risposta
onesta è che l'onere di rischio e debito di un sistema legacy sta consumando una
quota reale e giustificabile della capacità. Rendere esplicito e negoziato quel
compromesso, anziché assorbirlo in silenzio, tende a costruire più fiducia con
gli organi di controllo di un appello non quantificato alla «necessità tecnica».

## Esempi

**Enterprise.** Il team della piattaforma di e-commerce di una grande azienda di
vendita al dettaglio credeva, in base alla sprint velocity, di consegnare un
output costante di funzionalità. Un primo onesto esercizio di classificazione dei
flow item scoprì che le «funzionalità» costituivano in realtà solo il 40% del
lavoro completato, con il debito, in gran parte legato a un sistema di checkout
invecchiato, che consumava quasi un terzo della capacità senza essere mai stato
nominato come tale in alcun rapporto precedente. Presentare questa ripartizione
alla dirigenza di prodotto, insieme a un tasso crescente di difetti sfuggiti che
corroborava l'onere del debito, assicurò un budget dedicato alla modernizzazione
che il team aveva richiesto senza successo per due anni usando solo argomenti
qualitativi.

**Settore pubblico.** Il team delle licenze digitali di un'agenzia statale della
motorizzazione classificò per la prima volta il proprio backlog dopo che
un'interruzione pubblica aveva attirato l'attenzione sulla stabilità del sistema
sottostante. L'esercizio rivelò che il lavoro di «rischio», principalmente
l'applicazione di patch di sicurezza ripetutamente depriorizzate a favore di
funzionalità visibili per i cittadini, si era ridotto a meno del 5% della
capacità nell'anno precedente, uno schema che non era mai stato visibile nella
reportistica standard del team. La dirigenza dell'agenzia usò la scoperta per
imporre da allora in poi un'allocazione minima al lavoro sul rischio, sostenuta
dai dati di Flow Distribution anziché da una semplice dichiarazione di policy
generale.

## Business case: motivazioni, ROI e TCO

Il ritorno della classificazione dei flow item è una base difendibile e
quantificata per decisioni sulle risorse che prima si argomentavano in modo
qualitativo e spesso perdevano contro qualunque lavoro fosse più visibile agli
stakeholder. L'esempio del commercio al dettaglio qui sopra, che ha ottenuto un
budget di modernizzazione con dati reali sulla capacità anziché con un appello
generico, è lo schema che questa disciplina produce in modo affidabile: un numero
specifico è molto più difficile da liquidare di un'impressione generale che «ci
serva più tempo per la manutenzione».

Il costo totale di proprietà è basso una volta concordate la tassonomia e le sue
definizioni: la classificazione aggiunge secondi all'ingresso, non un onere di
processo significativo, e l'integrazione degli strumenti necessaria a tracciarla
è di solito un singolo campo personalizzato o un'etichetta. Il vero costo
continuo è la disciplina di sostenere una classificazione onesta sotto pressione
di consegna, ed è per questo che la verifica periodica rispetto a prove
indipendenti conta quanto l'adozione iniziale.

## Antipattern e insidie

- **Classificare il lavoro a posteriori, dopo che l'esito è noto:** il vettore di
  manipolazione al centro di questo argomento. Sotto pressione di consegna, un
  team può etichettare in silenzio come funzionalità lavoro di debito o di
  rischio dopo il fatto, o arrotondare un item ambiguo verso il tipo che appare
  meglio nel grafico della distribuzione, senza che nessuna singola decisione
  sembri disonesta di per sé. Il guardrail è la classificazione all'ingresso
  rispetto a una definizione scritta, combinata con audit periodici che
  confrontano la Flow Distribution con prove indipendenti come il tasso di
  difetti sfuggiti (argomento 5.1) e le metriche di vulnerabilità (argomento
  6.4), la stessa disciplina di audit rispetto a prove indipendenti che
  l'argomento 1.2 richiede per ogni metrica di questo libro.
- **Lasciare che le funzionalità assorbano costantemente quasi tutta la capacità
  (lo schema della feature factory):** priva in silenzio di risorse il lavoro su
  debito e rischio finché non emerge come crisi.
- **Trattare la distribuzione di un singolo periodo come il quadro completo:**
  perde la deriva lenta e cumulativa che una vista di trend rivela con chiarezza.
- **Fissare una distribuzione obiettivo senza gli stakeholder di business:** fa
  perdere il valore principale del framework, una comprensione condivisa e
  negoziata del compromesso.
- **Usare una definizione incoerente o non documentata per ciascun tipo:**
  produce numeri che sembrano precisi ma non sono davvero confrontabili nel
  tempo.
- **Sovraingegnerizzare la tassonomia con molti sottotipi:** aggiunge un overhead
  di classificazione che erode la disciplina senza aggiungere approfondimento
  proporzionale.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Il lavoro è tracciato in modo generico, senza
  classificazione dei flow item; il lavoro su debito e rischio è invisibile nella
  reportistica.
- **Livello 2, Sviluppo (Develop):** Alcuni team classificano i flow item in modo
  informale, ma le definizioni sono incoerenti e la classificazione avviene
  spesso a posteriori.
- **Livello 3, Standardizzazione (Standardize):** Tutti i team classificano
  all'ingresso rispetto a una definizione scritta e condivisa, e la Flow
  Distribution è tracciata come trend.
- **Livello 4, Gestione (Manage):** La Flow Distribution è verificata
  periodicamente rispetto a prove indipendenti, e le distribuzioni obiettivo sono
  fissate deliberatamente con gli stakeholder di business.
- **Livello 5, Orchestrazione (Orchestrate):** I dati dei flow item informano
  direttamente le decisioni su risorse e investimenti in tutta l'organizzazione,
  e la dirigenza sa indicare decisioni specifiche prese perché la classificazione
  ha reso esplicito un compromesso prima invisibile.

## Spunti di discussione

1. Che cosa mostrerebbe una ripartizione onesta in flow item del lavoro dell'ultimo trimestre, e sorprenderebbe qualcuno?
2. Abbiamo una definizione scritta per ciascuno dei quattro tipi di flow item, o la classificazione dipende da chi etichetta il lavoro?
3. La nostra Flow Distribution è mai derivata verso un tipo di item senza una decisione deliberata alle spalle?
4. Con quali prove indipendenti potremmo confrontare oggi la nostra Flow Distribution?

## Punti chiave

- Un **flow item** appartiene a esattamente uno di quattro tipi, funzionalità,
  difetti, rischi o debito, e l'allocazione della capacità tra di essi è **a
  somma zero**.
- Non esiste una **distribuzione universalmente sana**; il mix giusto dipende
  dalla fase del prodotto e dovrebbe essere un obiettivo deliberato e negoziato
  con gli stakeholder di business.
- Il vettore di manipolazione centrale dell'argomento è la **classificazione a
  posteriori**, riclassificare in silenzio come funzionalità lavoro di debito o di
  rischio dopo il fatto; il guardrail è la classificazione all'ingresso più audit
  periodici rispetto a prove indipendenti.
- Fai attenzione in particolare allo **schema della feature factory**,
  funzionalità che assorbono costantemente quasi tutta la capacità, che priva
  di risorse il lavoro su debito e rischio finché non emerge come crisi.
- La Flow Distribution è più preziosa come **trend**, e il suo maggior vantaggio
  viene dal condividerla direttamente con gli stakeholder di business.

## Riferimenti e letture di approfondimento

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr e George Spafford. *The Phoenix Project*. IT Revolution
  Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second
  Generation Lean Product Development*. Celeritas Publishing, 2009.
