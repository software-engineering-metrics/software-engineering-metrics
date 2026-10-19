# 5.1 Tingkat cacat yang lolos dan kebocoran kualitas

## Gambaran umum dan motivasi

**Tingkat cacat yang lolos** (escaped defect rate) mengukur cacat yang
sampai ke produksi dan memengaruhi pengguna sungguhan, berbeda dari cacat
yang tertangkap lebih awal melalui pengujian, tinjauan kode, atau analisis
statis, yang semuanya dibahas di Bagian 4 buku ini. Perbedaan ini sangat
penting: cacat yang tertangkap dalam tinjauan kode hanya memakan beberapa
menit untuk diperbaiki dan tidak pernah dilihat pengguna mana pun; cacat
yang sama, jika lolos ke produksi, dapat menelan berjam-jam penanganan
insiden, merugikan pelanggan secara nyata, dan menggerus kepercayaan secara
terukur. Metrik ini, dalam arti yang sesungguhnya, adalah kartu skor akhir
untuk semua yang dibahas Bagian 4, karena tingkat cacat lolos yang naik
meskipun metrik kualitas internal kuat (kompleksitas, cakupan, analisis
statis) biasanya berarti sinyal internal itu sebenarnya tidak menangkap
mode kegagalan yang penting bagi pengguna sungguhan.

Topik ini memperlakukan cacat yang lolos dengan keseriusan yang pantas
bagi biayanya, sambil menolak godaan untuk menjadikan jumlah mentahnya
papan skor sederhana. Tidak semua cacat setara: salah ketik pada teks
bantuan yang jarang dilihat dan bug yang merusak data dalam sistem
transaksi keuangan sama-sama, secara teknis, cacat yang lolos, dan
memperlakukan keduanya secara identik menghasilkan metrik yang terlalu
berisik untuk ditindaklanjuti atau, lebih buruk lagi, secara aktif
menyesatkan tentang di mana risiko sebenarnya berada. Rekomendasi inti
topik ini, pelacakan berbobot keparahan dengan perhatian cermat pada cara
cacat diklasifikasikan, ditujukan langsung pada masalah itu.

Bagi tim besar, tingkat cacat yang lolos adalah salah satu jembatan paling
jelas antara metrik rekayasa internal buku ini dan dunia yang menghadap
pelanggan, yang menjadi perhatian Bagian 5 secara keseluruhan. Organisasi
perusahaan besar memakainya untuk membenarkan investasi pada praktik
pengujian dan tinjauan dari Bagian 4; organisasi pemerintahan, tempat
cacat yang lolos dapat berarti perhitungan manfaat yang keliru atau
interaksi layanan publik yang gagal, memperlakukannya sebagai ukuran
langsung kepercayaan publik dan paparan hukum, bukan sekadar statistik
rekayasa internal.

## Prinsip utama

- **Tingkat cacat yang lolos adalah kartu skor akhir untuk praktik kualitas
  internal.** Tingkat yang naik meskipun metrik Bagian 4 kuat berarti
  metrik-metrik itu tidak menangkap apa yang penting.
- **Keparahan lebih penting daripada jumlah mentah.** Beri bobot pada cacat
  menurut dampak aktualnya pada pelanggan atau bisnis, bukan dengan
  memperlakukan setiap cacat yang lolos secara identik.
- **Konsistensi klasifikasi itu esensial.** Dua tim yang mengklasifikasikan
  keparahan secara berbeda menghasilkan angka yang tidak dapat dibandingkan
  secara adil.
- **Metrik ini rentan terhadap manipulasi definisi**, persis seperti tingkat
  kegagalan perubahan (topik 2.10): mempersempit apa yang dihitung sebagai
  "cacat" memperbagus angka tanpa mengurangi kerugian pelanggan yang nyata.
- **Pengategorian akar masalah mengubah jumlah menjadi alat diagnostik.**
  Mengetahui *mengapa* cacat lolos lebih dapat ditindaklanjuti daripada
  hanya mengetahui berapa banyak yang lolos.

## Rekomendasi

### Beri bobot cacat yang lolos menurut keparahan, dengan skala yang
konsisten dan terdokumentasi

