# 6.4 Metrik manajemen keamanan dan kerentanan

## Gambaran umum dan motivasi

Topik ini menutup Bagian 6 dengan memperluas disiplin keandalan yang sama yang telah dibangun
bagian ini, penetapan target, pemasangan dengan pagar pengaman, pelaporan insiden yang jujur,
ke risiko yang berbeda namun sangat berkaitan: bukan apakah sistem gagal dengan sendirinya,
melainkan apakah seseorang membuatnya gagal, atau mengeksploitasinya, dengan sengaja. Metrik
**manajemen kerentanan (vulnerability management)** mengukur seberapa baik sebuah organisasi
menemukan dan memperbaiki kelemahan keamanan sebelum dieksploitasi: berapa banyak kerentanan
yang ada, seberapa parah, dan yang krusial, seberapa cepat kerentanan itu diperbaiki setelah
ditemukan, karena kerentanan yang diketahui tetapi belum ditambal adalah risiko tetap yang
dapat dikuantifikasi dan yang dipilih organisasi untuk ditanggung, baik secara sengaja
maupun karena kelalaian.

Kekhawatiran utama topik ini paralel langsung dengan perlakuan topik 4.4 terhadap temuan
analisis statis: jumlah kerentanan mentah adalah metrik yang buruk, mencampuradukkan masalah
sepele dan kritis, dan ia terpapar risiko manipulasi (gaming) yang persis sama, penyempitan
definisi, penekanan, dan manipulasi ambang batas, yang digambarkan topik 1.2 secara umum.
Tambahan khusus yang diperlukan metrik keamanan adalah waktu perbaikan yang dilacak terhadap
tingkat keparahan, karena kerentanan kritis yang dibiarkan tanpa tambalan selama berbulan-bulan
mewakili risiko yang secara mendasar berbeda dari kerentanan yang sama yang ditemukan dan
diperbaiki dalam sehari, informasi yang tidak dapat disampaikan oleh jumlah sederhana saja.

Bagi tim besar, metrik keamanan membawa konsekuensi di luar risiko teknis langsung: organisasi
perusahaan besar menghadapi paparan kontraktual dan reputasi dari sebuah pembobolan, dan
organisasi pemerintahan menghadapi konsekuensi keamanan nasional, hukum, dan kepercayaan
publik yang menjadikan metrik keamanan urusan kepentingan publik yang sesungguhnya, bukan
sekadar perhatian rekayasa internal. Topik ini memperlakukan manajemen kerentanan dengan
ketelitian yang sama dan disiplin pemasangan pagar pengaman yang sama yang diterapkan buku ini
di seluruh bagian, karena metrik keamanan terpapar setiap risiko manipulasi yang dijelaskan
buku ini, dengan taruhan yang sepadan lebih tinggi ketika manipulasi itu berhasil.

## Prinsip utama

- **Waktu perbaikan menurut tingkat keparahan lebih penting daripada jumlah kerentanan
  mentah.** Masalah kritis yang dibiarkan tanpa tambalan selama berbulan-bulan adalah risiko
  yang secara mendasar berbeda dari masalah yang sama yang ditemukan dan diperbaiki dengan
  cepat.
- **Metrik keamanan terpapar risiko manipulasi yang sama seperti temuan analisis statis**
  (topik 4.4), dengan taruhan yang lebih tinggi bila manipulasi berhasil.
- **Klasifikasi tingkat keparahan memerlukan kriteria eksternal yang terstandar** sedapat
  mungkin, bukan semata penilaian internal yang bisa bergeser menjadi longgar.
- **Kerentanan yang diungkapkan dan diperbaiki dengan cepat adalah tanda proses yang sehat,
  bukan kegagalan yang harus disembunyikan.** Menghukum pengungkapan mematahkan semangat
  pelaporan yang menjadi sandaran seluruh sistem ini.
- **Utang keamanan adalah satu kategori utang teknis** (topik 4.5) dan harus bersaing
  memperebutkan kapasitas perbaikan yang diprioritaskan atas dasar yang sama, eksplisit, dan
  terkuantifikasi.

## Rekomendasi

### Lacak waktu perbaikan menurut tingkat keparahan sebagai metrik utama

