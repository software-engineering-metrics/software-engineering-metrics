# 9.3 Daftar periksa

Daftar periksa rujukan cepat yang siap pakai. Salin satu ke dalam proses
Anda sendiri dan sesuaikan; yang penting adalah cakupannya, bukan kata-kata
persisnya.

## Daftar periksa tinjauan metrik baru (sebelum menambahkan metrik apa pun ke dasbor)

- [ ] Metrik memiliki keputusan bernama yang diinformasikannya (topik 1.1)
- [ ] Metrik diklasifikasikan sebagai diagnostik atau evaluatif, secara
      tertulis (topik 1.1)
- [ ] Jika diberi insentif, metrik pagar pengaman didefinisikan pada saat
      yang sama (topik 1.2)
- [ ] Vektor manipulasi (gaming) telah disebutkan: bagaimana tim yang
      rasional membuat angka ini tampak bagus tanpa memperbaiki hasil yang
      sebenarnya (topik 1.2)
- [ ] Metrik diklasifikasikan sebagai masukan, keluaran, atau hasil (topik
      1.3)
- [ ] Metrik memiliki pemilik bernama serta sistem sumber dan metode
      pengumpulan yang terdokumentasi (topik 1.4, 1.5)
- [ ] Metrik akan memakai median atau persentil, bukan rata-rata, jika data
      yang mendasarinya miring (topik 1.6)
- [ ] Metrik tidak pernah dipakai untuk evaluasi individu, atau pemakaian itu
      diungkapkan secara terpisah dan eksplisit (topik 1.1)

## Daftar periksa peluncuran dasbor

- [ ] Dasbor memiliki satu audiens dan keputusan yang bernama dan spesifik
      (topik 8.1)
- [ ] Setiap metrik yang diberi insentif tampil pada tampilan yang sama
      dengan pagar pengamannya (topik 1.2, 8.1)
- [ ] Sumbu dimulai dari nol kecuali ada pengecualian yang dinyatakan,
      terlihat, dan terdokumentasi (topik 1.6)
- [ ] Tren dari waktu ke waktu ditampilkan, bukan satu potret sesaat (topik
      1.6)
- [ ] Dasbor memiliki pemilik bernama dan jadwal tinjauan (topik 1.4)
- [ ] Pernyataan yang terlihat menyebutkan untuk apa dasbor ini tidak
      dimaksudkan, jika relevan (topik 1.1)
- [ ] Sumber data memiliki pemeriksaan kesehatan dasar agar jalur data yang
      rusak tidak tampil diam-diam sebagai data terkini (topik 1.5)

## Daftar periksa peluncuran program metrik

- [ ] Tujuan dan non-tujuan yang eksplisit dikomunikasikan sebelum peluncuran,
      bukan sebagai reaksi (topik 8.3)
- [ ] Orang-orang yang diukur dilibatkan dalam pemilihan metrik (topik 8.3)
- [ ] Program dimulai dalam mode diagnostik saja, dengan masa pembuktian
      minimum yang disepakati (topik 8.3)
- [ ] Ada protokol respons yang cepat dan terlihat untuk setiap insiden
      penyalahgunaan di masa depan (topik 8.3)
- [ ] Tim percontohan dipilih dari tim yang benar-benar sukarela, bukan yang
      diwajibkan (topik 8.5)
- [ ] Tata kelola dasar (piagam, kepemilikan, kebijakan diagnostik) sudah ada
      sebelum instrumentasi dimulai (topik 1.4, 8.5)

## Daftar periksa insiden dan postmortem

- [ ] Postmortem menyelidiki sistem, bukan individu (topik 6.2)
- [ ] Tingkat keparahan diklasifikasikan berdasarkan kriteria standar yang
      terdokumentasi (topik 6.2)
- [ ] Waktu deteksi, pengakuan, dan penyelesaian dicatat secara terpisah
      (topik 6.2)
- [ ] Butir tindakan spesifik, ditugaskan, dan dilacak sampai selesai (topik
      6.2)
- [ ] Postmortem dibagikan tanpa rasa takut akan konsekuensi bagi individu
      (topik 6.2, 8.3)

## Daftar periksa audit metrik era AI

- [ ] Setiap metrik dasbor telah diuji dengan pertanyaan: "apakah tim yang
      banyak memakai bantuan AI tetapi tidak menghasilkan nilai nyata yang
      lebih besar akan menampilkan pembacaan yang membaik di sini" (topik 7.1)
- [ ] Tingkat kegagalan perubahan dan tingkat cacat ditinjau bersamaan dengan
      setiap kenaikan frekuensi deployment atau volume commit yang dibantu AI
      (topik 7.1)
- [ ] Kapasitas dan kedalaman tinjauan dipantau seiring berubahnya volume
      kode yang dihasilkan AI (topik 7.1)
- [ ] Cacat yang lolos diberi tag menurut tingkat bantuan AI untuk menguji,
      bukan mengasumsikan, apakah hubungan tingkat cacat historis masih
      berlaku (topik 7.1, 7.3)
- [ ] Metode deteksi yang tahan terhadap cacat yang "tampak benar" (pengujian
      mutasi, pengujian berbasis properti) tersedia untuk jalur kode yang
      sarat AI (topik 7.3)
- [ ] Piagam metrik telah ditinjau ulang dan diperbarui secara eksplisit
      untuk pergeseran ini, tidak dibiarkan hanyut tanpa diperiksa (topik 1.4,
      7.1)

## Daftar periksa audit program metrik (tahunan)

- [ ] Setiap metrik masih memiliki pemilik bernama (topik 1.4)
- [ ] Setidaknya satu metrik telah dipensiunkan pada siklus terakhir jika ia
      berhenti layak dipertahankan (topik 1.1)
- [ ] Penilaian kematangan lima dimensi telah dilakukan dengan jujur, diberi
      skor menurut nilai minimum, bukan rata-rata (topik 8.4)
- [ ] Tidak ada metrik yang bergeser dari pemakaian diagnostik ke evaluatif
      tanpa keputusan yang eksplisit dan diungkapkan (topik 1.1)
- [ ] Definisi telah diperiksa secara acak terhadap instrumentasi yang
      sebenarnya untuk mendeteksi penyimpangan (topik 1.2, 2.4, 5.1, 6.2, 6.4)
- [ ] Rasio hasil terhadap keluaran pada dasbor utama telah dihitung dan
      ditinjau (topik 7.4)
