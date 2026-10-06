# Catatan perubahan

Perubahan penting pada buku dan perkakasnya. Entri terbaru ada di bagian atas.
Tanggal memakai ISO 8601 (YYYY-MM-DD).

## [Unreleased]

### Changed

- Belanda (`nl-nl`): menerjemahkan judul dan slug berbahasa Inggris yang tersisa pada topik 9.0, 9.3, dan 9.4
  (`bijlagen`, `controlelijsten`, `sjablonen`).
- Wales (`cy-001`, `cy-gb`): terminologi diselaraskan dengan TermCymru: `risg` (risiko, menggantikan
  `perygl`, dengan kesesuaian gender), `cyfnewidiad` (trade-off), `dangosydd rhagfynegi` dan
  `dangosydd ôl-fynegi` (indikator pemandu dan penyusul, menggantikan `hwyrfrydig`), `cynhwysedd`
  (kapasitas), `dosraniad` (distribusi), `cydberthynas` (korelasi), `allbwn` untuk keluaran di
  topik 1.3, dan `cyfradd gadael staff` (atrisi). Empat slug topik diganti namanya agar cocok.
- Situs: memutakhirkan `@lilydesignsystem/svelte-picker-bar` ke 0.2.0, yang menambahkan pemilih
  pencarian ke bilah header; ia mengirim ke pencarian situs yang ada `/?<query>`.
- Menambahkan `scripts/generate-sitemap.mjs`, dijalankan di akhir `pnpm build`, yang
  menulis `sitemap.xml` dari halaman yang sudah dirender di muka (hanya URL lokal kanonis,
  tanpa duplikat alias dua huruf) agar baris `Sitemap:` di `robots.txt`
  terselesaikan.
- `AGENTS.md` kini menjadi indeks singkat; rincian pindah ke `AGENTS/layout.md`, `style.md`,
  `locales.md`, dan `workflow.md`.
- Penyisiran dokumentasi: menyegarkan `AGENTS.md`, `index.md`, teks lokal README yang
  dihasilkan, `spec/index.md`, `spec/locales.md`, serta `AGENTS.md` dan `README.md` situs
  untuk 27 lokal, nama direktori bagian per lokal, dan perkakas baru; menambahkan `CLAUDE.md` (penunjuk ke
  `AGENTS.md`); memperbaiki jalur `docs/` yang usang di kedua skill agen dan menjadikan
  `skills/` salinan kanonis dari `.claude/skills/` (diperiksa oleh pengujian).
- Menambahkan `llms.txt` dan `llms.json` (indeks agen AI untuk setiap lokal dan topik yang
  dilayani) ke `static/` situs, dihasilkan oleh `tools/gen_llms.py`
  (`just llms`) dan diperiksa oleh pengujian.
- Beranda situs: daftar ubin "sembilan bagian" kini menjadi daftar bersarang "Isi" dari semua
  bagian dan topik, dan bagian "Hukum Goodhart, di mana-mana" dihapus.
- Mengubah kata "chapter" menjadi "topic" di seluruh prosa buku di setiap
  lokal (misalnya "topik 2.1", "Topik di bagian ini"), memakai kata masing-masing
  bahasa untuk topik (`tema`, `sujet`, `Thema`, `тема`, `主題`,
  dan seterusnya), serta di spesifikasi, teks yang dihasilkan perkakas, dan string
  antarmuka situs. Nama berkas, URL, dan kunci bagian tidak berubah.
- Menerjemahkan setiap nama direktori bagian di bawah `locales/`: `chapters/` kini
  `topics/` (dan terjemahannya di setiap lokal lain, mis. `temas/`,
  `sujets/`, `themen/`), dan `examples/` milik `es-001` menjadi `ejemplos/`. Nama-nama itu
  tinggal di `spec/section-names.json`; perkakas, pengujian, dan sinkronisasi konten situs
  membacanya dari sana, dan URL situs tidak berubah.

### Changed

