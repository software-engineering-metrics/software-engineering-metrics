# Regole di stile (condivise, imponibili)

Lo stile della casa in un unico posto. Le voci contrassegnate con «(test)» sono imposte
da `tests/validate.py`; una violazione fa fallire la build. La versione narrativa
completa è `spec/conventions.md` nella radice del repository.

## Regole rigide

- **Niente trattini lunghi (em-dash).** Non usare mai «—» (U+2014). Usa una virgola, i
  due punti, le parentesi o due frasi. I trattini medi (en-dash) «–» sono ammessi solo
  negli intervalli numerici come `1–9` o `2.1–2.8`. (test)
- **Niente formule fatte.** Non usare «not only ... but also», «but also» né
  «load-bearing». Evita «It's important to note», «In today's fast-paced world»,
  «It's crucial to consider», «It appears that», «One could argue» e la formula «it's not
  just X, it's Y». (test, per le prime tre)
- **Definisci i termini al primo uso.** Espandi gli acronimi e definisci il gergo la
  prima volta che ogni argomento li usa, per esempio «tempo medio di ripristino (MTTR)».
- **Collega i concetti chiave a Wikipedia** alla prima menzione, una volta per
  argomento, solo nella prosa. Forma: `[termine](https://en.wikipedia.org/wiki/Titolo_Articolo)`.
  Mai in titoli, tabelle, codice o nella sezione dei riferimenti. (la forma del
  collegamento è un test)
- **Solo riferimenti reali.** Autore e titolo di opere autentiche. Nessun titolo, autore
  o URL inventato.
- **Nomina il vettore di manipolazione.** Un argomento su una famiglia di metriche
  indica come la metrica viene manipolata e quale guardrail lo intercetta (argomento 1.2).

## Voce

- Calda, diretta, incoraggiante. Rivolgiti a chi legge dandogli del «tu». Frasi brevi,
  parole semplici. Parti dal punto.
- Con opinioni e pratica. Neutrale rispetto ai fornitori. Nomina i prodotti solo come
  esempi fattuali.

## Struttura (test)

- Gli argomenti di contenuto usano l'esatto ordine delle sezioni del
  [`modello-di-argomento.md`](chapter-template.md).
- Il primo titolo è `# N.M Titolo` (numero decimale dell'argomento), e corrisponde al
  prefisso `PP-CC` con zeri iniziali del nome del file.
- La numerazione all'interno di ogni parte è contigua e parte da N.0.

## Dopo la modifica

- Se hai cambiato l'insieme degli argomenti, aggiorna `spec/structure.md` ed esegui
  `just nav`.
- Esegui sempre `just test`.
