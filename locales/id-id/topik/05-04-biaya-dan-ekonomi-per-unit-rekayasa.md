# 5.4 Biaya dan ekonomi per unit rekayasa

## Gambaran umum dan motivasi

Topik ini membawa Bagian 5 secara eksplisit ke ranah keuangan: bagaimana
menyatakan biaya rekayasa dalam istilah yang dapat langsung dipakai
pemangku kepentingan keuangan, dan bagaimana membangun **ekonomi per
unit** (unit economics), yaitu biaya yang dinyatakan per unit keluaran atau
penggunaan yang bermakna, bukan sebagai pos anggaran departemen agregat
yang buram. Biaya rekayasa biasanya merupakan pos pengeluaran terbesar
yang dapat dikendalikan dalam organisasi yang digerakkan perangkat lunak,
namun sering kali paling kurang dipahami oleh fungsi keuangan, dilaporkan
sebagai satu angka besar dengan sedikit visibilitas tentang apa yang
mendorongnya atau bagaimana ia berskala seiring pertumbuhan. Topik ini ada
untuk menutup celah itu, karena pemimpin rekayasa yang tidak dapat
menjawab "berapa biaya kita untuk menjalankan sistem ini" atau "bagaimana
biaya kita berskala saat kita tumbuh" dalam istilah keuangan yang konkret
berada pada posisi yang benar-benar dirugikan dalam setiap percakapan
anggaran.

Disiplin spesifik yang direkomendasikan topik ini, ekonomi per unit,
berarti menyatakan biaya per deployment, per pelanggan yang dilayani, per
transaksi yang diproses, atau unit lain yang benar-benar penting bagi
bisnis, bukan hanya sebagai total biaya tenaga kerja atau total belanja
cloud. Pembingkaian ulang ini terhubung langsung dengan prinsip hasil di
atas keluaran pada topik 1.3: angka total biaya yang turun tidak otomatis
baik jika berasal dari melayani lebih sedikit pelanggan, dan angka total
biaya yang naik tidak otomatis buruk jika berasal dari melayani jauh lebih
banyak pelanggan secara proporsional. Ekonomi per unit membuat tren biaya
dapat ditafsirkan, bukan sekadar terlihat.

Bagi tim besar, disiplin topik ini mengubah keuangan rekayasa dari kotak
hitam menjadi sistem yang terbaca dan dapat dikelola. Organisasi perusahaan
besar memakai ekonomi per unit untuk membandingkan efisiensi biaya berbagai
produk, platform, atau tim secara adil; organisasi pemerintahan memakai
disiplin yang sama untuk menunjukkan tanggung jawab fiskal dan membangun
kasus berbasis bukti bagi investasi infrastruktur yang akan menurunkan
biaya per warga yang dilayani dari waktu ke waktu.

## Prinsip utama

- **Total biaya saja tidak dapat ditafsirkan tanpa penyebut.** Ekonomi per
  unit, biaya per unit yang bermakna, mengubah angka yang buram menjadi
  tren yang dapat ditindaklanjuti.
- **Pilih unit yang mencerminkan nilai bisnis atau misi yang sejati**, bukan
  penyebut yang sembarang atau mudah dimanipulasi.
- **Biaya memiliki beberapa komponen: orang, infrastruktur, dan perangkat.**
  Lacak secara terpisah, karena masing-masing memiliki pendorong biaya yang
  berbeda dan tuas yang berbeda untuk ditarik.
- **Praktik FinOps membawa ketelitian yang sama pada biaya cloud seperti
  yang dibawa buku ini pada metrik pengiriman dan kualitas.** Perlakukan
  biaya sebagai hal yang dapat diukur dan dikelola, bukan sebagai
  keniscayaan yang buram dan tak terelakkan.
- **Total biaya yang turun tidak otomatis baik, dan yang naik tidak
  otomatis buruk**, tanpa memeriksa apa yang terjadi pada ukuran per unit
  pada saat yang sama.

## Rekomendasi

### Pilih unit yang mencerminkan nilai nyata yang disampaikan, bukan
penyebut sembarang

