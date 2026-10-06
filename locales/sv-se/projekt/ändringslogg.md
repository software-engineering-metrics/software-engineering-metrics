# Ändringslogg

Anmärkningsvärda ändringar i boken och dess verktyg. De nyaste posterna står först. Datum använder ISO 8601 (ÅÅÅÅ-MM-DD).

## [Unreleased]

### Changed

- Nederländska (`nl-nl`): översatte de återstående engelska rubrikerna och sluggarna i ämnena 9.0, 9.3 och 9.4 (`bijlagen`, `controlelijsten`, `sjablonen`).
- Walesiska (`cy-001`, `cy-gb`): terminologin anpassades till TermCymru: `risg` (risk, i stället för `perygl`, med genusöverensstämmelse), `cyfnewidiad` (avvägning),
  `dangosydd rhagfynegi` och `dangosydd ôl-fynegi` (ledande och eftersläpande indikator, i stället för `hwyrfrydig`), `cynhwysedd` (kapacitet), `dosraniad` (fördelning),
  `cydberthynas` (korrelation), `allbwn` för output i ämne 1.3 och `cyfradd gadael staff` (personalomsättning). Fyra ämnessluggar döptes om för att stämma.
- Webbplats: `@lilydesignsystem/svelte-picker-bar` uppgraderades till 0.2.0, som lägger till en sökväljare i sidhuvudets fält; den skickar till den befintliga webbplatssökningen `/?<query>`.
- Lade till `scripts/generate-sitemap.mjs`, som körs i slutet av `pnpm build` och skriver `sitemap.xml` ur de förrenderade sidorna (endast kanoniska lokal-URL:er,
  inga dubbletter av tvåbokstavsalias), så att raden `Sitemap:` i `robots.txt` går att lösa.
- `AGENTS.md` är nu ett kort register; detaljerna flyttade till `AGENTS/layout.md`, `style.md`, `locales.md` och `workflow.md`.
- Dokumentationsstädning: uppdaterade `AGENTS.md`, `index.md`, den genererade lokaltexten i README, `spec/index.md`, `spec/locales.md` samt webbplatsens `AGENTS.md` och `README.md`
  för 27 lokaler, katalognamn för avsnitt per lokal och de nya verktygen; lade till `CLAUDE.md` (en pekare till `AGENTS.md`); rättade föråldrade `docs/`-sökvägar
  i båda agentfärdigheterna och gjorde `skills/` till den kanoniska kopian av `.claude/skills/` (kontrolleras av tester).
- Lade till `llms.txt` och `llms.json` (ett register för AI-agenter över varje betjänad lokal och ämne) i webbplatsens `static/`, genererade av `tools/gen_llms.py`
  (`just llms`) och kontrollerade av tester.
- Webbplatsens startsida: listan med rutor "nio delar" är nu en nästlad lista "Innehåll" över alla delar och ämnen, och avsnittet "Goodharts lag, överallt" togs bort.
- Ändrade "chapter" till "topic" i bokens prosa i varje lokal (till exempel "ämne 2.1", "Ämnena i den här delen"), med varje språks eget ord för "topic"
  (`tema`, `sujet`, `Thema`, `тема`, `主題` och så vidare), och även i specifikationen, den verktygsgenererade texten och webbplatsens gränssnittssträngar. Filnamn, URL:er och avsnittsnycklar
  är oförändrade.
- Översatte varje avsnittskatalogs namn under `locales/`: `chapters/` är nu `topics/` (och dess översättning i varje annan lokal, som `temas/`, `sujets/`, `themen/`), och
  `examples/` för `es-001` är nu `ejemplos/`. Namnen finns i `spec/section-names.json`; verktygen, testerna och webbplatsens innehållssynkronisering läser dem därifrån, och webbplatsens URL:er är oförändrade.

### Changed

- Reviderade den walesiska lokalen (`cy-001`, `cy-gb`, hålls identiska) mot den walesiska regeringens terminologilista TermCymru: `llesiant` för välbefinnande, `cynhyrchiant` för produktivitet,
  `gwendid`/`gwendidau` för sårbarhet, `llywodraethiant` för styrning, `cydberthynas` för korrelation, `ôl-groniad` för backlog (tidigare lämnat på engelska), `cost a budd` för kostnadsnytta
  och `deallusrwydd artiffisial (AI)` vid första omnämnandet av AI i varje ämne.

