# 8.1 Merancang dasbor metrik rekayasa

## Gambaran umum dan motivasi

Setiap metrik yang dibahas buku ini pada akhirnya harus berada di tempat yang
benar-benar dilihat orang, dan [dasbor](https://en.wikipedia.org/wiki/Dashboard_(business)) yang dirancang dengan buruk dapat
membatalkan kerja cermat dari setiap topik sebelumnya: metrik yang jujur,
tertata secara tata kelola, dan berpasangan dengan pagar pengaman (guardrail),
bila disajikan secara tidak jujur, berantakan, atau kepada audiens yang salah,
akan menghasilkan persis kebingungan dan ketidakpercayaan yang selama ini
berusaha dicegah buku ini. Topik ini membahas keahlian khusus perancangan
dasbor: memilih apa yang ditampilkan kepada siapa, memvisualisasikannya
dengan jujur, dan menyusun seluruh artefak itu agar benar-benar dipakai untuk
mengambil keputusan, bukan diabaikan atau, lebih buruk lagi, disalahbaca.

Disiplin utama yang direkomendasikan topik ini adalah perancangan yang
spesifik untuk audiens. Dasbor yang dibuat untuk standup harian sebuah tim
rekayasa membutuhkan metrik, granularitas, dan kepadatan visual yang berbeda
dari dasbor untuk tinjauan eksekutif triwulanan, dan satu dasbor serba guna
yang mencoba melayani kedua audiens itu biasanya tidak melayani keduanya
dengan baik. Topik ini memperlakukan perancangan dasbor sebagai disiplin
desain yang sesungguhnya, bukan sekadar pelaporan sebagai renungan akhir,
dengan bertumpu pada prinsip kejujuran statistik dari topik 1.6 di
sepanjang pembahasan: setiap pilihan visualisasi entah membantu atau
menghambat kemampuan pembaca untuk menarik kesimpulan yang benar dari data.

Bagi tim besar, perancangan dasbor adalah tempat berbagai pagar pengaman
tingkat metrik dalam buku ini entah bertahan dalam praktik atau hilang.
Organisasi perusahaan besar yang menjalankan puluhan dasbor tim memerlukan
konsistensi tanpa kekakuan, yaitu standar bersama yang tetap memungkinkan
kebutuhan khusus setiap audiens terpenuhi; organisasi pemerintahan, yang
dasbornya bisa menghadapi pengawasan publik atau menjadi dasar pelaporan
pengawasan, memerlukan standar visualisasi jujur yang direkomendasikan topik
ini dengan ketelitian khusus, karena grafik yang menyesatkan dan ditemukan
oleh peninjau eksternal merusak kredibilitas jauh melampaui metrik yang
bersangkutan.

## Prinsip utama

- **Rancanglah untuk audiens dan keputusan tertentu, bukan untuk cakupan yang
  menyeluruh.** Dasbor yang mencoba melayani semua orang biasanya tidak
  melayani siapa pun dengan baik.
- **Setiap pilihan visualisasi entah membantu atau secara aktif menyesatkan.**
  Terapkan kejujuran statistik dari topik 1.6 dengan ketat: tren yang nyata,
  sumbu yang jujur, ketidakpastian yang terlihat.
- **Metrik yang sedikit tetapi dipilih dengan baik mengalahkan cakupan yang
  menyeluruh.** Prinsip yang terus berjalan dalam buku ini, sejak topik 1.1,
  berlaku langsung pada perancangan dasbor.
- **Dasbor membutuhkan pemilik dan irama tinjauan**, persis seperti metrik
  bertata kelola lainnya (topik 1.4), atau ia akan membusuk menjadi artefak
  yang tidak terawat dan tidak dipercaya.
- **Pasangan pagar pengaman harus berada pada tampilan yang sama.** Jangan
  pernah memisahkan metrik yang diberi insentif dari pagar pengamannya ke
  dasbor atau bagian yang berbeda.

## Rekomendasi

### Rancang dasbor yang berbeda untuk audiens dan keputusan yang berbeda

Bangunlah tampilan terpisah yang khusus tujuan, bukan satu dasbor yang
melayani semua audiens: dasbor operasional tingkat tim (irama harian atau
mingguan, metrik pengiriman dan kualitas yang granular untuk kebutuhan tim
sendiri), dasbor kepemimpinan (irama bulanan atau triwulanan, berbobot hasil
menurut topik 7.4, metrik lebih sedikit, konteks lebih banyak), dan, bila
relevan, dasbor yang menghadap ke luar (untuk pelanggan, badan pengawas, atau
publik, ditata dengan cermat menurut ketelitian berskala dampak dari topik
1.4). Masing-masing melayani keputusan yang berbeda dan harus dirancang
khusus untuk keputusan itu, bukan sebagai tampilan yang disaring dari satu
dasbor induk.

### Terapkan standar visualisasi jujur secara konsisten

Ikutilah prinsip kejujuran statistik topik 1.6 sebagai persyaratan desain
yang mutlak, bukan poles opsional: mulai sumbu nilai dari nol kecuali ada
pengecualian yang dinyatakan dan didokumentasikan secara terlihat, tampilkan
tren dari waktu ke waktu alih-alih satu potret sesaat, gunakan median dan
persentil alih-alih rata-rata untuk data yang miring, dan beri anotasi
konteks (deployment, insiden, perubahan organisasi) agar pembaca dapat
membedakan pergeseran yang nyata dari derau. Hindari manipulasi grafik
tertentu yang disebut langsung oleh topik 1.6: sumbu ganda yang menyiratkan
korelasi palsu, rentang tanggal yang dipilih secara selektif, dan efek 3-D
yang mendistorsi proporsi.

### Jangan pernah memisahkan metrik dari pagar pengaman pasangannya ke tampilan
yang berbeda

Mengikuti prinsip pemasangan pagar pengaman dari topik 1.2 sebagai aturan
desain dasbor yang mutlak: frekuensi deployment dan tingkat kegagalan
perubahan (topik 2.10) harus berada pada tampilan yang sama, selalu terlihat
bersama, tidak pernah dipisah ke dasbor "kecepatan" dan dasbor "kualitas"
tersendiri yang mungkin dilihat secara terpisah oleh audiens yang berbeda.
Ini bukan soal selera tata letak yang sepele; memisahkan metrik dari pagar
pengamannya pada dasbor yang berbeda menciptakan kembali persis risiko
paparan insentif yang diperingatkan topik 1.2, sekalipun kedua angka itu
secara teknis tetap dilacak di suatu tempat.

### Tetapkan pemilik yang bernama dan irama tinjauan untuk setiap dasbor

Terapkan disiplin tata kelola topik 1.4 langsung pada artefak dasbor itu
sendiri, bukan hanya pada metrik individual yang ditampilkannya: tunjuk
pemilik yang bertanggung jawab atas keakuratan dan relevansi dasbor yang
berkelanjutan, dan tetapkan irama tinjauan tempat metrik ditambahkan,
dipensiunkan, atau dipertimbangkan ulang. Dasbor tanpa pemilik membusuk
persis seperti metrik tanpa pemilik (topik 1.4), menumpuk kotak-kotak usang
yang tidak dimiliki siapa pun wewenang atau tanggung jawab untuk
memangkasnya.

### Cantumkan pernyataan yang eksplisit dan terlihat tentang untuk apa dasbor
tidak dipakai

Mengikuti pembedaan diagnostik versus evaluatif dari topik 1.1, nyatakan
secara langsung dan terlihat pada setiap dasbor yang metriknya mungkin
disalahgunakan untuk evaluasi individu, tepatnya untuk apa dasbor itu tidak
dipakai: "metrik ini menggambarkan kesehatan tim dan sistem; metrik ini tidak
dipakai dalam penilaian kinerja individu." Pernyataan eksplisit ini,
terutama diterapkan pada dasbor mana pun yang memuat data aktivitas (topik
3.4) atau data beban on-call (topik 6.3), adalah pilihan desain kecil dengan
efek besar dalam mencegah persis pergeseran ke arah evaluatif yang
diperingatkan buku ini di sepanjang halamannya.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Satu dasbor menyeluruh untuk semua audiens | Mudah dibangun dan dirawat karena hanya satu artefak | Tidak melayani audiens tertentu dengan baik; terlalu banyak bagi sebagian orang, kurang bagi yang lain |
| Dasbor khusus audiens | Masing-masing melayani keputusan sebenarnya dengan baik | Lebih banyak artefak untuk dibangun, dirawat, dan dijaga konsistensinya |
| Cakupan metrik menyeluruh pada setiap tampilan | Tidak ada yang terlewat | Kelelahan dasbor; mengubur metrik yang benar-benar penting bagi keputusan audiens itu |
| Pemilihan metrik minimal dan digerakkan keputusan pada setiap dasbor | Terfokus, dapat ditindaklanjuti, lebih mudah dipercaya | Memerlukan disiplin kurasi yang disengaja dan berisiko menghilangkan sesuatu yang relevan |

Ketegangan utamanya adalah **kemenyeluruhan versus fokus**, ketegangan
mendasar topik 1.1 yang diterapkan secara khusus pada perancangan dasbor.
Dasbor yang menyeluruh terasa lebih aman karena tidak ada yang tertinggal,
tetapi biasanya ia melayani audiens sebenarnya lebih buruk daripada dasbor
terfokus yang dibangun khusus di sekitar keputusan yang perlu diambil
audiens itu. Selesaikan ketegangan ini dengan membangun beberapa dasbor
khusus tujuan alih-alih satu dasbor menyeluruh, menerima biaya perawatan
tambahan yang sederhana dari beberapa artefak terfokus sebagai ganti setiap
artefak itu benar-benar berguna bagi audiens yang dituju.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah dasbor kami saat ini mencoba melayani beberapa audiens sekaligus,
   dan jika ya, siapa yang sebenarnya terlayani dengan baik?** Telusuri
   dasbor Anda yang ada dan kenali audiens utamanya yang sebenarnya
   dibandingkan audiens yang dimaksudkan; ketidakcocokan di sini umum
   terjadi dan layak disebutkan secara langsung.

2. **Apakah ada dasbor kami yang memisahkan metrik yang diberi insentif dari
   pagar pengaman pasangannya ke tampilan yang berbeda?** Audit dasbor Anda
   saat ini secara khusus untuk pola ini, dengan memeriksa setiap metrik DORA
   dari Bagian 2 beserta pasangannya sebagai titik awal.

3. **Apakah visualisasi dasbor kami lolos standar visualisasi jujur topik 1.6:
   sumbu berbasis nol, tren di atas potret sesaat, median di atas rata-rata
   untuk data yang miring?** Tinjau grafik Anda yang sebenarnya saat ini
   terhadap daftar periksa ini secara langsung.

4. **Apakah setiap dasbor yang kami pelihara memiliki pemilik yang bernama dan
   irama tinjauan, atau ada yang sekadar ada tanpa seorang pun yang
   bertanggung jawab menjaganya tetap akurat dan relevan?** Jika ada dasbor
   yang tidak memiliki pemilik bernama, kesenjangan itu layak segera ditutup,
   karena dasbor tanpa pemilik membusuk persis seperti metrik tanpa pemilik.

5. **Apakah dasbor yang metriknya mungkin disalahgunakan untuk evaluasi
   individu menyatakan secara eksplisit untuk apa ia tidak dipakai?** Periksa
   secara khusus setiap dasbor yang memuat data aktivitas atau beban on-call
   untuk pernyataan eksplisit ini.

6. **Jika kami merancang ulang dasbor dari nol hari ini, audiens demi audiens,
   dimulai dari keputusan yang perlu diambil setiap audiens, seberapa berbeda
   hasilnya dari yang ada sekarang?** Eksperimen pikiran ini sering
   menyingkap seberapa banyak struktur dasbor yang menumpuk karena inersia,
   bukan karena rancangan yang disengaja.

## Lensa sektor

**Startup.** Satu dasbor sederhana biasanya cocok pada skala ini, karena
seluruh tim dan pimpinan sering kali adalah kelompok kecil yang sama yang
mengambil keputusan yang sebagian besar sama. Fokuslah pada standar
visualisasi jujur dan pernyataan tidak-untuk-evaluasi yang eksplisit bahkan
pada skala kecil, karena kebiasaan ini jauh lebih mudah dibangun sejak awal
daripada dipasang belakangan.

**Usaha kecil.** Sebagian besar perangkat siap pakai menyediakan dasbor
bawaan yang wajar; disiplin utamanya adalah mengkurasinya menjadi beberapa
metrik yang benar-benar menginformasikan keputusan nyata bagi bisnis Anda,
alih-alih menampilkan setiap metrik yang kebetulan dihitung perangkat itu
secara bawaan.

**Perusahaan besar.** Konsistensi tanpa kekakuan adalah tantangan utama di
sini: puluhan dasbor tim memerlukan standar bersama yang cukup (aturan
visualisasi jujur, pemasangan pagar pengaman, disiplin kepemilikan) agar
tepercaya dan dapat dibandingkan, sambil tetap memungkinkan kebutuhan
operasional khusus setiap tim membentuk tampilannya sendiri. Berinvestasilah
pada standar desain dasbor bersama, yang ditegakkan melalui tata kelola
(topik 1.4), alih-alih templat yang kaku dan seragam atau dasbor lokal yang
sama sekali tidak terstruktur dan tidak konsisten.

**Pemerintahan.** Dasbor yang menghadapi pengawasan eksternal atau lembaga
pengawas memerlukan ketelitian khusus dalam visualisasi jujur dan dokumentasi
tata kelola yang eksplisit, karena grafik yang menyesatkan dan ditemukan
peninjau eksternal merusak kredibilitas institusi jauh melampaui metrik yang
bersangkutan. Terapkan standar tertinggi dari rekomendasi topik ini pada
setiap dasbor yang menghadap ke luar.

## Contoh

**Perusahaan besar.** Sebuah perusahaan teknologi logistik selama bertahun-tahun
memelihara satu dasbor "kesehatan rekayasa" yang dilihat oleh tim rekayasa
individual maupun tim kepemimpinan eksekutif, dengan lebih dari empat puluh
kotak yang mencakup segalanya, dari jumlah commit individual hingga hasil
bisnis triwulanan. Tak satu pun audiens merasa dasbor itu benar-benar
berguna: para insinyur mengabaikan kotak hasil bisnis karena tidak relevan
dengan pekerjaan harian mereka, dan para eksekutif kewalahan oleh metrik
pengiriman yang granular tanpa konteks untuk menafsirkannya. Memecahnya
menjadi dasbor operasional tim yang terfokus dengan enam kotak dan dasbor
kepemimpinan terpisah dengan delapan kotak, keduanya mengikuti pemasangan
pagar pengaman dan standar visualisasi jujur topik ini, menghasilkan
keterlibatan yang terukur lebih tinggi dan, yang krusial, para eksekutif
untuk pertama kalinya melaporkan mampu menjelaskan arti angka-angka itu
ketika ditanya oleh pimpinan mereka sendiri.

**Pemerintahan.** Dasbor layanan digital publik sebuah pemerintah negara
bagian pernah dikritik secara terbuka karena grafik yang menampilkan waktu
pemrosesan "rata-rata" dengan sumbu y terpotong yang secara visual
melebih-lebihkan perbaikan yang sederhana, pelanggaran terhadap standar
visualisasi jujur topik 1.6 yang ditemukan dan diberitakan oleh seorang
jurnalis teknologi independen. Dasbor yang dirancang ulang oleh instansi itu,
dibangun secara eksplisit berdasarkan standar topik ini, dengan sumbu
berbasis nol, median alih-alih rata-rata untuk data waktu pemrosesan yang
miring ke kanan, dan konteks yang dianotasi dengan jelas untuk setiap
perubahan penting, dipuji secara khusus dalam artikel lanjutan sebagai
teladan penyajian data sektor publik yang transparan, langsung memulihkan
kredibilitas yang dirusak oleh grafik menyesatkan sebelumnya.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari dasbor yang dirancang dengan sengaja, khusus audiens, dan
jujur adalah penggunaan yang nyata dan kepercayaan yang nyata: contoh
perusahaan logistik di atas menunjukkan biaya langsung dari satu dasbor yang
dirancang buruk, yaitu keterlibatan rendah dari kedua audiens yang dituju,
dan manfaat langsung dari perancangan ulang, yaitu keterlibatan yang terukur
lebih tinggi begitu setiap audiens mendapat tampilan yang benar-benar dibuat
untuk keputusannya sendiri.

Total biaya kepemilikan adalah upaya perancangan dan perawatan beberapa
dasbor khusus tujuan alih-alih satu artefak menyeluruh, ditambah disiplin
tata kelola yang berkelanjutan (kepemilikan bernama, irama tinjauan) yang
direkomendasikan topik ini. Biaya itu sederhana dibandingkan risiko dasbor
yang tidak dipakai, atau lebih buruk, dasbor yang secara aktif menyesatkan
audiensnya dan merusak kredibilitas, seperti yang ditunjukkan secara konkret
oleh contoh pemerintahan di atas.

## Anti-pola dan jebakan

- **Satu dasbor yang mencoba melayani setiap audiens:** biasanya tidak
  melayani siapa pun dengan baik.
- **Memisahkan metrik yang diberi insentif dari pagar pengamannya ke tampilan
  yang berbeda:** menciptakan kembali risiko paparan insentif yang
  diperingatkan topik 1.2.
- **Pilihan visualisasi yang tidak jujur:** sumbu terpotong, rentang tanggal
  yang dipilih selektif, dan sumbu ganda semuanya menyesatkan pembaca,
  kadang dengan konsekuensi reputasi yang nyata.
- **Tanpa pemilik bernama atau irama tinjauan untuk dasbor itu sendiri:**
  artefak itu membusuk persis seperti metrik tanpa pemilik.
- **Tanpa pernyataan eksplisit tentang untuk apa dasbor tidak dipakai:**
  mengundang pergeseran ke arah evaluatif yang diperingatkan buku ini di
  sepanjang halamannya.
- **Cakupan kotak yang menyeluruh alih-alih kurasi yang terfokus dan
  digerakkan keputusan:** menghasilkan kelelahan dasbor dan mengubur apa yang
  benar-benar penting.

## Model kematangan

- **Tingkat 1, Initiate (Memulai):** Satu dasbor yang tidak dikurasi, jika
  ada, melayani semua audiens dengan buruk, tanpa standar visualisasi jujur
  atau pemasangan pagar pengaman.
- **Tingkat 2, Develop (Mengembangkan):** Beberapa tampilan khusus audiens
  ada, tetapi standar visualisasi tidak konsisten dan kepemilikan tidak
  jelas.
- **Tingkat 3, Standardize (Menstandarkan):** Dasbor khusus audiens dengan
  standar visualisasi jujur yang konsisten dan pemasangan pagar pengaman
  telah ditetapkan di seluruh organisasi, masing-masing dengan pemilik
  bernama.
- **Tingkat 4, Manage (Mengelola):** Dasbor ditinjau secara berkala, dengan
  pernyataan tidak-untuk-evaluasi yang eksplisit bila relevan, dan
  kotak-kotak usang dipangkas secara aktif.
- **Tingkat 5, Orchestrate (Mengorkestrasi):** Praktik perancangan dasbor
  organisasi adalah kemampuan yang tepercaya dan bertata kelola baik, dan
  organisasi dapat menunjuk contoh-contoh nyata ketika dasbor yang jujur dan
  dirancang dengan baik memulihkan atau membangun kepercayaan pemangku
  kepentingan.

## Gagasan untuk diskusi

1. Siapa audiens utama dasbor kami saat ini yang sebenarnya, dibandingkan audiens yang dimaksudkan?
2. Apakah ada dasbor kami yang memisahkan metrik dari pagar pengamannya?
3. Apakah grafik kami saat ini akan lolos audit visualisasi jujur?
4. Apakah setiap dasbor yang kami pelihara memiliki pemilik yang bernama jelas dan akuntabel?
5. Seperti apa perancangan ulang dasbor kami dari nol yang mengutamakan audiens?

## Poin-poin utama

- Rancanglah **dasbor khusus audiens** untuk keputusan tertentu, bukan satu
  artefak menyeluruh yang mencoba melayani semua orang.
- Terapkan **standar visualisasi jujur** (topik 1.6) sebagai persyaratan
  mutlak: sumbu berbasis nol, tren di atas potret sesaat, median di atas
  rata-rata untuk data yang miring.
- **Jangan pernah memisahkan metrik yang diberi insentif dari pagar
  pengamannya** ke tampilan yang berbeda; simpan pasangan pagar pengaman pada
  dasbor yang sama.
- Tetapkan **pemilik bernama dan irama tinjauan** untuk setiap dasbor, persis
  seperti yang diwajibkan topik 1.4 bagi setiap metrik bertata kelola.
- Nyatakan secara eksplisit **untuk apa dasbor tidak dipakai**, terutama
  ketika data aktivitas atau beban operasional dapat disalahgunakan untuk
  evaluasi individu.

## Referensi dan bacaan lanjutan

- *The Visual Display of Quantitative Information*, by Edward R. Tufte
  (teks mendasar tentang visualisasi data yang jujur dan berintegritas
  tinggi).
- *Storytelling with Data*, by Cole Nussbaumer Knaflic (perancangan dasbor
  dan grafik yang praktis untuk audiens bisnis).
- *Information Dashboard Design*, by Stephen Few (prinsip desain khusus
  dasbor untuk komunikasi yang efektif dan jujur).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (disiplin pemasangan metrik yang diterapkan topik
  ini langsung pada tata letak dasbor).
