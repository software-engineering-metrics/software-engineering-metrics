# 3.5 Metrik komunikasi dan kolaborasi

## Gambaran umum dan motivasi

**Komunikasi dan kolaborasi**, huruf C dalam SPACE (topik 3.1), mengukur
bagaimana informasi benar-benar mengalir antarorang dan antartim: seberapa
mudah dokumentasi ditemukan, seberapa merata pengetahuan tersebar di dalam
tim, seberapa baik ketergantungan lintas tim dikoordinasikan, dan bagaimana
anggota tim baru masuk ke dalam aliran pemahaman bersama. Dimensi ini sering
menjadi yang paling sedikit diinstrumentasi dari kelimanya, justru karena
lebih sulit diamati daripada data pengiriman dan kurang personal dibanding
data kepuasan, dan kesenjangan itu adalah kekeliruan, karena kerusakan di sini
sering menjadi akar penyebab masalah yang muncul, dengan salah atribusi, di
setiap dimensi lainnya.

Tingkat kegagalan perubahan (topik 2.10) yang naik dan tampak seperti masalah
pengujian terkadang sebenarnya masalah komunikasi: tim yang tidak tahu tentang
perubahan sebuah dependensi sampai perubahan itu merusak produksi. Tren
kepuasan yang menurun (topik 3.2) dan tampak seperti masalah beban kerja
terkadang sebenarnya masalah keterasingan: seorang insinyur yang diam-diam
dikeluarkan dari percakapan tempat keputusan dibuat. Argumen utama topik ini
adalah bahwa komunikasi dan kolaborasi layak diukur langsung justru karena
kegagalannya menyamar sebagai masalah lain, dan tim yang mengejar akar
penyebab yang keliru membuang tenaga nyata untuk memperbaiki hal yang salah.

Bagi tim besar, dimensi ini secara struktural makin sulit dipertahankan tepat
ketika ia makin penting. Koordinasi tim lima orang terjadi lewat kedekatan
sehari-hari dan nyaris tidak memerlukan pengukuran yang disengaja;
organisasi lima ratus orang yang tersebar di berbagai zona waktu dan unit
bisnis bergantung pada dokumentasi, keterlacakan, dan mekanisme koordinasi
lintas tim yang harus dirancang dengan sengaja dan dipantau secara aktif,
karena saluran informal yang berhasil pada skala kecil tidak menjangkau
sejauh itu.

## Prinsip utama

- **Kerusakan komunikasi sering menyamar sebagai masalah lain.** Masalah
  kualitas atau kepuasan mungkin berakar pada kolaborasi.
- **Dimensi ini yang paling sulit diinstrumentasi secara otomatis**, dan
  godaannya adalah melewatkannya sama sekali; lawanlah godaan itu dengan
  sengaja.
- **Konsentrasi pengetahuan adalah risiko yang dapat diukur, bukan sekadar
  kekhawatiran samar.** Lacak seberapa sempit pengetahuan kritis dipegang.
- **Gesekan ketergantungan lintas tim sering tidak terlihat oleh tim-tim yang
  terlibat** sampai seseorang mengukurnya secara langsung.
- **Kecepatan onboarding adalah proksi langsung yang dapat diukur** untuk
  seberapa baik pemahaman bersama benar-benar mengalir dalam sebuah
  organisasi.

## Rekomendasi

### Ukur konsentrasi pengetahuan secara langsung

