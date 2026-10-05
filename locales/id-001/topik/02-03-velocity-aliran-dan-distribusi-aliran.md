# 2.3 Velocity aliran dan distribusi aliran

## Gambaran umum dan motivasi

**Velocity aliran (flow velocity)** adalah jumlah item aliran (topik 2.2) yang
diselesaikan dalam periode tertentu, ukuran
[throughput](https://en.wikipedia.org/wiki/Throughput) dalam Flow Framework.
**Distribusi aliran (flow distribution)** adalah proporsi tiap jenis item
aliran, fitur, cacat, risiko, dan utang, di antara item yang diselesaikan pada
periode yang sama. Kedua metrik ini dirancang untuk dibaca bersamaan: velocity
saja menjawab "berapa banyak yang kita kirim," dan distribusi saja menjawab
"jenis pekerjaan apa itu," tetapi kedua pertanyaan itu tidak banyak berarti
tanpa yang lain. Sebuah tim dapat menaikkan velocity-nya sementara distribusinya
diam-diam bergeser dari fitur menuju pengerjaan ulang cacat, yang tampak
seperti percepatan di bagan velocity padahal sebenarnya gejala penurunan
kualitas.

Pasangan ini adalah disiplin yang sama yang diminta topik 1.2 dari setiap
keluarga metrik di buku ini: jangan pernah melaporkan angka kecepatan tanpa
pagar pengaman yang menunjukkan apa harga kecepatan itu. Velocity aliran adalah
generalisasi paling langsung di bagian ini dari metrik throughput, secara
semangat lebih dekat ke frekuensi deployment (topik 2.10) daripada angka tunggal
lain mana pun di buku ini, tetapi sadar jenis item dengan cara yang tidak pernah
dimiliki frekuensi deployment. Frekuensi deployment memberi tahu seberapa sering
kode sampai ke produksi; velocity aliran, dipasangkan dengan distribusi,
memberi tahu seberapa sering nilai sampai ke produksi dan jenis nilai apa itu.

Bagi tim besar yang menjalankan banyak aliran nilai bersamaan, pasangan ini
memperlihatkan pola yang sepenuhnya disembunyikan oleh satu angka throughput:
aliran nilai yang velocity-nya tampak sehat sementara distribusinya diam-diam
bergeser menjadi hampir murni pekerjaan fitur, diam-diam membuat kekurangan
kapasitas utang dan risiko yang menurut topik 2.2 perlu dilindungi secara
sengaja. Organisasi perusahaan besar yang membandingkan throughput antarlini
produk, dan lembaga pemerintahan yang melaporkan keluaran pengiriman kepada
badan pengawas, sama-sama membutuhkan pasangan ini agar tidak keliru
menganggap keluaran mentah sebagai kemajuan yang sungguh-sungguh dan
berkelanjutan.

## Prinsip utama

- **Velocity tanpa distribusi menyembunyikan apa yang sebenarnya dikirim.**
  Jumlah item yang naik tidak mengatakan apa pun tentang apakah jumlah itu
  sehat, dimanipulasi, atau diam-diam condong ke pekerjaan paling mudah yang
  tersedia.
- **Distribusi tanpa velocity menyembunyikan skala.** Pembagian persentase yang
  tampak sehat tidak banyak berarti jika Anda juga tidak tahu berapa banyak
  total pekerjaan yang diwakilinya.
- **Kedua metrik harus dilaporkan bersamaan, selalu.** Ini penerapan langsung
  prinsip pemasangan pagar pengaman dari topik 1.2 pada data aliran secara
  khusus.
- **Velocity terpapar manipulasi substitusi yang sama seperti metrik hitungan
  item mana pun.** Memecah pekerjaan sulit menjadi banyak item kecil yang mudah
  menggelembungkan hitungan tanpa memberikan nilai yang sepadan lebih banyak.
- **Distribusi yang sehat bergantung pada konteks, bukan target yang tetap.**
  Topik 2.2 membahasnya mendalam; velocity dan distribusi selalu harus
  ditafsirkan terhadap target yang tersirat oleh konteks.

## Rekomendasi

### Laporkan velocity aliran sebagai garis tren, jangan pernah sebagai angka satu periode

Hitungan item satu periode bersifat bising dan mudah disalahbaca. Plot
velocity aliran di beberapa periode berurutan dan lihat trennya, bukan satu
titik data mana pun, disiplin yang sama yang direkomendasikan topik 1.6 untuk
metrik deret waktu apa pun yang rentan terhadap variasi alami.

### Jangan pernah menampilkan velocity aliran tanpa distribusinya di sampingnya

Perlakukan ini sebagai aturan keras untuk dasbor atau laporan apa pun, bukan
sekadar tambahan yang menyenangkan. Bagan velocity yang ditampilkan sendirian
mengundang kesalahbacaan yang menjadi pembuka topik ini: throughput yang naik
padahal sebenarnya porsi pengerjaan ulang atau pekerjaan fitur yang mudah yang
naik, menyingkirkan kapasitas utang dan risiko. Letakkan keduanya dalam satu
tampilan, selalu.

### Bobot velocity dengan ukuran atau kompleksitas ketika ukuran item sangat bervariasi

Hitungan item mentah memperlakukan perubahan konfigurasi satu baris dan migrasi
arsitektur berminggu-minggu sebagai setara, yang mengundang manipulasi
substitusi yang sama seperti yang sudah disebut buku ini untuk frekuensi
deployment (topik 2.10): memecah pekerjaan sulit menjadi banyak item kecil
menggelembungkan hitungan tanpa memberikan hasil yang sepadan lebih banyak.
Ketika ukuran item sangat bervariasi, bobot velocity dengan perkiraan kasar
ukuran atau kompleksitas, atau lacak ukuran item rata-rata di samping hitungan
mentah, agar ukuran rata-rata yang menyusut di samping hitungan yang naik
terlihat dan tidak tersembunyi.

### Pantau distribusi aliran untuk pergeseran, bukan hanya potret saat ini

Sinyal paling berguna dalam distribusi aliran jarang berupa persentase tepat
periode ini; sinyal itu adalah arah perubahan di beberapa periode. Pergeseran
yang stabil, fitur naik sementara utang dan risiko diam-diam menyusut, layak
diangkat bersama pemangku kepentingan jauh sebelum menjadi masalah kualitas
atau keamanan yang menurut topik 2.2 menumpuk tanpa terlihat di bawah pola
pabrik fitur.

### Bandingkan velocity aliran antar aliran nilai hanya dengan sangat hati-hati

Dua aliran nilai dengan granularitas item yang berbeda, ukuran tim yang
berbeda, atau fase produk yang berbeda tidak dapat dibandingkan langsung hanya
berdasarkan velocity mentah, masalah keadilan yang sama yang disebut topik 2.10
untuk frekuensi deployment antartim. Pakai velocity untuk tren aliran nilai
itu sendiri terlebih dahulu, dan baru coba perbandingan antaraliran nilai
setelah memastikan definisi dan granularitas item yang sungguh sebanding.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Hanya velocity hitungan item mentah | Sederhana dihitung dan dijelaskan | Terpapar manipulasi substitusi; menyembunyikan jenis nilai yang dikirim |
| Velocity dipasangkan dengan distribusi | Menunjukkan skala dan campuran nilai sekaligus | Membutuhkan klasifikasi item aliran yang disiplin (topik 2.2) agar bermakna |
| Velocity berbobot ukuran | Tahan terhadap manipulasi substitusi dari pemecahan ukuran item | Membutuhkan metode pengukuran ukuran yang konsisten dan disepakati di seluruh tim |
| Perbandingan velocity antaraliran nilai | Berguna untuk keputusan investasi tingkat portofolio | Mudah menjadi tidak adil tanpa memastikan definisi item yang sungguh sebanding |

Ketegangan utamanya adalah **kesederhanaan versus ketahanan terhadap
manipulasi**. Hitungan item mentah adalah angka yang paling mudah dihitung dan
dijelaskan, tetapi juga paling mudah digelembungkan dengan memecah pekerjaan
sulit menjadi banyak potongan kecil. Selesaikan ketegangan ini dengan menjaga
metrik utama tetap sederhana, velocity mentah dipasangkan dengan distribusi,
dan menyimpan pembobotan ukuran untuk aliran nilai yang ukuran itemnya diketahui
bervariasi cukup lebar sehingga hitungan sederhana telah menjadi menyesatkan
secara aktif.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Ketika kita melaporkan velocity aliran, apakah distribusi aliran selalu
   ditampilkan di sampingnya, atau velocity kadang berdiri sendiri?** Angka
   velocity tanpa distribusinya adalah gambaran yang tidak lengkap menurut
   prinsip utama topik ini sendiri. Periksa dasbor dan laporan Anda yang
   sebenarnya untuk celah ini.

2. **Apakah ukuran item rata-rata kita berubah bersamaan dengan velocity yang
   naik, dan apakah kita akan tahu jika itu terjadi?** Ukuran rata-rata yang
   menyusut di samping hitungan yang menanjak adalah ciri khas manipulasi
   substitusi yang diterapkan pada item aliran. Tarik data sebenarnya, jangan
   berasumsi pola itu tidak ada.

3. **Pernahkah kita membandingkan velocity kita dengan tim lain tanpa
   memastikan definisi dan granularitas item kita benar-benar cocok?**
   Perbandingan yang tidak adil di sini dapat menekan tim untuk memanipulasi
   angkanya sendiri hanya agar tampak sebanding, menggemakan risiko yang sama
   yang sudah disebut buku ini untuk frekuensi deployment.

4. **Apakah distribusi aliran kita bergeser ke satu arah dalam beberapa periode
   terakhir, dan apakah ada yang memutuskannya secara sengaja?** Pergeseran
   lambat mudah terlewat periode demi periode. Plot beberapa periode bersama
   dan cari tren dengan jujur sebelum mengira pembagian saat ini stabil.

5. **Jika seseorang ingin menggelembungkan velocity aliran kita tanpa
   mengerjakan lebih banyak pekerjaan nyata, apa cara termudah yang bisa
   mereka tempuh, dan apakah pelaporan kita saat ini akan menangkapnya?**
   Telusuri mekanika spesifik memecah item sulit menjadi item mudah, dan
   diskusikan apakah dasbor Anda benar-benar akan mengungkap pola itu.

6. **Apakah angka velocity dan distribusi kita pernah sampai ke pemangku
   kepentingan bisnis bersamaan, atau hanya judul velocity yang naik ke
   atas?** Prinsip pemasangan hanya melindungi dari kesalahbacaan jika kedua
   bagiannya benar-benar dilihat oleh orang yang membuat keputusan dari data
   itu.

## Lensa sektor

**Startup.** Velocity aliran biasanya mudah dilacak secara informal pada skala
ini, karena seluruh tim sudah punya gambaran kasar tentang throughput.
Disiplin yang berguna adalah memasangkannya dengan distribusi, bahkan secara
informal, agar pendiri tidak mengira hitungan penutupan tiket yang naik sebagai
kemajuan fitur yang sebenarnya padahal hitungan itu didominasi perbaikan bug
tahap awal.

**Usaha kecil.** Lacak velocity dan distribusi bersama dari perangkat ringan
apa pun yang sudah Anda pakai untuk klasifikasi item aliran (topik 2.2);
platform analitik khusus tidak diperlukan pada skala ini. Kebiasaan selalu
melihat keduanya berdampingan lebih penting daripada kecanggihan perangkat
apa pun.

**Perusahaan besar.** Perbandingan velocity antaraliran nilai menggoda pada
skala ini untuk prioritas tingkat portofolio, dan di situlah risiko
ketidakadilan paling besar, karena lini produk yang berbeda wajar memiliki
granularitas item yang sangat berbeda. Investasikan pada pemastian definisi
yang sebanding sebelum memakai perbandingan velocity untuk membenarkan
keputusan investasi antartim.

**Pemerintahan.** Velocity aliran yang dipasangkan dengan distribusi memberi
pemimpin teknologi sektor publik dasar bukti yang jauh lebih kuat untuk
melaporkan keluaran pengiriman kepada badan pengawas daripada throughput
mentah saja, karena dapat menunjukkan bukan hanya berapa banyak yang dikirim
tetapi bahwa campurannya mencerminkan alokasi yang disengaja dan dapat
dipertanggungjawabkan antara fungsionalitas baru, perbaikan cacat, dan
manajemen risiko.

## Contoh

**Perusahaan besar.** Tim platform sebuah vendor perangkat lunak melaporkan
velocity aliran yang terus naik selama tiga kuartal berturut-turut, tren yang
dirayakan pimpinan sebagai percepatan pengiriman. Pemeriksaan lebih dekat atas
distribusi aliran, yang baru diminta setelah eskalasi pelanggan soal bug yang
berulang, mengungkap bahwa porsi "fitur" dari velocity yang naik itu ternyata
turun dari 70% menjadi 45% pada periode yang sama, dengan item perbaikan cacat
mengisi kekosongannya. Tim itu mengirim lebih banyak item, tetapi proporsi
yang makin kecil berupa nilai baru; sisanya adalah pengerjaan ulang yang
sepenuhnya tertutup oleh bagan velocity saja.

**Pemerintahan.** Tim platform data sebuah badan statistik nasional melacak
velocity aliran sebagai metrik pengiriman utamanya untuk laporan tahunan
kepada dewan pengawasnya. Ketika seorang anggota dewan bertanya berapa
proporsi velocity itu yang mewakili kemampuan baru yang menghadap publik, tim
menemukan bahwa mereka tidak pernah memecah angka itu menurut jenis item
aliran dan tidak dapat menjawab langsung. Badan itu kemudian mengadopsi
pelaporan velocity-dan-distribusi berpasangan, yang mengungkap bahwa pekerjaan
risiko dan kepatuhan, didorong oleh regulasi perlindungan data baru, wajar
menghabiskan porsi kapasitas yang makin besar, alokasi yang dapat
dipertanggungjawabkan dan segera diterima dewan setelah ditunjukkan secara
eksplisit, bukan dibiarkan implisit dalam penurunan velocity yang tidak
dijelaskan.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari memasangkan velocity dengan distribusi adalah gambaran
keluaran pengiriman yang lebih jujur dan lebih dapat dipertanggungjawabkan
daripada yang diberikan salah satu angka itu sendirian. Contoh vendor
perangkat lunak di atas, yang menemukan bahwa velocity yang naik sebenarnya
mencerminkan keluaran fitur yang turun, persis jenis kesalahbacaan yang
dicegah pasangan ini, dan menangkap pola itu lebih awal jauh lebih murah
daripada menemukannya hanya setelah masalah kualitas yang terlihat pelanggan
memaksa pertanyaan itu muncul.

Total biaya kepemilikan minimal begitu klasifikasi item aliran (topik 2.2)
sudah berjalan: distribusi adalah agregasi sederhana dari item yang sudah
diklasifikasikan, dan disiplin menampilkan kedua metrik bersama adalah
konvensi pelaporan, bukan investasi teknis. Sebagian besar biaya rekomendasi
topik ini sudah dibayar ketika organisasi mengadopsi klasifikasi item aliran
yang jujur sejak awal.

## Anti-pola dan jebakan

- **Melaporkan velocity aliran tanpa distribusi:** vektor manipulasi (gaming)
  yang menjadi inti topik ini. Tim di bawah tekanan pengiriman dapat menaikkan
  hitungan item dengan lebih memilih pekerjaan fitur yang kecil dan mudah dan
  menghindari item utang, risiko, atau cacat yang lebih sulit, atau dengan
  memecah item besar menjadi banyak item kecil, dan bagan velocity yang
  ditampilkan sendirian akan terbaca sebagai percepatan, bukan pergeseran
  sebenarnya dalam apa yang dikirim. Pagar pengaman (guardrail)-nya adalah
  disiplin pemasangan yang sama yang diminta topik 1.2 di seluruh buku ini:
  jangan pernah menampilkan velocity tanpa distribusi, dan periksa ukuran item
  rata-rata secara berkala di samping hitungan untuk menangkap pemecahan
  secara khusus.
- **Membandingkan velocity antaraliran nilai dengan granularitas item yang
  berbeda:** menghasilkan perbandingan yang tidak adil dan menyesatkan.
- **Menganggap distribusi satu periode stabil:** melewatkan pergeseran lambat
  yang berarti yang hanya terungkap oleh tampilan tren.
- **Membiarkan hanya judul velocity yang sampai ke pemangku kepentingan
  bisnis:** menghilangkan seluruh nilai pelindung dari prinsip pemasangan.
- **Mengabaikan ukuran item rata-rata sambil merayakan velocity yang naik:**
  melewatkan ciri khas manipulasi substitusi.
- **Menetapkan target velocity tanpa rujukan pada distribusi:** mengundang
  persis manipulasi yang diperingatkan topik ini secara eksplisit.

## Model kematangan

- **Level 1, Memulai (Initiate):** Velocity aliran, jika dilacak, dilaporkan
  sendirian tanpa data distribusi, dan tidak ada yang memeriksa manipulasi
  substitusi.
- **Level 2, Mengembangkan (Develop):** Beberapa tim melacak distribusi, tetapi
  tidak secara konsisten dipasangkan dengan velocity dalam pelaporan atau
  ditinjau sebagai tren.
- **Level 3, Membakukan (Standardize):** Velocity dan distribusi selalu
  dilaporkan bersamaan, dilihat sebagai tren, dengan ukuran item rata-rata
  dipantau untuk menangkap manipulasi substitusi.
- **Level 4, Mengelola (Manage):** Pergeseran distribusi diselidiki secara
  proaktif sebelum menjadi masalah kualitas atau keamanan, dan perbandingan
  velocity antaraliran nilai hanya dibuat setelah memastikan definisi item yang
  sungguh sebanding.
- **Level 5, Mengorkestrasi (Orchestrate):** Velocity dan distribusi secara
  langsung menginformasikan keputusan investasi tingkat portofolio, dan
  organisasi dapat menunjuk kasus-kasus spesifik ketika pergeseran distribusi
  tertangkap dan dikoreksi sebelum menyebabkan kegagalan yang terlihat.

## Gagasan untuk diskusi

1. Apakah pelaporan velocity aliran kita selalu menyertakan distribusi, atau pernahkah kita menunjukkan satu tanpa yang lain?
2. Apakah ukuran item aliran rata-rata kita bergeser bersamaan dengan perubahan velocity belakangan ini?
3. Apakah kita akan tahu jika distribusi aliran kita telah bergeser terus-menerus selama beberapa kuartal terakhir?
4. Apa yang dibutuhkan agar seseorang dapat menggelembungkan velocity kita tanpa memberikan nilai nyata yang lebih banyak, dan apakah kita akan menyadarinya?

## Poin-poin utama

- **Velocity aliran** mengukur throughput; **distribusi aliran** mengukur
  jenis pekerjaan apa yang diwakili throughput itu. Laporkan keduanya
  bersamaan, selalu.
- Pasangan ini adalah penerapan langsung **prinsip pagar pengaman** dari topik
  1.2: jangan pernah menampilkan angka kecepatan tanpa konteks tentang apa
  harganya.
- Vektor manipulasi (gaming) utama topik ini adalah **melaporkan velocity
  sendirian**, yang dapat menyembunyikan pergeseran ke pekerjaan fitur yang
  mudah atau pemecahan item yang menggelembungkan hitungan tanpa memberikan
  nilai yang sepadan.
- **Pergeseran distribusi** paling terlihat sebagai tren di beberapa periode,
  bukan dalam potret satu periode mana pun.
- **Perbandingan velocity antaraliran nilai** membutuhkan definisi item yang
  sungguh sebanding agar adil; tanpa itu, perbandingan lebih banyak menyesatkan
  daripada menginformasikan.

## Referensi dan bacaan lanjutan

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
