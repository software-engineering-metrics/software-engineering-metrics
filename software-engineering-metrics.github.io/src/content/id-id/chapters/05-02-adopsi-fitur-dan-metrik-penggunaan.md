# 5.2 Adopsi fitur dan metrik penggunaan

## Gambaran umum dan motivasi

**Adopsi fitur** mengukur apakah orang-orang yang menjadi sasaran sebuah
fitur benar-benar memakainya, dengan laju berapa, dan apakah pemakaian itu
bertahan dari waktu ke waktu. Dalam arti yang sangat langsung, ini adalah
pemeriksaan kenyataan atas semua yang diukur Bagian 2 sampai 4 buku ini:
sebuah organisasi dapat melakukan deployment dengan sering, menjaga
pengalaman pengembang yang sangat baik, dan mengirim kode yang diuji tanpa
cela, namun tetap membangun hal-hal yang tidak diinginkan siapa pun. Data
adopsi adalah tempat organisasi rekayasa mengetahui apakah keluarannya
terhubung dengan hasil nyata apa pun, yaitu persis pembedaan
masukan-keluaran-hasil yang diperkenalkan topik 1.3, kini diterapkan pada
kasus paling konkret dalam buku ini: sebuah fitur tertentu yang sudah
dikirim.

Kekhawatiran utama topik ini adalah bahwa data adopsi, lebih daripada
hampir semua keluarga metrik lain dalam buku ini, mudah diukur dengan cara
yang menyanjung alih-alih menginformasikan. Sebuah fitur dapat menunjukkan
adopsi awal yang mengesankan semata-mata karena rasa penasaran atau
paparan yang dipaksakan (modal yang muncul entah pengguna menginginkannya
atau tidak), sementara penyampaian nilai yang sungguh-sungguh dan
berkelanjutan, yang diukur dari apakah orang terus memakainya setelah
kebaruannya memudar, menceritakan kisah yang sama sekali berbeda. Membedakan
adopsi yang sejati dari lonjakan sementara adalah tantangan teknis inti
topik ini, dan kesalahan di sini rutin membuat organisasi merayakan fitur
yang diam-diam gagal dan meninggalkan fitur yang baru mulai menemukan
penggunanya.

Bagi tim besar, data adopsi fitur membuat prioritisasi peta jalan
berbasis bukti, bukan digerakkan oleh siapa pun yang paling pandai
membela pekerjaan timnya sendiri. Organisasi perusahaan besar yang
mengelola portofolio produk yang luas membutuhkan data adopsi untuk
mengetahui investasi mana yang sepadan; organisasi pemerintahan yang
membangun layanan digital bagi warga membutuhkannya untuk menunjukkan
bahwa investasi publik menghasilkan layanan yang benar-benar dipakai
orang, bukan sekadar layanan yang secara teknis ada.

## Prinsip utama

- **Adopsi awal dan adopsi berkelanjutan adalah sinyal yang berbeda.**
  Lonjakan karena rasa penasaran atau paparan yang dipaksakan tidak sama
  dengan penyampaian nilai yang sejati dan bertahan lama.
- **Adopsi harus diukur terhadap audiens yang dituju**, bukan terhadap
  seluruh basis pengguna Anda tanpa pandang bulu.
- **Fitur dengan adopsi rendah belum tentu gagal.** Mungkin ia sulit
  ditemukan, salah sasaran, atau sekadar baru; selidiki dulu sebelum
  menyimpulkan.
- **Retensi penggunaan lebih penting daripada satu potret adopsi.** Lacak
  apakah orang yang pernah mencoba sebuah fitur terus kembali memakainya.
- **Data adopsi rentan terhadap manipulasi lewat paparan yang dipaksakan
  atau dark pattern.** Angka yang digelembungkan dengan membuat fitur sulit
  dihindari bukan sinyal yang sejati.

## Rekomendasi

### Bedakan percobaan awal dari retensi berkelanjutan

Lacak dua angka terpisah: persentase audiens sasaran Anda yang mencoba
sebuah fitur setidaknya sekali (adopsi awal), dan persentase yang masih
memakainya setelah periode yang berarti, misalnya empat atau delapan
minggu (adopsi yang bertahan). Fitur dengan percobaan awal tinggi dan
retensi rendah menunjukkan bahwa kemudahan ditemukan berhasil tetapi
fiturnya sendiri tidak memberi cukup nilai untuk membuat orang kembali,
diagnosis yang sangat berbeda, dan perbaikan yang sangat berbeda, dari
percobaan awal rendah dengan retensi tinggi, yang menunjukkan fitur yang
benar-benar bernilai tetapi belum cukup banyak orang yang mengetahuinya.

