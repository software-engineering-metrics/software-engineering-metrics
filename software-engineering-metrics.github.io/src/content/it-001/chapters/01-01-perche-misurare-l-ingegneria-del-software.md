# 1.1 Perché misurare l'ingegneria del software

## Panoramica e motivazione

L'ingegneria del software resiste alla misurazione in un modo che la
manifattura non conosce. Una linea di produzione genera unità identiche, quindi
contarle dice qualcosa di reale. Il lavoro sul software produce manufatti
unici, con requisiti che cambiano di continuo, quindi un conteggio ingenuo (di
commit, di righe, di ticket chiusi) non dice quasi nulla sul valore
consegnato. È in quel divario tra la difficoltà di misurare il lavoro sul
software e il bisogno molto concreto di sapere se sta andando bene che vive
tutto questo libro. Questo argomento serve a colmare quel divario con onestà:
non fingendo che il lavoro sul software sia contabile come i pezzi di una
fabbrica, ma essendo precisi su ciò che la misurazione può e non può fare per
un'organizzazione di ingegneria.

La misurazione esiste per rispondere a domande a cui un'organizzazione non può
altrimenti rispondere con fiducia: la nostra consegna sta diventando più
veloce o più lenta, la qualità migliora o peggiora, gli ingegneri stanno
andando verso il burnout, questo investimento sta rendendo. Senza metriche, a
quelle domande risponde chi parla con più sicurezza nella stanza, di solito la
persona più anziana o più persuasiva presente, e quella risposta è spesso
sbagliata. I team di [ingegneria del software](https://en.wikipedia.org/wiki/Software_engineering)
che saltano la misurazione non evitano di formulare giudizi sulle proprie
prestazioni. Li formulano semplicemente sulla base di impressioni, aneddoti e
distorsione da recenza invece che di prove.

Per i team grandi, questo smette di essere un di più e diventa strutturale. Un
team di sei persone può condividere un modello mentale di come vanno le cose
attraverso la conversazione quotidiana. Un dipartimento di seicento, sparso tra
fusi orari e unità di business, no. A quella scala, un insieme condiviso e
affidabile di numeri è l'unico sostituto pratico della consapevolezza informale
che un piccolo team ottiene gratis. La dirigenza enterprise ha bisogno di
metriche per allocare gli investimenti tra decine di team in competizione per
lo stesso budget. Le organizzazioni di ingegneria governative hanno bisogno di
metriche per dimostrare ai parlamenti e al pubblico che i fondi stanziati hanno
prodotto capacità reale, non solo attività. In entrambi i contesti, «abbiamo
lavorato sodo» non è una prova; un numero difendibile sì.

## Principi chiave

- **Misura per imparare, non per giudicare.** Lo scopo primario di una metrica
  di ingegneria è informare una decisione, non dare un voto a una persona o a
  un team.
- **Un numero senza una decisione collegata è decorazione.** Se nessuna lettura
  di una metrica cambierebbe ciò che fai dopo, non appartiene a una dashboard.
- **La misurazione è un mezzo, non il fine.** Il fine è un software migliore,
  consegnato in modo più affidabile da un team sostenibile. Le metriche
  esistono solo per servire quel fine.
- **Ogni metrica ha un costo.** La strumentazione, il tempo di revisione e il
  rischio di distorsione comportamentale trattato nell'argomento 1.2 hanno
  tutti un prezzo. Una metrica deve guadagnarsi quel costo.
- **Anche il silenzio è una decisione.** Scegliere di non misurare qualcosa è
  una scelta con conseguenze, non un'impostazione neutra.

## Raccomandazioni

### Parti dalla decisione, non dalla dashboard

Prima di strumentare qualsiasi cosa, nomina la decisione che la metrica
informerà. «Vogliamo sapere se la nostra nuova pipeline di rilascio ha ridotto
il tasso di incidenti» è una domanda a forma di decisione; «teniamo traccia di
tutto ciò che lo strumento può esportare» no. Lavorare a ritroso da una
decisione mantiene piccolo l'insieme di metriche e rende difendibile ogni
riquadro quando qualcuno chiede perché esiste. Se non riesci a nominare la
decisione che una metrica informerebbe, non costruirla ancora. L'argomento 1.3
approfondisce la versione di questa disciplina basata sui risultati prima
dell'output.

### Separa l'uso diagnostico dall'uso valutativo

Una metrica usata per diagnosticare un problema del sistema (perché il nostro
lead time sta salendo) si comporta in modo completamente diverso dalla stessa
metrica usata per valutare una persona o un team (di chi è il lead time
peggiore). La prima invita a indagare e a migliorare. La seconda invita a
nascondere e a manipolare, perché ora al numero è legata una conseguenza di
reputazione o economica. Decidi esplicitamente, per iscritto, a quale uso è
destinata una metrica, e non lasciare mai che una metrica diagnostica scivoli
nell'uso valutativo senza riconsiderare deliberatamente il rischio. Questa
distinzione ricorre di continuo in questo libro ed è formalizzata nella
sezione sui non-obiettivi della carta delle metriche descritta nell'argomento
1.4.

### Tratta la misurazione come un'ipotesi, non come un fatto

Una metrica è un proxy di qualcosa che ti interessa davvero, non la cosa
stessa. La frequenza di rilascio è un proxy della capacità di consegna, non la
capacità di consegna stessa. Tratta ogni metrica come un'ipotesi sottoposta a
verifica continua: questo numero segue ancora ciò che ci interessa, o il mondo
è andato avanti e ha lasciato indietro il proxy? Riesamina la questione con una
cadenza fissa invece di dare per scontato che una metrica ben scelta due anni
fa lo sia ancora oggi, soprattutto quando cambiano gli strumenti, la struttura
dei team o (vedi la Parte 7) la natura stessa del lavoro.

### Rendi visibile l'assenza di misurazione

Nelle grandi organizzazioni, la lacuna più rischiosa non è una metrica
sbagliata, ma un'area che nessuno misura perché è difficile da strumentare:
l'esperienza degli sviluppatori, l'attrito delle dipendenze tra team,
l'erosione della conoscenza istituzionale. Nomina esplicitamente queste lacune
nella tua carta delle metriche invece di lasciarle invisibili per impostazione
predefinita. Un'organizzazione che sa che cosa non sta misurando, e perché, è
in una posizione molto più forte di una che ha dimenticato in silenzio che
quelle aree esistono.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Strumentazione pesante, molte metriche | Visibilità ampia, meno punti ciechi | Affaticamento da dashboard, superficie di manipolazione più ampia, costo di manutenzione maggiore |
| Metriche minime, guidate dalle decisioni | Focalizzazione, poco overhead, ogni metrica difendibile | Rischio di perdere un problema emergente fuori dall'insieme scelto |
| Metriche solo per la diagnosi | Incoraggia una rendicontazione onesta e l'indagine | La dirigenza può comunque usarle in modo informale per valutare |
| Metriche legate alla valutazione individuale | Dà senso di responsabilità, facile da spiegare ai dirigenti | Forte incentivo alla manipolazione; danneggia la fiducia; di solito misura la cosa sbagliata |

La tensione centrale è **copertura contro focalizzazione**, ed è resa più
acuta da **diagnosi contro giudizio**. Troppe poche metriche e si sviluppano
punti ciechi che emergono solo come crisi; troppe e nessuno riesce ad agire su
nessuna di esse, mentre ognuna a cui si attribuisce un peso valutativo invita
alla distorsione. Si risolve partendo da poche metriche guidate dalle
decisioni, aggiungendone una solo quando una decisione specifica e nominata ne
ha bisogno, e difendendo esplicitamente il confine della sola diagnosi nel
lavoro di governance dell'argomento 1.4 invece di lasciarlo erodere per
inerzia.

## Domande da discutere con il vostro team

1. **Per ciascuna metrica della nostra dashboard attuale, quale decisione
   scatenerebbero una buona lettura e una cattiva lettura?** Se entrambe le
   letture portano alla stessa azione, o a nessuna azione, la metrica è
   decorazione. Percorrete la dashboard riquadro per riquadro e pretendete una
   risposta onesta per ciascuno. Questo esercizio dimezza di routine una
   dashboard gonfia in una sola seduta, perché la maggior parte della
   proliferazione si accumula con metriche che nessuno rimuove mai, più che con
   metriche aggiunte di proposito per una ragione ancora valida.

2. **Quali delle nostre metriche sono usate in modo diagnostico, e quali sono
   diventate in silenzio valutative?** Una metrica costruita per capire un
   vincolo del sistema può scivolare nell'essere usata per classificare team o
   individui senza che nessuno lo decida di proposito, spesso attraverso un
   commento buttato lì in una riunione di revisione che diventa abitudine. Una
   volta avvenuto questo scivolamento, il numero smette di essere affidabile,
   perché ora le persone hanno una ragione per farlo sembrare buono piuttosto
   che per renderlo accurato. Nominate per iscritto l'uso previsto di ogni
   metrica e confrontate con esso la pratica attuale.

3. **Che cosa non stiamo misurando perché è difficile da strumentare, e quanto
   ci costa quella lacuna?** I punti ciechi più pericolosi sono quelli che non
   arrivano mai su una dashboard proprio perché resistono a una misurazione
   facile: l'attrito delle dipendenze tra team, l'erosione della conoscenza
   istituzionale o il silenzioso accumulo di soluzioni di ripiego fragili.
   Portate un elenco delle cose di cui tutti si preoccupano in privato ma che
   nessuno monitora, e siate onesti sul perché.

4. **Se cancellassimo questa metrica domani, chi se ne accorgerebbe e che cosa
   perderebbe?** Una metrica che a nessuno mancherebbe è una metrica che non
   informa nessuna decisione. Questa domanda fa emergere i riquadri di vanità
   che sopravvivono solo per inerzia. Per una grande organizzazione con decine
   di dashboard di team, questa disciplina di potatura conta quanto la
   disciplina di aggiungere nuove metriche.

5. **Quanto costa davvero produrre e mantenere ciascuna metrica della nostra
   dashboard, incluso il tempo di ingegneria dietro la strumentazione?** Le
   metriche non sono gratuite. Pipeline, dashboard e il tempo di revisione
   speso a discutere un numero hanno tutti un costo ricorrente facile da
   sottostimare perché distribuito su molte piccole attività anziché su una
   singola voce visibile. Portate lo sforzo effettivo di strumentazione e
   manutenzione e confrontatelo con il valore decisionale della domanda 1.

6. **Dove la misurazione è diventata un sostituto del giudizio, e dove il
   giudizio è diventato un sostituto della misurazione?** Entrambe le modalità
   di fallimento sono reali. Un team che affida ogni decisione a una dashboard
   perde il giudizio contestuale che coglie ciò che il numero non vede; un
   team che ignora i dati disponibili a favore della voce più forte nella
   stanza ripete il problema stesso con cui questo argomento si apre. L'obiettivo
   sono metriche che informino il giudizio, non metriche che lo sostituiscano.

## Prospettiva settoriale

**Startup.** Con una manciata di ingegneri, la maggior parte di ciò da cui
questo argomento mette in guardia (deriva verso l'uso valutativo, punti
ciechi, dashboard gonfie) è facile da evitare semplicemente perché tutti si
parlano ogni giorno. Il rischio è l'opposto: saltare del tutto la misurazione
perché sembra un overhead che il team non può permettersi. Scegliete due o tre
domande a forma di decisione (stiamo rilasciando abbastanza in fretta, la
qualità regge) e strumentate solo quelle.

**Piccola impresa.** Senza una piattaforma o un team dati dedicati, appoggiatevi
a ciò che i vostri strumenti esistenti già riportano invece di costruire
strumentazione su misura. La dashboard di un processore di pagamenti, le
metriche di risposta di uno strumento di assistenza e lo storico delle build
del vostro fornitore di CI di solito coprono le decisioni che contano di più.
Resistete alla tentazione di acquistare una piattaforma dedicata di analisi
dell'ingegneria prima di aver dimostrato che agirete su ciò che essa vi dice.

**Enterprise.** Il rischio centrale sono le metriche che scivolano in silenzio
dall'uso diagnostico a quello valutativo mentre risalgono i livelli di
gestione, e le dashboard che crescono per accrezione perché nessuno ha il
compito di potarle. La governance (argomento 1.4) non è facoltativa a questa
scala. Standardizzate le definizioni tra le unità di business e inserite una
revisione periodica di ritiro nel programma di metriche stesso.

**Settore pubblico.** Qui le metriche hanno spesso un peso normativo o di
bilancio, il che aumenta sia il valore di farle bene sia il costo di farle
male. Un numero riportato a un parlamento o a un organo di controllo richiede
una metodologia documentata, una definizione stabile tra i periodi di
rendicontazione e onestà sui suoi limiti. Trattate «non misuriamo questo al
momento» come una risposta che potreste dover difendere, non come una colpa
privata da nascondere.

## Esempi

**Enterprise.** L'organizzazione di ingegneria di una compagnia assicurativa
globale era cresciuta fino a oltre sessanta team scrum, ciascuno con la propria
dashboard informale, nessuna confrontabile con le altre. La dirigenza non
sapeva rispondere a una domanda di base: quale dei nostri dieci investimenti
strategici in piattaforme sta davvero producendo software più rapido. La
soluzione non furono più metriche, ma meno e migliori: l'organizzazione definì
un nucleo condiviso, guidato dalle decisioni, di metriche DORA (argomento
2.10) calcolate in modo identico ovunque dagli stessi dati di pipeline, ritirò
quaranta dashboard specifiche dei team e in due trimestri poté finalmente
confrontare le aree di investimento su una base comune.

**Settore pubblico.** Al team del servizio digitale di un'agenzia fiscale
nazionale una commissione di controllo aveva chiesto di dimostrare il ritorno
di un programma di modernizzazione pluriennale. Le metriche esistenti del team
erano interamente interne e basate sull'attività: story point completati,
sprint chiusi. Nulla di tutto ciò rispondeva alla vera domanda della
commissione. Il team costruì invece un piccolo insieme di metriche di
risultato: il tempo mediano per risolvere un problema di dichiarazione di un
cittadino, il tasso di adozione del canale digitale e il tasso di difetti
sfuggiti nel nuovo sistema, e le riportò ogni trimestre con una metodologia
documentata. Le domande della commissione passarono da «dimostrate che state
lavorando» a «come replichiamo questo nella prossima agenzia», che è il
risultato che un insieme di metriche ben scelto dovrebbe produrre.

## Business case: motivazioni, ROI e TCO

Il ritorno della misurazione deliberata è la qualità delle decisioni.
Un'organizzazione che può dire, con prove, «il nostro lead time è migliorato
del 30% dopo l'investimento nella piattaforma» può difendere quell'investimento,
ripetere ciò che ha funzionato e fermare ciò che non ha funzionato.
Un'organizzazione che si affida agli aneddoti non può fare nulla di tutto
questo con fiducia, e finisce per riargomentare le stesse discussioni a ogni
ciclo di bilancio perché nessuno può indicare un numero di cui entrambe le
parti si fidino.

Il costo della misurazione non è la dashboard. È la disciplina continua:
strumentazione, manutenzione delle definizioni e la potatura periodica che
questo argomento raccomanda. Quel costo totale di proprietà è reale ma modesto
rispetto al costo dell'alternativa, cioè una grande organizzazione che prende
decisioni tecnologiche da molti milioni sulla base di chi ha argomentato nel
modo più persuasivo nella stanza. Il ritorno di un programma di metriche non
sono le metriche stesse, ma le decisioni rese migliori grazie a esse.

## Antipattern e insidie

- **Misurare tutto ciò che lo strumento esporta:** trasforma una dashboard in
  rumore e invita alla manipolazione su una superficie enorme senza un
  corrispondente valore decisionale.
- **Metriche senza una decisione nominata:** decorazione che costa fatica di
  manutenzione e non dice nulla di azionabile a nessuno.
- **Deriva silenziosa dall'uso diagnostico a quello valutativo:** il modo
  singolo più rapido di distruggere la fiducia in un numero.
- **Trattare una metrica come un fatto invece che come un'ipotesi:** un proxy
  che due anni fa era giusto può essere sbagliato oggi, e nessuno controlla.
- **Confondere l'assenza di un brutto numero con la presenza di uno buono:** una
  metrica che non guardi mai non può dirti che qualcosa non va.
- **Costruire la capacità di misurazione prima di decidere che cosa decidere:**
  la strumentazione in cerca di una domanda spreca tempo di ingegneria reale.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche, se esistono, sono estemporanee,
  personali di chi le ha costruite, e nessuno sa dire quale decisione ciascuna
  di esse informi.
- **Livello 2, Sviluppo (Develop):** Esiste un insieme base di metriche per
  alcuni team, per lo più copiato da un framework o dalle impostazioni
  predefinite di uno strumento, senza un chiaro legame con una decisione.
- **Livello 3, Standardizzazione (Standardize):** Ogni metrica monitorata ha
  uno scopo documentato e una classificazione esplicita diagnostica o
  valutativa, applicata in modo coerente in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Le metriche sono riesaminate con cadenza
  fissa rispetto alle decisioni che informano; quelle che smettono di
  guadagnarsi il posto vengono ritirate, e l'intero insieme è misurato nel
  costo oltre che nel valore.
- **Livello 5, Orchestrazione (Orchestrate):** La misurazione è una capacità
  viva: l'organizzazione individua di routine i propri punti ciechi, verifica
  se i suoi proxy seguono ancora la realtà e tratta il programma di metriche
  stesso come qualcosa da migliorare, non solo da mantenere.

## Spunti di discussione

1. Quale metrica della nostra dashboard faremmo più fatica a giustificare di mantenere se ce lo chiedessero oggi?
2. Quale decisione abbiamo preso nell'ultimo trimestre usando una metrica, anziché un'opinione?
3. Dove nella nostra organizzazione una metrica diagnostica è diventata in silenzio valutativa?
4. Che cosa abbiamo paura di misurare, e perché?
5. Se il nostro programma di metriche sparisse domani, quali decisioni peggiorerebbero?

## Punti chiave

- La misurazione esiste per servire le **decisioni**, non per esistere di per
  sé; una metrica senza una decisione collegata è decorazione.
- Mantieni separato l'uso **diagnostico** dall'uso **valutativo**, per
  iscritto, e fai attenzione alla deriva silenziosa dall'uno all'altro.
- Tratta ogni metrica come un'**ipotesi** su ciò che rappresenta, non come un
  fatto acquisito, e riesamina quell'ipotesi con una certa cadenza.
- Il silenzio, cioè scegliere di non misurare qualcosa, è esso stesso una
  decisione con conseguenze; rendi visibili i punti ciechi invece di lasciarli
  invisibili per impostazione predefinita.
- Il costo totale di un programma di metriche è reale; confrontalo
  esplicitamente con il valore decisionale che ciascuna metrica fornisce.

## Riferimenti e letture di approfondimento

- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren,
  Jez Humble e Gene Kim (il fondamento di ricerca della misurazione
  dell'ingegneria basata sui risultati).
- *How to Measure Anything*, di Douglas W. Hubbard (un framework generale per
  quantificare ciò che sembra non misurabile).
- *Measuring and Managing Performance in Organizations*, di Robert D. Austin
  (l'analisi fondativa delle disfunzioni che la misurazione può introdurre in
  un'organizzazione).
- *Thinking, Fast and Slow*, di Daniel Kahneman (i bias cognitivi che rendono
  il giudizio non assistito un sostituto inaffidabile della misurazione).
- Il programma DevOps Research and Assessment (DORA) di Google,
  [dora.dev](https://dora.dev/) (la ricerca continuativa State of DevOps su cui
  questo libro si basa ovunque).
