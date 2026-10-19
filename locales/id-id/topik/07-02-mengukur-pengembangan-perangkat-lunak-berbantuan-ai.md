# 7.2 Mengukur pengembangan perangkat lunak berbantuan AI

## Gambaran umum dan motivasi

Topik 7.1 menjelaskan mengapa beberapa metrik yang ada tidak lagi andal
mengukur apa yang dulu diukurnya di bawah pengembangan berbantuan AI. Topik ini
membahas apa yang sebaiknya diukur sebagai gantinya: bagaimana mengetahui,
dengan bukti nyata dan bukan kesan atau pemasaran vendor, apakah bantuan
pemrograman AI benar-benar membantu organisasi Anda, dan seberapa besar. Ini
pertanyaan yang sungguh penting dengan konsekuensi anggaran yang nyata (lisensi
perangkat AI adalah biaya nyata yang berkelanjutan, dan disiplin ekonomi unit
dari topik 5.4 berlaku langsung), dan organisasi yang tidak dapat menjawabnya
dengan bukti entah membayar terlalu mahal untuk perangkat yang tidak membantu
atau kurang berinvestasi pada perangkat yang sebenarnya membantu.

Pendekatan topik ini bersumber langsung dari prinsip hasil di atas keluaran
dari topik 1.3, yang kini diterapkan khusus pada evaluasi perangkat AI.
Pendekatan naif yang paling umum mengukur pengembangan berbantuan AI dengan
volume keluaran: baris kode yang dihasilkan, saran yang diterima, waktu yang
dihemat per tugas menurut laporan diri pengembang, persis metrik yang menurut
peringatan topik 7.1 paling terpapar pergeseran ini. Pendekatan yang lebih
ketat yang direkomendasikan topik ini mengukur hasil: apakah bantuan AI
benar-benar mengurangi waktu siklus tanpa menurunkan kualitas, apakah ia
mengurangi waktu yang dihabiskan untuk pekerjaan berulang yang sungguh bernilai
rendah sehingga membebaskan kapasitas untuk pekerjaan bernilai lebih tinggi, dan
apakah ia berpengaruh terukur pada hasil bisnis dan produk dari Bagian 5.

Bagi tim besar, ketepatan pengukuran ini menentukan apakah keputusan investasi
perangkat AI diambil berdasarkan bukti atau berdasarkan klaim vendor dan
momentum organisasi. Organisasi perusahaan besar yang menegosiasikan kontrak
perangkat AI skala besar membutuhkan bukti nilai yang sesungguhnya untuk
membenarkan pengeluaran dan membandingkan perangkat pesaing secara adil;
organisasi pemerintahan, yang sering berada di bawah pengawasan khusus atas
belanja teknologi, membutuhkan metodologi evaluasi yang ketat dan dapat dibela
sebelum mengalokasikan dana publik untuk adopsi perangkat AI dalam skala besar.

## Prinsip utama

- **Ukur bantuan AI berdasarkan hasil, bukan volume keluaran atau statistik
  penggunaan yang dilaporkan vendor.** Disiplin topik 1.3 berlaku penuh di sini.
