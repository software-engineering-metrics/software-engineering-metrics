# 6.1 Þjónustustigsvísar, markmið og villuheimildir

## Yfirlit og tilgangur

**[Áreiðanleikaverkfræði þjónustu](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE)**, agi sem var frumkvöðlað hjá Google og skjalfestur í bókinni *Site Reliability Engineering*, lagði til orðaforða sem þetta viðfangsefni byggir beint á: **þjónustustigsvísir (SLI)** er beint mælt merki um heilsu þjónustu, svartími beiðna, villutíðni, tiltækileiki. **Þjónustustigsmarkmið (SLO)** er markbil þess vísis, 99,9% beiðna heppnast innan 200 millisekúndna, til dæmis. Og **villuheimild** (error budget) er leyfð skortur, 0,1% beiðna sem leyfilegt er að mistakist, meðhöndluð ekki sem galli til að útrýma heldur sem eyðanleg auðlind sem má nota vísvitandi til að taka á sig áhættu: að afhenda áhættusama breytingu, keyra tilraun eða einfaldlega samþykkja að fullkominn áreiðanleiki er hvorki náanlegur né, fram yfir ákveðinn punkt, þess virði sem hann kostar.

Þessi síðasta hugmynd, villuheimild sem eyðanleg auðlind frekar en tala til að lágmarka í átt að núlli, er mikilvægasta einstaka hugtak þessa viðfangsefnis og að því er virðist þessa hluta í heild. Hún leysir spennu sem hrjáir margar skipulagsheildir: verkfræði vill afhenda eiginleika og taka hæfilega áhættu; rekstur vill hámarksstöðugleika. Án sameiginlegrar, magnbundinnar villuheimildar verður þetta endalaus, pólitískt hlaðin samningaviðræða. Með einni verður þetta einföld, hlutlæg regla: eyddu frjálslega meðan heimild er eftir, hægðu á og forgangsraðaðu stöðugleikavinnu sjálfkrafa þegar hún er uppurin. Þetta breytir heimspekilegum ágreiningi í reikningslegan.

Fyrir stór teymi eru þjónustustigsmarkmið og villuheimildir það sem gerir áreiðanleika mælanlegan og samningshæfan frekar en óaðgengilegt, ótilgreint algildi sem sérhvert teymi mistekst hljóðlega að uppfylla meðan það finnur óljósa sektarkennd. Stórfyrirtæki nota þjónustustigsmarkmið til að setja skýrar, samningsbundnar væntingar milli teyma og við viðskiptavini; opinberar skipulagsheildir sem reka mikilvæga opinbera innviði nota þau til að setja verjanleg, opinberlega réttlætanleg áreiðanleikamörk frekar en ómögulegan fullkomleikastaðal sem ekkert raunverulegt kerfi getur viðhaldið.

## Lykilmeginreglur

- **100% áreiðanleiki er rangt mark fyrir næstum hvaða kerfi sem er.** Það er yfirleitt óaðgengilegt, og að sækjast eftir því fram yfir ákveðinn punkt fórnar virkt hraða án nokkurs marktæks notendaávinnings.
- **Þjónustustigsmarkmið ætti að endurspegla það sem notendur taka í raun eftir og láta sig varða**, ekki handahófskennda kringlótta tölu valda því hún hljómar fullvissandi.
- **Villuheimildin breytir áreiðanleika í eyðanlega auðlind**, sem gefur bæði verkfræði og rekstri sameiginlega, hlutlæga reglu um hvenær á að afhenda hratt og hvenær á að hægja á.
- **Þjónustustigsvísa verður að mæla frá raunverulegri upplifun notandans** hvar sem mögulegt er, ekki bara frá sjálfskýrðri heilsu innra kerfis.
- **Þegar villuheimildin klárast kveikir það fyrirfram ákveðið, samþykkt viðbragð**, ekki tilfallandi rifrildi í hvert sinn sem það gerist.

