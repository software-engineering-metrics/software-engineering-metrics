# 7.0 Introduzione alla Parte 7: Metriche nell'era dell'IA

Ogni metrica di questo libro finora è stata costruita per un mondo in cui scrivere
codice era la risorsa scarsa e faticosa. Gli strumenti di IA generativa hanno cambiato
quella premessa più in fretta di quanto le metriche della maggior parte delle
organizzazioni siano riuscite a adeguarsi. Quando uno strumento può produrre in pochi
secondi una pull request dall'aspetto plausibile, diverse metriche trattate nelle parti
precedenti, i conteggi di attività nel modo più diretto (argomento 3.4), e in misura
reale la frequenza di rilascio grezza (argomento 2.10) e persino la copertura dei test
(argomento 4.2) se perseguita con leggerezza, smettono di misurare ciò che misuravano.
Questa parte esiste perché un programma di metriche che non fa i conti
esplicitamente con questo cambiamento rischia di riportare con sicurezza numeri
diventati in silenzio privi di significato, o peggio, attivamente controproducenti.

I quattro argomenti di questa parte tracciano un arco deliberato. L'argomento 7.1
nomina direttamente il cambiamento e spiega perché si tratta di un cambio di
paradigma e non di un aggiustamento incrementale. L'argomento 7.2 tratta come misurare
davvero se lo sviluppo assistito dall'IA stia aiutando, usando la disciplina dei
risultati prima dell'output stabilita dall'argomento 1.3 fin dall'inizio di questo
libro. L'argomento 7.3 nomina i nuovi rischi specifici che questo cambiamento
introduce: metriche che si gonfiano senza un valore corrispondente e una diluizione
della qualità che supera l'attuale capacità del settore di rilevarla. L'argomento 7.4
chiude la parte con la risposta di questo libro all'intero cambiamento: una svolta
deliberata verso la telemetria dei risultati come le metriche che contano di più,
proprio perché il volume di output, sostiene questa parte in tutto il suo svolgimento,
non è mai stato la cosa giusta da ottimizzare, e l'IA generativa ha semplicemente reso
quella verità impossibile da ignorare ancora.

Per i team grandi, questa parte è urgente anziché speculativa. Le organizzazioni
enterprise che adottano su larga scala assistenti di codifica basati sull'IA hanno
bisogno di sapere in fretta se le loro metriche esistenti significhino ancora ciò che
pensano; le organizzazioni governative, che spesso si muovono con più cautela
sull'adozione dell'IA ma affrontano lo stesso cambiamento di fondo degli strumenti nel
settore più ampio da cui assumono e rispetto a cui fanno benchmark, hanno bisogno delle
indicazioni di questa parte per interpretare correttamente i benchmark di settore man
mano che quegli stessi benchmark si spostano sotto la stessa pressione.

## Argomenti di questa parte

- **7.1 Il cambio di paradigma dell'IA generativa:** Perché si tratta di un
  cambiamento fondamentale in ciò che diverse metriche esistenti misurano, non solo di
  un nuovo strumento da aggiungere alla cassetta degli attrezzi.
- **7.2 Misurare lo sviluppo software assistito dall'IA:** Come misurare se
  l'assistenza dell'IA stia davvero aiutando, usando dati sui risultati anziché il
  volume di output.
- **7.3 Rischi di gonfiatura delle metriche e di diluizione della qualità:** I nuovi
  rischi specifici di manipolazione e di qualità che questo cambiamento introduce, e
  come difendersene.
- **7.4 La telemetria dei risultati come nuova stella polare:** La risposta di questo
  libro all'intero cambiamento: una svolta deliberata e permanente verso le metriche
  di risultato man mano che l'output diventa economico.

## Come si collegano tra loro questi argomenti

L'argomento 7.1 stabilisce perché questa parte esista; l'argomento 7.2 dà le
indicazioni pratiche di misurazione che il cambiamento richiede; l'argomento 7.3 nomina
le specifiche modalità di fallimento da cui un'organizzazione deve difendersi mentre
adotta lo sviluppo assistito dall'IA; e l'argomento 7.4 generalizza la lezione in un
principio permanente che sopravvive a qualsiasi strumento o fornitore specifico.
Questa parte è meno una famiglia di metriche autonoma, nel modo in cui le Parti dalla
2 alla 6 coprono ciascuna un dominio distinto, e più una lente applicata a ritroso
sull'intero libro: le metriche di attività, di output e anche alcune metriche di
risultato di ogni argomento precedente vanno riesaminate attraverso le domande di
questa parte man mano che lo sviluppo assistito dall'IA diventa pratica standard e non
eccezionale.

Questa parte si ricollega più direttamente al principio dei risultati prima
dell'output dell'argomento 1.3 e all'avvertimento dell'argomento 3.4 contro le metriche
di attività, entrambi trattati da questa parte come corretti da sempre, ora dimostrati
con urgenza da un cambiamento tecnologico che rende il loro opposto, misurare per
volume, attivamente pericoloso anziché semplicemente non ottimale. Prepara inoltre le
indicazioni pratiche della Parte 8 sulla costruzione di un programma di metriche, dato
che una dashboard progettata prima di questo cambiamento richiede una riconsiderazione
deliberata, non solo un aggiustamento incrementale, alla luce di ciò che questa parte
tratta.
