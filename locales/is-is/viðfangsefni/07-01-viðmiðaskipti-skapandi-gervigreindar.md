# 7.1 Viðmiðaskipti kynslóðargervigreindar

## Yfirlit og tilgangur

Mestalla sögu hugbúnaðarverkfræði var að skrifa kóða nógu hægt og krefjandi til að hrátt afurðamagn, línur skrifaðar, innsendingar gerðar, eiginleikar afhentir, fylgdi að minnsta kosti lauslega raunverulegri fyrirhöfn og, ófullkomlega, raunverulegu virði. Sú fylgni var aldrei fullkomin, viðfangsefni 3.4 helgaði heilt viðfangsefni því hvers vegna virknimælikvarðar villa jafnvel í heimi fyrir gervigreind, en hún var nógu sterk til að margar skipulagsheildir byggðu mælikvarðaáætlanir á þeirri óbeinu forsendu að meiri kóði framleiddur þýddi almennt meira verk unnið. Kóðunaraðstoðarmenn [kynslóðargervigreindar](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) hafa brotið þá forsendu afgerandi: tól getur nú framleitt mikið, sannfærandi útlítandi magn kóða á sekúndum, á broti fyrri kostnaðar, og það magn segir þér næstum ekkert eitt og sér um hvort kóðinn sem af hlýst virkar, er viðhaldshæfur eða þjónar nokkrum raunverulegum tilgangi.

Kjarnafullyrðing þessa viðfangsefnis er að þetta sé viðmiðaskipti, ekki stigvaxandi tólabreyting. Viðmiðaskipti breyta því sem fyrirliggjandi mælitæki þín mæla í raun, ekki bara hvaða gildi þau skýra frá. Hraðamælir mælir enn hraða eftir að þú skiptir um vél bíls; nokkrir mælikvarðar þessarar bókar lifa ekki þessa umskipti jafn hreint af. Afhendingartíðni (viðfangsefni 2.10) getur hækkað því gervigreind flýtti sannarlega verðmætri vinnu, eða því gervigreind gerði það léttvægt auðvelt að mynda margar litlar, lítilvirðisbreytingar; talan ein getur ekki lengur greint þar á milli á þann hátt sem hún gat að mestu, með viðeigandi varúð, áður. Sama rökfræði á með enn meiri þunga við hráar innsendingatalningar, kóðalínur og magn sameiningarbeiðna, allt sem viðfangsefni 3.4 varaði þegar við sem einstaklingsmælikvörðum, nú magnað upp í áhættu sem skiptir líka máli á teymis- og skipulagsheildarstigi.

Fyrir stór teymi kom þessi breyting hraðar en mælingarvenja flestra skipulagsheilda gat aðlagast henni, og bilið milli upptökuhraða og mælingaraðlögunar er þar sem raunveruleg áhætta þessa hluta býr. Stórfyrirtæki sem halda áfram að skýra frá virknimælikvörðum fyrri gervigreindaraldar án aðlögunar hætta á að fagna mælikvarða sem hefur hljóðlega hætt að fylgja virði; opinberar skipulagsheildir sem meta gervigreindartólafjárfestingu þurfa skýra skilning á nákvæmlega hvaða mælikvarðar eru enn treystandi og hverjir ekki lengur, áður en þær skuldbinda sig til innkaupa- eða stefnuákvarðana byggðra á úreltum mælingarforsendum.

## Lykilmeginreglur

- **Þetta er viðmiðaskipti í því sem mælikvarðar mæla, ekki stigvaxandi breyting.** Sumir fyrirliggjandi mælikvarðar hafa hljóðlega hætt að þýða það sem þeir þýddu áður.
- **Afurðamagn var aldrei áreiðanlegur staðgengill fyrir virði, og það er nú orðið virkt óáreiðanlegt.** Viðvörun viðfangsefnis 3.4 var alltaf rétt; þessi breyting gerir að hunsa hana langtum dýrara.
- **Bilið milli upptökuhraða gervigreindar og aðlögunarhraða mælinga er raunverulega áhættan.** Skipulagsheildir taka upp tólin hraðar en þær endurskoða mælikvarða sína.
- **Ekki verða allir mælikvarðar þessarar bókar fyrir jöfnum áhrifum.** Niðurstöðumælikvarðar (5. hluti) eru langtum seigari gagnvart þessari breytingu en virknimælikvarðar og hráir afurðamælikvarðar.
- **Þessi breyting er iðnaðarvíð og áframhaldandi, ekki einskiptis aðlögun.** Búist við áframhaldandi breytingum eftir því sem tólin og upptökumynstur þeirra halda áfram að þróast.

