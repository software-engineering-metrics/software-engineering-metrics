# 4.5 Kipimo cha deni la kiufundi

## Muhtasari na msukumo

**[Deni la kiufundi](https://en.wikipedia.org/wiki/Technical_debt)**, istiari iliyobuniwa na Ward Cunningham, linaeleza gharama iliyokusanywa ya njia za mkato za zamani, maamuzi ya haraka yaliyosafirisha kitu mapema lakini kuacha msingi wa msimbo ukiwa mgumu zaidi kubadilisha baadaye, kwa njia ileile ambayo deni la kifedha hukuruhusu kutumia sasa kwa gharama ya riba baadaye. Kila msingi wa msimbo hubeba deni fulani la kiufundi, na hilo si kushindwa kiotomatiki; thamani halisi ya istiari ni kwamba inaweka deni kama mabadilishano yanayosimamiwa badala ya siri ya aibu au mzigo usioepukika, wa kudumu. Mada hii inahusu kufanya mabadilishano hayo yaonekane na yasimamiwe kupitia kipimo, badala ya kuyaacha kama wasiwasi usio wazi, unaopewa kipaumbele cha chini daima ambao kila mhandisi anauhisi lakini hakuna anayeweza kutenda juu yake kwa ushahidi.

Mada zilizotangulia hii, ugumu (4.1), ufunikaji (4.2), mabadiliko ya mara kwa mara na sehemu moto (4.3), na uchambuzi tuli (4.4), kila moja inafichua kipengele kimoja cha deni la kiufundi. Kazi ya mada hii ni usanisi: kugeuza ishara hizo tofauti, pamoja na vitu ambavyo havionekani kamwe katika uchunguzi wowote wa otomatiki (njia ya mkato ya usanifu isiyoandikwa, uhamishaji ulioahirishwa kwa makusudi), kuwa mrundikano mmoja, uliopewa kipaumbele, unaoonekana unaoshindana kwa haki kwa uwekezaji dhidi ya kazi ya vipengele, badala ya kupoteza ushindani huo kwa chaguo-msingi kwa sababu tu hauna kipimo kilichoambatishwa wala mtetezi katika mikutano ya upangaji.

Kwa timu kubwa, deni la kiufundi lisilosimamiwa linajumlika kwa njia hatari kweli na rahisi kudharau: kila njia mpya ya mkato inafanya badiliko linalofuata kuwa gumu kidogo zaidi, jambo linaloleta shinikizo kwa njia za mkato zaidi, zinazojumlika zaidi. Mashirika ya biashara kubwa na ya serikali yanayodumisha mifumo kwa miaka mingi yako wazi hasa kwa athari hii ya kujumlika, na pendekezo kuu la mada hii, mrundikano wa deni unaoonekana, uliopimwa, uliopewa kipaumbele, ndiyo utaratibu unaoruhusu shirika kusimamia mabadilishano kwa makusudi badala ya kuteleza kuelekea mgogoro.

## Kanuni kuu

- **Deni la kiufundi ni istiari ya makusudi ya mabadilishano yanayosimamiwa, si siri ya aibu.** Deni fulani, linalochukuliwa kwa kujua, ni uamuzi wa busara wa biashara.
- **Deni lisilopimwa hupoteza ushindani wa kupa kipaumbele dhidi ya kazi ya vipengele kwa chaguo-msingi,** si kwa sababu linajali kidogo, bali kwa sababu halina mtetezi anayeonekana.
- **Pima deni kwa maneno ambayo wafanya maamuzi wanaweza kupima: gharama ya kurekebisha dhidi ya gharama ya kuliendeleza.** Dai lisilo wazi la "msimbo ni mchafu" mara chache hushindana vizuri dhidi ya ombi thabiti la kipengele.
- **Deni hujumlika.** Kila njia mpya ya mkato hufanya mabadiliko ya baadaye kuwa magumu kidogo, na athari hiyo inaongezeka haraka ikiachwa bila kusimamiwa.
- **Si deni lote linapaswa kulipwa.** Baadhi linastahili kuendelezwa bila kikomo ikiwa gharama ya kulirekebisha inazidi gharama ya kuishi nalo.

## Mapendekezo

### Jenga mrundikano mmoja, unaoonekana wa deni la kiufundi

Unganisha ishara kutoka mada za awali za sehemu hii, vitu vya nje vya ugumu, maeneo yenye kiwango cha chini cha kuua mutants, sehemu moto, matokeo ya uchambuzi tuli ambayo hayajatatuliwa, pamoja na vitu vya deni ambavyo binadamu pekee anaweza kutambua (njia ya mkato ya usanifu, usasishaji wa utegemezi ulioahirishwa, suluhisho la muda lisiloandikwa), kuwa mrundikano mmoja unaoonekana, unaofuatiliwa kwa ukali na mwonekano uleule kama mrundikano wako wa vipengele. Deni linaloishi tu kwenye kumbukumbu za wahandisi binafsi au maoni ya msimbo yaliyotawanyika kwa kweli halipo kwa madhumuni ya kupa kipaumbele.

### Pima gharama ya kila kitu cha deni na gharama yake ya kuliendeleza

Kwa kila kitu, kadiria namba mbili: gharama ya kukirekebisha (muda wa uhandisi, hatari ya marekebisho yenyewe) na gharama ya kukiendeleza bila kurekebisha (kazi inayohusiana inakwenda polepole kiasi gani, hatari ya ziada ya kasoro inayobeba kiasi gani, kinazuia kazi nyingine kiasi gani). Mfumo huu, uliokopwa moja kwa moja kutoka mantiki ya istiari ya deni la kifedha yenyewe, unawapa wafanya maamuzi msingi halisi wa kulinganisha dhidi ya gharama na thamani inayotarajiwa ya kazi ya vipengele, badala ya malalamiko ya kufikirika, yasiyopimwa.

### Pa kipaumbele kwa athari, si umri wala mtetezi mwenye sauti kubwa zaidi

Panga vitu vya deni kwa mchanganyiko wa gharama ya kuendeleza na mara ngapi msimbo ulioathirika unaguswa (data ya mabadiliko ya mara kwa mara ya mada ya 4.3 ina manufaa ya moja kwa moja hapa): kitu kwenye kona isiyobadilishwa mara nyingi ya msingi wa msimbo, hata kikiwa kisichopendeza, kinajali kidogo zaidi sana kuliko kile kilicho moja kwa moja kwenye njia ya uendelezaji wako hai zaidi. Pinga kupa kipaumbele kwa msingi wa kitu kipi kimekaa kwenye mrundikano kwa muda mrefu zaidi au mhandisi yupi anakitetea kwa kudumu zaidi, hakuna kati ya hivyo kinachohusiana kwa kutegemewa na athari halisi ya biashara.

### Gawa uwezo maalum, uliolindwa wa kurekebisha deni

Mrundikano wa deni unaopaswa kushindana kitu kwa kitu dhidi ya kila ombi la kipengele linaloingia katika kila mzunguko wa upangaji huelekea kupoteza mara kwa mara, kwa sababu kazi ya vipengele kwa kawaida ina mtetezi wazi zaidi, wa biashara wa papo hapo. Gawa asilimia iliyolindwa ya uwezo wa uhandisi, mfumo wa kawaida ni kati ya asilimia 10 na 20, mahususi kwa kurekebisha deni, iliyoamuliwa mapema badala ya kujadiliwa upya kila sprint, ili kulipa deni kutokee kama jambo la kawaida badala ya tu baada ya mgogoro.

### Kubali deni fulani kama la kudumu, na useme hivyo waziwazi

Si kila kitu kinastahili mpango hai wa kurekebisha. Pale gharama ya kurekebisha inapozidi kweli gharama ya kukiendeleza kitu bila kikomo, hasa kwa msimbo katika mfumo thabiti, unaoguswa nadra, unaokaribia kustaafishwa, andika uamuzi huo waziwazi na uhamishe kitu hicho kwenye kategoria iliyopewa kipaumbele cha chini kwa makusudi badala ya kukiacha kikae bila kikomo kwenye mrundikano hai ambapo kuendelea kwake kunadokeza kimyakimya kazi ambayo haitafanyika kamwe kweli.

## Mabadilishano: faida na hasara

| Mbinu | Faida | Hasara |
| --- | --- | --- |
| Hakuna ufuatiliaji rasmi wa deni | Hakuna mzigo | Deni hupoteza ushindani wa kupa kipaumbele kwa chaguo-msingi; hujumlika bila kuonekana |
| Ufahamu wa deni usio rasmi, wa papo hapo | Mzigo mdogo, mwonekano fulani | Hauna uthabiti; unategemea kumbukumbu na utetezi wa mtu binafsi |
| Mrundikano rasmi, uliopimwa wa deni | Unashindana kwa haki kwa uwekezaji; unawezesha mabadilishano yenye taarifa | Unahitaji matengenezo endelevu na nidhamu ya kupima |
| Uwezo uliolindwa, maalum wa kurekebisha | Unahakikisha kulipa kunatokea kwa uthabiti, si kwa kuitikia tu | Unapunguza uwezo unaopatikana kwa kazi ya vipengele kwa muda mfupi |

Mvutano wa kati ni **shinikizo la utoaji wa papo hapo dhidi ya uwezo wa kudumisha wa muda mrefu**. Kazi ya vipengele karibu daima ina mtetezi wazi zaidi, wa biashara wa papo hapo kuliko kurekebisha deni, jambo linaloleta shinikizo la kimuundo kwa deni kupoteza kila uamuzi mmoja wa kupa kipaumbele hata gharama yake ya jumla ikiwa ya juu. Litatue kwa kuondoa kurekebisha deni kwenye ushindani wa kitu-kwa-kitu kabisa kupitia uwezo uliolindwa, uliotengwa mapema, ili mabadilishano yaamuliwe kwa makusudi na mapema badala ya kujadiliwa upya, na mara nyingi kupotea, katika kila mzunguko wa upangaji.

## Maswali ya kujadili na timu yako

1. **Je, tuna mrundikano mmoja, unaoonekana wa deni la kiufundi, au ufahamu wa deni unaishi hasa kwenye vichwa vya wahandisi binafsi?** Jibu la uaminifu likiwa la pili, hilo ndilo pengo kubwa zaidi ambalo mada hii inapendekeza kuziba kwanza.

2. **Kwa kitu chetu cha juu cha deni, je, tunaweza kueleza gharama yake ya kurekebisha na gharama yake ya kuendeleza kwa maneno mahususi vya kutosha kulinganisha kwa haki dhidi ya ombi la kipengele?** Kama sivyo, fanyeni mazoezi ya kupima hili pamoja kama zoezi la kikundi kwa kutumia kitu halisi, cha sasa.

3. **Asilimia gani ya uwezo wetu wa uhandisi inaelekea kurekebisha deni kweli, na je, asilimia hiyo iliamuliwa kwa makusudi au inatokea tu kuwa chochote kinachosalia baada ya kazi ya vipengele kugawiwa?** Tazama sprint zenu halisi za hivi karibuni na mkokotoe namba halisi badala ya kutegemea hisia.

4. **Je, mrundikano wetu wa deni umepewa kipaumbele kwa athari halisi ya biashara, au kwa kitu chochote kilichoibuliwa kwa kudumu zaidi au kilichokaa pale kwa muda mrefu zaidi?** Linganisha kupa kipaumbele kwenu kwa sasa dhidi ya data ya mabadiliko ya mara kwa mara (mada ya 4.3) na muone kama hivi viwili vinaoana.

5. **Ni vitu vipi vya deni tunavyopaswa kukubali waziwazi kama vya kudumu, badala ya kuviacha vikae bila kikomo kwenye mrundikano hai?** Tambua angalau kitu kimoja halisi ambapo gharama ya kurekebisha inazidi kweli gharama ya kuendeleza, na mjadili kukihamisha kwenye hali iliyopewa kipaumbele cha chini waziwazi.

6. **Mrundikano wetu wa deni umebadilikaje katika mwaka uliopita, kukua, kupungua, au kubaki tambarare, na je, mwelekeo huo unalingana na silika yetu?** Fuatilia hili kwa muda badala ya kutazama tu picha moja; mwelekeo mara nyingi unaarifu zaidi kuliko ukubwa kamili wakati wowote.

## Mtazamo wa sekta

**Kampuni changa.** Deni la makusudi, lenye taarifa mara nyingi ni mkakati wa busara katika hatua hii: kusafirisha haraka kuthibitisha dhana, kukiwa na mpango wazi wa kupitia upya njia mahususi za mkato bidhaa ikifaulu, ni mabadilishano halali, si kushindwa. Hatari ni kupoteza ufuatiliaji wa njia zipi za mkato zilikuwa za makusudi na zinazoweza kutenguliwa dhidi ya zipi zimegeuka kimyakimya kuwa dhima za kudumu, zisizochunguzwa msingi wa msimbo unapokua.

**Biashara ndogo.** Orodha rahisi, ya pamoja, hata isiyo rasmi, inayotaja njia zenu za mkato zinazojulikana na gharama yao ghafi ya kurekebisha kwa kawaida inatosha kwa ukubwa huu. Nidhamu kuu inayostahili kupokelewa ni kupitia upya orodha hiyo mara kwa mara badala ya kuiacha ikusanyike kimyakimya na kuwa isiyoonekana kupitia kufahamiana.

**Biashara kubwa.** Uwezo uliolindwa, uliotengwa mapema wa kurekebisha ni muhimu zaidi hapa, kwa kuwa ushindani wa kupa kipaumbele wa kitu-kwa-kitu kati ya deni na kazi ya vipengele kwa kutegemewa hupendelea vipengele kuvuka makumi ya timu kwa wakati mmoja bila kipingamizi cha kimuundo. Sawazisha mazoea ya kupima deni shirika zima ili vitu vya deni vilinganishwe kwa haki kuvuka timu kwa maamuzi ya uwekezaji ya kiwango cha jalada.

**Serikali.** Mifumo ya muda mrefu hukusanya deni kuvuka miaka au miongo ya mabadiliko ya mahitaji ya nyongeza, ya busara kivyake, mara nyingi bila ufuatiliaji rasmi wa deni kabisa hadi mgogoro ulazimishe suala. Mrundikano unaoonekana, uliopimwa wa deni ni zana ya ushawishi kweli ya kuhalalisha bajeti ya usasishaji kwa vyombo vya usimamizi, kwa kuwa inageuza dai lisilo wazi la "mfumo ni wa zamani" kuwa kesi mahususi, iliyogharamiwa ya uwekezaji.

## Mifano

**Biashara kubwa.** Jukwaa la bili la kampuni ya mawasiliano lilikuwa limekusanya zaidi ya muongo wa deni la kiufundi lililokubaliwa bila rasmi lakini kamwe halikufuatiliwa rasmi, wahandisi wakirejelea mara kwa mara "injini ya bili ni fujo" katika tafakari bila ufuatiliaji. Mkurugenzi mpya wa uhandisi alidai kila timu ijenge mrundikano uliopimwa wa deni, ukikadiria gharama ya kurekebisha na gharama ya kuendeleza kwa kila kitu, na akagawa asilimia 15 isiyobadilika ya uwezo wa uhandisi kwa kurekebisha deni kuendelea mbele. Ndani ya mwaka, vitu vitano vya juu vya gharama ya juu zaidi ya kuendeleza, vikiwakilisha sehemu ndogo ya mrundikano mzima kwa hesabu, vilikuwa vimetatuliwa, na kiwango cha kushindwa kwa mabadiliko (mada ya 2.10) kwa usambazaji unaohusiana na bili kiliboreka kwa kupimika, kikionyesha athari isiyolingana ya kulenga vitu vya gharama ya juu zaidi ya kuendeleza kwanza badala ya kufanya kazi kupitia mrundikano kwa mpangilio wa kiholela.

**Serikali.** Mfumo mkuu wa kuchakata data wa wakala wa kitaifa wa takwimu, ulioundwa awali zaidi ya miaka ishirini iliyopita, haukuwahi kuwa na tathmini rasmi ya deni licha ya kukiri kuenea bila rasmi miongoni mwa wafanyakazi kwamba sehemu kubwa zilikuwa dhaifu na hazieleweki vizuri. Tathmini yenye muundo ya deni, ikichanganya matokeo ya uchambuzi tuli, data ya sehemu moto, na mahojiano na wahandisi wachache waliobaki walioelewa vijenzi vya zamani zaidi, ilizalisha mrundikano uliopimwa, uliopewa kipaumbele uliounga mkono moja kwa moja ombi la bajeti ya usasishaji wa miaka mingi. Muhimu, tathmini pia ilitambua waziwazi vijenzi kadhaa vya urithi vilivyo thabiti, vinavyoguswa nadra kuwa vya busara kuviacha bila kubadilishwa, ikiepuka kuandika upya mfumo mzima kwa upana usio wa lazima na wa gharama kwa niaba ya uwekezaji uliolengwa katika maeneo mahususi ambayo data ilionyesha yalibeba gharama ya juu zaidi inayoendelea.

## Kesi ya biashara: sababu, ROI, na TCO

Faida ya kusimamia deni la kiufundi kwa makusudi ni gharama ya kujumlika iliyoepukwa: kila njia ya mkato isiyoshughulikiwa inafanya mabadiliko ya baadaye kuwa magumu kidogo, na athari hiyo inaharakisha bila uingiliaji, hatimaye ikizalisha msingi wa msimbo dhaifu kiasi kwamba hata mabadiliko rahisi yanakuwa ya polepole na hatari. Mfano wa mawasiliano hapo juu unaonyesha faida kwa uhalisia: kulenga idadi ndogo ya vitu vya gharama ya juu zaidi ya kuendeleza kulizalisha uboreshaji unaopimika wa utoaji na ubora, usiolingana na sehemu ndogo ya mrundikano mzima ambayo vitu hivyo viliwakilisha.

Jumla ya gharama ya umiliki ni uwezo uliolindwa uliogawiwa kurekebisha, kwa kawaida asilimia 10 hadi 20 ya muda wa uhandisi, gharama halisi, inayoonekana inayoshindana na kasi ya vipengele kwa muda mfupi. Gharama hiyo inastahili kulipwa kwa sababu mbadala, deni lisilosimamiwa, linalojumlika, hatimaye linagharimu zaidi sana kwa utoaji uliopungua na viwango vya juu vya kasoro kuvuka msingi mzima wa msimbo, si tu vitu mahususi vilivyoachwa bila kushughulikiwa.

## Mifumo mibaya na mitego

- **Hakuna mrundikano unaoonekana, unaofuatiliwa wa deni:** deni hupoteza ushindani wa kupa kipaumbele kwa chaguo-msingi na hujumlika bila kuonekana.
- **Madai yasiyo wazi, yasiyopimwa ya deni:** mara chache hushindana vizuri dhidi ya maombi thabiti, yaliyopimwa ya vipengele katika upangaji.
- **Kupa kipaumbele deni kwa umri au kiasi cha utetezi badala ya athari:** huelekeza vibaya uwezo mdogo wa kurekebisha.
- **Hakuna uwezo uliolindwa wa kurekebisha:** kulipa deni hutokea tu kwa kuitikia, baada ya mgogoro, badala ya mazoea ya kawaida, ya makusudi.
- **Kuchukulia deni lote kama linalostahili kurekebishwa kwa usawa:** hupoteza juhudi kwa vitu vya athari ndogo huku vitu vya gharama ya juu ya kuendeleza vikibaki bila kushughulikiwa.
- **Kuacha deni likae bila kikomo kwenye mrundikano hai bila kuamua kamwe kuwa ni la kudumu:** linadokeza kazi ya baadaye ambayo haitatokea kamwe na kuchafua kupa kipaumbele halisi.

## Kielelezo cha ukomavu

- **Ngazi ya 1, Kuanzisha:** Deni la kiufundi linajadiliwa bila rasmi, bila mrundikano unaofuatiliwa wala kupima; mara kwa mara linapoteza dhidi ya kazi ya vipengele.
- **Ngazi ya 2, Kuendeleza:** Baadhi ya timu zinafuatilia deni bila rasmi, lakini hakuna kupima thabiti, mwonekano wa kuvuka timu, au uwezo uliolindwa wa kurekebisha.
- **Ngazi ya 3, Kusawazisha:** Mrundikano unaoonekana, uliopimwa wa deni upo shirika zima, pamoja na uwezo uliolindwa wa kurekebisha unaogawiwa kwa uthabiti.
- **Ngazi ya 4, Kusimamia:** Vitu vya deni vinapewa kipaumbele kwa athari iliyopimwa (gharama ya kuendeleza pamoja na mabadiliko ya mara kwa mara), na deni lililokubaliwa kuwa la kudumu limeandikwa waziwazi badala ya kuachwa kwa utata.
- **Ngazi ya 5, Kuratibu:** Shirika linaweza kuonyesha uboreshaji mahususi, unaopimika wa utoaji au ubora uliofuatiliwa hadi kurekebisha deni kulikolengwa, na usimamizi wa deni ni pembejeo ya kawaida, inayoaminika kwa maamuzi ya uwekezaji wa uhandisi kando ya kazi ya vipengele.

## Mawazo ya kujadili

1. Kitu chetu kimoja cha deni cha gharama ya juu zaidi ya kuendeleza sasa hivi ni kipi, na je, tunaweza kukipima?
2. Asilimia gani ya uwezo wetu inaelekea kurekebisha deni leo kweli?
3. Kitu gani cha deni tunapaswa kukubali waziwazi kuwa cha kudumu badala ya kukiacha kwa utata kwenye mrundikano wetu?
4. Je, mrundikano wetu wa deni umekua, umepungua, au umebaki tambarare katika mwaka uliopita?
5. Tathmini iliyopimwa ya deni ingefichua nini ambacho ufahamu wetu wa sasa usio rasmi unakosa?

## Mambo muhimu ya kukumbuka

- Deni la kiufundi ni **mabadilishano yanayosimamiwa, si siri ya aibu**; lipime badala ya kuliacha kama wasiwasi usio wazi, unaopewa kipaumbele cha chini daima.
- **Pima gharama ya kurekebisha dhidi ya gharama ya kuendeleza** kwa kila kitu ili kishindane kwa haki dhidi ya kazi ya vipengele.
- **Pa kipaumbele kwa athari** (gharama ya kuendeleza pamoja na mabadiliko ya mara kwa mara), si umri wala kiasi cha utetezi.
- Gawa **uwezo uliolindwa, maalum wa kurekebisha**, ulioamuliwa mapema, kwa kuwa deni hupoteza ushindani wa kitu-kwa-kitu dhidi ya kazi ya vipengele vinginevyo kwa kutegemewa.
- **Kubali waziwazi deni fulani kama la kudumu** pale gharama ya kurekebisha inazidi gharama ya kuendeleza, badala ya kuliacha kwa utata kwenye mrundikano hai.

## Marejeo na usomaji zaidi

- Cunningham, Ward, "The WyCash Portfolio Management System" (ripoti ya uzoefu ya OOPSLA, 1992): asili ya istiari ya deni la kiufundi.
- *Managing Technical Debt: Reducing Friction in Software Development*, na Philippe Kruchten, Robert Nord, na Ipek Ozkaya (mjadala kamili wa kipimo na usimamizi wa deni la kiufundi).
- *Refactoring: Improving the Design of Existing Code*, na Martin Fowler (mbinu za kurekebisha ambazo mrundikano wa deni hatimaye unazitegemea).
- *Your Code as a Crime Scene*, na Adam Tornhill (uchambuzi wa sehemu moto kama pembejeo ya kupa kipaumbele deni, mada ya 4.3).
