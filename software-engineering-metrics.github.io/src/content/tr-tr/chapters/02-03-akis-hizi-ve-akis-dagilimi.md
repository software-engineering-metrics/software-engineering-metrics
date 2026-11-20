# 2.3 Akış hızı ve akış dağılımı

## Genel bakış ve motivasyon

**Akış hızı**, belirli bir dönemde tamamlanan akış öğelerinin (konu 2.2) sayısıdır; Flow Framework'ün [verim (throughput)](https://en.wikipedia.org/wiki/Throughput) ölçüsüdür. **Akış dağılımı** ise aynı dönemde tamamlanan öğeler arasında her akış öğesi türünün (özellikler, hatalar, risk ve borç) oranıdır. İki metrik birlikte okunmak üzere tasarlanmıştır: hız tek başına "ne kadar teslim ettik" sorusunu, dağılım tek başına "ne tür bir işti" sorusunu yanıtlar, ama biri olmadan diğeri pek bir şey ifade etmez. Bir ekip hızını artırırken dağılımı sessizce özelliklerden uzaklaşıp hata düzeltme işine kayabilir; bu, hız grafiğinde ivmelenme gibi görünür ve aslında gerileyen kalitenin belirtisidir.

Bu eşleştirme, konu 1.2'nin bu kitaptaki her metrik ailesinden istediği disiplinin aynısıdır: o hızın neye mal olduğunu gösteren korkuluk olmadan hiçbir hız sayısı raporlamayın. Akış hızı, bu bölümün verim metriğinin en doğrudan genellemesidir; ruhen bu kitaptaki diğer tüm tekil sayılardan çok dağıtım sıklığına (konu 2.10) yakındır, ama dağıtım sıklığının hiç olmadığı bir biçimde öğe türüne duyarlıdır. Dağıtım sıklığı kodun üretime ne sıklıkta ulaştığını söyler; dağılımla eşleşmiş akış hızı ise değerin üretime ne sıklıkta ulaştığını ve ne tür bir değer olduğunu söyler.

Birçok eşzamanlı değer akışı yürüten büyük ekipler için bu eşleştirme, tek bir verim sayısının tamamen gizlediği bir örüntüyü açığa çıkarır: hızı sağlıklı görünen bir değer akışının dağılımı sessizce neredeyse saf özellik işine kaymış, konu 2.2'nin bilinçli korunması gerektiği konusunda uyardığı borç ve risk kapasitesini sessizce mahrum bırakıyor olabilir. Ürün hatları arasında verimi karşılaştıran kurumsal organizasyonların ve teslimat çıktısını denetim organlarına raporlayan kamu kuruluşlarının, ham çıktıyı gerçek, sürdürülebilir ilerlemeyle karıştırmamak için bu eşleştirmeye ihtiyacı vardır.

## Temel ilkeler

- **Dağılımsız hız, gerçekte neyin teslim edildiğini gizler.** Yükselen bir öğe sayısı, bu sayının sağlıklı mı, manipüle edilmiş mi yoksa sessizce eldeki en kolay işe doğru mu çarpıtılmış olduğu hakkında hiçbir şey söylemez.
- **Hızsız dağılım ölçeği gizler.** Sağlıklı görünen bir yüzde dağılımı, temsil ettiği toplam işin ne kadar olduğunu bilmiyorsanız çok az şey ifade eder.
- **İki metrik her zaman birlikte raporlanmalıdır.** Bu, konu 1.2'nin korkuluk eşleştirme ilkesinin akış verisine özgü doğrudan uygulamasıdır.
- **Hız, her öğe sayısı metriği gibi aynı ikame manipülasyonuna açıktır.** Zor işi çok sayıda küçük, kolay öğeye bölmek, orantılı olarak daha fazla değer teslim etmeden sayıyı şişirir.
- **Sağlıklı bir dağılım bağlama bağlıdır, sabit bir hedef değil.** Konu 2.2 bunu derinlemesine ele alır; hız ve dağılım her zaman bağlamın ima ettiği hedefe göre yorumlanmalıdır.

