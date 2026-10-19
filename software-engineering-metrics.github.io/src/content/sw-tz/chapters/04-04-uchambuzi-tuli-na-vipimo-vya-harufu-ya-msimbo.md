# 4.4 Uchambuzi tuli na vipimo vya harufu ya msimbo

## Muhtasari na msukumo

Zana za **[uchambuzi tuli](https://en.wikipedia.org/wiki/Static_program_analysis)** zinachanganua msimbo chanzo bila kuutekeleza, zikiashiria mifumo inayojulikana kuhusiana na kasoro, udhaifu wa usalama, au matatizo ya uwezo wa kudumisha: msimbo usioweza kufikiwa, rasilimali zisizofungwa, ubadilishaji wa aina wa kutiliwa shaka, mantiki iliyorudiwa, na kategoria pana ya **harufu za msimbo**, mifumo ya kimuundo ambayo si lazima iwe hitilafu lakini inaelekea kufanya msimbo uwe mgumu kuelewa, kujaribu, au kubadilisha kwa usalama. Uchambuzi tuli ni tabaka la otomatiki, endelevu lililo chini ya vipimo vilivyolengwa zaidi vya mada nyingine za sehemu hii, likiendesha kwa kila mchango na kufichua masuala wakati yanapoingizwa badala ya kusubiri ukaguzi wa mara kwa mara.

Wasiwasi mkuu wa mada hii ni pengo kati ya kile zana za uchambuzi tuli zinaripoti na kile kinachojali kweli. Zana inaweza kuashiria maelfu ya matokeo kuvuka msingi mkubwa wa msimbo, na idadi ya matokeo peke yake ni kipimo duni, kwa kuwa inachanganya mapendeleo madogo ya mtindo na hatari halisi, kali, na inaweza kupunguzwa kwa kukandamiza kwa urahisi kama kwa marekebisho halisi. Thamani ya uchambuzi tuli haitokani na hesabu ghafi ya matokeo bali na jinsi shirika linavyopanga ukali, kuzuia kurudi nyuma, na kupinga hamu ya kuchukulia busara ya zana kama mbadala wa mapitio ya binadamu badala ya kikamilisho chake.

Kwa timu kubwa, uchambuzi tuli ndiyo njia pekee ya vitendo ya kutekeleza msingi wa ubora wa msimbo na usafi wa usalama kuvuka msingi wa msimbo mkubwa kuliko timu yoyote inavyoweza kupitia kikamilifu kwa mkono. Mashirika ya biashara kubwa na ya serikali, mara nyingi yakikabili mahitaji ya uzingatiaji kuhusu mazoea ya msimbo salama, yanategemea uchambuzi tuli kama ushahidi ulioandikwa, unaoweza kukaguliwa kwamba kiwango cha msingi cha uchunguzi kilitumika kwa uthabiti, si tu mpitiaji wa binadamu alipogundua tatizo kwa bahati.

## Kanuni kuu

- **Hesabu ghafi ya matokeo ni kipimo duni peke yake.** Inachanganya masuala madogo na makali, na inaweza kuchezewa kupitia kukandamiza badala ya marekebisho halisi.
- **Kupanga ukali ni muhimu kuliko kiasi.** Idadi ndogo ya matokeo muhimu inastahili umakini zaidi kuliko idadi kubwa ya madogo.
- **Uchambuzi tuli unakamilisha mapitio ya binadamu; hauchukui nafasi yake.** Zana hukamata mifumo; haziielewi nia au muktadha wa biashara.
- **Mwelekeo wa "masuala mapya yaliyoingizwa" unatekelezeka zaidi kuliko hesabu ya jumla ya mrundikano.** Unakuambia kama mazoea ya sasa yanaboreka au yanarudi nyuma.
- **Chanya za uongo humomonyoa uaminifu katika zana.** Kiwango kisichosimamiwa cha chanya za uongo huzifanya timu kupuuza matokeo kwa jumla, ikijumuisha halisi.

## Mapendekezo

### Fuatilia matokeo yaliyopimwa kwa ukali, si hesabu ghafi

Sanidi zana yako ya uchambuzi tuli iainishe matokeo kwa ukali (muhimu, juu, wastani, chini, au kipimo sawa), na ufuatilie mwelekeo uliopimwa kwa ukali badala ya jumla tambarare ya hesabu. Msingi wa msimbo wenye matokeo muhimu sifuri na mapendekezo mia tano ya mtindo wa ukali wa chini uko katika hali tofauti sana na ule wenye matokeo muhimu hamsini na masuala ya mtindo hakuna kabisa, na hesabu ghafi inachukulia haya kuwa sawa takriban wakati sivyo.

### Linda kwenye matokeo mapya yaliyoingizwa, si mrundikano mzima wa kihistoria

Misingi mingi ya msimbo iliyoimarika hubeba mrundikano wa urithi wa matokeo yanayotangulia mazoea ya sasa na yangekuwa ghali mno kurekebisha yote mara moja. Badala ya kuzuia kazi yote hadi mrundikano mzima utakapofutwa, linda CI kwa misingi ya kama badiliko mahususi linaingiza matokeo mapya juu ya kizingiti cha ukali kilichokubaliwa, ukiruhusu mrundikano upungue taratibu kupitia matengenezo ya kawaida huku ukizuia mkusanyiko zaidi. Tofauti hii inaakisi pendekezo la sakafu ya ufunikaji ya mada ya 4.2: linda dhidi ya kurudi nyuma badala ya kudai urekebishaji usio wa kweli, wa mara moja.

### Simamia kiwango cha chanya za uongo kikamilifu

Pitia mara kwa mara sampuli ya matokeo, hasa kategoria yoyote yenye kiasi cha juu, na ukague ni mangapi ni chanya za uongo kweli, kesi ambapo zana iliashiria mfumo ambao si tatizo kweli katika muktadha. Rekebisha usanidi wa kanuni kukandamiza kategoria za kanuni zenye kelele nyingi, thamani ndogo mahususi, badala ya kuziacha timu zikuze tabia ya kupuuza matokeo ya zana kwa jumla kwa sababu mengi mno ni kelele. Kiwango cha juu, kisichosimamiwa cha chanya za uongo ndiyo njia ya kasi zaidi ya kuharibu uaminifu wa programu ya uchambuzi tuli.

### Tumia matokeo ya uchambuzi tuli kama kichocheo cha mapitio, si hukumu ya kiotomatiki

Hata matokeo halali, yasiyo ya chanya ya uongo hayahitaji kila mara marekebisho ya kiotomatiki, ya lazima; baadhi ya mifumo iliyoashiriwa inakubalika kutokana na muktadha mahususi ambao zana haiwezi kuona. Jenga mchakato mwepesi kwa binadamu kupitia na ama kurekebisha au kuondoa matokeo waziwazi, kwa kuonekana, kwa sababu iliyoandikwa, badala ya ama kutekeleza kwa upofu kila matokeo kama ya lazima au kuruhusu kukandamiza kimya, kusikoandikwa kunakomomonyoa thamani ya zana kwa muda.

### Changanya uchambuzi tuli na vipimo vingine vya ubora wa msimbo katika sehemu hii

Matokeo ya uchambuzi tuli, alama za ugumu (mada ya 4.1), na data ya sehemu moto (mada ya 4.3) ni ushahidi unaokamilishana, si vipimo vinavyoshindana. Faili yenye mkusanyiko mkubwa wa matokeo ya uchambuzi tuli ambayo hayajatatuliwa ambayo pia ni sehemu moto ya mabadiliko-ugumu ni mgombea mwenye nguvu hasa wa umakini uliopewa kipaumbele, kwa kuwa ishara huru nyingi zinakutana kwenye hitimisho lilelile.

## Mabadilishano: faida na hasara

| Mbinu | Faida | Hasara |
| --- | --- | --- |
| Hesabu ghafi ya matokeo kama kipimo | Rahisi kuripoti | Inachanganya masuala madogo na makali; inachezewa kwa urahisi kupitia kukandamiza |
| Mwelekeo uliopimwa kwa ukali | Inaakisi hatari halisi kwa usahihi zaidi | Inahitaji matengenezo endelevu ya uainishaji wa ukali |
| Kulinda dhidi ya mrundikano mzima wa kihistoria | Inaongeza usafi wa msimbo wa mwisho kwa kiwango cha juu | Mara nyingi si ya vitendo kwa misingi ya msimbo iliyoimarika; inaweza kusimamisha kazi yote |
| Kulinda dhidi ya matokeo mapya tu | Ya vitendo, inazuia kurudi nyuma, inaruhusu mrundikano kupungua taratibu | Masuala ya urithi yanadumu muda mrefu zaidi bila mpango wa makusudi wa kurekebisha |

Mvutano wa kati ni **ukamilifu dhidi ya vitendo**. Sera ya uchambuzi tuli inayodai mrundikano mzima wa kihistoria utatuliwe kabla ya kazi yoyote mpya kuendelea ni kamili lakini kwa kawaida si ya vitendo kwa msingi wowote wa msimbo wenye historia halisi, na timu zilizo chini ya shinikizo hilo huelekea kukandamiza matokeo kwa jumla badala ya kuyarekebisha kweli. Litatue kwa kulinda kwa ukali kwa matokeo mapya tu huku ukiendesha juhudi tofauti, ya mwendo wa makusudi ya kurekebisha mrundikano wa urithi, iliyopewa kipaumbele kwa kutumia mbinu za ukali na kulinganisha ambazo mada hii na mada ya 4.3 zinapendekeza.

## Maswali ya kujadili na timu yako

1. **Je, tunafuatilia mwelekeo uliopimwa kwa ukali, au hesabu ghafi ya jumla ya matokeo tu?** Vuta dashibodi yenu halisi na ukague; hesabu ghafi ni ya kawaida kwa chaguo-msingi katika zana nyingi na mara nyingi inahitaji usanidi wa makusudi kufichua ukali ipasavyo badala yake.

2. **Mrundikano wetu wa sasa wa urithi wa matokeo ambayo hayajatatuliwa ni upi, na je, tuna mpango wa makusudi, wa mwendo wa kuupunguza, au unakusanyika bila kikomo tu?** Mrundikano ambao haujashughulikiwa, unaokua kimyakimya ni wa kawaida na unastahili kutajwa kwa uaminifu badala ya kuachwa bila kuchunguzwa.

3. **Kiwango chetu kinachokadiriwa cha chanya za uongo kwa kategoria zetu za matokeo za kiasi cha juu zaidi ni kipi, na je, tumerekebisha usanidi wa kanuni kujibu?** Ikiwa hamjawahi kukagua hili, chukueni sampuli ya matokeo kutoka kategoria yenu yenye kelele nyingi zaidi na mtathmini kwa uaminifu ni mangapi yanayotekelezeka kweli.

4. **Je, wahandisi kwenye timu yetu wanaamini matokeo ya uchambuzi tuli, au wamejifunza kuyapuuza kwa sababu mengi mno ya matokeo ni kelele?** Hili ni swali la moja kwa moja, la uaminifu la hisia linalostahili kuulizwa timu, kwa kuwa zana inayopuuzwa haitoi thamani halisi bila kujali uwezo wake wa kinadharia.

5. **Tunashughulikiaje sasa matokeo halali ambayo timu inaamini yanapaswa kuondolewa kutokana na muktadha mahususi?** Kagua kama mchakato wenu unafanya hili kuwa uamuzi unaoonekana, ulioandikwa, au linatokea kupitia kukandamiza kimya, kusikoandikwa kunakomomonyoa ishara ya zana kwa muda.

6. **Wapi matokeo ya uchambuzi tuli, alama za ugumu, na data ya sehemu moto vinakutana kwenye faili au moduli ileile?** Linganisha ishara hizi tatu waziwazi; kukutana kuvuka vipimo huru vingi ni ishara yenye nguvu zaidi ya kupa kipaumbele kuliko kimoja chochote peke yake.

## Mtazamo wa sekta

**Kampuni changa.** Zana nyepesi, ya bure ya uchambuzi tuli iliyounganishwa kwenye CI tangu mwanzo ni bima ya bei nafuu na inakamata masuala halisi mapema, kabla mrundikano wa urithi haujapata nafasi yoyote ya kukusanyika. Weka seti ya kanuni ikilenga kategoria za thamani ya juu kweli, kelele ndogo badala ya kuwezesha kila kanuni inayopatikana mara moja.

**Biashara ndogo.** Mifumo mingi ya kisasa ya lugha inajumuisha zana za bure zenye uwezo za uchambuzi tuli; kuiwezesha kwenye CI na seti ya kanuni ya chaguo-msingi ya busara kunahitaji uwekezaji mdogo. Lenga kulinda matokeo mapya badala ya kujaribu kutatua mrundikano wowote uliopo mara moja.

**Biashara kubwa.** Kusimamia kiwango cha chanya za uongo na kupanga ukali kwa makusudi kunakuwa muhimu kwa ukubwa huu, kwa kuwa zana iliyorekebishwa vibaya inayozalisha kelele nyingi kuvuka makumi ya timu itapuuzwa shirika zima. Wekeza katika mmiliki maalum wa usanidi wa zana za uchambuzi tuli wenyewe, ukichukulia kurekebisha kanuni kama nidhamu endelevu badala ya kazi ya usanidi ya mara moja.

**Serikali.** Matokeo ya uchambuzi tuli, hasa yanayohusiana na usalama, mara nyingi yanahusika moja kwa moja na mahitaji ya uzingatiaji na ukaguzi. Dumisha mchakato ulioandikwa, unaoweza kukaguliwa wa jinsi matokeo yanavyopangwa, kurekebishwa, au kuondolewa rasmi na sababu iliyorekodiwa, kwa kuwa nyaraka hizi wenyewe mara nyingi ndizo mkaguzi wa nje atakazotaka kuona.

## Mifano

**Biashara kubwa.** Dashibodi ya uchambuzi tuli ya kampuni ya programu ilikuwa imekusanya zaidi ya matokeo elfu arobaini ambayo hayajatatuliwa kuvuka msingi wake wa msimbo baada ya miaka kadhaa bila kupanga kwa ukali, namba kubwa mno kiasi kwamba wahandisi walikuwa wameacha karibu kabisa kutazama dashibodi. Mbinu iliyorekebishwa iliainisha matokeo kwa ukali, ikapata chini ya mia mbili yalikuwa muhimu kweli, na kulinda CI mahususi kwa matokeo mapya muhimu na ya ukali wa juu huku ikiacha mrundikano wa ukali wa chini upungue taratibu kupitia matengenezo ya kawaida ya msimbo. Ndani ya miezi sita, matokeo muhimu yalikuwa yameshuka hadi tarakimu moja, na, muhimu zaidi, data ya utafiti wa wahandisi ilionyesha uaminifu mpya katika matokeo ya zana kwa kuwa sasa ilifichua ishara inayoweza kusimamiwa, inayotekelezeka kweli badala ya mrundikano mkubwa, uliopuuzwa.

**Serikali.** Sera ya usalama wa mnyororo wa ugavi wa programu wa wakala wa ulinzi ilihitaji uchunguzi wa uchambuzi tuli wenye matokeo sifuri ambayo hayajatatuliwa kabla ya toleo lolote, sera ambayo, kwa vitendo, ilikuwa imesababisha timu za uendelezaji kukandamiza idadi kubwa ya matokeo, ikijumuisha masuala halisi ya usalama, tu kutimiza tarehe za mwisho za toleo chini ya lango lisilowezekana la yote-au-hakuna. Sera iliyorekebishwa ilihitaji matokeo mapya muhimu au ya ukali wa juu sifuri yaliyoingizwa na toleo lolote, pamoja na mpango ulioandikwa, unaofuatiliwa wa kurekebisha na ratiba kwa mrundikano wa urithi, unaopitiwa kila robo na bodi ya utawala wa usalama. Mbinu hii ya vitendo, ya awamu ilirejesha uchunguzi halisi wa usalama kwenye msimbo mpya na kufanya maendeleo halisi, yanayopimika dhidi ya mrundikano wa urithi kwa miezi kumi na minane, tofauti na sera ya awali isiyowezekana ambayo ilizalisha kukandamiza zaidi kuliko marekebisho halisi.

## Kesi ya biashara: sababu, ROI, na TCO

Faida ya uchambuzi tuli unaosimamiwa vizuri ni kukamata kasoro halisi na udhaifu wa usalama kabla hazijafika uzalishaji, kwa gharama ya chini zaidi sana kuliko juhudi ya mapitio ya binadamu inayolingana ingehitaji kwa ufunikaji uleule. Mfano wa wakala wa ulinzi hapo juu unaonyesha gharama ya kukosea hili: sera isiyowezekana, ya yote-au-hakuna ilikuwa imepunguza uchunguzi halisi wa usalama kwa kuendesha kukandamiza, kinyume cha nia yake.

Jumla ya gharama ya umiliki inajumuisha zana yenyewe, mara nyingi ya bure au ya gharama ndogo kwa mifumo ya lugha ya kawaida, na nidhamu endelevu ya kupanga ukali, kusimamia chanya za uongo, na kupanga kurekebisha mrundikano wa urithi. Nidhamu hiyo endelevu, zaidi ya zana yenyewe, ndiyo inayoamua kama programu ya uchambuzi tuli inatoa thamani halisi, inayoaminika au inaoza kuwa kelele inayopuuzwa.

## Mifumo mibaya na mitego

- **Kuchukulia hesabu ghafi ya matokeo kama kipimo:** inachanganya masuala madogo na makali na inachezeka kwa urahisi kupitia kukandamiza.
- **Kudai mrundikano mzima wa kihistoria utatuliwe kabla ya kazi yoyote mpya kuendelea:** kwa kawaida si ya vitendo na huendesha kukandamiza badala ya marekebisho halisi.
- **Kupuuza kiwango cha chanya za uongo:** kiwango cha kelele kisichosimamiwa huzifanya timu kupuuza matokeo ya zana kabisa, ikijumuisha matokeo halisi.
- **Kukandamiza kimya, bila kuandikwa kwa matokeo halali:** humomonyoa ishara ya zana na kuacha hakuna njia ya ukaguzi kwa madhumuni ya uzingatiaji.
- **Kuchukulia matokeo ya uchambuzi tuli kama hukumu ya kiotomatiki bila mapitio ya binadamu:** hukosa muktadha ambao zana haiwezi kuona.
- **Kutowahi kulinganisha matokeo na data ya ugumu na sehemu moto:** hukosa ishara yenye nguvu zaidi ya kupa kipaumbele ambayo ushahidi unaokutana unatoa.

## Kielelezo cha ukomavu

- **Ngazi ya 1, Kuanzisha:** Uchambuzi tuli haujaendeshwa, au matokeo yanakusanyika bila kusimamiwa bila kupanga ukali au kufuatilia mwelekeo.
- **Ngazi ya 2, Kuendeleza:** Baadhi ya uchambuzi tuli unaendeshwa kwenye CI, lakini kupanga ukali hakuna uthabiti na kiwango cha chanya za uongo hakisimamiwi.
- **Ngazi ya 3, Kusawazisha:** Matokeo yamepimwa kwa ukali na CI inalinda kwenye matokeo mapya muhimu na ya ukali wa juu, shirika zima.
- **Ngazi ya 4, Kusimamia:** Kiwango cha chanya za uongo kinarekebishwa kikamilifu, mrundikano wa urithi una mpango ulioandikwa, wa mwendo wa kurekebisha, na uondoaji unaonekana na umeandikwa.
- **Ngazi ya 5, Kuratibu:** Matokeo ya uchambuzi tuli, data ya ugumu, na data ya sehemu moto yanalinganishwa mara kwa mara kupa kipaumbele uwekezaji, na shirika linaweza kuonyesha uboreshaji mahususi, unaopimika wa kasoro au usalama uliofuatiliwa hadi programu.

## Mawazo ya kujadili

1. Mwelekeo wetu wa sasa uliopimwa kwa ukali ni upi, na je, unaboreka au unazidi kuwa mbaya?
2. Mrundikano wetu wa matokeo ya urithi ni mkubwa kiasi gani, na je, tuna mpango wa makusudi wa kuupunguza?
3. Kiwango chetu kinachokadiriwa cha chanya za uongo kwa kategoria yetu ya matokeo yenye kelele zaidi ni kipi?
4. Je, wahandisi kwenye timu yetu kwa sasa wanaamini au wanapuuza matokeo yetu ya uchambuzi tuli?
5. Wapi matokeo ya uchambuzi tuli yanakutana na data ya ugumu au sehemu moto katika msingi wetu wa msimbo?

## Mambo muhimu ya kukumbuka

- Fuatilia **mwelekeo uliopimwa kwa ukali**, si hesabu ghafi ya matokeo, inayochanganya masuala madogo na makali.
- Linda CI kwenye **matokeo mapya yaliyoingizwa**, si mrundikano mzima wa kihistoria, kuzuia kurudi nyuma bila kudai urekebishaji usio wa kweli wa mara moja.
- Simamia **kiwango cha chanya za uongo** kikamilifu; kelele isiyosimamiwa huharibu uaminifu katika zana na kusababisha matokeo kupuuzwa kwa jumla.
- Chukulia matokeo kama **kichocheo cha mapitio ya binadamu**, pamoja na uondoaji unaoonekana, ulioandikwa, si hukumu ya kiotomatiki au kukandamiza kimya.
- Linganisha uchambuzi tuli na **data ya ugumu na sehemu moto** (mada za 4.1, 4.3) kwa ushahidi unaokutana, wenye nguvu zaidi wa kupa kipaumbele.

## Marejeo na usomaji zaidi

- *Static Program Analysis*, na Anders Møller na Michael I. Schwartzbach (misingi ya kinadharia na ya vitendo ya mbinu za uchambuzi tuli).
- Mwongozo wa OWASP kuhusu majaribio ya usalama ya programu ya tuli (SAST), sehemu ya rasilimali pana za OWASP Foundation kuhusu mazoea ya uendelezaji wa programu salama.
- *Refactoring: Improving the Design of Existing Code*, na Martin Fowler (orodha ya harufu za msimbo ambayo zana nyingi za uchambuzi tuli zinategemea).
- *Working Effectively with Legacy Code*, na Michael Feathers (kusimamia mrundikano wa urithi wa masuala ya ubora katika msingi wa msimbo ulioimarika).
