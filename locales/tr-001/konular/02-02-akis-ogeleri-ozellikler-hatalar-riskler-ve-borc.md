# 2.2 Akış öğeleri: özellikler, hatalar, riskler ve borç

## Genel bakış ve motivasyon

**Akış öğesi**, Flow Framework'ün iş birimidir ve her akış öğesi dört türden tam olarak birine aittir: **özellikler**, müşteriye sunulan yeni iş değeri ya da yetenek; **hatalar**, kullanıcıların ya da testlerin bulduğu bug'lar için kalite düzeltmeleri; **riskler**, işi koruyan güvenlik, uyumluluk, gizlilik ve yönetişim işleri; ve **borç**, [teknik borç](https://en.wikipedia.org/wiki/Technical_debt), mimari iyileştirme ve gelecekteki hıza olanak sağlayan altyapı işi. Konu 2.1, bu dört kategorinin ait olduğu çerçeveyi tanıttı. Bu konu taksonominin kendisine derinlemesine iner, çünkü kategoriler yalnızca bir ekip işini bunlara dürüstçe ve tutarlı biçimde sınıflandırırsa değer üretir.

Akış öğelerinin belirleyici özelliği, dört tür arasındaki dağıtımın **sıfır toplamlı bir oyun** olmasıdır: herhangi bir dönemde sabit miktarda mühendislik kapasitesi vardır ve özelliğe harcanan her saat borca, riske ya da hataya harcanmamış bir saattir. Bu yazılım teslimatı hakkında yeni bir olgu değildir; her mühendislik lideri kapasitenin sınırlı olduğunu bilir. Ama çoğu kuruluşun fiilî dağılımı görmek için tutarlı ve dürüst bir yolu yoktur. Sprint hızı, türüne bakmadan hikâye puanlarını sayar; bitirilmiş bir backlog, arkasındaki iş yeni bir ödeme akışı da olsa üç aylık gösterişsiz bir güvenlik iyileştirmesi de olsa aynı görünür. Akış öğeleri tam olarak bu görünmez dağılımı görünür kılmak için vardır.

Büyük ekipler için bu görünürlük, kaynak tahsisi konuşmasının doğasını değiştirir. Bir mühendislik liderinin ölçülmemiş bir "teknik borç için daha fazla zamana ihtiyacımız var" argümanı yerine, akış öğesi sınıflandırması gerçek bir sayı üretir: borç geçen çeyrek kapasitenin yüzde 30'unu tüketti. Bu sayı iş paydaşlarıyla tartışılabilir, savunulabilir ve bilinçli biçimde ayarlanabilir. Birçok eşzamanlı ürün hattı yürüten kurumsal organizasyonlar ve yeni vatandaş odaklı işlevselliği eski sistem riskiyle dengeleyen kamu kuruluşları, "bakıma çok fazla zaman harcıyoruz" gibi özel, gayriresmî bir hisse kıyasla çok daha fazla bu tür savunulabilir, ölçülmüş bir ödünleşime dayanır.

## Temel ilkeler

- **Her akış öğesi tam olarak bir türe aittir.** Karma ya da belirsiz bir sınıflandırmaya izin vermek yerine tek bir sınıflandırmayı zorunlu kılmak, taksonomiyi toplu raporlama için kullanılabilir yapan şeydir.
- **Dağıtım sıfır toplamlıdır, toplamsal değil.** Özelliklere ayrılan daha fazla kapasite, aynı dönemde hatalara, riske ve borca ayrılan kapasitenin zorunlu olarak azalması demektir.
- **Evrensel olarak sağlıklı bir dağılım yoktur.** Büyüme aşamasındaki genç bir ürünün özelliklere kayması meşrudur; gerçek teknik risk taşıyan olgun bir sistemin borç ve risk işine kayması meşrudur.
- **Borç ve risk işi, bu disiplin olmadan kronik olarak eksik raporlanır.** Sessizce gerçekleşir, genel "mühendislik görevleri" içinde erir; ta ki akış öğesi sınıflandırması onu görünür kılana dek.
- **Sınıflandırma kalitesi taksonominin tüm değerini belirler.** Tutarsız uygulanan ya da sonradan manipüle edilen bir taksonomi, bilgilendirmek yerine etkin biçimde yanıltan sayılar üretir.

## Öneriler

### Her öğeyi işe girişte, her tür için yazılı bir tanım kullanarak sınıflandırın

Kendi bağlamınızda neyin özellik, hata, risk ve borç sayıldığına dair kısa, yazılı bir tanım üzerinde anlaşın ve her yeni iş parçasının, değer akışına girdiği anda, tamamlandıktan sonra değil, bu tanıma göre sınıflandırılmasını zorunlu kılın. Önceden kararlaştırılmış bir tanım, bir işin sonradan nasıl göründüğüne bakarak geriye dönük sınıflandırma cazibesine direnir; bu konunun hemen aşağıda adlandırdığı manipülasyon riski tam da budur.

### Akış dağılımını tek bir anlık görüntü olarak değil, bir trend olarak raporlayın

Tek bir dönemin dağılımı, birkaç dönemin trendinden daha az şey söyler. Bir öğe türüne doğru istikrarlı bir kayma (çeyrekten çeyreğe özellikler yükselirken borcun sessizce küçülmesi) herhangi bir tek dönemin sayısından çok daha güçlü bir sinyaldir ve genellikle paydaşlarla bir krize dönüşmeden önce, sonrasında değil, gündeme getirilmeye değer örüntüdür.

### İş paydaşlarıyla birlikte, yalnızca mühendislikle değil, bilinçli bir hedef dağılım belirleyin

Ürün ve iş liderliğiyle birlikte, belirli değer akışınızın mevcut aşaması için sağlıklı bir dağılımın nasıl göründüğüne karar verin ve bu hedefi, varsayılan olarak kaymasına izin vermek yerine periyodik olarak gözden geçirin. Genç, büyüme aşamasındaki bir ürünün ve olgun, kararlılık aşamasındaki bir sistemin sağlıklı hedefleri meşru biçimde farklıdır; hedefin kendisi de mühendisliğin tek başına sessizce karar verdiği bir şey değil, pazarlıkla belirlenmiş bir iş kararı olmalıdır.

### Akış öğesi sınıflandırmasını bağımsız kanıtlarla çapraz kontrol edin

Akış dağılımınızı öz sınıflandırmaya dayanmayan metriklerle periyodik olarak karşılaştırın: kaçan hata oranı (konu 5.1), teknik borç ölçümü (konu 4.5) ve güvenlik açığı yönetimi metrikleri (konu 6.4). "Hata" ve "risk" akış öğesi payları sabit kalır ya da küçülürken hatalar veya güvenlik açıkları artıyorsa, bu uyumsuzluk sınıflandırmanın gerçeklikten koptuğunun mevcut en net işaretidir.

### Özellikle özellik fabrikası örüntüsüne dikkat edin

Akış dağılımı, özelliklerin çeyrekten çeyreğe tutarlı biçimde kapasitenin neredeyse tamamını emdiğini ve borç ile risk işinin sembolik bir payın üzerine hiç çıkmadığını gösterdiğinde, bu örüntü ("özellik fabrikası" denir) genellikle sistemin gerçekten bakıma ihtiyaç duymadığını değil, borç ve riskin kapasiteden mahrum bırakıldığını gösterir. Bu örüntü kısa vadede rahattır, sonra pahalıdır; sonunda akış dağılımı grafiğinde hiçbir uyarı olmadan gelen bir kalite ya da güvenlik krizi olarak ortaya çıkar, çünkü altta biriken şey hiç görünür olmamıştır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Resmî sınıflandırma yok (genel backlog) | Süreç yükü yok | Borç, risk ve hata işi görünmez kalır; kaynak kararlarını savunmak zor |
| Dört türlü akış öğesi sınıflandırması | Kapasite dağıtımını paydaşlarla görünür ve pazarlığa açık kılar | İşe girişte disiplin ve her tür için yazılı, üzerinde anlaşılmış bir tanım gerektirir |
| Daha ince taneli sınıflandırma (çok sayıda alt tür) | Daha fazla tanısal ayrıntı | Daha çok sınıflandırma çabası; paydaşlara açıklanacak daha çok sayı |
| Geriye dönük sınıflandırma | Uygulaması kolay, baştan süreç değişikliği yok | Manipülasyona çok açık; sınıflandırma en iyi görüneni yönünde kayar |

Temel gerilim, **sınıflandırma disiplini ile süreç yükü** arasındadır. Dört türlü bir taksonomi bilerek kabadır; bir öğeyi sınıflandırmak tartışma değil saniyeler alacak kadar kaba. Ama bu kabalık ancak işe girişte, yazılı bir tanıma karşı sınıflandırma disiplini gerçekten sürdürülürse işe yarar. Gerilimi şöyle çözün: taksonomiyi tam bu kadar basit tutun (dört tür, fazlası değil) ve ek titizliği, gerçek iş yükü altında aşınan daha ayrıntılı bir sınıflandırma şemasına değil denetim adımına (bağımsız kanıtlara karşı çapraz kontrol) yatırın.

## Ekibinizle tartışılacak sorular

1. **Ekibimizin geçen çeyrekte teslim ettiği her şeyi sınıflandırsak, özellikler, hatalar, risk ve borç arasındaki gerçek dağılım nasıl görünürdü ve bu paydaşlarımızı şaşırtır mıydı?** Çoğu ekip bu alıştırmayı hiç dürüstçe yapmamıştır. Cevabı zaten bildiğinizi varsaymadan önce gerçek veriyle deneyin.

2. **Belirli bağlamımızda neyin özellik, neyin borç, neyin risk sayıldığına dair yazılı, üzerinde anlaşılmış bir tanımımız var mı, yoksa sınıflandırma bileti etiketleyen kişiye mi bağlı?** Gayriresmî ve tutarsız bir tanım, kesin görünen ama dönemler arasında gerçekten karşılaştırılamayan sayılar üretir.

3. **Akış dağılımımız hiç kimse bilinçli karar vermeden bir öğe türüne doğru istikrarlı biçimde kaydı mı?** Yavaş bir kayma dönem dönem kolayca gözden kaçar, ama bir trend olarak çizildiğinde bellidir. Elinizde varsa birkaç dönemin verisini çekin ve bu örüntüyü dürüstçe arayın.

4. **Ürünümüzün mevcut aşaması için sağlıklı bir akış dağılımı nasıl görünürdü ve bu hedef üzerinde iş paydaşlarıyla gerçekten anlaştık mı?** Çoğu kuruluş bu hedefi hiç açık hale getirmemiştir; bu da fiilî dağılım ondan uzaklaştığında bunu fark etmek için ortak bir zemin olmadığı anlamına gelir.

5. **Akış dağılımımız kaçan hata oranı ya da açık güvenlik açığı sayıları gibi bağımsız kanıtlarla örtüşüyor mu, yoksa araştırmaya değer bir uyumsuzluk mu var?** Buradaki bir uyumsuzluk, sınıflandırmanın işin gerçekte ne olduğundan koptuğunun mevcut en net işaretidir.

6. **Ekibimizden biri teslimat baskısı altında bir borç ya da risk öğesini sessizce özellik olarak yeniden etiketleyebilir mi ve bunu yaparsa şu an fark eder miydik?** Bu, konunun merkezî manipülasyon riskinin doğrudan ifadesidir. Birinin bunu kasten yapıp yapmayacağını değil, mevcut sürecinizin bunu gerçekten yakalayıp yakalamayacağını tartışın.

## Sektörel bakış

**Girişim (startup).** Tüm ekip herkesin ne üzerinde çalıştığını zaten bilirken resmî sınıflandırma çoğu zaman yük gibi gelir. Bu ölçekte yararlı asgari, planlama sırasında dört kategoriyi yüksek sesle adlandırmaktır; böylece bir özellik teslim tarihi baskı yarattığında borç ve risk işi sessizce önceliksiz kalmaz. Bu örüntü, kod tabanı ve ekip birlikte büyüdüğünde kötü biçimde birikir.

**Küçük işletme.** Mevcut takip aracınızdaki tek bir özel alan ya da etiket, hiçbir özel araç yatırımı olmadan akış öğesi türünü yakalamaya yeter. İşe girişte tutarlı sınıflandırma disiplini, herhangi bir araç gelişmişliğinden çok daha önemlidir.

**Kurumsal.** Akış öğesi sınıflandırması, bu çerçevenin ölçekte değerini kanıtladığı yerdir; çünkü birçok eşzamanlı değer akışı yürüten büyük bir organizasyonun, kapasitenin özellikler, hatalar, risk ve borç arasında gerçekte nasıl bölündüğünü görmek için başka güvenilir bir toplu yolu yoktur. Araç entegreli sınıflandırmaya ve bağımsız kanıtlara karşı periyodik çapraz kontrollere yatırım yapın; elle yürütülen, plansız sınıflandırma gerçek organizasyon ölçeğinde ayakta kalmaz.

**Kamu.** Akış dağılımı, kamu sektöründeki bir teknoloji liderine daha fazla yeni vatandaş odaklı özelliğin neden teslim edilmediği sorulduğunda savunulabilir, ölçülmüş bir yanıt verir; dürüst yanıt, eski bir sistemin risk ve borç yükünün kapasitenin gerçek, haklı bir payını tüketmesi olduğunda. Bu ödünleşimi sessizce sindirmek yerine açık ve pazarlıkla ortaya koymak, "teknik zorunluluğa" ölçülmemiş bir çağrıdan genellikle denetim organlarıyla daha çok güven kurar.

## Örnekler

**Kurumsal.** Büyük bir perakende şirketinin e-ticaret platformu ekibi, sprint hızına bakarak istikrarlı bir özellik çıktısı verdiğine inanıyordu. İlk dürüst akış öğesi sınıflandırması, "özelliklerin" tamamlanan işin yalnızca yüzde 40'ını oluşturduğunu, büyük bölümü eskiyen bir ödeme sistemine bağlı borcun ise hiçbir önceki raporda o adla anılmadan kapasitenin neredeyse üçte birini tükettiğini gösterdi. Bu dağılımı ürün liderliğine, borç yükünü doğrulayan artan kaçan hata oranıyla birlikte sunmak, ekibin yalnızca niteliksel argümanlarla iki yıldır başarısızca talep ettiği özel bir modernizasyon bütçesini sağladı.

**Kamu.** Bir eyalet motorlu taşıtlar kurumunun dijital ehliyet ekibi, kamuya açık bir kesinti altta yatan sistemin kararlılığına dikkat çektikten sonra backlog'unu ilk kez sınıflandırdı. Alıştırma, görünür vatandaş odaklı özellikler lehine defalarca ertelenen güvenlik yamalarından oluşan "risk" işinin önceki yıl boyunca kapasitenin yüzde 5'inin altına düştüğünü gösterdi; bu örüntü ekibin standart raporlamasında hiç görünmemişti. Kurumun liderliği bulguyu, yalnızca genel bir politika beyanıyla değil akış dağılımı verisiyle desteklenen, bundan sonra uygulanacak asgari bir risk işi payı zorunlu kılmak için kullandı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Akış öğesi sınıflandırmasının getirisi, daha önce niteliksel olarak tartışılan ve çoğu zaman paydaşlara en görünür olan işe yenilen kaynak kararları için savunulabilir, ölçülmüş bir temeldir. Yukarıdaki perakende örneği, genel bir çağrı yerine gerçek kapasite verisiyle bir modernizasyon bütçesi sağlamak, bu disiplinin güvenilir biçimde ürettiği örüntüdür: belirli bir sayıyı, "bakım için daha fazla zamana ihtiyacımız var" gibi genel bir izlenimden çok daha zor reddedersiniz.

Taksonomi ve tanımları üzerinde anlaşıldıktan sonra toplam sahip olma maliyeti düşüktür: sınıflandırma işe girişe saniyeler ekler, anlamlı bir süreç yükü değildir ve onu izlemek için gereken araç entegrasyonu genellikle tek bir özel alan ya da etikettir. Gerçek, süregelen maliyet, teslimat baskısı altında dürüst sınıflandırmayı sürdürme disiplinidir; bu yüzden bağımsız kanıtlara karşı periyodik çapraz kontrol, ilk benimseme kadar önemlidir.

## Anti-desenler ve tuzaklar

- **İşi sonuç bilindikten sonra, geriye dönük sınıflandırmak:** bu konunun kalbindeki manipülasyon vektörü (oyunlama yolu). Teslimat baskısı altındaki bir ekip, borç ya da risk işini sonradan sessizce özellik olarak etiketleyebilir ya da belirsiz bir öğeyi dağılım grafiğinde daha iyi görünen türe yuvarlayabilir; bunların hiçbiri tek başına dürüst olmayan bir karar gibi görünmez. Korkuluk, işe girişte, yazılı bir tanıma karşı sınıflandırma ve akış dağılımını kaçan hata oranı (konu 5.1) ve güvenlik açığı metrikleri (konu 6.4) gibi bağımsız kanıtlarla karşılaştıran periyodik denetimlerdir; konu 1.2'nin bu kitaptaki her metrik için istediği, bağımsız kanıta karşı denetleme disiplini.
- **Özelliklerin tutarlı biçimde kapasitenin neredeyse tamamını emmesine izin vermek (özellik fabrikası örüntüsü):** borç ve risk işini, bir kriz olarak ortaya çıkana dek sessizce mahrum bırakır.
- **Tek bir dönemin dağılımını resmin tamamı saymak:** trend görünümünün açıkça gösterdiği yavaş, birikimli kaymayı kaçırır.
- **Hedef dağılımı iş paydaşları olmadan belirlemek:** çerçevenin ana değerini, ödünleşimin ortak, pazarlıkla kurulmuş anlayışını kaybettirir.
- **Her tür için tutarsız ya da belgelenmemiş bir tanım kullanmak:** kesin görünen ama zaman içinde gerçekten karşılaştırılamayan sayılar üretir.
- **Taksonomiyi çok sayıda alt türle gereğinden fazla mühendislemek:** orantılı kavrayış katmadan disiplini aşındıran sınıflandırma yükü ekler.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** İş genel olarak izlenir, akış öğesi sınıflandırması yoktur; borç ve risk işi raporlamada görünmezdir.
- **Seviye 2, Gelişim:** Bazı ekipler akış öğelerini gayriresmî biçimde sınıflandırır, ancak tanımlar tutarsızdır ve sınıflandırma çoğu zaman geriye dönük yapılır.
- **Seviye 3, Standartlaşma:** Tüm ekipler ortak, yazılı bir tanıma göre işe girişte sınıflandırır ve akış dağılımı bir trend olarak izlenir.
- **Seviye 4, Yönetim:** Akış dağılımı bağımsız kanıtlarla periyodik olarak çapraz kontrol edilir ve hedef dağılımlar iş paydaşlarıyla bilinçli biçimde belirlenir.
- **Seviye 5, Orkestrasyon:** Akış öğesi verisi organizasyon genelinde kaynak ve yatırım kararlarını doğrudan bilgilendirir ve liderlik, sınıflandırma daha önce görünmeyen bir ödünleşimi açık kıldığı için alınmış belirli kararları gösterebilir.

## Tartışma önerileri

1. Geçen çeyrek işinin dürüst bir akış öğesi dağılımı ne gösterirdi ve bu herkesi şaşırtır mıydı?
2. Dört akış öğesi türünün her biri için yazılı bir tanımımız var mı, yoksa sınıflandırma işi kimin etiketlediğine mi bağlı?
3. Akış dağılımımız hiç arkasında bilinçli bir karar olmadan bir öğe türüne doğru kaydı mı?
4. Akış dağılımımızı bugün hangi bağımsız kanıtlara karşı çapraz kontrol edebiliriz?

## Temel çıkarımlar

- Bir **akış öğesi** dört türden (özellikler, hatalar, riskler ya da borç) tam olarak birine aittir ve bunlar arasındaki kapasite dağıtımı **sıfır toplamlıdır**.
- **Evrensel olarak sağlıklı bir dağılım yoktur**; doğru karışım ürünün aşamasına bağlıdır ve iş paydaşlarıyla bilinçli, pazarlıkla belirlenmiş bir hedef olmalıdır.
- Konunun merkezî manipülasyon vektörü **geriye dönük sınıflandırmadır**, yani borç ya da risk işini sonradan sessizce özellik olarak yeniden etiketlemek; korkuluk, işe girişte sınıflandırma artı bağımsız kanıtlara karşı periyodik denetimlerdir.
- Özellikle **özellik fabrikası örüntüsüne** dikkat edin: özelliklerin tutarlı biçimde kapasitenin neredeyse tamamını emmesi, borç ve risk işini bir kriz olarak ortaya çıkana dek mahrum bırakır.
- Akış dağılımı en çok bir **trend** olarak değerlidir ve en büyük getirisi onu doğrudan iş paydaşlarıyla paylaşmaktan gelir.

## Kaynaklar ve ileri okuma

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