Klasifikasikan setiap cacat yang lolos memakai skala keparahan yang tetap
(umumnya kritis, mayor, minor, atau padanan bernomor) berdasarkan dampak
aktual pada pelanggan atau bisnis: kehilangan atau kerusakan data,
paparan keamanan, dan fitur yang sama sekali tidak tersedia berada di
puncak; masalah kosmetik tanpa dampak fungsional berada di dasar. Lacak
tren berbobot keparahan, bukan hanya jumlah mentah, agar lonjakan masalah
minor tidak secara visual menenggelamkan kenaikan yang lebih kecil tetapi
jauh lebih berdampak pada masalah kritis.

### Standarkan kriteria klasifikasi di seluruh tim

Tim-tim yang dibiarkan mengklasifikasikan keparahan sendiri-sendiri akan
bergeser menuju standar yang berbeda, ada yang konservatif, ada yang
longgar, sehingga perbandingan antartim menjadi tidak bermakna dan, lebih
buruk lagi, menciptakan insentif untuk mengklasifikasikan lebih rendah
demi membuat angka tim sendiri tampak lebih baik (varian dari manipulasi
definisi pada topik 1.2). Terbitkan kriteria klasifikasi yang jelas dan
berbasis contoh, dan secara berkala audit sampel klasifikasi di berbagai
tim untuk memeriksa konsistensinya.

### Lacak [akar masalah](https://en.wikipedia.org/wiki/Root_cause_analysis), bukan hanya jumlah dan keparahan

Untuk setiap cacat yang lolos, catat mengapa ia lolos: celah pengujian,
kasus tepi yang terlewat dalam kebutuhan, perbedaan lingkungan antara
staging dan produksi, tinjauan yang melewatkan masalah itu. Agregasikan
data akar masalah ini dari waktu ke waktu untuk menemukan pola sistemik;
jika satu kategori tertentu (misalnya cacat akibat perbedaan lingkungan)
mendominasi cacat yang lolos pada Anda, itu menunjuk langsung pada celah
proses yang spesifik dan dapat diperbaiki, bukan seruan umum yang kabur
untuk "menguji lebih banyak."

### Hubungkan cacat yang lolos kembali ke sinyal kualitas internal asalnya

Bila memungkinkan, telusuri cacat yang lolos kembali ke area kode
asalnya dan periksa apakah area itu menunjukkan tanda peringatan pada
metrik Bagian 4: apakah ia titik panas kompleksitas (topik 4.1, topik
4.3), apakah tingkat mutation-kill-nya rendah (topik 4.2), apakah analisis
statis menandai sesuatu di dekatnya (topik 4.4). Hubungan inilah yang
memvalidasi apakah metrik kualitas internal Anda benar-benar memprediksi
cacat yang dihadapi pelanggan, atau apakah metrik itu mengukur sesuatu
yang, dalam konteks spesifik Anda, tidak berkorelasi dengan apa yang
benar-benar dialami pelanggan.

### Jaga agar klasifikasi cacat tidak menjadi ajang mencari kambing hitam

Rumuskan analisis akar masalah cacat secara eksplisit sebagai pertanyaan
tentang sistem, sesuai kerangka diagnostik topik 1.1, bukan ajang
menyalahkan individu. Tim yang takut disalahkan atas cacat yang lolos
memiliki insentif kuat untuk melaporkan terlalu sedikit, salah
mengklasifikasikan ke arah lebih rendah, atau menolak analisis akar
masalah yang menyeluruh, yang semuanya merusak data yang menjadi
sandaran topik ini. Praktik postmortem tanpa menyalahkan, yang dibahas
lebih dalam di topik 6.2, berlaku langsung di sini.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Jumlah mentah cacat yang lolos | Mudah dilaporkan | Memperlakukan salah ketik dan bug perusak data secara identik; berisik dan menyesatkan |
| Pelacakan berbobot keparahan | Mencerminkan dampak aktual pada pelanggan dengan lebih akurat | Membutuhkan klasifikasi yang konsisten dan disiplin |
| Standar klasifikasi independen per tim | Fleksibel, beban koordinasi rendah | Menghasilkan angka yang tidak dapat dibandingkan antartim; mengundang pergeseran ke arah longgar |
| Klasifikasi yang terstandar dan diaudit | Adil, dapat dibandingkan, tahan terhadap manipulasi | Membutuhkan tata kelola berkelanjutan dan upaya audit berkala |

