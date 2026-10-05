# 2.10 Kerangka metrik DORA

## Gambaran umum dan motivasi

**[Metrik DORA](https://dora.dev/guides/dora-metrics/)** berasal dari program
[DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment,
upaya riset bertahun-tahun, yang kemudian diterbitkan sebagai buku
*Accelerate* oleh Nicole Forsgren, Jez Humble, dan Gene Kim, yang mensurvei
puluhan ribu profesional rekayasa untuk mencari praktik pengiriman
mana yang berkorelasi dengan kinerja organisasi. Hasilnya adalah empat
metrik, berpasangan dua-dua: frekuensi deployment dan lead time untuk perubahan
mengukur kecepatan; tingkat kegagalan perubahan dan waktu pemulihan dari deployment yang gagal,
sering disingkat menjadi mean time to recovery (MTTR), mengukur stabilitas. Temuan
riset yang membuat kerangka ini penting adalah bahwa performa elite
cepat dan stabil sekaligus, membalikkan anggapan
bahwa kecepatan dan keamanan saling dipertukarkan, dan temuan itu
masih menjadi contoh terjelas dalam buku ini tentang prinsip pemasangan pagar pengaman
topik 1.2: metrik kecepatan yang diberi insentif, dipasangkan dengan pagar pengaman
stabilitas, adalah yang benar-benar dilakukan organisasi berkinerja terbaik.

Buku ini membahas DORA paling akhir dalam bagian ini, dengan sengaja, bukan sebagai
kerangka pengorganisasi bagian. Penempatan itu bukan penolakan terhadap
riset tersebut, yang tetap benar-benar ketat dan layak dipakai. Ia mencerminkan
keterbatasan nyata yang spesifik: DORA mengukur seberapa cepat dan seberapa aman sebuah pipeline
bergerak, tetapi diam soal apa yang bergerak melalui pipeline itu. Tim dapat
mencatat angka DORA yang sangat baik sementara keluarannya yang sebenarnya diam-diam bergeser
ke pengerjaan ulang cacat atau telah membuat utang teknis dan pekerjaan keamanan kekurangan
kapasitas, pola yang justru dirancang untuk disingkap oleh Flow Framework pada topik 2.1 sampai 2.4
dan tidak dapat dilihat DORA. Pakai DORA sebagaimana topik ini
menyajikannya: ukuran acuan yang tervalidasi baik dan lebih sempit tentang mekanika pipeline,
bukan gambaran utuh kesehatan pengiriman.

Bagi tim besar, nilai sejati DORA yang tersisa adalah keterbandingan. Metrik
yang dihitung secara konsisten dari data pipeline dan insiden memungkinkan organisasi
membandingkan kemampuan pengiriman lintas banyak tim yang bekerja di domain berbeda
tanpa masalah apel-dengan-jeruk yang menghantui sebagian besar perbandingan lintas tim.
Organisasi perusahaan besar masih memakainya untuk memprioritaskan investasi platform;
organisasi pemerintahan masih memakainya untuk menunjukkan, dengan bukti,
bahwa program modernisasi terukur memperbaiki mekanika pengiriman. Perlakukan itu sebagai tugas
DORA yang semestinya dan terbatas, dan pakai topik-topik Flow
Framework sebelumnya dalam bagian ini untuk pertanyaan yang lebih luas tentang
apakah hal yang tepat memang dikirim.

## Prinsip utama

- **DORA mengukur pipeline, bukan nilai yang mengalir melaluinya.** Topik
  2.1 menyebut celah ini secara langsung; gunakan distribusi aliran (topik 2.3) untuk melihat
  apa yang tidak bisa dilihat DORA.
- **Kecepatan dan stabilitas diukur bersama-sama, tidak pernah terpisah.** Dasbor
  berbasis DORA tanpa kedua separuhnya sebenarnya tidak memakai
  kerangka itu.
- **Konsistensi definisi lebih penting daripada angka mentahnya.** Tim
  yang berpindah dari kinerja "sedang" ke "tinggi" pada metrik yang didefinisikan secara konsisten
  adalah sinyal nyata; membandingkan dua tim yang dihitung secara berbeda bukan.
- **DORA mengukur sistem, bukan individu.** Menerapkan metrik ini
  pada insinyur individu merusak dasar statistik kerangka itu dan
  mengundang persis manipulasi (gaming) yang diperingatkan topik 1.2.
- **Keempat metrik adalah proksi, bukan tujuan.** Mereka berkorelasi dengan
  kinerja organisasi; mengejar angkanya sendiri, terlepas dari perbaikan
  pengiriman yang sejati, menggagalkan tujuan kerangka ini.

## Rekomendasi

### Instrumentasikan frekuensi deployment dari pipeline, hanya menghitung rilis produksi

**Frekuensi deployment** mengukur seberapa sering tim berhasil merilis ke
produksi. Hitung hanya deployment produksi yang berhasil, diinstrumentasikan
otomatis dari data pipeline CI/CD, tidak pernah dilaporkan sendiri. Waspadai
secara khusus manipulasi substitusi, memecah satu perubahan bermakna menjadi
beberapa deploy sepele semata untuk menggelembungkan hitungan, dengan melacak ukuran
deploy bersama frekuensinya: ukuran rata-rata yang mengecil di samping hitungan yang naik
adalah tanda paling jelas bahwa hal ini sedang terjadi.

### Instrumentasikan lead time untuk perubahan dari commit pertama sampai produksi

**Lead time untuk perubahan** mengukur waktu dari commit pertama sebuah perubahan kode
sampai deployment suksesnya di produksi. Laporkan median
dan persentil tinggi, bukan hanya rata-rata, mengikuti panduan topik 1.6 tentang
data berbasis waktu yang miring, dan waspadai pergeseran definisi di kedua
ujung, yang memperindah angka tanpa perbaikan sejati.

### Definisikan tingkat kegagalan perubahan secara tertulis sebelum membandingkan antartim

**Tingkat kegagalan perubahan** mengukur persentase deployment yang menyebabkan
kegagalan yang membutuhkan perbaikan, rollback, hotfix, atau insiden. Ini
yang paling sulit didefinisikan secara konsisten dari keempatnya, karena "kegagalan" tidak
objektif dengan sendirinya. Sepakati definisi tertulis sebelum membandingkan
tim; tanpa itu, perbandingan yang tampak adil dapat sangat menyesatkan. Waspadai
perbaikan yang mencurigakan cepat tanpa perubahan proses yang mendasarinya,
tanda paling jelas manipulasi definisi, bukan kemajuan sejati.

### Ukur waktu pemulihan dari deteksi, bukan dari peristiwa deploy

**Waktu pemulihan dari deployment yang gagal** mengukur berapa lama waktu yang dibutuhkan untuk memulihkan
layanan setelah sebuah deployment menyebabkan kegagalan. Mulai jam dari deteksi,
bukan dari peristiwa deploy itu sendiri, agar angkanya mencerminkan penundaan
pemulihan yang sejati dan bukan celah pemantauan. Berinvestasilah pada kemampuan rollback otomatis
secara khusus, tuas paling umum untuk memperbaiki metrik ini secara
sejati, bukan dengan menyatakan insiden selesai sebelum waktunya.

### Gunakan metrik aliran, bukan DORA, untuk mendiagnosis mengapa sebuah angka bergerak

Ketika sebuah metrik DORA bergeser, keempat angka itu sendiri jarang menjelaskan mengapa. Gunakan
penguraian waktu siklus (topik 2.6), flow load (topik 2.4), dan distribusi
aliran (topik 2.3) sebagai lapisan diagnostik di bawah angka ringkasan DORA,
dan jangan pernah memakai metrik DORA dalam penilaian kinerja individu,
penyalahgunaan tunggal paling merusak yang dihadapi kerangka ini.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Kerangka DORA penuh, keempat metrik dipasangkan | Tervalidasi riset, tahan terhadap manipulasi lewat pemasangan, memungkinkan perbandingan lintas tim yang adil | Diam soal jenis nilai yang dikirim; membutuhkan Flow Framework di sampingnya untuk gambaran itu |
| DORA sebagai satu-satunya kumpulan metrik pengorganisasi bagian ini | Sederhana, familier bagi sebagian besar pemimpin rekayasa | Sama sekali melewatkan pertanyaan campuran nilai, alasan buku ini menurunkan prioritasnya di sini |
| DORA ditambah Flow Framework bersama-sama | Mekanika pipeline dan campuran nilai sama-sama terlihat | Membutuhkan pemeliharaan dua kosakata metrik, bukan satu |
| DORA diterapkan pada tingkat individu | Terasa langsung dapat ditindaklanjuti bagi sebagian manajer | Merusak validitas statistik kerangka; paparan kuat terhadap hukum Goodhart |

Ketegangan utamanya adalah **ketelitian mekanis versus keterbacaan bisnis**.
Keempat metrik DORA didefinisikan dengan tepat dan tervalidasi riset, yang
menjadikannya sangat baik untuk membandingkan kinerja pipeline antartim,
tetapi presisi yang sama itu cakupannya sempit pada pipeline itu sendiri dan tidak
mengatakan apa pun tentang apakah pekerjaan yang tepat mengalir melaluinya. Atasi
ketegangan ini dengan menjaga DORA sebagai lapisan acuan kesehatan pipeline, tempat
topik 2.10 yang semestinya dalam struktur buku ini, sambil memakai topik Flow Framework
sebelumnya dalam bagian ini untuk pertanyaan berhadapan-bisnis tentang campuran
nilai, alih-alih berusaha membuat DORA menjawab pertanyaan yang tak pernah
dirancang untuk dijawabnya.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita menginstrumentasikan keempat metrik DORA dari pipeline, atau apakah
   sebagian berupa estimasi yang dilaporkan sendiri?** Kerangka yang dibangun di atas pengukuran
   objektif dan tervalidasi riset kehilangan banyak nilainya begitu
   sebuah angka menjadi tebakan terbaik. Audit sumber data aktual setiap metrik
   (topik 1.5).

2. **Apakah semua tim yang kita bandingkan memakai metrik DORA memiliki
   definisi deployment, perubahan, dan kegagalan yang sama?** Perbandingan antartim
   yang memakai definisi berbeda sebenarnya bukan perbandingan, dan dapat
   menghasilkan penilaian yang tidak adil tentang kinerja relatif.

3. **Pernahkah seseorang di organisasi kita memakai metrik DORA dalam penilaian
   kinerja individu, secara formal atau informal?** Ini penyalahgunaan kerangka
   yang paling merusak dan sering terjadi diam-diam. Tanyakan
   langsung dan bersiaplah untuk jawaban yang tidak nyaman tetapi perlu.

4. **Mungkinkah angka DORA kita sangat baik sementara distribusi aliran kita
   (topik 2.3) diam-diam bergeser ke arah pengerjaan ulang atau menjauh dari fitur?**
   Inilah celah yang tidak bisa dilihat DORA sendirian. Tarik kedua kumpulan
   angka itu bersama dan periksa apakah keduanya bercerita secara konsisten.

5. **Ketika salah satu metrik DORA kita bergerak, apakah kita punya diagnostik
   metrik aliran untuk menjelaskan mengapa?** Angka DORA saja memberi tahu bahwa
   sesuatu berubah, bukan apa. Periksa apakah tim Anda dapat menjawab "mengapa
   lead time naik bulan ini" dengan data, atau hanya dengan spekulasi.

6. **Bagaimana keempat angka DORA kita akan berubah jika kita sengaja mencoba
   memanipulasi masing-masing, dan apakah kita akan menyadarinya?** Telusuri frekuensi deployment,
   lead time, tingkat kegagalan perubahan, dan waktu pemulihan satu per satu, penerapan
   praktis disiplin inti topik 1.2 pada kerangka spesifik ini.

## Lensa sektor

**Startup.** Metrik kecepatan DORA biasanya datang alami bagi tim kecil
yang sudah sering melakukan deploy; disiplin yang lebih sulit adalah menginstrumentasikan tingkat
kegagalan perubahan dan waktu pemulihan dengan jujur alih-alih mengasumsikan stabilitas
karena belum ada yang rusak parah. Memasangkan DORA dengan pemisahan item aliran informal sekalipun
(topik 2.2) sejak dini menghindari terbangunnya rasa palsu tentang
kesehatan pengiriman hanya dari kecepatan pipeline.

**Usaha kecil.** Sebagian besar platform CI/CD dan kendali versi modern mengekspor
data frekuensi deployment dan lead time dengan penyiapan minimal; menautkan deploy
ke insiden untuk tingkat kegagalan perubahan biasanya membutuhkan usaha manual lebih besar.
Mulailah dengan dua metrik kecepatan dan tambahkan pelacakan stabilitas begitu
ada catatan insiden informal untuk ditautkan.

**Perusahaan besar.** Nilai terbesar DORA yang tersisa pada skala ini adalah perbandingan lintas tim
yang adil dan konsisten untuk keputusan investasi platform.
Standarkan definisi di seluruh organisasi (topik 1.4), otomatiskan
instrumentasi secara terpusat, dan pasangkan setiap laporan DORA dengan tampilan distribusi
aliran agar pimpinan melihat kecepatan pipeline dan campuran nilai
bersama-sama, tidak yang satu tanpa yang lain.

**Pemerintahan.** Metrik DORA tetap memberi program modernisasi cara yang dapat dipertahankan
dan berbasis riset untuk menunjukkan perbaikan mekanika pengiriman
kepada badan pengawas. Laporkan keempat metrik bersama-sama, jangan pernah
memilih separuh yang menguntungkan, dan pasangkan dengan distribusi aliran
agar laporan itu juga menjawab pertanyaan yang lebih sulit dan lebih penting tentang apa yang
sebenarnya dikirim oleh pipeline yang lebih cepat itu.

## Contoh

**Perusahaan besar.** Program modernisasi platform sebuah perusahaan telekomunikasi besar
menginstrumentasikan keempat metrik DORA secara konsisten di empat puluh
tim produk dan menunjukkan pergerakan sejati dari pita kinerja rendah ke
pita kinerja tinggi selama delapan belas bulan, frekuensi deployment naik
kira-kira sepuluh kali lipat, lead time turun dari hitungan minggu ke hari, tingkat kegagalan perubahan
tetap datar. Seorang anggota dewan, saat meninjau presentasi, mengajukan pertanyaan yang
tidak bisa dijawab angka DORA sendirian: berapa banyak dari pengiriman yang lebih cepat itu
berupa nilai pelanggan baru dibanding pengerjaan ulang. Organisasi rekayasa itu tidak punya
jawaban sampai mengadopsi klasifikasi item aliran pada kuartal berikutnya,
yang menunjukkan pekerjaan fitur justru menurun sebagai bagian dari total keluaran
meskipun angka kecepatan DORA membaik, temuan yang membentuk ulang
prioritas program tahun berikutnya.

**Pemerintahan.** Kantor modernisasi TI sebuah pemerintah negara bagian mengadopsi metrik DORA
sebagai syarat kontrak untuk membandingkan kemampuan pengiriman
beberapa tim vendor yang bersaing, pemanfaatan keterbandingan kerangka itu secara efektif.
Frekuensi deployment tinggi milik satu vendor terungkap, setelah
tingkat kegagalan perubahan diwajibkan di sampingnya, berkorelasi dengan tingkat
kegagalan hampir tiga kali lebih tinggi daripada rekan-rekannya, informasi yang langsung
mendasari keputusan kantor itu soal perpanjangan kontrak. Kantor itu kemudian menambahkan
persyaratan distribusi aliran ke kontrak yang sama setelah menemukan bahwa
vendor dengan angka DORA terbaik juga yang menghabiskan porsi kapasitas
terkecil untuk pekerjaan perbaikan keamanan yang secara khusus diwajibkan kontrak.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengadopsi DORA dengan baik, dalam cakupannya yang semestinya, adalah jawaban
yang dapat dipertahankan dan berbasis bukti untuk "apakah pipeline pengiriman kita makin cepat dan
makin aman," yang tetap menjadi salah satu pertanyaan rekayasa yang lebih mudah dijawab dengan
yakin. Jawaban itu membenarkan investasi platform dan perkakas
dengan angka nyata, dan memungkinkan pimpinan membandingkan investasi yang bersaing
secara adil dan konsisten, sebagaimana selama ini.

Total biaya kepemilikan adalah pekerjaan integrasi yang menautkan peristiwa deploy
ke catatan insiden untuk tingkat kegagalan perubahan dan waktu pemulihan, tidak sepele
di lanskap perkakas yang besar dan heterogen. Biaya tambahan
memasangkan DORA dengan topik Flow Framework sebelumnya dalam bagian ini relatif
kecil, karena klasifikasi item aliran adalah konvensi pelaporan yang ditumpangkan pada pekerjaan yang ada,
bukan sistem pengukuran paralel, dan imbal hasilnya, menangkap persis titik buta campuran nilai
yang diilustrasikan contoh telekomunikasi di atas, sangat sepadan dengan investasi tambahan yang sederhana itu.

## Anti-pola dan jebakan

- **Memperlakukan DORA sebagai gambaran utuh kesehatan pengiriman:** vektor manipulasi (gaming)
  yang hendak dilawan oleh penempatan topik ini. Organisasi
  dapat menyajikan angka DORA yang benar-benar sangat baik, deployment yang cepat, sering, dan stabil,
  sementara nilai yang sebenarnya dikirimnya diam-diam bergeser ke
  pengerjaan ulang atau menjauh dari fitur, dan keempat metrik DORA saja tidak akan pernah
  menyingkap pergeseran itu karena tak pernah dirancang untuk mengukurnya. Pagar
  pengamannya (guardrail) adalah memasangkan setiap laporan DORA dengan distribusi aliran (topik
  2.3), agar pipeline yang cepat dan stabil yang mengirim campuran pekerjaan yang keliru terlihat
  alih-alih disangka kesehatan pengiriman yang sejati.
- **Melaporkan hanya separuh kecepatan dari DORA:** menggagalkan temuan
  utama kerangka ini bahwa kecepatan dan stabilitas bergerak bersama pada
  performa tinggi.
- **Memakai metrik DORA dalam penilaian kinerja individu:** merusak
  validitas statistik kerangka dan mengundang manipulasi yang kuat.
- **Membandingkan tim dengan definisi yang tidak konsisten:** menghasilkan perbandingan
  yang tampak adil tetapi tidak.
- **Angka DORA yang dilaporkan sendiri alih-alih yang diinstrumentasikan dari pipeline:**
  menimbulkan persis bias yang dirancang kerangka ini untuk dihilangkan.
- **Memperlakukan DORA sebagai diagnostik, bukan ringkasan:** membuat tim tidak mampu
  menjelaskan mengapa sebuah angka bergerak tanpa lapisan metrik aliran di bawahnya.

## Model kematangan

- **Level 1, Initiate:** Metrik DORA, jika dilacak sama sekali, dilaporkan sendiri,
  didefinisikan secara tidak konsisten, dan tidak pernah dipasangkan dengan data aliran.
- **Level 2, Develop:** Beberapa tim menginstrumentasikan DORA dari pipeline, tetapi
  definisinya beragam dan tidak ada padanan distribusi aliran untuk memeriksanya.
- **Level 3, Standardize:** Keempat metrik DORA diinstrumentasikan
  secara konsisten dari data pipeline dan insiden, dengan definisi bersama,
  dan rutin ditampilkan bersama distribusi aliran.
- **Level 4, Manage:** DORA dan metrik aliran ditinjau bersama sebagai
  pasangan standar di setiap tingkat organisasi, dan DORA tidak pernah
  dipakai untuk evaluasi individu.
- **Level 5, Orchestrate:** Organisasi dapat menunjuk kasus-kasus spesifik
  ketika distribusi aliran menangkap masalah campuran nilai yang disembunyikan angka
  DORA yang sangat baik, dan memakai kedua kerangka secara sengaja untuk
  pertanyaan berbeda yang dijawab masing-masing.

## Gagasan untuk diskusi

1. Di mana keempat metrik DORA kita saat ini menempatkan kita pada spektrum tingkat kinerja, secara jujur?
2. Mungkinkah angka DORA kita tampak sangat baik sementara distribusi aliran kita diam-diam bergeser? Pernahkah kita memeriksanya?
3. Pernahkah seseorang memakai angka DORA untuk menilai individu, bahkan secara informal?
4. Jika pesaing menerbitkan angka DORA-nya, apakah angka kita akan unggul, dan apakah perbandingan itu benar-benar memberi tahu siapa yang mengirim lebih banyak nilai nyata?

## Poin-poin utama

- Keempat metrik DORA, **frekuensi deployment, lead time, tingkat kegagalan
  perubahan, dan waktu pemulihan**, memasangkan kecepatan dengan stabilitas secara desain dan tetap
  benar-benar tervalidasi riset.
- Buku ini menempatkan DORA **paling akhir dalam bagian ini** karena ia mengukur
  pipeline, bukan nilai yang mengalir melaluinya; pasangkan dengan distribusi
  aliran (topik 2.3) untuk gambaran yang lebih utuh.
- Vektor manipulasi (gaming) utama topik ini adalah **menyangka angka DORA yang sangat baik
  sebagai kesehatan pengiriman yang lengkap**; pagar pengamannya adalah selalu melaporkan DORA
  bersama distribusi aliran.
- **Jangan pernah memakai metrik DORA dalam penilaian kinerja individu**; validitas
  kerangka ini bergantung pada pengukuran tingkat sistem, bukan individu.
- Gunakan **metrik aliran sebagai lapisan diagnostik** di bawah angka ringkasan
  DORA ketika salah satunya bergerak.

## Referensi dan bacaan lanjutan

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme.
  [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
