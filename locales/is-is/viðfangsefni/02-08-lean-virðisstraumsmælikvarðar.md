# 2.8 Lean-virðisstraumsmælikvarðar

## Yfirlit og tilgangur

Sérhver mælikvarði sem þessi hluti hefur náð yfir hingað til, flæðistími, flæðisálag, ferlitími, nýting, er kominn af mun eldra verkfærasafni: fimm grunnmælingum klassískrar **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)** virðisstraumskortlagningar, sem þróuð var hjá Toyota og alhæfð yfir framleiðslu, rekstur og þjónustuafhendingu löngu áður en hugbúnaður tók hana upp. **Leiðartími (LT)** er heildarklukkutími frá því vinna er beðin um þar til hún er afhent. **Vinnslutími (PT)** er raunverulegur handavinnutími sem fer í eina einingu. **Ferlitími (CT)** er meðaltími sem þarf til að ljúka einum hnút eða áfanga í straumnum. **Hlutfall fullbúins og nákvæms (%C/A)** er hundraðshluti eininga sem niðurstreymisteymi getur unnið úr án þess að þurfa endurvinnu. **Taktur-tími** er hámarks ásættanlegur tími til að ljúka einingu til að passa hreint við eftirspurn viðskiptavina.

Þetta viðfangsefni er til því hugbúnaðarverkfræði fann ekki upp þessar hugmyndir, hún fékk þær að láni, og lánið endurnýtti stundum sömu orð fyrir lítillega ólíka hluti. Eigin ferlitími þessarar bókar (viðfangsefni 2.6) mælir verkfræðistig breytingar sérstaklega, kóðun, yfirferð, prófun, afhendingu, meðan klassískur CT í Lean er hið almennara „meðaltími á hnút“ beitt á hvaða ferli sem er. Flæðistími (viðfangsefni 2.4) er nafn þessarar bókar á því sem Lean kallar leiðartíma. Að þekkja varpið skiptir máli því lesandi úr Lean Six Sigma bakgrunni, algengur í framleiðslu, flutningum, heilbrigðisþjónustu og rekstri hins opinbera, mun nota nákvæmlega þessi hugtök með upprunalegri merkingu, og hugbúnaðarteymi sem talar ekki sama mál fórnar auðveldri, sönnunarstuddri brú til samstarfsfólks utan verkfræði.

Fyrir stór teymi er %C/A vannýttasti mælikvarði þessa viðfangsefnis. Hann fangar eitthvað sem flæðimælikvarðar viðfangsefna 2.3 og 2.4 gera ekki: hve mikið af því sem stig framleiðir er í raun nothæft fyrir næsta stig án þess að vera sent til baka. Samantekinn yfir fjölstiga virðisstraum, hugtak sem framleiðsla kallar **samanlagða afkastanýtingu** (rolled throughput yield), afhjúpar %C/A hvernig endurvinna magnast ósýnilega yfir yfirfærslur, mynstur sem stórfyrirtæki með langar, fjölteymis leiðslur og opinber verkefni með mörg samþykkishlið eru sérstaklega hætt við og mæla sjaldan beint.

## Lykilmeginreglur

- **Þessir fimm mælikvarðar eru eldri en hugbúnaður og alhæfast út fyrir hann.** Þeir eru sameiginlegi orðaforðinn sem hagsmunaaðili með Lean Six Sigma þjálfun, algengur í stórfyrirtækjum og rekstri hins opinbera, talar þegar reiprennandi.
- **Hugtakaárekstur er raunverulegur og vert að nefna skýrt.** Ferlitími þessarar bókar (viðfangsefni 2.6) og klassískur CT í Lean eru skyld en ekki eins; skjalaðu varpið svo þvertengd samtöl tali ekki hljóðlega hvert fram hjá öðru.
- **%C/A verður að taka saman yfir sérhvert stig, ekki mæla einu sinni í lokin.** Endurvinna sem kemur inn snemma í straumi og er gripin seint er ósýnileg mælikvarða sem aðeins er mældur við lokaafhendingu.
- **Taktur-tími endurrammar getuáætlun kringum eftirspurn, ekki fyrirhöfn.** Spurningin færist úr „hve hratt getum við farið“ í „hve hratt þurfum við að fara“, sem tengist beint nýtingu (viðfangsefni 2.7) og flæðisálagi (viðfangsefni 2.4).
- **Þetta eru greiningarmælikvarðar, ekki hégómamælikvarðar.** Hver er til að svara sértækri rekstrarspurningu, ekki til að framleiða áhrifamikla tölu fyrir mælaborð.

## Ráðleggingar

