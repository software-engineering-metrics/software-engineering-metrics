# 4.5 Teknik borç ölçümü

## Genel bakış ve motivasyon

Ward Cunningham'ın ortaya attığı bir metafor olan **[teknik borç](https://en.wikipedia.org/wiki/Technical_debt)** (technical debt), geçmişteki kestirmelerin birikmiş maliyetini anlatır: bir şeyi daha erken teslim eden ama kod tabanını sonradan değiştirmesi daha zor bırakan pratik kararlar; tıpkı finansal borcun şimdi harcamanıza, faizini sonra ödemenize izin vermesi gibi. Her kod tabanı biraz teknik borç taşır ve bu kendiliğinden bir başarısızlık değildir; metaforun gerçek değeri, borcu ne utanç verici bir sır ne de kaçınılmaz, kalıcı bir yük olarak değil, yönetilebilir bir ödünleşim olarak çerçevelemesidir. Bu konu, o ödünleşimi her mühendisin hissettiği ama kimsenin kanıtla harekete geçemediği belirsiz, sürekli geri plana itilen bir kaygı olarak bırakmak yerine, ölçümle görünür ve yönetilebilir kılmakla ilgilidir.

Bu konudan önceki konular, yani karmaşıklık (4.1), kapsama (4.2), değişim yoğunluğu ve sıcak noktalar (4.3) ve statik analiz (4.4), teknik borcun birer yüzünü ortaya çıkarır. Bu konunun işi sentezdir: bu ayrı sinyalleri ve hiçbir otomatik taramada görünmeyen kalemleri (belgelenmemiş bir mimari kestirme, bilerek ertelenmiş bir geçiş gibi) tek, önceliklendirilmiş, görünür bir iş listesine dönüştürmek; böylece bu liste özellik çalışmasıyla yatırım için adil biçimde yarışır, yalnızca bir metriği ve planlama toplantılarında bir savunucusu olmadığı için bu yarışı varsayılan olarak kaybetmez.

Büyük ekipler için yönetilmeyen teknik borç, gerçekten tehlikeli ve hafife alınması kolay bir biçimde bileşik büyür: her yeni kestirme bir sonraki değişikliği biraz daha zorlaştırır, bu da daha fazla kestirme için baskı yaratır, bu da daha da bileşik büyür. Sistemleri uzun yıllar boyunca sürdüren kurumsal ve kamu kuruluşları bu bileşik etkiye özellikle açıktır ve bu konunun merkezî önerisi (görünür, nicelleştirilmiş, önceliklendirilmiş bir borç iş listesi), bir kurumun krize sürüklenmek yerine ödünleşimi gerçekten bilinçli yönetmesini sağlayan mekanizmadır.

## Temel ilkeler

- **Teknik borç, utanç verici bir sır değil, yönetilebilir bir ödünleşimin bilinçli bir metaforudur.** Bilerek alınan bir miktar borç makul bir iş kararıdır.
- **Ölçülmeyen borç, özellik çalışmasına karşı önceliklendirme yarışmasını varsayılan olarak kaybeder;** daha az önemli olduğu için değil, görünür bir savunucusu olmadığı için.
- **Borcu karar vericilerin tartabileceği terimlerle nicelleştirin: düzeltme maliyeti ile taşıma maliyeti.** Belirsiz bir "kod dağınık" iddiası somut bir özellik talebine karşı nadiren iyi yarışır.
- **Borç bileşik büyür.** Her yeni kestirme gelecekteki değişiklikleri biraz daha zorlaştırır ve yönetilmezse bu etki hızlanır.
- **Her borç ödenmemelidir.** Düzeltme maliyeti onunla yaşama maliyetini aşıyorsa, bazısını süresiz taşımaya değer.

## Öneriler

### Görünür, tek bir teknik borç iş listesi oluşturun

Bu bölümün önceki konularından gelen sinyalleri (karmaşıklık uç değerleri, düşük mutant öldürme oranlı alanlar, sıcak noktalar, çözülmemiş statik analiz bulguları) yalnızca bir insanın belirleyebileceği borç kalemleriyle (bir mimari kestirme, ertelenmiş bir bağımlılık yükseltmesi, belgelenmemiş bir geçici çözüm) birlikte, özellik iş listenizle aynı titizlik ve görünürlükle izlenen tek bir görünür iş listesinde birleştirin. Yalnızca bireysel mühendislerin hafızasında ya da dağınık kod yorumlarında yaşayan borç, önceliklendirme açısından fiilen yoktur.