## Öneriler

### Akış hızını tek dönemlik bir sayı olarak değil, bir trend çizgisi olarak raporlayın

Tek bir dönemin öğe sayısı gürültülüdür ve kolayca yanlış okunur. Akış hızını art arda gelen birkaç dönem boyunca çizin ve tek bir veri noktasına değil trende bakın; konu 1.6'nın doğal değişkenliğe yatkın her zaman serisi metriği için önerdiği disiplin budur.

### Akış hızını hiçbir zaman yanında dağılımı olmadan sunmayın

Bunu herhangi bir gösterge paneli ya da rapor için hoş bir ek değil, sert bir kural sayın. Tek başına gösterilen bir hız grafiği, bu konunun açılışta andığı yanlış okumayı davet eder: aslında yeniden iş ya da kolay özellik işinin artan payı olan, borç ve risk kapasitesini dışarı iten yükselen verim. İkisini her zaman aynı görünüme koyun.

### Öğe boyutları çok değiştiğinde hızı boyuta ya da karmaşıklığa göre ağırlıklandırın

Ham öğe sayısı, tek satırlık bir yapılandırma değişikliğini ve haftalarca süren bir mimari geçişi eşdeğer sayar; bu da bu kitabın dağıtım sıklığı için zaten adlandırdığı ikame manipülasyonunu (konu 2.10) davet eder: zor işi çok sayıda küçük öğeye bölmek, orantılı olarak daha fazla teslim etmeden sayıyı şişirir. Öğe boyutlarının çok değiştiği yerlerde hızı kaba bir boyut ya da karmaşıklık tahminiyle ağırlıklandırın ya da ham sayının yanında ortalama öğe boyutunu izleyin; böylece artan bir sayının yanındaki küçülen ortalama boyut gizlenmek yerine görünür olur.

### Akış dağılımında yalnızca mevcut anlık görüntüyü değil, kaymayı izleyin

Akış dağılımındaki en yararlı sinyal nadiren bu dönemin kesin yüzdeleridir; birkaç dönem boyunca değişimin yönüdür. Özellikler yükselirken borç ve riskin sessizce küçülmesi gibi istikrarlı bir kayma, konu 2.2'nin bir özellik fabrikası örüntüsü altında görünmez biçimde biriktiği konusunda uyardığı kalite ya da güvenlik sorununa dönüşmeden çok önce paydaşlarla gündeme getirilmeye değer.

### Değer akışları arasında akış hızını yalnızca gerçek bir özenle karşılaştırın

Farklı öğe ayrıntı düzeyine, farklı ekip büyüklüğüne ya da farklı ürün aşamasına sahip iki değer akışı yalnızca ham hıza bakılarak doğrudan karşılaştırılamaz; konu 2.10'un ekipler arası dağıtım sıklığı için adlandırdığı adalet sorunu aynıdır. Hızı önce bir değer akışının kendi trendi için kullanın ve değer akışları arası karşılaştırmayı ancak gerçekten karşılaştırılabilir öğe tanımlarını ve ayrıntı düzeyini doğruladıktan sonra deneyin.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yalnızca ham öğe sayısı hızı | Hesaplaması ve açıklaması basit | İkame manipülasyonuna açık; teslim edilen değerin türünü gizler |
| Dağılımla eşleşmiş hız | Hem ölçeği hem değer karışımını birlikte gösterir | Anlamlı olması için disiplinli akış öğesi sınıflandırması gerektirir (konu 2.2) |
| Boyutla ağırlıklandırılmış hız | Öğe boyutu bölmesinden doğan ikame manipülasyonuna dirençlidir | Ekip genelinde tutarlı, üzerinde anlaşılmış bir boyutlandırma yöntemi gerektirir |
| Değer akışları arası hız karşılaştırması | Portföy düzeyinde yatırım kararları için yararlı | Gerçekten karşılaştırılabilir öğe tanımları doğrulanmazsa kolayca haksız |

