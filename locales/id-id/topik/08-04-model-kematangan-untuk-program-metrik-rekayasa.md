# 8.4 Model kematangan untuk program metrik rekayasa

## Gambaran umum dan motivasi

Setiap topik dalam Bagian 1 sampai 7 buku ini diakhiri dengan
[model kematangan](https://en.wikipedia.org/wiki/Capability_Maturity_Model)
lima tingkatnya sendiri, yang cakupannya terbatas pada keluarga metrik
topik itu. Topik ini melakukan sesuatu yang berbeda: ia mundur selangkah dan
bertanya seperti apa kematangan bagi *program* metrik secara keseluruhan,
yaitu kemampuan organisasi yang menghasilkan, mengelola, dan bertindak atas
semua metrik individual itu bersama-sama. Sebuah organisasi bisa berada di
Tingkat 4 pada kematangan metrik DORA individual sementara masih berada di
Tingkat 1 pada kematangan program secara keseluruhan, misalnya jika ia
memiliki instrumentasi yang sangat baik tetapi tanpa tata kelola (topik 1.4),
atau metrik individual yang sangat baik tetapi peluncurannya digerakkan
ketakutan (topik 8.3) sehingga merusak data yang mendasarinya, betapapun
baiknya setiap metrik dirancang.

Model topik ini dibangun di sekitar lima dimensi yang melintasi setiap
keluarga metrik individual yang dibahas buku ini: tata kelola dan
kepemilikan (topik 1.4), kualitas instrumentasi (topik 1.5), keseimbangan
hasil versus keluaran (topik 1.3, topik 7.4), kepercayaan budaya (topik 8.3),
dan perbaikan berkelanjutan (disiplin pemensiunan dan revisi yang ditetapkan
topik 1.1 di awal buku ini). Kematangan program secara keseluruhan dalam
praktiknya adalah nilai minimum, bukan rata-rata, dari kelima dimensi ini,
karena kelemahan serius pada salah satunya, terutama kepercayaan budaya, dapat
merusak nilai kekuatan di semua dimensi lain, persis seperti yang
diargumentasikan langsung oleh topik 8.3.

Bagi tim besar, model terkonsolidasi ini memberi pimpinan satu instrumen yang
jujur untuk penilaian mandiri organisasi, berbeda dari dan melengkapi
pemeriksaan kematangan per topik yang disediakan buku ini di sepanjang
halamannya. Organisasi perusahaan besar yang membandingkan kematangan metrik
antar unit bisnis, dan organisasi pemerintahan yang melaporkan kematangan
program kepada badan pengawas, sama-sama diuntungkan oleh penilaian tunggal
lintas bidang ini, alih-alih harus menyintesis sendiri empat puluh lima
pembacaan kematangan tingkat topik yang terpisah menjadi gambaran
keseluruhan yang koheren.

## Prinsip utama

- **Kematangan program adalah nilai minimum dari dimensi-dimensinya, bukan
  rata-rata.** Kelemahan serius pada kepercayaan budaya merusak kekuatan di
  tempat lain.
- **Kelima dimensi lintas bidang adalah tata kelola, instrumentasi,
  keseimbangan hasil, kepercayaan budaya, dan perbaikan berkelanjutan.**
  Setiap dimensi menyatukan benang-benang dari banyak topik individual.
- **Model ini melengkapi, bukan menggantikan, model kematangan tingkat topik
  yang individual.** Gunakan keduanya bersama untuk gambaran yang lengkap.
- **Penilaian mandiri harus jujur dan spesifik, bukan aspiratif.** Beri nilai
  sesuai posisi Anda yang sebenarnya, dengan bukti konkret, bukan posisi yang
  ingin Anda capai.
- **Perpindahan antar tingkat memerlukan investasi yang disengaja**, bukan
  sekadar berlalunya waktu; kematangan tidak bertambah dengan sendirinya.

## Rekomendasi

### Nilai setiap dari kelima dimensi secara terpisah, dengan bukti konkret

Untuk tata kelola, periksa apakah setiap metrik yang berkonsekuensi memiliki
pemilik bernama dan piagam yang terdokumentasi (topik 1.4). Untuk
instrumentasi, periksa apakah metrik berasal dari sumber otomatis dan bukan
laporan mandiri sedapat mungkin (topik 1.5). Untuk keseimbangan hasil, hitung
rasio sebenarnya antara metrik berbobot hasil dan berbobot keluaran pada
dasbor utama Anda (topik 7.4). Untuk kepercayaan budaya, nilai dengan jujur
apakah riwayat peluncuran Anda pernah mencakup penggunaan metrik yang keliru
dan menghukum serta bagaimana hal itu ditangani (topik 8.3). Untuk perbaikan
berkelanjutan, periksa apakah organisasi Anda memiliki riwayat terdokumentasi
dalam memensiunkan metrik yang tidak lagi sepadan (topik 1.1). Beri nilai
setiap dimensi secara terpisah sebelum menggabungkannya.

### Ambil nilai minimum dari semua dimensi sebagai skor keseluruhan Anda yang
jujur

Tahanlah godaan untuk merata-ratakan kelima skor dimensi Anda menjadi satu
skor gabungan yang lebih menyanjung. Program dengan instrumentasi yang sangat
baik (Tingkat 4) tetapi kepercayaan budaya yang lemah (Tingkat 1) bukanlah,
dalam arti yang bermakna, program Tingkat 2 atau 3; dimensi yang lemah secara
aktif merusak nilai dimensi yang kuat, karena data tak tepercaya yang dirusak
manipulasi akibat ketakutan tidak diselamatkan oleh fakta bahwa data itu
dikumpulkan dengan instrumentasi yang sangat baik. Laporkan nilai minimum
dengan jujur, meskipun menghasilkan gambaran keseluruhan yang kurang menyanjung
dibandingkan rata-rata.

### Gunakan model ini bersama, bukan sebagai pengganti, model tingkat topik

Model terkonsolidasi ini menjawab "seberapa matang program kami secara
keseluruhan"; model tingkat topik individual di sepanjang Bagian 2 sampai 8
menjawab "seberapa matang praktik kami untuk metrik spesifik ini." Gunakan
keduanya bersama: model terkonsolidasi untuk memprioritaskan dimensi lintas
bidang mana yang paling membutuhkan investasi, dan model tingkat topik untuk
mengenali keluarga metrik spesifik mana yang paling membutuhkan perhatian
dalam dimensi itu.

### Tinjau kembali penilaian pada irama yang tetap, bukan hanya ketika
didorong oleh krisis

Mengikuti disiplin tata kelola yang konsisten dalam buku ini (topik 1.4),
nilai ulang kematangan program pada irama berkala, tahunan adalah hal yang
lazim, alih-alih hanya setelah krisis (insiden manipulasi yang ditemukan,
laporan publik yang merusak kredibilitas) memaksa pertanyaan itu muncul.
Program yang hanya memeriksa kematangannya sendiri secara reaktif
kehilangan kesempatan untuk menangkap dan menangani dimensi yang melemah
sebelum menimbulkan insiden nyata yang mahal.

### Perlakukan skor rendah dengan jujur sebagai titik awal investasi, bukan
nilai gagal

Mengikuti kerangka diagnostik, bukan evaluatif, yang ditetapkan topik 1.1
untuk seluruh buku ini, gunakan skor kematangan yang rendah, pada dimensi
mana pun, sebagai titik awal rencana investasi yang disengaja (peta jalan
adopsi topik 8.5 adalah langkah berikutnya yang langsung), bukan sebagai
vonis untuk disesali. Sebagian besar organisasi, bila dinilai dengan jujur,
akan menemukan kelemahan nyata di suatu tempat dalam model ini; respons yang
produktif adalah investasi yang tertarget, bukan sikap defensif terhadap
skornya.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Merata-ratakan kelima skor dimensi | Menghasilkan satu angka yang sederhana dan lebih menyanjung | Menyembunyikan kelemahan kritis pada satu dimensi yang merusak yang lain |
| Mengambil nilai minimum dari semua dimensi | Jujur, dapat ditindaklanjuti, mengenali kendala yang sebenarnya dengan tepat | Bisa terasa mengecilkan hati jika satu dimensi tertinggal jauh dari yang lain |
| Hanya menggunakan model tingkat topik | Panduan yang rinci dan spesifik metrik | Melewatkan pandangan lintas bidang tentang kesehatan program secara keseluruhan |
| Hanya menggunakan model terkonsolidasi ini | Sederhana, tingkat tinggi | Melewatkan rincian spesifik yang dapat ditindaklanjuti yang disediakan model tingkat topik |

Ketegangan utamanya adalah **kesederhanaan versus kejujuran**, menggemakan
peringatan topik 5.5 terhadap satu angka tunggal yang presisinya palsu. Skor
rata-rata lebih sederhana dan lebih nyaman dilaporkan, tetapi secara aktif
menyembunyikan kendala sebenarnya pada keterpercayaan dan nilai program
Anda secara keseluruhan. Selesaikan ketegangan ini demi kejujuran: laporkan
nilai minimum, dan gunakan model terkonsolidasi ini bersama model tingkat
topik individual untuk gambaran yang lengkap, akurat, dan dapat
ditindaklanjuti.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Dinilai dengan jujur dan terpisah, tingkat berapa yang sebenarnya dicapai
   masing-masing dari kelima dimensi kami, yaitu tata kelola, instrumentasi,
   keseimbangan hasil, kepercayaan budaya, dan perbaikan berkelanjutan?**
   Telusuri setiap dimensi secara eksplisit, dengan bukti konkret dan bukan
   kesan, sebelum menggabungkannya menjadi penilaian keseluruhan.

2. **Dimensi mana yang paling lemah bagi kami, dan apakah itu sesuai dengan
   intuisi kami tentang kesehatan program secara keseluruhan, atau
   menyingkap sesuatu yang sebelumnya belum kami sebut secara langsung?**
   Skor rendah pada kepercayaan budaya, misalnya, dapat merusak keyakinan
   pada data yang secara teknis tampak sangat baik.

3. **Apakah kami selama ini merata-ratakan kekuatan dan kelemahan kami
   menjadi gambaran keseluruhan yang lebih menyanjung, alih-alih melaporkan
   dimensi terlemah kami dengan jujur sebagai kendala yang sebenarnya?**
   Jujurlah tentang cara organisasi Anda sebelumnya membicarakan kematangan
   metriknya sendiri.

4. **Kapan terakhir kali kami menilai ulang kematangan program secara
   keseluruhan secara formal, dan apakah itu didorong oleh krisis atau oleh
   irama berkala yang disengaja?** Jika hanya didorong krisis, diskusikan
   seperti apa irama penilaian berkala ke depannya.

5. **Seperti apa sebenarnya investasi tertarget pada dimensi terlemah kami,
   secara konkret, untuk triwulan berikutnya?** Beralihlah langsung dari
   penilaian ke tindakan, menghubungkan diagnostik topik ini dengan peta jalan
   adopsi topik 8.5.

6. **Bagaimana penilaian mandiri kami dibandingkan dengan tinjauan eksternal
   yang jujur oleh seseorang dari luar organisasi kami?** Pertanyaan ini
   menguji apakah penilaian internal Anda sendiri mungkin tunduk pada bias
   optimistis yang sama yang diperingatkan buku ini di sepanjang
   halamannya, yang layak diperiksa secara berkala dengan perspektif yang
   benar-benar dari luar.

## Lensa sektor

**Startup.** Penilaian formal lima dimensi kemungkinan tidak perlu pada skala
yang sangat kecil, ketika kesadaran informal biasanya mencakup sebagian besar
yang akan disingkap model ini. Kebiasaan yang layak diadopsi sejak dini
sederhananya adalah bersikap jujur tentang kepercayaan budaya secara khusus,
karena budaya metrik awal sebuah perusahaan rintisan menetapkan fondasi yang
menjadi jauh lebih sulit diubah setelah organisasi tumbuh secara signifikan.

**Usaha kecil.** Menelusuri kelima dimensi secara sederhana, jujur, dan
informal sekali setahun, bahkan tanpa penilaian formal, menangkap sebagian
besar nilai topik ini tanpa memerlukan proses penilaian terstruktur pada skala
ini.

**Perusahaan besar.** Model terkonsolidasi ini sangat berharga untuk
membandingkan kematangan metrik antar banyak unit bisnis secara adil, karena
perbandingan topik demi topik di puluhan tim akan merepotkan. Gunakan model
ini untuk memprioritaskan investasi di seluruh organisasi ke arah dimensi
mana pun yang menunjukkan kelemahan paling luas di berbagai unit.

**Pemerintahan.** Penilaian mandiri kematangan yang terdokumentasi dan jujur,
dengan model terkonsolidasi ini, adalah artefak yang benar-benar berguna untuk
menunjukkan ketelitian program kepada badan pengawas, asalkan penilaian itu
dilakukan dengan jujur dan bukan secara aspiratif. Pertimbangkan tinjauan
eksternal berkala terhadap penilaian mandiri itu sendiri, terutama untuk
dimensi kepercayaan budaya, yang paling sulit dinilai secara akurat dari
perspektif internal murni.

## Contoh

**Perusahaan besar.** Penilaian mandiri awal sebuah perusahaan teknologi
logistik memberi dimensi instrumentasinya skor Tingkat 4 (sumber data
otomatis dan komprehensif dari pipeline dan sistem) tetapi dimensi
kepercayaan budayanya Tingkat 1, menyusul insiden penyalahgunaan metrik yang
tidak ditangani dua tahun sebelumnya dan tidak pernah diakui secara langsung
atau diperbaiki (menggemakan langsung contoh pemerintahan topik 8.3). Naluri
awal pimpinan adalah merata-ratakannya menjadi gambaran keseluruhan yang layak
di Tingkat 2 atau 3; penerapan yang lebih jujur atas penilaian berbasis
minimum dalam topik ini dengan tepat mengidentifikasi kepercayaan budaya
sebagai kendala sebenarnya atas nilai seluruh program, karena bahkan
instrumentasi yang sangat baik pun menghasilkan data yang, karena para
insinyur mengetahui insiden masa lalu, masih belum sepenuhnya mereka percayai
atau laporkan dengan jujur. Investasi tertarget khusus pada perbaikan
kepercayaan budaya, mengikuti langsung panduan topik 8.3, diprioritaskan di
atas investasi instrumentasi lebih lanjut sebagai hasil langsung dari
penilaian jujur berbasis minimum ini.

**Pemerintahan.** Sebuah badan statistik nasional yang melakukan penilaian
mandiri kematangan formal pertamanya, dengan model terkonsolidasi ini sebagai
bagian dari tinjauan tata kelola teknologi yang lebih luas, menemukan dimensi
tata kelolanya memperoleh skor baik (kepemilikan jelas, piagam
terdokumentasi) tetapi dimensi keseimbangan hasilnya memperoleh skor buruk,
dengan sebagian besar metrik yang dilacak berbasis keluaran dan aktivitas
meskipun argumen Bagian 7 tentang pembobotan hasil telah dipahami dengan baik
secara intelektual oleh pimpinan teknis instansi itu. Temuan yang jujur dan
spesifik ini, alih-alih kesan umum yang samar bahwa "kita seharusnya
mengukur hasil lebih banyak," memberi rencana investasi instansi berikutnya
(topik 8.5) titik awal yang konkret dan berbasis bukti, dan pelaporan
lanjutan kepada dewan pengawas instansi secara khusus menyebut penilaian
kematangan ini sebagai dasar strategi investasi metrik yang diarahkan ulang.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari penilaian mandiri kematangan yang jujur dan berbasis minimum
adalah mengenali dengan tepat kendala sebenarnya atas nilai program metrik,
alih-alih terus berinvestasi pada dimensi yang sudah kuat sementara dimensi
yang lemah terus merusak keterpercayaan seluruh program, persis pola yang
digambarkan kedua contoh di atas. Efek pembidikan ini adalah nilai utama
model: ia mengarahkan investasi perbaikan yang terbatas ke tempat yang
benar-benar akan menggerakkan kematangan program secara keseluruhan, bukan ke
mana pun investasi kebetulan paling mudah atau paling dikenal.

Total biaya kepemilikan adalah upaya penilaian itu sendiri, sederhana dan
berkala, ditimbang terhadap risiko terus berinvestasi pada dimensi yang sudah
kuat sementara dimensi lemah yang tidak ditangani, terutama kepercayaan
budaya, terus diam-diam merusak nilai segala sesuatu yang telah dibangun
program.

## Anti-pola dan jebakan

- **Merata-ratakan skor dimensi menjadi skor gabungan yang lebih menyanjung:**
  menyembunyikan kendala sebenarnya atas nilai program secara keseluruhan.
- **Menilai hanya secara aspiratif, berdasarkan kebijakan yang dinyatakan dan
  bukan praktik yang sebenarnya:** menghasilkan gambaran yang tidak akurat dan
  terlalu optimistis.
- **Menggunakan model terkonsolidasi ini sebagai pengganti, bukan pelengkap,
  model tingkat topik:** kehilangan rincian spesifik yang dapat ditindaklanjuti
  yang disediakan model-model individual itu.
- **Hanya menilai ulang setelah krisis memaksa pertanyaan itu muncul:**
  kehilangan kesempatan untuk menangkap dan menangani dimensi yang melemah
  secara proaktif.
- **Memperlakukan skor rendah sebagai nilai gagal alih-alih titik awal
  investasi:** mengundang sikap defensif alih-alih respons diagnostik yang
  produktif yang direkomendasikan buku ini di sepanjang halamannya.
- **Tidak pernah mencari perspektif eksternal yang jujur atas penilaian
  mandiri:** berisiko bias optimistis yang sama, yang diperingatkan buku ini
  di sepanjang halamannya, memengaruhi penilaian itu sendiri.

## Model kematangan

- **Tingkat 1, Initiate (Memulai):** Tidak ada penilaian lintas bidang yang
  formal; keluarga metrik individual mungkin dinilai secara terpisah, tetapi
  kesehatan program secara keseluruhan tidak diperiksa.
- **Tingkat 2, Develop (Mengembangkan):** Ada kesadaran informal tentang
  kekuatan dan kelemahan program secara keseluruhan, tetapi belum ada
  penilaian lima dimensi yang terstruktur.
- **Tingkat 3, Standardize (Menstandarkan):** Penilaian lima dimensi yang
  terstruktur, jujur, dan berbasis minimum dilakukan, dengan bukti konkret,
  di seluruh organisasi.
- **Tingkat 4, Manage (Mengelola):** Penilaian diulang pada irama berkala,
  dan temuannya secara langsung dan konsisten menjadi dasar prioritas
  investasi yang tertarget.
- **Tingkat 5, Orchestrate (Mengorkestrasi):** Organisasi memiliki praktik
  penilaian mandiri jujur yang terbukti dan berkelanjutan, termasuk tinjauan
  eksternal berkala, dan dapat menunjuk keputusan investasi spesifik yang
  secara langsung digerakkan oleh temuan penilaian.

## Gagasan untuk diskusi

1. Berapa skor kami yang jujur dan berbasis bukti pada masing-masing dari kelima dimensi saat ini?
2. Dimensi mana yang menjadi kendala sebenarnya bagi kami, dan apakah itu sesuai dengan intuisi kami?
3. Pernahkah kami merata-ratakan skor menjadi gambaran yang lebih menyanjung daripada yang ditunjukkan nilai minimum?
4. Kapan terakhir kali kami menilai ulang secara formal, dan apakah itu proaktif atau digerakkan krisis?
5. Apa yang kemungkinan akan disingkap oleh tinjauan eksternal yang jujur atas penilaian mandiri kami?

## Poin-poin utama

- Kematangan program mencakup lima dimensi lintas bidang: **tata kelola,
  instrumentasi, keseimbangan hasil, kepercayaan budaya, dan perbaikan
  berkelanjutan**.
- Kematangan keseluruhan adalah **nilai minimum dari semua dimensi, bukan
  rata-rata**; kelemahan pada kepercayaan budaya merusak kekuatan di tempat
  lain.
- Gunakan model terkonsolidasi ini **bersama, bukan sebagai pengganti**,
  model kematangan tingkat topik individual di sepanjang buku ini.
- **Nilai ulang pada irama berkala**, alih-alih menunggu sampai krisis
  memaksa pertanyaan itu muncul.
- Perlakukan skor rendah sebagai **titik awal investasi yang jujur**, bukan
  nilai gagal, mengikuti kerangka diagnostik buku ini di sepanjang halamannya.

## Referensi dan bacaan lanjutan

- *Capability Maturity Model Integration (CMMI)*, Software Engineering
  Institute (metodologi model kematangan umum yang menjadi inspirasi
  struktural pendekatan topik ini).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (dasar riset untuk model kematangan tingkat topik
  individual yang dihimpun model terkonsolidasi ini).
- *Measuring and Managing Performance in Organizations*, by Robert D.
  Austin (penilaian organisasi atas kesehatan dan disfungsi program metrik).
- *The Fifth Discipline: The Art and Practice of the Learning
  Organization*, by Peter M. Senge (penilaian mandiri organisasi pada tingkat
  sistem dan perbaikan berkelanjutan).
