# 5.5 Pengembalian investasi untuk inisiatif rekayasa

## Gambaran umum dan motivasi

Topik ini menutup Bagian 5 dengan menyatukan semua yang diukur keempat
topik sebelumnya, kualitas, adopsi, hasil, dan biaya, ke dalam satu
pembingkaian keuangan yang pada akhirnya menentukan sebagian besar
keputusan investasi rekayasa yang besar: **[pengembalian investasi](https://en.wikipedia.org/wiki/Return_on_investment)
(return on investment, ROI)**. Entah organisasi sedang memutuskan
mendanai modernisasi platform, upaya refaktorisasi besar, atau lini produk
baru, pada akhirnya seseorang harus menjawab pertanyaan itu dalam istilah
keuangan: apakah ini sepadan dengan biayanya. Topik ini tentang menjawab
pertanyaan itu dengan jujur, memakai metrik yang sudah dibangun buku ini,
bukan menghindari pertanyaan itu (yang menyerahkan pengaruh atas keputusan
investasi kepada orang yang kurang siap menjawabnya dengan baik) atau
menjawabnya dengan kasus yang digelembungkan dan tidak berkelanjutan, yang
merusak kredibilitas ketika tidak terbukti.

Disiplin yang direkomendasikan topik ini bersandar langsung pada ekonomi
per unit topik 5.4 untuk sisi biaya dari persamaan, dan pada metrik hasil
topik 5.3, dengan perlakuannya yang jujur terhadap ketidakpastian atribusi,
untuk sisi manfaat. Kasus ROI yang dibangun dengan cara ini tentu lebih
sederhana dan lebih berhati-hati daripada angka judul yang simpel dan
menarik, tetapi ia memiliki keunggulan penentu yang ditekankan buku ini
dari awal sampai akhir: ia bertahan dari pemeriksaan, dan organisasi yang
konsisten membangun kasus ROI yang dapat dipertanggungjawabkan memperoleh
lebih banyak kepercayaan, dan karena itu lebih banyak otonomi, dalam
keputusan investasi di masa depan daripada organisasi yang sesekali
menjanjikan berlebihan.

Bagi tim besar, disiplin ROI adalah pembeda antara organisasi rekayasa
yang diperlakukan sebagai mitra strategis dan yang diperlakukan sebagai
pusat biaya yang belanjanya ditoleransi, bukan diinvestasikan secara aktif.
Organisasi perusahaan besar memakai kasus ROI yang ketat untuk bersaing
berhasil memperoleh modal melawan investasi bisnis lainnya; organisasi
pemerintahan memakai disiplin yang setara, sering kali dibingkai ulang
sebagai analisis biaya-manfaat, untuk memperoleh dan mempertahankan
pendanaan teknologi publik di tengah tekanan politik dan anggaran yang
kurang sabar terhadap janji yang kabur dan tak berdasar.

## Prinsip utama

- **Kasus ROI yang jujur dibangun dari metrik-metrik lain dalam buku ini**,
  bukan dikarang terpisah; biaya dari topik 5.4, manfaat dari topik 5.1
  sampai 5.3.
- **Total biaya kepemilikan, bukan hanya biaya awal, termasuk dalam sisi
  biaya.** Biaya pemeliharaan, dukungan, dan infrastruktur yang
  berkelanjutan menumpuk sepanjang usia sebuah sistem.
- **Perkiraan manfaat membawa ketidakpastian; nyatakan secara eksplisit**
  alih-alih menyajikan satu angka yang presisinya semu.
- **Temuan ROI negatif atau marginal adalah hasil yang sah dan berguna.**
  Disiplin ini ada untuk menginformasikan keputusan dengan jujur, bukan
  untuk membenarkan keputusan yang sudah diambil.
- **Lacak ROI aktual setelah kejadian, bukan hanya kasus proyeksi
  sebelumnya.** Proyeksi yang tidak pernah diperiksa terhadap kenyataan
  tidak mengajarkan apa-apa kepada organisasi.

## Rekomendasi

### Bangun sisi biaya dari total biaya kepemilikan, bukan hanya investasi awal

Sertakan tidak hanya biaya pengembangan awal tetapi seluruh **[total biaya
kepemilikan](https://en.wikipedia.org/wiki/Total_cost_of_ownership)
(total cost of ownership, TCO)**: pemeliharaan berkelanjutan, infrastruktur
(ekonomi per unit topik 5.4 berguna langsung di sini), dukungan, dan biaya
peluang dari kapasitas rekayasa yang dihabiskan inisiatif itu, yang
seharusnya dapat dialihkan ke pekerjaan alternatif. Proyek yang tampak
murah hanya berdasarkan biaya awal dapat menjadi mahal sepanjang usianya
begitu beban pemeliharaan berkelanjutan diperhitungkan dengan jujur.

### Bangun sisi manfaat dari bukti hasil yang terdokumentasi dan jujur

Ambil perkiraan manfaat dari disiplin pengukuran hasil pada topik 5.1
sampai 5.3: perbaikan kualitas yang diterjemahkan menjadi berkurangnya
biaya insiden dan dukungan, data adopsi yang diterjemahkan menjadi nilai
yang didorong penggunaan, dan korelasi hasil bisnis yang dibangun dengan
pendekatan rantai kausal yang jujur dan diperiksa faktor pengacaunya dari
topik 5.3. Hindari mengarang perkiraan manfaat dari prinsip dasar atau
asumsi optimistis ketika data terukur aktual atau data historis yang
sebanding tersedia untuk mendasarinya.

### Nyatakan ketidakpastian secara eksplisit, dengan rentang, bukan satu angka

Sajikan perkiraan ROI sebagai rentang (kasus konservatif dan kasus
optimistis), bukan satu angka yang presisinya semu, dan jelaskan apa yang
mendorong rentang itu: asumsi spesifik mana yang, jika ternyata terlalu
optimistis atau pesimistis, akan menggeser hasil paling jauh. Ini
mencerminkan langsung prinsip literasi statistik topik 1.6, diterapkan pada
proyeksi keuangan, dan melindungi kredibilitas kasus itu, karena satu
perkiraan titik yang ternyata keliru merusak kepercayaan jauh lebih besar
daripada rentang yang dijelaskan dengan baik dan di dalamnya hasil aktual
jatuh.

### Perlakukan temuan negatif atau marginal sebagai hasil yang sah

Rancang proses analisis ROI Anda agar benar-benar mampu menyimpulkan "ini
tidak sepadan," dan perlakukan kesimpulan itu, bila didukung bukti, sebagai
hasil yang berharga, bukan kegagalan analisis. Organisasi yang dikenal
hanya selalu menghasilkan kasus ROI positif, apa pun inisiatifnya, dengan
cepat kehilangan kredibilitas, karena pemangku kepentingan dengan tepat
menyimpulkan bahwa analisis itu sebenarnya tidak independen dari keputusan
yang hendak diinformasikannya.

### Lacak hasil aktual terhadap kasus proyeksi, dan tutup lingkarannya secara terbuka

Setelah sebuah inisiatif selesai, atau mencapai tonggak yang berarti,
bandingkan hasil terukur aktual dengan rentang proyeksi awal, dan
terbitkan perbandingan itu, termasuk di mana proyeksi meleset. Disiplin
menutup lingkaran ini, serupa dengan rekomendasi topik 3.7 tentang tindak
lanjut survei, membangun kredibilitas peramalan ROI organisasi dalam
jangka panjang dan meningkatkan akurasi perkiraan di masa depan dengan
menciptakan lingkar umpan balik yang nyata dan terlihat.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Klaim ROI sederhana dengan satu angka | Memikat, mudah dikomunikasikan | Presisinya semu; rentan keliru dan merusak kredibilitas |
| ROI berbasis rentang dengan ketidakpastian yang dinyatakan | Dapat dipertanggungjawabkan, bertahan dari pemeriksaan, jujur tentang apa yang mendorong rentang | Lebih rumit disajikan; membutuhkan lebih banyak upaya analitis |
| Analisis hanya biaya awal | Sederhana, cepat dibuat | Meremehkan biaya sebenarnya karena menghilangkan beban pemeliharaan dan dukungan berkelanjutan |
| Analisis total biaya kepemilikan penuh | Gambaran biaya investasi sebenarnya yang akurat dan lengkap | Membutuhkan lebih banyak pengumpulan data, terutama untuk proyeksi biaya berkelanjutan |

Ketegangan utamanya adalah **kesederhanaan yang membujuk versus kejujuran
yang dapat dipertanggungjawabkan**, ketegangan yang sama yang disebut
topik 5.3 untuk klaim hasil secara umum, kini diterapkan khusus pada kasus
keuangan. Klaim ROI satu angka yang sederhana dan percaya diri lebih mudah
dijual kepada pengambil keputusan pada saat itu, tetapi kasus yang jujur
dan berbasis rentang dengan ketidakpastian eksplisit serta perhitungan
total biaya kepemilikan penuh adalah yang benar-benar bertahan sepanjang
usia investasi dan melindungi kredibilitas organisasi untuk kasus
berikutnya yang perlu dibuatnya.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk kasus investasi rekayasa besar terakhir kita, apakah kita
   memperhitungkan total biaya kepemilikan, atau hanya biaya pengembangan
   awal?** Tinjau kembali kasus aslinya dan periksa apakah biaya
   pemeliharaan dan infrastruktur berkelanjutan disertakan, dan jika tidak,
   perkirakan berapa yang akan ditambahkannya.

2. **Apakah perkiraan manfaat kita bersandar pada bukti hasil yang
   terdokumentasi dan terukur, atau dibangun dari asumsi optimistis?**
   Telusuri sisi manfaat dari kasus terbaru kembali ke sumber buktinya
   yang sebenarnya dan nilai dengan jujur seberapa kuat dasarnya.

3. **Pernahkah kita menyajikan perkiraan ROI sebagai satu angka padahal
   rentang akan lebih jujur?** Diskusikan seperti apa rentang itu untuk
   kasus terbaru, dan asumsi spesifik mana yang menentukan lebar rentang
   itu.

4. **Pernahkah proses analisis ROI kita menyimpulkan bahwa sebuah inisiatif
   tidak layak dikejar, dan bagaimana kesimpulan itu diterima?** Jika
   setiap analisis di masa lalu berkesimpulan positif, diskusikan dengan
   jujur apakah itu mencerminkan pemilihan inisiatif yang sungguh sehat
   atau proses yang hanya selalu menghasilkan jawaban yang ingin didengar
   pemangku kepentingan.

5. **Untuk inisiatif yang sudah selesai, pernahkah kita kembali dan
   membandingkan hasil aktual dengan kasus proyeksi awal?** Jika belum,
   pilih satu inisiatif nyata yang sudah selesai dan lakukan perbandingan
   ini sekarang sebagai latihan kelompok, selaksa apa pun
   ketidaknyamanan jurang antara proyeksi dan kenyataan nantinya.

6. **Apa yang dibutuhkan agar kasus ROI besar berikutnya dapat
   dipertanggungjawabkan di bawah pemeriksaan skeptis yang sungguhan dari
   seseorang di luar rekayasa?** Telusuri kasus berikutnya yang Anda
   rencanakan dan temukan mata rantai bukti terlemahnya sebelum kasus itu
   sampai ke pengambil keputusan.

## Lensa sektor

**Startup.** Analisis ROI formal sering kali kurang relevan daripada
pertanyaan yang lebih sederhana tentang kelangsungan hidup dan
pertumbuhan: apakah investasi ini membantu kita mencapai tonggak
berikutnya atau putaran pendanaan berikutnya. Meski begitu, terapkan
prinsip kejujuran yang sama, tahanlah diri dari menggelembungkan kasus
untuk membenarkan keputusan yang sudah secara emosional diyakini tim,
karena pemeriksaan investor pada akhirnya akan menerapkan skeptisisme yang
sama yang direkomendasikan topik ini untuk diterapkan lebih dulu secara
internal.

**Usaha kecil.** Jaga analisis ROI tetap proporsional dengan ukuran
keputusan; investasi platform besar bertahun-tahun layak mendapat disiplin
penuh yang direkomendasikan topik ini, sedangkan pembelian perangkat kecil
tidak membutuhkan ketelitian yang sama. Fokuskan upaya analisis formal
pada beberapa keputusan terbesar dan paling berdampak.

**Perusahaan besar.** Disiplin ROI pada skala ini menentukan apakah
rekayasa bersaing berhasil memperoleh modal melawan investasi bisnis lain
yang memiliki tradisi analisis keuangan yang lebih mapan. Bangun disiplin
total biaya kepemilikan penuh dan berbasis rentang yang direkomendasikan
topik ini sebagai praktik standar, dan berinvestasilah pada pelacakan
penutup lingkaran yang membangun kredibilitas peramalan jangka panjang.

**Pemerintahan.** Analisis biaya-manfaat, padanan ROI di sektor publik,
sering kali merupakan bagian formal dan wajib dari pembenaran anggaran, dan
kejujuran tentang ketidakpastian dan total biaya kepemilikan sangat penting
ketika temuan mungkin menghadapi audit eksternal atau pengawasan legislatif.
Analisis yang melebih-lebihkan manfaat atau meremehkan biaya, begitu
ketahuan, menimbulkan kerusakan jangka panjang pada kredibilitas program di
mata badan pemberi dana.

## Contoh

**Perusahaan besar.** Pimpinan rekayasa sebuah perusahaan teknologi
logistik mengusulkan investasi besar untuk memigrasikan monolit lama ke
arsitektur layanan mikro, dan awalnya menyajikan satu angka ROI yang
optimistis berdasarkan terutama proyeksi peningkatan frekuensi deployment.
Pertanyaan skeptis dari seorang pemangku kepentingan keuangan mengungkap
bahwa kasus itu belum memperhitungkan kerumitan operasional dan biaya
infrastruktur berkelanjutan yang cukup besar yang akan dibawa arsitektur
baru itu. Kasus yang direvisi, dibangun dengan total biaya kepemilikan
penuh dan rentang yang mencerminkan skenario peningkatan pengiriman
konservatif maupun optimistis, menunjukkan pengembalian yang diharapkan
lebih sederhana tetapi tetap positif, dan yang terpenting, ia bertahan dari
pemeriksaan tim keuangan dan memperoleh pendanaan, padahal kasus asli yang
berlebihan kemungkinan tidak akan.

**Pemerintahan.** Program digitalisasi arsip pengadilan sebuah pemerintah
negara bagian membangun kasus biaya-manfaat awalnya hanya di sekitar
penghematan biaya administrasi, dengan satu angka ROI yang presisi. Tinjauan
kantor anggaran independen menemukan bahwa proyeksi itu belum
memperhitungkan penghematan waktu di sisi warga atau berkurangnya tingkat
kesalahan dalam proses hukum, manfaat yang nyata tetapi dihilangkan karena
lebih sulit dikuantifikasi daripada biaya administrasi. Analisis yang
direvisi memasukkan manfaat-manfaat ini dengan rentang yang dinyatakan
secara eksplisit untuk mencerminkan ketidakpastian pengukuran yang
sebenarnya, menghasilkan kasus yang lebih kuat dan, yang penting, lebih
dapat dipertanggungjawabkan, yang akhirnya disetujui kantor anggaran,
justru karena transparan tentang apa yang diketahui dan tidak diketahuinya
dengan yakin.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari disiplin ROI yang ketat adalah, agak rekursif, kredibilitas
disiplin ROI itu sendiri: organisasi yang konsisten membangun kasus yang
jujur dan dapat dipertanggungjawabkan, termasuk sesekali menyimpulkan bahwa
sebuah inisiatif tidak layak dikejar, memperoleh kepercayaan lebih besar
dan karena itu lebih banyak otonomi dalam keputusan investasi di masa depan
daripada organisasi yang kasusnya dipandang dengan skeptis karena pernah
menjanjikan berlebihan. Contoh perusahaan logistik di atas menunjukkan ini
secara langsung: kasus revisi yang lebih sederhana tetapi jujur berhasil
di tempat kasus asli yang digelembungkan kemungkinan gagal di bawah
pemeriksaan.

Total biaya kepemilikan dari disiplin ini adalah upaya analitis untuk
menyusun perkiraan biaya total kepemilikan penuh, mendasarkan perkiraan
manfaat pada bukti nyata, menyatakan ketidakpastian secara eksplisit, dan
melacak hasil aktual setelah kejadian. Upaya itu memang lebih berat
daripada penawaran satu angka yang cepat dan percaya diri, dan layak
dilakukan justru karena alternatifnya mempertaruhkan kredibilitas
organisasi untuk setiap kasus di masa depan yang perlu dibuatnya.

## Anti-pola dan jebakan

- **Analisis hanya biaya awal, menghilangkan total biaya kepemilikan:**
  meremehkan biaya investasi sebenarnya, terutama untuk sistem berumur
  panjang.
- **Mengarang perkiraan manfaat dari asumsi optimistis, bukan bukti
  terdokumentasi:** menghasilkan kasus yang tidak bertahan dari pemeriksaan.
- **Menyajikan satu angka ROI yang presisinya semu, bukan rentang yang
  dinyatakan:** merusak kredibilitas ketika hasil aktual berbeda dari
  perkiraan titik.
- **Proses analisis yang hanya selalu menghasilkan kesimpulan positif:**
  dibaca dengan tepat oleh pemangku kepentingan sebagai bukti bahwa proses
  itu tidak benar-benar independen.
- **Tidak pernah melacak hasil aktual terhadap proyeksi awal:**
  kehilangan lingkar umpan balik yang akan meningkatkan akurasi peramalan
  di masa depan.
- **Menyusun kasus untuk membenarkan keputusan yang sudah secara emosional
  diyakini, bukan untuk benar-benar menginformasikan keputusan:** akar
  masalah sebagian besar kasus ROI yang digelembungkan.

## Model kematangan

- **Tingkat 1, Initiate (Memulai):** Kasus ROI bersifat informal, tanpa
  dukungan bukti terdokumentasi, dan hampir selalu berkesimpulan positif
  apa pun inisiatifnya.
- **Tingkat 2, Develop (Mengembangkan):** Sebagian kasus memuat perkiraan
  biaya dan manfaat, tetapi total biaya kepemilikan diterapkan secara tidak
  konsisten dan ketidakpastian jarang dinyatakan secara eksplisit.
- **Tingkat 3, Standardize (Menstandarkan):** Kasus ROI secara konsisten
  memakai total biaya kepemilikan penuh, bukti manfaat terdokumentasi, dan
  rentang yang dinyatakan untuk mencerminkan ketidakpastian sejati, di
  seluruh organisasi.
- **Tingkat 4, Manage (Mengelola):** Hasil aktual dilacak terhadap proyeksi
  awal setelah penyelesaian, dan perbandingannya diterbitkan serta dipakai
  untuk meningkatkan peramalan di masa depan.
- **Tingkat 5, Orchestrate (Mengorkestrasi):** Organisasi memiliki rekam
  jejak bertahun-tahun yang terbukti atas peramalan ROI yang akurat dan
  jujur, termasuk kasus yang dengan tepat menyimpulkan bahwa sebuah
  inisiatif tidak layak dikejar, dan rekam jejak ini memberi rekayasa kursi
  yang dipercaya dalam keputusan investasi strategis.

## Gagasan untuk diskusi

1. Apa kasus investasi terbesar kita saat ini, dan dapatkah ia bertahan dari pemeriksaan yang benar-benar skeptis hari ini?
2. Pernahkah kita melacak hasil aktual sebuah inisiatif yang sudah selesai terhadap proyeksi ROI awalnya?
3. Apa yang perlu berubah pada proses analisis kita agar benar-benar mampu menyimpulkan "tidak sepadan"?
4. Komponen total biaya kepemilikan apa yang paling sering hilang dari perkiraan biaya kita saat ini?
5. Apa satu mata rantai bukti terlemah dalam kasus investasi besar berikutnya yang kita rencanakan?

## Poin-poin utama

- Bangun kasus ROI dari **metrik-metrik lain buku ini**, biaya dari ekonomi
  per unit (topik 5.4), manfaat dari bukti hasil terdokumentasi (topik 5.1
  sampai 5.3), bukan dari asumsi karangan.
- Sertakan **total biaya kepemilikan**, bukan hanya biaya awal, dan
  nyatakan perkiraan manfaat sebagai **rentang dengan ketidakpastian
  eksplisit**, bukan satu angka yang presisinya semu.
- Bangun proses yang benar-benar mampu menyimpulkan bahwa sebuah inisiatif
  **tidak layak dikejar**; analisis yang hanya selalu menghasilkan
  kesimpulan positif tidak kredibel.
- **Lacak hasil aktual terhadap proyeksi** setelah penyelesaian, dan
  terbitkan perbandingannya untuk membangun kredibilitas peramalan jangka
  panjang.
- Disiplin ROI yang jujur dan dapat dipertanggungjawabkan adalah yang
  memberi rekayasa **kursi yang dipercaya** dalam keputusan investasi
  strategis dari waktu ke waktu.

## Referensi dan bacaan lanjutan

- *How to Measure Anything*, by Douglas W. Hubbard (mengkuantifikasi nilai
  yang tidak pasti dan menyusun perkiraan berbasis rentang yang dapat
  dipertanggungjawabkan).
- *Cloud FinOps*, by J.R. Storment and Mike Fuller (disiplin total biaya
  kepemilikan untuk investasi infrastruktur berbasis cloud).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (dasar riset untuk menghubungkan investasi
  praktik pengiriman dengan imbal hasil bisnis).
- U.S. Office of Management and Budget Circular A-94, panduan analisis
  biaya-manfaat untuk program federal (disiplin ROI sektor publik).
