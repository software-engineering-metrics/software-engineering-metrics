# 3.7 Kannanir á þróunarupplifun og DevEx-mælikvarðar

## Yfirlit og tilgangur

Þetta viðfangsefni lokar 3. hluta með hagnýtu vélfræðinni sem gerir sjálfsskýrslugögn sérhvers fyrra viðfangsefnis áreiðanleg: hvernig á að hanna könnun á þróunarupplifun (DevEx) sem framleiðir raunverulegt merki frekar en vinsældakeppni, og hvernig á að sameina könnunargögn við hlutlæga tækjavæðingu í mælikvarðasafn sem skipulagsheild getur í raun brugðist við. Sérhvert viðfangsefni í þessum hluta reiðir sig á einhverja mynd sjálfsskýrslu, ánægja og vellíðan (viðfangsefni 3.2) mest beint, en frammistaða, samskipti og flæði njóta líka vel hannaðrar könnunar, og illa hönnuð könnun grefur undan virði þeirra allra í einu.

**Þróunarupplifun (DevEx)** er víðari, nýlegri rammi sem hefur komið fram kringum sömu kjarnahugmynd og SPACE formgerði: raunveruleg, dagleg upplifun verkfræðinga af því að koma verkum í framkvæmd, núningur, tól, vitræn byrði, endurgjafarlykkjur, er sjálf mælanlegur, bætanlegur hlutur, ekki bara mjúkt menningarmál. DevEx-rannsóknir, einkum ramminn sem Abi Noda, Margaret-Anne Storey, Nicole Forsgren og Michaela Greiler lögðu til, skipuleggja þessa upplifun kringum þrjár víddir: endurgjafarlykkjur, vitræna byrði og flæðisástand, sem varpast náið á og útvíkka SPACE-víddirnar sem þessi hluti hefur þegar fjallað um á dýpt.

Fyrir stór teymi liggur munurinn á könnun sem framleiðir áreiðanlegt merki og einni sem framleiðir hávaða eða, verra, virkt villandi gögn alfarið í hönnunaratriðunum sem þetta viðfangsefni nær yfir: orðalag spurninga, val á svarkvarða, úrtak og tíðni, og hvernig niðurstöður eru fluttar aftur til svarenda. Stórfyrirtæki og hið opinbera sem keyra þessar kannanir í stórum mæli, yfir þúsundir verkfræðinga, hafa ekki efni á að fá þetta rangt, því gallað tæki í þeim mæli framleiðir sjálfsöruggar, rangar ályktanir sem móta raunverulegar mönnunarákvarðanir.

## Lykilmeginreglur

- **Gæði könnunarhönnunar ráða áreiðanleika gagna langtum meira en lengd eða fágun könnunar.** Stutt, vel hönnuð könnun slær langa, illa hannaða í hvert sinn.
- **Svarhlutfall er sjálft merki**, ekki bara gagnasöfnunarmælikvarði; lækkandi hlutfall bendir oft til rýrnandi trausts á ferlinu.
- **Sameinaðu könnunargögn við hlutlæga tækjavæðingu** hvar sem hægt er, samkvæmt tækjavæðingarmeginreglu viðfangsefnis 1.5; notaðu könnunargögn sérstaklega fyrir það sem hlutlæg gögn geta ekki fangað.
- **Lokaðu lykkjunni við svarendur.** Könnun sem leiðir aldrei sýnilega til neinnar breytingar þjálfar fólk í að hætta að taka hana alvarlega.
- **DevEx og SPACE eru viðbótarrammar sama undirliggjandi áhyggjuefnis**, ekki keppandi rammar til að velja á milli.

## Ráðleggingar

### Hannaðu spurningar fyrir skýrleika og forðastu leiðandi eða tvíþætt orðalag

