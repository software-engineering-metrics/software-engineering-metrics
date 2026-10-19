# Redazione: scrivere e modificare gli argomenti

## Prima di scrivere

- Leggi le [regole di stile](style-rules.md) e `spec/conventions.md` nella radice
  del repository.
- Controlla `spec/structure.md` nella radice del repository per vedere dove si colloca
  l'argomento e quale numero debba avere.

## Scrivere un nuovo argomento

1. Scegli la parte e il prossimo numero decimale libero in quella parte. La numerazione
   è contigua, quindi un nuovo argomento prende di solito il numero successivo
   all'ultimo della sua parte.
2. Crea `locales/en-gb-oxendict/topics/PP-CC-slug.md` (prefisso con zeri iniziali e
   trattini, per esempio `02-01-...`) a partire dal
   [modello di argomento](chapter-template.md). Scrivilo con l'ortografia oxfordiana
   (vedi `spec/oxford-spelling.md`); non modificare mai direttamente gli altri tre
   locale.
3. Scrivi seguendo il modello. Ogni argomento di contenuto richiede tutte le sue
   sezioni: panoramica, principi chiave, raccomandazioni, compromessi (con una tabella),
   domande di discussione, una prospettiva settoriale (startup, piccola impresa,
   enterprise, settore pubblico), esempi (uno enterprise e uno del settore pubblico),
   business case, antipattern, un modello di maturità a cinque livelli, spunti di
   discussione, punti chiave e riferimenti.
4. Nomina il vettore di manipolazione. Ogni famiglia di metriche richiede una risposta
   esplicita a «come fa un team a far apparire bene questo numero senza migliorare ciò
   che misura, e quale guardrail lo intercetta» (vedi l'argomento 1.2).
5. Definisci i termini al primo uso. Aggiungi collegamenti a Wikipedia ai concetti
   chiave alla prima menzione, solo nella prosa.
6. Rimanda agli argomenti correlati per numero decimale, per esempio «(argomento 2.1)».
7. Aggiungi l'argomento a `spec/structure.md`.
8. Se l'introduzione della parte (N.0) elenca i suoi argomenti, aggiungi lì una voce.
9. Esegui `python3 tools/localize.py` per derivare l'argomento in `en-001`, `en-gb` e
   `en-us`.
10. Esegui `just nav`, poi `just test`.

## Modificare un argomento esistente

- Mantieni intatti l'ordine e i titoli delle sezioni. I test controllano che gli
  argomenti di contenuto abbiano ancora ogni sezione richiesta.
- Preserva definizioni nel testo, collegamenti a Wikipedia, tabelle e l'elenco dei
  riferimenti, a meno che la modifica riguardi specificamente quelli.
- Non introdurre trattini lunghi né le formule vietate. Se stai riformulando, riscrivi
  la frase anziché inserire un trattino.
- Esegui poi `python3 tools/localize.py` per derivare di nuovo `en-001`, `en-gb` e
  `en-us` dalla fonte `en-gb-oxendict` modificata.

## Rinominare o rinumerare

- Rinomina il file in `locales/en-gb-oxendict/`, aggiorna il suo titolo `# N.M Titolo`,
  aggiorna `spec/structure.md` e aggiorna ogni rimando che punta al vecchio numero.
- Esegui `python3 tools/localize.py` per rinominare il file anche negli altri tre
  locale (li deriva tutti e quattro dagli stessi percorsi relativi).
- Esegui `just nav` e `just test`. I test segnaleranno una discrepanza tra H1 e nome
  del file, un buco di numerazione, un locale derivato dalla fonte che se ne sia
  allontanato o un collegamento rotto.

## Promemoria sul tono

Scrivi come un collega esperto che vuole che chi legge riesca. Caldo, semplice, diretto e
utile. Frasi brevi. Niente riempitivi.