### Tetapkan audiens sasaran secara tepat sebelum mengukur adopsi

Adopsi yang diukur terhadap seluruh basis pengguna Anda dapat menyesatkan
jika sebuah fitur memang hanya dimaksudkan untuk segmen tertentu: fitur
untuk administrator perusahaan besar yang diukur terhadap basis yang
sebagian besar pengguna perorangan akan selalu tampak beradopsi buruk,
sebaik apa pun ia melayani orang-orang yang menjadi sasarannya. Tetapkan
audiens yang dituju secara eksplisit sebelum peluncuran, dan ukur adopsi
terhadap penyebut yang spesifik itu, bukan jumlah total pengguna Anda.

### Selidiki adopsi rendah sebelum menyimpulkan sebuah fitur gagal

Angka adopsi yang rendah memiliki beberapa kemungkinan penyebab yang
menuntut tanggapan yang sangat berbeda: fitur itu memang tidak bernilai,
fitur itu bernilai tetapi sulit ditemukan (pengguna tidak tahu ia ada),
fitur itu bernilai tetapi kurang dijelaskan (pengguna melihatnya tetapi
tidak memahami tujuannya), atau jendela pengukuran sekadar terlalu pendek
bagi fitur yang adopsinya lebih lambat untuk menemukan audiensnya.
Selidiki mana yang berlaku sebelum memutuskan untuk berinvestasi lebih
lanjut, mendesain ulang, atau menghentikan fitur itu.

### Waspadai adopsi yang digelembungkan oleh paparan yang dipaksakan atau [dark pattern](https://en.wikipedia.org/wiki/Dark_pattern)

Angka adopsi yang didorong oleh fitur yang sulit dihindari, alur
onboarding yang mengganggu, modal yang harus ditutup pengguna, atau
pengaturan bawaan yang sulit diubah, tidak mengukur penyampaian nilai yang
sejati, dan merayakannya seolah-olah demikian mengulang pola manipulasi
substitusi dari topik 1.2 dalam bentuk produk. Padukan angka adopsi mentah
dengan sinyal kepuasan atau sinyal ala Net Promoter untuk fitur
spesifik itu bila memungkinkan, agar paparan yang dipaksakan dan tidak
berubah menjadi kepuasan yang sejati tertangkap, bukan dirayakan.

### Hubungkan tren adopsi kembali ke keputusan produk dan rekayasa tertentu

Ketika adopsi tiba-tiba naik atau turun, telusuri perubahan itu kembali ke
keputusan tertentu, perubahan antarmuka, perubahan pengaturan bawaan,
dorongan pemasaran, peningkatan atau kemunduran kinerja, alih-alih
memperlakukan pergerakannya sebagai misteri yang tak terjelaskan. Ini
menghubungkan data adopsi dengan pembelajaran produk dan rekayasa yang
dapat ditindaklanjuti, menutup lingkaran antara perubahan tertentu dan
efek terukurnya pada penggunaan nyata.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Mengukur terhadap total basis pengguna | Sederhana, satu penyebut | Menyesatkan untuk fitur yang ditujukan bagi segmen tertentu |
| Mengukur terhadap audiens sasaran yang ditetapkan | Adil, mencerminkan jangkauan yang dituju secara akurat | Membutuhkan penetapan audiens yang disengaja sebelum peluncuran |
| Hanya percobaan awal | Sinyal cepat, tersedia segera setelah peluncuran | Melewatkan apakah fitur memberi nilai yang bertahan lama |
| Percobaan awal plus retensi | Membedakan rasa penasaran dari nilai yang sejati | Membutuhkan waktu tunggu lebih lama (berminggu-minggu) sebelum gambaran utuh muncul |

