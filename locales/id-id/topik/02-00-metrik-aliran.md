# 2.0 Pengantar Bagian 2: Metrik Aliran

Jika Bagian 1 adalah filosofi pengukuran, Bagian 2 adalah tempat filosofi itu
bertemu dengan pengiriman perangkat lunak itu sendiri: metrik yang menjelaskan
bukan hanya seberapa cepat dan seberapa aman sebuah tim memindahkan kode dari
sebuah gagasan ke sistem yang berjalan, tetapi juga jenis nilai apa yang
sebenarnya mengalir melalui jalur tersebut. Bagian ini disusun di sekitar
**Flow Framework**, sebuah model yang dibuat oleh Mik Kersten dalam bukunya
tahun 2018, *Project to Product*, yang memandang pengiriman perangkat lunak
sebagai aliran nilai (value stream) dan memberinya kosakata bersama: empat
jenis item aliran dan lima metrik aliran yang menghubungkan aktivitas rekayasa
dengan strategi bisnis dalam istilah yang benar-benar dapat dipakai oleh
pemangku kepentingan non-teknis.

Pilihan kerangka kerja pengorganisasi itu disengaja. Metrik DORA, yaitu
frekuensi deployment, lead time, tingkat kegagalan perubahan, dan waktu
pemulihan, benar-benar tervalidasi oleh riset dan tetap menjadi salah satu
kerangka kerja pengiriman dengan bukti terbaik yang tersedia, tetapi metrik
itu mengukur mekanika jalur pengiriman, bukan apa yang mengalir di dalamnya.
Sebuah tim dapat mencatat angka DORA yang sangat baik sementara nilai yang
sebenarnya mereka kirimkan diam-diam bergeser ke arah pengerjaan ulang, atau
menjauh dari pekerjaan utang dan risiko yang melindungi masa depan sistem.
Bagian ini membahas DORA secara lengkap, tetapi sebagai satu topik rujukan
terpadu di bagian akhir (topik 2.10), karena pertanyaan yang lebih mendesak
dan lebih sering terlewat bagi kebanyakan organisasi bukanlah "seberapa cepat
jalur pengiriman kami" melainkan "apa yang sebenarnya dikirimkan oleh jalur
pengiriman kami." Setiap topik dalam bagian ini tetap mengikuti disiplin yang
sama seperti di Bagian 1: sebutkan metriknya, namai cara metrik itu
dimanipulasi, dan pasangkan dengan pagar pengaman yang menangkap manipulasi
tersebut.

Bagi tim besar, metrik aliran adalah hal yang memungkinkan perbandingan
antartim tanpa kehilangan pandangan terhadap nilai. Tim platform, tim seluler,
dan tim data bisa nyaris tidak memiliki kesamaan dalam pekerjaan sehari-hari,
tetapi velocity aliran dan distribusi aliran, bila dihitung secara konsisten,
memungkinkan pimpinan mengajukan pertanyaan yang adil kepada ketiganya: apakah
tim ini mengirimkan jenis nilai yang memang dibutuhkan oleh fasenya saat ini.
Organisasi perusahaan besar dan pemerintahan mengandalkan metrik bagian ini
untuk membenarkan investasi platform, membandingkan imbal hasil dari berbagai
upaya modernisasi yang bersaing, dan menunjukkan, dengan bukti dan bukan
anekdot, bahwa kapasitas rekayasa dialokasikan seperti yang diyakini pimpinan.

## Topik dalam bagian ini

- **2.1 The Flow Framework:** Asal-usul kerangka kerja ini, model aliran
  nilainya, dan alasan buku ini memakainya, bukan DORA saja, untuk menata
  metrik pengiriman dan aliran.
- **2.2 Item aliran: fitur, cacat, risiko, dan utang:** Taksonomi empat jenis
  dalam kerangka kerja ini, alokasi kapasitas yang bersifat zero-sum, dan
  bagaimana klasifikasi dimanipulasi bila diterapkan secara retroaktif.
- **2.3 Velocity aliran dan distribusi aliran:** Seberapa banyak yang
  dikirimkan dan jenis nilai apa itu, selalu dibaca bersamaan.
