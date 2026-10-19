# 7.4 Telemetri hasil sebagai bintang utara yang baru

## Gambaran umum dan motivasi

Topik ini menutup Bagian 7, dan dalam arti yang nyata menutup argumen yang
dibangun seluruh buku ini sejak topik 1.3, dengan satu klaim langsung: seiring AI
generatif membuat keluaran mentah menjadi murah, **[telemetri](https://en.wikipedia.org/wiki/Telemetry) hasil**,
yaitu pengukuran hasil nyata yang berkelanjutan dan terinstrumentasi, bukan
aktivitas atau keluaran, berhenti menjadi satu praktik baik di antara beberapa
lainnya dan menjadi prinsip pengorganisasi yang harus menjadi dasar pembangunan
program metrik. Ini bukan gagasan baru yang diperkenalkan untuk pertama kalinya
di sini. Ini gagasan yang diperkenalkan topik 1.3 di bagian pembuka buku ini,
kini disajikan sebagai tanggapan yang perlu, bukan sekadar lebih disukai,
terhadap pergeseran teknologi yang membuat setiap alternatif lebih berbahaya
daripada sebelumnya.

Logikanya langsung. Sebelum AI generatif, volume keluaran adalah proksi yang tidak
sempurna tetapi tidak tanpa nilai untuk usaha dan, secara longgar, untuk nilai;
tim yang merilis lebih banyak fitur setidaknya telah bekerja lebih banyak,
meskipun pekerjaan itu tidak selalu pekerjaan yang tepat. AI generatif memutus
bahkan hubungan longgar itu: volume keluaran tidak lagi andal menunjukkan usaha,
karena perangkat dapat menghasilkannya dalam hitungan detik, dan jelas tidak
menunjukkan nilai, karena topik 7.3 menunjukkan bahwa keluaran yang menggelembung
dapat berdampingan dengan kualitas yang menurun. Metrik yang bertahan utuh
melewati pergeseran ini persis yang ditekankan buku ini untuk dibangun sejak
topik-topik pembukanya: tingkat cacat lolos (topik 5.1), adopsi fitur (topik
5.2), hasil pelanggan dan bisnis (topik 5.3), keandalan (Bagian 6), dan
kesejahteraan pengembang (Bagian 3). Tidak satu pun bergantung pada bagaimana
kode yang mendasarinya dihasilkan; semuanya mengukur apa yang benar-benar terjadi
sebagai akibatnya.

Bagi tim besar, argumen topik ini memiliki konsekuensi praktis langsung bagi
bagaimana program metrik harus dibangun dan dibangun ulang ke depan. Organisasi
perusahaan besar yang merancang ulang dasbor teknik mereka mengingat adopsi AI
sebaiknya mengarahkan investasi secara khusus ke infrastruktur telemetri hasil
yang dijelaskan topik ini; organisasi pemerintahan, yang mengevaluasi baik
perangkat AI maupun program teknologi lebih luas tempat perangkat itu tertanam,
sebaiknya menerapkan standar telemetri hasil yang sama yang direkomendasikan
topik ini sebagai garis dasar untuk setiap evaluasi yang kredibel dan tahan masa
depan.

## Prinsip utama

- **Telemetri hasil menjadi perlu, bukan sekadar lebih disukai, begitu keluaran
  menjadi murah.** Ini prinsip pendirian topik 1.3, kini mendesak, bukan lagi
  cita-cita.
- **Metrik yang bertahan melewati pergeseran ini adalah yang telah dibangun buku
  ini sepanjang jalan**: cacat lolos, adopsi, hasil bisnis, keandalan, dan
  kesejahteraan.
- **Program metrik yang dibangun terutama di sekitar metrik keluaran kini
  menjadi beban, bukan sekadar pilihan yang kurang optimal.** Metrik keluaran
  dapat digelembungkan dengan murah dan cepat dalam skala besar.
- **Telemetri hasil memerlukan investasi nyata**, instrumentasi, kesabaran
  terhadap sinyal yang lebih lambat, dan disiplin organisasi untuk menahan tarikan
  ke metrik keluaran yang lebih cepat, lebih murah, tetapi kini tidak andal.
- **Prinsip ini bertahan lebih lama daripada perangkat atau vendor AI mana
  pun.** Ini tanggapan yang tahan lama terhadap pergeseran yang tahan lama dalam
  makna keluaran, bukan penyesuaian sementara terhadap tren yang lewat.

## Rekomendasi

### Audit rasio investasi metrik Anda: telemetri hasil versus pelacakan keluaran

Hitung secara kasar berapa bagian dari infrastruktur metrik Anda saat ini,
upaya instrumentasi, ruang dasbor, waktu rapat tinjauan, yang diarahkan ke metrik
hasil (Bagian 5, Bagian 6, kesejahteraan pengembang dari Bagian 3) dibandingkan
metrik keluaran dan aktivitas (jumlah deployment, volume commit, throughput pull
request). Jika pelacakan keluaran mendominasi, rasio itu sendiri kini menjadi
beban menurut argumen topik ini, dan menyeimbangkannya kembali adalah perubahan
berdaya ungkit tertinggi yang direkomendasikan topik ini.

### Berinvestasilah pada infrastruktur telemetri hasil secara sengaja, sebagai investasi teknik kelas utama

Pengukuran hasil, pelacakan adopsi fitur, korelasi hasil bisnis (topik 5.3),
instrumentasi keandalan (Bagian 6), memerlukan investasi teknik yang nyata dan
berkelanjutan yang secara historis kurang dialokasikan sumber dayanya oleh banyak
organisasi dibandingkan metrik keluaran yang relatif murah dan mudah yang
mendominasi banyak dasbor saat ini. Perlakukan investasi infrastruktur ini
dengan kesungguhan yang sama seperti yang diterapkan buku ini pada kemampuan
teknik penting lainnya, bukan sebagai urusan sekunder di belakang investasi
perangkat AI itu sendiri.

### Terima dan komunikasikan bahwa telemetri hasil lebih lambat, dan bangun kesabaran untuk itu dalam ekspektasi organisasi Anda

Metrik hasil, hampir menurut sifatnya, lebih tertinggal dan lebih berisik
daripada metrik keluaran (pembedaan indikator pendahulu versus indikator
tertinggal dari topik 1.3, kehati-hatian statistik topik 1.6). Organisasi yang
terbiasa dengan umpan balik cepat dan memuaskan dari melihat angka keluaran naik
perlu membangun kesabaran sejati terhadap sinyal yang lebih lambat dan lebih
jujur yang diberikan telemetri hasil, dan pimpinan perlu secara aktif
mengomunikasikan dan meneladankan kesabaran itu, alih-alih refleks meraih
alternatif yang lebih cepat tetapi kini tidak andal di bawah tekanan untuk
menunjukkan hasil cepat.

### Jadikan pergeseran ini kesempatan untuk memensiunkan metrik keluaran yang sungguh usang, bukan hanya menambahkan metrik hasil di sampingnya

Mengikuti disiplin topik 1.1 untuk memensiunkan metrik yang tidak lagi layak
dipertahankan, gunakan momen ini sebagai kesempatan yang disengaja untuk
menghapus metrik keluaran dan aktivitas yang secara khusus telah dikurangi
nilainya oleh pergeseran ini, alih-alih sekadar menambahkan metrik hasil di atas
dasbor lama yang tidak berubah. Dasbor yang mempertahankan setiap metrik
keluaran lama sambil menempelkan metrik hasil yang baru menjadi membengkak,
bukan benar-benar membaik.

### Perlakukan investasi telemetri hasil sebagai investasi yang tahan lama, terlepas dari perangkat AI atau hubungan vendor tertentu

Bangun infrastruktur telemetri hasil sebagai kemampuan organisasi yang permanen,
bukan sebagai reaksi yang khusus pada perangkat AI apa pun yang kebetulan dipakai
organisasi Anda tahun ini. Prinsip ini, dan infrastruktur yang dituntutnya, akan
bertahan lebih lama daripada hubungan vendor atau generasi perangkat tertentu,
dan membangunnya sebagai kemampuan yang tahan lama melindungi program metrik
Anda terhadap pergeseran teknologi berikutnya sebagaimana terhadap yang sekarang.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Dasbor yang didominasi metrik keluaran | Umpan balik cepat dan murah; familier bagi kebanyakan organisasi | Kini tidak andal secara aktif mengingat efek AI generatif pada biaya keluaran |
| Dasbor yang didominasi telemetri hasil | Tahan terhadap pergeseran ini; mengukur apa yang benar-benar penting | Sinyal lebih lambat dan lebih berisik; memerlukan investasi instrumentasi yang nyata |
| Menambahkan metrik hasil di samping metrik keluaran yang tidak berubah | Bertahap, kurang mengganggu | Menghasilkan dasbor yang membengkak, bukan perbaikan sejati |
| Penyeimbangan ulang penuh yang disengaja menuju telemetri hasil | Menangani pergeseran ini secara langsung dan menyeluruh | Memerlukan perubahan organisasi dan investasi yang paling signifikan |

Ketegangan utamanya, dalam arti yang nyata, sama dengan yang membuka buku ini di
topik 1.3, kini dipertajam menjadi bentuk yang paling mendesak: **umpan balik
cepat dan familier versus sinyal yang lebih lambat dan jujur**. Metrik keluaran
selalu lebih mudah dan lebih cepat dihasilkan; argumen topik ini adalah bahwa AI
generatif telah memindahkan pertukaran itu dari sekadar kurang optimal menjadi
berbahaya secara aktif. Selesaikan ketegangan ini dengan cara yang direkomendasikan
buku ini sejak topik pembukanya: beratkan secara tegas ke hasil, terima umpan
balik lebih lambat yang menyertai pengukuran nilai yang sejati, dan perlakukan
ketidaknyamanan umpan balik yang lebih lambat itu sebagai biaya jujur dari
mengukur sesuatu yang nyata, bukan sesuatu yang sekadar nyaman.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Berapa bagian dari infrastruktur metrik dan perhatian dasbor kita saat ini
   yang diarahkan ke metrik hasil dibandingkan metrik keluaran dan aktivitas?**
   Hitung rasio ini secara jujur; kebanyakan organisasi, ketika dinilai untuk
   pertama kalinya, mendapati rasionya lebih condong ke keluaran daripada yang
   mereka duga.

2. **Investasi infrastruktur telemetri hasil spesifik apa yang telah kita
   tunda demi pelacakan keluaran yang lebih cepat dan lebih murah?** Sebut satu
   contoh konkret, instrumentasi adopsi fitur, perangkat korelasi hasil bisnis,
   dan diskusikan apa yang diperlukan untuk benar-benar membangunnya.

3. **Apakah organisasi kita telah membangun kesabaran sejati terhadap umpan
   balik telemetri hasil yang lebih lambat, atau tekanan untuk hasil cepat terus
   menarik kita kembali ke metrik keluaran yang lebih cepat tetapi kini tidak
   andal?** Jujurlah tentang pola ini dalam pelaporan dan rapat tinjauan Anda
   yang terbaru.

4. **Metrik keluaran atau aktivitas mana di dasbor kita saat ini yang layak
   dipensiunkan, sekarang setelah argumen topik ini berlaku khusus untuknya?**
   Identifikasi setidaknya satu, dan diskusikan apa yang perlu menggantikannya
   alih-alih sekadar meninggalkan celah.

5. **Jika vendor perangkat AI kita atau generasi asisten pemrograman AI saat ini
   berubah drastis tahun depan, apakah program metrik kita masih akan bertahan?**
   Ini menguji apakah investasi telemetri hasil Anda sungguh tahan lama, dibangun
   sebagai kemampuan permanen, atau sekadar reaksi yang khusus pada situasi
   perangkat Anda saat ini.

6. **Seperti apa jadinya jika organisasi kita sepenuhnya berkomitmen pada argumen
   topik ini, menyeimbangkan kembali investasi metrik kita secara tegas ke hasil,
   bukan secara bertahap?** Gambarkan ini secara konkret, jangan dibiarkan
   abstrak; jurang antara keadaan saat ini dan visi ini adalah peta jalan
   sesungguhnya bagi organisasi Anda untuk menanggapi pergeseran ini.

## Lensa sektor

**Startup.** Membangun telemetri hasil sejak dini, sebelum metrik keluaran sempat
menjadi kebiasaan organisasi yang mengakar, sungguh lebih mudah daripada
memasangnya belakangan. Perusahaan muda yang mengadopsi bantuan pemrograman AI
sejak awal memiliki peluang nyata untuk membangun program metriknya dengan hasil
sebagai yang utama, tanpa harus mengurai budaya yang didominasi metrik keluaran.

**Usaha kecil.** Fokuskan investasi telemetri hasil pada satu metrik hasil yang
paling langsung mencerminkan kelangsungan hidup dan pertumbuhan (topik 5.3),
alih-alih mencoba instrumentasi menyeluruh di setiap kategori hasil yang dibahas
buku ini. Investasi telemetri hasil yang sederhana dan terfokus lebih unggul
daripada dasbor metrik keluaran yang komprehensif yang kini secara khusus
dikurangi nilainya oleh argumen topik ini.

**Perusahaan besar.** Penyeimbangan ulang yang direkomendasikan topik ini adalah
perubahan organisasi yang nyata dan signifikan pada skala ini, kemungkinan
memerlukan sponsor eksekutif dan rencana investasi multikuartal. Perlakukan
dengan kesungguhan yang sama seperti investasi infrastruktur besar lainnya yang
dibahas buku ini, dan gunakan contoh spesifik dan konkret dari topik 7.1 dan
topik 7.3, inflasi metrik dan pengenceran kualitas yang akan lebih cepat
tertangkap oleh dasbor yang telah diseimbangkan ulang, untuk membangun kasus
internal bagi investasi itu.

**Pemerintahan.** Program teknologi pemerintah yang dievaluasi terutama
berdasarkan metrik pengiriman dan keluaran (fitur yang dirilis, tepat jadwal)
semakin rentan terhadap persis skeptisisme yang dijelaskan topik 5.3, dan argumen
topik ini mempertajam kerentanan itu lebih jauh seiring adopsi perangkat AI
menyebar di industri luas tempat lembaga pemerintah merekrut dan dibandingkan.
Bangun telemetri hasil sebagai dasar utama pelaporan publik dan pembenaran
anggaran, menempatkan organisasi Anda di depan, bukan di belakang, pergeseran
ini.

## Contoh

**Perusahaan besar.** Pimpinan teknik sebuah perusahaan perangkat lunak, yang
tergerak langsung oleh nyaris-celaka inflasi metrik yang dijelaskan dalam contoh
perusahaan teknologi keuangan di topik 7.1, melakukan audit penuh atas rasio
investasi metriknya dan mendapati hampir 70% ruang dasbor dan upaya instrumentasi
dicurahkan pada metrik keluaran dan aktivitas, dengan investasi yang hanya
sederhana dan tidak konsisten pada telemetri hasil. Dalam setahun berikutnya,
perusahaan secara sengaja menyeimbangkan kembali rasio ini, memensiunkan beberapa
metrik keluaran yang ditandai audit topik 7.1 sebagai paling terpapar dan
menanamkan kapasitas yang dibebaskan pada instrumentasi adopsi fitur dan hasil
bisnis (topik 5.2, 5.3). Dasbor yang dihasilkan, dipresentasikan pada rapat dewan
tahun berikutnya, secara eksplisit diakui oleh anggota dewan yang sebelumnya
skeptis itu sebagai dasar yang jauh lebih dapat dipercaya untuk mengevaluasi
investasi teknik daripada versi sarat keluaran yang digantikannya.

**Pemerintahan.** Sebuah lembaga layanan digital nasional, yang membangun program
metrik teknik baru dari nol justru karena dasbor sebelumnya yang didominasi
metrik keluaran telah menuai skeptisisme legislatif yang berkepanjangan,
mengadopsi prinsip topik ini secara eksplisit sebagai keputusan rancangan
pendiriannya: telemetri hasil, waktu tunggu warga, tingkat penyelesaian layanan,
tingkat cacat lolos, akan menjadi dasar utama seluruh pelaporan publik, dengan
metrik keluaran dan pengiriman hanya dipertahankan sebagai perangkat diagnostik
internal, tidak pernah sebagai bukti utama yang disajikan ke luar. Rancangan
yang mengutamakan hasil ini, dibangun secara sengaja mengingat pergeseran AI
generatif yang dijelaskan bagian ini, memberi pelaporan lembaga itu daya tahan
dan kredibilitas di hadapan komite pengawasnya yang tidak pernah dicapai program
pendahulunya, yang dibangun di sekitar asumsi metrik keluaran generasi
sebelumnya.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari berkomitmen secara tegas pada telemetri hasil adalah program
metrik yang tetap dapat dipercaya dan kredibel melewati pergeseran teknologi saat
ini dan apa pun yang menyusul, bukan program yang memerlukan perombakan
signifikan lagi saat keluaran menjadi murah oleh perubahan teknologi di masa
depan. Contoh perusahaan perangkat lunak di atas menunjukkan hal ini secara
konkret: dasbor yang diseimbangkan ulang langsung memulihkan kredibilitas yang
telah dipertaruhkan oleh versi sebelumnya yang sarat keluaran.

Total biaya kepemilikan adalah investasi infrastruktur telemetri hasil yang
direkomendasikan topik ini, pekerjaan multikuartal yang sungguh signifikan bagi
organisasi besar, ditimbang terhadap risiko jangka panjang yang tahan lama dari
program metrik yang makin lama makin kurang dapat dipercaya seiring keluaran
terus menjadi lebih murah. Ini bukan biaya yang diminta buku ini untuk Anda
terima begitu saja; ini konsekuensi langsung dan perlu dari menanggapi argumen
pendirian topik 1.3 sesungguh-sungguhnya seperti yang diminta bagian akhir buku
ini.

## Anti-pola dan jebakan

- **Menganggap pergeseran ini hanya memerlukan penyesuaian bertahap, bukan
  penyeimbangan ulang yang sungguh-sungguh:** meremehkan skala perubahan yang
  dibawa AI generatif pada makna metrik keluaran.
- **Menambahkan metrik hasil di samping set metrik keluaran yang tidak berubah
  dan masih dominan:** menghasilkan dasbor yang membengkak, bukan penyeimbangan
  ulang sejati yang diperjuangkan topik ini.
- **Membangun investasi telemetri hasil sebagai reaksi terhadap perangkat AI
  tertentu saat ini, bukan sebagai kemampuan yang tahan lama:** membuat
  organisasi terpapar pergeseran teknologi berikutnya dengan cara yang sama.
- **Gagal membangun kesabaran organisasi terhadap umpan balik telemetri hasil
  yang lebih lambat:** berisiko kembali ke metrik keluaran yang lebih cepat,
  tetapi kini tidak andal, di bawah tekanan untuk hasil cepat.
- **Memensiunkan metrik keluaran tanpa pengganti telemetri hasil yang sejati:**
  meninggalkan celah pengukuran, bukan perbaikan sejati.
- **Menyajikan pergeseran ini kepada pemangku kepentingan hanya sebagai tanggapan
  terhadap perangkat AI, bukan sebagai pemenuhan prinsip pendirian buku ini:**
  mengecilkan daya tahan dan keumuman argumen ini.

## Model kematangan

- **Level 1, Initiate (Memulai):** Dasbor tetap didominasi metrik keluaran,
  tanpa tanggapan yang disengaja terhadap pergeseran yang dijelaskan bagian ini.
- **Level 2, Develop (Mengembangkan):** Beberapa metrik hasil telah ditambahkan,
  tetapi rasio investasi keseluruhan tetap condong ke keluaran dan tidak ada
  metrik yang dipensiunkan secara sengaja.
- **Level 3, Standardize (Membakukan):** Audit dan penyeimbangan ulang yang
  disengaja menuju telemetri hasil telah dilakukan, dengan metrik keluaran yang
  sungguh usang dipensiunkan, di seluruh organisasi.
- **Level 4, Manage (Mengelola):** Infrastruktur telemetri hasil diperlakukan
  sebagai investasi teknik kelas utama yang berkelanjutan, dan kesabaran
  organisasi terhadap umpan balik yang lebih lambat secara aktif dipupuk dan
  dilindungi.
- **Level 5, Orchestrate (Mengorkestrasi):** Program metrik organisasi dipimpin
  telemetri hasil sebagai prinsip rancangan yang tahan lama dan permanen, terbukti
  tahan melewati pergeseran teknologi saat ini dan sengaja dibangun agar tetap
  tahan melewati apa pun yang datang berikutnya.

## Gagasan untuk diskusi

1. Berapa rasio aktual investasi metrik hasil terhadap metrik keluaran kita saat ini?
2. Metrik keluaran tunggal mana yang sebaiknya kita pensiunkan kuartal ini, dan metrik hasil apa yang menggantikannya?
3. Di mana ketidaksabaran organisasi baru-baru ini menarik kita kembali ke metrik keluaran yang lebih cepat tetapi kurang dapat dipercaya?
4. Apakah investasi telemetri hasil kita tahan lama, atau terikat khusus pada situasi perangkat AI kita saat ini?
5. Apa yang diperlukan untuk sepenuhnya berkomitmen pada argumen topik ini, bukan menyesuaikan secara bertahap?

## Poin-poin utama

- Telemetri hasil menjadi **perlu, bukan sekadar lebih disukai**, begitu AI
  generatif membuat keluaran murah; ini prinsip pendirian topik 1.3, kini
  mendesak.
- Metrik yang **bertahan melewati pergeseran ini** adalah yang dibangun buku ini
  sepanjang jalan: cacat lolos, adopsi, hasil bisnis, keandalan, dan
  kesejahteraan.
- **Audit dan seimbangkan kembali rasio investasi metrik Anda** secara sengaja,
  memensiunkan metrik keluaran yang sungguh usang, bukan hanya menambahkan metrik
  hasil di sampingnya.
- Bangun **kesabaran organisasi terhadap umpan balik telemetri hasil yang lebih
  lambat**, dan tahan tarikan kembali ke metrik keluaran yang lebih cepat tetapi
  kini tidak andal di bawah tekanan.
- Bangun investasi ini sebagai **kemampuan yang tahan lama**, terlepas dari
  perangkat atau vendor AI tertentu, melindungi program metrik Anda terhadap
  pergeseran teknologi di masa depan sebagaimana terhadap yang sekarang.

## Referensi dan bacaan lanjutan

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (landasan pengukuran berbasis hasil yang menjadi
  dasar seluruh buku ini, dan topik penutup Bagian 7 ini).
- *Lean Analytics*, by Alistair Croll and Benjamin Yoskovitz (pembedaan metrik
  yang dapat ditindaklanjuti versus metrik pajangan yang diperluas argumen topik
  ini ke era AI).
- *The Innovator's Dilemma*, by Clayton M. Christensen (pola umum metrik dan
  praktik yang mapan menjadi beban di bawah pergeseran teknologi yang
  mengganggu).
- *Measure What Matters*, by John Doerr (penetapan sasaran berorientasi hasil
  sebagai prinsip pengorganisasi program metrik, model yang menurut topik ini
  kini seharusnya menjadi bawaan, bukan pengecualian).
