# 1.6 Literasi statistik untuk metrik rekayasa

## Gambaran umum dan motivasi

Anda tidak membutuhkan gelar statistika untuk menjalankan program metrik
dengan baik, tetapi Anda perlu menghindari sejumlah kecil kesalahan spesifik
yang umum, yang membuat metrik yang tadinya tertata dan terinstrumentasi
dengan baik menjadi menyesatkan secara aktif. Tim bisa melakukan segalanya
dengan benar, menyebutkan keputusan yang jelas, menghindari hukum Goodhart,
memberi bobot ke hasil, mengatur kepemilikan, menginstrumentasi dengan andal,
dan tetap menarik kesimpulan yang salah karena ia membaca rata-rata padahal
membutuhkan persentil, mengira derau sebagai tren, atau tertipu oleh
kebetulan yang berdandan sebagai sebab. Topik ini adalah penilaian statistik
minimum yang diandaikan buku ini sudah dimiliki pembaca setiap topik
berikutnya.

Masalah intinya adalah bahwa metrik rekayasa biasanya berisik, miring, dan
bersampel kecil menurut standar statistika formal. Hitungan deployment
mingguan satu tim bukanlah kurva lonceng yang mulus; ia segelintir titik
data dengan pencilan besar sesekali (rilis besar, rentetan rollback akibat
insiden). Menerapkan intuisi naif yang dibangun untuk himpunan data besar yang
berperilaku baik pada jenis data ini rutin menghasilkan kesimpulan yang
meyakinkan tetapi salah. Belajar mengenali kapan sebuah angka terlalu
berisik untuk dipercaya, kapan rata-rata sedang membohongi Anda, dan kapan dua
hal yang bergerak bersamaan tidak mengatakan apa pun tentang sebab-akibat
bukanlah ketelitian tambahan, melainkan pembeda antara program metrik yang
mengajarkan sesuatu yang benar kepada organisasi dan yang mengajarkan sesuatu
yang terdengar masuk akal tetapi keliru.

Pada skala perusahaan besar dan pemerintahan, kesalahan statistik menumpuk
karena kesimpulan menyesatkan, begitu diterima pimpinan, ditindaklanjuti di
banyak tim sebelum ada yang terpikir memeriksa ulang analisis di bawahnya.
Perbandingan yang naif secara statistik antara dua divisi, atau antara
sebelum dan sesudah reorganisasi besar, bisa membentuk keputusan sumber daya
selama bertahun-tahun hanya berdasarkan derau atau faktor pengganggu yang tak
dikendalikan siapa pun. Topik ini ada untuk membuat kegagalan itu lebih kecil
kemungkinannya.

## Prinsip utama

- **Median atau persentil biasanya memberi tahu lebih banyak daripada
  rata-rata.** Data rekayasa rutin miring oleh pencilan yang diserap rata-rata
  tetapi tidak oleh persentil.
- **Sampel kecil menghasilkan angka yang berisik.** Persentase yang dihitung
  dari segelintir peristiwa berayun liar karena alasan yang tidak ada
  hubungannya dengan perubahan nyata.
- **Regresi ke rata-rata terus-menerus menipu orang.** Pembacaan yang luar
  biasa baik atau buruk cenderung diikuti pembacaan yang lebih normal, dengan
  atau tanpa intervensi apa pun.
- **Korelasi bukan kausalitas, dan variabel pengganggu ada di mana-mana.**
  Dua metrik yang bergerak bersama bisa berbagi penyebab ketiga yang
  tersembunyi, bukan yang satu menggerakkan yang lain.
