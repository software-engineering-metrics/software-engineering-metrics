# 8.5 Peta jalan adopsi bertahap

## Gambaran umum dan motivasi

Topik ini menutup Bagian 8, dan isi substantif buku ini, dengan pertanyaan
yang kemungkinan diajukan setiap pembaca yang telah sampai sejauh ini: dengan
semua yang dibahas buku ini, empat puluh lima topik yang mencakup
pengiriman, pengalaman pengembang, kualitas kode, hasil bisnis, keandalan,
keamanan, dan pergeseran era AI, dari mana sebuah organisasi sebenarnya
memulai. Jawaban jujur topik ini adalah: tidak di mana-mana sekaligus.
Peluncuran [big-bang](https://en.wikipedia.org/wiki/Big_bang_adoption) atas
seluruh cakupan buku ini, yang dicoba sekaligus, melanggar langsung panduan
inti topik 8.3, karena program metrik yang menyeluruh dan sapu bersih yang
diperkenalkan dalam semalam adalah persis jenis perubahan yang memicu
ketakutan dan manipulasi (gaming) alih-alih kepercayaan.

Sebagai gantinya, topik ini menyediakan urutan bertahap yang konkret, yang
dibangun di atas prinsip sederhana dan konsisten yang diulang di sepanjang
buku ini: mulai dari fondasi, buktikan nilai dalam cakupan sempit, lalu
perluas dengan sengaja, tidak pernah melewatkan pekerjaan tata kelola dan
kepercayaan budaya yang dibahas dalam topik 1.4 dan topik 8.3 demi langsung
melompat ke metrik yang canggih dan menyeluruh. Pengurutan ini tidak
sembarangan; ia mengikuti struktur ketergantungan yang ditetapkan oleh
bagian-bagian buku ini sendiri, fondasi Bagian 1 benar-benar harus datang
lebih dulu, karena setiap bagian berikutnya mengandaikan tata kelola,
orientasi hasil, dan literasi statistik yang ditetapkan topik 1.1 sampai
topik 1.6.

Bagi tim besar, peta jalan bertahap adalah yang membuat seluruh cakupan buku
ini dapat dicapai, bukan membebani. Organisasi perusahaan besar dapat
memakai pengurutan topik ini untuk merencanakan peluncuran program metrik
multitriwulan atau multitahun yang sesungguhnya dengan tonggak yang realistis;
organisasi pemerintahan, yang sering perlu membenarkan investasi metrik kepada
proses anggaran atau pengawasan secara bertahap dan bukan sebagai satu
permintaan besar, dapat memakai fase-fase topik ini sebagai titik pemeriksaan
alami untuk menunjukkan nilai dan meminta investasi lanjutan.

## Prinsip utama

- **Fondasi lebih dulu, selalu.** Tata kelola (topik 1.4), orientasi hasil
  (topik 1.3), dan pembangunan kepercayaan budaya (topik 8.3) tidak boleh
  dilewati demi langsung melompat ke metrik yang canggih.
- **Buktikan nilai dalam cakupan sempit sebelum memperluas.** Satu tim atau
  satu keluarga metrik, dikerjakan dengan baik dan dipercaya, adalah fondasi
  yang lebih kuat daripada peluncuran menyeluruh yang dikerjakan dengan buruk.
- **Urutkan menurut ketergantungan, bukan menurut kepentingan yang
  dipersepsikan.** Beberapa keluarga metrik dalam buku ini bergantung pada
  landasan yang lebih dulu ditetapkan topik lain.
- **Setiap fase harus menghasilkan hasil yang dapat ditunjukkan dan
  dilaporkan** yang membenarkan investasi lanjutan pada fase berikutnya.
- **Ini adalah peta jalan untuk disesuaikan, bukan resep universal yang
  kaku.** Titik awal dan prioritas spesifik organisasi Anda sebaiknya
  membentuk laju yang sebenarnya.

## Rekomendasi

### Fase 1: Fondasi dan tata kelola (Bagian 1)

Sebelum menginstrumentasi satu keluarga metrik pun, tetapkan disiplin tata
kelola yang dijelaskan topik 1.4: templat piagam metrik, kebijakan
diagnostik versus evaluatif yang jelas (topik 1.1), dan dasar-dasar literasi
statistik dari topik 1.6 yang dibagikan kepada siapa pun yang akan
menafsirkan data. Fase ini belum menghasilkan dasbor; ia menghasilkan
landasan organisasi yang menjadi tumpuan setiap fase berikutnya. Melewatkan
fase ini demi bergerak lebih cepat adalah cara yang paling umum panduan buku
ini dirusak dalam praktik, karena setiap metrik berikutnya mewarisi apa pun
kualitas tata kelola, atau ketiadaannya, yang ditetapkan fase ini.

### Fase 2: Satu tim percontohan, metrik DORA, diagnostik saja (Bagian 2)

Pilih satu tim, idealnya tim yang bersedia dan terlibat, bukan yang
diwajibkan, dan instrumentasikan metrik DORA dari Bagian 2, dengan
instrumentasi otomatis (topik 1.5) dan bukan laporan mandiri, dalam mode
diagnostik murni mengikuti langsung panduan pembangunan kepercayaan topik 8.3.
Jalankan ini setidaknya selama satu triwulan penuh sebelum memperluas, dan
jadikan ia ajang pembuktian bagi templat piagam tata kelola dan pendekatan
perancangan dasbor Anda (topik 8.1) sebelum berkomitmen pada salah satunya
dalam skala yang lebih luas.

### Fase 3: Perluas metrik pengiriman ke seluruh organisasi, tambahkan
pengalaman pengembang (Bagian 2, 3)

Setelah percontohan menunjukkan nilai yang nyata dan, yang krusial,
kepercayaan yang bertahan (tidak ada insiden penyalahgunaan, atau satu
insiden yang ditangani dengan baik menurut panduan topik 8.3), perluas
instrumentasi DORA ke tim-tim tambahan, dan perkenalkan survei pengalaman
pengembang pertama (topik 3.7) ke seluruh organisasi. Fase ini adalah tempat
disiplin diagnostik versus evaluatif menghadapi ujian nyata pertamanya dalam
skala besar, dan menjaganya dengan cermat di sini menetapkan nada untuk
semua yang menyusul.

### Fase 4: Kualitas kode dan metrik hasil (Bagian 4, 5)

Dengan fondasi pengiriman dan pengalaman pengembang yang telah mapan dan
dipercaya, tambahkan metrik kualitas kode dari Bagian 4, dengan
memprioritaskan analisis hotspot (topik 4.3) dan pelacakan utang teknis
(topik 4.5) sebagai titik awal berdaya ungkit tertinggi, dan mulailah
membangun infrastruktur telemetri hasil yang menurut topik 7.4 seharusnya
pada akhirnya menjadi pusat gravitasi program Anda, dimulai dengan tingkat
cacat yang lolos (topik 5.1) dan adopsi fitur (topik 5.2) sebagai metrik
hasil yang paling mudah diinstrumentasi lebih dulu.

### Fase 5: Keandalan, keamanan, dan kalibrasi ulang era AI (Bagian 6, 7)

Tetapkan SLO formal dan anggaran kesalahan (topik 6.1) untuk layanan Anda
yang paling kritis, bangun praktik metrik insiden tanpa menyalahkan (topik
6.2), dan lakukan audit metrik era AI yang direkomendasikan topik 7.1 jika
organisasi Anda telah mengadopsi, atau sedang mengadopsi, perangkat
pengembangan berbantuan AI. Fase ini sering berjalan sebagian paralel dengan
Fase 4 dan bukan benar-benar berurutan, karena pekerjaan keandalan dan
keamanan sering memiliki urgensinya sendiri yang independen.

### Berkelanjutan: penilaian kematangan terkonsolidasi dan investasi
berkelanjutan

Setelah fase-fase inti mapan, adopsi penilaian kematangan terkonsolidasi
topik 8.4 sebagai praktik tahunan yang berulang, dan gunakan temuannya untuk
mengarahkan investasi berkelanjutan, alih-alih memperlakukan peta jalan
sebagai selesai begitu setiap fase secara teknis telah disentuh. Program
metrik adalah kemampuan organisasi yang berkelanjutan, bukan proyek dengan
tanggal berakhir yang pasti, dan fase berkelanjutan ini mencerminkan
kenyataan itu secara langsung.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Peluncuran big-bang yang menyeluruh | Cepat, cakupan menyeluruh sejak awal | Risiko tinggi memicu ketakutan dan manipulasi (topik 8.3); tidak ada fondasi tata kelola yang terbukti |
| Peluncuran bertahap, fondasi lebih dulu | Membangun kepercayaan dan tata kelola sebelum memperluas cakupan; setiap fase membuktikan dirinya | Lebih lambat mencapai cakupan penuh; memerlukan komitmen multitriwulan yang berkelanjutan |
| Peluncuran bertahap, metrik lebih dulu (melewatkan tata kelola) | Hasil dasbor awal lebih cepat | Mewarisi tata kelola yang lemah ke setiap fase berikutnya; risiko jangka panjang lebih tinggi |
| Adopsi ad hoc dan oportunistik tanpa peta jalan | Fleksibel, tanggap terhadap kebutuhan seketika | Menghasilkan cakupan yang tidak konsisten dan sulit ditata kelola serta mengulang kesalahan fase demi fase |

Ketegangan utamanya adalah **kecepatan menuju cakupan menyeluruh versus
pengurutan yang mendahulukan fondasi**. Organisasi yang ditekan untuk
menunjukkan hasil dengan cepat tergoda melewatkan pekerjaan tata kelola Fase
1 dan langsung menginstrumentasi metrik, tetapi argumen kumulatif buku ini,
dari disiplin tata kelola topik 1.4 hingga panduan pembangunan kepercayaan
topik 8.3, adalah bahwa melewatkan fondasi menghasilkan program yang lebih
cepat tetapi pada dasarnya lebih lemah. Selesaikan ketegangan ini dengan
berkomitmen pada urutan bertahap, dan dengan memakai hasil yang dapat
ditunjukkan dari setiap fase (rekomendasi kunci topik 8.5) untuk membenarkan
investasi lanjutan, alih-alih mencoba menunjukkan hasil yang menyeluruh
sebelum fondasi sanggup menopangnya.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Di mana sebenarnya posisi organisasi kami dalam urutan bertahap ini saat
   ini, dinilai dengan jujur?** Petakan keadaan Anda saat ini terhadap kelima
   fase secara langsung; banyak organisasi, bila dinilai dengan jujur,
   mendapati bahwa mereka telah menginstrumentasi metrik dari fase yang lebih
   akhir tanpa benar-benar menuntaskan fase fondasi yang lebih awal.

2. **Apakah kami melewatkan fondasi tata kelola Fase 1 demi langsung beralih ke
   instrumentasi, dan jika ya, apa harganya bagi kami?** Ini terhubung
   langsung dengan penilaian kematangan topik 8.4; fondasi tata kelola yang
   lemah dan ditemukan terlambat mahal untuk dipasang belakangan.

3. **Seperti apa tim percontohan yang tulus dan bersedia bagi kami, jika kami
   belum pernah menjalankannya?** Kenali tim kandidat yang spesifik dan nyata,
   jangan membiarkannya abstrak, dan diskusikan apa yang membuat mereka
   kandidat yang baik secara khusus.

4. **Hasil apa yang dapat ditunjukkan yang sebenarnya dihasilkan setiap fase
   yang telah kami selesaikan, dan apakah kami memakainya untuk membenarkan
   investasi fase berikutnya?** Jika Anda tidak dapat menunjuk hasil yang
   spesifik dan telah dikomunikasikan dari fase yang telah selesai,
   kesenjangan itu layak disebutkan.

5. **Apakah Fase 4 dan Fase 5 berjalan paralel dengan semestinya bagi kami,
   atau salah satunya diabaikan demi yang lain?** Diskusikan apakah profil
   risiko spesifik organisasi Anda, yang lebih berfokus pada pengiriman atau
   lebih berfokus pada keandalan, seharusnya membentuk pengurutan paralel ini
   secara berbeda dari bawaan yang dijelaskan topik ini.

6. **Sudahkah kami menetapkan praktik penilaian kematangan berulang yang
   berkelanjutan dari topik 8.4, atau peta jalan kami praktis berakhir begitu
   fase-fase awal secara teknis selesai?** Peta jalan tanpa fase berkelanjutan
   ini berisiko memperlakukan program metrik sebagai proyek yang selesai,
   bukan kemampuan berkelanjutan yang menurut buku ini seharusnya ia
   jadi.

## Lensa sektor

**Startup.** Peta jalan multifase yang lengkap ini kemungkinan dapat
dipadatkan secara signifikan, karena organisasi kecil dapat melewati fase
tata kelola fondasi dan percontohan dalam hitungan minggu, bukan triwulan.
Jangan melewatkan Fase 1 sepenuhnya bahkan pada skala kecil, karena kebiasaan
tata kelola yang ditetapkan sejak dini jauh lebih mudah dipertahankan
daripada dipasang belakangan seiring tumbuhnya organisasi.

**Usaha kecil.** Sesuaikan laju peta jalan dengan kapasitas Anda yang
sebenarnya, alih-alih mencoba setiap fase dalam urutan yang dijelaskan topik
ini; usaha kecil wajar berhenti setelah Fase 2 atau 3, dengan metrik
pengiriman dan pengalaman pengembang, dan menunda pekerjaan hasil dan
keandalan yang lebih canggih dalam Bagian 4 sampai 6 sampai organisasi cukup
besar untuk benar-benar membutuhkan dan mendukungnya.

**Perusahaan besar.** Rencanakan peta jalan ini secara eksplisit sebagai
program multitriwulan atau multitahun dengan tonggak yang realistis, dan
gunakan hasil yang dapat ditunjukkan dari setiap fase sebagai titik
pemeriksaan formal untuk mengamankan sponsor eksekutif dan anggaran yang
berkelanjutan, alih-alih mencoba membenarkan seluruh cakupan di muka dalam
satu kasus bisnis tunggal.

**Pemerintahan.** Gunakan fase-fase topik ini sebagai titik pemeriksaan
bertahap yang alami untuk pelaporan anggaran atau badan pengawas, meminta
investasi lanjutan pada setiap batas fase berdasarkan hasil fase sebelumnya
yang terbukti dan terdokumentasi, bukan sebagai satu permintaan besar di
muka yang mungkin menghadapi lebih banyak skeptisisme atau kesulitan
pengadaan.

## Contoh

**Perusahaan besar.** Sebuah perusahaan teknologi kesehatan mengadopsi peta
jalan ini secara eksplisit sebagai kerangka penyusun program metriknya,
menuntaskan fondasi tata kelola Fase 1 selama enam minggu, menjalankan
percontohan DORA satu tim selama satu triwulan penuh, dan baru kemudian
memperluas ke cakupan metrik pengiriman seluruh organisasi pada Fase 3,
sekitar lima bulan setelah memulai. Dengan mengatur laju peluncuran seperti
ini secara sengaja, perusahaan itu menghindari pola manipulasi akibat
ketakutan yang digambarkan topik 8.3 sebagai risiko peluncuran yang lebih
cepat dan kurang disiplin, dan tim percontohan Fase 2-nya secara khusus
menjadi pendukung internal informal bagi perluasan program, setelah mengalami
langsung bahwa komitmen diagnostik saja benar-benar dihormati sepanjang
triwulan percontohan mereka.

**Pemerintahan.** Sebuah instansi teknologi pemerintah negara bagian memakai
struktur bertahap topik ini secara eksplisit untuk mengurutkan permintaan
anggaran kepada komite pengawasnya, meminta dana untuk Fase 1 dan Fase 2
sebagai investasi percontohan awal yang sederhana, lalu kembali ke komite
dengan hasil Fase 2 yang terdokumentasi, frekuensi deployment yang membaik dan
tingkat kegagalan perubahan yang stabil bagi tim percontohan, sebagai bukti
konkret yang mendukung permintaan dana Fase 3 dan Fase 4 yang lebih besar pada
siklus anggaran berikutnya. Pendekatan pendanaan bertahap berbasis bukti ini
berhasil di tempat permintaan di muka yang lebih menyeluruh untuk seluruh
cakupan program metrik instansi sebelumnya ditolak karena terlalu besar dan
kurang dibenarkan oleh hasil yang terbukti.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari peta jalan bertahap yang mendahulukan fondasi adalah program
metrik yang benar-benar berfungsi, tepercaya, bertata kelola baik, dan
sungguh-sungguh dipakai untuk mengambil keputusan, bukan program yang tampak
menyeluruh tetapi dirusak ketakutan atau bertata kelola buruk yang berisiko
dihasilkan peluncuran yang lebih cepat. Contoh perusahaan teknologi kesehatan
di atas menunjukkan hal ini secara langsung: pengaturan laju yang disengaja
menghasilkan kepercayaan dan dukungan internal yang tulus yang kemungkinan
besar akan dirusak oleh peluncuran yang lebih cepat.

Total biaya kepemilikan adalah waktu: peta jalan ini memang memerlukan waktu
lebih lama untuk mencapai cakupan penuh dibandingkan peluncuran big-bang.
Biaya waktu itu adalah harga langsung dan perlu bagi fondasi kepercayaan dan
tata kelola yang diperjuangkan seluruh buku ini sejak topik-topik
pembukanya, dan contoh pemerintahan di atas menunjukkan manfaat sekunder yang
nyata dan praktis: fase bertahap berbasis bukti sering lebih mudah
didanai dan dibenarkan daripada satu permintaan di muka yang besar dan belum
terbukti.

## Anti-pola dan jebakan

- **Peluncuran big-bang yang menyeluruh dan dicoba sekaligus:** melanggar
  panduan inti topik 8.3 dan berisiko memicu ketakutan dan manipulasi sejak
  awal.
- **Melewatkan fondasi tata kelola Fase 1 demi bergerak lebih cepat:** mewarisi
  tata kelola yang lemah ke setiap fase berikutnya, mahal untuk dipasang
  belakangan.
- **Memilih tim percontohan yang tidak bersedia atau diwajibkan untuk Fase 2:**
  merusak tujuan pembangunan kepercayaan yang seharusnya dilayani
  percontohan yang tulus.
- **Gagal menghasilkan atau mengomunikasikan hasil yang dapat ditunjukkan dari
  setiap fase:** kehilangan dasar bukti yang diperlukan untuk membenarkan
  investasi lanjutan pada fase berikutnya.
- **Memperlakukan peta jalan sebagai selesai begitu setiap fase secara teknis
  disentuh:** melewatkan praktik penilaian kematangan yang berkelanjutan yang
  direkomendasikan topik 8.4 sebagai disiplin permanen, bukan sekali jalan.
- **Mengikuti pengurutan bawaan topik ini secara kaku terlepas dari profil
  risiko organisasi Anda yang sebenarnya:** peta jalan ini seharusnya
  disesuaikan, bukan diterapkan secara mekanis tanpa pertimbangan.

## Model kematangan

- **Tingkat 1, Initiate (Memulai):** Tidak ada peta jalan; adopsi metrik,
  bila terjadi sama sekali, bersifat ad hoc dan tanpa urutan.
- **Tingkat 2, Develop (Mengembangkan):** Beberapa fase telah dicoba, tetapi
  pekerjaan tata kelola fondasi dilewati atau tidak lengkap, dan hasil fase
  tidak didokumentasikan secara sistematis.
- **Tingkat 3, Standardize (Menstandarkan):** Peta jalan bertahap yang
  mengikuti urutan fondasi-lebih-dulu topik ini terdokumentasi dan diikuti
  secara aktif, dengan setiap fase menghasilkan hasil yang dapat
  ditunjukkan.
- **Tingkat 4, Manage (Mengelola):** Hasil fase dipakai secara sistematis
  untuk membenarkan investasi lanjutan, dan peta jalan disesuaikan dengan
  sengaja terhadap profil risiko dan prioritas spesifik organisasi.
- **Tingkat 5, Orchestrate (Mengorkestrasi):** Organisasi telah menuntaskan
  seluruh peta jalan dan mempertahankan praktik penilaian kematangan
  berkelanjutan dari topik 8.4 sebagai kemampuan permanen, dengan rekam jejak
  multitahun yang terbukti dalam investasi metrik yang bertahap dan membangun
  kepercayaan.

## Gagasan untuk diskusi

1. Di mana sebenarnya posisi organisasi kami dalam urutan bertahap ini saat ini?
2. Apakah kami melewatkan atau memotong fase tata kelola fondasi, dan apa harganya bagi kami?
3. Seperti apa tim percontohan yang tulus dan bersedia untuk perluasan kami berikutnya?
4. Hasil apa yang dapat ditunjukkan dari fase terbaru kami yang dapat membenarkan permintaan investasi berikutnya?
5. Sudahkah kami menetapkan praktik penilaian kematangan yang berkelanjutan, atau peta jalan kami praktis berakhir?

## Poin-poin utama

- Adopsi panduan buku ini **secara bertahap, fondasi lebih dulu**, tidak pernah
  sebagai peluncuran big-bang yang berisiko memicu ketakutan dan manipulasi.
- **Fase 1 (tata kelola) tidak boleh dilewati**; setiap fase berikutnya
  mewarisi apa pun kualitas tata kelola yang ditetapkan fase ini.
- Gunakan **tim percontohan yang tulus dan bersedia** untuk membuktikan nilai
  dan membangun kepercayaan sebelum memperluas cakupan ke seluruh organisasi.
- Setiap fase harus menghasilkan **hasil yang dapat ditunjukkan dan
  dilaporkan** yang membenarkan investasi lanjutan pada fase berikutnya.
- Perlakukan selesainya peta jalan sebagai awal dari **praktik yang
  berkelanjutan** (penilaian kematangan berulang dari topik 8.4), bukan proyek
  yang selesai.

## Referensi dan bacaan lanjutan

- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (dasar bukti untuk keluarga metrik yang diurutkan
  peta jalan ini).
- *Leading Change*, by John P. Kotter (prinsip manajemen perubahan organisasi
  yang berlaku untuk peluncuran program metrik bertahap).
- *The Lean Startup*, by Eric Ries (siklus bangun-ukur-pelajari yang menjadi
  rujukan pendekatan bertahap topik ini, buktikan nilai lalu perluas).
- U.S. Government Accountability Office (GAO) guidance on performance
  measurement and the GPRA Modernization Act: praktik pendanaan program sektor
  publik yang bertahap dan berbasis bukti.