Ketegangan utamanya adalah **fleksibilitas lokal versus keterbandingan
antartim**. Membiarkan setiap tim mengklasifikasikan keparahan cacat
dengan cara apa pun yang sesuai konteksnya lebih sederhana untuk
diterapkan, tetapi menghasilkan angka yang tidak dapat dibandingkan atau
diagregasikan secara adil di tingkat organisasi, dan menciptakan insentif
diam-diam bagi tim untuk mengklasifikasikan secara longgar demi melindungi
metriknya sendiri. Selesaikan ketegangan itu dengan berinvestasi pada
kriteria klasifikasi yang terstandar dan terdokumentasi serta audit
antartim berkala, dan perlakukan ini sebagai pekerjaan tata kelola (topik
1.4) yang layak diinvestasikan mengingat betapa langsungnya metrik ini
terhubung dengan dampak nyata pada pelanggan.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita melacak cacat yang lolos menurut keparahan, atau apakah
   jumlah mentah memperlakukan masalah kosmetik kecil sama dengan masalah
   data yang kritis?** Buka dasbor Anda yang sebenarnya dan periksa; jika
   pembobotan keparahan belum ada, inilah perubahan paling bernilai tinggi
   yang direkomendasikan topik ini.

2. **Apakah dua tim berbeda akan mengklasifikasikan keparahan cacat yang
   sama dengan cara yang sama, atau apakah klasifikasi telah menjauh di
   seluruh organisasi?** Pilih satu cacat lampau yang nyata dan ambigu,
   minta perwakilan dari dua tim berbeda mengklasifikasikannya secara
   independen, lalu bandingkan hasilnya dengan jujur.

3. **Apa akar masalah paling umum dari cacat yang lolos pada kita, dan
   apakah proses kita saat ini benar-benar menanganinya, atau kita hanya
   terus menanggapi insiden satu per satu saat terjadi?** Agregasikan data
   akar masalah Anda selama beberapa bulan terakhir dan cari pola yang
   dominan.

4. **Apakah cacat yang lolos pada kita pernah ditelusuri kembali ke area
   yang sudah ditandai berisiko oleh metrik kualitas internal kita
   (kompleksitas, cakupan, analisis statis)?** Hubungan ini memvalidasi
   apakah metrik Bagian 4 Anda benar-benar prediktif dalam konteks spesifik
   Anda, atau apakah metrik itu melewatkan mode kegagalan yang sungguh
   penting.

5. **Apakah proses klasifikasi cacat kita terasa aman, atau apakah para
   insinyur takut disalahkan saat melaporkan atau mengklasifikasikan cacat
   yang terkait dengan mereka?** Budaya yang rawan menyalahkan secara
   sistematis merusak data ini lewat pelaporan yang kurang dan klasifikasi
   yang longgar; jujurlah tentang budaya Anda saat ini.

6. **Apakah tingkat cacat yang lolos pada kita pernah membaik dengan
   mencurigakan cepat tanpa perubahan yang sepadan pada praktik pengujian
   atau tinjauan?** Seperti pada tingkat kegagalan perubahan (topik 2.10),
   ini adalah tanda paling jelas bahwa kriteria klasifikasi, bukan risiko
   sebenarnya, yang bergeser.

## Lensa sektor

**Startup.** Klasifikasi keparahan formal sering kali tidak diperlukan
ketika volume cacat kecil dan tim kecil dapat membahas tiap cacat secara
langsung. Kebiasaan yang layak diadopsi sejak dini adalah sekadar melacak
cacat secara konsisten sejak awal, bahkan secara informal, agar data
historis tersedia begitu tim cukup besar untuk membutuhkan analisis yang
lebih formal.

**Usaha kecil.** Skala keparahan yang sederhana dan dipakai bersama,
bahkan hanya tiga tingkat (kritis, mayor, minor), yang diterapkan secara
konsisten oleh siapa pun yang menangani dukungan dan triase bug, sudah
menangkap sebagian besar nilai topik ini tanpa memerlukan perangkat yang
canggih atau fungsi kualitas khusus.

**Perusahaan besar.** Konsistensi klasifikasi antartim adalah investasi
berdaya ungkit tertinggi di sini, karena standar yang tidak konsisten di
puluhan tim membuat perbandingan kualitas seluruh organisasi menjadi tidak
bermakna. Berinvestasilah pada kriteria klasifikasi yang terdokumentasi
dan berbasis contoh serta audit berkala, dan hubungkan cacat yang lolos
secara sistematis kembali ke sinyal kualitas internal Bagian 4 untuk
memvalidasi sinyal mana yang benar-benar prediktif bagi organisasi Anda.

