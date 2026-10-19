# 7.3 Risiko inflasi metrik dan pengenceran kualitas

## Gambaran umum dan motivasi

Topik ini menyebut, secara langsung dan spesifik, dua mode kegagalan yang menurut
peringatan topik 7.1 harus dijaga oleh seluruh kerangka buku ini seiring
pengembangan berbantuan AI menjadi praktik standar: **inflasi metrik**, yaitu
angka yang naik tanpa nilai nyata yang sepadan, dan **pengenceran kualitas**,
yaitu erosi bertahap kualitas kode yang melaju lebih cepat daripada kemampuan
industri saat ini untuk mendeteksinya lewat praktik tinjauan dan pengujian yang
ada. Ini bukan kategori risiko baru yang belum disebut buku ini: inflasi metrik
adalah hukum Goodhart dari topik 1.2 dan manipulasi substitusi dari topik 1.2
yang diterapkan dalam skala besar, dan pengenceran kualitas adalah jurang
efektivitas cakupan dari topik 4.2 dan kekhawatiran cacat lolos dari topik 5.1,
keduanya diperkuat. Yang baru adalah kecepatan dan skala tempat AI generatif
dapat menghasilkan kedua mode kegagalan itu sekaligus, lebih cepat daripada yang
dirancang untuk ditangkap oleh pagar pengaman kebanyakan organisasi.

Mekanisme spesifik yang menjadi perhatian topik ini bersifat halus: kode hasil
AI sangat sering tampak benar. Ia mengikuti idiom yang familier, memakai nama
variabel yang masuk akal, dan lolos dari pembacaan sepintas jauh lebih andal
daripada kode tulisan manusia yang sungguh ceroboh, justru karena ia dilatih
pada korpus kode yang sangat besar yang tampak benar. Ini membuat cacat hasil AI
lebih sulit ditangkap peninjau manusia lewat jenis tinjauan pencocokan pola,
"apakah ini terlihat benar", yang menangkap banyak bug buatan manusia, karena
versi hasil AI secara khusus dioptimalkan, dalam pengertian statistik, agar
tampak benar entah ia benar-benar benar atau tidak.

Bagi tim besar, risiko topik ini berlipat ganda seiring skala dengan cara yang
semestinya menjadi perhatian khusus organisasi perusahaan besar dan pemerintahan:
inflasi metrik di puluhan tim sekaligus dapat menghasilkan sinyal palsu
peningkatan produktivitas di seluruh organisasi yang memerlukan waktu dan
analisis yang signifikan untuk diurai, persis seperti ditunjukkan contoh
perusahaan teknologi keuangan di topik 7.1. Pengenceran kualitas yang melaju
lebih cepat daripada kemampuan deteksi lebih serius lagi dalam konteks yang
diatur regulasi, kritis keselamatan, atau menyangkut kepercayaan publik, tempat
biaya cacat tak terdeteksi yang mencapai produksi membawa konsekuensi jauh
melampaui urusan teknik semata.

## Prinsip utama

- **Inflasi metrik dan pengenceran kualitas adalah versi yang diperkuat dari
  risiko yang sudah disebut buku ini**, bukan kategori yang sepenuhnya baru;
  pagar pengaman yang ada tetap berlaku, tetapi perlu bekerja lebih keras.
- **Kualitas "tampak benar" pada kode hasil AI membuatnya secara khusus lebih
  sulit bagi tinjauan pencocokan pola manusia untuk menangkap cacat halus.**
  Ini risiko yang berbeda dari kesalahan manusia biasa.
- **Kecepatan pergeseran ini dapat melampaui kemampuan organisasi menyesuaikan
  pagar pengamannya**, menciptakan jendela keterpaparan yang nyata dan terbatas
  waktu.
- **Metrik kualitas yang ada (Bagian 4) tetap berharga tetapi mungkin perlu
  dikalibrasi ulang**, bukan diganti, mengingat profil risiko baru ini.
