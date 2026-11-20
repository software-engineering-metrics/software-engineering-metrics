# 2.10 DORA metrikleri çerçevesi

## Genel bakış ve motivasyon

**[DORA metrikleri](https://dora.dev/guides/dora-metrics/)**, [DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment programından gelir. Bu program, sonradan Nicole Forsgren, Jez Humble ve Gene Kim'in *Accelerate* kitabıyla yayımlanan, yıllara yayılan bir araştırma çabasıdır. On binlerce mühendislik profesyoneline anket uygulayarak hangi teslimat uygulamalarının kurumsal performansla ilişkili olduğunu aradı. Sonuç ikişer ikişer eşleşmiş dört metrik oldu: dağıtım sıklığı ve değişiklikler için lead time hızı ölçer. Değişiklik hata oranı ve başarısız dağıtım kurtarma süresi (çoğunlukla ortalama kurtarma süresi, MTTR olarak kısaltılır) ise kararlılığı ölçer. Çerçeveyi önemli kılan araştırma bulgusu, elit performans gösterenlerin aynı anda hem hızlı hem kararlı olmasıydı. Bu, hız ile güvenliğin birbirine karşı ödünleştiği varsayımını yıktı. Bulgu hâlâ kitabın konu 1.2'deki korkuluk eşleştirme ilkesine dair elindeki en net uygulamalı örnektir: teşvik edilen bir hız metriği, bir kararlılık korkuluğuyla eşleştirilmiştir ve en iyi performans gösteren kurumların gerçekte yaptığı budur.

Kitap DORA'yı bu bölümün düzenleyici çerçevesi olarak değil, bilerek bölümde en son ele alır. Bu yerleştirme, hâlâ gerçekten titiz ve kullanmaya değer olan araştırmanın reddi değildir. Belirli ve gerçek bir sınırlılığı yansıtır: DORA bir hattın ne kadar hızlı ve ne kadar güvenli ilerlediğini ölçer, ama hattan ne geçtiği konusunda sessizdir. Bir ekip mükemmel DORA sayıları gösterirken asıl çıktısı sessizce kusur yeniden işine kaymış olabilir ya da teknik borç ile güvenlik işini kapasiteden yoksun bırakmış olabilir. Konu 2.1'den 2.4'e kadarki Flow Framework'ün tam olarak ortaya çıkarmak için kurulduğu, DORA'nın ise göremediği bir örüntüdür. DORA'yı bu konunun sunduğu gibi kullanın: hat mekaniğinin iyi doğrulanmış, daha dar bir referans ölçüsü olarak; teslimat sağlığının tüm resmi olarak değil.

Büyük ekipler için DORA'nın geriye kalan gerçek değeri karşılaştırılabilirliktir. Hat ve olay verisinden tutarlı biçimde hesaplanan bir metrik, bir kurumun farklı alanlarda çalışan birçok ekibin teslimat yeteneğini, çoğu ekipler arası karşılaştırmayı bozan elmayla armut sorunu olmadan karşılaştırmasına imkân verir. Kurumsal şirketler onu hâlâ platform yatırımını önceliklendirmek için kullanır. Kamu kurumları da bir modernizasyon programının teslimat mekaniğini ölçülebilir biçimde iyileştirdiğini kanıtla göstermek için kullanır. Bunu DORA'nın uygun, sınırlı işi olarak görün. Doğru şeylerin teslim edilip edilmediği gibi daha geniş soru için bu bölümün önceki Flow Framework konularını kullanın.

## Temel ilkeler

- **DORA hattı ölçer, hattan akan değeri değil.** Konu 2.1 bu boşluğu doğrudan adlandırır. DORA'nın göremediğini görmek için akış dağılımını (konu 2.3) kullanın.
- **Hız ve kararlılık birlikte ölçülür, asla ayrı ayrı değil.** İki yarısı da olmayan, DORA'dan beslenen bir pano aslında çerçeveyi kullanmıyordur.
- **Tanımın tutarlılığı, ham sayıdan daha önemlidir.** Tutarlı tanımlanmış bir metrikte "orta"dan "yüksek" performansa geçen bir ekip gerçek bir sinyaldir. Farklı hesaplanmış iki ekibi karşılaştırmak değildir.
- **DORA sistemi ölçer, bireyleri değil.** Bu metrikleri tek tek mühendislere uygulamak çerçevenin istatistiksel temelini bozar ve konu 1.2'nin uyardığı manipülasyonu davet eder.
- **Dört metriğin hepsi vekildir, hedef değil.** Kurumsal performansla ilişkilidirler. Gerçek teslimat iyileşmesinden kopuk olarak sayının kendisinin peşinden gitmek çerçevenin amacını boşa çıkarır.

## Öneriler

### Dağıtım sıklığını hattan ölçümleyin, yalnızca üretim sürümlerini sayın

**Dağıtım sıklığı** (deployment frequency), bir ekibin üretime ne sıklıkla başarıyla sürüm çıkardığını ölçer. Yalnızca başarılı üretim dağıtımlarını sayın, bunları CI/CD hat verisinden otomatik olarak ölçümleyin, asla kişilerin beyanından almayın. Özellikle ikame manipülasyonuna dikkat edin: anlamlı tek bir değişikliği yalnızca sayıyı şişirmek için birkaç önemsiz dağıtıma bölmek. Sıklığın yanında dağıtım boyutunu da izleyin: yükselen sayının yanında küçülen ortalama boyut, bunun yaşandığının en net işaretidir.

### Değişiklikler için lead time'ı ilk commit'ten üretime kadar ölçümleyin

**Değişiklikler için lead time** (lead time for changes), bir kod değişikliğinin ilk commit'inden üretimde başarıyla dağıtılmasına kadar geçen süreyi ölçer. Konu 1.6'nın çarpık, süre temelli veriye dair yönlendirmesini izleyerek yalnızca ortalamayı değil, hem medyanı hem yüksek bir yüzdelik dilimi raporlayın. Her iki uçta da tanım kaymasına dikkat edin. Bu, gerçek bir iyileşme olmadan sayıyı güzelleştirir.

### Ekipler arasında karşılaştırma yapmadan önce değişiklik hata oranını yazılı olarak tanımlayın

**Değişiklik hata oranı** (change failure rate), düzeltme gerektiren bir hataya yol açan dağıtımların yüzdesini ölçer: geri alma, acil yama ya da olay. Dördü arasında tutarlı tanımlaması en zor olandır, çünkü "hata"nın kendiliğinden nesnel olduğu söylenemez. Ekipleri karşılaştırmadan önce yazılı bir tanım üzerinde anlaşın. Bu olmadan, görünüşte adil bir karşılaştırma ciddi biçimde yanıltabilir. Arkasında hiçbir süreç değişikliği olmayan şüpheli derecede hızlı bir iyileşmeye dikkat edin. Bu, gerçek ilerlemeden çok tanım manipülasyonunun en net işaretidir.

### Kurtarma süresini dağıtım olayından değil, tespitten ölçün

**Başarısız dağıtım kurtarma süresi** (failed deployment recovery time), bir dağıtım hataya yol açtığında hizmeti geri getirmenin ne kadar sürdüğünü ölçer. Saati dağıtım olayının kendisinde değil, tespit anında başlatın. Böylece sayı bir izleme boşluğunu değil, gerçek kurtarma gecikmesini yansıtır. Özellikle otomatik geri alma yeteneğine yatırım yapın. Bir olayı erken çözülmüş ilan ederek değil, bu metriği gerçekten iyileştirmenin en yaygın tek kaldıracı budur.

### Bir sayının neden değiştiğini teşhis etmek için DORA'yı değil, akış metriklerini kullanın

Bir DORA metriği kaydığında, yalnızca dört sayı nedenini nadiren açıklar. DORA'nın özet sayılarının altındaki tanı katmanı olarak cycle time dökümünü (konu 2.6), akış yükünü (konu 2.4) ve akış dağılımını (konu 2.3) kullanın. Bir DORA metriğini asla bireysel performans değerlendirmesinde kullanmayın. Bu, çerçevenin açık olduğu en zararlı kötüye kullanımdır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Tam DORA çerçevesi, dört metrik eşleştirilmiş | Araştırmayla doğrulanmış, eşleştirmeyle manipülasyona direnir, adil ekipler arası karşılaştırmayı mümkün kılar | Ne tür değerin teslim edildiği konusunda sessiz; o resim için yanında Flow Framework gerekir |
| DORA bu bölümün tek düzenleyici metrik kümesi olarak | Basit, çoğu mühendislik yöneticisine tanıdık | Değer karışımı sorusunu tümüyle kaçırır; kitabın burada onu ikinci plana almasının nedeni budur |
| DORA ve Flow Framework birlikte | Hat mekaniği ve değer karışımı birlikte görünür | Tek yerine iki metrik sözcük dağarcığını sürdürmeyi gerektirir |
| DORA bireysel düzeyde uygulanır | Bazı yöneticilere doğrudan uygulanabilir gelir | Çerçevenin istatistiksel geçerliliğini bozar; Goodhart yasasına güçlü maruziyet |

Temel gerilim **mekanik titizlik ile iş okunaklılığı** arasındadır. DORA'nın dört metriği kesin biçimde tanımlanmış ve araştırmayla doğrulanmıştır. Bu, hat performansını ekipler arasında karşılaştırmak için onları mükemmel kılar. Ancak aynı kesinlik dar biçimde hattın kendisiyle sınırlıdır ve hattan doğru işin akıp akmadığı hakkında hiçbir şey söylemez. Gerilimi şöyle çözün: DORA'yı hat sağlığı için bir referans katmanı olarak tutun (konu 2.10'un kitabın yapısındaki uygun yeri). Değer karışımının iş yönlü sorusu için bu bölümün önceki Flow Framework konularını kullanın. DORA'ya hiç yanıtlamak için tasarlanmadığı bir soruyu yanıtlatmaya çalışmayın.

## Ekibinizle tartışılacak sorular

1. **Dört DORA metriğinin hepsini hattan mı ölçümlüyoruz, yoksa bazıları kişilerin kendi bildirdiği tahminler mi?** Nesnel, araştırmayla doğrulanmış ölçüme dayanan bir çerçeve, bir sayı en iyi tahmine dönüştüğü anda değerinin çoğunu yitirir. Her metriğin gerçek veri kaynağını denetleyin (konu 1.5).

2. **DORA metrikleriyle karşılaştırdığımız tüm ekipler dağıtım, değişiklik ve hata tanımlarını paylaşıyor mu?** Farklı tanımlar kullanan ekipler arasındaki bir karşılaştırma gerçekte karşılaştırma değildir ve göreli performans hakkında haksız yargılara yol açabilir.

3. **Kurumumuzda biri, resmi ya da gayriresmi olarak, bir DORA metriğini bireysel performans değerlendirmesinde kullandı mı?** Bu, çerçevenin en zararlı tek kötüye kullanımıdır ve çoğunlukla sessizce olur. Doğrudan sorun ve rahatsız edici ama gerekli bir cevaba hazır olun.

4. **DORA sayılarımız mükemmel olabilirken akış dağılımımız (konu 2.3) sessizce yeniden işe doğru ya da özelliklerden uzağa kaymış olabilir mi?** DORA'nın tek başına göremediği boşluk tam olarak budur. İki sayı kümesini birlikte çekin ve tutarlı bir hikâye anlatıp anlatmadıklarına bakın.

5. **DORA metriklerimizden biri kaydığında nedenini açıklayacak akış metriği tanılarımız var mı?** Bir DORA sayısı size bir şeyin değiştiğini söyler, ne olduğunu değil. Ekiplerinizin "lead time bu ay neden arttı" sorusunu yalnızca spekülasyonla değil, veriyle yanıtlayıp yanıtlayamadığına bakın.

6. **Dört DORA sayımızı bilerek manipüle etmeye çalışsak nasıl değişirlerdi ve fark eder miydik?** Dağıtım sıklığını, lead time'ı, değişiklik hata oranını ve kurtarma süresini tek tek gözden geçirin. Konu 1.2'nin temel disiplininin bu belirli çerçeveye pratik uygulamasıdır.

## Sektörel bakış

**Startup.** DORA'nın hız metrikleri, zaten sık dağıtım yapan küçük bir ekibe genellikle doğal gelir. Daha zor olan disiplin, henüz hiçbir şey ciddi biçimde bozulmadığı için kararlılığı varsaymak yerine değişiklik hata oranını ve kurtarma süresini dürüstçe ölçümlemektir. DORA'yı erkenden gayriresmi bile olsa bir akış öğesi ayrımıyla (konu 2.2) eşleştirmek, yalnızca hat hızı etrafında yanlış bir teslimat sağlığı hissi kurulmasını önler.

**Küçük işletme.** Çoğu modern CI/CD ve sürüm kontrol platformu dağıtım sıklığı ve lead time verisini asgari kurulumla dışa aktarır. Değişiklik hata oranı için dağıtımları olaylara bağlamak genellikle daha çok elle çaba ister. İki hız metriğiyle başlayın ve bağlanacak gayriresmi bir olay günlüğü olur olmaz kararlılık izlemeyi ekleyin.

**Kurumsal.** Bu ölçekte DORA'nın en büyük kalan değeri, platform yatırım kararları için adil, tutarlı ekipler arası karşılaştırmadır. Tanımları kurum genelinde standartlaştırın (konu 1.4), ölçümlemeyi merkezi olarak otomatikleştirin ve her DORA raporunu bir akış dağılımı görünümüyle eşleştirin. Böylece yönetim hat hızını ve değer karışımını birbirinden ayrı değil, birlikte görür.

**Kamu.** DORA metrikleri bir modernizasyon programına, teslimat mekaniğindeki iyileşmeyi denetim kurullarına göstermek için savunulabilir, araştırmaya dayalı bir yol sunmayı sürdürür. Dört metriği birlikte raporlayın, hiçbir zaman övünülecek yarısını seçip almayın. Raporun, daha hızlı hattın gerçekte ne teslim ettiği gibi daha zor, daha önemli soruyu da yanıtlaması için bunları akış dağılımıyla eşleştirin.

## Örnekler

**Kurumsal.** Büyük bir telekomünikasyon şirketinin platform modernizasyon programı, kırk ürün ekibinde dört DORA metriğini tutarlı biçimde ölçümledi ve on sekiz ay içinde düşük performans bandından yüksek performans bandına gerçek bir geçiş gösterdi: dağıtım sıklığı kabaca on kat arttı, lead time haftalardan günlere indi, değişiklik hata oranı sabit kaldı. Sunumu inceleyen bir yönetim kurulu üyesi, yalnızca DORA sayılarının yanıtlayamayacağı bir soru sordu: bu daha hızlı teslimatın ne kadarı yeni müşteri değeri, ne kadarı yeniden işti. Mühendislik organizasyonunun cevabı, ertesi çeyrekte akış öğesi sınıflandırmasını benimseyene kadar yoktu. Bu sınıflandırma, DORA'nın hız sayıları iyileşirken özellik işinin toplam çıktı içindeki payının aslında düştüğünü gösterdi. Bulgu programın sonraki yıl önceliklerini yeniden şekillendirdi.

**Kamu.** Bir eyalet hükümetinin BT modernizasyon ofisi, birkaç rakip tedarikçi ekibinin teslimat yeteneğini karşılaştırmak için DORA metriklerini bir sözleşme koşulu olarak benimsedi. Bu, çerçevenin karşılaştırılabilirliğinin etkili bir kullanımıydı. Bir tedarikçinin yüksek dağıtım sıklığının, yanında değişiklik hata oranı da istenince, emsallerinden neredeyse üç kat yüksek bir hata oranıyla ilişkili olduğu ortaya çıktı. Bu bilgi, ofisin sözleşme yenileme kararını doğrudan bilgilendirdi. Ofis daha sonra, en iyi DORA sayılarına sahip tedarikçinin aynı zamanda sözleşmenin özellikle istediği güvenlik iyileştirme işine kapasitenin en küçük payını ayıran tedarikçi olduğunu keşfedince, aynı sözleşmelere bir akış dağılımı şartı ekledi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

DORA'yı uygun kapsamı içinde iyi benimsemenin getirisi, "teslimat hattımız daha hızlı ve daha güvenli hale geliyor mu" sorusuna savunulabilir, kanıta dayalı bir cevaptır. Bu, mühendislikte güvenle yanıtlanabilen daha ele alınabilir sorulardan biridir. Bu cevap platform ve araç yatırımını gerçek sayılarla haklı çıkarır ve yönetimin rakip yatırımları her zaman olduğu gibi adil, tutarlı bir temelde karşılaştırmasına imkân verir.

Toplam sahip olma maliyeti (TCO), değişiklik hata oranı ve kurtarma süresi için dağıtım olaylarını olay kayıtlarına bağlayan entegrasyon işidir. Büyük, heterojen bir araç ortamında bu iş hafife alınacak bir şey değildir. DORA'yı bu bölümün önceki Flow Framework konularıyla eşleştirmenin ek maliyeti karşılaştırmalı olarak küçüktür, çünkü akış öğesi sınıflandırması, paralel bir ölçüm sistemi değil, mevcut işin üstüne eklenen bir raporlama kuralıdır. Getirisi (yukarıdaki telekomünikasyon örneğinin gösterdiği değer karışımı kör noktasını tam olarak yakalamak) bu mütevazı ek yatırıma fazlasıyla değer.

## Anti-desenler ve tuzaklar

- **DORA'yı teslimat sağlığının tüm resmi saymak:** bu konunun yerleşiminin karşı koymak için tasarlandığı manipülasyon vektörüdür (oyunlama yolu). Bir kurum gerçekten mükemmel DORA sayıları (hızlı, sık, kararlı dağıtımlar) sunarken fiilen teslim ettiği değer sessizce yeniden işe doğru ya da özelliklerden uzağa kaymış olabilir. DORA'nın dört metriği bunu hiçbir zaman göstermez, çünkü onu ölçmek için tasarlanmadılar. Korkuluk, her DORA raporunu akış dağılımıyla (konu 2.3) eşleştirmektir. Böylece yanlış iş karışımını teslim eden hızlı, kararlı bir hat, gerçek teslimat sağlığı sanılmak yerine görünür olur.
- **DORA'nın yalnızca hız yarısını raporlamak:** çerçevenin, yüksek performans gösterenlerde hız ile kararlılığın birlikte hareket ettiği temel bulgusunu boşa çıkarır.
- **DORA metriklerini bireysel performans değerlendirmelerinde kullanmak:** çerçevenin istatistiksel geçerliliğini bozar ve güçlü manipülasyonu davet eder.
- **Tutarsız tanımlarla ekipleri karşılaştırmak:** adil görünen ama olmayan karşılaştırmalar üretir.
- **Hat ile ölçümlenmiş yerine kişilerin kendi bildirdiği DORA sayıları kullanmak:** çerçevenin ortadan kaldırmak için tasarlandığı yanlılığı tam olarak getirir.
- **DORA'yı özet yerine tanı aracı saymak:** altında akış metriği katmanı olmadan, ekibi bir sayının neden kaydığını açıklayamaz bırakır.

## Olgunluk modeli

- **Düzey 1, Başlangıç (Initiate):** DORA metrikleri, hiç izleniyorsa, kişilerin kendi bildirdiği, tutarsız tanımlı ve akış verisiyle hiç eşleştirilmemiş haldedir.
- **Düzey 2, Geliştirme (Develop):** Bazı ekipler DORA'yı hattan ölçümler, ancak tanımlar değişir ve karşı kontrol edilecek bir akış dağılımı karşılığı yoktur.
- **Düzey 3, Standartlaştırma (Standardize):** Dört DORA metriğinin hepsi, ortak tanımlarla hat ve olay verisinden tutarlı biçimde ölçümlenir ve rutin olarak akış dağılımının yanında gösterilir.
- **Düzey 4, Yönetme (Manage):** DORA ve akış metrikleri kurumun her düzeyinde standart bir eşleşme olarak birlikte gözden geçirilir ve DORA hiçbir zaman bireysel değerlendirme için kullanılmaz.
- **Düzey 5, Yönlendirme (Orchestrate):** Kurum, akış dağılımının, mükemmel DORA sayılarının tek başına gizlediği bir değer karışımı sorununu yakaladığı belirli örnekleri gösterebilir ve her çerçevenin yanıtladığı ayrı sorular için ikisini de bilinçli kullanır.

## Tartışma önerileri

1. Dört DORA metriğimiz bizi şu anda performans kademesi yelpazesinde, dürüstçe, nereye yerleştiriyor?
2. DORA sayılarımız mükemmel görünürken akış dağılımımız sessizce kaymış olabilir mi? Hiç kontrol ettik mi?
3. Birisi hiç bir DORA sayısını, gayriresmi bile olsa, bir bireyi yargılamak için kullandı mı?
4. Bir rakip DORA sayılarını yayımlasa, bizimkiler olumlu karşılaştırılır mıydı ve bu karşılaştırma kimin gerçekte daha fazla değer teslim ettiğini bize gerçekten söyler miydi?

## Temel çıkarımlar

- DORA'nın dört metriği (**dağıtım sıklığı, lead time, değişiklik hata oranı ve kurtarma süresi**) tasarım gereği hızı kararlılıkla eşleştirir ve gerçekten araştırmayla doğrulanmış olmayı sürdürür.
- Bu kitap DORA'yı **bölümde en sona** yerleştirir, çünkü o hattı ölçer, hattan akan değeri değil. Daha eksiksiz resim için onu akış dağılımıyla (konu 2.3) eşleştirin.
- Konunun başlıca manipülasyon vektörü **mükemmel DORA sayılarını eksiksiz teslimat sağlığı sanmaktır**; korkuluk, DORA'yı her zaman akış dağılımıyla birlikte raporlamaktır.
- **DORA metriklerini asla bireysel performans değerlendirmelerinde kullanmayın**; çerçevenin geçerliliği bireysel değil, sistem düzeyinde ölçüme bağlıdır.
- Bir DORA sayısı kaydığında, **akış metriklerini tanı katmanı olarak** DORA'nın özet sayılarının altında kullanın.

## Kaynaklar ve ileri okuma

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme.
  [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