**Pemerintahan.** Cacat yang lolos pada sistem yang menghadap publik atau
sistem perhitungan manfaat membawa bobot hukum dan kepercayaan publik
yang melampaui biaya rekayasanya. Perlakukan klasifikasi keparahan dengan
ketelitian khusus untuk cacat yang memengaruhi layanan yang dihadapi
warga, dan bersiaplah agar keputusan klasifikasi menghadapi pengawasan
eksternal, yang menjadi argumen kuat untuk kriteria yang terdokumentasi,
diaudit, dan konsisten, bukan penilaian ad hoc.

## Contoh

**Perusahaan besar.** Jumlah cacat yang lolos pada sebuah perusahaan
perangkat lunak berlangganan naik selama dua kuartal, dan kekhawatiran
awal tertuju pada angka mentahnya. Analisis berbobot keparahan
menunjukkan bahwa kenaikan itu hampir seluruhnya berupa masalah minor
yang kosmetik, bertepatan dengan desain ulang antarmuka baru-baru ini,
sementara cacat kritis dan mayor justru turun sedikit pada periode yang
sama. Analisis akar masalah atas lonjakan masalah minor itu menunjuk pada
celah dalam pengujian regresi visual khusus untuk komponen antarmuka yang
baru, perbaikan yang tertarget dan berbiaya rendah, yang akan terlewat
sepenuhnya andai tim bereaksi pada jumlah mentah tanpa bobot itu sebagai
krisis kualitas yang tak terdiferensiasi.

**Pemerintahan.** Sistem perhitungan manfaat sebuah dinas tunjangan
pengangguran negara bagian memiliki cacat yang lolos dan secara keliru
menolak sebagian kecil klaim yang sebenarnya memenuhi syarat selama
beberapa bulan sebelum terdeteksi. Investigasi akar masalah menemukan
bahwa cacat itu berasal dari area kode yang delapan belas bulan
sebelumnya sudah ditandai sebagai titik panas kompleksitas (topik 4.1,
topik 4.3) dalam tinjauan kualitas internal, tetapi titik panas itu tidak
pernah diprioritaskan untuk diperbaiki karena belum ada cacat yang
membuat risikonya konkret. Proses revisi dinas itu kini secara eksplisit
memberi bobot lebih tinggi pada area yang ditandai sebagai titik panas
dalam prioritas pengujian dan tinjauan, justru karena hubungan yang
terbukti dan tervalidasi antara sinyal kompleksitas internal dan risiko
cacat yang lolos yang nyata.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari melacak tingkat cacat yang lolos secara ketat, dengan
pembobotan keparahan dan analisis akar masalah, adalah kemampuan untuk
mengarahkan investasi kualitas ke tempat yang benar-benar akan mengurangi
kerugian yang dihadapi pelanggan, alih-alih bereaksi pada jumlah yang tak
terdiferensiasi yang mencampur masalah sepele dan parah tanpa pandang
bulu. Contoh perangkat lunak berlangganan di atas menunjukkan hal ini
dengan jelas: reaksi berbasis jumlah mentah akan memicu inisiatif kualitas
yang luas dan tidak terfokus, sedangkan tanggapan berbobot keparahan dan
berbasis akar masalah menemukan perbaikan yang spesifik, murah, dan
tertarget.

Total biaya kepemilikan mencakup disiplin klasifikasi (kriteria yang
konsisten, audit berkala) dan upaya pelacakan akar masalah, yang
keduanya terutama merupakan investasi proses, bukan biaya perangkat.
Investasi itu langsung terbayar lewat biaya kerugian pelanggan dan
penanganan insiden yang dapat dihindari dengan mengarahkan upaya kualitas
ke sumber risiko cacat lolos yang nyata dan tervalidasi.

## Anti-pola dan jebakan

- **Memperlakukan jumlah cacat mentah sebagai metriknya:** mencampuradukkan
  masalah sepele dan parah serta mengaburkan sinyal yang sebenarnya.
- **Klasifikasi keparahan yang tidak konsisten antartim:** membuat
  perbandingan antartim tidak bermakna dan mengundang pergeseran
  klasifikasi ke arah longgar.
- **Tidak ada pelacakan akar masalah:** mengubah jumlah menjadi angka tanpa
  nilai diagnostik, sehingga pola sistemik tetap tak terlihat.
