# 8.2 Lanskap perangkat: membangun sendiri atau membeli

## Gambaran umum dan motivasi

Setiap organisasi yang menerapkan panduan buku ini pada akhirnya menghadapi
keputusan infrastruktur yang praktis: membangun perangkat metrik secara
internal, membeli platform analitik rekayasa komersial, atau, yang paling
umum dalam praktik, kombinasi keduanya. Topik ini memperlakukan keputusan
tersebut dengan ketelitian yang sama seperti yang diterapkan topik 5.5 pada
investasi rekayasa lainnya: analisis biaya-manfaat yang jujur dan khusus
untuk skala organisasi Anda, sumber data yang sudah ada, dan metrik-metrik
tertentu dari buku ini yang benar-benar ingin Anda lacak, bukan jawaban
bawaan yang berlaku seragam apa pun konteksnya.

Pasar perangkat analitik rekayasa komersial telah matang cukup jauh, dan
banyak platform kini menawarkan instrumentasi yang solid dan sebagian besar
otomatis untuk metrik DORA (Bagian 2), data pull request dan tinjauan (topik
2.9), dan semakin banyak, infrastruktur survei pengalaman pengembang (topik
3.7). Kematangan ini menggeser perhitungan bagi banyak organisasi ke arah
membeli setidaknya lapisan dasarnya, tetapi tidak menghapus keunggulan nyata
opsi membangun sendiri untuk kebutuhan khusus yang disesuaikan, terutama
seputar telemetri hasil yang menurut topik 7.4 kini menjadi pusat yang
diperlukan dari program metrik, yang sering kali merupakan kategori
pengukuran paling tidak terstandar dan paling spesifik organisasi di antara
yang dibahas buku ini.

Bagi tim besar, keputusan ini membawa konsekuensi anggaran dan kapasitas
rekayasa yang nyata dan berkelanjutan. Organisasi perusahaan besar sering
perlu mengintegrasikan perangkat metrik di lanskap sistem lama dan modern yang
benar-benar heterogen, yang sangat membentuk perhitungan membangun versus
membeli; organisasi pemerintahan sering menghadapi kendala pengadaan serta
persyaratan kedaulatan data atau keamanan yang secara material memengaruhi
opsi komersial mana yang bahkan layak, kadang memiringkan keputusan ke arah
membangun sendiri atau ke arah vendor tertentu yang telah diperiksa, terlepas
dari apa yang disarankan analisis biaya-manfaat murni.

## Prinsip utama

- **Ini jarang berupa keputusan semua-atau-tidak-sama-sekali.** Sebagian
  besar program metrik yang matang menggabungkan perangkat yang dibeli untuk
  metrik yang terstandar dengan baik dan perangkat yang dibangun untuk
  telemetri hasil yang spesifik organisasi.
- **Belilah untuk metrik yang terstandar dengan baik dan dibutuhkan secara
  luas; bangunlah untuk yang benar-benar spesifik organisasi.** Metrik DORA
  dan analitik pull request adalah wilayah komoditas; korelasi hasil bisnis
  Anda yang spesifik (topik 5.3) biasanya bukan.
- **Kepemilikan dan portabilitas data sama pentingnya dengan perbandingan
  fitur.** Perangkat yang mengunci data metrik Anda adalah risiko yang
  bertahan lama, bukan sekadar ketidaknyamanan.
- **Biaya integrasi sering diremehkan** dalam analisis membangun versus
  membeli, untuk kedua opsi.
- **Kendala pengadaan, keamanan, dan kedaulatan data dapat mengalahkan
  perhitungan biaya-manfaat murni**, terutama bagi organisasi pemerintahan.

## Rekomendasi

### Belilah untuk lapisan komoditas: infrastruktur DORA, tinjauan, dan survei

Untuk keluarga metrik yang perangkat komersialnya sudah matang dan tersedia
luas, yaitu instrumentasi metrik DORA (Bagian 2), analitik pull request dan
tinjauan kode (topik 2.9), dan platform survei pengalaman pengembang (topik
3.7), membeli biasanya merupakan pilihan ekonomi yang lebih baik bagi
sebagian besar organisasi di bawah skala tertentu, karena membangun
infrastruktur yang setara menduplikasi upaya rekayasa yang sudah banyak
diinvestasikan vendor, dengan diferensiasi nyata yang terbatas dari membangun
versi Anda sendiri.

