# Wijzigingslogboek

Opvallende wijzigingen aan het boek en zijn tooling. De nieuwste vermeldingen staan bovenaan. Datums gebruiken ISO 8601 (JJJJ-MM-DD).

## [Unreleased]

### Changed

- Nederlands (`nl-nl`): de resterende Engelse koppen en slugs van onderwerpen 9.0, 9.3 en 9.4 vertaald (`bijlagen`, `controlelijsten`, `sjablonen`).
- Welsh (`cy-001`, `cy-gb`): terminologie afgestemd op TermCymru: `risg` (risico, in plaats van `perygl`, met overeenstemming in geslacht), `cyfnewidiad` (afweging),
  `dangosydd rhagfynegi` en `dangosydd ôl-fynegi` (voorlopende en achterlopende indicator, in plaats van `hwyrfrydig`), `cynhwysedd` (capaciteit), `dosraniad` (verdeling),
  `cydberthynas` (correlatie), `allbwn` voor output in onderwerp 1.3 en `cyfradd gadael staff` (personeelsverloop). Vier onderwerpslugs zijn hernoemd om te kloppen.
- Site: `@lilydesignsystem/svelte-picker-bar` bijgewerkt naar 0.2.0, dat een zoekkiezer toevoegt aan de kopbalk; die verstuurt naar de bestaande sitezoekfunctie `/?<query>`.
- `scripts/generate-sitemap.mjs` toegevoegd, dat aan het eind van `pnpm build` draait en `sitemap.xml` schrijft uit de vooraf gerenderde pagina's (alleen canonieke locale-URL's,
  geen dubbelen van aliassen met twee letters), zodat de regel `Sitemap:` in `robots.txt` oplost.
- `AGENTS.md` is nu een korte index; de details verhuisden naar `AGENTS/layout.md`, `style.md`, `locales.md` en `workflow.md`.
- Documentatieopschoning: `AGENTS.md`, `index.md`, de gegenereerde README-localetekst, `spec/index.md`, `spec/locales.md` en de `AGENTS.md` en `README.md` van de site
  bijgewerkt voor 27 locales, mapnamen van secties per locale en de nieuwe tooling; `CLAUDE.md` toegevoegd (een verwijzing naar `AGENTS.md`); verouderde `docs/`-paden in beide
  agentvaardigheden hersteld en `skills/` de canonieke kopie van `.claude/skills/` gemaakt (gecontroleerd door tests).
- `llms.txt` en `llms.json` (een index voor AI-agents van elke aangeboden locale en elk onderwerp) toegevoegd aan de `static/` van de site, gegenereerd door `tools/gen_llms.py`
  (`just llms`) en gecontroleerd door tests.
- Startpagina van de site: de tegellijst "negen delen" is nu een geneste lijst "Inhoud" van alle delen en onderwerpen, en de sectie "De wet van Goodhart, overal" is verwijderd.
- "Chapter" in het proza van het boek in elke locale gewijzigd in "topic" (bijvoorbeeld "onderwerp 2.1", "De onderwerpen in dit deel"), met het eigen woord voor "topic" van elke taal
  (`tema`, `sujet`, `Thema`, `тема`, `主題` enzovoort), en ook in de spec, de door tools gegenereerde tekst en de interfacestrings van de site. Bestandsnamen, URL's en sectiesleutels zijn ongewijzigd.
- Elke mapnaam van een sectie onder `locales/` vertaald: `chapters/` is nu `topics/` (en de vertaling ervan in elke andere locale, zoals `temas/`, `sujets/`, `themen/`), en
  `examples/` van `es-001` is nu `ejemplos/`. De namen staan in `spec/section-names.json`; de tooling, de tests en de inhoudssynchronisatie van de site lezen ze daar, en de URL's van de site zijn ongewijzigd.

### Changed

- De Welshe locale (`cy-001`, `cy-gb`, identiek gehouden) herzien tegen de terminologielijst TermCymru van de Welsh Government: `llesiant` voor welzijn, `cynhyrchiant` voor productiviteit,
  `gwendid`/`gwendidau` voor kwetsbaarheid, `llywodraethiant` voor governance, `cydberthynas` voor correlatie, `ôl-groniad` voor backlog (voorheen in het Engels gelaten), `cost a budd` voor kosten-batenanalyse
  en `deallusrwydd artiffisial (AI)` bij de eerste vermelding van AI in elk onderwerp.

### Added

