# 1.5 Vyanzo vya data na upimaji

## Muhtasari na msukumo

Kipimo kinaaminika tu kama data iliyo chini yake, na programu nyingi za vipimo hutumia juhudi kubwa zaidi kubuni dashibodi kuliko kuthibitisha bomba linalozilisha. Hii ni kinyume. Chati iliyobuniwa kwa uzuri juu ya upimaji usio thabiti, wa taarifa binafsi, au uliovunjika kimyakimya ni mbaya kuliko kutokuwa na chati kabisa, kwa sababu inaonekana yenye mamlaka huku ikiwa si sahihi. Mada hii inahusu msingi usiovutia ambao kitabu kingine kinaudhania: data ya uhandisi inatoka wapi hasa, lini kuamini upimaji wa otomatiki kuliko taarifa binafsi, na kushindwa kwa ubora wa data kunakobatilisha kipimo kimyakimya kabla yeyote hajaona.

Data ya uhandisi wa programu inatoka katika idadi ndogo ya aina za vyanzo, kila moja ikiwa na sifa tofauti za kutegemewa. Udhibiti wa matoleo na mabomba ya [CI/CD](https://en.wikipedia.org/wiki/CI/CD) huzalisha rekodi za kiuhalisia, zenye mihuri ya muda, ngumu kughushi za kilichotokea kweli. Vifuatilia masuala na zana za usimamizi wa miradi huzalisha rekodi zinazotegemea binadamu kusasisha hali kwa usahihi na kwa wakati, jambo ambalo mara nyingi hufanya bila uthabiti. Tafiti huzalisha data ya taarifa binafsi isiyo na kifani kwa mambo ambayo hakuna mfumo unaoweza kuona, kama kuridhika, lakini iko chini ya upendeleo wa kukumbuka na athari za kutaka kukubalika kijamii. Majukwaa ya uonekanaji huzalisha telemetry ya kiwango cha mfumo ambayo ni ya kiuhalisia lakini inafunika tu kile kilichopimwa. Kujua data ya kipimo fulani inatoka kategoria ipi kunakuambia kiasi cha kuiamini na njia za kushindwa za kuangalia.

Katika ukubwa wa biashara kubwa na serikali, matatizo ya ubora wa data hujumlika kwa sababu umbali kati ya asili ya data na matumizi yake ya mwisho kwenye dashibodi unakua kupitia mifumo mingi, miunganisho, na mabadiliko. Sehemu inayomaanisha kitu kimoja kwenye mfumo chanzo inaweza kumaanisha kitu tofauti kwa hila inapofika tabaka la kuripoti, na hakuna anayeona chini ya mkondo kwa sababu namba bado inaonekana yenye uwezekano. Kupata upimaji sawa ni kusisimua kidogo kuliko kupata mifumo sawa, lakini ndio msingi ambao kila kitu kingine katika kitabu hiki kinasimama juu yake.

## Kanuni kuu

- **Pendelea upimaji kuliko taarifa binafsi popote mfumo unaweza kuona tukio moja kwa moja.** Muhuri wa muda wa usambazaji kutoka bomba unaaminika zaidi kuliko hesabu ya usambazaji ya timu iliyoripoti yenyewe.
- **Tumia taarifa binafsi tu kwa kisichoweza kuonekana moja kwa moja.** Kuridhika, msuguano unaohisiwa, na ustawi hawana mbadala wa mfumo wa kumbukumbu; uliza moja kwa moja na ubuni utafiti vizuri (mada ya 3.7). Hifadhi taarifa binafsi mahususi kwa kategoria hiyo.
- **Data ya kila kipimo ina mfumo chanzo, njia ya kukusanya, na njia inayojulikana ya kushindwa.** Andika yote matatu, si fasili tu.
- **Ubora wa data huoza kimyakimya.** Bomba lililofanya kazi vizuri mwaka mmoja uliopita linaweza kuvunjika kimyakimya leo, na dashibodi itaendelea kuonyesha namba isiyo sahihi bila kulalamika.
- **Pima kwenye kituo cha ukweli, si chini ya mkondo wa tafsiri.** Kila hatua kati ya tukio na dashibodi ni nafasi ya maana kupotoka.

## Mapendekezo

### Oanisha kila kipimo na mfumo wake chanzo halisi kabla ya kukiamini

Kwa kila kipimo kwenye dashibodi, taja mfumo mahususi unaozalisha tukio la msingi: bomba la CI/CD kwa matukio ya usambazaji, mwenyeji wa udhibiti wa matoleo kwa matukio ya mchango na muunganisho, kifuatilia matukio kwa rekodi za kukatika, jukwaa la utafiti kwa kuridhika kwa taarifa binafsi. Usipoweza kutaja mfumo kamili, hujui kwa kweli namba inatoka wapi, na huwezi kutathmini kutegemewa kwake. Uoanishaji huu ni sharti la hati ya utawala katika mada ya 1.4, si zoezi tofauti.

### Pima kwenye tukio, si kwenye ripoti

Data ya kutegemewa zaidi hunasa tukio kiotomatiki wakati linapotokea: bomba hurekodi usambazaji papo hapo unapokamilika, mfumo wa udhibiti wa matoleo hurekodi muunganisho papo hapo unapotua. Data inayotegemea binadamu kukumbuka kusasisha sehemu ya hali baadaye, kuweka alama tiketi "imekamilika," kurekodi usambazaji kwa mkono kwenye lahajedwali, hupoteza usahihi kadiri inavyokaa mbali na tukio halisi na kadiri mtu anayewajibika anavyokuwa na shughuli nyingi. Popote tukio la otomatiki lipo, lipendelee kuliko mwakilishi aliyeripotiwa na binadamu wa ukweli uleule.

### Hifadhi tafiti kwa kile mtu pekee anaweza kukuambia

Baadhi ya mambo hayawezi kuonekana kutoka telemetry ya mfumo: kama mhandisi anahisi kazi yake ina maana, kama mchakato unahisi kuchosha, kama hatari ya uchovu inapanda. Haya yanahitaji kuuliza moja kwa moja, na utafiti uliobuniwa vizuri (mada ya 3.7 inashughulikia mekanika) ndio zana sahihi. Kosa ni kutumia taarifa binafsi kwa mambo ambayo mfumo ungeweza kuona moja kwa moja, kuwauliza wahandisi wakadirie mzunguko wao wa usambazaji badala ya kuuvuta kutoka bomba, jambo linaloleta kelele na upendeleo usio wa lazima kwenye data ambayo ingeweza kuwa ya kiuhalisia.

### Jenga ukaguzi wa ubora wa data ndani ya bomba lenyewe

Chukulia mabomba ya vipimo kwa ukali uleule kama msimbo wa uzalishaji: ongeza ukaguzi wa otomatiki unaoashiria chanzo kinapoacha kutuma data, usambazaji wa sehemu unapobadilika bila kutarajiwa, au hesabu inaposhuka hadi sifuri bila kutarajiwa. Dashibodi inayoonyesha kimyakimya data iliyochakaa au iliyovunjika kana kwamba ni ya sasa ni mbaya kuliko dashibodi inayoonyesha wazi "data haipatikani," kwa sababu ya kwanza inamomonyoa uaminifu bila kuonekana wakati ya pili angalau inasema ukweli kuhusu mapungufu yake yenyewe.

### Andika njia ya kukusanya pamoja na fasili

Fasili ya kipimo ("muda wa kuongoza wa mabadiliko") haijakamilika bila njia yake ya kukusanya (iliyopimwa kutoka muhuri wa muda wa mchango wa kwanza kwenye udhibiti wa matoleo hadi muhuri wa muda wa usambazaji wa uzalishaji kwenye bomba, ukiondoa matawi ya urekebishaji wa dharura). Timu mbili zenye fasili ileile lakini njia tofauti za kukusanya bado zitazalisha namba zisizoweza kulinganishwa. Rekodi vyote viwili kwenye hati ya vipimo kutoka mada ya 1.4, na uchukulie mabadiliko ya chochote kati yake kama badiliko linalohitaji mapitio yaleyale yaliyoandikwa.

## Mabadilishano: faida na hasara

| Aina ya chanzo | Faida | Hasara |
| --- | --- | --- |
| Upimaji wa otomatiki wa bomba (CI/CD, udhibiti wa matoleo) | Wa kiuhalisia, wenye mihuri ya muda, mgumu kughushi, juhudi ndogo endelevu | Unahitaji uwekezaji wa awali wa uhandisi kujenga na kudumisha |
| Data ya kifuatilia masuala na usimamizi wa miradi | Inapatikana sana, ya kawaida kwa timu | Inategemea bidii ya binadamu; mara nyingi haina uthabiti kuvuka timu |
| Tafiti na taarifa binafsi | Chanzo pekee cha uzoefu wa kibinafsi (kuridhika, ustawi) | Upendeleo wa kukumbuka, upendeleo wa kutaka kukubalika kijamii, uchovu wa kujibu |
| Majukwaa ya uonekanaji na telemetry | Ishara tajiri, ya wakati halisi, ya kiwango cha mfumo | Inafunika tu kilichopimwa waziwazi; inaweza kuwa ghali kwa ukubwa |

Mvutano wa kati ni **uhalisia dhidi ya ufunikaji**. Upimaji wa otomatiki ndio chanzo cha kuaminika zaidi lakini hauwezi kuona uzoefu wa kibinafsi kabisa, wakati tafiti zinaweza kufikia hasa kile otomatiki isichoweza lakini zinabeba hatari halisi ya upendeleo. Litatue kwa kutumia upimaji wa otomatiki popote tukio linaweza kuonekana moja kwa moja, na kuhifadhi taarifa binafsi mahususi na tu kwa kile kinachohitaji kweli kumuuliza mtu, kamwe si kama mbadala wa uvivu wa data ambayo mfumo ungeweza kuitoa.

## Maswali ya kujadili na timu yako

1. **Kwa vipimo vyetu vitano muhimu zaidi, je, tunaweza kutaja mfumo chanzo kamili na njia ya kukusanya kwa kila kimoja, au tunadhania fasili bila kujua data inatoka wapi kweli?** Hili ni pengo la kawaida kwa kushangaza: kipimo kinapokelewa kutoka mfumo au dashibodi ya chaguo-msingi ya muuzaji, na hakuna aliye kwenye timu ya sasa anayejua mfumo gani unazalisha data ya msingi au jinsi gani. Fuatilia kila kimoja hadi asili yake kama zoezi la kikundi.

2. **Vipimo vyetu vipi vinategemea taarifa binafsi kwa kitu ambacho mfumo ungeweza kuona moja kwa moja, na ingechukua nini kubadilisha taarifa binafsi hiyo na upimaji halisi?** Hesabu za usambazaji zilizoripotiwa binafsi, masaa ya kazi yaliyoripotiwa binafsi, na muda wa mzunguko uliokadiriwa binafsi yote ni mifano ya kawaida ya kutumia chanzo kisicho sahihi cha data kwa kitu ambacho otomatiki ingeweza kunasa kwa kutegemewa zaidi. Tambua haya na upe kipaumbele kubadilisha yale yenye dau kubwa zaidi.

3. **Tungejuaje ikiwa moja ya mabomba yetu ya data lilivunjika kimyakimya?** Mashirika mengi hugundua bomba la vipimo lililovunjika tu mtu anapoona namba haionekani yenye uwezekano, jambo linaloweza kuchukua miezi. Jadilini kama mabomba yenu yoyote yana ukaguzi wa afya wa otomatiki leo, na kama hapana, yapi yanahitaji kwanza zaidi.

4. **Wapi tafsiri kati ya mifumo imebadilisha maana ya kipimo bila yeyote kuamua hivyo kwa makusudi?** Sehemu inayomaanisha kitu kimoja kwenye mfumo chanzo inaweza kumaanisha kitu tofauti kwa hila baada ya ujumuishaji au uhamishaji, na namba inayotokana inaweza kuonekana yenye uwezekano huku ikiwa si sahihi. Pitieni njia kamili ya data ya kipimo chenu chenye matokeo makubwa zaidi na mtafute pointi za tafsiri.

5. **Je, tunaandika njia za kukusanya, si fasili tu, kwa hati yetu ya vipimo?** Timu mbili zinaweza kushiriki jina na fasili ya kipimo huku zikikokotoa kutoka njia tofauti za kukusanya, zikizalisha namba zisizoweza kulinganishwa kweli. Kagua sampuli ya hati zenu dhidi ya pengo hili mahususi.

6. **Tunatofautishaje kati ya mwelekeo halisi na kasoro ya ubora wa data namba inaposogea bila kutarajiwa?** Mabadiliko ya ghafla katika kipimo mara nyingi ni ishara ya kwanza ya mabadiliko halisi au bomba lililovunjika, na kutofautisha hivyo viwili kunahitaji kujua chanzo cha data vya kutosha kuchunguza haraka. Jadilini mchakato halisi wa timu yenu kwa mabadiliko ya mwisho ya kipimo yasiyoelezwa mliyoyakabili.

## Mtazamo wa sekta

**Kampuni changa.** Ukiwa na rundo dogo, vipimo vyako vingi vinaweza kutoka moja kwa moja kwa mtoaji wako wa CI/CD, mwenyeji wa udhibiti wa matoleo, na zana nyepesi ya utafiti, bila kujenga mabomba maalum. Hatari ni kuruka hata ukaguzi wa afya wa msingi kwa sababu timu inakwenda haraka; ukaguzi wa otomatiki wa dakika tano kwamba chanzo cha data bado kinatuma matukio ni bima ya bei nafuu dhidi ya kuruka kipofu kimyakimya.

**Biashara ndogo.** Egemea kuripoti kulikojengwa ndani ya zana zako zilizopo badala ya kujenga mabomba maalum ya data ambayo huna uwezo wa kuyadumisha. Kuwa wazi ni namba zipi zinatoka kwenye mifumo ya otomatiki na zipi ni makadirio ambayo mtu anaandika kwenye lahajedwali, kwa sababu hizo mbili zinabeba kutegemewa tofauti sana, hata zikiishia kwenye ukurasa mmoja.

**Biashara kubwa.** Matatizo ya ubora wa data hujumlika kuvuka miunganisho, uhamishaji, na mipaka ya vitengo vya biashara. Wekeza kwenye mabomba ya data ya kati, yanayofuatiliwa vizuri kwa vipimo vyako vyenye matokeo makubwa zaidi, jenga ukaguzi wa ubora wa data wa otomatiki kama mazoea ya kawaida, na ukague njia za kukusanya, si fasili tu, wakati wowote unapolinganisha vipimo kuvuka vitengo vya biashara.

**Serikali.** Asili ya data inaweza kubeba uzito wa kisheria na wa ukaguzi: namba ya utendaji iliyochapishwa inaweza kuhitaji kunusurika ukaguzi wa nje si wa thamani yake tu bali mnyororo wake mzima wa kukusanya. Andika ukoo wa data waziwazi, hifadhi rekodi za kihistoria za njia za kukusanya hata baada ya mbinu kubadilika, na uwe tayari kuonyesha hasa jinsi namba ilivyozalishwa, si kile inachosoma sasa tu.

## Mifano

**Biashara kubwa.** Uongozi wa uhandisi wa kampuni ya huduma za fedha ulikuwa ukifuatilia "muda wa kuongoza wa mabadiliko" kwa miaka miwili kabla ya kugundua kwamba uhamishaji wa bomba la data miezi kumi na minane mapema ulikuwa umebadilisha kimyakimya chanzo cha muhuri wa muda kutoka mchango wa kwanza hadi uundaji wa ombi la kuvuta, ukifupisha muda dhahiri wa kuongoza kwa wastani wa masaa kadhaa kuvuka kila timu bila yeyote kuona au kuidhinisha badiliko. Suluhisho lilianzisha ukaguzi wa ubora wa data unaolinganisha usambazaji wa kila kipimo wiki hadi wiki na kuashiria mabadiliko yasiyo ya kawaida kitakwimu kwa mapitio ya binadamu, ukikamata matatizo mengine mawili ya kimyakimya ya bomba ndani ya mwaka uliofuata.

**Serikali.** Dashibodi ya kutegemewa kwa huduma ya wakala wa usafirishaji inayomkabili umma ilitegemea mchanganyiko wa telemetry ya vitambuzi vya otomatiki na ripoti za matukio zilizoingizwa kwa mkono kutoka ofisi za kanda. Ukaguzi uligundua kwamba kanda zenye uwezo mdogo wa wafanyakazi zilikuwa zikiripoti pungufu matukio madogo kwa utaratibu, si kwa kutokuwa waaminifu bali kwa sababu tu uingizaji wa mkono ulishindana kwa muda na kazi za dharura zaidi, jambo lililomaanisha namba ya kutegemewa iliyochapishwa ilikuwa bora kuliko uhalisia katika kanda ambazo hazingeweza kumudu zaidi matengenezo yasiyo na rasilimali yasionekane. Suluhisho la wakala lilibadilisha uingizaji wa mkono wa matukio na kurekodi kunakochochewa na vitambuzi kwa otomatiki popote inapowezekana na kuongeza makadirio yaliyoandikwa ya ufunikaji wa kuripoti kwa mkono kando ya namba iliyochapishwa.

## Kesi ya biashara: sababu, ROI, na TCO

Faida ya upimaji imara ni imani: timu ya uongozi inayoamini data yake inaweza kuitendea kwa uamuzi, wakati timu iliyochomwa na bomba lililovunjika kimyakimya huanza kutilia shaka kila namba, jambo linalopunguza kasi ya kila uamuzi unaotegemea vipimo. Kupotea kwa imani hiyo ni ghali na ngumu kukarabati, mara nyingi kukichukua muda mrefu zaidi sana kujenga upya kuliko uwekezaji wa awali wa upimaji ungegharimu.

Jumla ya gharama ya umiliki ya upimaji mzuri inajumuisha kazi ya awali ya uhandisi kujenga mabomba ya kutegemewa na gharama endelevu ya ufuatiliaji wa ubora wa data, vyote viwili ni rahisi kuwekeza pungufu kwavyo kwa sababu hakuna kinachozalisha kigae cha dashibodi kinachoonekana chenyewe. Uwekezaji pungufu huo ni uchumi wa uongo: gharama ya kugundua bomba lililovunjika kimyakimya baada ya miezi ya maamuzi kufanywa kwa data mbaya ni kubwa zaidi sana kuliko gharama ya kujenga ukaguzi wa afya ambao ungelikamata siku ya kwanza.

## Mifumo mibaya na mitego

- **Kuamini namba bila kujua mfumo wake chanzo:** kipimo kilichopokelewa kutoka mfumo au chaguo-msingi la muuzaji bila yeyote kufuatilia data inatoka wapi kweli.
- **Kuripoti binafsi kile ambacho mfumo ungeweza kuona moja kwa moja:** huleta kelele na upendeleo usio wa lazima kwenye data ambayo ingeweza kuwa ya kiuhalisia.
- **Hakuna ukaguzi wa otomatiki wa ubora wa data kwenye bomba la kipimo:** bomba lililovunjika kimyakimya linaweza kuonyesha namba zisizo sahihi kwa miezi bila kugunduliwa.
- **Kuandika fasili tu, si njia ya kukusanya:** timu mbili zenye jina la kipimo kilekile bado zinaweza kuwa zinakokotoa namba zisizoweza kulinganishwa.
- **Dashibodi inayoonyesha "0" au data iliyochakaa kana kwamba ni ya sasa, bila dalili ya kushindwa kwa chanzo:** mbaya kuliko ujumbe unaoonekana wa "data haipatikani."
- **Kanda au timu zisizo na rasilimali kuripoti pungufu kwa utaratibu kwa sababu ya mzigo wa uingizaji wa mkono:** pengo la ubora wa data linalohusiana na hasa maeneo yanayohitaji umakini zaidi.

## Kielelezo cha ukomavu

- **Ngazi ya 1, Kuanzisha:** Hakuna anayeweza kufuatilia kipimo kwa kutegemewa hadi mfumo wake chanzo; mabomba hayana ukaguzi wa afya na kushindwa kunapita bila kuonekana.
- **Ngazi ya 2, Kuendeleza:** Baadhi ya vipimo vina vyanzo vilivyoandikwa, lakini njia za kukusanya hazina uthabiti na ukaguzi wa ubora wa data ni wa papo hapo kwa bora.
- **Ngazi ya 3, Kusawazisha:** Kila kipimo kinachotawaliwa kinaandika mfumo wake chanzo na njia ya kukusanya; mabomba ya otomatiki yanapendelewa kuliko taarifa binafsi popote tukio linaweza kuonekana moja kwa moja.
- **Ngazi ya 4, Kusimamia:** Ukaguzi wa otomatiki wa ubora wa data unafuatilia kila bomba lenye matokeo, unaashiria hitilafu kwa mapitio, na ukoo wa data umeandikwa na unaweza kukaguliwa.
- **Ngazi ya 5, Kuratibu:** Shirika linachukulia ubora wa data kama nidhamu ya daraja la kwanza ya uhandisi yenye ufuatiliaji na mwitikio wa tukio wake yenyewe, na linaweza kuonyesha asili kamili kwa kipimo chochote kilichochapishwa kwa mahitaji.

## Mawazo ya kujadili

1. Je, tunaweza kufuatilia vipimo vyetu vitatu vya juu hadi mfumo wao chanzo kamili sasa hivi, moja kwa moja, katika mkutano huu?
2. Vipimo vyetu vya sasa vipi vinategemea taarifa binafsi kwa kitu ambacho mfumo ungeweza kupima moja kwa moja?
3. Je, mabomba yetu yoyote ya vipimo yana ukaguzi wa afya wa otomatiki leo?
4. Lini mwisho tuligundua bomba la data lililovunjika kimyakimya, na lilikuwa si sahihi kwa muda gani?
5. Wapi uingizaji wa data kwa mkono unaunda pengo kati ya uhalisia ulioripotiwa na wa kweli?

## Mambo muhimu ya kukumbuka

- Pendelea **upimaji wa otomatiki** kuliko taarifa binafsi popote mfumo unaweza kuona tukio moja kwa moja; hifadhi taarifa binafsi kwa uzoefu wa kibinafsi kweli.
- Kila kipimo kinahitaji **mfumo chanzo na njia ya kukusanya** iliyoandikwa, si fasili tu.
- Ubora wa data **huoza kimyakimya**; jenga ukaguzi wa otomatiki ndani ya bomba lenyewe badala ya kugundua uvunjikaji kwa bahati.
- Pima **kwenye tukio**, si chini ya mkondo wa tafsiri, kupunguza kupotoka kati ya kilichotokea na kinachoonyeshwa na dashibodi.
- Gharama ya bomba lililovunjika kimyakimya, miezi ya maamuzi yaliyofanywa kwa data mbaya, inazidi sana gharama ya ukaguzi wa afya ambao ungelikamata.

## Marejeo na usomaji zaidi

- *Observability Engineering*, na Charity Majors, Liz Fong-Jones, na George Miranda (kanuni za usanifu wa upimaji na telemetry).
- *Accelerate: The Science of Lean Software and DevOps*, na Nicole Forsgren, Jez Humble, na Gene Kim (mbinu ya upimaji nyuma ya vipimo vya DORA).
- *Data Quality: The Accuracy Dimension*, na Jack E. Olson (dhana za ubora wa data zinazotumika kwa mabomba ya vipimo).
- *How to Measure Anything*, na Douglas W. Hubbard (mbinu za kupima kwa kiasi zinazoonekana ngumu kuona moja kwa moja).
