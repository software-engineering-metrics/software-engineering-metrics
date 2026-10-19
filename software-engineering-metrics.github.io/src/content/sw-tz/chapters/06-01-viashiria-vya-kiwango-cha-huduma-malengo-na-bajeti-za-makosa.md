# 6.1 Viashiria vya kiwango cha huduma, malengo, na bajeti za makosa

## Muhtasari na msukumo

**[Uhandisi wa kutegemewa wa tovuti](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE)**, nidhamu iliyoanzishwa Google na kuandikwa katika kitabu *Site Reliability Engineering*, ilichangia msamiati ambao mada hii inaujenga moja kwa moja: **kiashiria cha kiwango cha huduma (SLI)** ni ishara iliyopimwa moja kwa moja ya afya ya huduma, ucheleweshaji wa ombi, kiwango cha makosa, upatikanaji. **Lengo la kiwango cha huduma (SLO)** ni safu lengwa kwa kiashiria hicho, asilimia 99.9 ya maombi yanafanikiwa ndani ya milisekunde 200, kwa mfano. Na **bajeti ya makosa** ni upungufu unaoruhusiwa, asilimia 0.1 ya maombi inayoruhusiwa kushindwa, ikichukuliwa si kama kasoro ya kuondoa bali kama rasilimali inayoweza kutumika kwa makusudi kuchukua hatari: kusafirisha badiliko lenye hatari, kuendesha jaribio, au kukubali tu kwamba kutegemewa kamilifu hakuwezi kufikiwa wala, kupita pointi fulani, hakustahili gharama yake.

Wazo hili la mwisho, bajeti ya makosa kama rasilimali inayoweza kutumika badala ya namba ya kupunguza kuelekea sifuri, ndilo dhana muhimu zaidi katika mada hii na bila shaka katika sehemu hii nzima. Linatatua mvutano unaosumbua mashirika mengi: uhandisi unataka kusafirisha vipengele na kuchukua hatari za busara; uendeshaji unataka uthabiti wa juu kabisa. Bila bajeti ya makosa ya pamoja, iliyopimwa, hili linakuwa mazungumzo yasiyoisha, yenye mvutano wa kisiasa. Ikiwepo, linakuwa kanuni rahisi, ya kiuhalisia: tumia kwa uhuru bajeti ikibaki, punguza kasi na upa kipaumbele kazi ya uthabiti kiotomatiki mara inapoisha. Hii inageuza kutokubaliana kwa kifalsafa kuwa kwa kihesabu.

Kwa timu kubwa, SLO na bajeti za makosa ndizo zinazofanya kutegemewa kupimike na kujadilika badala ya kamilifu isiyoweza kufikiwa, isiyotajwa ambayo kila timu hushindwa kuifikia kimyakimya huku ikihisi hatia isiyo wazi. Mashirika ya biashara kubwa hutumia SLO kuweka matarajio wazi, ya kimkataba kati ya timu na wateja; mashirika ya serikali yanayoendesha miundombinu muhimu ya umma huzitumia kuweka malengo ya kutegemewa yanayoweza kutetewa, yanayoweza kuhalalishwa hadharani badala ya kiwango kisichowezekana cha ukamilifu ambacho mfumo halisi wowote hauwezi kudumisha.

## Kanuni kuu

- **Kutegemewa kwa asilimia 100 ni lengo lisilo sahihi kwa karibu mfumo wowote.** Kwa kawaida hakuwezi kufikiwa, na kulifuata kupita pointi fulani kunabadilishana kikamilifu kasi kwa faida isiyo na maana kwa mtumiaji.
- **SLO inapaswa kuakisi kile watumiaji wanachokiona na kujali kweli,** si namba ya duara ya kiholela iliyochaguliwa kwa sababu inasikika ya kutuliza.
- **Bajeti ya makosa inageuza kutegemewa kuwa rasilimali inayoweza kutumika,** ikipa uhandisi na uendeshaji vyote kanuni ya pamoja, ya kiuhalisia ya wakati wa kusafirisha haraka na wakati wa kupunguza kasi.
- **SLI lazima zipimwe kutoka uzoefu halisi wa mtumiaji** pale inapowezekana, si tu kutoka afya iliyojiripoti ya mfumo wa ndani.
- **Kuisha kwa bajeti ya makosa kunachochea jibu lililoamuliwa mapema, lililokubaliwa,** si mabishano ya papo hapo kila inapotokea.

