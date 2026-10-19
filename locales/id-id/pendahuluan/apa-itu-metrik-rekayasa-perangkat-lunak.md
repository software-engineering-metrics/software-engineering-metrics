# Apa itu metrik rekayasa perangkat lunak?

[Metrik rekayasa perangkat lunak](https://en.wikipedia.org/wiki/Software_metric)
adalah ukuran kuantitatif yang dipakai untuk mengevaluasi, melacak, dan
meningkatkan kualitas, efisiensi, dan dampak proses, produk, dan tim
pengembangan perangkat lunak. Bila dipakai dengan baik, metrik berfungsi sebagai
alat diagnostik sistemik: ia mengungkap hambatan operasional, membenarkan
pelunasan utang teknis, dan menyelaraskan aktivitas rekayasa dengan hasil bisnis
yang konkret. Bila dipakai dengan buruk, metrik mendistorsi perilaku, merusak
kepercayaan, dan memberi imbalan pada hal-hal yang tepat salah.

Buku ini ada karena kebanyakan tim meraih metrik sebelum memutuskan *untuk apa*
sebuah metrik. Dasbor terisi dengan semua yang mudah dihitung, tim pimpinan
mulai bertanya "apakah angka ini naik atau turun," dan dalam satu kuartal tim
sudah mengoptimalkan angkanya alih-alih hasil yang seharusnya diwakilinya.
Kegagalan itu punya nama, [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law):
ketika sebuah ukuran menjadi target, ia berhenti menjadi ukuran yang baik. Setiap
topik dalam buku ini ditulis dengan hukum itu berdiri di belakangnya.

## Dua kerangka dasar

Industri sebagian besar telah bertemu pada dua kerangka berbasis riset untuk
mengukur pengiriman rekayasa dan kesehatan tim.

**[Metrik DORA](https://dora.dev/guides/dora-metrics/)** (dari program DevOps
Research and Assessment) mengukur throughput dan stabilitas sistem: frekuensi
deployment, lead time untuk perubahan, tingkat kegagalan perubahan, dan waktu
pemulihan dari deployment yang gagal. Bagian 2 buku ini membahas keempatnya dalam
satu topik rujukan khusus, bersama Flow Framework yang dipakai untuk mengatur
metrik pengiriman dan aliran secara lebih luas, karena DORA mengukur mekanika
pipeline dengan baik tetapi tidak berkata apa-apa tentang jenis nilai apa yang
mengalir melaluinya.

**[Kerangka SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, yang dibuat
oleh para peneliti di Microsoft, GitHub, dan University of Victoria,
mengimbangi throughput mentah dengan pengalaman pengembang di lima dimensi:
kepuasan dan kesejahteraan, kinerja, aktivitas, komunikasi dan kolaborasi, serta
efisiensi dan aliran. Bagian 3 membahasnya secara mendalam.

Di luar dua kerangka ini, tim melacak metrik lokal yang dikelompokkan menurut
ranah: metrik kode dan kualitas (Bagian 4), metrik produk dan bisnis (Bagian 5),
serta metrik keandalan, operasi, dan keamanan (Bagian 6). Bagian 7 membahas
pergeseran yang sudah berlangsung: alat AI generatif telah membuat keluaran kode
mentah hampir gratis, yang berarti beberapa metrik yang diandalkan industri
selama satu dekade tidak lagi bermakna seperti dulu.

## Untuk siapa buku ini

Pembaca utama adalah orang-orang yang memilih apa yang diukur sebuah tim dan
mengapa: pemimpin rekayasa, staff dan principal engineer, tim platform dan
DevOps, serta manajer program dan produk yang membangun dasbor atau kartu skor
metrik untuk pertama kalinya, atau memperbaiki yang mulai mendistorsi perilaku.
Pembaca sekunder adalah setiap engineer yang ingin memahami mengapa organisasinya
melacak apa yang dilacaknya, dan bagaimana menolak ketika sebuah metrik
disalahgunakan.

## Cara membacanya

Mulai dari sini, lalu baca [pengantar](pengantar.md) untuk melihat bagaimana
buku ini diatur, atau langsung loncat ke [daftar isi](daftar-isi.md).
Setiap topik berdiri sendiri: ia menyatakan prinsipnya lebih dulu, memberi
rekomendasi konkret, menyebut bagaimana metrik yang dibahasnya dimanipulasi, dan
diakhiri dengan model kematangan, pertanyaan diskusi, dan rujukan. Anda tidak
perlu membaca buku ini dari sampul ke sampul untuk memanfaatkannya.
