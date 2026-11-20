# 6.3 Nöbet, kapasite ve operasyonel yük metrikleri

## Genel bakış ve motivasyon

Konu 6.1'in tanıttığı güvenilirlik ve konu 6.2'nin ölçtüğü olay müdahalesi, bu
konunun doğrudan ölçtüğü bir insan sistemine dayanır: nöbet düzeni (on-call
rotation), yani çağrı cihazı taşıyan ve bir şey bozulduğunda müdahale eden
mühendisler ve bir sistemin bozulmaya başlamadan önce ne kadar yük
kaldırabileceğini belirleyen altyapı kapasitesi. Bir kurumun mükemmel SLO'ları,
iyi tasarlanmış hata bütçeleri ve gerçekten suçlamasız bir olay kültürü olabilir;
yine de sürdürülemez bir yükle nöbetçi mühendislerini tüketebilir ve bu yük,
diğer pratiklerin korumak için kurulduğu güvenilirliğin ta kendisini sonunda
aşındırır.

Bu konu operasyonel yükü başlı başına bir metrik ailesi olarak ele alır. Konu
3.2'nin iyi oluş ve [tükenmişlik](https://en.wikipedia.org/wiki/Occupational_burnout)
ölçümüne doğrudan bağlıdır, ancak çağrı cihazı taşımanın kendine özgü, keskin
stresine odaklanır: bölünen uyku, hiçbir şey olmasa bile nöbette olmanın
psikolojik bedeli ve sık, kötü dağıtılmış olay yükünün birikimli etkisi.
Sistemlerinin güvenilirliğini titizlikle ölçen ama o sistemleri güvenilir tutan
insanların sürdürülebilirliğini hiç ölçmeyen bir kurum, resmin yalnızca yarısını
ölçüyordur. Ölçülmeyen yarı da eninde sonunda işten ayrılma, bitkin müdahale
edenler yüzünden düşen olay müdahale kalitesi ya da ikisi olarak yüzeye çıkma
eğilimindedir.

Büyük ekipler için nöbet ve kapasite metrikleri, konu 3.5'in bilgi yoğunlaşması
kaygılarını yansıtan yük dengeleme sorunlarını ortaya çıkarır: az sayıda
mühendis, çoğu zaman tam da olayları en hızlı çözebildikleri için en deneyimli
kişiler, sayfaların orantısız bir payını üstlenir; bu hem tükenmişlik riskini hem
de otobüs faktörü riskini aynı anda yaratır. Gece gündüz kritik hizmet işleten
kurumsal şirketler ve kamu kurumları, gerçek maliyeti ancak işten ayrılmalar
yoluyla keşfetmek yerine nöbet düzenlerini sürdürülebilir biçimde
görevlendirmek için bu konunun metriklerine dayanır.

## Temel ilkeler

- **Nöbet yükü ölçülebilir, yönetilebilir bir kaynaktır**; mühendislerin
  yalnızca sırtlanması gereken kaçınılmaz, sınırsız bir yük değil.
- **Sayfa sıklığı ve sayfa dağılımı ikisi de önemlidir.** Ekip geneli bir ortalama,
  az sayıda kişi üzerindeki ciddi yoğunlaşmayı gizleyebilir.
- **Nöbet sırasındaki kesinti, gerçekte hiçbir olay olmasa bile bir bedel taşır**:
  ulaşılabilir ve sorumlu olmanın psikolojik ağırlığı.
- **Kapasite planlaması ve nöbet yükü birbirine bağlıdır.** Yetersiz kaynaklı
  altyapı daha fazla sayfa üretir ve nöbet yükünü doğrudan artırır.
- **Sürdürülebilir bir nöbet sistemi güvenilirliğin kendisini korur**, çünkü
  bitkin müdahale edenler olaylar sırasında daha yavaş, daha hataya yatkın
  kararlar verir.

## Öneriler

### Yalnızca ekip düzeyinde bir ortalamayı değil, sayfa sıklığını ve dağılımını izleyin

Yalnızca ciddi yoğunlaşmayı gizleyebilen ekip geneli bir ortalamayı değil, her
nöbetçi mühendisin kaç sayfa aldığını ölçün. Konu 3.5'in otobüs faktörü ve konu
2.9'un gözden geçiren yükü kaygılarına benzer biçimde, nöbet yükü çoğu zaman
olayları en hızlı çözebilen az sayıda deneyimli kişide yoğunlaşır; bu örüntü hem
tükenmişlik riskini hem de tehlikeli bir tekil hata noktasını yaratır. Bu
yoğunlaşma ortaya çıktığında nöbet düzenlerini bilinçli olarak yeniden dengeleyin.