Untuk setiap kerentanan yang ditemukan, catat tingkat keparahannya (memakai skala terstandar
seperti [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System), CVSS,
bila berlaku) dan lacak waktu dari penemuan hingga perbaikan yang sejati, bukan hingga tiket
ditutup atau perbaikan digabungkan tetapi belum di-deploy. Tetapkan target waktu perbaikan
yang eksplisit menurut tingkat keparahan, umumnya diukur dalam hari untuk masalah kritis dan
minggu untuk yang tingkat keparahannya lebih rendah, dan lacak kepatuhan terhadap target itu
sebagai metrik kesehatan keamanan utama, bukan jumlah kerentanan mentah tanpa bobot.

### Gunakan penilaian tingkat keparahan terstandar, bukan semata penilaian internal

Bila sistem penilaian eksternal terstandar seperti CVSS tersedia, gunakan sebagai dasar utama
klasifikasi tingkat keparahan, bukan bersandar sepenuhnya pada penilaian internal yang
mungkin tidak konsisten. Ini mencerminkan disiplin klasifikasi cacat yang lolos pada topik
5.1 dan disiplin klasifikasi insiden pada topik 6.2, di sini diterapkan khusus pada
keamanan, dan ia menahan risiko pergeseran menjadi longgar yang diperingatkan topik-topik itu,
karena skor yang berjangkar secara eksternal lebih sulit didefinisikan ulang ke bawah secara
diam-diam dibandingkan skor yang sepenuhnya internal.

### Bangun budaya pengungkapan kerentanan dan pelaporan internal yang benar-benar tanpa hukuman

Terapkan prinsip postmortem tanpa menyalahkan dari topik 6.2 langsung pada keamanan: insinyur
yang menemukan dan melaporkan kerentanan yang ia sendiri perkenalkan, atau peneliti yang
mengungkapkan secara bertanggung jawab kerentanan yang ditemukan dari luar, harus
diperlakukan sebagai pemberi jasa yang berharga, bukan sebagai orang yang mengakui sebuah
kegagalan. Menghukum pengungkapan, baik secara internal maupun dari peneliti eksternal,
hampir pasti mematahkan semangat pelaporan yang menjadi sandaran seluruh sistem manajemen
kerentanan, mendorong risiko nyata ke bawah tanah alih-alih ke proses perbaikan yang
terkelola.

### Perlakukan utang keamanan sebagai satu kategori dalam backlog utang teknis Anda

Masukkan kerentanan yang diketahui dan risikonya diterima, yaitu yang sengaja belum
diperbaiki karena prioritas yang bersaing, ke dalam backlog utang teknis yang sama, yang
terlihat dan terkuantifikasi, sebagaimana dijelaskan pada topik 4.5, dengan kerangka biaya
perbaikan versus biaya menanggung yang sama. Ini mencegah risiko keamanan menghilang ke
status "kita sudah tahu" yang tak terlihat dan tak terdokumentasi, atau bersaing secara tidak
adil dengan pekerjaan fitur tanpa argumen prioritas yang eksplisit dan terkuantifikasi.

### Gabungkan metrik kerentanan dengan konteks keterpaparan dan keterekploitasian

Tidak setiap kerentanan dengan skor tingkat keparahan nominal yang sama membawa risiko yang
sebenarnya sama: kerentanan kritis pada perangkat internal tanpa keterpaparan jaringan
eksternal adalah risiko yang berbeda dari tingkat keparahan nominal yang sama pada layanan
yang terhubung ke internet dan menangani data pelanggan. Bila memungkinkan, bobotkan
prioritas menurut konteks keterpaparan dan keterekploitasian yang sebenarnya, bukan skor
tingkat keparahan saja, sehingga kapasitas perbaikan terkonsentrasi lebih dulu pada hal yang
benar-benar berisiko tertinggi.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Jumlah kerentanan mentah | Sederhana untuk dilaporkan | Mencampuradukkan masalah sepele dan kritis; mudah dimanipulasi lewat penekanan |
| Pelacakan waktu perbaikan berbobot tingkat keparahan | Mencerminkan paparan risiko yang sebenarnya dari waktu ke waktu | Memerlukan klasifikasi dan pelacakan yang disiplin dan konsisten |
| Penilaian tingkat keparahan yang murni internal | Fleksibel, disesuaikan dengan konteks | Rawan bergeser menjadi longgar dan tidak konsisten antartim |
| Penilaian eksternal terstandar (mis. CVSS) ditambah pembobotan konteks | Konsisten, berjangkar secara eksternal, tahan terhadap manipulasi | Memerlukan analisis konteks tambahan agar prioritas benar-benar akurat |