## Ráðleggingar

### Veldu þjónustustigsvísa sem endurspegla raunverulega notendaupplifun

Veldu vísa mælda sem næst raunverulegri notendaupplifun og mögulegt er: árangurshlutfall beiðna og svartími mældur á jaðrinum eða álagsjafnara, ekki bara innri þjónustuheilsuathuganir sem geta skýrt frá „heilbrigt“ meðan notendur upplifa raunveruleg vandamál. Vísir sem mælir eitthvað sem notandi tekur aldrei eftir, innri hlutur er tæknilega uppi meðan öll beiðnin bilar samt, mælir ranga hlutinn hversu auðvelt sem hann kann að vera að tækjavæða.

### Settu þjónustustigsmarkmiðið eftir því sem notendur þurfa í raun, ekki handahófskenndri kringlóttri tölu

Stenstu viðbragðið að setja mark eins og „99,99% uppitími“ einfaldlega því það hljómar áhrifamikið strangt. Rannsakaðu í staðinn hvaða áreiðanleikastig notendur taka sannarlega eftir og láta sig varða, upplýst af sögulegum atvikagögnum, notendarannsókn og sýndum kostnaði við að ná hverri viðbótarhækkun áreiðanleika, því að fara úr 99,9% í 99,99% kostar oft langtum meiri verkfræðifyrirhöfn en að fara úr 99% í 99,9% gerði, fyrir minnkandi og að lokum hverfandi notendaskynjanlegan ávinning.

### Meðhöndlaðu villuheimildina sem eyðanlega auðlind með fyrirfram ákveðnu viðbragði við uppurð

Reiknaðu villuheimildina beint út frá þjónustustigsmarkmiðinu (99,9% tiltækileikamark yfir 30 daga leyfir um það bil 43 mínútur af leyfðum niðurtíma) og raktu eyðslu gegn henni samfellt. Komdu þér saman, fyrirfram og fyrir hvaða tiltekið atvik sem er, um hvað gerist þegar heimildin er uppurin: algeng, árangursrík stefna er að eiginleikavinna er sett á bið og forgangur teymisins færist sjálfkrafa í áreiðanleikavinnu þar til heimildin jafnar sig. Þessi fyrirfram ákveðna regla fjarlægir þörfina á að rökræða málamiðlunina aftur undir þrýstingi við hvert einstakt atvik.

### Notaðu villuheimildina til að taka vísvitandi, upplýstar áhættuákvarðanir

Heilbrigð, óeydd villuheimild er ekki eitthvað til að safna; hún er leyfi til að taka hæfilega áhættu, afhenda breytingu með hækkaðri en ásættanlegri áhættu, keyra óreiðuverkfræðitilraun (viðfangsefnið um óreiðuverkfræði í systurbókinni `software-engineering-guide` fjallar beint um þetta), eða samþykkja áhættusamari byggingarbreytingu, því heimildin er til sérstaklega til að vera eydd vísvitandi frekar en varðveitt ósnert. Villuheimild sem er aldrei eydd bendir annaðhvort til of íhaldssams teymis eða þjónustustigsmarkmiðs sem er sett of laust miðað við raunverulega náðan áreiðanleika, hvort tveggja vert að rannsaka.

### Yfirfarðu og endurskoðaðu þjónustustigsmarkmið reglulega, byggt á sönnunargögnum, ekki tregðu

