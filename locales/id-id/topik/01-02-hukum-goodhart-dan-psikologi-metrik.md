# 1.2 Hukum Goodhart dan psikologi metrik

## Gambaran umum dan motivasi

[Hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law), dinamai
menurut ekonom Charles Goodhart, biasanya dinyatakan begini: ketika sebuah
ukuran menjadi target, ia berhenti menjadi ukuran yang baik. Pengamatan asli
Goodhart pada 1975 menyangkut kebijakan moneter, tetapi pernyataan ulang oleh
antropolog Marilyn Strathern di kemudian hari adalah versi yang sebenarnya
dibutuhkan tim perangkat lunak, dan kalimat itulah yang menjadi dasar seluruh
buku ini. Setiap metrik di setiap topik berikutnya, frekuensi deployment,
cakupan pengujian, skor kepuasan, membawa risiko ini, dan setiap rekomendasi
dalam buku ini, dalam satu bentuk atau lainnya, adalah strategi untuk
mengelolanya.

Mekanismenya tidak misterius. Orang menanggapi insentif, dan metrik yang
dilekatkan pada imbalan, tinjauan, atau reputasi adalah insentif, entah ada
yang memaksudkannya begitu atau tidak. Begitu sebuah tim tahu "frekuensi
deployment" sedang diawasi, cara termurah untuk menggerakkan angka itu tidak
selalu cara yang dimaksudkan: pecah satu perubahan bermakna menjadi lima
deployment sepele, dan angkanya naik sementara tidak ada yang benar-benar
membaik. Ini bukan cerita tentang pelaku jahat. Insinyur biasa yang
bermaksud baik menanggapi insentif yang dirancang buruk persis dengan cara
ini, karena insentif, bukan niat di baliknya, yang membentuk perilaku di
bawah tekanan.

Bagi organisasi besar, taruhannya lebih tinggi karena jarak antara perancang
metrik dan orang yang perilakunya dibentuk metrik itu tumbuh seiring skala.
Pemimpin tim yang membangun metrik untuk timnya sendiri yang beranggotakan
delapan orang bisa mengawasi manipulasi secara langsung dan mengoreksi arah
dengan cepat. Metrik yang diluncurkan ke seluruh divisi berisi enam ratus
orang, atau dipublikasikan dalam laporan kinerja pemerintah yang dibaca
parlemen, menempuh lapisan-lapisan orang yang tidak pernah bertemu penulisnya
dan punya segala alasan untuk menganggap bunyi harfiah metrik sebagai tujuan.
Distorsi menumpuk seiring jarak, dan itulah persis mengapa topik ini, bukan
topik yang lebih belakang, adalah tempat buku ini menaruh pusat gravitasinya.

## Prinsip utama

- **Anggaplah setiap metrik yang diberi insentif akan dimanipulasi.** Rancang
  untuk menghadapinya sejak versi pertama, bukan setelah distorsi ditemukan.
- **Manipulasi itu rasional, bukan jahat.** Orang menanggapi insentif yang
  Anda bangun dengan wajar; menyalahkan mereka tidak memperbaiki apa pun.
- **Jarak dari pemilik metrik meningkatkan risiko distorsi.** Semakin jauh
  sebuah angka menempuh perjalanan dari orang yang memahami maksudnya,
  semakin ia menjadi bunyi harfiah aturan, bukan semangatnya.
- **Rasio dan rentang lebih tahan manipulasi daripada hitungan mentah.**
  Hitungan mentah menghargai volume; rasio yang dipilih dengan baik menghargai
  perilaku sebenarnya yang Anda inginkan.
- **Pagar pengaman bukan pilihan pada metrik yang diberi insentif.** Setiap
  metrik yang Anda kaitkan dengan imbalan membutuhkan metrik pendamping yang
  tidak boleh memburuk.

## Rekomendasi

### Klasifikasikan setiap metrik menurut paparan insentifnya

