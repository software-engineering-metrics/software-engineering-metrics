# Metrik Rekayasa Perangkat Lunak

Buku kerja tentang mengukur **rekayasa perangkat lunak** dengan baik: cara memilih metrik yang mencerminkan hasil nyata dan bukan sekadar aktivitas, kerangka yang menjadi dasar buku ini (Flow Framework, kerangka SPACE, teori antrean, dan metrik DORA), keluarga metrik yang penting, dan cara menjalankan program metrik yang memperbaiki tim alih-alih mengawasinya.

Buku ini mencakup pengiriman dan aliran, pengalaman pengembang, kode dan kualitas, hasil produk dan bisnis, keandalan dan keamanan, serta bagaimana AI generatif membentuk ulang makna angka-angka ini.

- **[Apa itu metrik rekayasa perangkat lunak?](pendahuluan/apa-itu-metrik-rekayasa-perangkat-lunak.md):** mulai dari sini
- **[Pengantar](pendahuluan/pengantar.md):** apa itu buku ini dan cara membacanya
- **[Daftar isi](pendahuluan/daftar-isi.md):** daftar lengkap topik

## Cara membaca buku ini

Bagian adalah bilangan bulat; topik adalah desimal. Topik **N.0** memperkenalkan setiap bagian; **N.1, N.2, …** adalah topik-topiknya. Bagian 9 menghimpun lampiran (glosarium, rujukan rumus, daftar periksa, templat, penilaian mandiri kematangan, rujukan, dan indeks). Setiap topik keluarga metrik menyatakan prinsip, rekomendasi, pertukaran, lensa sektor, contoh (perusahaan dan pemerintah), kasus bisnis (ROI/TCO), anti-pola, model kematangan, pertanyaan diskusi, dan rujukan, serta menyebut bagaimana metrik dimanipulasi dan pengaman apa yang menangkapnya. Adopsi secara bertahap; jangan sekaligus.

## Daftar isi

### Bagian 1: Dasar-dasar Pengukuran
- [1.0 Pengantar](topik/01-00-pengantar-bagian-1-dasar-dasar-pengukuran.md)
- [1.1 Mengapa mengukur rekayasa perangkat lunak](topik/01-01-mengapa-mengukur-rekayasa-perangkat-lunak.md)
- [1.2 Hukum Goodhart dan psikologi metrik](topik/01-02-hukum-goodhart-dan-psikologi-metrik.md)
- [1.3 Hasil di atas keluaran: memilih apa yang diukur](topik/01-03-hasil-di-atas-keluaran-memilih-apa-yang-diukur.md)
- [1.4 Tata kelola dan kepemilikan metrik](topik/01-04-tata-kelola-dan-kepemilikan-metrik.md)
- [1.5 Sumber data dan instrumentasi](topik/01-05-sumber-data-dan-instrumentasi.md)
- [1.6 Literasi statistik untuk metrik rekayasa](topik/01-06-literasi-statistik-untuk-metrik-rekayasa.md)

### Bagian 2: Metrik Aliran
- [2.0 Pengantar](topik/02-00-metrik-aliran.md)
- [2.1 Flow Framework](topik/02-01-flow-framework.md)
- [2.2 Item aliran: fitur, cacat, risiko, dan utang](topik/02-02-item-aliran-fitur-cacat-risiko-dan-utang.md)
- [2.3 Velocity aliran dan distribusi aliran](topik/02-03-velocity-aliran-dan-distribusi-aliran.md)
- [2.4 Waktu alir dan beban aliran](topik/02-04-waktu-alir-dan-beban-aliran.md)
- [2.5 Efisiensi aliran dan pekerjaan yang sedang berjalan](topik/02-05-efisiensi-aliran-dan-pekerjaan-yang-sedang-berjalan.md)
- [2.6 Waktu siklus dan komponennya](topik/02-06-waktu-siklus-dan-komponennya.md)
- [2.7 Teori antrean](topik/02-07-teori-antrean.md)
- [2.8 Metrik aliran nilai Lean](topik/02-08-metrik-aliran-nilai-lean.md)
- [2.9 Metrik pull request dan tinjauan kode](topik/02-09-metrik-pull-request-dan-tinjauan-kode.md)
- [2.10 Kerangka metrik DORA](topik/02-10-kerangka-metrik-dora.md)

