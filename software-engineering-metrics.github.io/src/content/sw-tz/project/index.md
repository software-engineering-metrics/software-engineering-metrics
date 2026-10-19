# Kuhusu mradi huu

Nyaraka za mradi wa kitabu: jinsi kilivyounganishwa, jinsi ya kukijenga na kukikagua, na ambapo chanzo cha ukweli kinakaa. Kwa kitabu chenyewe, tazama [yaliyomo](../index.md).

## Ramani ya mradi

- **Kitabu:** kimechapishwa katika lugha nne chini ya `locales/`; tazama [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md). Lugha hii, `en-gb-oxendict/topics/` (faili 63), `en-gb-oxendict/front-matter/`, na viambatisho vya Sehemu ya 9 ndivyo chanzo kilichoandikwa kwa mkono; `en-001`, `en-gb`, na `en-us` zinatokana nacho.
- **Chanzo cha ukweli:** `spec/` kwenye mzizi wa hazina (haichapishwi kwenye tovuti). Muundo unatangazwa katika `spec/structure.md`, kanuni za uandishi katika `spec/conventions.md`, na tahajia katika `spec/oxford-spelling.md`. Kila kitu kingine kimejengwa kulingana.
- **Zana:** `tools/localize.py` inapata lugha nyingine tatu; `tools/gen_nav.py` inazalisha uelekezaji; `tests/validate.py` inatekeleza vipimo; `justfile` inaviunganisha pamoja.
- **Mwongozo kwa wachangiaji:** [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md) kwenye mzizi wa hazina, na miongozo katika [sehemu ya kuchangia](../contributing/index.md).

## Kujenga na kukagua

Mkusanyiko wa uthibitishaji unaendeshwa kwenye Python 3 bila utegemezi mwingine na bila ufikiaji wa mtandao. Kazi zinaendeshwa kupitia [just](https://github.com/casey/just).

```sh
just test    # thibitisha muundo, mtindo, viungo, na vipimo-dhidi-ya-diski
just nav     # zalisha upya faili za uelekezaji zinazozalishwa
just check   # nav, kisha test
just stats   # hesabu za mada na maneno
```

Hazina hii ina maudhui ya kitabu na vipimo. Inatolewa kuwa tovuti na hazina tofauti ya [`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Jinsi maendeleo yanayoendeshwa na vipimo yanavyofanya kazi hapa

Vipimo vinakuja kwanza. `spec/structure.md` inasema ni mada zipi zipo na zinavyopewa namba. `spec/conventions.md` inasema jinsi zinavyopaswa kuandikwa. Mada zinaandikwa kutimiza yote mawili. `tools/gen_nav.py` inapata uelekezaji kutoka mada, na `tests/validate.py` inakagua matokeo kurudi dhidi ya vipimo. Mada na vipimo vikitofautiana, majaribio yanashindwa, ambayo ni ishara ya kuvirudisha kwenye mpangilio.

Hii inazuia mkengeuko: badiliko "limekamilika" tu wakati vipimo, mada, uelekezaji unaozalishwa, na majaribio vyote vinakubaliana.

## Maamuzi ya ubunifu yanayostahili kujulikana

- **Mada tambarare, zenye namba za desimali.** Faili ni `locales/<locale>/topics/PP-CC-slug.md`, slug ileile katika kila lugha. Sehemu ni namba nzima; mada ni desimali; N.0 ni utangulizi wa sehemu. Hii inahifadhi vitambulisho thabiti na kuruhusu zana kupanga na kugawa bila mti wa saraka.
- **Lugha moja iliyoandikwa kwa mkono, tatu zinazotokana.** `en-gb-oxendict` ni tahajia ya Oxford, mtindo wa nyumbani wa vyombo vingi vya viwango vya kimataifa (tazama `spec/oxford-spelling.md`); `en-001`, `en-gb`, na `en-us` zinapatikana kimakanika kutoka kwayo, kwa hiyo tafsiri haikengeuki kutoka chanzo.
- **Uelekezaji unaozalishwa.** Yaliyomo, ukurasa wa yaliyomo, na faharasa ya mada vinazalishwa, kwa hiyo havikengeuki kutoka mada.
- **Majaribio ya nje ya mtandao, yasiyo na utegemezi.** Mkusanyiko unatumia maktaba ya kawaida tu ili uendeshwe popote, ikijumuisha CI na viunganishi vya kabla ya kuwasilisha.
- **Marejeo mtambuka yanabaki maandishi wazi.** Maandishi yanarejelea mada kwa namba ya desimali ("tazama mada ya 2.1"), kama vipimo vinavyohitaji; tovuti inayoonyesha ndiyo inayowajibika kugeuza marejeo hayo kuwa viungo.
- **Hakuna vistari virefu, kwa kanuni na kwa jaribio.** Chaguo la makusudi la mtindo, linalotekelezwa ili libaki kweli kitabu kinapokua.
- **Kila familia ya vipimo inataja njia yake ya kuchezea.** Hii ndiyo kanuni moja katika kiolezo isiyo na sawa katika mradi mwenzi wa `software-engineering-guide`: ipo kwa sababu mada nzima ya kitabu hiki ni upimaji, kwa hiyo hatari ya upimaji yenyewe lazima iwe ya daraja la kwanza, si ya dhahiri.

## Usomaji zaidi

- [Uandishi](../contributing/authoring.md) : kuandika na kuhariri mada.
- [Uelekezaji](../contributing/navigation.md) : jinsi faili zinazozalishwa zinavyofanya kazi.
- [Majaribio](../contributing/testing.md) : majaribio yanakagua nini na jinsi ya kurekebisha kushindwa.
- [Mifano](../examples/index.md) : mifano midogo, thabiti.
- [Orodha ya mabadiliko](changelog.md) : historia ya mabadiliko muhimu.
