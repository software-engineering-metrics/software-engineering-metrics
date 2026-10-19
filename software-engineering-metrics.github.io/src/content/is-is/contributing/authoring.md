# Ritun: að skrifa og breyta viðfangsefnum

## Áður en þú skrifar

- Lestu [stílreglurnar](style-rules.md) og `spec/conventions.md` í rót geymslunnar.
- Athugaðu `spec/structure.md` í rót geymslunnar til að sjá hvar viðfangsefnið passar og hvaða númer það ætti að hafa.

## Að skrifa nýtt viðfangsefni

1. Veldu hlutann og næsta lausa tugabrotsnúmer í þeim hluta. Númerun er samfelld, svo nýtt viðfangsefni tekur yfirleitt næsta númer á eftir því síðasta í sínum hluta.
2. Búðu til `locales/en-gb-oxendict/topics/PP-CC-slug.md` (núllfyllt, bandstrikaskipt forskeyti, til dæmis `02-01-...`) úr [viðfangsefnissniðmátinu](chapter-template.md). Skrifaðu það með Oxford-stafsetningu (sjá `spec/oxford-spelling.md`); breyttu aldrei hinum þremur málsvæðunum beint.
3. Skrifaðu eftir sniðmátinu. Sérhvert efnisviðfangsefni þarfnast allra sinna hluta: yfirlit, lykilmeginreglur, ráðleggingar, málamiðlanir (með töflu), umræðuspurningar, geirasjónarhorn (sprotafyrirtæki, lítil fyrirtæki, stórfyrirtæki, hið opinbera), dæmi (eitt stórfyrirtækis og eitt hins opinbera), viðskiptarök, andmynstur, fimm stiga þroskalíkan, umræðuhugmyndir, helstu atriði og heimildir.
4. Nefndu leikvektorinn. Sérhver mælikvarðafjölskylda þarfnast skýrs svars við „hvernig lætur teymi þessa tölu líta vel út án þess að bæta það sem hún mælir, og hvaða varnarmælikvarði grípur það“ (sjá viðfangsefni 1.2).
5. Skilgreindu hugtök við fyrstu notkun. Bættu Wikipedia-tenglum við lykilhugtök við fyrstu nefningu, eingöngu í texta.
6. Vísaðu í tengd viðfangsefni með tugabroti, til dæmis „(viðfangsefni 2.1).“
7. Bættu viðfangsefninu við `spec/structure.md`.
8. Ef hlutainngangurinn (N.0) telur upp viðfangsefni sín, bættu við punkti þar.
9. Keyrðu `python3 tools/localize.py` til að leiða viðfangsefnið inn í `en-001`, `en-gb` og `en-us`.
10. Keyrðu `just nav`, síðan `just test`.

## Að breyta fyrirliggjandi viðfangsefni

- Haltu hlutaröð og fyrirsögnum óbreyttum. Prófin athuga að efnisviðfangsefni hafi enn alla nauðsynlega hluta.
- Varðveittu innbyggðar skilgreiningar, Wikipedia-tengla, töflur og heimildalistann nema breytingin snúist sérstaklega um þau.
- Kynntu ekki tankastrik (em-dash) eða bönnuðu frasana. Ef þú ert að umorða, endurorðaðu frekar en að setja tankastrik inn.
- Keyrðu `python3 tools/localize.py` á eftir til að leiða `en-001`, `en-gb` og `en-us` aftur út frá breyttri `en-gb-oxendict` uppsprettu.

## Endurnefning eða endurnúmerun

- Endurnefndu skrána í `locales/en-gb-oxendict/`, uppfærðu `# N.M Title` fyrirsögn hennar, uppfærðu `spec/structure.md` og uppfærðu hverja víxlvísun sem bendir á gamla númerið.
- Keyrðu `python3 tools/localize.py` til að endurnefna skrána í hinum þremur málsvæðunum líka (það leiðir öll fjögur út frá sömu afstæðu slóðum).
- Keyrðu `just nav` og `just test`. Prófin merkja misræmi milli H1 og skráarnafns, númerabil, málsvæði sem hefur rekið frá uppsprettunni eða brotinn tengil.

## Tónáminning

Skrifaðu eins og reyndur vinnufélagi sem vill að lesandinn nái árangri. Hlýtt, einfalt, beint og gagnlegt. Stuttar setningar. Engin uppfylling.