Þjónustustigsmarkmið sett fyrir árum endurspeglar kannski ekki lengur núverandi væntingar notenda, kerfisbyggingu eða viðskiptaforgangsröðun. Yfirfarðu þjónustustigsmarkmið á reglulegri tíðni, athugaðu sögulega náðan áreiðanleika, endurgjöf notenda og hvort markið táknar enn marktækan málamiðlunarpunkt frekar en annaðhvort auðnáð mark sem mætti herða til að gera meiri hraða mögulegan annars staðar, eða óraunhæft mark sem teymið hefur í reynd gefist upp á að ná.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Ekkert formlegt þjónustustigsmarkmið (óbeint „eins áreiðanlegt og hægt er“) | Engin uppsetningaryfirbygging | Endalaus, ójarðtengd samningaviðræða milli hraða og stöðugleika; engin sameiginleg regla |
| Metnaðarfullt, mjög hátt þjónustustigsmarkmið (99,99%+) | Gefur til kynna alvöru um áreiðanleika | Oft óþarfur kostnaður; minnkandi ávöxtun umfram það sem notendur taka í raun eftir |
| Sönnunarbyggt, notendaupplifunarjarðtengt þjónustustigsmarkmið | Endurspeglar raunverulegt virði; verjanlegt og náanlegt | Krefst raunverulegra gagna og greiningar til að setja rétt |
| Villuheimild með fyrirfram ákveðnu uppurðarviðbragði | Fjarlægir tilfallandi samningaviðræður; hlutlæg, hröð ákvarðanataka | Krefst stuðnings skipulagsheildar og aga til að virða í raun fyrirfram ákveðnu regluna |

Aðalspennan er **metnaður á móti náanleika**. Hátt, metnaðarfullt þjónustustigsmarkmið finnst eins og það gefi til kynna alvöru um gæði, en að sækjast eftir áreiðanleika umfram það sem notendur taka í raun eftir fórnar raunverulegum hraða fyrir engan sannarlegan ávinning, og óraunhæft mark sem teymið nær aldrei kennir öllum að hætta að taka þjónustustigsmarkmiðið alvarlega yfirleitt. Leystu spennuna með því að jarðtengja þjónustustigsmarkmiðið í raunverulegum sönnunargögnum, hvað taka notendur eftir, hvað hefur kerfið sögulega náð, hvað kostar hver viðbótarhækkun, frekar en í metnaði eða löngun til að líta strangt út á stigatöflu.

## Spurningar til að ræða með teyminu

1. **Er núverandi þjónustustigsmarkmið okkar jarðtengt í sönnunargögnum um það sem notendur taka í raun eftir, eða var það sett metnaðarfullt því há tala fannst viðeigandi alvarleg?** Rekið uppruna núverandi marks ykkar, ef þið getið, og metið heiðarlega hvort það endurspeglar raunverulega notendarannsókn eða verkfræðiinnsæi eitt.

2. **Höfum við fyrirfram ákveðið, samþykkt viðbragð við villuheimildaruppurð, eða er málamiðlunin rædd aftur í hvert sinn sem það gerist?** Ef heiðarlega svarið er það síðara er það bil vert að loka áður en næsta atvik neyðir rifrildið fram undir þrýstingi.

3. **Er villuheimild okkar nokkurn tímann í raun eydd vísvitandi, á útreiknaða áhættubreytingu eða tilraun, eða er hún aðeins nokkurn tímann neytt óvart gegnum atvik?** Heimild sem er aldrei eydd vísvitandi gæti bent til of varkárs teymis sem missir af lögmætum tækifærum sem heimildin er til að gera kleift.

4. **Eru þjónustustigsvísar okkar mældir frá raunverulegri notendaupplifun, eða frá innri kerfisheilsu sem endurspeglar kannski ekki það sem notendur mæta í raun?** Athugið núverandi tækjavæðingu ykkar gegn þessum sértæka greinarmun; það er algengt bil jafnvel í annars þroskuðum áreiðanleikaáætlunum.

5. **Hvenær yfirfórum við síðast þjónustustigsmarkmið okkar gegn núverandi sönnunargögnum, og hefur eitthvað breyst, væntingar notenda, kerfisbygging, viðskiptaforgangsröðun, sem myndi réttlæta að endurskoða það?** Ef þið munið ekki eftir nýlegri yfirferð er sú fjarvera sjálf vert að ræða.