Sebelum memublikasikan metrik di tempat yang terlihat, tanyakan langsung:
apakah imbalan, tinjauan, reputasi, atau anggaran seseorang bergantung pada
angka ini bergerak ke arah tertentu? Jika ya, ia adalah metrik yang diberi
insentif dan membutuhkan pagar pengaman (di bawah) sebelum diluncurkan. Jika
tidak, ia adalah metrik diagnostik (topik 1.1) dan membawa risiko manipulasi
yang lebih rendah, meski tidak pernah nol, karena orang tetap bisa membentuk
angka yang sekadar mereka duga akan dijadikan dasar penilaian kelak, bahkan
tanpa insentif formal yang melekat hari ini.

### Pilih rasio, laju, dan kohort ketimbang hitungan mentah

Hitungan mentah seperti "tiket yang ditutup" bisa dimanipulasi dengan
mengerjakan lebih banyak hal bernilai rendah. Rasio seperti "persentase tiket
yang diselesaikan pada kontak pertama" justru menghargai perilaku
mendasarnya, bukan volumenya. Sebuah **kohort**, kelompok yang ditentukan oleh
titik awal bersama seperti semua deployment dalam minggu tertentu, mencegah
tren buruk yang baru terjadi bersembunyi di dalam agregat jangka panjang yang
tampak menyenangkan. Di mana pun Anda memilih antara hitungan dan laju yang
menangkap perilaku mendasar yang sama, pilih laju.

### Pasangkan setiap metrik yang diberi insentif dengan pagar pengaman

**Metrik pagar pengaman (guardrail)** adalah metrik pendamping yang tidak
boleh memburuk selagi metrik utama membaik. Frekuensi deployment berpasangan
dengan tingkat kegagalan perubahan; lead time berpasangan dengan tingkat cacat
yang lolos; waktu penanganan tim dukungan berpasangan dengan kepuasan
pelanggan. Pagar pengaman inilah yang membuat manipulasi murah tampak mahal:
tim yang memperbaiki angka yang diberi insentif dengan merusak pagar
pengamannya akan tertangkap oleh pemasangan itu, bukan oleh keberuntungan.
Rancang pagar pengaman bersamaan dengan metrik utama, jangan pernah sebagai
renungan susulan setelah manipulasi ditemukan.

### Waspadai empat pola manipulasi klasik

Distorsi di bawah hukum Goodhart cenderung jatuh ke dalam sedikit bentuk yang
dapat dikenali. **Manipulasi ambang batas** mengoptimalkan tepat sampai target
lalu berhenti (target cakupan pengujian 95% menghasilkan pengujian sepele
untuk mencapai persis 95%, bukan cakupan yang sesungguhnya). **Manipulasi
definisi** mengubah apa yang dihitung, bukan apa yang terjadi (mendefinisikan
ulang "selesai" untuk mengecualikan kasus sulit). **Manipulasi waktu**
menggeser kapan pekerjaan dicatat, bukan kapan pekerjaan itu terjadi
(menumpuk deployment tepat sebelum jendela pelaporan ditutup). **Manipulasi
substitusi** memenuhi bunyi harfiah metrik sambil meninggalkan maksudnya
(memecah satu perubahan nyata menjadi banyak perubahan sepele untuk
menggelembungkan frekuensi deployment). Menyebutkan pola-pola ini kepada tim
Anda secara eksplisit membuatnya jauh lebih mudah dikenali ketika muncul di
angka Anda sendiri.

### Pisahkan pengukuran dari imbalan sedapat mungkin

