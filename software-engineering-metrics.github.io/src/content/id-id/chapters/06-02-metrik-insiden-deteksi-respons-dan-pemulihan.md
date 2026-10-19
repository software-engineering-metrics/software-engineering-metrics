# 6.2 Metrik insiden: deteksi, respons, dan pemulihan

## Gambaran umum dan motivasi

Topik ini mengukur apa yang terjadi ketika anggaran kesalahan dari topik 6.1 terpakai
melalui kegagalan yang nyata: sebuah **insiden**, yaitu peristiwa tak terencana yang
menurunkan kualitas atau menghentikan sebuah layanan. Empat metrik membentuk kosakata
standar untuk mengukur seberapa baik sebuah organisasi menangani hal ini: **rata-rata waktu
untuk mendeteksi (mean time to detect, MTTD)**, berapa lama sebelum organisasi menyadari ada
yang salah; **rata-rata waktu untuk mengakui (mean time to acknowledge, MTTA)**, berapa lama
sebelum seseorang mengambil tanggung jawab untuk menanggapi; **rata-rata waktu untuk
menyelesaikan** atau **memulihkan (mean time to resolve/recover, MTTR)**, berapa lama sampai
layanan pulih, konsep yang sama dengan yang dibahas topik 2.10 khusus untuk kegagalan akibat
deployment, kini digeneralisasi ke insiden apa pun apa pun penyebabnya; dan **frekuensi
insiden**, yaitu seberapa sering insiden terjadi.

