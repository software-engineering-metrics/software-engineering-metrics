# 2.8 Metrik aliran nilai Lean

## Gambaran umum dan motivasi

Setiap metrik yang sudah dibahas bagian ini sejauh ini, flow time, flow load, waktu
siklus, utilisasi, berasal dari perangkat yang jauh lebih tua: lima
pengukuran dasar dari pemetaan aliran nilai **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**
klasik, yang dikembangkan di Toyota dan digeneralisasi ke seluruh
manufaktur, operasi, dan penyampaian layanan jauh sebelum perangkat lunak
mengadopsinya. **Lead time (LT)** adalah total waktu jam dinding sejak pekerjaan
diminta sampai diserahkan. **Waktu proses (process time, PT)** adalah waktu kerja langsung
yang sebenarnya dihabiskan untuk satu unit. **Waktu siklus (cycle time, CT)** adalah
rata-rata waktu yang dibutuhkan untuk menyelesaikan satu simpul atau fase dalam
aliran. **Persen lengkap dan akurat (%C/A)** adalah persentase
unit yang dapat diproses tim hilir tanpa perlu pengerjaan ulang. **Takt time**
adalah waktu maksimum yang dapat diterima untuk menyelesaikan satu unit agar selaras dengan
permintaan pelanggan secara mulus.

Topik ini ada karena rekayasa perangkat lunak tidak menciptakan gagasan-gagasan
ini, melainkan meminjamnya, dan peminjaman itu kadang memakai kata yang sama
untuk hal yang sedikit berbeda. Waktu siklus dalam buku ini (topik 2.6)
mengukur tahap-tahap rekayasa sebuah perubahan secara khusus, pengodean, tinjauan, uji,
deploy, sedangkan CT Lean klasik adalah "rata-rata waktu per simpul" yang lebih umum
dan berlaku untuk proses apa pun. Waktu alir (topik 2.4) adalah nama buku ini
untuk apa yang disebut Lean sebagai lead time. Mengetahui pemetaannya penting karena pembaca
dari latar belakang Lean Six Sigma, yang umum di manufaktur,
logistik, layanan kesehatan, dan operasi pemerintahan, akan memakai istilah-istilah persis ini dengan
makna aslinya, dan tim perangkat lunak yang tidak
berbicara dalam bahasa yang sama kehilangan jembatan yang mudah dan berbasis bukti ke
rekan-rekan di luar rekayasa.

Bagi tim besar, %C/A adalah metrik topik ini yang paling kurang dimanfaatkan. Ia menangkap
sesuatu yang tidak ditangkap metrik aliran di topik 2.3 dan 2.4: seberapa banyak dari apa yang
dihasilkan sebuah tahap benar-benar dapat dipakai tahap berikutnya tanpa dikembalikan.
Digulirkan ke seluruh aliran nilai multitahap, konsep yang disebut manufaktur
**rolled throughput yield**, %C/A menyingkap bagaimana pengerjaan ulang menumpuk
tanpa terlihat di sepanjang serah terima, pola yang paling rentan dialami organisasi perusahaan besar dengan pipeline
panjang lintas banyak tim dan program pemerintahan dengan beberapa gerbang
persetujuan, dan jarang diukur secara langsung.

## Prinsip utama

- **Kelima metrik ini mendahului perangkat lunak dan berlaku lebih luas darinya.** Mereka
  adalah kosakata bersama yang sudah dikuasai dengan lancar oleh pemangku kepentingan terlatih Lean Six Sigma, yang umum di
  perusahaan besar dan operasi pemerintahan.
- **Tabrakan terminologi itu nyata dan layak disebut secara eksplisit.** Waktu siklus
  buku ini (topik 2.6) dan CT Lean klasik berkaitan tetapi
  tidak identik; dokumentasikan pemetaannya agar percakapan lintas fungsi tidak
  diam-diam saling melewati.
- **%C/A harus digulirkan melintasi setiap tahap, bukan diukur sekali di
  akhir.** Pengerjaan ulang yang muncul di awal aliran dan baru tertangkap di akhir tidak terlihat
  oleh metrik yang hanya diukur pada pengiriman akhir.
- **Takt time membingkai ulang perencanaan kapasitas berdasarkan permintaan, bukan usaha.** Pertanyaannya
  bergeser dari "seberapa cepat kita bisa melaju" menjadi "seberapa cepat kita perlu melaju,"
  yang terhubung langsung dengan utilisasi (topik 2.7) dan flow load
  (topik 2.4).