## Mapendekezo

### Chagua SLI zinazoakisi uzoefu halisi wa mtumiaji

Chagua viashiria vilivyopimwa karibu iwezekanavyo na uzoefu halisi wa mtumiaji: kiwango cha mafanikio ya ombi na ucheleweshaji uliopimwa pembeni au kwenye kisawazisha cha mzigo, si tu ukaguzi wa afya wa huduma ya ndani ambao unaweza kuripoti "yenye afya" huku watumiaji wakipitia matatizo halisi. SLI inayopima kitu ambacho mtumiaji hakioni kamwe, kijenzi cha ndani kikiwa kinafanya kazi kitaalamu huku ombi la jumla likiendelea kushindwa, inapima kitu kisicho sahihi bila kujali ni rahisi kiasi gani kupima.

### Weka lengo la SLO kulingana na kile watumiaji wanachohitaji kweli, si namba ya duara ya kiholela

Pinga hamu ya kuweka lengo kama "upatikanaji wa asilimia 99.99" kwa sababu tu inasikika ya ukali wa kuvutia. Badala yake, tafiti kiwango gani cha kutegemewa watumiaji wanaona na kujali kweli, ukiarifiwa na data ya matukio ya kihistoria, utafiti wa watumiaji, na gharama iliyoonyeshwa ya kufikia kila ongezeko la kutegemewa, kwa kuwa kutoka asilimia 99.9 hadi 99.99 mara nyingi kunagharimu juhudi ya uhandisi zaidi sana kuliko kutoka asilimia 99 hadi 99.9 kulivyogharimu, kwa faida inayopungua na hatimaye isiyo na maana inayoonekana na mtumiaji.

### Chukulia bajeti ya makosa kama rasilimali inayoweza kutumika na jibu lililoamuliwa mapema kwa kuisha

Kokotoa bajeti ya makosa moja kwa moja kutoka SLO (lengo la upatikanaji la asilimia 99.9 kwa siku 30 linaruhusu takriban dakika 43 za kutopatikana kunakoruhusiwa) na ufuatilie matumizi dhidi yake mfululizo. Kubaliana, mapema na kabla ya tukio lolote mahususi, nini kinatokea bajeti inapoisha: sera ya kawaida, yenye ufanisi ni kwamba kazi ya vipengele inasimama na kipaumbele cha timu kinahama kiotomatiki kuelekea kazi ya kutegemewa hadi bajeti irudi. Kanuni hii iliyoamuliwa mapema inaondoa hitaji la kujadili upya mabadilishano chini ya shinikizo wakati wa kila tukio.

### Tumia bajeti ya makosa kufanya maamuzi ya hatari ya makusudi, yenye taarifa

Bajeti ya makosa yenye afya, isiyotumika si kitu cha kuhodhi; ni ruhusa ya kuchukua hatari za busara, kusafirisha badiliko lenye hatari iliyoinuka lakini inayokubalika, kuendesha jaribio la uhandisi wa machafuko (mada ya uhandisi wa machafuko ya kitabu mwenzi cha `software-engineering-guide` inashughulikia hili moja kwa moja), au kukubali badiliko la usanifu lenye hatari zaidi, kwa kuwa bajeti ipo mahususi kutumiwa kwa makusudi badala ya kuhifadhiwa bila kuguswa. Bajeti ya makosa isiyotumika kamwe inadokeza ama timu ya tahadhari kupita kiasi au SLO iliyowekwa kwa ulegevu mno ukilinganisha na kutegemewa kulikofikiwa kwa uhalisia, vyote vinastahili uchunguzi.

### Pitia na urekebishe SLO mara kwa mara, kwa ushahidi, si mazoea

SLO iliyowekwa miaka iliyopita huenda isiakisi tena matarajio ya sasa ya watumiaji, usanifu wa mfumo, au vipaumbele vya biashara. Pitia SLO kwa mdundo wa mara kwa mara, ukikagua kutegemewa kwa kihistoria kulikofikiwa, maoni ya watumiaji, na kama lengo bado linawakilisha pointi ya maana ya mabadilishano badala ya ama lengo linalofikiwa kwa urahisi ambalo lingeweza kukazwa kuwezesha kasi zaidi kwingineko, au lisilo la kweli ambalo timu imeacha kujaribu kulifikia kwa ufanisi.