### Yalnızca aktif olay süresini değil, nöbette olmanın psikolojik bedelini ölçün

Nöbette olmak, hiç gerçek sayfa gelmeyen bir vardiyada bile gerçek bir bedel
taşır: olası bir kesintiyi beklemekten kaynaklanan düşük uyku kalitesi,
kısıtlanmış kişisel etkinlikler ve süregelen sorumluluğun düşük yoğunluklu
stresi. Mümkün olduğunda bunu, genel memnuniyetten ayrı olarak özellikle nöbet
deneyimine dair anket verisiyle (konu 3.7) yakalayın; çünkü bir ekip makul bir
genel memnuniyet bildirirken nöbet özellikle iyi oluşu sessizce aşındırıyor
olabilir.

### Sürdürülebilir nöbet sıklığına açık sınırlar koyun

Herhangi bir bireyin ne sıklıkta nöbet tutması gerektiğine dair makul bir azami
sıklık belirleyin; genellikle dört ya da beş haftada bir haftadan fazla değil.
Gerçek nöbet sıklığını bu sınıra karşı izleyin. Kâğıt üzerinde yeterince kişi
listelenmiş ama beceri boşlukları ya da müsaitlik kısıtları yüzünden fiilen iki
üç kişiye dayanan bir düzen, nominal çizelge ne gösterirse göstersin sınırı
gerçekte karşılamıyordur.

### Kapasite planlamasını doğrudan nöbet yüküne bağlayın

Yetersiz kaynaklı altyapı, trafik sıçramaları için yetersiz boşluk, yetersiz
otomatik ölçekleme yapılandırması, tanım gereği daha fazla sayfa üretir ve nöbet
yükünü doğrudan artırır. Altyapı kapasite kullanımını izleyin ve sayfa sıklığıyla
ilişkilendirin: düzenli olarak kapasite tavanına yakın çalışan ve sayfaların
orantısız bir payını üreten bir hizmet, belirsiz bir operasyonel şikâyet değil,
kapasite yatırımı için doğrudan, ölçülebilir bir gerekçedir.

### Nöbet metriklerini bireysel değerlendirme için değil, kadro ve işe alım kararlarını bilgilendirmek için kullanın

Ek kadro, yanlış pozitif sayfaları azaltacak daha iyi araçlar ya da gerçek olay
sıklığını azaltacak mimari yatırım için gerekçe oluşturmak üzere nöbet yükü
verisini ekip düzeyinde toplulaştırın. Bireyleri doğrudan ilgilendiren her
metrik için bu kitabın tutarlı rehberliğini izleyin (konu 1.2, konu 3.4): belirli
bir mühendisin performansını değerlendirmek için bireysel sayfa yanıt
metriklerini asla kullanmayın. Amaç bireysel skor tutmak değil, sürdürülebilir
kadrolama ve sistem tasarımıdır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Resmî nöbet yükü izlemesi yok | Ek yük yok | Tükenmişlik riski ve otobüs faktörü yoğunlaşması, işten ayrılma olarak yüzeye çıkana kadar görünmez kalır |
| Yalnızca ekip ortalaması sayfa sıklığı | Hesaplaması basit | Ciddi bireysel yoğunlaşmayı gizler |
| Bireysel düzeyde sayfa dağılımı izlemesi | Yoğunlaşmayı ve tükenmişlik riskini doğrudan ortaya koyar | Yalnızca toplulaştırılmış kullanılması, asla bireysel değerlendirme için kullanılmaması için özen gerektirir |
| Sayfa hacmini kaynağında azaltmak için kapasite yatırımı | Kök nedeni giderir, yükü sürdürülebilir biçimde azaltır | Önceden altyapı yatırımı gerektirir |

Temel gerilim **kabullenme ile yatırım** arasındadır. Yüksek sayfa hacmini,
güvenilir bir hizmet işletmenin kaçınılmaz bedeli saymak ve nöbetçi mühendislerden
bunu sırtlanmalarını istemek kolaydır. Ancak bu kabullenme, sonunda kuruma işten
ayrılmalar ve bitkin müdahale edenler yüzünden düşen olay müdahale kalitesi olarak
mal olur. Gerilimi, yükselmiş nöbet yükünü süresiz katlanılacak kaçınılmaz bir
yük olarak değil, gerçek yatırım gerektiren bir sinyal olarak ele alarak çözün:
kapasite iyileştirmeleri, yanlış pozitifleri azaltacak daha iyi uyarılar,
genişletilmiş nöbet kadrosu.

