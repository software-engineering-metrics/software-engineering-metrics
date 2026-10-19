# 2.7 Teori antrean

## Gambaran umum dan motivasi

**[Teori antrean](https://en.wikipedia.org/wiki/Queueing_theory)** adalah
kajian matematis tentang barisan tunggu. Kedengarannya aneh untuk sebuah buku
tentang metrik rekayasa perangkat lunak, sampai Anda menyadari betapa banyak bagian
pipeline pengiriman yang sebenarnya adalah antrean: pull request yang menunggu reviewer,
commit yang menunggu runner CI, tiket yang menunggu diambil, pesan dukungan
pelanggan yang menunggu balasan. Topik 2.4 sudah memperkenalkan flow
load dan flow time serta menunjukkan bahwa membebani aliran nilai secara berlebihan membuat
pengiriman melambat tajam, dan topik 2.5 dan 2.6 menunjukkan bahwa sebagian besar
waktu pengiriman adalah waktu tunggu, bukan waktu kerja. Teori antrean adalah
matematika dasar yang menjelaskan mengapa semua itu benar, bukan sekadar pola
yang diamati.

Hasil yang paling berguna adalah **[hukum Little](https://en.wikipedia.org/wiki/Little%27s_law)**,
teorema yang dibuktikan oleh periset operasi John Little pada 1961: jumlah
rata-rata item dalam sistem yang stabil sama dengan laju kedatangan rata-rata
item, dikalikan waktu rata-rata yang dihabiskan setiap item dalam
sistem. Topik 2.4 sudah memakai hasil ini dengan istilah Flow Framework sendiri,
flow load sama dengan laju kedatangan dikali flow time. Dalam kosakata buku ini
yang lebih luas, ia juga terbaca sebagai pekerjaan yang sedang berjalan (topik 2.5) sama dengan
laju kedatangan pekerjaan baru dikali waktu siklus (topik 2.6). Ini
bukan aturan praktis atau korelasi yang teramati dalam beberapa studi. Ini adalah
bukti yang berlaku untuk setiap antrean yang stabil, apa pun yang diproses antrean itu
atau bagaimana ia memutuskan apa yang dikerjakan berikutnya.

Bagi tim besar, keumuman itulah intinya. Hukum Little memberi Anda
pemeriksaan kewajaran yang bekerja sama baiknya entah antrean itu papan kanban,
message broker, atau pipeline CI bersama. Jika pekerjaan yang sedang berjalan, laju kedatangan,
dan waktu siklus yang Anda ukur tidak kurang lebih memenuhi persamaan itu, salah satu
dari ketiga angka Anda keliru, biasanya karena definisi yang tidak konsisten
tentang apa yang dihitung sebagai "sedang berjalan" atau "datang." Organisasi perusahaan besar dan pemerintahan
menjalankan puluhan antrean semacam itu sekaligus, kumpulan reviewer bersama,
lingkungan uji bersama, dewan persetujuan bersama, dan hukum Little adalah
alat termurah yang tersedia untuk menangkap definisi metrik yang buruk sebelum ia
mendorong keputusan staf atau proses yang buruk.

## Prinsip utama

- **Hukum Little adalah bukti, bukan heuristik.** Pekerjaan yang sedang berjalan sama dengan
  laju kedatangan dikali waktu siklus, untuk setiap antrean yang stabil, dan itu adalah pemeriksaan cepat
  apakah metrik pengiriman Anda konsisten secara internal.
- **Utilisasi tidak berskala linear terhadap waktu tunggu.** Ketika sumber daya bersama
  mendekati utilisasi penuh, penundaan antrean tumbuh tajam, bukan
  bertahap. Sumber daya yang sibuk 95% sering menunggu berkali-kali
  lebih lama daripada yang sibuk 80%, bukan sekadar "sedikit lebih buruk."
- **Rata-rata sebuah antrean menyembunyikan kasus terburuknya.** Melaporkan hanya rata-rata waktu
  tunggu menutupi ekor yang panjang dan menyakitkan di dekat kapasitas penuh, persis seperti yang diperingatkan topik
  1.6 ketika menganjurkan persentil sebagai ganti rata-rata.
- **Cara antrean didefinisikan bisa dimanipulasi (gaming) semudah metrik lain.**
  Apakah sesuatu dihitung "datang," "sedang berjalan," atau "terlayani" adalah
  sebuah pilihan, dan ia dapat disetel untuk memperindah dasbor tanpa mengubah apa
  yang sebenarnya terjadi pada pekerjaan.
- **Pipeline biasanya adalah antrean dari antrean.** Pipeline pengiriman merangkai
  beberapa tahap, dan tahap paling lambat menentukan laju seluruh
  rantai, secepat apa pun tahap lainnya.

## Rekomendasi

### Gunakan hukum Little untuk memeriksa angka Anda sendiri sebelum memercayainya

Ambil rata-rata pekerjaan yang sedang berjalan yang diukur pada tim Anda, rata-rata laju kedatangan
item baru per minggu, dan rata-rata waktu siklusnya, lalu periksa apakah pekerjaan
yang sedang berjalan kurang lebih sama dengan laju kedatangan dikali waktu siklus. Ketika
tidak, jangan berasumsi teorinya yang salah. Cari penyebab sebenarnya: batas
tahap yang dihitung secara tidak konsisten, pekerjaan yang berstatus "terblokir" tetapi
masih dihitung sebagai sedang berjalan, atau laju kedatangan yang diukur pada
jendela waktu berbeda dari waktu siklus. Satu pemeriksaan ini menangkap lebih banyak instrumentasi
yang buruk daripada cara lain mana pun yang ditemukan kebanyakan tim.

### Lacak utilisasi secara langsung untuk setiap sumber daya bersama yang dibatasi kapasitas

Identifikasi sumber daya yang dipakai bersama oleh banyak tim dalam pipeline pengiriman Anda, yaitu
kumpulan reviewer, klaster CI, lingkungan staging, dan ukur seberapa sibuk
masing-masing sebagai proporsi kapasitas yang tersedia, sebelum Anda berencana
menjalankannya mendekati batasnya. Kelompok reviewer bersama yang berjalan mendekati kapasitas penuh
menghasilkan waktu tunggu antrean tinjauan yang tumbuh jauh lebih cepat daripada
kenaikan permintaan sederhana yang menyebabkannya, persis dinamika di balik saran topik
2.9 untuk memantau waktu sampai tinjauan pertama sebagai indikator awal.

### Pisahkan laju kedatangan, laju keberhasilan, laju kegagalan, dan laju lompatan

Tahan godaan melebur semua yang keluar dari antrean menjadi satu angka "throughput"
atau "laju layanan." Lacak empat hal secara terpisah: seberapa cepat pekerjaan
datang, berapa banyak yang selesai dengan sukses, berapa banyak yang gagal dan perlu
dikerjakan ulang, dan berapa banyak yang ditinggalkan atau diam-diam dibuang sebelum ada yang
menyelesaikannya. Pipeline yang tampak cepat karena laju lompatannya (skip rate) diam-diam
naik sebenarnya tidak mengirim lebih banyak, dan hanya melacak keempat
laju ini secara terpisah yang akan menunjukkannya kepada Anda.

### Modelkan pipeline multitahap sebagai antrean dari antrean

Perlakukan pipeline pengiriman, atau proses multitahap apa pun, siklus hidup insiden,
alur perekrutan, sebagai rantai antrean dan bukan satu gumpalan "waktu" yang
tak terbedakan. Laju kedatangan keseluruhan ditentukan tahap pertama, laju
penyelesaian keseluruhan oleh tahap terakhir, dan total galat serta lompatan pipeline
adalah jumlah milik setiap tahap. Kerangka ini langsung memberi tahu tahap mana yang layak
diinvestasikan: tahap dengan kombinasi terburuk antara utilisasi tinggi dan laju kegagalan atau
lompatan tinggi, bukan tahap yang kebetulan paling mudah diinstrumentasikan.

### Tetapkan batas staf dan WIP dengan memperhatikan utilisasi, bukan hanya throughput

Ketika Anda memutuskan berapa banyak reviewer atau runner CI yang dibutuhkan sebuah tim, jangan
menyesuaikan kapasitas persis dengan rata-rata laju kedatangan. Antrean yang berjalan pada utilisasi
100% secara rata-rata praktis memiliki waktu tunggu tak terhingga,
karena kedatangan nyata tidak merata, tidak mulus sempurna. Rencanakan
ruang longgar secara sengaja, dan perlakukan "reviewer kami hampir selalu sibuk" sebagai
tanda peringatan tentang waktu tunggu yang akan datang, bukan bukti pengelolaan
sumber daya yang efisien.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa model antrean formal, penentuan staf berdasarkan firasat | Cepat dimulai; tidak ada kosakata baru bagi tim | Secara konsisten meremehkan betapa waktu tunggu meledak mendekati kapasitas penuh |
| Hukum Little sebagai pemeriksaan kewajaran pada metrik yang ada | Murah, tanpa perkakas baru, menangkap definisi buruk dengan cepat | Hanya memeriksa konsistensi, tidak dengan sendirinya mendiagnosis penyebab |
| Simulasi antrean penuh (distribusi kedatangan, banyak server) | Prediksi paling akurat tentang perilaku waktu tunggu di bawah beban | Membutuhkan keahlian statistik nyata dan pemeliharaan yang tak akan dipertahankan kebanyakan tim |
| Pelacakan utilisasi pada sumber daya bersama tanpa pemodelan lebih dalam | Sederhana, dapat ditindaklanjuti, menangkap penyebab terbesar waktu tunggu yang membengkak | Tidak mengatakan apa pun tentang mengapa utilisasi tinggi atau apa yang dilakukan terhadap penyebab dasarnya |

Ketegangan utamanya adalah **ketelitian versus adopsi**. Simulasi antrean penuh
memberi jawaban paling akurat, tetapi hampir tidak ada tim rekayasa yang akan
membangun dan memeliharanya, dan model yang tak dipercaya atau tak diperbarui siapa pun lebih buruk
daripada tanpa model. Hukum Little dan pelacakan utilisasi dasar mengorbankan sebagian
presisi tetapi tidak membutuhkan keahlian statistik khusus dan langsung cocok
dengan metrik yang sudah dikumpulkan tim untuk topik 2.4 sampai 2.6. Jadikan
pemeriksaan murah yang mudah diadopsi itu sebagai default, dan sisihkan simulasi penuh untuk kasus
langka ketika satu sumber daya bersama, armada CI besar, kumpulan reviewer
khusus, cukup mahal untuk membenarkan investasinya.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah pekerjaan yang sedang berjalan, laju kedatangan, dan waktu siklus yang kita ukur benar-benar
   memenuhi hukum Little, dan jika tidak, mengapa?** Ini adalah diagnostik
   tercepat yang tersedia untuk definisi metrik yang buruk. Telusuri
   angka sebenarnya bersama-sama, dan jika persamaan itu tidak kurang lebih berlaku,
   lacak ketidakcocokannya ke inkonsistensi definisi yang spesifik alih-alih
   menepis pemeriksaan itu.

2. **Sumber daya bersama mana dalam pipeline pengiriman kita yang berjalan mendekati
   utilisasi penuh, dan apakah kita benar-benar tahu angka utilisasinya?**
   Kebanyakan tim bisa menyebut sumber daya yang "selalu terasa sibuk" tetapi tidak pernah
   mengukur utilisasinya secara langsung. Identifikasi dua atau tiga sumber daya bersama
   yang paling terbatas dan dapatkan angka nyata untuk masing-masing.

3. **Apakah kita meleburkan keberhasilan, kegagalan, dan lompatan menjadi satu angka throughput,
   dan apa yang akan kita lihat jika kita memisahkannya?** Satu hitungan "item
   selesai" bisa naik bahkan ketika kualitas turun atau pekerjaan diam-diam
   ditinggalkan. Hitung ulang throughput periode terbaru sebagai tiga angka terpisah
   dan diskusikan apa yang diungkap pemisahan itu yang disembunyikan angka gabungan.

4. **Di mana dalam pipeline kita letak hambatan sejati, yaitu tahap paling lambat yang
   menentukan laju segala sesuatu di hilirnya?** Tim sering berinvestasi untuk
   mempercepat tahap yang paling mudah diperbaiki, bukan tahap yang
   benar-benar membatasi throughput total. Identifikasi tahap dengan
   kombinasi terburuk antara utilisasi tinggi dan laju kegagalan atau lompatan tinggi.

5. **Jika kita menambah kapasitas pada sumber daya bersama kita yang paling terbatas, apakah
   waktu tunggu benar-benar membaik, atau permintaan sekadar membesar mengisinya?**
   Pertanyaan ini memisahkan kekurangan kapasitas sejati dari masalah permintaan,
   dan jawabannya menentukan apakah perbaikan yang tepat adalah menambah personel,
   batas WIP, atau perubahan cara pekerjaan diprioritaskan sebelum masuk ke
   antrean.

6. **Pernahkah kita mendefinisikan ulang apa yang dihitung sebagai "sedang berjalan" atau "datang"
   dengan cara yang membuat dasbor tampak lebih baik tanpa mengubah apa yang sebenarnya
   terjadi pada pekerjaan?** Ini layak ditanyakan dengan jujur dan spesifik,
   dengan contoh nyata dari setahun terakhir, bukan diperlakukan sebagai
   kekhawatiran hipotetis.

## Lensa sektor

**Startup.** Dengan segelintir insinyur, kebanyakan antrean cukup pendek sehingga
analisis antrean formal berlebihan. Kebiasaan yang berguna lebih kecil: sadari
ketika satu orang, sering kali insinyur paling senior, telah menjadi sumber daya
bersama de facto yang ditunggu semua hal lain, dan perlakukan itu sebagai masalah
utilisasi yang layak disebut meski tanpa model formal di baliknya.

**Usaha kecil.** Tim usaha kecil jarang membutuhkan sesuatu yang lebih canggih
daripada melacak utilisasi pada satu atau dua sumber daya yang benar-benar dipakai bersama,
sering kali satu reviewer atau satu pipeline deploy, dan mengamati titik ketika
"biasanya tersedia" diam-diam menjadi "biasanya hambatan." Lembar kerja sudah cukup;
perkakas khusus tidak perlu pada skala ini.

**Perusahaan besar.** Sumber daya bersama berlipat ganda dengan cepat pada skala perusahaan besar: tim
platform pusat, dewan tinjauan keamanan bersama, armada CI bersama
yang melayani puluhan tim produk. Inilah sumber daya yang membuat pelacakan
utilisasi terbayar, karena satu sumber daya bersama yang kelebihan beban dapat
diam-diam menurunkan waktu pengiriman setiap tim yang bergantung padanya,
dan metrik tiap tim sendiri tidak akan menyingkap penyebab yang berada
di luar pipeline mereka.

**Pemerintahan.** Program pengiriman lintas lembaga dan lintas vendor sering
menyalurkan pekerjaan melalui dewan persetujuan bersama, proses akreditasi keamanan bersama,
dan lingkungan uji bersama yang tidak dikendalikan satu tim pun atau
tidak dapat mereka ubah ukurannya sendiri. Analisis antrean atas gerbang bersama ini, laju
kedatangan, kapasitas, utilisasi, sering menjadi bukti paling jelas
untuk kasus bisnis menambah kapasitas atau mengubah cara pekerjaan dikelompokkan sebelum
mencapai gerbang.

## Contoh

**Perusahaan besar.** Tim platform internal sebuah penyedia infrastruktur cloud
melihat bahwa lead time untuk perubahan (topik 2.10) merayap naik di
setiap tim produk yang bergantung pada armada CI bersamanya, meskipun tidak ada
tim yang mengubah cara kerjanya. Analisis utilisasi menemukan armada itu
berjalan di atas 90% sibuk selama jam inti, jauh melewati titik
ketika teori antrean memprediksi waktu tunggu tumbuh tajam, bukan
bertahap. Tim platform menambah kapasitas CI dan memperkenalkan kebijakan
penjadwalan berbagi adil agar lonjakan aktivitas satu tim tidak dapat memonopoli
antrean. Median waktu tunggu CI turun lebih dari separuh dalam sebulan,
bukti bahwa hambatannya selama ini adalah antrean bersama yang tak terlihat.

**Pemerintahan.** Tim layanan digital sebuah lembaga perizinan nasional melacak
pemrosesan permohonan sebagai satu angka throughput "kasus selesai per minggu"
selama dua tahun, dan angka itu tampak stabil. Analisis lebih dekat,
yang memisahkan angka itu menjadi kasus disetujui, ditolak, dan ditinggalkan oleh
pemohon setelah penundaan panjang, menemukan laju peninggalan hampir tiga kali lipat
pada periode yang sama sementara persetujuan stagnan. Hukum Little, diterapkan pada
antrean petugas kasus, menunjukkan pekerjaan yang sedang berjalan telah tumbuh jauh melampaui apa yang
disiratkan waktu pemrosesan rata-rata yang dinyatakan tim, artinya kasus diam-diam
menumpuk dalam status yang tidak dihitung sebagai "menunggu." Lembaga itu menyusun ulang
definisi pelacakan kasusnya untuk menghitung setiap kasus terbuka dengan jujur dan menambah
kapasitas petugas kasus yang ditakar agar utilisasi tetap di bawah 85%, kini dilacak sebagai
target operasional tetap di samping angka throughput.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari menerapkan analisis antrean dasar adalah ia mengubah "pipeline
terasa lambat" menjadi keputusan yang spesifik dan dapat dipertahankan, tambahkan ruang longgar pada
sumber daya bersama ini, pecah metrik gabungan ini menjadi komponen sebenarnya,
alih-alih dorongan samar untuk "bekerja lebih cepat" yang meleset dari penyebab sebenarnya.
Contoh infrastruktur cloud di atas, waktu tunggu yang separuh berkat perbaikan kapasitas
dan penjadwalan, bukan perubahan perilaku tim-tim individual,
adalah pola yang secara andal dihasilkan analisis ini: perbaikannya hampir selalu
lebih murah daripada meminta setiap tim hilir bergerak lebih cepat mengitari
hambatan yang tidak bisa mereka lihat.

Total biaya adopsinya benar-benar rendah. Hukum Little dan pelacakan utilisasi
tidak membutuhkan perkakas baru di luar yang sudah diminta topik 2.4 sampai 2.6 untuk
Anda kumpulkan: laju kedatangan, pekerjaan yang sedang berjalan, dan waktu siklus. Investasinya
sebagian besar adalah disiplin analitis, memeriksa angka-angka itu satu sama lain dan
meninjau utilisasi sumber daya bersama secara berkala sebelum ia menjadi
kemunduran lead time tak terjelaskan berikutnya di organisasi.

## Anti-pola dan jebakan

- **Menyesuaikan kapasitas sumber daya bersama persis dengan rata-rata laju kedatangannya:**
  menjamin utilisasi tinggi dan waktu tunggu yang membengkak setiap kali
  permintaan tidak merata, bahkan sebentar saja.
- **Melaporkan hanya rata-rata waktu tunggu, tidak pernah persentil:** menyembunyikan ekor
  panjang yang paling penting bagi orang-orang yang menunggu di dalamnya.
- **Meleburkan keberhasilan, kegagalan, dan lompatan menjadi satu angka throughput:**
  vektor manipulasi (gaming) yang menjadi inti topik ini. Tim yang berada di bawah tekanan dapat
  membuat throughput tampak sehat dengan diam-diam membiarkan laju lompatan naik,
  tiket yang ditinggalkan, permintaan yang diam-diam dibuang, pekerjaan yang tak pernah
  dihitung sebagai kegagalan. Pagar pengaman (guardrail)-nya adalah melacak laju kedatangan, keberhasilan,
  kegagalan, dan lompatan sebagai empat angka terpisah yang terlihat, disiplin yang sama
  yang diminta topik 1.2 untuk setiap metrik dalam buku ini, agar
  laju lompatan yang naik tidak bisa bersembunyi di balik grafik throughput yang datar.
- **Menganggap "orang-orang kami selalu sibuk" sebagai pujian:** itu adalah
  gejala utilisasi tinggi, penyebab utama waktu tunggu yang panjang dan tak terduga.
- **Mendefinisikan ulang "sedang berjalan" untuk diam-diam mengecilkan pekerjaan yang sedang berjalan:** memindahkan
  pekerjaan ke status yang tak dihitung, "terblokir," "ditahan," tanpa mengubah berapa
  lama penyelesaiannya, dan merusak pemeriksaan hukum Little yang
  seharusnya menangkapnya.
- **Mengasumsikan model antrean tidak butuh pemeliharaan setelah dibangun:** pola
  kedatangan dan kapasitas terus berubah, dan model yang basi menghasilkan
  prediksi yang salah dengan penuh percaya diri.

## Model kematangan

- **Level 1, Initiate:** Tidak ada antrean yang diukur secara eksplisit; waktu tunggu
  dibahas secara anekdotal sebagai "terasa lambat."
- **Level 2, Develop:** Laju kedatangan, pekerjaan yang sedang berjalan, dan waktu siklus
  dilacak untuk setidaknya satu pipeline, tetapi tidak pernah diperiksa terhadap hukum
  Little atau terhadap utilisasi pada sumber daya bersama.
- **Level 3, Standardize:** Hukum Little adalah pemeriksaan konsistensi rutin
  di seluruh pipeline pengiriman, dan utilisasi dilacak secara eksplisit untuk
  sumber daya bersama yang paling signifikan.
- **Level 4, Manage:** Laju keberhasilan, kegagalan, dan lompatan dilacak
  secara terpisah untuk setiap antrean signifikan, dan keputusan kapasitas memakai
  target utilisasi, bukan hanya rata-rata permintaan.
- **Level 5, Orchestrate:** Organisasi memodelkan pipeline utamanya sebagai
  antrean dari antrean, mengidentifikasi hambatan sejati secara sistematis, dan dapat
  menunjuk perubahan kapasitas atau proses spesifik yang dibuat karena analisis
  antrean, dengan perbaikan waktu tunggu terukur sebagai buktinya.

## Gagasan untuk diskusi

1. Pilih satu pipeline pengiriman kita dan periksa apakah angkanya memenuhi hukum Little hari ini.
2. Sebutkan satu sumber daya bersama di organisasi kita yang kebanyakan orang sepakati "selalu sibuk," dan temukan angka utilisasi sebenarnya.
3. Seperti apa grafik throughput kita jika dipisah menjadi laju keberhasilan, kegagalan, dan lompatan untuk kuartal terakhir?
4. Jika kita harus menambah kapasitas pada tepat satu sumber daya bersama tahun ini, yang mana, dan bukti apa yang membenarkannya?

## Poin-poin utama

- **Hukum Little**, pekerjaan yang sedang berjalan sama dengan laju kedatangan dikali waktu siklus,
  adalah bukti, bukan heuristik, dan merupakan pemeriksaan termurah yang tersedia
  atas konsistensi internal metrik pengiriman Anda.
- **Waktu tunggu tumbuh tajam, bukan bertahap, ketika utilisasi mendekati kapasitas
  penuh.** Perlakukan "selalu sibuk" sebagai tanda peringatan, bukan pujian.
- Lacak **laju kedatangan, laju keberhasilan, laju kegagalan, dan laju lompatan**
  secara terpisah; meleburkannya menjadi satu angka throughput adalah vektor manipulasi (gaming)
  utama topik ini.
- Modelkan pipeline multitahap sebagai **antrean dari antrean**, dan berinvestasilah pada
  tahap dengan kombinasi terburuk antara utilisasi tinggi dan laju kegagalan atau
  lompatan tinggi, bukan tahap yang paling mudah diperbaiki.
- Pilih pemeriksaan murah yang mudah diadopsi, **hukum Little dan pelacakan
  utilisasi**, daripada simulasi antrean penuh yang jarang dipertahankan tim.

## Referensi dan bacaan lanjutan

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*.
  Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and
  Solve Performance Problems on the Computer Systems You Work With*.
  CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