Pilih unit untuk perhitungan ekonomi per unit Anda yang benar-benar
melacak nilai bisnis atau misi: biaya per pelanggan yang dilayani, biaya
per transaksi yang diproses, biaya per deployment, atau biaya per
interaksi warga yang ditangani untuk layanan sektor publik. Hindari
penyebut yang terlalu mudah digelembungkan untuk memperbagus rasio, seperti
hitungan internal yang sebagian besar bersifat diskresioner dan tidak
sesuai dengan unit eksternal sejati mana pun dari nilai yang disampaikan.

### Pisahkan biaya orang, infrastruktur, dan perangkat

Biaya rekayasa memiliki setidaknya tiga komponen berbeda dengan pendorong
dan tuas yang berbeda: biaya orang (gaji, tunjangan, sebagian besar tetap
dalam jangka pendek), biaya infrastruktur (belanja cloud, sebagian besar
variabel menurut penggunaan dan dapat dioptimalkan langsung lewat praktik
rekayasa), dan biaya perangkat dan lisensi (sering kali biaya tetap per
kursi atau per tingkat penggunaan). Lacak ini secara terpisah, bukan
sebagai satu total campuran, karena kenaikan total biaya yang didorong
infrastruktur yang berskala bersama pertumbuhan sejati membutuhkan
tanggapan yang sangat berbeda dari kenaikan total yang sama yang didorong
oleh perangkat yang menjalar tanpa kendali.

### Terapkan disiplin FinOps khusus pada biaya infrastruktur cloud