## Ekibinizle tartışılacak sorular

1. **Yalnızca ekip ortalaması değil, nöbet düzenindeki bireyler arasında gerçek
   sayfa dağılımımız nedir?** Gerçek, bireysel düzeydeki veriyi çekin; makul
   görünen bir ekip ortalaması, dramatik biçimde orantısız bir payı üstlenen bir
   iki kişiyi gizleyebilir.

2. **Nöbet olmanın psikolojik bedelini genel memnuniyetten ayrı olarak hiç
   ölçtük mü?** Ölçmediysek, özellikle nöbet deneyimine dair özel ve kısa bir
   anket sorusunun, genel memnuniyet anketimizin (konu 3.2) şu anda kaçırdığı
   bir şeyi ortaya çıkarıp çıkarmayacağını tartışın.

3. **Nominal nöbet çizelgemiz gerçeği yansıtıyor mu, yoksa beceri boşlukları ya
   da müsaitlik yüzünden fiilen yalnızca iki üç kişiye mi dayanıyor?** Bu
   konuda dürüst olun; sekiz isim listeleyen ama fiilen ikisine dayanan bir
   çizelge hiçbir makul sürdürülebilirlik sınırını karşılamıyordur.

4. **Hangi hizmetlerimiz kapasite boşluğuna göre orantısız bir sayfa payı
   üretiyor ve ek altyapı yatırımı bu yükü doğrudan azaltır mı?** Bu gerekçeyi
   gerçek kanıtla kurmak için sayfa sıklığını kapasite kullanım verisiyle açıkça
   çapraz karşılaştırın.

5. **Nöbet yükü verisi hiç, gayriresmî de olsa, kadro ve mimari kararlarını
   bilgilendirmek yerine bir bireyin performansını değerlendirmek için kullanıldı
   mı?** Bu, konu 3.4'ün etkinlik verisi için uyardığı bireysel değerlendirme
   tuzağına, burada operasyonel yük için düşme riski taşır.

6. **En çok sayfa alan nöbetçi mühendisimizi tükenmişlik ya da işten ayrılma
   yüzünden kaybetmek bize neye mal olur ve bu, nöbet düzenini yeniden
   dengelemenin ya da kök neden çözümlerine şimdi yatırım yapmanın maliyetiyle
   nasıl karşılaştırılır?** Bu somut karşılaştırma, çoğu zaman yalnızca
   sürdürülebilirliğe soyut bir çağrıdan daha güçlü bir proaktif yatırım
   gerekçesi oluşturur.

## Sektörel bakış

**Startup.** Nöbet çoğu zaman gayriresmîdir ve zorunlu olarak kurucularda ya da
küçük bir erken dönem mühendislik ekibinde yoğunlaşır. Risk, bilinçli nöbet
düzeni tasarımı hiç düşünülmeden, sürdürülemez bir temponun erkenden olağanlaşması
ve sonradan işe girenler için varsayılan beklenti haline geldikten sonra
geri çevirmenin çok daha zorlaşmasıdır.

**Küçük işletme.** Net bir sürdürülebilirlik sınırı olan (örneğin dört haftada
birden fazla olmayan) basit, açık bir nöbet çizelgesi, özel bir nöbet aracı
olmadan da başarılabilir. Asıl disiplin, düzeni ve adilliğini gayriresmî,
dile getirilmemiş bir düzenleme olarak bırakmak yerine görünür ve açık kılmaktır.

**Kurumsal.** Sayfa dağılımı yoğunlaşması ve ona eşlik eden tükenmişlik ile otobüs
faktörü riskleri burada kötü ölçeklenir; çünkü daha fazla hizmet ve daha fazla
karmaşıklık genellikle daha fazla olası sayfa demektir ve uzmanlık yoğunlaşması
sorunu katlar. Bireysel düzeyde yük izlemesine (yalnızca kadro kararları için
toplulaştırılmış kullanılmak üzere), sayfa hacmini kaynağında azaltacak kapasite
yatırımına ve bilinçli nöbet düzeni yeniden dengelemesine yatırım yapın.

**Kamu.** Kritik kamu altyapısı çoğu zaman gece gündüz nöbet kapsamı gerektirir ve
müdahale gecikirse gerçek sonuçlar doğar; bu hem sürdürülebilir kadrolamanın
önemini hem de tipik kamu sektörü kadro kısıtları altında bunu başarmanın
zorluğunu artırır. Nöbet yükü verisini kadro taleplerini gerekçelendirmek için
açıkça ve doğrudan kullanın; sürdürülebilir nöbet kapasitesini isteğe bağlı bir
kadro tercihi olarak değil, doğrudan ve ölçülebilir bir güvenilirlik gereksinimi
olarak çerçeveleyin.