- **Budaya pelaporan yang rawan menyalahkan:** merusak data lewat pelaporan
  yang kurang dan klasifikasi yang longgar, persis risiko paparan insentif
  yang diperingatkan topik 1.2.
- **Tidak pernah menghubungkan cacat yang lolos kembali ke sinyal kualitas
  internal:** melewatkan kesempatan untuk memvalidasi, atau membatalkan,
  metrik prediktif Bagian 4 terhadap hasil nyata.
- **Perbaikan yang mencurigakan cepat tanpa perubahan proses di
  baliknya:** tanda paling jelas bahwa kriteria klasifikasi, bukan risiko
  sebenarnya, yang bergeser.

## Model kematangan

- **Tingkat 1, Initiate (Memulai):** Cacat yang lolos dilacak, kalaupun
  ada, sebagai jumlah mentah tanpa pembobotan keparahan atau analisis akar
  masalah.
- **Tingkat 2, Develop (Mengembangkan):** Sebagian klasifikasi keparahan
  sudah ada, tetapi standarnya berbeda-beda antartim dan pelacakan akar
  masalah tidak konsisten.
- **Tingkat 3, Standardize (Menstandarkan):** Klasifikasi keparahan
  distandarkan dan didokumentasikan di seluruh organisasi, dengan
  pengategorian akar masalah yang diterapkan secara konsisten.
- **Tingkat 4, Manage (Mengelola):** Cacat yang lolos ditelusuri secara
  sistematis kembali ke sinyal kualitas internal untuk memvalidasi nilai
  prediktifnya, dan klasifikasi diaudit secara berkala demi konsistensi.
- **Tingkat 5, Orchestrate (Mengorkestrasi):** Organisasi dapat
  menunjukkan penurunan tingkat cacat yang lolos yang spesifik dan
  terukur, yang ditelusuri pada investasi kualitas yang tertarget dan
  berbasis akar masalah, dan divalidasi terhadap sinyal kualitas internal.

## Gagasan untuk diskusi

1. Apakah cacat lolos teratas kita kuartal lalu akan diklasifikasikan dengan cara yang sama oleh tim lain?
2. Apa akar masalah paling umum dari cacat yang lolos pada kita, dan apakah kita benar-benar menanganinya?
3. Pernahkah cacat yang lolos ditelusuri kembali ke area yang sudah ditandai oleh metrik internal kita?
4. Apakah tim kita merasa aman melaporkan dan mengklasifikasikan dengan jujur cacat yang mereka sebabkan?
5. Apa yang akan diungkap oleh tampilan berbobot keparahan atas jumlah cacat kita saat ini, yang disembunyikan oleh jumlah mentah?

## Poin-poin utama

- Tingkat cacat yang lolos adalah **kartu skor akhir** untuk praktik
  kualitas internal; tingkat yang naik meskipun metrik Bagian 4 kuat
  berarti metrik-metrik itu tidak menangkap apa yang penting.
- **Beri bobot menurut keparahan**, dengan skala klasifikasi yang
  konsisten, terdokumentasi, dan diaudit, jangan pernah hanya jumlah
  mentah.
- Lacak **akar masalah**, bukan hanya jumlah dan keparahan, untuk mengubah
  metrik ini menjadi alat diagnostik yang sesungguhnya.
- **Hubungkan cacat yang lolos kembali ke sinyal kualitas internal**
  (kompleksitas, cakupan, analisis statis) untuk memvalidasi apakah
  sinyal-sinyal itu benar-benar prediktif.
- Waspadai **budaya yang rawan menyalahkan** yang merusak pelaporan dan
  klasifikasi lewat pelaporan yang kurang dan pergeseran ke arah longgar.

## Referensi dan bacaan lanjutan

- *Site Reliability Engineering*, by Betsy Beyer, Chris Jones, Jennifer
  Petoff, and Niall Richard Murphy, eds. (praktik postmortem tanpa
  menyalahkan yang berlaku untuk analisis akar masalah cacat).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (hubungan antara praktik pengiriman dan hasil
  kualitas).
- *Code Complete*, by Steve McConnell (praktik klasifikasi cacat dan
  analisis akar masalah).
- *The Field Guide to Understanding Human Error*, by Sidney Dekker
  (kerangka sistemik tanpa menyalahkan dalam investigasi kegagalan).