### Bagian 3: Pengalaman Pengembang dan Kerangka Kerja SPACE
- [3.0 Pengantar](topik/03-00-pengalaman-pengembang-dan-kerangka-kerja-space.md)
- [3.1 Kerangka kerja SPACE](topik/03-01-kerangka-kerja-space.md)
- [3.2 Metrik kepuasan dan kesejahteraan](topik/03-02-metrik-kepuasan-dan-kesejahteraan.md)
- [3.3 Metrik kinerja dan proksi hasil](topik/03-03-metrik-kinerja-dan-proksi-hasil.md)
- [3.4 Metrik aktivitas dan batasannya](topik/03-04-metrik-aktivitas-dan-batasannya.md)
- [3.5 Metrik komunikasi dan kolaborasi](topik/03-05-metrik-komunikasi-dan-kolaborasi.md)
- [3.6 Efisiensi dan aliran: kerja mendalam dan interupsi](topik/03-06-efisiensi-dan-aliran-kerja-mendalam-dan-interupsi.md)
- [3.7 Survei pengalaman pengembang dan metrik DevEx](topik/03-07-survei-pengalaman-pengembang-dan-metrik-devex.md)

### Bagian 4: Metrik kode dan kualitas
- [4.0 Pengantar](topik/04-00-pengantar-bagian-4-metrik-kode-dan-kualitas.md)
- [4.1 Metrik kompleksitas kode](topik/04-01-metrik-kompleksitas-kode.md)
- [4.2 Cakupan pengujian dan efektivitas pengujian](topik/04-02-cakupan-pengujian-dan-efektivitas-pengujian.md)
- [4.3 Churn kode dan analisis hotspot](topik/04-03-churn-kode-dan-analisis-hotspot.md)
- [4.4 Analisis statis dan metrik code smell](topik/04-04-analisis-statis-dan-metrik-code-smell.md)
- [4.5 Pengukuran utang teknis](topik/04-05-pengukuran-utang-teknis.md)
- [4.6 Metrik dokumentasi dan pengetahuan](topik/04-06-metrik-dokumentasi-dan-pengetahuan.md)

### Bagian 5: Metrik Produk dan Bisnis
- [5.0 Pengantar](topik/05-00-metrik-produk-dan-bisnis.md)
- [5.1 Tingkat cacat yang lolos dan kebocoran kualitas](topik/05-01-tingkat-cacat-yang-lolos-dan-kebocoran-kualitas.md)
- [5.2 Adopsi fitur dan metrik penggunaan](topik/05-02-adopsi-fitur-dan-metrik-penggunaan.md)
- [5.3 Metrik hasil pelanggan dan bisnis](topik/05-03-metrik-hasil-pelanggan-dan-bisnis.md)
- [5.4 Biaya dan ekonomi per unit rekayasa](topik/05-04-biaya-dan-ekonomi-per-unit-rekayasa.md)
- [5.5 Pengembalian investasi untuk inisiatif rekayasa](topik/05-05-pengembalian-investasi-untuk-inisiatif-rekayasa.md)

