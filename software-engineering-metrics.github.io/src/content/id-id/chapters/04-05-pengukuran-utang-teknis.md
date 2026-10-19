# 4.5 Pengukuran utang teknis

## Gambaran umum dan motivasi

**[Utang teknis](https://en.wikipedia.org/wiki/Technical_debt)**, metafora yang dicetuskan oleh Ward Cunningham, menggambarkan biaya akumulasi dari jalan pintas di masa lalu, keputusan serba cepat yang membuat sesuatu terkirim lebih awal tetapi meninggalkan basis kode yang lebih sulit diubah setelahnya, sama seperti utang finansial memungkinkan Anda berbelanja sekarang dengan biaya bunga di kemudian hari. Setiap basis kode membawa sejumlah utang teknis, dan itu tidak otomatis merupakan kegagalan; nilai sejati metafora ini adalah bahwa ia membingkai utang sebagai pertukaran yang dapat dikelola, bukan rahasia yang memalukan maupun beban permanen yang tak terelakkan. Topik ini berbicara tentang membuat pertukaran itu terlihat dan terkelola lewat pengukuran, alih-alih membiarkannya menjadi kekhawatiran samar yang terus diturunkan prioritasnya, yang dirasakan setiap insinyur tetapi tak seorang pun bisa menindaklanjutinya dengan bukti.

Topik-topik sebelum ini, kompleksitas (4.1), cakupan (4.2), churn dan hotspot (4.3), dan analisis statis (4.4), masing-masing memunculkan satu segi utang teknis. Tugas topik ini adalah sintesis: mengubah sinyal-sinyal terpisah itu, ditambah butir-butir yang tidak pernah muncul di pemindaian otomatis mana pun (jalan pintas arsitektural yang tidak terdokumentasi, migrasi yang sengaja ditunda), menjadi satu antrean yang terprioritaskan dan terlihat yang bersaing secara adil untuk investasi melawan pekerjaan fitur, alih-alih kalah dalam persaingan itu secara bawaan hanya karena ia tidak punya metrik dan tidak punya pembela dalam rapat perencanaan.

Bagi tim besar, utang teknis yang tidak dikelola berlipat ganda dengan cara yang benar-benar berbahaya dan mudah diremehkan: setiap jalan pintas baru membuat perubahan berikutnya sedikit lebih sulit, yang menciptakan tekanan untuk lebih banyak jalan pintas, yang berlipat ganda lebih jauh. Organisasi perusahaan besar dan pemerintahan yang memelihara sistem selama bertahun-tahun sangat terpapar efek pelipatgandaan ini, dan rekomendasi utama topik ini, antrean utang yang terlihat, terkuantifikasi, dan terprioritaskan, adalah mekanisme yang memungkinkan organisasi benar-benar mengelola pertukaran itu dengan sengaja alih-alih hanyut menuju krisis.

## Prinsip utama

- **Utang teknis adalah metafora yang disengaja untuk pertukaran yang dapat dikelola, bukan rahasia yang memalukan.** Sebagian utang, yang diambil dengan sadar, adalah keputusan bisnis yang masuk akal.
- **Utang yang tidak terukur kalah dalam persaingan prioritisasi melawan pekerjaan fitur secara bawaan,** bukan karena ia kurang penting, melainkan karena ia tidak punya pembela yang terlihat.
- **Kuantifikasi utang dalam istilah yang bisa ditimbang para pengambil keputusan: biaya memperbaiki versus biaya menanggungnya.** Klaim samar "kodenya berantakan" jarang bersaing baik melawan permintaan fitur yang konkret.
- **Utang berlipat ganda.** Setiap jalan pintas baru membuat perubahan mendatang sedikit lebih sulit, dan efek itu mempercepat bila dibiarkan tak terkelola.
- **Tidak semua utang harus dilunasi.** Sebagian layak ditanggung tanpa batas bila biaya memperbaikinya melebihi biaya hidup bersamanya.

## Rekomendasi

### Bangun satu antrean utang teknis yang terlihat

Gabungkan sinyal dari topik-topik awal bagian ini, pencilan kompleksitas, area dengan tingkat pembunuhan mutan rendah, hotspot, temuan analisis statis yang belum terselesaikan, bersama butir-butir utang yang hanya bisa diidentifikasi manusia (jalan pintas arsitektural, peningkatan dependensi yang tertunda, solusi sementara yang tidak terdokumentasi), ke dalam satu antrean yang terlihat, dilacak dengan ketelitian dan visibilitas yang sama seperti antrean fitur Anda. Utang yang hanya hidup di ingatan masing-masing insinyur atau di komentar kode yang tersebar secara efektif tidak ada untuk keperluan prioritisasi.

### Kuantifikasi biaya setiap butir utang dan biaya menanggungnya

Untuk setiap butir, perkirakan dua angka: biaya memperbaikinya (waktu rekayasa, risiko dari perbaikan itu sendiri) dan biaya menanggungnya tanpa perbaikan (seberapa lambat pekerjaan terkait berjalan, seberapa besar risiko cacat tambahan yang dibawanya, seberapa banyak ia menghalangi pekerjaan lain). Pembingkaian ini, yang dipinjam langsung dari logika metafora utang finansial itu sendiri, memberi para pengambil keputusan dasar yang nyata untuk dibandingkan dengan biaya dan nilai harapan pekerjaan fitur, alih-alih keluhan abstrak yang tidak terkuantifikasi.

### Prioritaskan berdasarkan dampak, bukan usia atau pembela yang paling lantang

Urutkan butir utang menurut kombinasi biaya menanggung dan seberapa sering kode yang terdampak disentuh (data churn dari topik 4.3 langsung berguna di sini): butir di sudut basis kode yang jarang dimodifikasi, seburuk apa pun, jauh lebih tidak penting daripada butir yang berada langsung di jalur pengembangan Anda yang paling aktif. Tahan godaan memprioritaskan berdasarkan butir mana yang paling lama berada di antrean atau insinyur mana yang membelanya paling gigih, yang keduanya tidak andal berkorelasi dengan dampak bisnis yang sebenarnya.

### Alokasikan kapasitas khusus yang terlindungi untuk perbaikan utang

Antrean utang yang harus bersaing butir demi butir melawan setiap permintaan fitur yang masuk di setiap siklus perencanaan cenderung kalah secara konsisten, karena pekerjaan fitur biasanya punya juara bisnis yang lebih jelas dan lebih mendesak. Alokasikan persentase kapasitas rekayasa yang terlindungi, pola yang umum ada di kisaran 10% hingga 20%, khusus untuk perbaikan utang, diputuskan di muka alih-alih dinegosiasikan ulang setiap sprint, sehingga pelunasan utang terjadi sebagai hal yang wajar, bukan hanya setelah krisis.

### Terima sebagian utang sebagai permanen, dan katakan secara eksplisit

Tidak setiap butir layak masuk rencana perbaikan aktif. Bila biaya memperbaiki benar-benar melebihi biaya menanggung sebuah butir tanpa batas, terutama untuk kode dalam sistem yang stabil, jarang disentuh, dan akan segera dipensiunkan, dokumentasikan keputusan itu secara eksplisit dan pindahkan butir itu ke kategori yang sengaja diturunkan prioritasnya, alih-alih membiarkannya tergeletak tanpa batas di antrean aktif di mana keberadaannya yang berkelanjutan diam-diam mengisyaratkan pekerjaan yang tidak akan pernah benar-benar terjadi.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa pelacakan utang formal | Tanpa beban tambahan | Utang kalah dalam persaingan prioritisasi secara bawaan; berlipat ganda tanpa terlihat |
| Kesadaran utang yang informal dan ad hoc | Beban rendah, ada sedikit visibilitas | Tidak konsisten; bergantung pada ingatan dan advokasi individu |
| Antrean utang formal dan terkuantifikasi | Bersaing secara adil untuk investasi; memungkinkan pertukaran yang terinformasi | Memerlukan pemeliharaan berkelanjutan dan disiplin kuantifikasi |
| Kapasitas perbaikan khusus yang terlindungi | Memastikan pelunasan terjadi secara konsisten, bukan hanya reaktif | Mengurangi kapasitas yang tersedia untuk pekerjaan fitur dalam jangka pendek |

Ketegangan utamanya adalah **tekanan pengiriman segera versus keterpeliharaan jangka panjang**. Pekerjaan fitur hampir selalu punya juara bisnis yang lebih jelas dan lebih mendesak daripada perbaikan utang, yang menciptakan tekanan struktural agar utang kalah dalam setiap keputusan prioritisasi individual meskipun biaya kumulatifnya tinggi. Selesaikan ketegangan ini dengan mengeluarkan perbaikan utang dari persaingan butir demi butir sepenuhnya lewat kapasitas yang terlindungi dan dialokasikan di muka, sehingga pertukaran itu diputuskan dengan sengaja dan sebelumnya, bukan diperdebatkan ulang, dan biasanya kalah, di setiap siklus perencanaan.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita punya satu antrean utang teknis yang terlihat, atau kesadaran utang sebagian besar hidup di kepala masing-masing insinyur?** Bila jawaban jujurnya yang terakhir, itu adalah celah terbesar yang direkomendasikan topik ini untuk ditutup lebih dulu.

2. **Untuk butir utang teratas kita, bisakah kita menyatakan biaya memperbaikinya dan biaya menanggungnya dalam istilah yang cukup spesifik untuk dibandingkan secara adil dengan permintaan fitur?** Bila tidak, latih kuantifikasi ini bersama sebagai latihan kelompok menggunakan butir nyata yang sedang berjalan.

3. **Berapa persen kapasitas rekayasa kita yang benar-benar dialokasikan untuk perbaikan utang, dan apakah persentase itu diputuskan dengan sengaja atau kebetulan hanya sisa setelah pekerjaan fitur dialokasikan?** Lihat sprint terakhir Anda yang sebenarnya dan hitung angka riilnya alih-alih mengandalkan kesan.

4. **Apakah antrean utang kita diprioritaskan berdasarkan dampak bisnis yang sejati, atau berdasarkan butir yang paling gigih diangkat atau yang paling lama berada di sana?** Silangkan prioritisasi Anda saat ini dengan data churn (topik 4.3) dan lihat apakah keduanya selaras.

5. **Butir utang mana yang harus kita terima secara eksplisit sebagai permanen, alih-alih dibiarkan tanpa batas di antrean aktif?** Identifikasi setidaknya satu butir nyata yang biaya memperbaikinya benar-benar melebihi biaya menanggungnya, dan diskusikan memindahkannya ke status yang secara eksplisit diturunkan prioritasnya.

6. **Bagaimana antrean utang kita berubah selama setahun terakhir, tumbuh, menyusut, atau tetap datar, dan apakah tren itu cocok dengan intuisi kita?** Lacak ini dari waktu ke waktu alih-alih hanya melihat satu potret sesaat; tren sering lebih informatif daripada ukuran absolut pada saat tertentu.

## Lensa sektor

**Startup.** Utang yang disengaja dan terinformasi sering merupakan strategi yang masuk akal pada tahap ini: mengirim cepat untuk memvalidasi hipotesis, dengan rencana jelas untuk meninjau ulang jalan pintas tertentu bila produknya terbukti, adalah pertukaran yang sah, bukan kegagalan. Risikonya adalah kehilangan jejak jalan pintas mana yang disengaja dan dapat dibalik versus mana yang diam-diam menjadi kewajiban permanen yang tidak diperiksa seiring pertumbuhan basis kode.

**Usaha kecil.** Daftar bersama yang sederhana, bahkan yang informal, yang menyebutkan jalan pintas yang Anda ketahui dan perkiraan kasar biaya memperbaikinya biasanya sudah cukup pada skala ini. Disiplin utama yang layak diadopsi adalah meninjau ulang daftar itu secara berkala alih-alih membiarkannya menumpuk diam-diam dan menjadi tak terlihat karena sudah terbiasa.

**Perusahaan besar.** Kapasitas perbaikan yang terlindungi dan dialokasikan di muka paling penting di sini, karena persaingan prioritisasi individual antara utang dan pekerjaan fitur secara andal berpihak pada fitur di puluhan tim sekaligus tanpa penyeimbang struktural. Standarkan praktik kuantifikasi utang di seluruh organisasi agar butir utang dapat dibandingkan secara adil antartim untuk keputusan investasi tingkat portofolio.

**Pemerintahan.** Sistem berumur panjang menumpuk utang selama bertahun-tahun atau puluhan tahun perubahan kebutuhan yang bertahap dan masing-masing masuk akal, sering tanpa pelacakan utang formal sama sekali sampai krisis memaksa isu itu muncul. Antrean utang yang terkuantifikasi dan terlihat adalah alat yang benar-benar meyakinkan untuk membenarkan anggaran modernisasi kepada badan pengawas, karena mengubah klaim samar "sistemnya sudah tua" menjadi kasus investasi yang spesifik dan berbiaya.

## Contoh

**Perusahaan besar.** Platform penagihan milik sebuah perusahaan telekomunikasi telah menumpuk lebih dari satu dekade utang teknis yang diakui secara informal tetapi tidak pernah dilacak secara formal, dengan para insinyur rutin menyebut "mesin penagihan itu berantakan" dalam retrospektif tanpa tindak lanjut. Seorang direktur rekayasa baru mewajibkan setiap tim membangun antrean utang yang terkuantifikasi, memperkirakan biaya perbaikan dan biaya menanggung untuk tiap butir, dan mengalokasikan 15% tetap dari kapasitas rekayasa untuk perbaikan utang ke depan. Dalam setahun, lima butir dengan biaya menanggung tertinggi, yang mewakili sebagian kecil dari total antrean menurut jumlah, telah diselesaikan, dan tingkat kegagalan perubahan (topik 2.10) untuk deployment terkait penagihan membaik secara terukur, menunjukkan dampak yang tidak proporsional dari menyasar butir berbiaya menanggung tertinggi lebih dulu alih-alih mengerjakan antrean dalam urutan sembarang.

**Pemerintahan.** Sistem pemrosesan data inti milik sebuah badan statistik nasional, yang awalnya dibangun lebih dari dua puluh tahun sebelumnya, tidak pernah mengalami penilaian utang formal meskipun ada pengakuan informal yang luas di kalangan staf bahwa sebagian besarnya rapuh dan kurang dipahami. Penilaian utang terstruktur, yang menggabungkan temuan analisis statis, data hotspot, dan wawancara dengan segelintir insinyur tersisa yang memahami komponen tertua, menghasilkan antrean terkuantifikasi dan terprioritaskan yang langsung mendukung permohonan anggaran modernisasi multitahun. Yang krusial, penilaian itu juga secara eksplisit mengidentifikasi beberapa komponen warisan yang stabil dan jarang disentuh sebagai layak dibiarkan tidak berubah, menghindari penulisan ulang seluruh sistem yang terlalu luas dan mahal dengan memilih investasi terarah pada area spesifik yang menurut data membawa biaya berkelanjutan tertinggi.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengelola utang teknis dengan sengaja adalah terhindarnya biaya yang berlipat ganda: setiap jalan pintas yang tak tertangani membuat perubahan mendatang sedikit lebih sulit, dan efek itu mempercepat tanpa intervensi, akhirnya menghasilkan basis kode yang begitu rapuh sehingga bahkan perubahan sederhana menjadi lambat dan berisiko. Contoh perusahaan telekomunikasi di atas menunjukkan imbal hasilnya secara konkret: menyasar sejumlah kecil butir berbiaya menanggung tertinggi menghasilkan perbaikan pengiriman dan kualitas yang terukur, tidak sebanding dengan porsi kecil dari total antrean yang diwakili butir-butir itu.

Total biaya kepemilikan adalah kapasitas terlindungi yang dialokasikan untuk perbaikan, biasanya 10% hingga 20% waktu rekayasa, yang merupakan biaya nyata dan terlihat yang bersaing dengan kecepatan fitur dalam jangka pendek. Biaya itu layak dibayar karena alternatifnya, utang yang tidak dikelola dan berlipat ganda, akhirnya menelan biaya jauh lebih besar berupa pengiriman yang melambat dan tingkat cacat yang meningkat di seluruh basis kode, bukan hanya pada butir-butir spesifik yang dibiarkan tak tertangani.

## Anti-pola dan jebakan

- **Tidak ada antrean utang yang terlihat dan terlacak:** utang kalah dalam persaingan prioritisasi secara bawaan dan berlipat ganda tanpa terlihat.
- **Klaim utang yang samar dan tidak terkuantifikasi:** jarang bersaing baik melawan permintaan fitur yang konkret dan terkuantifikasi dalam perencanaan.
- **Memprioritaskan utang berdasarkan usia atau volume advokasi, bukan dampak:** menyalaharahkan kapasitas perbaikan yang terbatas.
- **Tidak ada kapasitas terlindungi untuk perbaikan:** pelunasan utang hanya terjadi secara reaktif, setelah krisis, bukan sebagai praktik rutin yang disengaja.
- **Memperlakukan semua utang sebagai sama-sama layak diperbaiki:** membuang upaya pada butir berdampak rendah sementara butir berbiaya menanggung tinggi tetap tak tertangani.
- **Membiarkan utang tergeletak tanpa batas di antrean aktif tanpa pernah memutuskan bahwa ia permanen:** mengisyaratkan pekerjaan mendatang yang tidak akan pernah terjadi dan mengotori prioritisasi yang sejati.

## Model kematangan

- **Level 1, Initiate (Memulai):** Utang teknis dibahas secara informal, tanpa antrean terlacak dan tanpa kuantifikasi; ia secara konsisten kalah dari pekerjaan fitur.
- **Level 2, Develop (Mengembangkan):** Beberapa tim melacak utang secara informal, tetapi tidak ada kuantifikasi yang konsisten, visibilitas lintas tim, atau kapasitas perbaikan yang terlindungi.
- **Level 3, Standardize (Menstandarkan):** Antrean utang yang terlihat dan terkuantifikasi ada di seluruh organisasi, dengan kapasitas perbaikan terlindungi yang dialokasikan secara konsisten.
- **Level 4, Manage (Mengelola):** Butir utang diprioritaskan berdasarkan dampak terukur (biaya menanggung digabung churn), dan utang yang diterima secara permanen didokumentasikan secara eksplisit alih-alih dibiarkan ambigu.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi dapat menunjukkan perbaikan pengiriman atau kualitas yang spesifik dan terukur yang ditelusuri ke perbaikan utang yang terarah, dan pengelolaan utang menjadi masukan rutin yang tepercaya bagi keputusan investasi rekayasa berdampingan dengan pekerjaan fitur.

## Gagasan untuk diskusi

1. Apa butir utang berbiaya menanggung tertinggi kita saat ini, dan bisakah kita mengkuantifikasinya?
2. Berapa persen kapasitas kita yang benar-benar masuk ke perbaikan utang hari ini?
3. Butir utang mana yang harus kita terima secara eksplisit sebagai permanen alih-alih dibiarkan ambigu di antrean kita?
4. Apakah antrean utang kita tumbuh, menyusut, atau tetap datar selama setahun terakhir?
5. Apa yang akan diungkapkan penilaian utang terkuantifikasi yang terlewatkan oleh kesadaran informal kita saat ini?

## Poin-poin utama

- Utang teknis adalah **pertukaran yang dapat dikelola, bukan rahasia yang memalukan**; kuantifikasi ia alih-alih membiarkannya menjadi kekhawatiran samar yang terus diturunkan prioritasnya.
- **Kuantifikasi biaya memperbaiki versus biaya menanggung** untuk setiap butir agar ia bersaing secara adil melawan pekerjaan fitur.
- **Prioritaskan berdasarkan dampak** (biaya menanggung digabung churn), bukan berdasarkan usia atau volume advokasi.
- Alokasikan **kapasitas perbaikan khusus yang terlindungi**, diputuskan di muka, karena bila tidak, utang secara andal kalah dalam persaingan butir demi butir melawan pekerjaan fitur.
- **Terima sebagian utang secara eksplisit sebagai permanen** bila biaya memperbaiki melebihi biaya menanggung, alih-alih membiarkannya ambigu di antrean aktif.

## Referensi dan bacaan lanjutan

- Cunningham, Ward, "The WyCash Portfolio Management System" (OOPSLA experience report, 1992): asal-usul metafora utang teknis.
- *Managing Technical Debt: Reducing Friction in Software Development*, by Philippe Kruchten, Robert Nord, and Ipek Ozkaya (pembahasan komprehensif tentang pengukuran dan pengelolaan utang teknis).
- *Refactoring: Improving the Design of Existing Code*, by Martin Fowler (teknik perbaikan yang pada akhirnya menjadi dasar antrean utang).
- *Your Code as a Crime Scene*, by Adam Tornhill (analisis hotspot sebagai masukan bagi prioritisasi utang, topik 4.3).
