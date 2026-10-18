# Uelekezaji: jinsi faili zinazozalishwa zinavyofanya kazi

Kwa kila lugha, vifaa vinne vya uelekezaji vinazalishwa kutoka mada za lugha hiyo, havijaandikwa kwa mkono (pamoja na `README.md`, inayozalishwa mara moja kwa lugha ya rejeo, `en-gb-oxendict`):

- `README.md` (yaliyomo kwenye ukurasa wa nyumbani wa hazina; lugha ya rejeo tu)
- `locales/<locale>/index.md` (ukurasa wa nyumbani wa tovuti iliyochapishwa)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (faharasa ya mada, yenye viungo)

Vinazalishwa na [`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py). Usivihariri kwa mkono, kwa sababu uzalishaji unaofuata utafuta badiliko lako.

## Lini kuzalisha upya

Endesha `just nav` (au `python3 tools/gen_nav.py`) kila unapofanya moja ya haya:

- kuongeza, kuondoa, kubadilisha jina, au kubadilisha namba ya mada, au
- kubadilisha kichwa cha `# N.M Title` cha mada (yaliyomo yanakitumia).

Endesha `python3 tools/localize.py` kwanza ukibadilisha chochote chini ya `locales/en-gb-oxendict/`, ili mada za lugha nyingine tatu (na vichwa vyake vinavyozalishwa) ziwe za kisasa kabla `gen_nav.py` haijazisoma; tazama [`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Jinsi inavyofanya kazi

Kwa kila lugha, `gen_nav.py` husoma kila faili ya `locales/<locale>/topics/*.md`, hupanga kwa namba ya desimali, hugawa kwa sehemu, na:

- hujenga yaliyomo ya sehemu-kwa-sehemu kutoka kichwa cha kila mada,
- huyaandika katika `locales/<locale>/index.md` na `locales/<locale>/front-matter/table-of-contents.md` (na, kwa lugha ya rejeo tu, `README.md`),
- huchanganua mada za maudhui (Sehemu za 1 hadi 8) kutafuta orodha thabiti ya istilahi muhimu na kuandika faharasa ya mada katika `locales/<locale>/topics/09-07-index.md`.

Maandishi ya kawaida ya pamoja (aya ya utangulizi, "Jinsi ya kusoma kitabu hiki", "Mada zinazokata kuvuka", na vichwa vya sehemu) yanawekwa katika lugha ileile kama maandishi ya mada, kupitia kazi za lugha za `tools/localize.py`, ili kurasa zinazozalishwa zisomeke kwa asili katika kila lugha.

Vichwa vya sehemu viko katika kamusi ya `PART_TITLES` karibu na juu ya hati. Kizalishaji kinatumia vichwa vya sehemu vya mtindo wa nukta pacha ("Part 2: Delivery and Flow Metrics"), kamwe si vistari virefu.

## Kisichoguswa

Vipimo kwenye mzizi wa hazina (`spec/index.md`, `spec/structure.md`, na wenzake) ni chanzo cha ukweli kilichoandikwa kwa mkono. Kizalishaji hakiviandiki, na si sehemu ya tovuti iliyochapishwa. Ukibadilisha muundo, sasisha `spec/structure.md` mwenyewe, kisha uendeshe `just nav` kwa faili zinazotokana na `just test` kuthibitisha kila kitu kinalingana.