- **Kemampuan deteksi itu sendiri memerlukan investasi yang disengaja**, karena
  praktik tinjauan dan pengujian yang dibahas buku ini dirancang sebelum risiko
  spesifik ini ada dalam skala seperti sekarang.

## Rekomendasi

### Kalibrasi ulang ambang batas tingkat kegagalan perubahan dan cacat lolos untuk pekerjaan yang sarat AI

Di tempat tim atau area kode telah mengadopsi bantuan AI secara intensif,
terapkan pelacakan berbobot keparahan dari topik 2.4 dan topik 5.1 dengan
kepekaan yang lebih tinggi, setidaknya sampai organisasi Anda membangun bukti
yang cukup (topik 7.2) untuk mengetahui apakah hubungan historis antara metrik
ini dan risiko sesungguhnya masih berlaku tanpa perubahan untuk pekerjaan
berbantuan AI secara khusus. Perlakukan kalibrasi ulang ini sebagai sikap
sementara untuk mengumpulkan bukti, bukan asumsi permanen yang tidak diperiksa
ke arah mana pun.

### Berinvestasilah secara khusus pada kemampuan deteksi yang tahan terhadap masalah "tampak benar"

Tinjauan kode tradisional, yang sangat bergantung pada pengenalan pola peninjau
untuk apa yang tampak benar, secara khusus melemah terhadap kode hasil AI yang
tampak meyakinkan tetapi keliru secara halus. Berinvestasilah lebih banyak pada
metode deteksi yang tidak bergantung pada pencocokan pola visual: [pengujian mutasi](https://en.wikipedia.org/wiki/Mutation_testing)
(topik 4.2), yang menguji perilaku sebenarnya, bukan penampilan, dan pengujian
berbasis properti atau invarian, yang memverifikasi kebenaran logis, bukan
kemasukakalan permukaan, keduanya menjadi tidak sebanding lebih berharga
justru karena pergeseran ini.

### Waspadai inflasi metrik di seluruh alur pengiriman, bukan hanya pada titik pembuatan kode

Inflasi metrik dari pengembangan berbantuan AI tidak terbatas pada tahap
pemrograman; ia dapat merambat melalui seluruh rantai waktu siklus (topik 2.6):
volume pull request hasil AI yang lebih besar dapat menggelembungkan metrik
throughput pull request (topik 2.9) padahal sinyal berguna yang semula hendak
ditangkap metrik itu, throughput tim yang sesungguhnya, tetap datar atau bahkan
menurun begitu beban tinjauan dan biaya koreksi diperhitungkan dengan benar.
Audit seluruh set metrik Anda untuk pola perambatan ini, bukan hanya metrik yang
paling jelas dan langsung berkaitan dengan AI.

### Susun rencana kalibrasi ulang yang eksplisit dan terbatas waktu, bukan sikap curiga permanen

Pengawasan yang ditingkatkan yang direkomendasikan topik ini tepat selama masa
adopsi dan ketidakpastian yang aktif, tetapi tidak boleh menjadi pajak
permanen yang tidak diperiksa atas pekerjaan berbantuan AI untuk selamanya.
Seiring organisasi Anda membangun bukti nyata melalui disiplin pengukuran topik
7.2, revisi ambang batas dan pagar pengaman berdasarkan apa yang sebenarnya
ditunjukkan bukti itu, perketat lagi di tempat risiko terkonfirmasi, longgarkan
di tempat tidak, alih-alih mengabaikan risiko sepenuhnya atau memperlakukan
setiap potong kode berbantuan AI dengan kecurigaan permanen yang tidak
dibeda-bedakan terlepas dari bukti yang terkumpul.

### Komunikasikan risiko ini secara transparan, bukan memperlakukannya sebagai alasan menolak adopsi AI

Bingkai panduan topik ini sebagai manajemen risiko untuk kemampuan baru yang
sungguh berharga, bukan sebagai argumen menentang pengembangan berbantuan AI
secara umum. Organisasi yang mengomunikasikan risiko spesifik dan bernama ini
dengan jelas dan membangun pagar pengaman yang proporsional terhadapnya, persis
seperti yang direkomendasikan buku ini untuk setiap metrik dan teknik lain yang
dibahasnya, mengadopsi bantuan AI dengan lebih aman dan lebih berkelanjutan
daripada organisasi yang mengabaikan risiko atau menjadikannya alasan untuk
menolak secara menyeluruh seperangkat alat yang sungguh berguna.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa kalibrasi ulang, perlakukan pekerjaan berbantuan AI sama seperti kode tulisan manusia | Sederhana, tanpa perubahan proses | Melewatkan profil risiko yang lebih tinggi yang spesifik dan disarankan bukti |
| Pengawasan ketat menyeluruh dan permanen atas semua kode berbantuan AI | Memaksimalkan pengurangan risiko jangka pendek | Pajak yang tidak berkelanjutan atas kemampuan yang sungguh berharga; mengabaikan bukti yang terkumpul |
| Kalibrasi ulang terbatas waktu dan digerakkan bukti | Menyeimbangkan manajemen risiko dengan adopsi yang berkelanjutan | Memerlukan disiplin pengukuran berkelanjutan (topik 7.2) untuk mengetahui kapan melonggarkan pengawasan |
| Investasi pada metode deteksi yang tahan terhadap cacat "tampak benar" | Menangani risiko baru yang spesifik secara langsung dan tahan lama | Memerlukan investasi awal pada infrastruktur pengujian mutasi dan berbasis properti |

Ketegangan utamanya adalah **kehati-hatian versus kecepatan adopsi**.
Kehati-hatian berlebihan yang permanen menyia-nyiakan sebagian besar nilai
sejati pengembangan berbantuan AI; kehati-hatian yang kurang berisiko
menimbulkan inflasi metrik dan pengenceran kualitas yang disebut topik ini,
berpotensi dalam skala signifikan sebelum terdeteksi. Selesaikan ketegangan ini
lewat pendekatan terbatas waktu dan digerakkan bukti yang direkomendasikan topik
ini: pengawasan ditingkatkan sekarang, dikalibrasi turun atau naik seiring
bukti nyata dari disiplin pengukuran topik 7.2 terkumpul, bukan kebijakan
menyeluruh yang permanen maupun asumsi tak diperiksa bahwa tidak ada yang
berubah.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita telah mengkalibrasi ulang ambang batas tingkat kegagalan
   perubahan atau cacat lolos untuk pekerjaan yang sarat AI, atau kita menerapkan
   ambang batas era sebelum AI tanpa perubahan?** Jika tidak berubah, diskusikan
   apakah itu mencerminkan keputusan yang disengaja dan berbasis bukti atau
   sekadar kurangnya perhatian pada pertanyaan ini.

2. **Apakah kita memiliki metode deteksi, seperti pengujian mutasi, yang tidak
   bergantung pada pencocokan pola visual peninjau, atau proses tinjauan kita
   sepenuhnya bergantung pada mata manusia yang menilai apakah kode "tampak
   benar"?** Inilah kerentanan spesifik yang diidentifikasi topik ini; nilai
   kemampuan deteksi Anda saat ini terhadapnya secara jujur.

3. **Apakah inflasi metrik telah merambat melampaui tahap pemrograman ke metrik
   pull request atau deployment kita, dan akankah kita menyadarinya
   sekarang jika sudah?** Telusuri seluruh rantai waktu siklus Anda untuk pola
   perambatan ini, bukan hanya titik asal yang paling jelas.

4. **Apakah pengawasan ketat kita saat ini atas kode berbantuan AI, jika ada,
   berdasarkan bukti yang terkumpul, atau itu bawaan yang tidak diperiksa dan
   tanpa batas waktu yang tidak pernah ditinjau ulang?** Diskusikan bukti apa
   yang perlu terkumpul sebelum Anda mempertimbangkan melonggarkan atau
   memperketat pagar pengaman saat ini.

5. **Bagaimana kita mengomunikasikan risiko topik ini secara internal: sebagai
   alasan untuk berhati-hati dan memasang pagar pengaman yang proporsional, atau
   sebagai argumen tersirat menentang adopsi AI secara umum?** Jujurlah tentang
   bagaimana percakapan ini sebenarnya diterima tim Anda, karena pesan yang
   diterima sebagai penolakan menyeluruh jarang menghasilkan tanggapan
   proporsional berbasis bukti yang direkomendasikan topik ini.

6. **Seperti apa jadinya jika organisasi kita baru menemukan, setelah skala yang
   signifikan, bahwa inflasi metrik dan pengenceran kualitas ternyata terjadi
   bersamaan dan tidak terdeteksi?** Skenario konkret yang agak tidak nyaman ini
   layak disebut secara eksplisit sebagai kegagalan spesifik yang hendak dicegah
   oleh pagar pengaman topik ini.

## Lensa sektor

**Startup.** Adopsi cepat dengan kapasitas tinjauan terbatas membuat risiko
topik ini sangat akut bagi tim kecil; masalah deteksi "tampak benar" lebih sulit
ditangkap oleh peninjau yang lebih sedikit dan kurang terspesialisasi.
Berinvestasilah sejak dini pada setidaknya pengujian mutasi ringan di jalur kode
Anda yang paling kritis, meskipun cakupan menyeluruh belum layak.

**Usaha kecil.** Proses kalibrasi ulang formal kemungkinan tidak diperlukan pada
skala ini, tetapi kesadaran sederhana dan eksplisit bahwa kode hasil AI layak
dibaca sedikit lebih skeptis daripada biasanya, tepatnya karena cenderung tampak
lebih meyakinkan benar daripada kenyataannya, tidak memerlukan biaya dan
langsung menjawab kekhawatiran inti topik ini.

**Perusahaan besar.** Inflasi metrik dan pengenceran kualitas keduanya
berlipat ganda secara signifikan pada skala besar, karena sinyal palsu atau
masalah kualitas yang tidak terdeteksi di puluhan tim sekaligus jauh lebih
berdampak dan jauh lebih sulit diurai daripada masalah yang sama di satu tim.
Berinvestasilah dengan sengaja pada peningkatan kemampuan deteksi di seluruh
organisasi (infrastruktur pengujian mutasi, adopsi pengujian berbasis properti)
dan pada disiplin kalibrasi ulang terbatas waktu yang direkomendasikan topik
ini, yang dilacak secara terpusat.

**Pemerintahan.** Konsekuensi pengenceran kualitas yang tidak terdeteksi sangat
serius dalam konteks yang diatur regulasi, kritis keselamatan, atau menyangkut
kepercayaan publik yang lazim pada sistem pemerintah. Terapkan pengawasan yang
ditingkatkan dan digerakkan bukti secara khusus pada perubahan berbantuan AI di
jalur kode berkonsekuensi tinggi (logika pembobotan keterpaparan dan
keterekspoitasian dari topik 6.4 berlaku serupa di sini), dan bersiaplah
menunjukkan kepada auditor atau badan pengawas persis kemampuan deteksi apa yang
ada terhadap risiko spesifik ini.

## Contoh

**Perusahaan besar.** Tim teknik pemrosesan klaim sebuah perusahaan asuransi
mengadopsi bantuan pemrograman AI secara luas dan, enam bulan kemudian,
menyadari kenaikan bertahap tetapi terukur pada cacat lolos, khususnya pada
logika bersyarat yang kompleks, jenis kode yang penanganan kasus tepinya yang
keliru secara halus paling mudah dihasilkan secara meyakinkan oleh perangkat AI
dan paling sulit ditangkap peninjau lewat inspeksi saja. Penyelidikan
mengonfirmasi pola "tampak benar" yang dijelaskan topik ini: kode yang cacat itu
secara konsisten memakai pola idiomatik yang tampak familier dan lolos tinjauan
tanpa memicu pengawasan seperti yang mungkin diterima potongan kode tulisan
manusia yang jelas tidak lazim atau canggung. Tanggapan tim mengarahkan
pengujian mutasi secara khusus pada logika bersyarat yang kompleks di seluruh
perusahaan, metode deteksi yang tahan terhadap masalah kemasukakalan permukaan,
dan mengukur pengurangan signifikan pada kategori cacat spesifik ini dalam dua
kuartal.

**Pemerintahan.** Sebuah otoritas pajak yang menguji coba pengembangan berbantuan
AI untuk sebagian pekerjaan pemeliharaan mesin perhitungannya membangun disiplin
kalibrasi ulang terbatas waktu yang direkomendasikan topik ini sejak awal,
menetapkan periode pengumpulan bukti enam bulan yang eksplisit dengan
persyaratan tinjauan yang ditingkatkan untuk perubahan berbantuan AI pada logika
perhitungan secara khusus. Bukti yang terkumpul tidak menunjukkan perbedaan
bermakna secara statistik pada tingkat cacat untuk perubahan sempit yang
cakupannya jelas, tetapi mengonfirmasi risiko yang lebih tinggi untuk perubahan
berbantuan AI yang lebih luas dan lebih signifikan secara arsitektural.
Kebijakan lembaga itu yang dihasilkan melonggarkan pengawasan ketat untuk
kategori perubahan sempit sambil mempertahankan dan bahkan memperkuatnya untuk
perubahan yang signifikan secara arsitektural, hasil yang proporsional dan
berbasis bukti yang tidak akan dihasilkan oleh kedua ekstrem "tanpa kalibrasi
ulang" maupun "pengawasan permanen menyeluruh".

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari menjaga diri secara sengaja terhadap inflasi metrik dan
pengenceran kualitas adalah terhindar dari persis skenario yang ditunjukkan
contoh perusahaan asuransi di atas: masalah kualitas yang tidak terdeteksi dan
menumpuk secara bertahap, yang biaya menemukan dan memperbaikinya setelah
kejadian jauh lebih besar daripada biaya investasi deteksi secara proaktif,
yaitu infrastruktur pengujian mutasi yang diarahkan secara khusus pada kode
berisiko tertinggi.

Total biaya kepemilikan mencakup investasi kemampuan deteksi yang
direkomendasikan topik ini dan disiplin berkelanjutan kalibrasi ulang berbasis
bukti, bukan salah satu dari dua ekstrem, kecurigaan permanen atau ketidakpedulian
permanen. Biaya itu moderat dan terbatas waktu dibandingkan risiko masalah
kualitas besar berskala luas yang tidak terdeteksi justru karena, oleh sifat cara
perangkat ini menghasilkan kode, ia dirancang tampak benar bagi proses tinjauan
yang sudah dimiliki organisasi.

## Anti-pola dan jebakan

- **Menerapkan ambang batas dan metode deteksi era sebelum AI tanpa perubahan:**
  melewatkan profil risiko yang lebih tinggi yang spesifik dan disarankan bukti.
- **Bergantung sepenuhnya pada tinjauan pencocokan pola manusia untuk kode hasil
  AI:** secara khusus rentan terhadap masalah "tampak benar" yang diidentifikasi
  topik ini.
- **Melewatkan perambatan inflasi metrik melampaui titik pembuatan kode:** sinyal
  palsu dapat menyebar melalui seluruh alur pengiriman tanpa terdeteksi.
- **Pengawasan menyeluruh yang permanen dan tidak diperiksa tanpa kalibrasi ulang
  berbasis bukti:** menyia-nyiakan sebagian besar nilai sejati pengembangan
  berbantuan AI secara tidak berkelanjutan.
- **Mengomunikasikan risiko topik ini sebagai penolakan menyeluruh terhadap
  adopsi AI, bukan manajemen risiko yang proporsional:** merusak keselamatan
  sekaligus adopsi.
- **Tidak ada investasi kemampuan deteksi yang diarahkan khusus pada profil
  risiko baru ini:** membuat organisasi bergantung pada metode tinjauan yang
  telah ditunjukkan topik ini melemah secara khusus terhadapnya.

## Model kematangan

- **Level 1, Initiate (Memulai):** Tidak ada kesadaran tentang risiko inflasi
  metrik atau pengenceran kualitas yang spesifik pada pengembangan berbantuan AI;
  pagar pengaman dan metode deteksi yang ada diterapkan tanpa perubahan.
- **Level 2, Develop (Mengembangkan):** Ada sebagian kesadaran, tetapi kalibrasi
  ulang bersifat ad hoc dan investasi kemampuan deteksi yang spesifik untuk
  risiko ini belum dilakukan.
- **Level 3, Standardize (Membakukan):** Ambang batas yang dikalibrasi ulang dan
  metode deteksi yang tahan terhadap masalah "tampak benar" (pengujian mutasi
  dan berbasis properti) diterapkan secara konsisten pada pekerjaan berbantuan
  AI.
- **Level 4, Manage (Mengelola):** Disiplin kalibrasi ulang terbatas waktu dan
  digerakkan bukti secara aktif menyesuaikan pengawasan berdasarkan data yang
  terkumpul, dan perambatan inflasi metrik dipantau secara aktif di seluruh
  alur.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi memiliki sikap manajemen
  risiko yang matang, proporsional, dan terus berkembang terhadap pengembangan
  berbantuan AI, dikomunikasikan secara transparan, yang tidak menyia-nyiakan
  nilainya lewat kehati-hatian berlebihan maupun membuat organisasi terpapar
  pengenceran kualitas yang tidak terdeteksi.

## Gagasan untuk diskusi

1. Apakah kita sudah melihat bukti awal pola cacat "tampak benar" pada kode berbantuan AI kita sendiri?
2. Metode deteksi apa yang paling langsung menjawab risiko spesifik topik ini bagi kita?
3. Apakah inflasi metrik dari bantuan AI telah merambat ke metrik alur hilir kita?
4. Apakah pengawasan kita saat ini atas kode berbantuan AI berbasis bukti atau bawaan yang tidak diperiksa?
5. Bagaimana panduan topik ini sebenarnya diterima tim kita: sebagai manajemen risiko atau sebagai penolakan terhadap adopsi AI?

## Poin-poin utama

- Inflasi metrik dan pengenceran kualitas adalah **versi yang diperkuat dari
  risiko yang sudah disebut buku ini**, yang menuntut pagar pengaman yang ada
  bekerja lebih keras, bukan kerangka yang sepenuhnya baru.
- Kecenderungan kode hasil AI untuk **"tampak benar"** secara khusus melemahkan
  tinjauan kode manusia tradisional yang berbasis pencocokan pola.
- Berinvestasilah pada **metode deteksi yang tahan terhadap kemasukakalan
  permukaan**, khususnya pengujian mutasi dan berbasis properti.
- Terapkan sikap **kalibrasi ulang terbatas waktu dan digerakkan bukti**, bukan
  kecurigaan menyeluruh yang permanen maupun kepercayaan permanen yang tidak
  diperiksa.
- **Komunikasikan risiko ini sebagai manajemen risiko yang proporsional**, bukan
  sebagai argumen menentang adopsi AI, untuk mendukung keselamatan sekaligus
  pemakaian yang berkelanjutan.

## Referensi dan bacaan lanjutan

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (disiplin kecepatan dan stabilitas berpasangan yang
  diterapkan topik ini pada kategori risiko baru).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering* (2011):
  metode deteksi yang menurut topik ini menjadi tidak sebanding lebih berharga.
- GitHub's research on AI pair programming and developer productivity
  (data industri tentang hasil dan risiko pengembangan berbantuan AI).
- *The Tyranny of Metrics*, by Jerry Z. Muller (fiksasi metrik dan risiko
  manipulasi, sangat relevan dengan kekhawatiran inflasi metrik yang disebut
  topik ini).
