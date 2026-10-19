# Esempio: carta delle metriche per un team di piattaforma pagamenti

Un esempio svolto di carta delle metriche, il tipo di documento di una pagina descritto
nell'[argomento 1.4, Governance e responsabilità delle metriche](../chapters/01-04-governance-e-responsabilita-delle-metriche.md).
Il punto è la forma: uno scopo dichiarato, un non-obiettivo esplicito, responsabili con
nome e una cadenza di revisione. Una carta così breve è pensata per essere letta, non
archiviata.

- **Team:** Piattaforma pagamenti
- **Responsabile:** Responsabile dell'ingegneria di piattaforma
- **Revisione:** Trimestrale, nella revisione della piattaforma

## Scopo

Questa carta regola le metriche che il team di piattaforma pagamenti traccia sulla
propria consegna e affidabilità. Esiste perché tutti, dentro e fuori il team, possano
vedere che cosa viene misurato, perché e per che cosa non va usato.

## Che cosa tracciamo

| Metrica | Fonte di verità | Responsabile |
| --- | --- | --- |
| Frequenza di rilascio | Pipeline di CI/CD | Responsabile di piattaforma |
| Lead time dei cambiamenti | Git più pipeline di rilascio | Responsabile di piattaforma |
| Tasso di fallimento dei cambiamenti | Incident tracker, etichettato per rilascio | Responsabile della reperibilità |
| Tempo di ripristino dopo un rilascio fallito | Incident tracker | Responsabile della reperibilità |
| Latenza P99 delle API (SLI) | Piattaforma di osservabilità | Responsabile SRE |
| Consumo dell'error budget | Piattaforma di osservabilità | Responsabile SRE |

## Non-obiettivi

Queste metriche non vengono mai usate, singolarmente o in combinazione, per classificare
gli ingegneri, valutare le prestazioni nelle revisioni o confrontare questo team con la
roadmap di un altro team senza confrontare anche ambito, organico e maturità del
sistema. Qualsiasi uso al di fuori dello scopo dichiarato qui sopra richiede
l'approvazione del direttore di ingegneria e del team stesso.

## Guardrail

Ogni metrica qui sopra che porta con sé un incentivo è abbinata a un guardrail. Il lead
time dei cambiamenti è osservato accanto al tasso di fallimento dei cambiamenti, così
che un team non possa migliorare il proprio numero di velocità rilasciando cambiamenti
più rischiosi. La frequenza di rilascio è osservata accanto al consumo dell'error
budget, per la stessa ragione.

## Cadenza di revisione

Il team riesamina questa carta ogni trimestre. Una metrica che non ha cambiato una
decisione in due trimestri consecutivi è candidata al ritiro.
