# 4.5 Misurazione del debito tecnico

## Panoramica e motivazione

Il **[debito tecnico](https://en.wikipedia.org/wiki/Technical_debt)**, una metafora
coniata da Ward Cunningham, descrive il costo accumulato di scorciatoie passate,
decisioni di comodo che hanno rilasciato qualcosa prima ma lasciato la base di codice
più difficile da modificare in seguito, nello stesso modo in cui il debito
finanziario permette di spendere ora al costo di interessi più tardi. Ogni base di
codice porta con sé un po' di debito tecnico, e questo non è automaticamente un
fallimento; il vero valore della metafora è che inquadra il debito come un
compromesso gestibile anziché come un segreto vergognoso o un fardello inevitabile e
permanente. Questo argomento riguarda il rendere visibile e gestibile quel
compromesso attraverso la misurazione, anziché lasciarlo come una vaga preoccupazione
perennemente depriorizzata che ogni ingegnere avverte ma su cui nessuno può agire con
le prove.

Gli argomenti che precedono questo, complessità (4.1), copertura (4.2), churn e
hotspot (4.3) e analisi statica (4.4), fanno emergere ciascuno una sfaccettatura del
debito tecnico. Il compito di questo argomento è la sintesi: trasformare quei segnali
separati, più le voci che non compaiono mai in nessuna scansione automatica (una
scorciatoia architetturale non documentata, una migrazione volutamente rinviata), in
un unico arretrato prioritizzato e visibile che competa equamente per gli
investimenti con il lavoro sulle funzionalità, anziché perdere quella competizione
per impostazione predefinita solo perché non ha alcuna metrica collegata né alcun
sostenitore nelle riunioni di pianificazione.

Per i team grandi, il debito tecnico non gestito si compone in un modo davvero
pericoloso e facile da sottostimare: ogni nuova scorciatoia rende il cambiamento
successivo un po' più difficile, il che crea pressione per altre scorciatoie, che si
compongono ulteriormente. Le organizzazioni enterprise e governative che mantengono
sistemi per molti anni sono particolarmente esposte a questo effetto di composizione,
e la raccomandazione centrale di questo argomento, un arretrato di debito visibile,
quantificato e prioritizzato, è il meccanismo che permette a un'organizzazione di
gestire davvero il compromesso in modo deliberato anziché scivolare nella crisi.

## Principi chiave

- **Il debito tecnico è una metafora deliberata di un compromesso gestibile, non un
  segreto vergognoso.** Un po' di debito, contratto consapevolmente, è una decisione
  di business ragionevole.
- **Il debito non misurato perde per impostazione predefinita la competizione di
  prioritizzazione contro il lavoro sulle funzionalità,** non perché conti meno, ma
  perché non ha un sostenitore visibile.
- **Quantifica il debito in termini che chi decide può pesare: costo per correggerlo
  contro costo di portarlo.** Un vago «il codice è un pasticcio» raramente compete
  bene contro una richiesta concreta di funzionalità.
- **Il debito si compone.** Ogni nuova scorciatoia rende marginalmente più difficili
  i cambiamenti futuri, e quell'effetto accelera se lasciato senza gestione.
- **Non tutto il debito va ripagato.** Una parte vale la pena di portarla
  indefinitamente se il costo di correggerla supera il costo di conviverci.

## Raccomandazioni

### Costruisci un unico arretrato visibile di debito tecnico

Consolida i segnali degli argomenti precedenti di questa parte, valori anomali di
complessità, aree con basso tasso di uccisione dei mutanti, hotspot, rilievi di
analisi statica non risolti, insieme alle voci di debito che solo una persona può
individuare (una scorciatoia architetturale, un aggiornamento di dipendenza rinviato,
un ripiego non documentato), in un unico arretrato visibile, tracciato con lo stesso
rigore e la stessa visibilità del tuo arretrato di funzionalità. Il debito che vive
solo nella memoria dei singoli ingegneri o in commenti sparsi nel codice di fatto non
esiste ai fini della prioritizzazione.

### Quantifica il costo di ogni voce di debito e il suo costo di mantenimento

Per ogni voce, stima due cifre: il costo per correggerla (tempo di ingegneria,
rischio della correzione stessa) e il costo di portarla non corretta (quanto più
lento va il lavoro correlato, quanto rischio aggiuntivo di difetti comporta, quanto
blocca altro lavoro). Questa impostazione, presa direttamente dalla logica della
metafora del debito finanziario, dà a chi decide una vera base di confronto con il
costo e il valore atteso del lavoro sulle funzionalità, anziché una lamentela astratta
e non quantificata.

### Dai priorità in base all'impatto, non all'anzianità né al sostenitore più rumoroso

Ordina le voci di debito in base alla combinazione del costo di mantenimento e della
frequenza con cui viene toccato il codice interessato (i dati di churn dell'argomento
4.3 sono qui direttamente utili): una voce in un angolo raramente modificato della
base di codice, per quanto sgradevole, conta molto meno di una che sta direttamente
sul percorso del tuo sviluppo più attivo. Resisti a dare priorità in base a quale voce
sia nell'arretrato da più tempo o a quale ingegnere la sostenga con più insistenza,
nessuno dei due correla in modo affidabile con l'impatto effettivo sul business.

### Alloca capacità dedicata e protetta per la rimediazione del debito

Un arretrato di debito che deve competere voce per voce contro ogni richiesta di
funzionalità in arrivo in ogni ciclo di pianificazione tende a perdere sistematicamente,
perché il lavoro sulle funzionalità ha di solito un sostenitore di business più chiaro
e più immediato. Alloca una percentuale protetta della capacità di ingegneria, uno
schema comune è tra il 10% e il 20%, specificamente per la rimediazione del debito,
decisa in anticipo anziché negoziata da capo a ogni sprint, così che il ripagamento
del debito avvenga come cosa ordinaria e non solo all'indomani di una crisi.

### Accetta una parte del debito come permanente, e dillo esplicitamente

Non ogni voce appartiene a un piano attivo di rimediazione. Dove il costo per
correggere supera davvero il costo di portare indefinitamente una voce, in
particolare per il codice di un sistema stabile, raramente toccato e destinato presto
al ritiro, documenta esplicitamente quella decisione e sposta la voce in una categoria
deliberatamente depriorizzata, anziché lasciarla a lungo in un arretrato attivo dove
la sua presenza continua implica in silenzio un lavoro che non avverrà mai.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Nessun tracciamento formale del debito | Nessun overhead | Il debito perde per impostazione predefinita la competizione di prioritizzazione; si compone in modo invisibile |
| Consapevolezza informale e improvvisata del debito | Poco overhead, un po' di visibilità | Incoerente; si affida alla memoria e alla perorazione dei singoli |
| Arretrato di debito formale e quantificato | Compete equamente per gli investimenti; consente compromessi informati | Richiede manutenzione continua e disciplina di quantificazione |
| Capacità di rimediazione protetta e dedicata | Garantisce che il ripagamento avvenga con costanza, non solo in reazione | Riduce nel breve periodo la capacità disponibile per il lavoro sulle funzionalità |

La tensione centrale è **pressione di consegna immediata contro manutenibilità a
lungo termine**. Il lavoro sulle funzionalità ha quasi sempre un sostenitore di
business più chiaro e più immediato della rimediazione del debito, il che crea una
pressione strutturale perché il debito perda ogni singola decisione di
prioritizzazione anche quando il suo costo cumulativo è alto. Si risolve la tensione
togliendo del tutto la rimediazione del debito dalla competizione voce per voce
attraverso una capacità protetta e preallocata, così che il compromesso sia deciso in
modo deliberato e in anticipo anziché riargomentato, e di solito perso, a ogni
singolo ciclo di pianificazione.

## Domande da discutere con il vostro team

1. **Abbiamo un unico arretrato visibile di debito tecnico, o la consapevolezza del
   debito vive per lo più nella testa dei singoli ingegneri?** Se la risposta onesta
   è la seconda, è la singola maggiore lacuna che questo argomento raccomanda di
   colmare per prima.

2. **Per la nostra principale voce di debito, sapremmo enunciare il costo per
   correggerla e il costo per portarla in termini abbastanza specifici da confrontarli
   equamente con una richiesta di funzionalità?** In caso contrario, esercitatevi
   insieme in questa quantificazione come attività di gruppo su una voce reale e
   attuale.

3. **Quale percentuale della nostra capacità di ingegneria va effettivamente alla
   rimediazione del debito, e quella percentuale è stata decisa deliberatamente o è
   semplicemente ciò che sopravvive dopo che il lavoro sulle funzionalità è stato
   allocato?** Guardate i vostri sprint recenti effettivi e calcolate il numero reale
   anziché affidarvi all'impressione.

4. **Il nostro arretrato di debito è prioritizzato in base all'impatto genuino sul
   business, o a quale voce è stata sollevata con più insistenza o è lì da più
   tempo?** Confrontate la vostra attuale prioritizzazione con i dati di churn
   (argomento 4.3) e verificate se le due coincidano.

5. **Quali voci di debito dovremmo accettare esplicitamente come permanenti, anziché
   lasciarle a lungo in un arretrato attivo?** Individuate almeno una voce reale in
   cui il costo per correggere supera davvero il costo per portarla, e discutete
   di spostarla in uno stato esplicitamente depriorizzato.

6. **Com'è cambiato il nostro arretrato di debito nell'ultimo anno, in crescita, in
   calo o piatto, e quel trend corrisponde alla nostra intuizione?** Tracciatelo nel
   tempo anziché guardare sempre una singola istantanea; il trend è spesso più
   informativo della dimensione assoluta in un dato momento.

## Prospettiva settoriale

**Startup.** Un debito deliberato e informato è spesso una strategia ragionevole a
questo stadio: rilasciare in fretta per convalidare un'ipotesi, con un piano chiaro
di rivedere specifiche scorciatoie se il prodotto funziona, è un compromesso
legittimo, non un fallimento. Il rischio è perdere traccia di quali scorciatoie
fossero deliberate e reversibili e quali siano in silenzio diventate passività
permanenti e non esaminate man mano che la base di codice cresce.

**Piccola impresa.** Un semplice elenco condiviso, anche informale, che nomini le
vostre scorciatoie note e il loro costo approssimativo di correzione basta di solito a
questa scala. La disciplina principale da adottare è rivedere periodicamente
quell'elenco anziché lasciarlo accumulare in silenzio e diventare invisibile per
familiarità.

**Enterprise.** La capacità di rimediazione protetta e preallocata conta di più qui,
dato che la competizione di prioritizzazione voce per voce tra debito e lavoro sulle
funzionalità favorisce in modo affidabile le funzionalità su decine di team
contemporaneamente senza un contrappeso strutturale. Standardizzate in tutta
l'organizzazione la pratica di quantificazione del debito, così che le voci di debito
possano essere confrontate equamente tra i team per le decisioni di investimento a
livello di portafoglio.

**Settore pubblico.** I sistemi longevi accumulano debito in anni o decenni di
modifiche incrementali ai requisiti, ciascuna ragionevole di per sé, spesso senza
alcun tracciamento formale del debito finché una crisi non forza la questione. Un
arretrato di debito quantificato e visibile è uno strumento davvero persuasivo per
giustificare il budget di modernizzazione presso gli organi di controllo, dato che
trasforma un vago «il sistema è vecchio» in un caso specifico e quantificato per
l'investimento.

## Esempi

**Enterprise.** La piattaforma di fatturazione di un'azienda di telecomunicazioni
aveva accumulato oltre un decennio di debito tecnico riconosciuto in modo informale
ma mai tracciato formalmente, con gli ingegneri che citavano di routine «il motore di
fatturazione è un pasticcio» nelle retrospettive senza alcun seguito. Un nuovo
direttore di ingegneria chiese a ogni team di costruire un arretrato di debito
quantificato, stimando costo di correzione e costo di mantenimento per ogni voce, e
allocò d'ora in poi una quota fissa del 15% della capacità di ingegneria alla
rimediazione del debito. In un anno le cinque voci a costo di mantenimento più alto,
che rappresentavano una piccola frazione dell'arretrato totale per numero, furono
risolte, e il tasso di fallimento dei cambiamenti (argomento 2.10) per i rilasci
legati alla fatturazione migliorò in modo misurabile, dimostrando l'impatto
sproporzionato del puntare prima sulle voci a costo di mantenimento più alto anziché
scorrere l'arretrato in ordine arbitrario.

**Settore pubblico.** Il sistema centrale di elaborazione dati di un'agenzia
statistica nazionale, costruito originariamente oltre vent'anni prima, non aveva mai
avuto una valutazione formale del debito nonostante il diffuso riconoscimento
informale tra il personale che parti significative fossero fragili e poco comprese.
Una valutazione strutturata del debito, che combinava rilievi di analisi statica, dati
sugli hotspot e interviste con i pochi ingegneri rimasti che capivano i componenti
più vecchi, produsse un arretrato quantificato e prioritizzato che sostenne
direttamente una richiesta di budget pluriennale di modernizzazione. Cosa cruciale,
la valutazione individuò anche esplicitamente diversi componenti ereditati, stabili e
raramente toccati, che era ragionevole lasciare invariati, evitando una riscrittura
dell'intero sistema inutilmente ampia e costosa a favore di un investimento mirato
sulle aree specifiche che i dati mostravano portare il costo continuo più alto.

## Business case: motivazioni, ROI e TCO

Il ritorno del gestire deliberatamente il debito tecnico è il costo di composizione
evitato: ogni scorciatoia non affrontata rende marginalmente più difficili i
cambiamenti futuri, e quell'effetto accelera senza intervento, producendo infine una
base di codice così fragile che anche i cambiamenti semplici diventano lenti e
rischiosi. L'esempio delle telecomunicazioni qui sopra mostra il ritorno in concreto:
puntare su un piccolo numero delle voci a costo di mantenimento più alto ha prodotto
un miglioramento misurabile di consegna e qualità, sproporzionato rispetto alla
modesta frazione dell'arretrato totale che quelle voci rappresentavano.

Il costo totale di proprietà è la capacità protetta allocata alla rimediazione,
tipicamente dal 10% al 20% del tempo di ingegneria, che è un costo reale e visibile
che compete nel breve periodo con la velocità sulle funzionalità. Vale la pena
pagare quel costo perché l'alternativa, un debito non gestito e composto, costa
infine molto di più in consegna rallentata e tassi di difetti elevati su tutta la
base di codice, non solo sulle voci specifiche lasciate irrisolte.

## Antipattern e insidie

- **Nessun arretrato di debito visibile e tracciato:** il debito perde per
  impostazione predefinita la competizione di prioritizzazione e si compone in modo
  invisibile.
- **Affermazioni vaghe e non quantificate sul debito:** competono raramente bene
  contro richieste di funzionalità concrete e quantificate in pianificazione.
- **Dare priorità al debito per anzianità o volume di perorazione anziché per
  impatto:** devia la limitata capacità di rimediazione.
- **Nessuna capacità protetta per la rimediazione:** il ripagamento del debito
  avviene solo in reazione, dopo una crisi, anziché come pratica ordinaria e
  deliberata.
- **Trattare ogni debito come ugualmente meritevole di essere corretto:** spreca
  sforzo su voci a basso impatto mentre le voci a costo di mantenimento alto restano
  irrisolte.
- **Lasciare il debito a lungo in un arretrato attivo senza mai decidere che sia
  permanente:** implica un lavoro futuro che non avverrà mai e ingombra la
  prioritizzazione genuina.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Il debito tecnico è discusso in modo informale,
  senza arretrato tracciato né quantificazione; perde sistematicamente contro il
  lavoro sulle funzionalità.
- **Livello 2, Sviluppo (Develop):** Alcuni team tracciano il debito in modo
  informale, ma non c'è quantificazione coerente, visibilità tra team né capacità di
  rimediazione protetta.
- **Livello 3, Standardizzazione (Standardize):** Esiste un arretrato di debito
  visibile e quantificato in tutta l'organizzazione, con capacità di rimediazione
  protetta allocata in modo coerente.
- **Livello 4, Gestione (Manage):** Le voci di debito sono prioritizzate in base
  all'impatto misurato (costo di mantenimento combinato con il churn), e il debito
  accettato in modo permanente è documentato esplicitamente anziché lasciato
  ambiguo.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione sa indicare
  miglioramenti specifici e misurabili di consegna o qualità ricondotti a una
  rimediazione mirata del debito, e la gestione del debito è un input di routine e
  affidabile per le decisioni di investimento in ingegneria accanto al lavoro sulle
  funzionalità.

## Spunti di discussione

1. Qual è oggi la nostra singola voce di debito a costo di mantenimento più alto, e potremmo quantificarla?
2. Quale percentuale della nostra capacità va effettivamente oggi alla rimediazione del debito?
3. Quale voce di debito dovremmo accettare esplicitamente come permanente anziché lasciarla in modo ambiguo nel nostro arretrato?
4. Il nostro arretrato di debito è cresciuto, diminuito o rimasto piatto nell'ultimo anno?
5. Che cosa rivelerebbe una valutazione quantificata del debito che la nostra attuale consapevolezza informale non coglie?

## Punti chiave

- Il debito tecnico è un **compromesso gestibile, non un segreto vergognoso**;
  quantificalo anziché lasciarlo come una vaga preoccupazione perennemente
  depriorizzata.
- **Quantifica costo per correggere contro costo per portare** per ogni voce, così
  che compete equamente contro il lavoro sulle funzionalità.
- **Dai priorità per impatto** (costo di mantenimento combinato con il churn), non
  per anzianità o volume di perorazione.
- Alloca **capacità di rimediazione protetta e dedicata**, decisa in anticipo, dato
  che altrimenti il debito perde in modo affidabile la competizione voce per voce
  contro il lavoro sulle funzionalità.
- **Accetta esplicitamente una parte del debito come permanente** dove il costo per
  correggere supera il costo per portarlo, anziché lasciarlo in modo ambiguo in un
  arretrato attivo.

## Riferimenti e letture di approfondimento

- Cunningham, Ward, "The WyCash Portfolio Management System" (resoconto
  d'esperienza OOPSLA, 1992): l'origine della metafora del debito tecnico.
- *Managing Technical Debt: Reducing Friction in Software Development*, di
  Philippe Kruchten, Robert Nord e Ipek Ozkaya (una trattazione completa della
  misurazione e gestione del debito tecnico).
- *Refactoring: Improving the Design of Existing Code*, di Martin Fowler (le
  tecniche di rimediazione a cui un arretrato di debito attinge in ultima analisi).
- *Your Code as a Crime Scene*, di Adam Tornhill (l'analisi degli hotspot come input
  alla prioritizzazione del debito, argomento 4.3).