### Added

- Avsnitten förtext, exempel, bidra och projekt (14 filer, plus ändringslogg, startsida och innehållsförteckning) har översatts till den här lokalen, med översatta katalognamn.
- Tyska (`de-001`) lades till som 26:e fullt översatta lokal: alla 63 ämnen med matchande `.locale-peer-id`-sidofiler, identisk i innehåll med `de-de`.
  Kopplad till webbplatsen och betjänad på `/de-001/` (alias `/de/`).
- Portugisiska (`pt-001`) lades till som 25:e fullt översatta lokal: alla 63 ämnen med matchande `.locale-peer-id`-sidofiler, identisk i innehåll med `pt-pt`.
  Kopplad till webbplatsen och betjänad på `/pt-001/` (alias `/pt/`).
- Slutförde en fullständig handöversättning från grunden av alla 63 ämnen till urdu (`ur-001`, höger till vänster), den 24:e fullt översatta lokalen, med matchande
  `.locale-peer-id`-sidofiler. Varje ämne översattes direkt från den engelska källan, registret (ämne 9.7) mappar om varje intern länk till dess urdu-filnamn
  och avsnittskatalogen är `موضوعات`. Kopplad till webbplatsen och betjänad på `/ur-001/` (alias `/ur/`).
- Slutförde en fullständig handöversättning från grunden av alla 63 ämnen till indonesiska (`id-001`), med matchande `.locale-peer-id`-sidofiler. Det fanns ingen tidigare indonesisk lokal
  att bygga på, så varje ämne översattes direkt från den engelska källan, och registret (ämne 9.7) mappar om varje intern länk till dess indonesiska filnamn. Kopplad till webbplatsen och betjänad på
  `/id-001/` (alias `/id/`).
- Ryska (`ru-001`) och kinesiska (`zh-001`) lades till som 21:a och 22:a fullt översatta lokaler: var och en med alla 63 ämnen, med matchande `.locale-peer-id`-sidofiler,
  identiska i innehåll med `ru-ru` och `zh-cn`. Kopplade till webbplatsen och betjänade på `/ru-001/` och `/zh-001/` (alias `/ru/` och `/zh/`).
- Franska (`fr-001`) lades till som 20:e fullt översatta lokal: alla 63 ämnen med matchande `.locale-peer-id`-sidofiler, identisk i innehåll med `fr-fr`.
  Kopplad till webbplatsen och betjänad på `/fr-001/` (alias `/fr/`).
- Bengaliska (`bn-001`) lades till som 19:e fullt översatta lokal: alla 63 ämnen med matchande `.locale-peer-id`-sidofiler, identisk i innehåll med `bn-bd`.
  Kopplad till webbplatsen och betjänad på `/bn-001/` (alias `/bn/`).
- Arabiska (`ar-001`) lades till som 18:e fullt översatta lokal: alla 63 ämnen med matchande `.locale-peer-id`-sidofiler, identisk i innehåll med `ar-eg`.
  Kopplad till webbplatsen och betjänad på `/ar-001/` (alias `/ar/`).
- Walesiska, Storbritannien (`cy-gb`) lades till som 17:e fullt översatta lokal: alla 63 ämnen med matchande `.locale-peer-id`-sidofiler, identisk i innehåll med
  `cy-001` (samma förhållande som `hi-id` har till `hi-001`). Kopplad till webbplatsens `SERVED_LOCALE_CODES` och betjänad på `/cy-gb/`.
