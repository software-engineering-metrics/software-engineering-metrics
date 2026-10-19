# 1.4 Tata kelola dan kepemilikan metrik

## Gambaran umum dan motivasi

Metrik tanpa pemilik adalah perdebatan tetap yang tinggal menunggu waktu.
Dua tim menghitung "pengguna aktif" dengan cara berbeda dan menghabiskan satu
rapat untuk merekonsiliasi angka alih-alih mengelola tren; petak dasbor yang
tak dipelihara siapa pun diam-diam basi selama berbulan-bulan sebelum ada yang
menyadarinya; metrik yang semula dibangun untuk diagnosis satu tim diadopsi
tim lain untuk tujuan yang tidak pernah dirancang untuk didukung oleh
definisi aslinya. Tak satu pun dari ini adalah masalah pengukuran dalam arti
statistik. Ini masalah tata kelola, dan bisa diselesaikan dengan disiplin
yang sama yang sudah diterapkan organisasi pada kode: kepemilikan yang
eksplisit, [sumber kebenaran](https://en.wikipedia.org/wiki/Single_source_of_truth)
yang terdokumentasi, dan proses tinjauan.

Tata kelola bukan birokrasi demi birokrasi. Ia yang membuat program metrik
bertahan menghadapi skala organisasi. Satu tim bisa menyimpan definisi
metriknya di kepala seseorang dan mengoreksi pergeseran lewat percakapan
harian. Organisasi dengan puluhan tim, masing-masing menghasilkan dan
mengonsumsi metrik, tidak bisa. Tanpa tata kelola, definisi bergeser
diam-diam, metrik berlipat ganda tanpa ada yang memangkasnya, dan pada saat
pimpinan menyadari dua laporan tidak sama, biaya merekonsiliasinya sudah
dibayar berkali-kali lipat dalam rapat yang sia-sia dan kepercayaan yang
terkikis.

Bagi organisasi perusahaan besar dan pemerintahan, tata kelola membawa bobot
tambahan karena metrik makin sering menyuapi keputusan yang berkonsekuensi
nyata, alokasi anggaran, pelaporan kinerja publik, kontrak vendor, yang
hidup lebih lama daripada siapa pun yang membangun dasbor aslinya. Piagam
metrik yang bertahan melewati pergantian staf, yang bisa dibaca dan dipahami
anggota tim baru mana pun, adalah yang menjaga angka organisasi tetap berarti
sama lima tahun dari sekarang seperti hari ini.

## Prinsip utama

- **Setiap metrik punya tepat satu pemilik.** Kepemilikan bersama sama dengan
  tanpa kepemilikan; ketika semua orang memiliki sebuah definisi, tak
  seorang pun memeliharanya.
- **Sebuah metrik punya satu sumber kebenaran.** Dua sistem yang menghitung
  metrik yang sama dengan cara berbeda adalah kegagalan tata kelola yang
  tinggal menunggu muncul.
- **Tata kelola dituliskan, bukan pengetahuan lisan.** Piagam metrik yang
  hanya hidup dalam ingatan seseorang tidak bertahan saat orang itu pergi.
- **Pemensiunan sama pentingnya dengan adopsi.** Program metrik yang sehat
  memangkas sama sengajanya dengan ketika ia tumbuh.
- **Tata kelola diskalakan menurut konsekuensi, bukan jumlah metrik.** Metrik
  yang menyuapi laporan publik membutuhkan tata kelola yang lebih berat
  daripada metrik yang dipakai satu tim untuk men-debug sprintnya sendiri.

## Rekomendasi

### Tulis piagam metrik untuk setiap kumpulan metrik yang melintasi batas tim

**Piagam metrik** adalah dokumen singkat yang hidup yang menyatakan tujuan
sebuah kumpulan metrik, non-tujuannya yang eksplisit (pembedaan
diagnostik-versus-evaluatif dari topik 1.1 termasuk di sini), pemilik dan
sumber kebenaran setiap metrik, serta irama tinjauan. Jaga agar tetap satu
halaman. Berkas docs/examples/metrics-charter-example.md di repositori
pendamping buku ini menunjukkan bentuknya. Piagam sesingkat ini akan dibaca;
piagam yang melebar menjadi dokumen kebijakan tidak.

### Tetapkan pemilik bernama untuk setiap metrik, bukan sebuah tim

"Tim platform memiliki metrik ini" menyebarkan tanggung jawab hingga tak ada
yang benar-benar memeliharanya. Sebutkan nama seseorang atau peran spesifik
yang akuntabel. Pemilik itu bertanggung jawab agar definisi metrik tetap
akurat, instrumentasinya tetap sehat, dan menjawab pertanyaan "kenapa angka
ini tampak salah" ketika pertanyaan itu pasti muncul. Kepemilikan bisa dan
sebaiknya berotasi ketika orang berganti peran, tetapi piagam harus selalu
menyebut pemilik saat ini, jangan pernah membiarkan kolomnya kosong.

### Tetapkan satu sumber kebenaran per metrik dan larang penghitungan paralel

Ketika dua sistem menghitung metrik yang namanya nominal sama dengan cara
berbeda, misalnya "pengguna aktif" satu tim menghitung login dan milik tim
lain menghitung panggilan API, ketidaksepakatan yang dihasilkan jauh lebih
mahal dalam rapat rekonsiliasi daripada biaya menyepakati satu sumber
kebenaran di muka. Sebutkan sistem otoritatif untuk setiap metrik dalam
piagam, dan perlakukan penghitungan lain atas metrik yang sama sebagai
bug yang harus diperbaiki atau metrik bernama lain yang harus diganti
namanya.

### Bangun tinjauan pemensiunan ke dalam irama tata kelola

Program metrik yang hanya menambah metrik menumpuk kekusutan dasbor yang tak
bisa ditindaklanjuti siapa pun (topik 1.1). Pada setiap tinjauan tata kelola,
di samping mengusulkan metrik baru, tanyakan metrik yang ada mana yang belum
menginformasikan keputusan dalam dua siklus terakhir dan menjadi kandidat
pemensiunan. Pemensiunan bukan kegagalan; ia disiplin yang sama yang
diterapkan basis kode yang sehat pada kode mati.

### Skalakan ketatnya tata kelola menurut konsekuensi, bukan volume

Tidak setiap metrik membutuhkan proses yang sama. Metrik yang diciptakan satu
tim untuk men-debug sprintnya sendiri nyaris tak membutuhkan tata kelola
selain tim tahu artinya. Metrik yang menyuapi kartu skor eksekutif, laporan
kinerja publik, atau kompensasi seseorang membutuhkan definisi terdokumentasi,
pemilik bernama, jejak audit, dan persetujuan sebelum diluncurkan. Cocokkan
bobot proses Anda dengan konsekuensi jika metrik itu salah, bukan dengan
banyaknya metrik yang ada.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa tata kelola formal | Cepat, beban rendah untuk tim kecil | Definisi bergeser; kepemilikan menyebar; dasbor mekar tanpa kendali |
| Piagam ringan per kumpulan metrik | Murah, mudah dibaca, tumbuh bersama organisasi | Butuh disiplin agar tetap mutakhir; bisa dilewati di bawah tekanan tenggat |
| Dewan tata kelola metrik pusat yang berat | Konsistensi kuat, jejak audit kuat | Lambat menyetujui metrik baru; bisa menjadi hambatan yang dihindari tim |
| Tata kelola yang diskalakan menurut konsekuensi | Menyesuaikan upaya dengan risiko sebenarnya | Butuh penilaian untuk mengklasifikasi konsekuensi dengan benar; bisa dimanipulasi dengan meremehkan taruhannya |

Ketegangan utamanya adalah **konsistensi versus kecepatan**. Tata kelola
pusat yang berat menghasilkan metrik yang tepercaya dan konsisten tetapi
memperlambat tim justru ketika ia ingin menginstrumentasi sesuatu dengan cepat
untuk menjawab pertanyaan mendesak. Atasi ketegangan ini dengan menskalakan
bobot tata kelola menurut konsekuensi: biarkan tim menginstrumentasi dengan
bebas untuk penggunaan diagnostik mereka sendiri, dan wajibkan disiplin piagam
penuh, kepemilikan, dan persetujuan hanya begitu sebuah metrik melintasi batas
tim atau menyuapi penggunaan evaluatif atau publik.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah setiap metrik yang melintasi batas tim punya pemilik bernama, dan
   apakah pemilik itu akan mengenali dirinya sebagai pihak yang akuntabel
   jika ditanya hari ini?** "Tim platform yang memilikinya" bukan jawaban;
   orang atau peran spesifik adalah jawaban. Audit metrik lintas tim Anda dan
   periksa apakah pemilik yang disebutkan, jika memang ada, benar-benar tahu
   bahwa ia memegang tanggung jawab itu.

2. **Di mana kita saat ini menghitung metrik bernama nominal sama dengan dua
   cara berbeda, dan berapa banyak waktu yang sudah kita habiskan untuk
   merekonsiliasi ketidaksepakatan itu?** Ini salah satu kegagalan tata kelola
   paling mahal dan paling umum di organisasi besar, dan sepenuhnya bisa
   dicegah dengan satu sumber kebenaran yang terdokumentasi. Bawalah contoh
   nyata jika ada dan telusuri biayanya.

3. **Kapan terakhir kali kita memensiunkan sebuah metrik, dan apa yang
   memicu keputusan itu?** Organisasi yang hanya bisa menjelaskan bagaimana ia
   menambah metrik, tidak pernah bagaimana ia menghapusnya, sedang menumpuk
   utang dasbor. Jika Anda tidak ingat satu pemensiunan pun, ketiadaan itu
   sendiri adalah jawaban atas pertanyaan ini.

4. **Apakah proses tata kelola kita sebanding dengan konsekuensi, atau
   setiap metrik melewati bobot tinjauan yang sama apa pun taruhannya?**
   Tata kelola yang terlalu berat pada metrik tim berisiko rendah
   memperlambat kerja tanpa manfaat keamanan; tata kelola yang terlalu ringan
   pada metrik yang menyuapi laporan publik atau keputusan kompensasi adalah
   risiko nyata. Petakan metrik Anda saat ini menurut konsekuensi dan periksa
   bobot prosesnya terhadap peta itu dengan jujur.

5. **Apa yang terjadi pada kepemilikan sebuah metrik ketika orang yang
   membangunnya berganti peran atau pergi?** Piagam metrik yang hanya ada di
   kepala satu orang lenyap bersamanya. Ujilah dengan memilih sebuah metrik
   dan bertanya apakah karyawan baru bisa, dari dokumentasi tertulis saja,
   memahami definisi, sumber kebenaran, dan tujuannya.

6. **Bagaimana kita akan tahu jika definisi sebuah metrik diam-diam
   berubah?** Perubahan pada cara angka dihitung, tanpa perubahan nama atau
   catatan dalam riwayatnya, nyaris tak terlihat sampai seseorang
   membandingkan data lama dan baru lalu menemukan diskontinuitas yang tak
   bisa dijelaskan. Diskusikan apakah metrik Anda hari ini membawa bentuk
   log perubahan apa pun.

## Lensa sektor

**Startup.** Tata kelola formal biasanya berlebihan untuk tim lima orang
yang semuanya sudah tahu arti setiap angka. Satu disiplin yang tetap layak
diadopsi sejak awal adalah menetapkan satu pemilik per metrik secara tertulis,
karena nyaris tak berbiaya dan mencegah kebingungan ketika beberapa perekrutan
pertama bergabung dan mulai bertanya apa arti sebuah angka.

**Usaha kecil.** Tata kelola di sini sebagian besar berarti memilih, dan
bertahan pada, satu perangkat sebagai sumber kebenaran untuk setiap metrik
alih-alih membiarkan spreadsheet dan dasbor bawaan sebuah platform diam-diam
menyimpang. Tulis piagam sebagai satu dokumen bersama, bahkan yang informal,
agar karyawan baru bisa mencari tahu arti sebuah angka tanpa bertanya ke
sana-sini.

**Perusahaan besar.** Di sinilah tata kelola membuktikan gunanya. Standarkan
definisi di seluruh unit bisnis, wajibkan piagam untuk apa pun yang menyuapi
kartu skor eksekutif, dan bangun tinjauan pemensiunan ke dalam irama tata
kelola yang berulang, karena kekusutan dasbor pada skala ini cepat menjadi
mahal, baik dalam biaya pemeliharaan maupun dalam hilangnya kredibilitas
ketika dua divisi melaporkan angka yang saling bertentangan untuk hal yang
sama.

**Pemerintahan.** Tata kelola di sini sering memiliki dimensi hukum atau
audit: ukuran kinerja yang dipublikasikan mungkin harus memenuhi persyaratan
pelaporan menurut undang-undang, dan perubahan definisi bisa berkonsekuensi
politik yang nyata. Dokumentasikan metodologi secara terbuka, bekukan
definisi lintas periode pelaporan kecuali perubahannya sendiri dijustifikasi
secara publik, dan perlakukan audit independen atas definisi metrik, bukan
hanya nilainya saat ini, sebagai praktik tata kelola tetap.

## Contoh

**Perusahaan besar.** Sebuah perusahaan perangkat lunak multinasional
menemukan, saat integrasi pascaakuisisi, bahwa dua unit bisnis terbesarnya
mendefinisikan "frekuensi deployment" secara berbeda: satu menghitung setiap
push ke lingkungan staging, yang lain hanya menghitung rilis produksi.
Pimpinan telah membandingkan kinerja pengiriman kedua unit itu selama lebih
dari setahun memakai angka yang sebenarnya tidak sebanding. Solusinya adalah
dewan tata kelola metrik seluruh perusahaan yang menerbitkan satu glosarium
definisi metrik (dicerminkan dalam topik 9.2 buku ini), mewajibkan setiap tim
mensertifikasi kepatuhan, dan memensiunkan definisi lokal yang ambigu dalam
satu kuartal.

**Pemerintahan.** Sebuah kantor statistik nasional yang bertanggung jawab
menerbitkan dasbor kinerja layanan digital menemukan bahwa perubahan cara
menghitung "diselesaikan dalam SLA", yang dilakukan diam-diam oleh tim
rekayasa yang memperbaiki apa yang mereka lihat sebagai bug, telah menggeser
angka kepatuhan utama sebanyak beberapa poin persentase tanpa dokumentasi
publik atas perubahan itu. Kantor tersebut menetapkan proses kendali
perubahan formal untuk setiap definisi metrik yang menyuapi laporan publik:
perubahan yang diusulkan membutuhkan alasan terdokumentasi, perbandingan
sebelum dan sesudah yang diterbitkan bersama perubahan, dan persetujuan dari
pejabat akuntabel yang disebut namanya, menutup celah yang membuat perubahan
sebelumnya lolos tanpa disadari.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari tata kelola adalah biaya rekonsiliasi yang terhindarkan.
Setiap jam yang dihabiskan dalam rapat di mana dua tim berdebat angka siapa
yang benar adalah jam yang akan dicegah sepenuhnya oleh tata kelola yang
disiplin, satu sumber kebenaran, pemilik bernama. Pada skala perusahaan
besar, biaya ini menumpuk di puluhan tim dan bisa menyita bagian perhatian
pimpinan yang sungguh signifikan untuk masalah yang akan terhindar dengan satu
piagam satu halaman per kumpulan metrik.

Total biaya kepemilikan praktik tata kelola yang ringan, piagam, pemilik
bernama, tinjauan berkala, tergolong sederhana dan sebagian besar di muka.
Alternatifnya, menemukan setahun setelah inisiatif besar bahwa angka yang
dipercaya pimpinan ternyata tidak pernah sebanding, jauh lebih mahal, baik
dalam analisis yang terbuang maupun dalam kerusakan kredibilitas akibat
mengoreksi catatan publik atau internal setelah kejadian.

## Anti-pola dan jebakan

- **Kepemilikan oleh tim, bukan oleh orang bernama:** menyebarkan akuntabilitas
  hingga tak ada yang benar-benar memelihara definisinya.
- **Penghitungan paralel atas metrik nominal yang sama:** menjamin
  ketidaksepakatan di kemudian hari dan rekonsiliasi yang mahal.
- **Piagam yang hanya ada di kepala seseorang:** lenyap begitu orang itu
  berganti peran.
- **Program metrik yang hanya menambah, tidak pernah memensiunkan:**
  menghasilkan kekusutan dasbor yang tak bisa ditindaklanjuti siapa pun.
- **Bobot tata kelola yang seragam tanpa memandang konsekuensi:** memperlambat
  kerja berisiko rendah sambil kurang melindungi metrik publik atau yang
  terkait kompensasi yang berisiko tinggi.
- **Perubahan definisi yang diam-diam:** makna metrik bergeser tanpa log
  perubahan, dan perbandingan historis diam-diam menjadi tidak valid.

## Model kematangan

- **Tingkat 1, Memulai (Initiate):** Metrik tidak punya pemilik formal;
  definisi hidup dalam ingatan individu dan bergeser diam-diam di antara tim.
- **Tingkat 2, Mengembangkan (Develop):** Beberapa tim menulis dokumentasi
  informal untuk metrik mereka sendiri, tetapi tidak ada format piagam
  bersama atau konsistensi lintas tim.
- **Tingkat 3, Menstandarkan (Standardize):** Setiap metrik yang melintasi
  batas tim memiliki piagam terdokumentasi, pemilik bernama, dan satu sumber
  kebenaran yang disepakati, ditegakkan di seluruh organisasi.
- **Tingkat 4, Mengelola (Manage):** Irama tata kelola yang berulang meninjau
  relevansi metrik yang berkelanjutan, memensiunkan yang tak lagi pantas
  dipertahankan, dan melacak perubahan definisi dengan riwayat yang terlihat.
- **Tingkat 5, Mengorkestrasi (Orchestrate):** Tata kelola sebanding dengan
  konsekuensi, diotomatisasi bila mungkin (katalog metrik yang menandai
  metrik tak terdokumentasi atau tanpa pemilik), dan organisasi dapat
  menunjukkan, sesuai permintaan, asal-usul lengkap setiap angka yang
  dipublikasikan.

## Gagasan untuk diskusi

1. Bisakah karyawan baru mencari tahu, hanya dari dokumentasi, apa arti sebenarnya dari tiga metrik terpenting kita?
2. Metrik kita yang mana yang saat ini dihitung dengan cara berbeda oleh dua sistem berbeda?
3. Kapan terakhir kali kita memensiunkan sebuah metrik, dan bagaimana kita memutuskannya?
4. Apakah proses tata kelola kita lebih berat di mana konsekuensinya paling tinggi, atau seragam?
5. Siapa, dengan nama, yang memiliki metrik berhadapan dengan publik yang paling berkonsekuensi di organisasi kita?

## Poin-poin utama

- Setiap metrik membutuhkan **satu pemilik bernama**, bukan tim, dan **satu
  sumber kebenaran**, bukan penghitungan paralel.
- Tulis **piagam metrik** yang singkat dan hidup untuk setiap kumpulan metrik
  yang melintasi batas tim, yang menyatakan tujuan, non-tujuan, kepemilikan,
  dan irama tinjauan.
- **Pemensiunan** sama pentingnya sebagai disiplin tata kelola seperti
  adopsi; pangkas dengan sengaja.
- Skalakan ketatnya tata kelola menurut **konsekuensi**, bukan jumlah metrik:
  proses lebih berat untuk metrik publik, evaluatif, atau terkait kompensasi.
- Definisi metrik bisa bergeser diam-diam; lacak perubahan dengan riwayat
  yang terlihat agar kepercayaan pada sebuah angka bertahan melewati
  pergantian staf.

## Referensi dan bacaan lanjutan

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, oleh John Ladley (struktur tata kelola yang berlaku
  bagi program metrik).
- *Measuring and Managing Performance in Organizations*, oleh Robert D. Austin
  (disfungsi organisasi seputar kepemilikan dan penggunaan metrik).
- *Key Performance Indicators*, oleh David Parmenter (kepemilikan metrik,
  disiplin definisi, dan irama tinjauan).
- Panduan U.S. Government Accountability Office (GAO) tentang pengukuran
  kinerja dan GPRA Modernization Act: tata kelola metrik sektor publik dan
  kendali perubahan.
