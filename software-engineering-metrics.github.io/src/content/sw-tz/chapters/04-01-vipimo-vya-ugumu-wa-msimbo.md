# 4.1 Vipimo vya ugumu wa msimbo

## Muhtasari na msukumo

**[Ugumu wa mzunguko](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, ulioanzishwa na Thomas J. McCabe mwaka 1976, unahesabu idadi ya njia huru kupitia mtiririko wa udhibiti wa kipande cha msimbo: kila `if`, kitanzi, na tawi huongeza hesabu. Unabaki kipimo cha ugumu wa msimbo kinachotumika sana karibu miaka hamsini baadaye, pamoja na jamaa kama ugumu wa kiakili (unaopa uzito zaidi mtiririko wa udhibiti uliowekwa ndani na mgumu kufuata kuliko hesabu ya mstari ya asili ya McCabe) na kina cha kuwekwa ndani. Vipimo hivi vinashiriki ufahamu halisi, ulioidhinishwa: msimbo wenye njia huru zaidi kupitia kwake ni mgumu zaidi kujaribu kikamilifu, mgumu zaidi kuufikiria, na, katika miongo ya utafiti wa kimajaribio, kwa kupimika una uwezekano mkubwa zaidi wa kuwa na kasoro.

Mada hii inachukua ufahamu huo kwa heshima halisi huku ikichukulia mipaka yake kwa uzito sawa. Vipimo vya ugumu vinapima sifa moja mahususi ya msimbo, na msingi wa msimbo unaweza kuwa rahisi kwa kila kipimo cha ugumu huku bado ukiwa umebuniwa vibaya, umetajwa vibaya, au usioshikamana kimawazo kwa njia ambazo hakuna algoriti ya kuhesabu matawi inayoweza kugundua. Kinyume chake, baadhi ya matatizo magumu yasiyopunguzika kweli yanahitaji msimbo mgumu kutatuliwa kwa usahihi, na timu iliyoshinikizwa kupunguza alama ya ugumu inaweza kuzalisha msimbo unaopata alama nzuri huku kwa kweli ukiwa mgumu zaidi kuelewa, ikieneza ugumu muhimu kuvuka faili na tabaka za kupitia zaidi badala ya kuupunguza.

Kwa timu kubwa, vipimo vya ugumu vinajilipa kama zana ya kuchuja: njia ya kupata, kati ya maelfu ya faili, kikundi kidogo chenye uwezekano mkubwa wa kustahili kutazamwa kwa karibu, si kama hukumu ya pekee juu ya ubora wa msimbo. Mashirika ya biashara kubwa na ya serikali yanayodumisha misingi ya msimbo mikubwa mno kwa mtu yeyote kuisoma yote yanategemea kazi hii ya kuchuja kuelekeza juhudi adimu ya urekebishaji wa muundo na mapitio mahali itakapofaidi zaidi.

## Kanuni kuu

- **Vipimo vya ugumu vinatabiri ugumu wa majaribio na kasoro; havipimi ubora moja kwa moja.** Vichukulie kama pembejeo moja, si hukumu.
- **Alama ya ugumu iko wazi kwa kuchezewa kupitia kuficha, si kurahisisha halisi tu.** Kueneza ugumu kuvuka faili zaidi kunaweza kupunguza alama bila kufanya msimbo uwe rahisi kuelewa kweli.
- **Ugumu fulani ni muhimu, si wa ajali.** Tatizo gumu kweli linaweza kuhitaji msimbo mgumu kweli; lengo ni kupunguza ugumu wa ajali, si kuondoa ugumu wote bila kutofautisha.
- **Tumia vipimo vya ugumu kuchuja, si kama kadi ya alama ya mtu binafsi au timu.** Vinaelekeza mahali pa kutazama, si nani wa kulaumu.
- **Mwelekeo na vitu vya nje ni muhimu kuliko kizingiti chochote kamili.** Mwelekeo unaopanda au kitu cha nje kilichokithiri kinatekelezeka zaidi kuliko wastani wa timu nzima.

## Mapendekezo

### Tumia vipimo vya ugumu kuchuja juhudi ya mapitio na urekebishaji wa muundo

Endesha uchambuzi wa ugumu kuvuka msingi wa msimbo na utumie matokeo kupa kipaumbele mahali ambapo mapitio ya karibu ya binadamu au uwekezaji wa urekebishaji wa muundo utalipa zaidi: vitendakazi au faili zinazopata alama mbali juu ya safu ya kawaida ya msingi wa msimbo wenyewe ndio mahali penye thamani kubwa zaidi pa kutazama kwanza. Matumizi haya ya kuchuja, kupata mahali pa kutazama, ndiyo matumizi yanayotetewa zaidi, yenye thamani zaidi ya vipimo vya ugumu, zaidi sana kuliko kuvitumia kama lango kamili la kupita/kufeli.

### Weka vizingiti kulingana na msingi wako wa msimbo, si namba ya ulimwengu

Vizingiti kamili vya ugumu vilivyokopwa bila kuhoji kutoka mkataba wa sekta (alama ya ugumu ya kumi ni kanuni ya kidole gumba inayotajwa sana) vinaweza kuwa vya ulegevu mno au vikali mno kulingana na kikoa chako: kichanganuzi au injini ya kanuni inaweza kuwa na ugumu wa msingi wa juu zaidi kihalali kuliko huduma ya kawaida ya CRUD. Rekebisha vizingiti vyako dhidi ya usambazaji halisi wa msingi wako wa msimbo, na uchukulie ukiukaji wa kizingiti kama kichocheo cha kutazama kwa karibu, si kushindwa kwa ujenzi kiotomatiki, isipokuwa timu yako imechagua sera hiyo kali zaidi kwa makusudi kwa ufahamu kamili wa mabadilishano yake.

### Angalia kuchezea kupitia kugawanya bila kurahisisha halisi

Njia ya kawaida zaidi ya alama za ugumu kuchezewa ni mfumo wa mbadala wa mada ya 1.2 unaotumika kwa kipimo hiki mahususi: kugawanya kitendakazi kimoja changamano kweli kuwa vitendakazi vidogo kadhaa vinavyopata alama nzuri kivyake, huku mfumo mzima ukibaki mgumu vilevile kuelewa, au wakati mwingine kuwa mgumu zaidi, kwa sababu mantiki sasa imetawanyika kuvuka faili zaidi zenye kupitia zaidi kati yake. Oanisha vipimo vya ugumu na mapitio ya ubora ya kama kugawanya kulifafanua msimbo kweli, au kulihamisha tu ugumu mahali ambapo kipimo hakingeweza tena kuuona.

### Tofautisha ugumu muhimu na ugumu wa ajali kabla ya kuitikia

Kabla ya kuchukulia alama ya juu ya ugumu kama tatizo la kurekebisha, uliza kama tatizo la msingi linahitaji njia huru nyingi hivyo kweli, mantiki ya kukokotoa kodi ina matawi mengi kihalali, kwa mfano, au kama ugumu unatokana na sababu zinazoepukika: masharti yaliyowekwa ndani kwa kina yanayoweza kupunguzwa, mantiki iliyorudiwa inayoweza kuunganishwa, au mipaka ya wajibu isiyo wazi inayoweza kuchorwa upya. Kategoria ya pili tu ndiyo tatizo halisi la ubora ambalo kipimo hiki kinapaswa kukuendesha kurekebisha.

### Fuatilia mwelekeo na vitu vya nje, si wastani wa picha moja tu

Wastani wa alama ya ugumu wa msingi mzima wa msimbo kusogea kidogo mara chache unatekelezeka peke yake; ugumu wa faili mahususi kupanda kwa kasi kuvuka mabadiliko kadhaa, au idadi ndogo ya vitu vya nje vilivyokithiri katika msingi wa msimbo wenye tabia nzuri vinginevyo, ni ishara zenye manufaa zaidi sana. Fuatilia mwelekeo kwa muda na mkia wa vitu vya nje vyote viwili, na uvitumie kuchochea uchunguzi mahususi, uliolengwa badala ya mpango mpana, usiolenga wa kupunguza ugumu.

## Mabadilishano: faida na hasara

| Mbinu | Faida | Hasara |
| --- | --- | --- |
| Kizingiti kamili cha ulimwengu | Rahisi, thabiti, rahisi kuotomatisha | Inapuuza tofauti halali za kikoa; inaweza kuchezewa kwa kugawanya |
| Kizingiti kinacholingana na msingi wa msimbo | Kimerekebishwa vizuri zaidi kwa muktadha halisi | Kinahitaji usanidi zaidi na kurekebisha upya mara kwa mara |
| Ugumu kama lango la ujenzi la otomatiki | Inatekeleza uthabiti bila mzigo wa mapitio ya binadamu | Inaweza kuzuia msimbo mgumu lakini uliobuniwa vizuri, au kuzawadia kugawanya kwa kuficha |
| Ugumu kama ishara ya kuchuja kwa mapitio ya binadamu | Inakamata matatizo halisi ya ubora ambayo kugawanya peke yake kungekosa | Inahitaji muda zaidi wa mapitio ya binadamu kuliko lango la otomatiki kabisa |

Mvutano wa kati ni **otomatiki dhidi ya busara**. Lango la ugumu la otomatiki kabisa ni la bei nafuu kutekeleza na thabiti, lakini linaweza kuzuia msimbo mgumu halali, uliobuniwa vizuri na kuzawadia kugawanya kwa juujuu kunakochezea alama bila kurahisisha chochote kweli. Litatue kwa kutumia uchambuzi wa ugumu wa otomatiki kufichua wagombea wa mapitio, na kuhifadhi busara halisi, je, ugumu huu ni muhimu au wa ajali, je, urekebishaji huu ulifafanua kweli au ulihamisha tu ugumu, kwa mpitiaji wa binadamu badala ya lango gumu la otomatiki peke yake.

## Maswali ya kujadili na timu yako

1. **Je, vizingiti vyetu vya ugumu vimerekebishwa kwa usambazaji halisi wa msingi wetu wa msimbo, au vimekopwa bila kuhoji kutoka mkataba wa jumla wa sekta?** Vuta usambazaji halisi wa ugumu wa msingi wenu wa msimbo na ukague kama vizingiti vyenu vya sasa vina maana dhidi yake, badala ya kudhani namba inayotajwa sana inatumika kwa ulimwengu kwa kikoa chenu.

2. **Je, tumewahi kuona kitendakazi kikigawanywa kuwa vidogo kadhaa bila msimbo unaotokana kuwa rahisi kuelewa kweli?** Hii ndiyo ishara iliyo wazi zaidi ya mfumo wa kuchezea kwa kugawanya ambao mada hii inaonya dhidi yake. Tazama urekebishaji wa hivi karibuni uliochochewa hasa na alama ya ugumu na ukague kwa uaminifu kama uliboresha uwezo halisi wa kueleweka.

3. **Wapi katika msingi wetu wa msimbo ugumu ni muhimu kwa tatizo, na wapi ni wa ajali na unaorekebishika?** Pitia vitu vyenu vya nje vya ugumu wa juu zaidi na uvipange katika kategoria hizi mbili waziwazi, kwa kuwa ya pili tu inawakilisha tatizo halisi, linalotekelezeka la ubora.

4. **Je, tunatumia vipimo vya ugumu kuchuja juhudi ya mapitio, au kama lango gumu la otomatiki bila busara ya binadamu inayohusika?** Jadilini kama mbinu yenu ya sasa ya utekelezaji inaacha nafasi kwa tofauti ya muhimu-dhidi-ya-ajali ambayo mada hii inapendekeza, au inachukulia kila ukiukaji kwa namna ileile bila kujali muktadha.

5. **Je, alama ya ugumu imewahi kutumika, hata bila rasmi, kuhukumu ubora wa kazi ya mhandisi mmoja mmoja?** Hii inahatarisha mtego ule ule wa tathmini ya mtu binafsi ambao mada ya 3.4 inaonya dhidi yake kwa vipimo vya shughuli, ukitumika hapa kwa vipimo vya msimbo badala yake, na unaalika jibu lilelile la kuchezea.

6. **Mwelekeo wetu wa ugumu unaonekanaje kwa mwaka uliopita kwa faili zetu muhimu zaidi, zinazobadilishwa mara nyingi zaidi?** Changanya hili na uchambuzi wa mabadiliko ya mara kwa mara na sehemu moto kutoka mada ya 4.3, kwa kuwa faili ambayo ni ngumu sana na inabadilishwa mara nyingi inastahili umakini mapema kuliko ile ngumu lakini mara chache inaguswa.

## Mtazamo wa sekta

**Kampuni changa.** Vipimo vya ugumu kwa kawaida si vya dharura kwa ukubwa huu; ukubwa wa msingi wa msimbo ni mdogo vya kutosha kwamba kufahamiana bila rasmi mara nyingi kunachukua nafasi ya kipimo rasmi. Tabia inayostahili kupokelewa mapema ni kuendesha uchunguzi wa ugumu mara kwa mara tu kukamata faili mahususi ikiwa isiyodhibitika kimyakimya kabla timu haijakua kubwa mno kuona bila rasmi.

**Biashara ndogo.** Zana nyingi za kisasa za uchambuzi tuli huripoti vipimo vya ugumu kama sehemu ya usanidi mpana wa lint wa bure au wa gharama ndogo; tumia matokeo kama ishara ya mara kwa mara ya kuchuja badala ya kuwekeza kwenye zana maalum. Lenga umakini kwenye faili zako zinazobadilishwa mara nyingi zaidi kwanza.

**Biashara kubwa.** Vipimo vya ugumu kwa ukubwa vina thamani zaidi vikichanganywa na data ya mabadiliko ya mara kwa mara (mada ya 4.3) kupa kipaumbele uwekezaji wa urekebishaji wa muundo kuvuka msingi wa msimbo mkubwa mno kwa mtu yeyote kuukagua kwa mkono. Rekebisha vizingiti kwa kila huduma au kikoa badala ya kutumia namba moja ya shirika zima, kwa kuwa ugumu halali unatofautiana sana kuvuka aina tofauti za mifumo.

**Serikali.** Mifumo ya serikali ya muda mrefu mara nyingi hukusanya ugumu polepole kuvuka miaka au miongo ya mabadiliko ya mahitaji ya nyongeza, na ukaguzi wa ugumu unaweza kuwa zana ya ushawishi, thabiti ya kuhalalisha uwekezaji wa usasishaji au urekebishaji wa muundo kwa wadau ambao vinginevyo wangeona mfumo kama "unafanya kazi tu" na kwa hiyo si wa thamani ya kuwekeza.

## Mifano

**Biashara kubwa.** Kampuni ya uchakataji wa malipo iliendesha ukaguzi wa ugumu wa msingi mzima wa msimbo kwa mara ya kwanza na kupata kitendakazi kimoja cha uthibitishaji wa miamala chenye alama ya ugumu wa mzunguko zaidi ya mara kumi ya wastani wa kati wa msingi wa msimbo. Uchunguzi uligundua ugumu ulikuwa karibu kabisa wa ajali: miaka ya ushughulikiaji wa hali maalum ulioongezwa kwa nyongeza kwa watoa malipo mahususi ulikuwa umekusanyika kuwa masharti yaliyowekwa ndani kwa kina yaliyoweza kupangwa upya kuwa mfumo safi wa mkakati unaotenganisha mantiki mahususi ya mtoaji. Urekebishaji wa muundo, uliopewa kipaumbele moja kwa moja kwa sababu ukaguzi wa ugumu ulitambua kuwa lengo lenye thamani kubwa zaidi katika msingi wa msimbo, ulipunguza alama ya ugumu wa kitendakazi kwa zaidi ya asilimia 80 na, muhimu zaidi, ulipunguza kiwango cha kasoro katika njia hiyo mahususi ya msimbo kwa kupimika kuvuka robo mbili zilizofuata.

**Serikali.** Injini ya kukokotoa mafao ya miongo kadhaa ya mamlaka ya kodi ilipata alama za juu sana kwenye vipimo vya ugumu kuvuka karibu kila kitendakazi, ikichochea dhana ya awali kwamba mfumo mzima ulihitaji kuandikwa upya kutoka chini. Mapitio ya karibu zaidi, kitendakazi kwa kitendakazi, yanayotofautisha ugumu muhimu na wa ajali yaligundua kwamba sehemu kubwa ya ugumu iliakisi kweli kanuni za kisheria za msingi, ambazo kweli zilikuwa na matawi mengi halali hivyo na hali maalum zilizoamriwa na sheria, huku kikundi kidogo kilitokana na kurudiwa kunakoepukika kuvuka njia zinazofanana za kukokotoa. Timu ililenga tu kikundi hicho cha ugumu wa ajali kwa urekebishaji wa muundo, ikiepuka kuandika upya kamili kwa gharama kubwa, hatari huku ikiboresha kwa maana maeneo yenye matatizo zaidi ya mfumo.

## Kesi ya biashara: sababu, ROI, na TCO

Faida ya kutumia vipimo vya ugumu vizuri ni uwekezaji wa urekebishaji wa muundo uliolengwa, wenye thamani kubwa: mfano wa kampuni ya malipo hapo juu unaonyesha urekebishaji mmoja, uliolengwa vizuri, uliotambuliwa kupitia uchambuzi wa ugumu, uliopunguza kasoro kwa kupimika katika njia hasa ya msimbo yenye hatari kubwa zaidi, kwa sehemu ndogo ya gharama ambayo mpango mpana, usiolenga wa urekebishaji wa muundo ungehitaji.

Jumla ya gharama ya umiliki ni ndogo: minyororo mingi ya zana za uendelezaji ya kisasa inakokotoa vipimo vya ugumu kiotomatiki kama sehemu ya uchambuzi tuli (mada ya 4.4), na uwekezaji halisi ni muda wa busara ya binadamu kufasiri matokeo kwa usahihi, kutofautisha ugumu muhimu na wa ajali na kukamata kuchezea kwa kugawanya, badala ya gharama yoyote kubwa mpya ya zana.

## Mifumo mibaya na mitego

- **Kuchukulia alama ya ugumu kama hukumu ya moja kwa moja ya ubora:** inapima sifa moja mahususi, si ubora wa jumla wa msimbo.
- **Kugawanya kitendakazi kuchezea alama bila kurahisisha halisi:** mfumo wa kuchezea kwa kugawanya ambao mada hii inautaja mahususi.
- **Kutumia kizingiti cha ulimwengu bila kurekebisha kwa msingi wako wa msimbo:** huzalisha utekelezaji wa ulegevu mno au ukali mno kulingana na kikoa.
- **Kutumia vipimo vya ugumu kutathmini wahandisi binafsi:** huchochea kuchezea na kukosea kipimo kilichokusudiwa kuchuja, si hukumu.
- **Kuchukulia ugumu wote kama unaorekebishika kwa usawa:** ugumu muhimu kutoka tatizo gumu kweli si kasoro ya kuondoa.
- **Kupuuza mwelekeo na vitu vya nje kwa niaba ya wastani tambarare wa msingi mzima wa msimbo:** hukosa ishara inayotekelezeka zaidi ambayo familia hii ya vipimo inatoa.

## Kielelezo cha ukomavu

- **Ngazi ya 1, Kuanzisha:** Ugumu haupimwi, au unapimwa kwa kizingiti cha ulimwengu kisichochunguzwa kinachotumika bila kuhoji.
- **Ngazi ya 2, Kuendeleza:** Vipimo vya ugumu vinakusanywa lakini mara chache vinatendewa kazi, na hakuna tofauti inayofanywa kati ya ugumu muhimu na wa ajali.
- **Ngazi ya 3, Kusawazisha:** Vizingiti vimerekebishwa kwa usambazaji wa msingi wa msimbo wenyewe, na vipimo vya ugumu vinaendesha kwa uthabiti kuchuja mapitio na urekebishaji wa muundo shirika zima.
- **Ngazi ya 4, Kusimamia:** Mwelekeo na vitu vya nje vya ugumu vinafuatiliwa kikamilifu na kuchanganywa na data ya mabadiliko ya mara kwa mara (mada ya 4.3) kupa kipaumbele uwekezaji wa urekebishaji wa muundo; kuchezea kwa kugawanya kunatazamwa kikamilifu.
- **Ngazi ya 5, Kuratibu:** Shirika linaweza kuonyesha uboreshaji mahususi, unaopimika wa kiwango cha kasoro uliofuatiliwa moja kwa moja hadi uwekezaji wa urekebishaji wa muundo ulioarifiwa na ugumu, na data ya ugumu ni pembejeo ya kawaida, inayoaminika kwa maamuzi ya uwekezaji wa uhandisi.

## Mawazo ya kujadili

1. Kitendakazi au faili yetu moja ngumu zaidi ni ipi, na je, ugumu wake ni muhimu au wa ajali?
2. Je, tumewahi kuchezea alama ya ugumu kupitia kugawanya bila kurahisisha halisi?
3. Je, vizingiti vyetu vimerekebishwa kwa msingi wetu wa msimbo, au vimekopwa bila kuhoji?
4. Wapi ugumu wa juu unaingiliana na mabadiliko ya mara kwa mara ya juu katika msingi wetu wa msimbo sasa hivi?
5. Je, data ya ugumu imewahi kuarifu uamuzi wa uwekezaji wa urekebishaji wa muundo, au inakaa bila kutumika?

## Mambo muhimu ya kukumbuka

- Vipimo vya ugumu kama **ugumu wa mzunguko** vinatabiri ugumu wa majaribio na kasoro; havipimi ubora wa jumla wa msimbo moja kwa moja.
- Tofautisha **ugumu muhimu** (kutoka tatizo gumu kweli) na **ugumu wa ajali** (unaoepukika kwa usanifu bora) kabla ya kuitikia alama ya juu.
- Angalia **kuchezea kwa kugawanya**: kugawanya msimbo kupunguza alama bila kurahisisha chochote kweli.
- Tumia vipimo vya ugumu kwa **kuchuja**, kuelekeza juhudi ya mapitio ya binadamu na urekebishaji wa muundo, si kama kadi ya alama ya mtu binafsi au lango gumu la otomatiki.
- Rekebisha vizingiti kwa **usambazaji wa msingi wako wa msimbo**, na ufuatilie **mwelekeo na vitu vya nje**, si wastani tambarare tu.

## Marejeo na usomaji zaidi

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976): karatasi ya asili ya ugumu wa mzunguko.
- *Code Complete*, na Steve McConnell (mwongozo wa vitendo wa kusimamia ugumu katika ujenzi wa programu).
- *Working Effectively with Legacy Code*, na Michael Feathers (mbinu za kupunguza ugumu kwa usalama katika msimbo uliopo, mgumu kubadilisha).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018): kipimo cha ugumu wa kiakili na tofauti yake na ugumu wa mzunguko.