- **Ini adalah metrik diagnostik, bukan metrik pamer.** Masing-masing ada untuk
  menjawab pertanyaan operasional tertentu, bukan untuk menghasilkan angka
  yang mengesankan di dasbor.

## Rekomendasi

### Petakan aliran nilai Anda dengan kelima metrik Lean sebelum mengadopsi kerangka khusus perangkat lunak

Hitung lead time, waktu proses, waktu siklus, %C/A, dan takt time untuk
sampel pekerjaan yang representatif yang bergerak melalui aliran nilai Anda sebelum
menumpuk metrik Flow Framework sendiri (topik 2.3 dan 2.4) di atasnya.
Ini memberi Anda garis dasar yang segera dapat dipahami setiap pemangku kepentingan yang melek Lean Six Sigma,
dan sering kali menyingkap dominasi waktu tunggu yang sama seperti yang dijelaskan topik 2.5,
dinyatakan dalam kosakata yang mendahului dan akan bertahan lebih lama dari kerangka perangkat lunak mana pun.

### Gulirkan persen lengkap dan akurat secara perkalian melintasi setiap tahap

Ukur %C/A pada setiap tahap secara individual, lalu kalikan persentase tingkat tahap
itu bersama-sama untuk mendapatkan rolled throughput yield aliran nilai.
Tiga tahap yang masing-masing berjalan pada 90% lengkap dan akurat
menumpuk menjadi sekitar 73% secara keseluruhan, angka yang tidak mirip dengan laporan
tahap mana pun dan biasanya yang lebih jujur. Satu
perhitungan ini adalah cara tercepat untuk menyingkap berapa banyak pengerjaan ulang yang benar-benar
diserap pipeline multitahap.

### Tetapkan takt time secara eksplisit dari data permintaan pelanggan nyata, bukan dari kapasitas

Hitung takt time sebagai waktu kerja yang tersedia dibagi permintaan pelanggan
pada periode itu, sengaja independen dari seberapa cepat tim Anda kebetulan
dapat bekerja hari ini. Bandingkan waktu proses dan waktu siklus yang Anda ukur
dengan angka ini: waktu proses yang nyaman di bawah takt time
menandakan kelonggaran yang sehat, sedangkan waktu siklus yang melampaui takt time adalah
bukti konkret dan terukur adanya kekurangan kapasitas, bukan sekadar perasaan
bahwa segala sesuatu tertinggal.

### Dokumentasikan pemetaan antara istilah Lean dan kosakata buku ini

Jika organisasi Anda sudah menjalankan program Lean Six Sigma di luar
perangkat lunak, atau jika rekayasa melapor ke pimpinan yang fasih dengan kosakata itu,
tuliskan pemetaannya secara eksplisit dalam piagam metrik Anda
(topik 1.4): waktu alir buku ini adalah lead time Lean, waktu
siklus buku ini (topik 2.6) adalah penerapan spesifik dari CT Lean yang lebih umum,
dan waktu aktif buku ini (topik 2.5) adalah waktu proses Lean. Satu
dokumen ini mencegah perdebatan berulang yang berharga rendah tentang angka siapa yang "nyata."

### Gunakan %C/A sebagai pagar pengaman bersama kecepatan aliran, bukan penggantinya

Pasangkan rolled throughput yield dengan kecepatan aliran (topik 2.3) sebagaimana
buku ini memasangkan setiap metrik kecepatan dengan pagar pengaman stabilitas. Jumlah
item yang naik dengan %C/A gulir yang turun berarti aliran nilai mengirim
lebih banyak unit yang makin sering membutuhkan pengerjaan ulang kemudian, persis pola
kecepatan-tanpa-kualitas yang diperingatkan topik 1.2 agar dijaga oleh setiap keluarga metrik.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Hanya metrik Lean klasik (LT, PT, CT, %C/A, takt time) | Kosakata universal; berlaku di tim perangkat lunak maupun non-perangkat lunak | Tidak khusus perangkat lunak; perlu diterjemahkan untuk tahap khusus rekayasa |
| Hanya metrik Flow Framework (topik 2.3, 2.4) | Dibuat khusus untuk aliran nilai perangkat lunak dan visibilitas jenis item | Tidak familier bagi pemangku kepentingan terlatih Lean Six Sigma di luar rekayasa |
| Keduanya, dengan pemetaan eksplisit yang didokumentasikan | Berbicara dalam kedua kosakata; jembatan lintas fungsi terkuat | Membutuhkan disiplin di muka untuk menuliskan pemetaan dan menjaganya tetap mutakhir |
| %C/A diukur hanya pada pengiriman akhir | Sederhana, satu angka | Menyembunyikan pengerjaan ulang yang muncul dan tertangkap lebih awal dalam aliran |