- **2.4 Waktu alir dan beban aliran:** Bagaimana hukum Little membuktikan bahwa
  aliran nilai yang kelebihan beban melambat secara matematis, bukan sekadar
  kemungkinan.
- **2.5 Efisiensi aliran dan pekerjaan yang sedang berjalan:** Mengapa sibuk
  tidak sama dengan cepat, dan bagaimana pembatasan pekerjaan yang sedang
  berjalan justru meningkatkan throughput secara berlawanan dengan intuisi.
- **2.6 Waktu siklus dan komponen-komponennya:** Memecah waktu rekayasa sebuah
  perubahan menjadi tahap-tahap penyusunnya agar tim tahu persis ke mana waktu
  itu sebenarnya pergi.
- **2.7 Teori antrean:** Matematika di balik beban aliran, waktu alir, waktu
  siklus, dan pekerjaan yang sedang berjalan, serta alasan waktu tunggu pada
  sumber daya bersama melonjak ketika utilisasi mendekati batasnya.
- **2.8 Metrik aliran nilai Lean:** Perangkat Lean klasik, lead time, waktu
  proses, waktu siklus, persen lengkap dan akurat, serta takt time, yang
  menjadi asal metrik khusus perangkat lunak di bagian ini, dan cara
  menjembatani kedua kosakata itu.
- **2.9 Metrik pull request dan tinjauan kode:** Metrik yang berada di dalam
  satu tahap jalur pengiriman, dan bagaimana metrik itu dapat merusak kualitas
  tinjauan bila dipakai secara ceroboh.
- **2.10 Kerangka kerja metrik DORA:** Keempat metrik DORA secara lengkap,
  sengaja ditempatkan terakhir karena metrik itu mengukur jalur pengiriman,
  bukan nilai yang mengalir di dalamnya.

## Bagaimana topik-topik ini saling berkaitan

Topik 2.1 memperkenalkan Flow Framework secara keseluruhan; topik 2.2
memberikan taksonomi item aliran, dan topik 2.3 serta 2.4 bersama-sama
mencakup kelima metrik alirannya, velocity dan distribusi bersama, lalu waktu
dan beban bersama, dengan beban dan waktu terikat langsung pada hukum Little.
Topik 2.5 sampai 2.7 memperbesar mekanika di balik waktu alir dan waktu siklus
secara khusus: efisiensi aliran dan pekerjaan yang sedang berjalan menjelaskan
mengapa tahap-tahap rekayasa sering lebih lambat daripada kelihatannya, waktu
siklus menguraikan bagian rekayasa itu menjadi tahap-tahapnya, dan teori
antrean memformalkan, dalam istilah matematika yang dapat dibuktikan, mengapa
semua klaim topik-topik sebelumnya tentang beban, waktu tunggu, dan utilisasi
itu benar. Topik 2.8 mundur selangkah untuk menelusuri semuanya ke asalnya
dalam pemetaan aliran nilai Lean klasik, kosakata bersama yang menjadi dasar
generalisasi metrik khusus perangkat lunak di bagian ini. Topik 2.9 membahas
satu-satunya tahap jalur pengiriman yang paling cepat dapat diperbaiki oleh
kebanyakan tim. Topik 2.10 menutup bagian ini dengan metrik DORA secara
lengkap, disajikan sebagai lapisan rujukan yang berbukti kuat tetapi lebih
sempit, setelah gambaran yang lebih luas dan berorientasi bisnis dari
topik-topik sebelumnya sudah terlihat.

Disiplin pagar pengaman di bagian ini terhubung langsung kembali ke topik 1.2:
velocity aliran tidak pernah dilaporkan tanpa distribusi aliran di sampingnya,
dan metrik kecepatan DORA tetap dipasangkan dengan metrik stabilitasnya, agar
sebuah tim tidak dapat memperbaiki angka kecepatan dengan diam-diam mengirim
kode yang lebih berisiko atau ragam nilai yang lebih sempit. Pasangan itu bukan
kebetulan bagi kedua kerangka kerja tersebut; itulah wawasan utama masing-masing,
dan metrik keandalan di Bagian 6 memperluas separuh stabilitas dari pasangan
yang sama itu ke operasi produksi setelah kode terlanjur dikirim.
