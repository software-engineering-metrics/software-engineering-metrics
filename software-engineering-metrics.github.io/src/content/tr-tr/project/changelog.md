# Değişiklik günlüğü

Kitapta ve araçlarında yapılan önemli değişiklikler. En yeni kayıtlar en üsttedir.
Tarihler ISO 8601 biçimindedir (YYYY-MM-DD).

## [Unreleased]

### Changed

- Vietnamca (`vi-001`, `vi-vn`in birebir kopyası) tam bir çevrilmiş yerel olarak eklendi: 63 konunun tamamı ve diğer her bölüm, eşleşen `.locale-peer-id` yan dosyaları ve kendi `sitemap.xml` dosyasıyla. `vi-001` ve `vi-vn` siteye bağlandı ve `/vi-001/` ile `/vi-vn/` adreslerinde sunuluyor. Bu, akıcı bir Vietnamca konuşan kişi tarafından gözden geçirilmemiş, yapay zekâ ile üretilmiş bir taslaktır.
- Danca (`da-001`) tam bir çevrilmiş yerel olarak eklendi: 63 konunun tamamı ve diğer her bölüm, eşleşen `.locale-peer-id` yan dosyaları ve kendi `sitemap.xml` dosyasıyla. `da-001` siteye bağlandı ve `/da-001/` adresinde sunuluyor.
- `id-id` ve `it-it`, sırasıyla `id-001` ve `it-001`in özdeş kopyaları olarak eklendi; siteye bağlandı ve `/id-id/` ile `/it-it/` adreslerinde sunuluyor.
- Site: `is-is`, `nl-nl` ve `sv-se` artık bağlandı ve `-001` kopyalarının yanında `/is-is/`, `/nl-nl/` ve `/sv-se/` adreslerinde sunuluyor.
- Svahilice (Tanzanya) `sw-tz` olarak eklendi; `sw-001`in özdeş kopyasıdır, eşleşen `.locale-peer-id` yan dosyaları ve kendi `sitemap.xml` dosyası vardır. `sw-tz` siteye bağlandı ve `/sw-tz/` adresinde sunuluyor.
- İtalyanca (`it-001`), 34. tam çevrilmiş yerel olarak eklendi: 63 konunun tamamı ve diğer her bölüm, eşleşen `.locale-peer-id` yan dosyalarıyla. `it-001` siteye bağlandı ve `/it-001/` adresinde sunuluyor.
- Svahilice (`sw-001`), 33. tam çevrilmiş yerel olarak eklendi: 63 konunun tamamı ve diğer her bölüm, eşleşen `.locale-peer-id` yan dosyalarıyla. `sw-001` siteye bağlandı ve `/sw-001/` adresinde sunuluyor.
- İzlandaca (`is-is`) ve `is-001`, 31. ve 32. tam çevrilmiş yerel olarak eklendi: 63 konunun tamamı ve diğer her bölüm, eşleşen `.locale-peer-id` yan dosyalarıyla; `is-001` içerik olarak `is-is` ile özdeştir. `is-001` siteye bağlandı ve `/is-001/` adresinde sunuluyor.
- Site: kök sayfanın tarayıcı diline göre yönlendirmesi, tam eşleşme olmadığında artık bir dilin uluslararası üst kümesine
  geri düşüyor: `en-AU` için `/en-001/`, `es-MX` için `/es-001/` ve
  `zh-TW` için `/zh-001/`. `/en/` gibi bir takma ad URL'si artık yerel seçici üzerinden `/en-001/` adresine sekmiyor.

### Added

- `spec/locales.md` artık her `locales/` dizininin `<language>-<region>` biçiminde adlandırılmasını gerektiriyor; iki harfli çıplak adlar
  yalnızca site URL takma adlarıdır ve `tests/validate.py` bunu uygular. İki harfli hiçbir dizin yoktu, bu yüzden hiçbir şey silinmedi.
- İsveççe (`sv-001`), 30. tam çevrilmiş yerel olarak eklendi: 63 konunun tamamı ve diğer her bölüm, eşleşen
  `.locale-peer-id` yan dosyalarıyla; içerik olarak `sv-se` ile özdeştir. Siteye bağlandı ve `/sv-001/` adresinde sunuluyor (takma ad `/sv/`).
