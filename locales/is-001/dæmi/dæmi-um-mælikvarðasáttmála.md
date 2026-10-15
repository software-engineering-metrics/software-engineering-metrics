# Dæmi: mælikvarðasáttmáli fyrir greiðsluvettvangsteymi

Unnið dæmi um mælikvarðasáttmála, eins blaðs skjalið sem lýst er í [viðfangsefni 1.4, Stjórnarhættir og eignarhald mælikvarða](../viðfangsefni/01-04-stjórnarhættir-og-eignarhald-mælikvarða.md). Atriðið er lögunin: yfirlýstur tilgangur, skýrt ekki-markmið, nafngreindir eigendur og yfirferðartíðni. Sáttmáli svona stuttur er ætlaður til að vera lesinn, ekki skjalaður.

- **Teymi:** Greiðsluvettvangur
- **Eigandi:** Verkfræðistjóri vettvangs
- **Yfirfarið:** Ársfjórðungslega, á vettvangsyfirferð

## Tilgangur

Þessi sáttmáli stýrir mælikvörðunum sem greiðsluvettvangsteymið rekur um eigin afhendingu og áreiðanleika. Hann er til svo allir, innan og utan teymisins, geti séð hvað er mælt, hvers vegna og hvað það er ekki til.

## Hvað við rekjum

| Mælikvarði | Sannleiksgrunnur | Eigandi |
| --- | --- | --- |
| Afhendingartíðni | CI/CD-leiðsla | Vettvangsleiðtogi |
| Leiðartími breytinga | Git ásamt afhendingarleiðslu | Vettvangsleiðtogi |
| Breytingabilunarhlutfall | Atvikarakningarkerfi, merkt eftir afhendingu | Bakvaktarleiðtogi |
| Batatími misheppnaðra afhendinga | Atvikarakningarkerfi | Bakvaktarleiðtogi |
| P99 API-svartími (SLI) | Vöktunarvettvangur | SRE-leiðtogi |
| Brunahraði villuheimildar | Vöktunarvettvangur | SRE-leiðtogi |

## Ekki-markmið

Þessir mælikvarðar eru aldrei notaðir, einir sér eða saman, til að raða verkfræðingum, meta frammistöðuyfirferðir eða bera þetta teymi saman við vegvísi annars teymis án þess að bera líka saman umfang, mönnun og kerfisþroska. Hvaða notkun sem er umfram tilganginn sem tilgreindur er hér að ofan krefst samþykkis verkfræðistjóra og teymisins sjálfs.

## Varnarmælikvarðar

Sérhver mælikvarði hér að ofan sem ber hvata er paraður við varnarmælikvarða. Leiðartími breytinga er vaktaður samhliða breytingabilunarhlutfalli, svo teymi geti ekki bætt hraðatölu sína með því að afhenda áhættusamari breytingar. Afhendingartíðni er vöktuð samhliða brunahraða villuheimildar, af sömu ástæðu.

## Yfirferðartíðni

Teymið yfirfer þennan sáttmála á hverjum ársfjórðungi. Mælikvarði sem hefur ekki breytt ákvörðun í tveimur samfelldum ársfjórðungum er frambjóðandi til afleggingar.
