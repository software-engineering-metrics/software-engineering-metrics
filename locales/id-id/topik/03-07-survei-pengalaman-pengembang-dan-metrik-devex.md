# 3.7 Survei pengalaman pengembang dan metrik DevEx

## Gambaran umum dan motivasi

Topik ini menutup Bagian 3 dengan mekanisme praktis yang membuat data laporan
mandiri di setiap topik sebelumnya dapat dipercaya: cara merancang survei
pengalaman pengembang (DevEx) yang menghasilkan sinyal sejati, bukan kontes
popularitas, dan cara menggabungkan data survei dengan instrumentasi objektif
menjadi rangkaian metrik yang benar-benar dapat ditindaklanjuti organisasi.
Setiap topik dalam bagian ini bergantung pada suatu bentuk laporan mandiri,
kepuasan dan kesejahteraan (topik 3.2) yang paling langsung, tetapi kinerja,
komunikasi, dan aliran juga diuntungkan oleh survei yang dirancang dengan
baik, dan survei yang dirancang buruk melemahkan nilai semuanya sekaligus.

**Pengalaman pengembang (developer experience, DevEx)** adalah pembingkaian
yang lebih luas dan lebih baru yang muncul di sekitar gagasan inti yang sama
yang diformalkan SPACE: pengalaman insinyur yang sesungguhnya sehari-hari dalam
menyelesaikan pekerjaan, gesekan, perkakas, beban kognitif, putaran umpan
balik, adalah sesuatu yang dapat diukur dan diperbaiki, bukan sekadar
perhatian budaya yang lunak. Riset DevEx, terutama kerangka kerja yang
diusulkan oleh Abi Noda, Margaret-Anne Storey, Nicole Forsgren, dan Michaela
Greiler, mengorganisasi pengalaman ini di sekitar tiga dimensi: putaran umpan
balik, beban kognitif, dan keadaan aliran (flow state), yang berpadanan erat
dengan dan memperluas dimensi SPACE yang telah dibahas mendalam di bagian ini.

Bagi tim besar, perbedaan antara survei yang menghasilkan sinyal tepercaya dan
survei yang menghasilkan derau atau, lebih buruk lagi, data yang secara aktif
menyesatkan sepenuhnya terletak pada rincian rancangan yang dibahas topik ini:
pilihan kata pada pertanyaan, pilihan skala respons, pengambilan sampel dan
irama, dan cara hasil dikomunikasikan kembali kepada responden. Organisasi
perusahaan besar dan pemerintahan yang menjalankan survei ini pada skala besar,
di antara ribuan insinyur, tidak boleh salah dalam hal ini, karena instrumen
yang cacat pada skala itu menghasilkan kesimpulan yang keliru dengan penuh
percaya diri dan membentuk keputusan alokasi sumber daya yang nyata.

## Prinsip utama

- **Kualitas rancangan survei menentukan keandalan data jauh lebih besar
  daripada panjang atau kecanggihan survei.** Survei pendek yang dirancang
  dengan baik selalu mengalahkan survei panjang yang dirancang buruk.
- **Tingkat respons adalah sinyal tersendiri**, bukan sekadar metrik
  pengumpulan data; tingkat yang menurun sering menandakan terkikisnya
  kepercayaan pada prosesnya.
- **Gabungkan data survei dengan instrumentasi objektif** di mana pun
  memungkinkan, mengikuti prinsip instrumentasi dari topik 1.5; pakai data
  survei khusus untuk apa yang tidak dapat ditangkap data objektif.
- **Tutup putarannya bersama responden.** Survei yang tidak pernah terlihat
  mengarah pada perubahan apa pun melatih orang untuk berhenti menanggapinya
  dengan serius.
- **DevEx dan SPACE adalah pembingkaian yang saling melengkapi dari
  perhatian dasar yang sama**, bukan kerangka kerja yang bersaing untuk dipilih
  salah satunya.

## Rekomendasi

### Rancang pertanyaan agar jelas dan hindari kalimat yang mengarahkan atau bercabang ganda

