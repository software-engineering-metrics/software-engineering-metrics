# 2.1 Flæðiramminn

## Yfirlit og tilgangur

**Flæðiramminn** (Flow Framework) er stjórnunar- og byggingarlíkan sem Mik Kersten skapaði og birti í bók sinni *Project to Product* frá 2018. Hann er til að svara spurningu sem hreinir leiðslumælikvarðar geta ekki svarað: ekki aðeins hve hratt og örugglega kóði flyst frá innsendingu í framleiðslu, heldur hvers konar virði flæðir yfirleitt gegnum leiðsluna, og hvort sú blanda endurspeglar raunverulega stefnu fyrirtækisins. Ramminn meðhöndlar hugbúnaðarafhendingu sem **[virðisstraum](https://en.wikipedia.org/wiki/Value_stream)**, heildarröð athafna sem breytir hugmynd í virði sem viðskiptavinur fær, og sækir beint í hefð virðisstraumskortlagningar úr Lean-framleiðslu.

Þessi bók notar Flæðiramman sem skipulagsbyggingu 2. hluta. Viðfangsefni 2.2 kynnir fjögur flæðiatriði hans, viðfangsefni 2.3 og 2.4 kynna fimm flæðimælikvarða hans, viðfangsefni 2.8 rekur þá mælikvarða aftur til uppruna síns í klassískri Lean-virðisstraumskortlagningu og viðfangsefni 2.10 nær yfir DORA-mælikvarðana sem þrengri, leiðslumiðaðan tilvísunarramma sem þessi hluti leiðir ekki lengur með. Það er viljandi val, ekki höfnun á rannsóknum DORA. DORA mælir afköst kerfis og stöðugleika með sannri tölfræðilegri nákvæmni, en er þögull um spurninguna sem viðskiptaleiðtoga er í raun mest umhugað um: af öllu sem verkfræðiskipulagsheildin afhenti þennan ársfjórðung, hve mikið var nýtt viðskiptavirði, og hve mikið var hljóðlega étið upp af lagfæringum galla, áhættustýringu eða niðurgreiðslu skuldar. Flæðiramminn er til sérstaklega til að gera þá blöndu sýnilega.

Fyrir stór teymi er þessi greinarmunur ekki fræðilegur. Vettvangsskipulagsheild sem rekur tugi virðisstrauma getur haft framúrskarandi DORA-tölur, hraðar, tíðar, stöðugar afhendingar, meðan raunveruleg vöruafurð hennar hefur hljóðlega rekið í átt að nær hreinu viðhaldi, mynstur ósýnilegt mælaborði sem mælir aðeins vélfræði leiðslu. Stórfyrirtæki og hið opinbera, sem verða að réttlæta verkfræðifjárfestingu fyrir hagsmunaaðilum sem hugsa í viðskiptahugtökum, ekki leiðsluhugtökum, þurfa orðaforða sem tengir afhendingarvirkni við stefnumarkandi ásetning. Það er það sem þessi rammi veitir.

## Lykilmeginreglur

- **Virðisstraumur er mælieiningin, ekki teymi eða leiðsla.** Hann nær frá þörf viðskiptavinar eða fyrirtækis til afhentrar niðurstöðu, og fer yfir hvaða teymismörk sem vinnan fer í raun yfir.
- **Flæðiatriði gera „hvað“ sýnilegt, ekki bara „hve hratt“.** Fjórir flokkar viðfangsefnis 2.2, eiginleikar, gallar, áhættur og skuld, breyta óbeinni forgangsröðunarákvörðun í skýra, mælanlega.
- **Úthlutun getu yfir flæðiatriði er núllsumma.** Meiri geta varin á eina gerð atriða er minni geta tiltæk fyrir hinar; ramminn gerir þá málamiðlun sýnilega í stað þess að skilja hana eftir óbeina.
- **Flæðimælikvarðarnir fimm svara viðskiptaspurningum, ekki bara verkfræðispurningum.** Þeir eru hannaðir til að vera settir fram fyrir ótæknilegan hagsmunaaðila, ekki geymdir innan verkfræðiteymis.
- **Virðisstraumsstjórnun ætti að vera samfelld, ekki einskiptis kortlagningaræfing.** Kyrrstæð virðisstraumskort úreldast; ramminn er byggður til að vera tækjavæddur úr tólunum sem teymi nota þegar.

## Ráðleggingar

### Kortleggðu virðisstrauminn áður en þú tækjavæðir nokkuð

Áður en þú tekur upp nokkurn flæðimælikvarða, gakktu hina raunverulegu leið sem vinnuhlutur fer frá því að viðskiptaþörf er greind þar til viðskiptavinur fær virði, og nefndu hvert stig og hverja yfirfærslu milli teyma. Þetta er klassíska [virðisstraumskortlagning](https://en.wikipedia.org/wiki/Value_stream_mapping), aðlöguð úr Lean-framleiðslu, og að sleppa henni er algengasta ástæða þess að upptaka Flæðirammans framleiðir tölur sem enginn treystir: mælikvarðar reiknaðir gegn órannsökuðu, óformlega skildu ferli passa sjaldan við það sem raunverulega gerist.

### Tengdu flæðimælikvarða við tólin sem teymi þín nota þegar

Flæðiramminn er byggður fyrir samfellda, sjálfvirka virðisstraumsstjórnun, ekki reglubundna handvirka kortlagningaræfingu. Samþættu rakningu flæðiatriða beint í tólin sem vinna flæðir þegar gegnum, Jira, Azure DevOps, GitHub, frekar en að smíða samhliða rakningarkerfi sem teymi þurfa að uppfæra með höndunum. Staða flæðiatriðis ætti að uppfæra sig sjálf þegar undirliggjandi miði eða sameiningarbeiðni hreyfist, sami tækjavæðing-fram-yfir-sjálfsskýrslu agi og viðfangsefni 1.5 mælir með fyrir hvern mælikvarða í þessari bók.

### Settu flæðisdreifingu fram fyrir viðskiptahagsmunaaðila beint, ekki bara verkfræðiforystu

Stærsta glatað tækifæri þessa ramma er að meðhöndla hann sem innra verkfræðitól. Flæðisdreifing, hlutfall vinnu sem fer í eiginleika á móti göllum, áhættu og skuld (viðfangsefni 2.3), er hönnuð sérstaklega til að vera samtal sem þú átt við vöru- og viðskiptaforystu, því hún gerir óbeina forgangsröðunarákvörðun, hve mikil geta fer í nýtt virði á móti að halda ljósunum kveiktum, skýra og samningshæfa í stað þess að vera gefna.

### Meðhöndlaðu flæðiatriðin fjögur sem raunverulega flokkun, ekki formsatriði

Krefstu þess að hver vinnueining sé flokkuð í nákvæmlega eina af fjórum gerðum flæðiatriða við upptöku, ekki eftir á. Flokkun beitt eftir á, eða beitt lauslega því „þetta er í grunninn eiginleiki“, rýrir allt virði flokkunarinnar, því allur tilgangurinn er heiðarleg, samkvæm skrá yfir hvert getan fór í raun.

### Endurskoðaðu virðisstraumskortið þegar skipulagsheildin breytist, ekki á fastri áætlun

Virðisstraumskort úreldist um leið og teymismörk, tól eða varan sjálf breytast verulega, ekki á einhverri handahófskenndri ársfjórðungs- eða ársáætlun. Meðhöndlaðu endurskipulagningu, stóran tólaflutning eða umtalsverða vörubreytingu sem kveikju til að ganga virðisstrauminn aftur, því flæðimælikvarði reiknaður gegn úreltu korti mælir hljóðlega rangan hlut.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Aðeins leiðslumælikvarðar (DORA, viðfangsefni 2.10) | Einfaldir, vel staðfestir, ódýrir að tækjavæða úr fyrirliggjandi CI/CD-gögnum | Þögulir um hvers konar virði er afhent |
| Full upptaka Flæðirammans | Tengir afhendingu við viðskiptastefnu; gerir virðisblöndu sýnilega og samningshæfa | Krefst heiðarlegs virðisstraumskorts og samkvæms aga við flokkun flæðiatriða |
| Einskiptis virðisstraumskortlagning | Ódýr, fljótleg sem vinnustofuæfing | Úreldist hratt; framleiðir ljósmynd, ekki lifandi mælikvarða |
| Samfelld, tólasamþætt virðisstraumsstjórnun | Lifandi, alltaf ný gögn; vex yfir marga virðisstrauma | Krefst raunverulegrar tólasamþættingarvinnu fyrirfram |

Aðalspennan er **viðskiptalæsileiki á móti tækjavæðingarfyrirhöfn**. Leiðslumælikvarðar eru ódýrir því leiðslan framleiðir gögnin þegar; virðisstraumsmælikvarðar krefjast heiðarlegs korts af öllu ferlinu og agaðrar flokkunarvenju við upptöku sem leiðslumælikvarðar kröfðust aldrei. Leystu spennuna með því að byrja á einum virðisstraumi, ekki allri skipulagsheildinni í einu, kortleggja hann rétt og samþætta síðan rakningu flæðiatriða í fyrirliggjandi tól, frekar en að reyna stórhvell yfir hvert teymi samtímis.

## Spurningar til að ræða með teyminu

1. **Gætum við teiknað nákvæmt virðisstraumskort fyrir mikilvægustu vöru okkar núna, eða myndum við giska á nokkrar yfirfærslur?** Flestar skipulagsheildir hafa aldrei gengið þessa leið frá upphafi til enda. Reynið æfinguna heiðarlega og takið eftir hverjum stað þar sem hópurinn er ósammála um hvað gerist í raun, því sá ágreiningur er sjálfur greinandi.

2. **Ef við flokkuðum allt sem teymi okkar afhenti síðasta ársfjórðung í eiginleika, galla, áhættu og skuld, myndi niðurstaðan koma vöruforystu okkar á óvart?** Flest teymi hafa aldrei gert þessa skiptingu skýra, og svarið afhjúpar oft viðhaldsbyrði eða skuldarvanda sem áður var ósýnilegur í einfaldri talningu „sögupunkta afhentra“.

3. **Höfum við raunverulega, tólasamþætta leið til að rekja flæðiatriði, eða myndi þetta krefjast þess að einhver flokkaði og endurflokkaði vinnu með höndunum?** Handvirkt kerfi rýrnar hratt undir raunverulegu vinnuálagi; tólasamþætt gerir það ekki. Metið heiðarlega hvort ykkar eruð í raun reiðubúin að halda uppi.

4. **Hvenær breyttist virðisstraumskortið okkar síðast, og höfum við uppfært mælikvarða okkar til að endurspegla það?** Endurskipulagningar og tólaflutningar ógilda virðisstraumskort hljóðlega, og fáar skipulagsheildir muna að endurskoða það þegar það gerist.

5. **Eru flæðimælikvarðar okkar nokkurn tímann settir fram beint fyrir viðskipta- eða vöruhagsmunaaðila, eða haldast þeir innan verkfræði?** Mesti kostur rammans umfram eingöngu leiðslumælikvarða er einmitt þetta samtal, og að sleppa því fórnar mestu af virði rammans.

6. **Hvað þyrfti til að einhver gæti leikið flokkun okkar á flæðiatriðum án þess að gera nokkuð óheiðarlegt á pappír?** Gangið gegnum hvernig teymi undir afhendingarþrýstingi gæti hljóðlega endurmerkt skuldar- eða áhættuvinnu sem eiginleika til að líta afkastameira út, og ræðið hvort þið mynduð taka eftir því núna.

## Geirasjónarhorn

**Sprotafyrirtæki.** Fullt virðisstraumskort er yfirleitt of mikið fyrir fimm manna teymi þar sem allir kunna allt ferlið utanbókar. Gagnlega venjan í þessum mæli er einfaldlega að nefna gerðirnar fjórar flæðiatriða upphátt í skipulagssamtölum, svo skuldar- og áhættuvinna hverfi ekki hljóðlega úr sjónmáli um leið og eiginleikafrestur nálgast.

**Lítil fyrirtæki.** Taktu upp flokkun flæðiatriða innan hvaða léttu rakningartóls sem þú notar þegar, merktum dálki eða sérsniðnum reit, frekar en nokkurri sérstakri virðisstraumsstjórnunarvöru. Agi samkvæmrar flokkunar skiptir langtum meira máli en fágun tólanna að baki.

**Stórfyrirtæki.** Hér vinnur ramminn fyrir sér, því stór skipulagsheild sem rekur tugi virðisstrauma yfir margar vörulínur á enga aðra áreiðanlega leið til að sjá, á einum stað, hvernig verkfræðigeta er í raun úthlutað yfir eiginleika, galla, áhættu og skuld. Fjárfestu í tólasamþættingunni; handvirki valkosturinn lifir ekki af snertingu við raunverulegan mælikvarða.

**Hið opinbera.** Flæðisdreifing gefur verkfræðiskipulagsheild í opinbera geiranum verjanlegt, viðskiptalæsilegt svar við „hvers vegna er ekki meiri ný virkni afhent“, þegar heiðarlega svarið er vaxandi hlutdeild getu sem fer í öryggisúrbætur eða skuld arfleifðarkerfa. Að gera þá málamiðlun sýnilega og skýra, frekar en að taka þrýstinginn hljóðlega á sig, er oft gagnlegasta einstaka hlutur sem þessi rammi býður leiðtoga í tækni hins opinbera.

## Dæmi

**Stórfyrirtæki.** Vettvangsskipulagsheild kröfukerfis stórs tryggingafélags trúði að hún afhenti fyrst og fremst nýja eiginleika, samkvæmt sprettuhraðaskýrslum sínum. Fyrsta virðisstraumskortlagning og flokkun flæðiatriða leiddi í ljós að skuldar- og áhættuvinna, mest af henni óskjalfest tæknileg skuld úr áratugagömlu kjarnakerfi, át í raun nær helming heildar verkfræðigetu, staðreynd sem engin fyrri skýrslugjöf hafði dregið fram því sú vinna hafði alltaf verið felld í almenn „verkfræðiverkefni“. Að setja þessa skiptingu fram fyrir framkvæmdanefndinni tryggði sérstök fjárlög til skuldarlækkunar í fyrsta sinn í sögu vettvangsins, frekar en að skuldarvinna héldi áfram að keppa hljóðlega við sérhverja eiginleikabeiðni.

**Hið opinbera.** Stafræn þjónustudeild landsskattstofu notaði virðisstraumskortlagningu til að greina hvers vegna flaggskipseiginleiki fyrir borgara hafði verið „í vinnslu“ í yfir ár þrátt fyrir stöðuga sprettlokun. Kortið leiddi í ljós að virðisstraumurinn spannaði í raun fimm aðskilin teymi með þremur yfirfærslum sem skipurit skipulagsheildarinnar endurspeglaði ekki, og flokkun flæðiatriða sýndi að raunverulegur verkfræðitími eiginleikans var lítið brot af heildarflæðistíma hans, afgangurinn étinn af yfirfærslutöfum milli teyma sem enginn mælikvarði nokkurs eins teymis gat séð. Deildin endurskipulagði sig kringum virðisstrauminn frekar en skipuritið fyrir þá tilteknu vörulínu og skar flæðistíma verulega niður innan tveggja ársfjórðunga.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af upptöku Flæðirammans er verjanlegt, viðskiptalæsilegt svar við spurningu sem leiðslumælikvarðar geta ekki svarað: er verkfræðigeta úthlutað eins og forysta trúir að hún sé. Tryggingadæmið hér að ofan, sem dró fram nær helming getu fara í áður ósýnilega skuldarvinnu, er algengt mynstur þegar skipulagsheild flokkar vinnu sína í raun heiðarlega, og sá sýnileiki opnar reglulega fjárfestingu sem óljós beiðni um „við þurfum meiri tíma fyrir tæknilega skuld“ gat aldrei opnað.

Heildareignarkostnaður er þéttur á tveimur stöðum: upphaflegu virðisstraumskortlagningaræfingunni, sem tekur raunverulegan leiðbeiningartíma að gera heiðarlega, og tólasamþættingunni sem þarf til að halda gögnum flæðiatriða nýjum án handvirks viðhalds. Báðir kostnaðir eru einskiptis eða lágviðhalds þegar vel er gert, sem gerir rammann talsvert ódýrari að viðhalda en að taka upp.

## Andmynstur og gildrur

- **Að meðhöndla virðisstraumskortlagningu sem einskiptis vinnustofu, aldrei endurskoðaða:** kortið úreldist um leið og skipulagsheildin breytist, og mælikvarði reiknaður gegn úreltu korti mælir rangan hlut.
- **Að smíða samhliða, handvirkt viðhaldið rakningarkerfi flæðiatriða:** rýrnar hratt undir raunverulegu vinnuálagi; samþættu í fyrirliggjandi tól í staðinn.
- **Að flokka flæðiatriði eftir á í stað við upptöku:** leikvektorinn í hjarta þessa viðfangsefnis. Undir afhendingarþrýstingi getur teymi hljóðlega endurmerkt skuldar- eða áhættuvinnu sem eiginleika eftir á til að líta afkastameira út fyrir hagsmunaaðilum sem sjá aðeins flæðisdreifingarritið, án þess að nokkur taki nokkurn tímann skýra, sýnilega ákvörðun um það. Varnarmælikvarðinn er að krefjast flokkunar við upptöku, áður en niðurstaðan er þekkt, og að endurskoða reglulega úrtak flokkaðra atriða gegn því sem undirliggjandi breyting gerði í raun, sami endurskoðunaragi og viðfangsefni 1.2 biður um fyrir hvern mælikvarða í þessari bók.
- **Að halda flæðimælikvörðum eingöngu innan verkfræði:** fórnar helsta kosti rammans, sameiginlegum orðaforða með viðskiptahagsmunaaðilum.
- **Að kortleggja skipuritið í stað raunverulega virðisstraumsins:** felur yfirfærslur milli teyma sem eru oft stærsta uppspretta tafa.
- **Að taka rammann upp í allri skipulagsheildinni áður en hann er staðfestur á einum virðisstraumi:** hættir á stórri fjárfestingu í mælikvörðum sem enginn treystir því undirliggjandi kort var aldrei staðfest nákvæmt.

## Þroskalíkan

- **Stig 1, Upphaf:** Ekkert virðisstraumskort er til; vinna er rakin sem almennir miðar án flokkunar flæðiatriða.
- **Stig 2, Þróun:** Einn virðisstraumur hefur verið kortlagður og flæðiatriði eru flokkuð óformlega, en rakning er handvirk og ósamkvæmt beitt.
- **Stig 3, Stöðlun:** Flokkun flæðiatriða er samþætt í fyrirliggjandi tól og beitt samkvæmt við upptöku yfir helstu virðisstrauma.
- **Stig 4, Stjórnun:** Flæðisdreifing er yfirfarin reglulega með viðskiptahagsmunaaðilum, og virðisstraumskort eru virkt haldin nýjum þegar skipulagsheildin breytist.
- **Stig 5, Samhæfing:** Skipulagsheildin úthlutar verkfræðifjárfestingu vísvitandi yfir virðisstrauma með flæðigögnum, og getur bent á tilteknar stefnumótandi ákvarðanir, skuldarlækkunarfjárlög, teymisendurskipulagningu, teknar því ramminn gerði áður ósýnilega málamiðlun sýnilega.

## Hugmyndir til umræðu

1. Gætum við teiknað nákvæmt virðisstraumskort fyrir flaggskipsvöru okkar í dag, án þess að giska?
2. Hvaða hlutfall af getu síðasta ársfjórðungs myndi heiðarleg flokkun flæðiatriða leiða í ljós að fór í skuld og áhættu, á móti eiginleikum?
3. Ná flæðimælikvarðar okkar núna til viðskiptahagsmunaaðila, eða haldast þeir innan verkfræði?
4. Hver er stærsta yfirfærsla milli teyma í virðisstraumi okkar sem skipurit okkar endurspeglar ekki?

## Helstu atriði til að muna

- **Flæðiramminn**, úr bók Mik Kerstens *Project to Product*, mælir hvers konar virði flæðir gegnum afhendingarleiðslu, ekki bara hve hratt leiðslan sjálf gengur.
- **Virðisstraumur**, ekki teymi eða leiðsla, er mælieining rammans, og að kortleggja hann heiðarlega kemur á undan því að tækjavæða nokkuð.
- **Flokkun flæðiatriða við upptöku, ekki eftir á**, er varnarmælikvarðinn gegn aðalleikvektor þessa viðfangsefnis: að endurmerkja skuldar- eða áhættuvinnu hljóðlega sem eiginleika til að líta afkastameira út.
- **Tengdu flæðimælikvarða við fyrirliggjandi tól**, Jira, Azure DevOps, GitHub, frekar en samhliða handvirkt rakningarkerfi sem lifir ekki af raunverulegt vinnuálag.
- Settu flæðigögn fram **beint fyrir viðskiptahagsmunaaðila**; það samtal, ekki innra verkfræðimælaborð, er helsti kostur rammans umfram eingöngu leiðslumælikvarða.

## Heimildir og frekara lesefni

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, og John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr og George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois og John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