## Ráðleggingar

### Endurskoðaðu fyrirliggjandi mælikvarðasafn þitt skýrt fyrir réttmæti á öld gervigreindar

Gangið í gegnum núverandi mælaborð ykkar og spyrjið beint fyrir hvern mælikvarða: myndi teymi sem notar gervigreindaraðstoð mikið en framleiðir ekki meira raunverulegt virði en áður sýna bætta lesningu á þessum mælikvarða. Virknitalningar, innsendingatíðni og hrá afhendingartíðni (án paraðs stöðugleikavarnarmælikvarða, viðfangsefni 2.10) eru mest útsett. Niðurstöðumælikvarðar úr 5. hluta, sloppnir gallar, upptaka eiginleika, rekstrarniðurstöður, eru hlutfallslega seigir, því þeir mæla raunverulega niðurstöðuna frekar en magn virkninnar sem framleiddi hana.

### Endurskoðaðu afhendingartíðni og leiðartíma sérstaklega, með aukinni varnarmælikvarðaathygli

Viðfangsefni 2.10 varaði þegar við staðgengilsleik, að skipta marktækri vinnu í léttvægar afhendingar til að blása upp talninguna. Kynslóðargervigreind gerir þetta sértæka leikmynstur dramatískt ódýrara og auðveldara að framleiða, jafnvel óviljandi, þar sem gervigreindaraðstoðaðar léttvægar breytingar eru nú nær ókeypis að mynda. Hertu breytingabilunarhlutfallsvarnarmælikvarða þinn (viðfangsefni 2.10) sérstaklega í hlutfalli við hve mikið teymi hefur tekið upp gervigreindaraðstoðaða þróun, og fylgstu með afhendingarstærðarþróun enn nánar en áður.

### Meðhöndlaðu yfirferðargetu kóða sem nýjan, mikilvægan flöskuháls

Ef gervigreindaraðstoð eykur dramatískt magn kóða sem lagt er til yfirferðar verður yfirferðarstigið (viðfangsefni 2.9), sem er þegar oft stærsti biðtímaþátturinn í afhendingarleiðslunni, enn skarpari skorða. Yfirferðaraðili sem er beðinn um að meta miklu hærra magn gervigreindarframleidds kóða á sama hraða og áður mun óhjákvæmilega annaðhvort hægja á leiðslunni eða draga úr yfirferðardýpt, nákvæmlega stimpilhættan sem viðfangsefni 2.9 varaði þegar við, nú undir talsvert meiri þrýstingi. Vaktaðu yfirferðardýpt og gæðavarnarmælikvarða með aukinni athygli eftir því sem magn gervigreindarframleidds kóða eykst.

### Gerðu ekki ráð fyrir að gervigreindarframleiddur kóði beri sama gallasnið og mannskrifaður kóði

Snemmbúin sönnunargögn og reynsla iðkenda benda til þess að gervigreindarframleiddur kóði geti haft annað gallasnið en mannskrifaður kóði: sannfærandi útlítandi en lúmskt röng rökfræði, sjálfsörugglega framleidd en röng jaðartilvikameðhöndlun, eða kóði sem stenst yfirborðskennda yfirferð því hann lítur út fyrir að vera málvenjulegur og skynsamlegur, en var ekki í raun rökhugsaður með sannarlegum skilningi á sértæku samhengi kerfisins. Meðhöndlaðu þetta sem tilgátu sem vert er að prófa virkt gegn eigin sloppinna-galla-gögnum (viðfangsefni 5.1), með því að merkja galla eftir því hvort upprunakóðinn var að verulegu leyti gervigreindarframleiddur, frekar en að gera ráð fyrir að sögulegu gallahlutfallssamböndin sem skipulagsheild þín hefur byggt gæðavenjur sínar á haldi enn óbreytt.