- Merevisi lokal Wales (`cy-001`, `cy-gb`, dijaga identik) terhadap daftar
  terminologi TermCymru Pemerintah Wales: `llesiant` untuk kesejahteraan,
  `cynhyrchiant` untuk produktivitas, `gwendid`/`gwendidau` untuk kerentanan,
  `llywodraethiant` untuk tata kelola, `cydberthynas` untuk korelasi,
  `ôl-groniad` untuk backlog (sebelumnya dibiarkan dalam bahasa Inggris), `cost a budd` untuk
  biaya-manfaat, dan `deallusrwydd artiffisial (AI)` pada sebutan pertama AI
  di setiap topik.

### Added

- Menambahkan Jerman (`de-001`) sebagai lokal ke-26 yang diterjemahkan penuh: seluruh 63
  topik dengan sidecar `.locale-peer-id` yang cocok, identik isinya dengan
  `de-de`. Dihubungkan ke situs dan dilayani di `/de-001/` (alias `/de/`).
- Menambahkan Portugis (`pt-001`) sebagai lokal ke-25 yang diterjemahkan penuh: seluruh 63
  topik dengan sidecar `.locale-peer-id` yang cocok, identik isinya dengan
  `pt-pt`. Dihubungkan ke situs dan dilayani di `/pt-001/` (alias `/pt/`).
- Menyelesaikan terjemahan tangan penuh dari nol atas seluruh 63 topik ke
  Urdu (`ur-001`, kanan-ke-kiri), lokal ke-24 yang diterjemahkan penuh, dengan
  sidecar `.locale-peer-id` yang cocok. Setiap topik diterjemahkan langsung
  dari sumber berbahasa Inggris, indeks (topik 9.7) memetakan ulang setiap tautan internal
  ke nama berkas Urdu-nya, dan direktori bagiannya `موضوعات`. Dihubungkan ke
  situs dan dilayani di `/ur-001/` (alias `/ur/`).
- Menyelesaikan terjemahan tangan penuh dari nol atas seluruh 63 topik ke
  Indonesia (`id-001`), dengan sidecar `.locale-peer-id` yang cocok. Tidak ada
  lokal Indonesia sebelumnya sebagai dasar, jadi setiap topik diterjemahkan
  langsung dari sumber berbahasa Inggris, dan indeks (topik 9.7) memetakan ulang setiap
  tautan internal ke nama berkas Indonesia-nya. Dihubungkan ke situs dan dilayani di
  `/id-001/` (alias `/id/`).
- Menambahkan Rusia (`ru-001`) dan Tionghoa (`zh-001`) sebagai lokal ke-21 dan ke-22
  yang diterjemahkan penuh: masing-masing seluruh 63 topik, dengan
  sidecar `.locale-peer-id` yang cocok, identik isinya dengan `ru-ru` dan `zh-cn`.
  Dihubungkan ke situs dan dilayani di `/ru-001/` dan `/zh-001/` (alias
  `/ru/` dan `/zh/`).
- Menambahkan Prancis (`fr-001`) sebagai lokal ke-20 yang diterjemahkan penuh: seluruh 63
  topik dengan sidecar `.locale-peer-id` yang cocok, identik isinya dengan
  `fr-fr`. Dihubungkan ke situs dan dilayani di `/fr-001/` (alias `/fr/`).
- Menambahkan Bengali (`bn-001`) sebagai lokal ke-19 yang diterjemahkan penuh: seluruh 63
  topik dengan sidecar `.locale-peer-id` yang cocok, identik isinya dengan
  `bn-bd`. Dihubungkan ke situs dan dilayani di `/bn-001/` (alias `/bn/`).
- Menambahkan Arab (`ar-001`) sebagai lokal ke-18 yang diterjemahkan penuh: seluruh 63
  topik dengan sidecar `.locale-peer-id` yang cocok, identik isinya dengan
  `ar-eg`. Dihubungkan ke situs dan dilayani di `/ar-001/` (alias `/ar/`).