### Kortleggðu virðisstrauminn með öllum fimm Lean-mælikvörðunum áður en þú tekur upp hugbúnaðarsértækan ramma

Reiknaðu leiðartíma, vinnslutíma, ferlitíma, %C/A og taktur-tíma fyrir dæmigert úrtak vinnu sem fer gegnum virðisstrauminn áður en þú leggur eigin mælikvarða Flæðirammans (viðfangsefni 2.3 og 2.4) ofan á. Þetta gefur þér grunn sem sérhver hagsmunaaðili sem er læs á Lean Six Sigma skilur strax, og það dregur oft fram sömu yfirburði biðtíma og viðfangsefni 2.5 lýsir, sett fram í orðaforða sem er eldri en og lifir lengur en nokkur tiltekinn hugbúnaðarrammi.

### Taktu %C/A saman margföldunarlega yfir sérhvert stig

Mældu %C/A á hverju stigi fyrir sig, margfaldaðu síðan stigshlutföllin saman til að fá samanlagða afkastanýtingu virðisstraumsins. Þrjú stig sem hvert um sig keyra á 90% fullbúið og nákvæmt magnast í um 73% í heild, tala sem líkist engu eigin skýrslu nokkurs stigs og er yfirleitt sú heiðarlegri. Þessi eini útreikningur er fljótlegasta leiðin til að afhjúpa hve mikla endurvinnu fjölstigaleiðsla tekur í raun við.

### Settu taktur-tíma skýrt út frá raunverulegum eftirspurnargögnum viðskiptavina, ekki getu

Reiknaðu taktur-tíma sem tiltækan vinnutíma deilt með eftirspurn viðskiptavina á því tímabili, vísvitandi óháð því hve hratt teymið þitt getur unnið í dag. Berðu mældan vinnslutíma og ferlitíma saman við þessa tölu: vinnslutími þægilega undir taktur-tíma bendir til heilbrigðs slaka, meðan ferlitími yfir taktur-tíma er áþreifanleg, magnbundin sönnun á getuskorti, ekki bara tilfinning um að hlutir séu á eftir.

### Skjalaðu varpið milli Lean-hugtaka og eigin orðaforða þessarar bókar

Þar sem skipulagsheild þín rekur þegar Lean Six Sigma áætlun utan hugbúnaðar, eða þar sem verkfræði skilar til forystu sem er reiprennandi í þeim orðaforða, skrifaðu varpið skýrt niður í mælikvarðasáttmála þínum (viðfangsefni 1.4): flæðistími þessarar bókar er leiðartími Lean, ferlitími þessarar bókar (viðfangsefni 2.6) er sértæk beiting almennari CT í Lean, og virkur tími þessarar bókar (viðfangsefni 2.5) er vinnslutími Lean. Þetta eina skjal kemur í veg fyrir endurtekna, lítilvæga rökræðu um hvers tölur séu „raunverulegar“.

### Notaðu %C/A sem varnarmælikvarða samhliða flæðishraða, ekki í staðinn fyrir hann

Paraðu samanlagða afkastanýtingu við flæðishraða (viðfangsefni 2.3) á sama hátt og þessi bók parar hvern hraðamælikvarða við stöðugleikavarnarmælikvarða. Hækkandi atriðafjöldi með lækkandi samanlögðu %C/A þýðir að virðisstraumurinn afhendir fleiri einingar sem þarfnast í vaxandi mæli endurvinnu síðar, einmitt hraði-án-gæða mynstrið sem viðfangsefni 1.2 varar sérhverja mælikvarðafjölskyldu við að verjast.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Aðeins klassískir Lean-mælikvarðar (LT, PT, CT, %C/A, taktur-tími) | Almennur orðaforði; virkar yfir hugbúnaðar- og öðrum teymum jafnt | Ekki hugbúnaðarsértækir; þarfnast þýðingar fyrir verkfræðisértæk stig |
| Aðeins mælikvarðar Flæðirammans (viðfangsefni 2.3, 2.4) | Sérsmíðaðir fyrir hugbúnaðarvirðisstrauma og sýnileika atriðagerða | Ókunnuglegir hagsmunaaðilum með Lean Six Sigma þjálfun utan verkfræði |
| Bæði, með skýrt skjalfestu varpi | Talar báða orðaforðana; sterkasta þvertengda brúin | Krefst aga fyrirfram að skrifa varpið niður og halda því uppfærðu |
| %C/A mælt aðeins við lokaafhendingu | Einfalt, ein tala | Felur endurvinnu sem kom inn og var gripin fyrr í straumnum |

