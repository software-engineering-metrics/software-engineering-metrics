# 1.3 Hasil di atas keluaran: memilih apa yang diukur

## Gambaran umum dan motivasi

Setiap metrik rekayasa jatuh ke dalam salah satu dari tiga kategori, dan
mencampuradukkannya adalah mode kegagalan paling umum kedua dalam buku ini,
setelah mengabaikan sama sekali [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
**Metrik masukan (input)** mengukur upaya yang dikeluarkan: jam kerja insinyur,
dolar yang digelontorkan, story point yang dikomitmenkan. **Metrik keluaran
(output)** mengukur apa yang dihasilkan sistem: fitur yang dikirim, pull
request yang di-merge, tiket yang ditutup. **Metrik hasil (outcome)** mengukur
perubahan yang benar-benar penting: pendapatan yang dipertahankan, insiden
yang dihindari, waktu yang dihemat bagi pengguna. Tim cenderung tertarik ke
masukan dan keluaran karena mudah dihitung dan sepenuhnya berada dalam kendali
tim. Nilai, hampir selalu, berada di hasil, yang lebih lambat muncul, lebih
berisik diukur, dan lebih sulit diatribusikan ke pekerjaan satu tim mana pun.

Topik ini membahas cara melawan tarikan itu dengan sengaja. Dasbor yang
dibangun sepenuhnya dari masukan dan keluaran bisa tampak sibuk secara
mengesankan sambil tidak menghasilkan nilai nyata sama sekali: tim bisa
mengirim lusinan fitur yang tak dipakai siapa pun, menutup ratusan tiket yang
dibuka kembali seminggu kemudian, atau memenuhi setiap estimasi story point
sementara hasil sebenarnya dari produk, retensi, kepuasan, pendapatan, tetap
datar atau menurun. Kesibukan itu tidak muncul sebagai masalah di dasbor yang
hanya berisi keluaran, karena dasbor semacam itu memang tidak dibangun untuk
melihatnya.

Pada skala perusahaan besar dan pemerintahan, pembedaan ini menentukan apakah
pimpinan bisa membedakan tim yang produktif dari tim yang sekadar aktif.
Sebuah divisi bisa mencatat angka keluaran yang sangat baik selama
bertahun-tahun, fitur yang dikirim, sprint yang ditutup, sementara hasil yang
benar-benar dipedulikan penyandang dana atau badan legislatif, pendapatan yang
dipertahankan, waktu tunggu warga yang berkurang, diam-diam terkikis di
bawahnya. "Kami menyelesaikan peta jalan" bukanlah klaim yang sama dengan
"peta jalan itu membuat keadaan lebih baik," dan hanya kumpulan metrik yang
diberi bobot ke hasil yang bisa membedakan keduanya.

## Prinsip utama

- **Masukan dan keluaran adalah proksi; hasil adalah hal itu sendiri.** Beri
  bobot kumpulan metrik Anda ke hasil di mana pun Anda bisa menjangkaunya.
- **Kemudahan pengukuran bukan alasan untuk mengukur sesuatu.** Hal yang
  paling mudah dihitung biasanya masukan dan keluaran, bukan karena paling
  penting, melainkan karena secara mekanis sederhana untuk ditangkap.
- **Atribusi makin sulit seiring Anda bergerak ke arah hasil.** Terimalah
  pertukaran itu dengan sengaja alih-alih mundur ke keluaran karena hasil
  lebih sulit diatribusikan.
- **Tim bisa mengendalikan masukan dan keluarannya tetapi hanya bisa
  memengaruhi hasil.** Rancang akuntabilitas sesuai itu: minta tim
  bertanggung jawab atas apa yang benar-benar bisa mereka kendalikan, dan
  lacak hasil sebagai sinyal bersama lintas tim.
- **Satu hasil bintang utara (north-star), dengan sekumpulan kecil
  penggerak, mengalahkan dinding petak keluaran.** Cakupan semestinya datang
  dari struktur, bukan dari banyaknya dasbor semata.

## Rekomendasi

### Klasifikasikan setiap metrik sebelum Anda mengadopsinya

Untuk setiap metrik kandidat, tanyakan masuk ke kategori mana dari ketiganya.
"Pull request yang di-merge per minggu" adalah keluaran. "Persentase pull
request yang di-merge dan menyebabkan insiden produksi dalam seminggu" lebih
dekat ke hasil, karena mengukur konsekuensi, bukan volume. Klasifikasi ini
memakan waktu tiga puluh detik dan seharusnya wajib sebelum metrik
ditambahkan ke dasbor tim atau organisasi mana pun, karena ini cara tercepat
untuk menangkap dasbor yang diam-diam terisi keluaran yang mudah dihitung
sambil mengira mengukur nilai.

### Bangun pohon metrik di bawah satu hasil

Jangan melacak daftar yang datar. Susun metrik sebagai **pohon metrik**
(kadang disebut pohon KPI): metrik hasil teratas yang diuraikan menjadi
penggerak yang menyuapinya secara kausal atau matematis, turun ke ukuran
keluaran dan masukan operasional yang benar-benar dimiliki masing-masing tim.
Ketika hasil teratas bergerak, pohon itu memberi tahu penggerak tingkat bawah
mana yang perlu diselidiki, mengubah "angkanya turun" menjadi "langkah
spesifik dalam pipeline inilah penyebabnya." Tetapkan satu **metrik bintang
utara (north-star)** di puncak di mana pun ranah Anda mendukungnya: ukuran
yang paling baik menangkap nilai yang dihantarkan, frekuensi deployment
berpasangan dengan tingkat kegagalan perubahan untuk tim platform, atau
penggunaan aktif mingguan atas fitur inti untuk tim produk.

### Beri bobot pada hasil dalam tinjauan, bukan hanya di dasbor

Pohon metrik hanya sebaik cara ia dipakai dalam praktik. Dalam tinjauan
sprint, tinjauan bisnis kuartalan, dan pembaruan untuk pimpinan, dahulukan
angka tingkat hasil dan pakai metrik keluaran dan masukan di bawahnya hanya
untuk menjelaskan pergerakan, bukan menggantikannya. Tim yang melaporkan
"kami menutup 40 tiket sprint ini" tanpa konteks hasil apa pun tidak memberi
tahu Anda apakah pekerjaan itu penting; tim yang melaporkan "cacat yang lolos
turun 30% dan inilah investasi pengujian yang mendorongnya" memberi tahu Anda
sesuatu yang nyata.

### Terima umpan balik yang lebih lambat untuk metrik hasil, dan pasangkan dengan indikator pendahulu yang lebih cepat

Metrik hasil sering bersifat tertinggal (lagging): ia memastikan hasil setelah
cukup waktu berlalu untuk yakin. Jeda itu adalah biaya yang nyata, karena
menunda pembelajaran. Pasangkan setiap metrik hasil dengan setidaknya satu
indikator pendahulu (leading indicator), metrik yang bergerak lebih awal dan
memprediksi hasil, agar tim bisa mengarahkan sebelum angka yang lambat dan
otoritatif itu akhirnya tiba. Frekuensi deployment adalah indikator pendahulu
untuk hasil pengiriman; tren cacat lolos yang naik adalah indikator pendahulu
untuk hasil keandalan yang akan datang. Gunakan indikator pendahulu untuk
bertindak lebih awal dan metrik hasil yang tertinggal untuk memastikan Anda
benar.

## Pertukaran: kelebihan dan kekurangan

| Kategori | Kelebihan | Kekurangan |
| --- | --- | --- |
| Metrik masukan | Sepenuhnya dalam kendali tim, mudah dihitung | Kaitan terlemah dengan nilai sebenarnya; mudah dimanipulasi lewat volume |
| Metrik keluaran | Mudah dihitung, kepemilikan jelas, umpan balik cepat | Menghargai aktivitas ketimbang dampak; bisa naik sementara nilai turun |
| Metrik hasil | Langsung mencerminkan apa yang penting; sulit dimanipulasi dengan murah | Lambat, berisik, dan sulit diatribusikan ke satu tim |
| Struktur pohon metrik | Menghubungkan pekerjaan harian dengan nilai strategis; membantu diagnosis | Membutuhkan kerja analitis yang sungguh-sungguh untuk membangun dan memeliharanya dengan benar |

Ketegangan utamanya adalah **keterkendalian versus nilai**. Masukan dan
keluaran sepenuhnya dalam kendali tim, yang membuatnya menggoda untuk dijadikan
dasar pertanggungjawaban tim; hasil membawa nilai tetapi hanya sebagian berada
dalam pengaruh satu tim, karena fitur yang bagus pun masih bisa gagal karena
alasan di luar rekayasa sama sekali. Atasi dengan meminta tim bertanggung
jawab atas masukan dan keluaran yang sepenuhnya mereka kendalikan, sambil
melacak hasil sebagai sinyal bersama yang dimiliki seluruh organisasi, dihubungkan
lewat pohon metrik yang eksplisit, bukan dibiarkan menjadi celah tak
terjelaskan antara "kami sudah mengerjakannya" dan "apakah itu membantu."

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk setiap metrik di dasbor kita sekarang, apakah ia masukan,
   keluaran, atau hasil, dan apakah keseimbangan di antara ketiganya
   menceritakan kisah yang jujur?** Sebagian besar dasbor, jika diaudit dengan
   jujur, ternyata hampir seluruhnya masukan dan keluaran, karena itulah yang
   dilaporkan perangkat secara bawaan. Klasifikasikan setiap petak dan hitung
   pembagiannya; dasbor tanpa petak hasil sama sekali sedang mengukur
   aktivitas dan menyajikannya sebagai kinerja.

2. **Apa metrik hasil bintang utara tunggal kita, dan bisakah kita
   menelusurinya turun lewat pohon metrik ke sesuatu yang benar-benar dimiliki
   setiap tim?** Tanpa struktur penghubung ini, angka teratas yang bergerak
   tidak memberi petunjuk ke mana harus mencari, dan tim tidak bisa melihat
   bagaimana metrik keluaran harian mereka terhubung dengan sesuatu yang
   penting. Bawalah metrik teratas Anda saat ini, jika ada, dan coba bangun
   pohonnya langsung.

3. **Di mana kita meminta pertanggungjawaban tim atas hasil yang hanya bisa
   mereka pengaruhi, bukan kendalikan?** Ini sumber umum frustrasi dan
   manipulasi diam-diam, karena tim yang dihukum atas hasil yang dibentuk
   faktor di luar kendalinya punya segala insentif untuk melindungi diri
   alih-alih memperbaiki sistem yang sebenarnya. Identifikasi
   ketidaksesuaian ini dan sesuaikan akuntabilitasnya atau tambahkan tuas
   yang hilang.

4. **Indikator pendahulu apa yang kita punya untuk setiap metrik hasil kita
   yang tertinggal, dan seberapa jauh di muka ia memprediksinya?** Kumpulan
   metrik yang murni tertinggal berarti Anda baru tahu bahwa Anda keliru
   setelah terlambat untuk mengubah arah dengan murah. Bawalah metrik hasil
   Anda dan periksa apakah indikator pendahulu yang sungguhan ada untuk
   masing-masing, atau apakah Anda terbang buta di antara periode pelaporan.

5. **Seberapa banyak dari yang kita rayakan dalam tinjauan dan retrospektif
   adalah keluaran ("kami mengirim X") dibanding hasil ("X mengubah Y menjadi
   lebih baik")?** Bahasa yang dipakai tim untuk merayakan pekerjaan membentuk
   apa yang mereka optimalkan seiring waktu, sering lebih daripada dasbor.
   Dengarkan rapat tinjauan Anda sendiri selama satu sprint dan hitung
   pembagiannya dengan jujur.

6. **Jika metrik keluaran teratas kita berlipat ganda dalam semalam, apakah
   metrik hasil kita pasti membaik, atau bisa memburuk?** Eksperimen pikiran
   ini menyingkap metrik keluaran yang telah terputus dari, atau bahkan secara
   aktif bertentangan dengan, hasil yang seharusnya dilayaninya, seperti
   volume fitur yang menambah beban pemeliharaan lebih cepat daripada
   menambah adopsi.

## Lensa sektor

**Startup.** Pilih satu hasil, biasanya proksi untuk apakah pelanggan terus
mendapat nilai, seperti retensi mingguan atau aktivasi, dan perlakukan sebagai
bintang utara Anda sejak hari pertama. Tahan tarikan ke metrik keluaran
pajangan seperti jumlah kumulatif fitur, yang menggoda untuk dilaporkan
kepada investor tetapi tidak memberi tahu apakah produk benar-benar berfungsi
bagi siapa pun.

**Usaha kecil.** Perangkat Anda yang ada, titik penjualan, meja dukungan,
analitik, biasanya sudah melaporkan angka yang dekat dengan hasil, tingkat
pembelian ulang, tingkat tiket dibuka kembali. Pakailah itu alih-alih
membangun instrumentasi hasil khusus yang kapasitas pemeliharaannya tidak
Anda miliki, dan tahan godaan kembali ke hitungan aktivitas mentah hanya
karena itu tampilan bawaan.

**Perusahaan besar.** Mode kegagalan dominan adalah portofolio tim yang
masing-masing mengoptimalkan metrik keluaran lokal yang tidak menjumlah
menjadi hasil organisasi yang koheren. Bangun pohon metrik dengan sengaja,
standarkan definisi hasil di seluruh unit bisnis, dan wajibkan setiap
inisiatif besar menyatakan hipotesis hasilnya sebelum didanai, bukan hanya
rencana keluarannya.

**Pemerintahan.** Badan pengawas dan publik makin paham akan perbedaan antara
"menyelesaikan pernyataan kerja" dan "memperbaiki hasil," dan laporan yang
hanya berisi keluaran mengundang persis pengawasan itu. Definisikan
keberhasilan sebagai hasil yang menyentuh warga (waktu tunggu, tingkat
galat, kepuasan) di mana pun secara hukum dan praktis mungkin, dan bersikaplah
eksplisit ketika hanya metrik keluaran yang tersedia serta alasannya.

## Contoh

**Perusahaan besar.** Divisi rekayasa sebuah perusahaan logistik melaporkan
hitungan "fitur yang dikirim per kuartal" yang terus naik selama dua tahun,
sementara skor kepuasan pelanggan inti perusahaan diam-diam mendatar. VP
rekayasa yang baru membangun pohon metrik yang berakar pada tingkat
pengiriman tepat waktu, hasil bisnis yang sebenarnya, diuraikan lewat waktu
singgah di hub dan keberhasilan last-mile hingga ke keluaran rekayasa tingkat
tim. Dalam satu siklus pelaporan menjadi jelas bahwa beberapa tim berkeluaran
tinggi mengirim fitur di area yang tidak berdampak terukur pada metrik
bintang utara, dan investasi bergeser ke penggerak yang menurut pohon itu
benar-benar penting.

**Pemerintahan.** Tim digital sebuah layanan kesehatan nasional melaporkan
"modul yang diserahkan terhadap pernyataan kerja" untuk program modernisasi
rekam medis pasien selama bertahun-tahun. Komite pengawas mengajukan
pertanyaan berbeda: apakah dokter dan perawat menghabiskan lebih sedikit waktu
untuk entri data administratif. Tim memasang metrik hasil secara retroaktif,
median menit waktu administratif per pertemuan pasien, dan menemukan bahwa
modul-modul awal justru menambah waktu ini karena gesekan alur kerja,
walaupun memenuhi setiap tonggak pengiriman. Modul-modul berikutnya dirancang
ulang langsung di seputar metrik hasil itu, dan pelaporan publik program
bergeser dari daftar periksa pengiriman menjadi perbandingan hasil sebelum dan
sesudah.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari pembobotan hasil adalah pemborosan yang terhindarkan:
organisasi yang bisa melihat, hampir seketika, bahwa aliran keluaran tidak
menggerakkan hasil apa pun dapat mengalihkan investasi itu sebelum satu siklus
anggaran penuh terpakai untuk mencari tahu dengan cara yang pahit. Biaya
tersembunyi yang dominan di organisasi rekayasa besar bukanlah investasi yang
kurang, melainkan pekerjaan yang dieksekusi dengan baik yang seharusnya tidak
pernah didanai karena terputus dari hasil nyata mana pun, dan dasbor yang
hanya berisi keluaran sama sekali tidak bisa melihat keterputusan itu.

Total biaya kepemilikan pengukuran hasil lebih tinggi daripada pengukuran
keluaran, karena hasil memang lebih sulit didefinisikan, diatribusikan, dan
diinstrumentasi, dan membangun pohon metrik yang sungguhan membutuhkan upaya
analitis yang disengaja, bukan menerima apa pun yang diekspor perangkat secara
bawaan. Biaya itu layak dibayar untuk setiap inisiatif di atas ukuran yang
sederhana, karena alternatifnya, menemukan setelah kejadian bahwa setahun
keluaran yang dilaporkan dengan percaya diri tidak menghasilkan nilai nyata,
jauh lebih mahal daripada analisis di muka.

## Anti-pola dan jebakan

- **Dasbor yang seluruhnya petak keluaran:** mengukur aktivitas dan
  menyajikannya sebagai kinerja.
- **Meminta tim bertanggung jawab penuh atas hasil yang tidak bisa
  dikendalikannya:** menumbuhkan frustrasi dan mengundang manipulasi untuk
  melindungi diri dari tudingan yang tidak adil.
- **Tidak ada indikator pendahulu untuk hasil yang tertinggal:** tim baru
  tahu bahwa ia keliru setelah terlalu mahal untuk diperbaiki.
- **Merayakan bahasa keluaran dalam tinjauan sambil mengaku menghargai
  hasil:** prioritas yang dinyatakan dan insentif yang dijalani berselisih,
  dan insentif yang dijalani menang.
- **Daftar metrik yang datar tanpa struktur pohon:** angka teratas yang
  bergerak tidak memberi petunjuk ke mana harus mencari.
- **Menganggap pengukuran hasil terlalu sulit untuk dicoba:** membuat
  organisasi kembali secara permanen ke masukan dan keluaran yang mudah
  dihitung.

## Model kematangan

- **Tingkat 1, Memulai (Initiate):** Metrik hampir seluruhnya masukan dan
  keluaran; tak seorang pun bisa menyebutkan metrik hasil organisasi atau
  menelusuri garis ke sana.
- **Tingkat 2, Mengembangkan (Develop):** Beberapa tim telah mengidentifikasi
  metrik hasil secara informal, tetapi tidak ada pohon metrik bersama dan
  tidak ada indikator pendahulu yang konsisten.
- **Tingkat 3, Menstandarkan (Standardize):** Pohon metrik terdokumentasi
  menghubungkan hasil bintang utara bersama hingga ke keluaran milik tim,
  diterapkan secara konsisten di seluruh organisasi.
- **Tingkat 4, Mengelola (Manage):** Indikator pendahulu dan indikator
  tertinggal sama-sama dilacak dan ditinjau bersama; tim diminta
  bertanggung jawab hanya atas apa yang dikendalikannya, dan pengukuran hasil
  dibekali sumber daya secara aktif.
- **Tingkat 5, Mengorkestrasi (Orchestrate):** Pengukuran hasil terintegrasi
  langsung ke keputusan pendanaan dan prioritisasi; organisasi rutin
  mengalihkan investasi dari pekerjaan berkeluaran tinggi dan berhasil rendah
  sebelum satu siklus anggaran penuh berlalu.

## Gagasan untuk diskusi

1. Sebutkan metrik hasil terpenting organisasi kita. Bisakah semua orang menyepakatinya?
2. Apa investasi terbesar kita saat ini pada keluaran yang belum bisa kita telusuri ke hasil apa pun?
3. Di mana struktur akuntabilitas kita menghukum tim atas hasil yang tidak bisa dikendalikannya?
4. Seperti apa dasbor kita jika kita menghapus setiap petak keluaran murni?
5. Berapa lama kita saat ini butuh untuk mengetahui apakah fitur yang dikirim benar-benar membantu?

## Poin-poin utama

- Klasifikasikan setiap metrik sebagai **masukan, keluaran, atau hasil**, dan
  beri bobot kumpulan Anda secara sengaja ke arah hasil.
- Bangun **pohon metrik** di bawah satu **metrik bintang utara** agar angka
  teratas yang bergerak menunjuk ke sebuah penyebab.
- Minta tim bertanggung jawab atas apa yang **mereka kendalikan** (masukan,
  keluaran); lacak hasil sebagai sinyal bersama yang dipengaruhi seluruh
  organisasi bersama-sama.
- Pasangkan setiap **metrik hasil** yang tertinggal dengan **indikator
  pendahulu** yang lebih cepat agar Anda bisa mengarahkan sebelum angka yang
  lambat memastikan Anda keliru.
- Dasbor yang hanya berisi keluaran mengukur aktivitas dan menyebutnya
  kinerja; perlakukan itu sebagai tanda peringatan, bukan penghibur.

## Referensi dan bacaan lanjutan

- *Accelerate: The Science of Lean Software and DevOps*, oleh Nicole Forsgren,
  Jez Humble, dan Gene Kim (pengukuran pengiriman berbasis hasil).
- *Lean Analytics*, oleh Alistair Croll dan Benjamin Yoskovitz (One Metric
  That Matters dan pembedaan masukan/keluaran/hasil dalam konteks startup).
- *Measure What Matters*, oleh John Doerr (penetapan sasaran berorientasi
  hasil dan penekanan kerangka OKR pada hasil ketimbang aktivitas).
- *The Lean Startup*, oleh Eric Ries (metrik yang bisa ditindaklanjuti versus
  metrik pajangan, dan validasi hasil).
- *Key Performance Indicators*, oleh David Parmenter (membangun struktur
  pohon KPI atau metrik di bawah ukuran bintang utara).
