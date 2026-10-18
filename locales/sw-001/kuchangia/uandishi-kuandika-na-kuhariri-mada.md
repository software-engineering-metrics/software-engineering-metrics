# Uandishi: kuandika na kuhariri mada

## Kabla ya kuandika

- Soma [kanuni za mtindo](kanuni-za-mtindo.md) na `spec/conventions.md` kwenye mzizi wa hazina.
- Kagua `spec/structure.md` kwenye mzizi wa hazina kuona mada inafaa wapi na inapaswa kuwa na namba gani.

## Kuandika mada mpya

1. Chagua sehemu na namba inayofuata ya desimali iliyo huru katika sehemu hiyo. Namba hazina mapengo, kwa hiyo mada mpya kwa kawaida inachukua namba inayofuata baada ya ya mwisho katika sehemu yake.
2. Unda `locales/en-gb-oxendict/topics/PP-CC-slug.md` (kiambishi kilichojazwa sifuri, kilichotenganishwa kwa vistari, kwa mfano `02-01-...`) kutoka [kiolezo cha mada](kiolezo-cha-mada.md). Andika kwa tahajia ya Oxford (tazama `spec/oxford-spelling.md`); usihariri lugha nyingine tatu moja kwa moja kamwe.
3. Andika kulingana na kiolezo. Kila mada ya maudhui inahitaji sehemu zake zote: muhtasari, kanuni kuu, mapendekezo, mabadilishano (pamoja na jedwali), maswali ya majadiliano, mtazamo wa sekta (kampuni changa, biashara ndogo, biashara kubwa, serikali), mifano (mmoja wa biashara kubwa na mmoja wa serikali), kesi ya biashara, mifumo mibaya, kielelezo cha ukomavu cha ngazi tano, mawazo ya majadiliano, mambo muhimu ya kukumbuka, na marejeo.
4. Taja njia ya kuchezea. Kila familia ya vipimo inahitaji jibu wazi kwa "timu inawezaje kufanya namba hii ionekane nzuri bila kuboresha kitu inachopima, na kizuizi gani kinakamata hilo" (tazama mada ya 1.2).
5. Fafanua istilahi unapoitumia mara ya kwanza. Ongeza viungo vya Wikipedia kwa dhana muhimu unapozitaja mara ya kwanza, katika maandishi tu.
6. Rejelea mada zinazohusiana kwa desimali, kwa mfano "(mada ya 2.1)."
7. Ongeza mada kwenye `spec/structure.md`.
8. Utangulizi wa sehemu (N.0) ukiorodhesha mada zake, ongeza kitone hapo.
9. Endesha `python3 tools/localize.py` kupata mada hiyo katika `en-001`, `en-gb`, na `en-us`.
10. Endesha `just nav`, kisha `just test`.

## Kuhariri mada iliyopo

- Hifadhi mpangilio wa sehemu na vichwa visivyobadilika. Majaribio yanakagua kwamba mada za maudhui bado zina kila sehemu inayohitajika.
- Hifadhi fasili za ndani ya maandishi, viungo vya Wikipedia, majedwali, na orodha ya marejeo isipokuwa uhariri unahusu hivyo mahususi.
- Usiingize vistari virefu wala misemo iliyokatazwa. Ukiandika upya, badilisha maneno badala ya kudondosha kistari.
- Endesha `python3 tools/localize.py` baadaye kupata tena `en-001`, `en-gb`, na `en-us` kutoka chanzo kilichohaririwa cha `en-gb-oxendict`.

## Kubadilisha jina au namba

- Badilisha jina la faili katika `locales/en-gb-oxendict/`, sasisha kichwa chake cha `# N.M Title`, sasisha `spec/structure.md`, na usasishe kila rejeo la mada linaloelekeza kwenye namba ya zamani.
- Endesha `python3 tools/localize.py` kubadilisha jina la faili katika lugha nyingine tatu pia (inapata zote nne kutoka njia zilezile za kiasi).
- Endesha `just nav` na `just test`. Majaribio yataashiria kutolingana kati ya H1 na jina la faili, pengo la namba, lugha iliyokengeuka kutoka chanzo, au kiungo kilichovunjika.

## Ukumbusho wa toni

Andika kama mwenzako mwenye uzoefu anayetaka msomaji afanikiwe. Joto, rahisi, la moja kwa moja, na lenye manufaa. Sentensi fupi. Hakuna maneno ya kujaza.
