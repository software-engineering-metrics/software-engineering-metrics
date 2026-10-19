# 2.4 Waktu alir dan beban aliran

## Gambaran umum dan motivasi

**Waktu alir (flow time)** adalah total waktu yang berlalu sejak sebuah item
aliran (topik 2.2) masuk ke aliran nilai sampai item itu dikirimkan, mengukur
daya tanggap di sepanjang jalur penuh sejak kebutuhan bisnis teridentifikasi
sampai pelanggan menerima nilai. **Beban aliran (flow load)** adalah jumlah
total item aliran yang sedang aktif atau menunggu dalam aliran nilai pada saat
tertentu, nama Flow Framework untuk apa yang disebut topik 2.5 sebagai
pekerjaan yang sedang berjalan (WIP). Bersama-sama, keduanya adalah dua metrik
Flow Framework yang paling langsung terhubung dengan matematika antrean,
karena beban aliran tidak hanya berkorelasi dengan waktu alir, melainkan
menentukannya secara matematis.

Hubungan itu adalah **[hukum Little](https://en.wikipedia.org/wiki/Little%27s_law)**,
bukti dari teori antrean (topik 2.7 membahasnya penuh) yang menyatakan bahwa
jumlah rata-rata item dalam sistem yang stabil sama dengan laju kedatangan
rata-rata dikalikan waktu rata-rata yang dihabiskan setiap item dalam sistem.
Diterapkan di sini: beban aliran sama dengan laju kedatangan dikalikan waktu
alir. Ini fakta paling berguna dalam topik ini, karena mengubah argumen yang
dulu kualitatif, "kita terlalu kelebihan beban, semuanya jadi lama," menjadi
argumen kuantitatif yang dapat dibuktikan dan tidak mudah ditepis pemimpin
bisnis: jika beban aliran terus naik sementara laju kedatangan datar, waktu
alir dijamin naik juga secara matematis, bukan sekadar kemungkinan besar.

Bagi tim besar, ini sering menjadi angka paling meyakinkan dalam seluruh
kerangka kerja. Pemimpin bisnis yang menolak gagasan mengatakan tidak pada
pekerjaan baru, karena setiap permintaan terasa dapat dibenarkan secara
sendiri-sendiri, sering kali akan menerima bahwa membebani aliran nilai
terbukti memperlambat setiap item yang sudah ada di dalamnya, begitu beban
aliran dilacak dan hubungannya dengan waktu alir ditunjukkan langsung alih-alih
diperdebatkan secara abstrak. Organisasi perusahaan besar yang menyeimbangkan
banyak inisiatif strategis bersamaan dan program pemerintahan yang menjalankan
puluhan alur kerja paralel sama-sama bergantung pada bukti ini, bukan hanya
intuisi di baliknya, untuk membenarkan penolakan memulai lebih banyak pekerjaan
sekaligus.

## Prinsip utama

- **Beban aliran menentukan waktu alir secara matematis, lewat hukum Little.**
  Ini bukan korelasi; ini bukti yang berlaku untuk aliran nilai stabil mana
  pun.
- **Waktu alir mencakup seluruh aliran nilai, bukan hanya rekayasa.** Waktu
  alir dimulai ketika kebutuhan bisnis teridentifikasi, bukan ketika rekayasa
  mengambil pekerjaan, yang kemudian diuraikan lebih lanjut oleh waktu siklus
  di topik 2.6.
- **Beban aliran yang naik adalah tanda peringatan paling awal dari waktu alir
  yang naik.** Karena hubungannya dapat dibuktikan, beban aliran dapat dipantau
  sebagai indikator awal, bukan baru ditemukan setelah waktu alir sudah
  memburuk.
- **Titik masuk aliran nilai harus ditetapkan dan didokumentasikan.** Di mana
  jam waktu alir mulai adalah pilihan definisional yang terpapar risiko
  manipulasi yang sama seperti batas metrik lain mana pun di buku ini.
- **Pemimpin bisnis dapat bertindak langsung atas beban aliran.** Tidak seperti
  waktu alir, yang merupakan pengukuran tertinggal, beban aliran adalah tuas:
  mengatakan tidak pada memulai pekerjaan baru adalah tindakan yang tersedia
  hari ini.

## Rekomendasi

### Tetapkan dan dokumentasikan titik masuk aliran nilai sebelum mengukur waktu alir

Putuskan secara eksplisit apakah waktu alir dimulai ketika kebutuhan bisnis
pertama kali teridentifikasi, ketika disetujui secara formal, atau ketika
rekayasa mulai bekerja, dan dokumentasikan pilihan itu dengan cara yang sama
seperti yang direkomendasikan topik 1.4 untuk piagam metrik mana pun. Keputusan
tunggal ini menentukan apakah waktu alir mengukur daya tanggap ujung ke ujung
yang sesungguhnya atau hanya irisan lebih sempit yang dikendalikan rekayasa,
dan mengubah definisi di kemudian hari tanpa pengungkapan adalah risiko
manipulasi (gaming) utama topik ini.

### Lacak beban aliran secara terus-menerus, bukan berkala

Karena beban aliran adalah indikator awal, lewat hukum Little, dari waktu alir
yang akan datang, lacak sebagai angka hidup yang diperbarui terus-menerus,
bukan potret berkala. Beban aliran yang sudah naik selama berminggu-minggu saat
ada yang memeriksanya sudah diam-diam memperpanjang waktu alir selama itu
juga, tanpa terlihat, sebelum metriknya menyusul.

### Pakai hukum Little secara eksplisit ketika mengajukan batas WIP atau penambahan kapasitas

Ketika mengajukan argumen untuk memulai lebih sedikit pekerjaan bersamaan,
atau menambah kapasitas, tampilkan persamaan yang sebenarnya, bukan hanya
rekomendasinya: beban aliran sama dengan laju kedatangan dikali waktu alir,
sehingga jika laju kedatangan kurang lebih tetap, mengurangi beban aliran
dijamin secara matematis akan mengurangi waktu alir. Ini argumen yang jauh
lebih kuat bagi pemangku kepentingan yang skeptis daripada klaim tanpa angka
bahwa "kita terlalu sibuk," karena dapat dibuktikan, bukan sekadar ditegaskan.

### Pisahkan waktu alir dari penyebab mendasar beban aliran sebelum mengusulkan perbaikan

Ketika beban aliran tinggi, selidiki jenis item aliran (topik 2.2) mana yang
sebenarnya mendorongnya: terlalu banyak fitur yang dimulai bersamaan, tumpukan
cacat yang belum ditangani, atau pekerjaan risiko yang tersangkut menunggu
persetujuan bersama. Setiap penyebab menyiratkan perbaikan yang berbeda, dan
memperlakukan "beban aliran tinggi" sebagai satu masalah yang tidak
dibedakan cenderung menghasilkan respons generik yang tidak efektif.

### Periksa silang waktu alir dengan waktu siklus untuk mengisolasi di mana keterlambatan sebenarnya terjadi

Karena waktu alir mencakup seluruh aliran nilai dan waktu siklus (topik 2.6)
hanya mencakup bagian rekayasanya, bandingkan keduanya secara langsung.
Kesenjangan besar antara waktu alir dan waktu siklus berarti sebagian besar
keterlambatan terjadi sebelum rekayasa melihat pekerjaan itu, dalam antrean
persetujuan, backlog prioritas, atau serah terima antar tim, yang menunjuk
pada perbaikan yang sangat berbeda daripada kesenjangan yang terkonsentrasi di
dalam rekayasa sendiri.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Mengukur waktu alir hanya dari saat rekayasa mengambil pekerjaan | Sederhana, sesuai dengan instrumentasi waktu siklus yang ada | Melewatkan keterlambatan sebelum rekayasa, meremehkan daya tanggap yang sebenarnya |
| Mengukur waktu alir dari identifikasi kebutuhan bisnis yang sebenarnya | Menangkap daya tanggap ujung ke ujung yang sesungguhnya | Membutuhkan instrumentasi tahap di luar kendali langsung rekayasa |
| Potret beban aliran berkala | Murah dihitung sesekali | Melewatkan nilai indikator awal; beban yang naik tak terdeteksi terlalu lama |
| Pelacakan beban aliran terus-menerus | Indikator awal yang hidup dan dapat ditindaklanjuti | Membutuhkan integrasi perangkat berkelanjutan, bukan sekadar laporan sesekali |

Ketegangan utamanya adalah **cakupan versus jangkauan instrumentasi**.
Mengukur waktu alir hanya dari saat rekayasa mengambil pekerjaan jauh lebih
mudah diinstrumentasi, karena memakai ulang data waktu siklus yang sudah
dikumpulkan topik 2.6, tetapi diam-diam meremehkan daya tanggap yang sebenarnya
dengan mengabaikan segala yang terjadi sebelum rekayasa melihat pekerjaan itu.
Selesaikan ketegangan ini dengan memulai dari pengukuran yang lebih sempit dan
berlingkup rekayasa jika hanya itu yang dapat Anda instrumentasi hari ini,
tetapi perlakukan perluasan titik awal waktu alir ke hulu, ke identifikasi
kebutuhan bisnis dan prioritas, sebagai prioritas jangka dekat, bukan
keterbatasan permanen.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Di mana jam waktu alir kita sebenarnya mulai hari ini, dan apakah semua
   orang di organisasi setuju bahwa itu titik awal yang tepat?** Ketidakcocokan
   antara tempat pemangku kepentingan mengira jam itu mulai dan tempat jam itu
   sebenarnya mulai adalah sumber ketidakpercayaan yang umum dan diam-diam
   terhadap metrik. Pastikan definisi yang terdokumentasi cocok dengan
   pemahaman bersama.

2. **Pernahkah kita memeriksa apakah beban aliran, laju kedatangan, dan waktu
   alir yang kita ukur benar-benar memenuhi hukum Little?** Jika ketiganya
   tidak kurang lebih seimbang, salah satu dari tiga angka itu diukur secara
   tidak konsisten. Telusuri angka-angka sebenarnya bersama-sama, jangan
   berasumsi pemeriksaannya akan lulus.

3. **Apakah beban aliran dilacak terus-menerus, atau kenaikan yang stabil akan
   tak terdeteksi berminggu-minggu sebelum ada yang memeriksa?** Indikator awal
   hanya melindungi Anda jika seseorang benar-benar memantaunya hampir secara
   waktu nyata, bukan sekadar meninjaunya dalam laporan kuartalan.

4. **Ketika beban aliran naik, dapatkah kita menyebut jenis item aliran mana
   yang sebenarnya mendorongnya, atau ia terbaca sebagai satu angka yang tidak
   dibedakan?** Diagnosis generik "kita kelebihan beban" menghasilkan respons
   generik yang sering tidak efektif. Periksa apakah instrumentasi Anda saat
   ini benar-benar dapat mengaitkan beban yang naik dengan penyebab tertentu.

5. **Seberapa besar kesenjangan antara waktu alir dan waktu siklus kita, dan
   apakah kesenjangan itu menunjukkan sebagian besar keterlambatan terjadi
   sebelum atau sesudah rekayasa melihat pekerjaan itu?** Perbandingan ini
   sering mengungkap bahwa peluang perbaikan terbesar berada sepenuhnya di luar
   kendali rekayasa sendiri.

6. **Pernahkah seseorang diam-diam mempersempit titik awal waktu alir kita
   agar angkanya tampak lebih baik, tanpa perubahan itu didokumentasikan atau
   diungkapkan?** Ini risiko manipulasi (gaming) utama topik ini yang
   dinyatakan langsung. Tanyakan dengan jujur apakah definisi Anda pernah
   bergeser dengan cara ini.

## Lensa sektor

**Startup.** Beban aliran biasanya rendah karena memang tidak cukup orang untuk
memulai banyak pekerjaan sekaligus, tetapi hubungan matematis yang sama tetap
berlaku begitu pendiri atau insinyur utama menjadi hambatan pribadi bagi banyak
inisiatif bersamaan. Lacak beban aliran secara informal bahkan tanpa perangkat
khusus, karena hukum Little berlaku pada skala apa pun.

**Usaha kecil.** Daftar bersama yang sederhana tentang semua yang sedang aktif
biasanya cukup untuk menghitung beban aliran tanpa perangkat lunak manajemen
aliran nilai khusus. Kebiasaan yang berguna adalah memeriksanya cukup sering
agar angka yang naik tertangkap lebih awal, bukan baru ditemukan setelah waktu
alir sudah terlihat memburuk.

**Perusahaan besar.** Di sinilah hukum Little membuktikan gunanya sebagai
argumen, bukan sekadar metrik: organisasi besar yang menyeimbangkan puluhan
inisiatif strategis bersamaan dapat memakai hubungan yang dapat dibuktikan
antara beban aliran dan waktu alir untuk membuat argumen berbasis bukti bagi
pengurutan pekerjaan, sesuatu yang jarang dicapai argumen kualitatif murni
"kita terlalu sibuk" melawan tekanan pemangku kepentingan yang gigih.

**Pemerintahan.** Program multitahun rutin mengumpulkan beban aliran yang besar
dan implisit di banyak alur kerja, masing-masing dibenarkan sendiri-sendiri,
tanpa visibilitas seluruh organisasi atas totalnya. Menyajikan hukum Little
secara langsung, menunjukkan bahwa pertumbuhan waktu alir program itu sendiri
dijelaskan secara matematis oleh kenaikan beban alirannya sendiri, sering kali
menjadi bukti paling jelas dan paling meyakinkan untuk mengurutkan alur kerja
alih-alih menjalankan semuanya paralel tanpa batas.

## Contoh

**Perusahaan besar.** Organisasi platform sebuah perusahaan teknologi media
menjalankan dua puluh dua inisiatif strategis bersamaan dengan kapasitas yang
realistis untuk sekitar dua belas, ketidaksesuaian yang belum dikuantifikasi
siapa pun sampai seorang VP rekayasa baru meminta beban aliran secara
langsung. Waktu alir untuk inisiatif median telah tumbuh 40% selama setahun
sebelumnya, tren yang dikaitkan pimpinan dengan "pekerjaannya makin sulit."
Menyajikan hukum Little bersama angka beban aliran dan laju kedatangan yang
sebenarnya menunjukkan pertumbuhan itu sepenuhnya dijelaskan oleh kenaikan
beban aliran saja, tanpa perubahan tingkat kesulitan pekerjaan yang diperlukan
untuk menjelaskannya. Organisasi itu mengurutkan inisiatif turun ke beban aliran
yang berkelanjutan, dan waktu alir median turun hampir sepertiga dalam dua
kuartal.

**Pemerintahan.** Program modernisasi sebuah lembaga manajemen hibah federal
telah mengumpulkan beban aliran di puluhan alur kerja paralel tanpa satu total
pun yang dilacak, setiap sponsor alur kerja yakin inisiatifnya sendiri telah
diberi sumber daya yang layak secara terpisah. Analisis kantor program yang
memakai hukum Little menunjukkan bahwa waktu alir agregat program itu, waktu
dari persetujuan sebuah alur kerja sampai pengirimannya, dapat diprediksi
hampir tepat dari beban aliran agregatnya saja, temuan yang meyakinkan para
sponsor yang selama lebih dari setahun menolak argumen penurunan prioritas.
Program itu mengadopsi batas atas beban aliran yang eksplisit, dan alur kerja
baru kini masuk antrean alih-alih langsung dimulai terlepas dari beban saat
ini.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari melacak beban aliran dan waktu alir bersamaan adalah argumen
yang terbukti, bukan sekadar meyakinkan, untuk mengurutkan pekerjaan alih-alih
menjalankan semuanya paralel. Contoh perusahaan teknologi media di atas, yang
menjelaskan seluruh kemunduran waktu alir lewat beban aliran saja, adalah pola
yang secara andal dihasilkan kombinasi ini: argumen kuantitatif yang spesifik
berhasil di tempat seruan kualitatif tentang "terlalu sibuk" sebelumnya gagal
melawan tekanan organisasi yang nyata untuk memulai lebih banyak pekerjaan.

Total biaya kepemilikan rendah dibandingkan daya bujuknya: beban aliran hanya
membutuhkan hitungan hidup item yang aktif dan menunggu, dan waktu alir
membutuhkan instrumentasi titik masuk aliran nilai, pekerjaan yang terbayar
sendiri pada kali pertama ia mencegah organisasi berkomitmen pada lebih banyak
inisiatif bersamaan daripada yang sanggup didukung kapasitas sebenarnya.

## Anti-pola dan jebakan

- **Diam-diam mempersempit titik awal waktu alir untuk memperindah angka:**
  vektor manipulasi (gaming) yang menjadi inti topik ini. Memindahkan awal jam
  dari identifikasi kebutuhan bisnis yang sebenarnya ke titik yang lebih
  belakangan, rekayasa mengambil pekerjaan, persetujuan formal, mengecilkan
  waktu alir tanpa mengubah daya tanggap yang sebenarnya sama sekali, dan dapat
  terjadi cukup bertahap sehingga tidak ada satu perubahan pun yang tampak
  seperti manipulasi yang disengaja. Pagar pengaman (guardrail)-nya adalah
  mendokumentasikan titik masuk secara eksplisit dalam piagam metrik (topik
  1.4) dan mengauditnya secara berkala terhadap definisi yang terdokumentasi,
  disiplin yang sama yang diminta buku ini untuk setiap batas metrik.
- **Mengukur beban aliran hanya secara berkala:** menghilangkan nilainya
  sebagai indikator awal, karena kenaikan yang stabil dapat tak terdeteksi
  berminggu-minggu.
- **Memperlakukan beban aliran sebagai satu angka yang tidak dibedakan:**
  melewatkan jenis item aliran mana yang sebenarnya mendorong kelebihan beban,
  menghasilkan respons yang generik, bukan yang tertarget.
- **Mengabaikan kesenjangan antara waktu alir dan waktu siklus:** melewatkan
  apakah keterlambatan terkonsentrasi sebelum atau sesudah rekayasa, yang
  menyiratkan perbaikan yang sangat berbeda.
- **Berargumen untuk mengurangi pekerjaan bersamaan tanpa menyajikan hukum
  Little secara eksplisit:** seruan kualitatif jauh lebih mudah ditepis
  pemangku kepentingan daripada hubungan kuantitatif yang dapat dibuktikan.
- **Mengira hukum Little hanya berlaku pada skala besar:** hukum ini berlaku
  untuk sistem stabil mana pun terlepas dari ukurannya, termasuk satu individu
  yang kelebihan beban.

## Model kematangan

- **Level 1, Memulai (Initiate):** Baik waktu alir maupun beban aliran tidak
  dilacak; keterlambatan dibicarakan secara anekdotal tanpa data pendukung.
- **Level 2, Mengembangkan (Develop):** Waktu alir dilacak hanya dari saat
  rekayasa mengambil pekerjaan, dan beban aliran diperiksa secara berkala,
  bukan terus-menerus.
- **Level 3, Membakukan (Standardize):** Waktu alir diukur dari titik masuk
  aliran nilai yang terdokumentasi dan berlaku di seluruh organisasi, dan beban
  aliran dilacak terus-menerus sebagai indikator awal.
- **Level 4, Mengelola (Manage):** Hukum Little dipakai secara eksplisit untuk
  membenarkan keputusan kapasitas dan pengurutan, dan beban aliran yang naik
  dikaitkan dengan jenis item aliran tertentu sebelum perbaikan diusulkan.
- **Level 5, Mengorkestrasi (Orchestrate):** Organisasi menetapkan batas atas
  beban aliran yang eksplisit di seluruh aliran nilainya, dan dapat menunjuk
  keputusan pengurutan spesifik, yang didukung hukum Little, yang terukur
  memperbaiki waktu alir.

## Gagasan untuk diskusi

1. Di mana jam waktu alir kita sebenarnya mulai, dan pernahkah definisi itu bergeser tanpa dokumentasi?
2. Apakah beban aliran, laju kedatangan, dan waktu alir yang kita ukur kurang lebih memenuhi hukum Little?
3. Apakah beban aliran dilacak cukup terus-menerus sehingga kenaikan yang stabil akan tertangkap dalam hitungan hari, bukan bulan?
4. Seberapa besar kesenjangan antara waktu alir dan waktu siklus kita, dan apa yang dikatakan kesenjangan itu tentang di mana keterlambatan sebenarnya terjadi?

## Poin-poin utama

- **Beban aliran menentukan waktu alir secara matematis**, lewat hukum Little:
  beban aliran sama dengan laju kedatangan dikali waktu alir, untuk aliran
  nilai stabil mana pun.
- **Waktu alir mencakup seluruh aliran nilai**, dari identifikasi kebutuhan
  bisnis sampai pengiriman, lebih luas daripada lingkup waktu siklus yang hanya
  rekayasa (topik 2.6).
- Vektor manipulasi (gaming) utama topik ini adalah **diam-diam mempersempit
  titik awal waktu alir**; pagar pengaman (guardrail)-nya adalah definisi titik
  masuk yang terdokumentasi dan diaudit.
- **Lacak beban aliran secara terus-menerus**, bukan berkala, agar berfungsi
  sebagai indikator awal yang sungguhan dan bukan penemuan yang tertinggal.
- Pakai hukum Little **secara eksplisit**, bukan hanya sebagai intuisi, ketika
  berargumen untuk batas WIP, penambahan kapasitas, atau pengurutan pekerjaan
  bersamaan.

## Referensi dan bacaan lanjutan

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