## Mabadilishano: faida na hasara

| Mbinu | Faida | Hasara |
| --- | --- | --- |
| Hakuna SLO rasmi ("yenye kutegemewa iwezekanavyo" ya dhahiri) | Hakuna mzigo wa kusanidi | Mazungumzo yasiyoisha, yasiyoegemezwa kati ya kasi na uthabiti; hakuna kanuni ya pamoja |
| SLO ya matamanio, ya juu sana (asilimia 99.99+) | Inaashiria uzito kuhusu kutegemewa | Mara nyingi gharama isiyo ya lazima; faida zinazopungua kupita kile watumiaji wanachokiona kweli |
| SLO inayotegemea ushahidi, iliyoegemezwa kwenye uzoefu wa mtumiaji | Inaakisi thamani halisi; inayoweza kutetewa na kufikiwa | Inahitaji data halisi na uchambuzi kuiweka sawa |
| Bajeti ya makosa yenye jibu lililoamuliwa mapema kwa kuisha | Inaondoa mazungumzo ya papo hapo; uamuzi wa haraka, wa kiuhalisia | Inahitaji kukubalika kwa kishirika na nidhamu kuheshimu kanuni iliyoamuliwa mapema kweli |

Mvutano wa kati ni **matamanio dhidi ya uwezekano wa kufikia**. SLO ya juu, ya matamanio inahisi kama inaashiria uzito kuhusu ubora, lakini kufuata kutegemewa kupita kile watumiaji wanachokiona kweli kunabadilishana kasi halisi kwa faida isiyo ya kweli, na lengo lisilo la kweli ambalo timu halifikii kamwe linafundisha kila mtu kuacha kuchukulia SLO kwa uzito kabisa. Litatue kwa kuegemeza SLO kwenye ushahidi halisi, watumiaji wanaona nini, mfumo umefikia nini kihistoria, kila ongezeko la ziada linagharimu nini, badala ya matamanio au hamu ya kuonekana mkali kwenye kadi ya alama.

## Maswali ya kujadili na timu yako

1. **Je, SLO yetu ya sasa imeegemezwa kwenye ushahidi kuhusu kile watumiaji wanachokiona kweli, au iliwekwa kwa matamanio kwa sababu namba ya juu ilihisi kuwa ya uzito unaofaa?** Fuatilia asili ya lengo lenu la sasa, ukiweza, na ukague kwa uaminifu kama linaakisi utafiti halisi wa watumiaji au silika ya uhandisi peke yake.

2. **Je, tuna jibu lililoamuliwa mapema, lililokubaliwa kwa kuisha kwa bajeti ya makosa, au mabadilishano yanajadiliwa upya kila yanapotokea?** Jibu la uaminifu likiwa la pili, pengo hilo linastahili kuzibwa kabla tukio linalofuata halijalazimisha mabishano chini ya shinikizo.

3. **Je, bajeti yetu ya makosa huwahi kutumiwa kwa makusudi, kwa badiliko la hatari iliyokokotolewa au jaribio, au inatumiwa tu kwa bahati mbaya kupitia matukio?** Bajeti isiyotumika kamwe kwa makusudi inaweza kuashiria timu ya tahadhari kupita kiasi inayokosa fursa halali ambazo bajeti ipo kuwezesha.

4. **Je, SLI zetu zinapimwa kutoka uzoefu halisi wa mtumiaji, au kutoka afya ya mfumo wa ndani ambayo huenda isiakisi kile watumiaji wanachokutana nacho kweli?** Kagua upimaji wenu wa sasa dhidi ya tofauti hii mahususi; ni pengo la kawaida hata katika programu za kutegemewa zilizokomaa vinginevyo.

5. **Lini mwisho tulipitia SLO yetu dhidi ya ushahidi wa sasa, na je, kuna kilichobadilika, matarajio ya watumiaji, usanifu wa mfumo, vipaumbele vya biashara, ambacho kingehalalisha kuirekebisha?** Kama huwezi kukumbuka mapitio ya hivi karibuni, kutokuwepo huko chenyewe kunastahili kujadiliwa.

