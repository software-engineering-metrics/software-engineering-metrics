# 2.7 Nadharia ya foleni

## Muhtasari na msukumo

**[Nadharia ya foleni](https://en.wikipedia.org/wiki/Queueing_theory)** ni utafiti wa kihisabati wa mistari ya kusubiri. Inasikika kama mchanganyiko wa ajabu na kitabu cha vipimo vya uhandisi wa programu hadi utambue kiasi gani cha bomba la utoaji kwa kweli ni foleni: ombi la kuvuta linalosubiri mpitiaji, mchango unaosubiri mkimbiaji wa CI, tiketi inayosubiri kuchukuliwa, ujumbe wa msaada kwa wateja unaosubiri jibu. Mada ya 2.4 tayari ilitambulisha mzigo wa mtiririko na muda wa mtiririko na kuonyesha kwamba kuzidisha mkondo wa thamani hupunguza kasi ya utoaji kwa makali, na mada za 2.5 na 2.6 ziliangazia kwamba muda mwingi wa utoaji ni muda wa kusubiri, si muda wa kazi. Nadharia ya foleni ni hisabati ya msingi inayoeleza kwa nini yote hayo ni kweli, si mfumo ulioonekana tu.

Matokeo yenye manufaa zaidi ni **[sheria ya Little](https://en.wikipedia.org/wiki/Little%27s_law)**, nadharia iliyothibitishwa na mtafiti wa operesheni John Little mwaka 1961: wastani wa idadi ya vipengee katika mfumo thabiti ni sawa na wastani wa kasi ambayo vipengee vinafika, ukizidishwa na wastani wa muda ambao kila kipengee kinatumia kwenye mfumo. Mada ya 2.4 tayari ilitumia matokeo haya chini ya majina ya Flow Framework yenyewe, mzigo wa mtiririko ni sawa na kasi ya kufika mara muda wa mtiririko. Katika msamiati mpana wa kitabu hiki pia inasomeka kama kazi inayoendelea (mada ya 2.5) ni sawa na kasi ya kufika ya kazi mpya mara muda wa mzunguko (mada ya 2.6). Hii si kanuni ya kidole gumba wala uhusiano ulioonekana katika baadhi ya tafiti. Ni uthibitisho unaoshikilia kwa foleni yoyote thabiti, bila kujali foleni inachakata nini au inaamuaje cha kufanyia kazi baadaye.

Kwa timu kubwa, ujumla huo ndio hoja. Sheria ya Little inakupa ukaguzi wa busara unaofanya kazi kwa namna ileile iwe foleni ni ubao wa kanban, wakala wa ujumbe, au bomba la CI la pamoja. Ikiwa kazi yako inayoendelea iliyopimwa, kasi ya kufika, na muda wa mzunguko havikidhi mlinganyo takriban, mojawapo ya namba zako tatu si sahihi, kwa kawaida kwa sababu ya fasili isiyo thabiti ya kinachohesabika kama "kinaendelea" au "kimefika." Mashirika ya biashara kubwa na ya serikali yanaendesha makumi ya foleni hizo kwa wakati mmoja, vikundi vya mapitio ya msimbo vya pamoja, mazingira ya majaribio ya pamoja, bodi za idhini za pamoja, na sheria ya Little ndiyo zana ya bei nafuu zaidi inayopatikana ya kukamata fasili mbaya ya kipimo kabla haijaendesha uamuzi mbaya wa wafanyakazi au wa mchakato.

## Kanuni kuu

- **Sheria ya Little ni uthibitisho, si kanuni ya kukisia.** Kazi inayoendelea ni sawa na kasi ya kufika mara muda wa mzunguko, kwa foleni yoyote thabiti, na ni ukaguzi wa haraka wa kama vipimo vyako vya utoaji vinalingana ndani yake.
- **Matumizi hayapanuki kwa mstari na muda wa kusubiri.** Rasilimali ya pamoja inapokaribia matumizi kamili, ucheleweshaji wa foleni unakua kwa makali, si taratibu. Rasilimali inayoendesha kwa asilimia 95 ya shughuli mara nyingi inasubiri mara nyingi zaidi sana kuliko ile ya asilimia 80, si "mbaya kidogo tu."
- **Wastani wa foleni unaficha hali yake mbaya zaidi.** Kuripoti tu wastani wa muda wa kusubiri kunaficha mkia mrefu, wenye maumivu karibu na uwezo, hasa kile mada ya 1.6 inachoonya inapokuja kutumia pesentaili badala ya wastani.
- **Jinsi foleni inavyofafanuliwa inaweza kuchezewa kwa urahisi kama kipimo chochote kingine.** Iwapo kitu kinahesabika kama "kimefika," "kinaendelea," au "kimehudumiwa" ni chaguo, na kinaweza kurekebishwa kupendelea dashibodi bila kubadilisha kinachotokea kwa kazi.
- **Bomba kwa kawaida ni foleni ya foleni.** Bomba la utoaji linaunganisha hatua kadhaa pamoja, na hatua ya polepole zaidi inaweka mwendo kwa mnyororo mzima bila kujali jinsi nyingine zinavyoendesha kwa kasi.

## Mapendekezo

### Tumia sheria ya Little kukagua namba zako mwenyewe kabla ya kuziamini

Chukua wastani wa kazi inayoendelea iliyopimwa wa timu yako, wastani wake wa kasi ya kufika ya vipengee vipya kwa wiki, na wastani wake wa muda wa mzunguko, na ukague kama kazi inayoendelea ni sawa takriban na kasi ya kufika mara muda wa mzunguko. Isipokuwa, usidhani nadharia ni mbaya. Tafuta chanzo halisi: mpaka wa hatua unaohesabiwa bila uthabiti, kazi inayokaa "imezuiliwa" lakini bado inahesabika kama inaendelea, au kasi ya kufika iliyopimwa kwa dirisha tofauti na muda wa mzunguko. Ukaguzi huu mmoja unakamata upimaji mbaya zaidi kuliko timu nyingi zinavyopata kwa njia nyingine yoyote.

### Fuatilia matumizi moja kwa moja kwa kila rasilimali ya pamoja, yenye kikwazo cha uwezo

Tambua rasilimali ambazo bomba lako la utoaji linashiriki kuvuka timu nyingi, kundi la mapitio ya msimbo, kundi la CI, mazingira ya majaribio, na upime jinsi kila moja inavyoendesha kwa shughuli kama uwiano wa uwezo wake unaopatikana, kabla hujapanga kuiendesha karibu na kikomo chake. Kundi la wapitiaji la pamoja linaloendesha karibu na uwezo kamili huzalisha nyakati za kusubiri foleni ya mapitio zinazokua kwa kasi zaidi sana kuliko ongezeko dogo la mahitaji lililozisababisha, hasa mienendo iliyo nyuma ya ushauri wa mada ya 2.9 wa kutazama muda hadi mapitio ya kwanza kama kiashiria cha kuongoza.

### Tenganisha kasi ya kufika, kasi ya mafanikio, kasi ya kushindwa, na kasi ya kuruka

Pinga kuunganisha kila kitu kinachoondoka kwenye foleni kuwa namba moja ya "upitishaji" au "kasi ya huduma." Fuatilia vitu vinne kando: kazi inafika kwa kasi gani, kiasi gani kinakamilika kwa mafanikio, kiasi gani kinashindwa na kuhitaji kurudiwa, na kiasi gani kinaachwa au kudondoshwa kimyakimya kabla yeyote hajamaliza. Bomba linaloonekana la haraka kwa sababu kasi yake ya kuruka ilipanda kimyakimya halitoi zaidi kweli, na kufuatilia kasi hizi nne kando tu ndiko kutakuonyesha hilo.

### Unda kielelezo cha mabomba ya hatua nyingi kama foleni ya foleni

Chukulia bomba la utoaji, au mchakato wowote wa hatua nyingi, mzunguko wa maisha wa tukio, bomba la kuajiri, kama mnyororo wa foleni badala ya kishungi kimoja kisichotofautishwa cha "muda." Kasi ya jumla ya kufika inawekwa na hatua ya kwanza, kasi ya jumla ya ukamilishaji na hatua ya mwisho, na hesabu za jumla za makosa na kuruka za bomba ni jumla ya zile za kila hatua yenyewe. Mfumo huu unakuambia papo hapo hatua ipi inastahili uwekezaji: ile yenye mchanganyiko mbaya zaidi wa matumizi ya juu na kasi ya juu ya kushindwa au kuruka, si ile ambayo hutokea kuwa rahisi zaidi kupima.

### Weka wafanyakazi na vikomo vya WIP kwa kuzingatia matumizi, si upitishaji tu

Unapoamua wapitiaji au wakimbiaji wa CI wangapi timu inahitaji, usipime uwezo ulingane na wastani wa kasi ya kufika hasa. Foleni inayoendesha kwa asilimia 100 ya matumizi kwa wastani ina muda wa kusubiri usio na kikomo kivitendo, kwa sababu kufika halisi si kwa usawa, si laini kikamilifu. Panga nafasi ya ziada kwa makusudi, na uchukulie "wapitiaji wetu wana shughuli karibu daima" kama ishara ya onyo kuhusu nyakati za kusubiri zijazo, si ushahidi wa rasilimali yenye ufanisi.

## Mabadilishano: faida na hasara

| Mbinu | Faida | Hasara |
| --- | --- | --- |
| Hakuna kielelezo rasmi cha foleni, wafanyakazi kwa hisia | Haraka kuanza; hakuna msamiati mpya kwa timu | Inadharau mara kwa mara jinsi muda wa kusubiri unavyolipuka karibu na uwezo kamili |
| Sheria ya Little kama ukaguzi wa busara wa vipimo vilivyopo | Nafuu, haihitaji zana mpya, inakamata fasili mbaya haraka | Inakagua uthabiti tu, haitambui chanzo yenyewe |
| Simulizi kamili ya foleni (usambazaji wa kufika, seva nyingi) | Utabiri sahihi zaidi wa tabia ya muda wa kusubiri chini ya mzigo | Inahitaji ujuzi halisi wa takwimu na matengenezo ambayo timu nyingi hazitadumisha |
| Ufuatiliaji wa matumizi kwenye rasilimali za pamoja bila kuunda kielelezo cha kina | Rahisi, inayoweza kutekelezwa, inakamata chanzo kikuu cha muda wa kusubiri unaotoroka | Haisemi chochote kuhusu kwa nini matumizi yako juu au cha kufanya kuhusu chanzo cha msingi |

Mvutano wa kati ni **ukali dhidi ya upokeaji**. Simulizi kamili ya foleni inatoa jibu sahihi zaidi, lakini karibu hakuna timu ya uhandisi itakayojenga na kudumisha moja, na kielelezo ambacho hakuna anayekiamini au kukisasisha ni mbaya kuliko kutokuwa na kielelezo. Sheria ya Little na ufuatiliaji wa msingi wa matumizi huacha usahihi fulani lakini hazihitaji ujuzi maalum wa takwimu na zinaingia moja kwa moja kwenye vipimo ambavyo timu tayari inavikusanya kwa mada za 2.4 hadi 2.6. Chukua ukaguzi huo wa bei nafuu, unaoweza kupokelewa kama chaguo-msingi, na uhifadhi simulizi kamili kwa kesi nadra ambapo rasilimali moja ya pamoja, meli kubwa ya CI, kundi maalum la mapitio, ni ghali vya kutosha kuhalalisha uwekezaji.

## Maswali ya kujadili na timu yako

1. **Je, kazi yetu inayoendelea iliyopimwa, kasi ya kufika, na muda wa mzunguko vinakidhi sheria ya Little kweli, na kama sivyo, kwa nini?** Huu ndio utambuzi wa haraka zaidi unaopatikana kwa fasili mbaya ya kipimo. Pitieni namba halisi pamoja, na mlinganyo usiposhikilia takriban, fuatilieni kutolingana hadi kutokuwa na uthabiti mahususi wa kifasili badala ya kupuuza ukaguzi.

2. **Rasilimali zipi za pamoja katika bomba letu la utoaji zinaendesha karibu na matumizi kamili, na je, tunajua namba ya matumizi yake kweli?** Timu nyingi zinaweza kutaja rasilimali "inayohisi kuwa na shughuli daima" lakini hazijawahi kupima matumizi yake moja kwa moja. Tambua rasilimali mbili au tatu zenye kikwazo zaidi za pamoja na upate namba halisi kwa kila moja.

3. **Je, tunachanganya mafanikio, kushindwa, na kuruka kuwa namba moja ya upitishaji, na tungeona nini tukizitenganisha?** Hesabu moja ya "vipengee vilivyokamilika" inaweza kupanda hata ubora ukishuka au kazi ikiachwa kimyakimya. Kokotoa upya upitishaji wa kipindi cha hivi karibuni kama namba tatu tofauti na mjadili mgawanyo unafichua nini ambacho namba iliyochanganywa iliuficha.

4. **Kizuizi cha kweli kiko wapi katika bomba letu, hatua ya polepole zaidi inayoweka mwendo kwa kila kitu cha chini ya mkondo wake?** Timu mara nyingi huwekeza kuharakisha hatua iliyo rahisi zaidi kuboresha badala ya ile inayodhibiti upitishaji wa jumla kweli. Tambua hatua yenye mchanganyiko mbaya zaidi wa matumizi ya juu na kasi ya juu ya kushindwa au kuruka.

5. **Tukiongeza uwezo kwa rasilimali yetu yenye kikwazo zaidi ya pamoja, je, muda wa kusubiri ungeboreka kweli, au mahitaji yangepanuka tu kuujaza?** Swali hili linatenganisha upungufu halisi wa uwezo na tatizo la mahitaji, na jibu linabadilisha kama suluhisho sahihi ni wafanyakazi zaidi, kikomo cha WIP, au badiliko la jinsi kazi inavyopewa kipaumbele kabla ya kuingia foleni.

6. **Je, tumewahi kufafanua upya kinachohesabika kama "kinaendelea" au "kimefika" kwa njia iliyofanya dashibodi ionekane bora bila kubadilisha kilichotokea kwa kazi?** Hili linastahili kuulizwa kwa uaminifu na mahususi, kwa mifano halisi kutoka mwaka uliopita, badala ya kulichukulia kama wasiwasi wa kinadharia.

## Mtazamo wa sekta

**Kampuni changa.** Ukiwa na wahandisi wachache, foleni nyingi ni fupi vya kutosha kwamba uchambuzi rasmi wa foleni ni mzigo kupita kiasi. Tabia yenye manufaa ni ndogo zaidi: ona wakati mtu mmoja, mara nyingi mhandisi mwandamizi zaidi, amekuwa rasilimali ya pamoja ya kweli ambayo kila kitu kingine kinamsubiri, na ulichukulie hilo kama tatizo la matumizi linalostahili kutajwa hata bila kielelezo rasmi nyuma yake.

**Biashara ndogo.** Timu ya biashara ndogo mara chache inahitaji kitu cha kisasa zaidi ya kufuatilia matumizi kwenye rasilimali zake moja au mbili za pamoja kweli, mara nyingi mpitiaji mmoja au bomba moja la usambazaji, na kuangalia pale "kwa kawaida inapatikana" inapogeuka kimyakimya kuwa "kwa kawaida ndiyo kizuizi." Lahajedwali inatosha; zana maalum si lazima kwa ukubwa huu.

**Biashara kubwa.** Rasilimali za pamoja huongezeka haraka kwa ukubwa wa biashara kubwa: timu ya jukwaa ya kati, bodi ya mapitio ya usalama ya pamoja, meli ya CI ya pamoja inayohudumia makumi ya timu za bidhaa. Hizi ndizo rasilimali ambapo ufuatiliaji wa matumizi unajilipa, kwa sababu rasilimali moja iliyozidiwa ya pamoja inaweza kuharibu kimyakimya muda wa utoaji kwa kila timu inayoitegemea, na vipimo vya timu yoyote moja havitafichua chanzo kinachoishi nje ya bomba lake mwenyewe.

**Serikali.** Programu za utoaji za mashirika mengi na wauzaji wengi mara nyingi huelekeza kazi kupitia bodi za idhini za pamoja, michakato ya pamoja ya uidhinishaji wa usalama, na mazingira ya pamoja ya majaribio ambayo hakuna timu moja inayodhibiti au kuweza kuyapima ukubwa peke yake. Uchambuzi wa foleni wa malango haya ya pamoja, kasi ya kufika, uwezo, matumizi, mara nyingi ndio ushahidi ulio wazi zaidi unaopatikana wa kesi ya biashara ya kuongeza uwezo au kubadilisha jinsi kazi inavyokusanywa kwa makundi kabla ya kufikia lango.

## Mifano

**Biashara kubwa.** Timu ya jukwaa ya ndani ya mtoaji wa miundombinu ya wingu iliona kwamba muda wa kuongoza wa mabadiliko (mada ya 2.10) ulikuwa umetambaa juu kuvuka kila timu ya bidhaa iliyotegemea meli yake ya CI ya pamoja, ingawa hakuna timu moja iliyokuwa imebadilisha jinsi inavyofanya kazi. Uchambuzi wa matumizi uligundua meli ikiendesha zaidi ya asilimia 90 ya shughuli wakati wa saa kuu, mbali kupita pointi ambapo nadharia ya foleni inatabiri muda wa kusubiri unakua kwa makali badala ya taratibu. Timu ya jukwaa iliongeza uwezo wa CI na kuanzisha sera ya upangaji ratiba ya mgao wa haki ili hakuna mlipuko wa shughuli wa timu moja uweze kutawala foleni. Wastani wa muda wa kusubiri CI ulishuka kwa zaidi ya nusu ndani ya mwezi, ushahidi kwamba kizuizi kilikuwa foleni ya pamoja, isiyoonekana kila wakati.

**Serikali.** Timu ya huduma ya kidijitali ya wakala wa kitaifa wa vibali ilifuatilia uchakataji wa maombi kama namba moja ya upitishaji wa "kesi zilizofungwa kwa wiki" kwa miaka miwili, na namba ilionekana thabiti. Uchambuzi wa karibu zaidi, ukigawanya namba hiyo kuwa kesi zilizoidhinishwa, zilizokataliwa, na zilizoachwa na waombaji baada ya ucheleweshaji mrefu, uligundua kiwango cha kuachwa kilikuwa karibu kimeongezeka mara tatu katika kipindi hicho hicho huku idhini zikibaki tambarare. Sheria ya Little, ikitumika kwenye foleni ya wafanyakazi wa kesi, ilionyesha kazi inayoendelea ilikuwa imekua mbali kupita kile ambacho wastani ulioelezwa wa muda wa kuchakata wa timu ulidokeza, kumaanisha kesi zilikuwa zikirundikana kimyakimya katika hali isiyohesabika kama "inasubiri." Wakala ulipanga upya fasili zake za ufuatiliaji wa kesi kuhesabu kila kesi iliyo wazi kwa uaminifu na kuongeza uwezo wa wafanyakazi wa kesi uliopimwa kuweka matumizi chini ya asilimia 85, sasa ukifuatiliwa kama lengo la kudumu la kiuendeshaji kando ya namba ya upitishaji.

## Kesi ya biashara: sababu, ROI, na TCO

Faida ya kutumia uchambuzi wa msingi wa foleni ni kwamba unageuza "bomba linahisi polepole" kuwa uamuzi mahususi, unaoweza kutetewa, ongeza nafasi ya ziada kwa rasilimali hii ya pamoja, gawanya kipimo hiki kilichochanganywa kuwa vijenzi vyake halisi, badala ya msukumo usio wazi wa "fanya kazi kwa kasi" unaokosa chanzo halisi. Mfano wa mtoaji wa miundombinu ya wingu hapo juu, muda wa kusubiri uliopunguzwa nusu kutokana na suluhisho la uwezo na upangaji ratiba badala ya badiliko lolote la tabia ya timu moja moja, ni mfumo ambao uchambuzi huu hutoa kwa kutegemewa: suluhisho karibu daima ni la bei nafuu kuliko kuomba kila timu ya chini ya mkondo isogee kwa kasi karibu na kizuizi ambacho haiwezi kukiona.

Jumla ya gharama ya kupokea ni ndogo kweli. Sheria ya Little na ufuatiliaji wa matumizi havihitaji zana mpya zaidi ya kile mada za 2.4 hadi 2.6 tayari zinakuomba ukusanye: kasi ya kufika, kazi inayoendelea, na muda wa mzunguko. Uwekezaji kwa kiasi kikubwa ni nidhamu ya uchambuzi, kukagua namba dhidi ya nyingine na kupitia mara kwa mara matumizi kwenye rasilimali za pamoja kabla hazijawa kurudi nyuma kunakofuata kusikoelezwa kwa muda wa kuongoza wa shirika.

## Mifumo mibaya na mitego

- **Kupima uwezo wa rasilimali ya pamoja ulingane na wastani wa kasi yake ya kufika hasa:** huhakikisha matumizi ya juu na muda wa kusubiri unaotoroka kila wakati mahitaji yanapokuwa yasiyo sawa hata kwa muda mfupi.
- **Kuripoti wastani wa muda wa kusubiri tu, kamwe pesentaili:** huficha mkia mrefu unaojali zaidi kwa watu wanaosubiri ndani yake.
- **Kuchanganya mafanikio, kushindwa, na kuruka kuwa namba moja ya upitishaji:** njia ya kuchezea iliyo kiini cha mada hii. Timu iliyo chini ya shinikizo inaweza kufanya upitishaji uonekane wenye afya kwa kuruhusu kimyakimya kasi ya kuruka ipande, tiketi zilizoachwa, maombi yaliyodondoshwa kimya, kazi isiyohesabika kamwe kama kushindwa. Kizuizi ni kufuatilia kasi ya kufika, mafanikio, kushindwa, na kuruka kama namba nne tofauti, zinazoonekana, nidhamu ileile ambayo mada ya 1.2 inaiomba kwa kila kipimo katika kitabu hiki, ili kasi ya kuruka inayopanda isiweze kujificha nyuma ya chati tambarare ya upitishaji.
- **Kuchukulia "watu wetu wana shughuli daima" kama sifa:** ni dalili ya matumizi ya juu, chanzo kikuu cha nyakati ndefu, zisizotabirika za kusubiri.
- **Kufafanua upya "kinaendelea" kupunguza kimyakimya kazi inayoendelea:** huhamisha kazi hadi hali isiyohesabika, "imezuiliwa," "imesimamishwa," bila kubadilisha inachukua muda gani kumaliza, na kuvunja ukaguzi wa sheria ya Little ambao ungeikamata vinginevyo.
- **Kudhani kielelezo cha foleni hakihitaji matengenezo mara kinapojengwa:** mifumo ya kufika na uwezo hubadilika mfululizo, na kielelezo kilichochakaa kinazalisha utabiri usio sahihi kwa ujasiri.

## Kielelezo cha ukomavu

- **Ngazi ya 1, Kuanzisha:** Hakuna foleni inayopimwa waziwazi; muda wa kusubiri unajadiliwa kwa visa kama "vitu vinahisi polepole."
- **Ngazi ya 2, Kuendeleza:** Kasi ya kufika, kazi inayoendelea, na muda wa mzunguko vinafuatiliwa kwa angalau bomba moja, lakini havikaguliwi kamwe dhidi ya sheria ya Little wala dhidi ya matumizi kwenye rasilimali za pamoja.
- **Ngazi ya 3, Kusawazisha:** Sheria ya Little ni ukaguzi wa uthabiti wa kawaida kuvuka mabomba ya utoaji, na matumizi yanafuatiliwa waziwazi kwa rasilimali muhimu zaidi za pamoja.
- **Ngazi ya 4, Kusimamia:** Kasi ya mafanikio, kushindwa, na kuruka zinafuatiliwa kando kwa kila foleni muhimu, na maamuzi ya uwezo yanatumia malengo ya matumizi, si wastani wa mahitaji tu.
- **Ngazi ya 5, Kuratibu:** Shirika linaunda kielelezo cha mabomba yake makuu kama foleni ya foleni, linatambua vizuizi vya kweli kwa utaratibu, na linaweza kuonyesha mabadiliko mahususi ya uwezo au mchakato yaliyofanywa kwa sababu ya uchambuzi wa foleni, likiwa na uboreshaji uliopimwa wa muda wa kusubiri wa kuonyesha.

## Mawazo ya kujadili

1. Chagua moja ya mabomba yetu ya utoaji na ukague kama namba zake zinakidhi sheria ya Little leo.
2. Taja rasilimali moja ya pamoja katika shirika letu ambayo watu wengi wangekubali "ina shughuli daima," na upate namba yake halisi ya matumizi.
3. Chati yetu ya upitishaji ingeonekanaje tukiigawanya kuwa kasi za mafanikio, kushindwa, na kuruka kwa robo iliyopita?
4. Tungelazimika kuongeza uwezo kwa rasilimali moja tu ya pamoja mwaka huu, ipi, na ushahidi gani ungehalalisha?

## Mambo muhimu ya kukumbuka

- **Sheria ya Little**, kazi inayoendelea ni sawa na kasi ya kufika mara muda wa mzunguko, ni uthibitisho, si kanuni ya kukisia, na ndio ukaguzi wa bei nafuu zaidi unaopatikana wa kama vipimo vyako vya utoaji vinalingana ndani.
- **Muda wa kusubiri unakua kwa makali, si taratibu, matumizi yanapokaribia uwezo kamili.** Chukulia "daima ina shughuli" kama ishara ya onyo, si sifa.
- Fuatilia **kasi ya kufika, kasi ya mafanikio, kasi ya kushindwa, na kasi ya kuruka** kando; kuzichanganya kuwa namba moja ya upitishaji ndiyo njia kuu ya kuchezea ya mada hii.
- Unda kielelezo cha bomba la hatua nyingi kama **foleni ya foleni**, na uwekeze katika hatua yenye mchanganyiko mbaya zaidi wa matumizi ya juu na kasi ya juu ya kushindwa au kuruka, si hatua iliyo rahisi zaidi kuboresha.
- Pendelea ukaguzi wa bei nafuu, unaoweza kupokelewa, **sheria ya Little na ufuatiliaji wa matumizi**, kuliko simulizi kamili ya foleni ambayo timu chache zitadumisha.

## Marejeo na usomaji zaidi

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve Performance Problems on the Computer Systems You Work With*. CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