- De secties voorwerk, voorbeelden, bijdragen en project (14 bestanden, plus wijzigingslogboek, startpagina en inhoudsopgave) zijn in deze locale vertaald, met vertaalde mapnamen.
- Duits (`de-001`) toegevoegd als 26e volledig vertaalde locale: alle 63 onderwerpen met bijpassende `.locale-peer-id`-sidecars, inhoudelijk identiek aan `de-de`.
  Gekoppeld aan de site en aangeboden op `/de-001/` (alias `/de/`).
- Portugees (`pt-001`) toegevoegd als 25e volledig vertaalde locale: alle 63 onderwerpen met bijpassende `.locale-peer-id`-sidecars, inhoudelijk identiek aan `pt-pt`.
  Gekoppeld aan de site en aangeboden op `/pt-001/` (alias `/pt/`).
- Een volledige handmatige vertaling vanaf nul van alle 63 onderwerpen naar het Urdu (`ur-001`, van rechts naar links) afgerond, de 24e volledig vertaalde locale, met bijpassende
  `.locale-peer-id`-sidecars. Elk onderwerp is rechtstreeks uit de Engelse bron vertaald, de index (onderwerp 9.7) koppelt elke interne link opnieuw aan de Urdu-bestandsnaam ervan en de sectiemap is `موضوعات`.
  Gekoppeld aan de site en aangeboden op `/ur-001/` (alias `/ur/`).
- Een volledige handmatige vertaling vanaf nul van alle 63 onderwerpen naar het Indonesisch (`id-001`) afgerond, met bijpassende `.locale-peer-id`-sidecars. Er was geen bestaande Indonesische locale om op voort te bouwen,
  dus elk onderwerp is rechtstreeks uit de Engelse bron vertaald, en de index (onderwerp 9.7) koppelt elke interne link opnieuw aan de Indonesische bestandsnaam ervan. Gekoppeld aan de site en aangeboden op
  `/id-001/` (alias `/id/`).
- Russisch (`ru-001`) en Chinees (`zh-001`) toegevoegd als 21e en 22e volledig vertaalde locale: elk met alle 63 onderwerpen, met bijpassende `.locale-peer-id`-sidecars, inhoudelijk
  identiek aan `ru-ru` en `zh-cn`. Gekoppeld aan de site en aangeboden op `/ru-001/` en `/zh-001/` (aliassen `/ru/` en `/zh/`).
- Frans (`fr-001`) toegevoegd als 20e volledig vertaalde locale: alle 63 onderwerpen met bijpassende `.locale-peer-id`-sidecars, inhoudelijk identiek aan `fr-fr`.
  Gekoppeld aan de site en aangeboden op `/fr-001/` (alias `/fr/`).
- Bengaals (`bn-001`) toegevoegd als 19e volledig vertaalde locale: alle 63 onderwerpen met bijpassende `.locale-peer-id`-sidecars, inhoudelijk identiek aan `bn-bd`.
  Gekoppeld aan de site en aangeboden op `/bn-001/` (alias `/bn/`).
- Arabisch (`ar-001`) toegevoegd als 18e volledig vertaalde locale: alle 63 onderwerpen met bijpassende `.locale-peer-id`-sidecars, inhoudelijk identiek aan `ar-eg`.
  Gekoppeld aan de site en aangeboden op `/ar-001/` (alias `/ar/`).
- Welsh, Groot-Brittannië (`cy-gb`) toegevoegd als 17e volledig vertaalde locale: alle 63 onderwerpen met bijpassende `.locale-peer-id`-sidecars, inhoudelijk identiek aan `cy-001`
  (dezelfde relatie als `hi-id` tot `hi-001`). Gekoppeld aan de `SERVED_LOCALE_CODES` van de site en aangeboden op `/cy-gb/`.