6. **Hvað myndi það kosta okkur, í verkfræðifyrirhöfn, að færa núverandi þjónustustigsmarkmið okkar upp um eina „nínu“ til viðbótar af áreiðanleika, og væri sá kostnaður réttlættur af nokkrum sannarlegum notendaávinningi?** Þessi áþreifanlega kostnaðar-ábatarömmun hjálpar að jarðtengja metnaðar-á-móti-náanleika spennuna í raunverulegum tölum frekar en óhlutstæðum óskum.

## Geirasjónarhorn

**Sprotafyrirtæki.** Formleg þjónustustigsmarkmið eru oft óþörf mjög snemma, þegar teymið getur brugðist við áreiðanleikavanda beint og óformlega. Taktu upp að minnsta kosti gróft, óformlegt þjónustustigsmarkmið um leið og þú hefur raunverulega greiðandi viðskiptavini sem eru háðir uppitíma, því agi skýrs marks, jafnvel lauslega rakins, hjálpar að forgangsraða áreiðanleikavinnu gegn eiginleikaþrýstingi fyrr en flest ung fyrirtæki átta sig á.

**Lítil fyrirtæki.** Flestir nútíma hýsingar- og vöktunarvettvangar skýra grunnuppitíma- og svartímagögn með lágmarksuppsetningu; notaðu þetta til að setja einfalt, náanlegt þjónustustigsmarkmið frekar en metnaðarfullt sem þú getur ekki raunhæft rakið eða brugðist við með takmarkaða rekstrargetu.

**Stórfyrirtæki.** Þjónustustigsmarkmið í þessum mæli liggja oft til grundvallar samningsbundnum þjónustustigssamningum með raunverulegum fjárhagslegum afleiðingum, sem gerir sönnunarbyggða markasetningu og agaða villuheimildastjórn sérstaklega mikilvæga. Fjárfestu í sannarlegum notendaupplifunarjarðtengdum þjónustustigsvísum frekar en hentugum innri heilsuathugunum, og komdu á fyrirfram ákveðinni uppurðarviðbragðsstefnu formlega, með stuðningi framkvæmdastjórnar, áður en hennar er þörf undir þrýstingi.

**Hið opinbera.** Áreiðanleikamörk opinberra aðila fyrir mikilvæga innviði bera stundum lagalega eða reglugerðarþyngd, og óraunhæft, ónáð mark uppgötvað við úttekt eða opinbert atvik skaðar stofnanatrúverðugleika verulega. Settu mörk byggð á sannarlegri, skjalfestri þörf notenda og hlutverks, og vertu gagnsær opinberlega um vísvitandi málamiðlunina sem villuheimild táknar, frekar en að gefa í skyn óaðgengilegan fullkomleikastaðal.

## Dæmi

**Stórfyrirtæki.** Skýjageymslufyrirtæki hafði árum saman stefnt að „hámarksuppitíma“ án formlegs þjónustustigsmarkmiðs, sem leiddi til langvarandi, óleystrar spennu milli vöruteymisins (sem vildi afhenda eiginleika hratt) og innviðateymisins (sem vildi hámarksvarkárni), rædd upp á nýtt á hverjum útgáfuskipulagsfundi. Upptaka formlegs 99,95% tiltækileikamarks með skýrri villuheimild og fyrirfram ákveðinni stefnu, eiginleikavinna er sett á bið sjálfkrafa þegar heimildin er uppurin, leysti endurteknu samningaviðræðurnar alveg: bæði teymi gátu séð sömu töluna og komið sér saman um sömu regluna, og fyrirtækið skýrði frá mælanlegri aukningu í afhentum eiginleikum á tímabilum heilbrigðrar heimildar samhliða mælanlegri, vísvitandi hægingu þau tvö tímabil á næsta ári þegar heimildin var sannarlega uppurin, nákvæmlega eins og stefnan ætlaðist til.