Ketegangan utamanya adalah **konsistensi versus konteks**. Pendekatan penilaian yang murni
terstandar konsisten dan tahan manipulasi tetapi bisa melewatkan konteks yang sejati,
keterpaparan dan keterekploitasian, yang menentukan risiko sebenarnya; pendekatan yang murni
kontekstual dan dinilai secara internal menangkap nuansa tetapi rawan terhadap risiko
pergeseran menjadi longgar yang sama yang diperingatkan buku ini untuk setiap metrik lain yang
bergantung pada klasifikasi. Selesaikan ketegangan ini dengan berjangkar pada penilaian
terstandar sebagai garis dasar yang konsisten, lalu menerapkan pembobotan konteks yang
terdokumentasi dan dapat diaudit di atasnya, bukan salah satu ekstrem saja.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita melacak waktu perbaikan menurut tingkat keparahan, atau hanya jumlah
   kerentanan mentah?** Tarik metrik Anda yang sebenarnya saat ini dan periksa apakah metrik
   itu membedakan masalah kritis yang dibiarkan tanpa tambalan berbulan-bulan dari yang
   diperbaiki dalam sehari, karena jumlah mentah memperlakukan kedua situasi dengan risiko
   yang sangat berbeda ini secara identik.

2. **Apakah kita memakai sistem penilaian tingkat keparahan eksternal yang terstandar, atau
   klasifikasi bersandar pada penilaian yang murni internal dan mungkin tidak konsisten?**
   Jika murni internal, diskusikan apa yang akan berubah pada praktik klasifikasi Anda saat
   ini bila Anda mengadopsi standar seperti CVSS.

3. **Apakah seorang insinyur yang memperkenalkan lalu melaporkan sebuah kerentanan akan
   merasa aman melakukannya, atau takut dihukum?** Ini versi khusus keamanan dari pertanyaan
   budaya tanpa menyalahkan pada topik 6.2, dan jawaban jujur di sini sangat menentukan
   apakah data kerentanan Anda bisa dipercaya sama sekali.

4. **Apakah kita punya backlog kerentanan berisiko-diterima yang diketahui, yang terlihat dan
   terkuantifikasi, atau status "kita sudah tahu" diam-diam menjadi tak terlihat dan tak
   tertangani seiring waktu?** Periksa apakah utang keamanan Anda dilacak dengan ketelitian
   yang sama seperti backlog utang teknis umum Anda (topik 4.5).

5. **Apakah prioritas perbaikan kita memperhitungkan keterpaparan dan keterekploitasian yang
   sebenarnya, atau bersandar semata pada skor tingkat keparahan nominal tanpa memandang
   konteks?** Pilih contoh nyata ketika dua kerentanan dengan tingkat keparahan nominal yang
   mirip membawa risiko sebenarnya yang sangat berbeda, dan diskusikan apakah proses Anda
   saat ini akan memprioritaskannya dengan benar.

6. **Pernahkah klasifikasi tingkat keparahan sebuah kerentanan bergeser ke bawah seiring
   waktu tanpa pembenaran yang jelas?** Ini mencerminkan pola manipulasi definisi yang
   diperingatkan topik 1.2 dan topik 6.2; audit sampel klasifikasi terbaru Anda untuk risiko
   spesifik ini.

## Lensa sektor

**Startup.** Proses manajemen kerentanan yang formal sering tidak diperlukan pada tahap sangat
awal, tetapi mengadopsi pemindaian dependensi otomatis yang dasar dan norma pelaporan internal
yang sederhana dan jujur sejak awal biayanya kecil dan mencegah utang keamanan menumpuk tak
terlihat sebelum tim punya kapasitas untuk menanganinya secara sistematis.

**Usaha kecil.** Sebagian besar platform pengembangan modern menyertakan pemindaian kerentanan
otomatis untuk dependensi, gratis atau berbiaya rendah; aktifkan sejak dini dan lacak waktu
perbaikan untuk apa pun yang ditandai kritis, bahkan tanpa fungsi keamanan khusus atau
perangkat yang canggih.

**Perusahaan besar.** Penilaian tingkat keparahan yang konsisten dan terstandar serta budaya
pengungkapan yang benar-benar tanpa hukuman sama-sama penting dan sama-sama lebih sulit
dipertahankan pada skala besar, tempat ketidakkonsistenan di puluhan tim dan pergeseran
budaya menuju sikap mencari kambing hitam setelah insiden serius merupakan risiko yang
konstan. Investasikan pada fungsi tata kelola keamanan khusus untuk menjaga konsistensi
klasifikasi dan melindungi budaya pengungkapan secara aktif.

