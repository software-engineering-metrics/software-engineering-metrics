# Majaribio: mkusanyiko wa uthibitishaji

## Kuuendesha

```sh
just test
# au
python3 tests/validate.py
```

Unaendeshwa kutoka popote na unahitaji Python 3 tu (hakuna vifurushi vya mtu wa tatu, hakuna mtandao). Unachapisha mstari mmoja kwa kila ukaguzi na unatoka na msimbo usio sifuri ukaguzi wowote ukishindwa, kwa hiyo unafanya kazi katika CI na kama kiunganishi cha kabla ya kuwasilisha.

## Kinachokaguliwa

- **Idadi inayotarajiwa ya mada** (kigezo thabiti juu ya hati).
- **Namba zisizo na mapengo** ndani ya kila sehemu, zikianza na N.0.
- **H1 inalingana na namba ya desimali ya jina la faili** kwa kila mada.
- **Vichwa vya H1 vinalingana na `spec/structure.md`** herufi kwa herufi, si namba ya awali ya desimali tu.
- **Sehemu zinazohitajika** zipo katika kila mada ya maudhui (Sehemu za 1 hadi 8, mada N.1 na kuendelea), **kwa mpangilio kamili wa kiolezo**.
- **Idadi ya chini ya maneno** kwa kila mada ya maudhui (maneno 1,500), yenye orodha ya ruhusa katika hati kwa ubaguzi wa makusudi.
- **Hakuna vistari virefu** katika faili yoyote ya Markdown.
- **Vistari vifupi kati ya tarakimu tu**, kwa hiyo "2.1–2.8" inapita na kila kitu kingine kinashindwa.
- **Hakuna misemo iliyokatazwa** ("not only", "but also", "load-bearing").
- **Viungo vyote vya ndani vya `.md` vinatatuliwa.**
- **Marejeo ya maandishi yanaelekeza mada halisi**: rejeo la namba ya mada isiyo na faili inayolingana kwenye diski linashindwa, kwa kutumia mtindo ule ule wa rejeo ambao kuunganisha moja kwa moja kwa viungo vya mada vya tovuti iliyochapishwa kunatumia.
- **Viungo vya Wikipedia vimeundwa vizuri** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` inalingana na faili kwenye diski**, kwa pande zote mbili.
- **README, ukurasa wa nyumbani, na ukurasa wa yaliyomo vinaunganisha kila mada.**

## Ukaguzi unaposhindwa

Mstari unaoshindwa unataja faili na tatizo. Marekebisho ya kawaida:

- Kistari kirefu kimepatikana: andika upya sentensi kuondoa kistari. Usikifute tu.
- Sehemu inakosekana: ongeza sehemu ya `##` inayokosekana kutoka kiolezo cha mada.
- Kutolingana kwa muundo: uliongeza au kubadilisha jina la mada bila kusasisha `spec/structure.md`, au kinyume chake. Zirudishe zilingane.
- Kiungo kilichovunjika: rekebisha njia, au isasishe baada ya kubadilisha jina.
- Pengo la namba: panga upya namba ili sehemu iwe bila mapengo kuanzia N.0.

## Zaidi ya mkusanyiko wa uthibitishaji

- `just spell` inaendesha [codespell](https://github.com/codespell-project/codespell) juu ya hazina. Usanidi, ikijumuisha orodha ya kupuuza ya chanya za uongo, ni sehemu ya `[tool.codespell]` katika `pyproject.toml`.
- `just stats` inachapisha ripoti ya Markdown (hesabu za maneno kwa kila mada, mada nyembamba, viungo vya Wikipedia, ingizo za marejeo) kutoka `tools/stats.py`.

## Ujumuishaji endelevu

- `.github/workflows/test.yml` inaendeshwa kwa kila ombi la kuvuta na kwa kusukuma kwenye matawi yasiyo ya main: mkusanyiko wa uthibitishaji na codespell. Hazina hii haijengi wala kusambaza tovuti; uonyeshaji unafanyika katika hazina tofauti ya `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` inakagua viungo vya nje kila wiki kwa [lychee](https://github.com/lycheeverse/lychee) (mifumo ya kupuuza katika `.lycheeignore`) na kuhifadhi matokeo katika suala moja la "Link checker report". Viungo vya nje vimeachwa nje ya njia ya ombi la kuvuta kwa makusudi.

## Kisichofunikwa na majaribio

Mkusanyiko unakagua muundo na mtindo, si ukweli. Hauwezi kusema kama rejeo ni halisi au kama maandishi ni sahihi. Thibitisha manukuu na ukweli kwa mkono au kwa mapitio ya utafiti. Kuwepo kwa kiungo cha Wikipedia (tofauti na umbo la kiungo) pia kunahitaji ukaguzi wa mtandao, ambao mkusanyiko unaacha kwa makusudi ili uweze kuendeshwa nje ya mtandao.
