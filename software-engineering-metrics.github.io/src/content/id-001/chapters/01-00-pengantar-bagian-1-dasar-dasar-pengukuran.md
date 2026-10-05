# 1.0 Pengantar Bagian 1: Dasar-dasar Pengukuran

Sebelum buku ini menyebut satu metrik pun, ia harus menjawab pertanyaan yang
lebih sulit: pengukuran itu *untuk* apa? Setiap tim yang pernah membangun
dasbor pada akhirnya juga pernah melihat sebuah angka membaik sementara hal
yang seharusnya diwakilinya justru memburuk. Itu bukan kegagalan perangkat.
Itu akibat yang bisa diperkirakan dari melewatkan dasar-dasar yang dibahas
bagian ini: mengapa Anda mengukur sama sekali, apa yang terjadi pada sebuah
metrik begitu orang tahu metrik itu diawasi, bagaimana memberi bobot lebih
pada hasil ketimbang aktivitas, siapa yang memiliki sebuah angka beserta
definisinya, dari mana data sebenarnya berasal, dan bagaimana membaca sinyal
yang berisik tanpa menipu diri sendiri.

Bagi tim besar, dasar-dasar ini berhenti menjadi pilihan. Satu tim bisa saja
bertahan dengan angka ad hoc yang dilirik manajer seminggu sekali. Organisasi
dengan ratusan insinyur, puluhan dasbor, dan jajaran pimpinan yang melapor ke
atas tidak bisa begitu. Pada skala itu, metrik yang tidak punya pemilik atau
didefinisikan dengan buruk tidak hanya menyesatkan satu tim, tetapi menyesatkan
semua pihak di hilir yang memercayai angka itu tanpa memeriksa bagaimana angka
itu dibuat, dan mahal untuk dibenahi setelah perilaku sempat menyesuaikan diri
untuk memanipulasinya.

Organisasi perusahaan besar dan pemerintahan merasakan hal ini paling tajam,
karena metrik mereka sering membawa konsekuensi di luar tim yang
menghasilkannya: keputusan anggaran, laporan kinerja publik, temuan audit, dan
kontrak vendor. Metrik yang tampak seperti kemudahan internal tim rekayasa bisa
diam-diam menjadi masukan penting yang tak dipertanyakan bagi keputusan yang
dibuat orang-orang yang tidak pernah melihat jalur data yang
menghasilkannya. Memastikan dasar-dasarnya benar adalah yang membuat bobot
itu bisa dipikul.

## Topik dalam bagian ini

- **1.1 Mengapa mengukur rekayasa perangkat lunak:** Alasan untuk mengukur
  sama sekali, apa yang seharusnya dicapai, dan perbedaan antara mengukur
  untuk belajar dan mengukur untuk menghakimi.
- **1.2 Hukum Goodhart dan psikologi metrik:** Satu gagasan yang menaungi
  setiap topik lain dalam buku ini: ukuran yang menjadi target berhenti
  menjadi ukuran yang baik, beserta mekanisme psikologis yang membuat
  manipulasi (gaming) nyaris tak terelakkan begitu orang tahu mereka diawasi.
- **1.3 Hasil di atas keluaran: memilih apa yang diukur:** Cara
  mengarahkan kumpulan metrik ke hasil, bukan aktivitas, dengan memakai
  pembedaan klasik masukan/keluaran/hasil dan pola bintang utara (north-star).
- **1.4 Tata kelola dan kepemilikan metrik:** Siapa yang memutuskan apa yang
  diukur, siapa yang memiliki sebuah definisi, dan bagaimana piagam metrik
  menjaga dasbor yang terus tumbuh agar tidak berubah menjadi hamparan tanpa
  pertanggungjawaban.
- **1.5 Sumber data dan instrumentasi:** Dari mana metrik rekayasa sebenarnya
  berasal, instrumentasi versus laporan mandiri, dan masalah kualitas data
  yang diam-diam membatalkan sebuah dasbor sebelum ada yang menyadarinya.
- **1.6 Literasi statistik untuk metrik rekayasa:** Penilaian statistik
  minimum yang dibutuhkan tim untuk membaca metrik dengan jujur: persentil
  versus rata-rata, ukuran sampel, regresi ke rata-rata, dan variabel
  pengganggu (confounding).

## Bagaimana topik-topik ini saling berkaitan

Keenam topik ini tersusun dalam urutan yang ketat. Topik 1.1 bertanya mengapa
mengukur sama sekali, yang penting karena tim yang belum menjawabnya akan
mengumpulkan angka yang tidak ditindaklanjuti siapa pun. Topik 1.2 adalah
poros tempat seluruh buku berputar: begitu Anda menerima bahwa ukuran apa pun
bisa menjadi target dan dimanipulasi, rekomendasi di setiap topik berikutnya
mengalir dari upaya merancang untuk menghadapi risiko itu. Topik 1.3 mengubah
kehati-hatian itu menjadi aturan positif: beri bobot pada hasil, karena hasil
adalah kategori yang paling sulit dimanipulasi dengan murah. Topik 1.4
membuat tata kelola menjadi konkret, topik 1.5 membuat data menjadi konkret,
dan topik 1.6 memberi Anda penilaian statistik agar tidak tertipu oleh derau
bahkan setelah tata kelola dan instrumentasi sudah benar.

Semua yang ada di hilir bergantung pada bagian ini. Metrik aliran dan metrik
DORA di Bagian 2, serta kerangka SPACE di Bagian 3, pada dasarnya adalah
contoh kerja dari prinsip pembobotan hasil dan pemasangan pagar pengaman
(guardrail) yang diuraikan di topik 1.2 dan 1.3. Panduan perancangan dasbor di
topik 8.1 mengandaikan model tata kelola dari topik 1.4. Dan model kematangan
yang menutup setiap topik dalam buku ini, di balik lima tingkatnya, adalah
model kematangan untuk disiplin yang persis diperkenalkan bagian ini:
mengukur dengan sungguh-sungguh, dan memeriksa pekerjaan sendiri.