Tulis pertanyaan survei yang menanyakan tepat satu hal, dalam bahasa yang
lugas, tanpa menyematkan asumsi dalam pertanyaan itu sendiri. "Seberapa puas
Anda dengan perkakas dan dokumentasi kami?" adalah pertanyaan bercabang ganda
(double-barrelled) yang mencampurkan dua jawaban yang mungkin sangat berbeda
menjadi satu respons yang membingungkan. Pecah menjadi dua pertanyaan
terpisah. Hindari kalimat yang mengarahkan seperti "seberapa besar investasi
kami baru-baru ini pada perkakas telah memperbaiki pengalaman Anda?" yang
menganggap perbaikan itu terjadi alih-alih bertanya secara netral apakah
memang terjadi.

### Gunakan skala respons yang konsisten dan uji coba pertanyaan baru sebelum peluncuran luas

Standarkan satu skala respons yang konsisten (skala [Likert](https://en.wikipedia.org/wiki/Likert_scale)
lima atau tujuh poin lazim dan banyak dipelajari) di seluruh instrumen survei
Anda, agar respons dapat dibandingkan antarpertanyaan dan dari waktu ke waktu.
Uji coba setiap pertanyaan baru dengan kelompok kecil sebelum meluncurkannya
ke seluruh organisasi, untuk menangkap kata-kata yang ambigu atau tafsiran
yang tak terduga sebelum merusak seluruh kumpulan data.

### Perlakukan tingkat respons sebagai sinyal diagnostik tersendiri

Lacak tingkat respons survei dari siklus ke siklus, dan perlakukan penurunannya
sebagai tanda peringatan yang layak diselidiki langsung, serupa dengan sinyal
kepercayaan yang dibahas di topik 3.2. Tingkat respons yang turun sering
menandakan kelelahan survei, terkikisnya kepercayaan bahwa hasil mengarah pada
tindakan, atau kecurigaan yang tumbuh bahwa anonimitas tidak sungguh-sungguh
dilindungi, yang masing-masing layak diselidiki langsung alih-alih diabaikan
sebagai ketidaknyamanan pengumpulan data belaka.

### Gabungkan data survei dengan instrumentasi DevEx objektif

Pasangkan respons survei yang subjektif dengan sinyal objektif bila ada: waktu
build, waktu eksekusi suite pengujian, waktu penyiapan lingkungan pengembangan
lokal, serta data waktu alir dan interupsi dari topik 3.6. Respons survei yang
mengatakan "build kami terlalu lambat" menjadi jauh lebih dapat ditindaklanjuti
bila dipasangkan dengan tren waktu build yang benar-benar terukur, dan
kombinasi ini menangkap kasus ketika persepsi dan kenyataan objektif berbeda
ke salah satu arah, yang layak diselidiki tersendiri.

### Tutup putarannya: terbitkan hasil dan tindak lanjut yang terlihat

Setelah setiap siklus survei, terbitkan ringkasan hasil yang jujur, termasuk
hasil yang mungkin tidak ingin disorot pimpinan, dan berkomitmenlah secara
terbuka pada setidaknya satu tindakan konkret sebagai tanggapan. Survei yang
tidak menghasilkan tindak lanjut yang terlihat mengajarkan responden bahwa
masukan jujur mereka tidak berarti, yang menurunkan tingkat respons maupun
kejujuran respons di setiap siklus berikutnya. Disiplin menutup putaran ini
sering menjadi penentu tunggal terbesar apakah program survei DevEx tetap
berguna selama bertahun-tahun atau perlahan membusuk menjadi sekadar latihan
mencentang kotak.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Survei panjang yang komprehensif | Data kaya dan terperinci di banyak topik | Tingkat respons lebih rendah, kelelahan lebih tinggi, lebih banyak ruang bagi pertanyaan yang dirancang buruk |
| Survei pendek dan terfokus | Tingkat respons lebih tinggi, lebih mudah dirancang dengan baik | Cakupan lebih sedikit; mungkin melewatkan isu baru di luar fokus yang dipilih |
| Data survei saja | Menangkap pengalaman subjektif secara langsung | Rentan terhadap bias dan tidak dapat diverifikasi terhadap kenyataan objektif |
| Survei dikombinasikan dengan instrumentasi objektif | Menangkap perbedaan antara persepsi dan kenyataan, lebih dapat ditindaklanjuti | Membutuhkan upaya integrasi data yang lebih besar |

Ketegangan utamanya adalah **cakupan versus kualitas respons**. Survei yang
lebih panjang dan komprehensif mencakup lebih banyak hal tetapi menurunkan
tingkat respons dan meningkatkan risiko pertanyaan yang dirancang buruk
lolos; survei pendek dan terfokus mendapat respons berkualitas lebih baik
tetapi berisiko melewatkan sesuatu yang penting di luar cakupannya. Atasi
ketegangan ini dengan menjaga survei inti yang berulang tetap pendek dan teruji
coba dengan baik, serta memakai survei penyelaman mendalam sesekali yang
berlabel jelas untuk topik tertentu yang membutuhkan eksplorasi lebih
terperinci, alih-alih mencoba mencakup segalanya di setiap siklus.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Pernahkah kita menguji coba pertanyaan survei baru dengan kelompok kecil
   sebelum meluncurkannya secara luas, atau pertanyaan baru langsung masuk ke
   survei penuh?** Melewatkan langkah uji coba adalah cara umum pertanyaan
   yang ambigu atau bercabang ganda merusak seluruh kumpulan data sebelum ada
   yang menyadari kata-katanya tidak jelas.

2. **Apa yang terjadi pada tingkat respons kita selama beberapa siklus survei
   terakhir, dan apakah kita telah menyelidiki penurunan bila terjadi?**
   Perlakukan tren ini sebagai sinyal sejati yang layak dibahas, bukan sekadar
   gangguan pengumpulan data yang dicatat sambil lalu.

3. **Apakah kita menggabungkan data survei dengan instrumentasi objektif apa
   pun, atau persepsi subjektif berdiri sepenuhnya sendiri dalam pelaporan
   kita?** Tentukan setidaknya satu tempat ketika memasangkan pertanyaan survei
   dengan data objektif, waktu build, frekuensi deployment, dapat membuat
   hasilnya lebih dapat ditindaklanjuti.

4. **Tindakan konkret apa yang telah kita ambil sebagai hasil langsung dan
   terlihat dari siklus survei terakhir, dan apakah kita
   mengomunikasikan tindakan itu kembali kepada responden?** Jika jawaban
   jujurnya "tidak ada yang terlihat," kesenjangan itu kemungkinan sudah
   mengikis kepercayaan pada instrumen, entah sudah tampak di tingkat respons
   atau belum.

5. **Apakah ada pertanyaan survei kita saat ini yang mengarahkan atau bercabang
   ganda, dan apakah kita akan menyadarinya?** Tinjau pertanyaan Anda yang
   sebenarnya saat ini terhadap ujian khusus ini sebagai latihan bersama.

6. **Bagaimana data survei DevEx atau SPACE kita dibandingkan dengan sinyal
   objektif ketika keduanya tampak tidak sepakat, dan apa yang
   dikatakan ketidaksepakatan itu kepada kita?** Kasus ketika persepsi dan data
   objektif berbeda sering lebih bernilai secara diagnostik daripada kasus
   ketika keduanya sejalan, karena kesenjangan itu sendiri informatif.

## Lensa sektor

**Startup.** Survei denyut yang sederhana dan sangat singkat, kadang hanya satu
atau dua pertanyaan, dijalankan secara informal dan sering, biasanya cukup pada
skala ini, dan ketelitian rancangan instrumen formal kurang penting ketika
seorang pendiri masih dapat berbicara langsung dengan hampir semua orang secara
rutin.

**Usaha kecil.** Alat survei gratis atau berbiaya rendah dengan serangkaian
pertanyaan pendek yang diadaptasi, dijalankan tiap kuartal, menangkap sebagian
besar nilainya di sini tanpa memerlukan keahlian rancangan survei khusus.
Utamakan disiplin menutup putaran di atas kecanggihan; bahkan tim kecil
diuntungkan dengan bertindak secara terlihat atas apa yang diungkap survei
pendek.

**Perusahaan besar.** Kualitas rancangan survei sangat penting pada skala besar,
karena pertanyaan yang cacat atau jaminan anonimitas yang bocor merusak data di
ribuan responden sekaligus, dan kesimpulan keliru yang diyakini dengan penuh
percaya diri itu dapat menyesatkan keputusan alokasi sumber daya yang
signifikan. Investasikan pada keahlian rancangan survei yang sesungguhnya,
atau bermitralah dengan platform pengukuran DevEx yang mapan, alih-alih
membangun instrumen ad hoc secara internal.

**Pemerintahan.** Tingkat respons dan kepercayaan sangat rapuh di organisasi
tempat staf mungkin sudah waspada terhadap cara data dipakai secara internal.
Berinvestasilah lebih pada jaminan anonimitas yang transparan dan tindak
lanjut yang terlihat, khusus untuk membangun kepercayaan yang memungkinkan
tingkat respons yang jujur dalam konteks ketika skeptisisme terhadap
penggunaan data mungkin sudah lebih tinggi daripada di lingkungan sektor
swasta yang tipikal.

## Contoh

**Perusahaan besar.** Survei DevEx pertama sebuah perusahaan perangkat lunak
memuat pertanyaan yang meminta insinyur menilai "kepuasan terhadap perkakas
dan proses," pertanyaan bercabang ganda yang mencampurkan dua perhatian yang
sangat berbeda. Ketika skor gabungannya keluar biasa-biasa saja, pimpinan tidak
dapat mengetahui apakah masalahnya perkakas, proses, atau keduanya, dan upaya
perbaikan awal menyasar area yang salah selama dua kuartal. Memecah pertanyaan
itu dalam revisi berikutnya mengungkap bahwa skor perkakas sebenarnya kuat dan
skor proses buruk, yang mengalihkan investasi ke penyederhanaan proses
persetujuan rilis yang rumit, dan menghasilkan perbaikan kepuasan yang
terukur dalam satu kuartal, tidak seperti upaya sebelumnya yang berfokus pada
perkakas dan nyaris tidak menunjukkan efek.

**Pemerintahan.** Survei DevEx pertama sebuah badan digital nasional memiliki
tingkat respons di bawah 30%, dan tinjauan internal menemukan bahwa staf
secara luas percaya, dan ternyata benar, bahwa manajer individu dapat melihat
siapa yang sudah dan belum menjawab, meskipun hasil agregat dimaksudkan anonim.
Badan itu beralih ke platform survei pihak ketiga yang benar-benar independen
dengan anonimitas yang terverifikasi, mengomunikasikan perubahan itu secara
eksplisit dan berulang, serta menerbitkan ringkasan jelas hasil siklus
sebelumnya bersama tiga tindakan konkret yang diambil sebagai tanggapan.
Tingkat respons naik menjadi lebih dari 70% dalam dua siklus, dan pimpinan
badan itu secara khusus menyebut kombinasi anonimitas yang sejati dan tindak
lanjut yang terlihat sebagai alasan pulihnya kepercayaan pada instrumen.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari program survei DevEx yang dirancang dengan baik adalah data
yang tepercaya dan dapat ditindaklanjuti tentang suatu dimensi, pengalaman
pengembang, yang kalau tidak akan tetap tak terlihat sampai muncul sebagai
pengunduran diri atau perlambatan pengiriman. Contoh perusahaan perangkat
lunak di atas menunjukkan biaya salah merancang: dua kuartal upaya perbaikan
yang salah arah karena satu pertanyaan yang kata-katanya buruk mencampurkan dua
perhatian yang berbeda.

Total biaya kepemilikan mencakup perkakas survei, disiplin perancangan dan uji
coba yang direkomendasikan topik ini, dan komitmen berkelanjutan untuk menutup
putaran dengan tindak lanjut yang terlihat di setiap siklus. Komitmen itu,
lebih daripada biaya perkakas mana pun, adalah penentu apakah program survei
tetap berguna selama bertahun-tahun atau membusuk menjadi latihan mencentang
kotak yang dari waktu ke waktu menghasilkan data yang makin kurang tepercaya.

## Anti-pola dan jebakan

- **Pertanyaan bercabang ganda atau mengarahkan:** mencampurkan perhatian yang
  berbeda atau membiaskan respons, dan sering tidak terdeteksi tanpa uji coba.
- **Melewatkan langkah uji coba untuk pertanyaan baru:** membiarkan kata-kata
  yang ambigu merusak kumpulan data skala penuh.
- **Mengabaikan tingkat respons yang menurun:** melewatkan sinyal kepercayaan
  yang penting dengan sendirinya.
- **Tidak pernah menutup putaran dengan tindak lanjut yang terlihat:** melatih
  responden bahwa masukan jujur tidak berarti, sehingga menurunkan kualitas data
  di masa depan.
- **Menganggap data survei cukup dengan sendirinya, tanpa penguatan objektif:**
  melewatkan kasus ketika persepsi dan kenyataan berbeda ke salah satu arah.
- **Jaminan anonimitas yang lemah atau tidak dapat diverifikasi:** cara tercepat
  untuk meruntuhkan tingkat respons sekaligus kejujuran respons.

## Model kematangan

- **Level 1, Initiate (Memulai):** Pertanyaan survei bersifat ad hoc dan tidak
  diuji coba, tingkat respons tidak dilacak sebagai sinyal, dan hasil jarang
  mengarah pada tindakan yang terlihat.
- **Level 2, Develop (Mengembangkan):** Ada sedikit disiplin rancangan survei,
  tetapi uji coba tidak konsisten dan putaran tidak andal ditutup bersama
  responden.
- **Level 3, Standardize (Menstandarkan):** Pertanyaan diuji coba sebelum
  peluncuran, tingkat respons dilacak dan diselidiki bila menurun, dan hasil
  secara konsisten diterbitkan dengan setidaknya satu tindak lanjut konkret.
- **Level 4, Manage (Mengelola):** Data survei secara sistematis digabungkan
  dengan instrumentasi objektif, dan perbedaan di antara keduanya diselidiki
  secara aktif sebagai sinyal diagnostik.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi memiliki program survei
  multitahun yang matang dan tepercaya dengan tingkat respons yang secara
  konsisten tinggi, tindakan terlihat yang dapat ditunjukkan dari setiap
  siklus, dan rekam jejak menangkap serta memperbaiki pertanyaan yang
  dirancang buruk sebelum merusak data.

## Gagasan untuk diskusi

1. Pernahkah ada pertanyaan survei dalam instrumen kita saat ini yang membingungkan atau menyesatkan responden?
2. Apa tindakan konkret terakhir yang kita ambil sebagai hasil langsung dari data survei?
3. Bagaimana kita akan tahu jika jaminan anonimitas kita telah bocor, bahkan tanpa sengaja?
4. Di mana data survei kita sejalan atau berbeda dengan instrumentasi objektif, dan apa yang dikatakannya kepada kita?
5. Apa yang dibutuhkan untuk menggandakan tingkat respons kita saat ini?

## Poin-poin utama

- **Kualitas rancangan** survei, pertanyaan yang jelas, berkonsep tunggal, dan
  tidak bias, lebih penting daripada panjang atau kecanggihan.
- **Tingkat respons adalah sinyal tersendiri**; selidiki penurunannya alih-alih
  memperlakukannya sebagai ketidaknyamanan belaka.
- **Gabungkan data survei dengan instrumentasi objektif** untuk menangkap
  perbedaan antara persepsi dan kenyataan.
- **Tutup putarannya**: terbitkan hasil dan tindak lanjut yang terlihat di
  setiap siklus, atau kepercayaan pada instrumen akan terkikis.
- **DevEx dan SPACE saling melengkapi**, bukan bersaing, sebagai pembingkaian
  dari perhatian dasar yang sama terhadap pengalaman pengembang.

## Referensi dan bacaan lanjutan

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren, and Michaela Greiler,
  "DevEx: What Actually Drives Productivity," *ACM Queue* (2023): kerangka
  kerja DevEx tentang putaran umpan balik, beban kognitif, dan keadaan aliran.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and
  Win in the 21st Century*, by Jeff Lawson (investasi organisasi pada
  pengalaman pengembang).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, by
  Louis M. Rea and Richard A. Parker (metodologi umum perancangan survei yang
  berlaku bagi instrumen DevEx).
