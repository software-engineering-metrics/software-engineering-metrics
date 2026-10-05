# 3.4 Metrik aktivitas dan batasannya

## Gambaran umum dan motivasi

**Aktivitas**, huruf A dalam SPACE (topik 3.1), menghitung volume pekerjaan
rekayasa yang dapat diamati dari telemetri sistem: commit, pull request yang
dibuka, jumlah baris kode yang berubah, komentar tinjauan kode yang
ditinggalkan. Ini adalah dimensi SPACE yang paling mudah diukur, karena setiap
peristiwa tersebut sudah dicatat otomatis oleh perkakas yang dipakai tim
rekayasa setiap hari, dan kemudahan pengukuran itulah yang menjadikan dimensi
ini paling berbahaya bila diberi bobot berlebihan. Aktivitas adalah sinyal
yang nyata dan sah bila dipakai dengan hati-hati. Bila dipakai sebagai proksi
produktivitas yang berdiri sendiri, ia adalah keluarga metrik yang paling
banyak dimanipulasi dan paling menyesatkan dalam seluruh sejarah pengukuran
[rekayasa perangkat lunak](https://en.wikipedia.org/wiki/Software_engineering).

Masalah intinya adalah bahwa aktivitas mengukur gerakan, bukan nilai. Jumlah
commit tidak membedakan antara commit yang memecahkan masalah sulit dengan
elegan dan commit yang memecah satu perubahan bermakna menjadi lima agar
tampak lebih produktif (manipulasi substitusi dari topik 1.2, diterapkan
langsung pada keluarga metrik ini). Jumlah baris kode yang berubah menghargai
kata-kata bertele-tele di atas keterampilan yang jauh lebih berharga, yaitu
menghapus kode yang tidak perlu. Seorang insinyur yang menghabiskan sehari
penuh dalam pemikiran mendalam tanpa gangguan sebelum menulis sepuluh baris
yang elegan dan teruji dengan baik tampak kurang "aktif" menurut metrik ini
dibandingkan seseorang yang meng-commit perubahan dangkal tanpa tinjauan setiap
dua puluh menit, padahal yang pertama sangat sering menghasilkan nilai nyata
yang jauh lebih besar.

Bagi tim besar, godaan memakai metrik aktivitas untuk evaluasi individu
terus-menerus ada dan terdokumentasi dengan baik, karena aktivitas mudah
dikaitkan pada orang tertentu dan mudah dihitung secara otomatis, tidak seperti
sinyal yang lebih sulit dan lebih jujur di dimensi SPACE lainnya. Topik ini ada
khusus untuk menamai godaan itu dan memberi tim bahasa serta bukti untuk
melawannya, karena begitu organisasi mulai memeringkat insinyur secara
individual berdasarkan jumlah commit atau jumlah baris kode, kerusakan pada
kolaborasi, kualitas kode, dan moral sudah terdokumentasi dengan baik dan
sulit dipulihkan.

## Prinsip utama

- **Aktivitas mengukur gerakan, bukan nilai.** Ia adalah sinyal kontekstual
  yang sah, tidak pernah proksi produktivitas yang berdiri sendiri.
- **Ini adalah keluarga metrik yang paling sering disalahgunakan sepanjang
  sejarah dalam pengukuran rekayasa perangkat lunak.** Perlakukan sejarah itu
  sebagai peringatan, bukan kebetulan.
- **Peringkat aktivitas individu hampir selalu merugikan.** Ia merusak
  kolaborasi, menghargai kesibukan semu yang terlihat, dan mengundang
  manipulasi hampir seketika.
- **Data aktivitas paling berguna secara agregat, sebagai konteks bagi dimensi
  lain,** bukan sebagai sinyal independen tentang satu orang atau satu tim.
- **Pekerjaan mendalam yang berharga sering tampak sepi di dasbor
  aktivitas.** Keluarga metrik ini secara struktural bias terhadap persis
  jenis pemikiran yang menghasilkan hasil rekayasa terbaik.

## Rekomendasi

### Jangan pernah memeringkat atau menilai individu berdasarkan hitungan aktivitas mentah

Ini adalah aturan tersulit dan terpenting dalam topik ini. Jumlah commit,
jumlah baris kode, dan jumlah pull request tidak boleh muncul dalam penilaian
kinerja individu, peringkat perbandingan, atau konteks apa pun yang membuat
kompensasi, kedudukan, atau reputasi seorang insinyur bergantung pada angka
itu. Ini mengikuti langsung prinsip paparan insentif dari topik 1.2: begitu
aktivitas menjadi metrik individu yang diberi insentif, manipulasi menyusul
hampir seketika, dan perilaku yang dihasilkan, menggelembungkan commit,
memecah perubahan secara sepele, menghindari pekerjaan mendalam yang tidak
glamor dan menghasilkan sedikit peristiwa terlihat, secara aktif merugikan
organisasi.

### Pakai data aktivitas secara agregat, sebagai konteks, bukan sebagai vonis

Data aktivitas menjadi benar-benar berguna bila diagregasi di tingkat tim dan
dibaca bersama dimensi SPACE lainnya: penurunan tajam aktivitas commit tingkat
tim yang bertepatan dengan naiknya kepuasan bisa menunjukkan bahwa tim
akhirnya punya ruang bernapas untuk berpikir mendalam dan melunasi utang
teknis, pola yang positif, bukan negatif. Dibaca secara terpisah, penurunan
yang sama tampak mengkhawatirkan. Konteks dari dimensi lain inilah yang
membuat data aktivitas dapat ditafsirkan alih-alih menyesatkan.

### Utamakan sinyal aktivitas yang dekat dengan kualitas dibanding volume mentah

Di mana pun data aktivitas berguna, utamakan sinyal yang disesuaikan dengan
kualitas daripada hitungan mentah: ukuran pull request relatif terhadap
kedalaman tinjauan (topik 2.9), atau rasio kode baru terhadap kode yang
dihapus, yang dapat menunjukkan apakah sebuah tim menumpuk kompleksitas atau
aktif menyederhanakan. Sinyal yang disesuaikan ini tetap merupakan data
dimensi aktivitas tetapi tahan terhadap manipulasi paling kasar yang diundang
oleh hitungan mentah.

### Waspadai secara khusus pola manipulasi substitusi dalam data aktivitas

Cara paling umum metrik aktivitas dimanipulasi persis seperti pola substitusi
dari topik 1.2: memecah pekerjaan yang benar-benar bermakna menjadi banyak
peristiwa kecil yang sepele untuk menggelembungkan hitungan. Jika frekuensi
commit atau pull request naik sementara kompleksitas atau ukuran perubahan
yang mendasarinya turun tajam, selidiki sebelum mengakui peningkatan
produktivitas yang nyata, dengan disiplin diagnostik yang sama seperti yang
direkomendasikan topik 2.10 untuk frekuensi deployment.

### Namai secara eksplisit dan tolak teater aktivitas

**Teater aktivitas** (activity theater) adalah pekerjaan yang dilakukan, sadar
maupun tidak, terutama karena terlihat dan dapat dihitung, bukan karena
berharga: commit kecil yang sering, aktivitas larut malam yang mencolok, atau
kesibukan yang terlihat di kanal bersama. Menamai pola ini secara eksplisit
kepada tim Anda, dan terbuka bahwa pimpinan tidak memakai aktivitas mentah
untuk menilai kontribusi, menghilangkan sebagian besar insentif bagi pola itu
untuk terjadi sejak awal.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Peringkat aktivitas individu | Sederhana, mudah dihitung, terasa langsung dapat ditindaklanjuti | Dimanipulasi hampir seketika; merusak kolaborasi dan moral; mengukur hal yang salah |
| Tanpa pengukuran aktivitas sama sekali | Menghindari risiko penyalahgunaan sepenuhnya | Kehilangan sinyal kontekstual yang benar-benar berguna untuk mengenali pola tingkat tim |
| Aktivitas agregat tingkat tim, dibaca dalam konteks | Memberi konteks yang berguna tanpa risiko individu | Membutuhkan disiplin untuk menafsirkannya bersama dimensi lain, bukan secara terpisah |
| Sinyal aktivitas yang disesuaikan kualitas | Tahan terhadap manipulasi hitungan mentah yang paling kasar | Lebih rumit dihitung dan dijelaskan daripada hitungan sederhana |

Ketegangan utamanya adalah **kegunaan versus risiko penyalahgunaan**. Data
aktivitas, bila dibaca dengan hati-hati secara agregat dan dalam konteks,
benar-benar berguna untuk mengenali pola seperti kecepatan yang tidak
berkelanjutan atau tim yang diam-diam menemukan ruang untuk menangani utang
teknis. Data yang sama, bila dipakai sebagai kartu skor individu, hampir
selalu merugikan. Atasi ketegangan ini bukan dengan menghindari data aktivitas
sepenuhnya, melainkan dengan membangun aturan organisasi yang keras terhadap
penggunaan individual, sambil mengizinkan dan bahkan mendorong penggunaan
tingkat tim yang penuh pertimbangan dan kontekstual.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Pernahkah seseorang di organisasi kita dinilai, secara formal maupun
   informal, memakai hitungan aktivitas mentah seperti commit atau jumlah
   baris kode?** Tanyakan hal ini secara langsung dan bersiaplah menerima
   jawaban yang tidak nyaman tetapi perlu; penyalahgunaan ini sering terjadi
   diam-diam, lewat komentar sambil lalu dari seorang manajer, tanpa pernah
   menjadi kebijakan resmi.

2. **Seperti apa teater aktivitas di tim kita secara khusus, dan pernahkah
   kita melihat tanda-tandanya?** Menamai bentuk spesifik dan masuk akal yang
   bisa diambil pola ini di tim Anda sendiri membuatnya jauh lebih mudah
   dikenali bila mulai terjadi.

3. **Ketika data aktivitas tingkat tim kita bergerak, apakah kita
   menafsirkannya bersama dimensi SPACE lainnya, atau secara terpisah?**
   Penurunan aktivitas yang dibaca terpisah tampak mengkhawatirkan; penurunan
   yang sama bila dibaca bersama perbaikan kepuasan atau kinerja bisa tampak
   sebagai pola yang benar-benar positif. Periksa praktik tinjauan Anda yang
   sebenarnya terhadap pembedaan ini.

4. **Pernahkah kita melihat kenaikan frekuensi commit atau pull request yang
   disertai menyusutnya rata-rata ukuran perubahan, yang menunjukkan
   pemecahan sepele alih-alih peningkatan produktivitas yang sejati?** Ambil
   data nyata dan periksa pola manipulasi substitusi yang spesifik ini.

5. **Bagaimana kita saat ini membicarakan "siapa yang paling banyak
   berkontribusi" di tim kita, dan apakah percakapan itu secara implisit
   bersandar pada data aktivitas meskipun tanpa metrik formal?** Bias informal
   dan tak terukur terhadap kesibukan yang terlihat dapat membentuk persepsi
   dan penghargaan bahkan tanpa kebijakan berbasis aktivitas yang eksplisit;
   ungkapkan hal ini dengan jujur.

6. **Seperti apa pekerjaan yang benar-benar berharga tetapi sepi, berpikir
   mendalam, merancang dengan cermat, membimbing, di tim kita, dan bagaimana
   kita memastikannya diakui meskipun menghasilkan sedikit data aktivitas
   yang terlihat?** Pertanyaan ini adalah pelengkap positif dari pertanyaan
   sebelumnya: menamai seperti apa pekerjaan sepi yang baik membantu
   melindunginya agar tidak terabaikan demi pekerjaan yang lebih nyaring dan
   lebih mudah dihitung.

## Lensa sektor

**Startup.** Dengan tim kecil yang berkolaborasi erat, data aktivitas biasanya
terlihat tanpa memerlukan dasbor sama sekali, dan risiko peringkat individu
yang diperingatkan topik ini lebih kecil kemungkinannya hanya karena semua
orang sudah tahu apa yang dikerjakan orang lain. Risikonya justru pendiri yang
tanpa sadar menyukai perilaku yang tampak "sibuk" ketika membuat keputusan
perekrutan atau ekuitas awal.

**Usaha kecil.** Data aktivitas dari perkakas yang sudah Anda miliki boleh
dilirik untuk mendapat gambaran umum tentang throughput tim, tetapi tahan
godaan memakainya untuk membandingkan kontributor individu secara langsung;
nilai nyata tim kecil sering terkonsentrasi pada beberapa orang yang
mengerjakan pekerjaan sepi berdampak tinggi yang secara sistematis akan
dinilai terlalu rendah oleh pandangan berbasis jumlah commit.

**Perusahaan besar.** Di sinilah godaan peringkat individu paling kuat dan
paling merusak, karena data aktivitas adalah sinyal termudah untuk ditarik
bagi proses penilaian kinerja yang mencakup ribuan insinyur, dan tekanan untuk
menemukan *beberapa* masukan yang dapat dikuantifikasi itu nyata. Bangun
kebijakan yang eksplisit, dikomunikasikan, dan ditegakkan terhadap peringkat
aktivitas individu, dan audit praktik penilaian kinerja secara berkala untuk
memastikan kebijakan itu benar-benar diikuti dalam praktik, bukan sekadar
dinyatakan.

**Pemerintahan.** Metrik aktivitas bisa menggoda untuk dikutip dalam laporan
publik sebagai bukti produktivitas ("sepuluh ribu commit tahun ini"), tetapi
judul semacam ini hampir tidak bermakna dan dapat mengundang pemeriksaan yang
persis salah begitu seorang pemeriksa yang paham menunjukkan bahwa aktivitas
mentah tidak mengatakan apa pun tentang hasil. Laporkan data hasil dan kinerja
(topik 3.3) sebagai gantinya, dan hindari hitungan aktivitas dalam komunikasi
yang menghadap ke luar.

## Contoh

**Perusahaan besar.** Pimpinan teknik sebuah perusahaan perangkat lunak,
tanpa kebijakan formal, mulai secara informal merujuk data frekuensi commit
individu dalam diskusi promosi. Tinjauan internal, yang dipicu oleh proyek
analisis pengunduran diri yang tidak terkait, menemukan bahwa insinyur yang
mengerjakan sistem paling kompleks dan paling bernilai tinggi di perusahaan,
yang membutuhkan periode panjang kerja desain yang cermat sebelum kode
apa pun ditulis, secara sistematis memiliki jumlah commit lebih rendah
dibanding insinyur pada sistem yang lebih sederhana dan dikembangkan secara
lebih bertahap, dan akibatnya secara halus dirugikan dalam percakapan promosi.
Pimpinan menerbitkan kebijakan eksplisit yang dikomunikasikan dan melarang
rujukan pada hitungan aktivitas dalam diskusi kinerja dan promosi, serta
menggeser bukti promosi ke pendekatan kinerja multisinyal dari topik 3.3.

**Pemerintahan.** Sebuah badan layanan digital, di bawah tekanan untuk
menunjukkan produktivitas kepada komite pengawas legislatif, awalnya
mengusulkan pelaporan total commit dan baris kode yang ditulis di seluruh
programnya sebagai bukti nilai yang diserahkan. Seorang penasihat teknis
internal menolak, dengan benar mencatat bahwa pembingkaian ini mengundang
pemeriksaan yang persis salah, karena anggota komite yang paham teknologi
dengan mudah dapat menunjukkan bahwa volume kode mentah tidak mengatakan
apa pun tentang apakah kode itu berfungsi atau bermakna. Laporan revisi badan
itu memakai metrik hasil (topik 5.3): berkurangnya kesalahan yang dilaporkan
warga dan meningkatnya penyelesaian layanan mandiri yang berhasil, yang jauh
lebih tahan terhadap pertanyaan komite dibanding angka aktivitas.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari memperlakukan metrik aktivitas dengan benar, memakainya secara
kontekstual dan bukan sebagai kartu skor individu, adalah kerusakan yang
terhindarkan: organisasi yang memeringkat insinyur secara individual
berdasarkan aktivitas secara andal melihat perilaku manipulasi, berkurangnya
kolaborasi (insinyur melindungi keluaran terlihat milik mereka sendiri
alih-alih membantu rekan), dan bias sistematis terhadap pekerjaan mendalam
berdampak tinggi yang sering menghasilkan nilai terbesar sambil menghasilkan
aktivitas paling sedikit yang terlihat. Membalikkan kerusakan itu, begitu
mengakar dalam budaya penilaian kinerja, benar-benar sulit dan lambat.

Total biaya menghindari jebakan ini sebagian besar adalah disiplin
organisasi: kebijakan eksplisit yang ditegakkan secara konsisten terhadap
peringkat aktivitas individu, dan komitmen berinvestasi pada pengukuran
kinerja yang lebih sulit dan lebih jujur seperti dijelaskan di topik 3.3
sebagai gantinya. Disiplin itu lebih murah daripada keputusan promosi yang
salah arah, kolaborasi yang rusak, dan perilaku manipulasi yang secara andal
dihasilkan metrik aktivitas individu dari waktu ke waktu.

## Anti-pola dan jebakan

- **Peringkat individu berdasarkan jumlah commit atau jumlah baris kode:**
  penyalahgunaan yang paling merusak dan paling umum sepanjang sejarah dalam
  seluruh buku ini.
- **Teater aktivitas:** pekerjaan yang dilakukan terutama demi keterlihatan
  alih-alih nilai, respons yang sepenuhnya dapat diduga terhadap evaluasi
  berbasis aktivitas.
- **Menafsirkan penurunan aktivitas tingkat tim secara terpisah, tanpa
  memeriksa dimensi SPACE lainnya:** dapat keliru menganggap pola yang benar-benar
  positif sebagai pola yang mengkhawatirkan.
- **Mengutip hitungan aktivitas mentah dalam komunikasi eksternal atau yang
  menghadap pimpinan:** mengundang pemeriksaan yang persis salah dan sedikit
  mengatakan tentang nilai yang sebenarnya.
- **Secara sistematis meremehkan pekerjaan mendalam dan cermat yang
  menghasilkan sedikit peristiwa terlihat:** bias struktural yang tertanam dalam
  seluruh keluarga metrik ini.
- **Bias aktivitas informal tanpa kebijakan yang merayap ke percakapan promosi
  atau penilaian:** merusak bahkan tanpa metrik resmi di baliknya.

## Model kematangan

- **Level 1, Initiate (Memulai):** Metrik aktivitas dipakai, secara formal
  maupun informal, untuk menilai atau memeringkat individu, tanpa kesadaran
  akan risikonya.
- **Level 2, Develop (Mengembangkan):** Ada sedikit kesadaran akan risiko,
  tetapi tidak ada kebijakan eksplisit yang mencegah data aktivitas
  memengaruhi penilaian atau diskusi promosi secara informal.
- **Level 3, Standardize (Menstandarkan):** Kebijakan yang eksplisit dan
  dikomunikasikan di seluruh organisasi melarang peringkat aktivitas individu,
  dan data aktivitas hanya dipakai dalam konteks agregat tingkat tim.
- **Level 4, Manage (Mengelola):** Praktik penilaian kinerja dan promosi
  diaudit secara berkala untuk memastikan kebijakan diikuti dalam praktik, dan
  sinyal aktivitas yang disesuaikan kualitas menggantikan hitungan mentah di
  mana pun data aktivitas dipakai.
- **Level 5, Orchestrate (Mengorkestrasi):** Organisasi terbukti telah
  menggeser budaya evaluasi menjauh dari metrik aktivitas menuju pendekatan
  kinerja multisinyal dari topik 3.3, dengan perbaikan kolaborasi yang terlihat
  dan berkurangnya perilaku manipulasi sebagai bukti bahwa pergeseran itu
  berhasil.

## Gagasan untuk diskusi

1. Pernahkah seseorang di sini merasa dinilai, bahkan secara informal, dari seberapa "sibuk" aktivitasnya tampak?
2. Seperti apa teater aktivitas secara khusus di tim kita?
3. Apakah kita punya kebijakan tertulis yang eksplisit terhadap peringkat aktivitas individu, dan apakah kebijakan itu benar-benar diikuti?
4. Pekerjaan sepi berharga tinggi apa di tim kita yang saat ini menghasilkan data aktivitas paling sedikit yang terlihat?
5. Bagaimana kita akan merancang ulang bukti penilaian kinerja untuk menghilangkan hitungan aktivitas sepenuhnya?

## Poin-poin utama

- Aktivitas mengukur **gerakan, bukan nilai**; ia adalah keluarga metrik yang
  paling sering disalahgunakan sepanjang sejarah dalam rekayasa perangkat
  lunak.
- **Jangan pernah memeringkat atau menilai individu** berdasarkan hitungan
  aktivitas mentah; ini adalah aturan tersulit dan terpenting dalam topik ini.
- Pakai data aktivitas **secara agregat, sebagai konteks** bagi dimensi SPACE
  lainnya, jangan pernah sebagai vonis yang berdiri sendiri.
- Waspadai **teater aktivitas** dan **pola manipulasi substitusi** (topik 1.2)
  secara khusus dalam keluarga metrik ini.
- Pekerjaan mendalam bernilai tinggi sering menghasilkan **data aktivitas
  paling sedikit yang terlihat**; lindungi dari peremehan yang sistematis.

## Referensi dan bacaan lanjutan

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, by Tom DeMarco and Timothy
  Lister (argumen menentang pengukuran insinyur berdasarkan kesibukan yang
  terlihat).
- *Deep Work: Rules for Focused Success in a Distracted World*, by Cal
  Newport (nilai pekerjaan sepi tanpa gangguan yang secara sistematis kurang
  dihitung oleh metrik aktivitas).
- *The Tyranny of Metrics*, by Jerry Z. Muller (fiksasi metrik dan biayanya,
  berlaku langsung pada evaluasi berbasis aktivitas).