Pagar pengaman terkuat justru bersifat struktural: lepaskan metrik dari
imbalan individu. Metrik yang dipakai murni untuk memahami sistem, tanpa gaji,
penilaian, atau kedudukan siapa pun yang bergantung pada arahnya, menghadapi
tekanan manipulasi yang jauh lebih lemah daripada yang terkait evaluasi.
Inilah mengapa pembedaan diagnostik-versus-evaluatif dari topik 1.1 begitu
penting dalam praktik: menjaga metrik tetap diagnostik sering lebih murah dan
lebih efektif daripada rekayasa pagar pengaman sebanyak apa pun yang
diterapkan belakangan.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Hitungan mentah | Mudah dihitung dan dijelaskan | Sangat mudah dimanipulasi lewat volume |
| Rasio dan laju | Menghargai perilaku yang tepat, tahan manipulasi volume | Bisa menyembunyikan masalah penyebut yang menyusut |
| Pemasangan pagar pengaman | Membuat manipulasi murah tampak mahal | Menggandakan metrik yang harus didefinisikan, dimiliki, dan dipelihara |
| Hanya diagnostik (tanpa imbalan individu) | Tekanan manipulasi terendah dari semua opsi | Tuas motivasi langsung yang lebih lemah bagi pimpinan |
| Metrik yang sangat diberi insentif | Respons perilaku yang kuat dan cepat | Risiko distorsi tinggi, sering dalam satu siklus pelaporan |

Ketegangan utamanya adalah **daya motivasi versus risiko distorsi**. Metrik
yang menggerakkan perilaku paling cepat, mengaitkan angka langsung dengan
imbalan, justru yang paling terpapar hukum Goodhart. Atasi ketegangan ini
dengan mencadangkan insentif yang kuat untuk metrik hasil yang benar-benar
sulit dimanipulasi dengan murah, dan dengan memasangkan apa pun yang Anda beri
insentif dengan pagar pengaman yang dirancang bersamaan, bukan ditempelkan
setelah distorsi pertama muncul.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk setiap metrik yang imbalan seseorang bergantung padanya, apa cara
   termurah untuk memanipulasinya, dan apakah kita akan menangkap manipulasi
   itu hari ini?** Duduklah dan rancang dengan sengaja celah eksploitasi untuk
   setiap angka yang diberi insentif di dasbor Anda: bagaimana tim yang
   rasional dan bermaksud baik akan membuat ini tampak bagus tanpa
   mengerjakan pekerjaan yang mendasarinya? Jika Anda tidak bisa menyebutkan
   cara untuk menangkap manipulasi itu, Anda belum siap memberi insentif pada
   metrik tersebut. Latihan ini tidak nyaman, dan ketidaknyamanan itulah
   intinya.

2. **Metrik kita yang mana yang sudah bergeser ke salah satu dari empat pola
   manipulasi, manipulasi ambang batas, definisi, waktu, atau substitusi,
   tanpa ada yang menunjukkannya?** Distorsi jarang mengumumkan dirinya; ia
   muncul sebagai angka yang tampak sangat bagus sementara keluhan, insiden,
   atau umpan balik pelanggan yang mendasarinya bercerita lain. Telusuri
   dasbor Anda terhadap setiap pola dengan menyebut namanya dan jujurlah
   tentang kecocokannya.

3. **Apakah setiap metrik yang diberi insentif di dasbor kita punya pagar
   pengaman pendamping, dan apakah pagar pengaman itu dirancang bersamaan
   dengan metriknya?** Pagar pengaman yang ditambahkan hanya setelah manipulasi
   ditemukan adalah perbaikan, bukan pilihan desain, dan biasanya datang
   terlambat untuk mencegah putaran pertama kerusakan kepercayaan. Audit
   metrik Anda yang diberi insentif secara khusus untuk pemasangan ini.

4. **Seberapa jauh metrik ini menempuh perjalanan dari orang yang memahami
   maksudnya sebelum sampai ke orang yang perilakunya dibentuknya?** Metrik
   yang dibangun tim platform dan dikonsumsi tiga lapisan manajemen jauhnya,
   atau dipublikasikan dalam laporan publik yang dibaca orang yang tidak
   pernah melihat instrumentasinya, jauh lebih terpapar manipulasi bunyi-bukan-semangat
   daripada metrik yang dirancang tim untuk dirinya sendiri. Petakan jarak itu
   untuk metrik Anda yang paling berkonsekuensi.