Ketegangan utamanya adalah **universalitas versus kespesifikan**. Metrik Lean
klasik langsung terbaca oleh siapa pun yang berpengalaman di manufaktur, operasi, atau
Six Sigma, tetapi ia tidak dirancang dengan tahap-tahap spesifik perangkat lunak, tinjauan kode,
pengujian otomatis, persetujuan deployment, dalam benak.
Atasi ketegangan ini dengan memakai metrik Lean sebagai kosakata garis dasar bersama
untuk percakapan lintas fungsi dan eksekutif, dan metrik
Flow Framework sendiri (topik 2.3 dan 2.4) untuk pekerjaan diagnostik
khusus perangkat lunak yang dilakukan tim rekayasa sehari-hari.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Bisakah kita menghitung kelima metrik Lean klasik untuk aliran nilai kita
   hari ini, atau kita hanya punya sebagian?** Kebanyakan tim perangkat lunak punya
   padanan waktu alir dan waktu siklus tetapi tidak pernah menghitung waktu proses,
   %C/A, atau takt time secara eksplisit. Identifikasi mana dari kelima metrik itu yang
   benar-benar hilang sebelum berasumsi celahnya kecil.

2. **Pernahkah kita menggulirkan %C/A melintasi setiap tahap aliran nilai kita, atau
   hanya mengukurnya pada pengiriman akhir?** Satu pengukuran di akhir aliran
   menyembunyikan persis pengerjaan ulang yang menumpuk, yang hendak disingkap
   perhitungan rolled throughput yield topik ini. Coba hitung gulirannya
   dengan data nyata.

3. **Apakah kita tahu takt time kita, yang dihitung dari permintaan pelanggan sebenarnya, dan
   bagaimana waktu siklus terukur kita dibandingkan dengannya?** Kebanyakan tim belum pernah
   membuat perbandingan ini eksplisit, yang berarti percakapan kapasitas tetap
   anekdotal alih-alih terukur.

4. **Jika pemangku kepentingan terlatih Lean Six Sigma dari luar rekayasa bertanya
   tentang waktu siklus kita, yakinkah kita bahwa yang kita maksud sama dengan
   yang mereka maksud?** Waktu siklus buku ini (topik 2.6) dan CT Lean klasik
   berkaitan tetapi tidak identik. Diskusikan apakah perbedaan itu pernah
   menyebabkan kesalahpahaman nyata di organisasi Anda.

5. **Pernahkah rolled throughput yield kita jauh lebih rendah daripada %C/A yang dilaporkan
   tahap mana pun?** Jika Anda belum pernah menghitung gulirannya, diskusikan apa yang
   Anda harapkan akan temukan lalu periksa dengan data nyata.

6. **Apakah organisasi kita sudah menjalankan program Lean atau Six Sigma di luar
   perangkat lunak yang bisa kita selaraskan, alih-alih memelihara kosakata
   terpisah yang terputus?** Banyak perusahaan dan lembaga pemerintah sudah memiliki infrastruktur ini; periksa apakah rekayasa
   pernah benar-benar terhubung dengannya.

## Lensa sektor

**Startup.** Pemetaan aliran nilai Lean penuh jarang sepadan dengan seremoninya pada
skala ini, tetapi takt time layak dipahami secara informal: mengetahui
kira-kira seberapa cepat tim benar-benar perlu bergerak agar sesuai dengan permintaan pelanggan nyata,
bukan laju internal yang sembarang, mencegah kapasitas dibangun berlebihan terlalu dini
maupun dibangun kurang ketika pertumbuhan tiba.

**Usaha kecil.** %C/A adalah yang paling segera berguna dari kelima metrik
ini, karena ia langsung menjawab "berapa banyak dari yang kita kirim harus
dikerjakan ulang," pertanyaan yang dirasakan tajam oleh pemilik dan tim kecil tanpa selalu
punya angkanya. Lacak secara informal untuk satu atau dua proses
kritis Anda sebelum berinvestasi pada sesuatu yang lebih rumit.

**Perusahaan besar.** Di sinilah kosakata Lean klasik terbayar,
karena perusahaan besar sangat sering sudah menjalankan program Lean Six Sigma
di operasi, divisi yang berdekatan dengan manufaktur, atau layanan bersama, dan rekayasa yang berbicara dalam bahasa yang sama memperoleh
jembatan langsung yang kredibel ke fungsi-fungsi itu, alih-alih harus
membenarkan serangkaian metrik khusus perangkat lunak dari nol.