6. **Ingetugharimu nini, kwa juhudi ya uhandisi, kusogeza SLO yetu ya sasa juu kwa "tisa" moja ya ziada ya kutegemewa, na je, gharama hiyo ingehalalishwa na faida yoyote halisi kwa mtumiaji?** Fremu hii thabiti ya gharama-faida inasaidia kuegemeza mvutano wa matamanio-dhidi-ya-uwezekano wa kufikia kwenye namba halisi badala ya upendeleo wa kufikirika.

## Mtazamo wa sekta

**Kampuni changa.** SLO rasmi mara nyingi si za lazima mapema sana, timu inapoweza kuitikia matatizo ya kutegemewa moja kwa moja na bila rasmi. Pokea angalau SLO ghafi, isiyo rasmi mara mnapokuwa na wateja wanaolipa wanaotegemea upatikanaji, kwa kuwa nidhamu ya lengo wazi, hata linalofuatiliwa kwa ulegevu, inasaidia kupa kipaumbele kazi ya kutegemewa dhidi ya shinikizo la vipengele mapema kuliko kampuni changa nyingi zinavyofikiria.

**Biashara ndogo.** Majukwaa mengi ya kisasa ya upangishaji na uonekanaji huripoti data ya msingi ya upatikanaji na ucheleweshaji kwa usanidi mdogo; itumie kuweka SLO rahisi, inayoweza kufikiwa badala ya ya matamanio ambayo huwezi kuifuatilia kwa uhalisia au kuitendea kazi ukiwa na uwezo mdogo wa kiuendeshaji.

**Biashara kubwa.** SLO kwa ukubwa huu mara nyingi huegemeza makubaliano ya kiwango cha huduma ya kimkataba yenye matokeo halisi ya kifedha, jambo linalofanya kuweka malengo kunakotegemea ushahidi na usimamizi wa nidhamu wa bajeti ya makosa kuwa muhimu hasa. Wekeza katika SLI zilizoegemezwa kweli kwenye uzoefu wa mtumiaji badala ya ukaguzi wa afya wa ndani wa urahisi, na uanzishe rasmi sera ya jibu la kuisha iliyoamuliwa mapema, kwa kukubalika kwa watendaji, kabla haijahitajika chini ya shinikizo.

**Serikali.** Malengo ya kutegemewa ya sekta ya umma kwa miundombinu muhimu wakati mwingine yanabeba uzito wa kisheria au wa udhibiti, na lengo lisilo la kweli, lisilofikiwa linalogunduliwa wakati wa ukaguzi au tukio la umma linaharibu uaminifu wa kitaasisi kwa kiasi kikubwa. Weka malengo kwa msingi wa mahitaji halisi, yaliyoandikwa ya watumiaji na dhamira, na uwe wazi hadharani kuhusu mabadilishano ya makusudi ambayo bajeti ya makosa inawakilisha, badala ya kudokeza kiwango kisichoweza kufikiwa cha ukamilifu.

## Mifano

**Biashara kubwa.** Kampuni ya hifadhi ya wingu ilikuwa, kwa miaka, ikilenga "upatikanaji wa juu kabisa" bila SLO rasmi, jambo lililosababisha mvutano wa kudumu, usiotatuliwa kati ya timu ya bidhaa (ikitaka kusafirisha vipengele haraka) na timu ya miundombinu (ikitaka tahadhari ya juu kabisa), ukijadiliwa upya katika kila mkutano wa kupanga toleo. Kupokea SLO rasmi ya upatikanaji ya asilimia 99.95 pamoja na bajeti wazi ya makosa na sera iliyoamuliwa mapema, kazi ya vipengele inasimama kiotomatiki bajeti inapoisha, kulitatua mazungumzo yanayojirudia kabisa: timu zote mbili ziliweza kuona namba ileile na kukubali kanuni ileile, na kampuni iliripoti ongezeko linalopimika la vipengele vilivyosafirishwa wakati wa vipindi vya bajeti yenye afya pamoja na kupungua kwa kasi kwa makusudi, kunakopimika wakati wa vipindi viwili katika mwaka uliofuata ambapo bajeti iliisha kweli, hasa kama sera ilivyokusudia.

