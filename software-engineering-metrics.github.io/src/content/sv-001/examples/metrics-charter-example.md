# Exempel: metrikstadga för ett team för betalningsplattformen

Ett utarbetat exempel på en metrikstadga, det enkelsidiga dokument som beskrivs i
[ämne 1.4, Styrning och ägarskap av mätetal](../chapters/01-04-styrning-och-ägarskap-av-metriker.md). Poängen är formen: ett uttalat syfte,
uttryckliga icke-mål, namngivna ägare och en granskningscadens. En stadga i den här storleken är avsedd att läsas, inte arkiveras.

- **Team:** Betalningsplattformen
- **Ägare:** Utvecklingschef för plattformen
- **Granskas:** Varje kvartal, vid plattformsgranskningen

## Syfte

Den här stadgan styr de mätetal som teamet för betalningsplattformen följer om sin egen leverans och tillförlitlighet. Den finns så att alla, inom och utanför teamet,
kan se vad som mäts, varför och vad det inte används till.

## Vad vi följer

| Mätetal | Sanningskälla | Ägare |
| --- | --- | --- |
| Driftsättningsfrekvens | CI/CD-pipelinen | Plattformsansvarig |
| Ledtid för ändringar | Git plus driftsättningspipelinen | Plattformsansvarig |
| Andel misslyckade ändringar | Incidentspårare, taggad per driftsättning | Jouransvarig |
| Återhämtningstid efter en misslyckad driftsättning | Incidentspårare | Jouransvarig |
| P99-latens för API:t (SLI) | Observerbarhetsplattformen | SRE-ansvarig |
| Förbrukning av felbudgeten | Observerbarhetsplattformen | SRE-ansvarig |

## Icke-mål

De här mätetalen används aldrig, enskilt eller i kombination, för att rangordna ingenjörer, bedöma prestationsutvärderingar eller jämföra det här teamet med ett annat teams färdplan
utan att också jämföra omfattning, bemanning och systemmognad. All användning utanför det syfte som anges ovan kräver godkännande av utvecklingsdirektören
och av teamet självt.

## Skydd

Varje mätetal ovan som bär ett incitament är parat med ett skydd. Ledtid för ändringar bevakas tillsammans med andel misslyckade ändringar, så att teamet
inte kan förbättra sin hastighetssiffra genom att leverera riskablare ändringar. Driftsättningsfrekvens bevakas av samma skäl tillsammans med förbrukningen av felbudgeten.

## Granskningscadens

Teamet granskar den här stadgan varje kvartal. Ett mätetal som inte har ändrat något beslut under två kvartal i rad är en kandidat för pensionering.