### Her borç kaleminin maliyetini ve taşıma maliyetini nicelleştirin

Her kalem için iki rakamı tahmin edin: düzeltme maliyeti (mühendislik zamanı, düzeltmenin kendi riski) ve düzeltilmeden taşıma maliyeti (ilgili iş ne kadar yavaşlıyor, ne kadar ek kusur riski taşıyor, başka işi ne kadar engelliyor). Bu çerçeve, doğrudan finansal borç metaforunun kendi mantığından ödünç alınmıştır ve karar vericilere soyut, nicelleştirilmemiş bir şikâyet yerine özellik çalışmasının maliyeti ve beklenen değeriyle karşılaştırmak için gerçek bir zemin sağlar.

### Önceliği yaş ya da en yüksek sesli savunucu değil, etkiye göre belirleyin

Borç kalemlerini, taşıma maliyetlerinin ve etkilenen kodun ne sıklıkla değiştirildiğinin (konu 4.3'ün değişim yoğunluğu verisi burada doğrudan yararlıdır) birleşimine göre sıralayın: kod tabanının nadiren değiştirilen bir köşesindeki bir kalem, ne kadar hoş olmasa da, en aktif geliştirmenizin tam yolunda duran bir kalemden çok daha az önemlidir. Hangi kalemin iş listesinde en uzun süredir durduğuna ya da hangi mühendisin onu en ısrarla savunduğuna göre önceliklendirmeye direnin; bunların hiçbiri gerçek iş etkisiyle güvenilir biçimde ilişkili değildir.

### Borç iyileştirmesi için ayrılmış, korunan kapasite tahsis edin

Her planlama döngüsünde gelen her özellik talebine karşı kalem kalem yarışmak zorunda olan bir borç iş listesi, tutarlı biçimde kaybetme eğilimindedir; çünkü özellik çalışmasının genellikle daha net, daha acil bir iş savunucusu vardır. Mühendislik kapasitesinin korunan bir yüzdesini (yaygın bir örüntü yüzde 10 ile 20 arasıdır) özellikle borç iyileştirmesine ayırın; bunu her sprintte yeniden pazarlık etmek yerine önceden karara bağlayın, böylece borç ödemesi yalnızca bir krizin ardından değil, olağan bir iş olarak gerçekleşir.

### Bir kısım borcu kalıcı olarak kabul edin ve bunu açıkça söyleyin

Her kalem aktif bir iyileştirme planına ait değildir. Düzeltme maliyetinin bir kalemi süresiz taşıma maliyetini gerçekten aştığı yerde (özellikle kararlı, nadiren dokunulan, yakında emekli edilecek bir sistemdeki kod için) bu kararı açıkça belgeleyin ve kalemi, sürekli varlığıyla hiçbir zaman gerçekleşmeyecek bir işi sessizce ima ettiği aktif bir iş listesinde süresiz durmasına izin vermek yerine, bilinçli olarak geri plana alınmış bir kategoriye taşıyın.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Resmî borç takibi yok | Yük yok | Borç önceliklendirme yarışmasını varsayılan olarak kaybeder; görünmez biçimde bileşik büyür |
| Gayriresmî, günü kurtaran borç farkındalığı | Düşük yük, bir miktar görünürlük | Tutarsız; bireysel hafızaya ve savunuculuğa bağlı |
| Resmî, nicelleştirilmiş borç iş listesi | Yatırım için adil yarışır; bilgiye dayalı ödünleşimlere olanak tanır | Sürekli bakım ve nicelleştirme disiplini gerektirir |
| Korunan, ayrılmış iyileştirme kapasitesi | Borç ödemesinin yalnızca tepkisel değil tutarlı gerçekleşmesini sağlar | Kısa vadede özellik çalışması için kullanılabilir kapasiteyi azaltır |

Temel gerilim **acil teslimat baskısı ile uzun vadeli sürdürülebilirlik** arasındadır. Özellik çalışmasının neredeyse her zaman borç iyileştirmesinden daha net, daha acil bir iş savunucusu vardır; bu da toplam maliyeti yüksek olsa bile borcun her tek önceliklendirme kararını kaybetmesi için yapısal bir baskı yaratır. Gerilimi şöyle çözün: borç iyileştirmesini korunan, önceden ayrılmış kapasiteyle kalem kalem yarıştan tamamen çıkarın; böylece ödünleşim, her planlama döngüsünde yeniden tartışılıp çoğunlukla kaybedilmek yerine, bilinçli ve önceden karara bağlanır.

## Ekibinizle tartışılacak sorular

1. **Tek, görünür bir teknik borç iş listemiz var mı, yoksa borç farkındalığı çoğunlukla bireysel mühendislerin kafalarında mı yaşıyor?** Dürüst yanıt ikincisiyse, bu konunun önce kapatılmasını önerdiği tek en büyük boşluk budur.

2. **En üstteki borç kalemimiz için düzeltme maliyetini ve taşıma maliyetini, bir özellik talebiyle adil biçimde karşılaştırılacak kadar belirgin ifade edebilir miyiz?** Edemiyorsak, gerçek, güncel bir kalemle bu nicelleştirmeyi bir grup alıştırması olarak birlikte deneyin.

3. **Mühendislik kapasitemizin yüzde kaçı gerçekte borç iyileştirmesine gidiyor ve bu yüzde bilinçli mi belirlendi, yoksa özellik çalışması dağıtıldıktan sonra geriye kalan her neyse o mu?** Izlenime güvenmek yerine gerçek son sprintlerinize bakın ve gerçek sayıyı hesaplayın.

4. **Borç iş listemiz gerçek iş etkisine göre mi önceliklendirilmiş, yoksa en ısrarla gündeme getirilen ya da en uzun süredir orada duran kaleme göre mi?** Mevcut önceliklendirmenizi değişim yoğunluğu verisiyle (konu 4.3) çapraz kontrol edin ve ikisinin örtüşüp örtüşmediğine bakın.

5. **Hangi borç kalemlerini, aktif bir iş listesinde süresiz bekletmek yerine açıkça kalıcı olarak kabul etmeliyiz?** Düzeltme maliyetinin taşıma maliyetini gerçekten aştığı en az bir gerçek kalem belirleyin ve onu açıkça geri plana alınmış bir duruma taşımayı tartışın.

6. **Borç iş listemiz son bir yılda nasıl değişti: büyüdü mü, küçüldü mü, yoksa sabit mi kaldı ve bu eğilim sezgimizle örtüşüyor mu?** Yalnızca tek bir anlık görüntüye bakmak yerine bunu zaman içinde izleyin; eğilim çoğu zaman herhangi bir anda mutlak büyüklükten daha bilgilendiricidir.

## Sektörel bakış

**Girişim (startup).** Bu aşamada bilinçli, bilgiye dayalı borç çoğu zaman makul bir stratejidir: bir hipotezi doğrulamak için hızlı teslim etmek ve ürün tutarsa belirli kestirmeleri yeniden ziyaret etmek üzere net bir planla ilerlemek meşru bir ödünleşimdir, başarısızlık değil. Risk, kod tabanı büyüdükçe hangi kestirmelerin bilinçli ve geri alınabilir olduğunu, hangilerinin sessizce kalıcı, incelenmemiş yükümlülüklere dönüştüğünü gözden kaçırmaktır.

**Küçük işletme.** Bu ölçekte bilinen kestirmelerinizi ve yaklaşık düzeltme maliyetlerini adlandıran, gayriresmî de olsa basit, paylaşılan bir liste genellikle yeterlidir. Benimsemeye değer asıl disiplin, listeyi sessizce birikip alışkanlıktan dolayı görünmez olmasına izin vermek yerine periyodik olarak yeniden ziyaret etmektir.

**Kurumsal.** Korunan, önceden ayrılmış iyileştirme kapasitesi burada en çok önem taşır; çünkü borç ile özellik çalışması arasındaki bireysel önceliklendirme yarışı, yapısal bir karşı ağırlık olmadan onlarca ekipte aynı anda güvenilir biçimde özelliklerden yana sonuçlanır. Borç kalemlerinin portföy düzeyinde yatırım kararları için ekipler arasında adil biçimde karşılaştırılabilmesi adına borç nicelleştirme uygulamasını kurum genelinde standartlaştırın.

**Kamu.** Uzun ömürlü sistemler, yıllar ya da onlarca yıl boyunca artımlı, tek tek makul gereksinim değişiklikleriyle borç biriktirir; çoğu zaman bir kriz konuyu zorlayana kadar hiçbir resmî borç takibi olmadan. Nicelleştirilmiş, görünür bir borç iş listesi, belirsiz bir "sistem eski" iddiasını belirli, maliyetlendirilmiş bir yatırım gerekçesine dönüştürdüğü için denetim organlarına modernizasyon bütçesini gerekçelendirmek açısından gerçekten ikna edici bir araçtır.

## Örnekler

**Kurumsal.** Bir telekomünikasyon şirketinin faturalama platformu, bir on yıldan fazla süredir gayriresmî olarak kabul edilen ama hiç resmî olarak izlenmeyen teknik borç biriktirmişti; mühendisler retrospektiflerde sürekli "faturalama motoru bir karmaşa" diyor, ama hiçbir takip yapılmıyordu. Yeni bir mühendislik direktörü her ekibin, her kalem için düzeltme maliyetini ve taşıma maliyetini tahmin eden nicelleştirilmiş bir borç iş listesi oluşturmasını şart koştu ve bundan sonra mühendislik kapasitesinin sabit yüzde 15'ini borç iyileştirmesine ayırdı. Bir yıl içinde, sayı olarak toplam iş listesinin küçük bir bölümünü oluşturan en yüksek taşıma maliyetli beş kalem çözüldü ve faturalamayla ilgili dağıtımların değişiklik başarısızlık oranı (konu 2.10) ölçülebilir biçimde iyileşti; bu, iş listesini rastgele bir sırayla ilerlemek yerine önce en yüksek taşıma maliyetli kalemleri hedeflemenin orantısız etkisini gösterdi.

**Kamu.** Bir ulusal istatistik kurumunun, yirmi yıldan fazla önce kurulmuş çekirdek veri işleme sistemi, çalışanlar arasında önemli bölümlerinin kırılgan ve zayıf anlaşıldığına dair yaygın gayriresmî kabule rağmen hiç resmî bir borç değerlendirmesinden geçmemişti. Statik analiz bulgularını, sıcak nokta verisini ve en eski bileşenleri anlayan geriye kalan az sayıda mühendisle yapılan görüşmeleri birleştiren yapılandırılmış bir borç değerlendirmesi, çok yıllı bir modernizasyon bütçesi talebini doğrudan destekleyen nicelleştirilmiş, önceliklendirilmiş bir iş listesi üretti. Kritik olarak, değerlendirme ayrıca kararlı, nadiren dokunulan birkaç eski bileşeni değiştirilmeden bırakılmasının makul olduğu olarak açıkça belirledi; böylece gereksiz yere geniş ve pahalı bir tam sistem yeniden yazımından kaçınıldı ve verinin en yüksek sürekli maliyeti taşıdığını gösterdiği belirli alanlara hedefli bir yatırım tercih edildi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Teknik borcu bilinçli yönetmenin getirisi, önlenen bileşik maliyettir: ele alınmayan her kestirme gelecekteki değişiklikleri biraz daha zorlaştırır ve bu etki müdahale olmadan hızlanır, sonunda basit değişikliklerin bile yavaş ve riskli hâle geldiği kadar kırılgan bir kod tabanı üretir. Yukarıdaki telekomünikasyon örneği getiriyi somut olarak gösteriyor: en yüksek taşıma maliyetli az sayıda kalemi hedeflemek, bu kalemlerin toplam iş listesinin mütevazı bir kesrini temsil etmesiyle orantısız, ölçülebilir bir teslimat ve kalite iyileşmesi üretti.

Toplam sahip olma maliyeti, iyileştirmeye ayrılan korunan kapasitedir; tipik olarak mühendislik zamanının yüzde 10 ile 20'si, ki bu kısa vadede özellik hızıyla yarışan gerçek, görünür bir maliyettir. Bu maliyeti ödemeye değer; çünkü alternatif olan yönetilmeyen, bileşik büyüyen borç, nihayetinde yalnızca ele alınmadan bırakılan belirli kalemlerde değil tüm kod tabanında yavaşlamış teslimat ve yükselmiş kusur oranları olarak çok daha fazlasına mal olur.

## Anti-desenler ve tuzaklar

- **Görünür, izlenen bir borç iş listesi olmaması:** borç önceliklendirme yarışmasını varsayılan olarak kaybeder ve görünmez biçimde bileşik büyür.
- **Belirsiz, nicelleştirilmemiş borç iddiaları:** planlamada somut, nicelleştirilmiş özellik taleplerine karşı nadiren iyi yarışır.
- **Borcu etki yerine yaşa ya da savunuculuk hacmine göre önceliklendirmek:** sınırlı iyileştirme kapasitesini yanlış yönlendirir.
- **İyileştirme için korunan kapasite olmaması:** borç ödemesi rutin, bilinçli bir uygulama olarak değil, yalnızca bir krizden sonra tepkisel biçimde gerçekleşir.
- **Tüm borcu eşit ölçüde düzeltmeye değer saymak:** yüksek taşıma maliyetli kalemler ele alınmadan kalırken düşük etkili kalemlere emek harcar.
- **Borcu, hiçbir zaman kalıcı olduğuna karar vermeden aktif bir iş listesinde süresiz bekletmek:** hiçbir zaman gerçekleşmeyecek gelecekteki işi ima eder ve gerçek önceliklendirmeyi karmaşıklaştırır.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Teknik borç gayriresmî olarak konuşulur; izlenen bir iş listesi ve nicelleştirme yoktur; sürekli özellik çalışmasına kaybeder.
- **Seviye 2, Gelişim:** Bazı ekipler borcu gayriresmî olarak izler, ama tutarlı nicelleştirme, ekipler arası görünürlük ya da korunan iyileştirme kapasitesi yoktur.
- **Seviye 3, Standartlaştırma:** Kurum genelinde görünür, nicelleştirilmiş bir borç iş listesi vardır ve korunan iyileştirme kapasitesi tutarlı biçimde tahsis edilir.
- **Seviye 4, Yönetim:** Borç kalemleri ölçülmüş etkiye (değişim yoğunluğuyla birleşen taşıma maliyeti) göre önceliklendirilir ve kalıcı olarak kabul edilen borç belirsiz bırakılmak yerine açıkça belgelenir.
- **Seviye 5, Orkestrasyon:** Kurum, hedefli borç iyileştirmesine bağlanan belirli, ölçülebilir teslimat ya da kalite iyileştirmelerini gösterebilir ve borç yönetimi, özellik çalışmasıyla birlikte mühendislik yatırım kararlarına rutin ve güvenilen bir girdidir.

## Tartışma önerileri

1. Şu anda en yüksek taşıma maliyetli tek borç kalemimiz hangisi ve onu nicelleştirebilir miyiz?
2. Kapasitemizin yüzde kaçı bugün gerçekte borç iyileştirmesine gidiyor?
3. Hangi borç kalemini iş listemizde belirsiz bırakmak yerine açıkça kalıcı olarak kabul etmeliyiz?
4. Borç iş listemiz son bir yılda büyüdü mü, küçüldü mü, yoksa sabit mi kaldı?
5. Nicelleştirilmiş bir borç değerlendirmesi, mevcut gayriresmî farkındalığımızın kaçırdığı neyi ortaya çıkarırdı?

## Temel çıkarımlar

- Teknik borç **utanç verici bir sır değil, yönetilebilir bir ödünleşimdir**; onu belirsiz, sürekli geri plana itilen bir kaygı olarak bırakmak yerine nicelleştirin.
- Her kalemin özellik çalışmasına karşı adil yarışması için **düzeltme maliyetini ve taşıma maliyetini** nicelleştirin.
- Önceliği yaşa ya da savunuculuk hacmine değil, **etkiye** (değişim yoğunluğuyla birleşen taşıma maliyeti) göre belirleyin.
- Önceden karara bağlanan **korunan, ayrılmış iyileştirme kapasitesi** tahsis edin; aksi hâlde borç, özellik çalışmasına karşı kalem kalem yarışı güvenilir biçimde kaybeder.
- Düzeltme maliyeti taşıma maliyetini aştığında bir kısım borcu aktif bir iş listesinde belirsiz bırakmak yerine **açıkça kalıcı olarak kabul edin**.

## Kaynaklar ve ileri okuma

- Cunningham, Ward, "The WyCash Portfolio Management System" (OOPSLA deneyim raporu, 1992): teknik borç metaforunun kökeni.
- *Managing Technical Debt: Reducing Friction in Software Development*, Philippe Kruchten, Robert Nord ve Ipek Ozkaya (teknik borç ölçümü ve yönetimine kapsamlı bir yaklaşım).
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler (bir borç iş listesinin sonunda başvurduğu iyileştirme teknikleri).
- *Your Code as a Crime Scene*, Adam Tornhill (borç önceliklendirmesine girdi olarak sıcak nokta analizi, konu 4.3).
