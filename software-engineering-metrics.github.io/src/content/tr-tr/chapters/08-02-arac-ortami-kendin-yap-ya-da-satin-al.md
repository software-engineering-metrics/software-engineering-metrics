# 8.2 Araç ortamı: kendin yap ya da satın al

## Genel bakış ve motivasyon

Bu kitabın rehberliğini uygulayan her kurum eninde sonunda pratik bir altyapı
kararıyla karşılaşır: metrik araçlarını kurum içinde geliştirmek, ticari bir
mühendislik analitiği platformu satın almak ya da uygulamada en sık görüldüğü
gibi ikisini bir arada kullanmak. Bu konu, konu 5.5'in başka her mühendislik
yatırımına uyguladığı titizliği bu karara da uygular: bağlamdan bağımsız,
herkese aynı biçimde uygulanan hazır bir yanıt yerine, kurumunuzun ölçeğine,
mevcut veri kaynaklarına ve bu kitaptan gerçekten izlemeyi düşündüğünüz
metriklere özgü, dürüst bir maliyet-fayda analizi.

Ticari mühendislik analitiği araçları pazarı hayli olgunlaştı ve birçok platform
artık DORA metrikleri (2. bölüm), pull request ve gözden geçirme verisi (konu
2.9) ve giderek artan biçimde geliştirici deneyimi anketi altyapısı (konu 3.7)
için sağlam, büyük ölçüde otomatik enstrümantasyon sunuyor. Bu olgunluk, birçok
kurum için hesabı en azından temel katmanı satın almaya kaydırdı; ancak
kendin yap seçeneğinin, özel ihtiyaçlar için gerçek avantajlarını ortadan
kaldırmadı. Özellikle konu 7.4'ün artık bir metrik programının zorunlu merkezi
olduğunu savunduğu sonuç telemetrisi için bu geçerlidir; bu telemetri, kitabın
kapsadığı ölçüm kategorileri arasında çoğu zaman en az standartlaşmış ve en
kuruma özgü olanıdır.

Büyük ekipler için bu karar, gerçek ve süregelen bütçe ve mühendislik kapasitesi
sonuçları doğurur. Kurumsal şirketlerin çoğu zaman metrik araçlarını eski ve
modern sistemlerden oluşan gerçekten heterojen bir ortamda bütünleştirmesi
gerekir; bu da kendin yap ya da satın al hesabını önemli ölçüde şekillendirir.
Kamu kuruluşları ise sıklıkla, hangi ticari seçeneklerin uygulanabilir
olduğunu bile ciddi biçimde etkileyen tedarik kısıtlarıyla ve veri egemenliği
ya da güvenlik gereksinimleriyle karşılaşır; bu da yalnızca maliyet-fayda
analizinin önereceğinden bağımsız olarak kararı bazen geliştirmeye, bazen de
belirli, denetlenmiş satıcılara doğru eğer.

## Temel ilkeler

- **Bu nadiren ya hep ya hiç bir karardır.** Olgun metrik programlarının çoğu,
  iyi standartlaşmış metrikler için satın alınan araçları, kuruma özgü sonuç
  telemetrisi için geliştirilen araçlarla birleştirir.
- **İyi standartlaşmış, yaygın biçimde gereken metrikler için satın alın;
  gerçekten kuruma özgü olanlar için geliştirin.** DORA metrikleri ve pull
  request analitiği hazır mal alanıdır; sizin özel iş sonucu ilişkilendirmeniz
  (konu 5.3) çoğunlukla değildir.
- **Veri sahipliği ve taşınabilirlik, özellik karşılaştırması kadar önemlidir.**
  Metrik verinizi kilitleyen bir araç, yalnızca bir rahatsızlık değil, kalıcı
  bir risktir.
- **Entegrasyon maliyeti, kendin yap ya da satın al analizinde sıklıkla
  hafife alınır**, her iki seçenek için de.
- **Tedarik, güvenlik ve veri egemenliği kısıtları saf bir maliyet-fayda
  hesabını geçersiz kılabilir**, özellikle kamu kuruluşları için.

## Öneriler

### Hazır mal katmanı için satın alın: DORA, gözden geçirme ve anket altyapısı

Olgun, yaygın biçimde bulunan ticari araçları olan metrik aileleri için (DORA
metrikleri enstrümantasyonu (2. bölüm), pull request ve kod gözden geçirme
analitiği (konu 2.9) ve geliştirici deneyimi anket platformları (konu 3.7))
satın almak, belirli bir ölçeğin altındaki çoğu kurum için genellikle daha iyi
ekonomik seçimdir; çünkü eşdeğer altyapıyı kurmak, birçok satıcının zaten
ağır biçimde yatırım yaptığı mühendislik çabasını tekrarlar ve kendi
sürümünüzü kurmaktan elde edilecek gerçek farklılaşma sınırlıdır.