### Uppfærðu mælikvarðasáttmála þinn og stjórnarháttaferli skýrt fyrir þessa breytingu

Samkvæmt stjórnarháttaaga viðfangsefnis 1.4, láttu ekki þessa breytingu gerast við mælikvarðaáætlun þína óvirkt. Endurskoðaðu mælikvarðasáttmála þinn skýrt, nefndu hvaða mælikvarðar þurfa nýja varnarmælikvarða, hverjir þurfa afleggingu og hverjir haldast áreiðanlegir, sem vísvitandi stjórnarháttaákvörðun frekar en órannsakað rek. Skjalaðu rökstuðninginn, því þetta er einmitt sú tegund skilgreiningar- og samhengisbreytingar sem viðfangsefni 1.4 varar við að geti annars gerst hljóðlega og uppgötvast aðeins miklu síðar.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Að halda áfram að skýra frá mælikvörðum fyrir gervigreindaröld óbreyttum | Engin röskun, kunnugleg skýrslugjöf | Hættir á að fagna mælikvörðum sem hafa hljóðlega hætt að fylgja virði |
| Full mælikvarðasafnsendurskoðun og vísvitandi endurskoðun | Endurheimtir áreiðanlega mælingu | Krefst raunverulegrar greiningarfyrirhafnar og skipulagsbreytingastjórnunar |
| Að yfirgefa virkni- og afurðamælikvarða alveg | Fjarlægir mest útsettu áhættuna beint | Tapar sumu sannarlega gagnlegu samhengismerki (fyrirvari viðfangsefnis 3.4) |
| Að herða varnarmælikvarða án fullrar endurskoðunar | Fljótlegra í framkvæmd | Getur misst af mælikvörðum þar sem útsetning er minna augljós en skýrustu tilvikin |

Aðalspennan er **samfella mælinga á móti réttmæti mælinga**. Skipulagsheildir kjósa skiljanlega að halda áfram að skýra frá kunnuglegum mælikvörðum á kunnuglegan hátt, því að breyta mælikvarðaáætlun hefur raunverulegan skipulagskostnað og röskun. En að halda áfram að skýra frá mælikvarða sem hefur hljóðlega hætt að mæla það sem hann mældi áður er verra en röskun, það er virk misbeining. Leystu spennuna með því að meðhöndla þetta sem einmitt þá tegund vísvitandi, skjalfestrar stjórnarháttabreytingar sem viðfangsefni 1.4 lýsir, truflandi til skamms tíma en nauðsynlegri til að halda mælikvörðum skipulagsheildarinnar heiðarlegum.

## Spurningar til að ræða með teyminu

1. **Fyrir hvern mælikvarða á mælaborði okkar, myndi teymi sem notar gervigreindaraðstoð mikið en framleiðir ekki meira raunverulegt virði sýna bætta lesningu?** Gangið í gegnum mælikvarða ykkar skýrt með þessu prófi; þeir sem falla á því eru ykkar forgangsframbjóðendur fyrir endurskoðaða varnarmælikvarða eða afleggingu.

2. **Hefur afhendingartíðni okkar eða innsendingamagn hækkað síðan við tókum upp gervigreindarkóðunaraðstoð, og höfum við athugað hvort breytingabilunarhlutfall eða gallahlutfall hreyfðist samsvarandi?** Dragið fram raunveruleg pöruð gögn frekar en að gera ráð fyrir annaðhvort jákvæðri eða neikvæðri niðurstöðu.

3. **Heldur kóðayfirferðargeta okkar í við hvaða aukningu sem er í magni gervigreindaraðstoðaðs kóða, eða er yfirferðardýpt hljóðlega að rýrna undir auknum þrýstingi?** Athugið yfirferðarstigsmælikvarða (viðfangsefni 2.9) sérstaklega fyrir merki þess að stimpilhættan magnist.

