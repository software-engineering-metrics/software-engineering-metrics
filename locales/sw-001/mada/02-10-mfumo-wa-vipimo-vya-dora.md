# 2.10 Mfumo wa vipimo vya DORA

## Muhtasari na msukumo

**[Vipimo vya DORA](https://dora.dev/guides/dora-metrics/)** vinatoka kwenye programu ya [DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment, juhudi ya utafiti ya miaka mingi, baadaye iliyochapishwa kama kitabu *Accelerate* na Nicole Forsgren, Jez Humble, na Gene Kim, iliyochunguza makumi ya maelfu ya wataalamu wa uhandisi kupata mazoea gani ya utoaji yanahusiana na utendaji wa shirika. Matokeo yalikuwa vipimo vinne, vilivyooanishwa wawili wawili: mzunguko wa usambazaji na muda wa kuongoza wa mabadiliko vinapima kasi; kiwango cha kushindwa kwa mabadiliko na muda wa kurejesha usambazaji uliofeli, mara nyingi hufupishwa kuwa wastani wa muda wa kupona (MTTR), vinapima uthabiti. Ugunduzi wa utafiti uliofanya mfumo huu kuwa muhimu ulikuwa kwamba watendaji bora walikuwa wa haraka na thabiti kwa wakati mmoja, wakipindua dhana kwamba kasi na usalama vinabadilishana, na ugunduzi huo bado ni mfano wazi zaidi uliofanyiwa kazi wa kitabu hiki wa kanuni ya kuoanisha vizuizi ya mada ya 1.2: kipimo cha kasi kilichochochewa, kikioanishwa na kizuizi cha uthabiti, ndicho mashirika yanayofanya vizuri zaidi hufanya kweli.

Kitabu hiki kinashughulikia DORA mwisho katika sehemu hii, kwa makusudi, badala ya kuwa mfumo wa kupanga wa sehemu. Uwekaji huo si kukataa utafiti, ambao unabaki wa ukali kweli na unastahili kutumiwa. Unaakisi kikwazo mahususi, halisi: DORA inapima kwa kasi na usalama kiasi gani bomba linasogea, lakini iko kimya kuhusu kinachosogea kupitia bomba. Timu inaweza kuchapisha namba bora za DORA huku pato lake halisi limeteleza kimyakimya kuelekea kazi ya kurudia ya kasoro au limekosesha deni la kiufundi na kazi ya usalama uwezo, mfumo ambao Flow Framework ya mada za 2.1 hadi 2.4 imejengwa mahususi kuufichua na DORA haiwezi kuuona. Tumia DORA kama mada hii inavyoiwasilisha: kipimo cha rejeo kilichothibitishwa vizuri, finyu zaidi cha mekanika ya bomba, si picha nzima ya afya ya utoaji.

Kwa timu kubwa, thamani halisi iliyobaki ya DORA ni uwezo wa kulinganisha. Kipimo kilichokokotolewa kwa uthabiti kutoka data ya bomba na tukio kinaruhusu shirika kulinganisha uwezo wa utoaji kuvuka timu nyingi zinazofanya kazi katika vikoa tofauti bila tatizo la kulinganisha tufaha na machungwa linalosumbua ulinganisho mwingi wa kuvuka timu. Mashirika ya biashara kubwa bado yanaitumia kupa kipaumbele uwekezaji wa jukwaa; mashirika ya serikali bado yanaitumia kuonyesha, kwa ushahidi, kwamba programu ya usasishaji iliboresha mekanika ya utoaji kwa kupimika. Chukulia hilo kama kazi sahihi, yenye mipaka ya DORA, na utumie mada za Flow Framework za awali katika sehemu hii kwa swali pana la kama mambo sahihi yanatolewa kabisa.

## Kanuni kuu

- **DORA inapima bomba, si thamani inayotiririka ndani yake.** Mada ya 2.1 inataja pengo hili moja kwa moja; tumia mgawanyo wa mtiririko (mada ya 2.3) kuona kile DORA isichoweza.
- **Kasi na uthabiti vinapimwa pamoja, kamwe kando.** Dashibodi iliyoarifiwa na DORA bila nusu zote mbili haitumii mfumo kweli.
- **Uthabiti wa fasili ni muhimu kuliko namba ghafi.** Timu inayohama kutoka utendaji wa "wastani" hadi "wa juu" kwa kipimo kilichofafanuliwa kwa uthabiti ni ishara halisi; kulinganisha timu mbili zilizokokotolewa tofauti sivyo.
- **DORA inapima mfumo, si watu binafsi.** Kutumia vipimo hivi kwa wahandisi binafsi kunavunja msingi wa kitakwimu wa mfumo na kualika hasa kuchezea ambako mada ya 1.2 inaonya dhidi yake.
- **Vipimo vyote vinne ni wawakilishi, si malengo.** Vinahusiana na utendaji wa shirika; kufukuzia namba yenyewe, iliyotengana na uboreshaji halisi wa utoaji, kunashinda madhumuni ya mfumo.

## Mapendekezo

### Pima mzunguko wa usambazaji kutoka bomba, ukihesabu matoleo ya uzalishaji tu

**Mzunguko wa usambazaji** unapima mara ngapi timu inatoa kwa mafanikio kwenye uzalishaji. Hesabu usambazaji wa uzalishaji uliofanikiwa tu, uliopimwa kiotomatiki kutoka data ya bomba la CI/CD, kamwe usiojitoa taarifa binafsi. Angalia hasa kuchezea kwa mbadala, kugawanya badiliko moja lenye maana kuwa usambazaji wa kijinga kadhaa kwa lengo la kuvimbisha hesabu tu, kwa kufuatilia ukubwa wa usambazaji kando ya mzunguko: wastani wa ukubwa unaopungua kando ya hesabu inayopanda ndiyo ishara iliyo wazi zaidi kwamba hili linatokea.

### Pima muda wa kuongoza wa mabadiliko kutoka mchango wa kwanza hadi uzalishaji

**Muda wa kuongoza wa mabadiliko** unapima muda kutoka mchango wa kwanza wa badiliko la msimbo hadi usambazaji wake wenye mafanikio kwenye uzalishaji. Ripoti wastani wa kati na pesentaili ya juu, si wastani tu, ukifuata mwongozo wa mada ya 1.6 kuhusu data ya muda iliyopindwa, na uangalie kupotoka kwa fasili katika ncha yoyote, jambo linalopendelea namba bila uboreshaji halisi.

### Fafanua kiwango cha kushindwa kwa mabadiliko kwa maandishi kabla ya kulinganisha kuvuka timu

**Kiwango cha kushindwa kwa mabadiliko** kinapima asilimia ya usambazaji unaosababisha kushindwa kunakohitaji marekebisho, kurejesha nyuma, urekebishaji wa dharura, au tukio. Hiki ndicho kigumu zaidi kati ya vinne kufafanua kwa uthabiti, kwa sababu "kushindwa" si kwa dhahiri kuwa kwa kiuhalisia. Kubaliana juu ya fasili iliyoandikwa kabla ya kulinganisha timu; bila hiyo, ulinganisho unaoonekana wa haki unaweza kupotosha vibaya. Angalia uboreshaji wa haraka wa kutiliwa shaka bila badiliko la mchakato la msingi nyuma yake, ishara iliyo wazi zaidi ya kuchezea fasili badala ya maendeleo halisi.

### Pima muda wa kupona kutoka ugunduzi, si kutoka tukio la usambazaji

**Muda wa kurejesha usambazaji uliofeli** unapima inachukua muda gani kurejesha huduma usambazaji unaposababisha kushindwa. Anza saa wakati wa ugunduzi, si tukio la usambazaji lenyewe, ili namba iakisi ucheleweshaji halisi wa kupona badala ya pengo la ufuatiliaji. Wekeza hasa katika uwezo wa kurejesha nyuma wa otomatiki, kiguzo cha kawaida zaidi cha kuboresha kipimo hiki kweli badala ya kutangaza tukio limetatuliwa mapema.

### Tumia vipimo vya mtiririko, si DORA, kutambua kwa nini namba ilisogea

Kipimo cha DORA kinaposogea, namba nne peke yake mara chache zinaeleza kwa nini. Tumia mgawanyo wa muda wa mzunguko (mada ya 2.6), mzigo wa mtiririko (mada ya 2.4), na mgawanyo wa mtiririko (mada ya 2.3) kama tabaka la utambuzi chini ya namba za muhtasari za DORA, na kamwe usitumie kipimo cha DORA katika mapitio ya utendaji ya mtu binafsi, matumizi mabaya yenye madhara zaidi ambayo mfumo huu uko wazi kwake.

## Mabadilishano: faida na hasara

| Mbinu | Faida | Hasara |
| --- | --- | --- |
| Mfumo kamili wa DORA, vipimo vyote vinne vimeoanishwa | Umethibitishwa kwa utafiti, unapinga kuchezea kupitia uoanishaji, unawezesha ulinganisho wa haki wa kuvuka timu | Uko kimya kuhusu aina gani ya thamani inatolewa; unahitaji Flow Framework kando yake kwa picha hiyo |
| DORA kama seti pekee ya kupanga ya vipimo vya sehemu hii | Rahisi, unajulikana kwa viongozi wengi wa uhandisi | Unakosa swali la mchanganyiko wa thamani kabisa, sababu ya kitabu hiki ya kuupa kipaumbele cha chini hapa |
| DORA pamoja na Flow Framework | Mekanika ya bomba na mchanganyiko wa thamani vyote vinaonekana | Inahitaji kudumisha misamiati miwili ya vipimo badala ya mmoja |
| DORA inayotumika katika kiwango cha mtu binafsi | Inahisi inatekelezeka moja kwa moja kwa baadhi ya mameneja | Inavunja uhalali wa kitakwimu wa mfumo; mfiduo mkali kwa sheria ya Goodhart |

Mvutano wa kati ni **ukali wa kimakanika dhidi ya usomekaji wa biashara**. Vipimo vinne vya DORA vimefafanuliwa kwa usahihi na kuthibitishwa kwa utafiti, jambo linalovifanya bora kwa kulinganisha utendaji wa bomba kuvuka timu, lakini usahihi huohuo umewekewa wigo finyu kwa bomba lenyewe na hausemi chochote kuhusu kama kazi sahihi inatiririka ndani yake. Litatue kwa kuweka DORA kama tabaka la rejeo la afya ya bomba, mahali pake sahihi mada ya 2.10 katika muundo wa kitabu hiki, huku ukitumia mada za Flow Framework za awali katika sehemu hii kwa swali la mchanganyiko wa thamani linalomkabili biashara, badala ya kujaribu kufanya DORA ijibu swali ambalo haikubuniwa kuliweza.

## Maswali ya kujadili na timu yako

1. **Je, tunapima vipimo vyote vinne vya DORA kutoka bomba, au baadhi yake ni makadirio yaliyoripotiwa binafsi?** Mfumo uliojengwa kwa kipimo cha kiuhalisia, kilichothibitishwa kwa utafiti hupoteza sehemu kubwa ya thamani yake papo hapo namba inapogeuka kuwa kisio bora. Kagua chanzo halisi cha data cha kila kipimo (mada ya 1.5).

2. **Je, timu zote tunazolinganisha kwa kutumia vipimo vya DORA zinashiriki fasili zilezile za usambazaji, badiliko, na kushindwa?** Ulinganisho kati ya timu zinazotumia fasili tofauti si ulinganisho kweli, na unaweza kuzalisha hukumu zisizo za haki kuhusu utendaji wa kulinganishwa.

3. **Je, yeyote katika shirika letu ametumia kipimo cha DORA katika mapitio ya utendaji ya mtu binafsi, rasmi au bila rasmi?** Hili ndilo matumizi mabaya yenye madhara zaidi ya mfumo na mara nyingi hutokea kimya. Uliza moja kwa moja na uwe tayari kwa jibu lisilofurahisha lakini la lazima.

4. **Je, namba zetu za DORA zinaweza kuwa bora huku mgawanyo wetu wa mtiririko (mada ya 2.3) umeteleza kimyakimya kuelekea kazi ya kurudia au mbali na vipengele?** Hili ndilo pengo hasa ambalo DORA peke yake haiwezi kuliona. Vuta seti zote mbili za namba pamoja na ukague kama zinasimulia hadithi thabiti.

5. **Kipimo kimoja cha DORA kinaposogea, je, tuna utambuzi wa kipimo cha mtiririko wa kueleza kwa nini?** Namba ya DORA peke yake inakuambia kwamba kitu kilibadilika, si nini. Kagua kama timu zenu zinaweza kujibu "kwa nini muda wa kuongoza uliongezeka mwezi huu" kwa data, au kwa ubashiri tu.

6. **Namba zetu nne za DORA zingebadilikaje tukijaribu kuchezea kila moja kwa makusudi, na je, tungeona?** Pitieni mzunguko wa usambazaji, muda wa kuongoza, kiwango cha kushindwa kwa mabadiliko, na muda wa kupona mmoja mmoja, matumizi ya vitendo ya nidhamu kuu ya mada ya 1.2 kwa mfumo huu mahususi.

## Mtazamo wa sekta

**Kampuni changa.** Vipimo vya kasi vya DORA kwa kawaida huja kwa asili kwa timu ndogo inayosambaza mara kwa mara tayari; nidhamu ngumu zaidi ni kupima kiwango cha kushindwa kwa mabadiliko na muda wa kupona kwa uaminifu badala ya kudhani uthabiti kwa sababu hakuna kilichovunjika vibaya bado. Kuoanisha DORA na hata mgawanyo usio rasmi wa vipengee vya mtiririko (mada ya 2.2) mapema kunaepuka kujenga hisia ya uongo ya afya ya utoaji kuzunguka kasi ya bomba peke yake.

**Biashara ndogo.** Majukwaa mengi ya kisasa ya CI/CD na udhibiti wa matoleo yanasafirisha data ya mzunguko wa usambazaji na muda wa kuongoza kwa usanidi mdogo; kuunganisha usambazaji na matukio kwa kiwango cha kushindwa kwa mabadiliko kwa kawaida kunahitaji juhudi zaidi ya mkono. Anza na vipimo viwili vya kasi na uongeze ufuatiliaji wa uthabiti mara tu kumbukumbu isiyo rasmi ya matukio inapokuwepo ya kuunganisha nayo.

**Biashara kubwa.** Thamani kubwa iliyobaki ya DORA kwa ukubwa huu ni ulinganisho wa haki, thabiti wa kuvuka timu kwa maamuzi ya uwekezaji wa jukwaa. Sawazisha fasili shirika zima (mada ya 1.4), otomatisha upimaji kwa kati, na uoanishe kila ripoti ya DORA na mwonekano wa mgawanyo wa mtiririko ili uongozi uone kasi ya bomba na mchanganyiko wa thamani pamoja, si kimoja bila kingine.

**Serikali.** Vipimo vya DORA bado vinaipa programu ya usasishaji njia inayoweza kutetewa, inayoungwa mkono na utafiti ya kuonyesha uboreshaji wa mekanika ya utoaji kwa vyombo vya usimamizi. Ripoti vipimo vyote vinne pamoja, kamwe usichague nusu ya kupendeza, na viunganishe na mgawanyo wa mtiririko ili ripoti pia ijibu swali gumu zaidi, muhimu zaidi la bomba la haraka zaidi linatoa nini kweli.

## Mifano

**Biashara kubwa.** Programu ya usasishaji wa jukwaa ya kampuni kubwa ya mawasiliano ilipima vipimo vyote vinne vya DORA kwa uthabiti kuvuka timu arobaini za bidhaa na kuonyesha mwendo halisi kutoka bendi za utendaji wa chini hadi wa juu kwa miezi kumi na minane, mzunguko wa usambazaji ukipanda takriban mara kumi, muda wa kuongoza ukishuka kutoka wiki hadi siku, kiwango cha kushindwa kwa mabadiliko kikibaki tambarare. Mjumbe wa bodi, akipitia uwasilishaji, aliuliza swali ambalo namba za DORA peke yake hazikuweza kujibu: ni kiasi gani cha utoaji huo wa haraka zaidi kilikuwa thamani mpya ya wateja dhidi ya kazi ya kurudia. Shirika la uhandisi halikuwa na jibu hadi lilipopokea uainishaji wa vipengee vya mtiririko robo iliyofuata, ulioonyesha kazi ya vipengele ilikuwa imeshuka kama sehemu ya jumla ya pato hata kasi za DORA zilipoboreka, ugunduzi uliobadilisha vipaumbele vya mwaka ujao vya programu.

**Serikali.** Ofisi ya usasishaji wa IT ya serikali ya jimbo ilipokea vipimo vya DORA kama sharti la mkataba kulinganisha uwezo wa utoaji wa timu kadhaa shindani za wauzaji, matumizi mazuri ya uwezo wa kulinganisha wa mfumo. Mzunguko wa juu wa usambazaji wa muuzaji mmoja ulifichuliwa, kiwango cha kushindwa kwa mabadiliko kilipodaiwa kando yake, kuhusiana na kiwango cha kushindwa kilicho karibu mara tatu zaidi kuliko wenzake, taarifa iliyoarifu moja kwa moja uamuzi wa ofisi wa kuendeleza mkataba. Ofisi baadaye iliongeza hitaji la mgawanyo wa mtiririko kwenye mikataba hiyohiyo baada ya kugundua kwamba muuzaji mwenye namba bora za DORA pia ndiye aliyekuwa akitumia sehemu ndogo zaidi ya uwezo kwa kazi ya urekebishaji wa usalama ambayo mkataba ulidai hasa.

## Kesi ya biashara: sababu, ROI, na TCO

Faida ya kupokea DORA vizuri, ndani ya wigo wake sahihi, ni jibu linaloweza kutetewa, linalotegemea ushahidi kwa "je, bomba letu la utoaji linakuwa la haraka zaidi na salama zaidi," ambalo linabaki mojawapo ya maswali yanayoweza kushughulikiwa zaidi katika uhandisi kujibu kwa ujasiri. Jibu hilo linahalalisha uwekezaji wa jukwaa na zana kwa namba halisi, na kuruhusu uongozi kulinganisha uwekezaji shindani kwa msingi wa haki, thabiti, hasa kama ilivyokuwa daima.

Jumla ya gharama ya umiliki ni kazi ya kuunganisha inayounganisha matukio ya usambazaji na rekodi za matukio kwa kiwango cha kushindwa kwa mabadiliko na muda wa kupona, isiyo ndogo kuvuka mandhari kubwa, isiyofanana ya zana. Gharama ya ziada ya kuoanisha DORA na mada za Flow Framework za awali katika sehemu hii ni ndogo kwa kulinganisha, kwa kuwa uainishaji wa vipengee vya mtiririko ni mkataba wa kuripoti uliowekwa juu ya kazi iliyopo, si mfumo sambamba wa kupima, na faida, kukamata hasa pembe isiyoonekana ya mchanganyiko wa thamani ambayo mfano wa mawasiliano hapo juu unaonyesha, inastahili kabisa uwekezaji huo mdogo wa ziada.

## Mifumo mibaya na mitego

- **Kuchukulia DORA kama picha nzima ya afya ya utoaji:** njia ya kuchezea ambayo uwekaji wa mada hii umebuniwa kukabili. Shirika linaweza kuwasilisha namba bora kweli za DORA, usambazaji wa haraka, wa mara kwa mara, thabiti, huku thamani yake halisi iliyotolewa imehama kimyakimya kuelekea kazi ya kurudia au mbali na vipengele, na vipimo vinne vya DORA peke yake havitafichua mabadiliko hayo kamwe kwa sababu havikubuniwa kuyapima. Kizuizi ni kuoanisha kila ripoti ya DORA na mgawanyo wa mtiririko (mada ya 2.3), ili bomba la haraka, thabiti linalotoa mchanganyiko usio sahihi wa kazi lionekane badala ya kukosewa kuwa afya halisi ya utoaji.
- **Kuripoti nusu ya kasi ya DORA tu:** kunashinda ugunduzi mkuu wa mfumo kwamba kasi na uthabiti vinasogea pamoja kwa watendaji wa juu.
- **Kutumia vipimo vya DORA katika mapitio ya utendaji ya mtu binafsi:** kunavunja uhalali wa kitakwimu wa mfumo na kualika kuchezea kwa nguvu.
- **Kulinganisha timu zenye fasili zisizo thabiti:** huzalisha ulinganisho unaoonekana wa haki lakini si wa haki.
- **Namba za DORA zilizoripotiwa binafsi badala ya zilizopimwa kutoka bomba:** huleta hasa upendeleo ambao mfumo ulibuniwa kuuondoa.
- **Kuchukulia DORA kama utambuzi badala ya muhtasari:** kunaiacha timu isiyoweza kueleza kwa nini namba ilisogea bila tabaka la kipimo cha mtiririko lililo chini yake.

## Kielelezo cha ukomavu

- **Ngazi ya 1, Kuanzisha:** Vipimo vya DORA, vikifuatiliwa kabisa, vinaripotiwa binafsi, vimefafanuliwa bila uthabiti, na havioanishwi kamwe na data ya mtiririko.
- **Ngazi ya 2, Kuendeleza:** Baadhi ya timu zinapima DORA kutoka bomba, lakini fasili zinatofautiana na hakuna mgawanyo wa mtiririko wa kukagua dhidi yake.
- **Ngazi ya 3, Kusawazisha:** Vipimo vyote vinne vya DORA vinapimwa kwa uthabiti kutoka data ya bomba na tukio, vikiwa na fasili za pamoja, na vinaonyeshwa mara kwa mara kando ya mgawanyo wa mtiririko.
- **Ngazi ya 4, Kusimamia:** DORA na vipimo vya mtiririko vinapitiwa pamoja kama uoanishaji wa kawaida katika kila ngazi ya shirika, na DORA haitumiki kamwe kwa tathmini ya mtu binafsi.
- **Ngazi ya 5, Kuratibu:** Shirika linaweza kuonyesha kesi mahususi ambapo mgawanyo wa mtiririko ulikamata tatizo la mchanganyiko wa thamani ambalo namba bora za DORA peke yake zilikuwa zimeficha, na linatumia mifumo yote miwili kwa makusudi kwa maswali tofauti kila moja inajibu.

## Mawazo ya kujadili

1. Vipimo vyetu vinne vya DORA vinatuweka wapi kwenye wigo wa daraja za utendaji, kwa uaminifu?
2. Je, namba zetu za DORA zingeweza kuonekana bora huku mgawanyo wetu wa mtiririko umeteleza kimyakimya? Je, tumewahi kukagua?
3. Je, yeyote amewahi kutumia namba ya DORA kuhukumu mtu binafsi, hata bila rasmi?
4. Mshindani akichapisha namba zake za DORA, je, zetu zingelinganishwa vyema, na je, ulinganisho huo ungetuambia nani anatoa thamani halisi zaidi?

## Mambo muhimu ya kukumbuka

- Vipimo vinne vya DORA, **mzunguko wa usambazaji, muda wa kuongoza, kiwango cha kushindwa kwa mabadiliko, na muda wa kupona**, vinaoanisha kasi na uthabiti kwa muundo na vinabaki vimethibitishwa kweli kwa utafiti.
- Kitabu hiki kinaweka DORA **mwisho katika sehemu hii** kwa sababu inapima bomba, si thamani inayotiririka ndani yake; ioanishe na mgawanyo wa mtiririko (mada ya 2.3) kwa picha kamili zaidi.
- Njia kuu ya kuchezea ya mada ni **kukosea namba bora za DORA kuwa afya kamili ya utoaji**; kizuizi ni kuripoti DORA daima kando ya mgawanyo wa mtiririko.
- **Kamwe usitumie vipimo vya DORA katika mapitio ya utendaji ya mtu binafsi**; uhalali wa mfumo unategemea kipimo cha kiwango cha mfumo, si cha mtu binafsi.
- Tumia **vipimo vya mtiririko kama tabaka la utambuzi** chini ya namba za muhtasari za DORA mojawapo inaposogea.

## Marejeo na usomaji zaidi

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
