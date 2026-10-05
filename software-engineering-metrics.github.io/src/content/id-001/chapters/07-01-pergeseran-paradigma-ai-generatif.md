# 7.1 Pergeseran paradigma AI generatif

## Gambaran umum dan motivasi

Sepanjang sebagian besar sejarah rekayasa perangkat lunak, menulis kode cukup
lambat dan menuntut usaha sehingga volume keluaran mentah, yakni baris yang
ditulis, commit yang dibuat, fitur yang dirilis, berkorelasi setidaknya secara
longgar dengan usaha nyata dan, secara tidak sempurna, dengan nilai nyata.
Korelasi itu tidak pernah sempurna (topik 3.4 mengabdikan satu topik penuh untuk
menjelaskan mengapa metrik aktivitas menyesatkan bahkan di dunia sebelum AI),
tetapi cukup kuat sehingga banyak organisasi membangun program metrik dengan
asumsi tersirat bahwa lebih banyak kode yang dihasilkan umumnya berarti lebih
banyak pekerjaan yang selesai. Asisten pemrograman [AI generatif](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
telah mematahkan asumsi itu secara tegas: sebuah perangkat kini dapat
menghasilkan volume kode yang besar dan tampak meyakinkan dalam hitungan detik,
dengan biaya sebagian kecil dari sebelumnya, dan volume itu hampir tidak memberi
tahu apa-apa dengan sendirinya tentang apakah kode yang dihasilkan berfungsi,
mudah dipelihara, atau melayani tujuan nyata.

Klaim inti topik ini adalah bahwa ini merupakan pergeseran paradigma, bukan
perubahan perangkat yang bertahap. Pergeseran paradigma mengubah apa yang
sebenarnya diukur oleh instrumen Anda yang ada, bukan hanya nilai yang
dilaporkannya. Speedometer tetap mengukur kecepatan setelah mesin mobil diganti;
beberapa metrik dalam buku ini tidak bertahan semulus itu melewati transisi ini.
Frekuensi deployment (topik 2.10) bisa naik karena AI mempercepat pekerjaan yang
benar-benar bernilai, atau karena AI membuat pembuatan banyak perubahan kecil
bernilai rendah menjadi sangat mudah; angka itu sendiri tidak lagi dapat
membedakan keduanya, padahal dulu sebagian besar bisa, dengan kehati-hatian yang
sesuai. Logika yang sama berlaku dengan daya yang lebih besar pada hitungan
commit mentah, baris kode, dan volume pull request, yang semuanya sudah
diperingatkan topik 3.4 sebagai metrik individual, kini diperbesar menjadi
risiko yang relevan juga di tingkat tim dan organisasi.

Bagi tim besar, pergeseran ini datang lebih cepat daripada kemampuan praktik
pengukuran kebanyakan organisasi untuk beradaptasi, dan jurang antara kecepatan
adopsi dan adaptasi pengukuran itulah tempat risiko sesungguhnya dalam bagian
ini berada. Organisasi perusahaan besar yang terus melaporkan metrik aktivitas
era sebelum AI tanpa penyesuaian berisiko merayakan metrik yang diam-diam telah
berhenti berkorelasi dengan nilai; organisasi pemerintahan yang menilai
investasi perangkat AI memerlukan pemahaman yang jernih tentang metrik mana yang
masih dapat dipercaya dan mana yang tidak lagi, sebelum berkomitmen pada
keputusan pengadaan atau kebijakan yang dibangun di atas asumsi pengukuran yang
sudah usang.

## Prinsip utama

- **Ini adalah pergeseran paradigma dalam apa yang diukur metrik, bukan
  perubahan bertahap.** Beberapa metrik yang ada diam-diam telah berhenti
  bermakna seperti dulu.
- **Volume keluaran tidak pernah menjadi proksi nilai yang andal, dan kini
  menjadi sangat tidak andal.** Peringatan topik 3.4 selalu benar; pergeseran
  ini membuat pengabaiannya jauh lebih mahal.
- **Jurang antara kecepatan adopsi AI dan kecepatan adaptasi pengukuran adalah
  risiko sesungguhnya.** Organisasi mengadopsi perangkat lebih cepat daripada
  mereka meninjau ulang metriknya.
- **Tidak semua metrik dalam buku ini terdampak sama.** Metrik hasil (Bagian 5)
  jauh lebih tahan terhadap pergeseran ini daripada metrik aktivitas dan
  keluaran mentah.
- **Pergeseran ini berlaku di seluruh industri dan masih berlangsung, bukan
  penyesuaian satu kali.** Harapkan perubahan berkelanjutan seiring perangkat
  dan pola adopsinya terus berkembang.

## Rekomendasi

### Audit set metrik Anda yang ada secara eksplisit untuk validitas di era AI

Telusuri dasbor Anda saat ini dan, untuk setiap metrik, tanyakan langsung:
apakah tim yang memakai bantuan AI secara intensif tetapi tidak menghasilkan
nilai nyata lebih banyak daripada sebelumnya akan menunjukkan pembacaan yang
membaik pada metrik ini. Hitungan aktivitas, frekuensi commit, dan frekuensi
deployment mentah (tanpa pagar pengaman stabilitas yang dipasangkan, topik 2.10)
adalah yang paling terpapar. Metrik hasil dari Bagian 5, tingkat cacat yang
lolos, adopsi fitur, hasil bisnis, relatif lebih tahan, karena mengukur hasil
sebenarnya, bukan volume aktivitas yang menghasilkannya.

### Tinjau ulang frekuensi deployment dan lead time secara khusus, dengan perhatian pagar pengaman yang lebih tinggi

Topik 2.10 sudah memperingatkan tentang manipulasi substitusi, yaitu memecah
pekerjaan bermakna menjadi deployment sepele untuk menggelembungkan hitungan.
AI generatif membuat pola manipulasi (gaming) khusus ini jauh lebih murah dan
mudah dihasilkan, bahkan tanpa disengaja, karena perubahan sepele berbantuan AI
kini hampir gratis untuk dibuat. Perketat pagar pengaman tingkat kegagalan
perubahan Anda (topik 2.10) sebanding dengan seberapa intensif sebuah tim
mengadopsi pengembangan berbantuan AI, dan pantau tren ukuran deployment lebih
cermat daripada sebelumnya.

### Perlakukan kapasitas tinjauan kode sebagai hambatan baru yang kritis

Jika bantuan AI secara dramatis meningkatkan volume kode yang diajukan untuk
ditinjau, tahap tinjauan (topik 2.9), yang sudah sering menjadi penyumbang waktu
tunggu terbesar dalam alur pengiriman, menjadi kendala yang lebih tajam lagi.
Peninjau yang diminta mengevaluasi volume kode hasil AI yang jauh lebih tinggi
dengan kecepatan yang sama seperti sebelumnya pasti akan memperlambat alur atau
mengurangi kedalaman tinjauan, yaitu risiko stempel karet yang sudah
diperingatkan topik 2.9, kini di bawah tekanan yang jauh lebih besar. Pantau
kedalaman tinjauan dan pagar pengaman kualitas dengan perhatian lebih tinggi
seiring naiknya volume kode hasil AI.

### Jangan berasumsi kode hasil AI memiliki profil cacat yang sama dengan kode tulisan manusia

Bukti awal dan pengalaman praktisi menunjukkan kode hasil AI dapat memiliki
profil cacat yang berbeda dari kode tulisan manusia: logika yang tampak
meyakinkan tetapi keliru secara halus, penanganan kasus tepi yang dihasilkan
dengan penuh keyakinan tetapi salah, atau kode yang lolos tinjauan sepintas
karena tampak idiomatik dan masuk akal, padahal tidak benar-benar dinalar dengan
pemahaman sejati atas konteks khusus sistem. Perlakukan ini sebagai hipotesis
yang layak diuji secara aktif terhadap data cacat lolos Anda sendiri (topik 5.1),
dengan menandai cacat berdasarkan apakah kode asalnya sebagian besar dihasilkan
AI, alih-alih berasumsi bahwa hubungan tingkat cacat historis yang menjadi dasar
praktik kualitas organisasi Anda masih berlaku tanpa perubahan.

### Perbarui piagam metrik dan proses tata kelola Anda secara eksplisit untuk pergeseran ini

Mengikuti disiplin tata kelola topik 1.4, jangan biarkan pergeseran ini
menimpa program metrik Anda secara pasif. Tinjau ulang piagam metrik Anda secara
eksplisit, dengan menyebut metrik mana yang memerlukan pagar pengaman baru, mana
yang perlu dipensiunkan, dan mana yang tetap dapat dipercaya, sebagai keputusan
tata kelola yang disengaja, bukan hanyutan yang tidak diperiksa. Dokumentasikan
alasannya, karena inilah jenis pergeseran definisi dan konteks yang menurut
topik 1.4 dapat terjadi secara diam-diam dan baru ditemukan jauh kemudian.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Terus melaporkan metrik era sebelum AI tanpa perubahan | Tanpa gangguan, pelaporan yang familier | Berisiko merayakan metrik yang diam-diam telah berhenti berkorelasi dengan nilai |
| Audit penuh set metrik dan revisi yang disengaja | Memulihkan pengukuran yang dapat dipercaya | Memerlukan usaha analitis nyata dan manajemen perubahan organisasi |
| Meninggalkan metrik aktivitas dan keluaran sepenuhnya | Langsung menghilangkan risiko yang paling terpapar | Kehilangan sebagian sinyal kontekstual yang sah berguna (catatan topik 3.4) |
| Memperketat pagar pengaman tanpa audit penuh | Lebih cepat diterapkan | Dapat melewatkan metrik yang keterpaparannya kurang jelas dibandingkan kasus yang paling terang |

Ketegangan utamanya adalah **kesinambungan pengukuran versus validitas
pengukuran**. Organisasi wajar lebih suka terus melaporkan metrik yang familier
dengan cara yang familier, karena mengubah program metrik memiliki biaya dan
gangguan organisasi yang nyata. Namun terus melaporkan metrik yang diam-diam
telah berhenti mengukur apa yang dulu diukurnya lebih buruk daripada gangguan,
itu adalah pengarahan yang menyesatkan secara aktif. Selesaikan ketegangan ini
dengan memperlakukannya persis sebagai jenis perubahan tata kelola yang
disengaja dan terdokumentasi seperti yang dijelaskan topik 1.4, mengganggu dalam
jangka pendek tetapi perlu untuk menjaga kejujuran metrik organisasi.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk setiap metrik di dasbor kita, apakah tim yang memakai bantuan AI
   secara intensif tetapi tidak menghasilkan nilai nyata lebih banyak akan
   menunjukkan pembacaan yang membaik?** Telusuri metrik Anda secara eksplisit
   dengan uji ini; yang gagal adalah kandidat prioritas tertinggi Anda untuk
   pagar pengaman yang direvisi atau pemensiunan.

2. **Apakah frekuensi deployment atau volume commit kita naik sejak
   mengadopsi bantuan pemrograman AI, dan sudahkah kita memeriksa apakah tingkat
   kegagalan perubahan atau tingkat cacat bergerak seiring?** Tarik data
   berpasangan yang sebenarnya, alih-alih berasumsi hasilnya positif maupun
   negatif.

3. **Apakah kapasitas tinjauan kode kita mengimbangi kenaikan volume kode
   berbantuan AI, atau apakah kedalaman tinjauan diam-diam terkikis di bawah
   tekanan yang meningkat?** Periksa metrik tahap tinjauan (topik 2.9) secara
   khusus untuk tanda-tanda risiko stempel karet yang menguat.

4. **Apakah kita menandai cacat berdasarkan apakah kode asalnya sebagian besar
   dihasilkan AI, dan jika ya, apa yang ditunjukkan data itu sejauh ini?** Jika
   saat ini belum menandainya, diskusikan apa yang diperlukan untuk memulai,
   karena data ini langsung relevan dengan apakah asumsi kualitas historis kita
   masih berlaku.

5. **Apakah kita telah sengaja meninjau ulang piagam metrik kita (topik 1.4)
   mengingat pergeseran ini, atau praktik pengukuran kita sekadar berlanjut
   tanpa perubahan?** Jika jawaban jujurnya yang terakhir, jurang itulah yang
   paling dulu direkomendasikan topik ini untuk ditutup.

6. **Seperti apa jadinya jika organisasi kita kecolongan oleh pergeseran ini,
   merayakan metrik yang sudah berhenti bermakna seperti yang kita kira?**
   Eksperimen pikiran yang konkret dan sedikit tidak nyaman ini membantu
   memotivasi audit yang direkomendasikan topik ini sebelum, bukan sesudah,
   skenario itu benar-benar terjadi.

## Lensa sektor

**Startup.** Adopsi perangkat AI yang cepat itu umum dan sering menjadi
keunggulan kompetitif yang nyata, tetapi kecepatan yang sama yang membuat adopsi
menarik membuat hanyutan metrik yang tidak diperiksa lebih mungkin terjadi.
Bangun kebiasaan memeriksa metrik hasil (Bagian 5) berdampingan dengan setiap
peningkatan efisiensi yang Anda laporkan dari adopsi AI, alih-alih melaporkan
peningkatan kecepatan saja.

**Usaha kecil.** Bantuan pemrograman AI dapat memperluas kapasitas tim kecil
secara berarti, tetapi tahan godaan untuk melaporkan kenaikan keluaran mentah
sebagai keberhasilan yang tidak diragukan tanpa memeriksa pagar pengaman
kualitas; tim kecil memiliki kapasitas lebih sedikit untuk menyerap masalah
kualitas yang tidak terdeteksi dibandingkan organisasi lebih besar dengan lebih
banyak cadangan.

**Perusahaan besar.** Skala risiko ini berlipat ganda secara signifikan di
sini, karena adopsi AI di puluhan atau ratusan tim secara bersamaan dapat
menggeser validitas metrik di seluruh organisasi sebelum satu tim pun
memperhatikan polanya secara lokal. Lakukan audit set metrik yang
direkomendasikan topik ini di tingkat organisasi, bukan hanya tim demi tim, dan
perbarui tata kelola (topik 1.4) secara terpusat dan eksplisit.

**Pemerintahan.** Organisasi sektor publik sering mengadopsi teknologi baru
dengan lebih hati-hati, tetapi metrik dan tolok ukur yang dipakai untuk menilai
program teknologi pemerintah sering diambil dari atau dibandingkan dengan data
industri swasta yang sendiri sedang bergeser di bawah tekanan yang sama.
Pahami secara eksplisit tolok ukur industri mana yang Anda jadikan pembanding
yang telah terdampak pergeseran ini sebelum memakainya untuk menetapkan harapan
atau menilai kinerja.

## Contoh

**Perusahaan besar.** Pimpinan teknik sebuah perusahaan teknologi keuangan
mencatat frekuensi deployment naik hampir 40% dalam dua kuartal setelah adopsi
luas asisten pemrograman AI, dan awalnya melaporkannya sebagai kemenangan
produktivitas yang gamblang dalam presentasi kepada dewan. Analisis lanjutan
yang lebih cermat, dipicu pertanyaan seorang anggota dewan yang skeptis tentang
apakah kualitas sudah diperiksa, menemukan bahwa tingkat kegagalan perubahan
naik hampir seiring dengan frekuensi deployment, sepenuhnya meniadakan kenaikan
yang tampak setelah metrik stabilitas yang dipasangkan benar-benar diperiksa.
Pelaporan perusahaan yang telah direvisi kini menyajikan frekuensi deployment
dan tingkat kegagalan perubahan secara bersamaan secara eksplisit setiap kali
klaim produktivitas berbantuan AI dibuat, menghindari klaim menyesatkan yang
nyaris diumumkan secara publik sebelumnya.

**Pemerintahan.** Sebuah departemen TI pemerintah negara bagian yang menguji
coba bantuan pemrograman AI untuk sebagian tim tekniknya menemukan bahwa
keluaran kode mentah per insinyur meningkat substansial, angka yang awalnya
dikutip secara positif dalam tinjauan uji coba internal. Analisis yang lebih
dekat, dipicu oleh panduan buku ini yang dimasukkan ke dalam kerangka evaluasi
departemen, memeriksa tingkat cacat lolos untuk pekerjaan berbantuan AI
dibandingkan yang tidak berbantuan AI secara khusus, dan menemukan tingkat cacat
yang sedikit lebih tinggi pada kohort berbantuan AI, terkonsentrasi pada
penanganan kasus tepi untuk keadaan warga yang tidak lazim yang tidak pernah
dikenal perangkat AI selama pelatihannya. Temuan ini tidak menghentikan uji coba
tetapi mendorong peningkatan ketelitian tinjauan yang spesifik dan terarah untuk
perubahan berbantuan AI yang menyentuh logika kasus tepi kelayakan, menangani
risiko sesungguhnya yang tidak akan pernah diungkap oleh metrik keluaran mentah
saja.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari melakukan audit ini secara proaktif adalah terhindarnya rasa
malu di hadapan publik atau dewan karena melaporkan metrik yang ternyata, di
bawah pengamatan ketat, tidak mengukur apa pun yang nyata, persis skenario yang
nyaris dihasilkan contoh perusahaan teknologi keuangan di atas. Organisasi yang
mendahului pergeseran ini menjaga kredibilitas di mata pemangku kepentingannya;
yang kedapatan melaporkan metrik kosong membayar biaya reputasi yang nyata dan
sebagian besar dapat dihindari.

Total biaya kepemilikan adalah usaha analitis untuk mengaudit set metrik yang
ada, memperketat pagar pengaman, dan memperbarui dokumentasi tata kelola,
investasi sekali jalan yang moderat dibandingkan risiko berkelanjutan dari terus
melaporkan metrik yang diam-diam telah berhenti mengukur apa yang diklaimnya.
Biaya ini juga berulang pada tingkat yang lebih rendah, karena pergeseran ini
berlangsung terus-menerus, bukan peristiwa satu kali, dan audit ulang berkala
seiring perangkat dan pola adopsi terus berkembang adalah tambahan permanen yang
masuk akal bagi irama tata kelola metrik.

## Anti-pola dan jebakan

- **Terus melaporkan metrik aktivitas era sebelum AI tanpa perubahan dan tanpa
  sikap kritis:** berisiko merayakan metrik yang diam-diam telah berhenti
  berkorelasi dengan nilai nyata.
- **Melaporkan kenaikan frekuensi deployment atau volume keluaran tanpa pagar
  pengaman stabilitas yang dipasangkan:** mengulang peringatan topik 2.10 dengan
  taruhan yang jauh lebih tinggi di bawah pengembangan berbantuan AI.
- **Berasumsi kode hasil AI memiliki profil cacat yang sama dengan kode tulisan
  manusia tanpa memeriksa:** asumsi yang tidak diuji dan bisa saja keliru secara
  aktif.
- **Membiarkan kedalaman tinjauan terkikis diam-diam di bawah volume kode hasil
  AI yang meningkat:** risiko stempel karet dari topik 2.9, yang diperkuat.
- **Memperlakukan pergeseran ini sebagai penyesuaian satu kali, bukan perhatian
  berkelanjutan:** perangkat dan pola adopsinya terus berkembang, dan praktik
  pengukuran perlu mengimbanginya.
- **Membandingkan dengan tolok ukur industri tanpa memahami apakah tolok ukur itu
  sendiri telah bergeser di bawah tekanan yang sama:** berisiko menimbulkan
  rasa keliru tentang kinerja relatif.

## Model kematangan

- **Level 1, Initiate (Memulai):** Metrik era sebelum AI dilaporkan tanpa
  perubahan, tanpa kesadaran bahwa adopsi AI mungkin memengaruhi validitasnya.
- **Level 2, Develop (Mengembangkan):** Ada kesadaran tentang pergeseran ini,
  tetapi belum dilakukan audit sistematis atas set metrik yang ada.
- **Level 3, Standardize (Membakukan):** Audit penuh set metrik telah dilakukan,
  dengan pagar pengaman diperketat dan metrik didokumentasikan sebagai terdampak
  atau tahan, di seluruh organisasi.
- **Level 4, Manage (Mengelola):** Cacat dan hasil kualitas secara aktif ditandai
  dan dilacak menurut tingkat bantuan AI untuk menguji, bukan mengasumsikan,
  bahwa hubungan kualitas historis organisasi masih berlaku.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi memiliki praktik yang
  matang dan berkelanjutan dalam meninjau ulang metriknya seiring perangkat AI
  dan pola adopsi terus berkembang, dan dapat menunjukkan keputusan tata kelola
  spesifik yang diambil secara proaktif menanggapi pergeseran ini, bukan secara
  reaktif setelah masalah muncul.

## Gagasan untuk diskusi

1. Metrik kita saat ini yang mana yang paling menyanjung tim yang memakai bantuan AI secara intensif tetapi tidak menghasilkan nilai nyata lebih banyak?
2. Apakah frekuensi deployment kita naik sejak adopsi AI, dan apakah tingkat kegagalan perubahan bergerak bersamanya?
3. Apakah kita menandai hasil kualitas menurut tingkat bantuan AI, dan apa yang akan ditunjukkan data itu?
4. Apakah kapasitas tinjauan kita mengimbangi kenaikan volume kode hasil AI?
5. Tolok ukur industri apa yang saat ini kita pakai sebagai pembanding, dan apakah tolok ukur itu sendiri telah bergeser di bawah tekanan ini?

## Poin-poin utama

- AI generatif adalah **pergeseran paradigma dalam apa yang diukur beberapa
  metrik yang ada**, bukan perubahan perangkat yang bertahap; beberapa metrik
  diam-diam telah berhenti bermakna seperti dulu.
- **Metrik aktivitas dan keluaran mentah adalah yang paling terpapar**; metrik
  hasil (Bagian 5) relatif lebih tahan.
- **Perketat pagar pengaman, terutama tingkat kegagalan perubahan**, sebanding
  dengan adopsi pengembangan berbantuan AI.
- **Uji, jangan asumsikan, apakah kode hasil AI memiliki profil cacat yang
  berbeda** dari kode tulisan manusia, dengan data cacat lolos yang ditandai.
- Perlakukan ini sebagai **perhatian tata kelola yang berkelanjutan, bukan
  satu kali** (topik 1.4), karena perangkat dan pola adopsinya terus berkembang.

## Referensi dan bacaan lanjutan

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (landasan pengukuran berbasis hasil yang menurut
  topik ini menjadi makin penting, bukan makin kurang, di bawah pergeseran ini).
- GitHub's research on AI pair programming and developer productivity
  (riset industri tentang efek terukur pengembangan berbantuan AI).
- Google Cloud's DevOps Research and Assessment programme, [dora.dev](https://dora.dev/) (riset
  State of DevOps yang berkelanjutan, yang dalam beberapa tahun terakhir memuat
  temuan adopsi AI).
- *The Tyranny of Metrics*, by Jerry Z. Muller (argumen umum untuk skeptisisme
  terhadap metrik berbasis volume, sangat relevan ketika volume keluaran menjadi
  murah).
