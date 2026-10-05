# 3.2 Metrik kepuasan dan kesejahteraan

## Gambaran umum dan motivasi

**Kepuasan dan kesejahteraan**, huruf S dalam SPACE (topik 3.1), adalah
dimensi yang tidak dapat diamati langsung oleh telemetri sistem mana pun.
Apakah seorang insinyur merasa pekerjaannya bermakna, apakah ia merasa
didukung timnya, apakah ia sedang menuju burnout, semua ini tidak
meninggalkan jejak di log kontrol versi maupun di pipeline CI. Hal ini harus
ditanyakan. Topik ini membahas cara bertanya dengan baik: merancang
pengukuran yang menghasilkan sinyal tepercaya tentang kondisi yang benar-benar
subjektif dan benar-benar penting, bukan angka yang tampak presisi padahal
nyaris tidak mengukur apa pun yang nyata.

Dimensi ini penting karena ia adalah indikator awal bagi biaya yang muncul di
tempat lain, jauh lebih lambat, dan jauh lebih mahal. Kepuasan yang menurun
memprediksi pengunduran diri lebih dulu daripada wawancara keluar. Risiko
burnout yang meningkat memprediksi runtuhnya kualitas sebelum tingkat cacat
menunjukkannya. Organisasi yang hanya memantau metrik pengiriman dan
aktivitas baru mengetahui adanya masalah kesejahteraan setelah masalah itu
menjadi kepergian seseorang, sebuah insiden, atau penurunan keluaran yang
diam-diam berlangsung terus dan butuh berbulan-bulan untuk didiagnosis.
Mengukur kepuasan dan kesejahteraan secara langsung adalah yang memberi
organisasi lead time (waktu tunggu) untuk bertindak sebelum hal itu terjadi.

Bagi tim besar, dimensi ini juga merupakan tempat pembedaan diagnostik dan
evaluatif dari topik 1.1 paling tajam berlaku. Data kepuasan yang dipakai
untuk memahami dan memperbaiki kondisi tim bernilai dan berisiko rendah. Data
yang sama bila dipakai untuk memeringkat tim atau, lebih buruk lagi, individu
satu sama lain, merusak instrumen survei hampir seketika, karena orang
berhenti menjawab dengan jujur begitu mereka curiga jawabannya akan dipakai
untuk melawan mereka atau tim mereka. Organisasi perusahaan besar dan
pemerintahan, dengan siklus penilaian kinerja formalnya, sangat rentan
terhadap pergeseran ini dan perlu menjaganya secara eksplisit.

## Prinsip utama

- **Kepuasan dan kesejahteraan tidak dapat diamati dari telemetri sistem.**
  Dimensi ini harus ditanyakan, dengan sengaja dan dengan baik.
- **Anonimitas bukan pilihan.** Setiap kesan adanya kaitan antara jawaban
  jujur dan konsekuensi pribadi menghancurkan sinyal.
- **Dimensi ini adalah indikator awal, bukan indikator akhir.** Ia
  memprediksi pengunduran diri dan masalah kualitas sebelum muncul di tempat
  lain.
- **Burnout adalah pola yang spesifik dan dapat dikenali, bukan sekadar
  ketidakbahagiaan umum.** Ukurlah secara eksplisit, jangan hanya mengandalkan
  skor kepuasan yang samar.
- **Tren lebih penting daripada satu pembacaan mana pun.** Satu skor kepuasan
  hanyalah potret sesaat; tren dari survei ke survei adalah sinyal yang
  sesungguhnya.

## Rekomendasi

### Gunakan instrumen survei yang tervalidasi, jangan menciptakan sendiri

