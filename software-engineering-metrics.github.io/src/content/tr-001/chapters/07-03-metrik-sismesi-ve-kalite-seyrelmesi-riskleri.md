# 7.3 Metrik şişmesi ve kalite seyrelmesi riskleri

## Genel bakış ve motivasyon

Bu konu, konu 7.1'in yapay zeka destekli geliştirme standart uygulama haline
geldikçe bu kitabın tüm çerçevesinin karşı korunması gerektiğini söylediği iki
başarısızlık kipini doğrudan ve belirli biçimde adlandırır: **metrik şişmesi**,
karşılığında gerçek değer olmadan yükselen sayılar ve **kalite seyrelmesi**,
kod kalitesinde, sektörün mevcut inceleme ve test uygulamalarıyla tespit
edebilme yeteneğini aşan kademeli bir aşınma. Bunlar, bu kitabın zaten
adlandırmadığı yeni risk kategorileri değildir: metrik şişmesi, konu 1.2'nin
Goodhart yasası ile konu 1.2'nin ikame manipülasyonunun ölçekte uygulanmasıdır;
kalite seyrelmesi ise konu 4.2'nin kapsam-etkinlik açığı ile konu 5.1'in kaçan
hata kaygısıdır, ikisi de yoğunlaşmış halde. Yeni olan, üretken yapay zekanın
her iki başarısızlık kipini aynı anda, çoğu kuruluşun mevcut korkuluklarının
yakalamak için tasarlandığından daha hızlı ve daha büyük ölçekte üretebilmesidir.

Bu konunun ilgilendiği belirli mekanizma incedir: yapay zeka üretimi kod çoğu
zaman doğru görünür. Tanıdık deyimleri izler, makul değişken adları kullanır ve
yüzeysel bir okumayı, gerçekten özensiz insan yazımı koddan çok daha güvenilir
biçimde geçer; çünkü doğru görünen devasa bir kod külliyatı üzerinde eğitilmiştir.
Bu, yapay zeka üretimi hataları, birçok insan kaynaklı hatayı yakalayan türden
örüntü eşleştirmeli, doğru görünüyor mu incelemesiyle yakalamayı bir insan
inceleyen için zorlaştırır; çünkü yapay zeka üretimi sürüm, gerçekten doğru olsun
olmasın, istatistiksel anlamda doğru görünmek için özel olarak optimize edilmiştir.

Büyük ekipler için bu konunun riskleri, özellikle kurumsal ve kamu kuruluşlarını
ilgilendirmesi gereken biçimde ölçekle bileşik hale gelir: düzinelerce ekipte
eşzamanlı metrik şişmesi, konu 7.1'in finansal teknoloji örneğinin gösterdiği gibi,
çözülmesi hatırı sayılır zaman ve analiz gerektiren, kuruluş çapında yanlış bir
verimlilik artışı sinyali üretebilir. Tespit yeteneğini aşan kalite seyrelmesi,
tespit edilmemiş bir hatanın üretime ulaşmasının maliyetinin hemen mühendislik
kaygısının çok ötesine geçen sonuçlar taşıdığı düzenlemeye tabi, güvenlik açısından
kritik ya da kamu güveni bağlamlarında daha da ciddidir.

## Temel ilkeler

- **Metrik şişmesi ve kalite seyrelmesi, bu kitabın zaten adlandırdığı risklerin
  yoğunlaşmış sürümleridir**, tümüyle yeni kategoriler değil; mevcut korkuluklar
  hâlâ geçerli, ama daha çok çalışmaları gerekiyor.
- **Yapay zeka üretimi kodun "doğru görünen" niteliği, ince hataları insan örüntü
  eşleştirmeli incelemesinin yakalamasını özellikle zorlaştırır.** Bu, olağan
  insan hatasından ayrı bir risktir.
- **Bu değişimin hızı, bir kuruluşun korkuluklarını uyarlama yeteneğini aşabilir**
  ve gerçek, zamanla sınırlı bir maruziyet penceresi yaratır.
- **Mevcut kalite metrikleri (Bölüm 4) değerli kalır, ama bu yeni risk profili
  ışığında yeniden kalibrasyon gerektirebilir**, yerine başka şey koymak değil.