- Japonca (`ja-001`), Korece (`ko-001`) ve Felemenkçe (`nl-001`), 27. ile 29. tam çevrilmiş
  yerel olarak eklendi: 63 konunun tamamı ve diğer her bölüm, eşleşen `.locale-peer-id` yan dosyalarıyla; içerik olarak
  sırasıyla `ja-jp`, `ko-kr` ve `nl-nl` ile özdeştir. Siteye bağlandı ve `/ja-001/`, `/ko-001/` ve `/nl-001/` adreslerinde sunuluyor
  (takma adlar `/ja/`, `/ko/` ve `/nl/`).

### Added

- Ön söz, örnekler, katkı ve proje bölümleri (14 dosya, artı bir değişiklik günlüğü, bir
  ana sayfa `index.md` ve yerel başına bir içindekiler) her çevrilmiş yerele çevrildi: `ar`, `bn`, `cy`, `de`,
  `es`, `fr`, `hi`, `id`, `ja`, `ko`, `nl`, `pt`, `ru`, `sv`, `ur` ve `zh`; yinelenen çift
  yereller (`ar-001`/`ar-eg` gibi) özdeş tutuldu. Dizinler `spec/section-names.json` içindeki yerel başına adları
  kullanır. Yeni `tools/gen_translated_nav.py`, her çevrilmiş ana sayfayı ve içindekileri konu başlıklarından
  yeniler, `tests/validate.py` çevrilmiş test, stil kuralları ve dizin
  belgelerini yan dosya kimliğine göre muaf tutar ve sitenin `scripts/sync-content.mjs` betiği bu bölümlerdeki çevrilmiş dosya adlarını
  `.locale-peer-id` yan dosyaları aracılığıyla kanonik İngilizce adlarına eşler.

### Changed

- Felemenkçe (`nl-nl`): 9.0, 9.3 ve 9.4 konularının kalan İngilizce başlıkları ve slug'ları çevrildi
  (`bijlagen`, `controlelijsten`, `sjablonen`).
- Galce (`cy-001`, `cy-gb`): terminoloji TermCymru ile hizalandı: `risg` (risk, `perygl` yerine,
  cinsiyet uyumuyla), `cyfnewidiad` (ödünleşim), `dangosydd rhagfynegi` ve
  `dangosydd ôl-fynegi` (öncü ve artçı gösterge, `hwyrfrydig` yerine), `cynhwysedd`
  (kapasite), `dosraniad` (dağılım), `cydberthynas` (korelasyon), 1.3 konusunda çıktı için `allbwn` ve `cyfradd gadael staff` (personel
  ayrılma oranı). Dört konu slug'ı buna uyacak biçimde yeniden adlandırıldı.
- Site: `@lilydesignsystem/svelte-picker-bar` 0.2.0 sürümüne yükseltildi; başlık çubuğuna
  bir arama seçici ekler ve mevcut `/?<query>` site aramasına gönderir.
- Her derlemenin sonunda çalışan `scripts/generate-sitemap.mjs` eklendi (`pnpm build`); önceden işlenmiş sayfalardan
  `sitemap.xml` yazar (yalnızca kanonik yerel URL'leri, iki harfli takma ad
  kopyaları yok), böylece `robots.txt` içindeki `Sitemap:` satırı
  çözülür.
- `AGENTS.md` artık kısa bir dizindir; ayrıntılar `AGENTS/layout.md`, `style.md`,
  `locales.md` ve `workflow.md` dosyalarına taşındı.
- Belge taraması: `AGENTS.md`, `index.md`, üretilen
  README yerel metni, `spec/index.md`, `spec/locales.md` ile sitenin
  `AGENTS.md` ve `README.md` dosyaları 27 yerel, yerel başına bölüm dizin
  adları ve yeni araçlar için yenilendi; `CLAUDE.md` eklendi (`AGENTS.md`ye bir işaretçi);
  iki ajan becerisindeki bayat `docs/` yolları düzeltildi ve
  `skills/`, `.claude/skills/` dizininin kanonik kopyası yapıldı (testlerle denetlenir).