Aðalspennan er **almennt notagildi á móti sértækni**. Klassískir Lean-mælikvarðar eru strax læsilegir öllum með reynslu úr framleiðslu, rekstri eða Six Sigma, en þeir voru ekki hannaðir með sértæk stig hugbúnaðar í huga, kóðayfirferð, sjálfvirkar prófanir, afhendingarsamþykki. Leystu spennuna með því að nota Lean-mælikvarðana sem sameiginlegan grunnorðaforða fyrir þvertengd samtöl og samtöl við framkvæmdastjórn, og eigin mælikvarða Flæðirammans (viðfangsefni 2.3 og 2.4) fyrir hugbúnaðarsértæku greiningarvinnuna sem verkfræðiteymi vinna dag frá degi.

## Spurningar til að ræða með teyminu

1. **Gætum við reiknað alla fimm klassísku Lean-mælikvarðana fyrir virðisstraum okkar í dag, eða höfum við aðeins suma þeirra?** Flest hugbúnaðarteymi hafa jafngildi flæðistíma og ferlitíma en hafa aldrei reiknað vinnslutíma, %C/A eða taktur-tíma skýrt. Greinið hverjir af fimm vantar í raun áður en þið gerið ráð fyrir að bilið sé lítið.

2. **Höfum við nokkurn tímann tekið %C/A saman yfir sérhvert stig virðisstraums okkar, eða aðeins mælt það við lokaafhendingu?** Ein mæling í lok straums felur einmitt magnandi endurvinnuna sem samanlagður afkastanýtingarútreikningur þessa viðfangsefnis er hannaður til að afhjúpa. Reynið samantektarútreikninginn með raunverulegum gögnum.

3. **Þekkjum við taktur-tíma okkar, reiknaðan úr raunverulegri eftirspurn viðskiptavina, og hvernig ber mældur ferlitími okkar sig saman við hann?** Flest teymi hafa aldrei gert þennan samanburð skýran, sem þýðir að getusamtöl haldast sögusagnakennd frekar en magnbundin.

4. **Ef hagsmunaaðili með Lean Six Sigma þjálfun utan verkfræði spyrði um ferlitíma okkar, værum við viss um að við eigum við sama og hann?** Ferlitími þessarar bókar (viðfangsefni 2.6) og klassískur CT í Lean eru skyld en ekki eins. Ræðið hvort sá greinarmunur hefur nokkurn tímann valdið raunverulegum misskilningi í skipulagsheild ykkar.

5. **Hefur samanlögð afkastanýting okkar nokkurn tímann verið marktækt lægri en skýrt %C/A nokkurs eins stigs?** Ef þið hafið aldrei reiknað samantektina, ræðið hvað þið mynduð búast við að finna og athugið það síðan gegn raunverulegum gögnum.

6. **Rekur skipulagsheild okkar þegar Lean- eða Six Sigma áætlun utan hugbúnaðar sem við gætum samræmst frekar en að viðhalda sérstökum, ótengdum orðaforða?** Mörg stórfyrirtæki og opinberar stofnanir hafa þegar þessa innviði; athugið hvort verkfræði hefur nokkurn tímann í raun tengst þeim.

## Geirasjónarhorn

**Sprotafyrirtæki.** Full Lean-virðisstraumskortlagning er sjaldan fyrirhafnarinnar virði í þessum mæli, en taktur-tími er vert að skilja óformlega: að vita nokkurn veginn hve hratt teymið þarf í raun að hreyfast til að mæta raunverulegri eftirspurn viðskiptavina, frekar en handahófskenndum innri hraða, kemur í veg fyrir bæði að byggja getu of snemma og of lítið þegar vöxtur berst.

**Lítil fyrirtæki.** %C/A er gagnlegasti mælikvarðinn af fimm hér strax, því hann svarar beint „hve mikið af því sem við afhendum þarf að endurgera“, spurningu sem eigendur og lítil teymi finna sárt án þess alltaf að hafa tölu við hana. Raktu hann óformlega fyrir eitt eða tvö mikilvæg ferli þín áður en þú fjárfestir í neinu flóknara.

**Stórfyrirtæki.** Hér vinnur klassíski Lean-orðaforðinn fyrir sér, því stórfyrirtæki reka mjög oft þegar Lean Six Sigma áætlun í rekstri, framleiðsluskyldum deildum eða sameiginlegri þjónustu, og verkfræði sem talar sama mál fær tafarlausa, trúverðuga brú til þeirra deilda í stað þess að þurfa að réttlæta sérstakt, hugbúnaðar-eingöngu mælikvarðasafn frá grunni.