### Bangunlah untuk telemetri hasil yang benar-benar spesifik organisasi

Untuk metrik hasil yang menurut topik 7.4 seharusnya menjadi pusat gravitasi
program metrik Anda, yaitu korelasi hasil bisnis (topik 5.3), adopsi fitur
yang terkait dengan produk spesifik Anda (topik 5.2), ekonomi unit yang
terkait dengan struktur biaya spesifik Anda (topik 5.4), perangkat komersial
jauh kurang terstandar dan sering tidak dapat menangkap logika bisnis dan
model data spesifik organisasi Anda tanpa kustomisasi ekstensif yang mahal,
yang pada akhirnya bisa lebih mahal daripada membangun kemampuan setara
secara internal dengan kendali penuh atas hasilnya.

### Evaluasi kepemilikan dan portabilitas data sebelum berkomitmen pada vendor

Sebelum menandatangani kontrak komersial, pastikan Anda dapat mengekspor
seluruh data metrik historis Anda dalam format standar yang dapat dipakai, dan
pahami apa yang terjadi pada data dan riwayatnya jika Anda berganti vendor
atau menghentikan layanan. Hubungan dengan vendor yang menjadi sulit
ditinggalkan karena [penguncian (lock-in)](https://en.wikipedia.org/wiki/Vendor_lock-in) data adalah risiko organisasi yang
bertahan lama, bukan sekadar ketidaknyamanan, dan evaluasi ini layak
diperlakukan dengan keseriusan yang sama seperti komitmen infrastruktur
besar multitahun lainnya.

### Anggarkan biaya integrasi secara realistis di kedua sisi keputusan

Baik membangun maupun membeli, biaya integrasi, yaitu menghubungkan perangkat
ke sistem kontrol versi, CI/CD, pelacakan insiden, dan sistem bisnis Anda
yang sebenarnya, sering diremehkan dalam perencanaan awal untuk kedua jalur.
Anggarkan upaya integrasi ini secara eksplisit sebagai butir tersendiri yang
signifikan dalam analisis membangun versus membeli Anda, alih-alih
mengandaikan perangkat komersial akan langsung berjalan dengan penyiapan
minimal, atau bahwa biaya integrasi solusi buatan sendiri hanyalah tambahan
kecil dari biaya pengembangannya.

### Perhitungkan kendala pengadaan, keamanan, dan kedaulatan secara eksplisit
dan sejak dini

Bagi organisasi pemerintahan dan perusahaan besar yang diatur regulasi,
persyaratan kedaulatan data, kebutuhan sertifikasi keamanan, dan proses
pengadaan dapat secara material mempersempit atau menghilangkan opsi
komersial tertentu terlepas dari kualitas fiturnya, kadang memiringkan
keputusan ke arah membangun sendiri atau ke arah sekumpulan vendor yang lebih
kecil yang telah diperiksa secara khusus. Kenali kendala ini secara eksplisit
dan sejak dini dalam proses evaluasi, alih-alih menemukannya setelah upaya
evaluasi yang besar telah tercurah pada opsi yang ternyata tidak layak karena
alasan yang tidak berkaitan dengan kemampuan sebenarnya.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Membeli perangkat komersial | Cepat diterapkan, fitur matang, dirawat vendor | Kurang dapat disesuaikan untuk metrik hasil yang spesifik organisasi; potensi penguncian |
| Membangun perangkat internal | Disesuaikan sepenuhnya, kepemilikan dan kendali data penuh | Investasi rekayasa yang besar dan berkelanjutan; menduplikasi upaya untuk metrik komoditas |
| Hibrida: membeli lapisan komoditas, membangun lapisan hasil | Menyeimbangkan efisiensi biaya dengan kustomisasi nyata di tempat yang paling penting | Memerlukan pekerjaan integrasi untuk menghubungkan komponen yang dibeli dan dibangun secara koheren |
| Membeli semuanya, termasuk telemetri hasil, melalui kustomisasi vendor yang ekstensif | Satu hubungan vendor, pengadaan yang mungkin lebih sederhana | Bisa menjadi semahal membangun, dengan kendali akhir atas hasil yang lebih sedikit |

Ketegangan utamanya adalah **kebutuhan kustomisasi versus biaya
pengembangan**. Metrik yang paling diuntungkan oleh kustomisasi, yaitu
telemetri hasil yang terkait khusus dengan bisnis Anda, juga yang paling
mahal untuk dibangun dengan baik; metrik yang paling murah dibeli, yaitu DORA
dan analitik tinjauan, juga yang kustomisasi nyatanya paling kecil
pentingnya. Selesaikan ketegangan ini dengan menyesuaikan keputusan langsung
dengan pola tersebut: belilah di tempat standardisasi menguntungkan Anda,
bangunlah di tempat konteks spesifik Anda benar-benar menuntutnya, dan
anggarkan biaya integrasi secara realistis di kedua sisi pembagian itu.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk setiap keluarga metrik yang dibahas buku ini, apakah kami benar-benar
   akan diuntungkan oleh kustomisasi, atau apakah perangkat komersial
   standar akan melayani kami sama baiknya?** Telusuri Bagian 2 sampai 6
   secara eksplisit dan kelompokkan setiap keluarga metrik ke kolom beli atau
   bangun berdasarkan uji khusus ini.

2. **Sudahkah kami mengevaluasi opsi ekspor dan portabilitas data vendor kami
   saat ini atau calon vendor, atau kami hanya mengandaikan bisa pergi dengan
   mudah bila perlu?** Periksa langsung, jangan berasumsi; penguncian data
   sering baru ditemukan ketika organisasi benar-benar mencoba berpindah.

3. **Apakah analisis membangun versus membeli kami yang semula
   memperhitungkan biaya integrasi secara realistis, atau terutama berfokus
   pada biaya lisensi versus jam pengembangan?** Tinjau kembali keputusan
   perangkat yang baru-baru ini diambil dan periksa apakah biaya integrasi
   benar-benar diperkirakan atau diremehkan secara signifikan.

4. **Apakah kami menghadapi kendala pengadaan, keamanan, atau kedaulatan data
   yang akan menyingkirkan opsi komersial tertentu terlepas dari kualitas
   fiturnya?** Kenali kendala ini secara eksplisit sebelum, bukan sesudah,
   menanamkan upaya evaluasi yang besar pada opsi yang mungkin ternyata tidak
   layak.

5. **Apakah lanskap perangkat kami saat ini merupakan hibrida yang disengaja,
   yang mencocokkan membangun dan membeli dengan tempat masing-masing masuk
   akal, atau terbentuk dari keputusan ad hoc yang masing-masing masuk akal
   dari waktu ke waktu?** Jujurlah tentang pola mana yang sebenarnya
   menggambarkan situasi Anda saat ini.

6. **Berapa biaya kami, dalam upaya dan risiko, untuk berganti vendor
   perangkat metrik kami saat ini hari ini jika perlu?** Pertanyaan konkret
   ini menguji paparan Anda yang sebenarnya terhadap risiko penguncian data,
   di luar apa pun yang secara nominal dijanjikan syarat kontrak vendor.

## Lensa sektor

**Startup.** Belilah perangkat komoditas secara bawaan pada skala ini;
membangun infrastruktur metrik khusus jarang menjadi penggunaan yang baik
atas kapasitas rekayasa awal yang langka ketika opsi komersial yang matang
dan murah tersedia khusus untuk metrik DORA dan tinjauan. Sisihkan upaya
membangun hanya untuk satu metrik hasil (topik 5.3) yang paling langsung
mencerminkan nilai inti produk Anda.

**Usaha kecil.** Sebagian besar opsi perangkat komersial dapat diperkecil
skalanya dengan wajar dan harganya terjangkau bagi organisasi yang lebih
kecil; membeli lapisan komoditas hampir selalu merupakan pilihan yang tepat,
dan membangun sesuatu yang khusus jarang dapat dibenarkan sampai organisasi
Anda tumbuh cukup besar dan memiliki kebutuhan yang benar-benar spesifik.

**Perusahaan besar.** Pendekatan hibrida yang direkomendasikan topik ini
membayar kerumitannya di sini: belilah lapisan komoditas dalam skala besar
(sering dengan daya tawar yang berarti untuk syarat yang menguntungkan), dan
berinvestasilah secara sengaja dalam membangun lapisan telemetri hasil yang
spesifik organisasi, karena kerumitan logika bisnis dan model data Anda pada
skala ini biasanya melebihi apa yang dapat ditampung perangkat komersial
generik tanpa kustomisasi ekstensif yang mahal.

**Pemerintahan.** Proses pengadaan, persyaratan sertifikasi keamanan, dan
kendala kedaulatan data sering mendominasi keputusan ini lebih daripada yang
disarankan perbandingan fitur atau biaya murni. Libatkan pemangku kepentingan
pengadaan dan keamanan sejak dini dalam proses evaluasi, dan bersiaplah agar
opsi membangun sendiri benar-benar lebih menarik di sini daripada dalam
konteks sektor swasta yang sebanding, justru karena kendala ini dan bukan
karena membangun sendiri pada dasarnya lebih baik.

## Contoh

**Perusahaan besar.** Sebuah perusahaan perangkat lunak awalnya berusaha
membangun platform metrik yang sepenuhnya khusus, mencakup setiap keluarga
metrik dari Bagian 2 sampai Bagian 6, upaya multitahun yang menyerap kapasitas
rekayasa yang besar dan tetap tertinggal dari penawaran komersial yang matang
khusus untuk metrik DORA dan tinjauan yang terstandar. Strategi yang direvisi
mengadopsi platform komersial untuk metrik komoditas ini, membebaskan tim
platform internal untuk berfokus sepenuhnya membangun telemetri korelasi
hasil bisnis dan ekonomi unit (topik 5.3, 5.4) yang benar-benar spesifik bagi
model bisnis perusahaan, yang tidak mungkin disediakan perangkat komersial
mana pun secara langsung. Pendekatan hibrida ini menghasilkan program metrik
yang lebih lengkap dan lebih benar-benar berguna dalam satu tahun daripada
yang dicapai strategi bangun-semua setelah dua tahun.

**Pemerintahan.** Evaluasi awal sebuah instansi federal terhadap platform
analitik rekayasa komersial menemukan bahwa tak satu pun vendor yang tersedia
dapat memenuhi persyaratan kedaulatan data instansi itu, yang mewajibkan
seluruh data metrik rekayasa tetap berada di pusat data pemerintah tertentu
yang tersertifikasi. Alih-alih meninggalkan opsi membeli sepenuhnya, instansi
itu mengidentifikasi subset vendor yang lebih kecil yang menawarkan opsi
penerapan awan berdaulat bersertifikat pemerintah, dengan selisih biaya yang
sederhana di atas harga komersial standar, dan berhasil menerapkan program
hibrida: perangkat yang dibeli untuk lapisan metrik komoditas di dalam batas
kedaulatan yang diwajibkan, dan perangkat internal yang dibangun untuk
kebutuhan telemetri hasil bagi warga yang spesifik bagi instansi, yang tidak
ditangani vendor komersial mana pun terlepas dari pertimbangan kedaulatan.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari strategi hibrida membangun versus membeli yang disengaja
adalah menghindari kedua mode kegagalan yang digambarkan contoh-contoh topik
ini: investasi rekayasa multitahun yang sia-sia untuk membangun kemampuan
komoditas yang sudah tersedia murah di pasar, dan frustrasi serta biaya
kustomisasi akhir karena memaksakan kebutuhan yang benar-benar spesifik
organisasi ke dalam perangkat komersial yang tidak pas. Contoh perusahaan
besar di atas menunjukkan hal ini secara konkret: pendekatan hibrida memberi
nilai nyata yang lebih besar dalam satu tahun daripada strategi bangun-semua
dalam dua tahun.

Total biaya kepemilikan untuk kedua jalur mencakup biaya integrasi, yang
sering diremehkan, dan, khusus untuk perangkat yang dibeli, biaya risiko
berkelanjutan dari potensi penguncian vendor kecuali portabilitas data
dipastikan dan dilindungi secara kontraktual sejak awal. Menganggarkan
keduanya secara realistis, alih-alih berfokus sempit pada biaya lisensi atau
jam pengembangan saja, menghasilkan gambaran total biaya yang jauh lebih
akurat untuk kedua opsi.

## Anti-pola dan jebakan

- **Membangun perangkat khusus untuk metrik komoditas yang terstandar dengan
  baik:** menduplikasi upaya rekayasa yang sudah banyak diinvestasikan vendor.
- **Membeli perangkat komersial untuk telemetri hasil yang benar-benar
  spesifik organisasi tanpa memeriksa kecocokannya lebih dulu:** berisiko
  menimbulkan kustomisasi mahal yang tidak pas atau kebutuhan yang tidak
  terpenuhi.
- **Tidak mengevaluasi ekspor dan portabilitas data sebelum berkomitmen pada
  vendor:** berisiko penguncian yang bertahan lama dan mahal, yang baru
  ditemukan saat mencoba pergi.
- **Meremehkan biaya integrasi di salah satu sisi keputusan:** menghasilkan
  perbandingan total biaya yang tidak akurat dan jadwal yang tidak realistis.
- **Mengabaikan kendala pengadaan, keamanan, atau kedaulatan sampai larut
  dalam proses evaluasi:** menyia-nyiakan upaya evaluasi pada opsi yang
  ternyata tidak layak karena alasan yang tidak berkaitan dengan kemampuan.
- **Memperlakukan ini sebagai satu keputusan semua-atau-tidak-sama-sekali:**
  melewatkan pendekatan hibrida yang paling cocok dengan kebutuhan campuran
  sebagian besar organisasi yang sebenarnya.

## Model kematangan

- **Tingkat 1, Initiate (Memulai):** Keputusan perangkat diambil secara ad
  hoc, tanpa analisis membangun versus membeli yang disengaja atau
  pertimbangan portabilitas data.
- **Tingkat 2, Develop (Mengembangkan):** Sebagian analisis dilakukan, tetapi
  biaya integrasi rutin diremehkan dan pendekatan hibrida tidak
  dipertimbangkan dengan sengaja.
- **Tingkat 3, Standardize (Menstandarkan):** Strategi hibrida membangun
  versus membeli yang disengaja secara konsisten mencocokkan metrik komoditas
  dengan perangkat yang dibeli dan telemetri hasil spesifik organisasi dengan
  perangkat yang dibangun.
- **Tingkat 4, Manage (Mengelola):** Portabilitas data dipastikan dan
  dilindungi secara kontraktual untuk semua perangkat yang dibeli, dan
  kendala pengadaan, keamanan, dan kedaulatan diperhitungkan secara eksplisit
  dan sejak dini.
- **Tingkat 5, Orchestrate (Mengorkestrasi):** Lanskap perangkat organisasi
  mencerminkan strategi hibrida yang matang dan disengaja, ditinjau secara
  berkala seiring berkembangnya penawaran komersial dan kebutuhan organisasi,
  dengan nilai yang terbukti dari komponen yang dibeli maupun yang dibangun.

## Gagasan untuk diskusi

1. Metrik kami yang mana saat ini akan paling diuntungkan oleh kustomisasi yang belum kami dapatkan?
2. Sudahkah kami memastikan bahwa kami dapat mengekspor seluruh data metrik historis jika perlu berganti vendor?
3. Apakah keputusan perangkat kami yang terakhir memperhitungkan biaya integrasi secara realistis?
4. Kendala pengadaan, keamanan, atau kedaulatan apa yang mungkin kami remehkan?
5. Seperti apa strategi hibrida yang disengaja untuk kumpulan metrik spesifik kami?

## Poin-poin utama

- Ini jarang semua-atau-tidak-sama-sekali; sebagian besar program yang matang
  **menggabungkan perangkat yang dibeli untuk metrik komoditas dengan
  perangkat yang dibangun untuk telemetri hasil spesifik organisasi**.
- **Belilah untuk metrik yang terstandar** (DORA, analitik tinjauan,
  infrastruktur survei); **bangunlah untuk pengukuran hasil yang benar-benar
  spesifik organisasi**.
- Evaluasi **kepemilikan dan portabilitas data** sebelum berkomitmen pada
  vendor; penguncian adalah risiko yang bertahan lama, bukan sekadar
  ketidaknyamanan.
- **Anggarkan biaya integrasi secara realistis** di kedua sisi keputusan;
  biaya ini sering diremehkan.
- **Kendala pengadaan, keamanan, dan kedaulatan** dapat mengalahkan
  perhitungan biaya-manfaat murni, terutama bagi organisasi pemerintahan.

## Referensi dan bacaan lanjutan

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (keluarga metrik yang menjadi sasaran analisis
  membangun versus membeli dalam topik ini).
- *Cloud FinOps*, by J.R. Storment and Mike Fuller (prinsip analisis biaya
  yang berlaku untuk keputusan investasi perangkat).
- The FinOps Foundation's FinOps Framework, [finops.org](https://www.finops.org/) (panduan praktisi
  tentang mengevaluasi dan mengelola biaya perangkat cloud dan SaaS).
- U.S. Federal Risk and Authorization Management Program (FedRAMP)
  documentation: panduan otoritatif tentang persyaratan keamanan dan
  kedaulatan perangkat cloud pemerintah.
