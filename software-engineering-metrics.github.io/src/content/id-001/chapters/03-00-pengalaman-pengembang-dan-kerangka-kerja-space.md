# 3.0 Pengantar Bagian 3: Pengalaman Pengembang dan Kerangka Kerja SPACE

Bagian 2 mengukur pengiriman dari luar: seberapa cepat dan seberapa aman kode
bergerak melalui sebuah pipeline. Bagian ini mengukur pengalaman orang-orang
yang menghasilkan kode tersebut. Bagian ini ada karena serangkaian metrik
pengiriman saja bisa tampak sangat baik, sementara manusia di baliknya
mengalami kelelahan (burnout), tenggelam dalam interupsi, atau diam-diam
kehilangan keterlibatan. Organisasi yang hanya memantau metrik DORA dapat
memperbaikinya selama satu atau dua tahun dengan menekan tim lebih keras,
sampai pengunduran diri, runtuhnya kualitas, atau burnout menghapus seluruh
hasilnya sekaligus. Bagian ini adalah penyeimbangnya.

Pusat perhatiannya adalah [kerangka kerja SPACE](https://queue.acm.org/detail.cfm?id=3454124),
yang dikembangkan oleh para peneliti dari Microsoft, GitHub, dan University of
Victoria khusus sebagai koreksi atas kebiasaan industri mengukur produktivitas
pengembang melalui satu proksi yang mudah dimanipulasi (gaming), seperti
jumlah baris kode atau jumlah commit. SPACE mencakup lima dimensi: kepuasan
dan kesejahteraan, kinerja, aktivitas, komunikasi dan kolaborasi, serta
efisiensi dan aliran (flow). Disiplin utama kerangka kerja ini, dan alasan
bagian ini memperlakukannya dengan ketelitian yang sama seperti Bagian 2
memperlakukan metrik aliran miliknya, adalah bahwa tidak ada satu dimensi pun
yang dapat dipercaya sendirian; nilainya muncul justru dari menjaga kelima
dimensi tetap terlihat bersama-sama, sehingga sebuah tim tidak bisa tampak
baik pada satu sumbu dengan diam-diam merusak sumbu yang lain.

Bagi tim besar, metrik pengalaman pengembang menjawab pertanyaan yang tidak
bisa dijawab DORA: apakah kinerja pengiriman ini berkelanjutan, dan apakah
organisasi mempertahankan orang-orang yang menghasilkannya. Organisasi
perusahaan besar yang mengabaikan bagian ini biasanya baru menemukan
biayanya lewat data pengunduran diri dan wawancara keluar, jauh setelah
kerusakan terjadi. Organisasi pemerintahan, yang sering beroperasi di bawah
batasan gaji sektor publik sehingga sulit bersaing hanya lewat kompensasi,
punya alasan yang sangat kuat untuk memperlakukan pengalaman pengembang
sebagai perhatian utama yang dikelola secara aktif, bukan pikiran susulan.

## Topik dalam bagian ini

- **3.1 Kerangka kerja SPACE:** Kelima dimensi secara bersamaan, mengapa tidak
  ada satu pun yang dapat dipercaya sendirian, dan cara menyusun serangkaian
  metrik yang benar-benar seimbang dari dimensi-dimensi itu.
- **3.2 Metrik kepuasan dan kesejahteraan:** Mengukur kepuasan, frustrasi, dan
  risiko burnout, dimensi yang tidak dapat diamati langsung oleh telemetri
  sistem mana pun.
- **3.3 Metrik kinerja dan proksi hasil:** Dimensi yang paling mudah
  tertukar dengan aktivitas, dan cara mengukur kontribusi hasil yang
  sesungguhnya.
- **3.4 Metrik aktivitas dan batasannya:** Jumlah commit, jumlah baris kode,
  dan alasan mengapa ini adalah dimensi yang paling berbahaya bila diberi
  bobot berlebihan.
- **3.5 Metrik komunikasi dan kolaborasi:** Bagaimana informasi benar-benar
  mengalir antarorang dan antartim, dan seperti apa pola yang sehat.
- **3.6 Efisiensi dan aliran: kerja mendalam dan interupsi:** Melindungi waktu
  tanpa gangguan yang dibutuhkan pekerjaan rekayasa yang sesungguhnya, dan
  mengukur gesekan yang mengikisnya.
- **3.7 Survei pengalaman pengembang dan metrik DevEx:** Cara menjalankan
  survei yang menghasilkan sinyal tepercaya, bukan kontes popularitas, dan
  cara menggabungkannya dengan data objektif.

## Bagaimana topik-topik ini saling berkaitan

Topik 3.1 memperkenalkan kelima dimensi SPACE sekaligus, lalu topik 3.2
sampai 3.6 membahas masing-masing dimensi secara mendalam, dalam urutan yang
dipakai para peneliti SPACE. Topik 3.7 menutup bagian ini dengan mekanisme
praktis perancangan survei, karena kepuasan, kinerja, dan kolaborasi sama-sama
bergantung sebagian pada data laporan mandiri (pembedaan instrumentasi
versus laporan mandiri di topik 1.5 relevan langsung di sepanjang bagian
ini), dan survei yang dirancang buruk melemahkan setiap topik sebelumnya.

Disiplin utama bagian ini, yaitu keseimbangan di semua dimensi alih-alih
kekuatan di satu dimensi, adalah contoh kerja paling jelas dalam buku ini
tentang prinsip hasil di atas keluaran dari topik 1.3 yang diterapkan pada
manusia, bukan pada sebuah pipeline pengiriman. Aktivitas (topik 3.4) adalah
dimensi SPACE yang paling mirip dengan metrik keluaran murni, dan bagian ini
memperlakukannya demikian: berguna sebagai salah satu masukan dari lima,
berbahaya sebagai sinyal tunggal. Dibaca bersama Bagian 2, bagian ini
melengkapi gambaran yang tidak dapat diberikan DORA sendirian: bukan hanya
apakah perangkat lunak dikirim dengan cepat dan aman, tetapi apakah orang-orang
yang mengirimkannya sanggup mempertahankan kecepatan itu.
