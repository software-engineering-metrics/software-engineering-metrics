# 7.4 Yeni kutup yıldızı olarak sonuç telemetrisi

## Genel bakış ve motivasyon

Bu konu Bölüm 7'yi kapatır ve bir anlamda bu kitabın konu 1.3'ten beri kurduğu
savı da tek ve doğrudan bir iddiayla kapatır: üretken yapay zeka ham çıktıyı
ucuzlattıkça, **sonuç [telemetrisi](https://en.wikipedia.org/wiki/Telemetry)**,
yani etkinliğin ya da çıktının değil gerçek sonuçların sürekli, araçlarla
donatılmış ölçümü, birkaç iyi uygulamadan biri olmaktan çıkar ve bir metrik
programının üzerine kurulması gereken düzenleyici ilke haline gelir. Bu, burada
ilk kez ortaya atılan yeni bir fikir değildir. Bu, konu 1.3'ün kitabın açılış
bölümünde sunduğu fikirdir; şimdi, her alternatifi eskisinden daha tehlikeli kılan
bir teknoloji değişimine yalnızca tercih edilir değil, gerekli bir yanıt olarak
sunulmaktadır.

Mantık doğrudandır. Üretken yapay zekadan önce çıktı hacmi, emek için ve gevşek
biçimde değer için kusurlu ama değersiz olmayan bir vekildi; daha fazla özellik
yayımlayan bir ekip, bu iş her zaman doğru iş olmasa bile, en azından daha fazla
iş yapmıştı. Üretken yapay zeka bu gevşek bağı bile koparır: çıktı hacmi artık
emeği güvenilir biçimde göstermez, çünkü bir araç onu saniyeler içinde üretebilir;
değeri ise kesinlikle göstermez, çünkü konu 7.3, şişirilmiş çıktının bozulan
kaliteyle bir arada var olabileceğini gösterdi. Bu değişimden bozulmadan çıkan
metrikler, kitabın açılış konularından beri üzerine inşa etmeyi vurguladığı
metriklerdir: kaçan hata oranı (konu 5.1), özellik benimsenmesi (konu 5.2), müşteri
ve iş sonuçları (konu 5.3), güvenilirlik (Bölüm 6) ve geliştirici iyi oluşu
(Bölüm 3). Bunların hiçbiri altta yatan kodun nasıl üretildiğine bağlı değildir;
hepsi, bunun sonucunda gerçekte ne olduğunu ölçer.

Büyük ekipler için bu konunun savı, bir metrik programının bundan sonra nasıl
kurulması ve yeniden kurulması gerektiği açısından doğrudan, pratik sonuçlar taşır.
Mühendislik gösterge panellerini yapay zeka benimsemesi ışığında yeniden
tasarlayan kurumsal kuruluşlar, yatırımı özellikle bu konunun tarif ettiği sonuç
telemetrisi altyapısına doğru ağırlıklandırmalıdır. Hem yapay zeka araçlarını hem de
içinde yer aldıkları daha geniş teknoloji programlarını değerlendiren kamu
kuruluşları, her ikisini de bu konunun, her güvenilir ve geleceğe dayanıklı
değerlendirmenin taban çizgisi olarak önerdiği aynı sonuç telemetrisi standardına
tabi tutmalıdır.

## Temel ilkeler

- **Çıktı ucuzladığında sonuç telemetrisi yalnızca tercih edilir değil, gerekli hale
  gelir.** Bu, konu 1.3'ün kurucu ilkesidir; şimdi özlem değil, acildir.
- **Bu değişimden sağ çıkan metrikler, bu kitabın baştan beri üzerine kurduğu
  metriklerdir:** kaçan hatalar, benimseme, iş sonuçları, güvenilirlik ve iyi oluş.
- **Öncelikle çıktı metrikleri etrafında kurulmuş bir metrik programı artık
  yalnızca eniyilenmemiş bir seçim değil, bir yüktür.** Çıktı metrikleri ölçekte ucuz
  ve hızlı biçimde şişirilebilir.
- **Sonuç telemetrisi gerçek yatırım gerektirir:** araçlarla donatma, daha yavaş
  sinyal için sabır ve daha hızlı, daha ucuz ama artık güvenilmez çıktı
  metriklerine yönelen çekime direnecek kurumsal disiplin.
- **Bu ilke herhangi bir yapay zeka aracından ya da satıcıdan daha uzun ömürlüdür.**
  Çıktının ne anlama geldiğindeki kalıcı bir değişime kalıcı bir yanıttır, geçici
  bir eğilime yönelik geçici bir ayar değil.

## Öneriler

### Metrik yatırım oranınızı denetleyin: sonuç telemetrisi ile çıktı izleme

Mevcut metrik altyapınızın, araçlarla donatma çabanızın, gösterge paneli alanınızın,
inceleme toplantısı zamanınızın kabaca ne kadarının sonuç metriklerine (Bölüm 5,
Bölüm 6, Bölüm 3'ten geliştirici iyi oluşu) karşı çıktı ve etkinlik metriklerine
(dağıtım sayısı, commit hacmi, pull request throughput'u) gittiğini hesaplayın.
Çıktı izleme baskınsa, bu oranın kendisi artık bu konunun savı ışığında bir yüktür
ve onu yeniden dengelemek, bu konunun önerdiği tek en yüksek kaldıraçlı
değişikliktir.

### Sonuç telemetrisi altyapısına bilinçli olarak, birinci sınıf bir mühendislik yatırımı olarak yatırım yapın

Sonuç ölçümü, özellik benimseme izleme, iş sonucu ilişkilendirme (konu 5.3),
güvenilirlik araçlarla donatma (Bölüm 6) gerçek, sürekli mühendislik yatırımı
gerektirir; birçok kuruluş, bugün birçok gösterge panelinde baskın olan görece ucuz
ve kolay çıktı metriklerine kıyasla bunu tarihsel olarak yetersiz kaynakla
karşılamıştır. Bu altyapı yatırımına, bu kitabın başka herhangi bir önemli
mühendislik yeteneğine uyguladığı aynı ciddiyetle yaklaşın; yapay zeka araç
yatırımının kendisinin arkasında ikincil bir kaygı olarak değil.

### Sonuç telemetrisinin daha yavaş olduğunu kabul edin ve iletin, bu sabrı kuruluşunuzun beklentilerine yerleştirin

Sonuç metrikleri, neredeyse doğaları gereği çıktı metriklerinden daha gecikmeli ve
daha gürültülüdür (konu 1.3'ün öncü ve gecikmeli ayrımı, konu 1.6'nın istatistiksel
ihtiyatı). Bir çıktı sayısının yükselişini izlemenin hızlı, tatmin edici geri
bildirimine alışmış bir kuruluşun, sonuç telemetrisinin sağladığı daha yavaş, daha
dürüst sinyal için gerçek sabır geliştirmesi gerekir; liderlik de çabuk sonuç
gösterme baskısı altında refleksle daha hızlı, artık güvenilmez alternatife
uzanmak yerine bu sabrı etkin biçimde iletmeli ve örnek olmalıdır.

### Bu değişimi yalnızca sonuç metriklerini yanlarına eklemek için değil, gerçekten eskimiş çıktı metriklerini emekliye ayırmak için fırsat olarak kullanın

Konu 1.1'in, hak ettikleri yeri artık kazanmayan metrikleri emekliye ayırma
disiplinini izleyerek, bu anı, mevcut gösterge panelini değiştirmeden üzerine sonuç
metrikleri eklemek yerine, bu değişimin özellikle değersizleştirdiği çıktı ve
etkinlik metriklerini kaldırmak için bilinçli bir fırsat olarak kullanın. Her eski
çıktı metriğini tutarken yenilerini sonuç metrikleriyle donatan bir gösterge paneli
gerçekten iyileşmek yerine şişer.

### Sonuç telemetrisi yatırımını, herhangi bir yapay zeka aracından ya da satıcı ilişkisinden bağımsız, kalıcı olarak ele alın

Sonuç telemetrisi altyapısını, kuruluşunuzun bu yıl kullandığı yapay zeka aracına
özgü bir tepki olarak değil, kalıcı bir kurumsal yetenek olarak kurun. Bu ilke ve
çağırdığı altyapı, herhangi bir belirli satıcı ilişkisinden ya da araç neslinden
uzun ömürlü olacaktır; onu kalıcı bir yetenek olarak kurmak, metrik programınızı
mevcut kadar bir sonraki teknoloji değişimine karşı da korur.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Çıktı metriklerinin baskın olduğu gösterge paneli | Hızlı, ucuz geri bildirim; çoğu kuruluşa tanıdık | Üretken yapay zekanın çıktı maliyeti üzerindeki etkisi göz önüne alındığında artık etkin biçimde güvenilmez |
| Sonuç telemetrisinin baskın olduğu gösterge paneli | Bu değişime dayanıklı; gerçekten önemli olanı ölçer | Daha yavaş, daha gürültülü sinyal; gerçek araçlarla donatma yatırımı gerektirir |
| Değiştirilmemiş çıktı metriklerinin yanına sonuç metrikleri eklemek | Kademeli, daha az kesintili | Gerçek iyileşme yerine gösterge paneli şişmesi üretir |
| Sonuç telemetrisine doğru tam, bilinçli yeniden dengeleme | Değişimi doğrudan ve eksiksiz ele alır | En önemli kurumsal ve yatırım değişikliğini gerektirir |

Merkezi gerilim, gerçek anlamda, bu kitabın konu 1.3'te açıldığı gerilimle aynıdır;
şimdi en acil biçimine keskinleştirilmiştir: **hızlı, tanıdık geri bildirim ile
daha yavaş, dürüst sinyal.** Çıktı metrikleri her zaman üretmesi daha kolay ve
hızlıydı; bu konunun savı, üretken yapay zekanın bu ödünleşimi yalnızca eniyilenmemiş
olmaktan etkin biçimde tehlikeli olmaya taşıdığıdır. Gerilimi, bu kitabın açılış
konusundan beri önerdiği gibi çözün: kararlı biçimde sonuçlara doğru ağırlıklandırın,
gerçek değer ölçümüyle gelen daha yavaş geri bildirimi kabul edin ve bu yavaş geri
bildirimin rahatsızlığını, yalnızca kolay olan yerine gerçek bir şeyi ölçmenin dürüst
bedeli olarak görün.

## Ekibinizle tartışılacak sorular

1. **Mevcut metrik altyapımızın ve gösterge paneli dikkatimizin ne kadarı sonuç
   metriklerine, ne kadarı çıktı ve etkinlik metriklerine gidiyor?** Bu oranı
   dürüstçe hesaplayın; ilk kez değerlendirildiğinde çoğu kuruluş bunu tahmin
   ettiğinden daha çıktı ağırlıklı bulur.

2. **Daha hızlı, daha ucuz çıktı izleme lehine hangi belirli sonuç telemetrisi
   altyapı yatırımını erteledik?** Somut bir örnek verin, özellik benimseme araçla
   donatma, iş sonucu ilişkilendirme araçları ve bunu gerçekten kurmak için ne
   gerektiğini tartışın.

3. **Kuruluşumuz sonuç telemetrisinin daha yavaş geri bildirimi için gerçek sabır
   geliştirdi mi, yoksa çabuk sonuç baskısı bizi sürekli daha hızlı ama artık
   güvenilmez çıktı metriklerine mi geri çekiyor?** Kendi son raporlamanızda ve
   inceleme toplantılarınızda bu örüntü konusunda dürüst olun.

4. **Mevcut gösterge panelimizdeki hangi çıktı ya da etkinlik metriği, bu konunun savı
   artık ona özellikle uygulandığına göre, emekliye ayrılmak için gerçek bir
   adaydır?** En az birini belirleyin ve yalnızca bir açık bırakmak yerine neyin onun
   yerini alması gerektiğini tartışın.

5. **Yapay zeka araç satıcımız ya da yapay zeka kodlama asistanlarının mevcut nesli
   önümüzdeki yıl çarpıcı biçimde değişse, metrik programımız yine de ayakta kalır
   mıydı?** Bu, sonuç telemetrisi yatırımınızın gerçekten kalıcı, kalıcı bir yetenek
   olarak mı kurulduğunu, yoksa yalnızca mevcut araç durumunuza özgü bir tepki mi
   olduğunu sınar.

6. **Kuruluşumuzun bu konunun savına tam olarak bağlanması, metrik yatırımı
   kararlarımızı kademeli değil kararlı biçimde sonuçlara doğru yeniden dengelemesi
   neye benzerdi?** Bunu soyut bırakmak yerine somut biçimde çizin; mevcut durum ile
   bu vizyon arasındaki fark, kuruluşunuzun bu değişime yanıt vermek için gerçek
   yol haritasıdır.

## Sektörel bakış

**Startup.** Sonuç telemetrisini, çıktı metriklerinin derinlemesine yerleşmiş bir
kurumsal alışkanlığa dönüşme şansı bulmadan önce erken kurmak, onu sonradan
uyarlamaktan gerçekten daha kolaydır. Yapay zeka kodlama desteğini baştan benimseyen
genç bir şirket, mevcut çıktı metriği baskın bir kültürü geri sarmak zorunda kalmadan
metrik programını önce sonuç olarak kurma gerçek fırsatına sahiptir.

**Küçük işletme.** Sonuç telemetrisi yatırımını, bu kitabın kapsadığı her sonuç
kategorisinde kapsamlı araçla donatma denemek yerine, hayatta kalmayı ve büyümeyi en
doğrudan yansıtan tek sonuç metriğine odaklayın (konu 5.3). Mütevazı, odaklı bir
sonuç telemetrisi yatırımı, bu konunun savının artık özellikle değersizleştirdiği
kapsamlı bir çıktı metriği gösterge panelinden daha iyidir.

**Kurumsal.** Bu konunun önerdiği yeniden dengeleme bu ölçekte gerçek, önemli bir
kurumsal değişikliktir ve muhtemelen yönetici desteği ile çok çeyrekli bir yatırım
planı gerektirir. Bunu bu kitabın kapsadığı başka herhangi bir büyük altyapı yatırımı
kadar ciddiye alın ve yatırım için dahili gerekçeyi kurmak amacıyla konu 7.1 ve
konu 7.3'teki belirli, somut örnekleri, yani yeniden dengelenmiş bir gösterge
panelinin daha erken yakalayacağı metrik şişmesi ve kalite seyrelmesini kullanın.

**Kamu.** Öncelikle teslimat ve çıktı metrikleriyle (yayımlanan özellikler, programa
uygunluk) değerlendirilen kamu teknoloji programları, konu 5.3'ün tarif ettiği tam
şüpheciliğe giderek daha açıktır; bu konunun savı, yapay zeka araç benimsemesi kamu
kuruluşlarının eleman aldığı ve karşılaştırıldığı daha geniş sektöre yayıldıkça bu
açıklığı daha da keskinleştirir. Sonuç telemetrisini kamuya raporlamanın ve bütçe
gerekçesinin birincil temeli olarak kurun ve kuruluşunuzu bu değişimin gerisinde
değil önünde konumlandırın.

## Örnekler

**Kurumsal.** Bir yazılım şirketinin mühendislik yönetimi, doğrudan konu 7.1'in
finansal teknoloji örneğinde anlatılan metrik şişmesinden kıl payı kurtulmanın
tetiklemesiyle, metrik yatırım oranının tam bir denetimini yürüttü ve gösterge paneli
alanının ve araçla donatma çabasının yaklaşık yüzde 70'inin çıktı ve etkinlik
metriklerine ayrıldığını, sonuç telemetrisine ise yalnızca mütevazı, tutarsız yatırım
yapıldığını buldu. Takip eden yıl boyunca şirket bu oranı bilinçli olarak yeniden
dengeledi: konu 7.1'in denetiminin en açıkta olarak işaretlediği birkaç çıktı
metriğini emekliye ayırdı ve açılan kapasiteyi özellik benimseme ve iş sonucu
araçlarla donatmaya yatırdı (konular 5.2, 5.3). Sonraki yılın yönetim kurulu
toplantısında sunulan ortaya çıkan gösterge paneli, daha önce şüpheci olan aynı
yönetim kurulu üyesi tarafından, onun yerini aldığı çıktı ağırlıklı sürümden anlamlı
ölçüde daha güvenilir bir mühendislik yatırımı değerlendirme temeli olarak açıkça
övüldü.

**Kamu.** Önceki çıktı metriği baskın gösterge paneli süregelen yasama şüpheciliğini
çektiği için yeni bir mühendislik metrik programını sıfırdan kuran ulusal bir dijital
hizmetler kurumu, bu konunun ilkesini kurucu tasarım kararı olarak açıkça benimsedi:
sonuç telemetrisi, yani vatandaş bekleme süresi, hizmet tamamlama oranı, kaçan hata
oranı, tüm kamu raporlamasının birincil temeli olacak; çıktı ve teslimat metrikleri
yalnızca dahili tanı araçları olarak tutulacak, dışarıya sunulan başlık kanıtı asla
olmayacaktı. Bu bölümün tarif ettiği üretken yapay zeka değişimi ışığında bilinçli
olarak kurulan bu önce sonuç tasarımı, kurumun raporlamasına, daha önceki bir neslin
çıktı metriği varsayımları etrafında kurulmuş selefi programın asla ulaşamadığı
kalıcılık ve gözetim komitesi nezdinde itibar kazandırdı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Sonuç telemetrisine kararlılıkla bağlanmanın getirisi, çıktı gelecekteki bir teknoloji
değişimiyle yeniden ucuzladığında bir başka önemli elden geçirme gerektiren bir
program yerine, mevcut teknoloji değişiminden ve sonrasında gelecek her şeyden güvenilir
ve itibarlı çıkan bir metrik programıdır. Yukarıdaki yazılım şirketi örneği bunu somut
olarak gösterir: yeniden dengelenmiş gösterge paneli, önceki çıktı ağırlıklı sürümün
gerçek risk altına soktuğu itibarı doğrudan onardı.

Toplam sahip olma maliyeti, bu konunun önerdiği sonuç telemetrisi altyapı yatırımıdır;
büyük bir kuruluş için gerçekten önemli, çok çeyrekli bir iştir ve çıktı ucuzlamaya
devam ettikçe giderek daha az güvenilir hale gelen bir metrik programının kalıcı,
uzun vadeli riskine karşı tartılır. Bu, kitabın sizden hafife almanızı istediği bir
maliyet değildir; kitabın bu son bölümünün sizden istediği ciddiyetle konu 1.3'ün
kurucu savını ele almanın doğrudan, gerekli sonucudur.

## Anti-desenler ve tuzaklar

- **Bu değişimi gerçek yeniden dengeleme yerine yalnızca kademeli ayar gerektiren bir
  şey olarak görmek:** üretken yapay zekanın çıktı metriklerinin anlamına getirdiği
  değişimin ölçeğini hafife alır.
- **Değiştirilmemiş, hâlâ baskın bir çıktı metrikleri setinin yanına sonuç metrikleri
  eklemek:** bu konunun savunduğu gerçek yeniden dengeleme yerine gösterge paneli
  şişmesi üretir.
- **Sonuç telemetrisi yatırımını kalıcı bir yetenek olarak değil, belirli bir mevcut
  yapay zeka aracına tepki olarak kurmak:** kuruluşu bir sonraki teknoloji değişimine
  aynı biçimde açık bırakır.
- **Sonuç telemetrisinin daha yavaş geri bildirimi için kurumsal sabır kuramamak:**
  çabuk sonuç baskısı altında daha hızlı ama artık güvenilmez çıktı metriklerine geri
  dönme riski taşır.
- **Çıktı metriklerini gerçek bir sonuç telemetrisi karşılığı olmadan emekliye
  ayırmak:** gerçek iyileşme yerine bir ölçüm açığı bırakır.
- **Bu değişimi paydaşlara bu kitabın kurucu ilkesinin gerçekleşmesi olarak değil,
  yalnızca yapay zeka araçlarına bir yanıt olarak sunmak:** savın kalıcılığını ve
  genelliğini hafife alır.

## Olgunluk modeli

- **Seviye 1, Başlatma:** Gösterge paneli çıktı metriklerinin baskın olduğu halde
  kalır; bu bölümün tarif ettiği değişime bilinçli bir yanıt yoktur.
- **Seviye 2, Geliştirme:** Bazı sonuç metrikleri eklenmiştir, ama genel yatırım oranı
  çıktı ağırlıklı kalır ve hiçbir metrik bilinçli olarak emekliye ayrılmamıştır.
- **Seviye 3, Standartlaştırma:** Sonuç telemetrisine doğru bilinçli bir denetim ve
  yeniden dengeleme yürütülmüş, gerçekten eskimiş çıktı metrikleri emekliye ayrılmıştır,
  kuruluş genelinde.
- **Seviye 4, Yönetme:** Sonuç telemetrisi altyapısı birinci sınıf, sürekli bir
  mühendislik yatırımı olarak ele alınır ve daha yavaş geri bildirimi için kurumsal
  sabır etkin biçimde geliştirilir ve korunur.
- **Seviye 5, Orkestrasyon:** Kuruluşun metrik programı, kalıcı bir tasarım ilkesi
  olarak sonuç telemetrisi öncülüdür; mevcut teknoloji değişimi boyunca dayanıklılığı
  kanıtlanmıştır ve bundan sonra gelecek her şey boyunca dayanıklı kalmak üzere açıkça
  kurulmuştur.

## Tartışma önerileri

1. Sonuç metriği ile çıktı metriği yatırımının gerçek mevcut oranı nedir?
2. Bu çeyrekte hangi tek çıktı metriğini emekliye ayırmalıyız ve onun yerini hangi sonuç metriği almalı?
3. Kurumsal sabırsızlık bizi yakın zamanda nerede daha hızlı ama daha az güvenilir çıktı metriklerine geri çekti?
4. Sonuç telemetrisi yatırımımız kalıcı mı, yoksa özellikle mevcut yapay zeka araç durumumuza mı bağlı?
5. Kademeli ayar yerine bu konunun savına tam olarak bağlanmak için ne gerekirdi?

## Temel çıkarımlar

- Üretken yapay zeka çıktıyı ucuzlattığında sonuç telemetrisi **yalnızca tercih edilir
  değil, gerekli** hale gelir; bu, konu 1.3'ün kurucu ilkesidir, şimdi acil.
- **Bu değişimden sağ çıkan** metrikler, bu kitabın baştan beri üzerine kurduğu
  metriklerdir: kaçan hatalar, benimseme, iş sonuçları, güvenilirlik ve iyi oluş.
- **Metrik yatırım oranınızı denetleyin ve yeniden dengeleyin;** yalnızca sonuç
  metriklerini yanlarına eklemek yerine, gerçekten eskimiş çıktı metriklerini
  emekliye ayırın.
- **Sonuç telemetrisinin daha yavaş geri bildirimi için** kurumsal sabır geliştirin
  ve çabuk sonuç baskısı altında daha hızlı ama artık güvenilmez çıktı metriklerine
  geri çekilmeye direnin.
- Bu yatırımı herhangi bir yapay zeka aracından ya da satıcıdan bağımsız, **kalıcı bir
  yetenek** olarak kurun; metrik programınızı mevcut teknoloji değişimine olduğu kadar
  gelecekteki değişimlere karşı da korur.

## Kaynaklar ve ileri okuma

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (bu kitabın tamamının ve Bölüm 7'nin bu kapanış konusunun
  üzerine kurulduğu sonuç temelli ölçüm temeli).
- *Lean Analytics*, Alistair Croll ve Benjamin Yoskovitz (bu konunun savının yapay
  zeka çağına genişlettiği eyleme geçirilebilir ve gösteriş metriği ayrımı).
- *The Innovator's Dilemma*, Clayton M. Christensen (yerleşik metriklerin ve
  uygulamaların yıkıcı bir teknoloji değişimi altında yüke dönüşmesinin genel
  örüntüsü).
- *Measure What Matters*, John Doerr (bir metrik programı için düzenleyici ilke olarak
  sonuç odaklı hedef belirleme; bu konunun artık istisna değil varsayılan olması
  gerektiğini savunduğu model).
