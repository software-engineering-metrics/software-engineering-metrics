# 7.0 Pengantar Bagian 7: Metrik di Era AI

Setiap metrik dalam buku ini sejauh ini dirancang untuk dunia tempat menulis
kode adalah sumber daya yang langka dan menuntut usaha. Perangkat AI generatif
telah mengubah premis itu lebih cepat daripada kemampuan metrik kebanyakan
organisasi untuk menyusul. Ketika sebuah perangkat dapat menghasilkan pull
request yang tampak meyakinkan dalam hitungan detik, beberapa metrik yang
dibahas di bagian-bagian sebelumnya berhenti mengukur apa yang dulu mereka
ukur: yang paling jelas adalah hitungan aktivitas (topik 3.4), lalu sampai
batas tertentu frekuensi deployment mentah (topik 2.10), bahkan cakupan
pengujian (topik 4.2) jika dikejar secara sembarangan. Bagian ini ada karena
program metrik yang tidak secara eksplisit memperhitungkan pergeseran ini
berisiko melaporkan angka dengan penuh percaya diri padahal angka itu diam-diam
telah kehilangan makna, atau lebih buruk lagi, justru merugikan.

Keempat topik dalam bagian ini mengikuti alur yang disengaja. Topik 7.1
menyebut pergeseran itu secara langsung dan menjelaskan mengapa ia merupakan
perubahan paradigma, bukan penyesuaian bertahap. Topik 7.2 membahas cara
benar-benar mengukur apakah pengembangan berbantuan AI memang membantu, dengan
memakai disiplin hasil di atas keluaran yang sudah ditetapkan topik 1.3 sejak
awal buku ini. Topik 7.3 menyebut risiko-risiko baru yang dibawa pergeseran
ini: metrik yang membengkak tanpa nilai yang sepadan, dan pengenceran kualitas
yang melaju lebih cepat daripada kemampuan industri saat ini untuk
mendeteksinya. Topik 7.4 menutup bagian ini dengan jawaban buku ini atas
seluruh pergeseran tersebut: pergantian arah yang disengaja menuju telemetri
hasil sebagai metrik yang paling penting, justru karena volume keluaran,
seperti yang dikemukakan bagian ini sepanjang jalan, tidak pernah menjadi hal
yang tepat untuk dioptimalkan sejak awal, dan AI generatif hanya membuat
kebenaran itu tidak mungkin lagi diabaikan.

Bagi tim besar, bagian ini mendesak, bukan spekulatif. Organisasi perusahaan
besar yang mengadopsi asisten pemrograman AI dalam skala luas perlu segera tahu
apakah metrik mereka yang ada masih bermakna seperti yang mereka kira.
Organisasi pemerintahan, yang sering bergerak lebih hati-hati dalam adopsi AI
tetapi menghadapi pergeseran perangkat yang sama di industri luas tempat mereka
merekrut dan membandingkan diri, memerlukan panduan bagian ini untuk menafsirkan
tolok ukur industri dengan benar, karena tolok ukur itu sendiri ikut bergeser di
bawah tekanan yang sama.

## Topik dalam bagian ini

- **7.1 Pergeseran paradigma AI generatif:** Mengapa ini adalah perubahan
  mendasar pada apa yang diukur oleh beberapa metrik yang ada, bukan sekadar
  perangkat baru untuk ditambahkan ke kotak peralatan.
- **7.2 Mengukur pengembangan perangkat lunak berbantuan AI:** Cara mengukur
  apakah bantuan AI benar-benar membantu, dengan data hasil, bukan volume
  keluaran.
- **7.3 Risiko inflasi metrik dan pengenceran kualitas:** Risiko manipulasi
  (gaming) dan kualitas baru yang dibawa pergeseran ini, serta cara
  menjaganya.
- **7.4 Telemetri hasil sebagai bintang utara yang baru:** Jawaban buku ini atas
  seluruh pergeseran: pergantian arah yang disengaja dan permanen menuju metrik
  hasil seiring keluaran menjadi murah.

## Bagaimana topik-topik ini saling berkaitan

Topik 7.1 menjelaskan mengapa bagian ini ada; topik 7.2 memberikan panduan
pengukuran praktis yang dituntut pergeseran itu; topik 7.3 menyebut mode
kegagalan spesifik yang perlu dijaga organisasi saat mengadopsi pengembangan
berbantuan AI; dan topik 7.4 merampatkan pelajarannya menjadi prinsip permanen
yang bertahan lebih lama daripada perangkat atau vendor tertentu. Bagian ini
lebih mirip lensa yang diterapkan kembali ke seluruh buku, dan kurang mirip
keluarga metrik yang berdiri sendiri seperti Bagian 2 sampai 6 yang masing-masing
membahas satu ranah: metrik aktivitas, keluaran, dan bahkan sebagian metrik
hasil dari setiap topik sebelumnya perlu ditinjau ulang melalui
pertanyaan-pertanyaan bagian ini seiring pengembangan berbantuan AI menjadi
praktik standar, bukan pengecualian.

Bagian ini terhubung paling langsung ke prinsip hasil di atas keluaran dari
topik 1.3 dan peringatan topik 3.4 terhadap metrik aktivitas. Bagian ini
menganggap keduanya benar sejak awal, dan kini terbukti mendesak oleh pergeseran
teknologi yang membuat kebalikannya, mengukur berdasarkan volume, benar-benar
berbahaya, bukan sekadar kurang optimal. Bagian ini juga menyiapkan panduan
praktis Bagian 8 tentang membangun program metrik, karena dasbor yang dirancang
sebelum pergeseran ini perlu dipertimbangkan ulang secara sengaja, bukan sekadar
disesuaikan bertahap, mengingat apa yang dibahas bagian ini.
