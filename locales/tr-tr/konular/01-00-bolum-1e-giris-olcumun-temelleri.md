# 1.0 Bölüm 1'e giriş: Ölçümün temelleri

Bu kitap tek bir metriğin adını anmadan önce daha zor bir soruyu yanıtlamak
zorunda: ölçüm *ne için* yapılır? Bir pano (dashboard) kurmuş her ekip, er ya
da geç bir sayının düzeldiğini, temsil etmesi gereken şeyin ise kötüleştiğini
izlemiştir. Bu bir araç hatası değildir. Bu bölümün ele aldığı temelleri
atlamanın öngörülebilir sonucudur: neden ölçtüğünüz, insanlar bir metriğin
izlendiğini öğrendiğinde ona ne olduğu, çıktılar yerine sonuçlara nasıl ağırlık
verileceği, bir sayının ve tanımının kime ait olduğu, verinin gerçekte nereden
geldiği ve gürültülü bir sinyalin kendinizi kandırmadan nasıl okunacağı.

Büyük ekipler için bu temeller artık isteğe bağlı değildir. Tek bir ekip, bir
yöneticinin haftada bir göz attığı gelişigüzel bir sayıyla idare edebilir.
Yüzlerce mühendisi, onlarca panosu ve yukarıya rapor veren bir yönetim ekibi
olan bir kuruluş edemez. Bu ölçekte sahibi olmayan ya da kötü tanımlanmış bir
metrik yalnızca tek bir ekibi yanıltmaz; sayının nasıl üretildiğini kontrol
etmeden ona güvenen aşağı akıştaki herkesi yanıltır ve davranış onu oyunlamaya
uyum sağladıktan sonra geri sarmak pahalıdır.

Kurumsal ve kamu kuruluşları bunu en çok hisseder, çünkü metrikleri çoğu zaman
onları üreten ekibin ötesinde sonuçlar doğurur: bütçe kararları, kamuya açık
performans raporları, denetim bulguları ve tedarikçi sözleşmeleri. İç bir
mühendislik kolaylığı gibi görünen bir metrik, onu üreten hattı hiç görmeyen
kişilerin verdiği kararlara sessizce kritik ve sorgulanmayan bir girdi
olabilir. Temelleri doğru atmak, bu ağırlığı taşınabilir kılan şeydir.

## Bu bölümdeki konular

- **1.1 Yazılım mühendisliği neden ölçülür:** Ölçümün neden gerekli olduğuna
  dair gerekçe, neyi başarması gerektiği ve öğrenmek için ölçmekle yargılamak
  için ölçmek arasındaki fark.
- **1.2 Goodhart yasası ve metriklerin psikolojisi:** Bu kitaptaki diğer her
  konuyu yöneten tek fikir: hedef haline gelen bir ölçü, iyi bir ölçü olmaktan
  çıkar. Ayrıca insanlar izlendiklerini bildiklerinde oyunlamayı neredeyse
  kaçınılmaz kılan psikolojik mekanizmalar.
- **1.3 Çıktı yerine sonuç: Ne ölçüleceğini seçmek:** Klasik girdi/çıktı/sonuç
  ayrımını ve kuzey yıldızı desenini kullanarak bir metrik kümesinin faaliyet
  yerine sonuca doğru nasıl ağırlıklandırılacağı.
- **1.4 Metrik yönetişimi ve sahiplik:** Neyin ölçüleceğine kimin karar
  verdiği, bir tanımın kime ait olduğu ve bir metrik tüzüğünün büyüyen bir
  panonun hesap verilemez bir dağınıklığa dönüşmesini nasıl önlediği.
- **1.5 Veri kaynakları ve enstrümantasyon:** Mühendislik metriklerinin gerçekte
  nereden geldiği, enstrümantasyon ile öz bildirimin farkı ve bir panoyu kimse
  fark etmeden sessizce geçersiz kılan veri kalitesi sorunları.
- **1.6 Mühendislik metrikleri için istatistik okuryazarlığı:** Bir ekibin bir
  metriği dürüstçe okuyabilmesi için gereken asgari istatistiksel muhakeme:
  yüzdelikler ile ortalamalar, örneklem büyüklüğü, ortalamaya doğru gerileme ve
  karıştırıcı değişkenler.

## Bu konular birbirine nasıl bağlanır

Bu altı konu katı bir sırayla ilerler. Konu 1.1, neden ölçüldüğünü sorar; bu
önemlidir, çünkü bunu yanıtlamamış bir ekip kimsenin harekete geçmediği
sayılar toplar. Konu 1.2, kitabın geri kalanının üzerinde döndüğü eksendir:
herhangi bir ölçünün hedefe dönüşüp oyunlanabileceğini kabul ettiğinizde,
sonraki her konunun önerisi bu riske karşı tasarım yapmaktan çıkar. Konu 1.3
bu ihtiyatı olumlu bir kurala çevirir: sonuçlara doğru ağırlık verin, çünkü
oyunlaması en zor kategori onlardır. Konu 1.4 yönetişimi, konu 1.5 veriyi
somutlaştırır; konu 1.6 ise yönetişim ve enstrümantasyon sağlam olsa bile
gürültüye kanmamanız için gereken istatistiksel muhakemeyi verir.

Sonraki her şey bu bölüme dayanır. Bölüm 2'deki akış metrikleri ve DORA
metrikleri ile Bölüm 3'teki SPACE çerçevesi, aslında 1.2 ve 1.3 konularında
ortaya konan sonuç ağırlıklandırma ve korkuluk eşleştirme ilkelerinin uygulamalı
örnekleridir. Konu 8.1'deki pano tasarımı rehberi, konu 1.4'teki yönetişim
modelini varsayar. Bu kitaptaki her konuyu kapatan olgunluk modeli de beş
düzeyinin altında, tam olarak bu bölümün tanıttığı disiplinin olgunluk
modelidir: ölçümü ciddiye almak ve kendi işinizi denetlemek.
