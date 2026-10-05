# 2.6 Waktu siklus dan komponennya

## Gambaran umum dan motivasi

**Waktu siklus (cycle time)** adalah rincian internal dari waktu alir (flow time) sebuah perubahan
(topik 2.4) ke dalam tahap-tahap rekayasanya: waktu pengodean, waktu
tinjauan, waktu pengujian, dan waktu deploy, kadang dipecah lagi menjadi
waktu pengambilan (pickup time, yaitu berapa lama sebuah perubahan menunggu sebelum ada yang mulai mengerjakannya) dan
waktu aktif (active time, yaitu berapa lama pengerjaannya setelah ada yang memulai). Waktu alir memberi
Anda satu angka tentang berapa lama sebuah perubahan bergerak dari ujung ke ujung melalui
seluruh aliran nilai, sedangkan [waktu siklus](https://en.wikipedia.org/wiki/Cycle_time) memberi tahu Anda ke mana waktu itu sebenarnya pergi
begitu perubahan sampai di tangan rekayasa. Inilah lapisan diagnostik yang dijanjikan topik 2.4 berada di bawah angka ringkasannya.

Perbedaan ini penting karena "lead time terlalu panjang" tidak bisa
ditindaklanjuti begitu saja. Tim yang lead time-nya didominasi waktu pengodean membutuhkan
intervensi yang berbeda dari tim yang lead time-nya didominasi antrean
tinjauan tiga hari, dan itu pun berbeda lagi dari tim yang kehilangan sebagian besar waktunya
karena rangkaian pengujian yang tidak stabil dan lambat. Tanpa penguraian waktu siklus,
tim cenderung menebak-nebak letak hambatannya, dan tebakan itu cukup sering
meleset sehingga memperbaiki tahap yang salah menghabiskan tenaga nyata sementara
kendala yang sebenarnya tidak tersentuh.

Bagi tim besar, penguraian waktu siklus mengubah kemunduran lead time di seluruh
organisasi dari sebuah misteri menjadi masalah yang spesifik dan bisa ditangani.
Ketika puluhan tim memakai infrastruktur bersama, hambatan tinjauan bersama
atau pipeline CI bersama yang lambat bisa menyeret lead time setiap tim secara
sama, dan hanya perbandingan waktu siklus lintas tim yang menyingkap akar
masalah bersama itu, alih-alih setiap tim menebak sendiri-sendiri penjelasan lokalnya.

## Prinsip utama

- **Waktu siklus menjelaskan lead time; ia tidak menggantikannya.** Laporkan keduanya
  bersama-sama, dengan waktu siklus sebagai diagnostik dan lead time sebagai ringkasan.
- **Waktu tunggu biasanya mengalahkan waktu aktif.** Sebagian besar keterlambatan dalam
  pengiriman perangkat lunak berasal dari pekerjaan yang menganggur dalam antrean, bukan dari usaha aktif
  (topik 2.5 membahasnya langsung melalui efisiensi aliran).
- **Uraikan per tahap sebelum mengusulkan perbaikan.** Perbaikan yang diarahkan ke tahap
  yang salah membuang tenaga dan dapat menurunkan semangat tim yang diminta "bekerja lebih cepat" padahal
  hambatan sebenarnya ada di tempat lain.
- **Hambatan bersama di banyak tim adalah peluang investasi platform,**
  bukan sekadar serangkaian masalah tim yang berdiri sendiri.
- **Data waktu siklus menghadapi risiko manipulasi (gaming) yang sama dengan waktu alir**
  (topik 2.4): waspadai batas tahap yang diam-diam bergeser demi memperindah
  sebuah angka.

## Rekomendasi

### Instrumentasikan setiap batas tahap secara eksplisit

Pecah perjalanan sebuah perubahan menjadi tahap-tahap bernama dengan batas yang jelas dan
dapat diinstrumentasikan: pengodean (commit pertama sampai pull request dibuka), pengambilan (pull
request dibuka sampai tinjauan pertama), tinjauan (tinjauan pertama sampai persetujuan), dan
deploy (persetujuan sampai produksi). Tangkap cap waktu setiap transisi
secara otomatis dari peristiwa kendali versi dan CI/CD, bukan dari pelacakan tahap
yang dilaporkan sendiri, dengan menerapkan prinsip instrumentasi di atas laporan mandiri
dari topik 1.5.

### Pisahkan waktu tunggu dari waktu aktif di dalam setiap tahap

Dalam tahap tinjauan, misalnya, bedakan waktu ketika sebuah pull request dibiarkan
tak tersentuh menunggu reviewer mulai (waktu tunggu) dari waktu yang dibutuhkan
percakapan tinjauan aktif setelah dimulai (waktu aktif). Pembedaan ini biasanya menunjukkan bahwa biaya dominannya adalah antrean, bukan usaha,
yang mengarah ke perbaikan yang sangat berbeda (kapasitas reviewer lebih besar, notifikasi yang lebih baik,
pull request yang lebih kecil untuk ditinjau) daripada perbaikan yang bertujuan mempercepat
percakapan tinjauan itu sendiri.

### Cari hambatan bersama sebelum mendiagnosis tim demi tim

Ketika beberapa tim menunjukkan tahap yang sama sebagai penundaan dominannya, misalnya pipeline CI
bersama yang lambat, kumpulan reviewer bersama yang kelebihan beban, atau kereta rilis bersama yang jarang berangkat, penyebab bersama itu adalah peluang investasi
tingkat platform, bukan serangkaian masalah lokal yang tak berhubungan. Agregasikan data
waktu siklus lintas tim khusus untuk mencari pola ini sebelum berasumsi bahwa
hambatan setiap tim hanya milik tim itu.

### Gunakan waktu siklus untuk menetapkan target perbaikan yang realistis dan spesifik per tahap

Alih-alih satu target "kurangi lead time sebesar 20%" yang tidak memberi tim
petunjuk harus fokus ke mana, gunakan penguraian waktu siklus untuk menetapkan target
spesifik per tahap: "kurangi median waktu tunggu tinjauan dari dua hari menjadi
empat jam." Tujuan yang spesifik dan menyasar satu tahap lebih mudah ditindaklanjuti tim
dan lebih mudah diverifikasi bahwa ia benar-benar tercapai lewat perubahan proses
yang nyata, bukan lewat pergeseran yang tidak terkait di tempat lain.

### Waspadai manipulasi batas tahap

Sebagaimana titik awal dan akhir waktu alir bisa bergeser (topik 2.4), batas tahap
waktu siklus juga bisa bergeser dengan cara yang memperindah angka tahap tertentu
tanpa perbaikan nyata, misalnya menandai tinjauan
"dimulai" begitu reviewer ditugaskan, bukan ketika ia benar-benar
mulai membaca perubahan. Audit instrumentasi batas tahap secara berkala
terhadap definisi yang terdokumentasi.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Waktu siklus berbutir kasar (dua atau tiga tahap) | Sederhana diinstrumentasikan dan dijelaskan | Mungkin tidak menunjuk hambatan sebenarnya dengan cukup tepat untuk ditindaklanjuti |
| Waktu siklus berbutir halus (banyak tahap, pemisahan tunggu vs. aktif) | Diagnosis presisi, target spesifik per tahap yang dapat ditindaklanjuti | Usaha instrumentasi lebih besar; lebih banyak angka yang harus dipelihara dan dijelaskan |
| Tinjauan waktu siklus tim demi tim | Disesuaikan dengan alur kerja nyata setiap tim | Bisa melewatkan hambatan bersama lintas tim yang bersembunyi di balik angka lokal yang mirip |
| Tinjauan waktu siklus agregat lintas tim | Menyingkap hambatan bersama tingkat platform | Membutuhkan definisi tahap yang terstandar di semua tim agar bermakna |

Ketegangan utamanya adalah **presisi diagnostik versus biaya instrumentasi**.
Pelacakan waktu siklus yang lebih halus memberi diagnosis yang lebih dapat ditindaklanjuti tetapi
lebih mahal untuk dibangun dan dipelihara, dan menambah angka yang harus
dipahami dan dipercaya tim. Atasi ketegangan ini dengan memulai dari yang kasar (pengodean,
tinjauan, deploy) lalu menambahkan pemisahan lebih halus, waktu tunggu versus aktif di dalam
tahap tertentu, hanya setelah tahap itu terbukti menjadi hambatan sejati dan berulang
yang pantas mendapat investasi instrumentasi tambahan.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Jika lead time memburuk hari ini, bisakah kita menyebut dalam satu jam
   tahap mana yang bertanggung jawab, dengan data dan bukan tebakan?** Ini
   adalah ujian inti apakah instrumentasi waktu siklus Anda benar-benar
   menjalankan fungsi diagnostiknya. Jika jawaban jujurnya tidak, celah itu
   layak ditutup sebelum kemunduran berikutnya terjadi.

2. **Di dalam tahap hambatan dominan kita, berapa banyak penundaan yang berupa waktu
   tunggu dan berapa yang berupa waktu aktif?** Kebanyakan tim berasumsi usaha aktif
   adalah kendalanya sebelum memeriksa, padahal antrean biasanya biaya yang lebih besar.
   Ambil pemisahan sebenarnya untuk tahap terlambat Anda dan lihat apakah asumsi itu
   bertahan.

3. **Apakah beberapa tim berbagi tahap hambatan dominan yang sama, yang menunjukkan
   perbaikan tingkat platform dan bukan tingkat tim?** Agregasikan data
   waktu siklus Anda lintas tim dan cari pola ini secara eksplisit sebelum
   berasumsi bahwa kelambanan setiap tim disebabkan secara lokal.

4. **Sudahkah kita menetapkan target perbaikan spesifik per tahap, atau hanya satu
   target lead time keseluruhan tanpa petunjuk harus fokus ke mana?** Target
   yang samar membuat tim menebak ke mana harus menanamkan usaha; target spesifik per tahap
   tidak. Periksa tujuan Anda saat ini dengan pembedaan ini.

5. **Pernahkah batas tahap waktu siklus dalam instrumentasi kita bergeser dari
   definisi terdokumentasinya seiring waktu?** Batas tahap menghadapi
   pergeseran definisi yang sama seperti waktu alir itu sendiri (topik 2.4). Audit
   sampel peristiwa transisi tahap terbaru terhadap definisi tertulis.

6. **Bagaimana budaya yang berat pada tinjauan versus budaya yang berat pada kepercayaan tampak
   berbeda dalam data waktu siklus kita?** Tim dengan tinjauan yang sangat teliti dan
   berputar-putar akan menunjukkan waktu tahap tinjauan lebih panjang daripada tim yang
   memercayai merge dengan satu persetujuan; diskusikan apakah keseimbangan Anda saat ini
   mencerminkan pilihan yang disengaja atau kebiasaan yang tak pernah diperiksa.

## Lensa sektor

**Startup.** Waktu siklus biasanya didominasi waktu pengodean, bukan
tahap tinjauan atau deploy, semata-mata karena prosesnya minimal. Ketika tim
tumbuh melewati segelintir insinyur, mulailah mengamati waktu tunggu tinjauan
secara khusus, karena biasanya itulah tahap pertama yang melambat ketika pekerjaan
lebih banyak orang harus melewati reviewer yang lebih sedikit.

**Usaha kecil.** Analitik platform kendali versi dasar biasanya sudah menampilkan
pengukuran waktu tingkat tahap yang cukup (waktu sampai tinjauan pertama, waktu sampai merge) tanpa
instrumentasi khusus. Fokuslah pada tahap tinjauan lebih dulu, karena itu adalah
hambatan awal yang paling umum dan paling mudah diperbaiki dengan perubahan proses kecil
seperti rotasi reviewer.

**Perusahaan besar.** Hambatan bersama di puluhan tim itu umum dan
berdaya ungkit tinggi untuk ditemukan: satu antrean CI bersama yang kelebihan beban atau satu langkah
tinjauan pusat yang wajib dapat diam-diam membebani lead time di seluruh organisasi.
Berinvestasilah secara khusus pada agregasi waktu siklus lintas tim untuk menyingkap
kendala bersama ini, alih-alih membiarkan setiap tim mendiagnosis sendiri-sendiri.

**Pemerintahan.** Data waktu siklus adalah alat yang kuat dan konkret untuk membenarkan
modernisasi proses kepada pemangku kepentingan yang skeptis, karena "waktu tunggu tinjauan
rata-rata empat hari akibat satu peran persetujuan yang menjadi hambatan" adalah
argumen investasi yang jauh lebih meyakinkan dan spesifik daripada klaim abstrak "proses
kita lambat."

## Contoh

**Perusahaan besar.** Pimpinan rekayasa sebuah perusahaan infrastruktur cloud
melihat lead time merayap naik di hampir setiap tim secara bersamaan.
Agregasi waktu siklus lintas tim menunjukkan bahwa waktu tunggu tinjauan, bukan
waktu tinjauan aktif, adalah penyebab dominan dan bersama: sebuah tim tinjauan keamanan
kecil yang terpusat telah menjadi hambatan karena jumlah tim yang
membutuhkan persetujuan mereka tumbuh lebih cepat daripada tim itu sendiri.
Memperluas dan melatih kumpulan reviewer bersertifikasi keamanan yang lebih luas, alih-alih meminta
tiap tim entah bagaimana mengode atau menguji lebih cepat, menyelesaikan hambatan
bersama itu dan menurunkan kembali lead time di seluruh tim dalam satu
kuartal.

**Pemerintahan.** Tim layanan digital sebuah pemerintah negara bagian berada di bawah
tekanan untuk menurunkan lead time, dan awalnya menanggapinya dengan meminta insinyur
bekerja lebih cepat, naluri yang wajar tetapi pada akhirnya tidak membantu. Penguraian waktu siklus
menunjukkan waktu pengodean aktif nyaris tidak berubah dari tahun ke tahun;
hampir seluruh kemunduran berasal dari antrean yang membesar pada tahap
tinjauan arsitektur wajib yang diperkenalkan delapan belas bulan sebelumnya sebagai
langkah kepatuhan. Tim merancang ulang tinjauan itu menjadi proses yang lebih ringan dan
bertingkat menurut risiko untuk perubahan berisiko rendah, memangkas waktu tunggu tinjauan
secara signifikan sambil mempertahankan ketelitian tinjauan penuh untuk perubahan yang
benar-benar berisiko tinggi.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari penguraian waktu siklus adalah investasi yang tepat sasaran dan efektif: organisasi
yang tahu persis tahap mana yang menjadi hambatan dapat memperbaiki tahap
spesifik itu, alih-alih menyebar tenaga tipis-tipis ke seluruh proses dengan
harapan ada yang membantu. Contoh tinjauan keamanan di atas adalah
khas: perbaikan yang tepat sasaran, memperluas satu sumber daya yang menjadi hambatan, menyelesaikan masalah
seluruh organisasi jauh lebih murah daripada inisiatif "percepat pengiriman"
yang luas dan tak terfokus.

Total biaya kepemilikan (TCO) adalah usaha instrumentasi untuk menangkap
cap waktu tingkat tahap secara andal dan disiplin berkelanjutan untuk
mengaudit batas tahap dari pergeseran secara berkala. Biaya itu sepadan karena
alternatifnya, menebak hambatan dan memperbaiki tahap yang salah, menghabiskan jauh
lebih banyak tenaga rekayasa dalam jangka panjang daripada biaya instrumentasi itu sendiri.

## Anti-pola dan jebakan

- **Bereaksi terhadap kemunduran lead time tanpa diagnosis waktu siklus:**
  sering berujung pada perbaikan tahap yang salah.
- **Mengasumsikan usaha aktif, bukan waktu tunggu, sebagai biaya dominan:** biasanya
  keliru; antrean mendominasi di sebagian besar pipeline pengiriman nyata (topik 2.5).
- **Melewatkan hambatan bersama lintas tim karena hanya meninjau waktu siklus
  tim demi tim:** membuat perbaikan platform berdaya ungkit tinggi tak ditemukan.
- **Menetapkan target lead time keseluruhan yang samar tanpa petunjuk
  spesifik per tahap:** membuat tim menebak ke mana harus memusatkan usaha.
- **Pergeseran definisi batas tahap:** memperindah angka tahap tertentu
  tanpa perbaikan nyata.
- **Menginstrumentasikan setiap tahap berbutir halus yang mungkin sebelum memastikan satu pun
  dari tahap itu hambatan sejati:** membuang usaha instrumentasi pada detail
  yang belum menginformasikan keputusan apa pun.

## Model kematangan

- **Level 1, Initiate:** Waktu siklus sama sekali tidak diuraikan; tim menebak
  hambatan ketika lead time memburuk.
- **Level 2, Develop:** Beberapa tim melacak waktu tahap berbutir kasar
  secara informal, tetapi tidak ada instrumentasi yang konsisten atau perbandingan
  lintas tim.
- **Level 3, Standardize:** Batas tahap diinstrumentasikan secara konsisten
  di seluruh organisasi, dengan waktu tunggu dipisahkan dari waktu aktif pada
  tahap-tahap hambatan dominan.
- **Level 4, Manage:** Agregasi waktu siklus lintas tim secara aktif menyingkap
  hambatan bersama; target perbaikan spesifik per tahap menggantikan tujuan
  lead time keseluruhan yang samar.
- **Level 5, Orchestrate:** Data waktu siklus langsung menggerakkan prioritas
  investasi platform, dan organisasi dapat menunjuk perbaikan yang spesifik dan
  tepat sasaran, kumpulan reviewer yang diperluas, pipeline bersama yang lebih cepat, yang
  terukur memperbaiki lead time di banyak tim sekaligus.

## Gagasan untuk diskusi

1. Apa tahap hambatan dominan kita saat ini, dan seberapa yakin kita pada jawaban itu?
2. Berapa banyak waktu tahap hambatan itu yang berupa waktu tunggu versus waktu aktif?
3. Apakah ada tim kita yang berbagi hambatan yang sama, yang menunjukkan perbaikan tingkat platform?
4. Kapan terakhir kali kita menetapkan target perbaikan pengiriman yang spesifik per tahap, bukan keseluruhan?
5. Pernahkah definisi batas tahap dalam perkakas kita berubah tanpa dokumentasi?

## Poin-poin utama

- Waktu siklus **menguraikan waktu alir** ke dalam tahap-tahap rekayasa, pengodean,
  tinjauan, pengujian, deploy, dan merupakan lapisan diagnostik di bawah angka
  ringkasan itu.
- Pisahkan **waktu tunggu dari waktu aktif** di dalam setiap tahap; antrean
  biasanya mengalahkan usaha aktif (topik 2.5).
- Cari **hambatan bersama lintas tim** sebelum berasumsi bahwa perlambatan itu
  khusus satu tim; penyebab bersama sering kali adalah peluang investasi platform.
- Tetapkan **target perbaikan spesifik per tahap**, bukan tujuan keseluruhan yang samar, agar
  tim tahu persis harus fokus ke mana.
- Batas tahap menghadapi risiko **pergeseran definisi** yang sama seperti
  waktu alir itu sendiri; audit secara berkala.
- Topik 2.7 memberikan matematika yang mendasarinya, hukum Little, tentang mengapa pekerjaan
  yang sedang berjalan dan waktu siklus bergerak bersama.

## Referensi dan bacaan lanjutan

- *The Principles of Product Development Flow*, by Donald G. Reinertsen
  (teori antrean dan penalaran ukuran batch yang mendasari analisis waktu siklus).
- *Actionable Agile Metrics for Predictability*, by Daniel S. Vacanti
  (pengukuran berbasis waktu siklus dan aliran untuk pengiriman perangkat lunak).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (lead time dan hubungannya dengan kinerja
  pengiriman).
- *The Goal*, by Eliyahu M. Goldratt (teori kendala, dan prinsip
  menemukan dan memperbaiki hambatan yang sebenarnya alih-alih
  mengoptimalkan di mana-mana).
