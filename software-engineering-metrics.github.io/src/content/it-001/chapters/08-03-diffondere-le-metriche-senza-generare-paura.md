# 8.3 Diffondere le metriche senza generare paura

## Panoramica e motivazione

Questo argomento è, in senso reale, il culmine pratico di tutto ciò che questo libro ha
sostenuto da quando l'argomento 1.2 ha introdotto la legge di Goodhart: un programma di
metriche diffuso male, in un modo che provoca paura anziché fiducia, garantisce
esattamente il comportamento di manipolazione da cui ogni argomento successivo ha messo
in guardia, a prescindere da quanto accuratamente sia stata progettata ogni singola
metrica. Un'organizzazione può fare giusto ogni dettaglio tecnico, visualizzazione
onesta, abbinamento ai guardrail, governance accurata, e produrre comunque un
programma di metriche corrotto e inaffidabile se la diffusione stessa insegna agli
ingegneri che questi numeri esistono per giudicarli anziché per aiutarli.

Il meccanismo è semplice e ben documentato nella ricerca sul comportamento
organizzativo che questo libro ha citato ovunque: le persone che temono che una
metrica venga usata contro di loro, minando la [sicurezza psicologica](https://en.wikipedia.org/wiki/Psychological_safety),
rispondono esattamente come l'argomento 1.2 prevede, ottimizzano il numero anziché la
realtà sottostante, perché l'incentivo a proteggersi è immediato e personale mentre il
danno all'apprendimento organizzativo è diffuso e ritardato. Non è un fallimento di
carattere individuale; è una risposta razionale a una minaccia reale, e l'unica
correzione durevole è rimuovere la minaccia, non chiedere alle persone di comportarsi
con più onestà nonostante essa.

Per i team grandi, le indicazioni di questo argomento contano più acutamente nel momento
della diffusione iniziale, quando la fiducia non è ancora stabilita in un senso o
nell'altro e le prime impressioni fissano aspettative durature. Le organizzazioni
enterprise che introducono un nuovo programma di metriche a livello di organizzazione
rischiano che un solo episodio iniziale gestito male, le metriche di un team usate in
modo punitivo, avveleni la fiducia nell'intera diffusione; le organizzazioni
governative, che introducono spesso programmi di metriche in un contesto di tutele
sindacali esistenti, di cultura del pubblico impiego o di storica sfiducia verso le
iniziative di misurazione, hanno bisogno che le indicazioni di questo argomento siano
applicate con particolare cura e pazienza.

## Principi chiave

- **La paura corrompe i dati più in fretta e più a fondo di qualsiasi difetto tecnico
  nel progetto di una metrica.** Una metrica perfettamente progettata e diffusa male
  viene comunque manipolata.
- **La fiducia si stabilisce attraverso un uso non punitivo dimostrato e coerente, non
  con la sola dichiarazione di una policy.** Le azioni su più cicli costruiscono
  fiducia; le parole da sole no.
- **Gli episodi iniziali della diffusione fissano aspettative durature.** Le prime
  volte in cui una metrica tocca qualcosa di rilevante determinano come l'intero
  programma verrà percepito d'ora in poi.
- **La trasparenza su scopo e processo riduce la paura più della sola rassicurazione.**
  Le persone si fidano di ciò che possono vedere e capire, non solo di ciò che viene
  loro detto.
- **È una disciplina organizzativa sostenuta, non un annuncio di diffusione una
  tantum.** La paura può rientrare gradualmente anche dopo un inizio davvero
  affidabile.

## Raccomandazioni

### Comunica esplicitamente scopo e non-obiettivi, prima della diffusione, non dopo che le preoccupazioni sono sorte

Seguendo la disciplina della carta delle metriche dell'argomento 1.4, comunica lo scopo
di un nuovo programma di metriche e, in modo critico, i suoi non-obiettivi espliciti (mai
usato per la valutazione delle prestazioni individuali senza una policy separata e
chiaramente dichiarata, secondo l'argomento 1.1) prima del lancio, non in reazione dopo
che gli ingegneri hanno già cominciato a preoccuparsi. Una trasparenza proattiva e
anticipata su ciò per cui una metrica non va usata previene la speculazione ansiosa che
altrimenti riempie il vuoto e plasma impressioni iniziali difficili da invertire.

### Coinvolgi nel processo di progettazione le persone misurate

Gli ingegneri che aiutano a progettare le metriche che descriveranno il proprio lavoro
hanno molta meno probabilità di temerle o di risentirsene di quelli a cui viene imposto
un sistema senza alcun contributo. Coinvolgi direttamente i rappresentanti dei team nella
scelta di quali metriche tracciare, di come visualizzarle e di quali guardrail
applicare, seguendo l'enfasi costante di questo libro sulla responsabilità a livello di
team (argomento 1.4) anziché su un mandato puramente dall'alto.

### Comincia con un uso solo diagnostico e dimostralo su più cicli prima di considerare anche solo un uso valutativo

Seguendo direttamente la distinzione tra diagnostico e valutativo dell'argomento 1.1:
inizia un nuovo programma di metriche in modalità puramente diagnostica, usato solo per
capire e migliorare i sistemi, senza alcun collegamento con la valutazione di individui
o team, e sostieni visibilmente quella disciplina per diversi cicli di rendicontazione
prima ancora che cominci una conversazione su un uso più ampio. La fiducia costruita in
questo modo, attraverso una moderazione dimostrata nel tempo, è molto più durevole di
quella rivendicata con il solo documento di una policy.

### Rispondi subito e in modo visibile al primo episodio gestito male

Se una metrica viene usata in modo punitivo, anche una sola volta, anche
informalmente, affrontalo subito, in modo visibile e diretto, anziché lasciarlo passare
in silenzio. La risposta di un'organizzazione al suo primo episodio di cattiva gestione
è sproporzionatamente importante nel plasmare la fiducia dell'intero team o
dell'organizzazione nell'intero programma d'ora in poi; una correzione rapida e
trasparente segnala un genuino impegno verso lo scopo dichiarato di non punire, mentre
il silenzio o un'eccezione silenziosa e non affrontata conferma proprio la paura che
spinge in primo luogo al comportamento di manipolazione.

### Fai del rischio di manipolazione stesso una conversazione condivisa e trasparente, non una preoccupazione nascosta della dirigenza

Anziché trattare il rischio di manipolazione come qualcosa di cui la dirigenza si
preoccupa in privato, condividi apertamente con i team misurati la logica di
abbinamento ai guardrail dell'argomento 1.2: spiega direttamente perché esiste uno
specifico guardrail, quale schema di manipolazione sia progettato per cogliere e invita
il contributo del team stesso sul fatto che il guardrail sia ben progettato. Questa
trasparenza, che inquadra l'intero team come partner nell'impedire la manipolazione
anziché come soggetti sorvegliati per essa, costruisce con il programma di metriche un
rapporto fondamentalmente diverso da un sistema che sorveglia in silenzio la
manipolazione dall'alto senza mai discutere apertamente del rischio.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Mandato dall'alto con minimo coinvolgimento dei team | Rapido da diffondere, progetto coerente | Alto rischio di manipolazione dettata dalla paura e di scarsa fiducia fin dall'inizio |
| Diffusione coinvolgente e co-progettata con i team | Costruisce fiducia e adesione genuine, minore rischio di manipolazione | Più lenta da diffondere, richiede più sforzo di coordinamento |
| Uso valutativo immediato dal primo giorno | Sembra efficiente, collega rapidamente metriche e conseguenze | Provoca il massimo di paura e di rischio di manipolazione prima che si sia stabilita alcuna fiducia |
| Periodo prolungato di prova solo diagnostica prima di qualsiasi uso valutativo | Costruisce una fiducia durevole e basata sulle prove | Più lenta nel realizzare qualsiasi caso d'uso valutativo che la dirigenza possa infine volere |

La tensione centrale è **velocità di diffusione contro costruzione della fiducia**. Una
diffusione rapida e dall'alto fa partire in fretta un programma di metriche ma con il
rischio reale di provocare esattamente la paura e la manipolazione da cui questo libro
ha messo in guardia fin dal suo argomento d'apertura; una diffusione più lenta,
coinvolgente e a priorità diagnostica richiede più tempo ma costruisce la fiducia
durevole che rende i dati risultanti davvero degni di essere raccolti. Si risolve la
tensione in modo fermo a favore della costruzione della fiducia, dato che un programma di
metriche che parte in fretta ma produce dati manipolati e inaffidabili non ha, in senso
reale, ottenuto nulla di ciò che questo libro ha sostenuto, per quanto rapidamente sia
stato attivato.

## Domande da discutere con il vostro team

1. **Lo scopo e i non-obiettivi espliciti del nostro attuale programma di metriche sono
   stati comunicati prima della diffusione, o gli ingegneri ne hanno saputo per primi
   e solo dopo hanno sentito rassicurazioni su come sarebbe stato usato?** Se la
   rassicurazione è arrivata in reazione anziché in modo proattivo, quella stessa
   sequenza può già aver plasmato negativamente la fiducia iniziale, cosa che merita di
   essere nominata con onestà.

2. **Le persone misurate sono state coinvolte nel progettare le metriche che descrivono
   il proprio lavoro, o il sistema è stato imposto senza alcun contributo?** Valutate il
   vostro processo di diffusione effettivo rispetto a questa specifica prova, dato che il
   coinvolgimento conta indipendentemente da quanto sia risultato buono il progetto
   della metrica.

3. **Il nostro programma di metriche ha sostenuto un uso davvero solo diagnostico per
   più cicli di rendicontazione, o l'uso valutativo si è insinuato prima di quanto
   raccomandi una diffusione che costruisce fiducia?** Ricostruite onestamente la
   storia effettiva; la deriva qui avviene spesso gradualmente e in modo informale
   anziché attraverso un singolo cambio esplicito di policy.

4. **Una metrica è mai stata usata in modo punitivo, anche una sola volta, anche
   informalmente, e come ha risposto l'organizzazione?** Se è successo, valutate con
   onestà se la risposta sia stata rapida e visibile o silenziosa e non affrontata,
   dato che quella risposta ha plasmato la fiducia nell'intero programma molto più
   dell'episodio originale stesso.

5. **I team misurati capiscono perché esista ciascun guardrail, o la logica di
   prevenzione della manipolazione resta una preoccupazione privata della dirigenza di
   cui non vengono mai informati direttamente?** Discutete se il ragionamento
   dell'organizzazione sui guardrail (argomento 1.2) sia stato davvero condiviso in
   modo trasparente o sia rimasto un elemento di progetto non dichiarato e dietro le
   quinte.

6. **Se ricominciassimo da zero la diffusione delle nostre metriche oggi, applicando
   per intero le indicazioni di questo argomento, quanto sarebbe diverso il processo da
   quello che è effettivamente accaduto?** Questo esperimento mentale retrospettivo
   rivela spesso punti specifici e nominabili in cui la costruzione della fiducia è
   stata accorciata sotto pressione di tempo, da cui vale la pena imparare anche se la
   diffusione originale non può essere disfatta.

## Prospettiva settoriale

**Startup.** La fiducia è spesso più facile da stabilire a questa scala, dato che la
conversazione diretta quotidiana offre naturalmente la trasparenza che questo
argomento raccomanda. Il rischio è saltare la comunicazione deliberata di scopo e
non-obiettivi semplicemente perché sembra superflua in un team piccolo e unito, un
presupposto che può cedere in silenzio man mano che il team cresce e arrivano nuovi
assunti senza lo stesso contesto condiviso.

**Piccola impresa.** Una conversazione semplice e diretta su perché viene introdotta una
nuova metrica e su ciò per cui sarà e non sarà usata, tenuta prima della diffusione e
non dopo che emergono le preoccupazioni, cattura la maggior parte del valore di
questo argomento senza bisogno di un processo formale a questa scala.

**Enterprise.** La scala e l'impersonalità di una grande organizzazione rendono le
indicazioni di questo argomento sia più difficili da eseguire bene sia più critiche da
fare giuste, dato che un solo episodio gestito male può avvelenare la fiducia in decine
di team che ne sentono parlare di seconda mano anziché viverlo direttamente. Investite
in modo deliberato nel periodo prolungato di prova a priorità diagnostica che questo
argomento raccomanda, e stabilite un protocollo di risposta chiaro, rapido e visibile
per qualsiasi episodio di uso improprio di una metrica prima che ne capiti uno.

**Settore pubblico.** Le organizzazioni del settore pubblico introducono spesso
programmi di metriche in un contesto di tutele sindacali esistenti, di consolidata
cultura del pubblico impiego e, in alcuni casi, di storica sfiducia verso iniziative di
misurazione legate a controversie passate sulla gestione delle prestazioni. Applicate le
indicazioni di questo argomento con particolare pazienza e formalità, coinvolgendo
potenzialmente direttamente nel processo di progettazione il contributo di
rappresentanti sindacali o del personale, e aspettatevi che i tempi di costruzione della
fiducia siano davvero più lunghi che in un tipico contesto privato.

## Esempi

**Enterprise.** La diffusione iniziale, da parte di un'azienda software, di una
dashboard completa di metriche di ingegneria, progettata interamente da un team centrale
di piattaforma senza contributi dai team, fu accolta da una diffusa e silenziosa
resistenza: gli ingegneri di tutta l'organizzazione cominciarono in modo informale a
manipolare i propri numeri riportati nel giro di settimane, esattamente come l'argomento
1.2 prevede per un sistema di metriche dall'alto e ritenuto inaffidabile. Un
rilancio sei mesi dopo, questa volta con rappresentanti dei team coinvolti direttamente
nella scelta delle metriche e nella progettazione dei guardrail, e con l'impegno
esplicito, poi davvero sostenuto, a un periodo di sei mesi di sola diagnostica prima di
qualsiasi conversazione su un uso più ampio, produsse nell'arco di un anno dati
misurabilmente più affidabili: una verifica interna che confrontava i conteggi di
rilascio autodichiarati e quelli strumentati dalla pipeline scoprì che il divario tra i
due si era ridotto sostanzialmente rispetto ai primi mesi della diffusione originale.

**Settore pubblico.** Il primo tentativo di un'agenzia di un governo statale di
introdurre metriche di ingegneria era stato abbandonato del tutto due anni prima dopo un
singolo episodio in cui un manager aveva fatto riferimento in modo informale ai dati di
attività di un individuo in una conversazione sulle prestazioni, un episodio isolato ma
non affrontato che aveva avvelenato per anni la fiducia nell'intera iniziativa in tutta
l'agenzia, con il personale che continuava a parlare con evidente scetticismo di «quella
storia delle metriche» molto dopo che il programma originale era stato messo da parte in
silenzio. Un nuovo programma, deliberatamente rilanciato, affrontò esplicitamente e
pubblicamente questa storia, riconoscendo la cattiva gestione passata, impegnandosi a
una specifica policy pubblicata di uso non punitivo con uno sponsor esecutivo
responsabile con nome e stabilendo un protocollo di risposta rapido e trasparente per
qualsiasi futura preoccupazione di uso improprio. Questo esplicito riconoscimento del
fallimento passato, anziché rilanciare come se la storia non esistesse, fu attribuito
in modo specifico dai rappresentanti del personale come il motivo per cui il secondo
tentativo si guadagnò una fiducia genuina dove il primo non ci era riuscito.

## Business case: motivazioni, ROI e TCO

Il ritorno di una diffusione che costruisce fiducia ed evita la paura è, molto
semplicemente, dati affidabili, senza i quali tutto il lavoro accurato di progettazione
delle metriche di ogni altro argomento di questo libro non produce nulla di reale
valore. L'esempio enterprise qui sopra lo mostra in modo concreto e misurabile: i dati
del programma rilanciato erano dimostrabilmente più accurati di quelli della diffusione
originale dettata dalla paura, un ritorno diretto e quantificabile dell'investimento
aggiuntivo nella costruzione della fiducia.

Il costo totale di proprietà è principalmente tempo e pazienza organizzativa: il periodo
prolungato di prova a priorità diagnostica, lo sforzo di coinvolgimento dei team nella
progettazione e la disciplina sostenuta di rispondere in fretta e in modo visibile a
qualsiasi episodio di uso improprio. Quel costo è significativo ma è il prezzo
necessario e inevitabile dei dati affidabili da cui ogni altro argomento di questo
libro dipende; una diffusione rapida che salta questo investimento produce un programma
di metriche che sembra completo ma è in silenzio privo di valore, corrotto proprio dalla
manipolazione da cui questo libro ha messo in guardia fin dal suo primo argomento
sostanziale.

## Antipattern e insidie

- **Una diffusione dall'alto senza coinvolgimento dei team nel progetto delle
  metriche:** provoca paura e manipolazione fin dall'inizio, a prescindere da quanto
  bene siano progettate le metriche stesse.
- **Comunicazione reattiva anziché proattiva di scopo e non-obiettivi:** lascia che la
  speculazione ansiosa riempia il vuoto e plasmi impressioni iniziali difficili da
  invertire.
- **Affrettarsi verso l'uso valutativo prima che sia trascorso un genuino periodo di
  fiducia solo diagnostica:** il modo singolarmente più comune in cui un nuovo
  programma di metriche provoca subito comportamenti di manipolazione.
- **Una risposta silenziosa e non affrontata a un episodio di uso improprio di una
  metrica:** conferma la stessa paura che spinge alla manipolazione e fa un danno
  duraturo alla fiducia nell'intero programma.
- **Tenere la logica dei guardrail e della prevenzione della manipolazione come
  preoccupazione privata della dirigenza:** perde l'occasione di costruire fiducia
  condividendo in modo trasparente il ragionamento con i team misurati.
- **Rilanciare un programma di metriche già gestito male senza riconoscere
  direttamente il fallimento passato:** ripete l'errore originale di trasparenza
  insufficiente, questa volta aggravato da una storia non affrontata.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche sono diffuse dall'alto senza
  coinvolgimento dei team, e scopo e non-obiettivi sono comunicati in reazione, se lo
  sono.
- **Livello 2, Sviluppo (Develop):** Avviene una certa comunicazione e un certo
  coinvolgimento dei team, ma non c'è un periodo sostenuto di prova solo diagnostica né
  un chiaro protocollo di risposta all'uso improprio.
- **Livello 3, Standardizzazione (Standardize):** I nuovi programmi di metriche sono
  diffusi in modo coerente con comunicazione proattiva, coinvolgimento dei team nella
  progettazione e un periodo di prova solo diagnostica a cui ci si impegna, in tutta
  l'organizzazione.
- **Livello 4, Gestione (Manage):** Esiste, ed è stato messo alla prova, un protocollo
  di risposta all'uso improprio rapido e trasparente, e il ragionamento sui guardrail è
  condiviso apertamente con i team misurati come pratica standard.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha una storia
  dimostrata e sostenuta di dati di metriche affidabili e a bassa manipolazione,
  direttamente attribuibile a una pratica di diffusione disciplinata che costruisce
  fiducia, e questa storia è protetta e rafforzata attivamente a ogni nuova metrica
  introdotta.

## Spunti di discussione

1. Lo scopo del nostro attuale programma di metriche è stato comunicato prima o dopo che sorgessero le preoccupazioni?
2. Le persone misurate sono state davvero coinvolte nel progettare le nostre metriche, o il sistema è stato imposto?
3. La nostra organizzazione ha mai gestito una metrica in modo punitivo, e come abbiamo risposto?
4. I team misurati capiscono perché esistano i nostri guardrail, o quel ragionamento è tenuto privato?
5. Se rilanciassimo oggi il nostro programma di metriche con piena attenzione a questo argomento, che cosa faremmo di diverso?

## Punti chiave

- **La paura corrompe i dati più in fretta e più a fondo di qualsiasi difetto
  tecnico** nel progetto di una metrica; una metrica perfettamente progettata e diffusa
  male viene comunque manipolata.
- **Coinvolgi direttamente i team misurati nel progetto delle metriche**, e comunica
  in modo proattivo scopo e non-obiettivi espliciti, prima della diffusione.
- **Inizia con la sola diagnostica e dimostralo su più cicli** prima di considerare
  anche solo un uso valutativo.
- **Rispondi subito e in modo visibile al primo episodio gestito male**; il silenzio
  conferma la stessa paura che spinge al comportamento di manipolazione.
- **Condividi in modo trasparente il ragionamento sui guardrail e sulla prevenzione
  della manipolazione** con i team misurati, costruendo una partnership anziché un
  rapporto di sorveglianza.

## Riferimenti e letture di approfondimento

- *Drive: The Surprising Truth About What Motivates Us*, di Daniel H. Pink
  (motivazione intrinseca contro estrinseca, direttamente rilevante per capire perché
  la paura corrompa il comportamento guidato dalle metriche).
- *The Tyranny of Metrics*, di Jerry Z. Muller (costi organizzativi e culturali di
  programmi di metriche attuati male).
- *Site Reliability Engineering: How Google Runs Production Systems*, a cura di Betsy
  Beyer, Chris Jones, Jennifer Petoff e Niall Richard Murphy (i principi di cultura
  senza colpa che questo argomento estende dalla risposta agli incidenti alla
  diffusione di un programma di metriche in generale).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (la ricerca sulla cultura organizzativa alla base di una pratica
  di metriche di ingegneria affidabile e ad alte prestazioni).
