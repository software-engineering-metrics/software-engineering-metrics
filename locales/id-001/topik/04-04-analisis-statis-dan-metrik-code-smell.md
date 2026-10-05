# 4.4 Analisis statis dan metrik code smell

## Gambaran umum dan motivasi

Perangkat **[analisis statis](https://en.wikipedia.org/wiki/Static_program_analysis)** memindai kode sumber tanpa menjalankannya, menandai pola yang diketahui berkorelasi dengan cacat, kerentanan keamanan, atau masalah keterpeliharaan: kode yang tidak terjangkau, sumber daya yang tidak ditutup, koersi tipe yang mencurigakan, logika duplikat, dan kategori yang lebih luas yaitu **code smell**, pola struktural yang belum tentu merupakan bug tetapi cenderung membuat kode lebih sulit dipahami, diuji, atau diubah dengan aman. Analisis statis adalah lapisan otomatis dan berkelanjutan di bawah metrik-metrik yang lebih terarah dalam topik-topik lain bagian ini, berjalan pada setiap commit dan memunculkan masalah pada saat masalah itu diperkenalkan, bukan menunggu audit berkala.

Kekhawatiran utama topik ini adalah jurang antara apa yang dilaporkan perangkat analisis statis dan apa yang sebenarnya penting. Sebuah perangkat bisa menandai ribuan temuan di basis kode besar, dan jumlah temuan saja adalah metrik yang buruk, karena mencampuradukkan preferensi gaya yang sepele dengan risiko yang sungguh-sungguh dan parah, dan jumlah itu bisa ditekan lewat penekanan (suppression) semudah lewat perbaikan nyata. Nilai analisis statis tidak datang dari jumlah temuan mentah, melainkan dari seberapa baik organisasi melakukan triase tingkat keparahan, mencegah kemunduran, dan menahan godaan untuk memperlakukan penilaian perangkat sebagai pengganti tinjauan manusia, bukan pelengkapnya.

Bagi tim besar, analisis statis adalah satu-satunya cara praktis untuk menegakkan garis dasar kualitas kode dan kebersihan keamanan di basis kode yang lebih besar daripada yang bisa ditinjau penuh secara manual oleh tim mana pun. Organisasi perusahaan besar dan pemerintahan, yang sering menghadapi persyaratan kepatuhan seputar praktik pengodean aman, bergantung pada analisis statis sebagai bukti terdokumentasi dan dapat diaudit bahwa tingkat pengawasan dasar diterapkan secara konsisten, bukan hanya ketika seorang peninjau manusia kebetulan memperhatikan masalah.

## Prinsip utama

- **Jumlah temuan mentah adalah metrik yang buruk dengan sendirinya.** Ia mencampuradukkan masalah sepele dan parah, dan dapat dimanipulasi (gaming) lewat penekanan alih-alih perbaikan sejati.
- **Triase tingkat keparahan lebih penting daripada volume.** Sejumlah kecil temuan kritis layak mendapat perhatian lebih besar daripada banyak temuan sepele.
- **Analisis statis melengkapi tinjauan manusia; ia tidak menggantikannya.** Perangkat menangkap pola; mereka tidak memahami maksud atau konteks bisnis.
- **Tren "masalah baru yang diperkenalkan" lebih dapat ditindaklanjuti daripada jumlah total tumpukan.** Ia memberi tahu apakah praktik saat ini membaik atau memburuk.
- **Positif palsu mengikis kepercayaan pada perangkat.** Tingkat positif palsu yang tidak dikelola membuat tim mengabaikan temuan secara menyeluruh, termasuk yang nyata.

## Rekomendasi

### Lacak temuan berbobot tingkat keparahan, bukan jumlah mentah

Konfigurasikan perangkat analisis statis Anda untuk mengklasifikasikan temuan menurut tingkat keparahan (kritis, tinggi, sedang, rendah, atau skala yang setara), dan lacak tren berbobot tingkat keparahan alih-alih jumlah total yang datar. Basis kode dengan nol temuan kritis dan lima ratus saran gaya berkeparahan rendah berada dalam keadaan yang sangat berbeda dari yang memiliki lima puluh temuan kritis dan tanpa masalah gaya sama sekali, dan jumlah mentah memperlakukan keduanya kurang lebih setara padahal tidak.

### Gerbangkan pada temuan baru yang diperkenalkan, bukan pada seluruh tumpukan historis

Sebagian besar basis kode yang mapan membawa tumpukan temuan warisan yang mendahului praktik saat ini dan akan terlalu mahal bila diperbaiki sekaligus. Alih-alih menghentikan semua pekerjaan sampai seluruh tumpukan dibersihkan, gerbangkan CI pada apakah suatu perubahan memperkenalkan temuan baru di atas ambang batas tingkat keparahan yang disepakati, membiarkan tumpukan menyusut bertahap lewat pemeliharaan normal sambil mencegah penumpukan lebih lanjut. Pembedaan ini mencerminkan rekomendasi batas bawah cakupan dari topik 4.2: lindungi dari kemunduran alih-alih menuntut perbaikan sekaligus yang tidak realistis.

### Kelola tingkat positif palsu secara aktif

Tinjau sampel temuan secara berkala, terutama kategori mana pun dengan volume tinggi, dan periksa berapa banyak yang benar-benar positif palsu, yaitu kasus di mana perangkat menandai pola yang sebenarnya tidak bermasalah dalam konteksnya. Setel konfigurasi aturan untuk menekan kategori aturan yang benar-benar berisik dan bernilai rendah secara spesifik, alih-alih membiarkan tim membentuk kebiasaan mengabaikan keluaran perangkat secara menyeluruh karena terlalu banyak yang berupa derau. Tingkat positif palsu yang tinggi dan tidak dikelola adalah cara tercepat untuk menghancurkan kredibilitas program analisis statis.

### Gunakan temuan analisis statis sebagai dorongan untuk meninjau, bukan vonis otomatis

Bahkan temuan yang sah dan bukan positif palsu tidak selalu menuntut perbaikan otomatis yang wajib; sebagian pola yang ditandai dapat diterima mengingat konteks spesifik yang tidak bisa dilihat perangkat. Bangun proses ringan bagi manusia untuk meninjau dan memperbaiki, atau secara eksplisit dan terlihat mengesampingkan (waive) sebuah temuan dengan alasan yang terdokumentasi, alih-alih menegakkan setiap temuan sebagai wajib secara membabi buta atau membiarkan penekanan diam-diam tanpa dokumentasi yang mengikis nilai perangkat dari waktu ke waktu.

### Gabungkan analisis statis dengan metrik kualitas kode lain dalam bagian ini

Temuan analisis statis, skor kompleksitas (topik 4.1), dan data hotspot (topik 4.3) adalah bukti yang saling melengkapi, bukan metrik yang bersaing. File dengan konsentrasi tinggi temuan analisis statis yang belum terselesaikan dan sekaligus merupakan hotspot churn-kompleksitas adalah kandidat yang sangat kuat untuk perhatian yang diprioritaskan, karena banyak sinyal independen bertemu pada kesimpulan yang sama.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Jumlah temuan mentah sebagai metrik | Sederhana dilaporkan | Mencampuradukkan masalah sepele dan parah; mudah dimanipulasi lewat penekanan |
| Tren berbobot tingkat keparahan | Mencerminkan risiko sebenarnya dengan lebih akurat | Memerlukan pemeliharaan klasifikasi tingkat keparahan yang berkelanjutan |
| Gerbang pada seluruh tumpukan historis | Memaksimalkan kebersihan kode pada akhirnya | Sering tidak praktis untuk basis kode yang mapan; dapat menghentikan semua pekerjaan |
| Gerbang hanya pada temuan baru | Praktis, mencegah kemunduran, membiarkan tumpukan menyusut bertahap | Masalah warisan bertahan lebih lama tanpa rencana perbaikan yang disengaja |

Ketegangan utamanya adalah **ketuntasan versus kepraktisan**. Kebijakan analisis statis yang menuntut seluruh tumpukan historis diselesaikan sebelum pekerjaan baru apa pun berjalan memang tuntas tetapi biasanya tidak praktis untuk basis kode mana pun yang memiliki sejarah nyata, dan tim di bawah tekanan itu cenderung menekan temuan secara menyeluruh alih-alih benar-benar memperbaikinya. Selesaikan ketegangan ini dengan menggerbangkan secara ketat hanya pada temuan baru sambil menjalankan upaya perbaikan terpisah yang dipacu dengan sengaja terhadap tumpukan warisan, diprioritaskan menggunakan teknik tingkat keparahan dan penyilangan yang direkomendasikan topik ini dan topik 4.3.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita melacak tren berbobot tingkat keparahan, atau hanya jumlah total temuan mentah?** Buka dasbor Anda yang sebenarnya dan periksa; jumlah mentah lazim menjadi bawaan di banyak perangkat dan sering memerlukan konfigurasi yang disengaja agar tingkat keparahan muncul dengan benar.

2. **Seberapa besar tumpukan warisan temuan yang belum terselesaikan saat ini, dan apakah kita punya rencana yang disengaja dan terpacu untuk menguranginya, atau ia hanya menumpuk tanpa batas?** Tumpukan yang tak tertangani dan diam-diam membengkak itu lazim dan layak disebutkan dengan jujur alih-alih dibiarkan tanpa pemeriksaan.

3. **Berapa perkiraan tingkat positif palsu kita untuk kategori temuan bervolume tertinggi, dan apakah kita sudah menyetel konfigurasi aturan sebagai tanggapan?** Bila Anda belum pernah memeriksanya, ambil sampel sekelompok temuan dari kategori paling berisik Anda dan nilai dengan jujur berapa banyak yang benar-benar dapat ditindaklanjuti.

4. **Apakah para insinyur di tim kita memercayai temuan analisis statis, atau sudah belajar mengabaikannya karena terlalu banyak keluaran yang berupa derau?** Ini pertanyaan uji naluri yang langsung dan jujur yang layak diajukan kepada tim, karena perangkat yang diabaikan tidak memberi nilai nyata apa pun terlepas dari kemampuan teoretisnya.

5. **Bagaimana kita saat ini menangani temuan sah yang menurut tim sebaiknya dikesampingkan mengingat konteks spesifik?** Periksa apakah proses Anda menjadikannya keputusan yang terlihat dan terdokumentasi, atau terjadi lewat penekanan diam-diam tanpa dokumentasi yang mengikis sinyal perangkat dari waktu ke waktu.

6. **Di mana temuan analisis statis, skor kompleksitas, dan data hotspot bertemu pada file atau modul yang sama?** Silangkan ketiga sinyal ini secara eksplisit; pertemuan di berbagai metrik independen adalah sinyal prioritisasi yang lebih kuat daripada satu metrik saja.

## Lensa sektor

**Startup.** Perangkat analisis statis gratis yang ringan dan terintegrasi ke CI sejak awal adalah asuransi murah dan menangkap masalah nyata lebih dini, sebelum tumpukan warisan sempat menumpuk. Pertahankan kumpulan aturan tetap terfokus pada kategori yang benar-benar bernilai tinggi dan berderau rendah alih-alih langsung mengaktifkan setiap aturan yang tersedia.

**Usaha kecil.** Sebagian besar ekosistem bahasa modern menyertakan perangkat analisis statis gratis yang mumpuni; mengaktifkannya di CI dengan kumpulan aturan bawaan yang masuk akal hanya memerlukan sedikit investasi. Fokus pada penggerbangan temuan baru alih-alih berusaha menyelesaikan tumpukan yang sudah ada sekaligus.

**Perusahaan besar.** Mengelola tingkat positif palsu dan triase tingkat keparahan secara sengaja menjadi esensial pada skala ini, karena perangkat yang disetel buruk dan menghasilkan derau berlebihan di puluhan tim akan diabaikan di seluruh organisasi. Investasikan pada pemilik khusus untuk konfigurasi perangkat analisis statis itu sendiri, memperlakukan penyetelan aturan sebagai disiplin berkelanjutan, bukan tugas persiapan sekali jalan.

**Pemerintahan.** Temuan analisis statis, terutama yang terkait keamanan, sering relevan langsung dengan persyaratan kepatuhan dan audit. Pertahankan proses terdokumentasi dan dapat diaudit tentang bagaimana temuan ditriase, diperbaiki, atau secara formal dikesampingkan dengan justifikasi tercatat, karena dokumentasi itu sendiri sering kali yang ingin dilihat auditor eksternal.

## Contoh

**Perusahaan besar.** Dasbor analisis statis sebuah perusahaan perangkat lunak telah menumpuk lebih dari empat puluh ribu temuan belum terselesaikan di basis kodenya setelah beberapa tahun tanpa triase berbobot tingkat keparahan, angka yang begitu besar sehingga para insinyur sebagian besar sudah berhenti melihat dasbor sama sekali. Pendekatan yang direvisi mengklasifikasikan temuan menurut tingkat keparahan, menemukan bahwa kurang dari dua ratus yang benar-benar kritis, dan menggerbangkan CI secara khusus pada temuan baru berkeparahan kritis dan tinggi sambil membiarkan tumpukan berkeparahan rendah menyusut bertahap lewat pemeliharaan kode normal. Dalam enam bulan, temuan kritis turun menjadi satu digit, dan, yang lebih penting, data survei insinyur menunjukkan kepercayaan yang pulih pada keluaran perangkat sekarang setelah ia memunculkan sinyal yang terkelola dan benar-benar dapat ditindaklanjuti, bukan tumpukan yang menjemukan dan diabaikan.

**Pemerintahan.** Kebijakan keamanan rantai pasok perangkat lunak milik sebuah badan pertahanan mewajibkan pemindaian analisis statis dengan nol temuan belum terselesaikan sebelum rilis apa pun, kebijakan yang dalam praktiknya membuat tim pengembang menekan banyak temuan, termasuk beberapa masalah keamanan yang nyata, semata-mata untuk memenuhi tenggat rilis di bawah gerbang serba-atau-tidak-sama-sekali yang tidak bisa dijalankan. Kebijakan yang direvisi mewajibkan nol temuan baru berkeparahan kritis atau tinggi yang diperkenalkan oleh rilis mana pun, digabung dengan rencana perbaikan dan jadwal yang terdokumentasi dan terlacak untuk tumpukan warisan, ditinjau per kuartal oleh dewan tata kelola keamanan. Pendekatan bertahap yang praktis ini sekaligus memulihkan pengawasan keamanan yang sejati pada kode baru dan membuat kemajuan nyata dan terukur terhadap tumpukan warisan selama delapan belas bulan, berbeda dengan kebijakan sebelumnya yang tidak bisa dijalankan dan sebagian besar hanya menghasilkan penekanan, bukan perbaikan sejati.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil analisis statis yang dikelola dengan baik adalah menangkap cacat dan kerentanan keamanan yang nyata sebelum mencapai produksi, dengan biaya jauh lebih rendah daripada upaya tinjauan manusia yang setara untuk cakupan yang sama. Contoh badan pertahanan di atas menunjukkan biaya bila salah melakukannya: kebijakan serba-atau-tidak-sama-sekali yang tidak bisa dijalankan justru mengurangi pengawasan keamanan yang sejati dengan mendorong penekanan, kebalikan dari maksudnya.

Total biaya kepemilikan mencakup perangkatnya sendiri, yang sering gratis atau berbiaya rendah untuk ekosistem bahasa yang umum, dan disiplin berkelanjutan berupa triase tingkat keparahan, pengelolaan positif palsu, dan perencanaan perbaikan tumpukan warisan. Disiplin berkelanjutan itu, lebih daripada perangkatnya sendiri, yang menentukan apakah program analisis statis memberi nilai yang sejati dan tepercaya atau merosot menjadi derau yang diabaikan.

## Anti-pola dan jebakan

- **Memperlakukan jumlah temuan mentah sebagai metrik:** mencampuradukkan masalah sepele dan parah dan mudah dimanipulasi lewat penekanan.
- **Mewajibkan seluruh tumpukan historis diselesaikan sebelum pekerjaan baru apa pun berjalan:** biasanya tidak praktis dan mendorong penekanan alih-alih perbaikan sejati.
- **Mengabaikan tingkat positif palsu:** tingkat derau yang tidak dikelola membuat tim mengabaikan keluaran perangkat sepenuhnya, termasuk temuan nyata.
- **Penekanan diam-diam tanpa dokumentasi atas temuan yang sah:** mengikis sinyal perangkat dan tidak meninggalkan jejak audit untuk keperluan kepatuhan.
- **Memperlakukan temuan analisis statis sebagai vonis otomatis tanpa tinjauan manusia:** melewatkan konteks yang tidak bisa dilihat perangkat.
- **Tidak pernah menyilangkan temuan dengan data kompleksitas dan hotspot:** melewatkan sinyal prioritisasi yang lebih kuat yang diberikan bukti konvergen.

## Model kematangan

- **Level 1, Initiate (Memulai):** Analisis statis tidak dijalankan, atau temuan menumpuk tanpa dikelola, tanpa triase tingkat keparahan atau pelacakan tren.
- **Level 2, Develop (Mengembangkan):** Sebagian analisis statis berjalan di CI, tetapi triase tingkat keparahan tidak konsisten dan tingkat positif palsu tidak dikelola.
- **Level 3, Standardize (Menstandarkan):** Temuan diberi bobot tingkat keparahan dan CI menggerbangkan temuan baru berkeparahan kritis dan tinggi di seluruh organisasi.
- **Level 4, Manage (Mengelola):** Tingkat positif palsu disetel secara aktif, tumpukan warisan memiliki rencana perbaikan terdokumentasi dan terpacu, dan pengesampingan (waiver) terlihat dan terdokumentasi.
- **Level 5, Orchestrate (Mengorkestrasi):** Temuan analisis statis, data kompleksitas, dan data hotspot secara rutin disilangkan untuk memprioritaskan investasi, dan organisasi dapat menunjukkan perbaikan cacat atau keamanan yang spesifik dan terukur yang ditelusuri ke program ini.

## Gagasan untuk diskusi

1. Seperti apa tren berbobot tingkat keparahan kita saat ini, dan apakah membaik atau memburuk?
2. Seberapa besar tumpukan temuan warisan kita, dan apakah kita punya rencana yang disengaja untuk menguranginya?
3. Berapa perkiraan tingkat positif palsu kita untuk kategori temuan paling berisik?
4. Apakah para insinyur di tim kita saat ini memercayai atau mengabaikan keluaran analisis statis kita?
5. Di mana temuan analisis statis bertemu dengan data kompleksitas atau hotspot di basis kode kita?

## Poin-poin utama

- Lacak **tren berbobot tingkat keparahan**, bukan jumlah temuan mentah, yang mencampuradukkan masalah sepele dan parah.
- Gerbangkan CI pada **temuan baru yang diperkenalkan**, bukan seluruh tumpukan historis, untuk mencegah kemunduran tanpa menuntut perbaikan sekaligus yang tidak praktis.
- Kelola **tingkat positif palsu** secara aktif; derau yang tidak dikelola menghancurkan kepercayaan pada perangkat dan membuat temuan diabaikan secara menyeluruh.
- Perlakukan temuan sebagai **dorongan untuk tinjauan manusia**, dengan pengesampingan yang terlihat dan terdokumentasi, bukan vonis otomatis atau penekanan diam-diam.
- Silangkan analisis statis dengan **data kompleksitas dan hotspot** (topik 4.1, 4.3) untuk bukti prioritisasi yang konvergen dan lebih kuat.

## Referensi dan bacaan lanjutan

- *Static Program Analysis*, by Anders Møller and Michael I. Schwartzbach (landasan teoretis dan praktis teknik analisis statis).
- Panduan OWASP tentang static application security testing (SAST), bagian dari sumber daya OWASP Foundation yang lebih luas tentang praktik pengembangan perangkat lunak yang aman.
- *Refactoring: Improving the Design of Existing Code*, by Martin Fowler (katalog code smell yang menjadi dasar banyak perangkat analisis statis).
- *Working Effectively with Legacy Code*, by Michael Feathers (mengelola tumpukan warisan masalah kualitas di basis kode yang mapan).
