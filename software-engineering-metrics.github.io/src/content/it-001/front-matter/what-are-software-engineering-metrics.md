# Che cosa sono le metriche dell'ingegneria del software?

Le [metriche dell'ingegneria del software](https://en.wikipedia.org/wiki/Software_metric)
sono misure quantitative usate per valutare, tracciare e migliorare la qualità,
l'efficienza e l'impatto dei processi, dei prodotti e dei team di sviluppo software. Se
fatte bene, agiscono come strumenti diagnostici sistemici: portano alla luce i colli di
bottiglia operativi, giustificano la rimediazione del debito tecnico e allineano
l'attività di ingegneria a risultati di business concreti. Se fatte male, distorcono il
comportamento, danneggiano la fiducia e premiano esattamente le cose sbagliate.

Questo libro esiste perché la maggior parte dei team ricorre alle metriche prima di
aver deciso a *che cosa* serva una metrica. Una dashboard si riempie di tutto ciò che è
facile da contare, un team dirigente comincia a chiedere «questo numero è su o giù», e
nel giro di un trimestre il team sta ottimizzando il numero anziché il risultato che
doveva rappresentare. Quel fallimento ha un nome, la
[legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): quando una misura
diventa un obiettivo, smette di essere una buona misura. Ogni argomento di questo libro
è scritto con quella legge alle spalle.

## I due framework fondativi

Il settore è in gran parte convergente su due framework basati sulla ricerca per
misurare la consegna dell'ingegneria e la salute dei team.

Le **[metriche DORA](https://dora.dev/guides/dora-metrics/)** (dal programma DevOps
Research and Assessment) misurano il throughput e la stabilità del sistema: frequenza
di rilascio, lead time dei cambiamenti, tasso di fallimento dei cambiamenti e tempo di
ripristino dopo un rilascio fallito. La Parte 2 di questo libro le tratta tutte e
quattro in un argomento di riferimento dedicato, accanto al Flow Framework che usa per
organizzare più in generale le metriche di consegna e di flusso, perché DORA misura bene
la meccanica della pipeline ma non dice nulla su che tipo di valore stia scorrendo
nella pipeline.

Il **[framework SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, creato da
ricercatori di Microsoft, GitHub e dell'Università di Victoria, contrappesa il throughput
grezzo con l'esperienza degli sviluppatori su cinque dimensioni: soddisfazione e
benessere, prestazioni, attività, comunicazione e collaborazione, ed efficienza e
flusso. La Parte 3 lo tratta in profondità.

Oltre a questi due framework, i team tracciano metriche localizzate raggruppate per
dominio: metriche di codice e qualità (Parte 4), metriche di prodotto e di business
(Parte 5) e metriche di affidabilità, operatività e sicurezza (Parte 6). La Parte 7
affronta un cambiamento già in corso: gli strumenti di IA generativa hanno reso il
codice grezzo prodotto quasi gratuito, il che significa che diverse metriche su cui il
settore ha fatto affidamento per un decennio non significano più ciò che significavano.

## A chi è rivolto

Il pubblico principale sono le persone che scelgono che cosa un team misura e perché:
dirigenti di ingegneria, staff e principal engineer, team di piattaforma e DevOps, e
responsabili di programma e di prodotto che costruiscono per la prima volta una
dashboard o uno scorecard di metriche, o ne riparano uno che ha cominciato a distorcere
il comportamento. Il pubblico secondario è qualsiasi ingegnere che voglia capire perché
la propria organizzazione tracci ciò che traccia, e come reagire quando una metrica
viene usata male.

## Come leggerlo

Parti da qui, poi leggi l'[introduzione](introduction.md) per sapere come è organizzato
il libro, oppure vai direttamente al [sommario](table-of-contents.md). Ogni argomento si regge da
solo: enuncia prima i propri principi, dà raccomandazioni concrete, indica come la
metrica che tratta viene manipolata e si chiude con un modello di maturità, domande di
discussione e riferimenti. Non serve leggere il libro da cima a fondo per usarlo.