**Hið opinbera.** Opinberar stofnanir, einkum þær með rætur í eftirlits-, framleiðsluskyldum eða flutningastarfsemi, hafa oft þegar Lean- eða ferlabótaumboð. Að ramma virðisstraum stafrænnar þjónustu í sömu klassísku hugtökum, leiðartíma, vinnslutíma, %C/A, taktur-tíma, og ferlabótaskrifstofa stofnunar notar þegar er oft fljótlegasta leiðin til að tryggja raunverulegan stofnanastuðning við hugbúnaðarnútímavæðingu.

## Dæmi

**Stórfyrirtæki.** Innri hugbúnaðardeild framleiðslufyrirtækis hafði árum saman átt í erfiðleikum með að fá verkfræðimælikvarða sína tekna alvarlega af rekstrarforystu sem var reiprennandi í Lean Six Sigma frá verksmiðjugólfinu. Að endurramma afhendingarleiðslu deildarinnar með sömu fimm klassísku mælikvörðunum, að reikna leiðartíma, vinnslutíma, ferlitíma, %C/A og taktur-tíma fyrir hugbúnaðarvirðisstraum hennar, gerði tölur deildarinnar strax læsilegar rekstrarforystu í fyrsta sinn. Samanlagður afkastanýtingarútreikningur yfir fjögur stig leiðslunnar leiddi í ljós raunverulegt %C/A upp á 61%, langt undir skýrðri tölu nokkurs einstaks stigs, sem varð sönnunargrunnur fyrir endurvinnuminnkunarátak sem rekstrarforysta fjármagnaði innan sama ársfjórðungs.

**Hið opinbera.** Stafrænt leyfisteymi samgöngudeildar ríkis, sem skilaði til stofnunar með rótgróna Lean ferlabótaskrifstofu, hafði aldrei leitað til þeirrar skrifstofu því eigin mælikvarðar þess notuðu hugbúnaðarsértækt mál sem skrifstofan þekkti ekki. Eftir að hafa þýtt leyfisvirðisstrauminn í leiðartíma, vinnslutíma og %C/A, greindi ferlabótaskrifstofan að raunveruleg skorða teymisins var ekki verkfræðihraði heldur niðurstreymis lögfræðiyfirferðarstig sem keyrði langt undir eigin virkum taktur-tíma miðað við leyfaeftirspurn, niðurstaða sem skrifstofan var í stakk búin að bregðast við strax því hún var sett fram í kunnuglegum hugtökum.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af því að taka upp klassískan Lean-orðaforða samhliða hugbúnaðarsértækum mælikvörðum þessarar bókar er trúverðug, tafarlaus brú að ferlabótaþekkingu og fjármögnun sem oft er þegar til annars staðar í stórri skipulagsheild. Framleiðslufyrirtækisdæmið hér að ofan, sem tryggði endurvinnuminnkunarfjármögnun sama ársfjórðung og endurrömmunin gerði rökin læsileg, er mynstrið sem nálgun þessa viðfangsefnis framleiðir áreiðanlega: innsýnin var ekki ný, en orðaforðinn sem gerði hana framkvæmanlega fyrir réttan áheyrendahóp var það.

Heildareignarkostnaður er lágur: þessir fimm mælikvarðar krefjast engrar nýrrar tækjavæðingar umfram það sem viðfangsefni 2.4 til 2.6 safna þegar, auk %C/A endurvinnuflokkunar sem er yfirleitt einföld viðbót við fyrirliggjandi rakningu galla og flæðiatriða (viðfangsefni 2.2). Aðalfjárfestingin er þýðing, að skrifa niður varpið milli hugtaka þessarar bókar og klassískra hugtaka Lean, sem borgar sig upp í fyrsta sinn sem hún kemur í veg fyrir þvertengdan misskilning.

## Andmynstur og gildrur

