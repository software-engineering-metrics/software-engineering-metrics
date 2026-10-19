# Inngangur

Þessi bók er vinnuhandbók um að mæla [hugbúnaðarverkfræði](https://en.wikipedia.org/wiki/Software_engineering) vel, fyrir teymi allt frá fimm manna sprotafyrirtæki til margra þúsunda verkfræðinga stórfyrirtækis eða opinberrar stofnunar sem skýrir frá gegn lögbundnum frammistöðuramma. Hún er til því mest mælikvarðaráðgjöf er annaðhvort rammayfirlit án rekstrarlegra smáatriða, eða eiginleikalisti tólasala. Þessi bók reynir að vera hvorugt: hún er afdráttarlaus um hvað á að mæla, skýr um hvernig hver mælikvarði er leikinn, og hagnýt um hvernig á að reka mælikvarðaáætlun sem teymi treystir frekar en óttast.

## Fyrir hvern þetta er

Aðalmarkhópurinn er fólkið sem velur hvað skipulagsheild mælir: verkfræðileiðtogar, æðri og aðalverkfræðingar, vettvangs- og DevOps-teymi, og áætlana- og vörustjórar. Aukamarkhópurinn er hver verkfræðingur sem vill skilja rökin að baki mælaborði sem honum er sagt að hreyfa, og hvernig á að véfengja mælikvarða sem hefur hætt að þjóna tilgangi sínum. Þú þarft ekki að lesa hana frá kápu til kápu. Hvert viðfangsefni stendur eitt og sér, setur meginreglur sínar fram fyrst og endar á hagnýtum lykilatriðum, þroskalíkani og heimildum.

## Hvernig bókin er skipulögð

Bókin er skipt í **hluta** (heilar tölur) og **viðfangsefni** (tugabrot). Viðfangsefni **N.0** kynnir hvern hluta og útskýrir hvernig viðfangsefni hans tengjast; viðfangsefni **N.1, N.2, …** fjalla um viðfangsefnin á dýpt.

- **1. hluti, Grundvöllur mælinga:** hvers vegna mæla yfirleitt, lögmál Goodharts og sálfræði leiks, að velja niðurstöður fram yfir afurðir, stjórnarhættir og eignarhald, gagnauppsprettur, og tölfræðilæsið sem sérhver mælikvarðaáætlun þarfnast.
- **2. hluti, Flæðimælikvarðar:** Flæðiramminn, flæðiatriði hans og fimm flæðimælikvarðar, ferlitími, biðraðafræði, klassískir Lean-virðisstraumsmælikvarðar, mælikvarðar sameiningarbeiðna og kóðayfirferðar, og DORA-ramminn sem tilvísunarviðfangsefni.
- **3. hluti, Þróunarupplifun og SPACE-ramminn:** SPACE-ramminn og víddirnar fimm, og hvernig á að keyra könnun á þróunarupplifun án þess að hún verði vinsældakeppni.
- **4. hluti, Kóða- og gæðamælikvarðar:** flækjustig, prófþekja og skilvirkni, velta og heitreitir, stöðugreining, tæknileg skuld og skjölun.
- **5. hluti, Vöru- og viðskiptamælikvarðar:** sloppnir gallar, upptaka eiginleika, niðurstöður viðskiptavina og rekstrar, einingarhagfræði og ávöxtun fjárfestingar.
- **6. hluti, Áreiðanleika-, rekstrar- og öryggismælikvarðar:** þjónustustigsvísar, -markmið og villuheimildir, atvikamælikvarðar, bakvakt og geta, og öryggis- og veikleikamælikvarðar.
- **7. hluti, Mælikvarðar á öld gervigreindar:** viðmiðaskipti kynslóðargervigreindar, hvernig á að mæla gervigreindaraðstoðaða þróun, áhætta mælikvarðaverðbólgu, og hvers vegna niðurstöðufjarmæling verður pólstjarnan þegar afurðir verða ódýrar.
- **8. hluti, Að byggja mælikvarðaáætlun:** að hanna mælaborð, smíða eða kaupa, að útfæra mælikvarða án þess að ala á ótta, þroskalíkan og stigvaxandi upptökuvegvísir.
- **9. hluti, Viðaukar:** orðalisti, yfirlit yfir skilgreiningar mælikvarða og formúlur, gátlistar, sniðmát, þroskasjálfsmat, heimildir og atriðisorðaskrá.

## Leiðarljós

Átta meginreglur mynda hrygg bókarinnar:

1. **Mælikvarði sem verður markmið hættir að vera góður mælikvarði.** Hannaðu gegn lögmáli Goodharts frá upphafi, ekki eftir að röskunin birtist.
2. **Niðurstöður fram yfir afurðir fram yfir virkni.** Vegðu sérhvert mælikvarðasafn í átt að því sem breyttist fyrir viðskiptavininn eða reksturinn, ekki því sem teymið framleiddi eða hve upptekið það var.
3. **Sérhver hvatabundinn mælikvarði þarfnast varnarmælikvarða.** Paraðu hraða við gæði, afköst við stöðugleika, og eltu aldrei eina tölu í einangrun.
4. **Mældu kerfi, ekki fólk.** Mælikvarði sem einstaklingsgerir sök brýtur traust og býður leik; mælikvarði sem afhjúpar kerfisskorðu býður umbætur.
5. **Kjóstu tækjavæðingu fram yfir sjálfsskýrslu þar sem þú getur fengið hana, og sjálfsskýrslu þar sem þú getur það ekki.** Afhendingartalningar koma úr leiðslunni; ánægja kemur af því að spyrja.
6. **Mælikvarði vinnur fyrir sér eða hann er lagður niður.** Sérhver flís á mælaborði kostar athygli. Klipptu vísvitandi.
7. **Skilgreiningar skipta meira máli en mælaborð.** Tvö teymi sem reikna „leiðartíma“ ólíkt munu eyða meiri tíma í að rífast um töluna en að bregðast við henni.
8. **Kynslóðargervigreind er ástæða til að endurskoða, ekki bara endurmiða.** Þegar afurðir verða ódýrar þurfa mælikvarðar byggðir kringum afurðamagn nýja varnarmælikvarða, ekki bara ný markmið.

## Þvert á hluta

[Lögmál Goodharts](https://en.wikipedia.org/wiki/Goodhart%27s_law) er það eina leiðarstef sem liggur í gegnum sérhvern hluta þessarar bókar, ekki bara viðfangsefni 1.2. Sérhvert viðfangsefni um mælikvarðafjölskyldu lýsir hvernig mælikvarðinn sem það nær yfir er leikinn og hvaða varnarmælikvarði grípur það. Skýrsluskyldur stórfyrirtækja og hins opinbera, þar sem mælikvarði getur borið lögbundna eða samningsbundna þyngd, eru meðhöndlaðar sem hönnunarinntak í gegnum allt, ekki eftiráhugsun bundin við eitt viðfangsefni.

## Hvernig á að nota hana

Taktu upp stigvaxandi; ekki stórhvella mælaborði á teymi sem hefur aldrei haft slíkt. Byrjaðu þar sem sársaukinn er mestur, notaðu þroskalíkan hvers viðfangsefnis til að staðsetja þig heiðarlega, og láttu upptökuvegvísinn (viðfangsefni 8.5) raða vinnunni. Markmiðið er ekki veggur af grafum. Það er skipulagsheild sem getur sagt, með sönnunargögnum, hvort það sem hún gerir virkar, og sem treystir eigin tölum nóg til að bregðast við þeim.