- Sitenin `static/` dizinine `llms.txt` ve `llms.json` (sunulan her yerel
  ve konunun bir yapay zekâ ajanı dizini) eklendi; `tools/gen_llms.py`
  (`just llms`) ile üretilir ve testlerle denetlenir.
- Site ana sayfası: "dokuz bölüm" karo listesi artık tüm bölümlerin ve konuların iç içe "İçindekiler" listesidir ve
  "Goodhart yasası, her yerde" bölümü kaldırıldı.
- Kitabın düz yazısındaki "chapter" sözcüğü her yerelde "topic" olarak değiştirildi (örneğin "topic 2.1", "Topics in this part");
  her dilin kendi konu sözcüğü kullanıldı (`tema`, `sujet`, `Thema`, `тема`, `主題`
  vb.). Bu değişiklik belirtimi, araçların ürettiği metni ve sitenin arayüz dizelerini de kapsar. Dosya adları, URL'ler
  ve bölüm anahtarları değişmedi.
- `locales/` altındaki her bölüm dizin adı çevrildi: `chapters/` artık
  `topics/` (ve her diğer yerelde karşılığı, örn. `temas/`,
  `sujets/`, `themen/`) ve `es-001`in `examples/` dizini `ejemplos/` oldu. Adlar
  `spec/section-names.json` içinde durur; araçlar, testler ve sitenin içerik
  eşitlemesi onları oradan okur ve sitenin URL'leri değişmedi.

### Changed

- Galce yerelleri (`cy-001`, `cy-gb`, özdeş tutuldu), Galler
  Hükümeti'nin TermCymru terminoloji listesine karşı gözden geçirildi: esenlik için `llesiant`,
  üretkenlik için `cynhyrchiant`, güvenlik açığı için `gwendid`/`gwendidau`,
  yönetişim için `llywodraethiant`, korelasyon için `cydberthynas`,
  backlog için `ôl-groniad` (önceden İngilizce bırakılmıştı), maliyet-fayda için `cost a budd` ve her konuda yapay zekânın
  ilk anılışında `deallusrwydd artiffisial (AI)`.

### Added

- Almanca (`de-001`), 26. tam çevrilmiş yerel olarak eklendi: eşleşen `.locale-peer-id` yan dosyalarıyla
  63 konunun tamamı; içerik olarak `de-de` ile özdeştir. Siteye bağlandı ve `/de-001/` adresinde sunuluyor (takma ad `/de/`).
- Portekizce (`pt-001`), 25. tam çevrilmiş yerel olarak eklendi: eşleşen `.locale-peer-id` yan dosyalarıyla
  63 konunun tamamı; içerik olarak `pt-pt` ile özdeştir. Siteye bağlandı ve `/pt-001/` adresinde sunuluyor (takma ad `/pt/`).
- 63 konunun tamamı sıfırdan elle Urduca'ya (`ur-001`, sağdan sola) çevrildi;
  bu, 24. tam çevrilmiş yerel olup eşleşen `.locale-peer-id` yan dosyalarına sahiptir. Her konu doğrudan
  İngilizce kaynaktan çevrildi, dizin (9.7 konusu) her iç bağlantıyı Urduca dosya adına
  yeniden eşler ve bölüm dizini `موضوعات` adını taşır. Siteye bağlandı
  ve `/ur-001/` adresinde sunuluyor (takma ad `/ur/`).
- 63 konunun tamamı sıfırdan elle Endonezyaca'ya (`id-001`) çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla. Üzerine
  kurulabilecek önceki bir Endonezyaca yerel yoktu, bu yüzden her konu doğrudan İngilizce kaynaktan çevrildi ve dizin
  (9.7 konusu) her iç bağlantıyı Endonezyaca dosya adına yeniden eşler. Siteye bağlandı ve
  `/id-001/` adresinde sunuluyor (takma ad `/id/`).
- Rusça (`ru-001`) ve Çince (`zh-001`), 21. ve 22. tam çevrilmiş yerel olarak eklendi: her biri
  63 konu, eşleşen `.locale-peer-id` yan dosyalarıyla; içerik olarak
  sırasıyla `ru-ru` ve `zh-cn` ile özdeştir.
  Siteye bağlandı ve `/ru-001/` ile `/zh-001/` adreslerinde sunuluyor (takma adlar
  `/ru/` ve `/zh/`).