**Pemerintahan.** Lembaga pemerintah, terutama yang berakar pada fungsi
regulasi, berdekatan dengan manufaktur, atau logistik, sering memiliki
mandat Lean atau perbaikan proses yang sudah ada. Membingkai aliran nilai layanan digital
dalam istilah klasik yang sama, lead time, waktu proses, %C/A,
takt time, yang sudah dipakai kantor perbaikan proses lembaga itu
sering kali cara tercepat untuk memperoleh dukungan institusional yang nyata bagi
upaya modernisasi perangkat lunak.

## Contoh

**Perusahaan besar.** Divisi perangkat lunak internal sebuah perusahaan manufaktur
bertahun-tahun kesulitan agar metrik rekayasanya ditanggapi serius oleh
pimpinan operasi yang fasih Lean Six Sigma dari lantai pabrik.
Membingkai ulang pipeline pengiriman divisi itu dengan kelima metrik klasik yang sama,
menghitung lead time, waktu proses, waktu siklus, %C/A, dan takt
time untuk aliran nilai perangkat lunaknya, langsung membuat angka-angka divisi itu
terbaca oleh pimpinan operasi untuk pertama kalinya. Perhitungan rolled
throughput yield di empat tahap pipeline menunjukkan
%C/A sebenarnya sebesar 61%, jauh di bawah angka yang dilaporkan tiap tahap,
yang menjadi dasar bukti bagi inisiatif pengurangan pengerjaan ulang yang
didanai pimpinan operasi dalam kuartal yang sama.

**Pemerintahan.** Tim perizinan digital sebuah dinas transportasi negara bagian,
yang melapor ke lembaga dengan kantor perbaikan proses Lean yang sudah lama berdiri,
belum pernah melibatkan kantor itu karena metriknya sendiri memakai bahasa khusus
perangkat lunak yang tidak dikenali kantor tersebut. Setelah menerjemahkan aliran nilai perizinan menjadi lead time, waktu proses, dan
%C/A, kantor perbaikan proses itu mengidentifikasi bahwa kendala nyata tim
bukan kecepatan rekayasa melainkan tahap tinjauan hukum di hilir yang
berjalan jauh di bawah takt time efektifnya sendiri relatif terhadap permintaan izin, sebuah
temuan yang bisa langsung ditindaklanjuti kantor itu karena
dibingkai dalam istilah yang familier.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengadopsi kosakata Lean klasik bersama metrik khusus perangkat lunak
buku ini adalah jembatan yang kredibel dan langsung menuju
keahlian dan pendanaan perbaikan proses yang sering sudah ada
di tempat lain dalam organisasi besar. Contoh perusahaan manufaktur
di atas, yang memperoleh dana pengurangan pengerjaan ulang pada kuartal yang sama ketika pembingkaian ulang membuat
kasusnya terbaca, adalah pola yang secara andal dihasilkan pendekatan topik ini:
wawasannya tidak baru, tetapi kosakata yang membuatnya
dapat ditindaklanjuti oleh audiens yang tepat memang baru.

Total biaya kepemilikan rendah: kelima metrik ini tidak membutuhkan instrumentasi baru
di luar yang sudah dikumpulkan topik 2.4 sampai 2.6, ditambah
klasifikasi pengerjaan ulang %C/A yang biasanya merupakan tambahan sederhana pada pelacakan
cacat dan item aliran yang ada (topik 2.2). Investasi utamanya adalah
penerjemahan, menuliskan pemetaan antara istilah buku ini dan istilah klasik Lean,
yang akan terbayar pada kali pertama ia mencegah
kesalahpahaman lintas fungsi.

## Anti-pola dan jebakan

- **Mengukur %C/A hanya pada pengiriman akhir:** vektor manipulasi (gaming) yang menjadi inti
  topik ini. Tim dapat melaporkan %C/A tahap akhir yang tinggi sementara tahap-tahap
  sebelumnya diam-diam menghasilkan pengerjaan ulang yang diperbaiki sebelum ada yang mengukurnya,
  membuat seluruh aliran nilai tampak lebih sehat daripada kenyataannya. Pagar pengamannya (guardrail) adalah
  menggulirkan %C/A secara perkalian melintasi setiap tahap, perhitungan rolled
  throughput yield, dan mengaudit definisi "lengkap dan akurat" pada setiap tahap secara berkala
  agar ia tidak menyempit diam-diam seiring waktu.
- **Mengasumsikan waktu siklus buku ini dan CT Lean klasik bermakna persis
  sama:** menghasilkan kebingungan lintas fungsi yang nyata ketika kedua
  kosakata bertemu tanpa pemetaan yang terdokumentasi.