**Pemerintahan.** Metrik keamanan di sini sering bersinggungan langsung dengan keamanan
nasional, kepatuhan regulasi, dan kepercayaan publik, dan kerentanan serius yang salah
ditangani dapat membawa konsekuensi jauh melampaui pembobolan sektor swasta pada umumnya.
Pertahankan klasifikasi tingkat keparahan yang ketat dan berjangkar secara eksternal, lindungi
budaya pengungkapan internal dan eksternal secara aktif, dan perlakukan utang keamanan dengan
transparansi dan ketelitian prioritas yang direkomendasikan topik ini, karena kerentanan
kritis yang tak terdokumentasi dan diterima diam-diam pada infrastruktur publik adalah risiko
yang sungguh serius dan dapat diaudit.

## Contoh

**Perusahaan besar.** Tim keamanan sebuah perusahaan perangkat lunak selama bertahun-tahun
hanya melaporkan jumlah kerentanan mentah kepada pimpinan, angka yang cenderung datar dan
memberi rasa stabil yang keliru. Analisis ulang berbobot tingkat keparahan dan berbasis waktu
perbaikan menunjukkan bahwa meski jumlah totalnya datar, kerentanan kritis rata-rata
membutuhkan lebih dari sembilan puluh hari untuk diperbaiki, jauh melampaui target yang wajar
mana pun, karena kerentanan itu kalah bersaing dengan pekerjaan fitur di setiap siklus
perencanaan tanpa kapasitas khusus yang terlindungi. Penetapan target perbaikan tegas 7 hari
untuk kerentanan kritis, didukung kapasitas perbaikan utang keamanan yang terlindungi yang
mencerminkan model alokasi utang teknis pada topik 4.5, menurunkan waktu perbaikan kritis
rata-rata menjadi di bawah lima hari dalam dua kuartal.

**Pemerintahan.** Sebuah badan infrastruktur nasional menemukan, setelah audit keamanan
eksternal, bahwa para insinyur internalnya secara informal menghindari pelaporan kerentanan
yang mereka temukan di kode mereka sendiri, karena takut hal itu berdampak buruk pada
penilaian kinerja mereka, paralel yang jelas dengan pola pelaporan insiden yang kurang
akibat budaya menyalahkan pada topik 6.2. Badan itu menetapkan kebijakan eksplisit yang
dikomunikasikan secara terbuka untuk melindungi pelapor kerentanan internal dari konsekuensi
kinerja apa pun, dimodelkan langsung pada praktik respons insiden tanpa menyalahkan, dan
laporan kerentanan internal naik secara substansial dalam tahun berikutnya, hasil yang oleh
pimpinan badan itu ditafsirkan dengan tepat sebagai bukti deteksi yang membaik dan pelaporan
yang jujur, bukan bukti memburuknya kualitas kode, sehingga terhindar dari kesimpulan yang
wajar tetapi keliru bahwa angka yang naik pasti berarti keadaan makin buruk.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari manajemen kerentanan yang ketat, terklasifikasi dengan baik, dan dilaporkan
dengan jujur adalah biaya pembobolan yang terhindarkan, yang untuk insiden keamanan serius
sering berlipat-lipat kali melampaui biaya perbaikan proaktif, bersama kerusakan regulasi,
kontraktual, dan reputasi yang terhindarkan. Contoh perusahaan perangkat lunak di atas
menunjukkan mekanisme spesifiknya: utang keamanan selama bertahun-tahun diam-diam kalah dalam
persaingan prioritas melawan pekerjaan fitur, persis pola yang diperingatkan topik 4.5 untuk
utang teknis secara umum, sampai kapasitas perbaikan yang terlindungi memperbaikinya secara
langsung.

Total biaya kepemilikan mencakup perangkat pemindaian otomatis, kapasitas perbaikan terlindungi
yang direkomendasikan topik ini untuk dialokasikan, dan investasi budaya yang berkelanjutan
pada praktik pengungkapan tanpa hukuman. Biaya itu sederhana dibandingkan biaya kerentanan
serius yang berhasil dieksploitasi, yang akan tertangkap dan diperbaiki jauh sebelum sempat
dieksploitasi oleh perbaikan proaktif yang prioritasnya tepat.

## Anti-pola dan jebakan

- **Hanya melacak jumlah kerentanan mentah:** mencampuradukkan masalah sepele dan kritis serta
  memberi rasa stabil atau krisis yang keliru tanpa memandang risiko sebenarnya.
- **Klasifikasi tingkat keparahan yang murni internal dan tidak terstandar:** rawan bergeser
  menjadi longgar dan tidak konsisten antartim.