Kesejahteraan dan burnout memiliki instrumen pengukuran yang mapan dan
tervalidasi, terutama [Maslach Burnout Inventory](https://en.wikipedia.org/wiki/Maslach_Burnout_Inventory),
yang mengukur burnout pada tiga dimensi yang diakui: kelelahan emosional,
depersonalisasi atau sinisme, dan berkurangnya rasa pencapaian pribadi.
Meminjam dari instrumen yang mapan dan tervalidasi, bahkan versi singkat yang
diadaptasi, menghasilkan data yang lebih tepercaya daripada kumpulan
pertanyaan ad hoc yang dibuat sendiri secara internal, karena instrumen yang
tervalidasi sudah diuji apakah benar-benar mengukur apa yang diklaimnya.

### Jamin anonimitas yang sesungguhnya, dan terbukalah tentang caranya

Nyatakan secara eksplisit, dan bersungguh-sungguhlah, bahwa jawaban individu
tidak dapat dilacak kembali ke seseorang, terutama di tim kecil yang pola
jawabannya bisa disimpulkan. Gunakan alat survei pihak ketiga yang tidak
dapat dideanonimkan oleh organisasi itu sendiri, terbitkan hasil agregat hanya
di atas ukuran kelompok minimum (umumnya lima responden atau lebih) untuk
mencegah penyimpulan di tim kecil, dan sampaikan kebijakan ini dengan jelas
sebelum meminta siapa pun berpartisipasi. Satu insiden saja ketika anonimitas
bocor, bahkan tanpa sengaja, merusak kepercayaan terhadap setiap survei di
masa depan.

### Lacak tren dari waktu ke waktu, bukan satu pembacaan secara terpisah

Satu skor kepuasan memiliki nilai diagnostik yang terbatas sendirian; tren
menurun selama tiga siklus survei berturut-turut adalah sinyal yang jauh lebih
kuat dan lebih dapat ditindaklanjuti. Jalankan survei dengan irama yang
konsisten dan moderat, kuartalan adalah hal yang umum, dan selalu sajikan hasil
bersama garis tren historisnya alih-alih sebagai angka yang berdiri sendiri,
agar pembaca maupun responden dapat mengkalibrasi terhadap perubahan yang
sesungguhnya, bukan derau sekali lewat.

### Bedakan kepuasan umum dari risiko burnout yang spesifik

Pertanyaan kepuasan umum ("seberapa puas Anda dengan pekerjaan Anda?") dan
pertanyaan khusus burnout ("apakah Anda merasa lelah secara emosional oleh
pekerjaan Anda?") mengukur hal yang berkaitan tetapi berbeda, dan sebuah tim
bisa mendapat skor lumayan pada yang pertama sambil menunjukkan tanda
peringatan nyata pada yang kedua. Sertakan keduanya dalam rancangan survei
Anda, dan perlakukan tanda peringatan khusus burnout sebagai hal yang
memerlukan tindak lanjut lebih cepat dan lebih langsung daripada penurunan
kepuasan umum.

### Padukan data survei dengan sinyal objektif yang menguatkan, dengan hati-hati

Bila tersedia, kuatkan tren kepuasan dengan sinyal objektif yang masuk akal
berkaitan dengan kesejahteraan: tingkat pengunduran diri sukarela, pola kerja
di luar jam kerja yang berkelanjutan, atau meningkatnya cuti yang tidak
terpakai. Gunakan sinyal ini sebagai penguat, jangan pernah sebagai pengganti
bertanya langsung, dan berhati-hatilah agar penguatan ini tidak berubah
menjadi mekanisme pengawasan yang justru merusak kepercayaan dan, ironisnya,
kepuasan.

## Pertukaran: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Pertanyaan survei internal ad hoc | Cepat dibuat, disesuaikan dengan konteks | Tidak tervalidasi; tidak jelas apakah benar-benar mengukur apa yang diklaimnya |
| Instrumen tervalidasi (mis. Maslach Burnout Inventory, diadaptasi) | Teruji, dapat dibandingkan, sinyal lebih tepercaya | Membutuhkan persiapan lebih banyak dan mungkin perlu diadaptasi untuk konteks rekayasa |
| Survei denyut singkat yang sering | Kelelahan responden rendah, sinyal hampir waktu nyata | Kedalaman per survei lebih rendah; risiko derau bila ditafsirkan berlebihan |
| Survei mendalam yang jarang | Sinyal kaya dan terperinci | Lebih lambat menangkap masalah yang cepat berkembang seperti burnout akut |

Ketegangan utamanya adalah **kedalaman versus frekuensi**. Survei mendalam yang
tervalidasi dan dijalankan tiap kuartal memberi gambaran yang tepercaya dan
terperinci tetapi dapat melewatkan masalah yang cepat berkembang di antara
siklus; survei denyut singkat yang sering menangkap masalah lebih cepat tetapi
berisiko menghasilkan data yang lebih dangkal dan berderau serta kelelahan
responden bila berlebihan. Atasi ketegangan ini dengan menjalankan survei yang
lebih mendalam dan tervalidasi pada irama kuartalan sebagai instrumen utama,
dilengkapi pemeriksaan denyut yang sangat singkat dan opsional (satu atau dua
pertanyaan) yang lebih sering sebagai peringatan dini, tanpa meminta tingkat
keterlibatan yang sama dalamnya setiap kali.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah kita memakai instrumen survei yang tervalidasi, atau pertanyaan
   yang kita ciptakan sendiri tanpa bukti bahwa pertanyaan itu benar-benar
   mengukur kepuasan atau burnout?** Jika survei Anda saat ini dibuat secara
   ad hoc, pertimbangkan apakah mengadaptasi dari instrumen mapan seperti
   Maslach Burnout Inventory akan menghasilkan data yang lebih tepercaya.

2. **Dapatkah kita dengan jujur menjamin anonimitas, termasuk di tim kecil
   yang pola jawabannya mungkin dapat disimpulkan?** Telusuri perkakas survei
   dan praktik agregasi Anda yang sebenarnya, dan periksa apakah seorang
   manajer yang bertekad, dalam praktiknya, dapat menyimpulkan jawaban
   seseorang, meskipun kebijakan mengatakan seharusnya tidak bisa.

3. **Pernahkah kita melihat data kepuasan menjadi pertanda lonjakan
   pengunduran diri atau masalah kualitas yang muncul belakangan dalam
   metrik lain?** Tengok kembali riwayat survei Anda terhadap data
   pengunduran diri dan insiden, lalu lihat apakah pola indikator awal
   terlihat dalam retrospeksi. Jika Anda belum pernah memeriksanya, hal itu
   sendiri layak dibahas.

4. **Apakah kita membedakan kepuasan umum dari risiko burnout yang spesifik
   dalam survei kita, atau mengandalkan satu pertanyaan campuran?** Sebuah tim
   bisa tampak baik-baik saja pada kepuasan umum sementara menunjukkan tanda
   peringatan burnout yang nyata di baliknya; periksa apakah instrumen Anda
   saat ini benar-benar bisa menangkap perbedaan itu.

5. **Pernahkah data kepuasan dipakai, bahkan secara informal, untuk
   membandingkan atau memeringkat tim satu sama lain?** Pergeseran ke arah
   penggunaan evaluatif ini merusak instrumen survei hampir seketika, karena
   responden mengubah jawabannya begitu mereka curiga ada konsekuensi
   kompetitif.

6. **Berapa tingkat respons kita yang sebenarnya, dan apa yang akan
   dikatakan oleh tingkat respons yang menurun itu sendiri?** Tingkat respons
   yang turun dari survei ke survei adalah sinyal tersendiri, sering kali
   tanda terkikisnya kepercayaan pada prosesnya atau kelelahan survei, dan
   layak diselidiki tersendiri alih-alih diabaikan sebagai gangguan
   pengumpulan data.

## Lensa sektor

**Startup.** Dengan segelintir orang, survei anonim formal bisa terasa tidak
perlu, dan percakapan langsung sering mengungkap masalah kepuasan lebih cepat
daripada instrumen kuartalan. Risikonya adalah pendiri yang menyangka tidak
adanya keluhan berarti tidak adanya masalah; perkenalkan pemeriksaan anonim
yang ringan sekalipun begitu tim tumbuh melampaui ukuran ketika semua orang
masih berbicara setiap hari.

**Usaha kecil.** Alat survei anonim yang sederhana, gratis atau berbiaya
rendah, dijalankan tiap kuartal dengan serangkaian pendek pertanyaan
tervalidasi yang diadaptasi, dapat dicapai tanpa fungsi analitik sumber daya
manusia khusus. Tahan godaan untuk melewatkan jaminan anonimitas karena tim
terasa akrab; keakraban itulah yang justru membuat umpan balik negatif yang
jujur lebih sulit disampaikan langsung.

**Perusahaan besar.** Infrastruktur survei pada skala ini membutuhkan
investasi nyata: alat pihak ketiga yang layak, kebijakan agregasi ukuran
kelompok minimum, dan kebijakan penggunaan nonevaluatif yang jelas serta
dikomunikasikan secara konsisten. Imbalannya juga proporsional lebih besar,
karena menangkap tren burnout di organisasi berjumlah karyawan besar sebelum
mendorong pengunduran diri melindungi pengetahuan institusional yang jauh
lebih banyak.

**Pemerintahan.** Tekanan retensi akibat batasan gaji sektor publik
menjadikan dimensi ini penting secara strategis, bukan opsional. Data
kesejahteraan dapat langsung membenarkan permintaan anggaran untuk investasi
retensi nonmoneter (perkakas, waktu terlindungi, pengelolaan beban kerja)
yang tidak dapat diatasi oleh batasan kompensasi saja, asalkan pengumpulan
datanya sendiri cukup tepercaya untuk dikutip dengan percaya diri.

## Contoh

**Perusahaan besar.** Tim platform sebuah perusahaan infrastruktur cloud
mendapat skor baik pada kepuasan umum selama lebih dari setahun, sementara
pertanyaan khusus burnout, yang diadaptasi dari subskala kelelahan emosional
Maslach Burnout Inventory, menunjukkan penurunan yang stabil selama empat
kuartal berturut-turut. Pimpinan, yang awalnya cenderung mengabaikan
kekhawatiran itu karena angka kepuasan umum tampak baik, menyelidiki lebih
jauh setelah kuartal penurunan kedua berturut-turut dan menemukan bahwa tim
itu telah menanggung beban siaga (on-call) yang tidak berkelanjutan (topik 6.3)
selama hampir setahun setelah pembekuan jumlah karyawan. Memulihkan staf
siaga yang memadai membalikkan tren burnout dalam dua kuartal, jauh sebelum
berubah menjadi lonjakan pengunduran diri yang menurut data perusahaan adalah
konsekuensi hilir yang lazim dari pola ini.

**Pemerintahan.** Sebuah badan TI pemerintah negara bagian, yang menghadapi
kesulitan kronis bersaing soal gaji dengan pemberi kerja sektor swasta,
memakai data survei kesejahteraan secara khusus untuk menyusun argumen
anggaran bagi kebijakan waktu fokus yang dilindungi, alih-alih kenaikan gaji
yang tidak dapat diperolehnya. Survei menunjukkan frekuensi interupsi dan
beban rapat, bukan kompensasi, sebagai prediktor terkuat niat untuk keluar di
antara responden yang menyatakan sedang aktif mencari pekerjaan. Kebijakan
yang dihasilkan, yaitu memblokir dua sesi sore tanpa gangguan per minggu untuk
kerja rekayasa yang terfokus, berkorelasi dengan perbaikan terukur pada skor
kepuasan maupun retensi sukarela selama tahun berikutnya, dengan biaya yang
hanya sebagian kecil dari kenaikan gaji kompetitif.

## Kasus bisnis: motivasi, ROI, dan TCO

Imbal hasil dari mengukur kepuasan dan kesejahteraan secara langsung adalah
peringatan dini: organisasi yang menangkap tren burnout setahun penuh sebelum
berubah menjadi pengunduran diri dapat mengintervensi dengan biaya yang
hanya sebagian kecil dari merekrut dan meng-onboard pengganti, yang biasanya
butuh berbulan-bulan untuk mencapai produktivitas penuh bahkan setelah
direkrut. Pengunduran diri sukarela seorang insinyur berpengalaman memakan
biaya organisasi jauh lebih besar daripada infrastruktur survei yang dapat
memberi peringatan itu.

Total biaya kepemilikan mencakup perkakas survei, disiplin menjamin dan
memelihara anonimitas yang sesungguhnya, serta komitmen organisasi untuk
bertindak atas apa yang ditunjukkan data, alih-alih mengumpulkannya lalu
mengabaikan hasil yang tidak menyenangkan. Biaya terakhir itu, kemauan untuk
bertindak, sering kali menjadi hambatan yang sebenarnya, bukan pengukurannya;
survei yang mengungkap masalah yang tidak ditangani siapa pun mengikis
kepercayaan pada instrumen sama pastinya dengan jaminan anonimitas yang
bocor.

## Anti-pola dan jebakan

- **Pertanyaan survei ad hoc yang tidak tervalidasi:** menghasilkan data
  dengan keandalan yang tidak jelas.
- **Jaminan anonimitas yang lemah atau bocor:** merusak jawaban jujur dan
  kepercayaan pada instrumen, sering kali secara permanen.
- **Bereaksi pada satu pembacaan alih-alih melacak tren:** bereaksi
  berlebihan pada derau atau melewatkan penurunan lambat yang sesungguhnya.
- **Mencampur kepuasan umum dengan pertanyaan khusus burnout:** dapat
  menutupi tanda peringatan nyata di dalam rata-rata yang tampak baik.
- **Memakai data kepuasan untuk memeringkat atau membandingkan tim:**
  pergeseran evaluatif yang merusak jawaban jujur.
- **Mengumpulkan data tetapi tidak pernah bertindak atas hasil yang tidak
  menyenangkan:** mengikis kepercayaan pada survei sama tuntasnya dengan janji
  anonimitas yang dilanggar.

## Model kematangan

- **Level 1, Initiate (Memulai):** Kepuasan dan kesejahteraan sama sekali
  tidak diukur, atau hanya melalui percakapan informal yang tidak terstruktur.
- **Level 2, Develop (Mengembangkan):** Ada survei ad hoc tetapi tidak
  memiliki validasi, irama yang konsisten, atau jaminan anonimitas yang kuat.
- **Level 3, Standardize (Menstandarkan):** Instrumen survei yang tervalidasi
  atau diadaptasi berjalan pada irama yang konsisten dengan jaminan
  anonimitas yang kuat dan dikomunikasikan, di seluruh organisasi.
- **Level 4, Manage (Mengelola):** Tren dilacak secara aktif lintas siklus
  berturut-turut, sinyal khusus burnout dibedakan dari kepuasan umum, dan
  organisasi memiliki proses terdokumentasi untuk menindaklanjuti tanda
  peringatan.
- **Level 5, Orchestrate (Mengorkestrasi):** Data kesejahteraan secara
  langsung menjadi masukan perencanaan tenaga kerja dan investasi retensi,
  dikuatkan dengan hati-hati oleh sinyal objektif, dan organisasi dapat
  menunjuk intervensi tertentu yang membalikkan penurunan terukur sebelum
  menjadi pengunduran diri atau masalah kualitas.

## Gagasan untuk diskusi

1. Apakah instrumen survei kita saat ini akan lolos pengujian sebagai benar-benar anonim?
2. Pernahkah tren kepuasan atau burnout memprediksi masalah yang kemudian muncul di tempat lain?
3. Apa proses kita untuk bertindak atas hasil survei yang tidak ingin kita dengar?
4. Apakah kita saat ini membedakan risiko burnout dari kepuasan umum dalam pengukuran kita?
5. Investasi nonmoneter apa yang paling dibenarkan oleh data kesejahteraan kita saat ini?

## Poin-poin utama

- Kepuasan dan kesejahteraan harus **ditanyakan langsung**; tidak ada
  telemetri sistem yang dapat mengamati dimensi ini.
- Gunakan **instrumen tervalidasi** bila memungkinkan, dan jamin **anonimitas**
  yang sesungguhnya dan dikomunikasikan dengan baik.
- Dimensi ini adalah **indikator awal** bagi pengunduran diri dan masalah
  kualitas yang kalau tidak akan muncul jauh lebih lambat dan lebih mahal.
- Bedakan **kepuasan umum dari risiko burnout yang spesifik**, dan lacak
  **tren dari waktu ke waktu**, bukan satu pembacaan.
- Jangan pernah memakai data ini untuk **memeringkat atau membandingkan
  tim**; pergeseran itu merusak jawaban jujur hampir seketika.

## Referensi dan bacaan lanjutan

- Maslach, Christina, and Susan E. Jackson, *Maslach Burnout Inventory*
  (instrumen tervalidasi yang banyak dipakai untuk mengukur burnout pada tiga
  dimensi).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Drive: The Surprising Truth About What Motivates Us*, by Daniel H. Pink
  (riset motivasi dan kepuasan yang relevan bagi perancangan survei).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, by Christina Maslach and Michael P. Leiter (penyebab
  organisasional dan intervensi untuk burnout).
