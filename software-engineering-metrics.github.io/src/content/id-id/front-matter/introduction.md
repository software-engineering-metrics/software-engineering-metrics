# Pengantar

Buku ini adalah panduan kerja untuk mengukur [rekayasa perangkat lunak](https://en.wikipedia.org/wiki/Software_engineering)
dengan baik, bagi tim mana pun mulai dari startup lima orang hingga perusahaan
dengan ribuan engineer atau lembaga pemerintah yang melapor terhadap kerangka
kinerja menurut undang-undang. Buku ini ada karena kebanyakan nasihat tentang
metrik adalah ringkasan sebuah kerangka tanpa rincian operasional, atau daftar
fitur dari vendor alat. Buku ini berusaha menjadi bukan keduanya: ia tegas
tentang apa yang harus diukur, eksplisit tentang bagaimana setiap metrik
dimanipulasi, dan praktis tentang bagaimana menjalankan program metrik yang
dipercaya tim alih-alih ditakuti.

## Untuk siapa buku ini

Pembaca utama adalah orang-orang yang memilih apa yang diukur sebuah organisasi:
pemimpin rekayasa, staff dan principal engineer, tim platform dan DevOps, serta
manajer program dan produk. Pembaca sekunder adalah setiap engineer yang ingin
memahami alasan di balik dasbor yang diminta untuk digerakkan angkanya, dan
bagaimana menantang metrik yang sudah berhenti melayani tujuannya. Anda tidak
perlu membacanya dari sampul ke sampul. Setiap topik berdiri sendiri, menyatakan
prinsipnya lebih dulu, dan diakhiri dengan poin praktis, model kematangan, dan
rujukan.

## Bagaimana buku ini diatur

Buku ini dibagi menjadi **bagian** (bilangan bulat) dan **topik** (desimal).
Topik **N.0** memperkenalkan setiap bagian dan menjelaskan bagaimana topik-
topiknya saling terkait; topik **N.1, N.2, …** membahas topik-topiknya secara
mendalam.

- **Bagian 1, Dasar-dasar Pengukuran:** mengapa mengukur sama sekali, hukum
  Goodhart dan psikologi manipulasi, memilih hasil di atas keluaran, tata kelola
  dan kepemilikan, sumber data, serta literasi statistik yang dibutuhkan setiap
  program metrik.
- **Bagian 2, Metrik Aliran:** Flow Framework, flow item dan lima metrik
  alirannya, waktu siklus, teori antrean, metrik value stream Lean klasik,
  metrik pull request dan code review, serta kerangka DORA sebagai topik rujukan.
- **Bagian 3, Pengalaman Pengembang dan Kerangka SPACE:** kerangka SPACE dan lima
  dimensinya, serta cara menjalankan survei pengalaman pengembang tanpa
  menjadikannya kontes popularitas.
- **Bagian 4, Metrik Kode dan Kualitas:** kompleksitas, cakupan dan efektivitas
  pengujian, churn dan hotspot, analisis statis, utang teknis, dan dokumentasi.
- **Bagian 5, Metrik Produk dan Bisnis:** cacat yang lolos, adopsi fitur, hasil
  pelanggan dan bisnis, ekonomi unit, dan pengembalian investasi.
- **Bagian 6, Metrik Keandalan, Operasi, dan Keamanan:** SLI, SLO, dan anggaran
  galat, metrik insiden, siaga dan kapasitas, serta metrik keamanan dan
  kerentanan.
- **Bagian 7, Metrik di Era AI:** pergeseran paradigma AI generatif, cara
  mengukur pengembangan berbantuan AI, risiko inflasi metrik, dan mengapa
  telemetri hasil menjadi bintang utara ketika keluaran menjadi murah.
- **Bagian 8, Membangun Program Metrik:** merancang dasbor, membangun atau
  membeli, meluncurkan metrik tanpa menumbuhkan rasa takut, model kematangan,
  dan peta jalan adopsi bertahap.
- **Bagian 9, Lampiran:** glosarium, rujukan definisi dan rumus metrik, daftar
  periksa, templat, penilaian mandiri kematangan, rujukan, dan indeks.

## Prinsip pemandu

Delapan prinsip membentuk tulang punggung buku ini:

1. **Ukuran yang menjadi target berhenti menjadi ukuran yang baik.** Rancang
   melawan hukum Goodhart sejak awal, bukan setelah distorsi muncul.
2. **Hasil di atas keluaran di atas aktivitas.** Bobot setiap kumpulan metrik ke
   arah apa yang berubah bagi pelanggan atau bisnis, bukan apa yang dihasilkan
   tim atau seberapa sibuknya.
3. **Setiap metrik yang diberi insentif membutuhkan pengaman.** Pasangkan
   kecepatan dengan kualitas, throughput dengan stabilitas, dan jangan pernah
   mengejar satu angka secara terpisah.
4. **Ukur sistem, bukan orang.** Metrik yang mengindividualkan kesalahan merusak
   kepercayaan dan mengundang manipulasi; metrik yang mengungkap kendala sistem
   mengundang perbaikan.
5. **Pilih instrumentasi daripada laporan mandiri bila bisa, dan laporan mandiri
   bila tidak bisa.** Jumlah deployment datang dari pipeline; kepuasan datang
   dari bertanya.
6. **Metrik mendapatkan tempatnya atau dipensiunkan.** Setiap ubin di dasbor
   memakan perhatian. Pangkas dengan sengaja.
7. **Definisi lebih penting daripada dasbor.** Dua tim yang menghitung "lead
   time" secara berbeda akan menghabiskan lebih banyak waktu berdebat tentang
   angkanya daripada bertindak atasnya.
8. **AI generatif adalah alasan untuk memeriksa ulang, bukan sekadar menetapkan
   ulang baseline.** Ketika keluaran menjadi murah, metrik yang dibangun di
   sekitar volume keluaran membutuhkan pengaman baru, bukan hanya target baru.

## Tema lintas bagian

[Hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) adalah satu
tema yang menembus setiap bagian buku ini, bukan hanya topik 1.2. Setiap topik
keluarga metrik menyatakan bagaimana metrik yang dibahasnya dimanipulasi dan
pengaman mana yang menangkapnya. Kewajiban pelaporan pemerintah dan perusahaan,
di mana sebuah metrik bisa memiliki bobot hukum atau kontrak, diperlakukan
sebagai masukan desain di seluruh buku, bukan renungan belakangan yang terbatas
pada satu topik.

## Cara memakainya

Adopsi secara bertahap; jangan jatuhkan dasbor sekaligus pada tim yang belum
pernah punya. Mulai di tempat rasa sakit terbesar, gunakan model kematangan
setiap topik untuk menempatkan diri Anda dengan jujur, dan biarkan peta jalan
adopsi (topik 8.5) mengurutkan pekerjaan. Tujuannya bukan dinding bagan. Tujuannya
adalah organisasi yang dapat mengatakan, dengan bukti, apakah yang dilakukannya
berhasil, dan yang cukup memercayai angkanya sendiri untuk bertindak atasnya.
