# 1.1 Hvers vegna að mæla hugbúnaðarverkfræði

## Yfirlit og tilgangur

Hugbúnaðarverkfræði stendur gegn mælingu á hátt sem framleiðsla gerir ekki. Færiband framleiðir eins einingar, svo að telja þær segir þér eitthvað raunverulegt. Hugbúnaðarvinna framleiðir einstaka gripi undir sífellt breytilegum kröfum, svo barnaleg talning, á innsendingum, línum, lokuðum miðum, segir þér næstum ekkert um afhent virði. Það bil milli erfiðleikanna við að mæla hugbúnaðarvinnu og hinnar raunverulegu þarfar til að vita hvort hún gengur vel er þar sem öll þessi bók býr. Þetta viðfangsefni snýst um að loka því bili heiðarlega: ekki með því að þykjast að hugbúnaðarvinna sé jafn teljanleg og búnaður, heldur með því að vera nákvæmur um hvað mæling getur og getur ekki gert fyrir verkfræðiskipulagsheild.

Mæling er til að svara spurningum sem skipulagsheild getur annars ekki svarað með vissu: er afhending okkar að verða hraðari eða hægari, eru gæði að batna eða versna, eru verkfræðingar að brenna út, er þessi fjárfesting að skila sér. Án mælikvarða fá þessar spurningar svar frá þeim sem talar sjálfsöruggast í herberginu, yfirleitt æðsta eða sannfærandi manneskjan viðstödd, og það svar er oft rangt. Teymi í [hugbúnaðarverkfræði](https://en.wikipedia.org/wiki/Software_engineering) sem sleppa mælingu forðast ekki að dæma eigin frammistöðu. Þau dæma bara á tilfinningu, sögusögnum og nýleikahlutdrægni í stað sönnunargagna.

Fyrir stór teymi hættir þetta að vera þægilegur aukahlutur og verður byggingarlegt. Teymi sex manna getur deilt hugarlíkani af hvernig gengur gegnum daglegt samtal. Deild sex hundruð manna, dreifð yfir tímabelti og rekstrareiningar, getur það ekki. Í þeim mæli er sameiginlegt, treyst safn talna eina hagnýta staðgengill óformlegrar vitundar sem lítið teymi fær ókeypis. Forysta stórfyrirtækis þarf mælikvarða til að úthluta fjárfestingu yfir tugi teyma sem keppa um sömu fjárlög. Verkfræðiskipulagsheildir hins opinbera þurfa mælikvarða til að sýna löggjafarvaldi og almenningi að úthlutað fé skilaði raunverulegri getu, ekki bara virkni. Í báðum umhverfum er „við unnum hörðum höndum“ ekki sönnunargagn; verjanleg tala er það.

## Lykilmeginreglur

- **Mældu til að læra, ekki til að dæma.** Aðaltilgangur verkfræðimælikvarða er að upplýsa ákvörðun, ekki að stiga manneskju eða teymi.
- **Tala án ákvörðunar er skraut.** Ef engin lesning mælikvarða myndi breyta því sem þú gerir næst á hann ekki heima á mælaborði.
- **Mæling er leið, ekki markmið.** Markmiðið er betri hugbúnaður, afhentur áreiðanlegar, af sjálfbæru teymi. Mælikvarðar eru aðeins til að þjóna því markmiði.
- **Sérhver mælikvarði hefur kostnað.** Tækjavæðing, yfirferðartími og röskunaráhætta hegðunar sem fjallað er um í viðfangsefni 1.2 kosta allt eitthvað. Mælikvarði verður að vinna þann kostnað til baka.
- **Þögn er líka ákvörðun.** Að velja að mæla ekki eitthvað er val með afleiðingum, ekki hlutlaust sjálfgefið.

## Ráðleggingar

### Byrjaðu á ákvörðuninni, ekki mælaborðinu

Áður en þú tækjavæðir nokkuð skaltu nefna ákvörðunina sem mælikvarðinn mun upplýsa. „Við viljum vita hvort nýja afhendingarleiðslan okkar dró úr atvikatíðni“ er spurning í lögun ákvörðunar; „skulum rekja allt sem tólið getur flutt út“ er það ekki. Að vinna afturábak frá ákvörðun heldur mælikvarðasafninu litlu og heldur hverri flís verjanlegri þegar einhver spyr hvers vegna hún er til. Ef þú getur ekki nefnt ákvörðunina sem mælikvarði myndi upplýsa, ekki smíða hann enn. Viðfangsefni 1.3 fer dýpra í niðurstöður-fram-yfir-afurðir útgáfuna af þessum aga.

### Aðgreindu greiningarnotkun frá matsnotkun

Mælikvarði notaður til að greina kerfisvandamál (hvers vegna læðist leiðartími okkar upp) hegðar sér algerlega öðruvísi en sami mælikvarði notaður til að meta manneskju eða teymi (hvers leiðartími er verstur). Hið fyrra býður rannsókn og umbætur. Hið síðara býður feluleik og leik, því nú hefur talan orðsporslegar eða fjárhagslegar afleiðingar fastar við sig. Ákveddu skýrt, skriflega, til hvorrar notkunar mælikvarði er, og láttu aldrei greiningarmælikvarða renna yfir í matsnotkun án þess að endurskoða áhættuna vísvitandi. Þessi greinarmunur kemur stöðugt fyrir í gegnum þessa bók og er formgerður í hluta um ekki-markmið mælikvarðasáttmálans sem lýst er í viðfangsefni 1.4.

### Meðhöndlaðu mælingu sem tilgátu, ekki staðreynd

Mælikvarði er staðgengill fyrir eitthvað sem þér er í raun umhugað um, ekki hluturinn sjálfur. Afhendingartíðni er staðgengill afhendingargetu, ekki afhendingargetan sjálf. Meðhöndlaðu hvern mælikvarða sem tilgátu undir stöðugri prófun: fylgir þessi tala enn því sem okkur er umhugað um, eða hefur heimurinn færst og skilið staðgengilinn eftir? Endurskoðaðu þá spurningu á fastri tíðni frekar en að gera ráð fyrir að mælikvarði sem var vel valinn fyrir tveimur árum sé enn vel valinn í dag, einkum þegar tól, teymisskipan eða (sjá 7. hluta) eðli vinnunnar sjálfrar breytist.

### Gerðu fjarveru mælingar sýnilega

Í stórum skipulagsheildum er hættulegasta bilið ekki slæmur mælikvarði, heldur svæði sem enginn mælir yfirleitt því það er erfitt að tækjavæða: þróunarupplifun, núningur milli teyma vegna háðar, rýrnun stofnanaþekkingar. Nefndu þessi bil skýrt í mælikvarðasáttmála þínum frekar en að láta þau vera ósýnileg sjálfgefið. Skipulagsheild sem veit hvað hún mælir ekki, og hvers vegna, er í langtum sterkari stöðu en sú sem hefur hljóðlega gleymt að þessi svæði séu til.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Mikil tækjavæðing, margir mælikvarðar | Víð sýnileiki, færri blindir blettir | Mælaborðsþreyta, stærra leikflatarmál, hærri viðhaldskostnaður |
| Lágmarks, ákvörðunardrifnir mælikvarðar | Einbeiting, lítil yfirbygging, hver mælikvarði verjanlegur | Hætta á að missa af vaxandi vandamáli utan valins safns |
| Mælikvarðar eingöngu til greiningar | Hvetur til heiðarlegrar skýrslugjafar og rannsóknar | Forysta getur samt óformlega notað þá til mats |
| Mælikvarðar bundnir einstaklingsmati | Finnst ábyrgðarfullt, auðvelt að útskýra fyrir framkvæmdastjórum | Sterkur leikhvati; skaðar traust; mælir yfirleitt rangan hlut |

Aðalspennan er **þekja á móti einbeitingu**, og hún er skerpt af **greiningu á móti dómi**. Of fáir mælikvarðar og þú þróar blinda bletti sem birtast aðeins sem kreppa; of margir og enginn getur brugðist við neinum þeirra, meðan hver sem þú festir matsþyngd við býður röskun. Leystu það með því að byrja lágmarks og ákvörðunardrifið, bæta við mælikvarða aðeins þegar tiltekin, nefnd ákvörðun þarfnast hans, og með því að verja mörk greiningar-eingöngu skýrt í stjórnarháttavinnunni í viðfangsefni 1.4 frekar en að láta þau rýrna sjálfgefið.

## Spurningar til að ræða með teyminu

1. **Fyrir hvern mælikvarða á núverandi mælaborði okkar, hvaða ákvörðun myndi góð lesning og slæm lesning hvor um sig kveikja?** Ef báðar lesningar leiða til sömu aðgerðar, eða engrar aðgerðar, er mælikvarðinn skraut. Gangið gegnum mælaborð ykkar flís fyrir flís og knýið fram heiðarlegt svar fyrir hverja. Þessi æfing helmingar reglulega uppblásið mælaborð í einni setu, því mest óreiða safnast af mælikvörðum sem enginn fjarlægir frekar en mælikvörðum sem einhver bætti vísvitandi við af ástæðu sem enn gildir.

2. **Hverjir mælikvarða okkar eru notaðir til greiningar, og hverjir hafa hljóðlega orðið matskenndir?** Mælikvarði smíðaður til að skilja kerfisskorðu getur rekið inn í að vera notaður til að raða teymum eða einstaklingum án þess að nokkur hafi ákveðið það af ásettu ráði, oft gegnum óformlega athugasemd á yfirferðarfundi sem verður að vana. Þegar það rek hefur átt sér stað hættir talan að vera treystandi, því fólk hefur nú ástæðu til að láta hana líta vel út frekar en að gera hana nákvæma. Nefndu ætlaða notkun hvers mælikvarða skriflega og berðu núverandi starfshætti saman við hana.

3. **Hvað erum við ekki að mæla því það er erfitt að tækjavæða, og hvað kostar það bil okkur?** Hættulegustu blindu blettirnir eru þeir sem komast aldrei á mælaborð einmitt því þeir standa gegn auðveldri mælingu: núningur milli teyma vegna háðar, rýrnun stofnanaþekkingar eða hljóðlát söfnun brothættra krókaleiða. Komið með lista yfir hluti sem öllum er einkamál áhyggjuefni en enginn rekur, og verið heiðarleg um hvers vegna.

4. **Ef við eyddum þessum mælikvarða á morgun, hver myndi taka eftir því, og hverju myndu þau tapa?** Mælikvarði sem enginn myndi sakna er mælikvarði sem upplýsir enga ákvörðun. Þessi spurning dregur fram hégómaflísar sem lifa eingöngu af tregðu. Fyrir stóra skipulagsheild með tugi teymismælaborða skiptir þessi klippiagi jafn miklu máli og agi þess að bæta við nýjum mælikvörðum í upphafi.

5. **Hvað kostar hver mælikvarði á mælaborði okkar í raun að framleiða og viðhalda, þar með verkfræðitíminn að baki tækjavæðingunni?** Mælikvarðar eru ekki ókeypis. Leiðslur, mælaborð og yfirferðartíminn sem fer í að ræða tölu bera allt endurtekinn kostnað sem er auðvelt að vanmeta því hann er dreifður yfir mörg smá verk frekar en eina sýnilega línu. Komið með raunverulega tækjavæðingar- og viðhaldsfyrirhöfn ykkar og vegið hana gegn ákvörðunarvirðinu úr spurningu 1.

6. **Hvar hefur mæling orðið staðgengill dómgreindar, og hvar hefur dómgreind orðið staðgengill mælingar?** Báðir bilunarhættir eru raunverulegir. Teymi sem útvistar hverri ákvörðun til mælaborðs tapar samhengisdómgreindinni sem grípur það sem talan missir af; teymi sem hunsar tiltæk gögn í þágu háværustu raddarinnar í herberginu endurtekur einmitt vandann sem þetta viðfangsefni opnar á. Markmiðið er mælikvarðar sem upplýsa dómgreind, ekki mælikvarðar sem koma í stað hennar.

## Geirasjónarhorn

**Sprotafyrirtæki.** Með handfylli verkfræðinga er mest af því sem þetta viðfangsefni varar við, rek í átt að matsnotkun, blindir blettir, mælaborðsuppblástur, auðvelt að forðast einfaldlega því allir tala saman daglega. Áhættan er sú andstæða: að sleppa mælingu alveg því hún finnst eins og yfirbygging sem teymið hefur ekki efni á. Veldu tvær eða þrjár spurningar í lögun ákvörðunar (afhendum við nógu hratt, heldur gæðum) og tækjavæddu aðeins þær.

**Lítil fyrirtæki.** Án sérstaks vettvangs- eða gagnateymis, styðstu við það sem fyrirliggjandi tól þín skýra þegar frá frekar en að smíða sérsniðna tækjavæðingu. Mælaborð greiðsluvinnsluaðila, svartímamælikvarðar stuðningstóls og byggingarsaga CI-veitu þinnar ná yfirleitt ákvörðunum sem skipta mestu máli. Stenstu freistinguna að kaupa sérstakan verkfræðigreiningarvettvang áður en þú hefur sannað að þú munt bregðast við því sem hann segir þér.

**Stórfyrirtæki.** Meginhættan er mælikvarðar sem reka hljóðlega frá greiningu til matsnotkunar þegar þeir rúllast upp gegnum stjórnunarlög, og mælaborð sem vaxa af söfnun því enginn á verkið að klippa þau. Stjórnarhættir (viðfangsefni 1.4) eru ekki valkvæðir í þessum mæli. Staðlaðu skilgreiningar yfir rekstrareiningar og byggðu reglulega afleggingaryfirferð inn í mælikvarðaáætlunina sjálfa.

**Hið opinbera.** Mælikvarðar hér bera oft lögbundna eða fjárlagaþyngd, sem hækkar bæði virði þess að fá þá rétta og kostnað þess að fá þá ranga. Tala skýrð til löggjafarvalds eða eftirlitsaðila þarfnast skjalfestrar aðferðafræði, stöðugrar skilgreiningar yfir skýrslutímabil og heiðarleika um takmarkanir sínar. Meðhöndlaðu „við mælum þetta ekki núna“ sem svar sem þú gætir þurft að verja, ekki einkabilun til að fela.

## Dæmi

**Stórfyrirtæki.** Verkfræðiskipulagsheild alþjóðlegs tryggingafélags hafði vaxið í yfir sextíu scrum-teymi, hvert með eigið óformlegt mælaborð, ekkert sambærilegt við annað. Forysta gat ekki svarað grundvallarspurningu: hver tíu stefnumótandi vettvangsfjárfestinga okkar skilar í raun hraðari hugbúnaði. Lausnin var ekki fleiri mælikvarðar, heldur færri, betri: skipulagsheildin skilgreindi sameiginlegan, ákvörðunardrifinn kjarna DORA-mælikvarða (viðfangsefni 2.10) reiknaðan eins alls staðar úr sömu leiðslugögnum, lagði niður fjörutíu teymissértæk mælaborð og gat loks borið fjárfestingarsvið saman á sameiginlegum grunni innan tveggja ársfjórðunga.

**Hið opinbera.** Stafrænt þjónustuteymi landsskattstofu hafði verið beðið af eftirlitsnefnd að sýna ávöxtun fjölára nútímavæðingaráætlunar. Fyrirliggjandi mælikvarðar teymisins voru alfarið innri og virknibyggðir: sögupunktar kláraðir, sprettir lokaðir. Ekkert af því svaraði raunverulegri spurningu nefndarinnar. Teymið byggði lítið safn niðurstöðumælikvarða í staðinn, miðgildistíma til að leysa skráningarvandamál borgara, upptökuhlutfall stafrænna rása og hlutfall sloppinna galla í nýja kerfinu, og skýrði frá þeim ársfjórðungslega með skjalfestri aðferðafræði. Spurningar nefndarinnar færðust úr „sannið að þið séuð að vinna“ í „hvernig endurtökum við þetta í næstu stofnun“, sem er niðurstaðan sem vel valið mælikvarðasafn á að framleiða.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af vísvitandi mælingu er ákvörðunargæði. Skipulagsheild sem getur sagt, með sönnunargögnum, „leiðartími okkar batnaði um 30% eftir vettvangsfjárfestinguna“ getur varið þá fjárfestingu, endurtekið það sem virkaði og stöðvað það sem gerði það ekki. Skipulagsheild sem reiðir sig á sögusagnir getur ekkert af þessu með vissu, og endar á að rökræða aftur sömu rökin hverja fjárlagalotu því enginn getur bent á tölu sem báðir aðilar treysta.

Kostnaður mælingar er ekki mælaborðið. Það er áframhaldandi agi: tækjavæðing, viðhald skilgreininga og reglubundin klipping sem þetta viðfangsefni mælir með. Sá heildareignarkostnaður er raunverulegur en hóflegur miðað við kostnað valkostsins, sem er stór skipulagsheild sem tekur margmilljóna dollara tækniákvarðanir á grundvelli þess sem rökræddi sannfærandi í herberginu. Ávöxtun mælikvarðaáætlunar eru ekki mælikvarðarnir sjálfir; það eru ákvarðanirnar sem verða betri vegna þeirra.

## Andmynstur og gildrur

- **Að mæla allt sem tólið flytur út:** breytir mælaborði í hávaða og býður leik yfir risastórt yfirborð án samsvarandi ákvörðunarvirðis.
- **Mælikvarðar án nefndrar ákvörðunar:** skraut sem kostar viðhaldsfyrirhöfn og segir engum neitt framkvæmanlegt.
- **Hljóðlátt rek frá greiningu til matsnotkunar:** fljótlegasta leiðin til að eyðileggja traust á tölu.
- **Að meðhöndla mælikvarða sem staðreynd frekar en tilgátu:** staðgengill sem var réttur fyrir tveimur árum kann að vera rangur í dag, og enginn athugar.
- **Að rugla fjarveru slæmrar tölu við nærveru góðrar:** mælikvarði sem þú lítur aldrei á getur ekki sagt þér að eitthvað sé að.
- **Að byggja mælingargetu áður en ákveðið er hvað á að ákveða:** tækjavæðing í leit að spurningu sóar raunverulegum verkfræðitíma.

## Þroskalíkan

- **Stig 1, Upphaf:** Mælikvarðar, ef þeir eru til yfirleitt, eru tilfallandi, persónulegir þeim sem smíðaði þá og enginn getur sagt hvaða ákvörðun nokkur þeirra upplýsir.
- **Stig 2, Þróun:** Grunnsafn mælikvarða er til fyrir sum teymi, mest afritað úr ramma eða sjálfgefnum stillingum tóls, án skýrrar tengingar aftur við ákvörðun.
- **Stig 3, Stöðlun:** Sérhver rakinn mælikvarði hefur skjalfestan tilgang og skýra flokkun greining-á-móti-mat, beitt samkvæmt yfir skipulagsheildina.
- **Stig 4, Stjórnun:** Mælikvarðar eru yfirfarnir á fastri tíðni gegn ákvörðunum sem þeir upplýsa; mælikvarðar sem hætta að vinna fyrir sér eru lagðir niður, og allt safnið er mælt fyrir kostnað jafnt og virði.
- **Stig 5, Samhæfing:** Mæling er lifandi geta: skipulagsheildin greinir reglulega eigin blinda bletti, prófar hvort staðgenglar hennar fylgi enn raunveruleikanum og meðhöndlar mælikvarðaáætlunina sjálfa sem eitthvað til að bæta, ekki bara viðhalda.

## Hugmyndir til umræðu

1. Hvaða mælikvarða á mælaborði okkar myndum við eiga erfiðast með að réttlæta að halda ef spurt væri í dag?
2. Hvaða ákvörðun höfum við tekið á síðasta ársfjórðungi með mælikvarða, frekar en skoðun?
3. Hvar í skipulagsheild okkar hefur greiningarmælikvarði hljóðlega orðið matskenndur?
4. Hvað óttumst við að mæla, og hvers vegna?
5. Ef mælikvarðaáætlun okkar hyrfi á morgun, hvaða ákvarðanir myndu versna?

## Helstu atriði til að muna

- Mæling er til að þjóna **ákvörðunum**, ekki til að vera til í sjálfri sér; mælikvarði án fastrar ákvörðunar er skraut.
- Haltu **greiningar**notkun aðskilinni frá **mats**notkun, skriflega, og gættu að hljóðlátu reki milli þeirra.
- Meðhöndlaðu hvern mælikvarða sem **tilgátu** um það sem hann táknar, ekki fastmótaða staðreynd, og endurskoðaðu þá tilgátu á fastri tíðni.
- Þögn, að velja að mæla ekki eitthvað, er sjálf ákvörðun með afleiðingum; gerðu blinda bletti sýnilega frekar en að láta þá vera ósýnilega sjálfgefið.
- Heildarkostnaður mælikvarðaáætlunar er raunverulegur; vegðu hann skýrt gegn ákvörðunarvirðinu sem hver mælikvarði veitir.

## Heimildir og frekara lesefni

- *Accelerate: The Science of Lean Software and DevOps*, eftir Nicole Forsgren, Jez Humble og Gene Kim (rannsóknagrunnur niðurstöðubyggðrar verkfræðimælingar).
- *How to Measure Anything*, eftir Douglas W. Hubbard (almennur rammi til að magnbinda hluti sem virðast ómælanlegir).
- *Measuring and Managing Performance in Organizations*, eftir Robert D. Austin (grundvallargreining á þeirri truflun sem mæling getur komið inn í skipulagsheild).
- *Thinking, Fast and Slow*, eftir Daniel Kahneman (vitrænu hlutdrægnin sem gera óstudda dómgreind óáreiðanlegan staðgengil mælingar).
- Google DevOps Research and Assessment (DORA) áætlunin, [dora.dev](https://dora.dev/) (áframhaldandi State of DevOps rannsóknin sem þessi bók sækir í allan tímann).
