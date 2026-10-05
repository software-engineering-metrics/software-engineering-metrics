# 6.1 Indikator, sasaran, dan anggaran kesalahan tingkat layanan

## Gambaran umum dan motivasi

**[Rekayasa keandalan situs](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(site reliability engineering, SRE)**, disiplin yang dipelopori di Google dan didokumentasikan
dalam buku *Site Reliability Engineering*, menyumbangkan kosakata yang menjadi dasar langsung
topik ini: **indikator tingkat layanan (service level indicator, SLI)** adalah sinyal yang
diukur langsung tentang kesehatan sebuah layanan, misalnya latensi permintaan, tingkat
kesalahan, atau ketersediaan. **Sasaran tingkat layanan (service level objective, SLO)**
adalah rentang target untuk indikator itu, misalnya 99,9% permintaan berhasil dalam 200
milidetik. Lalu **anggaran kesalahan (error budget)** adalah kekurangan yang diizinkan, yaitu
0,1% permintaan yang boleh gagal, yang diperlakukan bukan sebagai cacat yang harus
dihilangkan melainkan sebagai sumber daya yang bisa dibelanjakan, untuk mengambil risiko
secara sengaja: merilis perubahan yang berisiko, menjalankan eksperimen, atau sekadar
menerima bahwa keandalan sempurna tidak bisa dicapai dan, melewati titik tertentu, tidak
sepadan dengan biayanya.

Gagasan terakhir ini, anggaran kesalahan sebagai sumber daya yang bisa dibelanjakan dan bukan
angka yang diminimalkan hingga nol, adalah konsep terpenting dalam topik ini dan boleh
dibilang dalam seluruh bagian ini. Gagasan ini menyelesaikan ketegangan yang menghantui
banyak organisasi: tim rekayasa ingin merilis fitur dan mengambil risiko yang wajar; tim
operasi menginginkan stabilitas maksimum. Tanpa anggaran kesalahan yang terkuantifikasi dan
dibagikan bersama, hal ini menjadi negosiasi tanpa akhir yang sarat politik. Dengan anggaran
itu, hal ini menjadi aturan yang sederhana dan objektif: belanjakan dengan bebas selama
anggaran masih ada, dan perlambat laju serta prioritaskan pekerjaan stabilitas secara
otomatis begitu anggaran habis. Ini mengubah perbedaan pendapat yang bersifat filosofis
menjadi perhitungan aritmetika.

Bagi tim besar, SLO dan anggaran kesalahan adalah yang membuat keandalan dapat diukur dan
dinegosiasikan, bukan kemutlakan yang tak tercapai dan tak pernah dinyatakan, yang diam-diam
gagal dipenuhi setiap tim sambil merasa bersalah tanpa tahu persis kenapa. Organisasi
perusahaan besar memakai SLO untuk menetapkan ekspektasi yang jelas dan kontraktual antartim
dan dengan pelanggan; organisasi pemerintahan yang mengoperasikan infrastruktur publik yang
kritis memakainya untuk menetapkan target keandalan yang dapat dipertanggungjawabkan dan
dibenarkan di hadapan publik, bukan standar kesempurnaan mustahil yang tidak sanggup
dipertahankan sistem nyata mana pun.

## Prinsip utama

- **Keandalan 100% adalah target yang salah untuk hampir semua sistem.** Target itu biasanya
  tidak tercapai, dan mengejarnya melewati titik tertentu justru mengorbankan kecepatan tanpa
  manfaat berarti bagi pengguna.
- **SLO harus mencerminkan apa yang benar-benar dirasakan dan dipedulikan pengguna**, bukan
  angka bulat sembarang yang dipilih karena terdengar menenangkan.
- **Anggaran kesalahan mengubah keandalan menjadi sumber daya yang bisa dibelanjakan**,
  memberi tim rekayasa dan tim operasi aturan bersama yang objektif tentang kapan harus
  merilis dengan cepat dan kapan harus melambat.
- **SLI harus diukur dari pengalaman nyata pengguna** sedapat mungkin, bukan hanya dari
  kesehatan sistem internal yang dilaporkan sendiri.
- **Habisnya anggaran kesalahan memicu respons yang sudah ditentukan dan disepakati**, bukan
  perdebatan ad hoc setiap kali itu terjadi.

## Rekomendasi

### Pilih SLI yang mencerminkan pengalaman pengguna yang sebenarnya

Pilih indikator yang diukur sedekat mungkin dengan pengalaman pengguna yang sebenarnya:
tingkat keberhasilan dan latensi permintaan yang diukur di tepi jaringan atau di penyeimbang
beban (load balancer), bukan sekadar pemeriksaan kesehatan layanan internal yang bisa
melaporkan "sehat" sementara pengguna mengalami masalah nyata. SLI yang mengukur sesuatu yang
tidak pernah dirasakan pengguna, misalnya komponen internal yang secara teknis hidup
sementara permintaan secara keseluruhan tetap gagal, mengukur hal yang salah betapapun
mudahnya diinstrumentasi.

### Tetapkan target SLO berdasarkan kebutuhan pengguna yang sebenarnya, bukan angka bulat sembarang

Tahan refleks untuk menetapkan target seperti "uptime 99,99%" hanya karena terdengar
mengesankan dan ketat. Sebaliknya, teliti tingkat keandalan apa yang benar-benar dirasakan
dan dipedulikan pengguna, dengan berbekal data insiden historis, riset pengguna, dan biaya
nyata untuk mencapai setiap kenaikan keandalan berikutnya, karena beranjak dari 99,9% ke
99,99% sering memerlukan upaya rekayasa jauh lebih besar daripada beranjak dari 99% ke 99,9%,
untuk manfaat yang kian menipis dan akhirnya tak terasa oleh pengguna.

### Perlakukan anggaran kesalahan sebagai sumber daya yang bisa dibelanjakan dengan respons yang sudah ditentukan saat habis

Hitung anggaran kesalahan langsung dari SLO (target ketersediaan 99,9% selama 30 hari
mengizinkan sekitar 43 menit waktu henti) dan lacak pembelanjaannya secara terus-menerus.
Sepakati sejak awal, sebelum ada insiden tertentu, apa yang terjadi ketika anggaran habis:
kebijakan umum yang efektif adalah pekerjaan fitur dijeda dan prioritas tim beralih otomatis
ke pekerjaan keandalan sampai anggaran pulih. Aturan yang sudah ditentukan ini
menghilangkan kebutuhan untuk memperdebatkan ulang pertukaran tersebut di bawah tekanan pada
setiap insiden.

### Gunakan anggaran kesalahan untuk mengambil keputusan risiko yang sengaja dan terinformasi

Anggaran kesalahan yang sehat dan belum terpakai bukan untuk ditimbun; itu adalah izin untuk
mengambil risiko yang wajar, merilis perubahan dengan risiko yang lebih tinggi tetapi masih
dapat diterima, menjalankan eksperimen chaos engineering (topik chaos engineering dalam buku
pendamping `software-engineering-guide` membahasnya secara langsung), atau menerima perubahan
arsitektur yang lebih berisiko, karena anggaran itu memang ada untuk dibelanjakan dengan
sengaja, bukan disimpan tanpa tersentuh. Anggaran kesalahan yang tidak pernah terpakai
menunjukkan tim yang terlalu konservatif atau SLO yang ditetapkan terlalu longgar
dibandingkan keandalan yang sebenarnya dicapai; keduanya layak diselidiki.

### Tinjau dan revisi SLO secara berkala, berdasarkan bukti, bukan kelembaman

SLO yang ditetapkan bertahun-tahun lalu mungkin tidak lagi mencerminkan ekspektasi pengguna,
arsitektur sistem, atau prioritas bisnis saat ini. Tinjau SLO pada irama yang teratur,
dengan memeriksa keandalan historis yang tercapai, umpan balik pengguna, dan apakah target
itu masih mewakili titik pertukaran yang bermakna, bukan target yang mudah dipenuhi dan
sebenarnya bisa diperketat agar kecepatan di tempat lain meningkat, atau target tidak
realistis yang secara praktis sudah ditinggalkan tim.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa SLO formal ("seandal mungkin" secara implisit) | Tidak ada beban untuk menyiapkannya | Negosiasi tanpa dasar dan tanpa akhir antara kecepatan dan stabilitas; tidak ada aturan bersama |
| SLO aspiratif yang sangat tinggi (99,99%+) | Menandakan keseriusan terhadap keandalan | Sering menimbulkan biaya yang tidak perlu; hasil yang menurun melewati apa yang benar-benar dirasakan pengguna |
| SLO berbasis bukti dan berpijak pada pengalaman pengguna | Mencerminkan nilai yang sebenarnya; dapat dipertanggungjawabkan dan dicapai | Memerlukan data dan analisis nyata agar ditetapkan dengan benar |
| Anggaran kesalahan dengan respons yang sudah ditentukan saat habis | Menghilangkan negosiasi ad hoc; pengambilan keputusan objektif dan cepat | Memerlukan dukungan organisasi dan disiplin untuk benar-benar menaati aturan yang sudah ditentukan |

Ketegangan utamanya adalah **aspirasi versus keterjangkauan**. SLO yang tinggi dan aspiratif
terasa menandakan keseriusan terhadap kualitas, tetapi mengejar keandalan melewati apa yang
benar-benar dirasakan pengguna mengorbankan kecepatan yang nyata tanpa manfaat sejati, dan
target tidak realistis yang tidak pernah dipenuhi tim mengajarkan semua orang untuk berhenti
menganggap SLO serius sama sekali. Selesaikan ketegangan ini dengan mendasarkan SLO pada
bukti yang nyata, yaitu apa yang dirasakan pengguna, apa yang secara historis dicapai
sistem, berapa biaya setiap kenaikan berikutnya, bukan pada aspirasi atau keinginan tampak
ketat di papan skor.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah SLO kita saat ini berpijak pada bukti tentang apa yang benar-benar dirasakan
   pengguna, atau ditetapkan secara aspiratif karena angka yang tinggi terasa pantas dan
   serius?** Telusuri asal-usul target Anda saat ini, bila bisa, dan nilai dengan jujur
   apakah target itu mencerminkan riset pengguna yang nyata atau hanya intuisi rekayasa.

2. **Apakah kita punya respons yang sudah ditentukan dan disepakati saat anggaran kesalahan
   habis, atau pertukaran itu diperdebatkan ulang setiap kali terjadi?** Jika jawaban jujurnya
   yang terakhir, kesenjangan itu layak ditutup sebelum insiden berikutnya memaksa perdebatan
   itu terjadi di bawah tekanan.

3. **Apakah anggaran kesalahan kita pernah benar-benar dibelanjakan dengan sengaja, untuk
   perubahan berisiko terukur atau eksperimen, atau hanya habis secara tidak sengaja lewat
   insiden?** Anggaran yang tidak pernah dibelanjakan dengan sengaja bisa menandakan tim yang
   terlalu berhati-hati dan melewatkan peluang sah yang justru menjadi alasan anggaran itu
   ada.

4. **Apakah SLI kita diukur dari pengalaman pengguna yang sebenarnya, atau dari kesehatan
   sistem internal yang mungkin tidak mencerminkan apa yang dialami pengguna?** Periksa
   instrumentasi Anda saat ini terhadap perbedaan spesifik ini; ini kesenjangan yang umum
   bahkan dalam program keandalan yang sudah cukup matang.

5. **Kapan terakhir kali kita meninjau SLO terhadap bukti terkini, dan apakah ada yang
   berubah, ekspektasi pengguna, arsitektur sistem, prioritas bisnis, yang membenarkan
   revisi?** Jika Anda tidak ingat ada tinjauan baru-baru ini, ketiadaan itu sendiri layak
   dibahas.

6. **Berapa biaya yang harus kita keluarkan, dalam upaya rekayasa, untuk menaikkan SLO kita
   satu "sembilan" lagi, dan apakah biaya itu sepadan dengan manfaat nyata bagi pengguna?**
   Kerangka untung-rugi yang konkret ini membantu mendasarkan ketegangan aspirasi-versus-
   keterjangkauan pada angka nyata, bukan preferensi abstrak.

## Lensa sektor

**Startup.** SLO formal sering tidak diperlukan pada tahap sangat awal, ketika tim dapat
menanggapi masalah keandalan secara langsung dan informal. Terapkan setidaknya SLO kasar dan
informal begitu Anda punya pelanggan berbayar yang bergantung pada uptime, karena disiplin
target yang eksplisit, bahkan yang dilacak secara longgar, membantu memprioritaskan pekerjaan
keandalan terhadap tekanan fitur lebih awal daripada yang terpikir oleh kebanyakan perusahaan
muda.

**Usaha kecil.** Kebanyakan platform hosting dan observabilitas modern melaporkan data uptime
dan latensi dasar dengan penyiapan minimal; manfaatkan itu untuk menetapkan SLO yang
sederhana dan dapat dicapai, bukan yang aspiratif yang tidak realistis untuk Anda lacak atau
tindak lanjuti dengan kapasitas operasional yang terbatas.

**Perusahaan besar.** SLO pada skala ini sering menopang perjanjian tingkat layanan
kontraktual dengan konsekuensi finansial nyata, sehingga penetapan target berbasis bukti dan
pengelolaan anggaran kesalahan yang disiplin menjadi sangat penting. Investasikan pada SLI
yang berpijak pada pengalaman pengguna yang sebenarnya, bukan pemeriksaan kesehatan internal
yang praktis, dan tetapkan kebijakan respons saat anggaran habis secara formal, dengan
dukungan eksekutif, sebelum kebijakan itu dibutuhkan di bawah tekanan.

**Pemerintahan.** Target keandalan sektor publik untuk infrastruktur kritis kadang membawa
bobot hukum atau regulasi, dan target tidak realistis yang tidak tercapai dan terungkap saat
audit atau insiden publik merusak kredibilitas institusi secara signifikan. Tetapkan target
berdasarkan kebutuhan pengguna dan misi yang nyata dan terdokumentasi, dan bersikaplah
transparan kepada publik tentang pertukaran sengaja yang diwakili anggaran kesalahan, bukan
menyiratkan standar kesempurnaan yang tak tercapai.

## Contoh

**Perusahaan besar.** Sebuah perusahaan penyimpanan awan selama bertahun-tahun menargetkan
"uptime maksimum" tanpa SLO formal, sehingga muncul ketegangan kronis yang tak terselesaikan
antara tim produk (yang ingin merilis fitur dengan cepat) dan tim infrastruktur (yang ingin
kehati-hatian maksimum), yang diperdebatkan dari awal di setiap rapat perencanaan rilis.
Penerapan SLO ketersediaan 99,95% yang formal dengan anggaran kesalahan eksplisit dan
kebijakan yang sudah ditentukan, pekerjaan fitur dijeda otomatis saat anggaran habis,
menyelesaikan negosiasi berulang itu sepenuhnya: kedua tim bisa melihat angka yang sama dan
menyepakati aturan yang sama, dan perusahaan melaporkan peningkatan terukur dalam fitur yang
dirilis selama periode anggaran sehat, bersama perlambatan terukur yang disengaja pada dua
periode dalam setahun berikutnya ketika anggaran benar-benar habis, persis seperti yang
dimaksudkan kebijakan itu.

**Pemerintahan.** Sistem peringatan publik sebuah dinas cuaca nasional selama bertahun-tahun
beroperasi di bawah ekspektasi informal "selalu tersedia", tanpa target terdokumentasi dan
dengan tekanan operasional besar yang tidak tertangani pada tim on-call yang berusaha
memenuhi standar yang tak dinyatakan dan secara praktis mustahil. SLO formal yang baru
diadopsi, ketersediaan 99,9% dengan penjelasan anggaran kesalahan yang dikomunikasikan jelas
kepada publik, memberi tim operasi izin yang eksplisit dan dapat dipertanggungjawabkan untuk
menjadwalkan jendela pemeliharaan terencana dalam anggaran, sesuatu yang sebelumnya sulit
dilakukan secara politik di bawah ekspektasi tak tertulis "selalu tersedia", bahkan ketika
pemeliharaan itu sungguh diperlukan bagi kesehatan sistem jangka panjang. Komunikasi publik
yang menjelaskan konsep anggaran kesalahan secara langsung, bukan menyembunyikannya,
disambut baik sebagai tanda praktik operasional yang jujur dan dewasa, bukan melemahnya
komitmen pada kualitas layanan.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari penerapan SLO dan anggaran kesalahan secara formal adalah terselesaikannya
negosiasi yang tanpa akhir dan mahal secara politik antara kecepatan dan stabilitas dengan
satu aturan bersama yang objektif. Contoh penyimpanan awan di atas menunjukkannya secara
konkret: bertahun-tahun ketegangan berulang yang tak terselesaikan antara dua tim berakhir
dengan satu target formal dan satu kebijakan yang sudah ditentukan, membebaskan energi
organisasi yang signifikan yang sebelumnya terpakai untuk memperdebatkan ulang pertukaran
yang sama berulang kali.

Total biaya kepemilikan mencakup upaya analisis untuk menetapkan target berbasis bukti dengan
benar dan disiplin untuk menaati respons saat anggaran habis, bahkan di bawah tekanan untuk
tetap merilis fitur yang sangat diinginkan. Biaya disiplin itu nyata, tetapi jauh lebih
rendah daripada biaya berkelanjutan dari negosiasi kronis yang tak terselesaikan dan menyedot
energi organisasi di setiap siklus perencanaan tanpa henti.

## Anti-pola dan jebakan

- **Menetapkan SLO aspiratif tanpa bukti di baliknya:** menghasilkan target tidak realistis
  yang tak lagi ditanggapi serius oleh tim, atau target yang mahal tanpa perlu demi manfaat
  yang tidak dirasakan pengguna.
- **Tidak ada respons yang sudah ditentukan saat anggaran kesalahan habis:** memaksa
  perdebatan pertukaran yang sulit itu terjadi di bawah tekanan setiap kali hal itu terjadi.
- **Mengukur SLI dari kesehatan sistem internal, bukan pengalaman pengguna yang sebenarnya:**
  bisa melaporkan "sehat" sementara pengguna mengalami masalah nyata.
- **Tidak pernah membelanjakan anggaran kesalahan yang sehat dengan sengaja:** bisa
  menandakan kehati-hatian berlebihan dan peluang sah yang terlewat.
- **Menetapkan target sekali lalu tidak pernah meninjaunya lagi:** SLO bisa menjadi usang
  ketika ekspektasi pengguna, arsitektur, dan prioritas berubah.
- **Memperlakukan kebijakan anggaran kesalahan sebagai opsional di bawah tekanan:** aturan
  yang sudah ditentukan tetapi dikesampingkan setiap kali merepotkan tidak memberi nilai
  nyata bagi pengambilan keputusan.

## Model kematangan

- **Level 1, Initiate (Memulai):** Target keandalan bersifat implisit atau aspiratif, tanpa
  SLO, SLI, atau anggaran kesalahan yang formal.
- **Level 2, Develop (Mengembangkan):** Beberapa layanan punya SLO informal, tetapi SLI-nya
  mungkin tidak mencerminkan pengalaman pengguna yang sebenarnya dan belum ada kebijakan yang
  sudah ditentukan saat anggaran habis.
- **Level 3, Standardize (Menstandarkan):** SLO berbasis bukti dengan SLI pengalaman pengguna
  yang sebenarnya dan kebijakan yang sudah ditentukan saat anggaran kesalahan habis
  diterapkan secara konsisten di seluruh layanan kritis.
- **Level 4, Manage (Mengelola):** Anggaran kesalahan dibelanjakan secara aktif dan sengaja
  untuk pengambilan risiko terukur, dan SLO ditinjau serta direvisi pada irama yang teratur
  berdasarkan bukti.
- **Level 5, Orchestrate (Mengorkestrasi):** SLO dan anggaran kesalahan terintegrasi di
  seluruh organisasi sebagai mekanisme bersama yang objektif untuk menyeimbangkan kecepatan
  dan stabilitas, dan organisasi dapat menunjuk keputusan-keputusan spesifik yang dimungkinkan
  kerangka ini, yang tidak akan terselesaikan seefektif itu oleh negosiasi tanpa dasar.

## Gagasan untuk diskusi

1. Apakah SLO kita saat ini berpijak pada bukti, atau pada aspirasi?
2. Apakah kita punya respons yang sudah ditentukan saat anggaran kesalahan habis dan benar-benar akan kita taati di bawah tekanan?
3. Kapan terakhir kali kita sengaja membelanjakan anggaran kesalahan yang sehat untuk risiko terukur?
4. Apakah SLI kita mengukur pengalaman pengguna yang sebenarnya, atau pemeriksaan kesehatan internal yang praktis?
5. Berapa biaya untuk menaikkan SLO kita satu "sembilan" lagi, dan apakah biaya itu sepadan?

## Poin-poin utama

- **Indikator tingkat layanan (SLI)** mengukur pengalaman pengguna yang sebenarnya;
  **sasaran tingkat layanan (SLO)** adalah targetnya yang berbasis bukti; **anggaran
  kesalahan** adalah kekurangan yang diizinkan dan sengaja dibelanjakan.
- **Keandalan 100% biasanya target yang salah**; dasarkan SLO Anda pada apa yang benar-benar
  dirasakan pengguna dan biaya sebenarnya dari setiap kenaikan berikutnya.
- Perlakukan anggaran kesalahan sebagai **sumber daya yang bisa dibelanjakan dengan respons
  yang sudah ditentukan saat habis**, sehingga tidak perlu lagi memperdebatkan ulang
  kecepatan-versus-stabilitas di bawah tekanan setiap kali.
- Ukur SLI dari **pengalaman pengguna yang sebenarnya**, bukan sekadar pemeriksaan kesehatan
  internal yang praktis.
- **Tinjau dan revisi SLO secara berkala**, berdasarkan bukti, karena target yang usang
  kehilangan kegunaannya seiring sistem dan penggunanya berubah.

## Referensi dan bacaan lanjutan

- *Site Reliability Engineering: How Google Runs Production Systems*, by
  Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds.
  (teks dasar yang mendefinisikan SLI, SLO, dan anggaran kesalahan).
- *The Site Reliability Workbook*, by Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, and Stephen Thorne, eds. (panduan praktis
  untuk menerapkan SLO dan anggaran kesalahan).
- *Implementing Service Level Objectives*, by Alex Hidalgo (panduan komprehensif
  yang berfokus pada praktisi untuk merancang dan mengoperasikan SLO).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (hubungan antara praktik keandalan dan kinerja
  pengiriman).