**Serikali.** Mfumo wa tahadhari ya umma wa huduma ya hali ya hewa ya kitaifa ulikuwa umefanya kazi kwa miaka chini ya matarajio yasiyo rasmi ya "daima inapatikana," bila lengo lililoandikwa na msongo mkubwa, usioshughulikiwa wa kiuendeshaji kwa timu ya simu ya dharura inayojaribu kutimiza kiwango kisichotajwa, kisichowezekana kwa ufanisi. SLO rasmi mpya iliyopokelewa, upatikanaji wa asilimia 99.9 pamoja na maelezo yaliyowasilishwa wazi ya bajeti ya makosa kwa umma, iliipa timu ya uendeshaji ruhusa wazi, inayoweza kutetewa ya kupanga madirisha ya matengenezo yaliyopangwa ndani ya bajeti, jambo ambalo matarajio ya awali yasiyotajwa ya "daima inapatikana" yalikuwa yameifanya kuwa vigumu kisiasa kufanya hata pale yalipokuwa ya lazima kweli kwa afya ya muda mrefu ya mfumo. Mawasiliano ya umma yanayoeleza dhana ya bajeti ya makosa moja kwa moja, badala ya kuificha, yalipokelewa vyema kama ishara ya mazoea ya kiuendeshaji ya uaminifu, yaliyokomaa badala ya kudhoofisha kujitolea kwa ubora wa huduma.

## Kesi ya biashara: sababu, ROI, na TCO

Faida ya kupokea SLO na bajeti za makosa rasmi ni kutatua mazungumzo yasiyoisha, ya gharama ya kisiasa kati ya kasi na uthabiti kwa kanuni moja, ya pamoja, ya kiuhalisia. Mfano wa hifadhi ya wingu hapo juu unaonyesha hili kwa uhalisia: miaka ya mvutano unaojirudia, usiotatuliwa kati ya timu mbili ilitatuliwa kwa lengo moja rasmi na sera iliyoamuliwa mapema, ikiachilia nishati kubwa ya kishirika ambayo hapo awali ilikuwa ikienda kujadili upya mabadilishano yaleyale mara kwa mara.

Jumla ya gharama ya umiliki inajumuisha juhudi ya uchambuzi ya kuweka lengo linalotegemea ushahidi kwa usahihi na nidhamu ya kuheshimu jibu lililoamuliwa mapema la kuisha hata chini ya shinikizo la kusafirisha kipengele kinachotakiwa hasa hata hivyo. Gharama hiyo ya nidhamu ni halisi, lakini iko chini zaidi sana kuliko gharama endelevu ya mazungumzo ya kudumu, yasiyotatuliwa yanayotumia nishati ya kishirika katika kila mzunguko wa upangaji bila kikomo.

## Mifumo mibaya na mitego

- **Kuweka SLO ya matamanio bila ushahidi nyuma yake:** huzalisha lengo lisilo la kweli ambalo timu inaacha kulichukulia kwa uzito, au la gharama kubwa isiyo ya lazima likifukuzia faida ambayo watumiaji hawaioni.
- **Hakuna jibu lililoamuliwa mapema kwa kuisha kwa bajeti ya makosa:** hulazimisha mabishano magumu ya mabadilishano yaleyale chini ya shinikizo kila yanapotokea.
- **Kupima SLI kutoka afya ya mfumo wa ndani badala ya uzoefu halisi wa mtumiaji:** kunaweza kuripoti "yenye afya" huku watumiaji wakipitia matatizo halisi.
- **Kutowahi kutumia bajeti ya makosa yenye afya kwa makusudi:** kunaweza kuashiria tahadhari kupita kiasi na fursa halali iliyokosekana.
- **Kuweka lengo mara moja na kutolipitia tena kamwe:** SLO inaweza kuchakaa matarajio ya watumiaji, usanifu, na vipaumbele vinapobadilika.
- **Kuchukulia sera ya bajeti ya makosa kama ya hiari chini ya shinikizo:** kanuni iliyoamuliwa mapema inayobatilishwa kila inapokuwa na usumbufu haitoi thamani halisi ya kufanya maamuzi.

## Kielelezo cha ukomavu