## Örnekler

**Kurumsal.** Bir bulut altyapı şirketi, bireysel düzeyde sayfa verisini ilk kez
çektiğinde, on beş kişilik nöbet düzenindeki iki kıdemli mühendisin önceki yıl
tüm sayfaların %60'ından fazlasını bizzat ele aldığını gördü. Bunun nedeni hem
karmaşık olayları en hızlı çözmeleri hem de düzenin diğer üyelerinin kendileri
çözmeye çalışmak yerine gayriresmî olarak onlara havale etmeyi öğrenmiş olmasıydı.
İki mühendis de şirketin iyi oluş anketinde (konu 3.2) önemli tükenmişlik
belirtileri bildirdi; liderlik bu anket sinyalini daha önce belirli, ölçülebilir
nöbet yoğunlaşması verisiyle ilişkilendirmemişti. Daha geniş nöbet düzeninde
çözüm özgüveni oluşturacak hedefli eğitimi ve herhangi bir bireye ardışık kaç
sayfa atanabileceğine dair resmî bir üst sınırı da içeren bilinçli bir yeniden
dengeleme çabası, iki mühendisin payını altı ay içinde %25'in altına indirdi ve
bildirdikleri iyi oluşta buna karşılık gelen bir iyileşme görüldü.

**Kamu.** Bölgesel bir su idaresinin nöbetçi mühendislik ekibi, kritik altyapı
izleme için nominal dört kişilik bir düzenle çalışıyordu. Ancak kapasite kullanım
verisi, sürekli işletme tavanına yakın çalışan belirli bir eskimiş pompa
istasyonunun tüm düzende sayfaların yaklaşık yarısını ürettiğini ortaya koydu.
Bu tek pompa istasyonuna yapılan kapasite yükseltmesi, bütçe talebinde sayfa
sıklığı ile kapasite ilişkisi somut destekleyici kanıt olarak kullanılarak
doğrudan finanse edildi ve ertesi yıl içinde kurum genelindeki toplam sayfa
hacmini kabaca %40 azalttı. Bu, nöbet yükünün büyük ölçüde salt bir kadro ya da
süreç sorunu değil, kılık değiştirmiş bir kapasite sorunu olduğunu gösterdi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Nöbet ve kapasite yükünü bilinçli yönetmenin getirisi, önlenen işten ayrılmalar
ve bitkin müdahale edenlerin daha yavaş, daha hataya yatkın kararlar vermesinden
kaynaklanacak güvenilirlik düşüşünün önlenmesidir. Yukarıdaki bulut altyapı örneği
birleşik riski doğrudan gösterir: yönetilmeyen yoğunlaşma aynı anda tükenmişlik ve
otobüs faktörü riski yarattı. Bunu basit, veriye dayalı bir yeniden dengeleme
çabası, iki kıdemli mühendisten birini işten ayrılma yoluyla kaybetme riskine kıyasla
mütevazı bir maliyetle çözdü.

Toplam sahip olma maliyeti, bireysel düzeyde sayfa dağılımını izleyecek
araçlandırmayı (özenle, yalnızca toplulaştırılmış kullanılarak) ve gerektiğinde
sayfa hacmini kaynağında azaltacak gerçek kapasite yatırımını içerir. Su idaresi
örneği bu yatırımın doğrudan ve ölçülebilir biçimde kendini amorti edebildiğini
gösterir: iyi hedeflenmiş tek bir kapasite düzeltmesi kurum genelindeki operasyonel
yükü önemli ölçüde azalttı.

## Anti-desenler ve tuzaklar

- **Yalnızca ekip düzeyinde ortalama sayfa sayısını izlemek:** hem tükenmişliği
  hem otobüs faktörü riskini yönlendiren ciddi bireysel yoğunlaşmayı gizler.
- **Nominal nöbet çizelgesini gerçeği yansıtıyor saymak:** fiilen iki üç kişiye
  dayanan bir çizelge, kaç isim listelenirse listelensin sürdürülebilir değildir.
- **Performansı değerlendirmek için bireysel sayfa yanıt verisini kullanmak:**
  bu kitabın baştan sona uyardığı bireysel değerlendirme tuzağını, burada
  operasyonel yüke uygulayarak tekrarlar.
