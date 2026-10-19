# Registro delle modifiche

Modifiche notevoli al libro e ai suoi strumenti. Le voci più recenti sono in cima. Le
date usano l'ISO 8601 (AAAA-MM-GG).

## [Unreleased]

### Changed

- Aggiunto l'italiano (`it-001`) come 34° locale tradotto completo: tutti i 63 argomenti
  e ogni altra sezione, con i corrispondenti sidecar `.locale-peer-id`. `it-001` è
  collegato al sito e servito su `/it-001/`.
- Aggiunto lo swahili (`sw-001`) come 33° locale tradotto completo: tutti i 63 argomenti
  e ogni altra sezione, con i corrispondenti sidecar `.locale-peer-id`. `sw-001` è
  collegato al sito e servito su `/sw-001/`.
- Aggiunto l'islandese (`is-is`) e `is-001` come 31° e 32° locale tradotti completi:
  tutti i 63 argomenti e ogni altra sezione, con i corrispondenti sidecar
  `.locale-peer-id`, con `is-001` identico nel contenuto a `is-is`. `is-001` è
  collegato al sito e servito su `/is-001/`.
- Sito: il reindirizzamento della pagina radice in base alla lingua del browser ora
  ripiega sul sovrainsieme internazionale di una lingua quando non c'è una
  corrispondenza esatta: `en-AU` va a `/en-001/`, `es-MX` a `/es-001/` e `zh-TW` a
  `/zh-001/`. Un URL alias come `/en/` non rimbalza più su `/en-001/` attraverso il
  selettore di locale.

### Added

- `spec/locales.md` ora richiede che ogni directory di `locales/` sia chiamata
  `<lingua>-<regione>`; i nomi di sole due lettere sono solo alias di URL del sito, e
  `tests/validate.py` lo impone. Non esisteva alcuna directory di due lettere, quindi
  nulla è stato cancellato.
- Aggiunto lo svedese (`sv-001`) come 30° locale tradotto completo: tutti i 63 argomenti
  e ogni altra sezione, con i corrispondenti sidecar `.locale-peer-id`, identico nel
  contenuto a `sv-se`. Collegato al sito e servito su `/sv-001/` (alias `/sv/`).
- Aggiunti il giapponese (`ja-001`), il coreano (`ko-001`) e l'olandese (`nl-001`) come
  dal 27° al 29° locale tradotti completi: tutti i 63 argomenti e ogni altra sezione, con
  i corrispondenti sidecar `.locale-peer-id`, identici nel contenuto a `ja-jp`, `ko-kr` e
  `nl-nl`. Collegati al sito e serviti su `/ja-001/`, `/ko-001/` e `/nl-001/` (alias
  `/ja/`, `/ko/` e `/nl/`).

### Added

- Tradotte le sezioni front-matter, esempi, contributi e progetto (14 file, più un
  registro delle modifiche, un `index.md` iniziale e un sommario per locale) in ogni
  locale tradotto: `ar`, `bn`, `cy`, `de`, `es`, `fr`, `hi`, `id`, `ja`, `ko`, `nl`,
  `pt`, `ru`, `sv`, `ur` e `zh`, con le coppie di locale duplicate (`ar-001`/`ar-eg` e
  così via) mantenute identiche. Le directory usano i nomi per locale di
  `spec/section-names.json`. Il nuovo `tools/gen_translated_nav.py` aggiorna la pagina
  iniziale e il sommario di ogni locale tradotto a partire dai titoli degli argomenti,
  `tests/validate.py` esonera i documenti tradotti su test, regole di stile e indice in
  base al peer id, e `scripts/sync-content.mjs` del sito riporta i nomi di file tradotti
  in queste sezioni ai loro nomi inglesi canonici attraverso i sidecar
  `.locale-peer-id`.

### Changed

- Olandese (`nl-nl`): tradotti i titoli e gli slug inglesi rimanenti degli argomenti
  9.0, 9.3 e 9.4 (`bijlagen`, `controlelijsten`, `sjablonen`).
- Gallese (`cy-001`, `cy-gb`): terminologia allineata a TermCymru: `risg` (rischio, al
  posto di `perygl`, con concordanza di genere), `cyfnewidiad` (compromesso),
  `dangosydd rhagfynegi` e `dangosydd ôl-fynegi` (indicatore anticipatore e
  ritardato, al posto di `hwyrfrydig`), `cynhwysedd` (capacità), `dosraniad`
  (distribuzione), `cydberthynas` (correlazione), `allbwn` per output nell'argomento
  1.3 e `cyfradd gadael staff` (turnover). Quattro slug di argomenti rinominati di
  conseguenza.