### Gerçekten kuruma özgü sonuç telemetrisi için geliştirin

Konu 7.4'ün metrik programınızın ağırlık merkezi olması gerektiğini savunduğu
sonuç metrikleri için (iş sonucu ilişkilendirmesi (konu 5.3), ürününüze özgü
özellik benimsenmesi (konu 5.2), maliyet yapınıza özgü birim ekonomisi (konu
5.4)) ticari araçlar çok daha az standartlaşmıştır ve kurumunuzun özel iş
mantığını ve veri modelini, genellikle sonucun tam denetimiyle eşdeğer
yeteneği kurum içinde geliştirmekten daha pahalıya gelebilecek kapsamlı,
masraflı özelleştirme olmadan yakalayamaz.

### Bir satıcıya bağlanmadan önce veri sahipliğini ve taşınabilirliğini değerlendirin

Ticari bir sözleşme imzalamadan önce, tüm geçmiş metrik verinizi kullanılabilir,
standart bir biçimde dışa aktarabildiğinizi doğrulayın ve satıcı değiştirirseniz
ya da hizmeti bırakırsanız bu verinin ve geçmişinin ne olacağını anlayın. Veri
[kilitlenmesi](https://en.wikipedia.org/wiki/Vendor_lock-in) nedeniyle
çıkması zorlaşan bir satıcı ilişkisi yalnızca bir rahatsızlık değil, kalıcı
bir kurumsal risktir ve bu değerlendirme, çok yıllı herhangi bir önemli
altyapı taahhüdüyle aynı ciddiyeti hak eder.

### Kararın her iki tarafında entegrasyon maliyetini gerçekçi biçimde bütçeleyin

İster geliştirin ister satın alın, entegrasyon maliyeti (aracı gerçek sürüm
kontrolünüze, CI/CD'nize, olay takibinize ve iş sistemlerinize bağlamak),
her iki yol için ilk planlamada sıklıkla hafife alınır. Bu entegrasyon çabasını,
kendin yap ya da satın al analizinizde ayrı, önemli bir kalem olarak açıkça
bütçeleyin; ticari bir aracın asgari kurulumla kutudan sonuçğı gibi çalışacağını
ya da kendi geliştirdiğiniz çözümün entegrasyon maliyetinin geliştirme
maliyetine küçük bir ek olduğunu varsaymayın.

### Tedarik, güvenlik ve egemenlik kısıtlarını açıkça ve erken hesaba katın

Kamu ve düzenlemeye tabi kurumsal kuruluşlarda veri egemenliği gereksinimleri,
güvenlik sertifikasyonu ihtiyaçları ve tedarik süreçleri, özellik kalitesinden
bağımsız olarak bazı ticari seçenekleri ciddi biçimde daraltabilir ya da
eleyebilir; bazen kararı geliştirmeye ya da özellikle denetlenmiş daha küçük
bir satıcı kümesine doğru eğer. Bu kısıtları değerlendirme sürecinin başında
açıkça belirleyin; gerçek yeteneğiyle ilgisiz nedenlerle uygulanamaz çıkan bir
seçeneğe zaten büyük değerlendirme çabası harcandıktan sonra keşfetmeyin.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Ticari araç satın almak | Hızlı devreye alınır, olgun özellik seti, bakımı satıcıda | Kuruma özgü sonuç metrikleri için daha az özelleştirilebilir; olası kilitlenme |
| Kurum içi araç geliştirmek | Tam özelleştirilmiş, tam veri sahipliği ve denetimi | Önemli, süregelen mühendislik yatırımı; hazır mal metrikleri için çabayı tekrarlar |
| Hibrit: hazır mal katmanını satın al, sonuç katmanını geliştir | Maliyet verimliliğini, en çok önemli olduğu yerde gerçek özelleştirmeyle dengeler | Satın alınan ve geliştirilen bileşenleri tutarlı biçimde bağlamak için entegrasyon işi gerektirir |
| Sonuç telemetrisi dâhil her şeyi, kapsamlı satıcı özelleştirmesiyle satın almak | Tek satıcı ilişkisi, potansiyel olarak daha basit tedarik | Geliştirmek kadar pahalıya gelebilir, sonuç üzerinde nihai denetim daha az |

Temel gerilim **özelleştirme ihtiyacı ile geliştirme maliyeti** arasındadır.
Özelleştirmeden en çok yararlanan metrikler, yani doğrudan işinize bağlı sonuç
telemetrisi, aynı zamanda iyi geliştirilmesi en pahalı olanlardır; satın almak
en ucuz olan metrikler, yani DORA ve gözden geçirme analitiği ise gerçek
özelleştirmenin en az önemli olduğu yerlerdir. Gerilimi, kararı doğrudan bu
örüntüyle eşleştirerek çözün: standartlaşmanın size iyi hizmet ettiği yerde
satın alın, özel bağlamınızın gerçekten gerektirdiği yerde geliştirin ve bu
ayrımın her iki tarafında entegrasyon maliyetini gerçekçi biçimde bütçeleyin.

## Ekibinizle tartışılacak sorular

1. **Bu kitabın kapsadığı her metrik ailesi için özelleştirmeden gerçekten
   yararlanır mıyız, yoksa standart bir ticari araç bize aynı derecede iyi mi
   hizmet eder?** 2. ile 6. bölümleri açıkça gözden geçirin ve her metrik
   ailesini bu özel sınamaya göre satın al ya da geliştir sütununa ayırın.

2. **Mevcut ya da aday satıcımızın veri dışa aktarma ve taşınabilirlik
   seçeneklerini değerlendirdik mi, yoksa gerekirse kolayca ayrılabileceğimizi
   mi varsayıyoruz?** Varsaymak yerine bunu doğrudan kontrol edin; veri
   kilitlenmesi çoğu zaman kurum gerçekten geçiş yapmaya çalıştığında fark
   edilir.

3. **İlk kendin yap ya da satın al analizimiz entegrasyon maliyetini gerçekçi
   biçimde hesaba kattı mı, yoksa ağırlıklı olarak lisans ücretleri ile
   geliştirme saatlerine mi odaklandı?** Yakın tarihli bir araç kararına geri
   dönün ve entegrasyon maliyetinin gerçekten tahmin edilip edilmediğine ya da
   ciddi biçimde hafife alınıp alınmadığına bakın.

4. **Özellik kalitesinden bağımsız olarak bazı ticari seçenekleri eleyecek
   tedarik, güvenlik ya da veri egemenliği kısıtlarıyla karşı karşıya mıyız?**
   Uygulanamaz çıkabilecek seçeneklere büyük değerlendirme çabası
   harcamadan önce, sonra değil, bu kısıtları açıkça belirleyin.

5. **Mevcut araç ortamımız, kendin yap ile satın almayı her birinin anlamlı
   olduğu yere eşleyen bilinçli bir hibrit mi, yoksa zaman içinde tek tek makul
   ama gelişigüzel kararlarla mı birikti?** Mevcut durumunuzu hangi örüntünün
   gerçekten tanımladığı konusunda dürüst olun.

6. **Gerekirse mevcut metrik aracı satıcımızı bugün değiştirmek bize çaba ve
   risk olarak neye mal olurdu?** Bu somut soru, satıcının sözleşme
   şartlarının sözde vaat ettiğinin ötesinde, veri kilitlenmesi riskine
   gerçek maruziyetinizi sınar.

## Sektörel bakış

**Startup.** Bu ölçekte varsayılan olarak hazır mal araçları satın alın; özel
metrik altyapısı geliştirmek, özellikle DORA ve gözden geçirme metrikleri için
olgun, ucuz ticari seçenekler varken, kıt erken mühendislik kapasitesinin nadiren
iyi bir kullanımıdır. Geliştirme çabasını, ürününüzün çekirdek değerini en
doğrudan yansıtan tek sonuç metriğine (konu 5.3) saklayın.

**Küçük işletme.** Ticari araç seçeneklerinin çoğu makul biçimde küçülür ve
daha küçük kuruluşlar için ulaşılabilir fiyatlıdır; hazır mal katmanını satın
almak neredeyse her zaman doğru seçimdir ve kurumunuz epeyce büyüyüp gerçekten
özel ihtiyaçlar geliştirene kadar özel bir şey geliştirmek nadiren haklı
çıkar.

**Kurumsal.** Bu konunun önerdiği hibrit yaklaşım karmaşıklığını burada hak
eder: hazır mal katmanını ölçekte satın alın (çoğu zaman elverişli şartlar
için anlamlı pazarlık gücüyle) ve kuruma özgü sonuç telemetrisi katmanını
bilinçli olarak geliştirmeye yatırım yapın; çünkü bu ölçekteki iş mantığınız
ve veri modeli karmaşıklığınız genellikle genel ticari araçların kapsamlı,
masraflı özelleştirme olmadan karşılayabileceğinden fazladır.

**Kamu.** Tedarik süreçleri, güvenlik sertifikasyonu gereksinimleri ve veri
egemenliği kısıtları, bu kararda çoğu zaman saf özellik ya da maliyet
karşılaştırmasının önerdiğinden daha baskındır. Değerlendirme sürecinin
başında tedarik ve güvenlik paydaşlarını işe katın ve geliştirme seçeneğinin
burada karşılaştırılabilir bir özel sektör bağlamından gerçekten daha cazip
olmasına hazırlıklı olun; bunun nedeni geliştirmenin doğası gereği daha iyi
olması değil, tam da bu kısıtlardır.

## Örnekler

**Kurumsal.** Bir yazılım şirketi başlangıçta 2. bölümden 6. bölüme her metrik
ailesini kapsayan, tamamen özel bir metrik platformu geliştirmeye çalıştı;
çok yıllı bu çaba önemli mühendislik kapasitesi tüketti ve yine de özellikle
standartlaşmış DORA ve gözden geçirme metrikleri için olgun ticari ürünlerin
gerisinde kaldı. Gözden geçirilmiş strateji, bu hazır mal metrikleri için
ticari bir platform benimsedi; bu da kurum içi platform ekibini yalnızca
şirketin iş modeline gerçekten özgü, hiçbir ticari aracın kutudan sonuçğı gibi
sağlayamayacağı iş sonucu ilişkilendirmesi ve birim ekonomisi telemetrisini
(konular 5.3, 5.4) geliştirmeye odaklamak üzere serbest bıraktı. Bu hibrit
yaklaşım, tek bir yıl içinde, tamamen geliştirme stratejisinin iki yılda
ulaştığından daha eksiksiz ve gerçekten daha yararlı bir metrik programı
sağladı.

**Kamu.** Bir federal kurumun ticari mühendislik analitiği platformlarına ilişkin
ilk değerlendirmesi, mevcut satıcılardan hiçbirinin kurumun tüm mühendislik
metrik verisinin belirli, sertifikalı devlet veri merkezlerinde kalmasını
zorunlu kılan veri egemenliği gereksinimlerini karşılayamadığını buldu. Kurum,
satın alma seçeneğini tümden bırakmak yerine, standart ticari fiyatlandırmanın
mütevazı bir prim üstünde, devlet sertifikalı, egemen bulut dağıtım seçenekleri
sunan daha küçük bir satıcı alt kümesini belirledi ve hibrit bir programı
başarıyla devreye aldı: gereken egemenlik sınırı içinde hazır mal metrik
katmanı için satın alınan araçlar ve kurumun, egemenlik dikkate alınmaksızın
hiçbir mevcut ticari satıcının karşılamadığı vatandaş sonucu telemetrisi
ihtiyaçları için kurum içinde geliştirilen araçlar.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Bilinçli, hibrit bir kendin yap ya da satın al stratejisinin getirisi, bu
konunun örneklerinin gösterdiği iki başarısızlık biçiminden de kaçınmaktır:
piyasada zaten ucuza bulunan hazır mal yeteneğini geliştirmenin boşa giden, çok
yıllı mühendislik yatırımı ve gerçekten kuruma özgü bir ihtiyacı uyumsuz bir
ticari araca sokmaya zorlamanın hayal kırıklığı ile sonunda ortaya çıkan
özelleştirme maliyeti. Yukarıdaki kurumsal örnek bunu somut olarak gösterir:
hibrit yaklaşım bir yılda, tamamen geliştirme stratejisinin iki yılda
sağladığından daha çok gerçek değer sağladı.

Her iki yol için toplam sahip olma maliyeti, çoğu zaman hafife alınan
entegrasyon maliyetini ve özellikle satın alınan araçlar için, veri
taşınabilirliği baştan sözleşmeyle doğrulanıp korunmadıkça olası satıcı
kilitlenmesinin süregelen risk maliyetini içerir. Bunların ikisini de yalnızca
lisans ücretlerine ya da geliştirme saatlerine dar bir odaklanma yerine
gerçekçi biçimde bütçelemek, her iki seçenek için çok daha doğru bir toplam
maliyet tablosu üretir.

## Anti-desenler ve tuzaklar

- **İyi standartlaşmış, hazır mal metrikler için özel araç geliştirmek:**
  birçok satıcının zaten ağır biçimde yatırım yaptığı mühendislik çabasını
  tekrarlar.
- **Gerçekten kuruma özgü sonuç telemetrisi için, önce uyumu denetlemeden
  ticari araç satın almak:** pahalı, uyumsuz özelleştirme ya da karşılanmamış
  bir ihtiyaç riski taşır.
- **Bir satıcıya bağlanmadan önce veri dışa aktarma ve taşınabilirliği
  değerlendirmemek:** yalnızca ayrılmaya çalışırken fark edilen kalıcı, pahalı
  kilitlenme riski taşır.
- **Kararın her iki tarafında entegrasyon maliyetini hafife almak:** hatalı bir
  toplam maliyet karşılaştırması ve gerçekçi olmayan takvimler üretir.
- **Tedarik, güvenlik ya da egemenlik kısıtlarını değerlendirme sürecinin
  geç aşamalarına kadar yok saymak:** yeteneğiyle ilgisiz nedenlerle
  uygulanamaz çıkan seçeneklere değerlendirme çabası harcatır.
- **Bunu tek, ya hep ya hiç bir karar saymak:** çoğu kurumun gerçek, karma
  ihtiyaçlarına en iyi uyan hibrit yaklaşımı kaçırır.

## Olgunluk modeli

- **Düzey 1, Başlatma:** Araç kararları gelişigüzel verilir; bilinçli bir
  kendin yap ya da satın al analizi ya da veri taşınabilirliği değerlendirmesi
  yoktur.
- **Düzey 2, Geliştirme:** Bir miktar analiz yapılır, ancak entegrasyon maliyeti
  rutin olarak hafife alınır ve hibrit yaklaşım bilinçli olarak düşünülmez.
- **Düzey 3, Standartlaştırma:** Bilinçli, hibrit bir kendin yap ya da satın al
  stratejisi, hazır mal metrikleri satın alınan araçlarla, kuruma özgü sonuç
  telemetrisini geliştirilen araçlarla tutarlı biçimde eşleştirir.
- **Düzey 4, Yönetme:** Satın alınan tüm araçlar için veri taşınabilirliği
  doğrulanmış ve sözleşmeyle korunmuştur; tedarik, güvenlik ve egemenlik
  kısıtları açıkça ve erken hesaba katılır.
- **Düzey 5, Orkestrasyon:** Kurumun araç ortamı, ticari ürünler ve kurumsal
  ihtiyaçlar geliştikçe düzenli olarak gözden geçirilen, olgun, bilinçli bir
  hibrit stratejiyi yansıtır; hem satın alınan hem geliştirilen bileşenlerden
  kanıtlanmış değer elde edilir.

## Tartışma önerileri

1. Mevcut metriklerimizden hangileri, şu anda alamadığımız özelleştirmeden en çok yararlanırdı?
2. Satıcı değiştirmemiz gerekirse tüm geçmiş metrik verimizi dışa aktarabileceğimizi doğruladık mı?
3. Son araç kararımız entegrasyon maliyetini gerçekçi biçimde hesaba kattı mı?
4. Hangi tedarik, güvenlik ya da egemenlik kısıtını hafife alıyor olabiliriz?
5. Bizim özel metrik setimiz için bilinçli bir hibrit strateji nasıl görünürdü?

## Temel çıkarımlar

- Bu nadiren ya hep ya hiçtir; olgun programların çoğu **hazır mal metrikleri
  için satın alınan araçları, kuruma özgü sonuç telemetrisi için geliştirilen
  araçlarla birleştirir**.
- **Standartlaşmış metrikler için satın alın** (DORA, gözden geçirme analitiği,
  anket altyapısı); **gerçekten kuruma özgü** sonuç ölçümü için geliştirin.
- Bir satıcıya bağlanmadan önce **veri sahipliğini ve taşınabilirliğini**
  değerlendirin; kilitlenme yalnızca bir rahatsızlık değil, kalıcı bir risktir.
- Kararın her iki tarafında **entegrasyon maliyetini gerçekçi biçimde
  bütçeleyin**; sıklıkla hafife alınır.
- **Tedarik, güvenlik ve egemenlik kısıtları** saf bir maliyet-fayda hesabını,
  özellikle kamu kuruluşları için, geçersiz kılabilir.

## Kaynaklar ve ileri okuma

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (bu konunun kendin yap ya da satın al analizinin
  uygulandığı metrik aileleri).
- *Cloud FinOps*, J.R. Storment ve Mike Fuller (araç yatırım kararlarına
  uygulanabilir maliyet analizi ilkeleri).
- FinOps Foundation'ın FinOps Framework'ü, [finops.org](https://www.finops.org/)
  (bulut ve SaaS araç maliyetlerini değerlendirme ve yönetme konusunda
  uygulayıcı rehberliği).
- U.S. Federal Risk and Authorization Management Program (FedRAMP)
  belgeleri: kamu bulut aracı güvenliği ve egemenlik gereksinimleri üzerine
  yetkili rehberlik.
