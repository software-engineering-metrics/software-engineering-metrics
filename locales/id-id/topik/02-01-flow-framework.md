# 2.1 Flow Framework

## Gambaran umum dan motivasi

**Flow Framework** adalah model manajerial dan struktural yang dibuat oleh Mik
Kersten dan diterbitkan dalam bukunya tahun 2018, *Project to Product*. Model
ini ada untuk menjawab pertanyaan yang tidak dapat dijawab oleh metrik jalur
pengiriman murni: bukan hanya seberapa cepat dan seberapa aman kode berpindah
dari commit ke produksi, tetapi jenis nilai apa yang sebenarnya mengalir
melalui jalur itu, dan apakah campuran tersebut mencerminkan strategi bisnis
yang sesungguhnya. Kerangka kerja ini memandang pengiriman perangkat lunak
sebagai **[aliran nilai (value stream)](https://en.wikipedia.org/wiki/Value_stream)**,
yaitu rangkaian aktivitas ujung ke ujung yang mengubah sebuah gagasan menjadi
nilai yang diterima pelanggan, dengan meminjam langsung dari tradisi pemetaan
aliran nilai dalam manufaktur lean.

Buku ini memakai Flow Framework sebagai struktur pengorganisasi Bagian 2.
Topik 2.2 memperkenalkan empat item aliran, topik 2.3 dan 2.4 memperkenalkan
lima metrik alirannya, topik 2.8 menelusuri metrik-metrik itu kembali ke
asalnya dalam pemetaan aliran nilai Lean klasik, dan topik 2.10 membahas
metrik DORA sebagai kerangka rujukan yang lebih sempit dan berfokus pada jalur
pengiriman, yang tidak lagi menjadi pembuka bagian ini. Itu pilihan yang
disengaja, bukan penolakan terhadap riset DORA. DORA mengukur throughput dan
stabilitas sistem dengan ketelitian statistik yang sesungguhnya, tetapi
diam terhadap pertanyaan yang paling dipedulikan pemimpin bisnis: dari semua
yang dikirimkan organisasi rekayasa kuartal ini, berapa banyak yang merupakan
nilai baru bagi pelanggan, dan berapa banyak yang diam-diam habis untuk
memperbaiki cacat, mengelola risiko, atau melunasi utang. Flow Framework ada
justru untuk membuat campuran itu terlihat.

Bagi tim besar, perbedaan ini bukan soal akademis. Sebuah organisasi platform
yang menjalankan puluhan aliran nilai bisa memiliki angka DORA yang sangat
baik, yaitu deployment yang cepat, sering, dan stabil, sementara keluaran
produk yang sebenarnya diam-diam bergeser menjadi hampir murni pekerjaan
pemeliharaan, pola yang tidak terlihat oleh dasbor yang hanya mengukur
mekanika jalur pengiriman. Organisasi perusahaan besar dan pemerintahan, yang
harus membenarkan investasi rekayasa kepada pemangku kepentingan yang berpikir
dalam istilah bisnis, bukan istilah jalur pengiriman, membutuhkan kosakata yang
menghubungkan aktivitas pengiriman dengan maksud strategis. Itulah yang
disediakan kerangka kerja ini.

## Prinsip utama

- **Aliran nilai adalah unit pengukuran, bukan tim atau jalur pengiriman.**
  Aliran nilai membentang dari kebutuhan pelanggan atau bisnis sampai hasil
  yang terkirim, melintasi batas tim mana pun yang memang dilintasi pekerjaan
  itu.
- **Item aliran membuat "apa" terlihat, bukan hanya "seberapa cepat."** Empat
  kategori di topik 2.2, fitur, cacat, risiko, dan utang, mengubah keputusan
  prioritas yang implisit menjadi keputusan yang eksplisit dan terukur.
- **Alokasi kapasitas di antara item aliran bersifat zero-sum.** Kapasitas
  yang lebih banyak untuk satu jenis item berarti kapasitas yang lebih sedikit
  untuk jenis lainnya; kerangka kerja ini membuat pertukaran itu terlihat,
  bukan membiarkannya implisit.
- **Kelima metrik aliran menjawab pertanyaan bisnis, bukan hanya pertanyaan
  rekayasa.** Metrik itu dirancang untuk dipresentasikan kepada pemangku
  kepentingan non-teknis, bukan disimpan di dalam tim rekayasa.
- **Manajemen aliran nilai seharusnya berkelanjutan, bukan latihan pemetaan
  sekali jalan.** Peta aliran nilai yang statis akan basi; kerangka kerja ini
  dibangun agar diinstrumentasi dari perangkat yang sudah dipakai tim.

## Rekomendasi

### Petakan aliran nilai Anda sebelum menginstrumentasi apa pun

Sebelum mengadopsi metrik aliran apa pun, telusuri jalur nyata yang ditempuh
sebuah pekerjaan sejak kebutuhan bisnis teridentifikasi sampai pelanggan
menerima nilai, dengan menyebutkan setiap tahap dan setiap serah terima antar
tim. Ini adalah latihan klasik
[pemetaan aliran nilai (value stream mapping)](https://en.wikipedia.org/wiki/Value_stream_mapping)
yang diadaptasi dari manufaktur lean, dan melewatkannya adalah alasan paling
umum mengapa adopsi Flow Framework menghasilkan angka yang tidak dipercaya
siapa pun: metrik yang dihitung terhadap proses yang tidak diperiksa dan hanya
dipahami secara informal jarang cocok dengan apa yang sebenarnya terjadi.

### Hubungkan metrik aliran ke perangkat yang sudah dipakai tim Anda

Flow Framework dibangun untuk manajemen aliran nilai yang berkelanjutan dan
otomatis, bukan latihan pemetaan manual berkala. Integrasikan pelacakan item
aliran langsung ke perangkat yang sudah dilalui pekerjaan, Jira, Azure DevOps,
GitHub, alih-alih membangun sistem pelacakan paralel yang harus diperbarui tim
secara manual. Status sebuah item aliran seharusnya diperbarui sendiri saat
tiket atau pull request di baliknya bergerak, disiplin instrumentasi di atas
laporan mandiri yang sama seperti yang direkomendasikan topik 1.5 untuk setiap
metrik di buku ini.

### Presentasikan distribusi aliran langsung kepada pemangku kepentingan bisnis, bukan hanya pimpinan rekayasa

Peluang terbesar yang paling sering terlewat dari kerangka kerja ini adalah
memperlakukannya sebagai perangkat internal rekayasa. Distribusi aliran, yaitu
proporsi pekerjaan yang menuju fitur dibandingkan cacat, risiko, dan utang
(topik 2.3), dirancang khusus untuk menjadi percakapan dengan pimpinan produk
dan bisnis, karena distribusi itu membuat keputusan prioritas yang implisit,
yaitu berapa banyak kapasitas untuk nilai baru dibandingkan menjaga lampu
tetap menyala, menjadi eksplisit dan dapat dinegosiasikan, bukan sekadar
diasumsikan.

### Perlakukan keempat item aliran sebagai taksonomi sungguhan, bukan formalitas

Wajibkan setiap unit pekerjaan diklasifikasikan ke tepat satu dari empat jenis
item aliran saat penerimaan (intake), bukan secara retroaktif. Klasifikasi
yang diterapkan setelah kejadian, atau diterapkan secara longgar karena "ini
pada dasarnya fitur," menggerus seluruh nilai taksonomi itu, karena inti
tujuannya adalah catatan yang jujur dan konsisten tentang ke mana kapasitas
sebenarnya pergi.

### Tinjau ulang peta aliran nilai Anda ketika organisasi berubah, bukan pada jadwal tetap

Peta aliran nilai menjadi basi begitu batas tim, perangkat, atau produk itu
sendiri berubah secara berarti, bukan pada kadens tahunan yang sembarang.
Perlakukan reorganisasi, migrasi perangkat besar, atau pivot produk yang
signifikan sebagai pemicu untuk menelusuri ulang aliran nilai, karena metrik
aliran yang dihitung terhadap peta yang basi diam-diam mengukur hal yang salah.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Hanya metrik jalur pengiriman (DORA, topik 2.10) | Sederhana, tervalidasi dengan baik, murah diinstrumentasi dari data CI/CD yang ada | Diam tentang jenis nilai yang dikirimkan |
| Adopsi penuh Flow Framework | Menghubungkan pengiriman dengan strategi bisnis; membuat campuran nilai terlihat dan dapat dinegosiasikan | Membutuhkan peta aliran nilai yang jujur dan disiplin klasifikasi item aliran yang konsisten |
| Pemetaan aliran nilai statis, sekali jalan | Murah, cepat dijalankan sebagai latihan lokakarya | Cepat basi; menghasilkan potret sesaat, bukan metrik yang hidup |
| Manajemen aliran nilai berkelanjutan yang terintegrasi dengan perangkat | Data hidup dan selalu terkini; dapat diskalakan ke banyak aliran nilai | Membutuhkan pekerjaan integrasi perangkat yang nyata di awal |

Ketegangan utamanya adalah **keterbacaan bisnis versus upaya instrumentasi**.
Metrik jalur pengiriman murah karena jalur itu sudah menghasilkan datanya;
metrik aliran nilai membutuhkan peta yang jujur atas seluruh proses dan
kebiasaan klasifikasi saat intake yang disiplin, yang tidak pernah dituntut
metrik jalur pengiriman. Selesaikan ketegangan ini dengan memulai dari satu
aliran nilai, bukan seluruh organisasi sekaligus, memetakannya dengan benar,
dan baru kemudian mengintegrasikan pelacakan item aliran ke perangkat yang
ada, alih-alih mencoba peluncuran big-bang di semua tim secara bersamaan.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Dapatkah kita menggambar peta aliran nilai yang akurat untuk produk
   terpenting kita sekarang, atau kita akan menebak-nebak beberapa serah
   terimanya?** Kebanyakan organisasi belum pernah benar-benar menelusuri jalur
   ini dari ujung ke ujung. Cobalah latihan ini dengan jujur dan catat setiap
   tempat yang membuat kelompok berbeda pendapat tentang apa yang sebenarnya
   terjadi, karena perbedaan pendapat itu sendiri bersifat diagnostik.

2. **Jika kita mengklasifikasikan semua yang dikirim tim kita kuartal lalu ke
   dalam fitur, cacat, risiko, dan utang, apakah hasilnya akan mengejutkan
   pimpinan produk kita?** Kebanyakan tim belum pernah membuat pemisahan ini
   eksplisit, dan jawabannya sering mengungkap beban pemeliharaan atau masalah
   utang yang sebelumnya tidak terlihat dalam hitungan sederhana "story point
   yang diselesaikan."

3. **Apakah kita punya cara yang sungguh terintegrasi dengan perangkat untuk
   melacak item aliran, atau ini akan menuntut seseorang mengklasifikasi dan
   mengklasifikasi ulang pekerjaan secara manual?** Sistem manual cepat rusak
   di bawah beban kerja nyata; sistem yang terintegrasi dengan perangkat tidak.
   Nilailah dengan jujur mana yang benar-benar siap Anda pertahankan.

4. **Kapan terakhir kali peta aliran nilai kita berubah, dan sudahkah kita
   memperbarui metrik untuk mencerminkannya?** Reorganisasi dan migrasi
   perangkat diam-diam membatalkan peta aliran nilai, dan sedikit organisasi
   yang ingat meninjaunya kembali ketika itu terjadi.

5. **Apakah metrik aliran kita pernah dipresentasikan langsung kepada pemangku
   kepentingan bisnis atau produk, atau hanya beredar di dalam rekayasa?**
   Keunggulan terbesar kerangka kerja ini dibandingkan metrik jalur pengiriman
   saja adalah percakapan ini, dan melewatkannya menghilangkan sebagian besar
   nilai kerangka kerja itu.

6. **Apa yang dibutuhkan agar seseorang dapat memanipulasi klasifikasi item
   aliran kita tanpa melakukan sesuatu yang tidak jujur di atas kertas?**
   Telusuri bagaimana tim di bawah tekanan pengiriman dapat diam-diam melabeli
   ulang pekerjaan utang atau risiko sebagai fitur agar tampak lebih produktif,
   dan diskusikan apakah saat ini Anda akan menyadarinya.

## Lensa sektor

**Startup.** Peta aliran nilai penuh biasanya berlebihan untuk tim lima orang
yang semuanya sudah hafal seluruh prosesnya. Kebiasaan yang berguna pada skala
ini cukup menyebut keempat jenis item aliran dengan lantang dalam percakapan
perencanaan, agar pekerjaan utang dan risiko tidak diam-diam lenyap dari
pandangan begitu tenggat fitur mendekat.

**Usaha kecil.** Adopsi klasifikasi item aliran di dalam perangkat pelacakan
ringan apa pun yang sudah Anda pakai, kolom berlabel atau bidang kustom,
alih-alih produk manajemen aliran nilai khusus. Disiplin klasifikasi yang
konsisten jauh lebih penting daripada kecanggihan perangkat di baliknya.

**Perusahaan besar.** Di sinilah kerangka kerja ini membuktikan gunanya,
karena organisasi besar yang menjalankan puluhan aliran nilai di banyak lini
produk tidak punya cara andal lain untuk melihat, di satu tempat, bagaimana
kapasitas rekayasa sebenarnya dialokasikan ke fitur, cacat, risiko, dan utang.
Investasikan pada integrasi perangkat; alternatif manualnya tidak bertahan
ketika berhadapan dengan skala yang nyata.

**Pemerintahan.** Distribusi aliran memberi organisasi rekayasa sektor publik
jawaban yang dapat dipertanggungjawabkan dan terbaca secara bisnis untuk
pertanyaan "mengapa tidak lebih banyak fungsionalitas baru yang dikirim,"
ketika jawaban jujurnya adalah bagian kapasitas yang makin besar menuju
perbaikan keamanan atau utang warisan. Membuat pertukaran itu terlihat dan
eksplisit, alih-alih menyerap tekanannya secara diam-diam, sering kali menjadi
hal paling berguna yang ditawarkan kerangka kerja ini kepada pimpinan teknologi
pemerintah.

## Contoh

**Perusahaan besar.** Organisasi platform klaim milik sebuah perusahaan
asuransi besar percaya bahwa mereka terutama mengirimkan fitur baru, 
berdasarkan laporan velocity sprint mereka. Latihan pertama pemetaan aliran
nilai dan klasifikasi item aliran menunjukkan bahwa pekerjaan utang dan risiko,
sebagian besar berupa utang teknis tak terdokumentasi dari sistem inti
berusia satu dekade, ternyata menghabiskan hampir separuh total kapasitas
rekayasa, fakta yang tidak pernah muncul dalam pelaporan sebelumnya karena
pekerjaan itu selalu dilebur ke dalam "tugas rekayasa" yang generik.
Mempresentasikan pemisahan ini kepada komite eksekutif membuahkan anggaran
khusus pengurangan utang untuk pertama kalinya dalam sejarah platform itu,
alih-alih pekerjaan utang terus bersaing diam-diam melawan setiap permintaan
fitur.

**Pemerintahan.** Divisi layanan digital sebuah otoritas pajak nasional
memakai pemetaan aliran nilai untuk mendiagnosis mengapa sebuah fitur unggulan
yang menghadap warga sudah "sedang dikerjakan" lebih dari setahun meskipun
penyelesaian sprint berjalan stabil. Peta itu menunjukkan bahwa aliran nilai
tersebut sebenarnya membentang di lima tim terpisah dengan tiga serah terima
yang tidak tercermin dalam bagan organisasi, dan klasifikasi item aliran
menunjukkan bahwa waktu rekayasa sebenarnya dari fitur itu hanyalah sebagian
kecil dari total waktu alirnya, sisanya habis oleh keterlambatan serah terima
antar tim yang tidak dapat dilihat oleh metrik satu tim mana pun. Divisi itu
menata ulang diri di sekitar aliran nilai, bukan bagan organisasi, untuk lini
produk tersebut, dan memangkas waktu alir secara substansial dalam dua
kuartal.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengadopsi Flow Framework adalah jawaban yang dapat
dipertanggungjawabkan dan terbaca secara bisnis atas pertanyaan yang tidak
dapat dijawab metrik jalur pengiriman: apakah kapasitas rekayasa dialokasikan
seperti yang diyakini pimpinan. Contoh asuransi di atas, yang mengungkap
hampir separuh kapasitas ternyata menuju pekerjaan utang yang sebelumnya tidak
terlihat, adalah pola umum begitu sebuah organisasi benar-benar
mengklasifikasikan pekerjaannya dengan jujur, dan visibilitas itu rutin
membuka investasi yang tidak akan pernah didapat dari permintaan samar "kami
butuh lebih banyak waktu untuk utang teknis."

Total biaya kepemilikan terkonsentrasi di dua tempat: latihan pemetaan aliran
nilai awal, yang memerlukan waktu fasilitasi nyata agar dilakukan dengan jujur,
dan integrasi perangkat yang dibutuhkan agar data item aliran tetap terkini
tanpa pemeliharaan manual. Kedua biaya itu sekali jalan atau berpemeliharaan
rendah bila dikerjakan dengan baik, sehingga kerangka kerja ini jauh lebih
murah dipertahankan daripada diadopsi.

## Anti-pola dan jebakan

- **Memperlakukan pemetaan aliran nilai sebagai lokakarya sekali jalan yang
  tidak pernah ditinjau ulang:** peta menjadi basi begitu organisasi berubah,
  dan metrik yang dihitung terhadap peta yang basi mengukur hal yang salah.
- **Membangun sistem pelacakan item aliran paralel yang dipelihara secara
  manual:** cepat rusak di bawah beban kerja nyata; integrasikan ke perangkat
  yang ada.
- **Mengklasifikasi item aliran secara retroaktif, bukan saat intake:** vektor
  manipulasi (gaming) yang menjadi inti topik ini. Di bawah tekanan
  pengiriman, sebuah tim dapat diam-diam melabeli ulang pekerjaan utang atau
  risiko sebagai fitur setelah kejadian agar tampak lebih produktif bagi
  pemangku kepentingan yang hanya melihat bagan distribusi aliran, tanpa ada
  yang pernah membuat keputusan eksplisit dan terlihat untuk melakukannya.
  Pagar pengaman (guardrail)-nya adalah mewajibkan klasifikasi saat intake,
  sebelum hasilnya diketahui, dan secara berkala mengaudit sampel item yang
  sudah diklasifikasikan terhadap apa yang sebenarnya dilakukan perubahan
  itu, disiplin audit yang sama yang diminta topik 1.2 untuk setiap metrik di
  buku ini.
- **Menyimpan metrik aliran hanya di dalam rekayasa:** menghilangkan
  keunggulan utama kerangka kerja ini, yaitu kosakata bersama dengan pemangku
  kepentingan bisnis.
- **Memetakan bagan organisasi, bukan aliran nilai yang sebenarnya:**
  menyembunyikan serah terima antar tim yang sering menjadi sumber
  keterlambatan terbesar.
- **Mengadopsi kerangka kerja ini di seluruh organisasi sebelum
  memvalidasinya pada satu aliran nilai:** berisiko menanam investasi besar
  pada metrik yang tidak dipercaya siapa pun karena peta di baliknya tidak
  pernah dikonfirmasi akurat.

## Model kematangan

- **Level 1, Memulai (Initiate):** Tidak ada peta aliran nilai; pekerjaan
  dilacak sebagai tiket generik tanpa klasifikasi item aliran.
- **Level 2, Mengembangkan (Develop):** Satu aliran nilai sudah dipetakan dan
  item aliran diklasifikasikan secara informal, tetapi pelacakan manual dan
  diterapkan secara tidak konsisten.
- **Level 3, Membakukan (Standardize):** Klasifikasi item aliran terintegrasi
  ke perangkat yang ada dan diterapkan secara konsisten saat intake di
  aliran-aliran nilai utama.
- **Level 4, Mengelola (Manage):** Distribusi aliran ditinjau secara rutin
  bersama pemangku kepentingan bisnis, dan peta aliran nilai dijaga tetap
  terkini secara aktif seiring perubahan organisasi.
- **Level 5, Mengorkestrasi (Orchestrate):** Organisasi mengalokasikan
  investasi rekayasa secara sengaja di antara aliran nilai menggunakan data
  aliran, dan dapat menunjuk keputusan strategis tertentu, anggaran pengurangan
  utang, penataan ulang tim, yang dibuat karena kerangka kerja ini membuat
  pertukaran yang sebelumnya tidak terlihat menjadi terlihat.

## Gagasan untuk diskusi

1. Dapatkah kita menggambar peta aliran nilai yang akurat untuk produk unggulan kita hari ini, tanpa menebak-nebak?
2. Berapa persen kapasitas kuartal lalu yang akan terungkap menuju utang dan risiko, dibandingkan fitur, oleh klasifikasi item aliran yang jujur?
3. Apakah metrik aliran kita saat ini sampai ke pemangku kepentingan bisnis, atau hanya beredar di dalam rekayasa?
4. Apa serah terima antar tim terbesar dalam aliran nilai kita yang tidak tercermin dalam bagan organisasi kita?

## Poin-poin utama

- **Flow Framework**, dari *Project to Product* karya Mik Kersten, mengukur
  jenis nilai apa yang bergerak melalui jalur pengiriman, bukan hanya seberapa
  cepat jalur itu sendiri berjalan.
- **Aliran nilai**, bukan tim atau jalur pengiriman, adalah unit pengukuran
  kerangka kerja ini, dan memetakannya dengan jujur datang sebelum
  menginstrumentasi apa pun.
- **Klasifikasi item aliran saat intake, bukan setelah kejadian**, adalah
  pagar pengaman terhadap vektor manipulasi (gaming) utama topik ini:
  diam-diam melabeli ulang pekerjaan utang atau risiko sebagai fitur agar
  tampak lebih produktif.
- **Hubungkan metrik aliran ke perangkat yang ada**, Jira, Azure DevOps,
  GitHub, alih-alih sistem pelacakan manual paralel yang tidak akan bertahan
  di bawah beban kerja nyata.
- Presentasikan data aliran **langsung kepada pemangku kepentingan bisnis**;
  percakapan itu, bukan dasbor rekayasa internal, adalah keunggulan utama
  kerangka kerja ini dibandingkan metrik jalur pengiriman saja.

## Referensi dan bacaan lanjutan

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
