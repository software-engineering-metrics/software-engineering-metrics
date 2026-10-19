# 3.3 Metrik kinerja dan proksi hasil

## Gambaran umum dan motivasi

**Kinerja**, huruf P dalam SPACE (topik 3.1), adalah dimensi yang paling
sering tertukar dengan aktivitas, dan kekeliruan itulah yang hendak dicegah
oleh topik ini. Kinerja bertanya apakah pekerjaan seorang insinyur atau
sebuah tim benar-benar menghasilkan [hasil](https://en.wikipedia.org/wiki/Outcome_(probability))
yang baik: fitur yang dikirim dan berfungsi, sistem yang tetap andal,
perubahan yang menggerakkan metrik bisnis atau pengguna ke arah yang benar.
Aktivitas (topik 3.4) hanya bertanya seberapa banyak gerakan yang terjadi.
Sebuah tim bisa sangat aktif tetapi berkinerja rendah, terus mengirim
perubahan kecil yang tidak pernah menggerakkan hasil apa pun, dan kebalikannya
sama mungkinnya: tim yang jarang mengirim tetapi perubahannya dengan andal
mendarat tepat sasaran.

Kesulitan dimensi ini adalah bahwa hasil sering tidak dapat dikaitkan dengan
satu orang atau bahkan satu tim; hasil perangkat lunak muncul dari kolaborasi,
dari keputusan yang dibuat berbulan-bulan sebelumnya oleh orang-orang yang
kini sudah pindah ke proyek lain, dari kondisi pasar yang tidak dikendalikan
insinyur mana pun. Para peneliti SPACE eksplisit soal ini: kinerja harus
diukur di tingkat sistem atau tim dengan memakai beberapa sinyal yang
menyatu, tidak direduksi menjadi satu angka, dan tentu saja tidak
dikaitkan pada seorang insinyur secara terpisah. Topik ini menanggapi
panduan itu dengan serius dan memperlakukan atribusi kinerja individu
sebagai jebakan yang harus dihindari secara aktif, bukan jalan pintas yang
diambil ketika nyaman.

Bagi tim besar, mengukur kinerja dengan benar adalah pembeda antara program
metrik yang sungguh-sungguh memperbaiki hasil dan program yang sekadar
menghargai kesibukan yang terlihat. Organisasi perusahaan besar yang
membandingkan kinerja di banyak tim membutuhkan sinyal yang tahan terhadap
manipulasi lewat volume keluaran mentah; organisasi pemerintahan yang
membenarkan investasi teknologi kepada badan pengawas perlu menunjukkan bahwa
upaya rekayasa menghasilkan hasil nyata, bukan sekadar artefak yang
diserahkan, yang persis merupakan prinsip hasil di atas keluaran dari topik
1.3 yang diterapkan pada dimensi khusus ini.

## Prinsip utama

- **Kinerja mengukur apakah pekerjaan menghasilkan hasil yang baik, bukan
  seberapa banyak pekerjaan terjadi.** Ini adalah pembeda utama dari dimensi
  aktivitas.
- **Gunakan beberapa sinyal yang menyatu, jangan pernah satu angka kinerja.**
  Tidak ada satu proksi pun yang cukup andal untuk berdiri sendiri.
- **Ukur di tingkat tim atau sistem.** Atribusi hasil individu biasanya tidak
  andal dan mengundang persis manipulasi yang diperingatkan buku ini di
  sepanjang halamannya.
- **Kualitas adalah bagian dari kinerja, bukan perhatian yang terpisah.**
  Pekerjaan yang dikirim tetapi merusak hal lain sebenarnya tidak berkinerja
  baik.
- **Sinyal kinerja tanpa keputusan yang menyertainya hanyalah hiasan**,
  persis sesuai prinsip umum topik 1.1 yang diterapkan pada dimensi ini.

## Rekomendasi

### Gabungkan beberapa sinyal yang menyatu alih-alih satu skor kinerja

Ambil bukti kinerja dari berbagai sumber: tingkat kegagalan perubahan
(topik 2.10) dan tingkat cacat yang lolos (topik 5.1) untuk kualitas, hasil
deployment yang dikaitkan dengan adopsi fitur yang sesungguhnya (topik 5.2)
untuk menilai apakah pekerjaan itu bermakna, dan penilaian kualitatif dari
rekan atau manajer atas kontribusi tim terhadap tujuan strategis untuk
konteks yang tidak dapat ditangkap metrik murni. Tidak ada satu pun dari ini
yang andal sendirian; bersama-sama, ketika menyatu pada kesimpulan yang sama,
semuanya jauh lebih tepercaya daripada angka tunggal mana pun.

### Ukur di tingkat tim, tahan godaan atribusi individu

Hasil perangkat lunak jarang merupakan produk pekerjaan satu orang saja;
hasil itu muncul dari keputusan desain, umpan balik tinjauan, pekerjaan
sebelumnya oleh orang yang mungkin sudah meninggalkan tim, dan kolaborasi
lintas batas. Mengaitkan hasil pada satu insinyur biasanya merupakan presisi
semu yang mengabaikan kenyataan ini dan menciptakan insentif kuat bagi
individu untuk melindungi pengakuan alih-alih berkolaborasi dengan bebas,
persis jenis distorsi insentif yang diperingatkan topik 1.2.

### Masukkan kualitas langsung ke dalam definisi kinerja

Fitur yang dikirim tepat waktu tetapi menyebabkan gelombang insiden produksi
tidak berkinerja baik, meskipun pandangan naif yang hanya melihat keluaran
akan menghitungnya sebagai terkirim. Masukkan tingkat kegagalan perubahan,
tingkat cacat yang lolos, dan data insiden pascarilis langsung ke dalam cara
Anda menilai kinerja, alih-alih memperlakukan kualitas sebagai perhatian
terpisah yang terputus dan hanya diukur di Bagian 4 dan Bagian 6 buku ini.

### Pakai data kinerja untuk menginformasikan keputusan investasi dan proses, bukan peringkat individu

Penggunaan data kinerja yang produktif adalah memutuskan di mana berinvestasi
lebih jauh (tim yang konsisten menghasilkan hasil kuat layak mendapat lebih
banyak sumber daya dan otonomi) dan di mana menyelidiki (tim yang pekerjaannya
terus gagal mendarat layak dibantu, bukan disalahkan, sesuai kerangka
diagnostik topik 1.1). Memeringkat individu atau tim secara kompetitif
berdasarkan data kinerja mengundang persis manipulasi dan kerusakan moral yang
diperingatkan buku ini, dan jarang menghasilkan hasil yang lebih baik daripada
penggunaan diagnostik.

### Jujurlah tentang batas atribusi, terutama untuk tim platform dan tim pendukung

Tim yang membangun infrastruktur bersama, perkakas internal, atau kapabilitas
platform (topik rekayasa platform dalam buku pendamping
`software-engineering-guide` membahasnya secara langsung) sering kali
kontribusinya terhadap hasil berjarak beberapa langkah dari metrik apa pun
yang berhadapan langsung dengan pelanggan. Ukur kinerja tim-tim ini melalui
pengaruhnya pada tim yang mereka dukung, adopsi platform mereka, dan
berkurangnya gesekan yang dilaporkan tim pengguna, alih-alih memaksakan
metrik hasil langsung yang tidak cocok pada pekerjaan yang pada dasarnya
tidak langsung.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Satu skor kinerja per tim | Sederhana untuk disajikan dan dibandingkan | Presisi semu; menyembunyikan sinyal dasar mana yang sebenarnya menggerakkan skor |
| Beberapa sinyal yang menyatu | Lebih tepercaya, tahan terhadap manipulasi satu metrik | Lebih sulit diringkas dalam satu angka; membutuhkan lebih banyak konteks untuk ditafsirkan |
| Pengukuran kinerja tingkat tim | Sesuai dengan cara hasil perangkat lunak sebenarnya muncul | Tidak dapat langsung menjawab pertanyaan tentang kontribusi individu |
| Atribusi kinerja tingkat individu | Terasa lebih langsung dapat ditindaklanjuti untuk penilaian | Biasanya presisi semu; risiko manipulasi dan perlindungan pengakuan yang besar |

Ketegangan utamanya adalah **presisi versus kejujuran**. Satu angka kinerja per
tim, atau lebih buruk lagi per individu, mudah dibandingkan dan diperingkat,
tetapi presisi itu biasanya semu, menyembunyikan ketidakpastian nyata soal
atribusi dan kualitas di balik angka yang tampak bersih. Atasi ketegangan ini
dengan menerima gambaran multisinyal yang kurang rapi sebagai gambaran yang
jujur, dan dengan menolak tekanan dari pimpinan atau proses penilaian kinerja
untuk meringkasnya kembali menjadi satu skor yang presisinya semu.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah pengukuran kinerja kita saat ini menggabungkan beberapa sinyal
   yang menyatu, atau bergantung pada satu angka yang terasa lebih presisi
   daripada kenyataannya?** Audit apa pun yang saat ini Anda sebut "metrik
   kinerja" dan periksa berapa banyak sinyal independen yang menyatu yang
   benar-benar menyumbang padanya.

2. **Pernahkah kita mengaitkan kinerja sebuah tim atau individu tanpa
   memperhitungkan sifat kolaboratif dan lintas tim dari bagaimana hasil itu
   sebenarnya terjadi?** Pilih satu kisah sukses terbaru dan telusuri seberapa
   banyak yang bergantung pada orang, keputusan, atau pekerjaan sebelumnya di
   luar tim atau individu yang diberi pengakuan.

3. **Apakah pengukuran kinerja kita mencakup kualitas, atau hanya kecepatan
   pengiriman dan volume keluaran?** Fitur yang dikirim lalu kemudian
   menyebabkan insiden produksi yang signifikan tidak seharusnya dinilai
   berkinerja tinggi; periksa apakah pengukuran Anda saat ini benar-benar
   akan menangkap kasus ini.

4. **Bagaimana kita mengukur kinerja tim platform atau tim pendukung yang
   kontribusinya terhadap hasil bersifat tidak langsung?** Jika jawaban
   jujurnya adalah "kita tidak mengukurnya, sebenarnya," kesenjangan itu layak
   dinamai dan ditangani langsung, alih-alih membiarkan tim-tim itu praktis
   tidak terukur atau diukur secara tidak adil terhadap metrik hasil yang
   berhadapan dengan pelanggan yang tidak cocok dengan pekerjaan mereka.

5. **Pernahkah data kinerja dipakai untuk memeringkat individu secara
   kompetitif satu sama lain, secara formal maupun informal?** Pergeseran
   ini, serupa dengan risiko data kepuasan di topik 3.2, merusak kejujuran
   data maupun kesediaan tim untuk berkolaborasi secara terbuka.

6. **Ketika sinyal-sinyal kita yang menyatu tidak sepakat, misalnya
   kecepatan pengiriman tinggi tetapi tingkat cacat naik, apa yang kita
   simpulkan, dan apakah proses kita menangani ketidaksepakatan itu dengan
   baik?** Ketidaksepakatan antarsinyal adalah informasi berharga tersendiri;
   diskusikan apakah tim Anda saat ini memperlakukannya sebagai derau yang
   diabaikan atau sebagai temuan nyata yang layak diselidiki.

## Lensa sektor

**Startup.** Kinerja biasanya terlihat langsung: apakah fitur berfungsi,
apakah pelanggan mengadopsinya, apakah metriknya bergerak. Pengukuran
multisinyal formal sering tidak perlu pada skala ini; risikonya justru
mengaitkan keberhasilan atau kegagalan terlalu cepat pada satu orang di tim
kecil yang bergerak cepat dan sangat kolaboratif, ketika pujian dan
kesalahan jarang menjadi milik satu individu saja.

**Usaha kecil.** Gabungkan data pengiriman dan kualitas yang sudah Anda miliki
(topik 2.10, topik 5.1) dengan percakapan langsung yang jujur tentang apakah
pekerjaan terbaru benar-benar membantu bisnis, alih-alih membangun
instrumentasi multisinyal formal yang tidak sanggup Anda pelihara.

**Perusahaan besar.** Di sinilah disiplin pengukuran multisinyal tingkat tim
layak atas investasinya, karena tekanan untuk mereduksi kinerja menjadi satu
angka yang dapat dibandingkan di puluhan tim paling kuat di sini, dan
kerusakan akibat presisi semu menumpuk pada keputusan alokasi sumber daya
seluruh organisasi. Tolak tekanan itu secara eksplisit dan bangunlah argumen
multisinyal tentang mengapa hal ini penting.

**Pemerintahan.** Menunjukkan bahwa investasi rekayasa menghasilkan hasil
nyata, bukan sekadar artefak yang diserahkan, sering kali merupakan pertanyaan
utama yang diajukan badan pengawas. Pengukuran kinerja multisinyal, yang
dikaitkan secara eksplisit dengan metrik hasil (topik 5.3) alih-alih proksi
pengiriman semata, memberikan jawaban yang jauh lebih kuat dan lebih dapat
dipertahankan daripada hitungan aktivitas atau pengiriman saja.

## Contoh

**Perusahaan besar.** Pimpinan sebuah perusahaan teknologi ritel secara
informal memeringkat tim rekayasa berdasarkan story point yang diselesaikan
per sprint, memperlakukannya sebagai proksi kinerja. Setelah mengadopsi
pendekatan multisinyal yang menggabungkan data pengiriman, tingkat kegagalan
perubahan, dan adopsi fitur pascarilis, pimpinan menemukan bahwa tim dengan
tingkat penyelesaian story point tertinggi memiliki tingkat adopsi fitur
terendah di perusahaan: mereka mengirim dengan cepat tetapi membangun hal
yang tidak dipakai pelanggan. Mengalokasikan ulang prioritas peta jalan tim
itu berdasarkan gambaran kinerja yang lebih lengkap, bukan peringkat satu
angka yang menyesatkan, mengalihkan kapasitas rekayasa yang signifikan ke
pekerjaan berdampak lebih tinggi dalam satu kuartal.

**Pemerintahan.** Program rekayasa sebuah badan pajak nasional perlu
menunjukkan kepada komite pengawas bahwa investasi sistem besar telah
memperbaiki kinerja, bukan sekadar menyerahkan lingkup yang dikontrakkan.
Alih-alih melaporkan penyelesaian story point atau tonggak saja, program itu
menyajikan serangkaian sinyal yang menyatu: berkurangnya tingkat kesalahan
pemrosesan, berkurangnya median waktu pemrosesan, dan meningkatnya tingkat
penyelesaian layanan mandiri yang berhasil, semuanya dikaitkan dengan
komponen sistem tertentu yang diserahkan. Penyajian multisinyal yang terkait
hasil itu memenuhi pemeriksaan komite dengan cara yang gagal dicapai oleh
laporan sederhana "diserahkan sesuai jadwal" dari program sebelumnya pada
tahun sebelumnya.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengukur kinerja melalui sinyal yang menyatu dan terkait hasil,
alih-alih satu angka berpresisi semu, adalah keputusan alokasi sumber daya yang
lebih baik: organisasi yang dapat melihat pekerjaan tim mana yang benar-benar
menggerakkan hasil dapat berinvestasi lebih jauh di tempat yang penting dan
menyelidiki di tempat yang tidak, alih-alih menghargai tim mana pun yang kebetulan
tampak paling sibuk. Contoh ritel di atas khas: peringkat satu angka yang
menyesatkan telah mengarahkan perhatian investasi menjauh dari tempat yang
sebenarnya akan paling membantu.

Total biaya kepemilikannya lebih tinggi daripada pendekatan satu metrik,
karena memerlukan penggabungan data dari berbagai sumber (pengiriman,
kualitas, hasil) dan menolak tekanan organisasi untuk meringkas kembali
gambaran itu menjadi satu angka yang dapat dibandingkan. Biaya itu layak
dibayar karena alternatifnya, satu skor berpresisi semu, secara aktif
menyesatkan keputusan alokasi sumber daya yang seharusnya diinformasikan
oleh data kinerja.

## Anti-pola dan jebakan

- **Mencampuradukkan aktivitas dengan kinerja:** kesalahan paling umum yang
  secara khusus hendak dicegah dimensi ini.
- **Atribusi kinerja individu untuk hasil yang kolaboratif dan lintas tim:**
  biasanya presisi semu yang mengurangi kolaborasi.
- **Mengeluarkan kualitas dari definisi kinerja:** menghargai pekerjaan yang
  dikirim tetapi merusak hal lain.
- **Memaksakan metrik hasil langsung pada tim platform atau tim pendukung:**
  mengukur hal yang salah untuk pekerjaan yang pada dasarnya tidak langsung.
- **Meringkas kembali beberapa sinyal yang menyatu menjadi satu angka berpresisi
  semu di bawah tekanan organisasi:** menghilangkan kejujuran yang hendak
  diberikan pendekatan multisinyal.
- **Memakai data kinerja untuk memeringkat individu secara kompetitif:**
  merusak kejujuran data maupun kolaborasi tim.

## Model kematangan

- **Level 1, Initiate (Memulai):** Kinerja disamakan dengan aktivitas atau
  volume keluaran, diukur dengan satu angka yang tidak dikaji.
- **Level 2, Develop (Mengembangkan):** Beberapa sinyal kualitas dipertimbangkan
  bersama keluaran, tetapi tidak ada pendekatan multisinyal yang konsisten
  dan atribusi individu masih terjadi secara informal.
- **Level 3, Standardize (Menstandarkan):** Kinerja diukur di tingkat tim
  dengan beberapa sinyal yang menyatu termasuk kualitas, secara konsisten di
  seluruh organisasi.
- **Level 4, Manage (Mengelola):** Ketidaksepakatan antarsinyal yang menyatu
  diselidiki secara aktif; tim platform dan tim pendukung memiliki ukuran
  kinerja tidak langsung yang sesuai dengan pekerjaan mereka yang sebenarnya.
- **Level 5, Orchestrate (Mengorkestrasi):** Data kinerja secara langsung
  menjadi masukan keputusan alokasi sumber daya dan investasi, dan organisasi
  dapat menunjuk keputusan realokasi tertentu yang dimungkinkan oleh
  pandangan multisinyal dan akan terlewat oleh pandangan satu angka.

## Gagasan untuk diskusi

1. Angka tunggal apa yang saat ini kita pakai sebagai proksi kinerja yang seharusnya kita pensiunkan demi serangkaian sinyal yang menyatu?
2. Pernahkah kita mengaitkan suatu hasil pada tim atau orang yang salah karena atribusinya tidak jelas?
3. Bagaimana kita saat ini mengukur kinerja tim platform atau tim pendukung?
4. Seperti apa jadinya jika sinyal-sinyal kita yang menyatu saling tidak sepakat pada kuartal depan?
5. Di mana peringkat berdasarkan story point atau jumlah pengiriman telah salah mengarahkan perhatian investasi kita?

## Poin-poin utama

- Kinerja mengukur apakah pekerjaan menghasilkan **hasil yang baik**, bukan
  seberapa banyak gerakan terjadi; jangan mencampuradukkannya dengan
  aktivitas (topik 3.4).
- Gunakan **beberapa sinyal yang menyatu**, jangan pernah satu angka kinerja,
  dan curigai presisi semu.
- Ukur di **tingkat tim atau sistem**; atribusi hasil individu biasanya tidak
  andal dan merusak kolaborasi.
- **Kualitas adalah bagian dari kinerja**, bukan perhatian yang terpisah dan
  terputus.
- Beri tim platform dan tim pendukung **ukuran kinerja yang sesuai dan tidak
  langsung** alih-alih memaksakan metrik hasil langsung yang tidak cocok pada
  pekerjaan mereka.

## Referensi dan bacaan lanjutan

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren,
  Jez Humble, and Gene Kim (pengukuran kinerja berbasis hasil).
- *Team Topologies*, by Matthew Skelton and Manuel Pais (struktur tim platform
  dan tim pendukung serta cara mengukur kontribusi mereka).
- *Measuring and Managing Performance in Organizations*, by Robert D. Austin
  (risiko metrik kinerja berpresisi semu).