Lacak berapa banyak orang yang cakap meninjau, mengubah, atau mengoperasikan
setiap komponen sistem yang kritis: komponen dengan hanya satu orang yang
kompeten memiliki **[bus factor](https://en.wikipedia.org/wiki/Bus_factor)**
satu, risiko yang berat dan sering tidak terlihat (topik dalam buku pendamping
`software-engineering-guide` tentang merawat sistem berumur panjang
membahasnya lebih dalam). Data blame dari kontrol versi, dikombinasikan dengan
catatan rotasi siaga (on-call), dapat memunculkan konsentrasi ini secara
otomatis: cari komponen yang satu penulis atau satu penanggap siaga menyumbang
bagian yang tidak proporsional dari perubahan atau respons insiden selama
periode yang bermakna.

### Ukur gesekan ketergantungan lintas tim dengan sinyal langsung

Lacak berapa lama permintaan lintas tim, perubahan API yang dibutuhkan,
pembaruan pustaka bersama, rilis terkoordinasi, berlangsung dari diajukan
hingga diselesaikan, serupa dalam semangat dengan dekomposisi waktu siklus di
topik 2.6 tetapi diterapkan khusus pada koordinasi antartim, bukan di dalam
satu tim. Tim yang secara konsisten menunggu berminggu-minggu untuk dependensi
yang dimiliki tim lain memiliki masalah kolaborasi yang tidak akan muncul
dengan jelas di metrik pengiriman internal tim mana pun.

### Gunakan keterlacakan dokumentasi, bukan sekadar keberadaan dokumentasi, sebagai sinyal

Wiki yang penuh halaman usang atau tak dapat ditemukan bukanlah bukti
komunikasi yang baik hanya karena kontennya secara teknis ada di suatu tempat.
Bila memungkinkan, lacak seberapa sering dokumentasi benar-benar diakses,
seberapa sering anggota tim baru melaporkan tidak dapat menemukan jawaban yang
mereka butuhkan, atau seberapa sering pertanyaan yang sama berulang kali
diajukan di kanal obrolan karena jawabannya, meskipun terdokumentasi, tidak
dapat ditemukan. Ini secara langsung menghubungkan kualitas dokumentasi (topik
4.6) dengan perhatian kolaborasi dimensi ini.

### Lacak waktu onboarding hingga kontribusi produktif sebagai proksi langsung

Waktu dari anggota tim baru bergabung hingga kontribusi mandiri pertamanya yang
bermakna adalah proksi praktis yang kuat untuk seberapa baik pemahaman bersama
benar-benar mengalir dalam sebuah organisasi: tim yang pengetahuannya
sepenuhnya ada di kepala orang melakukan onboarding dengan lambat dan tak
terduga; tim dengan dokumentasi yang benar-benar baik, kepemilikan yang jelas,
dan bimbingan yang mudah diakses melakukan onboarding lebih cepat dan lebih
konsisten. Lacak metrik ini secara eksplisit dan perlakukan waktu onboarding
yang panjang atau sangat bervariasi sebagai sinyal kolaborasi, bukan sekadar
urusan HR.

### Petakan jaringan komunikasi yang sebenarnya secara berkala, bukan hanya bagan organisasi

Bagan organisasi menggambarkan siapa yang seharusnya melapor kepada siapa; ia
jarang menggambarkan siapa yang sebenarnya berbicara dengan siapa untuk
menyelesaikan pekerjaan. Analisis ringan dan berkala atas pola komunikasi,
jaringan tinjauan kode (siapa meninjau pekerjaan siapa), atau tumpang tindih
kehadiran rapat dapat mengungkap struktur kolaborasi nyata yang berbeda jauh
dari bagan organisasi formal, sering kali memperlihatkan hambatan informal
(satu orang yang dilewati semua orang) atau kantong terisolasi (subtim yang
telah menyimpang keluar dari aliran informasi yang lebih luas) yang kalau
tidak akan tetap tak terlihat.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa pengukuran kolaborasi langsung | Beban kerja rendah | Akar penyebab salah diatribusikan ke dimensi lain; risiko tetap tak terlihat |
| Pelacakan konsentrasi pengetahuan | Langsung memunculkan risiko nyata yang berat (bus factor) | Membutuhkan penggabungan data dari beberapa sistem (kontrol versi, siaga) |
| Pelacakan gesekan ketergantungan lintas tim | Mengungkap masalah koordinasi yang tak terlihat di dalam tim mana pun | Membutuhkan instrumentasi yang disengaja; tidak otomatis dari perkakas yang ada |
| Pemetaan jaringan komunikasi | Mengungkap struktur informal yang nyata di balik bagan organisasi | Bisa terasa mengganggu bila tidak ditangani dengan kehati-hatian yang sama seperti data kepuasan |

Ketegangan utamanya adalah **kesulitan instrumentasi versus nilai
diagnostik**. Dimensi ini memang lebih sulit diukur secara otomatis daripada
data pengiriman atau aktivitas, dan kesulitan itulah alasan banyak organisasi
melewatkannya, padahal kegagalannya sering menjadi akar penyebab tersembunyi
dari masalah yang diatribusikan ke dimensi lain. Atasi ketegangan ini dengan
memulai dari sinyal yang paling bernilai dan paling mudah ditangani,
konsentrasi pengetahuan dan gesekan ketergantungan lintas tim, yang keduanya
sebagian besar dapat diturunkan dari data kontrol versi dan pelacakan isu yang
sudah ada, sebelum mencoba analisis jaringan komunikasi yang lebih ambisius.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita tahu bus factor untuk setiap komponen sistem yang kritis,
   atau kita baru akan mengetahuinya dengan cara yang pahit ketika satu-satunya
   orang yang memahaminya tidak tersedia?** Tarik data kontrol versi dan siaga
   untuk sistem paling kritis Anda dan periksa dengan jujur seberapa
   terkonsentrasi pengetahuan itu sebenarnya.

2. **Berapa lama permintaan ketergantungan lintas tim yang tipikal
   diselesaikan, dan apakah salah satu tim yang terlibat akan menyadari
   gesekan itu tanpa pengukuran yang disengaja?** Pilih satu ketergantungan
   lintas tim yang terbaru dan telusuri garis waktunya yang sebenarnya;
   jawabannya sering lebih lama, dan kurang terlihat oleh pihak yang terlibat,
   daripada yang diduga kedua tim.

3. **Ketika baru-baru ini kita mengalami masalah kualitas atau kepuasan,
   mungkinkah kerusakan komunikasi atau kolaborasi menjadi bagian dari akar
   penyebab yang sebenarnya?** Tengok kembali sebuah insiden atau penurunan
   kepuasan yang baru terjadi dan ajukan pertanyaan ini secara khusus,
   alih-alih menerima penjelasan pertama yang lebih jelas.

4. **Berapa lama seorang anggota tim baru membuat kontribusi mandiri pertama
   yang bermakna, dan seberapa besar waktu itu bervariasi dari orang ke
   orang?** Waktu onboarding yang panjang atau sangat bervariasi adalah gejala
   langsung yang dapat diukur dari seberapa baik pemahaman bersama benar-benar
   mengalir di tim Anda.

5. **Apakah jaringan komunikasi informal kita cocok dengan bagan organisasi
   formal, atau telah berkembang hambatan tersembunyi atau kantong terisolasi
   yang belum dinamai siapa pun?** Jika Anda belum pernah melihatnya secara
   langsung, ketiadaan itu sendiri layak dibahas.

6. **Apakah dokumentasi kita benar-benar dapat ditemukan, atau hanya ada di
   suatu tempat yang sulit dicari?** Tanyakan kepada anggota tim yang baru
   bergabung, atau coba dengan sengaja menjawab pertanyaan nyata hanya dengan
   sumber daya terdokumentasi Anda, dan lihat bagaimana pengalamannya
   sebenarnya.

## Lensa sektor

**Startup.** Komunikasi terjadi secara alami melalui kedekatan dan percakapan
sehari-hari di tim kecil, dan pengukuran formal biasanya tidak perlu. Risiko
yang perlu diwaspadai adalah bus factor yang terkonsentrasi secara berbahaya
ketika tim tumbuh melampaui ukuran yang masih terjangkau oleh osmosis
informal ke semua orang, sering kali sekitar delapan hingga dua belas orang.

**Usaha kecil.** Percakapan sederhana, berkala, dan jujur, "siapa satu-satunya
orang yang memahami sistem ini," sering memunculkan risiko konsentrasi
pengetahuan paling kritis tanpa memerlukan instrumentasi formal. Prioritaskan
mendokumentasikan dua atau tiga area pengetahuan yang paling rapuh dan paling
terkonsentrasi lebih dulu.

**Perusahaan besar.** Gesekan ketergantungan lintas tim dan konsentrasi
pengetahuan sama-sama berskala buruk di sini, karena lebih banyak tim berarti
lebih luas permukaan koordinasi dan lebih banyak sistem kritis yang dapat
berakhir dimiliki oleh kumpulan ahli senior yang menyusut. Investasikan pada
instrumentasi yang direkomendasikan topik ini dengan sengaja, karena kesadaran
informal benar-benar tidak dapat mencakup organisasi pada skala ini.

**Pemerintahan.** Sistem berumur panjang dan masa kerja pegawai yang lama yang
lazim di organisasi sektor publik dapat menciptakan risiko bus factor yang
berat dan bersembunyi di balik stabilitas yang tampak, karena sistem yang
tidak berpindah tangan selama satu dekade mungkin bergantung sepenuhnya pada
satu atau dua orang yang mendekati masa pensiun. Perlakukan pengukuran
konsentrasi pengetahuan sebagai perhatian keberlangsungan operasi, bukan
sekadar kemewahan rekayasa.

## Contoh

**Perusahaan besar.** Tim platform sebuah perusahaan logistik menemukan, baru
setelah insiden kritis saat seorang insinyur kunci cuti, bahwa algoritme
perutean inti memiliki bus factor efektif satu: riwayat kontrol versi
menunjukkan satu orang menulis lebih dari 90% perubahan terbaru komponen itu,
dan catatan rotasi siaga menunjukkan orang yang sama secara pribadi
menyelesaikan setiap insiden terkait selama dua tahun sebelumnya. Tim
menjalankan program penyebaran pengetahuan yang disengaja, sesi pairing dan
rotasi kepemilikan insiden terkait, dan analisis lanjutan delapan bulan
kemudian menunjukkan bus factor naik menjadi empat, dengan insinyur semula
dibebaskan untuk mengerjakan pekerjaan baru yang berdampak lebih tinggi,
bukan tetap menjadi satu titik kegagalan permanen.

**Pemerintahan.** Tim rekayasa sebuah badan tunjangan negara bagian mengukur
gesekan ketergantungan lintas tim untuk pertama kalinya setelah keterlambatan
yang berulang dan disadari secara informal pada layanan verifikasi kelayakan
bersama. Data menunjukkan median waktu tunggu perubahan dependensi dari tim
layanan bersama adalah sebelas hari, jauh lebih lama daripada yang diduga
kedua tim ketika ditanya secara informal, dan akar penyebabnya ternyata proses
permintaan yang tidak jelas dan tidak terdokumentasi, bukan kekurangan
kapasitas. Menerbitkan proses permintaan yang jelas dan sederhana serta target
waktu respons yang dijanjikan untuk layanan bersama menurunkan median waktu
tunggu menjadi kurang dari dua hari dalam satu kuartal, tanpa tambahan staf.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengukur komunikasi dan kolaborasi secara langsung adalah
menangkap akar penyebab yang salah diatribusikan oleh dimensi lain: masalah
kualitas yang tampak seperti kesenjangan pengujian tetapi sebenarnya kerusakan
komunikasi membuang tenaga ketika tim mencoba memperbaikinya dengan menambah
pengujian alih-alih memperbaiki kegagalan koordinasi yang mendasarinya. Contoh
bus factor di atas menunjukkan versi imbal hasil yang paling mencolok:
organisasi yang menemukan dan memperbaiki risiko konsentrasi pengetahuan yang
berat secara proaktif menghindari biaya katastrofik menemukannya saat krisis
sungguhan, ketika satu-satunya orang yang memahami sistem kritis benar-benar
tidak tersedia.

Total biaya kepemilikan sebagian besar adalah upaya instrumentasi,
menggabungkan data kontrol versi, siaga, dan pelacakan isu dengan cara yang
tidak otomatis begitu saja, ditambah disiplin berkala untuk meninjau
konsentrasi pengetahuan dan gesekan ketergantungan secara eksplisit. Biaya itu
kecil dibandingkan biaya krisis bus factor yang sesungguhnya atau kegagalan
koordinasi lintas tim yang kronis dan tidak ditangani.

## Anti-pola dan jebakan

- **Melewatkan dimensi ini karena sulit diinstrumentasi secara otomatis:**
  membiarkan akar penyebab salah diatribusikan ke dimensi lain yang lebih
  mudah diukur.
- **Memperlakukan bagan organisasi sebagai gambaran akurat pola komunikasi
  yang nyata:** sering keliru, dan kesenjangannya persis tempat hambatan
  tersembunyi berada.
- **Mengabaikan bus factor sampai krisis memaksa penemuannya:** mode kegagalan
  paling merusak yang diperingatkan topik ini.
- **Menganggap keberadaan dokumentasi sama dengan kegunaan dokumentasi:**
  konten usang atau tak dapat ditemukan hanya memberi sedikit nilai komunikasi
  yang nyata.
- **Mengukur gesekan lintas tim tetapi tidak bertindak atas akar penyebab yang
  jelas dan dapat diperbaiki setelah ditemukan:** menyia-nyiakan investasi
  diagnostik.
- **Memperlakukan onboarding yang lambat dan bervariasi semata sebagai urusan
  HR, bukan sinyal kolaborasi rekayasa:** melewatkan proksi yang benar-benar
  berguna dan dapat diukur.

## Model kematangan

- **Level 1, Initiate (Memulai):** Komunikasi dan kolaborasi sama sekali tidak
  diukur; bus factor dan gesekan lintas tim baru ditemukan lewat krisis.
- **Level 2, Develop (Mengembangkan):** Ada sedikit kesadaran informal akan
  konsentrasi pengetahuan, tetapi tidak ada pengukuran yang konsisten atau
  penyelidikan proaktif.
- **Level 3, Standardize (Menstandarkan):** Bus factor dan gesekan ketergantungan
  lintas tim diukur secara konsisten untuk sistem kritis dan layanan bersama di
  seluruh organisasi.
- **Level 4, Manage (Mengelola):** Pemetaan jaringan komunikasi secara berkala
  mengungkap hambatan tersembunyi dan kantong terisolasi, dan waktu onboarding
  dilacak sebagai proksi langsung untuk kesehatan pemahaman bersama.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi secara proaktif
  mengurangi risiko konsentrasi pengetahuan dan gesekan lintas tim sebelum
  keduanya menyebabkan insiden, dan dapat menunjuk intervensi tertentu,
  penyebaran pengetahuan yang disengaja, proses ketergantungan yang
  diperjelas, yang terukur memperbaiki dimensi ini.

## Gagasan untuk diskusi

1. Apa bus factor kita untuk satu sistem paling kritis kita, dengan jujur?
2. Ketergantungan lintas tim mana yang paling menimbulkan gesekan pada kuartal lalu, dan apakah kita mengukurnya?
3. Apakah anggota tim baru akan menemukan dokumentasi kita, atau hanya mendapati bahwa dokumentasi itu secara teknis ada di suatu tempat?
4. Apakah jaringan komunikasi informal kita cocok dengan bagan organisasi kita?
5. Masalah kualitas atau kepuasan apa yang mungkin sebenarnya berakar pada kolaborasi yang belum kita selidiki?

## Poin-poin utama

- Kegagalan komunikasi dan kolaborasi sering **menyamar sebagai masalah
  lain**; akar penyebab yang salah diatribusikan ke dimensi yang keliru
  membuang tenaga.
- Lacak **konsentrasi pengetahuan (bus factor)** langsung memakai data kontrol
  versi dan siaga, alih-alih menunggu krisis mengungkapkannya.
- Ukur **gesekan ketergantungan lintas tim** secara eksplisit; biasanya tidak
  terlihat oleh tim yang terlibat sampai diukur.
- Gunakan **waktu onboarding hingga kontribusi produktif** sebagai proksi
  praktis langsung untuk seberapa baik pemahaman bersama mengalir.
- Petakan **jaringan komunikasi yang nyata** secara berkala, karena sering
  berbeda jauh dari bagan organisasi formal.

## Referensi dan bacaan lanjutan

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Team Topologies*, by Matthew Skelton and Manuel Pais (mode interaksi tim
  dan perancangan ketergantungan lintas tim).
- *Peopleware: Productive Projects and Teams*, by Tom DeMarco and Timothy
  Lister (struktur komunikasi informal dan pengaruhnya terhadap
  produktivitas).
- Conway, Melvin E., "How Do Committees Invent?" (1968): asal mula Hukum
  Conway, tentang hubungan antara struktur komunikasi dan struktur sistem.