- Fransızca (`fr-001`), 20. tam çevrilmiş yerel olarak eklendi: eşleşen `.locale-peer-id` yan dosyalarıyla 63
  konu; içerik olarak `fr-fr` ile özdeştir. Siteye bağlandı ve `/fr-001/` adresinde sunuluyor (takma ad `/fr/`).
- Bengalce (`bn-001`), 19. tam çevrilmiş yerel olarak eklendi: eşleşen `.locale-peer-id` yan dosyalarıyla 63
  konu; içerik olarak `bn-bd` ile özdeştir. Siteye bağlandı ve `/bn-001/` adresinde sunuluyor (takma ad `/bn/`).
- Arapça (`ar-001`), 18. tam çevrilmiş yerel olarak eklendi: eşleşen `.locale-peer-id` yan dosyalarıyla 63
  konu; içerik olarak `ar-eg` ile özdeştir. Siteye bağlandı ve `/ar-001/` adresinde sunuluyor (takma ad `/ar/`).
- Galce, Büyük Britanya (`cy-gb`), 17. tam çevrilmiş
  yerel olarak eklendi: eşleşen `.locale-peer-id` yan dosyalarıyla 63 konu; içerik olarak `cy-001` ile özdeştir
  (`hi-id`in `hi-001` ile ilişkisi gibi).
  Sitenin `SERVED_LOCALE_CODES` listesine bağlandı ve `/cy-gb/` adresinde sunuluyor.
