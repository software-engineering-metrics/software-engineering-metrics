# 4.6 Metrik dokumentasi dan pengetahuan

## Gambaran umum dan motivasi

Topik ini menutup Bagian 4 dengan mengukur apakah pengetahuan yang diperlukan untuk memelihara basis kode dengan aman benar-benar terdokumentasi dan mudah ditemukan, bukan sekadar apakah dokumentasi secara teknis ada di suatu tempat. Topik 3.5 membahas komunikasi dan kolaborasi sebagai urusan pengalaman pengembang; topik ini membahas persoalan mendasar yang sama, ketersediaan pengetahuan, dari sisi kode: apakah seorang insinyur baru, atau insinyur lama yang mengerjakan kode yang asing baginya, punya apa yang diperlukan untuk membuat perubahan yang aman, atau pengetahuan itu hanya hidup di kepala segelintir orang senior yang jumlahnya terus menyusut.

Tantangan pengukuran di sini sungguh sulit, lebih sulit daripada kebanyakan metrik lain dalam buku ini, karena kualitas dan kegunaan dokumentasi secara inheren lebih subjektif daripada persentase cakupan atau skor kompleksitas. Pendekatan topik ini adalah mengukur proksi kegunaan, bukan keberadaan: seberapa sering dokumentasi benar-benar diakses, seberapa sering pertanyaan yang sama diajukan berulang kali padahal jawaban terdokumentasinya ada, dan berapa lama waktu yang dibutuhkan seseorang yang tidak mengenal sebuah sistem untuk menjadi produktif di dalamnya. Tidak satu pun proksi ini sempurna sendirian, tetapi bersama-sama mereka memberi gambaran yang jauh lebih jujur daripada menghitung jumlah halaman wiki atau file README dalam sebuah basis kode.

Bagi tim besar, kekhawatiran topik ini berlipat ganda bersama masa kerja dan pergantian personel dengan cara yang mudah diremehkan sampai krisis memaksa isu itu muncul: sistem yang dipelihara bertahun-tahun oleh dua insinyur yang sama bisa berfungsi sangat baik dengan hampir tanpa dokumentasi tertulis, tepat sampai kedua insinyur itu pergi dalam tahun yang sama, dan saat itulah organisasi menemukan bahwa pengetahuan itu tidak pernah benar-benar tertangkap di tempat yang awet. Organisasi perusahaan besar dan pemerintahan, dengan umur sistem yang biasanya lebih panjang dan kesinambungan staf yang kurang pasti dibandingkan startup, menanggung risiko ini lebih akut daripada kebanyakan.

## Prinsip utama

- **Keberadaan dokumentasi tidak sama dengan kegunaan dokumentasi.** Ukur apakah ia benar-benar membantu, bukan hanya apakah ia ada.
- **Pertanyaan berulang padahal jawaban terdokumentasi ada menyingkap masalah keterlacakan (discoverability), bukan masalah upaya dokumentasi.** Lebih banyak konten tidak selalu menjadi perbaikannya.
- **Waktu onboarding hingga kontribusi yang produktif adalah proksi yang kuat dan praktis** bagi kesehatan pengetahuan secara keseluruhan, terhubung langsung dengan metrik kolaborasi topik 3.5.
- **Pengetahuan yang hanya hidup di kepala orang adalah risiko ketahanan,** bukan keadaan yang stabil dan berkelanjutan, sebaik apa pun ia berfungsi saat ini.
- **Dokumentasi meluruh.** Halaman yang akurat setahun lalu kini mungkin menyesatkan secara aktif, dan kebasiannya sendiri perlu dilacak.

## Rekomendasi

### Lacak akses dan kebasian dokumentasi, bukan hanya keberadaannya

Bila platform dokumentasi Anda mendukungnya, lacak seberapa sering halaman benar-benar dilihat, dan secara terpisah, sudah berapa lama sejak halaman terakhir diperbarui relatif terhadap seberapa sering sistem yang dideskripsikannya berubah (menyilangkan data churn dari topik 4.3 langsung berguna di sini). Halaman yang mendeskripsikan sistem yang telah berubah banyak sejak halaman itu terakhir disunting adalah kandidat kuat untuk menyesatkan secara aktif, bukan sekadar tidak membantu, dan sinyal kebasian ini layak mendapat perhatian setidaknya sebesar pelacakan apakah dokumentasi ada sama sekali.

