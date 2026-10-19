# 4.0 Introduzione alla Parte 4: Metriche di codice e qualità

Le Parti 2 e 3 hanno misurato come si muove il lavoro e come stanno le persone che
lo producono. Questa parte si rivolge al manufatto stesso: il codice, e ciò che una
metrica può e non può dire sulla sua qualità. Le metriche di qualità del codice
hanno la storia più lunga di qualsiasi famiglia di metriche di questo libro, la
complessità ciclomatica risale al 1976, e la più lunga storia di abusi a
corrispondere. Questa parte prende sul serio quella storia: ogni argomento nomina un
segnale davvero utile insieme al modo specifico e ben documentato in cui quel
segnale viene manipolato una volta diventato un obiettivo.

Il filo conduttore che lega questi sei argomenti è che nessuna singola metrica di
codice cattura da sola la qualità, e diverse tra le più diffuse fuorviano
attivamente se perseguite in isolamento. Una percentuale alta di copertura dei test
può convivere con test che non verificano nulla di significativo. Un punteggio basso
di complessità può convivere con codice tecnicamente semplice ma concettualmente
incoerente. Gli argomenti di questa parte abbinano ciascuno la propria metrica in
primo piano al controllo complementare che intercetta il suo specifico punto cieco:
la complessità con il contesto di manutenibilità, la copertura con il mutation
testing, il churn con l'analisi degli hotspot, l'analisi statica con il giudizio
umano e il debito tecnico con una rimediazione prioritizzata anziché un arretrato
sempre crescente e trascurato.

Per i team grandi, le metriche di codice e qualità sono ciò che rende possibile
gestire una base di codice troppo grande perché una sola persona la tenga a mente.
Un team di cinque persone può fare affidamento sulla conoscenza tacita condivisa di
quali parti del sistema siano fragili; un'organizzazione di cinquecento ingegneri
che copre decine di servizi ha bisogno di segnali strumentati per trovare quella
fragilità in modo sistematico. Le organizzazioni enterprise e governative, che
spesso portano basi di codice misurate in decenni anziché in anni, dipendono dalle
metriche di questa parte per dare priorità a dove un investimento limitato nella
manutenzione farà più bene.

## Argomenti di questa parte

- **4.1 Metriche di complessità del codice:** La complessità ciclomatica e le sue
  parenti, che cosa prevedono davvero e il loro rischio di manipolazione ben
  documentato.
- **4.2 Copertura dei test ed efficacia dei test:** Perché una percentuale di
  copertura da sola dice meno di quanto sembri, e come il mutation testing colma il
  divario.
- **4.3 Code churn e analisi degli hotspot:** Trovare la frazione specifica e
  piccola di una base di codice responsabile di una quota sproporzionata di difetti
  e costi di manutenzione.
- **4.4 Analisi statica e metriche di code smell:** Segnali automatici di qualità
  del codice, il loro valore reale e i loro limiti rispetto al giudizio umano.
- **4.5 Misurazione del debito tecnico:** Trasformare una passività invisibile e
  discussa in modo informale in un portafoglio visibile, prioritizzato e gestibile.
- **4.6 Metriche di documentazione e conoscenza:** Misurare se la documentazione
  aiuta davvero, non solo se esiste.

## Come si collegano tra loro questi argomenti

Questi sei argomenti procedono dall'unità di codice più piccola verso l'esterno.
L'argomento 4.1 parte dal livello di una singola funzione o metodo; l'argomento 4.2
chiede se i test verifichino davvero il comportamento di quell'unità; l'argomento
4.3 allarga lo sguardo per trovare quali file e moduli dell'intera base di codice
meritino attenzione per primi; l'argomento 4.4 aggiunge lo strato di strumenti
automatici che scandaglia tutto continuamente; l'argomento 4.5 trasforma i risultati
accumulati dei quattro precedenti in un arretrato gestito e prioritizzato anziché in
una preoccupazione diffusa e non affrontata; e l'argomento 4.6 chiude la parte
misurando se la conoscenza necessaria a mantenere tutto questo in sicurezza sia
davvero documentata e reperibile.

Questa parte si ricollega direttamente alle metriche di stabilità della Parte 2: il
tasso di fallimento dei cambiamenti (argomento 2.10) è, in gran parte, una
conseguenza a valle della qualità del codice che questa parte misura a monte. Si
collega anche in avanti alle metriche di prodotto della Parte 5, dato che i difetti
sfuggiti (argomento 5.1) sono spesso riconducibili esattamente agli hotspot di
complessità e alle lacune di copertura che questa parte è costruita per far
emergere prima che raggiungano del tutto la produzione.