- Sito: aggiornato `@lilydesignsystem/svelte-picker-bar` alla 0.2.0, che aggiunge un
  selettore di ricerca alla barra dell'intestazione; invia alla ricerca esistente del
  sito `/?<query>`.
- Aggiunto `scripts/generate-sitemap.mjs`, eseguito alla fine di `pnpm build`, che scrive
  `sitemap.xml` dalle pagine pre-renderizzate (solo URL canonici dei locale, senza
  duplicati di alias di due lettere) così che la riga `Sitemap:` di `robots.txt` si
  risolva.
- `AGENTS.md` è ora un breve indice; i dettagli sono passati a `AGENTS/layout.md`,
  `style.md`, `locales.md` e `workflow.md`.
- Revisione della documentazione: aggiornati `AGENTS.md`, `index.md`, il testo dei
  locale del README generato, `spec/index.md`, `spec/locales.md` e `AGENTS.md` e
  `README.md` del sito per 27 locale, per i nomi delle directory di sezione per locale e
  per i nuovi strumenti; aggiunto `CLAUDE.md` (un puntatore ad `AGENTS.md`); corretti i
  percorsi `docs/` obsoleti in entrambe le skill degli agenti e reso `skills/` la copia
  canonica di `.claude/skills/` (verificato dai test).
- Aggiunti `llms.txt` e `llms.json` (un indice per agenti IA di ogni locale servito e di
  ogni argomento) a `static/` del sito, generati da `tools/gen_llms.py` (`just llms`) e
  verificati dai test.
- Pagina iniziale del sito: l'elenco di riquadri delle «nove parti» è ora un elenco
  annidato «Contenuti» di tutte le parti e gli argomenti, e la sezione «La legge di
  Goodhart, ovunque» è rimossa.
- Riformulato «capitolo» in «argomento» in tutta la prosa del libro in ogni locale (per
  esempio «argomento 2.1», «Argomenti di questa parte»), usando la parola propria di ogni
  lingua per argomento (`tema`, `sujet`, `Thema`, `тема`, `主題` e così via), e nella
  specifica, nel testo generato dagli strumenti e nelle stringhe dell'interfaccia del
  sito. Nomi di file, URL e chiavi delle sezioni sono invariati.
- Tradotti i nomi di ogni directory di sezione sotto `locales/`: `chapters/` è ora
  `topics/` (e la sua traduzione in ogni altro locale, per esempio `temas/`, `sujets/`,
  `themen/`), e `examples/` di `es-001` è `ejemplos/`. I nomi vivono in
  `spec/section-names.json`; gli strumenti, i test e la sincronizzazione dei contenuti
  del sito li leggono da lì, e gli URL del sito sono invariati.

### Changed

- Rivisti i locale gallesi (`cy-001`, `cy-gb`, mantenuti identici) rispetto
  all'elenco terminologico TermCymru del governo gallese: `llesiant` per benessere,
  `cynhyrchiant` per produttività, `gwendid`/`gwendidau` per vulnerabilità,
  `llywodraethiant` per governance, `cydberthynas` per correlazione, `ôl-groniad` per
  backlog (prima lasciato in inglese), `cost a budd` per costi-benefici e
  `deallusrwydd artiffisial (AI)` alla prima menzione dell'IA in ogni argomento.

### Added

- Aggiunto il tedesco (`de-001`) come 26° locale tradotto completo: tutti i 63 argomenti
  con i corrispondenti sidecar `.locale-peer-id`, identico nel contenuto a `de-de`.
  Collegato al sito e servito su `/de-001/` (alias `/de/`).
- Aggiunto il portoghese (`pt-001`) come 25° locale tradotto completo: tutti i 63
  argomenti con i corrispondenti sidecar `.locale-peer-id`, identico nel contenuto a
  `pt-pt`. Collegato al sito e servito su `/pt-001/` (alias `/pt/`).