- **Menghukum pengungkapan kerentanan, internal maupun eksternal:** mendorong risiko nyata ke
  bawah tanah alih-alih ke proses perbaikan yang terkelola.
- **Utang keamanan tanpa backlog yang terlihat dan terkuantifikasi:** kalah bersaing melawan
  pekerjaan fitur secara default.
- **Memprioritaskan hanya berdasarkan skor tingkat keparahan nominal, mengabaikan konteks
  keterpaparan dan keterekploitasian:** salah mengarahkan kapasitas perbaikan yang terbatas.
- **Menafsirkan naiknya jumlah laporan kerentanan sebagai bukti menurunnya kualitas tanpa
  memeriksa apakah pelaporannya sendiri yang membaik:** contoh spesifik dari jebakan variabel
  perancu pada topik 1.6.

## Model kematangan

- **Level 1, Initiate (Memulai):** Kerentanan dilacak, jika dilacak sama sekali, sebagai
  jumlah mentah tanpa pembobotan tingkat keparahan, tanpa pelacakan waktu perbaikan, dan
  dengan budaya pengungkapan yang menghukum.
- **Level 2, Develop (Mengembangkan):** Ada sebagian klasifikasi tingkat keparahan, tetapi
  standarnya tidak konsisten dan waktu perbaikan tidak dilacak terhadap target yang eksplisit.
- **Level 3, Standardize (Menstandarkan):** Penilaian tingkat keparahan yang terstandar dan
  berjangkar secara eksternal serta target waktu perbaikan yang eksplisit menurut tingkat
  keparahan diterapkan secara konsisten, dengan budaya pengungkapan yang benar-benar tanpa
  hukuman.
- **Level 4, Manage (Mengelola):** Utang keamanan dilacak dalam backlog yang terlihat dan
  terkuantifikasi dengan kapasitas perbaikan yang terlindungi; prioritas memperhitungkan
  konteks keterpaparan dan keterekploitasian, bukan tingkat keparahan saja.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi dapat menunjuk penurunan spesifik yang
  terukur pada waktu perbaikan kritis dan dapat menunjukkan budaya pengungkapan yang
  berkelanjutan dan tepercaya yang menghasilkan data kerentanan yang jujur dan menyeluruh.

## Gagasan untuk diskusi

1. Berapa rata-rata waktu perbaikan kita saat ini untuk kerentanan kritis, dan apakah memenuhi target yang eksplisit?
2. Apakah seorang insinyur yang memperkenalkan kerentanan akan merasa aman melaporkannya sendiri?
3. Apakah kita punya backlog utang keamanan berisiko-diterima yang diketahui, yang terlihat dan terkuantifikasi?
4. Apakah prioritas perbaikan kita memperhitungkan keterpaparan yang sebenarnya, atau hanya tingkat keparahan nominal?
5. Pernahkah klasifikasi tingkat keparahan bergeser ke bawah seiring waktu tanpa pembenaran yang jelas?

## Poin-poin utama

- Lacak **waktu perbaikan menurut tingkat keparahan**, bukan jumlah kerentanan mentah, sebagai
  metrik kesehatan keamanan utama.
- Gunakan **penilaian tingkat keparahan eksternal yang terstandar** (seperti CVSS) sebagai
  garis dasar yang konsisten, tahan terhadap risiko pergeseran menjadi longgar yang
  ditimbulkan penilaian murni internal.
- Bangun **budaya pengungkapan yang benar-benar tanpa hukuman**; menghukum pelaporan
  mendorong risiko nyata ke bawah tanah.
- Perlakukan **utang keamanan sebagai satu kategori utang teknis** (topik 4.5), bersaing
  secara adil memperebutkan kapasitas perbaikan yang terlindungi.
- Bobotkan prioritas menurut **keterpaparan dan keterekploitasian yang sebenarnya**, bukan
  skor tingkat keparahan saja.

## Referensi dan bacaan lanjutan

- FIRST.org's Common Vulnerability Scoring System (CVSS) specification: kerangka
  penilaian tingkat keparahan terstandar yang dirujuk di seluruh topik ini.
- OWASP Foundation resources on vulnerability management and secure
  software development lifecycle practice.
- *Site Reliability Engineering: How Google Runs Production Systems*, by
  Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds.
  (prinsip budaya tanpa menyalahkan yang diterapkan topik ini pada pengungkapan
  keamanan).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management
  Planning*: panduan otoritatif tentang praktik perbaikan kerentanan.