- **Gunakan [kelompok pembanding](https://en.wikipedia.org/wiki/Treatment_and_control_groups)
  yang sesungguhnya bila memungkinkan**, bukan sekadar perbandingan sebelum dan
  sesudah yang dapat dikacaukan oleh garis dasar seluruh industri yang naik.
- **Penghematan waktu menurut laporan diri adalah sinyal yang lemah jika berdiri
  sendiri.** Pasangkan dengan data waktu siklus dan kualitas yang objektif.
- **Ukur biaya penuhnya, termasuk waktu tinjauan dan koreksi**, bukan hanya
  kecepatan pembuatan.
- **Tugas dan insinyur yang berbeda dapat melihat nilai bantuan AI yang sangat
  berbeda.** Hindari satu angka gabungan di seluruh organisasi yang menyembunyikan
  variasi ini.

## Rekomendasi

### Bangun perbandingan yang sesungguhnya, bukan sekadar potret sebelum dan sesudah

Bila memungkinkan, bandingkan hasil antara kelompok yang memakai bantuan AI dan
kelompok sebanding yang tidak memakainya, dalam periode yang sama, alih-alih
hanya membandingkan angka sebelum dan sesudah milik organisasi Anda sendiri,
yang tidak dapat membedakan efek bantuan AI dari perubahan bersamaan lainnya
(peringatan variabel pengacau dari topik 1.6 berlaku langsung). Bila kelompok
pembanding sejati tidak praktis, setidaknya bandingkan dengan garis dasar
historis yang lebih panjang (bagan kendali, menurut topik 1.6) alih-alih satu
potret sebelum dan sesudah yang rentan terhadap regresi ke rata-rata atau
perubahan bersamaan yang tidak terkait.

### Ukur waktu siklus dan kualitas bersamaan, jangan pernah klaim kecepatan bantuan AI saja

Terapkan langsung disiplin topik 2.6 dan topik 2.10: lacak apakah pekerjaan
berbantuan AI bergerak lebih cepat melalui tahap-tahap waktu siklus, dan pada
saat yang sama apakah tingkat kegagalan perubahan atau tingkat cacat lolos
(topik 5.1) untuk pekerjaan itu bergerak ke arah yang salah. Peningkatan
produktivitas yang sejati menunjukkan waktu siklus lebih cepat dengan kualitas
yang stabil atau membaik; peningkatan palsu menunjukkan waktu siklus lebih cepat
dengan kualitas menurun, persis pertukaran yang diperingatkan topik 7.1, yang
di sini ditemukan lewat disiplin metrik berpasangan yang sama yang diterapkan
buku ini di mana-mana.

### Sertakan waktu tinjauan dan koreksi dalam perhitungan biaya penuh

Kode hasil AI yang lebih cepat dibuat tetapi lebih lambat ditinjau, atau yang
memerlukan lebih banyak koreksi dan pengerjaan ulang setelah pembuatan awal,
mungkin tidak menunjukkan perbaikan waktu siklus bersih begitu seluruh alur
diukur, meskipun langkah pembuatan kode awal terasa jauh lebih cepat bagi
insinyur secara individual. Ukur seluruh rantai waktu siklus (topik 2.6), bukan
hanya tahap pemrograman, untuk menangkapnya secara jujur alih-alih memberi
kredit kepada bantuan AI berdasarkan rasa cepat yang dirasakan tetapi tidak
lengkap.

### Perlakukan penghematan waktu menurut laporan diri sebagai hipotesis awal, bukan kesimpulan

Laporan diri pengembang seperti "ini menghemat satu jam saya" berguna sebagai
sinyal awal dan konteks kualitatif (pendekatan kuantitatif-kualitatif gabungan
dari topik 5.3 juga berlaku di sini), tetapi tunduk pada bias ingatan dan
keinginan sosial yang sama yang diperingatkan topik 1.5 untuk setiap data
laporan diri, dan tidak mengatakan apa pun tentang biaya tinjauan atau koreksi
selanjutnya. Gunakan laporan diri untuk menghasilkan hipotesis tentang di mana
bantuan AI paling membantu, lalu validasi hipotesis itu terhadap data waktu
siklus dan kualitas yang objektif sebelum menarik kesimpulan yang tegas.

### Segmentasikan pengukuran menurut jenis tugas dan hindari satu angka gabungan

Bantuan pemrograman AI kemungkinan memberi nilai yang sangat berbeda untuk tugas
boilerplate yang sudah dipahami baik dibandingkan pemecahan masalah yang
benar-benar baru dan kompleks. Ukur dan laporkan menurut kategori tugas, bukan
satu rata-rata gabungan di seluruh organisasi, yang dapat menyembunyikan fakta
bahwa bantuan memberi nilai kuat di satu kategori sementara memberi nilai kecil
atau bahkan negatif di kategori lain, informasi yang akan tertutup sepenuhnya
oleh angka gabungan.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Penghematan waktu menurut laporan diri saja | Cepat, mudah dikumpulkan | Sinyal lemah; rentan bias; mengabaikan biaya tinjauan selanjutnya |
| Perbandingan sebelum dan sesudah saja | Sederhana disiapkan | Dikacaukan oleh perubahan bersamaan atau tren seluruh industri |
| Kelompok pembanding yang sesungguhnya | Bukti terkuat dan paling dapat dibela | Lebih sulit diatur; mungkin tidak layak untuk peluncuran adopsi penuh |
| Pengukuran hasil tersegmentasi per tugas | Mengungkap di mana nilai benar-benar terkonsentrasi | Memerlukan pelacakan dan upaya kategorisasi yang lebih rinci |

Ketegangan utamanya adalah **ketelitian pengukuran versus kelayakan praktis**.
Kelompok pembanding terkendali yang sejati adalah bukti terkuat tetapi sering
tidak praktis setelah perangkat diluncurkan ke seluruh organisasi tanpa
kelompok kendali yang ditahan; kesan menurut laporan diri cepat dan mudah tetapi
lemah jika berdiri sendiri. Selesaikan ketegangan ini dengan memakai rancangan
perbandingan terkuat yang diizinkan peluncuran Anda yang sebenarnya, kelompok
kendali sejati selama fase percontohan awal bila mungkin, bagan kendali garis
dasar historis bila tidak, dan memperlakukan laporan diri sebagai alat
penghasil hipotesis, bukan kata akhir, apa pun rancangan perbandingan yang
akhirnya Anda pakai.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita memiliki, atau masih bisa menyusun, kelompok pembanding yang
   sesungguhnya untuk mengevaluasi adopsi perangkat AI kita, atau kita sepenuhnya
   bergantung pada perbandingan sebelum dan sesudah?** Jika kelompok pembanding
   sejati tidak pernah dibentuk, diskusikan apakah bagan kendali garis dasar
   historis masih dapat menjadi alternatif yang cukup ketat.

2. **Apakah kita telah mengukur waktu siklus dan kualitas bersamaan untuk
   pekerjaan berbantuan AI, atau kita hanya punya klaim kecepatan tanpa
   pemeriksaan kualitas yang sepadan?** Tarik data apa pun yang ada dan periksa
   pasangan spesifik ini; jika tidak ada, jurang itu adalah perbaikan
   berprioritas tertinggi dari topik ini.

3. **Apakah pengukuran waktu siklus kita untuk pekerjaan berbantuan AI
   mencakup waktu tinjauan dan koreksi, atau hanya langkah pembuatan awal?**
   Klaim kecepatan yang hanya berdasarkan waktu pembuatan, mengabaikan biaya
   tinjauan selanjutnya, berisiko jatuh ke jebakan perhitungan tidak lengkap
   yang diperingatkan langsung oleh topik ini.

4. **Klaim penghematan waktu menurut laporan diri apa saja yang telah kita
   kumpulkan, dan sudahkah kita memvalidasi salah satunya terhadap data
   objektif?** Pilih satu klaim spesifik yang sering diulang dan periksa apakah
   data objektif benar-benar mendukungnya.

5. **Apakah pengukuran kita saat ini mencampur semua jenis tugas menjadi satu
   angka, atau apakah kita tahu kategori pekerjaan spesifik mana yang melihat
   nilai bantuan AI terkuat?** Jika dicampur, diskusikan apa yang mungkin
   diungkap oleh rincian tersegmentasi per tugas yang disembunyikan angka saat
   ini.

6. **Jika hari ini kita harus membela investasi perangkat AI kita di hadapan
   pemangku kepentingan keuangan yang skeptis, dengan bukti dan bukan kesan, apa
   yang sebenarnya dapat kita tunjukkan kepada mereka?** Uji konkret ini
   mengungkap jurang antara apa yang saat ini dipercayai organisasi Anda tentang
   nilai bantuan AI dan apa yang benar-benar dapat didemonstrasikannya dengan
   bukti.

## Lensa sektor

**Startup.** Studi kelompok pembanding formal biasanya tidak praktis pada skala
kecil, tetapi bahkan tinjauan sebelum dan sesudah yang sederhana dan jujur atas
waktu siklus dan tingkat cacat, alih-alih hanya mengandalkan seberapa cepat
pekerjaan terasa, memberi sinyal yang jauh lebih andal daripada kesan semata.

**Usaha kecil.** Fokuskan upaya pengukuran pada kategori tugas Anda yang paling
bernilai tinggi dan paling berulang lebih dulu, tempat nilai bantuan AI paling
mungkin jelas dan terukur, alih-alih mencoba evaluasi menyeluruh atas setiap
jenis pekerjaan yang dilakukan tim kecil Anda.

**Perusahaan besar.** Perbandingan terkendali yang sejati selama fase percontohan
awal, sebelum peluncuran penuh ke seluruh organisasi, sering dapat dicapai di
sini dan layak diatur dengan sengaja, karena menghasilkan bukti yang jauh lebih
dapat dibela untuk keputusan investasi perangkat skala besar yang biasanya
mengikuti percontohan yang berhasil.

**Pemerintahan.** Keputusan belanja teknologi publik, termasuk pengadaan
perangkat AI, sering menghadapi pengawasan khusus dan mungkin memerlukan
pembenaran biaya-manfaat formal (topik 5.5). Bangun disiplin pengukuran yang
direkomendasikan topik ini ke dalam setiap fase percontohan sejak awal, karena
metodologi evaluasi yang ketat dan terdokumentasi memperkuat kasus pendanaan
atau pengadaan akhir secara berarti.

## Contoh

**Perusahaan besar.** Sebuah perusahaan perangkat lunak meluncurkan asisten
pemrograman AI ke separuh tim tekniknya sebagai percontohan yang disengaja,
menahan separuh lainnya sebagai kelompok pembanding selama satu kuartal sebelum
peluncuran penuh. Kelompok percontohan menunjukkan perbaikan waktu siklus yang
nyata dan bermakna secara statistik untuk tugas yang terdefinisi baik dan
sarat boilerplate, tetapi tidak menunjukkan perbaikan terukur, dan jumlah
iterasi tinjauan yang sedikit lebih tinggi (topik 2.9), untuk pekerjaan
arsitektur yang kompleks dan baru. Temuan tersegmentasi per tugas ini, yang hanya
terlihat berkat rancangan perbandingan sejati dan rincian per kategori tugas,
membuat perusahaan secara khusus mengarahkan pesan peluncuran dan pelatihan
bantuan AI ke kategori tugas yang terbukti terbantu, alih-alih menyajikannya
sebagai dorongan produktivitas seragam di semua pekerjaan.

**Pemerintahan.** Sebuah lembaga federal yang menguji coba bantuan pemrograman AI
untuk sebagian tim program modernisasinya awalnya mengandalkan survei
penghematan waktu menurut laporan diri, yang menunjukkan tanggapan antusias dan
positif secara seragam. Analisis objektif lanjutan, yang membandingkan waktu
siklus dan tingkat cacat lolos antara tim percontohan dan kohort non-percontohan
yang sebanding yang mengerjakan komponen sistem serupa, menemukan bahwa
perbaikan waktu siklus objektif memang nyata tetapi jauh lebih kecil daripada
yang disarankan estimasi laporan diri, dan mengidentifikasi kenaikan waktu
tinjauan yang kecil tetapi nyata yang telah meniadakan sebagian peningkatan
kecepatan pembuatan, temuan yang sama sekali terlewat oleh data laporan diri
saja. Gambaran yang lebih akurat dan berbasis bukti ini langsung menjadi dasar
kasus bisnis yang lebih sederhana dan lebih dapat dibela untuk pengadaan
perangkat yang berlanjut dan diperluas.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengukur pengembangan berbantuan AI secara ketat adalah
keputusan investasi yang yakin dan berbasis bukti: organisasi yang tahu persis di
mana bantuan AI benar-benar membantu dapat berinvestasi memperluasnya di sana
dan menghindari membayar lisensi terlalu mahal di kategori tugas yang nilainya
kecil, persis wawasan segmentasi tugas yang ditunjukkan contoh perusahaan
perangkat lunak di atas. Ini terhubung langsung ke ekonomi unit topik 5.4 dan
disiplin ROI topik 5.5, karena biaya perangkat AI, yang sering dilisensikan per
kursi, memerlukan perlakuan biaya-manfaat ketat yang sama yang diterapkan buku
ini pada investasi teknik besar lainnya.

Total biaya kepemilikan adalah usaha analitis untuk membangun perbandingan
sejati, mengukur waktu siklus penuh termasuk tinjauan dan koreksi, dan
mensegmentasi menurut jenis tugas, yang lebih banyak pekerjaan daripada
menerima statistik penggunaan dari vendor atau kesan laporan diri apa adanya.
Usaha itu dibenarkan langsung oleh besarnya biaya lisensi perangkat AI di
organisasi besar dan risiko komitmen mahal di seluruh organisasi yang
buktinya lemah dan didasarkan pada kesan, bukan data.

## Anti-pola dan jebakan

- **Mengukur bantuan AI hanya dengan volume keluaran atau statistik penggunaan
  vendor:** mengulang langsung peringatan sentral topik 7.1.
- **Bergantung sepenuhnya pada penghematan waktu menurut laporan diri:** sinyal
  lemah yang rentan bias, dan buta terhadap biaya tinjauan dan koreksi
  selanjutnya.
- **Hanya mengukur langkah kecepatan pembuatan, mengabaikan waktu siklus
  penuh:** menghasilkan perhitungan efek produktivitas aktual yang tidak
  lengkap dan berpotensi menyesatkan.
- **Melaporkan satu angka gabungan di seluruh organisasi:** menyembunyikan
  variasi nilai yang nyata di berbagai kategori tugas.
- **Tanpa kelompok pembanding atau garis dasar historis:** tidak dapat
  membedakan efek sebenarnya dari bantuan AI dari perubahan bersamaan lainnya.
- **Memperlakukan hasil survei laporan diri yang antusias sebagai bukti cukup
  untuk keputusan investasi skala besar:** berisiko jatuh ke jurang persis yang
  baru ditemukan oleh contoh lembaga federal di atas setelah membangun
  perbandingan yang lebih ketat.

## Model kematangan

- **Level 1, Initiate (Memulai):** Nilai pengembangan berbantuan AI dinilai,
  kalaupun dinilai, hanya melalui kesan laporan diri dan statistik penggunaan
  vendor.
- **Level 2, Develop (Mengembangkan):** Ada sebagian data waktu siklus atau
  kualitas, tetapi tidak ada kelompok pembanding sejati atau garis dasar
  historis dan tidak ada analisis tersegmentasi per tugas.
- **Level 3, Standardize (Membakukan):** Rancangan perbandingan sejati (kelompok
  kendali atau garis dasar historis) dengan pengukuran waktu siklus dan kualitas
  berpasangan diterapkan secara konsisten, tersegmentasi menurut jenis tugas.
- **Level 4, Manage (Mengelola):** Perhitungan waktu siklus penuh, termasuk waktu
  tinjauan dan koreksi, dilacak; klaim laporan diri divalidasi secara sistematis
  terhadap data objektif.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi memiliki pemahaman matang
  berbasis bukti tentang persis di mana bantuan AI benar-benar membantu,
  menjadi dasar keputusan peluncuran terarah, investasi pelatihan, dan pengadaan
  dengan ROI yang terdemonstrasi dan dapat dibela.

## Gagasan untuk diskusi

1. Perbandingan sejati apa, jika ada, yang kita miliki untuk adopsi perangkat AI kita saat ini?
2. Apakah kita telah mengukur waktu siklus dan kualitas bersamaan, atau hanya klaim kecepatan?
3. Klaim bantuan AI menurut laporan diri mana yang sebaiknya kita validasi terhadap data objektif?
4. Kategori tugas spesifik mana yang menunjukkan bukti terkuat tentang nilai bantuan AI yang sesungguhnya bagi kita?
5. Dapatkah kita saat ini membela investasi perangkat AI kita di hadapan pemangku kepentingan keuangan yang skeptis dengan bukti?

## Poin-poin utama

- Ukur pengembangan berbantuan AI berdasarkan **hasil**, bukan volume keluaran
  atau statistik penggunaan yang dilaporkan vendor.
- Gunakan **kelompok pembanding sejati atau garis dasar historis**, bukan
  sekadar potret sebelum dan sesudah yang rentan terhadap faktor pengacau.
- Ukur **waktu siklus dan kualitas bersamaan**, mencakup seluruh alur, waktu
  tinjauan dan koreksi, bukan hanya kecepatan pembuatan.
- Perlakukan **penghematan waktu menurut laporan diri sebagai hipotesis**, bukan
  kesimpulan, dan validasi terhadap data objektif.
- **Segmentasikan menurut jenis tugas**; satu angka gabungan menyembunyikan di
  mana nilai benar-benar terkonsentrasi dan di mana tidak.

## Referensi dan bacaan lanjutan

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (disiplin pengukuran hasil yang diterapkan topik ini
  pada evaluasi perangkat AI).
- GitHub's research on AI pair programming and developer productivity
  (riset empiris skala industri tentang hasil pengembangan berbantuan AI).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021) (disiplin pengukuran multidimensi yang
  diterapkan topik ini pada kategori perangkat baru yang spesifik).
- *How to Measure Anything*, by Douglas W. Hubbard (menyusun perbandingan yang
  dapat dibela dan mengkuantifikasi nilai di bawah ketidakpastian yang nyata).