- **Að mæla %C/A aðeins við lokaafhendingu:** leikvektorinn í hjarta þessa viðfangsefnis. Teymi getur skýrt frá háu %C/A á lokastigi meðan fyrri stig framleiða hljóðlega endurvinnu sem er löguð áður en nokkur mælir, sem lætur allan virðisstrauminn líta heilbrigðari út en hann er. Varnarmælikvarðinn er að taka %C/A saman margföldunarlega yfir sérhvert stig, samanlagður afkastanýtingarútreikningurinn, og endurskoða skilgreiningu hvers stigs á „fullbúið og nákvæmt“ reglulega svo hún geti ekki þrengst hljóðlega með tímanum.
- **Að gera ráð fyrir að ferlitími þessarar bókar og klassískur CT í Lean þýði nákvæmlega það sama:** veldur raunverulegum þvertengdum ruglingi þegar orðaforðarnir tveir mætast án skjalfests varps.
- **Að setja taktur-tíma út frá núverandi getu í stað raunverulegrar eftirspurnar viðskiptavina:** eyðir tilgangi mælikvarðans, sem er að afhjúpa bil milli eftirspurnar og getu, ekki að staðfesta hvaða hraða sem þegar er til.
- **Að meðhöndla klassíska Lean-mælikvarða sem úrelta þegar hugbúnaðarsértækur rammi er tekinn upp:** hendir trúverðugri, sönnunarstuddri brú að ferlabótaþekkingu sem kann þegar að vera til í skipulagsheildinni.
- **Að hunsa fyrirliggjandi Lean Six Sigma áætlun annars staðar í skipulagsheildinni:** fórnar fjármögnun, þekkingu og stofnanatrúverðugleika sem endurrömmun afhendingarmælikvarða í sameiginlegu máli gæti opnað.
- **Að skýra frá %C/A án þess að para það við flæðishraða:** leyfir hækkandi afkastatölu að fela fallandi endurvinnuhlutfall, sama varnarmælikvarðabil og þessi bók varar við í gegnum allt.

## Þroskalíkan

- **Stig 1, Upphaf:** Enginn af fimm klassísku Lean-mælikvörðunum er reiknaður; afhending er rædd án vísunar í leiðartíma, vinnslutíma eða %C/A.
- **Stig 2, Þróun:** Leiðartími og ferlitími eru rakin óformlega, en vinnslutími, %C/A og taktur-tími eru ekki reiknuð, og ekkert varp á eigin orðaforða þessarar bókar er til.
- **Stig 3, Stöðlun:** Allir fimm klassísku mælikvarðarnir eru reiknaðir samkvæmt, og varpið á flæðis- og ferlitímaorðaforða þessarar bókar er skjalfest í sameiginlegum mælikvarðasáttmála.
- **Stig 4, Stjórnun:** Samanlögð afkastanýting er reiknuð yfir sérhvert stig virðisstraumsins, og taktur-tími er borinn saman við mældan ferlitíma til að magnbinda getubil skýrt.
- **Stig 5, Samhæfing:** Skipulagsheildin hefur tengt hugbúnaðarafhendingarmælikvarða sína við fyrirliggjandi Lean- eða Six Sigma áætlun annars staðar í rekstrinum, og getur bent á tilteknar fjárfestingar- eða ferlisákvarðanir teknar því sameiginlegi orðaforðinn gerði innsýn framkvæmanlega fyrir áheyrendur utan verkfræði.

## Hugmyndir til umræðu

1. Gætum við reiknað leiðartíma, vinnslutíma, ferlitíma, %C/A og taktur-tíma fyrir virðisstraum okkar í dag?
2. Hver væri samanlögð afkastanýting okkar ef við margfölduðum saman %C/A hvers stigs?
3. Rekur skipulagsheild okkar þegar Lean- eða Six Sigma áætlun sem við höfum aldrei tengt verkfræðimælikvarða við?
4. Hvernig ber mældur ferlitími okkar sig saman við taktur-tíma okkar, reiknaðan úr raunverulegri eftirspurn viðskiptavina?

## Helstu atriði til að muna

- Fimm klassísku Lean-mælikvarðarnir, **leiðartími, vinnslutími, ferlitími, hlutfall fullbúins og nákvæms og taktur-tími**, eru eldri en hugbúnaður og eru áfram sameiginlegi orðaforði hagsmunaaðila með Lean Six Sigma þjálfun.
- **Flæðistími og ferlitími þessarar bókar varpast á, en eru ekki eins og,** leiðartími og klassískur CT í Lean; skjalaðu varpið skýrt til að forðast þvertengdan rugling.
- Aðalleikvektor viðfangsefnisins er **að mæla %C/A aðeins við lokaafhendingu**; varnarmælikvarðinn er að taka það saman margföldunarlega yfir sérhvert stig sem samanlagða afkastanýtingu.
- **Taktur-tími endurrammar getu kringum raunverulega eftirspurn viðskiptavina**, ekki núverandi hraða, og parast beint við nýtingu (viðfangsefni 2.7) og flæðisálag (viðfangsefni 2.4).
- Að endurramma hugbúnaðarafhendingu í klassískum Lean-hugtökum er oft fljótlegasta leiðin til að tengjast **fyrirliggjandi ferlabótaþekkingu og fjármögnun** í stórri skipulagsheild.

## Heimildir og frekara lesefni

- Rother, Mike, og John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., og Daniel T. Jones. *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones og Daniel Roos. *The Machine That Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill, 2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press, 1988.