- Slutförde en fullständig handöversättning från grunden av alla 63 ämnen till nederländska, Nederländerna (`nl-nl`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom.
  Det fanns ingen tidigare nederländsk lokal att bygga på, så varje ämne översattes direkt från den engelska källan. Registret (ämne 9.7) mappar om varje intern ämneslänk till dess nederländska
  filnamn, enligt det tillvägagångssätt som användes för `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr` och `sv-se`. Ännu inte kopplad till webbplatsen.
- Slutförde en fullständig handöversättning från grunden av alla 63 ämnen till svenska, Sverige (`sv-se`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom.
  Varje ämne översattes direkt från den engelska källan. Registret (ämne 9.7) mappar om varje intern ämneslänk till dess svenska filnamn, enligt det tillvägagångssätt som användes för
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp`, `ru-ru` och `fr-fr`. Ännu inte kopplad till webbplatsen.
- Slutförde en fullständig handöversättning från grunden av alla 63 ämnen till franska, Frankrike (`fr-fr`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom.
  Varje ämne översattes direkt från den engelska källan. Registret (ämne 9.7) mappar om varje intern ämneslänk till dess franska filnamn, enligt det tillvägagångssätt som användes för
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp` och `ru-ru`. Ännu inte kopplad till webbplatsen.
- Slutförde en fullständig handöversättning från grunden av alla 63 ämnen till ryska, Ryssland (`ru-ru`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom.
  Varje ämne översattes direkt från den engelska källan. Registret (ämne 9.7) mappar om varje intern ämneslänk till dess ryska filnamn, enligt det tillvägagångssätt som användes för
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt` och `ja-jp`. Ännu inte kopplad till webbplatsen.
- Slutförde en fullständig handöversättning från grunden av alla 63 ämnen till japanska, Japan (`ja-jp`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom.
  Varje ämne översattes direkt från den engelska källan. Registret (ämne 9.7) mappar om varje intern ämneslänk till dess japanska filnamn, enligt det tillvägagångssätt som användes för
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es` och `pt-pt`. Ännu inte kopplad till webbplatsen.
- Slutförde en fullständig handöversättning från grunden av alla 63 ämnen till portugisiska, Portugal (`pt-pt`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom.
  Varje ämne översattes direkt från den engelska källan. Registret (ämne 9.7) mappar om varje intern ämneslänk till dess portugisiska filnamn, enligt det tillvägagångssätt som användes för
  `ar-eg`, `bn-bd`, `ko-kr` och `es-es`. Ännu inte kopplad till webbplatsen.
- Spanska, Spanien (`es-es`) lades till som fullt översatt lokal, alla 63 ämnen, med utgångspunkt i en kopia av den befintliga spanska (`es-001`) översättningen (som vid granskning
  visade sig redan vara grammatiskt neutral, med ett ordförråd som till stor del redan lutade mot Spanien) och därefter en riktad terminologigenomgång av de återstående minoritetsanvändningarna, särskilt
  "incidente" till "incidencia" för bokens område incidentmätetal, med motsvarande rättningar av genusöverensstämmelse överallt. Ännu inte kopplad till webbplatsen.
- Slutförde en fullständig handöversättning av alla 63 ämnen till koreanska, Korea (`ko-kr`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom. Registret (ämne 9.7)
  mappar om varje intern ämneslänk till dess koreanska filnamn, enligt det tillvägagångssätt som användes för `ar-eg` och `bn-bd`. Ännu inte kopplad till webbplatsen.
- Hindi, Indien (`hi-id`) lades till som fullt översatt lokal, alla 63 ämnen, genom att ordagrant kopiera den befintliga hindiöversättningen (`hi-001`) under den landsmärkta lokalkoden,
  eftersom standardhindi inte har en oberoende Indien-specifik variant som behöver handöversättas separat. Ännu inte kopplad till webbplatsen.
- Slutförde en fullständig handöversättning av alla 63 ämnen till bengaliska, Bangladesh (`bn-bd`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom. Ännu inte kopplad till webbplatsen.
- Slutförde en fullständig handöversättning av alla 63 ämnen till arabiska, Egypten (`ar-eg`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom. Ännu inte kopplad till webbplatsen.
- Slutförde en fullständig handöversättning av alla 63 ämnen till tyska, Tyskland (`de-de`), med matchande `.locale-peer-id`-sidofiler och `just test` som går igenom. Ännu inte kopplad till webbplatsen.
- Slutförde fullständiga handöversättningar av alla 63 ämnen i tre lokaler: walesiska (`cy-001`), kinesiska (`zh-cn`) och hindi (`hi-001`), var och en med matchande `.locale-peer-id`-sidofiler
  och `just test` som går igenom.
- Ytterligare två planerade översatta lokaler, walesiska - Storbritannien (`cy-gb`) och kinesiska (`zh-001`), lades till i `spec/locales-for-global-sharing-with-svelte/locales.tsv` och
  `spec/locales.md` (nu tretton planerade lokaler, upp från elva), och `zh-cn`:s tidigare obeslutade endonym fastställdes som 中文. Webbplatsens `LOCALE_LABELS` fick motsvarande poster
  (`cy-gb`: "Cymraeg (Prydain Fawr)", `zh-001`: "中文", `zh-cn`: "中文 (中国)"). Än så länge endast infrastruktur: ingen av dessa lokaler har en katalog `locales/<code>/` eller översatt innehåll.
- Publicerade boken i fyra lokaler under `locales/`: `en-gb-oxendict` (brittisk engelska, Oxford-stavning; den handskrivna källan), `en-001` (internationell engelska), `en-gb`
  (vanlig brittisk engelska) och `en-us` (amerikansk engelska). `en-001`, `en-gb` och `en-us` härleds mekaniskt ur `en-gb-oxendict` av det nya `tools/localize.py`; se
  `spec/locales.md`. `docs/` finns inte längre; varje hänvisning till den i `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py` och `tools/stats.py` pekar nu på `locales/<locale>/`.
- Lade till två Claude Code-färdigheter, `software-engineering-metrics-skill` (för läsare som tillämpar bokens vägledning på sitt eget team) och
  `software-engineering-metrics-maintainer-skill` (för bidragsgivare som lägger till eller redigerar ämnen), under `skills/` och speglade i `.claude/skills/`.
- Flyttade källkoden till den publicerade webbplatsen in i det här repositoryt som `software-engineering-metrics.github.io/`, tidigare ett separat repository. Den läser nu `locales/` direkt från repositoryts rot
  i stället för från en utcheckad kopia bredvid. `.github/workflows/deploy.yml` i roten kontrollerar vid varje push till `main` att webbplatsen fortfarande bygger och skickar sedan en `repository_dispatch`
  till repositoryt `software-engineering-metrics.github.io` (behållet som ett tunt driftsättningsskal, eftersom GitHub Pages bara serverar den bara domänen från ett repository med exakt det namnet),
  som checkar ut det här monorepot, bygger webbplatsen och driftsätter den.
- Lade till infrastruktur för översatta (inte bara stavningshärledda) lokaler, enligt den nya underspecifikationen `spec/locales-for-global-sharing-with-svelte/`: `tools/gen_locale_peer_ids.py` ger varje
  innehållsfil en `.locale-peer-id`-sidofil, identisk över lokaler, som en framtida översatt lokal (med sin egen slug i originalskrift) kan använda för att lösa
  "den här sidan, i lokal X" i stället för att matcha på slug; `tests/validate.py` kontrollerar att varje sidofil finns och stämmer. `spec/locales.md` registrerar tio planerade översatta lokaler (arabiska, bengaliska, walesiska, spanska, franska,
  hindi, indonesiska, portugisiska, ryska, urdu och kinesiska - Kina). På webbplatssidan fick `scripts/locales.mjs` `LOCALE_LABELS`/`localeLabel()` (visningsnamn för varje planerad lokal,
  klara före routningen) och `sortedLocaleEntries()` (den sorteringsordning en framtida lokallista bör använda), och `src/lib/i18n.js` plockade ut gränssnittssträngarna (navigering, sidopanel, sidbläddrare, väljare,
  sidfot, hopplänkar) som varje `.svelte`-komponent tidigare hårdkodade på engelska, ledda genom `ui(locale)`, med reservläge till engelska för varje lokal utan egen översättning.
- Ersatte webbplatsens handbyggda sidhuvudskontroll för enbart lokal med `@lilydesignsystem/svelte-picker-bar` från [Lily Design System](https://lilydesignsystem.com/): en riktig temaväljare
  (ljus/mörk, via nya `static/assets/themes/{light,dark}.css`), en riktig lokalväljare (kopplad till den här webbplatsens URL-baserade routning i stället för dess standardbeteende med enbart lang/dir),
  en textstorleksväljare (Lilys sjustegsskala) och en delningsväljare (e-post, Mastodon, kopiera länk). Fäste `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` vid
  `^0.1.2` och `@lilydesignsystem/svelte-headless` vid `^0.2.0` via overrides i `pnpm-workspace.yaml`, och kringgick därmed ett verkligt publicerat fel i `svelte-picker-bar` 0.1.0:s egna beroendeintervall
  (se varje väljares `CHANGELOG.md`, "0.1.2", och den här webbplatsens `AGENTS.md`).
- Tog bort startsidans statistikrad (delar/ämnen/"Free Always") och dess avsnitt "How to read it", och ersatte rutnätet med kort "Browse the nine parts" med en enkel punktlista.

### Changed

- Lade till `scripts/generate-sitemap.mjs`, som körs i slutet av `pnpm build` och skriver `sitemap.xml` ur de förrenderade sidorna (endast kanoniska lokal-URL:er, inga dubbletter av tvåbokstavsalias),
  så att raden `Sitemap:` i `robots.txt` går att lösa.
- Lade till ämne 2.8, lean-värdeflödesmätetal (ledtid, processtid, cykeltid, procent fullständigt och korrekt och taktid från klassisk lean-värdeflödeskartläggning,
  plus beräkningen av rullande genomströmningsutbyte), placerat efter köteorin. Mätetalen för pull requests och kodgranskning flyttade från 2.8 till 2.9 och ämnet DORA-mätetal från 2.9 till 2.10.
  Varje berörd korsreferens i hela boken uppdaterades.
- Döpte om del 2 från "Delivery and Flow Metrics" till "Flow Metrics" och omstrukturerade den kring Mik Kerstens Flow Framework. Lade till fyra nya ämnen: 2.1 Flow Framework, 2.2 Flödesobjekt (funktioner, defekter,
  risker, skuld), 2.3 Flödeshastighet och flödesfördelning och 2.4 Flödestid och flödesbelastning. De fyra enskilda DORA-mätetalsämnena (driftsättningsfrekvens, ledtid, andel misslyckade ändringar,
  återhämtningstid) slogs ihop till ett enda referensämne, 2.9 DORA-mätetalsramverket, flyttat till slutet av delen. Flödeseffektivitet och pågående arbete numrerades om till 2.5 och ämnet köteori
  (tidigare 2.9) döptes om och numrerades om till 2.7 Köteori. Cykeltid (2.6) och mätetal för pull requests och kodgranskning (2.8) behåller sina nummer. Varje korsreferens i hela boken, ordlistan, formelreferensen,
  självbedömningen av mognad och förtexten uppdaterades för att stämma.

### Added

- Första utgåvan: 45 innehållsämnen i 8 delar, plus en förtext och en bilaga med 7 ämnen (del 9), som täcker DORA- och SPACE-ramverken, kod- och kvalitetsmätetal, produkt- och affärsmätetal,
  mätetal för tillförlitlighet och säkerhet och generativ AI:s inverkan på utvecklingsmätetal.
- Repositoryinfrastruktur speglad från systerprojektet `software-engineering-guide`: ett specifikationsdrivet `spec/` (index, struktur, konventioner, oxford-stavning, färdplan), en valideringssvit i
  `tests/validate.py`, en navigeringsgenerator i `tools/gen_nav.py`, en `justfile`, `AGENTS.md` med vägledning för bidragsgivare under `docs/contributing/`, `CONTRIBUTING.md` och den här ändringsloggen.
- `spec/structure.md`, det kanoniska ämnesmanifestet som testerna kontrollerar filerna mot.
- Två utarbetade exempel i `docs/examples/`: en ifylld metrikstadga och en specifikation för en instrumentpanel.

## Historik

Boken byggdes utifrån specifikationen och utåt: nioddelsstrukturen deklarerades först i `spec/structure.md`, sedan författades varje ämne mot den delade mallen i
`docs/contributing/chapter-template.md`, med `tests/validate.py` som hela tiden upprätthöll struktur och husstil.

## Konventioner för den här filen

- Gruppera ändringar under **Added**, **Changed**, **Fixed**, **Removed** eller **Deprecated**.
- Håll posterna korta och specifika. En rad vardera där det går.
- Använd inte heller här långa tankstreck; testerna kontrollerar den här filen också.