Temel gerilim, **basitlik ile manipülasyona direnç** arasındadır. Ham öğe sayısı hesaplaması ve açıklaması en kolay sayıdır, ama zor işi çok sayıda küçük parçaya bölerek şişirmesi de en kolay olandır. Gerilimi şöyle çözün: birincil metriği basit tutun (dağılımla eşleşmiş ham hız) ve boyutla ağırlıklandırmayı, öğe boyutlarının basit sayının fiilen yanıltıcı hale gelecek kadar çok değiştiği bilinen değer akışları için saklayın.

## Ekibinizle tartışılacak sorular

1. **Akış hızını raporladığımızda yanında akış dağılımı her zaman gösteriliyor mu, yoksa hız bazen tek başına mı duruyor?** Dağılımı olmayan bir hız sayısı, bu konunun kendi merkezî ilkesine göre eksik bir resimdir. Gerçek gösterge panellerinizde ve raporlarınızda bu boşluğu arayın.

2. **Ortalama öğe boyutumuz artan hızla birlikte değişti mi ve değişse bilir miydik?** Tırmanan bir sayının yanında küçülen ortalama boyut, akış öğelerine uygulanan ikame manipülasyonunun özel imzasıdır. Örüntünün yokluğunu varsaymak yerine gerçek veriyi çekin.

3. **Hızımızı hiç, öğe tanımlarımızın ve ayrıntı düzeyimizin gerçekten örtüştüğünü doğrulamadan başka bir ekibinkiyle karşılaştırdık mı?** Buradaki haksız bir karşılaştırma, bir ekibi yalnızca karşılaştırılabilir görünmek için kendi sayılarını manipüle etmeye itebilir; bu kitabın dağıtım sıklığı için zaten adlandırdığı riskin aynısı.

4. **Akış dağılımımız son birkaç dönemde tek yönde kaydı mı ve bunu bilinçli olarak biri mi kararlaştırdı?** Yavaş bir kayma dönem dönem kolayca gözden kaçar. Birkaç dönemi birlikte çizin ve mevcut dağılımın kararlı olduğunu varsaymadan önce bir trendi dürüstçe arayın.

5. **Biri gerçek iş yapmadan akış hızımızı şişirmek isterse en kolay yol nedir ve mevcut raporlamamız bunu yakalar mı?** Zor öğeleri kolay öğelere bölmenin özel mekaniğini adım adım düşünün ve gösterge panelinizin bu örüntüyü gerçekten ortaya çıkarıp çıkarmayacağını tartışın.

6. **Hız ve dağılım sayılarımız iş paydaşlarına hiç birlikte ulaşıyor mu, yoksa yukarıya yalnızca hız başlığı mı çıkıyor?** Eşleştirme ilkesi, ancak verilerden karar verenlerin iki yarıyı da gerçekten görmesi halinde yanlış okumaya karşı koruyabilir.

## Sektörel bakış

**Girişim (startup).** Akış hızını bu ölçekte gayriresmî olarak izlemek genellikle kolaydır, çünkü tüm ekibin verim hakkında zaten kaba bir hissi vardır. Yararlı disiplin, onu gayriresmî de olsa dağılımla eşleştirmektir; böylece bir kurucu, sayı aslında erken aşama hata düzeltmenin egemen olduğu bir sayı olduğunda, artan bilet kapatma sayısını gerçek özellik ilerlemesi sanmaz.

**Küçük işletme.** Akış öğesi sınıflandırması (konu 2.2) için zaten kullandığınız hafif araçtan hız ve dağılımı birlikte izleyin; bu ölçekte özel bir analitik platformuna gerek yoktur. Onları her zaman yan yana görme alışkanlığı, herhangi bir araç gelişmişliğinden daha önemlidir.