4. **Merkjum við galla eftir því hvort upprunakóðinn var að verulegu leyti gervigreindarframleiddur, og ef svo er, hvað sýna þau gögn hingað til?** Ef þið merkið þetta ekki núna, ræðið hvað þyrfti til að byrja, því þessi gögn eru beint viðeigandi fyrir hvort söguleg gæðaforsenda ykkar halda enn.

5. **Höfum við vísvitandi endurskoðað mælikvarðasáttmála okkar (viðfangsefni 1.4) í ljósi þessarar breytingar, eða hefur mælingarvenja okkar einfaldlega haldið áfram óbreytt?** Ef heiðarlega svarið er það síðara er það bil einmitt það sem þetta viðfangsefni mælir með að loka fyrst.

6. **Hvernig myndi það líta út fyrir skipulagsheild okkar að vera gripin óviðbúin af þessari breytingu, fagnandi mælikvarða sem hefði þegar hætt að þýða það sem við héldum?** Þessi áþreifanlega, lítillega óþægilega hugsunartilraun hjálpar að hvetja endurskoðunina sem þetta viðfangsefni mælir með áður, frekar en eftir, að sú sviðsmynd gerist í raun.

## Geirasjónarhorn

**Sprotafyrirtæki.** Hröð upptaka gervigreindartóla er algeng og oft sannarlegt samkeppnisforskot, en sami hraðinn sem gerir upptöku aðlaðandi gerir óathugað mælikvarðarek líklegra. Byggðu vanann að athuga niðurstöðumælikvarða (5. hluti) samhliða öllum hagkvæmnibótum sem þú skýrir frá af gervigreindarupptöku, frekar en að skýra frá hraðabótum einum.

**Lítil fyrirtæki.** Gervigreindarkóðunaraðstoð getur marktækt útvíkkað getu lítils teymis, en stenstu freistinguna að skýra frá hrárri afurðaaukningu sem ótvíræðum árangri án þess að athuga gæðavarnarmælikvarða; lítið teymi hefur minni getu til að taka við ógreindu gæðavandamáli en stærri skipulagsheild með meiri offramboð.

**Stórfyrirtæki.** Umfang þessarar áhættu magnast verulega hér, því gervigreindarupptaka yfir tugi eða hundruð teyma samtímis getur breytt réttmæti mælikvarða yfir alla skipulagsheildina áður en nokkurt eitt teymi tekur eftir mynstrinu staðbundið. Framkvæmdu mælikvarðasafnsendurskoðunina sem þetta viðfangsefni mælir með á skipulagsheildarstigi, ekki bara teymi fyrir teymi, og uppfærðu stjórnarhætti (viðfangsefni 1.4) miðlægt og skýrt.

**Hið opinbera.** Opinberar skipulagsheildir taka oft upp nýja tækni varlegar, en mælikvarðarnir og viðmiðin sem notuð eru til að meta opinber tækniverkefni eru oft sótt í eða borin saman við iðnaðargögn einkageirans sem sjálf breytast undir þessum sama þrýstingi. Skildu skýrt hvaða iðnaðarviðmið sem þú berð saman við hafa orðið fyrir áhrifum af þessari breytingu áður en þú notar þau til að setja væntingar eða meta frammistöðu.

## Dæmi

**Stórfyrirtæki.** Verkfræðiforysta fjártæknifyrirtækis tók eftir að afhendingartíðni hafði hækkað um nær 40% á tveimur ársfjórðungum eftir víðtæka upptöku gervigreindarkóðunaraðstoðarmanna, og skýrði í fyrstu frá þessu sem ótvíræðum framleiðnisigri í kynningu fyrir stjórn. Nánari eftirfylgnigreining, kveikt af efins spurningu stjórnarmanns um hvort gæði hefðu verið athuguð, fann að breytingabilunarhlutfall hafði hækkað nær í takt við afhendingartíðni, sem vó algerlega upp augljósa ávinninginn þegar paraði stöðugleikamælikvarðinn var í raun skoðaður. Endurskoðuð skýrslugjöf fyrirtækisins setur nú afhendingartíðni og breytingabilunarhlutfall fram saman skýrt hvenær sem gervigreindaraðstoðaðar framleiðnifullyrðingar eru settar fram, sem forðast fyrri, næstum opinbera, villandi fullyrðinguna.