- Completata una traduzione manuale completa e da zero di tutti i 63 argomenti in urdu
  (`ur-001`, da destra a sinistra), il 24° locale tradotto completo, con i
  corrispondenti sidecar `.locale-peer-id`. Ogni argomento è stato tradotto direttamente
  dalla fonte inglese, l'indice (argomento 9.7) rimappa ogni collegamento interno al
  suo nome di file urdu e la directory di sezione è `موضوعات`. Collegato al sito e
  servito su `/ur-001/` (alias `/ur/`).
- Completata una traduzione manuale completa e da zero di tutti i 63 argomenti in
  indonesiano (`id-001`), con i corrispondenti sidecar `.locale-peer-id`. Non esisteva
  alcun locale indonesiano precedente da cui partire, quindi ogni argomento è stato
  tradotto direttamente dalla fonte inglese, e l'indice (argomento 9.7) rimappa ogni
  collegamento interno al suo nome di file indonesiano. Collegato al sito e servito su
  `/id-001/` (alias `/id/`).
- Aggiunti il russo (`ru-001`) e il cinese (`zh-001`) come 21° e 22° locale tradotti
  completi: tutti i 63 argomenti ciascuno, con i corrispondenti sidecar
  `.locale-peer-id`, identici nel contenuto a `ru-ru` e `zh-cn`. Collegati al sito e
  serviti su `/ru-001/` e `/zh-001/` (alias `/ru/` e `/zh/`).
- Aggiunto il francese (`fr-001`) come 20° locale tradotto completo: tutti i 63 argomenti
  con i corrispondenti sidecar `.locale-peer-id`, identico nel contenuto a `fr-fr`.
  Collegato al sito e servito su `/fr-001/` (alias `/fr/`).
- Aggiunto il bengalese (`bn-001`) come 19° locale tradotto completo: tutti i 63
  argomenti con i corrispondenti sidecar `.locale-peer-id`, identico nel contenuto a
  `bn-bd`. Collegato al sito e servito su `/bn-001/` (alias `/bn/`).
- Aggiunto l'arabo (`ar-001`) come 18° locale tradotto completo: tutti i 63 argomenti
  con i corrispondenti sidecar `.locale-peer-id`, identico nel contenuto a `ar-eg`.
  Collegato al sito e servito su `/ar-001/` (alias `/ar/`).
- Aggiunto il gallese, Gran Bretagna (`cy-gb`) come 17° locale tradotto completo: tutti
  i 63 argomenti con i corrispondenti sidecar `.locale-peer-id`, identico nel contenuto a
  `cy-001` (lo stesso rapporto che `hi-id` ha con `hi-001`). Collegato a
  `SERVED_LOCALE_CODES` del sito e servito su `/cy-gb/`.
- Completata una traduzione manuale completa e da zero di tutti i 63 argomenti in
  olandese, Paesi Bassi (`nl-nl`), con i corrispondenti sidecar `.locale-peer-id` e
  `just test` che passa. Non esisteva alcun locale olandese precedente da cui partire,
  quindi ogni argomento è stato tradotto direttamente dalla fonte inglese. L'indice
  (argomento 9.7) rimappa ogni collegamento interno agli argomenti al suo nome di file
  olandese, seguendo l'approccio usato per `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`,
  `ja-jp`, `ru-ru`, `fr-fr` e `sv-se`. Non ancora collegato al sito.
- Completata una traduzione manuale completa e da zero di tutti i 63 argomenti in
  svedese, Svezia (`sv-se`), con i corrispondenti sidecar `.locale-peer-id` e
  `just test` che passa. Non esisteva alcun locale svedese precedente da cui partire,
  quindi ogni argomento è stato tradotto direttamente dalla fonte inglese. L'indice
  (argomento 9.7) rimappa ogni collegamento interno agli argomenti al suo nome di file
  svedese, seguendo l'approccio usato per `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`,
  `ja-jp`, `ru-ru` e `fr-fr`. Non ancora collegato al sito.
- Completata una traduzione manuale completa e da zero di tutti i 63 argomenti in
  francese, Francia (`fr-fr`), con i corrispondenti sidecar `.locale-peer-id` e
  `just test` che passa. Non esisteva alcun locale francese precedente da cui partire,
  quindi ogni argomento è stato tradotto direttamente dalla fonte inglese. L'indice
  (argomento 9.7) rimappa ogni collegamento interno agli argomenti al suo nome di file
  francese, seguendo l'approccio usato per `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`,
  `ja-jp` e `ru-ru`. Non ancora collegato al sito.
