# Kuchangia

Asante kwa kusaidia kuboresha kitabu hiki. Michango ya ukubwa wowote inakaribishwa, kuanzia kurekebisha kosa la uchapaji hadi kuandika mada mpya.

## Kanuni za msingi

Kitabu kinafuata mtindo mkali wa nyumbani. Mambo muhimu:

- Hakuna vistari virefu (em-dash). Tumia koma, nukta pacha, mabano, au sentensi mbili.
- Hakuna misemo ya kawaida ("si tu ... bali pia", "load-bearing", na kadhalika).
- Uandishi wa joto, rahisi, wa moja kwa moja. Msemeshe msomaji kama "wewe." Sentensi fupi.
- Fafanua istilahi unapoitumia mara ya kwanza. Unganisha dhana muhimu na Wikipedia unapozitaja mara ya kwanza.
- Marejeo halisi tu.
- Kila mada ya familia ya vipimo inataja njia yake ya kuchezea na kizuizi chake.

Kanuni kamili ziko katika `spec/conventions.md` kwenye mzizi wa hazina, na toleo fupi ni [kanuni za mtindo](style-rules.md). Majaribio yanatekeleza sehemu za kimakanika.

## Maandalizi

Unahitaji Python 3 na [just](https://github.com/casey/just). Hazina hii ina maudhui ya kitabu na vipimo, pamoja na tovuti ya SvelteKit (`software-engineering-metrics.github.io/`) inayoyatoa kuwa tovuti iliyochapishwa.

```sh
just         # orodhesha kazi
just test    # endesha mkusanyiko wa uthibitishaji
just nav     # zalisha upya faili za uelekezaji zinazozalishwa
just stats   # hesabu za mada na maneno
```

## Kufanya badiliko

1. Soma mwongozo husika: [uandishi](authoring.md) kwa mada, [uelekezaji](navigation.md) kwa faili zinazozalishwa, [majaribio](testing.md) kwa majaribio.
2. Fanya badiliko dogo zaidi linalokamilisha kazi.
3. Ukiongeza, kuondoa, kubadilisha jina, au kubadilisha namba ya mada, sasisha `spec/structure.md` kwenye mzizi wa hazina na uendeshe `just nav`.
4. Endesha `just test`. Lazima ipite.
5. Ongeza ingizo la mstari mmoja kwenye [orodha ya mabadiliko](../project/changelog.md) chini ya **Unreleased**.

## Cha kufanyia kazi

- Rekebisha makosa, vifungu visivyo wazi, au marejeo yaliyochakaa.
- Boresha mifano, hasa thabiti ya biashara kubwa na ya serikali.
- Thibitisha manukuu dhidi ya vyanzo halisi.
- Jaza mapengo katika ufunikaji wa mada bila kuvunja kiolezo.

## Cha kuepuka

- Usihariri faili zinazozalishwa kwa mkono (`README.md`, `index.md` ya kila lugha, `front-matter/table-of-contents.md`, na `topics/09-07-index.md`). Badilisha mada na uendeshe `just nav` badala yake.
- Usihariri `en-001`, `en-gb`, au `en-us` moja kwa moja; zinatokana na `en-gb-oxendict` kupitia `tools/localize.py`.
- Usiongeze mada bila kusasisha pia `spec/structure.md`.
- Usiingize vistari virefu wala misemo iliyokatazwa; majaribio yatashindwa.

## Kuripoti masuala

Fungua suala linaloeleza tatizo, faili na mada, na, pale inapofaa, chanzo au marejeo sahihi. Ripoti ndogo, mahususi ndizo rahisi zaidi kuzifanyia kazi.
