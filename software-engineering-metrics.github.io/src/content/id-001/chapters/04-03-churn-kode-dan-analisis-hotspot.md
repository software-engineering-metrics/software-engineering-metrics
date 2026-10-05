# 4.3 Churn kode dan analisis hotspot

## Gambaran umum dan motivasi

**Churn kode** mengukur seberapa sering sebuah file atau modul berubah dari waktu ke waktu, yaitu baris yang ditambahkan, diubah, dan dihapus di sepanjang commit yang berurutan. Sendirian, churn adalah sinyal yang cukup lemah: sebagian file sering berubah karena sedang dikembangkan secara aktif dan sehat, dan sebagian jarang berubah karena stabil dan benar, bukan karena diabaikan. Daya diagnostik sesungguhnya dari pendekatan topik ini datang dari menggabungkan churn dengan kompleksitas (topik 4.1): file yang sekaligus sering diubah dan sangat kompleks, sebuah **hotspot**, secara tidak proporsional besar kemungkinannya menjadi sumber cacat dan beban bagi kecepatan tim, dan penelitian empiris menunjukkannya secara konsisten di banyak basis kode dan organisasi.

**Analisis hotspot**, yang dipopulerkan oleh karya Adam Tornhill tentang analitik perangkat lunak, bernilai khusus karena tidak memerlukan survei manual atau penilaian subjektif untuk menemukan targetnya. Riwayat [kendali versi](https://en.wikipedia.org/wiki/Version_control) sudah memuat semua yang diperlukan untuk menghitung churn dan, bila digabung dengan perangkat analisis statis, kompleksitas, untuk setiap file dalam basis kode secara otomatis. Ini memungkinkan sebuah tim atau organisasi mengidentifikasi, dengan bukti nyata alih-alih anekdot atau keluhan terkeras dalam sebuah retrospektif, bagian kecil basis kode yang mana tepatnya yang layak mendapat perhatian refactoring lebih dulu.

Bagi tim besar, analisis hotspot memecahkan masalah alokasi yang nyata: basis kode dengan ratusan ribu baris memiliki kode jauh lebih banyak daripada yang sanggup di-refactor secara menyeluruh oleh tim mana pun, dan intuisi tentang di mana masalah terburuk berada sering keliru, condong ke siapa yang mengeluh paling baru atau file mana yang kebetulan tidak disukai seorang insinyur senior. Organisasi perusahaan besar dan pemerintahan yang mengelola basis kode besar dan berumur panjang bergantung pada prioritisasi berbasis data ini untuk mengarahkan anggaran refactoring yang benar-benar langka ke kode yang akan memberi imbal hasil terbesar.

## Prinsip utama

- **Churn saja adalah sinyal lemah; churn yang digabung dengan kompleksitas adalah sinyal kuat.** Kombinasinya, bukan salah satu metrik saja, yang mengidentifikasi hotspot sejati.
- **Analisis hotspot tidak memerlukan survei manual.** Riwayat kendali versi sudah memuat semua yang diperlukan untuk menghitungnya secara otomatis.
- **Hotspot adalah sinyal prioritisasi, bukan vonis otomatis.** Penilaian manusia tetap diperlukan untuk memutuskan tindakan apa yang pantas bagi hotspot tertentu.
- **Perubahan yang sering tidak dengan sendirinya buruk.** Sebagian churn mencerminkan pengembangan yang sehat dan aktif, bukan masalah kualitas.
- **Analisis ini berskala tepat di tempat intuisi gagal**: pada basis kode besar yang terlalu besar untuk disurvei dan diprioritaskan hanya dengan perasaan oleh satu orang.

## Rekomendasi

### Hitung churn dan kompleksitas bersama-sama, dan urutkan berdasarkan kombinasinya

Ekstrak frekuensi perubahan per file dari riwayat kendali versi dalam rentang yang bermakna, biasanya enam bulan hingga setahun, dan pasangkan dengan ukuran kompleksitas (topik 4.1) untuk file yang sama. Urutkan file berdasarkan kombinasinya, umumnya hasil kali churn dan kompleksitas, bukan berdasarkan salah satu metrik saja, karena kombinasi inilah yang secara konsisten dikaitkan penelitian dasarnya dengan tingkat cacat dan biaya pemeliharaan yang tinggi.

### Selidiki hotspot teratas dengan penilaian manusia sebelum bertindak

Daftar hotspot yang terurut mengidentifikasi kandidat untuk diperhatikan, bukan daftar tindakan otomatis. Untuk setiap hotspot teratas Anda, selidiki dengan mata manusia: apakah ini kode yang benar-benar dirancang buruk dan perlu di-refactor, atau file yang secara sah memerlukan perubahan sering karena berada di pusat logika bisnis yang aktif dan berkembang, dalam hal ini prioritasnya mungkin pengujian yang lebih baik atau dokumentasi yang lebih jelas, bukan penulisan ulang struktural. Ini mencerminkan pembedaan kompleksitas esensial versus kebetulan dari topik 4.1, diterapkan di sini pada sinyal gabungan churn-kompleksitas.

### Silangkan hotspot dengan data insiden dan cacat

Bila tersedia, periksa apakah hotspot yang Anda identifikasi berkorelasi dengan insiden produksi yang sebenarnya (topik 6.2) atau data cacat yang lolos (topik 5.1). Korelasi yang kuat memvalidasi analisis hotspot sebagai benar-benar prediktif untuk basis kode spesifik Anda dan memperkuat kasus bisnis untuk menindaklanjutinya; korelasi yang lemah atau tidak ada menunjukkan adanya masalah kualitas data, atau bahwa churn dan kompleksitas, dalam konteks khusus Anda, bukan kombinasi sinyal yang tepat untuk dijadikan dasar prioritisasi.

### Lacak tren hotspot di berbagai analisis berturut-turut, bukan hanya satu potret sesaat

Jalankan ulang analisis hotspot secara berkala, per kuartal adalah hal yang umum, dan lacak apakah hotspot yang sebelumnya teridentifikasi membaik, memburuk, atau teratasi, serta apakah ada yang baru muncul. Hotspot yang bertahan di berbagai siklus analisis meskipun berulang kali ditandai menunjukkan bahwa upaya perbaikan belum benar-benar dilakukan, atau bahwa upaya perbaikan sebelumnya tidak menangani masalah mendasar yang sesungguhnya.

### Gunakan data hotspot untuk menginformasikan, bukan menggantikan, percakapan prioritisasi tingkat tim

Sajikan analisis hotspot sebagai bukti dalam diskusi prioritisasi, bukan sebagai mandat otomatis yang mengesampingkan penilaian kontekstual tim sendiri tentang apa yang paling penting saat ini. Tim bisa punya alasan yang baik dan sah untuk sementara menurunkan prioritas hotspot yang sudah diketahui, penulisan ulang terencana yang akan datang membuat refactoring bertahap menjadi upaya yang sia-sia, misalnya, dan analisis itu harus menginformasikan percakapan tersebut, bukan menggantikannya.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Prioritisasi berbasis intuisi | Cepat, tidak perlu perangkat, memanfaatkan pengetahuan kontekstual tim | Condong ke hal yang baru terjadi, preferensi pribadi, dan siapa yang mengeluh paling keras |
| Churn saja | Sederhana dihitung | Sinyal lemah sendirian; perubahan yang sering tidak dengan sendirinya buruk |
| Churn digabung kompleksitas (analisis hotspot) | Kuat, berbasis bukti, otomatis dari data yang sudah ada | Memerlukan penggabungan dua sumber data dan penafsiran hasil dengan penilaian |
| Analisis hotspot disilangkan dengan data insiden | Tervalidasi, bukti terkuat untuk prioritisasi | Memerlukan keterkaitan insiden-ke-kode yang andal, yang tidak dimiliki setiap organisasi |

Ketegangan utamanya adalah **bukti versus konteks**. Analisis hotspot menyediakan bukti objektif dan berskala yang tidak dapat ditandingi prioritisasi berbasis intuisi pada ukuran basis kode yang besar, asing, atau berumur panjang, tetapi ia tidak memiliki penilaian kontekstual yang dimiliki tim tentang mengapa hotspot tertentu penting, atau tidak penting, saat ini. Selesaikan ketegangan ini dengan memperlakukan analisis hotspot sebagai dasar bukti bagi percakapan prioritisasi, dipadukan dengan, dan tidak pernah menggantikan, penilaian kontekstual tim sendiri tentang waktu dan pertukaran.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apa lima hotspot teratas kita, diurutkan berdasarkan churn dan kompleksitas gabungan, dan apakah urutan itu cocok dengan intuisi tim kita tentang di mana masalah terburuk kita berada?** Jalankan analisisnya dan bandingkan hasilnya dengan apa yang akan ditebak tim Anda sebelum melihat data; ketidaksesuaian sering menjadi temuan yang paling berharga.

2. **Apakah hotspot yang teridentifikasi berkorelasi dengan insiden produksi atau data cacat yang lolos yang sebenarnya?** Bila Anda punya data untuk memeriksanya, lakukan langsung; bila tidak, celah itu sendiri layak dicatat sebagai sesuatu yang perlu dibangun ke depan.

3. **Untuk hotspot teratas kita saat ini, apakah masalah mendasarnya kompleksitas esensial yang secara sah memerlukan perubahan sering, atau kompleksitas kebetulan yang benar-benar bisa diperbaiki dengan refactor?** Telusuri file itu bersama-sama dan buat penilaian ini secara eksplisit alih-alih mengasumsikan salah satu jawaban.

4. **Pernahkah hotspot yang sebelumnya teridentifikasi bertahan di berbagai siklus analisis meskipun sudah ditandai?** Bila ya, selidiki dengan jujur mengapa: perbaikan tidak pernah benar-benar dicoba, atau upaya sebelumnya tidak menangani penyebab mendasar yang sesungguhnya.

5. **Apakah kita saat ini memprioritaskan pekerjaan refactoring berdasarkan bukti, atau berdasarkan siapa yang mengeluh paling baru atau paling keras?** Jujurlah tentang proses prioritisasi tim Anda yang sebenarnya saat ini dan bagaimana bedanya dengan apa yang akan disarankan analisis hotspot berbasis bukti.

6. **Apa biayanya bagi kita, dalam tingkat cacat atau perlambatan pengiriman, bila hotspot teratas kita saat ini dibiarkan tak tertangani selama setahun lagi?** Pertanyaan ini memaksa adanya perkiraan biaya konkret yang bisa menjadi jangkar keputusan prioritisasi, alih-alih membiarkan hotspot menjadi kekhawatiran abstrak yang mudah diturunkan prioritasnya.

## Lensa sektor

**Startup.** Analisis hotspot formal biasanya tidak perlu pada basis kode yang kecil dan muda yang masih dipegang bersama-sama di kepala seluruh tim. Teknik ini menjadi berharga tepat ketika basis kode telah tumbuh melampaui ukuran di mana satu orang bisa mengidentifikasi area terburuk dengan andal hanya dari ingatan, sering kali pada kisaran satu atau dua tahun pertama pertumbuhan yang berkelanjutan.

**Usaha kecil.** Perangkat gratis atau berbiaya rendah dapat mengekstrak data churn langsung dari riwayat kendali versi Anda yang sudah ada dengan persiapan minimal; gabungkan dengan data kompleksitas apa pun yang sudah dilaporkan linter atau perangkat analisis statis Anda, alih-alih berinvestasi pada perangkat lunak analisis hotspot komersial khusus pada skala ini.

**Perusahaan besar.** Analisis hotspot adalah tempat prioritisasi berbasis bukti memberi imbal hasil terbesar, karena intuisi benar-benar gagal pada skala basis kode yang mencakup ratusan layanan dan ribuan file. Investasikan dalam menjalankan analisis ini secara rutin di seluruh basis kode dan menyilangkannya dengan data insiden untuk membangun kasus yang tervalidasi dan dapat dipertahankan bagi investasi refactoring.

**Pemerintahan.** Sistem berumur panjang, kadang berusia puluhan tahun, cocok secara alami untuk analisis hotspot, karena riwayat kendali versi yang terakumulasi memberikan sinyal jangka panjang yang kaya tentang bagian sistem mana yang terbukti bermasalah dari waktu ke waktu. Pendekatan berbasis bukti ini juga merupakan alat yang meyakinkan dan konkret untuk membenarkan investasi modernisasi kepada pemangku kepentingan yang memerlukan lebih dari sekadar opini informal seorang insinyur untuk menyetujui pendanaan.

## Contoh

**Perusahaan besar.** Platform pemrosesan klaim milik sebuah perusahaan asuransi, yang mencakup lebih dari dua juta baris kode di puluhan layanan, telah menumpuk keluhan informal selama bertahun-tahun tentang "modul validasi klaim" yang bermasalah, tetapi tidak pernah ada prioritisasi formal yang mengikuti keluhan itu. Analisis hotspot yang menggabungkan enam bulan data churn dengan skor kompleksitas mengidentifikasi file yang sama sekali berbeda, sebuah utilitas konversi mata uang bersama yang terkubur dalam di sebuah dependensi yang jarang dibicarakan, sebagai hotspot teratas yang sebenarnya, yang tidak pernah muncul dalam keluhan retrospektif mana pun. Penyilangan dengan data insiden mengonfirmasi bahwa utilitas ini terlibat dalam porsi cacat perhitungan keuangan yang tidak proporsional selama setahun sebelumnya, dan refactor terarah pada utilitas spesifik itu, bukan modul yang selama ini disalahkan secara informal oleh semua orang, menghasilkan penurunan insiden terkait yang terukur dalam kuartal berikutnya.

**Pemerintahan.** Sistem perizinan milik sebuah dinas kendaraan bermotor negara bagian yang berusia puluhan tahun menjalani analisis hotspot sebagai bagian dari kasus bisnis modernisasi. Analisis itu mengidentifikasi sekelompok kecil file, mewakili kurang dari 3% dari seluruh basis kode, yang bertanggung jawab atas porsi churn dan kompleksitas yang tidak proporsional, dan penyilangan dengan log insiden dinas menunjukkan bahwa kelompok yang sama ini menyumbang hampir 40% dari semua cacat sistem yang dilaporkan selama tiga tahun sebelumnya. Temuan konkret berbasis bukti ini, jauh lebih meyakinkan daripada klaim umum bahwa "sistem ini sudah tua dan perlu dimodernisasi," menjadi inti permohonan anggaran yang berhasil untuk upaya modernisasi bertahap yang terarah dan berfokus khusus pada kelompok itu, bukan penggantian sistem penuh yang jauh lebih mahal.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil analisis hotspot adalah investasi yang terarah dan berbasis bukti: kedua contoh di atas menunjukkan kasus di mana analisis formal mengalihkan perhatian refactoring dari tempat keluhan informal memusatkannya ke tempat data benar-benar menunjukkan masalahnya berada, menghasilkan imbal hasil yang terukur lebih baik daripada investasi yang tidak terarah atau digerakkan intuisi.

Total biaya kepemilikannya rendah, karena data churn berasal langsung dari riwayat kendali versi yang sudah ada dan data kompleksitas biasanya sudah tersedia dari perangkat analisis statis (topik 4.4); investasi utamanya adalah upaya analisis berkala dan waktu penilaian manusia untuk menafsirkan hasil serta memutuskan tindakan apa yang pantas bagi setiap hotspot yang teridentifikasi.

## Anti-pola dan jebakan

- **Memakai churn saja tanpa kompleksitas:** sinyal yang lemah sendirian dan dapat menandai kode yang sehat dan aktif dikembangkan sebagai positif palsu.
- **Memperlakukan peringkat hotspot sebagai daftar tindakan otomatis tanpa penilaian manusia:** melewatkan pembedaan esensial-versus-kebetulan yang menentukan respons yang tepat.
- **Memprioritaskan refactoring berdasarkan keluhan terkeras alih-alih bukti:** sering menyalaharahkan upaya dari tempat data benar-benar menunjukkan masalahnya berada.
- **Tidak pernah menyilangkan hotspot dengan data insiden atau cacat:** melewatkan langkah validasi yang memperkuat kasus untuk menindaklanjuti analisis.
- **Menjalankan analisis sekali dan tidak pernah mengulanginya:** melewatkan apakah upaya perbaikan benar-benar berhasil dari waktu ke waktu.
- **Mengabaikan hotspot yang terus ditandai tanpa menyelidiki mengapa perbaikan tidak bertahan:** menyia-nyiakan nilai diagnostik dari analisis berulang.

## Model kematangan

- **Level 1, Initiate (Memulai):** Prioritas refactoring ditetapkan berdasarkan intuisi atau volume keluhan, tanpa data churn atau kompleksitas yang menginformasikan keputusan.
- **Level 2, Develop (Mengembangkan):** Beberapa tim memeriksa data churn atau kompleksitas secara informal, tetapi tidak ada praktik analisis hotspot yang konsisten di seluruh organisasi.
- **Level 3, Standardize (Menstandarkan):** Analisis hotspot yang menggabungkan churn dan kompleksitas berjalan secara rutin dan secara konsisten menginformasikan prioritisasi refactoring di seluruh organisasi.
- **Level 4, Manage (Mengelola):** Hotspot disilangkan dengan data insiden dan cacat untuk memvalidasi analisis, dan tren di berbagai siklus berturut-turut dilacak secara aktif.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi dapat menunjukkan perbaikan tingkat cacat atau pengiriman yang spesifik dan terukur dari investasi refactoring berbasis hotspot, dan analisis ini menjadi masukan rutin yang tepercaya bagi keputusan investasi rekayasa.

## Gagasan untuk diskusi

1. Seperti apa daftar hotspot teratas kita bila kita menjalankan analisis ini hari ini?
2. Apakah daftar itu cocok dengan, atau bertentangan dengan, perasaan informal tim kita saat ini tentang area masalah terburuk kita?
3. Apakah kita punya data untuk menyilangkan hotspot dengan insiden yang sebenarnya?
4. Pernahkah area masalah yang sudah diketahui bertahan meskipun ada upaya perbaikan sebelumnya, dan mengapa?
5. Apa biayanya bagi kita bila hotspot teratas kita saat ini dibiarkan tak tertangani selama setahun lagi?

## Poin-poin utama

- **Churn yang digabung dengan kompleksitas** mengidentifikasi hotspot sejati jauh lebih andal daripada salah satu metrik saja.
- Analisis hotspot **tidak memerlukan survei manual**; ia dapat dihitung secara otomatis dari data kendali versi dan analisis statis yang sudah ada.
- Perlakukan peringkat hotspot sebagai **bukti untuk prioritisasi**, bukan vonis otomatis; penilaian manusia tetap diperlukan.
- **Silangkan hotspot dengan data insiden dan cacat** untuk memvalidasi analisis dan memperkuat kasus untuk menindaklanjutinya.
- Lacak hotspot **di berbagai siklus analisis berturut-turut** untuk memastikan perbaikan benar-benar berhasil, bukan hanya sekali sebagai potret sesaat.

## Referensi dan bacaan lanjutan

- *Your Code as a Crime Scene*, by Adam Tornhill (teks dasar tentang analisis hotspot yang menggabungkan churn dan kompleksitas dari data kendali versi).
- *Software Design X-Rays*, by Adam Tornhill (teknik lanjutan untuk analisis kode perilaku menggunakan riwayat kendali versi).
- Nagappan, Nachiappan, and Thomas Ball, "Use of Relative Code Churn Measures to Predict System Defect Density," *ICSE* (2005): penelitian empiris tentang hubungan antara churn dan kepadatan cacat.
- *Refactoring: Improving the Design of Existing Code*, by Martin Fowler (teknik untuk menangani kompleksitas kebetulan setelah teridentifikasi).
