# 2.5 Efisiensi aliran dan pekerjaan yang sedang berjalan

## Gambaran umum dan motivasi

**Efisiensi aliran (flow efficiency)** adalah rasio waktu aktif terhadap total
waktu untuk sebuah pekerjaan: jika sebuah perubahan menghabiskan sepuluh jam
secara aktif dikodekan, ditinjau, dan diuji, tetapi menganggur dalam antrean
total sembilan puluh jam sepanjang perjalanannya, efisiensi alirannya 10%.
Kebanyakan jalur pengiriman perangkat lunak, bila diukur dengan jujur, berada
di antara 10% dan 25% efisiensi aliran, yang mengejutkan orang yang mengira
usaha mendominasi. Biaya dominan di kebanyakan sistem pengiriman bukanlah
berapa lama pekerjaan dikerjakan, melainkan berapa lama pekerjaan menunggu
untuk dimulai.

**[Pekerjaan yang sedang berjalan (work in process)](https://en.wikipedia.org/wiki/Work_in_process)**
(WIP) adalah jumlah item yang sedang dikerjakan secara aktif pada satu waktu,
di seluruh tim atau sistem, besaran yang sama yang disebut topik 2.4 sebagai
"beban aliran (flow load)." Temuan yang berlawanan dengan intuisi di balik
topik ini, didukung riset puluhan tahun dalam manajemen operasi dan
diformalkan untuk pengiriman perangkat lunak lewat kanban dan teori antrean,
adalah bahwa membatasi WIP cenderung *meningkatkan* throughput, bukan
menurunkannya, karena pekerjaan yang lebih sedikit dalam proses sekaligus
berarti lebih sedikit pergantian konteks, antrean yang lebih pendek, dan
penyelesaian per item yang lebih cepat, meskipun terasa bahwa mengerjakan lebih
sedikit hal secara bersamaan seharusnya menghasilkan keluaran total yang lebih
sedikit.

Bagi tim besar, memahami efisiensi aliran membingkai ulang hampir setiap
masalah pengiriman dari "orang perlu bekerja lebih cepat" menjadi "pekerjaan
perlu menunggu lebih sedikit." Pembingkaian ulang itu penting karena bingkai
pertama mengundang tekanan pada individu, persis jebakan yang diperingatkan
topik 2.6, sedangkan bingkai kedua mengundang penyelidikan ke struktur antrean,
kapasitas tinjauan, dan seberapa banyak pekerjaan dimulai bersamaan, tempat
perbaikan yang nyata dan berkelanjutan biasanya berada. Organisasi perusahaan
besar yang menyeimbangkan banyak inisiatif bersamaan di tim-tim bersama
sangat rentan terhadap WIP yang tinggi dan efisiensi aliran yang rendah,
karena memulai pekerjaan baru selalu terasa seperti kemajuan bahkan ketika
diam-diam memperlambat semua yang sudah berjalan.

## Prinsip utama

- **Waktu tunggu, bukan usaha aktif, mendominasi kebanyakan jalur
  pengiriman.** Efisiensi aliran di bawah 25% itu lazim, bukan tanda tim yang
  rusak.
- **Membatasi pekerjaan yang sedang berjalan cenderung meningkatkan
  throughput,** bukan menurunkannya, dengan mengurangi pergantian konteks dan
  memperpendek antrean.
- **Memulai pekerjaan baru terasa seperti kemajuan; menyelesaikan pekerjaan
  adalah yang benar-benar memberikan nilai.** Keduanya tidak sama, dan
  organisasi rutin mencampuradukkannya.
- **WIP yang tinggi sering tak terlihat sampai diukur.** Sebuah tim dapat
  menangani jauh lebih banyak pekerjaan bersamaan daripada yang disadari siapa
  pun secara individual.
- **Ini metrik tingkat sistem, bukan tingkat individu.** Menerapkan batas WIP
  untuk menghukum individu salah memahami seluruh inti teknik ini.

## Rekomendasi

### Ukur efisiensi aliran sebelum mengira usaha adalah hambatannya

Hitung rasio waktu aktif terhadap total waktu yang berlalu untuk sampel
perubahan terbaru yang representatif, memakai data tahap waktu siklus dari
topik 2.6. Kebanyakan tim yang mengukur ini untuk pertama kali terkejut betapa
rendahnya angka itu, dan keterkejutan itu sendiri berharga: ia mengalihkan
perhatian dari "bekerja lebih keras" ke "kurangi antrean," yang hampir selalu
merupakan tuas yang lebih produktif.

### Tetapkan batas pekerjaan yang sedang berjalan secara eksplisit dan tegakkan secara terlihat

Batasi jumlah item yang dapat dikerjakan aktif sekaligus oleh sebuah tim atau
individu, terlihat di papan bersama (papan kanban fisik atau digital adalah
implementasi klasiknya). Ketika batas tercapai, tindakan berikutnya tim adalah
membantu menyelesaikan sesuatu yang sudah berjalan, bukan memulai sesuatu yang
baru. Praktik tunggal ini, dipinjam dari manufaktur lean dan diformalkan dalam
kanban, adalah salah satu perbaikan aliran yang paling konsisten efektif yang
tersedia bagi tim perangkat lunak, dan hampir tanpa biaya untuk diterapkan.

### Perlakukan batas WIP sebagai kendala sistem, bukan kuota individu

Batas WIP mengatur seberapa banyak pekerjaan yang dimiliki *sistem* (sebuah tim,
antrean tinjauan bersama, lingkungan bersama) dalam proses sekaligus, bukan
seberapa banyak yang boleh disentuh satu orang. Menerapkan batas sebagai kuota
kinerja individu, "Anda hanya boleh membuka dua tiket," salah menerapkan
teknik ini dan berisiko mengundang persis jenis manipulasi tingkat individu
yang diperingatkan buku ini di sepanjang halamannya. Batas itu ada untuk
melindungi aliran di seluruh sistem, dan penegakannya seharusnya menjadi norma
tim, bukan plafon pribadi.

### Selidiki mengapa pekerjaan menganggur, bukan hanya berapa lama

Ketika analisis efisiensi aliran mengungkap waktu tunggu yang panjang, tanyakan
secara spesifik mengapa: apakah pekerjaan menunggu karena peninjau tidak
tersedia, karena lingkungan pengujian bersama sudah dipesan, karena
ketergantungan pada tim lain belum mendarat. Masing-masing punya perbaikan
yang berbeda. Arahan generik "kurangi waktu tunggu" tanpa penyelidikan spesifik
ini cenderung menghasilkan respons generik yang tidak efektif.

### Waspadai WIP yang merayap naik lagi setelah perbaikan awal

Tim yang berhasil mengadopsi batas WIP sering melihatnya terkikis seiring waktu
ketika tekanan untuk memulai inisiatif baru kembali, "sekali ini saja, kita
perlu memulai hal mendesak ini juga." Perlakukan setiap pengecualian batas WIP
sebagai keputusan yang disengaja dan terlihat dengan alasan yang dinyatakan,
bukan penggantian yang diam-diam dan rutin, agar disiplin batas itu tidak
diam-diam kembali ke keadaan semula.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Tanpa batas WIP | Terasa fleksibel; tanpa gesekan saat memulai pekerjaan baru | Pergantian konteks dan antrean diam-diam memperlambat segalanya |
| Batas WIP tingkat tim | Meningkatkan throughput dan efisiensi aliran secara terukur | Membutuhkan disiplin untuk menegakkannya, terutama di bawah tekanan tenggat |
| Kuota WIP tingkat individu | Sederhana dinyatakan | Salah menerapkan teknik ini; berisiko manipulasi individu |
| Batas WIP yang ketat dan tidak lentur | Manfaat efisiensi aliran maksimum | Dapat terasa kaku dalam situasi yang benar-benar mendesak dan luar biasa |

Ketegangan utamanya adalah **fleksibilitas versus aliran**. Memulai pekerjaan
baru kapan pun tampak mendesak terasa responsif, tetapi riset efisiensi aliran
dan WIP secara konsisten menunjukkan bahwa fleksibilitas ini harus dibayar
dengan menyelesaikan apa pun secara cepat, karena pekerjaan bersamaan yang
lebih banyak berarti antrean yang lebih panjang dan lebih banyak pergantian
konteks untuk segala yang sudah berjalan. Selesaikan ketegangan ini dengan
mengadopsi batas WIP tingkat tim sebagai bawaan, dengan proses pengecualian
yang disengaja, terlihat, dan jarang untuk keadaan darurat yang sungguhan,
bukan aturan kaku tanpa pengecualian ataupun kebebasan tanpa batas yang
fleksibel.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Berapa efisiensi aliran kita yang sebenarnya, diukur dari data waktu siklus
   nyata, dan apakah angka itu mengejutkan kita?** Kebanyakan tim belum pernah
   menghitungnya dan mengira angkanya jauh lebih tinggi daripada kenyataannya.
   Tarik sampel perubahan terbaru dan hitung rasionya dengan jujur sebelum
   membahas hal lain dalam topik ini.

2. **Berapa banyak pekerjaan yang sedang berjalan yang kita miliki sekarang,
   di seluruh tim, dan apakah ada yang tahu angka itu sebelum menghitung?**
   WIP yang tinggi sering tak terlihat sampai diukur secara eksplisit, karena
   setiap individu hanya melihat irisannya sendiri. Hitung semua yang sedang
   berjalan, termasuk pekerjaan yang tidak disentuh siapa pun hari ini.

3. **Jika kita mengadopsi batas WIP, apa yang perlu berubah dalam cara kita
   menanggapi permintaan mendesak yang baru?** Pertanyaan ini mengangkat
   kebiasaan organisasi yang sebenarnya, memulai pekerjaan baru secara refleks,
   yang dirancang untuk diinterupsi oleh batas WIP, dan layak dibahas sebelum,
   bukan sesudah, mencoba menegakkan batas.

4. **Ketika pekerjaan menganggur di jalur pengiriman kita, apa alasan
   spesifiknya, dan apakah alasannya selalu sama?** Kesan umum bahwa "hal-hal
   menunggu" kurang berguna daripada penyebab spesifik yang berulang: peninjau
   yang tidak tersedia, lingkungan bersama yang dipesan, ketergantungan
   lintas tim. Sebutkan pola sebenarnya dari contoh nyata terbaru.

5. **Pernahkah kita mengadopsi batas WIP lalu melihatnya terkikis diam-diam
   lewat pengecualian?** Ini sangat umum dan layak dibahas dengan jujur: tekanan
   apa yang menyebabkan pengecualian pertama, dan apakah pengecualian itu
   menjadi kebiasaan baru tanpa ada yang memutuskannya secara eksplisit.

6. **Apakah batas WIP dalam konteks kita perlu diterapkan di tingkat individu,
   tim, atau sumber daya bersama (seperti antrean tinjauan atau lingkungan
   pengujian)?** Hambatan yang berbeda menuntut batas di tingkat yang berbeda,
   dan menerapkan batas di tingkat yang salah, kuota individu alih-alih plafon
   antrean bersama, dapat salah menerapkan seluruh teknik ini.

## Lensa sektor

**Startup.** Dengan sedikit orang, WIP sering rendah secara alami karena tidak
cukup insinyur untuk memulai banyak pekerjaan sekaligus. Risikonya justru
sebaliknya: pendiri atau insinyur utama secara pribadi menangani jauh lebih
banyak inisiatif bersamaan daripada yang mereka sadari, yang layak diukur
bahkan tanpa perangkat kanban formal.

**Usaha kecil.** Papan sederhana yang terlihat, fisik atau perangkat digital
dasar, dengan batas kolom yang eksplisit cukup untuk mendapatkan sebagian besar
manfaat tanpa berinvestasi pada perangkat metrik aliran yang canggih. Mulailah
dengan batas yang longgar dan perketat bertahap seiring tim terbiasa dengan
disiplinnya.

**Perusahaan besar.** WIP yang tinggi sangat umum dan sangat mahal di sini,
karena banyak inisiatif strategis bersamaan bersaing memperebutkan kapasitas
rekayasa bersama yang sama, dan memulai inisiatif baru selalu tampak seperti
kemajuan bagi siapa pun yang menjadi sponsornya. Buat WIP terlihat di tingkat
portofolio, bukan hanya tingkat tim, agar pimpinan dapat melihat biaya memulai
satu inisiatif lagi sebelum menyelesaikan yang sedang berjalan.

**Pemerintahan.** Program multitahun sering mengumpulkan WIP implisit yang
sangat besar di banyak alur kerja, masing-masing dibenarkan sendiri-sendiri,
tanpa visibilitas seluruh organisasi atas totalnya. Memperkenalkan visibilitas
WIP tingkat portofolio, bahkan secara informal, sering kali menjadi argumen
paling meyakinkan untuk mengurutkan pekerjaan alih-alih menjalankan semuanya
paralel, karena biaya efisiensi aliran dari WIP yang tinggi menumpuk secara
kasatmata begitu diukur.

## Contoh

**Perusahaan besar.** Tim platform sebuah perusahaan jasa keuangan menangani
delapan belas inisiatif bersamaan dengan hanya dua belas insinyur, rasio WIP
terhadap kapasitas yang belum dihitung siapa pun sampai seorang direktur
rekayasa baru memintanya langsung. Efisiensi aliran pada pekerjaan tim itu
terukur di bawah 12%. Tim itu mengadopsi batas WIP eksplisit satu inisiatif
aktif per dua insinyur, dengan sengaja menjeda beberapa inisiatif berprioritas
lebih rendah alih-alih terus menyebar kapasitas tipis-tipis. Throughput,
diukur sebagai inisiatif yang benar-benar selesai per kuartal, lebih dari dua
kali lipat dalam dua kuartal, meskipun tim tampak "mengerjakan lebih sedikit"
pada saat tertentu.

**Pemerintahan.** Program transformasi digital sebuah lembaga infrastruktur
nasional telah mengumpulkan lebih dari empat puluh alur kerja bersamaan di
seluruh portofolionya, masing-masing dengan sponsor dan pembenarannya sendiri,
tanpa satu pandangan pun atas total pekerjaan yang sedang berjalan. Tinjauan
efisiensi aliran tingkat program menemukan bahwa alur kerja median
menghabiskan kurang dari 15% waktu yang berlalu dalam pengembangan aktif,
sisanya menunggu sumber daya bersama: tim tinjauan arsitektur pusat yang kecil,
lingkungan pengujian bersama, dan persetujuan lintas lembaga. Program itu
memperkenalkan batas WIP tingkat portofolio yang eksplisit, mengurutkan alur
kerja alih-alih menjalankan keempat puluhnya paralel, dan pelacakan lembaga
itu sendiri menunjukkan penyelesaian yang terukur lebih cepat untuk alur kerja
yang tetap aktif, meskipun jumlah total yang berjalan sekaligus turun tajam.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengelola efisiensi aliran dan WIP secara sengaja memang
berlawanan dengan intuisi tetapi terdokumentasi dengan baik: throughput
cenderung naik, bukan turun, ketika organisasi mengerjakan lebih sedikit
sekaligus, karena lebih sedikit pergantian konteks dan antrean yang lebih pendek
membuat setiap pekerjaan selesai lebih cepat. Contoh jasa keuangan di atas,
throughput yang berlipat dua dari pengurangan pekerjaan bersamaan secara
sengaja, adalah pola umum begitu organisasi benar-benar mengukur dan bertindak
atas efisiensi aliran alih-alih mengira pekerjaan paralel yang lebih banyak
selalu berarti kemajuan lebih besar.

Total biaya mengadopsi disiplin ini sebagian besar bersifat organisasional,
bukan teknis: papan yang terlihat, batas WIP yang disepakati, dan disiplin
untuk mengatakan tidak pada memulai pekerjaan baru ketika batas tercapai.
Disiplin itu lebih sulit dipertahankan daripada diadopsi, itulah sebabnya
rekomendasi "waspadai WIP yang merayap naik lagi" di atas sama pentingnya
dengan adopsi awal itu sendiri.

## Anti-pola dan jebakan

- **Mengira usaha aktif mendominasi waktu pengiriman tanpa mengukur efisiensi
  aliran:** biasanya keliru, dan mengarahkan upaya perbaikan ke tuas yang
  salah.
- **Menerapkan batas WIP sebagai kuota individu, bukan kendala sistem:** salah
  menerapkan teknik ini dan berisiko manipulasi (gaming) individu.
- **Memulai pekerjaan baru secara refleks karena terasa seperti kemajuan:**
  kebiasaan inti yang dirancang untuk diinterupsi oleh efisiensi aliran dan
  batas WIP.
- **Membiarkan pengecualian batas WIP menjadi rutin dan tak terlihat:**
  mengikis disiplin kembali ke keadaan semula tanpa ada yang memutuskannya
  dengan sengaja.
- **Mengukur WIP hanya di tingkat tim, melewatkan kelebihan beban tingkat
  portofolio:** umum di organisasi besar yang menjalankan banyak inisiatif
  strategis bersamaan.
- **Menganggap angka efisiensi aliran yang rendah sebagai tanda tim yang
  buruk:** itu lazim di kebanyakan jalur pengiriman dan merupakan titik awal
  penyelidikan, bukan vonis.

## Model kematangan

- **Level 1, Memulai (Initiate):** Pekerjaan yang sedang berjalan tidak
  dilacak; tim memulai pekerjaan baru secara refleks tanpa visibilitas atas
  total beban bersamaan.
- **Level 2, Mengembangkan (Develop):** Beberapa tim memakai papan informal,
  tetapi batas WIP tidak ditegakkan secara konsisten dan efisiensi aliran tidak
  pernah dihitung.
- **Level 3, Membakukan (Standardize):** Tim memiliki batas WIP yang eksplisit
  dan terlihat di tingkat sistem, dan efisiensi aliran diukur secara berkala
  dari data waktu siklus nyata.
- **Level 4, Mengelola (Manage):** Pengecualian batas WIP dilacak sebagai
  keputusan yang disengaja dan terlihat; efisiensi aliran dipantau untuk
  erosi dari waktu ke waktu dan diselidiki ketika turun.
- **Level 5, Mengorkestrasi (Orchestrate):** WIP terlihat dan dikelola di
  tingkat portofolio, bukan hanya tingkat tim, dan organisasi dapat menunjuk
  peningkatan throughput spesifik yang dihasilkan dari pengurangan pekerjaan
  bersamaan secara sengaja.

## Gagasan untuk diskusi

1. Berapa efisiensi aliran kita yang sebenarnya, dihitung dengan jujur dari data nyata?
2. Berapa banyak pekerjaan yang sedang berjalan yang kita miliki saat ini yang belum pernah dihitung siapa pun sebelum diskusi ini?
3. Apa yang perlu kita tolak untuk menegakkan batas WIP yang sungguhan?
4. Apa alasan paling umum pekerjaan menganggur di jalur pengiriman kita?
5. Di mana dalam organisasi kita WIP tingkat portofolio tidak terlihat dan kemungkinan terlalu tinggi?

## Poin-poin utama

- **Efisiensi aliran**, rasio waktu aktif terhadap total waktu, biasanya di
  bawah 25% di jalur pengiriman nyata; waktu tunggu, bukan usaha, yang
  mendominasi.
- **Membatasi pekerjaan yang sedang berjalan cenderung meningkatkan
  throughput**, bukan menurunkannya, dengan mengurangi pergantian konteks dan
  memperpendek antrean.
- Terapkan **batas WIP sebagai kendala sistem**, jangan pernah sebagai kuota
  individu.
- Selidiki **alasan spesifik** pekerjaan menganggur alih-alih mengeluarkan
  arahan generik "kurangi waktu tunggu."
- Waspadai batas WIP yang **terkikis lewat pengecualian rutin**; perlakukan
  setiap pengecualian sebagai keputusan yang disengaja dan terlihat.
- Topik 2.4 menamai besaran ini **beban aliran (flow load)** dan topik 2.7
  memformalkan hubungannya sebagai hukum Little: pekerjaan yang sedang berjalan
  sama dengan laju kedatangan dikali waktu siklus, untuk antrean stabil mana
  pun.

## Referensi dan bacaan lanjutan

- *The Principles of Product Development Flow*, oleh Donald G. Reinertsen
  (teori antrean, ukuran batch, dan batas WIP dalam pengembangan produk).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, oleh
  David J. Anderson (teks dasar tentang batas WIP dan aliran bagi tim
  perangkat lunak).
- *Actionable Agile Metrics for Predictability*, oleh Daniel S. Vacanti
  (pengukuran efisiensi aliran dan peramalan berbasis aliran).
- *The Goal*, oleh Eliyahu M. Goldratt (teori kendala dan hubungan yang
  berlawanan dengan intuisi antara kesibukan lokal dan throughput sistem).
