# 2.9 Metrik pull request dan tinjauan kode

## Gambaran umum dan motivasi

[Tinjauan kode](https://en.wikipedia.org/wiki/Code_review) biasanya merupakan penyumbang waktu tunggu terbesar dalam
rincian waktu siklus dari topik 2.6, dan juga tahap yang paling
langsung berada di bawah kendali tim sendiri untuk diperbaiki, berbeda dengan hambatan platform
bersama atau dependensi eksternal. Topik ini membahas metrik-metrik spesifik yang
berada di dalam tahap tinjauan: waktu sampai tinjauan pertama, ukuran pull
request, jumlah iterasi tinjauan, dan distribusi beban reviewer, serta
cara memakainya untuk memperbaiki kecepatan tinjauan tanpa mengorbankan manfaat kualitas
sebenarnya yang seharusnya diberikan tinjauan.

Risiko yang paling diwaspadai topik ini adalah risiko yang belum dibahas buku ini
secara langsung: mengoptimalkan kecepatan tinjauan dapat diam-diam mengikis kualitas tinjauan
jika dikejar dengan ceroboh. Tim yang menggandakan kecepatan waktu-sampai-tinjauan-pertama
dengan menyetujui segalanya secara asal-cap telah memperbaiki sebuah metrik sambil
menghancurkan nilai sebenarnya dari praktik itu. Setiap rekomendasi dalam
topik ini ditulis dengan mempertimbangkan pertukaran tersebut, karena metrik pull request
termasuk yang paling mudah dimanipulasi (gaming) dalam buku ini sehingga tampak bagus
di dasbor sementara basis kode di baliknya terukur makin buruk.

Bagi tim besar, metrik tinjauan menyingkap masalah penyeimbangan beban yang
sebaliknya tak terlihat: segelintir insinyur senior menanggung porsi beban tinjauan yang
tidak proporsional, tim atau area basis kode tertentu tempat tinjauan terus-menerus macet, atau pola
pull request berukuran terlalu besar yang membuat tinjauan menyeluruh praktis mustahil, seteliti apa pun
reviewernya. Pola-pola ini menumpuk pada skala besar jauh lebih parah daripada pada
tim kecil, tempat semua orang dapat melihat ketimpangannya langsung tanpa memerlukan
metrik untuk menyingkapnya.

## Prinsip utama

- **Waktu sampai tinjauan pertama biasanya tuas terbesar, bukan keseksamaan
  tinjauan itu sendiri.** Sebagian besar penundaan berasal dari pull request yang menunggu
  dilihat, bukan dari percakapan tinjauan yang lama begitu ia dimulai.
- **Pull request yang lebih kecil ditinjau lebih cepat dan lebih seksama, bukan hanya
  lebih cepat.** Ukuran adalah titik ungkit untuk kecepatan dan kualitas
  sekaligus.
- **Kecepatan dan kualitas tinjauan tidak otomatis bertentangan, tetapi
  keduanya bisa dipertukarkan dengan ceroboh.** Jaga secara eksplisit terhadap pertukaran itu.
- **Ketimpangan beban reviewer itu umum dan biasanya tak terlihat tanpa metrik.**
  Segelintir orang sering menanggung porsi yang tidak proporsional.
- **Metrik-metrik ini rentan terhadap risiko manipulasi (gaming) asal-cap.** Persetujuan
  cepat tanpa pemeriksaan nyata menggagalkan seluruh tujuan tinjauan.

## Rekomendasi

### Lacak waktu sampai tinjauan pertama sebagai metrik kecepatan utama

Ukur selang dari pull request dibuka sampai komentar substantif pertama atau persetujuan dari reviewer,
diinstrumentasikan otomatis dari platform kendali versi Anda. Ini biasanya penyumbang waktu tunggu dominan
di dalam tahap tinjauan (topik 2.5, topik 2.6), dan
memperbaikinya, melalui norma penugasan tinjauan yang lebih jelas, praktik notifikasi,
atau blok waktu tinjauan khusus, biasanya menghasilkan perbaikan tunggal terbesar
atas waktu siklus keseluruhan yang tersedia bagi sebuah tim.

### Lacak ukuran pull request dan aktif dorong perubahan yang lebih kecil

Ukur baris yang diubah atau berkas yang tersentuh per pull request, dan perlakukan
ukuran median yang terus besar sebagai sinyal yang layak ditangani langsung.
Pull request yang lebih kecil ditinjau lebih cepat, ditinjau lebih seksama (reviewer
benar-benar dapat memegang seluruh perubahan di kepalanya), dan lebih mudah
dikembalikan jika ada yang salah, terhubung langsung ke
prinsip ukuran batch di balik frekuensi deployment pada topik 2.10. Dorong
pemecahan perubahan besar menjadi urutan pull request yang lebih kecil dan dapat ditinjau secara mandiri
sejauh pekerjaannya memungkinkan.

### Pantau distribusi beban reviewer secara eksplisit

Lacak jumlah tinjauan yang diselesaikan per orang dalam jendela bergulir, dan
amati khususnya apakah segelintir orang menanggung porsi yang
tidak proporsional. Pola ini umum, sering jatuh pada insinyur yang paling
senior atau paling dipercaya, dan menciptakan hambatan (ketersediaan mereka
membatasi throughput tinjauan seluruh tim) sekaligus risiko kelelahan kerja
(topik 3.2 membahas metrik kesejahteraan lebih dalam). Putar
tanggung jawab tinjauan secara sengaja alih-alih membiarkannya menumpuk secara default
pada siapa pun yang paling cepat merespons.

### Jaga secara eksplisit terhadap risiko manipulasi asal-cap

Pasangkan waktu-sampai-tinjauan-pertama dengan sinyal kualitas: laju cacat atau
insiden yang ditelusuri ke perubahan yang disetujui tanpa komentar tinjauan sama sekali,
atau laju perbaikan pasca-merge yang dibutuhkan untuk kode yang baru ditinjau. Tim
yang memperbaiki kecepatan tinjauan dengan menyetujui tanpa pemeriksaan nyata
akan melihat pagar pengaman ini memburuk, persis prinsip pemasangan
dari topik 1.2 yang diterapkan pada keluarga metrik spesifik ini. Jangan pernah mengejar kecepatan
tinjauan tanpa metrik penyeimbang ini di depan mata.

### Gunakan jumlah iterasi tinjauan untuk mengenali gesekan, bukan menghakimi individu

Jumlah putaran tinjauan yang dilalui sebuah pull request sebelum di-merge dapat
menandakan gesekan yang nyata, kebutuhan yang tidak jelas, ketidaksepakatan soal pendekatan,
ekspektasi gaya yang tidak konsisten, yang layak diselidiki di tingkat proses.
Hindari memakai angka ini untuk menghakimi penulis atau reviewer secara langsung;
jumlah iterasi yang tinggi lebih sering merupakan sinyal sistem atau komunikasi daripada
sinyal pribadi, dan memperlakukannya sebagai kartu skor individu berisiko menimbulkan
persis pergeseran evaluatif yang diperingatkan topik 1.1.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Mengoptimalkan semata untuk waktu sampai tinjauan pertama | Sinyal cepat dan jelas, mudah diinstrumentasikan | Dapat mendorong tinjauan dangkal asal-cap jika tak dijaga |
| Mengoptimalkan semata untuk pengurangan ukuran pull request | Memperbaiki kecepatan dan keseksamaan sekaligus | Tidak semua pekerjaan terpecah rapi menjadi inkremen kecil |
| Memutar beban tinjauan secara merata | Mengurangi risiko hambatan dan kelelahan kerja | Dapat memperlambat tinjauan untuk kode khusus yang sulit ditinjau dan membutuhkan keahlian tertentu |
| Memusatkan tinjauan pada insinyur senior | Keahlian domain yang mendalam diterapkan secara konsisten | Menciptakan hambatan dan risiko kelelahan kerja dari waktu ke waktu |

Ketegangan utamanya adalah **kecepatan versus kedalaman pemeriksaan**. Setiap teknik
dalam topik ini untuk mempercepat tinjauan, respons pertama yang lebih cepat, pull
request yang lebih kecil, beban reviewer yang lebih terdistribusi, membawa sedikit risiko
mengorbankan pemeriksaan nyata jika dikejar tanpa pagar pengaman kualitas yang
dianjurkan topik ini. Atasi ketegangan ini dengan memasangkan setiap metrik kecepatan dengan
sinyal kualitas, dilacak pada periode yang sama, agar tim dapat membedakan perbaikan
proses yang sejati dari standar tinjauan yang diam-diam terkikis.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Berapa waktu sampai tinjauan pertama kita yang sebenarnya, dan berapa banyak dari
   waktu siklus keseluruhan kita yang dimakan tahap tinjauan?** Ambil angka nyatanya, bukan
   mengandalkan kesan; waktu tunggu tinjauan sering lebih besar daripada yang
   diperkirakan tim, justru karena mudah meremehkan waktu yang dihabiskan menunggu
   dibanding bekerja aktif.

2. **Berapa median ukuran pull request kita, dan berapa banyak penundaan tinjauan kita
   yang akan menyusut jika ukuran itu turun?** Pull request besar lebih
   lambat ditinjau dan lebih mungkin menerima tinjauan dangkal semata karena
   reviewer tidak dapat memegang seluruhnya di kepalanya sekaligus.
   Lihat distribusi ukuran Anda yang sebenarnya, bukan hanya mediannya.

3. **Apakah beban tinjauan terkonsentrasi pada segelintir orang, dan apa yang
   akan terjadi pada throughput tinjauan kita jika salah satu dari mereka tidak tersedia
   selama dua minggu?** Pertanyaan ini menyingkap risiko hambatan dan risiko
   kelelahan kerja sekaligus. Ambil data beban reviewer yang sebenarnya, bukan
   mengandalkan kesan.

4. **Pernahkah kita memperbaiki metrik kecepatan tinjauan dengan cara yang, setelah
   direnungkan, mengurangi pemeriksaan sebenarnya?** Jujurlah di sini; inilah
   risiko asal-cap yang disebut topik ini, dan mudah tergelincir ke sana
   tanpa keputusan yang disengaja.

5. **Apa yang biasanya ditandakan jumlah iterasi tinjauan yang tinggi pada tim kita:
   ketidaksepakatan sejati, kebutuhan yang tidak jelas, atau ekspektasi gaya
   yang tidak konsisten?** Lihat sampel pull request dengan jumlah
   iterasi yang luar biasa tinggi dan diagnosis pola sebenarnya, alih-alih berasumsi
   bahwa itu mencerminkan buruk pada penulis atau reviewer.

6. **Apakah kita punya pagar pengaman kualitas yang dipasangkan dengan metrik kecepatan tinjauan kita, atau
   kita melacak kecepatan secara terpisah?** Jika jawaban jujurnya adalah tidak ada
   pagar pengaman semacam itu, itu celah yang layak ditutup sebelum mendorong kecepatan
   tinjauan lebih jauh, sesuai prinsip pemasangan topik 1.2.

## Lensa sektor

**Startup.** Tinjauan sering cepat secara default pada tim kecil, kadang
nyaris terlalu cepat, tinjauan satu penyetuju dengan pemeriksaan minimal karena
semua orang saling percaya. Risiko yang diwaspadai seiring tim tumbuh adalah kualitas
tinjauan yang tidak berskala bersama ukuran tim, karena kepercayaan informal yang berhasil
untuk lima insinyur tidak otomatis berhasil untuk lima puluh.

**Usaha kecil.** Kebanyakan platform kendali versi langsung melaporkan statistik waktu-sampai-merge dan
jumlah tinjauan; pakai itu alih-alih membangun
instrumentasi khusus. Disiplin utama yang layak diadopsi sederhana saja:
menyadari apakah beban tinjauan diam-diam terkonsentrasi pada satu atau dua orang seiring
tim bertumbuh.

**Perusahaan besar.** Ketimpangan beban reviewer dan hambatan pengetahuan khusus
sangat umum di sini, ketika keahlian domain yang mendalam pada
sistem kritis dapat memusatkan tanggung jawab tinjauan pada kelompok kecil
berapa pun ukuran tim. Berinvestasilah pada berbagi pengetahuan dan rotasi
tinjauan yang disengaja untuk menyebarkan keahlian, mengurangi hambatan sekaligus
risiko bus factor karena keahlian itu berada pada terlalu sedikit orang.

**Pemerintahan.** Proses tinjauan di sini sering membawa bobot kepatuhan
di samping tujuan kualitas, yang dapat membuat pull request lebih besar dan tinjauan
lebih lambat secara desain. Di mana persyaratan kepatuhan yang sejati menuntut tinjauan
menyeluruh, fokuskan upaya perbaikan pada pengurangan waktu tunggu (penugasan
tinjauan yang lebih cepat, triase yang lebih jelas) alih-alih mengorbankan kedalaman
tinjauan yang sebenarnya, dan dokumentasikan pertukarannya secara eksplisit jika pemeriksaan harus tetap ketat
karena alasan regulasi.

## Contoh

**Perusahaan besar.** Organisasi rekayasa sebuah perusahaan keamanan siber menemukan
bahwa segelintir insinyur utama menyelesaikan lebih dari 40% dari seluruh tinjauan kode
di organisasi berisi dua ratus orang, ketimpangan yang belum pernah diukur siapa pun secara langsung
sampai data beban reviewer ditarik. Konsentrasi ini
sekaligus merupakan hambatan, karena ketersediaan para insinyur itu membatasi
throughput tinjauan seluruh organisasi, dan risiko kelelahan kerja yang ditandai
terpisah oleh survei keterlibatan (topik 3.2). Organisasi itu
memperkenalkan program rotasi tinjauan terstruktur yang dipasangkan dengan sesi berbagi
pengetahuan terarah, dan dalam dua kuartal beban tinjauan menyebar
ke kelompok yang jauh lebih luas, dengan waktu sampai tinjauan pertama membaik sebagai
efek samping langsung dari berkurangnya hambatan.

**Pemerintahan.** Tim rekayasa sebuah otoritas pajak, di bawah tekanan untuk
memperbaiki kecepatan pengiriman, menetapkan target menggandakan kecepatan waktu sampai tinjauan pertama. Dalam
satu kuartal, target tercapai, tetapi audit kualitas berikutnya menemukan
lonjakan tajam pull request perbaikan cacat pasca-merge, terkonsentrasi pada perubahan
yang disetujui dengan satu komentar singkat. Perbaikan tim memasangkan
target kecepatan dengan pagar pengaman kualitas yang eksplisit, laju perbaikan pasca-merge
yang dibutuhkan dalam dua minggu setelah tinjauan, dan melatih ulang tim tentang apa yang
sebenarnya dituntut tinjauan substantif, memulihkan pemeriksaan sejati sambil
mempertahankan sebagian besar peningkatan kecepatan yang berasal dari penugasan tinjauan
yang lebih baik dan ukuran pull request yang lebih kecil.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari metrik tinjauan yang dikelola dengan baik adalah pengiriman lebih cepat tanpa
mengorbankan kualitas, kombinasi yang langka: kebanyakan perbaikan pengiriman
mempertukarkan kecepatan dengan risiko di suatu tempat, tetapi perbaikan tahap tinjauan,
pull request yang lebih kecil, distribusi beban yang lebih baik, respons pertama yang lebih cepat,
benar-benar memperbaiki keduanya sekaligus jika dikejar dengan
pagar pengaman kualitas yang dianjurkan topik ini. Contoh perusahaan keamanan siber di atas
adalah khas: memperbaiki hambatan meningkatkan kecepatan sementara kualitas
tinjauan yang mendasarinya, kalau ada, justru membaik ketika keahlian menyebar lebih luas.

Total biaya kepemilikan rendah: sebagian besar metrik ini berasal langsung
dari data platform kendali versi yang ada dengan instrumentasi tambahan minimal, dan
perubahan proses yang ditunjukkannya, rotasi tinjauan, mendorong pull request
yang lebih kecil, lebih banyak memakan disiplin daripada investasi perkakas.

## Anti-pola dan jebakan

- **Mengoptimalkan waktu sampai tinjauan pertama tanpa pagar pengaman kualitas yang dipasangkan:**
  mengundang persetujuan asal-cap yang menggagalkan tujuan tinjauan.
- **Mengabaikan konsentrasi beban reviewer:** menciptakan hambatan sekaligus
  risiko kelelahan kerja yang tetap tak terlihat sampai diukur.
- **Memperlakukan jumlah iterasi tinjauan sebagai kartu skor individu:** lebih
  sering merupakan sinyal sistem atau komunikasi daripada sinyal pribadi.
- **Menerima pull request yang terus besar sebagai tak terhindarkan:** sebagian besar perubahan
  besar bisa dipecah lebih jauh daripada yang semula diasumsikan tim.
- **Menerapkan kedalaman tinjauan seragam tanpa memandang risiko perubahan:** membuang
  pemeriksaan pada perubahan berisiko rendah sementara berpotensi kurang memeriksa
  perubahan berisiko tinggi.
- **Mengukur kecepatan tinjauan tetapi tidak pernah memeriksa apakah pemeriksaan nyata
  menurun bersamanya:** cara paling umum keluarga metrik ini
  dimanipulasi tanpa disengaja.

## Model kematangan

- **Level 1, Initiate:** Metrik tinjauan tidak dilacak; distribusi beban
  tinjauan dan ukuran pull request tak terlihat.
- **Level 2, Develop:** Ada sebagian data kecepatan tinjauan dari bawaan platform,
  tetapi tidak ada pagar pengaman kualitas dan tidak ada pengelolaan aktif atas
  beban reviewer.
- **Level 3, Standardize:** Waktu sampai tinjauan pertama, ukuran pull request, dan
  beban reviewer dilacak secara konsisten, dengan pagar pengaman kualitas yang eksplisit
  dipasangkan terhadap peningkatan kecepatan.
- **Level 4, Manage:** Beban reviewer diseimbangkan ulang secara aktif melalui
  rotasi dan berbagi pengetahuan; pola jumlah iterasi diselidiki
  di tingkat proses, bukan tingkat individu.
- **Level 5, Orchestrate:** Metrik tahap tinjauan langsung menginformasikan investasi
  proses, dan organisasi dapat menunjukkan perbaikan serentak
  pada kecepatan tinjauan dan hasil kualitas terkait tinjauan dalam periode
  yang berkelanjutan.

## Gagasan untuk diskusi

1. Berapa median waktu sampai tinjauan pertama kita saat ini, dan ke mana waktu itu sebenarnya pergi?
2. Apakah beban tinjauan kita terkonsentrasi pada segelintir orang, dan apa risikonya jika salah satunya tidak tersedia?
3. Pernahkah kita memperbaiki kecepatan tinjauan dengan mengorbankan pemeriksaan nyata, bahkan tanpa disengaja?
4. Berapa median ukuran pull request kita, dan seberapa kecil sebagian besar perubahan secara realistis bisa dibuat?
5. Apakah kita memperlakukan jumlah iterasi tinjauan yang tinggi sebagai sinyal sistem atau penilaian individu?

## Poin-poin utama

- **Waktu sampai tinjauan pertama** biasanya tuas tunggal terbesar di dalam
  tahap tinjauan, lebih dari panjang percakapan tinjauan itu sendiri.
- **Pull request yang lebih kecil** memperbaiki kecepatan dan keseksamaan
  tinjauan sekaligus.
- **Ketimpangan beban reviewer** itu umum dan biasanya tak terlihat tanpa
  pengukuran langsung; ia menciptakan hambatan sekaligus risiko kelelahan kerja.
- Pasangkan setiap metrik kecepatan tinjauan dengan **pagar pengaman kualitas** yang eksplisit untuk
  menangkap risiko manipulasi (gaming) asal-cap yang sangat rentan dialami keluarga metrik ini.
- Gunakan **jumlah iterasi tinjauan** untuk mendiagnosis gesekan tingkat sistem, bukan
  untuk menghakimi penulis atau reviewer individu.

## Referensi dan bacaan lanjutan

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (praktik tinjauan kode dan hubungannya dengan
  kinerja pengiriman).
- *Modern Code Review* research by Alberto Bacchelli and Christian Bird
  (studi empiris praktik tinjauan kode pada skala besar).
- *Peer Reviews in Software: A Practical Guide*, by Karl E. Wiegers (perancangan
  proses tinjauan dan pertukarannya).
- *The Principles of Product Development Flow*, by Donald G. Reinertsen
  (penalaran ukuran batch yang diterapkan pada ukuran pull request).