- Menambahkan Wales, Britania Raya (`cy-gb`) sebagai lokal ke-17 yang diterjemahkan
  penuh: seluruh 63 topik dengan sidecar `.locale-peer-id` yang cocok, identik
  isinya dengan `cy-001` (hubungan yang sama seperti `hi-id` dengan `hi-001`).
  Dihubungkan ke `SERVED_LOCALE_CODES` situs dan dilayani di `/cy-gb/`.
- Menyelesaikan terjemahan tangan penuh dari nol atas seluruh 63 topik ke
  Belanda, Belanda (`nl-nl`), dengan sidecar `.locale-peer-id` yang cocok dan
  `just test` lulus. Tidak ada lokal Belanda sebelumnya sebagai dasar, jadi
  setiap topik diterjemahkan langsung dari sumber berbahasa Inggris. Indeks
  (topik 9.7) memetakan ulang setiap tautan topik internal ke nama berkas Belanda-nya,
  mengikuti pendekatan yang dipakai untuk `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr`, dan `sv-se`. Belum dihubungkan
  ke situs.
- Menyelesaikan terjemahan tangan penuh dari nol atas seluruh 63 topik ke
  Swedia, Swedia (`sv-se`), dengan sidecar `.locale-peer-id` yang cocok dan
  `just test` lulus. Tidak ada lokal Swedia sebelumnya sebagai dasar, jadi
  setiap topik diterjemahkan langsung dari sumber berbahasa Inggris. Indeks
  (topik 9.7) memetakan ulang setiap tautan topik internal ke nama berkas Swedia-nya,
  mengikuti pendekatan yang dipakai untuk `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, dan `fr-fr`. Belum dihubungkan ke
  situs.
- Menyelesaikan terjemahan tangan penuh dari nol atas seluruh 63 topik ke
  Prancis, Prancis (`fr-fr`), dengan sidecar `.locale-peer-id` yang cocok dan
  `just test` lulus. Tidak ada lokal Prancis sebelumnya sebagai dasar, jadi
  setiap topik diterjemahkan langsung dari sumber berbahasa Inggris. Indeks
  (topik 9.7) memetakan ulang setiap tautan topik internal ke nama berkas Prancis-nya,
  mengikuti pendekatan yang dipakai untuk `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, dan `ru-ru`. Belum dihubungkan ke situs.
- Menyelesaikan terjemahan tangan penuh dari nol atas seluruh 63 topik ke
  Rusia, Rusia (`ru-ru`), dengan sidecar `.locale-peer-id` yang cocok dan
  `just test` lulus. Tidak ada lokal Rusia sebelumnya sebagai dasar, jadi
  setiap topik diterjemahkan langsung dari sumber berbahasa Inggris. Indeks
  (topik 9.7) memetakan ulang setiap tautan topik internal ke nama berkas Rusia-nya,
  mengikuti pendekatan yang dipakai untuk `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, dan `ja-jp`. Belum dihubungkan ke situs.
- Menyelesaikan terjemahan tangan penuh dari nol atas seluruh 63 topik ke
  Jepang, Jepang (`ja-jp`), dengan sidecar `.locale-peer-id` yang cocok dan
  `just test` lulus. Tidak ada lokal Jepang sebelumnya sebagai dasar, jadi
  setiap topik diterjemahkan langsung dari sumber berbahasa Inggris. Indeks
  (topik 9.7) memetakan ulang setiap tautan topik internal ke nama berkas Jepang-nya,
  mengikuti pendekatan yang dipakai untuk `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, dan `pt-pt`. Belum dihubungkan ke situs.
- Menyelesaikan terjemahan tangan penuh dari nol atas seluruh 63 topik ke
  Portugis, Portugal (`pt-pt`), dengan sidecar `.locale-peer-id` yang cocok
  dan `just test` lulus. Tidak ada lokal Portugis sebelumnya sebagai dasar,
  jadi setiap topik diterjemahkan langsung dari sumber berbahasa Inggris.
  Indeks (topik 9.7) memetakan ulang setiap tautan topik internal ke nama berkas
  Portugis-nya, mengikuti pendekatan yang dipakai untuk `ar-eg`, `bn-bd`,
  `ko-kr`, dan `es-es`. Belum dihubungkan ke situs.