- **Menetapkan takt time dari kapasitas saat ini alih-alih permintaan pelanggan
  nyata:** menggagalkan tujuan metrik ini, yaitu menyingkap kesenjangan
  antara permintaan dan kapasitas, bukan membenarkan laju apa pun yang sudah ada.
- **Memperlakukan metrik Lean klasik sebagai usang begitu kerangka khusus
  perangkat lunak diadopsi:** membuang jembatan yang kredibel dan berbasis bukti ke
  keahlian perbaikan proses yang mungkin sudah ada di
  organisasi.
- **Mengabaikan program Lean Six Sigma yang sudah ada di tempat lain dalam
  organisasi:** kehilangan pendanaan, keahlian, dan kredibilitas institusional
  yang bisa dibuka dengan membingkai ulang metrik pengiriman dalam bahasa bersama.
- **Melaporkan %C/A tanpa memasangkannya dengan kecepatan aliran:** membiarkan
  angka throughput yang naik menyembunyikan laju pengerjaan ulang yang turun, celah
  pagar pengaman yang sama yang diperingatkan buku ini sepanjang halamannya.

## Model kematangan

- **Level 1, Initiate:** Tidak satu pun dari kelima metrik Lean klasik
  dihitung; pengiriman dibahas tanpa merujuk lead time, waktu proses,
  atau %C/A.
- **Level 2, Develop:** Lead time dan waktu siklus dilacak secara informal, tetapi
  waktu proses, %C/A, dan takt time tidak dihitung, dan tidak ada pemetaan ke
  kosakata buku ini sendiri.
- **Level 3, Standardize:** Kelima metrik klasik dihitung secara
  konsisten, dan pemetaan ke kosakata aliran dan waktu siklus buku ini
  didokumentasikan dalam piagam metrik bersama.
- **Level 4, Manage:** Rolled throughput yield dihitung melintasi setiap
  tahap aliran nilai, dan takt time dibandingkan dengan waktu siklus yang
  terukur untuk mengukur kesenjangan kapasitas secara eksplisit.
- **Level 5, Orchestrate:** Organisasi telah menghubungkan metrik pengiriman
  perangkat lunaknya ke program Lean atau Six Sigma yang ada di tempat lain
  dalam bisnis, dan dapat menunjuk keputusan investasi atau proses spesifik
  yang dibuat karena kosakata bersama membuat sebuah wawasan dapat ditindaklanjuti oleh
  audiens non-rekayasa.

## Gagasan untuk diskusi

1. Bisakah kita menghitung lead time, waktu proses, waktu siklus, %C/A, dan takt time untuk aliran nilai kita hari ini?
2. Berapa rolled throughput yield kita jika %C/A setiap tahap dikalikan bersama?
3. Apakah organisasi kita sudah menjalankan program Lean atau Six Sigma yang belum pernah kita hubungkan dengan metrik rekayasa?
4. Bagaimana waktu siklus terukur kita dibandingkan dengan takt time kita, yang dihitung dari permintaan pelanggan nyata?

## Poin-poin utama

- Kelima metrik Lean klasik, **lead time, waktu proses, waktu siklus,
  persen lengkap dan akurat, dan takt time**, mendahului perangkat lunak dan
  tetap menjadi kosakata bersama pemangku kepentingan terlatih Lean Six Sigma.
- **Waktu alir dan waktu siklus** buku ini **berpadanan dengan, tetapi tidak
  identik dengan**, lead time dan CT klasik Lean; dokumentasikan pemetaannya
  secara eksplisit untuk menghindari kebingungan lintas fungsi.
- Vektor manipulasi (gaming) utama topik ini adalah **mengukur %C/A hanya pada pengiriman
  akhir**; pagar pengamannya adalah menggulirkannya secara perkalian melintasi setiap
  tahap sebagai rolled throughput yield.
- **Takt time membingkai ulang kapasitas berdasarkan permintaan pelanggan nyata**, bukan
  laju yang ada, dan berpasangan langsung dengan utilisasi (topik 2.7) dan
  flow load (topik 2.4).
- Membingkai ulang pengiriman perangkat lunak dalam istilah Lean klasik sering menjadi cara tercepat
  untuk terhubung dengan **keahlian dan pendanaan perbaikan proses
  yang sudah ada** dalam organisasi besar.

## Referensi dan bacaan lanjutan

- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., and Daniel T. Jones. *Lean Thinking: Banish Waste and
  Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, and Daniel Roos. *The Machine That
  Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and
  Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill,
  2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*.
  Productivity Press, 1988.