5. **Pernahkah kita mencabut insentif dari sebuah metrik setelah menemukan
   bahwa metrik itu dimanipulasi, dan berapa harga kepercayaan yang harus
   kita bayar untuk memperbaikinya?** Organisasi sering menemukan hukum
   Goodhart dengan cara yang pahit, setelah satu kuartal atau setahun perilaku
   terdistorsi, dan perbaikannya lebih mahal daripada pencegahannya. Bawalah
   insiden nyata, jika ada, dan petik pelajarannya secara eksplisit alih-alih
   diam-diam melanjutkan.

6. **Di mana kita menganggap manipulasi sebagai masalah integritas pribadi,
   bukan tanggapan rasional terhadap insentif yang dirancang buruk?**
   Menyalahkan individu karena menanggapi insentif yang Anda bangun secara
   terduga jarang memperbaiki apa pun dan sering merusak kepercayaan lebih
   jauh. Bingkai ulang setiap insiden manipulasi yang Anda ingat sebagai
   masalah desain pada metrik, bukan masalah karakter pada orangnya, dan
   tanyakan perancangan ulang apa yang akan mencegahnya.

## Lensa sektor

**Startup.** Dengan tim yang sangat kecil, pagar pengaman tercepat adalah
percakapan langsung: semua orang bisa melihat angka dan langsung bertanya
"tunggu, kenapa itu melonjak." Risiko sebenarnya adalah pendiri yang mengaitkan
metrik dengan narasi penggalangan dana (tumbuh dengan segala cara) tanpa
pagar pengaman pendamping, karena investor luar menerapkan persis jenis
tekanan yang jauh dan bertaruhan tinggi yang membuat manipulasi menggoda.

**Usaha kecil.** Perangkat siap pakai sering datang dengan dasbor bawaan yang
dibangun di sekitar hitungan (tiket yang ditutup, panggilan yang ditangani)
karena hitungan mudah dihitung. Ubah secara aktif ini menjadi laju di mana
pun perangkat mengizinkannya, dan tahan keinginan mengaitkan satu angka pun
dengan bonus atau tinjauan tanpa lebih dulu mengidentifikasi pagar
pengamannya.

**Perusahaan besar.** Jarak adalah risiko dominan: metrik yang dirancang tim
platform untuk diagnosis internal diambil tiga lapisan manajemen kemudian dan
diubah menjadi KPI yang tak akan dikenali siapa pun yang membangunnya. Atur
hal ini secara eksplisit (topik 1.4): wajibkan pagar pengaman yang
terdokumentasi sebelum metrik apa pun disetujui untuk dipakai dalam tinjauan
kinerja atau kartu skor eksekutif.

**Pemerintahan.** Ukuran kinerja yang dipublikasikan menghadapi tekanan
manipulasi terkuat dari kategori mana pun dalam buku ini, karena target yang
terlewat bisa membawa konsekuensi anggaran atau politik. Audit definisinya
sendiri secara berkala, bukan hanya angkanya, sebab pola manipulasi klasik di
sektor publik adalah mendefinisikan ulang secara diam-diam siapa yang
dihitung (daftar tunggu "terselesaikan" dengan mengklasifikasi ulang siapa
yang menunggu) alih-alih memperbaiki layanan yang mendasarinya.

## Contoh

**Perusahaan besar.** Sebuah perusahaan teknologi ritel menetapkan target
cakupan pengujian otomatis 99% di semua layanan, dikaitkan dengan skor
kualitas tingkat tim yang dipakai dalam tinjauan kuartalan. Dalam dua kuartal,
cakupan mencapai 99%, dan angka insiden naik. Sebuah audit menemukan tim
menulis pengujian sepele, menegaskan bahwa sebuah fungsi mengembalikan nilai
tanpa melempar galat, murni untuk memuaskan perangkat cakupan, sementara
pengujian kasus tepi yang sesungguhnya tidak membaik sama sekali. Solusinya
mengganti target cakupan mentah dengan metrik berpasangan: cakupan ditambah
skor pengujian mutasi (topik 4.2) yang mengukur apakah pengujian benar-benar
menangkap kesalahan yang disuntikkan, yang jauh lebih sulit dimanipulasi
dengan murah.