**Kurumsal.** Değer akışları arası hız karşılaştırması, portföy düzeyinde önceliklendirme için bu ölçekte cazip gelir ve adalet riskinin en büyük olduğu yer de burasıdır; çünkü farklı ürün hatlarının öğe ayrıntı düzeyi meşru biçimde çok farklıdır. Ekipler arasında yatırım kararlarını gerekçelendirmek için hız karşılaştırmalarını kullanmadan önce karşılaştırılabilir tanımları doğrulamaya yatırım yapın.

**Kamu.** Dağılımla eşleşmiş akış hızı, kamu sektöründeki bir teknoloji liderine teslimat çıktısını denetim organlarına raporlamak için ham verimden çok daha güçlü bir kanıt tabanı sağlar; çünkü yalnızca ne kadarının teslim edildiğini değil, karışımın yeni işlevsellik, hata düzeltme ve risk yönetimi arasında bilinçli, savunulabilir bir dağılımı yansıttığını da gösterebilir.

## Örnekler

**Kurumsal.** Bir yazılım satıcısının platform ekibi üç çeyrek boyunca istikrarla yükselen akış hızı raporladı; liderlik bunu hızlanan teslimat olarak kutladı. Yalnızca tekrarlayan bug'lar hakkındaki bir müşteri eskalasyonundan sonra istenen akış dağılımına daha yakından bakmak, artan hızın "özellikler" payının aynı dönemde yüzde 70'ten yüzde 45'e düştüğünü, boşluğu hata düzeltme öğelerinin doldurduğunu ortaya koydu. Ekip daha çok öğe teslim ediyordu, ama bunların küçülen bir oranı yeni değerdi; geri kalanı, yalnızca hız grafiğinin tamamen gizlediği yeniden işti.

**Kamu.** Bir ulusal istatistik kurumunun veri platformu ekibi, denetim kuruluna yıllık raporu için akış hızını birincil teslimat metriği olarak izliyordu. Bir kurul üyesi bu hızın hangi oranının yeni, kamuya dönük yeteneği temsil ettiğini sorduğunda ekip, sayıyı akış öğesi türüne göre hiç ayırmadığını fark etti ve doğrudan yanıt veremedi. Kurum sonrasında eşleştirilmiş hız ve dağılım raporlamasını benimsedi; bu, yeni bir veri koruma düzenlemesinin yönlendirdiği risk ve uyumluluk işinin meşru olarak kapasitenin büyüyen bir payını tükettiğini ortaya koydu. Açıklanamayan bir hız düşüşünde örtük bırakılmak yerine açıkça gösterildiğinde kurulun kolayca kabul ettiği, savunulabilir bir dağılımdı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Hızı dağılımla eşleştirmenin getirisi, iki sayının tek başına sunduğundan daha dürüst ve daha savunulabilir bir teslimat çıktısı anlatımıdır. Yukarıdaki yazılım satıcısı örneğinde artan hızın aslında düşen özellik çıktısını yansıttığının keşfedilmesi, bu eşleştirmenin önlediği yanlış okumanın tam kendisidir; bu örüntüyü erken yakalamak, ancak müşteriye dönük bir kalite sorunu soruyu zorladıktan sonra keşfetmekten çok daha ucuzdur.

Akış öğesi sınıflandırması (konu 2.2) zaten yerindeyse toplam sahip olma maliyeti asgaridir: dağılım, zaten sınıflandırılmış öğelerin basit bir toplulaştırmasıdır ve iki metriği birlikte gösterme disiplini teknik bir yatırım değil, bir raporlama kuralıdır. Bu konunun önerilerinin maliyetinin çoğu, organizasyon en baştan dürüst akış öğesi sınıflandırmasını benimsediğinde zaten ödenmiştir.

## Anti-desenler ve tuzaklar

