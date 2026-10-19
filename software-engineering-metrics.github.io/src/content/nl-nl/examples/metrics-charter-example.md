# Voorbeeld: metriekcharter voor een betalingsplatformteam

Een uitgewerkt voorbeeld van een metriekcharter, het document van één pagina dat wordt beschreven in
[onderwerp 1.4, Governance en eigenaarschap van metrieken](../chapters/01-04-metriekengovernance-en-eigenaarschap.md). Waar het om gaat is de vorm: een uitgesproken doel,
expliciete niet-doelen, genoemde eigenaren en een reviewcadans. Een charter van deze lengte is bedoeld om gelezen te worden, niet om weggeborgen te worden.

- **Team:** Betalingsplatform
- **Eigenaar:** Engineeringmanager platform
- **Gereviewd:** Elk kwartaal, tijdens de platformreview

## Doel

Dit charter regelt de metrieken die het betalingsplatformteam volgt over zijn eigen levering en betrouwbaarheid. Het bestaat zodat iedereen, binnen en buiten het
team, kan zien wat er wordt gemeten, waarom en waarvoor het niet wordt gebruikt.

## Wat we volgen

| Metriek | Bron van waarheid | Eigenaar |
| --- | --- | --- |
| Deployfrequentie | CI/CD-pijplijn | Platformlead |
| Doorlooptijd voor wijzigingen | Git plus de deploypijplijn | Platformlead |
| Wijzigingsfaalpercentage | Incidententracker, per deploy getagd | Lead bereikbaarheidsdienst |
| Hersteltijd na een mislukte deploy | Incidententracker | Lead bereikbaarheidsdienst |
| P99-API-latentie (SLI) | Observability-platform | SRE-lead |
| Verbruik van het foutbudget | Observability-platform | SRE-lead |

## Niet-doelen

Deze metrieken worden nooit, individueel of gecombineerd, gebruikt om engineers te rangschikken, prestatiebeoordelingen te beoordelen of dit team te vergelijken met de
roadmap van een ander team zonder ook scope, bezetting en systeemvolwassenheid te vergelijken. Elk gebruik buiten het hierboven genoemde doel vereist goedkeuring van de engineeringdirecteur
en van het team zelf.

## Beschermmetrieken

Elke metriek hierboven die een prikkel draagt, is gekoppeld aan een beschermmetriek. De doorlooptijd voor wijzigingen wordt bewaakt naast het wijzigingsfaalpercentage, zodat het team
zijn snelheidscijfer niet kan verbeteren door riskantere wijzigingen te leveren. De deployfrequentie wordt om dezelfde reden bewaakt naast het verbruik van het foutbudget.

## Reviewcadans

Het team reviewt dit charter elk kwartaal. Een metriek die twee kwartalen achter elkaar geen enkele beslissing heeft veranderd, is een kandidaat om met pensioen te gaan.
