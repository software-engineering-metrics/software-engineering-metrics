# 4.0 Bölüm 4'e giriş: Kod ve kalite metrikleri

Bölüm 2 ve 3, işin nasıl aktığını ve onu üreten insanların nasıl durumda olduğunu ölçtü. Bu bölüm ise ürünün kendisine, yani koda ve bir metriğin kodun kalitesi hakkında neyi söyleyip neyi söyleyemeyeceğine dönüyor. Kod kalitesi metrikleri, bu kitaptaki tüm metrik aileleri arasında en uzun geçmişe sahip (döngüsel karmaşıklık 1976'ya uzanıyor) ve buna denk en uzun kötüye kullanım geçmişine de. Bu bölüm o geçmişi ciddiye alıyor: her konu, gerçekten işe yarayan bir sinyali ve o sinyalin hedefe dönüştüğünde nasıl manipüle edildiğini, iyi belgelenmiş somut yöntemleriyle birlikte adlandırıyor.

Bu altı konuyu birbirine bağlayan ortak çizgi şu: hiçbir tek kod metriği kaliteyi kendi başına yakalayamaz ve en popüler olanlardan birkaçı, tek başına kovalandığında aktif biçimde yanıltır. Yüksek bir test kapsama yüzdesi, anlamlı hiçbir şeyi doğrulamayan testlerle bir arada var olabilir. Düşük bir karmaşıklık puanı, teknik olarak basit ama kavramsal olarak tutarsız kodla bir arada var olabilir. Bu bölümün her konusu, başlıktaki metriği kendi kör noktasını yakalayan tamamlayıcı bir kontrolle eşleştiriyor: karmaşıklığı sürdürülebilirlik bağlamıyla, kapsamayı mutasyon testiyle, değişim yoğunluğunu sıcak nokta analiziyle, statik analizi insan muhakemesiyle, teknik borcu da sürekli büyüyen, sahiplenilmeyen bir birikim yerine önceliklendirilmiş iyileştirmeyle.

Büyük ekipler için kod ve kalite metrikleri, hiçbir kişinin kafasında tutamayacağı kadar büyük bir kod tabanını yönetilebilir kılan şeydir. Beş kişilik bir ekip, sistemin hangi bölümlerinin kırılgan olduğuna dair ortak örtük bilgiye güvenebilir; onlarca servise yayılan beş yüz mühendislik organizasyonu ise bu kırılganlığı sistematik biçimde bulmak için ölçülmüş sinyallere ihtiyaç duyar. Kod tabanları yıllarla değil onlarca yılla ölçülen kurumsal ve kamu kuruluşları, sınırlı bakım yatırımının nerede en çok fayda sağlayacağını belirlemek için bu bölümün metriklerine dayanır.

## Bu bölümdeki konular

- **4.1 Kod karmaşıklığı metrikleri:** Döngüsel karmaşıklık ve akrabaları, gerçekte neyi öngördükleri ve iyi belgelenmiş manipülasyon riskleri.
- **4.2 Test kapsaması ve test etkinliği:** Bir kapsama yüzdesinin tek başına göründüğünden neden daha az şey söylediği ve mutasyon testinin bu boşluğu nasıl kapattığı.
- **4.3 Kod değişim yoğunluğu ve sıcak nokta analizi:** Kod tabanının, kusurların ve bakım maliyetinin orantısız bir bölümünden sorumlu olan küçük ve belirli kesimini bulmak.
- **4.4 Statik analiz ve kod kokusu metrikleri:** Otomatik kod kalitesi sinyalleri, gerçek değerleri ve insan muhakemesi karşısındaki sınırları.
- **4.5 Teknik borç ölçümü:** Görünmeyen, gayriresmî olarak konuşulan bir yükümlülüğü görünür, önceliklendirilmiş ve yönetilebilir bir portföye dönüştürmek.
- **4.6 Dokümantasyon ve bilgi metrikleri:** Dokümantasyonun var olup olmadığını değil, gerçekten işe yarayıp yaramadığını ölçmek.

## Bu konular birbiriyle nasıl ilişkili

Bu altı konu, kodun en küçük biriminden dışarıya doğru ilerler. Konu 4.1 tek bir fonksiyon ya da metot düzeyinde başlar; konu 4.2 testlerin o birimin davranışını gerçekten doğrulayıp doğrulamadığını sorar; konu 4.3 uzaklaşarak tüm kod tabanında hangi dosya ve modüllerin önce ilgi hak ettiğini bulur; konu 4.4 bunların hepsini sürekli tarayan otomatik araç katmanını ekler; konu 4.5 ilk dört konudan biriken bulguları dağınık ve ele alınmamış bir endişe olmaktan çıkarıp yönetilen, önceliklendirilmiş bir iş listesine çevirir; konu 4.6 ise tüm bunları güvenle sürdürmek için gereken bilginin gerçekten belgelenmiş ve bulunabilir olup olmadığını ölçerek bölümü kapatır.

Bu bölüm, doğrudan Bölüm 2'nin kararlılık metriklerine bağlanır: değişiklik başarısızlık oranı (konu 2.10), büyük ölçüde, bu bölümün yukarı akışta ölçtüğü kod kalitesinin aşağı akıştaki bir sonucudur. Aynı zamanda ileride Bölüm 5'in ürün metriklerine de bağlanır, çünkü kaçan kusurlar (konu 5.1) çoğu zaman tam olarak bu bölümün üretime ulaşmadan önce görünür kılmak üzere kurulduğu karmaşıklık sıcak noktalarına ve kapsama boşluklarına geri izlenebilir.