Skrifaðu könnunarspurningar sem spyrja um nákvæmlega einn hlut, á einföldu máli, án þess að fella forsendu inn í spurninguna sjálfa. „Hve ánægður ertu með tólin okkar og skjölun?“ er tvíþætt spurning sem blandar saman tveimur hugsanlega mjög ólíkum svörum í eitt ruglingslegt svar. Skiptu henni í tvær aðskildar spurningar. Forðastu leiðandi orðalag eins og „hve mikið hefur nýleg fjárfesting okkar í tólum bætt upplifun þína?“ sem gerir ráð fyrir að bótin hafi átt sér stað frekar en að spyrja hlutlaust hvort hún gerði það.

### Notaðu samkvæma svarkvarða og prófaðu nýjar spurningar áður en þær eru útfærðar víða

Staðlaðu á samkvæman svarkvarða (fimm eða sjö punkta [Likert](https://en.wikipedia.org/wiki/Likert_scale) kvarði er algengur og vel rannsakaður) yfir könnunartæki þitt, svo svör séu sambærileg milli spurninga og yfir tíma. Prófaðu allar nýjar spurningar með litlum hópi áður en þær eru útfærðar í allri skipulagsheildinni, til að grípa tvíræð orðalag eða óvænta túlkun áður en hún spillir fullu gagnasafni.

### Meðhöndlaðu svarhlutfall sem greiningarmerki út af fyrir sig

Raktu svarhlutfall könnunar yfir samfelldar lotur, og meðhöndlaðu lækkandi hlutfall sem viðvörunarmerki sem vert er að rannsaka beint, líkt og traustsmerkið sem fjallað er um í viðfangsefni 3.2. Fallandi svarhlutfall bendir oft til könnunarþreytu, rýrnandi trausts á að niðurstöður leiði til aðgerða, eða vaxandi grunsemda um að nafnleynd sé ekki sannarlega varin, allt sem verðskuldar beina rannsókn frekar en að vera vísað frá sem einföldu gagnasöfnunaróþægindi.

### Sameinaðu könnunargögn við hlutlæga DevEx-tækjavæðingu

Paraðu huglæg könnunarsvör við hlutlæg merki þar sem þau eru til: byggingartíma, keyrslutíma prófasafns, uppsetningartíma staðbundins þróunarumhverfis, og flæðistíma- og truflunargögnin úr viðfangsefni 3.6. Könnunarsvar sem segir „byggingin okkar er of hæg“ verður langtum framkvæmanlegra pöruð við raunverulega mælda byggingartímaþróun, og samsetningin grípur tilvik þar sem skynjun og hlutlægur veruleiki víkja í hvora áttina sem er, sem er vert að rannsaka út af fyrir sig.

### Lokaðu lykkjunni: birtu niðurstöður og sýnilegar eftirfylgniaðgerðir

Eftir hverja könnunarlotu, birtu heiðarlegt yfirlit niðurstaðna, þar með taldar niðurstöður sem forysta vildi kannski helst ekki draga fram, og skuldbindu þig opinberlega til að minnsta kosti einnar áþreifanlegrar aðgerðar til að bregðast við. Könnun sem framleiðir enga sýnilega eftirfylgni kennir svarendum að heiðarlegt framlag þeirra skipti ekki máli, sem rýrir bæði svarhlutfall og heiðarleika svara í hverri síðari lotu. Þessi agi að loka lykkjunni er oft mikilvægasti einstaki þátturinn um hvort DevEx-könnunaráætlun helst gagnleg yfir mörg ár eða hnignar hægt í gátlistaæfingu.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Löng, yfirgripsmikil könnun | Rík, ítarleg gögn yfir mörg efni | Lægra svarhlutfall, meiri þreyta, meira rými fyrir illa hannaðar spurningar |
| Stutt, einbeitt könnun | Hærra svarhlutfall, auðveldara að hanna vel | Minni þekja; getur misst af vaxandi vanda utan valins fókuss |
| Könnunargögn ein | Fangar huglæga upplifun beint | Viðkvæm fyrir skekkju og ekki hægt að staðfesta gegn hlutlægum veruleika |
| Könnun sameinuð hlutlægri tækjavæðingu | Grípur frávik milli skynjunar og veruleika, framkvæmanlegra | Krefst meiri gagnasamþættingarfyrirhafnar |

Aðalspennan er **þekja á móti svargæðum**. Lengri, yfirgripsmeiri könnun nær yfir meira svið en rýrir svarhlutfall og eykur hættuna á að illa hannaðar spurningar sleppi í gegn; stutt, einbeitt könnun fær betri svör en hættir á að missa af einhverju mikilvægu utan umfangs síns. Leystu spennuna með því að halda kjarna, endurteknu könnuninni stuttri og vel prófaðri, og nota stöku, skýrt merktar djúpkannanir fyrir tiltekin efni sem þarfnast ítarlegri könnunar, frekar en að reyna að ná yfir allt í hverri lotu.

## Spurningar til að ræða með teyminu

1. **Höfum við nokkurn tímann prófað nýja könnunarspurningu með litlum hópi áður en hún var útfærð víða, eða fara nýjar spurningar beint í fullu könnunina?** Að sleppa prófunarskrefinu er algeng leið til þess að tvíræðar eða tvíþættar spurningar spilli fullu gagnasafni áður en nokkur tekur eftir að orðalagið var óljóst.

2. **Hvað hefur svarhlutfall okkar gert síðustu nokkrar könnunarlotur, og höfum við rannsakað lækkun ef hún átti sér stað?** Meðhöndlið þessa þróun sem raunverulegt merki sem vert er að ræða, ekki bara gagnasöfnunaróþægindi til að nefna í framhjáhlaupi.

3. **Sameinum við könnunargögn nokkurri hlutlægri tækjavæðingu, eða stendur huglæg skynjun alfarið ein í skýrslugjöf okkar?** Greinið að minnsta kosti einn stað þar sem að para könnunarspurningu við hlutlæg gögn, byggingartíma, afhendingartíðni, gæti gert niðurstöðuna framkvæmanlegri.

4. **Hvaða áþreifanlegu aðgerð höfum við gripið til sem beina, sýnilega afleiðingu síðustu könnunarlotu, og komum við þeirri aðgerð á framfæri við svarendur?** Ef heiðarlega svarið er „ekkert sýnilegt“ er það bil líklega þegar að rýra traust á tækinu, hvort sem það hefur komið fram í svarhlutfallinu enn eða ekki.

5. **Eru einhverjar núverandi könnunarspurningar okkar leiðandi eða tvíþættar, og myndum við taka eftir því ef þær væru það?** Endurskoðið raunverulegar núverandi spurningar ykkar gegn þessu sértæka prófi sem hópæfingu.

6. **Hvernig ber DevEx- eða SPACE-könnunargögn okkar sig saman við hlutlæg merki þegar þetta tvennt virðist ósammála, og hvað segir sá ágreiningur okkur?** Tilvik þar sem skynjun og hlutlæg gögn víkja er oft greiningarlega verðmætara en tilvik þar sem þau eru sammála, þar sem bilið sjálft er upplýsandi.

## Geirasjónarhorn

**Sprotafyrirtæki.** Einföld, mjög stutt púlskönnun, stundum bara ein eða tvær spurningar, keyrð óformlega og títt, nægir yfirleitt í þessum mæli, og strangleiki formlegrar tækjahönnunar skiptir minna máli þegar stofnandi getur enn átt bein samtöl við nær alla reglulega.

**Lítil fyrirtæki.** Ókeypis eða ódýrt könnunartól með stuttu, aðlöguðu spurningasafni, keyrt ársfjórðungslega, fangar mest af virðinu hér án þess að þurfa sérstaka könnunarhönnunarkunnáttu. Forgangsraðaðu lykkjulokunaraganum fram yfir fágun; jafnvel lítið teymi nýtur góðs af því að bregðast sýnilega við því sem stutt könnun leiðir í ljós.

**Stórfyrirtæki.** Gæði könnunarhönnunar skipta gífurlegu máli í stórum mæli, því gölluð spurning eða rofin nafnleyndartrygging spillir gögnum yfir þúsundir svarenda í einu, og sjálfsöruggu, röngu ályktanirnar sem af hlýst geta misbeint verulegum mönnunarákvörðunum. Fjárfestu í raunverulegri könnunarhönnunarkunnáttu, eða hafðu samstarf við rótgróinn DevEx-mælingarvettvang, frekar en að smíða tilfallandi tæki innanhúss.

**Hið opinbera.** Svarhlutfall og traust eru sérstaklega brothætt í skipulagsheildum þar sem starfsfólk kann þegar að vera tortryggið um hvernig gögn eru notuð innanhúss. Fjárfestu ríkulega í gagnsæjum nafnleyndartryggingum og sýnilegum eftirfylgniaðgerðum sérstaklega til að byggja upp traustið sem gerir heiðarlegt svarhlutfall mögulegt í samhengi þar sem tortryggni um gagnanotkun kann þegar að vera meiri en í dæmigerðu einkageirasamhengi.

## Dæmi

**Stórfyrirtæki.** Fyrsta DevEx-könnun hugbúnaðarfyrirtækis innihélt spurningu sem bað verkfræðinga að meta „ánægju með tól og ferli“, tvíþætta spurningu sem blandaði saman tveimur mjög ólíkum áhyggjuefnum. Þegar sameinaða einkunnin kom til baka miðlungs gat forysta ekki sagt hvort vandinn væri tól, ferli eða hvort tveggja, og fyrstu úrbótaaðgerðir beindust að röngu sviði í tvo ársfjórðunga. Að skipta spurningunni í næstu endurskoðun leiddi í ljós að tólaeinkunnin var í raun sterk og ferlaeinkunnin léleg, sem beindi fjárfestingu að því að einfalda þunglamalegt útgáfusamþykkisferli, sem framleiddi mælanlega ánægjubót innan eins ársfjórðungs, ólíkt fyrri tólaáhersluviðleitni sem hafði sýnt lítil áhrif.

**Hið opinbera.** Fyrsta DevEx-könnun landsstofnunar stafrænna mála hafði svarhlutfall undir 30%, og innri yfirferð fann að starfsfólk trúði almennt, með réttu eins og kom í ljós, að einstakir stjórnendur gætu séð hverjir höfðu svarað og hverjir ekki, þótt samantekt niðurstaðna ætti að vera nafnlaus. Stofnunin færði sig yfir á sannarlega óháðan könnunarvettvang þriðja aðila með staðfestri nafnleynd, kynnti breytinguna skýrt og ítrekað og birti skýrt yfirlit niðurstaðna fyrri lotu ásamt þremur áþreifanlegum aðgerðum sem gripið var til. Svarhlutfall hækkaði í yfir 70% innan tveggja lota, og forysta stofnunarinnar eignaði sérstaklega samsetningu raunverulegrar nafnleyndar og sýnilegra eftirfylgniaðgerða að traust á tækinu endurheimtist.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun vel hannaðrar DevEx-könnunaráætlunar er áreiðanleg, framkvæmanleg gögn um vídd, þróunarupplifun, sem annars helst ósýnileg þar til hún birtist sem starfsmannavelta eða afhendingarhægagangur. Hugbúnaðarfyrirtækisdæmið hér að ofan sýnir kostnað þess að fá hönnun ranga: tveir ársfjórðungar af misbeindri úrbótafyrirhöfn því ein illa orðuð spurning blandaði saman tveimur aðgreindum áhyggjuefnum.

Heildareignarkostnaður felur í sér könnunartól, hönnunar- og prófunaragann sem þetta viðfangsefni mælir með, og áframhaldandi skuldbindingu til að loka lykkjunni með sýnilegri eftirfylgniaðgerð í hverri lotu. Sú skuldbinding, meira en nokkur tólakostnaður, ræður hvort könnunaráætlun helst gagnleg árum saman eða hnignar í gátlistaæfingu sem framleiðir stöðugt minna áreiðanleg gögn með tímanum.

## Andmynstur og gildrur

- **Tvíþættar eða leiðandi spurningar:** blanda saman aðgreindum áhyggjuefnum eða skekkja svör, og fara oft óuppgötvaðar án prófunar.
- **Að sleppa prófunarskrefinu fyrir nýjar spurningar:** leyfir tvíræðu orðalagi að spilla fullu gagnasafni.
- **Að hunsa lækkandi svarhlutfall:** missir af mikilvægu traustsmerki út af fyrir sig.
- **Að loka aldrei lykkjunni með sýnilegri eftirfylgniaðgerð:** þjálfar svarendur í að heiðarlegt framlag skipti ekki máli, sem rýrir framtíðargagnagæði.
- **Að meðhöndla könnunargögn sem nægjanleg ein og sér, án hlutlægrar staðfestingar:** missir af tilvikum þar sem skynjun og veruleiki víkja í hvora áttina sem er.
- **Veikar eða óstaðfestanlegar nafnleyndartryggingar:** fljótlegasta einstaka leiðin til að rýra bæði svarhlutfall og heiðarleika svara.

## Þroskalíkan

- **Stig 1, Upphaf:** Könnunarspurningar eru tilfallandi og óprófaðar, svarhlutfall er ekki rakið sem merki, og niðurstöður leiða sjaldan til sýnilegra aðgerða.
- **Stig 2, Þróun:** Einhver könnunarhönnunaragi er til, en prófun er ósamkvæm og lykkjan er ekki áreiðanlega lokuð við svarendur.
- **Stig 3, Stöðlun:** Spurningar eru prófaðar fyrir útfærslu, svarhlutfall er rakið og rannsakað þegar það lækkar, og niðurstöður eru samkvæmt birtar með að minnsta kosti einni áþreifanlegri eftirfylgniaðgerð.
- **Stig 4, Stjórnun:** Könnunargögn eru kerfisbundið sameinuð hlutlægri tækjavæðingu, og frávik milli þessa tveggja er virkt rannsakað sem greiningarmerki.
- **Stig 5, Samhæfing:** Skipulagsheildin hefur þroskaða, trausta, fjölára könnunaráætlun með stöðugt háu svarhlutfalli, sýnilegum sannanlegum aðgerðum úr hverri lotu og afrekaskrá í að grípa og leiðrétta illa hannaðar spurningar áður en þær spilla gögnum.

## Hugmyndir til umræðu

1. Hefur einhver núverandi könnunarspurning í tæki okkar nokkurn tímann ruglað eða afvegaleitt svaranda?
2. Hver var síðasta áþreifanlega aðgerðin sem við gripum til sem bein afleiðing könnunargagna?
3. Hvernig myndum við vita ef nafnleyndartrygging okkar hefði verið rofin, jafnvel óvart?
4. Hvar eru könnunargögn okkar sammála eða ósammála hlutlægri tækjavæðingu, og hvað segir það okkur?
5. Hvað þyrfti til að tvöfalda núverandi svarhlutfall okkar?

## Helstu atriði til að muna

- **Hönnunargæði** könnunar, skýrar, eins hugtaks, óskekktar spurningar, skipta meira máli en lengd eða fágun.
- **Svarhlutfall er merki út af fyrir sig**; rannsakaðu lækkun frekar en að meðhöndla hana sem einfalt óþægindi.
- **Sameinaðu könnunargögn við hlutlæga tækjavæðingu** til að grípa frávik milli skynjunar og veruleika.
- **Lokaðu lykkjunni**: birtu niðurstöður og sýnilega eftirfylgniaðgerð í hverri lotu, annars rýrnar traust á tækinu.
- **DevEx og SPACE eru viðbótarrammar**, ekki keppandi, sama undirliggjandi áhyggjuefnis um þróunarupplifun.

## Heimildir og frekara lesefni

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren og Michaela Greiler, „DevEx: What Actually Drives Productivity,“ *ACM Queue* (2023): DevEx-ramminn um endurgjafarlykkjur, vitræna byrði og flæðisástand.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck og Jenna Butler, „The SPACE of Developer Productivity,“ *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and Win in the 21st Century*, eftir Jeff Lawson (fjárfesting skipulagsheilda í þróunarupplifun).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, eftir Louis M. Rea og Richard A. Parker (almenn könnunarhönnunaraðferðafræði sem á við um DevEx-tæki).
