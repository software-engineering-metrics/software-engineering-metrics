# 4.0 Inngangur að 4. hluta: Kóða- og gæðamælikvarðar

Í 2. og 3. hluta var mælt hvernig vinna hreyfist og hvernig fólkinu sem framleiðir hana vegnar. Þessi hluti snýr sér að gripnum sjálfum: kóðanum, og hvað mælikvarði getur og getur ekki sagt þér um gæði hans. Kóðagæðamælikvarðar hafa lengstu sögu allra mælikvarðafjölskyldna í þessari bók, hringkomplexitet (e. cyclomatic complexity) á rætur til ársins 1976, og lengstu misnotkunarsöguna til jafns við það. Þessi hluti tekur þá sögu alvarlega: sérhvert viðfangsefni nefnir sannarlega gagnlegt merki ásamt sértækri, vel skjalfestri leið sem það merki er leikið þegar það verður markmið.

Rauði þráðurinn sem tengir þessi sex viðfangsefni er að enginn einn kóðamælikvarði fangar gæði einn og sér, og nokkrir þeirra vinsælustu villa virkt þegar þeim er fylgt í einangrun. Há prófþekjuhlutföll geta lifað samhliða prófunum sem sannreyna ekkert marktækt. Lág flækjustigseinkunn getur lifað samhliða kóða sem er tæknilega einfaldur en hugtakalega ósamhangandi. Hvert viðfangsefni þessa hluta parar aðalmælikvarða sinn við viðbótarathugunina sem grípur sérstakan blindan blett hans: flækjustig með viðhaldshæfnissamhengi, þekju með stökkbreytingaprófunum, veltu með heitreitagreiningu, stöðugreiningu með mannlegri dómgreind, og tæknilega skuld með forgangsraðaðri úrbót frekar en sífellt vaxandi, vanræktum biðlista.

Fyrir stór teymi eru kóða- og gæðamælikvarðar það sem gerir mögulegt að stýra kóðagrunni of stórum til að nokkur ein manneskja haldi honum í höfðinu. Fimm manna teymi getur reitt sig á sameiginlega þögla þekkingu á hvaða hlutar kerfisins eru brothættir; fimm hundruð verkfræðinga skipulagsheild sem spannar tugi þjónusta þarf tækjavædd merki til að finna þá brothættu kerfisbundið. Stórfyrirtæki og hið opinbera, sem bera oft kóðagrunna mælda í áratugum frekar en árum, reiða sig á mælikvarða þessa hluta til að forgangsraða hvar takmörkuð viðhaldsfjárfesting gerir mest gagn.

## Viðfangsefni í þessum hluta

- **4.1 Mælikvarðar á flækjustig kóða:** Hringkomplexitet og skyldmenni hans, hvað þeir spá í raun fyrir um, og vel skjalfesta leikáhættu þeirra.
- **4.2 Prófþekja og skilvirkni prófana:** Hvers vegna þekjuhlutfall eitt og sér segir þér minna en það virðist, og hvernig stökkbreytingaprófun lokar bilinu.
- **4.3 Kóðavelta og heitreitagreining:** Að finna sértæka, litla brotið af kóðagrunni sem ber ábyrgð á ósamhlutfallslegri hlutdeild galla og viðhaldskostnaðar.
- **4.4 Stöðugreining og kóðalyktarmælikvarðar:** Sjálfvirk kóðagæðamerki, raunverulegt virði þeirra og takmörk þeirra gagnvart mannlegri dómgreind.
- **4.5 Mæling tæknilegrar skuldar:** Að breyta ósýnilegri, óformlega ræddri skuldbindingu í sýnilegt, forgangsraðað, viðráðanlegt safn.
- **4.6 Skjölunar- og þekkingarmælikvarðar:** Að mæla hvort skjölun hjálpar í raun, ekki bara hvort hún er til.

## Hvernig þessi viðfangsefni tengjast

Þessi sex viðfangsefni byggjast upp frá minnstu einingu kóða út á við. Viðfangsefni 4.1 byrjar á stigi eins falls eða aðferðar; viðfangsefni 4.2 spyr hvort prófanir sannreyna í raun hegðun þeirrar einingar; viðfangsefni 4.3 þysjar út til að finna hvaða skrár og einingar yfir allan kóðagrunninn verðskulda athygli fyrst; viðfangsefni 4.4 bætir við sjálfvirka tólalaginu sem skannar yfir allt samfellt; viðfangsefni 4.5 breytir uppsöfnuðum niðurstöðum allra fjögurra í stýrðan, forgangsraðaðan biðlista frekar en dreifðar, ómeðhöndlaðar áhyggjur; og viðfangsefni 4.6 lokar hlutanum með því að mæla hvort þekkingin sem þarf til að viðhalda öllu þessu örugglega sé í raun skjalfest og finnanleg.

Þessi hluti tengist beint aftur við stöðugleikamælikvarða 2. hluta: breytingabilunarhlutfall (viðfangsefni 2.10) er að stórum hluta niðurstreymisafleiðing kóðagæðanna sem þessi hluti mælir uppstreymis. Hann tengist líka fram á við við vörumælikvarða 5. hluta, þar sem sloppnir gallar (viðfangsefni 5.1) eru oft rekjanlegir til nákvæmlega flækjustigsheitreita og þekjubila sem þessi hluti er byggður til að draga fram áður en þau ná framleiðslu yfirleitt.
