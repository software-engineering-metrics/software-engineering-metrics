# 1.5 Sumber data dan instrumentasi

## Gambaran umum dan motivasi

Metrik hanya setepercaya data di bawahnya, dan sebagian besar program metrik
menghabiskan jauh lebih banyak upaya untuk merancang dasbor daripada
memverifikasi pipeline yang menyuapinya. Ini terbalik. Bagan yang dirancang
indah di atas instrumentasi yang tidak konsisten, dilaporkan sendiri, atau
rusak secara diam-diam lebih buruk daripada tanpa bagan sama sekali, karena
ia tampak otoritatif padahal salah. Topik ini membahas fondasi yang tidak
glamor yang diandaikan sisa buku ini: dari mana data rekayasa sebenarnya
berasal, kapan memercayai instrumentasi otomatis ketimbang laporan mandiri,
dan kegagalan kualitas data yang diam-diam membatalkan sebuah metrik sebelum
ada yang menyadarinya.

Data rekayasa perangkat lunak datang dari segelintir jenis sumber, masing-masing
dengan karakteristik keandalan yang berbeda. Kendali versi dan pipeline
[CI/CD](https://en.wikipedia.org/wiki/CI/CD) menghasilkan catatan yang
objektif, berstempel waktu, dan sulit dipalsukan tentang apa yang
sebenarnya terjadi. Pelacak isu dan perangkat manajemen proyek menghasilkan
catatan yang bergantung pada manusia memperbarui status dengan benar dan
cepat, yang sering mereka lakukan secara tidak konsisten. Survei menghasilkan
data laporan mandiri yang tak ternilai untuk hal-hal yang tak bisa diamati
sistem mana pun, seperti kepuasan, tetapi rentan terhadap bias ingatan dan
efek keinginan sosial. Platform observabilitas menghasilkan telemetri tingkat
sistem yang objektif tetapi hanya mencakup apa yang diinstrumentasi.
Mengetahui kategori mana yang menjadi asal data sebuah metrik memberi tahu
Anda seberapa jauh memercayainya dan mode kegagalan apa yang perlu diwaspadai.

Pada skala perusahaan besar dan pemerintahan, masalah kualitas data
menumpuk karena jarak antara asal data dan penggunaan akhirnya di dasbor
tumbuh melewati banyak sistem, integrasi, dan transformasi. Kolom yang berarti
satu hal di sistem sumber bisa berarti sesuatu yang sedikit berbeda ketika
sampai ke lapisan pelaporan, dan tak ada yang di hilir menyadarinya karena
angkanya masih tampak masuk akal. Memastikan instrumentasi benar kurang
menggairahkan daripada memastikan kerangka kerja benar, tetapi ia adalah
fondasi tempat segala hal lain dalam buku ini berdiri.

## Prinsip utama

- **Pilih instrumentasi ketimbang laporan mandiri di mana pun sistem bisa
  mengamati peristiwanya secara langsung.** Stempel waktu deployment dari
  pipeline lebih tepercaya daripada hitungan deployment yang dilaporkan mandiri
  oleh tim.
- **Gunakan laporan mandiri hanya untuk apa yang tak bisa diamati secara
  langsung.** Kepuasan, gesekan yang dirasakan, dan kesejahteraan tak punya
  pengganti berupa sistem pencatatan; tanyakan langsung dan rancang survei
  dengan baik (topik 3.7). Cadangkan laporan mandiri khusus untuk kategori
  itu.
- **Data setiap metrik punya sistem sumber, metode pengumpulan, dan mode
  kegagalan yang diketahui.** Dokumentasikan ketiganya, bukan hanya
  definisinya.
- **Kualitas data membusuk secara diam-diam.** Pipeline yang bekerja benar
  setahun lalu bisa rusak diam-diam hari ini, dan dasbor akan terus
  menampilkan angka yang salah tanpa mengeluh.
- **Instrumentasikan di titik kebenaran, bukan di hilir sebuah
  penerjemahan.** Setiap lompatan antara peristiwa dan dasbor adalah
  kesempatan bagi makna untuk bergeser.

## Rekomendasi

### Petakan setiap metrik ke sistem sumber sebenarnya sebelum memercayainya

Untuk setiap metrik di dasbor, sebutkan sistem spesifik yang menghasilkan
peristiwa di bawahnya: pipeline CI/CD untuk peristiwa deployment, host
kendali versi untuk peristiwa commit dan merge, pelacak insiden untuk catatan
gangguan, platform survei untuk kepuasan yang dilaporkan mandiri. Jika Anda
tidak bisa menyebutkan sistem yang persis, Anda sebenarnya tidak tahu dari
mana angka itu berasal, dan Anda tidak bisa mengevaluasi keandalannya.
Pemetaan ini adalah prasyarat bagi piagam tata kelola di topik 1.4, bukan
latihan terpisah.

### Instrumentasikan di peristiwa, bukan di laporan

Data yang paling andal menangkap peristiwa secara otomatis pada saat ia
terjadi: pipeline mencatat deployment sesaat setelah selesai, sistem kendali
versi mencatat merge sesaat setelah mendarat. Data yang bergantung pada
manusia yang ingat memperbarui kolom status sesudahnya, menandai tiket
"selesai," mencatat deployment secara manual di spreadsheet, menurun
akurasinya makin jauh ia dari peristiwa sebenarnya dan makin sibuk orang yang
bertanggung jawab. Di mana pun ada peristiwa otomatis, pilih itu ketimbang
proksi yang dilaporkan manusia untuk fakta yang sama.

### Cadangkan survei untuk apa yang hanya bisa dikatakan seseorang

Sebagian hal memang tidak bisa diamati dari telemetri sistem: apakah seorang
insinyur merasa pekerjaannya bermakna, apakah sebuah proses terasa
menjengkelkan, apakah risiko kelelahan (burnout) meningkat. Hal-hal ini
membutuhkan pertanyaan langsung, dan survei yang dirancang baik (topik 3.7
membahas mekanikanya) adalah alat yang tepat. Kesalahannya adalah memakai
laporan mandiri untuk hal yang sebenarnya bisa diamati sistem secara
langsung, meminta insinyur memperkirakan frekuensi deployment mereka sendiri
alih-alih menariknya dari pipeline, yang memasukkan derau dan bias yang tak
perlu ke dalam data yang bisa saja objektif.

### Bangun pemeriksaan kualitas data ke dalam pipeline itu sendiri

Perlakukan pipeline metrik dengan ketelitian yang sama seperti kode produksi:
tambahkan pemeriksaan otomatis yang menandai ketika sebuah sumber berhenti
mengirim data, ketika distribusi suatu kolom bergeser tak terduga, atau
ketika sebuah hitungan turun ke nol tanpa diduga. Dasbor yang diam-diam
menampilkan data basi atau rusak seolah mutakhir lebih buruk daripada dasbor
yang terang-terangan menampilkan "data tidak tersedia," karena yang pertama
mengikis kepercayaan tanpa terlihat sementara yang kedua setidaknya jujur
tentang keterbatasannya sendiri.

### Dokumentasikan metode pengumpulan di samping definisi

Definisi metrik ("lead time untuk perubahan") belum lengkap tanpa metode
pengumpulannya (diukur dari stempel waktu commit pertama di kendali versi
hingga stempel waktu deployment produksi di pipeline, tidak termasuk
cabang hotfix). Dua tim dengan definisi yang sama tetapi metode pengumpulan
berbeda tetap menghasilkan angka yang tidak sebanding. Catat keduanya dalam
piagam metrik dari topik 1.4, dan perlakukan perubahan pada salah satunya
sebagai perubahan yang membutuhkan tinjauan terdokumentasi yang sama.

## Pertukaran: kelebihan dan kekurangan

| Jenis sumber | Kelebihan | Kekurangan |
| --- | --- | --- |
| Instrumentasi pipeline otomatis (CI/CD, kendali versi) | Objektif, berstempel waktu, sulit dipalsukan, upaya berkelanjutan rendah | Membutuhkan investasi rekayasa di muka untuk membangun dan memelihara |
| Data pelacak isu dan manajemen proyek | Tersedia luas, akrab bagi tim | Bergantung pada ketekunan manusia; sering tidak konsisten antartim |
| Survei dan laporan mandiri | Satu-satunya sumber untuk pengalaman subjektif (kepuasan, kesejahteraan) | Bias ingatan, bias keinginan sosial, kelelahan menjawab |
| Platform observabilitas dan telemetri | Sinyal tingkat sistem yang kaya dan real-time | Hanya mencakup apa yang secara eksplisit diinstrumentasi; bisa mahal pada skala besar |

Ketegangan utamanya adalah **objektivitas versus cakupan**. Instrumentasi
otomatis adalah sumber paling tepercaya tetapi sama sekali tidak bisa mengamati
pengalaman subjektif, sedangkan survei bisa menjangkau persis apa yang tak
terjangkau otomatisasi tetapi membawa risiko bias yang nyata. Atasi
ketegangan ini dengan memakai instrumentasi otomatis di mana pun peristiwa
bisa diamati langsung, dan mencadangkan laporan mandiri secara khusus dan
hanya untuk apa yang benar-benar membutuhkan pertanyaan kepada seseorang,
jangan pernah sebagai pengganti malas untuk data yang bisa disediakan sistem.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk lima metrik terpenting kita, bisakah kita menyebutkan sistem
   sumber dan metode pengumpulan yang persis untuk masing-masing, atau kita
   mengandaikan definisi tanpa tahu dari mana data sebenarnya berasal?** Ini
   celah yang mengejutkan umum: metrik diadopsi dari kerangka kerja atau
   dasbor bawaan vendor, dan tak seorang pun di tim saat ini benar-benar tahu
   sistem mana yang menghasilkan data di bawahnya atau bagaimana. Telusuri
   masing-masing kembali ke asalnya sebagai latihan kelompok.

2. **Metrik kita yang mana yang mengandalkan laporan mandiri untuk sesuatu
   yang bisa diamati sistem secara langsung, dan apa yang dibutuhkan untuk
   menggantikan laporan mandiri itu dengan instrumentasi sungguhan?**
   Hitungan deployment yang dilaporkan mandiri, jam kerja yang dilaporkan
   mandiri, dan waktu siklus yang diperkirakan sendiri semuanya contoh umum
   memakai sumber data yang salah untuk sesuatu yang bisa ditangkap otomatisasi
   dengan lebih andal. Identifikasi ini dan prioritaskan penggantian yang
   taruhannya paling tinggi.

3. **Bagaimana kita akan tahu jika salah satu pipeline data kita rusak
   diam-diam?** Sebagian besar organisasi baru menemukan pipeline metrik yang
   rusak ketika seseorang menyadari sebuah angka tampak tak masuk akal, yang
   bisa memakan waktu berbulan-bulan. Diskusikan apakah ada pipeline Anda yang
   memiliki pemeriksaan kesehatan otomatis hari ini, dan jika tidak, mana yang
   paling membutuhkannya lebih dulu.

4. **Di mana penerjemahan antarsistem telah mengubah makna sebuah metrik
   tanpa ada yang memutuskannya dengan sengaja?** Kolom yang berarti satu
   hal di sistem sumber bisa berarti sesuatu yang sedikit berbeda setelah
   integrasi atau migrasi, dan angka yang dihasilkan bisa tampak masuk akal
   padahal salah. Telusuri jalur data penuh metrik Anda yang paling
   berkonsekuensi dan cari titik-titik penerjemahan.

5. **Apakah kita mendokumentasikan metode pengumpulan, bukan hanya definisi,
   untuk piagam metrik kita?** Dua tim bisa berbagi nama dan definisi sebuah
   metrik sambil menghitungnya dari metode pengumpulan yang berbeda,
   menghasilkan angka yang sebenarnya tidak sebanding. Audit sampel piagam
   Anda terhadap celah spesifik ini.

6. **Bagaimana kita membedakan tren yang sungguhan dari artefak kualitas data
   ketika sebuah angka bergerak tak terduga?** Pergeseran mendadak pada metrik
   sering menjadi tanda pertama dari perubahan nyata atau pipeline yang
   rusak, dan membedakan keduanya membutuhkan pengetahuan sumber data yang
   cukup baik untuk menyelidiki dengan cepat. Diskusikan proses nyata tim
   Anda untuk pergeseran metrik tak terjelaskan terakhir yang Anda temui.

## Lensa sektor

**Startup.** Dengan tumpukan teknologi yang kecil, sebagian besar metrik Anda
bisa datang langsung dari penyedia CI/CD, host kendali versi, dan perangkat
survei ringan, tanpa membangun pipeline khusus. Risikonya adalah melewatkan
bahkan pemeriksaan kesehatan dasar karena tim bergerak cepat; pemeriksaan
otomatis lima menit bahwa sumber data masih mengirim peristiwa adalah asuransi
murah terhadap terbang buta secara diam-diam.

**Usaha kecil.** Bersandarlah pada pelaporan bawaan perangkat Anda yang ada
alih-alih membangun pipeline data khusus yang kapasitas pemeliharaannya tidak
Anda miliki. Bersikaplah eksplisit tentang angka mana yang berasal dari sistem
otomatis dan mana yang perkiraan yang diketik seseorang ke spreadsheet, karena
keduanya membawa keandalan yang sangat berbeda, meski berakhir di halaman
yang sama.

**Perusahaan besar.** Masalah kualitas data menumpuk lintas integrasi,
migrasi, dan batas unit bisnis. Investasikan pada pipeline data terpusat yang
dipantau dengan baik untuk metrik Anda yang paling berkonsekuensi, bangun
pemeriksaan kualitas data otomatis sebagai praktik standar, dan audit metode
pengumpulan, bukan hanya definisi, setiap kali membandingkan metrik antarunit
bisnis.

**Pemerintahan.** Asal-usul data bisa membawa bobot hukum dan audit: angka
kinerja yang dipublikasikan mungkin harus lolos audit eksternal bukan hanya
atas nilainya tetapi atas seluruh rantai pengumpulannya. Dokumentasikan
silsilah data (data lineage) secara eksplisit, simpan catatan metode
pengumpulan historis bahkan setelah metodologi berubah, dan bersiaplah
menunjukkan persis bagaimana sebuah angka dihasilkan, bukan hanya apa yang
tertera saat ini.

## Contoh

**Perusahaan besar.** Pimpinan rekayasa sebuah perusahaan jasa keuangan telah
melacak "lead time untuk perubahan" selama dua tahun sebelum menemukan bahwa
migrasi pipeline data delapan belas bulan sebelumnya diam-diam telah
mengganti sumber stempel waktu dari commit pertama ke pembuatan pull request,
memperpendek lead time yang tampak rata-rata beberapa jam di setiap tim tanpa
ada yang menyadari atau menyetujui perubahan itu. Solusinya menetapkan
pemeriksaan kualitas data yang membandingkan distribusi setiap metrik dari
minggu ke minggu dan menandai pergeseran yang tak lazim secara statistik
untuk ditinjau manusia, menangkap dua masalah pipeline diam-diam lagi dalam
setahun berikutnya.

**Pemerintahan.** Dasbor keandalan layanan yang berhadapan dengan publik
milik sebuah badan transportasi bergantung pada campuran telemetri sensor
otomatis dan laporan insiden yang dimasukkan manual dari kantor-kantor
regional. Sebuah audit menemukan bahwa wilayah dengan kapasitas staf lebih
kecil secara sistematis melaporkan kurang insiden kecil, bukan karena tidak
jujur melainkan semata karena entri manual bersaing waktu dengan pekerjaan
yang lebih mendesak, yang berarti angka keandalan yang dipublikasikan lebih
baik daripada kenyataan justru di wilayah yang paling tak sanggup
membiarkan pemeliharaan yang kekurangan sumber daya luput dari perhatian.
Perbaikan badan itu mengganti entri insiden manual dengan pencatatan yang
dipicu sensor secara otomatis di mana pun memungkinkan dan menambahkan
perkiraan terdokumentasi atas cakupan pelaporan manual di samping angka yang
dipublikasikan.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari instrumentasi yang solid adalah keyakinan: tim pimpinan yang
memercayai datanya bisa bertindak tegas atasnya, sedangkan tim yang pernah
terbakar oleh pipeline yang rusak diam-diam mulai meragukan setiap angka,
yang memperlambat setiap keputusan yang bergantung pada metrik. Hilangnya
keyakinan itu mahal dan sulit dipulihkan, sering memakan waktu jauh lebih lama
untuk dibangun kembali daripada biaya investasi instrumentasi aslinya.

Total biaya kepemilikan instrumentasi yang baik mencakup kerja rekayasa di
muka untuk membangun pipeline yang andal dan biaya berkelanjutan pemantauan
kualitas data, keduanya mudah kurang diinvestasikan karena tak satu pun
menghasilkan petak dasbor yang terlihat. Kurangnya investasi itu adalah
penghematan semu: biaya menemukan pipeline yang rusak diam-diam setelah
berbulan-bulan keputusan dibuat berdasarkan data buruk jauh lebih tinggi
daripada biaya membangun pemeriksaan kesehatan yang akan menangkapnya pada
hari pertama.

## Anti-pola dan jebakan

- **Memercayai angka tanpa tahu sistem sumbernya:** metrik yang diadopsi dari
  kerangka kerja atau bawaan vendor tanpa ada yang menelusuri dari mana data
  sebenarnya berasal.
- **Melaporkan mandiri apa yang bisa diamati sistem secara langsung:**
  memasukkan derau dan bias yang tak perlu ke dalam data yang bisa saja
  objektif.
- **Tanpa pemeriksaan kualitas data otomatis pada pipeline metrik:** pipeline
  yang rusak diam-diam bisa menampilkan angka salah berbulan-bulan tanpa
  terdeteksi.
- **Hanya mendokumentasikan definisi, bukan metode pengumpulan:** dua tim
  dengan nama metrik yang sama tetap bisa menghitung angka yang tidak
  sebanding.
- **Dasbor yang menampilkan "0" atau data basi seolah mutakhir, tanpa
  indikasi kegagalan sumber:** lebih buruk daripada pesan "data tidak
  tersedia" yang terlihat.
- **Wilayah atau tim yang kekurangan sumber daya secara sistematis
  melaporkan kurang karena beban entri manual:** celah kualitas data yang
  berkorelasi dengan persis area yang paling membutuhkan perhatian.

## Model kematangan

- **Tingkat 1, Memulai (Initiate):** Tak seorang pun bisa menelusuri metrik
  kembali ke sistem sumbernya dengan andal; pipeline tak punya pemeriksaan
  kesehatan dan kegagalan tak disadari.
- **Tingkat 2, Mengembangkan (Develop):** Beberapa metrik punya sumber
  terdokumentasi, tetapi metode pengumpulan tidak konsisten dan pemeriksaan
  kualitas data paling banter bersifat ad hoc.
- **Tingkat 3, Menstandarkan (Standardize):** Setiap metrik yang diatur
  mendokumentasikan sistem sumber dan metode pengumpulannya; pipeline otomatis
  lebih dipilih ketimbang laporan mandiri di mana pun peristiwa bisa diamati
  langsung.
- **Tingkat 4, Mengelola (Manage):** Pemeriksaan kualitas data otomatis
  memantau setiap pipeline yang berkonsekuensi, menandai anomali untuk
  ditinjau, dan silsilah data terdokumentasi serta dapat diaudit.
- **Tingkat 5, Mengorkestrasi (Orchestrate):** Organisasi memperlakukan
  kualitas data sebagai disiplin rekayasa kelas satu dengan pemantauan dan
  respons insiden sendiri, dan dapat menunjukkan asal-usul lengkap untuk
  metrik yang dipublikasikan mana pun sesuai permintaan.

## Gagasan untuk diskusi

1. Bisakah kita menelusuri tiga metrik teratas kita kembali ke sistem sumbernya yang persis sekarang, langsung, dalam rapat ini?
2. Metrik kita yang mana saat ini mengandalkan laporan mandiri untuk sesuatu yang bisa diukur sistem secara langsung?
3. Apakah ada pipeline metrik kita yang punya pemeriksaan kesehatan otomatis hari ini?
4. Kapan terakhir kali kita menemukan pipeline data yang rusak diam-diam, dan sudah berapa lama ia salah?
5. Di mana entri data manual menciptakan celah antara kenyataan yang dilaporkan dan yang sebenarnya?

## Poin-poin utama

- Pilih **instrumentasi otomatis** ketimbang laporan mandiri di mana pun
  sistem bisa mengamati peristiwanya secara langsung; cadangkan laporan
  mandiri untuk pengalaman yang benar-benar subjektif.
- Setiap metrik membutuhkan **sistem sumber dan metode pengumpulan** yang
  terdokumentasi, bukan hanya definisi.
- Kualitas data **membusuk secara diam-diam**; bangun pemeriksaan otomatis ke
  dalam pipeline itu sendiri alih-alih menemukan kerusakan secara tak sengaja.
- Instrumentasikan **di peristiwa**, bukan di hilir sebuah penerjemahan,
  untuk meminimalkan pergeseran antara apa yang terjadi dan apa yang
  ditampilkan dasbor.
- Biaya pipeline yang rusak diam-diam, berbulan-bulan keputusan dibuat
  berdasarkan data buruk, jauh melampaui biaya pemeriksaan kesehatan yang
  akan menangkapnya.

## Referensi dan bacaan lanjutan

- *Observability Engineering*, oleh Charity Majors, Liz Fong-Jones, dan George
  Miranda (prinsip perancangan instrumentasi dan telemetri).
- *Accelerate: The Science of Lean Software and DevOps*, oleh Nicole Forsgren,
  Jez Humble, dan Gene Kim (pendekatan instrumentasi di balik metrik DORA).
- *Data Quality: The Accuracy Dimension*, oleh Jack E. Olson (konsep kualitas
  data yang berlaku bagi pipeline metrik).
- *How to Measure Anything*, oleh Douglas W. Hubbard (metode pengukuran untuk
  kuantitas yang tampak sulit diamati secara langsung).