**[FinOps](https://en.wikipedia.org/wiki/FinOps)** adalah disiplin yang
membawa akuntabilitas keuangan pada belanja cloud yang variabel melalui
kolaborasi lintas fungsi antara tim rekayasa, keuangan, dan bisnis.
Terapkan praktik intinya secara langsung: beri tag sumber daya cloud
menurut tim dan layanan untuk atribusi biaya, tinjau belanja terhadap
anggaran secara berkala, dan perlakukan efisiensi biaya infrastruktur
(biaya per unit penggunaan aktual) sebagai metrik rekayasa yang layak
dioptimalkan dengan sengaja, bukan overhead tetap yang tak terelakkan
untuk sekadar diterima.

### Lacak tren biaya per unit dari waktu ke waktu, dan selidiki pergerakannya secara eksplisit

Satu potret biaya per unit kurang berguna daripada trennya: apakah biaya
per pelanggan yang dilayani turun seiring platform matang dan berskala
(tanda peningkatan efisiensi yang sejati), atau naik (tanda inefisiensi
yang menumpuk, utang teknis yang mendorong biaya pemeliharaan lebih
tinggi, atau pergeseran bauran pelanggan yang dilayani ke segmen yang
lebih padat sumber daya). Selidiki perubahan tren biaya per unit yang
signifikan secara eksplisit, alih-alih melaporkan angkanya tanpa
penjelasan.

### Hubungkan data biaya dengan utang teknis dan metrik kualitas di bagian lain buku ini

Biaya infrastruktur atau pemeliharaan per unit yang naik kadang merupakan
akibat langsung yang terukur dari utang teknis yang menumpuk (topik 4.5)
atau menjamurnya titik panas kompleksitas (topik 4.1, topik 4.3): jalur
kode yang tidak efisien, infrastruktur yang redundan, dan kueri yang
kurang dioptimalkan semuanya akhirnya muncul sebagai biaya per unit yang
meningkat. Pakailah kenaikan biaya per unit sebagai salah satu masukan,
bersama sinyal churn dan kompleksitas dari Bagian 4, dalam diskusi
prioritisasi utang Anda, karena butir utang dengan dampak biaya yang
terbukti dan terukur membuat kasus yang lebih kuat bagi investasi
perbaikan daripada keluhan kualitas yang tidak dikuantifikasi saja.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Hanya melaporkan total biaya | Sederhana, sesuai dengan cara anggaran biasanya dialokasikan | Tidak dapat ditafsirkan tanpa penyebut; menyembunyikan tren efisiensi |
| Ekonomi per unit dengan penyebut yang dipilih dengan baik | Dapat ditafsirkan, dapat ditindaklanjuti, dapat dibandingkan lintas waktu dan tim | Membutuhkan kehati-hatian memilih unit yang benar-benar bermakna dan sulit dimanipulasi |
| Pelaporan biaya campuran (orang, infrastruktur, perangkat digabung) | Satu angka yang sederhana | Mengaburkan pendorong biaya mana yang sebenarnya berubah dan mengapa |
| Komponen biaya yang dipisahkan | Menunjukkan tuas yang tepat untuk ditarik bagi tren biaya tertentu | Membutuhkan atribusi biaya yang lebih rinci dan infrastruktur pelacakan |

Ketegangan utamanya adalah **kesederhanaan versus kemampuan
ditindaklanjuti**. Satu angka total biaya mudah dilaporkan dan sesuai
dengan cara banyak organisasi mengalokasikan anggaran, tetapi ia
mengaburkan apa yang mendorong perubahan biaya dan apakah perubahan itu
mencerminkan efisiensi sejati atau pertumbuhan sejati. Selesaikan
ketegangan itu dengan berinvestasi pada pelaporan ekonomi per unit dan
pemisahan komponen yang sedikit lebih rumit yang direkomendasikan topik
ini, karena kemampuan ditindaklanjuti yang dihasilkan, mengetahui persis
tuas mana yang harus ditarik saat biaya bergerak, sepadan dengan upaya
pelacakan tambahan yang sederhana bagi organisasi mana pun di atas skala
terkecil.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita melacak biaya rekayasa per unit yang bermakna (pelanggan,
   transaksi, deployment), atau hanya sebagai total yang buram?** Jika
   hanya ada total, tentukan unit apa yang akan membuat tren biaya Anda
   benar-benar dapat ditafsirkan dan diskusikan apa yang dibutuhkan untuk
   mulai melacaknya.

2. **Dapatkah kita memisahkan biaya kita saat ini menjadi komponen orang,
   infrastruktur, dan perangkat, dan apakah kita tahu mana yang mendorong
   perubahan terbaru?** Buka rincian biaya Anda yang sebenarnya, jika ada,
   dan periksa apakah cukup rinci untuk menjawab pertanyaan ini dengan
   yakin.

3. **Sudahkah kita menerapkan praktik tag dan atribusi FinOps pada biaya
   infrastruktur cloud kita, atau ia hanya satu butir yang tidak
   diatribusikan?** Jika belanja tidak dapat diatribusikan ke tim atau
   layanan tertentu, diskusikan seperti apa langkah pertama menuju atribusi
   yang sejati.

4. **Apakah tren biaya per unit kita bergerak signifikan ke salah satu arah
   belakangan ini, dan apakah kita tahu mengapa?** Selidiki pergerakan
   nyata yang baru terjadi, jika ada, dan lihat apakah Anda dapat
   menjelaskannya dengan yakin atau ia tetap menjadi misteri.

5. **Apakah tren biaya infrastruktur kita saat ini berkorelasi dengan
   sinyal utang teknis atau titik panas kompleksitas dari Bagian 4?**
   Silangkan sumber-sumber data ini secara eksplisit dan lihat apakah
   muncul hubungan yang dapat memperkuat kasus bisnis perbaikan utang.

6. **Jika besok seorang pemangku kepentingan keuangan bertanya "berapa
   biaya kita untuk melayani satu pelanggan lagi," dapatkah kita menjawab
   dengan yakin?** Pertanyaan konkret dan praktis ini menguji apakah
   ekonomi per unit Anda benar-benar sudah dibangun dan siap, atau sekadar
   aspirasi teoretis.

## Lensa sektor

**Startup.** Ekonomi per unit sangat penting sejak dini, karena investor
maupun pendiri perlu tahu apakah biaya melayani setiap pelanggan tambahan
mengarah ke keberlanjutan atau ke model bisnis yang tidak dapat berskala.
Lacak ini sejak sangat awal, bahkan dengan perkiraan kasar, alih-alih
menunggu sampai perusahaan cukup besar untuk membenarkan perangkat FinOps
yang formal.

**Usaha kecil.** Dasbor penagihan penyedia cloud biasanya memberikan
visibilitas biaya dasar yang cukup tanpa perangkat FinOps khusus; disiplin
utamanya adalah memilih unit yang masuk akal (biaya per pelanggan atau
biaya per transaksi) dan memeriksa trennya secara berkala, alih-alih hanya
melihat total tagihan secara terpisah.

**Perusahaan besar.** Praktik FinOps dan pelacakan komponen biaya yang
dipisahkan sangat esensial pada skala ini, ketika belanja cloud dapat
menjadi pos anggaran yang sangat besar dan sering kurang diawasi, yang
tersebar di banyak tim. Berinvestasilah pada tag atribusi biaya yang tepat
dan ritme tinjauan biaya khusus, dan pakailah ekonomi per unit untuk
membandingkan efisiensi biaya secara adil di berbagai lini produk atau
platform.

**Pemerintahan.** Tanggung jawab fiskal dan efisiensi biaya yang dapat
ditunjukkan berkaitan langsung dengan pembenaran anggaran dan akuntabilitas
publik. Ekonomi per unit yang dinyatakan sebagai biaya per warga yang
dilayani, atau biaya per transaksi yang diproses, sering kali merupakan
metrik yang jauh lebih meyakinkan dan dapat ditafsirkan bagi komite
anggaran daripada angka total belanja mentah, dan ia langsung mendukung
kasus bisnis bagi investasi infrastruktur yang menurunkan biaya per unit
dari waktu ke waktu.

## Contoh

**Perusahaan besar.** Tim keuangan sebuah perusahaan
software-as-a-service cemas melihat total belanja infrastruktur cloud
naik selama beberapa kuartal berturut-turut, dan awalnya mengira ada
inefisiensi atau pemborosan. Analisis ekonomi per unit, biaya per
pelanggan aktif, menunjukkan bahwa biaya per unit sebenarnya turun terus
meskipun total belanja naik, karena jumlah pelanggan tumbuh lebih cepat
daripada biaya infrastruktur, peningkatan efisiensi sejati yang tertutup
bila hanya melihat total belanja. Pembingkaian ulang ini menggeser
percakapan keuangan dari "mengapa rekayasa membelanjakan lebih banyak"
menjadi "bagaimana kita mempertahankan penskalaan yang efisien ini,"
diskusi yang jauh lebih produktif dan menghindarkan mandat pemotongan biaya
yang tidak perlu dan berpotensi merusak, yang akan menyasar belanja sehat
yang didorong pertumbuhan.

**Pemerintahan.** Badan layanan digital sebuah pemerintah negara bagian
diminta membenarkan investasi infrastruktur cloud yang berlanjut kepada
komite anggaran yang membandingkan biaya dengan sistem lama di lokasi
(on-premises) yang digantikannya. Analisis ekonomi per unit, biaya per
transaksi warga yang diproses, menunjukkan biaya per unit sistem berbasis
cloud yang baru jauh lebih rendah daripada sistem lama, meskipun total
belanja nominalnya lebih tinggi, karena sistem baru menangani volume
transaksi yang jauh lebih tinggi dengan anggaran infrastruktur total yang
sama atau lebih rendah. Perbandingan biaya per unit ini, bukan perbandingan
total belanja yang lebih sulit ditafsirkan, menjadi bukti utama dalam
kasus yang berhasil bagi investasi cloud yang berlanjut dan diperluas.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari ekonomi per unit yang ketat adalah jawaban yang dapat
dipertanggungjawabkan dan dapat ditafsirkan atas pertanyaan yang pada
akhirnya diajukan setiap pemangku kepentingan keuangan: apakah belanja ini
efisien, dan apakah ia berskala secara berkelanjutan. Contoh perusahaan
besar di atas menunjukkan risiko salah dalam hal ini: pandangan yang hanya
melihat total belanja hampir memicu mandat pemotongan biaya yang tidak
perlu dan kontraproduktif terhadap belanja yang, per unit, justru
menjadi lebih efisien, bukan kurang.

Total biaya kepemilikan mencakup perangkat atribusi biaya (praktik tag
FinOps) dan disiplin analitis untuk memisahkan komponen biaya dan melacak
tren per unit dari waktu ke waktu. Investasi itu sederhana dibandingkan
risiko mengambil keputusan anggaran yang signifikan, memotong belanja yang
sebenarnya efisien, atau gagal menangkap belanja yang benar-benar menjadi
tidak efisien, hanya berdasarkan pandangan total biaya yang kurang
terinformasi.

## Anti-pola dan jebakan

- **Melaporkan total biaya tanpa penyebut:** tidak dapat ditafsirkan dan
  menyembunyikan apakah biaya berskala secara efisien atau tidak efisien.
- **Memilih unit yang mudah dimanipulasi atau sembarang untuk perhitungan
  biaya:** menghasilkan rasio yang menyanjung alih-alih menginformasikan.
- **Mencampur biaya orang, infrastruktur, dan perangkat menjadi satu
  angka:** mengaburkan pendorong spesifik mana yang sebenarnya berubah dan
  tuas apa yang menanganinya.
- **Tidak ada atribusi biaya cloud (tag FinOps):** membuat belanja
  infrastruktur praktis tidak terkelola dan tidak dapat
  dipertanggungjawabkan di tingkat tim atau layanan.
- **Bereaksi pada perubahan total biaya tanpa memeriksa tren per unit:**
  dapat memicu mandat pemotongan biaya yang tidak perlu terhadap belanja
  yang sebenarnya efisien dan didorong pertumbuhan.
- **Tidak pernah menghubungkan tren biaya dengan data utang teknis atau
  kompleksitas:** melewatkan kasus terkuantifikasi yang lebih kuat bagi
  investasi perbaikan utang.

## Model kematangan

- **Tingkat 1, Initiate (Memulai):** Biaya rekayasa dilaporkan hanya
  sebagai total yang buram, tanpa ekonomi per unit atau pemisahan komponen.
- **Tingkat 2, Develop (Mengembangkan):** Sebagian rincian biaya sudah ada,
  tetapi ekonomi per unit tidak konsisten dan atribusi biaya cloud
  sebagian besar belum ada.
- **Tingkat 3, Standardize (Menstandarkan):** Ekonomi per unit dengan
  penyebut yang dipilih dengan baik dilacak secara konsisten, dengan biaya
  dipisahkan menjadi komponen orang, infrastruktur, dan perangkat di
  seluruh organisasi.
- **Tingkat 4, Manage (Mengelola):** Praktik atribusi dan tinjauan FinOps
  sudah mapan, dan tren biaya per unit diselidiki secara aktif serta
  dihubungkan dengan sinyal utang teknis dan kualitas.
- **Tingkat 5, Orchestrate (Mengorkestrasi):** Organisasi dapat menjawab
  dengan yakin pertanyaan rinci tentang biaya per unit dari pemangku
  kepentingan keuangan, dan data biaya secara langsung menjadi dasar
  keputusan investasi rekayasa maupun pembenaran anggaran di tingkat
  tertinggi.

## Gagasan untuk diskusi

1. Unit apa yang akan membuat tren biaya kita benar-benar dapat ditafsirkan, dan apakah kita melacaknya?
2. Dapatkah kita memisahkan perubahan biaya terbaru menjadi komponen orang, infrastruktur, dan perangkatnya?
3. Apakah ada bagian dari belanja infrastruktur kita saat ini yang tidak diatribusikan ke tim atau layanan tertentu?
4. Apakah tren biaya per unit kita bergerak belakangan ini, dan apakah kita tahu mengapa?
5. Di mana kenaikan biaya per unit mungkin merupakan gejala utang teknis yang belum ditangani?

## Poin-poin utama

- **Ekonomi per unit**, biaya per unit nilai yang bermakna, mengubah angka
  total biaya yang buram menjadi tren yang dapat ditafsirkan dan
  ditindaklanjuti.
- Pilih unit yang mencerminkan **nilai bisnis atau misi yang sejati**, dan
  hindari penyebut yang mudah dimanipulasi atau sembarang.
- Pisahkan biaya menjadi komponen **orang, infrastruktur, dan perangkat**,
  karena masing-masing memiliki pendorong dan tuas yang berbeda.
- Terapkan **disiplin FinOps** khusus pada biaya infrastruktur cloud,
  termasuk tag atribusi dan tinjauan berkala.
- Total biaya yang turun **tidak otomatis baik**, dan yang naik **tidak
  otomatis buruk**, tanpa memeriksa tren per unit di sampingnya.

## Referensi dan bacaan lanjutan

- *Cloud FinOps*, by J.R. Storment and Mike Fuller (teks dasar tentang
  praktik FinOps untuk pengelolaan biaya cloud).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (hubungan antara efisiensi pengiriman dan
  biaya).
- *Site Reliability Engineering*, by Betsy Beyer, Chris Jones, Jennifer
  Petoff, and Niall Richard Murphy, eds. (biaya sebagai pertukaran
  rekayasa keandalan yang eksplisit).
- The FinOps Foundation's FinOps Framework, [finops.org](https://www.finops.org/) (panduan praktisi
  dan model kematangan untuk manajemen keuangan cloud).