- **Akış hızını dağılımsız raporlamak:** bu konunun kalbindeki manipülasyon vektörü (oyunlama yolu). Teslimat baskısı altındaki bir ekip, küçük, kolay özellik işini tercih edip daha zor borç, risk ya da hata öğelerinden kaçınarak ya da büyük öğeleri çok sayıda küçüğe bölerek öğe sayısını artırabilir; tek başına gösterilen bir hız grafiği, teslim edilenin gerçek kaymasından çok bir ivmelenme gibi okunur. Korkuluk, konu 1.2'nin bu kitap boyunca istediği eşleştirme disiplinidir: hızı hiçbir zaman dağılımsız göstermeyin ve özellikle bölmeyi yakalamak için sayının yanında ortalama öğe boyutunu periyodik olarak kontrol edin.
- **Farklı öğe ayrıntı düzeyine sahip değer akışları arasında hızı karşılaştırmak:** haksız, yanıltıcı bir karşılaştırma üretir.
- **Tek bir dönemin dağılımını kararlı saymak:** yalnızca bir trend görünümünün ortaya çıkardığı yavaş, anlamlı kaymayı kaçırır.
- **İş paydaşlarına yalnızca hız başlığının ulaşmasına izin vermek:** eşleştirme ilkesinin tüm koruyucu değerini kaybettirir.
- **Artan hızı kutlarken ortalama öğe boyutunu görmezden gelmek:** ikame manipülasyonunun özel imzasını kaçırır.
- **Dağılıma hiç atıf yapmadan bir hız hedefi koymak:** bu konunun adıyla uyardığı manipülasyonu tam olarak davet eder.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Akış hızı, izleniyorsa, dağılım verisi olmadan tek başına raporlanır ve kimse ikame manipülasyonunu kontrol etmemiştir.
- **Seviye 2, Gelişim:** Bazı ekipler dağılımı izler, ama bu raporlamada hızla tutarlı biçimde eşleştirilmez ya da trend olarak gözden geçirilmez.
- **Seviye 3, Standartlaşma:** Hız ve dağılım her zaman birlikte raporlanır, trend olarak izlenir ve ikame manipülasyonunu yakalamak için ortalama öğe boyutu gözlenir.
- **Seviye 4, Yönetim:** Dağılım kayması bir kalite ya da güvenlik sorununa dönüşmeden önce proaktif olarak araştırılır ve değer akışları arası hız karşılaştırmaları ancak gerçekten karşılaştırılabilir öğe tanımları doğrulandıktan sonra yapılır.
- **Seviye 5, Orkestrasyon:** Hız ve dağılım portföy düzeyindeki yatırım kararlarını doğrudan bilgilendirir ve organizasyon, dağılım kaymasının görünür bir başarısızlığa yol açmadan önce yakalanıp düzeltildiği belirli durumları gösterebilir.

## Tartışma önerileri

1. Akış hızı raporlamamız her zaman dağılımı da içeriyor mu, yoksa hiç birini diğeri olmadan gösterdik mi?
2. Ortalama akış öğesi boyutumuz yakın zamanda hızdaki bir değişiklikle birlikte kaydı mı?
3. Akış dağılımımız son birkaç çeyrekte istikrarlı biçimde kaymış olsa bilir miydik?
4. Biri gerçek değer teslim etmeden hızımızı şişirmek için ne yapabilir ve fark eder miydik?

## Temel çıkarımlar

- **Akış hızı** verimi ölçer; **akış dağılımı** bu verimin ne tür bir işi temsil ettiğini ölçer. Her zaman birlikte raporlayın.
- Bu eşleştirme, konu 1.2'nin **korkuluk ilkesinin** doğrudan uygulamasıdır: bir hız sayısını hiçbir zaman neye mal olduğu bağlamı olmadan göstermeyin.
- Konunun merkezî manipülasyon vektörü **hızı tek başına raporlamaktır**; bu, kolay özellik işine ya da orantılı değer teslim etmeden sayıyı şişiren öğe bölmeye doğru bir kaymayı gizleyebilir.
- **Dağılım kayması**, tek bir dönemin anlık görüntüsünde değil, birkaç dönemlik bir trend olarak en görünürdür.
- **Değer akışları arası hız karşılaştırmaları** adil olmak için gerçekten karşılaştırılabilir öğe tanımları gerektirir; bu olmadan bilgilendirmekten çok yanıltırlar.

## Kaynaklar ve ileri okuma

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