- Menambahkan Spanyol, Spanyol (`es-es`) sebagai lokal yang diterjemahkan penuh, seluruh 63
  topik, dimulai dari salinan terjemahan Spanyol yang ada (`es-001`)
  (yang setelah diperiksa ternyata sudah netral secara gramatikal,
  dengan kosakata yang sebagian besar sudah condong ke Spanyol) lalu menerapkan
  penyisiran terminologi terarah untuk penggunaan minoritas yang tersisa, terutama
  "incidente" menjadi "incidencia" untuk ranah metrik insiden buku ini,
  dengan perbaikan kesesuaian gender yang sesuai di seluruh teks. Belum
  dihubungkan ke situs.
- Menyelesaikan terjemahan tangan penuh atas seluruh 63 topik ke Korea, Korea
  (`ko-kr`), dengan sidecar `.locale-peer-id` yang cocok dan
  `just test` lulus. Indeks (topik 9.7) memetakan ulang setiap tautan topik internal
  ke nama berkas Korea-nya, mengikuti pendekatan yang dipakai untuk `ar-eg` dan
  `bn-bd`. Belum dihubungkan ke situs.
- Menambahkan Hindi, India (`hi-id`) sebagai lokal yang diterjemahkan penuh, seluruh 63
  topik, dengan menyalin terjemahan Hindi yang ada (`hi-001`) apa adanya
  di bawah kode lokal bertanda negara, karena Hindi standar tidak punya
  varian khusus India untuk diterjemahkan tangan secara terpisah. Belum
  dihubungkan ke situs.
- Menyelesaikan terjemahan tangan penuh atas seluruh 63 topik ke Bengali,
  Bangladesh (`bn-bd`), dengan sidecar `.locale-peer-id` yang cocok dan
  `just test` lulus. Belum dihubungkan ke situs.
- Menyelesaikan terjemahan tangan penuh atas seluruh 63 topik ke Arab, Mesir
  (`ar-eg`), dengan sidecar `.locale-peer-id` yang cocok dan `just test`
  lulus. Belum dihubungkan ke situs.
- Menyelesaikan terjemahan tangan penuh atas seluruh 63 topik ke Jerman, Jerman
  (`de-de`), dengan sidecar `.locale-peer-id` yang cocok dan `just test`
  lulus. Belum dihubungkan ke situs.
- Menyelesaikan terjemahan tangan penuh atas seluruh 63 topik ke tiga lokal:
  Wales (`cy-001`), Tionghoa (`zh-cn`), dan Hindi (`hi-001`), masing-masing dengan
  sidecar `.locale-peer-id` yang cocok dan `just test` lulus.
- Menambahkan dua lokal terjemahan terencana lagi, Wales - Britania Raya
  (`cy-gb`) dan Tionghoa (`zh-001`), ke
  `spec/locales-for-global-sharing-with-svelte/locales.tsv` dan
  `spec/locales.md` (kini tiga belas lokal terencana, naik dari sebelas), dan
  menyelesaikan endonim `zh-cn` yang sebelumnya belum diputuskan menjadi 中文. `LOCALE_LABELS`
  situs mendapat entri yang sesuai (`cy-gb`: "Cymraeg (Prydain
  Fawr)", `zh-001`: "中文", `zh-cn`: "中文 (中国)"). Masih sebatas infrastruktur:
  tak satu pun lokal ini memiliki direktori `locales/<code>/` atau konten
  terjemahan.
- Menerbitkan buku dalam empat lokal di bawah `locales/`: `en-gb-oxendict`
  (Inggris Britania, ejaan Oxford; sumber yang ditulis tangan), `en-001`
  (Inggris internasional), `en-gb` (Inggris Britania arus utama), dan `en-us`
  (Inggris Amerika). `en-001`, `en-gb`, dan `en-us` diturunkan secara mekanis
  dari `en-gb-oxendict` oleh `tools/localize.py` yang baru; lihat
  `spec/locales.md`. `docs/` tidak ada lagi; setiap rujukan padanya di
  `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py`, dan
  `tools/stats.py` kini menunjuk ke `locales/<locale>/`.
