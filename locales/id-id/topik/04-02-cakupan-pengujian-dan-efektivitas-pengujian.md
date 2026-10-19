# 4.2 Cakupan pengujian dan efektivitas pengujian

## Gambaran umum dan motivasi

**[Cakupan pengujian](https://en.wikipedia.org/wiki/Code_coverage)** mengukur persentase kode yang dieksekusi oleh sebuah rangkaian pengujian: cakupan baris, cakupan percabangan, atau cakupan jalur yang lebih ketat. Ini salah satu metrik yang paling banyak dilacak di seluruh buku ini, murah dihitung, mudah divisualisasikan sebagai satu persentase, dan karena itu salah satu yang paling sering dimanipulasi (gaming), persis seperti yang diprediksi topik 1.2 untuk metrik apa pun yang menjadi target. Sebuah rangkaian pengujian bisa mencapai cakupan tinggi sambil hampir tidak memverifikasi apa pun yang bermakna, karena cakupan mengukur apakah kode dieksekusi selama pengujian berjalan, bukan apakah pengujian benar-benar memeriksa bahwa kode itu berperilaku benar.

Jurang antara cakupan dan efektivitas pengujian yang sesungguhnya ini bukan catatan kaki kecil; ia adalah kekhawatiran utama topik ini. Pengujian yang memanggil sebuah fungsi dan tidak menegaskan apa pun tentang hasilnya menambah cakupan sama persis dengan pengujian yang memverifikasi perilaku fungsi itu secara menyeluruh di berbagai kasus tepi. Perbaikan yang direkomendasikan topik ini, **pengujian mutasi**, yang dengan sengaja menyisipkan kesalahan kecil buatan ke dalam kode dan memeriksa apakah rangkaian pengujian benar-benar menangkapnya, adalah jawaban langsung atas jurang ini, dan topik ini memperlakukannya sebagai pelengkap cakupan yang diperlukan, bukan tambahan opsional.

Bagi tim besar, target cakupan sering diadopsi di seluruh organisasi sebagai gerbang kualitas, tepatnya jenis metrik berinsentif dan berprofil tinggi yang menurut topik 1.2 paling terbuka terhadap manipulasi. Organisasi perusahaan besar dan pemerintahan yang menetapkan persyaratan persentase cakupan menyeluruh tanpa pemeriksaan efektivitas yang dipasangkan pada dasarnya sedang memberi insentif pada pola manipulasi ambang batas yang dijelaskan buku ini: pengujian sepele yang ditulis semata-mata untuk mencapai angka, tanpa perbaikan yang sepadan dalam pencegahan cacat yang sebenarnya.

## Prinsip utama

- **Cakupan mengukur eksekusi, bukan verifikasi.** Sebuah baris yang dijalankan oleh pengujian tidak mengatakan apa pun tentang apakah pengujian itu memeriksa sesuatu yang bermakna mengenainya.
- **Target cakupan tanpa pemeriksaan efektivitas adalah contoh buku teks penyiapan hukum Goodhart** (topik 1.2): angkanya membaik sementara kualitas sejati tidak.
- **Pengujian mutasi adalah pelengkap cakupan yang diperlukan**, bukan pengganti; gunakan keduanya bersama-sama.
- **Cakupan lebih berguna sebagai batas bawah daripada sebagai target yang dimaksimalkan.** Angka rendah mengungkap kode yang benar-benar belum teruji; mengejar 100% sering menghasilkan imbal hasil yang menurun atau bahkan negatif.
- **Cakupan jalur kritis lebih penting daripada cakupan merata yang menyeluruh.** Tidak semua kode membawa risiko yang sama bila gagal.

## Rekomendasi

### Gunakan cakupan untuk menemukan kode yang belum teruji, bukan sebagai target yang dimaksimalkan

Perlakukan laporan cakupan terutama sebagai peta tentang apa yang sama sekali tidak punya pengujian, yang merupakan informasi yang benar-benar berguna, bukan sebagai skor yang didorong menuju 100%. Kode dengan cakupan nol adalah celah nyata yang layak ditutup; nilai marginal mendorong cakupan dari 85% ke 95% biasanya jauh lebih rendah dan sering tidak sepadan dengan upaya yang dibutuhkan, terutama bila upaya itu menghasilkan pengujian bernilai rendah hanya untuk mencapai angka yang lebih tinggi.

### Pasangkan setiap target cakupan dengan pengujian mutasi

Perangkat **pengujian mutasi** secara otomatis menyisipkan kesalahan kecil ke dalam kode Anda, membalik operator perbandingan, mengubah kondisi batas, lalu menjalankan rangkaian pengujian Anda terhadap setiap versi yang telah dimutasi. Rangkaian pengujian yang "membunuh" (gagal terhadap) sebagian besar mutan benar-benar memverifikasi perilaku; rangkaian pengujian dengan cakupan baris tinggi tetapi tingkat pembunuhan mutan rendah hanya mengeksekusi kode tanpa memeriksanya secara bermakna. Pemasangan ini adalah pagar pengaman (guardrail) paling efektif terhadap manipulasi target cakupan, dan buku ini merekomendasikannya sebagai praktik standar, bukan teknik lanjutan atau opsional.

### Prioritaskan cakupan dan pengujian mutasi pada jalur kritis terlebih dahulu

Tidak semua kode membawa risiko yang sama. Jalur pemrosesan pembayaran, pemeriksaan autentikasi, atau skrip migrasi data layak mendapat pengujian yang jauh lebih ketat daripada laporan administratif yang jarang dipakai. Alih-alih mengejar cakupan merata di seluruh basis kode, identifikasi jalur kode Anda yang berisiko tertinggi dan berkonsekuensi tertinggi, dan pusatkan upaya cakupan maupun pengujian mutasi di sana lebih dulu, menerima cakupan lebih rendah pada kode yang benar-benar berisiko rendah sebagai pertukaran yang disengaja dan terinformasi, bukan kelalaian.

### Waspadai pola-pola manipulasi cakupan yang spesifik

Cara paling umum cakupan dimanipulasi, begitu ia menjadi target, meliputi: pengujian yang memanggil fungsi tetapi tidak menegaskan apa pun yang bermakna tentang hasilnya (manipulasi ambang batas dari topik 1.2 yang diterapkan pada metrik ini), menonaktifkan atau menghapus pengujian yang gagal alih-alih memperbaiki masalah yang mendasarinya, dan mengecualikan kode yang sulit diuji sepenuhnya dari perhitungan cakupan alih-alih menangani mengapa kode itu sulit diuji. Audit sampel pengujian secara berkala secara langsung, dengan membaca asersi sebenarnya, alih-alih hanya memercayai persentase cakupan.

### Tetapkan batas bawah cakupan, bukan batas atas, di pipeline CI Anda

Konfigurasikan pipeline build Anda agar gagal bila cakupan turun di bawah batas bawah yang disepakati untuk kode baru, mencegah kemunduran, alih-alih mewajibkan setiap perubahan mendorong angka keseluruhan lebih tinggi. Pembedaan ini penting: batas bawah melindungi dari kemunduran tanpa menciptakan tekanan naik tanpa henti yang sama, yang menghasilkan pengujian bernilai rendah yang ditulis semata-mata untuk menaikkan angka sedikit demi sedikit.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Persentase cakupan saja | Murah, sederhana, didukung luas oleh perangkat | Mudah dimanipulasi; mengukur eksekusi, bukan verifikasi |
| Cakupan ditambah pengujian mutasi | Memverifikasi pengujian benar-benar memeriksa perilaku, tahan terhadap manipulasi | Lebih mahal secara komputasi; memerlukan investasi perangkat |
| Target cakupan seragam di seluruh basis kode | Mudah dinyatakan dan ditegakkan | Membuang upaya pada kode berisiko rendah; kurang berinvestasi di tempat lain relatif terhadap risiko |
| Cakupan berbasis risiko, jalur kritis lebih dulu | Memusatkan upaya di tempat yang paling penting | Memerlukan penilaian untuk mengidentifikasi jalur yang benar-benar kritis dengan tepat |

Ketegangan utamanya adalah **kesederhanaan versus kejujuran**. Satu persentase cakupan mudah dilaporkan dan mudah ditetapkan sebagai target, tetapi kesederhanaan itulah yang membuatnya begitu mudah dimanipulasi begitu ia menjadi angka berinsentif. Selesaikan ketegangan ini dengan menerima kerumitan tambahan pengujian mutasi dan prioritisasi berbasis risiko sebagai harga sinyal yang jujur, dan dengan mengomunikasikan secara eksplisit kepada tim Anda mengapa angka cakupan keseluruhan yang lebih rendah, yang terpusat dengan benar pada jalur kritis dan didukung tingkat pembunuhan mutan yang kuat, lebih berharga daripada angka yang lebih tinggi, lebih merata, tetapi kurang efektif diverifikasi.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Berapa tingkat pembunuhan mutan kita pada jalur kode berisiko tertinggi, dan bagaimana dibandingkan dengan persentase cakupan kita pada kode yang sama?** Jurang besar antara angka cakupan yang tinggi dan tingkat pembunuhan mutan yang rendah adalah tanda paling jelas bahwa cakupan saja tidak memberi tahu Anda apa yang Anda kira ia sampaikan.

2. **Pernahkah kita menulis pengujian terutama untuk menaikkan angka cakupan, dengan sedikit pemikiran nyata tentang apa yang seharusnya diverifikasi?** Jujurlah di sini; ini terjadi lebih sering daripada yang ingin diakui tim, terutama di bawah tekanan tenggat ketika gerbang cakupan menghalangi sebuah merge.

3. **Apakah upaya cakupan kita terpusat pada jalur kode berisiko tertinggi, atau tersebar merata tanpa memandang konsekuensi bila kode itu gagal?** Petakan distribusi cakupan Anda saat ini terhadap penilaian risiko yang jujur atas basis kode Anda dan carilah ketidakcocokannya.

4. **Pernahkah kita menonaktifkan atau menghapus pengujian yang gagal alih-alih memperbaiki masalah mendasar yang diungkapnya?** Ini salah satu bentuk manipulasi cakupan yang paling merusak, karena secara aktif menghapus perlindungan nyata sementara angka cakupan yang dilaporkan mungkin nyaris tidak bergerak.

5. **Apakah pipeline CI kita menegakkan batas bawah cakupan untuk kode baru, atau mendorong batas atas yang terus naik tanpa memandang imbal hasil yang menurun?** Diskusikan apakah rancangan gerbang Anda saat ini menciptakan insentif yang tepat, melindungi dari kemunduran, atau yang keliru, tekanan naik tanpa henti yang memberi hadiah pada pengisian pengujian bernilai rendah.

6. **Kode apa di basis kode kita yang dikecualikan dari perhitungan cakupan, dan apakah pengecualian itu dibenarkan atau justru menyembunyikan celah pengujian yang nyata?** Tinjau konfigurasi pengecualian Anda yang sebenarnya; daftar ini lazim tumbuh diam-diam seiring waktu tanpa ada yang meninjau ulang apakah setiap pengecualian masih dibenarkan.

## Lensa sektor

**Startup.** Target cakupan formal sering tidak perlu pada tahap sedini ini; fokuskan upaya menulis pengujian langsung pada jalur kode Anda yang paling berisiko dan paling kritis bagi bisnis (biasanya logika pembayaran atau alur kerja inti) alih-alih mengejar persentase menyeluruh pada basis kode yang masih berubah cepat dan mungkin akan banyak ditulis ulang tak lama lagi.

**Usaha kecil.** Sebagian besar platform CI melaporkan cakupan secara otomatis dengan biaya persiapan minimal; gunakan terutama untuk menemukan kode kritis yang sama sekali belum teruji alih-alih mengejar persentase target tertentu, dan pertimbangkan pengujian mutasi hanya setelah Anda memiliki kapasitas rekayasa untuk menindaklanjuti apa yang diungkapkannya.

**Perusahaan besar.** Target cakupan menyeluruh di seluruh organisasi adalah kesalahan yang lazim dan berdampak besar pada skala ini, karena memberi insentif pada manipulasi persis seperti yang dijelaskan topik ini di puluhan tim sekaligus. Tetapkan ekspektasi cakupan berbasis risiko yang bervariasi menurut kekritisan layanan, dan investasikan pada infrastruktur pengujian mutasi khusus untuk sistem berisiko tertinggi Anda.

**Pemerintahan.** Persyaratan cakupan kadang muncul dalam dokumen pengadaan atau kepatuhan sebagai proksi kasar yang mudah ditentukan untuk jaminan kualitas. Bila memungkinkan, pasangkan persentase cakupan yang diwajibkan kontrak dengan persyaratan efektivitas berbasis pengujian mutasi atau berbasis cacat, agar insentif kontraktual tidak tanpa sengaja memberi hadiah pada pengisian pengujian bernilai rendah yang diperingatkan topik ini.

## Contoh

**Perusahaan besar.** Pimpinan sebuah platform e-commerce telah menetapkan persyaratan cakupan 95% di seluruh perusahaan untuk semua kode baru, ditegakkan sebagai gerbang CI yang keras. Audit dua tahun kemudian, dipicu oleh gelombang cacat produksi pada kode yang dianggap teruji dengan baik, menemukan tingkat pembunuhan mutan di bawah 40% di sebagian besar basis kode: tim telah menulis pengujian yang mengeksekusi jalur kode tanpa menegaskan perilakunya secara bermakna, semata-mata untuk memenuhi gerbang di bawah tekanan tenggat. Perusahaan mengganti persyaratan cakupan menyeluruh dengan kebijakan berjenjang berdasarkan risiko: cakupan ketat ditambah pengujian mutasi wajib dengan ambang batas tingkat pembunuhan 80% untuk kode pembayaran dan autentikasi, serta batas bawah cakupan yang jauh lebih ringan untuk perangkat internal berisiko rendah, yang sekaligus mengurangi upaya pengujian yang terbuang dan secara terukur memperbaiki tingkat cacat pada jalur yang benar-benar kritis.

**Pemerintahan.** Sistem kelayakan tunjangan milik sebuah badan kesehatan masyarakat diwajibkan secara kontrak untuk mempertahankan cakupan pengujian 90% di bawah perjanjian dengan vendor pengembangnya. Tinjauan pascainsiden, setelah cacat perhitungan kelayakan yang signifikan terkirim padahal persyaratan cakupan terpenuhi, menemukan bahwa fungsi spesifik yang bertanggung jawab mencapai cakupannya sepenuhnya lewat pengujian yang memanggil fungsi dengan masukan valid tetapi tidak pernah menguji kondisi batas atau masukan tidak valid, tepat di tempat cacat itu terjadi. Kontrak vendor yang direvisi badan itu kini mewajibkan skor pengujian mutasi yang terdokumentasi bersama cakupan untuk setiap kode perhitungan kelayakan, menutup celah spesifik yang memungkinkan pengujian yang patuh tetapi tidak efektif memenuhi kontrak.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari memasangkan cakupan dengan pengujian mutasi adalah menangkap jurang antara kualitas pengujian yang tampak dan yang sebenarnya sebelum jurang itu menelan biaya berupa cacat produksi. Contoh e-commerce di atas menunjukkan polanya dengan jelas: persyaratan cakupan saja telah menghasilkan rasa aman yang palsu, yang akhirnya dibongkar oleh gelombang cacat dengan biaya jauh lebih besar daripada investasi pengujian mutasi yang akan menangkap celah itu lebih awal.

Total biaya kepemilikan mencakup biaya komputasi pengujian mutasi, yang lebih mahal dijalankan daripada instrumentasi cakupan sederhana dan karena itu biasanya dicadangkan untuk kode jalur kritis, bukan seluruh basis kode, ditambah waktu rekayasa untuk menafsirkan dan menindaklanjuti hasilnya. Biaya itu terbenarkan secara khusus untuk kode berisiko tertinggi, di mana biaya celah efektivitas pengujian yang tidak terdeteksi paling tinggi.

## Anti-pola dan jebakan

- **Memperlakukan persentase cakupan sebagai vonis langsung atas kualitas:** ia mengukur eksekusi, bukan verifikasi.
- **Menulis pengujian terutama untuk memenuhi gerbang cakupan:** menghasilkan pola manipulasi ambang batas bernilai rendah yang tepat seperti diperingatkan topik 1.2.
- **Menonaktifkan atau menghapus pengujian yang gagal alih-alih memperbaiki masalah mendasarnya:** menghilangkan perlindungan nyata sementara nyaris tidak memengaruhi angka yang dilaporkan.
- **Menerapkan target cakupan seragam tanpa memandang risiko kode:** membuang upaya pada kode berisiko rendah dan kurang berinvestasi pada jalur yang benar-benar kritis.
- **Membiarkan daftar pengecualian tumbuh diam-diam seiring waktu:** menyembunyikan celah pengujian nyata di balik angka cakupan yang secara teknis akurat tetapi menyesatkan.
- **Mengejar batas atas cakupan alih-alih batas bawah cakupan:** menciptakan tekanan naik tanpa henti yang memberi hadiah pada pengisian pengujian ketimbang verifikasi sejati.

## Model kematangan

- **Level 1, Initiate (Memulai):** Cakupan tidak diukur, atau diukur tidak konsisten tanpa batas bawah, target, atau pemeriksaan efektivitas.
- **Level 2, Develop (Mengembangkan):** Target cakupan ada dan dilacak, tetapi tidak ada pengujian mutasi atau prioritisasi berbasis risiko yang menginformasikan cara upaya dialokasikan.
- **Level 3, Standardize (Menstandarkan):** Batas bawah cakupan ditegakkan secara konsisten di CI, dengan prioritisasi berbasis risiko yang mengarahkan di mana upaya cakupan dipusatkan.
- **Level 4, Manage (Mengelola):** Pengujian mutasi berjalan pada kode jalur kritis, dengan ambang batas tingkat pembunuhan yang dilacak dan harus dipenuhi bersama cakupan, dan daftar pengecualian diaudit secara berkala.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi dapat menunjukkan penurunan cacat yang spesifik yang ditelusuri ke prioritisasi berbasis pengujian mutasi, dan data cakupan serta efektivitas bersama-sama secara langsung menginformasikan keputusan investasi pengujian.

## Gagasan untuk diskusi

1. Berapa tingkat pembunuhan mutan kita pada jalur kode kita yang paling kritis, dan apakah kita bahkan mengetahuinya?
2. Pernahkah kita menulis pengujian bernilai rendah semata-mata untuk memenuhi gerbang cakupan?
3. Apakah upaya cakupan kita saat ini terpusat di tempat risiko tertinggi, atau tersebar merata?
4. Kode apa yang saat ini dikecualikan dari perhitungan cakupan, dan apakah pengecualian itu masih dibenarkan?
5. Apakah investasi pengujian mutasi pada sistem berisiko tertinggi kita sepadan dengan biaya komputasinya?

## Poin-poin utama

- Cakupan pengujian mengukur **eksekusi, bukan verifikasi**; baris yang tercakup tidak mengatakan apa pun tentang apakah ia diperiksa secara bermakna.
- Pasangkan cakupan dengan **pengujian mutasi** untuk memverifikasi bahwa pengujian benar-benar menangkap kesalahan nyata, bukan sekadar menjalankan kode.
- Pusatkan upaya pengujian pada **jalur kritis berisiko tinggi** alih-alih mengejar cakupan merata di seluruh basis kode.
- Gunakan cakupan sebagai **batas bawah untuk melindungi dari kemunduran**, bukan batas atas yang dimaksimalkan tanpa henti.
- Waspadai pola-pola manipulasi cakupan yang spesifik: **pengujian bernilai rendah, pengujian gagal yang dinonaktifkan, dan daftar pengecualian yang tumbuh diam-diam**.

## Referensi dan bacaan lanjutan

- *Working Effectively with Legacy Code*, by Michael Feathers (strategi cakupan pengujian untuk basis kode yang sudah ada dan sulit diuji).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011): survei komprehensif teknik pengujian mutasi dan efektivitasnya.
- *xUnit Test Patterns*, by Gerard Meszaros (pola rancangan pengujian yang relevan untuk menulis pengujian yang benar-benar efektif, bukan sekadar memenuhi cakupan).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren, Jez Humble, and Gene Kim (hubungan antara praktik pengujian dan kinerja pengiriman).