- Completata una traduzione manuale completa e da zero di tutti i 63 argomenti in
  russo, Russia (`ru-ru`), con i corrispondenti sidecar `.locale-peer-id` e `just test`
  che passa. Non esisteva alcun locale russo precedente da cui partire, quindi ogni
  argomento è stato tradotto direttamente dalla fonte inglese. L'indice (argomento 9.7)
  rimappa ogni collegamento interno agli argomenti al suo nome di file russo, seguendo
  l'approccio usato per `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt` e `ja-jp`. Non
  ancora collegato al sito.
- Completata una traduzione manuale completa e da zero di tutti i 63 argomenti in
  giapponese, Giappone (`ja-jp`), con i corrispondenti sidecar `.locale-peer-id` e
  `just test` che passa. Non esisteva alcun locale giapponese precedente da cui partire,
  quindi ogni argomento è stato tradotto direttamente dalla fonte inglese. L'indice
  (argomento 9.7) rimappa ogni collegamento interno agli argomenti al suo nome di file
  giapponese, seguendo l'approccio usato per `ar-eg`, `bn-bd`, `ko-kr`, `es-es` e
  `pt-pt`. Non ancora collegato al sito.
- Completata una traduzione manuale completa e da zero di tutti i 63 argomenti in
  portoghese, Portogallo (`pt-pt`), con i corrispondenti sidecar `.locale-peer-id` e
  `just test` che passa. Non esisteva alcun locale portoghese precedente da cui
  partire, quindi ogni argomento è stato tradotto direttamente dalla fonte inglese.
  L'indice (argomento 9.7) rimappa ogni collegamento interno agli argomenti al suo nome
  di file portoghese, seguendo l'approccio usato per `ar-eg`, `bn-bd`, `ko-kr` e
  `es-es`. Non ancora collegato al sito.
- Aggiunto lo spagnolo, Spagna (`es-es`) come locale tradotto completo, tutti i 63
  argomenti, partendo da una copia della traduzione spagnola esistente (`es-001`) (che
  all'ispezione risultò già grammaticalmente neutra, con un vocabolario per lo più già
  orientato alla Spagna) e applicando poi un passaggio terminologico mirato per gli usi
  minoritari rimanenti, in particolare «incidente» in «incidencia» per il dominio delle
  metriche sugli incidenti di questo libro, con le corrispondenti correzioni di
  concordanza di genere ovunque. Non ancora collegato al sito.
- Completata una traduzione manuale completa di tutti i 63 argomenti in coreano, Corea
  (`ko-kr`), con i corrispondenti sidecar `.locale-peer-id` e `just test` che passa.
  L'indice (argomento 9.7) rimappa ogni collegamento interno agli argomenti al suo nome
  di file coreano, seguendo l'approccio usato per `ar-eg` e `bn-bd`. Non ancora
  collegato al sito.
- Aggiunto l'hindi, India (`hi-id`) come locale tradotto completo, tutti i 63 argomenti,
  copiando alla lettera la traduzione hindi esistente (`hi-001`) sotto il codice di
  locale con l'indicazione del paese, dato che l'hindi standard non ha una variante
  specifica per l'India da tradurre a mano separatamente. Non ancora collegato al sito.
- Completata una traduzione manuale completa di tutti i 63 argomenti in bengalese,
  Bangladesh (`bn-bd`), con i corrispondenti sidecar `.locale-peer-id` e `just test`
  che passa. Non ancora collegato al sito.
- Completata una traduzione manuale completa di tutti i 63 argomenti in arabo, Egitto
  (`ar-eg`), con i corrispondenti sidecar `.locale-peer-id` e `just test` che passa. Non
  ancora collegato al sito.
- Completata una traduzione manuale completa di tutti i 63 argomenti in tedesco,
  Germania (`de-de`), con i corrispondenti sidecar `.locale-peer-id` e `just test` che
  passa. Non ancora collegato al sito.
- Completate traduzioni manuali complete di tutti i 63 argomenti in tre locale: gallese
  (`cy-001`), cinese (`zh-cn`) e hindi (`hi-001`), ciascuno con i corrispondenti sidecar
  `.locale-peer-id` e `just test` che passa.