### Bagian 6: Metrik Keandalan, Operasi, dan Keamanan
- [6.0 Pengantar](topik/06-00-pengantar-bagian-6-metrik-keandalan-operasi-dan-keamanan.md)
- [6.1 Indikator, sasaran, dan anggaran kesalahan tingkat layanan](topik/06-01-indikator-sasaran-dan-anggaran-kesalahan-tingkat-layanan.md)
- [6.2 Metrik insiden: deteksi, respons, dan pemulihan](topik/06-02-metrik-insiden-deteksi-respons-dan-pemulihan.md)
- [6.3 Metrik on-call, kapasitas, dan beban operasional](topik/06-03-metrik-on-call-kapasitas-dan-beban-operasional.md)
- [6.4 Metrik manajemen keamanan dan kerentanan](topik/06-04-metrik-manajemen-keamanan-dan-kerentanan.md)

### Bagian 7: Metrik di Era AI
- [7.0 Pengantar](topik/07-00-metrik-di-era-ai.md)
- [7.1 Pergeseran paradigma AI generatif](topik/07-01-pergeseran-paradigma-ai-generatif.md)
- [7.2 Mengukur pengembangan perangkat lunak berbantuan AI](topik/07-02-mengukur-pengembangan-perangkat-lunak-berbantuan-ai.md)
- [7.3 Risiko inflasi metrik dan pengenceran kualitas](topik/07-03-risiko-inflasi-metrik-dan-pengenceran-kualitas.md)
- [7.4 Telemetri hasil sebagai bintang utara yang baru](topik/07-04-telemetri-hasil-sebagai-bintang-utara-yang-baru.md)

### Bagian 8: Membangun Program Metrik
- [8.0 Pengantar](topik/08-00-membangun-program-metrik.md)
- [8.1 Merancang dasbor metrik rekayasa](topik/08-01-merancang-dasbor-metrik-rekayasa.md)
- [8.2 Lanskap perangkat: membangun sendiri atau membeli](topik/08-02-lanskap-perangkat-membangun-sendiri-atau-membeli.md)
- [8.3 Meluncurkan metrik tanpa menumbuhkan ketakutan](topik/08-03-meluncurkan-metrik-tanpa-menumbuhkan-ketakutan.md)
- [8.4 Model kematangan untuk program metrik rekayasa](topik/08-04-model-kematangan-untuk-program-metrik-rekayasa.md)
- [8.5 Peta jalan adopsi bertahap](topik/08-05-peta-jalan-adopsi-bertahap.md)

### Bagian 9: Lampiran
- [9.0 Lampiran](topik/09-00-lampiran.md)
- [9.1 Glosarium](topik/09-01-glosarium.md)
- [9.2 Referensi definisi metrik dan rumus](topik/09-02-referensi-definisi-metrik-dan-rumus.md)
- [9.3 Daftar periksa](topik/09-03-daftar-periksa.md)
- [9.4 Templat](topik/09-04-templat.md)
- [9.5 Penilaian mandiri kematangan](topik/09-05-penilaian-mandiri-kematangan.md)
- [9.6 Referensi dan bacaan lanjutan](topik/09-06-referensi-dan-bacaan-lanjutan.md)
- [9.7 Indeks](topik/09-07-indeks.md)

## Tema lintas bagian

[Hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) mengatur setiap topik: ukuran yang menjadi target berhenti menjadi ukuran yang baik, sehingga setiap keluarga metrik di sini datang bersama jalur manipulasi dan pengamannya. Hasil diberi bobot di atas keluaran dan aktivitas di seluruh buku. Kewajiban pelaporan pemerintah dan perusahaan diperlakukan sebagai masukan desain, bukan renungan belakangan, dan pergeseran ke AI generatif diperlakukan sebagai alasan untuk memeriksa ulang makna metrik-metrik ini, bukan sekadar kolom baru di dasbor.

## Di luar topik

- **[Contoh](contoh/ikhtisar.md):** contoh kecil dan konkret gagasan buku ini dalam penggunaan.
- **[Tentang proyek ini](proyek/ikhtisar.md):** bagaimana buku ini dibangun, diperiksa, dan diterbitkan.
- **[Kontribusi](kontribusi/ikhtisar.md):** cara membantu, dan aturan gaya rumah.