Ketegangan utamanya adalah **kecepatan versus kejujuran**. Data percobaan
awal tersedia hampir segera setelah peluncuran dan memenuhi tekanan
organisasi untuk melaporkan hasil awal, tetapi data itu sendiri tidak dapat
membedakan rasa penasaran atau paparan yang dipaksakan dari nilai yang
sejati dan bertahan lama. Selesaikan ketegangan itu dengan melaporkan data
percobaan awal lebih dini dan diberi label jelas sebagai data awal, sambil
berkomitmen secara terbuka pada pembacaan retensi lanjutan pada interval
tetap yang sudah ditentukan, agar antusiasme awal tidak mengeras menjadi
kisah sukses yang tidak diperiksa sebelum sinyal yang sebenarnya sempat
muncul.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk fitur terbaru yang kita kirim, apakah kita mengetahui percobaan
   awal dan penggunaan yang bertahan secara terpisah, atau hanya satu
   angka gabungan?** Jika hanya ada angka gabungan, celah itu menyembunyikan
   persis pembedaan rasa penasaran versus nilai yang dianggap sentral oleh
   topik ini.

2. **Apakah audiens sasaran fitur ini ditetapkan secara eksplisit sebelum
   peluncuran, dan apakah kita mengukur adopsi terhadap kelompok yang
   spesifik itu?** Periksa apakah penyebut adopsi Anda saat ini sesuai
   dengan siapa fitur itu sebenarnya dibangun, atau apakah ia terencerkan
   karena diukur terhadap populasi yang lebih luas dan tidak relevan.

3. **Untuk fitur dengan adopsi rendah, apakah kita sudah menyelidiki mana
   dari beberapa kemungkinan penyebab, nilai rendah, sulit ditemukan,
   kurang dijelaskan, waktu tidak cukup, yang sebenarnya berlaku?**
   Telusuri daftar diagnostik spesifik ini untuk fitur berdaya adopsi
   rendah yang nyata dan sedang berjalan, alih-alih langsung menyimpulkan
   "pasti tidak bernilai."

4. **Apakah ada bagian dari angka adopsi yang kita laporkan yang
   digelembungkan oleh paparan yang dipaksakan, pengaturan bawaan yang
   mengganggu, atau modal yang wajib ditutup, alih-alih pemakaian yang
   sukarela dan sejati?** Jujurlah di sini; ini pola yang umum dan mudah
   terjebak, terutama di bawah tekanan untuk menunjukkan hasil positif
   awal.

5. **Ketika adopsi sebuah fitur bergerak signifikan, dapatkah kita
   menelusuri pergerakan itu kembali ke perubahan tertentu yang kita
   buat?** Jika jawabannya biasanya "kami tidak yakin," celah itu membatasi
   seberapa banyak organisasi Anda dapat belajar dari data adopsinya
   sendiri dari waktu ke waktu.

6. **Apakah kita memadukan angka adopsi dengan sinyal kepuasan apa pun
   untuk fitur yang sama, atau kita hanya melacak penggunaan mentah?**
   Angka adopsi tinggi yang berpasangan dengan kepuasan rendah adalah
   tanda peringatan yang akan sepenuhnya terlewat oleh penggunaan mentah
   saja.

## Lensa sektor

**Startup.** Adopsi fitur sering kali menjadi sinyal terpenting yang
dimiliki perusahaan muda, terkait erat dengan product-market fit itu
sendiri. Lacak retensi secara khusus, bukan hanya percobaan awal, sejak
peluncuran fitur pertama, karena membedakan nilai sejati dari rasa penasaran
awal sangat penting ketika kelangsungan hidup perusahaan mungkin bergantung
pada ketepatan diagnosis ini.

**Usaha kecil.** Sebagian besar platform analitik melaporkan data
penggunaan dasar dengan penyiapan minimal; disiplin utamanya adalah
menetapkan audiens sasaran dengan jelas sebelum mengukur, alih-alih
melaporkan adopsi terhadap seluruh basis pelanggan Anda tanpa memandang
untuk siapa sebuah fitur sebenarnya dibangun.

**Perusahaan besar.** Data adopsi pada skala ini esensial untuk prioritisasi
peta jalan yang adil dan berbasis bukti di seluruh portofolio produk yang
besar, dan disiplin membedakan percobaan awal dari retensi berkelanjutan
bahkan lebih penting di sini, karena basis pengguna yang cukup besar dapat
menghasilkan lonjakan awal yang tampak mengesankan untuk hampir setiap
peluncuran, terlepas dari nilai sebenarnya.