- 63 konunun tamamı sıfırdan elle Felemenkçe, Hollanda (`nl-nl`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla ve
  geçen `just test` ile. Üzerine kurulabilecek önceki bir Felemenkçe yerel yoktu, bu yüzden
  her konu doğrudan İngilizce kaynaktan çevrildi. Dizin
  (9.7 konusu) her iç konu bağlantısını Felemenkçe
  dosya adına yeniden eşler; `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr` ve `sv-se` için kullanılan yaklaşım izlendi. Henüz siteye
  bağlanmadı.
- 63 konunun tamamı sıfırdan elle İsveççe, İsveç (`sv-se`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla ve
  geçen `just test` ile. Üzerine kurulabilecek önceki bir İsveççe yerel yoktu, bu yüzden
  her konu doğrudan İngilizce kaynaktan çevrildi. Dizin
  (9.7 konusu) her iç konu bağlantısını İsveççe
  dosya adına yeniden eşler; `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru` ve `fr-fr` için kullanılan yaklaşım izlendi. Henüz
  siteye bağlanmadı.
- 63 konunun tamamı sıfırdan elle Fransızca, Fransa (`fr-fr`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla ve
  geçen `just test` ile. Üzerine kurulabilecek önceki bir Fransızca yerel yoktu, bu yüzden
  her konu doğrudan İngilizce kaynaktan çevrildi. Dizin
  (9.7 konusu) her iç konu bağlantısını Fransızca
  dosya adına yeniden eşler; `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp` ve `ru-ru` için kullanılan yaklaşım izlendi. Henüz siteye bağlanmadı.
- 63 konunun tamamı sıfırdan elle Rusça, Rusya (`ru-ru`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla ve
  geçen `just test` ile. Üzerine kurulabilecek önceki bir Rusça yerel yoktu, bu yüzden
  her konu doğrudan İngilizce kaynaktan çevrildi. Dizin
  (9.7 konusu) her iç konu bağlantısını Rusça
  dosya adına yeniden eşler; `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt` ve `ja-jp` için kullanılan yaklaşım izlendi. Henüz siteye bağlanmadı.
- 63 konunun tamamı sıfırdan elle Japonca, Japonya (`ja-jp`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla ve
  geçen `just test` ile. Üzerine kurulabilecek önceki bir Japonca yerel yoktu, bu yüzden
  her konu doğrudan İngilizce kaynaktan çevrildi. Dizin
  (9.7 konusu) her iç konu bağlantısını Japonca
  dosya adına yeniden eşler; `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es` ve `pt-pt` için kullanılan yaklaşım izlendi. Henüz siteye bağlanmadı.
- 63 konunun tamamı sıfırdan elle Portekizce, Portekiz (`pt-pt`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla
  ve geçen `just test` ile. Üzerine kurulabilecek önceki bir Portekizce yerel yoktu, bu yüzden her konu
  doğrudan İngilizce kaynaktan çevrildi.
  Dizin (9.7 konusu) her iç konu bağlantısını Portekizce
  dosya adına yeniden eşler; `ar-eg`, `bn-bd`,
  `ko-kr` ve `es-es` için kullanılan yaklaşım izlendi. Henüz siteye bağlanmadı.
- İspanyolca, İspanya (`es-es`) tam bir çevrilmiş yerel olarak eklendi, 63
  konunun tamamı; mevcut İspanyolca (`es-001`)
  çevirisinin bir kopyasından başlandı (incelemede dil bilgisi açısından zaten nötr
  olduğu ve söz varlığının çoğunlukla İspanya'ya yakın olduğu görüldü), ardından kalan azınlık kullanımları için
  hedefli bir terminoloji taramasıyla, özellikle bu kitabın olay metrikleri
  alanında "incidente" yerine "incidencia" kullanılarak ve karşılık gelen cinsiyet
  uyumu düzeltmeleri baştan sona uygulanarak. Henüz siteye
  bağlanmadı.
- 63 konunun tamamı elle Korece, Kore (`ko-kr`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla ve geçen
  `just test` ile. Dizin (9.7 konusu) her iç konu bağlantısını Korece dosya adına
  yeniden eşler; `ar-eg` ve `bn-bd` için kullanılan yaklaşım izlendi. Henüz siteye
  bağlanmadı.
- Hintçe, Hindistan (`hi-id`) tam bir çevrilmiş yerel olarak eklendi, 63
  konunun tamamı; mevcut Hintçe (`hi-001`) çevirisi ülke etiketli yerel koduyla
  olduğu gibi kopyalanarak, çünkü standart Hintçe'nin ayrıca elle çevrilecek
  Hindistan'a özgü bir çeşidi yoktur. Henüz siteye
  bağlanmadı.
- 63 konunun tamamı elle Bengalce, Bangladeş (`bn-bd`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla ve
  geçen `just test` ile. Henüz siteye bağlanmadı.
- 63 konunun tamamı elle Arapça, Mısır (`ar-eg`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla ve geçen
  `just test` ile. Henüz siteye bağlanmadı.
- 63 konunun tamamı elle Almanca, Almanya (`de-de`) diline çevrildi; eşleşen `.locale-peer-id` yan dosyalarıyla ve geçen
  `just test` ile. Henüz siteye bağlanmadı.
- 63 konunun tamamı üç yerele elle çevrildi:
  Galce (`cy-001`), Çince (`zh-cn`) ve Hintçe (`hi-001`); her biri
  eşleşen `.locale-peer-id` yan dosyalarıyla ve geçen `just test` ile.
- `spec/locales-for-global-sharing-with-svelte/locales.tsv` ve
  `spec/locales.md` dosyalarına planlanmış iki çevrilmiş yerel daha eklendi: Galce - Büyük Britanya
  (`cy-gb`) ve Çince (`zh-001`) (artık on üç planlanmış yerel, önceden on bir),
  ve `zh-cn`in önceden belirsiz olan endonimi 中文 olarak çözüldü. Sitenin
  `LOCALE_LABELS` listesine eşleşen girdiler eklendi (`cy-gb`: "Cymraeg (Prydain
  Fawr)", `zh-001`: "中文", `zh-cn`: "中文 (中国)"). Hâlâ yalnızca
  altyapı: bu yerellerin hiçbirinde henüz `locales/<code>/` dizini ya da çevrilmiş
  içerik yok.
- Kitap `locales/` altında dört yerelde yayımlandı: `en-gb-oxendict`
  (Britanya İngilizcesi, Oxford yazımı; elle yazılan kaynak), `en-001`
  (uluslararası İngilizce), `en-gb` (yaygın Britanya İngilizcesi) ve `en-us`
  (Amerikan İngilizcesi). `en-001`, `en-gb` ve `en-us`, yeni `tools/localize.py` ile
  `en-gb-oxendict`ten mekanik olarak türetilir; bkz.
  `spec/locales.md`. `docs/` artık yok; `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py`
  ve `tools/stats.py` içindeki her başvuru artık `locales/<locale>/` dizinini işaret eder.
- İki Claude Code becerisi eklendi: `software-engineering-metrics-skill` (kitabın
  rehberliğini kendi ekiplerine uygulayan okurlar için) ve
  `software-engineering-metrics-maintainer-skill` (konu ekleyen veya düzenleyen katkıda bulunanlar için), `skills/` altında
  ve `.claude/skills/` içine yansıtılarak.
- Yayımlanan web sitesinin kaynağı, daha önce ayrı bir depo olan
  `software-engineering-metrics.github.io/` olarak bu depoya taşındı.
  Artık komşu bir çıkışa değil, doğrudan depo kökündeki `locales/` dizinini okur. Kökteki `.github/workflows/deploy.yml`
  her `main` push'unda sitenin hâlâ derlendiğini doğrular, ardından
  `software-engineering-metrics.github.io` deposuna bir `repository_dispatch` gönderir (GitHub Pages bu çıplak alan adını yalnızca tam olarak o adı taşıyan
  bir depodan sunacağı için ince bir dağıtım kabuğu olarak tutulur); o depo bu monoreposu çıkarır, siteyi derler ve
  dağıtır.
- Çevrilmiş (yalnızca yazım türevi olmayan) yereller için altyapı eklendi;
  yeni `spec/locales-for-global-sharing-with-svelte/` alt belirtimine göre:
  `tools/gen_locale_peer_ids.py`, her içerik dosyasına yerellerde özdeş bir
  `.locale-peer-id` yan dosyası atar; böylece kendi ana dil yazısıyla slug'ları olan gelecekteki çevrilmiş bir yerel
  slug eşleştirmek yerine "bu sayfa, X yerelinde" sorusunu çözebilir; `tests/validate.py`
  her yan dosyanın var olduğunu ve eşleştiğini denetler. `spec/locales.md` on
  planlanmış çevrilmiş yereli belgeler (Arapça, Bengalce, Galce, İspanyolca, Fransızca, Hintçe,
  Endonezyaca, Portekizce, Rusça, Urduca ve Çince - Çin); hiçbiri henüz
  çevrilmediği için hiçbirinin henüz `locales/<code>/` dizini yoktur. Sitede
  `scripts/locales.mjs` dosyasına `LOCALE_LABELS`/`localeLabel()` (her
  planlanmış yerel için bir görünen ad, yönlendirmeden önce hazır) ve
  `sortedLocaleEntries()` (gelecekteki bir yerel listesinin kullanması gereken sıralama düzeni) eklendi ve
  `src/lib/i18n.js`, her `.svelte` bileşeninin önceden İngilizce olarak
  koda gömdüğü arayüz dizelerini (gezinme, kenar çubuğu, sayfalayıcı,
  seçici, altbilgi, atlama bağlantısı) ayıkladı; bunlar `ui(locale)` ile aktarılır ve kendi çevirisi olmayan her yerel için
  İngilizceye geri düşer.
- Sitenin elle oluşturulmuş, yalnızca yerel seçimli başlık denetimi, [Lily Design System](https://lilydesignsystem.com/)in
  `@lilydesignsystem/svelte-picker-bar` bileşeniyle değiştirildi: gerçek bir tema seçici (açık/koyu, yeni
  `static/assets/themes/{light,dark}.css` ile), gerçek yerel seçici
  (varsayılan lang/dir-yalnızca davranışı yerine bu sitenin URL tabanlı yönlendirmesine bağlı), bir metin boyutu seçici
  (Lily'nin yedi kademeli ölçeği) ve bir paylaşım seçici (e-posta, Mastodon, bağlantıyı kopyala). `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker`
  `^0.1.2` sürümüne ve `@lilydesignsystem/svelte-headless` `^0.2.0` sürümüne `pnpm-workspace.yaml` geçersiz kılmalarıyla sabitlendi;
  bu, `svelte-picker-bar` 0.1.0'ın kendi bağımlılık aralıklarındaki yayımlanmış gerçek bir hatayı aşar (bkz. her seçicinin
  `CHANGELOG.md` dosyası, "0.1.2" ve bu sitenin `AGENTS.md` dosyası).
- Ana sayfanın istatistik satırı (bölümler/konular/"Her Zaman Ücretsiz") ve
  "Nasıl okunur" bölümü kaldırıldı, "Dokuz bölüme göz atın" kart
  ızgarası ise düz bir madde listesiyle değiştirildi.

### Changed

- Her derlemenin sonunda çalışan `scripts/generate-sitemap.mjs` eklendi (`pnpm build`); önceden işlenmiş sayfalardan
  `sitemap.xml` yazar (yalnızca kanonik yerel URL'leri, iki harfli takma ad
  kopyaları yok), böylece `robots.txt` içindeki `Sitemap:` satırı
  çözülür.
- 2.8 konusu eklendi, Lean değer akışı metrikleri (klasik
  Lean değer akışı haritalamasından lead time, süreç süresi,
  cycle time, yüzde tam ve doğru ve takt time, ayrıca toplam geçiş verimi
  hesabı); kuyruk kuramından sonra yerleştirildi. Pull request ve kod gözden geçirme metrikleri
  2.8'den 2.9'a, DORA metrikleri konusu ise 2.9'dan 2.10'a taşındı.
  Kitap genelinde etkilenen her çapraz başvuru güncellendi.
- 2. Bölümün adı "Delivery and Flow Metrics" yerine "Flow Metrics" oldu ve
  Mik Kersten'in Flow Framework'ü etrafında yeniden düzenlendi. Dört yeni
  konu eklendi: 2.1 The Flow Framework, 2.2 Flow items (features, defects,
  risks, debt), 2.3 Flow velocity and flow distribution ve 2.4 Flow time
  and flow load. Dört ayrı DORA metrik konusu (dağıtım sıklığı,
  lead time, değişiklik başarısızlık oranı, kurtarma süresi),
  bölümün sonuna taşınan tek bir başvuru konusunda, 2.9 The DORA metrics framework,
  birleştirildi. Akış verimliliği ve süreçteki iş 2.5 olarak yeniden numaralandırıldı ve kuyruk kuramı
  konusu (önceden 2.9) 2.7 Queueing theory olarak yeniden adlandırılıp yeniden numaralandırıldı. Cycle time (2.6) ile pull request ve kod
  gözden geçirme metrikleri (2.8) numaralarını korur. Kitap genelindeki her çapraz başvuru,
  sözlük, formüller başvurusu, olgunluk
  öz değerlendirmesi ve ön söz buna uyacak biçimde güncellendi.

### Added

- İlk sürüm: 8 bölümde 45 esaslı konu, artı ön söz
  ve 7 konuluk bir ek (9. Bölüm); DORA ve SPACE çerçevelerini,
  kod ve kalite metriklerini, ürün ve iş metriklerini, güvenilirlik ve
  güvenlik metriklerini ve üretken yapay zekânın mühendislik metriklerine etkisini kapsar.
- Kardeş `software-engineering-guide` projesinden yansıtılan depo altyapısı: belirtime dayalı bir `spec/`
  (index, structure, conventions, oxford spelling, roadmap), `tests/validate.py` içinde bir doğrulama
  paketi, `tools/gen_nav.py` içinde bir gezinme üreticisi,
  bir `justfile`, `docs/contributing/` altında katkıda bulunan kılavuzlarıyla `AGENTS.md`,
  `CONTRIBUTING.md` ve bu değişiklik günlüğü.
- `spec/structure.md`, testlerin dosyaları karşısında denetlediği
  kanonik konu bildirimi.
- `docs/examples/` içinde iki çalışılmış örnek: doldurulmuş bir metrik tüzüğü ve bir
  pano belirtimi.

## Tarihçe

Kitap belirtimden dışarıya doğru oluşturuldu: dokuz bölümlü yapı önce
`spec/structure.md` içinde bildirildi, ardından her konu
`docs/contributing/chapter-template.md` içindeki ortak şablona göre yazıldı ve
`tests/validate.py` yapıyı ve üslubu baştan sona uyguladı.

## Bu dosya için kurallar

- Değişiklikleri **Added**, **Changed**, **Fixed**, **Removed** veya
  **Deprecated** altında gruplayın.
- Kayıtları kısa ve belirli tutun. Mümkünse her biri bir satır.
- Burada da em tire kullanmayın; testler bu dosyayı da denetler.
