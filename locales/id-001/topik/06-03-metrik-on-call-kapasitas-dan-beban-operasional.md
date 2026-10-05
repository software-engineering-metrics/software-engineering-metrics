# 6.3 Metrik on-call, kapasitas, dan beban operasional

## Gambaran umum dan motivasi

Keandalan yang diperkenalkan topik 6.1 dan respons insiden yang diukur topik 6.2 sama-sama
bergantung pada sistem manusia yang diukur langsung oleh topik ini: rotasi on-call, yaitu
para insinyur yang membawa pager dan merespons ketika sesuatu rusak, serta kapasitas
infrastruktur yang menentukan seberapa banyak beban yang dapat ditampung sebuah sistem
sebelum mulai rusak sejak awal. Sebuah organisasi bisa punya SLO yang sangat baik, anggaran
kesalahan yang dirancang dengan baik, dan budaya insiden yang benar-benar tanpa menyalahkan,
namun tetap menguras habis insinyur on-call-nya lewat beban yang tidak berkelanjutan, yang
pada akhirnya menurunkan keandalan yang justru hendak dilindungi oleh praktik-praktik lain
itu.

Topik ini memperlakukan beban operasional sebagai keluarga metrik tersendiri, yang
terhubung langsung dengan pengukuran kesejahteraan dan [kelelahan kerja (burnout)](https://en.wikipedia.org/wiki/Occupational_burnout)
pada topik 3.2 tetapi khusus untuk tekanan akut yang tertentu dari membawa pager: tidur yang
terganggu, beban psikologis dari berjaga meski tidak terjadi apa-apa, dan akumulasi dampak
dari beban insiden yang sering dan terdistribusi buruk. Organisasi yang mengukur keandalan
sistemnya dengan cermat tetapi tidak pernah mengukur keberlanjutan manusia yang menjaga
sistem itu tetap andal hanya mengukur separuh gambaran, dan separuh yang tidak terukur itu
cenderung muncul pada akhirnya sebagai pengunduran diri, menurunnya mutu respons insiden dari
penanggap yang kelelahan, atau keduanya.

Bagi tim besar, metrik on-call dan kapasitas mengungkap masalah penyeimbangan beban yang
mencerminkan kekhawatiran konsentrasi pengetahuan pada topik 3.5: sejumlah kecil insinyur
menyerap bagian pager yang tidak proporsional, sering kali orang-orang yang paling
berpengalaman justru karena mereka paling cepat menyelesaikan insiden, yang menciptakan
risiko burnout dan risiko bus-factor sekaligus. Organisasi perusahaan besar dan pemerintahan
yang menjalankan layanan kritis sepanjang waktu bergantung pada metrik topik ini untuk
menyusun rotasi on-call secara berkelanjutan, bukan menemukan biaya sebenarnya hanya lewat
pengunduran diri.

## Prinsip utama

- **Beban on-call adalah sumber daya yang dapat diukur dan dikelola**, bukan beban tak
  terhindarkan dan tanpa batas yang harus begitu saja diserap para insinyur.
- **Frekuensi pager dan distribusi pager sama-sama penting.** Rata-rata seluruh tim dapat
  menyembunyikan konsentrasi yang parah pada segelintir individu.
- **Gangguan selama on-call membawa biaya bahkan ketika tidak ada insiden yang benar-benar
  terjadi**, yaitu beban psikologis karena harus selalu dapat dihubungi dan bertanggung
  jawab.
- **Perencanaan kapasitas dan beban on-call saling terhubung.** Infrastruktur yang
  kekurangan penyediaan menghasilkan lebih banyak pager, yang langsung menambah beban
  on-call.
- **Sistem on-call yang berkelanjutan melindungi keandalan itu sendiri**, karena penanggap
  yang kelelahan mengambil keputusan yang lebih lambat dan lebih rawan kesalahan selama
  insiden.

## Rekomendasi

### Lacak frekuensi dan distribusi pager, bukan hanya rata-rata tingkat tim

Ukur berapa banyak pager yang diterima setiap insinyur on-call, bukan hanya rata-rata seluruh
tim yang bisa menyembunyikan konsentrasi parah. Serupa dengan kekhawatiran bus-factor pada
topik 3.5 dan beban peninjau pada topik 2.9, beban on-call sering terkonsentrasi pada
segelintir orang berpengalaman yang paling cepat menyelesaikan insiden, persis pola yang
menciptakan risiko burnout sekaligus titik kegagalan tunggal yang berbahaya. Seimbangkan
kembali rotasi secara sengaja ketika konsentrasi ini muncul.

### Ukur biaya psikologis berjaga on-call, bukan hanya waktu insiden yang aktif

Berjaga on-call membawa biaya nyata bahkan dalam giliran tanpa satu pun pager: kualitas tidur
yang menurun karena mengantisipasi kemungkinan gangguan, aktivitas pribadi yang terbatas, dan
stres tingkat rendah dari tanggung jawab yang terus berjalan. Bila memungkinkan, tangkap ini
melalui data survei (topik 3.7) khusus tentang pengalaman on-call, terpisah dari kepuasan
umum, karena sebuah tim bisa melaporkan kepuasan umum yang wajar sementara on-call secara
khusus diam-diam mengikis kesejahteraan.

### Tetapkan batas eksplisit untuk frekuensi on-call yang berkelanjutan

Tetapkan frekuensi maksimum yang wajar untuk seberapa sering seseorang boleh berjaga on-call,
umumnya tidak lebih dari satu minggu dalam empat atau lima, dan lacak frekuensi rotasi yang
sebenarnya terhadap batas itu. Rotasi yang secara teknis mencantumkan cukup banyak orang
tetapi secara efektif bergantung pada dua atau tiga orang saja karena kesenjangan keterampilan
atau keterbatasan ketersediaan sebenarnya tidak memenuhi batas itu, apa pun yang ditunjukkan
jadwal nominalnya.

### Hubungkan perencanaan kapasitas langsung dengan beban on-call

Infrastruktur yang kekurangan penyediaan, ruang cadangan yang tidak cukup untuk lonjakan
lalu lintas, konfigurasi auto-scaling yang tidak memadai, menghasilkan lebih banyak pager
dengan sendirinya, yang langsung menambah beban on-call. Lacak pemanfaatan kapasitas
infrastruktur dan korelasikan dengan frekuensi pager: layanan yang rutin berjalan mendekati
batas kapasitasnya dan menghasilkan bagian pager yang tidak proporsional adalah argumen
langsung dan terkuantifikasi untuk investasi kapasitas, bukan sekadar keluhan operasional
yang samar.

### Gunakan metrik on-call untuk menginformasikan keputusan penempatan staf dan perekrutan, bukan evaluasi individu

Agregasikan data beban on-call di tingkat tim untuk mengajukan argumen penambahan personel,
perangkat yang lebih baik untuk mengurangi pager positif palsu, atau investasi arsitektur
untuk mengurangi frekuensi insiden yang sebenarnya. Mengikuti panduan konsisten buku ini
untuk metrik apa pun yang menyentuh individu secara langsung (topik 1.2, topik 3.4), jangan
pernah memakai metrik respons pager individu untuk mengevaluasi kinerja insinyur tertentu;
tujuannya adalah penempatan staf dan rancangan sistem yang berkelanjutan, bukan mencatat
skor individu.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa pelacakan beban on-call yang formal | Tanpa beban tambahan | Risiko burnout dan konsentrasi bus-factor tetap tak terlihat sampai muncul sebagai pengunduran diri |
| Hanya frekuensi pager rata-rata tim | Sederhana untuk dihitung | Menyembunyikan konsentrasi individu yang parah |
| Pelacakan distribusi pager tingkat individu | Langsung mengungkap konsentrasi dan risiko burnout | Perlu kehati-hatian agar hanya dipakai secara agregat, jangan pernah untuk evaluasi individu |
| Investasi kapasitas untuk mengurangi volume pager di sumbernya | Menangani akar masalah, mengurangi beban secara berkelanjutan | Memerlukan investasi infrastruktur di muka |

Ketegangan utamanya adalah **penerimaan versus investasi**. Mudah sekali memperlakukan volume
pager yang tinggi sebagai biaya tak terhindarkan dari menjalankan layanan yang andal dan
meminta insinyur on-call menyerapnya, tetapi penerimaan itu pada akhirnya merugikan
organisasi lewat pengunduran diri dan menurunnya mutu respons insiden dari penanggap yang
kelelahan. Selesaikan ketegangan ini dengan memperlakukan beban on-call yang meningkat sebagai
sinyal yang menuntut investasi sejati, perbaikan kapasitas, peringatan yang lebih baik untuk
mengurangi positif palsu, penambahan personel rotasi, bukan beban tak terhindarkan yang
sekadar ditanggung tanpa batas waktu.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Seperti apa distribusi pager kita yang sebenarnya di antara individu dalam rotasi,
   bukan hanya rata-rata tim?** Tarik data tingkat individu yang nyata; rata-rata tim yang
   tampak wajar bisa menyembunyikan satu atau dua orang yang menyerap bagian yang sangat
   tidak proporsional.

2. **Pernahkah kita mengukur biaya psikologis berjaga on-call secara terpisah dari kepuasan
   umum?** Jika belum, diskusikan apakah satu pertanyaan survei singkat yang khusus tentang
   pengalaman on-call akan mengungkap sesuatu yang saat ini terlewat oleh survei kepuasan
   umum Anda (topik 3.2).

3. **Apakah jadwal rotasi on-call nominal kita mencerminkan kenyataan, atau secara efektif
   hanya bergantung pada dua atau tiga orang karena kesenjangan keterampilan atau
   ketersediaan?** Jujurlah soal ini; jadwal yang mencantumkan delapan nama tetapi secara
   efektif bergantung pada dua orang tidak memenuhi batas keberlanjutan yang wajar mana pun.

4. **Layanan kita yang mana yang menghasilkan bagian pager tidak proporsional dibandingkan
   ruang cadangan kapasitasnya, dan apakah tambahan investasi infrastruktur akan langsung
   mengurangi beban itu?** Silangkan frekuensi pager dengan data pemanfaatan kapasitas secara
   eksplisit untuk membangun argumen ini dengan bukti nyata.

5. **Pernahkah data beban on-call dipakai, bahkan secara informal, untuk mengevaluasi kinerja
   individu, bukan untuk menginformasikan keputusan penempatan staf dan arsitektur?** Ini
   berisiko jatuh ke jebakan evaluasi individu yang sama yang diperingatkan topik 3.4 untuk
   data aktivitas, di sini diterapkan pada beban operasional.

6. **Berapa biaya yang harus kita tanggung bila kehilangan insinyur on-call kita yang paling
   sering menerima pager karena burnout atau pengunduran diri, dan bagaimana perbandingannya
   dengan biaya menyeimbangkan kembali rotasi atau berinvestasi pada perbaikan akar masalah
   sekarang?** Perbandingan konkret ini sering menjadi argumen yang lebih kuat untuk
   investasi proaktif daripada sekadar imbauan abstrak tentang keberlanjutan.

## Lensa sektor

**Startup.** On-call sering bersifat informal dan terkonsentrasi pada para pendiri atau tim
rekayasa awal yang kecil karena keadaan. Risikonya adalah menormalkan laju yang tidak
berkelanjutan sejak dini, sebelum rancangan rotasi yang disengaja pernah dipertimbangkan,
yang menjadi jauh lebih sulit diurai begitu ia menjadi ekspektasi bawaan bagi karyawan baru
yang bergabung kemudian.

**Usaha kecil.** Jadwal rotasi yang sederhana dan eksplisit dengan batas keberlanjutan yang
jelas (misalnya tidak lebih dari satu minggu dalam empat) dapat dicapai bahkan tanpa
perangkat on-call khusus. Disiplin utamanya adalah sekadar membuat rotasi dan keadilannya
terlihat dan eksplisit, bukan membiarkannya sebagai pengaturan informal yang tak dinyatakan.

**Perusahaan besar.** Konsentrasi distribusi pager beserta risiko burnout dan bus-factor yang
menyertainya membengkak buruk di sini, karena lebih banyak layanan dan kompleksitas umumnya
berarti lebih banyak potensi pager, dan konsentrasi keahlian memperparah masalahnya.
Investasikan pada pelacakan beban tingkat individu (hanya dipakai secara agregat untuk
keputusan penempatan staf), investasi kapasitas untuk mengurangi volume pager di sumbernya,
dan penyeimbangan ulang rotasi yang disengaja.

**Pemerintahan.** Infrastruktur publik yang kritis sering memerlukan cakupan on-call sepanjang
waktu dengan konsekuensi nyata bila respons tertunda, yang meningkatkan pentingnya penempatan
staf yang berkelanjutan sekaligus kesulitan mencapainya di bawah batasan jumlah personel
sektor publik yang lazim. Gunakan data beban on-call secara eksplisit dan langsung untuk
membenarkan permintaan staf, dengan membingkai kapasitas on-call yang berkelanjutan sebagai
persyaratan keandalan yang langsung dan terkuantifikasi, bukan preferensi penempatan staf
yang bersifat opsional.

## Contoh

**Perusahaan besar.** Sebuah perusahaan infrastruktur awan menemukan, setelah untuk pertama
kalinya menarik data pager tingkat individu, bahwa dua insinyur senior dari rotasi on-call
lima belas orang secara pribadi menangani lebih dari 60% seluruh pager tahun sebelumnya,
baik karena mereka paling cepat menyelesaikan insiden yang kompleks maupun karena anggota
rotasi lainnya terbiasa secara informal menyerahkan kepada mereka alih-alih mencoba
menyelesaikannya sendiri. Kedua insinyur itu melaporkan gejala burnout yang signifikan dalam
survei kesejahteraan perusahaan (topik 3.2) tanpa pimpinan sebelumnya menghubungkan sinyal
survei itu dengan data konsentrasi on-call yang spesifik dan terkuantifikasi. Upaya
penyeimbangan ulang yang disengaja, termasuk pelatihan terarah untuk membangun kepercayaan
diri menyelesaikan insiden di seluruh rotasi yang lebih luas serta batas formal berapa banyak
pager berturut-turut yang boleh ditugaskan kepada satu individu, menurunkan bagian kedua
insinyur itu menjadi di bawah 25% dalam enam bulan, dengan peningkatan yang sejalan pada
kesejahteraan yang mereka laporkan.

**Pemerintahan.** Tim rekayasa on-call sebuah perusahaan air daerah beroperasi dengan rotasi
nominal empat orang untuk pemantauan infrastruktur kritis, tetapi data pemanfaatan kapasitas
menunjukkan bahwa satu stasiun pompa tua tertentu, yang secara konsisten berjalan mendekati
batas operasionalnya, menghasilkan hampir separuh seluruh pager di seluruh rotasi.
Peningkatan kapasitas pada satu stasiun pompa itu, yang didanai langsung dengan memakai
korelasi frekuensi pager terhadap kapasitas sebagai bukti pendukung konkret dalam
permintaan anggaran, mengurangi total volume pager seluruh organisasi sekitar 40% dalam
tahun berikutnya, menunjukkan bahwa beban on-call itu sebagian besar sebenarnya masalah
kapasitas yang menyamar, bukan semata masalah penempatan staf atau proses.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari pengelolaan beban on-call dan kapasitas secara sengaja adalah pengunduran
diri yang terhindarkan dan penurunan keandalan yang terhindarkan akibat penanggap yang
kelelahan mengambil keputusan yang lebih lambat dan lebih rawan kesalahan. Contoh perusahaan
infrastruktur awan di atas menunjukkan langsung risiko yang berlipat: konsentrasi yang tidak
dikelola menciptakan paparan burnout dan bus-factor sekaligus, yang diselesaikan oleh upaya
penyeimbangan ulang yang lugas dan berbasis data dengan biaya yang kecil dibandingkan risiko
kehilangan salah satu insinyur senior itu karena pengunduran diri.

Total biaya kepemilikan mencakup instrumentasi untuk melacak distribusi pager tingkat
individu (dipakai dengan hati-hati, hanya secara agregat) dan, bila diindikasikan, investasi
kapasitas sejati untuk mengurangi volume pager di sumbernya. Contoh perusahaan air
menunjukkan investasi ini bisa membayar dirinya sendiri secara langsung dan terukur, karena
satu perbaikan kapasitas yang tepat sasaran mengurangi beban operasional seluruh organisasi
secara substansial.

## Anti-pola dan jebakan

- **Hanya melacak jumlah pager rata-rata tingkat tim:** menyembunyikan konsentrasi individu
  yang parah yang mendorong risiko burnout dan bus-factor.
- **Menganggap jadwal rotasi nominal mencerminkan kenyataan:** jadwal yang secara efektif
  bergantung pada dua atau tiga orang tidak berkelanjutan berapa pun banyaknya nama yang
  tercantum.
- **Memakai data respons pager individu untuk mengevaluasi kinerja:** mengulang jebakan
  evaluasi individu yang diperingatkan buku ini di berbagai tempat, di sini diterapkan pada
  beban operasional.
- **Menerima volume pager yang tinggi sebagai biaya tak terhindarkan dari keandalan alih-alih
  menyelidiki kapasitas sebagai akar masalah:** melewatkan perbaikan langsung yang sering
  tersedia.
- **Tidak pernah menghubungkan data beban on-call dengan data survei kesejahteraan:**
  melewatkan kesempatan untuk mengenali dan menindaklanjuti risiko burnout yang berlipat
  sebelum muncul sebagai pengunduran diri.
- **Mengabaikan biaya psikologis berjaga on-call dengan nol pager yang sebenarnya:**
  menghitung terlalu rendah beban sesungguhnya dari sebuah rotasi.

## Model kematangan

- **Level 1, Initiate (Memulai):** Beban on-call sama sekali tidak dilacak, atau hanya
  dilacak sebagai rata-rata seluruh tim yang menyembunyikan konsentrasi individu.
- **Level 2, Develop (Mengembangkan):** Ada sebagian data pager tingkat individu, tetapi
  tidak terhubung dengan data survei kesejahteraan atau keputusan investasi kapasitas.
- **Level 3, Standardize (Menstandarkan):** Distribusi pager tingkat individu dan korelasi
  pemanfaatan kapasitas dilacak secara konsisten, dengan batas keberlanjutan yang eksplisit
  untuk frekuensi rotasi.
- **Level 4, Manage (Mengelola):** Data beban on-call dipakai secara aktif untuk mendorong
  investasi kapasitas dan penyeimbangan ulang rotasi, terhubung secara eksplisit dengan
  sinyal survei kesejahteraan.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi dapat menunjuk perbaikan spesifik
  yang terukur pada beban operasional maupun kesejahteraan dari investasi kapasitas yang
  terarah dan perancangan ulang rotasi, dan penempatan staf on-call yang berkelanjutan
  menjadi masukan rutin yang terjustifikasi dengan baik bagi perencanaan jumlah personel dan
  infrastruktur.

## Gagasan untuk diskusi

1. Seperti apa distribusi pager tingkat individu kita yang sebenarnya saat ini?
2. Apakah jadwal rotasi nominal kita mencerminkan siapa yang sebenarnya menyelesaikan sebagian besar insiden?
3. Investasi kapasitas tunggal mana yang paling mengurangi volume pager kita saat ini?
4. Pernahkah kita menghubungkan data beban on-call dengan sinyal survei kesejahteraan?
5. Berapa biaya yang harus kita tanggung bila kehilangan insinyur yang paling sering menerima pager karena burnout?

## Poin-poin utama

- Beban on-call adalah **sumber daya yang dapat diukur dan dikelola**; lacak distribusi
  tingkat individu, bukan hanya rata-rata seluruh tim yang bisa menyembunyikan konsentrasi
  yang parah.
- Berjaga on-call membawa **biaya psikologis bahkan dengan nol pager yang sebenarnya**; ukur
  ini secara terpisah dari kepuasan umum.
- **Perencanaan kapasitas dan beban on-call terhubung langsung**; infrastruktur yang
  kekurangan penyediaan menghasilkan lebih banyak pager dan beban.
- Gunakan data on-call untuk **keputusan penempatan staf dan kapasitas**, jangan pernah untuk
  evaluasi kinerja individu.
- Sistem on-call yang berkelanjutan **melindungi keandalan itu sendiri**, karena penanggap
  yang kelelahan mengambil keputusan yang lebih lambat dan lebih rawan kesalahan.

## Referensi dan bacaan lanjutan

- *Site Reliability Engineering: How Google Runs Production Systems*, by
  Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds.
  (praktik on-call dan beban operasional yang berkelanjutan).
- *The Site Reliability Workbook*, by Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, and Stephen Thorne, eds. (panduan praktis
  perancangan rotasi on-call).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, by Christina Maslach and Michael P. Leiter (penyebab dan
  intervensi organisasi untuk burnout, berlaku untuk stres on-call).
- *Seeking SRE: Conversations About Running Production Systems at Scale*,
  edited by David N. Blank-Edelman (perspektif praktisi tentang praktik
  operasi yang berkelanjutan).