- **[Bagan kendali](https://en.wikipedia.org/wiki/Control_chart) mengalahkan
  satu perbandingan sebelum-dan-sesudah.** Melihat rentang variasi normal
  adalah yang memungkinkan Anda membedakan pergeseran nyata dari derau.

## Rekomendasi

### Jadikan median dan persentil sebagai bawaan untuk data yang miring

Metrik rekayasa berbasis waktu, lead time, waktu pemulihan insiden, latensi
respons, hampir selalu miring ke kanan: sebagian besar nilai mengumpul di
bawah, dengan ekor panjang pencilan besar sesekali. Rata-rata yang tertarik
oleh ekor itu bisa melukiskan gambaran yang tidak menyerupai kasus tipikal
mana pun. Laporkan **median** (nilai tengah, di mana separuh pengamatan di
atas dan separuh di bawah) bersama **persentil ke-90** atau **ke-95** (nilai
yang di bawahnya jatuh 90% atau 95% pengamatan), yang bersama-sama
menunjukkan kasus tipikal sekaligus ekor kasus terburuk yang benar-benar
dialami tim. Topik KPI dari buku pendamping `software-engineering-guide`,
dan setiap topik metrik pengiriman di Bagian 2 buku ini, mengandaikan
kebiasaan ini sepanjang jalan.

### Ketahui kapan sampel terlalu kecil untuk dipercaya

Tingkat kegagalan perubahan yang dihitung dari tiga deployment pada minggu
yang sepi bukan sinyal yang bermakna; satu kegagalan menggeser persentase dari
0% ke 33% dalam semalam karena alasan yang mungkin tak ada hubungannya dengan
risiko yang mendasarinya. Sebelum bereaksi terhadap metrik berbasis
persentase, periksa hitungan di bawahnya. Sebagai kaidah praktis, perlakukan
laju yang dihitung dari kurang dari kira-kira dua puluh hingga tiga puluh
peristiwa dasar sebagai berisik dan membutuhkan jendela pengamatan yang lebih
panjang sebelum menarik kesimpulan, dan nyatakan secara eksplisit di dasbor
alih-alih menyajikan persentase sampel kecil yang bergejolak dengan
keyakinan yang sama seperti yang stabil bersampel besar.

### Waspadai regresi ke rata-rata sebelum memuji sebuah intervensi

Jika pekan terburuk sepanjang masa sebuah tim untuk insiden diikuti oleh
perhatian pimpinan dan perbaikan setelahnya, menggoda untuk memuji intervensi
itu. Sering kali, sebagian perbaikan itu akan terjadi juga, karena pembacaan
yang luar biasa ekstrem cenderung diikuti yang lebih tipikal murni sebagai
artefak statistik, fenomena yang disebut **regresi ke rata-rata**. Jaga diri
dengan membandingkan terhadap garis dasar historis yang lebih panjang
alih-alih satu titik data ekstrem yang memicu perhatian, dan dengan bersikap
rendah hati secukupnya tentang seberapa banyak perbaikan yang teramati yang
diatribusikan kepada tindakan tertentu.

### Cari variabel pengganggu sebelum mengklaim sebuah metrik menyebabkan hasil

Ketika dua metrik bergerak bersama, frekuensi deployment naik beriringan
dengan kepuasan pelanggan, tahan refleks untuk mengklaim yang satu menyebabkan
yang lain sebelum mempertimbangkan **variabel pengganggu (confounding
variable)**: faktor ketiga tersembunyi yang menggerakkan keduanya. Peluncuran
fitur baru bisa secara independen mendorong frekuensi deployment (lebih
banyak perbaikan lanjutan) dan kepuasan (fitur itu sendiri), tanpa kaitan
kausal sama sekali antara kedua metrik. Sebelum menyajikan korelasi sebagai
bukti kausalitas, tanyakan secara aktif apa lagi yang berubah pada saat yang
sama yang bisa menjelaskan kedua pergerakan itu.

### Pakai bagan kendali, bukan satu cuplikan sebelum-dan-sesudah

**Bagan kendali (control chart)** memplot metrik dari waktu ke waktu dengan
rentang variasi normalnya ditampilkan secara eksplisit, biasanya sebagai
pita di sekitar rata-rata pusat. Ini memungkinkan Anda membedakan pergeseran
yang sungguhan, titik data atau rangkaian berkelanjutan di luar rentang
normal, dari derau biasa yang tak bisa dibedakan oleh satu perbandingan
sebelum-dan-sesudah. Sebelum menyatakan "angkanya membaik setelah
perubahan," plot data historis yang cukup untuk melihat seperti apa variasi
normal, dan periksa apakah pembacaan pascaperubahan benar-benar jatuh di
luarnya.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Rata-rata | Sederhana, akrab, mudah dihitung | Terdistorsi oleh pencilan pada data rekayasa yang miring |
| Median dan persentil | Tahan pencilan, menunjukkan kasus tipikal dan ekor sekaligus | Sedikit kurang akrab bagi audiens nonteknis |
| Satu perbandingan sebelum-dan-sesudah | Cepat, intuitif, mudah dipresentasikan | Rentan terhadap regresi ke rata-rata dan derau |
| Bagan kendali dan garis dasar lebih panjang | Membedakan pergeseran nyata dari derau dengan andal | Membutuhkan lebih banyak data historis dan lebih banyak penjelasan kepada audiens nonteknis |

Ketegangan utamanya adalah **kesederhanaan versus ketelitian**. Rata-rata dan
perbandingan sebelum-dan-sesudah tunggal lebih mudah dihitung dan dijelaskan,
dan itulah persis mengapa keduanya mendominasi pelaporan santai, tetapi
keduanya juga dua teknik yang paling mungkin menghasilkan kesimpulan yang
meyakinkan tetapi salah pada jenis data berisik dan miring yang dihasilkan
metrik buku ini. Atasi ketegangan ini dengan menjadikan teknik yang lebih
teliti, median, persentil, dan bagan kendali, sebagai bawaan untuk keputusan
yang berkonsekuensi nyata, dan mencadangkan teknik yang lebih sederhana untuk
tinjauan eksploratif berisiko rendah di mana pembacaan yang keliru nyaris tak
berbiaya.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Petak dasbor kita yang mana yang melaporkan rata-rata padahal median atau
   persentil akan menceritakan kisah yang lebih benar?** Metrik rekayasa
   berbasis waktu hampir selalu miring, dan rata-rata pada data miring bisa
   tampak baik sementara kasus tipikal, atau ekor kasus terburuk,
   menceritakan kisah yang sama sekali berbeda. Audit petak berbasis waktu
   Anda secara khusus untuk penggantian ini.

2. **Seberapa kecil sampel di balik metrik berbasis persentase kita, dan
   apakah kita memperlakukan metrik dari sepuluh peristiwa dengan keyakinan
   yang sama seperti dari seribu?** Laju sampel kecil yang bergejolak yang
   disajikan tanpa hitungan dasarnya mengundang reaksi berlebihan terhadap
   derau. Periksa tingkat kegagalan perubahan dan petak persentase serupa
   untuk celah ini.

3. **Pernahkah kita memuji sebuah intervensi atas perbaikan yang akan
   dihasilkan juga oleh regresi ke rata-rata?** Ini salah satu kesalahan
   statistik yang paling mudah dibuat dan paling sulit disadari setelahnya,
   karena intervensi dan perbaikannya memang terjadi dalam urutan itu.
   Tengoklah kembali kisah "kami memperbaikinya" yang baru-baru ini dan
   tanyakan dengan jujur apakah perbandingan garis dasarnya cukup panjang
   untuk menyingkirkan kemungkinan ini.

4. **Di mana kita menganggap satu metrik menyebabkan yang lain tanpa memeriksa
   variabel pengganggu?** Dua hal bergerak bersama itu umum; yang satu
   menyebabkan yang lain adalah klaim yang lebih kuat yang membutuhkan lebih
   banyak bukti. Pilih korelasi yang saat ini diyakini tim Anda dan coba
   sebutkan pengganggu yang masuk akal yang akan menjelaskannya tanpa kaitan
   kausal sama sekali.

5. **Apakah kita punya cukup data historis untuk tahu seperti apa variasi
   normal bagi metrik terpenting kita, atau kita membandingkan titik-titik
   tunggal?** Tanpa rasa akan rentang normal, pembacaan tunggal mana pun tampak
   mengkhawatirkan atau menenangkan tergantung suasana hati, bukan bukti.
   Diskusikan apakah metrik yang paling Anda pantau pernah diplot sebagai
   bagan kendali, bukan satu angka.

6. **Bagaimana kita saat ini mengomunikasikan ketidakpastian kepada pemangku
   kepentingan nonteknis, dan apakah dasbor kita menyiratkan presisi lebih
   dari yang didukung data?** Bagan tanpa indikasi variasi normal atau ukuran
   sampel bisa membuat tim pimpinan bereaksi berlebihan terhadap derau atau,
   sama seringnya, menepis sinyal nyata sebagai derau. Diskusikan bagaimana
   pelaporan Anda bisa mengomunikasikan hal ini dengan jujur tanpa menjadi
   tak terbaca.

## Lensa sektor

**Startup.** Tim kecil menghasilkan sampel kecil hampir di mana-mana, yang
berarti kehati-hatian soal sampel kecil dalam topik ini penting terus-menerus.
Tahan diri dari menarik kesimpulan kuat dari satu minggu buruk atau satu
minggu bagus; dengan hanya segelintir titik data, jawaban jujur atas "apakah
ini tren" sering kali "kita belum tahu."

**Usaha kecil.** Dasbor bawaan dari perangkat siap pakai sering menjadikan
rata-rata dan perbandingan satu periode sebagai bawaan karena itu yang paling
sederhana dihitung dan ditampilkan. Di mana perangkat mengizinkan, beralihlah
ke median untuk metrik berbasis waktu, dan bersikaplah skeptis terhadap
judul "naik 40% bulan ini" yang dihitung dari hitungan dasar yang kecil.

**Perusahaan besar.** Kesalahan statistik pada skala ini terpanggang ke dalam
keputusan sumber daya dan reorganisasi yang memengaruhi ratusan orang.
Investasikan pada analis atau praktisi data tertanam yang bisa membangun
bagan kendali yang layak dan memeriksa pengganggu sebelum perbandingan antar
unit bisnis atau sebelum-dan-sesudah perubahan besar dipresentasikan kepada
pimpinan sebagai fakta yang sudah mapan.

**Pemerintahan.** Perbandingan yang naif secara statistik yang menyuapi
laporan publik atau justifikasi anggaran bisa berdampak nyata yang tidak
proporsional dan mengundang persis jenis pengawasan yang memperlihatkan
analisis ceroboh secara publik. Terapkan teknik yang lebih teliti, bagan
kendali, ukuran sampel yang didokumentasikan, pemeriksaan pengganggu, sebagai
praktik tetap untuk apa pun yang dipublikasikan ke luar, bukan sekadar upaya
terbaik sesekali.

## Contoh

**Perusahaan besar.** Tim pimpinan sebuah perusahaan perangkat lunak
merayakan perbaikan 25% pada tingkat kegagalan perubahan sebulan setelah
meluncurkan kebijakan tinjauan kode baru, memuji kebijakan itu secara
langsung. Pemeriksaan lebih dekat menemukan bahwa bulan "sebelum" adalah
bulan yang luar biasa buruk, didorong oleh migrasi satu tim yang berantakan,
dan ukuran sampel di balik kedua bulan kurang dari tiga puluh deployment di
seluruh perusahaan. Bagan kendali yang memakai riwayat dua belas bulan
menunjukkan pembacaan baru berada jauh di dalam variasi normal, bukan
perubahan langkah yang sungguhan, dan efek sebenarnya dari kebijakan itu,
meski nyata, jauh lebih kecil daripada yang disiratkan angka utamanya.

**Pemerintahan.** Sebuah badan angkutan umum melaporkan perbaikan besar tahun
ke tahun pada ketepatan waktu untuk sistem penjadwalan yang baru didigitalkan,
dengan membandingkan satu kuartal "sebelum" dengan satu kuartal "sesudah."
Tinjauan independen menemukan bahwa kuartal "sebelum" bertepatan dengan
penutupan konstruksi yang tak terkait yang menekan kinerja di seluruh
jaringan, dan garis dasar yang lebih panjang menunjukkan ketepatan waktu
sudah pulih sebelum sistem baru diluncurkan. Laporan revisi badan itu memakai
bagan kendali multitahun penuh dan mengatribusikan perbaikan yang lebih
sederhana, tetapi lebih bisa dipertahankan, kepada sistem baru secara
khusus.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari literasi statistik adalah salah arah yang terhindarkan:
organisasi yang mengatribusikan perbaikan dengan benar, atau mengenali derau
sebagai derau dengan benar, membelanjakan investasi berikutnya di tempat yang
akan benar-benar membantu alih-alih mengejar efek semu. Contoh ritel di atas
khas: perusahaan yang yakin kebijakan tinjauannya saja yang mendorong
perbaikan 25% bisa kurang berinvestasi pada kontributor nyata lainnya, atau
melebih-lebihkan nilai kebijakan itu dengan cara yang menyesatkan keputusan
mendatang.

Total biaya ketelitian statistik sebagian besar adalah pergeseran kebiasaan,
bukan perangkat baru: memilih median ketimbang rata-rata, memeriksa ukuran
sampel sebelum bereaksi, memplot garis dasar yang lebih panjang sebelum
menyatakan kemenangan. Kebiasaan ini murah diadopsi dan mencegah biaya yang
jauh lebih besar dan lebih sulit terdeteksi dari keputusan yang dibuat
berdasarkan kesimpulan yang meyakinkan tetapi salah.

## Anti-pola dan jebakan

- **Melaporkan rata-rata pada data berbasis waktu yang miring:**
  menyembunyikan kasus tipikal dan ekornya di balik satu angka menyesatkan.
- **Bereaksi terhadap persentase tanpa ukuran sampel yang terlihat:**
  memperlakukan derau dari segelintir peristiwa seolah tren yang stabil dan
  bermakna.
- **Memuji intervensi tanpa menyingkirkan regresi ke rata-rata:** kesalahan
  yang umum, mudah dibuat, sulit disadari.
- **Mengklaim kausalitas dari korelasi tanpa mempertimbangkan pengganggu:**
  melebih-lebihkan apa yang sebenarnya didukung data.
- **Membandingkan satu cuplikan sebelum-dan-sesudah alih-alih memplot garis
  dasar yang lebih panjang:** tak bisa membedakan pergeseran nyata dari
  variasi biasa.
- **Menyiratkan presisi lebih dari yang didukung data dalam pelaporan untuk
  pimpinan:** mengundang reaksi berlebihan terhadap derau atau penepisan
  sinyal nyata.

## Model kematangan

- **Tingkat 1, Memulai (Initiate):** Metrik dilaporkan sebagai rata-rata
  mentah dan cuplikan sebelum-dan-sesudah tunggal tanpa perhatian pada ukuran
  sampel, kemiringan, atau variasi garis dasar.
- **Tingkat 2, Mengembangkan (Develop):** Beberapa analis menerapkan median
  atau persentil secara informal, tetapi tidak ada praktik organisasi yang
  konsisten dan pengganggu jarang diperiksa.
- **Tingkat 3, Menstandarkan (Standardize):** Median dan persentil menjadi
  bawaan untuk metrik berbasis waktu yang miring; ukuran sampel ditampilkan di
  samping metrik berbasis persentase di seluruh organisasi.
- **Tingkat 4, Mengelola (Manage):** Bagan kendali dengan garis dasar
  historis menjadi praktik standar untuk klaim pergeseran yang sungguhan;
  variabel pengganggu dipertimbangkan secara aktif sebelum klaim kausal dibuat
  dalam pelaporan.
- **Tingkat 5, Mengorkestrasi (Orchestrate):** Ketelitian statistik
  dibangun ke dalam perangkat itu sendiri, dasbor menampilkan persentil dan
  pita kendali secara bawaan, dan organisasi dapat menunjukkan bahwa keputusan
  tertentu di masa lalu dikoreksi karena bacaan yang naif secara statistik
  tertangkap sebelum membentuk strategi.

## Gagasan untuk diskusi

1. Judul dasbor kita yang mana saat ini yang akan tampak berbeda jika kita mengganti rata-rata dengan median?
2. Pernahkah kita mengubah keputusan karena sebuah persentase ternyata didasarkan pada sampel yang jauh lebih kecil daripada yang kita kira?
3. Kisah "kami memperbaiki metrik ini" yang mana baru-baru ini yang perlu kita periksa ulang untuk regresi ke rata-rata?
4. Di mana dua metrik kita mungkin berkorelasi lewat penyebab ketiga yang tersembunyi, bukan yang satu menggerakkan yang lain?
5. Apakah bagan terpenting kita menampilkan rentang variasi normal, atau hanya satu garis tren?

## Poin-poin utama

- Pilih **median dan persentil** ketimbang rata-rata untuk metrik rekayasa
  berbasis waktu yang miring.
- Perlakukan **persentase dari sampel kecil** sebagai berisik, dan nyatakan
  secara eksplisit alih-alih bereaksi terhadapnya sebagai tren yang stabil.
- Waspadai **regresi ke rata-rata** sebelum memuji intervensi atas perbaikan
  yang mengikuti pembacaan yang luar biasa buruk.
- **Korelasi bukan kausalitas**; cari variabel pengganggu secara aktif
  sebelum membuat klaim kausal.
- Pakai **bagan kendali dengan garis dasar historis yang nyata**, bukan satu
  cuplikan sebelum-dan-sesudah, untuk membedakan pergeseran sungguhan dari
  derau biasa.

## Referensi dan bacaan lanjutan

- *The Signal and the Noise*, oleh Nate Silver (membedakan sinyal nyata dari
  derau pada data yang tidak sempurna).
- *How to Measure Anything*, oleh Douglas W. Hubbard (penalaran statistik
  untuk pengukuran organisasi).
- *Understanding Variation: The Key to Managing Chaos*, oleh Donald J.
  Wheeler (bagan kendali dan pembedaan antara variasi sebab-umum dan
  sebab-khusus).
- *Thinking, Fast and Slow*, oleh Daniel Kahneman (bias kognitif termasuk
  regresi ke rata-rata dan ilusi narasi kausal).
- *The Visual Display of Quantitative Information*, oleh Edward R. Tufte
  (penyajian data kuantitatif yang jujur dan berintegritas tinggi).
