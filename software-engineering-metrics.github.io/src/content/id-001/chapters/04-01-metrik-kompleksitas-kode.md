# 4.1 Metrik kompleksitas kode

## Gambaran umum dan motivasi

**[Kompleksitas siklomatik](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, yang diperkenalkan oleh Thomas J. McCabe pada 1976, menghitung jumlah jalur independen melalui alur kendali sebuah potongan kode: setiap `if`, perulangan, dan percabangan menambah hitungan. Metrik ini tetap menjadi metrik kompleksitas kode yang paling banyak dipakai hampir lima puluh tahun kemudian, bersama kerabatnya seperti kompleksitas kognitif (yang memberi bobot lebih besar pada alur kendali bersarang dan sulit diikuti dibandingkan hitungan linear asli McCabe) dan kedalaman penyarangan. Metrik-metrik ini berbagi satu wawasan yang nyata dan tervalidasi: kode dengan lebih banyak jalur independen lebih sulit diuji sepenuhnya, lebih sulit dipahami, dan, dalam penelitian empiris selama puluhan tahun, terukur lebih besar kemungkinannya mengandung cacat.

Topik ini memperlakukan wawasan itu dengan hormat yang sungguh-sungguh, sekaligus memperlakukan keterbatasannya dengan keseriusan yang sama. Metrik kompleksitas mengukur satu properti kode yang spesifik, dan sebuah basis kode bisa tampak sederhana menurut semua metrik kompleksitas sambil tetap dirancang buruk, diberi nama buruk, atau tidak koheren secara konseptual dengan cara yang tidak dapat dideteksi algoritma penghitung percabangan mana pun. Sebaliknya, sebagian masalah yang kompleksitasnya tak terhindarkan memang membutuhkan kode yang kompleks agar terselesaikan dengan benar, dan tim yang ditekan untuk meminimalkan skor kompleksitas bisa menghasilkan kode yang skornya bagus padahal sebenarnya lebih sulit dipahami, karena kompleksitas esensial tersebar ke lebih banyak file dan lapisan tidak langsung, bukannya berkurang.

Bagi tim besar, metrik kompleksitas layak dipakai sebagai alat triase: cara untuk menemukan, di antara ribuan file, subset kecil yang paling mungkin sepadan dengan tinjauan lebih dekat, bukan sebagai vonis tunggal atas kualitas kode. Organisasi perusahaan besar dan pemerintahan yang memelihara basis kode yang terlalu besar untuk dibaca penuh oleh satu orang pun bergantung pada fungsi triase ini untuk mengarahkan upaya refactoring dan tinjauan yang langka ke tempat yang paling bermanfaat.

## Prinsip utama

- **Metrik kompleksitas memprediksi kesulitan pengujian dan cacat; mereka tidak mengukur kualitas secara langsung.** Perlakukan sebagai satu masukan, bukan vonis.
- **Skor kompleksitas terbuka terhadap manipulasi (gaming) lewat pengaburan, bukan hanya penyederhanaan yang sungguh-sungguh.** Memecah kompleksitas ke lebih banyak file bisa menurunkan skor tanpa benar-benar membuat kode lebih mudah dipahami.
- **Sebagian kompleksitas bersifat esensial, bukan kebetulan.** Masalah yang benar-benar sulit mungkin memerlukan kode yang benar-benar kompleks; tujuannya adalah meminimalkan kompleksitas kebetulan, bukan menghapus semua kompleksitas tanpa pandang bulu.
- **Gunakan metrik kompleksitas untuk triase, bukan sebagai kartu skor individu atau tim.** Mereka menunjuk ke mana harus melihat, bukan siapa yang harus disalahkan.
- **Tren dan pencilan lebih penting daripada ambang batas absolut mana pun.** Tren yang menanjak atau pencilan yang ekstrem lebih dapat ditindaklanjuti daripada satu rata-rata seluruh tim.

## Rekomendasi

### Gunakan metrik kompleksitas untuk melakukan triase upaya tinjauan dan refactoring

Jalankan analisis kompleksitas di seluruh basis kode dan gunakan hasilnya untuk memprioritaskan di mana tinjauan manusia yang lebih dekat atau investasi refactoring akan paling berbuah: fungsi atau file yang skornya jauh di atas rentang tipikal basis kode Anda sendiri adalah tempat bernilai tertinggi untuk dilihat lebih dulu. Penggunaan triase ini, menemukan ke mana harus melihat, adalah penerapan metrik kompleksitas yang paling dapat dipertanggungjawabkan dan paling berharga, jauh lebih baik daripada memakainya sebagai gerbang lulus/gagal absolut.

### Tetapkan ambang batas relatif terhadap basis kode Anda sendiri, bukan angka universal

Ambang batas kompleksitas absolut yang dipinjam begitu saja dari konvensi industri (skor kompleksitas sepuluh adalah patokan yang sering dikutip) bisa terlalu longgar atau terlalu ketat tergantung domain Anda: sebuah parser atau mesin aturan mungkin memiliki kompleksitas dasar yang secara sah lebih tinggi daripada layanan CRUD biasa. Kalibrasikan ambang batas Anda sendiri terhadap distribusi aktual basis kode Anda, dan perlakukan pelanggaran ambang batas sebagai dorongan untuk melihat lebih dekat, bukan kegagalan build otomatis, kecuali tim Anda sengaja memilih kebijakan yang lebih ketat itu dengan kesadaran penuh akan pertukarannya.

### Waspadai manipulasi (gaming) lewat dekomposisi tanpa penyederhanaan yang sungguh-sungguh

Cara paling umum skor kompleksitas dimanipulasi adalah pola substitusi dari topik 1.2 yang diterapkan pada metrik spesifik ini: memecah satu fungsi yang benar-benar kompleks menjadi beberapa fungsi lebih kecil yang masing-masing skornya bagus, sementara sistem secara keseluruhan tetap sama sulitnya dipahami, atau kadang menjadi lebih sulit, karena logikanya kini tersebar di lebih banyak file dengan lebih banyak lapisan tidak langsung di antaranya. Pasangkan metrik kompleksitas dengan tinjauan kualitatif tentang apakah dekomposisi benar-benar memperjelas kode, atau hanya memindahkan kompleksitas ke tempat yang tidak lagi terlihat oleh metrik.

### Bedakan kompleksitas esensial dari kompleksitas kebetulan sebelum bereaksi

Sebelum memperlakukan skor kompleksitas tinggi sebagai masalah yang harus diperbaiki, tanyakan apakah masalah yang mendasarinya memang membutuhkan sebanyak itu jalur independen, logika perhitungan pajak, misalnya, secara sah memiliki banyak percabangan, atau apakah kompleksitasnya berasal dari sebab yang dapat dihindari: kondisional bersarang dalam yang bisa diratakan, logika duplikat yang bisa digabungkan, atau batas tanggung jawab yang tidak jelas yang bisa digambar ulang. Hanya kategori kedua yang merupakan masalah kualitas sungguhan yang seharusnya mendorong Anda memperbaiki lewat metrik ini.

### Lacak tren dan pencilan, bukan hanya rata-rata sesaat

Rata-rata skor kompleksitas seluruh basis kode yang bergeser sedikit jarang dapat ditindaklanjuti dengan sendirinya; kompleksitas satu file tertentu yang naik tajam selama beberapa perubahan, atau segelintir pencilan ekstrem dalam basis kode yang selebihnya berperilaku baik, adalah sinyal yang jauh lebih berguna. Lacak baik tren dari waktu ke waktu maupun ekor pencilan, dan gunakan keduanya untuk memicu investigasi yang spesifik dan terarah, bukan inisiatif pengurangan kompleksitas yang luas dan tidak fokus.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Ambang batas universal absolut | Sederhana, konsisten, mudah diotomatisasi | Mengabaikan perbedaan domain yang sah; dapat dimanipulasi lewat dekomposisi |
| Ambang batas relatif terhadap basis kode | Lebih terkalibrasi dengan konteks sebenarnya | Memerlukan lebih banyak persiapan dan kalibrasi ulang berkala |
| Kompleksitas sebagai gerbang build otomatis | Menegakkan konsistensi tanpa beban tinjauan manusia | Dapat memblokir kode yang kompleks namun dirancang dengan baik, atau memberi hadiah pada dekomposisi yang mengaburkan |
| Kompleksitas sebagai sinyal triase untuk tinjauan manusia | Menangkap masalah kualitas sungguhan yang akan terlewat oleh dekomposisi saja | Memerlukan lebih banyak waktu tinjauan manusia daripada gerbang yang sepenuhnya otomatis |

Ketegangan utamanya adalah **otomatisasi versus penilaian**. Gerbang kompleksitas yang sepenuhnya otomatis murah untuk ditegakkan dan konsisten, tetapi bisa sekaligus memblokir kode kompleks yang dirancang dengan baik dan memberi hadiah pada dekomposisi dangkal yang memanipulasi skor tanpa benar-benar menyederhanakan apa pun. Selesaikan ketegangan ini dengan memakai analisis kompleksitas otomatis untuk memunculkan kandidat tinjauan, dan menyerahkan penilaian yang sebenarnya, apakah kompleksitas ini esensial atau kebetulan, apakah refactor ini benar-benar memperjelas atau hanya memindahkan kompleksitas, kepada peninjau manusia, bukan kepada gerbang otomatis semata.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah ambang batas kompleksitas kita dikalibrasi terhadap distribusi aktual basis kode kita sendiri, atau dipinjam begitu saja dari konvensi industri yang generik?** Ambil distribusi kompleksitas riil basis kode Anda dan periksa apakah ambang batas Anda saat ini masuk akal terhadapnya, alih-alih berasumsi bahwa angka yang sering dikutip berlaku universal untuk domain Anda.

2. **Pernahkah kita melihat sebuah fungsi dipecah menjadi beberapa fungsi lebih kecil tanpa kode yang dihasilkan benar-benar menjadi lebih mudah dipahami?** Ini adalah tanda paling jelas dari pola manipulasi lewat dekomposisi yang diperingatkan topik ini. Lihat refactor terbaru yang terutama dimotivasi oleh skor kompleksitas dan nilai dengan jujur apakah refactor itu benar-benar meningkatkan keterpahaman.

3. **Di bagian mana basis kode kita kompleksitasnya esensial bagi masalahnya, dan di mana kompleksitasnya kebetulan dan dapat diperbaiki?** Telusuri pencilan berkompleksitas tertinggi Anda dan pilah secara eksplisit ke dalam dua kategori ini, karena hanya kategori kedua yang merupakan masalah kualitas sungguhan yang dapat ditindaklanjuti.

4. **Apakah kita memakai metrik kompleksitas untuk melakukan triase upaya tinjauan, atau sebagai gerbang otomatis yang kaku tanpa penilaian manusia?** Diskusikan apakah pendekatan penegakan Anda saat ini menyisakan ruang bagi pembedaan esensial-versus-kebetulan yang direkomendasikan topik ini, atau memperlakukan setiap pelanggaran dengan cara yang sama tanpa memandang konteks.

5. **Pernahkah skor kompleksitas dipakai, bahkan secara informal, untuk menilai kualitas kerja seorang insinyur secara individu?** Ini berisiko jatuh ke jebakan evaluasi individu yang sama dengan yang diperingatkan topik 3.4 untuk metrik aktivitas, kali ini diterapkan pada metrik kode, dan mengundang respons manipulasi yang sama.

6. **Seperti apa tren kompleksitas kita selama setahun terakhir untuk file-file kita yang paling kritis dan paling sering berubah?** Gabungkan dengan analisis churn dan hotspot dari topik 4.3, karena file yang sekaligus sangat kompleks dan sering berubah layak mendapat perhatian jauh sebelum file yang kompleks tetapi jarang disentuh.

## Lensa sektor

**Startup.** Metrik kompleksitas biasanya kurang mendesak pada skala ini; ukuran basis kode cukup kecil sehingga keakraban informal sering menggantikan pengukuran formal. Kebiasaan yang layak dibangun sejak awal cukup dengan menjalankan pemindaian kompleksitas sesekali untuk menangkap satu file yang diam-diam menjadi tak terkelola, sebelum tim tumbuh terlalu besar untuk menyadarinya secara informal.

**Usaha kecil.** Sebagian besar perangkat analisis statis modern melaporkan metrik kompleksitas sebagai bagian dari pengaturan linting yang lebih luas, gratis atau berbiaya rendah; gunakan keluarannya sebagai sinyal triase berkala alih-alih berinvestasi pada perangkat khusus. Fokuskan perhatian lebih dulu pada file yang paling sering dimodifikasi.

**Perusahaan besar.** Metrik kompleksitas pada skala besar paling berharga bila digabungkan dengan data churn (topik 4.3) untuk memprioritaskan investasi refactoring di basis kode yang terlalu besar untuk disurvei manual oleh satu orang. Kalibrasikan ambang batas per layanan atau domain, bukan menerapkan satu angka untuk seluruh organisasi, karena kompleksitas yang sah sangat bervariasi di berbagai jenis sistem.

**Pemerintahan.** Sistem pemerintahan yang berumur panjang sering menumpuk kompleksitas secara bertahap selama bertahun-tahun atau puluhan tahun perubahan kebutuhan yang bertahap, dan audit kompleksitas bisa menjadi alat yang meyakinkan dan konkret untuk membenarkan investasi modernisasi atau refactoring kepada pemangku kepentingan yang mungkin melihat sistem itu sekadar "berjalan" dan karenanya tidak layak diinvestasikan.

## Contoh

**Perusahaan besar.** Sebuah perusahaan pemrosesan pembayaran menjalankan audit kompleksitas di seluruh basis kode untuk pertama kalinya dan menemukan satu fungsi validasi transaksi dengan skor kompleksitas siklomatik lebih dari sepuluh kali median basis kode. Investigasi menemukan bahwa kompleksitasnya hampir seluruhnya kebetulan: bertahun-tahun penanganan kasus khusus yang ditambahkan sedikit demi sedikit untuk penyedia pembayaran tertentu menumpuk menjadi kondisional bersarang dalam yang bisa distrukturkan ulang menjadi pola strategy yang lebih bersih untuk memisahkan logika khusus penyedia. Refactor tersebut, yang diprioritaskan langsung karena audit kompleksitas mengidentifikasinya sebagai target bernilai tertinggi di seluruh basis kode, menurunkan skor kompleksitas fungsi itu lebih dari 80% dan, yang lebih penting, menurunkan tingkat cacat pada jalur kode tersebut secara terukur selama dua kuartal berikutnya.

**Pemerintahan.** Mesin perhitungan tunjangan milik otoritas pajak yang berusia puluhan tahun mendapat skor sangat tinggi pada metrik kompleksitas di hampir setiap fungsi, yang memunculkan asumsi awal bahwa seluruh sistem perlu ditulis ulang dari nol. Tinjauan yang lebih dekat, fungsi demi fungsi, yang membedakan kompleksitas esensial dari kebetulan menemukan bahwa sebagian besar kompleksitas itu memang mencerminkan aturan hukum yang mendasarinya, yang benar-benar memiliki sebanyak itu percabangan dan kasus khusus yang sah sesuai amanat undang-undang, sementara subset yang lebih kecil berasal dari duplikasi yang dapat dihindari di antara jalur perhitungan yang mirip. Tim hanya menyasar subset kompleksitas kebetulan untuk di-refactor, menghindari penulisan ulang total yang mahal dan berisiko, sekaligus tetap memperbaiki area sistem yang paling bermasalah secara berarti.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari memakai metrik kompleksitas dengan baik adalah investasi refactoring yang terarah dan bernilai tinggi: contoh perusahaan pembayaran di atas menunjukkan satu perbaikan yang terarah dengan baik, teridentifikasi lewat analisis kompleksitas, yang secara terukur menurunkan cacat tepat pada jalur kode berisiko tertinggi, dengan sebagian kecil biaya yang dibutuhkan inisiatif refactoring yang luas dan tidak terarah.

Total biaya kepemilikannya rendah: sebagian besar rantai perangkat pengembangan modern menghitung metrik kompleksitas secara otomatis sebagai bagian dari analisis statis (topik 4.4), dan investasi sebenarnya adalah waktu penilaian manusia untuk menafsirkan hasil dengan benar, membedakan kompleksitas esensial dari kebetulan dan menangkap manipulasi lewat dekomposisi, bukan biaya perangkat baru yang signifikan.

## Anti-pola dan jebakan

- **Memperlakukan skor kompleksitas sebagai vonis langsung atas kualitas:** ia mengukur satu properti spesifik, bukan kualitas kode secara keseluruhan.
- **Memecah fungsi untuk memanipulasi skor tanpa penyederhanaan yang sungguh-sungguh:** pola manipulasi lewat dekomposisi yang secara khusus disebut topik ini.
- **Menerapkan ambang batas universal tanpa mengkalibrasi terhadap basis kode Anda sendiri:** menghasilkan penegakan yang terlalu longgar atau terlalu ketat tergantung domain.
- **Memakai metrik kompleksitas untuk menilai insinyur secara individu:** mengundang manipulasi dan menyalahgunakan metrik yang dimaksudkan untuk triase, bukan penilaian.
- **Memperlakukan semua kompleksitas sebagai sama-sama dapat diperbaiki:** kompleksitas esensial dari masalah yang benar-benar sulit bukanlah cacat yang harus dihapus.
- **Mengabaikan tren dan pencilan demi rata-rata datar seluruh basis kode:** melewatkan sinyal paling dapat ditindaklanjuti yang diberikan keluarga metrik ini.

## Model kematangan

- **Level 1, Initiate (Memulai):** Kompleksitas tidak diukur, atau diukur dengan ambang batas universal generik yang tidak diperiksa dan diterapkan begitu saja.
- **Level 2, Develop (Mengembangkan):** Metrik kompleksitas dikumpulkan tetapi jarang ditindaklanjuti, dan tidak ada pembedaan antara kompleksitas esensial dan kebetulan.
- **Level 3, Standardize (Menstandarkan):** Ambang batas dikalibrasi terhadap distribusi basis kode sendiri, dan metrik kompleksitas secara konsisten mendorong triase tinjauan dan refactoring di seluruh organisasi.
- **Level 4, Manage (Mengelola):** Tren dan pencilan kompleksitas dipantau secara aktif dan digabungkan dengan data churn (topik 4.3) untuk memprioritaskan investasi refactoring; manipulasi lewat dekomposisi diawasi secara aktif.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi dapat menunjukkan perbaikan tingkat cacat yang spesifik dan terukur yang ditelusuri langsung ke investasi refactoring berbasis kompleksitas, dan data kompleksitas menjadi masukan rutin yang tepercaya bagi keputusan investasi rekayasa.

## Gagasan untuk diskusi

1. Apa fungsi atau file kita yang paling kompleks, dan apakah kompleksitasnya esensial atau kebetulan?
2. Pernahkah kita memanipulasi skor kompleksitas lewat dekomposisi tanpa penyederhanaan yang nyata?
3. Apakah ambang batas kita dikalibrasi terhadap basis kode kita sendiri, atau dipinjam begitu saja?
4. Di mana kompleksitas tinggi bertumpang tindih dengan churn tinggi di basis kode kita saat ini?
5. Pernahkah data kompleksitas memengaruhi keputusan investasi refactoring, atau hanya menganggur?

## Poin-poin utama

- Metrik kompleksitas seperti **kompleksitas siklomatik** memprediksi kesulitan pengujian dan cacat; mereka tidak mengukur kualitas kode secara keseluruhan secara langsung.
- Bedakan **kompleksitas esensial** (dari masalah yang benar-benar sulit) dari **kompleksitas kebetulan** (dapat dihindari lewat rancangan yang lebih baik) sebelum bereaksi terhadap skor tinggi.
- Waspadai **manipulasi lewat dekomposisi**: memecah kode untuk menurunkan skor tanpa benar-benar menyederhanakan apa pun.
- Gunakan metrik kompleksitas untuk **triase**, mengarahkan upaya tinjauan manusia dan refactoring, bukan sebagai kartu skor individu atau gerbang otomatis yang kaku.
- Kalibrasikan ambang batas terhadap **distribusi basis kode Anda sendiri**, dan lacak **tren dan pencilan**, bukan hanya rata-rata datar.

## Referensi dan bacaan lanjutan

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976): makalah asli kompleksitas siklomatik.
- *Code Complete*, by Steve McConnell (panduan praktis untuk mengelola kompleksitas dalam konstruksi perangkat lunak).
- *Working Effectively with Legacy Code*, by Michael Feathers (teknik untuk mengurangi kompleksitas secara aman pada kode yang sudah ada dan sulit diubah).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018): metrik kompleksitas kognitif dan pembedaannya dari kompleksitas siklomatik.