**Hið opinbera.** Upplýsingatæknideild ríkisstjórnar sem prófaði gervigreindarkóðunaraðstoð fyrir undirmengi verkfræðiteyma sinna fann að hrátt kóðaafurðamagn á verkfræðing hafði aukist verulega, tala sem var í fyrstu vitnað í jákvætt í innri tilraunayfirferð. Nánari greining, kveikt af því að leiðsögn þessarar bókar var felld inn í matsramma deildarinnar, skoðaði hlutfall sloppinna galla fyrir gervigreindaraðstoðaða á móti ekki-gervigreindaraðstoðaða vinnu sérstaklega og fann hóflega hækkað gallahlutfall í gervigreindaraðstoðaða hópnum, einbeitt í jaðartilvikameðhöndlun fyrir óvenjulegar aðstæður borgara sem gervigreindartólið hafði ekki orðið fyrir við þjálfun. Þessi niðurstaða stöðvaði ekki tilraunina en leiddi til sértækrar, markvissrar aukningar á yfirferðarstrangleika fyrir gervigreindaraðstoðaðar breytingar sem snertu réttindajaðartilvikarökfræði, sem tók á raunverulegu áhættunni sem hráa afurðarmælikvarðinn einn hefði aldrei leitt í ljós.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af því að framkvæma þessa endurskoðun fyrirbyggjandi er að forðast opinbera eða stjórnarstigs vandræðagang af því að skýra frá mælikvarða sem reynist, undir rýni, hafa mælt ekkert raunverulegt, nákvæmlega sviðsmyndin sem fjártæknidæmið hér að ofan framleiddi næstum. Skipulagsheild sem kemst fram úr þessari breytingu viðheldur trúverðugleika gagnvart hagsmunaaðilum sínum; ein sem er gripin við að skýra frá innantómum mælikvarða greiðir raunverulegan, og að mestu forðanlegan, orðsporskostnað.

Heildareignarkostnaður er greiningarfyrirhöfnin við að endurskoða fyrirliggjandi mælikvarðasafn, herða varnarmælikvarða og uppfæra stjórnarhættaskjölun, einskiptis, hófleg fjárfesting miðað við áframhaldandi áhættu af því að halda áfram að skýra frá mælikvörðum sem hafa hljóðlega hætt að mæla það sem þeir segjast mæla. Þessi kostnaður er líka endurtekinn á lægra stigi, því þessi breyting er áframhaldandi, ekki einskiptis atburður, og regluleg endurskoðun eftir því sem tól og upptökumynstur þróast áfram er hæfileg, varanleg viðbót við stjórnarháttatíðni mælikvarða.

## Andmynstur og gildrur

- **Að halda áfram að skýra frá virknimælikvörðum fyrir gervigreindaröld óbreyttum og órýnt:** hættir á að fagna mælikvarða sem hefur hljóðlega hætt að fylgja raunverulegu virði.
- **Að skýra frá aukningu afhendingartíðni eða afurðamagns án paraðs stöðugleikavarnarmælikvarða:** endurtekur viðvörun viðfangsefnis 2.10 með talsvert hærri hagsmunum undir gervigreindaraðstoðaðri þróun.
- **Að gera ráð fyrir að gervigreindarframleiddur kóði beri sama gallasnið og mannskrifaður kóði án þess að athuga:** óprófuð forsenda sem gæti verið virkt röng.
- **Að leyfa yfirferðardýpt að rýrna hljóðlega undir auknu magni gervigreindarframleidds kóða:** stimpilhættan úr viðfangsefni 2.9, magnuð.
- **Að meðhöndla þessa breytingu sem einskiptis aðlögun frekar en áframhaldandi áhyggjuefni:** tólin og upptökumynstur þeirra halda áfram að þróast, og mælingarvenja þarf að fylgja.
- **Að bera saman við iðnaðarviðmið án þess að skilja hvort þau viðmið hafa sjálf breyst undir sama þrýstingi:** hættir á falskri tilfinningu fyrir hlutfallslegri frammistöðu.

## Þroskalíkan