- Een volledige handmatige vertaling vanaf nul van alle 63 onderwerpen naar het Nederlands, Nederland (`nl-nl`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`.
  Er was geen bestaande Nederlandse locale om op voort te bouwen, dus elk onderwerp is rechtstreeks uit de Engelse bron vertaald. De index (onderwerp 9.7) koppelt elke interne onderwerplink opnieuw aan de Nederlandse
  bestandsnaam ervan, volgens de aanpak voor `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr` en `sv-se`. Nog niet gekoppeld aan de site.
- Een volledige handmatige vertaling vanaf nul van alle 63 onderwerpen naar het Zweeds, Zweden (`sv-se`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`.
  Elk onderwerp is rechtstreeks uit de Engelse bron vertaald. De index (onderwerp 9.7) koppelt elke interne onderwerplink opnieuw aan de Zweedse bestandsnaam ervan, volgens de aanpak voor
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp`, `ru-ru` en `fr-fr`. Nog niet gekoppeld aan de site.
- Een volledige handmatige vertaling vanaf nul van alle 63 onderwerpen naar het Frans, Frankrijk (`fr-fr`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`.
  Elk onderwerp is rechtstreeks uit de Engelse bron vertaald. De index (onderwerp 9.7) koppelt elke interne onderwerplink opnieuw aan de Franse bestandsnaam ervan, volgens de aanpak voor
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp` en `ru-ru`. Nog niet gekoppeld aan de site.
- Een volledige handmatige vertaling vanaf nul van alle 63 onderwerpen naar het Russisch, Rusland (`ru-ru`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`.
  Elk onderwerp is rechtstreeks uit de Engelse bron vertaald. De index (onderwerp 9.7) koppelt elke interne onderwerplink opnieuw aan de Russische bestandsnaam ervan, volgens de aanpak voor
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es`, `pt-pt` en `ja-jp`. Nog niet gekoppeld aan de site.
- Een volledige handmatige vertaling vanaf nul van alle 63 onderwerpen naar het Japans, Japan (`ja-jp`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`.
  Elk onderwerp is rechtstreeks uit de Engelse bron vertaald. De index (onderwerp 9.7) koppelt elke interne onderwerplink opnieuw aan de Japanse bestandsnaam ervan, volgens de aanpak voor
  `ar-eg`, `bn-bd`, `ko-kr`, `es-es` en `pt-pt`. Nog niet gekoppeld aan de site.
- Een volledige handmatige vertaling vanaf nul van alle 63 onderwerpen naar het Portugees, Portugal (`pt-pt`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`.
  Elk onderwerp is rechtstreeks uit de Engelse bron vertaald. De index (onderwerp 9.7) koppelt elke interne onderwerplink opnieuw aan de Portugese bestandsnaam ervan, volgens de aanpak voor
  `ar-eg`, `bn-bd`, `ko-kr` en `es-es`. Nog niet gekoppeld aan de site.
- Spaans, Spanje (`es-es`) toegevoegd als volledig vertaalde locale, alle 63 onderwerpen, beginnend met een kopie van de bestaande Spaanse (`es-001`) vertaling (die bij inspectie al
  grammaticaal neutraal bleek, met een woordenschat die grotendeels al naar Spanje neigde) en daarna een gerichte terminologieronde voor de overgebleven minderheidsgebruiken, met name
  "incidente" naar "incidencia" voor het incidentmetriekendomein van dit boek, met de bijbehorende correcties van overeenstemming in geslacht overal. Nog niet gekoppeld aan de site.
- Een volledige handmatige vertaling van alle 63 onderwerpen naar het Koreaans, Korea (`ko-kr`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`. De index (onderwerp 9.7)
  koppelt elke interne onderwerplink opnieuw aan de Koreaanse bestandsnaam ervan, volgens de aanpak voor `ar-eg` en `bn-bd`. Nog niet gekoppeld aan de site.
- Hindi, India (`hi-id`) toegevoegd als volledig vertaalde locale, alle 63 onderwerpen, door de bestaande Hindi-vertaling (`hi-001`) woordelijk te kopiëren onder de met een land gemarkeerde localecode, omdat
  standaard-Hindi geen onafhankelijke India-specifieke variant heeft die apart met de hand vertaald moet worden. Nog niet gekoppeld aan de site.
- Een volledige handmatige vertaling van alle 63 onderwerpen naar het Bengaals, Bangladesh (`bn-bd`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`. Nog niet gekoppeld aan de site.
- Een volledige handmatige vertaling van alle 63 onderwerpen naar het Arabisch, Egypte (`ar-eg`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`. Nog niet gekoppeld aan de site.
- Een volledige handmatige vertaling van alle 63 onderwerpen naar het Duits, Duitsland (`de-de`) afgerond, met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`. Nog niet gekoppeld aan de site.
- Volledige handmatige vertalingen van alle 63 onderwerpen afgerond in drie locales: Welsh (`cy-001`), Chinees (`zh-cn`) en Hindi (`hi-001`), elk met bijpassende `.locale-peer-id`-sidecars en een geslaagde `just test`.
- Twee gepland vertaalde locales meer, Welsh - Groot-Brittannië (`cy-gb`) en Chinees (`zh-001`), toegevoegd aan `spec/locales-for-global-sharing-with-svelte/locales.tsv` en
  `spec/locales.md` (nu dertien geplande locales, tegen elf), en het eerder onbesliste endoniem van `zh-cn` vastgelegd als 中文. De `LOCALE_LABELS` van de site kregen bijpassende vermeldingen
  (`cy-gb`: "Cymraeg (Prydain Fawr)", `zh-001`: "中文", `zh-cn`: "中文 (中国)"). Voorlopig alleen infrastructuur: geen van deze locales heeft een map `locales/<code>/` of vertaalde inhoud.
- Het boek gepubliceerd in vier locales onder `locales/`: `en-gb-oxendict` (Brits Engels, Oxford-spelling; de met de hand geschreven bron), `en-001` (internationaal Engels), `en-gb`
  (gangbaar Brits Engels) en `en-us` (Amerikaans Engels). `en-001`, `en-gb` en `en-us` worden mechanisch van `en-gb-oxendict` afgeleid door de nieuwe `tools/localize.py`; zie
  `spec/locales.md`. `docs/` bestaat niet meer; elke verwijzing ernaar in `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py` en `tools/stats.py` wijst nu naar `locales/<locale>/`.
- Twee Claude Code-vaardigheden toegevoegd, `software-engineering-metrics-skill` (voor lezers die de richtlijnen van het boek op hun eigen team toepassen) en
  `software-engineering-metrics-maintainer-skill` (voor bijdragers die onderwerpen toevoegen of bewerken), onder `skills/` en gespiegeld naar `.claude/skills/`.
- De bron van de gepubliceerde website naar deze repository verplaatst als `software-engineering-metrics.github.io/`, voorheen een aparte repository. Ze leest nu `locales/` rechtstreeks uit de root van de repository
  in plaats van uit een ernaast uitgechecktte kopie. De `.github/workflows/deploy.yml` in de root controleert bij elke push naar `main` dat de site nog bouwt en stuurt dan een `repository_dispatch`
  naar de repository `software-engineering-metrics.github.io` (aangehouden als dunne deploy-schil, omdat GitHub Pages dat kale domein alleen vanuit een repository met precies die naam serveert),
  die deze monorepo uitcheckt, de site bouwt en deployt.
- Infrastructuur toegevoegd voor vertaalde (niet alleen spellingsafgeleide) locales, volgens de nieuwe subspec `spec/locales-for-global-sharing-with-svelte/`: `tools/gen_locale_peer_ids.py` geeft elk
  inhoudsbestand een `.locale-peer-id`-sidecar, identiek in alle locales, die een toekomstige vertaalde locale (met zijn eigen slug in het oorspronkelijke schrift) kan gebruiken om "deze pagina, in locale X" op te lossen
  in plaats van op slug te matchen; `tests/validate.py` controleert dat elke sidecar bestaat en overeenkomt. `spec/locales.md` legt tien geplande vertaalde locales vast (Arabisch, Bengaals, Welsh, Spaans, Frans,
  Hindi, Indonesisch, Portugees, Russisch, Urdu en Chinees - China). Aan de kant van de site kreeg `scripts/locales.mjs` `LOCALE_LABELS`/`localeLabel()` (weergavenamen voor elke geplande locale,
  klaar vóór de routering) en `sortedLocaleEntries()` (de sorteervolgorde die een toekomstige localelijst zou moeten gebruiken), en `src/lib/i18n.js` haalde de interface-strings (nav, zijbalk, pager, kiezers, voettekst,
  skiplinks) eruit die elk `.svelte`-component voorheen hardcodeerde in het Engels, doorgegeven via `ui(locale)`, met een terugval op het Engels voor elke locale zonder eigen vertaling.
- Het met de hand gemaakte, alleen-locale-kopbalkbesturingselement van de site vervangen door `@lilydesignsystem/svelte-picker-bar` van het [Lily Design System](https://lilydesignsystem.com/): een echte themakiezer
  (licht/donker, via nieuwe `static/assets/themes/{light,dark}.css`), een echte localekiezer (gekoppeld aan de op URL gebaseerde routering van deze site in plaats van zijn standaardgedrag met alleen lang/dir),
  een tekstgrootte-kiezer (Lily's zevenstapsschaal) en een deelkiezer (e-mail, Mastodon, link kopiëren). `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` vastgepind op
  `^0.1.2` en `@lilydesignsystem/svelte-headless` op `^0.2.0` via overrides in `pnpm-workspace.yaml`, om een echte gepubliceerde bug in de eigen afhankelijkheidsbereiken van `svelte-picker-bar` 0.1.0 te omzeilen
  (zie het `CHANGELOG.md` van elke kiezer, "0.1.2", en de `AGENTS.md` van deze site).
- De statistiekenrij van de startpagina (delen/onderwerpen/"Free Always") en de sectie "How to read it" verwijderd, en het kaartenraster "Browse the nine parts" vervangen door een gewone lijst met opsommingstekens.

### Changed

- `scripts/generate-sitemap.mjs` toegevoegd, dat aan het eind van `pnpm build` draait en `sitemap.xml` schrijft uit de vooraf gerenderde pagina's (alleen canonieke locale-URL's, geen dubbelen van aliassen met twee letters),
  zodat de regel `Sitemap:` in `robots.txt` oplost.
- Onderwerp 2.8, Lean-waardestroommetrieken, toegevoegd (doorlooptijd, procestijd, cyclustijd, percentage volledig en juist en taakttijd uit klassieke lean-waardestroomanalyse, plus de berekening van de gerolde doorvoeropbrengst),
  geplaatst na de wachtrijtheorie. De pull-request- en codereviewmetrieken verhuisden van 2.8 naar 2.9 en het onderwerp DORA-metrieken van 2.9 naar 2.10. Elke getroffen kruisverwijzing in het hele boek is bijgewerkt.
- Deel 2 hernoemd van "Delivery and Flow Metrics" naar "Flow Metrics" en herstructureerd rond het Flow Framework van Mik Kersten. Vier nieuwe onderwerpen toegevoegd: 2.1 Het Flow Framework, 2.2 Flow-items (features, defecten, risico's,
  schuld), 2.3 Flowsnelheid en flowverdeling en 2.4 Flowtijd en flowbelasting. De vier afzonderlijke DORA-metriekonderwerpen (deployfrequentie, doorlooptijd, wijzigingsfaalpercentage, hersteltijd) zijn
  samengevoegd in één referentieonderwerp, 2.9 Het DORA-metriekenraamwerk, verplaatst naar het eind van het deel. Flowefficiëntie en onderhanden werk zijn hernummerd naar 2.5 en het onderwerp wachtrijtheorie (voorheen 2.9)
  is hernoemd en hernummerd naar 2.7 Wachtrijtheorie. Doorlooptijd (2.6) en pull-request- en codereviewmetrieken (2.8) behouden hun nummers. Elke kruisverwijzing in het hele boek, de woordenlijst, de formulereferentie,
  de zelfbeoordeling van volwassenheid en het voorwerk is bijgewerkt om te kloppen.

### Added

- Eerste release: 45 inhoudelijke onderwerpen in 8 delen, plus een voorwerk en een bijlage van 7 onderwerpen (deel 9), die de DORA- en SPACE-raamwerken, code- en kwaliteitsmetrieken, product- en bedrijfsmetrieken,
  betrouwbaarheids- en beveiligingsmetrieken en de impact van generatieve AI op engineeringmetrieken behandelen.
- Repositoryinfrastructuur gespiegeld van het zusterproject `software-engineering-guide`: een specificatiegedreven `spec/` (index, structuur, conventies, oxford-spelling, roadmap), een validatiesuite in
  `tests/validate.py`, een navigatiegenerator in `tools/gen_nav.py`, een `justfile`, `AGENTS.md` met richtlijnen voor bijdragers onder `docs/contributing/`, `CONTRIBUTING.md` en dit wijzigingslogboek.
- `spec/structure.md`, het canonieke onderwerpenmanifest waartegen de tests bestanden controleren.
- Twee uitgewerkte voorbeelden in `docs/examples/`: een ingevuld metriekcharter en een dashboardspecificatie.

## Geschiedenis

Het boek is van de spec naar buiten toe opgebouwd: de structuur met negen delen werd eerst vastgelegd in `spec/structure.md`, daarna werd elk onderwerp geschreven tegen het gedeelde sjabloon in
`docs/contributing/chapter-template.md`, waarbij `tests/validate.py` de hele tijd structuur en huisstijl afdwong.

## Conventies voor dit bestand

- Groepeer wijzigingen onder **Added**, **Changed**, **Fixed**, **Removed** of **Deprecated**.
- Houd vermeldingen kort en specifiek. Waar mogelijk één regel per stuk.
- Gebruik ook hier geen gedachtestreepjes; de tests controleren dit bestand ook.