- Menambahkan dua skill Claude Code, `software-engineering-metrics-skill` (untuk pembaca
  yang menerapkan panduan buku ke tim mereka sendiri) dan
  `software-engineering-metrics-maintainer-skill` (untuk kontributor yang menambah
  atau menyunting topik), di bawah `skills/` dan dicerminkan ke `.claude/skills/`.
- Memindahkan sumber situs web yang diterbitkan ke repositori ini sebagai
  `software-engineering-metrics.github.io/`, sebelumnya repositori terpisah.
  Ia kini membaca `locales/` langsung dari akar repositori, bukan dari
  checkout di sebelahnya. `.github/workflows/deploy.yml` di akar memverifikasi bahwa situs
  masih terbangun pada setiap push ke `main`, lalu mengirim `repository_dispatch` ke
  repositori `software-engineering-metrics.github.io` (dipertahankan sebagai cangkang
  deploy tipis, karena GitHub Pages hanya akan melayani domain polos itu dari
  repositori dengan nama persis itu), yang men-checkout monorepo ini, membangun
  situs, dan men-deploy-nya.
- Menambahkan infrastruktur untuk lokal yang diterjemahkan (bukan sekadar diturunkan dari
  ejaan), menurut sub-spesifikasi baru `spec/locales-for-global-sharing-with-svelte/`:
  `tools/gen_locale_peer_ids.py` memberi setiap berkas konten sidecar
  `.locale-peer-id`, identik di seluruh lokal, yang dapat dipakai lokal terjemahan masa
  depan (dengan slug aksara aslinya sendiri) untuk menyelesaikan
  "halaman ini, di lokal X" alih-alih mencocokkan berdasarkan slug; `tests/validate.py`
  memeriksa setiap sidecar ada dan cocok. `spec/locales.md` mendokumentasikan sepuluh
  lokal terjemahan terencana (Arab, Bengali, Wales, Spanyol, Prancis, Hindi,
  Indonesia, Portugis, Rusia, Urdu, dan Tionghoa - Tiongkok); belum ada yang memiliki
  direktori `locales/<code>/`, karena belum ada yang diterjemahkan. Di situs,
  `scripts/locales.mjs` mendapat `LOCALE_LABELS`/`localeLabel()` (nama tampilan untuk
  setiap lokal terencana, siap sebelum perutean) dan
  `sortedLocaleEntries()` (urutan pengurutan yang sebaiknya dipakai daftar lokal masa depan),
  dan `src/lib/i18n.js` mengekstrak string chrome UI (navigasi, bilah samping, penomoran halaman,
  pemilih, footer, tautan lewati) yang sebelumnya dikodekan keras dalam bahasa Inggris oleh setiap komponen
  `.svelte`, dialirkan lewat `ui(locale)`, dengan kembali ke
  bahasa Inggris untuk lokal mana pun tanpa terjemahan sendiri.
