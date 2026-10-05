# 8.3 Meluncurkan metrik tanpa menumbuhkan ketakutan

## Gambaran umum dan motivasi

Topik ini, dalam arti yang sesungguhnya, adalah puncak praktis dari semua yang
diargumentasikan buku ini sejak topik 1.2 memperkenalkan hukum Goodhart:
program metrik yang diluncurkan dengan buruk, dengan cara yang memicu
ketakutan alih-alih kepercayaan, menjamin munculnya perilaku manipulasi
(gaming) yang diperingatkan setiap topik berikutnya, betapapun cermatnya
setiap metrik individual dirancang. Sebuah organisasi bisa menjalankan setiap
detail teknis dengan benar, yaitu visualisasi yang jujur, pemasangan pagar
pengaman (guardrail), tata kelola yang cermat, dan tetap menghasilkan program
metrik yang rusak dan tidak tepercaya jika peluncurannya sendiri mengajarkan
kepada para insinyur bahwa angka-angka ini ada untuk menghakimi mereka, bukan
untuk membantu mereka.

Mekanismenya sederhana dan terdokumentasi dengan baik dalam riset perilaku
organisasi yang dikutip buku ini di sepanjang halamannya: orang yang takut
metrik akan dipakai untuk melawan mereka, yang merusak
[keamanan psikologis](https://en.wikipedia.org/wiki/Psychological_safety),
merespons persis seperti yang diprediksi topik 1.2, yaitu mengoptimalkan angka
alih-alih kenyataan yang mendasarinya, karena dorongan untuk melindungi diri
bersifat segera dan pribadi sedangkan kerugian bagi pembelajaran organisasi
bersifat tersebar dan tertunda. Ini bukan kegagalan karakter individu; ini
respons rasional terhadap ancaman yang nyata, dan satu-satunya perbaikan yang
bertahan lama adalah menyingkirkan ancaman itu, bukan meminta orang bersikap
lebih jujur meskipun ada ancaman tersebut.

Bagi tim besar, panduan topik ini paling penting pada saat peluncuran awal,
ketika kepercayaan belum terbentuk ke arah mana pun dan kesan awal menetapkan
harapan yang bertahan lama. Organisasi perusahaan besar yang memperkenalkan
program metrik baru di seluruh organisasi berisiko bahwa satu insiden awal
yang ditangani keliru, metrik satu tim dipakai secara menghukum, meracuni
kepercayaan di seluruh peluncuran; organisasi pemerintahan, yang sering
memperkenalkan program metrik dalam konteks perlindungan serikat pekerja yang
sudah ada, budaya pegawai negeri, atau ketidakpercayaan historis terhadap
inisiatif pengukuran, memerlukan panduan topik ini diterapkan dengan
kehati-hatian dan kesabaran khusus.

## Prinsip utama

- **Ketakutan merusak data lebih cepat dan lebih menyeluruh daripada cacat
  teknis mana pun dalam rancangan metrik.** Metrik yang dirancang dengan
  sempurna tetapi diluncurkan dengan buruk tetap dimanipulasi.
- **Kepercayaan dibangun melalui penggunaan yang tidak menghukum, yang
  terbukti dan konsisten, bukan melalui pernyataan kebijakan semata.**
  Tindakan selama beberapa siklus membangun kepercayaan; kata-kata saja
  tidak.
- **Insiden peluncuran awal menetapkan harapan yang bertahan lama.** Beberapa
  kali pertama sebuah metrik menyentuh sesuatu yang berkonsekuensi
  menentukan bagaimana seluruh program dipersepsikan ke depannya.
- **Transparansi tentang tujuan dan proses mengurangi ketakutan lebih
  daripada jaminan semata.** Orang memercayai apa yang dapat mereka lihat dan
  pahami, bukan hanya apa yang dikatakan kepada mereka.
- **Ini adalah disiplin organisasi yang berkelanjutan, bukan pengumuman
  peluncuran sekali jalan.** Ketakutan bisa menyelinap kembali secara
  bertahap bahkan setelah awal yang benar-benar tepercaya.

## Rekomendasi

### Komunikasikan tujuan dan non-tujuan secara eksplisit, sebelum peluncuran,
bukan setelah kekhawatiran muncul

Mengikuti disiplin piagam metrik dari topik 1.4, komunikasikan tujuan program
metrik baru dan, yang krusial, non-tujuannya yang eksplisit (tidak pernah
dipakai untuk evaluasi kinerja individu tanpa kebijakan tersendiri yang
diungkapkan dengan jelas, menurut topik 1.1) sebelum peluncuran, bukan secara
reaktif setelah para insinyur mulai khawatir. Transparansi yang proaktif dan
di muka tentang untuk apa metrik tidak dipakai mencegah spekulasi cemas yang
kalau tidak akan mengisi kekosongan dan membentuk kesan awal yang sulit
dibalik.

### Libatkan orang-orang yang diukur dalam proses perancangan

Insinyur yang ikut merancang metrik yang akan menggambarkan pekerjaan mereka
sendiri jauh lebih kecil kemungkinannya takut atau membenci metrik itu
dibandingkan mereka yang sistemnya dipaksakan tanpa masukan. Libatkan
perwakilan tim secara langsung dalam memilih metrik apa yang dilacak,
bagaimana metrik divisualisasikan, dan pagar pengaman apa yang berlaku,
mengikuti penekanan konsisten buku ini pada kepemilikan tingkat tim (topik
1.4) alih-alih mandat murni dari atas ke bawah.

### Mulailah dengan penggunaan diagnostik saja dan buktikan selama beberapa
siklus sebelum penggunaan evaluatif sekalipun dipertimbangkan

Mengikuti langsung pembedaan diagnostik versus evaluatif dari topik 1.1:
mulailah program metrik baru dalam mode diagnostik murni, hanya dipakai untuk
memahami dan memperbaiki sistem, tanpa kaitan sama sekali dengan evaluasi
individu maupun tim, dan pertahankan disiplin itu secara terlihat selama
beberapa siklus pelaporan sebelum percakapan tentang penggunaan yang lebih
luas bahkan dimulai. Kepercayaan yang dibangun dengan cara ini, melalui
pengendalian diri yang terbukti dari waktu ke waktu, jauh lebih tahan lama
daripada kepercayaan yang diklaim lewat dokumen kebijakan semata.

### Tanggapi insiden pertama yang ditangani keliru dengan segera dan secara
terlihat

Jika sebuah metrik disalahgunakan secara menghukum, bahkan sekali, bahkan
secara informal, tanggapilah segera, secara terlihat, dan langsung, alih-alih
membiarkannya berlalu diam-diam. Tanggapan organisasi terhadap insiden
penanganan keliru pertamanya sangat menentukan dalam membentuk kepercayaan
seluruh tim atau organisasi terhadap keseluruhan program ke depannya;
koreksi yang cepat dan transparan menandakan komitmen yang sungguh-sungguh
pada tujuan tidak menghukum yang dinyatakan, sedangkan kebisuan atau
pengecualian diam-diam yang tidak ditangani membenarkan persis ketakutan yang
mendorong perilaku manipulasi sejak awal.

### Jadikan risiko manipulasi sebagai percakapan bersama yang transparan,
bukan kekhawatiran manajemen yang tersembunyi

Alih-alih memperlakukan risiko manipulasi sebagai sesuatu yang dikhawatirkan
pimpinan secara pribadi, bagikan logika pemasangan pagar pengaman dari topik
1.2 secara terbuka kepada tim yang diukur: jelaskan langsung mengapa pagar
pengaman tertentu ada, pola manipulasi apa yang dirancang untuk ditangkapnya,
dan undang masukan tim sendiri tentang apakah pagar pengaman itu dirancang
dengan baik. Transparansi ini, yang membingkai seluruh tim sebagai mitra
dalam mencegah manipulasi dan bukan sebagai subjek yang diawasi, membangun
hubungan yang secara mendasar berbeda dengan program metrik dibandingkan
sistem yang diam-diam mengawasi manipulasi dari atas tanpa pernah membahas
risikonya secara terbuka.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Mandat dari atas ke bawah dengan keterlibatan tim minimal | Cepat diluncurkan, rancangan konsisten | Risiko tinggi manipulasi akibat ketakutan dan kepercayaan rendah sejak awal |
| Peluncuran yang melibatkan tim dan dirancang bersama | Membangun kepercayaan dan dukungan yang tulus, risiko manipulasi lebih rendah | Lebih lambat diluncurkan, memerlukan upaya koordinasi lebih banyak |
| Penggunaan evaluatif segera sejak hari pertama | Terasa efisien, cepat menghubungkan metrik dengan konsekuensi | Memicu ketakutan dan risiko manipulasi maksimum sebelum kepercayaan sempat terbentuk |
| Masa pembuktian diagnostik saja yang diperpanjang sebelum penggunaan evaluatif apa pun | Membangun kepercayaan yang tahan lama dan berbasis bukti | Lebih lambat mewujudkan kasus penggunaan evaluatif yang mungkin kelak diinginkan pimpinan |

Ketegangan utamanya adalah **kecepatan peluncuran versus pembangunan
kepercayaan**. Peluncuran yang cepat dan dari atas ke bawah membuat program
metrik berjalan dengan cepat, tetapi dengan risiko nyata memicu persis
ketakutan dan manipulasi yang diperingatkan buku ini sejak topik pembukanya;
peluncuran yang lebih lambat, melibatkan tim, dan mendahulukan diagnostik
memakan waktu lebih lama tetapi membangun kepercayaan tahan lama yang membuat
data yang dihasilkan benar-benar layak dikumpulkan sejak awal. Selesaikan
ketegangan ini dengan tegas demi pembangunan kepercayaan, karena program
metrik yang diluncurkan cepat tetapi menghasilkan data yang dimanipulasi dan
tidak tepercaya, dalam arti yang sesungguhnya, tidak mencapai apa pun dari
yang diperjuangkan buku ini, secepat apa pun ia diterapkan.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah tujuan dan non-tujuan eksplisit program metrik kami saat ini
   dikomunikasikan sebelum peluncuran, atau para insinyur lebih dulu
   mengetahuinya dan baru kemudian mendengar jaminan tentang cara
   pemakaiannya?** Jika jaminan datang secara reaktif dan bukan proaktif,
   urutan itu sendiri mungkin sudah membentuk kepercayaan awal secara
   negatif, dan layak disebutkan dengan jujur.

2. **Apakah orang-orang yang diukur dilibatkan dalam merancang metrik yang
   menggambarkan pekerjaan mereka sendiri, atau sistemnya dipaksakan tanpa
   masukan?** Nilai proses peluncuran Anda yang sebenarnya terhadap uji
   khusus ini, karena keterlibatan penting terlepas dari seberapa baik
   rancangan metrik yang dihasilkan.

3. **Apakah program metrik kami mempertahankan penggunaan yang benar-benar
   hanya diagnostik selama beberapa siklus pelaporan, atau penggunaan
   evaluatif sudah menyelinap lebih awal daripada yang direkomendasikan
   peluncuran yang membangun kepercayaan?** Telusuri riwayat sebenarnya
   dengan jujur; pergeseran di sini sering terjadi secara bertahap dan
   informal, bukan lewat satu perubahan kebijakan eksplisit.

4. **Pernahkah sebuah metrik disalahgunakan secara menghukum, bahkan sekali,
   bahkan secara informal, dan bagaimana organisasi menanggapinya?** Jika ini
   pernah terjadi, nilai dengan jujur apakah tanggapannya cepat dan terlihat
   atau diam-diam dan tidak ditangani, karena tanggapan itu membentuk
   kepercayaan pada seluruh program jauh lebih besar daripada insiden
   aslinya.

5. **Apakah tim yang diukur memahami mengapa setiap pagar pengaman ada, atau
   logika pencegahan manipulasi tetap menjadi kekhawatiran manajemen pribadi
   yang tidak pernah disampaikan langsung kepada mereka?** Diskusikan apakah
   alasan di balik pagar pengaman organisasi Anda (topik 1.2) benar-benar
   telah dibagikan secara transparan atau tetap menjadi pertimbangan
   rancangan di balik layar yang tidak dinyatakan.

6. **Jika kami memulai ulang peluncuran metrik dari nol hari ini, dengan
   menerapkan panduan topik ini sepenuhnya, seberapa berbeda prosesnya dari
   yang sebenarnya terjadi?** Eksperimen pikiran retrospektif ini sering
   menyingkap tempat-tempat spesifik yang dapat disebutkan, tempat pembangunan
   kepercayaan dipotong karena tekanan waktu, yang layak dipelajari meskipun
   peluncuran awal tidak bisa diulang.

## Lensa sektor

**Startup.** Kepercayaan sering lebih mudah dibangun pada skala ini, karena
percakapan langsung setiap hari secara alami menyediakan transparansi yang
direkomendasikan topik ini. Risikonya adalah melewatkan komunikasi tujuan dan
non-tujuan yang disengaja hanya karena terasa tidak perlu dalam tim kecil yang
akrab, anggapan yang bisa diam-diam runtuh seiring tim tumbuh dan anggota baru
bergabung tanpa konteks bersama yang sama.

**Usaha kecil.** Percakapan sederhana dan langsung tentang mengapa metrik baru
diperkenalkan dan untuk apa metrik itu akan dan tidak akan dipakai, yang
dilakukan sebelum peluncuran dan bukan setelah kekhawatiran muncul, menangkap
sebagian besar nilai topik ini tanpa memerlukan proses formal pada skala ini.

**Perusahaan besar.** Skala dan sifat impersonal organisasi besar membuat
panduan topik ini lebih sulit dijalankan dengan baik sekaligus lebih krusial
untuk dilakukan dengan benar, karena satu insiden yang ditangani keliru dapat
meracuni kepercayaan di puluhan tim yang mendengarnya dari pihak kedua alih-alih
mengalaminya langsung. Berinvestasilah secara sengaja pada masa pembuktian
yang diperpanjang dan mendahulukan diagnostik yang direkomendasikan topik
ini, dan tetapkan protokol tanggapan yang jelas, cepat, dan terlihat untuk
setiap insiden penyalahgunaan metrik sebelum insiden semacam itu terjadi.

**Pemerintahan.** Organisasi sektor publik sering memperkenalkan program metrik
ke dalam konteks perlindungan serikat pekerja yang sudah ada, budaya pegawai
negeri yang mapan, dan, dalam beberapa kasus, ketidakpercayaan historis
terhadap inisiatif pengukuran yang terkait kontroversi manajemen kinerja di
masa lalu. Terapkan panduan topik ini dengan kesabaran dan formalitas khusus,
berpotensi melibatkan masukan serikat atau perwakilan staf secara langsung
dalam proses perancangan, dan harapkan garis waktu pembangunan kepercayaan
benar-benar lebih panjang daripada dalam konteks sektor swasta yang lazim.

## Contoh

**Perusahaan besar.** Peluncuran awal dasbor metrik rekayasa yang
komprehensif di sebuah perusahaan perangkat lunak, yang dirancang sepenuhnya
oleh tim platform pusat tanpa masukan tingkat tim, disambut perlawanan yang
meluas dan diam-diam: para insinyur di seluruh organisasi mulai secara
informal memanipulasi angka yang mereka laporkan sendiri dalam hitungan
minggu, persis seperti yang diprediksi topik 1.2 untuk sistem metrik dari atas
ke bawah yang tidak dipercaya. Peluncuran ulang enam bulan kemudian, kali ini
melibatkan perwakilan tim secara langsung dalam pemilihan metrik dan
perancangan pagar pengaman, dan secara eksplisit berkomitmen lalu benar-benar
mempertahankan masa diagnostik saja selama enam bulan sebelum percakapan apa
pun tentang penggunaan yang lebih luas, menghasilkan data yang terukur lebih
tepercaya dalam setahun: audit internal yang membandingkan jumlah deployment
yang dilaporkan sendiri dengan yang diinstrumentasi lewat pipeline
menemukan bahwa selisih keduanya menyempit secara substansial dibandingkan
bulan-bulan awal peluncuran asli.

**Pemerintahan.** Upaya pertama sebuah instansi pemerintah negara bagian untuk
memperkenalkan metrik rekayasa telah ditinggalkan sepenuhnya dua tahun
sebelumnya setelah satu insiden ketika seorang manajer secara informal
merujuk data aktivitas seorang individu dalam percakapan kinerja, insiden
terisolasi tetapi tidak ditangani yang meracuni kepercayaan terhadap seluruh
inisiatif di seluruh instansi selama bertahun-tahun sesudahnya, dengan staf
yang masih menyebut "urusan metrik itu" dengan skeptisisme yang terlihat lama
setelah program aslinya diam-diam dikesampingkan. Program baru yang sengaja
diluncurkan ulang membahas riwayat ini secara langsung dan terbuka, mengakui
penanganan keliru di masa lalu, berkomitmen pada kebijakan penggunaan tanpa
hukuman yang spesifik dan dipublikasikan dengan sponsor eksekutif yang
akuntabel dan bernama, serta menetapkan protokol tanggapan yang cepat dan
transparan untuk setiap kekhawatiran penyalahgunaan di masa depan. Pengakuan
eksplisit atas kegagalan masa lalu ini, alih-alih sekadar meluncurkan ulang
seolah riwayat itu tidak ada, secara khusus dikreditkan oleh perwakilan staf
sebagai alasan upaya kedua memperoleh kepercayaan yang tulus, sementara
upaya pertama tidak.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari peluncuran yang membangun kepercayaan dan menghindari
ketakutan sederhananya adalah data yang tepercaya, yang tanpanya setiap topik
lain dalam kerja perancangan metrik yang cermat dalam buku ini tidak
menghasilkan apa pun yang bernilai nyata. Contoh perusahaan besar di atas
menunjukkan hal ini secara konkret dan terukur: data program yang
diluncurkan ulang terbukti lebih akurat daripada data peluncuran awal yang
digerakkan ketakutan, imbal hasil langsung dan terukur dari investasi
pembangunan kepercayaan tambahan.

Total biaya kepemilikan terutama berupa waktu dan kesabaran organisasi: masa
pembuktian yang diperpanjang dan mendahulukan diagnostik, upaya pelibatan tim
dalam perancangan, dan disiplin berkelanjutan untuk menanggapi setiap insiden
penyalahgunaan dengan cepat dan terlihat. Biaya itu signifikan tetapi
merupakan harga yang diperlukan dan tak terhindarkan untuk data tepercaya yang
menjadi tumpuan setiap topik lain dalam buku ini; peluncuran cepat yang
melewatkan investasi ini menghasilkan program metrik yang tampak lengkap
tetapi diam-diam tak bernilai, dirusak oleh persis manipulasi yang
diperingatkan buku ini sejak topik substantifnya yang pertama.

## Anti-pola dan jebakan

- **Peluncuran dari atas ke bawah tanpa keterlibatan tim dalam perancangan
  metrik:** memicu ketakutan dan manipulasi sejak awal, betapapun baiknya
  metrik itu sendiri dirancang.
- **Komunikasi tujuan dan non-tujuan yang reaktif, bukan proaktif:** membiarkan
  spekulasi cemas mengisi kekosongan dan membentuk kesan awal yang sulit
  dibalik.
- **Terburu-buru menuju penggunaan evaluatif sebelum masa kepercayaan
  diagnostik saja yang sesungguhnya berlalu:** cara paling umum sebuah
  program metrik baru memicu perilaku manipulasi dengan segera.
- **Tanggapan yang diam-diam dan tidak ditangani terhadap insiden penyalahgunaan
  metrik:** membenarkan persis ketakutan yang mendorong manipulasi dan merusak
  kepercayaan pada seluruh program secara berkepanjangan.
- **Menjadikan logika pagar pengaman dan pencegahan manipulasi sebagai
  kekhawatiran manajemen pribadi:** melewatkan peluang membangun kepercayaan
  lewat penalaran yang transparan dan dibagikan kepada tim yang diukur.
- **Meluncurkan ulang program metrik yang sebelumnya ditangani keliru tanpa
  mengakui kegagalan masa lalu secara langsung:** mengulang kesalahan
  semula berupa transparansi yang kurang, kali ini diperparah riwayat yang
  tidak ditangani.

## Model kematangan

- **Tingkat 1, Initiate (Memulai):** Metrik diluncurkan dari atas ke bawah
  tanpa keterlibatan tim, dan tujuan serta non-tujuan dikomunikasikan secara
  reaktif, jika memang ada.
- **Tingkat 2, Develop (Mengembangkan):** Sebagian komunikasi dan keterlibatan
  tim terjadi, tetapi tidak ada masa pembuktian diagnostik saja yang
  berkelanjutan dan tidak ada protokol tanggapan penyalahgunaan yang jelas.
- **Tingkat 3, Standardize (Menstandarkan):** Program metrik baru secara
  konsisten diluncurkan dengan komunikasi proaktif, keterlibatan tim dalam
  perancangan, dan masa pembuktian diagnostik saja yang dipegang teguh di
  seluruh organisasi.
- **Tingkat 4, Manage (Mengelola):** Protokol tanggapan penyalahgunaan yang
  cepat, transparan, dan teruji ada dan telah dijalankan, dan penalaran pagar
  pengaman dibagikan secara terbuka kepada tim yang diukur sebagai praktik
  standar.
- **Tingkat 5, Orchestrate (Mengorkestrasi):** Organisasi memiliki rekam
  jejak yang terbukti dan berkelanjutan berupa data metrik yang tepercaya dan
  minim manipulasi, yang secara langsung dapat dikaitkan dengan praktik
  peluncuran yang disiplin dan membangun kepercayaan, dan rekam jejak ini
  dilindungi dan diperkuat secara aktif dengan setiap metrik baru yang
  diperkenalkan.

## Gagasan untuk diskusi

1. Apakah tujuan program metrik kami saat ini dikomunikasikan sebelum atau sesudah kekhawatiran muncul?
2. Apakah orang-orang yang diukur benar-benar dilibatkan dalam merancang metrik kami, atau sistemnya dipaksakan?
3. Pernahkah organisasi kami menangani sebuah metrik secara keliru dan menghukum, dan bagaimana kami menanggapinya?
4. Apakah tim yang diukur memahami mengapa pagar pengaman kami ada, atau penalaran itu disimpan sendiri?
5. Jika kami meluncurkan ulang program metrik kami hari ini dengan perhatian penuh pada topik ini, apa yang akan kami lakukan secara berbeda?

## Poin-poin utama

- **Ketakutan merusak data lebih cepat dan lebih menyeluruh daripada cacat
  teknis mana pun** dalam rancangan metrik; metrik yang dirancang sempurna
  tetapi diluncurkan dengan buruk tetap dimanipulasi.
- **Libatkan tim yang diukur secara langsung dalam perancangan metrik**, dan
  komunikasikan tujuan serta non-tujuan eksplisit secara proaktif, sebelum
  peluncuran.
- **Mulailah dengan diagnostik saja dan buktikan selama beberapa siklus**
  sebelum penggunaan evaluatif sekalipun dipertimbangkan.
- **Tanggapi insiden pertama yang ditangani keliru dengan segera dan secara
  terlihat**; kebisuan membenarkan persis ketakutan yang mendorong perilaku
  manipulasi.
- **Bagikan penalaran pagar pengaman dan pencegahan manipulasi secara
  transparan** kepada tim yang diukur, membangun kemitraan alih-alih
  hubungan pengawasan.

## Referensi dan bacaan lanjutan

- *Drive: The Surprising Truth About What Motivates Us*, by Daniel H. Pink
  (motivasi intrinsik versus ekstrinsik, relevan langsung dengan alasan
  ketakutan merusak perilaku yang digerakkan metrik).
- *The Tyranny of Metrics*, by Jerry Z. Muller (biaya organisasi dan budaya
  dari program metrik yang diterapkan dengan buruk).
- *Site Reliability Engineering: How Google Runs Production Systems*, by
  Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds.
  (prinsip budaya tanpa menyalahkan yang diperluas topik ini dari
  penanganan insiden ke peluncuran program metrik secara umum).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (riset budaya organisasi yang mendasari praktik
  metrik rekayasa yang tepercaya dan berkinerja tinggi).