Kekhawatiran utama topik ini, sejalan dengan perlakuan topik 2.10 terhadap tingkat kegagalan
perubahan, adalah bahwa angka-angka ini hanya sepercaya budaya organisasi di sekitar
pelaporan dan pengklasifikasian insiden secara jujur. Tim yang takut disalahkan atas sebuah
insiden punya setiap alasan untuk melaporkan lebih sedikit, menunda pengakuan agar tidak
"mulai dihitung waktunya", atau menggolongkan kejadian serius sebagai ringan demi melindungi
metriknya sendiri. Praktik **postmortem [tanpa menyalahkan (blameless)](https://en.wikipedia.org/wiki/Just_culture)**,
yang dipelopori organisasi seperti Etsy dan diformalkan dalam literatur SRE Google, ada
justru untuk menghilangkan insentif itu, dan topik ini memperlakukannya sebagai prasyarat
bagi data insiden yang tepercaya, bukan kelengkapan budaya opsional yang ditempelkan di atas
metrik.

Bagi tim besar, metrik insiden menunjukkan apakah kemampuan deteksi dan respons organisasi,
antara lain perangkat rollback yang dibahas topik 2.10, benar-benar bekerja dalam kondisi
nyata yang beragam, bukan hanya skenario kegagalan akibat deployment yang dibahas topik itu.
Organisasi perusahaan besar dan pemerintahan yang mengoperasikan infrastruktur kritis
bergantung pada metrik ini baik secara internal, untuk mendorong perbaikan operasional yang
sejati, maupun secara eksternal, untuk menunjukkan kepada pelanggan, regulator, atau publik
bahwa insiden ditangani dengan cakap dan terus membaik dari waktu ke waktu.

## Prinsip utama

- **Budaya tanpa menyalahkan adalah prasyarat data insiden yang tepercaya**, bukan tambahan
  opsional; ketakutan akan disalahkan merusak pelaporan, kecepatan pengakuan, dan klasifikasi
  tingkat keparahan sekaligus.
- **Deteksi, pengakuan, dan penyelesaian adalah fase yang berbeda dengan perbaikan yang
  berbeda.** Waktu pemulihan keseluruhan yang lambat dapat menyembunyikan masalah mendasar
  yang sangat berbeda tergantung fase mana yang sebenarnya lambat.
- **Frekuensi insiden dan MTTR adalah sinyal berpasangan**, mirip tingkat kegagalan perubahan
  dan waktu pemulihan DORA (topik 2.10): tak satu pun sendirian menceritakan gambaran
  lengkapnya.
- **Klasifikasi tingkat keparahan memerlukan ketelitian yang sama dengan klasifikasi cacat
  yang lolos** (topik 5.1): kriteria yang konsisten dan terdokumentasi, bukan penilaian ad
  hoc.
- **Nilai sebuah postmortem ada pada pembelajaran sistemik, bukan pada menghasilkan angka.**
  Metrik adalah produk sampingan dari praktik yang baik, bukan tujuannya.

## Rekomendasi

### Uraikan waktu respons insiden menjadi fase-fasenya yang berbeda

Ukur dan laporkan waktu deteksi (dari awal kegagalan yang sebenarnya hingga seseorang
menyadarinya), waktu pengakuan (dari pemberitahuan hingga seseorang mengambil tanggung
jawab), dan waktu penyelesaian (dari pengambilalihan hingga pemulihan yang sejati) secara
terpisah, bukan hanya satu total gabungan. Setiap fase menunjuk ke perbaikan yang berbeda:
deteksi yang lambat menunjuk ke kesenjangan pemantauan dan peringatan, pengakuan yang lambat
menunjuk ke masalah proses on-call atau eskalasi, dan penyelesaian yang lambat menunjuk ke
kesenjangan perangkat, runbook, atau kemampuan diagnostik (topik 2.10 membahasnya khusus
untuk kegagalan akibat deployment).

### Bangun dan lindungi proses postmortem yang benar-benar tanpa menyalahkan

**Postmortem tanpa menyalahkan** menyelidiki apa yang terjadi dan mengapa sistem
membiarkannya terjadi, dengan sengaja menghindari penimpaan kesalahan kepada individu atas
kekeliruan yang bisa saja dibuat oleh siapa pun yang wajar dalam keadaan yang sama dengan
informasi yang sama. Lindungi disiplin ini secara aktif: pimpinan yang memberi teladan
tanggapan tanpa hukuman terhadap insiden, kebijakan tertulis yang eksplisit, dan kebiasaan
bertanya "apa dalam sistem kita yang membiarkan ini terjadi" dan bukan "siapa yang
melakukan ini" semuanya merupakan investasi berkelanjutan yang diperlukan, bukan pernyataan
kebijakan sekali jadi.

### Klasifikasikan tingkat keparahan dengan kriteria yang konsisten, terdokumentasi, dan diaudit

Terapkan disiplin yang sama yang direkomendasikan topik 5.1 untuk cacat yang lolos pada
klasifikasi tingkat keparahan insiden: skala tetap yang terdokumentasi berdasarkan dampak
nyata pada pelanggan atau bisnis, diterapkan secara konsisten di semua tim, dan diaudit
secara berkala untuk mendeteksi penyimpangan. Klasifikasi yang tidak konsisten, sebagian tim
murah hati, sebagian ketat, membuat data insiden seluruh organisasi sama tidak andalnya untuk
dibandingkan seperti data cacat yang diklasifikasikan secara tidak konsisten.

### Lacak frekuensi insiden dan MTTR bersama-sama, jangan pernah terpisah

MTTR yang membaik bersama frekuensi insiden yang naik bisa menandakan tim yang kian jago
memadamkan api sementara keandalan sistem yang mendasarinya sebenarnya memburuk; frekuensi
insiden yang turun bersama MTTR yang memburuk bisa menandakan kegagalan yang lebih jarang
tetapi lebih parah dan lebih sulit didiagnosis menggantikan kegagalan kecil yang sering.
Tinjau keduanya bersama-sama, persis mencerminkan disiplin pemasangan kecepatan dan
stabilitas dari metrik DORA di Bagian 2, untuk mendapatkan gambaran gabungan yang jujur.

### Ekstrak dan lacak butir tindakan sistemik dari postmortem, bukan hanya metrik

Nilai sejati proses postmortem adalah butir tindakan sistemik yang spesifik yang
dihasilkannya: peringatan yang hilang ditambahkan, runbook diperbaiki, titik kegagalan
tunggal dihapus. Lacak butir tindakan ini hingga selesai dengan disiplin yang sama seperti
backlog utang teknis dari topik 4.5, karena postmortem yang menghasilkan wawasan tanpa tindak
lanjut menyia-nyiakan pembelajaran organisasi yang hendak ditangkap oleh proses itu.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Satu metrik waktu respons insiden gabungan | Sederhana untuk dilaporkan | Menyembunyikan fase mana, deteksi, pengakuan, atau penyelesaian, yang sebenarnya bermasalah |
| Metrik insiden yang diuraikan per fase | Diagnostik, langsung menunjuk ke perbaikan yang tepat | Memerlukan instrumentasi yang lebih cermat pada setiap transisi fase |
| Tinjauan insiden yang berorientasi menyalahkan | Terasa akuntabel, memuaskan keinginan untuk menetapkan tanggung jawab | Merusak kejujuran pelaporan di masa depan dan jarang memperbaiki penyebab sistemik yang sebenarnya |
| Praktik postmortem tanpa menyalahkan | Menghasilkan data yang jujur dan perbaikan sistemik yang sejati | Memerlukan investasi budaya yang berkelanjutan dan disiplin pimpinan untuk mempertahankannya |

Ketegangan utamanya adalah **daya tarik akuntabilitas individu versus kebutuhan praktis akan
pelaporan yang jujur**. Menyalahkan individu setelah insiden bisa terasa memuaskan dan bisa
tampak seperti kepemimpinan yang tegas, tetapi hal itu hampir pasti merusak data setiap
insiden berikutnya, karena orang melaporkan lebih sedikit, menunda pengakuan, atau salah
mengklasifikasikan tingkat keparahan begitu mereka takut akan konsekuensi pribadi. Selesaikan
ketegangan ini demi praktik tanpa menyalahkan secara sengaja dan konsisten, dengan memahami
bahwa akuntabilitas sejati datang dari memperbaiki sistem yang membiarkan kegagalan terjadi,
bukan dari menghukum individu yang kebetulan hadir saat itu terjadi.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita menguraikan waktu respons insiden menjadi fase deteksi, pengakuan, dan
   penyelesaian, atau hanya melacak satu angka gabungan?** Jika hanya ada angka gabungan,
   pilih satu insiden signifikan baru-baru ini dan coba rekonstruksi rincian fasenya secara
   retroaktif untuk melihat apa yang akan terungkap.

2. **Apakah tim kita benar-benar percaya proses postmortem kita tanpa menyalahkan, atau
   apakah rasa takut akan konsekuensi masih membentuk cara insiden dilaporkan dan
   dibicarakan?** Tanyakan ini secara langsung dan jujur; kebijakan tanpa menyalahkan yang
   dinyatakan tetapi tidak benar-benar dijalankan tidak menghasilkan data yang tepercaya.

3. **Apakah dua tim berbeda akan mengklasifikasikan tingkat keparahan insiden yang sama
   dengan cara yang sama?** Pilih insiden lampau yang nyata dan ambigu, minta perwakilan dari
   tim-tim berbeda mengklasifikasikannya secara mandiri, lalu bandingkan hasilnya.

4. **Apakah kita meninjau frekuensi insiden dan MTTR bersama-sama, atau salah satunya
   mendapat perhatian lebih besar?** Periksa praktik pelaporan dan tinjauan Anda yang
   sebenarnya terhadap pemasangan ini, mencerminkan disiplin yang sama yang direkomendasikan
   topik 2.10 untuk metrik stabilitas DORA.

5. **Berapa persen butir tindakan postmortem kita dalam enam bulan terakhir yang benar-benar
   telah diselesaikan?** Jika saat ini Anda tidak melacaknya, kesenjangan itu layak
   disebutkan; proses postmortem dengan tingkat penyelesaian butir tindakan yang rendah
   menghasilkan wawasan tanpa tindak lanjut.

6. **Pernahkah rasa takut disalahkan membuat seseorang menunda pelaporan atau pengakuan
   insiden?** Ini pertanyaan yang tidak nyaman tetapi penting; jawaban jujur "ya, dan inilah
   yang terjadi" jauh lebih berharga bagi kesehatan proses insiden Anda daripada "tidak"
   yang refleks.

## Lensa sektor

**Startup.** Respons insiden sering bersifat informal karena keterbatasan tim kecil, dan
penguraian fase yang formal mungkin tidak diperlukan pada awalnya. Kebiasaan yang layak
diadopsi sejak dini adalah norma diskusi tanpa menyalahkan sejak insiden pertama, karena
kebiasaan budaya yang terbentuk sejak awal jauh lebih mudah dipertahankan daripada dipasang
belakangan setelah pola yang cenderung menyalahkan sudah mengakar.

**Usaha kecil.** Catatan insiden bersama yang sederhana, bahkan yang informal, dengan
klasifikasi tingkat keparahan dasar dan retrospektif singkat tanpa menyalahkan untuk hal
yang signifikan, sudah menangkap sebagian besar nilai topik ini tanpa memerlukan perangkat
canggih atau platform manajemen insiden khusus.

**Perusahaan besar.** Klasifikasi tingkat keparahan yang konsisten dan budaya tanpa
menyalahkan yang sejati dan berkelanjutan sama-sama lebih sulit dipertahankan pada skala
besar, dan keduanya penting untuk data insiden yang tepercaya dan dapat dibandingkan di
puluhan tim. Investasikan pada kriteria klasifikasi yang terdokumentasi, audit berkala, dan
keteladanan aktif pimpinan dalam respons tanpa menyalahkan, karena pergeseran budaya menuju
sikap menyalahkan cenderung menyusup perlahan tanpa tekanan tandingan yang disengaja dan
berkelanjutan.

**Pemerintahan.** Insiden yang memengaruhi layanan publik atau infrastruktur kritis sering
menghadapi pengawasan eksternal, perhatian media, atau penyelidikan formal, yang menciptakan
tekanan kuat untuk mencari kambing hitam dan dapat langsung merongrong praktik tanpa
menyalahkan di internal bila tidak dikelola secara aktif. Pertahankan disiplin tanpa
menyalahkan yang jelas di internal untuk pembelajaran sistemik yang sejati, terpisah dari
proses akuntabilitas eksternal yang mungkin menyusul setelah insiden serius, dan
komunikasikan perbedaan itu dengan jelas kepada staf.

## Contoh

**Perusahaan besar.** Budaya rekayasa sebuah perusahaan pembayaran selama bertahun-tahun
secara informal memperlakukan insiden sebagai sesuatu yang sebaiknya tidak buru-buru diakui
agar tidak tampak bertanggung jawab, sehingga waktu deteksi dan pengakuan secara konsisten
buruk, yang semula oleh pimpinan dikaitkan dengan perangkat pemantauan yang kurang memadai.
Pergeseran budaya menuju postmortem yang benar-benar tanpa menyalahkan, termasuk pimpinan
yang secara terbuka dan spesifik memuji pengakuan insiden yang cepat dan jujur, bukan hanya
penyelesaian yang cepat, menghasilkan perbaikan terukur pada waktu deteksi maupun pengakuan
dalam dua kuartal, yang menunjukkan bahwa hambatan aslinya bersifat budaya, yaitu takut
disalahkan, bukan teknis berupa perangkat yang kurang memadai seperti dugaan semula.

**Pemerintahan.** Pusat operasi sebuah badan transportasi umum secara historis mengklasifikasikan
hampir setiap gangguan layanan sebagai "ringan" dalam catatan insiden internalnya, pola yang
dinilai mencurigakan oleh direktur keselamatan yang baru mengingat keluhan informal yang
terus-menerus dari staf lapangan tentang masalah serius yang berulang. Sebuah penyelidikan
mengungkap bahwa klasifikasi "ringan" menghindari proses pelaporan formal yang memberatkan
untuk tingkat keparahan yang lebih tinggi, sehingga tercipta insentif tak disengaja untuk
mengklasifikasikan terlalu rendah. Badan itu menyederhanakan persyaratan pelaporan formalnya
untuk semua tingkat keparahan dan secara eksplisit melindungi staf dari tuduhan atas
pelaporan tingkat keparahan yang jujur, dan data insiden selanjutnya menunjukkan angka
gangguan yang benar-benar signifikan yang lebih akurat, dan jauh lebih tinggi, yang akhirnya
memberi pimpinan gambaran jujur untuk memprioritaskan investasi infrastruktur.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari metrik insiden yang benar-benar tanpa menyalahkan, terklasifikasi dengan
baik, dan diuraikan per fase adalah data jujur yang sungguh mendorong perbaikan sistemik,
bukan gambaran yang menenangkan tetapi palsu yang dihasilkan oleh pelaporan yang kurang atau
salah klasifikasi karena rasa takut. Contoh perusahaan pembayaran di atas menunjukkannya
secara konkret: perbaikan budaya, bukan investasi perangkat, menyelesaikan apa yang oleh
pimpinan keliru didiagnosis sebagai masalah deteksi teknis.

Total biaya kepemilikan sebagian besar berupa investasi budaya dan proses: komitmen pimpinan
yang berkelanjutan pada praktik tanpa menyalahkan, kriteria klasifikasi tingkat keparahan
yang terdokumentasi dan diaudit, serta disiplin melacak butir tindakan postmortem hingga
selesai. Investasi itu lebih murah daripada alternatifnya, yaitu program metrik insiden yang
menghasilkan data yang keliru dengan penuh percaya diri karena rasa takut telah merusak
setiap masukannya.

## Anti-pola dan jebakan

- **Tinjauan insiden yang berorientasi menyalahkan:** merusak kejujuran pelaporan, kecepatan
  pengakuan, dan klasifikasi tingkat keparahan untuk setiap insiden di masa depan.
- **Hanya melacak satu angka waktu respons gabungan:** menyembunyikan fase mana, deteksi,
  pengakuan, atau penyelesaian, yang sebenarnya bermasalah.
- **Klasifikasi tingkat keparahan yang tidak konsisten antartim:** membuat data insiden
  seluruh organisasi tidak andal untuk dibandingkan.
- **Meninjau frekuensi insiden dan MTTR secara terpisah:** melewatkan gambaran gabungan yang
  jujur yang diberikan sinyal berpasangan.
- **Proses postmortem yang menghasilkan wawasan tetapi tidak ada butir tindakan yang
  selesai:** menyia-nyiakan pembelajaran organisasi yang hendak ditangkap proses itu.
- **Kebijakan tanpa menyalahkan yang dinyatakan tetapi tidak benar-benar dijalankan
  pimpinan:** menghasilkan kerusakan data akibat rasa takut yang sama seperti budaya yang
  terang-terangan menyalahkan.

## Model kematangan

- **Level 1, Initiate (Memulai):** Respons insiden bersifat informal, pelaporan tidak
  konsisten, dan budaya yang cenderung menyalahkan secara aktif menghalangi pelaporan yang
  jujur.
- **Level 2, Develop (Mengembangkan):** Ada pelacakan insiden, tetapi klasifikasi tingkat
  keparahan tidak konsisten dan praktik tanpa menyalahkan dinyatakan namun tidak dijalankan
  secara konsisten.
- **Level 3, Standardize (Menstandarkan):** Metrik insiden yang diuraikan per fase dengan
  klasifikasi tingkat keparahan yang konsisten dan terdokumentasi dilacak di seluruh
  organisasi, dengan praktik postmortem yang benar-benar tanpa menyalahkan.
- **Level 4, Manage (Mengelola):** Frekuensi insiden dan MTTR ditinjau bersama, butir
  tindakan postmortem dilacak hingga selesai, dan klasifikasi diaudit secara berkala demi
  konsistensi.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi memiliki rekam jejak yang terbukti
  dan berkelanjutan bahwa praktik tanpa menyalahkan menghasilkan data jujur dan perbaikan
  sistemik yang sejati, dan metrik insiden secara langsung dan andal menjadi dasar keputusan
  investasi keandalan.

## Gagasan untuk diskusi

1. Apakah proses postmortem kita lolos uji jujur tentang apakah ia benar-benar tanpa menyalahkan?
2. Bagaimana rincian fase, deteksi, pengakuan, penyelesaian, dari insiden terlambat kita yang terbaru?
3. Apakah dua tim akan mengklasifikasikan tingkat keparahan insiden signifikan terakhir kita dengan cara yang sama?
4. Berapa persen butir tindakan postmortem kita yang terbaru yang benar-benar telah selesai?
5. Pernahkah rasa takut disalahkan memengaruhi cara sebuah insiden dilaporkan atau dibicarakan di tim kita?

## Poin-poin utama

- **Budaya postmortem tanpa menyalahkan adalah prasyarat** data insiden yang tepercaya;
  ketakutan akan disalahkan merusak pelaporan, kecepatan pengakuan, dan klasifikasi
  sekaligus.
- Uraikan waktu respons menjadi fase **deteksi, pengakuan, dan penyelesaian**, masing-masing
  menunjuk ke perbaikan yang berbeda.
- Klasifikasikan tingkat keparahan dengan **kriteria yang konsisten, terdokumentasi, dan
  diaudit**, mencerminkan disiplin cacat yang lolos pada topik 5.1.
- Tinjau **frekuensi insiden dan MTTR bersama-sama**, jangan pernah terpisah, disiplin
  pemasangan yang sama seperti metrik stabilitas DORA.
- Lacak **butir tindakan postmortem hingga selesai**; metrik adalah produk sampingan dari
  praktik yang baik, bukan tujuannya.

## Referensi dan bacaan lanjutan

- *Site Reliability Engineering: How Google Runs Production Systems*, by
  Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, eds.
  (praktik postmortem tanpa menyalahkan dan metrik insiden).
- *The Site Reliability Workbook*, by Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara, and Stephen Thorne, eds. (panduan praktis
  respons insiden dan postmortem).
- *The Field Guide to Understanding Human Error*, by Sidney Dekker (argumen
  mendasar untuk penyelidikan kegagalan yang sistemik dan tanpa menyalahkan).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy
  Engineering Blog (2012): artikulasi awal yang berpengaruh tentang praktik
  tanpa menyalahkan dalam operasi perangkat lunak.
