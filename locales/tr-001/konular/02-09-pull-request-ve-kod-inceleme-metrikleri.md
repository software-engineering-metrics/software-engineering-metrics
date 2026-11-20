# 2.9 Pull request ve kod inceleme metrikleri

## Genel bakış ve motivasyon

[Kod incelemesi](https://en.wikipedia.org/wiki/Code_review), konu 2.6'daki cycle time dökümünün içinde çoğunlukla tek başına en büyük bekleme süresi kalemidir. Aynı zamanda, ortak bir platform darboğazının ya da dış bir bağımlılığın aksine, bir ekibin kendi elindeki en doğrudan iyileştirilebilir aşamadır. Bu konu inceleme aşamasının içinde yaşayan belirli metrikleri ele alır: ilk incelemeye kadar geçen süre, pull request boyutu, inceleme yineleme sayısı ve inceleyici yükünün dağılımı. İncelemenin sağlaması beklenen gerçek kalite faydasını feda etmeden inceleme hızını artırmak için bunların nasıl kullanılacağını da anlatır.

Bu konunun en dikkatli olduğu risk, kitabın henüz doğrudan ele almadığı bir risktir: inceleme hızını özensizce optimize etmek, inceleme kalitesini sessizce aşındırabilir. Her şeyi lastik damgayla onaylayarak ilk incelemeye kadar geçen süreyi yarıya indiren bir ekip bir metriği iyileştirmiş, ama uygulamanın asıl değerini yok etmiştir. Bu konudaki her öneri bu ödünleşim akılda tutularak yazıldı. Çünkü pull request metrikleri bu kitaptaki en kolay manipüle edilebilir metrikler arasındadır: panoda iyi görünürken kod tabanını ölçülebilir biçimde kötüleştirebilirler.

Büyük ekipler için inceleme metrikleri, aksi halde görünmeyecek yük dengeleme sorunlarını ortaya çıkarır: inceleme yükünün orantısız bir bölümünü üstlenen az sayıda kıdemli mühendis, incelemelerin sürekli takıldığı belirli bir ekip ya da kod tabanı alanı, inceleyicinin ne kadar özenli olduğundan bağımsız olarak titiz incelemeyi fiilen imkânsız kılan aşırı büyük pull request'ler. Bu örüntüler, herkesin dengesizliği bir metrik olmadan doğrudan görebildiği küçük bir ekibe kıyasla, ölçek büyüdükçe çok daha fazla birikir.

## Temel ilkeler

- **İlk incelemeye kadar geçen süre genellikle en büyük kaldıraçtır; incelemenin titizliği değil.** Gecikmenin çoğu, inceleme konuşması başladıktan sonra uzamasından değil, pull request'in bakılmayı beklemesinden gelir.
- **Daha küçük pull request'ler yalnızca daha hızlı değil, daha titiz de incelenir.** Boyut, hem hız hem kalite için aynı anda bir kaldıraç noktasıdır.
- **İnceleme hızı ile inceleme kalitesi kendiliğinden çatışmaz, ama özensizce birbirine karşı ödünleşebilir.** Bu ödünleşime karşı açıkça önlem alın.
- **İnceleyici yük dengesizliği yaygındır ve bir metrik olmadan genellikle görünmezdir.** Az sayıda kişi çoğu zaman orantısız bir payı üstlenir.
- **Bu metrikler lastik damga manipülasyonu riskine açıktır.** Gerçek bir inceleme olmadan verilen hızlı bir onay, incelemenin tüm amacını boşa çıkarır.

## Öneriler

### Ana hız metriği olarak ilk incelemeye kadar geçen süreyi izleyin

Bir pull request'in açılmasından, bir inceleyicinin ilk esaslı yorumuna ya da onayına kadar geçen aralığı ölçün ve bunu sürüm kontrol platformunuzdan otomatik olarak ölçümleyin. Bu, inceleme aşaması içinde genellikle baskın bekleme süresi kalemidir (konu 2.5, konu 2.6). Daha net inceleme atama normları, bildirim uygulamaları ya da ayrılmış inceleme zaman blokları gibi yollarla iyileştirmek, bir ekibin elindeki genel cycle time için çoğunlukla en büyük tekil iyileştirmeyi sağlar.

### Pull request boyutunu izleyin ve daha küçük değişiklikleri etkin biçimde teşvik edin

Pull request başına değişen satır ya da dokunulan dosya sayısını ölçün. Sürekli büyük bir medyan boyutu, doğrudan ele alınmaya değer bir işaret olarak görün. Daha küçük pull request'ler daha hızlı incelenir, daha titiz incelenir (inceleyici değişikliğin tamamını gerçekten kafasında tutabilir) ve bir şey ters giderse geri almak daha kolaydır. Bu, konu 2.10'daki dağıtım sıklığının ardındaki parti büyüklüğü ilkesine doğrudan bağlanır. İş izin verdiği yerde büyük değişiklikleri, birbirinden bağımsız incelenebilen daha küçük pull request'ler dizisine bölmeyi teşvik edin.

### İnceleyici yük dağılımını açıkça izleyin

Kişi başına tamamlanan inceleme sayısını kayan bir pencerede izleyin. Özellikle az sayıda kişinin orantısız bir payı üstlenip üstlenmediğine bakın. Bu örüntü yaygındır, çoğunlukla en kıdemli ya da en güvenilen mühendislere düşer ve hem bir darboğaz (onların uygunluğu tüm ekibin inceleme throughput'unu sınırlar) hem de bir tükenmişlik riski yaratır (konu 3.2, esenlik metriklerini daha ayrıntılı ele alır). İnceleme sorumluluğunu, en hızlı yanıt veren kişinin etrafında kendiliğinden toplanmasına izin vermek yerine, bilinçli olarak döndürün.

### Lastik damga manipülasyon riskine karşı açıkça önlem alın

İlk incelemeye kadar geçen süreyi bir kalite sinyaliyle eşleştirin: sıfır inceleme yorumuyla onaylanan değişikliklere kadar izlenen kusur ya da olay oranı veya yakın zamanda incelenmiş kod için gereken birleştirme sonrası düzeltme oranı. Gerçek bir inceleme olmadan onaylayarak inceleme hızını artıran bir ekip, bu korkuluğun bozulduğunu görmelidir. Bu, konu 1.2'deki eşleştirme ilkesinin bu metrik ailesine uygulanmış halidir. Bu karşı metrik görüşünüzde olmadan inceleme hızının peşinden asla koşmayın.

### İnceleme yineleme sayısını bireyleri yargılamak için değil, sürtünmeyi fark etmek için kullanın

Bir pull request'in birleştirilmeden önce geçtiği inceleme turu sayısı gerçek bir sürtünmeye işaret edebilir: belirsiz gereksinimler, yaklaşım konusunda anlaşmazlık, tutarsız stil beklentileri. Bunlar süreç düzeyinde araştırmaya değer. Bu sayıyı tek tek yazarları ya da inceleyicileri doğrudan yargılamak için kullanmaktan kaçının. Yüksek yineleme sayısı çoğunlukla kişisel değil, sistem ya da iletişim sinyalidir. Onu bireysel bir karneye çevirmek, konu 1.1'in uyardığı değerlendirme kaymasını riske atar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yalnızca ilk incelemeye kadar geçen süre için optimizasyon | Hızlı, net sinyal, ölçümlemesi kolay | Korumasız bırakılırsa yüzeysel, lastik damga incelemeyi teşvik edebilir |
| Yalnızca pull request boyutunu küçültme için optimizasyon | Hız ve titizliği aynı anda iyileştirir | Her iş temiz biçimde küçük artışlara bölünmez |
| İnceleme yükünü eşit döndürme | Darboğaz ve tükenmişlik riskini azaltır | Belirli uzmanlık gerektiren, incelemesi zor kodun incelemesini yavaşlatabilir |
| İncelemeyi kıdemli mühendislerde toplama | Derin alan uzmanlığı tutarlı biçimde uygulanır | Zamanla darboğaz ve tükenmişlik riski yaratır |

Temel gerilim **hız ile inceleme derinliği** arasındadır. Bu konudaki incelemeyi hızlandırmaya yönelik her teknik (daha hızlı ilk yanıt, daha küçük pull request'ler, daha dağıtık inceleyici yükü) bu konunun önerdiği kalite korkuluğu olmadan izlenirse gerçek incelemeden vazgeçme riski taşır. Gerilimi şöyle çözün: her hız metriğini, aynı dönemde izlenen bir kalite sinyaliyle eşleştirin. Böylece bir ekip gerçek süreç iyileşmesini, sessizce aşınan bir inceleme standardından ayırt edebilir.

## Ekibinizle tartışılacak sorular

1. **Gerçek ilk incelemeye kadar geçen sürenimiz nedir ve inceleme aşaması genel cycle time'ımızın ne kadarını tüketiyor?** Izlenime güvenmek yerine gerçek sayıyı çekin. İnceleme bekleme süresi çoğunlukla ekiplerin varsaydığından büyüktür, çünkü aktif çalışmak yerine beklenen süreyi küçümsemek kolaydır.

2. **Medyan pull request boyutumuz nedir ve bu boyut düşse inceleme gecikmemizin ne kadarı azalırdı?** Büyük pull request'ler hem daha yavaş incelenir hem de bir inceleyici hepsini bir anda kafasında tutamadığı için yüzeysel inceleme alma olasılığı daha yüksektir. Yalnızca medyana değil, gerçek boyut dağılımınıza bakın.

3. **İnceleme yükü az sayıda kişide yoğunlaşmış mı ve bunlardan biri iki hafta ortadan kalksa inceleme throughput'umuza ne olurdu?** Bu soru aynı anda hem bir darboğaz riskini hem bir tükenmişlik riskini ortaya çıkarır. İzlenime güvenmek yerine gerçek inceleyici yükü verisini çekin.

4. **Bir inceleme hızı metriğini, geriye dönüp bakınca gerçek incelemeyi azaltacak biçimde iyileştirdiğimiz oldu mu?** Burada dürüst olun. Bu konunun adını koyduğu lastik damga riskinin tam kendisidir ve bilinçli bir karar olmadan içine kaymak kolaydır.

5. **Ekibimizde yüksek inceleme yineleme sayısı genellikle neye işaret eder: gerçek anlaşmazlığa, belirsiz gereksinimlere, yoksa tutarsız stil beklentilerine?** Olağandışı yüksek yineleme sayılı pull request'lerden bir örneklem alın ve bunun yazar ya da inceleyici hakkında kötü bir şey söylediğini varsaymak yerine gerçek örüntüyü teşhis edin.

6. **İnceleme hızı metriklerimizle eşleştirilmiş bir kalite korkuluğumuz var mı, yoksa hızı tek başına mı izliyoruz?** Dürüst cevap böyle bir korkuluğun olmadığıysa, konu 1.2'nin eşleştirme ilkesi uyarınca inceleme hızını daha fazla zorlamadan önce bu boşluğu kapatmaya değer.

## Sektörel bakış

**Startup.** Küçük bir ekiple inceleme çoğunlukla varsayılan olarak hızlıdır, bazen neredeyse fazla hızlıdır: herkes herkese güvendiği için asgari titizlikle tek onaylayıcılı inceleme. Ekip büyürken dikkat edilecek risk, inceleme kalitesinin ekip boyutuyla birlikte ölçeklenmemesidir. Beş mühendis için işe yarayan gayriresmi güven, elli mühendis için kendiliğinden işe yaramaz.

**Küçük işletme.** Çoğu sürüm kontrol platformu birleştirmeye kadar geçen süre ve inceleme sayısı istatistiklerini kutudan çıkar çıkmaz raporlar. Özel ölçümleme kurmak yerine bunları kullanın. Benimsemeye değer asıl disiplin, ekip büyürken inceleme yükünün sessizce bir iki kişide toplanıp toplanmadığını fark etmektir.

**Kurumsal.** İnceleyici yük dengesizliği ve uzmanlık bilgisi darboğazları burada özellikle yaygındır. Kritik bir sistemdeki derin alan uzmanlığı, ekip boyutundan bağımsız olarak inceleme sorumluluğunu küçük bir grupta yoğunlaştırabilir. Uzmanlığı yaymak için bilinçli bilgi paylaşımına ve inceleme rotasyonuna yatırım yapın. Böylece hem darboğazı hem de o uzmanlığın çok az kişide yaşamasının bus factor riskini azaltırsınız.

**Kamu.** Buradaki inceleme süreçleri kalite hedeflerinin yanında çoğu zaman uyum ağırlığı da taşır. Bu, pull request'leri daha büyük ve incelemeleri tasarım gereği daha yavaş yapabilir. Gerçek uyum gereksinimleri titiz inceleme gerektirdiğinde, iyileştirme çabasını incelemenin gerçek derinliğinden ödün vermek yerine bekleme süresini azaltmaya (daha hızlı inceleme ataması, daha net önceliklendirme) odaklayın. Düzenleyici nedenlerle inceleme titizliği ağır kalmak zorundaysa ödünleşimi açıkça belgeleyin.

## Örnekler

**Kurumsal.** Bir siber güvenlik şirketinin mühendislik organizasyonu, iki yüz kişilik bir kurumda tüm kod incelemelerinin yüzde 40'ından fazlasını bir avuç kıdemli mühendisin tamamladığını buldu. İnceleyici yükü verisi çekilene kadar kimse bu dengesizliği doğrudan ölçmemişti. Bu yoğunlaşma hem bir darboğazdı, çünkü o mühendislerin uygunluğu tüm kurumun inceleme throughput'unu sınırlıyordu, hem de bir katılım anketinin ayrıca işaret ettiği bir tükenmişlik riskiydi (konu 3.2). Kurum, hedefli bilgi paylaşım oturumlarıyla eşleştirilmiş yapılandırılmış bir inceleme rotasyonu programı getirdi. İki çeyrek içinde inceleme yükü çok daha geniş bir gruba yayıldı ve azalan darboğazın doğrudan yan etkisi olarak ilk incelemeye kadar geçen süre iyileşti.

**Kamu.** Bir vergi idaresinin mühendislik ekibi, teslimat hızını artırma baskısı altında, ilk incelemeye kadar geçen süreyi yarıya indirme hedefi koydu. Bir çeyrek içinde hedef tutturuldu, ancak sonraki bir kalite denetimi, tek ve kısa bir yorumla onaylanan değişikliklerde yoğunlaşan, birleştirme sonrası kusur düzeltme pull request'lerinde keskin bir artış buldu. Ekibin çözümü, hız hedefini açık bir kalite korkuluğuyla eşleştirmekti: bir incelemeden sonraki iki hafta içinde gereken birleştirme sonrası düzeltme oranı. Ayrıca ekibi esaslı bir incelemenin gerçekte neyi gerektirdiği konusunda yeniden eğitti. Böylece daha iyi inceleme ataması ve daha küçük pull request boyutlarından gelen hız iyileşmesinin çoğunu korurken gerçek titizlik yeniden sağlandı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

İyi yönetilen inceleme metriklerinin getirisi, kaliteden feragat etmeden daha hızlı teslimattır. Bu nadir bir birleşimdir: çoğu teslimat iyileştirmesi bir yerde hızı riskle takas eder. Ancak inceleme aşamasındaki iyileştirmeler (daha küçük pull request'ler, daha iyi yük dağılımı, daha hızlı ilk yanıt), bu konunun önerdiği kalite korkuluğuyla izlendiğinde gerçekten ikisini birden iyileştirir. Yukarıdaki siber güvenlik örneği tipiktir: bir darboğazı gidermek hızı artırdı, uzmanlık daha geniş yayıldıkça temel inceleme kalitesi de, değişen bir şey olduysa, iyileşti.

Toplam sahip olma maliyeti (TCO) düşüktür. Bu metriklerin çoğu, asgari ek ölçümlemeyle doğrudan mevcut sürüm kontrol platformu verisinden gelir. İşaret ettikleri süreç değişiklikleri (inceleme rotasyonu, daha küçük pull request'leri teşvik) araç yatırımından çok disiplin maliyeti taşır.

## Anti-desenler ve tuzaklar

- **İlk incelemeye kadar geçen süreyi eşleştirilmiş bir kalite korkuluğu olmadan optimize etmek:** incelemenin amacını boşa çıkaran lastik damga onayı davet eder.
- **İnceleyici yük yoğunlaşmasını görmezden gelmek:** ölçülene kadar görünmez kalan hem bir darboğaz hem bir tükenmişlik riski yaratır.
- **İnceleme yineleme sayısını bireysel karne olarak ele almak:** çoğunlukla kişisel değil, sistem ya da iletişim sinyalidir.
- **Sürekli büyük pull request'leri kaçınılmaz saymak:** büyük değişikliklerin çoğu, ekiplerin başta varsaydığından daha fazla bölünebilir.
- **Değişiklik riskinden bağımsız tek tip inceleme derinliği uygulamak:** düşük riskli değişikliklerde titizliği boşa harcarken yüksek riskli olanları yeterince incelememe ihtimali taşır.
- **İnceleme hızını ölçüp gerçek titizliğin onunla birlikte düşüp düşmediğini hiç kontrol etmemek:** bu metrik ailesinin istemeden manipüle edilmesinin en yaygın yoludur.

## Olgunluk modeli

- **Düzey 1, Başlangıç (Initiate):** İnceleme metrikleri izlenmez; inceleme yükü dağılımı ve pull request boyutu görünmezdir.
- **Düzey 2, Geliştirme (Develop):** Platform varsayılanlarından bazı inceleme hızı verisi vardır, ancak kalite korkuluğu ve inceleyici yükünün etkin yönetimi yoktur.
- **Düzey 3, Standartlaştırma (Standardize):** İlk incelemeye kadar geçen süre, pull request boyutu ve inceleyici yükü tutarlı biçimde izlenir; hız iyileştirmelerine karşı açık bir kalite korkuluğu eşleştirilmiştir.
- **Düzey 4, Yönetme (Manage):** İnceleyici yükü rotasyon ve bilgi paylaşımıyla etkin biçimde yeniden dengelenir; yineleme sayısı örüntüleri bireysel değil süreç düzeyinde araştırılır.
- **Düzey 5, Yönlendirme (Orchestrate):** İnceleme aşaması metrikleri doğrudan süreç yatırımını bilgilendirir. Kurum, uzun bir dönem boyunca hem inceleme hızında hem de incelemeyle bağlantılı kalite sonuçlarında eşzamanlı iyileşme gösterebilir.

## Tartışma önerileri

1. Mevcut medyan ilk incelemeye kadar geçen sürenimiz nedir ve bu süre gerçekte nereye gidiyor?
2. İnceleme yükümüz az sayıda kişide yoğunlaşmış mı ve biri ulaşılamaz olursa risk nedir?
3. İnceleme hızını, istemeden bile olsa, gerçek titizlik pahasına hiç iyileştirdik mi?
4. Medyan pull request boyutumuz nedir ve değişikliklerin çoğu gerçekçi olarak ne kadar küçük olabilir?
5. Yüksek bir inceleme yineleme sayısını sistem sinyali mi yoksa bireysel yargı mı sayıyoruz?

## Temel çıkarımlar

- **İlk incelemeye kadar geçen süre**, inceleme aşamasında genellikle en büyük tekil kaldıraçtır; inceleme konuşmasının uzunluğundan fazla.
- **Daha küçük pull request'ler** hem inceleme hızını hem inceleme titizliğini aynı anda iyileştirir.
- **İnceleyici yük dengesizliği** yaygındır ve doğrudan ölçüm olmadan genellikle görünmezdir; hem bir darboğaz hem bir tükenmişlik riski yaratır.
- Bu metrik ailesinin özellikle yatkın olduğu lastik damga manipülasyon riskini yakalamak için her inceleme hızı metriğini açık bir **kalite korkuluğuyla** eşleştirin.
- **İnceleme yineleme sayısını** tek tek yazarları ya da inceleyicileri yargılamak için değil, sistem düzeyindeki sürtünmeyi teşhis etmek için kullanın.

## Kaynaklar ve ileri okuma

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez Humble ve Gene Kim (kod inceleme uygulamaları ve teslimat performansıyla ilişkisi).
- Alberto Bacchelli ve Christian Bird'ün *Modern Code Review* araştırması (kod inceleme uygulamalarının ölçekte ampirik incelemesi).
- *Peer Reviews in Software: A Practical Guide*, Karl E. Wiegers (inceleme süreci tasarımı ve ödünleşimleri).
- *The Principles of Product Development Flow*, Donald G. Reinertsen (pull request boyutlandırmasına uygulanan parti büyüklüğü akıl yürütmesi).