**Pemerintahan.** Badan asuransi pengangguran sebuah negara bagian diukur
berdasarkan median hari hingga pembayaran pertama, yang dipublikasikan kepada
badan legislatifnya. Di bawah tekanan untuk mencapai target, satu kantor
regional mulai diam-diam mengklasifikasi ulang klaim yang lebih sulit
diproses sebagai "tidak lengkap" dan mengeluarkannya dari penyebut, sehingga
median yang dipublikasikan tampak sangat baik sementara sebagian pemohon
menunggu jauh lebih lama daripada yang disiratkan laporan. Audit independen
atas definisinya sendiri, bukan hanya angkanya, mengungkap praktik itu.
Perbaikan badan itu membekukan definisi, memublikasikan kriteria pengecualian
secara terbuka, dan menambahkan metrik pagar pengaman yang melacak tingkat
klaim tidak lengkap itu sendiri, sehingga lonjakan klasifikasi ulang kini akan
terlihat, bukan tersembunyi.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari menanggapi hukum Goodhart dengan serius adalah pengerjaan
ulang yang terhindarkan. Organisasi yang merancang pagar pengaman di muka
mengeluarkan sedikit upaya tambahan untuk mendefinisikan metrik kedua di
samping yang pertama. Organisasi yang melewatkan langkah ini sering
menghabiskan satu kuartal penuh atau lebih upaya yang salah arah sebelum
distorsi muncul, disusul biaya yang jauh lebih berat untuk membatalkan
perilaku yang dimanipulasi dan membangun kembali kepercayaan pada angka itu.
Contoh ritel di atas khas: murah dicegah, mahal diperbaiki.

Total biaya kepemilikan pagar pengaman tidaklah gratis: ia adalah metrik
kedua yang harus didefinisikan, diinstrumentasi, dan ditinjau. Tetapi biaya
itu kecil dan tetap dibandingkan biaya tak terbatas dari insentif yang
diam-diam menghargai perilaku yang salah selama berbulan-bulan sebelum ada
yang menyadarinya. Setiap topik setelah ini memperhitungkan pertukaran itu,
itulah sebabnya pemasangan pagar pengaman muncul sebagai rekomendasi di
sepanjang sisa buku ini, bukan hanya di sini.

## Anti-pola dan jebakan

- **Memublikasikan metrik yang diberi insentif tanpa pagar pengaman:** akar
  penyebab paling umum dari dasbor yang terdistorsi dalam buku ini.
- **Memperlakukan manipulasi sebagai kegagalan pribadi:** menyalahkan
  individu atas tanggapan rasional terhadap insentif yang dirancang buruk, dan
  tidak memperbaiki apa pun.
- **Mengaudit angkanya tetapi tidak pernah definisinya:** mode kegagalan
  klasik sektor publik, di mana metrik tampak baik karena siapa yang dihitung
  diam-diam berubah.
- **Mengira metrik yang aman sebagai diagnostik akan tetap aman setelah
  menjadi evaluatif:** paparannya berubah begitu imbalan melekat, bahkan jika
  tidak ada hal lain pada metrik itu yang berubah.
- **Merancang pagar pengaman hanya setelah insiden manipulasi pertama:**
  perbaikan yang tiba setelah kerusakan kepercayaan telanjur terjadi.
- **Mengabaikan jarak:** menganggap metrik akan dibaca seperti yang
  dimaksudkan perancangnya setelah ia menempuh beberapa lapisan manajemen atau
  laporan publik jauhnya dari mereka.

## Model kematangan