**Hið opinbera.** Almannaviðvörunarkerfi landsveðurstofu hafði starfað árum saman undir óformlegri væntingu um „alltaf tiltækt“, án skjalfests marks og með verulegu, ómeðhöndluðu rekstrarálagi á bakvaktarteymið sem reyndi að ná ótilgreindum, í reynd ómögulegum staðli. Nýupptekið formlegt þjónustustigsmarkmið, 99,9% tiltækileiki með skýrt kynntri opinberri útskýringu á villuheimild, gaf rekstrarteyminu skýrt, verjanlegt leyfi til að tímasetja skipulagða viðhaldsglugga innan heimildarinnar, nokkuð sem fyrri ótilgreinda „alltaf tiltækt“ væntingin hafði gert pólitískt erfitt að gera jafnvel þegar sannarlega nauðsynlegt fyrir langtímaheilsu kerfisins. Opinber samskipti sem útskýrðu villuheimildarhugtakið beint, frekar en að fela það, var vel tekið sem merki um heiðarlega, þroskaða rekstrarvenju frekar en veikingu skuldbindingar við þjónustugæði.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af því að taka upp þjónustustigsmarkmið og villuheimildir formlega er að leysa annars endalausa, pólitískt kostnaðarsama samningaviðræðu milli hraða og stöðugleika með einni, sameiginlegri, hlutlægri reglu. Skýjageymsludæmið hér að ofan sýnir þetta áþreifanlega: ára endurtekin, óleyst spenna milli tveggja teyma var leyst með einu formlegu marki og fyrirfram ákveðinni stefnu, sem leysti úr læðingi verulega skipulagsorku sem áður hafði farið í að rökræða sömu málamiðlun aftur og aftur.

Heildareignarkostnaður felur í sér greiningarfyrirhöfnina til að setja sönnunarbyggt mark rétt og agann til að virða fyrirfram ákveðna uppurðarviðbragðið jafnvel undir þrýstingi til að afhenda sérstaklega eftirsóttan eiginleika samt. Sá agakostnaður er raunverulegur, en hann er langtum lægri en áframhaldandi kostnaður óleystrar, langvarandi samningaviðræðu sem étur skipulagsorku í hverri skipulagslotu endalaust.

## Andmynstur og gildrur

- **Að setja metnaðarfullt þjónustustigsmarkmið án sönnunargagna að baki:** framleiðir óraunhæft mark sem teymið hættir að taka alvarlega, eða óþarflega dýrt sem eltir ávinning sem notendur taka ekki eftir.
- **Ekkert fyrirfram ákveðið viðbragð við villuheimildaruppurð:** neyðir sama erfiða málamiðlunarrifrildið fram undir þrýstingi í hvert sinn sem það gerist.
- **Að mæla þjónustustigsvísa frá innri kerfisheilsu frekar en raunverulegri notendaupplifun:** getur skýrt frá „heilbrigt“ meðan notendur upplifa raunveruleg vandamál.
- **Að eyða aldrei heilbrigðri villuheimild vísvitandi:** getur bent til óhóflegrar varkárni og glataðs lögmæts tækifæris.
- **Að setja mark einu sinni og endurskoða það aldrei:** þjónustustigsmarkmið getur úrelst þegar væntingar notenda, bygging og forgangsröðun breytast.
- **Að meðhöndla villuheimildarstefnuna sem valkvæða undir þrýstingi:** fyrirfram ákveðin regla sem er hnekkt hvenær sem hún er óþægileg veitir engan raunverulegan ákvarðanatökuvirði.

## Þroskalíkan