**Pemerintahan.** Adopsi layanan digital bagi warga adalah ukuran langsung
dan konkret tentang apakah investasi publik berubah menjadi manfaat publik
yang nyata, dan sering kali jauh lebih meyakinkan bagi badan pengawas
daripada hitungan pengiriman atau aktivitas. Ukur adopsi terhadap populasi
yang memang dituju layanan itu, dan jujurlah tentang hambatan (literasi
digital, akses, kesadaran) yang mungkin menjelaskan adopsi rendah di luar
desain layanan itu sendiri.

## Contoh

**Perusahaan besar.** Sebuah perusahaan perangkat lunak manajemen proyek
meluncurkan fitur penyuntingan kolaboratif baru dan merayakan tingkat
percobaan awal yang mengesankan sebesar 60% dalam dua minggu pertama.
Pembacaan retensi lanjutan pada minggu kedelapan menunjukkan hanya 8% dari
para pencoba awal itu yang masih memakai fitur tersebut secara rutin,
mengungkap bahwa tingkat percobaan yang tinggi hampir seluruhnya didorong
oleh tooltip onboarding yang mencolok dan sulit ditutup, bukan minat yang
sejati dan berkelanjutan. Penyelidikan atas umpan balik kualitatif dari
para pencoba awal yang berhenti memakai fitur itu menemukan masalah
kegunaan yang spesifik dan dapat diperbaiki, yaitu pola interaksi yang
tidak intuitif, yang ditangani oleh desain ulang yang tertarget, dan
penggunaan yang bertahan hampir tiga kali lipat setelah perbaikan,
meskipun tidak pernah mendekati angka percobaan awal yang tinggi secara
menyesatkan itu.

**Pemerintahan.** Sebuah layanan ketenagakerjaan nasional meluncurkan alat
pencocokan lowongan kerja daring, dan pada awalnya melaporkan adopsi
terhadap seluruh basis pengguna terdaftar lembaga itu, menghasilkan
persentase rendah yang mengecilkan hati dan mengancam kelanjutan
pendanaan program. Analisis yang direvisi, yang mengukur adopsi secara
khusus terhadap subset pengguna terdaftar yang aktif mencari kerja di
industri sasaran alat itu, yaitu audiens yang sebenarnya dituju,
menunjukkan tingkat adopsi yang jauh lebih tinggi dan lebih akurat.
Dipadukan dengan kampanye penjangkauan yang tertarget khusus pada audiens
yang ditetapkan itu, serta pembacaan retensi berikutnya yang menunjukkan
penggunaan berkelanjutan yang kuat di antara para pengadopsi, program itu
memperoleh kelanjutan pendanaan berdasarkan metrik yang telah dikoreksi
dan ditargetkan dengan jujur, bukan angka asli yang terencerkan secara
menyesatkan.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari pengukuran adopsi fitur yang ketat adalah investasi peta
jalan berbasis bukti: organisasi yang dapat membedakan nilai yang sejati
dan bertahan dari percobaan awal yang didorong rasa penasaran dapat
berinvestasi lebih lanjut dengan yakin pada fitur yang benar-benar
berhasil dan mengalihkan upaya dari yang tidak, alih-alih mengejar lonjakan
awal yang menyesatkan atau meninggalkan terlalu dini fitur yang
benar-benar bernilai tetapi lambat ditemukan.

Total biaya kepemilikan sebagian besar berupa instrumentasi analitik, yang
biasanya sudah tersedia di sebagian besar platform analitik produk modern,
ditambah disiplin menetapkan audiens sasaran secara eksplisit dan
berkomitmen pada pembacaan retensi lanjutan alih-alih berhenti pada sinyal
awal yang belum lengkap. Disiplin itu murah dan mencegah kesalahan yang
jauh lebih mahal, yaitu salah membaca keberhasilan palsu maupun kegagalan
palsu.

## Anti-pola dan jebakan

- **Hanya melaporkan percobaan awal, tidak pernah retensi:** tidak dapat
  membedakan rasa penasaran atau paparan yang dipaksakan dari nilai yang
  sejati dan bertahan lama.
- **Mengukur adopsi terhadap penyebut yang salah:** mengencerkan atau
  menggelembungkan sinyal untuk fitur yang ditujukan bagi segmen audiens
  tertentu.
- **Menyimpulkan sebuah fitur gagal tanpa menyelidiki penyebab spesifik**
  adopsi rendah: berisiko meninggalkan fitur yang benar-benar bernilai
  tetapi sulit ditemukan atau waktunya kurang tepat.
