# 1.1 Mengapa mengukur rekayasa perangkat lunak

## Gambaran umum dan motivasi

Rekayasa perangkat lunak menolak diukur dengan cara yang tidak terjadi pada
manufaktur. Lini pabrik menghasilkan unit yang identik, sehingga menghitungnya
memberi tahu Anda sesuatu yang nyata. Pekerjaan perangkat lunak menghasilkan
artefak yang unik dalam kebutuhan yang terus berubah, sehingga hitungan naif,
jumlah commit, jumlah baris, jumlah tiket yang ditutup, nyaris tidak memberi
tahu apa pun tentang nilai yang dihantarkan. Jurang antara sulitnya mengukur
pekerjaan perangkat lunak dan kebutuhan yang sangat nyata untuk mengetahui
apakah pekerjaan itu berjalan baik adalah tempat seluruh buku ini berada.
Topik ini membahas cara menutup jurang itu dengan jujur: bukan dengan berpura-pura
bahwa pekerjaan perangkat lunak sama mudahnya dihitung seperti barang
dagangan, melainkan dengan bersikap tepat tentang apa yang bisa dan tidak
bisa dilakukan pengukuran bagi sebuah organisasi rekayasa.

Pengukuran ada untuk menjawab pertanyaan yang tidak bisa dijawab organisasi
dengan yakin lewat cara lain: apakah pengiriman kita makin cepat atau makin
lambat, apakah kualitas membaik atau memburuk, apakah para insinyur kelelahan,
apakah investasi ini membuahkan hasil. Tanpa metrik, pertanyaan-pertanyaan itu
dijawab oleh siapa pun yang paling percaya diri berbicara di ruangan,
biasanya orang yang paling senior atau paling meyakinkan, dan jawabannya
sering keliru. Tim [rekayasa perangkat lunak](https://en.wikipedia.org/wiki/Software_engineering)
yang melewatkan pengukuran tidak lantas terhindar dari menilai kinerjanya
sendiri. Mereka hanya menilainya berdasarkan firasat, anekdot, dan bias
kebaruan, bukan bukti.

Bagi tim besar, ini berhenti menjadi pelengkap dan menjadi kebutuhan
struktural. Tim beranggotakan enam orang bisa berbagi model mental tentang
jalannya segala sesuatu lewat percakapan harian. Departemen berisi enam ratus
orang, tersebar di berbagai zona waktu dan unit bisnis, tidak bisa. Pada skala
itu, sekumpulan angka yang dipercaya bersama adalah satu-satunya pengganti
praktis bagi kesadaran informal yang didapat tim kecil secara cuma-cuma.
Pimpinan perusahaan besar membutuhkan metrik untuk mengalokasikan investasi ke
puluhan tim yang berebut anggaran yang sama. Organisasi rekayasa pemerintahan
membutuhkan metrik untuk menunjukkan kepada parlemen dan publik bahwa dana
yang dialokasikan menghasilkan kapabilitas nyata, bukan sekadar aktivitas.
Dalam kedua situasi itu, "kami sudah bekerja keras" bukanlah bukti; angka
yang bisa dipertanggungjawabkan adalah bukti.

## Prinsip utama

- **Ukur untuk belajar, bukan untuk menghakimi.** Tujuan utama metrik rekayasa
  adalah menginformasikan keputusan, bukan menilai seseorang atau sebuah tim.
- **Angka tanpa keputusan yang melekat hanyalah hiasan.** Jika tidak ada
  pembacaan metrik yang akan mengubah apa yang Anda lakukan berikutnya, metrik
  itu tidak layak berada di dasbor.
- **Pengukuran adalah sarana, bukan tujuan.** Tujuannya adalah perangkat lunak
  yang lebih baik, dikirim lebih andal, oleh tim yang berkelanjutan. Metrik ada
  hanya untuk melayani tujuan itu.
- **Setiap metrik punya biaya.** Instrumentasi, waktu tinjauan, dan risiko
  distorsi perilaku yang dibahas di topik 1.2 semuanya memakan biaya. Sebuah
  metrik harus mengembalikan biaya itu.
- **Diam juga sebuah keputusan.** Memilih untuk tidak mengukur sesuatu adalah
  pilihan yang berkonsekuensi, bukan bawaan yang netral.

## Rekomendasi

### Mulailah dari keputusan, bukan dari dasbor

Sebelum menginstrumentasi apa pun, sebutkan keputusan yang akan diinformasikan
metrik itu. "Kami ingin tahu apakah pipeline deployment baru kami menurunkan
angka insiden" adalah pertanyaan yang berbentuk keputusan; "mari lacak semua
yang bisa diekspor perangkat itu" bukan. Bekerja mundur dari sebuah keputusan
menjaga kumpulan metrik tetap kecil dan membuat setiap petak tetap bisa
dipertahankan ketika seseorang bertanya mengapa petak itu ada. Jika Anda tidak
bisa menyebutkan keputusan yang akan diinformasikan sebuah metrik, jangan
dulu membangunnya. Topik 1.3 membahas lebih dalam versi hasil-di-atas-keluaran
dari disiplin ini.

### Pisahkan penggunaan diagnostik dari penggunaan evaluatif

Metrik yang dipakai untuk mendiagnosis masalah sistem (mengapa lead time kita
merayap naik) berperilaku sama sekali berbeda dari metrik yang sama ketika
dipakai untuk mengevaluasi orang atau tim (lead time siapa yang terburuk).
Yang pertama mengundang penyelidikan dan perbaikan. Yang kedua mengundang
penyembunyian dan manipulasi (gaming), karena kini angka itu membawa
konsekuensi reputasi atau finansial. Tentukan secara eksplisit, secara
tertulis, untuk penggunaan mana sebuah metrik dimaksudkan, dan jangan pernah
membiarkan metrik diagnostik bergeser ke penggunaan evaluatif tanpa
mempertimbangkan ulang risikonya dengan sengaja. Pembedaan ini muncul
berulang kali di sepanjang buku ini dan diformalkan dalam bagian non-tujuan
pada piagam metrik yang dijelaskan di topik 1.4.

### Perlakukan pengukuran sebagai hipotesis, bukan fakta

Metrik adalah proksi untuk sesuatu yang benar-benar Anda pedulikan, bukan
hal itu sendiri. Frekuensi deployment adalah proksi untuk kapabilitas
pengiriman, bukan kapabilitas pengiriman itu sendiri. Perlakukan setiap
metrik sebagai hipotesis yang terus diuji: apakah angka ini masih melacak hal
yang kita pedulikan, atau dunia sudah bergerak dan meninggalkan proksinya?
Tinjau kembali pertanyaan itu dengan irama yang tetap, alih-alih menganggap
metrik yang dipilih dengan baik dua tahun lalu masih dipilih dengan baik hari
ini, terutama ketika perangkat, struktur tim, atau (lihat Bagian 7) sifat
pekerjaan itu sendiri berubah.

### Buat ketiadaan pengukuran terlihat

Di organisasi besar, celah yang paling berisiko bukanlah metrik yang buruk,
melainkan area yang sama sekali tidak diukur siapa pun karena sulit
diinstrumentasi: pengalaman pengembang, gesekan dependensi lintas tim, terkikisnya
pengetahuan institusional. Sebutkan celah-celah ini secara eksplisit dalam
piagam metrik Anda, alih-alih membiarkannya tak terlihat secara bawaan.
Organisasi yang tahu apa yang tidak diukurnya, dan mengapa, berada dalam posisi
jauh lebih kuat daripada organisasi yang diam-diam lupa bahwa area-area itu ada.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Instrumentasi berat, banyak metrik | Visibilitas luas, lebih sedikit titik buta | Kelelahan dasbor, permukaan manipulasi lebih besar, biaya pemeliharaan lebih tinggi |
| Metrik minimal yang digerakkan keputusan | Fokus, beban rendah, setiap metrik bisa dipertahankan | Risiko melewatkan masalah yang muncul di luar kumpulan yang dipilih |
| Metrik hanya untuk diagnosis | Mendorong pelaporan jujur dan penyelidikan | Pimpinan tetap bisa memakainya secara informal untuk evaluasi |
| Metrik yang terkait evaluasi individu | Terasa akuntabel, mudah dijelaskan kepada eksekutif | Insentif manipulasi kuat; merusak kepercayaan; biasanya mengukur hal yang keliru |

Ketegangan utamanya adalah **cakupan versus fokus**, dan ia dipertajam oleh
**diagnosis versus penghakiman**. Terlalu sedikit metrik dan Anda
mengembangkan titik buta yang baru muncul sebagai krisis; terlalu banyak dan
tak seorang pun bisa bertindak atas satu pun darinya, sementara setiap metrik
yang Anda beri bobot evaluatif mengundang distorsi. Atasi dengan memulai dari
yang minimal dan digerakkan keputusan, menambah metrik hanya ketika sebuah
keputusan yang spesifik dan bernama membutuhkannya, serta dengan membela batas
hanya-diagnostik secara eksplisit dalam kerja tata kelola di topik 1.4,
alih-alih membiarkannya terkikis secara bawaan.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk setiap metrik di dasbor kita sekarang, keputusan apa yang akan
   dipicu oleh pembacaan yang baik dan pembacaan yang buruk?** Jika kedua
   pembacaan mengarah ke tindakan yang sama, atau tidak ke tindakan sama
   sekali, metrik itu hanyalah hiasan. Telusuri dasbor Anda petak demi petak
   dan paksa jawaban yang jujur untuk setiap petak. Latihan ini rutin
   memangkas separuh dasbor yang menggembung dalam satu kali duduk, karena
   sebagian besar kekusutan menumpuk dari metrik yang tidak pernah dihapus,
   bukan dari metrik yang sengaja ditambahkan seseorang dengan alasan yang
   masih berlaku.

2. **Metrik kita yang mana yang dipakai secara diagnostik, dan mana yang
   diam-diam menjadi evaluatif?** Metrik yang dibangun untuk memahami kendala
   sistem bisa bergeser menjadi dipakai untuk meranking tim atau individu tanpa
   ada yang memutuskannya dengan sengaja, sering lewat komentar sambil lalu
   dalam rapat tinjauan yang lalu menjadi kebiasaan. Begitu pergeseran itu
   terjadi, angkanya tidak lagi bisa dipercaya, karena orang kini punya alasan
   untuk membuatnya tampak bagus alih-alih akurat. Tuliskan penggunaan yang
   dimaksudkan untuk setiap metrik dan cocokkan praktik saat ini dengannya.

3. **Apa yang tidak kita ukur karena sulit diinstrumentasi, dan berapa harga
   celah itu bagi kita?** Titik buta yang paling berbahaya adalah yang tidak
   pernah masuk ke dasbor justru karena sulit diukur dengan mudah: gesekan
   dependensi lintas tim, terkikisnya pengetahuan institusional, atau
   menumpuknya solusi darurat yang rapuh secara diam-diam. Bawalah daftar hal
   yang secara pribadi dikhawatirkan semua orang tetapi tidak dilacak siapa
   pun, dan jujurlah tentang alasannya.

4. **Jika kita menghapus metrik ini besok, siapa yang akan menyadarinya, dan
   apa yang hilang dari mereka?** Metrik yang tidak akan dirindukan siapa pun
   adalah metrik yang tidak menginformasikan keputusan apa pun. Pertanyaan ini
   menyingkap petak pajangan yang bertahan semata karena kelembaman. Bagi
   organisasi besar dengan puluhan dasbor tim, disiplin memangkas ini sama
   pentingnya dengan disiplin menambah metrik baru sejak awal.

5. **Berapa biaya sebenarnya untuk memproduksi dan memelihara setiap metrik di
   dasbor kita, termasuk waktu rekayasa di balik instrumentasinya?** Metrik
   tidak gratis. Pipeline, dasbor, dan waktu tinjauan yang dihabiskan untuk
   membahas sebuah angka semuanya membawa biaya berulang yang mudah
   diremehkan karena tersebar di banyak tugas kecil, bukan satu pos yang
   terlihat. Bawalah upaya instrumentasi dan pemeliharaan Anda yang
   sesungguhnya dan timbang terhadap nilai keputusan dari pertanyaan 1.

6. **Di mana pengukuran telah menjadi pengganti penilaian, dan di mana
   penilaian telah menjadi pengganti pengukuran?** Kedua mode kegagalan itu
   nyata. Tim yang menyerahkan setiap keputusan kepada dasbor kehilangan
   penilaian kontekstual yang menangkap apa yang terlewat oleh angka; tim yang
   mengabaikan data yang tersedia demi suara paling keras di ruangan
   mengulangi persis masalah yang membuka topik ini. Tujuannya adalah metrik
   yang menginformasikan penilaian, bukan metrik yang menggantikannya.

## Lensa sektor

**Startup.** Dengan segelintir insinyur, sebagian besar yang diperingatkan
topik ini, pergeseran ke penggunaan evaluatif, titik buta, dasbor yang
menggembung, mudah dihindari hanya karena semua orang berbicara setiap hari.
Risikonya justru sebaliknya: melewatkan pengukuran sama sekali karena terasa
seperti beban yang tidak sanggup ditanggung tim. Pilih dua atau tiga
pertanyaan berbentuk keputusan (apakah kita cukup cepat mengirim, apakah
kualitas terjaga) dan instrumentasikan hanya itu.

**Usaha kecil.** Tanpa tim platform atau data khusus, bersandarlah pada apa
pun yang sudah dilaporkan perangkat Anda yang ada alih-alih membangun
instrumentasi khusus. Dasbor pemroses pembayaran, metrik waktu respons
perangkat dukungan, dan riwayat build penyedia CI Anda biasanya sudah
mencakup keputusan yang paling penting. Tahan godaan membeli platform
analitik rekayasa khusus sebelum Anda terbukti akan bertindak atas apa yang
dikatakannya.

**Perusahaan besar.** Risiko intinya adalah metrik yang bergeser diam-diam
dari diagnostik ke evaluatif seiring naik melewati lapisan manajemen, dan
dasbor yang tumbuh lewat penumpukan karena tidak ada yang memiliki tugas
memangkasnya. Tata kelola (topik 1.4) bukan pilihan pada skala ini.
Standarkan definisi di seluruh unit bisnis, dan bangun tinjauan pemensiunan
berkala ke dalam program metrik itu sendiri.

**Pemerintahan.** Metrik di sini sering membawa bobot hukum atau anggaran,
yang menaikkan nilai melakukannya dengan benar sekaligus biaya melakukannya
dengan salah. Angka yang dilaporkan kepada parlemen atau badan pengawas
membutuhkan metodologi yang terdokumentasi, definisi yang stabil lintas
periode pelaporan, dan kejujuran tentang keterbatasannya. Perlakukan "saat
ini kami tidak mengukur hal ini" sebagai jawaban yang mungkin harus Anda
pertahankan, bukan kegagalan pribadi yang disembunyikan.

## Contoh

**Perusahaan besar.** Organisasi rekayasa sebuah perusahaan asuransi global
telah tumbuh menjadi lebih dari enam puluh tim scrum, masing-masing dengan
dasbor informalnya sendiri, tidak ada yang bisa dibandingkan dengan yang lain.
Pimpinan tidak bisa menjawab pertanyaan dasar: dari sepuluh investasi platform
strategis kita, mana yang benar-benar menghasilkan perangkat lunak lebih
cepat. Solusinya bukan lebih banyak metrik, melainkan lebih sedikit yang
lebih baik: organisasi itu mendefinisikan inti bersama yang digerakkan
keputusan berupa metrik DORA (topik 2.10) yang dihitung secara identik di
mana-mana dari data pipeline yang sama, memensiunkan empat puluh dasbor
khusus tim, dan akhirnya bisa membandingkan area investasi dengan dasar yang
sama dalam dua kuartal.

**Pemerintahan.** Tim layanan digital sebuah badan pajak nasional diminta oleh
komite pengawas untuk menunjukkan imbal hasil program modernisasi
bertahun-tahun. Metrik tim yang ada sepenuhnya internal dan berbasis
aktivitas: story point yang diselesaikan, sprint yang ditutup. Tak satu pun
menjawab pertanyaan sebenarnya dari komite. Tim itu justru membangun
sekumpulan kecil metrik hasil, median waktu untuk menyelesaikan masalah
pelaporan warga, tingkat adopsi kanal digital, dan tingkat cacat yang lolos
di sistem baru, dan melaporkannya setiap kuartal dengan metodologi yang
terdokumentasi. Pertanyaan komite bergeser dari "buktikan Anda bekerja"
menjadi "bagaimana kita mereplikasi ini di badan berikutnya," yang merupakan
hasil yang seharusnya dihasilkan oleh kumpulan metrik yang dipilih dengan
baik.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari pengukuran yang disengaja adalah kualitas keputusan.
Organisasi yang bisa mengatakan, dengan bukti, "lead time kami membaik 30%
setelah investasi platform" dapat mempertahankan investasi itu, mengulangi apa
yang berhasil, dan menghentikan apa yang tidak. Organisasi yang bersandar pada
anekdot tidak bisa melakukan semua itu dengan yakin, dan akhirnya
memperdebatkan ulang argumen yang sama setiap siklus anggaran karena tak ada
yang bisa menunjuk angka yang dipercaya kedua pihak.

Biaya pengukuran bukanlah dasbornya. Biayanya adalah disiplin yang
berkelanjutan: instrumentasi, pemeliharaan definisi, dan pemangkasan berkala
yang direkomendasikan topik ini. Total biaya kepemilikan itu nyata tetapi
sederhana dibandingkan biaya alternatifnya, yaitu organisasi besar mengambil
keputusan teknologi bernilai jutaan dolar berdasarkan siapa pun yang paling
meyakinkan berargumen di ruangan. Imbal hasil program metrik bukanlah
metriknya sendiri; melainkan keputusan yang menjadi lebih baik berkat metrik
itu.

## Anti-pola dan jebakan

- **Mengukur semua yang diekspor perangkat:** mengubah dasbor menjadi derau
  dan mengundang manipulasi di permukaan yang sangat luas tanpa nilai
  keputusan yang sepadan.
- **Metrik tanpa keputusan yang disebutkan:** hiasan yang memakan upaya
  pemeliharaan dan tidak memberi tahu siapa pun hal yang bisa ditindaklanjuti.
- **Pergeseran diam-diam dari penggunaan diagnostik ke evaluatif:** cara
  tercepat untuk menghancurkan kepercayaan pada sebuah angka.
- **Memperlakukan metrik sebagai fakta, bukan hipotesis:** proksi yang benar
  dua tahun lalu bisa salah hari ini, dan tak ada yang memeriksa.
- **Mengira ketiadaan angka buruk sama dengan kehadiran angka baik:** metrik
  yang tidak pernah Anda lihat tidak bisa memberi tahu bahwa ada yang salah.
- **Membangun kapabilitas pengukuran sebelum memutuskan apa yang hendak
  diputuskan:** instrumentasi yang mencari pertanyaan membuang waktu rekayasa
  yang nyata.

## Model kematangan

- **Tingkat 1, Memulai (Initiate):** Metrik, jika ada sama sekali, bersifat ad
  hoc, bersifat pribadi bagi siapa pun yang membangunnya, dan tak seorang pun
  bisa mengatakan keputusan apa yang diinformasikan oleh masing-masingnya.
- **Tingkat 2, Mengembangkan (Develop):** Sekumpulan metrik dasar ada untuk
  beberapa tim, kebanyakan disalin dari kerangka kerja atau bawaan sebuah
  perangkat, tanpa kaitan yang jelas kembali ke sebuah keputusan.
- **Tingkat 3, Menstandarkan (Standardize):** Setiap metrik yang dilacak
  memiliki tujuan terdokumentasi dan klasifikasi diagnostik-versus-evaluatif
  yang eksplisit, diterapkan secara konsisten di seluruh organisasi.
- **Tingkat 4, Mengelola (Manage):** Metrik ditinjau dengan irama tetap
  terhadap keputusan yang diinformasikannya; metrik yang berhenti pantas
  dipertahankan dipensiunkan, dan seluruh kumpulan diukur biayanya sekaligus
  nilainya.
- **Tingkat 5, Mengorkestrasi (Orchestrate):** Pengukuran adalah kapabilitas
  yang hidup: organisasi rutin mengidentifikasi titik butanya sendiri, menguji
  apakah proksinya masih melacak kenyataan, dan memperlakukan program metrik
  itu sendiri sebagai sesuatu yang ditingkatkan, bukan sekadar dipelihara.

## Gagasan untuk diskusi

1. Metrik mana di dasbor kita yang paling sulit kita justifikasi untuk dipertahankan jika ditanya hari ini?
2. Keputusan apa yang kita ambil pada kuartal lalu dengan memakai metrik, bukan opini?
3. Di mana dalam organisasi kita sebuah metrik diagnostik diam-diam menjadi evaluatif?
4. Apa yang kita takut ukur, dan mengapa?
5. Jika program metrik kita lenyap besok, keputusan apa yang akan memburuk?

## Poin-poin utama

- Pengukuran ada untuk melayani **keputusan**, bukan demi dirinya sendiri;
  metrik tanpa keputusan yang melekat hanyalah hiasan.
- Pisahkan penggunaan **diagnostik** dari penggunaan **evaluatif**, secara
  tertulis, dan waspadai pergeseran diam-diam di antara keduanya.
- Perlakukan setiap metrik sebagai **hipotesis** tentang apa yang
  diwakilinya, bukan fakta yang sudah mapan, dan tinjau kembali hipotesis itu
  dengan irama tertentu.
- Diam, memilih untuk tidak mengukur sesuatu, adalah keputusan yang
  berkonsekuensi; buat titik buta terlihat alih-alih membiarkannya tak
  terlihat secara bawaan.
- Total biaya program metrik itu nyata; timbang secara eksplisit terhadap
  nilai keputusan yang diberikan setiap metrik.

## Referensi dan bacaan lanjutan

- *Accelerate: The Science of Lean Software and DevOps*, oleh Nicole Forsgren,
  Jez Humble, dan Gene Kim (fondasi riset untuk pengukuran rekayasa berbasis
  hasil).
- *How to Measure Anything*, oleh Douglas W. Hubbard (kerangka umum untuk
  mengkuantifikasi hal-hal yang tampak tidak terukur).
- *Measuring and Managing Performance in Organizations*, oleh Robert D. Austin
  (analisis mendasar tentang disfungsi yang bisa dibawa pengukuran ke dalam
  organisasi).
- *Thinking, Fast and Slow*, oleh Daniel Kahneman (bias kognitif yang membuat
  penilaian tanpa bantuan menjadi pengganti pengukuran yang tidak andal).
- Program DevOps Research and Assessment (DORA) milik Google, [dora.dev](https://dora.dev/) (riset
  State of DevOps yang terus berjalan, yang menjadi rujukan buku ini di
  sepanjang halamannya).