### Waspadai pertanyaan berulang sebagai sinyal keterlacakan

Bila pertanyaan yang sama berulang kali diajukan di kanal obrolan tim atau selama onboarding, padahal jawaban terdokumentasinya secara teknis ada di suatu tempat, pola itu menyingkap masalah keterlacakan, jawabannya tidak berada di tempat orang secara alami mencarinya, bukan masalah upaya dokumentasi yang bisa diperbaiki dengan menulis lebih banyak. Lacak pertanyaan yang berulang secara eksplisit, dan gunakan untuk memprioritaskan penataan ulang atau penampilan yang lebih baik atas konten yang sudah ada alih-alih menulis konten baru.

### Ukur waktu onboarding hingga kontribusi mandiri pertama yang bermakna

Metrik ini, yang diperkenalkan di topik 3.5 sebagai sinyal kolaborasi, sama-sama merupakan sinyal kesehatan dokumentasi dan pengetahuan dari sisi kode. Waktu onboarding yang konsisten pendek dan dapat diprediksi menunjukkan pengetahuan yang benar-benar mudah diakses dan akurat; waktu yang panjang dan sangat bervariasi, terutama yang sangat bergantung pada siapa yang kebetulan meng-onboard anggota tim baru, menunjukkan pengetahuan yang terkonsentrasi secara berbahaya dalam ingatan individu alih-alih bentuk tertulis yang awet.

### Identifikasi dan prioritaskan secara eksplisit area pengetahuan kritis yang tidak terdokumentasi