- Mengganti kontrol header situs yang dibuat tangan dan hanya untuk lokal dengan
  `@lilydesignsystem/svelte-picker-bar` dari [Lily Design System](https://lilydesignsystem.com/):
  pemilih tema sungguhan (terang/gelap, lewat
  `static/assets/themes/{light,dark}.css` yang baru), pemilih lokal sungguhan
  (dihubungkan ke perutean berbasis URL situs ini alih-alih perilaku
  bawaannya yang hanya lang/dir), pemilih ukuran teks (skala tujuh langkah Lily), dan
  pemilih berbagi (email, Mastodon, salin tautan). Menyematkan
  `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` ke
  `^0.1.2` dan `@lilydesignsystem/svelte-headless` ke `^0.2.0` lewat override
  `pnpm-workspace.yaml`, mengatasi bug terbit yang nyata pada rentang
  dependensi `svelte-picker-bar` 0.1.0 sendiri (lihat `CHANGELOG.md` setiap pemilih,
  "0.1.2", dan `AGENTS.md` situs ini).
- Menghapus baris statistik beranda (bagian/topik/"Free Always") dan bagian
  "How to read it"-nya, dan mengganti grid kartu "Browse the nine parts" dengan
  daftar butir polos.

### Changed

- Menambahkan `scripts/generate-sitemap.mjs`, dijalankan di akhir `pnpm build`, yang
  menulis `sitemap.xml` dari halaman yang sudah dirender di muka (hanya URL lokal kanonis,
  tanpa duplikat alias dua huruf) agar baris `Sitemap:` di `robots.txt`
  terselesaikan.
- Menambahkan topik 2.8, metrik value stream Lean (lead time, waktu
  proses, waktu siklus, persen lengkap dan akurat, dan waktu takt dari pemetaan
  value stream Lean klasik, ditambah perhitungan hasil throughput bergulir),
  ditempatkan setelah teori antrean. Metrik pull request dan code review
  pindah dari 2.8 ke 2.9, dan topik metrik DORA pindah dari 2.9 ke 2.10.
  Memperbarui setiap rujukan silang yang terdampak di seluruh buku.
- Mengganti nama Bagian 2 dari "Delivery and Flow Metrics" menjadi "Flow Metrics" dan
  menyusunnya ulang di sekitar Flow Framework milik Mik Kersten. Menambahkan empat
  topik baru: 2.1 Flow Framework, 2.2 Flow item (fitur, cacat,
  risiko, utang), 2.3 Kecepatan aliran dan distribusi aliran, dan 2.4 Waktu aliran
  dan beban aliran. Menggabungkan empat topik metrik DORA individu
  (frekuensi deployment, lead time, tingkat kegagalan perubahan, waktu pemulihan)
  menjadi satu topik rujukan, 2.9 Kerangka metrik DORA, dipindah
  ke akhir bagian. Menomori ulang efisiensi aliran dan work in process
  menjadi 2.5 dan mengganti nama serta menomori ulang topik teori antrean (dulu
  2.9) menjadi 2.7 Teori antrean. Waktu siklus (2.6) dan metrik pull request dan
  code review (2.8) mempertahankan nomornya. Memperbarui setiap rujukan silang
  di seluruh buku, glosarium, rujukan rumus, penilaian mandiri
  kematangan, dan bagian pendahuluan agar sesuai.

### Added

- Rilis awal: 45 topik inti di 8 bagian, ditambah bagian pendahuluan
  dan lampiran 7 topik (Bagian 9), mencakup kerangka DORA dan SPACE,
  metrik kode dan kualitas, metrik produk dan bisnis, metrik keandalan dan
  keamanan, dan dampak AI generatif pada metrik rekayasa.
- Infrastruktur repositori yang dicerminkan dari proyek saudara
  `software-engineering-guide`: `spec/` berbasis spesifikasi
  (indeks, struktur, konvensi, ejaan oxford, peta jalan), rangkaian validasi
  di `tests/validate.py`, pembangkit navigasi di `tools/gen_nav.py`,
  `justfile`, `AGENTS.md` dengan panduan kontributor di bawah `docs/contributing/`,
  `CONTRIBUTING.md`, dan catatan perubahan ini.
- `spec/structure.md`, manifes topik kanonis yang menjadi acuan pengujian untuk
  memeriksa berkas.
- Dua contoh yang diuraikan di `docs/examples/`: piagam metrik yang terisi dan
  spesifikasi dasbor.

## Sejarah

Buku ini dibangun dari spesifikasi ke luar: struktur sembilan bagian
dinyatakan lebih dulu di `spec/structure.md`, lalu setiap topik dikarang
terhadap templat bersama di `docs/contributing/chapter-template.md`, dengan
`tests/validate.py` menegakkan struktur dan gaya rumah sepanjang waktu.

## Konvensi untuk berkas ini

- Kelompokkan perubahan di bawah **Added**, **Changed**, **Fixed**, **Removed**, atau
  **Deprecated**.
- Jaga entri tetap singkat dan spesifik. Satu baris tiap entri bila memungkinkan.
- Jangan memakai em-dash di sini juga; pengujian memeriksa berkas ini pula.
