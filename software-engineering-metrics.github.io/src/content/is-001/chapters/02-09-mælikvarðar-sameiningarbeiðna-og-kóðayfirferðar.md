# 2.9 Mælikvarðar sameiningarbeiðna og kóðayfirferðar

## Yfirlit og tilgangur

[Kóðayfirferð](https://en.wikipedia.org/wiki/Code_review) er yfirleitt stærsti einstaki biðtímaþátturinn í sundurliðun ferlitíma úr viðfangsefni 2.6, og hún er líka það stig sem teymi á auðveldast með að bæta sjálft, ólíkt sameiginlegum vettvangsflöskuhálsi eða ytri háð. Þetta viðfangsefni nær yfir sértæku mælikvarðana sem búa innan yfirferðarstigsins: tíma til fyrstu yfirferðar, stærð sameiningarbeiðna, fjölda yfirferðarlota og dreifingu yfirferðarálags, og hvernig á að nota þá til að bæta yfirferðarhraða án þess að fórna raunverulegum gæðaávinningi sem yfirferð á að veita.

Áhættan sem þetta viðfangsefni er sérstaklega vakandi fyrir er sú sem bókin hefur ekki enn fjallað um beint: að fínstilla yfirferðarhraða getur hljóðlega rýrt yfirferðargæði ef því er fylgt óvarlega eftir. Teymi sem helmingar tíma til fyrstu yfirferðar með því að stimpla allt gagnrýnislaust hefur bætt mælikvarða meðan það eyðileggur raunverulegt virði venjunnar. Sérhver ráðlegging í þessu viðfangsefni er skrifuð með þá málamiðlun í huga, því mælikvarðar sameiningarbeiðna eru meðal þeirra auðveldustu í þessari bók að leika á þann hátt að líti vel út á mælaborði meðan undirliggjandi kóðagrunnur versnar mælanlega.

Fyrir stór teymi afhjúpa yfirferðarmælikvarðar jafnvægisvandamál í álagsdreifingu sem eru annars ósýnileg: fáir æðri verkfræðingar sem taka ósamhlutfallslegan hluta yfirferðarálags, tiltekið teymi eða kóðasvæði þar sem yfirferðir stöðvast stöðugt, eða mynstur ofstórra sameiningarbeiðna sem gera ítarlega yfirferð nær ómögulega óháð samviskusemi yfirferðaraðila. Þessi mynstur magnast í stórum mæli langtum meira en í litlu teymi, þar sem allir sjá ójafnvægið beint án þess að þurfa mælikvarða til að draga það fram.

## Lykilmeginreglur

- **Tími til fyrstu yfirferðar er yfirleitt stærsta lyftistöngin, ekki ítarleiki yfirferðar sjálfrar.** Mest töf kemur af því að sameiningarbeiðni bíður þess að vera skoðuð, ekki af því að yfirferðarsamtalið taki langan tíma þegar það hefst.
- **Minni sameiningarbeiðnir eru yfirfarnar hraðar og ítarlegar, ekki bara hraðar.** Stærð er lyftistöng bæði fyrir hraða og gæði samtímis.
- **Yfirferðarhraði og yfirferðargæði eru ekki sjálfkrafa í spennu, en hægt er að skipta þeim óvarlega.** Varastu þá skiptingu skýrt.
- **Ójafnvægi yfirferðarálags er algengt og yfirleitt ósýnilegt án mælikvarða.** Fáir taka oft ósamhlutfallslegan hluta.
- **Þessir mælikvarðar eru útsettir fyrir stimpilleikáhættuna.** Hröð samþykkt án raunverulegrar rýni eyðir öllum tilgangi yfirferðar.

## Ráðleggingar

### Raktu tíma til fyrstu yfirferðar sem aðalhraðamælikvarða

Mældu bilið frá því sameiningarbeiðni er opnuð þar til yfirferðaraðili gerir fyrstu efnislegu athugasemd eða samþykkir, tækjavætt sjálfvirkt úr útgáfustýringarvettvangi þínum. Þetta er yfirleitt ráðandi biðtímaþáttur innan yfirferðarstigsins (viðfangsefni 2.5, viðfangsefni 2.6), og að bæta hann, með skýrari reglum um úthlutun yfirferðar, tilkynningavenjum eða sérstökum yfirferðartímablokkum, skilar yfirleitt stærstu einstöku umbót á heildarferlitíma sem teymi á völ á.

### Raktu stærð sameiningarbeiðna og hvettu virkt til minni breytinga

Mældu breyttar línur eða snertar skrár á hverja sameiningarbeiðni, og meðhöndlaðu viðvarandi stórt miðgildi stærðar sem merki sem vert er að taka á beint. Minni sameiningarbeiðnir eru yfirfarnar hraðar, yfirfarnar ítarlegar (yfirferðaraðili getur í raun haldið allri breytingunni í höfðinu) og auðveldara er að afturkalla þær ef eitthvað fer úrskeiðis, sem tengist beint aftur við lotustærðarmeginregluna að baki afhendingartíðni í viðfangsefni 2.10. Hvettu til að skipta stórum breytingum í röð minni, sjálfstætt yfirferðarhæfra sameiningarbeiðna hvar sem vinnan leyfir það.

### Vaktaðu dreifingu yfirferðarálags skýrt

Raktu fjölda yfirferða kláraðra á mann yfir veltandi glugga, og gættu sérstaklega að því að fáir taki ósamhlutfallslegan hluta. Þetta mynstur er algengt, fellur oft á æðstu eða mest treystu verkfræðingana, og skapar bæði flöskuháls (tiltækileiki þeirra setur þak á yfirferðarafköst alls teymisins) og útbrunaáhættu (viðfangsefni 3.2 fjallar um vellíðunarmælikvarða dýpra). Snúðu yfirferðarábyrgð vísvitandi frekar en að láta hana safnast sjálfgefið kringum þann sem svarar hraðast.

### Varastu stimpilleikáhættuna skýrt

Paraðu tíma til fyrstu yfirferðar við gæðamerki: hlutfall galla eða atvika rakin til breytinga sem voru samþykktar án nokkurra yfirferðarathugasemda, eða hlutfall lagfæringa eftir sameiningu sem þurfti fyrir nýlega yfirfarinn kóða. Teymi sem bætir yfirferðarhraða með því að samþykkja án raunverulegrar rýni ætti að sjá þennan varnarmælikvarða versna, sem er einmitt pörunarmeginreglan úr viðfangsefni 1.2 beitt á þessa tilteknu mælikvarðafjölskyldu. Eltu aldrei yfirferðarhraða án þessa gagnmælikvarða í sjónmáli.

### Notaðu fjölda yfirferðarlota til að koma auga á núning, ekki til að dæma einstaklinga

Fjöldi yfirferðarumferða sem sameiningarbeiðni fer gegnum áður en hún er sameinuð getur bent á raunverulegan núning, óljósar kröfur, ágreining um nálgun, ósamkvæmar stílvæntingar, sem vert er að rannsaka á ferlistigi. Forðastu að nota þessa tölu til að dæma einstaka höfunda eða yfirferðaraðila beint; hár lotufjöldi er oftar kerfis- eða samskiptamerki en persónulegt, og að meðhöndla hann sem einstaklingsstigatöflu hættir á nákvæmlega matsrekið sem viðfangsefni 1.1 varar við.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Að fínstilla eingöngu tíma til fyrstu yfirferðar | Hratt, skýrt merki, auðvelt að tækjavæða | Getur hvatt til yfirborðskenndrar stimpilyfirferðar ef óvarið |
| Að fínstilla eingöngu minnkun stærðar sameiningarbeiðna | Bætir bæði hraða og ítarleika samtímis | Ekki öll vinna skiptist hreint í litla áfanga |
| Að snúa yfirferðarálagi jafnt | Dregur úr flöskuhálsi og útbrunaáhættu | Getur hægt á yfirferð sérhæfðs, erfiðs-að-yfirfara kóða sem þarfnast tiltekinnar sérþekkingar |
| Að einbeita yfirferð hjá æðri verkfræðingum | Djúp sérþekking á sviðinu beitt samkvæmt | Skapar flöskuháls og útbrunaáhættu með tímanum |

Aðalspennan er **hraði á móti dýpt rýni**. Sérhver aðferð í þessu viðfangsefni til að flýta yfirferð, hraðari fyrstu viðbrögð, minni sameiningarbeiðnir, jafnari dreifing yfirferðarálags, ber einhverja áhættu á að fórna raunverulegri rýni ef henni er fylgt eftir án gæðavarnarmælikvarðans sem viðfangsefnið mælir með. Leystu spennuna með því að para sérhvern hraðamælikvarða við gæðamerki, rakið yfir sama tímabil, svo teymi geti greint raunverulega ferlisbætur frá hljóðlega rýrnandi yfirferðarstaðli.

## Spurningar til að ræða með teyminu

1. **Hver er raunverulegur tími til fyrstu yfirferðar hjá okkur, og hve mikið af heildarferlitíma okkar tekur yfirferðarstigið?** Dragið fram raunverulegu töluna frekar en að reiða sig á tilfinningu; yfirferðarbiðtími er oft meiri en teymi gera ráð fyrir, einmitt því auðvelt er að vanmeta tíma sem varið er í bið frekar en virka vinnu.

2. **Hver er miðgildisstærð sameiningarbeiðna okkar, og hve mikið af yfirferðartöf okkar myndi minnka ef sú stærð færi niður?** Stórar sameiningarbeiðnir eru bæði hægari að yfirfara og líklegri til að fá yfirborðskennda yfirferð einfaldlega því yfirferðaraðili getur ekki haldið öllu í höfðinu í einu. Skoðið raunverulega stærðardreifingu ykkar, ekki bara miðgildið.

3. **Er yfirferðarálag einbeitt hjá fáum einstaklingum, og hvað yrði um yfirferðarafköst okkar ef einn þeirra væri ótiltækur í tvær vikur?** Þessi spurning dregur fram bæði flöskuhálsáhættu og útbrunaáhættu samtímis. Dragið fram raunveruleg gögn um yfirferðarálag frekar en að reiða sig á tilfinningu.

4. **Höfum við nokkurn tímann bætt yfirferðarhraðamælikvarða á þann hátt sem, við eftirtekt, dró úr raunverulegri rýni?** Verið heiðarleg hér; þetta er einmitt stimpilhættan sem þetta viðfangsefni nefnir, og auðvelt er að renna inn í hana án nokkurrar vísvitandi ákvörðunar.

5. **Hvað merkir hár fjöldi yfirferðarlota yfirleitt hjá okkar teymi: raunverulegur ágreiningur, óljósar kröfur eða ósamkvæmar stílvæntingar?** Skoðið úrtak sameiningarbeiðna með óvenju háum lotufjölda og greinið raunverulega mynstrið, frekar en að gera ráð fyrir að það varpi slæmu ljósi á höfund eða yfirferðaraðila.

6. **Höfum við gæðavarnarmælikvarða paraðan við yfirferðarhraðamælikvarða okkar, eða rekjum við hraða einan og sér?** Ef heiðarlega svarið er að enginn slíkur varnarmælikvarði sé til er það bil vert að loka áður en yfirferðarhraða er þrýst lengra, samkvæmt pörunarmeginreglu viðfangsefnis 1.2.

## Geirasjónarhorn

**Sprotafyrirtæki.** Yfirferð er oft hröð sjálfgefið hjá litlu teymi, stundum nær of hröð, eins samþykkjanda yfirferð með lágmarksrýni því allir treysta öllum. Áhættan sem vert er að fylgjast með þegar teymið vex er að yfirferðargæði stækki ekki samhliða teymisstærð, því óformlegt traust sem virkaði fyrir fimm verkfræðinga virkar ekki sjálfkrafa fyrir fimmtíu.

**Lítil fyrirtæki.** Flestir útgáfustýringarvettvangar skýra tíma-til-sameiningar og talningar yfirferða beint úr kassanum; notaðu þær frekar en að smíða sérsniðna tækjavæðingu. Aðalagi sem vert er að taka upp er einfaldlega að taka eftir því hvort yfirferðarálag hefur hljóðlega einbeitst hjá einum eða tveimur eftir því sem teymið hefur vaxið.

**Stórfyrirtæki.** Ójafnvægi yfirferðarálags og flöskuhálsar sérhæfðrar þekkingar eru sérstaklega algengir hér, þar sem djúp sérþekking á mikilvægu kerfi getur einbeitt yfirferðarábyrgð hjá litlum hópi óháð teymisstærð. Fjárfestu í vísvitandi þekkingardeilingu og yfirferðarsnúningi til að dreifa sérþekkingu, sem dregur bæði úr flöskuhálsinum og rútuþáttaráhættunni (e. bus factor) af því að sérþekking búi hjá of fáum.

**Hið opinbera.** Yfirferðarferli hér bera oft regluvörsluþyngd samhliða gæðamarkmiðum, sem getur gert sameiningarbeiðnir stærri og yfirferðir hægari af ásettu ráði. Þar sem raunverulegar regluvörslukröfur krefjast ítarlegrar yfirferðar, einbeittu umbótafyrirhöfn að því að draga úr biðtíma (hraðari úthlutun yfirferðar, skýrari forgangsflokkun) frekar en að skerða raunverulega dýpt yfirferðarinnar, og skjalaðu málamiðlunina skýrt ef rýni verður að haldast þung af reglugerðarástæðum.

## Dæmi

**Stórfyrirtæki.** Verkfræðiskipulagsheild netöryggisfyrirtækis fann að handfylli aðalverkfræðinga lauk yfir 40% allra kóðayfirferða í tvö hundruð manna skipulagsheild, ójafnvægi sem enginn hafði mælt beint fyrr en yfirferðarálagsgögn voru dregin fram. Þessi einbeiting var bæði flöskuháls, þar sem tiltækileiki þessara verkfræðinga setti þak á yfirferðarafköst alls skipulagsheildarinnar, og útbrunaáhætta sem könnun á þátttöku (viðfangsefni 3.2) benti sérstaklega á. Skipulagsheildin kom á skipulögðu yfirferðarsnúningsáætlun paraðri markvissum þekkingardeilingarfundum, og innan tveggja ársfjórðunga hafði yfirferðarálag dreifst yfir langtum víðari hóp, með tíma til fyrstu yfirferðar batnandi sem beina hliðarverkun minnkaðs flöskuháls.

**Hið opinbera.** Verkfræðiteymi skattstofu, undir þrýstingi að bæta afhendingarhraða, setti markmið um að helminga tíma til fyrstu yfirferðar. Innan eins ársfjórðungs náðist markmiðið, en gæðaúttekt í kjölfarið fann skarpa aukningu sameiningarbeiðna með lagfæringum galla eftir sameiningu, einbeitta í breytingum sem voru samþykktar með einni, stuttri athugasemd. Lagfæring teymisins paraði hraðamarkmiðið við skýran gæðavarnarmælikvarða, hlutfall lagfæringa eftir sameiningu sem þurfti innan tveggja vikna frá yfirferð, og þjálfaði teymið aftur í því hvað efnisleg yfirferð krafðist í raun, sem endurheimti raunverulega rýni meðan mestur hraðaávinningurinn sem kom af betri úthlutun yfirferðar og minni sameiningarbeiðnum var varðveittur.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun vel stýrðra yfirferðarmælikvarða er hraðari afhending án fórnar á gæðum, sem er sjaldgæf samsetning: flestar afhendingarbætur skipta hraða á móti áhættu einhvers staðar, en umbætur á yfirferðarstigi, minni sameiningarbeiðnir, betri álagsdreifing, hraðari fyrstu viðbrögð, bæta sannarlega hvort tveggja samtímis þegar þeim er fylgt eftir með gæðavarnarmælikvarðanum sem þetta viðfangsefni mælir með. Netöryggisdæmið hér að ofan er dæmigert: að laga flöskuháls bætti hraða meðan undirliggjandi yfirferðargæði, ef nokkuð, bötnuðu eftir því sem sérþekking dreifðist víðar.

Heildareignarkostnaður er lágur: flestir þessara mælikvarða koma beint úr fyrirliggjandi gögnum útgáfustýringarvettvangs með lágmarks viðbótartækjavæðingu, og ferlisbreytingarnar sem þeir benda á, yfirferðarsnúningur, hvatning til minni sameiningarbeiðna, kosta aðallega aga frekar en tólafjárfestingu.

## Andmynstur og gildrur

- **Að fínstilla tíma til fyrstu yfirferðar án paraðs gæðavarnarmælikvarða:** býður stimpilsamþykkt sem eyðir tilgangi yfirferðar.
- **Að hunsa einbeitingu yfirferðarálags:** skapar bæði flöskuháls og útbrunaáhættu sem helst ósýnileg þar til hún er mæld.
- **Að meðhöndla fjölda yfirferðarlota sem einstaklingsstigatöflu:** oftar kerfis- eða samskiptamerki en persónulegt.
- **Að sætta sig við viðvarandi stórar sameiningarbeiðnir sem óhjákvæmilegar:** flestar stórar breytingar má skipta lengra en teymi gera ráð fyrir í fyrstu.
- **Að beita jafnri yfirferðardýpt óháð áhættu breytingar:** sóar rýni á áhættulitlar breytingar meðan hugsanlega er of lítil rýni á áhættumiklar.
- **Að mæla yfirferðarhraða en athuga aldrei hvort raunveruleg rýni minnkaði samhliða:** algengasta einstaka leiðin sem þessi mælikvarðafjölskylda er leikin óviljandi.

## Þroskalíkan

- **Stig 1, Upphaf:** Yfirferðarmælikvarðar eru ekki raktir; dreifing yfirferðarálags og stærð sameiningarbeiðna eru ósýnileg.
- **Stig 2, Þróun:** Einhver yfirferðarhraðagögn eru til úr sjálfgefnum vettvangsstillingum, en enginn gæðavarnarmælikvarði er til og engin virk stýring yfirferðarálags.
- **Stig 3, Stöðlun:** Tími til fyrstu yfirferðar, stærð sameiningarbeiðna og yfirferðarálag eru rakin samkvæmt, með skýrum gæðavarnarmælikvarða paruðum við hraðabætur.
- **Stig 4, Stjórnun:** Yfirferðarálag er virkt endurjafnað með snúningi og þekkingardeilingu; mynstur lotufjölda eru rannsökuð á ferlistigi frekar en einstaklingsstigi.
- **Stig 5, Samhæfing:** Mælikvarðar yfirferðarstigs upplýsa beint ferlafjárfestingu, og skipulagsheildin getur sýnt samtímabætur bæði á yfirferðarhraða og yfirferðartengdum gæðaniðurstöðum yfir langt tímabil.

## Hugmyndir til umræðu

1. Hver er núverandi miðgildistími til fyrstu yfirferðar hjá okkur, og hvert fer sá tími í raun?
2. Er yfirferðarálag okkar einbeitt hjá fáum einstaklingum, og hver er áhættan ef einn er ótiltækur?
3. Höfum við nokkurn tímann bætt yfirferðarhraða á kostnað raunverulegrar rýni, jafnvel óviljandi?
4. Hver er miðgildisstærð sameiningarbeiðna okkar, og hve miklu minni gætu flestar breytingar raunhæft verið?
5. Meðhöndlum við háan fjölda yfirferðarlota sem kerfismerki eða einstaklingsdóm?

## Helstu atriði til að muna

- **Tími til fyrstu yfirferðar** er yfirleitt stærsta einstaka lyftistöngin innan yfirferðarstigsins, meira en lengd yfirferðarsamtalsins sjálfs.
- **Minni sameiningarbeiðnir** bæta bæði yfirferðarhraða og yfirferðarítarleika samtímis.
- **Ójafnvægi yfirferðarálags** er algengt og yfirleitt ósýnilegt án beinnar mælingar; það skapar bæði flöskuháls og útbrunaáhættu.
- Paraðu sérhvern yfirferðarhraðamælikvarða við skýran **gæðavarnarmælikvarða** til að grípa stimpilleikáhættuna sem þessi mælikvarðafjölskylda er sérstaklega hætt við.
- Notaðu **fjölda yfirferðarlota** til að greina núning á kerfisstigi, ekki til að dæma einstaka höfunda eða yfirferðaraðila.

## Heimildir og frekara lesefni

- *Accelerate: The Science of Lean Software and DevOps*, eftir Nicole Forsgren, Jez Humble og Gene Kim (kóðayfirferðarvenjur og samband þeirra við afhendingarframmistöðu).
- Rannsóknir á *Modern Code Review* eftir Alberto Bacchelli og Christian Bird (reynslurannsókn á kóðayfirferðarvenjum í stórum mæli).
- *Peer Reviews in Software: A Practical Guide*, eftir Karl E. Wiegers (hönnun yfirferðarferlis og málamiðlanir þess).
- *The Principles of Product Development Flow*, eftir Donald G. Reinertsen (lotustærðarrökhugsun beitt á stærð sameiningarbeiðna).
