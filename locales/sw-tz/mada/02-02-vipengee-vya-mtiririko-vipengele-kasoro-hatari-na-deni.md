# 2.2 Vipengee vya mtiririko: vipengele, kasoro, hatari, na deni

## Muhtasari na msukumo

**Kipengee cha mtiririko** ni kitengo cha kazi cha Flow Framework, na kila kipengee cha mtiririko kinaangukia katika aina moja hasa kati ya nne: **vipengele**, thamani mpya ya biashara au uwezo unaotolewa kwa mteja; **kasoro**, marekebisho ya ubora kwa hitilafu zilizopatikana na watumiaji au majaribio; **hatari**, kazi ya usalama, uzingatiaji, faragha, na utawala inayolinda biashara; na **deni**, [deni la kiufundi](https://en.wikipedia.org/wiki/Technical_debt), uboreshaji wa usanifu, na kazi ya miundombinu inayowezesha kasi ya baadaye. Mada ya 2.1 ilitambulisha mfumo ambao kategoria hizi nne zinaupo; mada hii inaingia kwa kina kwenye taksonomia yenyewe, kwa sababu kategoria zinatoa thamani tu ikiwa timu inaainisha kazi yake ndani yake kwa uaminifu na uthabiti.

Sifa inayofafanua vipengee vya mtiririko ni kwamba ugawaji kuvuka aina nne ni **mchezo wa jumla-sifuri**: kiasi thabiti cha uwezo wa uhandisi kipo katika kipindi chochote, na kila saa inayotumika kwa kipengele ni saa isiyotumika kwa deni, hatari, au kazi ya kasoro. Hii si ukweli mpya kuhusu utoaji wa programu, kila kiongozi wa uhandisi tayari anajua uwezo una kikomo, lakini mashirika mengi hayana njia thabiti, ya uaminifu ya kuona mgawanyo halisi. Kasi ya sprint inahesabu pointi za hadithi bila kujali aina; mrundikano uliopunguzwa unaonekana vilevile iwe kazi iliyo nyuma yake ilikuwa mtiririko mpya wa malipo au miezi mitatu ya urekebishaji wa usalama usiovutia. Vipengee vya mtiririko vipo mahususi kufanya mgawanyo huo usioonekana uonekane.

Kwa timu kubwa, mwonekano huu unabadilisha asili ya mazungumzo ya rasilimali. Badala ya kiongozi wa uhandisi kutoa hoja isiyopimwa kwamba "tunahitaji muda zaidi kwa deni la kiufundi," uainishaji wa vipengee vya mtiririko unazalisha namba halisi, deni lilitumia asilimia 30 ya uwezo wa robo iliyopita, ambayo inaweza kujadiliwa, kutetewa, na kurekebishwa kwa makusudi na wadau wa biashara. Mashirika ya biashara kubwa yanayoendesha mistari mingi ya bidhaa kwa wakati mmoja na mashirika ya serikali yanayosawazisha utendaji mpya unaomkabili raia dhidi ya hatari ya mifumo ya urithi yanategemea mabadilishano haya yanayoweza kutetewa, yaliyopimwa zaidi sana kuliko hisia ya faragha, isiyo rasmi kwamba "tunatumia muda mwingi mno kwa matengenezo."

## Kanuni kuu

- **Kila kipengee cha mtiririko kinaangukia aina moja hasa.** Kulazimisha uainishaji mmoja, badala ya kuruhusu mchanganyiko au usio wazi, ndiko kunakofanya taksonomia itumike kwa kuripoti jumla.
- **Ugawaji ni wa jumla-sifuri, si wa kujumlisha.** Uwezo zaidi kwa vipengele ni lazima uwe uwezo mdogo kwa kasoro, hatari, na deni katika kipindi kilekile.
- **Hakuna mgawanyo wenye afya kwa wote.** Bidhaa changa katika awamu ya ukuaji inapaswa kihalali kuelekea vipengele; mfumo uliokomaa unaobeba hatari halisi ya kiufundi unapaswa kihalali kuelekea kazi ya deni na hatari.
- **Kazi ya deni na hatari huripotiwa pungufu kwa kudumu bila nidhamu hii.** Huelekea kutokea kimya, ikimezwa ndani ya "kazi za uhandisi" za jumla, hadi uainishaji wa vipengee vya mtiririko ukilazimishe wazi.
- **Ubora wa uainishaji huamua thamani nzima ya taksonomia.** Taksonomia inayotumika bila uthabiti au kuchezewa baada ya tukio huzalisha namba zinazopotosha kikamilifu badala ya kuarifu.

## Mapendekezo

### Ainisha kila kipengee wakati wa kupokelewa, ukitumia fasili iliyoandikwa kwa kila aina

Kubaliana juu ya fasili fupi, iliyoandikwa ya kinachohesabika kama kipengele, kasoro, hatari, na deni katika muktadha wako mahususi, na udai kila kipande kipya cha kazi kiainishwe dhidi ya fasili hiyo papo hapo kinapoingia kwenye mkondo wa thamani, si baada ya kukamilika. Fasili iliyokubaliwa mapema inapinga hamu ya kuainisha baada ya tukio kwa msingi wa jinsi kipande cha kazi kilivyoonekana mwishowe, ambayo ndiyo hatari ya kuchezea mada hii inayoitaja moja kwa moja hapa chini.

### Ripoti mgawanyo wa mtiririko kama mwelekeo, si picha moja

Mgawanyo wa kipindi kimoja unakuambia kidogo kuliko mwelekeo kuvuka vipindi kadhaa. Kuteleza kwa uthabiti kuelekea aina moja ya kipengee, vipengele vikipanda huku deni likipungua kimyakimya robo baada ya robo, ni ishara yenye nguvu zaidi sana kuliko namba ya kipindi chochote kimoja, na kwa kawaida ndio mfumo unaostahili kuletwa kwa wadau kabla haujawa mgogoro badala ya baada.

### Weka mgawanyo lengwa wa makusudi na wadau wa biashara, si uhandisi tu

Amua, pamoja na uongozi wa bidhaa na biashara, mgawanyo wenye afya unaonekanaje kwa awamu ya sasa ya mkondo wako wa thamani, na pitia lengo hilo mara kwa mara badala ya kuliacha liteleze kwa chaguo-msingi. Bidhaa changa ya awamu ya ukuaji na mfumo uliokomaa wa awamu ya uthabiti kihalali una malengo tofauti yenye afya, na lengo lenyewe linapaswa kuwa uamuzi wa biashara uliojadiliwa, si kitu ambacho uhandisi unaamua kimyakimya peke yake.

### Kagua uainishaji wa vipengee vya mtiririko dhidi ya ushahidi huru

Linganisha mara kwa mara mgawanyo wako wa mtiririko na vipimo visivyotegemea kujiainisha: kiwango cha kasoro zilizotoroka (mada ya 5.1), kipimo cha deni la kiufundi (mada ya 4.5), na vipimo vya usimamizi wa udhaifu (mada ya 6.4). Kasoro au udhaifu ukipanda huku sehemu za vipengee vya mtiririko vya "kasoro" na "hatari" zikibaki tambarare au kupungua, kutolingana huko ndiyo ishara iliyo wazi zaidi inayopatikana kwamba uainishaji umeteleza kutoka uhalisia.

### Angalia mfumo wa kiwanda cha vipengele mahususi

Mgawanyo wa mtiririko unapoonyesha vipengele vikichukua karibu uwezo wote kila mara, robo baada ya robo, huku kazi ya deni na hatari ikiwa kamwe haipandi juu ya sehemu ya ishara, mfumo huo (wakati mwingine huitwa "kiwanda cha vipengele") kwa kawaida unamaanisha deni na hatari vinakosa uwezo kwa njaa, si kwamba mfumo hauhitaji matengenezo kweli. Mfumo huu ni wa raha kwa muda mfupi na ghali baadaye, ukijitokeza hatimaye kama mgogoro wa ubora au usalama unaofika bila onyo kwenye chati ya mgawanyo wa mtiririko, kwa sababu mkusanyiko wa msingi haukuonekana kamwe.

## Mabadilishano: faida na hasara

| Mbinu | Faida | Hasara |
| --- | --- | --- |
| Hakuna uainishaji rasmi (mrundikano wa jumla) | Hakuna mzigo wa mchakato | Kazi ya deni, hatari, na kasoro inabaki isiyoonekana; vigumu kutetea maamuzi ya rasilimali |
| Uainishaji wa vipengee vya mtiririko wa aina nne | Hufanya ugawaji wa uwezo uonekane na kujadiliwa na wadau | Inahitaji nidhamu ya wakati wa kupokelewa na fasili iliyoandikwa, iliyokubaliwa kwa kila aina |
| Uainishaji wa kina zaidi (aina ndogo nyingi) | Undani zaidi wa utambuzi | Juhudi zaidi ya uainishaji; namba zaidi za kuwaeleza wadau |
| Uainishaji baada ya tukio | Rahisi kutumia, hakuna mabadiliko ya mchakato mapema | Uko wazi sana kwa kuchezewa; uainishaji huteleza kuelekea chochote kinachoonekana bora |

Mvutano wa kati ni **nidhamu ya uainishaji dhidi ya mzigo wa mchakato**. Taksonomia ya aina nne ni ghafi kwa makusudi, ghafi vya kutosha kwamba kuainisha kipengee kunachukua sekunde, si mjadala, lakini ughafi huo unashikilia tu ikiwa nidhamu ya kuainisha wakati wa kupokelewa, dhidi ya fasili iliyoandikwa, inadumishwa kweli. Litatue kwa kuweka taksonomia rahisi hivi hasa, aina nne, si zaidi, na kuwekeza ukali wowote wa ziada katika hatua ya ukaguzi (kukagua dhidi ya ushahidi huru) badala ya mpango wa uainishaji wa kina zaidi unaomomonyoka chini ya mzigo halisi wa kazi.

## Maswali ya kujadili na timu yako

1. **Tukiainisha kila kitu ambacho timu yetu ilisafirisha robo iliyopita, mgawanyo halisi kuvuka vipengele, kasoro, hatari, na deni ungeonekanaje, na je, ungewashangaza wadau wetu?** Timu nyingi hazijawahi kufanya zoezi hili kwa uaminifu. Lijaribu kwa data halisi kabla ya kudhani tayari unajua jibu.

2. **Je, tuna fasili iliyoandikwa, iliyokubaliwa ya kinachohesabika kama kipengele dhidi ya deni dhidi ya hatari katika muktadha wetu mahususi, au uainishaji unategemea yeyote anayeweka lebo ya tiketi?** Fasili isiyo rasmi, isiyo thabiti huzalisha namba zinazoonekana sahihi lakini hazilinganishwi kweli kipindi hadi kipindi.

3. **Je, mgawanyo wetu wa mtiririko umewahi kuteleza kwa uthabiti kuelekea aina moja ya kipengee bila yeyote kuamua hilo kwa makusudi?** Kuteleza polepole ni rahisi kukosa kipindi kwa kipindi lakini ni dhahiri mara linapochorwa kama mwelekeo. Vuta vipindi kadhaa vya data, ikiwa unavyo, na utafute mfumo huu kwa uaminifu.

4. **Mgawanyo wenye afya wa mtiririko ungeonekanaje kwa awamu ya sasa ya bidhaa yetu, na je, tumekubaliana kweli kuhusu lengo hilo na wadau wa biashara?** Mashirika mengi hayajawahi kufanya lengo hili liwe wazi, kumaanisha hakuna msingi wa pamoja wa kugundua mgawanyo halisi unapoteleza mbali nalo.

5. **Je, mgawanyo wetu wa mtiririko unalingana na ushahidi huru, kama kiwango cha kasoro zilizotoroka au hesabu za udhaifu wazi, au kuna kutolingana kunakostahili uchunguzi?** Kutolingana hapa ndiyo ishara iliyo wazi zaidi inayopatikana kwamba uainishaji umeteleza kutoka kile kazi ilivyo kweli.

6. **Je, mtu kwenye timu yetu anaweza kubadilisha lebo kimyakimya ya kipengee cha deni au hatari kuwa kipengele chini ya shinikizo la utoaji, na je, tungeona leo wakifanya hivyo?** Hili ndilo hatari kuu ya kuchezea ya mada hii ikisemwa moja kwa moja. Jadilini kama mchakato wenu wa sasa ungekamata hili kweli, si tu kama yeyote angefanya kwa makusudi.

## Mtazamo wa sekta

**Kampuni changa.** Uainishaji rasmi mara nyingi unahisi kama mzigo wakati timu nzima tayari inajua kila mtu anafanya kazi gani. Kiwango cha chini chenye manufaa kwa ukubwa huu ni kutaja tu kategoria nne kwa sauti wakati wa upangaji, ili kazi ya deni na hatari isipewe kipaumbele cha chini kimyakimya kila tarehe ya mwisho ya kipengele inapounda shinikizo, mfumo unaozidi kuwa mbaya msingi wa msimbo na timu vyote vinapokua.

**Biashara ndogo.** Sehemu moja maalum au lebo moja katika zana yako ya ufuatiliaji iliyopo inatosha kunasa aina ya kipengee cha mtiririko bila uwekezaji wowote maalum wa zana. Nidhamu ya kuainisha kwa uthabiti wakati wa kupokelewa ni muhimu zaidi sana kuliko ustadi wowote wa zana.

**Biashara kubwa.** Uainishaji wa vipengee vya mtiririko ndipo mfumo huu unapopata thamani yake kwa ukubwa, kwa sababu shirika kubwa linaloendesha mikondo mingi ya thamani kwa wakati mmoja halina njia nyingine ya kutegemewa, ya jumla ya kuona uwezo unagawanywaje kweli kuvuka vipengele, kasoro, hatari, na deni. Wekeza kwenye uainishaji uliounganishwa na zana na ukaguzi wa mara kwa mara dhidi ya ushahidi huru; uainishaji wa mkono, wa papo hapo haunusurika ukubwa halisi wa shirika.

**Serikali.** Mgawanyo wa mtiririko unampa kiongozi wa teknolojia wa sekta ya umma jibu linaloweza kutetewa, lililopimwa anapoulizwa kwa nini vipengele vipya vichache vinavyomkabili raia vinasafirishwa, wakati jibu la uaminifu ni kwamba mzigo wa hatari na deni wa mfumo wa urithi unatumia sehemu halisi, inayoweza kuhalalishwa ya uwezo. Kufanya mabadilishano hayo kuwa wazi na ya kujadiliwa, badala ya kunyonywa kimya, kwa kawaida hujenga uaminifu zaidi na vyombo vya usimamizi kuliko rufaa isiyopimwa ya "umuhimu wa kiufundi."

## Mifano

**Biashara kubwa.** Timu ya jukwaa la biashara ya mtandaoni ya kampuni kubwa ya rejareja iliamini, kwa msingi wa kasi ya sprint, kwamba ilikuwa ikitoa pato thabiti la vipengele. Zoezi la kwanza la uaminifu la uainishaji wa vipengee vya mtiririko liligundua kwamba "vipengele" vilikuwa kweli asilimia 40 tu ya kazi iliyokamilika, huku deni, sehemu kubwa ikihusiana na mfumo wa malipo uliozeeka, likitumia karibu theluthi ya uwezo bila kuwahi kutajwa hivyo katika ripoti yoyote ya awali. Kuwasilisha mgawanyo huu kwa uongozi wa bidhaa, pamoja na kiwango kinachopanda cha kasoro zilizotoroka kilichothibitisha mzigo wa deni, kulipata bajeti maalum ya usasishaji ambayo timu ilikuwa imeiomba bila mafanikio kwa miaka miwili kwa kutumia hoja za ubora tu.

**Serikali.** Timu ya leseni za kidijitali ya wakala wa magari wa jimbo iliainisha mrundikano wake kwa mara ya kwanza baada ya kukatika kwa umma kuvuta uchunguzi kwenye uthabiti wa mfumo wa msingi. Zoezi lilifichua kwamba kazi ya "hatari," hasa usasishaji wa usalama uliokuwa umepewa kipaumbele cha chini mara kwa mara kwa niaba ya vipengele vinavyoonekana vinavyomkabili raia, ilikuwa imepungua hadi chini ya asilimia 5 ya uwezo katika mwaka uliotangulia, mfumo ambao haukuwahi kuonekana katika kuripoti kwa kawaida kwa timu. Uongozi wa wakala ulitumia matokeo kuamuru ugawaji wa chini wa kazi ya hatari kuendelea mbele, ukiungwa mkono na data ya mgawanyo wa mtiririko badala ya taarifa ya sera ya jumla peke yake.

## Kesi ya biashara: sababu, ROI, na TCO

Faida ya uainishaji wa vipengee vya mtiririko ni msingi unaoweza kutetewa, uliopimwa wa maamuzi ya rasilimali ambayo hapo awali yalibishaniwa kwa ubora na mara nyingi yalipotea kwa kazi yoyote iliyoonekana zaidi kwa wadau. Mfano wa rejareja hapo juu, kupata bajeti ya usasishaji kwa data halisi ya uwezo badala ya rufaa ya jumla, ndio mfumo ambao nidhamu hii huzalisha kwa kutegemewa: namba mahususi ni vigumu zaidi sana kuikataa kuliko hisia ya jumla kwamba "tunahitaji muda zaidi kwa matengenezo."

Jumla ya gharama ya umiliki ni ndogo mara taksonomia na fasili zake zinapokubaliwa: uainishaji unaongeza sekunde kwenye kupokelewa, si mzigo wa maana wa mchakato, na kuunganisha zana kunakohitajika kuufuatilia kwa kawaida ni sehemu moja maalum au lebo. Gharama halisi, endelevu ni nidhamu ya kudumisha uainishaji wa uaminifu chini ya shinikizo la utoaji, ndiyo maana ukaguzi wa mara kwa mara dhidi ya ushahidi huru ni muhimu kama kupokea kwa awali.

## Mifumo mibaya na mitego

- **Kuainisha kazi baada ya tukio, matokeo yakishajulikana:** njia ya kuchezea iliyo kiini cha mada hii. Chini ya shinikizo la utoaji, timu inaweza kuweka lebo kimyakimya ya kazi ya deni au hatari kama kipengele baada ya tukio, au kuzungusha kipengee chenye utata kuelekea aina yoyote inayoonekana bora kwenye chati ya mgawanyo, bila uamuzi wowote mmoja kuonekana si wa uaminifu peke yake. Kizuizi ni uainishaji wa wakati wa kupokelewa dhidi ya fasili iliyoandikwa, pamoja na ukaguzi wa mara kwa mara unaolinganisha mgawanyo wa mtiririko na ushahidi huru kama kiwango cha kasoro zilizotoroka (mada ya 5.1) na vipimo vya udhaifu (mada ya 6.4), nidhamu ileile ya ukaguzi-dhidi-ya-ushahidi-huru ambayo mada ya 1.2 inaiomba kwa kila kipimo katika kitabu hiki.
- **Kuruhusu vipengele kuchukua karibu uwezo wote kila mara (mfumo wa kiwanda cha vipengele):** hukosesha kazi ya deni na hatari uwezo kimyakimya hadi inajitokeza kama mgogoro.
- **Kuchukulia mgawanyo wa kipindi kimoja kama picha nzima:** hukosa kuteleza polepole, kwa kujumlika ambako mtazamo wa mwelekeo unafichua wazi.
- **Kuweka mgawanyo lengwa bila wadau wa biashara:** hupoteza thamani kuu ya mfumo, uelewa wa pamoja, uliojadiliwa wa mabadilishano.
- **Kutumia fasili isiyo thabiti au isiyoandikwa kwa kila aina:** huzalisha namba zinazoonekana sahihi lakini hazilinganishwi kweli kwa muda.
- **Kuongeza uhandisi kupita kiasi taksonomia kwa aina ndogo nyingi:** huongeza mzigo wa uainishaji unaomomonyoa nidhamu bila kuongeza ufahamu unaolingana.

## Kielelezo cha ukomavu

- **Ngazi ya 1, Kuanzisha:** Kazi inafuatiliwa kwa jumla, bila uainishaji wa vipengee vya mtiririko; kazi ya deni na hatari haionekani katika kuripoti.
- **Ngazi ya 2, Kuendeleza:** Baadhi ya timu zinaainisha vipengee vya mtiririko bila rasmi, lakini fasili hazina uthabiti na uainishaji mara nyingi hutokea baada ya tukio.
- **Ngazi ya 3, Kusawazisha:** Timu zote zinaainisha wakati wa kupokelewa dhidi ya fasili ya pamoja, iliyoandikwa, na mgawanyo wa mtiririko unafuatiliwa kama mwelekeo.
- **Ngazi ya 4, Kusimamia:** Mgawanyo wa mtiririko unakaguliwa mara kwa mara dhidi ya ushahidi huru, na mgawanyo lengwa unawekwa kwa makusudi na wadau wa biashara.
- **Ngazi ya 5, Kuratibu:** Data ya vipengee vya mtiririko inaarifu moja kwa moja maamuzi ya rasilimali na uwekezaji kuvuka shirika, na uongozi unaweza kuonyesha maamuzi mahususi yaliyofanywa kwa sababu uainishaji ulifanya mabadilishano yaliyokuwa hayaonekani yawe wazi.

## Mawazo ya kujadili

1. Mgawanyo wa uaminifu wa vipengee vya mtiririko wa kazi ya robo iliyopita ungeonyesha nini, na je, ungemshangaza yeyote?
2. Je, tuna fasili iliyoandikwa kwa kila aina ya vipengee vinne vya mtiririko, au uainishaji unategemea nani anaweka lebo ya kazi?
3. Je, mgawanyo wetu wa mtiririko umewahi kuteleza kuelekea aina moja ya kipengee bila uamuzi wa makusudi nyuma yake?
4. Ushahidi gani huru tunaweza kukagua mgawanyo wetu wa mtiririko dhidi yake leo?

## Mambo muhimu ya kukumbuka

- **Kipengee cha mtiririko** kinaangukia aina moja kati ya nne, vipengele, kasoro, hatari, au deni, na ugawaji wa uwezo kuvuka hizo ni **jumla-sifuri**.
- **Hakuna mgawanyo wenye afya kwa wote**; mchanganyiko sahihi unategemea awamu ya bidhaa na unapaswa kuwa lengo la makusudi, lililojadiliwa na wadau wa biashara.
- Njia kuu ya kuchezea ya mada hii ni **uainishaji baada ya tukio**, kubadilisha lebo kimyakimya ya kazi ya deni au hatari kuwa kipengele baada ya tukio; kizuizi ni uainishaji wa wakati wa kupokelewa pamoja na ukaguzi wa mara kwa mara dhidi ya ushahidi huru.
- Angalia **mfumo wa kiwanda cha vipengele** mahususi, vipengele vikichukua karibu uwezo wote kila mara, vinavyokosesha kazi ya deni na hatari hadi ijitokeze kama mgogoro.
- Mgawanyo wa mtiririko una thamani zaidi kama **mwelekeo**, na faida yake kubwa zaidi inatokana na kuushiriki moja kwa moja na wadau wa biashara.

## Marejeo na usomaji zaidi

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
