# 4.2 Prófþekja og skilvirkni prófana

## Yfirlit og tilgangur

**[Prófþekja](https://en.wikipedia.org/wiki/Code_coverage)** mælir hundraðshluta kóða sem prófasafn keyrir: línuþekju, greinaþekju eða strangari leiðaþekju. Hún er einn mest raktur mælikvarðinn í allri þessari bók, ódýr í útreikningi, auðveld að sýna sem eitt hundraðshlutfall, og fyrir vikið einn sá oftast leikni, nákvæmlega á þann hátt sem viðfangsefni 1.2 spáir fyrir um hvern mælikvarða sem verður markmið. Prófasafn getur náð mikilli þekju meðan það sannreynir næstum ekkert marktækt, því þekja mælir hvort kóði var keyrður í prófunarkeyrslu, ekki hvort prófið athugaði í raun að kóðinn hegðaði sér rétt.

Þetta bil milli þekju og raunverulegrar skilvirkni prófana er ekki lítil neðanmálsgrein; það er meginefni þessa viðfangsefnis. Próf sem kallar á fall og staðhæfir ekkert um niðurstöðu þess eykur þekju nákvæmlega jafn mikið og próf sem sannreynir ítarlega hegðun fallsins yfir jaðartilvik. Lagfæringin sem þetta viðfangsefni mælir með, **stökkbreytingarprófun** (mutation testing), sem vísvitandi kynnir litlar, tilbúnar villur í kóðann og athugar hvort prófasafnið grípi þær í raun, er beint svar við þessu bili, og þetta viðfangsefni meðhöndlar hana sem nauðsynlega viðbót þekju, ekki valkvæðan aukahlut.

Fyrir stór teymi er þekjumarkmið oft tekið upp í allri skipulagsheildinni sem gæðahlið, einmitt sú tegund hvatabundins, mjög sýnilegs mælikvarða sem viðfangsefni 1.2 varar við að sé mest útsettur fyrir leik. Stórfyrirtæki og hið opinbera sem setja almenna hundraðshlutakröfu um þekju án paraðrar skilvirknisathugunar eru í reynd að hvetja til nákvæmlega þröskuldsleikmynstursins sem þessi bók lýsir: léttvæg próf skrifuð eingöngu til að ná tölu, án samsvarandi bóta á raunverulegri gallavörn.

## Lykilmeginreglur

- **Þekja mælir keyrslu, ekki sannreynslu.** Lína sem er keyrð af prófi segir ekkert um hvort prófið athugaði nokkuð marktækt um hana.
- **Þekjumarkmið án skilvirknisathugunar er skólabókardæmi um uppsetningu fyrir lögmál Goodharts** (viðfangsefni 1.2): talan batnar meðan raunveruleg gæði gera það ekki.
- **Stökkbreytingarprófun er nauðsynleg viðbót þekju**, ekki staðgengill hennar; notaðu bæði saman.
- **Þekja er gagnlegri sem gólf en sem markmið til að hámarka.** Lág tala afhjúpar sannarlega óprófaðan kóða; að elta 100% framleiðir oft minnkandi eða neikvæða ávöxtun.
- **Þekja mikilvægra leiða skiptir meira máli en samræmd, almenn þekja.** Ekki ber allur kóði jafna áhættu ef hann bilar.

## Ráðleggingar

### Notaðu þekju til að finna óprófaðan kóða, ekki sem markmið til að hámarka

Meðhöndlaðu þekjuskýrslu fyrst og fremst sem kort af því sem hefur ekkert próf yfirleitt, sem er sannarlega gagnlegar upplýsingar, frekar en sem einkunn til að þrýsta í átt að 100%. Kóði með núll þekju er raunverulegt bil sem vert er að loka; jaðarvirði þess að ýta þekju úr 85% í 95% er yfirleitt langtum lægra og oft ekki fyrirhafnarinnar virði, einkum ef sú fyrirhöfn framleiðir lítilvirðisprófanir bara til að ná hærri tölunni.

### Paraðu sérhvert þekjumarkmið við stökkbreytingarprófun

**Stökkbreytingarprófunartól** kynna sjálfvirkt litlar villur í kóðann þinn, snúa við samanburðaraðgerð, breyta mörkum, og keyra síðan prófasafnið gegn hverri stökkbreyttri útgáfu. Prófasafn sem „drepur“ (fellur gegn) flest stökkbrigði sannreynir sannarlega hegðun; prófasafn með mikla línuþekju en lágt stökkbrigðadrápshlutfall keyrir kóða án þess að athuga hann marktækt. Þessi pörun er áhrifaríkasti einstaki varnarmælikvarðinn gegn þekjumarkmiðsleik, og þessi bók mælir með henni sem staðlaðri venju, ekki háþróaðri eða valkvæðri tækni.

### Forgangsraðaðu þekju og stökkbreytingarprófun á mikilvægum leiðum fyrst

Ekki ber allur kóði jafna áhættu. Greiðsluvinnsluleið, auðkenningarathugun eða gagnaflutningsskrifta verðskuldar langtum strangari prófun en sjaldan notuð stjórnunarskýrsla. Frekar en að sækjast eftir samræmdri þekju yfir allan kóðagrunn, greindu áhættumestu, afdrifaríkustu kóðaleiðir þínar og einbeittu bæði þekju- og stökkbreytingarprófunarfyrirhöfn þangað fyrst, og samþykktu lægri þekju á sannarlega áhættulitlum kóða sem vísvitandi, upplýsta málamiðlun frekar en yfirsjón.

### Gættu að sértæku þekjuleikmynstrunum

Algengustu leiðirnar sem þekja er leikin, þegar hún verður markmið, eru: próf sem kalla á fall en staðhæfa ekkert marktækt um niðurstöðuna (þröskuldsleikur viðfangsefnis 1.2 beittur á þennan mælikvarða), að gera óvirk eða eyða prófum sem falla frekar en að laga undirliggjandi vandann, og að útiloka erfiðan-að-prófa kóða úr þekjuútreikningi alveg frekar en að takast á við hvers vegna hann er erfiður að prófa. Endurskoðaðu reglulega úrtak prófa beint, lestu raunverulegar staðhæfingar þeirra, frekar en að treysta þekjuhundraðshlutfallinu einu.

### Settu þekjugólf, ekki þekjuþak, í CI-leiðslu þína

Stilltu byggingarleiðslu þína til að falla ef þekja fellur undir samþykkt gólf fyrir nýjan kóða, sem kemur í veg fyrir afturför, frekar en að krefjast þess að sérhver breyting þrýsti heildartölunni hærra. Þessi greinarmunur skiptir máli: gólf ver gegn afturför án þess að skapa sama linnulausa upp á við þrýstinginn sem framleiðir lítilvirðisprófanir skrifaðar eingöngu til að mjaka tölunni lengra upp.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Þekjuhundraðshlutfall eitt | Ódýrt, einfalt, víða stutt af tólum | Auðleikið; mælir keyrslu, ekki sannreynslu |
| Þekja auk stökkbreytingarprófunar | Sannreynir að próf athugi í raun hegðun, stenst leik | Reikniþyngra; krefst tólafjárfestingar |
| Samræmt þekjumarkmið yfir kóðagrunninn | Einfalt að orða og framfylgja | Sóar fyrirhöfn á áhættulítinn kóða; vanfjárfestir miðað við áhættu annars staðar |
| Áhættubyggð þekja með mikilvægar leiðir fyrst | Einbeitir fyrirhöfn þangað sem hún skiptir mestu | Krefst dómgreindar til að greina rétt sannarlega mikilvægar leiðir |

Aðalspennan er **einfaldleiki á móti heiðarleika**. Eitt þekjuhundraðshlutfall er auðvelt að skýra frá og auðvelt að setja sem markmið, en sá einfaldleiki er einmitt það sem gerir það svo auðleikið þegar það verður hvatabundin tala. Leystu spennuna með því að samþykkja viðbótarflækjustig stökkbreytingarprófunar og áhættubyggðrar forgangsröðunar sem kostnað heiðarlegs merkis, og með því að koma skýrt á framfæri við teymi þitt hvers vegna lægri heildarþekjutala, rétt einbeitt á mikilvægar leiðir og studd sterku stökkbrigðadrápshlutfalli, er verðmætari en hærri, samræmt dreifð en minna skilvirkt sannreynd tala.

## Spurningar til að ræða með teyminu

1. **Hvert er stökkbrigðadrápshlutfall okkar á áhættumestu kóðaleiðum okkar, og hvernig ber það sig saman við þekjuhundraðshlutfall okkar á sama kóða?** Stórt bil milli hárrar þekjutölu og lágs drápshlutfalls er skýrasta mögulega merkið um að þekja ein segi þér ekki það sem þú heldur að hún segi þér.

2. **Höfum við nokkurn tímann skrifað próf fyrst og fremst til að auka þekjutölu, með lítilli raunverulegri umhugsun um hvað það ætti að sannreyna?** Verið heiðarleg hér; þetta gerist oftar en teymi vilja viðurkenna, einkum undir tímapressu þegar þekjuhlið er að loka á sameiningu.

3. **Er þekjufyrirhöfn okkar einbeitt á áhættumestu kóðaleiðir okkar, eða dreifð jafnt óháð afleiðingum þess ef sá kóði bilar?** Kortleggið núverandi þekjudreifingu ykkar gegn heiðarlegu áhættumati á kóðagrunni ykkar og leitið að misræminu.

4. **Höfum við nokkurn tímann gert óvirkt eða eytt falli prófi frekar en að laga undirliggjandi vandann sem það afhjúpaði?** Þetta er eitt skaðlegasta form þekjuleiks, því það fjarlægir raunverulega vernd virkt meðan skýrða þekjutalan hreyfist kannski varla.

5. **Framfylgir CI-leiðsla okkar þekjugólfi fyrir nýjan kóða, eða þrýstir hún á sífellt hærra þak óháð minnkandi ávöxtun?** Ræðið hvort núverandi hliðshönnun ykkar skapar réttan hvata, vernd gegn afturför, eða rangan, linnulausan upp á við þrýsting sem umbunar lítilvirðisprófapúða.

6. **Hvaða kóði í kóðagrunni okkar er útilokaður úr þekjuútreikningi, og er sú útilokun réttlætanleg eða felur hún raunverulegt prófunarbil?** Endurskoðið raunverulega útilokunarstillingu ykkar; algengt er að þessi listi vaxi hljóðlega yfir tíma án þess að nokkur endurskoði hvort hver útilokun sé enn réttlætanleg.

## Geirasjónarhorn

**Sprotafyrirtæki.** Formleg þekjumarkmið eru oft óþörf svo snemma; einbeittu prófunarskrifafyrirhöfn beint á áhættumestu, viðskiptakritísku kóðaleiðir þínar (yfirleitt greiðslu- eða kjarnavinnuflæðisrökfræði) frekar en að sækjast eftir almennu hundraðshlutfalli yfir kóðagrunn sem enn breytist hratt og kann að verða verulega endurskrifaður fljótlega hvort sem er.

**Lítil fyrirtæki.** Flestir CI-vettvangar skýra þekju sjálfkrafa við lágmarksuppsetningarkostnað; notaðu hana fyrst og fremst til að koma auga á alveg óprófaðan mikilvægan kóða frekar en að elta sérstakt hundraðshlutamark, og íhugaðu stökkbreytingarprófun aðeins þegar þú hefur verkfræðigetuna til að bregðast við því sem hún leiðir í ljós.

**Stórfyrirtæki.** Almenn, skipulagsheildarvíð þekjumarkmið eru algeng og afdrifarík mistök í þessum mæli, þar sem þau hvetja til nákvæmlega leiksins sem þetta viðfangsefni lýsir yfir tugi teyma samtímis. Settu áhættubyggðar þekjuvæntingar sem breytast eftir mikilvægi þjónustu, og fjárfestu í stökkbreytingarprófunarinnviðum fyrir áhættumestu kerfi þín sérstaklega.

**Hið opinbera.** Þekjukröfur birtast stundum í innkaupa- eða regluvörsluskjölum sem hrár, auðskilgreindur staðgengill fyrir gæðatryggingu. Þar sem mögulegt er, paraðu allt samningsbundið þekjuhundraðshlutfall við stökkbreytingarprófunar- eða gallabyggða skilvirknikröfu, svo samningshvatinn umbuni ekki óviljandi nákvæmlega lítilvirðisprófapúðanum sem þetta viðfangsefni varar við.

## Dæmi

**Stórfyrirtæki.** Forysta netverslunarvettvangs hafði sett fyrirtækjavíða 95% þekjukröfu fyrir allan nýjan kóða, framfylgt sem hörðu CI-hliði. Úttekt tveimur árum síðar, kveikt af bylgju framleiðslugalla í ætluðum vel prófuðum kóða, fann stökkbrigðadrápshlutfall undir 40% yfir stóran hluta kóðagrunnsins: teymi höfðu verið að skrifa próf sem keyrðu kóðaleiðir án þess að staðhæfa marktækt um hegðun þeirra, eingöngu til að fullnægja hliðinu undir tímapressu. Fyrirtækið skipti almennu þekjukröfunni út fyrir áhættuflokkaða stefnu: stranga þekju auk skyldubundinnar stökkbreytingarprófunar yfir 80% drápshlutfallsþröskuld fyrir greiðslu- og auðkenningarkóða, og mun léttara þekjugólf fyrir áhættulítil innri tól, sem bæði minnkaði sóaða prófunarfyrirhöfn og bætti gallahlutföll í sannarlega mikilvægu leiðunum mælanlega.

**Hið opinbera.** Réttindaákvörðunarkerfi opinberrar heilbrigðisstofnunar hafði samningsbundið verið skylt að viðhalda 90% prófþekju samkvæmt þróunarsamningi við söluaðila. Yfirferð eftir atvik, í kjölfar verulegs réttindareikningsgalla sem hafði verið afhentur þrátt fyrir að þekjukröfunni væri fullnægt, fann að tiltekna fallið sem bar ábyrgð hafði náð þekju sinni alfarið gegnum próf sem kölluðu á fallið með gildum inntökum en prófuðu aldrei jaðarskilyrði eða ógild inntök, einmitt þar sem gallinn var. Endurskoðaður samningur stofnunarinnar við söluaðila krefst nú skjalfestrar stökkbreytingarprófunareinkunnar samhliða þekju fyrir allan réttindareikningskóða, sem lokar sértæka bilinu sem hafði leyft samræmdum en óskilvirkum prófunum að fullnægja samningnum.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun þess að para þekju við stökkbreytingarprófun er að grípa bilið milli sýnilegra og raunverulegra prófgæða áður en það kostar framleiðslugalla. Netverslunardæmið hér að ofan sýnir mynstrið skýrt: þekjukrafa ein hafði framleitt falska öryggistilfinningu sem bylgja galla afhjúpaði að lokum á langtum hærri kostnaði en stökkbreytingarprófunarfjárfestingin sem hefði gripið bilið fyrr.

Heildareignarkostnaður felur í sér reikniskostnað stökkbreytingarprófunar, sem er dýrari í keyrslu en einföld þekjutækjavæðing og er því yfirleitt tekin frá fyrir mikilvægan-leiða kóða frekar en allan kóðagrunninn, auk verkfræðitíma til að túlka og bregðast við niðurstöðum. Sá kostnaður er réttlættur sérstaklega fyrir áhættumesta kóðann, þar sem kostnaður ógreinds bils í prófskilvirkni er hæstur.

## Andmynstur og gildrur

- **Að meðhöndla þekjuhundraðshlutfall sem beinan gæðadóm:** það mælir keyrslu, ekki sannreynslu.
- **Að skrifa próf fyrst og fremst til að fullnægja þekjuhliði:** framleiðir einmitt lítilvirðis, þröskuldsleikmynstrið sem viðfangsefni 1.2 varar við.
- **Að gera óvirk eða eyða föllnum prófum í stað þess að laga undirliggjandi vandann:** fjarlægir raunverulega vernd meðan skýrða talan hreyfist varla.
- **Að beita samræmdu þekjumarki óháð kóðaáhættu:** sóar fyrirhöfn á áhættulítinn kóða og vanfjárfestir í sannarlega mikilvægum leiðum.
- **Að láta útilokunarlista vaxa hljóðlega yfir tíma:** felur raunveruleg prófunarbil á bak við tæknilega nákvæma en villandi þekjutölu.
- **Að sækjast eftir þekjuþaki í stað þekjugólfs:** skapar linnulausan upp á við þrýsting sem umbunar prófapúða fram yfir raunverulega sannreynslu.

## Þroskalíkan

- **Stig 1, Upphaf:** Þekja er ekki mæld, eða er mæld ósamkvæmt án gólfs, marks eða skilvirknisathugunar.
- **Stig 2, Þróun:** Þekjumark er til og rakið, en engin stökkbreytingarprófun eða áhættubyggð forgangsröðun upplýsir hvernig fyrirhöfn er úthlutað.
- **Stig 3, Stöðlun:** Þekjugólfum er framfylgt samkvæmt í CI, með áhættubyggðri forgangsröðun sem beinir hvar þekjufyrirhöfn einbeitist.
- **Stig 4, Stjórnun:** Stökkbreytingarprófun keyrir á mikilvægum-leiða kóða, með raktum drápshlutfallsþröskuldi sem verður að ná samhliða þekju, og útilokunarlistar eru endurskoðaðir reglulega.
- **Stig 5, Samhæfing:** Skipulagsheildin getur bent á tilteknar gallaminnkanir raktar til stökkbreytingarprófunarupplýstrar forgangsröðunar, og þekju- og skilvirknigögn saman upplýsa beint prófunarfjárfestingarákvarðanir.

## Hugmyndir til umræðu

1. Hvert er stökkbrigðadrápshlutfall okkar á mikilvægustu einstöku kóðaleið okkar, og vitum við það yfirleitt?
2. Höfum við nokkurn tímann skrifað lítilvirðispróf eingöngu til að fullnægja þekjuhliði?
3. Er núverandi þekjufyrirhöfn okkar einbeitt þar sem áhættan er mest, eða dreifð jafnt?
4. Hvaða kóði er nú útilokaður úr þekjuútreikningi, og er sú útilokun enn réttlætanleg?
5. Væri stökkbreytingarprófunarfjárfesting á áhættumesta kerfi okkar reiknikostnaðarins virði?

## Helstu atriði til að muna

- Prófþekja mælir **keyrslu, ekki sannreynslu**; þakin lína segir ekkert um hvort hún var athuguð marktækt.
- Paraðu þekju við **stökkbreytingarprófun** til að sannreyna að próf grípi raunverulegar villur, ekki bara að þau keyri kóðann.
- Einbeittu prófunarfyrirhöfn á **mikilvægar, áhættumiklar leiðir** frekar en að sækjast eftir samræmdri þekju yfir allan kóðagrunn.
- Notaðu þekju sem **gólf til að verjast afturför**, ekki þak til að hámarka linnulaust.
- Gættu að sértæku þekjuleikmynstrunum: **lítilvirðisprófum, óvirkum föllnum prófum og hljóðlega vaxandi útilokunarlistum**.

## Heimildir og frekara lesefni

- *Working Effectively with Legacy Code*, eftir Michael Feathers (þekjustefna fyrir fyrirliggjandi, erfiða-að-prófa kóðagrunna).
- Jia, Yue, og Mark Harman, „An Analysis and Survey of the Development of Mutation Testing,“ *IEEE Transactions on Software Engineering* (2011): yfirgripsmikil úttekt á stökkbreytingarprófunartækni og skilvirkni hennar.
- *xUnit Test Patterns*, eftir Gerard Meszaros (prófhönnunarmynstur viðeigandi fyrir að skrifa sannarlega skilvirk, ekki bara þekjufullnægjandi, próf).
- *Accelerate: The Science of Lean Software and DevOps*, eftir Nicole Forsgren, Jez Humble og Gene Kim (sambandið milli prófunarvenja og afhendingarframmistöðu).
