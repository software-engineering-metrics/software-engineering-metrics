# 6.2 Atvikamælikvarðar: greining, viðbragð og bati

## Yfirlit og tilgangur

Þetta viðfangsefni mælir hvað gerist þegar villuheimildinni úr viðfangsefni 6.1 er eytt í gegnum raunverulega bilun: **atvik** (incident), óskipulagðan atburð sem rýrir eða rýfur þjónustu. Fjórir mælikvarðar mynda staðlaðan orðaforða til að mæla hversu vel skipulagsheild meðhöndlar þetta: **meðaltími til greiningar (MTTD)**, hve lengi áður en skipulagsheildin tekur eftir að eitthvað er að; **meðaltími til staðfestingar (MTTA)**, hve lengi áður en einhver tekur að sér að bregðast við; **meðaltími til úrlausnar** eða **bata (MTTR)**, hve lengi þar til þjónusta er endurheimt, sama hugtak og viðfangsefni 2.10 fjallaði um sérstaklega fyrir bilanir valdar af afhendingum, nú alhæft á hvert atvik óháð orsök; og **atvikatíðni**, einfaldlega hve oft atvik eiga sér stað yfirleitt.

Meginefni þessa viðfangsefnis, sem endurómar meðhöndlun viðfangsefnis 2.10 á breytingabilunarhlutfalli, er að þessar tölur eru aðeins jafn áreiðanlegar og skipulagsmenningin í kringum að tilkynna og flokka atvik heiðarlega. Teymi sem óttast sök fyrir atvik hefur alla hvata til að vanskýra, seinka staðfestingu til að vera ekki „á vaktinni“, eða flokka alvarlegan atburð sem minni til að verja eigin mælikvarða. **[Sakleysis](https://en.wikipedia.org/wiki/Just_culture)**eftirárýni (blameless postmortem), frumkvöðlað hjá skipulagsheildum eins og Etsy og formgert í SRE-ritum Google, er til sérstaklega til að fjarlægja þann hvata, og þetta viðfangsefni meðhöndlar það sem forsendu áreiðanlegra atvikagagna, ekki valkvæða menningarlega fínleika lagða ofan á mælikvarðana.

Fyrir stór teymi leiða atvikamælikvarðar í ljós hvort greiningar- og viðbragðsgeta skipulagsheildar, afturköllunartól viðfangsefnis 2.10 meðal annarra fjárfestinga, virkar í raun við raunverulegar, fjölbreyttar aðstæður, ekki bara sértæku afhendingarvöldu bilunarsviðsmyndina sem það viðfangsefni náði yfir. Stórfyrirtæki og opinberar skipulagsheildir sem reka mikilvæga innviði reiða sig á þessa mælikvarða bæði innanhúss, til að knýja raunverulega rekstrarbót, og útávið, til að sýna viðskiptavinum, eftirlitsaðilum eða almenningi að atvik séu meðhöndluð hæfilega og batni yfir tíma.

## Lykilmeginreglur

- **Sakleysismenning er forsenda áreiðanlegra atvikagagna**, ekki valkvæð viðbót; ótti við sök spillir tilkynningum, staðfestingarhraða og alvarleikaflokkun jafnt.
- **Greining, staðfesting og úrlausn eru aðgreind stig með aðgreindar lagfæringar.** Hægur heildarbatatími getur falið mjög ólíka undirliggjandi vandamál eftir því hvert stigið er í raun hægt.
- **Atvikatíðni og MTTR eru parað merki**, líkt og breytingabilunarhlutfall og batatími DORA (viðfangsefni 2.10): hvorugt eitt og sér segir alla söguna.
- **Alvarleikaflokkun þarfnast sama strangleika og flokkun sloppinna galla** (viðfangsefni 5.1): samkvæm, skjalfest viðmið, ekki tilfallandi dómgreind.
- **Virði eftirárýni liggur í kerfisbundnu námi, ekki í að framleiða tölu.** Mælikvarðinn er aukaafurð góðrar venju, ekki markmið hennar.

## Ráðleggingar

### Sundurliðaðu atvikaviðbragðstíma í aðgreind stig hans

Mældu og skýrðu frá greiningartíma (frá raunverulegu upphafi bilunar þar til einhver tekur eftir), staðfestingartíma (frá tilkynningu þar til einhver tekur að sér) og úrlausnartíma (frá eignarhaldi þar til raunverulegur bati) sérstaklega, frekar en aðeins einni, blandaðri heildartölu. Hvert stig bendir á ólíka lagfæringu: hæg greining bendir á vöktunar- og viðvörunarbil, hæg staðfesting bendir á bakvaktaferli eða stigmögnunarvanda, og hæg úrlausn bendir á tóla-, keyrsluhandbókar- eða greiningargetubil (viðfangsefni 2.10 fjallar um þetta sérstaklega fyrir bilanir valdar af afhendingum).

### Byggðu og verndaðu sannarlega sakleysiseftirárýniferli

**Sakleysiseftirárýni** rannsakar hvað gerðist og hvers vegna kerfið leyfði því að gerast, með því að forðast skýrt að eigna einstaklingi sök fyrir mistök sem sem sanngjörn manneskja við sömu aðstæður, með sömu upplýsingar, hefði trúlega getað gert. Verndaðu þennan aga virkt: forysta sem fyrirmynd óhefnandi viðbragða við atvikum, skýr skrifleg stefna og vani að spyrja „hvað í kerfi okkar leyfði þessu“ frekar en „hver gerði þetta“ eru allt nauðsynlegar, áframhaldandi fjárfestingar, ekki einskiptis stefnuyfirlýsing.

### Flokkaðu alvarleika með samkvæmum, skjalfestum, endurskoðuðum viðmiðum

Beittu sama aga og viðfangsefni 5.1 mælir með fyrir sloppna galla á alvarleikaflokkun atvika: fastur, skjalfestur kvarði byggður á raunverulegum áhrifum á viðskiptavini eða rekstur, beittur samkvæmt yfir teymi, endurskoðaður reglulega fyrir rek. Ósamkvæm flokkun, sum teymi rausnarleg, sum ströng, gerir atvikagögn allrar skipulagsheildarinnar jafn óáreiðanleg til samanburðar og ósamkvæmt flokkuð gallagögn væru.

### Raktu atvikatíðni og MTTR saman, aldrei í einangrun

Batnandi MTTR samhliða hækkandi atvikatíðni gæti bent til teymis sem verður betra í brunaslökkvistarfi meðan undirliggjandi kerfisáreiðanleiki hnignar í raun; fallandi atvikatíðni samhliða versnandi MTTR gæti bent til sjaldgæfari en alvarlegri, erfiðari-að-greina bilana sem koma í stað tíðra minni. Yfirfarðu bæði saman, speglandi nákvæmlega hraða-og-stöðugleika pörunaragann úr DORA-mælikvörðum 2. hluta, til að fá heiðarlega samanlagða mynd.

### Dragðu út og raktu kerfisbundin aðgerðaratriði úr eftirárýni, ekki bara mælikvarða

Raunverulegt virði eftirárýniferlisins eru sértæku, kerfisbundnu aðgerðaratriðin sem það framleiðir: vantandi viðvörun bætt við, keyrsluhandbók bætt, einstakur bilunarpunktur fjarlægður. Raktu þessi aðgerðaratriði til lúkningar með sama aga og tæknilegi skuldabiðlistinn úr viðfangsefni 4.5, því eftirárýni sem framleiðir innsýn en enga eftirfylgni sóar skipulagsnáminu sem ferlið á að fanga.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Blandaður, ein-talna atvikaviðbragðstímamælikvarði | Einfalt að skýra frá | Felur hvaða tiltekna stig, greining, staðfesting, úrlausn, er raunverulegi vandinn |
| Stigasundurliðaðir atvikamælikvarðar | Greinandi, bendir beint á rétta lagfæringu | Krefst vandlegri tækjavæðingar á hverri stigafærslu |
| Sakabundin atvikayfirferð | Finnst ábyrgðarfull, fullnægir löngun til að eigna ábyrgð | Spillir heiðarleika framtíðartilkynninga og lagar sjaldan raunverulega kerfisorsök |
| Sakleysiseftirárýnivenja | Framleiðir heiðarleg gögn og raunverulegar kerfislagfæringar | Krefst viðvarandi menningarfjárfestingar og forystuaga til að viðhalda |

Aðalspennan er **aðdráttarafl einstaklingsábyrgðar á móti hagnýtri þörf fyrir heiðarlegar tilkynningar**. Að kenna einstaklingi um eftir atvik getur fundist fullnægjandi og litið út eins og ákveðin forysta, en það spillir áreiðanlega gögnum hvers framtíðaratviks, því fólk vanskýrir, seinkar staðfestingu eða rangflokkar alvarleika þegar það óttast persónulegar afleiðingar. Leystu spennuna í þágu sakleysisvenju vísvitandi og samkvæmt, með skilningi á að raunveruleg ábyrgð kemur af því að laga kerfið sem leyfði bilun, ekki af því að refsa einstaklingnum sem var tilviljanakennt viðstaddur þegar hún átti sér stað.

## Spurningar til að ræða með teyminu

1. **Sundurliðum við atvikaviðbragðstíma í greiningar-, staðfestingar- og úrlausnarstig, eða rekjum við aðeins eina blandaða tölu?** Ef aðeins blönduð tala er til, veljið nýlegt verulegt atvik og reynið að endurgera stigasundurliðunina eftir á til að sjá hvað hún hefði leitt í ljós.

2. **Myndi teymi okkar sannarlega trúa að eftirárýniferli okkar sé sakleysisbundið, eða mótar ótti við afleiðingar enn hvernig atvik eru tilkynnt og rædd?** Spyrjið þessarar beint og heiðarlega; yfirlýst sakleysisstefna sem er ekki lifuð í raun framleiðir ekki áreiðanleg gögn.

3. **Myndu tvö ólík teymi flokka alvarleika sama atviks eins?** Veljið raunverulegt, tvírætt fyrra atvik og látið fulltrúa ólíkra teyma flokka það sjálfstætt, berið síðan saman niðurstöður.

4. **Yfirförum við atvikatíðni og MTTR saman, eða fær annað meiri athygli en hitt?** Athugið raunverulega skýrslu- og yfirferðarvenju ykkar fyrir þessa pörun, speglandi sama aga og viðfangsefni 2.10 mælir með fyrir DORA-stöðugleikamælikvarða.

5. **Hvaða hlutfall eftirárýni-aðgerðaratriða okkar síðustu sex mánuði hefur í raun verið lokið?** Ef þið rekjið þetta ekki núna er það bil vert að nefna; eftirárýniferli með lágt aðgerðaratriðalúkningarhlutfall framleiðir innsýn án eftirfylgni.

6. **Hefur ótti við sök nokkurn tímann valdið því að einhver seinkaði að tilkynna eða staðfesta atvik?** Þetta er óþægileg en mikilvæg spurning; heiðarlegt „já, og hér er hvað gerðist“ svar er langtum verðmætara fyrir heilsu atvikaferlis ykkar en reflexívt „nei“.

## Geirasjónarhorn

**Sprotafyrirtæki.** Atvikaviðbragð er oft óformlegt af nauðsyn með lítið teymi, og formleg stigasundurliðun kann að vera óþörf í fyrstu. Venjan sem vert er að taka upp snemma er sakleysissamræðuvenjur frá allra fyrsta atviki, því menningarvenjur settar snemma eru langtum auðveldari að viðhalda en að bæta við síðar þegar sakahneigð mynstur hefur fest rætur.

**Lítil fyrirtæki.** Einföld, sameiginleg atvikaskrá, jafnvel óformleg, með grunnalvarleikaflokkun og stuttum sakleysisafturlitum fyrir allt verulegt, fangar mest af virði þessa viðfangsefnis án þess að þurfa fáguð tól eða sérstakan atvikastjórnunarvettvang.

**Stórfyrirtæki.** Samkvæm alvarleikaflokkun og sannarleg, viðvarandi sakleysismenning eru báðar erfiðari að viðhalda í stórum mæli, og báðar nauðsynlegar fyrir áreiðanleg, sambærileg atvikagögn yfir tugi teyma. Fjárfestu í skjalfestum flokkunarviðmiðum, reglulegri endurskoðun og virkri fyrirmynd forystu um sakleysisviðbrögð, því menningarrek í átt að sök hefur tilhneigingu til að læðast inn smám saman án vísvitandi, áframhaldandi mótvægis.

**Hið opinbera.** Atvik sem hafa áhrif á opinbera þjónustu eða mikilvæga innviði sæta oft ytri rýni, fjölmiðlaathygli eða formlegri rannsókn, sem skapar sterkan þrýsting í átt að sakaleit sem getur grafið beint undan innri sakleysisvenju ef ekki virkt stýrt. Viðhaldið skýrum innri sakleysisaga fyrir raunverulegt kerfisnám, aðskildum frá nokkru ytra ábyrgðarferli sem kann að fylgja alvarlegu atviki, og komdu þeim greinarmun skýrt á framfæri við starfsfólk.

## Dæmi

**Stórfyrirtæki.** Verkfræðimenning greiðslufyrirtækis hafði árum saman óformlega meðhöndlað atvik sem eitthvað til að forðast að viðurkenna fljótt til að líta ekki ábyrgt út, sem leiddi til stöðugt lélegs greiningar- og staðfestingartíma sem forysta eignaði í fyrstu ófullnægjandi vöktunartólum. Menningarbreyting í átt að sannarlegri sakleysiseftirárýni, þar með forysta sem hrósaði opinberlega og sértækt skjótri, heiðarlegri atvikastaðfestingu en ekki bara skjótri úrlausn, framleiddi mælanlega bót á bæði greiningar- og staðfestingartíma innan tveggja ársfjórðunga, sem leiddi í ljós að upphaflegi flöskuhálsinn hafði verið menningarlegur, ótti við sök, frekar en tæknilegur, ófullnægjandi tól, eins og í fyrstu var gert ráð fyrir.

**Hið opinbera.** Rekstrarmiðstöð almenningssamgöngustofnunar hafði sögulega flokkað nær sérhverja þjónusturöskun sem „minni“ í innri atvikaskrá sinni, mynstur sem nýr öryggisstjóri fann grunsamlegt í ljósi þrálátra, óformlegra kvartana frá starfsfólki á vettvangi um alvarleg, endurtekin vandamál. Rannsókn leiddi í ljós að „minni“ flokkunin forðaðist íþyngjandi formlegt tilkynningarferli sem krafist var fyrir hærri alvarleika, sem skapaði óviljandi hvata til vanflokkunar. Stofnunin einfaldaði formlegar tilkynningarkröfur sínar fyrir alla alvarleika og verndaði starfsfólk skýrt frá sök fyrir heiðarlega alvarleikatilkynningu, og síðari atvikagögn sýndu nákvæmara, og talsvert hærra, hlutfall sannarlega verulegra truflana, sem gaf forystu loks heiðarlega mynd til að forgangsraða innviðafjárfestingu gegn.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af sannarlega sakleysisbundnum, vel flokkuðum, stigasundurliðuðum atvikamælikvörðum eru heiðarleg gögn sem raunverulega knýja kerfisbundna bót, frekar en huggandi en fölsk mynd framleidd af óttadrifinni vanskýrslu eða rangflokkun. Greiðslufyrirtækisdæmið hér að ofan sýnir þetta áþreifanlega: menningarlagfæring, ekki tólafjárfesting, leysti það sem forysta hafði rangt greint sem tæknilegan greiningarvanda.

Heildareignarkostnaður er aðallega menningar- og ferlisfjárfesting: viðvarandi skuldbinding forystu við sakleysisvenju, skjalfest og endurskoðuð alvarleikaflokkunarviðmið, og agi til að rekja eftirárýni-aðgerðaratriði til lúkningar. Sú fjárfesting kostar minna en valkosturinn, atvikamælikvarðaáætlun sem framleiðir sjálfsörugg, röng gögn því ótti hefur spillt hverju inntaki í hana.

## Andmynstur og gildrur

- **Sakabundin atvikayfirferð:** spillir tilkynningaheiðarleika, staðfestingarhraða og alvarleikaflokkun fyrir hvert framtíðaratvik.
- **Að rekja aðeins blandaða viðbragðstímatölu:** felur hvaða tiltekna stig, greining, staðfesting, úrlausn, er í raun vandinn.
- **Ósamkvæm alvarleikaflokkun yfir teymi:** gerir atvikagögn allrar skipulagsheildarinnar óáreiðanleg til samanburðar.
- **Að yfirfara atvikatíðni og MTTR í einangrun:** missir af samanlagðri, heiðarlegri mynd sem parað merki veitir.
- **Eftirárýniferli sem framleiðir innsýn en engin lokið aðgerðaratriði:** sóar skipulagsnáminu sem ferlið á að fanga.
- **Yfirlýst sakleysisstefna sem forysta lifir ekki í raun:** framleiðir sömu óttadrifnu gagnaspillingu og opinskátt sakahneigð menning.

## Þroskalíkan

- **Stig 1, Upphaf:** Atvikaviðbragð er óformlegt, tilkynningar ósamkvæmar, og sakahneigð menning letur virkt heiðarlegar tilkynningar.
- **Stig 2, Þróun:** Einhver atvikarakning er til, en alvarleikaflokkun er ósamkvæm og sakleysisvenja er yfirlýst en ekki samkvæmt lifuð.
- **Stig 3, Stöðlun:** Stigasundurliðaðir atvikamælikvarðar með samkvæmri, skjalfestri alvarleikaflokkun eru raktir í allri skipulagsheildinni, með sannarlega sakleysiseftirárýnivenju.
- **Stig 4, Stjórnun:** Atvikatíðni og MTTR eru yfirfarin saman, eftirárýni-aðgerðaratriði eru rakin til lúkningar, og flokkun er endurskoðuð reglulega fyrir samkvæmni.
- **Stig 5, Samhæfing:** Skipulagsheildin hefur sannaða, viðvarandi afrekaskrá sakleysisvenju sem framleiðir heiðarleg gögn og raunverulegar kerfislagfæringar, og atvikamælikvarðar upplýsa beint og áreiðanlega áreiðanleikafjárfestingarákvarðanir.

## Hugmyndir til umræðu

1. Myndi eftirárýniferli okkar standast heiðarlegt próf á hvort það sé sannarlega sakleysisbundið?
2. Hver er stigasundurliðun, greining, staðfesting, úrlausn, hægasta nýlega atviks okkar?
3. Myndu tvö teymi flokka alvarleika síðasta verulega atviks okkar eins?
4. Hve hátt hlutfall nýlegra eftirárýni-aðgerðaratriða okkar hefur í raun verið lokið?
5. Hefur ótti við sök nokkurn tímann mótað hvernig atvik var tilkynnt eða rætt í okkar teymi?

## Helstu atriði til að muna

- **Sakleysiseftirárýnimenning er forsenda** áreiðanlegra atvikagagna; ótti við sök spillir tilkynningum, staðfestingarhraða og flokkun jafnt.
- Sundurliðaðu viðbragðstíma í **greiningar-, staðfestingar- og úrlausnar**stig, hvert bendir á ólíka lagfæringu.
- Flokkaðu alvarleika með **samkvæmum, skjalfestum, endurskoðuðum viðmiðum**, speglandi aga viðfangsefnis 5.1 um sloppna galla.
- Yfirfarðu **atvikatíðni og MTTR saman**, aldrei í einangrun, sami pörunaragi og stöðugleikamælikvarðar DORA.
- Raktu **eftirárýni-aðgerðaratriði til lúkningar**; mælikvarðinn er aukaafurð góðrar venju, ekki markmið hennar.

## Heimildir og frekara lesefni

- *Site Reliability Engineering: How Google Runs Production Systems*, ritstýrt af Betsy Beyer, Chris Jones, Jennifer Petoff og Niall Richard Murphy (sakleysiseftirárýnivenja og atvikamælikvarðar).
- *The Site Reliability Workbook*, ritstýrt af Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara og Stephen Thorne (hagnýtar leiðbeiningar um atvikaviðbragð og eftirárýni).
- *The Field Guide to Understanding Human Error*, eftir Sidney Dekker (grundvallarrökin fyrir kerfisbundinni, sakleysisbundinni bilunarrannsókn).
- Allspaw, John, „Blameless PostMortems and a Just Culture,“ Etsy Engineering Blog (2012): snemmbúin, áhrifamikil framsetning sakleysisvenju í hugbúnaðarrekstri.