- **Stig 1, Upphaf:** Áreiðanleikamörk eru óbein eða metnaðarfull, án formlegs þjónustustigsmarkmiðs, -vísis eða villuheimildar skilgreindrar.
- **Stig 2, Þróun:** Sumar þjónustur hafa óformlegt þjónustustigsmarkmið, en vísar endurspegla kannski ekki raunverulega notendaupplifun og engin fyrirfram ákveðin uppurðarstefna er til.
- **Stig 3, Stöðlun:** Sönnunarbyggð þjónustustigsmarkmið með raunverulegum notendaupplifunarvísum og fyrirfram ákveðinni villuheimildaruppurðarstefnu eru komin á samkvæmt yfir mikilvægar þjónustur.
- **Stig 4, Stjórnun:** Villuheimildum er virkt og vísvitandi eytt í útreiknaða áhættutöku, og þjónustustigsmarkmið eru yfirfarin og endurskoðuð á reglulegri, sönnunarbyggðri tíðni.
- **Stig 5, Samhæfing:** Þjónustustigsmarkmið og villuheimildir eru samþætt í allri skipulagsheildinni sem sameiginlegur, hlutlægur vélbúnaður til að jafna hraða og stöðugleika, og skipulagsheildin getur bent á tilteknar ákvarðanir sem rammi gerði mögulegar sem ójarðtengd samningaviðræða hefði ekki leyst jafn árangursríkt.

## Hugmyndir til umræðu

1. Er núverandi þjónustustigsmarkmið okkar jarðtengt í sönnunargögnum, eða í metnaði?
2. Höfum við fyrirfram ákveðið viðbragð við villuheimildaruppurð sem við myndum í raun virða undir þrýstingi?
3. Hvenær eyddum við síðast heilbrigðri villuheimild vísvitandi á útreiknaða áhættu?
4. Mæla þjónustustigsvísar okkar raunverulega notendaupplifun eða hentugar innri heilsuathuganir?
5. Hvað myndi það kosta okkur að hækka þjónustustigsmarkmið okkar um eina „nínu“ til viðbótar, og væri sá kostnaður réttlættur?

## Helstu atriði til að muna

- **Þjónustustigsvísir (SLI)** mælir raunverulega notendaupplifun; **þjónustustigsmarkmið (SLO)** er sönnunarbyggt mark hans; **villuheimild** er leyfður skortur sem má eyða vísvitandi.
- **100% áreiðanleiki er yfirleitt rangt mark**; jarðtengdu þjónustustigsmarkmið þitt í því sem notendur taka í raun eftir og því sem hver viðbótarhækkun kostar sannarlega.
- Meðhöndlaðu villuheimildina sem **eyðanlega auðlind með fyrirfram ákveðnu uppurðarviðbragði**, sem fjarlægir þörfina á að rökræða hraða-á-móti-stöðugleika aftur undir þrýstingi í hvert sinn.
- Mældu þjónustustigsvísa frá **raunverulegri notendaupplifun**, ekki bara hentugum innri heilsuathugunum.
- **Yfirfarðu og endurskoðaðu þjónustustigsmarkmið reglulega**, byggt á sönnunargögnum, því úrelt mark missir notagildi sitt eftir því sem kerfið og notendur þess breytast.

## Heimildir og frekara lesefni

- *Site Reliability Engineering: How Google Runs Production Systems*, ritstýrt af Betsy Beyer, Chris Jones, Jennifer Petoff og Niall Richard Murphy (grundvallarritið sem skilgreinir þjónustustigsvísa, -markmið og villuheimildir).
- *The Site Reliability Workbook*, ritstýrt af Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara og Stephen Thorne (hagnýtar leiðbeiningar um útfærslu þjónustustigsmarkmiða og villuheimilda).
- *Implementing Service Level Objectives*, eftir Alex Hidalgo (yfirgripsmikil, iðkendamiðuð handbók um hönnun og rekstrarvæðingu þjónustustigsmarkmiða).
- *Accelerate: The Science of Lean Software and DevOps*, eftir Nicole Forsgren, Jez Humble og Gene Kim (sambandið milli áreiðanleikavenja og afhendingarframmistöðu).