- **Tespit yeteneğinin kendisi bilinçli yatırım gerektirir;** çünkü bu kitabın
  kapsadığı inceleme ve test uygulamaları, bu belirli risk bu ölçekte var
  olmadan önce tasarlandı.

## Öneriler

### Yapay zeka ağırlıklı iş için değişim başarısızlık oranı ve kaçan hata eşiklerini yeniden kalibre edin

Bir ekibin ya da kod alanının yapay zeka desteğini yoğun benimsediği yerlerde,
en azından kuruluşunuz bu metrikler ile gerçek risk arasındaki tarihsel ilişkinin
özellikle yapay zeka destekli iş için değişmeden geçerli kalıp kalmadığını bilecek
kadar kanıt (konu 7.2) biriktirene dek, konu 2.4 ve konu 5.1'in ciddiyet ağırlıklı
izlemesini artırılmış hassasiyetle uygulayın. Bu yeniden kalibrasyonu, her iki
yönde de kalıcı, sorgulanmamış bir varsayım değil, geçici, kanıt toplayan bir
duruş olarak ele alın.

### "Doğru görünüyor" sorununa dirençli tespit yeteneğine özellikle yatırım yapın

Doğru görünene dair bir inceleyenin örüntü tanımasına büyük ölçüde dayanan
geleneksel kod incelemesi, makul görünen ama ince biçimde hatalı yapay zeka üretimi
koda karşı özellikle zayıflar. Görsel örüntü eşleştirmesine dayanmayan tespit
yöntemlerine buna uygun biçimde daha fazla yatırım yapın: görünümü değil gerçek
davranışı sınayan [mutasyon testi](https://en.wikipedia.org/wiki/Mutation_testing)
(konu 4.2) ve yüzey makullüğünü değil mantıksal doğruluğu doğrulayan özellik
tabanlı ya da değişmez tabanlı test, tam da bu değişim nedeniyle orantısız ölçüde
daha değerli hale gelir.

### Metrik şişmesini yalnızca kod üretim noktasında değil, tüm teslimat hattında izleyin

Yapay zeka destekli geliştirmeden kaynaklanan metrik şişmesi kodlama aşamasıyla
sınırlı değildir; tüm cycle time zinciri boyunca yayılabilir (konu 2.6): yapay zeka
üretimi pull request hacminin artması, pull request throughput metriklerini (konu
2.9) şişirebilir; oysa o metriğin başta yakalamak için tasarlandığı yararlı sinyal,
yani gerçek ekip throughput'u, inceleme yükü ve düzeltme maliyeti doğru hesaba
katıldığında yatay kalır ya da düşer. Yalnızca en bariz, doğrudan yapay zekayla
ilişkili metrikleri değil, tüm metrik setinizi bu yayılma örüntüsü için denetleyin.

### Kalıcı bir şüphe duruşu yerine açık, zamanla sınırlı bir yeniden kalibrasyon planı kurun

Bu konunun önerdiği artırılmış inceleme, etkin bir benimseme ve belirsizlik
döneminde uygundur, ama yapay zeka destekli işin üzerinde süresiz, sorgulanmamış
kalıcı bir vergi haline gelmemelidir. Kuruluşunuz konu 7.2'nin ölçüm disipliniyle
gerçek kanıt biriktirdikçe, eşikleri ve korkulukları bu kanıtın gerçekte
gösterdiğine göre gözden geçirin: risk doğrulanan yerde daha da sıkılaştırın,
doğrulanmayan yerde gevşetin. Riski tümüyle yok saymayın, ayrıca biriken kanıta
bakmaksızın her yapay zeka destekli kod parçasına kalıcı, ayrım gözetmeyen bir
şüpheyle de yaklaşmayın.

### Bu riski yapay zeka benimsemeye direnmek için bir gerekçe olarak değil, şeffaf biçimde iletin

Bu konunun rehberliğini, genel olarak yapay zeka destekli geliştirmeye karşı bir
argüman olarak değil, gerçekten değerli yeni bir yetenek için risk yönetimi olarak
çerçeveleyin. Bu belirli, adlandırılmış riskleri açıkça ileten ve bu kitabın ele
aldığı diğer her metrik ve teknik için önerdiği gibi bunlara karşı orantılı
korkuluklar kuran bir kuruluş, riski yok sayan ya da onu gerçekten yararlı bir araç
kümesine toptan direnmek için gerekçe yapan kuruluştan daha güvenli ve daha
sürdürülebilir biçimde yapay zeka desteğini benimser.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yeniden kalibrasyon yok, yapay zeka destekli işi insan yazımı kodla aynı ele almak | Basit, süreç değişikliği yok | Belirli, kanıtın düşündürdüğü yüksek risk profilini kaçırır |
| Tüm yapay zeka destekli koda toptan, kalıcı artırılmış inceleme | Kısa vadeli risk azaltmayı en üst düzeye çıkarır | Gerçekten değerli bir yetenek üzerinde sürdürülemez vergi; biriken kanıtı yok sayar |
| Zamanla sınırlı, kanıta dayalı yeniden kalibrasyon | Risk yönetimini sürdürülebilir benimsemeyle dengeler | İncelemeyi ne zaman gevşeteceğini bilmek için sürekli ölçüm disiplini (konu 7.2) gerektirir |
| "Doğru görünüyor" hatalarına dirençli tespit yöntemlerine yatırım | Belirli yeni riski doğrudan ve kalıcı biçimde ele alır | Mutasyon ve özellik tabanlı test altyapısına baştan yatırım gerektirir |

Merkezi gerilim, **ihtiyat ile benimseme hızı** arasındadır. Aşırı, kalıcı ihtiyat,
yapay zeka destekli geliştirmenin gerçek değerinin büyük bölümünü heba eder;
yetersiz ihtiyat, bu konunun adlandırdığı metrik şişmesi ve kalite seyrelmesi
riskini, tespitten önce potansiyel olarak büyük ölçekte taşır. Gerilimi bu konunun
önerdiği zamanla sınırlı, kanıta dayalı yaklaşımla çözün: şimdi artırılmış inceleme,
konu 7.2'nin ölçüm disiplininden gerçek kanıt biriktikçe aşağı ya da yukarı
kalibre edilir; ne kalıcı bir toptan politika ne de hiçbir şeyin değişmediğine dair
sorgulanmamış bir varsayım.

## Ekibinizle tartışılacak sorular

1. **Yapay zeka ağırlıklı iş için değişim başarısızlık oranı ya da kaçan hata
   eşiklerimizi yeniden kalibre ettik mi, yoksa yapay zeka öncesi dönemin
   eşiklerini değiştirmeden mi uyguluyoruz?** Değişmediyse, bunun bilinçli,
   kanıta dayalı bir karar mı yoksa soruya dikkat edilmemesi mi olduğunu tartışın.

2. **Mutasyon testi gibi, bir inceleyenin görsel örüntü eşleştirmesine dayanmayan
   tespit yöntemlerimiz var mı, yoksa inceleme sürecimiz tamamen insan gözlerinin
   kodun "doğru görünüp görünmediğini" değerlendirmesine mi bağlı?** Bu konunun
   belirlediği özel zayıflık budur; mevcut tespit yeteneğinizi buna karşı dürüstçe
   değerlendirin.

3. **Metrik şişmesi kodlama aşamasının ötesine, pull request ya da dağıtım
   metriklerimize yayıldı mı ve yayılmış olsa şu anda fark eder miydik?** Yalnızca
   en bariz çıkış noktasını değil, tüm cycle time zincirinizi bu yayılma örüntüsü
   için gözden geçirin.

4. **Yapay zeka destekli koda yönelik mevcut artırılmış incelememiz, varsa, biriken
   kanıta mı dayanıyor, yoksa hiç yeniden gözden geçirilmemiş, sorgulanmamış,
   süresiz bir varsayılan mı?** Mevcut korkulukları gevşetmeyi ya da daha da
   sıkılaştırmayı düşünmeden önce hangi kanıtın birikmesi gerektiğini tartışın.

5. **Bu konunun risklerini dahili olarak nasıl iletiyoruz: ihtiyat ve orantılı
   korkuluklar için bir gerekçe olarak mı, yoksa genel olarak yapay zeka
   benimsemeye karşı örtük bir argüman olarak mı?** Bu konuşmanın ekibinizde
   gerçekte nasıl karşılandığı konusunda dürüst olun; toptan direniş olarak alınan
   bir mesaj, bu konunun önerdiği orantılı, kanıta dayalı yanıtı nadiren üretir.

6. **Kuruluşumuzun, ancak önemli bir ölçeğe ulaştıktan sonra hem metrik şişmesinin
   hem de kalite seyrelmesinin eşzamanlı ve fark edilmeden yaşandığını keşfetmesi
   neye benzerdi?** Bu somut, biraz rahatsız edici senaryo, bu konunun
   korkuluklarının önlemek için kurulduğu belirli başarısızlık olarak açıkça
   adlandırmaya değer.

## Sektörel bakış

**Startup.** Sınırlı inceleme kapasitesiyle hızlı benimseme, bu konunun risklerini
küçük bir ekip için özellikle keskin kılar; "doğru görünüyor" tespit sorunu, daha az
ve daha az uzmanlaşmış inceleyenle yakalanması daha zordur. Kapsamlı kapsam henüz
mümkün olmasa bile, en kritik kod yollarınızda en azından hafif bir mutasyon
testine erkenden yatırım yapın.

**Küçük işletme.** Biçimsel yeniden kalibrasyon süreçleri bu ölçekte muhtemelen
gereksizdir; ama yapay zeka üretimi kodun, gerçekte olduğundan daha güvenle doğru
görünme eğiliminde olduğu için olağandan biraz daha şüpheci okunmayı hak ettiğine
dair basit, açık bir farkındalık hiçbir şeye mal olmaz ve bu konunun temel kaygısını
doğrudan ele alır.

**Kurumsal.** Metrik şişmesi ve kalite seyrelmesinin ikisi de ölçekte belirgin
biçimde bileşik hale gelir; çünkü düzinelerce ekipte eşzamanlı yanlış bir sinyal ya
da fark edilmemiş bir kalite sorunu, tek bir ekipteki aynı sorundan çok daha
sonuç doğurucu ve çözülmesi çok daha zordur. Kuruluş çapında tespit yeteneği
yükseltmelerine (mutasyon testi altyapısı, özellik tabanlı test benimseme) ve bu
konunun önerdiği zamanla sınırlı yeniden kalibrasyon disiplinine, merkezi olarak
izlenerek, bilinçli biçimde yatırım yapın.

**Kamu.** Fark edilmemiş kalite seyrelmesinin sonuçları, kamu sistemlerinde yaygın
olan düzenlemeye tabi, güvenlik açısından kritik ya da kamu güveni bağlamlarında
özellikle ciddidir. Yüksek sonuçlu kod yollarındaki yapay zeka destekli
değişikliklere özellikle artırılmış, kanıta dayalı inceleme uygulayın (konu 6.4'ün
maruziyet ve istismar edilebilirlik ağırlıklandırma mantığı burada benzer biçimde
geçerlidir) ve bir denetçiye ya da gözetim kuruluna, bu belirli riske karşı tam
olarak hangi tespit yeteneğinin bulunduğunu göstermeye hazır olun.

## Örnekler

**Kurumsal.** Bir sigorta şirketinin hasar işleme mühendislik ekibi yapay zeka
kodlama desteğini geniş çapta benimsedi ve altı ay sonra, özellikle karmaşık koşullu
mantıkta kaçan hatalarda kademeli ama ölçülebilir bir artış fark etti; bu, ince
biçimde yanlış uç durum işlemenin yapay zeka araçlarınca makul biçimde üretilmesinin
en kolay, bir inceleyenin yalnızca gözle yakalamasının en zor olduğu kod türüdür.
Bir soruşturma, bu konunun tarif ettiği "doğru görünüyor" örüntüsünü doğruladı:
hatalı kod tutarlı biçimde deyimsel, tanıdık görünümlü örüntüler kullanmıştı ve
bunlar, bariz biçimde olağandışı ya da beceriksiz bir insan yazımı kod parçasının
görebileceği türden bir incelemeyi tetiklemeden incelemeyi geçmişti. Ekibin yanıtı,
yüzey makullüğü sorununa dirençli bir tespit yöntemi olan mutasyon testini şirket
genelinde özellikle karmaşık koşullu mantığa yöneltti ve iki çeyrek içinde bu özel
hata kategorisinde önemli bir azalma ölçtü.

**Kamu.** Hesaplama motoru bakım işinin bir alt kümesi için yapay zeka destekli
geliştirmeyi pilot olarak deneyen bir vergi idaresi, bu konunun önerdiği zamanla
sınırlı yeniden kalibrasyon disiplinini baştan kurdu: özellikle hesaplama mantığına
yönelik yapay zeka destekli değişiklikler için artırılmış inceleme şartlarıyla
açık bir altı aylık kanıt toplama dönemi belirledi. Toplanan kanıt, iyi kapsamlı,
dar değişikliklerde hata oranında istatistiksel olarak anlamlı bir fark göstermedi,
ancak daha geniş, mimari açıdan daha önemli yapay zeka destekli değişiklikler için
yüksek bir riski doğruladı. İdarenin ortaya çıkan politikası, dar değişiklik
kategorisi için artırılmış incelemeyi gevşetirken, mimari açıdan önemli değişiklikler
için sürdürdü, hatta güçlendirdi; "yeniden kalibrasyon yok" ya da "toptan kalıcı
inceleme" uçlarının hiçbirinin üretemeyeceği orantılı, kanıta dayalı bir sonuç.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Metrik şişmesine ve kalite seyrelmesine karşı bilinçli biçimde korunmanın getirisi,
yukarıdaki sigorta şirketi örneğinin gösterdiği senaryodan kaçınmaktır: fark
edilmemiş, kademeli olarak bileşik hale gelen, sonradan keşfedilip düzeltilmesi,
tespit yatırımının, yani en yüksek riskli koda özel hedeflenen mutasyon testi
altyapısının, proaktif olarak yaratacağı maliyetten çok daha pahalı bir kalite
sorunu.

Toplam sahip olma maliyeti, bu konunun önerdiği tespit yeteneği yatırımını ve ne
kalıcı şüphe ne de kalıcı ilgisizlik olan uçlardan biri yerine kanıta dayalı
yeniden kalibrasyonun süregelen disiplinini içerir. Bu maliyet, bu araçların kod
üretme biçiminin doğası gereği kuruluşun zaten uygulamada olan inceleme süreçlerine
doğru görünecek biçimde tasarlandığı için tespit edilmeden kalan önemli, ölçekli bir
kalite sorununun riskine kıyasla ılımlı ve zamanla sınırlıdır.

## Anti-desenler ve tuzaklar

- **Yapay zeka öncesi dönemin eşiklerini ve tespit yöntemlerini değiştirmeden
  uygulamak:** belirli, kanıtın düşündürdüğü yüksek risk profilini kaçırır.
- **Yapay zeka üretimi kod için tamamen insan örüntü eşleştirmeli incelemeye
  güvenmek:** bu konunun belirlediği "doğru görünüyor" sorununa özellikle açıktır.
- **Metrik şişmesinin kod üretim noktasının ötesine yayılmasını kaçırmak:** yanlış bir
  sinyal fark edilmeden tüm teslimat hattına yayılabilir.
- **Kanıta dayalı yeniden kalibrasyon olmadan kalıcı, sorgulanmamış toptan inceleme:**
  yapay zeka destekli geliştirmenin gerçek değerinin büyük bölümünü sürdürülemez
  biçimde heba eder.
- **Bu konunun risklerini orantılı risk yönetimi yerine yapay zeka benimsemeye
  toptan direniş olarak iletmek:** hem güvenliği hem benimsemeyi zayıflatır.
- **Bu yeni risk profiline özel hedeflenmiş tespit yeteneği yatırımı yapmamak:**
  kuruluşu, bu konunun ona karşı özellikle zayıf olduğunu gösterdiği inceleme
  yöntemlerine bağımlı bırakır.

## Olgunluk modeli

- **Seviye 1, Başlatma:** Yapay zeka destekli geliştirmeye özgü metrik şişmesi ya da
  kalite seyrelmesi riskine dair farkındalık yoktur; mevcut korkuluklar ve tespit
  yöntemleri değiştirilmeden uygulanır.
- **Seviye 2, Geliştirme:** Bir miktar farkındalık vardır, ama yeniden kalibrasyon
  gelişigüzeldir ve bu riske özgü tespit yeteneği yatırımı yapılmamıştır.
- **Seviye 3, Standartlaştırma:** Yeniden kalibre edilmiş eşikler ve "doğru
  görünüyor" sorununa dirençli tespit yöntemleri (mutasyon ve özellik tabanlı test)
  yapay zeka destekli işe tutarlı biçimde uygulanır.
- **Seviye 4, Yönetme:** Zamanla sınırlı, kanıta dayalı bir yeniden kalibrasyon
  disiplini incelemeyi biriken verilere göre etkin biçimde ayarlar ve metrik şişmesi
  yayılımı tüm hat boyunca etkin biçimde izlenir.
- **Seviye 5, Orkestrasyon:** Kuruluş, yapay zeka destekli geliştirmeye karşı, şeffaf
  biçimde iletilen, ne aşırı ihtiyatla değerini heba eden ne de kuruluşu fark
  edilmemiş kalite seyrelmesine maruz bırakan olgun, orantılı, sürekli evrilen bir
  risk yönetimi duruşuna sahiptir.

## Tartışma önerileri

1. Kendi yapay zeka destekli kodumuzda "doğru görünüyor" hata örüntüsüne dair erken bir kanıt gördük mü?
2. Bu konunun belirli riskini bizim için en doğrudan hangi tespit yöntemi ele alırdı?
3. Yapay zeka desteğinden kaynaklanan metrik şişmesi, aşağı akış hat metriklerimizin herhangi birine yayıldı mı?
4. Yapay zeka destekli koda yönelik mevcut incelememiz kanıta mı dayanıyor, yoksa sorgulanmamış bir varsayılan mı?
5. Bu konunun rehberliği ekibimiz tarafından gerçekte nasıl karşılanıyor: risk yönetimi olarak mı, yoksa yapay zeka benimsemeye direniş olarak mı?

## Temel çıkarımlar

- Metrik şişmesi ve kalite seyrelmesi, **bu kitabın zaten adlandırdığı risklerin
  yoğunlaşmış sürümleridir**; mevcut korkulukların daha çok çalışmasını gerektirir,
  tümüyle yeni çerçeveler değil.
- Yapay zeka üretimi kodun **"doğru görünme"** eğilimi, geleneksel, örüntü
  eşleştirmeli insan kod incelemesini özellikle zayıflatır.
- **Yüzey makullüğüne dirençli tespit yöntemlerine**, özellikle mutasyon ve özellik
  tabanlı teste yatırım yapın.
- **Zamanla sınırlı, kanıta dayalı bir yeniden kalibrasyon** duruşu uygulayın; kalıcı
  toptan şüphe ya da kalıcı sorgulanmamış güven değil.
- **Bu riski, yapay zeka benimsemeye karşı bir argüman olarak değil, orantılı risk
  yönetimi olarak iletin;** hem güvenliği hem sürdürülebilir kullanımı destekler.

## Kaynaklar ve ileri okuma

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (bu konunun yeni bir risk kategorisine uyguladığı eşlenmiş
  hız ve kararlılık disiplini).
- Jia, Yue ve Mark Harman, "An Analysis and Survey of the Development of
  Mutation Testing," *IEEE Transactions on Software Engineering* (2011):
  bu konunun orantısız ölçüde değerli hale geldiğini savunduğu tespit yöntemi.
- GitHub'ın yapay zeka ile eşli programlama ve geliştirici verimliliği üzerine
  araştırması (yapay zeka destekli geliştirme sonuçları ve riski üzerine sektör
  verisi).
- *The Tyranny of Metrics*, Jerry Z. Muller (metrik takıntısı ve manipülasyon riski;
  bu konunun adlandırdığı metrik şişmesi kaygısıyla doğrudan ilgili).
