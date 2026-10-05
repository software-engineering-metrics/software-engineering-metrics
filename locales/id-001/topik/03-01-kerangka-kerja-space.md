# 3.1 Kerangka kerja SPACE

## Gambaran umum dan motivasi

[Kerangka kerja SPACE](https://queue.acm.org/detail.cfm?id=3454124), yang
diterbitkan pada 2021 oleh para peneliti Nicole Forsgren, Margaret-Anne
Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, dan Jenna Butler,
dibuat untuk menjawab satu masalah tertentu: metrik [produktivitas pengembang](https://en.wikipedia.org/wiki/Productivity)
berupa satu angka, seperti jumlah baris kode, jumlah commit, dan story point,
sangat mudah dimanipulasi dan secara rutin menyesatkan. SPACE mengusulkan
pengukuran di lima dimensi sebagai gantinya: **Kepuasan dan kesejahteraan**
(Satisfaction and well-being), **Kinerja** (Performance), **Aktivitas**
(Activity), **Komunikasi dan kolaborasi** (Communication and collaboration),
dan **Efisiensi dan aliran** (Efficiency and flow). Tidak ada satu huruf pun
yang dimaksudkan berdiri sendiri; sumbangan sesungguhnya dari kerangka kerja
ini adalah disiplin menjaga kelima dimensi tetap terlihat bersama-sama,
sehingga sebuah tim tidak bisa tampak produktif pada satu sumbu sambil
diam-diam merusak sumbu yang lain.

Hal ini penting karena produktivitas pengembang bukan satu hal tunggal.
Sebuah tim bisa sangat aktif (banyak commit, banyak pull request) sambil
berkinerja buruk (pekerjaannya tidak menggerakkan hasil yang penting). Sebuah
tim bisa berkinerja baik dalam jangka pendek sementara kepuasannya anjlok,
indikator awal dari pengunduran diri dan runtuhnya kualitas yang baru muncul
berbulan-bulan kemudian. Wawasan SPACE, yang secara langsung dibangun di atas
topik 1.2 dan topik 1.3 buku ini, adalah bahwa salah satu dimensi mana pun,
bila dikejar sebagai target tunggal, akan dimanipulasi dengan mengorbankan
yang lain, dan kerangka kerja ini ada khusus untuk membuat pertukaran itu
terlihat sebelum menimbulkan kerusakan nyata.

Bagi tim besar, SPACE memberi pimpinan kosakata bersama untuk percakapan yang
tanpa itu akan condong ke dimensi mana pun yang paling mudah diukur, hampir
selalu aktivitas. Organisasi perusahaan besar yang membandingkan produktivitas
di banyak tim membutuhkan kerangka kerja yang tahan terhadap tarikan untuk
menghitung commit. Organisasi pemerintahan yang menghadapi tekanan perekrutan
dan retensi di pasar tenaga kerja yang kompetitif membutuhkan data kepuasan
dan kesejahteraan sama seriusnya dengan data pengiriman, karena kehilangan
seorang insinyur berpengalaman akibat burnout jauh lebih mahal daripada
keluaran satu sprint mana pun yang pernah dihemat.

## Prinsip utama

- **Tidak ada satu dimensi SPACE pun yang dapat dipercaya secara terpisah.**
  Nilai kerangka kerja ini muncul justru dari mengukur beberapa dimensi
  sekaligus.
- **Minimal satu metrik dari sekurang-kurangnya tiga dimensi, dengan campuran
  sumber subjektif dan objektif, adalah batas minimum untuk gambaran yang
  seimbang.** Serangkaian metrik yang seluruhnya diambil dari satu dimensi
  atau satu jenis data sebenarnya tidak menggunakan SPACE.
- **Aktivitas adalah dimensi yang paling rawan disalahgunakan sebagai proksi
  tunggal.** Ia paling mudah diukur dan, sendirian, paling kurang mewakili
  nilai yang sesungguhnya.
- **Pengukuran tingkat tim dan tingkat individu memerlukan perlakuan yang
  berbeda.** SPACE dirancang terutama untuk wawasan tingkat tim dan sistem,
  bukan untuk kartu skor individu.
- **Kelima dimensi saling memengaruhi.** Perubahan yang memperbaiki satu
  dimensi dapat menurunkan dimensi lain, dan kerangka kerja ini ada untuk
  menangkap pertukaran itu.

## Rekomendasi

### Susun serangkaian metrik dari sekurang-kurangnya tiga dimensi sebelum memercayainya

Jangan mengadopsi SPACE dengan memilih satu dimensi favorit, biasanya
aktivitas atau kinerja, lalu menganggapnya selesai. Pilih dengan sengaja
minimal satu metrik dari sekurang-kurangnya tiga dari lima dimensi, dengan
memadukan instrumentasi objektif (topik 1.5) dan data survei subjektif
(topik 3.7), sebelum menyampaikan kesimpulan apa pun tentang produktivitas
tim. Komposisi minimum inilah yang mencegah SPACE runtuh kembali menjadi
masalah proksi tunggal yang hendak diselesaikannya.

### Perlakukan metrik aktivitas sebagai konteks, jangan pernah sebagai sorotan utama

Jumlah commit, jumlah baris kode, dan jumlah pull request adalah data dimensi
aktivitas SPACE yang sah, tetapi tidak boleh menjadi metrik utama atau
satu-satunya yang disajikan tentang produktivitas sebuah tim. Gunakan data
aktivitas untuk memberi konteks bagi dimensi lain, misalnya menyadari bahwa
turunnya aktivitas bertepatan dengan naiknya kepuasan karena tim akhirnya
punya ruang untuk melunasi utang teknis, bukan sebagai vonis yang berdiri
sendiri. Topik 3.4 membahas risiko khusus dimensi ini secara mendalam.

### Terapkan SPACE di tingkat tim dan sistem, bukan tingkat individu

Riset awal SPACE maupun adopsinya di industri sesudahnya sama-sama
memperlakukan kerangka kerja ini sebagai lensa untuk memahami produktivitas
tim dan organisasi, bukan sebagai kartu skor kinerja individu. Menerapkan
dimensi SPACE untuk memeringkat individu, terutama dimensi aktivitas, menciptakan
kembali persis risiko manipulasi yang diperingatkan topik 1.2 dan menyalahgunakan
kerangka kerja yang tidak pernah divalidasi untuk keperluan itu.

### Perhatikan pertukaran antardimensi, bukan hanya pergerakan di dalam satu dimensi

Daya diagnostik sesungguhnya dari kerangka kerja ini berasal dari mengamati
bagaimana dimensi-dimensi bergerak relatif satu sama lain. Metrik kinerja yang
naik bersamaan dengan kepuasan yang turun adalah tanda peringatan yang patut
segera diselidiki, dan mungkin menunjukkan kecepatan yang tidak berkelanjutan.
Metrik aktivitas yang naik bersamaan dengan kinerja yang datar atau turun
menunjukkan kesibukan semu, bukan kemajuan sejati. Tinjau kelima dimensi
bersama-sama pada irama yang tetap, khusus untuk menangkap pola lintas
dimensi ini, bukan sekadar memeriksa tiap angka secara terpisah.

### Padukan irama pengukuran secara tepat di antara dimensi

Sebagian dimensi SPACE berubah lambat dan paling baik diukur secara berkala
(kepuasan, biasanya dalam siklus survei kuartalan); yang lain berubah cepat
dan diuntungkan oleh pelacakan otomatis yang lebih sering (aktivitas,
efisiensi dan aliran, keduanya sebagian besar dapat diinstrumentasi dari
sistem yang sudah ada). Sesuaikan irama pengukuran Anda dengan laju perubahan
alami tiap dimensi, alih-alih memaksa setiap metrik ke jadwal pelaporan yang
sama.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Serangkaian metrik satu dimensi (biasanya aktivitas) | Sederhana, murah, familier | Mudah dimanipulasi, melewatkan biaya manusiawi dari praktik yang tidak berkelanjutan |
| Adopsi SPACE penuh lima dimensi | Seimbang, tahan terhadap manipulasi satu sumbu, menangkap pertukaran | Membutuhkan lebih banyak instrumentasi dan investasi survei |
| Penerapan SPACE tingkat tim | Sesuai dengan penggunaan yang telah divalidasi, melindungi individu dari penyalahgunaan | Tidak dapat menjawab pertanyaan tingkat individu yang kadang diinginkan pimpinan |
| Penerapan SPACE tingkat individu | Terasa lebih langsung dapat ditindaklanjuti bagi sebagian manajer | Menyalahgunakan kerangka kerja; risiko manipulasi dan moral yang besar |

Ketegangan utamanya adalah **kelengkapan pengukuran versus biaya dan
kompleksitas**. Implementasi SPACE yang penuh dan seimbang membutuhkan lebih
banyak instrumentasi, lebih banyak upaya perancangan survei, dan lebih banyak
disiplin untuk meninjau kelima dimensi bersama-sama dibandingkan dasbor
aktivitas sederhana. Atasi ketegangan ini dengan memulai dari serangkaian
metrik yang benar-benar minimal tetapi seimbang, yaitu minimal satu metrik
dari sekurang-kurangnya tiga dimensi, alih-alih melewatkan disiplin kerangka
kerja ini sama sekali atau mencoba versi yang kewalahan dan terinstrumentasi
penuh untuk kelima dimensi sejak hari pertama.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah rangkaian metrik produktivitas kita saat ini diambil dari
   sekurang-kurangnya tiga dimensi SPACE, atau didominasi data aktivitas
   saja?** Audit dasbor Anda terhadap kelima dimensi secara eksplisit; sebagian
   besar organisasi, bila dinilai dengan jujur, jauh lebih condong ke
   aktivitas daripada yang mereka sadari.

2. **Pernahkah kita melihat satu dimensi SPACE membaik sementara dimensi lain
   diam-diam memburuk, dan apakah kita menyadarinya saat itu?** Pertukaran
   lintas dimensi ini persis yang dirancang untuk ditangkap oleh kerangka
   kerja ini. Tengok kembali setahun terakhir untuk mencari periode ketika
   metrik pengiriman membaik, lalu tanyakan apa yang ditunjukkan data
   kepuasan atau kesejahteraan pada rentang waktu yang sama.

3. **Apakah data SPACE pernah dipakai, bahkan secara informal, untuk menilai
   atau membandingkan individu, bukan tim?** Ini menyalahgunakan kerangka
   kerja dan mengundang manipulasi. Jujurlah tentang bagaimana metrik ini
   sebenarnya dibicarakan dalam praktik, bukan hanya bagaimana kebijakan
   menyatakan metrik itu seharusnya digunakan.

4. **Bagaimana kita akan menyadari bila sebuah tim memperbaiki metrik
   kinerjanya dengan mengorbankan kecepatan yang tidak berkelanjutan?** Tanpa
   data kepuasan dan kesejahteraan yang ditinjau bersama data kinerja,
   pertukaran semacam ini tidak terlihat sampai muncul sebagai pengunduran
   diri atau runtuhnya kualitas berbulan-bulan kemudian.

5. **Apa irama pengukuran kita untuk masing-masing dari lima dimensi, dan
   apakah sesuai dengan seberapa cepat tiap dimensi benar-benar berubah?**
   Survei kepuasan kuartalan yang dipasangkan dengan data aktivitas waktu
   nyata adalah ketidaksamaan irama yang masuk akal; irama yang sama untuk
   kelima dimensi tanpa dipikirkan tidaklah demikian.

6. **Jika seorang manajer teknik baru bergabung besok dan hanya melihat
   dasbor kita, apakah ia akan mendapat gambaran produktivitas tim yang
   seimbang, atau yang miring?** Ini adalah ujian praktis apakah rangkaian
   metrik Anda benar-benar mencapai keseimbangan SPACE, atau hanya
   menyinggung kerangka kerja ini sementara dalam praktiknya tetap didominasi
   aktivitas.

## Lensa sektor

**Startup.** Implementasi penuh lima dimensi biasanya berlebihan untuk
segelintir insinyur yang berbicara setiap hari dan dapat merasakan langsung
kesehatan kepuasan dan kolaborasi. Satu kebiasaan yang layak diadopsi sejak
dini adalah menahan diri dari tarikan menuju metrik aktivitas semata ketika
tim mulai tumbuh melampaui ukuran yang masih bisa dicakup oleh kesadaran
informal.

**Usaha kecil.** Tanpa fungsi analitik sumber daya manusia khusus, buatlah
tetap sederhana: pasangkan data pengiriman yang sudah Anda miliki (topik 2.10)
dengan pemeriksaan singkat, informal, dan rutin tentang kepuasan, bahkan
sekadar survei denyut satu pertanyaan. Pasangan minimal itu sudah menangkap
disiplin inti kerangka kerja ini jauh lebih baik daripada dasbor yang hanya
berisi aktivitas.

**Perusahaan besar.** Di sinilah kerangka kerja penuh layak atas
kompleksitasnya. Standarkan serangkaian metrik SPACE yang seimbang di
seluruh tim agar pimpinan dapat membandingkan produktivitas secara adil,
alih-alih condong ke tim mana pun yang grafik commit-nya tampak paling
mengesankan, dan investasikan pada infrastruktur survei yang dibahas topik 3.7
agar data kepuasan dan kolaborasi sama andalnya dengan instrumentasi objektif.

**Pemerintahan.** Tekanan perekrutan dan retensi, terutama ketika gaji sektor
publik tidak selalu dapat bersaing dengan tawaran sektor swasta, menjadikan
data kepuasan dan kesejahteraan sebagai perhatian yang benar-benar strategis,
bukan tambahan yang lunak. Perlakukan SPACE sama seriusnya dengan metrik
pengiriman dalam perencanaan tenaga kerja dan pembenaran anggaran, karena
biaya kehilangan seorang insinyur berpengalaman akibat burnout diukur dalam
bulan-bulan pengetahuan institusional yang tidak bisa segera digantikan oleh
penggantinya.

## Contoh

**Perusahaan besar.** Pimpinan teknik sebuah perusahaan perangkat lunak
selama bertahun-tahun melacak jumlah commit dan story point yang selesai
sebagai sinyal produktivitas utamanya. Setelah mengadopsi rangkaian metrik
SPACE yang lebih lengkap, termasuk survei kepuasan kuartalan dan analisis
jaringan kolaborasi (topik 3.5), pimpinan menemukan bahwa tim dengan angka
aktivitas tertinggi juga memiliki skor kepuasan terendah dan tingkat
pengunduran diri sukarela tertinggi pada tahun berikutnya. Angka aktivitas
saja ternyata secara aktif menyesatkan; gambaran yang lebih lengkap
mendorong pengurangan beban kerja serentak tim itu secara sengaja (prinsip
WIP dari topik 2.5 yang diterapkan pada tingkat manusia) dan pemulihan yang
terukur pada kepuasan serta, pada akhirnya, kinerja yang berkelanjutan.

**Pemerintahan.** Sebuah badan layanan digital nasional, yang bersaing
merekrut tenaga teknik melawan gaji sektor swasta yang tidak mampu
disamainya, mengadopsi rangkaian metrik SPACE yang seimbang khusus untuk
memperkuat argumen investasi retensi nonmoneter: perkakas yang lebih baik,
waktu fokus yang dilindungi, dan gesekan proses yang lebih sedikit. Data
survei kepuasan yang digabungkan dengan metrik efisiensi dan aliran (topik
3.6) menunjukkan bahwa frekuensi interupsi, bukan kompensasi, adalah
prediktor terkuat niat untuk keluar dalam data wawancara keluar. Investasi
badan itu selanjutnya pada kebijakan waktu fokus yang dilindungi, yang
dibenarkan langsung oleh data SPACE ini, berkorelasi dengan perbaikan retensi
yang terukur selama delapan belas bulan berikutnya.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengadopsi SPACE secara penuh adalah pengunduran diri yang
terhindarkan dan runtuhnya kualitas akibat burnout yang terhindarkan,
keduanya jauh lebih mahal daripada biaya instrumentasi kerangka kerja ini.
Serangkaian metrik yang hanya berisi aktivitas bisa tampak sangat baik selama
satu atau dua tahun, sampai biaya manusiawinya menyusul sekaligus, dan pada
saat itu biaya mengganti keahlian yang hilang dan membangun kembali kesehatan
tim jauh melampaui keuntungan produktivitas apa pun yang pernah tampak dari
rangkaian metrik yang sempit itu.

Total biaya kepemilikan mencakup infrastruktur survei (topik 3.7) dan
disiplin meninjau kelima dimensi bersama-sama alih-alih condong ke mana pun
yang paling mudah. Biaya itu benar-benar layak dibayar: contoh perusahaan
besar di atas menunjukkan pola nyata yang dapat ditemukan, yaitu aktivitas
tinggi yang menutupi risiko pengunduran diri tinggi, yang tidak akan pernah
terungkap oleh rangkaian metrik yang lebih sempit sampai kerusakannya sudah
terjadi.

## Anti-pola dan jebakan

- **Mengadopsi SPACE hanya namanya sementara dalam praktik tetap didominasi
  aktivitas:** mode kegagalan yang paling umum, dan menggagalkan seluruh
  tujuan kerangka kerja ini.
- **Menerapkan dimensi SPACE pada kartu skor individu:** menyalahgunakan
  kerangka kerja yang divalidasi untuk wawasan tingkat tim dan sistem.
- **Meninjau dimensi secara terpisah alih-alih mengamati pertukaran lintas
  dimensi:** melewatkan pola yang justru dirancang untuk ditangkap SPACE.
- **Memaksa setiap dimensi ke irama pengukuran yang sama:** membuang tenaga
  pada dimensi yang berubah lambat dan kurang mengukur dimensi yang berubah
  cepat.
- **Menganggap satu skor survei kepuasan sudah cukup tanpa data objektif:**
  menghilangkan keseimbangan antara sumber subjektif dan objektif yang
  dituntut kerangka kerja ini.
- **Mengabaikan tren yang memburuk pada satu dimensi karena dimensi lain
  tampak baik:** kegagalan persis yang hendak dicegah oleh disiplin lintas
  dimensi kerangka kerja ini.

## Model kematangan

- **Level 1, Initiate (Memulai):** Produktivitas diukur melalui metrik
  aktivitas saja, tanpa data kepuasan, kolaborasi, atau efisiensi yang
  dikumpulkan.
- **Level 2, Develop (Mengembangkan):** Beberapa dimensi tambahan diukur
  secara informal, tetapi tidak ada tinjauan lintas dimensi yang konsisten
  dan tidak ada standar komposisi minimum.
- **Level 3, Standardize (Menstandarkan):** Rangkaian metrik seimbang yang
  diambil dari sekurang-kurangnya tiga dimensi SPACE diterapkan secara
  konsisten di tingkat tim di seluruh organisasi.
- **Level 4, Manage (Mengelola):** Kelima dimensi ditinjau bersama-sama
  secara berkala, pertukaran lintas dimensi diselidiki secara aktif, dan
  kerangka kerja ini menjadi masukan bagi keputusan staf dan proses yang
  nyata.
- **Level 5, Orchestrate (Mengorkestrasi):** Data SPACE secara langsung
  membentuk perencanaan tenaga kerja dan investasi retensi, dan organisasi
  dapat menunjuk intervensi tertentu, yang diinformasikan oleh pola lintas
  dimensi, yang terukur memperbaiki pengiriman dan kesejahteraan pengembang
  sekaligus.

## Gagasan untuk diskusi

1. Dimensi SPACE mana yang paling kurang terukur dalam rangkaian metrik kita saat ini?
2. Pernahkah kita melihat aktivitas sebuah tim naik sementara kepuasan diam-diam turun?
3. Bagaimana kita akan menangkap sebuah tim yang mengorbankan keberlanjutan jangka panjang demi keluaran jangka pendek saat ini?
4. Apakah ada data yang berdekatan dengan SPACE yang saat ini dipakai untuk menilai individu, bukan tim?
5. Seperti apa dasbor produktivitas yang benar-benar seimbang bagi kita, secara konkret?

## Poin-poin utama

- SPACE mencakup lima dimensi, **Kepuasan dan kesejahteraan, Kinerja,
  Aktivitas, Komunikasi dan kolaborasi, serta Efisiensi dan aliran**, dan
  tidak ada satu pun yang dapat dipercaya sendirian.
- Susun rangkaian metrik dari **sekurang-kurangnya tiga dimensi**, dengan
  campuran sumber data objektif dan subjektif.
- Perlakukan **metrik aktivitas sebagai konteks**, jangan pernah sebagai
  sinyal produktivitas utama (topik 3.4).
- Terapkan SPACE di **tingkat tim dan sistem**, bukan sebagai kartu skor
  individu.
- Tinjau dimensi bersama-sama, dengan memperhatikan **pertukaran lintas
  dimensi**, bukan hanya pergerakan di dalam satu dimensi mana pun.

## Referensi dan bacaan lanjutan

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021): makalah asli kerangka kerja SPACE.
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (fondasi riset yang sama dengan metrik DORA).
- *Peopleware: Productive Projects and Teams*, by Tom DeMarco and Timothy
  Lister (argumen klasik untuk memperlakukan produktivitas pengembang sebagai
  persoalan manusiawi, bukan semata mekanis).
- *Drive: The Surprising Truth About What Motivates Us*, by Daniel H. Pink
  (riset motivasi yang relevan bagi pengukuran kepuasan dan kesejahteraan).