- **Stig 1, Upphaf:** Mælikvarðar fyrir gervigreindaröld eru skýrðir óbreyttir, án vitundar um að gervigreindarupptaka kunni að hafa haft áhrif á réttmæti þeirra.
- **Stig 2, Þróun:** Einhver vitund um breytinguna er til, en engin kerfisbundin endurskoðun á fyrirliggjandi mælikvarðasafni hefur verið framkvæmd.
- **Stig 3, Stöðlun:** Full mælikvarðasafnsendurskoðun hefur verið framkvæmd, með hertum varnarmælikvörðum og mælikvörðum skjalfestum sem fyrir áhrifum eða seigum, í allri skipulagsheildinni.
- **Stig 4, Stjórnun:** Gallar og gæðaniðurstöður eru virkt merktar og raktar eftir gervigreindaraðstoðarstigi til að prófa, ekki gera ráð fyrir, að söguleg gæðasambönd skipulagsheildarinnar haldi enn.
- **Stig 5, Samhæfing:** Skipulagsheildin hefur þroskaða, áframhaldandi venju að endurskoða mælikvarða sína eftir því sem gervigreindartól og upptökumynstur halda áfram að þróast, og getur bent á tilteknar stjórnarháttaákvarðanir teknar fyrirbyggjandi sem svar við þessari breytingu frekar en viðbragðsbundið eftir að vandi birtist.

## Hugmyndir til umræðu

1. Hvaða núverandi mælikvarðar okkar myndu mest flattera teymi sem notar gervigreindaraðstoð mikið en framleiðir ekki meira raunverulegt virði?
2. Hefur afhendingartíðni okkar hækkað síðan við tókum upp gervigreind, og hefur breytingabilunarhlutfall hreyfst með?
3. Merkjum við gæðaniðurstöður eftir gervigreindaraðstoðarstigi, og hvað myndu þau gögn sýna?
4. Heldur yfirferðargeta okkar í við aukningu í magni gervigreindarframleidds kóða?
5. Við hvaða iðnaðarviðmið berum við okkur núna saman, og hefur það sjálft breyst undir þessum þrýstingi?

## Helstu atriði til að muna

- Kynslóðargervigreind er **viðmiðaskipti í því sem nokkrir fyrirliggjandi mælikvarðar mæla**, ekki stigvaxandi tólabreyting; sumir mælikvarðar hafa hljóðlega hætt að þýða það sem þeir þýddu áður.
- **Virkni- og hráir afurðamælikvarðar eru mest útsettir**; niðurstöðumælikvarðar (5. hluti) eru hlutfallslega seigir.
- **Hertu varnarmælikvarða, einkum breytingabilunarhlutfall**, í hlutfalli við upptöku gervigreindaraðstoðaðrar þróunar.
- **Prófaðu, gerðu ekki ráð fyrir, hvort gervigreindarframleiddur kóði beri annað gallasnið** en mannskrifaður kóði, með merktum sloppinna-galla-gögnum.
- Meðhöndlaðu þetta sem **áframhaldandi, ekki einskiptis, stjórnarháttaáhyggjuefni** (viðfangsefni 1.4), því tólin og upptökumynstur þeirra halda áfram að þróast.

## Heimildir og frekara lesefni

- *Accelerate: The Science of Lean Software and DevOps*, eftir Nicole Forsgren, Jez Humble og Gene Kim (niðurstöðubyggði mælingargrunnurinn sem þetta viðfangsefni heldur fram að verði mikilvægari, ekki minna, undir þessari breytingu).
- Rannsóknir GitHub á paraforritun með gervigreind og framleiðni þróunaraðila (iðnaðarrannsóknir á mælanlegum áhrifum gervigreindaraðstoðaðrar þróunar).
- DevOps Research and Assessment áætlun Google Cloud, [dora.dev](https://dora.dev/) (áframhaldandi State of DevOps rannsókn sem hefur á undanförnum árum innlimað niðurstöður um gervigreindarupptöku).
- *The Tyranny of Metrics*, eftir Jerry Z. Muller (almennu rökin fyrir tortryggni gagnvart magnbundnum mælikvörðum, beint viðeigandi þegar afurðamagn verður ódýrt).