Silangkan data konsentrasi pengetahuan Anda (analisis [bus factor](https://en.wikipedia.org/wiki/Bus_factor) dari topik 3.5) dengan cakupan dokumentasi: sistem dengan bus factor satu dan tanpa dokumentasi yang bermakna adalah risiko berat yang berlipat ganda dan layak mendapat perhatian prioritas ketimbang sistem yang terdokumentasi dengan baik dengan bus factor rendah yang sama, karena dokumentasi setidaknya memberi mitigasi parsial sementara seorang penerus khusus dilatih.

### Perlakukan utang dokumentasi sebagai satu kategori dalam antrean utang teknis Anda

Alih-alih melacak celah dokumentasi secara terpisah dan informal, masukkan celah dokumentasi yang signifikan ke dalam antrean yang terlihat dan terkuantifikasi yang sama seperti dijelaskan di topik 4.5, terutama untuk sistem kritis dengan bus factor rendah, sehingga pekerjaan dokumentasi bersaing secara adil untuk kapasitas yang diprioritaskan, bukan terus-menerus ditunda sebagai tugas berstatus lebih rendah dibandingkan perbaikan utang yang berfokus pada kode.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa pengukuran dokumentasi | Beban rendah | Risiko pengetahuan tetap tak terlihat sampai krisis memaksa penemuannya |
| Menghitung keberadaan dokumentasi (jumlah halaman, adanya README) | Sederhana, mudah dilaporkan | Tidak mengatakan apa pun tentang kegunaan, akurasi, atau keterlacakan |
| Melacak akses dan kebasian | Mengungkap kegunaan dan peluruhan yang sebenarnya | Memerlukan analitik platform dokumentasi dan disiplin tinjauan berkelanjutan |
| Waktu onboarding sebagai proksi | Praktis, konkret, terkait langsung dengan dampak bisnis nyata | Tidak langsung; faktor lain selain dokumentasi juga memengaruhi kecepatan onboarding |

Ketegangan utamanya adalah **keterukuran versus makna**. Keberadaan dokumentasi sangat mudah dihitung dan hampir tidak memberi tahu apa pun yang berguna; kegunaan sejati, apakah seseorang benar-benar dapat menemukan dan mengandalkan pengetahuan terdokumentasi ketika membutuhkannya, adalah yang sebenarnya penting tetapi lebih sulit diukur secara langsung. Selesaikan ketegangan ini dengan memakai proksi yang direkomendasikan topik ini, pola akses, kebasian relatif terhadap churn, pertanyaan berulang, dan waktu onboarding, secara bersamaan, dengan menerima bahwa tidak ada satu pun yang sempurna tetapi konvergensinya jauh lebih bermakna daripada hitungan keberadaan saja.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk sistem kita yang paling kritis dan ber-bus factor terendah, apakah dokumentasi yang bermakna dan akurat benar-benar ada, atau seorang ahli yang pergi akan membawa sebagian besar pengetahuan nyata bersamanya?** Ini versi paling tajam dan paling konkret dari kekhawatiran utama topik ini; jawablah dengan jujur untuk sistem Anda yang paling berisiko lebih dulu.

2. **Pertanyaan apa yang diajukan berulang kali di obrolan tim kita padahal jawaban terdokumentasinya ada di suatu tempat?** Bila Anda bisa menyebutkan satu dengan segera, itu masalah keterlacakan yang layak diperbaiki langsung, kemungkinan dengan menata ulang atau menampilkan lebih baik konten yang sudah ada alih-alih menulis lebih banyak.

3. **Berapa lama anggota tim baru kita yang terakhir membuat kontribusi mandiri pertamanya yang bermakna, dan bagaimana dibandingkan dengan anggota tim sebelumnya?** Varians besar yang tak terjelaskan antarindividu sering menunjuk pada pengetahuan yang sangat bergantung pada siapa yang kebetulan meng-onboard seseorang, bukan dokumentasi yang awet dan mudah diakses.

4. **Kapan terakhir kali kita memeriksa apakah sebuah dokumentasi masih akurat, relatif terhadap seberapa banyak sistem yang mendasarinya telah berubah sejak ia ditulis?** Bila jawaban jujurnya "kita tidak memeriksa ini secara sistematis," risiko kebasian itu kemungkinan lebih besar daripada yang diasumsikan siapa pun saat ini.

5. **Apakah antrean utang teknis kita (topik 4.5) mencakup celah dokumentasi, atau pekerjaan dokumentasi terus-menerus ditunda sebagai tugas berstatus lebih rendah dibandingkan perbaikan kode?** Periksa antrean Anda yang sebenarnya dan lihat apakah utang dokumentasi terlihat dan bersaing untuk kapasitas yang diprioritaskan atau secara efektif tak terlihat.

6. **Apa biayanya bagi kita bila satu atau dua orang yang memahami sistem kita yang paling kritis dan paling sedikit terdokumentasi pergi dalam tahun yang sama?** Pertanyaan konkret dan tidak nyaman ini layak dijawab dengan jujur alih-alih memperlakukan risikonya sebagai abstrak atau tidak mungkin.

## Lensa sektor

**Startup.** Metrik dokumentasi formal biasanya tidak perlu pada tim kecil di mana pengetahuan menyebar lewat percakapan langsung yang terus-menerus. Risiko yang perlu diwaspadai adalah konsentrasi bus factor yang sama seperti diperingatkan topik 3.5, kini diterapkan khusus pada dokumentasi: ketika tim tumbuh melewati ukuran di mana semua orang berbicara setiap hari, pengetahuan tak terdokumentasi yang berjalan baik secara informal menjadi kewajiban yang nyata.

**Usaha kecil.** Prioritaskan mendokumentasikan sistem Anda yang paling kritis dan paling tidak memiliki cadangan lebih dulu, bahkan secara informal, alih-alih berusaha membuat dokumentasi komprehensif atas semuanya. Dokumen pendek dan akurat yang mencakup satu titik kegagalan tunggal Anda yang paling berisiko memberi nilai nyata lebih besar daripada cakupan luas tetapi dangkal di mana-mana.

**Perusahaan besar.** Kebasian dan keterlacakan dokumentasi sama-sama berskala buruk di sini, karena organisasi besar menumpuk dokumentasi di banyak tim dan platform lebih cepat daripada yang bisa dijaga agar tetap mutakhir atau tertata konsisten oleh siapa pun. Investasikan pada analitik platform dokumentasi untuk melacak akses dan kebasian pada skala besar, dan perlakukan utang dokumentasi sebagai kategori kelas satu dalam antrean utang di seluruh organisasi Anda.

**Pemerintahan.** Masa kerja pegawai yang panjang, yang lazim di organisasi sektor publik, dapat menutupi risiko pengetahuan tak terdokumentasi yang parah di balik stabilitas yang tampak, karena sistem yang dipelihara orang yang sama selama lima belas tahun bisa berfungsi sangat baik tepat sampai orang itu pensiun. Perlakukan kesehatan dokumentasi secara eksplisit sebagai urusan kesinambungan operasi, terhubung langsung ke perencanaan tenaga kerja dan suksesi, bukan sekadar kemewahan rekayasa.

## Contoh

**Perusahaan besar.** Sebuah perusahaan jasa keuangan menemukan, dalam sebuah reorganisasi yang tidak terkait, bahwa mesin perhitungan risiko intinya tidak memiliki dokumentasi bermakna selain beberapa komentar kode yang sudah usang, dan dua insinyur yang paling memahaminya sama-sama dipindahtugaskan ke inisiatif baru pada saat yang sama. Upaya dokumentasi darurat, yang dilakukan di bawah tekanan waktu yang besar, mengekstrak dan mencatat pengetahuan kritis sebelum pemindahtugasan berlaku, tetapi prosesnya memakan beberapa minggu waktu khusus insinyur senior yang bisa disebar lebih bertahap dan lebih murah bila kesehatan dokumentasi dilacak dan diprioritaskan secara proaktif, bukan ditemukan sebagai keadaan darurat.

**Pemerintahan.** Sistem manajemen kasus milik pemerintah sebuah negara bagian yang berusia puluhan tahun telah menumpuk dokumentasi yang cukup banyak selama bertahun-tahun, tetapi audit keterlacakan menemukan bahwa anggota tim baru secara konsisten tidak dapat menemukan dokumentasi yang relevan dan berulang kali mengajukan segelintir pertanyaan yang sama di kanal tim, pertanyaan yang sebenarnya sudah terjawab di suatu tempat dalam platform dokumentasi badan itu yang luas dan tertata buruk. Alih-alih menulis konten baru, badan itu berinvestasi dalam menata ulang dan memperbaiki struktur pencarian dan navigasi dokumentasinya yang sudah ada, dan survei lanjutan menunjukkan penurunan terukur dalam pertanyaan berulang serta pengalaman onboarding yang dilaporkan jauh lebih cepat bagi staf baru, tanpa menambah satu halaman konten baru pun.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengukur dan mengelola kesehatan dokumentasi dengan sengaja adalah terhindarnya biaya krisis: contoh jasa keuangan di atas menunjukkan perbedaan antara penangkapan pengetahuan yang proaktif dan bertahap dengan upaya darurat yang mahal dan terkompresi akibat perpindahan staf yang tidak direncanakan. Pengetahuan kritis yang tidak terdokumentasi adalah kewajiban yang berdiri tegak dan tidak menelan biaya yang terlihat sampai saat ia menjadi sangat mahal sekaligus.

Total biaya kepemilikan sebagian besar adalah disiplin melacak proksi yang direkomendasikan topik ini, pola akses, kebasian, pertanyaan berulang, waktu onboarding, dan kemauan untuk memasukkan celah dokumentasi ke antrean yang diprioritaskan alih-alih memperlakukannya terus-menerus berstatus lebih rendah daripada pekerjaan yang berfokus pada kode. Disiplin itu biayanya jauh lebih kecil daripada ekstraksi pengetahuan dalam mode krisis yang ditunjukkan contoh jasa keuangan sebagai alternatifnya.

## Anti-pola dan jebakan

- **Menghitung keberadaan dokumentasi, bukan kegunaannya:** hampir tidak memberi tahu apa pun tentang apakah pengetahuan benar-benar dapat diakses saat dibutuhkan.
- **Menulis lebih banyak konten sebagai respons atas pertanyaan berulang, tanpa lebih dulu memeriksa keterlacakan:** sering menangani masalah yang keliru sama sekali.
- **Tidak pernah memeriksa kebasian dokumentasi relatif terhadap seberapa banyak sistem telah berubah:** berisiko menghasilkan konten usang yang menyesatkan secara aktif.
- **Memperlakukan utang dokumentasi sebagai berstatus lebih rendah daripada utang kode:** membuatnya terus-menerus diturunkan prioritasnya dan tak terlihat di antrean.
- **Menyalahartikan stabilitas yang tampak, sistem yang tidak berubah selama bertahun-tahun, sebagai risiko rendah:** dapat menutupi masalah bus factor yang parah dan tidak terdokumentasi di balik sistem yang sekadar belum membutuhkan satu-satunya ahlinya.
- **Menemukan pengetahuan kritis yang tidak terdokumentasi hanya selama transisi staf darurat:** mode kegagalan yang mahal dan dapat dihindari yang dirancang untuk dicegah oleh topik ini.

## Model kematangan

- **Level 1, Initiate (Memulai):** Kesehatan dokumentasi tidak diukur; konsentrasi pengetahuan dan risiko kebasian ditemukan hanya lewat krisis.
- **Level 2, Develop (Mengembangkan):** Sebagian dokumentasi ada, tetapi tidak ada pelacakan sistematis atas akses, kebasian, atau keterlacakan.
- **Level 3, Standardize (Menstandarkan):** Akses dan kebasian dilacak untuk sistem kritis, dan waktu onboarding diukur sebagai proksi kesehatan pengetahuan di seluruh organisasi.
- **Level 4, Manage (Mengelola):** Celah dokumentasi dimasukkan ke antrean utang teknis yang diprioritaskan, disilangkan dengan risiko bus factor untuk mengidentifikasi risiko gabungan yang paling parah.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi secara proaktif mengidentifikasi dan menangani risiko pengetahuan kritis yang tidak terdokumentasi sebelum transisi staf memaksa isu itu muncul, dan dapat menunjukkan perbaikan onboarding atau respons insiden yang spesifik dan terukur yang ditelusuri ke investasi dokumentasi.

## Gagasan untuk diskusi

1. Apa kombinasi paling parah antara bus factor rendah dan dokumentasi buruk yang kita miliki saat ini?
2. Pertanyaan apa yang diajukan berulang kali padahal jawaban terdokumentasinya ada?
3. Bagaimana kita akan tahu bila sebuah dokumentasi kritis telah menjadi basi dan menyesatkan?
4. Apakah antrean utang teknis kita mencakup celah dokumentasi, atau mereka tak terlihat?
5. Apa biayanya bagi kita bila satu-satunya ahli di sistem kita yang paling kurang terdokumentasi pergi tahun ini?

## Poin-poin utama

- Ukur **kegunaan, bukan keberadaan**: apakah dokumentasi benar-benar membantu, memakai proksi seperti pola akses, kebasian, dan pertanyaan berulang.
- **Pertanyaan berulang padahal jawaban terdokumentasi ada** menyingkap masalah keterlacakan, belum tentu masalah upaya konten.
- **Waktu onboarding hingga kontribusi produktif** adalah proksi yang kuat dan praktis bagi kesehatan pengetahuan secara keseluruhan.
- **Pengetahuan kritis yang tidak terdokumentasi adalah risiko yang berlipat ganda**, terutama bila digabung dengan bus factor rendah (topik 3.5); ia tidak menelan biaya yang terlihat sampai ia menelan biaya besar sekaligus.
- Masukkan **celah dokumentasi ke antrean utang teknis Anda** (topik 4.5) agar mereka bersaing secara adil untuk kapasitas yang diprioritaskan.

## Referensi dan bacaan lanjutan

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, by Jared Bhatti, Zachariah Goldberg, Ted Kubaska, and Sarah Moir (praktik dokumentasi yang praktis untuk tim rekayasa).
- *A Philosophy of Software Design*, by John Ousterhout (hubungan antara dokumentasi, kompleksitas, dan keterpeliharaan).
- *Team Topologies*, by Matthew Skelton and Manuel Pais (implikasi rancangan organisasi dari pengetahuan yang terkonsentrasi versus terdistribusi).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren, Jez Humble, and Gene Kim (dokumentasi sebagai salah satu kapabilitas yang berkorelasi dengan kinerja pengiriman).