- **Tingkat 1, Memulai (Initiate):** Metrik diberi insentif secara ad hoc,
  tanpa mempertimbangkan risiko manipulasi, dan distorsi baru ditemukan
  setelah kualitas atau kepercayaan jelas menderita.
- **Tingkat 2, Mengembangkan (Develop):** Beberapa tim mengenali manipulasi
  setelah kejadian dan menyesuaikan secara informal, tetapi tidak ada praktik
  konsisten untuk merancang pagar pengaman sebelumnya.
- **Tingkat 3, Menstandarkan (Standardize):** Setiap metrik yang diberi
  insentif di seluruh organisasi memerlukan pagar pengaman terdokumentasi
  sebelum disetujui, dan keempat pola manipulasi diberi nama dan diajarkan.
- **Tingkat 4, Mengelola (Manage):** Risiko manipulasi dipantau secara aktif:
  definisi diaudit secara berkala, pasangan pagar pengaman ditinjau apakah
  masih menangkap distorsi, dan insiden manipulasi dilacak sebagai metrik
  tersendiri.
- **Tingkat 5, Mengorkestrasi (Orchestrate):** Organisasi memperlakukan hukum
  Goodhart sebagai kendala desain tetap, ditinjau secara otomatis setiap kali
  metrik baru diusulkan, dan dapat menunjukkan perancangan ulang spesifik yang
  mencegah distorsi sebelum terjadi, bukan hanya sesudahnya.

## Gagasan untuk diskusi

1. Apa metrik paling berkonsekuensi di organisasi kita yang hari ini tidak punya pagar pengaman?
2. Pernahkah kita melihat sebuah angka membaik sementara kenyataan di baliknya memburuk?
3. Siapa yang akan menyadari jika definisi di balik salah satu metrik publik kita diam-diam berubah?
4. Dari empat pola manipulasi (ambang batas, definisi, waktu, substitusi), mana yang paling rentan menimpa organisasi kita?
5. Berapa harga kepercayaan yang harus kita bayar jika menemukan bahwa metrik utama telah dimanipulasi selama setahun?

## Poin-poin utama

- **Hukum Goodhart:** ukuran yang menjadi target berhenti menjadi ukuran yang
  baik, dan ini menaungi setiap metrik dalam buku ini.
- Manipulasi adalah **tanggapan rasional terhadap insentif**, bukan cacat
  karakter; perbaiki desain insentifnya, bukan orangnya.
- Pilih **rasio, laju, dan kohort** ketimbang hitungan mentah di mana pun
  keduanya menangkap perilaku yang sama.
- Setiap metrik yang diberi insentif membutuhkan **pagar pengaman**, dirancang
  bersamaan, bukan ditambahkan setelah distorsi ditemukan.
- Waspadai keempat pola manipulasi dengan menyebut namanya: **manipulasi
  ambang batas, definisi, waktu, dan substitusi**.
- **Jarak** antara perancang metrik dan orang yang perilakunya dibentuk metrik
  itu meningkatkan risiko distorsi; jaga jarak itu tetap pendek bila bisa.

## Referensi dan bacaan lanjutan

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience"
  (1975): asal mula hukum Goodhart.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University
  System" (1997): pernyataan ulang yang banyak dikutip, "when a measure becomes
  a target, it ceases to be a good measure."
- *Seeing Like a State*, oleh James C. Scott (bagaimana metrik yang mudah
  dibaca mendistorsi sistem yang diukurnya, pada skala negara).
- *The Tyranny of Metrics*, oleh Jerry Z. Muller (kajian setebal buku tentang
  kegandrungan pada metrik dan biayanya di berbagai profesi).
- *Lean Analytics*, oleh Alistair Croll dan Benjamin Yoskovitz (metrik
  pajangan versus metrik yang bisa ditindaklanjuti, dan perancangan pagar
  pengaman dalam konteks startup).
- Panduan U.S. Government Accountability Office (GAO) tentang pengukuran
  kinerja dan GPRA Modernization Act: pelaporan kinerja sektor publik dan
  risiko manipulasi.
