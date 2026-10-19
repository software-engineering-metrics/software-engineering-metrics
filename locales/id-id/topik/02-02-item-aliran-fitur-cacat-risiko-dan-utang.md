# 2.2 Item aliran: fitur, cacat, risiko, dan utang

## Gambaran umum dan motivasi

**Item aliran (flow item)** adalah unit pekerjaan dalam Flow Framework, dan
setiap item aliran termasuk ke tepat satu dari empat jenis: **fitur**, nilai
bisnis atau kemampuan baru yang diberikan kepada pelanggan; **cacat**,
perbaikan kualitas untuk bug yang ditemukan pengguna atau pengujian;
**risiko**, pekerjaan keamanan, kepatuhan, privasi, dan tata kelola yang
melindungi bisnis; dan **utang**, yaitu
[utang teknis](https://en.wikipedia.org/wiki/Technical_debt), perbaikan
arsitektur, dan pekerjaan infrastruktur yang memungkinkan kecepatan di masa
depan. Topik 2.1 memperkenalkan kerangka kerja tempat keempat kategori ini
berada; topik ini mendalami taksonomi itu sendiri, karena kategori-kategori
tersebut hanya bernilai bila sebuah tim mengklasifikasikan pekerjaannya ke
dalamnya dengan jujur dan konsisten.

Sifat yang menentukan item aliran adalah bahwa alokasi di antara keempat jenis
itu merupakan **permainan zero-sum**: ada jumlah kapasitas rekayasa yang tetap
dalam periode tertentu, dan setiap jam yang dihabiskan untuk sebuah fitur
adalah jam yang tidak dipakai untuk pekerjaan utang, risiko, atau cacat. Ini
bukan fakta baru tentang pengiriman perangkat lunak, setiap pemimpin rekayasa
sudah tahu bahwa kapasitas itu terbatas, tetapi kebanyakan organisasi tidak
punya cara yang konsisten dan jujur untuk melihat pembagian yang sebenarnya.
Velocity sprint menghitung story point tanpa memandang jenis; backlog yang
sudah habis dikerjakan tampak identik, baik pekerjaan di baliknya adalah alur
checkout baru maupun tiga bulan perbaikan keamanan yang tidak glamor. Item
aliran ada khusus untuk membuat pembagian yang tak terlihat itu terlihat.

Bagi tim besar, visibilitas ini mengubah sifat percakapan alokasi sumber daya.
Alih-alih pemimpin rekayasa mengajukan argumen tanpa angka bahwa "kita butuh
lebih banyak waktu untuk utang teknis," klasifikasi item aliran menghasilkan
angka yang nyata, utang menghabiskan 30% kapasitas kuartal lalu, yang dapat
didiskusikan, dipertahankan, dan disesuaikan secara sengaja bersama pemangku
kepentingan bisnis. Organisasi perusahaan besar yang menjalankan banyak lini
produk sekaligus dan lembaga pemerintahan yang menyeimbangkan fungsionalitas
baru bagi warga dengan risiko sistem warisan sama-sama bergantung pada
pertukaran yang terkuantifikasi dan dapat dipertanggungjawabkan semacam ini,
jauh lebih daripada sekadar perasaan pribadi dan informal bahwa "kita
menghabiskan terlalu banyak waktu untuk pemeliharaan."

## Prinsip utama

- **Setiap item aliran termasuk ke tepat satu jenis.** Memaksa satu klasifikasi,
  bukan membolehkan klasifikasi campuran atau ambigu, itulah yang membuat
  taksonomi ini dapat dipakai untuk pelaporan agregat.
- **Alokasi bersifat zero-sum, bukan aditif.** Kapasitas yang lebih banyak
  untuk fitur pasti berarti kapasitas yang lebih sedikit untuk cacat, risiko,
  dan utang pada periode yang sama.
- **Tidak ada distribusi yang sehat secara universal.** Produk muda dalam fase
  pertumbuhan wajar condong ke fitur; sistem matang yang menanggung risiko
  teknis nyata wajar condong ke pekerjaan utang dan risiko.
- **Pekerjaan utang dan risiko selalu kurang dilaporkan tanpa disiplin ini.**
  Pekerjaan itu cenderung berlangsung diam-diam, terserap ke dalam "tugas
  rekayasa" yang generik, sampai klasifikasi item aliran memaksanya muncul ke
  permukaan.
- **Kualitas klasifikasi menentukan seluruh nilai taksonomi.** Taksonomi yang
  diterapkan secara tidak konsisten atau dimanipulasi setelah kejadian
  menghasilkan angka yang secara aktif menyesatkan, bukan menginformasikan.

## Rekomendasi

### Klasifikasikan setiap item saat intake, dengan definisi tertulis untuk tiap jenis

Sepakati definisi tertulis yang ringkas tentang apa yang dihitung sebagai
fitur, cacat, risiko, dan utang dalam konteks spesifik Anda, dan wajibkan
setiap pekerjaan baru diklasifikasikan terhadap definisi itu begitu masuk ke
aliran nilai, bukan setelah selesai. Definisi yang disepakati sebelumnya
menahan godaan untuk mengklasifikasi secara retroaktif berdasarkan bagaimana
sebuah pekerjaan akhirnya tampak, yang persis menjadi risiko manipulasi
(gaming) yang disebut topik ini langsung di bawah.

### Laporkan distribusi aliran sebagai tren, bukan satu potret sesaat

Distribusi satu periode memberi tahu Anda lebih sedikit daripada tren di
beberapa periode. Pergeseran yang stabil menuju satu jenis item, fitur naik
sementara utang diam-diam menyusut kuartal demi kuartal, adalah sinyal yang
jauh lebih kuat daripada angka satu periode mana pun, dan biasanya itulah pola
yang layak diangkat bersama pemangku kepentingan sebelum menjadi krisis, bukan
sesudahnya.

### Tetapkan distribusi target secara sengaja bersama pemangku kepentingan bisnis, bukan hanya rekayasa

Putuskan, bersama pimpinan produk dan bisnis, seperti apa distribusi yang
sehat untuk fase aliran nilai Anda saat ini, dan tinjau target itu secara
berkala alih-alih membiarkannya bergeser secara default. Produk muda dalam fase
pertumbuhan dan sistem matang dalam fase stabilitas memiliki target sehat yang
wajar berbeda, dan target itu sendiri seharusnya menjadi keputusan bisnis yang
dinegosiasikan, bukan sesuatu yang diputuskan rekayasa sendirian secara
diam-diam.

### Periksa silang klasifikasi item aliran dengan bukti independen

Bandingkan distribusi aliran Anda secara berkala dengan metrik yang tidak
bergantung pada klasifikasi mandiri: tingkat cacat yang lolos (topik 5.1),
pengukuran utang teknis (topik 4.5), dan metrik manajemen kerentanan
(topik 6.4). Jika cacat atau kerentanan meningkat sementara porsi item aliran
"cacat" dan "risiko" tetap datar atau menyusut, ketidakcocokan itu adalah
sinyal paling jelas yang tersedia bahwa klasifikasi telah menyimpang dari
kenyataan.

### Waspadai secara khusus pola pabrik fitur

Ketika distribusi aliran menunjukkan fitur secara konsisten menyerap hampir
semua kapasitas, kuartal demi kuartal, dengan pekerjaan utang dan risiko tidak
pernah naik di atas porsi simbolis, pola itu (kadang disebut "feature factory"
atau pabrik fitur) biasanya berarti utang dan risiko dibiarkan kekurangan
kapasitas, bukan bahwa sistem benar-benar tidak butuh pemeliharaan. Pola ini
nyaman dalam jangka pendek dan mahal kemudian, akhirnya muncul sebagai krisis
kualitas atau keamanan yang datang tanpa peringatan di bagan distribusi aliran,
karena akumulasi di baliknya tidak pernah terlihat.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa klasifikasi formal (backlog generik) | Tanpa beban proses | Pekerjaan utang, risiko, dan cacat tetap tak terlihat; sulit mempertahankan keputusan alokasi sumber daya |
| Klasifikasi item aliran empat jenis | Membuat alokasi kapasitas terlihat dan dapat dinegosiasikan dengan pemangku kepentingan | Membutuhkan disiplin saat intake dan definisi tertulis yang disepakati per jenis |
| Klasifikasi yang lebih rinci (banyak subjenis) | Lebih banyak detail diagnostik | Lebih banyak upaya klasifikasi; lebih banyak angka yang harus dijelaskan kepada pemangku kepentingan |
| Klasifikasi retroaktif | Lebih mudah diterapkan, tanpa perubahan proses di awal | Sangat rentan dimanipulasi; klasifikasi bergeser ke arah apa pun yang tampak terbaik |

Ketegangan utamanya adalah **disiplin klasifikasi versus beban proses**.
Taksonomi empat jenis sengaja dibuat kasar, cukup kasar sehingga
mengklasifikasikan satu item hanya butuh hitungan detik, bukan perdebatan,
tetapi kekasaran itu hanya bertahan jika disiplin mengklasifikasi saat
intake, terhadap definisi tertulis, benar-benar dijaga. Selesaikan ketegangan
ini dengan menjaga taksonomi tetap sesederhana ini, empat jenis, tidak lebih,
dan menanamkan ketelitian tambahan pada langkah audit (pemeriksaan silang
dengan bukti independen) alih-alih pada skema klasifikasi yang lebih rumit dan
akan terkikis di bawah beban kerja nyata.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Jika kita mengklasifikasikan semua yang dikirim tim kita kuartal lalu,
   seperti apa pembagian sebenarnya antara fitur, cacat, risiko, dan utang,
   dan apakah itu akan mengejutkan pemangku kepentingan kita?** Kebanyakan tim
   belum pernah melakukan latihan ini dengan jujur. Cobalah dengan data nyata
   sebelum mengira Anda sudah tahu jawabannya.

2. **Apakah kita punya definisi tertulis yang disepakati tentang apa yang
   dihitung sebagai fitur, utang, atau risiko dalam konteks kita, atau
   klasifikasi bergantung pada siapa pun yang kebetulan melabeli tiket?**
   Definisi yang informal dan tidak konsisten menghasilkan angka yang tampak
   presisi tetapi sebenarnya tidak dapat dibandingkan dari periode ke periode.

3. **Pernahkah distribusi aliran kita bergeser terus-menerus menuju satu jenis
   item tanpa ada yang memutuskannya secara sengaja?** Pergeseran lambat mudah
   terlewat periode demi periode tetapi jelas begitu digambar sebagai tren.
   Tarik data beberapa periode, jika ada, dan cari pola ini dengan jujur.

4. **Seperti apa distribusi aliran yang sehat untuk fase produk kita saat ini,
   dan sudahkah kita benar-benar menyepakati target itu bersama pemangku
   kepentingan bisnis?** Kebanyakan organisasi belum pernah membuat target ini
   eksplisit, yang berarti tidak ada dasar bersama untuk menyadari ketika
   distribusi sebenarnya menjauh darinya.

5. **Apakah distribusi aliran kita cocok dengan bukti independen, seperti
   tingkat cacat yang lolos atau jumlah kerentanan terbuka, atau ada
   ketidakcocokan yang layak diselidiki?** Ketidakcocokan di sini adalah tanda
   paling jelas bahwa klasifikasi telah menyimpang dari wujud pekerjaan yang
   sebenarnya.

6. **Mungkinkah seseorang di tim kita diam-diam melabeli ulang item utang atau
   risiko sebagai fitur di bawah tekanan pengiriman, dan apakah kita saat ini
   akan menyadarinya?** Ini adalah risiko manipulasi (gaming) utama topik ini
   yang dinyatakan langsung. Diskusikan apakah proses Anda saat ini benar-benar
   akan menangkapnya, bukan hanya apakah ada yang sengaja melakukannya.

## Lensa sektor

**Startup.** Klasifikasi formal sering terasa sebagai beban ketika seluruh tim
sudah tahu apa yang dikerjakan setiap orang. Minimum yang berguna pada skala
ini cukup menyebut keempat kategori dengan lantang saat perencanaan, agar
pekerjaan utang dan risiko tidak diam-diam diturunkan prioritasnya setiap kali
tenggat fitur menimbulkan tekanan, pola yang menumpuk dengan buruk begitu basis
kode dan tim sama-sama tumbuh.

**Usaha kecil.** Satu bidang kustom atau label di perangkat pelacakan yang
sudah Anda pakai cukup untuk mencatat jenis item aliran tanpa investasi
perangkat khusus apa pun. Disiplin mengklasifikasi secara konsisten saat
intake jauh lebih penting daripada kecanggihan perangkat apa pun.

**Perusahaan besar.** Klasifikasi item aliran adalah tempat kerangka kerja ini
membuktikan nilainya dalam skala besar, karena organisasi besar yang
menjalankan banyak aliran nilai bersamaan tidak punya cara agregat lain yang
andal untuk melihat bagaimana kapasitas sebenarnya terbagi antara fitur,
cacat, risiko, dan utang. Investasikan pada klasifikasi yang terintegrasi
dengan perangkat dan pemeriksaan silang berkala terhadap bukti independen;
klasifikasi manual dan ad hoc tidak bertahan pada skala organisasi yang
nyata.

**Pemerintahan.** Distribusi aliran memberi pemimpin teknologi sektor publik
jawaban yang terkuantifikasi dan dapat dipertanggungjawabkan ketika ditanya
mengapa tidak lebih banyak fitur baru bagi warga yang dikirim, ketika jawaban
jujurnya adalah bahwa beban risiko dan utang sistem warisan menghabiskan porsi
kapasitas yang nyata dan dapat dibenarkan. Membuat pertukaran itu eksplisit
dan dinegosiasikan, alih-alih diserap diam-diam, cenderung membangun lebih
banyak kepercayaan dengan badan pengawas daripada seruan tanpa angka pada
"kebutuhan teknis."

## Contoh

**Perusahaan besar.** Tim platform e-commerce sebuah perusahaan ritel besar
percaya, berdasarkan velocity sprint, bahwa mereka mengirimkan keluaran fitur
yang stabil. Latihan pertama klasifikasi item aliran yang jujur menemukan
bahwa "fitur" ternyata hanya 40% dari pekerjaan yang selesai, dengan utang,
sebagian besar terkait sistem checkout yang menua, menghabiskan hampir
sepertiga kapasitas tanpa pernah disebut demikian dalam laporan sebelumnya.
Mempresentasikan pembagian ini kepada pimpinan produk, bersama tingkat cacat
lolos yang meningkat dan menguatkan beban utang itu, menghasilkan anggaran
modernisasi khusus yang selama dua tahun gagal diminta tim itu hanya dengan
argumen kualitatif.

**Pemerintahan.** Tim lisensi digital sebuah dinas kendaraan bermotor negara
bagian mengklasifikasikan backlog-nya untuk pertama kali setelah sebuah
gangguan layanan publik menarik sorotan pada stabilitas sistem di baliknya.
Latihan itu mengungkap bahwa pekerjaan "risiko", terutama penambalan
keamanan yang berulang kali diturunkan prioritasnya demi fitur warga yang
terlihat, telah menyusut menjadi kurang dari 5% kapasitas selama setahun
sebelumnya, pola yang tidak pernah terlihat dalam pelaporan standar tim itu.
Pimpinan dinas memakai temuan itu untuk mewajibkan alokasi minimum pekerjaan
risiko ke depan, didukung data distribusi aliran, bukan sekadar pernyataan
kebijakan umum.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari klasifikasi item aliran adalah dasar yang terkuantifikasi dan
dapat dipertanggungjawabkan untuk keputusan alokasi sumber daya yang
sebelumnya diperdebatkan secara kualitatif dan sering kalah oleh pekerjaan apa
pun yang paling terlihat oleh pemangku kepentingan. Contoh ritel di atas,
yang mendapatkan anggaran modernisasi dengan data kapasitas nyata alih-alih
seruan umum, adalah pola yang secara andal dihasilkan disiplin ini: angka yang
spesifik jauh lebih sulit diabaikan daripada kesan umum bahwa "kita butuh
lebih banyak waktu untuk pemeliharaan."

Total biaya kepemilikan rendah begitu taksonomi dan definisinya disepakati:
klasifikasi hanya menambah hitungan detik pada intake, bukan beban proses yang
berarti, dan integrasi perangkat yang dibutuhkan untuk melacaknya biasanya
hanya satu bidang kustom atau label. Biaya nyata yang berkelanjutan adalah
disiplin mempertahankan klasifikasi yang jujur di bawah tekanan pengiriman,
itulah sebabnya pemeriksaan silang berkala terhadap bukti independen sama
pentingnya dengan adopsi awal.

## Anti-pola dan jebakan

- **Mengklasifikasikan pekerjaan secara retroaktif, setelah hasilnya
  diketahui:** vektor manipulasi (gaming) yang menjadi inti topik ini. Di bawah
  tekanan pengiriman, sebuah tim dapat diam-diam melabeli pekerjaan utang atau
  risiko sebagai fitur setelah kejadian, atau membulatkan item yang ambigu ke
  jenis mana pun yang tampak lebih baik di bagan distribusi, tanpa satu
  keputusan pun yang tampak tidak jujur dengan sendirinya. Pagar pengaman
  (guardrail)-nya adalah klasifikasi saat intake terhadap definisi tertulis,
  dipadukan dengan audit berkala yang membandingkan distribusi aliran dengan
  bukti independen seperti tingkat cacat yang lolos (topik 5.1) dan metrik
  kerentanan (topik 6.4), disiplin audit terhadap bukti independen yang sama
  seperti yang diminta topik 1.2 untuk setiap metrik di buku ini.
- **Membiarkan fitur secara konsisten menyerap hampir semua kapasitas (pola
  pabrik fitur):** diam-diam membuat pekerjaan utang dan risiko kekurangan
  kapasitas sampai muncul sebagai krisis.
- **Memperlakukan distribusi satu periode sebagai gambaran utuh:** melewatkan
  pergeseran lambat dan kumulatif yang tampak jelas dalam tampilan tren.
- **Menetapkan distribusi target tanpa pemangku kepentingan bisnis:**
  menghilangkan nilai utama kerangka kerja ini, yaitu pemahaman bersama yang
  dinegosiasikan tentang pertukaran tersebut.
- **Memakai definisi yang tidak konsisten atau tidak terdokumentasi per jenis:**
  menghasilkan angka yang tampak presisi tetapi sebenarnya tidak dapat
  dibandingkan dari waktu ke waktu.
- **Merekayasa taksonomi secara berlebihan dengan banyak subjenis:** menambah
  beban klasifikasi yang mengikis disiplin tanpa menambah wawasan yang
  sepadan.

## Model kematangan

- **Level 1, Memulai (Initiate):** Pekerjaan dilacak secara generik, tanpa
  klasifikasi item aliran; pekerjaan utang dan risiko tidak terlihat dalam
  pelaporan.
- **Level 2, Mengembangkan (Develop):** Beberapa tim mengklasifikasi item
  aliran secara informal, tetapi definisinya tidak konsisten dan klasifikasi
  sering terjadi secara retroaktif.
- **Level 3, Membakukan (Standardize):** Semua tim mengklasifikasi saat intake
  terhadap definisi tertulis yang dipakai bersama, dan distribusi aliran
  dilacak sebagai tren.
- **Level 4, Mengelola (Manage):** Distribusi aliran diperiksa silang secara
  berkala terhadap bukti independen, dan distribusi target ditetapkan secara
  sengaja bersama pemangku kepentingan bisnis.
- **Level 5, Mengorkestrasi (Orchestrate):** Data item aliran secara langsung
  menginformasikan keputusan alokasi sumber daya dan investasi di seluruh
  organisasi, dan pimpinan dapat menunjuk keputusan-keputusan spesifik yang
  dibuat karena klasifikasi membuat pertukaran yang sebelumnya tak terlihat
  menjadi eksplisit.

## Gagasan untuk diskusi

1. Apa yang akan ditunjukkan oleh pembagian item aliran yang jujur atas pekerjaan kuartal lalu, dan apakah itu akan mengejutkan siapa pun?
2. Apakah kita punya definisi tertulis untuk masing-masing dari empat jenis item aliran, atau klasifikasi bergantung pada siapa yang melabeli pekerjaan?
3. Pernahkah distribusi aliran kita bergeser menuju satu jenis item tanpa keputusan yang disengaja di baliknya?
4. Bukti independen apa yang dapat kita pakai hari ini untuk memeriksa silang distribusi aliran kita?

## Poin-poin utama

- Sebuah **item aliran** termasuk ke tepat satu dari empat jenis, fitur,
  cacat, risiko, atau utang, dan alokasi kapasitas di antaranya bersifat
  **zero-sum**.
- **Tidak ada distribusi yang sehat secara universal**; campuran yang tepat
  bergantung pada fase produk dan seharusnya menjadi target yang disengaja dan
  dinegosiasikan bersama pemangku kepentingan bisnis.
- Vektor manipulasi (gaming) utama topik ini adalah **klasifikasi retroaktif**,
  diam-diam melabeli ulang pekerjaan utang atau risiko sebagai fitur setelah
  kejadian; pagar pengaman (guardrail)-nya adalah klasifikasi saat intake
  ditambah audit berkala terhadap bukti independen.
- Waspadai secara khusus **pola pabrik fitur**, fitur yang secara konsisten
  menyerap hampir semua kapasitas, yang membuat pekerjaan utang dan risiko
  kekurangan kapasitas sampai muncul sebagai krisis.
- Distribusi aliran paling bernilai sebagai **tren**, dan manfaat terbesarnya
  datang dari membagikannya langsung kepada pemangku kepentingan bisnis.

## Referensi dan bacaan lanjutan

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
