# 3.6 Efisiensi dan aliran: kerja mendalam dan interupsi

## Gambaran umum dan motivasi

**Efisiensi dan aliran** (efficiency and flow), dimensi terakhir SPACE (topik
3.1), mengukur ketiadaan gesekan dan kemampuan mempertahankan kerja yang
terfokus tanpa gangguan. Dimensi ini berada di perbatasan antara metrik aliran
pengiriman Bagian 2 (efisiensi aliran di topik 2.5 mengukur bagaimana pekerjaan
bergerak melalui sistem tim) dan sesuatu yang lebih personal: pengalaman
kognitif individu dalam kerja rekayasa yang mendalam dan terfokus, serta
seberapa sering pengalaman itu terpecah oleh interupsi. Rekayasa perangkat
lunak, lebih dari kebanyakan kerja pengetahuan, bergantung pada kemampuan
menyimpan banyak konteks dalam memori kerja sekaligus, sehingga luar biasa
rentan terhadap biaya interupsi.

Riset tentang biaya ini konsisten dan menyadarkan: kembali fokus setelah
interupsi pada pekerjaan yang mendalam dan kompleks tidak butuh hitungan
detik, melainkan rutin butuh banyak menit, kadang mendekati setengah jam, untuk
membangun kembali sepenuhnya [memori kerja](https://en.wikipedia.org/wiki/Working_memory)
yang dipegang seorang insinyur sebelum interupsi terjadi. Seorang insinyur
yang harinya terpecah menjadi blok lima belas menit oleh rapat, notifikasi,
dan pergantian konteks bisa menunjukkan banyak aktivitas (topik 3.4) sambil
menyelesaikan jauh lebih sedikit pekerjaan yang benar-benar sulit
dibandingkan insinyur yang sama dengan dua jam yang terlindungi dan tanpa
gangguan. Dimensi ini ada khusus untuk membuat biaya yang tak terlihat itu
terlihat.

Bagi tim besar, biaya interupsi menumpuk secara struktural: lebih banyak rapat,
lebih banyak beban koordinasi lintas tim, lebih banyak kanal Slack dan
notifikasi, lebih banyak titik pemeriksaan proses, yang masing-masing tampak
masuk akal tetapi bersama-sama memecah hari dengan parah. Organisasi perusahaan
besar dan pemerintahan, dengan kebutuhan tata kelola dan koordinasi yang lebih
berat, sangat rentan terhadap fragmentasi ini, dan dimensi ini memberi
pimpinan cara konkret untuk mengukur dan membela diri darinya, alih-alih
memperlakukan "waktu fokus" sebagai cita-cita budaya yang samar dan tidak
benar-benar dilindungi siapa pun.

## Prinsip utama

- **Pergantian konteks (context switching) memiliki biaya yang nyata dan dapat
  diukur, bukan sekadar terasa.** Kembali fokus setelah interupsi rutin
  membutuhkan banyak menit, bukan detik.
- **Beban rapat dan frekuensi interupsi dapat diukur, bukan sekadar anekdot.**
  Data kalender dan perkakas dapat memunculkan keduanya secara langsung.
- **Waktu yang terlindungi dan tanpa gangguan adalah sumber daya langka yang
  harus dibela dengan sengaja,** bukan sesuatu yang bertahan dengan
  sendirinya seiring organisasi tumbuh.
- **Dimensi ini sering menjelaskan kesenjangan antara aktivitas dan kinerja**
  (topik 3.3 dan 3.4): aktivitas tinggi dengan kinerja rendah kadang berasal
  dari hari yang terpecah dan penuh interupsi.
- **Variasi individu dalam kebutuhan fokus itu nyata,** dan dimensi ini
  seharusnya menjadi masukan bagi norma tim, bukan memaksakan jadwal yang kaku
  dan seragam kepada semua orang.

## Rekomendasi

### Ukur beban rapat dan fragmentasi langsung dari data kalender

Hitung jumlah dan durasi blok tanpa gangguan sepanjang dua jam atau lebih yang
tersedia dalam minggu tipikal seorang insinyur, memakai data kalender. Angka
tunggal ini, kadang disebut **waktu fokus** (focus time) atau **maker time**,
adalah proksi langsung yang dapat diinstrumentasi untuk dimensi ini, dan lazim
ditemukan bahwa seorang insinyur yang nominalnya penuh waktu hampir tidak
punya blok seperti itu dalam minggu tipikal setelah rapat diperhitungkan,
temuan yang biasanya lebih mengejutkan pimpinan daripada para insinyur itu
sendiri.

### Lacak frekuensi interupsi dari data perkakas bila tersedia

Volume notifikasi, frekuensi pesan masuk selama jam kerja, dan laju pergantian
konteks antartugas semuanya dapat didekati dari perkakas kolaborasi yang sudah
ada. Pakai data ini secara agregat, di tingkat tim, mengikuti prinsip yang
sama dengan data aktivitas (topik 3.4): jangan pernah sebagai mekanisme
pengawasan individu, selalu sebagai sinyal tingkat tim tentang apakah beban
koordinasi organisasi telah tumbuh melampaui batas yang melindungi fokus yang
sesungguhnya.

### Lindungi blok waktu fokus yang eksplisit sebagai norma tim atau organisasi

Intervensi paling efektif yang ditunjuk dimensi ini sederhana dan berbiaya
rendah: tetapkan blok waktu khusus yang terlindungi, umumnya satu pagi atau satu
sore pada hari tertentu, yang secara bawaan tidak dijadwalkan rapat. Ini
membutuhkan dukungan organisasi di luar kendali satu tim, karena rapat sering
dijadwalkan lintas batas tim, tetapi bila diterapkan secara konsisten, ini
adalah salah satu intervensi dengan imbal hasil tertinggi dan biaya terendah
dalam seluruh buku ini.

### Korelasikan data aliran dengan kesenjangan aktivitas-kinerja

Ketika sebuah tim menunjukkan aktivitas tinggi (topik 3.4) tetapi kinerja datar
atau menurun (topik 3.3), periksa data aliran dan interupsi sebelum
berasumsi bahwa kesenjangan itu mencerminkan masalah kemampuan individu atau
tim. Jadwal yang sangat terfragmentasi dapat menghasilkan persis pola ini:
banyak gerakan yang terlihat, sedikit pekerjaan yang benar-benar sulit
diselesaikan, karena pekerjaan sulit secara khusus membutuhkan fokus
berkelanjutan yang dihancurkan oleh fragmentasi.

### Hormati variasi individu alih-alih memaksakan satu jadwal yang kaku

Tidak setiap insinyur membutuhkan, atau bekerja paling baik dengan, pola waktu
fokus yang identik; sebagian benar-benar berpikir paling baik dalam semburan
yang lebih pendek, yang lain membutuhkan rentang panjang tanpa gangguan. Pakai
data dimensi ini untuk menjadi masukan bagi norma dan nilai bawaan tingkat
tim, blok terlindungi yang bisa dipilih keluar (opt-out) alih-alih wajib,
bukan satu jadwal yang dipaksakan dan mengasumsikan kebutuhan seragam bagi
semua orang.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa perlindungan waktu fokus | Fleksibilitas penjadwalan rapat maksimum | Hari yang terpecah mengurangi kapasitas untuk pekerjaan yang benar-benar sulit |
| Blok fokus terlindungi tingkat tim | Biaya rendah, imbal hasil tinggi, membela kerja mendalam secara langsung | Membutuhkan dukungan koordinasi di luar satu tim |
| Periode bebas rapat di seluruh organisasi | Perlindungan terkuat, paling sulit terkikis | Membutuhkan komitmen organisasi yang luas dan bisa terasa kaku bagi peran yang butuh koordinasi lebih banyak |
| Penjadwalan fokus individu atas dasar pilihan sendiri (opt-in) | Menghormati variasi individu dalam gaya kerja | Perlindungan bawaan lebih lemah; mudah terkikis di bawah tekanan penjadwalan |

Ketegangan utamanya adalah **kebutuhan koordinasi versus perlindungan fokus**.
Organisasi besar memang membutuhkan rapat dan koordinasi lintas tim agar dapat
berfungsi, dan kebutuhan itu menarik langsung berlawanan dengan waktu tanpa
gangguan yang dibutuhkan kerja rekayasa mendalam. Atasi ketegangan ini bukan
dengan menghapus koordinasi, melainkan dengan menjadikan waktu fokus sebagai
bawaan yang eksplisit dan terlindungi, bukan waktu apa pun yang kebetulan
tersisa setelah setiap permintaan rapat diakomodasi, memperlakukan
perlindungan fokus sebagai sumber daya yang dibela dengan sengaja, bukan
sisa.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Berapa blok dua jam tanpa gangguan yang sebenarnya dimiliki seorang
   insinyur tipikal di tim kita dalam seminggu, diukur dari data kalender
   yang nyata?** Kebanyakan tim belum pernah memeriksanya secara langsung, dan
   jawabannya, setelah diukur, biasanya lebih rendah daripada yang akan ditebak
   siapa pun dari kesan semata.

2. **Pernahkah kita melihat kesenjangan antara aktivitas dan kinerja yang
   mungkin dapat dijelaskan oleh data aliran?** Lihat periode ketika sebuah tim
   tampak sibuk tetapi kurang menghasilkan pekerjaan yang benar-benar sulit,
   dan periksa apakah beban rapat atau fragmentasi dapat menjelaskan
   kesenjangan itu.

3. **Apa yang dibutuhkan untuk menetapkan blok fokus bebas rapat yang
   terlindungi bagi tim kita, dan apa yang menghalangi hari ini?** Namai
   hambatan spesifiknya, kebiasaan penjadwalan lintas tim, ekspektasi
   pimpinan akan ketersediaan terus-menerus, dan diskusikan apakah hambatan
   itu benar-benar sekaku yang terasa.

4. **Apakah kita menghormati variasi individu dalam kebutuhan fokus, atau
   jadwal kita saat ini mengasumsikan semua orang bekerja dengan cara yang
   sama?** Tanyakan langsung kepada anggota tim bagaimana mereka sebenarnya
   lebih suka menyusun kerja terfokus, alih-alih mengasumsikan pola satu
   ukuran untuk semua.

5. **Bagaimana beban rapat kita berubah selama setahun terakhir, dan apakah
   ada yang memperhatikan tren itu sebelum diskusi ini?** Fragmentasi sering
   merayap masuk secara bertahap, satu rapat berulang yang tampak masuk akal
   demi satu, dan jarang merupakan hasil dari satu keputusan yang disengaja.

6. **Jika kita melindungi dua sore penuh per minggu untuk kerja mendalam di
   seluruh organisasi, apa yang harus kita tolak, dan apakah sepadan?**
   Pertanyaan pertukaran yang konkret ini memaksa ketegangan koordinasi
   versus fokus keluar ke permukaan, alih-alih membiarkannya menjadi
   cita-cita yang abstrak.

## Lensa sektor

**Startup.** Beban rapat biasanya rendah secara alami dengan tim kecil, dan
risikonya justru pergantian konteks akibat memakai banyak topi sekaligus,
bukan akibat rapat terjadwal secara khusus. Lindungi waktu fokus dengan
sengaja bahkan pada skala kecil, karena kebiasaan itu lebih mudah dibangun
sejak awal daripada dipasang belakangan.

**Usaha kecil.** Norma informal yang sederhana, tidak ada rapat internal
sebelum tengah hari misalnya, dapat menangkap sebagian besar manfaat dimensi
ini tanpa perlu perkakas analitik kalender. Disiplin lebih penting daripada
pengukuran pada skala ini.

**Perusahaan besar.** Beban rapat dan beban koordinasi lintas tim berskala
buruk di sini, dan fragmentasi sering merayap masuk lewat banyak rapat
berulang yang masing-masing masuk akal dan belum pernah ada yang melihatnya
secara agregat. Ukur ketersediaan waktu fokus langsung dengan data kalender
di seluruh organisasi, dan perlakukan blok fokus terlindungi sebagai kebijakan
seluruh organisasi, bukan pilihan per tim yang ditimpa oleh kebiasaan
penjadwalan lintas tim.

**Pemerintahan.** Persyaratan tata kelola dan koordinasi yang berat, yang
lazim di organisasi sektor publik, membuat dimensi ini sangat penting untuk
dilindungi dengan sengaja, karena tarikan alami menuju lebih banyak proses dan
lebih banyak rapat tinjauan itu kuat. Bingkai perlindungan waktu fokus secara
eksplisit sebagai investasi produktivitas ketika menyampaikan argumen kepada
pemangku kepentingan yang mungkin memandang pengurangan rapat sebagai
mengurangi pengawasan alih-alih melindungi kapasitas rekayasa yang sejati.

## Contoh

**Perusahaan besar.** Pimpinan teknik sebuah perusahaan teknologi finansial
memperhatikan kesenjangan yang menetap antara aktivitas commit dan kemampuan
tim mengirim fitur yang benar-benar kompleks sesuai jadwal. Analisis kalender
menemukan bahwa insinyur median memiliki kurang dari tiga jam blok dua jam
tanpa gangguan per minggu, terpecah di antara jadwal rapat status berulang,
yang banyak di antaranya ditambahkan secara bertahap selama dua tahun tanpa
satu keputusan pun untuk menambah beban rapat sebanyak itu. Perusahaan
menetapkan dua sore bebas rapat yang wajib di seluruh organisasi per minggu,
dan survei lanjutan serta tinjauan metrik pengiriman enam bulan kemudian
menunjukkan skor kepuasan yang membaik dan pengurangan waktu siklus (topik
2.6) yang terukur secara khusus untuk fitur kompleks yang memakan beberapa
hari.

**Pemerintahan.** Tim rekayasa sebuah lembaga federal, yang beroperasi di
bawah persyaratan tata kelola yang berat, menemukan bahwa para insinyur
menghabiskan hampir 40% jam kerja mereka dalam rapat status dan tinjauan
kepatuhan, berdasarkan audit kalender yang dilakukan setelah beberapa insinyur
menyampaikan kekhawatiran dalam wawancara keluar. Alih-alih menghapus
persyaratan tata kelola, yang melayani tujuan pengawasan yang sesungguhnya,
tim menggabungkan rapat status yang berulang menjadi satu tinjauan mingguan dan
memindahkan pemeriksaan kepatuhan rutin ke tinjauan dokumentasi asinkron
alih-alih rapat langsung, memangkas beban rapat hampir setengahnya sambil
mempertahankan fungsi pengawasan yang mendasarinya, dan data survei
berikutnya menunjukkan perbaikan yang berarti pada waktu fokus yang
dilaporkan.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari melindungi waktu fokus tidak sebanding dengan biayanya: contoh
teknologi finansial di atas menunjukkan perbaikan pengiriman yang terukur dari
perubahan yang tidak berbiaya apa pun selain disiplin penjadwalan, dua sore
bebas rapat per minggu. Karena pekerjaan mendalam dan kompleks bergantung
khusus pada perhatian yang berkelanjutan dan tanpa gangguan, bahkan
peningkatan sederhana dalam ketersediaan waktu fokus yang sesungguhnya dapat
menghasilkan perbaikan yang jauh melebihi harapan pada kapasitas organisasi
untuk pekerjaannya yang tersulit dan paling bernilai.

Total biaya kepemilikan hampir seluruhnya berupa disiplin organisasi, bukan
investasi perkakas: data kalender biasanya sudah tersedia, dan intervensinya
sendiri, melindungi blok tertentu, tidak berbiaya apa pun untuk diterapkan
selain kesediaan menolak menjadwalkan rapat pada blok tersebut. Biaya
berkelanjutan utamanya adalah membela waktu terlindungi itu dari pengikisan
bertahap seiring kebutuhan koordinasi baru yang pasti muncul.

## Anti-pola dan jebakan

- **Memperlakukan hari yang terpecah sebagai biaya skala yang tak terhindarkan:**
  ia menumpuk secara bertahap dan jarang merupakan hasil satu keputusan yang
  disengaja, sehingga mudah dibiarkan tanpa penanganan.
- **Mencampuradukkan aktivitas tinggi dengan kinerja tinggi tanpa memeriksa data
  aliran:** jadwal yang terfragmentasi dapat menghasilkan persis pola yang
  menyesatkan ini.
- **Memaksakan satu jadwal waktu fokus yang kaku kepada semua orang:**
  mengabaikan variasi individu yang nyata dalam cara orang bekerja paling baik.
- **Memakai data interupsi atau notifikasi sebagai pengawasan individu:**
  mengulang persis risiko penyalahgunaan yang diperingatkan topik 3.4 untuk data
  aktivitas.
- **Membiarkan waktu fokus terlindungi terkikis perlahan lewat pengecualian:**
  risiko pengikisan yang sama seperti yang diperingatkan topik 2.5 untuk batas
  WIP, diterapkan pada perlindungan waktu fokus.
- **Menambah persyaratan tata kelola atau koordinasi tanpa pernah mengukur biaya
  beban rapat kumulatifnya:** fragmentasi merayap masuk satu tambahan yang
  tampak masuk akal demi satu.

## Model kematangan

- **Level 1, Initiate (Memulai):** Waktu fokus dan biaya interupsi tidak diukur
  atau dilindungi; beban rapat tumbuh tanpa ada yang melacak efek kumulatifnya.
- **Level 2, Develop (Mengembangkan):** Ada sedikit kesadaran informal akan
  fragmentasi, tetapi tidak ada data kalender yang dianalisis dan tidak ada
  waktu terlindungi yang ditetapkan secara formal.
- **Level 3, Standardize (Menstandarkan):** Ketersediaan waktu fokus diukur
  dari data kalender, dan blok bebas rapat yang terlindungi ditetapkan sebagai
  norma tim atau organisasi.
- **Level 4, Manage (Mengelola):** Data aliran dikorelasikan secara aktif
  dengan kesenjangan aktivitas-kinerja untuk mendiagnosis kinerja rendah
  akibat fragmentasi, dan waktu terlindungi dipantau terhadap pengikisan.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi memperlakukan
  perlindungan waktu fokus sebagai investasi produktivitas utama, dapat
  menunjuk perbaikan pengiriman dan kepuasan tertentu yang ditelusuri
  kepadanya, dan membelanya secara proaktif terhadap tekanan bertahap yang
  kalau tidak akan mengikisnya.

## Gagasan untuk diskusi

1. Berapa jam yang benar-benar tanpa gangguan yang dimiliki masing-masing dari kita minggu lalu?
2. Apakah beban rapat kita tumbuh perlahan tanpa ada yang memutuskannya dengan sengaja?
3. Di mana kesenjangan aktivitas-kinerja yang baru-baru ini terjadi mungkin sebenarnya masalah aliran?
4. Rapat berulang tunggal mana yang akan kita pangkas lebih dulu bila diminta mengurangi fragmentasi?
5. Berapa sebenarnya biaya bagi kita untuk menetapkan dua sore bebas rapat yang terlindungi per minggu?

## Poin-poin utama

- Efisiensi dan aliran mengukur **ketiadaan gesekan** dan kemampuan
  mempertahankan **kerja terfokus tanpa gangguan**, yang sangat diandalkan
  rekayasa perangkat lunak.
- **Pergantian konteks memiliki biaya yang nyata dan dapat diukur**, sering
  banyak menit untuk kembali fokus, bukan detik.
- Ukur **ketersediaan waktu fokus langsung dari data kalender**; hasilnya
  biasanya mengejutkan pimpinan.
- Dimensi ini sering **menjelaskan kesenjangan antara aktivitas dan kinerja**
  yang kalau tidak akan salah didiagnosis.
- **Blok waktu fokus terlindungi** adalah intervensi berbiaya rendah dan
  berimbal hasil tinggi, tetapi membutuhkan pembelaan yang disengaja terhadap
  pengikisan bertahap.

## Referensi dan bacaan lanjutan

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Deep Work: Rules for Focused Success in a Distracted World*, by Cal
  Newport (biaya pergantian konteks dan nilai waktu fokus yang terlindungi).
- *Peopleware: Productive Projects and Teams*, by Tom DeMarco and Timothy
  Lister (biaya interupsi dan perancangan lingkungan yang melindungi fokus).
- Mark, Gloria, Daniela Gudith, and Ulrich Klocke, "The Cost of Interrupted
  Work: More Speed and Stress" (2008): riset empiris tentang waktu pemulihan
  dari interupsi.