- **Merayakan adopsi yang digelembungkan oleh paparan yang dipaksakan atau
  dark pattern:** contoh sisi produk dari manipulasi substitusi pada topik
  1.2.
- **Tidak pernah menelusuri pergerakan adopsi kembali ke keputusan
  tertentu:** membatasi pembelajaran organisasi dari data miliknya sendiri.
- **Melacak penggunaan tanpa sinyal kepuasan yang berpasangan:** melewatkan
  kasus ketika penggunaan tinggi berdampingan dengan nilai atau kepuasan
  sejati yang rendah.

## Model kematangan

- **Tingkat 1, Initiate (Memulai):** Adopsi tidak diukur, atau hanya satu
  angka percobaan awal yang tidak melacak retensi yang dilaporkan.
- **Tingkat 2, Develop (Mengembangkan):** Sebagian pelacakan adopsi sudah
  ada, tetapi audiens sasaran tidak ditetapkan secara tepat dan retensi
  diukur secara tidak konsisten.
- **Tingkat 3, Standardize (Menstandarkan):** Percobaan awal dan adopsi
  yang bertahan sama-sama dilacak secara konsisten terhadap audiens
  sasaran yang ditetapkan dengan tepat untuk setiap fitur utama.
- **Tingkat 4, Manage (Mengelola):** Fitur berdaya adopsi rendah diselidiki
  secara sistematis untuk akar masalah spesifiknya sebelum keputusan
  mendesain ulang atau menghentikannya; adopsi dipadukan dengan data
  kepuasan.
- **Tingkat 5, Orchestrate (Mengorkestrasi):** Data adopsi secara langsung
  dan rutin menjadi dasar prioritisasi peta jalan dan keputusan investasi,
  dan organisasi dapat menelusuri pergerakan adopsi tertentu kembali ke
  keputusan produk dan rekayasa tertentu dengan keyakinan.

## Gagasan untuk diskusi

1. Fitur terbaru mana yang percobaan awal dan adopsi bertahannya menceritakan kisah yang sangat berbeda?
2. Apakah audiens sasaran fitur terakhir kita ditetapkan secara tepat sebelum peluncuran, atau baru sesudahnya?
3. Fitur berdaya adopsi rendah mana yang layak mendapat investigasi akar masalah yang jujur sebelum kita memutuskan nasibnya?
4. Apakah ada bagian dari pelaporan adopsi kita saat ini yang digelembungkan oleh paparan yang dipaksakan?
5. Apa yang akan diungkap oleh memadukan data adopsi dengan data kepuasan tentang fitur kita yang paling banyak dipakai?

## Poin-poin utama

- Bedakan **percobaan awal dari retensi berkelanjutan**; lonjakan karena
  rasa penasaran atau paparan yang dipaksakan bukanlah nilai yang sejati
  dan bertahan lama.
- Ukur adopsi terhadap **audiens sasaran yang ditetapkan dengan tepat**,
  bukan basis pengguna yang lebih luas dan tidak relevan.
- **Selidiki penyebab spesifik** adopsi rendah sebelum menyimpulkan sebuah
  fitur gagal; beberapa penyebab yang sangat berbeda menuntut tanggapan
  yang sangat berbeda.
- Waspadai adopsi yang **digelembungkan oleh paparan yang dipaksakan atau
  dark pattern**, dan padukan adopsi dengan **sinyal kepuasan** untuk
  menangkapnya.
- **Telusuri pergerakan adopsi kembali ke keputusan tertentu** untuk
  mengubah data menjadi pembelajaran organisasi yang sejati.

## Referensi dan bacaan lanjutan

- *Lean Analytics*, by Alistair Croll and Benjamin Yoskovitz (metrik yang
  dapat ditindaklanjuti versus metrik kosmetik, diterapkan pada data
  penggunaan produk).
- *Continuous Discovery Habits*, by Teresa Torres (menghubungkan keputusan
  produk dengan bukti hasil pelanggan, termasuk data adopsi).
- *Hooked: How to Build Habit-Forming Products*, by Nir Eyal (retensi dan
  pembentukan kebiasaan, serta garis etis antara nilai yang sejati dan
  dark pattern).
- *Measure What Matters*, by John Doerr (penetapan sasaran yang berorientasi
  hasil, berlaku untuk penetapan target adopsi).