- **Ngazi ya 1, Kuanzisha:** Malengo ya kutegemewa ni ya dhahiri au ya matamanio, bila SLO rasmi, SLI, au bajeti ya makosa iliyofafanuliwa.
- **Ngazi ya 2, Kuendeleza:** Baadhi ya huduma zina SLO isiyo rasmi, lakini SLI huenda zisiakisi uzoefu halisi wa mtumiaji na hakuna sera iliyoamuliwa mapema ya kuisha.
- **Ngazi ya 3, Kusawazisha:** SLO zinazotegemea ushahidi zenye SLI za uzoefu halisi wa mtumiaji na sera iliyoamuliwa mapema ya kuisha kwa bajeti ya makosa zimeanzishwa kwa uthabiti kuvuka huduma muhimu.
- **Ngazi ya 4, Kusimamia:** Bajeti za makosa zinatumiwa kikamilifu na kwa makusudi kwa kuchukua hatari zilizokokotolewa, na SLO zinapitiwa na kurekebishwa kwa mdundo wa mara kwa mara, wa ushahidi.
- **Ngazi ya 5, Kuratibu:** SLO na bajeti za makosa zimeunganishwa shirika zima kama utaratibu wa pamoja, wa kiuhalisia wa kusawazisha kasi na uthabiti, na shirika linaweza kuonyesha maamuzi mahususi ambayo mfumo uliwezesha ambayo mazungumzo yasiyoegemezwa yasingeyatatua kwa ufanisi sawa.

## Mawazo ya kujadili

1. Je, SLO yetu ya sasa imeegemezwa kwenye ushahidi, au kwenye matamanio?
2. Je, tuna jibu lililoamuliwa mapema kwa kuisha kwa bajeti ya makosa ambalo tungeliheshimu chini ya shinikizo?
3. Lini mwisho tulitumia kwa makusudi bajeti ya makosa yenye afya kwa hatari iliyokokotolewa?
4. Je, SLI zetu zinapima uzoefu halisi wa mtumiaji au ukaguzi wa afya wa ndani wa urahisi?
5. Ingetugharimu nini kuinua SLO yetu kwa "tisa" moja ya ziada, na je, gharama hiyo ingehalalishwa?

## Mambo muhimu ya kukumbuka

- **Kiashiria cha kiwango cha huduma (SLI)** kinapima uzoefu halisi wa mtumiaji; **lengo la kiwango cha huduma (SLO)** ni lengo lake linalotegemea ushahidi; **bajeti ya makosa** ni upungufu unaoruhusiwa wa kutumika kwa makusudi.
- **Kutegemewa kwa asilimia 100 kwa kawaida ni lengo lisilo sahihi**; egemeza SLO yako kwenye kile watumiaji wanachokiona kweli na kile kila ongezeko la ziada linachogharimu kweli.
- Chukulia bajeti ya makosa kama **rasilimali inayoweza kutumika yenye jibu lililoamuliwa mapema la kuisha**, kuondoa hitaji la kujadili upya kasi-dhidi-ya-uthabiti chini ya shinikizo kila wakati.
- Pima SLI kutoka **uzoefu halisi wa mtumiaji**, si tu ukaguzi wa afya wa ndani wa urahisi.
- **Pitia na urekebishe SLO mara kwa mara**, kwa ushahidi, kwa kuwa lengo lililochakaa linapoteza manufaa yake mfumo na watumiaji wake wanapobadilika.

## Marejeo na usomaji zaidi

- *Site Reliability Engineering: How Google Runs Production Systems*, na Betsy Beyer, Chris Jones, Jennifer Petoff, na Niall Richard Murphy, wahariri (matini ya msingi inayofafanua SLI, SLO, na bajeti za makosa).
- *The Site Reliability Workbook*, na Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, na Stephen Thorne, wahariri (mwongozo wa vitendo wa kutekeleza SLO na bajeti za makosa).
- *Implementing Service Level Objectives*, na Alex Hidalgo (mwongozo kamili, unaolenga watendaji wa kubuni na kuendesha SLO).
- *Accelerate: The Science of Lean Software and DevOps*, na Nicole Forsgren, Jez Humble, na Gene Kim (uhusiano kati ya mazoea ya kutegemewa na utendaji wa utoaji).
