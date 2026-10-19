# Framlag

Þakka þér fyrir að hjálpa til við að bæta þessa bók. Framlög af öllum stærðum eru velkomin, frá því að laga innsláttarvillu til að skrifa nýtt viðfangsefni.

## Grundreglur

Bókin fylgir ströngum húsastíl. Aðalatriðin:

- Engin tankastrik (em-dash). Notaðu kommu, tvípunkt, svigatexta eða tvær setningar.
- Engin staðlað orðalag („not only ... but also“, „load-bearing“ og áþekkt).
- Hlýtt, einfalt, beint skrif. Ávarpaðu lesandann með „þú“. Stuttar setningar.
- Skilgreindu hugtök við fyrstu notkun. Tengdu lykilhugtök við Wikipedia við fyrstu nefningu.
- Aðeins raunverulegar heimildir.
- Sérhvert viðfangsefni um mælikvarðafjölskyldu nefnir leikvektor sinn og varnarmælikvarða.

Fullu reglurnar eru í `spec/conventions.md` í rót geymslunnar, og stutta útgáfan eru [stílreglurnar](style-rules.md). Prófin framfylgja vélrænu hlutunum.

## Uppsetning

Þú þarft Python 3 og [just](https://github.com/casey/just). Þessi geymsla heldur efni bókarinnar og forskrift hennar, auk SvelteKit-vefsins (`software-engineering-metrics.github.io/`) sem birtir hana á útgefna vefnum.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Að gera breytingu

1. Lestu viðeigandi leiðbeiningar: [ritun](authoring.md) fyrir viðfangsefni, [leiðsögn](navigation.md) fyrir mynduðu skrárnar, [prófanir](testing.md) fyrir prófin.
2. Gerðu minnstu breytingu sem vinnur verkið.
3. Ef þú bættir við, fjarlægðir, endurnefndir eða endurnúmeraðir viðfangsefni, uppfærðu `spec/structure.md` í rót geymslunnar og keyrðu `just nav`.
4. Keyrðu `just test`. Það verður að standast.
5. Bættu eins línu færslu við [breytingaskrána](../project/changelog.md) undir **Unreleased**.

## Hvað á að vinna að

- Lagaðu villur, óskýra kafla eða úreltar heimildir.
- Bættu dæmi, einkum áþreifanleg stórfyrirtækja- og opinber dæmi.
- Staðfestu tilvitnanir gegn raunverulegum heimildum.
- Fylltu í bil í þekju viðfangsefnis án þess að brjóta sniðmátið.

## Hverju á að forðast

- Breyttu ekki mynduðu skránum handvirkt (`README.md`, `index.md` hvers málsvæðis, `front-matter/table-of-contents.md` og `topics/09-07-index.md`). Breyttu viðfangsefnunum og keyrðu `just nav` í staðinn.
- Breyttu ekki `en-001`, `en-gb` eða `en-us` beint; þau eru leidd út frá `en-gb-oxendict` af `tools/localize.py`.
- Bættu ekki við viðfangsefni án þess að uppfæra líka `spec/structure.md`.
- Kynntu ekki tankastrik eða bönnuðu frasana; prófin falla.

## Að tilkynna vandamál

Opnaðu vandamálsskýrslu sem lýsir vandanum, skránni og viðfangsefninu, og, þar sem viðeigandi, réttu heimildinni eða tilvísuninni. Litlar, sértækar skýrslur eru auðveldastar að bregðast við.