- **Yüksek sayfa hacmini, kapasiteyi kök neden olarak araştırmak yerine
  güvenilirliğin kaçınılmaz bedeli olarak kabul etmek:** sık bulunan ve doğrudan
  bir çözümü kaçırır.
- **Nöbet yükü verisini iyi oluş anketi verisiyle hiç ilişkilendirmemek:**
  birikimli bir tükenmişlik riskini işten ayrılma olarak yüzeye çıkmadan önce
  belirleyip harekete geçme fırsatını kaçırır.
- **Hiç gerçek sayfa gelmeyen nöbetin psikolojik bedelini yok saymak:** bir nöbet
  düzeninin gerçek yükünü eksik sayar.

## Olgunluk modeli

- **Seviye 1, Başlatma:** Nöbet yükü hiç izlenmez ya da yalnızca bireysel
  yoğunlaşmayı gizleyen ekip geneli bir ortalama olarak izlenir.
- **Seviye 2, Geliştirme:** Bir miktar bireysel düzeyde sayfa verisi vardır, ancak
  iyi oluş anketi verisine ya da kapasite yatırımı kararlarına bağlı değildir.
- **Seviye 3, Standartlaştırma:** Bireysel düzeyde sayfa dağılımı ve kapasite
  kullanımı ilişkisi, nöbet sıklığında açık sürdürülebilirlik sınırlarıyla tutarlı
  biçimde izlenir.
- **Seviye 4, Yönetme:** Nöbet yükü verisi, iyi oluş anketi sinyallerine açıkça
  bağlanarak kapasite yatırımını ve nöbet düzeni yeniden dengelemesini yönlendirmek
  için aktif olarak kullanılır.
- **Seviye 5, Orkestrasyon:** Kurum, hedefli kapasite yatırımı ve nöbet düzeni
  yeniden tasarımından kaynaklanan, hem operasyonel yükte hem iyi oluşta belirli ve
  ölçülebilir iyileşmeleri gösterebilir; sürdürülebilir nöbet kadrolaması da kadro
  ve altyapı planlamasının rutin, iyi gerekçelendirilmiş bir girdisidir.

## Tartışma önerileri

1. Gerçek, bireysel düzeydeki sayfa dağılımımız şu anda neye benziyor?
2. Nominal nöbet çizelgemiz, olayların çoğunu fiilen kimin çözdüğünü yansıtıyor mu?
3. Hangi tek kapasite yatırımı mevcut sayfa hacmimizi en çok azaltırdı?
4. Nöbet yükü verisini hiç iyi oluş anketi sinyalleriyle ilişkilendirdik mi?
5. En çok sayfa alan mühendisimizi tükenmişlik yüzünden kaybetmek bize neye mal olur?

## Temel çıkarımlar

- Nöbet yükü **ölçülebilir, yönetilebilir bir kaynaktır**; ciddi yoğunlaşmayı
  gizleyebilen ekip geneli bir ortalamayı değil, bireysel düzeydeki dağılımı izleyin.
- Nöbette olmanın, hiç gerçek sayfa gelmese bile **psikolojik bir bedeli** vardır;
  bunu genel memnuniyetten ayrı ölçün.
- **Kapasite planlaması ve nöbet yükü doğrudan bağlantılıdır**; yetersiz kaynaklı
  altyapı daha fazla sayfa ve daha fazla yük üretir.
- Nöbet verisini **kadro ve kapasite kararları** için kullanın, bireysel performans
  değerlendirmesi için asla.
- Sürdürülebilir bir nöbet sistemi **güvenilirliğin kendisini korur**, çünkü bitkin
  müdahale edenler daha yavaş, daha hataya yatkın kararlar verir.

## Kaynaklar ve ileri okuma

- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy
  Beyer, Chris Jones, Jennifer Petoff ve Niall Richard Murphy (editörler)
  (nöbet pratiği ve sürdürülebilir operasyonel yük).
- *The Site Reliability Workbook*, Betsy Beyer, Niall Richard Murphy, David K.
  Rensin, Kent Kawahara ve Stephen Thorne (editörler) (pratik nöbet düzeni
  tasarımı rehberliği).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, Christina Maslach ve Michael P. Leiter (tükenmişliğin kurumsal
  nedenleri ve müdahaleleri, nöbet stresine de uygulanabilir).
- *Seeking SRE: Conversations About Running Production Systems at Scale*,
  David N. Blank-Edelman (editör) (sürdürülebilir operasyon pratiğine dair
  uygulayıcı bakış açıları).
