# 2.6 Döngü süresi (cycle time) ve bileşenleri

## Genel bakış ve motivasyon

**Cycle time** (döngü süresi), bir değişikliğin akış süresinin (konu 2.4) iç dökümüdür. Bu döküm, süreyi mühendislik aşamalarına ayırır: kodlama süresi, inceleme süresi, test süresi ve dağıtım süresi. Bunlar bazen ayrıca iki parçaya bölünür: pickup time (bir değişikliğin, biri üzerinde çalışmaya başlamadan önce beklediği süre) ve active time (biri çalışmaya başladıktan sonra geçen süre). Akış süresi, bir değişikliğin tüm değer akışı boyunca uçtan uca ne kadar sürdüğünü tek bir sayıyla verir. [Cycle time](https://en.wikipedia.org/wiki/Cycle_time) ise bu sürenin mühendislik tarafına geçtikten sonra gerçekte nereye gittiğini söyler. Konu 2.4'ün özet sayısının altında durduğunu vaat ettiği tanı katmanı budur.

Bu ayrım önemlidir, çünkü "lead time çok uzun" demek tek başına harekete geçirmez. Lead time'ı kodlama süresi belirleyen bir ekibin ihtiyacı olan müdahale, lead time'ı üç günlük bir inceleme kuyruğunun belirlediği ekibinkinden farklıdır. Zamanının çoğunu kararsız ve yavaş bir test paketinde kaybeden üçüncü bir ekip için de yine başka bir müdahale gerekir. Cycle time'ı bileşenlerine ayırmadığınızda ekipler darboğazı tahmin etmeye çalışır. Tahmin sık sık yanlış çıkar. Yanlış aşamayı düzeltmek gerçek emek harcatırken asıl kısıt olduğu gibi kalır.

Büyük ekiplerde cycle time'ı bileşenlerine ayırmak, kurum çapındaki bir lead time gerilemesini gizemli bir olay olmaktan çıkarıp somut, ele alınabilir bir soruna dönüştürür. Onlarca ekip ortak altyapıyı paylaştığında, ortak bir inceleme darboğazı ya da ortak ve yavaş bir CI hattı her ekibin lead time'ını aynı biçimde yukarı çekebilir. Bu ortak kök nedeni yalnızca ekipler arası bir cycle time karşılaştırması gösterir. Aksi halde her ekip kendi yerel açıklamasını ayrı ayrı tahmin eder.

## Temel ilkeler

- **Cycle time lead time'ı açıklar; onun yerini tutmaz.** İkisini birlikte raporlayın: cycle time tanı, lead time özet olsun.
- **Bekleme süresi çoğunlukla aktif süreden büyüktür.** Yazılım teslimatındaki gecikmenin çoğu, aktif emekten değil, işin kuyrukta boşta beklemesinden gelir (konu 2.5 bunu doğrudan akış verimliliği üzerinden ele alır).
- **Çözüm önermeden önce aşamalara ayırın.** Yanlış aşamaya yönelen bir çözüm emeği boşa harcar. Gerçek darboğaz başka yerdeyken "daha hızlı çalışın" denen bir ekibin moralini de bozabilir.
- **Birçok ekipte ortak görülen bir darboğaz, bir platform yatırımı fırsatıdır;** tek tek ekip sorunlarından ibaret değildir.
- **Cycle time verisi, akış süresiyle (konu 2.4) aynı manipülasyon risklerine açıktır:** bir sayıyı iyi göstermek için sessizce kayan aşama sınırlarına dikkat edin.

## Öneriler

### Her aşama sınırını açıkça ölçümleyin

Bir değişikliğin yolculuğunu, net ve ölçümlenebilir sınırları olan adlandırılmış aşamalara bölün: kodlama (ilk commit'ten pull request'in açılmasına), pickup (pull request'in açılmasından ilk incelemeye), inceleme (ilk incelemeden onaya) ve dağıtım (onaydan üretime). Her geçişin zaman damgasını, kişilerin kendi bildirdiği aşama takibinden değil, sürüm kontrolü ve CI/CD olaylarından otomatik olarak alın. Bu, konu 1.5'teki "beyandan çok ölçümleme" ilkesinin aynısıdır.

### Her aşamada bekleme süresini aktif süreden ayırın

Örneğin inceleme aşamasında, bir pull request'in inceleyicinin başlamasını beklerken el sürülmeden durduğu süre (bekleme süresi) ile inceleme konuşması başladıktan sonra geçen süreyi (aktif süre) birbirinden ayırın. Bu ayrım çoğunlukla baskın maliyetin emek değil kuyruk olduğunu gösterir. Bu da inceleme konuşmalarının kendisini hızlandırmaya çalışan bir çözümden çok farklı bir çözüme işaret eder: daha fazla inceleyici kapasitesi, daha iyi bildirimler, incelemesi daha kolay küçük pull request'ler.

### Ekip ekip teşhise geçmeden önce ortak darboğaz arayın

Birden çok ekipte aynı aşama baskın gecikme olarak görünüyorsa (yavaş bir ortak CI hattı, aşırı yüklenmiş ortak bir inceleme havuzu, seyrek çıkan ortak bir sürüm treni) bu ortak neden bir platform düzeyi yatırım fırsatıdır. İlgisiz yerel sorunlar dizisi olarak görmeyin. Her ekibin darboğazının yalnızca o ekibe özgü olduğunu varsaymadan önce, bu örüntüyü aramak için cycle time verisini ekipler arasında toplayın.

### Gerçekçi, aşamaya özgü iyileştirme hedefleri koymak için cycle time'ı kullanın

Ekibe nereye odaklanacağını söylemeyen "lead time'ı yüzde 20 azaltın" gibi tek bir hedef yerine, cycle time dökümünü aşamaya özgü hedefler koymak için kullanın: "medyan inceleme bekleme süresini iki günden dört saate indirin." Aşamaya yönelik somut bir hedef, ekibin harekete geçmesi için de daha kolaydır. Başarının başka bir yerdeki ilgisiz bir değişimle değil, gerçek bir süreç değişikliğiyle geldiğini doğrulamak için de daha kolaydır.

### Aşama sınırı manipülasyonuna dikkat edin

Akış süresinin başlangıç ve bitiş noktaları kayabildiği gibi (konu 2.4), tek tek cycle time aşama sınırları da gerçek bir iyileşme olmadan belirli bir aşamanın sayısını güzelleştirecek biçimde kayabilir. Örneğin inceleyici gerçekten değişikliği okumaya başladığında değil, atandığı anda incelemeyi "başladı" olarak işaretlemek böyle bir kaymadır. Aşama sınırı ölçümlemesini belgelenmiş tanımına göre düzenli aralıklarla denetleyin.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| İri taneli cycle time (iki ya da üç aşama) | Ölçümlemesi ve anlatması basit | Harekete geçmeye yetecek kadar kesin biçimde asıl darboğazı göstermeyebilir |
| İnce taneli cycle time (çok aşama, bekleme/aktif ayrımı) | Kesin teşhis, aşamaya özgü uygulanabilir hedefler | Daha fazla ölçümleme emeği; sürdürülecek ve anlatılacak daha çok sayı |
| Ekip ekip cycle time incelemesi | Her ekibin gerçek iş akışına göre uyarlanmış | Benzer yerel sayıların arkasına saklanan ortak, ekipler arası bir darboğazı kaçırabilir |
| Ekipler arası toplu cycle time incelemesi | Ortak platform düzeyi darboğazları ortaya çıkarır | Anlamlı olması için ekipler arasında standartlaştırılmış aşama tanımları gerektirir |

Temel gerilim, **tanı kesinliği ile ölçümleme maliyeti** arasındadır. Daha ince taneli cycle time takibi daha uygulanabilir bir teşhis verir. Ancak kurması ve sürdürmesi daha pahalıdır ve bir ekibin anlaması ve güvenmesi gereken sayıları çoğaltır. Gerilimi şöyle çözün: iri taneli başlayın (kodlama, inceleme, dağıtım). Daha ince ayrımları (bir aşama içinde bekleme ve aktif süre) ancak o aşamanın gerçek ve tekrarlayan bir darboğaz olduğu, ek ölçümleme yatırımına değdiği doğrulandıktan sonra ekleyin.

## Ekibinizle tartışılacak sorular

1. **Bugün lead time gerilese, hangi aşamanın sorumlu olduğunu tahminle değil veriyle bir saat içinde söyleyebilir miyiz?** Bu, cycle time ölçümlemenizin tanı amacına gerçekten hizmet edip etmediğinin temel sınavıdır. Dürüst cevap hayırsa, bir sonraki gerileme gelmeden bu boşluğu kapatmaya değer.

2. **Baskın darboğaz aşamamızda gecikmenin ne kadarı bekleme, ne kadarı aktif süre?** Çoğu ekip, kontrol etmeden önce kısıtın aktif emek olduğunu varsayar. Oysa kuyruk genellikle daha büyük maliyettir. En yavaş aşamanız için gerçek dağılımı çekin ve varsayımın tutup tutmadığına bakın.

3. **Birden çok ekip aynı baskın darboğaz aşamasını paylaşıyor mu? Bu, ekip düzeyinde değil platform düzeyinde bir çözüme mi işaret ediyor?** Her ekibin yavaşlığının yerel kaynaklı olduğunu varsaymadan önce, cycle time verinizi ekipler arasında toplayın ve bu örüntüyü açıkça arayın.

4. **Aşamaya özgü iyileştirme hedeflerimiz var mı, yoksa nereye odaklanılacağını söylemeyen tek bir genel lead time hedefi mi?** Bulanık bir hedef ekibi emeğini nereye yatıracağını tahmin etmeye bırakır; aşamaya özgü hedef bırakmaz. Mevcut hedeflerinizi bu ayrıma göre gözden geçirin.

5. **Ölçümlememizdeki herhangi bir cycle time aşama sınırı zamanla belgelenmiş tanımından saptı mı?** Aşama sınırları, akış süresinin kendisiyle aynı tanım kaymasına açıktır (konu 2.4). Yakın zamandaki aşama geçişi olaylarından bir örneklemi yazılı tanımla karşılaştırarak denetleyin.

6. **İnceleme ağırlıklı bir kültürle güven ağırlıklı bir kültür cycle time verimizde nasıl farklı görünür?** Çok titiz, çok turlu incelemesi olan bir ekip, tek onayla birleştirmeye güvenen bir ekipten daha uzun inceleme aşaması süresi gösterir. Mevcut dengenizin bilinçli bir tercihi mi yoksa sorgulanmamış bir varsayılanı mı yansıttığını tartışın.

## Sektörel bakış

**Startup.** Süreç asgari düzeyde olduğu için cycle time çoğunlukla inceleme ya da dağıtım aşamalarından çok kodlama süresiyle belirlenir. Ekip birkaç mühendisin ötesine büyüdüğünde, özellikle inceleme bekleme süresini izlemeye başlayın. Daha çok kişinin işinin daha az sayıda inceleyiciden geçmesi gerektiğinde yavaşlayan ilk aşama genellikle budur.

**Küçük işletme.** Temel sürüm kontrol platformu analitikleri çoğunlukla özel ölçümleme gerektirmeden yeterli aşama düzeyi zamanlama verisi sunar (ilk incelemeye kadar geçen süre, birleştirmeye kadar geçen süre). Önce inceleme aşamasına odaklanın. En yaygın erken darboğaz odur ve inceleyici rotasyonu gibi küçük bir süreç değişikliğiyle en kolay düzelen yerdir.

**Kurumsal.** Onlarca ekibi kapsayan ortak darboğazlar yaygındır ve bulunmaları yüksek kaldıraçlıdır: aşırı yüklenmiş tek bir ortak CI kuyruğu ya da zorunlu bir merkezi inceleme adımı, kurum genelinde lead time'a sessizce vergi koyuyor olabilir. Bu ortak kısıtları ortaya çıkarmak için, her ekibi kendi başına teşhis etmeye bırakmak yerine, özellikle ekipler arası cycle time toplamasına yatırım yapın.

**Kamu.** Cycle time verisi, şüpheci paydaşları süreç modernizasyonuna ikna etmek için güçlü ve somut bir araçtır. "Tek bir darboğaz olmuş onay rolü yüzünden inceleme bekleme süresi ortalama dört gün" cümlesi, soyut bir "süreçimiz yavaş" iddiasından çok daha ikna edici ve somut bir yatırım gerekçesidir.

## Örnekler

**Kurumsal.** Bir bulut altyapısı şirketinin mühendislik yönetimi, lead time'ın neredeyse her ekipte aynı anda yükseldiğini fark etti. Ekipler arası cycle time toplaması, baskın ve ortak nedenin aktif inceleme süresi değil inceleme bekleme süresi olduğunu gösterdi: onayına ihtiyaç duyan ekip sayısı, küçük ve merkezi bir güvenlik inceleme ekibinin kendisinden hızlı büyüdüğü için bu ekip darboğaz olmuştu. Tek tek ekiplerden bir şekilde daha hızlı kod yazmalarını ya da test etmelerini istemek yerine, güvenlik sertifikalı inceleyici havuzunu genişletip eğitmek ortak darboğazı çözdü. Lead time bir çeyrek içinde tüm ekiplerde geri düştü.

**Kamu.** Bir eyalet hükümetinin dijital hizmetler ekibi lead time'ı düşürme baskısı altındaydı ve önce mühendislerden daha hızlı çalışmalarını isteyerek karşılık verdi. Bu doğal ama sonuçta işe yaramayan bir içgüdüydü. Cycle time dökümü, aktif kodlama süresinin yıldan yıla neredeyse hiç değişmediğini gösterdi. Gerilemenin neredeyse tamamı, on sekiz ay önce uyum önlemi olarak getirilen zorunlu mimari inceleme aşamasındaki büyüyen kuyruktan geliyordu. Ekip bu incelemeyi, düşük riskli değişiklikler için daha hafif ve risk kademeli bir sürece dönüştürdü. İnceleme bekleme süresi belirgin biçimde azaldı, gerçekten yüksek riskli değişiklikler için tam inceleme titizliği korundu.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Cycle time dökümünün getirisi, hedefli ve etkili yatırımdır. Hangi aşamanın darboğaz olduğunu tam olarak bilen bir kurum, bir şeyler işe yarar umuduyla emeği tüm sürece ince ince yaymak yerine tam o aşamayı düzeltebilir. Yukarıdaki güvenlik incelemesi örneği tipiktir: belirli bir darboğaz kaynağını genişleten, tam hedefe yönelik bir çözüm, kurum çapındaki sorunu geniş ve odaksız bir "teslimatı hızlandır" girişiminden çok daha ucuza çözdü.

Toplam sahip olma maliyeti (TCO), aşama düzeyindeki zaman damgalarını güvenilir biçimde toplamanın ölçümleme emeği ile aşama sınırlarının kaymaya karşı düzenli denetlenmesi disiplinidir. Bu maliyete değer, çünkü alternatifi olan darboğaz tahmini ve yanlış aşamayı düzeltmek, zaman içinde ölçümlemenin kendisinin maliyetinden çok daha fazla mühendislik emeğini boşa harcar.

## Anti-desenler ve tuzaklar

- **Cycle time teşhisi yapmadan lead time gerilemesine tepki vermek:** sık sık yanlış aşamanın düzeltilmesine yol açar.
- **Baskın maliyetin bekleme süresi değil aktif emek olduğunu varsaymak:** genellikle yanlıştır; gerçek teslimat hatlarının çoğunda kuyruk baskındır (konu 2.5).
- **Cycle time'ı yalnızca ekip ekip inceleyerek ortak, ekipler arası bir darboğazı kaçırmak:** yüksek kaldıraçlı bir platform çözümünü keşfedilmemiş bırakır.
- **Aşamaya özgü yönlendirme olmadan bulanık bir genel lead time hedefi koymak:** ekipleri emeği nereye vereceklerini tahmin etmeye bırakır.
- **Aşama sınırı tanım kayması:** gerçek bir iyileşme olmadan belirli bir aşamanın sayısını güzelleştirir.
- **Hiçbirinin gerçek bir darboğaz olduğunu doğrulamadan, mümkün olan her ince taneli aşamayı ölçümlemek:** henüz bir kararı beslemeyen ayrıntıya ölçümleme emeği harcar.

## Olgunluk modeli

- **Düzey 1, Başlangıç (Initiate):** Cycle time hiç bileşenlerine ayrılmaz; lead time gerilediğinde ekipler darboğazı tahmin eder.
- **Düzey 2, Geliştirme (Develop):** Bazı ekipler iri taneli aşama zamanlamasını gayriresmi olarak izler, ancak tutarlı bir ölçümleme ya da ekipler arası karşılaştırma yoktur.
- **Düzey 3, Standartlaştırma (Standardize):** Aşama sınırları kurum genelinde tutarlı biçimde ölçümlenir; baskın darboğaz aşamalarında bekleme süresi aktif süreden ayrılmıştır.
- **Düzey 4, Yönetme (Manage):** Ekipler arası cycle time toplaması ortak darboğazları etkin biçimde ortaya çıkarır; aşamaya özgü iyileştirme hedefleri bulanık genel lead time hedeflerinin yerini alır.
- **Düzey 5, Yönlendirme (Orchestrate):** Cycle time verisi platform yatırım önceliklendirmesini doğrudan yönlendirir. Kurum, birçok ekibin lead time'ını aynı anda ölçülebilir biçimde iyileştiren belirli ve hedefli çözümleri (genişletilmiş bir inceleme havuzu, daha hızlı bir ortak hat) gösterebilir.

## Tartışma önerileri

1. Şu anki baskın darboğaz aşamamız hangisi ve bu cevaba ne kadar güveniyoruz?
2. O darboğaz aşamasının süresinin ne kadarı bekleme, ne kadarı aktif süre?
3. Ekiplerimizden herhangi biri aynı darboğazı paylaşıyor mu, bu bir platform düzeyi çözüme mi işaret ediyor?
4. Genel yerine aşamaya özgü bir teslimat iyileştirme hedefini en son ne zaman koyduk?
5. Araçlarımızdaki bir aşama sınırı tanımı hiç belgelenmeden değişti mi?

## Temel çıkarımlar

- Cycle time, **akış süresini** mühendislik aşamalarına (kodlama, inceleme, test, dağıtım) **ayırır** ve bu özet sayının altındaki tanı katmanıdır.
- Her aşamada **bekleme süresini aktif süreden** ayırın; kuyruk genellikle aktif emekten baskındır (konu 2.5).
- Bir yavaşlamanın ekibe özgü olduğunu varsaymadan önce **ekipler arası ortak darboğazları** arayın; ortak neden çoğunlukla bir platform yatırımı fırsatıdır.
- Ekiplerin tam olarak nereye odaklanacaklarını bilmesi için bulanık genel hedefler yerine **aşamaya özgü iyileştirme hedefleri** koyun.
- Aşama sınırları, akış süresinin kendisiyle aynı **tanım kayması** riskine açıktır; bunları düzenli aralıklarla denetleyin.
- Konu 2.7, iş akışındaki iş miktarı ile cycle time'ın neden birlikte hareket ettiğinin altındaki matematiği, yani Little yasasını verir.

## Kaynaklar ve ileri okuma

- *The Principles of Product Development Flow*, Donald G. Reinertsen (cycle time analizinin dayandığı kuyruk kuramı ve parti büyüklüğü akıl yürütmesi).
- *Actionable Agile Metrics for Predictability*, Daniel S. Vacanti (yazılım teslimatı için cycle time ve akış temelli ölçüm).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez Humble ve Gene Kim (lead time ve teslimat performansıyla ilişkisi).
- *The Goal*, Eliyahu M. Goldratt (kısıtlar kuramı ve her yerde iyileştirme yapmak yerine gerçek darboğazı bulup düzeltme ilkesi).