- Aggiunti altri due locale tradotti pianificati, gallese - Gran Bretagna (`cy-gb`) e
  cinese (`zh-001`), a `spec/locales-for-global-sharing-with-svelte/locales.tsv` e a
  `spec/locales.md` (ora tredici locale pianificati, da undici) e risolto l'endonimo
  prima indeciso di `zh-cn` in 中文. `LOCALE_LABELS` del sito ha guadagnato voci
  corrispondenti (`cy-gb`: «Cymraeg (Prydain Fawr)», `zh-001`: «中文», `zh-cn`: «中文
  (中国)»). Ancora solo infrastruttura: nessuno di questi locale ha una directory
  `locales/<codice>/` né alcun contenuto tradotto.
- Pubblicato il libro in quattro locale sotto `locales/`: `en-gb-oxendict` (inglese
  britannico, ortografia oxfordiana; la fonte scritta a mano), `en-001` (inglese
  internazionale), `en-gb` (inglese britannico comune) e `en-us` (inglese americano).
  `en-001`, `en-gb` e `en-us` sono derivati meccanicamente da `en-gb-oxendict` dal nuovo
  `tools/localize.py`; vedi `spec/locales.md`. `docs/` non esiste più; ogni riferimento
  ad esso in `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py` e
  `tools/stats.py` punta ora a `locales/<locale>/`.
- Aggiunte due skill di Claude Code, `software-engineering-metrics-skill` (per chi legge e
  applica le indicazioni del libro al proprio team) e
  `software-engineering-metrics-maintainer-skill` (per chi contribuisce aggiungendo o
  modificando argomenti), sotto `skills/` e replicate in `.claude/skills/`.
- Spostato il sorgente del sito web pubblicato in questo repository come
  `software-engineering-metrics.github.io/`, prima un repository separato. Ora legge
  `locales/` direttamente dalla radice del repository anziché da un checkout affiancato.
  Il `.github/workflows/deploy.yml` della radice verifica che il sito si costruisca
  ancora a ogni push su `main`, poi invia un `repository_dispatch` al repository
  `software-engineering-metrics.github.io` (tenuto come sottile guscio di rilascio,
  dato che GitHub Pages servirà quel dominio nudo solo da un repository con esattamente
  quel nome), che estrae questo monorepo, costruisce il sito e lo rilascia.
- Aggiunta l'infrastruttura per i locale tradotti (non semplicemente derivati
  dall'ortografia), secondo la nuova sotto-specifica
  `spec/locales-for-global-sharing-with-svelte/`: `tools/gen_locale_peer_ids.py` assegna
  a ogni file di contenuto un sidecar `.locale-peer-id`, identico tra i locale, che un
  futuro locale tradotto (con i propri slug in scrittura nativa) può usare per risolvere
  «questa pagina, nel locale X» anziché confrontare gli slug; `tests/validate.py`
  controlla che ogni sidecar esista e corrisponda. `spec/locales.md` documenta dieci
  locale tradotti pianificati (arabo, bengalese, gallese, spagnolo, francese, hindi,
  indonesiano, portoghese, russo, urdu e cinese - Cina); nessuno ha ancora una directory
  `locales/<codice>/`, dato che nessuno è ancora tradotto. Sul sito, `scripts/locales.mjs`
  ha guadagnato `LOCALE_LABELS`/`localeLabel()` (un nome visualizzato per ogni locale
  pianificato, pronto in anticipo sull'instradamento) e `sortedLocaleEntries()` (l'ordine
  che un futuro elenco di locale dovrebbe usare), e `src/lib/i18n.js` ha estratto le
  stringhe dell'interfaccia (navigazione, barra laterale, paginatore, selettore,
  piè di pagina, link di salto) che ogni componente `.svelte` prima fissava in inglese,
  instradate tramite `ui(locale)`, ripiegando sull'inglese per qualsiasi locale senza
  traduzioni proprie.
- Sostituito il controllo dell'intestazione del sito, costruito a mano e solo per i
  locale, con `@lilydesignsystem/svelte-picker-bar` del
  [Lily Design System](https://lilydesignsystem.com/): un vero selettore di tema
  (chiaro/scuro, tramite i nuovi `static/assets/themes/{light,dark}.css`), il vero
  selettore di locale (collegato all'instradamento basato sugli URL di questo sito
  anziché al suo comportamento predefinito solo su lingua/direzione), un selettore della
  dimensione del testo (la scala a sette gradini di Lily) e un selettore di condivisione
  (email, Mastodon, copia del link). Fissati
  `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` a `^0.1.2` e
  `@lilydesignsystem/svelte-headless` a `^0.2.0` tramite gli override di
  `pnpm-workspace.yaml`, aggirando un vero bug pubblicato negli intervalli di
  dipendenze di `svelte-picker-bar` 0.1.0 (vedi il `CHANGELOG.md` di ogni selettore,
  «0.1.2», e l'`AGENTS.md` di questo sito).
- Rimossa la riga di statistiche della pagina iniziale (parti/argomenti/«Gratis per
  sempre») e la sua sezione «Come leggerlo», e sostituita la griglia di schede
  «Sfoglia le nove parti» con un semplice elenco puntato.

### Changed

- Aggiunto `scripts/generate-sitemap.mjs`, eseguito alla fine di `pnpm build`, che scrive
  `sitemap.xml` dalle pagine pre-renderizzate (solo URL canonici dei locale, senza
  duplicati di alias di due lettere) così che la riga `Sitemap:` di `robots.txt` si
  risolva.
- Aggiunto l'argomento 2.8, Metriche Lean del flusso di valore (lead time, process time,
  cycle time, percentuale completa e accurata e takt time dalla classica mappatura del
  flusso di valore Lean, più il calcolo del rolled throughput yield), collocato dopo la
  teoria delle code. Le metriche di pull request e di revisione del codice sono passate
  da 2.8 a 2.9, e l'argomento sulle metriche DORA da 2.9 a 2.10. Aggiornati tutti i
  rimandi interessati in tutto il libro.
- Rinominata la Parte 2 da «Metriche di consegna e di flusso» a «Metriche di flusso» e
  riorganizzata attorno al Flow Framework di Mik Kersten. Aggiunti quattro nuovi
  argomenti: 2.1 Il Flow Framework, 2.2 Flow item (funzionalità, difetti, rischi,
  debito), 2.3 Flow Velocity e Flow Distribution e 2.4 Flow Time e Flow Load.
  Consolidati i quattro argomenti individuali sulle metriche DORA (frequenza di rilascio,
  lead time, tasso di fallimento dei cambiamenti, tempo di ripristino) in un unico
  argomento di riferimento, 2.9 Il framework delle metriche DORA, spostato alla fine
  della parte. Rinumerati Flow Efficiency e lavoro in corso a 2.5 e rinominato e
  rinumerato l'argomento sulla teoria delle code (prima 2.9) a 2.7 Teoria delle code. Il
  cycle time (2.6) e le metriche di pull request e di revisione del codice (2.8)
  mantengono i loro numeri. Aggiornati tutti i rimandi in tutto il libro, il glossario,
  il riferimento delle formule, l'autovalutazione della maturità e il front matter di
  conseguenza.

### Added

- Rilascio iniziale: 45 argomenti sostanziali in 8 parti, più il front matter e
  un'appendice di 7 argomenti (Parte 9), che coprono i framework DORA e SPACE, le
  metriche di codice e qualità, le metriche di prodotto e di business, le metriche di
  affidabilità e sicurezza e l'effetto dell'IA generativa sulle metriche di ingegneria.
- Infrastruttura del repository replicata dal progetto gemello
  `software-engineering-guide`: un `spec/` guidato dalla specifica (indice, struttura,
  convenzioni, ortografia oxfordiana, tabella di marcia), una suite di convalida in
  `tests/validate.py`, un generatore di navigazione in `tools/gen_nav.py`, un
  `justfile`, `AGENTS.md` con guide per i collaboratori sotto `docs/contributing/`,
  `CONTRIBUTING.md` e questo registro delle modifiche.
- `spec/structure.md`, il manifesto canonico degli argomenti rispetto al quale i test
  controllano i file.
- Due esempi svolti in `docs/examples/`: una carta delle metriche compilata e una
  specifica di dashboard.

## Storia

Il libro è stato costruito dalla specifica verso l'esterno: la struttura in nove parti è
stata dichiarata prima in `spec/structure.md`, poi ogni argomento è stato redatto
rispetto al modello condiviso in `docs/contributing/chapter-template.md`, con
`tests/validate.py` che imponeva struttura e stile della casa in tutto il percorso.

## Convenzioni per questo file

- Raggruppa le modifiche sotto **Added**, **Changed**, **Fixed**, **Removed** o
  **Deprecated**.
- Mantieni le voci brevi e specifiche. Una riga ciascuna dove possibile.
- Non usare trattini lunghi nemmeno qui; i test controllano anche questo file.
